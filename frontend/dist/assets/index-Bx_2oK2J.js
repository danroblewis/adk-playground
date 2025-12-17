function p0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var ca=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ga(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xg={exports:{}},Ya={},yg={exports:{}},Ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qo=Symbol.for("react.element"),f0=Symbol.for("react.portal"),h0=Symbol.for("react.fragment"),m0=Symbol.for("react.strict_mode"),g0=Symbol.for("react.profiler"),x0=Symbol.for("react.provider"),y0=Symbol.for("react.context"),v0=Symbol.for("react.forward_ref"),b0=Symbol.for("react.suspense"),w0=Symbol.for("react.memo"),k0=Symbol.for("react.lazy"),ff=Symbol.iterator;function _0(e){return e===null||typeof e!="object"?null:(e=ff&&e[ff]||e["@@iterator"],typeof e=="function"?e:null)}var vg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bg=Object.assign,wg={};function Ti(e,t,n){this.props=e,this.context=t,this.refs=wg,this.updater=n||vg}Ti.prototype.isReactComponent={};Ti.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ti.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function kg(){}kg.prototype=Ti.prototype;function Yu(e,t,n){this.props=e,this.context=t,this.refs=wg,this.updater=n||vg}var Qu=Yu.prototype=new kg;Qu.constructor=Yu;bg(Qu,Ti.prototype);Qu.isPureReactComponent=!0;var hf=Array.isArray,_g=Object.prototype.hasOwnProperty,Xu={current:null},jg={key:!0,ref:!0,__self:!0,__source:!0};function Sg(e,t,n){var r,i={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)_g.call(t,r)&&!jg.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Qo,type:e,key:s,ref:a,props:i,_owner:Xu.current}}function j0(e,t){return{$$typeof:Qo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Zu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qo}function S0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var mf=/\/+/g;function zl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?S0(""+e.key):t.toString(36)}function Ws(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Qo:case f0:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+zl(a,0):r,hf(i)?(n="",e!=null&&(n=e.replace(mf,"$&/")+"/"),Ws(i,t,n,"",function(u){return u})):i!=null&&(Zu(i)&&(i=j0(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(mf,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",hf(e))for(var l=0;l<e.length;l++){s=e[l];var c=r+zl(s,l);a+=Ws(s,t,n,c,i)}else if(c=_0(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=r+zl(s,l++),a+=Ws(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function gs(e,t,n){if(e==null)return e;var r=[],i=0;return Ws(e,r,"","",function(s){return t.call(n,s,i++)}),r}function C0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var kt={current:null},Vs={transition:null},N0={ReactCurrentDispatcher:kt,ReactCurrentBatchConfig:Vs,ReactCurrentOwner:Xu};function Cg(){throw Error("act(...) is not supported in production builds of React.")}Ee.Children={map:gs,forEach:function(e,t,n){gs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return gs(e,function(){t++}),t},toArray:function(e){return gs(e,function(t){return t})||[]},only:function(e){if(!Zu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ee.Component=Ti;Ee.Fragment=h0;Ee.Profiler=g0;Ee.PureComponent=Yu;Ee.StrictMode=m0;Ee.Suspense=b0;Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N0;Ee.act=Cg;Ee.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=bg({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=Xu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)_g.call(t,c)&&!jg.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Qo,type:e.type,key:i,ref:s,props:r,_owner:a}};Ee.createContext=function(e){return e={$$typeof:y0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:x0,_context:e},e.Consumer=e};Ee.createElement=Sg;Ee.createFactory=function(e){var t=Sg.bind(null,e);return t.type=e,t};Ee.createRef=function(){return{current:null}};Ee.forwardRef=function(e){return{$$typeof:v0,render:e}};Ee.isValidElement=Zu;Ee.lazy=function(e){return{$$typeof:k0,_payload:{_status:-1,_result:e},_init:C0}};Ee.memo=function(e,t){return{$$typeof:w0,type:e,compare:t===void 0?null:t}};Ee.startTransition=function(e){var t=Vs.transition;Vs.transition={};try{e()}finally{Vs.transition=t}};Ee.unstable_act=Cg;Ee.useCallback=function(e,t){return kt.current.useCallback(e,t)};Ee.useContext=function(e){return kt.current.useContext(e)};Ee.useDebugValue=function(){};Ee.useDeferredValue=function(e){return kt.current.useDeferredValue(e)};Ee.useEffect=function(e,t){return kt.current.useEffect(e,t)};Ee.useId=function(){return kt.current.useId()};Ee.useImperativeHandle=function(e,t,n){return kt.current.useImperativeHandle(e,t,n)};Ee.useInsertionEffect=function(e,t){return kt.current.useInsertionEffect(e,t)};Ee.useLayoutEffect=function(e,t){return kt.current.useLayoutEffect(e,t)};Ee.useMemo=function(e,t){return kt.current.useMemo(e,t)};Ee.useReducer=function(e,t,n){return kt.current.useReducer(e,t,n)};Ee.useRef=function(e){return kt.current.useRef(e)};Ee.useState=function(e){return kt.current.useState(e)};Ee.useSyncExternalStore=function(e,t,n){return kt.current.useSyncExternalStore(e,t,n)};Ee.useTransition=function(){return kt.current.useTransition()};Ee.version="18.3.1";yg.exports=Ee;var k=yg.exports;const Wt=Ga(k),E0=p0({__proto__:null,default:Wt},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0=k,T0=Symbol.for("react.element"),A0=Symbol.for("react.fragment"),M0=Object.prototype.hasOwnProperty,P0=z0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,L0={key:!0,ref:!0,__self:!0,__source:!0};function Ng(e,t,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)M0.call(t,r)&&!L0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:T0,type:e,key:s,ref:a,props:i,_owner:P0.current}}Ya.Fragment=A0;Ya.jsx=Ng;Ya.jsxs=Ng;xg.exports=Ya;var o=xg.exports,zc={},Eg={exports:{}},Jt={},zg={exports:{}},Tg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,I){var w=P.length;P.push(I);e:for(;0<w;){var B=w-1>>>1,G=P[B];if(0<i(G,I))P[B]=I,P[w]=G,w=B;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var I=P[0],w=P.pop();if(w!==I){P[0]=w;e:for(var B=0,G=P.length,v=G>>>1;B<v;){var z=2*(B+1)-1,V=P[z],ie=z+1,fe=P[ie];if(0>i(V,w))ie<G&&0>i(fe,V)?(P[B]=fe,P[ie]=w,B=ie):(P[B]=V,P[z]=w,B=z);else if(ie<G&&0>i(fe,w))P[B]=fe,P[ie]=w,B=ie;else break e}}return I}function i(P,I){var w=P.sortIndex-I.sortIndex;return w!==0?w:P.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,p=null,f=3,h=!1,m=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(P){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=P)r(u),I.sortIndex=I.expirationTime,t(c,I);else break;I=n(u)}}function j(P){if(b=!1,y(P),!m)if(n(c)!==null)m=!0,$(T);else{var I=n(u);I!==null&&C(j,I.startTime-P)}}function T(P,I){m=!1,b&&(b=!1,g(N),N=-1),h=!0;var w=f;try{for(y(I),p=n(c);p!==null&&(!(p.expirationTime>I)||P&&!O());){var B=p.callback;if(typeof B=="function"){p.callback=null,f=p.priorityLevel;var G=B(p.expirationTime<=I);I=e.unstable_now(),typeof G=="function"?p.callback=G:p===n(c)&&r(c),y(I)}else r(c);p=n(c)}if(p!==null)var v=!0;else{var z=n(u);z!==null&&C(j,z.startTime-I),v=!1}return v}finally{p=null,f=w,h=!1}}var S=!1,L=null,N=-1,W=5,E=-1;function O(){return!(e.unstable_now()-E<W)}function F(){if(L!==null){var P=e.unstable_now();E=P;var I=!0;try{I=L(!0,P)}finally{I?K():(S=!1,L=null)}}else S=!1}var K;if(typeof x=="function")K=function(){x(F)};else if(typeof MessageChannel<"u"){var A=new MessageChannel,M=A.port2;A.port1.onmessage=F,K=function(){M.postMessage(null)}}else K=function(){_(F,0)};function $(P){L=P,S||(S=!0,K())}function C(P,I){N=_(function(){P(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){m||h||(m=!0,$(T))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(P){switch(f){case 1:case 2:case 3:var I=3;break;default:I=f}var w=f;f=I;try{return P()}finally{f=w}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,I){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var w=f;f=P;try{return I()}finally{f=w}},e.unstable_scheduleCallback=function(P,I,w){var B=e.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?B+w:B):w=B,P){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=w+G,P={id:d++,callback:I,priorityLevel:P,startTime:w,expirationTime:G,sortIndex:-1},w>B?(P.sortIndex=w,t(u,P),n(c)===null&&P===n(u)&&(b?(g(N),N=-1):b=!0,C(j,w-B))):(P.sortIndex=G,t(c,P),m||h||(m=!0,$(T))),P},e.unstable_shouldYield=O,e.unstable_wrapCallback=function(P){var I=f;return function(){var w=f;f=I;try{return P.apply(this,arguments)}finally{f=w}}}})(Tg);zg.exports=Tg;var R0=zg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I0=k,Ht=R0;function ce(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ag=new Set,jo={};function Br(e,t){yi(e,t),yi(e+"Capture",t)}function yi(e,t){for(jo[e]=t,e=0;e<t.length;e++)Ag.add(t[e])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tc=Object.prototype.hasOwnProperty,O0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gf={},xf={};function $0(e){return Tc.call(xf,e)?!0:Tc.call(gf,e)?!1:O0.test(e)?xf[e]=!0:(gf[e]=!0,!1)}function D0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function F0(e,t,n,r){if(t===null||typeof t>"u"||D0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _t(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){lt[e]=new _t(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];lt[t]=new _t(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){lt[e]=new _t(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){lt[e]=new _t(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){lt[e]=new _t(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){lt[e]=new _t(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){lt[e]=new _t(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){lt[e]=new _t(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){lt[e]=new _t(e,5,!1,e.toLowerCase(),null,!1,!1)});var ed=/[\-:]([a-z])/g;function td(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ed,td);lt[t]=new _t(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ed,td);lt[t]=new _t(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ed,td);lt[t]=new _t(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){lt[e]=new _t(e,1,!1,e.toLowerCase(),null,!1,!1)});lt.xlinkHref=new _t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){lt[e]=new _t(e,1,!1,e.toLowerCase(),null,!0,!0)});function nd(e,t,n,r){var i=lt.hasOwnProperty(t)?lt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(F0(t,n,i,r)&&(n=null),r||i===null?$0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Wn=I0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xs=Symbol.for("react.element"),Gr=Symbol.for("react.portal"),Yr=Symbol.for("react.fragment"),rd=Symbol.for("react.strict_mode"),Ac=Symbol.for("react.profiler"),Mg=Symbol.for("react.provider"),Pg=Symbol.for("react.context"),id=Symbol.for("react.forward_ref"),Mc=Symbol.for("react.suspense"),Pc=Symbol.for("react.suspense_list"),od=Symbol.for("react.memo"),Jn=Symbol.for("react.lazy"),Lg=Symbol.for("react.offscreen"),yf=Symbol.iterator;function Bi(e){return e===null||typeof e!="object"?null:(e=yf&&e[yf]||e["@@iterator"],typeof e=="function"?e:null)}var He=Object.assign,Tl;function no(e){if(Tl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Tl=t&&t[1]||""}return`
`+Tl+e}var Al=!1;function Ml(e,t){if(!e||Al)return"";Al=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{Al=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?no(e):""}function B0(e){switch(e.tag){case 5:return no(e.type);case 16:return no("Lazy");case 13:return no("Suspense");case 19:return no("SuspenseList");case 0:case 2:case 15:return e=Ml(e.type,!1),e;case 11:return e=Ml(e.type.render,!1),e;case 1:return e=Ml(e.type,!0),e;default:return""}}function Lc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yr:return"Fragment";case Gr:return"Portal";case Ac:return"Profiler";case rd:return"StrictMode";case Mc:return"Suspense";case Pc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pg:return(e.displayName||"Context")+".Consumer";case Mg:return(e._context.displayName||"Context")+".Provider";case id:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case od:return t=e.displayName||null,t!==null?t:Lc(e.type)||"Memo";case Jn:t=e._payload,e=e._init;try{return Lc(e(t))}catch{}}return null}function U0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lc(t);case 8:return t===rd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function W0(e){var t=Rg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ys(e){e._valueTracker||(e._valueTracker=W0(e))}function Ig(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Rg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ua(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Rc(e,t){var n=t.checked;return He({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function vf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Og(e,t){t=t.checked,t!=null&&nd(e,"checked",t,!1)}function Ic(e,t){Og(e,t);var n=pr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Oc(e,t.type,n):t.hasOwnProperty("defaultValue")&&Oc(e,t.type,pr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function bf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Oc(e,t,n){(t!=="number"||ua(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ro=Array.isArray;function li(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $c(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(ce(91));return He({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(ce(92));if(ro(n)){if(1<n.length)throw Error(ce(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pr(n)}}function $g(e,t){var n=pr(t.value),r=pr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function kf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Dg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Dg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vs,Fg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vs=vs||document.createElement("div"),vs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function So(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},V0=["Webkit","ms","Moz","O"];Object.keys(co).forEach(function(e){V0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),co[t]=co[e]})});function Bg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||co.hasOwnProperty(e)&&co[e]?(""+t).trim():t+"px"}function Ug(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Bg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var H0=He({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fc(e,t){if(t){if(H0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(ce(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(ce(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(ce(61))}if(t.style!=null&&typeof t.style!="object")throw Error(ce(62))}}function Bc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uc=null;function sd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wc=null,ci=null,ui=null;function _f(e){if(e=es(e)){if(typeof Wc!="function")throw Error(ce(280));var t=e.stateNode;t&&(t=tl(t),Wc(e.stateNode,e.type,t))}}function Wg(e){ci?ui?ui.push(e):ui=[e]:ci=e}function Vg(){if(ci){var e=ci,t=ui;if(ui=ci=null,_f(e),t)for(e=0;e<t.length;e++)_f(t[e])}}function Hg(e,t){return e(t)}function qg(){}var Pl=!1;function Jg(e,t,n){if(Pl)return e(t,n);Pl=!0;try{return Hg(e,t,n)}finally{Pl=!1,(ci!==null||ui!==null)&&(qg(),Vg())}}function Co(e,t){var n=e.stateNode;if(n===null)return null;var r=tl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(ce(231,t,typeof n));return n}var Vc=!1;if(On)try{var Ui={};Object.defineProperty(Ui,"passive",{get:function(){Vc=!0}}),window.addEventListener("test",Ui,Ui),window.removeEventListener("test",Ui,Ui)}catch{Vc=!1}function q0(e,t,n,r,i,s,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var uo=!1,da=null,pa=!1,Hc=null,J0={onError:function(e){uo=!0,da=e}};function K0(e,t,n,r,i,s,a,l,c){uo=!1,da=null,q0.apply(J0,arguments)}function G0(e,t,n,r,i,s,a,l,c){if(K0.apply(this,arguments),uo){if(uo){var u=da;uo=!1,da=null}else throw Error(ce(198));pa||(pa=!0,Hc=u)}}function Ur(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Kg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function jf(e){if(Ur(e)!==e)throw Error(ce(188))}function Y0(e){var t=e.alternate;if(!t){if(t=Ur(e),t===null)throw Error(ce(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return jf(i),e;if(s===r)return jf(i),t;s=s.sibling}throw Error(ce(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(ce(189))}}if(n.alternate!==r)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?e:t}function Gg(e){return e=Y0(e),e!==null?Yg(e):null}function Yg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Yg(e);if(t!==null)return t;e=e.sibling}return null}var Qg=Ht.unstable_scheduleCallback,Sf=Ht.unstable_cancelCallback,Q0=Ht.unstable_shouldYield,X0=Ht.unstable_requestPaint,Ke=Ht.unstable_now,Z0=Ht.unstable_getCurrentPriorityLevel,ad=Ht.unstable_ImmediatePriority,Xg=Ht.unstable_UserBlockingPriority,fa=Ht.unstable_NormalPriority,eb=Ht.unstable_LowPriority,Zg=Ht.unstable_IdlePriority,Qa=null,wn=null;function tb(e){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(Qa,e,void 0,(e.current.flags&128)===128)}catch{}}var un=Math.clz32?Math.clz32:ib,nb=Math.log,rb=Math.LN2;function ib(e){return e>>>=0,e===0?32:31-(nb(e)/rb|0)|0}var bs=64,ws=4194304;function io(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ha(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=io(l):(s&=a,s!==0&&(r=io(s)))}else a=n&~i,a!==0?r=io(a):s!==0&&(r=io(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-un(t),i=1<<n,r|=e[n],t&=~i;return r}function ob(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sb(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-un(s),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=ob(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function qc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ex(){var e=bs;return bs<<=1,!(bs&4194240)&&(bs=64),e}function Ll(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-un(t),e[t]=n}function ab(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-un(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function ld(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-un(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Le=0;function tx(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var nx,cd,rx,ix,ox,Jc=!1,ks=[],rr=null,ir=null,or=null,No=new Map,Eo=new Map,Yn=[],lb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cf(e,t){switch(e){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":No.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(t.pointerId)}}function Wi(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=es(t),t!==null&&cd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function cb(e,t,n,r,i){switch(t){case"focusin":return rr=Wi(rr,e,t,n,r,i),!0;case"dragenter":return ir=Wi(ir,e,t,n,r,i),!0;case"mouseover":return or=Wi(or,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return No.set(s,Wi(No.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Eo.set(s,Wi(Eo.get(s)||null,e,t,n,r,i)),!0}return!1}function sx(e){var t=jr(e.target);if(t!==null){var n=Ur(t);if(n!==null){if(t=n.tag,t===13){if(t=Kg(n),t!==null){e.blockedOn=t,ox(e.priority,function(){rx(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Kc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Uc=r,n.target.dispatchEvent(r),Uc=null}else return t=es(n),t!==null&&cd(t),e.blockedOn=n,!1;t.shift()}return!0}function Nf(e,t,n){Hs(e)&&n.delete(t)}function ub(){Jc=!1,rr!==null&&Hs(rr)&&(rr=null),ir!==null&&Hs(ir)&&(ir=null),or!==null&&Hs(or)&&(or=null),No.forEach(Nf),Eo.forEach(Nf)}function Vi(e,t){e.blockedOn===t&&(e.blockedOn=null,Jc||(Jc=!0,Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority,ub)))}function zo(e){function t(i){return Vi(i,e)}if(0<ks.length){Vi(ks[0],e);for(var n=1;n<ks.length;n++){var r=ks[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rr!==null&&Vi(rr,e),ir!==null&&Vi(ir,e),or!==null&&Vi(or,e),No.forEach(t),Eo.forEach(t),n=0;n<Yn.length;n++)r=Yn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yn.length&&(n=Yn[0],n.blockedOn===null);)sx(n),n.blockedOn===null&&Yn.shift()}var di=Wn.ReactCurrentBatchConfig,ma=!0;function db(e,t,n,r){var i=Le,s=di.transition;di.transition=null;try{Le=1,ud(e,t,n,r)}finally{Le=i,di.transition=s}}function pb(e,t,n,r){var i=Le,s=di.transition;di.transition=null;try{Le=4,ud(e,t,n,r)}finally{Le=i,di.transition=s}}function ud(e,t,n,r){if(ma){var i=Kc(e,t,n,r);if(i===null)Vl(e,t,r,ga,n),Cf(e,r);else if(cb(i,e,t,n,r))r.stopPropagation();else if(Cf(e,r),t&4&&-1<lb.indexOf(e)){for(;i!==null;){var s=es(i);if(s!==null&&nx(s),s=Kc(e,t,n,r),s===null&&Vl(e,t,r,ga,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Vl(e,t,r,null,n)}}var ga=null;function Kc(e,t,n,r){if(ga=null,e=sd(r),e=jr(e),e!==null)if(t=Ur(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Kg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ga=e,null}function ax(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Z0()){case ad:return 1;case Xg:return 4;case fa:case eb:return 16;case Zg:return 536870912;default:return 16}default:return 16}}var Xn=null,dd=null,qs=null;function lx(){if(qs)return qs;var e,t=dd,n=t.length,r,i="value"in Xn?Xn.value:Xn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return qs=i.slice(e,1<r?1-r:void 0)}function Js(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _s(){return!0}function Ef(){return!1}function Kt(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_s:Ef,this.isPropagationStopped=Ef,this}return He(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_s)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_s)},persist:function(){},isPersistent:_s}),t}var Ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pd=Kt(Ai),Zo=He({},Ai,{view:0,detail:0}),fb=Kt(Zo),Rl,Il,Hi,Xa=He({},Zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hi&&(Hi&&e.type==="mousemove"?(Rl=e.screenX-Hi.screenX,Il=e.screenY-Hi.screenY):Il=Rl=0,Hi=e),Rl)},movementY:function(e){return"movementY"in e?e.movementY:Il}}),zf=Kt(Xa),hb=He({},Xa,{dataTransfer:0}),mb=Kt(hb),gb=He({},Zo,{relatedTarget:0}),Ol=Kt(gb),xb=He({},Ai,{animationName:0,elapsedTime:0,pseudoElement:0}),yb=Kt(xb),vb=He({},Ai,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bb=Kt(vb),wb=He({},Ai,{data:0}),Tf=Kt(wb),kb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_b={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jb[e])?!!t[e]:!1}function fd(){return Sb}var Cb=He({},Zo,{key:function(e){if(e.key){var t=kb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Js(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_b[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fd,charCode:function(e){return e.type==="keypress"?Js(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Js(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nb=Kt(Cb),Eb=He({},Xa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Af=Kt(Eb),zb=He({},Zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fd}),Tb=Kt(zb),Ab=He({},Ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mb=Kt(Ab),Pb=He({},Xa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lb=Kt(Pb),Rb=[9,13,27,32],hd=On&&"CompositionEvent"in window,po=null;On&&"documentMode"in document&&(po=document.documentMode);var Ib=On&&"TextEvent"in window&&!po,cx=On&&(!hd||po&&8<po&&11>=po),Mf=" ",Pf=!1;function ux(e,t){switch(e){case"keyup":return Rb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qr=!1;function Ob(e,t){switch(e){case"compositionend":return dx(t);case"keypress":return t.which!==32?null:(Pf=!0,Mf);case"textInput":return e=t.data,e===Mf&&Pf?null:e;default:return null}}function $b(e,t){if(Qr)return e==="compositionend"||!hd&&ux(e,t)?(e=lx(),qs=dd=Xn=null,Qr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cx&&t.locale!=="ko"?null:t.data;default:return null}}var Db={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Db[e.type]:t==="textarea"}function px(e,t,n,r){Wg(r),t=xa(t,"onChange"),0<t.length&&(n=new pd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var fo=null,To=null;function Fb(e){_x(e,0)}function Za(e){var t=ei(e);if(Ig(t))return e}function Bb(e,t){if(e==="change")return t}var fx=!1;if(On){var $l;if(On){var Dl="oninput"in document;if(!Dl){var Rf=document.createElement("div");Rf.setAttribute("oninput","return;"),Dl=typeof Rf.oninput=="function"}$l=Dl}else $l=!1;fx=$l&&(!document.documentMode||9<document.documentMode)}function If(){fo&&(fo.detachEvent("onpropertychange",hx),To=fo=null)}function hx(e){if(e.propertyName==="value"&&Za(To)){var t=[];px(t,To,e,sd(e)),Jg(Fb,t)}}function Ub(e,t,n){e==="focusin"?(If(),fo=t,To=n,fo.attachEvent("onpropertychange",hx)):e==="focusout"&&If()}function Wb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Za(To)}function Vb(e,t){if(e==="click")return Za(t)}function Hb(e,t){if(e==="input"||e==="change")return Za(t)}function qb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var fn=typeof Object.is=="function"?Object.is:qb;function Ao(e,t){if(fn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Tc.call(t,i)||!fn(e[i],t[i]))return!1}return!0}function Of(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $f(e,t){var n=Of(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Of(n)}}function mx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?mx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gx(){for(var e=window,t=ua();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ua(e.document)}return t}function md(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Jb(e){var t=gx(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&mx(n.ownerDocument.documentElement,n)){if(r!==null&&md(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=$f(n,s);var a=$f(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Kb=On&&"documentMode"in document&&11>=document.documentMode,Xr=null,Gc=null,ho=null,Yc=!1;function Df(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yc||Xr==null||Xr!==ua(r)||(r=Xr,"selectionStart"in r&&md(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ho&&Ao(ho,r)||(ho=r,r=xa(Gc,"onSelect"),0<r.length&&(t=new pd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xr)))}function js(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Zr={animationend:js("Animation","AnimationEnd"),animationiteration:js("Animation","AnimationIteration"),animationstart:js("Animation","AnimationStart"),transitionend:js("Transition","TransitionEnd")},Fl={},xx={};On&&(xx=document.createElement("div").style,"AnimationEvent"in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),"TransitionEvent"in window||delete Zr.transitionend.transition);function el(e){if(Fl[e])return Fl[e];if(!Zr[e])return e;var t=Zr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xx)return Fl[e]=t[n];return e}var yx=el("animationend"),vx=el("animationiteration"),bx=el("animationstart"),wx=el("transitionend"),kx=new Map,Ff="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(e,t){kx.set(e,t),Br(t,[e])}for(var Bl=0;Bl<Ff.length;Bl++){var Ul=Ff[Bl],Gb=Ul.toLowerCase(),Yb=Ul[0].toUpperCase()+Ul.slice(1);gr(Gb,"on"+Yb)}gr(yx,"onAnimationEnd");gr(vx,"onAnimationIteration");gr(bx,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(wx,"onTransitionEnd");yi("onMouseEnter",["mouseout","mouseover"]);yi("onMouseLeave",["mouseout","mouseover"]);yi("onPointerEnter",["pointerout","pointerover"]);yi("onPointerLeave",["pointerout","pointerover"]);Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Br("onBeforeInput",["compositionend","keypress","textInput","paste"]);Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qb=new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));function Bf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,G0(r,t,void 0,e),e.currentTarget=null}function _x(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;Bf(i,l,u),s=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;Bf(i,l,u),s=c}}}if(pa)throw e=Hc,pa=!1,Hc=null,e}function De(e,t){var n=t[tu];n===void 0&&(n=t[tu]=new Set);var r=e+"__bubble";n.has(r)||(jx(t,e,2,!1),n.add(r))}function Wl(e,t,n){var r=0;t&&(r|=4),jx(n,e,r,t)}var Ss="_reactListening"+Math.random().toString(36).slice(2);function Mo(e){if(!e[Ss]){e[Ss]=!0,Ag.forEach(function(n){n!=="selectionchange"&&(Qb.has(n)||Wl(n,!1,e),Wl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ss]||(t[Ss]=!0,Wl("selectionchange",!1,t))}}function jx(e,t,n,r){switch(ax(t)){case 1:var i=db;break;case 4:i=pb;break;default:i=ud}n=i.bind(null,t,n,e),i=void 0,!Vc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Vl(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=jr(l),a===null)return;if(c=a.tag,c===5||c===6){r=s=a;continue e}l=l.parentNode}}r=r.return}Jg(function(){var u=s,d=sd(n),p=[];e:{var f=kx.get(e);if(f!==void 0){var h=pd,m=e;switch(e){case"keypress":if(Js(n)===0)break e;case"keydown":case"keyup":h=Nb;break;case"focusin":m="focus",h=Ol;break;case"focusout":m="blur",h=Ol;break;case"beforeblur":case"afterblur":h=Ol;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=mb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Tb;break;case yx:case vx:case bx:h=yb;break;case wx:h=Mb;break;case"scroll":h=fb;break;case"wheel":h=Lb;break;case"copy":case"cut":case"paste":h=bb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Af}var b=(t&4)!==0,_=!b&&e==="scroll",g=b?f!==null?f+"Capture":null:f;b=[];for(var x=u,y;x!==null;){y=x;var j=y.stateNode;if(y.tag===5&&j!==null&&(y=j,g!==null&&(j=Co(x,g),j!=null&&b.push(Po(x,j,y)))),_)break;x=x.return}0<b.length&&(f=new h(f,m,null,n,d),p.push({event:f,listeners:b}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==Uc&&(m=n.relatedTarget||n.fromElement)&&(jr(m)||m[$n]))break e;if((h||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=u,m=m?jr(m):null,m!==null&&(_=Ur(m),m!==_||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=u),h!==m)){if(b=zf,j="onMouseLeave",g="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(b=Af,j="onPointerLeave",g="onPointerEnter",x="pointer"),_=h==null?f:ei(h),y=m==null?f:ei(m),f=new b(j,x+"leave",h,n,d),f.target=_,f.relatedTarget=y,j=null,jr(d)===u&&(b=new b(g,x+"enter",m,n,d),b.target=y,b.relatedTarget=_,j=b),_=j,h&&m)t:{for(b=h,g=m,x=0,y=b;y;y=qr(y))x++;for(y=0,j=g;j;j=qr(j))y++;for(;0<x-y;)b=qr(b),x--;for(;0<y-x;)g=qr(g),y--;for(;x--;){if(b===g||g!==null&&b===g.alternate)break t;b=qr(b),g=qr(g)}b=null}else b=null;h!==null&&Uf(p,f,h,b,!1),m!==null&&_!==null&&Uf(p,_,m,b,!0)}}e:{if(f=u?ei(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var T=Bb;else if(Lf(f))if(fx)T=Hb;else{T=Wb;var S=Ub}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=Vb);if(T&&(T=T(e,u))){px(p,T,n,d);break e}S&&S(e,f,u),e==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&Oc(f,"number",f.value)}switch(S=u?ei(u):window,e){case"focusin":(Lf(S)||S.contentEditable==="true")&&(Xr=S,Gc=u,ho=null);break;case"focusout":ho=Gc=Xr=null;break;case"mousedown":Yc=!0;break;case"contextmenu":case"mouseup":case"dragend":Yc=!1,Df(p,n,d);break;case"selectionchange":if(Kb)break;case"keydown":case"keyup":Df(p,n,d)}var L;if(hd)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Qr?ux(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(cx&&n.locale!=="ko"&&(Qr||N!=="onCompositionStart"?N==="onCompositionEnd"&&Qr&&(L=lx()):(Xn=d,dd="value"in Xn?Xn.value:Xn.textContent,Qr=!0)),S=xa(u,N),0<S.length&&(N=new Tf(N,e,null,n,d),p.push({event:N,listeners:S}),L?N.data=L:(L=dx(n),L!==null&&(N.data=L)))),(L=Ib?Ob(e,n):$b(e,n))&&(u=xa(u,"onBeforeInput"),0<u.length&&(d=new Tf("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=L))}_x(p,t)})}function Po(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xa(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Co(e,n),s!=null&&r.unshift(Po(e,s,i)),s=Co(e,t),s!=null&&r.push(Po(e,s,i))),e=e.return}return r}function qr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Uf(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Co(n,s),c!=null&&a.unshift(Po(n,c,l))):i||(c=Co(n,s),c!=null&&a.push(Po(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Xb=/\r\n?/g,Zb=/\u0000|\uFFFD/g;function Wf(e){return(typeof e=="string"?e:""+e).replace(Xb,`
`).replace(Zb,"")}function Cs(e,t,n){if(t=Wf(t),Wf(e)!==t&&n)throw Error(ce(425))}function ya(){}var Qc=null,Xc=null;function Zc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var eu=typeof setTimeout=="function"?setTimeout:void 0,ew=typeof clearTimeout=="function"?clearTimeout:void 0,Vf=typeof Promise=="function"?Promise:void 0,tw=typeof queueMicrotask=="function"?queueMicrotask:typeof Vf<"u"?function(e){return Vf.resolve(null).then(e).catch(nw)}:eu;function nw(e){setTimeout(function(){throw e})}function Hl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),zo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zo(t)}function sr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mi=Math.random().toString(36).slice(2),yn="__reactFiber$"+Mi,Lo="__reactProps$"+Mi,$n="__reactContainer$"+Mi,tu="__reactEvents$"+Mi,rw="__reactListeners$"+Mi,iw="__reactHandles$"+Mi;function jr(e){var t=e[yn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$n]||n[yn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hf(e);e!==null;){if(n=e[yn])return n;e=Hf(e)}return t}e=n,n=e.parentNode}return null}function es(e){return e=e[yn]||e[$n],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ei(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(ce(33))}function tl(e){return e[Lo]||null}var nu=[],ti=-1;function xr(e){return{current:e}}function Fe(e){0>ti||(e.current=nu[ti],nu[ti]=null,ti--)}function Oe(e,t){ti++,nu[ti]=e.current,e.current=t}var fr={},mt=xr(fr),Tt=xr(!1),Lr=fr;function vi(e,t){var n=e.type.contextTypes;if(!n)return fr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function At(e){return e=e.childContextTypes,e!=null}function va(){Fe(Tt),Fe(mt)}function qf(e,t,n){if(mt.current!==fr)throw Error(ce(168));Oe(mt,t),Oe(Tt,n)}function Sx(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(ce(108,U0(e)||"Unknown",i));return He({},n,r)}function ba(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fr,Lr=mt.current,Oe(mt,e),Oe(Tt,Tt.current),!0}function Jf(e,t,n){var r=e.stateNode;if(!r)throw Error(ce(169));n?(e=Sx(e,t,Lr),r.__reactInternalMemoizedMergedChildContext=e,Fe(Tt),Fe(mt),Oe(mt,e)):Fe(Tt),Oe(Tt,n)}var An=null,nl=!1,ql=!1;function Cx(e){An===null?An=[e]:An.push(e)}function ow(e){nl=!0,Cx(e)}function yr(){if(!ql&&An!==null){ql=!0;var e=0,t=Le;try{var n=An;for(Le=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}An=null,nl=!1}catch(i){throw An!==null&&(An=An.slice(e+1)),Qg(ad,yr),i}finally{Le=t,ql=!1}}return null}var ni=[],ri=0,wa=null,ka=0,Gt=[],Yt=0,Rr=null,Mn=1,Pn="";function wr(e,t){ni[ri++]=ka,ni[ri++]=wa,wa=e,ka=t}function Nx(e,t,n){Gt[Yt++]=Mn,Gt[Yt++]=Pn,Gt[Yt++]=Rr,Rr=e;var r=Mn;e=Pn;var i=32-un(r)-1;r&=~(1<<i),n+=1;var s=32-un(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Mn=1<<32-un(t)+i|n<<i|r,Pn=s+e}else Mn=1<<s|n<<i|r,Pn=e}function gd(e){e.return!==null&&(wr(e,1),Nx(e,1,0))}function xd(e){for(;e===wa;)wa=ni[--ri],ni[ri]=null,ka=ni[--ri],ni[ri]=null;for(;e===Rr;)Rr=Gt[--Yt],Gt[Yt]=null,Pn=Gt[--Yt],Gt[Yt]=null,Mn=Gt[--Yt],Gt[Yt]=null}var Vt=null,Bt=null,Be=!1,ln=null;function Ex(e,t){var n=Xt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Kf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Vt=e,Bt=sr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Vt=e,Bt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Rr!==null?{id:Mn,overflow:Pn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Xt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Vt=e,Bt=null,!0):!1;default:return!1}}function ru(e){return(e.mode&1)!==0&&(e.flags&128)===0}function iu(e){if(Be){var t=Bt;if(t){var n=t;if(!Kf(e,t)){if(ru(e))throw Error(ce(418));t=sr(n.nextSibling);var r=Vt;t&&Kf(e,t)?Ex(r,n):(e.flags=e.flags&-4097|2,Be=!1,Vt=e)}}else{if(ru(e))throw Error(ce(418));e.flags=e.flags&-4097|2,Be=!1,Vt=e}}}function Gf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Vt=e}function Ns(e){if(e!==Vt)return!1;if(!Be)return Gf(e),Be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zc(e.type,e.memoizedProps)),t&&(t=Bt)){if(ru(e))throw zx(),Error(ce(418));for(;t;)Ex(e,t),t=sr(t.nextSibling)}if(Gf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(ce(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Bt=sr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Bt=null}}else Bt=Vt?sr(e.stateNode.nextSibling):null;return!0}function zx(){for(var e=Bt;e;)e=sr(e.nextSibling)}function bi(){Bt=Vt=null,Be=!1}function yd(e){ln===null?ln=[e]:ln.push(e)}var sw=Wn.ReactCurrentBatchConfig;function qi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var r=n.stateNode}if(!r)throw Error(ce(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,e))}return e}function Es(e,t){throw e=Object.prototype.toString.call(t),Error(ce(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Yf(e){var t=e._init;return t(e._payload)}function Tx(e){function t(g,x){if(e){var y=g.deletions;y===null?(g.deletions=[x],g.flags|=16):y.push(x)}}function n(g,x){if(!e)return null;for(;x!==null;)t(g,x),x=x.sibling;return null}function r(g,x){for(g=new Map;x!==null;)x.key!==null?g.set(x.key,x):g.set(x.index,x),x=x.sibling;return g}function i(g,x){return g=ur(g,x),g.index=0,g.sibling=null,g}function s(g,x,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<x?(g.flags|=2,x):y):(g.flags|=2,x)):(g.flags|=1048576,x)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,x,y,j){return x===null||x.tag!==6?(x=Zl(y,g.mode,j),x.return=g,x):(x=i(x,y),x.return=g,x)}function c(g,x,y,j){var T=y.type;return T===Yr?d(g,x,y.props.children,j,y.key):x!==null&&(x.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Jn&&Yf(T)===x.type)?(j=i(x,y.props),j.ref=qi(g,x,y),j.return=g,j):(j=ea(y.type,y.key,y.props,null,g.mode,j),j.ref=qi(g,x,y),j.return=g,j)}function u(g,x,y,j){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=ec(y,g.mode,j),x.return=g,x):(x=i(x,y.children||[]),x.return=g,x)}function d(g,x,y,j,T){return x===null||x.tag!==7?(x=zr(y,g.mode,j,T),x.return=g,x):(x=i(x,y),x.return=g,x)}function p(g,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Zl(""+x,g.mode,y),x.return=g,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case xs:return y=ea(x.type,x.key,x.props,null,g.mode,y),y.ref=qi(g,null,x),y.return=g,y;case Gr:return x=ec(x,g.mode,y),x.return=g,x;case Jn:var j=x._init;return p(g,j(x._payload),y)}if(ro(x)||Bi(x))return x=zr(x,g.mode,y,null),x.return=g,x;Es(g,x)}return null}function f(g,x,y,j){var T=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:l(g,x,""+y,j);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case xs:return y.key===T?c(g,x,y,j):null;case Gr:return y.key===T?u(g,x,y,j):null;case Jn:return T=y._init,f(g,x,T(y._payload),j)}if(ro(y)||Bi(y))return T!==null?null:d(g,x,y,j,null);Es(g,y)}return null}function h(g,x,y,j,T){if(typeof j=="string"&&j!==""||typeof j=="number")return g=g.get(y)||null,l(x,g,""+j,T);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case xs:return g=g.get(j.key===null?y:j.key)||null,c(x,g,j,T);case Gr:return g=g.get(j.key===null?y:j.key)||null,u(x,g,j,T);case Jn:var S=j._init;return h(g,x,y,S(j._payload),T)}if(ro(j)||Bi(j))return g=g.get(y)||null,d(x,g,j,T,null);Es(x,j)}return null}function m(g,x,y,j){for(var T=null,S=null,L=x,N=x=0,W=null;L!==null&&N<y.length;N++){L.index>N?(W=L,L=null):W=L.sibling;var E=f(g,L,y[N],j);if(E===null){L===null&&(L=W);break}e&&L&&E.alternate===null&&t(g,L),x=s(E,x,N),S===null?T=E:S.sibling=E,S=E,L=W}if(N===y.length)return n(g,L),Be&&wr(g,N),T;if(L===null){for(;N<y.length;N++)L=p(g,y[N],j),L!==null&&(x=s(L,x,N),S===null?T=L:S.sibling=L,S=L);return Be&&wr(g,N),T}for(L=r(g,L);N<y.length;N++)W=h(L,g,N,y[N],j),W!==null&&(e&&W.alternate!==null&&L.delete(W.key===null?N:W.key),x=s(W,x,N),S===null?T=W:S.sibling=W,S=W);return e&&L.forEach(function(O){return t(g,O)}),Be&&wr(g,N),T}function b(g,x,y,j){var T=Bi(y);if(typeof T!="function")throw Error(ce(150));if(y=T.call(y),y==null)throw Error(ce(151));for(var S=T=null,L=x,N=x=0,W=null,E=y.next();L!==null&&!E.done;N++,E=y.next()){L.index>N?(W=L,L=null):W=L.sibling;var O=f(g,L,E.value,j);if(O===null){L===null&&(L=W);break}e&&L&&O.alternate===null&&t(g,L),x=s(O,x,N),S===null?T=O:S.sibling=O,S=O,L=W}if(E.done)return n(g,L),Be&&wr(g,N),T;if(L===null){for(;!E.done;N++,E=y.next())E=p(g,E.value,j),E!==null&&(x=s(E,x,N),S===null?T=E:S.sibling=E,S=E);return Be&&wr(g,N),T}for(L=r(g,L);!E.done;N++,E=y.next())E=h(L,g,N,E.value,j),E!==null&&(e&&E.alternate!==null&&L.delete(E.key===null?N:E.key),x=s(E,x,N),S===null?T=E:S.sibling=E,S=E);return e&&L.forEach(function(F){return t(g,F)}),Be&&wr(g,N),T}function _(g,x,y,j){if(typeof y=="object"&&y!==null&&y.type===Yr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case xs:e:{for(var T=y.key,S=x;S!==null;){if(S.key===T){if(T=y.type,T===Yr){if(S.tag===7){n(g,S.sibling),x=i(S,y.props.children),x.return=g,g=x;break e}}else if(S.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Jn&&Yf(T)===S.type){n(g,S.sibling),x=i(S,y.props),x.ref=qi(g,S,y),x.return=g,g=x;break e}n(g,S);break}else t(g,S);S=S.sibling}y.type===Yr?(x=zr(y.props.children,g.mode,j,y.key),x.return=g,g=x):(j=ea(y.type,y.key,y.props,null,g.mode,j),j.ref=qi(g,x,y),j.return=g,g=j)}return a(g);case Gr:e:{for(S=y.key;x!==null;){if(x.key===S)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){n(g,x.sibling),x=i(x,y.children||[]),x.return=g,g=x;break e}else{n(g,x);break}else t(g,x);x=x.sibling}x=ec(y,g.mode,j),x.return=g,g=x}return a(g);case Jn:return S=y._init,_(g,x,S(y._payload),j)}if(ro(y))return m(g,x,y,j);if(Bi(y))return b(g,x,y,j);Es(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(n(g,x.sibling),x=i(x,y),x.return=g,g=x):(n(g,x),x=Zl(y,g.mode,j),x.return=g,g=x),a(g)):n(g,x)}return _}var wi=Tx(!0),Ax=Tx(!1),_a=xr(null),ja=null,ii=null,vd=null;function bd(){vd=ii=ja=null}function wd(e){var t=_a.current;Fe(_a),e._currentValue=t}function ou(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pi(e,t){ja=e,vd=ii=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Et=!0),e.firstContext=null)}function nn(e){var t=e._currentValue;if(vd!==e)if(e={context:e,memoizedValue:t,next:null},ii===null){if(ja===null)throw Error(ce(308));ii=e,ja.dependencies={lanes:0,firstContext:e}}else ii=ii.next=e;return t}var Sr=null;function kd(e){Sr===null?Sr=[e]:Sr.push(e)}function Mx(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,kd(t)):(n.next=i.next,i.next=n),t.interleaved=n,Dn(e,r)}function Dn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Kn=!1;function _d(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Px(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Rn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ar(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Te&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Dn(e,n)}return i=r.interleaved,i===null?(t.next=t,kd(r)):(t.next=i.next,i.next=t),r.interleaved=t,Dn(e,n)}function Ks(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ld(e,n)}}function Qf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Sa(e,t,n,r){var i=e.updateQueue;Kn=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(s!==null){var p=i.baseState;a=0,d=u=c=null,l=s;do{var f=l.lane,h=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,b=l;switch(f=t,h=n,b.tag){case 1:if(m=b.payload,typeof m=="function"){p=m.call(h,p,f);break e}p=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=b.payload,f=typeof m=="function"?m.call(h,p,f):m,f==null)break e;p=He({},p,f);break e;case 2:Kn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else h={eventTime:h,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=h,c=p):d=d.next=h,a|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Or|=a,e.lanes=a,e.memoizedState=p}}function Xf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(ce(191,i));i.call(r)}}}var ts={},kn=xr(ts),Ro=xr(ts),Io=xr(ts);function Cr(e){if(e===ts)throw Error(ce(174));return e}function jd(e,t){switch(Oe(Io,t),Oe(Ro,e),Oe(kn,ts),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Dc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Dc(t,e)}Fe(kn),Oe(kn,t)}function ki(){Fe(kn),Fe(Ro),Fe(Io)}function Lx(e){Cr(Io.current);var t=Cr(kn.current),n=Dc(t,e.type);t!==n&&(Oe(Ro,e),Oe(kn,n))}function Sd(e){Ro.current===e&&(Fe(kn),Fe(Ro))}var We=xr(0);function Ca(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jl=[];function Cd(){for(var e=0;e<Jl.length;e++)Jl[e]._workInProgressVersionPrimary=null;Jl.length=0}var Gs=Wn.ReactCurrentDispatcher,Kl=Wn.ReactCurrentBatchConfig,Ir=0,Ve=null,et=null,it=null,Na=!1,mo=!1,Oo=0,aw=0;function pt(){throw Error(ce(321))}function Nd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!fn(e[n],t[n]))return!1;return!0}function Ed(e,t,n,r,i,s){if(Ir=s,Ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gs.current=e===null||e.memoizedState===null?dw:pw,e=n(r,i),mo){s=0;do{if(mo=!1,Oo=0,25<=s)throw Error(ce(301));s+=1,it=et=null,t.updateQueue=null,Gs.current=fw,e=n(r,i)}while(mo)}if(Gs.current=Ea,t=et!==null&&et.next!==null,Ir=0,it=et=Ve=null,Na=!1,t)throw Error(ce(300));return e}function zd(){var e=Oo!==0;return Oo=0,e}function gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?Ve.memoizedState=it=e:it=it.next=e,it}function rn(){if(et===null){var e=Ve.alternate;e=e!==null?e.memoizedState:null}else e=et.next;var t=it===null?Ve.memoizedState:it.next;if(t!==null)it=t,et=e;else{if(e===null)throw Error(ce(310));et=e,e={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},it===null?Ve.memoizedState=it=e:it=it.next=e}return it}function $o(e,t){return typeof t=="function"?t(e):t}function Gl(e){var t=rn(),n=t.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=e;var r=et,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,c=null,u=s;do{var d=u.lane;if((Ir&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,a=r):c=c.next=p,Ve.lanes|=d,Or|=d}u=u.next}while(u!==null&&u!==s);c===null?a=r:c.next=l,fn(r,t.memoizedState)||(Et=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Ve.lanes|=s,Or|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Yl(e){var t=rn(),n=t.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);fn(s,t.memoizedState)||(Et=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Rx(){}function Ix(e,t){var n=Ve,r=rn(),i=t(),s=!fn(r.memoizedState,i);if(s&&(r.memoizedState=i,Et=!0),r=r.queue,Td(Dx.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||it!==null&&it.memoizedState.tag&1){if(n.flags|=2048,Do(9,$x.bind(null,n,r,i,t),void 0,null),ot===null)throw Error(ce(349));Ir&30||Ox(n,t,i)}return i}function Ox(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ve.updateQueue,t===null?(t={lastEffect:null,stores:null},Ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function $x(e,t,n,r){t.value=n,t.getSnapshot=r,Fx(t)&&Bx(e)}function Dx(e,t,n){return n(function(){Fx(t)&&Bx(e)})}function Fx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!fn(e,n)}catch{return!0}}function Bx(e){var t=Dn(e,1);t!==null&&dn(t,e,1,-1)}function Zf(e){var t=gn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:e},t.queue=e,e=e.dispatch=uw.bind(null,Ve,e),[t.memoizedState,e]}function Do(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ve.updateQueue,t===null?(t={lastEffect:null,stores:null},Ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ux(){return rn().memoizedState}function Ys(e,t,n,r){var i=gn();Ve.flags|=e,i.memoizedState=Do(1|t,n,void 0,r===void 0?null:r)}function rl(e,t,n,r){var i=rn();r=r===void 0?null:r;var s=void 0;if(et!==null){var a=et.memoizedState;if(s=a.destroy,r!==null&&Nd(r,a.deps)){i.memoizedState=Do(t,n,s,r);return}}Ve.flags|=e,i.memoizedState=Do(1|t,n,s,r)}function eh(e,t){return Ys(8390656,8,e,t)}function Td(e,t){return rl(2048,8,e,t)}function Wx(e,t){return rl(4,2,e,t)}function Vx(e,t){return rl(4,4,e,t)}function Hx(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qx(e,t,n){return n=n!=null?n.concat([e]):null,rl(4,4,Hx.bind(null,t,e),n)}function Ad(){}function Jx(e,t){var n=rn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Kx(e,t){var n=rn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Gx(e,t,n){return Ir&21?(fn(n,t)||(n=ex(),Ve.lanes|=n,Or|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Et=!0),e.memoizedState=n)}function lw(e,t){var n=Le;Le=n!==0&&4>n?n:4,e(!0);var r=Kl.transition;Kl.transition={};try{e(!1),t()}finally{Le=n,Kl.transition=r}}function Yx(){return rn().memoizedState}function cw(e,t,n){var r=cr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qx(e))Xx(t,n);else if(n=Mx(e,t,n,r),n!==null){var i=wt();dn(n,e,r,i),Zx(n,t,r)}}function uw(e,t,n){var r=cr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qx(e))Xx(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,fn(l,a)){var c=t.interleaved;c===null?(i.next=i,kd(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Mx(e,t,i,r),n!==null&&(i=wt(),dn(n,e,r,i),Zx(n,t,r))}}function Qx(e){var t=e.alternate;return e===Ve||t!==null&&t===Ve}function Xx(e,t){mo=Na=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ld(e,n)}}var Ea={readContext:nn,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},dw={readContext:nn,useCallback:function(e,t){return gn().memoizedState=[e,t===void 0?null:t],e},useContext:nn,useEffect:eh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ys(4194308,4,Hx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ys(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ys(4,2,e,t)},useMemo:function(e,t){var n=gn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=cw.bind(null,Ve,e),[r.memoizedState,e]},useRef:function(e){var t=gn();return e={current:e},t.memoizedState=e},useState:Zf,useDebugValue:Ad,useDeferredValue:function(e){return gn().memoizedState=e},useTransition:function(){var e=Zf(!1),t=e[0];return e=lw.bind(null,e[1]),gn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ve,i=gn();if(Be){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=t(),ot===null)throw Error(ce(349));Ir&30||Ox(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,eh(Dx.bind(null,r,s,e),[e]),r.flags|=2048,Do(9,$x.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=gn(),t=ot.identifierPrefix;if(Be){var n=Pn,r=Mn;n=(r&~(1<<32-un(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Oo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=aw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pw={readContext:nn,useCallback:Jx,useContext:nn,useEffect:Td,useImperativeHandle:qx,useInsertionEffect:Wx,useLayoutEffect:Vx,useMemo:Kx,useReducer:Gl,useRef:Ux,useState:function(){return Gl($o)},useDebugValue:Ad,useDeferredValue:function(e){var t=rn();return Gx(t,et.memoizedState,e)},useTransition:function(){var e=Gl($o)[0],t=rn().memoizedState;return[e,t]},useMutableSource:Rx,useSyncExternalStore:Ix,useId:Yx,unstable_isNewReconciler:!1},fw={readContext:nn,useCallback:Jx,useContext:nn,useEffect:Td,useImperativeHandle:qx,useInsertionEffect:Wx,useLayoutEffect:Vx,useMemo:Kx,useReducer:Yl,useRef:Ux,useState:function(){return Yl($o)},useDebugValue:Ad,useDeferredValue:function(e){var t=rn();return et===null?t.memoizedState=e:Gx(t,et.memoizedState,e)},useTransition:function(){var e=Yl($o)[0],t=rn().memoizedState;return[e,t]},useMutableSource:Rx,useSyncExternalStore:Ix,useId:Yx,unstable_isNewReconciler:!1};function sn(e,t){if(e&&e.defaultProps){t=He({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function su(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:He({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var il={isMounted:function(e){return(e=e._reactInternals)?Ur(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=wt(),i=cr(e),s=Rn(r,i);s.payload=t,n!=null&&(s.callback=n),t=ar(e,s,i),t!==null&&(dn(t,e,i,r),Ks(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=wt(),i=cr(e),s=Rn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ar(e,s,i),t!==null&&(dn(t,e,i,r),Ks(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=wt(),r=cr(e),i=Rn(n,r);i.tag=2,t!=null&&(i.callback=t),t=ar(e,i,r),t!==null&&(dn(t,e,r,n),Ks(t,e,r))}};function th(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!Ao(n,r)||!Ao(i,s):!0}function ey(e,t,n){var r=!1,i=fr,s=t.contextType;return typeof s=="object"&&s!==null?s=nn(s):(i=At(t)?Lr:mt.current,r=t.contextTypes,s=(r=r!=null)?vi(e,i):fr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=il,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function nh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&il.enqueueReplaceState(t,t.state,null)}function au(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},_d(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=nn(s):(s=At(t)?Lr:mt.current,i.context=vi(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(su(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&il.enqueueReplaceState(i,i.state,null),Sa(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function _i(e,t){try{var n="",r=t;do n+=B0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Ql(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function lu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hw=typeof WeakMap=="function"?WeakMap:Map;function ty(e,t,n){n=Rn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ta||(Ta=!0,yu=r),lu(e,t)},n}function ny(e,t,n){n=Rn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){lu(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){lu(e,t),typeof r!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function rh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new hw;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ew.bind(null,e,t,n),t.then(e,e))}function ih(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function oh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Rn(-1,1),t.tag=2,ar(n,t,1))),n.lanes|=1),e)}var mw=Wn.ReactCurrentOwner,Et=!1;function yt(e,t,n,r){t.child=e===null?Ax(t,null,n,r):wi(t,e.child,n,r)}function sh(e,t,n,r,i){n=n.render;var s=t.ref;return pi(t,i),r=Ed(e,t,n,r,s,i),n=zd(),e!==null&&!Et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Fn(e,t,i)):(Be&&n&&gd(t),t.flags|=1,yt(e,t,r,i),t.child)}function ah(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Dd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,ry(e,t,s,r,i)):(e=ea(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ao,n(a,r)&&e.ref===t.ref)return Fn(e,t,i)}return t.flags|=1,e=ur(s,r),e.ref=t.ref,e.return=t,t.child=e}function ry(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Ao(s,r)&&e.ref===t.ref)if(Et=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Et=!0);else return t.lanes=e.lanes,Fn(e,t,i)}return cu(e,t,n,r,i)}function iy(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Oe(si,$t),$t|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Oe(si,$t),$t|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Oe(si,$t),$t|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Oe(si,$t),$t|=r;return yt(e,t,i,n),t.child}function oy(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function cu(e,t,n,r,i){var s=At(n)?Lr:mt.current;return s=vi(t,s),pi(t,i),n=Ed(e,t,n,r,s,i),r=zd(),e!==null&&!Et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Fn(e,t,i)):(Be&&r&&gd(t),t.flags|=1,yt(e,t,n,i),t.child)}function lh(e,t,n,r,i){if(At(n)){var s=!0;ba(t)}else s=!1;if(pi(t,i),t.stateNode===null)Qs(e,t),ey(t,n,r),au(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=nn(u):(u=At(n)?Lr:mt.current,u=vi(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&nh(t,a,r,u),Kn=!1;var f=t.memoizedState;a.state=f,Sa(t,r,a,i),c=t.memoizedState,l!==r||f!==c||Tt.current||Kn?(typeof d=="function"&&(su(t,n,d,r),c=t.memoizedState),(l=Kn||th(t,n,l,r,f,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Px(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:sn(t.type,l),a.props=u,p=t.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=nn(c):(c=At(n)?Lr:mt.current,c=vi(t,c));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||f!==c)&&nh(t,a,r,c),Kn=!1,f=t.memoizedState,a.state=f,Sa(t,r,a,i);var m=t.memoizedState;l!==p||f!==m||Tt.current||Kn?(typeof h=="function"&&(su(t,n,h,r),m=t.memoizedState),(u=Kn||th(t,n,u,r,f,m,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,m,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,m,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return uu(e,t,n,r,s,i)}function uu(e,t,n,r,i,s){oy(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Jf(t,n,!1),Fn(e,t,s);r=t.stateNode,mw.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=wi(t,e.child,null,s),t.child=wi(t,null,l,s)):yt(e,t,l,s),t.memoizedState=r.state,i&&Jf(t,n,!0),t.child}function sy(e){var t=e.stateNode;t.pendingContext?qf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qf(e,t.context,!1),jd(e,t.containerInfo)}function ch(e,t,n,r,i){return bi(),yd(i),t.flags|=256,yt(e,t,n,r),t.child}var du={dehydrated:null,treeContext:null,retryLane:0};function pu(e){return{baseLanes:e,cachePool:null,transitions:null}}function ay(e,t,n){var r=t.pendingProps,i=We.current,s=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Oe(We,i&1),e===null)return iu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=al(a,r,0,null),e=zr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=pu(n),t.memoizedState=du,e):Md(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return gw(e,t,a,r,l,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=ur(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ur(l,s):(s=zr(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?pu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=du,r}return s=e.child,e=s.sibling,r=ur(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Md(e,t){return t=al({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zs(e,t,n,r){return r!==null&&yd(r),wi(t,e.child,null,n),e=Md(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gw(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=Ql(Error(ce(422))),zs(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=al({mode:"visible",children:r.children},i,0,null),s=zr(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&wi(t,e.child,null,a),t.child.memoizedState=pu(a),t.memoizedState=du,s);if(!(t.mode&1))return zs(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(ce(419)),r=Ql(s,r,void 0),zs(e,t,a,r)}if(l=(a&e.childLanes)!==0,Et||l){if(r=ot,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Dn(e,i),dn(r,e,i,-1))}return $d(),r=Ql(Error(ce(421))),zs(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=zw.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Bt=sr(i.nextSibling),Vt=t,Be=!0,ln=null,e!==null&&(Gt[Yt++]=Mn,Gt[Yt++]=Pn,Gt[Yt++]=Rr,Mn=e.id,Pn=e.overflow,Rr=t),t=Md(t,r.children),t.flags|=4096,t)}function uh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ou(e.return,t,n)}function Xl(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ly(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(yt(e,t,r.children,n),r=We.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uh(e,n,t);else if(e.tag===19)uh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Oe(We,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ca(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Xl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ca(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Xl(t,!0,n,null,s);break;case"together":Xl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Fn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Or|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(ce(153));if(t.child!==null){for(e=t.child,n=ur(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ur(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function xw(e,t,n){switch(t.tag){case 3:sy(t),bi();break;case 5:Lx(t);break;case 1:At(t.type)&&ba(t);break;case 4:jd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Oe(_a,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Oe(We,We.current&1),t.flags|=128,null):n&t.child.childLanes?ay(e,t,n):(Oe(We,We.current&1),e=Fn(e,t,n),e!==null?e.sibling:null);Oe(We,We.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ly(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Oe(We,We.current),r)break;return null;case 22:case 23:return t.lanes=0,iy(e,t,n)}return Fn(e,t,n)}var cy,fu,uy,dy;cy=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fu=function(){};uy=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Cr(kn.current);var s=null;switch(n){case"input":i=Rc(e,i),r=Rc(e,r),s=[];break;case"select":i=He({},i,{value:void 0}),r=He({},r,{value:void 0}),s=[];break;case"textarea":i=$c(e,i),r=$c(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ya)}Fc(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(jo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(jo.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&De("scroll",e),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};dy=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ji(e,t){if(!Be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ft(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function yw(e,t,n){var r=t.pendingProps;switch(xd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(t),null;case 1:return At(t.type)&&va(),ft(t),null;case 3:return r=t.stateNode,ki(),Fe(Tt),Fe(mt),Cd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ns(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ln!==null&&(wu(ln),ln=null))),fu(e,t),ft(t),null;case 5:Sd(t);var i=Cr(Io.current);if(n=t.type,e!==null&&t.stateNode!=null)uy(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(ce(166));return ft(t),null}if(e=Cr(kn.current),Ns(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[yn]=t,r[Lo]=s,e=(t.mode&1)!==0,n){case"dialog":De("cancel",r),De("close",r);break;case"iframe":case"object":case"embed":De("load",r);break;case"video":case"audio":for(i=0;i<oo.length;i++)De(oo[i],r);break;case"source":De("error",r);break;case"img":case"image":case"link":De("error",r),De("load",r);break;case"details":De("toggle",r);break;case"input":vf(r,s),De("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},De("invalid",r);break;case"textarea":wf(r,s),De("invalid",r)}Fc(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Cs(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Cs(r.textContent,l,e),i=["children",""+l]):jo.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&De("scroll",r)}switch(n){case"input":ys(r),bf(r,s,!0);break;case"textarea":ys(r),kf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ya)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Dg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[yn]=t,e[Lo]=r,cy(e,t,!1,!1),t.stateNode=e;e:{switch(a=Bc(n,r),n){case"dialog":De("cancel",e),De("close",e),i=r;break;case"iframe":case"object":case"embed":De("load",e),i=r;break;case"video":case"audio":for(i=0;i<oo.length;i++)De(oo[i],e);i=r;break;case"source":De("error",e),i=r;break;case"img":case"image":case"link":De("error",e),De("load",e),i=r;break;case"details":De("toggle",e),i=r;break;case"input":vf(e,r),i=Rc(e,r),De("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=He({},r,{value:void 0}),De("invalid",e);break;case"textarea":wf(e,r),i=$c(e,r),De("invalid",e);break;default:i=r}Fc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?Ug(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Fg(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&So(e,c):typeof c=="number"&&So(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(jo.hasOwnProperty(s)?c!=null&&s==="onScroll"&&De("scroll",e):c!=null&&nd(e,s,c,a))}switch(n){case"input":ys(e),bf(e,r,!1);break;case"textarea":ys(e),kf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pr(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?li(e,!!r.multiple,s,!1):r.defaultValue!=null&&li(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ya)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ft(t),null;case 6:if(e&&t.stateNode!=null)dy(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(ce(166));if(n=Cr(Io.current),Cr(kn.current),Ns(t)){if(r=t.stateNode,n=t.memoizedProps,r[yn]=t,(s=r.nodeValue!==n)&&(e=Vt,e!==null))switch(e.tag){case 3:Cs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Cs(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yn]=t,t.stateNode=r}return ft(t),null;case 13:if(Fe(We),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Be&&Bt!==null&&t.mode&1&&!(t.flags&128))zx(),bi(),t.flags|=98560,s=!1;else if(s=Ns(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(ce(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[yn]=t}else bi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ft(t),s=!1}else ln!==null&&(wu(ln),ln=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||We.current&1?tt===0&&(tt=3):$d())),t.updateQueue!==null&&(t.flags|=4),ft(t),null);case 4:return ki(),fu(e,t),e===null&&Mo(t.stateNode.containerInfo),ft(t),null;case 10:return wd(t.type._context),ft(t),null;case 17:return At(t.type)&&va(),ft(t),null;case 19:if(Fe(We),s=t.memoizedState,s===null)return ft(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)Ji(s,!1);else{if(tt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ca(e),a!==null){for(t.flags|=128,Ji(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Oe(We,We.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ke()>ji&&(t.flags|=128,r=!0,Ji(s,!1),t.lanes=4194304)}else{if(!r)if(e=Ca(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ji(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Be)return ft(t),null}else 2*Ke()-s.renderingStartTime>ji&&n!==1073741824&&(t.flags|=128,r=!0,Ji(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ke(),t.sibling=null,n=We.current,Oe(We,r?n&1|2:n&1),t):(ft(t),null);case 22:case 23:return Od(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?$t&1073741824&&(ft(t),t.subtreeFlags&6&&(t.flags|=8192)):ft(t),null;case 24:return null;case 25:return null}throw Error(ce(156,t.tag))}function vw(e,t){switch(xd(t),t.tag){case 1:return At(t.type)&&va(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ki(),Fe(Tt),Fe(mt),Cd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Sd(t),null;case 13:if(Fe(We),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(ce(340));bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Fe(We),null;case 4:return ki(),null;case 10:return wd(t.type._context),null;case 22:case 23:return Od(),null;case 24:return null;default:return null}}var Ts=!1,ht=!1,bw=typeof WeakSet=="function"?WeakSet:Set,ye=null;function oi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Je(e,t,r)}else n.current=null}function hu(e,t,n){try{n()}catch(r){Je(e,t,r)}}var dh=!1;function ww(e,t){if(Qc=ma,e=gx(),md(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==n||i!==0&&p.nodeType!==3||(l=a+i),p!==s||r!==0&&p.nodeType!==3||(c=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(h=p.firstChild)!==null;)f=p,p=h;for(;;){if(p===e)break t;if(f===n&&++u===i&&(l=a),f===s&&++d===r&&(c=a),(h=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=h}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xc={focusedElem:e,selectionRange:n},ma=!1,ye=t;ye!==null;)if(t=ye,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ye=e;else for(;ye!==null;){t=ye;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var b=m.memoizedProps,_=m.memoizedState,g=t.stateNode,x=g.getSnapshotBeforeUpdate(t.elementType===t.type?b:sn(t.type,b),_);g.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(j){Je(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,ye=e;break}ye=t.return}return m=dh,dh=!1,m}function go(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&hu(t,n,s)}i=i.next}while(i!==r)}}function ol(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function mu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function py(e){var t=e.alternate;t!==null&&(e.alternate=null,py(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yn],delete t[Lo],delete t[tu],delete t[rw],delete t[iw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fy(e){return e.tag===5||e.tag===3||e.tag===4}function ph(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ya));else if(r!==4&&(e=e.child,e!==null))for(gu(e,t,n),e=e.sibling;e!==null;)gu(e,t,n),e=e.sibling}function xu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(xu(e,t,n),e=e.sibling;e!==null;)xu(e,t,n),e=e.sibling}var st=null,an=!1;function Hn(e,t,n){for(n=n.child;n!==null;)hy(e,t,n),n=n.sibling}function hy(e,t,n){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(Qa,n)}catch{}switch(n.tag){case 5:ht||oi(n,t);case 6:var r=st,i=an;st=null,Hn(e,t,n),st=r,an=i,st!==null&&(an?(e=st,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):st.removeChild(n.stateNode));break;case 18:st!==null&&(an?(e=st,n=n.stateNode,e.nodeType===8?Hl(e.parentNode,n):e.nodeType===1&&Hl(e,n),zo(e)):Hl(st,n.stateNode));break;case 4:r=st,i=an,st=n.stateNode.containerInfo,an=!0,Hn(e,t,n),st=r,an=i;break;case 0:case 11:case 14:case 15:if(!ht&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&hu(n,t,a),i=i.next}while(i!==r)}Hn(e,t,n);break;case 1:if(!ht&&(oi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Je(n,t,l)}Hn(e,t,n);break;case 21:Hn(e,t,n);break;case 22:n.mode&1?(ht=(r=ht)||n.memoizedState!==null,Hn(e,t,n),ht=r):Hn(e,t,n);break;default:Hn(e,t,n)}}function fh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new bw),t.forEach(function(r){var i=Tw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function on(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:st=l.stateNode,an=!1;break e;case 3:st=l.stateNode.containerInfo,an=!0;break e;case 4:st=l.stateNode.containerInfo,an=!0;break e}l=l.return}if(st===null)throw Error(ce(160));hy(s,a,i),st=null,an=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Je(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)my(t,e),t=t.sibling}function my(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(on(t,e),mn(e),r&4){try{go(3,e,e.return),ol(3,e)}catch(b){Je(e,e.return,b)}try{go(5,e,e.return)}catch(b){Je(e,e.return,b)}}break;case 1:on(t,e),mn(e),r&512&&n!==null&&oi(n,n.return);break;case 5:if(on(t,e),mn(e),r&512&&n!==null&&oi(n,n.return),e.flags&32){var i=e.stateNode;try{So(i,"")}catch(b){Je(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Og(i,s),Bc(l,a);var u=Bc(l,s);for(a=0;a<c.length;a+=2){var d=c[a],p=c[a+1];d==="style"?Ug(i,p):d==="dangerouslySetInnerHTML"?Fg(i,p):d==="children"?So(i,p):nd(i,d,p,u)}switch(l){case"input":Ic(i,s);break;case"textarea":$g(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?li(i,!!s.multiple,h,!1):f!==!!s.multiple&&(s.defaultValue!=null?li(i,!!s.multiple,s.defaultValue,!0):li(i,!!s.multiple,s.multiple?[]:"",!1))}i[Lo]=s}catch(b){Je(e,e.return,b)}}break;case 6:if(on(t,e),mn(e),r&4){if(e.stateNode===null)throw Error(ce(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(b){Je(e,e.return,b)}}break;case 3:if(on(t,e),mn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zo(t.containerInfo)}catch(b){Je(e,e.return,b)}break;case 4:on(t,e),mn(e);break;case 13:on(t,e),mn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Rd=Ke())),r&4&&fh(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ht=(u=ht)||d,on(t,e),ht=u):on(t,e),mn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(ye=e,d=e.child;d!==null;){for(p=ye=d;ye!==null;){switch(f=ye,h=f.child,f.tag){case 0:case 11:case 14:case 15:go(4,f,f.return);break;case 1:oi(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(b){Je(r,n,b)}}break;case 5:oi(f,f.return);break;case 22:if(f.memoizedState!==null){mh(p);continue}}h!==null?(h.return=f,ye=h):mh(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Bg("display",a))}catch(b){Je(e,e.return,b)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(b){Je(e,e.return,b)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:on(t,e),mn(e),r&4&&fh(e);break;case 21:break;default:on(t,e),mn(e)}}function mn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(fy(n)){var r=n;break e}n=n.return}throw Error(ce(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(So(i,""),r.flags&=-33);var s=ph(e);xu(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=ph(e);gu(e,l,a);break;default:throw Error(ce(161))}}catch(c){Je(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kw(e,t,n){ye=e,gy(e)}function gy(e,t,n){for(var r=(e.mode&1)!==0;ye!==null;){var i=ye,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Ts;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||ht;l=Ts;var u=ht;if(Ts=a,(ht=c)&&!u)for(ye=i;ye!==null;)a=ye,c=a.child,a.tag===22&&a.memoizedState!==null?gh(i):c!==null?(c.return=a,ye=c):gh(i);for(;s!==null;)ye=s,gy(s),s=s.sibling;ye=i,Ts=l,ht=u}hh(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,ye=s):hh(e)}}function hh(e){for(;ye!==null;){var t=ye;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ht||ol(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ht)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:sn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Xf(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xf(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&zo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}ht||t.flags&512&&mu(t)}catch(f){Je(t,t.return,f)}}if(t===e){ye=null;break}if(n=t.sibling,n!==null){n.return=t.return,ye=n;break}ye=t.return}}function mh(e){for(;ye!==null;){var t=ye;if(t===e){ye=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ye=n;break}ye=t.return}}function gh(e){for(;ye!==null;){var t=ye;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ol(4,t)}catch(c){Je(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Je(t,i,c)}}var s=t.return;try{mu(t)}catch(c){Je(t,s,c)}break;case 5:var a=t.return;try{mu(t)}catch(c){Je(t,a,c)}}}catch(c){Je(t,t.return,c)}if(t===e){ye=null;break}var l=t.sibling;if(l!==null){l.return=t.return,ye=l;break}ye=t.return}}var _w=Math.ceil,za=Wn.ReactCurrentDispatcher,Pd=Wn.ReactCurrentOwner,tn=Wn.ReactCurrentBatchConfig,Te=0,ot=null,Xe=null,at=0,$t=0,si=xr(0),tt=0,Fo=null,Or=0,sl=0,Ld=0,xo=null,Nt=null,Rd=0,ji=1/0,zn=null,Ta=!1,yu=null,lr=null,As=!1,Zn=null,Aa=0,yo=0,vu=null,Xs=-1,Zs=0;function wt(){return Te&6?Ke():Xs!==-1?Xs:Xs=Ke()}function cr(e){return e.mode&1?Te&2&&at!==0?at&-at:sw.transition!==null?(Zs===0&&(Zs=ex()),Zs):(e=Le,e!==0||(e=window.event,e=e===void 0?16:ax(e.type)),e):1}function dn(e,t,n,r){if(50<yo)throw yo=0,vu=null,Error(ce(185));Xo(e,n,r),(!(Te&2)||e!==ot)&&(e===ot&&(!(Te&2)&&(sl|=n),tt===4&&Qn(e,at)),Mt(e,r),n===1&&Te===0&&!(t.mode&1)&&(ji=Ke()+500,nl&&yr()))}function Mt(e,t){var n=e.callbackNode;sb(e,t);var r=ha(e,e===ot?at:0);if(r===0)n!==null&&Sf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Sf(n),t===1)e.tag===0?ow(xh.bind(null,e)):Cx(xh.bind(null,e)),tw(function(){!(Te&6)&&yr()}),n=null;else{switch(tx(r)){case 1:n=ad;break;case 4:n=Xg;break;case 16:n=fa;break;case 536870912:n=Zg;break;default:n=fa}n=jy(n,xy.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xy(e,t){if(Xs=-1,Zs=0,Te&6)throw Error(ce(327));var n=e.callbackNode;if(fi()&&e.callbackNode!==n)return null;var r=ha(e,e===ot?at:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ma(e,r);else{t=r;var i=Te;Te|=2;var s=vy();(ot!==e||at!==t)&&(zn=null,ji=Ke()+500,Er(e,t));do try{Cw();break}catch(l){yy(e,l)}while(!0);bd(),za.current=s,Te=i,Xe!==null?t=0:(ot=null,at=0,t=tt)}if(t!==0){if(t===2&&(i=qc(e),i!==0&&(r=i,t=bu(e,i))),t===1)throw n=Fo,Er(e,0),Qn(e,r),Mt(e,Ke()),n;if(t===6)Qn(e,r);else{if(i=e.current.alternate,!(r&30)&&!jw(i)&&(t=Ma(e,r),t===2&&(s=qc(e),s!==0&&(r=s,t=bu(e,s))),t===1))throw n=Fo,Er(e,0),Qn(e,r),Mt(e,Ke()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(ce(345));case 2:kr(e,Nt,zn);break;case 3:if(Qn(e,r),(r&130023424)===r&&(t=Rd+500-Ke(),10<t)){if(ha(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){wt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=eu(kr.bind(null,e,Nt,zn),t);break}kr(e,Nt,zn);break;case 4:if(Qn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-un(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=Ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_w(r/1960))-r,10<r){e.timeoutHandle=eu(kr.bind(null,e,Nt,zn),r);break}kr(e,Nt,zn);break;case 5:kr(e,Nt,zn);break;default:throw Error(ce(329))}}}return Mt(e,Ke()),e.callbackNode===n?xy.bind(null,e):null}function bu(e,t){var n=xo;return e.current.memoizedState.isDehydrated&&(Er(e,t).flags|=256),e=Ma(e,t),e!==2&&(t=Nt,Nt=n,t!==null&&wu(t)),e}function wu(e){Nt===null?Nt=e:Nt.push.apply(Nt,e)}function jw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!fn(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qn(e,t){for(t&=~Ld,t&=~sl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-un(t),r=1<<n;e[n]=-1,t&=~r}}function xh(e){if(Te&6)throw Error(ce(327));fi();var t=ha(e,0);if(!(t&1))return Mt(e,Ke()),null;var n=Ma(e,t);if(e.tag!==0&&n===2){var r=qc(e);r!==0&&(t=r,n=bu(e,r))}if(n===1)throw n=Fo,Er(e,0),Qn(e,t),Mt(e,Ke()),n;if(n===6)throw Error(ce(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kr(e,Nt,zn),Mt(e,Ke()),null}function Id(e,t){var n=Te;Te|=1;try{return e(t)}finally{Te=n,Te===0&&(ji=Ke()+500,nl&&yr())}}function $r(e){Zn!==null&&Zn.tag===0&&!(Te&6)&&fi();var t=Te;Te|=1;var n=tn.transition,r=Le;try{if(tn.transition=null,Le=1,e)return e()}finally{Le=r,tn.transition=n,Te=t,!(Te&6)&&yr()}}function Od(){$t=si.current,Fe(si)}function Er(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ew(n)),Xe!==null)for(n=Xe.return;n!==null;){var r=n;switch(xd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&va();break;case 3:ki(),Fe(Tt),Fe(mt),Cd();break;case 5:Sd(r);break;case 4:ki();break;case 13:Fe(We);break;case 19:Fe(We);break;case 10:wd(r.type._context);break;case 22:case 23:Od()}n=n.return}if(ot=e,Xe=e=ur(e.current,null),at=$t=t,tt=0,Fo=null,Ld=sl=Or=0,Nt=xo=null,Sr!==null){for(t=0;t<Sr.length;t++)if(n=Sr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}Sr=null}return e}function yy(e,t){do{var n=Xe;try{if(bd(),Gs.current=Ea,Na){for(var r=Ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Na=!1}if(Ir=0,it=et=Ve=null,mo=!1,Oo=0,Pd.current=null,n===null||n.return===null){tt=1,Fo=t,Xe=null;break}e:{var s=e,a=n.return,l=n,c=t;if(t=at,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=ih(a);if(h!==null){h.flags&=-257,oh(h,a,l,s,t),h.mode&1&&rh(s,u,t),t=h,c=u;var m=t.updateQueue;if(m===null){var b=new Set;b.add(c),t.updateQueue=b}else m.add(c);break e}else{if(!(t&1)){rh(s,u,t),$d();break e}c=Error(ce(426))}}else if(Be&&l.mode&1){var _=ih(a);if(_!==null){!(_.flags&65536)&&(_.flags|=256),oh(_,a,l,s,t),yd(_i(c,l));break e}}s=c=_i(c,l),tt!==4&&(tt=2),xo===null?xo=[s]:xo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var g=ty(s,c,t);Qf(s,g);break e;case 1:l=c;var x=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(lr===null||!lr.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t;var j=ny(s,l,t);Qf(s,j);break e}}s=s.return}while(s!==null)}wy(n)}catch(T){t=T,Xe===n&&n!==null&&(Xe=n=n.return);continue}break}while(!0)}function vy(){var e=za.current;return za.current=Ea,e===null?Ea:e}function $d(){(tt===0||tt===3||tt===2)&&(tt=4),ot===null||!(Or&268435455)&&!(sl&268435455)||Qn(ot,at)}function Ma(e,t){var n=Te;Te|=2;var r=vy();(ot!==e||at!==t)&&(zn=null,Er(e,t));do try{Sw();break}catch(i){yy(e,i)}while(!0);if(bd(),Te=n,za.current=r,Xe!==null)throw Error(ce(261));return ot=null,at=0,tt}function Sw(){for(;Xe!==null;)by(Xe)}function Cw(){for(;Xe!==null&&!Q0();)by(Xe)}function by(e){var t=_y(e.alternate,e,$t);e.memoizedProps=e.pendingProps,t===null?wy(e):Xe=t,Pd.current=null}function wy(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=vw(n,t),n!==null){n.flags&=32767,Xe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{tt=6,Xe=null;return}}else if(n=yw(n,t,$t),n!==null){Xe=n;return}if(t=t.sibling,t!==null){Xe=t;return}Xe=t=e}while(t!==null);tt===0&&(tt=5)}function kr(e,t,n){var r=Le,i=tn.transition;try{tn.transition=null,Le=1,Nw(e,t,n,r)}finally{tn.transition=i,Le=r}return null}function Nw(e,t,n,r){do fi();while(Zn!==null);if(Te&6)throw Error(ce(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(ce(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(ab(e,s),e===ot&&(Xe=ot=null,at=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||As||(As=!0,jy(fa,function(){return fi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=tn.transition,tn.transition=null;var a=Le;Le=1;var l=Te;Te|=4,Pd.current=null,ww(e,n),my(n,e),Jb(Xc),ma=!!Qc,Xc=Qc=null,e.current=n,kw(n),X0(),Te=l,Le=a,tn.transition=s}else e.current=n;if(As&&(As=!1,Zn=e,Aa=i),s=e.pendingLanes,s===0&&(lr=null),tb(n.stateNode),Mt(e,Ke()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ta)throw Ta=!1,e=yu,yu=null,e;return Aa&1&&e.tag!==0&&fi(),s=e.pendingLanes,s&1?e===vu?yo++:(yo=0,vu=e):yo=0,yr(),null}function fi(){if(Zn!==null){var e=tx(Aa),t=tn.transition,n=Le;try{if(tn.transition=null,Le=16>e?16:e,Zn===null)var r=!1;else{if(e=Zn,Zn=null,Aa=0,Te&6)throw Error(ce(331));var i=Te;for(Te|=4,ye=e.current;ye!==null;){var s=ye,a=s.child;if(ye.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(ye=u;ye!==null;){var d=ye;switch(d.tag){case 0:case 11:case 15:go(8,d,s)}var p=d.child;if(p!==null)p.return=d,ye=p;else for(;ye!==null;){d=ye;var f=d.sibling,h=d.return;if(py(d),d===u){ye=null;break}if(f!==null){f.return=h,ye=f;break}ye=h}}}var m=s.alternate;if(m!==null){var b=m.child;if(b!==null){m.child=null;do{var _=b.sibling;b.sibling=null,b=_}while(b!==null)}}ye=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ye=a;else e:for(;ye!==null;){if(s=ye,s.flags&2048)switch(s.tag){case 0:case 11:case 15:go(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,ye=g;break e}ye=s.return}}var x=e.current;for(ye=x;ye!==null;){a=ye;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,ye=y;else e:for(a=x;ye!==null;){if(l=ye,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ol(9,l)}}catch(T){Je(l,l.return,T)}if(l===a){ye=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,ye=j;break e}ye=l.return}}if(Te=i,yr(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(Qa,e)}catch{}r=!0}return r}finally{Le=n,tn.transition=t}}return!1}function yh(e,t,n){t=_i(n,t),t=ty(e,t,1),e=ar(e,t,1),t=wt(),e!==null&&(Xo(e,1,t),Mt(e,t))}function Je(e,t,n){if(e.tag===3)yh(e,e,n);else for(;t!==null;){if(t.tag===3){yh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(lr===null||!lr.has(r))){e=_i(n,e),e=ny(t,e,1),t=ar(t,e,1),e=wt(),t!==null&&(Xo(t,1,e),Mt(t,e));break}}t=t.return}}function Ew(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=wt(),e.pingedLanes|=e.suspendedLanes&n,ot===e&&(at&n)===n&&(tt===4||tt===3&&(at&130023424)===at&&500>Ke()-Rd?Er(e,0):Ld|=n),Mt(e,t)}function ky(e,t){t===0&&(e.mode&1?(t=ws,ws<<=1,!(ws&130023424)&&(ws=4194304)):t=1);var n=wt();e=Dn(e,t),e!==null&&(Xo(e,t,n),Mt(e,n))}function zw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ky(e,n)}function Tw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(ce(314))}r!==null&&r.delete(t),ky(e,n)}var _y;_y=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Tt.current)Et=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Et=!1,xw(e,t,n);Et=!!(e.flags&131072)}else Et=!1,Be&&t.flags&1048576&&Nx(t,ka,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Qs(e,t),e=t.pendingProps;var i=vi(t,mt.current);pi(t,n),i=Ed(null,t,r,e,i,n);var s=zd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,At(r)?(s=!0,ba(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_d(t),i.updater=il,t.stateNode=i,i._reactInternals=t,au(t,r,e,n),t=uu(null,t,r,!0,s,n)):(t.tag=0,Be&&s&&gd(t),yt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Qs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Mw(r),e=sn(r,e),i){case 0:t=cu(null,t,r,e,n);break e;case 1:t=lh(null,t,r,e,n);break e;case 11:t=sh(null,t,r,e,n);break e;case 14:t=ah(null,t,r,sn(r.type,e),n);break e}throw Error(ce(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:sn(r,i),cu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:sn(r,i),lh(e,t,r,i,n);case 3:e:{if(sy(t),e===null)throw Error(ce(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Px(e,t),Sa(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=_i(Error(ce(423)),t),t=ch(e,t,r,n,i);break e}else if(r!==i){i=_i(Error(ce(424)),t),t=ch(e,t,r,n,i);break e}else for(Bt=sr(t.stateNode.containerInfo.firstChild),Vt=t,Be=!0,ln=null,n=Ax(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bi(),r===i){t=Fn(e,t,n);break e}yt(e,t,r,n)}t=t.child}return t;case 5:return Lx(t),e===null&&iu(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,Zc(r,i)?a=null:s!==null&&Zc(r,s)&&(t.flags|=32),oy(e,t),yt(e,t,a,n),t.child;case 6:return e===null&&iu(t),null;case 13:return ay(e,t,n);case 4:return jd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=wi(t,null,r,n):yt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:sn(r,i),sh(e,t,r,i,n);case 7:return yt(e,t,t.pendingProps,n),t.child;case 8:return yt(e,t,t.pendingProps.children,n),t.child;case 12:return yt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,Oe(_a,r._currentValue),r._currentValue=a,s!==null)if(fn(s.value,a)){if(s.children===i.children&&!Tt.current){t=Fn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Rn(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),ou(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ce(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),ou(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}yt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,pi(t,n),i=nn(i),r=r(i),t.flags|=1,yt(e,t,r,n),t.child;case 14:return r=t.type,i=sn(r,t.pendingProps),i=sn(r.type,i),ah(e,t,r,i,n);case 15:return ry(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:sn(r,i),Qs(e,t),t.tag=1,At(r)?(e=!0,ba(t)):e=!1,pi(t,n),ey(t,r,i),au(t,r,i,n),uu(null,t,r,!0,e,n);case 19:return ly(e,t,n);case 22:return iy(e,t,n)}throw Error(ce(156,t.tag))};function jy(e,t){return Qg(e,t)}function Aw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(e,t,n,r){return new Aw(e,t,n,r)}function Dd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mw(e){if(typeof e=="function")return Dd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===id)return 11;if(e===od)return 14}return 2}function ur(e,t){var n=e.alternate;return n===null?(n=Xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ea(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")Dd(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Yr:return zr(n.children,i,s,t);case rd:a=8,i|=8;break;case Ac:return e=Xt(12,n,t,i|2),e.elementType=Ac,e.lanes=s,e;case Mc:return e=Xt(13,n,t,i),e.elementType=Mc,e.lanes=s,e;case Pc:return e=Xt(19,n,t,i),e.elementType=Pc,e.lanes=s,e;case Lg:return al(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Mg:a=10;break e;case Pg:a=9;break e;case id:a=11;break e;case od:a=14;break e;case Jn:a=16,r=null;break e}throw Error(ce(130,e==null?e:typeof e,""))}return t=Xt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function zr(e,t,n,r){return e=Xt(7,e,r,t),e.lanes=n,e}function al(e,t,n,r){return e=Xt(22,e,r,t),e.elementType=Lg,e.lanes=n,e.stateNode={isHidden:!1},e}function Zl(e,t,n){return e=Xt(6,e,null,t),e.lanes=n,e}function ec(e,t,n){return t=Xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Pw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ll(0),this.expirationTimes=Ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ll(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fd(e,t,n,r,i,s,a,l,c){return e=new Pw(e,t,n,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Xt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_d(s),e}function Lw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Sy(e){if(!e)return fr;e=e._reactInternals;e:{if(Ur(e)!==e||e.tag!==1)throw Error(ce(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(At(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(ce(171))}if(e.tag===1){var n=e.type;if(At(n))return Sx(e,n,t)}return t}function Cy(e,t,n,r,i,s,a,l,c){return e=Fd(n,r,!0,e,i,s,a,l,c),e.context=Sy(null),n=e.current,r=wt(),i=cr(n),s=Rn(r,i),s.callback=t??null,ar(n,s,i),e.current.lanes=i,Xo(e,i,r),Mt(e,r),e}function ll(e,t,n,r){var i=t.current,s=wt(),a=cr(i);return n=Sy(n),t.context===null?t.context=n:t.pendingContext=n,t=Rn(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ar(i,t,a),e!==null&&(dn(e,i,a,s),Ks(e,i,a)),a}function Pa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bd(e,t){vh(e,t),(e=e.alternate)&&vh(e,t)}function Rw(){return null}var Ny=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ud(e){this._internalRoot=e}cl.prototype.render=Ud.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(ce(409));ll(e,t,null,null)};cl.prototype.unmount=Ud.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$r(function(){ll(null,e,null,null)}),t[$n]=null}};function cl(e){this._internalRoot=e}cl.prototype.unstable_scheduleHydration=function(e){if(e){var t=ix();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yn.length&&t!==0&&t<Yn[n].priority;n++);Yn.splice(n,0,e),n===0&&sx(e)}};function Wd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ul(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bh(){}function Iw(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Pa(a);s.call(u)}}var a=Cy(t,r,e,0,null,!1,!1,"",bh);return e._reactRootContainer=a,e[$n]=a.current,Mo(e.nodeType===8?e.parentNode:e),$r(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Pa(c);l.call(u)}}var c=Fd(e,0,!1,null,null,!1,!1,"",bh);return e._reactRootContainer=c,e[$n]=c.current,Mo(e.nodeType===8?e.parentNode:e),$r(function(){ll(t,c,n,r)}),c}function dl(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var c=Pa(a);l.call(c)}}ll(t,a,e,i)}else a=Iw(n,t,e,i,r);return Pa(a)}nx=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=io(t.pendingLanes);n!==0&&(ld(t,n|1),Mt(t,Ke()),!(Te&6)&&(ji=Ke()+500,yr()))}break;case 13:$r(function(){var r=Dn(e,1);if(r!==null){var i=wt();dn(r,e,1,i)}}),Bd(e,1)}};cd=function(e){if(e.tag===13){var t=Dn(e,134217728);if(t!==null){var n=wt();dn(t,e,134217728,n)}Bd(e,134217728)}};rx=function(e){if(e.tag===13){var t=cr(e),n=Dn(e,t);if(n!==null){var r=wt();dn(n,e,t,r)}Bd(e,t)}};ix=function(){return Le};ox=function(e,t){var n=Le;try{return Le=e,t()}finally{Le=n}};Wc=function(e,t,n){switch(t){case"input":if(Ic(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=tl(r);if(!i)throw Error(ce(90));Ig(r),Ic(r,i)}}}break;case"textarea":$g(e,n);break;case"select":t=n.value,t!=null&&li(e,!!n.multiple,t,!1)}};Hg=Id;qg=$r;var Ow={usingClientEntryPoint:!1,Events:[es,ei,tl,Wg,Vg,Id]},Ki={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$w={bundleType:Ki.bundleType,version:Ki.version,rendererPackageName:Ki.rendererPackageName,rendererConfig:Ki.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gg(e),e===null?null:e.stateNode},findFiberByHostInstance:Ki.findFiberByHostInstance||Rw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ms=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ms.isDisabled&&Ms.supportsFiber)try{Qa=Ms.inject($w),wn=Ms}catch{}}Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ow;Jt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wd(t))throw Error(ce(200));return Lw(e,t,null,n)};Jt.createRoot=function(e,t){if(!Wd(e))throw Error(ce(299));var n=!1,r="",i=Ny;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Fd(e,1,!1,null,null,n,!1,r,i),e[$n]=t.current,Mo(e.nodeType===8?e.parentNode:e),new Ud(t)};Jt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(ce(188)):(e=Object.keys(e).join(","),Error(ce(268,e)));return e=Gg(t),e=e===null?null:e.stateNode,e};Jt.flushSync=function(e){return $r(e)};Jt.hydrate=function(e,t,n){if(!ul(t))throw Error(ce(200));return dl(null,e,t,!0,n)};Jt.hydrateRoot=function(e,t,n){if(!Wd(e))throw Error(ce(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=Ny;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Cy(t,null,e,1,n??null,i,!1,s,a),e[$n]=t.current,Mo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new cl(t)};Jt.render=function(e,t,n){if(!ul(t))throw Error(ce(200));return dl(null,e,t,!1,n)};Jt.unmountComponentAtNode=function(e){if(!ul(e))throw Error(ce(40));return e._reactRootContainer?($r(function(){dl(null,null,e,!1,function(){e._reactRootContainer=null,e[$n]=null})}),!0):!1};Jt.unstable_batchedUpdates=Id;Jt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ul(n))throw Error(ce(200));if(e==null||e._reactInternals===void 0)throw Error(ce(38));return dl(e,t,n,!1,r)};Jt.version="18.3.1-next-f1338f8080-20240426";function Ey(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ey)}catch(e){console.error(e)}}Ey(),Eg.exports=Jt;var zy=Eg.exports,wh=zy;zc.createRoot=wh.createRoot,zc.hydrateRoot=wh.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bo(){return Bo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bo.apply(this,arguments)}var er;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(er||(er={}));const kh="popstate";function Dw(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:a,hash:l}=r.location;return ku("",{pathname:s,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ty(i)}return Bw(t,n,null,e)}function Ze(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Vd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Fw(){return Math.random().toString(36).substr(2,8)}function _h(e,t){return{usr:e.state,key:e.key,idx:t}}function ku(e,t,n,r){return n===void 0&&(n=null),Bo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Pi(t):t,{state:n,key:t&&t.key||r||Fw()})}function Ty(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Pi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Bw(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,l=er.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(Bo({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function p(){l=er.Pop;let _=d(),g=_==null?null:_-u;u=_,c&&c({action:l,location:b.location,delta:g})}function f(_,g){l=er.Push;let x=ku(b.location,_,g);u=d()+1;let y=_h(x,u),j=b.createHref(x);try{a.pushState(y,"",j)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(j)}s&&c&&c({action:l,location:b.location,delta:1})}function h(_,g){l=er.Replace;let x=ku(b.location,_,g);u=d();let y=_h(x,u),j=b.createHref(x);a.replaceState(y,"",j),s&&c&&c({action:l,location:b.location,delta:0})}function m(_){let g=i.location.origin!=="null"?i.location.origin:i.location.href,x=typeof _=="string"?_:Ty(_);return x=x.replace(/ $/,"%20"),Ze(g,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,g)}let b={get action(){return l},get location(){return e(i,a)},listen(_){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(kh,p),c=_,()=>{i.removeEventListener(kh,p),c=null}},createHref(_){return t(i,_)},createURL:m,encodeLocation(_){let g=m(_);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:h,go(_){return a.go(_)}};return b}var jh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(jh||(jh={}));function Uw(e,t,n){return n===void 0&&(n="/"),Ww(e,t,n)}function Ww(e,t,n,r){let i=typeof t=="string"?Pi(t):t,s=Py(i.pathname||"/",n);if(s==null)return null;let a=Ay(e);Vw(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=nk(s);l=Zw(a[c],u)}return l}function Ay(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,a,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};c.relativePath.startsWith("/")&&(Ze(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Tr([r,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(Ze(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ay(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:Qw(u,s.index),routesMeta:d})};return e.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,a);else for(let c of My(s.path))i(s,a,c)}),t}function My(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=My(r.join("/")),l=[];return l.push(...a.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Vw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Xw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Hw=/^:[\w-]+$/,qw=3,Jw=2,Kw=1,Gw=10,Yw=-2,Sh=e=>e==="*";function Qw(e,t){let n=e.split("/"),r=n.length;return n.some(Sh)&&(r+=Yw),t&&(r+=Jw),n.filter(i=>!Sh(i)).reduce((i,s)=>i+(Hw.test(s)?qw:s===""?Kw:Gw),r)}function Xw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Zw(e,t,n){let{routesMeta:r}=e,i={},s="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",p=ek({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),f=c.route;if(!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:Tr([s,p.pathname]),pathnameBase:ak(Tr([s,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(s=Tr([s,p.pathnameBase]))}return a}function ek(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=tk(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:f,isOptional:h}=d;if(f==="*"){let b=l[p]||"";a=s.slice(0,s.length-b.length).replace(/(.)\/+$/,"$1")}const m=l[p];return h&&!m?u[f]=void 0:u[f]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:e}}function tk(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Vd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function nk(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Vd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Py(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const rk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ik=e=>rk.test(e);function ok(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Pi(e):e,s;if(n)if(ik(n))s=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),Vd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=Ch(n.substring(1),"/"):s=Ch(n,t)}else s=t;return{pathname:s,search:lk(r),hash:ck(i)}}function Ch(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function tc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sk(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ly(e,t){let n=sk(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ry(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Pi(e):(i=Bo({},e),Ze(!i.pathname||!i.pathname.includes("?"),tc("?","pathname","search",i)),Ze(!i.pathname||!i.pathname.includes("#"),tc("#","pathname","hash",i)),Ze(!i.search||!i.search.includes("#"),tc("#","search","hash",i)));let s=e===""||i.pathname==="",a=s?"/":i.pathname,l;if(a==null)l=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}l=p>=0?t[p]:"/"}let c=ok(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Tr=e=>e.join("/").replace(/\/\/+/g,"/"),ak=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),lk=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ck=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function uk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Iy=["post","put","patch","delete"];new Set(Iy);const dk=["get",...Iy];new Set(dk);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uo(){return Uo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Uo.apply(this,arguments)}const Hd=k.createContext(null),pk=k.createContext(null),ns=k.createContext(null),pl=k.createContext(null),vr=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Oy=k.createContext(null);function rs(){return k.useContext(pl)!=null}function qd(){return rs()||Ze(!1),k.useContext(pl).location}function $y(e){k.useContext(ns).static||k.useLayoutEffect(e)}function Jd(){let{isDataRoute:e}=k.useContext(vr);return e?Ck():fk()}function fk(){rs()||Ze(!1);let e=k.useContext(Hd),{basename:t,future:n,navigator:r}=k.useContext(ns),{matches:i}=k.useContext(vr),{pathname:s}=qd(),a=JSON.stringify(Ly(i,n.v7_relativeSplatPath)),l=k.useRef(!1);return $y(()=>{l.current=!0}),k.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=Ry(u,JSON.parse(a),s,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Tr([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,a,s,e])}function hk(){let{matches:e}=k.useContext(vr),t=e[e.length-1];return t?t.params:{}}function mk(e,t){return gk(e,t)}function gk(e,t,n,r){rs()||Ze(!1);let{navigator:i}=k.useContext(ns),{matches:s}=k.useContext(vr),a=s[s.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=qd(),d;if(t){var p;let _=typeof t=="string"?Pi(t):t;c==="/"||(p=_.pathname)!=null&&p.startsWith(c)||Ze(!1),d=_}else d=u;let f=d.pathname||"/",h=f;if(c!=="/"){let _=c.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(_.length).join("/")}let m=Uw(e,{pathname:h}),b=wk(m&&m.map(_=>Object.assign({},_,{params:Object.assign({},l,_.params),pathname:Tr([c,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?c:Tr([c,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),s,n,r);return t&&b?k.createElement(pl.Provider,{value:{location:Uo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:er.Pop}},b):b}function xk(){let e=Sk(),t=uk(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,null)}const yk=k.createElement(xk,null);class vk extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(vr.Provider,{value:this.props.routeContext},k.createElement(Oy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function bk(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext(Hd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(vr.Provider,{value:t},r)}function wk(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Ze(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:h}=n,m=p.route.loader&&f[p.route.id]===void 0&&(!h||h[p.route.id]===void 0);if(p.route.lazy||m){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,p,f)=>{let h,m=!1,b=null,_=null;n&&(h=l&&p.route.id?l[p.route.id]:void 0,b=p.route.errorElement||yk,c&&(u<0&&f===0?(Nk("route-fallback"),m=!0,_=null):u===f&&(m=!0,_=p.route.hydrateFallbackElement||null)));let g=t.concat(a.slice(0,f+1)),x=()=>{let y;return h?y=b:m?y=_:p.route.Component?y=k.createElement(p.route.Component,null):p.route.element?y=p.route.element:y=d,k.createElement(bk,{match:p,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:y})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?k.createElement(vk,{location:n.location,revalidation:n.revalidation,component:b,error:h,children:x(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):x()},null)}var Dy=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Dy||{}),Fy=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Fy||{});function kk(e){let t=k.useContext(Hd);return t||Ze(!1),t}function _k(e){let t=k.useContext(pk);return t||Ze(!1),t}function jk(e){let t=k.useContext(vr);return t||Ze(!1),t}function By(e){let t=jk(),n=t.matches[t.matches.length-1];return n.route.id||Ze(!1),n.route.id}function Sk(){var e;let t=k.useContext(Oy),n=_k(),r=By();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Ck(){let{router:e}=kk(Dy.UseNavigateStable),t=By(Fy.UseNavigateStable),n=k.useRef(!1);return $y(()=>{n.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Uo({fromRouteId:t},s)))},[e,t])}const Nh={};function Nk(e,t,n){Nh[e]||(Nh[e]=!0)}function Ek(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function zk(e){let{to:t,replace:n,state:r,relative:i}=e;rs()||Ze(!1);let{future:s,static:a}=k.useContext(ns),{matches:l}=k.useContext(vr),{pathname:c}=qd(),u=Jd(),d=Ry(t,Ly(l,s.v7_relativeSplatPath),c,i==="path"),p=JSON.stringify(d);return k.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:i}),[u,p,i,n,r]),null}function Kr(e){Ze(!1)}function Tk(e){let{basename:t="/",children:n=null,location:r,navigationType:i=er.Pop,navigator:s,static:a=!1,future:l}=e;rs()&&Ze(!1);let c=t.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:c,navigator:s,static:a,future:Uo({v7_relativeSplatPath:!1},l)}),[c,l,s,a]);typeof r=="string"&&(r=Pi(r));let{pathname:d="/",search:p="",hash:f="",state:h=null,key:m="default"}=r,b=k.useMemo(()=>{let _=Py(d,c);return _==null?null:{location:{pathname:_,search:p,hash:f,state:h,key:m},navigationType:i}},[c,d,p,f,h,m,i]);return b==null?null:k.createElement(ns.Provider,{value:u},k.createElement(pl.Provider,{children:n,value:b}))}function Ak(e){let{children:t,location:n}=e;return mk(_u(t),n)}new Promise(()=>{});function _u(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,i)=>{if(!k.isValidElement(r))return;let s=[...t,i];if(r.type===k.Fragment){n.push.apply(n,_u(r.props.children,s));return}r.type!==Kr&&Ze(!1),!r.props.index||!r.props.children||Ze(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=_u(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Mk="6";try{window.__reactRouterVersion=Mk}catch{}const Pk="startTransition",Eh=E0[Pk];function Lk(e){let{basename:t,children:n,future:r,window:i}=e,s=k.useRef();s.current==null&&(s.current=Dw({window:i,v5Compat:!0}));let a=s.current,[l,c]=k.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=k.useCallback(p=>{u&&Eh?Eh(()=>c(p)):c(p)},[c,u]);return k.useLayoutEffect(()=>a.listen(d),[a,d]),k.useEffect(()=>Ek(r),[r]),k.createElement(Tk,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}var zh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(zh||(zh={}));var Th;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Th||(Th={}));const Rk={},Ah=e=>{let t;const n=new Set,r=(d,p)=>{const f=typeof d=="function"?d(t):d;if(!Object.is(f,t)){const h=t;t=p??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(m=>m(t,h))}},i=()=>t,c={setState:r,getState:i,getInitialState:()=>u,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(Rk?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,c);return c},Ik=e=>e?Ah(e):Ah;var Uy={exports:{}},Wy={},Vy={exports:{}},Hy={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Si=k;function Ok(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $k=typeof Object.is=="function"?Object.is:Ok,Dk=Si.useState,Fk=Si.useEffect,Bk=Si.useLayoutEffect,Uk=Si.useDebugValue;function Wk(e,t){var n=t(),r=Dk({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return Bk(function(){i.value=n,i.getSnapshot=t,nc(i)&&s({inst:i})},[e,n,t]),Fk(function(){return nc(i)&&s({inst:i}),e(function(){nc(i)&&s({inst:i})})},[e]),Uk(n),n}function nc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!$k(e,n)}catch{return!0}}function Vk(e,t){return t()}var Hk=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Vk:Wk;Hy.useSyncExternalStore=Si.useSyncExternalStore!==void 0?Si.useSyncExternalStore:Hk;Vy.exports=Hy;var qk=Vy.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fl=k,Jk=qk;function Kk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Gk=typeof Object.is=="function"?Object.is:Kk,Yk=Jk.useSyncExternalStore,Qk=fl.useRef,Xk=fl.useEffect,Zk=fl.useMemo,e_=fl.useDebugValue;Wy.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=Qk(null);if(s.current===null){var a={hasValue:!1,value:null};s.current=a}else a=s.current;s=Zk(function(){function c(h){if(!u){if(u=!0,d=h,h=r(h),i!==void 0&&a.hasValue){var m=a.value;if(i(m,h))return p=m}return p=h}if(m=p,Gk(d,h))return m;var b=r(h);return i!==void 0&&i(m,b)?(d=h,m):(d=h,p=b)}var u=!1,d,p,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,r,i]);var l=Yk(e,s[0],s[1]);return Xk(function(){a.hasValue=!0,a.value=l},[l]),e_(l),l};Uy.exports=Wy;var t_=Uy.exports;const n_=Ga(t_),qy={},{useDebugValue:r_}=Wt,{useSyncExternalStoreWithSelector:i_}=n_;let Mh=!1;const o_=e=>e;function s_(e,t=o_,n){(qy?"production":void 0)!=="production"&&n&&!Mh&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Mh=!0);const r=i_(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return r_(r),r}const Ph=e=>{(qy?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?Ik(e):e,n=(r,i)=>s_(t,r,i);return Object.assign(n,t),n},a_=e=>e?Ph(e):Ph,gt=a_((e,t)=>({project:null,selectedAgentId:null,selectedToolId:null,mcpServers:[],builtinTools:[],isRunning:!1,runEvents:[],watches:[],activeTab:"app",sidebarOpen:!0,hasUnsavedChanges:!1,runAgentId:null,currentSessionId:null,setProject:n=>{var i;const r=((i=n==null?void 0:n.watches)==null?void 0:i.map(s=>({...s,result:void 0,error:void 0,isLoading:!1,lastRun:void 0,history:[]})))||[];e({project:n,watches:r})},setSelectedAgentId:n=>e({selectedAgentId:n}),setSelectedToolId:n=>e({selectedToolId:n}),setMcpServers:n=>e({mcpServers:n}),setBuiltinTools:n=>e({builtinTools:n}),setIsRunning:n=>e({isRunning:n}),addRunEvent:n=>e(r=>({runEvents:[...r.runEvents,n]})),clearRunEvents:()=>e({runEvents:[]}),setWatches:n=>e({watches:n}),updateWatch:(n,r)=>e(i=>{const s=i.watches.map(l=>l.id===n?{...l,...r}:l);if(("serverName"in r||"toolName"in r||"args"in r||"transform"in r)&&i.project){const l=s.map(({id:c,serverName:u,toolName:d,args:p,transform:f})=>({id:c,serverName:u,toolName:d,args:p,transform:f}));return{watches:s,project:{...i.project,watches:l},hasUnsavedChanges:!0}}return{watches:s}}),addWatch:n=>e(r=>{const i=[...r.watches,n],{project:s}=r;if(s){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...s,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),removeWatch:n=>e(r=>{const i=r.watches.filter(a=>a.id!==n),{project:s}=r;if(s){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...s,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),clearWatchHistories:()=>e(n=>({watches:n.watches.map(r=>({...r,history:[],result:void 0,error:void 0}))})),setActiveTab:n=>e({activeTab:n}),setSidebarOpen:n=>e({sidebarOpen:n}),setHasUnsavedChanges:n=>e({hasUnsavedChanges:n}),setRunAgentId:n=>e({runAgentId:n}),setCurrentSessionId:n=>e({currentSessionId:n}),updateProject:n=>{const{project:r}=t();r&&e({project:{...r,...n}})},addAgent:n=>{const{project:r}=t();if(r){let i=r.app;if(n.type==="LlmAgent"&&n.output_key){const s=n.output_key;r.app.state_keys.find(l=>l.name===s)||(i={...r.app,state_keys:[...r.app.state_keys,{name:s,description:`Output from ${n.name} agent`,type:"string",scope:"session"}]})}e({project:{...r,app:i,agents:[...r.agents,n]}})}},updateAgent:(n,r)=>{const{project:i}=t();if(i){const s=i.agents.find(l=>l.id===n);let a=i.app;if(s&&s.type==="LlmAgent"&&r.output_key){const l=s.output_key,c=r.output_key;if(l!==c){const u=i.app.state_keys.filter(p=>p.name!==l);u.find(p=>p.name===c)?a={...i.app,state_keys:u}:a={...i.app,state_keys:[...u,{name:c,description:`Output from ${r.name||s.name} agent`,type:"string",scope:"session"}]}}}e({project:{...i,app:a,agents:i.agents.map(l=>l.id===n?{...l,...r}:l)}})}},removeAgent:n=>{const{project:r,selectedAgentId:i}=t();r&&e({project:{...r,agents:r.agents.filter(s=>s.id!==n)},selectedAgentId:i===n?null:i})},addCustomTool:n=>{const{project:r}=t();r&&e({project:{...r,custom_tools:[...r.custom_tools,n]}})},updateCustomTool:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_tools:i.custom_tools.map(s=>s.id===n?{...s,...r}:s)}})},removeCustomTool:n=>{const{project:r,selectedToolId:i}=t();r&&e({project:{...r,custom_tools:r.custom_tools.filter(s=>s.id!==n)},selectedToolId:i===n?null:i})},addCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:[...r.custom_callbacks||[],n]}})},updateCustomCallback:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_callbacks:(i.custom_callbacks||[]).map(s=>s.id===n?{...s,...r}:s)}})},removeCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:(r.custom_callbacks||[]).filter(i=>i.id!==n)}})}})),Kd="/api";async function Ce(e,t){const n=await fetch(`${Kd}${e}`,{...t,headers:{"Content-Type":"application/json",...t==null?void 0:t.headers}});if(!n.ok){const r=await n.json().catch(()=>({detail:"Unknown error"}));throw new Error(r.detail||`HTTP ${n.status}`)}return n.json()}async function Jy(){return(await Ce("/projects")).projects}async function Ky(e){return(await Ce(`/projects/${e}`)).project}async function Gy(e,t=""){return(await Ce("/projects",{method:"POST",body:JSON.stringify({name:e,description:t})})).project}async function ju(e,t){return(await Ce(`/projects/${e}`,{method:"PUT",body:JSON.stringify(t)})).project}async function Yy(e){await Ce(`/projects/${e}`,{method:"DELETE"})}async function Qy(e){return Ce(`/sessions/${e}/save-to-memory`,{method:"POST"})}async function Su(e){return(await Ce(`/projects/${e}/sessions`)).sessions}async function Xy(e,t){return(await Ce(`/projects/${e}/sessions/${t}/load`)).session}async function Zy(e,t){return(await Ce(`/projects/${e}/sessions/${t}/artifacts`)).artifacts||[]}function ta(e,t,n){return`${Kd}/projects/${e}/sessions/${t}/artifacts/${encodeURIComponent(n)}`}async function ev(e){return(await Ce(`/projects/${e}/yaml`)).yaml}async function tv(e,t){return(await Ce(`/projects/${e}/yaml`,{method:"PUT",body:JSON.stringify({yaml:t})})).project}async function Gd(){return(await Ce("/mcp-servers")).servers}async function nv(){return(await Ce("/builtin-tools")).tools}function rv(e){const t=window.location.protocol==="https:"?"wss:":"ws:",n=window.location.host;return new WebSocket(`${t}//${n}/ws/run/${e}`)}async function na(e,t,n,r){return await Ce(`/projects/${e}/generate-prompt`,{method:"POST",body:JSON.stringify({agent_id:t,context:n,agent_config:r||void 0})})}async function iv(e,t){return await Ce(`/projects/${e}/generate-agent-config`,{method:"POST",body:JSON.stringify({description:t})})}async function ov(e,t,n,r=[],i){return await Ce(`/projects/${e}/generate-tool-code`,{method:"POST",body:JSON.stringify({tool_name:t,tool_description:n,state_keys_used:r,context:i})})}async function sv(e,t,n,r,i=[],s){return await Ce(`/projects/${e}/generate-callback-code`,{method:"POST",body:JSON.stringify({callback_name:t,callback_description:n,callback_type:r,state_keys_used:i,context:s})})}async function Cu(e){return await Ce("/test-mcp-server",{method:"POST",body:JSON.stringify(e)})}async function av(e,t){return Ce(`/projects/${e}/test-model`,{method:"POST",body:JSON.stringify(t)})}async function lv(e,t){return Ce(`/projects/${e}/skillsets/${t}/stats`)}async function cv(e,t,n,r,i=500,s=50){return Ce(`/projects/${e}/skillsets/${t}/url`,{method:"POST",body:JSON.stringify({url:n,source_name:r,chunk_size:i,chunk_overlap:s})})}async function uv(e,t,n,r=500,i=50){const s=new FormData;s.append("file",n),s.append("chunk_size",String(r)),s.append("chunk_overlap",String(i));const a=await fetch(`${Kd}/projects/${e}/skillsets/${t}/file`,{method:"POST",body:s});if(!a.ok)throw new Error(`Upload failed: ${a.statusText}`);return a.json()}async function dv(e,t,n,r=10,i=0){return Ce(`/projects/${e}/skillsets/${t}/search`,{method:"POST",body:JSON.stringify({query:n,top_k:r,min_score:i})})}async function pv(e,t){return Ce(`/projects/${e}/skillsets/${t}/entries`,{method:"DELETE"})}async function fv(){return Ce("/skillsets/embeddings-available")}const Ge={async get(e){return Ce(e)},async post(e,t){return Ce(e,{method:"POST",body:t?JSON.stringify(t):void 0})},async put(e,t){return Ce(e,{method:"PUT",body:t?JSON.stringify(t):void 0})},async delete(e){return Ce(e,{method:"DELETE"})}},l_=Object.freeze(Object.defineProperty({__proto__:null,addSkillSetUrl:cv,api:Ge,checkEmbeddingsAvailable:fv,clearSkillSet:pv,createProject:Gy,createRunWebSocket:rv,deleteProject:Yy,fetchJSON:Ce,generateAgentConfig:iv,generateCallbackCode:sv,generatePrompt:na,generateToolCode:ov,getArtifactUrl:ta,getBuiltinTools:nv,getMcpServers:Gd,getProject:Ky,getProjectYaml:ev,getSkillSetStats:lv,listArtifacts:Zy,listProjectSessions:Su,listProjects:Jy,loadSession:Xy,saveSessionToMemory:Qy,searchSkillSet:dv,testMcpServer:Cu,testModelConfig:av,updateProject:ju,updateProjectFromYaml:tv,uploadSkillSetFile:uv},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var c_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),me=(e,t)=>{const n=k.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:l="",children:c,...u},d)=>k.createElement("svg",{ref:d,...c_,width:i,height:i,stroke:r,strokeWidth:a?Number(s)*24/Number(i):s,className:["lucide",`lucide-${u_(e)}`,l].join(" "),...u},[...t.map(([p,f])=>k.createElement(p,f)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=me("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=me("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=me("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=me("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=me("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=me("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=me("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=me("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=me("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=me("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=me("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=me("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=me("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=me("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=me("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=me("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=me("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=me("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=me("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=me("FileBox",[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",key:"h7jej2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M2.97 13.12c-.6.36-.97 1.02-.97 1.74v3.28c0 .72.37 1.38.97 1.74l3 1.83c.63.39 1.43.39 2.06 0l3-1.83c.6-.36.97-1.02.97-1.74v-3.28c0-.72-.37-1.38-.97-1.74l-3-1.83a1.97 1.97 0 0 0-2.06 0l-3 1.83Z",key:"f4a3oc"}],["path",{d:"m7 17-4.74-2.85",key:"etm6su"}],["path",{d:"m7 17 4.74-2.85",key:"5xuooz"}],["path",{d:"M7 17v5",key:"1yj1jh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=me("FileCheck",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=me("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=me("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=me("File",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=me("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=me("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=me("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=me("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=me("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=me("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=me("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=me("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=me("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=me("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=me("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=me("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=me("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=me("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=me("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ia=me("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=me("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=me("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=me("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=me("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=me("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=me("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=me("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=me("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=me("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=me("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=me("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=me("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=me("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=me("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=me("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=me("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=me("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=me("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=me("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=me("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=me("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=me("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=me("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=me("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=me("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=me("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=me("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=me("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function z_(){const e=Jd(),[t,n]=k.useState([]),[r,i]=k.useState(!0),[s,a]=k.useState(!1),[l,c]=k.useState("");k.useEffect(()=>{u()},[]);async function u(){try{const f=await Jy();n(f)}catch(f){console.error("Failed to load projects:",f)}finally{i(!1)}}async function d(){if(l.trim())try{const f=await Gy(l.trim());e(`/project/${f.id}`)}catch(f){console.error("Failed to create project:",f)}}async function p(f,h){if(h.stopPropagation(),!!confirm("Delete this project?"))try{await Yy(f),n(t.filter(m=>m.id!==f))}catch(m){console.error("Failed to delete project:",m)}}return o.jsxs("div",{className:"project-list",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("header",{className:"header",children:[o.jsxs("div",{className:"logo",children:[o.jsx(np,{size:40,className:"logo-icon"}),o.jsx("h1",{className:"title",children:"ADK Playground"})]}),o.jsx("p",{className:"subtitle",children:"Build, test, and deploy AI agents visually"})]}),o.jsxs("div",{className:"content",children:[s?o.jsxs("div",{className:"create-form",children:[o.jsx("input",{type:"text",placeholder:"Project name...",value:l,onChange:f=>c(f.target.value),onKeyDown:f=>f.key==="Enter"&&d(),autoFocus:!0}),o.jsxs("button",{className:"btn btn-primary",onClick:d,children:[o.jsx(Qe,{size:18}),"Create"]}),o.jsx("button",{className:"btn btn-secondary",onClick:()=>a(!1),children:"Cancel"})]}):o.jsx("div",{className:"create-form",children:o.jsxs("button",{className:"btn btn-primary",onClick:()=>a(!0),children:[o.jsx(Qe,{size:18}),"New Project"]})}),r?o.jsx("div",{className:"loading",children:"Loading projects..."}):t.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Lh,{size:48,style:{marginBottom:16,opacity:.3}}),o.jsx("p",{children:"No projects yet. Create one to get started!"})]}):o.jsx("div",{className:"projects-grid",children:t.map(f=>o.jsxs("div",{className:"project-card",onClick:()=>e(`/project/${f.id}`),children:[o.jsxs("h3",{children:[o.jsx(Lh,{size:18}),f.name]}),o.jsx("p",{children:f.description||"No description"}),o.jsx("button",{className:"delete-btn",onClick:h=>p(f.id,h),children:o.jsx(Ue,{size:16})})]},f.id))})]})]})}const Rh={},T_=5*60*1e3;function A_({projectId:e,value:t,provider:n,apiBase:r,onChange:i,placeholder:s="Search models..."}){const a=`${e}:${n||""}:${r||""}`,[l,c]=k.useState(t||""),[u,d]=k.useState(!1),[p,f]=k.useState([]),[h,m]=k.useState(!1),[b,_]=k.useState(null),[g,x]=k.useState(-1),[y,j]=k.useState({top:0,left:0,width:0}),T=k.useRef(null),S=k.useRef(null);k.useEffect(()=>{if(u&&T.current){const A=T.current.getBoundingClientRect();j({top:A.bottom+window.scrollY+4,left:A.left+window.scrollX,width:A.width})}},[u]);const L=k.useCallback(async()=>{const A=Rh[a];if(A&&Date.now()-A.timestamp<T_){const M=[];Object.values(A.providers).forEach($=>{M.push(...$.models)}),f(M);return}m(!0),_(null);try{const M=new URLSearchParams;n&&M.append("provider",n),r&&M.append("api_base",r);const $=`/models/${e}${M.toString()?"?"+M.toString():""}`,C=await Ge.get($);Rh[a]={providers:C.providers,timestamp:Date.now()};const P=[];Object.values(C.providers).forEach(I=>{I.models&&I.models.length>0&&P.push(...I.models)}),f(P)}catch(M){_(M.message||"Failed to fetch models")}finally{m(!1)}},[e,a,r,n]);k.useEffect(()=>{L()},[L]),k.useEffect(()=>{c(t||"")},[t]);const N=p.filter(A=>{const M=l.toLowerCase();return A.id.toLowerCase().includes(M)||A.name.toLowerCase().includes(M)||A.provider.toLowerCase().includes(M)});k.useEffect(()=>{const A=M=>{S.current&&!S.current.contains(M.target)&&T.current&&!T.current.contains(M.target)&&d(!1)};return document.addEventListener("mousedown",A),()=>document.removeEventListener("mousedown",A)},[]);const W=A=>{if(!u){(A.key==="ArrowDown"||A.key==="Enter")&&(d(!0),A.preventDefault());return}switch(A.key){case"ArrowDown":x(M=>Math.min(M+1,N.length-1)),A.preventDefault();break;case"ArrowUp":x(M=>Math.max(M-1,0)),A.preventDefault();break;case"Enter":g>=0&&g<N.length&&E(N[g]),A.preventDefault();break;case"Escape":d(!1);break}},E=A=>{c(A.id),i(A.id,A.provider),d(!1)},O=A=>{c(A.target.value),d(!0),x(-1),i(A.target.value,n||"gemini")},F=A=>{switch(A.toLowerCase()){case"gemini":return"provider-gemini";case"anthropic":return"provider-anthropic";case"openai":return"provider-openai";case"groq":return"provider-groq";case"together":return"provider-together";case"ollama":return"provider-ollama";default:return"provider-other"}},K=u?o.jsxs("div",{ref:S,className:"model-autocomplete-dropdown model-autocomplete-dropdown-portal",style:{position:"fixed",top:y.top,left:y.left,width:y.width},children:[h&&o.jsx("div",{className:"model-autocomplete-loading",children:"Loading models..."}),b&&o.jsx("div",{className:"model-autocomplete-error",children:b}),!h&&!b&&N.length===0&&o.jsx("div",{className:"model-autocomplete-empty",children:l?"No matching models":"No models available"}),!h&&N.length>0&&o.jsxs("div",{className:"model-autocomplete-list",children:[N.slice(0,50).map((A,M)=>o.jsxs("div",{className:`model-autocomplete-item ${M===g?"highlighted":""}`,onClick:()=>E(A),onMouseEnter:()=>x(M),children:[o.jsx("span",{className:`provider-badge ${F(A.provider)}`,children:A.provider}),o.jsx("span",{className:"model-id",children:A.id}),A.context_window&&o.jsxs("span",{className:"model-context",title:`${A.context_window.toLocaleString()} token context`,children:[Math.round(A.context_window/1e3),"K"]}),A.supports_tools&&o.jsx("span",{className:"model-feature",title:"Supports function calling / tools",children:"🔧"}),A.supports_vision&&o.jsx("span",{className:"model-feature",title:"Supports image/vision input",children:"👁️"}),A.supports_json_mode&&o.jsx("span",{className:"model-feature",title:"Supports structured JSON output",children:"📋"})]},`${A.provider}-${A.id}`)),N.length>50&&o.jsxs("div",{className:"model-autocomplete-more",children:["+",N.length-50," more..."]})]})]}):null;return o.jsxs("div",{className:"model-autocomplete",children:[o.jsx("input",{ref:T,type:"text",value:l,onChange:O,onFocus:()=>d(!0),onKeyDown:W,placeholder:s,className:"model-autocomplete-input"}),K&&zy.createPortal(K,document.body)]})}const M_=[{value:"gemini",label:"Gemini"},{value:"anthropic",label:"Anthropic"},{value:"openai",label:"OpenAI"},{value:"groq",label:"Groq"},{value:"together",label:"Together (via LiteLLM)"},{value:"litellm",label:"LiteLLM / Other"}];function P_(e,t){return e.startsWith("openai/")?"openai":e.startsWith("groq/")?"groq":e.startsWith("together_ai/")||e.startsWith("together/")?"together":e.startsWith("ollama/")?"litellm":e.startsWith("claude-")?"anthropic":e.startsWith("gemini-")?"gemini":e.includes("/")?"litellm":t||"gemini"}function jv({projectId:e,values:t,onChange:n,className:r=""}){const[i,s]=k.useState(!1),[a,l]=k.useState(null),c=async()=>{var u;if(!t.model_name||!t.provider){l({success:!1,message:"Please select a model first"});return}s(!0),l(null);try{const d=await av(e,{provider:t.provider,model_name:t.model_name,api_base:t.api_base});d.success?l({success:!0,message:((u=d.response)==null?void 0:u.slice(0,100))||"Model responded successfully!"}):l({success:!1,message:d.error||"Test failed"})}catch(d){l({success:!1,message:d.message||"Connection failed"})}finally{s(!1)}};return o.jsxs("div",{className:`model-config-form ${r}`,children:[o.jsxs("div",{className:"model-config-row",children:[o.jsxs("div",{className:"model-config-field",style:{flex:1},children:[o.jsx("label",{children:"Provider"}),o.jsx("select",{value:t.provider||"gemini",onChange:u=>{n({provider:u.target.value}),l(null)},children:M_.map(u=>o.jsx("option",{value:u.value,children:u.label},u.value))})]}),o.jsxs("div",{className:"model-config-field",style:{flex:3},children:[o.jsx("label",{children:"Model"}),o.jsx(A_,{projectId:e,value:t.model_name||"",provider:t.provider,apiBase:t.api_base,onChange:(u,d)=>{const p=P_(u,d);n({model_name:u,provider:p}),l(null)},placeholder:"Search models..."})]}),o.jsxs("div",{className:"model-config-field",style:{flex:2},children:[o.jsx("label",{children:"API Base (optional)"}),o.jsx("input",{type:"text",value:t.api_base||"",onChange:u=>{n({api_base:u.target.value||void 0}),l(null)},placeholder:t.provider==="gemini"?"https://generativelanguage.googleapis.com":t.provider==="anthropic"?"https://api.anthropic.com":t.provider==="openai"?"https://api.openai.com/v1":t.provider==="groq"?"https://api.groq.com/openai/v1":t.provider==="together"?"https://api.together.xyz/v1":"http://localhost:11434"})]}),o.jsxs("div",{className:"model-config-field model-test-field",children:[o.jsx("label",{children:" "}),o.jsxs("button",{type:"button",className:`model-test-btn ${(a==null?void 0:a.success)===!0?"success":(a==null?void 0:a.success)===!1?"error":""}`,onClick:c,disabled:i||!t.model_name,title:(a==null?void 0:a.message)||"Test model connection",children:[i?o.jsx(yv,{size:14,className:"spinning"}):(a==null?void 0:a.success)===!0?o.jsx(Bn,{size:14}):(a==null?void 0:a.success)===!1?o.jsx(mr,{size:14}):o.jsx(ip,{size:14}),i?"Testing...":"Test"]})]})]}),o.jsxs("div",{className:"model-config-row",children:[o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Temperature"}),o.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:t.temperature??"",onChange:u=>n({temperature:u.target.value?parseFloat(u.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Max Tokens"}),o.jsx("input",{type:"number",min:"1",value:t.max_output_tokens??"",onChange:u=>n({max_output_tokens:u.target.value?parseInt(u.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Top P"}),o.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:t.top_p??"",onChange:u=>n({top_p:u.target.value?parseFloat(u.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Top K"}),o.jsx("input",{type:"number",min:"1",value:t.top_k??"",onChange:u=>n({top_k:u.target.value?parseInt(u.target.value):void 0}),placeholder:"Default"})]})]}),o.jsxs("div",{className:"model-config-row",children:[o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{title:"Number of times to retry on connection failure",children:"Retries"}),o.jsx("input",{type:"number",min:"0",max:"10",value:t.num_retries??"",onChange:u=>n({num_retries:u.target.value?parseInt(u.target.value):void 0}),placeholder:"3"})]}),o.jsxs("div",{className:"model-config-field",style:{flex:2},children:[o.jsx("label",{title:"Maximum time to wait for a response (in seconds)",children:"Timeout (seconds)"}),o.jsx("input",{type:"number",min:"10",max:"7200",step:"10",value:t.request_timeout??"",onChange:u=>n({request_timeout:u.target.value?parseInt(u.target.value):void 0}),placeholder:"1800 (30 min)"})]}),o.jsxs("div",{className:"model-config-field",style:{flex:3},children:[o.jsx("label",{children:" "}),o.jsx("span",{className:"model-config-hint",style:{fontSize:"11px",color:"#666",marginTop:"4px"},children:"Increase timeout for slow models like local Ollama"})]})]})]})}const L_=[{key:"GOOGLE_API_KEY",description:"API key for Gemini models"},{key:"OPENAI_API_KEY",description:"API key for OpenAI models (via LiteLLM)"},{key:"GROQ_API_KEY",description:"API key for Groq models"},{key:"ANTHROPIC_API_KEY",description:"API key for Anthropic Claude models"},{key:"TOGETHER_API_KEY",description:"API key for Together (via LiteLLM, e.g. together_ai/* models)"},{key:"AZURE_API_KEY",description:"API key for Azure OpenAI Service"},{key:"AZURE_API_BASE",description:"Base URL for Azure OpenAI endpoint (e.g., https://your-resource.openai.azure.com)"},{key:"AZURE_API_VERSION",description:"API version for Azure OpenAI (e.g., 2024-02-15-preview)"},{key:"GOOGLE_GENAI_USE_VERTEXAI",description:'Set to "1" to use Vertex AI instead of API key'},{key:"GOOGLE_CLOUD_PROJECT",description:"Google Cloud project ID for Vertex AI"},{key:"GOOGLE_CLOUD_REGION",description:"Google Cloud region for Vertex AI (e.g., us-central1)"}];function R_(e){return/^[a-zA-Z0-9_]+$/.test(e)}function I_(){var G;const{project:e,updateProject:t}=gt(),[n,r]=k.useState(null);if(!e)return null;const{app:i}=e;function s(v){t({app:{...i,...v}})}function a(v){if(v===""){r(null),s({name:v});return}R_(v)?r(null):r("Name can only contain letters, numbers, and underscores"),s({name:v})}function l(){const v={name:`state_key_${i.state_keys.length+1}`,description:"",type:"string",scope:"session"};s({state_keys:[...i.state_keys,v]})}function c(v,z){const V=[...i.state_keys];V[v]={...V[v],...z},s({state_keys:V})}function u(v){s({state_keys:i.state_keys.filter((z,V)=>V!==v)})}function d(v="ReflectAndRetryToolPlugin"){let z;switch(v){case"ReflectAndRetryToolPlugin":z={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1};break;case"ContextFilterPlugin":z={type:"ContextFilterPlugin",name:"context_filter",num_invocations_to_keep:5};break;case"LoggingPlugin":z={type:"LoggingPlugin",name:"logging"};break;case"GlobalInstructionPlugin":z={type:"GlobalInstructionPlugin",name:"global_instruction",global_instruction:""};break;case"SaveFilesAsArtifactsPlugin":z={type:"SaveFilesAsArtifactsPlugin",name:"save_files"};break;case"MultimodalToolResultsPlugin":z={type:"MultimodalToolResultsPlugin",name:"multimodal_tools"};break;default:z={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1}}s({plugins:[...i.plugins,z]})}function p(v,z){const V=[...i.plugins];V[v]={...V[v],...z},s({plugins:V})}function f(v){s({plugins:i.plugins.filter((z,V)=>V!==v)})}const h=i.sandbox||{enabled:!1,allow_all_network:!1,allowlist:{auto:[],user:[]},unknown_action:"ask",approval_timeout:30,agent_memory_limit_mb:512,agent_cpu_limit:1,mcp_memory_limit_mb:256,mcp_cpu_limit:.5,run_timeout:3600,volume_mounts:[]},m=((G=h.allowlist)==null?void 0:G.user)||[],b=h.volume_mounts||[];function _(v){s({sandbox:{...h,...v}})}async function g(v){const z=i.id;try{await fetch(`/api/sandbox/${z}/allowlist/sync`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({patterns:v.map(V=>({pattern:V.pattern,pattern_type:V.pattern_type})).filter(V=>V.pattern)})})}catch(V){console.debug("Could not sync allowlist to gateway:",V)}}function x(){const v={id:`pattern_${Date.now().toString(36)}`,pattern:"",pattern_type:"exact",source:"user",added_at:new Date().toISOString()},z={...h.allowlist,user:[...m,v]};_({allowlist:z})}function y(v,z){const V=[...m];V[v]={...V[v],...z};const ie=V;_({allowlist:{...h.allowlist,user:ie}}),z.pattern&&g(ie)}function j(v){const z=m.filter((V,ie)=>ie!==v);_({allowlist:{...h.allowlist,user:z}})}function T(){const v={host_path:"",container_path:"/mnt/data",mode:"ro"};_({volume_mounts:[...b,v]})}function S(v,z){const V=[...b];V[v]={...V[v],...z},_({volume_mounts:V})}function L(v){const z=b.filter((V,ie)=>ie!==v);_({volume_mounts:z})}const N=i.models||[];function W(){const v=`model_${Date.now().toString(36)}`,z={id:v,name:"New Model",provider:"gemini",model_name:"gemini-2.0-flash",is_default:N.length===0};s({models:[...N,z],default_model_id:N.length===0?v:i.default_model_id})}function E(v,z){const V=N.map(ie=>ie.id===v?{...ie,...z}:ie);s({models:V})}function O(v){var ie;const z=N.filter(fe=>fe.id!==v),V=i.default_model_id===v?((ie=z[0])==null?void 0:ie.id)||void 0:i.default_model_id;s({models:z,default_model_id:V})}function F(v){s({default_model_id:v})}const K=i.env_vars||{},[A,M]=k.useState({}),[$,C]=k.useState("");function P(v=""){const z=v||$.trim();!z||K[z]!==void 0||(s({env_vars:{...K,[z]:""}}),C(""))}function I(v,z){s({env_vars:{...K,[v]:z}})}function w(v){const z={...K};delete z[v],s({env_vars:z})}function B(v){M(z=>({...z,[v]:!z[v]}))}return o.jsxs("div",{className:"app-config",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("section",{className:"section",children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(C_,{size:20}),"Basic Information"]})}),o.jsxs("div",{className:"form-grid",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"App Name"}),o.jsx("input",{type:"text",value:i.name,onChange:v=>a(v.target.value),style:{borderColor:n?"var(--error)":void 0}}),n&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:4},children:n})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Root Agent"}),o.jsxs("select",{value:i.root_agent_id||"",onChange:v=>s({root_agent_id:v.target.value||void 0}),children:[o.jsx("option",{value:"",children:"Select an agent..."}),e.agents.map(v=>o.jsx("option",{value:v.id,children:v.name},v.id))]})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(In,{size:20}),"Services"]}),o.jsx("span",{className:"section-hint",children:"Configure session, memory, and artifact storage backends"})]}),o.jsxs("div",{className:"form-grid",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Session Service"}),o.jsxs("select",{value:i.session_service_uri.split("://")[0],onChange:v=>{const z=v.target.value;s({session_service_uri:{memory:"memory://",file:"file://~/.adk-playground/sessions",sqlite:"sqlite://~/.adk-playground/sessions.db",postgresql:"postgresql://user:pass@localhost:5432/adk_sessions",mysql:"mysql://user:pass@localhost:3306/adk_sessions",agentengine:"agentengine://project/us-central1/engine-id"}[z]||z+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),o.jsx("option",{value:"file",children:"File System (JSON)"}),o.jsx("option",{value:"sqlite",children:"SQLite (local)"}),o.jsx("option",{value:"postgresql",children:"PostgreSQL"}),o.jsx("option",{value:"mysql",children:"MySQL"}),o.jsx("option",{value:"agentengine",children:"Vertex AI Agent Engine"})]}),i.session_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.session_service_uri.replace("file://",""),onChange:v=>s({session_service_uri:"file://"+v.target.value}),placeholder:"~/.adk-playground/sessions",style:{marginTop:8}}),i.session_service_uri.startsWith("sqlite://")&&o.jsx("input",{type:"text",value:i.session_service_uri.replace("sqlite://",""),onChange:v=>s({session_service_uri:"sqlite://"+v.target.value}),placeholder:"~/.adk-playground/sessions.db",style:{marginTop:8}}),(i.session_service_uri.startsWith("postgresql://")||i.session_service_uri.startsWith("mysql://"))&&o.jsx("input",{type:"text",value:i.session_service_uri,onChange:v=>s({session_service_uri:v.target.value}),placeholder:"postgresql://user:pass@localhost:5432/db",style:{marginTop:8}}),i.session_service_uri.startsWith("agentengine://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[2]||"",onChange:v=>{const z=i.session_service_uri.split("/");z[2]=v.target.value,s({session_service_uri:z.join("/")})},placeholder:"project-id"}),o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[3]||"",onChange:v=>{const z=i.session_service_uri.split("/");z[3]=v.target.value,s({session_service_uri:z.join("/")})},placeholder:"location (e.g., us-central1)"}),o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[4]||"",onChange:v=>{const z=i.session_service_uri.split("/");z[4]=v.target.value,s({session_service_uri:z.join("/")})},placeholder:"agent-engine-id"})]}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.session_service_uri.startsWith("memory://")&&"Sessions stored in memory, lost on restart",i.session_service_uri.startsWith("file://")&&"Sessions stored as JSON files, preserves UI events",i.session_service_uri.startsWith("sqlite://")&&"Persists to local SQLite file",i.session_service_uri.startsWith("postgresql://")&&"Production-ready PostgreSQL backend",i.session_service_uri.startsWith("mysql://")&&"Production-ready MySQL backend",i.session_service_uri.startsWith("agentengine://")&&"Vertex AI Agent Engine managed sessions"]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Memory Service"}),o.jsxs("select",{value:i.memory_service_uri.split("://")[0],onChange:v=>{const z=v.target.value;s({memory_service_uri:{memory:"memory://",file:"file://~/.adk-playground/memory",rag:"rag://rag-corpus-id",agentengine:"agentengine://project/us-central1/engine-id"}[z]||z+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (keyword matching)"}),o.jsx("option",{value:"file",children:"File System (keyword matching)"}),o.jsx("option",{value:"rag",children:"Vertex AI RAG"}),o.jsx("option",{value:"agentengine",children:"Vertex AI Memory Bank"})]}),i.memory_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.memory_service_uri.replace("file://",""),onChange:v=>s({memory_service_uri:"file://"+v.target.value}),placeholder:"~/.adk-playground/memory",style:{marginTop:8}}),i.memory_service_uri.startsWith("rag://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.memory_service_uri.replace("rag://",""),onChange:v=>s({memory_service_uri:"rag://"+v.target.value}),placeholder:"rag-corpus-id or full resource path"}),o.jsx("span",{className:"help-text",style:{fontSize:11,color:"var(--text-dim)"},children:"Format: projects/PROJECT/locations/LOCATION/ragCorpora/CORPUS_ID"})]}),i.memory_service_uri.startsWith("agentengine://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[2]||"",onChange:v=>{const z=i.memory_service_uri.split("/");z[2]=v.target.value,s({memory_service_uri:z.join("/")})},placeholder:"project-id"}),o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[3]||"",onChange:v=>{const z=i.memory_service_uri.split("/");z[3]=v.target.value,s({memory_service_uri:z.join("/")})},placeholder:"location (e.g., us-central1)"}),o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[4]||"",onChange:v=>{const z=i.memory_service_uri.split("/");z[4]=v.target.value,s({memory_service_uri:z.join("/")})},placeholder:"agent-engine-id"})]}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.memory_service_uri.startsWith("memory://")&&"Simple keyword matching, good for prototyping",i.memory_service_uri.startsWith("file://")&&"Persists memories as JSON files",i.memory_service_uri.startsWith("rag://")&&"Semantic search using Vertex AI RAG corpus",i.memory_service_uri.startsWith("agentengine://")&&"Managed memory via Agent Engine Memory Bank"]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Artifact Service"}),o.jsxs("select",{value:i.artifact_service_uri.split("://")[0]==="gs"?"gs":i.artifact_service_uri.split("://")[0],onChange:v=>{const z=v.target.value;s({artifact_service_uri:{memory:"memory://",file:"file://~/.adk-playground/artifacts",gs:"gs://your-bucket-name"}[z]||z+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),o.jsx("option",{value:"file",children:"File System"}),o.jsx("option",{value:"gs",children:"Google Cloud Storage"})]}),i.artifact_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.artifact_service_uri.replace("file://",""),onChange:v=>s({artifact_service_uri:"file://"+v.target.value}),placeholder:"~/.adk-playground/artifacts",style:{marginTop:8}}),i.artifact_service_uri.startsWith("gs://")&&o.jsx("input",{type:"text",value:i.artifact_service_uri.replace("gs://",""),onChange:v=>s({artifact_service_uri:"gs://"+v.target.value}),placeholder:"bucket-name/optional-prefix",style:{marginTop:8}}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.artifact_service_uri.startsWith("memory://")&&"Artifacts stored in memory, lost on restart",i.artifact_service_uri.startsWith("file://")&&"Persists to local filesystem",i.artifact_service_uri.startsWith("gs://")&&"Production-ready Google Cloud Storage backend"]})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(Eu,{size:20}),"Environment Variables"]})}),o.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginBottom:16},children:"Set API keys and other environment variables. These are passed to the agent runtime."}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16},children:L_.filter(v=>K[v.key]===void 0).map(v=>o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>P(v.key),title:v.description,children:[o.jsx(Qe,{size:12}),v.key]},v.key))}),Object.keys(K).length===0?o.jsx("p",{className:"empty-message",children:"No environment variables set. Click a button above to add common variables, or add a custom one below."}):Object.entries(K).map(([v,z])=>o.jsxs("div",{className:"list-item",style:{alignItems:"center"},children:[o.jsxs("div",{style:{flex:1,display:"flex",gap:12,alignItems:"center"},children:[o.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:13,minWidth:200},children:v}),o.jsxs("div",{style:{flex:1,display:"flex",gap:8,alignItems:"center"},children:[o.jsx("input",{type:A[v]?"text":"password",value:z,onChange:V=>I(v,V.target.value),placeholder:"Enter value...",style:{flex:1}}),o.jsx("button",{className:"delete-item",onClick:()=>B(v),title:A[v]?"Hide value":"Show value",children:A[v]?o.jsx(h_,{size:16}):o.jsx(Dr,{size:16})})]})]}),o.jsx("button",{className:"delete-item",onClick:()=>w(v),children:o.jsx(Ue,{size:16})})]},v)),o.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[o.jsx("input",{type:"text",value:$,onChange:v=>C(v.target.value.toUpperCase().replace(/[^A-Z0-9_]/g,"")),placeholder:"CUSTOM_VAR_NAME",style:{flex:1,fontFamily:"var(--font-mono)"},onKeyDown:v=>v.key==="Enter"&&P()}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>P(),disabled:!$.trim(),children:[o.jsx(Qe,{size:14}),"Add Variable"]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(Xd,{size:20}),"Models"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:W,children:[o.jsx(Qe,{size:14}),"Add Model"]})]}),N.length===0?o.jsx("p",{className:"empty-message",children:"No models configured. Add models that agents can use."}):N.map(v=>o.jsxs("div",{className:"model-card",children:[o.jsxs("div",{className:"model-card-header",children:[o.jsx("input",{type:"text",value:v.name,onChange:z=>E(v.id,{name:z.target.value}),placeholder:"Model name",className:"model-name-input"}),o.jsx("button",{className:`default-model-btn ${i.default_model_id===v.id?"is-default":""}`,onClick:()=>F(v.id),title:i.default_model_id===v.id?"Default model":"Set as default",children:o.jsx(kv,{size:14,fill:i.default_model_id===v.id?"currentColor":"none"})}),o.jsx("button",{className:"delete-item",onClick:()=>O(v.id),children:o.jsx(Ue,{size:16})})]}),o.jsx("div",{className:"model-card-body",children:o.jsx(jv,{projectId:e.id,values:v,onChange:z=>E(v.id,z)})})]},v.id))]}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20},children:[o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(ep,{size:20}),"State Keys"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:l,children:[o.jsx(Qe,{size:14}),"Add"]})]}),i.state_keys.length===0?o.jsx("p",{className:"empty-message",children:"No state keys. Auto-created when you add LlmAgents."}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:i.state_keys.map((v,z)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"6px 8px",background:"var(--bg-secondary)",borderRadius:4},children:[o.jsx("input",{type:"text",value:v.name,onChange:V=>c(z,{name:V.target.value}),placeholder:"Key name",style:{flex:1,minWidth:0,padding:"4px 8px",fontSize:12}}),o.jsxs("select",{value:v.type,onChange:V=>c(z,{type:V.target.value}),style:{width:60,flexShrink:0,padding:"4px 6px",fontSize:11},children:[o.jsx("option",{value:"string",children:"str"}),o.jsx("option",{value:"number",children:"num"}),o.jsx("option",{value:"boolean",children:"bool"}),o.jsx("option",{value:"object",children:"obj"}),o.jsx("option",{value:"array",children:"arr"})]}),o.jsx("button",{className:"delete-item",onClick:()=>u(z),style:{padding:4,flexShrink:0},children:o.jsx(Ue,{size:12})})]},z))})]}),o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(ip,{size:20}),"Advanced Options"]})}),o.jsxs("div",{className:"toggle-group",children:[o.jsx("div",{className:`toggle ${i.compaction.enabled?"active":""}`,onClick:()=>s({compaction:{...i.compaction,enabled:!i.compaction.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Event Compaction"}),o.jsx("span",{children:"Summarize old events"})]}),i.compaction.enabled&&o.jsx("input",{type:"number",value:i.compaction.max_events,onChange:v=>s({compaction:{...i.compaction,max_events:parseInt(v.target.value)||100}}),style:{width:60,padding:"4px 6px",fontSize:12},placeholder:"Max"})]}),o.jsxs("div",{className:"toggle-group",style:{marginTop:10},children:[o.jsx("div",{className:`toggle ${i.context_cache.enabled?"active":""}`,onClick:()=>s({context_cache:{...i.context_cache,enabled:!i.context_cache.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Context Caching"}),o.jsx("span",{children:"Cache static instructions"})]}),i.context_cache.enabled&&o.jsx("input",{type:"number",value:i.context_cache.ttl_seconds,onChange:v=>s({context_cache:{...i.context_cache,ttl_seconds:parseInt(v.target.value)||3600}}),style:{width:70,padding:"4px 6px",fontSize:12},placeholder:"TTL"})]}),o.jsxs("div",{className:"toggle-group",style:{marginTop:10},children:[o.jsx("div",{className:`toggle ${i.resumability.enabled?"active":""}`,onClick:()=>s({resumability:{...i.resumability,enabled:!i.resumability.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Resumability"}),o.jsx("span",{children:"Pause/resume execution"})]})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(Zt,{size:20}),"Plugins"]}),o.jsx("div",{className:"plugin-add-dropdown",children:o.jsxs("select",{className:"btn btn-secondary btn-sm",value:"",onChange:v=>{v.target.value&&(d(v.target.value),v.target.value="")},style:{paddingRight:8},children:[o.jsx("option",{value:"",children:"+ Add Plugin..."}),o.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),o.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),o.jsx("option",{value:"LoggingPlugin",children:"Logging"}),o.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),o.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),o.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]})})]}),i.plugins.length===0?o.jsx("p",{className:"empty-message",children:"No plugins configured. Add plugins to extend agent functionality."}):i.plugins.map((v,z)=>o.jsxs("div",{className:"list-item",style:{flexDirection:"column",gap:12},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",gap:12},children:[o.jsxs("select",{value:v.type,onChange:V=>p(z,{type:V.target.value}),style:{flex:1},children:[o.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),o.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),o.jsx("option",{value:"LoggingPlugin",children:"Logging"}),o.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),o.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),o.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]}),o.jsx("button",{className:"delete-item",onClick:()=>f(z),children:o.jsx(Ue,{size:16})})]}),v.type==="ReflectAndRetryToolPlugin"&&o.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",style:{flex:0},children:[o.jsx("label",{style:{fontSize:12},children:"Max Retries"}),o.jsx("input",{type:"number",min:"0",max:"10",value:v.max_retries??3,onChange:V=>p(z,{max_retries:parseInt(V.target.value)||0}),style:{width:70}})]}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:v.throw_exception_if_retry_exceeded??!1,onChange:V=>p(z,{throw_exception_if_retry_exceeded:V.target.checked})}),o.jsx("span",{className:"toggle-slider"})]}),"Throw exception if retry exceeded"]})]}),v.type==="ContextFilterPlugin"&&o.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",style:{flex:0},children:[o.jsx("label",{style:{fontSize:12},children:"Invocations to Keep"}),o.jsx("input",{type:"number",min:"1",max:"100",value:v.num_invocations_to_keep??5,onChange:V=>p(z,{num_invocations_to_keep:parseInt(V.target.value)||1}),style:{width:70}})]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Keeps only the last N conversation turns to reduce context size"})]}),v.type==="LoggingPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Logs all agent events (messages, tool calls, responses) to the console"})}),v.type==="GlobalInstructionPlugin"&&o.jsxs("div",{style:{width:"100%",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{style:{fontSize:12},children:"Global Instruction"}),o.jsx("textarea",{value:v.global_instruction??"",onChange:V=>p(z,{global_instruction:V.target.value}),placeholder:"Instructions that apply to all agents in the app...",rows:3,style:{width:"100%"}})]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"This instruction is prepended to every agent's system prompt"})]}),v.type==="SaveFilesAsArtifactsPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Automatically saves files uploaded in user messages as artifacts for later retrieval"})}),v.type==="MultimodalToolResultsPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Allows tools to return multimodal content (images, files) directly to the LLM"})})]},z))]}),o.jsxs("section",{className:"section",children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(Ni,{size:20}),"Sandbox Limits"]})}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:12},children:[o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Run Timeout"}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("input",{type:"number",value:h.run_timeout,onChange:v=>_({run_timeout:parseInt(v.target.value)||3600}),min:60,max:86400,step:60,style:{width:100}}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)"},children:h.run_timeout>=3600?`${Math.floor(h.run_timeout/3600)}h ${Math.floor(h.run_timeout%3600/60)}m`:`${Math.floor(h.run_timeout/60)}m`})]}),o.jsx("p",{className:"field-hint",children:"Max time for agent run (seconds)"})]}),o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Agent Memory"}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("input",{type:"number",value:h.agent_memory_limit_mb,onChange:v=>_({agent_memory_limit_mb:parseInt(v.target.value)||512}),min:128,max:8192,step:128,style:{width:100}}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)"},children:"MB"})]}),o.jsx("p",{className:"field-hint",children:"Memory limit for agent container"})]}),o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Agent CPU"}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("input",{type:"number",value:h.agent_cpu_limit,onChange:v=>_({agent_cpu_limit:parseFloat(v.target.value)||1}),min:.25,max:8,step:.25,style:{width:100}}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)"},children:"cores"})]}),o.jsx("p",{className:"field-hint",children:"CPU limit for agent container"})]})]})]}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20},children:[o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(wv,{size:20}),"Network Allowlist"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:x,children:[o.jsx(Qe,{size:14}),"Add"]})]}),o.jsxs("div",{className:"toggle-group",style:{marginBottom:10},children:[o.jsx("div",{className:`toggle ${h.allow_all_network?"active":""}`,onClick:()=>_({allow_all_network:!h.allow_all_network,unknown_action:h.allow_all_network?h.unknown_action:"allow"})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Allow all network connections"}),o.jsx("span",{children:"Disables approval/deny; still routes through the sandbox proxy"})]})]}),m.length===0?o.jsx("p",{className:"empty-message",style:{fontSize:11},children:"No custom patterns. LLM APIs allowed by default."}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:m.map((v,z)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"6px 8px",background:"var(--bg-secondary)",borderRadius:4},children:[o.jsx(Zd,{size:14,style:{color:"var(--text-muted)",flexShrink:0}}),o.jsx("input",{type:"text",value:v.pattern,onChange:V=>y(z,{pattern:V.target.value}),placeholder:"*.example.com",style:{flex:1,padding:"4px 6px",fontSize:11}}),o.jsxs("select",{value:v.pattern_type,onChange:V=>y(z,{pattern_type:V.target.value}),style:{padding:"4px",fontSize:10,width:70},children:[o.jsx("option",{value:"exact",children:"exact"}),o.jsx("option",{value:"wildcard",children:"wild"}),o.jsx("option",{value:"regex",children:"regex"})]}),o.jsx("button",{className:"delete-item",onClick:()=>j(z),style:{padding:4},children:o.jsx(Ue,{size:12})})]},v.id||z))})]}),o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(v_,{size:20}),"Volume Mounts"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:T,children:[o.jsx(Qe,{size:14}),"Add"]})]}),b.length===0?o.jsx("p",{className:"empty-message",style:{fontSize:11},children:"No mounts. Add to give sandbox file access."}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:b.map((v,z)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"6px 8px",background:"var(--bg-secondary)",borderRadius:4},children:[o.jsx(mv,{size:14,style:{color:"var(--text-muted)",flexShrink:0}}),o.jsx("input",{type:"text",value:v.host_path,onChange:V=>S(z,{host_path:V.target.value}),placeholder:"~/path",style:{flex:1,padding:"4px 6px",fontSize:11},title:"Host path"}),o.jsx("span",{style:{color:"var(--text-muted)",fontSize:10},children:"→"}),o.jsx("input",{type:"text",value:v.container_path,onChange:V=>S(z,{container_path:V.target.value}),placeholder:"/mnt",style:{width:70,padding:"4px 6px",fontSize:11},title:"Container path"}),o.jsxs("select",{value:v.mode,onChange:V=>S(z,{mode:V.target.value}),style:{padding:"4px",fontSize:10,width:50},children:[o.jsx("option",{value:"ro",children:"ro"}),o.jsx("option",{value:"rw",children:"rw"})]}),o.jsx("button",{className:"delete-item",onClick:()=>L(z),style:{padding:4},children:o.jsx(Ue,{size:12})})]},z))})]})]})]})}const O_="modulepreload",$_=function(e){return"/"+e},Ih={},D_=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=$_(c),c in Ih)return;Ih[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":O_,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((f,h)=>{p.addEventListener("load",f),p.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})};function Oh(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function F_(e){if(Array.isArray(e))return e}function B_(e,t,n){return(t=K_(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U_(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,s,a,l=[],c=!0,u=!1;try{if(s=(n=n.call(e)).next,t!==0)for(;!(c=(r=s.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(d){u=!0,i=d}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function W_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Dh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$h(Object(n),!0).forEach(function(r){B_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$h(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function V_(e,t){if(e==null)return{};var n,r,i=H_(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function H_(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function q_(e,t){return F_(e)||U_(e,t)||G_(e,t)||W_()}function J_(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function K_(e){var t=J_(e,"string");return typeof t=="symbol"?t:t+""}function G_(e,t){if(e){if(typeof e=="string")return Oh(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Oh(e,t):void 0}}function Y_(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Bh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Fh(Object(n),!0).forEach(function(r){Y_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Q_(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,s){return s(i)},r)}}function so(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function $a(e){return{}.toString.call(e).includes("Object")}function X_(e){return!Object.keys(e).length}function Wo(e){return typeof e=="function"}function Z_(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ej(e,t){return $a(t)||dr("changeType"),Object.keys(t).some(function(n){return!Z_(e,n)})&&dr("changeField"),t}function tj(e){Wo(e)||dr("selectorType")}function nj(e){Wo(e)||$a(e)||dr("handlerType"),$a(e)&&Object.values(e).some(function(t){return!Wo(t)})&&dr("handlersType")}function rj(e){e||dr("initialIsRequired"),$a(e)||dr("initialType"),X_(e)&&dr("initialContent")}function ij(e,t){throw new Error(e[t]||e.default)}var oj={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},dr=so(ij)(oj),Ps={changes:ej,selector:tj,handler:nj,initial:rj};function sj(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ps.initial(e),Ps.handler(t);var n={current:e},r=so(cj)(n,t),i=so(lj)(n),s=so(Ps.changes)(e),a=so(aj)(n);function l(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return Ps.selector(u),u(n.current)}function c(u){Q_(r,i,s,a)(u)}return[l,c]}function aj(e,t){return Wo(t)?t(e.current):t}function lj(e,t){return e.current=Bh(Bh({},e.current),t),t}function cj(e,t,n){return Wo(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var uj={create:sj},dj={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function pj(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function fj(e){return{}.toString.call(e).includes("Object")}function hj(e){return e||Uh("configIsRequired"),fj(e)||Uh("configType"),e.urls?(mj(),{paths:{vs:e.urls.monacoBase}}):e}function mj(){console.warn(Sv.deprecation)}function gj(e,t){throw new Error(e[t]||e.default)}var Sv={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Uh=pj(gj)(Sv),xj={config:hj},yj=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(s,a){return a(s)},i)}};function Cv(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],Cv(e[n],t[n]))}),Dh(Dh({},e),t)}var vj={type:"cancelation",msg:"operation is manually canceled"};function oc(e){var t=!1,n=new Promise(function(r,i){e.then(function(s){return t?i(vj):r(s)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var bj=["monaco"],wj=uj.create({config:dj,isInitialized:!1,resolve:null,reject:null,monaco:null}),Nv=q_(wj,2),os=Nv[0],ml=Nv[1];function kj(e){var t=xj.config(e),n=t.monaco,r=V_(t,bj);ml(function(i){return{config:Cv(i.config,r),monaco:n}})}function _j(){var e=os(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(ml({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),oc(sc);if(window.monaco&&window.monaco.editor)return Ev(window.monaco),e.resolve(window.monaco),oc(sc);yj(jj,Cj)(Nj)}return oc(sc)}function jj(e){return document.body.appendChild(e)}function Sj(e){var t=document.createElement("script");return e&&(t.src=e),t}function Cj(e){var t=os(function(r){var i=r.config,s=r.reject;return{config:i,reject:s}}),n=Sj("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function Nj(){var e=os(function(n){var r=n.config,i=n.resolve,s=n.reject;return{config:r,resolve:i,reject:s}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;Ev(r),e.resolve(r)},function(n){e.reject(n)})}function Ev(e){os().monaco||ml({monaco:e})}function Ej(){return os(function(e){var t=e.monaco;return t})}var sc=new Promise(function(e,t){return ml({resolve:e,reject:t})}),zv={config:kj,init:_j,__getMonacoInstance:Ej},zj={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},ac=zj,Tj={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Aj=Tj;function Mj({children:e}){return Wt.createElement("div",{style:Aj.container},e)}var Pj=Mj,Lj=Pj;function Rj({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:s,wrapperProps:a}){return Wt.createElement("section",{style:{...ac.wrapper,width:e,height:t},...a},!n&&Wt.createElement(Lj,null,r),Wt.createElement("div",{ref:i,style:{...ac.fullWidth,...!n&&ac.hide},className:s}))}var Ij=Rj,Tv=k.memo(Ij);function Oj(e){k.useEffect(e,[])}var Av=Oj;function $j(e,t,n=!0){let r=k.useRef(!0);k.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var Dt=$j;function vo(){}function ai(e,t,n,r){return Dj(e,r)||Fj(e,t,n,r)}function Dj(e,t){return e.editor.getModel(Mv(e,t))}function Fj(e,t,n,r){return e.editor.createModel(t,n,r?Mv(e,r):void 0)}function Mv(e,t){return e.Uri.parse(t)}function Bj({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:s,modifiedModelPath:a,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:c=!1,theme:u="light",loading:d="Loading...",options:p={},height:f="100%",width:h="100%",className:m,wrapperProps:b={},beforeMount:_=vo,onMount:g=vo}){let[x,y]=k.useState(!1),[j,T]=k.useState(!0),S=k.useRef(null),L=k.useRef(null),N=k.useRef(null),W=k.useRef(g),E=k.useRef(_),O=k.useRef(!1);Av(()=>{let M=zv.init();return M.then($=>(L.current=$)&&T(!1)).catch($=>($==null?void 0:$.type)!=="cancelation"&&console.error("Monaco initialization: error:",$)),()=>S.current?A():M.cancel()}),Dt(()=>{if(S.current&&L.current){let M=S.current.getOriginalEditor(),$=ai(L.current,e||"",r||n||"text",s||"");$!==M.getModel()&&M.setModel($)}},[s],x),Dt(()=>{if(S.current&&L.current){let M=S.current.getModifiedEditor(),$=ai(L.current,t||"",i||n||"text",a||"");$!==M.getModel()&&M.setModel($)}},[a],x),Dt(()=>{let M=S.current.getModifiedEditor();M.getOption(L.current.editor.EditorOption.readOnly)?M.setValue(t||""):t!==M.getValue()&&(M.executeEdits("",[{range:M.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),M.pushUndoStop())},[t],x),Dt(()=>{var M,$;($=(M=S.current)==null?void 0:M.getModel())==null||$.original.setValue(e||"")},[e],x),Dt(()=>{let{original:M,modified:$}=S.current.getModel();L.current.editor.setModelLanguage(M,r||n||"text"),L.current.editor.setModelLanguage($,i||n||"text")},[n,r,i],x),Dt(()=>{var M;(M=L.current)==null||M.editor.setTheme(u)},[u],x),Dt(()=>{var M;(M=S.current)==null||M.updateOptions(p)},[p],x);let F=k.useCallback(()=>{var C;if(!L.current)return;E.current(L.current);let M=ai(L.current,e||"",r||n||"text",s||""),$=ai(L.current,t||"",i||n||"text",a||"");(C=S.current)==null||C.setModel({original:M,modified:$})},[n,t,i,e,r,s,a]),K=k.useCallback(()=>{var M;!O.current&&N.current&&(S.current=L.current.editor.createDiffEditor(N.current,{automaticLayout:!0,...p}),F(),(M=L.current)==null||M.editor.setTheme(u),y(!0),O.current=!0)},[p,u,F]);k.useEffect(()=>{x&&W.current(S.current,L.current)},[x]),k.useEffect(()=>{!j&&!x&&K()},[j,x,K]);function A(){var $,C,P,I;let M=($=S.current)==null?void 0:$.getModel();l||((C=M==null?void 0:M.original)==null||C.dispose()),c||((P=M==null?void 0:M.modified)==null||P.dispose()),(I=S.current)==null||I.dispose()}return Wt.createElement(Tv,{width:h,height:f,isEditorReady:x,loading:d,_ref:N,className:m,wrapperProps:b})}var Uj=Bj;k.memo(Uj);function Wj(e){let t=k.useRef();return k.useEffect(()=>{t.current=e},[e]),t.current}var Vj=Wj,Ls=new Map;function Hj({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:s,theme:a="light",line:l,loading:c="Loading...",options:u={},overrideServices:d={},saveViewState:p=!0,keepCurrentModel:f=!1,width:h="100%",height:m="100%",className:b,wrapperProps:_={},beforeMount:g=vo,onMount:x=vo,onChange:y,onValidate:j=vo}){let[T,S]=k.useState(!1),[L,N]=k.useState(!0),W=k.useRef(null),E=k.useRef(null),O=k.useRef(null),F=k.useRef(x),K=k.useRef(g),A=k.useRef(),M=k.useRef(r),$=Vj(s),C=k.useRef(!1),P=k.useRef(!1);Av(()=>{let B=zv.init();return B.then(G=>(W.current=G)&&N(!1)).catch(G=>(G==null?void 0:G.type)!=="cancelation"&&console.error("Monaco initialization: error:",G)),()=>E.current?w():B.cancel()}),Dt(()=>{var G,v,z,V;let B=ai(W.current,e||r||"",t||i||"",s||n||"");B!==((G=E.current)==null?void 0:G.getModel())&&(p&&Ls.set($,(v=E.current)==null?void 0:v.saveViewState()),(z=E.current)==null||z.setModel(B),p&&((V=E.current)==null||V.restoreViewState(Ls.get(s))))},[s],T),Dt(()=>{var B;(B=E.current)==null||B.updateOptions(u)},[u],T),Dt(()=>{!E.current||r===void 0||(E.current.getOption(W.current.editor.EditorOption.readOnly)?E.current.setValue(r):r!==E.current.getValue()&&(P.current=!0,E.current.executeEdits("",[{range:E.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),E.current.pushUndoStop(),P.current=!1))},[r],T),Dt(()=>{var G,v;let B=(G=E.current)==null?void 0:G.getModel();B&&i&&((v=W.current)==null||v.editor.setModelLanguage(B,i))},[i],T),Dt(()=>{var B;l!==void 0&&((B=E.current)==null||B.revealLine(l))},[l],T),Dt(()=>{var B;(B=W.current)==null||B.editor.setTheme(a)},[a],T);let I=k.useCallback(()=>{var B;if(!(!O.current||!W.current)&&!C.current){K.current(W.current);let G=s||n,v=ai(W.current,r||e||"",t||i||"",G||"");E.current=(B=W.current)==null?void 0:B.editor.create(O.current,{model:v,automaticLayout:!0,...u},d),p&&E.current.restoreViewState(Ls.get(G)),W.current.editor.setTheme(a),l!==void 0&&E.current.revealLine(l),S(!0),C.current=!0}},[e,t,n,r,i,s,u,d,p,a,l]);k.useEffect(()=>{T&&F.current(E.current,W.current)},[T]),k.useEffect(()=>{!L&&!T&&I()},[L,T,I]),M.current=r,k.useEffect(()=>{var B,G;T&&y&&((B=A.current)==null||B.dispose(),A.current=(G=E.current)==null?void 0:G.onDidChangeModelContent(v=>{P.current||y(E.current.getValue(),v)}))},[T,y]),k.useEffect(()=>{if(T){let B=W.current.editor.onDidChangeMarkers(G=>{var z;let v=(z=E.current.getModel())==null?void 0:z.uri;if(v&&G.find(V=>V.path===v.path)){let V=W.current.editor.getModelMarkers({resource:v});j==null||j(V)}});return()=>{B==null||B.dispose()}}return()=>{}},[T,j]);function w(){var B,G;(B=A.current)==null||B.dispose(),f?p&&Ls.set(s,E.current.saveViewState()):(G=E.current.getModel())==null||G.dispose(),E.current.dispose()}return Wt.createElement(Tv,{width:h,height:m,isEditorReady:T,loading:c,_ref:O,className:b,wrapperProps:_})}var qj=Hj,Jj=k.memo(qj),en=Jj;function Kj(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const Gj=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Yj=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Qj={};function Wh(e,t){return(Qj.jsx?Yj:Gj).test(e)}const Xj=/[ \t\n\f\r]/g;function Zj(e){return typeof e=="object"?e.type==="text"?Vh(e.value):!1:Vh(e)}function Vh(e){return e.replace(Xj,"")===""}class ss{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}ss.prototype.normal={};ss.prototype.property={};ss.prototype.space=void 0;function Pv(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new ss(n,r,t)}function Tu(e){return e.toLowerCase()}class Lt{constructor(t,n){this.attribute=n,this.property=t}}Lt.prototype.attribute="";Lt.prototype.booleanish=!1;Lt.prototype.boolean=!1;Lt.prototype.commaOrSpaceSeparated=!1;Lt.prototype.commaSeparated=!1;Lt.prototype.defined=!1;Lt.prototype.mustUseProperty=!1;Lt.prototype.number=!1;Lt.prototype.overloadedBoolean=!1;Lt.prototype.property="";Lt.prototype.spaceSeparated=!1;Lt.prototype.space=void 0;let e2=0;const Se=Vr(),Ye=Vr(),Au=Vr(),ue=Vr(),Ie=Vr(),hi=Vr(),Ot=Vr();function Vr(){return 2**++e2}const Mu=Object.freeze(Object.defineProperty({__proto__:null,boolean:Se,booleanish:Ye,commaOrSpaceSeparated:Ot,commaSeparated:hi,number:ue,overloadedBoolean:Au,spaceSeparated:Ie},Symbol.toStringTag,{value:"Module"})),lc=Object.keys(Mu);class op extends Lt{constructor(t,n,r,i){let s=-1;if(super(t,n),Hh(this,"space",i),typeof r=="number")for(;++s<lc.length;){const a=lc[s];Hh(this,lc[s],(r&Mu[a])===Mu[a])}}}op.prototype.defined=!0;function Hh(e,t,n){n&&(e[t]=n)}function Ri(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const s=new op(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(s.mustUseProperty=!0),t[r]=s,n[Tu(r)]=r,n[Tu(s.attribute)]=r}return new ss(t,n,e.space)}const Lv=Ri({properties:{ariaActiveDescendant:null,ariaAtomic:Ye,ariaAutoComplete:null,ariaBusy:Ye,ariaChecked:Ye,ariaColCount:ue,ariaColIndex:ue,ariaColSpan:ue,ariaControls:Ie,ariaCurrent:null,ariaDescribedBy:Ie,ariaDetails:null,ariaDisabled:Ye,ariaDropEffect:Ie,ariaErrorMessage:null,ariaExpanded:Ye,ariaFlowTo:Ie,ariaGrabbed:Ye,ariaHasPopup:null,ariaHidden:Ye,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ie,ariaLevel:ue,ariaLive:null,ariaModal:Ye,ariaMultiLine:Ye,ariaMultiSelectable:Ye,ariaOrientation:null,ariaOwns:Ie,ariaPlaceholder:null,ariaPosInSet:ue,ariaPressed:Ye,ariaReadOnly:Ye,ariaRelevant:null,ariaRequired:Ye,ariaRoleDescription:Ie,ariaRowCount:ue,ariaRowIndex:ue,ariaRowSpan:ue,ariaSelected:Ye,ariaSetSize:ue,ariaSort:null,ariaValueMax:ue,ariaValueMin:ue,ariaValueNow:ue,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function Rv(e,t){return t in e?e[t]:t}function Iv(e,t){return Rv(e,t.toLowerCase())}const t2=Ri({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:hi,acceptCharset:Ie,accessKey:Ie,action:null,allow:null,allowFullScreen:Se,allowPaymentRequest:Se,allowUserMedia:Se,alt:null,as:null,async:Se,autoCapitalize:null,autoComplete:Ie,autoFocus:Se,autoPlay:Se,blocking:Ie,capture:null,charSet:null,checked:Se,cite:null,className:Ie,cols:ue,colSpan:null,content:null,contentEditable:Ye,controls:Se,controlsList:Ie,coords:ue|hi,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Se,defer:Se,dir:null,dirName:null,disabled:Se,download:Au,draggable:Ye,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Se,formTarget:null,headers:Ie,height:ue,hidden:Au,high:ue,href:null,hrefLang:null,htmlFor:Ie,httpEquiv:Ie,id:null,imageSizes:null,imageSrcSet:null,inert:Se,inputMode:null,integrity:null,is:null,isMap:Se,itemId:null,itemProp:Ie,itemRef:Ie,itemScope:Se,itemType:Ie,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Se,low:ue,manifest:null,max:null,maxLength:ue,media:null,method:null,min:null,minLength:ue,multiple:Se,muted:Se,name:null,nonce:null,noModule:Se,noValidate:Se,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Se,optimum:ue,pattern:null,ping:Ie,placeholder:null,playsInline:Se,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Se,referrerPolicy:null,rel:Ie,required:Se,reversed:Se,rows:ue,rowSpan:ue,sandbox:Ie,scope:null,scoped:Se,seamless:Se,selected:Se,shadowRootClonable:Se,shadowRootDelegatesFocus:Se,shadowRootMode:null,shape:null,size:ue,sizes:null,slot:null,span:ue,spellCheck:Ye,src:null,srcDoc:null,srcLang:null,srcSet:null,start:ue,step:null,style:null,tabIndex:ue,target:null,title:null,translate:null,type:null,typeMustMatch:Se,useMap:null,value:Ye,width:ue,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Ie,axis:null,background:null,bgColor:null,border:ue,borderColor:null,bottomMargin:ue,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Se,declare:Se,event:null,face:null,frame:null,frameBorder:null,hSpace:ue,leftMargin:ue,link:null,longDesc:null,lowSrc:null,marginHeight:ue,marginWidth:ue,noResize:Se,noHref:Se,noShade:Se,noWrap:Se,object:null,profile:null,prompt:null,rev:null,rightMargin:ue,rules:null,scheme:null,scrolling:Ye,standby:null,summary:null,text:null,topMargin:ue,valueType:null,version:null,vAlign:null,vLink:null,vSpace:ue,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Se,disableRemotePlayback:Se,prefix:null,property:null,results:ue,security:null,unselectable:null},space:"html",transform:Iv}),n2=Ri({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Ot,accentHeight:ue,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:ue,amplitude:ue,arabicForm:null,ascent:ue,attributeName:null,attributeType:null,azimuth:ue,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:ue,by:null,calcMode:null,capHeight:ue,className:Ie,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:ue,diffuseConstant:ue,direction:null,display:null,dur:null,divisor:ue,dominantBaseline:null,download:Se,dx:null,dy:null,edgeMode:null,editable:null,elevation:ue,enableBackground:null,end:null,event:null,exponent:ue,externalResourcesRequired:null,fill:null,fillOpacity:ue,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:hi,g2:hi,glyphName:hi,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:ue,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:ue,horizOriginX:ue,horizOriginY:ue,id:null,ideographic:ue,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:ue,k:ue,k1:ue,k2:ue,k3:ue,k4:ue,kernelMatrix:Ot,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:ue,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:ue,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:ue,overlineThickness:ue,paintOrder:null,panose1:null,path:null,pathLength:ue,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Ie,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:ue,pointsAtY:ue,pointsAtZ:ue,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Ot,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Ot,rev:Ot,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Ot,requiredFeatures:Ot,requiredFonts:Ot,requiredFormats:Ot,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:ue,specularExponent:ue,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:ue,strikethroughThickness:ue,string:null,stroke:null,strokeDashArray:Ot,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:ue,strokeOpacity:ue,strokeWidth:null,style:null,surfaceScale:ue,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Ot,tabIndex:ue,tableValues:null,target:null,targetX:ue,targetY:ue,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Ot,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:ue,underlineThickness:ue,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:ue,values:null,vAlphabetic:ue,vMathematical:ue,vectorEffect:null,vHanging:ue,vIdeographic:ue,version:null,vertAdvY:ue,vertOriginX:ue,vertOriginY:ue,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:ue,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Rv}),Ov=Ri({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),$v=Ri({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Iv}),Dv=Ri({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),r2={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},i2=/[A-Z]/g,qh=/-[a-z]/g,o2=/^data[-\w.:]+$/i;function s2(e,t){const n=Tu(t);let r=t,i=Lt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&o2.test(t)){if(t.charAt(4)==="-"){const s=t.slice(5).replace(qh,l2);r="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=t.slice(4);if(!qh.test(s)){let a=s.replace(i2,a2);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a}}i=op}return new i(r,t)}function a2(e){return"-"+e.toLowerCase()}function l2(e){return e.charAt(1).toUpperCase()}const c2=Pv([Lv,t2,Ov,$v,Dv],"html"),sp=Pv([Lv,n2,Ov,$v,Dv],"svg");function u2(e){return e.join(" ").trim()}var ap={},Jh=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,d2=/\n/g,p2=/^\s*/,f2=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,h2=/^:\s*/,m2=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,g2=/^[;\s]*/,x2=/^\s+|\s+$/g,y2=`
`,Kh="/",Gh="*",_r="",v2="comment",b2="declaration";function w2(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(m){var b=m.match(d2);b&&(n+=b.length);var _=m.lastIndexOf(y2);r=~_?m.length-_:r+m.length}function s(){var m={line:n,column:r};return function(b){return b.position=new a(m),u(),b}}function a(m){this.start=m,this.end={line:n,column:r},this.source=t.source}a.prototype.content=e;function l(m){var b=new Error(t.source+":"+n+":"+r+": "+m);if(b.reason=m,b.filename=t.source,b.line=n,b.column=r,b.source=e,!t.silent)throw b}function c(m){var b=m.exec(e);if(b){var _=b[0];return i(_),e=e.slice(_.length),b}}function u(){c(p2)}function d(m){var b;for(m=m||[];b=p();)b!==!1&&m.push(b);return m}function p(){var m=s();if(!(Kh!=e.charAt(0)||Gh!=e.charAt(1))){for(var b=2;_r!=e.charAt(b)&&(Gh!=e.charAt(b)||Kh!=e.charAt(b+1));)++b;if(b+=2,_r===e.charAt(b-1))return l("End of comment missing");var _=e.slice(2,b-2);return r+=2,i(_),e=e.slice(b),r+=2,m({type:v2,comment:_})}}function f(){var m=s(),b=c(f2);if(b){if(p(),!c(h2))return l("property missing ':'");var _=c(m2),g=m({type:b2,property:Yh(b[0].replace(Jh,_r)),value:_?Yh(_[0].replace(Jh,_r)):_r});return c(g2),g}}function h(){var m=[];d(m);for(var b;b=f();)b!==!1&&(m.push(b),d(m));return m}return u(),h()}function Yh(e){return e?e.replace(x2,_r):_r}var k2=w2,_2=ca&&ca.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ap,"__esModule",{value:!0});ap.default=S2;const j2=_2(k2);function S2(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,j2.default)(e),i=typeof t=="function";return r.forEach(s=>{if(s.type!=="declaration")return;const{property:a,value:l}=s;i?t(a,l,s):l&&(n=n||{},n[a]=l)}),n}var gl={};Object.defineProperty(gl,"__esModule",{value:!0});gl.camelCase=void 0;var C2=/^--[a-zA-Z0-9_-]+$/,N2=/-([a-z])/g,E2=/^[^-]+$/,z2=/^-(webkit|moz|ms|o|khtml)-/,T2=/^-(ms)-/,A2=function(e){return!e||E2.test(e)||C2.test(e)},M2=function(e,t){return t.toUpperCase()},Qh=function(e,t){return"".concat(t,"-")},P2=function(e,t){return t===void 0&&(t={}),A2(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(T2,Qh):e=e.replace(z2,Qh),e.replace(N2,M2))};gl.camelCase=P2;var L2=ca&&ca.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},R2=L2(ap),I2=gl;function Pu(e,t){var n={};return!e||typeof e!="string"||(0,R2.default)(e,function(r,i){r&&i&&(n[(0,I2.camelCase)(r,t)]=i)}),n}Pu.default=Pu;var O2=Pu;const $2=Ga(O2),Fv=Bv("end"),lp=Bv("start");function Bv(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function D2(e){const t=lp(e),n=Fv(e);if(t&&n)return{start:t,end:n}}function bo(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Xh(e.position):"start"in e||"end"in e?Xh(e):"line"in e||"column"in e?Lu(e):""}function Lu(e){return Zh(e&&e.line)+":"+Zh(e&&e.column)}function Xh(e){return Lu(e&&e.start)+"-"+Lu(e&&e.end)}function Zh(e){return e&&typeof e=="number"?e:1}class xt extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",s={},a=!1;if(n&&("line"in n&&"column"in n?s={place:n}:"start"in n&&"end"in n?s={place:n}:"type"in n?s={ancestors:[n],place:n.position}:s={...n}),typeof t=="string"?i=t:!s.cause&&t&&(a=!0,i=t.message,s.cause=t),!s.ruleId&&!s.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?s.ruleId=r:(s.source=r.slice(0,c),s.ruleId=r.slice(c+1))}if(!s.place&&s.ancestors&&s.ancestors){const c=s.ancestors[s.ancestors.length-1];c&&(s.place=c.position)}const l=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=bo(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=a&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}xt.prototype.file="";xt.prototype.name="";xt.prototype.reason="";xt.prototype.message="";xt.prototype.stack="";xt.prototype.column=void 0;xt.prototype.line=void 0;xt.prototype.ancestors=void 0;xt.prototype.cause=void 0;xt.prototype.fatal=void 0;xt.prototype.place=void 0;xt.prototype.ruleId=void 0;xt.prototype.source=void 0;const cp={}.hasOwnProperty,F2=new Map,B2=/[A-Z]/g,U2=new Set(["table","tbody","thead","tfoot","tr"]),W2=new Set(["td","th"]),Uv="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function V2(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=X2(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Q2(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?sp:c2,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},s=Wv(i,e,void 0);return s&&typeof s!="string"?s:i.create(e,i.Fragment,{children:s||void 0},void 0)}function Wv(e,t,n){if(t.type==="element")return H2(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return q2(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return K2(e,t,n);if(t.type==="mdxjsEsm")return J2(e,t);if(t.type==="root")return G2(e,t,n);if(t.type==="text")return Y2(e,t)}function H2(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=sp,e.schema=i),e.ancestors.push(t);const s=Hv(e,t.tagName,!1),a=Z2(e,t);let l=dp(e,t);return U2.has(t.tagName)&&(l=l.filter(function(c){return typeof c=="string"?!Zj(c):!0})),Vv(e,a,s,t),up(a,l),e.ancestors.pop(),e.schema=r,e.create(t,s,a,n)}function q2(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Vo(e,t.position)}function J2(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Vo(e,t.position)}function K2(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=sp,e.schema=i),e.ancestors.push(t);const s=t.name===null?e.Fragment:Hv(e,t.name,!0),a=eS(e,t),l=dp(e,t);return Vv(e,a,s,t),up(a,l),e.ancestors.pop(),e.schema=r,e.create(t,s,a,n)}function G2(e,t,n){const r={};return up(r,dp(e,t)),e.create(t,e.Fragment,r,n)}function Y2(e,t){return t.value}function Vv(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function up(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function Q2(e,t,n){return r;function r(i,s,a,l){const u=Array.isArray(a.children)?n:t;return l?u(s,a,l):u(s,a)}}function X2(e,t){return n;function n(r,i,s,a){const l=Array.isArray(s.children),c=lp(r);return t(i,s,a,l,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function Z2(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&cp.call(t.properties,i)){const s=tS(e,i,t.properties[i]);if(s){const[a,l]=s;e.tableCellAlignToStyle&&a==="align"&&typeof l=="string"&&W2.has(t.tagName)?r=l:n[a]=l}}if(r){const s=n.style||(n.style={});s[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function eS(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const s=r.data.estree.body[0];s.type;const a=s.expression;a.type;const l=a.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument))}else Vo(e,t.position);else{const i=r.name;let s;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const l=r.value.data.estree.body[0];l.type,s=e.evaluater.evaluateExpression(l.expression)}else Vo(e,t.position);else s=r.value===null?!0:r.value;n[i]=s}return n}function dp(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:F2;for(;++r<t.children.length;){const s=t.children[r];let a;if(e.passKeys){const c=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(c){const u=i.get(c)||0;a=c+"-"+u,i.set(c,u+1)}}const l=Wv(e,s,a);l!==void 0&&n.push(l)}return n}function tS(e,t,n){const r=s2(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Kj(n):u2(n)),r.property==="style"){let i=typeof n=="object"?n:nS(e,String(n));return e.stylePropertyNameCase==="css"&&(i=rS(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?r2[r.property]||r.property:r.attribute,n]}}function nS(e,t){try{return $2(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new xt("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Uv+"#cannot-parse-style-attribute",i}}function Hv(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let s=-1,a;for(;++s<i.length;){const l=Wh(i[s])?{type:"Identifier",name:i[s]}:{type:"Literal",value:i[s]};a=a?{type:"MemberExpression",object:a,property:l,computed:!!(s&&l.type==="Literal"),optional:!1}:l}r=a}else r=Wh(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return cp.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Vo(e)}function Vo(e,t){const n=new xt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Uv+"#cannot-handle-mdx-estrees-without-createevaluater",n}function rS(e){const t={};let n;for(n in e)cp.call(e,n)&&(t[iS(n)]=e[n]);return t}function iS(e){let t=e.replace(B2,oS);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function oS(e){return"-"+e.toLowerCase()}const cc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},sS={};function aS(e,t){const n=sS,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return qv(e,r,i)}function qv(e,t,n){if(lS(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return em(e.children,t,n)}return Array.isArray(e)?em(e,t,n):""}function em(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=qv(e[i],t,n);return r.join("")}function lS(e){return!!(e&&typeof e=="object")}const tm=document.createElement("i");function pp(e){const t="&"+e+";";tm.innerHTML=t;const n=tm.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Sn(e,t,n,r){const i=e.length;let s=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);s<r.length;)a=r.slice(s,s+1e4),a.unshift(t,0),e.splice(...a),s+=1e4,t+=1e4}function Qt(e,t){return e.length>0?(Sn(e,e.length,0,t),e):t}const nm={}.hasOwnProperty;function cS(e){const t={};let n=-1;for(;++n<e.length;)uS(t,e[n]);return t}function uS(e,t){let n;for(n in t){const i=(nm.call(e,n)?e[n]:void 0)||(e[n]={}),s=t[n];let a;if(s)for(a in s){nm.call(i,a)||(i[a]=[]);const l=s[a];dS(i[a],Array.isArray(l)?l:l?[l]:[])}}}function dS(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Sn(e,0,0,r)}function Jv(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function mi(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const vn=br(/[A-Za-z]/),Ut=br(/[\dA-Za-z]/),pS=br(/[#-'*+\--9=?A-Z^-~]/);function Ru(e){return e!==null&&(e<32||e===127)}const Iu=br(/\d/),fS=br(/[\dA-Fa-f]/),hS=br(/[!-/:-@[-`{-~]/);function ke(e){return e!==null&&e<-2}function Pt(e){return e!==null&&(e<0||e===32)}function Pe(e){return e===-2||e===-1||e===32}const mS=br(new RegExp("\\p{P}|\\p{S}","u")),gS=br(/\s/);function br(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Ii(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const s=e.charCodeAt(n);let a="";if(s===37&&Ut(e.charCodeAt(n+1))&&Ut(e.charCodeAt(n+2)))i=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(a=String.fromCharCode(s));else if(s>55295&&s<57344){const l=e.charCodeAt(n+1);s<56320&&l>56319&&l<57344?(a=String.fromCharCode(s,l),i=1):a="�"}else a=String.fromCharCode(s);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function $e(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let s=0;return a;function a(c){return Pe(c)?(e.enter(n),l(c)):t(c)}function l(c){return Pe(c)&&s++<i?(e.consume(c),l):(e.exit(n),t(c))}}const xS={tokenize:yS};function yS(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),$e(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),s(l)}function s(l){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,a(l)}function a(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return ke(l)?(e.consume(l),e.exit("chunkText"),s):(e.consume(l),a)}}const vS={tokenize:bS},rm={tokenize:wS};function bS(e){const t=this,n=[];let r=0,i,s,a;return l;function l(y){if(r<n.length){const j=n[r];return t.containerState=j[1],e.attempt(j[0].continuation,c,u)(y)}return u(y)}function c(y){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&x();const j=t.events.length;let T=j,S;for(;T--;)if(t.events[T][0]==="exit"&&t.events[T][1].type==="chunkFlow"){S=t.events[T][1].end;break}g(r);let L=j;for(;L<t.events.length;)t.events[L][1].end={...S},L++;return Sn(t.events,T+1,0,t.events.slice(j)),t.events.length=L,u(y)}return l(y)}function u(y){if(r===n.length){if(!i)return f(y);if(i.currentConstruct&&i.currentConstruct.concrete)return m(y);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(rm,d,p)(y)}function d(y){return i&&x(),g(r),f(y)}function p(y){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,m(y)}function f(y){return t.containerState={},e.attempt(rm,h,m)(y)}function h(y){return r++,n.push([t.currentConstruct,t.containerState]),f(y)}function m(y){if(y===null){i&&x(),g(0),e.consume(y);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:s}),b(y)}function b(y){if(y===null){_(e.exit("chunkFlow"),!0),g(0),e.consume(y);return}return ke(y)?(e.consume(y),_(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(y),b)}function _(y,j){const T=t.sliceStream(y);if(j&&T.push(null),y.previous=s,s&&(s.next=y),s=y,i.defineSkip(y.start),i.write(T),t.parser.lazy[y.start.line]){let S=i.events.length;for(;S--;)if(i.events[S][1].start.offset<a&&(!i.events[S][1].end||i.events[S][1].end.offset>a))return;const L=t.events.length;let N=L,W,E;for(;N--;)if(t.events[N][0]==="exit"&&t.events[N][1].type==="chunkFlow"){if(W){E=t.events[N][1].end;break}W=!0}for(g(r),S=L;S<t.events.length;)t.events[S][1].end={...E},S++;Sn(t.events,N+1,0,t.events.slice(L)),t.events.length=S}}function g(y){let j=n.length;for(;j-- >y;){const T=n[j];t.containerState=T[1],T[0].exit.call(t,e)}n.length=y}function x(){i.write([null]),s=void 0,i=void 0,t.containerState._closeFlow=void 0}}function wS(e,t,n){return $e(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function im(e){if(e===null||Pt(e)||gS(e))return 1;if(mS(e))return 2}function fp(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const s=e[i].resolveAll;s&&!r.includes(s)&&(t=s(t,n),r.push(s))}return t}const Ou={name:"attention",resolveAll:kS,tokenize:_S};function kS(e,t){let n=-1,r,i,s,a,l,c,u,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p={...e[r][1].end},f={...e[n][1].start};om(p,-c),om(f,c),a={type:c>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},l={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},s={type:c>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?"strong":"emphasis",start:{...a.start},end:{...l.end}},e[r][1].end={...a.start},e[n][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=Qt(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=Qt(u,[["enter",i,t],["enter",a,t],["exit",a,t],["enter",s,t]]),u=Qt(u,fp(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=Qt(u,[["exit",s,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,u=Qt(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,Sn(e,r-1,n-r+3,u),n=r+u.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function _S(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=im(r);let s;return a;function a(c){return s=c,e.enter("attentionSequence"),l(c)}function l(c){if(c===s)return e.consume(c),l;const u=e.exit("attentionSequence"),d=im(c),p=!d||d===2&&i||n.includes(c),f=!i||i===2&&d||n.includes(r);return u._open=!!(s===42?p:p&&(i||!f)),u._close=!!(s===42?f:f&&(d||!p)),t(c)}}function om(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const jS={name:"autolink",tokenize:SS};function SS(e,t,n){let r=0;return i;function i(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),s}function s(h){return vn(h)?(e.consume(h),a):h===64?n(h):u(h)}function a(h){return h===43||h===45||h===46||Ut(h)?(r=1,l(h)):u(h)}function l(h){return h===58?(e.consume(h),r=0,c):(h===43||h===45||h===46||Ut(h))&&r++<32?(e.consume(h),l):(r=0,u(h))}function c(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):h===null||h===32||h===60||Ru(h)?n(h):(e.consume(h),c)}function u(h){return h===64?(e.consume(h),d):pS(h)?(e.consume(h),u):n(h)}function d(h){return Ut(h)?p(h):n(h)}function p(h){return h===46?(e.consume(h),r=0,d):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):f(h)}function f(h){if((h===45||Ut(h))&&r++<63){const m=h===45?f:p;return e.consume(h),m}return n(h)}}const xl={partial:!0,tokenize:CS};function CS(e,t,n){return r;function r(s){return Pe(s)?$e(e,i,"linePrefix")(s):i(s)}function i(s){return s===null||ke(s)?t(s):n(s)}}const Kv={continuation:{tokenize:ES},exit:zS,name:"blockQuote",tokenize:NS};function NS(e,t,n){const r=this;return i;function i(a){if(a===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),s}return n(a)}function s(a){return Pe(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function ES(e,t,n){const r=this;return i;function i(a){return Pe(a)?$e(e,s,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):s(a)}function s(a){return e.attempt(Kv,t,n)(a)}}function zS(e){e.exit("blockQuote")}const Gv={name:"characterEscape",tokenize:TS};function TS(e,t,n){return r;function r(s){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(s),e.exit("escapeMarker"),i}function i(s){return hS(s)?(e.enter("characterEscapeValue"),e.consume(s),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(s)}}const Yv={name:"characterReference",tokenize:AS};function AS(e,t,n){const r=this;let i=0,s,a;return l;function l(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),c}function c(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),s=31,a=Ut,d(p))}function u(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),s=6,a=fS,d):(e.enter("characterReferenceValue"),s=7,a=Iu,d(p))}function d(p){if(p===59&&i){const f=e.exit("characterReferenceValue");return a===Ut&&!pp(r.sliceSerialize(f))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(p)&&i++<s?(e.consume(p),d):n(p)}}const sm={partial:!0,tokenize:PS},am={concrete:!0,name:"codeFenced",tokenize:MS};function MS(e,t,n){const r=this,i={partial:!0,tokenize:T};let s=0,a=0,l;return c;function c(S){return u(S)}function u(S){const L=r.events[r.events.length-1];return s=L&&L[1].type==="linePrefix"?L[2].sliceSerialize(L[1],!0).length:0,l=S,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(S)}function d(S){return S===l?(a++,e.consume(S),d):a<3?n(S):(e.exit("codeFencedFenceSequence"),Pe(S)?$e(e,p,"whitespace")(S):p(S))}function p(S){return S===null||ke(S)?(e.exit("codeFencedFence"),r.interrupt?t(S):e.check(sm,b,j)(S)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(S))}function f(S){return S===null||ke(S)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(S)):Pe(S)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),$e(e,h,"whitespace")(S)):S===96&&S===l?n(S):(e.consume(S),f)}function h(S){return S===null||ke(S)?p(S):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),m(S))}function m(S){return S===null||ke(S)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(S)):S===96&&S===l?n(S):(e.consume(S),m)}function b(S){return e.attempt(i,j,_)(S)}function _(S){return e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),g}function g(S){return s>0&&Pe(S)?$e(e,x,"linePrefix",s+1)(S):x(S)}function x(S){return S===null||ke(S)?e.check(sm,b,j)(S):(e.enter("codeFlowValue"),y(S))}function y(S){return S===null||ke(S)?(e.exit("codeFlowValue"),x(S)):(e.consume(S),y)}function j(S){return e.exit("codeFenced"),t(S)}function T(S,L,N){let W=0;return E;function E(M){return S.enter("lineEnding"),S.consume(M),S.exit("lineEnding"),O}function O(M){return S.enter("codeFencedFence"),Pe(M)?$e(S,F,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(M):F(M)}function F(M){return M===l?(S.enter("codeFencedFenceSequence"),K(M)):N(M)}function K(M){return M===l?(W++,S.consume(M),K):W>=a?(S.exit("codeFencedFenceSequence"),Pe(M)?$e(S,A,"whitespace")(M):A(M)):N(M)}function A(M){return M===null||ke(M)?(S.exit("codeFencedFence"),L(M)):N(M)}}}function PS(e,t,n){const r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),s)}function s(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}const uc={name:"codeIndented",tokenize:RS},LS={partial:!0,tokenize:IS};function RS(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),$e(e,s,"linePrefix",5)(u)}function s(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?a(u):n(u)}function a(u){return u===null?c(u):ke(u)?e.attempt(LS,a,c)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||ke(u)?(e.exit("codeFlowValue"),a(u)):(e.consume(u),l)}function c(u){return e.exit("codeIndented"),t(u)}}function IS(e,t,n){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):ke(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):$e(e,s,"linePrefix",5)(a)}function s(a){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):ke(a)?i(a):n(a)}}const OS={name:"codeText",previous:DS,resolve:$S,tokenize:FS};function $S(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function DS(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function FS(e,t,n){let r=0,i,s;return a;function a(p){return e.enter("codeText"),e.enter("codeTextSequence"),l(p)}function l(p){return p===96?(e.consume(p),r++,l):(e.exit("codeTextSequence"),c(p))}function c(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),c):p===96?(s=e.enter("codeTextSequence"),i=0,d(p)):ke(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),c):(e.enter("codeTextData"),u(p))}function u(p){return p===null||p===32||p===96||ke(p)?(e.exit("codeTextData"),c(p)):(e.consume(p),u)}function d(p){return p===96?(e.consume(p),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(s.type="codeTextData",u(p))}}class BS{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const s=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Yi(this.left,r),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Yi(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),Yi(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);Yi(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Yi(this.left,n.reverse())}}}function Yi(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Qv(e){const t={};let n=-1,r,i,s,a,l,c,u;const d=new BS(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,s=0,s<c.length&&c[s][1].type==="lineEndingBlank"&&(s+=2),s<c.length&&c[s][1].type==="content"))for(;++s<c.length&&c[s][1].type!=="content";)c[s][1].type==="chunkText"&&(c[s][1]._isInFirstContentOfListItem=!0,s++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,US(d,n)),n=t[n],u=!0);else if(r[1]._container){for(s=n,i=void 0;s--;)if(a=d.get(s),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=s);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},l=d.slice(i,n),l.unshift(r),d.splice(i,n-i+1,l))}}return Sn(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function US(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const s=[];let a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const l=a.events,c=[],u={};let d,p,f=-1,h=n,m=0,b=0;const _=[b];for(;h;){for(;e.get(++i)[1]!==h;);s.push(i),h._tokenizer||(d=r.sliceStream(h),h.next||d.push(null),p&&a.defineSkip(h.start),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),p=h,h=h.next}for(h=n;++f<l.length;)l[f][0]==="exit"&&l[f-1][0]==="enter"&&l[f][1].type===l[f-1][1].type&&l[f][1].start.line!==l[f][1].end.line&&(b=f+1,_.push(b),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(a.events=[],h?(h._tokenizer=void 0,h.previous=void 0):_.pop(),f=_.length;f--;){const g=l.slice(_[f],_[f+1]),x=s.pop();c.push([x,x+g.length-1]),e.splice(x,2,g)}for(c.reverse(),f=-1;++f<c.length;)u[m+c[f][0]]=m+c[f][1],m+=c[f][1]-c[f][0]-1;return u}const WS={resolve:HS,tokenize:qS},VS={partial:!0,tokenize:JS};function HS(e){return Qv(e),e}function qS(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?s(l):ke(l)?e.check(VS,a,s)(l):(e.consume(l),i)}function s(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function a(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function JS(e,t,n){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),$e(e,s,"linePrefix")}function s(a){if(a===null||ke(a))return n(a);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function Xv(e,t,n,r,i,s,a,l,c){const u=c||Number.POSITIVE_INFINITY;let d=0;return p;function p(g){return g===60?(e.enter(r),e.enter(i),e.enter(s),e.consume(g),e.exit(s),f):g===null||g===32||g===41||Ru(g)?n(g):(e.enter(r),e.enter(a),e.enter(l),e.enter("chunkString",{contentType:"string"}),b(g))}function f(g){return g===62?(e.enter(s),e.consume(g),e.exit(s),e.exit(i),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),h(g))}function h(g){return g===62?(e.exit("chunkString"),e.exit(l),f(g)):g===null||g===60||ke(g)?n(g):(e.consume(g),g===92?m:h)}function m(g){return g===60||g===62||g===92?(e.consume(g),h):h(g)}function b(g){return!d&&(g===null||g===41||Pt(g))?(e.exit("chunkString"),e.exit(l),e.exit(a),e.exit(r),t(g)):d<u&&g===40?(e.consume(g),d++,b):g===41?(e.consume(g),d--,b):g===null||g===32||g===40||Ru(g)?n(g):(e.consume(g),g===92?_:b)}function _(g){return g===40||g===41||g===92?(e.consume(g),b):b(g)}}function Zv(e,t,n,r,i,s){const a=this;let l=0,c;return u;function u(h){return e.enter(r),e.enter(i),e.consume(h),e.exit(i),e.enter(s),d}function d(h){return l>999||h===null||h===91||h===93&&!c||h===94&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?n(h):h===93?(e.exit(s),e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):ke(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),p(h))}function p(h){return h===null||h===91||h===93||ke(h)||l++>999?(e.exit("chunkString"),d(h)):(e.consume(h),c||(c=!Pe(h)),h===92?f:p)}function f(h){return h===91||h===92||h===93?(e.consume(h),l++,p):p(h)}}function e1(e,t,n,r,i,s){let a;return l;function l(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),a=f===40?41:f,c):n(f)}function c(f){return f===a?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(s),u(f))}function u(f){return f===a?(e.exit(s),c(a)):f===null?n(f):ke(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),$e(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===a||f===null||ke(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?p:d)}function p(f){return f===a||f===92?(e.consume(f),d):d(f)}}function wo(e,t){let n;return r;function r(i){return ke(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):Pe(i)?$e(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const KS={name:"definition",tokenize:YS},GS={partial:!0,tokenize:QS};function YS(e,t,n){const r=this;let i;return s;function s(h){return e.enter("definition"),a(h)}function a(h){return Zv.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function l(h){return i=mi(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),c):n(h)}function c(h){return Pt(h)?wo(e,u)(h):u(h)}function u(h){return Xv(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function d(h){return e.attempt(GS,p,p)(h)}function p(h){return Pe(h)?$e(e,f,"whitespace")(h):f(h)}function f(h){return h===null||ke(h)?(e.exit("definition"),r.parser.defined.push(i),t(h)):n(h)}}function QS(e,t,n){return r;function r(l){return Pt(l)?wo(e,i)(l):n(l)}function i(l){return e1(e,s,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function s(l){return Pe(l)?$e(e,a,"whitespace")(l):a(l)}function a(l){return l===null||ke(l)?t(l):n(l)}}const XS={name:"hardBreakEscape",tokenize:ZS};function ZS(e,t,n){return r;function r(s){return e.enter("hardBreakEscape"),e.consume(s),i}function i(s){return ke(s)?(e.exit("hardBreakEscape"),t(s)):n(s)}}const eC={name:"headingAtx",resolve:tC,tokenize:nC};function tC(e,t){let n=e.length-2,r=3,i,s;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},s={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Sn(e,r,n-r+1,[["enter",i,t],["enter",s,t],["exit",s,t],["exit",i,t]])),e}function nC(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),s(d)}function s(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&r++<6?(e.consume(d),a):d===null||Pt(d)?(e.exit("atxHeadingSequence"),l(d)):n(d)}function l(d){return d===35?(e.enter("atxHeadingSequence"),c(d)):d===null||ke(d)?(e.exit("atxHeading"),t(d)):Pe(d)?$e(e,l,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function c(d){return d===35?(e.consume(d),c):(e.exit("atxHeadingSequence"),l(d))}function u(d){return d===null||d===35||Pt(d)?(e.exit("atxHeadingText"),l(d)):(e.consume(d),u)}}const rC=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],lm=["pre","script","style","textarea"],iC={concrete:!0,name:"htmlFlow",resolveTo:aC,tokenize:lC},oC={partial:!0,tokenize:uC},sC={partial:!0,tokenize:cC};function aC(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function lC(e,t,n){const r=this;let i,s,a,l,c;return u;function u(v){return d(v)}function d(v){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(v),p}function p(v){return v===33?(e.consume(v),f):v===47?(e.consume(v),s=!0,b):v===63?(e.consume(v),i=3,r.interrupt?t:w):vn(v)?(e.consume(v),a=String.fromCharCode(v),_):n(v)}function f(v){return v===45?(e.consume(v),i=2,h):v===91?(e.consume(v),i=5,l=0,m):vn(v)?(e.consume(v),i=4,r.interrupt?t:w):n(v)}function h(v){return v===45?(e.consume(v),r.interrupt?t:w):n(v)}function m(v){const z="CDATA[";return v===z.charCodeAt(l++)?(e.consume(v),l===z.length?r.interrupt?t:F:m):n(v)}function b(v){return vn(v)?(e.consume(v),a=String.fromCharCode(v),_):n(v)}function _(v){if(v===null||v===47||v===62||Pt(v)){const z=v===47,V=a.toLowerCase();return!z&&!s&&lm.includes(V)?(i=1,r.interrupt?t(v):F(v)):rC.includes(a.toLowerCase())?(i=6,z?(e.consume(v),g):r.interrupt?t(v):F(v)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(v):s?x(v):y(v))}return v===45||Ut(v)?(e.consume(v),a+=String.fromCharCode(v),_):n(v)}function g(v){return v===62?(e.consume(v),r.interrupt?t:F):n(v)}function x(v){return Pe(v)?(e.consume(v),x):E(v)}function y(v){return v===47?(e.consume(v),E):v===58||v===95||vn(v)?(e.consume(v),j):Pe(v)?(e.consume(v),y):E(v)}function j(v){return v===45||v===46||v===58||v===95||Ut(v)?(e.consume(v),j):T(v)}function T(v){return v===61?(e.consume(v),S):Pe(v)?(e.consume(v),T):y(v)}function S(v){return v===null||v===60||v===61||v===62||v===96?n(v):v===34||v===39?(e.consume(v),c=v,L):Pe(v)?(e.consume(v),S):N(v)}function L(v){return v===c?(e.consume(v),c=null,W):v===null||ke(v)?n(v):(e.consume(v),L)}function N(v){return v===null||v===34||v===39||v===47||v===60||v===61||v===62||v===96||Pt(v)?T(v):(e.consume(v),N)}function W(v){return v===47||v===62||Pe(v)?y(v):n(v)}function E(v){return v===62?(e.consume(v),O):n(v)}function O(v){return v===null||ke(v)?F(v):Pe(v)?(e.consume(v),O):n(v)}function F(v){return v===45&&i===2?(e.consume(v),$):v===60&&i===1?(e.consume(v),C):v===62&&i===4?(e.consume(v),B):v===63&&i===3?(e.consume(v),w):v===93&&i===5?(e.consume(v),I):ke(v)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(oC,G,K)(v)):v===null||ke(v)?(e.exit("htmlFlowData"),K(v)):(e.consume(v),F)}function K(v){return e.check(sC,A,G)(v)}function A(v){return e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),M}function M(v){return v===null||ke(v)?K(v):(e.enter("htmlFlowData"),F(v))}function $(v){return v===45?(e.consume(v),w):F(v)}function C(v){return v===47?(e.consume(v),a="",P):F(v)}function P(v){if(v===62){const z=a.toLowerCase();return lm.includes(z)?(e.consume(v),B):F(v)}return vn(v)&&a.length<8?(e.consume(v),a+=String.fromCharCode(v),P):F(v)}function I(v){return v===93?(e.consume(v),w):F(v)}function w(v){return v===62?(e.consume(v),B):v===45&&i===2?(e.consume(v),w):F(v)}function B(v){return v===null||ke(v)?(e.exit("htmlFlowData"),G(v)):(e.consume(v),B)}function G(v){return e.exit("htmlFlow"),t(v)}}function cC(e,t,n){const r=this;return i;function i(a){return ke(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),s):n(a)}function s(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function uC(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(xl,t,n)}}const dC={name:"htmlText",tokenize:pC};function pC(e,t,n){const r=this;let i,s,a;return l;function l(w){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(w),c}function c(w){return w===33?(e.consume(w),u):w===47?(e.consume(w),T):w===63?(e.consume(w),y):vn(w)?(e.consume(w),N):n(w)}function u(w){return w===45?(e.consume(w),d):w===91?(e.consume(w),s=0,m):vn(w)?(e.consume(w),x):n(w)}function d(w){return w===45?(e.consume(w),h):n(w)}function p(w){return w===null?n(w):w===45?(e.consume(w),f):ke(w)?(a=p,C(w)):(e.consume(w),p)}function f(w){return w===45?(e.consume(w),h):p(w)}function h(w){return w===62?$(w):w===45?f(w):p(w)}function m(w){const B="CDATA[";return w===B.charCodeAt(s++)?(e.consume(w),s===B.length?b:m):n(w)}function b(w){return w===null?n(w):w===93?(e.consume(w),_):ke(w)?(a=b,C(w)):(e.consume(w),b)}function _(w){return w===93?(e.consume(w),g):b(w)}function g(w){return w===62?$(w):w===93?(e.consume(w),g):b(w)}function x(w){return w===null||w===62?$(w):ke(w)?(a=x,C(w)):(e.consume(w),x)}function y(w){return w===null?n(w):w===63?(e.consume(w),j):ke(w)?(a=y,C(w)):(e.consume(w),y)}function j(w){return w===62?$(w):y(w)}function T(w){return vn(w)?(e.consume(w),S):n(w)}function S(w){return w===45||Ut(w)?(e.consume(w),S):L(w)}function L(w){return ke(w)?(a=L,C(w)):Pe(w)?(e.consume(w),L):$(w)}function N(w){return w===45||Ut(w)?(e.consume(w),N):w===47||w===62||Pt(w)?W(w):n(w)}function W(w){return w===47?(e.consume(w),$):w===58||w===95||vn(w)?(e.consume(w),E):ke(w)?(a=W,C(w)):Pe(w)?(e.consume(w),W):$(w)}function E(w){return w===45||w===46||w===58||w===95||Ut(w)?(e.consume(w),E):O(w)}function O(w){return w===61?(e.consume(w),F):ke(w)?(a=O,C(w)):Pe(w)?(e.consume(w),O):W(w)}function F(w){return w===null||w===60||w===61||w===62||w===96?n(w):w===34||w===39?(e.consume(w),i=w,K):ke(w)?(a=F,C(w)):Pe(w)?(e.consume(w),F):(e.consume(w),A)}function K(w){return w===i?(e.consume(w),i=void 0,M):w===null?n(w):ke(w)?(a=K,C(w)):(e.consume(w),K)}function A(w){return w===null||w===34||w===39||w===60||w===61||w===96?n(w):w===47||w===62||Pt(w)?W(w):(e.consume(w),A)}function M(w){return w===47||w===62||Pt(w)?W(w):n(w)}function $(w){return w===62?(e.consume(w),e.exit("htmlTextData"),e.exit("htmlText"),t):n(w)}function C(w){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),P}function P(w){return Pe(w)?$e(e,I,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(w):I(w)}function I(w){return e.enter("htmlTextData"),a(w)}}const hp={name:"labelEnd",resolveAll:gC,resolveTo:xC,tokenize:yC},fC={tokenize:vC},hC={tokenize:bC},mC={tokenize:wC};function gC(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&Sn(e,0,e.length,n),e}function xC(e,t){let n=e.length,r=0,i,s,a,l;for(;n--;)if(i=e[n][1],s){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(a){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(s=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=n);const c={type:e[s][1].type==="labelLink"?"link":"image",start:{...e[s][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[s][1].start},end:{...e[a][1].end}},d={type:"labelText",start:{...e[s+r+2][1].end},end:{...e[a-2][1].start}};return l=[["enter",c,t],["enter",u,t]],l=Qt(l,e.slice(s+1,s+r+3)),l=Qt(l,[["enter",d,t]]),l=Qt(l,fp(t.parser.constructs.insideSpan.null,e.slice(s+r+4,a-3),t)),l=Qt(l,[["exit",d,t],e[a-2],e[a-1],["exit",u,t]]),l=Qt(l,e.slice(a+1)),l=Qt(l,[["exit",c,t]]),Sn(e,s,e.length,l),e}function yC(e,t,n){const r=this;let i=r.events.length,s,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){s=r.events[i][1];break}return l;function l(f){return s?s._inactive?p(f):(a=r.parser.defined.includes(mi(r.sliceSerialize({start:s.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),c):n(f)}function c(f){return f===40?e.attempt(fC,d,a?d:p)(f):f===91?e.attempt(hC,d,a?u:p)(f):a?d(f):p(f)}function u(f){return e.attempt(mC,d,p)(f)}function d(f){return t(f)}function p(f){return s._balanced=!0,n(f)}}function vC(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),i}function i(p){return Pt(p)?wo(e,s)(p):s(p)}function s(p){return p===41?d(p):Xv(e,a,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function a(p){return Pt(p)?wo(e,c)(p):d(p)}function l(p){return n(p)}function c(p){return p===34||p===39||p===40?e1(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function u(p){return Pt(p)?wo(e,d)(p):d(p)}function d(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function bC(e,t,n){const r=this;return i;function i(l){return Zv.call(r,e,s,a,"reference","referenceMarker","referenceString")(l)}function s(l){return r.parser.defined.includes(mi(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function a(l){return n(l)}}function wC(e,t,n){return r;function r(s){return e.enter("reference"),e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),i}function i(s){return s===93?(e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),e.exit("reference"),t):n(s)}}const kC={name:"labelStartImage",resolveAll:hp.resolveAll,tokenize:_C};function _C(e,t,n){const r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),s}function s(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),a):n(l)}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const jC={name:"labelStartLink",resolveAll:hp.resolveAll,tokenize:SC};function SC(e,t,n){const r=this;return i;function i(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),s}function s(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const dc={name:"lineEnding",tokenize:CC};function CC(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),$e(e,t,"linePrefix")}}const ra={name:"thematicBreak",tokenize:NC};function NC(e,t,n){let r=0,i;return s;function s(u){return e.enter("thematicBreak"),a(u)}function a(u){return i=u,l(u)}function l(u){return u===i?(e.enter("thematicBreakSequence"),c(u)):r>=3&&(u===null||ke(u))?(e.exit("thematicBreak"),t(u)):n(u)}function c(u){return u===i?(e.consume(u),r++,c):(e.exit("thematicBreakSequence"),Pe(u)?$e(e,l,"whitespace")(u):l(u))}}const St={continuation:{tokenize:AC},exit:PC,name:"list",tokenize:TC},EC={partial:!0,tokenize:LC},zC={partial:!0,tokenize:MC};function TC(e,t,n){const r=this,i=r.events[r.events.length-1];let s=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return l;function l(h){const m=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(m==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:Iu(h)){if(r.containerState.type||(r.containerState.type=m,e.enter(m,{_container:!0})),m==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(ra,n,u)(h):u(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(h)}return n(h)}function c(h){return Iu(h)&&++a<10?(e.consume(h),c):(!r.interrupt||a<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),u(h)):n(h)}function u(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(xl,r.interrupt?n:d,e.attempt(EC,f,p))}function d(h){return r.containerState.initialBlankLine=!0,s++,f(h)}function p(h){return Pe(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),f):n(h)}function f(h){return r.containerState.size=s+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function AC(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(xl,i,s);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,$e(e,t,"listItemIndent",r.containerState.size+1)(l)}function s(l){return r.containerState.furtherBlankLines||!Pe(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(zC,t,a)(l))}function a(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,$e(e,e.attempt(St,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function MC(e,t,n){const r=this;return $e(e,i,"listItemIndent",r.containerState.size+1);function i(s){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(s):n(s)}}function PC(e){e.exit(this.containerState.type)}function LC(e,t,n){const r=this;return $e(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(s){const a=r.events[r.events.length-1];return!Pe(s)&&a&&a[1].type==="listItemPrefixWhitespace"?t(s):n(s)}}const cm={name:"setextUnderline",resolveTo:RC,tokenize:IC};function RC(e,t){let n=e.length,r,i,s;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!s&&e[n][1].type==="definition"&&(s=n);const a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",s?(e.splice(i,0,["enter",a,t]),e.splice(s+1,0,["exit",e[r][1],t]),e[r][1].end={...e[s][1].end}):e[r][1]=a,e.push(["exit",a,t]),e}function IC(e,t,n){const r=this;let i;return s;function s(u){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),i=u,a(u)):n(u)}function a(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===i?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),Pe(u)?$e(e,c,"lineSuffix")(u):c(u))}function c(u){return u===null||ke(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const OC={tokenize:$C};function $C(e){const t=this,n=e.attempt(xl,r,e.attempt(this.parser.constructs.flowInitial,i,$e(e,e.attempt(this.parser.constructs.flow,i,e.attempt(WS,i)),"linePrefix")));return n;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEndingBlank"),e.consume(s),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const DC={resolveAll:n1()},FC=t1("string"),BC=t1("text");function t1(e){return{resolveAll:n1(e==="text"?UC:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],s=n.attempt(i,a,l);return a;function a(d){return u(d)?s(d):l(d)}function l(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),c}function c(d){return u(d)?(n.exit("data"),s(d)):(n.consume(d),c)}function u(d){if(d===null)return!0;const p=i[d];let f=-1;if(p)for(;++f<p.length;){const h=p[f];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function n1(e){return t;function t(n,r){let i=-1,s;for(;++i<=n.length;)s===void 0?n[i]&&n[i][1].type==="data"&&(s=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==s+2&&(n[s][1].end=n[i-1][1].end,n.splice(s+2,i-s-2),i=s+2),s=void 0);return e?e(n,r):n}}function UC(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let s=i.length,a=-1,l=0,c;for(;s--;){const u=i[s];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)l++,a--;if(a)break;a=-1}else if(u===-2)c=!0,l++;else if(u!==-1){s++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){const u={type:n===e.length||c||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?a:r.start._bufferIndex+a,_index:r.start._index+s,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const WC={42:St,43:St,45:St,48:St,49:St,50:St,51:St,52:St,53:St,54:St,55:St,56:St,57:St,62:Kv},VC={91:KS},HC={[-2]:uc,[-1]:uc,32:uc},qC={35:eC,42:ra,45:[cm,ra],60:iC,61:cm,95:ra,96:am,126:am},JC={38:Yv,92:Gv},KC={[-5]:dc,[-4]:dc,[-3]:dc,33:kC,38:Yv,42:Ou,60:[jS,dC],91:jC,92:[XS,Gv],93:hp,95:Ou,96:OS},GC={null:[Ou,DC]},YC={null:[42,95]},QC={null:[]},XC=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:YC,contentInitial:VC,disable:QC,document:WC,flow:qC,flowInitial:HC,insideSpan:GC,string:JC,text:KC},Symbol.toStringTag,{value:"Module"}));function ZC(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},s=[];let a=[],l=[];const c={attempt:L(T),check:L(S),consume:x,enter:y,exit:j,interrupt:L(S,{interrupt:!0})},u={code:null,containerState:{},defineSkip:b,events:[],now:m,parser:e,previous:null,sliceSerialize:f,sliceStream:h,write:p};let d=t.tokenize.call(u,c);return t.resolveAll&&s.push(t),u;function p(O){return a=Qt(a,O),_(),a[a.length-1]!==null?[]:(N(t,0),u.events=fp(s,u.events,u),u.events)}function f(O,F){return tN(h(O),F)}function h(O){return eN(a,O)}function m(){const{_bufferIndex:O,_index:F,line:K,column:A,offset:M}=r;return{_bufferIndex:O,_index:F,line:K,column:A,offset:M}}function b(O){i[O.line]=O.column,E()}function _(){let O;for(;r._index<a.length;){const F=a[r._index];if(typeof F=="string")for(O=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===O&&r._bufferIndex<F.length;)g(F.charCodeAt(r._bufferIndex));else g(F)}}function g(O){d=d(O)}function x(O){ke(O)?(r.line++,r.column=1,r.offset+=O===-3?2:1,E()):O!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=O}function y(O,F){const K=F||{};return K.type=O,K.start=m(),u.events.push(["enter",K,u]),l.push(K),K}function j(O){const F=l.pop();return F.end=m(),u.events.push(["exit",F,u]),F}function T(O,F){N(O,F.from)}function S(O,F){F.restore()}function L(O,F){return K;function K(A,M,$){let C,P,I,w;return Array.isArray(A)?G(A):"tokenize"in A?G([A]):B(A);function B(ie){return fe;function fe(ge){const Z=ge!==null&&ie[ge],U=ge!==null&&ie.null,R=[...Array.isArray(Z)?Z:Z?[Z]:[],...Array.isArray(U)?U:U?[U]:[]];return G(R)(ge)}}function G(ie){return C=ie,P=0,ie.length===0?$:v(ie[P])}function v(ie){return fe;function fe(ge){return w=W(),I=ie,ie.partial||(u.currentConstruct=ie),ie.name&&u.parser.constructs.disable.null.includes(ie.name)?V():ie.tokenize.call(F?Object.assign(Object.create(u),F):u,c,z,V)(ge)}}function z(ie){return O(I,w),M}function V(ie){return w.restore(),++P<C.length?v(C[P]):$}}}function N(O,F){O.resolveAll&&!s.includes(O)&&s.push(O),O.resolve&&Sn(u.events,F,u.events.length-F,O.resolve(u.events.slice(F),u)),O.resolveTo&&(u.events=O.resolveTo(u.events,u))}function W(){const O=m(),F=u.previous,K=u.currentConstruct,A=u.events.length,M=Array.from(l);return{from:A,restore:$};function $(){r=O,u.previous=F,u.currentConstruct=K,u.events.length=A,l=M,E()}}function E(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function eN(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,s=t.end._bufferIndex;let a;if(n===i)a=[e[n].slice(r,s)];else{if(a=e.slice(n,i),r>-1){const l=a[0];typeof l=="string"?a[0]=l.slice(r):a.shift()}s>0&&a.push(e[i].slice(0,s))}return a}function tN(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const s=e[n];let a;if(typeof s=="string")a=s;else switch(s){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(s)}i=s===-2,r.push(a)}return r.join("")}function nN(e){const r={constructs:cS([XC,...(e||{}).extensions||[]]),content:i(xS),defined:[],document:i(vS),flow:i(OC),lazy:{},string:i(FC),text:i(BC)};return r;function i(s){return a;function a(l){return ZC(r,s,l)}}}function rN(e){for(;!Qv(e););return e}const um=/[\0\t\n\r]/g;function iN(){let e=1,t="",n=!0,r;return i;function i(s,a,l){const c=[];let u,d,p,f,h;for(s=t+(typeof s=="string"?s.toString():new TextDecoder(a||void 0).decode(s)),p=0,t="",n&&(s.charCodeAt(0)===65279&&p++,n=void 0);p<s.length;){if(um.lastIndex=p,u=um.exec(s),f=u&&u.index!==void 0?u.index:s.length,h=s.charCodeAt(f),!u){t=s.slice(p);break}if(h===10&&p===f&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),p<f&&(c.push(s.slice(p,f)),e+=f-p),h){case 0:{c.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,c.push(-2);e++<d;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}p=f+1}return l&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const oN=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function sN(e){return e.replace(oN,aN)}function aN(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),s=i===120||i===88;return Jv(n.slice(s?2:1),s?16:10)}return pp(n)||e}const r1={}.hasOwnProperty;function lN(e,t,n){return typeof t!="string"&&(n=t,t=void 0),cN(n)(rN(nN(n).document().write(iN()(e,t,!0))))}function cN(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(ne),autolinkProtocol:W,autolinkEmail:W,atxHeading:s(ve),blockQuote:s(U),characterEscape:W,characterReference:W,codeFenced:s(R),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:s(R,a),codeText:s(Q,a),codeTextData:W,data:W,codeFlowValue:W,definition:s(X),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:s(oe),hardBreakEscape:s(J),hardBreakTrailing:s(J),htmlFlow:s(D,a),htmlFlowData:W,htmlText:s(D,a),htmlTextData:W,image:s(Y),label:a,link:s(ne),listItem:s(xe),listItemValue:f,listOrdered:s(te,p),listUnordered:s(te),paragraph:s(q),reference:v,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:s(ve),strong:s(re),thematicBreak:s(be)},exit:{atxHeading:c(),atxHeadingSequence:T,autolink:c(),autolinkEmail:Z,autolinkProtocol:ge,blockQuote:c(),characterEscapeValue:E,characterReferenceMarkerHexadecimal:V,characterReferenceMarkerNumeric:V,characterReferenceValue:ie,characterReference:fe,codeFenced:c(_),codeFencedFence:b,codeFencedFenceInfo:h,codeFencedFenceMeta:m,codeFlowValue:E,codeIndented:c(g),codeText:c(M),codeTextData:E,data:E,definition:c(),definitionDestinationString:j,definitionLabelString:x,definitionTitleString:y,emphasis:c(),hardBreakEscape:c(F),hardBreakTrailing:c(F),htmlFlow:c(K),htmlFlowData:E,htmlText:c(A),htmlTextData:E,image:c(C),label:I,labelText:P,lineEnding:O,link:c($),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:z,resourceDestinationString:w,resourceTitleString:B,resource:G,setextHeading:c(N),setextHeadingLineSequence:L,setextHeadingText:S,strong:c(),thematicBreak:c()}};i1(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(ee){let le={type:"root",children:[]};const we={stack:[le],tokenStack:[],config:t,enter:l,exit:u,buffer:a,resume:d,data:n},_e=[];let je=-1;for(;++je<ee.length;)if(ee[je][1].type==="listOrdered"||ee[je][1].type==="listUnordered")if(ee[je][0]==="enter")_e.push(je);else{const Ae=_e.pop();je=i(ee,Ae,je)}for(je=-1;++je<ee.length;){const Ae=t[ee[je][0]];r1.call(Ae,ee[je][1].type)&&Ae[ee[je][1].type].call(Object.assign({sliceSerialize:ee[je][2].sliceSerialize},we),ee[je][1])}if(we.tokenStack.length>0){const Ae=we.tokenStack[we.tokenStack.length-1];(Ae[1]||dm).call(we,void 0,Ae[0])}for(le.position={start:qn(ee.length>0?ee[0][1].start:{line:1,column:1,offset:0}),end:qn(ee.length>0?ee[ee.length-2][1].end:{line:1,column:1,offset:0})},je=-1;++je<t.transforms.length;)le=t.transforms[je](le)||le;return le}function i(ee,le,we){let _e=le-1,je=-1,Ae=!1,nt,ct,Ne,rt;for(;++_e<=we;){const qe=ee[_e];switch(qe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{qe[0]==="enter"?je++:je--,rt=void 0;break}case"lineEndingBlank":{qe[0]==="enter"&&(nt&&!rt&&!je&&!Ne&&(Ne=_e),rt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:rt=void 0}if(!je&&qe[0]==="enter"&&qe[1].type==="listItemPrefix"||je===-1&&qe[0]==="exit"&&(qe[1].type==="listUnordered"||qe[1].type==="listOrdered")){if(nt){let Vn=_e;for(ct=void 0;Vn--;){const ut=ee[Vn];if(ut[1].type==="lineEnding"||ut[1].type==="lineEndingBlank"){if(ut[0]==="exit")continue;ct&&(ee[ct][1].type="lineEndingBlank",Ae=!0),ut[1].type="lineEnding",ct=Vn}else if(!(ut[1].type==="linePrefix"||ut[1].type==="blockQuotePrefix"||ut[1].type==="blockQuotePrefixWhitespace"||ut[1].type==="blockQuoteMarker"||ut[1].type==="listItemIndent"))break}Ne&&(!ct||Ne<ct)&&(nt._spread=!0),nt.end=Object.assign({},ct?ee[ct][1].start:qe[1].end),ee.splice(ct||_e,0,["exit",nt,qe[2]]),_e++,we++}if(qe[1].type==="listItemPrefix"){const Vn={type:"listItem",_spread:!1,start:Object.assign({},qe[1].start),end:void 0};nt=Vn,ee.splice(_e,0,["enter",Vn,qe[2]]),_e++,we++,Ne=void 0,rt=!0}}}return ee[le][1]._spread=Ae,we}function s(ee,le){return we;function we(_e){l.call(this,ee(_e),_e),le&&le.call(this,_e)}}function a(){this.stack.push({type:"fragment",children:[]})}function l(ee,le,we){this.stack[this.stack.length-1].children.push(ee),this.stack.push(ee),this.tokenStack.push([le,we||void 0]),ee.position={start:qn(le.start),end:void 0}}function c(ee){return le;function le(we){ee&&ee.call(this,we),u.call(this,we)}}function u(ee,le){const we=this.stack.pop(),_e=this.tokenStack.pop();if(_e)_e[0].type!==ee.type&&(le?le.call(this,ee,_e[0]):(_e[1]||dm).call(this,ee,_e[0]));else throw new Error("Cannot close `"+ee.type+"` ("+bo({start:ee.start,end:ee.end})+"): it’s not open");we.position.end=qn(ee.end)}function d(){return aS(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function f(ee){if(this.data.expectingFirstListItemValue){const le=this.stack[this.stack.length-2];le.start=Number.parseInt(this.sliceSerialize(ee),10),this.data.expectingFirstListItemValue=void 0}}function h(){const ee=this.resume(),le=this.stack[this.stack.length-1];le.lang=ee}function m(){const ee=this.resume(),le=this.stack[this.stack.length-1];le.meta=ee}function b(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function _(){const ee=this.resume(),le=this.stack[this.stack.length-1];le.value=ee.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function g(){const ee=this.resume(),le=this.stack[this.stack.length-1];le.value=ee.replace(/(\r?\n|\r)$/g,"")}function x(ee){const le=this.resume(),we=this.stack[this.stack.length-1];we.label=le,we.identifier=mi(this.sliceSerialize(ee)).toLowerCase()}function y(){const ee=this.resume(),le=this.stack[this.stack.length-1];le.title=ee}function j(){const ee=this.resume(),le=this.stack[this.stack.length-1];le.url=ee}function T(ee){const le=this.stack[this.stack.length-1];if(!le.depth){const we=this.sliceSerialize(ee).length;le.depth=we}}function S(){this.data.setextHeadingSlurpLineEnding=!0}function L(ee){const le=this.stack[this.stack.length-1];le.depth=this.sliceSerialize(ee).codePointAt(0)===61?1:2}function N(){this.data.setextHeadingSlurpLineEnding=void 0}function W(ee){const we=this.stack[this.stack.length-1].children;let _e=we[we.length-1];(!_e||_e.type!=="text")&&(_e=ae(),_e.position={start:qn(ee.start),end:void 0},we.push(_e)),this.stack.push(_e)}function E(ee){const le=this.stack.pop();le.value+=this.sliceSerialize(ee),le.position.end=qn(ee.end)}function O(ee){const le=this.stack[this.stack.length-1];if(this.data.atHardBreak){const we=le.children[le.children.length-1];we.position.end=qn(ee.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(le.type)&&(W.call(this,ee),E.call(this,ee))}function F(){this.data.atHardBreak=!0}function K(){const ee=this.resume(),le=this.stack[this.stack.length-1];le.value=ee}function A(){const ee=this.resume(),le=this.stack[this.stack.length-1];le.value=ee}function M(){const ee=this.resume(),le=this.stack[this.stack.length-1];le.value=ee}function $(){const ee=this.stack[this.stack.length-1];if(this.data.inReference){const le=this.data.referenceType||"shortcut";ee.type+="Reference",ee.referenceType=le,delete ee.url,delete ee.title}else delete ee.identifier,delete ee.label;this.data.referenceType=void 0}function C(){const ee=this.stack[this.stack.length-1];if(this.data.inReference){const le=this.data.referenceType||"shortcut";ee.type+="Reference",ee.referenceType=le,delete ee.url,delete ee.title}else delete ee.identifier,delete ee.label;this.data.referenceType=void 0}function P(ee){const le=this.sliceSerialize(ee),we=this.stack[this.stack.length-2];we.label=sN(le),we.identifier=mi(le).toLowerCase()}function I(){const ee=this.stack[this.stack.length-1],le=this.resume(),we=this.stack[this.stack.length-1];if(this.data.inReference=!0,we.type==="link"){const _e=ee.children;we.children=_e}else we.alt=le}function w(){const ee=this.resume(),le=this.stack[this.stack.length-1];le.url=ee}function B(){const ee=this.resume(),le=this.stack[this.stack.length-1];le.title=ee}function G(){this.data.inReference=void 0}function v(){this.data.referenceType="collapsed"}function z(ee){const le=this.resume(),we=this.stack[this.stack.length-1];we.label=le,we.identifier=mi(this.sliceSerialize(ee)).toLowerCase(),this.data.referenceType="full"}function V(ee){this.data.characterReferenceType=ee.type}function ie(ee){const le=this.sliceSerialize(ee),we=this.data.characterReferenceType;let _e;we?(_e=Jv(le,we==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):_e=pp(le);const je=this.stack[this.stack.length-1];je.value+=_e}function fe(ee){const le=this.stack.pop();le.position.end=qn(ee.end)}function ge(ee){E.call(this,ee);const le=this.stack[this.stack.length-1];le.url=this.sliceSerialize(ee)}function Z(ee){E.call(this,ee);const le=this.stack[this.stack.length-1];le.url="mailto:"+this.sliceSerialize(ee)}function U(){return{type:"blockquote",children:[]}}function R(){return{type:"code",lang:null,meta:null,value:""}}function Q(){return{type:"inlineCode",value:""}}function X(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function oe(){return{type:"emphasis",children:[]}}function ve(){return{type:"heading",depth:0,children:[]}}function J(){return{type:"break"}}function D(){return{type:"html",value:""}}function Y(){return{type:"image",title:null,url:"",alt:null}}function ne(){return{type:"link",title:null,url:"",children:[]}}function te(ee){return{type:"list",ordered:ee.type==="listOrdered",start:null,spread:ee._spread,children:[]}}function xe(ee){return{type:"listItem",spread:ee._spread,checked:null,children:[]}}function q(){return{type:"paragraph",children:[]}}function re(){return{type:"strong",children:[]}}function ae(){return{type:"text",value:""}}function be(){return{type:"thematicBreak"}}}function qn(e){return{line:e.line,column:e.column,offset:e.offset}}function i1(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?i1(e,r):uN(e,r)}}function uN(e,t){let n;for(n in t)if(r1.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function dm(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+bo({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+bo({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+bo({start:t.start,end:t.end})+") is still open")}function dN(e){const t=this;t.parser=n;function n(r){return lN(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function pN(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function fN(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function hN(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let s={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(s.data={meta:t.meta}),e.patch(t,s),s=e.applyData(t,s),s={type:"element",tagName:"pre",properties:{},children:[s]},e.patch(t,s),s}function mN(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function gN(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function xN(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Ii(r.toLowerCase()),s=e.footnoteOrder.indexOf(r);let a,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=s+1,l+=1,e.footnoteCounts.set(r,l);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,c);const u={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,u),e.applyData(t,u)}function yN(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function vN(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function o1(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),s=i[0];s&&s.type==="text"?s.value="["+s.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function bN(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return o1(e,t);const i={src:Ii(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,s),e.applyData(t,s)}function wN(e,t){const n={src:Ii(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function kN(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function _N(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return o1(e,t);const i={href:Ii(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,s),e.applyData(t,s)}function jN(e,t){const n={href:Ii(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function SN(e,t,n){const r=e.all(t),i=n?CN(n):s1(t),s={},a=[];if(typeof t.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const d=r[l];(i||l!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?a.push(...d.children):a.push(d)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:s,children:a};return e.patch(t,u),e.applyData(t,u)}function CN(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=s1(n[r])}return t}function s1(e){const t=e.spread;return t??e.children.length>1}function NN(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const s={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,s),e.applyData(t,s)}function EN(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function zN(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function TN(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function AN(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),i.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},l=lp(t.children[1]),c=Fv(t.children[t.children.length-1]);l&&c&&(a.position={start:l,end:c}),i.push(a)}const s={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,s),e.applyData(t,s)}function MN(e,t,n){const r=n?n.children:void 0,s=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,l=a?a.length:t.children.length;let c=-1;const u=[];for(;++c<l;){const p=t.children[c],f={},h=a?a[c]:void 0;h&&(f.align=h);let m={type:"element",tagName:s,properties:f,children:[]};p&&(m.children=e.all(p),e.patch(p,m),m=e.applyData(p,m)),u.push(m)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function PN(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const pm=9,fm=32;function LN(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const s=[];for(;r;)s.push(hm(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return s.push(hm(t.slice(i),i>0,!1)),s.join("")}function hm(e,t,n){let r=0,i=e.length;if(t){let s=e.codePointAt(r);for(;s===pm||s===fm;)r++,s=e.codePointAt(r)}if(n){let s=e.codePointAt(i-1);for(;s===pm||s===fm;)i--,s=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function RN(e,t){const n={type:"text",value:LN(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function IN(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const ON={blockquote:pN,break:fN,code:hN,delete:mN,emphasis:gN,footnoteReference:xN,heading:yN,html:vN,imageReference:bN,image:wN,inlineCode:kN,linkReference:_N,link:jN,listItem:SN,list:NN,paragraph:EN,root:zN,strong:TN,table:AN,tableCell:PN,tableRow:MN,text:RN,thematicBreak:IN,toml:Rs,yaml:Rs,definition:Rs,footnoteDefinition:Rs};function Rs(){}const a1=-1,yl=0,ko=1,Da=2,mp=3,gp=4,xp=5,yp=6,l1=7,c1=8,mm=typeof self=="object"?self:globalThis,$N=(e,t)=>{const n=(i,s)=>(e.set(s,i),i),r=i=>{if(e.has(i))return e.get(i);const[s,a]=t[i];switch(s){case yl:case a1:return n(a,i);case ko:{const l=n([],i);for(const c of a)l.push(r(c));return l}case Da:{const l=n({},i);for(const[c,u]of a)l[r(c)]=r(u);return l}case mp:return n(new Date(a),i);case gp:{const{source:l,flags:c}=a;return n(new RegExp(l,c),i)}case xp:{const l=n(new Map,i);for(const[c,u]of a)l.set(r(c),r(u));return l}case yp:{const l=n(new Set,i);for(const c of a)l.add(r(c));return l}case l1:{const{name:l,message:c}=a;return n(new mm[l](c),i)}case c1:return n(BigInt(a),i);case"BigInt":return n(Object(BigInt(a)),i);case"ArrayBuffer":return n(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:l}=new Uint8Array(a);return n(new DataView(l),a)}}return n(new mm[s](a),i)};return r},gm=e=>$N(new Map,e)(0),Jr="",{toString:DN}={},{keys:FN}=Object,Qi=e=>{const t=typeof e;if(t!=="object"||!e)return[yl,t];const n=DN.call(e).slice(8,-1);switch(n){case"Array":return[ko,Jr];case"Object":return[Da,Jr];case"Date":return[mp,Jr];case"RegExp":return[gp,Jr];case"Map":return[xp,Jr];case"Set":return[yp,Jr];case"DataView":return[ko,n]}return n.includes("Array")?[ko,n]:n.includes("Error")?[l1,n]:[Da,n]},Is=([e,t])=>e===yl&&(t==="function"||t==="symbol"),BN=(e,t,n,r)=>{const i=(a,l)=>{const c=r.push(a)-1;return n.set(l,c),c},s=a=>{if(n.has(a))return n.get(a);let[l,c]=Qi(a);switch(l){case yl:{let d=a;switch(c){case"bigint":l=c1,d=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);d=null;break;case"undefined":return i([a1],a)}return i([l,d],a)}case ko:{if(c){let f=a;return c==="DataView"?f=new Uint8Array(a.buffer):c==="ArrayBuffer"&&(f=new Uint8Array(a)),i([c,[...f]],a)}const d=[],p=i([l,d],a);for(const f of a)d.push(s(f));return p}case Da:{if(c)switch(c){case"BigInt":return i([c,a.toString()],a);case"Boolean":case"Number":case"String":return i([c,a.valueOf()],a)}if(t&&"toJSON"in a)return s(a.toJSON());const d=[],p=i([l,d],a);for(const f of FN(a))(e||!Is(Qi(a[f])))&&d.push([s(f),s(a[f])]);return p}case mp:return i([l,a.toISOString()],a);case gp:{const{source:d,flags:p}=a;return i([l,{source:d,flags:p}],a)}case xp:{const d=[],p=i([l,d],a);for(const[f,h]of a)(e||!(Is(Qi(f))||Is(Qi(h))))&&d.push([s(f),s(h)]);return p}case yp:{const d=[],p=i([l,d],a);for(const f of a)(e||!Is(Qi(f)))&&d.push(s(f));return p}}const{message:u}=a;return i([l,{name:c,message:u}],a)};return s},xm=(e,{json:t,lossy:n}={})=>{const r=[];return BN(!(t||n),!!t,new Map,r)(e),r},Fa=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?gm(xm(e,t)):structuredClone(e):(e,t)=>gm(xm(e,t));function UN(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function WN(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function VN(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||UN,r=e.options.footnoteBackLabel||WN,i=e.options.footnoteLabel||"Footnotes",s=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let c=-1;for(;++c<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[c]);if(!u)continue;const d=e.all(u),p=String(u.identifier).toUpperCase(),f=Ii(p.toLowerCase());let h=0;const m=[],b=e.footnoteCounts.get(p);for(;b!==void 0&&++h<=b;){m.length>0&&m.push({type:"text",value:" "});let x=typeof n=="string"?n:n(c,h);typeof x=="string"&&(x={type:"text",value:x}),m.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,h),className:["data-footnote-backref"]},children:Array.isArray(x)?x:[x]})}const _=d[d.length-1];if(_&&_.type==="element"&&_.tagName==="p"){const x=_.children[_.children.length-1];x&&x.type==="text"?x.value+=" ":_.children.push({type:"text",value:" "}),_.children.push(...m)}else d.push(...m);const g={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(u,g),l.push(g)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...Fa(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const u1=function(e){if(e==null)return KN;if(typeof e=="function")return vl(e);if(typeof e=="object")return Array.isArray(e)?HN(e):qN(e);if(typeof e=="string")return JN(e);throw new Error("Expected function, string, or object as test")};function HN(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=u1(e[n]);return vl(r);function r(...i){let s=-1;for(;++s<t.length;)if(t[s].apply(this,i))return!0;return!1}}function qN(e){const t=e;return vl(n);function n(r){const i=r;let s;for(s in e)if(i[s]!==t[s])return!1;return!0}}function JN(e){return vl(t);function t(n){return n&&n.type===e}}function vl(e){return t;function t(n,r,i){return!!(GN(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function KN(){return!0}function GN(e){return e!==null&&typeof e=="object"&&"type"in e}const d1=[],YN=!0,ym=!1,QN="skip";function XN(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const s=u1(i),a=r?-1:1;l(e,void 0,[])();function l(c,u,d){const p=c&&typeof c=="object"?c:{};if(typeof p.type=="string"){const h=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(c.type+(h?"<"+h+">":""))+")"})}return f;function f(){let h=d1,m,b,_;if((!t||s(c,u,d[d.length-1]||void 0))&&(h=ZN(n(c,d)),h[0]===ym))return h;if("children"in c&&c.children){const g=c;if(g.children&&h[0]!==QN)for(b=(r?g.children.length:-1)+a,_=d.concat(g);b>-1&&b<g.children.length;){const x=g.children[b];if(m=l(x,b,_)(),m[0]===ym)return m;b=typeof m[1]=="number"?m[1]:b+a}}return h}}}function ZN(e){return Array.isArray(e)?e:typeof e=="number"?[YN,e]:e==null?d1:[e]}function p1(e,t,n,r){let i,s,a;typeof t=="function"&&typeof n!="function"?(s=void 0,a=t,i=n):(s=t,a=n,i=r),XN(e,s,l,i);function l(c,u){const d=u[u.length-1],p=d?d.children.indexOf(c):void 0;return a(c,p,d)}}const $u={}.hasOwnProperty,e4={};function t4(e,t){const n=t||e4,r=new Map,i=new Map,s=new Map,a={...ON,...n.handlers},l={all:u,applyData:r4,definitionById:r,footnoteById:i,footnoteCounts:s,footnoteOrder:[],handlers:a,one:c,options:n,patch:n4,wrap:o4};return p1(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:i,f=String(d.identifier).toUpperCase();p.has(f)||p.set(f,d)}}),l;function c(d,p){const f=d.type,h=l.handlers[f];if($u.call(l.handlers,f)&&h)return h(l,d,p);if(l.options.passThrough&&l.options.passThrough.includes(f)){if("children"in d){const{children:b,..._}=d,g=Fa(_);return g.children=l.all(d),g}return Fa(d)}return(l.options.unknownHandler||i4)(l,d,p)}function u(d){const p=[];if("children"in d){const f=d.children;let h=-1;for(;++h<f.length;){const m=l.one(f[h],d);if(m){if(h&&f[h-1].type==="break"&&(!Array.isArray(m)&&m.type==="text"&&(m.value=vm(m.value)),!Array.isArray(m)&&m.type==="element")){const b=m.children[0];b&&b.type==="text"&&(b.value=vm(b.value))}Array.isArray(m)?p.push(...m):p.push(m)}}}return p}}function n4(e,t){e.position&&(t.position=D2(e))}function r4(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,s=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&s&&Object.assign(n.properties,Fa(s)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function i4(e,t){const n=t.data||{},r="value"in t&&!($u.call(n,"hProperties")||$u.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function o4(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function vm(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function bm(e,t){const n=t4(e,t),r=n.one(e,void 0),i=VN(n),s=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&s.children.push({type:"text",value:`
`},i),s}function s4(e,t){return e&&"run"in e?async function(n,r){const i=bm(n,{file:r,...t});await e.run(i,r)}:function(n,r){return bm(n,{file:r,...e||t})}}function wm(e){if(e)throw e}var ia=Object.prototype.hasOwnProperty,f1=Object.prototype.toString,km=Object.defineProperty,_m=Object.getOwnPropertyDescriptor,jm=function(t){return typeof Array.isArray=="function"?Array.isArray(t):f1.call(t)==="[object Array]"},Sm=function(t){if(!t||f1.call(t)!=="[object Object]")return!1;var n=ia.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&ia.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||ia.call(t,i)},Cm=function(t,n){km&&n.name==="__proto__"?km(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Nm=function(t,n){if(n==="__proto__")if(ia.call(t,n)){if(_m)return _m(t,n).value}else return;return t[n]},a4=function e(){var t,n,r,i,s,a,l=arguments[0],c=1,u=arguments.length,d=!1;for(typeof l=="boolean"&&(d=l,l=arguments[1]||{},c=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});c<u;++c)if(t=arguments[c],t!=null)for(n in t)r=Nm(l,n),i=Nm(t,n),l!==i&&(d&&i&&(Sm(i)||(s=jm(i)))?(s?(s=!1,a=r&&jm(r)?r:[]):a=r&&Sm(r)?r:{},Cm(l,{name:n,newValue:e(d,a,i)})):typeof i<"u"&&Cm(l,{name:n,newValue:i}));return l};const pc=Ga(a4);function Du(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function l4(){const e=[],t={run:n,use:r};return t;function n(...i){let s=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);l(null,...i);function l(c,...u){const d=e[++s];let p=-1;if(c){a(c);return}for(;++p<i.length;)(u[p]===null||u[p]===void 0)&&(u[p]=i[p]);i=u,d?c4(d,l)(...u):a(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function c4(e,t){let n;return r;function r(...a){const l=e.length>a.length;let c;l&&a.push(i);try{c=e.apply(this,a)}catch(u){const d=u;if(l&&n)throw d;return i(d)}l||(c&&c.then&&typeof c.then=="function"?c.then(s,i):c instanceof Error?i(c):s(c))}function i(a,...l){n||(n=!0,t(a,...l))}function s(a){i(null,a)}}const xn={basename:u4,dirname:d4,extname:p4,join:f4,sep:"/"};function u4(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');as(e);let n=0,r=-1,i=e.length,s;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else r<0&&(s=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let a=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else a<0&&(s=!0,a=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(r=i):(l=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function d4(e){if(as(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function p4(e){as(e);let t=e.length,n=-1,r=0,i=-1,s=0,a;for(;t--;){const l=e.codePointAt(t);if(l===47){if(a){r=t+1;break}continue}n<0&&(a=!0,n=t+1),l===46?i<0?i=t:s!==1&&(s=1):i>-1&&(s=-1)}return i<0||n<0||s===0||s===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function f4(...e){let t=-1,n;for(;++t<e.length;)as(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":h4(n)}function h4(e){as(e);const t=e.codePointAt(0)===47;let n=m4(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function m4(e,t){let n="",r=0,i=-1,s=0,a=-1,l,c;for(;++a<=e.length;){if(a<e.length)l=e.codePointAt(a);else{if(l===47)break;l=47}if(l===47){if(!(i===a-1||s===1))if(i!==a-1&&s===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),i=a,s=0;continue}}else if(n.length>0){n="",r=0,i=a,s=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,s=0}else l===46&&s>-1?s++:s=-1}return n}function as(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const g4={cwd:x4};function x4(){return"/"}function Fu(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function y4(e){if(typeof e=="string")e=new URL(e);else if(!Fu(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return v4(e)}function v4(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const fc=["history","path","basename","stem","extname","dirname"];class h1{constructor(t){let n;t?Fu(t)?n={path:t}:typeof t=="string"||b4(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":g4.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<fc.length;){const s=fc[r];s in n&&n[s]!==void 0&&n[s]!==null&&(this[s]=s==="history"?[...n[s]]:n[s])}let i;for(i in n)fc.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?xn.basename(this.path):void 0}set basename(t){mc(t,"basename"),hc(t,"basename"),this.path=xn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?xn.dirname(this.path):void 0}set dirname(t){Em(this.basename,"dirname"),this.path=xn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?xn.extname(this.path):void 0}set extname(t){if(hc(t,"extname"),Em(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=xn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Fu(t)&&(t=y4(t)),mc(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?xn.basename(this.path,this.extname):void 0}set stem(t){mc(t,"stem"),hc(t,"stem"),this.path=xn.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new xt(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function hc(e,t){if(e&&e.includes(xn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+xn.sep+"`")}function mc(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Em(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function b4(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const w4=function(e){const r=this.constructor.prototype,i=r[e],s=function(){return i.apply(s,arguments)};return Object.setPrototypeOf(s,r),s},k4={}.hasOwnProperty;class vp extends w4{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=l4()}copy(){const t=new vp;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(pc(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(yc("data",this.frozen),this.namespace[t]=n,this):k4.call(this.namespace,t)&&this.namespace[t]||void 0:t?(yc("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Os(t),r=this.parser||this.Parser;return gc("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),gc("process",this.parser||this.Parser),xc("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(s,a){const l=Os(t),c=r.parse(l);r.run(c,l,function(d,p,f){if(d||!p||!f)return u(d);const h=p,m=r.stringify(h,f);S4(m)?f.value=m:f.result=m,u(d,f)});function u(d,p){d||!p?a(d):s?s(p):n(void 0,p)}}}processSync(t){let n=!1,r;return this.freeze(),gc("processSync",this.parser||this.Parser),xc("processSync",this.compiler||this.Compiler),this.process(t,i),Tm("processSync","process",n),r;function i(s,a){n=!0,wm(s),r=a}}run(t,n,r){zm(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?s(void 0,r):new Promise(s);function s(a,l){const c=Os(n);i.run(t,c,u);function u(d,p,f){const h=p||t;d?l(d):a?a(h):r(void 0,h,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,s),Tm("runSync","run",r),i;function s(a,l){wm(a),i=l,r=!0}}stringify(t,n){this.freeze();const r=Os(n),i=this.compiler||this.Compiler;return xc("stringify",i),zm(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(yc("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function s(u){if(typeof u=="function")c(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...p]=u;c(d,p)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(i.settings=pc(!0,i.settings,u.settings))}function l(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const p=u[d];s(p)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function c(u,d){let p=-1,f=-1;for(;++p<r.length;)if(r[p][0]===u){f=p;break}if(f===-1)r.push([u,...d]);else if(d.length>0){let[h,...m]=d;const b=r[f][1];Du(b)&&Du(h)&&(h=pc(!0,b,h)),r[f]=[u,h,...m]}}}}const _4=new vp().freeze();function gc(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function xc(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function yc(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function zm(e){if(!Du(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Tm(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Os(e){return j4(e)?e:new h1(e)}function j4(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function S4(e){return typeof e=="string"||C4(e)}function C4(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const N4="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Am=[],Mm={allowDangerousHtml:!0},E4=/^(https?|ircs?|mailto|xmpp)$/i,z4=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function m1(e){const t=T4(e),n=A4(e);return M4(t.runSync(t.parse(n),n),e)}function T4(e){const t=e.rehypePlugins||Am,n=e.remarkPlugins||Am,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Mm}:Mm;return _4().use(dN).use(n).use(s4,r).use(t)}function A4(e){const t=e.children||"",n=new h1;return typeof t=="string"&&(n.value=t),n}function M4(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,s=t.disallowedElements,a=t.skipHtml,l=t.unwrapDisallowed,c=t.urlTransform||P4;for(const d of z4)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+N4+d.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),p1(e,u),V2(e,{Fragment:o.Fragment,components:i,ignoreInvalidStyle:!0,jsx:o.jsx,jsxs:o.jsxs,passKeys:!0,passNode:!0});function u(d,p,f){if(d.type==="raw"&&f&&typeof p=="number")return a?f.children.splice(p,1):f.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let h;for(h in cc)if(Object.hasOwn(cc,h)&&Object.hasOwn(d.properties,h)){const m=d.properties[h],b=cc[h];(b===null||b.includes(d.tagName))&&(d.properties[h]=c(String(m||""),h,d))}}if(d.type==="element"){let h=n?!n.includes(d.tagName):s?s.includes(d.tagName):!1;if(!h&&r&&typeof p=="number"&&(h=!r(d,p,f)),h&&f&&typeof p=="number")return l&&d.children?f.children.splice(p,1,...d.children):f.children.splice(p,1),p}}}function P4(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||E4.test(e.slice(0,t))?e:""}function L4({value:e,onChange:t,placeholder:n="Write your content here...",minHeight:r=200}){const[i,s]=k.useState(!1),[a,l]=k.useState(r),c=k.useRef(null),u=k.useRef(null);k.useEffect(()=>{if(e){const f=e.split(`
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
      `}),i?o.jsx("div",{className:"monaco-wrapper",children:o.jsx(en,{height:"100%",language:"markdown",theme:"vs-dark",value:e,onChange:f=>t(f||""),onMount:d,options:{minimap:{enabled:!1},fontSize:14,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"off",scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",padding:{top:12,bottom:12},lineDecorationsWidth:8,folding:!1,glyphMargin:!1,renderLineHighlight:"none",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,scrollbar:{vertical:"auto",horizontal:"hidden"}}})}):o.jsxs("div",{className:"markdown-preview",onClick:()=>s(!0),children:[o.jsxs("span",{className:"edit-hint",children:[o.jsx(__,{size:12}),"Click to edit"]}),e?o.jsx("div",{className:"markdown-content",children:o.jsx(m1,{children:e})}):o.jsx("div",{className:"markdown-placeholder",children:n})]})]})}function R4(e){return/^[a-zA-Z0-9_]+$/.test(e)}function I4({agent:e}){const{project:t,updateAgent:n,mcpServers:r,builtinTools:i,setActiveTab:s,setRunAgentId:a}=gt(),[l,c]=k.useState(new Set(["basic","model","tools","subagents","callbacks"])),[u,d]=k.useState(!1),[p,f]=k.useState(!1),[h,m]=k.useState(!1),[b,_]=k.useState(""),[g,x]=k.useState(null);if(!t)return null;function y(C){n(e.id,C)}function j(C){if(C===""){x(null),y({name:C});return}R4(C)?x(null):x("Name can only contain letters, numbers, and underscores"),e.type==="LlmAgent"?y({name:C,output_key:C}):y({name:C})}function T(C){const P=new Set(l);P.has(C)?P.delete(C):P.add(C),c(P)}const S=e.type==="LlmAgent",L=e;function N(C){S&&y({tools:[...L.tools,C]})}function W(C){S&&y({tools:L.tools.filter((P,I)=>I!==C)})}function E(C,P){if(!S)return;const I=[...L.tools];I[C]=P,y({tools:I})}function O(C){"sub_agents"in e&&y({sub_agents:[...e.sub_agents,C]})}function F(C){"sub_agents"in e&&y({sub_agents:e.sub_agents.filter(P=>P!==C)})}const K=t.agents.filter(C=>C.id!==e.id);async function A(){if(!(!t||!S)){d(!0);try{const C=L.instruction||"",P=C?`Current instruction to improve:

${C}

Please improve and expand this instruction while preserving its core intent.`:void 0,w=t.agents.some(G=>G.id===e.id)?void 0:e,B=await na(t.id,e.id,P,w);B.success&&B.prompt?y({instruction:B.prompt}):alert("Failed to generate prompt: "+(B.error||"Unknown error"))}catch(C){alert("Error generating prompt: "+C.message)}finally{d(!1)}}}async function M(){if(!(!t||!S||!b.trim())){d(!0);try{const P=`Current instruction:

${L.instruction||""}

---

Requested changes:
${b}

Please apply the requested changes to the instruction above. Output only the updated instruction, nothing else.`,w=t.agents.some(G=>G.id===e.id)?void 0:e,B=await na(t.id,e.id,P,w);B.success&&B.prompt?(y({instruction:B.prompt}),m(!1),_("")):alert("Failed to apply changes: "+(B.error||"Unknown error"))}catch(C){alert("Error applying changes: "+C.message)}finally{d(!1)}}}async function $(){if(!t||!S)return;const C=L.instruction;if(!C){alert("Please write an instruction first");return}f(!0);try{const P=`Write a 5-10 word description of what this agent does.

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

Your response (5-10 words only):`,I=await na(t.id,e.id,P);if(I.success&&I.prompt){let w=I.prompt.trim();w=w.replace(/^["']|["']$/g,"").trim();const B=w.split(/[.!?\n]/)[0].trim(),G=B.length>80?B.slice(0,77)+"...":B;y({description:G})}else alert("Failed to generate description: "+(I.error||"Unknown error"))}catch(P){alert("Error generating description: "+P.message)}finally{f(!1)}}return o.jsxs("div",{className:"agent-editor",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"editor-header",children:[o.jsx(Ar,{size:24,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o.jsx("input",{type:"text",value:e.name,onChange:C=>j(C.target.value),placeholder:"Agent name",style:{borderColor:g?"var(--error)":void 0}}),g&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:g})]}),o.jsx("span",{className:"badge badge-info",children:e.type}),o.jsxs("button",{className:"btn btn-primary btn-sm run-agent-btn",onClick:()=>{a(e.id),s("run")},title:"Test this agent",children:[o.jsx(hr,{size:14}),"Run"]})]}),o.jsxs("div",{className:"editor-content",children:[o.jsxs(Xi,{id:"basic",title:"Basic Info",icon:o.jsx(Ar,{size:16}),expanded:l.has("basic"),onToggle:()=>T("basic"),children:[o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group full-width",children:[o.jsxs("div",{className:"label-with-action",children:[o.jsx("label",{children:"Description"}),S&&L.instruction&&o.jsx("button",{className:"btn btn-secondary btn-sm generate-btn",onClick:$,disabled:p,title:"Generate description from instruction",children:p?o.jsxs(o.Fragment,{children:[o.jsx(tr,{size:14,className:"spin"}),"Summarizing..."]}):"Summarize"})]}),o.jsx("input",{type:"text",value:e.description,onChange:C=>y({description:C.target.value}),placeholder:"e.g., Reviews code for bugs and suggests fixes"})]})}),S&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group full-width",children:[o.jsxs("div",{className:"label-with-action",children:[o.jsx("label",{children:"Instruction"}),o.jsxs("div",{className:"action-buttons",children:[o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>m(!h),disabled:u||!L.instruction,title:"Request specific changes to the instruction",children:"Request Changes"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:A,disabled:u,title:"Uses AI to improve and expand the current instruction",children:u?o.jsxs(o.Fragment,{children:[o.jsx(tr,{size:14,className:"spin"}),"Working..."]}):"Auto-Improve"})]})]}),h&&o.jsxs("div",{className:"request-changes-box",children:[o.jsx("input",{type:"text",value:b,onChange:C=>_(C.target.value),placeholder:"Describe what changes you want...",onKeyDown:C=>{C.key==="Enter"&&b.trim()?M():C.key==="Escape"&&(m(!1),_(""))},autoFocus:!0}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:M,disabled:u||!b.trim(),children:"Apply"})]}),o.jsx(L4,{value:L.instruction,onChange:C=>y({instruction:C}),placeholder:"Write your agent's instruction here... (Markdown supported)",minHeight:200})]})}),o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Output Key"}),o.jsxs("select",{value:L.output_key||"",onChange:C=>y({output_key:C.target.value||void 0}),children:[o.jsx("option",{value:"",children:"None"}),t.app.state_keys.map(C=>o.jsx("option",{value:C.name,children:C.name},C.name))]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Include Contents"}),o.jsxs("select",{value:L.include_contents,onChange:C=>y({include_contents:C.target.value}),children:[o.jsx("option",{value:"default",children:"Default"}),o.jsx("option",{value:"none",children:"None"})]})]})]}),o.jsxs("div",{className:"form-row",style:{gap:24},children:[o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:L.disallow_transfer_to_parent,onChange:C=>y({disallow_transfer_to_parent:C.target.checked})}),o.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to parent"]}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:L.disallow_transfer_to_peers,onChange:C=>y({disallow_transfer_to_peers:C.target.checked})}),o.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to peers"]})]})]}),e.type==="LoopAgent"&&o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Max Iterations"}),o.jsx("input",{type:"number",value:e.max_iterations||"",onChange:C=>y({max_iterations:parseInt(C.target.value)||void 0}),placeholder:"No limit"})]})})]}),S&&o.jsx(Xi,{id:"model",title:"Model",icon:o.jsx(Xd,{size:16}),expanded:l.has("model"),onToggle:()=>T("model"),children:o.jsx($4,{agent:L,appModels:t.app.models||[],defaultModelId:t.app.default_model_id,projectId:t.id,onUpdate:C=>y({model:C})})}),S&&o.jsx(Xi,{id:"tools",title:`Tools (${L.tools.length})`,icon:o.jsx(pn,{size:16}),expanded:l.has("tools"),onToggle:()=>T("tools"),children:o.jsx(O4,{tools:L.tools,onAdd:N,onRemove:W,onUpdate:E,builtinTools:i,mcpServers:r,projectMcpServers:t.mcp_servers,customTools:t.custom_tools,agents:K,skillsets:t.skillsets||[]})}),"sub_agents"in e&&o.jsx(Xi,{id:"subagents",title:`Sub-Agents (${e.sub_agents.length})`,icon:o.jsx(_v,{size:16}),expanded:l.has("subagents"),onToggle:()=>T("subagents"),children:o.jsxs("div",{className:"sub-agent-list",children:[e.sub_agents.map(C=>{const P=t.agents.find(I=>I.id===C);return P?o.jsxs("div",{className:"sub-agent-chip",children:[P.name,o.jsx("button",{onClick:()=>F(C),children:o.jsx(Ue,{size:12})})]},C):null}),o.jsxs("select",{value:"",onChange:C=>{C.target.value&&O(C.target.value)},style:{width:150,padding:"6px 10px",fontSize:13},children:[o.jsx("option",{value:"",children:"Add agent..."}),K.filter(C=>!e.sub_agents.includes(C.id)).map(C=>o.jsx("option",{value:C.id,children:C.name},C.id))]})]})}),o.jsx(Xi,{id:"callbacks",title:"Callbacks",icon:o.jsx(jn,{size:16}),expanded:l.has("callbacks"),onToggle:()=>T("callbacks"),children:o.jsx(D4,{agent:e,onUpdate:y,customCallbacks:t.custom_callbacks||[],isLlmAgent:S})})]})]})}function Xi({id:e,title:t,icon:n,expanded:r,onToggle:i,children:s}){return o.jsxs("div",{className:"section",children:[o.jsxs("div",{className:"section-header",onClick:i,children:[r?o.jsx(Ct,{size:16}):o.jsx(vt,{size:16}),o.jsxs("h4",{children:[n," ",t]})]}),r&&o.jsx("div",{className:"section-content",children:s})]})}function O4({tools:e,onAdd:t,onRemove:n,onUpdate:r,builtinTools:i,mcpServers:s,projectMcpServers:a,customTools:l,agents:c,skillsets:u}){const[d,p]=k.useState(!1),[f,h]=k.useState({}),[m,b]=k.useState(""),_=Wt.useRef(null),g=Wt.useRef(null),[x,y]=k.useState(null),[j,T]=k.useState(new Set),S=(z,V)=>{if(!m.trim())return!0;const ie=m.toLowerCase();return z.toLowerCase().includes(ie)||((V==null?void 0:V.toLowerCase().includes(ie))??!1)},L=i.filter(z=>S(z.name,z.description)),N=a.filter(z=>S(z.name,z.description)),W=l.filter(z=>S(z.name,z.description)),E=c.filter(z=>S(z.name,z.description)),O=u.filter(z=>S(z.name,z.description));function F(){if(_.current){const z=_.current.getBoundingClientRect(),V=window.innerHeight,ie=350,fe=V-z.bottom-16,ge=z.top-16;if(fe>=200||fe>=ge){const Z=Math.min(ie,fe);h({top:z.bottom+4,left:z.left,maxHeight:Z})}else{const Z=Math.min(ie,ge);h({top:z.top-Z-4,left:z.left,maxHeight:Z})}}p(!0),b(""),setTimeout(()=>{var z;return(z=g.current)==null?void 0:z.focus()},50)}function K(){p(!1),b("")}function A(z){t({type:"builtin",name:z}),K()}async function M(z){K();const V=z.tool_filter||[];if(y({server:z,enabledTools:new Set(V),availableTools:V.map(ie=>({name:ie,description:""})),isLoading:V.length===0,error:void 0}),V.length===0)try{const{testMcpServer:ie}=await D_(async()=>{const{testMcpServer:ge}=await Promise.resolve().then(()=>l_);return{testMcpServer:ge}},void 0),fe=await ie({connection_type:z.connection_type,command:z.command,args:z.args,env:z.env,url:z.url,headers:z.headers,timeout:z.timeout||30});fe.success?y(ge=>ge?{...ge,availableTools:fe.tools,enabledTools:new Set(fe.tools.map(Z=>Z.name)),isLoading:!1}:null):y(ge=>ge?{...ge,isLoading:!1,error:fe.error||"Failed to connect to MCP server"}:null)}catch(ie){y(fe=>fe?{...fe,isLoading:!1,error:ie.message}:null)}}function $(z){if(!x)return;const V=new Set(x.enabledTools);V.has(z)?V.delete(z):V.add(z),y({...x,enabledTools:V})}function C(){if(!x)return;const z=Array.from(x.enabledTools);t({type:"mcp",server:{...x.server,tool_filter:z}}),y(null)}function P(z){const V=new Set(j);V.has(z)?V.delete(z):V.add(z),T(V)}function I(z,V){const ie=e[z];if(ie.type!=="mcp"||!ie.server)return;const fe=ie.server.tool_filter||[];let ge;fe.includes(V)?ge=fe.filter(Z=>Z!==V):ge=[...fe,V],r(z,{...ie,server:{...ie.server,tool_filter:ge}})}function w(z){t({type:"function",name:z.name,module_path:z.module_path}),K()}function B(z){const V=c.find(ie=>ie.id===z);t({type:"agent",agent_id:z,name:V==null?void 0:V.name}),K()}function G(z){const V=u.find(ie=>ie.id===z);t({type:"skillset",skillset_id:z,name:V==null?void 0:V.name}),K()}function v(z){return s.find(V=>V.name===z)}return o.jsxs("div",{children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"tool-list",children:e.map((z,V)=>{var ie;return z.type==="mcp"&&z.server?o.jsxs("div",{className:"mcp-tool-item",children:[o.jsxs("div",{className:"mcp-tool-header",onClick:()=>P(V),children:[j.has(V)?o.jsx(Ct,{size:14}):o.jsx(vt,{size:14}),o.jsx(pn,{size:14,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{className:"mcp-tool-info",children:[o.jsx("div",{className:"mcp-tool-name",children:z.server.name}),o.jsx("div",{className:"mcp-tool-count",children:z.server.tool_filter===null||z.server.tool_filter===void 0?"all tools":`${z.server.tool_filter.length} tools enabled`})]}),o.jsx("button",{className:"delete-btn",onClick:fe=>{fe.stopPropagation(),n(V)},children:o.jsx(Ue,{size:14})})]}),j.has(V)&&o.jsx("div",{className:"mcp-tool-body",children:o.jsx("div",{className:"mcp-tool-list",children:(()=>{const fe=v(z.server.name),ge=(fe==null?void 0:fe.tool_filter)||z.server.tool_filter||[],Z=new Set(z.server.tool_filter||[]);return ge.map(U=>o.jsxs("label",{className:`mcp-tool-chip ${Z.has(U)?"enabled":"disabled"}`,onClick:()=>I(V,U),children:[o.jsx("input",{type:"checkbox",checked:Z.has(U),onChange:()=>{},style:{display:"none"}}),U]},U))})()})})]},V):z.type==="skillset"?o.jsxs("div",{className:"tool-item",children:[o.jsx(In,{size:14,style:{color:"var(--accent)"}}),o.jsxs("div",{className:"tool-item-info",children:[o.jsx("div",{className:"tool-item-name",children:z.name||((ie=u.find(fe=>fe.id===z.skillset_id))==null?void 0:ie.name)||"SkillSet"}),o.jsx("div",{className:"tool-item-type",children:"skillset"})]}),o.jsx("button",{className:"delete-btn",onClick:()=>n(V),children:o.jsx(Ue,{size:14})})]},V):o.jsxs("div",{className:"tool-item",children:[o.jsx(pn,{size:14,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{className:"tool-item-info",children:[o.jsx("div",{className:"tool-item-name",children:z.name||z.agent_id}),o.jsx("div",{className:"tool-item-type",children:z.type})]}),o.jsx("button",{className:"delete-btn",onClick:()=>n(V),children:o.jsx(Ue,{size:14})})]},V)})}),o.jsxs("div",{className:"add-tool-dropdown",style:{marginTop:12},children:[o.jsxs("button",{ref:_,className:"btn btn-secondary btn-sm",onClick:()=>d?K():F(),children:[o.jsx(Qe,{size:14}),"Add Tool"]}),d&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"dropdown-backdrop",onClick:K}),o.jsxs("div",{className:"dropdown-content dropdown-fixed",style:f,children:[o.jsx("div",{className:"dropdown-search",children:o.jsx("input",{ref:g,type:"text",placeholder:"Search tools...",value:m,onChange:z=>b(z.target.value),onKeyDown:z=>z.key==="Escape"&&K()})}),L.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Built-in Tools"}),L.map(z=>o.jsxs("button",{className:"dropdown-item",onClick:()=>A(z.name),children:[o.jsx("div",{className:"dropdown-item-name",children:z.name}),o.jsx("div",{className:"dropdown-item-desc",children:z.description})]},z.name))]}),N.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsxs("h5",{children:["Project MCP Servers (",N.length,")"]}),N.map(z=>o.jsxs("button",{className:"dropdown-item",onClick:()=>M(z),children:[o.jsxs("div",{className:"dropdown-item-name",children:[z.name,o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:z.tool_filter===null||z.tool_filter===void 0?"all tools":`${z.tool_filter.length} tools`})]}),o.jsx("div",{className:"dropdown-item-desc",children:z.description||"Custom MCP server"})]},`project-${z.id||z.name}`))]}),W.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Custom Tools"}),W.map(z=>o.jsxs("button",{className:"dropdown-item",onClick:()=>w(z),children:[o.jsx("div",{className:"dropdown-item-name",children:z.name}),o.jsx("div",{className:"dropdown-item-desc",children:z.description})]},z.id))]}),E.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Agents as Tools"}),E.map(z=>o.jsxs("button",{className:"dropdown-item",onClick:()=>B(z.id),children:[o.jsx("div",{className:"dropdown-item-name",children:z.name}),o.jsx("div",{className:"dropdown-item-desc",children:z.type})]},z.id))]}),O.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsxs("h5",{children:["SkillSets (",O.length,")"]}),O.map(z=>o.jsxs("button",{className:"dropdown-item",onClick:()=>G(z.id),children:[o.jsxs("div",{className:"dropdown-item-name",children:[z.name,o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:[z.entry_count||0," entries"]})]}),o.jsx("div",{className:"dropdown-item-desc",children:z.description||"Vector knowledge base"})]},z.id))]}),m.trim()&&L.length===0&&N.length===0&&W.length===0&&E.length===0&&O.length===0&&o.jsxs("div",{className:"dropdown-section",style:{textAlign:"center",padding:"20px",color:"var(--text-muted)"},children:['No tools matching "',m,'"']})]})]})]}),x&&o.jsx("div",{className:"mcp-config-dialog",children:o.jsxs("div",{className:"mcp-config-content",children:[o.jsxs("h3",{children:["Configure ",x.server.name]}),o.jsx("p",{children:x.server.description}),x.isLoading?o.jsxs("div",{className:"mcp-loading",children:[o.jsx("div",{className:"spinner"}),o.jsx("p",{children:"Connecting to MCP server and discovering tools..."})]}):x.error?o.jsxs("div",{className:"mcp-error",children:[o.jsxs("p",{children:["⚠️ Failed to discover tools: ",x.error]}),o.jsx("p",{className:"hint",children:"You can still add the server, but you won't be able to select specific tools."})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"mcp-select-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>y({...x,enabledTools:new Set(x.availableTools.map(z=>z.name))}),children:["Select All (",x.availableTools.length,")"]}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>y({...x,enabledTools:new Set}),children:"Select None"})]}),o.jsx("div",{className:"mcp-tools-grid",children:x.availableTools.map(z=>o.jsxs("div",{className:"mcp-tool-row",title:z.description||z.name,style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:x.enabledTools.has(z.name),onChange:()=>$(z.name)}),o.jsx("span",{className:"toggle-slider"})]}),o.jsx("span",{style:{fontSize:13,opacity:x.enabledTools.has(z.name)?1:.5,cursor:"pointer"},onClick:()=>$(z.name),children:z.name})]},z.name))})]}),o.jsxs("div",{className:"dialog-actions",children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>y(null),children:"Cancel"}),o.jsxs("button",{className:"btn btn-primary",onClick:C,disabled:x.enabledTools.size===0,children:["Add ",x.enabledTools.size," Tools"]})]})]})})]})}function $4({agent:e,appModels:t,defaultModelId:n,projectId:r,onUpdate:i}){var f,h;const s=(f=e.model)==null?void 0:f._appModelId,a=e.model!==null&&e.model!==void 0&&!s,c=s||(()=>{if(!e.model)return n;const m=t.find(b=>{var _,g,x;return b.provider===((_=e.model)==null?void 0:_.provider)&&b.model_name===((g=e.model)==null?void 0:g.model_name)&&b.api_base===((x=e.model)==null?void 0:x.api_base)});return m==null?void 0:m.id})()||n||((h=t[0])==null?void 0:h.id);Wt.useEffect(()=>{var m,b,_,g,x;if(s){const y=t.find(j=>j.id===s);y&&(((m=e.model)==null?void 0:m.provider)!==y.provider||((b=e.model)==null?void 0:b.model_name)!==y.model_name||((_=e.model)==null?void 0:_.api_base)!==y.api_base||((g=e.model)==null?void 0:g.temperature)!==y.temperature||((x=e.model)==null?void 0:x.max_output_tokens)!==y.max_output_tokens)&&i({provider:y.provider,model_name:y.model_name,api_base:y.api_base,temperature:y.temperature,max_output_tokens:y.max_output_tokens,top_p:y.top_p,top_k:y.top_k,fallbacks:[],_appModelId:s})}},[s,t,e.model,i]);function u(m){const b=t.find(_=>_.id===m);b&&i({provider:b.provider,model_name:b.model_name,api_base:b.api_base,temperature:b.temperature,max_output_tokens:b.max_output_tokens,top_p:b.top_p,top_k:b.top_k,fallbacks:[],_appModelId:m})}function d(){var m;if(a){const b=n||((m=t[0])==null?void 0:m.id);b&&u(b)}else{const b=e.model;if(b){const{_appModelId:_,...g}=b;i(g)}else i({provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]})}}function p(m){const{_appModelId:b,..._}=e.model||{};i({..._,...m})}return t.find(m=>m.id===c),t.find(m=>m.id===n),o.jsxs("div",{className:"model-selector",children:[o.jsx("style",{children:`
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
      `}),t.length>0&&o.jsxs("div",{className:"model-choice",children:[o.jsxs("div",{className:`model-option ${a?"":"selected"}`,onClick:()=>!a||d(),children:[o.jsx("div",{className:"model-option-label",children:"Use App Model"}),o.jsx("div",{className:"model-option-desc",children:"Select from configured models"})]}),o.jsxs("div",{className:`model-option ${a?"selected":""}`,onClick:()=>a||d(),children:[o.jsx("div",{className:"model-option-label",children:"Custom"}),o.jsx("div",{className:"model-option-desc",children:"Configure model manually"})]})]}),!a&&t.length>0?o.jsx("div",{className:"app-model-select",children:t.map(m=>o.jsx("div",{className:`app-model-item ${c===m.id?"selected":""}`,onClick:()=>u(m.id),children:o.jsxs("div",{className:"app-model-item-info",children:[o.jsxs("div",{className:"app-model-item-name",children:[m.name,m.id===n&&o.jsxs("span",{className:"default-badge",children:[o.jsx(kv,{size:10,fill:"currentColor"}),"Default"]})]}),o.jsxs("div",{className:"app-model-item-details",children:[m.provider," / ",m.model_name,m.api_base&&` • ${m.api_base}`]})]})},m.id))}):t.length===0?o.jsx("div",{className:"no-models-message",children:"No models configured in App Config. Configure models there first, or use custom settings below."}):null,(a||t.length===0)&&o.jsx("div",{className:"custom-model-form",children:o.jsx(jv,{projectId:r,values:e.model||{},onChange:p})})]})}const vc=[{id:"builtin_exit_loop",name:"exit_on_EXIT_LOOP_NOW",description:'Exits LoopAgent when model says "EXIT LOOP NOW". Use as after_model_callback.',module_path:"exit_on_EXIT_LOOP_NOW",code:"",state_keys_used:[]}];function D4({agent:e,onUpdate:t,customCallbacks:n,isLlmAgent:r}){const i=[...vc,...n],s=[{key:"before_agent_callbacks",label:"Before Agent"},{key:"after_agent_callbacks",label:"After Agent"}],a=[{key:"before_model_callbacks",label:"Before Model"},{key:"after_model_callbacks",label:"After Model"},{key:"before_tool_callbacks",label:"Before Tool"},{key:"after_tool_callbacks",label:"After Tool"}],l=r?[...s,...a]:s;function c(d,p){const f=e[d]||[],h=i.find(m=>m.id===p);h&&t({[d]:[...f,{module_path:h.module_path}]})}function u(d,p){const f=e[d]||[];t({[d]:f.filter((h,m)=>m!==p)})}return o.jsx("div",{className:"callbacks-editor",children:l.map(({key:d,label:p})=>{const f=e[d]||[],h=i;return o.jsxs("div",{className:"callback-type-group",style:{marginBottom:"20px"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[o.jsx("label",{style:{fontWeight:500,fontSize:"13px"},children:p}),h.length>0&&o.jsxs("select",{value:"",onChange:m=>{m.target.value&&(c(d,m.target.value),m.target.value="")},style:{padding:"4px 8px",fontSize:"12px",width:"200px"},children:[o.jsx("option",{value:"",children:"Add callback..."}),o.jsx("optgroup",{label:"Built-in",children:vc.filter(m=>!f.some(b=>b.module_path===m.module_path)).map(m=>o.jsx("option",{value:m.id,children:m.name},m.id))}),o.jsx("optgroup",{label:"Custom",children:n.filter(m=>!f.some(b=>b.module_path===m.module_path)).map(m=>o.jsx("option",{value:m.id,children:m.name},m.id))})]})]}),f.length===0?o.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",fontStyle:"italic",padding:"8px"},children:"No callbacks"}):o.jsx("div",{className:"callback-list",children:f.map((m,b)=>{const _=i.find(x=>x.module_path===m.module_path),g=vc.some(x=>x.module_path===m.module_path);return o.jsxs("div",{className:"callback-chip",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 10px",background:g?"var(--accent-bg, #1a365d)":"var(--bg-secondary)",borderRadius:"4px",marginBottom:"4px"},title:(_==null?void 0:_.description)||"",children:[o.jsxs("span",{style:{fontSize:"12px",display:"flex",alignItems:"center",gap:"6px"},children:[g&&o.jsx("span",{style:{fontSize:"9px",padding:"1px 4px",background:"var(--accent-color, #3182ce)",borderRadius:"3px",textTransform:"uppercase",fontWeight:600},children:"built-in"}),(_==null?void 0:_.name)||m.module_path]}),o.jsx("button",{onClick:()=>u(d,b),style:{background:"none",border:"none",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},title:"Remove callback",children:o.jsx(Ue,{size:12})})]},b)})})]},d)})})}const bc=[{type:"LlmAgent",label:"LLM Agent",icon:Ar,color:"#00f5d4",description:"AI-powered agent with model reasoning"},{type:"SequentialAgent",label:"Sequential",icon:E_,color:"#7b2cbf",description:"Run sub-agents in order"},{type:"LoopAgent",label:"Loop",icon:S_,color:"#ffd93d",description:"Repeat sub-agents until exit"},{type:"ParallelAgent",label:"Parallel",icon:Nu,color:"#ff6b6b",description:"Run sub-agents simultaneously"}];function F4(){return`agent_${Date.now().toString(36)}`}function B4(e){return{provider:e.provider,model_name:e.model_name,api_base:e.api_base,temperature:e.temperature,max_output_tokens:e.max_output_tokens,top_p:e.top_p,top_k:e.top_k,fallbacks:[]}}function U4(e,t){const n=F4(),r={LlmAgent:"new_agent",SequentialAgent:"new_sequence",LoopAgent:"new_loop",ParallelAgent:"new_parallel"},i={id:n,name:r[e]||"new_agent",description:""},s=t?B4(t):{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]};switch(e){case"LlmAgent":return{...i,type:"LlmAgent",model:s,instruction:"",include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:[],sub_agents:[],output_key:r[e]||"new_agent",before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};case"SequentialAgent":return{...i,type:"SequentialAgent",sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[]};case"LoopAgent":return{...i,type:"LoopAgent",sub_agents:[],max_iterations:10,before_agent_callbacks:[],after_agent_callbacks:[]};case"ParallelAgent":return{...i,type:"ParallelAgent",sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[]};default:throw new Error(`Unknown agent type: ${e}`)}}function W4({onSelectAgent:e}){const{project:t,addAgent:n,removeAgent:r,updateAgent:i,selectedAgentId:s,setSelectedAgentId:a,mcpServers:l}=gt(),[c,u]=k.useState(new Set),[d,p]=k.useState(!1),[f,h]=k.useState(""),[m,b]=k.useState(new Map),[_,g]=k.useState(380),[x,y]=k.useState(!1),j=k.useRef(null),[T,S]=k.useState(null),L=k.useRef(null),[N,W]=k.useState(null),[E,O]=k.useState(null),F=k.useRef(null),K=k.useRef(null),A=k.useCallback(D=>{D.preventDefault(),y(!0)},[]);if(k.useEffect(()=>{const D=ne=>{if(!x)return;const te=Math.min(Math.max(200,ne.clientX),600);g(te)},Y=()=>{y(!1)};return x&&(document.addEventListener("mousemove",D),document.addEventListener("mouseup",Y),document.body.style.cursor="col-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",Y),document.body.style.cursor="",document.body.style.userSelect=""}},[x]),k.useEffect(()=>{if(t){const D=t.agents.filter(Y=>"sub_agents"in Y&&Y.sub_agents.length>0).map(Y=>Y.id);u(new Set(D))}},[t==null?void 0:t.id,t==null?void 0:t.agents.length]),!t)return null;const M=k.useMemo(()=>new Map(t.agents.map(D=>[D.id,D])),[t.agents]);function $(){if(!f.trim()||!t)return;const D=`generating_${Date.now()}`,Y=f;b(ne=>new Map(ne).set(D,Y)),p(!1),h(""),iv(t.id,Y).then(ne=>{var te,xe,q,re;if(ne.success&&ne.config){const ae=ne.config,be=[];if((te=ae.tools)!=null&&te.builtin)for(const je of ae.tools.builtin)be.push({type:"builtin",name:je});if((xe=ae.tools)!=null&&xe.mcp)for(const je of ae.tools.mcp){const Ae=l.find(nt=>nt.name===je.server);Ae&&be.push({type:"mcp",server:{...Ae,tool_filter:je.tools}})}if((q=ae.tools)!=null&&q.custom)for(const je of ae.tools.custom){const Ae=t.custom_tools.find(nt=>nt.name===je);Ae&&be.push({type:"function",name:je,module_path:Ae.module_path})}if((re=ae.tools)!=null&&re.agents)for(const je of ae.tools.agents){const Ae=t.agents.find(nt=>nt.id===je);Ae&&be.push({type:"agent",agent_id:je,name:Ae.name})}const ee=t.app.models||[],le=ee.find(je=>je.id===t.app.default_model_id)||ee[0],we=ae.name||"new_agent",_e={id:`agent_${Date.now().toString(36)}`,type:"LlmAgent",name:we,description:ae.description||"",instruction:ae.instruction||"",output_key:ae.output_key||we,model:le?{provider:le.provider,model_name:le.model_name,api_base:le.api_base,temperature:le.temperature,max_output_tokens:le.max_output_tokens,top_p:le.top_p,top_k:le.top_k,fallbacks:[]}:{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]},include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:be,sub_agents:ae.sub_agents||[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};n(_e),a(_e.id),e==null||e(_e.id)}else console.error("Failed to generate agent:",ne.error)}).catch(ne=>{console.error("Error generating agent:",ne)}).finally(()=>{b(ne=>{const te=new Map(ne);return te.delete(D),te})})}const C=t.agents.find(D=>D.id===s);function P(D){a(D),e==null||e(D)}function I(D){if(!t)return;const Y=t.app.models||[],ne=Y.find(xe=>xe.id===t.app.default_model_id)||Y[0],te=U4(D,ne);n(te),P(te.id)}function w(D,Y){Y.stopPropagation(),confirm("Delete this agent?")&&(r(D),s===D&&(e==null||e(null)))}function B(D){const Y=new Set(c);Y.has(D)?Y.delete(D):Y.add(D),u(Y)}function G(D){if(!F.current||!L.current)return;const Y=F.current.getBoundingClientRect(),ne=D.clientY-Y.top,te=60,xe=8;if(ne<te){const q=Math.max(1,xe*(1-ne/te));F.current.scrollTop-=q}else if(ne>Y.height-te){const q=Math.max(1,xe*(1-(Y.height-ne)/te));F.current.scrollTop+=q}}function v(D,Y){D.dataTransfer.setData("text/plain",Y),D.dataTransfer.effectAllowed="move",L.current=Y,requestAnimationFrame(()=>S(Y))}function z(){L.current=null,S(null),W(null),O(null),K.current&&(cancelAnimationFrame(K.current),K.current=null)}function V(D,Y,ne){if(!t)return;D.preventDefault(),D.stopPropagation();const te=L.current;if(!te)return;const xe=t.agents.find(q=>q.id===Y);!xe||!("sub_agents"in xe)||U(te,Y)||(D.dataTransfer.dropEffect="move",O({parentId:Y,index:ne}),W(null))}function ie(D,Y,ne){if(!t)return;D.preventDefault(),D.stopPropagation();const te=D.dataTransfer.getData("text/plain");if(!te)return;if(te===Y||U(te,Y)){O(null);return}const xe=t.agents.find(re=>re.id===Y);if(!xe||!("sub_agents"in xe))return;t.agents.forEach(re=>{"sub_agents"in re&&re.sub_agents.includes(te)&&i(re.id,{sub_agents:re.sub_agents.filter(ae=>ae!==te)})});const q=[...xe.sub_agents.filter(re=>re!==te)];q.splice(ne,0,te),i(Y,{sub_agents:q}),u(re=>new Set([...re,Y])),S(null),O(null)}function fe(D,Y,ne){if(!t)return;const te=L.current;D.preventDefault(),D.stopPropagation(),te!==Y&&(te&&U(te,Y)||(D.dataTransfer.dropEffect="move",W({agentId:Y,type:ne}),O(null)))}function ge(D){const Y=D.relatedTarget;(!Y||!D.currentTarget.contains(Y))&&W(null)}function Z(D,Y,ne){if(!t)return;D.preventDefault(),D.stopPropagation();const te=D.dataTransfer.getData("text/plain");if(!te||te===Y)return;if(ne==="sub_agent"&&U(te,Y)){S(null),W(null),O(null);return}const xe=t.agents.find(re=>re.id===Y),q=t.agents.find(re=>re.id===te);if(!(!xe||!q)){if(ne==="sub_agent")"sub_agents"in xe&&(t.agents.forEach(re=>{"sub_agents"in re&&re.sub_agents.includes(te)&&i(re.id,{sub_agents:re.sub_agents.filter(ae=>ae!==te)})}),xe.sub_agents.includes(te)||(i(Y,{sub_agents:[...xe.sub_agents,te]}),u(re=>new Set([...re,Y]))));else if(ne==="tool"&&"tools"in xe){const re=xe;re.tools.some(be=>be.type==="agent"&&be.agent_id===te)||i(Y,{tools:[...re.tools,{type:"agent",agent_id:te,name:q.name}]})}S(null),W(null)}}function U(D,Y){if(D===Y)return!0;const ne=[D],te=new Set;for(;ne.length;){const xe=ne.pop();if(te.has(xe))continue;te.add(xe);const q=M.get(xe);if(!(!q||!("sub_agents"in q)))for(const re of q.sub_agents){if(re===Y)return!0;ne.push(re)}}return!1}function R(D){const Y=bc.find(ne=>ne.type===D);return Y?Y.icon:Ar}function Q(D){const Y=bc.find(ne=>ne.type===D);return Y?Y.color:"#888"}function X(D,Y=0,ne=new Set){return D.map(te=>{const xe=R(te.type),q=Q(te.type),re="sub_agents"in te&&te.sub_agents.length>0,ae="sub_agents"in te,be=te.type==="LlmAgent",ee=c.has(te.id),le=T===te.id,we=(N==null?void 0:N.agentId)===te.id&&(N==null?void 0:N.type)==="sub_agent",_e=(N==null?void 0:N.agentId)===te.id&&(N==null?void 0:N.type)==="tool",je=ne.has(te.id),Ae=re&&ee&&!je,nt=Ae&&t?te.sub_agents.map(Ne=>t.agents.find(rt=>rt.id===Ne)).filter(Ne=>Ne!==void 0):[],ct=T&&T!==te.id&&(ae||be);return o.jsxs("div",{className:"agent-tree-item",children:[o.jsxs("div",{className:`agent-item ${s===te.id?"selected":""} ${le?"dragging":""} ${ct?"drop-target":""}`,onClick:()=>P(te.id),style:{paddingLeft:12+Y*20},draggable:!0,onDragStart:Ne=>v(Ne,te.id),onDragEnd:z,onDragOver:Ne=>{ct&&(Ne.preventDefault(),Ne.stopPropagation())},children:[o.jsx("div",{className:"drag-handle",children:o.jsx(y_,{size:12})}),re?o.jsx("button",{className:"expand-btn",onClick:Ne=>{Ne.stopPropagation(),B(te.id)},children:ee?o.jsx(Ct,{size:16}):o.jsx(vt,{size:16})}):o.jsx("span",{style:{width:20}}),o.jsx("div",{className:"agent-icon",style:{background:q},children:o.jsx(xe,{size:14})}),o.jsx("span",{className:"agent-name",children:te.name}),o.jsx("button",{className:"delete-btn",onClick:Ne=>w(te.id,Ne),children:o.jsx(Ue,{size:14})}),ct&&o.jsxs("div",{className:"drop-overlay",children:[ae&&o.jsxs("div",{className:`drop-zone-overlay ${we?"active":""}`,onDragOver:Ne=>fe(Ne,te.id,"sub_agent"),onDragLeave:ge,onDrop:Ne=>Z(Ne,te.id,"sub_agent"),children:[o.jsx(_v,{size:12}),o.jsx("span",{children:"Sub-agent"})]}),be&&o.jsxs("div",{className:`drop-zone-overlay ${_e?"active":""}`,onDragOver:Ne=>fe(Ne,te.id,"tool"),onDragLeave:ge,onDrop:Ne=>Z(Ne,te.id,"tool"),children:[o.jsx(pn,{size:12}),o.jsx("span",{children:"Tool"})]})]})]}),Ae&&o.jsxs("div",{className:"sub-agents",children:[T&&T!==te.id&&o.jsx("div",{className:`insert-indicator ${(E==null?void 0:E.parentId)===te.id&&(E==null?void 0:E.index)===0?"active":""}`,style:{marginLeft:12+(Y+1)*20},onDragOver:Ne=>V(Ne,te.id,0),onDragLeave:()=>O(null),onDrop:Ne=>ie(Ne,te.id,0)}),nt.map((Ne,rt)=>o.jsxs(Wt.Fragment,{children:[X([Ne],Y+1,new Set([...ne,te.id])),T&&T!==te.id&&T!==Ne.id&&o.jsx("div",{className:`insert-indicator ${(E==null?void 0:E.parentId)===te.id&&(E==null?void 0:E.index)===rt+1?"active":""}`,style:{marginLeft:12+(Y+1)*20},onDragOver:qe=>V(qe,te.id,rt+1),onDragLeave:()=>O(null),onDrop:qe=>ie(qe,te.id,rt+1)})]},Ne.id))]})]},te.id)})}const oe=new Set(t.agents.flatMap(D=>"sub_agents"in D?D.sub_agents:[])),ve=t.agents.filter(D=>!oe.has(D.id)),J=ve.length>0?ve:t.agents;return o.jsxs("div",{className:"agents-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("aside",{className:"agents-sidebar",style:{width:_},children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["Agents (",t.agents.length,")",m.size>0&&o.jsxs("span",{className:"generating-badge",children:[o.jsx(tr,{size:12,className:"spin"})," ",m.size]})]}),o.jsxs("div",{className:"header-buttons",children:[bc.map(({type:D,icon:Y,color:ne})=>o.jsx("button",{className:"quick-add-btn",style:{background:ne},onClick:()=>I(D),title:`Add ${D}`,children:o.jsx(Y,{size:14})},D)),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>p(!0),title:"AI-powered agent setup",children:o.jsx(ic,{size:14})})]})]}),o.jsx("div",{className:"agents-list",ref:F,onDragOver:G,children:t.agents.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Ar,{size:32}),o.jsx("p",{children:"No agents yet"})]}):X(J)})]}),o.jsx("div",{ref:j,className:`sidebar-resizer ${x?"resizing":""}`,onMouseDown:A}),o.jsx("div",{className:"agent-editor-area",children:C?o.jsx(I4,{agent:C}):o.jsxs("div",{className:"empty-state card",children:[o.jsx(Ar,{size:48}),o.jsxs("p",{children:["Select an agent to edit",o.jsx("br",{}),"or create a new one"]})]})}),d&&o.jsx("div",{className:"type-selector",onClick:()=>p(!1),children:o.jsxs("div",{className:"quick-setup-content",onClick:D=>D.stopPropagation(),children:[o.jsxs("h2",{children:[o.jsx(ic,{size:20})," Quick Agent Setup"]}),o.jsx("p",{className:"quick-setup-desc",children:"Describe what you want this agent to do. Runs in the background - you can start multiple!"}),o.jsxs("div",{className:"quick-setup-form",children:[o.jsx("textarea",{value:f,onChange:D=>h(D.target.value),placeholder:"Example: An agent that searches the web for information and summarizes the results. It should be able to search Google and handle multiple queries in parallel.",rows:5,autoFocus:!0,onKeyDown:D=>{D.key==="Enter"&&(D.metaKey||D.ctrlKey)&&f.trim()&&$()}}),o.jsxs("div",{className:"quick-setup-info",children:[o.jsx("strong",{children:"Available resources:"}),o.jsxs("ul",{children:[o.jsxs("li",{children:[t.app.state_keys.length," state keys"]}),o.jsxs("li",{children:[l.length," MCP servers"]}),o.jsxs("li",{children:[t.custom_tools.length," custom tools"]}),o.jsxs("li",{children:[t.agents.length," existing agents"]})]})]}),o.jsxs("div",{className:"quick-setup-actions",children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>p(!1),children:"Cancel"}),o.jsxs("button",{className:"btn btn-primary",onClick:$,disabled:!f.trim(),children:[o.jsx(ic,{size:14}),"Generate (⌘↵)"]})]})]})]})})]})}var bp="\x1B[0m",wp="\x1B[1m",g1=e=>e instanceof Error?e.message:typeof e=="string"?e:"An unknown error occurred",V4=e=>{let t=g1(e),n=`${wp}[MONACOPILOT ERROR] ${t}${bp}`;return console.error(n),{message:t}},H4=(e,t)=>{console.warn(`${wp}[MONACOPILOT WARN] ${e}${t?`
${g1(t)}`:""}${bp}`)},q4=(e,t,n)=>console.warn(`${wp}[MONACOPILOT DEPRECATED] "${e}" is deprecated${n?` in ${n}`:""}. Please use "${t}" instead. It will be removed in a future version.${bp}`),Ba={report:V4,warn:H4,warnDeprecated:q4},Pm=(e,t,n={})=>{if(t<=0)return"";let r=e.split(`
`),i=r.length;if(t>=i)return e;if(n.truncateDirection==="keepEnd"){let a=r.slice(-t);return a.every(l=>l==="")?`
`.repeat(t):a.join(`
`)}let s=r.slice(0,t);return s.every(a=>a==="")?`
`.repeat(t):s.join(`
`)},J4=100,K4=!0,x1="onIdle",G4=!0,Y4=120,Q4=400,X4=0,kp=(e,t)=>t.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:e.lineNumber,endColumn:e.column}),Z4=(e,t)=>t.getValueInRange({startLineNumber:e.lineNumber,startColumn:e.column,endLineNumber:t.getLineCount(),endColumn:t.getLineMaxColumn(t.getLineCount())}),eE=e=>e.getValue(),tE=class{constructor(e){this.capacity=e,this.head=0,this.tail=0,this.size=0,this.buffer=new Array(e)}enqueue(e){let t;return this.size===this.capacity&&(t=this.dequeue()),this.buffer[this.tail]=e,this.tail=(this.tail+1)%this.capacity,this.size++,t}dequeue(){if(this.size===0)return;let e=this.buffer[this.head];return this.buffer[this.head]=void 0,this.head=(this.head+1)%this.capacity,this.size--,e}getAll(){return this.buffer.filter(e=>e!==void 0)}clear(){this.buffer=new Array(this.capacity),this.head=0,this.tail=0,this.size=0}getSize(){return this.size}isEmpty(){return this.size===0}isFull(){return this.size===this.capacity}},y1=class v1{constructor(){this.cache=new tE(v1.MAX_CACHE_SIZE)}get(t,n){return this.cache.getAll().filter(r=>this.isValidCacheItem(r,t,n))}add(t){t.completion.trim()&&this.cache.enqueue(t)}clear(){this.cache.clear()}isValidCacheItem(t,n,r){let i=t.textBeforeCursor.trim(),s=kp(n,r),a=s,l=r.getLineContent(n.lineNumber);if(n.column===l.length+1&&n.lineNumber<r.getLineCount()){let u=r.getLineContent(n.lineNumber+1);a=`${s}
${u}`}if(!(a.trim().includes(i)||i.includes(a.trim())))return!1;let c=r.getValueInRange(t.range);return this.isPartialMatch(c,t.completion)?this.isPositionValid(t,n):!1}isPartialMatch(t,n){let r=t.trim(),i=n.trim();return i.startsWith(r)||r.startsWith(i)}isPositionValid(t,n){let{range:r}=t,{startLineNumber:i,startColumn:s,endLineNumber:a,endColumn:l}=r,{lineNumber:c,column:u}=n;return c<i||c>a?!1:i===a?u>=s-1&&u<=l+1:c===i?u>=s-1:c===a?u<=l+1:!0}};y1.MAX_CACHE_SIZE=20;var nE=y1,rE=class{constructor(e){this.formattedCompletion="",this.formattedCompletion=e}setCompletion(e){return this.formattedCompletion=e,this}removeInvalidLineBreaks(){return this.formattedCompletion=this.formattedCompletion.trimEnd(),this}removeMarkdownCodeSyntax(){return this.formattedCompletion=this.removeMarkdownCodeBlocks(this.formattedCompletion),this}removeMarkdownCodeBlocks(e){let t=e.split(`
`),n=[],r=!1;for(let i=0;i<t.length;i++){let s=t[i],a=s.trim().startsWith("```");if(a&&!r){r=!0;continue}if(a&&r){r=!1;continue}n.push(s)}return n.join(`
`)}removeExcessiveNewlines(){return this.formattedCompletion=this.formattedCompletion.replace(/\n{3,}/g,`

`),this}build(){return this.formattedCompletion}},iE=class{findOverlaps(e,t,n){if(!e)return{startOverlapLength:0,maxOverlapLength:0};let r=e.length,i=t.length,s=n.length,a=0,l=0,c=0,u=Math.min(r,i);for(let f=1;f<=u;f++){let h=e.substring(0,f),m=t.slice(-f);h===m&&(c=f)}let d=Math.min(r,s);for(let f=0;f<d&&e[f]===n[f];f++)a++;for(let f=1;f<=d;f++)e.slice(-f)===n.slice(0,f)&&(l=f);let p=Math.max(a,l);if(p===0){for(let f=1;f<r;f++)if(n.startsWith(e.substring(f))){p=r-f;break}}return{startOverlapLength:c,maxOverlapLength:p}}},oE=class{constructor(e){this.monaco=e,this.textOverlapCalculator=new iE}computeInsertionRange(e,t,n){if(!t)return this.createEmptyRange(e);let r=n.getOffsetAt(e),i=n.getValue().substring(0,r),s=n.getValue().substring(r);if(r>=n.getValue().length)return this.createEmptyRange(e);if(s.length===0)return this.createEmptyRange(e);let{startOverlapLength:a,maxOverlapLength:l}=this.textOverlapCalculator.findOverlaps(t,i,s),c=a>0?n.getPositionAt(r-a):e,u=r+l,d=n.getPositionAt(u);return new this.monaco.Range(c.lineNumber,c.column,d.lineNumber,d.column)}computeCacheRange(e,t){let n=e.lineNumber,r=e.column,i=t.split(`
`),s=i.length-1,a=n+s,l=s===0?r+i[0].length:i[s].length+1;return new this.monaco.Range(n,r,a,l)}createEmptyRange(e){return new this.monaco.Range(e.lineNumber,e.column,e.lineNumber,e.column)}},sE=async e=>{let{endpoint:t,body:n}=e,r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok)throw new Error(`Error while fetching completion item: ${r.statusText}`);let{completion:i,error:s}=await r.json();return{completion:i,error:s}},aE=({pos:e,mdl:t,options:n})=>{let{filename:r,language:i,technologies:s,relatedFiles:a,maxContextLines:l=J4}=n,c=a&&a.length>0?3:2,u=l?Math.floor(l/c):void 0,d=(b,_,g)=>{let x=b(e,t);return _?Pm(x,_,g):x},p=(b,_)=>!b||!_?b:b.map(({content:g,...x})=>({...x,content:Pm(g,_)})),f=d(kp,u,{truncateDirection:"keepEnd"}),h=d(Z4,u,{truncateDirection:"keepStart"}),m=p(a,u);return{filename:r,language:i,technologies:s,relatedFiles:m,textBeforeCursor:f,textAfterCursor:h,cursorPosition:e}},lE=(e,t=300)=>{let n=null,r=null,i=(...s)=>{if(r)return r.args=s,r.promise;let a,l,c=new Promise((u,d)=>{a=u,l=d});return r={args:s,promise:c,resolve:a,reject:l},n&&(clearTimeout(n),n=null),n=setTimeout(async()=>{let u=r;if(u){r=null,n=null;try{let d=await e(...u.args);u.resolve(d)}catch(d){u.reject(d)}}},t),c};return i.cancel=()=>{n&&(clearTimeout(n),n=null),r&&(r.reject(new Error("Cancelled")),r=null)},i},cE=e=>typeof e=="string"?e==="Cancelled"||e==="AbortError":e instanceof Error?e.message==="Cancelled"||e.name==="AbortError":!1,Zi=e=>({items:e,enableForwardStability:!0}),Bu=new nE,uE=async({monaco:e,mdl:t,pos:n,token:r,isCompletionAccepted:i,options:s})=>{let{trigger:a=x1,enableCaching:l=K4,allowFollowUpCompletions:c=G4,onError:u,requestHandler:d}=s;if(l&&!i){let p=Bu.get(n,t).map(f=>({insertText:f.completion,range:f.range}));if(p.length>0)return Zi(p)}if(r.isCancellationRequested||!c&&i)return Zi([]);try{let p=lE(async m=>{var _,g;(_=s.onCompletionRequested)==null||_.call(s,m);let b;if(d)b=await d(m);else if(s.endpoint)b=await sE({endpoint:s.endpoint,...m});else throw new Error('No endpoint specified for completion request. Please set the "endpoint" option in registerCompletion, or provide a custom requestHandler.');if(b.error)throw new Error(b.error);return(g=s.onCompletionRequestFinished)==null||g.call(s,m,b),b},{onTyping:Y4,onIdle:Q4,onDemand:X4}[a]);r.onCancellationRequested(()=>{p.cancel()});let f=aE({pos:n,mdl:t,options:s}),{completion:h}=await p({body:{completionMetadata:f}});if(h){let m=new rE(h).removeMarkdownCodeSyntax().removeExcessiveNewlines().removeInvalidLineBreaks().build(),b=new oE(e);return l&&Bu.add({completion:m,range:b.computeCacheRange(n,m),textBeforeCursor:kp(n,t)}),Zi([{insertText:m,range:b.computeInsertionRange(n,m,t)}])}}catch(p){if(cE(p))return Zi([]);u?u(p):Ba.warn("Cannot provide completion",p)}return Zi([])},_p=new WeakMap,bl=e=>_p.get(e),dE=(e,t)=>{_p.set(e,t)},Lm=e=>{_p.delete(e)},pE=e=>({isCompletionAccepted:!1,isCompletionVisible:!1,isExplicitlyTriggered:!1,hasRejectedCurrentCompletion:!1,options:e}),fE=(e,t)=>{let n=bl(e);!n||!n.options||(n.options={...n.options,...t})},hE=(e,t,n)=>{let r=bl(t);return r?e.languages.registerInlineCompletionsProvider(n.language,{provideInlineCompletions:(i,s,a,l)=>{if(i!==t.getModel())return{items:[]};let c=r.options||n;if(!(c.trigger==="onDemand"&&!r.isExplicitlyTriggered||c.triggerIf&&!c.triggerIf({text:eE(t),position:s,triggerType:c.trigger??x1})))return uE({monaco:e,mdl:i,pos:s,token:l,isCompletionAccepted:r.isCompletionAccepted,options:c})},handleItemDidShow:(i,s,a)=>{var l,c;r.isExplicitlyTriggered=!1,r.hasRejectedCurrentCompletion=!1,!r.isCompletionAccepted&&(r.isCompletionVisible=!0,(c=(l=r.options||n).onCompletionShown)==null||c.call(l,a,s.range))},freeInlineCompletions:()=>{}}):null},mE={TAB:(e,t)=>t.keyCode===e.KeyCode.Tab,CMD_RIGHT_ARROW:(e,t)=>t.keyCode===e.KeyCode.RightArrow&&t.metaKey},gE=class{constructor(e,t,n){this.monaco=e,this.state=t,this.initialOptions=n}handleKeyEvent(e){let t=this.state.options||this.initialOptions,n={monaco:this.monaco,event:e,state:this.state,options:t};this.handleCompletionAcceptance(n),this.handleCompletionRejection(n)}handleCompletionAcceptance(e){var t,n;return e.state.isCompletionVisible&&this.isAcceptanceKey(e.event)?((n=(t=e.options).onCompletionAccepted)==null||n.call(t),e.state.isCompletionAccepted=!0,e.state.isCompletionVisible=!1,!0):(e.state.isCompletionAccepted=!1,!1)}handleCompletionRejection(e){var t,n;return this.shouldRejectCompletion(e)?((n=(t=e.options).onCompletionRejected)==null||n.call(t),e.state.hasRejectedCurrentCompletion=!0,!0):!1}shouldRejectCompletion(e){return e.state.isCompletionVisible&&!e.state.hasRejectedCurrentCompletion&&!e.state.isCompletionAccepted&&!this.isAcceptanceKey(e.event)}isAcceptanceKey(e){return Object.values(mE).some(t=>t(this.monaco,e))}},xE=(e,t,n,r)=>{let i=new gE(e,n,r);return t.onKeyDown(s=>i.handleKeyEvent(s))},b1=(e,t,n)=>{let r=[];dE(t,pE(n)),t.updateOptions({inlineSuggest:{enabled:!0}});try{let i=bl(t);if(!i)return Ba.warn("Completion is not registered properly. State not found."),vE();let s=hE(e,t,n);s&&r.push(s);let a=xE(e,t,i,n);return r.push(a),{deregister:()=>{for(let l of r)l.dispose();Bu.clear(),Lm(t)},trigger:()=>yE(t),updateOptions:l=>{fE(t,l(i.options||n))}}}catch(i){return n.onError?n.onError(i):Ba.report(i),{deregister:()=>{for(let s of r)s.dispose();Lm(t)},trigger:()=>{},updateOptions:()=>{}}}},yE=e=>{let t=bl(e);if(!t){Ba.warn("Completion is not registered. Use `registerCompletion` to register completion first.");return}t.isExplicitlyTriggered=!0,e.trigger("keyboard","editor.action.inlineSuggest.trigger",{})},vE=()=>({deregister:()=>{},trigger:()=>{},updateOptions:()=>{}});function bE(){return`tool_${Date.now().toString(36)}`}function wE(e){return/^[a-zA-Z0-9_]+$/.test(e)}const kE=`def my_tool(tool_context: ToolContext, param1: str) -> dict:
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
`;function _E({onSelectTool:e}){const{project:t,updateProject:n,addCustomTool:r,updateCustomTool:i,removeCustomTool:s,selectedToolId:a,setSelectedToolId:l,builtinTools:c,mcpServers:u}=gt(),[d,p]=k.useState(""),[f,h]=k.useState(null),[m,b]=k.useState("tools"),[_,g]=k.useState(null),[x,y]=k.useState(""),[j,T]=k.useState(!1),[S,L]=k.useState(!1),[N,W]=k.useState(!1),[E,O]=k.useState(null),[F,K]=k.useState(null),[A,M]=k.useState({}),[$,C]=k.useState({}),[P,I]=k.useState("");if(!t)return null;const w=t.mcp_servers||[],B=t.custom_tools.find(q=>q.id===a),G=w.find(q=>q.name===_);function v(q){l(q),e==null||e(q)}k.useEffect(()=>{B&&(p(B.code),K(null))},[a]),k.useEffect(()=>{G&&(y(JSON.stringify(G,null,2)),T(!1))},[_]),k.useEffect(()=>{if(!t)return;const q=z(t.mcp_servers||[]);I(JSON.stringify(q,null,2))},[t==null?void 0:t.mcp_servers]),k.useEffect(()=>{if(m==="mcp"&&w.length>0){const q=w.filter(re=>!A[re.name]||A[re.name]==="unknown");q.length>0&&q.forEach(re=>{ge(re.name)})}},[m,w.length]);function z(q){const re={};for(const ae of q){const be={};ae.connection_type==="stdio"?(be.command=ae.command||"",be.args=ae.args||[],Object.keys(ae.env||{}).length>0&&(be.env=ae.env)):ae.connection_type==="sse"&&(be.url=ae.url||"",Object.keys(ae.headers||{}).length>0&&(be.headers=ae.headers)),ae.timeout&&ae.timeout!==30&&(be.timeout=ae.timeout),ae.tool_filter&&(be.tool_filter=ae.tool_filter),ae.tool_name_prefix&&(be.tool_name_prefix=ae.tool_name_prefix),re[ae.name]=be}return{mcpServers:re}}function V(q){const re=[];for(const[ae,be]of Object.entries(q.mcpServers||{})){const ee={name:ae,description:be.description||"",connection_type:be.url?"sse":"stdio",command:be.command,args:be.args||[],env:be.env||{},url:be.url,headers:be.headers||{},timeout:be.timeout||30,tool_filter:be.tool_filter||null,tool_name_prefix:be.tool_name_prefix};re.push(ee)}return re}function ie(q){q!==void 0&&I(q)}function fe(){try{const q=JSON.parse(P),re=V(q);n({mcp_servers:re})}catch(q){alert("Invalid JSON: "+q.message)}}async function ge(q){const re=w.find(ae=>ae.name===q);if(re){M(ae=>({...ae,[q]:"testing"})),C(ae=>({...ae,[q]:""}));try{const ae=await Cu({connection_type:re.connection_type,command:re.command,args:re.args,env:re.env,url:re.url,headers:re.headers,timeout:re.timeout});M(be=>({...be,[q]:ae.success?"connected":"error"})),!ae.success&&ae.error&&C(be=>({...be,[q]:ae.error||"Unknown error"}))}catch(ae){M(be=>({...be,[q]:"error"})),C(be=>({...be,[q]:ae.message}))}}}function Z(q){const re=u.find(be=>be.name===q);if(!re)return;if(w.some(be=>be.name===q)){alert(`Server "${q}" is already configured`);return}const ae={name:re.name,description:re.description||"",connection_type:re.connection_type,command:re.command,args:re.args||[],env:re.env||{},url:re.url,headers:re.headers||{},timeout:re.timeout||30,tool_filter:re.tool_filter||null,tool_name_prefix:re.tool_name_prefix};n({mcp_servers:[...w,ae]})}async function U(){for(const q of w)await ge(q.name)}function R(){const q=bE();r({id:q,name:"new_tool",description:"",module_path:"tools.custom",code:kE,state_keys_used:[]}),v(q)}function Q(q,re){re.stopPropagation(),confirm("Delete this tool?")&&(s(q),a===q&&(e==null||e(null)))}function X(q){B&&(q.name!==void 0&&(q.name===""||wE(q.name)?K(null):K("Name can only contain letters, numbers, and underscores")),i(B.id,q))}function oe(q){q!==void 0&&B&&(p(q),X({code:q}))}async function ve(){if(B){L(!0);try{const q=await ov(t.id,B.name,B.description,B.state_keys_used);q.success&&q.code?(p(q.code),X({code:q.code})):(console.error("Failed to generate tool code:",q.error),alert("Failed to generate tool code: "+(q.error||"Unknown error")))}catch(q){console.error("Error generating tool code:",q),alert("Error generating tool code: "+q.message)}finally{L(!1)}}}const J=k.useRef(null),D=k.useCallback((q,re)=>{if(J.current&&typeof J.current=="function")try{J.current()}catch{}try{const ae=b1(re,q,{language:"python",endpoint:"/api/code-completion",trigger:"onTyping"});typeof ae=="function"?J.current=ae:J.current=null}catch{J.current=null}},[]);k.useEffect(()=>()=>{if(J.current&&typeof J.current=="function")try{J.current()}catch{}},[]);function Y(q){q!==void 0&&(y(q),T(q!==JSON.stringify(G,null,2)))}function ne(){if(G)try{const q=JSON.parse(x),re=G.name,ae=w.map(be=>be.name===re?q:be);n({mcp_servers:ae}),g(q.name),T(!1)}catch(q){alert("Invalid JSON: "+q.message)}}async function te(){W(!0),O(null);try{const q=JSON.parse(x),re=await Cu({connection_type:q.connection_type,command:q.command,args:q.args,env:q.env,url:q.url,headers:q.headers,timeout:q.timeout||30});if(O(re),re.success&&re.tools.length>0){const ae={...q,tool_filter:re.tools.map(be=>be.name)};y(JSON.stringify(ae,null,2)),T(!0)}}catch(q){O({success:!1,tools:[],error:q.message})}finally{W(!1)}}const xe={};return t.custom_tools.forEach(q=>{const re=q.module_path||"tools";xe[re]||(xe[re]=[]),xe[re].push(q)}),o.jsxs("div",{className:"tools-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("aside",{className:"tools-sidebar",children:[o.jsxs("div",{className:"sidebar-tabs",children:[o.jsxs("button",{className:`sidebar-tab ${m==="tools"?"active":""}`,onClick:()=>{b("tools"),g(null)},children:[o.jsx(pn,{size:14}),"Tools"]}),o.jsxs("button",{className:`sidebar-tab ${m==="mcp"?"active":""}`,onClick:()=>{b("mcp"),l(null),h(null),g(null)},children:[o.jsx(Gi,{size:14}),"MCP"]})]}),m==="tools"?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["Custom Tools (",t.custom_tools.length,")"]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:R,children:[o.jsx(Qe,{size:14}),"New"]})]}),o.jsxs("div",{className:"tools-tree",children:[c.length>0&&o.jsxs("div",{className:"module-group",children:[o.jsxs("div",{className:"module-header",children:[o.jsx(k_,{size:14}),"Built-in Tools"]}),c.map(q=>o.jsxs("div",{className:`tool-item builtin ${(f==null?void 0:f.name)===q.name?"selected":""}`,onClick:()=>{h(q),v(null),g(null)},children:[o.jsx(Eu,{size:14}),o.jsx("span",{className:"tool-name",children:q.name})]},q.name))]}),t.custom_tools.length===0&&c.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(jn,{size:32}),o.jsx("p",{children:"No tools defined yet"})]}):t.custom_tools.length>0&&Object.entries(xe).map(([q,re])=>o.jsxs("div",{className:"module-group",children:[o.jsxs("div",{className:"module-header",children:[o.jsx(mv,{size:14}),q]}),re.map(ae=>o.jsxs("div",{className:`tool-item ${a===ae.id?"selected":""}`,onClick:()=>{v(ae.id),h(null),g(null)},children:[o.jsx(pn,{size:14}),o.jsx("span",{className:"tool-name",children:ae.name}),o.jsx("button",{className:"delete-btn",onClick:be=>Q(ae.id,be),children:o.jsx(Ue,{size:14})})]},ae.id))]},q))]})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["MCP Servers (",w.length,")"]}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:U,title:"Test all server connections",children:o.jsx(Zt,{size:14})})]}),o.jsx("div",{className:"mcp-servers-list",children:w.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Gi,{size:32}),o.jsx("p",{children:"No MCP servers configured"}),o.jsx("p",{style:{fontSize:"12px",color:"var(--text-muted)"},children:"Edit the JSON to add servers"})]}):w.map(q=>{const re=A[q.name]||"unknown",ae=$[q.name];return o.jsxs("div",{className:"mcp-server-item-wrapper",children:[o.jsxs("div",{className:"mcp-server-item",children:[o.jsxs("div",{className:"mcp-server-info",children:[o.jsx(Gi,{size:14}),o.jsx("span",{className:"mcp-server-name",children:q.name}),o.jsxs("span",{className:`mcp-status-badge ${re}`,children:[re==="testing"?o.jsx(tr,{size:10,className:"spin"}):null,re==="unknown"&&"●",re==="connected"&&"●",re==="error"&&"●"]})]}),o.jsxs("div",{className:"mcp-server-actions",children:[o.jsx("span",{className:"mcp-server-type",children:q.connection_type}),o.jsxs("button",{className:"btn btn-sm",onClick:()=>ge(q.name),disabled:re==="testing",title:"Test server connection",style:{display:"flex",alignItems:"center",gap:4},children:[re==="testing"?o.jsx(tr,{size:12,className:"spin"}):o.jsx(Zt,{size:12}),o.jsx("span",{style:{fontSize:11},children:"Test"})]})]})]}),re==="error"&&ae&&o.jsxs("div",{className:"mcp-server-error",children:[o.jsx("span",{style:{fontWeight:500,color:"var(--error)"},children:"Error:"})," ",ae]})]},q.name)})})]})]}),o.jsx("div",{className:"tool-editor",children:f?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(Eu,{size:20,style:{color:"var(--accent-secondary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:f.name}),o.jsx("span",{className:"badge badge-muted",children:"Built-in"})]}),o.jsxs("div",{className:"builtin-tool-info",children:[o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("p",{children:f.description||"No description available."})]}),o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Usage"}),o.jsx("p",{children:"This is a built-in tool provided by ADK. Add it to any LLM agent's tools list to enable it."}),o.jsxs("code",{children:['tools: ["',f.name,'"]']})]}),o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Note"}),o.jsx("p",{children:"Built-in tools are read-only and cannot be modified. Create a custom tool if you need different behavior."})]})]})]}):B?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(pn,{size:20,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o.jsx("input",{type:"text",value:B.name,onChange:q=>X({name:q.target.value}),placeholder:"Tool name",style:{borderColor:F?"var(--error)":void 0}}),F&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:F})]})]}),o.jsxs("div",{className:"editor-meta",children:[o.jsxs("div",{className:"meta-field grow",children:[o.jsx("label",{children:"Description"}),o.jsx("input",{type:"text",value:B.description,onChange:q=>X({description:q.target.value}),placeholder:"What does this tool do?"})]}),o.jsxs("div",{className:"meta-field",children:[o.jsx("label",{children:"Module Path"}),o.jsx("input",{type:"text",value:B.module_path,onChange:q=>X({module_path:q.target.value}),placeholder:"tools.custom",style:{width:180}})]})]}),o.jsxs("div",{className:"code-actions",children:[o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:ve,disabled:S||!B.name||!B.description,title:!B.name||!B.description?"Add a name and description first":"Generate code using AI",children:S?o.jsxs(o.Fragment,{children:[o.jsx(tr,{size:14,className:"spinning"}),"Generating..."]}):o.jsxs(o.Fragment,{children:[o.jsx(np,{size:14}),"Write Tool"]})}),o.jsx("span",{className:"action-hint",children:"AI will generate code based on the tool name, description, and selected state keys"})]}),o.jsx("div",{className:"code-editor",children:o.jsx(en,{height:"100%",language:"python",theme:"vs-dark",value:d,onChange:oe,onMount:D,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12}}})}),o.jsxs("div",{className:"state-keys-panel",children:[o.jsxs("h4",{children:[o.jsx(ep,{size:14})," State Keys Used"]}),o.jsx("div",{className:"state-key-chips",children:t.app.state_keys.length===0?o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"No state keys defined. Add them in App Config."}):t.app.state_keys.map(q=>{const re=B.state_keys_used.includes(q.name);return o.jsxs("label",{className:`state-key-chip ${re?"selected":""}`,title:q.description,children:[o.jsx("input",{type:"checkbox",checked:re,onChange:ae=>{const be=ae.target.checked?[...B.state_keys_used,q.name]:B.state_keys_used.filter(ee=>ee!==q.name);X({state_keys_used:be})}}),q.name,o.jsxs("span",{style:{color:"var(--text-muted)",fontSize:11},children:["(",q.type,")"]})]},q.name)})})]})]}):G?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(Gi,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:G.name}),o.jsx("span",{className:"badge badge-info",children:G.connection_type}),j&&o.jsx("span",{className:"unsaved-badge",children:"Unsaved"}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:te,disabled:N,title:"Test connection and discover available tools",children:[N?o.jsx(tr,{size:14,className:"spin"}):o.jsx(Zd,{size:14}),N?"Testing...":"Test Connection"]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:ne,disabled:!j,children:[o.jsx(Oa,{size:14}),"Save"]})]}),E&&o.jsx("div",{className:`mcp-test-result ${E.success?"success":"error"}`,children:E.success?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"test-result-header",children:["✓ Connected! Found ",E.tools.length," tools"]}),E.tools.length>0&&o.jsxs("div",{className:"test-result-tools",children:[o.jsx("strong",{children:"Available tools:"}),o.jsx("ul",{children:E.tools.map(q=>o.jsxs("li",{children:[o.jsx("code",{children:q.name}),q.description&&o.jsxs("span",{children:[" — ",q.description]})]},q.name))}),o.jsx("p",{className:"hint",children:'The tool_filter has been updated with these tools. Click "Save" to apply.'})]})]}):o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"test-result-header",children:"✗ Connection failed"}),o.jsx("div",{className:"test-result-error",children:E.error})]})}),o.jsx("div",{className:"mcp-info",children:o.jsx("p",{children:'Configure your MCP server using JSON. Click "Test Connection" to verify and discover available tools.'})}),o.jsx("div",{className:"code-editor",children:o.jsx(en,{height:"100%",language:"json",theme:"vs-dark",value:x,onChange:Y,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},formatOnPaste:!0}})}),o.jsxs("div",{className:"mcp-help",children:[o.jsx("h4",{children:"Schema Reference"}),o.jsxs("div",{className:"schema-fields",children:[o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"name"}),o.jsx("span",{children:"Unique identifier for this server"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"description"}),o.jsx("span",{children:"Human-readable description"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"connection_type"}),o.jsx("span",{children:'"stdio" | "sse" | "http"'})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"command"}),o.jsx("span",{children:"Command to run (for stdio)"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"args"}),o.jsx("span",{children:"Array of command arguments"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"env"}),o.jsx("span",{children:"Environment variables object"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"url"}),o.jsx("span",{children:"Server URL (for sse/http)"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"tool_filter"}),o.jsx("span",{children:"Array of tool names to include (null/omit = all tools, [] = no tools)"})]})]})]})]}):m==="mcp"?o.jsxs("div",{className:"mcp-json-editor",children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(Gi,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:"mcp.json"}),o.jsx("span",{className:"badge badge-muted",children:"Model Context Protocol"}),o.jsxs("select",{value:"",onChange:q=>{q.target.value&&Z(q.target.value)},style:{padding:"6px 10px",fontSize:"12px",borderRadius:"6px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",color:"var(--text-primary)"},children:[o.jsx("option",{value:"",children:"+ Add known server..."}),u.filter(q=>!w.some(re=>re.name===q.name)).map(q=>o.jsxs("option",{value:q.name,children:[q.name," - ",q.description||"No description"]},q.name))]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:fe,children:[o.jsx(Oa,{size:14}),"Apply Changes"]})]}),o.jsx("div",{className:"mcp-json-info",children:o.jsxs("p",{children:["Configure your MCP servers using the standard ",o.jsx("code",{children:"mcp.json"})," format. Select a known server from the dropdown to add its configuration."]})}),o.jsx("div",{className:"editor-content",style:{flex:1},children:o.jsx(en,{height:"100%",defaultLanguage:"json",value:P,onChange:ie,theme:"vs-dark",options:{minimap:{enabled:!1},fontSize:14,lineNumbers:"on",scrollBeyondLastLine:!1,wordWrap:"on",tabSize:2,formatOnPaste:!0,formatOnType:!0}})})]}):o.jsxs("div",{className:"empty-state",children:[o.jsx(jn,{size:48}),o.jsxs("p",{children:["Select a tool to view",o.jsx("br",{}),"or create a new custom tool"]})]})})]})}function jE(){return`callback_${Date.now().toString(36)}`}function Rm(e){return/^[a-zA-Z0-9_]+$/.test(e)}function w1(e){switch(e){case"before_agent":case"after_agent":return`from google.adk.agents.callback_context import CallbackContext
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
`;default:return w1("before_agent")}}function SE({onSelectCallback:e}){var N,W;const{project:t,updateProject:n,addCustomCallback:r,updateCustomCallback:i,removeCustomCallback:s}=gt(),[a,l]=k.useState(""),[c,u]=k.useState(null),[d,p]=k.useState(null),[f,h]=k.useState(!1),m=k.useRef(null);if(!t)return null;const b=t.custom_callbacks||[],_=b.find(E=>E.id===c);function g(E){u(E),e==null||e(E)}k.useEffect(()=>{_?(l(_.code),p(null)):l("")},[c,_]);function x(){const E=jE(),O="new_callback",F={id:E,name:O,description:"",module_path:`callbacks.${O}`,code:w1("before_agent"),state_keys_used:[]};r(F),g(E)}function y(E,O){O.stopPropagation(),confirm("Delete this callback?")&&(s(E),c===E&&(e==null||e(null),u(null),l("")))}function j(){if(!c)return;const E=b.find(K=>K.id===c);if(!E)return;const O=E.name.trim();if(!O){alert("Please enter a name");return}if(!Rm(O)){p("Name must contain only alphanumeric characters and underscores");return}if(b.find(K=>K.name===O&&K.id!==E.id)){p("A callback with this name already exists");return}i(E.id,{code:a,name:O,description:E.description,module_path:`callbacks.${O}`,state_keys_used:E.state_keys_used}),p(null)}function T(E,O){m.current=O;try{b1(O,{endpoint:"/api/code-completion",language:"python"})}catch(F){console.warn("Failed to register Monacopilot completion:",F)}}async function S(){if(_){h(!0);try{let E="before_agent";const O=_.name.toLowerCase(),F=_.description.toLowerCase();O.includes("after_agent")||F.includes("after agent")?E="after_agent":O.includes("before_model")||F.includes("before model")?E="before_model":O.includes("after_model")||F.includes("after model")?E="after_model":O.includes("before_tool")||F.includes("before tool")?E="before_tool":O.includes("after_tool")||F.includes("after tool")?E="after_tool":(O.includes("before_agent")||F.includes("before agent"))&&(E="before_agent");const K=await sv(t.id,_.name,_.description,E,_.state_keys_used);K.success&&K.code?(l(K.code),i(_.id,{code:K.code})):(console.error("Failed to generate callback code:",K.error),alert("Failed to generate callback code: "+(K.error||"Unknown error")))}catch(E){console.error("Error generating callback code:",E),alert("Error generating callback code: "+E.message)}finally{h(!1)}}}const L=((W=(N=t.app)==null?void 0:N.state_keys)==null?void 0:W.map(E=>E.name))||[];return o.jsxs("div",{className:"tools-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"tools-sidebar",children:[o.jsxs("div",{className:"tools-sidebar-header",children:[o.jsx("h3",{children:"Callbacks"}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:x,title:"Add Callback",children:o.jsx(Qe,{size:16})})]}),o.jsx("div",{className:"tools-list",children:b.length===0?o.jsx("div",{style:{padding:"16px",color:"var(--text-secondary)",fontSize:"14px"},children:"No callbacks yet. Click + to add one."}):b.map(E=>o.jsxs("div",{className:`tool-item ${c===E.id?"selected":""}`,onClick:()=>g(E.id),children:[o.jsxs("div",{style:{flex:1},children:[o.jsx("div",{className:"tool-item-name",children:E.name}),E.description&&o.jsx("div",{className:"tool-item-type",style:{fontSize:"11px",color:"var(--text-secondary)",marginTop:"2px"},children:E.description})]}),o.jsx("div",{className:"tool-item-actions",children:o.jsx("button",{className:"btn btn-icon btn-sm",onClick:O=>y(E.id,O),title:"Delete",children:o.jsx(Ue,{size:14})})})]},E.id))})]}),o.jsx("div",{className:"tools-editor",children:_?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"tools-editor-header",children:[o.jsx("h3",{children:"Edit Callback"}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:j,children:[o.jsx(Oa,{size:16,style:{marginRight:"6px"}}),"Save"]})]}),o.jsxs("div",{className:"tools-editor-content",style:{padding:"16px",overflowY:"auto"},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Name"}),o.jsx("input",{type:"text",value:_.name,onChange:E=>{const O=E.target.value;i(_.id,{name:O,module_path:`callbacks.${O.trim()||"callback"}`}),d&&Rm(O)&&p(null)},className:d?"error":""}),d&&o.jsx("div",{className:"error-message",children:d})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Description"}),o.jsx("textarea",{value:_.description,onChange:E=>i(_.id,{description:E.target.value}),rows:2,placeholder:"Describe what this callback does..."})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Module Path"}),o.jsx("input",{type:"text",value:_.module_path,onChange:E=>i(_.id,{module_path:E.target.value}),placeholder:"callbacks.custom"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"State Keys Used"}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"8px"},children:L.map(E=>{const O=_.state_keys_used.includes(E);return o.jsxs("button",{type:"button",className:`btn btn-sm ${O?"btn-primary":"btn-secondary"}`,onClick:()=>{const F=O?_.state_keys_used.filter(K=>K!==E):[..._.state_keys_used,E];i(_.id,{state_keys_used:F})},children:[o.jsx(ep,{size:12,style:{marginRight:"4px"}}),E]},E)})}),L.length===0&&o.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"12px",marginTop:"4px"},children:"No state keys defined in App Config"})]}),o.jsxs("div",{className:"form-group",children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[o.jsx("label",{children:"Code"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:S,disabled:f||!_.name,title:_.name?"Generate code using AI":"Add a name first",children:f?o.jsxs(o.Fragment,{children:[o.jsx(tr,{size:14,className:"spinning"}),"Generating..."]}):o.jsxs(o.Fragment,{children:[o.jsx(np,{size:14}),"Generate"]})})]}),o.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"8px"},children:"AI will generate code based on the callback name, description, and selected state keys"}),o.jsx("div",{className:"code-editor-container",children:o.jsx(en,{height:"100%",language:"python",theme:"vs-dark",value:a,onChange:E=>l(E||""),onMount:T,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0}})})]})]})]}):o.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)"},children:"Select a callback to edit, or create a new one"})})]})}function CE(e){try{const t=new URL(e),n=t.host,r=t.pathname,i=[{pattern:n,label:`${n} (exact domain)`},{pattern:`${n}/*`,label:`${n}/* (domain + any path)`}],s=n.split(".");if(s.length>2){const a=s.slice(-2).join(".");i.push({pattern:`*.${a}`,label:`*.${a} (all subdomains)`})}if(r&&r!=="/"){const a=r.split("/").filter(Boolean);a.length>0&&i.push({pattern:`${n}/${a[0]}/*`,label:`${n}/${a[0]}/* (specific path)`})}return i}catch{return[{pattern:e,label:e}]}}const Re={overlay:{position:"fixed",inset:0,backgroundColor:"rgba(0, 0, 0, 0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999},dialog:{backgroundColor:"#12121a",border:"1px solid rgba(245, 158, 11, 0.5)",borderRadius:8,boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.5)",width:500,maxWidth:"90vw",overflow:"hidden"},header:{display:"flex",alignItems:"center",gap:8,padding:12,borderBottom:"1px solid #374151",backgroundColor:"rgba(120, 53, 15, 0.2)"},headerIcon:{color:"#fbbf24"},headerTitle:{fontWeight:600,color:"#fcd34d",fontSize:14},closeButton:{marginLeft:"auto",background:"none",border:"none",color:"#6b7280",cursor:"pointer",padding:4,display:"flex",alignItems:"center"},content:{padding:16,display:"flex",flexDirection:"column",gap:16},sourceText:{fontSize:13,color:"#9ca3af"},requestBox:{backgroundColor:"#0a0a0f",borderRadius:6,border:"1px solid #374151",padding:12,fontFamily:"'SF Mono', 'Consolas', monospace",fontSize:13},methodBadge:e=>({fontWeight:700,color:e==="POST"?"#4ade80":e==="GET"?"#60a5fa":"#9ca3af",marginRight:8}),urlText:{color:"#d1d5db",wordBreak:"break-all"},headersText:{marginTop:8,fontSize:11,color:"#6b7280"},label:{fontSize:13,color:"#9ca3af",marginBottom:6},select:{width:"100%",padding:"10px 12px",backgroundColor:"#1a1a24",border:"1px solid #4b5563",borderRadius:6,fontSize:13,color:"#e5e7eb",cursor:"pointer",appearance:"none",backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 12px center",paddingRight:36},customInput:{width:"100%",padding:"10px 12px",backgroundColor:"#1a1a24",border:"1px solid #4b5563",borderRadius:6,fontSize:13,color:"#e5e7eb",fontFamily:"'SF Mono', 'Consolas', monospace"},radioGroup:{display:"flex",gap:16,marginTop:8},radioLabel:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"#9ca3af",cursor:"pointer"},backLink:{marginLeft:"auto",fontSize:12,color:"#6b7280",background:"none",border:"none",cursor:"pointer"},checkboxLabel:{display:"flex",alignItems:"center",gap:8,fontSize:13,color:"#9ca3af",cursor:"pointer"},footer:{display:"flex",alignItems:"center",gap:8,padding:12,borderTop:"1px solid #374151",backgroundColor:"#0a0a0f"},button:e=>{const t={display:"flex",alignItems:"center",gap:6,padding:"8px 16px",borderRadius:6,fontSize:13,fontWeight:500,cursor:"pointer",border:"1px solid",transition:"all 0.15s ease"};switch(e){case"deny":return{...t,backgroundColor:"rgba(220, 38, 38, 0.2)",borderColor:"rgba(239, 68, 68, 0.5)",color:"#f87171"};case"once":return{...t,backgroundColor:"rgba(75, 85, 99, 0.2)",borderColor:"rgba(107, 114, 128, 0.5)",color:"#d1d5db"};case"pattern":return{...t,backgroundColor:"rgba(22, 163, 74, 0.2)",borderColor:"rgba(34, 197, 94, 0.5)",color:"#4ade80"}}},timerContainer:{marginLeft:"auto",display:"flex",alignItems:"center",gap:6,color:"#6b7280",fontSize:13},progressBar:{height:3,backgroundColor:"#1f2937"},progressFill:e=>({height:"100%",backgroundColor:"#f59e0b",transition:"width 1s linear",width:`${e}%`})};function NE({request:e,timeout:t,onApprove:n,onDeny:r,onClose:i}){const[s,a]=k.useState(""),[l,c]=k.useState("exact"),[u,d]=k.useState(!1),[p,f]=k.useState(""),[h,m]=k.useState(!1),[b,_]=k.useState(t),g=CE(e.url);k.useEffect(()=>{g.length>0&&!s&&a(g[0].pattern)},[g,s]),k.useEffect(()=>{const L=setInterval(()=>{_(N=>N<=1?(r(),0):N-1)},1e3);return()=>clearInterval(L)},[r]);const x=k.useCallback(()=>{n()},[n]),y=k.useCallback(()=>{n(h?p:s,l,u)},[n,h,p,s,l,u]),j=b/t*100,T=e.source.startsWith("mcp:"),S=T?e.source.substring(4):"agent";return o.jsx("div",{style:Re.overlay,children:o.jsxs("div",{style:Re.dialog,children:[o.jsxs("div",{style:Re.header,children:[o.jsx(Yd,{size:18,style:Re.headerIcon}),o.jsx("span",{style:Re.headerTitle,children:"Network Request Approval"}),o.jsx("button",{style:Re.closeButton,onClick:i,children:o.jsx(Wr,{size:16})})]}),o.jsxs("div",{style:Re.content,children:[o.jsx("div",{style:Re.sourceText,children:T?o.jsxs(o.Fragment,{children:['MCP server "',o.jsx("span",{style:{color:"#22d3ee"},children:S}),'" wants to connect to:']}):o.jsx(o.Fragment,{children:"Agent wants to connect to:"})}),o.jsxs("div",{style:Re.requestBox,children:[o.jsxs("div",{children:[o.jsx("span",{style:Re.methodBadge(e.method),children:e.method}),o.jsx("span",{style:Re.urlText,children:e.url})]}),e.headers&&Object.keys(e.headers).length>0&&o.jsxs("div",{style:Re.headersText,children:["Headers: ",Object.keys(e.headers).join(", ")]})]}),o.jsxs("div",{children:[o.jsx("div",{style:Re.label,children:"Allow pattern:"}),h?o.jsxs("div",{children:[o.jsx("input",{type:"text",value:p,onChange:L=>f(L.target.value),placeholder:"e.g., *.example.com/*",style:Re.customInput}),o.jsxs("div",{style:Re.radioGroup,children:[o.jsxs("label",{style:Re.radioLabel,children:[o.jsx("input",{type:"radio",checked:l==="wildcard",onChange:()=>c("wildcard")}),"Wildcard"]}),o.jsxs("label",{style:Re.radioLabel,children:[o.jsx("input",{type:"radio",checked:l==="regex",onChange:()=>c("regex")}),"Regex"]}),o.jsx("button",{onClick:()=>m(!1),style:Re.backLink,children:"← Back to suggestions"})]})]}):o.jsxs("select",{value:s,onChange:L=>{L.target.value==="__custom__"?(m(!0),f(s)):a(L.target.value)},style:Re.select,children:[g.map(L=>o.jsx("option",{value:L.pattern,children:L.label},L.pattern)),o.jsx("option",{value:"__custom__",children:"Custom pattern..."})]})]}),o.jsxs("label",{style:Re.checkboxLabel,children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:u,onChange:L=>d(L.target.checked)}),o.jsx("span",{className:"toggle-slider"})]}),"Save to project (persists across sessions)"]})]}),o.jsxs("div",{style:Re.footer,children:[o.jsxs("button",{onClick:r,style:Re.button("deny"),children:[o.jsx(p_,{size:14}),"Deny"]}),o.jsxs("button",{onClick:x,style:Re.button("once"),children:[o.jsx(Qd,{size:14}),"Allow Once"]}),o.jsxs("button",{onClick:y,style:Re.button("pattern"),children:[o.jsx(wv,{size:14}),"Allow Pattern"]}),o.jsxs("div",{style:Re.timerContainer,children:[o.jsx(Ni,{size:14}),o.jsxs("span",{children:[b,"s"]})]})]}),o.jsx("div",{style:Re.progressBar,children:o.jsx("div",{style:Re.progressFill(j)})})]})})}var EE={value:()=>{}};function ls(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new oa(n)}function oa(e){this._=e}function zE(e,t){return e.trim().split(/^|\s+/).map(function(n){var r="",i=n.indexOf(".");if(i>=0&&(r=n.slice(i+1),n=n.slice(0,i)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}oa.prototype=ls.prototype={constructor:oa,on:function(e,t){var n=this._,r=zE(e+"",n),i,s=-1,a=r.length;if(arguments.length<2){for(;++s<a;)if((i=(e=r[s]).type)&&(i=TE(n[i],e.name)))return i;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++s<a;)if(i=(e=r[s]).type)n[i]=Im(n[i],e.name,t);else if(t==null)for(i in n)n[i]=Im(n[i],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new oa(e)},call:function(e,t){if((i=arguments.length-2)>0)for(var n=new Array(i),r=0,i,s;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(s=this._[e],r=0,i=s.length;r<i;++r)s[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],i=0,s=r.length;i<s;++i)r[i].value.apply(t,n)}};function TE(e,t){for(var n=0,r=e.length,i;n<r;++n)if((i=e[n]).name===t)return i.value}function Im(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=EE,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var Uu="http://www.w3.org/1999/xhtml";const Om={svg:"http://www.w3.org/2000/svg",xhtml:Uu,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function wl(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),Om.hasOwnProperty(t)?{space:Om[t],local:e}:e}function AE(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===Uu&&t.documentElement.namespaceURI===Uu?t.createElement(e):t.createElementNS(n,e)}}function ME(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function k1(e){var t=wl(e);return(t.local?ME:AE)(t)}function PE(){}function jp(e){return e==null?PE:function(){return this.querySelector(e)}}function LE(e){typeof e!="function"&&(e=jp(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var s=t[i],a=s.length,l=r[i]=new Array(a),c,u,d=0;d<a;++d)(c=s[d])&&(u=e.call(c,c.__data__,d,s))&&("__data__"in c&&(u.__data__=c.__data__),l[d]=u);return new qt(r,this._parents)}function RE(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function IE(){return[]}function _1(e){return e==null?IE:function(){return this.querySelectorAll(e)}}function OE(e){return function(){return RE(e.apply(this,arguments))}}function $E(e){typeof e=="function"?e=OE(e):e=_1(e);for(var t=this._groups,n=t.length,r=[],i=[],s=0;s<n;++s)for(var a=t[s],l=a.length,c,u=0;u<l;++u)(c=a[u])&&(r.push(e.call(c,c.__data__,u,a)),i.push(c));return new qt(r,i)}function j1(e){return function(){return this.matches(e)}}function S1(e){return function(t){return t.matches(e)}}var DE=Array.prototype.find;function FE(e){return function(){return DE.call(this.children,e)}}function BE(){return this.firstElementChild}function UE(e){return this.select(e==null?BE:FE(typeof e=="function"?e:S1(e)))}var WE=Array.prototype.filter;function VE(){return Array.from(this.children)}function HE(e){return function(){return WE.call(this.children,e)}}function qE(e){return this.selectAll(e==null?VE:HE(typeof e=="function"?e:S1(e)))}function JE(e){typeof e!="function"&&(e=j1(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var s=t[i],a=s.length,l=r[i]=[],c,u=0;u<a;++u)(c=s[u])&&e.call(c,c.__data__,u,s)&&l.push(c);return new qt(r,this._parents)}function C1(e){return new Array(e.length)}function KE(){return new qt(this._enter||this._groups.map(C1),this._parents)}function Ua(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Ua.prototype={constructor:Ua,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function GE(e){return function(){return e}}function YE(e,t,n,r,i,s){for(var a=0,l,c=t.length,u=s.length;a<u;++a)(l=t[a])?(l.__data__=s[a],r[a]=l):n[a]=new Ua(e,s[a]);for(;a<c;++a)(l=t[a])&&(i[a]=l)}function QE(e,t,n,r,i,s,a){var l,c,u=new Map,d=t.length,p=s.length,f=new Array(d),h;for(l=0;l<d;++l)(c=t[l])&&(f[l]=h=a.call(c,c.__data__,l,t)+"",u.has(h)?i[l]=c:u.set(h,c));for(l=0;l<p;++l)h=a.call(e,s[l],l,s)+"",(c=u.get(h))?(r[l]=c,c.__data__=s[l],u.delete(h)):n[l]=new Ua(e,s[l]);for(l=0;l<d;++l)(c=t[l])&&u.get(f[l])===c&&(i[l]=c)}function XE(e){return e.__data__}function ZE(e,t){if(!arguments.length)return Array.from(this,XE);var n=t?QE:YE,r=this._parents,i=this._groups;typeof e!="function"&&(e=GE(e));for(var s=i.length,a=new Array(s),l=new Array(s),c=new Array(s),u=0;u<s;++u){var d=r[u],p=i[u],f=p.length,h=ez(e.call(d,d&&d.__data__,u,r)),m=h.length,b=l[u]=new Array(m),_=a[u]=new Array(m),g=c[u]=new Array(f);n(d,p,b,_,g,h,t);for(var x=0,y=0,j,T;x<m;++x)if(j=b[x]){for(x>=y&&(y=x+1);!(T=_[y])&&++y<m;);j._next=T||null}}return a=new qt(a,r),a._enter=l,a._exit=c,a}function ez(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function tz(){return new qt(this._exit||this._groups.map(C1),this._parents)}function nz(e,t,n){var r=this.enter(),i=this,s=this.exit();return typeof e=="function"?(r=e(r),r&&(r=r.selection())):r=r.append(e+""),t!=null&&(i=t(i),i&&(i=i.selection())),n==null?s.remove():n(s),r&&i?r.merge(i).order():i}function rz(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,i=n.length,s=r.length,a=Math.min(i,s),l=new Array(i),c=0;c<a;++c)for(var u=n[c],d=r[c],p=u.length,f=l[c]=new Array(p),h,m=0;m<p;++m)(h=u[m]||d[m])&&(f[m]=h);for(;c<i;++c)l[c]=n[c];return new qt(l,this._parents)}function iz(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],i=r.length-1,s=r[i],a;--i>=0;)(a=r[i])&&(s&&a.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(a,s),s=a);return this}function oz(e){e||(e=sz);function t(p,f){return p&&f?e(p.__data__,f.__data__):!p-!f}for(var n=this._groups,r=n.length,i=new Array(r),s=0;s<r;++s){for(var a=n[s],l=a.length,c=i[s]=new Array(l),u,d=0;d<l;++d)(u=a[d])&&(c[d]=u);c.sort(t)}return new qt(i,this._parents).order()}function sz(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function az(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function lz(){return Array.from(this)}function cz(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,s=r.length;i<s;++i){var a=r[i];if(a)return a}return null}function uz(){let e=0;for(const t of this)++e;return e}function dz(){return!this.node()}function pz(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var i=t[n],s=0,a=i.length,l;s<a;++s)(l=i[s])&&e.call(l,l.__data__,s,i);return this}function fz(e){return function(){this.removeAttribute(e)}}function hz(e){return function(){this.removeAttributeNS(e.space,e.local)}}function mz(e,t){return function(){this.setAttribute(e,t)}}function gz(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function xz(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function yz(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function vz(e,t){var n=wl(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?hz:fz:typeof t=="function"?n.local?yz:xz:n.local?gz:mz)(n,t))}function N1(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function bz(e){return function(){this.style.removeProperty(e)}}function wz(e,t,n){return function(){this.style.setProperty(e,t,n)}}function kz(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function _z(e,t,n){return arguments.length>1?this.each((t==null?bz:typeof t=="function"?kz:wz)(e,t,n??"")):Ei(this.node(),e)}function Ei(e,t){return e.style.getPropertyValue(t)||N1(e).getComputedStyle(e,null).getPropertyValue(t)}function jz(e){return function(){delete this[e]}}function Sz(e,t){return function(){this[e]=t}}function Cz(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function Nz(e,t){return arguments.length>1?this.each((t==null?jz:typeof t=="function"?Cz:Sz)(e,t)):this.node()[e]}function E1(e){return e.trim().split(/^|\s+/)}function Sp(e){return e.classList||new z1(e)}function z1(e){this._node=e,this._names=E1(e.getAttribute("class")||"")}z1.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function T1(e,t){for(var n=Sp(e),r=-1,i=t.length;++r<i;)n.add(t[r])}function A1(e,t){for(var n=Sp(e),r=-1,i=t.length;++r<i;)n.remove(t[r])}function Ez(e){return function(){T1(this,e)}}function zz(e){return function(){A1(this,e)}}function Tz(e,t){return function(){(t.apply(this,arguments)?T1:A1)(this,e)}}function Az(e,t){var n=E1(e+"");if(arguments.length<2){for(var r=Sp(this.node()),i=-1,s=n.length;++i<s;)if(!r.contains(n[i]))return!1;return!0}return this.each((typeof t=="function"?Tz:t?Ez:zz)(n,t))}function Mz(){this.textContent=""}function Pz(e){return function(){this.textContent=e}}function Lz(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function Rz(e){return arguments.length?this.each(e==null?Mz:(typeof e=="function"?Lz:Pz)(e)):this.node().textContent}function Iz(){this.innerHTML=""}function Oz(e){return function(){this.innerHTML=e}}function $z(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function Dz(e){return arguments.length?this.each(e==null?Iz:(typeof e=="function"?$z:Oz)(e)):this.node().innerHTML}function Fz(){this.nextSibling&&this.parentNode.appendChild(this)}function Bz(){return this.each(Fz)}function Uz(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Wz(){return this.each(Uz)}function Vz(e){var t=typeof e=="function"?e:k1(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function Hz(){return null}function qz(e,t){var n=typeof e=="function"?e:k1(e),r=t==null?Hz:typeof t=="function"?t:jp(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function Jz(){var e=this.parentNode;e&&e.removeChild(this)}function Kz(){return this.each(Jz)}function Gz(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Yz(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Qz(e){return this.select(e?Yz:Gz)}function Xz(e){return arguments.length?this.property("__data__",e):this.node().__data__}function Zz(e){return function(t){e.call(this,t,this.__data__)}}function e3(e){return e.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{type:t,name:n}})}function t3(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,i=t.length,s;n<i;++n)s=t[n],(!e.type||s.type===e.type)&&s.name===e.name?this.removeEventListener(s.type,s.listener,s.options):t[++r]=s;++r?t.length=r:delete this.__on}}}function n3(e,t,n){return function(){var r=this.__on,i,s=Zz(t);if(r){for(var a=0,l=r.length;a<l;++a)if((i=r[a]).type===e.type&&i.name===e.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=s,i.options=n),i.value=t;return}}this.addEventListener(e.type,s,n),i={type:e.type,name:e.name,value:t,listener:s,options:n},r?r.push(i):this.__on=[i]}}function r3(e,t,n){var r=e3(e+""),i,s=r.length,a;if(arguments.length<2){var l=this.node().__on;if(l){for(var c=0,u=l.length,d;c<u;++c)for(i=0,d=l[c];i<s;++i)if((a=r[i]).type===d.type&&a.name===d.name)return d.value}return}for(l=t?n3:t3,i=0;i<s;++i)this.each(l(r[i],t,n));return this}function M1(e,t,n){var r=N1(e),i=r.CustomEvent;typeof i=="function"?i=new i(t,n):(i=r.document.createEvent("Event"),n?(i.initEvent(t,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(t,!1,!1)),e.dispatchEvent(i)}function i3(e,t){return function(){return M1(this,e,t)}}function o3(e,t){return function(){return M1(this,e,t.apply(this,arguments))}}function s3(e,t){return this.each((typeof t=="function"?o3:i3)(e,t))}function*a3(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,s=r.length,a;i<s;++i)(a=r[i])&&(yield a)}var P1=[null];function qt(e,t){this._groups=e,this._parents=t}function cs(){return new qt([[document.documentElement]],P1)}function l3(){return this}qt.prototype=cs.prototype={constructor:qt,select:LE,selectAll:$E,selectChild:UE,selectChildren:qE,filter:JE,data:ZE,enter:KE,exit:tz,join:nz,merge:rz,selection:l3,order:iz,sort:oz,call:az,nodes:lz,node:cz,size:uz,empty:dz,each:pz,attr:vz,style:_z,property:Nz,classed:Az,text:Rz,html:Dz,raise:Bz,lower:Wz,append:Vz,insert:qz,remove:Kz,clone:Qz,datum:Xz,on:r3,dispatch:s3,[Symbol.iterator]:a3};function Ft(e){return typeof e=="string"?new qt([[document.querySelector(e)]],[document.documentElement]):new qt([[e]],P1)}function c3(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Tn(e,t){if(e=c3(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}if(t.getBoundingClientRect){var i=t.getBoundingClientRect();return[e.clientX-i.left-t.clientLeft,e.clientY-i.top-t.clientTop]}}return[e.pageX,e.pageY]}const u3={passive:!1},Ho={capture:!0,passive:!1};function wc(e){e.stopImmediatePropagation()}function gi(e){e.preventDefault(),e.stopImmediatePropagation()}function L1(e){var t=e.document.documentElement,n=Ft(e).on("dragstart.drag",gi,Ho);"onselectstart"in t?n.on("selectstart.drag",gi,Ho):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function R1(e,t){var n=e.document.documentElement,r=Ft(e).on("dragstart.drag",null);t&&(r.on("click.drag",gi,Ho),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in n?r.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}const $s=e=>()=>e;function Wu(e,{sourceEvent:t,subject:n,target:r,identifier:i,active:s,x:a,y:l,dx:c,dy:u,dispatch:d}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},identifier:{value:i,enumerable:!0,configurable:!0},active:{value:s,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:l,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:d}})}Wu.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function d3(e){return!e.ctrlKey&&!e.button}function p3(){return this.parentNode}function f3(e,t){return t??{x:e.x,y:e.y}}function h3(){return navigator.maxTouchPoints||"ontouchstart"in this}function $m(){var e=d3,t=p3,n=f3,r=h3,i={},s=ls("start","drag","end"),a=0,l,c,u,d,p=0;function f(j){j.on("mousedown.drag",h).filter(r).on("touchstart.drag",_).on("touchmove.drag",g,u3).on("touchend.drag touchcancel.drag",x).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(j,T){if(!(d||!e.call(this,j,T))){var S=y(this,t.call(this,j,T),j,T,"mouse");S&&(Ft(j.view).on("mousemove.drag",m,Ho).on("mouseup.drag",b,Ho),L1(j.view),wc(j),u=!1,l=j.clientX,c=j.clientY,S("start",j))}}function m(j){if(gi(j),!u){var T=j.clientX-l,S=j.clientY-c;u=T*T+S*S>p}i.mouse("drag",j)}function b(j){Ft(j.view).on("mousemove.drag mouseup.drag",null),R1(j.view,u),gi(j),i.mouse("end",j)}function _(j,T){if(e.call(this,j,T)){var S=j.changedTouches,L=t.call(this,j,T),N=S.length,W,E;for(W=0;W<N;++W)(E=y(this,L,j,T,S[W].identifier,S[W]))&&(wc(j),E("start",j,S[W]))}}function g(j){var T=j.changedTouches,S=T.length,L,N;for(L=0;L<S;++L)(N=i[T[L].identifier])&&(gi(j),N("drag",j,T[L]))}function x(j){var T=j.changedTouches,S=T.length,L,N;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),L=0;L<S;++L)(N=i[T[L].identifier])&&(wc(j),N("end",j,T[L]))}function y(j,T,S,L,N,W){var E=s.copy(),O=Tn(W||S,T),F,K,A;if((A=n.call(j,new Wu("beforestart",{sourceEvent:S,target:f,identifier:N,active:a,x:O[0],y:O[1],dx:0,dy:0,dispatch:E}),L))!=null)return F=A.x-O[0]||0,K=A.y-O[1]||0,function M($,C,P){var I=O,w;switch($){case"start":i[N]=M,w=a++;break;case"end":delete i[N],--a;case"drag":O=Tn(P||C,T),w=a;break}E.call($,j,new Wu($,{sourceEvent:C,subject:A,target:f,identifier:N,active:w,x:O[0]+F,y:O[1]+K,dx:O[0]-I[0],dy:O[1]-I[1],dispatch:E}),L)}}return f.filter=function(j){return arguments.length?(e=typeof j=="function"?j:$s(!!j),f):e},f.container=function(j){return arguments.length?(t=typeof j=="function"?j:$s(j),f):t},f.subject=function(j){return arguments.length?(n=typeof j=="function"?j:$s(j),f):n},f.touchable=function(j){return arguments.length?(r=typeof j=="function"?j:$s(!!j),f):r},f.on=function(){var j=s.on.apply(s,arguments);return j===s?f:j},f.clickDistance=function(j){return arguments.length?(p=(j=+j)*j,f):Math.sqrt(p)},f}function Cp(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function I1(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function us(){}var qo=.7,Wa=1/qo,xi="\\s*([+-]?\\d+)\\s*",Jo="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",_n="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",m3=/^#([0-9a-f]{3,8})$/,g3=new RegExp(`^rgb\\(${xi},${xi},${xi}\\)$`),x3=new RegExp(`^rgb\\(${_n},${_n},${_n}\\)$`),y3=new RegExp(`^rgba\\(${xi},${xi},${xi},${Jo}\\)$`),v3=new RegExp(`^rgba\\(${_n},${_n},${_n},${Jo}\\)$`),b3=new RegExp(`^hsl\\(${Jo},${_n},${_n}\\)$`),w3=new RegExp(`^hsla\\(${Jo},${_n},${_n},${Jo}\\)$`),Dm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Cp(us,Ko,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Fm,formatHex:Fm,formatHex8:k3,formatHsl:_3,formatRgb:Bm,toString:Bm});function Fm(){return this.rgb().formatHex()}function k3(){return this.rgb().formatHex8()}function _3(){return O1(this).formatHsl()}function Bm(){return this.rgb().formatRgb()}function Ko(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=m3.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?Um(t):n===3?new zt(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Ds(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Ds(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=g3.exec(e))?new zt(t[1],t[2],t[3],1):(t=x3.exec(e))?new zt(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=y3.exec(e))?Ds(t[1],t[2],t[3],t[4]):(t=v3.exec(e))?Ds(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=b3.exec(e))?Hm(t[1],t[2]/100,t[3]/100,1):(t=w3.exec(e))?Hm(t[1],t[2]/100,t[3]/100,t[4]):Dm.hasOwnProperty(e)?Um(Dm[e]):e==="transparent"?new zt(NaN,NaN,NaN,0):null}function Um(e){return new zt(e>>16&255,e>>8&255,e&255,1)}function Ds(e,t,n,r){return r<=0&&(e=t=n=NaN),new zt(e,t,n,r)}function j3(e){return e instanceof us||(e=Ko(e)),e?(e=e.rgb(),new zt(e.r,e.g,e.b,e.opacity)):new zt}function Vu(e,t,n,r){return arguments.length===1?j3(e):new zt(e,t,n,r??1)}function zt(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}Cp(zt,Vu,I1(us,{brighter(e){return e=e==null?Wa:Math.pow(Wa,e),new zt(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?qo:Math.pow(qo,e),new zt(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new zt(Mr(this.r),Mr(this.g),Mr(this.b),Va(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Wm,formatHex:Wm,formatHex8:S3,formatRgb:Vm,toString:Vm}));function Wm(){return`#${Nr(this.r)}${Nr(this.g)}${Nr(this.b)}`}function S3(){return`#${Nr(this.r)}${Nr(this.g)}${Nr(this.b)}${Nr((isNaN(this.opacity)?1:this.opacity)*255)}`}function Vm(){const e=Va(this.opacity);return`${e===1?"rgb(":"rgba("}${Mr(this.r)}, ${Mr(this.g)}, ${Mr(this.b)}${e===1?")":`, ${e})`}`}function Va(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Mr(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Nr(e){return e=Mr(e),(e<16?"0":"")+e.toString(16)}function Hm(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new cn(e,t,n,r)}function O1(e){if(e instanceof cn)return new cn(e.h,e.s,e.l,e.opacity);if(e instanceof us||(e=Ko(e)),!e)return new cn;if(e instanceof cn)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),s=Math.max(t,n,r),a=NaN,l=s-i,c=(s+i)/2;return l?(t===s?a=(n-r)/l+(n<r)*6:n===s?a=(r-t)/l+2:a=(t-n)/l+4,l/=c<.5?s+i:2-s-i,a*=60):l=c>0&&c<1?0:a,new cn(a,l,c,e.opacity)}function C3(e,t,n,r){return arguments.length===1?O1(e):new cn(e,t,n,r??1)}function cn(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}Cp(cn,C3,I1(us,{brighter(e){return e=e==null?Wa:Math.pow(Wa,e),new cn(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?qo:Math.pow(qo,e),new cn(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new zt(kc(e>=240?e-240:e+120,i,r),kc(e,i,r),kc(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new cn(qm(this.h),Fs(this.s),Fs(this.l),Va(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Va(this.opacity);return`${e===1?"hsl(":"hsla("}${qm(this.h)}, ${Fs(this.s)*100}%, ${Fs(this.l)*100}%${e===1?")":`, ${e})`}`}}));function qm(e){return e=(e||0)%360,e<0?e+360:e}function Fs(e){return Math.max(0,Math.min(1,e||0))}function kc(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const $1=e=>()=>e;function N3(e,t){return function(n){return e+n*t}}function E3(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function z3(e){return(e=+e)==1?D1:function(t,n){return n-t?E3(t,n,e):$1(isNaN(t)?n:t)}}function D1(e,t){var n=t-e;return n?N3(e,n):$1(isNaN(e)?t:e)}const Jm=function e(t){var n=z3(t);function r(i,s){var a=n((i=Vu(i)).r,(s=Vu(s)).r),l=n(i.g,s.g),c=n(i.b,s.b),u=D1(i.opacity,s.opacity);return function(d){return i.r=a(d),i.g=l(d),i.b=c(d),i.opacity=u(d),i+""}}return r.gamma=e,r}(1);function Gn(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}var Hu=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,_c=new RegExp(Hu.source,"g");function T3(e){return function(){return e}}function A3(e){return function(t){return e(t)+""}}function M3(e,t){var n=Hu.lastIndex=_c.lastIndex=0,r,i,s,a=-1,l=[],c=[];for(e=e+"",t=t+"";(r=Hu.exec(e))&&(i=_c.exec(t));)(s=i.index)>n&&(s=t.slice(n,s),l[a]?l[a]+=s:l[++a]=s),(r=r[0])===(i=i[0])?l[a]?l[a]+=i:l[++a]=i:(l[++a]=null,c.push({i:a,x:Gn(r,i)})),n=_c.lastIndex;return n<t.length&&(s=t.slice(n),l[a]?l[a]+=s:l[++a]=s),l.length<2?c[0]?A3(c[0].x):T3(t):(t=c.length,function(u){for(var d=0,p;d<t;++d)l[(p=c[d]).i]=p.x(u);return l.join("")})}var Km=180/Math.PI,qu={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function F1(e,t,n,r,i,s){var a,l,c;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(c=e*n+t*r)&&(n-=e*c,r-=t*c),(l=Math.sqrt(n*n+r*r))&&(n/=l,r/=l,c/=l),e*r<t*n&&(e=-e,t=-t,c=-c,a=-a),{translateX:i,translateY:s,rotate:Math.atan2(t,e)*Km,skewX:Math.atan(c)*Km,scaleX:a,scaleY:l}}var Bs;function P3(e){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?qu:F1(t.a,t.b,t.c,t.d,t.e,t.f)}function L3(e){return e==null||(Bs||(Bs=document.createElementNS("http://www.w3.org/2000/svg","g")),Bs.setAttribute("transform",e),!(e=Bs.transform.baseVal.consolidate()))?qu:(e=e.matrix,F1(e.a,e.b,e.c,e.d,e.e,e.f))}function B1(e,t,n,r){function i(u){return u.length?u.pop()+" ":""}function s(u,d,p,f,h,m){if(u!==p||d!==f){var b=h.push("translate(",null,t,null,n);m.push({i:b-4,x:Gn(u,p)},{i:b-2,x:Gn(d,f)})}else(p||f)&&h.push("translate("+p+t+f+n)}function a(u,d,p,f){u!==d?(u-d>180?d+=360:d-u>180&&(u+=360),f.push({i:p.push(i(p)+"rotate(",null,r)-2,x:Gn(u,d)})):d&&p.push(i(p)+"rotate("+d+r)}function l(u,d,p,f){u!==d?f.push({i:p.push(i(p)+"skewX(",null,r)-2,x:Gn(u,d)}):d&&p.push(i(p)+"skewX("+d+r)}function c(u,d,p,f,h,m){if(u!==p||d!==f){var b=h.push(i(h)+"scale(",null,",",null,")");m.push({i:b-4,x:Gn(u,p)},{i:b-2,x:Gn(d,f)})}else(p!==1||f!==1)&&h.push(i(h)+"scale("+p+","+f+")")}return function(u,d){var p=[],f=[];return u=e(u),d=e(d),s(u.translateX,u.translateY,d.translateX,d.translateY,p,f),a(u.rotate,d.rotate,p,f),l(u.skewX,d.skewX,p,f),c(u.scaleX,u.scaleY,d.scaleX,d.scaleY,p,f),u=d=null,function(h){for(var m=-1,b=f.length,_;++m<b;)p[(_=f[m]).i]=_.x(h);return p.join("")}}}var R3=B1(P3,"px, ","px)","deg)"),I3=B1(L3,", ",")",")"),O3=1e-12;function Gm(e){return((e=Math.exp(e))+1/e)/2}function $3(e){return((e=Math.exp(e))-1/e)/2}function D3(e){return((e=Math.exp(2*e))-1)/(e+1)}const F3=function e(t,n,r){function i(s,a){var l=s[0],c=s[1],u=s[2],d=a[0],p=a[1],f=a[2],h=d-l,m=p-c,b=h*h+m*m,_,g;if(b<O3)g=Math.log(f/u)/t,_=function(L){return[l+L*h,c+L*m,u*Math.exp(t*L*g)]};else{var x=Math.sqrt(b),y=(f*f-u*u+r*b)/(2*u*n*x),j=(f*f-u*u-r*b)/(2*f*n*x),T=Math.log(Math.sqrt(y*y+1)-y),S=Math.log(Math.sqrt(j*j+1)-j);g=(S-T)/t,_=function(L){var N=L*g,W=Gm(T),E=u/(n*x)*(W*D3(t*N+T)-$3(T));return[l+E*h,c+E*m,u*W/Gm(t*N+T)]}}return _.duration=g*1e3*t/Math.SQRT2,_}return i.rho=function(s){var a=Math.max(.001,+s),l=a*a,c=l*l;return e(a,l,c)},i}(Math.SQRT2,2,4);var zi=0,ao=0,eo=0,U1=1e3,Ha,lo,qa=0,Fr=0,kl=0,Go=typeof performance=="object"&&performance.now?performance:Date,W1=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Np(){return Fr||(W1(B3),Fr=Go.now()+kl)}function B3(){Fr=0}function Ja(){this._call=this._time=this._next=null}Ja.prototype=Ep.prototype={constructor:Ja,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?Np():+n)+(t==null?0:+t),!this._next&&lo!==this&&(lo?lo._next=this:Ha=this,lo=this),this._call=e,this._time=n,Ju()},stop:function(){this._call&&(this._call=null,this._time=1/0,Ju())}};function Ep(e,t,n){var r=new Ja;return r.restart(e,t,n),r}function U3(){Np(),++zi;for(var e=Ha,t;e;)(t=Fr-e._time)>=0&&e._call.call(void 0,t),e=e._next;--zi}function Ym(){Fr=(qa=Go.now())+kl,zi=ao=0;try{U3()}finally{zi=0,V3(),Fr=0}}function W3(){var e=Go.now(),t=e-qa;t>U1&&(kl-=t,qa=e)}function V3(){for(var e,t=Ha,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:Ha=n);lo=e,Ju(r)}function Ju(e){if(!zi){ao&&(ao=clearTimeout(ao));var t=e-Fr;t>24?(e<1/0&&(ao=setTimeout(Ym,e-Go.now()-kl)),eo&&(eo=clearInterval(eo))):(eo||(qa=Go.now(),eo=setInterval(W3,U1)),zi=1,W1(Ym))}}function Qm(e,t,n){var r=new Ja;return t=t==null?0:+t,r.restart(i=>{r.stop(),e(i+t)},t,n),r}var H3=ls("start","end","cancel","interrupt"),q3=[],V1=0,Xm=1,Ku=2,sa=3,Zm=4,Gu=5,aa=6;function _l(e,t,n,r,i,s){var a=e.__transition;if(!a)e.__transition={};else if(n in a)return;J3(e,n,{name:t,index:r,group:i,on:H3,tween:q3,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:V1})}function zp(e,t){var n=hn(e,t);if(n.state>V1)throw new Error("too late; already scheduled");return n}function Cn(e,t){var n=hn(e,t);if(n.state>sa)throw new Error("too late; already running");return n}function hn(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function J3(e,t,n){var r=e.__transition,i;r[t]=n,n.timer=Ep(s,0,n.time);function s(u){n.state=Xm,n.timer.restart(a,n.delay,n.time),n.delay<=u&&a(u-n.delay)}function a(u){var d,p,f,h;if(n.state!==Xm)return c();for(d in r)if(h=r[d],h.name===n.name){if(h.state===sa)return Qm(a);h.state===Zm?(h.state=aa,h.timer.stop(),h.on.call("interrupt",e,e.__data__,h.index,h.group),delete r[d]):+d<t&&(h.state=aa,h.timer.stop(),h.on.call("cancel",e,e.__data__,h.index,h.group),delete r[d])}if(Qm(function(){n.state===sa&&(n.state=Zm,n.timer.restart(l,n.delay,n.time),l(u))}),n.state=Ku,n.on.call("start",e,e.__data__,n.index,n.group),n.state===Ku){for(n.state=sa,i=new Array(f=n.tween.length),d=0,p=-1;d<f;++d)(h=n.tween[d].value.call(e,e.__data__,n.index,n.group))&&(i[++p]=h);i.length=p+1}}function l(u){for(var d=u<n.duration?n.ease.call(null,u/n.duration):(n.timer.restart(c),n.state=Gu,1),p=-1,f=i.length;++p<f;)i[p].call(e,d);n.state===Gu&&(n.on.call("end",e,e.__data__,n.index,n.group),c())}function c(){n.state=aa,n.timer.stop(),delete r[t];for(var u in r)return;delete e.__transition}}function la(e,t){var n=e.__transition,r,i,s=!0,a;if(n){t=t==null?null:t+"";for(a in n){if((r=n[a]).name!==t){s=!1;continue}i=r.state>Ku&&r.state<Gu,r.state=aa,r.timer.stop(),r.on.call(i?"interrupt":"cancel",e,e.__data__,r.index,r.group),delete n[a]}s&&delete e.__transition}}function K3(e){return this.each(function(){la(this,e)})}function G3(e,t){var n,r;return function(){var i=Cn(this,e),s=i.tween;if(s!==n){r=n=s;for(var a=0,l=r.length;a<l;++a)if(r[a].name===t){r=r.slice(),r.splice(a,1);break}}i.tween=r}}function Y3(e,t,n){var r,i;if(typeof n!="function")throw new Error;return function(){var s=Cn(this,e),a=s.tween;if(a!==r){i=(r=a).slice();for(var l={name:t,value:n},c=0,u=i.length;c<u;++c)if(i[c].name===t){i[c]=l;break}c===u&&i.push(l)}s.tween=i}}function Q3(e,t){var n=this._id;if(e+="",arguments.length<2){for(var r=hn(this.node(),n).tween,i=0,s=r.length,a;i<s;++i)if((a=r[i]).name===e)return a.value;return null}return this.each((t==null?G3:Y3)(n,e,t))}function Tp(e,t,n){var r=e._id;return e.each(function(){var i=Cn(this,r);(i.value||(i.value={}))[t]=n.apply(this,arguments)}),function(i){return hn(i,r).value[t]}}function H1(e,t){var n;return(typeof t=="number"?Gn:t instanceof Ko?Jm:(n=Ko(t))?(t=n,Jm):M3)(e,t)}function X3(e){return function(){this.removeAttribute(e)}}function Z3(e){return function(){this.removeAttributeNS(e.space,e.local)}}function eT(e,t,n){var r,i=n+"",s;return function(){var a=this.getAttribute(e);return a===i?null:a===r?s:s=t(r=a,n)}}function tT(e,t,n){var r,i=n+"",s;return function(){var a=this.getAttributeNS(e.space,e.local);return a===i?null:a===r?s:s=t(r=a,n)}}function nT(e,t,n){var r,i,s;return function(){var a,l=n(this),c;return l==null?void this.removeAttribute(e):(a=this.getAttribute(e),c=l+"",a===c?null:a===r&&c===i?s:(i=c,s=t(r=a,l)))}}function rT(e,t,n){var r,i,s;return function(){var a,l=n(this),c;return l==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),c=l+"",a===c?null:a===r&&c===i?s:(i=c,s=t(r=a,l)))}}function iT(e,t){var n=wl(e),r=n==="transform"?I3:H1;return this.attrTween(e,typeof t=="function"?(n.local?rT:nT)(n,r,Tp(this,"attr."+e,t)):t==null?(n.local?Z3:X3)(n):(n.local?tT:eT)(n,r,t))}function oT(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function sT(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function aT(e,t){var n,r;function i(){var s=t.apply(this,arguments);return s!==r&&(n=(r=s)&&sT(e,s)),n}return i._value=t,i}function lT(e,t){var n,r;function i(){var s=t.apply(this,arguments);return s!==r&&(n=(r=s)&&oT(e,s)),n}return i._value=t,i}function cT(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var r=wl(e);return this.tween(n,(r.local?aT:lT)(r,t))}function uT(e,t){return function(){zp(this,e).delay=+t.apply(this,arguments)}}function dT(e,t){return t=+t,function(){zp(this,e).delay=t}}function pT(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?uT:dT)(t,e)):hn(this.node(),t).delay}function fT(e,t){return function(){Cn(this,e).duration=+t.apply(this,arguments)}}function hT(e,t){return t=+t,function(){Cn(this,e).duration=t}}function mT(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?fT:hT)(t,e)):hn(this.node(),t).duration}function gT(e,t){if(typeof t!="function")throw new Error;return function(){Cn(this,e).ease=t}}function xT(e){var t=this._id;return arguments.length?this.each(gT(t,e)):hn(this.node(),t).ease}function yT(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;Cn(this,e).ease=n}}function vT(e){if(typeof e!="function")throw new Error;return this.each(yT(this._id,e))}function bT(e){typeof e!="function"&&(e=j1(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var s=t[i],a=s.length,l=r[i]=[],c,u=0;u<a;++u)(c=s[u])&&e.call(c,c.__data__,u,s)&&l.push(c);return new Un(r,this._parents,this._name,this._id)}function wT(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,r=t.length,i=n.length,s=Math.min(r,i),a=new Array(r),l=0;l<s;++l)for(var c=t[l],u=n[l],d=c.length,p=a[l]=new Array(d),f,h=0;h<d;++h)(f=c[h]||u[h])&&(p[h]=f);for(;l<r;++l)a[l]=t[l];return new Un(a,this._parents,this._name,this._id)}function kT(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function _T(e,t,n){var r,i,s=kT(t)?zp:Cn;return function(){var a=s(this,e),l=a.on;l!==r&&(i=(r=l).copy()).on(t,n),a.on=i}}function jT(e,t){var n=this._id;return arguments.length<2?hn(this.node(),n).on.on(e):this.each(_T(n,e,t))}function ST(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function CT(){return this.on("end.remove",ST(this._id))}function NT(e){var t=this._name,n=this._id;typeof e!="function"&&(e=jp(e));for(var r=this._groups,i=r.length,s=new Array(i),a=0;a<i;++a)for(var l=r[a],c=l.length,u=s[a]=new Array(c),d,p,f=0;f<c;++f)(d=l[f])&&(p=e.call(d,d.__data__,f,l))&&("__data__"in d&&(p.__data__=d.__data__),u[f]=p,_l(u[f],t,n,f,u,hn(d,n)));return new Un(s,this._parents,t,n)}function ET(e){var t=this._name,n=this._id;typeof e!="function"&&(e=_1(e));for(var r=this._groups,i=r.length,s=[],a=[],l=0;l<i;++l)for(var c=r[l],u=c.length,d,p=0;p<u;++p)if(d=c[p]){for(var f=e.call(d,d.__data__,p,c),h,m=hn(d,n),b=0,_=f.length;b<_;++b)(h=f[b])&&_l(h,t,n,b,f,m);s.push(f),a.push(d)}return new Un(s,a,t,n)}var zT=cs.prototype.constructor;function TT(){return new zT(this._groups,this._parents)}function AT(e,t){var n,r,i;return function(){var s=Ei(this,e),a=(this.style.removeProperty(e),Ei(this,e));return s===a?null:s===n&&a===r?i:i=t(n=s,r=a)}}function q1(e){return function(){this.style.removeProperty(e)}}function MT(e,t,n){var r,i=n+"",s;return function(){var a=Ei(this,e);return a===i?null:a===r?s:s=t(r=a,n)}}function PT(e,t,n){var r,i,s;return function(){var a=Ei(this,e),l=n(this),c=l+"";return l==null&&(c=l=(this.style.removeProperty(e),Ei(this,e))),a===c?null:a===r&&c===i?s:(i=c,s=t(r=a,l))}}function LT(e,t){var n,r,i,s="style."+t,a="end."+s,l;return function(){var c=Cn(this,e),u=c.on,d=c.value[s]==null?l||(l=q1(t)):void 0;(u!==n||i!==d)&&(r=(n=u).copy()).on(a,i=d),c.on=r}}function RT(e,t,n){var r=(e+="")=="transform"?R3:H1;return t==null?this.styleTween(e,AT(e,r)).on("end.style."+e,q1(e)):typeof t=="function"?this.styleTween(e,PT(e,r,Tp(this,"style."+e,t))).each(LT(this._id,e)):this.styleTween(e,MT(e,r,t),n).on("end.style."+e,null)}function IT(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function OT(e,t,n){var r,i;function s(){var a=t.apply(this,arguments);return a!==i&&(r=(i=a)&&IT(e,a,n)),r}return s._value=t,s}function $T(e,t,n){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,OT(e,t,n??""))}function DT(e){return function(){this.textContent=e}}function FT(e){return function(){var t=e(this);this.textContent=t??""}}function BT(e){return this.tween("text",typeof e=="function"?FT(Tp(this,"text",e)):DT(e==null?"":e+""))}function UT(e){return function(t){this.textContent=e.call(this,t)}}function WT(e){var t,n;function r(){var i=e.apply(this,arguments);return i!==n&&(t=(n=i)&&UT(i)),t}return r._value=e,r}function VT(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,WT(e))}function HT(){for(var e=this._name,t=this._id,n=J1(),r=this._groups,i=r.length,s=0;s<i;++s)for(var a=r[s],l=a.length,c,u=0;u<l;++u)if(c=a[u]){var d=hn(c,t);_l(c,e,n,u,a,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new Un(r,this._parents,e,n)}function qT(){var e,t,n=this,r=n._id,i=n.size();return new Promise(function(s,a){var l={value:a},c={value:function(){--i===0&&s()}};n.each(function(){var u=Cn(this,r),d=u.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(l),t._.interrupt.push(l),t._.end.push(c)),u.on=t}),i===0&&s()})}var JT=0;function Un(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function J1(){return++JT}var En=cs.prototype;Un.prototype={constructor:Un,select:NT,selectAll:ET,selectChild:En.selectChild,selectChildren:En.selectChildren,filter:bT,merge:wT,selection:TT,transition:HT,call:En.call,nodes:En.nodes,node:En.node,size:En.size,empty:En.empty,each:En.each,on:jT,attr:iT,attrTween:cT,style:RT,styleTween:$T,text:BT,textTween:VT,remove:CT,tween:Q3,delay:pT,duration:mT,ease:xT,easeVarying:vT,end:qT,[Symbol.iterator]:En[Symbol.iterator]};function KT(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var GT={time:null,delay:0,duration:250,ease:KT};function YT(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function QT(e){var t,n;e instanceof Un?(t=e._id,e=e._name):(t=J1(),(n=GT).time=Np(),e=e==null?null:e+"");for(var r=this._groups,i=r.length,s=0;s<i;++s)for(var a=r[s],l=a.length,c,u=0;u<l;++u)(c=a[u])&&_l(c,e,t,u,a,n||YT(c,t));return new Un(r,this._parents,e,t)}cs.prototype.interrupt=K3;cs.prototype.transition=QT;function eg(e,t){var n,r=1;e==null&&(e=0),t==null&&(t=0);function i(){var s,a=n.length,l,c=0,u=0;for(s=0;s<a;++s)l=n[s],c+=l.x,u+=l.y;for(c=(c/a-e)*r,u=(u/a-t)*r,s=0;s<a;++s)l=n[s],l.x-=c,l.y-=u}return i.initialize=function(s){n=s},i.x=function(s){return arguments.length?(e=+s,i):e},i.y=function(s){return arguments.length?(t=+s,i):t},i.strength=function(s){return arguments.length?(r=+s,i):r},i}function XT(e){const t=+this._x.call(null,e),n=+this._y.call(null,e);return K1(this.cover(t,n),t,n,e)}function K1(e,t,n,r){if(isNaN(t)||isNaN(n))return e;var i,s=e._root,a={data:r},l=e._x0,c=e._y0,u=e._x1,d=e._y1,p,f,h,m,b,_,g,x;if(!s)return e._root=a,e;for(;s.length;)if((b=t>=(p=(l+u)/2))?l=p:u=p,(_=n>=(f=(c+d)/2))?c=f:d=f,i=s,!(s=s[g=_<<1|b]))return i[g]=a,e;if(h=+e._x.call(null,s.data),m=+e._y.call(null,s.data),t===h&&n===m)return a.next=s,i?i[g]=a:e._root=a,e;do i=i?i[g]=new Array(4):e._root=new Array(4),(b=t>=(p=(l+u)/2))?l=p:u=p,(_=n>=(f=(c+d)/2))?c=f:d=f;while((g=_<<1|b)===(x=(m>=f)<<1|h>=p));return i[x]=s,i[g]=a,e}function ZT(e){var t,n,r=e.length,i,s,a=new Array(r),l=new Array(r),c=1/0,u=1/0,d=-1/0,p=-1/0;for(n=0;n<r;++n)isNaN(i=+this._x.call(null,t=e[n]))||isNaN(s=+this._y.call(null,t))||(a[n]=i,l[n]=s,i<c&&(c=i),i>d&&(d=i),s<u&&(u=s),s>p&&(p=s));if(c>d||u>p)return this;for(this.cover(c,u).cover(d,p),n=0;n<r;++n)K1(this,a[n],l[n],e[n]);return this}function e5(e,t){if(isNaN(e=+e)||isNaN(t=+t))return this;var n=this._x0,r=this._y0,i=this._x1,s=this._y1;if(isNaN(n))i=(n=Math.floor(e))+1,s=(r=Math.floor(t))+1;else{for(var a=i-n||1,l=this._root,c,u;n>e||e>=i||r>t||t>=s;)switch(u=(t<r)<<1|e<n,c=new Array(4),c[u]=l,l=c,a*=2,u){case 0:i=n+a,s=r+a;break;case 1:n=i-a,s=r+a;break;case 2:i=n+a,r=s-a;break;case 3:n=i-a,r=s-a;break}this._root&&this._root.length&&(this._root=l)}return this._x0=n,this._y0=r,this._x1=i,this._y1=s,this}function t5(){var e=[];return this.visit(function(t){if(!t.length)do e.push(t.data);while(t=t.next)}),e}function n5(e){return arguments.length?this.cover(+e[0][0],+e[0][1]).cover(+e[1][0],+e[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function bt(e,t,n,r,i){this.node=e,this.x0=t,this.y0=n,this.x1=r,this.y1=i}function r5(e,t,n){var r,i=this._x0,s=this._y0,a,l,c,u,d=this._x1,p=this._y1,f=[],h=this._root,m,b;for(h&&f.push(new bt(h,i,s,d,p)),n==null?n=1/0:(i=e-n,s=t-n,d=e+n,p=t+n,n*=n);m=f.pop();)if(!(!(h=m.node)||(a=m.x0)>d||(l=m.y0)>p||(c=m.x1)<i||(u=m.y1)<s))if(h.length){var _=(a+c)/2,g=(l+u)/2;f.push(new bt(h[3],_,g,c,u),new bt(h[2],a,g,_,u),new bt(h[1],_,l,c,g),new bt(h[0],a,l,_,g)),(b=(t>=g)<<1|e>=_)&&(m=f[f.length-1],f[f.length-1]=f[f.length-1-b],f[f.length-1-b]=m)}else{var x=e-+this._x.call(null,h.data),y=t-+this._y.call(null,h.data),j=x*x+y*y;if(j<n){var T=Math.sqrt(n=j);i=e-T,s=t-T,d=e+T,p=t+T,r=h.data}}return r}function i5(e){if(isNaN(d=+this._x.call(null,e))||isNaN(p=+this._y.call(null,e)))return this;var t,n=this._root,r,i,s,a=this._x0,l=this._y0,c=this._x1,u=this._y1,d,p,f,h,m,b,_,g;if(!n)return this;if(n.length)for(;;){if((m=d>=(f=(a+c)/2))?a=f:c=f,(b=p>=(h=(l+u)/2))?l=h:u=h,t=n,!(n=n[_=b<<1|m]))return this;if(!n.length)break;(t[_+1&3]||t[_+2&3]||t[_+3&3])&&(r=t,g=_)}for(;n.data!==e;)if(i=n,!(n=n.next))return this;return(s=n.next)&&delete n.next,i?(s?i.next=s:delete i.next,this):t?(s?t[_]=s:delete t[_],(n=t[0]||t[1]||t[2]||t[3])&&n===(t[3]||t[2]||t[1]||t[0])&&!n.length&&(r?r[g]=n:this._root=n),this):(this._root=s,this)}function o5(e){for(var t=0,n=e.length;t<n;++t)this.remove(e[t]);return this}function s5(){return this._root}function a5(){var e=0;return this.visit(function(t){if(!t.length)do++e;while(t=t.next)}),e}function l5(e){var t=[],n,r=this._root,i,s,a,l,c;for(r&&t.push(new bt(r,this._x0,this._y0,this._x1,this._y1));n=t.pop();)if(!e(r=n.node,s=n.x0,a=n.y0,l=n.x1,c=n.y1)&&r.length){var u=(s+l)/2,d=(a+c)/2;(i=r[3])&&t.push(new bt(i,u,d,l,c)),(i=r[2])&&t.push(new bt(i,s,d,u,c)),(i=r[1])&&t.push(new bt(i,u,a,l,d)),(i=r[0])&&t.push(new bt(i,s,a,u,d))}return this}function c5(e){var t=[],n=[],r;for(this._root&&t.push(new bt(this._root,this._x0,this._y0,this._x1,this._y1));r=t.pop();){var i=r.node;if(i.length){var s,a=r.x0,l=r.y0,c=r.x1,u=r.y1,d=(a+c)/2,p=(l+u)/2;(s=i[0])&&t.push(new bt(s,a,l,d,p)),(s=i[1])&&t.push(new bt(s,d,l,c,p)),(s=i[2])&&t.push(new bt(s,a,p,d,u)),(s=i[3])&&t.push(new bt(s,d,p,c,u))}n.push(r)}for(;r=n.pop();)e(r.node,r.x0,r.y0,r.x1,r.y1);return this}function u5(e){return e[0]}function d5(e){return arguments.length?(this._x=e,this):this._x}function p5(e){return e[1]}function f5(e){return arguments.length?(this._y=e,this):this._y}function Ap(e,t,n){var r=new Mp(t??u5,n??p5,NaN,NaN,NaN,NaN);return e==null?r:r.addAll(e)}function Mp(e,t,n,r,i,s){this._x=e,this._y=t,this._x0=n,this._y0=r,this._x1=i,this._y1=s,this._root=void 0}function tg(e){for(var t={data:e.data},n=t;e=e.next;)n=n.next={data:e.data};return t}var jt=Ap.prototype=Mp.prototype;jt.copy=function(){var e=new Mp(this._x,this._y,this._x0,this._y0,this._x1,this._y1),t=this._root,n,r;if(!t)return e;if(!t.length)return e._root=tg(t),e;for(n=[{source:t,target:e._root=new Array(4)}];t=n.pop();)for(var i=0;i<4;++i)(r=t.source[i])&&(r.length?n.push({source:r,target:t.target[i]=new Array(4)}):t.target[i]=tg(r));return e};jt.add=XT;jt.addAll=ZT;jt.cover=e5;jt.data=t5;jt.extent=n5;jt.find=r5;jt.remove=i5;jt.removeAll=o5;jt.root=s5;jt.size=a5;jt.visit=l5;jt.visitAfter=c5;jt.x=d5;jt.y=f5;function Pr(e){return function(){return e}}function nr(e){return(e()-.5)*1e-6}function h5(e){return e.x+e.vx}function m5(e){return e.y+e.vy}function ng(e){var t,n,r,i=1,s=1;typeof e!="function"&&(e=Pr(e==null?1:+e));function a(){for(var u,d=t.length,p,f,h,m,b,_,g=0;g<s;++g)for(p=Ap(t,h5,m5).visitAfter(l),u=0;u<d;++u)f=t[u],b=n[f.index],_=b*b,h=f.x+f.vx,m=f.y+f.vy,p.visit(x);function x(y,j,T,S,L){var N=y.data,W=y.r,E=b+W;if(N){if(N.index>f.index){var O=h-N.x-N.vx,F=m-N.y-N.vy,K=O*O+F*F;K<E*E&&(O===0&&(O=nr(r),K+=O*O),F===0&&(F=nr(r),K+=F*F),K=(E-(K=Math.sqrt(K)))/K*i,f.vx+=(O*=K)*(E=(W*=W)/(_+W)),f.vy+=(F*=K)*E,N.vx-=O*(E=1-E),N.vy-=F*E)}return}return j>h+E||S<h-E||T>m+E||L<m-E}}function l(u){if(u.data)return u.r=n[u.data.index];for(var d=u.r=0;d<4;++d)u[d]&&u[d].r>u.r&&(u.r=u[d].r)}function c(){if(t){var u,d=t.length,p;for(n=new Array(d),u=0;u<d;++u)p=t[u],n[p.index]=+e(p,u,t)}}return a.initialize=function(u,d){t=u,r=d,c()},a.iterations=function(u){return arguments.length?(s=+u,a):s},a.strength=function(u){return arguments.length?(i=+u,a):i},a.radius=function(u){return arguments.length?(e=typeof u=="function"?u:Pr(+u),c(),a):e},a}function g5(e){return e.index}function rg(e,t){var n=e.get(t);if(!n)throw new Error("node not found: "+t);return n}function ig(e){var t=g5,n=p,r,i=Pr(30),s,a,l,c,u,d=1;e==null&&(e=[]);function p(_){return 1/Math.min(l[_.source.index],l[_.target.index])}function f(_){for(var g=0,x=e.length;g<d;++g)for(var y=0,j,T,S,L,N,W,E;y<x;++y)j=e[y],T=j.source,S=j.target,L=S.x+S.vx-T.x-T.vx||nr(u),N=S.y+S.vy-T.y-T.vy||nr(u),W=Math.sqrt(L*L+N*N),W=(W-s[y])/W*_*r[y],L*=W,N*=W,S.vx-=L*(E=c[y]),S.vy-=N*E,T.vx+=L*(E=1-E),T.vy+=N*E}function h(){if(a){var _,g=a.length,x=e.length,y=new Map(a.map((T,S)=>[t(T,S,a),T])),j;for(_=0,l=new Array(g);_<x;++_)j=e[_],j.index=_,typeof j.source!="object"&&(j.source=rg(y,j.source)),typeof j.target!="object"&&(j.target=rg(y,j.target)),l[j.source.index]=(l[j.source.index]||0)+1,l[j.target.index]=(l[j.target.index]||0)+1;for(_=0,c=new Array(x);_<x;++_)j=e[_],c[_]=l[j.source.index]/(l[j.source.index]+l[j.target.index]);r=new Array(x),m(),s=new Array(x),b()}}function m(){if(a)for(var _=0,g=e.length;_<g;++_)r[_]=+n(e[_],_,e)}function b(){if(a)for(var _=0,g=e.length;_<g;++_)s[_]=+i(e[_],_,e)}return f.initialize=function(_,g){a=_,u=g,h()},f.links=function(_){return arguments.length?(e=_,h(),f):e},f.id=function(_){return arguments.length?(t=_,f):t},f.iterations=function(_){return arguments.length?(d=+_,f):d},f.strength=function(_){return arguments.length?(n=typeof _=="function"?_:Pr(+_),m(),f):n},f.distance=function(_){return arguments.length?(i=typeof _=="function"?_:Pr(+_),b(),f):i},f}const x5=1664525,y5=1013904223,og=4294967296;function v5(){let e=1;return()=>(e=(x5*e+y5)%og)/og}function b5(e){return e.x}function w5(e){return e.y}var k5=10,_5=Math.PI*(3-Math.sqrt(5));function sg(e){var t,n=1,r=.001,i=1-Math.pow(r,1/300),s=0,a=.6,l=new Map,c=Ep(p),u=ls("tick","end"),d=v5();e==null&&(e=[]);function p(){f(),u.call("tick",t),n<r&&(c.stop(),u.call("end",t))}function f(b){var _,g=e.length,x;b===void 0&&(b=1);for(var y=0;y<b;++y)for(n+=(s-n)*i,l.forEach(function(j){j(n)}),_=0;_<g;++_)x=e[_],x.fx==null?x.x+=x.vx*=a:(x.x=x.fx,x.vx=0),x.fy==null?x.y+=x.vy*=a:(x.y=x.fy,x.vy=0);return t}function h(){for(var b=0,_=e.length,g;b<_;++b){if(g=e[b],g.index=b,g.fx!=null&&(g.x=g.fx),g.fy!=null&&(g.y=g.fy),isNaN(g.x)||isNaN(g.y)){var x=k5*Math.sqrt(.5+b),y=b*_5;g.x=x*Math.cos(y),g.y=x*Math.sin(y)}(isNaN(g.vx)||isNaN(g.vy))&&(g.vx=g.vy=0)}}function m(b){return b.initialize&&b.initialize(e,d),b}return h(),t={tick:f,restart:function(){return c.restart(p),t},stop:function(){return c.stop(),t},nodes:function(b){return arguments.length?(e=b,h(),l.forEach(m),t):e},alpha:function(b){return arguments.length?(n=+b,t):n},alphaMin:function(b){return arguments.length?(r=+b,t):r},alphaDecay:function(b){return arguments.length?(i=+b,t):+i},alphaTarget:function(b){return arguments.length?(s=+b,t):s},velocityDecay:function(b){return arguments.length?(a=1-b,t):1-a},randomSource:function(b){return arguments.length?(d=b,l.forEach(m),t):d},force:function(b,_){return arguments.length>1?(_==null?l.delete(b):l.set(b,m(_)),t):l.get(b)},find:function(b,_,g){var x=0,y=e.length,j,T,S,L,N;for(g==null?g=1/0:g*=g,x=0;x<y;++x)L=e[x],j=b-L.x,T=_-L.y,S=j*j+T*T,S<g&&(N=L,g=S);return N},on:function(b,_){return arguments.length>1?(u.on(b,_),t):u.on(b)}}}function ag(){var e,t,n,r,i=Pr(-30),s,a=1,l=1/0,c=.81;function u(h){var m,b=e.length,_=Ap(e,b5,w5).visitAfter(p);for(r=h,m=0;m<b;++m)t=e[m],_.visit(f)}function d(){if(e){var h,m=e.length,b;for(s=new Array(m),h=0;h<m;++h)b=e[h],s[b.index]=+i(b,h,e)}}function p(h){var m=0,b,_,g=0,x,y,j;if(h.length){for(x=y=j=0;j<4;++j)(b=h[j])&&(_=Math.abs(b.value))&&(m+=b.value,g+=_,x+=_*b.x,y+=_*b.y);h.x=x/g,h.y=y/g}else{b=h,b.x=b.data.x,b.y=b.data.y;do m+=s[b.data.index];while(b=b.next)}h.value=m}function f(h,m,b,_){if(!h.value)return!0;var g=h.x-t.x,x=h.y-t.y,y=_-m,j=g*g+x*x;if(y*y/c<j)return j<l&&(g===0&&(g=nr(n),j+=g*g),x===0&&(x=nr(n),j+=x*x),j<a&&(j=Math.sqrt(a*j)),t.vx+=g*h.value*r/j,t.vy+=x*h.value*r/j),!0;if(h.length||j>=l)return;(h.data!==t||h.next)&&(g===0&&(g=nr(n),j+=g*g),x===0&&(x=nr(n),j+=x*x),j<a&&(j=Math.sqrt(a*j)));do h.data!==t&&(y=s[h.data.index]*r/j,t.vx+=g*y,t.vy+=x*y);while(h=h.next)}return u.initialize=function(h,m){e=h,n=m,d()},u.strength=function(h){return arguments.length?(i=typeof h=="function"?h:Pr(+h),d(),u):i},u.distanceMin=function(h){return arguments.length?(a=h*h,u):Math.sqrt(a)},u.distanceMax=function(h){return arguments.length?(l=h*h,u):Math.sqrt(l)},u.theta=function(h){return arguments.length?(c=h*h,u):Math.sqrt(c)},u}const Us=e=>()=>e;function j5(e,{sourceEvent:t,target:n,transform:r,dispatch:i}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:r,enumerable:!0,configurable:!0},_:{value:i}})}function Ln(e,t,n){this.k=e,this.x=t,this.y=n}Ln.prototype={constructor:Ln,scale:function(e){return e===1?this:new Ln(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Ln(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var _o=new Ln(1,0,0);Ln.prototype;function jc(e){e.stopImmediatePropagation()}function to(e){e.preventDefault(),e.stopImmediatePropagation()}function S5(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function C5(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function lg(){return this.__zoom||_o}function N5(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function E5(){return navigator.maxTouchPoints||"ontouchstart"in this}function z5(e,t,n){var r=e.invertX(t[0][0])-n[0][0],i=e.invertX(t[1][0])-n[1][0],s=e.invertY(t[0][1])-n[0][1],a=e.invertY(t[1][1])-n[1][1];return e.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),a>s?(s+a)/2:Math.min(0,s)||Math.max(0,a))}function cg(){var e=S5,t=C5,n=z5,r=N5,i=E5,s=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],l=250,c=F3,u=ls("start","zoom","end"),d,p,f,h=500,m=150,b=0,_=10;function g(A){A.property("__zoom",lg).on("wheel.zoom",N,{passive:!1}).on("mousedown.zoom",W).on("dblclick.zoom",E).filter(i).on("touchstart.zoom",O).on("touchmove.zoom",F).on("touchend.zoom touchcancel.zoom",K).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}g.transform=function(A,M,$,C){var P=A.selection?A.selection():A;P.property("__zoom",lg),A!==P?T(A,M,$,C):P.interrupt().each(function(){S(this,arguments).event(C).start().zoom(null,typeof M=="function"?M.apply(this,arguments):M).end()})},g.scaleBy=function(A,M,$,C){g.scaleTo(A,function(){var P=this.__zoom.k,I=typeof M=="function"?M.apply(this,arguments):M;return P*I},$,C)},g.scaleTo=function(A,M,$,C){g.transform(A,function(){var P=t.apply(this,arguments),I=this.__zoom,w=$==null?j(P):typeof $=="function"?$.apply(this,arguments):$,B=I.invert(w),G=typeof M=="function"?M.apply(this,arguments):M;return n(y(x(I,G),w,B),P,a)},$,C)},g.translateBy=function(A,M,$,C){g.transform(A,function(){return n(this.__zoom.translate(typeof M=="function"?M.apply(this,arguments):M,typeof $=="function"?$.apply(this,arguments):$),t.apply(this,arguments),a)},null,C)},g.translateTo=function(A,M,$,C,P){g.transform(A,function(){var I=t.apply(this,arguments),w=this.__zoom,B=C==null?j(I):typeof C=="function"?C.apply(this,arguments):C;return n(_o.translate(B[0],B[1]).scale(w.k).translate(typeof M=="function"?-M.apply(this,arguments):-M,typeof $=="function"?-$.apply(this,arguments):-$),I,a)},C,P)};function x(A,M){return M=Math.max(s[0],Math.min(s[1],M)),M===A.k?A:new Ln(M,A.x,A.y)}function y(A,M,$){var C=M[0]-$[0]*A.k,P=M[1]-$[1]*A.k;return C===A.x&&P===A.y?A:new Ln(A.k,C,P)}function j(A){return[(+A[0][0]+ +A[1][0])/2,(+A[0][1]+ +A[1][1])/2]}function T(A,M,$,C){A.on("start.zoom",function(){S(this,arguments).event(C).start()}).on("interrupt.zoom end.zoom",function(){S(this,arguments).event(C).end()}).tween("zoom",function(){var P=this,I=arguments,w=S(P,I).event(C),B=t.apply(P,I),G=$==null?j(B):typeof $=="function"?$.apply(P,I):$,v=Math.max(B[1][0]-B[0][0],B[1][1]-B[0][1]),z=P.__zoom,V=typeof M=="function"?M.apply(P,I):M,ie=c(z.invert(G).concat(v/z.k),V.invert(G).concat(v/V.k));return function(fe){if(fe===1)fe=V;else{var ge=ie(fe),Z=v/ge[2];fe=new Ln(Z,G[0]-ge[0]*Z,G[1]-ge[1]*Z)}w.zoom(null,fe)}})}function S(A,M,$){return!$&&A.__zooming||new L(A,M)}function L(A,M){this.that=A,this.args=M,this.active=0,this.sourceEvent=null,this.extent=t.apply(A,M),this.taps=0}L.prototype={event:function(A){return A&&(this.sourceEvent=A),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(A,M){return this.mouse&&A!=="mouse"&&(this.mouse[1]=M.invert(this.mouse[0])),this.touch0&&A!=="touch"&&(this.touch0[1]=M.invert(this.touch0[0])),this.touch1&&A!=="touch"&&(this.touch1[1]=M.invert(this.touch1[0])),this.that.__zoom=M,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(A){var M=Ft(this.that).datum();u.call(A,this.that,new j5(A,{sourceEvent:this.sourceEvent,target:g,transform:this.that.__zoom,dispatch:u}),M)}};function N(A,...M){if(!e.apply(this,arguments))return;var $=S(this,M).event(A),C=this.__zoom,P=Math.max(s[0],Math.min(s[1],C.k*Math.pow(2,r.apply(this,arguments)))),I=Tn(A);if($.wheel)($.mouse[0][0]!==I[0]||$.mouse[0][1]!==I[1])&&($.mouse[1]=C.invert($.mouse[0]=I)),clearTimeout($.wheel);else{if(C.k===P)return;$.mouse=[I,C.invert(I)],la(this),$.start()}to(A),$.wheel=setTimeout(w,m),$.zoom("mouse",n(y(x(C,P),$.mouse[0],$.mouse[1]),$.extent,a));function w(){$.wheel=null,$.end()}}function W(A,...M){if(f||!e.apply(this,arguments))return;var $=A.currentTarget,C=S(this,M,!0).event(A),P=Ft(A.view).on("mousemove.zoom",G,!0).on("mouseup.zoom",v,!0),I=Tn(A,$),w=A.clientX,B=A.clientY;L1(A.view),jc(A),C.mouse=[I,this.__zoom.invert(I)],la(this),C.start();function G(z){if(to(z),!C.moved){var V=z.clientX-w,ie=z.clientY-B;C.moved=V*V+ie*ie>b}C.event(z).zoom("mouse",n(y(C.that.__zoom,C.mouse[0]=Tn(z,$),C.mouse[1]),C.extent,a))}function v(z){P.on("mousemove.zoom mouseup.zoom",null),R1(z.view,C.moved),to(z),C.event(z).end()}}function E(A,...M){if(e.apply(this,arguments)){var $=this.__zoom,C=Tn(A.changedTouches?A.changedTouches[0]:A,this),P=$.invert(C),I=$.k*(A.shiftKey?.5:2),w=n(y(x($,I),C,P),t.apply(this,M),a);to(A),l>0?Ft(this).transition().duration(l).call(T,w,C,A):Ft(this).call(g.transform,w,C,A)}}function O(A,...M){if(e.apply(this,arguments)){var $=A.touches,C=$.length,P=S(this,M,A.changedTouches.length===C).event(A),I,w,B,G;for(jc(A),w=0;w<C;++w)B=$[w],G=Tn(B,this),G=[G,this.__zoom.invert(G),B.identifier],P.touch0?!P.touch1&&P.touch0[2]!==G[2]&&(P.touch1=G,P.taps=0):(P.touch0=G,I=!0,P.taps=1+!!d);d&&(d=clearTimeout(d)),I&&(P.taps<2&&(p=G[0],d=setTimeout(function(){d=null},h)),la(this),P.start())}}function F(A,...M){if(this.__zooming){var $=S(this,M).event(A),C=A.changedTouches,P=C.length,I,w,B,G;for(to(A),I=0;I<P;++I)w=C[I],B=Tn(w,this),$.touch0&&$.touch0[2]===w.identifier?$.touch0[0]=B:$.touch1&&$.touch1[2]===w.identifier&&($.touch1[0]=B);if(w=$.that.__zoom,$.touch1){var v=$.touch0[0],z=$.touch0[1],V=$.touch1[0],ie=$.touch1[1],fe=(fe=V[0]-v[0])*fe+(fe=V[1]-v[1])*fe,ge=(ge=ie[0]-z[0])*ge+(ge=ie[1]-z[1])*ge;w=x(w,Math.sqrt(fe/ge)),B=[(v[0]+V[0])/2,(v[1]+V[1])/2],G=[(z[0]+ie[0])/2,(z[1]+ie[1])/2]}else if($.touch0)B=$.touch0[0],G=$.touch0[1];else return;$.zoom("touch",n(y(w,B,G),$.extent,a))}}function K(A,...M){if(this.__zooming){var $=S(this,M).event(A),C=A.changedTouches,P=C.length,I,w;for(jc(A),f&&clearTimeout(f),f=setTimeout(function(){f=null},h),I=0;I<P;++I)w=C[I],$.touch0&&$.touch0[2]===w.identifier?delete $.touch0:$.touch1&&$.touch1[2]===w.identifier&&delete $.touch1;if($.touch1&&!$.touch0&&($.touch0=$.touch1,delete $.touch1),$.touch0)$.touch0[1]=this.__zoom.invert($.touch0[0]);else if($.end(),$.taps===2&&(w=Tn(w,this),Math.hypot(p[0]-w[0],p[1]-w[1])<_)){var B=Ft(this).on("dblclick.zoom");B&&B.apply(this,arguments)}}}return g.wheelDelta=function(A){return arguments.length?(r=typeof A=="function"?A:Us(+A),g):r},g.filter=function(A){return arguments.length?(e=typeof A=="function"?A:Us(!!A),g):e},g.touchable=function(A){return arguments.length?(i=typeof A=="function"?A:Us(!!A),g):i},g.extent=function(A){return arguments.length?(t=typeof A=="function"?A:Us([[+A[0][0],+A[0][1]],[+A[1][0],+A[1][1]]]),g):t},g.scaleExtent=function(A){return arguments.length?(s[0]=+A[0],s[1]=+A[1],g):[s[0],s[1]]},g.translateExtent=function(A){return arguments.length?(a[0][0]=+A[0][0],a[1][0]=+A[1][0],a[0][1]=+A[0][1],a[1][1]=+A[1][1],g):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},g.constrain=function(A){return arguments.length?(n=A,g):n},g.duration=function(A){return arguments.length?(l=+A,g):l},g.interpolate=function(A){return arguments.length?(c=A,g):c},g.on=function(){var A=u.on.apply(u,arguments);return A===u?g:A},g.clickDistance=function(A){return arguments.length?(b=(A=+A)*A,g):Math.sqrt(b)},g.tapDistance=function(A){return arguments.length?(_=+A,g):_},g}const ug=[{bg:"#0e7490",fg:"#e0f2fe"},{bg:"#6d28d9",fg:"#ede9fe"},{bg:"#047857",fg:"#d1fae5"},{bg:"#b91c1c",fg:"#fee2e2"},{bg:"#b45309",fg:"#fef3c7"},{bg:"#1d4ed8",fg:"#dbeafe"},{bg:"#be185d",fg:"#fce7f3"},{bg:"#4d7c0f",fg:"#ecfccb"},{bg:"#7c3aed",fg:"#ede9fe"},{bg:"#0f766e",fg:"#ccfbf1"},{bg:"#c2410c",fg:"#ffedd5"},{bg:"#4338ca",fg:"#e0e7ff"}],dg=new Map;function Sc(e){if(e==="sandbox"||e==="system")return{bg:"#374151",fg:"#9ca3af"};const t=dg.get(e);if(t)return t;let n=0;for(let s=0;s<e.length;s++)n=(n<<5)-n+e.charCodeAt(s),n=n&n;const r=Math.abs(n)%ug.length,i=ug[r];return dg.set(e,i),i}const Cc={bg:"#14b8a6"};function T5({agents:e,events:t,selectedEventIndex:n,isOpen:r,onOpenChange:i,runState:s="idle"}){const[a,l]=k.useState(!1),[c,u]=k.useState(!1),d=r!==void 0?r:a,p=K=>{i?i(K):l(K)},[f,h]=k.useState(null),m=k.useRef(null),b=k.useRef(null),_=k.useRef(null),g=k.useRef(null),x=k.useRef(null),y=k.useRef(null),j=k.useRef(new Map),T=k.useRef(null),{activeAgents:S,activeTools:L,transitions:N,visitedAgents:W,toolCalls:E,activeBranches:O}=k.useMemo(()=>{var ve;const K=n!==null?n:t.length-1;if(K<0||t.length===0)return{activeAgents:new Set,activeTools:new Set,transitions:new Map,visitedAgents:new Set,toolCalls:new Map,activeBranches:new Set};const A=new Map(e.map(J=>[J.name,J.type])),M=new Map(e.map(J=>[J.id,J])),$=J=>{const D=A.get(J);if(!D)return!1;const Y=D.toLowerCase();return Y==="sequentialagent"||Y==="sequential"},C=new Map,P=new Map;for(const J of e)if($(J.name)&&"sub_agents"in J){const Y=J.sub_agents.map(ne=>{var te;return(te=M.get(ne))==null?void 0:te.name}).filter(ne=>ne!==void 0);P.set(J.name,Y);for(const ne of Y)C.set(ne,J.name)}const I=(J,D)=>{const Y=P.get(D);if(!Y)return null;const ne=Y.indexOf(J);return ne>0?Y[ne-1]:null},w=t.slice(0,K+1),B=new Map,G=new Map,v=new Set,z=new Set;v.add("system");const V=new Map;V.set("",["system"]);let ie=null;const fe=new Map,ge=new Map,Z=new Map,U=J=>{const D=J||"";return V.has(D)||V.set(D,["system"]),V.get(D)},R=(J,D)=>{if(!J)return null;const Y=J.split("."),ne=Y.indexOf(D);return ne>0?Y[ne-1]:Y.length>=1&&Y[Y.length-1]===D&&Y.length>=2?Y[Y.length-2]:null};for(const J of w){const D=J.branch||"";if(J.event_type==="agent_start"){const Y=J.agent_name;v.add(Y);const ne=U(D);let te=null;const xe=R(D,Y);xe&&xe!==Y?(te=xe,ne.includes(xe)||(ne.push(xe),v.add(xe))):ne.length>0&&(te=ne[ne.length-1]);let q=te;const re=C.get(Y);if(re){const ae=I(Y,re);ae?q=ae:q=re,Z.set(Y,re)}else if(te&&$(te)){Z.set(Y,te);const ae=ge.get(te);ae&&ae!==Y&&(q=ae)}if(q&&q!==Y){const ae=`${q}->${Y}`;B.set(ae,(B.get(ae)||0)+1),q==="system"&&D===""&&!ie&&(ie=Y)}ne[ne.length-1]!==Y&&ne.push(Y)}else if(J.event_type==="agent_end"){const Y=J.agent_name,ne=Z.get(Y);if(ne&&ge.set(ne,Y),$(Y)){const te=P.get(Y),xe=te&&te.length>0?te[te.length-1]:ge.get(Y);if(xe){const q=`${xe}->${Y}`;B.set(q,(B.get(q)||0)+1)}ge.delete(Y)}if(Y===ie){const te=`${Y}->system`;B.set(te,(B.get(te)||0)+1)}for(const[,te]of V){const xe=te.lastIndexOf(Y);xe>0&&te.splice(xe,1)}}else if(J.event_type==="tool_call"){const Y=(ve=J.data)==null?void 0:ve.tool_name,ne=U(D);if(Y&&ne.length>0){const te=ne[ne.length-1];z.add(Y);const xe=`${te}->tool:${Y}`;G.set(xe,(G.get(xe)||0)+1),fe.set(D,Y)}}else J.event_type==="tool_result"&&fe.set(D,null)}z.forEach(J=>v.add(`tool:${J}`));const Q=new Set,X=new Set,oe=new Set;for(const[J,D]of V){if(D.length>1){const ne=D[D.length-1];Q.add(ne),J&&oe.add(J)}const Y=fe.get(J);Y&&X.add(Y)}return{activeAgents:Q,activeTools:X,transitions:B,visitedAgents:v,toolCalls:G,activeBranches:oe}},[t,n,e]),F=k.useMemo(()=>{const K=new Map(e.map(P=>[P.name,P])),A=[],M=new Map;for(const P of W){if(P.startsWith("tool:"))continue;const I=K.get(P),w=(I==null?void 0:I.id)||P,B=j.current.get(w);A.push({id:w,name:P,type:P==="system"?"System":(I==null?void 0:I.type)||"LlmAgent",isActive:S.has(P),wasActive:!0,x:B==null?void 0:B.x,y:B==null?void 0:B.y}),M.set(P,w)}for(const P of W){if(!P.startsWith("tool:"))continue;const I=P.slice(5),w=`tool:${I}`,B=j.current.get(w);A.push({id:w,name:I,type:"Tool",isActive:L.has(I),wasActive:!0,x:B==null?void 0:B.x,y:B==null?void 0:B.y}),M.set(P,w)}const $=new Set(A.map(P=>P.id)),C=[];for(const[P,I]of N){const[w,B]=P.split("->"),G=M.get(w),v=M.get(B);G&&v&&$.has(G)&&$.has(v)&&C.push({source:G,target:v,type:"transition",count:I})}for(const[P,I]of E){const[w,B]=P.split("->"),G=M.get(w),v=M.get(B);G&&v&&$.has(G)&&$.has(v)&&C.push({source:G,target:v,type:"tool",count:I})}return{nodes:A,links:C}},[e,S,L,W,N,E]);return k.useEffect(()=>{var ve;if(!m.current||!d)return;const K=Ft(m.current),A=300,M=400;K.selectAll("*").remove();const $=K.append("g"),C={current:((ve=T.current)==null?void 0:ve.k)||1},P=cg().scaleExtent([.3,3]).on("zoom",J=>{$.attr("transform",J.transform),T.current=J.transform,C.current=J.transform.k});K.call(P),T.current&&(K.call(P.transform,T.current),C.current=T.current.k);const I=()=>{if(F.nodes.length===0)return null;let J=1/0,D=-1/0,Y=1/0,ne=-1/0;if(F.nodes.forEach(ee=>{ee.x!==void 0&&ee.y!==void 0&&(J=Math.min(J,ee.x),D=Math.max(D,ee.x),Y=Math.min(Y,ee.y),ne=Math.max(ne,ee.y))}),J===1/0)return null;const te=60,xe=D-J+te*2,q=ne-Y+te*2,re=Math.min(A/xe,M/q,1.5)*.85,ae=(J+D)/2,be=(Y+ne)/2;return _o.translate(A/2,M/2).scale(re).translate(-ae,-be)},w=(J,D,Y)=>J+(D-J)*Y,B=J=>{const D=T.current;if(!D){T.current=J,C.current=J.k,K.call(P.transform,J);return}const Y=.15,ne=w(D.x,J.x,Y),te=w(D.y,J.y,Y),xe=w(D.k,J.k,Y),q=_o.translate(ne,te).scale(xe);T.current=q,C.current=q.k,K.call(P.transform,q)},G=F.nodes.every(J=>J.x!==void 0&&J.y!==void 0);if(!G){const J=new Map;for(const D of F.nodes)D.x!==void 0&&D.y!==void 0&&J.set(D.id,{x:D.x,y:D.y});for(const D of F.nodes)if(D.x===void 0||D.y===void 0){const Y=F.links.find(ne=>(typeof ne.target=="string"?ne.target:ne.target.id)===D.id);if(Y){const ne=typeof Y.source=="string"?Y.source:Y.source.id,te=J.get(ne);if(te){const xe=Math.random()*Math.PI*2,q=50+Math.random()*30;D.x=te.x+Math.cos(xe)*q,D.y=te.y+Math.sin(xe)*q,J.set(D.id,{x:D.x,y:D.y})}}(D.x===void 0||D.y===void 0)&&(D.x=(Math.random()-.5)*50,D.y=(Math.random()-.5)*50)}}const v=140,z=()=>{const J=v/C.current;for(const D of F.nodes){if(D.x===void 0||D.y===void 0)continue;const Y=Math.sqrt(D.x*D.x+D.y*D.y);if(Y>J){const ne=J/Y;D.x*=ne,D.y*=ne}}},V=()=>{for(const J of F.nodes)if(J.name==="system"&&J.x!==void 0&&J.y!==void 0){const Y=v/C.current*.75,ne=225*Math.PI/180,te=Y*Math.cos(ne),xe=-Y*Math.sin(ne),q=.3;J.vx=(J.vx||0)+(te-J.x)*q,J.vy=(J.vy||0)+(xe-J.y)*q}},ie=new Set;for(const J of F.links){const D=typeof J.source=="string"?J.source:J.source.id;ie.add(D)}const fe=new Set(F.nodes.filter(J=>!ie.has(J.id)&&J.name!=="system").map(J=>J.id)),ge=()=>{const D=v/C.current*.65,Y=.15;for(const ne of F.nodes)if(fe.has(ne.id)&&ne.x!==void 0&&ne.y!==void 0){const te=Math.sqrt(ne.x*ne.x+ne.y*ne.y)||1;if(te<D){const xe=ne.x/te,q=ne.y/te,re=(D-te)*Y;ne.vx=(ne.vx||0)+xe*re,ne.vy=(ne.vy||0)+q*re}}},Z=sg(F.nodes).force("link",ig(F.links).id(J=>J.id).distance(100)).force("charge",ag().strength(-400)).force("center",eg(0,0)).force("collision",ng().radius(40)).force("boundary",z).force("systemPull",V).force("leafOutward",ge).alphaDecay(.01);G?Z.alpha(.3):Z.alpha(1),y.current=Z;const U=K.append("defs");F.links.forEach((J,D)=>{const Y=U.append("linearGradient").attr("id",`link-gradient-${D}`).attr("gradientUnits","userSpaceOnUse"),ne=J.type==="transition"?{start:"#166534",end:"#4ade80"}:J.type==="sub_agent"?{start:"#3730a3",end:"#a5b4fc"}:{start:"#92400e",end:"#fcd34d"};Y.append("stop").attr("offset","0%").attr("stop-color",ne.start),Y.append("stop").attr("offset","100%").attr("stop-color",ne.end)});const R=$.append("g").attr("class","links").selectAll("path").data(F.links).join("path").attr("stroke",(J,D)=>`url(#link-gradient-${D})`).attr("stroke-width",J=>{const D=J.type==="transition"?2:1.5;return Math.min(D+(J.count-1)*1.5,18)}).attr("stroke-opacity",J=>J.type==="transition"?.8:.5).attr("stroke-dasharray",J=>J.type==="tool"?"4,2":"none").attr("fill","none"),Q=$.append("g").selectAll("g").data(F.nodes).join("g").call($m().on("start",(J,D)=>{J.active||Z.alphaTarget(.3).restart(),D.fx=D.x,D.fy=D.y}).on("drag",(J,D)=>{D.fx=J.x,D.fy=J.y}).on("end",(J,D)=>{J.active||Z.alphaTarget(0),D.fx=null,D.fy=null})),X=J=>J.type==="System"?14:J.type==="Tool"?12:18;Q.append("circle").attr("r",J=>X(J)).attr("fill",J=>J.type==="Tool"?Cc.bg:Sc(J.name).bg).attr("stroke",J=>J.isActive?"#fff":J.wasActive?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.2)").attr("stroke-width",J=>J.isActive?3:1.5).attr("opacity",J=>J.wasActive?1:.5).attr("class",J=>J.isActive?"active-node":"").style("cursor","pointer").on("mouseenter",function(J,D){var xe;const Y=(xe=_.current)==null?void 0:xe.getBoundingClientRect();if(!Y)return;const ne=J.clientX-Y.left,te=J.clientY-Y.top;h({x:ne,y:te,node:D}),Ft(this).transition().duration(150).attr("r",X(D)+6)}).on("mouseleave",function(J,D){h(null),Ft(this).transition().duration(150).attr("r",X(D))}),Q.append("text").text(J=>J.name.length>10?J.name.slice(0,8)+"…":J.name).attr("text-anchor","middle").attr("dy",32).attr("font-size",10).attr("fill","#e4e4e7").attr("font-weight",J=>J.isActive?600:400),Z.on("tick",()=>{R.attr("d",D=>{const Y=D.target.x-D.source.x,ne=D.target.y-D.source.y,te=Math.sqrt(Y*Y+ne*ne)*1.5;return`M${D.source.x},${D.source.y}A${te},${te} 0 0,1 ${D.target.x},${D.target.y}`}),F.links.forEach((D,Y)=>{U.select(`#link-gradient-${Y}`).attr("x1",D.source.x).attr("y1",D.source.y).attr("x2",D.target.x).attr("y2",D.target.y)}),Q.attr("transform",D=>`translate(${D.x},${D.y})`),F.nodes.forEach(D=>{D.x!==void 0&&D.y!==void 0&&j.current.set(D.id,{x:D.x,y:D.y})});const J=I();J&&B(J)});const oe=I();return oe&&B(oe),()=>{Z.stop()}},[F,d]),k.useEffect(()=>{if(!b.current||!c)return;const K=Ft(b.current),A=g.current;if(!A)return;const M=Math.min(A.clientWidth,A.clientHeight),$=M,C=M;K.selectAll("*").remove();const P=K.append("g"),I=cg().scaleExtent([.3,3]).on("zoom",R=>{P.attr("transform",R.transform),x.current=R.transform});if(K.call(I),x.current)K.call(I.transform,x.current);else{const R=_o.translate($/2,C/2).scale(.9);K.call(I.transform,R),x.current=R}const w=M*.35,B=()=>{for(const R of F.nodes){if(R.x===void 0||R.y===void 0)continue;const Q=Math.sqrt(R.x*R.x+R.y*R.y);if(Q>w){const X=w/Q;R.x*=X,R.y*=X}}},G=new Set;for(const R of F.links){const Q=typeof R.source=="string"?R.source:R.source.id;G.add(Q)}const v=new Set(F.nodes.filter(R=>!G.has(R.id)&&R.name!=="system").map(R=>R.id)),z=()=>{const R=w*.75,Q=.12;for(const X of F.nodes)if(v.has(X.id)&&X.x!==void 0&&X.y!==void 0){const oe=Math.sqrt(X.x*X.x+X.y*X.y)||1;if(oe<R){const ve=X.x/oe,J=X.y/oe,D=(R-oe)*Q;X.vx=(X.vx||0)+ve*D,X.vy=(X.vy||0)+J*D}}},V=F.nodes.every(R=>R.x!==void 0&&R.y!==void 0),ie=sg(F.nodes).force("link",ig(F.links).id(R=>R.id).distance(120)).force("charge",ag().strength(-500)).force("center",eg(0,0)).force("collision",ng().radius(50)).force("boundary",B).force("leafOutward",z).alpha(V?.1:.8).alphaDecay(.02),fe=K.append("defs");F.links.forEach((R,Q)=>{const X=fe.append("linearGradient").attr("id",`exp-link-gradient-${Q}`).attr("gradientUnits","userSpaceOnUse"),oe=R.type==="transition"?{start:"#166534",end:"#4ade80"}:R.type==="sub_agent"?{start:"#3730a3",end:"#a5b4fc"}:{start:"#92400e",end:"#fcd34d"};X.append("stop").attr("offset","0%").attr("stop-color",oe.start),X.append("stop").attr("offset","100%").attr("stop-color",oe.end)});const ge=P.append("g").attr("class","links").selectAll("path").data(F.links).join("path").attr("stroke",(R,Q)=>`url(#exp-link-gradient-${Q})`).attr("stroke-width",R=>{const Q=R.type==="transition"?3:2;return Math.min(Q+(R.count-1)*2.5,28)}).attr("stroke-opacity",R=>R.type==="transition"?.8:.5).attr("stroke-dasharray",R=>R.type==="tool"?"6,3":"none").attr("fill","none"),Z=R=>R.type==="System"?20:R.type==="Tool"?18:28,U=P.append("g").selectAll("g").data(F.nodes).join("g").call($m().on("start",(R,Q)=>{R.active||ie.alphaTarget(.3).restart(),Q.fx=Q.x,Q.fy=Q.y}).on("drag",(R,Q)=>{Q.fx=R.x,Q.fy=R.y}).on("end",(R,Q)=>{R.active||ie.alphaTarget(0),Q.fx=null,Q.fy=null}));return U.append("circle").attr("r",R=>Z(R)).attr("fill",R=>R.type==="Tool"?Cc.bg:Sc(R.name).bg).attr("stroke",R=>R.isActive?"#fff":R.wasActive?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.2)").attr("stroke-width",R=>R.isActive?4:2).attr("opacity",R=>R.wasActive?1:.5).attr("class",R=>R.isActive?"active-node":"").style("cursor","grab"),U.append("text").text(R=>R.name.length>15?R.name.slice(0,13)+"…":R.name).attr("text-anchor","middle").attr("dy",R=>Z(R)+18).attr("font-size",14).attr("fill","#e4e4e7").attr("font-weight",R=>R.isActive?600:400),ie.on("tick",()=>{ge.attr("d",R=>{const Q=R.target.x-R.source.x,X=R.target.y-R.source.y,oe=Math.sqrt(Q*Q+X*X)*1.5;return`M${R.source.x},${R.source.y}A${oe},${oe} 0 0,1 ${R.target.x},${R.target.y}`}),F.links.forEach((R,Q)=>{fe.select(`#exp-link-gradient-${Q}`).attr("x1",R.source.x).attr("y1",R.source.y).attr("x2",R.target.x).attr("y2",R.target.y)}),U.attr("transform",R=>`translate(${R.x},${R.y})`),F.nodes.forEach(R=>{R.x!==void 0&&R.y!==void 0&&j.current.set(R.id,{x:R.x,y:R.y})})}),()=>{ie.stop()}},[F,c]),o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:`agent-graph-container ${d?"":"closed"}`,children:o.jsxs("div",{className:"agent-graph-panel",children:[o.jsxs("div",{className:`agent-graph-content clickable state-${s}`,ref:_,onClick:()=>u(!0),title:"Click to expand",children:[o.jsx("svg",{ref:m,className:"agent-graph-svg"}),o.jsxs("div",{className:"agent-graph-legend",children:[o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{className:"legend-line",style:{background:"#22c55e"}}),o.jsx("span",{children:"agent flow"})]}),o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{className:"legend-line",style:{background:"#f59e0b",borderStyle:"dashed"}}),o.jsx("span",{children:"tool call"})]})]}),f&&o.jsxs("div",{className:"agent-graph-tooltip",style:{left:Math.min(f.x+15,180),top:Math.max(f.y-20,10)},children:[o.jsx("div",{className:"agent-graph-tooltip-name",children:f.node.name}),o.jsxs("div",{className:"agent-graph-tooltip-type",children:[o.jsx("div",{className:"agent-graph-tooltip-dot",style:{background:f.node.type==="Tool"?Cc.bg:Sc(f.node.name).bg}}),f.node.type]}),f.node.isActive&&o.jsx("div",{className:"agent-graph-tooltip-active",children:"● Currently executing"})]})]}),o.jsx("button",{className:`agent-graph-toggle state-${s}`,onClick:()=>p(!d),children:o.jsx(vt,{size:20})})]})}),c&&o.jsx("div",{className:"agent-graph-modal-overlay",onClick:()=>{u(!1),x.current=null},children:o.jsxs("div",{className:`agent-graph-modal state-${s}`,ref:g,onClick:K=>K.stopPropagation(),children:[o.jsx("button",{className:"agent-graph-modal-close",onClick:()=>{u(!1),x.current=null},title:"Close",children:o.jsx("div",{className:"agent-graph-modal-close-arc",children:o.jsx(Wr,{size:18,className:"agent-graph-modal-close-icon"})})}),o.jsx("svg",{ref:b,className:"agent-graph-modal-svg"})]})})]})}const pg={agent_start:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},agent_end:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},tool_call:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},tool_result:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},model_call:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},model_response:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},callback_error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"},state_change:{bg:"#3d0d1f",fg:"#fda4af",border:"#f43f5e"},transfer:{bg:"#0d2d3d",fg:"#7dd3fc",border:"#0ea5e9"},callback_start:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},callback_end:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"}},A5={agent_start:Nu,agent_end:Nu,tool_call:pn,tool_result:pn,model_call:Xd,model_response:Ia,state_change:In,transfer:ip,callback_start:jn,callback_end:jn,callback_error:Yd},fg=[{bg:"#0e7490",fg:"#e0f2fe"},{bg:"#6d28d9",fg:"#ede9fe"},{bg:"#047857",fg:"#d1fae5"},{bg:"#b91c1c",fg:"#fee2e2"},{bg:"#b45309",fg:"#fef3c7"},{bg:"#1d4ed8",fg:"#dbeafe"},{bg:"#be185d",fg:"#fce7f3"},{bg:"#4d7c0f",fg:"#ecfccb"},{bg:"#7c3aed",fg:"#ede9fe"},{bg:"#0f766e",fg:"#ccfbf1"},{bg:"#c2410c",fg:"#ffedd5"},{bg:"#4338ca",fg:"#e0e7ff"}],hg=new Map;function Ka(e){if(e==="sandbox"||e==="system")return{bg:"#374151",fg:"#9ca3af"};let t=hg.get(e);if(t===void 0){let n=0;for(let r=0;r<e.length;r++)n=(n<<5)-n+e.charCodeAt(r),n=n&n;t=Math.abs(n)%fg.length,hg.set(e,t)}return fg[t]}function mg(e){var t,n,r,i,s,a,l,c,u,d,p,f,h,m,b,_,g,x,y,j,T,S,L,N,W,E,O,F,K,A;switch(e.event_type){case"agent_start":return`START ${e.agent_name}`;case"agent_end":return(t=e.data)!=null&&t.error?`END ${e.agent_name} [ERROR]`:`END ${e.agent_name}`;case"tool_call":const $=Object.entries(((n=e.data)==null?void 0:n.args)||{}).map(([R,Q])=>{const X=Q!=null?JSON.stringify(Q):"null";return`${R}=${X.slice(0,500)}${X.length>500?"...":""}`}).join(", ")||"";return`CALL ${((r=e.data)==null?void 0:r.tool_name)||"unknown"}(${$.slice(0,1e3)}${$.length>1e3?"...":""})`;case"tool_result":const C=(i=e.data)==null?void 0:i.result;let P="";if((a=(s=C==null?void 0:C.content)==null?void 0:s[0])!=null&&a.text)P=String(C.content[0].text).slice(0,500);else if(typeof C=="string")P=C.slice(0,500);else if(C!=null){const R=JSON.stringify(C);P=R?R.slice(0,500):""}else P="";return`RESULT ${((l=e.data)==null?void 0:l.tool_name)||"unknown"} → ${P}${P.length>=500?"...":""}`;case"model_call":return`LLM_REQ ${((u=(c=e.data)==null?void 0:c.contents)==null?void 0:u.length)||0} msgs, ${((d=e.data)==null?void 0:d.tool_count)||0} tools`;case"model_response":const I=((f=(p=e.data)==null?void 0:p.response_content)==null?void 0:f.parts)||((h=e.data)==null?void 0:h.parts)||[],w=I.find(R=>(R==null?void 0:R.type)==="function_call");if(w)return`LLM_RSP → ${w.name||"unknown"}()`;const B=I.find(R=>(R==null?void 0:R.type)==="text");if(B!=null&&B.text){const R=String(B.text);return`LLM_RSP "${R.slice(0,50)}${R.length>50?"...":""}"`}return`LLM_RSP (${((m=e.data)==null?void 0:m.finish_reason)||"complete"})`;case"state_change":return`STATE ${Object.keys(((b=e.data)==null?void 0:b.state_delta)||{}).join(", ")}`;case"transfer":return`TRANSFER → ${((_=e.data)==null?void 0:_.target)||"unknown"}`;case"callback_start":const v=((g=e.data)==null?void 0:g.callback_name)||"unknown",z=((x=e.data)==null?void 0:x.callback_type)||"";return v==="network_approval"?`⏳ AWAITING APPROVAL ${((y=e.data)==null?void 0:y.host)||((j=e.data)==null?void 0:j.url)||""}`:`CALLBACK START ${z?`[${z}]`:""} ${v}`;case"callback_end":const V=((T=e.data)==null?void 0:T.callback_name)||"unknown",ie=((S=e.data)==null?void 0:S.callback_type)||"",fe=(L=e.data)!=null&&L.error?" [ERROR]":"";return V==="network_approval"?((N=e.data)==null?void 0:N.action)==="deny"?`🚫 DENIED ${((W=e.data)==null?void 0:W.host)||""}`:`✅ APPROVED ${((E=e.data)==null?void 0:E.pattern)||((O=e.data)==null?void 0:O.host)||""}`:`CALLBACK END ${ie?`[${ie}]`:""} ${V}${fe}`;case"callback_error":const ge=((F=e.data)==null?void 0:F.source)||"unknown",Z=((K=e.data)==null?void 0:K.error)||"Unknown error";return`⚠️ ERROR in ${ge}: ${Z.slice(0,50)}${Z.length>50?"...":""}`;case"compaction":const U=((A=e.data)==null?void 0:A.summary_preview)||"";return`📦 COMPACTION "${U.slice(0,80)}${U.length>80?"...":""}"`;default:return e.event_type.toUpperCase()}}function M5(e,t){const n=e-t;return n<1?`+${(n*1e3).toFixed(0)}ms`:n<60?`+${n.toFixed(2)}s`:`+${Math.floor(n/60)}m${(n%60).toFixed(0)}s`}function P5(e){const t={timestamp:"#71717a",bracket:"#a78bfa",ip:"#22d3ee",domain:"#34d399",url:"#60a5fa",method:"#f472b6",status:"#4ade80",statusError:"#f87171",number:"#fbbf24",keyword:"#c084fc",info:"#22d3ee",warning:"#fbbf24",error:"#f87171",debug:"#71717a"},n=[];let r=e,i=0;const s=(l,c)=>{l&&n.push(c?o.jsx("span",{style:{color:c},children:l},i++):o.jsx("span",{children:l},i++))},a=[{regex:/^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+Z?\s*)/,color:t.timestamp},{regex:/(\[[^\]]+\])/,color:t.bracket},{regex:/\b(GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS|CONNECT)\b/,color:t.method},{regex:/\b([23]\d{2})\s+(OK|Created|Accepted|No Content|Moved|Found|Not Modified)\b/,color:t.status},{regex:/\b([45]\d{2})\s+\w+/,color:t.statusError},{regex:/(<< \d{3} \w+)/,color:t.status},{regex:/(https?:\/\/[^\s]+)/,color:t.url},{regex:/(\s)(\/[a-zA-Z0-9_\-./]+)/,color:t.url,group:2},{regex:/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d+)/,color:t.ip},{regex:/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/,color:t.ip},{regex:/(sandbox-agent-[a-zA-Z0-9_-]+:\d+)/,color:t.domain},{regex:/(host\.docker\.internal:\d+)/,color:t.domain},{regex:/([a-zA-Z][a-zA-Z0-9-]*\.(?:com|org|net|io|dev|local|internal)(?::\d+)?)/,color:t.domain},{regex:/\b(\d+(?:\.\d+)?[kmgb])\b/i,color:t.number},{regex:/\b(INFO)\b/,color:t.info},{regex:/\b(WARNING|WARN)\b/,color:t.warning},{regex:/\b(ERROR|CRITICAL|FATAL)\b/,color:t.error},{regex:/\b(DEBUG)\b/,color:t.debug},{regex:/([a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*){2,})/,color:t.domain},{regex:/\b(client|server|connect|disconnect|completion|model|provider)\b/i,color:t.keyword}];for(;r.length>0;){let l=null;for(const{regex:c,color:u,group:d}of a){const p=r.match(c);if(p&&p.index!==void 0){const f=d?r.indexOf(p[d],p.index):p.index,h=d?p[d]:p[0];(!l||f<l.index)&&(l={index:f,length:h.length,text:h,color:u})}}if(l)l.index>0&&s(r.slice(0,l.index)),s(l.text,l.color),r=r.slice(l.index+l.length);else{s(r);break}}return o.jsx(o.Fragment,{children:n})}function L5({content:e}){const t=e.split(`
`);return o.jsx(o.Fragment,{children:t.map((n,r)=>o.jsx("div",{children:P5(n)},r))})}function R5({event:e}){var l,c,u,d,p,f,h,m,b,_,g,x,y,j,T,S,L,N,W,E,O,F,K,A;const[t,n]=k.useState(new Set(["instruction","messages","result","response","state_delta","data"])),[r,i]=k.useState(null),s=M=>{const $=new Set(t);$.has(M)?$.delete(M):$.add(M),n($)},a=(M,$=0,C=!1)=>{const P="  ".repeat($),I="  ".repeat($+1);if(M===null)return o.jsx("span",{className:"json-null",children:"null"});if(M===void 0)return o.jsx("span",{className:"json-undefined",children:"undefined"});if(typeof M=="boolean")return o.jsx("span",{className:"json-boolean",children:M.toString()});if(typeof M=="number")return o.jsx("span",{className:"json-number",children:M});if(typeof M=="string"){const w=M.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\t/g,"\\t"),B=()=>i(M);return w.length>300&&$>0?o.jsxs("span",{className:"json-string json-string-clickable",onClick:B,title:"Click to view as Markdown",children:['"',w.slice(0,300),'..." ',o.jsxs("span",{className:"json-truncated",children:["(",M.length," chars)"]})]}):o.jsxs("span",{className:"json-string json-string-clickable",onClick:B,title:"Click to view as Markdown",children:['"',w,'"']})}if(Array.isArray(M))return M.length===0?o.jsx("span",{className:"json-bracket",children:"[]"}):M.every(B=>B===null||typeof B!="object")&&M.length<=3?o.jsxs("span",{className:"json-inline",children:[o.jsx("span",{className:"json-bracket",children:"["}),M.map((B,G)=>o.jsxs("span",{children:[a(B,$+1,!0),G<M.length-1&&o.jsx("span",{className:"json-comma",children:", "})]},G)),o.jsx("span",{className:"json-bracket",children:"]"})]}):o.jsxs("span",{className:"json-block",children:[o.jsx("span",{className:"json-bracket",children:"["}),M.map((B,G)=>o.jsxs("span",{children:[`
`+I,a(B,$+1),G<M.length-1&&o.jsx("span",{className:"json-comma",children:","})]},G)),`
`+P,o.jsx("span",{className:"json-bracket",children:"]"})]});if(typeof M=="object"){const w=Object.entries(M);return w.length===0?o.jsx("span",{className:"json-bracket",children:"{}"}):w.length<=2&&w.every(([,G])=>G===null||typeof G!="object")&&C?o.jsxs("span",{className:"json-inline",children:[o.jsx("span",{className:"json-bracket",children:"{"}),w.map(([G,v],z)=>o.jsxs("span",{children:[o.jsxs("span",{className:"json-key",children:['"',G,'"']}),o.jsx("span",{className:"json-colon",children:": "}),a(v,$+1,!0),z<w.length-1&&o.jsx("span",{className:"json-comma",children:", "})]},G)),o.jsx("span",{className:"json-bracket",children:"}"})]}):o.jsxs("span",{className:"json-block",children:[o.jsx("span",{className:"json-bracket",children:"{"}),w.map(([G,v],z)=>o.jsxs("span",{children:[`
`+I,o.jsxs("span",{className:"json-key",children:['"',G,'"']}),o.jsx("span",{className:"json-colon",children:": "}),a(v,$+1),z<w.length-1&&o.jsx("span",{className:"json-comma",children:","})]},G)),`
`+P,o.jsx("span",{className:"json-bracket",children:"}"})]})}return String(M)};return o.jsxs("div",{className:"event-detail",children:[o.jsxs("div",{className:"detail-header",children:[o.jsx("span",{className:"detail-type",children:e.event_type}),o.jsx("span",{className:"detail-agent",style:{backgroundColor:Ka(e.agent_name).bg,color:Ka(e.agent_name).fg,padding:"2px 8px",borderRadius:"4px",fontWeight:600},children:e.agent_name}),o.jsx("span",{className:"detail-time",children:new Date(e.timestamp*1e3).toISOString()})]}),o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("data"),children:[t.has("data")?o.jsx(Ct,{size:12}):o.jsx(vt,{size:12}),o.jsx("span",{children:"Event Data"})]}),t.has("data")&&o.jsx("div",{className:"section-content json-viewer",children:a(e.data)})]}),e.event_type==="agent_start"&&((l=e.data)==null?void 0:l.instruction)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("instruction"),children:[t.has("instruction")?o.jsx(Ct,{size:12}):o.jsx(vt,{size:12}),o.jsx("span",{children:"Instruction"}),o.jsxs("span",{className:"char-count",children:[e.data.instruction.length," chars"]})]}),t.has("instruction")&&o.jsx("div",{className:"section-content",children:o.jsx("pre",{className:"instruction-text",children:e.data.instruction})})]}),e.event_type==="model_call"&&((c=e.data)==null?void 0:c.contents)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("messages"),children:[t.has("messages")?o.jsx(Ct,{size:12}):o.jsx(vt,{size:12}),o.jsxs("span",{children:["Messages (",e.data.contents.length,")"]})]}),t.has("messages")&&o.jsx("div",{className:"section-content",children:e.data.contents.map((M,$)=>{var C;return o.jsxs("div",{className:"message-item",children:[o.jsx("span",{className:`message-role ${M.role}`,children:M.role}),o.jsx("div",{className:"message-parts",children:(C=M.parts)==null?void 0:C.map((P,I)=>o.jsxs("div",{className:"message-part",children:[P.text&&o.jsx("pre",{children:P.text}),P.function_call&&o.jsxs("div",{className:"function-call",children:[o.jsx("strong",{children:P.function_call.name}),o.jsx("pre",{children:JSON.stringify(P.function_call.args,null,2)})]}),P.function_response&&o.jsxs("div",{className:"function-response",children:[o.jsx("strong",{children:P.function_response.name}),o.jsx("pre",{children:JSON.stringify(P.function_response.response,null,2)})]})]},I))})]},$)})})]}),e.event_type==="tool_result"&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("result"),children:[t.has("result")?o.jsx(Ct,{size:12}):o.jsx(vt,{size:12}),o.jsx("span",{children:"Tool Result"})]}),t.has("result")&&o.jsx("div",{className:"section-content",children:o.jsx("pre",{className:"result-content",children:((f=(p=(d=(u=e.data)==null?void 0:u.result)==null?void 0:d.content)==null?void 0:p[0])==null?void 0:f.text)||(typeof((h=e.data)==null?void 0:h.result)=="string"?e.data.result:JSON.stringify((m=e.data)==null?void 0:m.result,null,2))})})]}),e.event_type==="model_response"&&((b=e.data)==null?void 0:b.parts)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("response"),children:[t.has("response")?o.jsx(Ct,{size:12}):o.jsx(vt,{size:12}),o.jsxs("span",{children:["Response (",e.data.parts.length," part",e.data.parts.length!==1?"s":"",")"]}),e.data.token_counts&&o.jsxs("span",{className:"token-badge",children:[e.data.token_counts.input,"↑ ",e.data.token_counts.output,"↓"]})]}),t.has("response")&&o.jsx("div",{className:"section-content",children:e.data.parts.map((M,$)=>o.jsxs("div",{className:"response-part",children:[M.type==="text"&&M.text&&o.jsx("pre",{className:"response-text",children:M.text}),M.type==="function_call"&&o.jsxs("div",{className:"function-call",children:[o.jsxs("strong",{children:["→ ",M.name,"()"]}),M.args&&Object.keys(M.args).length>0&&o.jsx("pre",{children:JSON.stringify(M.args,null,2)})]}),M.thought&&o.jsx("div",{className:"thought-indicator",children:"💭 Thinking"})]},$))})]}),(e.event_type==="callback_start"||e.event_type==="callback_end")&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("callback_info"),children:[t.has("callback_info")?o.jsx(Ct,{size:12}):o.jsx(vt,{size:12}),o.jsx("span",{children:"Callback Information"})]}),t.has("callback_info")&&o.jsxs("div",{className:"section-content",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Name:"})," ",((_=e.data)==null?void 0:_.callback_name)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Type:"})," ",((g=e.data)==null?void 0:g.callback_type)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Module Path:"})," ",((x=e.data)==null?void 0:x.module_path)||"unknown"]}),((y=e.data)==null?void 0:y.error)&&o.jsxs("div",{style:{color:"#ef4444",marginTop:"8px"},children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Error:"})," ",e.data.error]}),((j=e.data)==null?void 0:j.error_type)&&o.jsxs("div",{style:{marginTop:"4px",fontSize:"0.9em",opacity:.8},children:[o.jsx("strong",{children:"Type:"})," ",e.data.error_type]}),((T=e.data)==null?void 0:T.stack_trace)&&o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Stack Trace:"}),o.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"300px",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:e.data.stack_trace})]})]})]})]}),e.event_type==="callback_error"&&o.jsxs("div",{className:"detail-section",style:{borderColor:"#dc2626"},children:[o.jsxs("div",{className:"section-header",onClick:()=>s("error_info"),style:{color:"#fca5a5"},children:[t.has("error_info")?o.jsx(Ct,{size:12}):o.jsx(vt,{size:12}),o.jsx("span",{children:"⚠️ Error Details"})]}),t.has("error_info")&&o.jsxs("div",{className:"section-content",style:{color:"#fca5a5"},children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Source:"})," ",((S=e.data)==null?void 0:S.source)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Error Type:"})," ",((L=e.data)==null?void 0:L.error_type)||"unknown"]}),o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Message:"})," ",((N=e.data)==null?void 0:N.error)||"No error message"]}),((W=e.data)==null?void 0:W.context)&&o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Context:"})," ",e.data.context]}),((E=e.data)==null?void 0:E.traceback)&&o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Stack Trace:"}),o.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"400px",whiteSpace:"pre-wrap",wordBreak:"break-word",color:"#fca5a5"},children:e.data.traceback})]})]})]}),e.event_type==="state_change"&&((O=e.data)==null?void 0:O.state_delta)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("state_delta"),children:[t.has("state_delta")?o.jsx(Ct,{size:12}):o.jsx(vt,{size:12}),o.jsxs("span",{children:["State Changes (",Object.keys(e.data.state_delta).length,")"]})]}),t.has("state_delta")&&o.jsx("div",{className:"section-content",children:Object.entries(e.data.state_delta).map(([M,$])=>o.jsxs("div",{className:"state-delta-item",children:[o.jsx("div",{className:"state-delta-key",children:M}),o.jsx("pre",{className:"state-delta-value",children:typeof $=="string"?$:JSON.stringify($,null,2)})]},M))})]}),e.event_type==="compaction"&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("compaction_info"),children:[t.has("compaction_info")?o.jsx(Ct,{size:12}):o.jsx(vt,{size:12}),o.jsx("span",{children:"📦 Compaction Details"})]}),t.has("compaction_info")&&o.jsxs("div",{className:"section-content",children:[o.jsxs("div",{style:{marginBottom:"12px",padding:"8px",background:"rgba(147, 51, 234, 0.1)",borderRadius:"4px",border:"1px solid rgba(147, 51, 234, 0.3)"},children:[o.jsx("div",{style:{fontSize:"11px",color:"#a855f7",marginBottom:"4px",fontWeight:600},children:"Event Compaction Occurred"}),o.jsx("div",{style:{fontSize:"12px",color:"#e4e4e7"},children:"ADK has summarized older events to manage context window limits."})]}),((F=e.data)==null?void 0:F.start_timestamp)&&((K=e.data)==null?void 0:K.end_timestamp)&&o.jsxs("div",{style:{marginBottom:"8px"},children:[o.jsx("strong",{children:"Time Range Compacted:"})," ",new Date(e.data.start_timestamp*1e3).toLocaleTimeString()," - ",new Date(e.data.end_timestamp*1e3).toLocaleTimeString()]}),((A=e.data)==null?void 0:A.summary_preview)&&o.jsxs("div",{children:[o.jsx("strong",{children:"Summary Preview:"}),o.jsx("pre",{style:{marginTop:"8px",padding:"12px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"11px",overflow:"auto",maxHeight:"300px",whiteSpace:"pre-wrap",wordBreak:"break-word",border:"1px solid #27272a"},children:e.data.summary_preview})]})]})]}),r&&o.jsx(I5,{content:r,onClose:()=>i(null)})]})}function I5({content:e,onClose:t}){return o.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.8)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2e3},onClick:t,children:o.jsxs("div",{style:{backgroundColor:"#1a1a1e",borderRadius:"8px",border:"1px solid #3f3f46",width:"90%",maxWidth:"1200px",height:"85%",display:"flex",flexDirection:"column",overflow:"hidden"},onClick:n=>n.stopPropagation(),children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx(Dr,{size:16}),o.jsx("span",{style:{fontWeight:600},children:"String Content"}),o.jsxs("span",{style:{color:"#71717a",fontSize:"12px"},children:["(",e.length," chars)"]})]}),o.jsx("button",{onClick:t,style:{background:"none",border:"none",color:"#a1a1aa",cursor:"pointer",padding:"4px",display:"flex",alignItems:"center"},children:o.jsx(Wr,{size:18})})]}),o.jsx("div",{style:{flex:1,overflow:"auto",padding:"20px"},children:o.jsx("pre",{style:{fontSize:"12px",lineHeight:"1.5",color:"#e4e4e7",whiteSpace:"pre-wrap",wordBreak:"break-word",fontFamily:'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',margin:0},children:e})}),o.jsx("div",{style:{padding:"8px 16px",borderTop:"1px solid #3f3f46",backgroundColor:"#27272a",display:"flex",justifyContent:"flex-end",gap:"8px"},children:o.jsxs("button",{onClick:()=>navigator.clipboard.writeText(e),style:{background:"#3f3f46",border:"none",borderRadius:"4px",padding:"6px 12px",color:"#e4e4e7",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",fontSize:"12px"},children:[o.jsx(is,{size:12}),"Copy"]})})]})})}function O5({content:e,title:t,onClose:n}){return o.jsxs("div",{className:"modal-overlay",onClick:n,children:[o.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[o.jsxs("div",{className:"modal-header",children:[o.jsx("h3",{children:t}),o.jsx("button",{className:"modal-close",onClick:n,children:"×"})]}),o.jsx("div",{className:"modal-body markdown-content",children:o.jsx(m1,{children:e})})]}),o.jsx("style",{children:`
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
      `})]})}function $5({events:e,selectedEventIndex:t,project:n}){const[r,i]=k.useState(null),s=k.useMemo(()=>{var u;const l={};return(u=n==null?void 0:n.app)!=null&&u.state_keys&&n.app.state_keys.forEach(d=>{l[d.name]={value:void 0,timestamp:null,defined:!0,description:d.description,type:d.type}}),n!=null&&n.agents&&n.agents.forEach(d=>{if(d.type==="LlmAgent"&&d.output_key){const p=d.output_key;l[p]||(l[p]={value:void 0,timestamp:null,defined:!0,description:`Output from ${d.name}`,type:"string"})}}),(t!==null?e.slice(0,t+1):e).filter(d=>d.event_type==="state_change").forEach(d=>{var p;(p=d.data)!=null&&p.state_delta&&Object.entries(d.data.state_delta).forEach(([f,h])=>{var m;l[f]={...l[f],value:h,timestamp:d.timestamp,defined:((m=l[f])==null?void 0:m.defined)??!1}})}),l},[e,t,n]),a=Object.entries(s);return o.jsxs(o.Fragment,{children:[r&&o.jsx(O5,{content:r.content,title:r.title,onClose:()=>i(null)}),o.jsxs("div",{className:"state-snapshot",children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"state-header",children:t!==null?`State after event #${t}`:e.length>0?"State at end of run":"Defined State Keys"}),a.length===0?o.jsx("div",{className:"state-empty",children:"No state keys defined"}):a.map(([l,{value:c,timestamp:u,defined:d,description:p,type:f}])=>o.jsxs("div",{className:`state-entry ${c===void 0?"unset":""}`,children:[o.jsxs("div",{className:"state-key",children:[l,f&&o.jsxs("span",{className:"state-type",children:["(",f,")"]})]}),o.jsx("div",{className:"state-value",onClick:()=>{if(c!==void 0){const h=typeof c=="string"?c:JSON.stringify(c,null,2);i({content:h,title:l})}},style:{cursor:c!==void 0?"pointer":"default"},title:c!==void 0?"Click to view in markdown viewer":void 0,children:c===void 0?"(not set)":typeof c=="string"?c:JSON.stringify(c,null,2)}),p&&o.jsx("div",{className:"state-desc",children:p}),u&&o.jsx("div",{className:"state-time",children:new Date(u*1e3).toLocaleTimeString()})]},l))]})]})}function D5({project:e,sessionId:t}){const[n,r]=k.useState([]),[i,s]=k.useState(!1),[a,l]=k.useState(null),[c,u]=k.useState(null),[d,p]=k.useState(null);k.useEffect(()=>{if(!(e!=null&&e.id)||!t){r([]);return}(async()=>{s(!0),l(null);try{const _=await Zy(e.id,t);r(_)}catch(_){l(_.message||"Failed to load artifacts"),r([])}finally{s(!1)}})()},[e==null?void 0:e.id,t]);const f=b=>b===null?"":b<1024?`${b} B`:b<1024*1024?`${(b/1024).toFixed(1)} KB`:`${(b/(1024*1024)).toFixed(1)} MB`,h=b=>{if(!(e!=null&&e.id)||!t)return;const _=ta(e.id,t,b),g=document.createElement("a");g.href=_,g.download=b,document.body.appendChild(g),g.click(),document.body.removeChild(g)},m=b=>{if(!(!(e!=null&&e.id)||!t)&&b.is_image){const _=ta(e.id,t,b.filename);p(_)}};return o.jsxs(o.Fragment,{children:[d&&o.jsx("div",{className:"artifact-image-modal",onClick:()=>p(null),style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e4,cursor:"pointer"},children:o.jsxs("div",{onClick:b=>b.stopPropagation(),style:{maxWidth:"90vw",maxHeight:"90vh",position:"relative"},children:[o.jsx("button",{onClick:()=>p(null),style:{position:"absolute",top:-40,right:0,background:"transparent",border:"none",color:"#fff",cursor:"pointer",padding:8},children:o.jsx(Wr,{size:24})}),o.jsx("img",{src:d,alt:"Artifact preview",style:{maxWidth:"90vw",maxHeight:"85vh",objectFit:"contain",borderRadius:8}})]})}),o.jsxs("div",{className:"artifacts-panel",children:[o.jsx("style",{children:`
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
        `}),o.jsx("div",{className:"artifacts-header",children:t?"Session Artifacts":"No Session Selected"}),i?o.jsxs("div",{className:"artifacts-loading",children:[o.jsx(Zt,{size:16,className:"spin",style:{marginBottom:8}}),o.jsx("div",{children:"Loading artifacts..."})]}):a?o.jsx("div",{className:"artifacts-error",children:a}):t?n.length===0?o.jsxs("div",{className:"artifacts-empty",children:[o.jsx(La,{size:24,style:{marginBottom:8,opacity:.5}}),o.jsx("div",{children:"No artifacts in this session"}),o.jsx("div",{style:{fontSize:10,marginTop:4,color:"#52525b"},children:"Use tool_context.save_artifact() to save artifacts"})]}):n.map(b=>o.jsxs("div",{className:"artifact-item",children:[o.jsx("div",{className:`artifact-icon ${b.is_image?"image":""}`,children:b.is_image?o.jsx(b_,{size:16}):o.jsx(x_,{size:16})}),o.jsxs("div",{className:"artifact-info",children:[o.jsx("div",{className:"artifact-name",title:b.filename,children:b.filename}),o.jsxs("div",{className:"artifact-meta",children:[b.mime_type||"unknown type",b.size!==null&&` • ${f(b.size)}`]})]}),o.jsxs("div",{className:"artifact-actions",children:[b.is_image&&o.jsx("button",{className:"artifact-btn",title:"Preview",onClick:()=>m(b),children:o.jsx(Dr,{size:14})}),o.jsx("button",{className:"artifact-btn",title:"Download",onClick:()=>h(b.filename),children:o.jsx(Li,{size:14})})]}),b.is_image&&c===b.filename&&(e==null?void 0:e.id)&&t&&o.jsx("div",{className:"artifact-preview",children:o.jsx("img",{src:ta(e.id,t,b.filename),alt:b.filename})})]},b.filename)):o.jsxs("div",{className:"artifacts-empty",children:[o.jsx(La,{size:24,style:{marginBottom:8,opacity:.5}}),o.jsx("div",{children:"Start a session to see artifacts"})]})]})]})}function Nc(e){if(!e)return{text:"",isError:!1};if(e.success===!1)return{text:e.error||"Unknown error",isError:!0};let t=e.result||e;if(typeof t=="string")try{const n=t.replace(/'/g,'"').replace(/True/g,"true").replace(/False/g,"false").replace(/None/g,"null");t=JSON.parse(n)}catch{return{text:t,isError:!1}}return t.content&&Array.isArray(t.content)?{text:t.content.filter(r=>r.type==="text").map(r=>r.text).join(`
`),isError:t.isError===!0}:{text:typeof t=="string"?t:JSON.stringify(t,null,2),isError:!1}}function gg(e,t){if(!t||!t.trim())return e;const n=t.trim();let r=e;try{r=JSON.parse(e)}catch{}if(n.startsWith("js:")){const i=n.slice(3).trim();try{const a=new Function("value","data",`return ${i}`)(e,r);return typeof a=="string"?a:JSON.stringify(a,null,2)}catch(s){return`[JS error: ${s}]`}}if(n.startsWith("."))try{const i=n.slice(1).split(".").filter(Boolean);let s=r;for(const a of i){const l=a.match(/^(\w+)?\[(\d+)\]$/);l?(l[1]&&(s=s[l[1]]),s=s[parseInt(l[2])]):s=s[a]}return s==null?"[No match]":typeof s=="string"?s:JSON.stringify(s,null,2)}catch(i){return`[Path error: ${i.message}]`}try{const s=new Function("value","data",`return ${n}`)(e,r);return typeof s=="string"?s:JSON.stringify(s,null,2)}catch(i){return`[Transform error: ${i.message}]`}}function F5({project:e,selectedEventIndex:t,sandboxMode:n}){var fe,ge;const{watches:r,updateWatch:i,addWatch:s,removeWatch:a,runEvents:l}=gt(),[c,u]=k.useState(!1),[d,p]=k.useState(null),[f,h]=k.useState({}),[m,b]=k.useState(new Set),[_,g]=k.useState(""),[x,y]=k.useState(""),[j,T]=k.useState({}),[S,L]=k.useState(""),[N,W]=k.useState([]),[E,O]=k.useState(null),[F,K]=k.useState(null),[A,M]=k.useState(!1);k.useEffect(()=>{Gd().then(W).catch(console.error)},[]);const $=k.useMemo(()=>{const Z=e.mcp_servers||[],U=new Set(Z.map(Q=>Q.name)),R=N.filter(Q=>!U.has(Q.name));return[...Z,...R]},[e.mcp_servers,N]),C=k.useCallback(async Z=>{if(!(f[Z]||m.has(Z))){b(U=>new Set([...U,Z]));try{const U=await Ce(`/projects/${e.id}/mcp-servers/${encodeURIComponent(Z)}/test-connection`,{method:"POST"});U.success&&h(R=>({...R,[Z]:U.tools}))}catch(U){console.error("Failed to load tools:",U)}finally{b(U=>{const R=new Set(U);return R.delete(Z),R})}}},[e.id,f,m]);k.useEffect(()=>{var Q;if(d)return;if(!_||!x){T({});return}const U=(f[_]||[]).find(X=>X.name===x);if(!((Q=U==null?void 0:U.parameters)!=null&&Q.properties)){T({});return}const R={};Object.entries(U.parameters.properties).forEach(([X,oe])=>{oe.type==="string"?R[X]=oe.default||"":oe.type==="number"||oe.type==="integer"?R[X]=oe.default||0:oe.type==="boolean"?R[X]=oe.default||!1:R[X]=oe.default||null}),T(R)},[_,x,f,d]);const P=()=>{p(null),g(""),y(""),T({}),L(""),O(null),K(null),u(!0)},I=Z=>{if(p(Z.id),g(Z.serverName),y(Z.toolName),T({...Z.args}),L(Z.transform||""),Z.result){const{text:U}=Nc(Z.result);O(U),K(null)}else O(null),K(null);f[Z.serverName]||C(Z.serverName),u(!0)},w=async()=>{var U;if(!_||!x)return;M(!0),K(null);const Z=((U=e.app)==null?void 0:U.id)||`app_${e.id}`;try{const R=await Ce(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:_,tool_name:x,arguments:j,sandbox_mode:n,app_id:n?Z:void 0})}),{text:Q,isError:X}=Nc(R);X?(K(Q),O(null)):(O(Q),K(null))}catch(R){K(String(R)),O(null)}finally{M(!1)}},B=k.useMemo(()=>E?!S||!S.trim()?E:gg(E,S):null,[E,S]),G=()=>{if(!(!_||!x)){if(d){i(d,{serverName:_,toolName:x,args:{...j},transform:S||void 0});const Z=r.find(U=>U.id===d);Z&&z({...Z,serverName:_,toolName:x,args:j,transform:S||void 0,history:Z.history||[]})}else{const Z={id:`watch-${Date.now()}`,serverName:_,toolName:x,args:{...j},transform:S||void 0,history:[]};s(Z),z(Z)}u(!1)}},v=Z=>{a(Z)},z=k.useCallback(async(Z,U)=>{var oe;i(Z.id,{isLoading:!0,error:void 0});const R=U??l.length-1,Q=Date.now(),X=((oe=e.app)==null?void 0:oe.id)||`app_${e.id}`;try{const ve=await Ce(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:Z.serverName,tool_name:Z.toolName,arguments:Z.args,sandbox_mode:n,app_id:n?X:void 0})}),J={eventIndex:R,timestamp:Q,result:ve},D=[...Z.history||[],J];i(Z.id,{result:ve,isLoading:!1,lastRun:Q,history:D})}catch(ve){const J={eventIndex:R,timestamp:Q,error:String(ve)},D=[...Z.history||[],J];i(Z.id,{error:String(ve),isLoading:!1,lastRun:Q,history:D})}},[e.id,(fe=e.app)==null?void 0:fe.id,i,l.length,n]),V=()=>{r.forEach(Z=>z(Z))},ie=k.useMemo(()=>!_||!x?null:(f[_]||[]).find(U=>U.name===x),[_,x,f]);return o.jsxs("div",{className:"tool-watch-panel",children:[o.jsxs("div",{className:"watch-header",children:[o.jsx(Dr,{size:14}),o.jsx("span",{children:"Tool Watch"}),o.jsx("span",{className:"watch-auto-badge",title:"Watches auto-refresh on every event",children:"⚡ Auto"}),o.jsxs("div",{className:"watch-actions",children:[o.jsx("button",{className:"watch-btn",onClick:V,title:"Refresh all",children:o.jsx(Zt,{size:12})}),o.jsx("button",{className:"watch-btn",onClick:P,title:"Add watch",children:o.jsx(Qe,{size:12})})]})]}),r.length===0?o.jsxs("div",{className:"watch-empty",children:[o.jsx(Dr,{size:20,style:{opacity:.3}}),o.jsx("span",{children:"No watch expressions"}),o.jsxs("button",{className:"add-watch-btn",onClick:P,children:[o.jsx(Qe,{size:12})," Add Tool Watch"]})]}):o.jsx("div",{className:"watch-list",children:r.map(Z=>{let U=Z.result,R=Z.error;if(t!==null&&Z.history&&Z.history.length>0){const J=Z.history.filter(D=>D.eventIndex<=t);if(J.length>0){const D=J[J.length-1];U=D.result,R=D.error}else U=void 0,R=void 0}const{text:Q,isError:X}=U?Nc(U):{text:"",isError:!1},oe=U?gg(Q,Z.transform):"",ve=R||X;return o.jsxs("div",{className:`watch-item ${ve?"error":""}`,children:[o.jsxs("div",{className:"watch-item-header",children:[o.jsxs("span",{className:"watch-expr",children:[o.jsx("span",{className:"watch-server",children:Z.serverName}),o.jsx("span",{className:"watch-tool",children:Z.toolName}),Object.keys(Z.args).length>0&&o.jsxs("span",{className:"watch-args",children:["(",Object.entries(Z.args).map(([J,D])=>`${J}=${JSON.stringify(D)}`).join(", "),")"]}),t!==null&&o.jsxs("span",{className:"watch-time-indicator",children:["@",t]})]}),o.jsxs("div",{className:"watch-item-actions",children:[o.jsx("button",{onClick:()=>I(Z),title:"Edit watch",children:o.jsx(pn,{size:10})}),o.jsx("button",{onClick:()=>z(Z),title:"Refresh",children:Z.isLoading?o.jsx(Zt,{size:10,className:"spin"}):o.jsx(Zt,{size:10})}),o.jsx("button",{onClick:()=>v(Z.id),title:"Remove",children:o.jsx(Ue,{size:10})})]})]}),o.jsx("div",{className:"watch-result",children:Z.isLoading?o.jsx("span",{className:"loading",children:"Loading..."}):R?o.jsx("span",{className:"error",children:R}):U?o.jsx("pre",{className:X?"error-text":"",children:oe}):o.jsx("span",{className:"no-result",children:t!==null?"No data at this event":"Not yet run"})})]},Z.id)})}),c&&o.jsx("div",{className:"watch-dialog-overlay",onClick:()=>u(!1),children:o.jsxs("div",{className:"watch-dialog",onClick:Z=>Z.stopPropagation(),children:[o.jsxs("div",{className:"dialog-header",children:[o.jsx("span",{children:d?"Edit Watch":"Add Tool Watch"}),o.jsx("button",{onClick:()=>u(!1),children:o.jsx(Wr,{size:14})})]}),o.jsxs("div",{className:"dialog-body",children:[o.jsxs("div",{className:"form-row",children:[o.jsx("label",{children:"MCP Server"}),o.jsxs("select",{value:_,onChange:Z=>{g(Z.target.value),d||y(""),Z.target.value&&C(Z.target.value)},children:[o.jsx("option",{value:"",children:"Select server..."}),$.map(Z=>o.jsx("option",{value:Z.name,children:Z.name},Z.name))]})]}),o.jsxs("div",{className:"form-row",children:[o.jsx("label",{children:"Tool"}),o.jsxs("select",{value:x,onChange:Z=>y(Z.target.value),disabled:!_||m.has(_),children:[o.jsx("option",{value:"",children:m.has(_)?"Loading tools...":"Select tool..."}),(f[_]||[]).map(Z=>o.jsx("option",{value:Z.name,children:Z.name},Z.name))]})]}),(ie==null?void 0:ie.description)&&o.jsx("div",{className:"tool-desc",children:ie.description}),((ge=ie==null?void 0:ie.parameters)==null?void 0:ge.properties)&&Object.keys(ie.parameters.properties).length>0&&o.jsxs("div",{className:"tool-args",children:[o.jsx("label",{children:"Arguments"}),Object.entries(ie.parameters.properties).map(([Z,U])=>{var R,Q;return o.jsxs("div",{className:"arg-row",children:[o.jsxs("span",{className:"arg-name",children:[Z,((R=ie.parameters.required)==null?void 0:R.includes(Z))&&o.jsx("span",{className:"required",children:"*"})]}),o.jsx("input",{type:U.type==="number"||U.type==="integer"?"number":"text",value:typeof j[Z]=="object"?JSON.stringify(j[Z]):j[Z]??"",onChange:X=>T(oe=>({...oe,[Z]:X.target.value})),placeholder:((Q=U.description)==null?void 0:Q.slice(0,40))||Z})]},Z)})]}),_&&x&&o.jsxs("div",{className:"test-section",children:[o.jsxs("div",{className:"test-header",children:[o.jsx("label",{children:"Test & Preview"}),o.jsxs("button",{className:"test-btn",onClick:w,disabled:A,children:[A?o.jsx(Zt,{size:12,className:"spin"}):o.jsx(hr,{size:12}),A?"Running...":"Test Run"]})]}),F&&o.jsxs("div",{className:"test-result error",children:[o.jsx("span",{className:"test-label",children:"Error:"}),o.jsx("pre",{children:F})]}),E&&o.jsxs("div",{className:"test-result",children:[o.jsx("span",{className:"test-label",children:"Raw Result:"}),o.jsx("pre",{children:E})]})]}),o.jsxs("div",{className:"form-row transform-row",children:[o.jsx("label",{children:"Transform (optional)"}),o.jsx("input",{type:"text",value:S,onChange:Z=>L(Z.target.value),placeholder:"e.g., .items[0].name or .content[].text"}),o.jsxs("div",{className:"transform-hints",children:[o.jsx("span",{className:"hint-title",children:"Path:"}),o.jsx("code",{onClick:()=>L(".items[0].name"),children:".items[0].name"}),o.jsx("code",{onClick:()=>L(".content[0].text"),children:".content[0].text"}),o.jsx("code",{onClick:()=>L(".result.data"),children:".result.data"}),o.jsx("span",{className:"hint-title",children:"JS:"}),o.jsx("code",{onClick:()=>L("js:value.split('\\n')[0]"),children:"js:value.split('\\n')[0]"}),o.jsx("code",{onClick:()=>L("js:data.items?.length"),children:"js:data.items?.length"})]})]}),E&&S&&o.jsxs("div",{className:"transform-preview",children:[o.jsx("span",{className:"test-label",children:"Transform Preview:"}),o.jsx("pre",{className:B!=null&&B.startsWith("[Transform error")?"error":"",children:B})]})]}),o.jsxs("div",{className:"dialog-footer",children:[o.jsx("button",{className:"cancel-btn",onClick:()=>u(!1),children:"Cancel"}),o.jsx("button",{className:"add-btn",onClick:G,disabled:!_||!x,children:d?"Save Changes":"Add Watch"})]})]})})]})}function B5(){var Up,Wp;const{project:e,updateProject:t,isRunning:n,setIsRunning:r,runEvents:i,addRunEvent:s,clearRunEvents:a,clearWatchHistories:l,runAgentId:c,setRunAgentId:u,watches:d,updateWatch:p,currentSessionId:f,setCurrentSessionId:h}=gt(),[m,b]=k.useState(""),[_,g]=k.useState(null),[x,y]=k.useState(null),[j,T]=k.useState(null),[S,L]=k.useState(""),[N,W]=k.useState(new Set(["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_start","callback_end","callback_error"])),[E,O]=k.useState(()=>{const H=localStorage.getItem("sandboxMode");return H!==null?H==="true":!0});k.useEffect(()=>{localStorage.setItem("sandboxMode",String(E))},[E]);const[F,K]=k.useState(null),[A,M]=k.useState(!1),[$,C]=k.useState({}),[P,I]=k.useState(!1),[w,B]=k.useState("agent"),G=k.useRef(null),v=k.useRef(!0),z=k.useRef(0),[V,ie]=k.useState(!0),[fe,ge]=k.useState(!0),[Z,U]=k.useState(!1),[R,Q]=k.useState(!1),[X,oe]=k.useState(360),[ve,J]=k.useState(!1),[D,Y]=k.useState(!1),[ne,te]=k.useState(!1),xe=k.useMemo(()=>n?"running":i.length===0?"idle":ne?"cancelled":i.slice(-5).some(de=>{var pe,ze,Me,dt,It;if((pe=de.data)!=null&&pe.error||de.event_type==="callback_error"||de.event_type==="agent_end"&&((ze=de.data)!=null&&ze.error)||mg(de).includes("[ERROR]"))return!0;if(de.event_type==="model_response"){const Nn=(((dt=(Me=de.data)==null?void 0:Me.response_content)==null?void 0:dt.parts)||((It=de.data)==null?void 0:It.parts)||[]).find(Hr=>(Hr==null?void 0:Hr.type)==="text");if(Nn!=null&&Nn.text&&(Nn.text.includes("[ERROR]")||Nn.text.toLowerCase().includes("error:")||Nn.text.toLowerCase().includes("exception:")))return!0}return!1})?"failed":"completed",[n,i,ne]),[q,re]=k.useState(!1),[ae,be]=k.useState([]),ee=k.useRef(null);k.useEffect(()=>{if(!e)return;const H=`promptHistory_${e.id}`,se=localStorage.getItem(H);if(se)try{const de=JSON.parse(se),he=Object.entries(de).map(([pe,ze])=>({prompt:pe,count:ze})).sort((pe,ze)=>ze.count-pe.count);be(he)}catch(de){console.error("Failed to parse prompt history:",de)}else be([])},[e==null?void 0:e.id]);const le=k.useCallback(H=>{const se=H.trim();if(!se||!e)return;const de=`promptHistory_${e.id}`,he=localStorage.getItem(de),pe=he?JSON.parse(he):{};pe[se]=(pe[se]||0)+1,localStorage.setItem(de,JSON.stringify(pe));const ze=Object.entries(pe).map(([Me,dt])=>({prompt:Me,count:dt})).sort((Me,dt)=>dt.count-Me.count);be(ze)},[e]),we=k.useMemo(()=>{const H=m.toLowerCase().trim();return ae.filter(se=>!H||se.prompt.toLowerCase().includes(H)).slice(0,10)},[ae,m]),[_e,je]=k.useState([60,80,100,80,1]),[Ae,nt]=k.useState(null),ct=k.useRef(0),Ne=k.useRef(0),[rt,qe]=k.useState([]),[Vn,ut]=k.useState(null),[ds,Pp]=k.useState(!1),Lp=k.useRef(0),Rp=k.useCallback(async(H,se)=>{var ze;if(!e)return;p(H.id,{isLoading:!0,error:void 0});const de=se??i.length-1,he=Date.now(),pe=((ze=e.app)==null?void 0:ze.id)||`app_${e.id}`;try{const Me=await Ce(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:H.serverName,tool_name:H.toolName,arguments:H.args,sandbox_mode:E,app_id:E?pe:void 0})}),dt={eventIndex:de,timestamp:he,result:Me},It=[...H.history||[],dt];p(H.id,{result:Me,isLoading:!1,lastRun:he,history:It})}catch(Me){const dt={eventIndex:de,timestamp:he,error:String(Me)},It=[...H.history||[],dt];p(H.id,{error:String(Me),isLoading:!1,lastRun:he,history:It})}},[e==null?void 0:e.id,(Up=e==null?void 0:e.app)==null?void 0:Up.id,p,i.length,E]);k.useEffect(()=>{if(i.length>Lp.current&&d.length>0){const H=i.length-1;d.forEach(se=>{se.isLoading||Rp(se,H)})}Lp.current=i.length},[i.length,d,Rp]),k.useEffect(()=>{c!==null&&(Ip(c),u(null))},[c,u]);const[Oi,Ip]=k.useState(null),ps=k.useRef(null),jl=k.useRef(null);k.useEffect(()=>{if(!ve)return;const H=de=>{if(!jl.current)return;const pe=jl.current.getBoundingClientRect().right-de.clientX;oe(Math.min(600,Math.max(200,pe)))},se=()=>{J(!1)};return document.addEventListener("mousemove",H),document.addEventListener("mouseup",se),()=>{document.removeEventListener("mousemove",H),document.removeEventListener("mouseup",se)}},[ve]),k.useEffect(()=>{if(Ae===null)return;const H=de=>{const he=de.clientX-ct.current,pe=Math.max(40,Ne.current+he);je(ze=>{const Me=[...ze];return Me[Ae]=pe,Me})},se=()=>{nt(null)};return document.addEventListener("mousemove",H),document.addEventListener("mouseup",se),document.body.style.cursor="col-resize",document.body.style.userSelect="none",()=>{document.removeEventListener("mousemove",H),document.removeEventListener("mouseup",se),document.body.style.cursor="",document.body.style.userSelect=""}},[Ae]);const fs=(H,se)=>{se.preventDefault(),ct.current=se.clientX,Ne.current=_e[H],nt(H)},Op=_e.map((H,se)=>se===_e.length-1?`minmax(${H}px, 1fr)`:`${H}px`).join(" "),Y1=k.useMemo(()=>i.length===0?{min:0,max:0}:{min:i[0].timestamp,max:i[i.length-1].timestamp},[i]),Rt=k.useMemo(()=>i.filter((H,se)=>{var de,he,pe;if(j&&(H.timestamp<j[0]||H.timestamp>j[1])||N.size>0&&!N.has(H.event_type))return!1;if(V&&H.event_type==="model_response"){const ze=((he=(de=H.data)==null?void 0:de.response_content)==null?void 0:he.parts)||((pe=H.data)==null?void 0:pe.parts)||[],Me=ze.some(It=>It.type==="function_call"),dt=ze.some(It=>It.type==="text");if(!Me&&!dt)return!1}return!(S&&!JSON.stringify(H).toLowerCase().includes(S.toLowerCase()))}),[i,j,N,S,V]),hs=k.useMemo(()=>{var he;let H=0,se=0;const de=x!==null?x+1:i.length;for(let pe=0;pe<de;pe++){const ze=i[pe];ze.event_type==="model_response"&&((he=ze.data)!=null&&he.token_counts)&&(H+=ze.data.token_counts.input||0,se+=ze.data.token_counts.output||0)}return{input:H,output:se,total:H+se}},[i,x]),$p=x!==null?i[x]:null;k.useEffect(()=>{if(!e){qe([]);return}(async()=>{Pp(!0);try{const se=await Su(e.id);qe(se)}catch(se){console.error("Failed to load sessions:",se),qe([])}finally{Pp(!1)}})()},[e]);const Sl=k.useCallback(async H=>{if(!e){ut(null);return}if(!H){a(),l(),h(null),ut(null),y(null),T(null);return}try{const se=await Xy(e.id,H);a(),l(),h(se.id),ut(H),y(null),T(null);for(const de of se.events)s(de)}catch(se){alert(`Failed to load session: ${se.message||"Unknown error"}`)}},[e,a,l,h,s]);k.useEffect(()=>{if(!e||rt.length===0||ds)return;const se=new URLSearchParams(window.location.search).get("session");if(se)if(rt.some(he=>he.id===se)){Sl(se);const he=window.location.pathname;window.history.replaceState({},"",he)}else console.warn(`Session ${se} not found in available sessions`)},[e,rt,ds,Sl]),k.useEffect(()=>{n&&ps.current&&(ps.current.scrollTop=ps.current.scrollHeight)},[i.length,n]);const $i=k.useCallback(H=>{const se=H??m;if(!e||!se.trim()||n)return;Y(!0),le(se),re(!1),b(se),_&&(_.close(),g(null)),a(),l(),ut(null),h(null),r(!0),te(!1),y(null),T(null);const de=rv(e.id);g(de),de.onopen=()=>{de.send(JSON.stringify({message:se,agent_id:Oi||void 0,sandbox_mode:E}))},de.onmessage=he=>{var ze;const pe=JSON.parse(he.data);if(pe.event_type==="agent_start"&&((ze=pe.data)!=null&&ze.session_id)){const Me=pe.data.session_id;pe.data.session_reused,h(Me),Me&&rt.some(dt=>dt.id===Me)&&ut(Me)}else if(pe.type==="session_started")h(pe.session_id),pe.session_id&&rt.some(Me=>Me.id===pe.session_id)&&ut(pe.session_id);else if(pe.type==="sandbox_starting")s({timestamp:Date.now()/1e3,event_type:"agent_start",agent_name:"sandbox",data:{message:"Starting Docker sandbox..."}});else if(pe.type==="sandbox_started")s({timestamp:Date.now()/1e3,event_type:"agent_start",agent_name:"sandbox",data:{message:`Sandbox started (ID: ${pe.sandbox_id})`}});else if(pe.type==="sandbox_response")s({timestamp:Date.now()/1e3,event_type:"model_response",agent_name:"sandbox",data:pe.data});else if(pe.event_type==="approval_required"||pe.type==="network_request"&&pe.event_type==="approval_required"){const Me={id:pe.id,method:pe.method||"GET",url:pe.url,host:pe.host,source:pe.source||"agent",headers:pe.headers||{},timeout:pe.timeout||30};K(Me),s({timestamp:Date.now()/1e3,event_type:"callback_start",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`⚠️ Network request to ${pe.host} requires approval`,host:pe.host,url:pe.url}})}else pe.type==="completed"?(r(!1),de.close()):pe.type==="error"?(r(!1),s({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:pe.error}})):s(pe)},de.onerror=he=>{console.error("WebSocket error:",he),r(!1),s({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:"Connection error. The server may have timed out or the LLM request failed. Try again or check if your model server is running.",retryable:!0}})},de.onclose=he=>{n&&(r(!1),he.code!==1e3&&he.code!==1005&&s({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:`Connection closed unexpectedly (code: ${he.code}). This may be due to a timeout or server error. Try increasing the request timeout in your model configuration.`,retryable:!0}}))}},[e,m,n,_,a,l,r,s,Oi,h,E,le]),Q1=k.useCallback(()=>{_==null||_.close(),r(!1),te(!0)},[_,r]),X1=k.useCallback(async(H,se,de)=>{var It,Nl,Nn,Hr,Vp,Hp,qp,Jp,Kp,Gp,Yp,Qp,Xp,Zp,ef,tf,nf,rf,of,sf,af,lf,cf,uf,df,pf;if(!F||!e)return;const he=((It=e.app)==null?void 0:It.id)||e.id,pe=H?"allow_pattern":"allow_once",ze=H||F.host,Me=se||"exact",dt=de?`/sandbox/${he}/approval?project_id=${e.id}`:`/sandbox/${he}/approval`;try{if(await Ce(dt,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:F.id,action:pe,pattern:ze,pattern_type:Me,persist:de||!1})}),de&&pe==="allow_pattern"){const El=((Hr=(Nn=(Nl=e.app)==null?void 0:Nl.sandbox)==null?void 0:Nn.allowlist)==null?void 0:Hr.user)||[],d0={id:`pattern_${Date.now().toString(36)}`,pattern:ze,pattern_type:Me,source:"approved",added_at:new Date().toISOString()};t({app:{...e.app,sandbox:{...(Vp=e.app)==null?void 0:Vp.sandbox,enabled:((qp=(Hp=e.app)==null?void 0:Hp.sandbox)==null?void 0:qp.enabled)??!1,allow_all_network:((Kp=(Jp=e.app)==null?void 0:Jp.sandbox)==null?void 0:Kp.allow_all_network)??!1,allowlist:{auto:((Qp=(Yp=(Gp=e.app)==null?void 0:Gp.sandbox)==null?void 0:Yp.allowlist)==null?void 0:Qp.auto)||[],user:[...El,d0]},unknown_action:((Zp=(Xp=e.app)==null?void 0:Xp.sandbox)==null?void 0:Zp.unknown_action)??"ask",approval_timeout:((tf=(ef=e.app)==null?void 0:ef.sandbox)==null?void 0:tf.approval_timeout)??30,agent_memory_limit_mb:((rf=(nf=e.app)==null?void 0:nf.sandbox)==null?void 0:rf.agent_memory_limit_mb)??512,agent_cpu_limit:((sf=(of=e.app)==null?void 0:of.sandbox)==null?void 0:sf.agent_cpu_limit)??1,mcp_memory_limit_mb:((lf=(af=e.app)==null?void 0:af.sandbox)==null?void 0:lf.mcp_memory_limit_mb)??256,mcp_cpu_limit:((uf=(cf=e.app)==null?void 0:cf.sandbox)==null?void 0:uf.mcp_cpu_limit)??.5,run_timeout:((pf=(df=e.app)==null?void 0:df.sandbox)==null?void 0:pf.run_timeout)??3600}}})}s({timestamp:Date.now()/1e3,event_type:"callback_end",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`✅ Approved: ${ze}`,pattern:ze,action:pe}})}catch(El){console.error("Failed to approve:",El)}K(null)},[F,e,s,t]),Z1=k.useCallback(async()=>{var se;if(!F||!e)return;const H=((se=e.app)==null?void 0:se.id)||e.id;try{await Ce(`/sandbox/${H}/approval`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:F.id,action:"deny"})}),s({timestamp:Date.now()/1e3,event_type:"callback_end",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`❌ Denied: ${F.host}`,host:F.host,action:"deny"}})}catch(de){console.error("Failed to deny:",de)}K(null)},[F,e,s]),Di=k.useCallback(async(H=!0)=>{var de;if(!e)return;const se=((de=e.app)==null?void 0:de.id)||`app_${e.id}`;H&&I(!0);try{const[he,pe]=await Promise.all([Ce(`/sandbox/${se}/logs?container=agent&tail=500`).catch(()=>null),Ce(`/sandbox/${se}/logs?container=gateway&tail=500`).catch(()=>null)]);C({agent:(he==null?void 0:he.logs)||(he==null?void 0:he.error)||"No logs available",gateway:(pe==null?void 0:pe.logs)||(pe==null?void 0:pe.error)||"No logs available"})}catch(he){console.error("Failed to fetch logs:",he),C({agent:`Error fetching logs: ${he}`,gateway:`Error fetching logs: ${he}`})}finally{H&&I(!1)}},[e]),e0=k.useCallback(()=>{M(!0),Di()},[Di]);k.useEffect(()=>{if(!A||!G.current||P)return;const H=G.current,se=z.current,de=H.scrollHeight;setTimeout(()=>{if(G.current){if(v.current)G.current.scrollTop=G.current.scrollHeight;else if(se>0&&de>se){const he=de-se;G.current.scrollTop+=he}z.current=G.current.scrollHeight}},50)},[A,w,$,P]),k.useEffect(()=>{A&&(v.current=!0,z.current=0)},[A,w]);const t0=k.useCallback(()=>{if(!G.current)return;const H=G.current,de=H.scrollHeight-H.scrollTop-H.clientHeight<50;v.current=de},[]);k.useEffect(()=>{if(!A)return;const H=setInterval(()=>{Di(!1)},3e3);return()=>clearInterval(H)},[A,Di]),k.useEffect(()=>{const H=se=>{if((se.metaKey||se.ctrlKey)&&se.key==="Enter"){se.preventDefault(),$i();return}if(se.key==="ArrowDown"||se.key==="ArrowUp"){if(se.target instanceof HTMLInputElement||se.target instanceof HTMLTextAreaElement||(se.preventDefault(),Rt.length===0))return;if(se.key==="ArrowDown")if(x===null){const de=i.indexOf(Rt[0]);y(de)}else{const de=Rt.findIndex(he=>i.indexOf(he)===x);if(de<Rt.length-1){const he=i.indexOf(Rt[de+1]);y(he)}}else if(se.key==="ArrowUp")if(x===null){const de=i.indexOf(Rt[Rt.length-1]);y(de)}else{const de=Rt.findIndex(he=>i.indexOf(he)===x);if(de>0){const he=i.indexOf(Rt[de-1]);y(he)}}}};return window.addEventListener("keydown",H),()=>window.removeEventListener("keydown",H)},[$i,Rt,x,i]);const n0=k.useCallback(()=>{var pe;if(i.length===0)return;const H={version:1,exportedAt:new Date().toISOString(),projectId:e==null?void 0:e.id,projectName:e==null?void 0:e.name,agentId:Oi||((pe=e==null?void 0:e.app)==null?void 0:pe.root_agent_id),events:i},se=new Blob([JSON.stringify(H,null,2)],{type:"application/json"}),de=URL.createObjectURL(se),he=document.createElement("a");he.href=de,he.download=`run-${(e==null?void 0:e.name)||"export"}-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,document.body.appendChild(he),he.click(),document.body.removeChild(he),URL.revokeObjectURL(de)},[i,e,Oi]),r0=k.useCallback(async()=>{if(!f||!e){alert("No active session to save");return}try{const H=await Qy(f);if(H.success){alert(H.message||"Session saved to memory successfully");try{const se=await Su(e.id);qe(se)}catch{}}else alert(`Failed to save to memory: ${H.error||"Unknown error"}`)}catch(H){alert(`Error saving to memory: ${H.message||"Unknown error"}`)}},[f,e]),[i0,ms]=k.useState(!1),[o0,s0]=k.useState([]),[Fi,Dp]=k.useState(""),[Cl,a0]=k.useState("Test Case from Session"),[Fp,Bp]=k.useState(!1),l0=k.useCallback(async()=>{if(!f||!e){alert("No active session to create test case from");return}try{const H=await Ce(`/projects/${e.id}/eval-sets`);if(s0(H.eval_sets||[]),!H.eval_sets||H.eval_sets.length===0){confirm(`No evaluation sets found. Would you like to create one first?

Go to the Evals tab to create an evaluation set.`)&&(window.location.href=`/project/${e.id}/evals`);return}Dp(H.eval_sets[0].id),ms(!0)}catch(H){alert(`Error loading eval sets: ${H.message||"Unknown error"}`)}},[f,e]),c0=k.useCallback(async()=>{if(!f||!e||!Fi){alert("Please select an evaluation set");return}Bp(!0);try{const H=await Ce(`/projects/${e.id}/session-to-eval-case`,{method:"POST",body:JSON.stringify({session_id:f,eval_set_id:Fi,case_name:Cl})});ms(!1),alert(`Test case "${H.eval_case.name}" created successfully!

Token count: ${H.session_token_count.toLocaleString()} tokens

Go to the Evals tab to view and edit the test case.`)}catch(H){alert(`Error creating test case: ${H.message||"Unknown error"}`)}finally{Bp(!1)}},[f,e,Fi,Cl]),u0=k.useCallback(()=>{const H=document.createElement("input");H.type="file",H.accept=".json",H.onchange=async se=>{var he;const de=(he=se.target.files)==null?void 0:he[0];if(de)try{const pe=await de.text(),ze=JSON.parse(pe);if(!ze.events||!Array.isArray(ze.events)){alert("Invalid run file: missing events array");return}a(),l(),y(null),T(null),ze.events.forEach(Me=>{s(Me)})}catch(pe){alert(`Failed to load run file: ${pe}`)}},H.click()},[a,l,s]);return k.useEffect(()=>{if(x!==null){const H=document.querySelector(".event-row.selected");H==null||H.scrollIntoView({behavior:"smooth",block:"nearest"})}},[x]),e?o.jsxs("div",{className:`run-panel ${ve?"resizing":""}`,children:[o.jsx("style",{children:`
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
      `}),o.jsx(T5,{agents:e.agents,events:i,selectedEventIndex:x,isOpen:D,onOpenChange:Y,runState:xe}),o.jsxs("div",{className:"input-area",children:[o.jsxs("select",{className:"agent-selector",value:Oi||"",onChange:H=>Ip(H.target.value||null),disabled:n,title:"Select which agent to run",children:[o.jsx("option",{value:"",children:e.app.root_agent_id?`Root: ${((Wp=e.agents.find(H=>H.id===e.app.root_agent_id))==null?void 0:Wp.name)||e.app.root_agent_id}`:"No root agent"}),e.agents.filter(H=>H.id!==e.app.root_agent_id).map(H=>o.jsxs("option",{value:H.id,children:[H.name," (",H.type.replace("Agent",""),")"]},H.id))]}),o.jsxs("select",{className:"agent-selector",value:Vn||"",onChange:H=>Sl(H.target.value||null),disabled:n||ds,style:{minWidth:180},title:"Load a saved session",children:[o.jsx("option",{value:"",children:ds?"Loading...":"Load Session..."}),rt.map(H=>{const se=new Date(H.started_at*1e3),de=H.duration?`${H.duration.toFixed(1)}s`:"?";return o.jsxs("option",{value:H.id,children:[se.toLocaleString()," (",H.event_count," events, ",de,")"]},H.id)})]}),o.jsxs("div",{style:{position:"relative",flex:1,display:"flex"},children:[o.jsx("input",{ref:ee,type:"text",placeholder:"Enter your query...",value:m,onChange:H=>b(H.target.value),onFocus:()=>re(!0),onBlur:()=>setTimeout(()=>re(!1),150),onKeyDown:H=>{H.key==="Enter"&&!H.shiftKey?$i():H.key==="Escape"&&re(!1)},disabled:n,style:{flex:1}}),q&&we.length>0&&o.jsx("div",{style:{position:"absolute",top:"100%",left:0,right:0,background:"#18181b",border:"1px solid #3f3f46",borderRadius:"6px",marginTop:"4px",maxHeight:"240px",overflowY:"auto",zIndex:100,boxShadow:"0 4px 12px rgba(0,0,0,0.4)"},children:we.map((H,se)=>o.jsxs("div",{style:{padding:"8px 12px",fontSize:"12px",color:"#e4e4e7",cursor:"pointer",borderBottom:se<we.length-1?"1px solid #27272a":"none",display:"flex",justifyContent:"space-between",alignItems:"center"},onMouseDown:de=>{de.preventDefault(),$i(H.prompt)},onMouseEnter:de=>{de.currentTarget.style.background="#27272a"},onMouseLeave:de=>{de.currentTarget.style.background="transparent"},children:[o.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1,marginRight:"8px"},children:H.prompt}),o.jsxs("span",{style:{fontSize:"10px",color:"#71717a",flexShrink:0},children:["×",H.count]})]},se))})]}),n?o.jsxs("button",{className:"stop",onClick:Q1,children:[o.jsx(N_,{size:14}),"Stop"]}):o.jsxs("button",{onClick:()=>$i(),disabled:!m.trim(),children:[o.jsx(hr,{size:14}),"Run"]}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"4px",marginLeft:"12px",fontSize:"11px",color:E?"#22d3ee":"#71717a",cursor:"pointer"},title:"Run in isolated Docker container",children:[o.jsx("input",{type:"checkbox",checked:E,onChange:H=>O(H.target.checked),disabled:n,style:{accentColor:"#22d3ee"}}),"🐳 Sandbox"]}),E&&o.jsx("button",{onClick:e0,style:{background:"transparent",border:"1px solid #3f3f46",borderRadius:"4px",padding:"2px 8px",marginLeft:"8px",fontSize:"11px",color:"#a1a1aa",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"},title:"View container logs",children:"📋 Logs"})]}),o.jsxs("div",{className:"toolbar",children:[o.jsxs("div",{className:"toolbar-section",children:[o.jsx(vv,{size:12,style:{color:"#71717a"}}),o.jsx("input",{type:"text",placeholder:"Filter events...",value:S,onChange:H=>L(H.target.value)})]}),o.jsx("div",{className:"toolbar-divider"}),o.jsxs("div",{className:"toolbar-section",children:[["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_error"].map(H=>o.jsx("button",{className:`filter-chip ${N.has(H)?"active":""}`,onClick:()=>{const se=new Set(N);se.has(H)?se.delete(H):se.add(H),W(se)},children:H.replace("_"," ")},H)),o.jsx("button",{className:`filter-chip ${N.has("callback_start")&&N.has("callback_end")?"active":""}`,onClick:()=>{const H=new Set(N);H.has("callback_start")&&H.has("callback_end")?(H.delete("callback_start"),H.delete("callback_end")):(H.add("callback_start"),H.add("callback_end")),W(H)},title:"Show/hide callback events",children:"callback"}),o.jsx("button",{className:`filter-chip ${V?"active":""}`,onClick:()=>ie(!V),title:"Hide LLM_RESP (complete) events",children:"hide (complete)"})]}),o.jsx("div",{className:"toolbar-divider"}),o.jsxs("div",{className:"toolbar-section",children:[o.jsxs("button",{className:`toolbar-btn ${fe?"active":""}`,onClick:()=>{ge(!fe),U(!1),Q(!1)},children:[o.jsx(In,{size:12}),"State"]}),o.jsxs("button",{className:`toolbar-btn ${R?"active":""}`,onClick:()=>{Q(!R),ge(!1),U(!1)},children:[o.jsx(La,{size:12}),"Artifacts"]}),o.jsxs("button",{className:`toolbar-btn ${Z?"active":""}`,onClick:()=>{U(!Z),ge(!1),Q(!1)},children:[o.jsx(rc,{size:12}),"Tools"]})]}),o.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:[o.jsxs("span",{style:{fontSize:10,color:"#71717a"},children:[Rt.length," / ",i.length," events"]}),j&&o.jsx("button",{className:"toolbar-btn",onClick:()=>T(null),children:"Clear Range"})]})]}),o.jsxs("div",{className:"main-content",ref:jl,children:[o.jsxs("div",{className:"event-list-container",children:[o.jsxs("div",{className:"event-list-header",style:{gridTemplateColumns:Op},children:[o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"#"}),o.jsx("div",{className:`column-resize-handle ${Ae===0?"active":""}`,onMouseDown:H=>fs(0,H)})]}),o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"Time"}),o.jsx("div",{className:`column-resize-handle ${Ae===1?"active":""}`,onMouseDown:H=>fs(1,H)})]}),o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"Agent"}),o.jsx("div",{className:`column-resize-handle ${Ae===2?"active":""}`,onMouseDown:H=>fs(2,H)})]}),o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"Type"}),o.jsx("div",{className:`column-resize-handle ${Ae===3?"active":""}`,onMouseDown:H=>fs(3,H)})]}),o.jsx("div",{className:"header-cell",children:o.jsx("span",{children:"Info"})})]}),o.jsx("div",{className:"event-list",ref:ps,children:Rt.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(xv,{size:24}),o.jsx("span",{children:i.length===0?"No events yet":"No matching events"})]}):Rt.map((H,se)=>{const de=i.indexOf(H),he=pg[H.event_type]||pg.error,pe=A5[H.event_type]||Ia;return o.jsxs("div",{className:`event-row ${x===de?"selected":""}`,style:{background:he.bg,gridTemplateColumns:Op},onClick:()=>y(de),onDoubleClick:()=>{ge(!1),U(!1),Q(!1)},children:[o.jsx("div",{className:"index",children:de}),o.jsx("div",{className:"time",style:{color:he.fg},children:M5(H.timestamp,Y1.min)}),o.jsx("div",{className:"agent",children:o.jsx("span",{className:"agent-badge",style:{backgroundColor:Ka(H.agent_name).bg,color:Ka(H.agent_name).fg},children:H.agent_name})}),o.jsxs("div",{className:"type",style:{color:he.fg},children:[o.jsx(pe,{size:10}),H.event_type.split("_")[0]]}),o.jsx("div",{className:"summary",children:mg(H)})]},de)})})]}),o.jsxs("div",{className:"side-panel-container",style:{width:X},children:[o.jsx("div",{className:`resize-handle ${ve?"active":""}`,onMouseDown:()=>J(!0)}),o.jsxs("div",{className:"side-panel",style:{width:X-4},children:[o.jsxs("div",{className:"side-panel-tabs",children:[o.jsxs("button",{className:`side-panel-tab ${!fe&&!Z&&!R?"active":""}`,onClick:()=>{ge(!1),U(!1),Q(!1)},children:[o.jsx(Dr,{size:12,style:{marginRight:4}}),"Details"]}),o.jsxs("button",{className:`side-panel-tab ${fe?"active":""}`,onClick:()=>{ge(!0),U(!1),Q(!1)},children:[o.jsx(In,{size:12,style:{marginRight:4}}),"State"]}),o.jsxs("button",{className:`side-panel-tab ${R?"active":""}`,onClick:()=>{Q(!0),ge(!1),U(!1)},children:[o.jsx(La,{size:12,style:{marginRight:4}}),"Artifacts"]}),o.jsxs("button",{className:`side-panel-tab ${Z?"active":""}`,onClick:()=>{U(!0),ge(!1),Q(!1)},children:[o.jsx(rc,{size:12,style:{marginRight:4}}),"Tools"]})]}),o.jsx("div",{className:"side-panel-content",children:Z?o.jsx(F5,{project:e,selectedEventIndex:x,sandboxMode:E}):R?o.jsx(D5,{project:e,sessionId:f}):fe?o.jsx($5,{events:i,selectedEventIndex:x,project:e}):$p?o.jsx(R5,{event:$p}):o.jsxs("div",{className:"empty-state",children:[o.jsx(Dr,{size:24}),o.jsx("span",{children:"Select an event to view details"})]})})]})]})]}),o.jsxs("div",{className:"stats-bar",children:[o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Events:"}),o.jsx("span",{className:"stat-value",children:i.length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Tool Calls:"}),o.jsx("span",{className:"stat-value",children:i.filter(H=>H.event_type==="tool_call").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Model Calls:"}),o.jsx("span",{className:"stat-value",children:i.filter(H=>H.event_type==="model_call").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Callbacks:"}),o.jsx("span",{className:"stat-value",children:i.filter(H=>H.event_type==="callback_start").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"State Changes:"}),o.jsx("span",{className:"stat-value",children:i.filter(H=>H.event_type==="state_change").length})]}),i.length>0&&o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Duration:"}),o.jsxs("span",{className:"stat-value",children:[((i[i.length-1].timestamp-i[0].timestamp)*1e3).toFixed(0),"ms"]})]}),hs.total>0&&o.jsx("div",{className:"stat-item token-stats",children:o.jsxs("span",{className:"stat-value token-value",children:[o.jsxs("span",{className:"token-in",title:"Input tokens",children:[hs.input.toLocaleString(),"↑"]}),o.jsxs("span",{className:"token-out",title:"Output tokens",children:[hs.output.toLocaleString(),"↓"]}),o.jsx("span",{className:"token-total",title:"Total tokens",children:hs.total.toLocaleString()})]})}),o.jsx("div",{className:"stats-bar-spacer"}),o.jsxs("button",{className:"stats-bar-btn",onClick:u0,title:"Load a saved run",children:[o.jsx(hl,{size:12}),"Load"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:n0,disabled:i.length===0,title:"Save current run to file",children:[o.jsx(Li,{size:12}),"Save"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:r0,disabled:!f||i.length===0,title:"Save current session to memory",children:[o.jsx(In,{size:12}),"Save to Memory"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:l0,disabled:!f||i.length===0,title:"Create evaluation test case from this session",style:{background:"rgba(var(--accent-primary-rgb), 0.15)"},children:[o.jsx(zu,{size:12}),"Create Test Case"]})]}),i0&&o.jsx("div",{className:"dialog-overlay",style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>ms(!1),children:o.jsxs("div",{className:"dialog-content",style:{background:"var(--bg-secondary)",borderRadius:"var(--radius-md)",padding:24,width:400,maxWidth:"90vw",border:"1px solid var(--border-color)"},onClick:H=>H.stopPropagation(),children:[o.jsxs("h3",{style:{marginBottom:16,display:"flex",alignItems:"center",gap:8},children:[o.jsx(zu,{size:18}),"Create Test Case from Session"]}),o.jsxs("div",{style:{marginBottom:16},children:[o.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Test Case Name"}),o.jsx("input",{type:"text",value:Cl,onChange:H=>a0(H.target.value),placeholder:"Enter test case name",style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"}})]}),o.jsxs("div",{style:{marginBottom:20},children:[o.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Add to Evaluation Set"}),o.jsx("select",{value:Fi,onChange:H=>Dp(H.target.value),style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"},children:o0.map(H=>o.jsx("option",{value:H.id,children:H.name},H.id))})]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:16},children:"This will extract user messages and tool calls from the current session to create a replayable test case. You can edit the expected responses and tool calls in the Evals tab after creation."}),o.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>ms(!1),children:"Cancel"}),o.jsx("button",{className:"btn btn-primary",onClick:c0,disabled:Fp||!Fi,children:Fp?"Creating...":"Create Test Case"})]})]})}),F&&o.jsx(NE,{request:F,timeout:F.timeout||30,onApprove:X1,onDeny:Z1,onClose:()=>K(null)}),A&&o.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>M(!1),children:o.jsxs("div",{style:{backgroundColor:"#18181b",borderRadius:"8px",border:"1px solid #3f3f46",width:"90%",maxWidth:"1400px",height:"80%",display:"flex",flexDirection:"column",overflow:"hidden"},onClick:H=>H.stopPropagation(),children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx(rc,{size:16}),o.jsx("span",{style:{fontWeight:600},children:"Container Logs"})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsxs("button",{onClick:Di,disabled:P,style:{background:"#3f3f46",border:"none",borderRadius:"4px",padding:"4px 8px",color:"#e4e4e7",cursor:P?"wait":"pointer",display:"flex",alignItems:"center",gap:"4px",fontSize:"12px"},children:[o.jsx(Zt,{size:12,className:P?"animate-spin":""}),"Refresh"]}),o.jsx("button",{onClick:()=>M(!1),style:{background:"transparent",border:"none",color:"#71717a",cursor:"pointer",padding:"4px"},children:o.jsx(Wr,{size:16})})]})]}),o.jsxs("div",{style:{display:"flex",gap:"0",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[o.jsx("button",{onClick:()=>B("agent"),style:{padding:"8px 16px",background:w==="agent"?"#18181b":"transparent",border:"none",borderBottom:w==="agent"?"2px solid #22d3ee":"2px solid transparent",color:w==="agent"?"#22d3ee":"#a1a1aa",cursor:"pointer",fontSize:"13px"},children:"🤖 Agent"}),o.jsx("button",{onClick:()=>B("gateway"),style:{padding:"8px 16px",background:w==="gateway"?"#18181b":"transparent",border:"none",borderBottom:w==="gateway"?"2px solid #22d3ee":"2px solid transparent",color:w==="gateway"?"#22d3ee":"#a1a1aa",cursor:"pointer",fontSize:"13px"},children:"🌐 Gateway"})]}),o.jsx("div",{ref:G,onScroll:t0,style:{flex:1,overflow:"auto",padding:"12px",fontFamily:"ui-monospace, monospace",fontSize:"11px",lineHeight:"1.5",whiteSpace:"pre-wrap",wordBreak:"break-all",color:"#d4d4d8",backgroundColor:"#09090b"},children:P?o.jsx("div",{style:{color:"#71717a",textAlign:"center",padding:"20px"},children:"Loading logs..."}):$[w]?o.jsx(L5,{content:$[w]}):o.jsx("div",{style:{color:"#71717a"},children:"No logs available"})})]})})]}):o.jsx("div",{className:"run-panel empty",children:"No project loaded"})}const U5=()=>Math.random().toString(36).substring(2,10),W5=()=>({id:U5(),name:"New SkillSet",description:"",embedding_model:void 0,app_model_id:void 0,external_store_type:void 0,external_store_config:{},search_enabled:!0,preload_enabled:!0,preload_top_k:3,preload_min_score:.4,sources:[],entry_count:0});function V5(){const{project:e,setProject:t}=gt(),[n,r]=k.useState(null),[i,s]=k.useState(null),[a,l]=k.useState(""),[c,u]=k.useState([]),[d,p]=k.useState(!1),[f,h]=k.useState(!1),[m,b]=k.useState(""),[_,g]=k.useState(!1),[x,y]=k.useState(null),[j,T]=k.useState(null),S=k.useRef(null),L=(e==null?void 0:e.skillsets)||[],N=L.find(I=>I.id===n);k.useEffect(()=>{fv().then(I=>T(I.available)).catch(()=>T(!1))},[]),k.useEffect(()=>{L.length>0&&!n&&r(L[0].id)},[L,n]),k.useEffect(()=>{!e||!n||W()},[e==null?void 0:e.id,n]);const W=k.useCallback(async()=>{if(!(!e||!n))try{const I=await lv(e.id,n);s(I),O(n,{entry_count:I.entry_count})}catch(I){console.error("Failed to load stats:",I)}},[e==null?void 0:e.id,n]),E=I=>{e&&t({...e,...I})},O=(I,w)=>{e&&t({...e,skillsets:e.skillsets.map(B=>B.id===I?{...B,...w}:B)})},F=()=>{if(!e)return;const I=W5();E({skillsets:[...L,I]}),r(I.id)},K=I=>{e&&confirm("Delete this SkillSet and all its data?")&&(E({skillsets:L.filter(w=>w.id!==I)}),n===I&&r(L.length>1?L[0].id:null),s(null),u([]))},A=async()=>{if(!(!e||!n||!a.trim())){p(!0),y(null);try{const I=await dv(e.id,n,a.trim(),10,0);u(I.results)}catch(I){y("Search failed"),console.error(I)}finally{p(!1)}}},M=async()=>{if(!(!e||!n||!m.trim())){g(!0),y(null);try{const I=await cv(e.id,n,m.trim());b(""),await W(),alert(`Added ${I.chunks_added} chunks from ${I.source_name}`)}catch(I){y(I.message||"Failed to fetch URL")}finally{g(!1)}}},$=async I=>{var B;const w=(B=I.target.files)==null?void 0:B[0];if(!(!w||!e||!n)){y(null);try{const G=await uv(e.id,n,w);await W(),alert(`Added ${G.chunks_added} chunks from ${G.source_name}`)}catch(G){y(G.message||"Upload failed")}S.current&&(S.current.value="")}},C=async()=>{if(!(!e||!n)&&confirm("Delete all entries in this SkillSet?"))try{await pv(e.id,n),await W(),u([])}catch{y("Clear failed")}},P=I=>{const w=Math.round(I*100),B=160,G=70,v=20+(1-I)*15,z=.15+I*.25;return`linear-gradient(90deg, hsla(${B}, ${G}%, ${v}%, ${z}) 0%, transparent ${w}%)`};return e?o.jsxs("div",{className:"skillsets-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"skillset-list",children:[o.jsxs("div",{className:"skillset-list-header",children:[o.jsx("h3",{children:"SkillSets"}),o.jsx("button",{className:"btn-icon",onClick:F,title:"Add SkillSet",children:o.jsx(Qe,{size:16})})]}),L.length===0?o.jsxs("div",{className:"empty-state",style:{padding:"40px 0"},children:[o.jsx(In,{size:32}),o.jsx("span",{children:"No SkillSets"}),o.jsxs("button",{className:"btn-primary",onClick:F,children:[o.jsx(Qe,{size:14})," Create SkillSet"]})]}):L.map(I=>o.jsxs("div",{className:`skillset-item ${n===I.id?"selected":""}`,onClick:()=>r(I.id),children:[o.jsx(In,{size:16,style:{color:"var(--accent)",flexShrink:0}}),o.jsxs("div",{className:"skillset-item-info",children:[o.jsx("div",{className:"skillset-item-name",children:I.name}),o.jsxs("div",{className:"skillset-item-count",children:[I.entry_count||0," entries"]})]}),o.jsx("button",{className:"skillset-item-delete",onClick:w=>{w.stopPropagation(),K(I.id)},children:o.jsx(Ue,{size:14})})]},I.id))]}),N?o.jsxs("div",{className:"skillset-detail",children:[o.jsxs("div",{className:"skillset-header",children:[o.jsxs("div",{className:"skillset-header-info",children:[o.jsx("input",{className:"skillset-name-input",value:N.name,onChange:I=>O(N.id,{name:I.target.value}),placeholder:"SkillSet Name"}),o.jsx("textarea",{className:"skillset-desc-input",value:N.description,onChange:I=>O(N.id,{description:I.target.value}),placeholder:"Description (optional)",rows:1}),o.jsxs("div",{className:"skillset-model",children:[o.jsx("label",{style:{fontSize:"12px",color:"var(--text-secondary)",marginRight:"8px"},children:"Embedding Model:"}),o.jsxs("select",{style:{flex:1,padding:"4px 8px",fontSize:"12px",background:"var(--bg-secondary)",border:"1px solid var(--border)",borderRadius:"4px",color:"var(--text-primary)"},value:N.embedding_model||"text-embedding-004",onChange:I=>O(N.id,{embedding_model:I.target.value}),children:[o.jsxs("optgroup",{label:"Google Gemini",children:[o.jsx("option",{value:"text-embedding-004",children:"text-embedding-004 (768d)"}),o.jsx("option",{value:"text-embedding-005",children:"text-embedding-005"})]}),o.jsxs("optgroup",{label:"OpenAI",children:[o.jsx("option",{value:"text-embedding-3-small",children:"text-embedding-3-small (1536d)"}),o.jsx("option",{value:"text-embedding-3-large",children:"text-embedding-3-large (3072d)"})]}),o.jsxs("optgroup",{label:"Cohere",children:[o.jsx("option",{value:"embed-english-v3.0",children:"embed-english-v3.0 (1024d)"}),o.jsx("option",{value:"embed-multilingual-v3.0",children:"embed-multilingual-v3.0 (1024d)"})]})]})]}),o.jsxs("div",{className:"skillset-stats",children:[o.jsxs("span",{className:"skillset-stat",children:[o.jsx("strong",{children:(i==null?void 0:i.entry_count)||0})," entries"]}),o.jsxs("span",{className:"skillset-stat",children:[o.jsx("strong",{children:Object.keys((i==null?void 0:i.sources)||{}).length})," sources"]}),j===!1&&o.jsx("span",{className:"skillset-stat",style:{color:"var(--warning)"},children:"⚠ No embeddings"})]})]}),o.jsx("button",{className:"btn-icon",onClick:W,title:"Refresh",children:o.jsx(Zt,{size:16})})]}),x&&o.jsxs("div",{className:"error-banner",children:[x,o.jsx("button",{onClick:()=>y(null),children:o.jsx(Wr,{size:14})})]}),o.jsxs("div",{className:"search-section",children:[o.jsx("div",{className:"search-input-wrapper",children:o.jsx("input",{className:"search-input",value:a,onChange:I=>l(I.target.value),onKeyDown:I=>I.key==="Enter"&&A(),placeholder:"Search this SkillSet..."})}),o.jsxs("button",{className:"btn-primary",onClick:A,disabled:d||!a.trim(),children:[o.jsx(vv,{size:14}),d?"Searching...":"Search"]})]}),o.jsxs("div",{className:"search-results",children:[c.length===0&&!d&&a&&o.jsx("div",{className:"empty-state",children:o.jsx("span",{children:"No results found"})}),c.map(I=>o.jsxs("div",{className:"search-result",style:{background:P(I.score)},children:[o.jsxs("span",{className:"search-result-score",children:[(I.score*100).toFixed(0),"%"]}),o.jsx("div",{className:"search-result-text",children:I.text}),o.jsx("div",{className:"search-result-source",children:I.source_name})]},I.id))]}),o.jsxs("div",{className:"add-sources-section",children:[o.jsxs("div",{className:"add-sources-header",onClick:()=>h(!f),children:[f?o.jsx(Ct,{size:16}):o.jsx(vt,{size:16}),o.jsx("h4",{children:"Add Sources"})]}),f&&o.jsxs("div",{className:"add-sources-content",children:[o.jsxs("div",{className:"source-row",children:[o.jsx(Zd,{size:16,style:{color:"var(--text-tertiary)"}}),o.jsx("input",{className:"source-input",value:m,onChange:I=>b(I.target.value),onKeyDown:I=>I.key==="Enter"&&M(),placeholder:"Enter URL (e.g., llms.txt file)"}),o.jsxs("button",{className:"btn-primary",onClick:M,disabled:_||!m.trim(),children:[o.jsx(w_,{size:14}),_?"Loading...":"Add"]})]}),o.jsxs("div",{className:"source-row",children:[o.jsx(g_,{size:16,style:{color:"var(--text-tertiary)"}}),o.jsx("input",{ref:S,type:"file",accept:".txt,.md,.json,.csv,.html",onChange:$}),o.jsxs("button",{className:"btn-primary",onClick:()=>{var I;return(I=S.current)==null?void 0:I.click()},children:[o.jsx(hl,{size:14}),"Upload File"]}),o.jsx("span",{style:{fontSize:"12px",color:"var(--text-tertiary)"},children:".txt, .md, .json, .csv"})]}),((i==null?void 0:i.entry_count)||0)>0&&o.jsx("div",{className:"source-row",style:{marginTop:"8px"},children:o.jsxs("button",{className:"clear-button",onClick:C,children:[o.jsx(Ue,{size:12}),"Clear All Entries (",(i==null?void 0:i.entry_count)||0,")"]})})]})]})]}):L.length>0?o.jsx("div",{className:"skillset-detail",children:o.jsxs("div",{className:"empty-state",children:[o.jsx(In,{size:48}),o.jsx("span",{children:"Select a SkillSet"})]})}):null]}):null}const bn={tool_trajectory_avg_score:{name:"Tool Trajectory",description:"Did the agent call the right tools in the expected order?",requiresJudge:!1,scale:[0,1]},response_match_score:{name:"Response Match (ROUGE-1)",description:"Does the response contain expected text? (fuzzy word matching)",requiresJudge:!1,scale:[0,1]},response_evaluation_score:{name:"Response Evaluation (LLM)",description:"LLM-judged semantic match of final response",requiresJudge:!0,scale:[1,5]},final_response_match_v2:{name:"Response Quality v2 (LLM)",description:"Enhanced LLM-judged response quality check",requiresJudge:!0,scale:[0,1]},safety_v1:{name:"Safety",description:"Is the response safe and harmless? (Vertex AI)",requiresJudge:!0,scale:[0,1]},hallucinations_v1:{name:"Hallucination Detection",description:"Are all claims supported by context? No false information?",requiresJudge:!0,scale:[0,1]},rubric_based_final_response_quality_v1:{name:"Rubric: Response Quality",description:"Custom rubric-based quality assessment of responses",requiresJudge:!0,scale:[0,1]},rubric_based_tool_use_quality_v1:{name:"Rubric: Tool Use Quality",description:"Custom rubric-based assessment of tool usage",requiresJudge:!0,scale:[0,1]}},Yo=(e,t,n)=>{if(t==null)return{value:"-",comparison:""};const r=bn[e],i=(r==null?void 0:r.scale)||[0,1];if(i[0]===1&&i[1]===5){const s=n??3.5;return{value:t.toFixed(1),comparison:`${s.toFixed(1)} / ${i[1].toFixed(1)}`}}else{const s=n??.7;return{value:`${Math.round(t*100)}%`,comparison:`${Math.round(s*100)}% min`}}},H5={metrics:[{metric:"tool_trajectory_avg_score",enabled:!0,criterion:{threshold:1}},{metric:"response_match_score",enabled:!0,criterion:{threshold:.7}}],default_trajectory_match_type:"in_order",num_runs:1};function G1(){return`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`}function q5(){const{project:e}=gt(),[t,n]=k.useState([]),[r,i]=k.useState(null),[s,a]=k.useState(null),[l,c]=k.useState(new Set),[u,d]=k.useState(new Map),[p,f]=k.useState(new Map),[h,m]=k.useState(new Set),[b,_]=k.useState(!1),[g,x]=k.useState(null),[y,j]=k.useState([]),[T,S]=k.useState(null),L=async()=>{if(e)try{const U=await Ge.get(`/projects/${e.id}/eval-history`);j(U.runs||[])}catch(U){console.warn("Failed to load eval history:",U)}},N=async(U,R=!0)=>{if(e)try{const X=(await Ge.get(`/projects/${e.id}/eval-history/${U}`)).run;if(S(X),X!=null&&X.case_results){const oe=new Map;for(const ve of X.case_results)oe.set(ve.eval_case_id,ve);d(oe)}if((X==null?void 0:X.eval_set_id)==="batch")c(new Set(t.map(oe=>oe.id))),i(null);else if(X!=null&&X.eval_set_id){const oe=new Map;oe.set(X.eval_set_id,X),f(oe),i(X.eval_set_id),c(ve=>new Set([...ve,X.eval_set_id]))}a(null),R&&window.history.pushState({run:U},"",`?run=${U}`)}catch(Q){console.warn("Failed to load history run:",Q)}},W=(U,R=!0)=>{i(U),a(null),S(null),R&&U?window.history.pushState({set:U},"",`?set=${U}`):R&&window.history.pushState({},"",window.location.pathname)},E=(U,R,Q=!0)=>{i(U),a(R),S(null),Q&&R?window.history.pushState({set:U,case:R},"",`?set=${U}&case=${R}`):Q&&U&&window.history.pushState({set:U},"",`?set=${U}`)},O=()=>{S(null),d(new Map),f(new Map),window.history.pushState({},"",window.location.pathname)},F=async U=>{if(e)try{await Ge.delete(`/projects/${e.id}/eval-history/${U}`),j(R=>R.filter(Q=>Q.id!==U)),(T==null?void 0:T.id)===U&&S(null)}catch(R){console.warn("Failed to delete history run:",R)}};k.useEffect(()=>{e!=null&&e.id&&(K(),L())},[e==null?void 0:e.id]),k.useEffect(()=>{const U=()=>{m(new Set(t.map(Q=>Q.id)))},R=()=>{m(new Set),L()};return window.addEventListener("eval-tests-started",U),window.addEventListener("eval-tests-completed",R),()=>{window.removeEventListener("eval-tests-started",U),window.removeEventListener("eval-tests-completed",R)}},[t]),k.useEffect(()=>{if(!(e!=null&&e.id)||b)return;const U=()=>{const Q=new URLSearchParams(window.location.search),X=Q.get("set"),oe=Q.get("case"),ve=Q.get("run");if(ve){N(ve,!1);return}if(X)i(X),a(oe),S(null),c(J=>new Set([...J,X]));else{if(!r&&!s&&!T)return;i(null),a(null),S(null)}};U();const R=()=>{U()};return window.addEventListener("popstate",R),()=>window.removeEventListener("popstate",R)},[e==null?void 0:e.id,b,t.length]);const K=async()=>{var U,R;if(e!=null&&e.id){_(!0),x(null);try{const Q=await Ge.get(`/projects/${e.id}/eval-sets`);if(n(Q.eval_sets||[]),((U=Q.eval_sets)==null?void 0:U.length)>0){const X=new URLSearchParams(window.location.search),oe=X.get("set"),ve=X.get("case"),J=oe||(ve?(R=Q.eval_sets.find(D=>D.eval_cases.some(Y=>Y.id===ve)))==null?void 0:R.id:null)||Q.eval_sets[0].id;c(new Set([J]))}}catch(Q){x(Q.message||"Failed to load eval sets")}finally{_(!1)}}},A=t.find(U=>U.id===r),M=A==null?void 0:A.eval_cases.find(U=>U.id===s),$=async()=>{if(e!=null&&e.id)try{const U=await Ge.post(`/projects/${e.id}/eval-sets`,{name:"New Eval Set",description:"",eval_config:H5});n(R=>[...R,U.eval_set]),i(U.eval_set.id),c(R=>new Set([...R,U.eval_set.id]))}catch(U){x(U.message||"Failed to create eval set")}},C=async U=>{if(e!=null&&e.id)try{const R=await Ge.post(`/projects/${e.id}/eval-sets/${U}/cases`,{name:"New Test Case",description:"",invocations:[{id:G1(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]}],initial_state:{},rubrics:[],enabled_metrics:[],tags:[]});n(Q=>Q.map(X=>X.id===U?{...X,eval_cases:[...X.eval_cases,R.eval_case]}:X)),i(U),a(R.eval_case.id)}catch(R){x(R.message||"Failed to create eval case")}},P=async(U,R,Q)=>{if(e!=null&&e.id)try{const X=await Ge.put(`/projects/${e.id}/eval-sets/${U}/cases/${R}`,Q);n(oe=>oe.map(ve=>ve.id===U?{...ve,eval_cases:ve.eval_cases.map(J=>J.id===R?X.eval_case:J)}:ve))}catch(X){x(X.message||"Failed to update eval case")}},I=async(U,R)=>{if(e!=null&&e.id)try{await Ge.delete(`/projects/${e.id}/eval-sets/${U}/cases/${R}`),n(Q=>Q.map(X=>X.id===U?{...X,eval_cases:X.eval_cases.filter(oe=>oe.id!==R)}:X)),s===R&&a(null)}catch(Q){x(Q.message||"Failed to delete eval case")}},w=async U=>{if(e!=null&&e.id)try{await Ge.delete(`/projects/${e.id}/eval-sets/${U}`),n(R=>R.filter(Q=>Q.id!==U)),r===U&&(i(null),a(null))}catch(R){x(R.message||"Failed to delete eval set")}},B=async U=>{if(e!=null&&e.id)try{const R=await Ge.get(`/projects/${e.id}/eval-sets/${U}/export`),Q=new Blob([JSON.stringify(R,null,2)],{type:"application/json"}),X=URL.createObjectURL(Q),oe=document.createElement("a");oe.href=X;const ve=t.find(J=>J.id===U);oe.download=`${(ve==null?void 0:ve.name)||"eval-set"}.json`,document.body.appendChild(oe),oe.click(),document.body.removeChild(oe),URL.revokeObjectURL(X)}catch(R){x(R.message||"Failed to export eval set")}},G=async U=>{if(e!=null&&e.id)try{const R=await U.text(),Q=JSON.parse(R),X=await Ge.post(`/projects/${e.id}/eval-sets/import`,Q);n(oe=>[...oe,X.eval_set]),i(X.eval_set.id),c(oe=>new Set([...oe,X.eval_set.id]))}catch(R){x(R.message||"Failed to import eval set")}},v=k.useRef(null),z=async()=>{if(!(!(e!=null&&e.id)||t.length===0))try{const U=await Promise.all(t.map(async oe=>{try{return await Ge.get(`/projects/${e.id}/eval-sets/${oe.id}/export`)}catch{return oe}})),R=new Blob([JSON.stringify(U,null,2)],{type:"application/json"}),Q=URL.createObjectURL(R),X=document.createElement("a");X.href=Q,X.download=`${e.name||"project"}-eval-sets.json`,document.body.appendChild(X),X.click(),document.body.removeChild(X),URL.revokeObjectURL(Q)}catch(U){x(U.message||"Failed to export all eval sets")}},V=async(U,R)=>{if(e!=null&&e.id){m(Q=>new Set([...Q,R]));try{const Q=await Ge.post(`/projects/${e.id}/eval-sets/${U}/cases/${R}/run`,{});d(X=>new Map(X).set(R,Q.result))}catch(Q){x(Q.message||"Failed to run eval case")}finally{m(Q=>{const X=new Set(Q);return X.delete(R),X})}}},ie=async U=>{if(!(e!=null&&e.id))return;const R=t.find(X=>X.id===U);if(!R)return;const Q=R.eval_cases.map(X=>X.id);m(X=>new Set([...X,U,...Q]));try{const X=await Ge.post(`/projects/${e.id}/eval-sets/${U}/run`,{});f(oe=>new Map(oe).set(U,X.result));for(const oe of X.result.case_results)d(ve=>new Map(ve).set(oe.eval_case_id,oe));try{await Ge.post(`/projects/${e.id}/eval-history`,X.result),L()}catch(oe){console.warn("Failed to save eval run to history:",oe)}}catch(X){x(X.message||"Failed to run eval set")}finally{m(X=>{const oe=new Set(X);return oe.delete(U),Q.forEach(ve=>oe.delete(ve)),oe})}},fe=U=>{c(R=>{const Q=new Set(R);return Q.has(U)?Q.delete(U):Q.add(U),Q})},ge=U=>{let R=U.eval_cases.length,Q=0,X=0,oe=0;for(const ve of U.eval_cases){const J=u.get(ve.id);J?J.passed?Q++:X++:oe++}return{total:R,passed:Q,failed:X,pending:oe}},Z=U=>U==null?"-":`${Math.round(U*100)}%`;return e?o.jsxs("div",{className:"eval-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("aside",{className:"eval-sidebar",children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsx("h3",{children:"Evaluation Tests"}),o.jsxs("div",{className:"header-actions",children:[o.jsx("input",{type:"file",ref:v,accept:".json",style:{display:"none"},onChange:U=>{var Q;const R=(Q=U.target.files)==null?void 0:Q[0];R&&(G(R),U.target.value="")}}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var U;return(U=v.current)==null?void 0:U.click()},title:"Import eval set from JSON",children:o.jsx(hl,{size:14})}),t.length>0&&o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:z,title:"Download all eval sets as JSON",children:o.jsx(Li,{size:14})}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:K,title:"Refresh",children:o.jsx(Zt,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:$,title:"New eval set",children:[o.jsx(Qe,{size:14}),"Set"]})]})]}),o.jsxs("div",{className:"eval-tree",children:[b&&o.jsx("p",{style:{color:"var(--text-muted)",padding:"16px"},children:"Loading..."}),g&&o.jsx("div",{style:{color:"var(--error)",padding:"16px",fontSize:"13px"},children:g}),!b&&t.length===0&&o.jsxs("div",{className:"empty-state",style:{padding:"32px"},children:[o.jsx(rp,{size:32}),o.jsxs("p",{children:["No evaluation sets yet.",o.jsx("br",{}),"Create one to get started."]})]}),t.map(U=>{const R=l.has(U.id),Q=ge(U),X=h.has(U.id);return o.jsxs("div",{className:"tree-item",children:[o.jsxs("div",{className:`tree-set ${r===U.id&&!s?"selected":""}`,onClick:()=>W(U.id),children:[o.jsx("button",{className:"expand-btn",onClick:oe=>{oe.stopPropagation(),fe(U.id)},children:U.eval_cases.length>0?R?o.jsx(Ct,{size:14}):o.jsx(vt,{size:14}):o.jsx("span",{style:{width:14}})}),o.jsx(gv,{size:14,style:{color:"var(--accent-secondary)"}}),o.jsx("span",{className:"set-name",children:U.name}),o.jsx("button",{className:"add-case-btn",onClick:oe=>{oe.stopPropagation(),C(U.id)},title:"Add test case",style:{padding:"2px 4px",marginLeft:4,background:"transparent",border:"none",cursor:"pointer",opacity:.6,display:"flex",alignItems:"center"},children:o.jsx(Qe,{size:12})}),Q.total>0&&o.jsxs("span",{className:"set-stats",children:[Q.passed>0&&o.jsx("span",{className:"stat-passed",children:Q.passed}),Q.failed>0&&o.jsx("span",{className:"stat-failed",children:Q.failed}),Q.pending>0&&o.jsx("span",{className:"stat-pending",children:Q.pending})]}),o.jsx("button",{className:"run-btn",onClick:oe=>{oe.stopPropagation(),ie(U.id)},title:"Run all tests in this set",disabled:X,children:X?o.jsx(Ni,{size:12,className:"spinning"}):o.jsx(hr,{size:12})})]}),R&&o.jsx("div",{className:"tree-children",style:{paddingLeft:16},children:U.eval_cases.map(oe=>{var D;const ve=u.get(oe.id),J=h.has(oe.id);return o.jsxs("div",{className:`tree-case ${s===oe.id?"selected":""}`,onClick:()=>E(U.id,oe.id),children:[J?o.jsx(Ni,{size:14,className:"spinning",style:{color:"var(--warning)"}}):ve?ve.passed?o.jsx(Bn,{size:14,style:{color:"var(--success)"}}):o.jsx(mr,{size:14,style:{color:"var(--error)"}}):o.jsx(Ra,{size:14,style:{color:"var(--text-muted)"}}),o.jsx("span",{className:"case-name",children:oe.name}),ve&&ve.metric_results.length>0&&o.jsx("span",{style:{fontSize:11,color:ve.passed?"var(--success)":"var(--error)"},children:Z((D=ve.metric_results[0])==null?void 0:D.score)}),o.jsx("button",{className:"run-btn",onClick:Y=>{Y.stopPropagation(),V(U.id,oe.id)},disabled:J,children:o.jsx(hr,{size:12})})]},oe.id)})})]},U.id)})]}),o.jsxs("div",{className:"history-section",children:[o.jsx("div",{className:"history-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 12px",borderTop:"1px solid var(--border-color)",background:"var(--bg-secondary)"},children:o.jsxs("span",{style:{fontWeight:500,fontSize:13},children:["Previous Runs (",y.length,")"]})}),o.jsx("div",{className:"history-list",style:{maxHeight:200,overflowY:"auto"},children:y.length===0?o.jsx("div",{style:{padding:"12px",color:"var(--text-secondary)",fontSize:12,textAlign:"center"},children:"No previous runs"}):[...y].sort((U,R)=>(R.started_at||0)-(U.started_at||0)).map(U=>{const R=U.passed_cases===U.total_cases;return o.jsx("div",{className:`history-item ${(T==null?void 0:T.id)===U.id?"selected":""}`,onClick:()=>N(U.id),style:{padding:"8px 12px",borderBottom:"1px solid var(--border-color)",cursor:"pointer",background:(T==null?void 0:T.id)===U.id?"var(--bg-tertiary)":"transparent",fontSize:12},children:o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[R?o.jsx(Bn,{size:14,style:{color:"var(--success)",flexShrink:0}}):o.jsx(mr,{size:14,style:{color:"var(--error)",flexShrink:0}}),o.jsxs("div",{children:[o.jsx("div",{style:{fontWeight:500},children:U.eval_set_name||"Unnamed"}),o.jsx("div",{style:{color:"var(--text-secondary)",fontSize:11},children:new Date(U.started_at*1e3).toLocaleString()})]})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsxs("span",{style:{color:R?"var(--success)":"var(--error)",fontWeight:500,fontSize:11},children:[U.passed_cases,"/",U.total_cases]}),o.jsx("button",{className:"btn btn-icon",onClick:Q=>{Q.stopPropagation(),F(U.id)},title:"Delete run",style:{padding:2},children:o.jsx(Ue,{size:12})})]})]})},U.id)})})]})]}),o.jsx("div",{className:"eval-editor",children:T?o.jsx(K5,{run:T,onClose:O}):M?o.jsx(G5,{evalCase:M,evalSetId:r,projectId:e.id,result:u.get(M.id),isRunning:h.has(M.id),onUpdate:U=>P(r,M.id,U),onDelete:()=>I(r,M.id),onRun:()=>V(r,M.id),onClearResult:()=>d(U=>{const R=new Map(U);return R.delete(M.id),R})}):A?o.jsx(Y5,{evalSet:A,projectId:e.id,result:p.get(A.id),isRunning:h.has(A.id),caseResults:u,onUpdate:async U=>{try{const R=await Ge.put(`/projects/${e.id}/eval-sets/${A.id}`,U);n(Q=>Q.map(X=>X.id===A.id?R.eval_set:X))}catch(R){x(R.message)}},onDelete:()=>w(A.id),onRun:()=>ie(A.id),onExport:()=>B(A.id)}):o.jsx("div",{className:"editor-content",children:o.jsxs("div",{className:"empty-state",children:[o.jsx(Ra,{size:48}),o.jsxs("p",{children:["Select a test case to edit",o.jsx("br",{}),"or create a new one"]})]})})})]}):null}function J5({value:e,onChange:t}){var a,l;const{project:n}=gt(),r=((a=n==null?void 0:n.app)==null?void 0:a.models)||[],i=(l=n==null?void 0:n.app)==null?void 0:l.default_model_id,s=r.find(c=>c.id===i);return o.jsxs("select",{value:e,onChange:c=>t(c.target.value),style:{width:"100%",maxWidth:400},children:[o.jsx("option",{value:"",children:s?`App Default (${s.model_name})`:"App Default"}),r.map(c=>o.jsx("option",{value:c.model_name,children:c.model_name},c.id)),o.jsx("option",{value:"gemini-2.0-flash",children:"gemini-2.0-flash"}),o.jsx("option",{value:"gemini-2.5-flash",children:"gemini-2.5-flash"}),o.jsx("option",{value:"gemini-2.5-pro",children:"gemini-2.5-pro"})]})}function K5({run:e,onClose:t}){var h;const{project:n}=gt(),[r,i]=k.useState(!0),[s,a]=k.useState(new Set),l=e.case_results||[],c=l.filter(m=>m.passed).length,u=l.filter(m=>!m.passed).length,d=r?l.filter(m=>!m.passed):l,p=m=>{a(b=>{const _=new Set(b);return _.has(m)?_.delete(m):_.add(m),_})},f=m=>{m&&n&&(window.location.href=`/project/${n.id}/run?session=${m}`)};return o.jsxs("div",{className:"test-result-viewer",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"result-header",children:[o.jsx("h2",{children:e.eval_set_name||"Test Run Results"}),o.jsx("div",{style:{display:"flex",gap:8},children:o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{if(n){const m=`${window.location.origin}/project/${n.id}/evaluate?run=${e.id}`;navigator.clipboard.writeText(m)}},title:"Copy link to this run",children:o.jsx(tp,{size:14})})})]}),o.jsxs("div",{className:"result-summary",children:[o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Status"}),o.jsx("span",{className:`value ${c===l.length?"passed":"failed"}`,children:c===l.length?"PASSED":"FAILED"})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Passed"}),o.jsx("span",{className:"value passed",children:c})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Failed"}),o.jsx("span",{className:"value failed",children:u})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Total Cases"}),o.jsx("span",{className:"value",children:l.length})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Duration"}),o.jsx("span",{className:"value",children:e.duration_ms?`${(e.duration_ms/1e3).toFixed(1)}s`:"-"})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Tokens"}),o.jsx("span",{className:"value",children:((h=e.total_tokens)==null?void 0:h.toLocaleString())||"-"})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Run Time"}),o.jsx("span",{className:"value",style:{fontSize:13},children:e.started_at?new Date(e.started_at*1e3).toLocaleString():"-"})]})]}),o.jsxs("div",{style:{padding:"8px 20px",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",gap:10,background:"var(--bg-secondary)"},children:[o.jsxs("label",{className:"toggle-switch",style:{transform:"scale(0.85)"},children:[o.jsx("input",{type:"checkbox",checked:r,onChange:m=>i(m.target.checked)}),o.jsx("span",{className:"toggle-slider"})]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:"Hide passing results"})]}),o.jsxs("div",{className:"result-cases",children:[d.map((m,b)=>{var O,F,K,A,M,$;const _=m.case_id||`case-${b}`,g=s.has(_),x=((O=m.metric_results)==null?void 0:O.filter(C=>!C.passed||C.error))||[],y=((F=m.metric_results)==null?void 0:F.filter(C=>C.passed&&!C.error))||[],j=((K=m.rubric_results)==null?void 0:K.filter(C=>!C.passed||C.error))||[],T=((A=m.rubric_results)==null?void 0:A.filter(C=>C.passed&&!C.error))||[],S=g?m.metric_results:x,L=g?m.rubric_results:j,N=g?m.invocation_results:(M=m.invocation_results)==null?void 0:M.filter(C=>{var P;return((P=C.metric_results)==null?void 0:P.some(I=>!I.passed))||C.error}),W=y.length+T.length,E=x.length+j.length;return o.jsxs("div",{className:"result-case",children:[o.jsxs("div",{className:"result-case-header",onClick:()=>p(_),style:{cursor:"pointer"},children:[o.jsxs("div",{className:"result-case-name",children:[o.jsx("span",{style:{marginRight:6,fontSize:12,color:"var(--text-muted)"},children:g?"▼":"▶"}),m.passed?o.jsx(Bn,{size:16,style:{color:"var(--success)"}}):o.jsx(mr,{size:16,style:{color:"var(--error)"}}),m.eval_set_name&&(e==null?void 0:e.eval_set_id)==="batch"&&o.jsx("span",{style:{fontSize:10,color:"var(--text-muted)",background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4,marginRight:6},children:m.eval_set_name}),m.case_name||`Case ${b+1}`,o.jsxs("span",{style:{marginLeft:10,fontSize:11,color:"var(--text-muted)",fontWeight:400},children:[(m.num_runs||1)>1&&o.jsxs("span",{style:{marginRight:8,padding:"2px 6px",borderRadius:4,background:(m.pass_rate||0)>=.5?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:(m.pass_rate||0)>=.5?"var(--success)":"var(--error)",fontWeight:500},children:[m.runs_passed,"/",m.runs_completed," runs (",((m.pass_rate||0)*100).toFixed(0),"%)"]}),E>0&&o.jsxs("span",{style:{color:"var(--error)"},children:[E," failed"]}),E>0&&W>0&&" · ",W>0&&o.jsxs("span",{style:{color:"var(--success)"},children:[W," passed"]})]})]}),o.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[m.session_id&&o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:C=>{C.stopPropagation(),f(m.session_id)},title:"View session in Run panel",children:[o.jsx(hv,{size:12})," View Session"]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:m.duration_ms?`${(m.duration_ms/1e3).toFixed(2)}s`:""})]})]}),o.jsxs("div",{className:"result-case-details",children:[(S==null?void 0:S.length)>0&&o.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:8},children:[S.map((C,P)=>{const I=Yo(C.metric,C.score,C.threshold);return o.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:C.error?"rgba(255, 193, 7, 0.1)":C.passed?"rgba(var(--success-rgb), 0.05)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${C.error?"var(--warning)":C.passed?"var(--border-color)":"var(--error)"}`,display:"flex",flexDirection:"column",alignItems:"center",minWidth:80},children:[o.jsx("span",{style:{fontSize:10,color:"var(--text-secondary)",textAlign:"center",marginBottom:2},children:C.metric.replace(/_/g," ").replace("v1","").replace("v2","").trim()}),C.error?o.jsx("span",{style:{fontSize:10,color:"var(--warning)"},children:"Error"}):o.jsxs(o.Fragment,{children:[o.jsx("span",{style:{fontSize:14,fontWeight:600,color:C.passed?"var(--success)":"var(--error)"},children:I.value}),o.jsx("span",{style:{fontSize:9,color:"var(--text-muted)"},children:I.comparison})]})]},P)}),!g&&y.length>0&&o.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"var(--bg-tertiary)",border:"1px dashed var(--border-color)",display:"flex",alignItems:"center",fontSize:11,color:"var(--text-muted)"},children:["+",y.length," passed"]})]}),S==null?void 0:S.filter(C=>!C.passed&&C.rationale).map((C,P)=>o.jsxs("div",{style:{marginTop:8,padding:"8px 12px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:12},children:[o.jsxs("div",{style:{fontWeight:500,marginBottom:4,color:"var(--error)",fontSize:11},children:[C.metric.replace(/_/g," ")," - Why it failed:"]}),o.jsx("div",{style:{whiteSpace:"pre-wrap",color:"var(--text-secondary)",lineHeight:1.4},children:C.rationale})]},`rationale-${P}`)),(L==null?void 0:L.length)>0&&o.jsxs("div",{style:{marginTop:8},children:[o.jsx("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:4},children:"Custom Rubrics"}),L.map((C,P)=>o.jsxs("div",{style:{marginBottom:C.rationale&&!C.passed?8:4},children:[o.jsxs("div",{className:"metric-row",children:[o.jsx("span",{className:"metric-name",style:{flex:1},children:C.rubric}),o.jsx("span",{className:`metric-value ${C.passed?"passed":"failed"}`,children:C.passed?"✓ Pass":"✗ Fail"})]}),!C.passed&&C.rationale&&o.jsxs("div",{style:{marginTop:4,marginLeft:8,padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:11,color:"var(--text-secondary)"},children:[o.jsx("strong",{style:{color:"var(--error)"},children:"Why:"})," ",C.rationale]}),C.error&&o.jsxs("div",{style:{marginTop:4,marginLeft:8,fontSize:11,color:"var(--warning)"},children:["Error: ",C.error]})]},P)),!g&&T.length>0&&o.jsxs("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:["+",T.length," passed rubric",T.length>1?"s":""]})]}),g&&(m.num_runs||1)>1&&m.run_results&&m.run_results.length>0&&o.jsxs("div",{style:{marginTop:12,marginBottom:12},children:[o.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:8},children:["Individual Run Results (",m.runs_passed,"/",m.runs_completed," passed)"]}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:m.run_results.map((C,P)=>o.jsxs("div",{style:{padding:"4px 10px",borderRadius:"var(--radius-sm)",background:C.error?"rgba(255, 193, 7, 0.15)":C.passed?"rgba(var(--success-rgb), 0.1)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${C.error?"var(--warning)":C.passed?"var(--success)":"var(--error)"}`,fontSize:11,display:"flex",alignItems:"center",gap:6},title:C.error||`Run ${C.run_number}: ${C.passed?"Passed":"Failed"} (${(C.duration_ms/1e3).toFixed(2)}s)`,children:[C.error?o.jsx(Yd,{size:12,style:{color:"var(--warning)"}}):C.passed?o.jsx(Bn,{size:12,style:{color:"var(--success)"}}):o.jsx(mr,{size:12,style:{color:"var(--error)"}}),o.jsxs("span",{style:{color:C.error?"var(--warning)":C.passed?"var(--success)":"var(--error)"},children:["Run ",C.run_number]}),o.jsxs("span",{style:{color:"var(--text-muted)",fontSize:10},children:[(C.duration_ms/1e3).toFixed(1),"s"]})]},P))})]}),(N==null?void 0:N.length)>0&&o.jsxs("div",{className:"invocation-summary",children:[o.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:8},children:["Invocations (",N.length,!g&&(($=m.invocation_results)==null?void 0:$.length)>N.length?` of ${m.invocation_results.length}`:"",")"]}),N.map((C,P)=>o.jsxs("div",{className:"invocation-item",children:[o.jsxs("div",{className:"invocation-query",children:["Turn ",C.invocation_id||P+1,": ",C.user_message||"(no message)"]}),C.actual_response&&o.jsxs("div",{className:"invocation-response",children:["Response: ",C.actual_response.substring(0,200),C.actual_response.length>200?"...":""]})]},P))]}),m.error&&o.jsx("div",{style:{marginTop:12,padding:12,background:"rgba(255, 107, 107, 0.1)",borderRadius:"var(--radius-sm)",color:"var(--error)",fontSize:12,whiteSpace:"pre-wrap"},children:m.error})]})]},_)}),l.length===0&&o.jsx("div",{style:{textAlign:"center",padding:32,color:"var(--text-secondary)"},children:"No test cases in this run"})]})]})}function G5({evalCase:e,evalSetId:t,projectId:n,result:r,isRunning:i,onUpdate:s,onDelete:a,onRun:l,onClearResult:c}){var T,S,L;const{project:u}=gt(),[d,p]=k.useState(e),[f,h]=k.useState("assertions");k.useEffect(()=>{p(e)},[e.id]);const m=k.useCallback(N=>{p(W=>({...W,...N})),s(N)},[s]),b=()=>{const N={id:G1(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]};m({invocations:[...d.invocations,N]})},_=(N,W)=>{const E=[...d.invocations];E[N]={...E[N],...W},m({invocations:E})},g=N=>{m({invocations:d.invocations.filter((W,E)=>E!==N)})},x=N=>{const W=[...d.invocations];W[N]={...W[N],expected_tool_calls:[...W[N].expected_tool_calls,{name:"",args:{},args_match_mode:"subset"}]},m({invocations:W})},y=(N,W,E)=>{const O=[...d.invocations],F=[...O[N].expected_tool_calls];F[W]={...F[W],...E},O[N]={...O[N],expected_tool_calls:F},m({invocations:O})},j=(N,W)=>{const E=[...d.invocations];E[N]={...E[N],expected_tool_calls:E[N].expected_tool_calls.filter((O,F)=>F!==W)},m({invocations:E})};return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(Ra,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("input",{type:"text",value:d.name,onChange:N=>m({name:N.target.value}),placeholder:"Test case name"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const N=`${window.location.origin}/project/${n}/evaluate?set=${t}&case=${e.id}`;navigator.clipboard.writeText(N)},title:"Copy link to this test case",children:o.jsx(tp,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:i,children:[i?o.jsx(Ni,{size:14,className:"spinning"}):o.jsx(hr,{size:14}),"Run"]}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:o.jsx(Ue,{size:14})})]}),o.jsxs("div",{className:"tabs",children:[o.jsxs("div",{className:`tab ${f==="assertions"?"active":""}`,onClick:()=>h("assertions"),children:[o.jsx(Ia,{size:14,style:{marginRight:6}}),"Assertions (",d.invocations.length,")"]}),o.jsxs("div",{className:`tab ${f==="rubrics"?"active":""}`,onClick:()=>h("rubrics"),children:[o.jsx(rp,{size:14,style:{marginRight:6}}),"LLM Judges"]}),o.jsxs("div",{className:`tab ${f==="docs"?"active":""}`,onClick:()=>h("docs"),children:[o.jsx(Ci,{size:14,style:{marginRight:6}}),"Docs"]}),o.jsxs("div",{className:`tab ${f==="json"?"active":""}`,onClick:()=>h("json"),children:[o.jsx(jn,{size:14,style:{marginRight:6}}),"JSON"]})]}),o.jsxs("div",{className:"editor-content",children:[f==="assertions"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:{display:"flex",gap:12,marginBottom:12},children:[o.jsxs("div",{style:{flex:1},children:[o.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"target_agent"}),o.jsxs("select",{value:d.target_agent||"",onChange:N=>m({target_agent:N.target.value||void 0}),style:{width:"100%"},children:[o.jsx("option",{value:"",children:"root_agent"}),(T=u==null?void 0:u.agents)==null?void 0:T.map(N=>o.jsx("option",{value:N.name,children:N.name},N.name))]})]}),o.jsxs("div",{style:{flex:1},children:[o.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"tags"}),o.jsx("input",{type:"text",value:d.tags.join(", "),onChange:N=>m({tags:N.target.value.split(",").map(W=>W.trim()).filter(Boolean)}),placeholder:"smoke, regression",style:{width:"100%"}})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("textarea",{value:d.description,onChange:N=>m({description:N.target.value}),placeholder:"What does this test verify?",style:{minHeight:40}})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:["session_input ",o.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(initial state)"})]}),o.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:o.jsx(en,{height:"100%",defaultLanguage:"json",value:(()=>{var W;if((!d.initial_state||Object.keys(d.initial_state).length===0)&&((W=u==null?void 0:u.app)!=null&&W.state_keys)&&u.app.state_keys.length>0){const E={};return u.app.state_keys.forEach(O=>{O.default_value!==void 0?E[O.name]=O.default_value:E[O.name]=O.type==="string"?"":O.type==="number"?0:O.type==="boolean"?!1:O.type==="array"?[]:{}}),JSON.stringify(E,null,2)}return JSON.stringify(d.initial_state,null,2)})(),onChange:N=>{try{N&&m({initial_state:JSON.parse(N)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(Ia,{size:14}),"Conversation Turns"]}),d.invocations.map((N,W)=>o.jsxs("div",{className:"invocation-card",children:[o.jsxs("div",{className:"invocation-number",children:[o.jsx("span",{children:W+1}),d.invocations.length>1&&o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>g(W),style:{padding:4},children:o.jsx(Ue,{size:10})})]}),o.jsxs("div",{className:"invocation-content",children:[o.jsxs("div",{className:"invocation-row",children:[o.jsxs("div",{className:"form-section",children:[o.jsx("label",{children:"User Query"}),o.jsx("textarea",{value:N.user_message,onChange:E=>_(W,{user_message:E.target.value}),placeholder:"The message to send to the agent..."})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("label",{children:["Expected Response ",o.jsx("span",{style:{color:"var(--text-muted)",fontWeight:400},children:"(ROUGE-1)"})]}),o.jsx("textarea",{value:N.expected_response||"",onChange:E=>_(W,{expected_response:E.target.value||void 0}),placeholder:"Expected text (partial match)..."})]})]}),N.expected_tool_calls.map((E,O)=>o.jsxs("div",{className:"tool-call-compact",children:[o.jsx("input",{type:"text",value:E.name,onChange:F=>y(W,O,{name:F.target.value}),placeholder:"tool_name",className:"tool-name-input"}),o.jsxs("div",{className:"pillbox-toggle",children:[o.jsx("button",{className:`pill ${E.args_match_mode==="subset"?"active":""}`,onClick:()=>y(W,O,{args_match_mode:"subset"}),children:"Partial"}),o.jsx("button",{className:`pill ${E.args_match_mode==="exact"?"active":""}`,onClick:()=>y(W,O,{args_match_mode:"exact"}),children:"Exact"})]}),o.jsx("div",{className:"tool-args-editor",children:o.jsx(en,{height:"22px",defaultLanguage:"json",value:JSON.stringify(E.args||{}),onChange:F=>{try{F&&y(W,O,{args:JSON.parse(F)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,wordWrap:"off",scrollbar:{vertical:"hidden",horizontal:"hidden"},overviewRulerLanes:0,hideCursorInOverviewRuler:!0,overviewRulerBorder:!1,renderLineHighlight:"none",fontSize:11,padding:{top:3,bottom:3},automaticLayout:!0}})}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>j(W,O),style:{padding:"4px 6px"},children:o.jsx(Ue,{size:10})})]},O)),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>x(W),style:{marginTop:4},children:[o.jsx(Qe,{size:12})," Assert Tool Call"]})]})]},N.id)),o.jsxs("button",{className:"btn btn-secondary",onClick:b,children:[o.jsx(Qe,{size:14})," Add Turn"]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(Bn,{size:14,style:{marginRight:6}}),"final_session_state ",o.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(optional)"})]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Assert that session state contains these key-value pairs after all turns complete."}),o.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:o.jsx(en,{height:"100%",defaultLanguage:"json",value:d.expected_final_state?JSON.stringify(d.expected_final_state,null,2):"{}",onChange:N=>{if(!N||N==="{}")m({expected_final_state:void 0});else try{m({expected_final_state:JSON.parse(N)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]})]}),f==="rubrics"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"form-section",style:{marginBottom:16},children:[{metric:"safety_v1",label:"safety_v1",default:.8,max:1},{metric:"hallucinations_v1",label:"hallucinations_v1",default:.8,max:1},{metric:"response_evaluation_score",label:"response_evaluation_score",default:3.5,max:5},{metric:"final_response_match_v2",label:"final_response_match_v2",default:.7,max:1}].map(({metric:N,label:W,default:E,max:O})=>{const F=(d.enabled_metrics||[]).find(A=>A.metric===N),K=(F==null?void 0:F.threshold)??E;return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:!!F,onChange:A=>{const M=[...d.enabled_metrics||[]];if(A.target.checked)M.push({metric:N,threshold:E});else{const $=M.findIndex(C=>C.metric===N);$!==-1&&M.splice($,1)}m({enabled_metrics:M})}}),o.jsx("span",{className:"toggle-slider"})]}),o.jsx("span",{style:{fontSize:12,opacity:F?1:.5,minWidth:100},children:W}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:F?1:.4},children:"≥"}),o.jsx("input",{type:"number",min:O===5?1:0,max:O,step:.1,value:K,disabled:!F,onChange:A=>{const M=[...d.enabled_metrics||[]],$=M.findIndex(C=>C.metric===N);$!==-1&&(M[$]={...M[$],threshold:parseFloat(A.target.value)||0},m({enabled_metrics:M}))},style:{width:60,textAlign:"center",opacity:F?1:.3,padding:"2px 4px",fontSize:11}})]},N)})}),o.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--border-color)",margin:"16px 0"}}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Custom Rubrics"}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Natural language criteria evaluated by an LLM judge. Returns pass/fail per rubric."}),d.rubrics.map((N,W)=>o.jsxs("div",{className:"tool-call-row",style:{marginBottom:8},children:[o.jsx("input",{type:"text",value:N.rubric,onChange:E=>{const O=[...d.rubrics];O[W]={rubric:E.target.value},m({rubrics:O})},placeholder:"e.g., The response mentions the return policy",style:{flex:1}}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>m({rubrics:d.rubrics.filter((E,O)=>O!==W)}),children:o.jsx(Ue,{size:12})})]},W)),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>m({rubrics:[...d.rubrics,{rubric:""}]}),children:[o.jsx(Qe,{size:12})," Add Rubric"]})]})]}),f==="docs"&&o.jsxs("div",{style:{fontSize:13,lineHeight:1.6,color:"var(--text-secondary)",overflowY:"auto",maxHeight:"100%"},children:[o.jsx("h3",{style:{marginBottom:16,color:"var(--text-primary)"},children:"Evaluation Test Case Guide"}),o.jsxs("section",{style:{marginBottom:24,padding:12,background:"rgba(var(--accent-primary-rgb), 0.1)",borderRadius:"var(--radius-md)",border:"1px solid var(--accent-primary)"},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Quick Overview"}),o.jsxs("p",{children:["Each test case simulates a ",o.jsx("strong",{children:"multi-turn conversation"})," with an agent. For each turn (invocation), you provide a user message and define what you expect the agent to do."]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Invocations"})," = conversation turns (user messages)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Expected Response"})," = the agent's ",o.jsx("em",{children:"final text reply"})," for that turn"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Expected Tool Calls"})," = tools the agent should invoke during that turn"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Session State"})," = test the ",o.jsx("em",{children:"final state"})," after ALL turns complete"]})]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:'📝 What is "Expected Response"?'}),o.jsxs("p",{children:["The ",o.jsx("strong",{children:"Expected Response"})," is matched against the agent's ",o.jsx("strong",{children:"final response"})," for that specific turn — NOT every message."]}),o.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[o.jsx("p",{style:{marginBottom:8},children:o.jsx("strong",{children:"During one turn, an agent may:"})}),o.jsxs("ul",{style:{marginLeft:20,marginBottom:12},children:[o.jsx("li",{children:"Send intermediate thinking/reasoning messages"}),o.jsx("li",{children:"Call multiple tools"}),o.jsx("li",{children:"Transfer to sub-agents (who may respond)"}),o.jsxs("li",{children:["Finally send a ",o.jsx("em",{children:"concluding response"})]})]}),o.jsxs("p",{children:["Only the ",o.jsx("strong",{children:"last text response"})," from the agent for that turn is compared against your Expected Response."]})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Tip: If you need to verify intermediate steps, use Tool Trajectory matching or custom Rubrics."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🔄 Response Matching (ROUGE-1)"}),o.jsxs("p",{children:["The ",o.jsx("code",{children:"response_match_score"})," uses ",o.jsx("strong",{children:"ROUGE-1 F1 scoring"})," — fuzzy word-level matching:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:"Tokenizes both expected and actual responses into words"}),o.jsx("li",{children:"Calculates word overlap (not exact string match)"}),o.jsx("li",{children:"Returns a score from 0.0 to 1.0"})]}),o.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[o.jsx("p",{children:o.jsx("strong",{children:"Example:"})}),o.jsxs("p",{children:["Expected: ",o.jsx("code",{children:'"The weather in Paris is sunny today"'})]}),o.jsxs("p",{children:["Actual: ",o.jsx("code",{children:'"Today in Paris, expect sunny weather"'})]}),o.jsx("p",{style:{marginTop:8,color:"var(--success)"},children:"✓ High ROUGE-1 score (same words, different order)"})]}),o.jsxs("p",{style:{marginTop:8},children:["A threshold of ",o.jsx("strong",{children:"0.7"})," means 70% word overlap is required to pass."]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🛠️ Tool Trajectory Matching"}),o.jsxs("p",{children:["The ",o.jsx("code",{children:"tool_trajectory_avg_score"})," verifies the agent called expected tools. Match types:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Exact"})," — Same tools in same order, no extras allowed"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"In Order"})," — Expected tools appear in order, extras allowed between"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Any Order"})," — All expected tools present, any order, extras allowed"]})]}),o.jsx("p",{style:{marginTop:8},children:"For each tool, you can match by:"}),o.jsxs("ul",{style:{marginLeft:20,marginTop:4},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Name Only"})," — Just check the tool was called"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Exact Args"})," — Arguments must match exactly (provide JSON)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Args Subset"})," — Your expected args must be present in actual args"]})]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💾 Session State Testing"}),o.jsxs("p",{children:[o.jsx("strong",{children:"Initial State"})," (Settings tab) — Pre-populate session state before running the test:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:"Set user preferences or context"}),o.jsx("li",{children:"Simulate a specific scenario"}),o.jsx("li",{children:"Test state-dependent behavior"})]}),o.jsxs("p",{style:{marginTop:12},children:[o.jsx("strong",{children:"Expected Final State"})," — Verified at the ",o.jsx("em",{children:"very end"})," of the test case, ",o.jsx("strong",{children:"after ALL invocations complete"}),"."]}),o.jsx("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8,borderLeft:"3px solid var(--warning)"},children:o.jsxs("p",{style:{margin:0},children:[o.jsx("strong",{children:"Important:"})," State is tested once after the entire conversation, NOT after each turn. To test state changes per-turn, use separate test cases."]})})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Target Agent (Settings tab)"}),o.jsxs("p",{children:["By default, tests run against the ",o.jsx("strong",{children:"root_agent"})," of your App. You can select a specific sub-agent to test in isolation:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"root_agent"})," — Test the full agent hierarchy (default)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Specific agent"})," — Unit test individual agents"]})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Useful for testing sub-agents independently before integrating into the full system."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📋 Custom Rubrics"}),o.jsx("p",{children:"Rubrics are custom yes/no criteria evaluated by an LLM judge. Examples:"}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:'"Does the response mention the product price?"'}),o.jsx("li",{children:'"Is the tone professional and helpful?"'}),o.jsx("li",{children:'"Does the response avoid mentioning competitors?"'})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Note: Rubric evaluation requires LLM-judged metrics to be enabled in the Eval Set."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📊 Available Metrics"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Metric"}),o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Type"}),o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Description"})]})}),o.jsx("tbody",{children:Object.keys(bn).map(N=>o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("td",{style:{padding:"8px 4px",fontFamily:"var(--font-mono)",fontSize:11},children:N}),o.jsx("td",{style:{padding:"8px 4px"},children:bn[N].requiresJudge?o.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--accent-primary)",color:"white",borderRadius:4},children:"LLM Judge"}):o.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--bg-tertiary)",borderRadius:4},children:"Built-in"})}),o.jsx("td",{style:{padding:"8px 4px",color:"var(--text-muted)"},children:bn[N].description})]},N))})]})]}),o.jsxs("section",{children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💡 Tips"}),o.jsxs("ul",{style:{marginLeft:20},children:[o.jsx("li",{children:"Start with simple single-turn tests, then add complexity"}),o.jsx("li",{children:'Use "In Order" matching for most tool trajectory tests'}),o.jsx("li",{children:"Lower ROUGE thresholds (0.5-0.6) for creative/varied responses"}),o.jsx("li",{children:"Higher thresholds (0.8-0.9) for factual/precise responses"}),o.jsx("li",{children:"Use tags to organize tests by feature or priority"}),o.jsx("li",{children:"Test sub-agents individually using Target Agent selector"})]})]})]}),f==="json"&&o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[o.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:o.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this test case. You can use this with ",o.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval"}),"."]})}),o.jsx("div",{style:{flex:1,minHeight:300,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:o.jsx(en,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify({name:d.name,description:d.description||void 0,tags:(S=d.tags)!=null&&S.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(N=>{var W;return{user_message:N.user_message,expected_response:N.expected_response||void 0,expected_tool_calls:(W=N.expected_tool_calls)!=null&&W.length?N.expected_tool_calls.map(E=>({tool_name:E.tool_name,args:E.match_type!=="name_only"&&Object.keys(E.args||{}).length?E.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(L=d.rubrics)!=null&&L.length?d.rubrics.map(N=>N.rubric):void 0},null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),o.jsx("div",{style:{display:"flex",gap:8},children:o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var W,E;const N=JSON.stringify({name:d.name,description:d.description||void 0,tags:(W=d.tags)!=null&&W.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(O=>{var F;return{user_message:O.user_message,expected_response:O.expected_response||void 0,expected_tool_calls:(F=O.expected_tool_calls)!=null&&F.length?O.expected_tool_calls.map(K=>({tool_name:K.tool_name,args:K.match_type!=="name_only"&&Object.keys(K.args||{}).length?K.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(E=d.rubrics)!=null&&E.length?d.rubrics.map(O=>O.rubric):void 0},null,2);navigator.clipboard.writeText(N)},children:[o.jsx(is,{size:14})," Copy JSON"]})})]})]}),r&&o.jsxs("div",{className:"result-panel",children:[o.jsxs("div",{className:`result-header ${r.passed?"passed":"failed"}`,children:[r.passed?o.jsxs(o.Fragment,{children:[o.jsx(Bn,{size:18})," ",o.jsx("strong",{children:"Passed"})]}):o.jsxs(o.Fragment,{children:[o.jsx(mr,{size:18})," ",o.jsx("strong",{children:"Failed"})]}),o.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:12},children:[r.total_tokens?o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},title:"Total tokens used",children:[r.total_tokens.toLocaleString()," tokens"]}):null,o.jsxs("span",{style:{color:"var(--text-muted)",fontSize:12},children:[r.duration_ms.toFixed(0),"ms"]}),r.session_id&&o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{window.location.href=`/project/${u==null?void 0:u.id}/run?session=${r.session_id}`},title:"View this session in the Run panel",style:{fontSize:11},children:[o.jsx(hv,{size:12}),"View Session"]}),c&&o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Close test results",style:{fontSize:11,padding:"4px 8px"},children:"✕"})]})]}),o.jsx("div",{className:"result-scores",children:r.metric_results.map((N,W)=>{var O;const E=Yo(N.metric,N.score,N.threshold);return o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:`score-value ${N.passed?"passed":"failed"}`,children:E.value}),o.jsx("div",{className:"score-label",children:((O=bn[N.metric])==null?void 0:O.name)||N.metric}),o.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",marginTop:2},children:E.comparison}),N.error&&o.jsx("div",{style:{fontSize:10,color:"var(--error)",marginTop:4},children:N.error})]},W)})}),r.rubric_results&&r.rubric_results.length>0&&o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Custom Rubrics"}),o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:r.rubric_results.map((N,W)=>o.jsxs("div",{style:{padding:"8px 12px",borderRadius:"var(--radius-sm)",background:N.passed?"rgba(var(--success-rgb), 0.1)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${N.passed?"var(--success)":"var(--error)"}`,display:"flex",alignItems:"center",gap:10},children:[o.jsx("span",{style:{fontSize:16,color:N.passed?"var(--success)":"var(--error)",fontWeight:"bold"},children:N.passed?"✓":"✗"}),o.jsxs("div",{style:{flex:1},children:[o.jsx("div",{style:{fontSize:12,color:"var(--text-primary)"},children:N.rubric}),N.error&&o.jsxs("div",{style:{fontSize:10,color:"var(--error)",marginTop:2},children:["Error: ",N.error]})]})]},W))})]}),r.invocation_results.map((N,W)=>o.jsxs("div",{className:"result-details",children:[o.jsxs("h5",{children:["Turn ",W+1,": ",N.user_message.length>50?N.user_message.slice(0,50)+"…":N.user_message]}),N.metric_results.length>0&&o.jsx("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:N.metric_results.map((E,O)=>{var K;const F=Yo(E.metric,E.score,E.threshold);return o.jsxs("span",{style:{fontSize:11,padding:"2px 6px",borderRadius:"var(--radius-sm)",background:E.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:E.passed?"var(--success)":"var(--error)"},children:[((K=bn[E.metric])==null?void 0:K.name)||E.metric,": ",F.value]},O)})}),o.jsxs("div",{className:"detail-box",children:[o.jsx("strong",{children:"Actual Response:"}),`
`,N.actual_response||"(no response)",`

`,N.actual_tool_calls.length>0&&o.jsxs(o.Fragment,{children:[o.jsx("strong",{children:"Tool Calls:"}),`
`,N.actual_tool_calls.map((E,O)=>`  ${O+1}. ${E.name}(${JSON.stringify(E.args)})
`).join("")]})]})]},W)),r.error&&o.jsxs("div",{className:"result-details",children:[o.jsx("h5",{style:{color:"var(--error)"},children:"Error"}),o.jsx("div",{className:"detail-box",style:{color:"var(--error)"},children:r.error})]})]})]})}function Y5({evalSet:e,projectId:t,result:n,isRunning:r,caseResults:i,onUpdate:s,onDelete:a,onRun:l,onExport:c}){var b,_,g,x;const[u,d]=k.useState(e.name),[p,f]=k.useState(!1);k.useEffect(()=>{d(e.name)},[e.id]);const h=k.useCallback(()=>{u!==e.name&&s({name:u})},[u,e.name,s]),m=y=>y==null?"-":`${Math.round(y*100)}%`;return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(gv,{size:20,style:{color:"var(--accent-secondary)"}}),o.jsx("input",{type:"text",value:u,onChange:y=>d(y.target.value),onBlur:h,placeholder:"Eval set name"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const y=`${window.location.origin}/project/${t}/evaluate?set=${e.id}`;navigator.clipboard.writeText(y)},title:"Copy link to this eval set",children:o.jsx(tp,{size:14})}),o.jsxs("button",{className:`btn btn-sm ${p?"btn-primary":"btn-secondary"}`,onClick:()=>f(!p),title:"View/Hide JSON",children:[o.jsx(jn,{size:14}),"JSON"]}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Export as JSON (compatible with adk eval)",children:o.jsx(Li,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:r,children:[r?o.jsx(Ni,{size:14,className:"spinning"}):o.jsx(hr,{size:14}),"Run All"]}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:o.jsx(Ue,{size:14})})]}),o.jsx("div",{className:"editor-content",children:p?o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[o.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:o.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this evaluation set. Save this file and use with ",o.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval <agent_path> <eval_file.json>"})]})}),o.jsx("div",{style:{flex:1,minHeight:400,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:o.jsx(en,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(y=>{var j,T;return{name:y.name,description:y.description||void 0,tags:(j=y.tags)!=null&&j.length?y.tags:void 0,target_agent:y.target_agent!=="root_agent"?y.target_agent:void 0,invocations:y.invocations.map(S=>{var L;return{user_message:S.user_message,expected_response:S.expected_response||void 0,expected_tool_calls:(L=S.expected_tool_calls)!=null&&L.length?S.expected_tool_calls.map(N=>({tool_name:N.tool_name,args:N.match_type!=="name_only"&&Object.keys(N.args||{}).length?N.args:void 0})):void 0}}),session_input:Object.keys(y.session_input||{}).length?{state:y.session_input}:void 0,final_session_state:Object.keys(y.final_session_state||{}).length?y.final_session_state:void 0,rubrics:(T=y.rubrics)!=null&&T.length?y.rubrics.map(S=>S.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((b=e.eval_config.metrics)==null?void 0:b.filter(y=>y.enabled))||void 0}:void 0}],null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),o.jsx("div",{style:{display:"flex",gap:8},children:o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var j;const y=JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(T=>{var S,L;return{name:T.name,description:T.description||void 0,tags:(S=T.tags)!=null&&S.length?T.tags:void 0,target_agent:T.target_agent!=="root_agent"?T.target_agent:void 0,invocations:T.invocations.map(N=>{var W;return{user_message:N.user_message,expected_response:N.expected_response||void 0,expected_tool_calls:(W=N.expected_tool_calls)!=null&&W.length?N.expected_tool_calls.map(E=>({tool_name:E.tool_name,args:E.match_type!=="name_only"&&Object.keys(E.args||{}).length?E.args:void 0})):void 0}}),session_input:Object.keys(T.session_input||{}).length?{state:T.session_input}:void 0,final_session_state:Object.keys(T.final_session_state||{}).length?T.final_session_state:void 0,rubrics:(L=T.rubrics)!=null&&L.length?T.rubrics.map(N=>N.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((j=e.eval_config.metrics)==null?void 0:j.filter(T=>T.enabled))||void 0}:void 0}],null,2);navigator.clipboard.writeText(y)},children:[o.jsx(is,{size:14})," Copy JSON"]})})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("textarea",{value:e.description,onChange:y=>s({description:y.target.value}),placeholder:"Description of this evaluation set...",style:{minHeight:40}})]}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"LLM Judge Model"}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Model used for LLM-judged metrics (safety, hallucinations, etc.)."}),o.jsx(J5,{value:((_=e.eval_config)==null?void 0:_.judge_model)||"",onChange:y=>s({eval_config:{...e.eval_config,judge_model:y}})})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(bv,{size:14})," Evaluation Metrics"]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Configure which metrics to use and their pass thresholds."}),Object.keys(bn).map(y=>{var N,W,E;const j=bn[y],T=(W=(N=e.eval_config)==null?void 0:N.metrics)==null?void 0:W.find(O=>O.metric===y),S=(T==null?void 0:T.enabled)??!1,L=((E=T==null?void 0:T.criterion)==null?void 0:E.threshold)??.7;return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:S,onChange:O=>{var A;const F=[...((A=e.eval_config)==null?void 0:A.metrics)||[]],K=F.findIndex(M=>M.metric===y);O.target.checked?K===-1?F.push({metric:y,enabled:!0,criterion:{threshold:.7}}):F[K]={...F[K],enabled:!0}:K!==-1&&(F[K]={...F[K],enabled:!1}),s({eval_config:{...e.eval_config,metrics:F}})}}),o.jsx("span",{className:"toggle-slider"})]}),o.jsxs("span",{style:{fontSize:12,opacity:S?1:.5,minWidth:140,fontWeight:S?500:400},children:[j.name,j.requiresJudge&&o.jsx("span",{style:{fontSize:9,marginLeft:4,color:"var(--accent-primary)"},children:"LLM"})]}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:S?1:.4},children:"≥"}),o.jsx("input",{type:"number",min:0,max:1,step:.1,value:L,disabled:!S,onChange:O=>{var A;const F=[...((A=e.eval_config)==null?void 0:A.metrics)||[]],K=F.findIndex(M=>M.metric===y);K!==-1&&(F[K]={...F[K],criterion:{...F[K].criterion,threshold:parseFloat(O.target.value)||.7}},s({eval_config:{...e.eval_config,metrics:F}}))},style:{width:60,textAlign:"center",opacity:S?1:.3,padding:"2px 4px",fontSize:11}})]},y)}),o.jsxs("div",{className:"form-row",style:{marginTop:16},children:[o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Default Trajectory Match Type"}),o.jsxs("select",{value:((g=e.eval_config)==null?void 0:g.default_trajectory_match_type)||"in_order",onChange:y=>s({eval_config:{...e.eval_config,default_trajectory_match_type:y.target.value}}),children:[o.jsx("option",{value:"exact",children:"Exact (same order, no extras)"}),o.jsx("option",{value:"in_order",children:"In Order (extras allowed between)"}),o.jsx("option",{value:"any_order",children:"Any Order (all present, any order)"})]})]}),o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Number of Runs"}),o.jsx("input",{type:"number",min:1,max:10,value:((x=e.eval_config)==null?void 0:x.num_runs)||1,onChange:y=>s({eval_config:{...e.eval_config,num_runs:parseInt(y.target.value)||1}})}),o.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:"Run each test multiple times for statistical reliability."})]})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(j_,{size:14})," Coverage Summary"]}),n?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"result-scores",children:[o.jsxs("div",{className:"score-card",children:[o.jsxs("div",{className:"score-value",style:{color:"var(--accent-primary)"},children:[n.passed_cases,"/",n.total_cases]}),o.jsx("div",{className:"score-label",children:"Cases Passed"})]}),o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:`score-value ${n.overall_pass_rate>=.8?"passed":"failed"}`,children:m(n.overall_pass_rate)}),o.jsx("div",{className:"score-label",children:"Pass Rate"})]}),Object.entries(n.metric_avg_scores||{}).map(([y,j])=>{var S;const T=Yo(y,j);return o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:"score-value",children:T.value}),o.jsxs("div",{className:"score-label",children:["Avg ",((S=bn[y])==null?void 0:S.name)||y]})]},y)})]}),o.jsxs("div",{style:{marginTop:16},children:[o.jsx("div",{style:{marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Overall Pass Rate"}),o.jsx("div",{className:"coverage-bar",children:o.jsx("div",{className:`coverage-fill ${n.overall_pass_rate>=.8?"passed":"failed"}`,style:{width:`${n.overall_pass_rate*100}%`}})})]}),Object.entries(n.metric_pass_rates||{}).length>0&&o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Metric Pass Rates"}),Object.entries(n.metric_pass_rates).map(([y,j])=>{var T;return o.jsxs("div",{style:{marginBottom:8},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4},children:[o.jsx("span",{children:((T=bn[y])==null?void 0:T.name)||y}),o.jsx("span",{children:m(j)})]}),o.jsx("div",{className:"coverage-bar",children:o.jsx("div",{className:`coverage-fill ${j>=.8?"passed":"failed"}`,style:{width:`${j*100}%`}})})]},y)})]}),o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Individual Results"}),o.jsxs("table",{style:{width:"100%",fontSize:12,borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Test Case"}),o.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Metrics"}),o.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Status"})]})}),o.jsx("tbody",{children:n.case_results.map(y=>o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("td",{style:{padding:"8px 4px"},children:y.eval_case_name}),o.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:y.metric_results.map((j,T)=>{const S=Yo(j.metric,j.score,j.threshold);return o.jsx("span",{style:{fontSize:10,padding:"2px 4px",marginRight:4,borderRadius:"var(--radius-sm)",background:j.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:j.passed?"var(--success)":"var(--error)"},children:S.value},T)})}),o.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:y.passed?o.jsx(Bn,{size:14,style:{color:"var(--success)"}}):y.error?o.jsx(Ci,{size:14,style:{color:"var(--warning)"}}):o.jsx(mr,{size:14,style:{color:"var(--error)"}})})]},y.eval_case_id))})]})]})]}):o.jsxs("div",{style:{textAlign:"center",padding:"32px",color:"var(--text-muted)",background:"var(--bg-tertiary)",borderRadius:"var(--radius-md)"},children:[o.jsx(rp,{size:32,style:{marginBottom:8,opacity:.3}}),o.jsx("p",{children:"Run the evaluation set to see coverage metrics"})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:["Test Cases (",e.eval_cases.length,")"]}),e.eval_cases.length===0?o.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"No test cases yet. Add cases to this eval set to start testing."}):o.jsx("ul",{style:{listStyle:"none",padding:0},children:e.eval_cases.map(y=>{const j=i.get(y.id);return o.jsxs("li",{style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",background:"var(--bg-tertiary)",borderRadius:"var(--radius-sm)",marginBottom:8},children:[j?j.passed?o.jsx(Bn,{size:14,style:{color:"var(--success)"}}):o.jsx(mr,{size:14,style:{color:"var(--error)"}}):o.jsx(Ra,{size:14,style:{color:"var(--text-muted)"}}),o.jsx("span",{style:{flex:1},children:y.name}),o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},children:[y.invocations.length," turn(s)"]})]},y.id)})})]})]})})]})}function Q5(){const{project:e,setProject:t}=gt(),[n,r]=k.useState(""),[i,s]=k.useState(!0),[a,l]=k.useState(!1),[c,u]=k.useState(null),[d,p]=k.useState(!1);if(!e)return null;k.useEffect(()=>{f()},[e.id]);async function f(){s(!0),u(null);try{const x=await ev(e.id);r(x),l(!1)}catch(x){u(x.message)}finally{s(!1)}}function h(x){x!==void 0&&(r(x),l(!0),u(null))}async function m(){s(!0),u(null);try{const x=await tv(e.id,n);t(x),l(!1)}catch(x){u(x.message)}finally{s(!1)}}function b(){navigator.clipboard.writeText(n),p(!0),setTimeout(()=>p(!1),2e3)}function _(){const x=new Blob([n],{type:"text/yaml"}),y=URL.createObjectURL(x),j=document.createElement("a");j.href=y,j.download=`${e.name}.yaml`,j.click(),URL.revokeObjectURL(y)}function g(){const x=document.createElement("input");x.type="file",x.accept=".yaml,.yml",x.onchange=async y=>{var S;const j=(S=y.target.files)==null?void 0:S[0];if(!j)return;const T=await j.text();r(T),l(!0)},x.click()}return o.jsxs("div",{className:"yaml-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"yaml-header",children:[o.jsxs("div",{className:"yaml-title",children:[o.jsx("h3",{children:"Project Configuration"}),a&&o.jsxs("span",{className:"status-badge warning",children:[o.jsx(Ci,{size:12}),"Unsaved changes"]}),c&&o.jsxs("span",{className:"status-badge error",children:[o.jsx(Ci,{size:12}),c]}),d&&o.jsxs("span",{className:"status-badge success",children:[o.jsx(Qd,{size:12}),"Copied!"]})]}),o.jsxs("div",{className:"yaml-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:b,title:"Copy to clipboard",children:[o.jsx(is,{size:14}),"Copy"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:_,title:"Download YAML",children:[o.jsx(Li,{size:14}),"Download"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:g,title:"Upload YAML",children:[o.jsx(hl,{size:14}),"Upload"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:f,title:"Reload from server",children:[o.jsx(Zt,{size:14}),"Reload"]}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:m,disabled:!a||i,children:"Apply Changes"})]})]}),o.jsx("div",{className:"yaml-editor",children:o.jsx(en,{height:"100%",language:"yaml",theme:"vs-dark",value:n,onChange:h,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),o.jsxs("div",{className:"yaml-info",children:[o.jsx("p",{children:"This YAML represents your entire project configuration including the app, agents, tools, and state keys."}),o.jsxs("p",{children:["You can edit the YAML directly, then click ",o.jsx("code",{children:"Apply Changes"})," to update the project. Use ",o.jsx("code",{children:"Download"})," to save a backup or ",o.jsx("code",{children:"Upload"})," to import a configuration."]})]})]})}function X5(){const{project:e}=gt(),[t,n]=k.useState(!1),[r,i]=k.useState(""),[s,a]=k.useState(!1),[l,c]=k.useState(null);if(k.useEffect(()=>{e&&(a(!0),c(null),fetch(`/api/projects/${e.id}/code`).then(p=>{if(!p.ok)throw new Error("Failed to fetch code");return p.json()}).then(p=>{let f=p.code||"";f=f.replace(/\n# --- Callback instrumentation \(for event tracking\) ---[\s\S]*?# --- End callback instrumentation ---\n/g,""),f=f.replace(/_wrap_callback\("[^"]+",\s*"[^"]+",\s*(\w+)\)/g,"$1"),i(f),a(!1)}).catch(p=>{c(p.message),a(!1),i("# Failed to generate code. Please check the backend logs.")}))},[e]),!e)return null;function u(){navigator.clipboard.writeText(r),n(!0),setTimeout(()=>n(!1),2e3)}function d(){if(!e)return;const p=new Blob([r],{type:"text/x-python"}),f=URL.createObjectURL(p),h=document.createElement("a");h.href=f,h.download=`${e.name}_agent.py`,h.click(),URL.revokeObjectURL(f)}return o.jsxs("div",{className:"code-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"code-header",children:[o.jsxs("div",{className:"code-title",children:[o.jsx(jn,{size:16}),o.jsx("h3",{children:"Python Code"}),o.jsx("span",{className:"badge",children:s?"Loading...":"Generated"}),t&&o.jsxs("span",{className:"status-badge success",children:[o.jsx(Qd,{size:12}),"Copied!"]}),l&&o.jsxs("span",{className:"status-badge error",children:[o.jsx(Ci,{size:12}),"Error"]})]}),o.jsxs("div",{className:"code-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:u,title:"Copy to clipboard",disabled:s||!!l,children:[o.jsx(is,{size:14}),"Copy"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:d,title:"Download Python file",disabled:s||!!l,children:[o.jsx(Li,{size:14}),"Download"]})]})]}),o.jsx("div",{className:"code-editor",children:s?o.jsx("div",{className:"code-loading",children:o.jsx("div",{children:"Loading generated code..."})}):l?o.jsxs("div",{className:"code-error",children:[o.jsx(Ci,{size:24}),o.jsx("div",{children:l})]}):o.jsx(en,{height:"100%",language:"python",theme:"vs-dark",value:r,options:{readOnly:!0,minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),o.jsxs("div",{className:"code-info",children:[o.jsx("p",{children:"This is the Python code equivalent of your project configuration. You can use this code directly with ADK."}),o.jsxs("p",{children:["Place this in a file named ",o.jsx("code",{children:"agent.py"})," inside your agent directory, then run with ",o.jsx("code",{children:"adk web ."})," or ",o.jsx("code",{children:"adk run your_agent"}),"."]})]})]})}const Z5=[{id:"app",label:"App",icon:bv},{id:"agents",label:"Agents",icon:Ar},{id:"tools",label:"Tools",icon:pn},{id:"callbacks",label:"Callbacks",icon:jn},{id:"run",label:"Run",icon:xv},{id:"skillsets",label:"SkillSets",icon:f_},{id:"eval",label:"Evaluate",icon:zu},{id:"yaml",label:"YAML",icon:m_},{id:"code",label:"Code",icon:jn}],e8=["app","agents","tools","callbacks","run","skillsets","eval","yaml","code"];function Ec(){var M,$;const{projectId:e,tab:t,itemId:n}=hk(),r=Jd(),{project:i,setProject:s,activeTab:a,setActiveTab:l,hasUnsavedChanges:c,setHasUnsavedChanges:u,selectedAgentId:d,setSelectedAgentId:p,selectedToolId:f,setSelectedToolId:h}=gt(),[m,b]=k.useState(!0),[_,g]=k.useState(!1),[x,y]=k.useState(!1),[j,T]=k.useState(null),S=k.useRef(!0),L=k.useRef(null);k.useEffect(()=>{t&&e8.includes(t)?l(t):!t&&e&&r(`/project/${e}/${a}`,{replace:!0})},[t,e]),k.useEffect(()=>{t==="agents"&&n?p(n):t==="tools"&&n&&h(n)},[t,n]);function N(C){l(C),C==="agents"&&d?r(`/project/${e}/${C}/${d}`,{replace:!0}):C==="tools"&&f?r(`/project/${e}/${C}/${f}`,{replace:!0}):r(`/project/${e}/${C}`,{replace:!0})}function W(C){C?r(`/project/${e}/${a}/${C}`,{replace:!0}):r(`/project/${e}/${a}`,{replace:!0})}k.useEffect(()=>(e&&E(e),()=>{s(null),u(!1)}),[e]);async function E(C){S.current=!0;try{const P=await Ky(C);s(P),L.current=JSON.stringify(P),u(!1)}catch(P){console.error("Failed to load project:",P),r("/")}finally{b(!1),setTimeout(()=>{S.current=!1},100)}}async function O(){if(i){g(!0);try{const{eval_sets:C,...P}=i;await ju(i.id,P),L.current=JSON.stringify(i),u(!1)}catch(C){console.error("Failed to save project:",C)}finally{g(!1)}}}async function F(){if(i){y(!0),T(null),window.dispatchEvent(new CustomEvent("eval-tests-started"));try{let C=0,P=0;const I=[],w=[];for(const B of i.eval_sets||[]){if(B.eval_cases.length===0)continue;const G=await Ge.post(`/projects/${i.id}/eval-sets/${B.id}/run`,{});G.result&&(C+=G.result.passed_cases||0,P+=G.result.total_cases||0,G.result.case_results&&I.push(...G.result.case_results),w.push(G.result.eval_set_name||B.name||B.id))}if(I.length>0){const B={id:Date.now().toString(36)+Math.random().toString(36).substr(2,5),eval_set_id:"batch",eval_set_name:w.length>1?`All Tests (${w.length} sets)`:w[0]||"All Tests",started_at:Date.now()/1e3,completed_at:Date.now()/1e3,total_cases:P,passed_cases:C,failed_cases:P-C,case_results:I};try{await Ge.post(`/projects/${i.id}/eval-history`,B)}catch(G){console.warn("Failed to save batch eval run to history:",G)}}T({passed:C,total:P}),window.dispatchEvent(new CustomEvent("eval-tests-completed")),setTimeout(()=>T(null),5e3)}catch(C){console.error("Failed to run tests:",C),T({passed:0,total:-1}),setTimeout(()=>T(null),5e3)}finally{y(!1)}}}const K=k.useRef(null);k.useEffect(()=>{if(i&&!S.current&&K.current){const C=i.app.models||[],P=K.current||[];if(C.some((w,B)=>{const G=P.find(v=>v.id===w.id);return G?G.provider!==w.provider||G.model_name!==w.model_name||G.api_base!==w.api_base||G.temperature!==w.temperature||G.max_output_tokens!==w.max_output_tokens||G.top_p!==w.top_p||G.top_k!==w.top_k:!1})){const w=i.app.default_model_id,B=i.agents.map(v=>{if(v.type==="LlmAgent"&&v.model){const z=v.model._appModelId;if(z){const V=C.find(ie=>ie.id===z);if(V)return{...v,model:{provider:V.provider,model_name:V.model_name,api_base:V.api_base,temperature:V.temperature,max_output_tokens:V.max_output_tokens,top_p:V.top_p,top_k:V.top_k,fallbacks:[],_appModelId:z}}}else if(w){const V=C.find(ie=>ie.id===w);if(V&&v.model.provider===V.provider&&v.model.model_name===V.model_name&&v.model.api_base===V.api_base)return{...v,model:{provider:V.provider,model_name:V.model_name,api_base:V.api_base,temperature:V.temperature,max_output_tokens:V.max_output_tokens,top_p:V.top_p,top_k:V.top_k,fallbacks:[],_appModelId:w}}}}return v});B.some((v,z)=>JSON.stringify(v)!==JSON.stringify(i.agents[z]))&&s({...i,agents:B})}}i&&(K.current=i.app.models||[])},[i==null?void 0:i.app.models,i,s]);const A=k.useRef(null);return k.useEffect(()=>(i&&!S.current&&L.current&&JSON.stringify(i)!==L.current&&(u(!0),A.current&&clearTimeout(A.current),A.current=setTimeout(async()=>{try{const{eval_sets:P,...I}=i;await ju(i.id,I),L.current=JSON.stringify(i),u(!1)}catch(P){console.error("Auto-save failed:",P)}},500)),()=>{A.current&&clearTimeout(A.current)}),[i]),m?o.jsxs("div",{className:"loading-screen",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("header",{className:"top-bar",children:[o.jsxs("div",{className:"top-bar-left",children:[o.jsxs("button",{className:"back-btn",onClick:()=>r("/"),children:[o.jsx(d_,{size:18}),"Project"]}),o.jsx("h1",{className:"project-name",children:i.name})]}),o.jsx("nav",{className:"tabs-bar",children:Z5.map(C=>o.jsxs("button",{className:`tab-btn ${a===C.id?"active":""}`,onClick:()=>N(C.id),children:[o.jsx(C.icon,{size:14}),C.label]},C.id))}),o.jsxs("div",{className:"top-bar-right",children:[o.jsxs("button",{className:`btn ${j?j.total===-1?"btn-error":j.passed===j.total?"btn-success":"btn-warning":"btn-secondary"}`,onClick:F,disabled:x||!((M=i==null?void 0:i.eval_sets)!=null&&M.some(C=>C.eval_cases.length>0)),title:($=i==null?void 0:i.eval_sets)!=null&&$.some(C=>C.eval_cases.length>0)?"Run all evaluation tests":"No test cases defined",style:{marginRight:8},children:[x?o.jsx(yv,{size:16,className:"spin"}):o.jsx(hr,{size:16}),x?"Testing...":j?j.total===-1?"Error":`${j.passed}/${j.total}`:"Test"]}),o.jsxs("button",{className:"btn btn-primary",onClick:O,disabled:_,children:[o.jsx(Oa,{size:16}),_?"Saving...":"Save"]})]})]}),o.jsxs("main",{className:"main-content",children:[a==="app"&&o.jsx(I_,{}),a==="agents"&&o.jsx(W4,{onSelectAgent:W}),a==="tools"&&o.jsx(_E,{onSelectTool:W}),a==="callbacks"&&o.jsx(SE,{onSelectCallback:W}),a==="run"&&o.jsx(B5,{}),a==="skillsets"&&o.jsx(V5,{}),a==="eval"&&o.jsx(q5,{}),a==="yaml"&&o.jsx(Q5,{}),a==="code"&&o.jsx(X5,{})]})]}):null}function t8(){const{setMcpServers:e,setBuiltinTools:t}=gt();return k.useEffect(()=>{Gd().then(e).catch(console.error),nv().then(t).catch(console.error)},[e,t]),o.jsxs(Ak,{children:[o.jsx(Kr,{path:"/",element:o.jsx(z_,{})}),o.jsx(Kr,{path:"/project/:projectId",element:o.jsx(Ec,{})}),o.jsx(Kr,{path:"/project/:projectId/:tab",element:o.jsx(Ec,{})}),o.jsx(Kr,{path:"/project/:projectId/:tab/:itemId",element:o.jsx(Ec,{})}),o.jsx(Kr,{path:"*",element:o.jsx(zk,{to:"/",replace:!0})})]})}zc.createRoot(document.getElementById("root")).render(o.jsx(Wt.StrictMode,{children:o.jsx(Lk,{children:o.jsx(t8,{})})}));
