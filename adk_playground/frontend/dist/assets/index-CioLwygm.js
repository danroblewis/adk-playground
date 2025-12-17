function h0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var fa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Za(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vg={exports:{}},el={},bg={exports:{}},Ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zo=Symbol.for("react.element"),m0=Symbol.for("react.portal"),g0=Symbol.for("react.fragment"),x0=Symbol.for("react.strict_mode"),y0=Symbol.for("react.profiler"),v0=Symbol.for("react.provider"),b0=Symbol.for("react.context"),w0=Symbol.for("react.forward_ref"),k0=Symbol.for("react.suspense"),j0=Symbol.for("react.memo"),_0=Symbol.for("react.lazy"),mf=Symbol.iterator;function S0(e){return e===null||typeof e!="object"?null:(e=mf&&e[mf]||e["@@iterator"],typeof e=="function"?e:null)}var wg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kg=Object.assign,jg={};function Ai(e,t,n){this.props=e,this.context=t,this.refs=jg,this.updater=n||wg}Ai.prototype.isReactComponent={};Ai.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ai.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _g(){}_g.prototype=Ai.prototype;function Xu(e,t,n){this.props=e,this.context=t,this.refs=jg,this.updater=n||wg}var Zu=Xu.prototype=new _g;Zu.constructor=Xu;kg(Zu,Ai.prototype);Zu.isPureReactComponent=!0;var gf=Array.isArray,Sg=Object.prototype.hasOwnProperty,ed={current:null},Cg={key:!0,ref:!0,__self:!0,__source:!0};function Ng(e,t,n){var r,i={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)Sg.call(t,r)&&!Cg.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Zo,type:e,key:s,ref:a,props:i,_owner:ed.current}}function C0(e,t){return{$$typeof:Zo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function td(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zo}function N0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var xf=/\/+/g;function Ml(e,t){return typeof e=="object"&&e!==null&&e.key!=null?N0(""+e.key):t.toString(36)}function Js(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Zo:case m0:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Ml(a,0):r,gf(i)?(n="",e!=null&&(n=e.replace(xf,"$&/")+"/"),Js(i,t,n,"",function(u){return u})):i!=null&&(td(i)&&(i=C0(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(xf,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",gf(e))for(var l=0;l<e.length;l++){s=e[l];var c=r+Ml(s,l);a+=Js(s,t,n,c,i)}else if(c=S0(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=r+Ml(s,l++),a+=Js(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ys(e,t,n){if(e==null)return e;var r=[],i=0;return Js(e,r,"","",function(s){return t.call(n,s,i++)}),r}function E0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var jt={current:null},Ks={transition:null},z0={ReactCurrentDispatcher:jt,ReactCurrentBatchConfig:Ks,ReactCurrentOwner:ed};function Eg(){throw Error("act(...) is not supported in production builds of React.")}Ee.Children={map:ys,forEach:function(e,t,n){ys(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ys(e,function(){t++}),t},toArray:function(e){return ys(e,function(t){return t})||[]},only:function(e){if(!td(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ee.Component=Ai;Ee.Fragment=g0;Ee.Profiler=y0;Ee.PureComponent=Xu;Ee.StrictMode=x0;Ee.Suspense=k0;Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z0;Ee.act=Eg;Ee.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=kg({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=ed.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Sg.call(t,c)&&!Cg.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Zo,type:e.type,key:i,ref:s,props:r,_owner:a}};Ee.createContext=function(e){return e={$$typeof:b0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:v0,_context:e},e.Consumer=e};Ee.createElement=Ng;Ee.createFactory=function(e){var t=Ng.bind(null,e);return t.type=e,t};Ee.createRef=function(){return{current:null}};Ee.forwardRef=function(e){return{$$typeof:w0,render:e}};Ee.isValidElement=td;Ee.lazy=function(e){return{$$typeof:_0,_payload:{_status:-1,_result:e},_init:E0}};Ee.memo=function(e,t){return{$$typeof:j0,type:e,compare:t===void 0?null:t}};Ee.startTransition=function(e){var t=Ks.transition;Ks.transition={};try{e()}finally{Ks.transition=t}};Ee.unstable_act=Eg;Ee.useCallback=function(e,t){return jt.current.useCallback(e,t)};Ee.useContext=function(e){return jt.current.useContext(e)};Ee.useDebugValue=function(){};Ee.useDeferredValue=function(e){return jt.current.useDeferredValue(e)};Ee.useEffect=function(e,t){return jt.current.useEffect(e,t)};Ee.useId=function(){return jt.current.useId()};Ee.useImperativeHandle=function(e,t,n){return jt.current.useImperativeHandle(e,t,n)};Ee.useInsertionEffect=function(e,t){return jt.current.useInsertionEffect(e,t)};Ee.useLayoutEffect=function(e,t){return jt.current.useLayoutEffect(e,t)};Ee.useMemo=function(e,t){return jt.current.useMemo(e,t)};Ee.useReducer=function(e,t,n){return jt.current.useReducer(e,t,n)};Ee.useRef=function(e){return jt.current.useRef(e)};Ee.useState=function(e){return jt.current.useState(e)};Ee.useSyncExternalStore=function(e,t,n){return jt.current.useSyncExternalStore(e,t,n)};Ee.useTransition=function(){return jt.current.useTransition()};Ee.version="18.3.1";bg.exports=Ee;var k=bg.exports;const Wt=Za(k),T0=h0({__proto__:null,default:Wt},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0=k,P0=Symbol.for("react.element"),M0=Symbol.for("react.fragment"),L0=Object.prototype.hasOwnProperty,R0=A0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I0={key:!0,ref:!0,__self:!0,__source:!0};function zg(e,t,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)L0.call(t,r)&&!I0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:P0,type:e,key:s,ref:a,props:i,_owner:R0.current}}el.Fragment=M0;el.jsx=zg;el.jsxs=zg;vg.exports=el;var o=vg.exports,Ac={},Tg={exports:{}},Jt={},Ag={exports:{}},Pg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,R){var w=L.length;L.push(R);e:for(;0<w;){var W=w-1>>>1,K=L[W];if(0<i(K,R))L[W]=R,L[w]=K,w=W;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var R=L[0],w=L.pop();if(w!==R){L[0]=w;e:for(var W=0,K=L.length,y=K>>>1;W<y;){var N=2*(W+1)-1,V=L[N],re=N+1,fe=L[re];if(0>i(V,w))re<K&&0>i(fe,V)?(L[W]=fe,L[re]=w,W=re):(L[W]=V,L[N]=w,W=N);else if(re<K&&0>i(fe,w))L[W]=fe,L[re]=w,W=re;else break e}}return R}function i(L,R){var w=L.sortIndex-R.sortIndex;return w!==0?w:L.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,p=null,f=3,h=!1,m=!1,b=!1,j=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=L)r(u),R.sortIndex=R.expirationTime,t(c,R);else break;R=n(u)}}function _(L){if(b=!1,v(L),!m)if(n(c)!==null)m=!0,D(A);else{var R=n(u);R!==null&&C(_,R.startTime-L)}}function A(L,R){m=!1,b&&(b=!1,g(E),E=-1),h=!0;var w=f;try{for(v(R),p=n(c);p!==null&&(!(p.expirationTime>R)||L&&!$());){var W=p.callback;if(typeof W=="function"){p.callback=null,f=p.priorityLevel;var K=W(p.expirationTime<=R);R=e.unstable_now(),typeof K=="function"?p.callback=K:p===n(c)&&r(c),v(R)}else r(c);p=n(c)}if(p!==null)var y=!0;else{var N=n(u);N!==null&&C(_,N.startTime-R),y=!1}return y}finally{p=null,f=w,h=!1}}var S=!1,M=null,E=-1,U=5,z=-1;function $(){return!(e.unstable_now()-z<U)}function q(){if(M!==null){var L=e.unstable_now();z=L;var R=!0;try{R=M(!0,L)}finally{R?Y():(S=!1,M=null)}}else S=!1}var Y;if(typeof x=="function")Y=function(){x(q)};else if(typeof MessageChannel<"u"){var T=new MessageChannel,P=T.port2;T.port1.onmessage=q,Y=function(){P.postMessage(null)}}else Y=function(){j(q,0)};function D(L){M=L,S||(S=!0,Y())}function C(L,R){E=j(function(){L(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){m||h||(m=!0,D(A))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(L){switch(f){case 1:case 2:case 3:var R=3;break;default:R=f}var w=f;f=R;try{return L()}finally{f=w}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,R){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var w=f;f=L;try{return R()}finally{f=w}},e.unstable_scheduleCallback=function(L,R,w){var W=e.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?W+w:W):w=W,L){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=w+K,L={id:d++,callback:R,priorityLevel:L,startTime:w,expirationTime:K,sortIndex:-1},w>W?(L.sortIndex=w,t(u,L),n(c)===null&&L===n(u)&&(b?(g(E),E=-1):b=!0,C(_,w-W))):(L.sortIndex=K,t(c,L),m||h||(m=!0,D(A))),L},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(L){var R=f;return function(){var w=f;f=R;try{return L.apply(this,arguments)}finally{f=w}}}})(Pg);Ag.exports=Pg;var O0=Ag.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0=k,Ht=O0;function ue(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mg=new Set,Co={};function Br(e,t){vi(e,t),vi(e+"Capture",t)}function vi(e,t){for(Co[e]=t,e=0;e<t.length;e++)Mg.add(t[e])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pc=Object.prototype.hasOwnProperty,D0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yf={},vf={};function F0(e){return Pc.call(vf,e)?!0:Pc.call(yf,e)?!1:D0.test(e)?vf[e]=!0:(yf[e]=!0,!1)}function B0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function U0(e,t,n,r){if(t===null||typeof t>"u"||B0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _t(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){lt[e]=new _t(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];lt[t]=new _t(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){lt[e]=new _t(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){lt[e]=new _t(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){lt[e]=new _t(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){lt[e]=new _t(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){lt[e]=new _t(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){lt[e]=new _t(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){lt[e]=new _t(e,5,!1,e.toLowerCase(),null,!1,!1)});var nd=/[\-:]([a-z])/g;function rd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(nd,rd);lt[t]=new _t(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(nd,rd);lt[t]=new _t(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(nd,rd);lt[t]=new _t(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){lt[e]=new _t(e,1,!1,e.toLowerCase(),null,!1,!1)});lt.xlinkHref=new _t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){lt[e]=new _t(e,1,!1,e.toLowerCase(),null,!0,!0)});function id(e,t,n,r){var i=lt.hasOwnProperty(t)?lt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(U0(t,n,i,r)&&(n=null),r||i===null?F0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Wn=$0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vs=Symbol.for("react.element"),Yr=Symbol.for("react.portal"),Qr=Symbol.for("react.fragment"),od=Symbol.for("react.strict_mode"),Mc=Symbol.for("react.profiler"),Lg=Symbol.for("react.provider"),Rg=Symbol.for("react.context"),sd=Symbol.for("react.forward_ref"),Lc=Symbol.for("react.suspense"),Rc=Symbol.for("react.suspense_list"),ad=Symbol.for("react.memo"),Jn=Symbol.for("react.lazy"),Ig=Symbol.for("react.offscreen"),bf=Symbol.iterator;function Ui(e){return e===null||typeof e!="object"?null:(e=bf&&e[bf]||e["@@iterator"],typeof e=="function"?e:null)}var He=Object.assign,Ll;function ro(e){if(Ll===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ll=t&&t[1]||""}return`
`+Ll+e}var Rl=!1;function Il(e,t){if(!e||Rl)return"";Rl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{Rl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ro(e):""}function W0(e){switch(e.tag){case 5:return ro(e.type);case 16:return ro("Lazy");case 13:return ro("Suspense");case 19:return ro("SuspenseList");case 0:case 2:case 15:return e=Il(e.type,!1),e;case 11:return e=Il(e.type.render,!1),e;case 1:return e=Il(e.type,!0),e;default:return""}}function Ic(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qr:return"Fragment";case Yr:return"Portal";case Mc:return"Profiler";case od:return"StrictMode";case Lc:return"Suspense";case Rc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rg:return(e.displayName||"Context")+".Consumer";case Lg:return(e._context.displayName||"Context")+".Provider";case sd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ad:return t=e.displayName||null,t!==null?t:Ic(e.type)||"Memo";case Jn:t=e._payload,e=e._init;try{return Ic(e(t))}catch{}}return null}function V0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ic(t);case 8:return t===od?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Og(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function H0(e){var t=Og(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bs(e){e._valueTracker||(e._valueTracker=H0(e))}function $g(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Og(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ha(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Oc(e,t){var n=t.checked;return He({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function wf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Dg(e,t){t=t.checked,t!=null&&id(e,"checked",t,!1)}function $c(e,t){Dg(e,t);var n=pr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Dc(e,t.type,n):t.hasOwnProperty("defaultValue")&&Dc(e,t.type,pr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function kf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Dc(e,t,n){(t!=="number"||ha(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var io=Array.isArray;function ci(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Fc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(ue(91));return He({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function jf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(ue(92));if(io(n)){if(1<n.length)throw Error(ue(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pr(n)}}function Fg(e,t){var n=pr(t.value),r=pr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function _f(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ws,Ug=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ws=ws||document.createElement("div"),ws.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ws.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function No(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},q0=["Webkit","ms","Moz","O"];Object.keys(po).forEach(function(e){q0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),po[t]=po[e]})});function Wg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||po.hasOwnProperty(e)&&po[e]?(""+t).trim():t+"px"}function Vg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Wg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var J0=He({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Uc(e,t){if(t){if(J0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(ue(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(ue(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(ue(61))}if(t.style!=null&&typeof t.style!="object")throw Error(ue(62))}}function Wc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vc=null;function ld(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hc=null,ui=null,di=null;function Sf(e){if(e=ns(e)){if(typeof Hc!="function")throw Error(ue(280));var t=e.stateNode;t&&(t=ol(t),Hc(e.stateNode,e.type,t))}}function Hg(e){ui?di?di.push(e):di=[e]:ui=e}function qg(){if(ui){var e=ui,t=di;if(di=ui=null,Sf(e),t)for(e=0;e<t.length;e++)Sf(t[e])}}function Jg(e,t){return e(t)}function Kg(){}var Ol=!1;function Gg(e,t,n){if(Ol)return e(t,n);Ol=!0;try{return Jg(e,t,n)}finally{Ol=!1,(ui!==null||di!==null)&&(Kg(),qg())}}function Eo(e,t){var n=e.stateNode;if(n===null)return null;var r=ol(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(ue(231,t,typeof n));return n}var qc=!1;if(On)try{var Wi={};Object.defineProperty(Wi,"passive",{get:function(){qc=!0}}),window.addEventListener("test",Wi,Wi),window.removeEventListener("test",Wi,Wi)}catch{qc=!1}function K0(e,t,n,r,i,s,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var fo=!1,ma=null,ga=!1,Jc=null,G0={onError:function(e){fo=!0,ma=e}};function Y0(e,t,n,r,i,s,a,l,c){fo=!1,ma=null,K0.apply(G0,arguments)}function Q0(e,t,n,r,i,s,a,l,c){if(Y0.apply(this,arguments),fo){if(fo){var u=ma;fo=!1,ma=null}else throw Error(ue(198));ga||(ga=!0,Jc=u)}}function Ur(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Yg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cf(e){if(Ur(e)!==e)throw Error(ue(188))}function X0(e){var t=e.alternate;if(!t){if(t=Ur(e),t===null)throw Error(ue(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Cf(i),e;if(s===r)return Cf(i),t;s=s.sibling}throw Error(ue(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(ue(189))}}if(n.alternate!==r)throw Error(ue(190))}if(n.tag!==3)throw Error(ue(188));return n.stateNode.current===n?e:t}function Qg(e){return e=X0(e),e!==null?Xg(e):null}function Xg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xg(e);if(t!==null)return t;e=e.sibling}return null}var Zg=Ht.unstable_scheduleCallback,Nf=Ht.unstable_cancelCallback,Z0=Ht.unstable_shouldYield,eb=Ht.unstable_requestPaint,Ke=Ht.unstable_now,tb=Ht.unstable_getCurrentPriorityLevel,cd=Ht.unstable_ImmediatePriority,ex=Ht.unstable_UserBlockingPriority,xa=Ht.unstable_NormalPriority,nb=Ht.unstable_LowPriority,tx=Ht.unstable_IdlePriority,tl=null,wn=null;function rb(e){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(tl,e,void 0,(e.current.flags&128)===128)}catch{}}var un=Math.clz32?Math.clz32:sb,ib=Math.log,ob=Math.LN2;function sb(e){return e>>>=0,e===0?32:31-(ib(e)/ob|0)|0}var ks=64,js=4194304;function oo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ya(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=oo(l):(s&=a,s!==0&&(r=oo(s)))}else a=n&~i,a!==0?r=oo(a):s!==0&&(r=oo(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-un(t),i=1<<n,r|=e[n],t&=~i;return r}function ab(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lb(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-un(s),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=ab(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function Kc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nx(){var e=ks;return ks<<=1,!(ks&4194240)&&(ks=64),e}function $l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function es(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-un(t),e[t]=n}function cb(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-un(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function ud(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-un(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Le=0;function rx(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ix,dd,ox,sx,ax,Gc=!1,_s=[],rr=null,ir=null,or=null,zo=new Map,To=new Map,Yn=[],ub="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ef(e,t){switch(e){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":zo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(t.pointerId)}}function Vi(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ns(t),t!==null&&dd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function db(e,t,n,r,i){switch(t){case"focusin":return rr=Vi(rr,e,t,n,r,i),!0;case"dragenter":return ir=Vi(ir,e,t,n,r,i),!0;case"mouseover":return or=Vi(or,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return zo.set(s,Vi(zo.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,To.set(s,Vi(To.get(s)||null,e,t,n,r,i)),!0}return!1}function lx(e){var t=_r(e.target);if(t!==null){var n=Ur(t);if(n!==null){if(t=n.tag,t===13){if(t=Yg(n),t!==null){e.blockedOn=t,ax(e.priority,function(){ox(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Vc=r,n.target.dispatchEvent(r),Vc=null}else return t=ns(n),t!==null&&dd(t),e.blockedOn=n,!1;t.shift()}return!0}function zf(e,t,n){Gs(e)&&n.delete(t)}function pb(){Gc=!1,rr!==null&&Gs(rr)&&(rr=null),ir!==null&&Gs(ir)&&(ir=null),or!==null&&Gs(or)&&(or=null),zo.forEach(zf),To.forEach(zf)}function Hi(e,t){e.blockedOn===t&&(e.blockedOn=null,Gc||(Gc=!0,Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority,pb)))}function Ao(e){function t(i){return Hi(i,e)}if(0<_s.length){Hi(_s[0],e);for(var n=1;n<_s.length;n++){var r=_s[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rr!==null&&Hi(rr,e),ir!==null&&Hi(ir,e),or!==null&&Hi(or,e),zo.forEach(t),To.forEach(t),n=0;n<Yn.length;n++)r=Yn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yn.length&&(n=Yn[0],n.blockedOn===null);)lx(n),n.blockedOn===null&&Yn.shift()}var pi=Wn.ReactCurrentBatchConfig,va=!0;function fb(e,t,n,r){var i=Le,s=pi.transition;pi.transition=null;try{Le=1,pd(e,t,n,r)}finally{Le=i,pi.transition=s}}function hb(e,t,n,r){var i=Le,s=pi.transition;pi.transition=null;try{Le=4,pd(e,t,n,r)}finally{Le=i,pi.transition=s}}function pd(e,t,n,r){if(va){var i=Yc(e,t,n,r);if(i===null)Kl(e,t,r,ba,n),Ef(e,r);else if(db(i,e,t,n,r))r.stopPropagation();else if(Ef(e,r),t&4&&-1<ub.indexOf(e)){for(;i!==null;){var s=ns(i);if(s!==null&&ix(s),s=Yc(e,t,n,r),s===null&&Kl(e,t,r,ba,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Kl(e,t,r,null,n)}}var ba=null;function Yc(e,t,n,r){if(ba=null,e=ld(r),e=_r(e),e!==null)if(t=Ur(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Yg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ba=e,null}function cx(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tb()){case cd:return 1;case ex:return 4;case xa:case nb:return 16;case tx:return 536870912;default:return 16}default:return 16}}var Xn=null,fd=null,Ys=null;function ux(){if(Ys)return Ys;var e,t=fd,n=t.length,r,i="value"in Xn?Xn.value:Xn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return Ys=i.slice(e,1<r?1-r:void 0)}function Qs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ss(){return!0}function Tf(){return!1}function Kt(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ss:Tf,this.isPropagationStopped=Tf,this}return He(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ss)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ss)},persist:function(){},isPersistent:Ss}),t}var Pi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hd=Kt(Pi),ts=He({},Pi,{view:0,detail:0}),mb=Kt(ts),Dl,Fl,qi,nl=He({},ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:md,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qi&&(qi&&e.type==="mousemove"?(Dl=e.screenX-qi.screenX,Fl=e.screenY-qi.screenY):Fl=Dl=0,qi=e),Dl)},movementY:function(e){return"movementY"in e?e.movementY:Fl}}),Af=Kt(nl),gb=He({},nl,{dataTransfer:0}),xb=Kt(gb),yb=He({},ts,{relatedTarget:0}),Bl=Kt(yb),vb=He({},Pi,{animationName:0,elapsedTime:0,pseudoElement:0}),bb=Kt(vb),wb=He({},Pi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kb=Kt(wb),jb=He({},Pi,{data:0}),Pf=Kt(jb),_b={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cb[e])?!!t[e]:!1}function md(){return Nb}var Eb=He({},ts,{key:function(e){if(e.key){var t=_b[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:md,charCode:function(e){return e.type==="keypress"?Qs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zb=Kt(Eb),Tb=He({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mf=Kt(Tb),Ab=He({},ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:md}),Pb=Kt(Ab),Mb=He({},Pi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lb=Kt(Mb),Rb=He({},nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ib=Kt(Rb),Ob=[9,13,27,32],gd=On&&"CompositionEvent"in window,ho=null;On&&"documentMode"in document&&(ho=document.documentMode);var $b=On&&"TextEvent"in window&&!ho,dx=On&&(!gd||ho&&8<ho&&11>=ho),Lf=" ",Rf=!1;function px(e,t){switch(e){case"keyup":return Ob.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xr=!1;function Db(e,t){switch(e){case"compositionend":return fx(t);case"keypress":return t.which!==32?null:(Rf=!0,Lf);case"textInput":return e=t.data,e===Lf&&Rf?null:e;default:return null}}function Fb(e,t){if(Xr)return e==="compositionend"||!gd&&px(e,t)?(e=ux(),Ys=fd=Xn=null,Xr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return dx&&t.locale!=="ko"?null:t.data;default:return null}}var Bb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function If(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bb[e.type]:t==="textarea"}function hx(e,t,n,r){Hg(r),t=wa(t,"onChange"),0<t.length&&(n=new hd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var mo=null,Po=null;function Ub(e){Sx(e,0)}function rl(e){var t=ti(e);if($g(t))return e}function Wb(e,t){if(e==="change")return t}var mx=!1;if(On){var Ul;if(On){var Wl="oninput"in document;if(!Wl){var Of=document.createElement("div");Of.setAttribute("oninput","return;"),Wl=typeof Of.oninput=="function"}Ul=Wl}else Ul=!1;mx=Ul&&(!document.documentMode||9<document.documentMode)}function $f(){mo&&(mo.detachEvent("onpropertychange",gx),Po=mo=null)}function gx(e){if(e.propertyName==="value"&&rl(Po)){var t=[];hx(t,Po,e,ld(e)),Gg(Ub,t)}}function Vb(e,t,n){e==="focusin"?($f(),mo=t,Po=n,mo.attachEvent("onpropertychange",gx)):e==="focusout"&&$f()}function Hb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(Po)}function qb(e,t){if(e==="click")return rl(t)}function Jb(e,t){if(e==="input"||e==="change")return rl(t)}function Kb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var fn=typeof Object.is=="function"?Object.is:Kb;function Mo(e,t){if(fn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Pc.call(t,i)||!fn(e[i],t[i]))return!1}return!0}function Df(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ff(e,t){var n=Df(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Df(n)}}function xx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yx(){for(var e=window,t=ha();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ha(e.document)}return t}function xd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gb(e){var t=yx(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&xx(n.ownerDocument.documentElement,n)){if(r!==null&&xd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Ff(n,s);var a=Ff(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yb=On&&"documentMode"in document&&11>=document.documentMode,Zr=null,Qc=null,go=null,Xc=!1;function Bf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xc||Zr==null||Zr!==ha(r)||(r=Zr,"selectionStart"in r&&xd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),go&&Mo(go,r)||(go=r,r=wa(Qc,"onSelect"),0<r.length&&(t=new hd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zr)))}function Cs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ei={animationend:Cs("Animation","AnimationEnd"),animationiteration:Cs("Animation","AnimationIteration"),animationstart:Cs("Animation","AnimationStart"),transitionend:Cs("Transition","TransitionEnd")},Vl={},vx={};On&&(vx=document.createElement("div").style,"AnimationEvent"in window||(delete ei.animationend.animation,delete ei.animationiteration.animation,delete ei.animationstart.animation),"TransitionEvent"in window||delete ei.transitionend.transition);function il(e){if(Vl[e])return Vl[e];if(!ei[e])return e;var t=ei[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vx)return Vl[e]=t[n];return e}var bx=il("animationend"),wx=il("animationiteration"),kx=il("animationstart"),jx=il("transitionend"),_x=new Map,Uf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(e,t){_x.set(e,t),Br(t,[e])}for(var Hl=0;Hl<Uf.length;Hl++){var ql=Uf[Hl],Qb=ql.toLowerCase(),Xb=ql[0].toUpperCase()+ql.slice(1);gr(Qb,"on"+Xb)}gr(bx,"onAnimationEnd");gr(wx,"onAnimationIteration");gr(kx,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(jx,"onTransitionEnd");vi("onMouseEnter",["mouseout","mouseover"]);vi("onMouseLeave",["mouseout","mouseover"]);vi("onPointerEnter",["pointerout","pointerover"]);vi("onPointerLeave",["pointerout","pointerover"]);Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Br("onBeforeInput",["compositionend","keypress","textInput","paste"]);Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zb=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function Wf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Q0(r,t,void 0,e),e.currentTarget=null}function Sx(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;Wf(i,l,u),s=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;Wf(i,l,u),s=c}}}if(ga)throw e=Jc,ga=!1,Jc=null,e}function De(e,t){var n=t[ru];n===void 0&&(n=t[ru]=new Set);var r=e+"__bubble";n.has(r)||(Cx(t,e,2,!1),n.add(r))}function Jl(e,t,n){var r=0;t&&(r|=4),Cx(n,e,r,t)}var Ns="_reactListening"+Math.random().toString(36).slice(2);function Lo(e){if(!e[Ns]){e[Ns]=!0,Mg.forEach(function(n){n!=="selectionchange"&&(Zb.has(n)||Jl(n,!1,e),Jl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ns]||(t[Ns]=!0,Jl("selectionchange",!1,t))}}function Cx(e,t,n,r){switch(cx(t)){case 1:var i=fb;break;case 4:i=hb;break;default:i=pd}n=i.bind(null,t,n,e),i=void 0,!qc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Kl(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=_r(l),a===null)return;if(c=a.tag,c===5||c===6){r=s=a;continue e}l=l.parentNode}}r=r.return}Gg(function(){var u=s,d=ld(n),p=[];e:{var f=_x.get(e);if(f!==void 0){var h=hd,m=e;switch(e){case"keypress":if(Qs(n)===0)break e;case"keydown":case"keyup":h=zb;break;case"focusin":m="focus",h=Bl;break;case"focusout":m="blur",h=Bl;break;case"beforeblur":case"afterblur":h=Bl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Af;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=xb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Pb;break;case bx:case wx:case kx:h=bb;break;case jx:h=Lb;break;case"scroll":h=mb;break;case"wheel":h=Ib;break;case"copy":case"cut":case"paste":h=kb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Mf}var b=(t&4)!==0,j=!b&&e==="scroll",g=b?f!==null?f+"Capture":null:f;b=[];for(var x=u,v;x!==null;){v=x;var _=v.stateNode;if(v.tag===5&&_!==null&&(v=_,g!==null&&(_=Eo(x,g),_!=null&&b.push(Ro(x,_,v)))),j)break;x=x.return}0<b.length&&(f=new h(f,m,null,n,d),p.push({event:f,listeners:b}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==Vc&&(m=n.relatedTarget||n.fromElement)&&(_r(m)||m[$n]))break e;if((h||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=u,m=m?_r(m):null,m!==null&&(j=Ur(m),m!==j||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=u),h!==m)){if(b=Af,_="onMouseLeave",g="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(b=Mf,_="onPointerLeave",g="onPointerEnter",x="pointer"),j=h==null?f:ti(h),v=m==null?f:ti(m),f=new b(_,x+"leave",h,n,d),f.target=j,f.relatedTarget=v,_=null,_r(d)===u&&(b=new b(g,x+"enter",m,n,d),b.target=v,b.relatedTarget=j,_=b),j=_,h&&m)t:{for(b=h,g=m,x=0,v=b;v;v=qr(v))x++;for(v=0,_=g;_;_=qr(_))v++;for(;0<x-v;)b=qr(b),x--;for(;0<v-x;)g=qr(g),v--;for(;x--;){if(b===g||g!==null&&b===g.alternate)break t;b=qr(b),g=qr(g)}b=null}else b=null;h!==null&&Vf(p,f,h,b,!1),m!==null&&j!==null&&Vf(p,j,m,b,!0)}}e:{if(f=u?ti(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var A=Wb;else if(If(f))if(mx)A=Jb;else{A=Hb;var S=Vb}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(A=qb);if(A&&(A=A(e,u))){hx(p,A,n,d);break e}S&&S(e,f,u),e==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&Dc(f,"number",f.value)}switch(S=u?ti(u):window,e){case"focusin":(If(S)||S.contentEditable==="true")&&(Zr=S,Qc=u,go=null);break;case"focusout":go=Qc=Zr=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,Bf(p,n,d);break;case"selectionchange":if(Yb)break;case"keydown":case"keyup":Bf(p,n,d)}var M;if(gd)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Xr?px(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(dx&&n.locale!=="ko"&&(Xr||E!=="onCompositionStart"?E==="onCompositionEnd"&&Xr&&(M=ux()):(Xn=d,fd="value"in Xn?Xn.value:Xn.textContent,Xr=!0)),S=wa(u,E),0<S.length&&(E=new Pf(E,e,null,n,d),p.push({event:E,listeners:S}),M?E.data=M:(M=fx(n),M!==null&&(E.data=M)))),(M=$b?Db(e,n):Fb(e,n))&&(u=wa(u,"onBeforeInput"),0<u.length&&(d=new Pf("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=M))}Sx(p,t)})}function Ro(e,t,n){return{instance:e,listener:t,currentTarget:n}}function wa(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Eo(e,n),s!=null&&r.unshift(Ro(e,s,i)),s=Eo(e,t),s!=null&&r.push(Ro(e,s,i))),e=e.return}return r}function qr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vf(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Eo(n,s),c!=null&&a.unshift(Ro(n,c,l))):i||(c=Eo(n,s),c!=null&&a.push(Ro(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var ew=/\r\n?/g,tw=/\u0000|\uFFFD/g;function Hf(e){return(typeof e=="string"?e:""+e).replace(ew,`
`).replace(tw,"")}function Es(e,t,n){if(t=Hf(t),Hf(e)!==t&&n)throw Error(ue(425))}function ka(){}var Zc=null,eu=null;function tu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nu=typeof setTimeout=="function"?setTimeout:void 0,nw=typeof clearTimeout=="function"?clearTimeout:void 0,qf=typeof Promise=="function"?Promise:void 0,rw=typeof queueMicrotask=="function"?queueMicrotask:typeof qf<"u"?function(e){return qf.resolve(null).then(e).catch(iw)}:nu;function iw(e){setTimeout(function(){throw e})}function Gl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ao(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ao(t)}function sr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Jf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mi=Math.random().toString(36).slice(2),yn="__reactFiber$"+Mi,Io="__reactProps$"+Mi,$n="__reactContainer$"+Mi,ru="__reactEvents$"+Mi,ow="__reactListeners$"+Mi,sw="__reactHandles$"+Mi;function _r(e){var t=e[yn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$n]||n[yn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Jf(e);e!==null;){if(n=e[yn])return n;e=Jf(e)}return t}e=n,n=e.parentNode}return null}function ns(e){return e=e[yn]||e[$n],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ti(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(ue(33))}function ol(e){return e[Io]||null}var iu=[],ni=-1;function xr(e){return{current:e}}function Fe(e){0>ni||(e.current=iu[ni],iu[ni]=null,ni--)}function Oe(e,t){ni++,iu[ni]=e.current,e.current=t}var fr={},mt=xr(fr),At=xr(!1),Lr=fr;function bi(e,t){var n=e.type.contextTypes;if(!n)return fr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Pt(e){return e=e.childContextTypes,e!=null}function ja(){Fe(At),Fe(mt)}function Kf(e,t,n){if(mt.current!==fr)throw Error(ue(168));Oe(mt,t),Oe(At,n)}function Nx(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(ue(108,V0(e)||"Unknown",i));return He({},n,r)}function _a(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fr,Lr=mt.current,Oe(mt,e),Oe(At,At.current),!0}function Gf(e,t,n){var r=e.stateNode;if(!r)throw Error(ue(169));n?(e=Nx(e,t,Lr),r.__reactInternalMemoizedMergedChildContext=e,Fe(At),Fe(mt),Oe(mt,e)):Fe(At),Oe(At,n)}var An=null,sl=!1,Yl=!1;function Ex(e){An===null?An=[e]:An.push(e)}function aw(e){sl=!0,Ex(e)}function yr(){if(!Yl&&An!==null){Yl=!0;var e=0,t=Le;try{var n=An;for(Le=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}An=null,sl=!1}catch(i){throw An!==null&&(An=An.slice(e+1)),Zg(cd,yr),i}finally{Le=t,Yl=!1}}return null}var ri=[],ii=0,Sa=null,Ca=0,Gt=[],Yt=0,Rr=null,Pn=1,Mn="";function wr(e,t){ri[ii++]=Ca,ri[ii++]=Sa,Sa=e,Ca=t}function zx(e,t,n){Gt[Yt++]=Pn,Gt[Yt++]=Mn,Gt[Yt++]=Rr,Rr=e;var r=Pn;e=Mn;var i=32-un(r)-1;r&=~(1<<i),n+=1;var s=32-un(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Pn=1<<32-un(t)+i|n<<i|r,Mn=s+e}else Pn=1<<s|n<<i|r,Mn=e}function yd(e){e.return!==null&&(wr(e,1),zx(e,1,0))}function vd(e){for(;e===Sa;)Sa=ri[--ii],ri[ii]=null,Ca=ri[--ii],ri[ii]=null;for(;e===Rr;)Rr=Gt[--Yt],Gt[Yt]=null,Mn=Gt[--Yt],Gt[Yt]=null,Pn=Gt[--Yt],Gt[Yt]=null}var Vt=null,Bt=null,Be=!1,ln=null;function Tx(e,t){var n=Xt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Yf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Vt=e,Bt=sr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Vt=e,Bt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Rr!==null?{id:Pn,overflow:Mn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Xt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Vt=e,Bt=null,!0):!1;default:return!1}}function ou(e){return(e.mode&1)!==0&&(e.flags&128)===0}function su(e){if(Be){var t=Bt;if(t){var n=t;if(!Yf(e,t)){if(ou(e))throw Error(ue(418));t=sr(n.nextSibling);var r=Vt;t&&Yf(e,t)?Tx(r,n):(e.flags=e.flags&-4097|2,Be=!1,Vt=e)}}else{if(ou(e))throw Error(ue(418));e.flags=e.flags&-4097|2,Be=!1,Vt=e}}}function Qf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Vt=e}function zs(e){if(e!==Vt)return!1;if(!Be)return Qf(e),Be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!tu(e.type,e.memoizedProps)),t&&(t=Bt)){if(ou(e))throw Ax(),Error(ue(418));for(;t;)Tx(e,t),t=sr(t.nextSibling)}if(Qf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(ue(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Bt=sr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Bt=null}}else Bt=Vt?sr(e.stateNode.nextSibling):null;return!0}function Ax(){for(var e=Bt;e;)e=sr(e.nextSibling)}function wi(){Bt=Vt=null,Be=!1}function bd(e){ln===null?ln=[e]:ln.push(e)}var lw=Wn.ReactCurrentBatchConfig;function Ji(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ue(309));var r=n.stateNode}if(!r)throw Error(ue(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(ue(284));if(!n._owner)throw Error(ue(290,e))}return e}function Ts(e,t){throw e=Object.prototype.toString.call(t),Error(ue(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Xf(e){var t=e._init;return t(e._payload)}function Px(e){function t(g,x){if(e){var v=g.deletions;v===null?(g.deletions=[x],g.flags|=16):v.push(x)}}function n(g,x){if(!e)return null;for(;x!==null;)t(g,x),x=x.sibling;return null}function r(g,x){for(g=new Map;x!==null;)x.key!==null?g.set(x.key,x):g.set(x.index,x),x=x.sibling;return g}function i(g,x){return g=ur(g,x),g.index=0,g.sibling=null,g}function s(g,x,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<x?(g.flags|=2,x):v):(g.flags|=2,x)):(g.flags|=1048576,x)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,x,v,_){return x===null||x.tag!==6?(x=rc(v,g.mode,_),x.return=g,x):(x=i(x,v),x.return=g,x)}function c(g,x,v,_){var A=v.type;return A===Qr?d(g,x,v.props.children,_,v.key):x!==null&&(x.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Jn&&Xf(A)===x.type)?(_=i(x,v.props),_.ref=Ji(g,x,v),_.return=g,_):(_=ia(v.type,v.key,v.props,null,g.mode,_),_.ref=Ji(g,x,v),_.return=g,_)}function u(g,x,v,_){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=ic(v,g.mode,_),x.return=g,x):(x=i(x,v.children||[]),x.return=g,x)}function d(g,x,v,_,A){return x===null||x.tag!==7?(x=zr(v,g.mode,_,A),x.return=g,x):(x=i(x,v),x.return=g,x)}function p(g,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=rc(""+x,g.mode,v),x.return=g,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case vs:return v=ia(x.type,x.key,x.props,null,g.mode,v),v.ref=Ji(g,null,x),v.return=g,v;case Yr:return x=ic(x,g.mode,v),x.return=g,x;case Jn:var _=x._init;return p(g,_(x._payload),v)}if(io(x)||Ui(x))return x=zr(x,g.mode,v,null),x.return=g,x;Ts(g,x)}return null}function f(g,x,v,_){var A=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return A!==null?null:l(g,x,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case vs:return v.key===A?c(g,x,v,_):null;case Yr:return v.key===A?u(g,x,v,_):null;case Jn:return A=v._init,f(g,x,A(v._payload),_)}if(io(v)||Ui(v))return A!==null?null:d(g,x,v,_,null);Ts(g,v)}return null}function h(g,x,v,_,A){if(typeof _=="string"&&_!==""||typeof _=="number")return g=g.get(v)||null,l(x,g,""+_,A);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case vs:return g=g.get(_.key===null?v:_.key)||null,c(x,g,_,A);case Yr:return g=g.get(_.key===null?v:_.key)||null,u(x,g,_,A);case Jn:var S=_._init;return h(g,x,v,S(_._payload),A)}if(io(_)||Ui(_))return g=g.get(v)||null,d(x,g,_,A,null);Ts(x,_)}return null}function m(g,x,v,_){for(var A=null,S=null,M=x,E=x=0,U=null;M!==null&&E<v.length;E++){M.index>E?(U=M,M=null):U=M.sibling;var z=f(g,M,v[E],_);if(z===null){M===null&&(M=U);break}e&&M&&z.alternate===null&&t(g,M),x=s(z,x,E),S===null?A=z:S.sibling=z,S=z,M=U}if(E===v.length)return n(g,M),Be&&wr(g,E),A;if(M===null){for(;E<v.length;E++)M=p(g,v[E],_),M!==null&&(x=s(M,x,E),S===null?A=M:S.sibling=M,S=M);return Be&&wr(g,E),A}for(M=r(g,M);E<v.length;E++)U=h(M,g,E,v[E],_),U!==null&&(e&&U.alternate!==null&&M.delete(U.key===null?E:U.key),x=s(U,x,E),S===null?A=U:S.sibling=U,S=U);return e&&M.forEach(function($){return t(g,$)}),Be&&wr(g,E),A}function b(g,x,v,_){var A=Ui(v);if(typeof A!="function")throw Error(ue(150));if(v=A.call(v),v==null)throw Error(ue(151));for(var S=A=null,M=x,E=x=0,U=null,z=v.next();M!==null&&!z.done;E++,z=v.next()){M.index>E?(U=M,M=null):U=M.sibling;var $=f(g,M,z.value,_);if($===null){M===null&&(M=U);break}e&&M&&$.alternate===null&&t(g,M),x=s($,x,E),S===null?A=$:S.sibling=$,S=$,M=U}if(z.done)return n(g,M),Be&&wr(g,E),A;if(M===null){for(;!z.done;E++,z=v.next())z=p(g,z.value,_),z!==null&&(x=s(z,x,E),S===null?A=z:S.sibling=z,S=z);return Be&&wr(g,E),A}for(M=r(g,M);!z.done;E++,z=v.next())z=h(M,g,E,z.value,_),z!==null&&(e&&z.alternate!==null&&M.delete(z.key===null?E:z.key),x=s(z,x,E),S===null?A=z:S.sibling=z,S=z);return e&&M.forEach(function(q){return t(g,q)}),Be&&wr(g,E),A}function j(g,x,v,_){if(typeof v=="object"&&v!==null&&v.type===Qr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case vs:e:{for(var A=v.key,S=x;S!==null;){if(S.key===A){if(A=v.type,A===Qr){if(S.tag===7){n(g,S.sibling),x=i(S,v.props.children),x.return=g,g=x;break e}}else if(S.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Jn&&Xf(A)===S.type){n(g,S.sibling),x=i(S,v.props),x.ref=Ji(g,S,v),x.return=g,g=x;break e}n(g,S);break}else t(g,S);S=S.sibling}v.type===Qr?(x=zr(v.props.children,g.mode,_,v.key),x.return=g,g=x):(_=ia(v.type,v.key,v.props,null,g.mode,_),_.ref=Ji(g,x,v),_.return=g,g=_)}return a(g);case Yr:e:{for(S=v.key;x!==null;){if(x.key===S)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(g,x.sibling),x=i(x,v.children||[]),x.return=g,g=x;break e}else{n(g,x);break}else t(g,x);x=x.sibling}x=ic(v,g.mode,_),x.return=g,g=x}return a(g);case Jn:return S=v._init,j(g,x,S(v._payload),_)}if(io(v))return m(g,x,v,_);if(Ui(v))return b(g,x,v,_);Ts(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(g,x.sibling),x=i(x,v),x.return=g,g=x):(n(g,x),x=rc(v,g.mode,_),x.return=g,g=x),a(g)):n(g,x)}return j}var ki=Px(!0),Mx=Px(!1),Na=xr(null),Ea=null,oi=null,wd=null;function kd(){wd=oi=Ea=null}function jd(e){var t=Na.current;Fe(Na),e._currentValue=t}function au(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fi(e,t){Ea=e,wd=oi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(zt=!0),e.firstContext=null)}function nn(e){var t=e._currentValue;if(wd!==e)if(e={context:e,memoizedValue:t,next:null},oi===null){if(Ea===null)throw Error(ue(308));oi=e,Ea.dependencies={lanes:0,firstContext:e}}else oi=oi.next=e;return t}var Sr=null;function _d(e){Sr===null?Sr=[e]:Sr.push(e)}function Lx(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,_d(t)):(n.next=i.next,i.next=n),t.interleaved=n,Dn(e,r)}function Dn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Kn=!1;function Sd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rx(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Rn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ar(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Te&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Dn(e,n)}return i=r.interleaved,i===null?(t.next=t,_d(r)):(t.next=i.next,i.next=t),r.interleaved=t,Dn(e,n)}function Xs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ud(e,n)}}function Zf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function za(e,t,n,r){var i=e.updateQueue;Kn=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(s!==null){var p=i.baseState;a=0,d=u=c=null,l=s;do{var f=l.lane,h=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,b=l;switch(f=t,h=n,b.tag){case 1:if(m=b.payload,typeof m=="function"){p=m.call(h,p,f);break e}p=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=b.payload,f=typeof m=="function"?m.call(h,p,f):m,f==null)break e;p=He({},p,f);break e;case 2:Kn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else h={eventTime:h,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=h,c=p):d=d.next=h,a|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Or|=a,e.lanes=a,e.memoizedState=p}}function eh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(ue(191,i));i.call(r)}}}var rs={},kn=xr(rs),Oo=xr(rs),$o=xr(rs);function Cr(e){if(e===rs)throw Error(ue(174));return e}function Cd(e,t){switch(Oe($o,t),Oe(Oo,e),Oe(kn,rs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Bc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Bc(t,e)}Fe(kn),Oe(kn,t)}function ji(){Fe(kn),Fe(Oo),Fe($o)}function Ix(e){Cr($o.current);var t=Cr(kn.current),n=Bc(t,e.type);t!==n&&(Oe(Oo,e),Oe(kn,n))}function Nd(e){Oo.current===e&&(Fe(kn),Fe(Oo))}var We=xr(0);function Ta(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ql=[];function Ed(){for(var e=0;e<Ql.length;e++)Ql[e]._workInProgressVersionPrimary=null;Ql.length=0}var Zs=Wn.ReactCurrentDispatcher,Xl=Wn.ReactCurrentBatchConfig,Ir=0,Ve=null,et=null,it=null,Aa=!1,xo=!1,Do=0,cw=0;function pt(){throw Error(ue(321))}function zd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!fn(e[n],t[n]))return!1;return!0}function Td(e,t,n,r,i,s){if(Ir=s,Ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Zs.current=e===null||e.memoizedState===null?fw:hw,e=n(r,i),xo){s=0;do{if(xo=!1,Do=0,25<=s)throw Error(ue(301));s+=1,it=et=null,t.updateQueue=null,Zs.current=mw,e=n(r,i)}while(xo)}if(Zs.current=Pa,t=et!==null&&et.next!==null,Ir=0,it=et=Ve=null,Aa=!1,t)throw Error(ue(300));return e}function Ad(){var e=Do!==0;return Do=0,e}function gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?Ve.memoizedState=it=e:it=it.next=e,it}function rn(){if(et===null){var e=Ve.alternate;e=e!==null?e.memoizedState:null}else e=et.next;var t=it===null?Ve.memoizedState:it.next;if(t!==null)it=t,et=e;else{if(e===null)throw Error(ue(310));et=e,e={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},it===null?Ve.memoizedState=it=e:it=it.next=e}return it}function Fo(e,t){return typeof t=="function"?t(e):t}function Zl(e){var t=rn(),n=t.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=e;var r=et,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,c=null,u=s;do{var d=u.lane;if((Ir&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,a=r):c=c.next=p,Ve.lanes|=d,Or|=d}u=u.next}while(u!==null&&u!==s);c===null?a=r:c.next=l,fn(r,t.memoizedState)||(zt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Ve.lanes|=s,Or|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ec(e){var t=rn(),n=t.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);fn(s,t.memoizedState)||(zt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Ox(){}function $x(e,t){var n=Ve,r=rn(),i=t(),s=!fn(r.memoizedState,i);if(s&&(r.memoizedState=i,zt=!0),r=r.queue,Pd(Bx.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||it!==null&&it.memoizedState.tag&1){if(n.flags|=2048,Bo(9,Fx.bind(null,n,r,i,t),void 0,null),ot===null)throw Error(ue(349));Ir&30||Dx(n,t,i)}return i}function Dx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ve.updateQueue,t===null?(t={lastEffect:null,stores:null},Ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fx(e,t,n,r){t.value=n,t.getSnapshot=r,Ux(t)&&Wx(e)}function Bx(e,t,n){return n(function(){Ux(t)&&Wx(e)})}function Ux(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!fn(e,n)}catch{return!0}}function Wx(e){var t=Dn(e,1);t!==null&&dn(t,e,1,-1)}function th(e){var t=gn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:e},t.queue=e,e=e.dispatch=pw.bind(null,Ve,e),[t.memoizedState,e]}function Bo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ve.updateQueue,t===null?(t={lastEffect:null,stores:null},Ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Vx(){return rn().memoizedState}function ea(e,t,n,r){var i=gn();Ve.flags|=e,i.memoizedState=Bo(1|t,n,void 0,r===void 0?null:r)}function al(e,t,n,r){var i=rn();r=r===void 0?null:r;var s=void 0;if(et!==null){var a=et.memoizedState;if(s=a.destroy,r!==null&&zd(r,a.deps)){i.memoizedState=Bo(t,n,s,r);return}}Ve.flags|=e,i.memoizedState=Bo(1|t,n,s,r)}function nh(e,t){return ea(8390656,8,e,t)}function Pd(e,t){return al(2048,8,e,t)}function Hx(e,t){return al(4,2,e,t)}function qx(e,t){return al(4,4,e,t)}function Jx(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Kx(e,t,n){return n=n!=null?n.concat([e]):null,al(4,4,Jx.bind(null,t,e),n)}function Md(){}function Gx(e,t){var n=rn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Yx(e,t){var n=rn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Qx(e,t,n){return Ir&21?(fn(n,t)||(n=nx(),Ve.lanes|=n,Or|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,zt=!0),e.memoizedState=n)}function uw(e,t){var n=Le;Le=n!==0&&4>n?n:4,e(!0);var r=Xl.transition;Xl.transition={};try{e(!1),t()}finally{Le=n,Xl.transition=r}}function Xx(){return rn().memoizedState}function dw(e,t,n){var r=cr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zx(e))ey(t,n);else if(n=Lx(e,t,n,r),n!==null){var i=kt();dn(n,e,r,i),ty(n,t,r)}}function pw(e,t,n){var r=cr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zx(e))ey(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,fn(l,a)){var c=t.interleaved;c===null?(i.next=i,_d(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Lx(e,t,i,r),n!==null&&(i=kt(),dn(n,e,r,i),ty(n,t,r))}}function Zx(e){var t=e.alternate;return e===Ve||t!==null&&t===Ve}function ey(e,t){xo=Aa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ty(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ud(e,n)}}var Pa={readContext:nn,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},fw={readContext:nn,useCallback:function(e,t){return gn().memoizedState=[e,t===void 0?null:t],e},useContext:nn,useEffect:nh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ea(4194308,4,Jx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ea(4194308,4,e,t)},useInsertionEffect:function(e,t){return ea(4,2,e,t)},useMemo:function(e,t){var n=gn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=dw.bind(null,Ve,e),[r.memoizedState,e]},useRef:function(e){var t=gn();return e={current:e},t.memoizedState=e},useState:th,useDebugValue:Md,useDeferredValue:function(e){return gn().memoizedState=e},useTransition:function(){var e=th(!1),t=e[0];return e=uw.bind(null,e[1]),gn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ve,i=gn();if(Be){if(n===void 0)throw Error(ue(407));n=n()}else{if(n=t(),ot===null)throw Error(ue(349));Ir&30||Dx(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,nh(Bx.bind(null,r,s,e),[e]),r.flags|=2048,Bo(9,Fx.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=gn(),t=ot.identifierPrefix;if(Be){var n=Mn,r=Pn;n=(r&~(1<<32-un(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Do++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=cw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},hw={readContext:nn,useCallback:Gx,useContext:nn,useEffect:Pd,useImperativeHandle:Kx,useInsertionEffect:Hx,useLayoutEffect:qx,useMemo:Yx,useReducer:Zl,useRef:Vx,useState:function(){return Zl(Fo)},useDebugValue:Md,useDeferredValue:function(e){var t=rn();return Qx(t,et.memoizedState,e)},useTransition:function(){var e=Zl(Fo)[0],t=rn().memoizedState;return[e,t]},useMutableSource:Ox,useSyncExternalStore:$x,useId:Xx,unstable_isNewReconciler:!1},mw={readContext:nn,useCallback:Gx,useContext:nn,useEffect:Pd,useImperativeHandle:Kx,useInsertionEffect:Hx,useLayoutEffect:qx,useMemo:Yx,useReducer:ec,useRef:Vx,useState:function(){return ec(Fo)},useDebugValue:Md,useDeferredValue:function(e){var t=rn();return et===null?t.memoizedState=e:Qx(t,et.memoizedState,e)},useTransition:function(){var e=ec(Fo)[0],t=rn().memoizedState;return[e,t]},useMutableSource:Ox,useSyncExternalStore:$x,useId:Xx,unstable_isNewReconciler:!1};function sn(e,t){if(e&&e.defaultProps){t=He({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function lu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:He({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ll={isMounted:function(e){return(e=e._reactInternals)?Ur(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=kt(),i=cr(e),s=Rn(r,i);s.payload=t,n!=null&&(s.callback=n),t=ar(e,s,i),t!==null&&(dn(t,e,i,r),Xs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=kt(),i=cr(e),s=Rn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ar(e,s,i),t!==null&&(dn(t,e,i,r),Xs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=kt(),r=cr(e),i=Rn(n,r);i.tag=2,t!=null&&(i.callback=t),t=ar(e,i,r),t!==null&&(dn(t,e,r,n),Xs(t,e,r))}};function rh(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!Mo(n,r)||!Mo(i,s):!0}function ny(e,t,n){var r=!1,i=fr,s=t.contextType;return typeof s=="object"&&s!==null?s=nn(s):(i=Pt(t)?Lr:mt.current,r=t.contextTypes,s=(r=r!=null)?bi(e,i):fr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ll,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function ih(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ll.enqueueReplaceState(t,t.state,null)}function cu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Sd(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=nn(s):(s=Pt(t)?Lr:mt.current,i.context=bi(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(lu(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ll.enqueueReplaceState(i,i.state,null),za(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function _i(e,t){try{var n="",r=t;do n+=W0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function tc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function uu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var gw=typeof WeakMap=="function"?WeakMap:Map;function ry(e,t,n){n=Rn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){La||(La=!0,bu=r),uu(e,t)},n}function iy(e,t,n){n=Rn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){uu(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){uu(e,t),typeof r!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function oh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new gw;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Tw.bind(null,e,t,n),t.then(e,e))}function sh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ah(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Rn(-1,1),t.tag=2,ar(n,t,1))),n.lanes|=1),e)}var xw=Wn.ReactCurrentOwner,zt=!1;function yt(e,t,n,r){t.child=e===null?Mx(t,null,n,r):ki(t,e.child,n,r)}function lh(e,t,n,r,i){n=n.render;var s=t.ref;return fi(t,i),r=Td(e,t,n,r,s,i),n=Ad(),e!==null&&!zt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Fn(e,t,i)):(Be&&n&&yd(t),t.flags|=1,yt(e,t,r,i),t.child)}function ch(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Bd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,oy(e,t,s,r,i)):(e=ia(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Mo,n(a,r)&&e.ref===t.ref)return Fn(e,t,i)}return t.flags|=1,e=ur(s,r),e.ref=t.ref,e.return=t,t.child=e}function oy(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Mo(s,r)&&e.ref===t.ref)if(zt=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(zt=!0);else return t.lanes=e.lanes,Fn(e,t,i)}return du(e,t,n,r,i)}function sy(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Oe(ai,Dt),Dt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Oe(ai,Dt),Dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Oe(ai,Dt),Dt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Oe(ai,Dt),Dt|=r;return yt(e,t,i,n),t.child}function ay(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function du(e,t,n,r,i){var s=Pt(n)?Lr:mt.current;return s=bi(t,s),fi(t,i),n=Td(e,t,n,r,s,i),r=Ad(),e!==null&&!zt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Fn(e,t,i)):(Be&&r&&yd(t),t.flags|=1,yt(e,t,n,i),t.child)}function uh(e,t,n,r,i){if(Pt(n)){var s=!0;_a(t)}else s=!1;if(fi(t,i),t.stateNode===null)ta(e,t),ny(t,n,r),cu(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=nn(u):(u=Pt(n)?Lr:mt.current,u=bi(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&ih(t,a,r,u),Kn=!1;var f=t.memoizedState;a.state=f,za(t,r,a,i),c=t.memoizedState,l!==r||f!==c||At.current||Kn?(typeof d=="function"&&(lu(t,n,d,r),c=t.memoizedState),(l=Kn||rh(t,n,l,r,f,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Rx(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:sn(t.type,l),a.props=u,p=t.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=nn(c):(c=Pt(n)?Lr:mt.current,c=bi(t,c));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||f!==c)&&ih(t,a,r,c),Kn=!1,f=t.memoizedState,a.state=f,za(t,r,a,i);var m=t.memoizedState;l!==p||f!==m||At.current||Kn?(typeof h=="function"&&(lu(t,n,h,r),m=t.memoizedState),(u=Kn||rh(t,n,u,r,f,m,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,m,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,m,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return pu(e,t,n,r,s,i)}function pu(e,t,n,r,i,s){ay(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Gf(t,n,!1),Fn(e,t,s);r=t.stateNode,xw.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=ki(t,e.child,null,s),t.child=ki(t,null,l,s)):yt(e,t,l,s),t.memoizedState=r.state,i&&Gf(t,n,!0),t.child}function ly(e){var t=e.stateNode;t.pendingContext?Kf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Kf(e,t.context,!1),Cd(e,t.containerInfo)}function dh(e,t,n,r,i){return wi(),bd(i),t.flags|=256,yt(e,t,n,r),t.child}var fu={dehydrated:null,treeContext:null,retryLane:0};function hu(e){return{baseLanes:e,cachePool:null,transitions:null}}function cy(e,t,n){var r=t.pendingProps,i=We.current,s=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Oe(We,i&1),e===null)return su(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=dl(a,r,0,null),e=zr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=hu(n),t.memoizedState=fu,e):Ld(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return yw(e,t,a,r,l,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=ur(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ur(l,s):(s=zr(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?hu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=fu,r}return s=e.child,e=s.sibling,r=ur(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ld(e,t){return t=dl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function As(e,t,n,r){return r!==null&&bd(r),ki(t,e.child,null,n),e=Ld(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yw(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=tc(Error(ue(422))),As(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=dl({mode:"visible",children:r.children},i,0,null),s=zr(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&ki(t,e.child,null,a),t.child.memoizedState=hu(a),t.memoizedState=fu,s);if(!(t.mode&1))return As(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(ue(419)),r=tc(s,r,void 0),As(e,t,a,r)}if(l=(a&e.childLanes)!==0,zt||l){if(r=ot,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Dn(e,i),dn(r,e,i,-1))}return Fd(),r=tc(Error(ue(421))),As(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Aw.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Bt=sr(i.nextSibling),Vt=t,Be=!0,ln=null,e!==null&&(Gt[Yt++]=Pn,Gt[Yt++]=Mn,Gt[Yt++]=Rr,Pn=e.id,Mn=e.overflow,Rr=t),t=Ld(t,r.children),t.flags|=4096,t)}function ph(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),au(e.return,t,n)}function nc(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function uy(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(yt(e,t,r.children,n),r=We.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ph(e,n,t);else if(e.tag===19)ph(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Oe(We,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ta(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),nc(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ta(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}nc(t,!0,n,null,s);break;case"together":nc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ta(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Fn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Or|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(ue(153));if(t.child!==null){for(e=t.child,n=ur(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ur(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vw(e,t,n){switch(t.tag){case 3:ly(t),wi();break;case 5:Ix(t);break;case 1:Pt(t.type)&&_a(t);break;case 4:Cd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Oe(Na,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Oe(We,We.current&1),t.flags|=128,null):n&t.child.childLanes?cy(e,t,n):(Oe(We,We.current&1),e=Fn(e,t,n),e!==null?e.sibling:null);Oe(We,We.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return uy(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Oe(We,We.current),r)break;return null;case 22:case 23:return t.lanes=0,sy(e,t,n)}return Fn(e,t,n)}var dy,mu,py,fy;dy=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};mu=function(){};py=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Cr(kn.current);var s=null;switch(n){case"input":i=Oc(e,i),r=Oc(e,r),s=[];break;case"select":i=He({},i,{value:void 0}),r=He({},r,{value:void 0}),s=[];break;case"textarea":i=Fc(e,i),r=Fc(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ka)}Uc(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Co.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Co.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&De("scroll",e),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};fy=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ki(e,t){if(!Be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ft(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function bw(e,t,n){var r=t.pendingProps;switch(vd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(t),null;case 1:return Pt(t.type)&&ja(),ft(t),null;case 3:return r=t.stateNode,ji(),Fe(At),Fe(mt),Ed(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ln!==null&&(ju(ln),ln=null))),mu(e,t),ft(t),null;case 5:Nd(t);var i=Cr($o.current);if(n=t.type,e!==null&&t.stateNode!=null)py(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(ue(166));return ft(t),null}if(e=Cr(kn.current),zs(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[yn]=t,r[Io]=s,e=(t.mode&1)!==0,n){case"dialog":De("cancel",r),De("close",r);break;case"iframe":case"object":case"embed":De("load",r);break;case"video":case"audio":for(i=0;i<so.length;i++)De(so[i],r);break;case"source":De("error",r);break;case"img":case"image":case"link":De("error",r),De("load",r);break;case"details":De("toggle",r);break;case"input":wf(r,s),De("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},De("invalid",r);break;case"textarea":jf(r,s),De("invalid",r)}Uc(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Es(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Es(r.textContent,l,e),i=["children",""+l]):Co.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&De("scroll",r)}switch(n){case"input":bs(r),kf(r,s,!0);break;case"textarea":bs(r),_f(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ka)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[yn]=t,e[Io]=r,dy(e,t,!1,!1),t.stateNode=e;e:{switch(a=Wc(n,r),n){case"dialog":De("cancel",e),De("close",e),i=r;break;case"iframe":case"object":case"embed":De("load",e),i=r;break;case"video":case"audio":for(i=0;i<so.length;i++)De(so[i],e);i=r;break;case"source":De("error",e),i=r;break;case"img":case"image":case"link":De("error",e),De("load",e),i=r;break;case"details":De("toggle",e),i=r;break;case"input":wf(e,r),i=Oc(e,r),De("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=He({},r,{value:void 0}),De("invalid",e);break;case"textarea":jf(e,r),i=Fc(e,r),De("invalid",e);break;default:i=r}Uc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?Vg(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Ug(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&No(e,c):typeof c=="number"&&No(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Co.hasOwnProperty(s)?c!=null&&s==="onScroll"&&De("scroll",e):c!=null&&id(e,s,c,a))}switch(n){case"input":bs(e),kf(e,r,!1);break;case"textarea":bs(e),_f(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pr(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?ci(e,!!r.multiple,s,!1):r.defaultValue!=null&&ci(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ka)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ft(t),null;case 6:if(e&&t.stateNode!=null)fy(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(ue(166));if(n=Cr($o.current),Cr(kn.current),zs(t)){if(r=t.stateNode,n=t.memoizedProps,r[yn]=t,(s=r.nodeValue!==n)&&(e=Vt,e!==null))switch(e.tag){case 3:Es(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Es(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yn]=t,t.stateNode=r}return ft(t),null;case 13:if(Fe(We),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Be&&Bt!==null&&t.mode&1&&!(t.flags&128))Ax(),wi(),t.flags|=98560,s=!1;else if(s=zs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(ue(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ue(317));s[yn]=t}else wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ft(t),s=!1}else ln!==null&&(ju(ln),ln=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||We.current&1?tt===0&&(tt=3):Fd())),t.updateQueue!==null&&(t.flags|=4),ft(t),null);case 4:return ji(),mu(e,t),e===null&&Lo(t.stateNode.containerInfo),ft(t),null;case 10:return jd(t.type._context),ft(t),null;case 17:return Pt(t.type)&&ja(),ft(t),null;case 19:if(Fe(We),s=t.memoizedState,s===null)return ft(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)Ki(s,!1);else{if(tt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ta(e),a!==null){for(t.flags|=128,Ki(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Oe(We,We.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ke()>Si&&(t.flags|=128,r=!0,Ki(s,!1),t.lanes=4194304)}else{if(!r)if(e=Ta(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ki(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Be)return ft(t),null}else 2*Ke()-s.renderingStartTime>Si&&n!==1073741824&&(t.flags|=128,r=!0,Ki(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ke(),t.sibling=null,n=We.current,Oe(We,r?n&1|2:n&1),t):(ft(t),null);case 22:case 23:return Dd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Dt&1073741824&&(ft(t),t.subtreeFlags&6&&(t.flags|=8192)):ft(t),null;case 24:return null;case 25:return null}throw Error(ue(156,t.tag))}function ww(e,t){switch(vd(t),t.tag){case 1:return Pt(t.type)&&ja(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ji(),Fe(At),Fe(mt),Ed(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Nd(t),null;case 13:if(Fe(We),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(ue(340));wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Fe(We),null;case 4:return ji(),null;case 10:return jd(t.type._context),null;case 22:case 23:return Dd(),null;case 24:return null;default:return null}}var Ps=!1,ht=!1,kw=typeof WeakSet=="function"?WeakSet:Set,ve=null;function si(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Je(e,t,r)}else n.current=null}function gu(e,t,n){try{n()}catch(r){Je(e,t,r)}}var fh=!1;function jw(e,t){if(Zc=va,e=yx(),xd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==n||i!==0&&p.nodeType!==3||(l=a+i),p!==s||r!==0&&p.nodeType!==3||(c=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(h=p.firstChild)!==null;)f=p,p=h;for(;;){if(p===e)break t;if(f===n&&++u===i&&(l=a),f===s&&++d===r&&(c=a),(h=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=h}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(eu={focusedElem:e,selectionRange:n},va=!1,ve=t;ve!==null;)if(t=ve,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ve=e;else for(;ve!==null;){t=ve;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var b=m.memoizedProps,j=m.memoizedState,g=t.stateNode,x=g.getSnapshotBeforeUpdate(t.elementType===t.type?b:sn(t.type,b),j);g.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(_){Je(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,ve=e;break}ve=t.return}return m=fh,fh=!1,m}function yo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&gu(t,n,s)}i=i.next}while(i!==r)}}function cl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function xu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hy(e){var t=e.alternate;t!==null&&(e.alternate=null,hy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yn],delete t[Io],delete t[ru],delete t[ow],delete t[sw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function my(e){return e.tag===5||e.tag===3||e.tag===4}function hh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||my(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ka));else if(r!==4&&(e=e.child,e!==null))for(yu(e,t,n),e=e.sibling;e!==null;)yu(e,t,n),e=e.sibling}function vu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(vu(e,t,n),e=e.sibling;e!==null;)vu(e,t,n),e=e.sibling}var st=null,an=!1;function Hn(e,t,n){for(n=n.child;n!==null;)gy(e,t,n),n=n.sibling}function gy(e,t,n){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(tl,n)}catch{}switch(n.tag){case 5:ht||si(n,t);case 6:var r=st,i=an;st=null,Hn(e,t,n),st=r,an=i,st!==null&&(an?(e=st,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):st.removeChild(n.stateNode));break;case 18:st!==null&&(an?(e=st,n=n.stateNode,e.nodeType===8?Gl(e.parentNode,n):e.nodeType===1&&Gl(e,n),Ao(e)):Gl(st,n.stateNode));break;case 4:r=st,i=an,st=n.stateNode.containerInfo,an=!0,Hn(e,t,n),st=r,an=i;break;case 0:case 11:case 14:case 15:if(!ht&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&gu(n,t,a),i=i.next}while(i!==r)}Hn(e,t,n);break;case 1:if(!ht&&(si(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Je(n,t,l)}Hn(e,t,n);break;case 21:Hn(e,t,n);break;case 22:n.mode&1?(ht=(r=ht)||n.memoizedState!==null,Hn(e,t,n),ht=r):Hn(e,t,n);break;default:Hn(e,t,n)}}function mh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new kw),t.forEach(function(r){var i=Pw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function on(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:st=l.stateNode,an=!1;break e;case 3:st=l.stateNode.containerInfo,an=!0;break e;case 4:st=l.stateNode.containerInfo,an=!0;break e}l=l.return}if(st===null)throw Error(ue(160));gy(s,a,i),st=null,an=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Je(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xy(t,e),t=t.sibling}function xy(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(on(t,e),mn(e),r&4){try{yo(3,e,e.return),cl(3,e)}catch(b){Je(e,e.return,b)}try{yo(5,e,e.return)}catch(b){Je(e,e.return,b)}}break;case 1:on(t,e),mn(e),r&512&&n!==null&&si(n,n.return);break;case 5:if(on(t,e),mn(e),r&512&&n!==null&&si(n,n.return),e.flags&32){var i=e.stateNode;try{No(i,"")}catch(b){Je(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Dg(i,s),Wc(l,a);var u=Wc(l,s);for(a=0;a<c.length;a+=2){var d=c[a],p=c[a+1];d==="style"?Vg(i,p):d==="dangerouslySetInnerHTML"?Ug(i,p):d==="children"?No(i,p):id(i,d,p,u)}switch(l){case"input":$c(i,s);break;case"textarea":Fg(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?ci(i,!!s.multiple,h,!1):f!==!!s.multiple&&(s.defaultValue!=null?ci(i,!!s.multiple,s.defaultValue,!0):ci(i,!!s.multiple,s.multiple?[]:"",!1))}i[Io]=s}catch(b){Je(e,e.return,b)}}break;case 6:if(on(t,e),mn(e),r&4){if(e.stateNode===null)throw Error(ue(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(b){Je(e,e.return,b)}}break;case 3:if(on(t,e),mn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ao(t.containerInfo)}catch(b){Je(e,e.return,b)}break;case 4:on(t,e),mn(e);break;case 13:on(t,e),mn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Od=Ke())),r&4&&mh(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ht=(u=ht)||d,on(t,e),ht=u):on(t,e),mn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(ve=e,d=e.child;d!==null;){for(p=ve=d;ve!==null;){switch(f=ve,h=f.child,f.tag){case 0:case 11:case 14:case 15:yo(4,f,f.return);break;case 1:si(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(b){Je(r,n,b)}}break;case 5:si(f,f.return);break;case 22:if(f.memoizedState!==null){xh(p);continue}}h!==null?(h.return=f,ve=h):xh(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Wg("display",a))}catch(b){Je(e,e.return,b)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(b){Je(e,e.return,b)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:on(t,e),mn(e),r&4&&mh(e);break;case 21:break;default:on(t,e),mn(e)}}function mn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(my(n)){var r=n;break e}n=n.return}throw Error(ue(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(No(i,""),r.flags&=-33);var s=hh(e);vu(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=hh(e);yu(e,l,a);break;default:throw Error(ue(161))}}catch(c){Je(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _w(e,t,n){ve=e,yy(e)}function yy(e,t,n){for(var r=(e.mode&1)!==0;ve!==null;){var i=ve,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Ps;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||ht;l=Ps;var u=ht;if(Ps=a,(ht=c)&&!u)for(ve=i;ve!==null;)a=ve,c=a.child,a.tag===22&&a.memoizedState!==null?yh(i):c!==null?(c.return=a,ve=c):yh(i);for(;s!==null;)ve=s,yy(s),s=s.sibling;ve=i,Ps=l,ht=u}gh(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,ve=s):gh(e)}}function gh(e){for(;ve!==null;){var t=ve;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ht||cl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ht)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:sn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&eh(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}eh(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Ao(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}ht||t.flags&512&&xu(t)}catch(f){Je(t,t.return,f)}}if(t===e){ve=null;break}if(n=t.sibling,n!==null){n.return=t.return,ve=n;break}ve=t.return}}function xh(e){for(;ve!==null;){var t=ve;if(t===e){ve=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ve=n;break}ve=t.return}}function yh(e){for(;ve!==null;){var t=ve;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{cl(4,t)}catch(c){Je(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Je(t,i,c)}}var s=t.return;try{xu(t)}catch(c){Je(t,s,c)}break;case 5:var a=t.return;try{xu(t)}catch(c){Je(t,a,c)}}}catch(c){Je(t,t.return,c)}if(t===e){ve=null;break}var l=t.sibling;if(l!==null){l.return=t.return,ve=l;break}ve=t.return}}var Sw=Math.ceil,Ma=Wn.ReactCurrentDispatcher,Rd=Wn.ReactCurrentOwner,tn=Wn.ReactCurrentBatchConfig,Te=0,ot=null,Xe=null,at=0,Dt=0,ai=xr(0),tt=0,Uo=null,Or=0,ul=0,Id=0,vo=null,Et=null,Od=0,Si=1/0,zn=null,La=!1,bu=null,lr=null,Ms=!1,Zn=null,Ra=0,bo=0,wu=null,na=-1,ra=0;function kt(){return Te&6?Ke():na!==-1?na:na=Ke()}function cr(e){return e.mode&1?Te&2&&at!==0?at&-at:lw.transition!==null?(ra===0&&(ra=nx()),ra):(e=Le,e!==0||(e=window.event,e=e===void 0?16:cx(e.type)),e):1}function dn(e,t,n,r){if(50<bo)throw bo=0,wu=null,Error(ue(185));es(e,n,r),(!(Te&2)||e!==ot)&&(e===ot&&(!(Te&2)&&(ul|=n),tt===4&&Qn(e,at)),Mt(e,r),n===1&&Te===0&&!(t.mode&1)&&(Si=Ke()+500,sl&&yr()))}function Mt(e,t){var n=e.callbackNode;lb(e,t);var r=ya(e,e===ot?at:0);if(r===0)n!==null&&Nf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Nf(n),t===1)e.tag===0?aw(vh.bind(null,e)):Ex(vh.bind(null,e)),rw(function(){!(Te&6)&&yr()}),n=null;else{switch(rx(r)){case 1:n=cd;break;case 4:n=ex;break;case 16:n=xa;break;case 536870912:n=tx;break;default:n=xa}n=Cy(n,vy.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vy(e,t){if(na=-1,ra=0,Te&6)throw Error(ue(327));var n=e.callbackNode;if(hi()&&e.callbackNode!==n)return null;var r=ya(e,e===ot?at:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ia(e,r);else{t=r;var i=Te;Te|=2;var s=wy();(ot!==e||at!==t)&&(zn=null,Si=Ke()+500,Er(e,t));do try{Ew();break}catch(l){by(e,l)}while(!0);kd(),Ma.current=s,Te=i,Xe!==null?t=0:(ot=null,at=0,t=tt)}if(t!==0){if(t===2&&(i=Kc(e),i!==0&&(r=i,t=ku(e,i))),t===1)throw n=Uo,Er(e,0),Qn(e,r),Mt(e,Ke()),n;if(t===6)Qn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Cw(i)&&(t=Ia(e,r),t===2&&(s=Kc(e),s!==0&&(r=s,t=ku(e,s))),t===1))throw n=Uo,Er(e,0),Qn(e,r),Mt(e,Ke()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(ue(345));case 2:kr(e,Et,zn);break;case 3:if(Qn(e,r),(r&130023424)===r&&(t=Od+500-Ke(),10<t)){if(ya(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){kt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=nu(kr.bind(null,e,Et,zn),t);break}kr(e,Et,zn);break;case 4:if(Qn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-un(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=Ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sw(r/1960))-r,10<r){e.timeoutHandle=nu(kr.bind(null,e,Et,zn),r);break}kr(e,Et,zn);break;case 5:kr(e,Et,zn);break;default:throw Error(ue(329))}}}return Mt(e,Ke()),e.callbackNode===n?vy.bind(null,e):null}function ku(e,t){var n=vo;return e.current.memoizedState.isDehydrated&&(Er(e,t).flags|=256),e=Ia(e,t),e!==2&&(t=Et,Et=n,t!==null&&ju(t)),e}function ju(e){Et===null?Et=e:Et.push.apply(Et,e)}function Cw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!fn(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qn(e,t){for(t&=~Id,t&=~ul,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-un(t),r=1<<n;e[n]=-1,t&=~r}}function vh(e){if(Te&6)throw Error(ue(327));hi();var t=ya(e,0);if(!(t&1))return Mt(e,Ke()),null;var n=Ia(e,t);if(e.tag!==0&&n===2){var r=Kc(e);r!==0&&(t=r,n=ku(e,r))}if(n===1)throw n=Uo,Er(e,0),Qn(e,t),Mt(e,Ke()),n;if(n===6)throw Error(ue(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kr(e,Et,zn),Mt(e,Ke()),null}function $d(e,t){var n=Te;Te|=1;try{return e(t)}finally{Te=n,Te===0&&(Si=Ke()+500,sl&&yr())}}function $r(e){Zn!==null&&Zn.tag===0&&!(Te&6)&&hi();var t=Te;Te|=1;var n=tn.transition,r=Le;try{if(tn.transition=null,Le=1,e)return e()}finally{Le=r,tn.transition=n,Te=t,!(Te&6)&&yr()}}function Dd(){Dt=ai.current,Fe(ai)}function Er(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,nw(n)),Xe!==null)for(n=Xe.return;n!==null;){var r=n;switch(vd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ja();break;case 3:ji(),Fe(At),Fe(mt),Ed();break;case 5:Nd(r);break;case 4:ji();break;case 13:Fe(We);break;case 19:Fe(We);break;case 10:jd(r.type._context);break;case 22:case 23:Dd()}n=n.return}if(ot=e,Xe=e=ur(e.current,null),at=Dt=t,tt=0,Uo=null,Id=ul=Or=0,Et=vo=null,Sr!==null){for(t=0;t<Sr.length;t++)if(n=Sr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}Sr=null}return e}function by(e,t){do{var n=Xe;try{if(kd(),Zs.current=Pa,Aa){for(var r=Ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Aa=!1}if(Ir=0,it=et=Ve=null,xo=!1,Do=0,Rd.current=null,n===null||n.return===null){tt=1,Uo=t,Xe=null;break}e:{var s=e,a=n.return,l=n,c=t;if(t=at,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=sh(a);if(h!==null){h.flags&=-257,ah(h,a,l,s,t),h.mode&1&&oh(s,u,t),t=h,c=u;var m=t.updateQueue;if(m===null){var b=new Set;b.add(c),t.updateQueue=b}else m.add(c);break e}else{if(!(t&1)){oh(s,u,t),Fd();break e}c=Error(ue(426))}}else if(Be&&l.mode&1){var j=sh(a);if(j!==null){!(j.flags&65536)&&(j.flags|=256),ah(j,a,l,s,t),bd(_i(c,l));break e}}s=c=_i(c,l),tt!==4&&(tt=2),vo===null?vo=[s]:vo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var g=ry(s,c,t);Zf(s,g);break e;case 1:l=c;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(lr===null||!lr.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t;var _=iy(s,l,t);Zf(s,_);break e}}s=s.return}while(s!==null)}jy(n)}catch(A){t=A,Xe===n&&n!==null&&(Xe=n=n.return);continue}break}while(!0)}function wy(){var e=Ma.current;return Ma.current=Pa,e===null?Pa:e}function Fd(){(tt===0||tt===3||tt===2)&&(tt=4),ot===null||!(Or&268435455)&&!(ul&268435455)||Qn(ot,at)}function Ia(e,t){var n=Te;Te|=2;var r=wy();(ot!==e||at!==t)&&(zn=null,Er(e,t));do try{Nw();break}catch(i){by(e,i)}while(!0);if(kd(),Te=n,Ma.current=r,Xe!==null)throw Error(ue(261));return ot=null,at=0,tt}function Nw(){for(;Xe!==null;)ky(Xe)}function Ew(){for(;Xe!==null&&!Z0();)ky(Xe)}function ky(e){var t=Sy(e.alternate,e,Dt);e.memoizedProps=e.pendingProps,t===null?jy(e):Xe=t,Rd.current=null}function jy(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ww(n,t),n!==null){n.flags&=32767,Xe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{tt=6,Xe=null;return}}else if(n=bw(n,t,Dt),n!==null){Xe=n;return}if(t=t.sibling,t!==null){Xe=t;return}Xe=t=e}while(t!==null);tt===0&&(tt=5)}function kr(e,t,n){var r=Le,i=tn.transition;try{tn.transition=null,Le=1,zw(e,t,n,r)}finally{tn.transition=i,Le=r}return null}function zw(e,t,n,r){do hi();while(Zn!==null);if(Te&6)throw Error(ue(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(ue(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(cb(e,s),e===ot&&(Xe=ot=null,at=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ms||(Ms=!0,Cy(xa,function(){return hi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=tn.transition,tn.transition=null;var a=Le;Le=1;var l=Te;Te|=4,Rd.current=null,jw(e,n),xy(n,e),Gb(eu),va=!!Zc,eu=Zc=null,e.current=n,_w(n),eb(),Te=l,Le=a,tn.transition=s}else e.current=n;if(Ms&&(Ms=!1,Zn=e,Ra=i),s=e.pendingLanes,s===0&&(lr=null),rb(n.stateNode),Mt(e,Ke()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(La)throw La=!1,e=bu,bu=null,e;return Ra&1&&e.tag!==0&&hi(),s=e.pendingLanes,s&1?e===wu?bo++:(bo=0,wu=e):bo=0,yr(),null}function hi(){if(Zn!==null){var e=rx(Ra),t=tn.transition,n=Le;try{if(tn.transition=null,Le=16>e?16:e,Zn===null)var r=!1;else{if(e=Zn,Zn=null,Ra=0,Te&6)throw Error(ue(331));var i=Te;for(Te|=4,ve=e.current;ve!==null;){var s=ve,a=s.child;if(ve.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(ve=u;ve!==null;){var d=ve;switch(d.tag){case 0:case 11:case 15:yo(8,d,s)}var p=d.child;if(p!==null)p.return=d,ve=p;else for(;ve!==null;){d=ve;var f=d.sibling,h=d.return;if(hy(d),d===u){ve=null;break}if(f!==null){f.return=h,ve=f;break}ve=h}}}var m=s.alternate;if(m!==null){var b=m.child;if(b!==null){m.child=null;do{var j=b.sibling;b.sibling=null,b=j}while(b!==null)}}ve=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ve=a;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:yo(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,ve=g;break e}ve=s.return}}var x=e.current;for(ve=x;ve!==null;){a=ve;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,ve=v;else e:for(a=x;ve!==null;){if(l=ve,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:cl(9,l)}}catch(A){Je(l,l.return,A)}if(l===a){ve=null;break e}var _=l.sibling;if(_!==null){_.return=l.return,ve=_;break e}ve=l.return}}if(Te=i,yr(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(tl,e)}catch{}r=!0}return r}finally{Le=n,tn.transition=t}}return!1}function bh(e,t,n){t=_i(n,t),t=ry(e,t,1),e=ar(e,t,1),t=kt(),e!==null&&(es(e,1,t),Mt(e,t))}function Je(e,t,n){if(e.tag===3)bh(e,e,n);else for(;t!==null;){if(t.tag===3){bh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(lr===null||!lr.has(r))){e=_i(n,e),e=iy(t,e,1),t=ar(t,e,1),e=kt(),t!==null&&(es(t,1,e),Mt(t,e));break}}t=t.return}}function Tw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=kt(),e.pingedLanes|=e.suspendedLanes&n,ot===e&&(at&n)===n&&(tt===4||tt===3&&(at&130023424)===at&&500>Ke()-Od?Er(e,0):Id|=n),Mt(e,t)}function _y(e,t){t===0&&(e.mode&1?(t=js,js<<=1,!(js&130023424)&&(js=4194304)):t=1);var n=kt();e=Dn(e,t),e!==null&&(es(e,t,n),Mt(e,n))}function Aw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_y(e,n)}function Pw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(ue(314))}r!==null&&r.delete(t),_y(e,n)}var Sy;Sy=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||At.current)zt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return zt=!1,vw(e,t,n);zt=!!(e.flags&131072)}else zt=!1,Be&&t.flags&1048576&&zx(t,Ca,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ta(e,t),e=t.pendingProps;var i=bi(t,mt.current);fi(t,n),i=Td(null,t,r,e,i,n);var s=Ad();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pt(r)?(s=!0,_a(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sd(t),i.updater=ll,t.stateNode=i,i._reactInternals=t,cu(t,r,e,n),t=pu(null,t,r,!0,s,n)):(t.tag=0,Be&&s&&yd(t),yt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ta(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Lw(r),e=sn(r,e),i){case 0:t=du(null,t,r,e,n);break e;case 1:t=uh(null,t,r,e,n);break e;case 11:t=lh(null,t,r,e,n);break e;case 14:t=ch(null,t,r,sn(r.type,e),n);break e}throw Error(ue(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:sn(r,i),du(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:sn(r,i),uh(e,t,r,i,n);case 3:e:{if(ly(t),e===null)throw Error(ue(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Rx(e,t),za(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=_i(Error(ue(423)),t),t=dh(e,t,r,n,i);break e}else if(r!==i){i=_i(Error(ue(424)),t),t=dh(e,t,r,n,i);break e}else for(Bt=sr(t.stateNode.containerInfo.firstChild),Vt=t,Be=!0,ln=null,n=Mx(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wi(),r===i){t=Fn(e,t,n);break e}yt(e,t,r,n)}t=t.child}return t;case 5:return Ix(t),e===null&&su(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,tu(r,i)?a=null:s!==null&&tu(r,s)&&(t.flags|=32),ay(e,t),yt(e,t,a,n),t.child;case 6:return e===null&&su(t),null;case 13:return cy(e,t,n);case 4:return Cd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ki(t,null,r,n):yt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:sn(r,i),lh(e,t,r,i,n);case 7:return yt(e,t,t.pendingProps,n),t.child;case 8:return yt(e,t,t.pendingProps.children,n),t.child;case 12:return yt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,Oe(Na,r._currentValue),r._currentValue=a,s!==null)if(fn(s.value,a)){if(s.children===i.children&&!At.current){t=Fn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Rn(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),au(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ue(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),au(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}yt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,fi(t,n),i=nn(i),r=r(i),t.flags|=1,yt(e,t,r,n),t.child;case 14:return r=t.type,i=sn(r,t.pendingProps),i=sn(r.type,i),ch(e,t,r,i,n);case 15:return oy(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:sn(r,i),ta(e,t),t.tag=1,Pt(r)?(e=!0,_a(t)):e=!1,fi(t,n),ny(t,r,i),cu(t,r,i,n),pu(null,t,r,!0,e,n);case 19:return uy(e,t,n);case 22:return sy(e,t,n)}throw Error(ue(156,t.tag))};function Cy(e,t){return Zg(e,t)}function Mw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(e,t,n,r){return new Mw(e,t,n,r)}function Bd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lw(e){if(typeof e=="function")return Bd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===sd)return 11;if(e===ad)return 14}return 2}function ur(e,t){var n=e.alternate;return n===null?(n=Xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ia(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")Bd(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Qr:return zr(n.children,i,s,t);case od:a=8,i|=8;break;case Mc:return e=Xt(12,n,t,i|2),e.elementType=Mc,e.lanes=s,e;case Lc:return e=Xt(13,n,t,i),e.elementType=Lc,e.lanes=s,e;case Rc:return e=Xt(19,n,t,i),e.elementType=Rc,e.lanes=s,e;case Ig:return dl(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Lg:a=10;break e;case Rg:a=9;break e;case sd:a=11;break e;case ad:a=14;break e;case Jn:a=16,r=null;break e}throw Error(ue(130,e==null?e:typeof e,""))}return t=Xt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function zr(e,t,n,r){return e=Xt(7,e,r,t),e.lanes=n,e}function dl(e,t,n,r){return e=Xt(22,e,r,t),e.elementType=Ig,e.lanes=n,e.stateNode={isHidden:!1},e}function rc(e,t,n){return e=Xt(6,e,null,t),e.lanes=n,e}function ic(e,t,n){return t=Xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$l(0),this.expirationTimes=$l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$l(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ud(e,t,n,r,i,s,a,l,c){return e=new Rw(e,t,n,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Xt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sd(s),e}function Iw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ny(e){if(!e)return fr;e=e._reactInternals;e:{if(Ur(e)!==e||e.tag!==1)throw Error(ue(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(ue(171))}if(e.tag===1){var n=e.type;if(Pt(n))return Nx(e,n,t)}return t}function Ey(e,t,n,r,i,s,a,l,c){return e=Ud(n,r,!0,e,i,s,a,l,c),e.context=Ny(null),n=e.current,r=kt(),i=cr(n),s=Rn(r,i),s.callback=t??null,ar(n,s,i),e.current.lanes=i,es(e,i,r),Mt(e,r),e}function pl(e,t,n,r){var i=t.current,s=kt(),a=cr(i);return n=Ny(n),t.context===null?t.context=n:t.pendingContext=n,t=Rn(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ar(i,t,a),e!==null&&(dn(e,i,a,s),Xs(e,i,a)),a}function Oa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Wd(e,t){wh(e,t),(e=e.alternate)&&wh(e,t)}function Ow(){return null}var zy=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vd(e){this._internalRoot=e}fl.prototype.render=Vd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(ue(409));pl(e,t,null,null)};fl.prototype.unmount=Vd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$r(function(){pl(null,e,null,null)}),t[$n]=null}};function fl(e){this._internalRoot=e}fl.prototype.unstable_scheduleHydration=function(e){if(e){var t=sx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yn.length&&t!==0&&t<Yn[n].priority;n++);Yn.splice(n,0,e),n===0&&lx(e)}};function Hd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function kh(){}function $w(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Oa(a);s.call(u)}}var a=Ey(t,r,e,0,null,!1,!1,"",kh);return e._reactRootContainer=a,e[$n]=a.current,Lo(e.nodeType===8?e.parentNode:e),$r(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Oa(c);l.call(u)}}var c=Ud(e,0,!1,null,null,!1,!1,"",kh);return e._reactRootContainer=c,e[$n]=c.current,Lo(e.nodeType===8?e.parentNode:e),$r(function(){pl(t,c,n,r)}),c}function ml(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var c=Oa(a);l.call(c)}}pl(t,a,e,i)}else a=$w(n,t,e,i,r);return Oa(a)}ix=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=oo(t.pendingLanes);n!==0&&(ud(t,n|1),Mt(t,Ke()),!(Te&6)&&(Si=Ke()+500,yr()))}break;case 13:$r(function(){var r=Dn(e,1);if(r!==null){var i=kt();dn(r,e,1,i)}}),Wd(e,1)}};dd=function(e){if(e.tag===13){var t=Dn(e,134217728);if(t!==null){var n=kt();dn(t,e,134217728,n)}Wd(e,134217728)}};ox=function(e){if(e.tag===13){var t=cr(e),n=Dn(e,t);if(n!==null){var r=kt();dn(n,e,t,r)}Wd(e,t)}};sx=function(){return Le};ax=function(e,t){var n=Le;try{return Le=e,t()}finally{Le=n}};Hc=function(e,t,n){switch(t){case"input":if($c(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ol(r);if(!i)throw Error(ue(90));$g(r),$c(r,i)}}}break;case"textarea":Fg(e,n);break;case"select":t=n.value,t!=null&&ci(e,!!n.multiple,t,!1)}};Jg=$d;Kg=$r;var Dw={usingClientEntryPoint:!1,Events:[ns,ti,ol,Hg,qg,$d]},Gi={findFiberByHostInstance:_r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fw={bundleType:Gi.bundleType,version:Gi.version,rendererPackageName:Gi.rendererPackageName,rendererConfig:Gi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qg(e),e===null?null:e.stateNode},findFiberByHostInstance:Gi.findFiberByHostInstance||Ow,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ls.isDisabled&&Ls.supportsFiber)try{tl=Ls.inject(Fw),wn=Ls}catch{}}Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dw;Jt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hd(t))throw Error(ue(200));return Iw(e,t,null,n)};Jt.createRoot=function(e,t){if(!Hd(e))throw Error(ue(299));var n=!1,r="",i=zy;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ud(e,1,!1,null,null,n,!1,r,i),e[$n]=t.current,Lo(e.nodeType===8?e.parentNode:e),new Vd(t)};Jt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(ue(188)):(e=Object.keys(e).join(","),Error(ue(268,e)));return e=Qg(t),e=e===null?null:e.stateNode,e};Jt.flushSync=function(e){return $r(e)};Jt.hydrate=function(e,t,n){if(!hl(t))throw Error(ue(200));return ml(null,e,t,!0,n)};Jt.hydrateRoot=function(e,t,n){if(!Hd(e))throw Error(ue(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=zy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Ey(t,null,e,1,n??null,i,!1,s,a),e[$n]=t.current,Lo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new fl(t)};Jt.render=function(e,t,n){if(!hl(t))throw Error(ue(200));return ml(null,e,t,!1,n)};Jt.unmountComponentAtNode=function(e){if(!hl(e))throw Error(ue(40));return e._reactRootContainer?($r(function(){ml(null,null,e,!1,function(){e._reactRootContainer=null,e[$n]=null})}),!0):!1};Jt.unstable_batchedUpdates=$d;Jt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!hl(n))throw Error(ue(200));if(e==null||e._reactInternals===void 0)throw Error(ue(38));return ml(e,t,n,!1,r)};Jt.version="18.3.1-next-f1338f8080-20240426";function Ty(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ty)}catch(e){console.error(e)}}Ty(),Tg.exports=Jt;var Ay=Tg.exports,jh=Ay;Ac.createRoot=jh.createRoot,Ac.hydrateRoot=jh.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wo(){return Wo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wo.apply(this,arguments)}var er;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(er||(er={}));const _h="popstate";function Bw(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:a,hash:l}=r.location;return _u("",{pathname:s,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Py(i)}return Ww(t,n,null,e)}function Ze(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function qd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Uw(){return Math.random().toString(36).substr(2,8)}function Sh(e,t){return{usr:e.state,key:e.key,idx:t}}function _u(e,t,n,r){return n===void 0&&(n=null),Wo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Li(t):t,{state:n,key:t&&t.key||r||Uw()})}function Py(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Li(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ww(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,l=er.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(Wo({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function p(){l=er.Pop;let j=d(),g=j==null?null:j-u;u=j,c&&c({action:l,location:b.location,delta:g})}function f(j,g){l=er.Push;let x=_u(b.location,j,g);u=d()+1;let v=Sh(x,u),_=b.createHref(x);try{a.pushState(v,"",_)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;i.location.assign(_)}s&&c&&c({action:l,location:b.location,delta:1})}function h(j,g){l=er.Replace;let x=_u(b.location,j,g);u=d();let v=Sh(x,u),_=b.createHref(x);a.replaceState(v,"",_),s&&c&&c({action:l,location:b.location,delta:0})}function m(j){let g=i.location.origin!=="null"?i.location.origin:i.location.href,x=typeof j=="string"?j:Py(j);return x=x.replace(/ $/,"%20"),Ze(g,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,g)}let b={get action(){return l},get location(){return e(i,a)},listen(j){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(_h,p),c=j,()=>{i.removeEventListener(_h,p),c=null}},createHref(j){return t(i,j)},createURL:m,encodeLocation(j){let g=m(j);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:h,go(j){return a.go(j)}};return b}var Ch;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ch||(Ch={}));function Vw(e,t,n){return n===void 0&&(n="/"),Hw(e,t,n)}function Hw(e,t,n,r){let i=typeof t=="string"?Li(t):t,s=Ry(i.pathname||"/",n);if(s==null)return null;let a=My(e);qw(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=ik(s);l=tk(a[c],u)}return l}function My(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,a,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};c.relativePath.startsWith("/")&&(Ze(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Tr([r,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(Ze(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),My(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:Zw(u,s.index),routesMeta:d})};return e.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,a);else for(let c of Ly(s.path))i(s,a,c)}),t}function Ly(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=Ly(r.join("/")),l=[];return l.push(...a.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function qw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ek(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Jw=/^:[\w-]+$/,Kw=3,Gw=2,Yw=1,Qw=10,Xw=-2,Nh=e=>e==="*";function Zw(e,t){let n=e.split("/"),r=n.length;return n.some(Nh)&&(r+=Xw),t&&(r+=Gw),n.filter(i=>!Nh(i)).reduce((i,s)=>i+(Jw.test(s)?Kw:s===""?Yw:Qw),r)}function ek(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function tk(e,t,n){let{routesMeta:r}=e,i={},s="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",p=nk({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),f=c.route;if(!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:Tr([s,p.pathname]),pathnameBase:ck(Tr([s,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(s=Tr([s,p.pathnameBase]))}return a}function nk(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=rk(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:f,isOptional:h}=d;if(f==="*"){let b=l[p]||"";a=s.slice(0,s.length-b.length).replace(/(.)\/+$/,"$1")}const m=l[p];return h&&!m?u[f]=void 0:u[f]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:e}}function rk(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),qd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function ik(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return qd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ry(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const ok=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sk=e=>ok.test(e);function ak(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Li(e):e,s;if(n)if(sk(n))s=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),qd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=Eh(n.substring(1),"/"):s=Eh(n,t)}else s=t;return{pathname:s,search:uk(r),hash:dk(i)}}function Eh(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function oc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lk(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Iy(e,t){let n=lk(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Oy(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Li(e):(i=Wo({},e),Ze(!i.pathname||!i.pathname.includes("?"),oc("?","pathname","search",i)),Ze(!i.pathname||!i.pathname.includes("#"),oc("#","pathname","hash",i)),Ze(!i.search||!i.search.includes("#"),oc("#","search","hash",i)));let s=e===""||i.pathname==="",a=s?"/":i.pathname,l;if(a==null)l=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}l=p>=0?t[p]:"/"}let c=ak(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Tr=e=>e.join("/").replace(/\/\/+/g,"/"),ck=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),uk=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,dk=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function pk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const $y=["post","put","patch","delete"];new Set($y);const fk=["get",...$y];new Set(fk);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vo(){return Vo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vo.apply(this,arguments)}const Jd=k.createContext(null),hk=k.createContext(null),is=k.createContext(null),gl=k.createContext(null),vr=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Dy=k.createContext(null);function os(){return k.useContext(gl)!=null}function Kd(){return os()||Ze(!1),k.useContext(gl).location}function Fy(e){k.useContext(is).static||k.useLayoutEffect(e)}function Gd(){let{isDataRoute:e}=k.useContext(vr);return e?Ek():mk()}function mk(){os()||Ze(!1);let e=k.useContext(Jd),{basename:t,future:n,navigator:r}=k.useContext(is),{matches:i}=k.useContext(vr),{pathname:s}=Kd(),a=JSON.stringify(Iy(i,n.v7_relativeSplatPath)),l=k.useRef(!1);return Fy(()=>{l.current=!0}),k.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=Oy(u,JSON.parse(a),s,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Tr([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,a,s,e])}function gk(){let{matches:e}=k.useContext(vr),t=e[e.length-1];return t?t.params:{}}function xk(e,t){return yk(e,t)}function yk(e,t,n,r){os()||Ze(!1);let{navigator:i}=k.useContext(is),{matches:s}=k.useContext(vr),a=s[s.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=Kd(),d;if(t){var p;let j=typeof t=="string"?Li(t):t;c==="/"||(p=j.pathname)!=null&&p.startsWith(c)||Ze(!1),d=j}else d=u;let f=d.pathname||"/",h=f;if(c!=="/"){let j=c.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(j.length).join("/")}let m=Vw(e,{pathname:h}),b=jk(m&&m.map(j=>Object.assign({},j,{params:Object.assign({},l,j.params),pathname:Tr([c,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?c:Tr([c,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),s,n,r);return t&&b?k.createElement(gl.Provider,{value:{location:Vo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:er.Pop}},b):b}function vk(){let e=Nk(),t=pk(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,null)}const bk=k.createElement(vk,null);class wk extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(vr.Provider,{value:this.props.routeContext},k.createElement(Dy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function kk(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext(Jd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(vr.Provider,{value:t},r)}function jk(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Ze(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:h}=n,m=p.route.loader&&f[p.route.id]===void 0&&(!h||h[p.route.id]===void 0);if(p.route.lazy||m){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,p,f)=>{let h,m=!1,b=null,j=null;n&&(h=l&&p.route.id?l[p.route.id]:void 0,b=p.route.errorElement||bk,c&&(u<0&&f===0?(zk("route-fallback"),m=!0,j=null):u===f&&(m=!0,j=p.route.hydrateFallbackElement||null)));let g=t.concat(a.slice(0,f+1)),x=()=>{let v;return h?v=b:m?v=j:p.route.Component?v=k.createElement(p.route.Component,null):p.route.element?v=p.route.element:v=d,k.createElement(kk,{match:p,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:v})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?k.createElement(wk,{location:n.location,revalidation:n.revalidation,component:b,error:h,children:x(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):x()},null)}var By=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(By||{}),Uy=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Uy||{});function _k(e){let t=k.useContext(Jd);return t||Ze(!1),t}function Sk(e){let t=k.useContext(hk);return t||Ze(!1),t}function Ck(e){let t=k.useContext(vr);return t||Ze(!1),t}function Wy(e){let t=Ck(),n=t.matches[t.matches.length-1];return n.route.id||Ze(!1),n.route.id}function Nk(){var e;let t=k.useContext(Dy),n=Sk(),r=Wy();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Ek(){let{router:e}=_k(By.UseNavigateStable),t=Wy(Uy.UseNavigateStable),n=k.useRef(!1);return Fy(()=>{n.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Vo({fromRouteId:t},s)))},[e,t])}const zh={};function zk(e,t,n){zh[e]||(zh[e]=!0)}function Tk(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ak(e){let{to:t,replace:n,state:r,relative:i}=e;os()||Ze(!1);let{future:s,static:a}=k.useContext(is),{matches:l}=k.useContext(vr),{pathname:c}=Kd(),u=Gd(),d=Oy(t,Iy(l,s.v7_relativeSplatPath),c,i==="path"),p=JSON.stringify(d);return k.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:i}),[u,p,i,n,r]),null}function Gr(e){Ze(!1)}function Pk(e){let{basename:t="/",children:n=null,location:r,navigationType:i=er.Pop,navigator:s,static:a=!1,future:l}=e;os()&&Ze(!1);let c=t.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:c,navigator:s,static:a,future:Vo({v7_relativeSplatPath:!1},l)}),[c,l,s,a]);typeof r=="string"&&(r=Li(r));let{pathname:d="/",search:p="",hash:f="",state:h=null,key:m="default"}=r,b=k.useMemo(()=>{let j=Ry(d,c);return j==null?null:{location:{pathname:j,search:p,hash:f,state:h,key:m},navigationType:i}},[c,d,p,f,h,m,i]);return b==null?null:k.createElement(is.Provider,{value:u},k.createElement(gl.Provider,{children:n,value:b}))}function Mk(e){let{children:t,location:n}=e;return xk(Su(t),n)}new Promise(()=>{});function Su(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,i)=>{if(!k.isValidElement(r))return;let s=[...t,i];if(r.type===k.Fragment){n.push.apply(n,Su(r.props.children,s));return}r.type!==Gr&&Ze(!1),!r.props.index||!r.props.children||Ze(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Su(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Lk="6";try{window.__reactRouterVersion=Lk}catch{}const Rk="startTransition",Th=T0[Rk];function Ik(e){let{basename:t,children:n,future:r,window:i}=e,s=k.useRef();s.current==null&&(s.current=Bw({window:i,v5Compat:!0}));let a=s.current,[l,c]=k.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=k.useCallback(p=>{u&&Th?Th(()=>c(p)):c(p)},[c,u]);return k.useLayoutEffect(()=>a.listen(d),[a,d]),k.useEffect(()=>Tk(r),[r]),k.createElement(Pk,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}var Ah;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ah||(Ah={}));var Ph;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ph||(Ph={}));const Ok={},Mh=e=>{let t;const n=new Set,r=(d,p)=>{const f=typeof d=="function"?d(t):d;if(!Object.is(f,t)){const h=t;t=p??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(m=>m(t,h))}},i=()=>t,c={setState:r,getState:i,getInitialState:()=>u,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(Ok?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,c);return c},$k=e=>e?Mh(e):Mh;var Vy={exports:{}},Hy={},qy={exports:{}},Jy={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ci=k;function Dk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fk=typeof Object.is=="function"?Object.is:Dk,Bk=Ci.useState,Uk=Ci.useEffect,Wk=Ci.useLayoutEffect,Vk=Ci.useDebugValue;function Hk(e,t){var n=t(),r=Bk({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return Wk(function(){i.value=n,i.getSnapshot=t,sc(i)&&s({inst:i})},[e,n,t]),Uk(function(){return sc(i)&&s({inst:i}),e(function(){sc(i)&&s({inst:i})})},[e]),Vk(n),n}function sc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fk(e,n)}catch{return!0}}function qk(e,t){return t()}var Jk=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?qk:Hk;Jy.useSyncExternalStore=Ci.useSyncExternalStore!==void 0?Ci.useSyncExternalStore:Jk;qy.exports=Jy;var Kk=qy.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xl=k,Gk=Kk;function Yk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qk=typeof Object.is=="function"?Object.is:Yk,Xk=Gk.useSyncExternalStore,Zk=xl.useRef,ej=xl.useEffect,tj=xl.useMemo,nj=xl.useDebugValue;Hy.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=Zk(null);if(s.current===null){var a={hasValue:!1,value:null};s.current=a}else a=s.current;s=tj(function(){function c(h){if(!u){if(u=!0,d=h,h=r(h),i!==void 0&&a.hasValue){var m=a.value;if(i(m,h))return p=m}return p=h}if(m=p,Qk(d,h))return m;var b=r(h);return i!==void 0&&i(m,b)?(d=h,m):(d=h,p=b)}var u=!1,d,p,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,r,i]);var l=Xk(e,s[0],s[1]);return ej(function(){a.hasValue=!0,a.value=l},[l]),nj(l),l};Vy.exports=Hy;var rj=Vy.exports;const ij=Za(rj),Ky={},{useDebugValue:oj}=Wt,{useSyncExternalStoreWithSelector:sj}=ij;let Lh=!1;const aj=e=>e;function lj(e,t=aj,n){(Ky?"production":void 0)!=="production"&&n&&!Lh&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Lh=!0);const r=sj(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return oj(r),r}const Rh=e=>{(Ky?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?$k(e):e,n=(r,i)=>lj(t,r,i);return Object.assign(n,t),n},cj=e=>e?Rh(e):Rh,gt=cj((e,t)=>({project:null,selectedAgentId:null,selectedToolId:null,mcpServers:[],builtinTools:[],isRunning:!1,runEvents:[],watches:[],activeTab:"app",sidebarOpen:!0,hasUnsavedChanges:!1,runAgentId:null,currentSessionId:null,setProject:n=>{var i;const r=((i=n==null?void 0:n.watches)==null?void 0:i.map(s=>({...s,result:void 0,error:void 0,isLoading:!1,lastRun:void 0,history:[]})))||[];e({project:n,watches:r})},setSelectedAgentId:n=>e({selectedAgentId:n}),setSelectedToolId:n=>e({selectedToolId:n}),setMcpServers:n=>e({mcpServers:n}),setBuiltinTools:n=>e({builtinTools:n}),setIsRunning:n=>e({isRunning:n}),addRunEvent:n=>e(r=>({runEvents:[...r.runEvents,n]})),clearRunEvents:()=>e({runEvents:[]}),setWatches:n=>e({watches:n}),updateWatch:(n,r)=>e(i=>{const s=i.watches.map(l=>l.id===n?{...l,...r}:l);if(("serverName"in r||"toolName"in r||"args"in r||"transform"in r)&&i.project){const l=s.map(({id:c,serverName:u,toolName:d,args:p,transform:f})=>({id:c,serverName:u,toolName:d,args:p,transform:f}));return{watches:s,project:{...i.project,watches:l},hasUnsavedChanges:!0}}return{watches:s}}),addWatch:n=>e(r=>{const i=[...r.watches,n],{project:s}=r;if(s){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...s,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),removeWatch:n=>e(r=>{const i=r.watches.filter(a=>a.id!==n),{project:s}=r;if(s){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...s,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),clearWatchHistories:()=>e(n=>({watches:n.watches.map(r=>({...r,history:[],result:void 0,error:void 0}))})),setActiveTab:n=>e({activeTab:n}),setSidebarOpen:n=>e({sidebarOpen:n}),setHasUnsavedChanges:n=>e({hasUnsavedChanges:n}),setRunAgentId:n=>e({runAgentId:n}),setCurrentSessionId:n=>e({currentSessionId:n}),updateProject:n=>{const{project:r}=t();r&&e({project:{...r,...n}})},addAgent:n=>{const{project:r}=t();if(r){let i=r.app;if(n.type==="LlmAgent"&&n.output_key){const s=n.output_key;r.app.state_keys.find(l=>l.name===s)||(i={...r.app,state_keys:[...r.app.state_keys,{name:s,description:`Output from ${n.name} agent`,type:"string",scope:"session"}]})}e({project:{...r,app:i,agents:[...r.agents,n]}})}},updateAgent:(n,r)=>{const{project:i}=t();if(i){const s=i.agents.find(l=>l.id===n);let a=i.app;if(s&&s.type==="LlmAgent"&&r.output_key){const l=s.output_key,c=r.output_key;if(l!==c){const u=i.app.state_keys.filter(p=>p.name!==l);u.find(p=>p.name===c)?a={...i.app,state_keys:u}:a={...i.app,state_keys:[...u,{name:c,description:`Output from ${r.name||s.name} agent`,type:"string",scope:"session"}]}}}e({project:{...i,app:a,agents:i.agents.map(l=>l.id===n?{...l,...r}:l)}})}},removeAgent:n=>{const{project:r,selectedAgentId:i}=t();r&&e({project:{...r,agents:r.agents.filter(s=>s.id!==n)},selectedAgentId:i===n?null:i})},addCustomTool:n=>{const{project:r}=t();r&&e({project:{...r,custom_tools:[...r.custom_tools,n]}})},updateCustomTool:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_tools:i.custom_tools.map(s=>s.id===n?{...s,...r}:s)}})},removeCustomTool:n=>{const{project:r,selectedToolId:i}=t();r&&e({project:{...r,custom_tools:r.custom_tools.filter(s=>s.id!==n)},selectedToolId:i===n?null:i})},addCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:[...r.custom_callbacks||[],n]}})},updateCustomCallback:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_callbacks:(i.custom_callbacks||[]).map(s=>s.id===n?{...s,...r}:s)}})},removeCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:(r.custom_callbacks||[]).filter(i=>i.id!==n)}})}})),Yd="/api";async function Ce(e,t){const n=await fetch(`${Yd}${e}`,{...t,headers:{"Content-Type":"application/json",...t==null?void 0:t.headers}});if(!n.ok){const r=await n.json().catch(()=>({detail:"Unknown error"}));throw new Error(r.detail||`HTTP ${n.status}`)}return n.json()}async function Gy(){return(await Ce("/projects")).projects}async function Yy(e){return(await Ce(`/projects/${e}`)).project}async function Qy(e,t=""){return(await Ce("/projects",{method:"POST",body:JSON.stringify({name:e,description:t})})).project}async function Cu(e,t){return(await Ce(`/projects/${e}`,{method:"PUT",body:JSON.stringify(t)})).project}async function Xy(e){await Ce(`/projects/${e}`,{method:"DELETE"})}async function Zy(e){return Ce(`/sessions/${e}/save-to-memory`,{method:"POST"})}async function Nu(e){return(await Ce(`/projects/${e}/sessions`)).sessions}async function ev(e,t){return(await Ce(`/projects/${e}/sessions/${t}/load`)).session}async function tv(e,t){return(await Ce(`/projects/${e}/sessions/${t}/artifacts`)).artifacts||[]}function oa(e,t,n){return`${Yd}/projects/${e}/sessions/${t}/artifacts/${encodeURIComponent(n)}`}async function nv(e){return(await Ce(`/projects/${e}/yaml`)).yaml}async function rv(e,t){return(await Ce(`/projects/${e}/yaml`,{method:"PUT",body:JSON.stringify({yaml:t})})).project}async function Qd(){return(await Ce("/mcp-servers")).servers}async function iv(){return(await Ce("/builtin-tools")).tools}function ov(e){const t=window.location.protocol==="https:"?"wss:":"ws:",n=window.location.host;return new WebSocket(`${t}//${n}/ws/run/${e}`)}async function sa(e,t,n,r){return await Ce(`/projects/${e}/generate-prompt`,{method:"POST",body:JSON.stringify({agent_id:t,context:n,agent_config:r||void 0})})}async function sv(e,t){return await Ce(`/projects/${e}/generate-agent-config`,{method:"POST",body:JSON.stringify({description:t})})}async function av(e,t,n,r=[],i){return await Ce(`/projects/${e}/generate-tool-code`,{method:"POST",body:JSON.stringify({tool_name:t,tool_description:n,state_keys_used:r,context:i})})}async function lv(e,t,n,r,i=[],s){return await Ce(`/projects/${e}/generate-callback-code`,{method:"POST",body:JSON.stringify({callback_name:t,callback_description:n,callback_type:r,state_keys_used:i,context:s})})}async function Eu(e){return await Ce("/test-mcp-server",{method:"POST",body:JSON.stringify(e)})}async function cv(e,t){return Ce(`/projects/${e}/test-model`,{method:"POST",body:JSON.stringify(t)})}async function uv(e,t){return Ce(`/projects/${e}/skillsets/${t}/stats`)}async function dv(e,t,n,r,i=500,s=50){return Ce(`/projects/${e}/skillsets/${t}/url`,{method:"POST",body:JSON.stringify({url:n,source_name:r,chunk_size:i,chunk_overlap:s})})}async function pv(e,t,n,r=500,i=50){const s=new FormData;s.append("file",n),s.append("chunk_size",String(r)),s.append("chunk_overlap",String(i));const a=await fetch(`${Yd}/projects/${e}/skillsets/${t}/file`,{method:"POST",body:s});if(!a.ok)throw new Error(`Upload failed: ${a.statusText}`);return a.json()}async function fv(e,t,n,r=10,i=0){return Ce(`/projects/${e}/skillsets/${t}/search`,{method:"POST",body:JSON.stringify({query:n,top_k:r,min_score:i})})}async function hv(e,t){return Ce(`/projects/${e}/skillsets/${t}/entries`,{method:"DELETE"})}async function mv(){return Ce("/skillsets/embeddings-available")}const Ge={async get(e){return Ce(e)},async post(e,t){return Ce(e,{method:"POST",body:t?JSON.stringify(t):void 0})},async put(e,t){return Ce(e,{method:"PUT",body:t?JSON.stringify(t):void 0})},async delete(e){return Ce(e,{method:"DELETE"})}},uj=Object.freeze(Object.defineProperty({__proto__:null,addSkillSetUrl:dv,api:Ge,checkEmbeddingsAvailable:mv,clearSkillSet:hv,createProject:Qy,createRunWebSocket:ov,deleteProject:Xy,fetchJSON:Ce,generateAgentConfig:sv,generateCallbackCode:lv,generatePrompt:sa,generateToolCode:av,getArtifactUrl:oa,getBuiltinTools:iv,getMcpServers:Qd,getProject:Yy,getProjectYaml:nv,getSkillSetStats:uv,listArtifacts:tv,listProjectSessions:Nu,listProjects:Gy,loadSession:ev,saveSessionToMemory:Zy,searchSkillSet:fv,testMcpServer:Eu,testModelConfig:cv,updateProject:Cu,updateProjectFromYaml:rv,uploadSkillSetFile:pv},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dj={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pj=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ye=(e,t)=>{const n=k.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:l="",children:c,...u},d)=>k.createElement("svg",{ref:d,...dj,width:i,height:i,stroke:r,strokeWidth:a?Number(s)*24/Number(i):s,className:["lucide",`lucide-${pj(e)}`,l].join(" "),...u},[...t.map(([p,f])=>k.createElement(p,f)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=ye("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=ye("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fj=ye("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hj=ye("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=ye("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mj=ye("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=ye("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=ye("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=ye("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=ye("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=ye("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=ye("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=ye("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=ye("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=ye("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=ye("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=ye("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gj=ye("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=ye("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=ye("FileBox",[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",key:"h7jej2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M2.97 13.12c-.6.36-.97 1.02-.97 1.74v3.28c0 .72.37 1.38.97 1.74l3 1.83c.63.39 1.43.39 2.06 0l3-1.83c.6-.36.97-1.02.97-1.74v-3.28c0-.72-.37-1.38-.97-1.74l-3-1.83a1.97 1.97 0 0 0-2.06 0l-3 1.83Z",key:"f4a3oc"}],["path",{d:"m7 17-4.74-2.85",key:"etm6su"}],["path",{d:"m7 17 4.74-2.85",key:"5xuooz"}],["path",{d:"M7 17v5",key:"1yj1jh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=ye("FileCheck",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xj=ye("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yj=ye("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vj=ye("File",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=ye("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=ye("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=ye("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=ye("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=ye("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bj=ye("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wj=ye("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kj=ye("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=ye("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=ye("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=ye("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jj=ye("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=ye("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=ye("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=ye("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=ye("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _j=ye("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sj=ye("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cj=ye("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=ye("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=ye("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=ye("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nj=ye("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=ye("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=ye("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=ye("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ej=ye("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=ye("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=ye("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=ye("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zj=ye("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=ye("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=ye("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=ye("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=ye("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=ye("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=ye("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=ye("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=ye("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tj=ye("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=ye("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=ye("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=ye("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=ye("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function Aj(){const e=Gd(),[t,n]=k.useState([]),[r,i]=k.useState(!0),[s,a]=k.useState(!1),[l,c]=k.useState("");k.useEffect(()=>{u()},[]);async function u(){try{const f=await Gy();n(f)}catch(f){console.error("Failed to load projects:",f)}finally{i(!1)}}async function d(){if(l.trim())try{const f=await Qy(l.trim());e(`/project/${f.id}`)}catch(f){console.error("Failed to create project:",f)}}async function p(f,h){if(h.stopPropagation(),!!confirm("Delete this project?"))try{await Xy(f),n(t.filter(m=>m.id!==f))}catch(m){console.error("Failed to delete project:",m)}}return o.jsxs("div",{className:"project-list",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("header",{className:"header",children:[o.jsxs("div",{className:"logo",children:[o.jsx(ip,{size:40,className:"logo-icon"}),o.jsx("h1",{className:"title",children:"ADK Playground"})]}),o.jsx("p",{className:"subtitle",children:"Build, test, and deploy AI agents visually"})]}),o.jsxs("div",{className:"content",children:[s?o.jsxs("div",{className:"create-form",children:[o.jsx("input",{type:"text",placeholder:"Project name...",value:l,onChange:f=>c(f.target.value),onKeyDown:f=>f.key==="Enter"&&d(),autoFocus:!0}),o.jsxs("button",{className:"btn btn-primary",onClick:d,children:[o.jsx(Qe,{size:18}),"Create"]}),o.jsx("button",{className:"btn btn-secondary",onClick:()=>a(!1),children:"Cancel"})]}):o.jsx("div",{className:"create-form",children:o.jsxs("button",{className:"btn btn-primary",onClick:()=>a(!0),children:[o.jsx(Qe,{size:18}),"New Project"]})}),r?o.jsx("div",{className:"loading",children:"Loading projects..."}):t.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Ih,{size:48,style:{marginBottom:16,opacity:.3}}),o.jsx("p",{children:"No projects yet. Create one to get started!"})]}):o.jsx("div",{className:"projects-grid",children:t.map(f=>o.jsxs("div",{className:"project-card",onClick:()=>e(`/project/${f.id}`),children:[o.jsxs("h3",{children:[o.jsx(Ih,{size:18}),f.name]}),o.jsx("p",{children:f.description||"No description"}),o.jsx("button",{className:"delete-btn",onClick:h=>p(f.id,h),children:o.jsx(Ue,{size:16})})]},f.id))})]})]})}const Oh={},Pj=5*60*1e3;function Mj({projectId:e,value:t,provider:n,apiBase:r,onChange:i,placeholder:s="Search models..."}){const a=`${e}:${n||""}:${r||""}`,[l,c]=k.useState(t||""),[u,d]=k.useState(!1),[p,f]=k.useState([]),[h,m]=k.useState(!1),[b,j]=k.useState(null),[g,x]=k.useState(-1),[v,_]=k.useState({top:0,left:0,width:0}),A=k.useRef(null),S=k.useRef(null);k.useEffect(()=>{if(u&&A.current){const T=A.current.getBoundingClientRect();_({top:T.bottom+window.scrollY+4,left:T.left+window.scrollX,width:T.width})}},[u]);const M=k.useCallback(async()=>{const T=Oh[a];if(T&&Date.now()-T.timestamp<Pj){const P=[];Object.values(T.providers).forEach(D=>{P.push(...D.models)}),f(P);return}m(!0),j(null);try{const P=new URLSearchParams;n&&P.append("provider",n),r&&P.append("api_base",r);const D=`/models/${e}${P.toString()?"?"+P.toString():""}`,C=await Ge.get(D);Oh[a]={providers:C.providers,timestamp:Date.now()};const L=[];Object.values(C.providers).forEach(R=>{R.models&&R.models.length>0&&L.push(...R.models)}),f(L)}catch(P){j(P.message||"Failed to fetch models")}finally{m(!1)}},[e,a,r,n]);k.useEffect(()=>{M()},[M]),k.useEffect(()=>{c(t||"")},[t]);const E=p.filter(T=>{const P=l.toLowerCase();return T.id.toLowerCase().includes(P)||T.name.toLowerCase().includes(P)||T.provider.toLowerCase().includes(P)});k.useEffect(()=>{const T=P=>{S.current&&!S.current.contains(P.target)&&A.current&&!A.current.contains(P.target)&&d(!1)};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[]);const U=T=>{if(!u){(T.key==="ArrowDown"||T.key==="Enter")&&(d(!0),T.preventDefault());return}switch(T.key){case"ArrowDown":x(P=>Math.min(P+1,E.length-1)),T.preventDefault();break;case"ArrowUp":x(P=>Math.max(P-1,0)),T.preventDefault();break;case"Enter":g>=0&&g<E.length&&z(E[g]),T.preventDefault();break;case"Escape":d(!1);break}},z=T=>{c(T.id),i(T.id,T.provider),d(!1)},$=T=>{c(T.target.value),d(!0),x(-1),i(T.target.value,n||"gemini")},q=T=>{switch(T.toLowerCase()){case"gemini":return"provider-gemini";case"anthropic":return"provider-anthropic";case"openai":return"provider-openai";case"groq":return"provider-groq";case"together":return"provider-together";case"ollama":return"provider-ollama";default:return"provider-other"}},Y=u?o.jsxs("div",{ref:S,className:"model-autocomplete-dropdown model-autocomplete-dropdown-portal",style:{position:"fixed",top:v.top,left:v.left,width:v.width},children:[h&&o.jsx("div",{className:"model-autocomplete-loading",children:"Loading models..."}),b&&o.jsx("div",{className:"model-autocomplete-error",children:b}),!h&&!b&&E.length===0&&o.jsx("div",{className:"model-autocomplete-empty",children:l?"No matching models":"No models available"}),!h&&E.length>0&&o.jsxs("div",{className:"model-autocomplete-list",children:[E.slice(0,50).map((T,P)=>o.jsxs("div",{className:`model-autocomplete-item ${P===g?"highlighted":""}`,onClick:()=>z(T),onMouseEnter:()=>x(P),children:[o.jsx("span",{className:`provider-badge ${q(T.provider)}`,children:T.provider}),o.jsx("span",{className:"model-id",children:T.id}),T.context_window&&o.jsxs("span",{className:"model-context",title:`${T.context_window.toLocaleString()} token context`,children:[Math.round(T.context_window/1e3),"K"]}),T.supports_tools&&o.jsx("span",{className:"model-feature",title:"Supports function calling / tools",children:"🔧"}),T.supports_vision&&o.jsx("span",{className:"model-feature",title:"Supports image/vision input",children:"👁️"}),T.supports_json_mode&&o.jsx("span",{className:"model-feature",title:"Supports structured JSON output",children:"📋"})]},`${T.provider}-${T.id}`)),E.length>50&&o.jsxs("div",{className:"model-autocomplete-more",children:["+",E.length-50," more..."]})]})]}):null;return o.jsxs("div",{className:"model-autocomplete",children:[o.jsx("input",{ref:A,type:"text",value:l,onChange:$,onFocus:()=>d(!0),onKeyDown:U,placeholder:s,className:"model-autocomplete-input"}),Y&&Ay.createPortal(Y,document.body)]})}const Lj=[{value:"gemini",label:"Gemini"},{value:"anthropic",label:"Anthropic"},{value:"openai",label:"OpenAI"},{value:"groq",label:"Groq"},{value:"together",label:"Together (via LiteLLM)"},{value:"litellm",label:"LiteLLM / Other"}];function Rj(e,t){return e.startsWith("openai/")?"openai":e.startsWith("groq/")?"groq":e.startsWith("together_ai/")||e.startsWith("together/")?"together":e.startsWith("ollama/")?"litellm":e.startsWith("claude-")?"anthropic":e.startsWith("gemini-")?"gemini":e.includes("/")?"litellm":t||"gemini"}function Cv({projectId:e,values:t,onChange:n,className:r=""}){const[i,s]=k.useState(!1),[a,l]=k.useState(null),c=async()=>{var u;if(!t.model_name||!t.provider){l({success:!1,message:"Please select a model first"});return}s(!0),l(null);try{const d=await cv(e,{provider:t.provider,model_name:t.model_name,api_base:t.api_base});d.success?l({success:!0,message:((u=d.response)==null?void 0:u.slice(0,100))||"Model responded successfully!"}):l({success:!1,message:d.error||"Test failed"})}catch(d){l({success:!1,message:d.message||"Connection failed"})}finally{s(!1)}};return o.jsxs("div",{className:`model-config-form ${r}`,children:[o.jsxs("div",{className:"model-config-row",children:[o.jsxs("div",{className:"model-config-field",style:{flex:1},children:[o.jsx("label",{children:"Provider"}),o.jsx("select",{value:t.provider||"gemini",onChange:u=>{n({provider:u.target.value}),l(null)},children:Lj.map(u=>o.jsx("option",{value:u.value,children:u.label},u.value))})]}),o.jsxs("div",{className:"model-config-field",style:{flex:3},children:[o.jsx("label",{children:"Model"}),o.jsx(Mj,{projectId:e,value:t.model_name||"",provider:t.provider,apiBase:t.api_base,onChange:(u,d)=>{const p=Rj(u,d);n({model_name:u,provider:p}),l(null)},placeholder:"Search models..."})]}),o.jsxs("div",{className:"model-config-field",style:{flex:2},children:[o.jsx("label",{children:"API Base (optional)"}),o.jsx("input",{type:"text",value:t.api_base||"",onChange:u=>{n({api_base:u.target.value||void 0}),l(null)},placeholder:t.provider==="gemini"?"https://generativelanguage.googleapis.com":t.provider==="anthropic"?"https://api.anthropic.com":t.provider==="openai"?"https://api.openai.com/v1":t.provider==="groq"?"https://api.groq.com/openai/v1":t.provider==="together"?"https://api.together.xyz/v1":"http://localhost:11434"})]}),o.jsxs("div",{className:"model-config-field model-test-field",children:[o.jsx("label",{children:" "}),o.jsxs("button",{type:"button",className:`model-test-btn ${(a==null?void 0:a.success)===!0?"success":(a==null?void 0:a.success)===!1?"error":""}`,onClick:c,disabled:i||!t.model_name,title:(a==null?void 0:a.message)||"Test model connection",children:[i?o.jsx(bv,{size:14,className:"spinning"}):(a==null?void 0:a.success)===!0?o.jsx(Bn,{size:14}):(a==null?void 0:a.success)===!1?o.jsx(mr,{size:14}):o.jsx(sp,{size:14}),i?"Testing...":"Test"]})]})]}),o.jsxs("div",{className:"model-config-row",children:[o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Temperature"}),o.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:t.temperature??"",onChange:u=>n({temperature:u.target.value?parseFloat(u.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Max Tokens"}),o.jsx("input",{type:"number",min:"1",value:t.max_output_tokens??"",onChange:u=>n({max_output_tokens:u.target.value?parseInt(u.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Top P"}),o.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:t.top_p??"",onChange:u=>n({top_p:u.target.value?parseFloat(u.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Top K"}),o.jsx("input",{type:"number",min:"1",value:t.top_k??"",onChange:u=>n({top_k:u.target.value?parseInt(u.target.value):void 0}),placeholder:"Default"})]})]}),o.jsxs("div",{className:"model-config-row",children:[o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{title:"Number of times to retry on connection failure",children:"Retries"}),o.jsx("input",{type:"number",min:"0",max:"10",value:t.num_retries??"",onChange:u=>n({num_retries:u.target.value?parseInt(u.target.value):void 0}),placeholder:"3"})]}),o.jsxs("div",{className:"model-config-field",style:{flex:2},children:[o.jsx("label",{title:"Maximum time to wait for a response (in seconds)",children:"Timeout (seconds)"}),o.jsx("input",{type:"number",min:"10",max:"7200",step:"10",value:t.request_timeout??"",onChange:u=>n({request_timeout:u.target.value?parseInt(u.target.value):void 0}),placeholder:"1800 (30 min)"})]}),o.jsxs("div",{className:"model-config-field",style:{flex:3},children:[o.jsx("label",{children:" "}),o.jsx("span",{className:"model-config-hint",style:{fontSize:"11px",color:"#666",marginTop:"4px"},children:"Increase timeout for slow models like local Ollama"})]})]})]})}const Ij=[{key:"GOOGLE_API_KEY",description:"API key for Gemini models"},{key:"OPENAI_API_KEY",description:"API key for OpenAI models (via LiteLLM)"},{key:"GROQ_API_KEY",description:"API key for Groq models"},{key:"ANTHROPIC_API_KEY",description:"API key for Anthropic Claude models"},{key:"TOGETHER_API_KEY",description:"API key for Together (via LiteLLM, e.g. together_ai/* models)"},{key:"AZURE_API_KEY",description:"API key for Azure OpenAI Service"},{key:"AZURE_API_BASE",description:"Base URL for Azure OpenAI endpoint (e.g., https://your-resource.openai.azure.com)"},{key:"AZURE_API_VERSION",description:"API version for Azure OpenAI (e.g., 2024-02-15-preview)"},{key:"GOOGLE_GENAI_USE_VERTEXAI",description:'Set to "1" to use Vertex AI instead of API key'},{key:"GOOGLE_CLOUD_PROJECT",description:"Google Cloud project ID for Vertex AI"},{key:"GOOGLE_CLOUD_REGION",description:"Google Cloud region for Vertex AI (e.g., us-central1)"}];function Oj(e){return/^[a-zA-Z0-9_]+$/.test(e)}function $j(){var K;const{project:e,updateProject:t}=gt(),[n,r]=k.useState(null);if(!e)return null;const{app:i}=e;function s(y){t({app:{...i,...y}})}function a(y){if(y===""){r(null),s({name:y});return}Oj(y)?r(null):r("Name can only contain letters, numbers, and underscores"),s({name:y})}function l(){const y={name:`state_key_${i.state_keys.length+1}`,description:"",type:"string",scope:"session"};s({state_keys:[...i.state_keys,y]})}function c(y,N){const V=[...i.state_keys];V[y]={...V[y],...N},s({state_keys:V})}function u(y){s({state_keys:i.state_keys.filter((N,V)=>V!==y)})}function d(y="ReflectAndRetryToolPlugin"){let N;switch(y){case"ReflectAndRetryToolPlugin":N={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1};break;case"ContextFilterPlugin":N={type:"ContextFilterPlugin",name:"context_filter",num_invocations_to_keep:5};break;case"LoggingPlugin":N={type:"LoggingPlugin",name:"logging"};break;case"GlobalInstructionPlugin":N={type:"GlobalInstructionPlugin",name:"global_instruction",global_instruction:""};break;case"SaveFilesAsArtifactsPlugin":N={type:"SaveFilesAsArtifactsPlugin",name:"save_files"};break;case"MultimodalToolResultsPlugin":N={type:"MultimodalToolResultsPlugin",name:"multimodal_tools"};break;default:N={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1}}s({plugins:[...i.plugins,N]})}function p(y,N){const V=[...i.plugins];V[y]={...V[y],...N},s({plugins:V})}function f(y){s({plugins:i.plugins.filter((N,V)=>V!==y)})}const h=i.sandbox||{enabled:!1,allow_all_network:!1,allowlist:{auto:[],user:[]},unknown_action:"ask",approval_timeout:30,agent_memory_limit_mb:512,agent_cpu_limit:1,mcp_memory_limit_mb:256,mcp_cpu_limit:.5,run_timeout:3600,volume_mounts:[]},m=((K=h.allowlist)==null?void 0:K.user)||[],b=h.volume_mounts||[];function j(y){s({sandbox:{...h,...y}})}async function g(y){const N=i.id;try{await fetch(`/api/sandbox/${N}/allowlist/sync`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({patterns:y.map(V=>({pattern:V.pattern,pattern_type:V.pattern_type})).filter(V=>V.pattern)})})}catch(V){console.debug("Could not sync allowlist to gateway:",V)}}function x(){const y={id:`pattern_${Date.now().toString(36)}`,pattern:"",pattern_type:"exact",source:"user",added_at:new Date().toISOString()},N={...h.allowlist,user:[...m,y]};j({allowlist:N})}function v(y,N){const V=[...m];V[y]={...V[y],...N};const re=V;j({allowlist:{...h.allowlist,user:re}}),N.pattern&&g(re)}function _(y){const N=m.filter((V,re)=>re!==y);j({allowlist:{...h.allowlist,user:N}})}function A(){const y={host_path:"",container_path:"/mnt/data",mode:"ro"};j({volume_mounts:[...b,y]})}function S(y,N){const V=[...b];V[y]={...V[y],...N},j({volume_mounts:V})}function M(y){const N=b.filter((V,re)=>re!==y);j({volume_mounts:N})}const E=i.models||[];function U(){const y=`model_${Date.now().toString(36)}`,N={id:y,name:"New Model",provider:"gemini",model_name:"gemini-2.0-flash",is_default:E.length===0};s({models:[...E,N],default_model_id:E.length===0?y:i.default_model_id})}function z(y,N){const V=E.map(re=>re.id===y?{...re,...N}:re);s({models:V})}function $(y){var re;const N=E.filter(fe=>fe.id!==y),V=i.default_model_id===y?((re=N[0])==null?void 0:re.id)||void 0:i.default_model_id;s({models:N,default_model_id:V})}function q(y){s({default_model_id:y})}const Y=i.env_vars||{},[T,P]=k.useState({}),[D,C]=k.useState("");function L(y=""){const N=y||D.trim();!N||Y[N]!==void 0||(s({env_vars:{...Y,[N]:""}}),C(""))}function R(y,N){s({env_vars:{...Y,[y]:N}})}function w(y){const N={...Y};delete N[y],s({env_vars:N})}function W(y){P(N=>({...N,[y]:!N[y]}))}return o.jsxs("div",{className:"app-config",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("section",{className:"section",children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(Ej,{size:20}),"Basic Information"]})}),o.jsxs("div",{className:"form-grid",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"App Name"}),o.jsx("input",{type:"text",value:i.name,onChange:y=>a(y.target.value),style:{borderColor:n?"var(--error)":void 0}}),n&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:4},children:n})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Root Agent"}),o.jsxs("select",{value:i.root_agent_id||"",onChange:y=>s({root_agent_id:y.target.value||void 0}),children:[o.jsx("option",{value:"",children:"Select an agent..."}),e.agents.map(y=>o.jsx("option",{value:y.id,children:y.name},y.id))]})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(In,{size:20}),"Services"]}),o.jsx("span",{className:"section-hint",children:"Configure session, memory, and artifact storage backends"})]}),o.jsxs("div",{className:"form-grid",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Session Service"}),o.jsxs("select",{value:i.session_service_uri.split("://")[0],onChange:y=>{const N=y.target.value;s({session_service_uri:{memory:"memory://",file:"file://~/.adk-playground/sessions",sqlite:"sqlite://~/.adk-playground/sessions.db",postgresql:"postgresql://user:pass@localhost:5432/adk_sessions",mysql:"mysql://user:pass@localhost:3306/adk_sessions",agentengine:"agentengine://project/us-central1/engine-id"}[N]||N+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),o.jsx("option",{value:"file",children:"File System (JSON)"}),o.jsx("option",{value:"sqlite",children:"SQLite (local)"}),o.jsx("option",{value:"postgresql",children:"PostgreSQL"}),o.jsx("option",{value:"mysql",children:"MySQL"}),o.jsx("option",{value:"agentengine",children:"Vertex AI Agent Engine"})]}),i.session_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.session_service_uri.replace("file://",""),onChange:y=>s({session_service_uri:"file://"+y.target.value}),placeholder:"~/.adk-playground/sessions",style:{marginTop:8}}),i.session_service_uri.startsWith("sqlite://")&&o.jsx("input",{type:"text",value:i.session_service_uri.replace("sqlite://",""),onChange:y=>s({session_service_uri:"sqlite://"+y.target.value}),placeholder:"~/.adk-playground/sessions.db",style:{marginTop:8}}),(i.session_service_uri.startsWith("postgresql://")||i.session_service_uri.startsWith("mysql://"))&&o.jsx("input",{type:"text",value:i.session_service_uri,onChange:y=>s({session_service_uri:y.target.value}),placeholder:"postgresql://user:pass@localhost:5432/db",style:{marginTop:8}}),i.session_service_uri.startsWith("agentengine://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[2]||"",onChange:y=>{const N=i.session_service_uri.split("/");N[2]=y.target.value,s({session_service_uri:N.join("/")})},placeholder:"project-id"}),o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[3]||"",onChange:y=>{const N=i.session_service_uri.split("/");N[3]=y.target.value,s({session_service_uri:N.join("/")})},placeholder:"location (e.g., us-central1)"}),o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[4]||"",onChange:y=>{const N=i.session_service_uri.split("/");N[4]=y.target.value,s({session_service_uri:N.join("/")})},placeholder:"agent-engine-id"})]}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.session_service_uri.startsWith("memory://")&&"Sessions stored in memory, lost on restart",i.session_service_uri.startsWith("file://")&&"Sessions stored as JSON files, preserves UI events",i.session_service_uri.startsWith("sqlite://")&&"Persists to local SQLite file",i.session_service_uri.startsWith("postgresql://")&&"Production-ready PostgreSQL backend",i.session_service_uri.startsWith("mysql://")&&"Production-ready MySQL backend",i.session_service_uri.startsWith("agentengine://")&&"Vertex AI Agent Engine managed sessions"]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Memory Service"}),o.jsxs("select",{value:i.memory_service_uri.split("://")[0],onChange:y=>{const N=y.target.value;s({memory_service_uri:{memory:"memory://",file:"file://~/.adk-playground/memory",rag:"rag://rag-corpus-id",agentengine:"agentengine://project/us-central1/engine-id"}[N]||N+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (keyword matching)"}),o.jsx("option",{value:"file",children:"File System (keyword matching)"}),o.jsx("option",{value:"rag",children:"Vertex AI RAG"}),o.jsx("option",{value:"agentengine",children:"Vertex AI Memory Bank"})]}),i.memory_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.memory_service_uri.replace("file://",""),onChange:y=>s({memory_service_uri:"file://"+y.target.value}),placeholder:"~/.adk-playground/memory",style:{marginTop:8}}),i.memory_service_uri.startsWith("rag://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.memory_service_uri.replace("rag://",""),onChange:y=>s({memory_service_uri:"rag://"+y.target.value}),placeholder:"rag-corpus-id or full resource path"}),o.jsx("span",{className:"help-text",style:{fontSize:11,color:"var(--text-dim)"},children:"Format: projects/PROJECT/locations/LOCATION/ragCorpora/CORPUS_ID"})]}),i.memory_service_uri.startsWith("agentengine://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[2]||"",onChange:y=>{const N=i.memory_service_uri.split("/");N[2]=y.target.value,s({memory_service_uri:N.join("/")})},placeholder:"project-id"}),o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[3]||"",onChange:y=>{const N=i.memory_service_uri.split("/");N[3]=y.target.value,s({memory_service_uri:N.join("/")})},placeholder:"location (e.g., us-central1)"}),o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[4]||"",onChange:y=>{const N=i.memory_service_uri.split("/");N[4]=y.target.value,s({memory_service_uri:N.join("/")})},placeholder:"agent-engine-id"})]}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.memory_service_uri.startsWith("memory://")&&"Simple keyword matching, good for prototyping",i.memory_service_uri.startsWith("file://")&&"Persists memories as JSON files",i.memory_service_uri.startsWith("rag://")&&"Semantic search using Vertex AI RAG corpus",i.memory_service_uri.startsWith("agentengine://")&&"Managed memory via Agent Engine Memory Bank"]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Artifact Service"}),o.jsxs("select",{value:i.artifact_service_uri.split("://")[0]==="gs"?"gs":i.artifact_service_uri.split("://")[0],onChange:y=>{const N=y.target.value;s({artifact_service_uri:{memory:"memory://",file:"file://~/.adk-playground/artifacts",gs:"gs://your-bucket-name"}[N]||N+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),o.jsx("option",{value:"file",children:"File System"}),o.jsx("option",{value:"gs",children:"Google Cloud Storage"})]}),i.artifact_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.artifact_service_uri.replace("file://",""),onChange:y=>s({artifact_service_uri:"file://"+y.target.value}),placeholder:"~/.adk-playground/artifacts",style:{marginTop:8}}),i.artifact_service_uri.startsWith("gs://")&&o.jsx("input",{type:"text",value:i.artifact_service_uri.replace("gs://",""),onChange:y=>s({artifact_service_uri:"gs://"+y.target.value}),placeholder:"bucket-name/optional-prefix",style:{marginTop:8}}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.artifact_service_uri.startsWith("memory://")&&"Artifacts stored in memory, lost on restart",i.artifact_service_uri.startsWith("file://")&&"Persists to local filesystem",i.artifact_service_uri.startsWith("gs://")&&"Production-ready Google Cloud Storage backend"]})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(Tu,{size:20}),"Environment Variables"]})}),o.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginBottom:16},children:"Set API keys and other environment variables. These are passed to the agent runtime."}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16},children:Ij.filter(y=>Y[y.key]===void 0).map(y=>o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>L(y.key),title:y.description,children:[o.jsx(Qe,{size:12}),y.key]},y.key))}),Object.keys(Y).length===0?o.jsx("p",{className:"empty-message",children:"No environment variables set. Click a button above to add common variables, or add a custom one below."}):Object.entries(Y).map(([y,N])=>o.jsxs("div",{className:"list-item",style:{alignItems:"center"},children:[o.jsxs("div",{style:{flex:1,display:"flex",gap:12,alignItems:"center"},children:[o.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:13,minWidth:200},children:y}),o.jsxs("div",{style:{flex:1,display:"flex",gap:8,alignItems:"center"},children:[o.jsx("input",{type:T[y]?"text":"password",value:N,onChange:V=>R(y,V.target.value),placeholder:"Enter value...",style:{flex:1}}),o.jsx("button",{className:"delete-item",onClick:()=>W(y),title:T[y]?"Hide value":"Show value",children:T[y]?o.jsx(gj,{size:16}):o.jsx(Dr,{size:16})})]})]}),o.jsx("button",{className:"delete-item",onClick:()=>w(y),children:o.jsx(Ue,{size:16})})]},y)),o.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[o.jsx("input",{type:"text",value:D,onChange:y=>C(y.target.value.toUpperCase().replace(/[^A-Z0-9_]/g,"")),placeholder:"CUSTOM_VAR_NAME",style:{flex:1,fontFamily:"var(--font-mono)"},onKeyDown:y=>y.key==="Enter"&&L()}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>L(),disabled:!D.trim(),children:[o.jsx(Qe,{size:14}),"Add Variable"]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(ep,{size:20}),"Models"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:U,children:[o.jsx(Qe,{size:14}),"Add Model"]})]}),E.length===0?o.jsx("p",{className:"empty-message",children:"No models configured. Add models that agents can use."}):E.map(y=>o.jsxs("div",{className:"model-card",children:[o.jsxs("div",{className:"model-card-header",children:[o.jsx("input",{type:"text",value:y.name,onChange:N=>z(y.id,{name:N.target.value}),placeholder:"Model name",className:"model-name-input"}),o.jsx("button",{className:`default-model-btn ${i.default_model_id===y.id?"is-default":""}`,onClick:()=>q(y.id),title:i.default_model_id===y.id?"Default model":"Set as default",children:o.jsx(_v,{size:14,fill:i.default_model_id===y.id?"currentColor":"none"})}),o.jsx("button",{className:"delete-item",onClick:()=>$(y.id),children:o.jsx(Ue,{size:16})})]}),o.jsx("div",{className:"model-card-body",children:o.jsx(Cv,{projectId:e.id,values:y,onChange:N=>z(y.id,N)})})]},y.id))]}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20},children:[o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(np,{size:20}),"State Keys"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:l,children:[o.jsx(Qe,{size:14}),"Add"]})]}),i.state_keys.length===0?o.jsx("p",{className:"empty-message",children:"No state keys. Auto-created when you add LlmAgents."}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:i.state_keys.map((y,N)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"6px 8px",background:"var(--bg-secondary)",borderRadius:4},children:[o.jsx("input",{type:"text",value:y.name,onChange:V=>c(N,{name:V.target.value}),placeholder:"Key name",style:{flex:1,minWidth:0,padding:"4px 8px",fontSize:12}}),o.jsxs("select",{value:y.type,onChange:V=>c(N,{type:V.target.value}),style:{width:60,flexShrink:0,padding:"4px 6px",fontSize:11},children:[o.jsx("option",{value:"string",children:"str"}),o.jsx("option",{value:"number",children:"num"}),o.jsx("option",{value:"boolean",children:"bool"}),o.jsx("option",{value:"object",children:"obj"}),o.jsx("option",{value:"array",children:"arr"})]}),o.jsx("button",{className:"delete-item",onClick:()=>u(N),style:{padding:4,flexShrink:0},children:o.jsx(Ue,{size:12})})]},N))})]}),o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(sp,{size:20}),"Advanced Options"]})}),o.jsxs("div",{className:"toggle-group",children:[o.jsx("div",{className:`toggle ${i.compaction.enabled?"active":""}`,onClick:()=>s({compaction:{...i.compaction,enabled:!i.compaction.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Event Compaction"}),o.jsx("span",{children:"Summarize old events"})]}),i.compaction.enabled&&o.jsx("input",{type:"number",value:i.compaction.max_events,onChange:y=>s({compaction:{...i.compaction,max_events:parseInt(y.target.value)||100}}),style:{width:60,padding:"4px 6px",fontSize:12},placeholder:"Max"})]}),o.jsxs("div",{className:"toggle-group",style:{marginTop:10},children:[o.jsx("div",{className:`toggle ${i.context_cache.enabled?"active":""}`,onClick:()=>s({context_cache:{...i.context_cache,enabled:!i.context_cache.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Context Caching"}),o.jsx("span",{children:"Cache static instructions"})]}),i.context_cache.enabled&&o.jsx("input",{type:"number",value:i.context_cache.ttl_seconds,onChange:y=>s({context_cache:{...i.context_cache,ttl_seconds:parseInt(y.target.value)||3600}}),style:{width:70,padding:"4px 6px",fontSize:12},placeholder:"TTL"})]}),o.jsxs("div",{className:"toggle-group",style:{marginTop:10},children:[o.jsx("div",{className:`toggle ${i.resumability.enabled?"active":""}`,onClick:()=>s({resumability:{...i.resumability,enabled:!i.resumability.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Resumability"}),o.jsx("span",{children:"Pause/resume execution"})]})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(Zt,{size:20}),"Plugins"]}),o.jsx("div",{className:"plugin-add-dropdown",children:o.jsxs("select",{className:"btn btn-secondary btn-sm",value:"",onChange:y=>{y.target.value&&(d(y.target.value),y.target.value="")},style:{paddingRight:8},children:[o.jsx("option",{value:"",children:"+ Add Plugin..."}),o.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),o.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),o.jsx("option",{value:"LoggingPlugin",children:"Logging"}),o.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),o.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),o.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]})})]}),i.plugins.length===0?o.jsx("p",{className:"empty-message",children:"No plugins configured. Add plugins to extend agent functionality."}):i.plugins.map((y,N)=>o.jsxs("div",{className:"list-item",style:{flexDirection:"column",gap:12},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",gap:12},children:[o.jsxs("select",{value:y.type,onChange:V=>p(N,{type:V.target.value}),style:{flex:1},children:[o.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),o.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),o.jsx("option",{value:"LoggingPlugin",children:"Logging"}),o.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),o.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),o.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]}),o.jsx("button",{className:"delete-item",onClick:()=>f(N),children:o.jsx(Ue,{size:16})})]}),y.type==="ReflectAndRetryToolPlugin"&&o.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",style:{flex:0},children:[o.jsx("label",{style:{fontSize:12},children:"Max Retries"}),o.jsx("input",{type:"number",min:"0",max:"10",value:y.max_retries??3,onChange:V=>p(N,{max_retries:parseInt(V.target.value)||0}),style:{width:70}})]}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:y.throw_exception_if_retry_exceeded??!1,onChange:V=>p(N,{throw_exception_if_retry_exceeded:V.target.checked})}),o.jsx("span",{className:"toggle-slider"})]}),"Throw exception if retry exceeded"]})]}),y.type==="ContextFilterPlugin"&&o.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",style:{flex:0},children:[o.jsx("label",{style:{fontSize:12},children:"Invocations to Keep"}),o.jsx("input",{type:"number",min:"1",max:"100",value:y.num_invocations_to_keep??5,onChange:V=>p(N,{num_invocations_to_keep:parseInt(V.target.value)||1}),style:{width:70}})]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Keeps only the last N conversation turns to reduce context size"})]}),y.type==="LoggingPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Logs all agent events (messages, tool calls, responses) to the console"})}),y.type==="GlobalInstructionPlugin"&&o.jsxs("div",{style:{width:"100%",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{style:{fontSize:12},children:"Global Instruction"}),o.jsx("textarea",{value:y.global_instruction??"",onChange:V=>p(N,{global_instruction:V.target.value}),placeholder:"Instructions that apply to all agents in the app...",rows:3,style:{width:"100%"}})]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"This instruction is prepended to every agent's system prompt"})]}),y.type==="SaveFilesAsArtifactsPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Automatically saves files uploaded in user messages as artifacts for later retrieval"})}),y.type==="MultimodalToolResultsPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Allows tools to return multimodal content (images, files) directly to the LLM"})})]},N))]}),o.jsxs("section",{className:"section",children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(Ei,{size:20}),"Sandbox Limits"]})}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:12},children:[o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Run Timeout"}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("input",{type:"number",value:h.run_timeout,onChange:y=>j({run_timeout:parseInt(y.target.value)||3600}),min:60,max:86400,step:60,style:{width:100}}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)"},children:h.run_timeout>=3600?`${Math.floor(h.run_timeout/3600)}h ${Math.floor(h.run_timeout%3600/60)}m`:`${Math.floor(h.run_timeout/60)}m`})]}),o.jsx("p",{className:"field-hint",children:"Max time for agent run (seconds)"})]}),o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Agent Memory"}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("input",{type:"number",value:h.agent_memory_limit_mb,onChange:y=>j({agent_memory_limit_mb:parseInt(y.target.value)||512}),min:128,max:8192,step:128,style:{width:100}}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)"},children:"MB"})]}),o.jsx("p",{className:"field-hint",children:"Memory limit for agent container"})]}),o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Agent CPU"}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("input",{type:"number",value:h.agent_cpu_limit,onChange:y=>j({agent_cpu_limit:parseFloat(y.target.value)||1}),min:.25,max:8,step:.25,style:{width:100}}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)"},children:"cores"})]}),o.jsx("p",{className:"field-hint",children:"CPU limit for agent container"})]})]})]}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20},children:[o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(jv,{size:20}),"Network Allowlist"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:x,children:[o.jsx(Qe,{size:14}),"Add"]})]}),o.jsxs("div",{className:"toggle-group",style:{marginBottom:10},children:[o.jsx("div",{className:`toggle ${h.allow_all_network?"active":""}`,onClick:()=>j({allow_all_network:!h.allow_all_network,unknown_action:h.allow_all_network?h.unknown_action:"allow"})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Allow all network connections"}),o.jsx("span",{children:"Disables approval/deny; still routes through the sandbox proxy"})]})]}),m.length===0?o.jsx("p",{className:"empty-message",style:{fontSize:11},children:"No custom patterns. LLM APIs allowed by default."}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:m.map((y,N)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"6px 8px",background:"var(--bg-secondary)",borderRadius:4},children:[o.jsx(tp,{size:14,style:{color:"var(--text-muted)",flexShrink:0}}),o.jsx("input",{type:"text",value:y.pattern,onChange:V=>v(N,{pattern:V.target.value}),placeholder:"*.example.com",style:{flex:1,padding:"4px 6px",fontSize:11}}),o.jsxs("select",{value:y.pattern_type,onChange:V=>v(N,{pattern_type:V.target.value}),style:{padding:"4px",fontSize:10,width:70},children:[o.jsx("option",{value:"exact",children:"exact"}),o.jsx("option",{value:"wildcard",children:"wild"}),o.jsx("option",{value:"regex",children:"regex"})]}),o.jsx("button",{className:"delete-item",onClick:()=>_(N),style:{padding:4},children:o.jsx(Ue,{size:12})})]},y.id||N))})]}),o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(wj,{size:20}),"Volume Mounts"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:A,children:[o.jsx(Qe,{size:14}),"Add"]})]}),b.length===0?o.jsx("p",{className:"empty-message",style:{fontSize:11},children:"No mounts. Add to give sandbox file access."}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:b.map((y,N)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"6px 8px",background:"var(--bg-secondary)",borderRadius:4},children:[o.jsx(xv,{size:14,style:{color:"var(--text-muted)",flexShrink:0}}),o.jsx("input",{type:"text",value:y.host_path,onChange:V=>S(N,{host_path:V.target.value}),placeholder:"~/path",style:{flex:1,padding:"4px 6px",fontSize:11},title:"Host path"}),o.jsx("span",{style:{color:"var(--text-muted)",fontSize:10},children:"→"}),o.jsx("input",{type:"text",value:y.container_path,onChange:V=>S(N,{container_path:V.target.value}),placeholder:"/mnt",style:{width:70,padding:"4px 6px",fontSize:11},title:"Container path"}),o.jsxs("select",{value:y.mode,onChange:V=>S(N,{mode:V.target.value}),style:{padding:"4px",fontSize:10,width:50},children:[o.jsx("option",{value:"ro",children:"ro"}),o.jsx("option",{value:"rw",children:"rw"})]}),o.jsx("button",{className:"delete-item",onClick:()=>M(N),style:{padding:4},children:o.jsx(Ue,{size:12})})]},N))})]})]})]})}const Dj="modulepreload",Fj=function(e){return"/"+e},$h={},Bj=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=Fj(c),c in $h)return;$h[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":Dj,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((f,h)=>{p.addEventListener("load",f),p.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})};function Dh(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Uj(e){if(Array.isArray(e))return e}function Wj(e,t,n){return(t=Yj(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vj(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,s,a,l=[],c=!0,u=!1;try{if(s=(n=n.call(e)).next,t!==0)for(;!(c=(r=s.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(d){u=!0,i=d}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function Hj(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Bh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Fh(Object(n),!0).forEach(function(r){Wj(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function qj(e,t){if(e==null)return{};var n,r,i=Jj(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Jj(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Kj(e,t){return Uj(e)||Vj(e,t)||Qj(e,t)||Hj()}function Gj(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Yj(e){var t=Gj(e,"string");return typeof t=="symbol"?t:t+""}function Qj(e,t){if(e){if(typeof e=="string")return Dh(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Dh(e,t):void 0}}function Xj(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Uh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Wh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Uh(Object(n),!0).forEach(function(r){Xj(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Uh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Zj(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,s){return s(i)},r)}}function ao(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function Ua(e){return{}.toString.call(e).includes("Object")}function e2(e){return!Object.keys(e).length}function Ho(e){return typeof e=="function"}function t2(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function n2(e,t){return Ua(t)||dr("changeType"),Object.keys(t).some(function(n){return!t2(e,n)})&&dr("changeField"),t}function r2(e){Ho(e)||dr("selectorType")}function i2(e){Ho(e)||Ua(e)||dr("handlerType"),Ua(e)&&Object.values(e).some(function(t){return!Ho(t)})&&dr("handlersType")}function o2(e){e||dr("initialIsRequired"),Ua(e)||dr("initialType"),e2(e)&&dr("initialContent")}function s2(e,t){throw new Error(e[t]||e.default)}var a2={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},dr=ao(s2)(a2),Rs={changes:n2,selector:r2,handler:i2,initial:o2};function l2(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Rs.initial(e),Rs.handler(t);var n={current:e},r=ao(d2)(n,t),i=ao(u2)(n),s=ao(Rs.changes)(e),a=ao(c2)(n);function l(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return Rs.selector(u),u(n.current)}function c(u){Zj(r,i,s,a)(u)}return[l,c]}function c2(e,t){return Ho(t)?t(e.current):t}function u2(e,t){return e.current=Wh(Wh({},e.current),t),t}function d2(e,t,n){return Ho(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var p2={create:l2},f2={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function h2(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function m2(e){return{}.toString.call(e).includes("Object")}function g2(e){return e||Vh("configIsRequired"),m2(e)||Vh("configType"),e.urls?(x2(),{paths:{vs:e.urls.monacoBase}}):e}function x2(){console.warn(Nv.deprecation)}function y2(e,t){throw new Error(e[t]||e.default)}var Nv={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Vh=h2(y2)(Nv),v2={config:g2},b2=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(s,a){return a(s)},i)}};function Ev(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],Ev(e[n],t[n]))}),Bh(Bh({},e),t)}var w2={type:"cancelation",msg:"operation is manually canceled"};function cc(e){var t=!1,n=new Promise(function(r,i){e.then(function(s){return t?i(w2):r(s)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var k2=["monaco"],j2=p2.create({config:f2,isInitialized:!1,resolve:null,reject:null,monaco:null}),zv=Kj(j2,2),as=zv[0],vl=zv[1];function _2(e){var t=v2.config(e),n=t.monaco,r=qj(t,k2);vl(function(i){return{config:Ev(i.config,r),monaco:n}})}function S2(){var e=as(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(vl({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),cc(uc);if(window.monaco&&window.monaco.editor)return Tv(window.monaco),e.resolve(window.monaco),cc(uc);b2(C2,E2)(z2)}return cc(uc)}function C2(e){return document.body.appendChild(e)}function N2(e){var t=document.createElement("script");return e&&(t.src=e),t}function E2(e){var t=as(function(r){var i=r.config,s=r.reject;return{config:i,reject:s}}),n=N2("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function z2(){var e=as(function(n){var r=n.config,i=n.resolve,s=n.reject;return{config:r,resolve:i,reject:s}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;Tv(r),e.resolve(r)},function(n){e.reject(n)})}function Tv(e){as().monaco||vl({monaco:e})}function T2(){return as(function(e){var t=e.monaco;return t})}var uc=new Promise(function(e,t){return vl({resolve:e,reject:t})}),Av={config:_2,init:S2,__getMonacoInstance:T2},A2={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},dc=A2,P2={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},M2=P2;function L2({children:e}){return Wt.createElement("div",{style:M2.container},e)}var R2=L2,I2=R2;function O2({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:s,wrapperProps:a}){return Wt.createElement("section",{style:{...dc.wrapper,width:e,height:t},...a},!n&&Wt.createElement(I2,null,r),Wt.createElement("div",{ref:i,style:{...dc.fullWidth,...!n&&dc.hide},className:s}))}var $2=O2,Pv=k.memo($2);function D2(e){k.useEffect(e,[])}var Mv=D2;function F2(e,t,n=!0){let r=k.useRef(!0);k.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var Ft=F2;function wo(){}function li(e,t,n,r){return B2(e,r)||U2(e,t,n,r)}function B2(e,t){return e.editor.getModel(Lv(e,t))}function U2(e,t,n,r){return e.editor.createModel(t,n,r?Lv(e,r):void 0)}function Lv(e,t){return e.Uri.parse(t)}function W2({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:s,modifiedModelPath:a,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:c=!1,theme:u="light",loading:d="Loading...",options:p={},height:f="100%",width:h="100%",className:m,wrapperProps:b={},beforeMount:j=wo,onMount:g=wo}){let[x,v]=k.useState(!1),[_,A]=k.useState(!0),S=k.useRef(null),M=k.useRef(null),E=k.useRef(null),U=k.useRef(g),z=k.useRef(j),$=k.useRef(!1);Mv(()=>{let P=Av.init();return P.then(D=>(M.current=D)&&A(!1)).catch(D=>(D==null?void 0:D.type)!=="cancelation"&&console.error("Monaco initialization: error:",D)),()=>S.current?T():P.cancel()}),Ft(()=>{if(S.current&&M.current){let P=S.current.getOriginalEditor(),D=li(M.current,e||"",r||n||"text",s||"");D!==P.getModel()&&P.setModel(D)}},[s],x),Ft(()=>{if(S.current&&M.current){let P=S.current.getModifiedEditor(),D=li(M.current,t||"",i||n||"text",a||"");D!==P.getModel()&&P.setModel(D)}},[a],x),Ft(()=>{let P=S.current.getModifiedEditor();P.getOption(M.current.editor.EditorOption.readOnly)?P.setValue(t||""):t!==P.getValue()&&(P.executeEdits("",[{range:P.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),P.pushUndoStop())},[t],x),Ft(()=>{var P,D;(D=(P=S.current)==null?void 0:P.getModel())==null||D.original.setValue(e||"")},[e],x),Ft(()=>{let{original:P,modified:D}=S.current.getModel();M.current.editor.setModelLanguage(P,r||n||"text"),M.current.editor.setModelLanguage(D,i||n||"text")},[n,r,i],x),Ft(()=>{var P;(P=M.current)==null||P.editor.setTheme(u)},[u],x),Ft(()=>{var P;(P=S.current)==null||P.updateOptions(p)},[p],x);let q=k.useCallback(()=>{var C;if(!M.current)return;z.current(M.current);let P=li(M.current,e||"",r||n||"text",s||""),D=li(M.current,t||"",i||n||"text",a||"");(C=S.current)==null||C.setModel({original:P,modified:D})},[n,t,i,e,r,s,a]),Y=k.useCallback(()=>{var P;!$.current&&E.current&&(S.current=M.current.editor.createDiffEditor(E.current,{automaticLayout:!0,...p}),q(),(P=M.current)==null||P.editor.setTheme(u),v(!0),$.current=!0)},[p,u,q]);k.useEffect(()=>{x&&U.current(S.current,M.current)},[x]),k.useEffect(()=>{!_&&!x&&Y()},[_,x,Y]);function T(){var D,C,L,R;let P=(D=S.current)==null?void 0:D.getModel();l||((C=P==null?void 0:P.original)==null||C.dispose()),c||((L=P==null?void 0:P.modified)==null||L.dispose()),(R=S.current)==null||R.dispose()}return Wt.createElement(Pv,{width:h,height:f,isEditorReady:x,loading:d,_ref:E,className:m,wrapperProps:b})}var V2=W2;k.memo(V2);function H2(e){let t=k.useRef();return k.useEffect(()=>{t.current=e},[e]),t.current}var q2=H2,Is=new Map;function J2({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:s,theme:a="light",line:l,loading:c="Loading...",options:u={},overrideServices:d={},saveViewState:p=!0,keepCurrentModel:f=!1,width:h="100%",height:m="100%",className:b,wrapperProps:j={},beforeMount:g=wo,onMount:x=wo,onChange:v,onValidate:_=wo}){let[A,S]=k.useState(!1),[M,E]=k.useState(!0),U=k.useRef(null),z=k.useRef(null),$=k.useRef(null),q=k.useRef(x),Y=k.useRef(g),T=k.useRef(),P=k.useRef(r),D=q2(s),C=k.useRef(!1),L=k.useRef(!1);Mv(()=>{let W=Av.init();return W.then(K=>(U.current=K)&&E(!1)).catch(K=>(K==null?void 0:K.type)!=="cancelation"&&console.error("Monaco initialization: error:",K)),()=>z.current?w():W.cancel()}),Ft(()=>{var K,y,N,V;let W=li(U.current,e||r||"",t||i||"",s||n||"");W!==((K=z.current)==null?void 0:K.getModel())&&(p&&Is.set(D,(y=z.current)==null?void 0:y.saveViewState()),(N=z.current)==null||N.setModel(W),p&&((V=z.current)==null||V.restoreViewState(Is.get(s))))},[s],A),Ft(()=>{var W;(W=z.current)==null||W.updateOptions(u)},[u],A),Ft(()=>{!z.current||r===void 0||(z.current.getOption(U.current.editor.EditorOption.readOnly)?z.current.setValue(r):r!==z.current.getValue()&&(L.current=!0,z.current.executeEdits("",[{range:z.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),z.current.pushUndoStop(),L.current=!1))},[r],A),Ft(()=>{var K,y;let W=(K=z.current)==null?void 0:K.getModel();W&&i&&((y=U.current)==null||y.editor.setModelLanguage(W,i))},[i],A),Ft(()=>{var W;l!==void 0&&((W=z.current)==null||W.revealLine(l))},[l],A),Ft(()=>{var W;(W=U.current)==null||W.editor.setTheme(a)},[a],A);let R=k.useCallback(()=>{var W;if(!(!$.current||!U.current)&&!C.current){Y.current(U.current);let K=s||n,y=li(U.current,r||e||"",t||i||"",K||"");z.current=(W=U.current)==null?void 0:W.editor.create($.current,{model:y,automaticLayout:!0,...u},d),p&&z.current.restoreViewState(Is.get(K)),U.current.editor.setTheme(a),l!==void 0&&z.current.revealLine(l),S(!0),C.current=!0}},[e,t,n,r,i,s,u,d,p,a,l]);k.useEffect(()=>{A&&q.current(z.current,U.current)},[A]),k.useEffect(()=>{!M&&!A&&R()},[M,A,R]),P.current=r,k.useEffect(()=>{var W,K;A&&v&&((W=T.current)==null||W.dispose(),T.current=(K=z.current)==null?void 0:K.onDidChangeModelContent(y=>{L.current||v(z.current.getValue(),y)}))},[A,v]),k.useEffect(()=>{if(A){let W=U.current.editor.onDidChangeMarkers(K=>{var N;let y=(N=z.current.getModel())==null?void 0:N.uri;if(y&&K.find(V=>V.path===y.path)){let V=U.current.editor.getModelMarkers({resource:y});_==null||_(V)}});return()=>{W==null||W.dispose()}}return()=>{}},[A,_]);function w(){var W,K;(W=T.current)==null||W.dispose(),f?p&&Is.set(s,z.current.saveViewState()):(K=z.current.getModel())==null||K.dispose(),z.current.dispose()}return Wt.createElement(Pv,{width:h,height:m,isEditorReady:A,loading:c,_ref:$,className:b,wrapperProps:j})}var K2=J2,G2=k.memo(K2),en=G2;function Y2(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const Q2=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,X2=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Z2={};function Hh(e,t){return(Z2.jsx?X2:Q2).test(e)}const e_=/[ \t\n\f\r]/g;function t_(e){return typeof e=="object"?e.type==="text"?qh(e.value):!1:qh(e)}function qh(e){return e.replace(e_,"")===""}class ls{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}ls.prototype.normal={};ls.prototype.property={};ls.prototype.space=void 0;function Rv(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new ls(n,r,t)}function Pu(e){return e.toLowerCase()}class Rt{constructor(t,n){this.attribute=n,this.property=t}}Rt.prototype.attribute="";Rt.prototype.booleanish=!1;Rt.prototype.boolean=!1;Rt.prototype.commaOrSpaceSeparated=!1;Rt.prototype.commaSeparated=!1;Rt.prototype.defined=!1;Rt.prototype.mustUseProperty=!1;Rt.prototype.number=!1;Rt.prototype.overloadedBoolean=!1;Rt.prototype.property="";Rt.prototype.spaceSeparated=!1;Rt.prototype.space=void 0;let n_=0;const Se=Vr(),Ye=Vr(),Mu=Vr(),de=Vr(),Ie=Vr(),mi=Vr(),$t=Vr();function Vr(){return 2**++n_}const Lu=Object.freeze(Object.defineProperty({__proto__:null,boolean:Se,booleanish:Ye,commaOrSpaceSeparated:$t,commaSeparated:mi,number:de,overloadedBoolean:Mu,spaceSeparated:Ie},Symbol.toStringTag,{value:"Module"})),pc=Object.keys(Lu);class ap extends Rt{constructor(t,n,r,i){let s=-1;if(super(t,n),Jh(this,"space",i),typeof r=="number")for(;++s<pc.length;){const a=pc[s];Jh(this,pc[s],(r&Lu[a])===Lu[a])}}}ap.prototype.defined=!0;function Jh(e,t,n){n&&(e[t]=n)}function Ii(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const s=new ap(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(s.mustUseProperty=!0),t[r]=s,n[Pu(r)]=r,n[Pu(s.attribute)]=r}return new ls(t,n,e.space)}const Iv=Ii({properties:{ariaActiveDescendant:null,ariaAtomic:Ye,ariaAutoComplete:null,ariaBusy:Ye,ariaChecked:Ye,ariaColCount:de,ariaColIndex:de,ariaColSpan:de,ariaControls:Ie,ariaCurrent:null,ariaDescribedBy:Ie,ariaDetails:null,ariaDisabled:Ye,ariaDropEffect:Ie,ariaErrorMessage:null,ariaExpanded:Ye,ariaFlowTo:Ie,ariaGrabbed:Ye,ariaHasPopup:null,ariaHidden:Ye,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ie,ariaLevel:de,ariaLive:null,ariaModal:Ye,ariaMultiLine:Ye,ariaMultiSelectable:Ye,ariaOrientation:null,ariaOwns:Ie,ariaPlaceholder:null,ariaPosInSet:de,ariaPressed:Ye,ariaReadOnly:Ye,ariaRelevant:null,ariaRequired:Ye,ariaRoleDescription:Ie,ariaRowCount:de,ariaRowIndex:de,ariaRowSpan:de,ariaSelected:Ye,ariaSetSize:de,ariaSort:null,ariaValueMax:de,ariaValueMin:de,ariaValueNow:de,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function Ov(e,t){return t in e?e[t]:t}function $v(e,t){return Ov(e,t.toLowerCase())}const r_=Ii({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:mi,acceptCharset:Ie,accessKey:Ie,action:null,allow:null,allowFullScreen:Se,allowPaymentRequest:Se,allowUserMedia:Se,alt:null,as:null,async:Se,autoCapitalize:null,autoComplete:Ie,autoFocus:Se,autoPlay:Se,blocking:Ie,capture:null,charSet:null,checked:Se,cite:null,className:Ie,cols:de,colSpan:null,content:null,contentEditable:Ye,controls:Se,controlsList:Ie,coords:de|mi,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Se,defer:Se,dir:null,dirName:null,disabled:Se,download:Mu,draggable:Ye,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Se,formTarget:null,headers:Ie,height:de,hidden:Mu,high:de,href:null,hrefLang:null,htmlFor:Ie,httpEquiv:Ie,id:null,imageSizes:null,imageSrcSet:null,inert:Se,inputMode:null,integrity:null,is:null,isMap:Se,itemId:null,itemProp:Ie,itemRef:Ie,itemScope:Se,itemType:Ie,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Se,low:de,manifest:null,max:null,maxLength:de,media:null,method:null,min:null,minLength:de,multiple:Se,muted:Se,name:null,nonce:null,noModule:Se,noValidate:Se,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Se,optimum:de,pattern:null,ping:Ie,placeholder:null,playsInline:Se,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Se,referrerPolicy:null,rel:Ie,required:Se,reversed:Se,rows:de,rowSpan:de,sandbox:Ie,scope:null,scoped:Se,seamless:Se,selected:Se,shadowRootClonable:Se,shadowRootDelegatesFocus:Se,shadowRootMode:null,shape:null,size:de,sizes:null,slot:null,span:de,spellCheck:Ye,src:null,srcDoc:null,srcLang:null,srcSet:null,start:de,step:null,style:null,tabIndex:de,target:null,title:null,translate:null,type:null,typeMustMatch:Se,useMap:null,value:Ye,width:de,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Ie,axis:null,background:null,bgColor:null,border:de,borderColor:null,bottomMargin:de,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Se,declare:Se,event:null,face:null,frame:null,frameBorder:null,hSpace:de,leftMargin:de,link:null,longDesc:null,lowSrc:null,marginHeight:de,marginWidth:de,noResize:Se,noHref:Se,noShade:Se,noWrap:Se,object:null,profile:null,prompt:null,rev:null,rightMargin:de,rules:null,scheme:null,scrolling:Ye,standby:null,summary:null,text:null,topMargin:de,valueType:null,version:null,vAlign:null,vLink:null,vSpace:de,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Se,disableRemotePlayback:Se,prefix:null,property:null,results:de,security:null,unselectable:null},space:"html",transform:$v}),i_=Ii({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:$t,accentHeight:de,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:de,amplitude:de,arabicForm:null,ascent:de,attributeName:null,attributeType:null,azimuth:de,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:de,by:null,calcMode:null,capHeight:de,className:Ie,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:de,diffuseConstant:de,direction:null,display:null,dur:null,divisor:de,dominantBaseline:null,download:Se,dx:null,dy:null,edgeMode:null,editable:null,elevation:de,enableBackground:null,end:null,event:null,exponent:de,externalResourcesRequired:null,fill:null,fillOpacity:de,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:mi,g2:mi,glyphName:mi,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:de,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:de,horizOriginX:de,horizOriginY:de,id:null,ideographic:de,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:de,k:de,k1:de,k2:de,k3:de,k4:de,kernelMatrix:$t,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:de,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:de,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:de,overlineThickness:de,paintOrder:null,panose1:null,path:null,pathLength:de,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Ie,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:de,pointsAtY:de,pointsAtZ:de,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:$t,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:$t,rev:$t,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:$t,requiredFeatures:$t,requiredFonts:$t,requiredFormats:$t,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:de,specularExponent:de,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:de,strikethroughThickness:de,string:null,stroke:null,strokeDashArray:$t,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:de,strokeOpacity:de,strokeWidth:null,style:null,surfaceScale:de,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:$t,tabIndex:de,tableValues:null,target:null,targetX:de,targetY:de,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:$t,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:de,underlineThickness:de,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:de,values:null,vAlphabetic:de,vMathematical:de,vectorEffect:null,vHanging:de,vIdeographic:de,version:null,vertAdvY:de,vertOriginX:de,vertOriginY:de,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:de,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Ov}),Dv=Ii({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),Fv=Ii({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:$v}),Bv=Ii({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),o_={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},s_=/[A-Z]/g,Kh=/-[a-z]/g,a_=/^data[-\w.:]+$/i;function l_(e,t){const n=Pu(t);let r=t,i=Rt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&a_.test(t)){if(t.charAt(4)==="-"){const s=t.slice(5).replace(Kh,u_);r="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=t.slice(4);if(!Kh.test(s)){let a=s.replace(s_,c_);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a}}i=ap}return new i(r,t)}function c_(e){return"-"+e.toLowerCase()}function u_(e){return e.charAt(1).toUpperCase()}const d_=Rv([Iv,r_,Dv,Fv,Bv],"html"),lp=Rv([Iv,i_,Dv,Fv,Bv],"svg");function p_(e){return e.join(" ").trim()}var cp={},Gh=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,f_=/\n/g,h_=/^\s*/,m_=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,g_=/^:\s*/,x_=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,y_=/^[;\s]*/,v_=/^\s+|\s+$/g,b_=`
`,Yh="/",Qh="*",jr="",w_="comment",k_="declaration";function j_(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(m){var b=m.match(f_);b&&(n+=b.length);var j=m.lastIndexOf(b_);r=~j?m.length-j:r+m.length}function s(){var m={line:n,column:r};return function(b){return b.position=new a(m),u(),b}}function a(m){this.start=m,this.end={line:n,column:r},this.source=t.source}a.prototype.content=e;function l(m){var b=new Error(t.source+":"+n+":"+r+": "+m);if(b.reason=m,b.filename=t.source,b.line=n,b.column=r,b.source=e,!t.silent)throw b}function c(m){var b=m.exec(e);if(b){var j=b[0];return i(j),e=e.slice(j.length),b}}function u(){c(h_)}function d(m){var b;for(m=m||[];b=p();)b!==!1&&m.push(b);return m}function p(){var m=s();if(!(Yh!=e.charAt(0)||Qh!=e.charAt(1))){for(var b=2;jr!=e.charAt(b)&&(Qh!=e.charAt(b)||Yh!=e.charAt(b+1));)++b;if(b+=2,jr===e.charAt(b-1))return l("End of comment missing");var j=e.slice(2,b-2);return r+=2,i(j),e=e.slice(b),r+=2,m({type:w_,comment:j})}}function f(){var m=s(),b=c(m_);if(b){if(p(),!c(g_))return l("property missing ':'");var j=c(x_),g=m({type:k_,property:Xh(b[0].replace(Gh,jr)),value:j?Xh(j[0].replace(Gh,jr)):jr});return c(y_),g}}function h(){var m=[];d(m);for(var b;b=f();)b!==!1&&(m.push(b),d(m));return m}return u(),h()}function Xh(e){return e?e.replace(v_,jr):jr}var __=j_,S_=fa&&fa.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(cp,"__esModule",{value:!0});cp.default=N_;const C_=S_(__);function N_(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,C_.default)(e),i=typeof t=="function";return r.forEach(s=>{if(s.type!=="declaration")return;const{property:a,value:l}=s;i?t(a,l,s):l&&(n=n||{},n[a]=l)}),n}var bl={};Object.defineProperty(bl,"__esModule",{value:!0});bl.camelCase=void 0;var E_=/^--[a-zA-Z0-9_-]+$/,z_=/-([a-z])/g,T_=/^[^-]+$/,A_=/^-(webkit|moz|ms|o|khtml)-/,P_=/^-(ms)-/,M_=function(e){return!e||T_.test(e)||E_.test(e)},L_=function(e,t){return t.toUpperCase()},Zh=function(e,t){return"".concat(t,"-")},R_=function(e,t){return t===void 0&&(t={}),M_(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(P_,Zh):e=e.replace(A_,Zh),e.replace(z_,L_))};bl.camelCase=R_;var I_=fa&&fa.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},O_=I_(cp),$_=bl;function Ru(e,t){var n={};return!e||typeof e!="string"||(0,O_.default)(e,function(r,i){r&&i&&(n[(0,$_.camelCase)(r,t)]=i)}),n}Ru.default=Ru;var D_=Ru;const F_=Za(D_),Uv=Wv("end"),up=Wv("start");function Wv(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function B_(e){const t=up(e),n=Uv(e);if(t&&n)return{start:t,end:n}}function ko(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?em(e.position):"start"in e||"end"in e?em(e):"line"in e||"column"in e?Iu(e):""}function Iu(e){return tm(e&&e.line)+":"+tm(e&&e.column)}function em(e){return Iu(e&&e.start)+"-"+Iu(e&&e.end)}function tm(e){return e&&typeof e=="number"?e:1}class xt extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",s={},a=!1;if(n&&("line"in n&&"column"in n?s={place:n}:"start"in n&&"end"in n?s={place:n}:"type"in n?s={ancestors:[n],place:n.position}:s={...n}),typeof t=="string"?i=t:!s.cause&&t&&(a=!0,i=t.message,s.cause=t),!s.ruleId&&!s.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?s.ruleId=r:(s.source=r.slice(0,c),s.ruleId=r.slice(c+1))}if(!s.place&&s.ancestors&&s.ancestors){const c=s.ancestors[s.ancestors.length-1];c&&(s.place=c.position)}const l=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=ko(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=a&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}xt.prototype.file="";xt.prototype.name="";xt.prototype.reason="";xt.prototype.message="";xt.prototype.stack="";xt.prototype.column=void 0;xt.prototype.line=void 0;xt.prototype.ancestors=void 0;xt.prototype.cause=void 0;xt.prototype.fatal=void 0;xt.prototype.place=void 0;xt.prototype.ruleId=void 0;xt.prototype.source=void 0;const dp={}.hasOwnProperty,U_=new Map,W_=/[A-Z]/g,V_=new Set(["table","tbody","thead","tfoot","tr"]),H_=new Set(["td","th"]),Vv="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function q_(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=eS(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Z_(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?lp:d_,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},s=Hv(i,e,void 0);return s&&typeof s!="string"?s:i.create(e,i.Fragment,{children:s||void 0},void 0)}function Hv(e,t,n){if(t.type==="element")return J_(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return K_(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return Y_(e,t,n);if(t.type==="mdxjsEsm")return G_(e,t);if(t.type==="root")return Q_(e,t,n);if(t.type==="text")return X_(e,t)}function J_(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=lp,e.schema=i),e.ancestors.push(t);const s=Jv(e,t.tagName,!1),a=tS(e,t);let l=fp(e,t);return V_.has(t.tagName)&&(l=l.filter(function(c){return typeof c=="string"?!t_(c):!0})),qv(e,a,s,t),pp(a,l),e.ancestors.pop(),e.schema=r,e.create(t,s,a,n)}function K_(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}qo(e,t.position)}function G_(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);qo(e,t.position)}function Y_(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=lp,e.schema=i),e.ancestors.push(t);const s=t.name===null?e.Fragment:Jv(e,t.name,!0),a=nS(e,t),l=fp(e,t);return qv(e,a,s,t),pp(a,l),e.ancestors.pop(),e.schema=r,e.create(t,s,a,n)}function Q_(e,t,n){const r={};return pp(r,fp(e,t)),e.create(t,e.Fragment,r,n)}function X_(e,t){return t.value}function qv(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function pp(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function Z_(e,t,n){return r;function r(i,s,a,l){const u=Array.isArray(a.children)?n:t;return l?u(s,a,l):u(s,a)}}function eS(e,t){return n;function n(r,i,s,a){const l=Array.isArray(s.children),c=up(r);return t(i,s,a,l,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function tS(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&dp.call(t.properties,i)){const s=rS(e,i,t.properties[i]);if(s){const[a,l]=s;e.tableCellAlignToStyle&&a==="align"&&typeof l=="string"&&H_.has(t.tagName)?r=l:n[a]=l}}if(r){const s=n.style||(n.style={});s[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function nS(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const s=r.data.estree.body[0];s.type;const a=s.expression;a.type;const l=a.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument))}else qo(e,t.position);else{const i=r.name;let s;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const l=r.value.data.estree.body[0];l.type,s=e.evaluater.evaluateExpression(l.expression)}else qo(e,t.position);else s=r.value===null?!0:r.value;n[i]=s}return n}function fp(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:U_;for(;++r<t.children.length;){const s=t.children[r];let a;if(e.passKeys){const c=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(c){const u=i.get(c)||0;a=c+"-"+u,i.set(c,u+1)}}const l=Hv(e,s,a);l!==void 0&&n.push(l)}return n}function rS(e,t,n){const r=l_(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Y2(n):p_(n)),r.property==="style"){let i=typeof n=="object"?n:iS(e,String(n));return e.stylePropertyNameCase==="css"&&(i=oS(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?o_[r.property]||r.property:r.attribute,n]}}function iS(e,t){try{return F_(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new xt("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Vv+"#cannot-parse-style-attribute",i}}function Jv(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let s=-1,a;for(;++s<i.length;){const l=Hh(i[s])?{type:"Identifier",name:i[s]}:{type:"Literal",value:i[s]};a=a?{type:"MemberExpression",object:a,property:l,computed:!!(s&&l.type==="Literal"),optional:!1}:l}r=a}else r=Hh(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return dp.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);qo(e)}function qo(e,t){const n=new xt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Vv+"#cannot-handle-mdx-estrees-without-createevaluater",n}function oS(e){const t={};let n;for(n in e)dp.call(e,n)&&(t[sS(n)]=e[n]);return t}function sS(e){let t=e.replace(W_,aS);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function aS(e){return"-"+e.toLowerCase()}const fc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},lS={};function cS(e,t){const n=lS,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Kv(e,r,i)}function Kv(e,t,n){if(uS(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return nm(e.children,t,n)}return Array.isArray(e)?nm(e,t,n):""}function nm(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Kv(e[i],t,n);return r.join("")}function uS(e){return!!(e&&typeof e=="object")}const rm=document.createElement("i");function hp(e){const t="&"+e+";";rm.innerHTML=t;const n=rm.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Sn(e,t,n,r){const i=e.length;let s=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);s<r.length;)a=r.slice(s,s+1e4),a.unshift(t,0),e.splice(...a),s+=1e4,t+=1e4}function Qt(e,t){return e.length>0?(Sn(e,e.length,0,t),e):t}const im={}.hasOwnProperty;function dS(e){const t={};let n=-1;for(;++n<e.length;)pS(t,e[n]);return t}function pS(e,t){let n;for(n in t){const i=(im.call(e,n)?e[n]:void 0)||(e[n]={}),s=t[n];let a;if(s)for(a in s){im.call(i,a)||(i[a]=[]);const l=s[a];fS(i[a],Array.isArray(l)?l:l?[l]:[])}}}function fS(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Sn(e,0,0,r)}function Gv(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function gi(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const vn=br(/[A-Za-z]/),Ut=br(/[\dA-Za-z]/),hS=br(/[#-'*+\--9=?A-Z^-~]/);function Ou(e){return e!==null&&(e<32||e===127)}const $u=br(/\d/),mS=br(/[\dA-Fa-f]/),gS=br(/[!-/:-@[-`{-~]/);function ke(e){return e!==null&&e<-2}function Lt(e){return e!==null&&(e<0||e===32)}function Me(e){return e===-2||e===-1||e===32}const xS=br(new RegExp("\\p{P}|\\p{S}","u")),yS=br(/\s/);function br(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Oi(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const s=e.charCodeAt(n);let a="";if(s===37&&Ut(e.charCodeAt(n+1))&&Ut(e.charCodeAt(n+2)))i=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(a=String.fromCharCode(s));else if(s>55295&&s<57344){const l=e.charCodeAt(n+1);s<56320&&l>56319&&l<57344?(a=String.fromCharCode(s,l),i=1):a="�"}else a=String.fromCharCode(s);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function $e(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let s=0;return a;function a(c){return Me(c)?(e.enter(n),l(c)):t(c)}function l(c){return Me(c)&&s++<i?(e.consume(c),l):(e.exit(n),t(c))}}const vS={tokenize:bS};function bS(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),$e(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),s(l)}function s(l){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,a(l)}function a(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return ke(l)?(e.consume(l),e.exit("chunkText"),s):(e.consume(l),a)}}const wS={tokenize:kS},om={tokenize:jS};function kS(e){const t=this,n=[];let r=0,i,s,a;return l;function l(v){if(r<n.length){const _=n[r];return t.containerState=_[1],e.attempt(_[0].continuation,c,u)(v)}return u(v)}function c(v){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&x();const _=t.events.length;let A=_,S;for(;A--;)if(t.events[A][0]==="exit"&&t.events[A][1].type==="chunkFlow"){S=t.events[A][1].end;break}g(r);let M=_;for(;M<t.events.length;)t.events[M][1].end={...S},M++;return Sn(t.events,A+1,0,t.events.slice(_)),t.events.length=M,u(v)}return l(v)}function u(v){if(r===n.length){if(!i)return f(v);if(i.currentConstruct&&i.currentConstruct.concrete)return m(v);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(om,d,p)(v)}function d(v){return i&&x(),g(r),f(v)}function p(v){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,m(v)}function f(v){return t.containerState={},e.attempt(om,h,m)(v)}function h(v){return r++,n.push([t.currentConstruct,t.containerState]),f(v)}function m(v){if(v===null){i&&x(),g(0),e.consume(v);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:s}),b(v)}function b(v){if(v===null){j(e.exit("chunkFlow"),!0),g(0),e.consume(v);return}return ke(v)?(e.consume(v),j(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(v),b)}function j(v,_){const A=t.sliceStream(v);if(_&&A.push(null),v.previous=s,s&&(s.next=v),s=v,i.defineSkip(v.start),i.write(A),t.parser.lazy[v.start.line]){let S=i.events.length;for(;S--;)if(i.events[S][1].start.offset<a&&(!i.events[S][1].end||i.events[S][1].end.offset>a))return;const M=t.events.length;let E=M,U,z;for(;E--;)if(t.events[E][0]==="exit"&&t.events[E][1].type==="chunkFlow"){if(U){z=t.events[E][1].end;break}U=!0}for(g(r),S=M;S<t.events.length;)t.events[S][1].end={...z},S++;Sn(t.events,E+1,0,t.events.slice(M)),t.events.length=S}}function g(v){let _=n.length;for(;_-- >v;){const A=n[_];t.containerState=A[1],A[0].exit.call(t,e)}n.length=v}function x(){i.write([null]),s=void 0,i=void 0,t.containerState._closeFlow=void 0}}function jS(e,t,n){return $e(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function sm(e){if(e===null||Lt(e)||yS(e))return 1;if(xS(e))return 2}function mp(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const s=e[i].resolveAll;s&&!r.includes(s)&&(t=s(t,n),r.push(s))}return t}const Du={name:"attention",resolveAll:_S,tokenize:SS};function _S(e,t){let n=-1,r,i,s,a,l,c,u,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p={...e[r][1].end},f={...e[n][1].start};am(p,-c),am(f,c),a={type:c>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},l={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},s={type:c>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?"strong":"emphasis",start:{...a.start},end:{...l.end}},e[r][1].end={...a.start},e[n][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=Qt(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=Qt(u,[["enter",i,t],["enter",a,t],["exit",a,t],["enter",s,t]]),u=Qt(u,mp(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=Qt(u,[["exit",s,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,u=Qt(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,Sn(e,r-1,n-r+3,u),n=r+u.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function SS(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=sm(r);let s;return a;function a(c){return s=c,e.enter("attentionSequence"),l(c)}function l(c){if(c===s)return e.consume(c),l;const u=e.exit("attentionSequence"),d=sm(c),p=!d||d===2&&i||n.includes(c),f=!i||i===2&&d||n.includes(r);return u._open=!!(s===42?p:p&&(i||!f)),u._close=!!(s===42?f:f&&(d||!p)),t(c)}}function am(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const CS={name:"autolink",tokenize:NS};function NS(e,t,n){let r=0;return i;function i(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),s}function s(h){return vn(h)?(e.consume(h),a):h===64?n(h):u(h)}function a(h){return h===43||h===45||h===46||Ut(h)?(r=1,l(h)):u(h)}function l(h){return h===58?(e.consume(h),r=0,c):(h===43||h===45||h===46||Ut(h))&&r++<32?(e.consume(h),l):(r=0,u(h))}function c(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):h===null||h===32||h===60||Ou(h)?n(h):(e.consume(h),c)}function u(h){return h===64?(e.consume(h),d):hS(h)?(e.consume(h),u):n(h)}function d(h){return Ut(h)?p(h):n(h)}function p(h){return h===46?(e.consume(h),r=0,d):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):f(h)}function f(h){if((h===45||Ut(h))&&r++<63){const m=h===45?f:p;return e.consume(h),m}return n(h)}}const wl={partial:!0,tokenize:ES};function ES(e,t,n){return r;function r(s){return Me(s)?$e(e,i,"linePrefix")(s):i(s)}function i(s){return s===null||ke(s)?t(s):n(s)}}const Yv={continuation:{tokenize:TS},exit:AS,name:"blockQuote",tokenize:zS};function zS(e,t,n){const r=this;return i;function i(a){if(a===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),s}return n(a)}function s(a){return Me(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function TS(e,t,n){const r=this;return i;function i(a){return Me(a)?$e(e,s,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):s(a)}function s(a){return e.attempt(Yv,t,n)(a)}}function AS(e){e.exit("blockQuote")}const Qv={name:"characterEscape",tokenize:PS};function PS(e,t,n){return r;function r(s){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(s),e.exit("escapeMarker"),i}function i(s){return gS(s)?(e.enter("characterEscapeValue"),e.consume(s),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(s)}}const Xv={name:"characterReference",tokenize:MS};function MS(e,t,n){const r=this;let i=0,s,a;return l;function l(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),c}function c(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),s=31,a=Ut,d(p))}function u(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),s=6,a=mS,d):(e.enter("characterReferenceValue"),s=7,a=$u,d(p))}function d(p){if(p===59&&i){const f=e.exit("characterReferenceValue");return a===Ut&&!hp(r.sliceSerialize(f))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(p)&&i++<s?(e.consume(p),d):n(p)}}const lm={partial:!0,tokenize:RS},cm={concrete:!0,name:"codeFenced",tokenize:LS};function LS(e,t,n){const r=this,i={partial:!0,tokenize:A};let s=0,a=0,l;return c;function c(S){return u(S)}function u(S){const M=r.events[r.events.length-1];return s=M&&M[1].type==="linePrefix"?M[2].sliceSerialize(M[1],!0).length:0,l=S,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(S)}function d(S){return S===l?(a++,e.consume(S),d):a<3?n(S):(e.exit("codeFencedFenceSequence"),Me(S)?$e(e,p,"whitespace")(S):p(S))}function p(S){return S===null||ke(S)?(e.exit("codeFencedFence"),r.interrupt?t(S):e.check(lm,b,_)(S)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(S))}function f(S){return S===null||ke(S)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(S)):Me(S)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),$e(e,h,"whitespace")(S)):S===96&&S===l?n(S):(e.consume(S),f)}function h(S){return S===null||ke(S)?p(S):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),m(S))}function m(S){return S===null||ke(S)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(S)):S===96&&S===l?n(S):(e.consume(S),m)}function b(S){return e.attempt(i,_,j)(S)}function j(S){return e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),g}function g(S){return s>0&&Me(S)?$e(e,x,"linePrefix",s+1)(S):x(S)}function x(S){return S===null||ke(S)?e.check(lm,b,_)(S):(e.enter("codeFlowValue"),v(S))}function v(S){return S===null||ke(S)?(e.exit("codeFlowValue"),x(S)):(e.consume(S),v)}function _(S){return e.exit("codeFenced"),t(S)}function A(S,M,E){let U=0;return z;function z(P){return S.enter("lineEnding"),S.consume(P),S.exit("lineEnding"),$}function $(P){return S.enter("codeFencedFence"),Me(P)?$e(S,q,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(P):q(P)}function q(P){return P===l?(S.enter("codeFencedFenceSequence"),Y(P)):E(P)}function Y(P){return P===l?(U++,S.consume(P),Y):U>=a?(S.exit("codeFencedFenceSequence"),Me(P)?$e(S,T,"whitespace")(P):T(P)):E(P)}function T(P){return P===null||ke(P)?(S.exit("codeFencedFence"),M(P)):E(P)}}}function RS(e,t,n){const r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),s)}function s(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}const hc={name:"codeIndented",tokenize:OS},IS={partial:!0,tokenize:$S};function OS(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),$e(e,s,"linePrefix",5)(u)}function s(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?a(u):n(u)}function a(u){return u===null?c(u):ke(u)?e.attempt(IS,a,c)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||ke(u)?(e.exit("codeFlowValue"),a(u)):(e.consume(u),l)}function c(u){return e.exit("codeIndented"),t(u)}}function $S(e,t,n){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):ke(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):$e(e,s,"linePrefix",5)(a)}function s(a){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):ke(a)?i(a):n(a)}}const DS={name:"codeText",previous:BS,resolve:FS,tokenize:US};function FS(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function BS(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function US(e,t,n){let r=0,i,s;return a;function a(p){return e.enter("codeText"),e.enter("codeTextSequence"),l(p)}function l(p){return p===96?(e.consume(p),r++,l):(e.exit("codeTextSequence"),c(p))}function c(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),c):p===96?(s=e.enter("codeTextSequence"),i=0,d(p)):ke(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),c):(e.enter("codeTextData"),u(p))}function u(p){return p===null||p===32||p===96||ke(p)?(e.exit("codeTextData"),c(p)):(e.consume(p),u)}function d(p){return p===96?(e.consume(p),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(s.type="codeTextData",u(p))}}class WS{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const s=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Qi(this.left,r),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Qi(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),Qi(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);Qi(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Qi(this.left,n.reverse())}}}function Qi(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Zv(e){const t={};let n=-1,r,i,s,a,l,c,u;const d=new WS(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,s=0,s<c.length&&c[s][1].type==="lineEndingBlank"&&(s+=2),s<c.length&&c[s][1].type==="content"))for(;++s<c.length&&c[s][1].type!=="content";)c[s][1].type==="chunkText"&&(c[s][1]._isInFirstContentOfListItem=!0,s++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,VS(d,n)),n=t[n],u=!0);else if(r[1]._container){for(s=n,i=void 0;s--;)if(a=d.get(s),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=s);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},l=d.slice(i,n),l.unshift(r),d.splice(i,n-i+1,l))}}return Sn(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function VS(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const s=[];let a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const l=a.events,c=[],u={};let d,p,f=-1,h=n,m=0,b=0;const j=[b];for(;h;){for(;e.get(++i)[1]!==h;);s.push(i),h._tokenizer||(d=r.sliceStream(h),h.next||d.push(null),p&&a.defineSkip(h.start),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),p=h,h=h.next}for(h=n;++f<l.length;)l[f][0]==="exit"&&l[f-1][0]==="enter"&&l[f][1].type===l[f-1][1].type&&l[f][1].start.line!==l[f][1].end.line&&(b=f+1,j.push(b),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(a.events=[],h?(h._tokenizer=void 0,h.previous=void 0):j.pop(),f=j.length;f--;){const g=l.slice(j[f],j[f+1]),x=s.pop();c.push([x,x+g.length-1]),e.splice(x,2,g)}for(c.reverse(),f=-1;++f<c.length;)u[m+c[f][0]]=m+c[f][1],m+=c[f][1]-c[f][0]-1;return u}const HS={resolve:JS,tokenize:KS},qS={partial:!0,tokenize:GS};function JS(e){return Zv(e),e}function KS(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?s(l):ke(l)?e.check(qS,a,s)(l):(e.consume(l),i)}function s(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function a(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function GS(e,t,n){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),$e(e,s,"linePrefix")}function s(a){if(a===null||ke(a))return n(a);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function e1(e,t,n,r,i,s,a,l,c){const u=c||Number.POSITIVE_INFINITY;let d=0;return p;function p(g){return g===60?(e.enter(r),e.enter(i),e.enter(s),e.consume(g),e.exit(s),f):g===null||g===32||g===41||Ou(g)?n(g):(e.enter(r),e.enter(a),e.enter(l),e.enter("chunkString",{contentType:"string"}),b(g))}function f(g){return g===62?(e.enter(s),e.consume(g),e.exit(s),e.exit(i),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),h(g))}function h(g){return g===62?(e.exit("chunkString"),e.exit(l),f(g)):g===null||g===60||ke(g)?n(g):(e.consume(g),g===92?m:h)}function m(g){return g===60||g===62||g===92?(e.consume(g),h):h(g)}function b(g){return!d&&(g===null||g===41||Lt(g))?(e.exit("chunkString"),e.exit(l),e.exit(a),e.exit(r),t(g)):d<u&&g===40?(e.consume(g),d++,b):g===41?(e.consume(g),d--,b):g===null||g===32||g===40||Ou(g)?n(g):(e.consume(g),g===92?j:b)}function j(g){return g===40||g===41||g===92?(e.consume(g),b):b(g)}}function t1(e,t,n,r,i,s){const a=this;let l=0,c;return u;function u(h){return e.enter(r),e.enter(i),e.consume(h),e.exit(i),e.enter(s),d}function d(h){return l>999||h===null||h===91||h===93&&!c||h===94&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?n(h):h===93?(e.exit(s),e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):ke(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),p(h))}function p(h){return h===null||h===91||h===93||ke(h)||l++>999?(e.exit("chunkString"),d(h)):(e.consume(h),c||(c=!Me(h)),h===92?f:p)}function f(h){return h===91||h===92||h===93?(e.consume(h),l++,p):p(h)}}function n1(e,t,n,r,i,s){let a;return l;function l(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),a=f===40?41:f,c):n(f)}function c(f){return f===a?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(s),u(f))}function u(f){return f===a?(e.exit(s),c(a)):f===null?n(f):ke(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),$e(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===a||f===null||ke(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?p:d)}function p(f){return f===a||f===92?(e.consume(f),d):d(f)}}function jo(e,t){let n;return r;function r(i){return ke(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):Me(i)?$e(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const YS={name:"definition",tokenize:XS},QS={partial:!0,tokenize:ZS};function XS(e,t,n){const r=this;let i;return s;function s(h){return e.enter("definition"),a(h)}function a(h){return t1.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function l(h){return i=gi(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),c):n(h)}function c(h){return Lt(h)?jo(e,u)(h):u(h)}function u(h){return e1(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function d(h){return e.attempt(QS,p,p)(h)}function p(h){return Me(h)?$e(e,f,"whitespace")(h):f(h)}function f(h){return h===null||ke(h)?(e.exit("definition"),r.parser.defined.push(i),t(h)):n(h)}}function ZS(e,t,n){return r;function r(l){return Lt(l)?jo(e,i)(l):n(l)}function i(l){return n1(e,s,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function s(l){return Me(l)?$e(e,a,"whitespace")(l):a(l)}function a(l){return l===null||ke(l)?t(l):n(l)}}const eC={name:"hardBreakEscape",tokenize:tC};function tC(e,t,n){return r;function r(s){return e.enter("hardBreakEscape"),e.consume(s),i}function i(s){return ke(s)?(e.exit("hardBreakEscape"),t(s)):n(s)}}const nC={name:"headingAtx",resolve:rC,tokenize:iC};function rC(e,t){let n=e.length-2,r=3,i,s;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},s={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Sn(e,r,n-r+1,[["enter",i,t],["enter",s,t],["exit",s,t],["exit",i,t]])),e}function iC(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),s(d)}function s(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&r++<6?(e.consume(d),a):d===null||Lt(d)?(e.exit("atxHeadingSequence"),l(d)):n(d)}function l(d){return d===35?(e.enter("atxHeadingSequence"),c(d)):d===null||ke(d)?(e.exit("atxHeading"),t(d)):Me(d)?$e(e,l,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function c(d){return d===35?(e.consume(d),c):(e.exit("atxHeadingSequence"),l(d))}function u(d){return d===null||d===35||Lt(d)?(e.exit("atxHeadingText"),l(d)):(e.consume(d),u)}}const oC=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],um=["pre","script","style","textarea"],sC={concrete:!0,name:"htmlFlow",resolveTo:cC,tokenize:uC},aC={partial:!0,tokenize:pC},lC={partial:!0,tokenize:dC};function cC(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function uC(e,t,n){const r=this;let i,s,a,l,c;return u;function u(y){return d(y)}function d(y){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(y),p}function p(y){return y===33?(e.consume(y),f):y===47?(e.consume(y),s=!0,b):y===63?(e.consume(y),i=3,r.interrupt?t:w):vn(y)?(e.consume(y),a=String.fromCharCode(y),j):n(y)}function f(y){return y===45?(e.consume(y),i=2,h):y===91?(e.consume(y),i=5,l=0,m):vn(y)?(e.consume(y),i=4,r.interrupt?t:w):n(y)}function h(y){return y===45?(e.consume(y),r.interrupt?t:w):n(y)}function m(y){const N="CDATA[";return y===N.charCodeAt(l++)?(e.consume(y),l===N.length?r.interrupt?t:q:m):n(y)}function b(y){return vn(y)?(e.consume(y),a=String.fromCharCode(y),j):n(y)}function j(y){if(y===null||y===47||y===62||Lt(y)){const N=y===47,V=a.toLowerCase();return!N&&!s&&um.includes(V)?(i=1,r.interrupt?t(y):q(y)):oC.includes(a.toLowerCase())?(i=6,N?(e.consume(y),g):r.interrupt?t(y):q(y)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(y):s?x(y):v(y))}return y===45||Ut(y)?(e.consume(y),a+=String.fromCharCode(y),j):n(y)}function g(y){return y===62?(e.consume(y),r.interrupt?t:q):n(y)}function x(y){return Me(y)?(e.consume(y),x):z(y)}function v(y){return y===47?(e.consume(y),z):y===58||y===95||vn(y)?(e.consume(y),_):Me(y)?(e.consume(y),v):z(y)}function _(y){return y===45||y===46||y===58||y===95||Ut(y)?(e.consume(y),_):A(y)}function A(y){return y===61?(e.consume(y),S):Me(y)?(e.consume(y),A):v(y)}function S(y){return y===null||y===60||y===61||y===62||y===96?n(y):y===34||y===39?(e.consume(y),c=y,M):Me(y)?(e.consume(y),S):E(y)}function M(y){return y===c?(e.consume(y),c=null,U):y===null||ke(y)?n(y):(e.consume(y),M)}function E(y){return y===null||y===34||y===39||y===47||y===60||y===61||y===62||y===96||Lt(y)?A(y):(e.consume(y),E)}function U(y){return y===47||y===62||Me(y)?v(y):n(y)}function z(y){return y===62?(e.consume(y),$):n(y)}function $(y){return y===null||ke(y)?q(y):Me(y)?(e.consume(y),$):n(y)}function q(y){return y===45&&i===2?(e.consume(y),D):y===60&&i===1?(e.consume(y),C):y===62&&i===4?(e.consume(y),W):y===63&&i===3?(e.consume(y),w):y===93&&i===5?(e.consume(y),R):ke(y)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(aC,K,Y)(y)):y===null||ke(y)?(e.exit("htmlFlowData"),Y(y)):(e.consume(y),q)}function Y(y){return e.check(lC,T,K)(y)}function T(y){return e.enter("lineEnding"),e.consume(y),e.exit("lineEnding"),P}function P(y){return y===null||ke(y)?Y(y):(e.enter("htmlFlowData"),q(y))}function D(y){return y===45?(e.consume(y),w):q(y)}function C(y){return y===47?(e.consume(y),a="",L):q(y)}function L(y){if(y===62){const N=a.toLowerCase();return um.includes(N)?(e.consume(y),W):q(y)}return vn(y)&&a.length<8?(e.consume(y),a+=String.fromCharCode(y),L):q(y)}function R(y){return y===93?(e.consume(y),w):q(y)}function w(y){return y===62?(e.consume(y),W):y===45&&i===2?(e.consume(y),w):q(y)}function W(y){return y===null||ke(y)?(e.exit("htmlFlowData"),K(y)):(e.consume(y),W)}function K(y){return e.exit("htmlFlow"),t(y)}}function dC(e,t,n){const r=this;return i;function i(a){return ke(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),s):n(a)}function s(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function pC(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(wl,t,n)}}const fC={name:"htmlText",tokenize:hC};function hC(e,t,n){const r=this;let i,s,a;return l;function l(w){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(w),c}function c(w){return w===33?(e.consume(w),u):w===47?(e.consume(w),A):w===63?(e.consume(w),v):vn(w)?(e.consume(w),E):n(w)}function u(w){return w===45?(e.consume(w),d):w===91?(e.consume(w),s=0,m):vn(w)?(e.consume(w),x):n(w)}function d(w){return w===45?(e.consume(w),h):n(w)}function p(w){return w===null?n(w):w===45?(e.consume(w),f):ke(w)?(a=p,C(w)):(e.consume(w),p)}function f(w){return w===45?(e.consume(w),h):p(w)}function h(w){return w===62?D(w):w===45?f(w):p(w)}function m(w){const W="CDATA[";return w===W.charCodeAt(s++)?(e.consume(w),s===W.length?b:m):n(w)}function b(w){return w===null?n(w):w===93?(e.consume(w),j):ke(w)?(a=b,C(w)):(e.consume(w),b)}function j(w){return w===93?(e.consume(w),g):b(w)}function g(w){return w===62?D(w):w===93?(e.consume(w),g):b(w)}function x(w){return w===null||w===62?D(w):ke(w)?(a=x,C(w)):(e.consume(w),x)}function v(w){return w===null?n(w):w===63?(e.consume(w),_):ke(w)?(a=v,C(w)):(e.consume(w),v)}function _(w){return w===62?D(w):v(w)}function A(w){return vn(w)?(e.consume(w),S):n(w)}function S(w){return w===45||Ut(w)?(e.consume(w),S):M(w)}function M(w){return ke(w)?(a=M,C(w)):Me(w)?(e.consume(w),M):D(w)}function E(w){return w===45||Ut(w)?(e.consume(w),E):w===47||w===62||Lt(w)?U(w):n(w)}function U(w){return w===47?(e.consume(w),D):w===58||w===95||vn(w)?(e.consume(w),z):ke(w)?(a=U,C(w)):Me(w)?(e.consume(w),U):D(w)}function z(w){return w===45||w===46||w===58||w===95||Ut(w)?(e.consume(w),z):$(w)}function $(w){return w===61?(e.consume(w),q):ke(w)?(a=$,C(w)):Me(w)?(e.consume(w),$):U(w)}function q(w){return w===null||w===60||w===61||w===62||w===96?n(w):w===34||w===39?(e.consume(w),i=w,Y):ke(w)?(a=q,C(w)):Me(w)?(e.consume(w),q):(e.consume(w),T)}function Y(w){return w===i?(e.consume(w),i=void 0,P):w===null?n(w):ke(w)?(a=Y,C(w)):(e.consume(w),Y)}function T(w){return w===null||w===34||w===39||w===60||w===61||w===96?n(w):w===47||w===62||Lt(w)?U(w):(e.consume(w),T)}function P(w){return w===47||w===62||Lt(w)?U(w):n(w)}function D(w){return w===62?(e.consume(w),e.exit("htmlTextData"),e.exit("htmlText"),t):n(w)}function C(w){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),L}function L(w){return Me(w)?$e(e,R,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(w):R(w)}function R(w){return e.enter("htmlTextData"),a(w)}}const gp={name:"labelEnd",resolveAll:yC,resolveTo:vC,tokenize:bC},mC={tokenize:wC},gC={tokenize:kC},xC={tokenize:jC};function yC(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&Sn(e,0,e.length,n),e}function vC(e,t){let n=e.length,r=0,i,s,a,l;for(;n--;)if(i=e[n][1],s){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(a){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(s=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=n);const c={type:e[s][1].type==="labelLink"?"link":"image",start:{...e[s][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[s][1].start},end:{...e[a][1].end}},d={type:"labelText",start:{...e[s+r+2][1].end},end:{...e[a-2][1].start}};return l=[["enter",c,t],["enter",u,t]],l=Qt(l,e.slice(s+1,s+r+3)),l=Qt(l,[["enter",d,t]]),l=Qt(l,mp(t.parser.constructs.insideSpan.null,e.slice(s+r+4,a-3),t)),l=Qt(l,[["exit",d,t],e[a-2],e[a-1],["exit",u,t]]),l=Qt(l,e.slice(a+1)),l=Qt(l,[["exit",c,t]]),Sn(e,s,e.length,l),e}function bC(e,t,n){const r=this;let i=r.events.length,s,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){s=r.events[i][1];break}return l;function l(f){return s?s._inactive?p(f):(a=r.parser.defined.includes(gi(r.sliceSerialize({start:s.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),c):n(f)}function c(f){return f===40?e.attempt(mC,d,a?d:p)(f):f===91?e.attempt(gC,d,a?u:p)(f):a?d(f):p(f)}function u(f){return e.attempt(xC,d,p)(f)}function d(f){return t(f)}function p(f){return s._balanced=!0,n(f)}}function wC(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),i}function i(p){return Lt(p)?jo(e,s)(p):s(p)}function s(p){return p===41?d(p):e1(e,a,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function a(p){return Lt(p)?jo(e,c)(p):d(p)}function l(p){return n(p)}function c(p){return p===34||p===39||p===40?n1(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function u(p){return Lt(p)?jo(e,d)(p):d(p)}function d(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function kC(e,t,n){const r=this;return i;function i(l){return t1.call(r,e,s,a,"reference","referenceMarker","referenceString")(l)}function s(l){return r.parser.defined.includes(gi(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function a(l){return n(l)}}function jC(e,t,n){return r;function r(s){return e.enter("reference"),e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),i}function i(s){return s===93?(e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),e.exit("reference"),t):n(s)}}const _C={name:"labelStartImage",resolveAll:gp.resolveAll,tokenize:SC};function SC(e,t,n){const r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),s}function s(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),a):n(l)}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const CC={name:"labelStartLink",resolveAll:gp.resolveAll,tokenize:NC};function NC(e,t,n){const r=this;return i;function i(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),s}function s(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const mc={name:"lineEnding",tokenize:EC};function EC(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),$e(e,t,"linePrefix")}}const aa={name:"thematicBreak",tokenize:zC};function zC(e,t,n){let r=0,i;return s;function s(u){return e.enter("thematicBreak"),a(u)}function a(u){return i=u,l(u)}function l(u){return u===i?(e.enter("thematicBreakSequence"),c(u)):r>=3&&(u===null||ke(u))?(e.exit("thematicBreak"),t(u)):n(u)}function c(u){return u===i?(e.consume(u),r++,c):(e.exit("thematicBreakSequence"),Me(u)?$e(e,l,"whitespace")(u):l(u))}}const Ct={continuation:{tokenize:MC},exit:RC,name:"list",tokenize:PC},TC={partial:!0,tokenize:IC},AC={partial:!0,tokenize:LC};function PC(e,t,n){const r=this,i=r.events[r.events.length-1];let s=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return l;function l(h){const m=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(m==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:$u(h)){if(r.containerState.type||(r.containerState.type=m,e.enter(m,{_container:!0})),m==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(aa,n,u)(h):u(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(h)}return n(h)}function c(h){return $u(h)&&++a<10?(e.consume(h),c):(!r.interrupt||a<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),u(h)):n(h)}function u(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(wl,r.interrupt?n:d,e.attempt(TC,f,p))}function d(h){return r.containerState.initialBlankLine=!0,s++,f(h)}function p(h){return Me(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),f):n(h)}function f(h){return r.containerState.size=s+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function MC(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(wl,i,s);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,$e(e,t,"listItemIndent",r.containerState.size+1)(l)}function s(l){return r.containerState.furtherBlankLines||!Me(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(AC,t,a)(l))}function a(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,$e(e,e.attempt(Ct,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function LC(e,t,n){const r=this;return $e(e,i,"listItemIndent",r.containerState.size+1);function i(s){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(s):n(s)}}function RC(e){e.exit(this.containerState.type)}function IC(e,t,n){const r=this;return $e(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(s){const a=r.events[r.events.length-1];return!Me(s)&&a&&a[1].type==="listItemPrefixWhitespace"?t(s):n(s)}}const dm={name:"setextUnderline",resolveTo:OC,tokenize:$C};function OC(e,t){let n=e.length,r,i,s;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!s&&e[n][1].type==="definition"&&(s=n);const a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",s?(e.splice(i,0,["enter",a,t]),e.splice(s+1,0,["exit",e[r][1],t]),e[r][1].end={...e[s][1].end}):e[r][1]=a,e.push(["exit",a,t]),e}function $C(e,t,n){const r=this;let i;return s;function s(u){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),i=u,a(u)):n(u)}function a(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===i?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),Me(u)?$e(e,c,"lineSuffix")(u):c(u))}function c(u){return u===null||ke(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const DC={tokenize:FC};function FC(e){const t=this,n=e.attempt(wl,r,e.attempt(this.parser.constructs.flowInitial,i,$e(e,e.attempt(this.parser.constructs.flow,i,e.attempt(HS,i)),"linePrefix")));return n;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEndingBlank"),e.consume(s),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const BC={resolveAll:i1()},UC=r1("string"),WC=r1("text");function r1(e){return{resolveAll:i1(e==="text"?VC:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],s=n.attempt(i,a,l);return a;function a(d){return u(d)?s(d):l(d)}function l(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),c}function c(d){return u(d)?(n.exit("data"),s(d)):(n.consume(d),c)}function u(d){if(d===null)return!0;const p=i[d];let f=-1;if(p)for(;++f<p.length;){const h=p[f];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function i1(e){return t;function t(n,r){let i=-1,s;for(;++i<=n.length;)s===void 0?n[i]&&n[i][1].type==="data"&&(s=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==s+2&&(n[s][1].end=n[i-1][1].end,n.splice(s+2,i-s-2),i=s+2),s=void 0);return e?e(n,r):n}}function VC(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let s=i.length,a=-1,l=0,c;for(;s--;){const u=i[s];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)l++,a--;if(a)break;a=-1}else if(u===-2)c=!0,l++;else if(u!==-1){s++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){const u={type:n===e.length||c||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?a:r.start._bufferIndex+a,_index:r.start._index+s,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const HC={42:Ct,43:Ct,45:Ct,48:Ct,49:Ct,50:Ct,51:Ct,52:Ct,53:Ct,54:Ct,55:Ct,56:Ct,57:Ct,62:Yv},qC={91:YS},JC={[-2]:hc,[-1]:hc,32:hc},KC={35:nC,42:aa,45:[dm,aa],60:sC,61:dm,95:aa,96:cm,126:cm},GC={38:Xv,92:Qv},YC={[-5]:mc,[-4]:mc,[-3]:mc,33:_C,38:Xv,42:Du,60:[CS,fC],91:CC,92:[eC,Qv],93:gp,95:Du,96:DS},QC={null:[Du,BC]},XC={null:[42,95]},ZC={null:[]},eN=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:XC,contentInitial:qC,disable:ZC,document:HC,flow:KC,flowInitial:JC,insideSpan:QC,string:GC,text:YC},Symbol.toStringTag,{value:"Module"}));function tN(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},s=[];let a=[],l=[];const c={attempt:M(A),check:M(S),consume:x,enter:v,exit:_,interrupt:M(S,{interrupt:!0})},u={code:null,containerState:{},defineSkip:b,events:[],now:m,parser:e,previous:null,sliceSerialize:f,sliceStream:h,write:p};let d=t.tokenize.call(u,c);return t.resolveAll&&s.push(t),u;function p($){return a=Qt(a,$),j(),a[a.length-1]!==null?[]:(E(t,0),u.events=mp(s,u.events,u),u.events)}function f($,q){return rN(h($),q)}function h($){return nN(a,$)}function m(){const{_bufferIndex:$,_index:q,line:Y,column:T,offset:P}=r;return{_bufferIndex:$,_index:q,line:Y,column:T,offset:P}}function b($){i[$.line]=$.column,z()}function j(){let $;for(;r._index<a.length;){const q=a[r._index];if(typeof q=="string")for($=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===$&&r._bufferIndex<q.length;)g(q.charCodeAt(r._bufferIndex));else g(q)}}function g($){d=d($)}function x($){ke($)?(r.line++,r.column=1,r.offset+=$===-3?2:1,z()):$!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=$}function v($,q){const Y=q||{};return Y.type=$,Y.start=m(),u.events.push(["enter",Y,u]),l.push(Y),Y}function _($){const q=l.pop();return q.end=m(),u.events.push(["exit",q,u]),q}function A($,q){E($,q.from)}function S($,q){q.restore()}function M($,q){return Y;function Y(T,P,D){let C,L,R,w;return Array.isArray(T)?K(T):"tokenize"in T?K([T]):W(T);function W(re){return fe;function fe(me){const ee=me!==null&&re[me],F=me!==null&&re.null,Q=[...Array.isArray(ee)?ee:ee?[ee]:[],...Array.isArray(F)?F:F?[F]:[]];return K(Q)(me)}}function K(re){return C=re,L=0,re.length===0?D:y(re[L])}function y(re){return fe;function fe(me){return w=U(),R=re,re.partial||(u.currentConstruct=re),re.name&&u.parser.constructs.disable.null.includes(re.name)?V():re.tokenize.call(q?Object.assign(Object.create(u),q):u,c,N,V)(me)}}function N(re){return $(R,w),P}function V(re){return w.restore(),++L<C.length?y(C[L]):D}}}function E($,q){$.resolveAll&&!s.includes($)&&s.push($),$.resolve&&Sn(u.events,q,u.events.length-q,$.resolve(u.events.slice(q),u)),$.resolveTo&&(u.events=$.resolveTo(u.events,u))}function U(){const $=m(),q=u.previous,Y=u.currentConstruct,T=u.events.length,P=Array.from(l);return{from:T,restore:D};function D(){r=$,u.previous=q,u.currentConstruct=Y,u.events.length=T,l=P,z()}}function z(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function nN(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,s=t.end._bufferIndex;let a;if(n===i)a=[e[n].slice(r,s)];else{if(a=e.slice(n,i),r>-1){const l=a[0];typeof l=="string"?a[0]=l.slice(r):a.shift()}s>0&&a.push(e[i].slice(0,s))}return a}function rN(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const s=e[n];let a;if(typeof s=="string")a=s;else switch(s){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(s)}i=s===-2,r.push(a)}return r.join("")}function iN(e){const r={constructs:dS([eN,...(e||{}).extensions||[]]),content:i(vS),defined:[],document:i(wS),flow:i(DC),lazy:{},string:i(UC),text:i(WC)};return r;function i(s){return a;function a(l){return tN(r,s,l)}}}function oN(e){for(;!Zv(e););return e}const pm=/[\0\t\n\r]/g;function sN(){let e=1,t="",n=!0,r;return i;function i(s,a,l){const c=[];let u,d,p,f,h;for(s=t+(typeof s=="string"?s.toString():new TextDecoder(a||void 0).decode(s)),p=0,t="",n&&(s.charCodeAt(0)===65279&&p++,n=void 0);p<s.length;){if(pm.lastIndex=p,u=pm.exec(s),f=u&&u.index!==void 0?u.index:s.length,h=s.charCodeAt(f),!u){t=s.slice(p);break}if(h===10&&p===f&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),p<f&&(c.push(s.slice(p,f)),e+=f-p),h){case 0:{c.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,c.push(-2);e++<d;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}p=f+1}return l&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const aN=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function lN(e){return e.replace(aN,cN)}function cN(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),s=i===120||i===88;return Gv(n.slice(s?2:1),s?16:10)}return hp(n)||e}const o1={}.hasOwnProperty;function uN(e,t,n){return typeof t!="string"&&(n=t,t=void 0),dN(n)(oN(iN(n).document().write(sN()(e,t,!0))))}function dN(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(G),autolinkProtocol:U,autolinkEmail:U,atxHeading:s(le),blockQuote:s(F),characterEscape:U,characterReference:U,codeFenced:s(Q),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:s(Q,a),codeText:s(te,a),codeTextData:U,data:U,codeFlowValue:U,definition:s(O),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:s(ne),hardBreakEscape:s(be),hardBreakTrailing:s(be),htmlFlow:s(ie,a),htmlFlowData:U,htmlText:s(ie,a),htmlTextData:U,image:s(I),label:a,link:s(G),listItem:s(oe),listItemValue:f,listOrdered:s(J,p),listUnordered:s(J),paragraph:s(B),reference:y,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:s(le),strong:s(Z),thematicBreak:s(ge)},exit:{atxHeading:c(),atxHeadingSequence:A,autolink:c(),autolinkEmail:ee,autolinkProtocol:me,blockQuote:c(),characterEscapeValue:z,characterReferenceMarkerHexadecimal:V,characterReferenceMarkerNumeric:V,characterReferenceValue:re,characterReference:fe,codeFenced:c(j),codeFencedFence:b,codeFencedFenceInfo:h,codeFencedFenceMeta:m,codeFlowValue:z,codeIndented:c(g),codeText:c(P),codeTextData:z,data:z,definition:c(),definitionDestinationString:_,definitionLabelString:x,definitionTitleString:v,emphasis:c(),hardBreakEscape:c(q),hardBreakTrailing:c(q),htmlFlow:c(Y),htmlFlowData:z,htmlText:c(T),htmlTextData:z,image:c(C),label:R,labelText:L,lineEnding:$,link:c(D),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:N,resourceDestinationString:w,resourceTitleString:W,resource:K,setextHeading:c(E),setextHeadingLineSequence:M,setextHeadingText:S,strong:c(),thematicBreak:c()}};s1(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(X){let ae={type:"root",children:[]};const we={stack:[ae],tokenStack:[],config:t,enter:l,exit:u,buffer:a,resume:d,data:n},je=[];let _e=-1;for(;++_e<X.length;)if(X[_e][1].type==="listOrdered"||X[_e][1].type==="listUnordered")if(X[_e][0]==="enter")je.push(_e);else{const Ae=je.pop();_e=i(X,Ae,_e)}for(_e=-1;++_e<X.length;){const Ae=t[X[_e][0]];o1.call(Ae,X[_e][1].type)&&Ae[X[_e][1].type].call(Object.assign({sliceSerialize:X[_e][2].sliceSerialize},we),X[_e][1])}if(we.tokenStack.length>0){const Ae=we.tokenStack[we.tokenStack.length-1];(Ae[1]||fm).call(we,void 0,Ae[0])}for(ae.position={start:qn(X.length>0?X[0][1].start:{line:1,column:1,offset:0}),end:qn(X.length>0?X[X.length-2][1].end:{line:1,column:1,offset:0})},_e=-1;++_e<t.transforms.length;)ae=t.transforms[_e](ae)||ae;return ae}function i(X,ae,we){let je=ae-1,_e=-1,Ae=!1,nt,ct,Ne,rt;for(;++je<=we;){const qe=X[je];switch(qe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{qe[0]==="enter"?_e++:_e--,rt=void 0;break}case"lineEndingBlank":{qe[0]==="enter"&&(nt&&!rt&&!_e&&!Ne&&(Ne=je),rt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:rt=void 0}if(!_e&&qe[0]==="enter"&&qe[1].type==="listItemPrefix"||_e===-1&&qe[0]==="exit"&&(qe[1].type==="listUnordered"||qe[1].type==="listOrdered")){if(nt){let Vn=je;for(ct=void 0;Vn--;){const ut=X[Vn];if(ut[1].type==="lineEnding"||ut[1].type==="lineEndingBlank"){if(ut[0]==="exit")continue;ct&&(X[ct][1].type="lineEndingBlank",Ae=!0),ut[1].type="lineEnding",ct=Vn}else if(!(ut[1].type==="linePrefix"||ut[1].type==="blockQuotePrefix"||ut[1].type==="blockQuotePrefixWhitespace"||ut[1].type==="blockQuoteMarker"||ut[1].type==="listItemIndent"))break}Ne&&(!ct||Ne<ct)&&(nt._spread=!0),nt.end=Object.assign({},ct?X[ct][1].start:qe[1].end),X.splice(ct||je,0,["exit",nt,qe[2]]),je++,we++}if(qe[1].type==="listItemPrefix"){const Vn={type:"listItem",_spread:!1,start:Object.assign({},qe[1].start),end:void 0};nt=Vn,X.splice(je,0,["enter",Vn,qe[2]]),je++,we++,Ne=void 0,rt=!0}}}return X[ae][1]._spread=Ae,we}function s(X,ae){return we;function we(je){l.call(this,X(je),je),ae&&ae.call(this,je)}}function a(){this.stack.push({type:"fragment",children:[]})}function l(X,ae,we){this.stack[this.stack.length-1].children.push(X),this.stack.push(X),this.tokenStack.push([ae,we||void 0]),X.position={start:qn(ae.start),end:void 0}}function c(X){return ae;function ae(we){X&&X.call(this,we),u.call(this,we)}}function u(X,ae){const we=this.stack.pop(),je=this.tokenStack.pop();if(je)je[0].type!==X.type&&(ae?ae.call(this,X,je[0]):(je[1]||fm).call(this,X,je[0]));else throw new Error("Cannot close `"+X.type+"` ("+ko({start:X.start,end:X.end})+"): it’s not open");we.position.end=qn(X.end)}function d(){return cS(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function f(X){if(this.data.expectingFirstListItemValue){const ae=this.stack[this.stack.length-2];ae.start=Number.parseInt(this.sliceSerialize(X),10),this.data.expectingFirstListItemValue=void 0}}function h(){const X=this.resume(),ae=this.stack[this.stack.length-1];ae.lang=X}function m(){const X=this.resume(),ae=this.stack[this.stack.length-1];ae.meta=X}function b(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function j(){const X=this.resume(),ae=this.stack[this.stack.length-1];ae.value=X.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function g(){const X=this.resume(),ae=this.stack[this.stack.length-1];ae.value=X.replace(/(\r?\n|\r)$/g,"")}function x(X){const ae=this.resume(),we=this.stack[this.stack.length-1];we.label=ae,we.identifier=gi(this.sliceSerialize(X)).toLowerCase()}function v(){const X=this.resume(),ae=this.stack[this.stack.length-1];ae.title=X}function _(){const X=this.resume(),ae=this.stack[this.stack.length-1];ae.url=X}function A(X){const ae=this.stack[this.stack.length-1];if(!ae.depth){const we=this.sliceSerialize(X).length;ae.depth=we}}function S(){this.data.setextHeadingSlurpLineEnding=!0}function M(X){const ae=this.stack[this.stack.length-1];ae.depth=this.sliceSerialize(X).codePointAt(0)===61?1:2}function E(){this.data.setextHeadingSlurpLineEnding=void 0}function U(X){const we=this.stack[this.stack.length-1].children;let je=we[we.length-1];(!je||je.type!=="text")&&(je=se(),je.position={start:qn(X.start),end:void 0},we.push(je)),this.stack.push(je)}function z(X){const ae=this.stack.pop();ae.value+=this.sliceSerialize(X),ae.position.end=qn(X.end)}function $(X){const ae=this.stack[this.stack.length-1];if(this.data.atHardBreak){const we=ae.children[ae.children.length-1];we.position.end=qn(X.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(ae.type)&&(U.call(this,X),z.call(this,X))}function q(){this.data.atHardBreak=!0}function Y(){const X=this.resume(),ae=this.stack[this.stack.length-1];ae.value=X}function T(){const X=this.resume(),ae=this.stack[this.stack.length-1];ae.value=X}function P(){const X=this.resume(),ae=this.stack[this.stack.length-1];ae.value=X}function D(){const X=this.stack[this.stack.length-1];if(this.data.inReference){const ae=this.data.referenceType||"shortcut";X.type+="Reference",X.referenceType=ae,delete X.url,delete X.title}else delete X.identifier,delete X.label;this.data.referenceType=void 0}function C(){const X=this.stack[this.stack.length-1];if(this.data.inReference){const ae=this.data.referenceType||"shortcut";X.type+="Reference",X.referenceType=ae,delete X.url,delete X.title}else delete X.identifier,delete X.label;this.data.referenceType=void 0}function L(X){const ae=this.sliceSerialize(X),we=this.stack[this.stack.length-2];we.label=lN(ae),we.identifier=gi(ae).toLowerCase()}function R(){const X=this.stack[this.stack.length-1],ae=this.resume(),we=this.stack[this.stack.length-1];if(this.data.inReference=!0,we.type==="link"){const je=X.children;we.children=je}else we.alt=ae}function w(){const X=this.resume(),ae=this.stack[this.stack.length-1];ae.url=X}function W(){const X=this.resume(),ae=this.stack[this.stack.length-1];ae.title=X}function K(){this.data.inReference=void 0}function y(){this.data.referenceType="collapsed"}function N(X){const ae=this.resume(),we=this.stack[this.stack.length-1];we.label=ae,we.identifier=gi(this.sliceSerialize(X)).toLowerCase(),this.data.referenceType="full"}function V(X){this.data.characterReferenceType=X.type}function re(X){const ae=this.sliceSerialize(X),we=this.data.characterReferenceType;let je;we?(je=Gv(ae,we==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):je=hp(ae);const _e=this.stack[this.stack.length-1];_e.value+=je}function fe(X){const ae=this.stack.pop();ae.position.end=qn(X.end)}function me(X){z.call(this,X);const ae=this.stack[this.stack.length-1];ae.url=this.sliceSerialize(X)}function ee(X){z.call(this,X);const ae=this.stack[this.stack.length-1];ae.url="mailto:"+this.sliceSerialize(X)}function F(){return{type:"blockquote",children:[]}}function Q(){return{type:"code",lang:null,meta:null,value:""}}function te(){return{type:"inlineCode",value:""}}function O(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function ne(){return{type:"emphasis",children:[]}}function le(){return{type:"heading",depth:0,children:[]}}function be(){return{type:"break"}}function ie(){return{type:"html",value:""}}function I(){return{type:"image",title:null,url:"",alt:null}}function G(){return{type:"link",title:null,url:"",children:[]}}function J(X){return{type:"list",ordered:X.type==="listOrdered",start:null,spread:X._spread,children:[]}}function oe(X){return{type:"listItem",spread:X._spread,checked:null,children:[]}}function B(){return{type:"paragraph",children:[]}}function Z(){return{type:"strong",children:[]}}function se(){return{type:"text",value:""}}function ge(){return{type:"thematicBreak"}}}function qn(e){return{line:e.line,column:e.column,offset:e.offset}}function s1(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?s1(e,r):pN(e,r)}}function pN(e,t){let n;for(n in t)if(o1.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function fm(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+ko({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+ko({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+ko({start:t.start,end:t.end})+") is still open")}function fN(e){const t=this;t.parser=n;function n(r){return uN(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function hN(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function mN(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function gN(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let s={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(s.data={meta:t.meta}),e.patch(t,s),s=e.applyData(t,s),s={type:"element",tagName:"pre",properties:{},children:[s]},e.patch(t,s),s}function xN(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function yN(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function vN(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Oi(r.toLowerCase()),s=e.footnoteOrder.indexOf(r);let a,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=s+1,l+=1,e.footnoteCounts.set(r,l);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,c);const u={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,u),e.applyData(t,u)}function bN(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function wN(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function a1(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),s=i[0];s&&s.type==="text"?s.value="["+s.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function kN(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return a1(e,t);const i={src:Oi(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,s),e.applyData(t,s)}function jN(e,t){const n={src:Oi(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function _N(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function SN(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return a1(e,t);const i={href:Oi(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,s),e.applyData(t,s)}function CN(e,t){const n={href:Oi(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function NN(e,t,n){const r=e.all(t),i=n?EN(n):l1(t),s={},a=[];if(typeof t.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const d=r[l];(i||l!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?a.push(...d.children):a.push(d)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:s,children:a};return e.patch(t,u),e.applyData(t,u)}function EN(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=l1(n[r])}return t}function l1(e){const t=e.spread;return t??e.children.length>1}function zN(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const s={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,s),e.applyData(t,s)}function TN(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function AN(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function PN(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function MN(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),i.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},l=up(t.children[1]),c=Uv(t.children[t.children.length-1]);l&&c&&(a.position={start:l,end:c}),i.push(a)}const s={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,s),e.applyData(t,s)}function LN(e,t,n){const r=n?n.children:void 0,s=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,l=a?a.length:t.children.length;let c=-1;const u=[];for(;++c<l;){const p=t.children[c],f={},h=a?a[c]:void 0;h&&(f.align=h);let m={type:"element",tagName:s,properties:f,children:[]};p&&(m.children=e.all(p),e.patch(p,m),m=e.applyData(p,m)),u.push(m)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function RN(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const hm=9,mm=32;function IN(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const s=[];for(;r;)s.push(gm(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return s.push(gm(t.slice(i),i>0,!1)),s.join("")}function gm(e,t,n){let r=0,i=e.length;if(t){let s=e.codePointAt(r);for(;s===hm||s===mm;)r++,s=e.codePointAt(r)}if(n){let s=e.codePointAt(i-1);for(;s===hm||s===mm;)i--,s=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function ON(e,t){const n={type:"text",value:IN(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function $N(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const DN={blockquote:hN,break:mN,code:gN,delete:xN,emphasis:yN,footnoteReference:vN,heading:bN,html:wN,imageReference:kN,image:jN,inlineCode:_N,linkReference:SN,link:CN,listItem:NN,list:zN,paragraph:TN,root:AN,strong:PN,table:MN,tableCell:RN,tableRow:LN,text:ON,thematicBreak:$N,toml:Os,yaml:Os,definition:Os,footnoteDefinition:Os};function Os(){}const c1=-1,kl=0,_o=1,Wa=2,xp=3,yp=4,vp=5,bp=6,u1=7,d1=8,xm=typeof self=="object"?self:globalThis,FN=(e,t)=>{const n=(i,s)=>(e.set(s,i),i),r=i=>{if(e.has(i))return e.get(i);const[s,a]=t[i];switch(s){case kl:case c1:return n(a,i);case _o:{const l=n([],i);for(const c of a)l.push(r(c));return l}case Wa:{const l=n({},i);for(const[c,u]of a)l[r(c)]=r(u);return l}case xp:return n(new Date(a),i);case yp:{const{source:l,flags:c}=a;return n(new RegExp(l,c),i)}case vp:{const l=n(new Map,i);for(const[c,u]of a)l.set(r(c),r(u));return l}case bp:{const l=n(new Set,i);for(const c of a)l.add(r(c));return l}case u1:{const{name:l,message:c}=a;return n(new xm[l](c),i)}case d1:return n(BigInt(a),i);case"BigInt":return n(Object(BigInt(a)),i);case"ArrayBuffer":return n(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:l}=new Uint8Array(a);return n(new DataView(l),a)}}return n(new xm[s](a),i)};return r},ym=e=>FN(new Map,e)(0),Jr="",{toString:BN}={},{keys:UN}=Object,Xi=e=>{const t=typeof e;if(t!=="object"||!e)return[kl,t];const n=BN.call(e).slice(8,-1);switch(n){case"Array":return[_o,Jr];case"Object":return[Wa,Jr];case"Date":return[xp,Jr];case"RegExp":return[yp,Jr];case"Map":return[vp,Jr];case"Set":return[bp,Jr];case"DataView":return[_o,n]}return n.includes("Array")?[_o,n]:n.includes("Error")?[u1,n]:[Wa,n]},$s=([e,t])=>e===kl&&(t==="function"||t==="symbol"),WN=(e,t,n,r)=>{const i=(a,l)=>{const c=r.push(a)-1;return n.set(l,c),c},s=a=>{if(n.has(a))return n.get(a);let[l,c]=Xi(a);switch(l){case kl:{let d=a;switch(c){case"bigint":l=d1,d=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);d=null;break;case"undefined":return i([c1],a)}return i([l,d],a)}case _o:{if(c){let f=a;return c==="DataView"?f=new Uint8Array(a.buffer):c==="ArrayBuffer"&&(f=new Uint8Array(a)),i([c,[...f]],a)}const d=[],p=i([l,d],a);for(const f of a)d.push(s(f));return p}case Wa:{if(c)switch(c){case"BigInt":return i([c,a.toString()],a);case"Boolean":case"Number":case"String":return i([c,a.valueOf()],a)}if(t&&"toJSON"in a)return s(a.toJSON());const d=[],p=i([l,d],a);for(const f of UN(a))(e||!$s(Xi(a[f])))&&d.push([s(f),s(a[f])]);return p}case xp:return i([l,a.toISOString()],a);case yp:{const{source:d,flags:p}=a;return i([l,{source:d,flags:p}],a)}case vp:{const d=[],p=i([l,d],a);for(const[f,h]of a)(e||!($s(Xi(f))||$s(Xi(h))))&&d.push([s(f),s(h)]);return p}case bp:{const d=[],p=i([l,d],a);for(const f of a)(e||!$s(Xi(f)))&&d.push(s(f));return p}}const{message:u}=a;return i([l,{name:c,message:u}],a)};return s},vm=(e,{json:t,lossy:n}={})=>{const r=[];return WN(!(t||n),!!t,new Map,r)(e),r},Va=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?ym(vm(e,t)):structuredClone(e):(e,t)=>ym(vm(e,t));function VN(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function HN(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function qN(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||VN,r=e.options.footnoteBackLabel||HN,i=e.options.footnoteLabel||"Footnotes",s=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let c=-1;for(;++c<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[c]);if(!u)continue;const d=e.all(u),p=String(u.identifier).toUpperCase(),f=Oi(p.toLowerCase());let h=0;const m=[],b=e.footnoteCounts.get(p);for(;b!==void 0&&++h<=b;){m.length>0&&m.push({type:"text",value:" "});let x=typeof n=="string"?n:n(c,h);typeof x=="string"&&(x={type:"text",value:x}),m.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,h),className:["data-footnote-backref"]},children:Array.isArray(x)?x:[x]})}const j=d[d.length-1];if(j&&j.type==="element"&&j.tagName==="p"){const x=j.children[j.children.length-1];x&&x.type==="text"?x.value+=" ":j.children.push({type:"text",value:" "}),j.children.push(...m)}else d.push(...m);const g={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(u,g),l.push(g)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...Va(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const p1=function(e){if(e==null)return YN;if(typeof e=="function")return jl(e);if(typeof e=="object")return Array.isArray(e)?JN(e):KN(e);if(typeof e=="string")return GN(e);throw new Error("Expected function, string, or object as test")};function JN(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=p1(e[n]);return jl(r);function r(...i){let s=-1;for(;++s<t.length;)if(t[s].apply(this,i))return!0;return!1}}function KN(e){const t=e;return jl(n);function n(r){const i=r;let s;for(s in e)if(i[s]!==t[s])return!1;return!0}}function GN(e){return jl(t);function t(n){return n&&n.type===e}}function jl(e){return t;function t(n,r,i){return!!(QN(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function YN(){return!0}function QN(e){return e!==null&&typeof e=="object"&&"type"in e}const f1=[],XN=!0,bm=!1,ZN="skip";function e4(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const s=p1(i),a=r?-1:1;l(e,void 0,[])();function l(c,u,d){const p=c&&typeof c=="object"?c:{};if(typeof p.type=="string"){const h=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(c.type+(h?"<"+h+">":""))+")"})}return f;function f(){let h=f1,m,b,j;if((!t||s(c,u,d[d.length-1]||void 0))&&(h=t4(n(c,d)),h[0]===bm))return h;if("children"in c&&c.children){const g=c;if(g.children&&h[0]!==ZN)for(b=(r?g.children.length:-1)+a,j=d.concat(g);b>-1&&b<g.children.length;){const x=g.children[b];if(m=l(x,b,j)(),m[0]===bm)return m;b=typeof m[1]=="number"?m[1]:b+a}}return h}}}function t4(e){return Array.isArray(e)?e:typeof e=="number"?[XN,e]:e==null?f1:[e]}function h1(e,t,n,r){let i,s,a;typeof t=="function"&&typeof n!="function"?(s=void 0,a=t,i=n):(s=t,a=n,i=r),e4(e,s,l,i);function l(c,u){const d=u[u.length-1],p=d?d.children.indexOf(c):void 0;return a(c,p,d)}}const Fu={}.hasOwnProperty,n4={};function r4(e,t){const n=t||n4,r=new Map,i=new Map,s=new Map,a={...DN,...n.handlers},l={all:u,applyData:o4,definitionById:r,footnoteById:i,footnoteCounts:s,footnoteOrder:[],handlers:a,one:c,options:n,patch:i4,wrap:a4};return h1(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:i,f=String(d.identifier).toUpperCase();p.has(f)||p.set(f,d)}}),l;function c(d,p){const f=d.type,h=l.handlers[f];if(Fu.call(l.handlers,f)&&h)return h(l,d,p);if(l.options.passThrough&&l.options.passThrough.includes(f)){if("children"in d){const{children:b,...j}=d,g=Va(j);return g.children=l.all(d),g}return Va(d)}return(l.options.unknownHandler||s4)(l,d,p)}function u(d){const p=[];if("children"in d){const f=d.children;let h=-1;for(;++h<f.length;){const m=l.one(f[h],d);if(m){if(h&&f[h-1].type==="break"&&(!Array.isArray(m)&&m.type==="text"&&(m.value=wm(m.value)),!Array.isArray(m)&&m.type==="element")){const b=m.children[0];b&&b.type==="text"&&(b.value=wm(b.value))}Array.isArray(m)?p.push(...m):p.push(m)}}}return p}}function i4(e,t){e.position&&(t.position=B_(e))}function o4(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,s=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&s&&Object.assign(n.properties,Va(s)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function s4(e,t){const n=t.data||{},r="value"in t&&!(Fu.call(n,"hProperties")||Fu.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function a4(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function wm(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function km(e,t){const n=r4(e,t),r=n.one(e,void 0),i=qN(n),s=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&s.children.push({type:"text",value:`
`},i),s}function l4(e,t){return e&&"run"in e?async function(n,r){const i=km(n,{file:r,...t});await e.run(i,r)}:function(n,r){return km(n,{file:r,...e||t})}}function jm(e){if(e)throw e}var la=Object.prototype.hasOwnProperty,m1=Object.prototype.toString,_m=Object.defineProperty,Sm=Object.getOwnPropertyDescriptor,Cm=function(t){return typeof Array.isArray=="function"?Array.isArray(t):m1.call(t)==="[object Array]"},Nm=function(t){if(!t||m1.call(t)!=="[object Object]")return!1;var n=la.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&la.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||la.call(t,i)},Em=function(t,n){_m&&n.name==="__proto__"?_m(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},zm=function(t,n){if(n==="__proto__")if(la.call(t,n)){if(Sm)return Sm(t,n).value}else return;return t[n]},c4=function e(){var t,n,r,i,s,a,l=arguments[0],c=1,u=arguments.length,d=!1;for(typeof l=="boolean"&&(d=l,l=arguments[1]||{},c=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});c<u;++c)if(t=arguments[c],t!=null)for(n in t)r=zm(l,n),i=zm(t,n),l!==i&&(d&&i&&(Nm(i)||(s=Cm(i)))?(s?(s=!1,a=r&&Cm(r)?r:[]):a=r&&Nm(r)?r:{},Em(l,{name:n,newValue:e(d,a,i)})):typeof i<"u"&&Em(l,{name:n,newValue:i}));return l};const gc=Za(c4);function Bu(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function u4(){const e=[],t={run:n,use:r};return t;function n(...i){let s=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);l(null,...i);function l(c,...u){const d=e[++s];let p=-1;if(c){a(c);return}for(;++p<i.length;)(u[p]===null||u[p]===void 0)&&(u[p]=i[p]);i=u,d?d4(d,l)(...u):a(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function d4(e,t){let n;return r;function r(...a){const l=e.length>a.length;let c;l&&a.push(i);try{c=e.apply(this,a)}catch(u){const d=u;if(l&&n)throw d;return i(d)}l||(c&&c.then&&typeof c.then=="function"?c.then(s,i):c instanceof Error?i(c):s(c))}function i(a,...l){n||(n=!0,t(a,...l))}function s(a){i(null,a)}}const xn={basename:p4,dirname:f4,extname:h4,join:m4,sep:"/"};function p4(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');cs(e);let n=0,r=-1,i=e.length,s;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else r<0&&(s=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let a=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else a<0&&(s=!0,a=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(r=i):(l=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function f4(e){if(cs(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function h4(e){cs(e);let t=e.length,n=-1,r=0,i=-1,s=0,a;for(;t--;){const l=e.codePointAt(t);if(l===47){if(a){r=t+1;break}continue}n<0&&(a=!0,n=t+1),l===46?i<0?i=t:s!==1&&(s=1):i>-1&&(s=-1)}return i<0||n<0||s===0||s===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function m4(...e){let t=-1,n;for(;++t<e.length;)cs(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":g4(n)}function g4(e){cs(e);const t=e.codePointAt(0)===47;let n=x4(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function x4(e,t){let n="",r=0,i=-1,s=0,a=-1,l,c;for(;++a<=e.length;){if(a<e.length)l=e.codePointAt(a);else{if(l===47)break;l=47}if(l===47){if(!(i===a-1||s===1))if(i!==a-1&&s===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),i=a,s=0;continue}}else if(n.length>0){n="",r=0,i=a,s=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,s=0}else l===46&&s>-1?s++:s=-1}return n}function cs(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const y4={cwd:v4};function v4(){return"/"}function Uu(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function b4(e){if(typeof e=="string")e=new URL(e);else if(!Uu(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return w4(e)}function w4(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const xc=["history","path","basename","stem","extname","dirname"];class g1{constructor(t){let n;t?Uu(t)?n={path:t}:typeof t=="string"||k4(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":y4.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<xc.length;){const s=xc[r];s in n&&n[s]!==void 0&&n[s]!==null&&(this[s]=s==="history"?[...n[s]]:n[s])}let i;for(i in n)xc.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?xn.basename(this.path):void 0}set basename(t){vc(t,"basename"),yc(t,"basename"),this.path=xn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?xn.dirname(this.path):void 0}set dirname(t){Tm(this.basename,"dirname"),this.path=xn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?xn.extname(this.path):void 0}set extname(t){if(yc(t,"extname"),Tm(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=xn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Uu(t)&&(t=b4(t)),vc(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?xn.basename(this.path,this.extname):void 0}set stem(t){vc(t,"stem"),yc(t,"stem"),this.path=xn.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new xt(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function yc(e,t){if(e&&e.includes(xn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+xn.sep+"`")}function vc(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Tm(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function k4(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const j4=function(e){const r=this.constructor.prototype,i=r[e],s=function(){return i.apply(s,arguments)};return Object.setPrototypeOf(s,r),s},_4={}.hasOwnProperty;class wp extends j4{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=u4()}copy(){const t=new wp;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(gc(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(kc("data",this.frozen),this.namespace[t]=n,this):_4.call(this.namespace,t)&&this.namespace[t]||void 0:t?(kc("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Ds(t),r=this.parser||this.Parser;return bc("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),bc("process",this.parser||this.Parser),wc("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(s,a){const l=Ds(t),c=r.parse(l);r.run(c,l,function(d,p,f){if(d||!p||!f)return u(d);const h=p,m=r.stringify(h,f);N4(m)?f.value=m:f.result=m,u(d,f)});function u(d,p){d||!p?a(d):s?s(p):n(void 0,p)}}}processSync(t){let n=!1,r;return this.freeze(),bc("processSync",this.parser||this.Parser),wc("processSync",this.compiler||this.Compiler),this.process(t,i),Pm("processSync","process",n),r;function i(s,a){n=!0,jm(s),r=a}}run(t,n,r){Am(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?s(void 0,r):new Promise(s);function s(a,l){const c=Ds(n);i.run(t,c,u);function u(d,p,f){const h=p||t;d?l(d):a?a(h):r(void 0,h,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,s),Pm("runSync","run",r),i;function s(a,l){jm(a),i=l,r=!0}}stringify(t,n){this.freeze();const r=Ds(n),i=this.compiler||this.Compiler;return wc("stringify",i),Am(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(kc("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function s(u){if(typeof u=="function")c(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...p]=u;c(d,p)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(i.settings=gc(!0,i.settings,u.settings))}function l(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const p=u[d];s(p)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function c(u,d){let p=-1,f=-1;for(;++p<r.length;)if(r[p][0]===u){f=p;break}if(f===-1)r.push([u,...d]);else if(d.length>0){let[h,...m]=d;const b=r[f][1];Bu(b)&&Bu(h)&&(h=gc(!0,b,h)),r[f]=[u,h,...m]}}}}const S4=new wp().freeze();function bc(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function wc(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function kc(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Am(e){if(!Bu(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Pm(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Ds(e){return C4(e)?e:new g1(e)}function C4(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function N4(e){return typeof e=="string"||E4(e)}function E4(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const z4="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Mm=[],Lm={allowDangerousHtml:!0},T4=/^(https?|ircs?|mailto|xmpp)$/i,A4=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function x1(e){const t=P4(e),n=M4(e);return L4(t.runSync(t.parse(n),n),e)}function P4(e){const t=e.rehypePlugins||Mm,n=e.remarkPlugins||Mm,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Lm}:Lm;return S4().use(fN).use(n).use(l4,r).use(t)}function M4(e){const t=e.children||"",n=new g1;return typeof t=="string"&&(n.value=t),n}function L4(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,s=t.disallowedElements,a=t.skipHtml,l=t.unwrapDisallowed,c=t.urlTransform||R4;for(const d of A4)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+z4+d.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),h1(e,u),q_(e,{Fragment:o.Fragment,components:i,ignoreInvalidStyle:!0,jsx:o.jsx,jsxs:o.jsxs,passKeys:!0,passNode:!0});function u(d,p,f){if(d.type==="raw"&&f&&typeof p=="number")return a?f.children.splice(p,1):f.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let h;for(h in fc)if(Object.hasOwn(fc,h)&&Object.hasOwn(d.properties,h)){const m=d.properties[h],b=fc[h];(b===null||b.includes(d.tagName))&&(d.properties[h]=c(String(m||""),h,d))}}if(d.type==="element"){let h=n?!n.includes(d.tagName):s?s.includes(d.tagName):!1;if(!h&&r&&typeof p=="number"&&(h=!r(d,p,f)),h&&f&&typeof p=="number")return l&&d.children?f.children.splice(p,1,...d.children):f.children.splice(p,1),p}}}function R4(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||T4.test(e.slice(0,t))?e:""}function I4({value:e,onChange:t,placeholder:n="Write your content here...",minHeight:r=200}){const[i,s]=k.useState(!1),[a,l]=k.useState(r),c=k.useRef(null),u=k.useRef(null);k.useEffect(()=>{if(e){const f=e.split(`
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
      `}),i?o.jsx("div",{className:"monaco-wrapper",children:o.jsx(en,{height:"100%",language:"markdown",theme:"vs-dark",value:e,onChange:f=>t(f||""),onMount:d,options:{minimap:{enabled:!1},fontSize:14,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"off",scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",padding:{top:12,bottom:12},lineDecorationsWidth:8,folding:!1,glyphMargin:!1,renderLineHighlight:"none",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,scrollbar:{vertical:"auto",horizontal:"hidden"}}})}):o.jsxs("div",{className:"markdown-preview",onClick:()=>s(!0),children:[o.jsxs("span",{className:"edit-hint",children:[o.jsx(Sj,{size:12}),"Click to edit"]}),e?o.jsx("div",{className:"markdown-content",children:o.jsx(x1,{children:e})}):o.jsx("div",{className:"markdown-placeholder",children:n})]})]})}function O4(e){return/^[a-zA-Z0-9_]+$/.test(e)}function $4({agent:e}){const{project:t,updateAgent:n,mcpServers:r,builtinTools:i,setActiveTab:s,setRunAgentId:a}=gt(),[l,c]=k.useState(new Set(["basic","model","tools","subagents","callbacks"])),[u,d]=k.useState(!1),[p,f]=k.useState(!1),[h,m]=k.useState(!1),[b,j]=k.useState(""),[g,x]=k.useState(null);if(!t)return null;function v(C){n(e.id,C)}function _(C){if(C===""){x(null),v({name:C});return}O4(C)?x(null):x("Name can only contain letters, numbers, and underscores"),e.type==="LlmAgent"?v({name:C,output_key:C}):v({name:C})}function A(C){const L=new Set(l);L.has(C)?L.delete(C):L.add(C),c(L)}const S=e.type==="LlmAgent",M=e;function E(C){S&&v({tools:[...M.tools,C]})}function U(C){S&&v({tools:M.tools.filter((L,R)=>R!==C)})}function z(C,L){if(!S)return;const R=[...M.tools];R[C]=L,v({tools:R})}function $(C){"sub_agents"in e&&v({sub_agents:[...e.sub_agents,C]})}function q(C){"sub_agents"in e&&v({sub_agents:e.sub_agents.filter(L=>L!==C)})}const Y=t.agents.filter(C=>C.id!==e.id);async function T(){if(!(!t||!S)){d(!0);try{const C=M.instruction||"",L=C?`Current instruction to improve:

${C}

Please improve and expand this instruction while preserving its core intent.`:void 0,w=t.agents.some(K=>K.id===e.id)?void 0:e,W=await sa(t.id,e.id,L,w);W.success&&W.prompt?v({instruction:W.prompt}):alert("Failed to generate prompt: "+(W.error||"Unknown error"))}catch(C){alert("Error generating prompt: "+C.message)}finally{d(!1)}}}async function P(){if(!(!t||!S||!b.trim())){d(!0);try{const L=`Current instruction:

${M.instruction||""}

---

Requested changes:
${b}

Please apply the requested changes to the instruction above. Output only the updated instruction, nothing else.`,w=t.agents.some(K=>K.id===e.id)?void 0:e,W=await sa(t.id,e.id,L,w);W.success&&W.prompt?(v({instruction:W.prompt}),m(!1),j("")):alert("Failed to apply changes: "+(W.error||"Unknown error"))}catch(C){alert("Error applying changes: "+C.message)}finally{d(!1)}}}async function D(){if(!t||!S)return;const C=M.instruction;if(!C){alert("Please write an instruction first");return}f(!0);try{const L=`Write a 5-10 word description of what this agent does.

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
${C.slice(0,500)}

Your response (5-10 words only):`,R=await sa(t.id,e.id,L);if(R.success&&R.prompt){let w=R.prompt.trim();w=w.replace(/^["']|["']$/g,"").trim();const W=w.split(/[.!?\n]/)[0].trim(),K=W.length>80?W.slice(0,77)+"...":W;v({description:K})}else alert("Failed to generate description: "+(R.error||"Unknown error"))}catch(L){alert("Error generating description: "+L.message)}finally{f(!1)}}return o.jsxs("div",{className:"agent-editor",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"editor-header",children:[o.jsx(Ar,{size:24,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o.jsx("input",{type:"text",value:e.name,onChange:C=>_(C.target.value),placeholder:"Agent name",style:{borderColor:g?"var(--error)":void 0}}),g&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:g})]}),o.jsx("span",{className:"badge badge-info",children:e.type}),o.jsxs("button",{className:"btn btn-primary btn-sm run-agent-btn",onClick:()=>{a(e.id),s("run")},title:"Test this agent",children:[o.jsx(hr,{size:14}),"Run"]})]}),o.jsxs("div",{className:"editor-content",children:[o.jsxs(Zi,{id:"basic",title:"Basic Info",icon:o.jsx(Ar,{size:16}),expanded:l.has("basic"),onToggle:()=>A("basic"),children:[o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group full-width",children:[o.jsxs("div",{className:"label-with-action",children:[o.jsx("label",{children:"Description"}),S&&M.instruction&&o.jsx("button",{className:"btn btn-secondary btn-sm generate-btn",onClick:D,disabled:p,title:"Generate description from instruction",children:p?o.jsxs(o.Fragment,{children:[o.jsx(tr,{size:14,className:"spin"}),"Summarizing..."]}):"Summarize"})]}),o.jsx("input",{type:"text",value:e.description,onChange:C=>v({description:C.target.value}),placeholder:"e.g., Reviews code for bugs and suggests fixes"})]})}),S&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group full-width",children:[o.jsxs("div",{className:"label-with-action",children:[o.jsx("label",{children:"Instruction"}),o.jsxs("div",{className:"action-buttons",children:[o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>m(!h),disabled:u||!M.instruction,title:"Request specific changes to the instruction",children:"Request Changes"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:T,disabled:u,title:"Uses AI to improve and expand the current instruction",children:u?o.jsxs(o.Fragment,{children:[o.jsx(tr,{size:14,className:"spin"}),"Working..."]}):"Auto-Improve"})]})]}),h&&o.jsxs("div",{className:"request-changes-box",children:[o.jsx("input",{type:"text",value:b,onChange:C=>j(C.target.value),placeholder:"Describe what changes you want...",onKeyDown:C=>{C.key==="Enter"&&b.trim()?P():C.key==="Escape"&&(m(!1),j(""))},autoFocus:!0}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:P,disabled:u||!b.trim(),children:"Apply"})]}),o.jsx(I4,{value:M.instruction,onChange:C=>v({instruction:C}),placeholder:"Write your agent's instruction here... (Markdown supported)",minHeight:200})]})}),o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Output Key"}),o.jsxs("select",{value:M.output_key||"",onChange:C=>v({output_key:C.target.value||void 0}),children:[o.jsx("option",{value:"",children:"None"}),t.app.state_keys.map(C=>o.jsx("option",{value:C.name,children:C.name},C.name))]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Include Contents"}),o.jsxs("select",{value:M.include_contents,onChange:C=>v({include_contents:C.target.value}),children:[o.jsx("option",{value:"default",children:"Default"}),o.jsx("option",{value:"none",children:"None"})]})]})]}),o.jsxs("div",{className:"form-row",style:{gap:24},children:[o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:M.disallow_transfer_to_parent,onChange:C=>v({disallow_transfer_to_parent:C.target.checked})}),o.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to parent"]}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:M.disallow_transfer_to_peers,onChange:C=>v({disallow_transfer_to_peers:C.target.checked})}),o.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to peers"]})]})]}),e.type==="LoopAgent"&&o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Max Iterations"}),o.jsx("input",{type:"number",value:e.max_iterations||"",onChange:C=>v({max_iterations:parseInt(C.target.value)||void 0}),placeholder:"No limit"})]})})]}),S&&o.jsx(Zi,{id:"model",title:"Model",icon:o.jsx(ep,{size:16}),expanded:l.has("model"),onToggle:()=>A("model"),children:o.jsx(F4,{agent:M,appModels:t.app.models||[],defaultModelId:t.app.default_model_id,projectId:t.id,onUpdate:C=>v({model:C})})}),S&&o.jsx(Zi,{id:"tools",title:`Tools (${M.tools.length})`,icon:o.jsx(pn,{size:16}),expanded:l.has("tools"),onToggle:()=>A("tools"),children:o.jsx(D4,{tools:M.tools,onAdd:E,onRemove:U,onUpdate:z,builtinTools:i,mcpServers:r,projectMcpServers:t.mcp_servers,customTools:t.custom_tools,agents:Y,skillsets:t.skillsets||[]})}),"sub_agents"in e&&o.jsx(Zi,{id:"subagents",title:`Sub-Agents (${e.sub_agents.length})`,icon:o.jsx(Sv,{size:16}),expanded:l.has("subagents"),onToggle:()=>A("subagents"),children:o.jsxs("div",{className:"sub-agent-list",children:[e.sub_agents.map(C=>{const L=t.agents.find(R=>R.id===C);return L?o.jsxs("div",{className:"sub-agent-chip",children:[L.name,o.jsx("button",{onClick:()=>q(C),children:o.jsx(Ue,{size:12})})]},C):null}),o.jsxs("select",{value:"",onChange:C=>{C.target.value&&$(C.target.value)},style:{width:150,padding:"6px 10px",fontSize:13},children:[o.jsx("option",{value:"",children:"Add agent..."}),Y.filter(C=>!e.sub_agents.includes(C.id)).map(C=>o.jsx("option",{value:C.id,children:C.name},C.id))]})]})}),o.jsx(Zi,{id:"callbacks",title:"Callbacks",icon:o.jsx(_n,{size:16}),expanded:l.has("callbacks"),onToggle:()=>A("callbacks"),children:o.jsx(B4,{agent:e,onUpdate:v,customCallbacks:t.custom_callbacks||[],isLlmAgent:S})})]})]})}function Zi({id:e,title:t,icon:n,expanded:r,onToggle:i,children:s}){return o.jsxs("div",{className:"section",children:[o.jsxs("div",{className:"section-header",onClick:i,children:[r?o.jsx(Nt,{size:16}):o.jsx(vt,{size:16}),o.jsxs("h4",{children:[n," ",t]})]}),r&&o.jsx("div",{className:"section-content",children:s})]})}function D4({tools:e,onAdd:t,onRemove:n,onUpdate:r,builtinTools:i,mcpServers:s,projectMcpServers:a,customTools:l,agents:c,skillsets:u}){const[d,p]=k.useState(!1),[f,h]=k.useState({}),[m,b]=k.useState(""),j=Wt.useRef(null),g=Wt.useRef(null),[x,v]=k.useState(null),[_,A]=k.useState(new Set),S=(N,V)=>{if(!m.trim())return!0;const re=m.toLowerCase();return N.toLowerCase().includes(re)||((V==null?void 0:V.toLowerCase().includes(re))??!1)},M=i.filter(N=>S(N.name,N.description)),E=a.filter(N=>S(N.name,N.description)),U=l.filter(N=>S(N.name,N.description)),z=c.filter(N=>S(N.name,N.description)),$=u.filter(N=>S(N.name,N.description));function q(){if(j.current){const N=j.current.getBoundingClientRect(),V=window.innerHeight,re=350,fe=V-N.bottom-16,me=N.top-16;if(fe>=200||fe>=me){const ee=Math.min(re,fe);h({top:N.bottom+4,left:N.left,maxHeight:ee})}else{const ee=Math.min(re,me);h({top:N.top-ee-4,left:N.left,maxHeight:ee})}}p(!0),b(""),setTimeout(()=>{var N;return(N=g.current)==null?void 0:N.focus()},50)}function Y(){p(!1),b("")}function T(N){t({type:"builtin",name:N}),Y()}async function P(N){Y();const V=N.tool_filter||[];if(v({server:N,enabledTools:new Set(V),availableTools:V.map(re=>({name:re,description:""})),isLoading:V.length===0,error:void 0}),V.length===0)try{const{testMcpServer:re}=await Bj(async()=>{const{testMcpServer:me}=await Promise.resolve().then(()=>uj);return{testMcpServer:me}},void 0),fe=await re({connection_type:N.connection_type,command:N.command,args:N.args,env:N.env,url:N.url,headers:N.headers,timeout:N.timeout||30});fe.success?v(me=>me?{...me,availableTools:fe.tools,enabledTools:new Set(fe.tools.map(ee=>ee.name)),isLoading:!1}:null):v(me=>me?{...me,isLoading:!1,error:fe.error||"Failed to connect to MCP server"}:null)}catch(re){v(fe=>fe?{...fe,isLoading:!1,error:re.message}:null)}}function D(N){if(!x)return;const V=new Set(x.enabledTools);V.has(N)?V.delete(N):V.add(N),v({...x,enabledTools:V})}function C(){if(!x)return;const N=Array.from(x.enabledTools);t({type:"mcp",server:{...x.server,tool_filter:N}}),v(null)}function L(N){const V=new Set(_);V.has(N)?V.delete(N):V.add(N),A(V)}function R(N,V){const re=e[N];if(re.type!=="mcp"||!re.server)return;const fe=re.server.tool_filter||[];let me;fe.includes(V)?me=fe.filter(ee=>ee!==V):me=[...fe,V],r(N,{...re,server:{...re.server,tool_filter:me}})}function w(N){t({type:"function",name:N.name,module_path:N.module_path}),Y()}function W(N){const V=c.find(re=>re.id===N);t({type:"agent",agent_id:N,name:V==null?void 0:V.name}),Y()}function K(N){const V=u.find(re=>re.id===N);t({type:"skillset",skillset_id:N,name:V==null?void 0:V.name}),Y()}function y(N){return s.find(V=>V.name===N)}return o.jsxs("div",{children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"tool-list",children:e.map((N,V)=>{var re;return N.type==="mcp"&&N.server?o.jsxs("div",{className:"mcp-tool-item",children:[o.jsxs("div",{className:"mcp-tool-header",onClick:()=>L(V),children:[_.has(V)?o.jsx(Nt,{size:14}):o.jsx(vt,{size:14}),o.jsx(pn,{size:14,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{className:"mcp-tool-info",children:[o.jsx("div",{className:"mcp-tool-name",children:N.server.name}),o.jsx("div",{className:"mcp-tool-count",children:N.server.tool_filter===null||N.server.tool_filter===void 0?"all tools":`${N.server.tool_filter.length} tools enabled`})]}),o.jsx("button",{className:"delete-btn",onClick:fe=>{fe.stopPropagation(),n(V)},children:o.jsx(Ue,{size:14})})]}),_.has(V)&&o.jsx("div",{className:"mcp-tool-body",children:o.jsx("div",{className:"mcp-tool-list",children:(()=>{const fe=y(N.server.name),me=(fe==null?void 0:fe.tool_filter)||N.server.tool_filter||[],ee=new Set(N.server.tool_filter||[]);return me.map(F=>o.jsxs("label",{className:`mcp-tool-chip ${ee.has(F)?"enabled":"disabled"}`,onClick:()=>R(V,F),children:[o.jsx("input",{type:"checkbox",checked:ee.has(F),onChange:()=>{},style:{display:"none"}}),F]},F))})()})})]},V):N.type==="skillset"?o.jsxs("div",{className:"tool-item",children:[o.jsx(In,{size:14,style:{color:"var(--accent)"}}),o.jsxs("div",{className:"tool-item-info",children:[o.jsx("div",{className:"tool-item-name",children:N.name||((re=u.find(fe=>fe.id===N.skillset_id))==null?void 0:re.name)||"SkillSet"}),o.jsx("div",{className:"tool-item-type",children:"skillset"})]}),o.jsx("button",{className:"delete-btn",onClick:()=>n(V),children:o.jsx(Ue,{size:14})})]},V):o.jsxs("div",{className:"tool-item",children:[o.jsx(pn,{size:14,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{className:"tool-item-info",children:[o.jsx("div",{className:"tool-item-name",children:N.name||N.agent_id}),o.jsx("div",{className:"tool-item-type",children:N.type})]}),o.jsx("button",{className:"delete-btn",onClick:()=>n(V),children:o.jsx(Ue,{size:14})})]},V)})}),o.jsxs("div",{className:"add-tool-dropdown",style:{marginTop:12},children:[o.jsxs("button",{ref:j,className:"btn btn-secondary btn-sm",onClick:()=>d?Y():q(),children:[o.jsx(Qe,{size:14}),"Add Tool"]}),d&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"dropdown-backdrop",onClick:Y}),o.jsxs("div",{className:"dropdown-content dropdown-fixed",style:f,children:[o.jsx("div",{className:"dropdown-search",children:o.jsx("input",{ref:g,type:"text",placeholder:"Search tools...",value:m,onChange:N=>b(N.target.value),onKeyDown:N=>N.key==="Escape"&&Y()})}),M.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Built-in Tools"}),M.map(N=>o.jsxs("button",{className:"dropdown-item",onClick:()=>T(N.name),children:[o.jsx("div",{className:"dropdown-item-name",children:N.name}),o.jsx("div",{className:"dropdown-item-desc",children:N.description})]},N.name))]}),E.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsxs("h5",{children:["Project MCP Servers (",E.length,")"]}),E.map(N=>o.jsxs("button",{className:"dropdown-item",onClick:()=>P(N),children:[o.jsxs("div",{className:"dropdown-item-name",children:[N.name,o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:N.tool_filter===null||N.tool_filter===void 0?"all tools":`${N.tool_filter.length} tools`})]}),o.jsx("div",{className:"dropdown-item-desc",children:N.description||"Custom MCP server"})]},`project-${N.id||N.name}`))]}),U.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Custom Tools"}),U.map(N=>o.jsxs("button",{className:"dropdown-item",onClick:()=>w(N),children:[o.jsx("div",{className:"dropdown-item-name",children:N.name}),o.jsx("div",{className:"dropdown-item-desc",children:N.description})]},N.id))]}),z.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Agents as Tools"}),z.map(N=>o.jsxs("button",{className:"dropdown-item",onClick:()=>W(N.id),children:[o.jsx("div",{className:"dropdown-item-name",children:N.name}),o.jsx("div",{className:"dropdown-item-desc",children:N.type})]},N.id))]}),$.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsxs("h5",{children:["SkillSets (",$.length,")"]}),$.map(N=>o.jsxs("button",{className:"dropdown-item",onClick:()=>K(N.id),children:[o.jsxs("div",{className:"dropdown-item-name",children:[N.name,o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:[N.entry_count||0," entries"]})]}),o.jsx("div",{className:"dropdown-item-desc",children:N.description||"Vector knowledge base"})]},N.id))]}),m.trim()&&M.length===0&&E.length===0&&U.length===0&&z.length===0&&$.length===0&&o.jsxs("div",{className:"dropdown-section",style:{textAlign:"center",padding:"20px",color:"var(--text-muted)"},children:['No tools matching "',m,'"']})]})]})]}),x&&o.jsx("div",{className:"mcp-config-dialog",children:o.jsxs("div",{className:"mcp-config-content",children:[o.jsxs("h3",{children:["Configure ",x.server.name]}),o.jsx("p",{children:x.server.description}),x.isLoading?o.jsxs("div",{className:"mcp-loading",children:[o.jsx("div",{className:"spinner"}),o.jsx("p",{children:"Connecting to MCP server and discovering tools..."})]}):x.error?o.jsxs("div",{className:"mcp-error",children:[o.jsxs("p",{children:["⚠️ Failed to discover tools: ",x.error]}),o.jsx("p",{className:"hint",children:"You can still add the server, but you won't be able to select specific tools."})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"mcp-select-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>v({...x,enabledTools:new Set(x.availableTools.map(N=>N.name))}),children:["Select All (",x.availableTools.length,")"]}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>v({...x,enabledTools:new Set}),children:"Select None"})]}),o.jsx("div",{className:"mcp-tools-grid",children:x.availableTools.map(N=>o.jsxs("div",{className:"mcp-tool-row",title:N.description||N.name,style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:x.enabledTools.has(N.name),onChange:()=>D(N.name)}),o.jsx("span",{className:"toggle-slider"})]}),o.jsx("span",{style:{fontSize:13,opacity:x.enabledTools.has(N.name)?1:.5,cursor:"pointer"},onClick:()=>D(N.name),children:N.name})]},N.name))})]}),o.jsxs("div",{className:"dialog-actions",children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>v(null),children:"Cancel"}),o.jsxs("button",{className:"btn btn-primary",onClick:C,disabled:x.enabledTools.size===0,children:["Add ",x.enabledTools.size," Tools"]})]})]})})]})}function F4({agent:e,appModels:t,defaultModelId:n,projectId:r,onUpdate:i}){var f,h;const s=(f=e.model)==null?void 0:f._appModelId,a=e.model!==null&&e.model!==void 0&&!s,c=s||(()=>{if(!e.model)return n;const m=t.find(b=>{var j,g,x;return b.provider===((j=e.model)==null?void 0:j.provider)&&b.model_name===((g=e.model)==null?void 0:g.model_name)&&b.api_base===((x=e.model)==null?void 0:x.api_base)});return m==null?void 0:m.id})()||n||((h=t[0])==null?void 0:h.id);Wt.useEffect(()=>{var m,b,j,g,x;if(s){const v=t.find(_=>_.id===s);v&&(((m=e.model)==null?void 0:m.provider)!==v.provider||((b=e.model)==null?void 0:b.model_name)!==v.model_name||((j=e.model)==null?void 0:j.api_base)!==v.api_base||((g=e.model)==null?void 0:g.temperature)!==v.temperature||((x=e.model)==null?void 0:x.max_output_tokens)!==v.max_output_tokens)&&i({provider:v.provider,model_name:v.model_name,api_base:v.api_base,temperature:v.temperature,max_output_tokens:v.max_output_tokens,top_p:v.top_p,top_k:v.top_k,fallbacks:[],_appModelId:s})}},[s,t,e.model,i]);function u(m){const b=t.find(j=>j.id===m);b&&i({provider:b.provider,model_name:b.model_name,api_base:b.api_base,temperature:b.temperature,max_output_tokens:b.max_output_tokens,top_p:b.top_p,top_k:b.top_k,fallbacks:[],_appModelId:m})}function d(){var m;if(a){const b=n||((m=t[0])==null?void 0:m.id);b&&u(b)}else{const b=e.model;if(b){const{_appModelId:j,...g}=b;i(g)}else i({provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]})}}function p(m){const{_appModelId:b,...j}=e.model||{};i({...j,...m})}return t.find(m=>m.id===c),t.find(m=>m.id===n),o.jsxs("div",{className:"model-selector",children:[o.jsx("style",{children:`
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
      `}),t.length>0&&o.jsxs("div",{className:"model-choice",children:[o.jsxs("div",{className:`model-option ${a?"":"selected"}`,onClick:()=>!a||d(),children:[o.jsx("div",{className:"model-option-label",children:"Use App Model"}),o.jsx("div",{className:"model-option-desc",children:"Select from configured models"})]}),o.jsxs("div",{className:`model-option ${a?"selected":""}`,onClick:()=>a||d(),children:[o.jsx("div",{className:"model-option-label",children:"Custom"}),o.jsx("div",{className:"model-option-desc",children:"Configure model manually"})]})]}),!a&&t.length>0?o.jsx("div",{className:"app-model-select",children:t.map(m=>o.jsx("div",{className:`app-model-item ${c===m.id?"selected":""}`,onClick:()=>u(m.id),children:o.jsxs("div",{className:"app-model-item-info",children:[o.jsxs("div",{className:"app-model-item-name",children:[m.name,m.id===n&&o.jsxs("span",{className:"default-badge",children:[o.jsx(_v,{size:10,fill:"currentColor"}),"Default"]})]}),o.jsxs("div",{className:"app-model-item-details",children:[m.provider," / ",m.model_name,m.api_base&&` • ${m.api_base}`]})]})},m.id))}):t.length===0?o.jsx("div",{className:"no-models-message",children:"No models configured in App Config. Configure models there first, or use custom settings below."}):null,(a||t.length===0)&&o.jsx("div",{className:"custom-model-form",children:o.jsx(Cv,{projectId:r,values:e.model||{},onChange:p})})]})}const jc=[{id:"builtin_exit_loop",name:"exit_on_EXIT_LOOP_NOW",description:'Exits LoopAgent when model says "EXIT LOOP NOW". Use as after_model_callback.',module_path:"exit_on_EXIT_LOOP_NOW",code:"",state_keys_used:[]}];function B4({agent:e,onUpdate:t,customCallbacks:n,isLlmAgent:r}){const i=[...jc,...n],s=[{key:"before_agent_callbacks",label:"Before Agent"},{key:"after_agent_callbacks",label:"After Agent"}],a=[{key:"before_model_callbacks",label:"Before Model"},{key:"after_model_callbacks",label:"After Model"},{key:"before_tool_callbacks",label:"Before Tool"},{key:"after_tool_callbacks",label:"After Tool"}],l=r?[...s,...a]:s;function c(d,p){const f=e[d]||[],h=i.find(m=>m.id===p);h&&t({[d]:[...f,{module_path:h.module_path}]})}function u(d,p){const f=e[d]||[];t({[d]:f.filter((h,m)=>m!==p)})}return o.jsx("div",{className:"callbacks-editor",children:l.map(({key:d,label:p})=>{const f=e[d]||[],h=i;return o.jsxs("div",{className:"callback-type-group",style:{marginBottom:"20px"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[o.jsx("label",{style:{fontWeight:500,fontSize:"13px"},children:p}),h.length>0&&o.jsxs("select",{value:"",onChange:m=>{m.target.value&&(c(d,m.target.value),m.target.value="")},style:{padding:"4px 8px",fontSize:"12px",width:"200px"},children:[o.jsx("option",{value:"",children:"Add callback..."}),o.jsx("optgroup",{label:"Built-in",children:jc.filter(m=>!f.some(b=>b.module_path===m.module_path)).map(m=>o.jsx("option",{value:m.id,children:m.name},m.id))}),o.jsx("optgroup",{label:"Custom",children:n.filter(m=>!f.some(b=>b.module_path===m.module_path)).map(m=>o.jsx("option",{value:m.id,children:m.name},m.id))})]})]}),f.length===0?o.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",fontStyle:"italic",padding:"8px"},children:"No callbacks"}):o.jsx("div",{className:"callback-list",children:f.map((m,b)=>{const j=i.find(x=>x.module_path===m.module_path),g=jc.some(x=>x.module_path===m.module_path);return o.jsxs("div",{className:"callback-chip",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 10px",background:g?"var(--accent-bg, #1a365d)":"var(--bg-secondary)",borderRadius:"4px",marginBottom:"4px"},title:(j==null?void 0:j.description)||"",children:[o.jsxs("span",{style:{fontSize:"12px",display:"flex",alignItems:"center",gap:"6px"},children:[g&&o.jsx("span",{style:{fontSize:"9px",padding:"1px 4px",background:"var(--accent-color, #3182ce)",borderRadius:"3px",textTransform:"uppercase",fontWeight:600},children:"built-in"}),(j==null?void 0:j.name)||m.module_path]}),o.jsx("button",{onClick:()=>u(d,b),style:{background:"none",border:"none",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},title:"Remove callback",children:o.jsx(Ue,{size:12})})]},b)})})]},d)})})}const _c=[{type:"LlmAgent",label:"LLM Agent",icon:Ar,color:"#00f5d4",description:"AI-powered agent with model reasoning"},{type:"SequentialAgent",label:"Sequential",icon:Tj,color:"#7b2cbf",description:"Run sub-agents in order"},{type:"LoopAgent",label:"Loop",icon:Nj,color:"#ffd93d",description:"Repeat sub-agents until exit"},{type:"ParallelAgent",label:"Parallel",icon:zu,color:"#ff6b6b",description:"Run sub-agents simultaneously"}];function U4(){return`agent_${Date.now().toString(36)}`}function W4(e){return{provider:e.provider,model_name:e.model_name,api_base:e.api_base,temperature:e.temperature,max_output_tokens:e.max_output_tokens,top_p:e.top_p,top_k:e.top_k,fallbacks:[]}}function V4(e,t){const n=U4(),r={LlmAgent:"new_agent",SequentialAgent:"new_sequence",LoopAgent:"new_loop",ParallelAgent:"new_parallel"},i={id:n,name:r[e]||"new_agent",description:""},s=t?W4(t):{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]};switch(e){case"LlmAgent":return{...i,type:"LlmAgent",model:s,instruction:"",include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:[],sub_agents:[],output_key:r[e]||"new_agent",before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};case"SequentialAgent":return{...i,type:"SequentialAgent",sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[]};case"LoopAgent":return{...i,type:"LoopAgent",sub_agents:[],max_iterations:10,before_agent_callbacks:[],after_agent_callbacks:[]};case"ParallelAgent":return{...i,type:"ParallelAgent",sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[]};default:throw new Error(`Unknown agent type: ${e}`)}}function H4({onSelectAgent:e}){const{project:t,addAgent:n,removeAgent:r,updateAgent:i,selectedAgentId:s,setSelectedAgentId:a,mcpServers:l}=gt(),[c,u]=k.useState(new Set),[d,p]=k.useState(!1),[f,h]=k.useState(""),[m,b]=k.useState(new Map),[j,g]=k.useState(380),[x,v]=k.useState(!1),_=k.useRef(null),[A,S]=k.useState(null),M=k.useRef(null),[E,U]=k.useState(null),[z,$]=k.useState(null),q=k.useRef(null),Y=k.useRef(null),T=k.useCallback(ie=>{ie.preventDefault(),v(!0)},[]);if(k.useEffect(()=>{const ie=G=>{if(!x)return;const J=Math.min(Math.max(200,G.clientX),600);g(J)},I=()=>{v(!1)};return x&&(document.addEventListener("mousemove",ie),document.addEventListener("mouseup",I),document.body.style.cursor="col-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",ie),document.removeEventListener("mouseup",I),document.body.style.cursor="",document.body.style.userSelect=""}},[x]),k.useEffect(()=>{if(t){const ie=t.agents.filter(I=>"sub_agents"in I&&I.sub_agents.length>0).map(I=>I.id);u(new Set(ie))}},[t==null?void 0:t.id,t==null?void 0:t.agents.length]),!t)return null;const P=k.useMemo(()=>new Map(t.agents.map(ie=>[ie.id,ie])),[t.agents]);function D(){if(!f.trim()||!t)return;const ie=`generating_${Date.now()}`,I=f;b(G=>new Map(G).set(ie,I)),p(!1),h(""),sv(t.id,I).then(G=>{var J,oe,B,Z;if(G.success&&G.config){const se=G.config,ge=[];if((J=se.tools)!=null&&J.builtin)for(const _e of se.tools.builtin)ge.push({type:"builtin",name:_e});if((oe=se.tools)!=null&&oe.mcp)for(const _e of se.tools.mcp){const Ae=l.find(nt=>nt.name===_e.server);Ae&&ge.push({type:"mcp",server:{...Ae,tool_filter:_e.tools}})}if((B=se.tools)!=null&&B.custom)for(const _e of se.tools.custom){const Ae=t.custom_tools.find(nt=>nt.name===_e);Ae&&ge.push({type:"function",name:_e,module_path:Ae.module_path})}if((Z=se.tools)!=null&&Z.agents)for(const _e of se.tools.agents){const Ae=t.agents.find(nt=>nt.id===_e);Ae&&ge.push({type:"agent",agent_id:_e,name:Ae.name})}const X=t.app.models||[],ae=X.find(_e=>_e.id===t.app.default_model_id)||X[0],we=se.name||"new_agent",je={id:`agent_${Date.now().toString(36)}`,type:"LlmAgent",name:we,description:se.description||"",instruction:se.instruction||"",output_key:se.output_key||we,model:ae?{provider:ae.provider,model_name:ae.model_name,api_base:ae.api_base,temperature:ae.temperature,max_output_tokens:ae.max_output_tokens,top_p:ae.top_p,top_k:ae.top_k,fallbacks:[]}:{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]},include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:ge,sub_agents:se.sub_agents||[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};n(je),a(je.id),e==null||e(je.id)}else console.error("Failed to generate agent:",G.error)}).catch(G=>{console.error("Error generating agent:",G)}).finally(()=>{b(G=>{const J=new Map(G);return J.delete(ie),J})})}const C=t.agents.find(ie=>ie.id===s);function L(ie){a(ie),e==null||e(ie)}function R(ie){if(!t)return;const I=t.app.models||[],G=I.find(oe=>oe.id===t.app.default_model_id)||I[0],J=V4(ie,G);n(J),L(J.id)}function w(ie,I){I.stopPropagation(),confirm("Delete this agent?")&&(r(ie),s===ie&&(e==null||e(null)))}function W(ie){const I=new Set(c);I.has(ie)?I.delete(ie):I.add(ie),u(I)}function K(ie){if(!q.current||!M.current)return;const I=q.current.getBoundingClientRect(),G=ie.clientY-I.top,J=60,oe=8;if(G<J){const B=Math.max(1,oe*(1-G/J));q.current.scrollTop-=B}else if(G>I.height-J){const B=Math.max(1,oe*(1-(I.height-G)/J));q.current.scrollTop+=B}}function y(ie,I){ie.dataTransfer.setData("text/plain",I),ie.dataTransfer.effectAllowed="move",M.current=I,requestAnimationFrame(()=>S(I))}function N(){M.current=null,S(null),U(null),$(null),Y.current&&(cancelAnimationFrame(Y.current),Y.current=null)}function V(ie,I,G){if(!t)return;ie.preventDefault(),ie.stopPropagation();const J=M.current;if(!J)return;const oe=t.agents.find(B=>B.id===I);!oe||!("sub_agents"in oe)||F(J,I)||(ie.dataTransfer.dropEffect="move",$({parentId:I,index:G}),U(null))}function re(ie,I,G){if(!t)return;ie.preventDefault(),ie.stopPropagation();const J=ie.dataTransfer.getData("text/plain");if(!J)return;if(J===I||F(J,I)){$(null);return}const oe=t.agents.find(Z=>Z.id===I);if(!oe||!("sub_agents"in oe))return;t.agents.forEach(Z=>{"sub_agents"in Z&&Z.sub_agents.includes(J)&&i(Z.id,{sub_agents:Z.sub_agents.filter(se=>se!==J)})});const B=[...oe.sub_agents.filter(Z=>Z!==J)];B.splice(G,0,J),i(I,{sub_agents:B}),u(Z=>new Set([...Z,I])),S(null),$(null)}function fe(ie,I,G){if(!t)return;const J=M.current;ie.preventDefault(),ie.stopPropagation(),J!==I&&(J&&F(J,I)||(ie.dataTransfer.dropEffect="move",U({agentId:I,type:G}),$(null)))}function me(ie){const I=ie.relatedTarget;(!I||!ie.currentTarget.contains(I))&&U(null)}function ee(ie,I,G){if(!t)return;ie.preventDefault(),ie.stopPropagation();const J=ie.dataTransfer.getData("text/plain");if(!J||J===I)return;if(G==="sub_agent"&&F(J,I)){S(null),U(null),$(null);return}const oe=t.agents.find(Z=>Z.id===I),B=t.agents.find(Z=>Z.id===J);if(!(!oe||!B)){if(G==="sub_agent")"sub_agents"in oe&&(t.agents.forEach(Z=>{"sub_agents"in Z&&Z.sub_agents.includes(J)&&i(Z.id,{sub_agents:Z.sub_agents.filter(se=>se!==J)})}),oe.sub_agents.includes(J)||(i(I,{sub_agents:[...oe.sub_agents,J]}),u(Z=>new Set([...Z,I]))));else if(G==="tool"&&"tools"in oe){const Z=oe;Z.tools.some(ge=>ge.type==="agent"&&ge.agent_id===J)||i(I,{tools:[...Z.tools,{type:"agent",agent_id:J,name:B.name}]})}S(null),U(null)}}function F(ie,I){if(ie===I)return!0;const G=[ie],J=new Set;for(;G.length;){const oe=G.pop();if(J.has(oe))continue;J.add(oe);const B=P.get(oe);if(!(!B||!("sub_agents"in B)))for(const Z of B.sub_agents){if(Z===I)return!0;G.push(Z)}}return!1}function Q(ie){const I=_c.find(G=>G.type===ie);return I?I.icon:Ar}function te(ie){const I=_c.find(G=>G.type===ie);return I?I.color:"#888"}function O(ie,I=0,G=new Set){return ie.map(J=>{const oe=Q(J.type),B=te(J.type),Z="sub_agents"in J&&J.sub_agents.length>0,se="sub_agents"in J,ge=J.type==="LlmAgent",X=c.has(J.id),ae=A===J.id,we=(E==null?void 0:E.agentId)===J.id&&(E==null?void 0:E.type)==="sub_agent",je=(E==null?void 0:E.agentId)===J.id&&(E==null?void 0:E.type)==="tool",_e=G.has(J.id),Ae=Z&&X&&!_e,nt=Ae&&t?J.sub_agents.map(Ne=>t.agents.find(rt=>rt.id===Ne)).filter(Ne=>Ne!==void 0):[],ct=A&&A!==J.id&&(se||ge);return o.jsxs("div",{className:"agent-tree-item",children:[o.jsxs("div",{className:`agent-item ${s===J.id?"selected":""} ${ae?"dragging":""} ${ct?"drop-target":""}`,onClick:()=>L(J.id),style:{paddingLeft:12+I*20},draggable:!0,onDragStart:Ne=>y(Ne,J.id),onDragEnd:N,onDragOver:Ne=>{ct&&(Ne.preventDefault(),Ne.stopPropagation())},children:[o.jsx("div",{className:"drag-handle",children:o.jsx(bj,{size:12})}),Z?o.jsx("button",{className:"expand-btn",onClick:Ne=>{Ne.stopPropagation(),W(J.id)},children:X?o.jsx(Nt,{size:16}):o.jsx(vt,{size:16})}):o.jsx("span",{style:{width:20}}),o.jsx("div",{className:"agent-icon",style:{background:B},children:o.jsx(oe,{size:14})}),o.jsx("span",{className:"agent-name",children:J.name}),o.jsx("button",{className:"delete-btn",onClick:Ne=>w(J.id,Ne),children:o.jsx(Ue,{size:14})}),ct&&o.jsxs("div",{className:"drop-overlay",children:[se&&o.jsxs("div",{className:`drop-zone-overlay ${we?"active":""}`,onDragOver:Ne=>fe(Ne,J.id,"sub_agent"),onDragLeave:me,onDrop:Ne=>ee(Ne,J.id,"sub_agent"),children:[o.jsx(Sv,{size:12}),o.jsx("span",{children:"Sub-agent"})]}),ge&&o.jsxs("div",{className:`drop-zone-overlay ${je?"active":""}`,onDragOver:Ne=>fe(Ne,J.id,"tool"),onDragLeave:me,onDrop:Ne=>ee(Ne,J.id,"tool"),children:[o.jsx(pn,{size:12}),o.jsx("span",{children:"Tool"})]})]})]}),Ae&&o.jsxs("div",{className:"sub-agents",children:[A&&A!==J.id&&o.jsx("div",{className:`insert-indicator ${(z==null?void 0:z.parentId)===J.id&&(z==null?void 0:z.index)===0?"active":""}`,style:{marginLeft:12+(I+1)*20},onDragOver:Ne=>V(Ne,J.id,0),onDragLeave:()=>$(null),onDrop:Ne=>re(Ne,J.id,0)}),nt.map((Ne,rt)=>o.jsxs(Wt.Fragment,{children:[O([Ne],I+1,new Set([...G,J.id])),A&&A!==J.id&&A!==Ne.id&&o.jsx("div",{className:`insert-indicator ${(z==null?void 0:z.parentId)===J.id&&(z==null?void 0:z.index)===rt+1?"active":""}`,style:{marginLeft:12+(I+1)*20},onDragOver:qe=>V(qe,J.id,rt+1),onDragLeave:()=>$(null),onDrop:qe=>re(qe,J.id,rt+1)})]},Ne.id))]})]},J.id)})}const ne=new Set(t.agents.flatMap(ie=>"sub_agents"in ie?ie.sub_agents:[])),le=t.agents.filter(ie=>!ne.has(ie.id)),be=le.length>0?le:t.agents;return o.jsxs("div",{className:"agents-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("aside",{className:"agents-sidebar",style:{width:j},children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["Agents (",t.agents.length,")",m.size>0&&o.jsxs("span",{className:"generating-badge",children:[o.jsx(tr,{size:12,className:"spin"})," ",m.size]})]}),o.jsxs("div",{className:"header-buttons",children:[_c.map(({type:ie,icon:I,color:G})=>o.jsx("button",{className:"quick-add-btn",style:{background:G},onClick:()=>R(ie),title:`Add ${ie}`,children:o.jsx(I,{size:14})},ie)),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>p(!0),title:"AI-powered agent setup",children:o.jsx(lc,{size:14})})]})]}),o.jsx("div",{className:"agents-list",ref:q,onDragOver:K,children:t.agents.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Ar,{size:32}),o.jsx("p",{children:"No agents yet"})]}):O(be)})]}),o.jsx("div",{ref:_,className:`sidebar-resizer ${x?"resizing":""}`,onMouseDown:T}),o.jsx("div",{className:"agent-editor-area",children:C?o.jsx($4,{agent:C}):o.jsxs("div",{className:"empty-state card",children:[o.jsx(Ar,{size:48}),o.jsxs("p",{children:["Select an agent to edit",o.jsx("br",{}),"or create a new one"]})]})}),d&&o.jsx("div",{className:"type-selector",onClick:()=>p(!1),children:o.jsxs("div",{className:"quick-setup-content",onClick:ie=>ie.stopPropagation(),children:[o.jsxs("h2",{children:[o.jsx(lc,{size:20})," Quick Agent Setup"]}),o.jsx("p",{className:"quick-setup-desc",children:"Describe what you want this agent to do. Runs in the background - you can start multiple!"}),o.jsxs("div",{className:"quick-setup-form",children:[o.jsx("textarea",{value:f,onChange:ie=>h(ie.target.value),placeholder:"Example: An agent that searches the web for information and summarizes the results. It should be able to search Google and handle multiple queries in parallel.",rows:5,autoFocus:!0,onKeyDown:ie=>{ie.key==="Enter"&&(ie.metaKey||ie.ctrlKey)&&f.trim()&&D()}}),o.jsxs("div",{className:"quick-setup-info",children:[o.jsx("strong",{children:"Available resources:"}),o.jsxs("ul",{children:[o.jsxs("li",{children:[t.app.state_keys.length," state keys"]}),o.jsxs("li",{children:[l.length," MCP servers"]}),o.jsxs("li",{children:[t.custom_tools.length," custom tools"]}),o.jsxs("li",{children:[t.agents.length," existing agents"]})]})]}),o.jsxs("div",{className:"quick-setup-actions",children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>p(!1),children:"Cancel"}),o.jsxs("button",{className:"btn btn-primary",onClick:D,disabled:!f.trim(),children:[o.jsx(lc,{size:14}),"Generate (⌘↵)"]})]})]})]})})]})}var kp="\x1B[0m",jp="\x1B[1m",y1=e=>e instanceof Error?e.message:typeof e=="string"?e:"An unknown error occurred",q4=e=>{let t=y1(e),n=`${jp}[MONACOPILOT ERROR] ${t}${kp}`;return console.error(n),{message:t}},J4=(e,t)=>{console.warn(`${jp}[MONACOPILOT WARN] ${e}${t?`
${y1(t)}`:""}${kp}`)},K4=(e,t,n)=>console.warn(`${jp}[MONACOPILOT DEPRECATED] "${e}" is deprecated${n?` in ${n}`:""}. Please use "${t}" instead. It will be removed in a future version.${kp}`),Ha={report:q4,warn:J4,warnDeprecated:K4},Rm=(e,t,n={})=>{if(t<=0)return"";let r=e.split(`
`),i=r.length;if(t>=i)return e;if(n.truncateDirection==="keepEnd"){let a=r.slice(-t);return a.every(l=>l==="")?`
`.repeat(t):a.join(`
`)}let s=r.slice(0,t);return s.every(a=>a==="")?`
`.repeat(t):s.join(`
`)},G4=100,Y4=!0,v1="onIdle",Q4=!0,X4=120,Z4=400,eE=0,_p=(e,t)=>t.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:e.lineNumber,endColumn:e.column}),tE=(e,t)=>t.getValueInRange({startLineNumber:e.lineNumber,startColumn:e.column,endLineNumber:t.getLineCount(),endColumn:t.getLineMaxColumn(t.getLineCount())}),nE=e=>e.getValue(),rE=class{constructor(e){this.capacity=e,this.head=0,this.tail=0,this.size=0,this.buffer=new Array(e)}enqueue(e){let t;return this.size===this.capacity&&(t=this.dequeue()),this.buffer[this.tail]=e,this.tail=(this.tail+1)%this.capacity,this.size++,t}dequeue(){if(this.size===0)return;let e=this.buffer[this.head];return this.buffer[this.head]=void 0,this.head=(this.head+1)%this.capacity,this.size--,e}getAll(){return this.buffer.filter(e=>e!==void 0)}clear(){this.buffer=new Array(this.capacity),this.head=0,this.tail=0,this.size=0}getSize(){return this.size}isEmpty(){return this.size===0}isFull(){return this.size===this.capacity}},b1=class w1{constructor(){this.cache=new rE(w1.MAX_CACHE_SIZE)}get(t,n){return this.cache.getAll().filter(r=>this.isValidCacheItem(r,t,n))}add(t){t.completion.trim()&&this.cache.enqueue(t)}clear(){this.cache.clear()}isValidCacheItem(t,n,r){let i=t.textBeforeCursor.trim(),s=_p(n,r),a=s,l=r.getLineContent(n.lineNumber);if(n.column===l.length+1&&n.lineNumber<r.getLineCount()){let u=r.getLineContent(n.lineNumber+1);a=`${s}
${u}`}if(!(a.trim().includes(i)||i.includes(a.trim())))return!1;let c=r.getValueInRange(t.range);return this.isPartialMatch(c,t.completion)?this.isPositionValid(t,n):!1}isPartialMatch(t,n){let r=t.trim(),i=n.trim();return i.startsWith(r)||r.startsWith(i)}isPositionValid(t,n){let{range:r}=t,{startLineNumber:i,startColumn:s,endLineNumber:a,endColumn:l}=r,{lineNumber:c,column:u}=n;return c<i||c>a?!1:i===a?u>=s-1&&u<=l+1:c===i?u>=s-1:c===a?u<=l+1:!0}};b1.MAX_CACHE_SIZE=20;var iE=b1,oE=class{constructor(e){this.formattedCompletion="",this.formattedCompletion=e}setCompletion(e){return this.formattedCompletion=e,this}removeInvalidLineBreaks(){return this.formattedCompletion=this.formattedCompletion.trimEnd(),this}removeMarkdownCodeSyntax(){return this.formattedCompletion=this.removeMarkdownCodeBlocks(this.formattedCompletion),this}removeMarkdownCodeBlocks(e){let t=e.split(`
`),n=[],r=!1;for(let i=0;i<t.length;i++){let s=t[i],a=s.trim().startsWith("```");if(a&&!r){r=!0;continue}if(a&&r){r=!1;continue}n.push(s)}return n.join(`
`)}removeExcessiveNewlines(){return this.formattedCompletion=this.formattedCompletion.replace(/\n{3,}/g,`

`),this}build(){return this.formattedCompletion}},sE=class{findOverlaps(e,t,n){if(!e)return{startOverlapLength:0,maxOverlapLength:0};let r=e.length,i=t.length,s=n.length,a=0,l=0,c=0,u=Math.min(r,i);for(let f=1;f<=u;f++){let h=e.substring(0,f),m=t.slice(-f);h===m&&(c=f)}let d=Math.min(r,s);for(let f=0;f<d&&e[f]===n[f];f++)a++;for(let f=1;f<=d;f++)e.slice(-f)===n.slice(0,f)&&(l=f);let p=Math.max(a,l);if(p===0){for(let f=1;f<r;f++)if(n.startsWith(e.substring(f))){p=r-f;break}}return{startOverlapLength:c,maxOverlapLength:p}}},aE=class{constructor(e){this.monaco=e,this.textOverlapCalculator=new sE}computeInsertionRange(e,t,n){if(!t)return this.createEmptyRange(e);let r=n.getOffsetAt(e),i=n.getValue().substring(0,r),s=n.getValue().substring(r);if(r>=n.getValue().length)return this.createEmptyRange(e);if(s.length===0)return this.createEmptyRange(e);let{startOverlapLength:a,maxOverlapLength:l}=this.textOverlapCalculator.findOverlaps(t,i,s),c=a>0?n.getPositionAt(r-a):e,u=r+l,d=n.getPositionAt(u);return new this.monaco.Range(c.lineNumber,c.column,d.lineNumber,d.column)}computeCacheRange(e,t){let n=e.lineNumber,r=e.column,i=t.split(`
`),s=i.length-1,a=n+s,l=s===0?r+i[0].length:i[s].length+1;return new this.monaco.Range(n,r,a,l)}createEmptyRange(e){return new this.monaco.Range(e.lineNumber,e.column,e.lineNumber,e.column)}},lE=async e=>{let{endpoint:t,body:n}=e,r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok)throw new Error(`Error while fetching completion item: ${r.statusText}`);let{completion:i,error:s}=await r.json();return{completion:i,error:s}},cE=({pos:e,mdl:t,options:n})=>{let{filename:r,language:i,technologies:s,relatedFiles:a,maxContextLines:l=G4}=n,c=a&&a.length>0?3:2,u=l?Math.floor(l/c):void 0,d=(b,j,g)=>{let x=b(e,t);return j?Rm(x,j,g):x},p=(b,j)=>!b||!j?b:b.map(({content:g,...x})=>({...x,content:Rm(g,j)})),f=d(_p,u,{truncateDirection:"keepEnd"}),h=d(tE,u,{truncateDirection:"keepStart"}),m=p(a,u);return{filename:r,language:i,technologies:s,relatedFiles:m,textBeforeCursor:f,textAfterCursor:h,cursorPosition:e}},uE=(e,t=300)=>{let n=null,r=null,i=(...s)=>{if(r)return r.args=s,r.promise;let a,l,c=new Promise((u,d)=>{a=u,l=d});return r={args:s,promise:c,resolve:a,reject:l},n&&(clearTimeout(n),n=null),n=setTimeout(async()=>{let u=r;if(u){r=null,n=null;try{let d=await e(...u.args);u.resolve(d)}catch(d){u.reject(d)}}},t),c};return i.cancel=()=>{n&&(clearTimeout(n),n=null),r&&(r.reject(new Error("Cancelled")),r=null)},i},dE=e=>typeof e=="string"?e==="Cancelled"||e==="AbortError":e instanceof Error?e.message==="Cancelled"||e.name==="AbortError":!1,eo=e=>({items:e,enableForwardStability:!0}),Wu=new iE,pE=async({monaco:e,mdl:t,pos:n,token:r,isCompletionAccepted:i,options:s})=>{let{trigger:a=v1,enableCaching:l=Y4,allowFollowUpCompletions:c=Q4,onError:u,requestHandler:d}=s;if(l&&!i){let p=Wu.get(n,t).map(f=>({insertText:f.completion,range:f.range}));if(p.length>0)return eo(p)}if(r.isCancellationRequested||!c&&i)return eo([]);try{let p=uE(async m=>{var j,g;(j=s.onCompletionRequested)==null||j.call(s,m);let b;if(d)b=await d(m);else if(s.endpoint)b=await lE({endpoint:s.endpoint,...m});else throw new Error('No endpoint specified for completion request. Please set the "endpoint" option in registerCompletion, or provide a custom requestHandler.');if(b.error)throw new Error(b.error);return(g=s.onCompletionRequestFinished)==null||g.call(s,m,b),b},{onTyping:X4,onIdle:Z4,onDemand:eE}[a]);r.onCancellationRequested(()=>{p.cancel()});let f=cE({pos:n,mdl:t,options:s}),{completion:h}=await p({body:{completionMetadata:f}});if(h){let m=new oE(h).removeMarkdownCodeSyntax().removeExcessiveNewlines().removeInvalidLineBreaks().build(),b=new aE(e);return l&&Wu.add({completion:m,range:b.computeCacheRange(n,m),textBeforeCursor:_p(n,t)}),eo([{insertText:m,range:b.computeInsertionRange(n,m,t)}])}}catch(p){if(dE(p))return eo([]);u?u(p):Ha.warn("Cannot provide completion",p)}return eo([])},Sp=new WeakMap,_l=e=>Sp.get(e),fE=(e,t)=>{Sp.set(e,t)},Im=e=>{Sp.delete(e)},hE=e=>({isCompletionAccepted:!1,isCompletionVisible:!1,isExplicitlyTriggered:!1,hasRejectedCurrentCompletion:!1,options:e}),mE=(e,t)=>{let n=_l(e);!n||!n.options||(n.options={...n.options,...t})},gE=(e,t,n)=>{let r=_l(t);return r?e.languages.registerInlineCompletionsProvider(n.language,{provideInlineCompletions:(i,s,a,l)=>{if(i!==t.getModel())return{items:[]};let c=r.options||n;if(!(c.trigger==="onDemand"&&!r.isExplicitlyTriggered||c.triggerIf&&!c.triggerIf({text:nE(t),position:s,triggerType:c.trigger??v1})))return pE({monaco:e,mdl:i,pos:s,token:l,isCompletionAccepted:r.isCompletionAccepted,options:c})},handleItemDidShow:(i,s,a)=>{var l,c;r.isExplicitlyTriggered=!1,r.hasRejectedCurrentCompletion=!1,!r.isCompletionAccepted&&(r.isCompletionVisible=!0,(c=(l=r.options||n).onCompletionShown)==null||c.call(l,a,s.range))},freeInlineCompletions:()=>{}}):null},xE={TAB:(e,t)=>t.keyCode===e.KeyCode.Tab,CMD_RIGHT_ARROW:(e,t)=>t.keyCode===e.KeyCode.RightArrow&&t.metaKey},yE=class{constructor(e,t,n){this.monaco=e,this.state=t,this.initialOptions=n}handleKeyEvent(e){let t=this.state.options||this.initialOptions,n={monaco:this.monaco,event:e,state:this.state,options:t};this.handleCompletionAcceptance(n),this.handleCompletionRejection(n)}handleCompletionAcceptance(e){var t,n;return e.state.isCompletionVisible&&this.isAcceptanceKey(e.event)?((n=(t=e.options).onCompletionAccepted)==null||n.call(t),e.state.isCompletionAccepted=!0,e.state.isCompletionVisible=!1,!0):(e.state.isCompletionAccepted=!1,!1)}handleCompletionRejection(e){var t,n;return this.shouldRejectCompletion(e)?((n=(t=e.options).onCompletionRejected)==null||n.call(t),e.state.hasRejectedCurrentCompletion=!0,!0):!1}shouldRejectCompletion(e){return e.state.isCompletionVisible&&!e.state.hasRejectedCurrentCompletion&&!e.state.isCompletionAccepted&&!this.isAcceptanceKey(e.event)}isAcceptanceKey(e){return Object.values(xE).some(t=>t(this.monaco,e))}},vE=(e,t,n,r)=>{let i=new yE(e,n,r);return t.onKeyDown(s=>i.handleKeyEvent(s))},k1=(e,t,n)=>{let r=[];fE(t,hE(n)),t.updateOptions({inlineSuggest:{enabled:!0}});try{let i=_l(t);if(!i)return Ha.warn("Completion is not registered properly. State not found."),wE();let s=gE(e,t,n);s&&r.push(s);let a=vE(e,t,i,n);return r.push(a),{deregister:()=>{for(let l of r)l.dispose();Wu.clear(),Im(t)},trigger:()=>bE(t),updateOptions:l=>{mE(t,l(i.options||n))}}}catch(i){return n.onError?n.onError(i):Ha.report(i),{deregister:()=>{for(let s of r)s.dispose();Im(t)},trigger:()=>{},updateOptions:()=>{}}}},bE=e=>{let t=_l(e);if(!t){Ha.warn("Completion is not registered. Use `registerCompletion` to register completion first.");return}t.isExplicitlyTriggered=!0,e.trigger("keyboard","editor.action.inlineSuggest.trigger",{})},wE=()=>({deregister:()=>{},trigger:()=>{},updateOptions:()=>{}});function kE(){return`tool_${Date.now().toString(36)}`}function jE(e){return/^[a-zA-Z0-9_]+$/.test(e)}const _E=`def my_tool(tool_context: ToolContext, param1: str) -> dict:
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
`;function SE({onSelectTool:e}){const{project:t,updateProject:n,addCustomTool:r,updateCustomTool:i,removeCustomTool:s,selectedToolId:a,setSelectedToolId:l,builtinTools:c,mcpServers:u}=gt(),[d,p]=k.useState(""),[f,h]=k.useState(null),[m,b]=k.useState("tools"),[j,g]=k.useState(null),[x,v]=k.useState(""),[_,A]=k.useState(!1),[S,M]=k.useState(!1),[E,U]=k.useState(!1),[z,$]=k.useState(null),[q,Y]=k.useState(null),[T,P]=k.useState({}),[D,C]=k.useState({}),[L,R]=k.useState("");if(!t)return null;const w=t.mcp_servers||[],W=t.custom_tools.find(B=>B.id===a),K=w.find(B=>B.name===j);function y(B){l(B),e==null||e(B)}k.useEffect(()=>{W&&(p(W.code),Y(null))},[a]),k.useEffect(()=>{K&&(v(JSON.stringify(K,null,2)),A(!1))},[j]),k.useEffect(()=>{if(!t)return;const B=N(t.mcp_servers||[]);R(JSON.stringify(B,null,2))},[t==null?void 0:t.mcp_servers]),k.useEffect(()=>{if(m==="mcp"&&w.length>0){const B=w.filter(Z=>!T[Z.name]||T[Z.name]==="unknown");B.length>0&&B.forEach(Z=>{me(Z.name)})}},[m,w.length]);function N(B){const Z={};for(const se of B){const ge={};se.connection_type==="stdio"?(ge.command=se.command||"",ge.args=se.args||[],Object.keys(se.env||{}).length>0&&(ge.env=se.env)):se.connection_type==="sse"&&(ge.url=se.url||"",Object.keys(se.headers||{}).length>0&&(ge.headers=se.headers)),se.timeout&&se.timeout!==30&&(ge.timeout=se.timeout),se.tool_filter&&(ge.tool_filter=se.tool_filter),se.tool_name_prefix&&(ge.tool_name_prefix=se.tool_name_prefix),Z[se.name]=ge}return{mcpServers:Z}}function V(B){const Z=[];for(const[se,ge]of Object.entries(B.mcpServers||{})){const X={name:se,description:ge.description||"",connection_type:ge.url?"sse":"stdio",command:ge.command,args:ge.args||[],env:ge.env||{},url:ge.url,headers:ge.headers||{},timeout:ge.timeout||30,tool_filter:ge.tool_filter||null,tool_name_prefix:ge.tool_name_prefix};Z.push(X)}return Z}function re(B){B!==void 0&&R(B)}function fe(){try{const B=JSON.parse(L),Z=V(B);n({mcp_servers:Z})}catch(B){alert("Invalid JSON: "+B.message)}}async function me(B){const Z=w.find(se=>se.name===B);if(Z){P(se=>({...se,[B]:"testing"})),C(se=>({...se,[B]:""}));try{const se=await Eu({connection_type:Z.connection_type,command:Z.command,args:Z.args,env:Z.env,url:Z.url,headers:Z.headers,timeout:Z.timeout});P(ge=>({...ge,[B]:se.success?"connected":"error"})),!se.success&&se.error&&C(ge=>({...ge,[B]:se.error||"Unknown error"}))}catch(se){P(ge=>({...ge,[B]:"error"})),C(ge=>({...ge,[B]:se.message}))}}}function ee(B){const Z=u.find(ge=>ge.name===B);if(!Z)return;if(w.some(ge=>ge.name===B)){alert(`Server "${B}" is already configured`);return}const se={name:Z.name,description:Z.description||"",connection_type:Z.connection_type,command:Z.command,args:Z.args||[],env:Z.env||{},url:Z.url,headers:Z.headers||{},timeout:Z.timeout||30,tool_filter:Z.tool_filter||null,tool_name_prefix:Z.tool_name_prefix};n({mcp_servers:[...w,se]})}async function F(){for(const B of w)await me(B.name)}function Q(){const B=kE();r({id:B,name:"new_tool",description:"",module_path:"tools.custom",code:_E,state_keys_used:[]}),y(B)}function te(B,Z){Z.stopPropagation(),confirm("Delete this tool?")&&(s(B),a===B&&(e==null||e(null)))}function O(B){W&&(B.name!==void 0&&(B.name===""||jE(B.name)?Y(null):Y("Name can only contain letters, numbers, and underscores")),i(W.id,B))}function ne(B){B!==void 0&&W&&(p(B),O({code:B}))}async function le(){if(W){M(!0);try{const B=await av(t.id,W.name,W.description,W.state_keys_used);B.success&&B.code?(p(B.code),O({code:B.code})):(console.error("Failed to generate tool code:",B.error),alert("Failed to generate tool code: "+(B.error||"Unknown error")))}catch(B){console.error("Error generating tool code:",B),alert("Error generating tool code: "+B.message)}finally{M(!1)}}}const be=k.useRef(null),ie=k.useCallback((B,Z)=>{if(be.current&&typeof be.current=="function")try{be.current()}catch{}try{const se=k1(Z,B,{language:"python",endpoint:"/api/code-completion",trigger:"onTyping"});typeof se=="function"?be.current=se:be.current=null}catch{be.current=null}},[]);k.useEffect(()=>()=>{if(be.current&&typeof be.current=="function")try{be.current()}catch{}},[]);function I(B){B!==void 0&&(v(B),A(B!==JSON.stringify(K,null,2)))}function G(){if(K)try{const B=JSON.parse(x),Z=K.name,se=w.map(ge=>ge.name===Z?B:ge);n({mcp_servers:se}),g(B.name),A(!1)}catch(B){alert("Invalid JSON: "+B.message)}}async function J(){U(!0),$(null);try{const B=JSON.parse(x),Z=await Eu({connection_type:B.connection_type,command:B.command,args:B.args,env:B.env,url:B.url,headers:B.headers,timeout:B.timeout||30});if($(Z),Z.success&&Z.tools.length>0){const se={...B,tool_filter:Z.tools.map(ge=>ge.name)};v(JSON.stringify(se,null,2)),A(!0)}}catch(B){$({success:!1,tools:[],error:B.message})}finally{U(!1)}}const oe={};return t.custom_tools.forEach(B=>{const Z=B.module_path||"tools";oe[Z]||(oe[Z]=[]),oe[Z].push(B)}),o.jsxs("div",{className:"tools-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("aside",{className:"tools-sidebar",children:[o.jsxs("div",{className:"sidebar-tabs",children:[o.jsxs("button",{className:`sidebar-tab ${m==="tools"?"active":""}`,onClick:()=>{b("tools"),g(null)},children:[o.jsx(pn,{size:14}),"Tools"]}),o.jsxs("button",{className:`sidebar-tab ${m==="mcp"?"active":""}`,onClick:()=>{b("mcp"),l(null),h(null),g(null)},children:[o.jsx(Yi,{size:14}),"MCP"]})]}),m==="tools"?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["Custom Tools (",t.custom_tools.length,")"]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:Q,children:[o.jsx(Qe,{size:14}),"New"]})]}),o.jsxs("div",{className:"tools-tree",children:[c.length>0&&o.jsxs("div",{className:"module-group",children:[o.jsxs("div",{className:"module-header",children:[o.jsx(_j,{size:14}),"Built-in Tools"]}),c.map(B=>o.jsxs("div",{className:`tool-item builtin ${(f==null?void 0:f.name)===B.name?"selected":""}`,onClick:()=>{h(B),y(null),g(null)},children:[o.jsx(Tu,{size:14}),o.jsx("span",{className:"tool-name",children:B.name})]},B.name))]}),t.custom_tools.length===0&&c.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(_n,{size:32}),o.jsx("p",{children:"No tools defined yet"})]}):t.custom_tools.length>0&&Object.entries(oe).map(([B,Z])=>o.jsxs("div",{className:"module-group",children:[o.jsxs("div",{className:"module-header",children:[o.jsx(xv,{size:14}),B]}),Z.map(se=>o.jsxs("div",{className:`tool-item ${a===se.id?"selected":""}`,onClick:()=>{y(se.id),h(null),g(null)},children:[o.jsx(pn,{size:14}),o.jsx("span",{className:"tool-name",children:se.name}),o.jsx("button",{className:"delete-btn",onClick:ge=>te(se.id,ge),children:o.jsx(Ue,{size:14})})]},se.id))]},B))]})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["MCP Servers (",w.length,")"]}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:F,title:"Test all server connections",children:o.jsx(Zt,{size:14})})]}),o.jsx("div",{className:"mcp-servers-list",children:w.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Yi,{size:32}),o.jsx("p",{children:"No MCP servers configured"}),o.jsx("p",{style:{fontSize:"12px",color:"var(--text-muted)"},children:"Edit the JSON to add servers"})]}):w.map(B=>{const Z=T[B.name]||"unknown",se=D[B.name];return o.jsxs("div",{className:"mcp-server-item-wrapper",children:[o.jsxs("div",{className:"mcp-server-item",children:[o.jsxs("div",{className:"mcp-server-info",children:[o.jsx(Yi,{size:14}),o.jsx("span",{className:"mcp-server-name",children:B.name}),o.jsxs("span",{className:`mcp-status-badge ${Z}`,children:[Z==="testing"?o.jsx(tr,{size:10,className:"spin"}):null,Z==="unknown"&&"●",Z==="connected"&&"●",Z==="error"&&"●"]})]}),o.jsxs("div",{className:"mcp-server-actions",children:[o.jsx("span",{className:"mcp-server-type",children:B.connection_type}),o.jsxs("button",{className:"btn btn-sm",onClick:()=>me(B.name),disabled:Z==="testing",title:"Test server connection",style:{display:"flex",alignItems:"center",gap:4},children:[Z==="testing"?o.jsx(tr,{size:12,className:"spin"}):o.jsx(Zt,{size:12}),o.jsx("span",{style:{fontSize:11},children:"Test"})]})]})]}),Z==="error"&&se&&o.jsxs("div",{className:"mcp-server-error",children:[o.jsx("span",{style:{fontWeight:500,color:"var(--error)"},children:"Error:"})," ",se]})]},B.name)})})]})]}),o.jsx("div",{className:"tool-editor",children:f?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(Tu,{size:20,style:{color:"var(--accent-secondary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:f.name}),o.jsx("span",{className:"badge badge-muted",children:"Built-in"})]}),o.jsxs("div",{className:"builtin-tool-info",children:[o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("p",{children:f.description||"No description available."})]}),o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Usage"}),o.jsx("p",{children:"This is a built-in tool provided by ADK. Add it to any LLM agent's tools list to enable it."}),o.jsxs("code",{children:['tools: ["',f.name,'"]']})]}),o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Note"}),o.jsx("p",{children:"Built-in tools are read-only and cannot be modified. Create a custom tool if you need different behavior."})]})]})]}):W?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(pn,{size:20,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o.jsx("input",{type:"text",value:W.name,onChange:B=>O({name:B.target.value}),placeholder:"Tool name",style:{borderColor:q?"var(--error)":void 0}}),q&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:q})]})]}),o.jsxs("div",{className:"editor-meta",children:[o.jsxs("div",{className:"meta-field grow",children:[o.jsx("label",{children:"Description"}),o.jsx("input",{type:"text",value:W.description,onChange:B=>O({description:B.target.value}),placeholder:"What does this tool do?"})]}),o.jsxs("div",{className:"meta-field",children:[o.jsx("label",{children:"Module Path"}),o.jsx("input",{type:"text",value:W.module_path,onChange:B=>O({module_path:B.target.value}),placeholder:"tools.custom",style:{width:180}})]})]}),o.jsxs("div",{className:"code-actions",children:[o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:le,disabled:S||!W.name||!W.description,title:!W.name||!W.description?"Add a name and description first":"Generate code using AI",children:S?o.jsxs(o.Fragment,{children:[o.jsx(tr,{size:14,className:"spinning"}),"Generating..."]}):o.jsxs(o.Fragment,{children:[o.jsx(ip,{size:14}),"Write Tool"]})}),o.jsx("span",{className:"action-hint",children:"AI will generate code based on the tool name, description, and selected state keys"})]}),o.jsx("div",{className:"code-editor",children:o.jsx(en,{height:"100%",language:"python",theme:"vs-dark",value:d,onChange:ne,onMount:ie,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12}}})}),o.jsxs("div",{className:"state-keys-panel",children:[o.jsxs("h4",{children:[o.jsx(np,{size:14})," State Keys Used"]}),o.jsx("div",{className:"state-key-chips",children:t.app.state_keys.length===0?o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"No state keys defined. Add them in App Config."}):t.app.state_keys.map(B=>{const Z=W.state_keys_used.includes(B.name);return o.jsxs("label",{className:`state-key-chip ${Z?"selected":""}`,title:B.description,children:[o.jsx("input",{type:"checkbox",checked:Z,onChange:se=>{const ge=se.target.checked?[...W.state_keys_used,B.name]:W.state_keys_used.filter(X=>X!==B.name);O({state_keys_used:ge})}}),B.name,o.jsxs("span",{style:{color:"var(--text-muted)",fontSize:11},children:["(",B.type,")"]})]},B.name)})})]})]}):K?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(Yi,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:K.name}),o.jsx("span",{className:"badge badge-info",children:K.connection_type}),_&&o.jsx("span",{className:"unsaved-badge",children:"Unsaved"}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:J,disabled:E,title:"Test connection and discover available tools",children:[E?o.jsx(tr,{size:14,className:"spin"}):o.jsx(tp,{size:14}),E?"Testing...":"Test Connection"]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:G,disabled:!_,children:[o.jsx(Ba,{size:14}),"Save"]})]}),z&&o.jsx("div",{className:`mcp-test-result ${z.success?"success":"error"}`,children:z.success?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"test-result-header",children:["✓ Connected! Found ",z.tools.length," tools"]}),z.tools.length>0&&o.jsxs("div",{className:"test-result-tools",children:[o.jsx("strong",{children:"Available tools:"}),o.jsx("ul",{children:z.tools.map(B=>o.jsxs("li",{children:[o.jsx("code",{children:B.name}),B.description&&o.jsxs("span",{children:[" — ",B.description]})]},B.name))}),o.jsx("p",{className:"hint",children:'The tool_filter has been updated with these tools. Click "Save" to apply.'})]})]}):o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"test-result-header",children:"✗ Connection failed"}),o.jsx("div",{className:"test-result-error",children:z.error})]})}),o.jsx("div",{className:"mcp-info",children:o.jsx("p",{children:'Configure your MCP server using JSON. Click "Test Connection" to verify and discover available tools.'})}),o.jsx("div",{className:"code-editor",children:o.jsx(en,{height:"100%",language:"json",theme:"vs-dark",value:x,onChange:I,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},formatOnPaste:!0}})}),o.jsxs("div",{className:"mcp-help",children:[o.jsx("h4",{children:"Schema Reference"}),o.jsxs("div",{className:"schema-fields",children:[o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"name"}),o.jsx("span",{children:"Unique identifier for this server"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"description"}),o.jsx("span",{children:"Human-readable description"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"connection_type"}),o.jsx("span",{children:'"stdio" | "sse" | "http"'})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"command"}),o.jsx("span",{children:"Command to run (for stdio)"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"args"}),o.jsx("span",{children:"Array of command arguments"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"env"}),o.jsx("span",{children:"Environment variables object"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"url"}),o.jsx("span",{children:"Server URL (for sse/http)"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"tool_filter"}),o.jsx("span",{children:"Array of tool names to include (null/omit = all tools, [] = no tools)"})]})]})]})]}):m==="mcp"?o.jsxs("div",{className:"mcp-json-editor",children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(Yi,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:"mcp.json"}),o.jsx("span",{className:"badge badge-muted",children:"Model Context Protocol"}),o.jsxs("select",{value:"",onChange:B=>{B.target.value&&ee(B.target.value)},style:{padding:"6px 10px",fontSize:"12px",borderRadius:"6px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",color:"var(--text-primary)"},children:[o.jsx("option",{value:"",children:"+ Add known server..."}),u.filter(B=>!w.some(Z=>Z.name===B.name)).map(B=>o.jsxs("option",{value:B.name,children:[B.name," - ",B.description||"No description"]},B.name))]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:fe,children:[o.jsx(Ba,{size:14}),"Apply Changes"]})]}),o.jsx("div",{className:"mcp-json-info",children:o.jsxs("p",{children:["Configure your MCP servers using the standard ",o.jsx("code",{children:"mcp.json"})," format. Select a known server from the dropdown to add its configuration."]})}),o.jsx("div",{className:"editor-content",style:{flex:1},children:o.jsx(en,{height:"100%",defaultLanguage:"json",value:L,onChange:re,theme:"vs-dark",options:{minimap:{enabled:!1},fontSize:14,lineNumbers:"on",scrollBeyondLastLine:!1,wordWrap:"on",tabSize:2,formatOnPaste:!0,formatOnType:!0}})})]}):o.jsxs("div",{className:"empty-state",children:[o.jsx(_n,{size:48}),o.jsxs("p",{children:["Select a tool to view",o.jsx("br",{}),"or create a new custom tool"]})]})})]})}function CE(){return`callback_${Date.now().toString(36)}`}function Om(e){return/^[a-zA-Z0-9_]+$/.test(e)}function j1(e){switch(e){case"before_agent":case"after_agent":return`from google.adk.agents.callback_context import CallbackContext
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
`;default:return j1("before_agent")}}function NE({onSelectCallback:e}){var E,U;const{project:t,updateProject:n,addCustomCallback:r,updateCustomCallback:i,removeCustomCallback:s}=gt(),[a,l]=k.useState(""),[c,u]=k.useState(null),[d,p]=k.useState(null),[f,h]=k.useState(!1),m=k.useRef(null);if(!t)return null;const b=t.custom_callbacks||[],j=b.find(z=>z.id===c);function g(z){u(z),e==null||e(z)}k.useEffect(()=>{j?(l(j.code),p(null)):l("")},[c,j]);function x(){const z=CE(),$="new_callback",q={id:z,name:$,description:"",module_path:`callbacks.${$}`,code:j1("before_agent"),state_keys_used:[]};r(q),g(z)}function v(z,$){$.stopPropagation(),confirm("Delete this callback?")&&(s(z),c===z&&(e==null||e(null),u(null),l("")))}function _(){if(!c)return;const z=b.find(Y=>Y.id===c);if(!z)return;const $=z.name.trim();if(!$){alert("Please enter a name");return}if(!Om($)){p("Name must contain only alphanumeric characters and underscores");return}if(b.find(Y=>Y.name===$&&Y.id!==z.id)){p("A callback with this name already exists");return}i(z.id,{code:a,name:$,description:z.description,module_path:`callbacks.${$}`,state_keys_used:z.state_keys_used}),p(null)}function A(z,$){m.current=$;try{k1($,{endpoint:"/api/code-completion",language:"python"})}catch(q){console.warn("Failed to register Monacopilot completion:",q)}}async function S(){if(j){h(!0);try{let z="before_agent";const $=j.name.toLowerCase(),q=j.description.toLowerCase();$.includes("after_agent")||q.includes("after agent")?z="after_agent":$.includes("before_model")||q.includes("before model")?z="before_model":$.includes("after_model")||q.includes("after model")?z="after_model":$.includes("before_tool")||q.includes("before tool")?z="before_tool":$.includes("after_tool")||q.includes("after tool")?z="after_tool":($.includes("before_agent")||q.includes("before agent"))&&(z="before_agent");const Y=await lv(t.id,j.name,j.description,z,j.state_keys_used);Y.success&&Y.code?(l(Y.code),i(j.id,{code:Y.code})):(console.error("Failed to generate callback code:",Y.error),alert("Failed to generate callback code: "+(Y.error||"Unknown error")))}catch(z){console.error("Error generating callback code:",z),alert("Error generating callback code: "+z.message)}finally{h(!1)}}}const M=((U=(E=t.app)==null?void 0:E.state_keys)==null?void 0:U.map(z=>z.name))||[];return o.jsxs("div",{className:"tools-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"tools-sidebar",children:[o.jsxs("div",{className:"tools-sidebar-header",children:[o.jsx("h3",{children:"Callbacks"}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:x,title:"Add Callback",children:o.jsx(Qe,{size:16})})]}),o.jsx("div",{className:"tools-list",children:b.length===0?o.jsx("div",{style:{padding:"16px",color:"var(--text-secondary)",fontSize:"14px"},children:"No callbacks yet. Click + to add one."}):b.map(z=>o.jsxs("div",{className:`tool-item ${c===z.id?"selected":""}`,onClick:()=>g(z.id),children:[o.jsxs("div",{style:{flex:1},children:[o.jsx("div",{className:"tool-item-name",children:z.name}),z.description&&o.jsx("div",{className:"tool-item-type",style:{fontSize:"11px",color:"var(--text-secondary)",marginTop:"2px"},children:z.description})]}),o.jsx("div",{className:"tool-item-actions",children:o.jsx("button",{className:"btn btn-icon btn-sm",onClick:$=>v(z.id,$),title:"Delete",children:o.jsx(Ue,{size:14})})})]},z.id))})]}),o.jsx("div",{className:"tools-editor",children:j?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"tools-editor-header",children:[o.jsx("h3",{children:"Edit Callback"}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:_,children:[o.jsx(Ba,{size:16,style:{marginRight:"6px"}}),"Save"]})]}),o.jsxs("div",{className:"tools-editor-content",style:{padding:"16px",overflowY:"auto"},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Name"}),o.jsx("input",{type:"text",value:j.name,onChange:z=>{const $=z.target.value;i(j.id,{name:$,module_path:`callbacks.${$.trim()||"callback"}`}),d&&Om($)&&p(null)},className:d?"error":""}),d&&o.jsx("div",{className:"error-message",children:d})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Description"}),o.jsx("textarea",{value:j.description,onChange:z=>i(j.id,{description:z.target.value}),rows:2,placeholder:"Describe what this callback does..."})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Module Path"}),o.jsx("input",{type:"text",value:j.module_path,onChange:z=>i(j.id,{module_path:z.target.value}),placeholder:"callbacks.custom"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"State Keys Used"}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"8px"},children:M.map(z=>{const $=j.state_keys_used.includes(z);return o.jsxs("button",{type:"button",className:`btn btn-sm ${$?"btn-primary":"btn-secondary"}`,onClick:()=>{const q=$?j.state_keys_used.filter(Y=>Y!==z):[...j.state_keys_used,z];i(j.id,{state_keys_used:q})},children:[o.jsx(np,{size:12,style:{marginRight:"4px"}}),z]},z)})}),M.length===0&&o.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"12px",marginTop:"4px"},children:"No state keys defined in App Config"})]}),o.jsxs("div",{className:"form-group",children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[o.jsx("label",{children:"Code"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:S,disabled:f||!j.name,title:j.name?"Generate code using AI":"Add a name first",children:f?o.jsxs(o.Fragment,{children:[o.jsx(tr,{size:14,className:"spinning"}),"Generating..."]}):o.jsxs(o.Fragment,{children:[o.jsx(ip,{size:14}),"Generate"]})})]}),o.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"8px"},children:"AI will generate code based on the callback name, description, and selected state keys"}),o.jsx("div",{className:"code-editor-container",children:o.jsx(en,{height:"100%",language:"python",theme:"vs-dark",value:a,onChange:z=>l(z||""),onMount:A,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0}})})]})]})]}):o.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)"},children:"Select a callback to edit, or create a new one"})})]})}function EE(e){try{const t=new URL(e),n=t.host,r=t.pathname,i=[{pattern:n,label:`${n} (exact domain)`},{pattern:`${n}/*`,label:`${n}/* (domain + any path)`}],s=n.split(".");if(s.length>2){const a=s.slice(-2).join(".");i.push({pattern:`*.${a}`,label:`*.${a} (all subdomains)`})}if(r&&r!=="/"){const a=r.split("/").filter(Boolean);a.length>0&&i.push({pattern:`${n}/${a[0]}/*`,label:`${n}/${a[0]}/* (specific path)`})}return i}catch{return[{pattern:e,label:e}]}}const Re={overlay:{position:"fixed",inset:0,backgroundColor:"rgba(0, 0, 0, 0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999},dialog:{backgroundColor:"#12121a",border:"1px solid rgba(245, 158, 11, 0.5)",borderRadius:8,boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.5)",width:500,maxWidth:"90vw",overflow:"hidden"},header:{display:"flex",alignItems:"center",gap:8,padding:12,borderBottom:"1px solid #374151",backgroundColor:"rgba(120, 53, 15, 0.2)"},headerIcon:{color:"#fbbf24"},headerTitle:{fontWeight:600,color:"#fcd34d",fontSize:14},closeButton:{marginLeft:"auto",background:"none",border:"none",color:"#6b7280",cursor:"pointer",padding:4,display:"flex",alignItems:"center"},content:{padding:16,display:"flex",flexDirection:"column",gap:16},sourceText:{fontSize:13,color:"#9ca3af"},requestBox:{backgroundColor:"#0a0a0f",borderRadius:6,border:"1px solid #374151",padding:12,fontFamily:"'SF Mono', 'Consolas', monospace",fontSize:13},methodBadge:e=>({fontWeight:700,color:e==="POST"?"#4ade80":e==="GET"?"#60a5fa":"#9ca3af",marginRight:8}),urlText:{color:"#d1d5db",wordBreak:"break-all"},headersText:{marginTop:8,fontSize:11,color:"#6b7280"},label:{fontSize:13,color:"#9ca3af",marginBottom:6},select:{width:"100%",padding:"10px 12px",backgroundColor:"#1a1a24",border:"1px solid #4b5563",borderRadius:6,fontSize:13,color:"#e5e7eb",cursor:"pointer",appearance:"none",backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 12px center",paddingRight:36},customInput:{width:"100%",padding:"10px 12px",backgroundColor:"#1a1a24",border:"1px solid #4b5563",borderRadius:6,fontSize:13,color:"#e5e7eb",fontFamily:"'SF Mono', 'Consolas', monospace"},radioGroup:{display:"flex",gap:16,marginTop:8},radioLabel:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"#9ca3af",cursor:"pointer"},backLink:{marginLeft:"auto",fontSize:12,color:"#6b7280",background:"none",border:"none",cursor:"pointer"},checkboxLabel:{display:"flex",alignItems:"center",gap:8,fontSize:13,color:"#9ca3af",cursor:"pointer"},footer:{display:"flex",alignItems:"center",gap:8,padding:12,borderTop:"1px solid #374151",backgroundColor:"#0a0a0f"},button:e=>{const t={display:"flex",alignItems:"center",gap:6,padding:"8px 16px",borderRadius:6,fontSize:13,fontWeight:500,cursor:"pointer",border:"1px solid",transition:"all 0.15s ease"};switch(e){case"deny":return{...t,backgroundColor:"rgba(220, 38, 38, 0.2)",borderColor:"rgba(239, 68, 68, 0.5)",color:"#f87171"};case"once":return{...t,backgroundColor:"rgba(75, 85, 99, 0.2)",borderColor:"rgba(107, 114, 128, 0.5)",color:"#d1d5db"};case"pattern":return{...t,backgroundColor:"rgba(22, 163, 74, 0.2)",borderColor:"rgba(34, 197, 94, 0.5)",color:"#4ade80"}}},timerContainer:{marginLeft:"auto",display:"flex",alignItems:"center",gap:6,color:"#6b7280",fontSize:13},progressBar:{height:3,backgroundColor:"#1f2937"},progressFill:e=>({height:"100%",backgroundColor:"#f59e0b",transition:"width 1s linear",width:`${e}%`})};function zE({request:e,timeout:t,onApprove:n,onDeny:r,onClose:i}){const[s,a]=k.useState(""),[l,c]=k.useState("exact"),[u,d]=k.useState(!1),[p,f]=k.useState(""),[h,m]=k.useState(!1),[b,j]=k.useState(t),g=EE(e.url);k.useEffect(()=>{g.length>0&&!s&&a(g[0].pattern)},[g,s]),k.useEffect(()=>{const M=setInterval(()=>{j(E=>E<=1?(r(),0):E-1)},1e3);return()=>clearInterval(M)},[r]);const x=k.useCallback(()=>{n()},[n]),v=k.useCallback(()=>{n(h?p:s,l,u)},[n,h,p,s,l,u]),_=b/t*100,A=e.source.startsWith("mcp:"),S=A?e.source.substring(4):"agent";return o.jsx("div",{style:Re.overlay,children:o.jsxs("div",{style:Re.dialog,children:[o.jsxs("div",{style:Re.header,children:[o.jsx(Xd,{size:18,style:Re.headerIcon}),o.jsx("span",{style:Re.headerTitle,children:"Network Request Approval"}),o.jsx("button",{style:Re.closeButton,onClick:i,children:o.jsx(Wr,{size:16})})]}),o.jsxs("div",{style:Re.content,children:[o.jsx("div",{style:Re.sourceText,children:A?o.jsxs(o.Fragment,{children:['MCP server "',o.jsx("span",{style:{color:"#22d3ee"},children:S}),'" wants to connect to:']}):o.jsx(o.Fragment,{children:"Agent wants to connect to:"})}),o.jsxs("div",{style:Re.requestBox,children:[o.jsxs("div",{children:[o.jsx("span",{style:Re.methodBadge(e.method),children:e.method}),o.jsx("span",{style:Re.urlText,children:e.url})]}),e.headers&&Object.keys(e.headers).length>0&&o.jsxs("div",{style:Re.headersText,children:["Headers: ",Object.keys(e.headers).join(", ")]})]}),o.jsxs("div",{children:[o.jsx("div",{style:Re.label,children:"Allow pattern:"}),h?o.jsxs("div",{children:[o.jsx("input",{type:"text",value:p,onChange:M=>f(M.target.value),placeholder:"e.g., *.example.com/*",style:Re.customInput}),o.jsxs("div",{style:Re.radioGroup,children:[o.jsxs("label",{style:Re.radioLabel,children:[o.jsx("input",{type:"radio",checked:l==="wildcard",onChange:()=>c("wildcard")}),"Wildcard"]}),o.jsxs("label",{style:Re.radioLabel,children:[o.jsx("input",{type:"radio",checked:l==="regex",onChange:()=>c("regex")}),"Regex"]}),o.jsx("button",{onClick:()=>m(!1),style:Re.backLink,children:"← Back to suggestions"})]})]}):o.jsxs("select",{value:s,onChange:M=>{M.target.value==="__custom__"?(m(!0),f(s)):a(M.target.value)},style:Re.select,children:[g.map(M=>o.jsx("option",{value:M.pattern,children:M.label},M.pattern)),o.jsx("option",{value:"__custom__",children:"Custom pattern..."})]})]}),o.jsxs("label",{style:Re.checkboxLabel,children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:u,onChange:M=>d(M.target.checked)}),o.jsx("span",{className:"toggle-slider"})]}),"Save to project (persists across sessions)"]})]}),o.jsxs("div",{style:Re.footer,children:[o.jsxs("button",{onClick:r,style:Re.button("deny"),children:[o.jsx(hj,{size:14}),"Deny"]}),o.jsxs("button",{onClick:x,style:Re.button("once"),children:[o.jsx(Zd,{size:14}),"Allow Once"]}),o.jsxs("button",{onClick:v,style:Re.button("pattern"),children:[o.jsx(jv,{size:14}),"Allow Pattern"]}),o.jsxs("div",{style:Re.timerContainer,children:[o.jsx(Ei,{size:14}),o.jsxs("span",{children:[b,"s"]})]})]}),o.jsx("div",{style:Re.progressBar,children:o.jsx("div",{style:Re.progressFill(_)})})]})})}var TE={value:()=>{}};function us(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new ca(n)}function ca(e){this._=e}function AE(e,t){return e.trim().split(/^|\s+/).map(function(n){var r="",i=n.indexOf(".");if(i>=0&&(r=n.slice(i+1),n=n.slice(0,i)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}ca.prototype=us.prototype={constructor:ca,on:function(e,t){var n=this._,r=AE(e+"",n),i,s=-1,a=r.length;if(arguments.length<2){for(;++s<a;)if((i=(e=r[s]).type)&&(i=PE(n[i],e.name)))return i;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++s<a;)if(i=(e=r[s]).type)n[i]=$m(n[i],e.name,t);else if(t==null)for(i in n)n[i]=$m(n[i],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new ca(e)},call:function(e,t){if((i=arguments.length-2)>0)for(var n=new Array(i),r=0,i,s;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(s=this._[e],r=0,i=s.length;r<i;++r)s[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],i=0,s=r.length;i<s;++i)r[i].value.apply(t,n)}};function PE(e,t){for(var n=0,r=e.length,i;n<r;++n)if((i=e[n]).name===t)return i.value}function $m(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=TE,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var Vu="http://www.w3.org/1999/xhtml";const Dm={svg:"http://www.w3.org/2000/svg",xhtml:Vu,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Sl(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),Dm.hasOwnProperty(t)?{space:Dm[t],local:e}:e}function ME(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===Vu&&t.documentElement.namespaceURI===Vu?t.createElement(e):t.createElementNS(n,e)}}function LE(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function _1(e){var t=Sl(e);return(t.local?LE:ME)(t)}function RE(){}function Cp(e){return e==null?RE:function(){return this.querySelector(e)}}function IE(e){typeof e!="function"&&(e=Cp(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var s=t[i],a=s.length,l=r[i]=new Array(a),c,u,d=0;d<a;++d)(c=s[d])&&(u=e.call(c,c.__data__,d,s))&&("__data__"in c&&(u.__data__=c.__data__),l[d]=u);return new qt(r,this._parents)}function OE(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function $E(){return[]}function S1(e){return e==null?$E:function(){return this.querySelectorAll(e)}}function DE(e){return function(){return OE(e.apply(this,arguments))}}function FE(e){typeof e=="function"?e=DE(e):e=S1(e);for(var t=this._groups,n=t.length,r=[],i=[],s=0;s<n;++s)for(var a=t[s],l=a.length,c,u=0;u<l;++u)(c=a[u])&&(r.push(e.call(c,c.__data__,u,a)),i.push(c));return new qt(r,i)}function C1(e){return function(){return this.matches(e)}}function N1(e){return function(t){return t.matches(e)}}var BE=Array.prototype.find;function UE(e){return function(){return BE.call(this.children,e)}}function WE(){return this.firstElementChild}function VE(e){return this.select(e==null?WE:UE(typeof e=="function"?e:N1(e)))}var HE=Array.prototype.filter;function qE(){return Array.from(this.children)}function JE(e){return function(){return HE.call(this.children,e)}}function KE(e){return this.selectAll(e==null?qE:JE(typeof e=="function"?e:N1(e)))}function GE(e){typeof e!="function"&&(e=C1(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var s=t[i],a=s.length,l=r[i]=[],c,u=0;u<a;++u)(c=s[u])&&e.call(c,c.__data__,u,s)&&l.push(c);return new qt(r,this._parents)}function E1(e){return new Array(e.length)}function YE(){return new qt(this._enter||this._groups.map(E1),this._parents)}function qa(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}qa.prototype={constructor:qa,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function QE(e){return function(){return e}}function XE(e,t,n,r,i,s){for(var a=0,l,c=t.length,u=s.length;a<u;++a)(l=t[a])?(l.__data__=s[a],r[a]=l):n[a]=new qa(e,s[a]);for(;a<c;++a)(l=t[a])&&(i[a]=l)}function ZE(e,t,n,r,i,s,a){var l,c,u=new Map,d=t.length,p=s.length,f=new Array(d),h;for(l=0;l<d;++l)(c=t[l])&&(f[l]=h=a.call(c,c.__data__,l,t)+"",u.has(h)?i[l]=c:u.set(h,c));for(l=0;l<p;++l)h=a.call(e,s[l],l,s)+"",(c=u.get(h))?(r[l]=c,c.__data__=s[l],u.delete(h)):n[l]=new qa(e,s[l]);for(l=0;l<d;++l)(c=t[l])&&u.get(f[l])===c&&(i[l]=c)}function ez(e){return e.__data__}function tz(e,t){if(!arguments.length)return Array.from(this,ez);var n=t?ZE:XE,r=this._parents,i=this._groups;typeof e!="function"&&(e=QE(e));for(var s=i.length,a=new Array(s),l=new Array(s),c=new Array(s),u=0;u<s;++u){var d=r[u],p=i[u],f=p.length,h=nz(e.call(d,d&&d.__data__,u,r)),m=h.length,b=l[u]=new Array(m),j=a[u]=new Array(m),g=c[u]=new Array(f);n(d,p,b,j,g,h,t);for(var x=0,v=0,_,A;x<m;++x)if(_=b[x]){for(x>=v&&(v=x+1);!(A=j[v])&&++v<m;);_._next=A||null}}return a=new qt(a,r),a._enter=l,a._exit=c,a}function nz(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function rz(){return new qt(this._exit||this._groups.map(E1),this._parents)}function iz(e,t,n){var r=this.enter(),i=this,s=this.exit();return typeof e=="function"?(r=e(r),r&&(r=r.selection())):r=r.append(e+""),t!=null&&(i=t(i),i&&(i=i.selection())),n==null?s.remove():n(s),r&&i?r.merge(i).order():i}function oz(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,i=n.length,s=r.length,a=Math.min(i,s),l=new Array(i),c=0;c<a;++c)for(var u=n[c],d=r[c],p=u.length,f=l[c]=new Array(p),h,m=0;m<p;++m)(h=u[m]||d[m])&&(f[m]=h);for(;c<i;++c)l[c]=n[c];return new qt(l,this._parents)}function sz(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],i=r.length-1,s=r[i],a;--i>=0;)(a=r[i])&&(s&&a.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(a,s),s=a);return this}function az(e){e||(e=lz);function t(p,f){return p&&f?e(p.__data__,f.__data__):!p-!f}for(var n=this._groups,r=n.length,i=new Array(r),s=0;s<r;++s){for(var a=n[s],l=a.length,c=i[s]=new Array(l),u,d=0;d<l;++d)(u=a[d])&&(c[d]=u);c.sort(t)}return new qt(i,this._parents).order()}function lz(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function cz(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function uz(){return Array.from(this)}function dz(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,s=r.length;i<s;++i){var a=r[i];if(a)return a}return null}function pz(){let e=0;for(const t of this)++e;return e}function fz(){return!this.node()}function hz(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var i=t[n],s=0,a=i.length,l;s<a;++s)(l=i[s])&&e.call(l,l.__data__,s,i);return this}function mz(e){return function(){this.removeAttribute(e)}}function gz(e){return function(){this.removeAttributeNS(e.space,e.local)}}function xz(e,t){return function(){this.setAttribute(e,t)}}function yz(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function vz(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function bz(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function wz(e,t){var n=Sl(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?gz:mz:typeof t=="function"?n.local?bz:vz:n.local?yz:xz)(n,t))}function z1(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function kz(e){return function(){this.style.removeProperty(e)}}function jz(e,t,n){return function(){this.style.setProperty(e,t,n)}}function _z(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function Sz(e,t,n){return arguments.length>1?this.each((t==null?kz:typeof t=="function"?_z:jz)(e,t,n??"")):zi(this.node(),e)}function zi(e,t){return e.style.getPropertyValue(t)||z1(e).getComputedStyle(e,null).getPropertyValue(t)}function Cz(e){return function(){delete this[e]}}function Nz(e,t){return function(){this[e]=t}}function Ez(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function zz(e,t){return arguments.length>1?this.each((t==null?Cz:typeof t=="function"?Ez:Nz)(e,t)):this.node()[e]}function T1(e){return e.trim().split(/^|\s+/)}function Np(e){return e.classList||new A1(e)}function A1(e){this._node=e,this._names=T1(e.getAttribute("class")||"")}A1.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function P1(e,t){for(var n=Np(e),r=-1,i=t.length;++r<i;)n.add(t[r])}function M1(e,t){for(var n=Np(e),r=-1,i=t.length;++r<i;)n.remove(t[r])}function Tz(e){return function(){P1(this,e)}}function Az(e){return function(){M1(this,e)}}function Pz(e,t){return function(){(t.apply(this,arguments)?P1:M1)(this,e)}}function Mz(e,t){var n=T1(e+"");if(arguments.length<2){for(var r=Np(this.node()),i=-1,s=n.length;++i<s;)if(!r.contains(n[i]))return!1;return!0}return this.each((typeof t=="function"?Pz:t?Tz:Az)(n,t))}function Lz(){this.textContent=""}function Rz(e){return function(){this.textContent=e}}function Iz(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function Oz(e){return arguments.length?this.each(e==null?Lz:(typeof e=="function"?Iz:Rz)(e)):this.node().textContent}function $z(){this.innerHTML=""}function Dz(e){return function(){this.innerHTML=e}}function Fz(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function Bz(e){return arguments.length?this.each(e==null?$z:(typeof e=="function"?Fz:Dz)(e)):this.node().innerHTML}function Uz(){this.nextSibling&&this.parentNode.appendChild(this)}function Wz(){return this.each(Uz)}function Vz(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Hz(){return this.each(Vz)}function qz(e){var t=typeof e=="function"?e:_1(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function Jz(){return null}function Kz(e,t){var n=typeof e=="function"?e:_1(e),r=t==null?Jz:typeof t=="function"?t:Cp(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function Gz(){var e=this.parentNode;e&&e.removeChild(this)}function Yz(){return this.each(Gz)}function Qz(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Xz(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Zz(e){return this.select(e?Xz:Qz)}function e3(e){return arguments.length?this.property("__data__",e):this.node().__data__}function t3(e){return function(t){e.call(this,t,this.__data__)}}function n3(e){return e.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{type:t,name:n}})}function r3(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,i=t.length,s;n<i;++n)s=t[n],(!e.type||s.type===e.type)&&s.name===e.name?this.removeEventListener(s.type,s.listener,s.options):t[++r]=s;++r?t.length=r:delete this.__on}}}function i3(e,t,n){return function(){var r=this.__on,i,s=t3(t);if(r){for(var a=0,l=r.length;a<l;++a)if((i=r[a]).type===e.type&&i.name===e.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=s,i.options=n),i.value=t;return}}this.addEventListener(e.type,s,n),i={type:e.type,name:e.name,value:t,listener:s,options:n},r?r.push(i):this.__on=[i]}}function o3(e,t,n){var r=n3(e+""),i,s=r.length,a;if(arguments.length<2){var l=this.node().__on;if(l){for(var c=0,u=l.length,d;c<u;++c)for(i=0,d=l[c];i<s;++i)if((a=r[i]).type===d.type&&a.name===d.name)return d.value}return}for(l=t?i3:r3,i=0;i<s;++i)this.each(l(r[i],t,n));return this}function L1(e,t,n){var r=z1(e),i=r.CustomEvent;typeof i=="function"?i=new i(t,n):(i=r.document.createEvent("Event"),n?(i.initEvent(t,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(t,!1,!1)),e.dispatchEvent(i)}function s3(e,t){return function(){return L1(this,e,t)}}function a3(e,t){return function(){return L1(this,e,t.apply(this,arguments))}}function l3(e,t){return this.each((typeof t=="function"?a3:s3)(e,t))}function*c3(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,s=r.length,a;i<s;++i)(a=r[i])&&(yield a)}var R1=[null];function qt(e,t){this._groups=e,this._parents=t}function ds(){return new qt([[document.documentElement]],R1)}function u3(){return this}qt.prototype=ds.prototype={constructor:qt,select:IE,selectAll:FE,selectChild:VE,selectChildren:KE,filter:GE,data:tz,enter:YE,exit:rz,join:iz,merge:oz,selection:u3,order:sz,sort:az,call:cz,nodes:uz,node:dz,size:pz,empty:fz,each:hz,attr:wz,style:Sz,property:zz,classed:Mz,text:Oz,html:Bz,raise:Wz,lower:Hz,append:qz,insert:Kz,remove:Yz,clone:Zz,datum:e3,on:o3,dispatch:l3,[Symbol.iterator]:c3};function bt(e){return typeof e=="string"?new qt([[document.querySelector(e)]],[document.documentElement]):new qt([[e]],R1)}function d3(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Tn(e,t){if(e=d3(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}if(t.getBoundingClientRect){var i=t.getBoundingClientRect();return[e.clientX-i.left-t.clientLeft,e.clientY-i.top-t.clientTop]}}return[e.pageX,e.pageY]}const p3={passive:!1},Jo={capture:!0,passive:!1};function Sc(e){e.stopImmediatePropagation()}function xi(e){e.preventDefault(),e.stopImmediatePropagation()}function I1(e){var t=e.document.documentElement,n=bt(e).on("dragstart.drag",xi,Jo);"onselectstart"in t?n.on("selectstart.drag",xi,Jo):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function O1(e,t){var n=e.document.documentElement,r=bt(e).on("dragstart.drag",null);t&&(r.on("click.drag",xi,Jo),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in n?r.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}const Fs=e=>()=>e;function Hu(e,{sourceEvent:t,subject:n,target:r,identifier:i,active:s,x:a,y:l,dx:c,dy:u,dispatch:d}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},identifier:{value:i,enumerable:!0,configurable:!0},active:{value:s,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:l,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:d}})}Hu.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function f3(e){return!e.ctrlKey&&!e.button}function h3(){return this.parentNode}function m3(e,t){return t??{x:e.x,y:e.y}}function g3(){return navigator.maxTouchPoints||"ontouchstart"in this}function Fm(){var e=f3,t=h3,n=m3,r=g3,i={},s=us("start","drag","end"),a=0,l,c,u,d,p=0;function f(_){_.on("mousedown.drag",h).filter(r).on("touchstart.drag",j).on("touchmove.drag",g,p3).on("touchend.drag touchcancel.drag",x).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(_,A){if(!(d||!e.call(this,_,A))){var S=v(this,t.call(this,_,A),_,A,"mouse");S&&(bt(_.view).on("mousemove.drag",m,Jo).on("mouseup.drag",b,Jo),I1(_.view),Sc(_),u=!1,l=_.clientX,c=_.clientY,S("start",_))}}function m(_){if(xi(_),!u){var A=_.clientX-l,S=_.clientY-c;u=A*A+S*S>p}i.mouse("drag",_)}function b(_){bt(_.view).on("mousemove.drag mouseup.drag",null),O1(_.view,u),xi(_),i.mouse("end",_)}function j(_,A){if(e.call(this,_,A)){var S=_.changedTouches,M=t.call(this,_,A),E=S.length,U,z;for(U=0;U<E;++U)(z=v(this,M,_,A,S[U].identifier,S[U]))&&(Sc(_),z("start",_,S[U]))}}function g(_){var A=_.changedTouches,S=A.length,M,E;for(M=0;M<S;++M)(E=i[A[M].identifier])&&(xi(_),E("drag",_,A[M]))}function x(_){var A=_.changedTouches,S=A.length,M,E;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),M=0;M<S;++M)(E=i[A[M].identifier])&&(Sc(_),E("end",_,A[M]))}function v(_,A,S,M,E,U){var z=s.copy(),$=Tn(U||S,A),q,Y,T;if((T=n.call(_,new Hu("beforestart",{sourceEvent:S,target:f,identifier:E,active:a,x:$[0],y:$[1],dx:0,dy:0,dispatch:z}),M))!=null)return q=T.x-$[0]||0,Y=T.y-$[1]||0,function P(D,C,L){var R=$,w;switch(D){case"start":i[E]=P,w=a++;break;case"end":delete i[E],--a;case"drag":$=Tn(L||C,A),w=a;break}z.call(D,_,new Hu(D,{sourceEvent:C,subject:T,target:f,identifier:E,active:w,x:$[0]+q,y:$[1]+Y,dx:$[0]-R[0],dy:$[1]-R[1],dispatch:z}),M)}}return f.filter=function(_){return arguments.length?(e=typeof _=="function"?_:Fs(!!_),f):e},f.container=function(_){return arguments.length?(t=typeof _=="function"?_:Fs(_),f):t},f.subject=function(_){return arguments.length?(n=typeof _=="function"?_:Fs(_),f):n},f.touchable=function(_){return arguments.length?(r=typeof _=="function"?_:Fs(!!_),f):r},f.on=function(){var _=s.on.apply(s,arguments);return _===s?f:_},f.clickDistance=function(_){return arguments.length?(p=(_=+_)*_,f):Math.sqrt(p)},f}function Ep(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function $1(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function ps(){}var Ko=.7,Ja=1/Ko,yi="\\s*([+-]?\\d+)\\s*",Go="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",jn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",x3=/^#([0-9a-f]{3,8})$/,y3=new RegExp(`^rgb\\(${yi},${yi},${yi}\\)$`),v3=new RegExp(`^rgb\\(${jn},${jn},${jn}\\)$`),b3=new RegExp(`^rgba\\(${yi},${yi},${yi},${Go}\\)$`),w3=new RegExp(`^rgba\\(${jn},${jn},${jn},${Go}\\)$`),k3=new RegExp(`^hsl\\(${Go},${jn},${jn}\\)$`),j3=new RegExp(`^hsla\\(${Go},${jn},${jn},${Go}\\)$`),Bm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Ep(ps,Yo,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Um,formatHex:Um,formatHex8:_3,formatHsl:S3,formatRgb:Wm,toString:Wm});function Um(){return this.rgb().formatHex()}function _3(){return this.rgb().formatHex8()}function S3(){return D1(this).formatHsl()}function Wm(){return this.rgb().formatRgb()}function Yo(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=x3.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?Vm(t):n===3?new Tt(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Bs(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Bs(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=y3.exec(e))?new Tt(t[1],t[2],t[3],1):(t=v3.exec(e))?new Tt(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=b3.exec(e))?Bs(t[1],t[2],t[3],t[4]):(t=w3.exec(e))?Bs(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=k3.exec(e))?Jm(t[1],t[2]/100,t[3]/100,1):(t=j3.exec(e))?Jm(t[1],t[2]/100,t[3]/100,t[4]):Bm.hasOwnProperty(e)?Vm(Bm[e]):e==="transparent"?new Tt(NaN,NaN,NaN,0):null}function Vm(e){return new Tt(e>>16&255,e>>8&255,e&255,1)}function Bs(e,t,n,r){return r<=0&&(e=t=n=NaN),new Tt(e,t,n,r)}function C3(e){return e instanceof ps||(e=Yo(e)),e?(e=e.rgb(),new Tt(e.r,e.g,e.b,e.opacity)):new Tt}function qu(e,t,n,r){return arguments.length===1?C3(e):new Tt(e,t,n,r??1)}function Tt(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}Ep(Tt,qu,$1(ps,{brighter(e){return e=e==null?Ja:Math.pow(Ja,e),new Tt(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Ko:Math.pow(Ko,e),new Tt(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Tt(Pr(this.r),Pr(this.g),Pr(this.b),Ka(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Hm,formatHex:Hm,formatHex8:N3,formatRgb:qm,toString:qm}));function Hm(){return`#${Nr(this.r)}${Nr(this.g)}${Nr(this.b)}`}function N3(){return`#${Nr(this.r)}${Nr(this.g)}${Nr(this.b)}${Nr((isNaN(this.opacity)?1:this.opacity)*255)}`}function qm(){const e=Ka(this.opacity);return`${e===1?"rgb(":"rgba("}${Pr(this.r)}, ${Pr(this.g)}, ${Pr(this.b)}${e===1?")":`, ${e})`}`}function Ka(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Pr(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Nr(e){return e=Pr(e),(e<16?"0":"")+e.toString(16)}function Jm(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new cn(e,t,n,r)}function D1(e){if(e instanceof cn)return new cn(e.h,e.s,e.l,e.opacity);if(e instanceof ps||(e=Yo(e)),!e)return new cn;if(e instanceof cn)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),s=Math.max(t,n,r),a=NaN,l=s-i,c=(s+i)/2;return l?(t===s?a=(n-r)/l+(n<r)*6:n===s?a=(r-t)/l+2:a=(t-n)/l+4,l/=c<.5?s+i:2-s-i,a*=60):l=c>0&&c<1?0:a,new cn(a,l,c,e.opacity)}function E3(e,t,n,r){return arguments.length===1?D1(e):new cn(e,t,n,r??1)}function cn(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}Ep(cn,E3,$1(ps,{brighter(e){return e=e==null?Ja:Math.pow(Ja,e),new cn(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Ko:Math.pow(Ko,e),new cn(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new Tt(Cc(e>=240?e-240:e+120,i,r),Cc(e,i,r),Cc(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new cn(Km(this.h),Us(this.s),Us(this.l),Ka(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Ka(this.opacity);return`${e===1?"hsl(":"hsla("}${Km(this.h)}, ${Us(this.s)*100}%, ${Us(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Km(e){return e=(e||0)%360,e<0?e+360:e}function Us(e){return Math.max(0,Math.min(1,e||0))}function Cc(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const F1=e=>()=>e;function z3(e,t){return function(n){return e+n*t}}function T3(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function A3(e){return(e=+e)==1?B1:function(t,n){return n-t?T3(t,n,e):F1(isNaN(t)?n:t)}}function B1(e,t){var n=t-e;return n?z3(e,n):F1(isNaN(e)?t:e)}const Gm=function e(t){var n=A3(t);function r(i,s){var a=n((i=qu(i)).r,(s=qu(s)).r),l=n(i.g,s.g),c=n(i.b,s.b),u=B1(i.opacity,s.opacity);return function(d){return i.r=a(d),i.g=l(d),i.b=c(d),i.opacity=u(d),i+""}}return r.gamma=e,r}(1);function Gn(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}var Ju=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Nc=new RegExp(Ju.source,"g");function P3(e){return function(){return e}}function M3(e){return function(t){return e(t)+""}}function L3(e,t){var n=Ju.lastIndex=Nc.lastIndex=0,r,i,s,a=-1,l=[],c=[];for(e=e+"",t=t+"";(r=Ju.exec(e))&&(i=Nc.exec(t));)(s=i.index)>n&&(s=t.slice(n,s),l[a]?l[a]+=s:l[++a]=s),(r=r[0])===(i=i[0])?l[a]?l[a]+=i:l[++a]=i:(l[++a]=null,c.push({i:a,x:Gn(r,i)})),n=Nc.lastIndex;return n<t.length&&(s=t.slice(n),l[a]?l[a]+=s:l[++a]=s),l.length<2?c[0]?M3(c[0].x):P3(t):(t=c.length,function(u){for(var d=0,p;d<t;++d)l[(p=c[d]).i]=p.x(u);return l.join("")})}var Ym=180/Math.PI,Ku={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function U1(e,t,n,r,i,s){var a,l,c;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(c=e*n+t*r)&&(n-=e*c,r-=t*c),(l=Math.sqrt(n*n+r*r))&&(n/=l,r/=l,c/=l),e*r<t*n&&(e=-e,t=-t,c=-c,a=-a),{translateX:i,translateY:s,rotate:Math.atan2(t,e)*Ym,skewX:Math.atan(c)*Ym,scaleX:a,scaleY:l}}var Ws;function R3(e){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?Ku:U1(t.a,t.b,t.c,t.d,t.e,t.f)}function I3(e){return e==null||(Ws||(Ws=document.createElementNS("http://www.w3.org/2000/svg","g")),Ws.setAttribute("transform",e),!(e=Ws.transform.baseVal.consolidate()))?Ku:(e=e.matrix,U1(e.a,e.b,e.c,e.d,e.e,e.f))}function W1(e,t,n,r){function i(u){return u.length?u.pop()+" ":""}function s(u,d,p,f,h,m){if(u!==p||d!==f){var b=h.push("translate(",null,t,null,n);m.push({i:b-4,x:Gn(u,p)},{i:b-2,x:Gn(d,f)})}else(p||f)&&h.push("translate("+p+t+f+n)}function a(u,d,p,f){u!==d?(u-d>180?d+=360:d-u>180&&(u+=360),f.push({i:p.push(i(p)+"rotate(",null,r)-2,x:Gn(u,d)})):d&&p.push(i(p)+"rotate("+d+r)}function l(u,d,p,f){u!==d?f.push({i:p.push(i(p)+"skewX(",null,r)-2,x:Gn(u,d)}):d&&p.push(i(p)+"skewX("+d+r)}function c(u,d,p,f,h,m){if(u!==p||d!==f){var b=h.push(i(h)+"scale(",null,",",null,")");m.push({i:b-4,x:Gn(u,p)},{i:b-2,x:Gn(d,f)})}else(p!==1||f!==1)&&h.push(i(h)+"scale("+p+","+f+")")}return function(u,d){var p=[],f=[];return u=e(u),d=e(d),s(u.translateX,u.translateY,d.translateX,d.translateY,p,f),a(u.rotate,d.rotate,p,f),l(u.skewX,d.skewX,p,f),c(u.scaleX,u.scaleY,d.scaleX,d.scaleY,p,f),u=d=null,function(h){for(var m=-1,b=f.length,j;++m<b;)p[(j=f[m]).i]=j.x(h);return p.join("")}}}var O3=W1(R3,"px, ","px)","deg)"),$3=W1(I3,", ",")",")"),D3=1e-12;function Qm(e){return((e=Math.exp(e))+1/e)/2}function F3(e){return((e=Math.exp(e))-1/e)/2}function B3(e){return((e=Math.exp(2*e))-1)/(e+1)}const U3=function e(t,n,r){function i(s,a){var l=s[0],c=s[1],u=s[2],d=a[0],p=a[1],f=a[2],h=d-l,m=p-c,b=h*h+m*m,j,g;if(b<D3)g=Math.log(f/u)/t,j=function(M){return[l+M*h,c+M*m,u*Math.exp(t*M*g)]};else{var x=Math.sqrt(b),v=(f*f-u*u+r*b)/(2*u*n*x),_=(f*f-u*u-r*b)/(2*f*n*x),A=Math.log(Math.sqrt(v*v+1)-v),S=Math.log(Math.sqrt(_*_+1)-_);g=(S-A)/t,j=function(M){var E=M*g,U=Qm(A),z=u/(n*x)*(U*B3(t*E+A)-F3(A));return[l+z*h,c+z*m,u*U/Qm(t*E+A)]}}return j.duration=g*1e3*t/Math.SQRT2,j}return i.rho=function(s){var a=Math.max(.001,+s),l=a*a,c=l*l;return e(a,l,c)},i}(Math.SQRT2,2,4);var Ti=0,lo=0,to=0,V1=1e3,Ga,co,Ya=0,Fr=0,Cl=0,Qo=typeof performance=="object"&&performance.now?performance:Date,H1=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function zp(){return Fr||(H1(W3),Fr=Qo.now()+Cl)}function W3(){Fr=0}function Qa(){this._call=this._time=this._next=null}Qa.prototype=Tp.prototype={constructor:Qa,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?zp():+n)+(t==null?0:+t),!this._next&&co!==this&&(co?co._next=this:Ga=this,co=this),this._call=e,this._time=n,Gu()},stop:function(){this._call&&(this._call=null,this._time=1/0,Gu())}};function Tp(e,t,n){var r=new Qa;return r.restart(e,t,n),r}function V3(){zp(),++Ti;for(var e=Ga,t;e;)(t=Fr-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Ti}function Xm(){Fr=(Ya=Qo.now())+Cl,Ti=lo=0;try{V3()}finally{Ti=0,q3(),Fr=0}}function H3(){var e=Qo.now(),t=e-Ya;t>V1&&(Cl-=t,Ya=e)}function q3(){for(var e,t=Ga,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:Ga=n);co=e,Gu(r)}function Gu(e){if(!Ti){lo&&(lo=clearTimeout(lo));var t=e-Fr;t>24?(e<1/0&&(lo=setTimeout(Xm,e-Qo.now()-Cl)),to&&(to=clearInterval(to))):(to||(Ya=Qo.now(),to=setInterval(H3,V1)),Ti=1,H1(Xm))}}function Zm(e,t,n){var r=new Qa;return t=t==null?0:+t,r.restart(i=>{r.stop(),e(i+t)},t,n),r}var J3=us("start","end","cancel","interrupt"),K3=[],q1=0,eg=1,Yu=2,ua=3,tg=4,Qu=5,da=6;function Nl(e,t,n,r,i,s){var a=e.__transition;if(!a)e.__transition={};else if(n in a)return;G3(e,n,{name:t,index:r,group:i,on:J3,tween:K3,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:q1})}function Ap(e,t){var n=hn(e,t);if(n.state>q1)throw new Error("too late; already scheduled");return n}function Cn(e,t){var n=hn(e,t);if(n.state>ua)throw new Error("too late; already running");return n}function hn(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function G3(e,t,n){var r=e.__transition,i;r[t]=n,n.timer=Tp(s,0,n.time);function s(u){n.state=eg,n.timer.restart(a,n.delay,n.time),n.delay<=u&&a(u-n.delay)}function a(u){var d,p,f,h;if(n.state!==eg)return c();for(d in r)if(h=r[d],h.name===n.name){if(h.state===ua)return Zm(a);h.state===tg?(h.state=da,h.timer.stop(),h.on.call("interrupt",e,e.__data__,h.index,h.group),delete r[d]):+d<t&&(h.state=da,h.timer.stop(),h.on.call("cancel",e,e.__data__,h.index,h.group),delete r[d])}if(Zm(function(){n.state===ua&&(n.state=tg,n.timer.restart(l,n.delay,n.time),l(u))}),n.state=Yu,n.on.call("start",e,e.__data__,n.index,n.group),n.state===Yu){for(n.state=ua,i=new Array(f=n.tween.length),d=0,p=-1;d<f;++d)(h=n.tween[d].value.call(e,e.__data__,n.index,n.group))&&(i[++p]=h);i.length=p+1}}function l(u){for(var d=u<n.duration?n.ease.call(null,u/n.duration):(n.timer.restart(c),n.state=Qu,1),p=-1,f=i.length;++p<f;)i[p].call(e,d);n.state===Qu&&(n.on.call("end",e,e.__data__,n.index,n.group),c())}function c(){n.state=da,n.timer.stop(),delete r[t];for(var u in r)return;delete e.__transition}}function pa(e,t){var n=e.__transition,r,i,s=!0,a;if(n){t=t==null?null:t+"";for(a in n){if((r=n[a]).name!==t){s=!1;continue}i=r.state>Yu&&r.state<Qu,r.state=da,r.timer.stop(),r.on.call(i?"interrupt":"cancel",e,e.__data__,r.index,r.group),delete n[a]}s&&delete e.__transition}}function Y3(e){return this.each(function(){pa(this,e)})}function Q3(e,t){var n,r;return function(){var i=Cn(this,e),s=i.tween;if(s!==n){r=n=s;for(var a=0,l=r.length;a<l;++a)if(r[a].name===t){r=r.slice(),r.splice(a,1);break}}i.tween=r}}function X3(e,t,n){var r,i;if(typeof n!="function")throw new Error;return function(){var s=Cn(this,e),a=s.tween;if(a!==r){i=(r=a).slice();for(var l={name:t,value:n},c=0,u=i.length;c<u;++c)if(i[c].name===t){i[c]=l;break}c===u&&i.push(l)}s.tween=i}}function Z3(e,t){var n=this._id;if(e+="",arguments.length<2){for(var r=hn(this.node(),n).tween,i=0,s=r.length,a;i<s;++i)if((a=r[i]).name===e)return a.value;return null}return this.each((t==null?Q3:X3)(n,e,t))}function Pp(e,t,n){var r=e._id;return e.each(function(){var i=Cn(this,r);(i.value||(i.value={}))[t]=n.apply(this,arguments)}),function(i){return hn(i,r).value[t]}}function J1(e,t){var n;return(typeof t=="number"?Gn:t instanceof Yo?Gm:(n=Yo(t))?(t=n,Gm):L3)(e,t)}function eT(e){return function(){this.removeAttribute(e)}}function tT(e){return function(){this.removeAttributeNS(e.space,e.local)}}function nT(e,t,n){var r,i=n+"",s;return function(){var a=this.getAttribute(e);return a===i?null:a===r?s:s=t(r=a,n)}}function rT(e,t,n){var r,i=n+"",s;return function(){var a=this.getAttributeNS(e.space,e.local);return a===i?null:a===r?s:s=t(r=a,n)}}function iT(e,t,n){var r,i,s;return function(){var a,l=n(this),c;return l==null?void this.removeAttribute(e):(a=this.getAttribute(e),c=l+"",a===c?null:a===r&&c===i?s:(i=c,s=t(r=a,l)))}}function oT(e,t,n){var r,i,s;return function(){var a,l=n(this),c;return l==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),c=l+"",a===c?null:a===r&&c===i?s:(i=c,s=t(r=a,l)))}}function sT(e,t){var n=Sl(e),r=n==="transform"?$3:J1;return this.attrTween(e,typeof t=="function"?(n.local?oT:iT)(n,r,Pp(this,"attr."+e,t)):t==null?(n.local?tT:eT)(n):(n.local?rT:nT)(n,r,t))}function aT(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function lT(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function cT(e,t){var n,r;function i(){var s=t.apply(this,arguments);return s!==r&&(n=(r=s)&&lT(e,s)),n}return i._value=t,i}function uT(e,t){var n,r;function i(){var s=t.apply(this,arguments);return s!==r&&(n=(r=s)&&aT(e,s)),n}return i._value=t,i}function dT(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var r=Sl(e);return this.tween(n,(r.local?cT:uT)(r,t))}function pT(e,t){return function(){Ap(this,e).delay=+t.apply(this,arguments)}}function fT(e,t){return t=+t,function(){Ap(this,e).delay=t}}function hT(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?pT:fT)(t,e)):hn(this.node(),t).delay}function mT(e,t){return function(){Cn(this,e).duration=+t.apply(this,arguments)}}function gT(e,t){return t=+t,function(){Cn(this,e).duration=t}}function xT(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?mT:gT)(t,e)):hn(this.node(),t).duration}function yT(e,t){if(typeof t!="function")throw new Error;return function(){Cn(this,e).ease=t}}function vT(e){var t=this._id;return arguments.length?this.each(yT(t,e)):hn(this.node(),t).ease}function bT(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;Cn(this,e).ease=n}}function wT(e){if(typeof e!="function")throw new Error;return this.each(bT(this._id,e))}function kT(e){typeof e!="function"&&(e=C1(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var s=t[i],a=s.length,l=r[i]=[],c,u=0;u<a;++u)(c=s[u])&&e.call(c,c.__data__,u,s)&&l.push(c);return new Un(r,this._parents,this._name,this._id)}function jT(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,r=t.length,i=n.length,s=Math.min(r,i),a=new Array(r),l=0;l<s;++l)for(var c=t[l],u=n[l],d=c.length,p=a[l]=new Array(d),f,h=0;h<d;++h)(f=c[h]||u[h])&&(p[h]=f);for(;l<r;++l)a[l]=t[l];return new Un(a,this._parents,this._name,this._id)}function _T(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function ST(e,t,n){var r,i,s=_T(t)?Ap:Cn;return function(){var a=s(this,e),l=a.on;l!==r&&(i=(r=l).copy()).on(t,n),a.on=i}}function CT(e,t){var n=this._id;return arguments.length<2?hn(this.node(),n).on.on(e):this.each(ST(n,e,t))}function NT(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function ET(){return this.on("end.remove",NT(this._id))}function zT(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Cp(e));for(var r=this._groups,i=r.length,s=new Array(i),a=0;a<i;++a)for(var l=r[a],c=l.length,u=s[a]=new Array(c),d,p,f=0;f<c;++f)(d=l[f])&&(p=e.call(d,d.__data__,f,l))&&("__data__"in d&&(p.__data__=d.__data__),u[f]=p,Nl(u[f],t,n,f,u,hn(d,n)));return new Un(s,this._parents,t,n)}function TT(e){var t=this._name,n=this._id;typeof e!="function"&&(e=S1(e));for(var r=this._groups,i=r.length,s=[],a=[],l=0;l<i;++l)for(var c=r[l],u=c.length,d,p=0;p<u;++p)if(d=c[p]){for(var f=e.call(d,d.__data__,p,c),h,m=hn(d,n),b=0,j=f.length;b<j;++b)(h=f[b])&&Nl(h,t,n,b,f,m);s.push(f),a.push(d)}return new Un(s,a,t,n)}var AT=ds.prototype.constructor;function PT(){return new AT(this._groups,this._parents)}function MT(e,t){var n,r,i;return function(){var s=zi(this,e),a=(this.style.removeProperty(e),zi(this,e));return s===a?null:s===n&&a===r?i:i=t(n=s,r=a)}}function K1(e){return function(){this.style.removeProperty(e)}}function LT(e,t,n){var r,i=n+"",s;return function(){var a=zi(this,e);return a===i?null:a===r?s:s=t(r=a,n)}}function RT(e,t,n){var r,i,s;return function(){var a=zi(this,e),l=n(this),c=l+"";return l==null&&(c=l=(this.style.removeProperty(e),zi(this,e))),a===c?null:a===r&&c===i?s:(i=c,s=t(r=a,l))}}function IT(e,t){var n,r,i,s="style."+t,a="end."+s,l;return function(){var c=Cn(this,e),u=c.on,d=c.value[s]==null?l||(l=K1(t)):void 0;(u!==n||i!==d)&&(r=(n=u).copy()).on(a,i=d),c.on=r}}function OT(e,t,n){var r=(e+="")=="transform"?O3:J1;return t==null?this.styleTween(e,MT(e,r)).on("end.style."+e,K1(e)):typeof t=="function"?this.styleTween(e,RT(e,r,Pp(this,"style."+e,t))).each(IT(this._id,e)):this.styleTween(e,LT(e,r,t),n).on("end.style."+e,null)}function $T(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function DT(e,t,n){var r,i;function s(){var a=t.apply(this,arguments);return a!==i&&(r=(i=a)&&$T(e,a,n)),r}return s._value=t,s}function FT(e,t,n){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,DT(e,t,n??""))}function BT(e){return function(){this.textContent=e}}function UT(e){return function(){var t=e(this);this.textContent=t??""}}function WT(e){return this.tween("text",typeof e=="function"?UT(Pp(this,"text",e)):BT(e==null?"":e+""))}function VT(e){return function(t){this.textContent=e.call(this,t)}}function HT(e){var t,n;function r(){var i=e.apply(this,arguments);return i!==n&&(t=(n=i)&&VT(i)),t}return r._value=e,r}function qT(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,HT(e))}function JT(){for(var e=this._name,t=this._id,n=G1(),r=this._groups,i=r.length,s=0;s<i;++s)for(var a=r[s],l=a.length,c,u=0;u<l;++u)if(c=a[u]){var d=hn(c,t);Nl(c,e,n,u,a,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new Un(r,this._parents,e,n)}function KT(){var e,t,n=this,r=n._id,i=n.size();return new Promise(function(s,a){var l={value:a},c={value:function(){--i===0&&s()}};n.each(function(){var u=Cn(this,r),d=u.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(l),t._.interrupt.push(l),t._.end.push(c)),u.on=t}),i===0&&s()})}var GT=0;function Un(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function G1(){return++GT}var En=ds.prototype;Un.prototype={constructor:Un,select:zT,selectAll:TT,selectChild:En.selectChild,selectChildren:En.selectChildren,filter:kT,merge:jT,selection:PT,transition:JT,call:En.call,nodes:En.nodes,node:En.node,size:En.size,empty:En.empty,each:En.each,on:CT,attr:sT,attrTween:dT,style:OT,styleTween:FT,text:WT,textTween:qT,remove:ET,tween:Z3,delay:hT,duration:xT,ease:vT,easeVarying:wT,end:KT,[Symbol.iterator]:En[Symbol.iterator]};function YT(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var QT={time:null,delay:0,duration:250,ease:YT};function XT(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function ZT(e){var t,n;e instanceof Un?(t=e._id,e=e._name):(t=G1(),(n=QT).time=zp(),e=e==null?null:e+"");for(var r=this._groups,i=r.length,s=0;s<i;++s)for(var a=r[s],l=a.length,c,u=0;u<l;++u)(c=a[u])&&Nl(c,e,t,u,a,n||XT(c,t));return new Un(r,this._parents,e,t)}ds.prototype.interrupt=Y3;ds.prototype.transition=ZT;function ng(e,t){var n,r=1;e==null&&(e=0),t==null&&(t=0);function i(){var s,a=n.length,l,c=0,u=0;for(s=0;s<a;++s)l=n[s],c+=l.x,u+=l.y;for(c=(c/a-e)*r,u=(u/a-t)*r,s=0;s<a;++s)l=n[s],l.x-=c,l.y-=u}return i.initialize=function(s){n=s},i.x=function(s){return arguments.length?(e=+s,i):e},i.y=function(s){return arguments.length?(t=+s,i):t},i.strength=function(s){return arguments.length?(r=+s,i):r},i}function e5(e){const t=+this._x.call(null,e),n=+this._y.call(null,e);return Y1(this.cover(t,n),t,n,e)}function Y1(e,t,n,r){if(isNaN(t)||isNaN(n))return e;var i,s=e._root,a={data:r},l=e._x0,c=e._y0,u=e._x1,d=e._y1,p,f,h,m,b,j,g,x;if(!s)return e._root=a,e;for(;s.length;)if((b=t>=(p=(l+u)/2))?l=p:u=p,(j=n>=(f=(c+d)/2))?c=f:d=f,i=s,!(s=s[g=j<<1|b]))return i[g]=a,e;if(h=+e._x.call(null,s.data),m=+e._y.call(null,s.data),t===h&&n===m)return a.next=s,i?i[g]=a:e._root=a,e;do i=i?i[g]=new Array(4):e._root=new Array(4),(b=t>=(p=(l+u)/2))?l=p:u=p,(j=n>=(f=(c+d)/2))?c=f:d=f;while((g=j<<1|b)===(x=(m>=f)<<1|h>=p));return i[x]=s,i[g]=a,e}function t5(e){var t,n,r=e.length,i,s,a=new Array(r),l=new Array(r),c=1/0,u=1/0,d=-1/0,p=-1/0;for(n=0;n<r;++n)isNaN(i=+this._x.call(null,t=e[n]))||isNaN(s=+this._y.call(null,t))||(a[n]=i,l[n]=s,i<c&&(c=i),i>d&&(d=i),s<u&&(u=s),s>p&&(p=s));if(c>d||u>p)return this;for(this.cover(c,u).cover(d,p),n=0;n<r;++n)Y1(this,a[n],l[n],e[n]);return this}function n5(e,t){if(isNaN(e=+e)||isNaN(t=+t))return this;var n=this._x0,r=this._y0,i=this._x1,s=this._y1;if(isNaN(n))i=(n=Math.floor(e))+1,s=(r=Math.floor(t))+1;else{for(var a=i-n||1,l=this._root,c,u;n>e||e>=i||r>t||t>=s;)switch(u=(t<r)<<1|e<n,c=new Array(4),c[u]=l,l=c,a*=2,u){case 0:i=n+a,s=r+a;break;case 1:n=i-a,s=r+a;break;case 2:i=n+a,r=s-a;break;case 3:n=i-a,r=s-a;break}this._root&&this._root.length&&(this._root=l)}return this._x0=n,this._y0=r,this._x1=i,this._y1=s,this}function r5(){var e=[];return this.visit(function(t){if(!t.length)do e.push(t.data);while(t=t.next)}),e}function i5(e){return arguments.length?this.cover(+e[0][0],+e[0][1]).cover(+e[1][0],+e[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function wt(e,t,n,r,i){this.node=e,this.x0=t,this.y0=n,this.x1=r,this.y1=i}function o5(e,t,n){var r,i=this._x0,s=this._y0,a,l,c,u,d=this._x1,p=this._y1,f=[],h=this._root,m,b;for(h&&f.push(new wt(h,i,s,d,p)),n==null?n=1/0:(i=e-n,s=t-n,d=e+n,p=t+n,n*=n);m=f.pop();)if(!(!(h=m.node)||(a=m.x0)>d||(l=m.y0)>p||(c=m.x1)<i||(u=m.y1)<s))if(h.length){var j=(a+c)/2,g=(l+u)/2;f.push(new wt(h[3],j,g,c,u),new wt(h[2],a,g,j,u),new wt(h[1],j,l,c,g),new wt(h[0],a,l,j,g)),(b=(t>=g)<<1|e>=j)&&(m=f[f.length-1],f[f.length-1]=f[f.length-1-b],f[f.length-1-b]=m)}else{var x=e-+this._x.call(null,h.data),v=t-+this._y.call(null,h.data),_=x*x+v*v;if(_<n){var A=Math.sqrt(n=_);i=e-A,s=t-A,d=e+A,p=t+A,r=h.data}}return r}function s5(e){if(isNaN(d=+this._x.call(null,e))||isNaN(p=+this._y.call(null,e)))return this;var t,n=this._root,r,i,s,a=this._x0,l=this._y0,c=this._x1,u=this._y1,d,p,f,h,m,b,j,g;if(!n)return this;if(n.length)for(;;){if((m=d>=(f=(a+c)/2))?a=f:c=f,(b=p>=(h=(l+u)/2))?l=h:u=h,t=n,!(n=n[j=b<<1|m]))return this;if(!n.length)break;(t[j+1&3]||t[j+2&3]||t[j+3&3])&&(r=t,g=j)}for(;n.data!==e;)if(i=n,!(n=n.next))return this;return(s=n.next)&&delete n.next,i?(s?i.next=s:delete i.next,this):t?(s?t[j]=s:delete t[j],(n=t[0]||t[1]||t[2]||t[3])&&n===(t[3]||t[2]||t[1]||t[0])&&!n.length&&(r?r[g]=n:this._root=n),this):(this._root=s,this)}function a5(e){for(var t=0,n=e.length;t<n;++t)this.remove(e[t]);return this}function l5(){return this._root}function c5(){var e=0;return this.visit(function(t){if(!t.length)do++e;while(t=t.next)}),e}function u5(e){var t=[],n,r=this._root,i,s,a,l,c;for(r&&t.push(new wt(r,this._x0,this._y0,this._x1,this._y1));n=t.pop();)if(!e(r=n.node,s=n.x0,a=n.y0,l=n.x1,c=n.y1)&&r.length){var u=(s+l)/2,d=(a+c)/2;(i=r[3])&&t.push(new wt(i,u,d,l,c)),(i=r[2])&&t.push(new wt(i,s,d,u,c)),(i=r[1])&&t.push(new wt(i,u,a,l,d)),(i=r[0])&&t.push(new wt(i,s,a,u,d))}return this}function d5(e){var t=[],n=[],r;for(this._root&&t.push(new wt(this._root,this._x0,this._y0,this._x1,this._y1));r=t.pop();){var i=r.node;if(i.length){var s,a=r.x0,l=r.y0,c=r.x1,u=r.y1,d=(a+c)/2,p=(l+u)/2;(s=i[0])&&t.push(new wt(s,a,l,d,p)),(s=i[1])&&t.push(new wt(s,d,l,c,p)),(s=i[2])&&t.push(new wt(s,a,p,d,u)),(s=i[3])&&t.push(new wt(s,d,p,c,u))}n.push(r)}for(;r=n.pop();)e(r.node,r.x0,r.y0,r.x1,r.y1);return this}function p5(e){return e[0]}function f5(e){return arguments.length?(this._x=e,this):this._x}function h5(e){return e[1]}function m5(e){return arguments.length?(this._y=e,this):this._y}function Mp(e,t,n){var r=new Lp(t??p5,n??h5,NaN,NaN,NaN,NaN);return e==null?r:r.addAll(e)}function Lp(e,t,n,r,i,s){this._x=e,this._y=t,this._x0=n,this._y0=r,this._x1=i,this._y1=s,this._root=void 0}function rg(e){for(var t={data:e.data},n=t;e=e.next;)n=n.next={data:e.data};return t}var St=Mp.prototype=Lp.prototype;St.copy=function(){var e=new Lp(this._x,this._y,this._x0,this._y0,this._x1,this._y1),t=this._root,n,r;if(!t)return e;if(!t.length)return e._root=rg(t),e;for(n=[{source:t,target:e._root=new Array(4)}];t=n.pop();)for(var i=0;i<4;++i)(r=t.source[i])&&(r.length?n.push({source:r,target:t.target[i]=new Array(4)}):t.target[i]=rg(r));return e};St.add=e5;St.addAll=t5;St.cover=n5;St.data=r5;St.extent=i5;St.find=o5;St.remove=s5;St.removeAll=a5;St.root=l5;St.size=c5;St.visit=u5;St.visitAfter=d5;St.x=f5;St.y=m5;function Mr(e){return function(){return e}}function nr(e){return(e()-.5)*1e-6}function g5(e){return e.x+e.vx}function x5(e){return e.y+e.vy}function ig(e){var t,n,r,i=1,s=1;typeof e!="function"&&(e=Mr(e==null?1:+e));function a(){for(var u,d=t.length,p,f,h,m,b,j,g=0;g<s;++g)for(p=Mp(t,g5,x5).visitAfter(l),u=0;u<d;++u)f=t[u],b=n[f.index],j=b*b,h=f.x+f.vx,m=f.y+f.vy,p.visit(x);function x(v,_,A,S,M){var E=v.data,U=v.r,z=b+U;if(E){if(E.index>f.index){var $=h-E.x-E.vx,q=m-E.y-E.vy,Y=$*$+q*q;Y<z*z&&($===0&&($=nr(r),Y+=$*$),q===0&&(q=nr(r),Y+=q*q),Y=(z-(Y=Math.sqrt(Y)))/Y*i,f.vx+=($*=Y)*(z=(U*=U)/(j+U)),f.vy+=(q*=Y)*z,E.vx-=$*(z=1-z),E.vy-=q*z)}return}return _>h+z||S<h-z||A>m+z||M<m-z}}function l(u){if(u.data)return u.r=n[u.data.index];for(var d=u.r=0;d<4;++d)u[d]&&u[d].r>u.r&&(u.r=u[d].r)}function c(){if(t){var u,d=t.length,p;for(n=new Array(d),u=0;u<d;++u)p=t[u],n[p.index]=+e(p,u,t)}}return a.initialize=function(u,d){t=u,r=d,c()},a.iterations=function(u){return arguments.length?(s=+u,a):s},a.strength=function(u){return arguments.length?(i=+u,a):i},a.radius=function(u){return arguments.length?(e=typeof u=="function"?u:Mr(+u),c(),a):e},a}function y5(e){return e.index}function og(e,t){var n=e.get(t);if(!n)throw new Error("node not found: "+t);return n}function sg(e){var t=y5,n=p,r,i=Mr(30),s,a,l,c,u,d=1;e==null&&(e=[]);function p(j){return 1/Math.min(l[j.source.index],l[j.target.index])}function f(j){for(var g=0,x=e.length;g<d;++g)for(var v=0,_,A,S,M,E,U,z;v<x;++v)_=e[v],A=_.source,S=_.target,M=S.x+S.vx-A.x-A.vx||nr(u),E=S.y+S.vy-A.y-A.vy||nr(u),U=Math.sqrt(M*M+E*E),U=(U-s[v])/U*j*r[v],M*=U,E*=U,S.vx-=M*(z=c[v]),S.vy-=E*z,A.vx+=M*(z=1-z),A.vy+=E*z}function h(){if(a){var j,g=a.length,x=e.length,v=new Map(a.map((A,S)=>[t(A,S,a),A])),_;for(j=0,l=new Array(g);j<x;++j)_=e[j],_.index=j,typeof _.source!="object"&&(_.source=og(v,_.source)),typeof _.target!="object"&&(_.target=og(v,_.target)),l[_.source.index]=(l[_.source.index]||0)+1,l[_.target.index]=(l[_.target.index]||0)+1;for(j=0,c=new Array(x);j<x;++j)_=e[j],c[j]=l[_.source.index]/(l[_.source.index]+l[_.target.index]);r=new Array(x),m(),s=new Array(x),b()}}function m(){if(a)for(var j=0,g=e.length;j<g;++j)r[j]=+n(e[j],j,e)}function b(){if(a)for(var j=0,g=e.length;j<g;++j)s[j]=+i(e[j],j,e)}return f.initialize=function(j,g){a=j,u=g,h()},f.links=function(j){return arguments.length?(e=j,h(),f):e},f.id=function(j){return arguments.length?(t=j,f):t},f.iterations=function(j){return arguments.length?(d=+j,f):d},f.strength=function(j){return arguments.length?(n=typeof j=="function"?j:Mr(+j),m(),f):n},f.distance=function(j){return arguments.length?(i=typeof j=="function"?j:Mr(+j),b(),f):i},f}const v5=1664525,b5=1013904223,ag=4294967296;function w5(){let e=1;return()=>(e=(v5*e+b5)%ag)/ag}function k5(e){return e.x}function j5(e){return e.y}var _5=10,S5=Math.PI*(3-Math.sqrt(5));function lg(e){var t,n=1,r=.001,i=1-Math.pow(r,1/300),s=0,a=.6,l=new Map,c=Tp(p),u=us("tick","end"),d=w5();e==null&&(e=[]);function p(){f(),u.call("tick",t),n<r&&(c.stop(),u.call("end",t))}function f(b){var j,g=e.length,x;b===void 0&&(b=1);for(var v=0;v<b;++v)for(n+=(s-n)*i,l.forEach(function(_){_(n)}),j=0;j<g;++j)x=e[j],x.fx==null?x.x+=x.vx*=a:(x.x=x.fx,x.vx=0),x.fy==null?x.y+=x.vy*=a:(x.y=x.fy,x.vy=0);return t}function h(){for(var b=0,j=e.length,g;b<j;++b){if(g=e[b],g.index=b,g.fx!=null&&(g.x=g.fx),g.fy!=null&&(g.y=g.fy),isNaN(g.x)||isNaN(g.y)){var x=_5*Math.sqrt(.5+b),v=b*S5;g.x=x*Math.cos(v),g.y=x*Math.sin(v)}(isNaN(g.vx)||isNaN(g.vy))&&(g.vx=g.vy=0)}}function m(b){return b.initialize&&b.initialize(e,d),b}return h(),t={tick:f,restart:function(){return c.restart(p),t},stop:function(){return c.stop(),t},nodes:function(b){return arguments.length?(e=b,h(),l.forEach(m),t):e},alpha:function(b){return arguments.length?(n=+b,t):n},alphaMin:function(b){return arguments.length?(r=+b,t):r},alphaDecay:function(b){return arguments.length?(i=+b,t):+i},alphaTarget:function(b){return arguments.length?(s=+b,t):s},velocityDecay:function(b){return arguments.length?(a=1-b,t):1-a},randomSource:function(b){return arguments.length?(d=b,l.forEach(m),t):d},force:function(b,j){return arguments.length>1?(j==null?l.delete(b):l.set(b,m(j)),t):l.get(b)},find:function(b,j,g){var x=0,v=e.length,_,A,S,M,E;for(g==null?g=1/0:g*=g,x=0;x<v;++x)M=e[x],_=b-M.x,A=j-M.y,S=_*_+A*A,S<g&&(E=M,g=S);return E},on:function(b,j){return arguments.length>1?(u.on(b,j),t):u.on(b)}}}function cg(){var e,t,n,r,i=Mr(-30),s,a=1,l=1/0,c=.81;function u(h){var m,b=e.length,j=Mp(e,k5,j5).visitAfter(p);for(r=h,m=0;m<b;++m)t=e[m],j.visit(f)}function d(){if(e){var h,m=e.length,b;for(s=new Array(m),h=0;h<m;++h)b=e[h],s[b.index]=+i(b,h,e)}}function p(h){var m=0,b,j,g=0,x,v,_;if(h.length){for(x=v=_=0;_<4;++_)(b=h[_])&&(j=Math.abs(b.value))&&(m+=b.value,g+=j,x+=j*b.x,v+=j*b.y);h.x=x/g,h.y=v/g}else{b=h,b.x=b.data.x,b.y=b.data.y;do m+=s[b.data.index];while(b=b.next)}h.value=m}function f(h,m,b,j){if(!h.value)return!0;var g=h.x-t.x,x=h.y-t.y,v=j-m,_=g*g+x*x;if(v*v/c<_)return _<l&&(g===0&&(g=nr(n),_+=g*g),x===0&&(x=nr(n),_+=x*x),_<a&&(_=Math.sqrt(a*_)),t.vx+=g*h.value*r/_,t.vy+=x*h.value*r/_),!0;if(h.length||_>=l)return;(h.data!==t||h.next)&&(g===0&&(g=nr(n),_+=g*g),x===0&&(x=nr(n),_+=x*x),_<a&&(_=Math.sqrt(a*_)));do h.data!==t&&(v=s[h.data.index]*r/_,t.vx+=g*v,t.vy+=x*v);while(h=h.next)}return u.initialize=function(h,m){e=h,n=m,d()},u.strength=function(h){return arguments.length?(i=typeof h=="function"?h:Mr(+h),d(),u):i},u.distanceMin=function(h){return arguments.length?(a=h*h,u):Math.sqrt(a)},u.distanceMax=function(h){return arguments.length?(l=h*h,u):Math.sqrt(l)},u.theta=function(h){return arguments.length?(c=h*h,u):Math.sqrt(c)},u}const Vs=e=>()=>e;function C5(e,{sourceEvent:t,target:n,transform:r,dispatch:i}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:r,enumerable:!0,configurable:!0},_:{value:i}})}function Ln(e,t,n){this.k=e,this.x=t,this.y=n}Ln.prototype={constructor:Ln,scale:function(e){return e===1?this:new Ln(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Ln(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var So=new Ln(1,0,0);Ln.prototype;function Ec(e){e.stopImmediatePropagation()}function no(e){e.preventDefault(),e.stopImmediatePropagation()}function N5(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function E5(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function ug(){return this.__zoom||So}function z5(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function T5(){return navigator.maxTouchPoints||"ontouchstart"in this}function A5(e,t,n){var r=e.invertX(t[0][0])-n[0][0],i=e.invertX(t[1][0])-n[1][0],s=e.invertY(t[0][1])-n[0][1],a=e.invertY(t[1][1])-n[1][1];return e.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),a>s?(s+a)/2:Math.min(0,s)||Math.max(0,a))}function dg(){var e=N5,t=E5,n=A5,r=z5,i=T5,s=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],l=250,c=U3,u=us("start","zoom","end"),d,p,f,h=500,m=150,b=0,j=10;function g(T){T.property("__zoom",ug).on("wheel.zoom",E,{passive:!1}).on("mousedown.zoom",U).on("dblclick.zoom",z).filter(i).on("touchstart.zoom",$).on("touchmove.zoom",q).on("touchend.zoom touchcancel.zoom",Y).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}g.transform=function(T,P,D,C){var L=T.selection?T.selection():T;L.property("__zoom",ug),T!==L?A(T,P,D,C):L.interrupt().each(function(){S(this,arguments).event(C).start().zoom(null,typeof P=="function"?P.apply(this,arguments):P).end()})},g.scaleBy=function(T,P,D,C){g.scaleTo(T,function(){var L=this.__zoom.k,R=typeof P=="function"?P.apply(this,arguments):P;return L*R},D,C)},g.scaleTo=function(T,P,D,C){g.transform(T,function(){var L=t.apply(this,arguments),R=this.__zoom,w=D==null?_(L):typeof D=="function"?D.apply(this,arguments):D,W=R.invert(w),K=typeof P=="function"?P.apply(this,arguments):P;return n(v(x(R,K),w,W),L,a)},D,C)},g.translateBy=function(T,P,D,C){g.transform(T,function(){return n(this.__zoom.translate(typeof P=="function"?P.apply(this,arguments):P,typeof D=="function"?D.apply(this,arguments):D),t.apply(this,arguments),a)},null,C)},g.translateTo=function(T,P,D,C,L){g.transform(T,function(){var R=t.apply(this,arguments),w=this.__zoom,W=C==null?_(R):typeof C=="function"?C.apply(this,arguments):C;return n(So.translate(W[0],W[1]).scale(w.k).translate(typeof P=="function"?-P.apply(this,arguments):-P,typeof D=="function"?-D.apply(this,arguments):-D),R,a)},C,L)};function x(T,P){return P=Math.max(s[0],Math.min(s[1],P)),P===T.k?T:new Ln(P,T.x,T.y)}function v(T,P,D){var C=P[0]-D[0]*T.k,L=P[1]-D[1]*T.k;return C===T.x&&L===T.y?T:new Ln(T.k,C,L)}function _(T){return[(+T[0][0]+ +T[1][0])/2,(+T[0][1]+ +T[1][1])/2]}function A(T,P,D,C){T.on("start.zoom",function(){S(this,arguments).event(C).start()}).on("interrupt.zoom end.zoom",function(){S(this,arguments).event(C).end()}).tween("zoom",function(){var L=this,R=arguments,w=S(L,R).event(C),W=t.apply(L,R),K=D==null?_(W):typeof D=="function"?D.apply(L,R):D,y=Math.max(W[1][0]-W[0][0],W[1][1]-W[0][1]),N=L.__zoom,V=typeof P=="function"?P.apply(L,R):P,re=c(N.invert(K).concat(y/N.k),V.invert(K).concat(y/V.k));return function(fe){if(fe===1)fe=V;else{var me=re(fe),ee=y/me[2];fe=new Ln(ee,K[0]-me[0]*ee,K[1]-me[1]*ee)}w.zoom(null,fe)}})}function S(T,P,D){return!D&&T.__zooming||new M(T,P)}function M(T,P){this.that=T,this.args=P,this.active=0,this.sourceEvent=null,this.extent=t.apply(T,P),this.taps=0}M.prototype={event:function(T){return T&&(this.sourceEvent=T),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(T,P){return this.mouse&&T!=="mouse"&&(this.mouse[1]=P.invert(this.mouse[0])),this.touch0&&T!=="touch"&&(this.touch0[1]=P.invert(this.touch0[0])),this.touch1&&T!=="touch"&&(this.touch1[1]=P.invert(this.touch1[0])),this.that.__zoom=P,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(T){var P=bt(this.that).datum();u.call(T,this.that,new C5(T,{sourceEvent:this.sourceEvent,target:g,transform:this.that.__zoom,dispatch:u}),P)}};function E(T,...P){if(!e.apply(this,arguments))return;var D=S(this,P).event(T),C=this.__zoom,L=Math.max(s[0],Math.min(s[1],C.k*Math.pow(2,r.apply(this,arguments)))),R=Tn(T);if(D.wheel)(D.mouse[0][0]!==R[0]||D.mouse[0][1]!==R[1])&&(D.mouse[1]=C.invert(D.mouse[0]=R)),clearTimeout(D.wheel);else{if(C.k===L)return;D.mouse=[R,C.invert(R)],pa(this),D.start()}no(T),D.wheel=setTimeout(w,m),D.zoom("mouse",n(v(x(C,L),D.mouse[0],D.mouse[1]),D.extent,a));function w(){D.wheel=null,D.end()}}function U(T,...P){if(f||!e.apply(this,arguments))return;var D=T.currentTarget,C=S(this,P,!0).event(T),L=bt(T.view).on("mousemove.zoom",K,!0).on("mouseup.zoom",y,!0),R=Tn(T,D),w=T.clientX,W=T.clientY;I1(T.view),Ec(T),C.mouse=[R,this.__zoom.invert(R)],pa(this),C.start();function K(N){if(no(N),!C.moved){var V=N.clientX-w,re=N.clientY-W;C.moved=V*V+re*re>b}C.event(N).zoom("mouse",n(v(C.that.__zoom,C.mouse[0]=Tn(N,D),C.mouse[1]),C.extent,a))}function y(N){L.on("mousemove.zoom mouseup.zoom",null),O1(N.view,C.moved),no(N),C.event(N).end()}}function z(T,...P){if(e.apply(this,arguments)){var D=this.__zoom,C=Tn(T.changedTouches?T.changedTouches[0]:T,this),L=D.invert(C),R=D.k*(T.shiftKey?.5:2),w=n(v(x(D,R),C,L),t.apply(this,P),a);no(T),l>0?bt(this).transition().duration(l).call(A,w,C,T):bt(this).call(g.transform,w,C,T)}}function $(T,...P){if(e.apply(this,arguments)){var D=T.touches,C=D.length,L=S(this,P,T.changedTouches.length===C).event(T),R,w,W,K;for(Ec(T),w=0;w<C;++w)W=D[w],K=Tn(W,this),K=[K,this.__zoom.invert(K),W.identifier],L.touch0?!L.touch1&&L.touch0[2]!==K[2]&&(L.touch1=K,L.taps=0):(L.touch0=K,R=!0,L.taps=1+!!d);d&&(d=clearTimeout(d)),R&&(L.taps<2&&(p=K[0],d=setTimeout(function(){d=null},h)),pa(this),L.start())}}function q(T,...P){if(this.__zooming){var D=S(this,P).event(T),C=T.changedTouches,L=C.length,R,w,W,K;for(no(T),R=0;R<L;++R)w=C[R],W=Tn(w,this),D.touch0&&D.touch0[2]===w.identifier?D.touch0[0]=W:D.touch1&&D.touch1[2]===w.identifier&&(D.touch1[0]=W);if(w=D.that.__zoom,D.touch1){var y=D.touch0[0],N=D.touch0[1],V=D.touch1[0],re=D.touch1[1],fe=(fe=V[0]-y[0])*fe+(fe=V[1]-y[1])*fe,me=(me=re[0]-N[0])*me+(me=re[1]-N[1])*me;w=x(w,Math.sqrt(fe/me)),W=[(y[0]+V[0])/2,(y[1]+V[1])/2],K=[(N[0]+re[0])/2,(N[1]+re[1])/2]}else if(D.touch0)W=D.touch0[0],K=D.touch0[1];else return;D.zoom("touch",n(v(w,W,K),D.extent,a))}}function Y(T,...P){if(this.__zooming){var D=S(this,P).event(T),C=T.changedTouches,L=C.length,R,w;for(Ec(T),f&&clearTimeout(f),f=setTimeout(function(){f=null},h),R=0;R<L;++R)w=C[R],D.touch0&&D.touch0[2]===w.identifier?delete D.touch0:D.touch1&&D.touch1[2]===w.identifier&&delete D.touch1;if(D.touch1&&!D.touch0&&(D.touch0=D.touch1,delete D.touch1),D.touch0)D.touch0[1]=this.__zoom.invert(D.touch0[0]);else if(D.end(),D.taps===2&&(w=Tn(w,this),Math.hypot(p[0]-w[0],p[1]-w[1])<j)){var W=bt(this).on("dblclick.zoom");W&&W.apply(this,arguments)}}}return g.wheelDelta=function(T){return arguments.length?(r=typeof T=="function"?T:Vs(+T),g):r},g.filter=function(T){return arguments.length?(e=typeof T=="function"?T:Vs(!!T),g):e},g.touchable=function(T){return arguments.length?(i=typeof T=="function"?T:Vs(!!T),g):i},g.extent=function(T){return arguments.length?(t=typeof T=="function"?T:Vs([[+T[0][0],+T[0][1]],[+T[1][0],+T[1][1]]]),g):t},g.scaleExtent=function(T){return arguments.length?(s[0]=+T[0],s[1]=+T[1],g):[s[0],s[1]]},g.translateExtent=function(T){return arguments.length?(a[0][0]=+T[0][0],a[1][0]=+T[1][0],a[0][1]=+T[0][1],a[1][1]=+T[1][1],g):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},g.constrain=function(T){return arguments.length?(n=T,g):n},g.duration=function(T){return arguments.length?(l=+T,g):l},g.interpolate=function(T){return arguments.length?(c=T,g):c},g.on=function(){var T=u.on.apply(u,arguments);return T===u?g:T},g.clickDistance=function(T){return arguments.length?(b=(T=+T)*T,g):Math.sqrt(b)},g.tapDistance=function(T){return arguments.length?(j=+T,g):j},g}const pg=[{bg:"#0e7490",fg:"#e0f2fe"},{bg:"#6d28d9",fg:"#ede9fe"},{bg:"#047857",fg:"#d1fae5"},{bg:"#b91c1c",fg:"#fee2e2"},{bg:"#b45309",fg:"#fef3c7"},{bg:"#1d4ed8",fg:"#dbeafe"},{bg:"#be185d",fg:"#fce7f3"},{bg:"#4d7c0f",fg:"#ecfccb"},{bg:"#7c3aed",fg:"#ede9fe"},{bg:"#0f766e",fg:"#ccfbf1"},{bg:"#c2410c",fg:"#ffedd5"},{bg:"#4338ca",fg:"#e0e7ff"}],fg=new Map;function Hs(e){if(e==="sandbox"||e==="system")return{bg:"#374151",fg:"#9ca3af"};const t=fg.get(e);if(t)return t;let n=0;for(let s=0;s<e.length;s++)n=(n<<5)-n+e.charCodeAt(s),n=n&n;const r=Math.abs(n)%pg.length,i=pg[r];return fg.set(e,i),i}const qs={bg:"#14b8a6"},uo={LlmAgent:"#00f5d4",SequentialAgent:"#7b2cbf",LoopAgent:"#ffd93d",ParallelAgent:"#ff6b6b",Tool:"#14b8a6",System:"#6b7280"};function Kr(e){return uo[e]||"#6b7280"}function P5({agents:e,events:t,selectedEventIndex:n,isOpen:r,onOpenChange:i,runState:s="idle"}){const[a,l]=k.useState(!1),[c,u]=k.useState(!1),d=r!==void 0?r:a,p=P=>{i?i(P):l(P)},[f,h]=k.useState(null),[m,b]=k.useState(null),j=k.useRef(null),g=k.useRef(null),x=k.useRef(null),v=k.useRef(null),_=k.useRef(null),A=k.useRef(null),S=k.useRef(new Map),M=k.useRef(null),{activeAgents:E,activeTools:U,transitions:z,visitedAgents:$,toolCalls:q,activeBranches:Y}=k.useMemo(()=>{var ie;const P=n!==null?n:t.length-1;if(P<0||t.length===0)return{activeAgents:new Set,activeTools:new Set,transitions:new Map,visitedAgents:new Set,toolCalls:new Map,activeBranches:new Set};const D=new Map(e.map(I=>[I.name,I.type])),C=new Map(e.map(I=>[I.id,I])),L=I=>{const G=D.get(I);if(!G)return!1;const J=G.toLowerCase();return J==="sequentialagent"||J==="sequential"},R=new Map,w=new Map;for(const I of e)if(L(I.name)&&"sub_agents"in I){const J=I.sub_agents.map(oe=>{var B;return(B=C.get(oe))==null?void 0:B.name}).filter(oe=>oe!==void 0);w.set(I.name,J);for(const oe of J)R.set(oe,I.name)}const W=(I,G)=>{const J=w.get(G);if(!J)return null;const oe=J.indexOf(I);return oe>0?J[oe-1]:null},K=t.slice(0,P+1),y=new Map,N=new Map,V=new Set,re=new Set;V.add("system");const fe=new Map;fe.set("",["system"]);let me=null;const ee=new Map,F=new Map,Q=new Map,te=I=>{const G=I||"";return fe.has(G)||fe.set(G,["system"]),fe.get(G)},O=(I,G)=>{if(!I)return null;const J=I.split("."),oe=J.indexOf(G);return oe>0?J[oe-1]:J.length>=1&&J[J.length-1]===G&&J.length>=2?J[J.length-2]:null};for(const I of K){const G=I.branch||"";if(I.event_type==="agent_start"){const J=I.agent_name;V.add(J);const oe=te(G);let B=null;const Z=O(G,J);Z&&Z!==J?(B=Z,oe.includes(Z)||(oe.push(Z),V.add(Z))):oe.length>0&&(B=oe[oe.length-1]);let se=B;const ge=R.get(J);if(ge){const X=W(J,ge);X?se=X:se=ge,Q.set(J,ge)}else if(B&&L(B)){Q.set(J,B);const X=F.get(B);X&&X!==J&&(se=X)}if(se&&se!==J){const X=`${se}->${J}`;y.set(X,(y.get(X)||0)+1),se==="system"&&G===""&&!me&&(me=J)}oe[oe.length-1]!==J&&oe.push(J)}else if(I.event_type==="agent_end"){const J=I.agent_name,oe=Q.get(J);if(oe&&F.set(oe,J),L(J)){const B=w.get(J),Z=B&&B.length>0?B[B.length-1]:F.get(J);if(Z){const se=`${Z}->${J}`;y.set(se,(y.get(se)||0)+1)}F.delete(J)}if(J===me){const B=`${J}->system`;y.set(B,(y.get(B)||0)+1)}for(const[,B]of fe){const Z=B.lastIndexOf(J);Z>0&&B.splice(Z,1)}}else if(I.event_type==="tool_call"){const J=(ie=I.data)==null?void 0:ie.tool_name,oe=te(G);if(J&&oe.length>0){const B=oe[oe.length-1];re.add(J);const Z=`${B}->tool:${J}`;N.set(Z,(N.get(Z)||0)+1),ee.set(G,J)}}else I.event_type==="tool_result"&&ee.set(G,null)}re.forEach(I=>V.add(`tool:${I}`));const ne=new Set,le=new Set,be=new Set;for(const[I,G]of fe){if(G.length>1){const oe=G[G.length-1];ne.add(oe),I&&be.add(I)}const J=ee.get(I);J&&le.add(J)}return{activeAgents:ne,activeTools:le,transitions:y,visitedAgents:V,toolCalls:N,activeBranches:be}},[t,n,e]),T=k.useMemo(()=>{const P=new Map(e.map(w=>[w.name,w])),D=[],C=new Map;for(const w of $){if(w.startsWith("tool:"))continue;const W=P.get(w),K=(W==null?void 0:W.id)||w,y=S.current.get(K);D.push({id:K,name:w,type:w==="system"?"System":(W==null?void 0:W.type)||"LlmAgent",isActive:E.has(w),wasActive:!0,x:y==null?void 0:y.x,y:y==null?void 0:y.y}),C.set(w,K)}for(const w of $){if(!w.startsWith("tool:"))continue;const W=w.slice(5),K=`tool:${W}`,y=S.current.get(K);D.push({id:K,name:W,type:"Tool",isActive:U.has(W),wasActive:!0,x:y==null?void 0:y.x,y:y==null?void 0:y.y}),C.set(w,K)}const L=new Set(D.map(w=>w.id)),R=[];for(const[w,W]of z){const[K,y]=w.split("->"),N=C.get(K),V=C.get(y);N&&V&&L.has(N)&&L.has(V)&&R.push({source:N,target:V,type:"transition",count:W})}for(const[w,W]of q){const[K,y]=w.split("->"),N=C.get(K),V=C.get(y);N&&V&&L.has(N)&&L.has(V)&&R.push({source:N,target:V,type:"tool",count:W})}return{nodes:D,links:R}},[e,E,U,$,z,q]);return k.useEffect(()=>{var ie;if(!j.current||!d)return;const P=bt(j.current),D=300,C=400;P.selectAll("*").remove();const L=P.append("g"),R={current:((ie=M.current)==null?void 0:ie.k)||1},w=dg().scaleExtent([.3,3]).on("zoom",I=>{L.attr("transform",I.transform),M.current=I.transform,R.current=I.transform.k});P.call(w),M.current&&(P.call(w.transform,M.current),R.current=M.current.k);const W=()=>{if(T.nodes.length===0)return null;let I=1/0,G=-1/0,J=1/0,oe=-1/0;if(T.nodes.forEach(we=>{we.x!==void 0&&we.y!==void 0&&(I=Math.min(I,we.x),G=Math.max(G,we.x),J=Math.min(J,we.y),oe=Math.max(oe,we.y))}),I===1/0)return null;const B=60,Z=G-I+B*2,se=oe-J+B*2,ge=Math.min(D/Z,C/se,1.5)*.85,X=(I+G)/2,ae=(J+oe)/2;return So.translate(D/2,C/2).scale(ge).translate(-X,-ae)},K=(I,G,J)=>I+(G-I)*J,y=I=>{const G=M.current;if(!G){M.current=I,R.current=I.k,P.call(w.transform,I);return}const J=.15,oe=K(G.x,I.x,J),B=K(G.y,I.y,J),Z=K(G.k,I.k,J),se=So.translate(oe,B).scale(Z);M.current=se,R.current=se.k,P.call(w.transform,se)},N=T.nodes.every(I=>I.x!==void 0&&I.y!==void 0);if(!N){const I=new Map;for(const G of T.nodes)G.x!==void 0&&G.y!==void 0&&I.set(G.id,{x:G.x,y:G.y});for(const G of T.nodes)if(G.x===void 0||G.y===void 0){const J=T.links.find(oe=>(typeof oe.target=="string"?oe.target:oe.target.id)===G.id);if(J){const oe=typeof J.source=="string"?J.source:J.source.id,B=I.get(oe);if(B){const Z=Math.random()*Math.PI*2,se=50+Math.random()*30;G.x=B.x+Math.cos(Z)*se,G.y=B.y+Math.sin(Z)*se,I.set(G.id,{x:G.x,y:G.y})}}(G.x===void 0||G.y===void 0)&&(G.x=(Math.random()-.5)*50,G.y=(Math.random()-.5)*50)}}const V=140,re=()=>{const I=V/R.current;for(const G of T.nodes){if(G.x===void 0||G.y===void 0)continue;const J=Math.sqrt(G.x*G.x+G.y*G.y);if(J>I){const oe=I/J;G.x*=oe,G.y*=oe}}},fe=()=>{for(const I of T.nodes)if(I.name==="system"&&I.x!==void 0&&I.y!==void 0){const J=V/R.current*.75,oe=225*Math.PI/180,B=J*Math.cos(oe),Z=-J*Math.sin(oe),se=.3;I.vx=(I.vx||0)+(B-I.x)*se,I.vy=(I.vy||0)+(Z-I.y)*se}},me=new Set;for(const I of T.links){const G=typeof I.source=="string"?I.source:I.source.id;me.add(G)}const ee=new Set(T.nodes.filter(I=>!me.has(I.id)&&I.name!=="system").map(I=>I.id)),F=()=>{const G=V/R.current*.65,J=.15;for(const oe of T.nodes)if(ee.has(oe.id)&&oe.x!==void 0&&oe.y!==void 0){const B=Math.sqrt(oe.x*oe.x+oe.y*oe.y)||1;if(B<G){const Z=oe.x/B,se=oe.y/B,ge=(G-B)*J;oe.vx=(oe.vx||0)+Z*ge,oe.vy=(oe.vy||0)+se*ge}}},Q=lg(T.nodes).force("link",sg(T.links).id(I=>I.id).distance(100)).force("charge",cg().strength(-400)).force("center",ng(0,0)).force("collision",ig().radius(40)).force("boundary",re).force("systemPull",fe).force("leafOutward",F).alphaDecay(.01);N?Q.alpha(.3):Q.alpha(1),A.current=Q;const te=P.append("defs");T.links.forEach((I,G)=>{const J=te.append("linearGradient").attr("id",`link-gradient-${G}`).attr("gradientUnits","userSpaceOnUse");if(I.type==="transition")J.append("stop").attr("offset","0%").attr("stop-color","#166534").attr("stop-opacity",.1),J.append("stop").attr("offset","25%").attr("stop-color","#166534").attr("stop-opacity",.4),J.append("stop").attr("offset","50%").attr("stop-color","#22c55e").attr("stop-opacity",.7),J.append("stop").attr("offset","75%").attr("stop-color","#4ade80").attr("stop-opacity",.9),J.append("stop").attr("offset","100%").attr("stop-color","#86efac").attr("stop-opacity",1);else{const oe=I.type==="sub_agent"?{start:"#3730a3",end:"#a5b4fc"}:{start:"#92400e",end:"#fcd34d"};J.append("stop").attr("offset","0%").attr("stop-color",oe.start),J.append("stop").attr("offset","100%").attr("stop-color",oe.end)}});const O=L.append("g").attr("class","links").selectAll("path").data(T.links).join("path").attr("stroke",(I,G)=>`url(#link-gradient-${G})`).attr("stroke-width",I=>{const G=I.type==="transition"?2:1.5;return Math.min(G+(I.count-1)*1.5,18)}).attr("stroke-opacity",I=>I.type==="transition"?.8:.5).attr("stroke-dasharray",I=>I.type==="tool"?"4,2":"none").attr("fill","none"),ne=L.append("g").selectAll("g").data(T.nodes).join("g").call(Fm().on("start",(I,G)=>{I.active||Q.alphaTarget(.3).restart(),G.fx=G.x,G.fy=G.y}).on("drag",(I,G)=>{G.fx=I.x,G.fy=I.y}).on("end",(I,G)=>{I.active||Q.alphaTarget(0),G.fx=null,G.fy=null})),le=I=>I.type==="System"?14:I.type==="Tool"?12:18;ne.filter(I=>I.type!=="Tool"&&I.type!=="System").append("circle").attr("r",I=>le(I)+5).attr("fill","none").attr("stroke",I=>Kr(I.type)).attr("stroke-width",3).attr("stroke-opacity",I=>I.wasActive?.9:.4).attr("stroke-dasharray",I=>I.type==="LoopAgent"?"6,3":I.type==="ParallelAgent"?"3,3":"none"),ne.append("circle").attr("r",I=>le(I)).attr("fill",I=>I.type==="Tool"?qs.bg:Hs(I.name).bg).attr("stroke",I=>I.isActive?"#fff":I.wasActive?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.2)").attr("stroke-width",I=>I.isActive?3:1.5).attr("opacity",I=>I.wasActive?1:.5).attr("class",I=>I.isActive?"active-node":"").style("cursor","pointer").on("mouseenter",function(I,G){var Z;const J=(Z=x.current)==null?void 0:Z.getBoundingClientRect();if(!J)return;const oe=I.clientX-J.left,B=I.clientY-J.top;h({x:oe,y:B,node:G}),bt(this).transition().duration(150).attr("r",le(G)+6)}).on("mouseleave",function(I,G){h(null),bt(this).transition().duration(150).attr("r",le(G))}),ne.append("text").text(I=>I.name.length>10?I.name.slice(0,8)+"…":I.name).attr("text-anchor","middle").attr("dy",32).attr("font-size",10).attr("fill","#e4e4e7").attr("font-weight",I=>I.isActive?600:400),Q.on("tick",()=>{O.attr("d",G=>{const J=G.target.x-G.source.x,oe=G.target.y-G.source.y,B=Math.sqrt(J*J+oe*oe)*1.5;return`M${G.source.x},${G.source.y}A${B},${B} 0 0,1 ${G.target.x},${G.target.y}`}),T.links.forEach((G,J)=>{te.select(`#link-gradient-${J}`).attr("x1",G.source.x).attr("y1",G.source.y).attr("x2",G.target.x).attr("y2",G.target.y)}),ne.attr("transform",G=>`translate(${G.x},${G.y})`),T.nodes.forEach(G=>{G.x!==void 0&&G.y!==void 0&&S.current.set(G.id,{x:G.x,y:G.y})});const I=W();I&&y(I)});const be=W();return be&&y(be),()=>{Q.stop()}},[T,d]),k.useEffect(()=>{if(!g.current||!c)return;const P=bt(g.current),D=v.current;if(!D)return;const C=Math.min(D.clientWidth,D.clientHeight),L=C,R=C;P.selectAll("*").remove();const w=P.append("g"),W=dg().scaleExtent([.3,3]).on("zoom",O=>{w.attr("transform",O.transform),_.current=O.transform});if(P.call(W),_.current)P.call(W.transform,_.current);else{const O=So.translate(L/2,R/2).scale(.9);P.call(W.transform,O),_.current=O}const K=C*.35,y=()=>{for(const O of T.nodes){if(O.x===void 0||O.y===void 0)continue;const ne=Math.sqrt(O.x*O.x+O.y*O.y);if(ne>K){const le=K/ne;O.x*=le,O.y*=le}}},N=new Set;for(const O of T.links){const ne=typeof O.source=="string"?O.source:O.source.id;N.add(ne)}const V=new Set(T.nodes.filter(O=>!N.has(O.id)&&O.name!=="system").map(O=>O.id)),re=()=>{const O=K*.75,ne=.12;for(const le of T.nodes)if(V.has(le.id)&&le.x!==void 0&&le.y!==void 0){const be=Math.sqrt(le.x*le.x+le.y*le.y)||1;if(be<O){const ie=le.x/be,I=le.y/be,G=(O-be)*ne;le.vx=(le.vx||0)+ie*G,le.vy=(le.vy||0)+I*G}}},fe=T.nodes.every(O=>O.x!==void 0&&O.y!==void 0),me=lg(T.nodes).force("link",sg(T.links).id(O=>O.id).distance(120)).force("charge",cg().strength(-500)).force("center",ng(0,0)).force("collision",ig().radius(50)).force("boundary",y).force("leafOutward",re).alpha(fe?.1:.8).alphaDecay(.02),ee=P.append("defs");T.links.forEach((O,ne)=>{const le=ee.append("linearGradient").attr("id",`exp-link-gradient-${ne}`).attr("gradientUnits","userSpaceOnUse");if(O.type==="transition")le.append("stop").attr("offset","0%").attr("stop-color","#166534").attr("stop-opacity",.1),le.append("stop").attr("offset","25%").attr("stop-color","#166534").attr("stop-opacity",.4),le.append("stop").attr("offset","50%").attr("stop-color","#22c55e").attr("stop-opacity",.7),le.append("stop").attr("offset","75%").attr("stop-color","#4ade80").attr("stop-opacity",.9),le.append("stop").attr("offset","100%").attr("stop-color","#86efac").attr("stop-opacity",1);else{const be=O.type==="sub_agent"?{start:"#3730a3",end:"#a5b4fc"}:{start:"#92400e",end:"#fcd34d"};le.append("stop").attr("offset","0%").attr("stop-color",be.start),le.append("stop").attr("offset","100%").attr("stop-color",be.end)}});const F=w.append("g").attr("class","links").selectAll("path").data(T.links).join("path").attr("stroke",(O,ne)=>`url(#exp-link-gradient-${ne})`).attr("stroke-width",O=>{const ne=O.type==="transition"?3:2;return Math.min(ne+(O.count-1)*2.5,28)}).attr("stroke-opacity",O=>O.type==="transition"?.8:.5).attr("stroke-dasharray",O=>O.type==="tool"?"6,3":"none").attr("fill","none"),Q=O=>O.type==="System"?20:O.type==="Tool"?18:28,te=w.append("g").selectAll("g").data(T.nodes).join("g").call(Fm().on("start",(O,ne)=>{O.active||me.alphaTarget(.3).restart(),ne.fx=ne.x,ne.fy=ne.y}).on("drag",(O,ne)=>{ne.fx=O.x,ne.fy=O.y}).on("end",(O,ne)=>{O.active||me.alphaTarget(0),ne.fx=null,ne.fy=null}));return te.filter(O=>O.type!=="Tool"&&O.type!=="System").append("circle").attr("r",O=>Q(O)+6).attr("fill","none").attr("stroke",O=>Kr(O.type)).attr("stroke-width",4).attr("stroke-opacity",O=>O.wasActive?.9:.4).attr("stroke-dasharray",O=>O.type==="LoopAgent"?"8,4":O.type==="ParallelAgent"?"4,4":"none"),te.append("circle").attr("r",O=>Q(O)).attr("fill",O=>O.type==="Tool"?qs.bg:Hs(O.name).bg).attr("stroke",O=>O.isActive?"#fff":O.wasActive?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.2)").attr("stroke-width",O=>O.isActive?4:2).attr("opacity",O=>O.wasActive?1:.5).attr("class",O=>O.isActive?"active-node":"").style("cursor","grab").on("mouseenter",function(O,ne){var I;const le=(I=v.current)==null?void 0:I.getBoundingClientRect();if(!le)return;const be=O.clientX-le.left,ie=O.clientY-le.top;b({x:be,y:ie,node:ne}),bt(this).transition().duration(150).attr("r",Q(ne)+8)}).on("mouseleave",function(O,ne){b(null),bt(this).transition().duration(150).attr("r",Q(ne))}),te.append("text").text(O=>O.name.length>15?O.name.slice(0,13)+"…":O.name).attr("text-anchor","middle").attr("dy",O=>Q(O)+18).attr("font-size",14).attr("fill","#e4e4e7").attr("font-weight",O=>O.isActive?600:400),me.on("tick",()=>{F.attr("d",O=>{const ne=O.target.x-O.source.x,le=O.target.y-O.source.y,be=Math.sqrt(ne*ne+le*le)*1.5;return`M${O.source.x},${O.source.y}A${be},${be} 0 0,1 ${O.target.x},${O.target.y}`}),T.links.forEach((O,ne)=>{ee.select(`#exp-link-gradient-${ne}`).attr("x1",O.source.x).attr("y1",O.source.y).attr("x2",O.target.x).attr("y2",O.target.y)}),te.attr("transform",O=>`translate(${O.x},${O.y})`),T.nodes.forEach(O=>{O.x!==void 0&&O.y!==void 0&&S.current.set(O.id,{x:O.x,y:O.y})})}),()=>{me.stop()}},[T,c]),o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
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
          overflow: hidden;
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
        
        .agent-graph-modal-close {
          position: absolute;
          top: 3%;
          right: 3%;
          width: 60px;
          height: 60px;
          background: transparent;
          border: none;
          cursor: pointer;
          z-index: 2001;
          padding: 0;
          transform: rotate(45deg);
        }
        
        .agent-graph-modal-close-arc {
          width: 100%;
          height: 100%;
          position: relative;
        }
        
        .agent-graph-modal-close-arc::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
          border-radius: 0 0 0 100%;
          box-shadow: -2px 2px 8px rgba(0, 0, 0, 0.3);
          transition: all 0.2s ease;
        }
        
        .agent-graph-modal-close:hover .agent-graph-modal-close-arc::before {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          box-shadow: -3px 3px 12px rgba(220, 38, 38, 0.5);
          width: 70px;
          height: 70px;
        }
        
        .agent-graph-modal-close-icon {
          position: absolute;
          top: 12px;
          right: 12px;
          color: white;
          transform: rotate(-45deg);
          transition: transform 0.2s ease;
          filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));
        }
        
        .agent-graph-modal-close:hover .agent-graph-modal-close-icon {
          transform: rotate(-45deg) scale(1.1);
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
      `}),o.jsx("div",{className:`agent-graph-container ${d?"":"closed"}`,children:o.jsxs("div",{className:"agent-graph-panel",children:[o.jsxs("div",{className:`agent-graph-content clickable state-${s}`,ref:x,onClick:()=>u(!0),title:"Click to expand",children:[o.jsx("svg",{ref:j,className:"agent-graph-svg"}),o.jsxs("div",{className:"agent-graph-legend",children:[o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{className:"legend-line",style:{background:"#22c55e"}}),o.jsx("span",{children:"agent flow"})]}),o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{className:"legend-line",style:{background:"#f59e0b",borderStyle:"dashed"}}),o.jsx("span",{children:"tool call"})]}),o.jsxs("div",{style:{marginTop:4,borderTop:"1px solid #333",paddingTop:4},children:[o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{style:{width:10,height:10,borderRadius:"50%",border:`2px solid ${uo.LlmAgent}`}}),o.jsx("span",{children:"LLM"})]}),o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{style:{width:10,height:10,borderRadius:"50%",border:`2px solid ${uo.SequentialAgent}`}}),o.jsx("span",{children:"Sequential"})]}),o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{style:{width:10,height:10,borderRadius:"50%",border:`2px dashed ${uo.LoopAgent}`}}),o.jsx("span",{children:"Loop"})]}),o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{style:{width:10,height:10,borderRadius:"50%",border:`2px dotted ${uo.ParallelAgent}`}}),o.jsx("span",{children:"Parallel"})]})]})]}),f&&o.jsxs("div",{className:"agent-graph-tooltip",style:{left:Math.min(f.x+15,180),top:Math.max(f.y-20,10)},children:[o.jsx("div",{className:"agent-graph-tooltip-name",children:f.node.name}),o.jsxs("div",{className:"agent-graph-tooltip-type",children:[o.jsx("div",{className:"agent-graph-tooltip-dot",style:{background:f.node.type==="Tool"?qs.bg:Hs(f.node.name).bg,border:f.node.type!=="Tool"&&f.node.type!=="System"?`2px solid ${Kr(f.node.type)}`:"none",width:12,height:12}}),o.jsx("span",{style:{color:Kr(f.node.type)},children:f.node.type==="LlmAgent"?"LLM Agent":f.node.type==="SequentialAgent"?"Sequential":f.node.type==="LoopAgent"?"Loop":f.node.type==="ParallelAgent"?"Parallel":f.node.type})]}),f.node.isActive&&o.jsx("div",{className:"agent-graph-tooltip-active",children:"● Currently executing"})]})]}),o.jsx("button",{className:`agent-graph-toggle state-${s}`,onClick:()=>p(!d),children:o.jsx(vt,{size:20})})]})}),c&&o.jsx("div",{className:"agent-graph-modal-overlay",onClick:()=>{u(!1),_.current=null},children:o.jsxs("div",{className:`agent-graph-modal state-${s}`,ref:v,onClick:P=>P.stopPropagation(),children:[o.jsx("button",{className:"agent-graph-modal-close",onClick:()=>{u(!1),_.current=null},title:"Close",children:o.jsx("div",{className:"agent-graph-modal-close-arc",children:o.jsx(Wr,{size:18,className:"agent-graph-modal-close-icon"})})}),o.jsx("svg",{ref:g,className:"agent-graph-modal-svg"}),m&&o.jsxs("div",{className:"agent-graph-tooltip expanded-tooltip",style:{left:Math.min(m.x+20,window.innerWidth-200),top:Math.max(m.y-20,20)},children:[o.jsx("div",{className:"agent-graph-tooltip-name",children:m.node.name}),o.jsxs("div",{className:"agent-graph-tooltip-type",children:[o.jsx("div",{className:"agent-graph-tooltip-dot",style:{background:m.node.type==="Tool"?qs.bg:Hs(m.node.name).bg,border:m.node.type!=="Tool"&&m.node.type!=="System"?`2px solid ${Kr(m.node.type)}`:"none",width:12,height:12}}),o.jsx("span",{style:{color:Kr(m.node.type)},children:m.node.type==="LlmAgent"?"LLM Agent":m.node.type==="SequentialAgent"?"Sequential":m.node.type==="LoopAgent"?"Loop":m.node.type==="ParallelAgent"?"Parallel":m.node.type})]}),m.node.isActive&&o.jsx("div",{className:"agent-graph-tooltip-active",children:"● Currently executing"})]})]})})]})}const hg={agent_start:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},agent_end:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},tool_call:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},tool_result:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},model_call:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},model_response:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},callback_error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"},state_change:{bg:"#3d0d1f",fg:"#fda4af",border:"#f43f5e"},transfer:{bg:"#0d2d3d",fg:"#7dd3fc",border:"#0ea5e9"},callback_start:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},callback_end:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"}},M5={agent_start:zu,agent_end:zu,tool_call:pn,tool_result:pn,model_call:ep,model_response:Fa,state_change:In,transfer:sp,callback_start:_n,callback_end:_n,callback_error:Xd},mg=[{bg:"#0e7490",fg:"#e0f2fe"},{bg:"#6d28d9",fg:"#ede9fe"},{bg:"#047857",fg:"#d1fae5"},{bg:"#b91c1c",fg:"#fee2e2"},{bg:"#b45309",fg:"#fef3c7"},{bg:"#1d4ed8",fg:"#dbeafe"},{bg:"#be185d",fg:"#fce7f3"},{bg:"#4d7c0f",fg:"#ecfccb"},{bg:"#7c3aed",fg:"#ede9fe"},{bg:"#0f766e",fg:"#ccfbf1"},{bg:"#c2410c",fg:"#ffedd5"},{bg:"#4338ca",fg:"#e0e7ff"}],gg=new Map;function Xa(e){if(e==="sandbox"||e==="system")return{bg:"#374151",fg:"#9ca3af"};let t=gg.get(e);if(t===void 0){let n=0;for(let r=0;r<e.length;r++)n=(n<<5)-n+e.charCodeAt(r),n=n&n;t=Math.abs(n)%mg.length,gg.set(e,t)}return mg[t]}function xg(e){var t,n,r,i,s,a,l,c,u,d,p,f,h,m,b,j,g,x,v,_,A,S,M,E,U,z,$,q,Y,T,P;switch(e.event_type){case"agent_start":return`START ${e.agent_name}`;case"agent_end":return(t=e.data)!=null&&t.error?`END ${e.agent_name} [ERROR]`:`END ${e.agent_name}`;case"tool_call":const C=Object.entries(((n=e.data)==null?void 0:n.args)||{}).map(([te,O])=>{const ne=O!=null?JSON.stringify(O):"null";return`${te}=${ne.slice(0,500)}${ne.length>500?"...":""}`}).join(", ")||"";return`CALL ${((r=e.data)==null?void 0:r.tool_name)||"unknown"}(${C.slice(0,1e3)}${C.length>1e3?"...":""})`;case"tool_result":const L=(i=e.data)==null?void 0:i.result;let R="";if((a=(s=L==null?void 0:L.content)==null?void 0:s[0])!=null&&a.text)R=String(L.content[0].text).slice(0,500);else if(typeof L=="string")R=L.slice(0,500);else if(L!=null){const te=JSON.stringify(L);R=te?te.slice(0,500):""}else R="";return`RESULT ${((l=e.data)==null?void 0:l.tool_name)||"unknown"} → ${R}${R.length>=500?"...":""}`;case"model_call":return`LLM_REQ ${((u=(c=e.data)==null?void 0:c.contents)==null?void 0:u.length)||0} msgs, ${((d=e.data)==null?void 0:d.tool_count)||0} tools`;case"model_response":const w=((f=(p=e.data)==null?void 0:p.response_content)==null?void 0:f.parts)||((h=e.data)==null?void 0:h.parts)||[],W=w.find(te=>(te==null?void 0:te.type)==="function_call");if(W)return`LLM_RSP → ${W.name||"unknown"}()`;const K=w.find(te=>(te==null?void 0:te.type)==="text");if(K!=null&&K.text){const te=String(K.text);return`LLM_RSP "${te.slice(0,50)}${te.length>50?"...":""}"`}return`LLM_RSP (${((m=e.data)==null?void 0:m.finish_reason)||"complete"})`;case"state_change":return`STATE ${Object.keys(((b=e.data)==null?void 0:b.state_delta)||{}).join(", ")}`;case"transfer":return`TRANSFER → ${((j=e.data)==null?void 0:j.target)||"unknown"}`;case"callback_start":const N=((g=e.data)==null?void 0:g.callback_name)||"unknown",V=((x=e.data)==null?void 0:x.callback_type)||"";return N==="network_approval"?`⏳ AWAITING APPROVAL ${((v=e.data)==null?void 0:v.host)||((_=e.data)==null?void 0:_.url)||""}`:`CALLBACK START ${V?`[${V}]`:""} ${N}`;case"callback_end":const re=((A=e.data)==null?void 0:A.callback_name)||"unknown",fe=((S=e.data)==null?void 0:S.callback_type)||"",me=(M=e.data)!=null&&M.error?" [ERROR]":"";return re==="network_approval"?((E=e.data)==null?void 0:E.action)==="deny"?`🚫 DENIED ${((U=e.data)==null?void 0:U.host)||""}`:`✅ APPROVED ${((z=e.data)==null?void 0:z.pattern)||(($=e.data)==null?void 0:$.host)||""}`:`CALLBACK END ${fe?`[${fe}]`:""} ${re}${me}`;case"callback_error":const ee=((q=e.data)==null?void 0:q.source)||"unknown",F=((Y=e.data)==null?void 0:Y.error)||"Unknown error";return`⚠️ ERROR in ${ee}: ${F.slice(0,50)}${F.length>50?"...":""}`;case"compaction":const Q=((T=e.data)==null?void 0:T.summary_preview)||"";return`📦 COMPACTION "${Q.slice(0,80)}${Q.length>80?"...":""}"`;default:return((P=e.event_type)==null?void 0:P.toUpperCase())||"UNKNOWN"}}function L5(e,t){const n=e-t;return n<1?`+${(n*1e3).toFixed(0)}ms`:n<60?`+${n.toFixed(2)}s`:`+${Math.floor(n/60)}m${(n%60).toFixed(0)}s`}function R5(e){const t={timestamp:"#71717a",bracket:"#a78bfa",ip:"#22d3ee",domain:"#34d399",url:"#60a5fa",method:"#f472b6",status:"#4ade80",statusError:"#f87171",number:"#fbbf24",keyword:"#c084fc",info:"#22d3ee",warning:"#fbbf24",error:"#f87171",debug:"#71717a"},n=[];let r=e,i=0;const s=(l,c)=>{l&&n.push(c?o.jsx("span",{style:{color:c},children:l},i++):o.jsx("span",{children:l},i++))},a=[{regex:/^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+Z?\s*)/,color:t.timestamp},{regex:/(\[[^\]]+\])/,color:t.bracket},{regex:/\b(GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS|CONNECT)\b/,color:t.method},{regex:/\b([23]\d{2})\s+(OK|Created|Accepted|No Content|Moved|Found|Not Modified)\b/,color:t.status},{regex:/\b([45]\d{2})\s+\w+/,color:t.statusError},{regex:/(<< \d{3} \w+)/,color:t.status},{regex:/(https?:\/\/[^\s]+)/,color:t.url},{regex:/(\s)(\/[a-zA-Z0-9_\-./]+)/,color:t.url,group:2},{regex:/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d+)/,color:t.ip},{regex:/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/,color:t.ip},{regex:/(sandbox-agent-[a-zA-Z0-9_-]+:\d+)/,color:t.domain},{regex:/(host\.docker\.internal:\d+)/,color:t.domain},{regex:/([a-zA-Z][a-zA-Z0-9-]*\.(?:com|org|net|io|dev|local|internal)(?::\d+)?)/,color:t.domain},{regex:/\b(\d+(?:\.\d+)?[kmgb])\b/i,color:t.number},{regex:/\b(INFO)\b/,color:t.info},{regex:/\b(WARNING|WARN)\b/,color:t.warning},{regex:/\b(ERROR|CRITICAL|FATAL)\b/,color:t.error},{regex:/\b(DEBUG)\b/,color:t.debug},{regex:/([a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*){2,})/,color:t.domain},{regex:/\b(client|server|connect|disconnect|completion|model|provider)\b/i,color:t.keyword}];for(;r.length>0;){let l=null;for(const{regex:c,color:u,group:d}of a){const p=r.match(c);if(p&&p.index!==void 0){const f=d?r.indexOf(p[d],p.index):p.index,h=d?p[d]:p[0];(!l||f<l.index)&&(l={index:f,length:h.length,text:h,color:u})}}if(l)l.index>0&&s(r.slice(0,l.index)),s(l.text,l.color),r=r.slice(l.index+l.length);else{s(r);break}}return o.jsx(o.Fragment,{children:n})}function I5({content:e}){const t=e.split(`
`);return o.jsx(o.Fragment,{children:t.map((n,r)=>o.jsx("div",{children:R5(n)},r))})}function O5({event:e}){var l,c,u,d,p,f,h,m,b,j,g,x,v,_,A,S,M,E,U,z,$,q,Y,T;const[t,n]=k.useState(new Set(["instruction","messages","result","response","state_delta","data"])),[r,i]=k.useState(null),s=P=>{const D=new Set(t);D.has(P)?D.delete(P):D.add(P),n(D)},a=(P,D=0,C=!1)=>{const L="  ".repeat(D),R="  ".repeat(D+1);if(P===null)return o.jsx("span",{className:"json-null",children:"null"});if(P===void 0)return o.jsx("span",{className:"json-undefined",children:"undefined"});if(typeof P=="boolean")return o.jsx("span",{className:"json-boolean",children:P.toString()});if(typeof P=="number")return o.jsx("span",{className:"json-number",children:P});if(typeof P=="string"){const w=P.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\t/g,"\\t"),W=()=>i(P);return w.length>300&&D>0?o.jsxs("span",{className:"json-string json-string-clickable",onClick:W,title:"Click to view as Markdown",children:['"',w.slice(0,300),'..." ',o.jsxs("span",{className:"json-truncated",children:["(",P.length," chars)"]})]}):o.jsxs("span",{className:"json-string json-string-clickable",onClick:W,title:"Click to view as Markdown",children:['"',w,'"']})}if(Array.isArray(P))return P.length===0?o.jsx("span",{className:"json-bracket",children:"[]"}):P.every(W=>W===null||typeof W!="object")&&P.length<=3?o.jsxs("span",{className:"json-inline",children:[o.jsx("span",{className:"json-bracket",children:"["}),P.map((W,K)=>o.jsxs("span",{children:[a(W,D+1,!0),K<P.length-1&&o.jsx("span",{className:"json-comma",children:", "})]},K)),o.jsx("span",{className:"json-bracket",children:"]"})]}):o.jsxs("span",{className:"json-block",children:[o.jsx("span",{className:"json-bracket",children:"["}),P.map((W,K)=>o.jsxs("span",{children:[`
`+R,a(W,D+1),K<P.length-1&&o.jsx("span",{className:"json-comma",children:","})]},K)),`
`+L,o.jsx("span",{className:"json-bracket",children:"]"})]});if(typeof P=="object"){const w=Object.entries(P);return w.length===0?o.jsx("span",{className:"json-bracket",children:"{}"}):w.length<=2&&w.every(([,K])=>K===null||typeof K!="object")&&C?o.jsxs("span",{className:"json-inline",children:[o.jsx("span",{className:"json-bracket",children:"{"}),w.map(([K,y],N)=>o.jsxs("span",{children:[o.jsxs("span",{className:"json-key",children:['"',K,'"']}),o.jsx("span",{className:"json-colon",children:": "}),a(y,D+1,!0),N<w.length-1&&o.jsx("span",{className:"json-comma",children:", "})]},K)),o.jsx("span",{className:"json-bracket",children:"}"})]}):o.jsxs("span",{className:"json-block",children:[o.jsx("span",{className:"json-bracket",children:"{"}),w.map(([K,y],N)=>o.jsxs("span",{children:[`
`+R,o.jsxs("span",{className:"json-key",children:['"',K,'"']}),o.jsx("span",{className:"json-colon",children:": "}),a(y,D+1),N<w.length-1&&o.jsx("span",{className:"json-comma",children:","})]},K)),`
`+L,o.jsx("span",{className:"json-bracket",children:"}"})]})}return String(P)};return o.jsxs("div",{className:"event-detail",children:[o.jsxs("div",{className:"detail-header",children:[o.jsx("span",{className:"detail-type",children:e.event_type}),o.jsx("span",{className:"detail-agent",style:{backgroundColor:Xa(e.agent_name).bg,color:Xa(e.agent_name).fg,padding:"2px 8px",borderRadius:"4px",fontWeight:600},children:e.agent_name}),o.jsx("span",{className:"detail-time",children:new Date(e.timestamp*1e3).toISOString()})]}),o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("data"),children:[t.has("data")?o.jsx(Nt,{size:12}):o.jsx(vt,{size:12}),o.jsx("span",{children:"Event Data"})]}),t.has("data")&&o.jsx("div",{className:"section-content json-viewer",children:a(e.data)})]}),e.event_type==="agent_start"&&((l=e.data)==null?void 0:l.instruction)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("instruction"),children:[t.has("instruction")?o.jsx(Nt,{size:12}):o.jsx(vt,{size:12}),o.jsx("span",{children:"Instruction"}),o.jsxs("span",{className:"char-count",children:[e.data.instruction.length," chars"]})]}),t.has("instruction")&&o.jsx("div",{className:"section-content",children:o.jsx("pre",{className:"instruction-text",children:e.data.instruction})})]}),e.event_type==="model_call"&&((c=e.data)==null?void 0:c.contents)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("messages"),children:[t.has("messages")?o.jsx(Nt,{size:12}):o.jsx(vt,{size:12}),o.jsxs("span",{children:["Messages (",e.data.contents.length,")"]})]}),t.has("messages")&&o.jsx("div",{className:"section-content",children:e.data.contents.map((P,D)=>{var C;return o.jsxs("div",{className:"message-item",children:[o.jsx("span",{className:`message-role ${P.role}`,children:P.role}),o.jsx("div",{className:"message-parts",children:(C=P.parts)==null?void 0:C.map((L,R)=>o.jsxs("div",{className:"message-part",children:[L.text&&o.jsx("pre",{children:L.text}),L.function_call&&o.jsxs("div",{className:"function-call",children:[o.jsx("strong",{children:L.function_call.name}),o.jsx("pre",{children:JSON.stringify(L.function_call.args,null,2)})]}),L.function_response&&o.jsxs("div",{className:"function-response",children:[o.jsx("strong",{children:L.function_response.name}),o.jsx("pre",{children:JSON.stringify(L.function_response.response,null,2)})]})]},R))})]},D)})})]}),e.event_type==="tool_result"&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("result"),children:[t.has("result")?o.jsx(Nt,{size:12}):o.jsx(vt,{size:12}),o.jsx("span",{children:"Tool Result"})]}),t.has("result")&&o.jsx("div",{className:"section-content",children:o.jsx("pre",{className:"result-content",children:((f=(p=(d=(u=e.data)==null?void 0:u.result)==null?void 0:d.content)==null?void 0:p[0])==null?void 0:f.text)||(typeof((h=e.data)==null?void 0:h.result)=="string"?e.data.result:JSON.stringify((m=e.data)==null?void 0:m.result,null,2))})})]}),e.event_type==="model_response"&&((b=e.data)==null?void 0:b.parts)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("response"),children:[t.has("response")?o.jsx(Nt,{size:12}):o.jsx(vt,{size:12}),o.jsxs("span",{children:["Response (",e.data.parts.length," part",e.data.parts.length!==1?"s":"",")"]}),e.data.token_counts&&o.jsxs("span",{className:"token-badge",children:[e.data.token_counts.input,"↑ ",e.data.token_counts.output,"↓"]})]}),t.has("response")&&o.jsx("div",{className:"section-content",children:e.data.parts.map((P,D)=>o.jsxs("div",{className:"response-part",children:[P.type==="text"&&P.text&&o.jsx("pre",{className:"response-text",children:P.text}),P.type==="function_call"&&o.jsxs("div",{className:"function-call",children:[o.jsxs("strong",{children:["→ ",P.name,"()"]}),P.args&&Object.keys(P.args).length>0&&o.jsx("pre",{children:JSON.stringify(P.args,null,2)})]}),P.thought&&o.jsx("div",{className:"thought-indicator",children:"💭 Thinking"})]},D))})]}),(e.event_type==="callback_start"||e.event_type==="callback_end")&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("callback_info"),children:[t.has("callback_info")?o.jsx(Nt,{size:12}):o.jsx(vt,{size:12}),o.jsx("span",{children:"Callback Information"})]}),t.has("callback_info")&&o.jsxs("div",{className:"section-content",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Name:"})," ",((j=e.data)==null?void 0:j.callback_name)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Type:"})," ",((g=e.data)==null?void 0:g.callback_type)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Module Path:"})," ",((x=e.data)==null?void 0:x.module_path)||"unknown"]}),((v=e.data)==null?void 0:v.error)&&o.jsxs("div",{style:{color:"#ef4444",marginTop:"8px"},children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Error:"})," ",e.data.error]}),((_=e.data)==null?void 0:_.error_type)&&o.jsxs("div",{style:{marginTop:"4px",fontSize:"0.9em",opacity:.8},children:[o.jsx("strong",{children:"Type:"})," ",e.data.error_type]}),((A=e.data)==null?void 0:A.stack_trace)&&o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Stack Trace:"}),o.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"300px",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:e.data.stack_trace})]})]})]})]}),e.event_type==="callback_error"&&o.jsxs("div",{className:"detail-section",style:{borderColor:"#dc2626"},children:[o.jsxs("div",{className:"section-header",onClick:()=>s("error_info"),style:{color:"#fca5a5"},children:[t.has("error_info")?o.jsx(Nt,{size:12}):o.jsx(vt,{size:12}),o.jsx("span",{children:"⚠️ Error Details"})]}),t.has("error_info")&&o.jsxs("div",{className:"section-content",style:{color:"#fca5a5"},children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Source:"})," ",((S=e.data)==null?void 0:S.source)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Error Type:"})," ",((M=e.data)==null?void 0:M.error_type)||"unknown"]}),o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Message:"})," ",((E=e.data)==null?void 0:E.error)||"No error message"]}),((U=e.data)==null?void 0:U.context)&&o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Context:"})," ",e.data.context]}),((z=e.data)==null?void 0:z.traceback)&&o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Stack Trace:"}),o.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"400px",whiteSpace:"pre-wrap",wordBreak:"break-word",color:"#fca5a5"},children:e.data.traceback})]})]})]}),e.event_type==="state_change"&&(($=e.data)==null?void 0:$.state_delta)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("state_delta"),children:[t.has("state_delta")?o.jsx(Nt,{size:12}):o.jsx(vt,{size:12}),o.jsxs("span",{children:["State Changes (",Object.keys(e.data.state_delta).length,")"]})]}),t.has("state_delta")&&o.jsx("div",{className:"section-content",children:Object.entries(e.data.state_delta).map(([P,D])=>o.jsxs("div",{className:"state-delta-item",children:[o.jsx("div",{className:"state-delta-key",children:P}),o.jsx("pre",{className:"state-delta-value",children:typeof D=="string"?D:JSON.stringify(D,null,2)})]},P))})]}),e.event_type==="compaction"&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("compaction_info"),children:[t.has("compaction_info")?o.jsx(Nt,{size:12}):o.jsx(vt,{size:12}),o.jsx("span",{children:"📦 Compaction Details"})]}),t.has("compaction_info")&&o.jsxs("div",{className:"section-content",children:[o.jsxs("div",{style:{marginBottom:"12px",padding:"8px",background:"rgba(147, 51, 234, 0.1)",borderRadius:"4px",border:"1px solid rgba(147, 51, 234, 0.3)"},children:[o.jsx("div",{style:{fontSize:"11px",color:"#a855f7",marginBottom:"4px",fontWeight:600},children:"Event Compaction Occurred"}),o.jsx("div",{style:{fontSize:"12px",color:"#e4e4e7"},children:"ADK has summarized older events to manage context window limits."})]}),((q=e.data)==null?void 0:q.start_timestamp)&&((Y=e.data)==null?void 0:Y.end_timestamp)&&o.jsxs("div",{style:{marginBottom:"8px"},children:[o.jsx("strong",{children:"Time Range Compacted:"})," ",new Date(e.data.start_timestamp*1e3).toLocaleTimeString()," - ",new Date(e.data.end_timestamp*1e3).toLocaleTimeString()]}),((T=e.data)==null?void 0:T.summary_preview)&&o.jsxs("div",{children:[o.jsx("strong",{children:"Summary Preview:"}),o.jsx("pre",{style:{marginTop:"8px",padding:"12px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"11px",overflow:"auto",maxHeight:"300px",whiteSpace:"pre-wrap",wordBreak:"break-word",border:"1px solid #27272a"},children:e.data.summary_preview})]})]})]}),r&&o.jsx($5,{content:r,onClose:()=>i(null)})]})}function $5({content:e,onClose:t}){return o.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.8)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2e3},onClick:t,children:o.jsxs("div",{style:{backgroundColor:"#1a1a1e",borderRadius:"8px",border:"1px solid #3f3f46",width:"90%",maxWidth:"1200px",height:"85%",display:"flex",flexDirection:"column",overflow:"hidden"},onClick:n=>n.stopPropagation(),children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx(Dr,{size:16}),o.jsx("span",{style:{fontWeight:600},children:"String Content"}),o.jsxs("span",{style:{color:"#71717a",fontSize:"12px"},children:["(",e.length," chars)"]})]}),o.jsx("button",{onClick:t,style:{background:"none",border:"none",color:"#a1a1aa",cursor:"pointer",padding:"4px",display:"flex",alignItems:"center"},children:o.jsx(Wr,{size:18})})]}),o.jsx("div",{style:{flex:1,overflow:"auto",padding:"20px"},children:o.jsx("pre",{style:{fontSize:"12px",lineHeight:"1.5",color:"#e4e4e7",whiteSpace:"pre-wrap",wordBreak:"break-word",fontFamily:'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',margin:0},children:e})}),o.jsx("div",{style:{padding:"8px 16px",borderTop:"1px solid #3f3f46",backgroundColor:"#27272a",display:"flex",justifyContent:"flex-end",gap:"8px"},children:o.jsxs("button",{onClick:()=>navigator.clipboard.writeText(e),style:{background:"#3f3f46",border:"none",borderRadius:"4px",padding:"6px 12px",color:"#e4e4e7",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",fontSize:"12px"},children:[o.jsx(ss,{size:12}),"Copy"]})})]})})}function D5({content:e,title:t,onClose:n}){return o.jsxs("div",{className:"modal-overlay",onClick:n,children:[o.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[o.jsxs("div",{className:"modal-header",children:[o.jsx("h3",{children:t}),o.jsx("button",{className:"modal-close",onClick:n,children:"×"})]}),o.jsx("div",{className:"modal-body markdown-content",children:o.jsx(x1,{children:e})})]}),o.jsx("style",{children:`
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
      `})]})}function F5({events:e,selectedEventIndex:t,project:n}){const[r,i]=k.useState(null),s=k.useMemo(()=>{var u;const l={};return(u=n==null?void 0:n.app)!=null&&u.state_keys&&n.app.state_keys.forEach(d=>{l[d.name]={value:void 0,timestamp:null,defined:!0,description:d.description,type:d.type}}),n!=null&&n.agents&&n.agents.forEach(d=>{if(d.type==="LlmAgent"&&d.output_key){const p=d.output_key;l[p]||(l[p]={value:void 0,timestamp:null,defined:!0,description:`Output from ${d.name}`,type:"string"})}}),(t!==null?e.slice(0,t+1):e).filter(d=>d.event_type==="state_change").forEach(d=>{var p;(p=d.data)!=null&&p.state_delta&&Object.entries(d.data.state_delta).forEach(([f,h])=>{var m;l[f]={...l[f],value:h,timestamp:d.timestamp,defined:((m=l[f])==null?void 0:m.defined)??!1}})}),l},[e,t,n]),a=Object.entries(s);return o.jsxs(o.Fragment,{children:[r&&o.jsx(D5,{content:r.content,title:r.title,onClose:()=>i(null)}),o.jsxs("div",{className:"state-snapshot",children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"state-header",children:t!==null?`State after event #${t}`:e.length>0?"State at end of run":"Defined State Keys"}),a.length===0?o.jsx("div",{className:"state-empty",children:"No state keys defined"}):a.map(([l,{value:c,timestamp:u,defined:d,description:p,type:f}])=>o.jsxs("div",{className:`state-entry ${c===void 0?"unset":""}`,children:[o.jsxs("div",{className:"state-key",children:[l,f&&o.jsxs("span",{className:"state-type",children:["(",f,")"]})]}),o.jsx("div",{className:"state-value",onClick:()=>{if(c!==void 0){const h=typeof c=="string"?c:JSON.stringify(c,null,2);i({content:h,title:l})}},style:{cursor:c!==void 0?"pointer":"default"},title:c!==void 0?"Click to view in markdown viewer":void 0,children:c===void 0?"(not set)":typeof c=="string"?c:JSON.stringify(c,null,2)}),p&&o.jsx("div",{className:"state-desc",children:p}),u&&o.jsx("div",{className:"state-time",children:new Date(u*1e3).toLocaleTimeString()})]},l))]})]})}function B5({project:e,sessionId:t}){const[n,r]=k.useState([]),[i,s]=k.useState(!1),[a,l]=k.useState(null),[c,u]=k.useState(null),[d,p]=k.useState(null);k.useEffect(()=>{if(!(e!=null&&e.id)||!t){r([]);return}(async()=>{s(!0),l(null);try{const j=await tv(e.id,t);r(j)}catch(j){l(j.message||"Failed to load artifacts"),r([])}finally{s(!1)}})()},[e==null?void 0:e.id,t]);const f=b=>b===null?"":b<1024?`${b} B`:b<1024*1024?`${(b/1024).toFixed(1)} KB`:`${(b/(1024*1024)).toFixed(1)} MB`,h=b=>{if(!(e!=null&&e.id)||!t)return;const j=oa(e.id,t,b),g=document.createElement("a");g.href=j,g.download=b,document.body.appendChild(g),g.click(),document.body.removeChild(g)},m=b=>{if(!(!(e!=null&&e.id)||!t)&&b.is_image){const j=oa(e.id,t,b.filename);p(j)}};return o.jsxs(o.Fragment,{children:[d&&o.jsx("div",{className:"artifact-image-modal",onClick:()=>p(null),style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e4,cursor:"pointer"},children:o.jsxs("div",{onClick:b=>b.stopPropagation(),style:{maxWidth:"90vw",maxHeight:"90vh",position:"relative"},children:[o.jsx("button",{onClick:()=>p(null),style:{position:"absolute",top:-40,right:0,background:"transparent",border:"none",color:"#fff",cursor:"pointer",padding:8},children:o.jsx(Wr,{size:24})}),o.jsx("img",{src:d,alt:"Artifact preview",style:{maxWidth:"90vw",maxHeight:"85vh",objectFit:"contain",borderRadius:8}})]})}),o.jsxs("div",{className:"artifacts-panel",children:[o.jsx("style",{children:`
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
        `}),o.jsx("div",{className:"artifacts-header",children:t?"Session Artifacts":"No Session Selected"}),i?o.jsxs("div",{className:"artifacts-loading",children:[o.jsx(Zt,{size:16,className:"spin",style:{marginBottom:8}}),o.jsx("div",{children:"Loading artifacts..."})]}):a?o.jsx("div",{className:"artifacts-error",children:a}):t?n.length===0?o.jsxs("div",{className:"artifacts-empty",children:[o.jsx($a,{size:24,style:{marginBottom:8,opacity:.5}}),o.jsx("div",{children:"No artifacts in this session"}),o.jsx("div",{style:{fontSize:10,marginTop:4,color:"#52525b"},children:"Use tool_context.save_artifact() to save artifacts"})]}):n.map(b=>o.jsxs("div",{className:"artifact-item",children:[o.jsx("div",{className:`artifact-icon ${b.is_image?"image":""}`,children:b.is_image?o.jsx(kj,{size:16}):o.jsx(vj,{size:16})}),o.jsxs("div",{className:"artifact-info",children:[o.jsx("div",{className:"artifact-name",title:b.filename,children:b.filename}),o.jsxs("div",{className:"artifact-meta",children:[b.mime_type||"unknown type",b.size!==null&&` • ${f(b.size)}`]})]}),o.jsxs("div",{className:"artifact-actions",children:[b.is_image&&o.jsx("button",{className:"artifact-btn",title:"Preview",onClick:()=>m(b),children:o.jsx(Dr,{size:14})}),o.jsx("button",{className:"artifact-btn",title:"Download",onClick:()=>h(b.filename),children:o.jsx(Ri,{size:14})})]}),b.is_image&&c===b.filename&&(e==null?void 0:e.id)&&t&&o.jsx("div",{className:"artifact-preview",children:o.jsx("img",{src:oa(e.id,t,b.filename),alt:b.filename})})]},b.filename)):o.jsxs("div",{className:"artifacts-empty",children:[o.jsx($a,{size:24,style:{marginBottom:8,opacity:.5}}),o.jsx("div",{children:"Start a session to see artifacts"})]})]})]})}function zc(e){if(!e)return{text:"",isError:!1};if(e.success===!1)return{text:e.error||"Unknown error",isError:!0};let t=e.result||e;if(typeof t=="string")try{const n=t.replace(/'/g,'"').replace(/True/g,"true").replace(/False/g,"false").replace(/None/g,"null");t=JSON.parse(n)}catch{return{text:t,isError:!1}}return t.content&&Array.isArray(t.content)?{text:t.content.filter(r=>r.type==="text").map(r=>r.text).join(`
`),isError:t.isError===!0}:{text:typeof t=="string"?t:JSON.stringify(t,null,2),isError:!1}}function yg(e,t){if(!t||!t.trim())return e;const n=t.trim();let r=e;try{r=JSON.parse(e)}catch{}if(n.startsWith("js:")){const i=n.slice(3).trim();try{const a=new Function("value","data",`return ${i}`)(e,r);return typeof a=="string"?a:JSON.stringify(a,null,2)}catch(s){return`[JS error: ${s}]`}}if(n.startsWith("."))try{const i=n.slice(1).split(".").filter(Boolean);let s=r;for(const a of i){const l=a.match(/^(\w+)?\[(\d+)\]$/);l?(l[1]&&(s=s[l[1]]),s=s[parseInt(l[2])]):s=s[a]}return s==null?"[No match]":typeof s=="string"?s:JSON.stringify(s,null,2)}catch(i){return`[Path error: ${i.message}]`}try{const s=new Function("value","data",`return ${n}`)(e,r);return typeof s=="string"?s:JSON.stringify(s,null,2)}catch(i){return`[Transform error: ${i.message}]`}}function U5({project:e,selectedEventIndex:t,sandboxMode:n}){var fe,me;const{watches:r,updateWatch:i,addWatch:s,removeWatch:a,runEvents:l}=gt(),[c,u]=k.useState(!1),[d,p]=k.useState(null),[f,h]=k.useState({}),[m,b]=k.useState(new Set),[j,g]=k.useState(""),[x,v]=k.useState(""),[_,A]=k.useState({}),[S,M]=k.useState(""),[E,U]=k.useState([]),[z,$]=k.useState(null),[q,Y]=k.useState(null),[T,P]=k.useState(!1);k.useEffect(()=>{Qd().then(U).catch(console.error)},[]);const D=k.useMemo(()=>{const ee=e.mcp_servers||[],F=new Set(ee.map(te=>te.name)),Q=E.filter(te=>!F.has(te.name));return[...ee,...Q]},[e.mcp_servers,E]),C=k.useCallback(async ee=>{if(!(f[ee]||m.has(ee))){b(F=>new Set([...F,ee]));try{const F=await Ce(`/projects/${e.id}/mcp-servers/${encodeURIComponent(ee)}/test-connection`,{method:"POST"});F.success&&h(Q=>({...Q,[ee]:F.tools}))}catch(F){console.error("Failed to load tools:",F)}finally{b(F=>{const Q=new Set(F);return Q.delete(ee),Q})}}},[e.id,f,m]);k.useEffect(()=>{var te;if(d)return;if(!j||!x){A({});return}const F=(f[j]||[]).find(O=>O.name===x);if(!((te=F==null?void 0:F.parameters)!=null&&te.properties)){A({});return}const Q={};Object.entries(F.parameters.properties).forEach(([O,ne])=>{ne.type==="string"?Q[O]=ne.default||"":ne.type==="number"||ne.type==="integer"?Q[O]=ne.default||0:ne.type==="boolean"?Q[O]=ne.default||!1:Q[O]=ne.default||null}),A(Q)},[j,x,f,d]);const L=()=>{p(null),g(""),v(""),A({}),M(""),$(null),Y(null),u(!0)},R=ee=>{if(p(ee.id),g(ee.serverName),v(ee.toolName),A({...ee.args}),M(ee.transform||""),ee.result){const{text:F}=zc(ee.result);$(F),Y(null)}else $(null),Y(null);f[ee.serverName]||C(ee.serverName),u(!0)},w=async()=>{var F;if(!j||!x)return;P(!0),Y(null);const ee=((F=e.app)==null?void 0:F.id)||`app_${e.id}`;try{const Q=await Ce(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:j,tool_name:x,arguments:_,sandbox_mode:n,app_id:n?ee:void 0})}),{text:te,isError:O}=zc(Q);O?(Y(te),$(null)):($(te),Y(null))}catch(Q){Y(String(Q)),$(null)}finally{P(!1)}},W=k.useMemo(()=>z?!S||!S.trim()?z:yg(z,S):null,[z,S]),K=()=>{if(!(!j||!x)){if(d){i(d,{serverName:j,toolName:x,args:{..._},transform:S||void 0});const ee=r.find(F=>F.id===d);ee&&N({...ee,serverName:j,toolName:x,args:_,transform:S||void 0,history:ee.history||[]})}else{const ee={id:`watch-${Date.now()}`,serverName:j,toolName:x,args:{..._},transform:S||void 0,history:[]};s(ee),N(ee)}u(!1)}},y=ee=>{a(ee)},N=k.useCallback(async(ee,F)=>{var ne;i(ee.id,{isLoading:!0,error:void 0});const Q=F??l.length-1,te=Date.now(),O=((ne=e.app)==null?void 0:ne.id)||`app_${e.id}`;try{const le=await Ce(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:ee.serverName,tool_name:ee.toolName,arguments:ee.args,sandbox_mode:n,app_id:n?O:void 0})}),be={eventIndex:Q,timestamp:te,result:le},ie=[...ee.history||[],be];i(ee.id,{result:le,isLoading:!1,lastRun:te,history:ie})}catch(le){const be={eventIndex:Q,timestamp:te,error:String(le)},ie=[...ee.history||[],be];i(ee.id,{error:String(le),isLoading:!1,lastRun:te,history:ie})}},[e.id,(fe=e.app)==null?void 0:fe.id,i,l.length,n]),V=()=>{r.forEach(ee=>N(ee))},re=k.useMemo(()=>!j||!x?null:(f[j]||[]).find(F=>F.name===x),[j,x,f]);return o.jsxs("div",{className:"tool-watch-panel",children:[o.jsxs("div",{className:"watch-header",children:[o.jsx(Dr,{size:14}),o.jsx("span",{children:"Tool Watch"}),o.jsx("span",{className:"watch-auto-badge",title:"Watches auto-refresh on every event",children:"⚡ Auto"}),o.jsxs("div",{className:"watch-actions",children:[o.jsx("button",{className:"watch-btn",onClick:V,title:"Refresh all",children:o.jsx(Zt,{size:12})}),o.jsx("button",{className:"watch-btn",onClick:L,title:"Add watch",children:o.jsx(Qe,{size:12})})]})]}),r.length===0?o.jsxs("div",{className:"watch-empty",children:[o.jsx(Dr,{size:20,style:{opacity:.3}}),o.jsx("span",{children:"No watch expressions"}),o.jsxs("button",{className:"add-watch-btn",onClick:L,children:[o.jsx(Qe,{size:12})," Add Tool Watch"]})]}):o.jsx("div",{className:"watch-list",children:r.map(ee=>{let F=ee.result,Q=ee.error;if(t!==null&&ee.history&&ee.history.length>0){const be=ee.history.filter(ie=>ie.eventIndex<=t);if(be.length>0){const ie=be[be.length-1];F=ie.result,Q=ie.error}else F=void 0,Q=void 0}const{text:te,isError:O}=F?zc(F):{text:"",isError:!1},ne=F?yg(te,ee.transform):"",le=Q||O;return o.jsxs("div",{className:`watch-item ${le?"error":""}`,children:[o.jsxs("div",{className:"watch-item-header",children:[o.jsxs("span",{className:"watch-expr",children:[o.jsx("span",{className:"watch-server",children:ee.serverName}),o.jsx("span",{className:"watch-tool",children:ee.toolName}),Object.keys(ee.args).length>0&&o.jsxs("span",{className:"watch-args",children:["(",Object.entries(ee.args).map(([be,ie])=>`${be}=${JSON.stringify(ie)}`).join(", "),")"]}),t!==null&&o.jsxs("span",{className:"watch-time-indicator",children:["@",t]})]}),o.jsxs("div",{className:"watch-item-actions",children:[o.jsx("button",{onClick:()=>R(ee),title:"Edit watch",children:o.jsx(pn,{size:10})}),o.jsx("button",{onClick:()=>N(ee),title:"Refresh",children:ee.isLoading?o.jsx(Zt,{size:10,className:"spin"}):o.jsx(Zt,{size:10})}),o.jsx("button",{onClick:()=>y(ee.id),title:"Remove",children:o.jsx(Ue,{size:10})})]})]}),o.jsx("div",{className:"watch-result",children:ee.isLoading?o.jsx("span",{className:"loading",children:"Loading..."}):Q?o.jsx("span",{className:"error",children:Q}):F?o.jsx("pre",{className:O?"error-text":"",children:ne}):o.jsx("span",{className:"no-result",children:t!==null?"No data at this event":"Not yet run"})})]},ee.id)})}),c&&o.jsx("div",{className:"watch-dialog-overlay",onClick:()=>u(!1),children:o.jsxs("div",{className:"watch-dialog",onClick:ee=>ee.stopPropagation(),children:[o.jsxs("div",{className:"dialog-header",children:[o.jsx("span",{children:d?"Edit Watch":"Add Tool Watch"}),o.jsx("button",{onClick:()=>u(!1),children:o.jsx(Wr,{size:14})})]}),o.jsxs("div",{className:"dialog-body",children:[o.jsxs("div",{className:"form-row",children:[o.jsx("label",{children:"MCP Server"}),o.jsxs("select",{value:j,onChange:ee=>{g(ee.target.value),d||v(""),ee.target.value&&C(ee.target.value)},children:[o.jsx("option",{value:"",children:"Select server..."}),D.map(ee=>o.jsx("option",{value:ee.name,children:ee.name},ee.name))]})]}),o.jsxs("div",{className:"form-row",children:[o.jsx("label",{children:"Tool"}),o.jsxs("select",{value:x,onChange:ee=>v(ee.target.value),disabled:!j||m.has(j),children:[o.jsx("option",{value:"",children:m.has(j)?"Loading tools...":"Select tool..."}),(f[j]||[]).map(ee=>o.jsx("option",{value:ee.name,children:ee.name},ee.name))]})]}),(re==null?void 0:re.description)&&o.jsx("div",{className:"tool-desc",children:re.description}),((me=re==null?void 0:re.parameters)==null?void 0:me.properties)&&Object.keys(re.parameters.properties).length>0&&o.jsxs("div",{className:"tool-args",children:[o.jsx("label",{children:"Arguments"}),Object.entries(re.parameters.properties).map(([ee,F])=>{var Q,te;return o.jsxs("div",{className:"arg-row",children:[o.jsxs("span",{className:"arg-name",children:[ee,((Q=re.parameters.required)==null?void 0:Q.includes(ee))&&o.jsx("span",{className:"required",children:"*"})]}),o.jsx("input",{type:F.type==="number"||F.type==="integer"?"number":"text",value:typeof _[ee]=="object"?JSON.stringify(_[ee]):_[ee]??"",onChange:O=>A(ne=>({...ne,[ee]:O.target.value})),placeholder:((te=F.description)==null?void 0:te.slice(0,40))||ee})]},ee)})]}),j&&x&&o.jsxs("div",{className:"test-section",children:[o.jsxs("div",{className:"test-header",children:[o.jsx("label",{children:"Test & Preview"}),o.jsxs("button",{className:"test-btn",onClick:w,disabled:T,children:[T?o.jsx(Zt,{size:12,className:"spin"}):o.jsx(hr,{size:12}),T?"Running...":"Test Run"]})]}),q&&o.jsxs("div",{className:"test-result error",children:[o.jsx("span",{className:"test-label",children:"Error:"}),o.jsx("pre",{children:q})]}),z&&o.jsxs("div",{className:"test-result",children:[o.jsx("span",{className:"test-label",children:"Raw Result:"}),o.jsx("pre",{children:z})]})]}),o.jsxs("div",{className:"form-row transform-row",children:[o.jsx("label",{children:"Transform (optional)"}),o.jsx("input",{type:"text",value:S,onChange:ee=>M(ee.target.value),placeholder:"e.g., .items[0].name or .content[].text"}),o.jsxs("div",{className:"transform-hints",children:[o.jsx("span",{className:"hint-title",children:"Path:"}),o.jsx("code",{onClick:()=>M(".items[0].name"),children:".items[0].name"}),o.jsx("code",{onClick:()=>M(".content[0].text"),children:".content[0].text"}),o.jsx("code",{onClick:()=>M(".result.data"),children:".result.data"}),o.jsx("span",{className:"hint-title",children:"JS:"}),o.jsx("code",{onClick:()=>M("js:value.split('\\n')[0]"),children:"js:value.split('\\n')[0]"}),o.jsx("code",{onClick:()=>M("js:data.items?.length"),children:"js:data.items?.length"})]})]}),z&&S&&o.jsxs("div",{className:"transform-preview",children:[o.jsx("span",{className:"test-label",children:"Transform Preview:"}),o.jsx("pre",{className:W!=null&&W.startsWith("[Transform error")?"error":"",children:W})]})]}),o.jsxs("div",{className:"dialog-footer",children:[o.jsx("button",{className:"cancel-btn",onClick:()=>u(!1),children:"Cancel"}),o.jsx("button",{className:"add-btn",onClick:K,disabled:!j||!x,children:d?"Save Changes":"Add Watch"})]})]})})]})}function W5(){var Vp,Hp;const{project:e,updateProject:t,isRunning:n,setIsRunning:r,runEvents:i,addRunEvent:s,clearRunEvents:a,clearWatchHistories:l,runAgentId:c,setRunAgentId:u,watches:d,updateWatch:p,currentSessionId:f,setCurrentSessionId:h}=gt(),[m,b]=k.useState(""),[j,g]=k.useState(null),[x,v]=k.useState(null),[_,A]=k.useState(null),[S,M]=k.useState(""),[E,U]=k.useState(new Set(["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_start","callback_end","callback_error"])),[z,$]=k.useState(()=>{const H=localStorage.getItem("sandboxMode");return H!==null?H==="true":!0});k.useEffect(()=>{localStorage.setItem("sandboxMode",String(z))},[z]);const[q,Y]=k.useState(null),[T,P]=k.useState(!1),[D,C]=k.useState({}),[L,R]=k.useState(!1),[w,W]=k.useState("agent"),K=k.useRef(null),y=k.useRef(!0),N=k.useRef(0),[V,re]=k.useState(!0),[fe,me]=k.useState(!0),[ee,F]=k.useState(!1),[Q,te]=k.useState(!1),[O,ne]=k.useState(360),[le,be]=k.useState(!1),[ie,I]=k.useState(!1),[G,J]=k.useState(!1),oe=k.useMemo(()=>n?"running":i.length===0?"idle":G?"cancelled":i.slice(-5).some(pe=>{var he,ze,Pe,dt,Ot;if(!pe||!pe.event_type)return!1;if((he=pe.data)!=null&&he.error||pe.event_type==="callback_error"||pe.event_type==="agent_end"&&((ze=pe.data)!=null&&ze.error)||xg(pe).includes("[ERROR]"))return!0;if(pe.event_type==="model_response"){const Nn=(((dt=(Pe=pe.data)==null?void 0:Pe.response_content)==null?void 0:dt.parts)||((Ot=pe.data)==null?void 0:Ot.parts)||[]).find(Hr=>(Hr==null?void 0:Hr.type)==="text");if(Nn!=null&&Nn.text&&(Nn.text.includes("[ERROR]")||Nn.text.toLowerCase().includes("error:")||Nn.text.toLowerCase().includes("exception:")))return!0}return!1})?"failed":"completed",[n,i,G]),[B,Z]=k.useState(!1),[se,ge]=k.useState([]),X=k.useRef(null);k.useEffect(()=>{if(!e)return;const H=`promptHistory_${e.id}`,ce=localStorage.getItem(H);if(ce)try{const pe=JSON.parse(ce),xe=Object.entries(pe).map(([he,ze])=>({prompt:he,count:ze})).sort((he,ze)=>ze.count-he.count);ge(xe)}catch(pe){console.error("Failed to parse prompt history:",pe)}else ge([])},[e==null?void 0:e.id]);const ae=k.useCallback(H=>{const ce=H.trim();if(!ce||!e)return;const pe=`promptHistory_${e.id}`,xe=localStorage.getItem(pe),he=xe?JSON.parse(xe):{};he[ce]=(he[ce]||0)+1,localStorage.setItem(pe,JSON.stringify(he));const ze=Object.entries(he).map(([Pe,dt])=>({prompt:Pe,count:dt})).sort((Pe,dt)=>dt.count-Pe.count);ge(ze)},[e]),we=k.useMemo(()=>{const H=m.toLowerCase().trim();return se.filter(ce=>!H||ce.prompt.toLowerCase().includes(H)).slice(0,10)},[se,m]),[je,_e]=k.useState([60,80,100,80,1]),[Ae,nt]=k.useState(null),ct=k.useRef(0),Ne=k.useRef(0),[rt,qe]=k.useState([]),[Vn,ut]=k.useState(null),[fs,Rp]=k.useState(!1),Ip=k.useRef(0),Op=k.useCallback(async(H,ce)=>{var ze;if(!e)return;p(H.id,{isLoading:!0,error:void 0});const pe=ce??i.length-1,xe=Date.now(),he=((ze=e.app)==null?void 0:ze.id)||`app_${e.id}`;try{const Pe=await Ce(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:H.serverName,tool_name:H.toolName,arguments:H.args,sandbox_mode:z,app_id:z?he:void 0})}),dt={eventIndex:pe,timestamp:xe,result:Pe},Ot=[...H.history||[],dt];p(H.id,{result:Pe,isLoading:!1,lastRun:xe,history:Ot})}catch(Pe){const dt={eventIndex:pe,timestamp:xe,error:String(Pe)},Ot=[...H.history||[],dt];p(H.id,{error:String(Pe),isLoading:!1,lastRun:xe,history:Ot})}},[e==null?void 0:e.id,(Vp=e==null?void 0:e.app)==null?void 0:Vp.id,p,i.length,z]);k.useEffect(()=>{if(i.length>Ip.current&&d.length>0){const H=i.length-1;d.forEach(ce=>{ce.isLoading||Op(ce,H)})}Ip.current=i.length},[i.length,d,Op]),k.useEffect(()=>{c!==null&&($p(c),u(null))},[c,u]);const[$i,$p]=k.useState(null),hs=k.useRef(null),El=k.useRef(null);k.useEffect(()=>{if(!le)return;const H=pe=>{if(!El.current)return;const he=El.current.getBoundingClientRect().right-pe.clientX;ne(Math.min(600,Math.max(200,he)))},ce=()=>{be(!1)};return document.addEventListener("mousemove",H),document.addEventListener("mouseup",ce),()=>{document.removeEventListener("mousemove",H),document.removeEventListener("mouseup",ce)}},[le]),k.useEffect(()=>{if(Ae===null)return;const H=pe=>{const xe=pe.clientX-ct.current,he=Math.max(40,Ne.current+xe);_e(ze=>{const Pe=[...ze];return Pe[Ae]=he,Pe})},ce=()=>{nt(null)};return document.addEventListener("mousemove",H),document.addEventListener("mouseup",ce),document.body.style.cursor="col-resize",document.body.style.userSelect="none",()=>{document.removeEventListener("mousemove",H),document.removeEventListener("mouseup",ce),document.body.style.cursor="",document.body.style.userSelect=""}},[Ae]);const ms=(H,ce)=>{ce.preventDefault(),ct.current=ce.clientX,Ne.current=je[H],nt(H)},Dp=je.map((H,ce)=>ce===je.length-1?`minmax(${H}px, 1fr)`:`${H}px`).join(" "),X1=k.useMemo(()=>i.length===0?{min:0,max:0}:{min:i[0].timestamp,max:i[i.length-1].timestamp},[i]),It=k.useMemo(()=>i.filter((H,ce)=>{var pe,xe,he;if(_&&(H.timestamp<_[0]||H.timestamp>_[1])||E.size>0&&!E.has(H.event_type))return!1;if(V&&H.event_type==="model_response"){const ze=((xe=(pe=H.data)==null?void 0:pe.response_content)==null?void 0:xe.parts)||((he=H.data)==null?void 0:he.parts)||[],Pe=ze.some(Ot=>Ot.type==="function_call"),dt=ze.some(Ot=>Ot.type==="text");if(!Pe&&!dt)return!1}return!(S&&!JSON.stringify(H).toLowerCase().includes(S.toLowerCase()))}),[i,_,E,S,V]),gs=k.useMemo(()=>{var xe;let H=0,ce=0;const pe=x!==null?x+1:i.length;for(let he=0;he<pe;he++){const ze=i[he];ze.event_type==="model_response"&&((xe=ze.data)!=null&&xe.token_counts)&&(H+=ze.data.token_counts.input||0,ce+=ze.data.token_counts.output||0)}return{input:H,output:ce,total:H+ce}},[i,x]),Fp=x!==null?i[x]:null;k.useEffect(()=>{if(!e){qe([]);return}(async()=>{Rp(!0);try{const ce=await Nu(e.id);qe(ce)}catch(ce){console.error("Failed to load sessions:",ce),qe([])}finally{Rp(!1)}})()},[e]);const zl=k.useCallback(async H=>{if(!e){ut(null);return}if(!H){a(),l(),h(null),ut(null),v(null),A(null);return}try{const ce=await ev(e.id,H);a(),l(),h(ce.id),ut(H),v(null),A(null);for(const pe of ce.events)s(pe)}catch(ce){alert(`Failed to load session: ${ce.message||"Unknown error"}`)}},[e,a,l,h,s]);k.useEffect(()=>{if(!e||rt.length===0||fs)return;const ce=new URLSearchParams(window.location.search).get("session");if(ce)if(rt.some(xe=>xe.id===ce)){zl(ce);const xe=window.location.pathname;window.history.replaceState({},"",xe)}else console.warn(`Session ${ce} not found in available sessions`)},[e,rt,fs,zl]),k.useEffect(()=>{n&&hs.current&&(hs.current.scrollTop=hs.current.scrollHeight)},[i.length,n]);const Di=k.useCallback(H=>{const ce=H??m;if(!e||!ce.trim()||n)return;I(!0),ae(ce),Z(!1),b(ce),j&&(j.close(),g(null)),a(),l(),ut(null),h(null),r(!0),J(!1),v(null),A(null);const pe=ov(e.id);g(pe),pe.onopen=()=>{pe.send(JSON.stringify({message:ce,agent_id:$i||void 0,sandbox_mode:z}))},pe.onmessage=xe=>{var ze;const he=JSON.parse(xe.data);if(he.event_type==="agent_start"&&((ze=he.data)!=null&&ze.session_id)){const Pe=he.data.session_id;he.data.session_reused,h(Pe),Pe&&rt.some(dt=>dt.id===Pe)&&ut(Pe)}else if(he.type==="session_started")h(he.session_id),he.session_id&&rt.some(Pe=>Pe.id===he.session_id)&&ut(he.session_id);else if(he.type==="sandbox_starting")s({timestamp:Date.now()/1e3,event_type:"agent_start",agent_name:"sandbox",data:{message:"Starting Docker sandbox..."}});else if(he.type==="sandbox_started")s({timestamp:Date.now()/1e3,event_type:"agent_start",agent_name:"sandbox",data:{message:`Sandbox started (ID: ${he.sandbox_id})`}});else if(he.type==="sandbox_response")s({timestamp:Date.now()/1e3,event_type:"model_response",agent_name:"sandbox",data:he.data});else if(he.event_type==="approval_required"||he.type==="network_request"&&he.event_type==="approval_required"){const Pe={id:he.id,method:he.method||"GET",url:he.url,host:he.host,source:he.source||"agent",headers:he.headers||{},timeout:he.timeout||30};Y(Pe),s({timestamp:Date.now()/1e3,event_type:"callback_start",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`⚠️ Network request to ${he.host} requires approval`,host:he.host,url:he.url}})}else he.type==="completed"?(r(!1),pe.close()):he.type==="error"?(r(!1),s({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:he.error}})):s(he)},pe.onerror=xe=>{console.error("WebSocket error:",xe),r(!1),s({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:"Connection error. The server may have timed out or the LLM request failed. Try again or check if your model server is running.",retryable:!0}})},pe.onclose=xe=>{n&&(r(!1),xe.code!==1e3&&xe.code!==1005&&s({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:`Connection closed unexpectedly (code: ${xe.code}). This may be due to a timeout or server error. Try increasing the request timeout in your model configuration.`,retryable:!0}}))}},[e,m,n,j,a,l,r,s,$i,h,z,ae]),Z1=k.useCallback(()=>{j==null||j.close(),r(!1),J(!0)},[j,r]),e0=k.useCallback(async(H,ce,pe)=>{var Ot,Al,Nn,Hr,qp,Jp,Kp,Gp,Yp,Qp,Xp,Zp,ef,tf,nf,rf,of,sf,af,lf,cf,uf,df,pf,ff,hf;if(!q||!e)return;const xe=((Ot=e.app)==null?void 0:Ot.id)||e.id,he=H?"allow_pattern":"allow_once",ze=H||q.host,Pe=ce||"exact",dt=pe?`/sandbox/${xe}/approval?project_id=${e.id}`:`/sandbox/${xe}/approval`;try{if(await Ce(dt,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:q.id,action:he,pattern:ze,pattern_type:Pe,persist:pe||!1})}),pe&&he==="allow_pattern"){const Pl=((Hr=(Nn=(Al=e.app)==null?void 0:Al.sandbox)==null?void 0:Nn.allowlist)==null?void 0:Hr.user)||[],f0={id:`pattern_${Date.now().toString(36)}`,pattern:ze,pattern_type:Pe,source:"approved",added_at:new Date().toISOString()};t({app:{...e.app,sandbox:{...(qp=e.app)==null?void 0:qp.sandbox,enabled:((Kp=(Jp=e.app)==null?void 0:Jp.sandbox)==null?void 0:Kp.enabled)??!1,allow_all_network:((Yp=(Gp=e.app)==null?void 0:Gp.sandbox)==null?void 0:Yp.allow_all_network)??!1,allowlist:{auto:((Zp=(Xp=(Qp=e.app)==null?void 0:Qp.sandbox)==null?void 0:Xp.allowlist)==null?void 0:Zp.auto)||[],user:[...Pl,f0]},unknown_action:((tf=(ef=e.app)==null?void 0:ef.sandbox)==null?void 0:tf.unknown_action)??"ask",approval_timeout:((rf=(nf=e.app)==null?void 0:nf.sandbox)==null?void 0:rf.approval_timeout)??30,agent_memory_limit_mb:((sf=(of=e.app)==null?void 0:of.sandbox)==null?void 0:sf.agent_memory_limit_mb)??512,agent_cpu_limit:((lf=(af=e.app)==null?void 0:af.sandbox)==null?void 0:lf.agent_cpu_limit)??1,mcp_memory_limit_mb:((uf=(cf=e.app)==null?void 0:cf.sandbox)==null?void 0:uf.mcp_memory_limit_mb)??256,mcp_cpu_limit:((pf=(df=e.app)==null?void 0:df.sandbox)==null?void 0:pf.mcp_cpu_limit)??.5,run_timeout:((hf=(ff=e.app)==null?void 0:ff.sandbox)==null?void 0:hf.run_timeout)??3600}}})}s({timestamp:Date.now()/1e3,event_type:"callback_end",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`✅ Approved: ${ze}`,pattern:ze,action:he}})}catch(Pl){console.error("Failed to approve:",Pl)}Y(null)},[q,e,s,t]),t0=k.useCallback(async()=>{var ce;if(!q||!e)return;const H=((ce=e.app)==null?void 0:ce.id)||e.id;try{await Ce(`/sandbox/${H}/approval`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:q.id,action:"deny"})}),s({timestamp:Date.now()/1e3,event_type:"callback_end",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`❌ Denied: ${q.host}`,host:q.host,action:"deny"}})}catch(pe){console.error("Failed to deny:",pe)}Y(null)},[q,e,s]),Fi=k.useCallback(async(H=!0)=>{var pe;if(!e)return;const ce=((pe=e.app)==null?void 0:pe.id)||`app_${e.id}`;H&&R(!0);try{const[xe,he]=await Promise.all([Ce(`/sandbox/${ce}/logs?container=agent&tail=500`).catch(()=>null),Ce(`/sandbox/${ce}/logs?container=gateway&tail=500`).catch(()=>null)]);C({agent:(xe==null?void 0:xe.logs)||(xe==null?void 0:xe.error)||"No logs available",gateway:(he==null?void 0:he.logs)||(he==null?void 0:he.error)||"No logs available"})}catch(xe){console.error("Failed to fetch logs:",xe),C({agent:`Error fetching logs: ${xe}`,gateway:`Error fetching logs: ${xe}`})}finally{H&&R(!1)}},[e]),n0=k.useCallback(()=>{P(!0),Fi()},[Fi]);k.useEffect(()=>{if(!T||!K.current||L)return;const H=K.current,ce=N.current,pe=H.scrollHeight;setTimeout(()=>{if(K.current){if(y.current)K.current.scrollTop=K.current.scrollHeight;else if(ce>0&&pe>ce){const xe=pe-ce;K.current.scrollTop+=xe}N.current=K.current.scrollHeight}},50)},[T,w,D,L]),k.useEffect(()=>{T&&(y.current=!0,N.current=0)},[T,w]);const r0=k.useCallback(()=>{if(!K.current)return;const H=K.current,pe=H.scrollHeight-H.scrollTop-H.clientHeight<50;y.current=pe},[]);k.useEffect(()=>{if(!T)return;const H=setInterval(()=>{Fi(!1)},3e3);return()=>clearInterval(H)},[T,Fi]),k.useEffect(()=>{const H=ce=>{if((ce.metaKey||ce.ctrlKey)&&ce.key==="Enter"){ce.preventDefault(),Di();return}if(ce.key==="ArrowDown"||ce.key==="ArrowUp"){if(ce.target instanceof HTMLInputElement||ce.target instanceof HTMLTextAreaElement||(ce.preventDefault(),It.length===0))return;if(ce.key==="ArrowDown")if(x===null){const pe=i.indexOf(It[0]);v(pe)}else{const pe=It.findIndex(xe=>i.indexOf(xe)===x);if(pe<It.length-1){const xe=i.indexOf(It[pe+1]);v(xe)}}else if(ce.key==="ArrowUp")if(x===null){const pe=i.indexOf(It[It.length-1]);v(pe)}else{const pe=It.findIndex(xe=>i.indexOf(xe)===x);if(pe>0){const xe=i.indexOf(It[pe-1]);v(xe)}}}};return window.addEventListener("keydown",H),()=>window.removeEventListener("keydown",H)},[Di,It,x,i]);const i0=k.useCallback(()=>{var he;if(i.length===0)return;const H={version:1,exportedAt:new Date().toISOString(),projectId:e==null?void 0:e.id,projectName:e==null?void 0:e.name,agentId:$i||((he=e==null?void 0:e.app)==null?void 0:he.root_agent_id),events:i},ce=new Blob([JSON.stringify(H,null,2)],{type:"application/json"}),pe=URL.createObjectURL(ce),xe=document.createElement("a");xe.href=pe,xe.download=`run-${(e==null?void 0:e.name)||"export"}-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,document.body.appendChild(xe),xe.click(),document.body.removeChild(xe),URL.revokeObjectURL(pe)},[i,e,$i]),o0=k.useCallback(async()=>{if(!f||!e){alert("No active session to save");return}try{const H=await Zy(f);if(H.success){alert(H.message||"Session saved to memory successfully");try{const ce=await Nu(e.id);qe(ce)}catch{}}else alert(`Failed to save to memory: ${H.error||"Unknown error"}`)}catch(H){alert(`Error saving to memory: ${H.message||"Unknown error"}`)}},[f,e]),[s0,xs]=k.useState(!1),[a0,l0]=k.useState([]),[Bi,Bp]=k.useState(""),[Tl,c0]=k.useState("Test Case from Session"),[Up,Wp]=k.useState(!1),u0=k.useCallback(async()=>{if(!f||!e){alert("No active session to create test case from");return}try{const H=await Ce(`/projects/${e.id}/eval-sets`);if(l0(H.eval_sets||[]),!H.eval_sets||H.eval_sets.length===0){confirm(`No evaluation sets found. Would you like to create one first?

Go to the Evals tab to create an evaluation set.`)&&(window.location.href=`/project/${e.id}/evals`);return}Bp(H.eval_sets[0].id),xs(!0)}catch(H){alert(`Error loading eval sets: ${H.message||"Unknown error"}`)}},[f,e]),d0=k.useCallback(async()=>{if(!f||!e||!Bi){alert("Please select an evaluation set");return}Wp(!0);try{const H=await Ce(`/projects/${e.id}/session-to-eval-case`,{method:"POST",body:JSON.stringify({session_id:f,eval_set_id:Bi,case_name:Tl})});xs(!1),alert(`Test case "${H.eval_case.name}" created successfully!

Token count: ${H.session_token_count.toLocaleString()} tokens

Go to the Evals tab to view and edit the test case.`)}catch(H){alert(`Error creating test case: ${H.message||"Unknown error"}`)}finally{Wp(!1)}},[f,e,Bi,Tl]),p0=k.useCallback(()=>{const H=document.createElement("input");H.type="file",H.accept=".json",H.onchange=async ce=>{var xe;const pe=(xe=ce.target.files)==null?void 0:xe[0];if(pe)try{const he=await pe.text(),ze=JSON.parse(he);if(!ze.events||!Array.isArray(ze.events)){alert("Invalid run file: missing events array");return}a(),l(),v(null),A(null),ze.events.forEach(Pe=>{s(Pe)})}catch(he){alert(`Failed to load run file: ${he}`)}},H.click()},[a,l,s]);return k.useEffect(()=>{if(x!==null){const H=document.querySelector(".event-row.selected");H==null||H.scrollIntoView({behavior:"smooth",block:"nearest"})}},[x]),e?o.jsxs("div",{className:`run-panel ${le?"resizing":""}`,children:[o.jsx("style",{children:`
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
      `}),o.jsx(P5,{agents:e.agents,events:i,selectedEventIndex:x,isOpen:ie,onOpenChange:I,runState:oe}),o.jsxs("div",{className:"input-area",children:[o.jsxs("select",{className:"agent-selector",value:$i||"",onChange:H=>$p(H.target.value||null),disabled:n,title:"Select which agent to run",children:[o.jsx("option",{value:"",children:e.app.root_agent_id?`Root: ${((Hp=e.agents.find(H=>H.id===e.app.root_agent_id))==null?void 0:Hp.name)||e.app.root_agent_id}`:"No root agent"}),e.agents.filter(H=>H.id!==e.app.root_agent_id).map(H=>o.jsxs("option",{value:H.id,children:[H.name," (",H.type.replace("Agent",""),")"]},H.id))]}),o.jsxs("select",{className:"agent-selector",value:Vn||"",onChange:H=>zl(H.target.value||null),disabled:n||fs,style:{minWidth:180},title:"Load a saved session",children:[o.jsx("option",{value:"",children:fs?"Loading...":"Load Session..."}),rt.map(H=>{const ce=new Date(H.started_at*1e3),pe=H.duration?`${H.duration.toFixed(1)}s`:"?";return o.jsxs("option",{value:H.id,children:[ce.toLocaleString()," (",H.event_count," events, ",pe,")"]},H.id)})]}),o.jsxs("div",{style:{position:"relative",flex:1,display:"flex"},children:[o.jsx("input",{ref:X,type:"text",placeholder:"Enter your query...",value:m,onChange:H=>b(H.target.value),onFocus:()=>Z(!0),onBlur:()=>setTimeout(()=>Z(!1),150),onKeyDown:H=>{H.key==="Enter"&&!H.shiftKey?Di():H.key==="Escape"&&Z(!1)},disabled:n,style:{flex:1}}),B&&we.length>0&&o.jsx("div",{style:{position:"absolute",top:"100%",left:0,right:0,background:"#18181b",border:"1px solid #3f3f46",borderRadius:"6px",marginTop:"4px",maxHeight:"240px",overflowY:"auto",zIndex:100,boxShadow:"0 4px 12px rgba(0,0,0,0.4)"},children:we.map((H,ce)=>o.jsxs("div",{style:{padding:"8px 12px",fontSize:"12px",color:"#e4e4e7",cursor:"pointer",borderBottom:ce<we.length-1?"1px solid #27272a":"none",display:"flex",justifyContent:"space-between",alignItems:"center"},onMouseDown:pe=>{pe.preventDefault(),Di(H.prompt)},onMouseEnter:pe=>{pe.currentTarget.style.background="#27272a"},onMouseLeave:pe=>{pe.currentTarget.style.background="transparent"},children:[o.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1,marginRight:"8px"},children:H.prompt}),o.jsxs("span",{style:{fontSize:"10px",color:"#71717a",flexShrink:0},children:["×",H.count]})]},ce))})]}),n?o.jsxs("button",{className:"stop",onClick:Z1,children:[o.jsx(zj,{size:14}),"Stop"]}):o.jsxs("button",{onClick:()=>Di(),disabled:!m.trim(),children:[o.jsx(hr,{size:14}),"Run"]}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"4px",marginLeft:"12px",fontSize:"11px",color:z?"#22d3ee":"#71717a",cursor:"pointer"},title:"Run in isolated Docker container",children:[o.jsx("input",{type:"checkbox",checked:z,onChange:H=>$(H.target.checked),disabled:n,style:{accentColor:"#22d3ee"}}),"🐳 Sandbox"]}),z&&o.jsx("button",{onClick:n0,style:{background:"transparent",border:"1px solid #3f3f46",borderRadius:"4px",padding:"2px 8px",marginLeft:"8px",fontSize:"11px",color:"#a1a1aa",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"},title:"View container logs",children:"📋 Logs"})]}),o.jsxs("div",{className:"toolbar",children:[o.jsxs("div",{className:"toolbar-section",children:[o.jsx(wv,{size:12,style:{color:"#71717a"}}),o.jsx("input",{type:"text",placeholder:"Filter events...",value:S,onChange:H=>M(H.target.value)})]}),o.jsx("div",{className:"toolbar-divider"}),o.jsxs("div",{className:"toolbar-section",children:[["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_error"].map(H=>o.jsx("button",{className:`filter-chip ${E.has(H)?"active":""}`,onClick:()=>{const ce=new Set(E);ce.has(H)?ce.delete(H):ce.add(H),U(ce)},children:H.replace("_"," ")},H)),o.jsx("button",{className:`filter-chip ${E.has("callback_start")&&E.has("callback_end")?"active":""}`,onClick:()=>{const H=new Set(E);H.has("callback_start")&&H.has("callback_end")?(H.delete("callback_start"),H.delete("callback_end")):(H.add("callback_start"),H.add("callback_end")),U(H)},title:"Show/hide callback events",children:"callback"}),o.jsx("button",{className:`filter-chip ${V?"active":""}`,onClick:()=>re(!V),title:"Hide LLM_RESP (complete) events",children:"hide (complete)"})]}),o.jsx("div",{className:"toolbar-divider"}),o.jsxs("div",{className:"toolbar-section",children:[o.jsxs("button",{className:`toolbar-btn ${fe?"active":""}`,onClick:()=>{me(!fe),F(!1),te(!1)},children:[o.jsx(In,{size:12}),"State"]}),o.jsxs("button",{className:`toolbar-btn ${Q?"active":""}`,onClick:()=>{te(!Q),me(!1),F(!1)},children:[o.jsx($a,{size:12}),"Artifacts"]}),o.jsxs("button",{className:`toolbar-btn ${ee?"active":""}`,onClick:()=>{F(!ee),me(!1),te(!1)},children:[o.jsx(ac,{size:12}),"Tools"]})]}),o.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:[o.jsxs("span",{style:{fontSize:10,color:"#71717a"},children:[It.length," / ",i.length," events"]}),_&&o.jsx("button",{className:"toolbar-btn",onClick:()=>A(null),children:"Clear Range"})]})]}),o.jsxs("div",{className:"main-content",ref:El,children:[o.jsxs("div",{className:"event-list-container",children:[o.jsxs("div",{className:"event-list-header",style:{gridTemplateColumns:Dp},children:[o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"#"}),o.jsx("div",{className:`column-resize-handle ${Ae===0?"active":""}`,onMouseDown:H=>ms(0,H)})]}),o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"Time"}),o.jsx("div",{className:`column-resize-handle ${Ae===1?"active":""}`,onMouseDown:H=>ms(1,H)})]}),o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"Agent"}),o.jsx("div",{className:`column-resize-handle ${Ae===2?"active":""}`,onMouseDown:H=>ms(2,H)})]}),o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"Type"}),o.jsx("div",{className:`column-resize-handle ${Ae===3?"active":""}`,onMouseDown:H=>ms(3,H)})]}),o.jsx("div",{className:"header-cell",children:o.jsx("span",{children:"Info"})})]}),o.jsx("div",{className:"event-list",ref:hs,children:It.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(vv,{size:24}),o.jsx("span",{children:i.length===0?"No events yet":"No matching events"})]}):It.map((H,ce)=>{const pe=i.indexOf(H),xe=hg[H.event_type]||hg.error,he=M5[H.event_type]||Fa;return o.jsxs("div",{className:`event-row ${x===pe?"selected":""}`,style:{background:xe.bg,gridTemplateColumns:Dp},onClick:()=>v(pe),onDoubleClick:()=>{me(!1),F(!1),te(!1)},children:[o.jsx("div",{className:"index",children:pe}),o.jsx("div",{className:"time",style:{color:xe.fg},children:L5(H.timestamp,X1.min)}),o.jsx("div",{className:"agent",children:o.jsx("span",{className:"agent-badge",style:{backgroundColor:Xa(H.agent_name).bg,color:Xa(H.agent_name).fg},children:H.agent_name})}),o.jsxs("div",{className:"type",style:{color:xe.fg},children:[o.jsx(he,{size:10}),H.event_type.split("_")[0]]}),o.jsx("div",{className:"summary",children:xg(H)})]},pe)})})]}),o.jsxs("div",{className:"side-panel-container",style:{width:O},children:[o.jsx("div",{className:`resize-handle ${le?"active":""}`,onMouseDown:()=>be(!0)}),o.jsxs("div",{className:"side-panel",style:{width:O-4},children:[o.jsxs("div",{className:"side-panel-tabs",children:[o.jsxs("button",{className:`side-panel-tab ${!fe&&!ee&&!Q?"active":""}`,onClick:()=>{me(!1),F(!1),te(!1)},children:[o.jsx(Dr,{size:12,style:{marginRight:4}}),"Details"]}),o.jsxs("button",{className:`side-panel-tab ${fe?"active":""}`,onClick:()=>{me(!0),F(!1),te(!1)},children:[o.jsx(In,{size:12,style:{marginRight:4}}),"State"]}),o.jsxs("button",{className:`side-panel-tab ${Q?"active":""}`,onClick:()=>{te(!0),me(!1),F(!1)},children:[o.jsx($a,{size:12,style:{marginRight:4}}),"Artifacts"]}),o.jsxs("button",{className:`side-panel-tab ${ee?"active":""}`,onClick:()=>{F(!0),me(!1),te(!1)},children:[o.jsx(ac,{size:12,style:{marginRight:4}}),"Tools"]})]}),o.jsx("div",{className:"side-panel-content",children:ee?o.jsx(U5,{project:e,selectedEventIndex:x,sandboxMode:z}):Q?o.jsx(B5,{project:e,sessionId:f}):fe?o.jsx(F5,{events:i,selectedEventIndex:x,project:e}):Fp?o.jsx(O5,{event:Fp}):o.jsxs("div",{className:"empty-state",children:[o.jsx(Dr,{size:24}),o.jsx("span",{children:"Select an event to view details"})]})})]})]})]}),o.jsxs("div",{className:"stats-bar",children:[o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Events:"}),o.jsx("span",{className:"stat-value",children:i.length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Tool Calls:"}),o.jsx("span",{className:"stat-value",children:i.filter(H=>H.event_type==="tool_call").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Model Calls:"}),o.jsx("span",{className:"stat-value",children:i.filter(H=>H.event_type==="model_call").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Callbacks:"}),o.jsx("span",{className:"stat-value",children:i.filter(H=>H.event_type==="callback_start").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"State Changes:"}),o.jsx("span",{className:"stat-value",children:i.filter(H=>H.event_type==="state_change").length})]}),i.length>0&&o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Duration:"}),o.jsxs("span",{className:"stat-value",children:[((i[i.length-1].timestamp-i[0].timestamp)*1e3).toFixed(0),"ms"]})]}),gs.total>0&&o.jsx("div",{className:"stat-item token-stats",children:o.jsxs("span",{className:"stat-value token-value",children:[o.jsxs("span",{className:"token-in",title:"Input tokens",children:[gs.input.toLocaleString(),"↑"]}),o.jsxs("span",{className:"token-out",title:"Output tokens",children:[gs.output.toLocaleString(),"↓"]}),o.jsx("span",{className:"token-total",title:"Total tokens",children:gs.total.toLocaleString()})]})}),o.jsx("div",{className:"stats-bar-spacer"}),o.jsxs("button",{className:"stats-bar-btn",onClick:p0,title:"Load a saved run",children:[o.jsx(yl,{size:12}),"Load"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:i0,disabled:i.length===0,title:"Save current run to file",children:[o.jsx(Ri,{size:12}),"Save"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:o0,disabled:!f||i.length===0,title:"Save current session to memory",children:[o.jsx(In,{size:12}),"Save to Memory"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:u0,disabled:!f||i.length===0,title:"Create evaluation test case from this session",style:{background:"rgba(var(--accent-primary-rgb), 0.15)"},children:[o.jsx(Au,{size:12}),"Create Test Case"]})]}),s0&&o.jsx("div",{className:"dialog-overlay",style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>xs(!1),children:o.jsxs("div",{className:"dialog-content",style:{background:"var(--bg-secondary)",borderRadius:"var(--radius-md)",padding:24,width:400,maxWidth:"90vw",border:"1px solid var(--border-color)"},onClick:H=>H.stopPropagation(),children:[o.jsxs("h3",{style:{marginBottom:16,display:"flex",alignItems:"center",gap:8},children:[o.jsx(Au,{size:18}),"Create Test Case from Session"]}),o.jsxs("div",{style:{marginBottom:16},children:[o.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Test Case Name"}),o.jsx("input",{type:"text",value:Tl,onChange:H=>c0(H.target.value),placeholder:"Enter test case name",style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"}})]}),o.jsxs("div",{style:{marginBottom:20},children:[o.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Add to Evaluation Set"}),o.jsx("select",{value:Bi,onChange:H=>Bp(H.target.value),style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"},children:a0.map(H=>o.jsx("option",{value:H.id,children:H.name},H.id))})]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:16},children:"This will extract user messages and tool calls from the current session to create a replayable test case. You can edit the expected responses and tool calls in the Evals tab after creation."}),o.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>xs(!1),children:"Cancel"}),o.jsx("button",{className:"btn btn-primary",onClick:d0,disabled:Up||!Bi,children:Up?"Creating...":"Create Test Case"})]})]})}),q&&o.jsx(zE,{request:q,timeout:q.timeout||30,onApprove:e0,onDeny:t0,onClose:()=>Y(null)}),T&&o.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>P(!1),children:o.jsxs("div",{style:{backgroundColor:"#18181b",borderRadius:"8px",border:"1px solid #3f3f46",width:"90%",maxWidth:"1400px",height:"80%",display:"flex",flexDirection:"column",overflow:"hidden"},onClick:H=>H.stopPropagation(),children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx(ac,{size:16}),o.jsx("span",{style:{fontWeight:600},children:"Container Logs"})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsxs("button",{onClick:Fi,disabled:L,style:{background:"#3f3f46",border:"none",borderRadius:"4px",padding:"4px 8px",color:"#e4e4e7",cursor:L?"wait":"pointer",display:"flex",alignItems:"center",gap:"4px",fontSize:"12px"},children:[o.jsx(Zt,{size:12,className:L?"animate-spin":""}),"Refresh"]}),o.jsx("button",{onClick:()=>P(!1),style:{background:"transparent",border:"none",color:"#71717a",cursor:"pointer",padding:"4px"},children:o.jsx(Wr,{size:16})})]})]}),o.jsxs("div",{style:{display:"flex",gap:"0",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[o.jsx("button",{onClick:()=>W("agent"),style:{padding:"8px 16px",background:w==="agent"?"#18181b":"transparent",border:"none",borderBottom:w==="agent"?"2px solid #22d3ee":"2px solid transparent",color:w==="agent"?"#22d3ee":"#a1a1aa",cursor:"pointer",fontSize:"13px"},children:"🤖 Agent"}),o.jsx("button",{onClick:()=>W("gateway"),style:{padding:"8px 16px",background:w==="gateway"?"#18181b":"transparent",border:"none",borderBottom:w==="gateway"?"2px solid #22d3ee":"2px solid transparent",color:w==="gateway"?"#22d3ee":"#a1a1aa",cursor:"pointer",fontSize:"13px"},children:"🌐 Gateway"})]}),o.jsx("div",{ref:K,onScroll:r0,style:{flex:1,overflow:"auto",padding:"12px",fontFamily:"ui-monospace, monospace",fontSize:"11px",lineHeight:"1.5",whiteSpace:"pre-wrap",wordBreak:"break-all",color:"#d4d4d8",backgroundColor:"#09090b"},children:L?o.jsx("div",{style:{color:"#71717a",textAlign:"center",padding:"20px"},children:"Loading logs..."}):D[w]?o.jsx(I5,{content:D[w]}):o.jsx("div",{style:{color:"#71717a"},children:"No logs available"})})]})})]}):o.jsx("div",{className:"run-panel empty",children:"No project loaded"})}const V5=()=>Math.random().toString(36).substring(2,10),H5=()=>({id:V5(),name:"New SkillSet",description:"",embedding_model:void 0,app_model_id:void 0,external_store_type:void 0,external_store_config:{},search_enabled:!0,preload_enabled:!0,preload_top_k:3,preload_min_score:.4,sources:[],entry_count:0});function q5(){const{project:e,setProject:t}=gt(),[n,r]=k.useState(null),[i,s]=k.useState(null),[a,l]=k.useState(""),[c,u]=k.useState([]),[d,p]=k.useState(!1),[f,h]=k.useState(!1),[m,b]=k.useState(""),[j,g]=k.useState(!1),[x,v]=k.useState(null),[_,A]=k.useState(null),S=k.useRef(null),M=(e==null?void 0:e.skillsets)||[],E=M.find(R=>R.id===n);k.useEffect(()=>{mv().then(R=>A(R.available)).catch(()=>A(!1))},[]),k.useEffect(()=>{M.length>0&&!n&&r(M[0].id)},[M,n]),k.useEffect(()=>{!e||!n||U()},[e==null?void 0:e.id,n]);const U=k.useCallback(async()=>{if(!(!e||!n))try{const R=await uv(e.id,n);s(R),$(n,{entry_count:R.entry_count})}catch(R){console.error("Failed to load stats:",R)}},[e==null?void 0:e.id,n]),z=R=>{e&&t({...e,...R})},$=(R,w)=>{e&&t({...e,skillsets:e.skillsets.map(W=>W.id===R?{...W,...w}:W)})},q=()=>{if(!e)return;const R=H5();z({skillsets:[...M,R]}),r(R.id)},Y=R=>{e&&confirm("Delete this SkillSet and all its data?")&&(z({skillsets:M.filter(w=>w.id!==R)}),n===R&&r(M.length>1?M[0].id:null),s(null),u([]))},T=async()=>{if(!(!e||!n||!a.trim())){p(!0),v(null);try{const R=await fv(e.id,n,a.trim(),10,0);u(R.results)}catch(R){v("Search failed"),console.error(R)}finally{p(!1)}}},P=async()=>{if(!(!e||!n||!m.trim())){g(!0),v(null);try{const R=await dv(e.id,n,m.trim());b(""),await U(),alert(`Added ${R.chunks_added} chunks from ${R.source_name}`)}catch(R){v(R.message||"Failed to fetch URL")}finally{g(!1)}}},D=async R=>{var W;const w=(W=R.target.files)==null?void 0:W[0];if(!(!w||!e||!n)){v(null);try{const K=await pv(e.id,n,w);await U(),alert(`Added ${K.chunks_added} chunks from ${K.source_name}`)}catch(K){v(K.message||"Upload failed")}S.current&&(S.current.value="")}},C=async()=>{if(!(!e||!n)&&confirm("Delete all entries in this SkillSet?"))try{await hv(e.id,n),await U(),u([])}catch{v("Clear failed")}},L=R=>{const w=Math.round(R*100),W=160,K=70,y=20+(1-R)*15,N=.15+R*.25;return`linear-gradient(90deg, hsla(${W}, ${K}%, ${y}%, ${N}) 0%, transparent ${w}%)`};return e?o.jsxs("div",{className:"skillsets-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"skillset-list",children:[o.jsxs("div",{className:"skillset-list-header",children:[o.jsx("h3",{children:"SkillSets"}),o.jsx("button",{className:"btn-icon",onClick:q,title:"Add SkillSet",children:o.jsx(Qe,{size:16})})]}),M.length===0?o.jsxs("div",{className:"empty-state",style:{padding:"40px 0"},children:[o.jsx(In,{size:32}),o.jsx("span",{children:"No SkillSets"}),o.jsxs("button",{className:"btn-primary",onClick:q,children:[o.jsx(Qe,{size:14})," Create SkillSet"]})]}):M.map(R=>o.jsxs("div",{className:`skillset-item ${n===R.id?"selected":""}`,onClick:()=>r(R.id),children:[o.jsx(In,{size:16,style:{color:"var(--accent)",flexShrink:0}}),o.jsxs("div",{className:"skillset-item-info",children:[o.jsx("div",{className:"skillset-item-name",children:R.name}),o.jsxs("div",{className:"skillset-item-count",children:[R.entry_count||0," entries"]})]}),o.jsx("button",{className:"skillset-item-delete",onClick:w=>{w.stopPropagation(),Y(R.id)},children:o.jsx(Ue,{size:14})})]},R.id))]}),E?o.jsxs("div",{className:"skillset-detail",children:[o.jsxs("div",{className:"skillset-header",children:[o.jsxs("div",{className:"skillset-header-info",children:[o.jsx("input",{className:"skillset-name-input",value:E.name,onChange:R=>$(E.id,{name:R.target.value}),placeholder:"SkillSet Name"}),o.jsx("textarea",{className:"skillset-desc-input",value:E.description,onChange:R=>$(E.id,{description:R.target.value}),placeholder:"Description (optional)",rows:1}),o.jsxs("div",{className:"skillset-model",children:[o.jsx("label",{style:{fontSize:"12px",color:"var(--text-secondary)",marginRight:"8px"},children:"Embedding Model:"}),o.jsxs("select",{style:{flex:1,padding:"4px 8px",fontSize:"12px",background:"var(--bg-secondary)",border:"1px solid var(--border)",borderRadius:"4px",color:"var(--text-primary)"},value:E.embedding_model||"text-embedding-004",onChange:R=>$(E.id,{embedding_model:R.target.value}),children:[o.jsxs("optgroup",{label:"Google Gemini",children:[o.jsx("option",{value:"text-embedding-004",children:"text-embedding-004 (768d)"}),o.jsx("option",{value:"text-embedding-005",children:"text-embedding-005"})]}),o.jsxs("optgroup",{label:"OpenAI",children:[o.jsx("option",{value:"text-embedding-3-small",children:"text-embedding-3-small (1536d)"}),o.jsx("option",{value:"text-embedding-3-large",children:"text-embedding-3-large (3072d)"})]}),o.jsxs("optgroup",{label:"Cohere",children:[o.jsx("option",{value:"embed-english-v3.0",children:"embed-english-v3.0 (1024d)"}),o.jsx("option",{value:"embed-multilingual-v3.0",children:"embed-multilingual-v3.0 (1024d)"})]})]})]}),o.jsxs("div",{className:"skillset-stats",children:[o.jsxs("span",{className:"skillset-stat",children:[o.jsx("strong",{children:(i==null?void 0:i.entry_count)||0})," entries"]}),o.jsxs("span",{className:"skillset-stat",children:[o.jsx("strong",{children:Object.keys((i==null?void 0:i.sources)||{}).length})," sources"]}),_===!1&&o.jsx("span",{className:"skillset-stat",style:{color:"var(--warning)"},children:"⚠ No embeddings"})]})]}),o.jsx("button",{className:"btn-icon",onClick:U,title:"Refresh",children:o.jsx(Zt,{size:16})})]}),x&&o.jsxs("div",{className:"error-banner",children:[x,o.jsx("button",{onClick:()=>v(null),children:o.jsx(Wr,{size:14})})]}),o.jsxs("div",{className:"search-section",children:[o.jsx("div",{className:"search-input-wrapper",children:o.jsx("input",{className:"search-input",value:a,onChange:R=>l(R.target.value),onKeyDown:R=>R.key==="Enter"&&T(),placeholder:"Search this SkillSet..."})}),o.jsxs("button",{className:"btn-primary",onClick:T,disabled:d||!a.trim(),children:[o.jsx(wv,{size:14}),d?"Searching...":"Search"]})]}),o.jsxs("div",{className:"search-results",children:[c.length===0&&!d&&a&&o.jsx("div",{className:"empty-state",children:o.jsx("span",{children:"No results found"})}),c.map(R=>o.jsxs("div",{className:"search-result",style:{background:L(R.score)},children:[o.jsxs("span",{className:"search-result-score",children:[(R.score*100).toFixed(0),"%"]}),o.jsx("div",{className:"search-result-text",children:R.text}),o.jsx("div",{className:"search-result-source",children:R.source_name})]},R.id))]}),o.jsxs("div",{className:"add-sources-section",children:[o.jsxs("div",{className:"add-sources-header",onClick:()=>h(!f),children:[f?o.jsx(Nt,{size:16}):o.jsx(vt,{size:16}),o.jsx("h4",{children:"Add Sources"})]}),f&&o.jsxs("div",{className:"add-sources-content",children:[o.jsxs("div",{className:"source-row",children:[o.jsx(tp,{size:16,style:{color:"var(--text-tertiary)"}}),o.jsx("input",{className:"source-input",value:m,onChange:R=>b(R.target.value),onKeyDown:R=>R.key==="Enter"&&P(),placeholder:"Enter URL (e.g., llms.txt file)"}),o.jsxs("button",{className:"btn-primary",onClick:P,disabled:j||!m.trim(),children:[o.jsx(jj,{size:14}),j?"Loading...":"Add"]})]}),o.jsxs("div",{className:"source-row",children:[o.jsx(yj,{size:16,style:{color:"var(--text-tertiary)"}}),o.jsx("input",{ref:S,type:"file",accept:".txt,.md,.json,.csv,.html",onChange:D}),o.jsxs("button",{className:"btn-primary",onClick:()=>{var R;return(R=S.current)==null?void 0:R.click()},children:[o.jsx(yl,{size:14}),"Upload File"]}),o.jsx("span",{style:{fontSize:"12px",color:"var(--text-tertiary)"},children:".txt, .md, .json, .csv"})]}),((i==null?void 0:i.entry_count)||0)>0&&o.jsx("div",{className:"source-row",style:{marginTop:"8px"},children:o.jsxs("button",{className:"clear-button",onClick:C,children:[o.jsx(Ue,{size:12}),"Clear All Entries (",(i==null?void 0:i.entry_count)||0,")"]})})]})]})]}):M.length>0?o.jsx("div",{className:"skillset-detail",children:o.jsxs("div",{className:"empty-state",children:[o.jsx(In,{size:48}),o.jsx("span",{children:"Select a SkillSet"})]})}):null]}):null}const bn={tool_trajectory_avg_score:{name:"Tool Trajectory",description:"Did the agent call the right tools in the expected order?",requiresJudge:!1,scale:[0,1]},response_match_score:{name:"Response Match (ROUGE-1)",description:"Does the response contain expected text? (fuzzy word matching)",requiresJudge:!1,scale:[0,1]},response_evaluation_score:{name:"Response Evaluation (LLM)",description:"LLM-judged semantic match of final response",requiresJudge:!0,scale:[1,5]},final_response_match_v2:{name:"Response Quality v2 (LLM)",description:"Enhanced LLM-judged response quality check",requiresJudge:!0,scale:[0,1]},safety_v1:{name:"Safety",description:"Is the response safe and harmless? (Vertex AI)",requiresJudge:!0,scale:[0,1]},hallucinations_v1:{name:"Hallucination Detection",description:"Are all claims supported by context? No false information?",requiresJudge:!0,scale:[0,1]},rubric_based_final_response_quality_v1:{name:"Rubric: Response Quality",description:"Custom rubric-based quality assessment of responses",requiresJudge:!0,scale:[0,1]},rubric_based_tool_use_quality_v1:{name:"Rubric: Tool Use Quality",description:"Custom rubric-based assessment of tool usage",requiresJudge:!0,scale:[0,1]}},Xo=(e,t,n)=>{if(t==null)return{value:"-",comparison:""};const r=bn[e],i=(r==null?void 0:r.scale)||[0,1];if(i[0]===1&&i[1]===5){const s=n??3.5;return{value:t.toFixed(1),comparison:`${s.toFixed(1)} / ${i[1].toFixed(1)}`}}else{const s=n??.7;return{value:`${Math.round(t*100)}%`,comparison:`${Math.round(s*100)}% min`}}},J5={metrics:[{metric:"tool_trajectory_avg_score",enabled:!0,criterion:{threshold:1}},{metric:"response_match_score",enabled:!0,criterion:{threshold:.7}}],default_trajectory_match_type:"in_order",num_runs:1};function Q1(){return`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`}function K5(){const{project:e}=gt(),[t,n]=k.useState([]),[r,i]=k.useState(null),[s,a]=k.useState(null),[l,c]=k.useState(new Set),[u,d]=k.useState(new Map),[p,f]=k.useState(new Map),[h,m]=k.useState(new Set),[b,j]=k.useState(!1),[g,x]=k.useState(null),[v,_]=k.useState([]),[A,S]=k.useState(null),M=async()=>{if(e)try{const F=await Ge.get(`/projects/${e.id}/eval-history`);_(F.runs||[])}catch(F){console.warn("Failed to load eval history:",F)}},E=async(F,Q=!0)=>{if(e)try{const O=(await Ge.get(`/projects/${e.id}/eval-history/${F}`)).run;if(S(O),O!=null&&O.case_results){const ne=new Map;for(const le of O.case_results)ne.set(le.eval_case_id,le);d(ne)}if((O==null?void 0:O.eval_set_id)==="batch")c(new Set(t.map(ne=>ne.id))),i(null);else if(O!=null&&O.eval_set_id){const ne=new Map;ne.set(O.eval_set_id,O),f(ne),i(O.eval_set_id),c(le=>new Set([...le,O.eval_set_id]))}a(null),Q&&window.history.pushState({run:F},"",`?run=${F}`)}catch(te){console.warn("Failed to load history run:",te)}},U=(F,Q=!0)=>{i(F),a(null),S(null),Q&&F?window.history.pushState({set:F},"",`?set=${F}`):Q&&window.history.pushState({},"",window.location.pathname)},z=(F,Q,te=!0)=>{i(F),a(Q),S(null),te&&Q?window.history.pushState({set:F,case:Q},"",`?set=${F}&case=${Q}`):te&&F&&window.history.pushState({set:F},"",`?set=${F}`)},$=()=>{S(null),d(new Map),f(new Map),window.history.pushState({},"",window.location.pathname)},q=async F=>{if(e)try{await Ge.delete(`/projects/${e.id}/eval-history/${F}`),_(Q=>Q.filter(te=>te.id!==F)),(A==null?void 0:A.id)===F&&S(null)}catch(Q){console.warn("Failed to delete history run:",Q)}};k.useEffect(()=>{e!=null&&e.id&&(Y(),M())},[e==null?void 0:e.id]),k.useEffect(()=>{const F=()=>{m(new Set(t.map(te=>te.id)))},Q=()=>{m(new Set),M()};return window.addEventListener("eval-tests-started",F),window.addEventListener("eval-tests-completed",Q),()=>{window.removeEventListener("eval-tests-started",F),window.removeEventListener("eval-tests-completed",Q)}},[t]),k.useEffect(()=>{if(!(e!=null&&e.id)||b)return;const F=()=>{const te=new URLSearchParams(window.location.search),O=te.get("set"),ne=te.get("case"),le=te.get("run");if(le){E(le,!1);return}if(O)i(O),a(ne),S(null),c(be=>new Set([...be,O]));else{if(!r&&!s&&!A)return;i(null),a(null),S(null)}};F();const Q=()=>{F()};return window.addEventListener("popstate",Q),()=>window.removeEventListener("popstate",Q)},[e==null?void 0:e.id,b,t.length]);const Y=async()=>{var F,Q;if(e!=null&&e.id){j(!0),x(null);try{const te=await Ge.get(`/projects/${e.id}/eval-sets`);if(n(te.eval_sets||[]),((F=te.eval_sets)==null?void 0:F.length)>0){const O=new URLSearchParams(window.location.search),ne=O.get("set"),le=O.get("case"),be=ne||(le?(Q=te.eval_sets.find(ie=>ie.eval_cases.some(I=>I.id===le)))==null?void 0:Q.id:null)||te.eval_sets[0].id;c(new Set([be]))}}catch(te){x(te.message||"Failed to load eval sets")}finally{j(!1)}}},T=t.find(F=>F.id===r),P=T==null?void 0:T.eval_cases.find(F=>F.id===s),D=async()=>{if(e!=null&&e.id)try{const F=await Ge.post(`/projects/${e.id}/eval-sets`,{name:"New Eval Set",description:"",eval_config:J5});n(Q=>[...Q,F.eval_set]),i(F.eval_set.id),c(Q=>new Set([...Q,F.eval_set.id]))}catch(F){x(F.message||"Failed to create eval set")}},C=async F=>{if(e!=null&&e.id)try{const Q=await Ge.post(`/projects/${e.id}/eval-sets/${F}/cases`,{name:"New Test Case",description:"",invocations:[{id:Q1(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]}],initial_state:{},rubrics:[],enabled_metrics:[],tags:[]});n(te=>te.map(O=>O.id===F?{...O,eval_cases:[...O.eval_cases,Q.eval_case]}:O)),i(F),a(Q.eval_case.id)}catch(Q){x(Q.message||"Failed to create eval case")}},L=async(F,Q,te)=>{if(e!=null&&e.id)try{const O=await Ge.put(`/projects/${e.id}/eval-sets/${F}/cases/${Q}`,te);n(ne=>ne.map(le=>le.id===F?{...le,eval_cases:le.eval_cases.map(be=>be.id===Q?O.eval_case:be)}:le))}catch(O){x(O.message||"Failed to update eval case")}},R=async(F,Q)=>{if(e!=null&&e.id)try{await Ge.delete(`/projects/${e.id}/eval-sets/${F}/cases/${Q}`),n(te=>te.map(O=>O.id===F?{...O,eval_cases:O.eval_cases.filter(ne=>ne.id!==Q)}:O)),s===Q&&a(null)}catch(te){x(te.message||"Failed to delete eval case")}},w=async F=>{if(e!=null&&e.id)try{await Ge.delete(`/projects/${e.id}/eval-sets/${F}`),n(Q=>Q.filter(te=>te.id!==F)),r===F&&(i(null),a(null))}catch(Q){x(Q.message||"Failed to delete eval set")}},W=async F=>{if(e!=null&&e.id)try{const Q=await Ge.get(`/projects/${e.id}/eval-sets/${F}/export`),te=new Blob([JSON.stringify(Q,null,2)],{type:"application/json"}),O=URL.createObjectURL(te),ne=document.createElement("a");ne.href=O;const le=t.find(be=>be.id===F);ne.download=`${(le==null?void 0:le.name)||"eval-set"}.json`,document.body.appendChild(ne),ne.click(),document.body.removeChild(ne),URL.revokeObjectURL(O)}catch(Q){x(Q.message||"Failed to export eval set")}},K=async F=>{if(e!=null&&e.id)try{const Q=await F.text(),te=JSON.parse(Q),O=await Ge.post(`/projects/${e.id}/eval-sets/import`,te);n(ne=>[...ne,O.eval_set]),i(O.eval_set.id),c(ne=>new Set([...ne,O.eval_set.id]))}catch(Q){x(Q.message||"Failed to import eval set")}},y=k.useRef(null),N=async()=>{if(!(!(e!=null&&e.id)||t.length===0))try{const F=await Promise.all(t.map(async ne=>{try{return await Ge.get(`/projects/${e.id}/eval-sets/${ne.id}/export`)}catch{return ne}})),Q=new Blob([JSON.stringify(F,null,2)],{type:"application/json"}),te=URL.createObjectURL(Q),O=document.createElement("a");O.href=te,O.download=`${e.name||"project"}-eval-sets.json`,document.body.appendChild(O),O.click(),document.body.removeChild(O),URL.revokeObjectURL(te)}catch(F){x(F.message||"Failed to export all eval sets")}},V=async(F,Q)=>{if(e!=null&&e.id){m(te=>new Set([...te,Q]));try{const te=await Ge.post(`/projects/${e.id}/eval-sets/${F}/cases/${Q}/run`,{});d(O=>new Map(O).set(Q,te.result))}catch(te){x(te.message||"Failed to run eval case")}finally{m(te=>{const O=new Set(te);return O.delete(Q),O})}}},re=async F=>{if(!(e!=null&&e.id))return;const Q=t.find(O=>O.id===F);if(!Q)return;const te=Q.eval_cases.map(O=>O.id);m(O=>new Set([...O,F,...te]));try{const O=await Ge.post(`/projects/${e.id}/eval-sets/${F}/run`,{});f(ne=>new Map(ne).set(F,O.result));for(const ne of O.result.case_results)d(le=>new Map(le).set(ne.eval_case_id,ne));try{await Ge.post(`/projects/${e.id}/eval-history`,O.result),M()}catch(ne){console.warn("Failed to save eval run to history:",ne)}}catch(O){x(O.message||"Failed to run eval set")}finally{m(O=>{const ne=new Set(O);return ne.delete(F),te.forEach(le=>ne.delete(le)),ne})}},fe=F=>{c(Q=>{const te=new Set(Q);return te.has(F)?te.delete(F):te.add(F),te})},me=F=>{let Q=F.eval_cases.length,te=0,O=0,ne=0;for(const le of F.eval_cases){const be=u.get(le.id);be?be.passed?te++:O++:ne++}return{total:Q,passed:te,failed:O,pending:ne}},ee=F=>F==null?"-":`${Math.round(F*100)}%`;return e?o.jsxs("div",{className:"eval-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("aside",{className:"eval-sidebar",children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsx("h3",{children:"Evaluation Tests"}),o.jsxs("div",{className:"header-actions",children:[o.jsx("input",{type:"file",ref:y,accept:".json",style:{display:"none"},onChange:F=>{var te;const Q=(te=F.target.files)==null?void 0:te[0];Q&&(K(Q),F.target.value="")}}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var F;return(F=y.current)==null?void 0:F.click()},title:"Import eval set from JSON",children:o.jsx(yl,{size:14})}),t.length>0&&o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:N,title:"Download all eval sets as JSON",children:o.jsx(Ri,{size:14})}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:Y,title:"Refresh",children:o.jsx(Zt,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:D,title:"New eval set",children:[o.jsx(Qe,{size:14}),"Set"]})]})]}),o.jsxs("div",{className:"eval-tree",children:[b&&o.jsx("p",{style:{color:"var(--text-muted)",padding:"16px"},children:"Loading..."}),g&&o.jsx("div",{style:{color:"var(--error)",padding:"16px",fontSize:"13px"},children:g}),!b&&t.length===0&&o.jsxs("div",{className:"empty-state",style:{padding:"32px"},children:[o.jsx(op,{size:32}),o.jsxs("p",{children:["No evaluation sets yet.",o.jsx("br",{}),"Create one to get started."]})]}),t.map(F=>{const Q=l.has(F.id),te=me(F),O=h.has(F.id);return o.jsxs("div",{className:"tree-item",children:[o.jsxs("div",{className:`tree-set ${r===F.id&&!s?"selected":""}`,onClick:()=>U(F.id),children:[o.jsx("button",{className:"expand-btn",onClick:ne=>{ne.stopPropagation(),fe(F.id)},children:F.eval_cases.length>0?Q?o.jsx(Nt,{size:14}):o.jsx(vt,{size:14}):o.jsx("span",{style:{width:14}})}),o.jsx(yv,{size:14,style:{color:"var(--accent-secondary)"}}),o.jsx("span",{className:"set-name",children:F.name}),o.jsx("button",{className:"add-case-btn",onClick:ne=>{ne.stopPropagation(),C(F.id)},title:"Add test case",style:{padding:"2px 4px",marginLeft:4,background:"transparent",border:"none",cursor:"pointer",opacity:.6,display:"flex",alignItems:"center"},children:o.jsx(Qe,{size:12})}),te.total>0&&o.jsxs("span",{className:"set-stats",children:[te.passed>0&&o.jsx("span",{className:"stat-passed",children:te.passed}),te.failed>0&&o.jsx("span",{className:"stat-failed",children:te.failed}),te.pending>0&&o.jsx("span",{className:"stat-pending",children:te.pending})]}),o.jsx("button",{className:"run-btn",onClick:ne=>{ne.stopPropagation(),re(F.id)},title:"Run all tests in this set",disabled:O,children:O?o.jsx(Ei,{size:12,className:"spinning"}):o.jsx(hr,{size:12})})]}),Q&&o.jsx("div",{className:"tree-children",style:{paddingLeft:16},children:F.eval_cases.map(ne=>{var ie;const le=u.get(ne.id),be=h.has(ne.id);return o.jsxs("div",{className:`tree-case ${s===ne.id?"selected":""}`,onClick:()=>z(F.id,ne.id),children:[be?o.jsx(Ei,{size:14,className:"spinning",style:{color:"var(--warning)"}}):le?le.passed?o.jsx(Bn,{size:14,style:{color:"var(--success)"}}):o.jsx(mr,{size:14,style:{color:"var(--error)"}}):o.jsx(Da,{size:14,style:{color:"var(--text-muted)"}}),o.jsx("span",{className:"case-name",children:ne.name}),le&&le.metric_results.length>0&&o.jsx("span",{style:{fontSize:11,color:le.passed?"var(--success)":"var(--error)"},children:ee((ie=le.metric_results[0])==null?void 0:ie.score)}),o.jsx("button",{className:"run-btn",onClick:I=>{I.stopPropagation(),V(F.id,ne.id)},disabled:be,children:o.jsx(hr,{size:12})})]},ne.id)})})]},F.id)})]}),o.jsxs("div",{className:"history-section",children:[o.jsx("div",{className:"history-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 12px",borderTop:"1px solid var(--border-color)",background:"var(--bg-secondary)"},children:o.jsxs("span",{style:{fontWeight:500,fontSize:13},children:["Previous Runs (",v.length,")"]})}),o.jsx("div",{className:"history-list",style:{maxHeight:200,overflowY:"auto"},children:v.length===0?o.jsx("div",{style:{padding:"12px",color:"var(--text-secondary)",fontSize:12,textAlign:"center"},children:"No previous runs"}):[...v].sort((F,Q)=>(Q.started_at||0)-(F.started_at||0)).map(F=>{const Q=F.passed_cases===F.total_cases;return o.jsx("div",{className:`history-item ${(A==null?void 0:A.id)===F.id?"selected":""}`,onClick:()=>E(F.id),style:{padding:"8px 12px",borderBottom:"1px solid var(--border-color)",cursor:"pointer",background:(A==null?void 0:A.id)===F.id?"var(--bg-tertiary)":"transparent",fontSize:12},children:o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[Q?o.jsx(Bn,{size:14,style:{color:"var(--success)",flexShrink:0}}):o.jsx(mr,{size:14,style:{color:"var(--error)",flexShrink:0}}),o.jsxs("div",{children:[o.jsx("div",{style:{fontWeight:500},children:F.eval_set_name||"Unnamed"}),o.jsx("div",{style:{color:"var(--text-secondary)",fontSize:11},children:new Date(F.started_at*1e3).toLocaleString()})]})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsxs("span",{style:{color:Q?"var(--success)":"var(--error)",fontWeight:500,fontSize:11},children:[F.passed_cases,"/",F.total_cases]}),o.jsx("button",{className:"btn btn-icon",onClick:te=>{te.stopPropagation(),q(F.id)},title:"Delete run",style:{padding:2},children:o.jsx(Ue,{size:12})})]})]})},F.id)})})]})]}),o.jsx("div",{className:"eval-editor",children:A?o.jsx(Y5,{run:A,onClose:$}):P?o.jsx(Q5,{evalCase:P,evalSetId:r,projectId:e.id,result:u.get(P.id),isRunning:h.has(P.id),onUpdate:F=>L(r,P.id,F),onDelete:()=>R(r,P.id),onRun:()=>V(r,P.id),onClearResult:()=>d(F=>{const Q=new Map(F);return Q.delete(P.id),Q})}):T?o.jsx(X5,{evalSet:T,projectId:e.id,result:p.get(T.id),isRunning:h.has(T.id),caseResults:u,onUpdate:async F=>{try{const Q=await Ge.put(`/projects/${e.id}/eval-sets/${T.id}`,F);n(te=>te.map(O=>O.id===T.id?Q.eval_set:O))}catch(Q){x(Q.message)}},onDelete:()=>w(T.id),onRun:()=>re(T.id),onExport:()=>W(T.id)}):o.jsx("div",{className:"editor-content",children:o.jsxs("div",{className:"empty-state",children:[o.jsx(Da,{size:48}),o.jsxs("p",{children:["Select a test case to edit",o.jsx("br",{}),"or create a new one"]})]})})})]}):null}function G5({value:e,onChange:t}){var a,l;const{project:n}=gt(),r=((a=n==null?void 0:n.app)==null?void 0:a.models)||[],i=(l=n==null?void 0:n.app)==null?void 0:l.default_model_id,s=r.find(c=>c.id===i);return o.jsxs("select",{value:e,onChange:c=>t(c.target.value),style:{width:"100%",maxWidth:400},children:[o.jsx("option",{value:"",children:s?`App Default (${s.model_name})`:"App Default"}),r.map(c=>o.jsx("option",{value:c.model_name,children:c.model_name},c.id)),o.jsx("option",{value:"gemini-2.0-flash",children:"gemini-2.0-flash"}),o.jsx("option",{value:"gemini-2.5-flash",children:"gemini-2.5-flash"}),o.jsx("option",{value:"gemini-2.5-pro",children:"gemini-2.5-pro"})]})}function Y5({run:e,onClose:t}){var h;const{project:n}=gt(),[r,i]=k.useState(!0),[s,a]=k.useState(new Set),l=e.case_results||[],c=l.filter(m=>m.passed).length,u=l.filter(m=>!m.passed).length,d=r?l.filter(m=>!m.passed):l,p=m=>{a(b=>{const j=new Set(b);return j.has(m)?j.delete(m):j.add(m),j})},f=m=>{m&&n&&(window.location.href=`/project/${n.id}/run?session=${m}`)};return o.jsxs("div",{className:"test-result-viewer",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"result-header",children:[o.jsx("h2",{children:e.eval_set_name||"Test Run Results"}),o.jsx("div",{style:{display:"flex",gap:8},children:o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{if(n){const m=`${window.location.origin}/project/${n.id}/evaluate?run=${e.id}`;navigator.clipboard.writeText(m)}},title:"Copy link to this run",children:o.jsx(rp,{size:14})})})]}),o.jsxs("div",{className:"result-summary",children:[o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Status"}),o.jsx("span",{className:`value ${c===l.length?"passed":"failed"}`,children:c===l.length?"PASSED":"FAILED"})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Passed"}),o.jsx("span",{className:"value passed",children:c})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Failed"}),o.jsx("span",{className:"value failed",children:u})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Total Cases"}),o.jsx("span",{className:"value",children:l.length})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Duration"}),o.jsx("span",{className:"value",children:e.duration_ms?`${(e.duration_ms/1e3).toFixed(1)}s`:"-"})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Tokens"}),o.jsx("span",{className:"value",children:((h=e.total_tokens)==null?void 0:h.toLocaleString())||"-"})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Run Time"}),o.jsx("span",{className:"value",style:{fontSize:13},children:e.started_at?new Date(e.started_at*1e3).toLocaleString():"-"})]})]}),o.jsxs("div",{style:{padding:"8px 20px",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",gap:10,background:"var(--bg-secondary)"},children:[o.jsxs("label",{className:"toggle-switch",style:{transform:"scale(0.85)"},children:[o.jsx("input",{type:"checkbox",checked:r,onChange:m=>i(m.target.checked)}),o.jsx("span",{className:"toggle-slider"})]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:"Hide passing results"})]}),o.jsxs("div",{className:"result-cases",children:[d.map((m,b)=>{var $,q,Y,T,P,D;const j=m.case_id||`case-${b}`,g=s.has(j),x=(($=m.metric_results)==null?void 0:$.filter(C=>!C.passed||C.error))||[],v=((q=m.metric_results)==null?void 0:q.filter(C=>C.passed&&!C.error))||[],_=((Y=m.rubric_results)==null?void 0:Y.filter(C=>!C.passed||C.error))||[],A=((T=m.rubric_results)==null?void 0:T.filter(C=>C.passed&&!C.error))||[],S=g?m.metric_results:x,M=g?m.rubric_results:_,E=g?m.invocation_results:(P=m.invocation_results)==null?void 0:P.filter(C=>{var L;return((L=C.metric_results)==null?void 0:L.some(R=>!R.passed))||C.error}),U=v.length+A.length,z=x.length+_.length;return o.jsxs("div",{className:"result-case",children:[o.jsxs("div",{className:"result-case-header",onClick:()=>p(j),style:{cursor:"pointer"},children:[o.jsxs("div",{className:"result-case-name",children:[o.jsx("span",{style:{marginRight:6,fontSize:12,color:"var(--text-muted)"},children:g?"▼":"▶"}),m.passed?o.jsx(Bn,{size:16,style:{color:"var(--success)"}}):o.jsx(mr,{size:16,style:{color:"var(--error)"}}),m.eval_set_name&&(e==null?void 0:e.eval_set_id)==="batch"&&o.jsx("span",{style:{fontSize:10,color:"var(--text-muted)",background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4,marginRight:6},children:m.eval_set_name}),m.case_name||`Case ${b+1}`,o.jsxs("span",{style:{marginLeft:10,fontSize:11,color:"var(--text-muted)",fontWeight:400},children:[(m.num_runs||1)>1&&o.jsxs("span",{style:{marginRight:8,padding:"2px 6px",borderRadius:4,background:(m.pass_rate||0)>=.5?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:(m.pass_rate||0)>=.5?"var(--success)":"var(--error)",fontWeight:500},children:[m.runs_passed,"/",m.runs_completed," runs (",((m.pass_rate||0)*100).toFixed(0),"%)"]}),z>0&&o.jsxs("span",{style:{color:"var(--error)"},children:[z," failed"]}),z>0&&U>0&&" · ",U>0&&o.jsxs("span",{style:{color:"var(--success)"},children:[U," passed"]})]})]}),o.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[m.session_id&&o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:C=>{C.stopPropagation(),f(m.session_id)},title:"View session in Run panel",children:[o.jsx(gv,{size:12})," View Session"]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:m.duration_ms?`${(m.duration_ms/1e3).toFixed(2)}s`:""})]})]}),o.jsxs("div",{className:"result-case-details",children:[(S==null?void 0:S.length)>0&&o.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:8},children:[S.map((C,L)=>{const R=Xo(C.metric,C.score,C.threshold);return o.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:C.error?"rgba(255, 193, 7, 0.1)":C.passed?"rgba(var(--success-rgb), 0.05)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${C.error?"var(--warning)":C.passed?"var(--border-color)":"var(--error)"}`,display:"flex",flexDirection:"column",alignItems:"center",minWidth:80},children:[o.jsx("span",{style:{fontSize:10,color:"var(--text-secondary)",textAlign:"center",marginBottom:2},children:C.metric.replace(/_/g," ").replace("v1","").replace("v2","").trim()}),C.error?o.jsx("span",{style:{fontSize:10,color:"var(--warning)"},children:"Error"}):o.jsxs(o.Fragment,{children:[o.jsx("span",{style:{fontSize:14,fontWeight:600,color:C.passed?"var(--success)":"var(--error)"},children:R.value}),o.jsx("span",{style:{fontSize:9,color:"var(--text-muted)"},children:R.comparison})]})]},L)}),!g&&v.length>0&&o.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"var(--bg-tertiary)",border:"1px dashed var(--border-color)",display:"flex",alignItems:"center",fontSize:11,color:"var(--text-muted)"},children:["+",v.length," passed"]})]}),S==null?void 0:S.filter(C=>!C.passed&&C.rationale).map((C,L)=>o.jsxs("div",{style:{marginTop:8,padding:"8px 12px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:12},children:[o.jsxs("div",{style:{fontWeight:500,marginBottom:4,color:"var(--error)",fontSize:11},children:[C.metric.replace(/_/g," ")," - Why it failed:"]}),o.jsx("div",{style:{whiteSpace:"pre-wrap",color:"var(--text-secondary)",lineHeight:1.4},children:C.rationale})]},`rationale-${L}`)),(M==null?void 0:M.length)>0&&o.jsxs("div",{style:{marginTop:8},children:[o.jsx("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:4},children:"Custom Rubrics"}),M.map((C,L)=>o.jsxs("div",{style:{marginBottom:C.rationale&&!C.passed?8:4},children:[o.jsxs("div",{className:"metric-row",children:[o.jsx("span",{className:"metric-name",style:{flex:1},children:C.rubric}),o.jsx("span",{className:`metric-value ${C.passed?"passed":"failed"}`,children:C.passed?"✓ Pass":"✗ Fail"})]}),!C.passed&&C.rationale&&o.jsxs("div",{style:{marginTop:4,marginLeft:8,padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:11,color:"var(--text-secondary)"},children:[o.jsx("strong",{style:{color:"var(--error)"},children:"Why:"})," ",C.rationale]}),C.error&&o.jsxs("div",{style:{marginTop:4,marginLeft:8,fontSize:11,color:"var(--warning)"},children:["Error: ",C.error]})]},L)),!g&&A.length>0&&o.jsxs("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:["+",A.length," passed rubric",A.length>1?"s":""]})]}),g&&(m.num_runs||1)>1&&m.run_results&&m.run_results.length>0&&o.jsxs("div",{style:{marginTop:12,marginBottom:12},children:[o.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:8},children:["Individual Run Results (",m.runs_passed,"/",m.runs_completed," passed)"]}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:m.run_results.map((C,L)=>o.jsxs("div",{style:{padding:"4px 10px",borderRadius:"var(--radius-sm)",background:C.error?"rgba(255, 193, 7, 0.15)":C.passed?"rgba(var(--success-rgb), 0.1)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${C.error?"var(--warning)":C.passed?"var(--success)":"var(--error)"}`,fontSize:11,display:"flex",alignItems:"center",gap:6},title:C.error||`Run ${C.run_number}: ${C.passed?"Passed":"Failed"} (${(C.duration_ms/1e3).toFixed(2)}s)`,children:[C.error?o.jsx(Xd,{size:12,style:{color:"var(--warning)"}}):C.passed?o.jsx(Bn,{size:12,style:{color:"var(--success)"}}):o.jsx(mr,{size:12,style:{color:"var(--error)"}}),o.jsxs("span",{style:{color:C.error?"var(--warning)":C.passed?"var(--success)":"var(--error)"},children:["Run ",C.run_number]}),o.jsxs("span",{style:{color:"var(--text-muted)",fontSize:10},children:[(C.duration_ms/1e3).toFixed(1),"s"]})]},L))})]}),(E==null?void 0:E.length)>0&&o.jsxs("div",{className:"invocation-summary",children:[o.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:8},children:["Invocations (",E.length,!g&&((D=m.invocation_results)==null?void 0:D.length)>E.length?` of ${m.invocation_results.length}`:"",")"]}),E.map((C,L)=>o.jsxs("div",{className:"invocation-item",children:[o.jsxs("div",{className:"invocation-query",children:["Turn ",C.invocation_id||L+1,": ",C.user_message||"(no message)"]}),C.actual_response&&o.jsxs("div",{className:"invocation-response",children:["Response: ",C.actual_response.substring(0,200),C.actual_response.length>200?"...":""]})]},L))]}),m.error&&o.jsx("div",{style:{marginTop:12,padding:12,background:"rgba(255, 107, 107, 0.1)",borderRadius:"var(--radius-sm)",color:"var(--error)",fontSize:12,whiteSpace:"pre-wrap"},children:m.error})]})]},j)}),l.length===0&&o.jsx("div",{style:{textAlign:"center",padding:32,color:"var(--text-secondary)"},children:"No test cases in this run"})]})]})}function Q5({evalCase:e,evalSetId:t,projectId:n,result:r,isRunning:i,onUpdate:s,onDelete:a,onRun:l,onClearResult:c}){var A,S,M;const{project:u}=gt(),[d,p]=k.useState(e),[f,h]=k.useState("assertions");k.useEffect(()=>{p(e)},[e.id]);const m=k.useCallback(E=>{p(U=>({...U,...E})),s(E)},[s]),b=()=>{const E={id:Q1(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]};m({invocations:[...d.invocations,E]})},j=(E,U)=>{const z=[...d.invocations];z[E]={...z[E],...U},m({invocations:z})},g=E=>{m({invocations:d.invocations.filter((U,z)=>z!==E)})},x=E=>{const U=[...d.invocations];U[E]={...U[E],expected_tool_calls:[...U[E].expected_tool_calls,{name:"",args:{},args_match_mode:"subset"}]},m({invocations:U})},v=(E,U,z)=>{const $=[...d.invocations],q=[...$[E].expected_tool_calls];q[U]={...q[U],...z},$[E]={...$[E],expected_tool_calls:q},m({invocations:$})},_=(E,U)=>{const z=[...d.invocations];z[E]={...z[E],expected_tool_calls:z[E].expected_tool_calls.filter(($,q)=>q!==U)},m({invocations:z})};return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(Da,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("input",{type:"text",value:d.name,onChange:E=>m({name:E.target.value}),placeholder:"Test case name"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const E=`${window.location.origin}/project/${n}/evaluate?set=${t}&case=${e.id}`;navigator.clipboard.writeText(E)},title:"Copy link to this test case",children:o.jsx(rp,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:i,children:[i?o.jsx(Ei,{size:14,className:"spinning"}):o.jsx(hr,{size:14}),"Run"]}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:o.jsx(Ue,{size:14})})]}),o.jsxs("div",{className:"tabs",children:[o.jsxs("div",{className:`tab ${f==="assertions"?"active":""}`,onClick:()=>h("assertions"),children:[o.jsx(Fa,{size:14,style:{marginRight:6}}),"Assertions (",d.invocations.length,")"]}),o.jsxs("div",{className:`tab ${f==="rubrics"?"active":""}`,onClick:()=>h("rubrics"),children:[o.jsx(op,{size:14,style:{marginRight:6}}),"LLM Judges"]}),o.jsxs("div",{className:`tab ${f==="docs"?"active":""}`,onClick:()=>h("docs"),children:[o.jsx(Ni,{size:14,style:{marginRight:6}}),"Docs"]}),o.jsxs("div",{className:`tab ${f==="json"?"active":""}`,onClick:()=>h("json"),children:[o.jsx(_n,{size:14,style:{marginRight:6}}),"JSON"]})]}),o.jsxs("div",{className:"editor-content",children:[f==="assertions"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:{display:"flex",gap:12,marginBottom:12},children:[o.jsxs("div",{style:{flex:1},children:[o.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"target_agent"}),o.jsxs("select",{value:d.target_agent||"",onChange:E=>m({target_agent:E.target.value||void 0}),style:{width:"100%"},children:[o.jsx("option",{value:"",children:"root_agent"}),(A=u==null?void 0:u.agents)==null?void 0:A.map(E=>o.jsx("option",{value:E.name,children:E.name},E.name))]})]}),o.jsxs("div",{style:{flex:1},children:[o.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"tags"}),o.jsx("input",{type:"text",value:d.tags.join(", "),onChange:E=>m({tags:E.target.value.split(",").map(U=>U.trim()).filter(Boolean)}),placeholder:"smoke, regression",style:{width:"100%"}})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("textarea",{value:d.description,onChange:E=>m({description:E.target.value}),placeholder:"What does this test verify?",style:{minHeight:40}})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:["session_input ",o.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(initial state)"})]}),o.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:o.jsx(en,{height:"100%",defaultLanguage:"json",value:(()=>{var U;if((!d.initial_state||Object.keys(d.initial_state).length===0)&&((U=u==null?void 0:u.app)!=null&&U.state_keys)&&u.app.state_keys.length>0){const z={};return u.app.state_keys.forEach($=>{$.default_value!==void 0?z[$.name]=$.default_value:z[$.name]=$.type==="string"?"":$.type==="number"?0:$.type==="boolean"?!1:$.type==="array"?[]:{}}),JSON.stringify(z,null,2)}return JSON.stringify(d.initial_state,null,2)})(),onChange:E=>{try{E&&m({initial_state:JSON.parse(E)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(Fa,{size:14}),"Conversation Turns"]}),d.invocations.map((E,U)=>o.jsxs("div",{className:"invocation-card",children:[o.jsxs("div",{className:"invocation-number",children:[o.jsx("span",{children:U+1}),d.invocations.length>1&&o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>g(U),style:{padding:4},children:o.jsx(Ue,{size:10})})]}),o.jsxs("div",{className:"invocation-content",children:[o.jsxs("div",{className:"invocation-row",children:[o.jsxs("div",{className:"form-section",children:[o.jsx("label",{children:"User Query"}),o.jsx("textarea",{value:E.user_message,onChange:z=>j(U,{user_message:z.target.value}),placeholder:"The message to send to the agent..."})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("label",{children:["Expected Response ",o.jsx("span",{style:{color:"var(--text-muted)",fontWeight:400},children:"(ROUGE-1)"})]}),o.jsx("textarea",{value:E.expected_response||"",onChange:z=>j(U,{expected_response:z.target.value||void 0}),placeholder:"Expected text (partial match)..."})]})]}),E.expected_tool_calls.map((z,$)=>o.jsxs("div",{className:"tool-call-compact",children:[o.jsx("input",{type:"text",value:z.name,onChange:q=>v(U,$,{name:q.target.value}),placeholder:"tool_name",className:"tool-name-input"}),o.jsxs("div",{className:"pillbox-toggle",children:[o.jsx("button",{className:`pill ${z.args_match_mode==="subset"?"active":""}`,onClick:()=>v(U,$,{args_match_mode:"subset"}),children:"Partial"}),o.jsx("button",{className:`pill ${z.args_match_mode==="exact"?"active":""}`,onClick:()=>v(U,$,{args_match_mode:"exact"}),children:"Exact"})]}),o.jsx("div",{className:"tool-args-editor",children:o.jsx(en,{height:"22px",defaultLanguage:"json",value:JSON.stringify(z.args||{}),onChange:q=>{try{q&&v(U,$,{args:JSON.parse(q)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,wordWrap:"off",scrollbar:{vertical:"hidden",horizontal:"hidden"},overviewRulerLanes:0,hideCursorInOverviewRuler:!0,overviewRulerBorder:!1,renderLineHighlight:"none",fontSize:11,padding:{top:3,bottom:3},automaticLayout:!0}})}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>_(U,$),style:{padding:"4px 6px"},children:o.jsx(Ue,{size:10})})]},$)),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>x(U),style:{marginTop:4},children:[o.jsx(Qe,{size:12})," Assert Tool Call"]})]})]},E.id)),o.jsxs("button",{className:"btn btn-secondary",onClick:b,children:[o.jsx(Qe,{size:14})," Add Turn"]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(Bn,{size:14,style:{marginRight:6}}),"final_session_state ",o.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(optional)"})]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Assert that session state contains these key-value pairs after all turns complete."}),o.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:o.jsx(en,{height:"100%",defaultLanguage:"json",value:d.expected_final_state?JSON.stringify(d.expected_final_state,null,2):"{}",onChange:E=>{if(!E||E==="{}")m({expected_final_state:void 0});else try{m({expected_final_state:JSON.parse(E)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]})]}),f==="rubrics"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"form-section",style:{marginBottom:16},children:[{metric:"safety_v1",label:"safety_v1",default:.8,max:1},{metric:"hallucinations_v1",label:"hallucinations_v1",default:.8,max:1},{metric:"response_evaluation_score",label:"response_evaluation_score",default:3.5,max:5},{metric:"final_response_match_v2",label:"final_response_match_v2",default:.7,max:1}].map(({metric:E,label:U,default:z,max:$})=>{const q=(d.enabled_metrics||[]).find(T=>T.metric===E),Y=(q==null?void 0:q.threshold)??z;return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:!!q,onChange:T=>{const P=[...d.enabled_metrics||[]];if(T.target.checked)P.push({metric:E,threshold:z});else{const D=P.findIndex(C=>C.metric===E);D!==-1&&P.splice(D,1)}m({enabled_metrics:P})}}),o.jsx("span",{className:"toggle-slider"})]}),o.jsx("span",{style:{fontSize:12,opacity:q?1:.5,minWidth:100},children:U}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:q?1:.4},children:"≥"}),o.jsx("input",{type:"number",min:$===5?1:0,max:$,step:.1,value:Y,disabled:!q,onChange:T=>{const P=[...d.enabled_metrics||[]],D=P.findIndex(C=>C.metric===E);D!==-1&&(P[D]={...P[D],threshold:parseFloat(T.target.value)||0},m({enabled_metrics:P}))},style:{width:60,textAlign:"center",opacity:q?1:.3,padding:"2px 4px",fontSize:11}})]},E)})}),o.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--border-color)",margin:"16px 0"}}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Custom Rubrics"}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Natural language criteria evaluated by an LLM judge. Returns pass/fail per rubric."}),d.rubrics.map((E,U)=>o.jsxs("div",{className:"tool-call-row",style:{marginBottom:8},children:[o.jsx("input",{type:"text",value:E.rubric,onChange:z=>{const $=[...d.rubrics];$[U]={rubric:z.target.value},m({rubrics:$})},placeholder:"e.g., The response mentions the return policy",style:{flex:1}}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>m({rubrics:d.rubrics.filter((z,$)=>$!==U)}),children:o.jsx(Ue,{size:12})})]},U)),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>m({rubrics:[...d.rubrics,{rubric:""}]}),children:[o.jsx(Qe,{size:12})," Add Rubric"]})]})]}),f==="docs"&&o.jsxs("div",{style:{fontSize:13,lineHeight:1.6,color:"var(--text-secondary)",overflowY:"auto",maxHeight:"100%"},children:[o.jsx("h3",{style:{marginBottom:16,color:"var(--text-primary)"},children:"Evaluation Test Case Guide"}),o.jsxs("section",{style:{marginBottom:24,padding:12,background:"rgba(var(--accent-primary-rgb), 0.1)",borderRadius:"var(--radius-md)",border:"1px solid var(--accent-primary)"},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Quick Overview"}),o.jsxs("p",{children:["Each test case simulates a ",o.jsx("strong",{children:"multi-turn conversation"})," with an agent. For each turn (invocation), you provide a user message and define what you expect the agent to do."]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Invocations"})," = conversation turns (user messages)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Expected Response"})," = the agent's ",o.jsx("em",{children:"final text reply"})," for that turn"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Expected Tool Calls"})," = tools the agent should invoke during that turn"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Session State"})," = test the ",o.jsx("em",{children:"final state"})," after ALL turns complete"]})]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:'📝 What is "Expected Response"?'}),o.jsxs("p",{children:["The ",o.jsx("strong",{children:"Expected Response"})," is matched against the agent's ",o.jsx("strong",{children:"final response"})," for that specific turn — NOT every message."]}),o.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[o.jsx("p",{style:{marginBottom:8},children:o.jsx("strong",{children:"During one turn, an agent may:"})}),o.jsxs("ul",{style:{marginLeft:20,marginBottom:12},children:[o.jsx("li",{children:"Send intermediate thinking/reasoning messages"}),o.jsx("li",{children:"Call multiple tools"}),o.jsx("li",{children:"Transfer to sub-agents (who may respond)"}),o.jsxs("li",{children:["Finally send a ",o.jsx("em",{children:"concluding response"})]})]}),o.jsxs("p",{children:["Only the ",o.jsx("strong",{children:"last text response"})," from the agent for that turn is compared against your Expected Response."]})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Tip: If you need to verify intermediate steps, use Tool Trajectory matching or custom Rubrics."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🔄 Response Matching (ROUGE-1)"}),o.jsxs("p",{children:["The ",o.jsx("code",{children:"response_match_score"})," uses ",o.jsx("strong",{children:"ROUGE-1 F1 scoring"})," — fuzzy word-level matching:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:"Tokenizes both expected and actual responses into words"}),o.jsx("li",{children:"Calculates word overlap (not exact string match)"}),o.jsx("li",{children:"Returns a score from 0.0 to 1.0"})]}),o.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[o.jsx("p",{children:o.jsx("strong",{children:"Example:"})}),o.jsxs("p",{children:["Expected: ",o.jsx("code",{children:'"The weather in Paris is sunny today"'})]}),o.jsxs("p",{children:["Actual: ",o.jsx("code",{children:'"Today in Paris, expect sunny weather"'})]}),o.jsx("p",{style:{marginTop:8,color:"var(--success)"},children:"✓ High ROUGE-1 score (same words, different order)"})]}),o.jsxs("p",{style:{marginTop:8},children:["A threshold of ",o.jsx("strong",{children:"0.7"})," means 70% word overlap is required to pass."]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🛠️ Tool Trajectory Matching"}),o.jsxs("p",{children:["The ",o.jsx("code",{children:"tool_trajectory_avg_score"})," verifies the agent called expected tools. Match types:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Exact"})," — Same tools in same order, no extras allowed"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"In Order"})," — Expected tools appear in order, extras allowed between"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Any Order"})," — All expected tools present, any order, extras allowed"]})]}),o.jsx("p",{style:{marginTop:8},children:"For each tool, you can match by:"}),o.jsxs("ul",{style:{marginLeft:20,marginTop:4},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Name Only"})," — Just check the tool was called"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Exact Args"})," — Arguments must match exactly (provide JSON)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Args Subset"})," — Your expected args must be present in actual args"]})]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💾 Session State Testing"}),o.jsxs("p",{children:[o.jsx("strong",{children:"Initial State"})," (Settings tab) — Pre-populate session state before running the test:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:"Set user preferences or context"}),o.jsx("li",{children:"Simulate a specific scenario"}),o.jsx("li",{children:"Test state-dependent behavior"})]}),o.jsxs("p",{style:{marginTop:12},children:[o.jsx("strong",{children:"Expected Final State"})," — Verified at the ",o.jsx("em",{children:"very end"})," of the test case, ",o.jsx("strong",{children:"after ALL invocations complete"}),"."]}),o.jsx("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8,borderLeft:"3px solid var(--warning)"},children:o.jsxs("p",{style:{margin:0},children:[o.jsx("strong",{children:"Important:"})," State is tested once after the entire conversation, NOT after each turn. To test state changes per-turn, use separate test cases."]})})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Target Agent (Settings tab)"}),o.jsxs("p",{children:["By default, tests run against the ",o.jsx("strong",{children:"root_agent"})," of your App. You can select a specific sub-agent to test in isolation:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"root_agent"})," — Test the full agent hierarchy (default)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Specific agent"})," — Unit test individual agents"]})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Useful for testing sub-agents independently before integrating into the full system."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📋 Custom Rubrics"}),o.jsx("p",{children:"Rubrics are custom yes/no criteria evaluated by an LLM judge. Examples:"}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:'"Does the response mention the product price?"'}),o.jsx("li",{children:'"Is the tone professional and helpful?"'}),o.jsx("li",{children:'"Does the response avoid mentioning competitors?"'})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Note: Rubric evaluation requires LLM-judged metrics to be enabled in the Eval Set."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📊 Available Metrics"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Metric"}),o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Type"}),o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Description"})]})}),o.jsx("tbody",{children:Object.keys(bn).map(E=>o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("td",{style:{padding:"8px 4px",fontFamily:"var(--font-mono)",fontSize:11},children:E}),o.jsx("td",{style:{padding:"8px 4px"},children:bn[E].requiresJudge?o.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--accent-primary)",color:"white",borderRadius:4},children:"LLM Judge"}):o.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--bg-tertiary)",borderRadius:4},children:"Built-in"})}),o.jsx("td",{style:{padding:"8px 4px",color:"var(--text-muted)"},children:bn[E].description})]},E))})]})]}),o.jsxs("section",{children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💡 Tips"}),o.jsxs("ul",{style:{marginLeft:20},children:[o.jsx("li",{children:"Start with simple single-turn tests, then add complexity"}),o.jsx("li",{children:'Use "In Order" matching for most tool trajectory tests'}),o.jsx("li",{children:"Lower ROUGE thresholds (0.5-0.6) for creative/varied responses"}),o.jsx("li",{children:"Higher thresholds (0.8-0.9) for factual/precise responses"}),o.jsx("li",{children:"Use tags to organize tests by feature or priority"}),o.jsx("li",{children:"Test sub-agents individually using Target Agent selector"})]})]})]}),f==="json"&&o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[o.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:o.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this test case. You can use this with ",o.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval"}),"."]})}),o.jsx("div",{style:{flex:1,minHeight:300,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:o.jsx(en,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify({name:d.name,description:d.description||void 0,tags:(S=d.tags)!=null&&S.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(E=>{var U;return{user_message:E.user_message,expected_response:E.expected_response||void 0,expected_tool_calls:(U=E.expected_tool_calls)!=null&&U.length?E.expected_tool_calls.map(z=>({tool_name:z.tool_name,args:z.match_type!=="name_only"&&Object.keys(z.args||{}).length?z.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(M=d.rubrics)!=null&&M.length?d.rubrics.map(E=>E.rubric):void 0},null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),o.jsx("div",{style:{display:"flex",gap:8},children:o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var U,z;const E=JSON.stringify({name:d.name,description:d.description||void 0,tags:(U=d.tags)!=null&&U.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map($=>{var q;return{user_message:$.user_message,expected_response:$.expected_response||void 0,expected_tool_calls:(q=$.expected_tool_calls)!=null&&q.length?$.expected_tool_calls.map(Y=>({tool_name:Y.tool_name,args:Y.match_type!=="name_only"&&Object.keys(Y.args||{}).length?Y.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(z=d.rubrics)!=null&&z.length?d.rubrics.map($=>$.rubric):void 0},null,2);navigator.clipboard.writeText(E)},children:[o.jsx(ss,{size:14})," Copy JSON"]})})]})]}),r&&o.jsxs("div",{className:"result-panel",children:[o.jsxs("div",{className:`result-header ${r.passed?"passed":"failed"}`,children:[r.passed?o.jsxs(o.Fragment,{children:[o.jsx(Bn,{size:18})," ",o.jsx("strong",{children:"Passed"})]}):o.jsxs(o.Fragment,{children:[o.jsx(mr,{size:18})," ",o.jsx("strong",{children:"Failed"})]}),o.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:12},children:[r.total_tokens?o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},title:"Total tokens used",children:[r.total_tokens.toLocaleString()," tokens"]}):null,o.jsxs("span",{style:{color:"var(--text-muted)",fontSize:12},children:[r.duration_ms.toFixed(0),"ms"]}),r.session_id&&o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{window.location.href=`/project/${u==null?void 0:u.id}/run?session=${r.session_id}`},title:"View this session in the Run panel",style:{fontSize:11},children:[o.jsx(gv,{size:12}),"View Session"]}),c&&o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Close test results",style:{fontSize:11,padding:"4px 8px"},children:"✕"})]})]}),o.jsx("div",{className:"result-scores",children:r.metric_results.map((E,U)=>{var $;const z=Xo(E.metric,E.score,E.threshold);return o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:`score-value ${E.passed?"passed":"failed"}`,children:z.value}),o.jsx("div",{className:"score-label",children:(($=bn[E.metric])==null?void 0:$.name)||E.metric}),o.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",marginTop:2},children:z.comparison}),E.error&&o.jsx("div",{style:{fontSize:10,color:"var(--error)",marginTop:4},children:E.error})]},U)})}),r.rubric_results&&r.rubric_results.length>0&&o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Custom Rubrics"}),o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:r.rubric_results.map((E,U)=>o.jsxs("div",{style:{padding:"8px 12px",borderRadius:"var(--radius-sm)",background:E.passed?"rgba(var(--success-rgb), 0.1)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${E.passed?"var(--success)":"var(--error)"}`,display:"flex",alignItems:"center",gap:10},children:[o.jsx("span",{style:{fontSize:16,color:E.passed?"var(--success)":"var(--error)",fontWeight:"bold"},children:E.passed?"✓":"✗"}),o.jsxs("div",{style:{flex:1},children:[o.jsx("div",{style:{fontSize:12,color:"var(--text-primary)"},children:E.rubric}),E.error&&o.jsxs("div",{style:{fontSize:10,color:"var(--error)",marginTop:2},children:["Error: ",E.error]})]})]},U))})]}),r.invocation_results.map((E,U)=>o.jsxs("div",{className:"result-details",children:[o.jsxs("h5",{children:["Turn ",U+1,": ",E.user_message.length>50?E.user_message.slice(0,50)+"…":E.user_message]}),E.metric_results.length>0&&o.jsx("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:E.metric_results.map((z,$)=>{var Y;const q=Xo(z.metric,z.score,z.threshold);return o.jsxs("span",{style:{fontSize:11,padding:"2px 6px",borderRadius:"var(--radius-sm)",background:z.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:z.passed?"var(--success)":"var(--error)"},children:[((Y=bn[z.metric])==null?void 0:Y.name)||z.metric,": ",q.value]},$)})}),o.jsxs("div",{className:"detail-box",children:[o.jsx("strong",{children:"Actual Response:"}),`
`,E.actual_response||"(no response)",`

`,E.actual_tool_calls.length>0&&o.jsxs(o.Fragment,{children:[o.jsx("strong",{children:"Tool Calls:"}),`
`,E.actual_tool_calls.map((z,$)=>`  ${$+1}. ${z.name}(${JSON.stringify(z.args)})
`).join("")]})]})]},U)),r.error&&o.jsxs("div",{className:"result-details",children:[o.jsx("h5",{style:{color:"var(--error)"},children:"Error"}),o.jsx("div",{className:"detail-box",style:{color:"var(--error)"},children:r.error})]})]})]})}function X5({evalSet:e,projectId:t,result:n,isRunning:r,caseResults:i,onUpdate:s,onDelete:a,onRun:l,onExport:c}){var b,j,g,x;const[u,d]=k.useState(e.name),[p,f]=k.useState(!1);k.useEffect(()=>{d(e.name)},[e.id]);const h=k.useCallback(()=>{u!==e.name&&s({name:u})},[u,e.name,s]),m=v=>v==null?"-":`${Math.round(v*100)}%`;return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(yv,{size:20,style:{color:"var(--accent-secondary)"}}),o.jsx("input",{type:"text",value:u,onChange:v=>d(v.target.value),onBlur:h,placeholder:"Eval set name"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const v=`${window.location.origin}/project/${t}/evaluate?set=${e.id}`;navigator.clipboard.writeText(v)},title:"Copy link to this eval set",children:o.jsx(rp,{size:14})}),o.jsxs("button",{className:`btn btn-sm ${p?"btn-primary":"btn-secondary"}`,onClick:()=>f(!p),title:"View/Hide JSON",children:[o.jsx(_n,{size:14}),"JSON"]}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Export as JSON (compatible with adk eval)",children:o.jsx(Ri,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:r,children:[r?o.jsx(Ei,{size:14,className:"spinning"}):o.jsx(hr,{size:14}),"Run All"]}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:o.jsx(Ue,{size:14})})]}),o.jsx("div",{className:"editor-content",children:p?o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[o.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:o.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this evaluation set. Save this file and use with ",o.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval <agent_path> <eval_file.json>"})]})}),o.jsx("div",{style:{flex:1,minHeight:400,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:o.jsx(en,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(v=>{var _,A;return{name:v.name,description:v.description||void 0,tags:(_=v.tags)!=null&&_.length?v.tags:void 0,target_agent:v.target_agent!=="root_agent"?v.target_agent:void 0,invocations:v.invocations.map(S=>{var M;return{user_message:S.user_message,expected_response:S.expected_response||void 0,expected_tool_calls:(M=S.expected_tool_calls)!=null&&M.length?S.expected_tool_calls.map(E=>({tool_name:E.tool_name,args:E.match_type!=="name_only"&&Object.keys(E.args||{}).length?E.args:void 0})):void 0}}),session_input:Object.keys(v.session_input||{}).length?{state:v.session_input}:void 0,final_session_state:Object.keys(v.final_session_state||{}).length?v.final_session_state:void 0,rubrics:(A=v.rubrics)!=null&&A.length?v.rubrics.map(S=>S.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((b=e.eval_config.metrics)==null?void 0:b.filter(v=>v.enabled))||void 0}:void 0}],null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),o.jsx("div",{style:{display:"flex",gap:8},children:o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var _;const v=JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(A=>{var S,M;return{name:A.name,description:A.description||void 0,tags:(S=A.tags)!=null&&S.length?A.tags:void 0,target_agent:A.target_agent!=="root_agent"?A.target_agent:void 0,invocations:A.invocations.map(E=>{var U;return{user_message:E.user_message,expected_response:E.expected_response||void 0,expected_tool_calls:(U=E.expected_tool_calls)!=null&&U.length?E.expected_tool_calls.map(z=>({tool_name:z.tool_name,args:z.match_type!=="name_only"&&Object.keys(z.args||{}).length?z.args:void 0})):void 0}}),session_input:Object.keys(A.session_input||{}).length?{state:A.session_input}:void 0,final_session_state:Object.keys(A.final_session_state||{}).length?A.final_session_state:void 0,rubrics:(M=A.rubrics)!=null&&M.length?A.rubrics.map(E=>E.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((_=e.eval_config.metrics)==null?void 0:_.filter(A=>A.enabled))||void 0}:void 0}],null,2);navigator.clipboard.writeText(v)},children:[o.jsx(ss,{size:14})," Copy JSON"]})})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("textarea",{value:e.description,onChange:v=>s({description:v.target.value}),placeholder:"Description of this evaluation set...",style:{minHeight:40}})]}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"LLM Judge Model"}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Model used for LLM-judged metrics (safety, hallucinations, etc.)."}),o.jsx(G5,{value:((j=e.eval_config)==null?void 0:j.judge_model)||"",onChange:v=>s({eval_config:{...e.eval_config,judge_model:v}})})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(kv,{size:14})," Evaluation Metrics"]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Configure which metrics to use and their pass thresholds."}),Object.keys(bn).map(v=>{var E,U,z;const _=bn[v],A=(U=(E=e.eval_config)==null?void 0:E.metrics)==null?void 0:U.find($=>$.metric===v),S=(A==null?void 0:A.enabled)??!1,M=((z=A==null?void 0:A.criterion)==null?void 0:z.threshold)??.7;return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:S,onChange:$=>{var T;const q=[...((T=e.eval_config)==null?void 0:T.metrics)||[]],Y=q.findIndex(P=>P.metric===v);$.target.checked?Y===-1?q.push({metric:v,enabled:!0,criterion:{threshold:.7}}):q[Y]={...q[Y],enabled:!0}:Y!==-1&&(q[Y]={...q[Y],enabled:!1}),s({eval_config:{...e.eval_config,metrics:q}})}}),o.jsx("span",{className:"toggle-slider"})]}),o.jsxs("span",{style:{fontSize:12,opacity:S?1:.5,minWidth:140,fontWeight:S?500:400},children:[_.name,_.requiresJudge&&o.jsx("span",{style:{fontSize:9,marginLeft:4,color:"var(--accent-primary)"},children:"LLM"})]}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:S?1:.4},children:"≥"}),o.jsx("input",{type:"number",min:0,max:1,step:.1,value:M,disabled:!S,onChange:$=>{var T;const q=[...((T=e.eval_config)==null?void 0:T.metrics)||[]],Y=q.findIndex(P=>P.metric===v);Y!==-1&&(q[Y]={...q[Y],criterion:{...q[Y].criterion,threshold:parseFloat($.target.value)||.7}},s({eval_config:{...e.eval_config,metrics:q}}))},style:{width:60,textAlign:"center",opacity:S?1:.3,padding:"2px 4px",fontSize:11}})]},v)}),o.jsxs("div",{className:"form-row",style:{marginTop:16},children:[o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Default Trajectory Match Type"}),o.jsxs("select",{value:((g=e.eval_config)==null?void 0:g.default_trajectory_match_type)||"in_order",onChange:v=>s({eval_config:{...e.eval_config,default_trajectory_match_type:v.target.value}}),children:[o.jsx("option",{value:"exact",children:"Exact (same order, no extras)"}),o.jsx("option",{value:"in_order",children:"In Order (extras allowed between)"}),o.jsx("option",{value:"any_order",children:"Any Order (all present, any order)"})]})]}),o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Number of Runs"}),o.jsx("input",{type:"number",min:1,max:10,value:((x=e.eval_config)==null?void 0:x.num_runs)||1,onChange:v=>s({eval_config:{...e.eval_config,num_runs:parseInt(v.target.value)||1}})}),o.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:"Run each test multiple times for statistical reliability."})]})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(Cj,{size:14})," Coverage Summary"]}),n?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"result-scores",children:[o.jsxs("div",{className:"score-card",children:[o.jsxs("div",{className:"score-value",style:{color:"var(--accent-primary)"},children:[n.passed_cases,"/",n.total_cases]}),o.jsx("div",{className:"score-label",children:"Cases Passed"})]}),o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:`score-value ${n.overall_pass_rate>=.8?"passed":"failed"}`,children:m(n.overall_pass_rate)}),o.jsx("div",{className:"score-label",children:"Pass Rate"})]}),Object.entries(n.metric_avg_scores||{}).map(([v,_])=>{var S;const A=Xo(v,_);return o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:"score-value",children:A.value}),o.jsxs("div",{className:"score-label",children:["Avg ",((S=bn[v])==null?void 0:S.name)||v]})]},v)})]}),o.jsxs("div",{style:{marginTop:16},children:[o.jsx("div",{style:{marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Overall Pass Rate"}),o.jsx("div",{className:"coverage-bar",children:o.jsx("div",{className:`coverage-fill ${n.overall_pass_rate>=.8?"passed":"failed"}`,style:{width:`${n.overall_pass_rate*100}%`}})})]}),Object.entries(n.metric_pass_rates||{}).length>0&&o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Metric Pass Rates"}),Object.entries(n.metric_pass_rates).map(([v,_])=>{var A;return o.jsxs("div",{style:{marginBottom:8},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4},children:[o.jsx("span",{children:((A=bn[v])==null?void 0:A.name)||v}),o.jsx("span",{children:m(_)})]}),o.jsx("div",{className:"coverage-bar",children:o.jsx("div",{className:`coverage-fill ${_>=.8?"passed":"failed"}`,style:{width:`${_*100}%`}})})]},v)})]}),o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Individual Results"}),o.jsxs("table",{style:{width:"100%",fontSize:12,borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Test Case"}),o.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Metrics"}),o.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Status"})]})}),o.jsx("tbody",{children:n.case_results.map(v=>o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("td",{style:{padding:"8px 4px"},children:v.eval_case_name}),o.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:v.metric_results.map((_,A)=>{const S=Xo(_.metric,_.score,_.threshold);return o.jsx("span",{style:{fontSize:10,padding:"2px 4px",marginRight:4,borderRadius:"var(--radius-sm)",background:_.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:_.passed?"var(--success)":"var(--error)"},children:S.value},A)})}),o.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:v.passed?o.jsx(Bn,{size:14,style:{color:"var(--success)"}}):v.error?o.jsx(Ni,{size:14,style:{color:"var(--warning)"}}):o.jsx(mr,{size:14,style:{color:"var(--error)"}})})]},v.eval_case_id))})]})]})]}):o.jsxs("div",{style:{textAlign:"center",padding:"32px",color:"var(--text-muted)",background:"var(--bg-tertiary)",borderRadius:"var(--radius-md)"},children:[o.jsx(op,{size:32,style:{marginBottom:8,opacity:.3}}),o.jsx("p",{children:"Run the evaluation set to see coverage metrics"})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:["Test Cases (",e.eval_cases.length,")"]}),e.eval_cases.length===0?o.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"No test cases yet. Add cases to this eval set to start testing."}):o.jsx("ul",{style:{listStyle:"none",padding:0},children:e.eval_cases.map(v=>{const _=i.get(v.id);return o.jsxs("li",{style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",background:"var(--bg-tertiary)",borderRadius:"var(--radius-sm)",marginBottom:8},children:[_?_.passed?o.jsx(Bn,{size:14,style:{color:"var(--success)"}}):o.jsx(mr,{size:14,style:{color:"var(--error)"}}):o.jsx(Da,{size:14,style:{color:"var(--text-muted)"}}),o.jsx("span",{style:{flex:1},children:v.name}),o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},children:[v.invocations.length," turn(s)"]})]},v.id)})})]})]})})]})}function Z5(){const{project:e,setProject:t}=gt(),[n,r]=k.useState(""),[i,s]=k.useState(!0),[a,l]=k.useState(!1),[c,u]=k.useState(null),[d,p]=k.useState(!1);if(!e)return null;k.useEffect(()=>{f()},[e.id]);async function f(){s(!0),u(null);try{const x=await nv(e.id);r(x),l(!1)}catch(x){u(x.message)}finally{s(!1)}}function h(x){x!==void 0&&(r(x),l(!0),u(null))}async function m(){s(!0),u(null);try{const x=await rv(e.id,n);t(x),l(!1)}catch(x){u(x.message)}finally{s(!1)}}function b(){navigator.clipboard.writeText(n),p(!0),setTimeout(()=>p(!1),2e3)}function j(){const x=new Blob([n],{type:"text/yaml"}),v=URL.createObjectURL(x),_=document.createElement("a");_.href=v,_.download=`${e.name}.yaml`,_.click(),URL.revokeObjectURL(v)}function g(){const x=document.createElement("input");x.type="file",x.accept=".yaml,.yml",x.onchange=async v=>{var S;const _=(S=v.target.files)==null?void 0:S[0];if(!_)return;const A=await _.text();r(A),l(!0)},x.click()}return o.jsxs("div",{className:"yaml-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"yaml-header",children:[o.jsxs("div",{className:"yaml-title",children:[o.jsx("h3",{children:"Project Configuration"}),a&&o.jsxs("span",{className:"status-badge warning",children:[o.jsx(Ni,{size:12}),"Unsaved changes"]}),c&&o.jsxs("span",{className:"status-badge error",children:[o.jsx(Ni,{size:12}),c]}),d&&o.jsxs("span",{className:"status-badge success",children:[o.jsx(Zd,{size:12}),"Copied!"]})]}),o.jsxs("div",{className:"yaml-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:b,title:"Copy to clipboard",children:[o.jsx(ss,{size:14}),"Copy"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:j,title:"Download YAML",children:[o.jsx(Ri,{size:14}),"Download"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:g,title:"Upload YAML",children:[o.jsx(yl,{size:14}),"Upload"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:f,title:"Reload from server",children:[o.jsx(Zt,{size:14}),"Reload"]}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:m,disabled:!a||i,children:"Apply Changes"})]})]}),o.jsx("div",{className:"yaml-editor",children:o.jsx(en,{height:"100%",language:"yaml",theme:"vs-dark",value:n,onChange:h,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),o.jsxs("div",{className:"yaml-info",children:[o.jsx("p",{children:"This YAML represents your entire project configuration including the app, agents, tools, and state keys."}),o.jsxs("p",{children:["You can edit the YAML directly, then click ",o.jsx("code",{children:"Apply Changes"})," to update the project. Use ",o.jsx("code",{children:"Download"})," to save a backup or ",o.jsx("code",{children:"Upload"})," to import a configuration."]})]})]})}function e8(){const{project:e}=gt(),[t,n]=k.useState(!1),[r,i]=k.useState(""),[s,a]=k.useState(!1),[l,c]=k.useState(null);if(k.useEffect(()=>{e&&(a(!0),c(null),fetch(`/api/projects/${e.id}/code`).then(p=>{if(!p.ok)throw new Error("Failed to fetch code");return p.json()}).then(p=>{let f=p.code||"";f=f.replace(/\n# --- Callback instrumentation \(for event tracking\) ---[\s\S]*?# --- End callback instrumentation ---\n/g,""),f=f.replace(/_wrap_callback\("[^"]+",\s*"[^"]+",\s*(\w+)\)/g,"$1"),i(f),a(!1)}).catch(p=>{c(p.message),a(!1),i("# Failed to generate code. Please check the backend logs.")}))},[e]),!e)return null;function u(){navigator.clipboard.writeText(r),n(!0),setTimeout(()=>n(!1),2e3)}function d(){if(!e)return;const p=new Blob([r],{type:"text/x-python"}),f=URL.createObjectURL(p),h=document.createElement("a");h.href=f,h.download=`${e.name}_agent.py`,h.click(),URL.revokeObjectURL(f)}return o.jsxs("div",{className:"code-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"code-header",children:[o.jsxs("div",{className:"code-title",children:[o.jsx(_n,{size:16}),o.jsx("h3",{children:"Python Code"}),o.jsx("span",{className:"badge",children:s?"Loading...":"Generated"}),t&&o.jsxs("span",{className:"status-badge success",children:[o.jsx(Zd,{size:12}),"Copied!"]}),l&&o.jsxs("span",{className:"status-badge error",children:[o.jsx(Ni,{size:12}),"Error"]})]}),o.jsxs("div",{className:"code-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:u,title:"Copy to clipboard",disabled:s||!!l,children:[o.jsx(ss,{size:14}),"Copy"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:d,title:"Download Python file",disabled:s||!!l,children:[o.jsx(Ri,{size:14}),"Download"]})]})]}),o.jsx("div",{className:"code-editor",children:s?o.jsx("div",{className:"code-loading",children:o.jsx("div",{children:"Loading generated code..."})}):l?o.jsxs("div",{className:"code-error",children:[o.jsx(Ni,{size:24}),o.jsx("div",{children:l})]}):o.jsx(en,{height:"100%",language:"python",theme:"vs-dark",value:r,options:{readOnly:!0,minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),o.jsxs("div",{className:"code-info",children:[o.jsx("p",{children:"This is the Python code equivalent of your project configuration. You can use this code directly with ADK."}),o.jsxs("p",{children:["Place this in a file named ",o.jsx("code",{children:"agent.py"})," inside your agent directory, then run with ",o.jsx("code",{children:"adk web ."})," or ",o.jsx("code",{children:"adk run your_agent"}),"."]})]})]})}const t8=[{id:"app",label:"App",icon:kv},{id:"agents",label:"Agents",icon:Ar},{id:"tools",label:"Tools",icon:pn},{id:"callbacks",label:"Callbacks",icon:_n},{id:"run",label:"Run",icon:vv},{id:"skillsets",label:"SkillSets",icon:mj},{id:"eval",label:"Evaluate",icon:Au},{id:"yaml",label:"YAML",icon:xj},{id:"code",label:"Code",icon:_n}],n8=["app","agents","tools","callbacks","run","skillsets","eval","yaml","code"];function Tc(){var P,D;const{projectId:e,tab:t,itemId:n}=gk(),r=Gd(),{project:i,setProject:s,activeTab:a,setActiveTab:l,hasUnsavedChanges:c,setHasUnsavedChanges:u,selectedAgentId:d,setSelectedAgentId:p,selectedToolId:f,setSelectedToolId:h}=gt(),[m,b]=k.useState(!0),[j,g]=k.useState(!1),[x,v]=k.useState(!1),[_,A]=k.useState(null),S=k.useRef(!0),M=k.useRef(null);k.useEffect(()=>{t&&n8.includes(t)?l(t):!t&&e&&r(`/project/${e}/${a}`,{replace:!0})},[t,e]),k.useEffect(()=>{t==="agents"&&n?p(n):t==="tools"&&n&&h(n)},[t,n]);function E(C){l(C),C==="agents"&&d?r(`/project/${e}/${C}/${d}`,{replace:!0}):C==="tools"&&f?r(`/project/${e}/${C}/${f}`,{replace:!0}):r(`/project/${e}/${C}`,{replace:!0})}function U(C){C?r(`/project/${e}/${a}/${C}`,{replace:!0}):r(`/project/${e}/${a}`,{replace:!0})}k.useEffect(()=>(e&&z(e),()=>{s(null),u(!1)}),[e]);async function z(C){S.current=!0;try{const L=await Yy(C);s(L),M.current=JSON.stringify(L),u(!1)}catch(L){console.error("Failed to load project:",L),r("/")}finally{b(!1),setTimeout(()=>{S.current=!1},100)}}async function $(){if(i){g(!0);try{const{eval_sets:C,...L}=i;await Cu(i.id,L),M.current=JSON.stringify(i),u(!1)}catch(C){console.error("Failed to save project:",C)}finally{g(!1)}}}async function q(){if(i){v(!0),A(null),window.dispatchEvent(new CustomEvent("eval-tests-started"));try{let C=0,L=0;const R=[],w=[];for(const W of i.eval_sets||[]){if(W.eval_cases.length===0)continue;const K=await Ge.post(`/projects/${i.id}/eval-sets/${W.id}/run`,{});K.result&&(C+=K.result.passed_cases||0,L+=K.result.total_cases||0,K.result.case_results&&R.push(...K.result.case_results),w.push(K.result.eval_set_name||W.name||W.id))}if(R.length>0){const W={id:Date.now().toString(36)+Math.random().toString(36).substr(2,5),eval_set_id:"batch",eval_set_name:w.length>1?`All Tests (${w.length} sets)`:w[0]||"All Tests",started_at:Date.now()/1e3,completed_at:Date.now()/1e3,total_cases:L,passed_cases:C,failed_cases:L-C,case_results:R};try{await Ge.post(`/projects/${i.id}/eval-history`,W)}catch(K){console.warn("Failed to save batch eval run to history:",K)}}A({passed:C,total:L}),window.dispatchEvent(new CustomEvent("eval-tests-completed")),setTimeout(()=>A(null),5e3)}catch(C){console.error("Failed to run tests:",C),A({passed:0,total:-1}),setTimeout(()=>A(null),5e3)}finally{v(!1)}}}const Y=k.useRef(null);k.useEffect(()=>{if(i&&!S.current&&Y.current){const C=i.app.models||[],L=Y.current||[];if(C.some((w,W)=>{const K=L.find(y=>y.id===w.id);return K?K.provider!==w.provider||K.model_name!==w.model_name||K.api_base!==w.api_base||K.temperature!==w.temperature||K.max_output_tokens!==w.max_output_tokens||K.top_p!==w.top_p||K.top_k!==w.top_k:!1})){const w=i.app.default_model_id,W=i.agents.map(y=>{if(y.type==="LlmAgent"&&y.model){const N=y.model._appModelId;if(N){const V=C.find(re=>re.id===N);if(V)return{...y,model:{provider:V.provider,model_name:V.model_name,api_base:V.api_base,temperature:V.temperature,max_output_tokens:V.max_output_tokens,top_p:V.top_p,top_k:V.top_k,fallbacks:[],_appModelId:N}}}else if(w){const V=C.find(re=>re.id===w);if(V&&y.model.provider===V.provider&&y.model.model_name===V.model_name&&y.model.api_base===V.api_base)return{...y,model:{provider:V.provider,model_name:V.model_name,api_base:V.api_base,temperature:V.temperature,max_output_tokens:V.max_output_tokens,top_p:V.top_p,top_k:V.top_k,fallbacks:[],_appModelId:w}}}}return y});W.some((y,N)=>JSON.stringify(y)!==JSON.stringify(i.agents[N]))&&s({...i,agents:W})}}i&&(Y.current=i.app.models||[])},[i==null?void 0:i.app.models,i,s]);const T=k.useRef(null);return k.useEffect(()=>(i&&!S.current&&M.current&&JSON.stringify(i)!==M.current&&(u(!0),T.current&&clearTimeout(T.current),T.current=setTimeout(async()=>{try{const{eval_sets:L,...R}=i;await Cu(i.id,R),M.current=JSON.stringify(i),u(!1)}catch(L){console.error("Auto-save failed:",L)}},500)),()=>{T.current&&clearTimeout(T.current)}),[i]),m?o.jsxs("div",{className:"loading-screen",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("header",{className:"top-bar",children:[o.jsxs("div",{className:"top-bar-left",children:[o.jsxs("button",{className:"back-btn",onClick:()=>r("/"),children:[o.jsx(fj,{size:18}),"Project"]}),o.jsx("h1",{className:"project-name",children:i.name})]}),o.jsx("nav",{className:"tabs-bar",children:t8.map(C=>o.jsxs("button",{className:`tab-btn ${a===C.id?"active":""}`,onClick:()=>E(C.id),children:[o.jsx(C.icon,{size:14}),C.label]},C.id))}),o.jsxs("div",{className:"top-bar-right",children:[o.jsxs("button",{className:`btn ${_?_.total===-1?"btn-error":_.passed===_.total?"btn-success":"btn-warning":"btn-secondary"}`,onClick:q,disabled:x||!((P=i==null?void 0:i.eval_sets)!=null&&P.some(C=>C.eval_cases.length>0)),title:(D=i==null?void 0:i.eval_sets)!=null&&D.some(C=>C.eval_cases.length>0)?"Run all evaluation tests":"No test cases defined",style:{marginRight:8},children:[x?o.jsx(bv,{size:16,className:"spin"}):o.jsx(hr,{size:16}),x?"Testing...":_?_.total===-1?"Error":`${_.passed}/${_.total}`:"Test"]}),o.jsxs("button",{className:"btn btn-primary",onClick:$,disabled:j,children:[o.jsx(Ba,{size:16}),j?"Saving...":"Save"]})]})]}),o.jsxs("main",{className:"main-content",children:[a==="app"&&o.jsx($j,{}),a==="agents"&&o.jsx(H4,{onSelectAgent:U}),a==="tools"&&o.jsx(SE,{onSelectTool:U}),a==="callbacks"&&o.jsx(NE,{onSelectCallback:U}),a==="run"&&o.jsx(W5,{}),a==="skillsets"&&o.jsx(q5,{}),a==="eval"&&o.jsx(K5,{}),a==="yaml"&&o.jsx(Z5,{}),a==="code"&&o.jsx(e8,{})]})]}):null}function r8(){const{setMcpServers:e,setBuiltinTools:t}=gt();return k.useEffect(()=>{Qd().then(e).catch(console.error),iv().then(t).catch(console.error)},[e,t]),o.jsxs(Mk,{children:[o.jsx(Gr,{path:"/",element:o.jsx(Aj,{})}),o.jsx(Gr,{path:"/project/:projectId",element:o.jsx(Tc,{})}),o.jsx(Gr,{path:"/project/:projectId/:tab",element:o.jsx(Tc,{})}),o.jsx(Gr,{path:"/project/:projectId/:tab/:itemId",element:o.jsx(Tc,{})}),o.jsx(Gr,{path:"*",element:o.jsx(Ak,{to:"/",replace:!0})})]})}Ac.createRoot(document.getElementById("root")).render(o.jsx(Wt.StrictMode,{children:o.jsx(Ik,{children:o.jsx(r8,{})})}));
