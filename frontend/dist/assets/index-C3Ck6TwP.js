function l0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var sa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qa(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pg={exports:{}},Ja={},fg={exports:{}},Ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Go=Symbol.for("react.element"),c0=Symbol.for("react.portal"),u0=Symbol.for("react.fragment"),d0=Symbol.for("react.strict_mode"),p0=Symbol.for("react.profiler"),f0=Symbol.for("react.provider"),h0=Symbol.for("react.context"),m0=Symbol.for("react.forward_ref"),g0=Symbol.for("react.suspense"),x0=Symbol.for("react.memo"),y0=Symbol.for("react.lazy"),cf=Symbol.iterator;function v0(e){return e===null||typeof e!="object"?null:(e=cf&&e[cf]||e["@@iterator"],typeof e=="function"?e:null)}var hg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mg=Object.assign,gg={};function Ni(e,t,n){this.props=e,this.context=t,this.refs=gg,this.updater=n||hg}Ni.prototype.isReactComponent={};Ni.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ni.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function xg(){}xg.prototype=Ni.prototype;function qu(e,t,n){this.props=e,this.context=t,this.refs=gg,this.updater=n||hg}var Ju=qu.prototype=new xg;Ju.constructor=qu;mg(Ju,Ni.prototype);Ju.isPureReactComponent=!0;var uf=Array.isArray,yg=Object.prototype.hasOwnProperty,Ku={current:null},vg={key:!0,ref:!0,__self:!0,__source:!0};function bg(e,t,n){var r,i={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)yg.call(t,r)&&!vg.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Go,type:e,key:s,ref:a,props:i,_owner:Ku.current}}function b0(e,t){return{$$typeof:Go,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Gu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Go}function w0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var df=/\/+/g;function Sl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?w0(""+e.key):t.toString(36)}function Fs(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Go:case c0:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Sl(a,0):r,uf(i)?(n="",e!=null&&(n=e.replace(df,"$&/")+"/"),Fs(i,t,n,"",function(u){return u})):i!=null&&(Gu(i)&&(i=b0(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(df,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",uf(e))for(var l=0;l<e.length;l++){s=e[l];var c=r+Sl(s,l);a+=Fs(s,t,n,c,i)}else if(c=v0(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=r+Sl(s,l++),a+=Fs(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function fs(e,t,n){if(e==null)return e;var r=[],i=0;return Fs(e,r,"","",function(s){return t.call(n,s,i++)}),r}function k0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var vt={current:null},Bs={transition:null},_0={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:Bs,ReactCurrentOwner:Ku};function wg(){throw Error("act(...) is not supported in production builds of React.")}Ne.Children={map:fs,forEach:function(e,t,n){fs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return fs(e,function(){t++}),t},toArray:function(e){return fs(e,function(t){return t})||[]},only:function(e){if(!Gu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ne.Component=Ni;Ne.Fragment=u0;Ne.Profiler=p0;Ne.PureComponent=qu;Ne.StrictMode=d0;Ne.Suspense=g0;Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_0;Ne.act=wg;Ne.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=mg({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=Ku.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)yg.call(t,c)&&!vg.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Go,type:e.type,key:i,ref:s,props:r,_owner:a}};Ne.createContext=function(e){return e={$$typeof:h0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:f0,_context:e},e.Consumer=e};Ne.createElement=bg;Ne.createFactory=function(e){var t=bg.bind(null,e);return t.type=e,t};Ne.createRef=function(){return{current:null}};Ne.forwardRef=function(e){return{$$typeof:m0,render:e}};Ne.isValidElement=Gu;Ne.lazy=function(e){return{$$typeof:y0,_payload:{_status:-1,_result:e},_init:k0}};Ne.memo=function(e,t){return{$$typeof:x0,type:e,compare:t===void 0?null:t}};Ne.startTransition=function(e){var t=Bs.transition;Bs.transition={};try{e()}finally{Bs.transition=t}};Ne.unstable_act=wg;Ne.useCallback=function(e,t){return vt.current.useCallback(e,t)};Ne.useContext=function(e){return vt.current.useContext(e)};Ne.useDebugValue=function(){};Ne.useDeferredValue=function(e){return vt.current.useDeferredValue(e)};Ne.useEffect=function(e,t){return vt.current.useEffect(e,t)};Ne.useId=function(){return vt.current.useId()};Ne.useImperativeHandle=function(e,t,n){return vt.current.useImperativeHandle(e,t,n)};Ne.useInsertionEffect=function(e,t){return vt.current.useInsertionEffect(e,t)};Ne.useLayoutEffect=function(e,t){return vt.current.useLayoutEffect(e,t)};Ne.useMemo=function(e,t){return vt.current.useMemo(e,t)};Ne.useReducer=function(e,t,n){return vt.current.useReducer(e,t,n)};Ne.useRef=function(e){return vt.current.useRef(e)};Ne.useState=function(e){return vt.current.useState(e)};Ne.useSyncExternalStore=function(e,t,n){return vt.current.useSyncExternalStore(e,t,n)};Ne.useTransition=function(){return vt.current.useTransition()};Ne.version="18.3.1";fg.exports=Ne;var k=fg.exports;const Bt=qa(k),j0=l0({__proto__:null,default:Bt},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S0=k,C0=Symbol.for("react.element"),N0=Symbol.for("react.fragment"),E0=Object.prototype.hasOwnProperty,z0=S0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T0={key:!0,ref:!0,__self:!0,__source:!0};function kg(e,t,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)E0.call(t,r)&&!T0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:C0,type:e,key:s,ref:a,props:i,_owner:z0.current}}Ja.Fragment=N0;Ja.jsx=kg;Ja.jsxs=kg;pg.exports=Ja;var o=pg.exports,Sc={},_g={exports:{}},Ht={},jg={exports:{}},Sg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,M){var w=L.length;L.push(M);e:for(;0<w;){var H=w-1>>>1,K=L[H];if(0<i(K,M))L[H]=M,L[w]=K,w=H;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var M=L[0],w=L.pop();if(w!==M){L[0]=w;e:for(var H=0,K=L.length,b=K>>>1;H<b;){var z=2*(H+1)-1,F=L[z],U=z+1,ee=L[U];if(0>i(F,w))U<K&&0>i(ee,F)?(L[H]=ee,L[U]=w,H=U):(L[H]=F,L[z]=w,H=z);else if(U<K&&0>i(ee,w))L[H]=ee,L[U]=w,H=U;else break e}}return M}function i(L,M){var w=L.sortIndex-M.sortIndex;return w!==0?w:L.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,p=null,f=3,h=!1,g=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(L){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=L)r(u),M.sortIndex=M.expirationTime,t(c,M);else break;M=n(u)}}function j(L){if(v=!1,y(L),!g)if(n(c)!==null)g=!0,D(A);else{var M=n(u);M!==null&&C(j,M.startTime-L)}}function A(L,M){g=!1,v&&(v=!1,m(N),N=-1),h=!0;var w=f;try{for(y(M),p=n(c);p!==null&&(!(p.expirationTime>M)||L&&!I());){var H=p.callback;if(typeof H=="function"){p.callback=null,f=p.priorityLevel;var K=H(p.expirationTime<=M);M=e.unstable_now(),typeof K=="function"?p.callback=K:p===n(c)&&r(c),y(M)}else r(c);p=n(c)}if(p!==null)var b=!0;else{var z=n(u);z!==null&&C(j,z.startTime-M),b=!1}return b}finally{p=null,f=w,h=!1}}var S=!1,P=null,N=-1,V=5,E=-1;function I(){return!(e.unstable_now()-E<V)}function R(){if(P!==null){var L=e.unstable_now();E=L;var M=!0;try{M=P(!0,L)}finally{M?q():(S=!1,P=null)}}else S=!1}var q;if(typeof x=="function")q=function(){x(R)};else if(typeof MessageChannel<"u"){var T=new MessageChannel,O=T.port2;T.port1.onmessage=R,q=function(){O.postMessage(null)}}else q=function(){_(R,0)};function D(L){P=L,S||(S=!0,q())}function C(L,M){N=_(function(){L(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){g||h||(g=!0,D(A))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(L){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var w=f;f=M;try{return L()}finally{f=w}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,M){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var w=f;f=L;try{return M()}finally{f=w}},e.unstable_scheduleCallback=function(L,M,w){var H=e.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?H+w:H):w=H,L){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=w+K,L={id:d++,callback:M,priorityLevel:L,startTime:w,expirationTime:K,sortIndex:-1},w>H?(L.sortIndex=w,t(u,L),n(c)===null&&L===n(u)&&(v?(m(N),N=-1):v=!0,C(j,w-H))):(L.sortIndex=K,t(c,L),g||h||(g=!0,D(A))),L},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(L){var M=f;return function(){var w=f;f=M;try{return L.apply(this,arguments)}finally{f=w}}}})(Sg);jg.exports=Sg;var A0=jg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0=k,Vt=A0;function ie(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cg=new Set,wo={};function Fr(e,t){gi(e,t),gi(e+"Capture",t)}function gi(e,t){for(wo[e]=t,e=0;e<t.length;e++)Cg.add(t[e])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cc=Object.prototype.hasOwnProperty,M0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pf={},ff={};function L0(e){return Cc.call(ff,e)?!0:Cc.call(pf,e)?!1:M0.test(e)?ff[e]=!0:(pf[e]=!0,!1)}function R0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function I0(e,t,n,r){if(t===null||typeof t>"u"||R0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function bt(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ct[e]=new bt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ct[t]=new bt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ct[e]=new bt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ct[e]=new bt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ct[e]=new bt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ct[e]=new bt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ct[e]=new bt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ct[e]=new bt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ct[e]=new bt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Yu=/[\-:]([a-z])/g;function Qu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Yu,Qu);ct[t]=new bt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Yu,Qu);ct[t]=new bt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Yu,Qu);ct[t]=new bt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ct[e]=new bt(e,1,!1,e.toLowerCase(),null,!1,!1)});ct.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ct[e]=new bt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xu(e,t,n,r){var i=ct.hasOwnProperty(t)?ct[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(I0(t,n,i,r)&&(n=null),r||i===null?L0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Un=P0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hs=Symbol.for("react.element"),Jr=Symbol.for("react.portal"),Kr=Symbol.for("react.fragment"),Zu=Symbol.for("react.strict_mode"),Nc=Symbol.for("react.profiler"),Ng=Symbol.for("react.provider"),Eg=Symbol.for("react.context"),ed=Symbol.for("react.forward_ref"),Ec=Symbol.for("react.suspense"),zc=Symbol.for("react.suspense_list"),td=Symbol.for("react.memo"),Hn=Symbol.for("react.lazy"),zg=Symbol.for("react.offscreen"),hf=Symbol.iterator;function $i(e){return e===null||typeof e!="object"?null:(e=hf&&e[hf]||e["@@iterator"],typeof e=="function"?e:null)}var He=Object.assign,Cl;function Zi(e){if(Cl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Cl=t&&t[1]||""}return`
`+Cl+e}var Nl=!1;function El(e,t){if(!e||Nl)return"";Nl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{Nl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Zi(e):""}function O0(e){switch(e.tag){case 5:return Zi(e.type);case 16:return Zi("Lazy");case 13:return Zi("Suspense");case 19:return Zi("SuspenseList");case 0:case 2:case 15:return e=El(e.type,!1),e;case 11:return e=El(e.type.render,!1),e;case 1:return e=El(e.type,!0),e;default:return""}}function Tc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kr:return"Fragment";case Jr:return"Portal";case Nc:return"Profiler";case Zu:return"StrictMode";case Ec:return"Suspense";case zc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Eg:return(e.displayName||"Context")+".Consumer";case Ng:return(e._context.displayName||"Context")+".Provider";case ed:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case td:return t=e.displayName||null,t!==null?t:Tc(e.type)||"Memo";case Hn:t=e._payload,e=e._init;try{return Tc(e(t))}catch{}}return null}function $0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tc(t);case 8:return t===Zu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ur(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Tg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function D0(e){var t=Tg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ms(e){e._valueTracker||(e._valueTracker=D0(e))}function Ag(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Tg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function aa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ac(e,t){var n=t.checked;return He({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function mf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ur(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Pg(e,t){t=t.checked,t!=null&&Xu(e,"checked",t,!1)}function Pc(e,t){Pg(e,t);var n=ur(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Mc(e,t.type,n):t.hasOwnProperty("defaultValue")&&Mc(e,t.type,ur(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function gf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Mc(e,t,n){(t!=="number"||aa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var eo=Array.isArray;function si(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ur(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Lc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(ie(91));return He({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(ie(92));if(eo(n)){if(1<n.length)throw Error(ie(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ur(n)}}function Mg(e,t){var n=ur(t.value),r=ur(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function yf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Lg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Lg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gs,Rg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(gs=gs||document.createElement("div"),gs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=gs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ko(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var so={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},F0=["Webkit","ms","Moz","O"];Object.keys(so).forEach(function(e){F0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),so[t]=so[e]})});function Ig(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||so.hasOwnProperty(e)&&so[e]?(""+t).trim():t+"px"}function Og(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ig(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var B0=He({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ic(e,t){if(t){if(B0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(ie(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(ie(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(ie(61))}if(t.style!=null&&typeof t.style!="object")throw Error(ie(62))}}function Oc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $c=null;function nd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dc=null,ai=null,li=null;function vf(e){if(e=Xo(e)){if(typeof Dc!="function")throw Error(ie(280));var t=e.stateNode;t&&(t=Xa(t),Dc(e.stateNode,e.type,t))}}function $g(e){ai?li?li.push(e):li=[e]:ai=e}function Dg(){if(ai){var e=ai,t=li;if(li=ai=null,vf(e),t)for(e=0;e<t.length;e++)vf(t[e])}}function Fg(e,t){return e(t)}function Bg(){}var zl=!1;function Ug(e,t,n){if(zl)return e(t,n);zl=!0;try{return Fg(e,t,n)}finally{zl=!1,(ai!==null||li!==null)&&(Bg(),Dg())}}function _o(e,t){var n=e.stateNode;if(n===null)return null;var r=Xa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(ie(231,t,typeof n));return n}var Fc=!1;if(On)try{var Di={};Object.defineProperty(Di,"passive",{get:function(){Fc=!0}}),window.addEventListener("test",Di,Di),window.removeEventListener("test",Di,Di)}catch{Fc=!1}function U0(e,t,n,r,i,s,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var ao=!1,la=null,ca=!1,Bc=null,V0={onError:function(e){ao=!0,la=e}};function W0(e,t,n,r,i,s,a,l,c){ao=!1,la=null,U0.apply(V0,arguments)}function H0(e,t,n,r,i,s,a,l,c){if(W0.apply(this,arguments),ao){if(ao){var u=la;ao=!1,la=null}else throw Error(ie(198));ca||(ca=!0,Bc=u)}}function Br(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Vg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bf(e){if(Br(e)!==e)throw Error(ie(188))}function q0(e){var t=e.alternate;if(!t){if(t=Br(e),t===null)throw Error(ie(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return bf(i),e;if(s===r)return bf(i),t;s=s.sibling}throw Error(ie(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(ie(189))}}if(n.alternate!==r)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?e:t}function Wg(e){return e=q0(e),e!==null?Hg(e):null}function Hg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Hg(e);if(t!==null)return t;e=e.sibling}return null}var qg=Vt.unstable_scheduleCallback,wf=Vt.unstable_cancelCallback,J0=Vt.unstable_shouldYield,K0=Vt.unstable_requestPaint,Ge=Vt.unstable_now,G0=Vt.unstable_getCurrentPriorityLevel,rd=Vt.unstable_ImmediatePriority,Jg=Vt.unstable_UserBlockingPriority,ua=Vt.unstable_NormalPriority,Y0=Vt.unstable_LowPriority,Kg=Vt.unstable_IdlePriority,Ka=null,wn=null;function Q0(e){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(Ka,e,void 0,(e.current.flags&128)===128)}catch{}}var cn=Math.clz32?Math.clz32:eb,X0=Math.log,Z0=Math.LN2;function eb(e){return e>>>=0,e===0?32:31-(X0(e)/Z0|0)|0}var xs=64,ys=4194304;function to(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function da(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=to(l):(s&=a,s!==0&&(r=to(s)))}else a=n&~i,a!==0?r=to(a):s!==0&&(r=to(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-cn(t),i=1<<n,r|=e[n],t&=~i;return r}function tb(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nb(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-cn(s),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=tb(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function Uc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Gg(){var e=xs;return xs<<=1,!(xs&4194240)&&(xs=64),e}function Tl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-cn(t),e[t]=n}function rb(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-cn(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function id(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-cn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Pe=0;function Yg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Qg,od,Xg,Zg,ex,Vc=!1,vs=[],tr=null,nr=null,rr=null,jo=new Map,So=new Map,Kn=[],ib="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kf(e,t){switch(e){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":jo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(t.pointerId)}}function Fi(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Xo(t),t!==null&&od(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ob(e,t,n,r,i){switch(t){case"focusin":return tr=Fi(tr,e,t,n,r,i),!0;case"dragenter":return nr=Fi(nr,e,t,n,r,i),!0;case"mouseover":return rr=Fi(rr,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return jo.set(s,Fi(jo.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,So.set(s,Fi(So.get(s)||null,e,t,n,r,i)),!0}return!1}function tx(e){var t=kr(e.target);if(t!==null){var n=Br(t);if(n!==null){if(t=n.tag,t===13){if(t=Vg(n),t!==null){e.blockedOn=t,ex(e.priority,function(){Xg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Us(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Wc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);$c=r,n.target.dispatchEvent(r),$c=null}else return t=Xo(n),t!==null&&od(t),e.blockedOn=n,!1;t.shift()}return!0}function _f(e,t,n){Us(e)&&n.delete(t)}function sb(){Vc=!1,tr!==null&&Us(tr)&&(tr=null),nr!==null&&Us(nr)&&(nr=null),rr!==null&&Us(rr)&&(rr=null),jo.forEach(_f),So.forEach(_f)}function Bi(e,t){e.blockedOn===t&&(e.blockedOn=null,Vc||(Vc=!0,Vt.unstable_scheduleCallback(Vt.unstable_NormalPriority,sb)))}function Co(e){function t(i){return Bi(i,e)}if(0<vs.length){Bi(vs[0],e);for(var n=1;n<vs.length;n++){var r=vs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(tr!==null&&Bi(tr,e),nr!==null&&Bi(nr,e),rr!==null&&Bi(rr,e),jo.forEach(t),So.forEach(t),n=0;n<Kn.length;n++)r=Kn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Kn.length&&(n=Kn[0],n.blockedOn===null);)tx(n),n.blockedOn===null&&Kn.shift()}var ci=Un.ReactCurrentBatchConfig,pa=!0;function ab(e,t,n,r){var i=Pe,s=ci.transition;ci.transition=null;try{Pe=1,sd(e,t,n,r)}finally{Pe=i,ci.transition=s}}function lb(e,t,n,r){var i=Pe,s=ci.transition;ci.transition=null;try{Pe=4,sd(e,t,n,r)}finally{Pe=i,ci.transition=s}}function sd(e,t,n,r){if(pa){var i=Wc(e,t,n,r);if(i===null)Fl(e,t,r,fa,n),kf(e,r);else if(ob(i,e,t,n,r))r.stopPropagation();else if(kf(e,r),t&4&&-1<ib.indexOf(e)){for(;i!==null;){var s=Xo(i);if(s!==null&&Qg(s),s=Wc(e,t,n,r),s===null&&Fl(e,t,r,fa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Fl(e,t,r,null,n)}}var fa=null;function Wc(e,t,n,r){if(fa=null,e=nd(r),e=kr(e),e!==null)if(t=Br(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Vg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fa=e,null}function nx(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(G0()){case rd:return 1;case Jg:return 4;case ua:case Y0:return 16;case Kg:return 536870912;default:return 16}default:return 16}}var Yn=null,ad=null,Vs=null;function rx(){if(Vs)return Vs;var e,t=ad,n=t.length,r,i="value"in Yn?Yn.value:Yn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return Vs=i.slice(e,1<r?1-r:void 0)}function Ws(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bs(){return!0}function jf(){return!1}function qt(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?bs:jf,this.isPropagationStopped=jf,this}return He(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bs)},persist:function(){},isPersistent:bs}),t}var Ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ld=qt(Ei),Qo=He({},Ei,{view:0,detail:0}),cb=qt(Qo),Al,Pl,Ui,Ga=He({},Qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ui&&(Ui&&e.type==="mousemove"?(Al=e.screenX-Ui.screenX,Pl=e.screenY-Ui.screenY):Pl=Al=0,Ui=e),Al)},movementY:function(e){return"movementY"in e?e.movementY:Pl}}),Sf=qt(Ga),ub=He({},Ga,{dataTransfer:0}),db=qt(ub),pb=He({},Qo,{relatedTarget:0}),Ml=qt(pb),fb=He({},Ei,{animationName:0,elapsedTime:0,pseudoElement:0}),hb=qt(fb),mb=He({},Ei,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gb=qt(mb),xb=He({},Ei,{data:0}),Cf=qt(xb),yb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bb[e])?!!t[e]:!1}function cd(){return wb}var kb=He({},Qo,{key:function(e){if(e.key){var t=yb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ws(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cd,charCode:function(e){return e.type==="keypress"?Ws(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ws(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_b=qt(kb),jb=He({},Ga,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nf=qt(jb),Sb=He({},Qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cd}),Cb=qt(Sb),Nb=He({},Ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),Eb=qt(Nb),zb=He({},Ga,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tb=qt(zb),Ab=[9,13,27,32],ud=On&&"CompositionEvent"in window,lo=null;On&&"documentMode"in document&&(lo=document.documentMode);var Pb=On&&"TextEvent"in window&&!lo,ix=On&&(!ud||lo&&8<lo&&11>=lo),Ef=" ",zf=!1;function ox(e,t){switch(e){case"keyup":return Ab.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gr=!1;function Mb(e,t){switch(e){case"compositionend":return sx(t);case"keypress":return t.which!==32?null:(zf=!0,Ef);case"textInput":return e=t.data,e===Ef&&zf?null:e;default:return null}}function Lb(e,t){if(Gr)return e==="compositionend"||!ud&&ox(e,t)?(e=rx(),Vs=ad=Yn=null,Gr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ix&&t.locale!=="ko"?null:t.data;default:return null}}var Rb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rb[e.type]:t==="textarea"}function ax(e,t,n,r){$g(r),t=ha(t,"onChange"),0<t.length&&(n=new ld("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var co=null,No=null;function Ib(e){yx(e,0)}function Ya(e){var t=Xr(e);if(Ag(t))return e}function Ob(e,t){if(e==="change")return t}var lx=!1;if(On){var Ll;if(On){var Rl="oninput"in document;if(!Rl){var Af=document.createElement("div");Af.setAttribute("oninput","return;"),Rl=typeof Af.oninput=="function"}Ll=Rl}else Ll=!1;lx=Ll&&(!document.documentMode||9<document.documentMode)}function Pf(){co&&(co.detachEvent("onpropertychange",cx),No=co=null)}function cx(e){if(e.propertyName==="value"&&Ya(No)){var t=[];ax(t,No,e,nd(e)),Ug(Ib,t)}}function $b(e,t,n){e==="focusin"?(Pf(),co=t,No=n,co.attachEvent("onpropertychange",cx)):e==="focusout"&&Pf()}function Db(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ya(No)}function Fb(e,t){if(e==="click")return Ya(t)}function Bb(e,t){if(e==="input"||e==="change")return Ya(t)}function Ub(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pn=typeof Object.is=="function"?Object.is:Ub;function Eo(e,t){if(pn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Cc.call(t,i)||!pn(e[i],t[i]))return!1}return!0}function Mf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lf(e,t){var n=Mf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mf(n)}}function ux(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ux(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dx(){for(var e=window,t=aa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=aa(e.document)}return t}function dd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Vb(e){var t=dx(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ux(n.ownerDocument.documentElement,n)){if(r!==null&&dd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Lf(n,s);var a=Lf(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wb=On&&"documentMode"in document&&11>=document.documentMode,Yr=null,Hc=null,uo=null,qc=!1;function Rf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qc||Yr==null||Yr!==aa(r)||(r=Yr,"selectionStart"in r&&dd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),uo&&Eo(uo,r)||(uo=r,r=ha(Hc,"onSelect"),0<r.length&&(t=new ld("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Yr)))}function ws(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qr={animationend:ws("Animation","AnimationEnd"),animationiteration:ws("Animation","AnimationIteration"),animationstart:ws("Animation","AnimationStart"),transitionend:ws("Transition","TransitionEnd")},Il={},px={};On&&(px=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function Qa(e){if(Il[e])return Il[e];if(!Qr[e])return e;var t=Qr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in px)return Il[e]=t[n];return e}var fx=Qa("animationend"),hx=Qa("animationiteration"),mx=Qa("animationstart"),gx=Qa("transitionend"),xx=new Map,If="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(e,t){xx.set(e,t),Fr(t,[e])}for(var Ol=0;Ol<If.length;Ol++){var $l=If[Ol],Hb=$l.toLowerCase(),qb=$l[0].toUpperCase()+$l.slice(1);hr(Hb,"on"+qb)}hr(fx,"onAnimationEnd");hr(hx,"onAnimationIteration");hr(mx,"onAnimationStart");hr("dblclick","onDoubleClick");hr("focusin","onFocus");hr("focusout","onBlur");hr(gx,"onTransitionEnd");gi("onMouseEnter",["mouseout","mouseover"]);gi("onMouseLeave",["mouseout","mouseover"]);gi("onPointerEnter",["pointerout","pointerover"]);gi("onPointerLeave",["pointerout","pointerover"]);Fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var no="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jb=new Set("cancel close invalid load scroll toggle".split(" ").concat(no));function Of(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,H0(r,t,void 0,e),e.currentTarget=null}function yx(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;Of(i,l,u),s=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;Of(i,l,u),s=c}}}if(ca)throw e=Bc,ca=!1,Bc=null,e}function De(e,t){var n=t[Qc];n===void 0&&(n=t[Qc]=new Set);var r=e+"__bubble";n.has(r)||(vx(t,e,2,!1),n.add(r))}function Dl(e,t,n){var r=0;t&&(r|=4),vx(n,e,r,t)}var ks="_reactListening"+Math.random().toString(36).slice(2);function zo(e){if(!e[ks]){e[ks]=!0,Cg.forEach(function(n){n!=="selectionchange"&&(Jb.has(n)||Dl(n,!1,e),Dl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ks]||(t[ks]=!0,Dl("selectionchange",!1,t))}}function vx(e,t,n,r){switch(nx(t)){case 1:var i=ab;break;case 4:i=lb;break;default:i=sd}n=i.bind(null,t,n,e),i=void 0,!Fc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Fl(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=kr(l),a===null)return;if(c=a.tag,c===5||c===6){r=s=a;continue e}l=l.parentNode}}r=r.return}Ug(function(){var u=s,d=nd(n),p=[];e:{var f=xx.get(e);if(f!==void 0){var h=ld,g=e;switch(e){case"keypress":if(Ws(n)===0)break e;case"keydown":case"keyup":h=_b;break;case"focusin":g="focus",h=Ml;break;case"focusout":g="blur",h=Ml;break;case"beforeblur":case"afterblur":h=Ml;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Sf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=db;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Cb;break;case fx:case hx:case mx:h=hb;break;case gx:h=Eb;break;case"scroll":h=cb;break;case"wheel":h=Tb;break;case"copy":case"cut":case"paste":h=gb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Nf}var v=(t&4)!==0,_=!v&&e==="scroll",m=v?f!==null?f+"Capture":null:f;v=[];for(var x=u,y;x!==null;){y=x;var j=y.stateNode;if(y.tag===5&&j!==null&&(y=j,m!==null&&(j=_o(x,m),j!=null&&v.push(To(x,j,y)))),_)break;x=x.return}0<v.length&&(f=new h(f,g,null,n,d),p.push({event:f,listeners:v}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==$c&&(g=n.relatedTarget||n.fromElement)&&(kr(g)||g[$n]))break e;if((h||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,h?(g=n.relatedTarget||n.toElement,h=u,g=g?kr(g):null,g!==null&&(_=Br(g),g!==_||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=u),h!==g)){if(v=Sf,j="onMouseLeave",m="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(v=Nf,j="onPointerLeave",m="onPointerEnter",x="pointer"),_=h==null?f:Xr(h),y=g==null?f:Xr(g),f=new v(j,x+"leave",h,n,d),f.target=_,f.relatedTarget=y,j=null,kr(d)===u&&(v=new v(m,x+"enter",g,n,d),v.target=y,v.relatedTarget=_,j=v),_=j,h&&g)t:{for(v=h,m=g,x=0,y=v;y;y=Wr(y))x++;for(y=0,j=m;j;j=Wr(j))y++;for(;0<x-y;)v=Wr(v),x--;for(;0<y-x;)m=Wr(m),y--;for(;x--;){if(v===m||m!==null&&v===m.alternate)break t;v=Wr(v),m=Wr(m)}v=null}else v=null;h!==null&&$f(p,f,h,v,!1),g!==null&&_!==null&&$f(p,_,g,v,!0)}}e:{if(f=u?Xr(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var A=Ob;else if(Tf(f))if(lx)A=Bb;else{A=Db;var S=$b}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(A=Fb);if(A&&(A=A(e,u))){ax(p,A,n,d);break e}S&&S(e,f,u),e==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&Mc(f,"number",f.value)}switch(S=u?Xr(u):window,e){case"focusin":(Tf(S)||S.contentEditable==="true")&&(Yr=S,Hc=u,uo=null);break;case"focusout":uo=Hc=Yr=null;break;case"mousedown":qc=!0;break;case"contextmenu":case"mouseup":case"dragend":qc=!1,Rf(p,n,d);break;case"selectionchange":if(Wb)break;case"keydown":case"keyup":Rf(p,n,d)}var P;if(ud)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Gr?ox(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(ix&&n.locale!=="ko"&&(Gr||N!=="onCompositionStart"?N==="onCompositionEnd"&&Gr&&(P=rx()):(Yn=d,ad="value"in Yn?Yn.value:Yn.textContent,Gr=!0)),S=ha(u,N),0<S.length&&(N=new Cf(N,e,null,n,d),p.push({event:N,listeners:S}),P?N.data=P:(P=sx(n),P!==null&&(N.data=P)))),(P=Pb?Mb(e,n):Lb(e,n))&&(u=ha(u,"onBeforeInput"),0<u.length&&(d=new Cf("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=P))}yx(p,t)})}function To(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ha(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=_o(e,n),s!=null&&r.unshift(To(e,s,i)),s=_o(e,t),s!=null&&r.push(To(e,s,i))),e=e.return}return r}function Wr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $f(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=_o(n,s),c!=null&&a.unshift(To(n,c,l))):i||(c=_o(n,s),c!=null&&a.push(To(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Kb=/\r\n?/g,Gb=/\u0000|\uFFFD/g;function Df(e){return(typeof e=="string"?e:""+e).replace(Kb,`
`).replace(Gb,"")}function _s(e,t,n){if(t=Df(t),Df(e)!==t&&n)throw Error(ie(425))}function ma(){}var Jc=null,Kc=null;function Gc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yc=typeof setTimeout=="function"?setTimeout:void 0,Yb=typeof clearTimeout=="function"?clearTimeout:void 0,Ff=typeof Promise=="function"?Promise:void 0,Qb=typeof queueMicrotask=="function"?queueMicrotask:typeof Ff<"u"?function(e){return Ff.resolve(null).then(e).catch(Xb)}:Yc;function Xb(e){setTimeout(function(){throw e})}function Bl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Co(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Co(t)}function ir(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Bf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var zi=Math.random().toString(36).slice(2),yn="__reactFiber$"+zi,Ao="__reactProps$"+zi,$n="__reactContainer$"+zi,Qc="__reactEvents$"+zi,Zb="__reactListeners$"+zi,ew="__reactHandles$"+zi;function kr(e){var t=e[yn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$n]||n[yn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bf(e);e!==null;){if(n=e[yn])return n;e=Bf(e)}return t}e=n,n=e.parentNode}return null}function Xo(e){return e=e[yn]||e[$n],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(ie(33))}function Xa(e){return e[Ao]||null}var Xc=[],Zr=-1;function mr(e){return{current:e}}function Fe(e){0>Zr||(e.current=Xc[Zr],Xc[Zr]=null,Zr--)}function Oe(e,t){Zr++,Xc[Zr]=e.current,e.current=t}var dr={},ft=mr(dr),Nt=mr(!1),Pr=dr;function xi(e,t){var n=e.type.contextTypes;if(!n)return dr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Et(e){return e=e.childContextTypes,e!=null}function ga(){Fe(Nt),Fe(ft)}function Uf(e,t,n){if(ft.current!==dr)throw Error(ie(168));Oe(ft,t),Oe(Nt,n)}function bx(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(ie(108,$0(e)||"Unknown",i));return He({},n,r)}function xa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dr,Pr=ft.current,Oe(ft,e),Oe(Nt,Nt.current),!0}function Vf(e,t,n){var r=e.stateNode;if(!r)throw Error(ie(169));n?(e=bx(e,t,Pr),r.__reactInternalMemoizedMergedChildContext=e,Fe(Nt),Fe(ft),Oe(ft,e)):Fe(Nt),Oe(Nt,n)}var An=null,Za=!1,Ul=!1;function wx(e){An===null?An=[e]:An.push(e)}function tw(e){Za=!0,wx(e)}function gr(){if(!Ul&&An!==null){Ul=!0;var e=0,t=Pe;try{var n=An;for(Pe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}An=null,Za=!1}catch(i){throw An!==null&&(An=An.slice(e+1)),qg(rd,gr),i}finally{Pe=t,Ul=!1}}return null}var ei=[],ti=0,ya=null,va=0,Kt=[],Gt=0,Mr=null,Pn=1,Mn="";function vr(e,t){ei[ti++]=va,ei[ti++]=ya,ya=e,va=t}function kx(e,t,n){Kt[Gt++]=Pn,Kt[Gt++]=Mn,Kt[Gt++]=Mr,Mr=e;var r=Pn;e=Mn;var i=32-cn(r)-1;r&=~(1<<i),n+=1;var s=32-cn(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Pn=1<<32-cn(t)+i|n<<i|r,Mn=s+e}else Pn=1<<s|n<<i|r,Mn=e}function pd(e){e.return!==null&&(vr(e,1),kx(e,1,0))}function fd(e){for(;e===ya;)ya=ei[--ti],ei[ti]=null,va=ei[--ti],ei[ti]=null;for(;e===Mr;)Mr=Kt[--Gt],Kt[Gt]=null,Mn=Kt[--Gt],Kt[Gt]=null,Pn=Kt[--Gt],Kt[Gt]=null}var Ut=null,Dt=null,Be=!1,an=null;function _x(e,t){var n=Qt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Wf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ut=e,Dt=ir(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ut=e,Dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Mr!==null?{id:Pn,overflow:Mn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Qt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ut=e,Dt=null,!0):!1;default:return!1}}function Zc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function eu(e){if(Be){var t=Dt;if(t){var n=t;if(!Wf(e,t)){if(Zc(e))throw Error(ie(418));t=ir(n.nextSibling);var r=Ut;t&&Wf(e,t)?_x(r,n):(e.flags=e.flags&-4097|2,Be=!1,Ut=e)}}else{if(Zc(e))throw Error(ie(418));e.flags=e.flags&-4097|2,Be=!1,Ut=e}}}function Hf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ut=e}function js(e){if(e!==Ut)return!1;if(!Be)return Hf(e),Be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Gc(e.type,e.memoizedProps)),t&&(t=Dt)){if(Zc(e))throw jx(),Error(ie(418));for(;t;)_x(e,t),t=ir(t.nextSibling)}if(Hf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(ie(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Dt=ir(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Dt=null}}else Dt=Ut?ir(e.stateNode.nextSibling):null;return!0}function jx(){for(var e=Dt;e;)e=ir(e.nextSibling)}function yi(){Dt=Ut=null,Be=!1}function hd(e){an===null?an=[e]:an.push(e)}var nw=Un.ReactCurrentBatchConfig;function Vi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var r=n.stateNode}if(!r)throw Error(ie(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,e))}return e}function Ss(e,t){throw e=Object.prototype.toString.call(t),Error(ie(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qf(e){var t=e._init;return t(e._payload)}function Sx(e){function t(m,x){if(e){var y=m.deletions;y===null?(m.deletions=[x],m.flags|=16):y.push(x)}}function n(m,x){if(!e)return null;for(;x!==null;)t(m,x),x=x.sibling;return null}function r(m,x){for(m=new Map;x!==null;)x.key!==null?m.set(x.key,x):m.set(x.index,x),x=x.sibling;return m}function i(m,x){return m=lr(m,x),m.index=0,m.sibling=null,m}function s(m,x,y){return m.index=y,e?(y=m.alternate,y!==null?(y=y.index,y<x?(m.flags|=2,x):y):(m.flags|=2,x)):(m.flags|=1048576,x)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,x,y,j){return x===null||x.tag!==6?(x=Gl(y,m.mode,j),x.return=m,x):(x=i(x,y),x.return=m,x)}function c(m,x,y,j){var A=y.type;return A===Kr?d(m,x,y.props.children,j,y.key):x!==null&&(x.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Hn&&qf(A)===x.type)?(j=i(x,y.props),j.ref=Vi(m,x,y),j.return=m,j):(j=Qs(y.type,y.key,y.props,null,m.mode,j),j.ref=Vi(m,x,y),j.return=m,j)}function u(m,x,y,j){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=Yl(y,m.mode,j),x.return=m,x):(x=i(x,y.children||[]),x.return=m,x)}function d(m,x,y,j,A){return x===null||x.tag!==7?(x=Nr(y,m.mode,j,A),x.return=m,x):(x=i(x,y),x.return=m,x)}function p(m,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Gl(""+x,m.mode,y),x.return=m,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case hs:return y=Qs(x.type,x.key,x.props,null,m.mode,y),y.ref=Vi(m,null,x),y.return=m,y;case Jr:return x=Yl(x,m.mode,y),x.return=m,x;case Hn:var j=x._init;return p(m,j(x._payload),y)}if(eo(x)||$i(x))return x=Nr(x,m.mode,y,null),x.return=m,x;Ss(m,x)}return null}function f(m,x,y,j){var A=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return A!==null?null:l(m,x,""+y,j);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case hs:return y.key===A?c(m,x,y,j):null;case Jr:return y.key===A?u(m,x,y,j):null;case Hn:return A=y._init,f(m,x,A(y._payload),j)}if(eo(y)||$i(y))return A!==null?null:d(m,x,y,j,null);Ss(m,y)}return null}function h(m,x,y,j,A){if(typeof j=="string"&&j!==""||typeof j=="number")return m=m.get(y)||null,l(x,m,""+j,A);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case hs:return m=m.get(j.key===null?y:j.key)||null,c(x,m,j,A);case Jr:return m=m.get(j.key===null?y:j.key)||null,u(x,m,j,A);case Hn:var S=j._init;return h(m,x,y,S(j._payload),A)}if(eo(j)||$i(j))return m=m.get(y)||null,d(x,m,j,A,null);Ss(x,j)}return null}function g(m,x,y,j){for(var A=null,S=null,P=x,N=x=0,V=null;P!==null&&N<y.length;N++){P.index>N?(V=P,P=null):V=P.sibling;var E=f(m,P,y[N],j);if(E===null){P===null&&(P=V);break}e&&P&&E.alternate===null&&t(m,P),x=s(E,x,N),S===null?A=E:S.sibling=E,S=E,P=V}if(N===y.length)return n(m,P),Be&&vr(m,N),A;if(P===null){for(;N<y.length;N++)P=p(m,y[N],j),P!==null&&(x=s(P,x,N),S===null?A=P:S.sibling=P,S=P);return Be&&vr(m,N),A}for(P=r(m,P);N<y.length;N++)V=h(P,m,N,y[N],j),V!==null&&(e&&V.alternate!==null&&P.delete(V.key===null?N:V.key),x=s(V,x,N),S===null?A=V:S.sibling=V,S=V);return e&&P.forEach(function(I){return t(m,I)}),Be&&vr(m,N),A}function v(m,x,y,j){var A=$i(y);if(typeof A!="function")throw Error(ie(150));if(y=A.call(y),y==null)throw Error(ie(151));for(var S=A=null,P=x,N=x=0,V=null,E=y.next();P!==null&&!E.done;N++,E=y.next()){P.index>N?(V=P,P=null):V=P.sibling;var I=f(m,P,E.value,j);if(I===null){P===null&&(P=V);break}e&&P&&I.alternate===null&&t(m,P),x=s(I,x,N),S===null?A=I:S.sibling=I,S=I,P=V}if(E.done)return n(m,P),Be&&vr(m,N),A;if(P===null){for(;!E.done;N++,E=y.next())E=p(m,E.value,j),E!==null&&(x=s(E,x,N),S===null?A=E:S.sibling=E,S=E);return Be&&vr(m,N),A}for(P=r(m,P);!E.done;N++,E=y.next())E=h(P,m,N,E.value,j),E!==null&&(e&&E.alternate!==null&&P.delete(E.key===null?N:E.key),x=s(E,x,N),S===null?A=E:S.sibling=E,S=E);return e&&P.forEach(function(R){return t(m,R)}),Be&&vr(m,N),A}function _(m,x,y,j){if(typeof y=="object"&&y!==null&&y.type===Kr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case hs:e:{for(var A=y.key,S=x;S!==null;){if(S.key===A){if(A=y.type,A===Kr){if(S.tag===7){n(m,S.sibling),x=i(S,y.props.children),x.return=m,m=x;break e}}else if(S.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Hn&&qf(A)===S.type){n(m,S.sibling),x=i(S,y.props),x.ref=Vi(m,S,y),x.return=m,m=x;break e}n(m,S);break}else t(m,S);S=S.sibling}y.type===Kr?(x=Nr(y.props.children,m.mode,j,y.key),x.return=m,m=x):(j=Qs(y.type,y.key,y.props,null,m.mode,j),j.ref=Vi(m,x,y),j.return=m,m=j)}return a(m);case Jr:e:{for(S=y.key;x!==null;){if(x.key===S)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){n(m,x.sibling),x=i(x,y.children||[]),x.return=m,m=x;break e}else{n(m,x);break}else t(m,x);x=x.sibling}x=Yl(y,m.mode,j),x.return=m,m=x}return a(m);case Hn:return S=y._init,_(m,x,S(y._payload),j)}if(eo(y))return g(m,x,y,j);if($i(y))return v(m,x,y,j);Ss(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(n(m,x.sibling),x=i(x,y),x.return=m,m=x):(n(m,x),x=Gl(y,m.mode,j),x.return=m,m=x),a(m)):n(m,x)}return _}var vi=Sx(!0),Cx=Sx(!1),ba=mr(null),wa=null,ni=null,md=null;function gd(){md=ni=wa=null}function xd(e){var t=ba.current;Fe(ba),e._currentValue=t}function tu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ui(e,t){wa=e,md=ni=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(St=!0),e.firstContext=null)}function tn(e){var t=e._currentValue;if(md!==e)if(e={context:e,memoizedValue:t,next:null},ni===null){if(wa===null)throw Error(ie(308));ni=e,wa.dependencies={lanes:0,firstContext:e}}else ni=ni.next=e;return t}var _r=null;function yd(e){_r===null?_r=[e]:_r.push(e)}function Nx(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,yd(t)):(n.next=i.next,i.next=n),t.interleaved=n,Dn(e,r)}function Dn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qn=!1;function vd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ex(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Rn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function or(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ze&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Dn(e,n)}return i=r.interleaved,i===null?(t.next=t,yd(r)):(t.next=i.next,i.next=t),r.interleaved=t,Dn(e,n)}function Hs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,id(e,n)}}function Jf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ka(e,t,n,r){var i=e.updateQueue;qn=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(s!==null){var p=i.baseState;a=0,d=u=c=null,l=s;do{var f=l.lane,h=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,v=l;switch(f=t,h=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){p=g.call(h,p,f);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,f=typeof g=="function"?g.call(h,p,f):g,f==null)break e;p=He({},p,f);break e;case 2:qn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else h={eventTime:h,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=h,c=p):d=d.next=h,a|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Rr|=a,e.lanes=a,e.memoizedState=p}}function Kf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(ie(191,i));i.call(r)}}}var Zo={},kn=mr(Zo),Po=mr(Zo),Mo=mr(Zo);function jr(e){if(e===Zo)throw Error(ie(174));return e}function bd(e,t){switch(Oe(Mo,t),Oe(Po,e),Oe(kn,Zo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Rc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Rc(t,e)}Fe(kn),Oe(kn,t)}function bi(){Fe(kn),Fe(Po),Fe(Mo)}function zx(e){jr(Mo.current);var t=jr(kn.current),n=Rc(t,e.type);t!==n&&(Oe(Po,e),Oe(kn,n))}function wd(e){Po.current===e&&(Fe(kn),Fe(Po))}var Ve=mr(0);function _a(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vl=[];function kd(){for(var e=0;e<Vl.length;e++)Vl[e]._workInProgressVersionPrimary=null;Vl.length=0}var qs=Un.ReactCurrentDispatcher,Wl=Un.ReactCurrentBatchConfig,Lr=0,We=null,tt=null,ot=null,ja=!1,po=!1,Lo=0,rw=0;function ut(){throw Error(ie(321))}function _d(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pn(e[n],t[n]))return!1;return!0}function jd(e,t,n,r,i,s){if(Lr=s,We=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qs.current=e===null||e.memoizedState===null?aw:lw,e=n(r,i),po){s=0;do{if(po=!1,Lo=0,25<=s)throw Error(ie(301));s+=1,ot=tt=null,t.updateQueue=null,qs.current=cw,e=n(r,i)}while(po)}if(qs.current=Sa,t=tt!==null&&tt.next!==null,Lr=0,ot=tt=We=null,ja=!1,t)throw Error(ie(300));return e}function Sd(){var e=Lo!==0;return Lo=0,e}function gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ot===null?We.memoizedState=ot=e:ot=ot.next=e,ot}function nn(){if(tt===null){var e=We.alternate;e=e!==null?e.memoizedState:null}else e=tt.next;var t=ot===null?We.memoizedState:ot.next;if(t!==null)ot=t,tt=e;else{if(e===null)throw Error(ie(310));tt=e,e={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},ot===null?We.memoizedState=ot=e:ot=ot.next=e}return ot}function Ro(e,t){return typeof t=="function"?t(e):t}function Hl(e){var t=nn(),n=t.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=e;var r=tt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,c=null,u=s;do{var d=u.lane;if((Lr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,a=r):c=c.next=p,We.lanes|=d,Rr|=d}u=u.next}while(u!==null&&u!==s);c===null?a=r:c.next=l,pn(r,t.memoizedState)||(St=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,We.lanes|=s,Rr|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ql(e){var t=nn(),n=t.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);pn(s,t.memoizedState)||(St=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Tx(){}function Ax(e,t){var n=We,r=nn(),i=t(),s=!pn(r.memoizedState,i);if(s&&(r.memoizedState=i,St=!0),r=r.queue,Cd(Lx.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ot!==null&&ot.memoizedState.tag&1){if(n.flags|=2048,Io(9,Mx.bind(null,n,r,i,t),void 0,null),st===null)throw Error(ie(349));Lr&30||Px(n,t,i)}return i}function Px(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=We.updateQueue,t===null?(t={lastEffect:null,stores:null},We.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Mx(e,t,n,r){t.value=n,t.getSnapshot=r,Rx(t)&&Ix(e)}function Lx(e,t,n){return n(function(){Rx(t)&&Ix(e)})}function Rx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pn(e,n)}catch{return!0}}function Ix(e){var t=Dn(e,1);t!==null&&un(t,e,1,-1)}function Gf(e){var t=gn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},t.queue=e,e=e.dispatch=sw.bind(null,We,e),[t.memoizedState,e]}function Io(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=We.updateQueue,t===null?(t={lastEffect:null,stores:null},We.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ox(){return nn().memoizedState}function Js(e,t,n,r){var i=gn();We.flags|=e,i.memoizedState=Io(1|t,n,void 0,r===void 0?null:r)}function el(e,t,n,r){var i=nn();r=r===void 0?null:r;var s=void 0;if(tt!==null){var a=tt.memoizedState;if(s=a.destroy,r!==null&&_d(r,a.deps)){i.memoizedState=Io(t,n,s,r);return}}We.flags|=e,i.memoizedState=Io(1|t,n,s,r)}function Yf(e,t){return Js(8390656,8,e,t)}function Cd(e,t){return el(2048,8,e,t)}function $x(e,t){return el(4,2,e,t)}function Dx(e,t){return el(4,4,e,t)}function Fx(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bx(e,t,n){return n=n!=null?n.concat([e]):null,el(4,4,Fx.bind(null,t,e),n)}function Nd(){}function Ux(e,t){var n=nn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_d(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Vx(e,t){var n=nn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_d(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wx(e,t,n){return Lr&21?(pn(n,t)||(n=Gg(),We.lanes|=n,Rr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,St=!0),e.memoizedState=n)}function iw(e,t){var n=Pe;Pe=n!==0&&4>n?n:4,e(!0);var r=Wl.transition;Wl.transition={};try{e(!1),t()}finally{Pe=n,Wl.transition=r}}function Hx(){return nn().memoizedState}function ow(e,t,n){var r=ar(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qx(e))Jx(t,n);else if(n=Nx(e,t,n,r),n!==null){var i=yt();un(n,e,r,i),Kx(n,t,r)}}function sw(e,t,n){var r=ar(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qx(e))Jx(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,pn(l,a)){var c=t.interleaved;c===null?(i.next=i,yd(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Nx(e,t,i,r),n!==null&&(i=yt(),un(n,e,r,i),Kx(n,t,r))}}function qx(e){var t=e.alternate;return e===We||t!==null&&t===We}function Jx(e,t){po=ja=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Kx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,id(e,n)}}var Sa={readContext:tn,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},aw={readContext:tn,useCallback:function(e,t){return gn().memoizedState=[e,t===void 0?null:t],e},useContext:tn,useEffect:Yf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Js(4194308,4,Fx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Js(4194308,4,e,t)},useInsertionEffect:function(e,t){return Js(4,2,e,t)},useMemo:function(e,t){var n=gn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ow.bind(null,We,e),[r.memoizedState,e]},useRef:function(e){var t=gn();return e={current:e},t.memoizedState=e},useState:Gf,useDebugValue:Nd,useDeferredValue:function(e){return gn().memoizedState=e},useTransition:function(){var e=Gf(!1),t=e[0];return e=iw.bind(null,e[1]),gn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=We,i=gn();if(Be){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=t(),st===null)throw Error(ie(349));Lr&30||Px(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Yf(Lx.bind(null,r,s,e),[e]),r.flags|=2048,Io(9,Mx.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=gn(),t=st.identifierPrefix;if(Be){var n=Mn,r=Pn;n=(r&~(1<<32-cn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Lo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=rw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},lw={readContext:tn,useCallback:Ux,useContext:tn,useEffect:Cd,useImperativeHandle:Bx,useInsertionEffect:$x,useLayoutEffect:Dx,useMemo:Vx,useReducer:Hl,useRef:Ox,useState:function(){return Hl(Ro)},useDebugValue:Nd,useDeferredValue:function(e){var t=nn();return Wx(t,tt.memoizedState,e)},useTransition:function(){var e=Hl(Ro)[0],t=nn().memoizedState;return[e,t]},useMutableSource:Tx,useSyncExternalStore:Ax,useId:Hx,unstable_isNewReconciler:!1},cw={readContext:tn,useCallback:Ux,useContext:tn,useEffect:Cd,useImperativeHandle:Bx,useInsertionEffect:$x,useLayoutEffect:Dx,useMemo:Vx,useReducer:ql,useRef:Ox,useState:function(){return ql(Ro)},useDebugValue:Nd,useDeferredValue:function(e){var t=nn();return tt===null?t.memoizedState=e:Wx(t,tt.memoizedState,e)},useTransition:function(){var e=ql(Ro)[0],t=nn().memoizedState;return[e,t]},useMutableSource:Tx,useSyncExternalStore:Ax,useId:Hx,unstable_isNewReconciler:!1};function on(e,t){if(e&&e.defaultProps){t=He({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function nu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:He({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var tl={isMounted:function(e){return(e=e._reactInternals)?Br(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=yt(),i=ar(e),s=Rn(r,i);s.payload=t,n!=null&&(s.callback=n),t=or(e,s,i),t!==null&&(un(t,e,i,r),Hs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=yt(),i=ar(e),s=Rn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=or(e,s,i),t!==null&&(un(t,e,i,r),Hs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=yt(),r=ar(e),i=Rn(n,r);i.tag=2,t!=null&&(i.callback=t),t=or(e,i,r),t!==null&&(un(t,e,r,n),Hs(t,e,r))}};function Qf(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!Eo(n,r)||!Eo(i,s):!0}function Gx(e,t,n){var r=!1,i=dr,s=t.contextType;return typeof s=="object"&&s!==null?s=tn(s):(i=Et(t)?Pr:ft.current,r=t.contextTypes,s=(r=r!=null)?xi(e,i):dr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=tl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Xf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&tl.enqueueReplaceState(t,t.state,null)}function ru(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},vd(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=tn(s):(s=Et(t)?Pr:ft.current,i.context=xi(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(nu(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&tl.enqueueReplaceState(i,i.state,null),ka(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function wi(e,t){try{var n="",r=t;do n+=O0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Jl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function iu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var uw=typeof WeakMap=="function"?WeakMap:Map;function Yx(e,t,n){n=Rn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Na||(Na=!0,hu=r),iu(e,t)},n}function Qx(e,t,n){n=Rn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){iu(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){iu(e,t),typeof r!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Zf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new uw;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=jw.bind(null,e,t,n),t.then(e,e))}function eh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function th(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Rn(-1,1),t.tag=2,or(n,t,1))),n.lanes|=1),e)}var dw=Un.ReactCurrentOwner,St=!1;function gt(e,t,n,r){t.child=e===null?Cx(t,null,n,r):vi(t,e.child,n,r)}function nh(e,t,n,r,i){n=n.render;var s=t.ref;return ui(t,i),r=jd(e,t,n,r,s,i),n=Sd(),e!==null&&!St?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Fn(e,t,i)):(Be&&n&&pd(t),t.flags|=1,gt(e,t,r,i),t.child)}function rh(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Rd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Xx(e,t,s,r,i)):(e=Qs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Eo,n(a,r)&&e.ref===t.ref)return Fn(e,t,i)}return t.flags|=1,e=lr(s,r),e.ref=t.ref,e.return=t,t.child=e}function Xx(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Eo(s,r)&&e.ref===t.ref)if(St=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(St=!0);else return t.lanes=e.lanes,Fn(e,t,i)}return ou(e,t,n,r,i)}function Zx(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Oe(ii,Rt),Rt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Oe(ii,Rt),Rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Oe(ii,Rt),Rt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Oe(ii,Rt),Rt|=r;return gt(e,t,i,n),t.child}function ey(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ou(e,t,n,r,i){var s=Et(n)?Pr:ft.current;return s=xi(t,s),ui(t,i),n=jd(e,t,n,r,s,i),r=Sd(),e!==null&&!St?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Fn(e,t,i)):(Be&&r&&pd(t),t.flags|=1,gt(e,t,n,i),t.child)}function ih(e,t,n,r,i){if(Et(n)){var s=!0;xa(t)}else s=!1;if(ui(t,i),t.stateNode===null)Ks(e,t),Gx(t,n,r),ru(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=tn(u):(u=Et(n)?Pr:ft.current,u=xi(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Xf(t,a,r,u),qn=!1;var f=t.memoizedState;a.state=f,ka(t,r,a,i),c=t.memoizedState,l!==r||f!==c||Nt.current||qn?(typeof d=="function"&&(nu(t,n,d,r),c=t.memoizedState),(l=qn||Qf(t,n,l,r,f,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ex(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:on(t.type,l),a.props=u,p=t.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=tn(c):(c=Et(n)?Pr:ft.current,c=xi(t,c));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||f!==c)&&Xf(t,a,r,c),qn=!1,f=t.memoizedState,a.state=f,ka(t,r,a,i);var g=t.memoizedState;l!==p||f!==g||Nt.current||qn?(typeof h=="function"&&(nu(t,n,h,r),g=t.memoizedState),(u=qn||Qf(t,n,u,r,f,g,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return su(e,t,n,r,s,i)}function su(e,t,n,r,i,s){ey(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Vf(t,n,!1),Fn(e,t,s);r=t.stateNode,dw.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=vi(t,e.child,null,s),t.child=vi(t,null,l,s)):gt(e,t,l,s),t.memoizedState=r.state,i&&Vf(t,n,!0),t.child}function ty(e){var t=e.stateNode;t.pendingContext?Uf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Uf(e,t.context,!1),bd(e,t.containerInfo)}function oh(e,t,n,r,i){return yi(),hd(i),t.flags|=256,gt(e,t,n,r),t.child}var au={dehydrated:null,treeContext:null,retryLane:0};function lu(e){return{baseLanes:e,cachePool:null,transitions:null}}function ny(e,t,n){var r=t.pendingProps,i=Ve.current,s=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Oe(Ve,i&1),e===null)return eu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=il(a,r,0,null),e=Nr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=lu(n),t.memoizedState=au,e):Ed(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return pw(e,t,a,r,l,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=lr(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=lr(l,s):(s=Nr(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?lu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=au,r}return s=e.child,e=s.sibling,r=lr(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ed(e,t){return t=il({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Cs(e,t,n,r){return r!==null&&hd(r),vi(t,e.child,null,n),e=Ed(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pw(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=Jl(Error(ie(422))),Cs(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=il({mode:"visible",children:r.children},i,0,null),s=Nr(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&vi(t,e.child,null,a),t.child.memoizedState=lu(a),t.memoizedState=au,s);if(!(t.mode&1))return Cs(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(ie(419)),r=Jl(s,r,void 0),Cs(e,t,a,r)}if(l=(a&e.childLanes)!==0,St||l){if(r=st,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Dn(e,i),un(r,e,i,-1))}return Ld(),r=Jl(Error(ie(421))),Cs(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Sw.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Dt=ir(i.nextSibling),Ut=t,Be=!0,an=null,e!==null&&(Kt[Gt++]=Pn,Kt[Gt++]=Mn,Kt[Gt++]=Mr,Pn=e.id,Mn=e.overflow,Mr=t),t=Ed(t,r.children),t.flags|=4096,t)}function sh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),tu(e.return,t,n)}function Kl(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ry(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(gt(e,t,r.children,n),r=Ve.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sh(e,n,t);else if(e.tag===19)sh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Oe(Ve,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_a(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Kl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_a(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Kl(t,!0,n,null,s);break;case"together":Kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ks(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Fn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(ie(153));if(t.child!==null){for(e=t.child,n=lr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=lr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fw(e,t,n){switch(t.tag){case 3:ty(t),yi();break;case 5:zx(t);break;case 1:Et(t.type)&&xa(t);break;case 4:bd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Oe(ba,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Oe(Ve,Ve.current&1),t.flags|=128,null):n&t.child.childLanes?ny(e,t,n):(Oe(Ve,Ve.current&1),e=Fn(e,t,n),e!==null?e.sibling:null);Oe(Ve,Ve.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ry(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Oe(Ve,Ve.current),r)break;return null;case 22:case 23:return t.lanes=0,Zx(e,t,n)}return Fn(e,t,n)}var iy,cu,oy,sy;iy=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cu=function(){};oy=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,jr(kn.current);var s=null;switch(n){case"input":i=Ac(e,i),r=Ac(e,r),s=[];break;case"select":i=He({},i,{value:void 0}),r=He({},r,{value:void 0}),s=[];break;case"textarea":i=Lc(e,i),r=Lc(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ma)}Ic(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(wo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(wo.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&De("scroll",e),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};sy=function(e,t,n,r){n!==r&&(t.flags|=4)};function Wi(e,t){if(!Be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function dt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hw(e,t,n){var r=t.pendingProps;switch(fd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(t),null;case 1:return Et(t.type)&&ga(),dt(t),null;case 3:return r=t.stateNode,bi(),Fe(Nt),Fe(ft),kd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(js(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,an!==null&&(xu(an),an=null))),cu(e,t),dt(t),null;case 5:wd(t);var i=jr(Mo.current);if(n=t.type,e!==null&&t.stateNode!=null)oy(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(ie(166));return dt(t),null}if(e=jr(kn.current),js(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[yn]=t,r[Ao]=s,e=(t.mode&1)!==0,n){case"dialog":De("cancel",r),De("close",r);break;case"iframe":case"object":case"embed":De("load",r);break;case"video":case"audio":for(i=0;i<no.length;i++)De(no[i],r);break;case"source":De("error",r);break;case"img":case"image":case"link":De("error",r),De("load",r);break;case"details":De("toggle",r);break;case"input":mf(r,s),De("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},De("invalid",r);break;case"textarea":xf(r,s),De("invalid",r)}Ic(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&_s(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&_s(r.textContent,l,e),i=["children",""+l]):wo.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&De("scroll",r)}switch(n){case"input":ms(r),gf(r,s,!0);break;case"textarea":ms(r),yf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ma)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Lg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[yn]=t,e[Ao]=r,iy(e,t,!1,!1),t.stateNode=e;e:{switch(a=Oc(n,r),n){case"dialog":De("cancel",e),De("close",e),i=r;break;case"iframe":case"object":case"embed":De("load",e),i=r;break;case"video":case"audio":for(i=0;i<no.length;i++)De(no[i],e);i=r;break;case"source":De("error",e),i=r;break;case"img":case"image":case"link":De("error",e),De("load",e),i=r;break;case"details":De("toggle",e),i=r;break;case"input":mf(e,r),i=Ac(e,r),De("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=He({},r,{value:void 0}),De("invalid",e);break;case"textarea":xf(e,r),i=Lc(e,r),De("invalid",e);break;default:i=r}Ic(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?Og(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Rg(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ko(e,c):typeof c=="number"&&ko(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(wo.hasOwnProperty(s)?c!=null&&s==="onScroll"&&De("scroll",e):c!=null&&Xu(e,s,c,a))}switch(n){case"input":ms(e),gf(e,r,!1);break;case"textarea":ms(e),yf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ur(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?si(e,!!r.multiple,s,!1):r.defaultValue!=null&&si(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ma)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return dt(t),null;case 6:if(e&&t.stateNode!=null)sy(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(ie(166));if(n=jr(Mo.current),jr(kn.current),js(t)){if(r=t.stateNode,n=t.memoizedProps,r[yn]=t,(s=r.nodeValue!==n)&&(e=Ut,e!==null))switch(e.tag){case 3:_s(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_s(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yn]=t,t.stateNode=r}return dt(t),null;case 13:if(Fe(Ve),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Be&&Dt!==null&&t.mode&1&&!(t.flags&128))jx(),yi(),t.flags|=98560,s=!1;else if(s=js(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(ie(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[yn]=t}else yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;dt(t),s=!1}else an!==null&&(xu(an),an=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ve.current&1?nt===0&&(nt=3):Ld())),t.updateQueue!==null&&(t.flags|=4),dt(t),null);case 4:return bi(),cu(e,t),e===null&&zo(t.stateNode.containerInfo),dt(t),null;case 10:return xd(t.type._context),dt(t),null;case 17:return Et(t.type)&&ga(),dt(t),null;case 19:if(Fe(Ve),s=t.memoizedState,s===null)return dt(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)Wi(s,!1);else{if(nt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=_a(e),a!==null){for(t.flags|=128,Wi(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Oe(Ve,Ve.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ge()>ki&&(t.flags|=128,r=!0,Wi(s,!1),t.lanes=4194304)}else{if(!r)if(e=_a(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Wi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Be)return dt(t),null}else 2*Ge()-s.renderingStartTime>ki&&n!==1073741824&&(t.flags|=128,r=!0,Wi(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ge(),t.sibling=null,n=Ve.current,Oe(Ve,r?n&1|2:n&1),t):(dt(t),null);case 22:case 23:return Md(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Rt&1073741824&&(dt(t),t.subtreeFlags&6&&(t.flags|=8192)):dt(t),null;case 24:return null;case 25:return null}throw Error(ie(156,t.tag))}function mw(e,t){switch(fd(t),t.tag){case 1:return Et(t.type)&&ga(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bi(),Fe(Nt),Fe(ft),kd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return wd(t),null;case 13:if(Fe(Ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(ie(340));yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Fe(Ve),null;case 4:return bi(),null;case 10:return xd(t.type._context),null;case 22:case 23:return Md(),null;case 24:return null;default:return null}}var Ns=!1,pt=!1,gw=typeof WeakSet=="function"?WeakSet:Set,he=null;function ri(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ke(e,t,r)}else n.current=null}function uu(e,t,n){try{n()}catch(r){Ke(e,t,r)}}var ah=!1;function xw(e,t){if(Jc=pa,e=dx(),dd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==n||i!==0&&p.nodeType!==3||(l=a+i),p!==s||r!==0&&p.nodeType!==3||(c=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(h=p.firstChild)!==null;)f=p,p=h;for(;;){if(p===e)break t;if(f===n&&++u===i&&(l=a),f===s&&++d===r&&(c=a),(h=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=h}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kc={focusedElem:e,selectionRange:n},pa=!1,he=t;he!==null;)if(t=he,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,he=e;else for(;he!==null;){t=he;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,_=g.memoizedState,m=t.stateNode,x=m.getSnapshotBeforeUpdate(t.elementType===t.type?v:on(t.type,v),_);m.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(j){Ke(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,he=e;break}he=t.return}return g=ah,ah=!1,g}function fo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&uu(t,n,s)}i=i.next}while(i!==r)}}function nl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function du(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ay(e){var t=e.alternate;t!==null&&(e.alternate=null,ay(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yn],delete t[Ao],delete t[Qc],delete t[Zb],delete t[ew])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ly(e){return e.tag===5||e.tag===3||e.tag===4}function lh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ly(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ma));else if(r!==4&&(e=e.child,e!==null))for(pu(e,t,n),e=e.sibling;e!==null;)pu(e,t,n),e=e.sibling}function fu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(fu(e,t,n),e=e.sibling;e!==null;)fu(e,t,n),e=e.sibling}var at=null,sn=!1;function Vn(e,t,n){for(n=n.child;n!==null;)cy(e,t,n),n=n.sibling}function cy(e,t,n){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(Ka,n)}catch{}switch(n.tag){case 5:pt||ri(n,t);case 6:var r=at,i=sn;at=null,Vn(e,t,n),at=r,sn=i,at!==null&&(sn?(e=at,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):at.removeChild(n.stateNode));break;case 18:at!==null&&(sn?(e=at,n=n.stateNode,e.nodeType===8?Bl(e.parentNode,n):e.nodeType===1&&Bl(e,n),Co(e)):Bl(at,n.stateNode));break;case 4:r=at,i=sn,at=n.stateNode.containerInfo,sn=!0,Vn(e,t,n),at=r,sn=i;break;case 0:case 11:case 14:case 15:if(!pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&uu(n,t,a),i=i.next}while(i!==r)}Vn(e,t,n);break;case 1:if(!pt&&(ri(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ke(n,t,l)}Vn(e,t,n);break;case 21:Vn(e,t,n);break;case 22:n.mode&1?(pt=(r=pt)||n.memoizedState!==null,Vn(e,t,n),pt=r):Vn(e,t,n);break;default:Vn(e,t,n)}}function ch(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gw),t.forEach(function(r){var i=Cw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function rn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:at=l.stateNode,sn=!1;break e;case 3:at=l.stateNode.containerInfo,sn=!0;break e;case 4:at=l.stateNode.containerInfo,sn=!0;break e}l=l.return}if(at===null)throw Error(ie(160));cy(s,a,i),at=null,sn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Ke(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)uy(t,e),t=t.sibling}function uy(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(rn(t,e),mn(e),r&4){try{fo(3,e,e.return),nl(3,e)}catch(v){Ke(e,e.return,v)}try{fo(5,e,e.return)}catch(v){Ke(e,e.return,v)}}break;case 1:rn(t,e),mn(e),r&512&&n!==null&&ri(n,n.return);break;case 5:if(rn(t,e),mn(e),r&512&&n!==null&&ri(n,n.return),e.flags&32){var i=e.stateNode;try{ko(i,"")}catch(v){Ke(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Pg(i,s),Oc(l,a);var u=Oc(l,s);for(a=0;a<c.length;a+=2){var d=c[a],p=c[a+1];d==="style"?Og(i,p):d==="dangerouslySetInnerHTML"?Rg(i,p):d==="children"?ko(i,p):Xu(i,d,p,u)}switch(l){case"input":Pc(i,s);break;case"textarea":Mg(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?si(i,!!s.multiple,h,!1):f!==!!s.multiple&&(s.defaultValue!=null?si(i,!!s.multiple,s.defaultValue,!0):si(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ao]=s}catch(v){Ke(e,e.return,v)}}break;case 6:if(rn(t,e),mn(e),r&4){if(e.stateNode===null)throw Error(ie(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){Ke(e,e.return,v)}}break;case 3:if(rn(t,e),mn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Co(t.containerInfo)}catch(v){Ke(e,e.return,v)}break;case 4:rn(t,e),mn(e);break;case 13:rn(t,e),mn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ad=Ge())),r&4&&ch(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(pt=(u=pt)||d,rn(t,e),pt=u):rn(t,e),mn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(he=e,d=e.child;d!==null;){for(p=he=d;he!==null;){switch(f=he,h=f.child,f.tag){case 0:case 11:case 14:case 15:fo(4,f,f.return);break;case 1:ri(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){Ke(r,n,v)}}break;case 5:ri(f,f.return);break;case 22:if(f.memoizedState!==null){dh(p);continue}}h!==null?(h.return=f,he=h):dh(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Ig("display",a))}catch(v){Ke(e,e.return,v)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(v){Ke(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:rn(t,e),mn(e),r&4&&ch(e);break;case 21:break;default:rn(t,e),mn(e)}}function mn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ly(n)){var r=n;break e}n=n.return}throw Error(ie(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ko(i,""),r.flags&=-33);var s=lh(e);fu(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=lh(e);pu(e,l,a);break;default:throw Error(ie(161))}}catch(c){Ke(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yw(e,t,n){he=e,dy(e)}function dy(e,t,n){for(var r=(e.mode&1)!==0;he!==null;){var i=he,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Ns;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||pt;l=Ns;var u=pt;if(Ns=a,(pt=c)&&!u)for(he=i;he!==null;)a=he,c=a.child,a.tag===22&&a.memoizedState!==null?ph(i):c!==null?(c.return=a,he=c):ph(i);for(;s!==null;)he=s,dy(s),s=s.sibling;he=i,Ns=l,pt=u}uh(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,he=s):uh(e)}}function uh(e){for(;he!==null;){var t=he;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pt||nl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:on(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Kf(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Kf(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Co(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}pt||t.flags&512&&du(t)}catch(f){Ke(t,t.return,f)}}if(t===e){he=null;break}if(n=t.sibling,n!==null){n.return=t.return,he=n;break}he=t.return}}function dh(e){for(;he!==null;){var t=he;if(t===e){he=null;break}var n=t.sibling;if(n!==null){n.return=t.return,he=n;break}he=t.return}}function ph(e){for(;he!==null;){var t=he;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{nl(4,t)}catch(c){Ke(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Ke(t,i,c)}}var s=t.return;try{du(t)}catch(c){Ke(t,s,c)}break;case 5:var a=t.return;try{du(t)}catch(c){Ke(t,a,c)}}}catch(c){Ke(t,t.return,c)}if(t===e){he=null;break}var l=t.sibling;if(l!==null){l.return=t.return,he=l;break}he=t.return}}var vw=Math.ceil,Ca=Un.ReactCurrentDispatcher,zd=Un.ReactCurrentOwner,en=Un.ReactCurrentBatchConfig,ze=0,st=null,Ze=null,lt=0,Rt=0,ii=mr(0),nt=0,Oo=null,Rr=0,rl=0,Td=0,ho=null,jt=null,Ad=0,ki=1/0,zn=null,Na=!1,hu=null,sr=null,Es=!1,Qn=null,Ea=0,mo=0,mu=null,Gs=-1,Ys=0;function yt(){return ze&6?Ge():Gs!==-1?Gs:Gs=Ge()}function ar(e){return e.mode&1?ze&2&&lt!==0?lt&-lt:nw.transition!==null?(Ys===0&&(Ys=Gg()),Ys):(e=Pe,e!==0||(e=window.event,e=e===void 0?16:nx(e.type)),e):1}function un(e,t,n,r){if(50<mo)throw mo=0,mu=null,Error(ie(185));Yo(e,n,r),(!(ze&2)||e!==st)&&(e===st&&(!(ze&2)&&(rl|=n),nt===4&&Gn(e,lt)),zt(e,r),n===1&&ze===0&&!(t.mode&1)&&(ki=Ge()+500,Za&&gr()))}function zt(e,t){var n=e.callbackNode;nb(e,t);var r=da(e,e===st?lt:0);if(r===0)n!==null&&wf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&wf(n),t===1)e.tag===0?tw(fh.bind(null,e)):wx(fh.bind(null,e)),Qb(function(){!(ze&6)&&gr()}),n=null;else{switch(Yg(r)){case 1:n=rd;break;case 4:n=Jg;break;case 16:n=ua;break;case 536870912:n=Kg;break;default:n=ua}n=vy(n,py.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function py(e,t){if(Gs=-1,Ys=0,ze&6)throw Error(ie(327));var n=e.callbackNode;if(di()&&e.callbackNode!==n)return null;var r=da(e,e===st?lt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=za(e,r);else{t=r;var i=ze;ze|=2;var s=hy();(st!==e||lt!==t)&&(zn=null,ki=Ge()+500,Cr(e,t));do try{kw();break}catch(l){fy(e,l)}while(!0);gd(),Ca.current=s,ze=i,Ze!==null?t=0:(st=null,lt=0,t=nt)}if(t!==0){if(t===2&&(i=Uc(e),i!==0&&(r=i,t=gu(e,i))),t===1)throw n=Oo,Cr(e,0),Gn(e,r),zt(e,Ge()),n;if(t===6)Gn(e,r);else{if(i=e.current.alternate,!(r&30)&&!bw(i)&&(t=za(e,r),t===2&&(s=Uc(e),s!==0&&(r=s,t=gu(e,s))),t===1))throw n=Oo,Cr(e,0),Gn(e,r),zt(e,Ge()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(ie(345));case 2:br(e,jt,zn);break;case 3:if(Gn(e,r),(r&130023424)===r&&(t=Ad+500-Ge(),10<t)){if(da(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){yt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Yc(br.bind(null,e,jt,zn),t);break}br(e,jt,zn);break;case 4:if(Gn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-cn(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=Ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vw(r/1960))-r,10<r){e.timeoutHandle=Yc(br.bind(null,e,jt,zn),r);break}br(e,jt,zn);break;case 5:br(e,jt,zn);break;default:throw Error(ie(329))}}}return zt(e,Ge()),e.callbackNode===n?py.bind(null,e):null}function gu(e,t){var n=ho;return e.current.memoizedState.isDehydrated&&(Cr(e,t).flags|=256),e=za(e,t),e!==2&&(t=jt,jt=n,t!==null&&xu(t)),e}function xu(e){jt===null?jt=e:jt.push.apply(jt,e)}function bw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!pn(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gn(e,t){for(t&=~Td,t&=~rl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-cn(t),r=1<<n;e[n]=-1,t&=~r}}function fh(e){if(ze&6)throw Error(ie(327));di();var t=da(e,0);if(!(t&1))return zt(e,Ge()),null;var n=za(e,t);if(e.tag!==0&&n===2){var r=Uc(e);r!==0&&(t=r,n=gu(e,r))}if(n===1)throw n=Oo,Cr(e,0),Gn(e,t),zt(e,Ge()),n;if(n===6)throw Error(ie(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,br(e,jt,zn),zt(e,Ge()),null}function Pd(e,t){var n=ze;ze|=1;try{return e(t)}finally{ze=n,ze===0&&(ki=Ge()+500,Za&&gr())}}function Ir(e){Qn!==null&&Qn.tag===0&&!(ze&6)&&di();var t=ze;ze|=1;var n=en.transition,r=Pe;try{if(en.transition=null,Pe=1,e)return e()}finally{Pe=r,en.transition=n,ze=t,!(ze&6)&&gr()}}function Md(){Rt=ii.current,Fe(ii)}function Cr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yb(n)),Ze!==null)for(n=Ze.return;n!==null;){var r=n;switch(fd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ga();break;case 3:bi(),Fe(Nt),Fe(ft),kd();break;case 5:wd(r);break;case 4:bi();break;case 13:Fe(Ve);break;case 19:Fe(Ve);break;case 10:xd(r.type._context);break;case 22:case 23:Md()}n=n.return}if(st=e,Ze=e=lr(e.current,null),lt=Rt=t,nt=0,Oo=null,Td=rl=Rr=0,jt=ho=null,_r!==null){for(t=0;t<_r.length;t++)if(n=_r[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}_r=null}return e}function fy(e,t){do{var n=Ze;try{if(gd(),qs.current=Sa,ja){for(var r=We.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ja=!1}if(Lr=0,ot=tt=We=null,po=!1,Lo=0,zd.current=null,n===null||n.return===null){nt=1,Oo=t,Ze=null;break}e:{var s=e,a=n.return,l=n,c=t;if(t=lt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=eh(a);if(h!==null){h.flags&=-257,th(h,a,l,s,t),h.mode&1&&Zf(s,u,t),t=h,c=u;var g=t.updateQueue;if(g===null){var v=new Set;v.add(c),t.updateQueue=v}else g.add(c);break e}else{if(!(t&1)){Zf(s,u,t),Ld();break e}c=Error(ie(426))}}else if(Be&&l.mode&1){var _=eh(a);if(_!==null){!(_.flags&65536)&&(_.flags|=256),th(_,a,l,s,t),hd(wi(c,l));break e}}s=c=wi(c,l),nt!==4&&(nt=2),ho===null?ho=[s]:ho.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=Yx(s,c,t);Jf(s,m);break e;case 1:l=c;var x=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(sr===null||!sr.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t;var j=Qx(s,l,t);Jf(s,j);break e}}s=s.return}while(s!==null)}gy(n)}catch(A){t=A,Ze===n&&n!==null&&(Ze=n=n.return);continue}break}while(!0)}function hy(){var e=Ca.current;return Ca.current=Sa,e===null?Sa:e}function Ld(){(nt===0||nt===3||nt===2)&&(nt=4),st===null||!(Rr&268435455)&&!(rl&268435455)||Gn(st,lt)}function za(e,t){var n=ze;ze|=2;var r=hy();(st!==e||lt!==t)&&(zn=null,Cr(e,t));do try{ww();break}catch(i){fy(e,i)}while(!0);if(gd(),ze=n,Ca.current=r,Ze!==null)throw Error(ie(261));return st=null,lt=0,nt}function ww(){for(;Ze!==null;)my(Ze)}function kw(){for(;Ze!==null&&!J0();)my(Ze)}function my(e){var t=yy(e.alternate,e,Rt);e.memoizedProps=e.pendingProps,t===null?gy(e):Ze=t,zd.current=null}function gy(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mw(n,t),n!==null){n.flags&=32767,Ze=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{nt=6,Ze=null;return}}else if(n=hw(n,t,Rt),n!==null){Ze=n;return}if(t=t.sibling,t!==null){Ze=t;return}Ze=t=e}while(t!==null);nt===0&&(nt=5)}function br(e,t,n){var r=Pe,i=en.transition;try{en.transition=null,Pe=1,_w(e,t,n,r)}finally{en.transition=i,Pe=r}return null}function _w(e,t,n,r){do di();while(Qn!==null);if(ze&6)throw Error(ie(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(ie(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(rb(e,s),e===st&&(Ze=st=null,lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Es||(Es=!0,vy(ua,function(){return di(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=en.transition,en.transition=null;var a=Pe;Pe=1;var l=ze;ze|=4,zd.current=null,xw(e,n),uy(n,e),Vb(Kc),pa=!!Jc,Kc=Jc=null,e.current=n,yw(n),K0(),ze=l,Pe=a,en.transition=s}else e.current=n;if(Es&&(Es=!1,Qn=e,Ea=i),s=e.pendingLanes,s===0&&(sr=null),Q0(n.stateNode),zt(e,Ge()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Na)throw Na=!1,e=hu,hu=null,e;return Ea&1&&e.tag!==0&&di(),s=e.pendingLanes,s&1?e===mu?mo++:(mo=0,mu=e):mo=0,gr(),null}function di(){if(Qn!==null){var e=Yg(Ea),t=en.transition,n=Pe;try{if(en.transition=null,Pe=16>e?16:e,Qn===null)var r=!1;else{if(e=Qn,Qn=null,Ea=0,ze&6)throw Error(ie(331));var i=ze;for(ze|=4,he=e.current;he!==null;){var s=he,a=s.child;if(he.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(he=u;he!==null;){var d=he;switch(d.tag){case 0:case 11:case 15:fo(8,d,s)}var p=d.child;if(p!==null)p.return=d,he=p;else for(;he!==null;){d=he;var f=d.sibling,h=d.return;if(ay(d),d===u){he=null;break}if(f!==null){f.return=h,he=f;break}he=h}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var _=v.sibling;v.sibling=null,v=_}while(v!==null)}}he=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,he=a;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,he=m;break e}he=s.return}}var x=e.current;for(he=x;he!==null;){a=he;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,he=y;else e:for(a=x;he!==null;){if(l=he,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:nl(9,l)}}catch(A){Ke(l,l.return,A)}if(l===a){he=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,he=j;break e}he=l.return}}if(ze=i,gr(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(Ka,e)}catch{}r=!0}return r}finally{Pe=n,en.transition=t}}return!1}function hh(e,t,n){t=wi(n,t),t=Yx(e,t,1),e=or(e,t,1),t=yt(),e!==null&&(Yo(e,1,t),zt(e,t))}function Ke(e,t,n){if(e.tag===3)hh(e,e,n);else for(;t!==null;){if(t.tag===3){hh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sr===null||!sr.has(r))){e=wi(n,e),e=Qx(t,e,1),t=or(t,e,1),e=yt(),t!==null&&(Yo(t,1,e),zt(t,e));break}}t=t.return}}function jw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=yt(),e.pingedLanes|=e.suspendedLanes&n,st===e&&(lt&n)===n&&(nt===4||nt===3&&(lt&130023424)===lt&&500>Ge()-Ad?Cr(e,0):Td|=n),zt(e,t)}function xy(e,t){t===0&&(e.mode&1?(t=ys,ys<<=1,!(ys&130023424)&&(ys=4194304)):t=1);var n=yt();e=Dn(e,t),e!==null&&(Yo(e,t,n),zt(e,n))}function Sw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),xy(e,n)}function Cw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(ie(314))}r!==null&&r.delete(t),xy(e,n)}var yy;yy=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Nt.current)St=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return St=!1,fw(e,t,n);St=!!(e.flags&131072)}else St=!1,Be&&t.flags&1048576&&kx(t,va,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ks(e,t),e=t.pendingProps;var i=xi(t,ft.current);ui(t,n),i=jd(null,t,r,e,i,n);var s=Sd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Et(r)?(s=!0,xa(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vd(t),i.updater=tl,t.stateNode=i,i._reactInternals=t,ru(t,r,e,n),t=su(null,t,r,!0,s,n)):(t.tag=0,Be&&s&&pd(t),gt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ks(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ew(r),e=on(r,e),i){case 0:t=ou(null,t,r,e,n);break e;case 1:t=ih(null,t,r,e,n);break e;case 11:t=nh(null,t,r,e,n);break e;case 14:t=rh(null,t,r,on(r.type,e),n);break e}throw Error(ie(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:on(r,i),ou(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:on(r,i),ih(e,t,r,i,n);case 3:e:{if(ty(t),e===null)throw Error(ie(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Ex(e,t),ka(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=wi(Error(ie(423)),t),t=oh(e,t,r,n,i);break e}else if(r!==i){i=wi(Error(ie(424)),t),t=oh(e,t,r,n,i);break e}else for(Dt=ir(t.stateNode.containerInfo.firstChild),Ut=t,Be=!0,an=null,n=Cx(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yi(),r===i){t=Fn(e,t,n);break e}gt(e,t,r,n)}t=t.child}return t;case 5:return zx(t),e===null&&eu(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,Gc(r,i)?a=null:s!==null&&Gc(r,s)&&(t.flags|=32),ey(e,t),gt(e,t,a,n),t.child;case 6:return e===null&&eu(t),null;case 13:return ny(e,t,n);case 4:return bd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vi(t,null,r,n):gt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:on(r,i),nh(e,t,r,i,n);case 7:return gt(e,t,t.pendingProps,n),t.child;case 8:return gt(e,t,t.pendingProps.children,n),t.child;case 12:return gt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,Oe(ba,r._currentValue),r._currentValue=a,s!==null)if(pn(s.value,a)){if(s.children===i.children&&!Nt.current){t=Fn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Rn(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),tu(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ie(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),tu(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}gt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ui(t,n),i=tn(i),r=r(i),t.flags|=1,gt(e,t,r,n),t.child;case 14:return r=t.type,i=on(r,t.pendingProps),i=on(r.type,i),rh(e,t,r,i,n);case 15:return Xx(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:on(r,i),Ks(e,t),t.tag=1,Et(r)?(e=!0,xa(t)):e=!1,ui(t,n),Gx(t,r,i),ru(t,r,i,n),su(null,t,r,!0,e,n);case 19:return ry(e,t,n);case 22:return Zx(e,t,n)}throw Error(ie(156,t.tag))};function vy(e,t){return qg(e,t)}function Nw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(e,t,n,r){return new Nw(e,t,n,r)}function Rd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ew(e){if(typeof e=="function")return Rd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ed)return 11;if(e===td)return 14}return 2}function lr(e,t){var n=e.alternate;return n===null?(n=Qt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qs(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")Rd(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Kr:return Nr(n.children,i,s,t);case Zu:a=8,i|=8;break;case Nc:return e=Qt(12,n,t,i|2),e.elementType=Nc,e.lanes=s,e;case Ec:return e=Qt(13,n,t,i),e.elementType=Ec,e.lanes=s,e;case zc:return e=Qt(19,n,t,i),e.elementType=zc,e.lanes=s,e;case zg:return il(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ng:a=10;break e;case Eg:a=9;break e;case ed:a=11;break e;case td:a=14;break e;case Hn:a=16,r=null;break e}throw Error(ie(130,e==null?e:typeof e,""))}return t=Qt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Nr(e,t,n,r){return e=Qt(7,e,r,t),e.lanes=n,e}function il(e,t,n,r){return e=Qt(22,e,r,t),e.elementType=zg,e.lanes=n,e.stateNode={isHidden:!1},e}function Gl(e,t,n){return e=Qt(6,e,null,t),e.lanes=n,e}function Yl(e,t,n){return t=Qt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tl(0),this.expirationTimes=Tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Id(e,t,n,r,i,s,a,l,c){return e=new zw(e,t,n,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Qt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vd(s),e}function Tw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function by(e){if(!e)return dr;e=e._reactInternals;e:{if(Br(e)!==e||e.tag!==1)throw Error(ie(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(ie(171))}if(e.tag===1){var n=e.type;if(Et(n))return bx(e,n,t)}return t}function wy(e,t,n,r,i,s,a,l,c){return e=Id(n,r,!0,e,i,s,a,l,c),e.context=by(null),n=e.current,r=yt(),i=ar(n),s=Rn(r,i),s.callback=t??null,or(n,s,i),e.current.lanes=i,Yo(e,i,r),zt(e,r),e}function ol(e,t,n,r){var i=t.current,s=yt(),a=ar(i);return n=by(n),t.context===null?t.context=n:t.pendingContext=n,t=Rn(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=or(i,t,a),e!==null&&(un(e,i,a,s),Hs(e,i,a)),a}function Ta(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function mh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Od(e,t){mh(e,t),(e=e.alternate)&&mh(e,t)}function Aw(){return null}var ky=typeof reportError=="function"?reportError:function(e){console.error(e)};function $d(e){this._internalRoot=e}sl.prototype.render=$d.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(ie(409));ol(e,t,null,null)};sl.prototype.unmount=$d.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ir(function(){ol(null,e,null,null)}),t[$n]=null}};function sl(e){this._internalRoot=e}sl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kn.length&&t!==0&&t<Kn[n].priority;n++);Kn.splice(n,0,e),n===0&&tx(e)}};function Dd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function al(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gh(){}function Pw(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ta(a);s.call(u)}}var a=wy(t,r,e,0,null,!1,!1,"",gh);return e._reactRootContainer=a,e[$n]=a.current,zo(e.nodeType===8?e.parentNode:e),Ir(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Ta(c);l.call(u)}}var c=Id(e,0,!1,null,null,!1,!1,"",gh);return e._reactRootContainer=c,e[$n]=c.current,zo(e.nodeType===8?e.parentNode:e),Ir(function(){ol(t,c,n,r)}),c}function ll(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var c=Ta(a);l.call(c)}}ol(t,a,e,i)}else a=Pw(n,t,e,i,r);return Ta(a)}Qg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=to(t.pendingLanes);n!==0&&(id(t,n|1),zt(t,Ge()),!(ze&6)&&(ki=Ge()+500,gr()))}break;case 13:Ir(function(){var r=Dn(e,1);if(r!==null){var i=yt();un(r,e,1,i)}}),Od(e,1)}};od=function(e){if(e.tag===13){var t=Dn(e,134217728);if(t!==null){var n=yt();un(t,e,134217728,n)}Od(e,134217728)}};Xg=function(e){if(e.tag===13){var t=ar(e),n=Dn(e,t);if(n!==null){var r=yt();un(n,e,t,r)}Od(e,t)}};Zg=function(){return Pe};ex=function(e,t){var n=Pe;try{return Pe=e,t()}finally{Pe=n}};Dc=function(e,t,n){switch(t){case"input":if(Pc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Xa(r);if(!i)throw Error(ie(90));Ag(r),Pc(r,i)}}}break;case"textarea":Mg(e,n);break;case"select":t=n.value,t!=null&&si(e,!!n.multiple,t,!1)}};Fg=Pd;Bg=Ir;var Mw={usingClientEntryPoint:!1,Events:[Xo,Xr,Xa,$g,Dg,Pd]},Hi={findFiberByHostInstance:kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lw={bundleType:Hi.bundleType,version:Hi.version,rendererPackageName:Hi.rendererPackageName,rendererConfig:Hi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Un.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Wg(e),e===null?null:e.stateNode},findFiberByHostInstance:Hi.findFiberByHostInstance||Aw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zs.isDisabled&&zs.supportsFiber)try{Ka=zs.inject(Lw),wn=zs}catch{}}Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mw;Ht.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dd(t))throw Error(ie(200));return Tw(e,t,null,n)};Ht.createRoot=function(e,t){if(!Dd(e))throw Error(ie(299));var n=!1,r="",i=ky;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Id(e,1,!1,null,null,n,!1,r,i),e[$n]=t.current,zo(e.nodeType===8?e.parentNode:e),new $d(t)};Ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(ie(188)):(e=Object.keys(e).join(","),Error(ie(268,e)));return e=Wg(t),e=e===null?null:e.stateNode,e};Ht.flushSync=function(e){return Ir(e)};Ht.hydrate=function(e,t,n){if(!al(t))throw Error(ie(200));return ll(null,e,t,!0,n)};Ht.hydrateRoot=function(e,t,n){if(!Dd(e))throw Error(ie(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=ky;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=wy(t,null,e,1,n??null,i,!1,s,a),e[$n]=t.current,zo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new sl(t)};Ht.render=function(e,t,n){if(!al(t))throw Error(ie(200));return ll(null,e,t,!1,n)};Ht.unmountComponentAtNode=function(e){if(!al(e))throw Error(ie(40));return e._reactRootContainer?(Ir(function(){ll(null,null,e,!1,function(){e._reactRootContainer=null,e[$n]=null})}),!0):!1};Ht.unstable_batchedUpdates=Pd;Ht.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!al(n))throw Error(ie(200));if(e==null||e._reactInternals===void 0)throw Error(ie(38));return ll(e,t,n,!1,r)};Ht.version="18.3.1-next-f1338f8080-20240426";function _y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_y)}catch(e){console.error(e)}}_y(),_g.exports=Ht;var jy=_g.exports,xh=jy;Sc.createRoot=xh.createRoot,Sc.hydrateRoot=xh.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $o(){return $o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$o.apply(this,arguments)}var Xn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Xn||(Xn={}));const yh="popstate";function Rw(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:a,hash:l}=r.location;return yu("",{pathname:s,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Sy(i)}return Ow(t,n,null,e)}function et(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Fd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Iw(){return Math.random().toString(36).substr(2,8)}function vh(e,t){return{usr:e.state,key:e.key,idx:t}}function yu(e,t,n,r){return n===void 0&&(n=null),$o({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ti(t):t,{state:n,key:t&&t.key||r||Iw()})}function Sy(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ti(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ow(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,l=Xn.Pop,c=null,u=d();u==null&&(u=0,a.replaceState($o({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function p(){l=Xn.Pop;let _=d(),m=_==null?null:_-u;u=_,c&&c({action:l,location:v.location,delta:m})}function f(_,m){l=Xn.Push;let x=yu(v.location,_,m);u=d()+1;let y=vh(x,u),j=v.createHref(x);try{a.pushState(y,"",j)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;i.location.assign(j)}s&&c&&c({action:l,location:v.location,delta:1})}function h(_,m){l=Xn.Replace;let x=yu(v.location,_,m);u=d();let y=vh(x,u),j=v.createHref(x);a.replaceState(y,"",j),s&&c&&c({action:l,location:v.location,delta:0})}function g(_){let m=i.location.origin!=="null"?i.location.origin:i.location.href,x=typeof _=="string"?_:Sy(_);return x=x.replace(/ $/,"%20"),et(m,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,m)}let v={get action(){return l},get location(){return e(i,a)},listen(_){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(yh,p),c=_,()=>{i.removeEventListener(yh,p),c=null}},createHref(_){return t(i,_)},createURL:g,encodeLocation(_){let m=g(_);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:h,go(_){return a.go(_)}};return v}var bh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(bh||(bh={}));function $w(e,t,n){return n===void 0&&(n="/"),Dw(e,t,n)}function Dw(e,t,n,r){let i=typeof t=="string"?Ti(t):t,s=Ey(i.pathname||"/",n);if(s==null)return null;let a=Cy(e);Fw(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=Xw(s);l=Gw(a[c],u)}return l}function Cy(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,a,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};c.relativePath.startsWith("/")&&(et(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Er([r,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(et(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Cy(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:Jw(u,s.index),routesMeta:d})};return e.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,a);else for(let c of Ny(s.path))i(s,a,c)}),t}function Ny(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=Ny(r.join("/")),l=[];return l.push(...a.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Fw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Kw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Bw=/^:[\w-]+$/,Uw=3,Vw=2,Ww=1,Hw=10,qw=-2,wh=e=>e==="*";function Jw(e,t){let n=e.split("/"),r=n.length;return n.some(wh)&&(r+=qw),t&&(r+=Vw),n.filter(i=>!wh(i)).reduce((i,s)=>i+(Bw.test(s)?Uw:s===""?Ww:Hw),r)}function Kw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Gw(e,t,n){let{routesMeta:r}=e,i={},s="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",p=Yw({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),f=c.route;if(!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:Er([s,p.pathname]),pathnameBase:rk(Er([s,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(s=Er([s,p.pathnameBase]))}return a}function Yw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Qw(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:f,isOptional:h}=d;if(f==="*"){let v=l[p]||"";a=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const g=l[p];return h&&!g?u[f]=void 0:u[f]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:e}}function Qw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Fd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Xw(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Fd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ey(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Zw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ek=e=>Zw.test(e);function tk(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ti(e):e,s;if(n)if(ek(n))s=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),Fd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=kh(n.substring(1),"/"):s=kh(n,t)}else s=t;return{pathname:s,search:ik(r),hash:ok(i)}}function kh(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ql(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function nk(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function zy(e,t){let n=nk(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ty(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ti(e):(i=$o({},e),et(!i.pathname||!i.pathname.includes("?"),Ql("?","pathname","search",i)),et(!i.pathname||!i.pathname.includes("#"),Ql("#","pathname","hash",i)),et(!i.search||!i.search.includes("#"),Ql("#","search","hash",i)));let s=e===""||i.pathname==="",a=s?"/":i.pathname,l;if(a==null)l=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}l=p>=0?t[p]:"/"}let c=tk(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Er=e=>e.join("/").replace(/\/\/+/g,"/"),rk=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ik=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ok=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function sk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ay=["post","put","patch","delete"];new Set(Ay);const ak=["get",...Ay];new Set(ak);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Do(){return Do=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Do.apply(this,arguments)}const Bd=k.createContext(null),lk=k.createContext(null),es=k.createContext(null),cl=k.createContext(null),xr=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Py=k.createContext(null);function ts(){return k.useContext(cl)!=null}function Ud(){return ts()||et(!1),k.useContext(cl).location}function My(e){k.useContext(es).static||k.useLayoutEffect(e)}function Vd(){let{isDataRoute:e}=k.useContext(xr);return e?kk():ck()}function ck(){ts()||et(!1);let e=k.useContext(Bd),{basename:t,future:n,navigator:r}=k.useContext(es),{matches:i}=k.useContext(xr),{pathname:s}=Ud(),a=JSON.stringify(zy(i,n.v7_relativeSplatPath)),l=k.useRef(!1);return My(()=>{l.current=!0}),k.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=Ty(u,JSON.parse(a),s,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Er([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,a,s,e])}function uk(){let{matches:e}=k.useContext(xr),t=e[e.length-1];return t?t.params:{}}function dk(e,t){return pk(e,t)}function pk(e,t,n,r){ts()||et(!1);let{navigator:i}=k.useContext(es),{matches:s}=k.useContext(xr),a=s[s.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=Ud(),d;if(t){var p;let _=typeof t=="string"?Ti(t):t;c==="/"||(p=_.pathname)!=null&&p.startsWith(c)||et(!1),d=_}else d=u;let f=d.pathname||"/",h=f;if(c!=="/"){let _=c.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(_.length).join("/")}let g=$w(e,{pathname:h}),v=xk(g&&g.map(_=>Object.assign({},_,{params:Object.assign({},l,_.params),pathname:Er([c,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?c:Er([c,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),s,n,r);return t&&v?k.createElement(cl.Provider,{value:{location:Do({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Xn.Pop}},v):v}function fk(){let e=wk(),t=sk(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,null)}const hk=k.createElement(fk,null);class mk extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(xr.Provider,{value:this.props.routeContext},k.createElement(Py.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function gk(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext(Bd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(xr.Provider,{value:t},r)}function xk(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||et(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:h}=n,g=p.route.loader&&f[p.route.id]===void 0&&(!h||h[p.route.id]===void 0);if(p.route.lazy||g){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,p,f)=>{let h,g=!1,v=null,_=null;n&&(h=l&&p.route.id?l[p.route.id]:void 0,v=p.route.errorElement||hk,c&&(u<0&&f===0?(_k("route-fallback"),g=!0,_=null):u===f&&(g=!0,_=p.route.hydrateFallbackElement||null)));let m=t.concat(a.slice(0,f+1)),x=()=>{let y;return h?y=v:g?y=_:p.route.Component?y=k.createElement(p.route.Component,null):p.route.element?y=p.route.element:y=d,k.createElement(gk,{match:p,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:y})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?k.createElement(mk,{location:n.location,revalidation:n.revalidation,component:v,error:h,children:x(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):x()},null)}var Ly=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ly||{}),Ry=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ry||{});function yk(e){let t=k.useContext(Bd);return t||et(!1),t}function vk(e){let t=k.useContext(lk);return t||et(!1),t}function bk(e){let t=k.useContext(xr);return t||et(!1),t}function Iy(e){let t=bk(),n=t.matches[t.matches.length-1];return n.route.id||et(!1),n.route.id}function wk(){var e;let t=k.useContext(Py),n=vk(),r=Iy();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function kk(){let{router:e}=yk(Ly.UseNavigateStable),t=Iy(Ry.UseNavigateStable),n=k.useRef(!1);return My(()=>{n.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Do({fromRouteId:t},s)))},[e,t])}const _h={};function _k(e,t,n){_h[e]||(_h[e]=!0)}function jk(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Sk(e){let{to:t,replace:n,state:r,relative:i}=e;ts()||et(!1);let{future:s,static:a}=k.useContext(es),{matches:l}=k.useContext(xr),{pathname:c}=Ud(),u=Vd(),d=Ty(t,zy(l,s.v7_relativeSplatPath),c,i==="path"),p=JSON.stringify(d);return k.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:i}),[u,p,i,n,r]),null}function qr(e){et(!1)}function Ck(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Xn.Pop,navigator:s,static:a=!1,future:l}=e;ts()&&et(!1);let c=t.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:c,navigator:s,static:a,future:Do({v7_relativeSplatPath:!1},l)}),[c,l,s,a]);typeof r=="string"&&(r=Ti(r));let{pathname:d="/",search:p="",hash:f="",state:h=null,key:g="default"}=r,v=k.useMemo(()=>{let _=Ey(d,c);return _==null?null:{location:{pathname:_,search:p,hash:f,state:h,key:g},navigationType:i}},[c,d,p,f,h,g,i]);return v==null?null:k.createElement(es.Provider,{value:u},k.createElement(cl.Provider,{children:n,value:v}))}function Nk(e){let{children:t,location:n}=e;return dk(vu(t),n)}new Promise(()=>{});function vu(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,i)=>{if(!k.isValidElement(r))return;let s=[...t,i];if(r.type===k.Fragment){n.push.apply(n,vu(r.props.children,s));return}r.type!==qr&&et(!1),!r.props.index||!r.props.children||et(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=vu(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Ek="6";try{window.__reactRouterVersion=Ek}catch{}const zk="startTransition",jh=j0[zk];function Tk(e){let{basename:t,children:n,future:r,window:i}=e,s=k.useRef();s.current==null&&(s.current=Rw({window:i,v5Compat:!0}));let a=s.current,[l,c]=k.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=k.useCallback(p=>{u&&jh?jh(()=>c(p)):c(p)},[c,u]);return k.useLayoutEffect(()=>a.listen(d),[a,d]),k.useEffect(()=>jk(r),[r]),k.createElement(Ck,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}var Sh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Sh||(Sh={}));var Ch;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ch||(Ch={}));const Ak={},Nh=e=>{let t;const n=new Set,r=(d,p)=>{const f=typeof d=="function"?d(t):d;if(!Object.is(f,t)){const h=t;t=p??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(g=>g(t,h))}},i=()=>t,c={setState:r,getState:i,getInitialState:()=>u,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(Ak?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,c);return c},Pk=e=>e?Nh(e):Nh;var Oy={exports:{}},$y={},Dy={exports:{}},Fy={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _i=k;function Mk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Lk=typeof Object.is=="function"?Object.is:Mk,Rk=_i.useState,Ik=_i.useEffect,Ok=_i.useLayoutEffect,$k=_i.useDebugValue;function Dk(e,t){var n=t(),r=Rk({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return Ok(function(){i.value=n,i.getSnapshot=t,Xl(i)&&s({inst:i})},[e,n,t]),Ik(function(){return Xl(i)&&s({inst:i}),e(function(){Xl(i)&&s({inst:i})})},[e]),$k(n),n}function Xl(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Lk(e,n)}catch{return!0}}function Fk(e,t){return t()}var Bk=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Fk:Dk;Fy.useSyncExternalStore=_i.useSyncExternalStore!==void 0?_i.useSyncExternalStore:Bk;Dy.exports=Fy;var Uk=Dy.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ul=k,Vk=Uk;function Wk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Hk=typeof Object.is=="function"?Object.is:Wk,qk=Vk.useSyncExternalStore,Jk=ul.useRef,Kk=ul.useEffect,Gk=ul.useMemo,Yk=ul.useDebugValue;$y.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=Jk(null);if(s.current===null){var a={hasValue:!1,value:null};s.current=a}else a=s.current;s=Gk(function(){function c(h){if(!u){if(u=!0,d=h,h=r(h),i!==void 0&&a.hasValue){var g=a.value;if(i(g,h))return p=g}return p=h}if(g=p,Hk(d,h))return g;var v=r(h);return i!==void 0&&i(g,v)?(d=h,g):(d=h,p=v)}var u=!1,d,p,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,r,i]);var l=qk(e,s[0],s[1]);return Kk(function(){a.hasValue=!0,a.value=l},[l]),Yk(l),l};Oy.exports=$y;var Qk=Oy.exports;const Xk=qa(Qk),By={},{useDebugValue:Zk}=Bt,{useSyncExternalStoreWithSelector:e_}=Xk;let Eh=!1;const t_=e=>e;function n_(e,t=t_,n){(By?"production":void 0)!=="production"&&n&&!Eh&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Eh=!0);const r=e_(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return Zk(r),r}const zh=e=>{(By?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?Pk(e):e,n=(r,i)=>n_(t,r,i);return Object.assign(n,t),n},r_=e=>e?zh(e):zh,ht=r_((e,t)=>({project:null,selectedAgentId:null,selectedToolId:null,mcpServers:[],builtinTools:[],isRunning:!1,runEvents:[],watches:[],activeTab:"app",sidebarOpen:!0,hasUnsavedChanges:!1,runAgentId:null,currentSessionId:null,setProject:n=>{var i;const r=((i=n==null?void 0:n.watches)==null?void 0:i.map(s=>({...s,result:void 0,error:void 0,isLoading:!1,lastRun:void 0,history:[]})))||[];e({project:n,watches:r})},setSelectedAgentId:n=>e({selectedAgentId:n}),setSelectedToolId:n=>e({selectedToolId:n}),setMcpServers:n=>e({mcpServers:n}),setBuiltinTools:n=>e({builtinTools:n}),setIsRunning:n=>e({isRunning:n}),addRunEvent:n=>e(r=>({runEvents:[...r.runEvents,n]})),clearRunEvents:()=>e({runEvents:[]}),setWatches:n=>e({watches:n}),updateWatch:(n,r)=>e(i=>{const s=i.watches.map(l=>l.id===n?{...l,...r}:l);if(("serverName"in r||"toolName"in r||"args"in r||"transform"in r)&&i.project){const l=s.map(({id:c,serverName:u,toolName:d,args:p,transform:f})=>({id:c,serverName:u,toolName:d,args:p,transform:f}));return{watches:s,project:{...i.project,watches:l},hasUnsavedChanges:!0}}return{watches:s}}),addWatch:n=>e(r=>{const i=[...r.watches,n],{project:s}=r;if(s){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...s,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),removeWatch:n=>e(r=>{const i=r.watches.filter(a=>a.id!==n),{project:s}=r;if(s){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...s,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),clearWatchHistories:()=>e(n=>({watches:n.watches.map(r=>({...r,history:[],result:void 0,error:void 0}))})),setActiveTab:n=>e({activeTab:n}),setSidebarOpen:n=>e({sidebarOpen:n}),setHasUnsavedChanges:n=>e({hasUnsavedChanges:n}),setRunAgentId:n=>e({runAgentId:n}),setCurrentSessionId:n=>e({currentSessionId:n}),updateProject:n=>{const{project:r}=t();r&&e({project:{...r,...n}})},addAgent:n=>{const{project:r}=t();if(r){let i=r.app;if(n.type==="LlmAgent"&&n.output_key){const s=n.output_key;r.app.state_keys.find(l=>l.name===s)||(i={...r.app,state_keys:[...r.app.state_keys,{name:s,description:`Output from ${n.name} agent`,type:"string",scope:"session"}]})}e({project:{...r,app:i,agents:[...r.agents,n]}})}},updateAgent:(n,r)=>{const{project:i}=t();if(i){const s=i.agents.find(l=>l.id===n);let a=i.app;if(s&&s.type==="LlmAgent"&&r.output_key){const l=s.output_key,c=r.output_key;if(l!==c){const u=i.app.state_keys.filter(p=>p.name!==l);u.find(p=>p.name===c)?a={...i.app,state_keys:u}:a={...i.app,state_keys:[...u,{name:c,description:`Output from ${r.name||s.name} agent`,type:"string",scope:"session"}]}}}e({project:{...i,app:a,agents:i.agents.map(l=>l.id===n?{...l,...r}:l)}})}},removeAgent:n=>{const{project:r,selectedAgentId:i}=t();r&&e({project:{...r,agents:r.agents.filter(s=>s.id!==n)},selectedAgentId:i===n?null:i})},addCustomTool:n=>{const{project:r}=t();r&&e({project:{...r,custom_tools:[...r.custom_tools,n]}})},updateCustomTool:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_tools:i.custom_tools.map(s=>s.id===n?{...s,...r}:s)}})},removeCustomTool:n=>{const{project:r,selectedToolId:i}=t();r&&e({project:{...r,custom_tools:r.custom_tools.filter(s=>s.id!==n)},selectedToolId:i===n?null:i})},addCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:[...r.custom_callbacks||[],n]}})},updateCustomCallback:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_callbacks:(i.custom_callbacks||[]).map(s=>s.id===n?{...s,...r}:s)}})},removeCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:(r.custom_callbacks||[]).filter(i=>i.id!==n)}})}})),Wd="/api";async function Ce(e,t){const n=await fetch(`${Wd}${e}`,{...t,headers:{"Content-Type":"application/json",...t==null?void 0:t.headers}});if(!n.ok){const r=await n.json().catch(()=>({detail:"Unknown error"}));throw new Error(r.detail||`HTTP ${n.status}`)}return n.json()}async function Uy(){return(await Ce("/projects")).projects}async function Vy(e){return(await Ce(`/projects/${e}`)).project}async function Wy(e,t=""){return(await Ce("/projects",{method:"POST",body:JSON.stringify({name:e,description:t})})).project}async function bu(e,t){return(await Ce(`/projects/${e}`,{method:"PUT",body:JSON.stringify(t)})).project}async function Hy(e){await Ce(`/projects/${e}`,{method:"DELETE"})}async function qy(e){return Ce(`/sessions/${e}/save-to-memory`,{method:"POST"})}async function wu(e){return(await Ce(`/projects/${e}/sessions`)).sessions}async function Jy(e,t){return(await Ce(`/projects/${e}/sessions/${t}/load`)).session}async function Ky(e,t){return(await Ce(`/projects/${e}/sessions/${t}/artifacts`)).artifacts||[]}function Xs(e,t,n){return`${Wd}/projects/${e}/sessions/${t}/artifacts/${encodeURIComponent(n)}`}async function Gy(e){return(await Ce(`/projects/${e}/yaml`)).yaml}async function Yy(e,t){return(await Ce(`/projects/${e}/yaml`,{method:"PUT",body:JSON.stringify({yaml:t})})).project}async function Hd(){return(await Ce("/mcp-servers")).servers}async function Qy(){return(await Ce("/builtin-tools")).tools}function Xy(e){const t=window.location.protocol==="https:"?"wss:":"ws:",n=window.location.host;return new WebSocket(`${t}//${n}/ws/run/${e}`)}async function Zs(e,t,n,r){return await Ce(`/projects/${e}/generate-prompt`,{method:"POST",body:JSON.stringify({agent_id:t,context:n,agent_config:r||void 0})})}async function Zy(e,t){return await Ce(`/projects/${e}/generate-agent-config`,{method:"POST",body:JSON.stringify({description:t})})}async function ev(e,t,n,r=[],i){return await Ce(`/projects/${e}/generate-tool-code`,{method:"POST",body:JSON.stringify({tool_name:t,tool_description:n,state_keys_used:r,context:i})})}async function tv(e,t,n,r,i=[],s){return await Ce(`/projects/${e}/generate-callback-code`,{method:"POST",body:JSON.stringify({callback_name:t,callback_description:n,callback_type:r,state_keys_used:i,context:s})})}async function ku(e){return await Ce("/test-mcp-server",{method:"POST",body:JSON.stringify(e)})}async function nv(e,t){return Ce(`/projects/${e}/test-model`,{method:"POST",body:JSON.stringify(t)})}async function rv(e,t){return Ce(`/projects/${e}/skillsets/${t}/stats`)}async function iv(e,t,n,r,i=500,s=50){return Ce(`/projects/${e}/skillsets/${t}/url`,{method:"POST",body:JSON.stringify({url:n,source_name:r,chunk_size:i,chunk_overlap:s})})}async function ov(e,t,n,r=500,i=50){const s=new FormData;s.append("file",n),s.append("chunk_size",String(r)),s.append("chunk_overlap",String(i));const a=await fetch(`${Wd}/projects/${e}/skillsets/${t}/file`,{method:"POST",body:s});if(!a.ok)throw new Error(`Upload failed: ${a.statusText}`);return a.json()}async function sv(e,t,n,r=10,i=0){return Ce(`/projects/${e}/skillsets/${t}/search`,{method:"POST",body:JSON.stringify({query:n,top_k:r,min_score:i})})}async function av(e,t){return Ce(`/projects/${e}/skillsets/${t}/entries`,{method:"DELETE"})}async function lv(){return Ce("/skillsets/embeddings-available")}const Ye={async get(e){return Ce(e)},async post(e,t){return Ce(e,{method:"POST",body:t?JSON.stringify(t):void 0})},async put(e,t){return Ce(e,{method:"PUT",body:t?JSON.stringify(t):void 0})},async delete(e){return Ce(e,{method:"DELETE"})}},i_=Object.freeze(Object.defineProperty({__proto__:null,addSkillSetUrl:iv,api:Ye,checkEmbeddingsAvailable:lv,clearSkillSet:av,createProject:Wy,createRunWebSocket:Xy,deleteProject:Hy,fetchJSON:Ce,generateAgentConfig:Zy,generateCallbackCode:tv,generatePrompt:Zs,generateToolCode:ev,getArtifactUrl:Xs,getBuiltinTools:Qy,getMcpServers:Hd,getProject:Vy,getProjectYaml:Gy,getSkillSetStats:rv,listArtifacts:Ky,listProjectSessions:wu,listProjects:Uy,loadSession:Jy,saveSessionToMemory:qy,searchSkillSet:sv,testMcpServer:ku,testModelConfig:nv,updateProject:bu,updateProjectFromYaml:Yy,uploadSkillSetFile:ov},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var o_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),fe=(e,t)=>{const n=k.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:l="",children:c,...u},d)=>k.createElement("svg",{ref:d,...o_,width:i,height:i,stroke:r,strokeWidth:a?Number(s)*24/Number(i):s,className:["lucide",`lucide-${s_(e)}`,l].join(" "),...u},[...t.map(([p,f])=>k.createElement(p,f)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=fe("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=fe("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=fe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=fe("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=fe("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=fe("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=fe("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=fe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=fe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=fe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=fe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=fe("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=fe("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=fe("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=fe("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=fe("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=fe("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=fe("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=fe("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=fe("FileBox",[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",key:"h7jej2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M2.97 13.12c-.6.36-.97 1.02-.97 1.74v3.28c0 .72.37 1.38.97 1.74l3 1.83c.63.39 1.43.39 2.06 0l3-1.83c.6-.36.97-1.02.97-1.74v-3.28c0-.72-.37-1.38-.97-1.74l-3-1.83a1.97 1.97 0 0 0-2.06 0l-3 1.83Z",key:"f4a3oc"}],["path",{d:"m7 17-4.74-2.85",key:"etm6su"}],["path",{d:"m7 17 4.74-2.85",key:"5xuooz"}],["path",{d:"M7 17v5",key:"1yj1jh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=fe("FileCheck",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=fe("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=fe("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=fe("File",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=fe("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=fe("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=fe("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=fe("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=fe("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=fe("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=fe("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=fe("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=fe("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=fe("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=fe("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=fe("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=fe("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=fe("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=fe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=fe("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=fe("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=fe("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=fe("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=fe("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=fe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=fe("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=fe("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=fe("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=fe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=fe("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=fe("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=fe("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=fe("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=fe("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=fe("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=fe("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=fe("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=fe("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=fe("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=fe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=fe("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=fe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=fe("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=fe("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=fe("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=fe("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=fe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=fe("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function S_(){const e=Vd(),[t,n]=k.useState([]),[r,i]=k.useState(!0),[s,a]=k.useState(!1),[l,c]=k.useState("");k.useEffect(()=>{u()},[]);async function u(){try{const f=await Uy();n(f)}catch(f){console.error("Failed to load projects:",f)}finally{i(!1)}}async function d(){if(l.trim())try{const f=await Wy(l.trim());e(`/project/${f.id}`)}catch(f){console.error("Failed to create project:",f)}}async function p(f,h){if(h.stopPropagation(),!!confirm("Delete this project?"))try{await Hy(f),n(t.filter(g=>g.id!==f))}catch(g){console.error("Failed to delete project:",g)}}return o.jsxs("div",{className:"project-list",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("header",{className:"header",children:[o.jsxs("div",{className:"logo",children:[o.jsx(Qd,{size:40,className:"logo-icon"}),o.jsx("h1",{className:"title",children:"ADK Playground"})]}),o.jsx("p",{className:"subtitle",children:"Build, test, and deploy AI agents visually"})]}),o.jsxs("div",{className:"content",children:[s?o.jsxs("div",{className:"create-form",children:[o.jsx("input",{type:"text",placeholder:"Project name...",value:l,onChange:f=>c(f.target.value),onKeyDown:f=>f.key==="Enter"&&d(),autoFocus:!0}),o.jsxs("button",{className:"btn btn-primary",onClick:d,children:[o.jsx(Xe,{size:18}),"Create"]}),o.jsx("button",{className:"btn btn-secondary",onClick:()=>a(!1),children:"Cancel"})]}):o.jsx("div",{className:"create-form",children:o.jsxs("button",{className:"btn btn-primary",onClick:()=>a(!0),children:[o.jsx(Xe,{size:18}),"New Project"]})}),r?o.jsx("div",{className:"loading",children:"Loading projects..."}):t.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Th,{size:48,style:{marginBottom:16,opacity:.3}}),o.jsx("p",{children:"No projects yet. Create one to get started!"})]}):o.jsx("div",{className:"projects-grid",children:t.map(f=>o.jsxs("div",{className:"project-card",onClick:()=>e(`/project/${f.id}`),children:[o.jsxs("h3",{children:[o.jsx(Th,{size:18}),f.name]}),o.jsx("p",{children:f.description||"No description"}),o.jsx("button",{className:"delete-btn",onClick:h=>p(f.id,h),children:o.jsx(Ue,{size:16})})]},f.id))})]})]})}const Ah={},C_=5*60*1e3;function N_({projectId:e,value:t,provider:n,apiBase:r,onChange:i,placeholder:s="Search models..."}){const a=`${e}:${n||""}:${r||""}`,[l,c]=k.useState(t||""),[u,d]=k.useState(!1),[p,f]=k.useState([]),[h,g]=k.useState(!1),[v,_]=k.useState(null),[m,x]=k.useState(-1),[y,j]=k.useState({top:0,left:0,width:0}),A=k.useRef(null),S=k.useRef(null);k.useEffect(()=>{if(u&&A.current){const T=A.current.getBoundingClientRect();j({top:T.bottom+window.scrollY+4,left:T.left+window.scrollX,width:T.width})}},[u]);const P=k.useCallback(async()=>{const T=Ah[a];if(T&&Date.now()-T.timestamp<C_){const O=[];Object.values(T.providers).forEach(D=>{O.push(...D.models)}),f(O);return}g(!0),_(null);try{const O=new URLSearchParams;n&&O.append("provider",n),r&&O.append("api_base",r);const D=`/models/${e}${O.toString()?"?"+O.toString():""}`,C=await Ye.get(D);Ah[a]={providers:C.providers,timestamp:Date.now()};const L=[];Object.values(C.providers).forEach(M=>{M.models&&M.models.length>0&&L.push(...M.models)}),f(L)}catch(O){_(O.message||"Failed to fetch models")}finally{g(!1)}},[e,a,r,n]);k.useEffect(()=>{P()},[P]),k.useEffect(()=>{c(t||"")},[t]);const N=p.filter(T=>{const O=l.toLowerCase();return T.id.toLowerCase().includes(O)||T.name.toLowerCase().includes(O)||T.provider.toLowerCase().includes(O)});k.useEffect(()=>{const T=O=>{S.current&&!S.current.contains(O.target)&&A.current&&!A.current.contains(O.target)&&d(!1)};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[]);const V=T=>{if(!u){(T.key==="ArrowDown"||T.key==="Enter")&&(d(!0),T.preventDefault());return}switch(T.key){case"ArrowDown":x(O=>Math.min(O+1,N.length-1)),T.preventDefault();break;case"ArrowUp":x(O=>Math.max(O-1,0)),T.preventDefault();break;case"Enter":m>=0&&m<N.length&&E(N[m]),T.preventDefault();break;case"Escape":d(!1);break}},E=T=>{c(T.id),i(T.id,T.provider),d(!1)},I=T=>{c(T.target.value),d(!0),x(-1),i(T.target.value,n||"gemini")},R=T=>{switch(T.toLowerCase()){case"gemini":return"provider-gemini";case"anthropic":return"provider-anthropic";case"openai":return"provider-openai";case"groq":return"provider-groq";case"together":return"provider-together";case"ollama":return"provider-ollama";default:return"provider-other"}},q=u?o.jsxs("div",{ref:S,className:"model-autocomplete-dropdown model-autocomplete-dropdown-portal",style:{position:"fixed",top:y.top,left:y.left,width:y.width},children:[h&&o.jsx("div",{className:"model-autocomplete-loading",children:"Loading models..."}),v&&o.jsx("div",{className:"model-autocomplete-error",children:v}),!h&&!v&&N.length===0&&o.jsx("div",{className:"model-autocomplete-empty",children:l?"No matching models":"No models available"}),!h&&N.length>0&&o.jsxs("div",{className:"model-autocomplete-list",children:[N.slice(0,50).map((T,O)=>o.jsxs("div",{className:`model-autocomplete-item ${O===m?"highlighted":""}`,onClick:()=>E(T),onMouseEnter:()=>x(O),children:[o.jsx("span",{className:`provider-badge ${R(T.provider)}`,children:T.provider}),o.jsx("span",{className:"model-id",children:T.id}),T.context_window&&o.jsxs("span",{className:"model-context",title:`${T.context_window.toLocaleString()} token context`,children:[Math.round(T.context_window/1e3),"K"]}),T.supports_tools&&o.jsx("span",{className:"model-feature",title:"Supports function calling / tools",children:"🔧"}),T.supports_vision&&o.jsx("span",{className:"model-feature",title:"Supports image/vision input",children:"👁️"}),T.supports_json_mode&&o.jsx("span",{className:"model-feature",title:"Supports structured JSON output",children:"📋"})]},`${T.provider}-${T.id}`)),N.length>50&&o.jsxs("div",{className:"model-autocomplete-more",children:["+",N.length-50," more..."]})]})]}):null;return o.jsxs("div",{className:"model-autocomplete",children:[o.jsx("input",{ref:A,type:"text",value:l,onChange:I,onFocus:()=>d(!0),onKeyDown:V,placeholder:s,className:"model-autocomplete-input"}),q&&jy.createPortal(q,document.body)]})}const E_=[{value:"gemini",label:"Gemini"},{value:"anthropic",label:"Anthropic"},{value:"openai",label:"OpenAI"},{value:"groq",label:"Groq"},{value:"together",label:"Together (via LiteLLM)"},{value:"litellm",label:"LiteLLM / Other"}];function z_(e,t){return e.startsWith("openai/")?"openai":e.startsWith("groq/")?"groq":e.startsWith("together_ai/")||e.startsWith("together/")?"together":e.startsWith("ollama/")?"litellm":e.startsWith("claude-")?"anthropic":e.startsWith("gemini-")?"gemini":e.includes("/")?"litellm":t||"gemini"}function bv({projectId:e,values:t,onChange:n,className:r=""}){const[i,s]=k.useState(!1),[a,l]=k.useState(null),c=async()=>{var u;if(!t.model_name||!t.provider){l({success:!1,message:"Please select a model first"});return}s(!0),l(null);try{const d=await nv(e,{provider:t.provider,model_name:t.model_name,api_base:t.api_base});d.success?l({success:!0,message:((u=d.response)==null?void 0:u.slice(0,100))||"Model responded successfully!"}):l({success:!1,message:d.error||"Test failed"})}catch(d){l({success:!1,message:d.message||"Connection failed"})}finally{s(!1)}};return o.jsxs("div",{className:`model-config-form ${r}`,children:[o.jsxs("div",{className:"model-config-row",children:[o.jsxs("div",{className:"model-config-field",style:{flex:1},children:[o.jsx("label",{children:"Provider"}),o.jsx("select",{value:t.provider||"gemini",onChange:u=>{n({provider:u.target.value}),l(null)},children:E_.map(u=>o.jsx("option",{value:u.value,children:u.label},u.value))})]}),o.jsxs("div",{className:"model-config-field",style:{flex:3},children:[o.jsx("label",{children:"Model"}),o.jsx(N_,{projectId:e,value:t.model_name||"",provider:t.provider,apiBase:t.api_base,onChange:(u,d)=>{const p=z_(u,d);n({model_name:u,provider:p}),l(null)},placeholder:"Search models..."})]}),o.jsxs("div",{className:"model-config-field",style:{flex:2},children:[o.jsx("label",{children:"API Base (optional)"}),o.jsx("input",{type:"text",value:t.api_base||"",onChange:u=>{n({api_base:u.target.value||void 0}),l(null)},placeholder:t.provider==="gemini"?"https://generativelanguage.googleapis.com":t.provider==="anthropic"?"https://api.anthropic.com":t.provider==="openai"?"https://api.openai.com/v1":t.provider==="groq"?"https://api.groq.com/openai/v1":t.provider==="together"?"https://api.together.xyz/v1":"http://localhost:11434"})]}),o.jsxs("div",{className:"model-config-field model-test-field",children:[o.jsx("label",{children:" "}),o.jsxs("button",{type:"button",className:`model-test-btn ${(a==null?void 0:a.success)===!0?"success":(a==null?void 0:a.success)===!1?"error":""}`,onClick:c,disabled:i||!t.model_name,title:(a==null?void 0:a.message)||"Test model connection",children:[i?o.jsx(hv,{size:14,className:"spinning"}):(a==null?void 0:a.success)===!0?o.jsx(pr,{size:14}):(a==null?void 0:a.success)===!1?o.jsx($r,{size:14}):o.jsx(Zd,{size:14}),i?"Testing...":"Test"]})]})]}),o.jsxs("div",{className:"model-config-row",children:[o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Temperature"}),o.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:t.temperature??"",onChange:u=>n({temperature:u.target.value?parseFloat(u.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Max Tokens"}),o.jsx("input",{type:"number",min:"1",value:t.max_output_tokens??"",onChange:u=>n({max_output_tokens:u.target.value?parseInt(u.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Top P"}),o.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:t.top_p??"",onChange:u=>n({top_p:u.target.value?parseFloat(u.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Top K"}),o.jsx("input",{type:"number",min:"1",value:t.top_k??"",onChange:u=>n({top_k:u.target.value?parseInt(u.target.value):void 0}),placeholder:"Default"})]})]})]})}const T_=[{key:"GOOGLE_API_KEY",description:"API key for Gemini models"},{key:"OPENAI_API_KEY",description:"API key for OpenAI models (via LiteLLM)"},{key:"GROQ_API_KEY",description:"API key for Groq models"},{key:"ANTHROPIC_API_KEY",description:"API key for Anthropic Claude models"},{key:"TOGETHER_API_KEY",description:"API key for Together (via LiteLLM, e.g. together_ai/* models)"},{key:"AZURE_API_KEY",description:"API key for Azure OpenAI Service"},{key:"AZURE_API_BASE",description:"Base URL for Azure OpenAI endpoint (e.g., https://your-resource.openai.azure.com)"},{key:"AZURE_API_VERSION",description:"API version for Azure OpenAI (e.g., 2024-02-15-preview)"},{key:"GOOGLE_GENAI_USE_VERTEXAI",description:'Set to "1" to use Vertex AI instead of API key'},{key:"GOOGLE_CLOUD_PROJECT",description:"Google Cloud project ID for Vertex AI"},{key:"GOOGLE_CLOUD_REGION",description:"Google Cloud region for Vertex AI (e.g., us-central1)"}];function A_(e){return/^[a-zA-Z0-9_]+$/.test(e)}function P_(){var K;const{project:e,updateProject:t}=ht(),[n,r]=k.useState(null);if(!e)return null;const{app:i}=e;function s(b){t({app:{...i,...b}})}function a(b){if(b===""){r(null),s({name:b});return}A_(b)?r(null):r("Name can only contain letters, numbers, and underscores"),s({name:b})}function l(){const b={name:`state_key_${i.state_keys.length+1}`,description:"",type:"string",scope:"session"};s({state_keys:[...i.state_keys,b]})}function c(b,z){const F=[...i.state_keys];F[b]={...F[b],...z},s({state_keys:F})}function u(b){s({state_keys:i.state_keys.filter((z,F)=>F!==b)})}function d(b="ReflectAndRetryToolPlugin"){let z;switch(b){case"ReflectAndRetryToolPlugin":z={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1};break;case"ContextFilterPlugin":z={type:"ContextFilterPlugin",name:"context_filter",num_invocations_to_keep:5};break;case"LoggingPlugin":z={type:"LoggingPlugin",name:"logging"};break;case"GlobalInstructionPlugin":z={type:"GlobalInstructionPlugin",name:"global_instruction",global_instruction:""};break;case"SaveFilesAsArtifactsPlugin":z={type:"SaveFilesAsArtifactsPlugin",name:"save_files"};break;case"MultimodalToolResultsPlugin":z={type:"MultimodalToolResultsPlugin",name:"multimodal_tools"};break;default:z={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1}}s({plugins:[...i.plugins,z]})}function p(b,z){const F=[...i.plugins];F[b]={...F[b],...z},s({plugins:F})}function f(b){s({plugins:i.plugins.filter((z,F)=>F!==b)})}const h=i.sandbox||{enabled:!1,allow_all_network:!1,allowlist:{auto:[],user:[]},unknown_action:"ask",approval_timeout:30,agent_memory_limit_mb:512,agent_cpu_limit:1,mcp_memory_limit_mb:256,mcp_cpu_limit:.5,run_timeout:300,volume_mounts:[]},g=((K=h.allowlist)==null?void 0:K.user)||[],v=h.volume_mounts||[];function _(b){s({sandbox:{...h,...b}})}async function m(b){const z=i.id;try{await fetch(`/api/sandbox/${z}/allowlist/sync`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({patterns:b.map(F=>({pattern:F.pattern,pattern_type:F.pattern_type})).filter(F=>F.pattern)})})}catch(F){console.debug("Could not sync allowlist to gateway:",F)}}function x(){const b={id:`pattern_${Date.now().toString(36)}`,pattern:"",pattern_type:"exact",source:"user",added_at:new Date().toISOString()},z={...h.allowlist,user:[...g,b]};_({allowlist:z})}function y(b,z){const F=[...g];F[b]={...F[b],...z};const U=F;_({allowlist:{...h.allowlist,user:U}}),z.pattern&&m(U)}function j(b){const z=g.filter((F,U)=>U!==b);_({allowlist:{...h.allowlist,user:z}})}function A(){const b={host_path:"",container_path:"/mnt/data",mode:"ro"};_({volume_mounts:[...v,b]})}function S(b,z){const F=[...v];F[b]={...F[b],...z},_({volume_mounts:F})}function P(b){const z=v.filter((F,U)=>U!==b);_({volume_mounts:z})}const N=i.models||[];function V(){const b=`model_${Date.now().toString(36)}`,z={id:b,name:"New Model",provider:"gemini",model_name:"gemini-2.0-flash",is_default:N.length===0};s({models:[...N,z],default_model_id:N.length===0?b:i.default_model_id})}function E(b,z){const F=N.map(U=>U.id===b?{...U,...z}:U);s({models:F})}function I(b){var U;const z=N.filter(ee=>ee.id!==b),F=i.default_model_id===b?((U=z[0])==null?void 0:U.id)||void 0:i.default_model_id;s({models:z,default_model_id:F})}function R(b){s({default_model_id:b})}const q=i.env_vars||{},[T,O]=k.useState({}),[D,C]=k.useState("");function L(b=""){const z=b||D.trim();!z||q[z]!==void 0||(s({env_vars:{...q,[z]:""}}),C(""))}function M(b,z){s({env_vars:{...q,[b]:z}})}function w(b){const z={...q};delete z[b],s({env_vars:z})}function H(b){O(z=>({...z,[b]:!z[b]}))}return o.jsxs("div",{className:"app-config",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("section",{className:"section",children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(k_,{size:20}),"Basic Information"]})}),o.jsxs("div",{className:"form-grid",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"App Name"}),o.jsx("input",{type:"text",value:i.name,onChange:b=>a(b.target.value),style:{borderColor:n?"var(--error)":void 0}}),n&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:4},children:n})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Root Agent"}),o.jsxs("select",{value:i.root_agent_id||"",onChange:b=>s({root_agent_id:b.target.value||void 0}),children:[o.jsx("option",{value:"",children:"Select an agent..."}),e.agents.map(b=>o.jsx("option",{value:b.id,children:b.name},b.id))]})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(In,{size:20}),"Services"]}),o.jsx("span",{className:"section-hint",children:"Configure session, memory, and artifact storage backends"})]}),o.jsxs("div",{className:"form-grid",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Session Service"}),o.jsxs("select",{value:i.session_service_uri.split("://")[0],onChange:b=>{const z=b.target.value;s({session_service_uri:{memory:"memory://",file:"file://~/.adk-playground/sessions",sqlite:"sqlite://~/.adk-playground/sessions.db",postgresql:"postgresql://user:pass@localhost:5432/adk_sessions",mysql:"mysql://user:pass@localhost:3306/adk_sessions",agentengine:"agentengine://project/us-central1/engine-id"}[z]||z+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),o.jsx("option",{value:"file",children:"File System (JSON)"}),o.jsx("option",{value:"sqlite",children:"SQLite (local)"}),o.jsx("option",{value:"postgresql",children:"PostgreSQL"}),o.jsx("option",{value:"mysql",children:"MySQL"}),o.jsx("option",{value:"agentengine",children:"Vertex AI Agent Engine"})]}),i.session_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.session_service_uri.replace("file://",""),onChange:b=>s({session_service_uri:"file://"+b.target.value}),placeholder:"~/.adk-playground/sessions",style:{marginTop:8}}),i.session_service_uri.startsWith("sqlite://")&&o.jsx("input",{type:"text",value:i.session_service_uri.replace("sqlite://",""),onChange:b=>s({session_service_uri:"sqlite://"+b.target.value}),placeholder:"~/.adk-playground/sessions.db",style:{marginTop:8}}),(i.session_service_uri.startsWith("postgresql://")||i.session_service_uri.startsWith("mysql://"))&&o.jsx("input",{type:"text",value:i.session_service_uri,onChange:b=>s({session_service_uri:b.target.value}),placeholder:"postgresql://user:pass@localhost:5432/db",style:{marginTop:8}}),i.session_service_uri.startsWith("agentengine://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[2]||"",onChange:b=>{const z=i.session_service_uri.split("/");z[2]=b.target.value,s({session_service_uri:z.join("/")})},placeholder:"project-id"}),o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[3]||"",onChange:b=>{const z=i.session_service_uri.split("/");z[3]=b.target.value,s({session_service_uri:z.join("/")})},placeholder:"location (e.g., us-central1)"}),o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[4]||"",onChange:b=>{const z=i.session_service_uri.split("/");z[4]=b.target.value,s({session_service_uri:z.join("/")})},placeholder:"agent-engine-id"})]}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.session_service_uri.startsWith("memory://")&&"Sessions stored in memory, lost on restart",i.session_service_uri.startsWith("file://")&&"Sessions stored as JSON files, preserves UI events",i.session_service_uri.startsWith("sqlite://")&&"Persists to local SQLite file",i.session_service_uri.startsWith("postgresql://")&&"Production-ready PostgreSQL backend",i.session_service_uri.startsWith("mysql://")&&"Production-ready MySQL backend",i.session_service_uri.startsWith("agentengine://")&&"Vertex AI Agent Engine managed sessions"]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Memory Service"}),o.jsxs("select",{value:i.memory_service_uri.split("://")[0],onChange:b=>{const z=b.target.value;s({memory_service_uri:{memory:"memory://",file:"file://~/.adk-playground/memory",rag:"rag://rag-corpus-id",agentengine:"agentengine://project/us-central1/engine-id"}[z]||z+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (keyword matching)"}),o.jsx("option",{value:"file",children:"File System (keyword matching)"}),o.jsx("option",{value:"rag",children:"Vertex AI RAG"}),o.jsx("option",{value:"agentengine",children:"Vertex AI Memory Bank"})]}),i.memory_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.memory_service_uri.replace("file://",""),onChange:b=>s({memory_service_uri:"file://"+b.target.value}),placeholder:"~/.adk-playground/memory",style:{marginTop:8}}),i.memory_service_uri.startsWith("rag://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.memory_service_uri.replace("rag://",""),onChange:b=>s({memory_service_uri:"rag://"+b.target.value}),placeholder:"rag-corpus-id or full resource path"}),o.jsx("span",{className:"help-text",style:{fontSize:11,color:"var(--text-dim)"},children:"Format: projects/PROJECT/locations/LOCATION/ragCorpora/CORPUS_ID"})]}),i.memory_service_uri.startsWith("agentengine://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[2]||"",onChange:b=>{const z=i.memory_service_uri.split("/");z[2]=b.target.value,s({memory_service_uri:z.join("/")})},placeholder:"project-id"}),o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[3]||"",onChange:b=>{const z=i.memory_service_uri.split("/");z[3]=b.target.value,s({memory_service_uri:z.join("/")})},placeholder:"location (e.g., us-central1)"}),o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[4]||"",onChange:b=>{const z=i.memory_service_uri.split("/");z[4]=b.target.value,s({memory_service_uri:z.join("/")})},placeholder:"agent-engine-id"})]}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.memory_service_uri.startsWith("memory://")&&"Simple keyword matching, good for prototyping",i.memory_service_uri.startsWith("file://")&&"Persists memories as JSON files",i.memory_service_uri.startsWith("rag://")&&"Semantic search using Vertex AI RAG corpus",i.memory_service_uri.startsWith("agentengine://")&&"Managed memory via Agent Engine Memory Bank"]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Artifact Service"}),o.jsxs("select",{value:i.artifact_service_uri.split("://")[0]==="gs"?"gs":i.artifact_service_uri.split("://")[0],onChange:b=>{const z=b.target.value;s({artifact_service_uri:{memory:"memory://",file:"file://~/.adk-playground/artifacts",gs:"gs://your-bucket-name"}[z]||z+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),o.jsx("option",{value:"file",children:"File System"}),o.jsx("option",{value:"gs",children:"Google Cloud Storage"})]}),i.artifact_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.artifact_service_uri.replace("file://",""),onChange:b=>s({artifact_service_uri:"file://"+b.target.value}),placeholder:"~/.adk-playground/artifacts",style:{marginTop:8}}),i.artifact_service_uri.startsWith("gs://")&&o.jsx("input",{type:"text",value:i.artifact_service_uri.replace("gs://",""),onChange:b=>s({artifact_service_uri:"gs://"+b.target.value}),placeholder:"bucket-name/optional-prefix",style:{marginTop:8}}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.artifact_service_uri.startsWith("memory://")&&"Artifacts stored in memory, lost on restart",i.artifact_service_uri.startsWith("file://")&&"Persists to local filesystem",i.artifact_service_uri.startsWith("gs://")&&"Production-ready Google Cloud Storage backend"]})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(ju,{size:20}),"Environment Variables"]})}),o.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginBottom:16},children:"Set API keys and other environment variables. These are passed to the agent runtime."}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16},children:T_.filter(b=>q[b.key]===void 0).map(b=>o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>L(b.key),title:b.description,children:[o.jsx(Xe,{size:12}),b.key]},b.key))}),Object.keys(q).length===0?o.jsx("p",{className:"empty-message",children:"No environment variables set. Click a button above to add common variables, or add a custom one below."}):Object.entries(q).map(([b,z])=>o.jsxs("div",{className:"list-item",style:{alignItems:"center"},children:[o.jsxs("div",{style:{flex:1,display:"flex",gap:12,alignItems:"center"},children:[o.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:13,minWidth:200},children:b}),o.jsxs("div",{style:{flex:1,display:"flex",gap:8,alignItems:"center"},children:[o.jsx("input",{type:T[b]?"text":"password",value:z,onChange:F=>M(b,F.target.value),placeholder:"Enter value...",style:{flex:1}}),o.jsx("button",{className:"delete-item",onClick:()=>H(b),title:T[b]?"Hide value":"Show value",children:T[b]?o.jsx(u_,{size:16}):o.jsx(Or,{size:16})})]})]}),o.jsx("button",{className:"delete-item",onClick:()=>w(b),children:o.jsx(Ue,{size:16})})]},b)),o.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[o.jsx("input",{type:"text",value:D,onChange:b=>C(b.target.value.toUpperCase().replace(/[^A-Z0-9_]/g,"")),placeholder:"CUSTOM_VAR_NAME",style:{flex:1,fontFamily:"var(--font-mono)"},onKeyDown:b=>b.key==="Enter"&&L()}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>L(),disabled:!D.trim(),children:[o.jsx(Xe,{size:14}),"Add Variable"]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(Jd,{size:20}),"Models"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:V,children:[o.jsx(Xe,{size:14}),"Add Model"]})]}),N.length===0?o.jsx("p",{className:"empty-message",children:"No models configured. Add models that agents can use."}):N.map(b=>o.jsxs("div",{className:"model-card",children:[o.jsxs("div",{className:"model-card-header",children:[o.jsx("input",{type:"text",value:b.name,onChange:z=>E(b.id,{name:z.target.value}),placeholder:"Model name",className:"model-name-input"}),o.jsx("button",{className:`default-model-btn ${i.default_model_id===b.id?"is-default":""}`,onClick:()=>R(b.id),title:i.default_model_id===b.id?"Default model":"Set as default",children:o.jsx(yv,{size:14,fill:i.default_model_id===b.id?"currentColor":"none"})}),o.jsx("button",{className:"delete-item",onClick:()=>I(b.id),children:o.jsx(Ue,{size:16})})]}),o.jsx("div",{className:"model-card-body",children:o.jsx(bv,{projectId:e.id,values:b,onChange:z=>E(b.id,z)})})]},b.id))]}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20},children:[o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(Gd,{size:20}),"State Keys"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:l,children:[o.jsx(Xe,{size:14}),"Add"]})]}),i.state_keys.length===0?o.jsx("p",{className:"empty-message",children:"No state keys. Auto-created when you add LlmAgents."}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:i.state_keys.map((b,z)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"6px 8px",background:"var(--bg-secondary)",borderRadius:4},children:[o.jsx("input",{type:"text",value:b.name,onChange:F=>c(z,{name:F.target.value}),placeholder:"Key name",style:{flex:1,minWidth:0,padding:"4px 8px",fontSize:12}}),o.jsxs("select",{value:b.type,onChange:F=>c(z,{type:F.target.value}),style:{width:60,flexShrink:0,padding:"4px 6px",fontSize:11},children:[o.jsx("option",{value:"string",children:"str"}),o.jsx("option",{value:"number",children:"num"}),o.jsx("option",{value:"boolean",children:"bool"}),o.jsx("option",{value:"object",children:"obj"}),o.jsx("option",{value:"array",children:"arr"})]}),o.jsx("button",{className:"delete-item",onClick:()=>u(z),style:{padding:4,flexShrink:0},children:o.jsx(Ue,{size:12})})]},z))})]}),o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(Zd,{size:20}),"Advanced Options"]})}),o.jsxs("div",{className:"toggle-group",children:[o.jsx("div",{className:`toggle ${i.compaction.enabled?"active":""}`,onClick:()=>s({compaction:{...i.compaction,enabled:!i.compaction.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Event Compaction"}),o.jsx("span",{children:"Summarize old events"})]}),i.compaction.enabled&&o.jsx("input",{type:"number",value:i.compaction.max_events,onChange:b=>s({compaction:{...i.compaction,max_events:parseInt(b.target.value)||100}}),style:{width:60,padding:"4px 6px",fontSize:12},placeholder:"Max"})]}),o.jsxs("div",{className:"toggle-group",style:{marginTop:10},children:[o.jsx("div",{className:`toggle ${i.context_cache.enabled?"active":""}`,onClick:()=>s({context_cache:{...i.context_cache,enabled:!i.context_cache.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Context Caching"}),o.jsx("span",{children:"Cache static instructions"})]}),i.context_cache.enabled&&o.jsx("input",{type:"number",value:i.context_cache.ttl_seconds,onChange:b=>s({context_cache:{...i.context_cache,ttl_seconds:parseInt(b.target.value)||3600}}),style:{width:70,padding:"4px 6px",fontSize:12},placeholder:"TTL"})]}),o.jsxs("div",{className:"toggle-group",style:{marginTop:10},children:[o.jsx("div",{className:`toggle ${i.resumability.enabled?"active":""}`,onClick:()=>s({resumability:{...i.resumability,enabled:!i.resumability.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Resumability"}),o.jsx("span",{children:"Pause/resume execution"})]})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(Xt,{size:20}),"Plugins"]}),o.jsx("div",{className:"plugin-add-dropdown",children:o.jsxs("select",{className:"btn btn-secondary btn-sm",value:"",onChange:b=>{b.target.value&&(d(b.target.value),b.target.value="")},style:{paddingRight:8},children:[o.jsx("option",{value:"",children:"+ Add Plugin..."}),o.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),o.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),o.jsx("option",{value:"LoggingPlugin",children:"Logging"}),o.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),o.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),o.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]})})]}),i.plugins.length===0?o.jsx("p",{className:"empty-message",children:"No plugins configured. Add plugins to extend agent functionality."}):i.plugins.map((b,z)=>o.jsxs("div",{className:"list-item",style:{flexDirection:"column",gap:12},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",gap:12},children:[o.jsxs("select",{value:b.type,onChange:F=>p(z,{type:F.target.value}),style:{flex:1},children:[o.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),o.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),o.jsx("option",{value:"LoggingPlugin",children:"Logging"}),o.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),o.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),o.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]}),o.jsx("button",{className:"delete-item",onClick:()=>f(z),children:o.jsx(Ue,{size:16})})]}),b.type==="ReflectAndRetryToolPlugin"&&o.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",style:{flex:0},children:[o.jsx("label",{style:{fontSize:12},children:"Max Retries"}),o.jsx("input",{type:"number",min:"0",max:"10",value:b.max_retries??3,onChange:F=>p(z,{max_retries:parseInt(F.target.value)||0}),style:{width:70}})]}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:b.throw_exception_if_retry_exceeded??!1,onChange:F=>p(z,{throw_exception_if_retry_exceeded:F.target.checked})}),o.jsx("span",{className:"toggle-slider"})]}),"Throw exception if retry exceeded"]})]}),b.type==="ContextFilterPlugin"&&o.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",style:{flex:0},children:[o.jsx("label",{style:{fontSize:12},children:"Invocations to Keep"}),o.jsx("input",{type:"number",min:"1",max:"100",value:b.num_invocations_to_keep??5,onChange:F=>p(z,{num_invocations_to_keep:parseInt(F.target.value)||1}),style:{width:70}})]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Keeps only the last N conversation turns to reduce context size"})]}),b.type==="LoggingPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Logs all agent events (messages, tool calls, responses) to the console"})}),b.type==="GlobalInstructionPlugin"&&o.jsxs("div",{style:{width:"100%",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{style:{fontSize:12},children:"Global Instruction"}),o.jsx("textarea",{value:b.global_instruction??"",onChange:F=>p(z,{global_instruction:F.target.value}),placeholder:"Instructions that apply to all agents in the app...",rows:3,style:{width:"100%"}})]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"This instruction is prepended to every agent's system prompt"})]}),b.type==="SaveFilesAsArtifactsPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Automatically saves files uploaded in user messages as artifacts for later retrieval"})}),b.type==="MultimodalToolResultsPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Allows tools to return multimodal content (images, files) directly to the LLM"})})]},z))]}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20},children:[o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(xv,{size:20}),"Network Allowlist"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:x,children:[o.jsx(Xe,{size:14}),"Add"]})]}),o.jsxs("div",{className:"toggle-group",style:{marginBottom:10},children:[o.jsx("div",{className:`toggle ${h.allow_all_network?"active":""}`,onClick:()=>_({allow_all_network:!h.allow_all_network,unknown_action:h.allow_all_network?h.unknown_action:"allow"})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Allow all network connections"}),o.jsx("span",{children:"Disables approval/deny; still routes through the sandbox proxy"})]})]}),g.length===0?o.jsx("p",{className:"empty-message",style:{fontSize:11},children:"No custom patterns. LLM APIs allowed by default."}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:g.map((b,z)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"6px 8px",background:"var(--bg-secondary)",borderRadius:4},children:[o.jsx(Kd,{size:14,style:{color:"var(--text-muted)",flexShrink:0}}),o.jsx("input",{type:"text",value:b.pattern,onChange:F=>y(z,{pattern:F.target.value}),placeholder:"*.example.com",style:{flex:1,padding:"4px 6px",fontSize:11}}),o.jsxs("select",{value:b.pattern_type,onChange:F=>y(z,{pattern_type:F.target.value}),style:{padding:"4px",fontSize:10,width:70},children:[o.jsx("option",{value:"exact",children:"exact"}),o.jsx("option",{value:"wildcard",children:"wild"}),o.jsx("option",{value:"regex",children:"regex"})]}),o.jsx("button",{className:"delete-item",onClick:()=>j(z),style:{padding:4},children:o.jsx(Ue,{size:12})})]},b.id||z))})]}),o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(m_,{size:20}),"Volume Mounts"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:A,children:[o.jsx(Xe,{size:14}),"Add"]})]}),v.length===0?o.jsx("p",{className:"empty-message",style:{fontSize:11},children:"No mounts. Add to give sandbox file access."}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:v.map((b,z)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"6px 8px",background:"var(--bg-secondary)",borderRadius:4},children:[o.jsx(dv,{size:14,style:{color:"var(--text-muted)",flexShrink:0}}),o.jsx("input",{type:"text",value:b.host_path,onChange:F=>S(z,{host_path:F.target.value}),placeholder:"~/path",style:{flex:1,padding:"4px 6px",fontSize:11},title:"Host path"}),o.jsx("span",{style:{color:"var(--text-muted)",fontSize:10},children:"→"}),o.jsx("input",{type:"text",value:b.container_path,onChange:F=>S(z,{container_path:F.target.value}),placeholder:"/mnt",style:{width:70,padding:"4px 6px",fontSize:11},title:"Container path"}),o.jsxs("select",{value:b.mode,onChange:F=>S(z,{mode:F.target.value}),style:{padding:"4px",fontSize:10,width:50},children:[o.jsx("option",{value:"ro",children:"ro"}),o.jsx("option",{value:"rw",children:"rw"})]}),o.jsx("button",{className:"delete-item",onClick:()=>P(z),style:{padding:4},children:o.jsx(Ue,{size:12})})]},z))})]})]})]})}const M_="modulepreload",L_=function(e){return"/"+e},Ph={},R_=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=L_(c),c in Ph)return;Ph[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":M_,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((f,h)=>{p.addEventListener("load",f),p.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})};function Mh(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function I_(e){if(Array.isArray(e))return e}function O_(e,t,n){return(t=W_(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $_(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,s,a,l=[],c=!0,u=!1;try{if(s=(n=n.call(e)).next,t!==0)for(;!(c=(r=s.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(d){u=!0,i=d}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function D_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Rh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Lh(Object(n),!0).forEach(function(r){O_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function F_(e,t){if(e==null)return{};var n,r,i=B_(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function B_(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function U_(e,t){return I_(e)||$_(e,t)||H_(e,t)||D_()}function V_(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function W_(e){var t=V_(e,"string");return typeof t=="symbol"?t:t+""}function H_(e,t){if(e){if(typeof e=="string")return Mh(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Mh(e,t):void 0}}function q_(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ih(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Oh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ih(Object(n),!0).forEach(function(r){q_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ih(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function J_(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,s){return s(i)},r)}}function ro(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function Ra(e){return{}.toString.call(e).includes("Object")}function K_(e){return!Object.keys(e).length}function Bo(e){return typeof e=="function"}function G_(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Y_(e,t){return Ra(t)||cr("changeType"),Object.keys(t).some(function(n){return!G_(e,n)})&&cr("changeField"),t}function Q_(e){Bo(e)||cr("selectorType")}function X_(e){Bo(e)||Ra(e)||cr("handlerType"),Ra(e)&&Object.values(e).some(function(t){return!Bo(t)})&&cr("handlersType")}function Z_(e){e||cr("initialIsRequired"),Ra(e)||cr("initialType"),K_(e)&&cr("initialContent")}function ej(e,t){throw new Error(e[t]||e.default)}var tj={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},cr=ro(ej)(tj),Ts={changes:Y_,selector:Q_,handler:X_,initial:Z_};function nj(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ts.initial(e),Ts.handler(t);var n={current:e},r=ro(oj)(n,t),i=ro(ij)(n),s=ro(Ts.changes)(e),a=ro(rj)(n);function l(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return Ts.selector(u),u(n.current)}function c(u){J_(r,i,s,a)(u)}return[l,c]}function rj(e,t){return Bo(t)?t(e.current):t}function ij(e,t){return e.current=Oh(Oh({},e.current),t),t}function oj(e,t,n){return Bo(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var sj={create:nj},aj={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function lj(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function cj(e){return{}.toString.call(e).includes("Object")}function uj(e){return e||$h("configIsRequired"),cj(e)||$h("configType"),e.urls?(dj(),{paths:{vs:e.urls.monacoBase}}):e}function dj(){console.warn(wv.deprecation)}function pj(e,t){throw new Error(e[t]||e.default)}var wv={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},$h=lj(pj)(wv),fj={config:uj},hj=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(s,a){return a(s)},i)}};function kv(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],kv(e[n],t[n]))}),Rh(Rh({},e),t)}var mj={type:"cancelation",msg:"operation is manually canceled"};function tc(e){var t=!1,n=new Promise(function(r,i){e.then(function(s){return t?i(mj):r(s)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var gj=["monaco"],xj=sj.create({config:aj,isInitialized:!1,resolve:null,reject:null,monaco:null}),_v=U_(xj,2),rs=_v[0],pl=_v[1];function yj(e){var t=fj.config(e),n=t.monaco,r=F_(t,gj);pl(function(i){return{config:kv(i.config,r),monaco:n}})}function vj(){var e=rs(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(pl({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),tc(nc);if(window.monaco&&window.monaco.editor)return jv(window.monaco),e.resolve(window.monaco),tc(nc);hj(bj,kj)(_j)}return tc(nc)}function bj(e){return document.body.appendChild(e)}function wj(e){var t=document.createElement("script");return e&&(t.src=e),t}function kj(e){var t=rs(function(r){var i=r.config,s=r.reject;return{config:i,reject:s}}),n=wj("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function _j(){var e=rs(function(n){var r=n.config,i=n.resolve,s=n.reject;return{config:r,resolve:i,reject:s}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;jv(r),e.resolve(r)},function(n){e.reject(n)})}function jv(e){rs().monaco||pl({monaco:e})}function jj(){return rs(function(e){var t=e.monaco;return t})}var nc=new Promise(function(e,t){return pl({resolve:e,reject:t})}),Sv={config:yj,init:vj,__getMonacoInstance:jj},Sj={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},rc=Sj,Cj={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Nj=Cj;function Ej({children:e}){return Bt.createElement("div",{style:Nj.container},e)}var zj=Ej,Tj=zj;function Aj({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:s,wrapperProps:a}){return Bt.createElement("section",{style:{...rc.wrapper,width:e,height:t},...a},!n&&Bt.createElement(Tj,null,r),Bt.createElement("div",{ref:i,style:{...rc.fullWidth,...!n&&rc.hide},className:s}))}var Pj=Aj,Cv=k.memo(Pj);function Mj(e){k.useEffect(e,[])}var Nv=Mj;function Lj(e,t,n=!0){let r=k.useRef(!0);k.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var Ot=Lj;function go(){}function oi(e,t,n,r){return Rj(e,r)||Ij(e,t,n,r)}function Rj(e,t){return e.editor.getModel(Ev(e,t))}function Ij(e,t,n,r){return e.editor.createModel(t,n,r?Ev(e,r):void 0)}function Ev(e,t){return e.Uri.parse(t)}function Oj({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:s,modifiedModelPath:a,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:c=!1,theme:u="light",loading:d="Loading...",options:p={},height:f="100%",width:h="100%",className:g,wrapperProps:v={},beforeMount:_=go,onMount:m=go}){let[x,y]=k.useState(!1),[j,A]=k.useState(!0),S=k.useRef(null),P=k.useRef(null),N=k.useRef(null),V=k.useRef(m),E=k.useRef(_),I=k.useRef(!1);Nv(()=>{let O=Sv.init();return O.then(D=>(P.current=D)&&A(!1)).catch(D=>(D==null?void 0:D.type)!=="cancelation"&&console.error("Monaco initialization: error:",D)),()=>S.current?T():O.cancel()}),Ot(()=>{if(S.current&&P.current){let O=S.current.getOriginalEditor(),D=oi(P.current,e||"",r||n||"text",s||"");D!==O.getModel()&&O.setModel(D)}},[s],x),Ot(()=>{if(S.current&&P.current){let O=S.current.getModifiedEditor(),D=oi(P.current,t||"",i||n||"text",a||"");D!==O.getModel()&&O.setModel(D)}},[a],x),Ot(()=>{let O=S.current.getModifiedEditor();O.getOption(P.current.editor.EditorOption.readOnly)?O.setValue(t||""):t!==O.getValue()&&(O.executeEdits("",[{range:O.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),O.pushUndoStop())},[t],x),Ot(()=>{var O,D;(D=(O=S.current)==null?void 0:O.getModel())==null||D.original.setValue(e||"")},[e],x),Ot(()=>{let{original:O,modified:D}=S.current.getModel();P.current.editor.setModelLanguage(O,r||n||"text"),P.current.editor.setModelLanguage(D,i||n||"text")},[n,r,i],x),Ot(()=>{var O;(O=P.current)==null||O.editor.setTheme(u)},[u],x),Ot(()=>{var O;(O=S.current)==null||O.updateOptions(p)},[p],x);let R=k.useCallback(()=>{var C;if(!P.current)return;E.current(P.current);let O=oi(P.current,e||"",r||n||"text",s||""),D=oi(P.current,t||"",i||n||"text",a||"");(C=S.current)==null||C.setModel({original:O,modified:D})},[n,t,i,e,r,s,a]),q=k.useCallback(()=>{var O;!I.current&&N.current&&(S.current=P.current.editor.createDiffEditor(N.current,{automaticLayout:!0,...p}),R(),(O=P.current)==null||O.editor.setTheme(u),y(!0),I.current=!0)},[p,u,R]);k.useEffect(()=>{x&&V.current(S.current,P.current)},[x]),k.useEffect(()=>{!j&&!x&&q()},[j,x,q]);function T(){var D,C,L,M;let O=(D=S.current)==null?void 0:D.getModel();l||((C=O==null?void 0:O.original)==null||C.dispose()),c||((L=O==null?void 0:O.modified)==null||L.dispose()),(M=S.current)==null||M.dispose()}return Bt.createElement(Cv,{width:h,height:f,isEditorReady:x,loading:d,_ref:N,className:g,wrapperProps:v})}var $j=Oj;k.memo($j);function Dj(e){let t=k.useRef();return k.useEffect(()=>{t.current=e},[e]),t.current}var Fj=Dj,As=new Map;function Bj({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:s,theme:a="light",line:l,loading:c="Loading...",options:u={},overrideServices:d={},saveViewState:p=!0,keepCurrentModel:f=!1,width:h="100%",height:g="100%",className:v,wrapperProps:_={},beforeMount:m=go,onMount:x=go,onChange:y,onValidate:j=go}){let[A,S]=k.useState(!1),[P,N]=k.useState(!0),V=k.useRef(null),E=k.useRef(null),I=k.useRef(null),R=k.useRef(x),q=k.useRef(m),T=k.useRef(),O=k.useRef(r),D=Fj(s),C=k.useRef(!1),L=k.useRef(!1);Nv(()=>{let H=Sv.init();return H.then(K=>(V.current=K)&&N(!1)).catch(K=>(K==null?void 0:K.type)!=="cancelation"&&console.error("Monaco initialization: error:",K)),()=>E.current?w():H.cancel()}),Ot(()=>{var K,b,z,F;let H=oi(V.current,e||r||"",t||i||"",s||n||"");H!==((K=E.current)==null?void 0:K.getModel())&&(p&&As.set(D,(b=E.current)==null?void 0:b.saveViewState()),(z=E.current)==null||z.setModel(H),p&&((F=E.current)==null||F.restoreViewState(As.get(s))))},[s],A),Ot(()=>{var H;(H=E.current)==null||H.updateOptions(u)},[u],A),Ot(()=>{!E.current||r===void 0||(E.current.getOption(V.current.editor.EditorOption.readOnly)?E.current.setValue(r):r!==E.current.getValue()&&(L.current=!0,E.current.executeEdits("",[{range:E.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),E.current.pushUndoStop(),L.current=!1))},[r],A),Ot(()=>{var K,b;let H=(K=E.current)==null?void 0:K.getModel();H&&i&&((b=V.current)==null||b.editor.setModelLanguage(H,i))},[i],A),Ot(()=>{var H;l!==void 0&&((H=E.current)==null||H.revealLine(l))},[l],A),Ot(()=>{var H;(H=V.current)==null||H.editor.setTheme(a)},[a],A);let M=k.useCallback(()=>{var H;if(!(!I.current||!V.current)&&!C.current){q.current(V.current);let K=s||n,b=oi(V.current,r||e||"",t||i||"",K||"");E.current=(H=V.current)==null?void 0:H.editor.create(I.current,{model:b,automaticLayout:!0,...u},d),p&&E.current.restoreViewState(As.get(K)),V.current.editor.setTheme(a),l!==void 0&&E.current.revealLine(l),S(!0),C.current=!0}},[e,t,n,r,i,s,u,d,p,a,l]);k.useEffect(()=>{A&&R.current(E.current,V.current)},[A]),k.useEffect(()=>{!P&&!A&&M()},[P,A,M]),O.current=r,k.useEffect(()=>{var H,K;A&&y&&((H=T.current)==null||H.dispose(),T.current=(K=E.current)==null?void 0:K.onDidChangeModelContent(b=>{L.current||y(E.current.getValue(),b)}))},[A,y]),k.useEffect(()=>{if(A){let H=V.current.editor.onDidChangeMarkers(K=>{var z;let b=(z=E.current.getModel())==null?void 0:z.uri;if(b&&K.find(F=>F.path===b.path)){let F=V.current.editor.getModelMarkers({resource:b});j==null||j(F)}});return()=>{H==null||H.dispose()}}return()=>{}},[A,j]);function w(){var H,K;(H=T.current)==null||H.dispose(),f?p&&As.set(s,E.current.saveViewState()):(K=E.current.getModel())==null||K.dispose(),E.current.dispose()}return Bt.createElement(Cv,{width:h,height:g,isEditorReady:A,loading:c,_ref:I,className:v,wrapperProps:_})}var Uj=Bj,Vj=k.memo(Uj),Zt=Vj;function Wj(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const Hj=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,qj=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Jj={};function Dh(e,t){return(Jj.jsx?qj:Hj).test(e)}const Kj=/[ \t\n\f\r]/g;function Gj(e){return typeof e=="object"?e.type==="text"?Fh(e.value):!1:Fh(e)}function Fh(e){return e.replace(Kj,"")===""}class is{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}is.prototype.normal={};is.prototype.property={};is.prototype.space=void 0;function zv(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new is(n,r,t)}function Cu(e){return e.toLowerCase()}class At{constructor(t,n){this.attribute=n,this.property=t}}At.prototype.attribute="";At.prototype.booleanish=!1;At.prototype.boolean=!1;At.prototype.commaOrSpaceSeparated=!1;At.prototype.commaSeparated=!1;At.prototype.defined=!1;At.prototype.mustUseProperty=!1;At.prototype.number=!1;At.prototype.overloadedBoolean=!1;At.prototype.property="";At.prototype.spaceSeparated=!1;At.prototype.space=void 0;let Yj=0;const Se=Vr(),Qe=Vr(),Nu=Vr(),se=Vr(),Ie=Vr(),pi=Vr(),Lt=Vr();function Vr(){return 2**++Yj}const Eu=Object.freeze(Object.defineProperty({__proto__:null,boolean:Se,booleanish:Qe,commaOrSpaceSeparated:Lt,commaSeparated:pi,number:se,overloadedBoolean:Nu,spaceSeparated:Ie},Symbol.toStringTag,{value:"Module"})),ic=Object.keys(Eu);class ep extends At{constructor(t,n,r,i){let s=-1;if(super(t,n),Bh(this,"space",i),typeof r=="number")for(;++s<ic.length;){const a=ic[s];Bh(this,ic[s],(r&Eu[a])===Eu[a])}}}ep.prototype.defined=!0;function Bh(e,t,n){n&&(e[t]=n)}function Pi(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const s=new ep(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(s.mustUseProperty=!0),t[r]=s,n[Cu(r)]=r,n[Cu(s.attribute)]=r}return new is(t,n,e.space)}const Tv=Pi({properties:{ariaActiveDescendant:null,ariaAtomic:Qe,ariaAutoComplete:null,ariaBusy:Qe,ariaChecked:Qe,ariaColCount:se,ariaColIndex:se,ariaColSpan:se,ariaControls:Ie,ariaCurrent:null,ariaDescribedBy:Ie,ariaDetails:null,ariaDisabled:Qe,ariaDropEffect:Ie,ariaErrorMessage:null,ariaExpanded:Qe,ariaFlowTo:Ie,ariaGrabbed:Qe,ariaHasPopup:null,ariaHidden:Qe,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ie,ariaLevel:se,ariaLive:null,ariaModal:Qe,ariaMultiLine:Qe,ariaMultiSelectable:Qe,ariaOrientation:null,ariaOwns:Ie,ariaPlaceholder:null,ariaPosInSet:se,ariaPressed:Qe,ariaReadOnly:Qe,ariaRelevant:null,ariaRequired:Qe,ariaRoleDescription:Ie,ariaRowCount:se,ariaRowIndex:se,ariaRowSpan:se,ariaSelected:Qe,ariaSetSize:se,ariaSort:null,ariaValueMax:se,ariaValueMin:se,ariaValueNow:se,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function Av(e,t){return t in e?e[t]:t}function Pv(e,t){return Av(e,t.toLowerCase())}const Qj=Pi({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:pi,acceptCharset:Ie,accessKey:Ie,action:null,allow:null,allowFullScreen:Se,allowPaymentRequest:Se,allowUserMedia:Se,alt:null,as:null,async:Se,autoCapitalize:null,autoComplete:Ie,autoFocus:Se,autoPlay:Se,blocking:Ie,capture:null,charSet:null,checked:Se,cite:null,className:Ie,cols:se,colSpan:null,content:null,contentEditable:Qe,controls:Se,controlsList:Ie,coords:se|pi,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Se,defer:Se,dir:null,dirName:null,disabled:Se,download:Nu,draggable:Qe,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Se,formTarget:null,headers:Ie,height:se,hidden:Nu,high:se,href:null,hrefLang:null,htmlFor:Ie,httpEquiv:Ie,id:null,imageSizes:null,imageSrcSet:null,inert:Se,inputMode:null,integrity:null,is:null,isMap:Se,itemId:null,itemProp:Ie,itemRef:Ie,itemScope:Se,itemType:Ie,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Se,low:se,manifest:null,max:null,maxLength:se,media:null,method:null,min:null,minLength:se,multiple:Se,muted:Se,name:null,nonce:null,noModule:Se,noValidate:Se,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Se,optimum:se,pattern:null,ping:Ie,placeholder:null,playsInline:Se,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Se,referrerPolicy:null,rel:Ie,required:Se,reversed:Se,rows:se,rowSpan:se,sandbox:Ie,scope:null,scoped:Se,seamless:Se,selected:Se,shadowRootClonable:Se,shadowRootDelegatesFocus:Se,shadowRootMode:null,shape:null,size:se,sizes:null,slot:null,span:se,spellCheck:Qe,src:null,srcDoc:null,srcLang:null,srcSet:null,start:se,step:null,style:null,tabIndex:se,target:null,title:null,translate:null,type:null,typeMustMatch:Se,useMap:null,value:Qe,width:se,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Ie,axis:null,background:null,bgColor:null,border:se,borderColor:null,bottomMargin:se,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Se,declare:Se,event:null,face:null,frame:null,frameBorder:null,hSpace:se,leftMargin:se,link:null,longDesc:null,lowSrc:null,marginHeight:se,marginWidth:se,noResize:Se,noHref:Se,noShade:Se,noWrap:Se,object:null,profile:null,prompt:null,rev:null,rightMargin:se,rules:null,scheme:null,scrolling:Qe,standby:null,summary:null,text:null,topMargin:se,valueType:null,version:null,vAlign:null,vLink:null,vSpace:se,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Se,disableRemotePlayback:Se,prefix:null,property:null,results:se,security:null,unselectable:null},space:"html",transform:Pv}),Xj=Pi({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Lt,accentHeight:se,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:se,amplitude:se,arabicForm:null,ascent:se,attributeName:null,attributeType:null,azimuth:se,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:se,by:null,calcMode:null,capHeight:se,className:Ie,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:se,diffuseConstant:se,direction:null,display:null,dur:null,divisor:se,dominantBaseline:null,download:Se,dx:null,dy:null,edgeMode:null,editable:null,elevation:se,enableBackground:null,end:null,event:null,exponent:se,externalResourcesRequired:null,fill:null,fillOpacity:se,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:pi,g2:pi,glyphName:pi,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:se,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:se,horizOriginX:se,horizOriginY:se,id:null,ideographic:se,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:se,k:se,k1:se,k2:se,k3:se,k4:se,kernelMatrix:Lt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:se,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:se,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:se,overlineThickness:se,paintOrder:null,panose1:null,path:null,pathLength:se,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Ie,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:se,pointsAtY:se,pointsAtZ:se,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Lt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Lt,rev:Lt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Lt,requiredFeatures:Lt,requiredFonts:Lt,requiredFormats:Lt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:se,specularExponent:se,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:se,strikethroughThickness:se,string:null,stroke:null,strokeDashArray:Lt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:se,strokeOpacity:se,strokeWidth:null,style:null,surfaceScale:se,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Lt,tabIndex:se,tableValues:null,target:null,targetX:se,targetY:se,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Lt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:se,underlineThickness:se,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:se,values:null,vAlphabetic:se,vMathematical:se,vectorEffect:null,vHanging:se,vIdeographic:se,version:null,vertAdvY:se,vertOriginX:se,vertOriginY:se,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:se,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Av}),Mv=Pi({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),Lv=Pi({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Pv}),Rv=Pi({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),Zj={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},e2=/[A-Z]/g,Uh=/-[a-z]/g,t2=/^data[-\w.:]+$/i;function n2(e,t){const n=Cu(t);let r=t,i=At;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&t2.test(t)){if(t.charAt(4)==="-"){const s=t.slice(5).replace(Uh,i2);r="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=t.slice(4);if(!Uh.test(s)){let a=s.replace(e2,r2);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a}}i=ep}return new i(r,t)}function r2(e){return"-"+e.toLowerCase()}function i2(e){return e.charAt(1).toUpperCase()}const o2=zv([Tv,Qj,Mv,Lv,Rv],"html"),tp=zv([Tv,Xj,Mv,Lv,Rv],"svg");function s2(e){return e.join(" ").trim()}var np={},Vh=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,a2=/\n/g,l2=/^\s*/,c2=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,u2=/^:\s*/,d2=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,p2=/^[;\s]*/,f2=/^\s+|\s+$/g,h2=`
`,Wh="/",Hh="*",wr="",m2="comment",g2="declaration";function x2(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(g){var v=g.match(a2);v&&(n+=v.length);var _=g.lastIndexOf(h2);r=~_?g.length-_:r+g.length}function s(){var g={line:n,column:r};return function(v){return v.position=new a(g),u(),v}}function a(g){this.start=g,this.end={line:n,column:r},this.source=t.source}a.prototype.content=e;function l(g){var v=new Error(t.source+":"+n+":"+r+": "+g);if(v.reason=g,v.filename=t.source,v.line=n,v.column=r,v.source=e,!t.silent)throw v}function c(g){var v=g.exec(e);if(v){var _=v[0];return i(_),e=e.slice(_.length),v}}function u(){c(l2)}function d(g){var v;for(g=g||[];v=p();)v!==!1&&g.push(v);return g}function p(){var g=s();if(!(Wh!=e.charAt(0)||Hh!=e.charAt(1))){for(var v=2;wr!=e.charAt(v)&&(Hh!=e.charAt(v)||Wh!=e.charAt(v+1));)++v;if(v+=2,wr===e.charAt(v-1))return l("End of comment missing");var _=e.slice(2,v-2);return r+=2,i(_),e=e.slice(v),r+=2,g({type:m2,comment:_})}}function f(){var g=s(),v=c(c2);if(v){if(p(),!c(u2))return l("property missing ':'");var _=c(d2),m=g({type:g2,property:qh(v[0].replace(Vh,wr)),value:_?qh(_[0].replace(Vh,wr)):wr});return c(p2),m}}function h(){var g=[];d(g);for(var v;v=f();)v!==!1&&(g.push(v),d(g));return g}return u(),h()}function qh(e){return e?e.replace(f2,wr):wr}var y2=x2,v2=sa&&sa.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(np,"__esModule",{value:!0});np.default=w2;const b2=v2(y2);function w2(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,b2.default)(e),i=typeof t=="function";return r.forEach(s=>{if(s.type!=="declaration")return;const{property:a,value:l}=s;i?t(a,l,s):l&&(n=n||{},n[a]=l)}),n}var fl={};Object.defineProperty(fl,"__esModule",{value:!0});fl.camelCase=void 0;var k2=/^--[a-zA-Z0-9_-]+$/,_2=/-([a-z])/g,j2=/^[^-]+$/,S2=/^-(webkit|moz|ms|o|khtml)-/,C2=/^-(ms)-/,N2=function(e){return!e||j2.test(e)||k2.test(e)},E2=function(e,t){return t.toUpperCase()},Jh=function(e,t){return"".concat(t,"-")},z2=function(e,t){return t===void 0&&(t={}),N2(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(C2,Jh):e=e.replace(S2,Jh),e.replace(_2,E2))};fl.camelCase=z2;var T2=sa&&sa.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},A2=T2(np),P2=fl;function zu(e,t){var n={};return!e||typeof e!="string"||(0,A2.default)(e,function(r,i){r&&i&&(n[(0,P2.camelCase)(r,t)]=i)}),n}zu.default=zu;var M2=zu;const L2=qa(M2),Iv=Ov("end"),rp=Ov("start");function Ov(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function R2(e){const t=rp(e),n=Iv(e);if(t&&n)return{start:t,end:n}}function xo(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Kh(e.position):"start"in e||"end"in e?Kh(e):"line"in e||"column"in e?Tu(e):""}function Tu(e){return Gh(e&&e.line)+":"+Gh(e&&e.column)}function Kh(e){return Tu(e&&e.start)+"-"+Tu(e&&e.end)}function Gh(e){return e&&typeof e=="number"?e:1}class mt extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",s={},a=!1;if(n&&("line"in n&&"column"in n?s={place:n}:"start"in n&&"end"in n?s={place:n}:"type"in n?s={ancestors:[n],place:n.position}:s={...n}),typeof t=="string"?i=t:!s.cause&&t&&(a=!0,i=t.message,s.cause=t),!s.ruleId&&!s.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?s.ruleId=r:(s.source=r.slice(0,c),s.ruleId=r.slice(c+1))}if(!s.place&&s.ancestors&&s.ancestors){const c=s.ancestors[s.ancestors.length-1];c&&(s.place=c.position)}const l=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=xo(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=a&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}mt.prototype.file="";mt.prototype.name="";mt.prototype.reason="";mt.prototype.message="";mt.prototype.stack="";mt.prototype.column=void 0;mt.prototype.line=void 0;mt.prototype.ancestors=void 0;mt.prototype.cause=void 0;mt.prototype.fatal=void 0;mt.prototype.place=void 0;mt.prototype.ruleId=void 0;mt.prototype.source=void 0;const ip={}.hasOwnProperty,I2=new Map,O2=/[A-Z]/g,$2=new Set(["table","tbody","thead","tfoot","tr"]),D2=new Set(["td","th"]),$v="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function F2(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=K2(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=J2(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?tp:o2,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},s=Dv(i,e,void 0);return s&&typeof s!="string"?s:i.create(e,i.Fragment,{children:s||void 0},void 0)}function Dv(e,t,n){if(t.type==="element")return B2(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return U2(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return W2(e,t,n);if(t.type==="mdxjsEsm")return V2(e,t);if(t.type==="root")return H2(e,t,n);if(t.type==="text")return q2(e,t)}function B2(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=tp,e.schema=i),e.ancestors.push(t);const s=Bv(e,t.tagName,!1),a=G2(e,t);let l=sp(e,t);return $2.has(t.tagName)&&(l=l.filter(function(c){return typeof c=="string"?!Gj(c):!0})),Fv(e,a,s,t),op(a,l),e.ancestors.pop(),e.schema=r,e.create(t,s,a,n)}function U2(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Uo(e,t.position)}function V2(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Uo(e,t.position)}function W2(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=tp,e.schema=i),e.ancestors.push(t);const s=t.name===null?e.Fragment:Bv(e,t.name,!0),a=Y2(e,t),l=sp(e,t);return Fv(e,a,s,t),op(a,l),e.ancestors.pop(),e.schema=r,e.create(t,s,a,n)}function H2(e,t,n){const r={};return op(r,sp(e,t)),e.create(t,e.Fragment,r,n)}function q2(e,t){return t.value}function Fv(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function op(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function J2(e,t,n){return r;function r(i,s,a,l){const u=Array.isArray(a.children)?n:t;return l?u(s,a,l):u(s,a)}}function K2(e,t){return n;function n(r,i,s,a){const l=Array.isArray(s.children),c=rp(r);return t(i,s,a,l,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function G2(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&ip.call(t.properties,i)){const s=Q2(e,i,t.properties[i]);if(s){const[a,l]=s;e.tableCellAlignToStyle&&a==="align"&&typeof l=="string"&&D2.has(t.tagName)?r=l:n[a]=l}}if(r){const s=n.style||(n.style={});s[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function Y2(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const s=r.data.estree.body[0];s.type;const a=s.expression;a.type;const l=a.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument))}else Uo(e,t.position);else{const i=r.name;let s;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const l=r.value.data.estree.body[0];l.type,s=e.evaluater.evaluateExpression(l.expression)}else Uo(e,t.position);else s=r.value===null?!0:r.value;n[i]=s}return n}function sp(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:I2;for(;++r<t.children.length;){const s=t.children[r];let a;if(e.passKeys){const c=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(c){const u=i.get(c)||0;a=c+"-"+u,i.set(c,u+1)}}const l=Dv(e,s,a);l!==void 0&&n.push(l)}return n}function Q2(e,t,n){const r=n2(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Wj(n):s2(n)),r.property==="style"){let i=typeof n=="object"?n:X2(e,String(n));return e.stylePropertyNameCase==="css"&&(i=Z2(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?Zj[r.property]||r.property:r.attribute,n]}}function X2(e,t){try{return L2(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new mt("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=$v+"#cannot-parse-style-attribute",i}}function Bv(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let s=-1,a;for(;++s<i.length;){const l=Dh(i[s])?{type:"Identifier",name:i[s]}:{type:"Literal",value:i[s]};a=a?{type:"MemberExpression",object:a,property:l,computed:!!(s&&l.type==="Literal"),optional:!1}:l}r=a}else r=Dh(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return ip.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Uo(e)}function Uo(e,t){const n=new mt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=$v+"#cannot-handle-mdx-estrees-without-createevaluater",n}function Z2(e){const t={};let n;for(n in e)ip.call(e,n)&&(t[eS(n)]=e[n]);return t}function eS(e){let t=e.replace(O2,tS);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function tS(e){return"-"+e.toLowerCase()}const oc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},nS={};function rS(e,t){const n=nS,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Uv(e,r,i)}function Uv(e,t,n){if(iS(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Yh(e.children,t,n)}return Array.isArray(e)?Yh(e,t,n):""}function Yh(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Uv(e[i],t,n);return r.join("")}function iS(e){return!!(e&&typeof e=="object")}const Qh=document.createElement("i");function ap(e){const t="&"+e+";";Qh.innerHTML=t;const n=Qh.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Sn(e,t,n,r){const i=e.length;let s=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);s<r.length;)a=r.slice(s,s+1e4),a.unshift(t,0),e.splice(...a),s+=1e4,t+=1e4}function Yt(e,t){return e.length>0?(Sn(e,e.length,0,t),e):t}const Xh={}.hasOwnProperty;function oS(e){const t={};let n=-1;for(;++n<e.length;)sS(t,e[n]);return t}function sS(e,t){let n;for(n in t){const i=(Xh.call(e,n)?e[n]:void 0)||(e[n]={}),s=t[n];let a;if(s)for(a in s){Xh.call(i,a)||(i[a]=[]);const l=s[a];aS(i[a],Array.isArray(l)?l:l?[l]:[])}}}function aS(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Sn(e,0,0,r)}function Vv(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function fi(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const vn=yr(/[A-Za-z]/),Ft=yr(/[\dA-Za-z]/),lS=yr(/[#-'*+\--9=?A-Z^-~]/);function Au(e){return e!==null&&(e<32||e===127)}const Pu=yr(/\d/),cS=yr(/[\dA-Fa-f]/),uS=yr(/[!-/:-@[-`{-~]/);function we(e){return e!==null&&e<-2}function Tt(e){return e!==null&&(e<0||e===32)}function Ae(e){return e===-2||e===-1||e===32}const dS=yr(new RegExp("\\p{P}|\\p{S}","u")),pS=yr(/\s/);function yr(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Mi(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const s=e.charCodeAt(n);let a="";if(s===37&&Ft(e.charCodeAt(n+1))&&Ft(e.charCodeAt(n+2)))i=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(a=String.fromCharCode(s));else if(s>55295&&s<57344){const l=e.charCodeAt(n+1);s<56320&&l>56319&&l<57344?(a=String.fromCharCode(s,l),i=1):a="�"}else a=String.fromCharCode(s);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function $e(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let s=0;return a;function a(c){return Ae(c)?(e.enter(n),l(c)):t(c)}function l(c){return Ae(c)&&s++<i?(e.consume(c),l):(e.exit(n),t(c))}}const fS={tokenize:hS};function hS(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),$e(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),s(l)}function s(l){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,a(l)}function a(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return we(l)?(e.consume(l),e.exit("chunkText"),s):(e.consume(l),a)}}const mS={tokenize:gS},Zh={tokenize:xS};function gS(e){const t=this,n=[];let r=0,i,s,a;return l;function l(y){if(r<n.length){const j=n[r];return t.containerState=j[1],e.attempt(j[0].continuation,c,u)(y)}return u(y)}function c(y){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&x();const j=t.events.length;let A=j,S;for(;A--;)if(t.events[A][0]==="exit"&&t.events[A][1].type==="chunkFlow"){S=t.events[A][1].end;break}m(r);let P=j;for(;P<t.events.length;)t.events[P][1].end={...S},P++;return Sn(t.events,A+1,0,t.events.slice(j)),t.events.length=P,u(y)}return l(y)}function u(y){if(r===n.length){if(!i)return f(y);if(i.currentConstruct&&i.currentConstruct.concrete)return g(y);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Zh,d,p)(y)}function d(y){return i&&x(),m(r),f(y)}function p(y){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,g(y)}function f(y){return t.containerState={},e.attempt(Zh,h,g)(y)}function h(y){return r++,n.push([t.currentConstruct,t.containerState]),f(y)}function g(y){if(y===null){i&&x(),m(0),e.consume(y);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:s}),v(y)}function v(y){if(y===null){_(e.exit("chunkFlow"),!0),m(0),e.consume(y);return}return we(y)?(e.consume(y),_(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(y),v)}function _(y,j){const A=t.sliceStream(y);if(j&&A.push(null),y.previous=s,s&&(s.next=y),s=y,i.defineSkip(y.start),i.write(A),t.parser.lazy[y.start.line]){let S=i.events.length;for(;S--;)if(i.events[S][1].start.offset<a&&(!i.events[S][1].end||i.events[S][1].end.offset>a))return;const P=t.events.length;let N=P,V,E;for(;N--;)if(t.events[N][0]==="exit"&&t.events[N][1].type==="chunkFlow"){if(V){E=t.events[N][1].end;break}V=!0}for(m(r),S=P;S<t.events.length;)t.events[S][1].end={...E},S++;Sn(t.events,N+1,0,t.events.slice(P)),t.events.length=S}}function m(y){let j=n.length;for(;j-- >y;){const A=n[j];t.containerState=A[1],A[0].exit.call(t,e)}n.length=y}function x(){i.write([null]),s=void 0,i=void 0,t.containerState._closeFlow=void 0}}function xS(e,t,n){return $e(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function em(e){if(e===null||Tt(e)||pS(e))return 1;if(dS(e))return 2}function lp(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const s=e[i].resolveAll;s&&!r.includes(s)&&(t=s(t,n),r.push(s))}return t}const Mu={name:"attention",resolveAll:yS,tokenize:vS};function yS(e,t){let n=-1,r,i,s,a,l,c,u,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p={...e[r][1].end},f={...e[n][1].start};tm(p,-c),tm(f,c),a={type:c>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},l={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},s={type:c>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?"strong":"emphasis",start:{...a.start},end:{...l.end}},e[r][1].end={...a.start},e[n][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=Yt(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=Yt(u,[["enter",i,t],["enter",a,t],["exit",a,t],["enter",s,t]]),u=Yt(u,lp(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=Yt(u,[["exit",s,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,u=Yt(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,Sn(e,r-1,n-r+3,u),n=r+u.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function vS(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=em(r);let s;return a;function a(c){return s=c,e.enter("attentionSequence"),l(c)}function l(c){if(c===s)return e.consume(c),l;const u=e.exit("attentionSequence"),d=em(c),p=!d||d===2&&i||n.includes(c),f=!i||i===2&&d||n.includes(r);return u._open=!!(s===42?p:p&&(i||!f)),u._close=!!(s===42?f:f&&(d||!p)),t(c)}}function tm(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const bS={name:"autolink",tokenize:wS};function wS(e,t,n){let r=0;return i;function i(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),s}function s(h){return vn(h)?(e.consume(h),a):h===64?n(h):u(h)}function a(h){return h===43||h===45||h===46||Ft(h)?(r=1,l(h)):u(h)}function l(h){return h===58?(e.consume(h),r=0,c):(h===43||h===45||h===46||Ft(h))&&r++<32?(e.consume(h),l):(r=0,u(h))}function c(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):h===null||h===32||h===60||Au(h)?n(h):(e.consume(h),c)}function u(h){return h===64?(e.consume(h),d):lS(h)?(e.consume(h),u):n(h)}function d(h){return Ft(h)?p(h):n(h)}function p(h){return h===46?(e.consume(h),r=0,d):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):f(h)}function f(h){if((h===45||Ft(h))&&r++<63){const g=h===45?f:p;return e.consume(h),g}return n(h)}}const hl={partial:!0,tokenize:kS};function kS(e,t,n){return r;function r(s){return Ae(s)?$e(e,i,"linePrefix")(s):i(s)}function i(s){return s===null||we(s)?t(s):n(s)}}const Wv={continuation:{tokenize:jS},exit:SS,name:"blockQuote",tokenize:_S};function _S(e,t,n){const r=this;return i;function i(a){if(a===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),s}return n(a)}function s(a){return Ae(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function jS(e,t,n){const r=this;return i;function i(a){return Ae(a)?$e(e,s,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):s(a)}function s(a){return e.attempt(Wv,t,n)(a)}}function SS(e){e.exit("blockQuote")}const Hv={name:"characterEscape",tokenize:CS};function CS(e,t,n){return r;function r(s){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(s),e.exit("escapeMarker"),i}function i(s){return uS(s)?(e.enter("characterEscapeValue"),e.consume(s),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(s)}}const qv={name:"characterReference",tokenize:NS};function NS(e,t,n){const r=this;let i=0,s,a;return l;function l(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),c}function c(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),s=31,a=Ft,d(p))}function u(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),s=6,a=cS,d):(e.enter("characterReferenceValue"),s=7,a=Pu,d(p))}function d(p){if(p===59&&i){const f=e.exit("characterReferenceValue");return a===Ft&&!ap(r.sliceSerialize(f))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(p)&&i++<s?(e.consume(p),d):n(p)}}const nm={partial:!0,tokenize:zS},rm={concrete:!0,name:"codeFenced",tokenize:ES};function ES(e,t,n){const r=this,i={partial:!0,tokenize:A};let s=0,a=0,l;return c;function c(S){return u(S)}function u(S){const P=r.events[r.events.length-1];return s=P&&P[1].type==="linePrefix"?P[2].sliceSerialize(P[1],!0).length:0,l=S,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(S)}function d(S){return S===l?(a++,e.consume(S),d):a<3?n(S):(e.exit("codeFencedFenceSequence"),Ae(S)?$e(e,p,"whitespace")(S):p(S))}function p(S){return S===null||we(S)?(e.exit("codeFencedFence"),r.interrupt?t(S):e.check(nm,v,j)(S)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(S))}function f(S){return S===null||we(S)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(S)):Ae(S)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),$e(e,h,"whitespace")(S)):S===96&&S===l?n(S):(e.consume(S),f)}function h(S){return S===null||we(S)?p(S):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),g(S))}function g(S){return S===null||we(S)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(S)):S===96&&S===l?n(S):(e.consume(S),g)}function v(S){return e.attempt(i,j,_)(S)}function _(S){return e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),m}function m(S){return s>0&&Ae(S)?$e(e,x,"linePrefix",s+1)(S):x(S)}function x(S){return S===null||we(S)?e.check(nm,v,j)(S):(e.enter("codeFlowValue"),y(S))}function y(S){return S===null||we(S)?(e.exit("codeFlowValue"),x(S)):(e.consume(S),y)}function j(S){return e.exit("codeFenced"),t(S)}function A(S,P,N){let V=0;return E;function E(O){return S.enter("lineEnding"),S.consume(O),S.exit("lineEnding"),I}function I(O){return S.enter("codeFencedFence"),Ae(O)?$e(S,R,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(O):R(O)}function R(O){return O===l?(S.enter("codeFencedFenceSequence"),q(O)):N(O)}function q(O){return O===l?(V++,S.consume(O),q):V>=a?(S.exit("codeFencedFenceSequence"),Ae(O)?$e(S,T,"whitespace")(O):T(O)):N(O)}function T(O){return O===null||we(O)?(S.exit("codeFencedFence"),P(O)):N(O)}}}function zS(e,t,n){const r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),s)}function s(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}const sc={name:"codeIndented",tokenize:AS},TS={partial:!0,tokenize:PS};function AS(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),$e(e,s,"linePrefix",5)(u)}function s(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?a(u):n(u)}function a(u){return u===null?c(u):we(u)?e.attempt(TS,a,c)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||we(u)?(e.exit("codeFlowValue"),a(u)):(e.consume(u),l)}function c(u){return e.exit("codeIndented"),t(u)}}function PS(e,t,n){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):we(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):$e(e,s,"linePrefix",5)(a)}function s(a){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):we(a)?i(a):n(a)}}const MS={name:"codeText",previous:RS,resolve:LS,tokenize:IS};function LS(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function RS(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function IS(e,t,n){let r=0,i,s;return a;function a(p){return e.enter("codeText"),e.enter("codeTextSequence"),l(p)}function l(p){return p===96?(e.consume(p),r++,l):(e.exit("codeTextSequence"),c(p))}function c(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),c):p===96?(s=e.enter("codeTextSequence"),i=0,d(p)):we(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),c):(e.enter("codeTextData"),u(p))}function u(p){return p===null||p===32||p===96||we(p)?(e.exit("codeTextData"),c(p)):(e.consume(p),u)}function d(p){return p===96?(e.consume(p),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(s.type="codeTextData",u(p))}}class OS{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const s=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Ji(this.left,r),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Ji(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),Ji(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);Ji(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Ji(this.left,n.reverse())}}}function Ji(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Jv(e){const t={};let n=-1,r,i,s,a,l,c,u;const d=new OS(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,s=0,s<c.length&&c[s][1].type==="lineEndingBlank"&&(s+=2),s<c.length&&c[s][1].type==="content"))for(;++s<c.length&&c[s][1].type!=="content";)c[s][1].type==="chunkText"&&(c[s][1]._isInFirstContentOfListItem=!0,s++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,$S(d,n)),n=t[n],u=!0);else if(r[1]._container){for(s=n,i=void 0;s--;)if(a=d.get(s),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=s);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},l=d.slice(i,n),l.unshift(r),d.splice(i,n-i+1,l))}}return Sn(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function $S(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const s=[];let a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const l=a.events,c=[],u={};let d,p,f=-1,h=n,g=0,v=0;const _=[v];for(;h;){for(;e.get(++i)[1]!==h;);s.push(i),h._tokenizer||(d=r.sliceStream(h),h.next||d.push(null),p&&a.defineSkip(h.start),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),p=h,h=h.next}for(h=n;++f<l.length;)l[f][0]==="exit"&&l[f-1][0]==="enter"&&l[f][1].type===l[f-1][1].type&&l[f][1].start.line!==l[f][1].end.line&&(v=f+1,_.push(v),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(a.events=[],h?(h._tokenizer=void 0,h.previous=void 0):_.pop(),f=_.length;f--;){const m=l.slice(_[f],_[f+1]),x=s.pop();c.push([x,x+m.length-1]),e.splice(x,2,m)}for(c.reverse(),f=-1;++f<c.length;)u[g+c[f][0]]=g+c[f][1],g+=c[f][1]-c[f][0]-1;return u}const DS={resolve:BS,tokenize:US},FS={partial:!0,tokenize:VS};function BS(e){return Jv(e),e}function US(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?s(l):we(l)?e.check(FS,a,s)(l):(e.consume(l),i)}function s(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function a(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function VS(e,t,n){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),$e(e,s,"linePrefix")}function s(a){if(a===null||we(a))return n(a);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function Kv(e,t,n,r,i,s,a,l,c){const u=c||Number.POSITIVE_INFINITY;let d=0;return p;function p(m){return m===60?(e.enter(r),e.enter(i),e.enter(s),e.consume(m),e.exit(s),f):m===null||m===32||m===41||Au(m)?n(m):(e.enter(r),e.enter(a),e.enter(l),e.enter("chunkString",{contentType:"string"}),v(m))}function f(m){return m===62?(e.enter(s),e.consume(m),e.exit(s),e.exit(i),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),h(m))}function h(m){return m===62?(e.exit("chunkString"),e.exit(l),f(m)):m===null||m===60||we(m)?n(m):(e.consume(m),m===92?g:h)}function g(m){return m===60||m===62||m===92?(e.consume(m),h):h(m)}function v(m){return!d&&(m===null||m===41||Tt(m))?(e.exit("chunkString"),e.exit(l),e.exit(a),e.exit(r),t(m)):d<u&&m===40?(e.consume(m),d++,v):m===41?(e.consume(m),d--,v):m===null||m===32||m===40||Au(m)?n(m):(e.consume(m),m===92?_:v)}function _(m){return m===40||m===41||m===92?(e.consume(m),v):v(m)}}function Gv(e,t,n,r,i,s){const a=this;let l=0,c;return u;function u(h){return e.enter(r),e.enter(i),e.consume(h),e.exit(i),e.enter(s),d}function d(h){return l>999||h===null||h===91||h===93&&!c||h===94&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?n(h):h===93?(e.exit(s),e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):we(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),p(h))}function p(h){return h===null||h===91||h===93||we(h)||l++>999?(e.exit("chunkString"),d(h)):(e.consume(h),c||(c=!Ae(h)),h===92?f:p)}function f(h){return h===91||h===92||h===93?(e.consume(h),l++,p):p(h)}}function Yv(e,t,n,r,i,s){let a;return l;function l(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),a=f===40?41:f,c):n(f)}function c(f){return f===a?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(s),u(f))}function u(f){return f===a?(e.exit(s),c(a)):f===null?n(f):we(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),$e(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===a||f===null||we(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?p:d)}function p(f){return f===a||f===92?(e.consume(f),d):d(f)}}function yo(e,t){let n;return r;function r(i){return we(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):Ae(i)?$e(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const WS={name:"definition",tokenize:qS},HS={partial:!0,tokenize:JS};function qS(e,t,n){const r=this;let i;return s;function s(h){return e.enter("definition"),a(h)}function a(h){return Gv.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function l(h){return i=fi(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),c):n(h)}function c(h){return Tt(h)?yo(e,u)(h):u(h)}function u(h){return Kv(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function d(h){return e.attempt(HS,p,p)(h)}function p(h){return Ae(h)?$e(e,f,"whitespace")(h):f(h)}function f(h){return h===null||we(h)?(e.exit("definition"),r.parser.defined.push(i),t(h)):n(h)}}function JS(e,t,n){return r;function r(l){return Tt(l)?yo(e,i)(l):n(l)}function i(l){return Yv(e,s,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function s(l){return Ae(l)?$e(e,a,"whitespace")(l):a(l)}function a(l){return l===null||we(l)?t(l):n(l)}}const KS={name:"hardBreakEscape",tokenize:GS};function GS(e,t,n){return r;function r(s){return e.enter("hardBreakEscape"),e.consume(s),i}function i(s){return we(s)?(e.exit("hardBreakEscape"),t(s)):n(s)}}const YS={name:"headingAtx",resolve:QS,tokenize:XS};function QS(e,t){let n=e.length-2,r=3,i,s;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},s={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Sn(e,r,n-r+1,[["enter",i,t],["enter",s,t],["exit",s,t],["exit",i,t]])),e}function XS(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),s(d)}function s(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&r++<6?(e.consume(d),a):d===null||Tt(d)?(e.exit("atxHeadingSequence"),l(d)):n(d)}function l(d){return d===35?(e.enter("atxHeadingSequence"),c(d)):d===null||we(d)?(e.exit("atxHeading"),t(d)):Ae(d)?$e(e,l,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function c(d){return d===35?(e.consume(d),c):(e.exit("atxHeadingSequence"),l(d))}function u(d){return d===null||d===35||Tt(d)?(e.exit("atxHeadingText"),l(d)):(e.consume(d),u)}}const ZS=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],im=["pre","script","style","textarea"],eC={concrete:!0,name:"htmlFlow",resolveTo:rC,tokenize:iC},tC={partial:!0,tokenize:sC},nC={partial:!0,tokenize:oC};function rC(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function iC(e,t,n){const r=this;let i,s,a,l,c;return u;function u(b){return d(b)}function d(b){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(b),p}function p(b){return b===33?(e.consume(b),f):b===47?(e.consume(b),s=!0,v):b===63?(e.consume(b),i=3,r.interrupt?t:w):vn(b)?(e.consume(b),a=String.fromCharCode(b),_):n(b)}function f(b){return b===45?(e.consume(b),i=2,h):b===91?(e.consume(b),i=5,l=0,g):vn(b)?(e.consume(b),i=4,r.interrupt?t:w):n(b)}function h(b){return b===45?(e.consume(b),r.interrupt?t:w):n(b)}function g(b){const z="CDATA[";return b===z.charCodeAt(l++)?(e.consume(b),l===z.length?r.interrupt?t:R:g):n(b)}function v(b){return vn(b)?(e.consume(b),a=String.fromCharCode(b),_):n(b)}function _(b){if(b===null||b===47||b===62||Tt(b)){const z=b===47,F=a.toLowerCase();return!z&&!s&&im.includes(F)?(i=1,r.interrupt?t(b):R(b)):ZS.includes(a.toLowerCase())?(i=6,z?(e.consume(b),m):r.interrupt?t(b):R(b)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(b):s?x(b):y(b))}return b===45||Ft(b)?(e.consume(b),a+=String.fromCharCode(b),_):n(b)}function m(b){return b===62?(e.consume(b),r.interrupt?t:R):n(b)}function x(b){return Ae(b)?(e.consume(b),x):E(b)}function y(b){return b===47?(e.consume(b),E):b===58||b===95||vn(b)?(e.consume(b),j):Ae(b)?(e.consume(b),y):E(b)}function j(b){return b===45||b===46||b===58||b===95||Ft(b)?(e.consume(b),j):A(b)}function A(b){return b===61?(e.consume(b),S):Ae(b)?(e.consume(b),A):y(b)}function S(b){return b===null||b===60||b===61||b===62||b===96?n(b):b===34||b===39?(e.consume(b),c=b,P):Ae(b)?(e.consume(b),S):N(b)}function P(b){return b===c?(e.consume(b),c=null,V):b===null||we(b)?n(b):(e.consume(b),P)}function N(b){return b===null||b===34||b===39||b===47||b===60||b===61||b===62||b===96||Tt(b)?A(b):(e.consume(b),N)}function V(b){return b===47||b===62||Ae(b)?y(b):n(b)}function E(b){return b===62?(e.consume(b),I):n(b)}function I(b){return b===null||we(b)?R(b):Ae(b)?(e.consume(b),I):n(b)}function R(b){return b===45&&i===2?(e.consume(b),D):b===60&&i===1?(e.consume(b),C):b===62&&i===4?(e.consume(b),H):b===63&&i===3?(e.consume(b),w):b===93&&i===5?(e.consume(b),M):we(b)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(tC,K,q)(b)):b===null||we(b)?(e.exit("htmlFlowData"),q(b)):(e.consume(b),R)}function q(b){return e.check(nC,T,K)(b)}function T(b){return e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),O}function O(b){return b===null||we(b)?q(b):(e.enter("htmlFlowData"),R(b))}function D(b){return b===45?(e.consume(b),w):R(b)}function C(b){return b===47?(e.consume(b),a="",L):R(b)}function L(b){if(b===62){const z=a.toLowerCase();return im.includes(z)?(e.consume(b),H):R(b)}return vn(b)&&a.length<8?(e.consume(b),a+=String.fromCharCode(b),L):R(b)}function M(b){return b===93?(e.consume(b),w):R(b)}function w(b){return b===62?(e.consume(b),H):b===45&&i===2?(e.consume(b),w):R(b)}function H(b){return b===null||we(b)?(e.exit("htmlFlowData"),K(b)):(e.consume(b),H)}function K(b){return e.exit("htmlFlow"),t(b)}}function oC(e,t,n){const r=this;return i;function i(a){return we(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),s):n(a)}function s(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function sC(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(hl,t,n)}}const aC={name:"htmlText",tokenize:lC};function lC(e,t,n){const r=this;let i,s,a;return l;function l(w){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(w),c}function c(w){return w===33?(e.consume(w),u):w===47?(e.consume(w),A):w===63?(e.consume(w),y):vn(w)?(e.consume(w),N):n(w)}function u(w){return w===45?(e.consume(w),d):w===91?(e.consume(w),s=0,g):vn(w)?(e.consume(w),x):n(w)}function d(w){return w===45?(e.consume(w),h):n(w)}function p(w){return w===null?n(w):w===45?(e.consume(w),f):we(w)?(a=p,C(w)):(e.consume(w),p)}function f(w){return w===45?(e.consume(w),h):p(w)}function h(w){return w===62?D(w):w===45?f(w):p(w)}function g(w){const H="CDATA[";return w===H.charCodeAt(s++)?(e.consume(w),s===H.length?v:g):n(w)}function v(w){return w===null?n(w):w===93?(e.consume(w),_):we(w)?(a=v,C(w)):(e.consume(w),v)}function _(w){return w===93?(e.consume(w),m):v(w)}function m(w){return w===62?D(w):w===93?(e.consume(w),m):v(w)}function x(w){return w===null||w===62?D(w):we(w)?(a=x,C(w)):(e.consume(w),x)}function y(w){return w===null?n(w):w===63?(e.consume(w),j):we(w)?(a=y,C(w)):(e.consume(w),y)}function j(w){return w===62?D(w):y(w)}function A(w){return vn(w)?(e.consume(w),S):n(w)}function S(w){return w===45||Ft(w)?(e.consume(w),S):P(w)}function P(w){return we(w)?(a=P,C(w)):Ae(w)?(e.consume(w),P):D(w)}function N(w){return w===45||Ft(w)?(e.consume(w),N):w===47||w===62||Tt(w)?V(w):n(w)}function V(w){return w===47?(e.consume(w),D):w===58||w===95||vn(w)?(e.consume(w),E):we(w)?(a=V,C(w)):Ae(w)?(e.consume(w),V):D(w)}function E(w){return w===45||w===46||w===58||w===95||Ft(w)?(e.consume(w),E):I(w)}function I(w){return w===61?(e.consume(w),R):we(w)?(a=I,C(w)):Ae(w)?(e.consume(w),I):V(w)}function R(w){return w===null||w===60||w===61||w===62||w===96?n(w):w===34||w===39?(e.consume(w),i=w,q):we(w)?(a=R,C(w)):Ae(w)?(e.consume(w),R):(e.consume(w),T)}function q(w){return w===i?(e.consume(w),i=void 0,O):w===null?n(w):we(w)?(a=q,C(w)):(e.consume(w),q)}function T(w){return w===null||w===34||w===39||w===60||w===61||w===96?n(w):w===47||w===62||Tt(w)?V(w):(e.consume(w),T)}function O(w){return w===47||w===62||Tt(w)?V(w):n(w)}function D(w){return w===62?(e.consume(w),e.exit("htmlTextData"),e.exit("htmlText"),t):n(w)}function C(w){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),L}function L(w){return Ae(w)?$e(e,M,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(w):M(w)}function M(w){return e.enter("htmlTextData"),a(w)}}const cp={name:"labelEnd",resolveAll:pC,resolveTo:fC,tokenize:hC},cC={tokenize:mC},uC={tokenize:gC},dC={tokenize:xC};function pC(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&Sn(e,0,e.length,n),e}function fC(e,t){let n=e.length,r=0,i,s,a,l;for(;n--;)if(i=e[n][1],s){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(a){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(s=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=n);const c={type:e[s][1].type==="labelLink"?"link":"image",start:{...e[s][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[s][1].start},end:{...e[a][1].end}},d={type:"labelText",start:{...e[s+r+2][1].end},end:{...e[a-2][1].start}};return l=[["enter",c,t],["enter",u,t]],l=Yt(l,e.slice(s+1,s+r+3)),l=Yt(l,[["enter",d,t]]),l=Yt(l,lp(t.parser.constructs.insideSpan.null,e.slice(s+r+4,a-3),t)),l=Yt(l,[["exit",d,t],e[a-2],e[a-1],["exit",u,t]]),l=Yt(l,e.slice(a+1)),l=Yt(l,[["exit",c,t]]),Sn(e,s,e.length,l),e}function hC(e,t,n){const r=this;let i=r.events.length,s,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){s=r.events[i][1];break}return l;function l(f){return s?s._inactive?p(f):(a=r.parser.defined.includes(fi(r.sliceSerialize({start:s.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),c):n(f)}function c(f){return f===40?e.attempt(cC,d,a?d:p)(f):f===91?e.attempt(uC,d,a?u:p)(f):a?d(f):p(f)}function u(f){return e.attempt(dC,d,p)(f)}function d(f){return t(f)}function p(f){return s._balanced=!0,n(f)}}function mC(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),i}function i(p){return Tt(p)?yo(e,s)(p):s(p)}function s(p){return p===41?d(p):Kv(e,a,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function a(p){return Tt(p)?yo(e,c)(p):d(p)}function l(p){return n(p)}function c(p){return p===34||p===39||p===40?Yv(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function u(p){return Tt(p)?yo(e,d)(p):d(p)}function d(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function gC(e,t,n){const r=this;return i;function i(l){return Gv.call(r,e,s,a,"reference","referenceMarker","referenceString")(l)}function s(l){return r.parser.defined.includes(fi(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function a(l){return n(l)}}function xC(e,t,n){return r;function r(s){return e.enter("reference"),e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),i}function i(s){return s===93?(e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),e.exit("reference"),t):n(s)}}const yC={name:"labelStartImage",resolveAll:cp.resolveAll,tokenize:vC};function vC(e,t,n){const r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),s}function s(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),a):n(l)}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const bC={name:"labelStartLink",resolveAll:cp.resolveAll,tokenize:wC};function wC(e,t,n){const r=this;return i;function i(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),s}function s(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const ac={name:"lineEnding",tokenize:kC};function kC(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),$e(e,t,"linePrefix")}}const ea={name:"thematicBreak",tokenize:_C};function _C(e,t,n){let r=0,i;return s;function s(u){return e.enter("thematicBreak"),a(u)}function a(u){return i=u,l(u)}function l(u){return u===i?(e.enter("thematicBreakSequence"),c(u)):r>=3&&(u===null||we(u))?(e.exit("thematicBreak"),t(u)):n(u)}function c(u){return u===i?(e.consume(u),r++,c):(e.exit("thematicBreakSequence"),Ae(u)?$e(e,l,"whitespace")(u):l(u))}}const kt={continuation:{tokenize:NC},exit:zC,name:"list",tokenize:CC},jC={partial:!0,tokenize:TC},SC={partial:!0,tokenize:EC};function CC(e,t,n){const r=this,i=r.events[r.events.length-1];let s=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return l;function l(h){const g=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:Pu(h)){if(r.containerState.type||(r.containerState.type=g,e.enter(g,{_container:!0})),g==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(ea,n,u)(h):u(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(h)}return n(h)}function c(h){return Pu(h)&&++a<10?(e.consume(h),c):(!r.interrupt||a<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),u(h)):n(h)}function u(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(hl,r.interrupt?n:d,e.attempt(jC,f,p))}function d(h){return r.containerState.initialBlankLine=!0,s++,f(h)}function p(h){return Ae(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),f):n(h)}function f(h){return r.containerState.size=s+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function NC(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(hl,i,s);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,$e(e,t,"listItemIndent",r.containerState.size+1)(l)}function s(l){return r.containerState.furtherBlankLines||!Ae(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(SC,t,a)(l))}function a(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,$e(e,e.attempt(kt,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function EC(e,t,n){const r=this;return $e(e,i,"listItemIndent",r.containerState.size+1);function i(s){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(s):n(s)}}function zC(e){e.exit(this.containerState.type)}function TC(e,t,n){const r=this;return $e(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(s){const a=r.events[r.events.length-1];return!Ae(s)&&a&&a[1].type==="listItemPrefixWhitespace"?t(s):n(s)}}const om={name:"setextUnderline",resolveTo:AC,tokenize:PC};function AC(e,t){let n=e.length,r,i,s;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!s&&e[n][1].type==="definition"&&(s=n);const a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",s?(e.splice(i,0,["enter",a,t]),e.splice(s+1,0,["exit",e[r][1],t]),e[r][1].end={...e[s][1].end}):e[r][1]=a,e.push(["exit",a,t]),e}function PC(e,t,n){const r=this;let i;return s;function s(u){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),i=u,a(u)):n(u)}function a(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===i?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),Ae(u)?$e(e,c,"lineSuffix")(u):c(u))}function c(u){return u===null||we(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const MC={tokenize:LC};function LC(e){const t=this,n=e.attempt(hl,r,e.attempt(this.parser.constructs.flowInitial,i,$e(e,e.attempt(this.parser.constructs.flow,i,e.attempt(DS,i)),"linePrefix")));return n;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEndingBlank"),e.consume(s),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const RC={resolveAll:Xv()},IC=Qv("string"),OC=Qv("text");function Qv(e){return{resolveAll:Xv(e==="text"?$C:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],s=n.attempt(i,a,l);return a;function a(d){return u(d)?s(d):l(d)}function l(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),c}function c(d){return u(d)?(n.exit("data"),s(d)):(n.consume(d),c)}function u(d){if(d===null)return!0;const p=i[d];let f=-1;if(p)for(;++f<p.length;){const h=p[f];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function Xv(e){return t;function t(n,r){let i=-1,s;for(;++i<=n.length;)s===void 0?n[i]&&n[i][1].type==="data"&&(s=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==s+2&&(n[s][1].end=n[i-1][1].end,n.splice(s+2,i-s-2),i=s+2),s=void 0);return e?e(n,r):n}}function $C(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let s=i.length,a=-1,l=0,c;for(;s--;){const u=i[s];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)l++,a--;if(a)break;a=-1}else if(u===-2)c=!0,l++;else if(u!==-1){s++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){const u={type:n===e.length||c||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?a:r.start._bufferIndex+a,_index:r.start._index+s,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const DC={42:kt,43:kt,45:kt,48:kt,49:kt,50:kt,51:kt,52:kt,53:kt,54:kt,55:kt,56:kt,57:kt,62:Wv},FC={91:WS},BC={[-2]:sc,[-1]:sc,32:sc},UC={35:YS,42:ea,45:[om,ea],60:eC,61:om,95:ea,96:rm,126:rm},VC={38:qv,92:Hv},WC={[-5]:ac,[-4]:ac,[-3]:ac,33:yC,38:qv,42:Mu,60:[bS,aC],91:bC,92:[KS,Hv],93:cp,95:Mu,96:MS},HC={null:[Mu,RC]},qC={null:[42,95]},JC={null:[]},KC=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:qC,contentInitial:FC,disable:JC,document:DC,flow:UC,flowInitial:BC,insideSpan:HC,string:VC,text:WC},Symbol.toStringTag,{value:"Module"}));function GC(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},s=[];let a=[],l=[];const c={attempt:P(A),check:P(S),consume:x,enter:y,exit:j,interrupt:P(S,{interrupt:!0})},u={code:null,containerState:{},defineSkip:v,events:[],now:g,parser:e,previous:null,sliceSerialize:f,sliceStream:h,write:p};let d=t.tokenize.call(u,c);return t.resolveAll&&s.push(t),u;function p(I){return a=Yt(a,I),_(),a[a.length-1]!==null?[]:(N(t,0),u.events=lp(s,u.events,u),u.events)}function f(I,R){return QC(h(I),R)}function h(I){return YC(a,I)}function g(){const{_bufferIndex:I,_index:R,line:q,column:T,offset:O}=r;return{_bufferIndex:I,_index:R,line:q,column:T,offset:O}}function v(I){i[I.line]=I.column,E()}function _(){let I;for(;r._index<a.length;){const R=a[r._index];if(typeof R=="string")for(I=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===I&&r._bufferIndex<R.length;)m(R.charCodeAt(r._bufferIndex));else m(R)}}function m(I){d=d(I)}function x(I){we(I)?(r.line++,r.column=1,r.offset+=I===-3?2:1,E()):I!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=I}function y(I,R){const q=R||{};return q.type=I,q.start=g(),u.events.push(["enter",q,u]),l.push(q),q}function j(I){const R=l.pop();return R.end=g(),u.events.push(["exit",R,u]),R}function A(I,R){N(I,R.from)}function S(I,R){R.restore()}function P(I,R){return q;function q(T,O,D){let C,L,M,w;return Array.isArray(T)?K(T):"tokenize"in T?K([T]):H(T);function H(U){return ee;function ee(le){const Y=le!==null&&U[le],B=le!==null&&U.null,$=[...Array.isArray(Y)?Y:Y?[Y]:[],...Array.isArray(B)?B:B?[B]:[]];return K($)(le)}}function K(U){return C=U,L=0,U.length===0?D:b(U[L])}function b(U){return ee;function ee(le){return w=V(),M=U,U.partial||(u.currentConstruct=U),U.name&&u.parser.constructs.disable.null.includes(U.name)?F():U.tokenize.call(R?Object.assign(Object.create(u),R):u,c,z,F)(le)}}function z(U){return I(M,w),O}function F(U){return w.restore(),++L<C.length?b(C[L]):D}}}function N(I,R){I.resolveAll&&!s.includes(I)&&s.push(I),I.resolve&&Sn(u.events,R,u.events.length-R,I.resolve(u.events.slice(R),u)),I.resolveTo&&(u.events=I.resolveTo(u.events,u))}function V(){const I=g(),R=u.previous,q=u.currentConstruct,T=u.events.length,O=Array.from(l);return{from:T,restore:D};function D(){r=I,u.previous=R,u.currentConstruct=q,u.events.length=T,l=O,E()}}function E(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function YC(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,s=t.end._bufferIndex;let a;if(n===i)a=[e[n].slice(r,s)];else{if(a=e.slice(n,i),r>-1){const l=a[0];typeof l=="string"?a[0]=l.slice(r):a.shift()}s>0&&a.push(e[i].slice(0,s))}return a}function QC(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const s=e[n];let a;if(typeof s=="string")a=s;else switch(s){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(s)}i=s===-2,r.push(a)}return r.join("")}function XC(e){const r={constructs:oS([KC,...(e||{}).extensions||[]]),content:i(fS),defined:[],document:i(mS),flow:i(MC),lazy:{},string:i(IC),text:i(OC)};return r;function i(s){return a;function a(l){return GC(r,s,l)}}}function ZC(e){for(;!Jv(e););return e}const sm=/[\0\t\n\r]/g;function eN(){let e=1,t="",n=!0,r;return i;function i(s,a,l){const c=[];let u,d,p,f,h;for(s=t+(typeof s=="string"?s.toString():new TextDecoder(a||void 0).decode(s)),p=0,t="",n&&(s.charCodeAt(0)===65279&&p++,n=void 0);p<s.length;){if(sm.lastIndex=p,u=sm.exec(s),f=u&&u.index!==void 0?u.index:s.length,h=s.charCodeAt(f),!u){t=s.slice(p);break}if(h===10&&p===f&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),p<f&&(c.push(s.slice(p,f)),e+=f-p),h){case 0:{c.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,c.push(-2);e++<d;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}p=f+1}return l&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const tN=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function nN(e){return e.replace(tN,rN)}function rN(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),s=i===120||i===88;return Vv(n.slice(s?2:1),s?16:10)}return ap(n)||e}const Zv={}.hasOwnProperty;function iN(e,t,n){return typeof t!="string"&&(n=t,t=void 0),oN(n)(ZC(XC(n).document().write(eN()(e,t,!0))))}function oN(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(be),autolinkProtocol:V,autolinkEmail:V,atxHeading:s(me),blockQuote:s(B),characterEscape:V,characterReference:V,codeFenced:s($),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:s($,a),codeText:s(J,a),codeTextData:V,data:V,codeFlowValue:V,definition:s(Q),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:s(ne),hardBreakEscape:s(ve),hardBreakTrailing:s(ve),htmlFlow:s(Z,a),htmlFlowData:V,htmlText:s(Z,a),htmlTextData:V,image:s(ce),label:a,link:s(be),listItem:s(_e),listItemValue:f,listOrdered:s(ae,p),listUnordered:s(ae),paragraph:s(G),reference:b,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:s(me),strong:s(te),thematicBreak:s(xe)},exit:{atxHeading:c(),atxHeadingSequence:A,autolink:c(),autolinkEmail:Y,autolinkProtocol:le,blockQuote:c(),characterEscapeValue:E,characterReferenceMarkerHexadecimal:F,characterReferenceMarkerNumeric:F,characterReferenceValue:U,characterReference:ee,codeFenced:c(_),codeFencedFence:v,codeFencedFenceInfo:h,codeFencedFenceMeta:g,codeFlowValue:E,codeIndented:c(m),codeText:c(O),codeTextData:E,data:E,definition:c(),definitionDestinationString:j,definitionLabelString:x,definitionTitleString:y,emphasis:c(),hardBreakEscape:c(R),hardBreakTrailing:c(R),htmlFlow:c(q),htmlFlowData:E,htmlText:c(T),htmlTextData:E,image:c(C),label:M,labelText:L,lineEnding:I,link:c(D),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:z,resourceDestinationString:w,resourceTitleString:H,resource:K,setextHeading:c(N),setextHeadingLineSequence:P,setextHeadingText:S,strong:c(),thematicBreak:c()}};e1(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(X){let oe={type:"root",children:[]};const ye={stack:[oe],tokenStack:[],config:t,enter:l,exit:u,buffer:a,resume:d,data:n},je=[];let ke=-1;for(;++ke<X.length;)if(X[ke][1].type==="listOrdered"||X[ke][1].type==="listUnordered")if(X[ke][0]==="enter")je.push(ke);else{const Re=je.pop();ke=i(X,Re,ke)}for(ke=-1;++ke<X.length;){const Re=t[X[ke][0]];Zv.call(Re,X[ke][1].type)&&Re[X[ke][1].type].call(Object.assign({sliceSerialize:X[ke][2].sliceSerialize},ye),X[ke][1])}if(ye.tokenStack.length>0){const Re=ye.tokenStack[ye.tokenStack.length-1];(Re[1]||am).call(ye,void 0,Re[0])}for(oe.position={start:Wn(X.length>0?X[0][1].start:{line:1,column:1,offset:0}),end:Wn(X.length>0?X[X.length-2][1].end:{line:1,column:1,offset:0})},ke=-1;++ke<t.transforms.length;)oe=t.transforms[ke](oe)||oe;return oe}function i(X,oe,ye){let je=oe-1,ke=-1,Re=!1,qe,rt,Ee,it;for(;++je<=ye;){const Je=X[je];switch(Je[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Je[0]==="enter"?ke++:ke--,it=void 0;break}case"lineEndingBlank":{Je[0]==="enter"&&(qe&&!it&&!ke&&!Ee&&(Ee=je),it=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:it=void 0}if(!ke&&Je[0]==="enter"&&Je[1].type==="listItemPrefix"||ke===-1&&Je[0]==="exit"&&(Je[1].type==="listUnordered"||Je[1].type==="listOrdered")){if(qe){let Nn=je;for(rt=void 0;Nn--;){const Jt=X[Nn];if(Jt[1].type==="lineEnding"||Jt[1].type==="lineEndingBlank"){if(Jt[0]==="exit")continue;rt&&(X[rt][1].type="lineEndingBlank",Re=!0),Jt[1].type="lineEnding",rt=Nn}else if(!(Jt[1].type==="linePrefix"||Jt[1].type==="blockQuotePrefix"||Jt[1].type==="blockQuotePrefixWhitespace"||Jt[1].type==="blockQuoteMarker"||Jt[1].type==="listItemIndent"))break}Ee&&(!rt||Ee<rt)&&(qe._spread=!0),qe.end=Object.assign({},rt?X[rt][1].start:Je[1].end),X.splice(rt||je,0,["exit",qe,Je[2]]),je++,ye++}if(Je[1].type==="listItemPrefix"){const Nn={type:"listItem",_spread:!1,start:Object.assign({},Je[1].start),end:void 0};qe=Nn,X.splice(je,0,["enter",Nn,Je[2]]),je++,ye++,Ee=void 0,it=!0}}}return X[oe][1]._spread=Re,ye}function s(X,oe){return ye;function ye(je){l.call(this,X(je),je),oe&&oe.call(this,je)}}function a(){this.stack.push({type:"fragment",children:[]})}function l(X,oe,ye){this.stack[this.stack.length-1].children.push(X),this.stack.push(X),this.tokenStack.push([oe,ye||void 0]),X.position={start:Wn(oe.start),end:void 0}}function c(X){return oe;function oe(ye){X&&X.call(this,ye),u.call(this,ye)}}function u(X,oe){const ye=this.stack.pop(),je=this.tokenStack.pop();if(je)je[0].type!==X.type&&(oe?oe.call(this,X,je[0]):(je[1]||am).call(this,X,je[0]));else throw new Error("Cannot close `"+X.type+"` ("+xo({start:X.start,end:X.end})+"): it’s not open");ye.position.end=Wn(X.end)}function d(){return rS(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function f(X){if(this.data.expectingFirstListItemValue){const oe=this.stack[this.stack.length-2];oe.start=Number.parseInt(this.sliceSerialize(X),10),this.data.expectingFirstListItemValue=void 0}}function h(){const X=this.resume(),oe=this.stack[this.stack.length-1];oe.lang=X}function g(){const X=this.resume(),oe=this.stack[this.stack.length-1];oe.meta=X}function v(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function _(){const X=this.resume(),oe=this.stack[this.stack.length-1];oe.value=X.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function m(){const X=this.resume(),oe=this.stack[this.stack.length-1];oe.value=X.replace(/(\r?\n|\r)$/g,"")}function x(X){const oe=this.resume(),ye=this.stack[this.stack.length-1];ye.label=oe,ye.identifier=fi(this.sliceSerialize(X)).toLowerCase()}function y(){const X=this.resume(),oe=this.stack[this.stack.length-1];oe.title=X}function j(){const X=this.resume(),oe=this.stack[this.stack.length-1];oe.url=X}function A(X){const oe=this.stack[this.stack.length-1];if(!oe.depth){const ye=this.sliceSerialize(X).length;oe.depth=ye}}function S(){this.data.setextHeadingSlurpLineEnding=!0}function P(X){const oe=this.stack[this.stack.length-1];oe.depth=this.sliceSerialize(X).codePointAt(0)===61?1:2}function N(){this.data.setextHeadingSlurpLineEnding=void 0}function V(X){const ye=this.stack[this.stack.length-1].children;let je=ye[ye.length-1];(!je||je.type!=="text")&&(je=ue(),je.position={start:Wn(X.start),end:void 0},ye.push(je)),this.stack.push(je)}function E(X){const oe=this.stack.pop();oe.value+=this.sliceSerialize(X),oe.position.end=Wn(X.end)}function I(X){const oe=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ye=oe.children[oe.children.length-1];ye.position.end=Wn(X.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(oe.type)&&(V.call(this,X),E.call(this,X))}function R(){this.data.atHardBreak=!0}function q(){const X=this.resume(),oe=this.stack[this.stack.length-1];oe.value=X}function T(){const X=this.resume(),oe=this.stack[this.stack.length-1];oe.value=X}function O(){const X=this.resume(),oe=this.stack[this.stack.length-1];oe.value=X}function D(){const X=this.stack[this.stack.length-1];if(this.data.inReference){const oe=this.data.referenceType||"shortcut";X.type+="Reference",X.referenceType=oe,delete X.url,delete X.title}else delete X.identifier,delete X.label;this.data.referenceType=void 0}function C(){const X=this.stack[this.stack.length-1];if(this.data.inReference){const oe=this.data.referenceType||"shortcut";X.type+="Reference",X.referenceType=oe,delete X.url,delete X.title}else delete X.identifier,delete X.label;this.data.referenceType=void 0}function L(X){const oe=this.sliceSerialize(X),ye=this.stack[this.stack.length-2];ye.label=nN(oe),ye.identifier=fi(oe).toLowerCase()}function M(){const X=this.stack[this.stack.length-1],oe=this.resume(),ye=this.stack[this.stack.length-1];if(this.data.inReference=!0,ye.type==="link"){const je=X.children;ye.children=je}else ye.alt=oe}function w(){const X=this.resume(),oe=this.stack[this.stack.length-1];oe.url=X}function H(){const X=this.resume(),oe=this.stack[this.stack.length-1];oe.title=X}function K(){this.data.inReference=void 0}function b(){this.data.referenceType="collapsed"}function z(X){const oe=this.resume(),ye=this.stack[this.stack.length-1];ye.label=oe,ye.identifier=fi(this.sliceSerialize(X)).toLowerCase(),this.data.referenceType="full"}function F(X){this.data.characterReferenceType=X.type}function U(X){const oe=this.sliceSerialize(X),ye=this.data.characterReferenceType;let je;ye?(je=Vv(oe,ye==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):je=ap(oe);const ke=this.stack[this.stack.length-1];ke.value+=je}function ee(X){const oe=this.stack.pop();oe.position.end=Wn(X.end)}function le(X){E.call(this,X);const oe=this.stack[this.stack.length-1];oe.url=this.sliceSerialize(X)}function Y(X){E.call(this,X);const oe=this.stack[this.stack.length-1];oe.url="mailto:"+this.sliceSerialize(X)}function B(){return{type:"blockquote",children:[]}}function $(){return{type:"code",lang:null,meta:null,value:""}}function J(){return{type:"inlineCode",value:""}}function Q(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function ne(){return{type:"emphasis",children:[]}}function me(){return{type:"heading",depth:0,children:[]}}function ve(){return{type:"break"}}function Z(){return{type:"html",value:""}}function ce(){return{type:"image",title:null,url:"",alt:null}}function be(){return{type:"link",title:null,url:"",children:[]}}function ae(X){return{type:"list",ordered:X.type==="listOrdered",start:null,spread:X._spread,children:[]}}function _e(X){return{type:"listItem",spread:X._spread,checked:null,children:[]}}function G(){return{type:"paragraph",children:[]}}function te(){return{type:"strong",children:[]}}function ue(){return{type:"text",value:""}}function xe(){return{type:"thematicBreak"}}}function Wn(e){return{line:e.line,column:e.column,offset:e.offset}}function e1(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?e1(e,r):sN(e,r)}}function sN(e,t){let n;for(n in t)if(Zv.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function am(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+xo({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+xo({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+xo({start:t.start,end:t.end})+") is still open")}function aN(e){const t=this;t.parser=n;function n(r){return iN(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function lN(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function cN(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function uN(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let s={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(s.data={meta:t.meta}),e.patch(t,s),s=e.applyData(t,s),s={type:"element",tagName:"pre",properties:{},children:[s]},e.patch(t,s),s}function dN(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function pN(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function fN(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Mi(r.toLowerCase()),s=e.footnoteOrder.indexOf(r);let a,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=s+1,l+=1,e.footnoteCounts.set(r,l);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,c);const u={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,u),e.applyData(t,u)}function hN(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function mN(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function t1(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),s=i[0];s&&s.type==="text"?s.value="["+s.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function gN(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return t1(e,t);const i={src:Mi(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,s),e.applyData(t,s)}function xN(e,t){const n={src:Mi(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function yN(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function vN(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return t1(e,t);const i={href:Mi(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,s),e.applyData(t,s)}function bN(e,t){const n={href:Mi(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function wN(e,t,n){const r=e.all(t),i=n?kN(n):n1(t),s={},a=[];if(typeof t.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const d=r[l];(i||l!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?a.push(...d.children):a.push(d)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:s,children:a};return e.patch(t,u),e.applyData(t,u)}function kN(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=n1(n[r])}return t}function n1(e){const t=e.spread;return t??e.children.length>1}function _N(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const s={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,s),e.applyData(t,s)}function jN(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function SN(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function CN(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function NN(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),i.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},l=rp(t.children[1]),c=Iv(t.children[t.children.length-1]);l&&c&&(a.position={start:l,end:c}),i.push(a)}const s={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,s),e.applyData(t,s)}function EN(e,t,n){const r=n?n.children:void 0,s=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,l=a?a.length:t.children.length;let c=-1;const u=[];for(;++c<l;){const p=t.children[c],f={},h=a?a[c]:void 0;h&&(f.align=h);let g={type:"element",tagName:s,properties:f,children:[]};p&&(g.children=e.all(p),e.patch(p,g),g=e.applyData(p,g)),u.push(g)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function zN(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const lm=9,cm=32;function TN(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const s=[];for(;r;)s.push(um(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return s.push(um(t.slice(i),i>0,!1)),s.join("")}function um(e,t,n){let r=0,i=e.length;if(t){let s=e.codePointAt(r);for(;s===lm||s===cm;)r++,s=e.codePointAt(r)}if(n){let s=e.codePointAt(i-1);for(;s===lm||s===cm;)i--,s=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function AN(e,t){const n={type:"text",value:TN(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function PN(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const MN={blockquote:lN,break:cN,code:uN,delete:dN,emphasis:pN,footnoteReference:fN,heading:hN,html:mN,imageReference:gN,image:xN,inlineCode:yN,linkReference:vN,link:bN,listItem:wN,list:_N,paragraph:jN,root:SN,strong:CN,table:NN,tableCell:zN,tableRow:EN,text:AN,thematicBreak:PN,toml:Ps,yaml:Ps,definition:Ps,footnoteDefinition:Ps};function Ps(){}const r1=-1,ml=0,vo=1,Ia=2,up=3,dp=4,pp=5,fp=6,i1=7,o1=8,dm=typeof self=="object"?self:globalThis,LN=(e,t)=>{const n=(i,s)=>(e.set(s,i),i),r=i=>{if(e.has(i))return e.get(i);const[s,a]=t[i];switch(s){case ml:case r1:return n(a,i);case vo:{const l=n([],i);for(const c of a)l.push(r(c));return l}case Ia:{const l=n({},i);for(const[c,u]of a)l[r(c)]=r(u);return l}case up:return n(new Date(a),i);case dp:{const{source:l,flags:c}=a;return n(new RegExp(l,c),i)}case pp:{const l=n(new Map,i);for(const[c,u]of a)l.set(r(c),r(u));return l}case fp:{const l=n(new Set,i);for(const c of a)l.add(r(c));return l}case i1:{const{name:l,message:c}=a;return n(new dm[l](c),i)}case o1:return n(BigInt(a),i);case"BigInt":return n(Object(BigInt(a)),i);case"ArrayBuffer":return n(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:l}=new Uint8Array(a);return n(new DataView(l),a)}}return n(new dm[s](a),i)};return r},pm=e=>LN(new Map,e)(0),Hr="",{toString:RN}={},{keys:IN}=Object,Ki=e=>{const t=typeof e;if(t!=="object"||!e)return[ml,t];const n=RN.call(e).slice(8,-1);switch(n){case"Array":return[vo,Hr];case"Object":return[Ia,Hr];case"Date":return[up,Hr];case"RegExp":return[dp,Hr];case"Map":return[pp,Hr];case"Set":return[fp,Hr];case"DataView":return[vo,n]}return n.includes("Array")?[vo,n]:n.includes("Error")?[i1,n]:[Ia,n]},Ms=([e,t])=>e===ml&&(t==="function"||t==="symbol"),ON=(e,t,n,r)=>{const i=(a,l)=>{const c=r.push(a)-1;return n.set(l,c),c},s=a=>{if(n.has(a))return n.get(a);let[l,c]=Ki(a);switch(l){case ml:{let d=a;switch(c){case"bigint":l=o1,d=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);d=null;break;case"undefined":return i([r1],a)}return i([l,d],a)}case vo:{if(c){let f=a;return c==="DataView"?f=new Uint8Array(a.buffer):c==="ArrayBuffer"&&(f=new Uint8Array(a)),i([c,[...f]],a)}const d=[],p=i([l,d],a);for(const f of a)d.push(s(f));return p}case Ia:{if(c)switch(c){case"BigInt":return i([c,a.toString()],a);case"Boolean":case"Number":case"String":return i([c,a.valueOf()],a)}if(t&&"toJSON"in a)return s(a.toJSON());const d=[],p=i([l,d],a);for(const f of IN(a))(e||!Ms(Ki(a[f])))&&d.push([s(f),s(a[f])]);return p}case up:return i([l,a.toISOString()],a);case dp:{const{source:d,flags:p}=a;return i([l,{source:d,flags:p}],a)}case pp:{const d=[],p=i([l,d],a);for(const[f,h]of a)(e||!(Ms(Ki(f))||Ms(Ki(h))))&&d.push([s(f),s(h)]);return p}case fp:{const d=[],p=i([l,d],a);for(const f of a)(e||!Ms(Ki(f)))&&d.push(s(f));return p}}const{message:u}=a;return i([l,{name:c,message:u}],a)};return s},fm=(e,{json:t,lossy:n}={})=>{const r=[];return ON(!(t||n),!!t,new Map,r)(e),r},Oa=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?pm(fm(e,t)):structuredClone(e):(e,t)=>pm(fm(e,t));function $N(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function DN(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function FN(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||$N,r=e.options.footnoteBackLabel||DN,i=e.options.footnoteLabel||"Footnotes",s=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let c=-1;for(;++c<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[c]);if(!u)continue;const d=e.all(u),p=String(u.identifier).toUpperCase(),f=Mi(p.toLowerCase());let h=0;const g=[],v=e.footnoteCounts.get(p);for(;v!==void 0&&++h<=v;){g.length>0&&g.push({type:"text",value:" "});let x=typeof n=="string"?n:n(c,h);typeof x=="string"&&(x={type:"text",value:x}),g.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,h),className:["data-footnote-backref"]},children:Array.isArray(x)?x:[x]})}const _=d[d.length-1];if(_&&_.type==="element"&&_.tagName==="p"){const x=_.children[_.children.length-1];x&&x.type==="text"?x.value+=" ":_.children.push({type:"text",value:" "}),_.children.push(...g)}else d.push(...g);const m={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(u,m),l.push(m)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...Oa(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const s1=function(e){if(e==null)return WN;if(typeof e=="function")return gl(e);if(typeof e=="object")return Array.isArray(e)?BN(e):UN(e);if(typeof e=="string")return VN(e);throw new Error("Expected function, string, or object as test")};function BN(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=s1(e[n]);return gl(r);function r(...i){let s=-1;for(;++s<t.length;)if(t[s].apply(this,i))return!0;return!1}}function UN(e){const t=e;return gl(n);function n(r){const i=r;let s;for(s in e)if(i[s]!==t[s])return!1;return!0}}function VN(e){return gl(t);function t(n){return n&&n.type===e}}function gl(e){return t;function t(n,r,i){return!!(HN(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function WN(){return!0}function HN(e){return e!==null&&typeof e=="object"&&"type"in e}const a1=[],qN=!0,hm=!1,JN="skip";function KN(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const s=s1(i),a=r?-1:1;l(e,void 0,[])();function l(c,u,d){const p=c&&typeof c=="object"?c:{};if(typeof p.type=="string"){const h=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(c.type+(h?"<"+h+">":""))+")"})}return f;function f(){let h=a1,g,v,_;if((!t||s(c,u,d[d.length-1]||void 0))&&(h=GN(n(c,d)),h[0]===hm))return h;if("children"in c&&c.children){const m=c;if(m.children&&h[0]!==JN)for(v=(r?m.children.length:-1)+a,_=d.concat(m);v>-1&&v<m.children.length;){const x=m.children[v];if(g=l(x,v,_)(),g[0]===hm)return g;v=typeof g[1]=="number"?g[1]:v+a}}return h}}}function GN(e){return Array.isArray(e)?e:typeof e=="number"?[qN,e]:e==null?a1:[e]}function l1(e,t,n,r){let i,s,a;typeof t=="function"&&typeof n!="function"?(s=void 0,a=t,i=n):(s=t,a=n,i=r),KN(e,s,l,i);function l(c,u){const d=u[u.length-1],p=d?d.children.indexOf(c):void 0;return a(c,p,d)}}const Lu={}.hasOwnProperty,YN={};function QN(e,t){const n=t||YN,r=new Map,i=new Map,s=new Map,a={...MN,...n.handlers},l={all:u,applyData:ZN,definitionById:r,footnoteById:i,footnoteCounts:s,footnoteOrder:[],handlers:a,one:c,options:n,patch:XN,wrap:t4};return l1(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:i,f=String(d.identifier).toUpperCase();p.has(f)||p.set(f,d)}}),l;function c(d,p){const f=d.type,h=l.handlers[f];if(Lu.call(l.handlers,f)&&h)return h(l,d,p);if(l.options.passThrough&&l.options.passThrough.includes(f)){if("children"in d){const{children:v,..._}=d,m=Oa(_);return m.children=l.all(d),m}return Oa(d)}return(l.options.unknownHandler||e4)(l,d,p)}function u(d){const p=[];if("children"in d){const f=d.children;let h=-1;for(;++h<f.length;){const g=l.one(f[h],d);if(g){if(h&&f[h-1].type==="break"&&(!Array.isArray(g)&&g.type==="text"&&(g.value=mm(g.value)),!Array.isArray(g)&&g.type==="element")){const v=g.children[0];v&&v.type==="text"&&(v.value=mm(v.value))}Array.isArray(g)?p.push(...g):p.push(g)}}}return p}}function XN(e,t){e.position&&(t.position=R2(e))}function ZN(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,s=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&s&&Object.assign(n.properties,Oa(s)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function e4(e,t){const n=t.data||{},r="value"in t&&!(Lu.call(n,"hProperties")||Lu.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function t4(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function mm(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function gm(e,t){const n=QN(e,t),r=n.one(e,void 0),i=FN(n),s=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&s.children.push({type:"text",value:`
`},i),s}function n4(e,t){return e&&"run"in e?async function(n,r){const i=gm(n,{file:r,...t});await e.run(i,r)}:function(n,r){return gm(n,{file:r,...e||t})}}function xm(e){if(e)throw e}var ta=Object.prototype.hasOwnProperty,c1=Object.prototype.toString,ym=Object.defineProperty,vm=Object.getOwnPropertyDescriptor,bm=function(t){return typeof Array.isArray=="function"?Array.isArray(t):c1.call(t)==="[object Array]"},wm=function(t){if(!t||c1.call(t)!=="[object Object]")return!1;var n=ta.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&ta.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||ta.call(t,i)},km=function(t,n){ym&&n.name==="__proto__"?ym(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},_m=function(t,n){if(n==="__proto__")if(ta.call(t,n)){if(vm)return vm(t,n).value}else return;return t[n]},r4=function e(){var t,n,r,i,s,a,l=arguments[0],c=1,u=arguments.length,d=!1;for(typeof l=="boolean"&&(d=l,l=arguments[1]||{},c=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});c<u;++c)if(t=arguments[c],t!=null)for(n in t)r=_m(l,n),i=_m(t,n),l!==i&&(d&&i&&(wm(i)||(s=bm(i)))?(s?(s=!1,a=r&&bm(r)?r:[]):a=r&&wm(r)?r:{},km(l,{name:n,newValue:e(d,a,i)})):typeof i<"u"&&km(l,{name:n,newValue:i}));return l};const lc=qa(r4);function Ru(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function i4(){const e=[],t={run:n,use:r};return t;function n(...i){let s=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);l(null,...i);function l(c,...u){const d=e[++s];let p=-1;if(c){a(c);return}for(;++p<i.length;)(u[p]===null||u[p]===void 0)&&(u[p]=i[p]);i=u,d?o4(d,l)(...u):a(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function o4(e,t){let n;return r;function r(...a){const l=e.length>a.length;let c;l&&a.push(i);try{c=e.apply(this,a)}catch(u){const d=u;if(l&&n)throw d;return i(d)}l||(c&&c.then&&typeof c.then=="function"?c.then(s,i):c instanceof Error?i(c):s(c))}function i(a,...l){n||(n=!0,t(a,...l))}function s(a){i(null,a)}}const xn={basename:s4,dirname:a4,extname:l4,join:c4,sep:"/"};function s4(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');os(e);let n=0,r=-1,i=e.length,s;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else r<0&&(s=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let a=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else a<0&&(s=!0,a=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(r=i):(l=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function a4(e){if(os(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function l4(e){os(e);let t=e.length,n=-1,r=0,i=-1,s=0,a;for(;t--;){const l=e.codePointAt(t);if(l===47){if(a){r=t+1;break}continue}n<0&&(a=!0,n=t+1),l===46?i<0?i=t:s!==1&&(s=1):i>-1&&(s=-1)}return i<0||n<0||s===0||s===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function c4(...e){let t=-1,n;for(;++t<e.length;)os(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":u4(n)}function u4(e){os(e);const t=e.codePointAt(0)===47;let n=d4(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function d4(e,t){let n="",r=0,i=-1,s=0,a=-1,l,c;for(;++a<=e.length;){if(a<e.length)l=e.codePointAt(a);else{if(l===47)break;l=47}if(l===47){if(!(i===a-1||s===1))if(i!==a-1&&s===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),i=a,s=0;continue}}else if(n.length>0){n="",r=0,i=a,s=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,s=0}else l===46&&s>-1?s++:s=-1}return n}function os(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const p4={cwd:f4};function f4(){return"/"}function Iu(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function h4(e){if(typeof e=="string")e=new URL(e);else if(!Iu(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return m4(e)}function m4(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const cc=["history","path","basename","stem","extname","dirname"];class u1{constructor(t){let n;t?Iu(t)?n={path:t}:typeof t=="string"||g4(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":p4.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<cc.length;){const s=cc[r];s in n&&n[s]!==void 0&&n[s]!==null&&(this[s]=s==="history"?[...n[s]]:n[s])}let i;for(i in n)cc.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?xn.basename(this.path):void 0}set basename(t){dc(t,"basename"),uc(t,"basename"),this.path=xn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?xn.dirname(this.path):void 0}set dirname(t){jm(this.basename,"dirname"),this.path=xn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?xn.extname(this.path):void 0}set extname(t){if(uc(t,"extname"),jm(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=xn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Iu(t)&&(t=h4(t)),dc(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?xn.basename(this.path,this.extname):void 0}set stem(t){dc(t,"stem"),uc(t,"stem"),this.path=xn.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new mt(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function uc(e,t){if(e&&e.includes(xn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+xn.sep+"`")}function dc(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function jm(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function g4(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const x4=function(e){const r=this.constructor.prototype,i=r[e],s=function(){return i.apply(s,arguments)};return Object.setPrototypeOf(s,r),s},y4={}.hasOwnProperty;class hp extends x4{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=i4()}copy(){const t=new hp;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(lc(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(hc("data",this.frozen),this.namespace[t]=n,this):y4.call(this.namespace,t)&&this.namespace[t]||void 0:t?(hc("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Ls(t),r=this.parser||this.Parser;return pc("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),pc("process",this.parser||this.Parser),fc("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(s,a){const l=Ls(t),c=r.parse(l);r.run(c,l,function(d,p,f){if(d||!p||!f)return u(d);const h=p,g=r.stringify(h,f);w4(g)?f.value=g:f.result=g,u(d,f)});function u(d,p){d||!p?a(d):s?s(p):n(void 0,p)}}}processSync(t){let n=!1,r;return this.freeze(),pc("processSync",this.parser||this.Parser),fc("processSync",this.compiler||this.Compiler),this.process(t,i),Cm("processSync","process",n),r;function i(s,a){n=!0,xm(s),r=a}}run(t,n,r){Sm(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?s(void 0,r):new Promise(s);function s(a,l){const c=Ls(n);i.run(t,c,u);function u(d,p,f){const h=p||t;d?l(d):a?a(h):r(void 0,h,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,s),Cm("runSync","run",r),i;function s(a,l){xm(a),i=l,r=!0}}stringify(t,n){this.freeze();const r=Ls(n),i=this.compiler||this.Compiler;return fc("stringify",i),Sm(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(hc("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function s(u){if(typeof u=="function")c(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...p]=u;c(d,p)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(i.settings=lc(!0,i.settings,u.settings))}function l(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const p=u[d];s(p)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function c(u,d){let p=-1,f=-1;for(;++p<r.length;)if(r[p][0]===u){f=p;break}if(f===-1)r.push([u,...d]);else if(d.length>0){let[h,...g]=d;const v=r[f][1];Ru(v)&&Ru(h)&&(h=lc(!0,v,h)),r[f]=[u,h,...g]}}}}const v4=new hp().freeze();function pc(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function fc(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function hc(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Sm(e){if(!Ru(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Cm(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Ls(e){return b4(e)?e:new u1(e)}function b4(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function w4(e){return typeof e=="string"||k4(e)}function k4(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const _4="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Nm=[],Em={allowDangerousHtml:!0},j4=/^(https?|ircs?|mailto|xmpp)$/i,S4=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function d1(e){const t=C4(e),n=N4(e);return E4(t.runSync(t.parse(n),n),e)}function C4(e){const t=e.rehypePlugins||Nm,n=e.remarkPlugins||Nm,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Em}:Em;return v4().use(aN).use(n).use(n4,r).use(t)}function N4(e){const t=e.children||"",n=new u1;return typeof t=="string"&&(n.value=t),n}function E4(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,s=t.disallowedElements,a=t.skipHtml,l=t.unwrapDisallowed,c=t.urlTransform||z4;for(const d of S4)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+_4+d.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),l1(e,u),F2(e,{Fragment:o.Fragment,components:i,ignoreInvalidStyle:!0,jsx:o.jsx,jsxs:o.jsxs,passKeys:!0,passNode:!0});function u(d,p,f){if(d.type==="raw"&&f&&typeof p=="number")return a?f.children.splice(p,1):f.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let h;for(h in oc)if(Object.hasOwn(oc,h)&&Object.hasOwn(d.properties,h)){const g=d.properties[h],v=oc[h];(v===null||v.includes(d.tagName))&&(d.properties[h]=c(String(g||""),h,d))}}if(d.type==="element"){let h=n?!n.includes(d.tagName):s?s.includes(d.tagName):!1;if(!h&&r&&typeof p=="number"&&(h=!r(d,p,f)),h&&f&&typeof p=="number")return l&&d.children?f.children.splice(p,1,...d.children):f.children.splice(p,1),p}}}function z4(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||j4.test(e.slice(0,t))?e:""}function T4({value:e,onChange:t,placeholder:n="Write your content here...",minHeight:r=200}){const[i,s]=k.useState(!1),[a,l]=k.useState(r),c=k.useRef(null),u=k.useRef(null);k.useEffect(()=>{if(e){const f=e.split(`
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
      `}),i?o.jsx("div",{className:"monaco-wrapper",children:o.jsx(Zt,{height:"100%",language:"markdown",theme:"vs-dark",value:e,onChange:f=>t(f||""),onMount:d,options:{minimap:{enabled:!1},fontSize:14,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"off",scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",padding:{top:12,bottom:12},lineDecorationsWidth:8,folding:!1,glyphMargin:!1,renderLineHighlight:"none",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,scrollbar:{vertical:"auto",horizontal:"hidden"}}})}):o.jsxs("div",{className:"markdown-preview",onClick:()=>s(!0),children:[o.jsxs("span",{className:"edit-hint",children:[o.jsx(v_,{size:12}),"Click to edit"]}),e?o.jsx("div",{className:"markdown-content",children:o.jsx(d1,{children:e})}):o.jsx("div",{className:"markdown-placeholder",children:n})]})]})}function A4(e){return/^[a-zA-Z0-9_]+$/.test(e)}function P4({agent:e}){const{project:t,updateAgent:n,mcpServers:r,builtinTools:i,setActiveTab:s,setRunAgentId:a}=ht(),[l,c]=k.useState(new Set(["basic","model","tools","subagents","callbacks"])),[u,d]=k.useState(!1),[p,f]=k.useState(!1),[h,g]=k.useState(!1),[v,_]=k.useState(""),[m,x]=k.useState(null);if(!t)return null;function y(C){n(e.id,C)}function j(C){if(C===""){x(null),y({name:C});return}A4(C)?x(null):x("Name can only contain letters, numbers, and underscores"),e.type==="LlmAgent"?y({name:C,output_key:C}):y({name:C})}function A(C){const L=new Set(l);L.has(C)?L.delete(C):L.add(C),c(L)}const S=e.type==="LlmAgent",P=e;function N(C){S&&y({tools:[...P.tools,C]})}function V(C){S&&y({tools:P.tools.filter((L,M)=>M!==C)})}function E(C,L){if(!S)return;const M=[...P.tools];M[C]=L,y({tools:M})}function I(C){"sub_agents"in e&&y({sub_agents:[...e.sub_agents,C]})}function R(C){"sub_agents"in e&&y({sub_agents:e.sub_agents.filter(L=>L!==C)})}const q=t.agents.filter(C=>C.id!==e.id);async function T(){if(!(!t||!S)){d(!0);try{const C=P.instruction||"",L=C?`Current instruction to improve:

${C}

Please improve and expand this instruction while preserving its core intent.`:void 0,w=t.agents.some(K=>K.id===e.id)?void 0:e,H=await Zs(t.id,e.id,L,w);H.success&&H.prompt?y({instruction:H.prompt}):alert("Failed to generate prompt: "+(H.error||"Unknown error"))}catch(C){alert("Error generating prompt: "+C.message)}finally{d(!1)}}}async function O(){if(!(!t||!S||!v.trim())){d(!0);try{const L=`Current instruction:

${P.instruction||""}

---

Requested changes:
${v}

Please apply the requested changes to the instruction above. Output only the updated instruction, nothing else.`,w=t.agents.some(K=>K.id===e.id)?void 0:e,H=await Zs(t.id,e.id,L,w);H.success&&H.prompt?(y({instruction:H.prompt}),g(!1),_("")):alert("Failed to apply changes: "+(H.error||"Unknown error"))}catch(C){alert("Error applying changes: "+C.message)}finally{d(!1)}}}async function D(){if(!t||!S)return;const C=P.instruction;if(!C){alert("Please write an instruction first");return}f(!0);try{const L=`Write a 5-10 word description of what this agent does.

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

Your response (5-10 words only):`,M=await Zs(t.id,e.id,L);if(M.success&&M.prompt){let w=M.prompt.trim();w=w.replace(/^["']|["']$/g,"").trim();const H=w.split(/[.!?\n]/)[0].trim(),K=H.length>80?H.slice(0,77)+"...":H;y({description:K})}else alert("Failed to generate description: "+(M.error||"Unknown error"))}catch(L){alert("Error generating description: "+L.message)}finally{f(!1)}}return o.jsxs("div",{className:"agent-editor",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"editor-header",children:[o.jsx(zr,{size:24,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o.jsx("input",{type:"text",value:e.name,onChange:C=>j(C.target.value),placeholder:"Agent name",style:{borderColor:m?"var(--error)":void 0}}),m&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:m})]}),o.jsx("span",{className:"badge badge-info",children:e.type}),o.jsxs("button",{className:"btn btn-primary btn-sm run-agent-btn",onClick:()=>{a(e.id),s("run")},title:"Test this agent",children:[o.jsx(fr,{size:14}),"Run"]})]}),o.jsxs("div",{className:"editor-content",children:[o.jsxs(Gi,{id:"basic",title:"Basic Info",icon:o.jsx(zr,{size:16}),expanded:l.has("basic"),onToggle:()=>A("basic"),children:[o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group full-width",children:[o.jsxs("div",{className:"label-with-action",children:[o.jsx("label",{children:"Description"}),S&&P.instruction&&o.jsx("button",{className:"btn btn-secondary btn-sm generate-btn",onClick:D,disabled:p,title:"Generate description from instruction",children:p?o.jsxs(o.Fragment,{children:[o.jsx(Zn,{size:14,className:"spin"}),"Summarizing..."]}):"Summarize"})]}),o.jsx("input",{type:"text",value:e.description,onChange:C=>y({description:C.target.value}),placeholder:"e.g., Reviews code for bugs and suggests fixes"})]})}),S&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group full-width",children:[o.jsxs("div",{className:"label-with-action",children:[o.jsx("label",{children:"Instruction"}),o.jsxs("div",{className:"action-buttons",children:[o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>g(!h),disabled:u||!P.instruction,title:"Request specific changes to the instruction",children:"Request Changes"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:T,disabled:u,title:"Uses AI to improve and expand the current instruction",children:u?o.jsxs(o.Fragment,{children:[o.jsx(Zn,{size:14,className:"spin"}),"Working..."]}):"Auto-Improve"})]})]}),h&&o.jsxs("div",{className:"request-changes-box",children:[o.jsx("input",{type:"text",value:v,onChange:C=>_(C.target.value),placeholder:"Describe what changes you want...",onKeyDown:C=>{C.key==="Enter"&&v.trim()?O():C.key==="Escape"&&(g(!1),_(""))},autoFocus:!0}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:O,disabled:u||!v.trim(),children:"Apply"})]}),o.jsx(T4,{value:P.instruction,onChange:C=>y({instruction:C}),placeholder:"Write your agent's instruction here... (Markdown supported)",minHeight:200})]})}),o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Output Key"}),o.jsxs("select",{value:P.output_key||"",onChange:C=>y({output_key:C.target.value||void 0}),children:[o.jsx("option",{value:"",children:"None"}),t.app.state_keys.map(C=>o.jsx("option",{value:C.name,children:C.name},C.name))]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Include Contents"}),o.jsxs("select",{value:P.include_contents,onChange:C=>y({include_contents:C.target.value}),children:[o.jsx("option",{value:"default",children:"Default"}),o.jsx("option",{value:"none",children:"None"})]})]})]}),o.jsxs("div",{className:"form-row",style:{gap:24},children:[o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:P.disallow_transfer_to_parent,onChange:C=>y({disallow_transfer_to_parent:C.target.checked})}),o.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to parent"]}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:P.disallow_transfer_to_peers,onChange:C=>y({disallow_transfer_to_peers:C.target.checked})}),o.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to peers"]})]})]}),e.type==="LoopAgent"&&o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Max Iterations"}),o.jsx("input",{type:"number",value:e.max_iterations||"",onChange:C=>y({max_iterations:parseInt(C.target.value)||void 0}),placeholder:"No limit"})]})})]}),S&&o.jsx(Gi,{id:"model",title:"Model",icon:o.jsx(Jd,{size:16}),expanded:l.has("model"),onToggle:()=>A("model"),children:o.jsx(L4,{agent:P,appModels:t.app.models||[],defaultModelId:t.app.default_model_id,projectId:t.id,onUpdate:C=>y({model:C})})}),S&&o.jsx(Gi,{id:"tools",title:`Tools (${P.tools.length})`,icon:o.jsx(dn,{size:16}),expanded:l.has("tools"),onToggle:()=>A("tools"),children:o.jsx(M4,{tools:P.tools,onAdd:N,onRemove:V,onUpdate:E,builtinTools:i,mcpServers:r,projectMcpServers:t.mcp_servers,customTools:t.custom_tools,agents:q,skillsets:t.skillsets||[]})}),"sub_agents"in e&&o.jsx(Gi,{id:"subagents",title:`Sub-Agents (${e.sub_agents.length})`,icon:o.jsx(vv,{size:16}),expanded:l.has("subagents"),onToggle:()=>A("subagents"),children:o.jsxs("div",{className:"sub-agent-list",children:[e.sub_agents.map(C=>{const L=t.agents.find(M=>M.id===C);return L?o.jsxs("div",{className:"sub-agent-chip",children:[L.name,o.jsx("button",{onClick:()=>R(C),children:o.jsx(Ue,{size:12})})]},C):null}),o.jsxs("select",{value:"",onChange:C=>{C.target.value&&I(C.target.value)},style:{width:150,padding:"6px 10px",fontSize:13},children:[o.jsx("option",{value:"",children:"Add agent..."}),q.filter(C=>!e.sub_agents.includes(C.id)).map(C=>o.jsx("option",{value:C.id,children:C.name},C.id))]})]})}),o.jsx(Gi,{id:"callbacks",title:"Callbacks",icon:o.jsx(jn,{size:16}),expanded:l.has("callbacks"),onToggle:()=>A("callbacks"),children:o.jsx(R4,{agent:e,onUpdate:y,customCallbacks:t.custom_callbacks||[],isLlmAgent:S})})]})]})}function Gi({id:e,title:t,icon:n,expanded:r,onToggle:i,children:s}){return o.jsxs("div",{className:"section",children:[o.jsxs("div",{className:"section-header",onClick:i,children:[r?o.jsx(It,{size:16}):o.jsx(_t,{size:16}),o.jsxs("h4",{children:[n," ",t]})]}),r&&o.jsx("div",{className:"section-content",children:s})]})}function M4({tools:e,onAdd:t,onRemove:n,onUpdate:r,builtinTools:i,mcpServers:s,projectMcpServers:a,customTools:l,agents:c,skillsets:u}){const[d,p]=k.useState(!1),[f,h]=k.useState({}),[g,v]=k.useState(""),_=Bt.useRef(null),m=Bt.useRef(null),[x,y]=k.useState(null),[j,A]=k.useState(new Set),S=(z,F)=>{if(!g.trim())return!0;const U=g.toLowerCase();return z.toLowerCase().includes(U)||((F==null?void 0:F.toLowerCase().includes(U))??!1)},P=i.filter(z=>S(z.name,z.description)),N=a.filter(z=>S(z.name,z.description)),V=l.filter(z=>S(z.name,z.description)),E=c.filter(z=>S(z.name,z.description)),I=u.filter(z=>S(z.name,z.description));function R(){if(_.current){const z=_.current.getBoundingClientRect(),F=window.innerHeight,U=350,ee=F-z.bottom-16,le=z.top-16;if(ee>=200||ee>=le){const Y=Math.min(U,ee);h({top:z.bottom+4,left:z.left,maxHeight:Y})}else{const Y=Math.min(U,le);h({top:z.top-Y-4,left:z.left,maxHeight:Y})}}p(!0),v(""),setTimeout(()=>{var z;return(z=m.current)==null?void 0:z.focus()},50)}function q(){p(!1),v("")}function T(z){t({type:"builtin",name:z}),q()}async function O(z){q();const F=z.tool_filter||[];if(y({server:z,enabledTools:new Set(F),availableTools:F.map(U=>({name:U,description:""})),isLoading:F.length===0,error:void 0}),F.length===0)try{const{testMcpServer:U}=await R_(async()=>{const{testMcpServer:le}=await Promise.resolve().then(()=>i_);return{testMcpServer:le}},void 0),ee=await U({connection_type:z.connection_type,command:z.command,args:z.args,env:z.env,url:z.url,headers:z.headers,timeout:z.timeout||30});ee.success?y(le=>le?{...le,availableTools:ee.tools,enabledTools:new Set(ee.tools.map(Y=>Y.name)),isLoading:!1}:null):y(le=>le?{...le,isLoading:!1,error:ee.error||"Failed to connect to MCP server"}:null)}catch(U){y(ee=>ee?{...ee,isLoading:!1,error:U.message}:null)}}function D(z){if(!x)return;const F=new Set(x.enabledTools);F.has(z)?F.delete(z):F.add(z),y({...x,enabledTools:F})}function C(){if(!x)return;const z=Array.from(x.enabledTools);t({type:"mcp",server:{...x.server,tool_filter:z}}),y(null)}function L(z){const F=new Set(j);F.has(z)?F.delete(z):F.add(z),A(F)}function M(z,F){const U=e[z];if(U.type!=="mcp"||!U.server)return;const ee=U.server.tool_filter||[];let le;ee.includes(F)?le=ee.filter(Y=>Y!==F):le=[...ee,F],r(z,{...U,server:{...U.server,tool_filter:le}})}function w(z){t({type:"function",name:z.name,module_path:z.module_path}),q()}function H(z){const F=c.find(U=>U.id===z);t({type:"agent",agent_id:z,name:F==null?void 0:F.name}),q()}function K(z){const F=u.find(U=>U.id===z);t({type:"skillset",skillset_id:z,name:F==null?void 0:F.name}),q()}function b(z){return s.find(F=>F.name===z)}return o.jsxs("div",{children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"tool-list",children:e.map((z,F)=>{var U;return z.type==="mcp"&&z.server?o.jsxs("div",{className:"mcp-tool-item",children:[o.jsxs("div",{className:"mcp-tool-header",onClick:()=>L(F),children:[j.has(F)?o.jsx(It,{size:14}):o.jsx(_t,{size:14}),o.jsx(dn,{size:14,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{className:"mcp-tool-info",children:[o.jsx("div",{className:"mcp-tool-name",children:z.server.name}),o.jsx("div",{className:"mcp-tool-count",children:z.server.tool_filter===null||z.server.tool_filter===void 0?"all tools":`${z.server.tool_filter.length} tools enabled`})]}),o.jsx("button",{className:"delete-btn",onClick:ee=>{ee.stopPropagation(),n(F)},children:o.jsx(Ue,{size:14})})]}),j.has(F)&&o.jsx("div",{className:"mcp-tool-body",children:o.jsx("div",{className:"mcp-tool-list",children:(()=>{const ee=b(z.server.name),le=(ee==null?void 0:ee.tool_filter)||z.server.tool_filter||[],Y=new Set(z.server.tool_filter||[]);return le.map(B=>o.jsxs("label",{className:`mcp-tool-chip ${Y.has(B)?"enabled":"disabled"}`,onClick:()=>M(F,B),children:[o.jsx("input",{type:"checkbox",checked:Y.has(B),onChange:()=>{},style:{display:"none"}}),B]},B))})()})})]},F):z.type==="skillset"?o.jsxs("div",{className:"tool-item",children:[o.jsx(In,{size:14,style:{color:"var(--accent)"}}),o.jsxs("div",{className:"tool-item-info",children:[o.jsx("div",{className:"tool-item-name",children:z.name||((U=u.find(ee=>ee.id===z.skillset_id))==null?void 0:U.name)||"SkillSet"}),o.jsx("div",{className:"tool-item-type",children:"skillset"})]}),o.jsx("button",{className:"delete-btn",onClick:()=>n(F),children:o.jsx(Ue,{size:14})})]},F):o.jsxs("div",{className:"tool-item",children:[o.jsx(dn,{size:14,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{className:"tool-item-info",children:[o.jsx("div",{className:"tool-item-name",children:z.name||z.agent_id}),o.jsx("div",{className:"tool-item-type",children:z.type})]}),o.jsx("button",{className:"delete-btn",onClick:()=>n(F),children:o.jsx(Ue,{size:14})})]},F)})}),o.jsxs("div",{className:"add-tool-dropdown",style:{marginTop:12},children:[o.jsxs("button",{ref:_,className:"btn btn-secondary btn-sm",onClick:()=>d?q():R(),children:[o.jsx(Xe,{size:14}),"Add Tool"]}),d&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"dropdown-backdrop",onClick:q}),o.jsxs("div",{className:"dropdown-content dropdown-fixed",style:f,children:[o.jsx("div",{className:"dropdown-search",children:o.jsx("input",{ref:m,type:"text",placeholder:"Search tools...",value:g,onChange:z=>v(z.target.value),onKeyDown:z=>z.key==="Escape"&&q()})}),P.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Built-in Tools"}),P.map(z=>o.jsxs("button",{className:"dropdown-item",onClick:()=>T(z.name),children:[o.jsx("div",{className:"dropdown-item-name",children:z.name}),o.jsx("div",{className:"dropdown-item-desc",children:z.description})]},z.name))]}),N.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsxs("h5",{children:["Project MCP Servers (",N.length,")"]}),N.map(z=>o.jsxs("button",{className:"dropdown-item",onClick:()=>O(z),children:[o.jsxs("div",{className:"dropdown-item-name",children:[z.name,o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:z.tool_filter===null||z.tool_filter===void 0?"all tools":`${z.tool_filter.length} tools`})]}),o.jsx("div",{className:"dropdown-item-desc",children:z.description||"Custom MCP server"})]},`project-${z.id||z.name}`))]}),V.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Custom Tools"}),V.map(z=>o.jsxs("button",{className:"dropdown-item",onClick:()=>w(z),children:[o.jsx("div",{className:"dropdown-item-name",children:z.name}),o.jsx("div",{className:"dropdown-item-desc",children:z.description})]},z.id))]}),E.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Agents as Tools"}),E.map(z=>o.jsxs("button",{className:"dropdown-item",onClick:()=>H(z.id),children:[o.jsx("div",{className:"dropdown-item-name",children:z.name}),o.jsx("div",{className:"dropdown-item-desc",children:z.type})]},z.id))]}),I.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsxs("h5",{children:["SkillSets (",I.length,")"]}),I.map(z=>o.jsxs("button",{className:"dropdown-item",onClick:()=>K(z.id),children:[o.jsxs("div",{className:"dropdown-item-name",children:[z.name,o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:[z.entry_count||0," entries"]})]}),o.jsx("div",{className:"dropdown-item-desc",children:z.description||"Vector knowledge base"})]},z.id))]}),g.trim()&&P.length===0&&N.length===0&&V.length===0&&E.length===0&&I.length===0&&o.jsxs("div",{className:"dropdown-section",style:{textAlign:"center",padding:"20px",color:"var(--text-muted)"},children:['No tools matching "',g,'"']})]})]})]}),x&&o.jsx("div",{className:"mcp-config-dialog",children:o.jsxs("div",{className:"mcp-config-content",children:[o.jsxs("h3",{children:["Configure ",x.server.name]}),o.jsx("p",{children:x.server.description}),x.isLoading?o.jsxs("div",{className:"mcp-loading",children:[o.jsx("div",{className:"spinner"}),o.jsx("p",{children:"Connecting to MCP server and discovering tools..."})]}):x.error?o.jsxs("div",{className:"mcp-error",children:[o.jsxs("p",{children:["⚠️ Failed to discover tools: ",x.error]}),o.jsx("p",{className:"hint",children:"You can still add the server, but you won't be able to select specific tools."})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"mcp-select-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>y({...x,enabledTools:new Set(x.availableTools.map(z=>z.name))}),children:["Select All (",x.availableTools.length,")"]}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>y({...x,enabledTools:new Set}),children:"Select None"})]}),o.jsx("div",{className:"mcp-tools-grid",children:x.availableTools.map(z=>o.jsxs("div",{className:"mcp-tool-row",title:z.description||z.name,style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:x.enabledTools.has(z.name),onChange:()=>D(z.name)}),o.jsx("span",{className:"toggle-slider"})]}),o.jsx("span",{style:{fontSize:13,opacity:x.enabledTools.has(z.name)?1:.5,cursor:"pointer"},onClick:()=>D(z.name),children:z.name})]},z.name))})]}),o.jsxs("div",{className:"dialog-actions",children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>y(null),children:"Cancel"}),o.jsxs("button",{className:"btn btn-primary",onClick:C,disabled:x.enabledTools.size===0,children:["Add ",x.enabledTools.size," Tools"]})]})]})})]})}function L4({agent:e,appModels:t,defaultModelId:n,projectId:r,onUpdate:i}){var f,h;const s=(f=e.model)==null?void 0:f._appModelId,a=e.model!==null&&e.model!==void 0&&!s,c=s||(()=>{if(!e.model)return n;const g=t.find(v=>{var _,m,x;return v.provider===((_=e.model)==null?void 0:_.provider)&&v.model_name===((m=e.model)==null?void 0:m.model_name)&&v.api_base===((x=e.model)==null?void 0:x.api_base)});return g==null?void 0:g.id})()||n||((h=t[0])==null?void 0:h.id);Bt.useEffect(()=>{var g,v,_,m,x;if(s){const y=t.find(j=>j.id===s);y&&(((g=e.model)==null?void 0:g.provider)!==y.provider||((v=e.model)==null?void 0:v.model_name)!==y.model_name||((_=e.model)==null?void 0:_.api_base)!==y.api_base||((m=e.model)==null?void 0:m.temperature)!==y.temperature||((x=e.model)==null?void 0:x.max_output_tokens)!==y.max_output_tokens)&&i({provider:y.provider,model_name:y.model_name,api_base:y.api_base,temperature:y.temperature,max_output_tokens:y.max_output_tokens,top_p:y.top_p,top_k:y.top_k,fallbacks:[],_appModelId:s})}},[s,t,e.model,i]);function u(g){const v=t.find(_=>_.id===g);v&&i({provider:v.provider,model_name:v.model_name,api_base:v.api_base,temperature:v.temperature,max_output_tokens:v.max_output_tokens,top_p:v.top_p,top_k:v.top_k,fallbacks:[],_appModelId:g})}function d(){var g;if(a){const v=n||((g=t[0])==null?void 0:g.id);v&&u(v)}else{const v=e.model;if(v){const{_appModelId:_,...m}=v;i(m)}else i({provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]})}}function p(g){const{_appModelId:v,..._}=e.model||{};i({..._,...g})}return t.find(g=>g.id===c),t.find(g=>g.id===n),o.jsxs("div",{className:"model-selector",children:[o.jsx("style",{children:`
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
      `}),t.length>0&&o.jsxs("div",{className:"model-choice",children:[o.jsxs("div",{className:`model-option ${a?"":"selected"}`,onClick:()=>!a||d(),children:[o.jsx("div",{className:"model-option-label",children:"Use App Model"}),o.jsx("div",{className:"model-option-desc",children:"Select from configured models"})]}),o.jsxs("div",{className:`model-option ${a?"selected":""}`,onClick:()=>a||d(),children:[o.jsx("div",{className:"model-option-label",children:"Custom"}),o.jsx("div",{className:"model-option-desc",children:"Configure model manually"})]})]}),!a&&t.length>0?o.jsx("div",{className:"app-model-select",children:t.map(g=>o.jsx("div",{className:`app-model-item ${c===g.id?"selected":""}`,onClick:()=>u(g.id),children:o.jsxs("div",{className:"app-model-item-info",children:[o.jsxs("div",{className:"app-model-item-name",children:[g.name,g.id===n&&o.jsxs("span",{className:"default-badge",children:[o.jsx(yv,{size:10,fill:"currentColor"}),"Default"]})]}),o.jsxs("div",{className:"app-model-item-details",children:[g.provider," / ",g.model_name,g.api_base&&` • ${g.api_base}`]})]})},g.id))}):t.length===0?o.jsx("div",{className:"no-models-message",children:"No models configured in App Config. Configure models there first, or use custom settings below."}):null,(a||t.length===0)&&o.jsx("div",{className:"custom-model-form",children:o.jsx(bv,{projectId:r,values:e.model||{},onChange:p})})]})}const mc=[{id:"builtin_exit_loop",name:"exit_on_EXIT_LOOP_NOW",description:'Exits LoopAgent when model says "EXIT LOOP NOW". Use as after_model_callback.',module_path:"exit_on_EXIT_LOOP_NOW",code:"",state_keys_used:[]}];function R4({agent:e,onUpdate:t,customCallbacks:n,isLlmAgent:r}){const i=[...mc,...n],s=[{key:"before_agent_callbacks",label:"Before Agent"},{key:"after_agent_callbacks",label:"After Agent"}],a=[{key:"before_model_callbacks",label:"Before Model"},{key:"after_model_callbacks",label:"After Model"},{key:"before_tool_callbacks",label:"Before Tool"},{key:"after_tool_callbacks",label:"After Tool"}],l=r?[...s,...a]:s;function c(d,p){const f=e[d]||[],h=i.find(g=>g.id===p);h&&t({[d]:[...f,{module_path:h.module_path}]})}function u(d,p){const f=e[d]||[];t({[d]:f.filter((h,g)=>g!==p)})}return o.jsx("div",{className:"callbacks-editor",children:l.map(({key:d,label:p})=>{const f=e[d]||[],h=i;return o.jsxs("div",{className:"callback-type-group",style:{marginBottom:"20px"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[o.jsx("label",{style:{fontWeight:500,fontSize:"13px"},children:p}),h.length>0&&o.jsxs("select",{value:"",onChange:g=>{g.target.value&&(c(d,g.target.value),g.target.value="")},style:{padding:"4px 8px",fontSize:"12px",width:"200px"},children:[o.jsx("option",{value:"",children:"Add callback..."}),o.jsx("optgroup",{label:"Built-in",children:mc.filter(g=>!f.some(v=>v.module_path===g.module_path)).map(g=>o.jsx("option",{value:g.id,children:g.name},g.id))}),o.jsx("optgroup",{label:"Custom",children:n.filter(g=>!f.some(v=>v.module_path===g.module_path)).map(g=>o.jsx("option",{value:g.id,children:g.name},g.id))})]})]}),f.length===0?o.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",fontStyle:"italic",padding:"8px"},children:"No callbacks"}):o.jsx("div",{className:"callback-list",children:f.map((g,v)=>{const _=i.find(x=>x.module_path===g.module_path),m=mc.some(x=>x.module_path===g.module_path);return o.jsxs("div",{className:"callback-chip",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 10px",background:m?"var(--accent-bg, #1a365d)":"var(--bg-secondary)",borderRadius:"4px",marginBottom:"4px"},title:(_==null?void 0:_.description)||"",children:[o.jsxs("span",{style:{fontSize:"12px",display:"flex",alignItems:"center",gap:"6px"},children:[m&&o.jsx("span",{style:{fontSize:"9px",padding:"1px 4px",background:"var(--accent-color, #3182ce)",borderRadius:"3px",textTransform:"uppercase",fontWeight:600},children:"built-in"}),(_==null?void 0:_.name)||g.module_path]}),o.jsx("button",{onClick:()=>u(d,v),style:{background:"none",border:"none",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},title:"Remove callback",children:o.jsx(Ue,{size:12})})]},v)})})]},d)})})}const gc=[{type:"LlmAgent",label:"LLM Agent",icon:zr,color:"#00f5d4",description:"AI-powered agent with model reasoning"},{type:"SequentialAgent",label:"Sequential",icon:j_,color:"#7b2cbf",description:"Run sub-agents in order"},{type:"LoopAgent",label:"Loop",icon:w_,color:"#ffd93d",description:"Repeat sub-agents until exit"},{type:"ParallelAgent",label:"Parallel",icon:_u,color:"#ff6b6b",description:"Run sub-agents simultaneously"}];function I4(){return`agent_${Date.now().toString(36)}`}function O4(e){return{provider:e.provider,model_name:e.model_name,api_base:e.api_base,temperature:e.temperature,max_output_tokens:e.max_output_tokens,top_p:e.top_p,top_k:e.top_k,fallbacks:[]}}function $4(e,t){const n=I4(),r={LlmAgent:"new_agent",SequentialAgent:"new_sequence",LoopAgent:"new_loop",ParallelAgent:"new_parallel"},i={id:n,name:r[e]||"new_agent",description:""},s=t?O4(t):{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]};switch(e){case"LlmAgent":return{...i,type:"LlmAgent",model:s,instruction:"",include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:[],sub_agents:[],output_key:r[e]||"new_agent",before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};case"SequentialAgent":return{...i,type:"SequentialAgent",sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[]};case"LoopAgent":return{...i,type:"LoopAgent",sub_agents:[],max_iterations:10,before_agent_callbacks:[],after_agent_callbacks:[]};case"ParallelAgent":return{...i,type:"ParallelAgent",sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[]};default:throw new Error(`Unknown agent type: ${e}`)}}function D4({onSelectAgent:e}){const{project:t,addAgent:n,removeAgent:r,updateAgent:i,selectedAgentId:s,setSelectedAgentId:a,mcpServers:l}=ht(),[c,u]=k.useState(new Set),[d,p]=k.useState(!1),[f,h]=k.useState(""),[g,v]=k.useState(new Map),[_,m]=k.useState(380),[x,y]=k.useState(!1),j=k.useRef(null),[A,S]=k.useState(null),P=k.useRef(null),[N,V]=k.useState(null),[E,I]=k.useState(null),R=k.useRef(null),q=k.useRef(null),T=k.useCallback(Z=>{Z.preventDefault(),y(!0)},[]);if(k.useEffect(()=>{const Z=be=>{if(!x)return;const ae=Math.min(Math.max(200,be.clientX),600);m(ae)},ce=()=>{y(!1)};return x&&(document.addEventListener("mousemove",Z),document.addEventListener("mouseup",ce),document.body.style.cursor="col-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",Z),document.removeEventListener("mouseup",ce),document.body.style.cursor="",document.body.style.userSelect=""}},[x]),k.useEffect(()=>{if(t){const Z=t.agents.filter(ce=>"sub_agents"in ce&&ce.sub_agents.length>0).map(ce=>ce.id);u(new Set(Z))}},[t==null?void 0:t.id,t==null?void 0:t.agents.length]),!t)return null;const O=k.useMemo(()=>new Map(t.agents.map(Z=>[Z.id,Z])),[t.agents]);function D(){if(!f.trim()||!t)return;const Z=`generating_${Date.now()}`,ce=f;v(be=>new Map(be).set(Z,ce)),p(!1),h(""),Zy(t.id,ce).then(be=>{var ae,_e,G,te;if(be.success&&be.config){const ue=be.config,xe=[];if((ae=ue.tools)!=null&&ae.builtin)for(const ke of ue.tools.builtin)xe.push({type:"builtin",name:ke});if((_e=ue.tools)!=null&&_e.mcp)for(const ke of ue.tools.mcp){const Re=l.find(qe=>qe.name===ke.server);Re&&xe.push({type:"mcp",server:{...Re,tool_filter:ke.tools}})}if((G=ue.tools)!=null&&G.custom)for(const ke of ue.tools.custom){const Re=t.custom_tools.find(qe=>qe.name===ke);Re&&xe.push({type:"function",name:ke,module_path:Re.module_path})}if((te=ue.tools)!=null&&te.agents)for(const ke of ue.tools.agents){const Re=t.agents.find(qe=>qe.id===ke);Re&&xe.push({type:"agent",agent_id:ke,name:Re.name})}const X=t.app.models||[],oe=X.find(ke=>ke.id===t.app.default_model_id)||X[0],ye=ue.name||"new_agent",je={id:`agent_${Date.now().toString(36)}`,type:"LlmAgent",name:ye,description:ue.description||"",instruction:ue.instruction||"",output_key:ue.output_key||ye,model:oe?{provider:oe.provider,model_name:oe.model_name,api_base:oe.api_base,temperature:oe.temperature,max_output_tokens:oe.max_output_tokens,top_p:oe.top_p,top_k:oe.top_k,fallbacks:[]}:{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]},include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:xe,sub_agents:ue.sub_agents||[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};n(je),a(je.id),e==null||e(je.id)}else console.error("Failed to generate agent:",be.error)}).catch(be=>{console.error("Error generating agent:",be)}).finally(()=>{v(be=>{const ae=new Map(be);return ae.delete(Z),ae})})}const C=t.agents.find(Z=>Z.id===s);function L(Z){a(Z),e==null||e(Z)}function M(Z){if(!t)return;const ce=t.app.models||[],be=ce.find(_e=>_e.id===t.app.default_model_id)||ce[0],ae=$4(Z,be);n(ae),L(ae.id)}function w(Z,ce){ce.stopPropagation(),confirm("Delete this agent?")&&(r(Z),s===Z&&(e==null||e(null)))}function H(Z){const ce=new Set(c);ce.has(Z)?ce.delete(Z):ce.add(Z),u(ce)}function K(Z){if(!R.current||!P.current)return;const ce=R.current.getBoundingClientRect(),be=Z.clientY-ce.top,ae=60,_e=8;if(be<ae){const G=Math.max(1,_e*(1-be/ae));R.current.scrollTop-=G}else if(be>ce.height-ae){const G=Math.max(1,_e*(1-(ce.height-be)/ae));R.current.scrollTop+=G}}function b(Z,ce){Z.dataTransfer.setData("text/plain",ce),Z.dataTransfer.effectAllowed="move",P.current=ce,requestAnimationFrame(()=>S(ce))}function z(){P.current=null,S(null),V(null),I(null),q.current&&(cancelAnimationFrame(q.current),q.current=null)}function F(Z,ce,be){if(!t)return;Z.preventDefault(),Z.stopPropagation();const ae=P.current;if(!ae)return;const _e=t.agents.find(G=>G.id===ce);!_e||!("sub_agents"in _e)||B(ae,ce)||(Z.dataTransfer.dropEffect="move",I({parentId:ce,index:be}),V(null))}function U(Z,ce,be){if(!t)return;Z.preventDefault(),Z.stopPropagation();const ae=Z.dataTransfer.getData("text/plain");if(!ae)return;if(ae===ce||B(ae,ce)){I(null);return}const _e=t.agents.find(te=>te.id===ce);if(!_e||!("sub_agents"in _e))return;t.agents.forEach(te=>{"sub_agents"in te&&te.sub_agents.includes(ae)&&i(te.id,{sub_agents:te.sub_agents.filter(ue=>ue!==ae)})});const G=[..._e.sub_agents.filter(te=>te!==ae)];G.splice(be,0,ae),i(ce,{sub_agents:G}),u(te=>new Set([...te,ce])),S(null),I(null)}function ee(Z,ce,be){if(!t)return;const ae=P.current;Z.preventDefault(),Z.stopPropagation(),ae!==ce&&(ae&&B(ae,ce)||(Z.dataTransfer.dropEffect="move",V({agentId:ce,type:be}),I(null)))}function le(Z){const ce=Z.relatedTarget;(!ce||!Z.currentTarget.contains(ce))&&V(null)}function Y(Z,ce,be){if(!t)return;Z.preventDefault(),Z.stopPropagation();const ae=Z.dataTransfer.getData("text/plain");if(!ae||ae===ce)return;if(be==="sub_agent"&&B(ae,ce)){S(null),V(null),I(null);return}const _e=t.agents.find(te=>te.id===ce),G=t.agents.find(te=>te.id===ae);if(!(!_e||!G)){if(be==="sub_agent")"sub_agents"in _e&&(t.agents.forEach(te=>{"sub_agents"in te&&te.sub_agents.includes(ae)&&i(te.id,{sub_agents:te.sub_agents.filter(ue=>ue!==ae)})}),_e.sub_agents.includes(ae)||(i(ce,{sub_agents:[..._e.sub_agents,ae]}),u(te=>new Set([...te,ce]))));else if(be==="tool"&&"tools"in _e){const te=_e;te.tools.some(xe=>xe.type==="agent"&&xe.agent_id===ae)||i(ce,{tools:[...te.tools,{type:"agent",agent_id:ae,name:G.name}]})}S(null),V(null)}}function B(Z,ce){if(Z===ce)return!0;const be=[Z],ae=new Set;for(;be.length;){const _e=be.pop();if(ae.has(_e))continue;ae.add(_e);const G=O.get(_e);if(!(!G||!("sub_agents"in G)))for(const te of G.sub_agents){if(te===ce)return!0;be.push(te)}}return!1}function $(Z){const ce=gc.find(be=>be.type===Z);return ce?ce.icon:zr}function J(Z){const ce=gc.find(be=>be.type===Z);return ce?ce.color:"#888"}function Q(Z,ce=0,be=new Set){return Z.map(ae=>{const _e=$(ae.type),G=J(ae.type),te="sub_agents"in ae&&ae.sub_agents.length>0,ue="sub_agents"in ae,xe=ae.type==="LlmAgent",X=c.has(ae.id),oe=A===ae.id,ye=(N==null?void 0:N.agentId)===ae.id&&(N==null?void 0:N.type)==="sub_agent",je=(N==null?void 0:N.agentId)===ae.id&&(N==null?void 0:N.type)==="tool",ke=be.has(ae.id),Re=te&&X&&!ke,qe=Re&&t?ae.sub_agents.map(Ee=>t.agents.find(it=>it.id===Ee)).filter(Ee=>Ee!==void 0):[],rt=A&&A!==ae.id&&(ue||xe);return o.jsxs("div",{className:"agent-tree-item",children:[o.jsxs("div",{className:`agent-item ${s===ae.id?"selected":""} ${oe?"dragging":""} ${rt?"drop-target":""}`,onClick:()=>L(ae.id),style:{paddingLeft:12+ce*20},draggable:!0,onDragStart:Ee=>b(Ee,ae.id),onDragEnd:z,onDragOver:Ee=>{rt&&(Ee.preventDefault(),Ee.stopPropagation())},children:[o.jsx("div",{className:"drag-handle",children:o.jsx(h_,{size:12})}),te?o.jsx("button",{className:"expand-btn",onClick:Ee=>{Ee.stopPropagation(),H(ae.id)},children:X?o.jsx(It,{size:16}):o.jsx(_t,{size:16})}):o.jsx("span",{style:{width:20}}),o.jsx("div",{className:"agent-icon",style:{background:G},children:o.jsx(_e,{size:14})}),o.jsx("span",{className:"agent-name",children:ae.name}),o.jsx("button",{className:"delete-btn",onClick:Ee=>w(ae.id,Ee),children:o.jsx(Ue,{size:14})}),rt&&o.jsxs("div",{className:"drop-overlay",children:[ue&&o.jsxs("div",{className:`drop-zone-overlay ${ye?"active":""}`,onDragOver:Ee=>ee(Ee,ae.id,"sub_agent"),onDragLeave:le,onDrop:Ee=>Y(Ee,ae.id,"sub_agent"),children:[o.jsx(vv,{size:12}),o.jsx("span",{children:"Sub-agent"})]}),xe&&o.jsxs("div",{className:`drop-zone-overlay ${je?"active":""}`,onDragOver:Ee=>ee(Ee,ae.id,"tool"),onDragLeave:le,onDrop:Ee=>Y(Ee,ae.id,"tool"),children:[o.jsx(dn,{size:12}),o.jsx("span",{children:"Tool"})]})]})]}),Re&&o.jsxs("div",{className:"sub-agents",children:[A&&A!==ae.id&&o.jsx("div",{className:`insert-indicator ${(E==null?void 0:E.parentId)===ae.id&&(E==null?void 0:E.index)===0?"active":""}`,style:{marginLeft:12+(ce+1)*20},onDragOver:Ee=>F(Ee,ae.id,0),onDragLeave:()=>I(null),onDrop:Ee=>U(Ee,ae.id,0)}),qe.map((Ee,it)=>o.jsxs(Bt.Fragment,{children:[Q([Ee],ce+1,new Set([...be,ae.id])),A&&A!==ae.id&&A!==Ee.id&&o.jsx("div",{className:`insert-indicator ${(E==null?void 0:E.parentId)===ae.id&&(E==null?void 0:E.index)===it+1?"active":""}`,style:{marginLeft:12+(ce+1)*20},onDragOver:Je=>F(Je,ae.id,it+1),onDragLeave:()=>I(null),onDrop:Je=>U(Je,ae.id,it+1)})]},Ee.id))]})]},ae.id)})}const ne=new Set(t.agents.flatMap(Z=>"sub_agents"in Z?Z.sub_agents:[])),me=t.agents.filter(Z=>!ne.has(Z.id)),ve=me.length>0?me:t.agents;return o.jsxs("div",{className:"agents-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("aside",{className:"agents-sidebar",style:{width:_},children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["Agents (",t.agents.length,")",g.size>0&&o.jsxs("span",{className:"generating-badge",children:[o.jsx(Zn,{size:12,className:"spin"})," ",g.size]})]}),o.jsxs("div",{className:"header-buttons",children:[gc.map(({type:Z,icon:ce,color:be})=>o.jsx("button",{className:"quick-add-btn",style:{background:be},onClick:()=>M(Z),title:`Add ${Z}`,children:o.jsx(ce,{size:14})},Z)),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>p(!0),title:"AI-powered agent setup",children:o.jsx(ec,{size:14})})]})]}),o.jsx("div",{className:"agents-list",ref:R,onDragOver:K,children:t.agents.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(zr,{size:32}),o.jsx("p",{children:"No agents yet"})]}):Q(ve)})]}),o.jsx("div",{ref:j,className:`sidebar-resizer ${x?"resizing":""}`,onMouseDown:T}),o.jsx("div",{className:"agent-editor-area",children:C?o.jsx(P4,{agent:C}):o.jsxs("div",{className:"empty-state card",children:[o.jsx(zr,{size:48}),o.jsxs("p",{children:["Select an agent to edit",o.jsx("br",{}),"or create a new one"]})]})}),d&&o.jsx("div",{className:"type-selector",onClick:()=>p(!1),children:o.jsxs("div",{className:"quick-setup-content",onClick:Z=>Z.stopPropagation(),children:[o.jsxs("h2",{children:[o.jsx(ec,{size:20})," Quick Agent Setup"]}),o.jsx("p",{className:"quick-setup-desc",children:"Describe what you want this agent to do. Runs in the background - you can start multiple!"}),o.jsxs("div",{className:"quick-setup-form",children:[o.jsx("textarea",{value:f,onChange:Z=>h(Z.target.value),placeholder:"Example: An agent that searches the web for information and summarizes the results. It should be able to search Google and handle multiple queries in parallel.",rows:5,autoFocus:!0,onKeyDown:Z=>{Z.key==="Enter"&&(Z.metaKey||Z.ctrlKey)&&f.trim()&&D()}}),o.jsxs("div",{className:"quick-setup-info",children:[o.jsx("strong",{children:"Available resources:"}),o.jsxs("ul",{children:[o.jsxs("li",{children:[t.app.state_keys.length," state keys"]}),o.jsxs("li",{children:[l.length," MCP servers"]}),o.jsxs("li",{children:[t.custom_tools.length," custom tools"]}),o.jsxs("li",{children:[t.agents.length," existing agents"]})]})]}),o.jsxs("div",{className:"quick-setup-actions",children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>p(!1),children:"Cancel"}),o.jsxs("button",{className:"btn btn-primary",onClick:D,disabled:!f.trim(),children:[o.jsx(ec,{size:14}),"Generate (⌘↵)"]})]})]})]})})]})}var mp="\x1B[0m",gp="\x1B[1m",p1=e=>e instanceof Error?e.message:typeof e=="string"?e:"An unknown error occurred",F4=e=>{let t=p1(e),n=`${gp}[MONACOPILOT ERROR] ${t}${mp}`;return console.error(n),{message:t}},B4=(e,t)=>{console.warn(`${gp}[MONACOPILOT WARN] ${e}${t?`
${p1(t)}`:""}${mp}`)},U4=(e,t,n)=>console.warn(`${gp}[MONACOPILOT DEPRECATED] "${e}" is deprecated${n?` in ${n}`:""}. Please use "${t}" instead. It will be removed in a future version.${mp}`),$a={report:F4,warn:B4,warnDeprecated:U4},zm=(e,t,n={})=>{if(t<=0)return"";let r=e.split(`
`),i=r.length;if(t>=i)return e;if(n.truncateDirection==="keepEnd"){let a=r.slice(-t);return a.every(l=>l==="")?`
`.repeat(t):a.join(`
`)}let s=r.slice(0,t);return s.every(a=>a==="")?`
`.repeat(t):s.join(`
`)},V4=100,W4=!0,f1="onIdle",H4=!0,q4=120,J4=400,K4=0,xp=(e,t)=>t.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:e.lineNumber,endColumn:e.column}),G4=(e,t)=>t.getValueInRange({startLineNumber:e.lineNumber,startColumn:e.column,endLineNumber:t.getLineCount(),endColumn:t.getLineMaxColumn(t.getLineCount())}),Y4=e=>e.getValue(),Q4=class{constructor(e){this.capacity=e,this.head=0,this.tail=0,this.size=0,this.buffer=new Array(e)}enqueue(e){let t;return this.size===this.capacity&&(t=this.dequeue()),this.buffer[this.tail]=e,this.tail=(this.tail+1)%this.capacity,this.size++,t}dequeue(){if(this.size===0)return;let e=this.buffer[this.head];return this.buffer[this.head]=void 0,this.head=(this.head+1)%this.capacity,this.size--,e}getAll(){return this.buffer.filter(e=>e!==void 0)}clear(){this.buffer=new Array(this.capacity),this.head=0,this.tail=0,this.size=0}getSize(){return this.size}isEmpty(){return this.size===0}isFull(){return this.size===this.capacity}},h1=class m1{constructor(){this.cache=new Q4(m1.MAX_CACHE_SIZE)}get(t,n){return this.cache.getAll().filter(r=>this.isValidCacheItem(r,t,n))}add(t){t.completion.trim()&&this.cache.enqueue(t)}clear(){this.cache.clear()}isValidCacheItem(t,n,r){let i=t.textBeforeCursor.trim(),s=xp(n,r),a=s,l=r.getLineContent(n.lineNumber);if(n.column===l.length+1&&n.lineNumber<r.getLineCount()){let u=r.getLineContent(n.lineNumber+1);a=`${s}
${u}`}if(!(a.trim().includes(i)||i.includes(a.trim())))return!1;let c=r.getValueInRange(t.range);return this.isPartialMatch(c,t.completion)?this.isPositionValid(t,n):!1}isPartialMatch(t,n){let r=t.trim(),i=n.trim();return i.startsWith(r)||r.startsWith(i)}isPositionValid(t,n){let{range:r}=t,{startLineNumber:i,startColumn:s,endLineNumber:a,endColumn:l}=r,{lineNumber:c,column:u}=n;return c<i||c>a?!1:i===a?u>=s-1&&u<=l+1:c===i?u>=s-1:c===a?u<=l+1:!0}};h1.MAX_CACHE_SIZE=20;var X4=h1,Z4=class{constructor(e){this.formattedCompletion="",this.formattedCompletion=e}setCompletion(e){return this.formattedCompletion=e,this}removeInvalidLineBreaks(){return this.formattedCompletion=this.formattedCompletion.trimEnd(),this}removeMarkdownCodeSyntax(){return this.formattedCompletion=this.removeMarkdownCodeBlocks(this.formattedCompletion),this}removeMarkdownCodeBlocks(e){let t=e.split(`
`),n=[],r=!1;for(let i=0;i<t.length;i++){let s=t[i],a=s.trim().startsWith("```");if(a&&!r){r=!0;continue}if(a&&r){r=!1;continue}n.push(s)}return n.join(`
`)}removeExcessiveNewlines(){return this.formattedCompletion=this.formattedCompletion.replace(/\n{3,}/g,`

`),this}build(){return this.formattedCompletion}},eE=class{findOverlaps(e,t,n){if(!e)return{startOverlapLength:0,maxOverlapLength:0};let r=e.length,i=t.length,s=n.length,a=0,l=0,c=0,u=Math.min(r,i);for(let f=1;f<=u;f++){let h=e.substring(0,f),g=t.slice(-f);h===g&&(c=f)}let d=Math.min(r,s);for(let f=0;f<d&&e[f]===n[f];f++)a++;for(let f=1;f<=d;f++)e.slice(-f)===n.slice(0,f)&&(l=f);let p=Math.max(a,l);if(p===0){for(let f=1;f<r;f++)if(n.startsWith(e.substring(f))){p=r-f;break}}return{startOverlapLength:c,maxOverlapLength:p}}},tE=class{constructor(e){this.monaco=e,this.textOverlapCalculator=new eE}computeInsertionRange(e,t,n){if(!t)return this.createEmptyRange(e);let r=n.getOffsetAt(e),i=n.getValue().substring(0,r),s=n.getValue().substring(r);if(r>=n.getValue().length)return this.createEmptyRange(e);if(s.length===0)return this.createEmptyRange(e);let{startOverlapLength:a,maxOverlapLength:l}=this.textOverlapCalculator.findOverlaps(t,i,s),c=a>0?n.getPositionAt(r-a):e,u=r+l,d=n.getPositionAt(u);return new this.monaco.Range(c.lineNumber,c.column,d.lineNumber,d.column)}computeCacheRange(e,t){let n=e.lineNumber,r=e.column,i=t.split(`
`),s=i.length-1,a=n+s,l=s===0?r+i[0].length:i[s].length+1;return new this.monaco.Range(n,r,a,l)}createEmptyRange(e){return new this.monaco.Range(e.lineNumber,e.column,e.lineNumber,e.column)}},nE=async e=>{let{endpoint:t,body:n}=e,r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok)throw new Error(`Error while fetching completion item: ${r.statusText}`);let{completion:i,error:s}=await r.json();return{completion:i,error:s}},rE=({pos:e,mdl:t,options:n})=>{let{filename:r,language:i,technologies:s,relatedFiles:a,maxContextLines:l=V4}=n,c=a&&a.length>0?3:2,u=l?Math.floor(l/c):void 0,d=(v,_,m)=>{let x=v(e,t);return _?zm(x,_,m):x},p=(v,_)=>!v||!_?v:v.map(({content:m,...x})=>({...x,content:zm(m,_)})),f=d(xp,u,{truncateDirection:"keepEnd"}),h=d(G4,u,{truncateDirection:"keepStart"}),g=p(a,u);return{filename:r,language:i,technologies:s,relatedFiles:g,textBeforeCursor:f,textAfterCursor:h,cursorPosition:e}},iE=(e,t=300)=>{let n=null,r=null,i=(...s)=>{if(r)return r.args=s,r.promise;let a,l,c=new Promise((u,d)=>{a=u,l=d});return r={args:s,promise:c,resolve:a,reject:l},n&&(clearTimeout(n),n=null),n=setTimeout(async()=>{let u=r;if(u){r=null,n=null;try{let d=await e(...u.args);u.resolve(d)}catch(d){u.reject(d)}}},t),c};return i.cancel=()=>{n&&(clearTimeout(n),n=null),r&&(r.reject(new Error("Cancelled")),r=null)},i},oE=e=>typeof e=="string"?e==="Cancelled"||e==="AbortError":e instanceof Error?e.message==="Cancelled"||e.name==="AbortError":!1,Yi=e=>({items:e,enableForwardStability:!0}),Ou=new X4,sE=async({monaco:e,mdl:t,pos:n,token:r,isCompletionAccepted:i,options:s})=>{let{trigger:a=f1,enableCaching:l=W4,allowFollowUpCompletions:c=H4,onError:u,requestHandler:d}=s;if(l&&!i){let p=Ou.get(n,t).map(f=>({insertText:f.completion,range:f.range}));if(p.length>0)return Yi(p)}if(r.isCancellationRequested||!c&&i)return Yi([]);try{let p=iE(async g=>{var _,m;(_=s.onCompletionRequested)==null||_.call(s,g);let v;if(d)v=await d(g);else if(s.endpoint)v=await nE({endpoint:s.endpoint,...g});else throw new Error('No endpoint specified for completion request. Please set the "endpoint" option in registerCompletion, or provide a custom requestHandler.');if(v.error)throw new Error(v.error);return(m=s.onCompletionRequestFinished)==null||m.call(s,g,v),v},{onTyping:q4,onIdle:J4,onDemand:K4}[a]);r.onCancellationRequested(()=>{p.cancel()});let f=rE({pos:n,mdl:t,options:s}),{completion:h}=await p({body:{completionMetadata:f}});if(h){let g=new Z4(h).removeMarkdownCodeSyntax().removeExcessiveNewlines().removeInvalidLineBreaks().build(),v=new tE(e);return l&&Ou.add({completion:g,range:v.computeCacheRange(n,g),textBeforeCursor:xp(n,t)}),Yi([{insertText:g,range:v.computeInsertionRange(n,g,t)}])}}catch(p){if(oE(p))return Yi([]);u?u(p):$a.warn("Cannot provide completion",p)}return Yi([])},yp=new WeakMap,xl=e=>yp.get(e),aE=(e,t)=>{yp.set(e,t)},Tm=e=>{yp.delete(e)},lE=e=>({isCompletionAccepted:!1,isCompletionVisible:!1,isExplicitlyTriggered:!1,hasRejectedCurrentCompletion:!1,options:e}),cE=(e,t)=>{let n=xl(e);!n||!n.options||(n.options={...n.options,...t})},uE=(e,t,n)=>{let r=xl(t);return r?e.languages.registerInlineCompletionsProvider(n.language,{provideInlineCompletions:(i,s,a,l)=>{if(i!==t.getModel())return{items:[]};let c=r.options||n;if(!(c.trigger==="onDemand"&&!r.isExplicitlyTriggered||c.triggerIf&&!c.triggerIf({text:Y4(t),position:s,triggerType:c.trigger??f1})))return sE({monaco:e,mdl:i,pos:s,token:l,isCompletionAccepted:r.isCompletionAccepted,options:c})},handleItemDidShow:(i,s,a)=>{var l,c;r.isExplicitlyTriggered=!1,r.hasRejectedCurrentCompletion=!1,!r.isCompletionAccepted&&(r.isCompletionVisible=!0,(c=(l=r.options||n).onCompletionShown)==null||c.call(l,a,s.range))},freeInlineCompletions:()=>{}}):null},dE={TAB:(e,t)=>t.keyCode===e.KeyCode.Tab,CMD_RIGHT_ARROW:(e,t)=>t.keyCode===e.KeyCode.RightArrow&&t.metaKey},pE=class{constructor(e,t,n){this.monaco=e,this.state=t,this.initialOptions=n}handleKeyEvent(e){let t=this.state.options||this.initialOptions,n={monaco:this.monaco,event:e,state:this.state,options:t};this.handleCompletionAcceptance(n),this.handleCompletionRejection(n)}handleCompletionAcceptance(e){var t,n;return e.state.isCompletionVisible&&this.isAcceptanceKey(e.event)?((n=(t=e.options).onCompletionAccepted)==null||n.call(t),e.state.isCompletionAccepted=!0,e.state.isCompletionVisible=!1,!0):(e.state.isCompletionAccepted=!1,!1)}handleCompletionRejection(e){var t,n;return this.shouldRejectCompletion(e)?((n=(t=e.options).onCompletionRejected)==null||n.call(t),e.state.hasRejectedCurrentCompletion=!0,!0):!1}shouldRejectCompletion(e){return e.state.isCompletionVisible&&!e.state.hasRejectedCurrentCompletion&&!e.state.isCompletionAccepted&&!this.isAcceptanceKey(e.event)}isAcceptanceKey(e){return Object.values(dE).some(t=>t(this.monaco,e))}},fE=(e,t,n,r)=>{let i=new pE(e,n,r);return t.onKeyDown(s=>i.handleKeyEvent(s))},g1=(e,t,n)=>{let r=[];aE(t,lE(n)),t.updateOptions({inlineSuggest:{enabled:!0}});try{let i=xl(t);if(!i)return $a.warn("Completion is not registered properly. State not found."),mE();let s=uE(e,t,n);s&&r.push(s);let a=fE(e,t,i,n);return r.push(a),{deregister:()=>{for(let l of r)l.dispose();Ou.clear(),Tm(t)},trigger:()=>hE(t),updateOptions:l=>{cE(t,l(i.options||n))}}}catch(i){return n.onError?n.onError(i):$a.report(i),{deregister:()=>{for(let s of r)s.dispose();Tm(t)},trigger:()=>{},updateOptions:()=>{}}}},hE=e=>{let t=xl(e);if(!t){$a.warn("Completion is not registered. Use `registerCompletion` to register completion first.");return}t.isExplicitlyTriggered=!0,e.trigger("keyboard","editor.action.inlineSuggest.trigger",{})},mE=()=>({deregister:()=>{},trigger:()=>{},updateOptions:()=>{}});function gE(){return`tool_${Date.now().toString(36)}`}function xE(e){return/^[a-zA-Z0-9_]+$/.test(e)}const yE=`def my_tool(tool_context: ToolContext, param1: str) -> dict:
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
`;function vE({onSelectTool:e}){const{project:t,updateProject:n,addCustomTool:r,updateCustomTool:i,removeCustomTool:s,selectedToolId:a,setSelectedToolId:l,builtinTools:c,mcpServers:u}=ht(),[d,p]=k.useState(""),[f,h]=k.useState(null),[g,v]=k.useState("tools"),[_,m]=k.useState(null),[x,y]=k.useState(""),[j,A]=k.useState(!1),[S,P]=k.useState(!1),[N,V]=k.useState(!1),[E,I]=k.useState(null),[R,q]=k.useState(null),[T,O]=k.useState({}),[D,C]=k.useState({}),[L,M]=k.useState("");if(!t)return null;const w=t.mcp_servers||[],H=t.custom_tools.find(G=>G.id===a),K=w.find(G=>G.name===_);function b(G){l(G),e==null||e(G)}k.useEffect(()=>{H&&(p(H.code),q(null))},[a]),k.useEffect(()=>{K&&(y(JSON.stringify(K,null,2)),A(!1))},[_]),k.useEffect(()=>{if(!t)return;const G=z(t.mcp_servers||[]);M(JSON.stringify(G,null,2))},[t==null?void 0:t.mcp_servers]),k.useEffect(()=>{if(g==="mcp"&&w.length>0){const G=w.filter(te=>!T[te.name]||T[te.name]==="unknown");G.length>0&&G.forEach(te=>{le(te.name)})}},[g,w.length]);function z(G){const te={};for(const ue of G){const xe={};ue.connection_type==="stdio"?(xe.command=ue.command||"",xe.args=ue.args||[],Object.keys(ue.env||{}).length>0&&(xe.env=ue.env)):ue.connection_type==="sse"&&(xe.url=ue.url||"",Object.keys(ue.headers||{}).length>0&&(xe.headers=ue.headers)),ue.timeout&&ue.timeout!==30&&(xe.timeout=ue.timeout),ue.tool_filter&&(xe.tool_filter=ue.tool_filter),ue.tool_name_prefix&&(xe.tool_name_prefix=ue.tool_name_prefix),te[ue.name]=xe}return{mcpServers:te}}function F(G){const te=[];for(const[ue,xe]of Object.entries(G.mcpServers||{})){const X={name:ue,description:xe.description||"",connection_type:xe.url?"sse":"stdio",command:xe.command,args:xe.args||[],env:xe.env||{},url:xe.url,headers:xe.headers||{},timeout:xe.timeout||30,tool_filter:xe.tool_filter||null,tool_name_prefix:xe.tool_name_prefix};te.push(X)}return te}function U(G){G!==void 0&&M(G)}function ee(){try{const G=JSON.parse(L),te=F(G);n({mcp_servers:te})}catch(G){alert("Invalid JSON: "+G.message)}}async function le(G){const te=w.find(ue=>ue.name===G);if(te){O(ue=>({...ue,[G]:"testing"})),C(ue=>({...ue,[G]:""}));try{const ue=await ku({connection_type:te.connection_type,command:te.command,args:te.args,env:te.env,url:te.url,headers:te.headers,timeout:te.timeout});O(xe=>({...xe,[G]:ue.success?"connected":"error"})),!ue.success&&ue.error&&C(xe=>({...xe,[G]:ue.error||"Unknown error"}))}catch(ue){O(xe=>({...xe,[G]:"error"})),C(xe=>({...xe,[G]:ue.message}))}}}function Y(G){const te=u.find(xe=>xe.name===G);if(!te)return;if(w.some(xe=>xe.name===G)){alert(`Server "${G}" is already configured`);return}const ue={name:te.name,description:te.description||"",connection_type:te.connection_type,command:te.command,args:te.args||[],env:te.env||{},url:te.url,headers:te.headers||{},timeout:te.timeout||30,tool_filter:te.tool_filter||null,tool_name_prefix:te.tool_name_prefix};n({mcp_servers:[...w,ue]})}async function B(){for(const G of w)await le(G.name)}function $(){const G=gE();r({id:G,name:"new_tool",description:"",module_path:"tools.custom",code:yE,state_keys_used:[]}),b(G)}function J(G,te){te.stopPropagation(),confirm("Delete this tool?")&&(s(G),a===G&&(e==null||e(null)))}function Q(G){H&&(G.name!==void 0&&(G.name===""||xE(G.name)?q(null):q("Name can only contain letters, numbers, and underscores")),i(H.id,G))}function ne(G){G!==void 0&&H&&(p(G),Q({code:G}))}async function me(){if(H){P(!0);try{const G=await ev(t.id,H.name,H.description,H.state_keys_used);G.success&&G.code?(p(G.code),Q({code:G.code})):(console.error("Failed to generate tool code:",G.error),alert("Failed to generate tool code: "+(G.error||"Unknown error")))}catch(G){console.error("Error generating tool code:",G),alert("Error generating tool code: "+G.message)}finally{P(!1)}}}const ve=k.useRef(null),Z=k.useCallback((G,te)=>{if(ve.current&&typeof ve.current=="function")try{ve.current()}catch{}try{const ue=g1(te,G,{language:"python",endpoint:"/api/code-completion",trigger:"onTyping"});typeof ue=="function"?ve.current=ue:ve.current=null}catch{ve.current=null}},[]);k.useEffect(()=>()=>{if(ve.current&&typeof ve.current=="function")try{ve.current()}catch{}},[]);function ce(G){G!==void 0&&(y(G),A(G!==JSON.stringify(K,null,2)))}function be(){if(K)try{const G=JSON.parse(x),te=K.name,ue=w.map(xe=>xe.name===te?G:xe);n({mcp_servers:ue}),m(G.name),A(!1)}catch(G){alert("Invalid JSON: "+G.message)}}async function ae(){V(!0),I(null);try{const G=JSON.parse(x),te=await ku({connection_type:G.connection_type,command:G.command,args:G.args,env:G.env,url:G.url,headers:G.headers,timeout:G.timeout||30});if(I(te),te.success&&te.tools.length>0){const ue={...G,tool_filter:te.tools.map(xe=>xe.name)};y(JSON.stringify(ue,null,2)),A(!0)}}catch(G){I({success:!1,tools:[],error:G.message})}finally{V(!1)}}const _e={};return t.custom_tools.forEach(G=>{const te=G.module_path||"tools";_e[te]||(_e[te]=[]),_e[te].push(G)}),o.jsxs("div",{className:"tools-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("aside",{className:"tools-sidebar",children:[o.jsxs("div",{className:"sidebar-tabs",children:[o.jsxs("button",{className:`sidebar-tab ${g==="tools"?"active":""}`,onClick:()=>{v("tools"),m(null)},children:[o.jsx(dn,{size:14}),"Tools"]}),o.jsxs("button",{className:`sidebar-tab ${g==="mcp"?"active":""}`,onClick:()=>{v("mcp"),l(null),h(null),m(null)},children:[o.jsx(qi,{size:14}),"MCP"]})]}),g==="tools"?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["Custom Tools (",t.custom_tools.length,")"]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:$,children:[o.jsx(Xe,{size:14}),"New"]})]}),o.jsxs("div",{className:"tools-tree",children:[c.length>0&&o.jsxs("div",{className:"module-group",children:[o.jsxs("div",{className:"module-header",children:[o.jsx(y_,{size:14}),"Built-in Tools"]}),c.map(G=>o.jsxs("div",{className:`tool-item builtin ${(f==null?void 0:f.name)===G.name?"selected":""}`,onClick:()=>{h(G),b(null),m(null)},children:[o.jsx(ju,{size:14}),o.jsx("span",{className:"tool-name",children:G.name})]},G.name))]}),t.custom_tools.length===0&&c.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(jn,{size:32}),o.jsx("p",{children:"No tools defined yet"})]}):t.custom_tools.length>0&&Object.entries(_e).map(([G,te])=>o.jsxs("div",{className:"module-group",children:[o.jsxs("div",{className:"module-header",children:[o.jsx(dv,{size:14}),G]}),te.map(ue=>o.jsxs("div",{className:`tool-item ${a===ue.id?"selected":""}`,onClick:()=>{b(ue.id),h(null),m(null)},children:[o.jsx(dn,{size:14}),o.jsx("span",{className:"tool-name",children:ue.name}),o.jsx("button",{className:"delete-btn",onClick:xe=>J(ue.id,xe),children:o.jsx(Ue,{size:14})})]},ue.id))]},G))]})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["MCP Servers (",w.length,")"]}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:B,title:"Test all server connections",children:o.jsx(Xt,{size:14})})]}),o.jsx("div",{className:"mcp-servers-list",children:w.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(qi,{size:32}),o.jsx("p",{children:"No MCP servers configured"}),o.jsx("p",{style:{fontSize:"12px",color:"var(--text-muted)"},children:"Edit the JSON to add servers"})]}):w.map(G=>{const te=T[G.name]||"unknown",ue=D[G.name];return o.jsxs("div",{className:"mcp-server-item-wrapper",children:[o.jsxs("div",{className:"mcp-server-item",children:[o.jsxs("div",{className:"mcp-server-info",children:[o.jsx(qi,{size:14}),o.jsx("span",{className:"mcp-server-name",children:G.name}),o.jsxs("span",{className:`mcp-status-badge ${te}`,children:[te==="testing"?o.jsx(Zn,{size:10,className:"spin"}):null,te==="unknown"&&"●",te==="connected"&&"●",te==="error"&&"●"]})]}),o.jsxs("div",{className:"mcp-server-actions",children:[o.jsx("span",{className:"mcp-server-type",children:G.connection_type}),o.jsxs("button",{className:"btn btn-sm",onClick:()=>le(G.name),disabled:te==="testing",title:"Test server connection",style:{display:"flex",alignItems:"center",gap:4},children:[te==="testing"?o.jsx(Zn,{size:12,className:"spin"}):o.jsx(Xt,{size:12}),o.jsx("span",{style:{fontSize:11},children:"Test"})]})]})]}),te==="error"&&ue&&o.jsxs("div",{className:"mcp-server-error",children:[o.jsx("span",{style:{fontWeight:500,color:"var(--error)"},children:"Error:"})," ",ue]})]},G.name)})})]})]}),o.jsx("div",{className:"tool-editor",children:f?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(ju,{size:20,style:{color:"var(--accent-secondary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:f.name}),o.jsx("span",{className:"badge badge-muted",children:"Built-in"})]}),o.jsxs("div",{className:"builtin-tool-info",children:[o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("p",{children:f.description||"No description available."})]}),o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Usage"}),o.jsx("p",{children:"This is a built-in tool provided by ADK. Add it to any LLM agent's tools list to enable it."}),o.jsxs("code",{children:['tools: ["',f.name,'"]']})]}),o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Note"}),o.jsx("p",{children:"Built-in tools are read-only and cannot be modified. Create a custom tool if you need different behavior."})]})]})]}):H?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(dn,{size:20,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o.jsx("input",{type:"text",value:H.name,onChange:G=>Q({name:G.target.value}),placeholder:"Tool name",style:{borderColor:R?"var(--error)":void 0}}),R&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:R})]})]}),o.jsxs("div",{className:"editor-meta",children:[o.jsxs("div",{className:"meta-field grow",children:[o.jsx("label",{children:"Description"}),o.jsx("input",{type:"text",value:H.description,onChange:G=>Q({description:G.target.value}),placeholder:"What does this tool do?"})]}),o.jsxs("div",{className:"meta-field",children:[o.jsx("label",{children:"Module Path"}),o.jsx("input",{type:"text",value:H.module_path,onChange:G=>Q({module_path:G.target.value}),placeholder:"tools.custom",style:{width:180}})]})]}),o.jsxs("div",{className:"code-actions",children:[o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:me,disabled:S||!H.name||!H.description,title:!H.name||!H.description?"Add a name and description first":"Generate code using AI",children:S?o.jsxs(o.Fragment,{children:[o.jsx(Zn,{size:14,className:"spinning"}),"Generating..."]}):o.jsxs(o.Fragment,{children:[o.jsx(Qd,{size:14}),"Write Tool"]})}),o.jsx("span",{className:"action-hint",children:"AI will generate code based on the tool name, description, and selected state keys"})]}),o.jsx("div",{className:"code-editor",children:o.jsx(Zt,{height:"100%",language:"python",theme:"vs-dark",value:d,onChange:ne,onMount:Z,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12}}})}),o.jsxs("div",{className:"state-keys-panel",children:[o.jsxs("h4",{children:[o.jsx(Gd,{size:14})," State Keys Used"]}),o.jsx("div",{className:"state-key-chips",children:t.app.state_keys.length===0?o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"No state keys defined. Add them in App Config."}):t.app.state_keys.map(G=>{const te=H.state_keys_used.includes(G.name);return o.jsxs("label",{className:`state-key-chip ${te?"selected":""}`,title:G.description,children:[o.jsx("input",{type:"checkbox",checked:te,onChange:ue=>{const xe=ue.target.checked?[...H.state_keys_used,G.name]:H.state_keys_used.filter(X=>X!==G.name);Q({state_keys_used:xe})}}),G.name,o.jsxs("span",{style:{color:"var(--text-muted)",fontSize:11},children:["(",G.type,")"]})]},G.name)})})]})]}):K?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(qi,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:K.name}),o.jsx("span",{className:"badge badge-info",children:K.connection_type}),j&&o.jsx("span",{className:"unsaved-badge",children:"Unsaved"}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:ae,disabled:N,title:"Test connection and discover available tools",children:[N?o.jsx(Zn,{size:14,className:"spin"}):o.jsx(Kd,{size:14}),N?"Testing...":"Test Connection"]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:be,disabled:!j,children:[o.jsx(La,{size:14}),"Save"]})]}),E&&o.jsx("div",{className:`mcp-test-result ${E.success?"success":"error"}`,children:E.success?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"test-result-header",children:["✓ Connected! Found ",E.tools.length," tools"]}),E.tools.length>0&&o.jsxs("div",{className:"test-result-tools",children:[o.jsx("strong",{children:"Available tools:"}),o.jsx("ul",{children:E.tools.map(G=>o.jsxs("li",{children:[o.jsx("code",{children:G.name}),G.description&&o.jsxs("span",{children:[" — ",G.description]})]},G.name))}),o.jsx("p",{className:"hint",children:'The tool_filter has been updated with these tools. Click "Save" to apply.'})]})]}):o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"test-result-header",children:"✗ Connection failed"}),o.jsx("div",{className:"test-result-error",children:E.error})]})}),o.jsx("div",{className:"mcp-info",children:o.jsx("p",{children:'Configure your MCP server using JSON. Click "Test Connection" to verify and discover available tools.'})}),o.jsx("div",{className:"code-editor",children:o.jsx(Zt,{height:"100%",language:"json",theme:"vs-dark",value:x,onChange:ce,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},formatOnPaste:!0}})}),o.jsxs("div",{className:"mcp-help",children:[o.jsx("h4",{children:"Schema Reference"}),o.jsxs("div",{className:"schema-fields",children:[o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"name"}),o.jsx("span",{children:"Unique identifier for this server"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"description"}),o.jsx("span",{children:"Human-readable description"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"connection_type"}),o.jsx("span",{children:'"stdio" | "sse" | "http"'})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"command"}),o.jsx("span",{children:"Command to run (for stdio)"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"args"}),o.jsx("span",{children:"Array of command arguments"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"env"}),o.jsx("span",{children:"Environment variables object"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"url"}),o.jsx("span",{children:"Server URL (for sse/http)"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"tool_filter"}),o.jsx("span",{children:"Array of tool names to include (null/omit = all tools, [] = no tools)"})]})]})]})]}):g==="mcp"?o.jsxs("div",{className:"mcp-json-editor",children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(qi,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:"mcp.json"}),o.jsx("span",{className:"badge badge-muted",children:"Model Context Protocol"}),o.jsxs("select",{value:"",onChange:G=>{G.target.value&&Y(G.target.value)},style:{padding:"6px 10px",fontSize:"12px",borderRadius:"6px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",color:"var(--text-primary)"},children:[o.jsx("option",{value:"",children:"+ Add known server..."}),u.filter(G=>!w.some(te=>te.name===G.name)).map(G=>o.jsxs("option",{value:G.name,children:[G.name," - ",G.description||"No description"]},G.name))]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:ee,children:[o.jsx(La,{size:14}),"Apply Changes"]})]}),o.jsx("div",{className:"mcp-json-info",children:o.jsxs("p",{children:["Configure your MCP servers using the standard ",o.jsx("code",{children:"mcp.json"})," format. Select a known server from the dropdown to add its configuration."]})}),o.jsx("div",{className:"editor-content",style:{flex:1},children:o.jsx(Zt,{height:"100%",defaultLanguage:"json",value:L,onChange:U,theme:"vs-dark",options:{minimap:{enabled:!1},fontSize:14,lineNumbers:"on",scrollBeyondLastLine:!1,wordWrap:"on",tabSize:2,formatOnPaste:!0,formatOnType:!0}})})]}):o.jsxs("div",{className:"empty-state",children:[o.jsx(jn,{size:48}),o.jsxs("p",{children:["Select a tool to view",o.jsx("br",{}),"or create a new custom tool"]})]})})]})}function bE(){return`callback_${Date.now().toString(36)}`}function Am(e){return/^[a-zA-Z0-9_]+$/.test(e)}function x1(e){switch(e){case"before_agent":case"after_agent":return`from google.adk.agents.callback_context import CallbackContext
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
`;default:return x1("before_agent")}}function wE({onSelectCallback:e}){var N,V;const{project:t,updateProject:n,addCustomCallback:r,updateCustomCallback:i,removeCustomCallback:s}=ht(),[a,l]=k.useState(""),[c,u]=k.useState(null),[d,p]=k.useState(null),[f,h]=k.useState(!1),g=k.useRef(null);if(!t)return null;const v=t.custom_callbacks||[],_=v.find(E=>E.id===c);function m(E){u(E),e==null||e(E)}k.useEffect(()=>{_?(l(_.code),p(null)):l("")},[c,_]);function x(){const E=bE(),I="new_callback",R={id:E,name:I,description:"",module_path:`callbacks.${I}`,code:x1("before_agent"),state_keys_used:[]};r(R),m(E)}function y(E,I){I.stopPropagation(),confirm("Delete this callback?")&&(s(E),c===E&&(e==null||e(null),u(null),l("")))}function j(){if(!c)return;const E=v.find(q=>q.id===c);if(!E)return;const I=E.name.trim();if(!I){alert("Please enter a name");return}if(!Am(I)){p("Name must contain only alphanumeric characters and underscores");return}if(v.find(q=>q.name===I&&q.id!==E.id)){p("A callback with this name already exists");return}i(E.id,{code:a,name:I,description:E.description,module_path:`callbacks.${I}`,state_keys_used:E.state_keys_used}),p(null)}function A(E,I){g.current=I;try{g1(I,{endpoint:"/api/code-completion",language:"python"})}catch(R){console.warn("Failed to register Monacopilot completion:",R)}}async function S(){if(_){h(!0);try{let E="before_agent";const I=_.name.toLowerCase(),R=_.description.toLowerCase();I.includes("after_agent")||R.includes("after agent")?E="after_agent":I.includes("before_model")||R.includes("before model")?E="before_model":I.includes("after_model")||R.includes("after model")?E="after_model":I.includes("before_tool")||R.includes("before tool")?E="before_tool":I.includes("after_tool")||R.includes("after tool")?E="after_tool":(I.includes("before_agent")||R.includes("before agent"))&&(E="before_agent");const q=await tv(t.id,_.name,_.description,E,_.state_keys_used);q.success&&q.code?(l(q.code),i(_.id,{code:q.code})):(console.error("Failed to generate callback code:",q.error),alert("Failed to generate callback code: "+(q.error||"Unknown error")))}catch(E){console.error("Error generating callback code:",E),alert("Error generating callback code: "+E.message)}finally{h(!1)}}}const P=((V=(N=t.app)==null?void 0:N.state_keys)==null?void 0:V.map(E=>E.name))||[];return o.jsxs("div",{className:"tools-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"tools-sidebar",children:[o.jsxs("div",{className:"tools-sidebar-header",children:[o.jsx("h3",{children:"Callbacks"}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:x,title:"Add Callback",children:o.jsx(Xe,{size:16})})]}),o.jsx("div",{className:"tools-list",children:v.length===0?o.jsx("div",{style:{padding:"16px",color:"var(--text-secondary)",fontSize:"14px"},children:"No callbacks yet. Click + to add one."}):v.map(E=>o.jsxs("div",{className:`tool-item ${c===E.id?"selected":""}`,onClick:()=>m(E.id),children:[o.jsxs("div",{style:{flex:1},children:[o.jsx("div",{className:"tool-item-name",children:E.name}),E.description&&o.jsx("div",{className:"tool-item-type",style:{fontSize:"11px",color:"var(--text-secondary)",marginTop:"2px"},children:E.description})]}),o.jsx("div",{className:"tool-item-actions",children:o.jsx("button",{className:"btn btn-icon btn-sm",onClick:I=>y(E.id,I),title:"Delete",children:o.jsx(Ue,{size:14})})})]},E.id))})]}),o.jsx("div",{className:"tools-editor",children:_?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"tools-editor-header",children:[o.jsx("h3",{children:"Edit Callback"}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:j,children:[o.jsx(La,{size:16,style:{marginRight:"6px"}}),"Save"]})]}),o.jsxs("div",{className:"tools-editor-content",style:{padding:"16px",overflowY:"auto"},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Name"}),o.jsx("input",{type:"text",value:_.name,onChange:E=>{const I=E.target.value;i(_.id,{name:I,module_path:`callbacks.${I.trim()||"callback"}`}),d&&Am(I)&&p(null)},className:d?"error":""}),d&&o.jsx("div",{className:"error-message",children:d})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Description"}),o.jsx("textarea",{value:_.description,onChange:E=>i(_.id,{description:E.target.value}),rows:2,placeholder:"Describe what this callback does..."})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Module Path"}),o.jsx("input",{type:"text",value:_.module_path,onChange:E=>i(_.id,{module_path:E.target.value}),placeholder:"callbacks.custom"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"State Keys Used"}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"8px"},children:P.map(E=>{const I=_.state_keys_used.includes(E);return o.jsxs("button",{type:"button",className:`btn btn-sm ${I?"btn-primary":"btn-secondary"}`,onClick:()=>{const R=I?_.state_keys_used.filter(q=>q!==E):[..._.state_keys_used,E];i(_.id,{state_keys_used:R})},children:[o.jsx(Gd,{size:12,style:{marginRight:"4px"}}),E]},E)})}),P.length===0&&o.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"12px",marginTop:"4px"},children:"No state keys defined in App Config"})]}),o.jsxs("div",{className:"form-group",children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[o.jsx("label",{children:"Code"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:S,disabled:f||!_.name,title:_.name?"Generate code using AI":"Add a name first",children:f?o.jsxs(o.Fragment,{children:[o.jsx(Zn,{size:14,className:"spinning"}),"Generating..."]}):o.jsxs(o.Fragment,{children:[o.jsx(Qd,{size:14}),"Generate"]})})]}),o.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"8px"},children:"AI will generate code based on the callback name, description, and selected state keys"}),o.jsx("div",{className:"code-editor-container",children:o.jsx(Zt,{height:"100%",language:"python",theme:"vs-dark",value:a,onChange:E=>l(E||""),onMount:A,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0}})})]})]})]}):o.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)"},children:"Select a callback to edit, or create a new one"})})]})}function kE(e){try{const t=new URL(e),n=t.host,r=t.pathname,i=[{pattern:n,label:`${n} (exact domain)`},{pattern:`${n}/*`,label:`${n}/* (domain + any path)`}],s=n.split(".");if(s.length>2){const a=s.slice(-2).join(".");i.push({pattern:`*.${a}`,label:`*.${a} (all subdomains)`})}if(r&&r!=="/"){const a=r.split("/").filter(Boolean);a.length>0&&i.push({pattern:`${n}/${a[0]}/*`,label:`${n}/${a[0]}/* (specific path)`})}return i}catch{return[{pattern:e,label:e}]}}const Le={overlay:{position:"fixed",inset:0,backgroundColor:"rgba(0, 0, 0, 0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999},dialog:{backgroundColor:"#12121a",border:"1px solid rgba(245, 158, 11, 0.5)",borderRadius:8,boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.5)",width:500,maxWidth:"90vw",overflow:"hidden"},header:{display:"flex",alignItems:"center",gap:8,padding:12,borderBottom:"1px solid #374151",backgroundColor:"rgba(120, 53, 15, 0.2)"},headerIcon:{color:"#fbbf24"},headerTitle:{fontWeight:600,color:"#fcd34d",fontSize:14},closeButton:{marginLeft:"auto",background:"none",border:"none",color:"#6b7280",cursor:"pointer",padding:4,display:"flex",alignItems:"center"},content:{padding:16,display:"flex",flexDirection:"column",gap:16},sourceText:{fontSize:13,color:"#9ca3af"},requestBox:{backgroundColor:"#0a0a0f",borderRadius:6,border:"1px solid #374151",padding:12,fontFamily:"'SF Mono', 'Consolas', monospace",fontSize:13},methodBadge:e=>({fontWeight:700,color:e==="POST"?"#4ade80":e==="GET"?"#60a5fa":"#9ca3af",marginRight:8}),urlText:{color:"#d1d5db",wordBreak:"break-all"},headersText:{marginTop:8,fontSize:11,color:"#6b7280"},label:{fontSize:13,color:"#9ca3af",marginBottom:6},select:{width:"100%",padding:"10px 12px",backgroundColor:"#1a1a24",border:"1px solid #4b5563",borderRadius:6,fontSize:13,color:"#e5e7eb",cursor:"pointer",appearance:"none",backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 12px center",paddingRight:36},customInput:{width:"100%",padding:"10px 12px",backgroundColor:"#1a1a24",border:"1px solid #4b5563",borderRadius:6,fontSize:13,color:"#e5e7eb",fontFamily:"'SF Mono', 'Consolas', monospace"},radioGroup:{display:"flex",gap:16,marginTop:8},radioLabel:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"#9ca3af",cursor:"pointer"},backLink:{marginLeft:"auto",fontSize:12,color:"#6b7280",background:"none",border:"none",cursor:"pointer"},checkboxLabel:{display:"flex",alignItems:"center",gap:8,fontSize:13,color:"#9ca3af",cursor:"pointer"},footer:{display:"flex",alignItems:"center",gap:8,padding:12,borderTop:"1px solid #374151",backgroundColor:"#0a0a0f"},button:e=>{const t={display:"flex",alignItems:"center",gap:6,padding:"8px 16px",borderRadius:6,fontSize:13,fontWeight:500,cursor:"pointer",border:"1px solid",transition:"all 0.15s ease"};switch(e){case"deny":return{...t,backgroundColor:"rgba(220, 38, 38, 0.2)",borderColor:"rgba(239, 68, 68, 0.5)",color:"#f87171"};case"once":return{...t,backgroundColor:"rgba(75, 85, 99, 0.2)",borderColor:"rgba(107, 114, 128, 0.5)",color:"#d1d5db"};case"pattern":return{...t,backgroundColor:"rgba(22, 163, 74, 0.2)",borderColor:"rgba(34, 197, 94, 0.5)",color:"#4ade80"}}},timerContainer:{marginLeft:"auto",display:"flex",alignItems:"center",gap:6,color:"#6b7280",fontSize:13},progressBar:{height:3,backgroundColor:"#1f2937"},progressFill:e=>({height:"100%",backgroundColor:"#f59e0b",transition:"width 1s linear",width:`${e}%`})};function _E({request:e,timeout:t,onApprove:n,onDeny:r,onClose:i}){const[s,a]=k.useState(""),[l,c]=k.useState("exact"),[u,d]=k.useState(!1),[p,f]=k.useState(""),[h,g]=k.useState(!1),[v,_]=k.useState(t),m=kE(e.url);k.useEffect(()=>{m.length>0&&!s&&a(m[0].pattern)},[m,s]),k.useEffect(()=>{const P=setInterval(()=>{_(N=>N<=1?(r(),0):N-1)},1e3);return()=>clearInterval(P)},[r]);const x=k.useCallback(()=>{n()},[n]),y=k.useCallback(()=>{n(h?p:s,l,u)},[n,h,p,s,l,u]),j=v/t*100,A=e.source.startsWith("mcp:"),S=A?e.source.substring(4):"agent";return o.jsx("div",{style:Le.overlay,children:o.jsxs("div",{style:Le.dialog,children:[o.jsxs("div",{style:Le.header,children:[o.jsx(cv,{size:18,style:Le.headerIcon}),o.jsx("span",{style:Le.headerTitle,children:"Network Request Approval"}),o.jsx("button",{style:Le.closeButton,onClick:i,children:o.jsx(Ur,{size:16})})]}),o.jsxs("div",{style:Le.content,children:[o.jsx("div",{style:Le.sourceText,children:A?o.jsxs(o.Fragment,{children:['MCP server "',o.jsx("span",{style:{color:"#22d3ee"},children:S}),'" wants to connect to:']}):o.jsx(o.Fragment,{children:"Agent wants to connect to:"})}),o.jsxs("div",{style:Le.requestBox,children:[o.jsxs("div",{children:[o.jsx("span",{style:Le.methodBadge(e.method),children:e.method}),o.jsx("span",{style:Le.urlText,children:e.url})]}),e.headers&&Object.keys(e.headers).length>0&&o.jsxs("div",{style:Le.headersText,children:["Headers: ",Object.keys(e.headers).join(", ")]})]}),o.jsxs("div",{children:[o.jsx("div",{style:Le.label,children:"Allow pattern:"}),h?o.jsxs("div",{children:[o.jsx("input",{type:"text",value:p,onChange:P=>f(P.target.value),placeholder:"e.g., *.example.com/*",style:Le.customInput}),o.jsxs("div",{style:Le.radioGroup,children:[o.jsxs("label",{style:Le.radioLabel,children:[o.jsx("input",{type:"radio",checked:l==="wildcard",onChange:()=>c("wildcard")}),"Wildcard"]}),o.jsxs("label",{style:Le.radioLabel,children:[o.jsx("input",{type:"radio",checked:l==="regex",onChange:()=>c("regex")}),"Regex"]}),o.jsx("button",{onClick:()=>g(!1),style:Le.backLink,children:"← Back to suggestions"})]})]}):o.jsxs("select",{value:s,onChange:P=>{P.target.value==="__custom__"?(g(!0),f(s)):a(P.target.value)},style:Le.select,children:[m.map(P=>o.jsx("option",{value:P.pattern,children:P.label},P.pattern)),o.jsx("option",{value:"__custom__",children:"Custom pattern..."})]})]}),o.jsxs("label",{style:Le.checkboxLabel,children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:u,onChange:P=>d(P.target.checked)}),o.jsx("span",{className:"toggle-slider"})]}),"Save to project (persists across sessions)"]})]}),o.jsxs("div",{style:Le.footer,children:[o.jsxs("button",{onClick:r,style:Le.button("deny"),children:[o.jsx(l_,{size:14}),"Deny"]}),o.jsxs("button",{onClick:x,style:Le.button("once"),children:[o.jsx(qd,{size:14}),"Allow Once"]}),o.jsxs("button",{onClick:y,style:Le.button("pattern"),children:[o.jsx(xv,{size:14}),"Allow Pattern"]}),o.jsxs("div",{style:Le.timerContainer,children:[o.jsx(Fo,{size:14}),o.jsxs("span",{children:[v,"s"]})]})]}),o.jsx("div",{style:Le.progressBar,children:o.jsx("div",{style:Le.progressFill(j)})})]})})}var jE={value:()=>{}};function ss(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new na(n)}function na(e){this._=e}function SE(e,t){return e.trim().split(/^|\s+/).map(function(n){var r="",i=n.indexOf(".");if(i>=0&&(r=n.slice(i+1),n=n.slice(0,i)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}na.prototype=ss.prototype={constructor:na,on:function(e,t){var n=this._,r=SE(e+"",n),i,s=-1,a=r.length;if(arguments.length<2){for(;++s<a;)if((i=(e=r[s]).type)&&(i=CE(n[i],e.name)))return i;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++s<a;)if(i=(e=r[s]).type)n[i]=Pm(n[i],e.name,t);else if(t==null)for(i in n)n[i]=Pm(n[i],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new na(e)},call:function(e,t){if((i=arguments.length-2)>0)for(var n=new Array(i),r=0,i,s;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(s=this._[e],r=0,i=s.length;r<i;++r)s[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],i=0,s=r.length;i<s;++i)r[i].value.apply(t,n)}};function CE(e,t){for(var n=0,r=e.length,i;n<r;++n)if((i=e[n]).name===t)return i.value}function Pm(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=jE,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var $u="http://www.w3.org/1999/xhtml";const Mm={svg:"http://www.w3.org/2000/svg",xhtml:$u,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function yl(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),Mm.hasOwnProperty(t)?{space:Mm[t],local:e}:e}function NE(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===$u&&t.documentElement.namespaceURI===$u?t.createElement(e):t.createElementNS(n,e)}}function EE(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function y1(e){var t=yl(e);return(t.local?EE:NE)(t)}function zE(){}function vp(e){return e==null?zE:function(){return this.querySelector(e)}}function TE(e){typeof e!="function"&&(e=vp(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var s=t[i],a=s.length,l=r[i]=new Array(a),c,u,d=0;d<a;++d)(c=s[d])&&(u=e.call(c,c.__data__,d,s))&&("__data__"in c&&(u.__data__=c.__data__),l[d]=u);return new Wt(r,this._parents)}function AE(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function PE(){return[]}function v1(e){return e==null?PE:function(){return this.querySelectorAll(e)}}function ME(e){return function(){return AE(e.apply(this,arguments))}}function LE(e){typeof e=="function"?e=ME(e):e=v1(e);for(var t=this._groups,n=t.length,r=[],i=[],s=0;s<n;++s)for(var a=t[s],l=a.length,c,u=0;u<l;++u)(c=a[u])&&(r.push(e.call(c,c.__data__,u,a)),i.push(c));return new Wt(r,i)}function b1(e){return function(){return this.matches(e)}}function w1(e){return function(t){return t.matches(e)}}var RE=Array.prototype.find;function IE(e){return function(){return RE.call(this.children,e)}}function OE(){return this.firstElementChild}function $E(e){return this.select(e==null?OE:IE(typeof e=="function"?e:w1(e)))}var DE=Array.prototype.filter;function FE(){return Array.from(this.children)}function BE(e){return function(){return DE.call(this.children,e)}}function UE(e){return this.selectAll(e==null?FE:BE(typeof e=="function"?e:w1(e)))}function VE(e){typeof e!="function"&&(e=b1(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var s=t[i],a=s.length,l=r[i]=[],c,u=0;u<a;++u)(c=s[u])&&e.call(c,c.__data__,u,s)&&l.push(c);return new Wt(r,this._parents)}function k1(e){return new Array(e.length)}function WE(){return new Wt(this._enter||this._groups.map(k1),this._parents)}function Da(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Da.prototype={constructor:Da,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function HE(e){return function(){return e}}function qE(e,t,n,r,i,s){for(var a=0,l,c=t.length,u=s.length;a<u;++a)(l=t[a])?(l.__data__=s[a],r[a]=l):n[a]=new Da(e,s[a]);for(;a<c;++a)(l=t[a])&&(i[a]=l)}function JE(e,t,n,r,i,s,a){var l,c,u=new Map,d=t.length,p=s.length,f=new Array(d),h;for(l=0;l<d;++l)(c=t[l])&&(f[l]=h=a.call(c,c.__data__,l,t)+"",u.has(h)?i[l]=c:u.set(h,c));for(l=0;l<p;++l)h=a.call(e,s[l],l,s)+"",(c=u.get(h))?(r[l]=c,c.__data__=s[l],u.delete(h)):n[l]=new Da(e,s[l]);for(l=0;l<d;++l)(c=t[l])&&u.get(f[l])===c&&(i[l]=c)}function KE(e){return e.__data__}function GE(e,t){if(!arguments.length)return Array.from(this,KE);var n=t?JE:qE,r=this._parents,i=this._groups;typeof e!="function"&&(e=HE(e));for(var s=i.length,a=new Array(s),l=new Array(s),c=new Array(s),u=0;u<s;++u){var d=r[u],p=i[u],f=p.length,h=YE(e.call(d,d&&d.__data__,u,r)),g=h.length,v=l[u]=new Array(g),_=a[u]=new Array(g),m=c[u]=new Array(f);n(d,p,v,_,m,h,t);for(var x=0,y=0,j,A;x<g;++x)if(j=v[x]){for(x>=y&&(y=x+1);!(A=_[y])&&++y<g;);j._next=A||null}}return a=new Wt(a,r),a._enter=l,a._exit=c,a}function YE(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function QE(){return new Wt(this._exit||this._groups.map(k1),this._parents)}function XE(e,t,n){var r=this.enter(),i=this,s=this.exit();return typeof e=="function"?(r=e(r),r&&(r=r.selection())):r=r.append(e+""),t!=null&&(i=t(i),i&&(i=i.selection())),n==null?s.remove():n(s),r&&i?r.merge(i).order():i}function ZE(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,i=n.length,s=r.length,a=Math.min(i,s),l=new Array(i),c=0;c<a;++c)for(var u=n[c],d=r[c],p=u.length,f=l[c]=new Array(p),h,g=0;g<p;++g)(h=u[g]||d[g])&&(f[g]=h);for(;c<i;++c)l[c]=n[c];return new Wt(l,this._parents)}function ez(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],i=r.length-1,s=r[i],a;--i>=0;)(a=r[i])&&(s&&a.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(a,s),s=a);return this}function tz(e){e||(e=nz);function t(p,f){return p&&f?e(p.__data__,f.__data__):!p-!f}for(var n=this._groups,r=n.length,i=new Array(r),s=0;s<r;++s){for(var a=n[s],l=a.length,c=i[s]=new Array(l),u,d=0;d<l;++d)(u=a[d])&&(c[d]=u);c.sort(t)}return new Wt(i,this._parents).order()}function nz(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function rz(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function iz(){return Array.from(this)}function oz(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,s=r.length;i<s;++i){var a=r[i];if(a)return a}return null}function sz(){let e=0;for(const t of this)++e;return e}function az(){return!this.node()}function lz(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var i=t[n],s=0,a=i.length,l;s<a;++s)(l=i[s])&&e.call(l,l.__data__,s,i);return this}function cz(e){return function(){this.removeAttribute(e)}}function uz(e){return function(){this.removeAttributeNS(e.space,e.local)}}function dz(e,t){return function(){this.setAttribute(e,t)}}function pz(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function fz(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function hz(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function mz(e,t){var n=yl(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?uz:cz:typeof t=="function"?n.local?hz:fz:n.local?pz:dz)(n,t))}function _1(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function gz(e){return function(){this.style.removeProperty(e)}}function xz(e,t,n){return function(){this.style.setProperty(e,t,n)}}function yz(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function vz(e,t,n){return arguments.length>1?this.each((t==null?gz:typeof t=="function"?yz:xz)(e,t,n??"")):Si(this.node(),e)}function Si(e,t){return e.style.getPropertyValue(t)||_1(e).getComputedStyle(e,null).getPropertyValue(t)}function bz(e){return function(){delete this[e]}}function wz(e,t){return function(){this[e]=t}}function kz(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function _z(e,t){return arguments.length>1?this.each((t==null?bz:typeof t=="function"?kz:wz)(e,t)):this.node()[e]}function j1(e){return e.trim().split(/^|\s+/)}function bp(e){return e.classList||new S1(e)}function S1(e){this._node=e,this._names=j1(e.getAttribute("class")||"")}S1.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function C1(e,t){for(var n=bp(e),r=-1,i=t.length;++r<i;)n.add(t[r])}function N1(e,t){for(var n=bp(e),r=-1,i=t.length;++r<i;)n.remove(t[r])}function jz(e){return function(){C1(this,e)}}function Sz(e){return function(){N1(this,e)}}function Cz(e,t){return function(){(t.apply(this,arguments)?C1:N1)(this,e)}}function Nz(e,t){var n=j1(e+"");if(arguments.length<2){for(var r=bp(this.node()),i=-1,s=n.length;++i<s;)if(!r.contains(n[i]))return!1;return!0}return this.each((typeof t=="function"?Cz:t?jz:Sz)(n,t))}function Ez(){this.textContent=""}function zz(e){return function(){this.textContent=e}}function Tz(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function Az(e){return arguments.length?this.each(e==null?Ez:(typeof e=="function"?Tz:zz)(e)):this.node().textContent}function Pz(){this.innerHTML=""}function Mz(e){return function(){this.innerHTML=e}}function Lz(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function Rz(e){return arguments.length?this.each(e==null?Pz:(typeof e=="function"?Lz:Mz)(e)):this.node().innerHTML}function Iz(){this.nextSibling&&this.parentNode.appendChild(this)}function Oz(){return this.each(Iz)}function $z(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Dz(){return this.each($z)}function Fz(e){var t=typeof e=="function"?e:y1(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function Bz(){return null}function Uz(e,t){var n=typeof e=="function"?e:y1(e),r=t==null?Bz:typeof t=="function"?t:vp(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function Vz(){var e=this.parentNode;e&&e.removeChild(this)}function Wz(){return this.each(Vz)}function Hz(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function qz(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Jz(e){return this.select(e?qz:Hz)}function Kz(e){return arguments.length?this.property("__data__",e):this.node().__data__}function Gz(e){return function(t){e.call(this,t,this.__data__)}}function Yz(e){return e.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{type:t,name:n}})}function Qz(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,i=t.length,s;n<i;++n)s=t[n],(!e.type||s.type===e.type)&&s.name===e.name?this.removeEventListener(s.type,s.listener,s.options):t[++r]=s;++r?t.length=r:delete this.__on}}}function Xz(e,t,n){return function(){var r=this.__on,i,s=Gz(t);if(r){for(var a=0,l=r.length;a<l;++a)if((i=r[a]).type===e.type&&i.name===e.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=s,i.options=n),i.value=t;return}}this.addEventListener(e.type,s,n),i={type:e.type,name:e.name,value:t,listener:s,options:n},r?r.push(i):this.__on=[i]}}function Zz(e,t,n){var r=Yz(e+""),i,s=r.length,a;if(arguments.length<2){var l=this.node().__on;if(l){for(var c=0,u=l.length,d;c<u;++c)for(i=0,d=l[c];i<s;++i)if((a=r[i]).type===d.type&&a.name===d.name)return d.value}return}for(l=t?Xz:Qz,i=0;i<s;++i)this.each(l(r[i],t,n));return this}function E1(e,t,n){var r=_1(e),i=r.CustomEvent;typeof i=="function"?i=new i(t,n):(i=r.document.createEvent("Event"),n?(i.initEvent(t,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(t,!1,!1)),e.dispatchEvent(i)}function e3(e,t){return function(){return E1(this,e,t)}}function t3(e,t){return function(){return E1(this,e,t.apply(this,arguments))}}function n3(e,t){return this.each((typeof t=="function"?t3:e3)(e,t))}function*r3(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,s=r.length,a;i<s;++i)(a=r[i])&&(yield a)}var z1=[null];function Wt(e,t){this._groups=e,this._parents=t}function as(){return new Wt([[document.documentElement]],z1)}function i3(){return this}Wt.prototype=as.prototype={constructor:Wt,select:TE,selectAll:LE,selectChild:$E,selectChildren:UE,filter:VE,data:GE,enter:WE,exit:QE,join:XE,merge:ZE,selection:i3,order:ez,sort:tz,call:rz,nodes:iz,node:oz,size:sz,empty:az,each:lz,attr:mz,style:vz,property:_z,classed:Nz,text:Az,html:Rz,raise:Oz,lower:Dz,append:Fz,insert:Uz,remove:Wz,clone:Jz,datum:Kz,on:Zz,dispatch:n3,[Symbol.iterator]:r3};function $t(e){return typeof e=="string"?new Wt([[document.querySelector(e)]],[document.documentElement]):new Wt([[e]],z1)}function o3(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Tn(e,t){if(e=o3(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}if(t.getBoundingClientRect){var i=t.getBoundingClientRect();return[e.clientX-i.left-t.clientLeft,e.clientY-i.top-t.clientTop]}}return[e.pageX,e.pageY]}const s3={passive:!1},Vo={capture:!0,passive:!1};function xc(e){e.stopImmediatePropagation()}function hi(e){e.preventDefault(),e.stopImmediatePropagation()}function T1(e){var t=e.document.documentElement,n=$t(e).on("dragstart.drag",hi,Vo);"onselectstart"in t?n.on("selectstart.drag",hi,Vo):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function A1(e,t){var n=e.document.documentElement,r=$t(e).on("dragstart.drag",null);t&&(r.on("click.drag",hi,Vo),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in n?r.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}const Rs=e=>()=>e;function Du(e,{sourceEvent:t,subject:n,target:r,identifier:i,active:s,x:a,y:l,dx:c,dy:u,dispatch:d}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},identifier:{value:i,enumerable:!0,configurable:!0},active:{value:s,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:l,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:d}})}Du.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function a3(e){return!e.ctrlKey&&!e.button}function l3(){return this.parentNode}function c3(e,t){return t??{x:e.x,y:e.y}}function u3(){return navigator.maxTouchPoints||"ontouchstart"in this}function Lm(){var e=a3,t=l3,n=c3,r=u3,i={},s=ss("start","drag","end"),a=0,l,c,u,d,p=0;function f(j){j.on("mousedown.drag",h).filter(r).on("touchstart.drag",_).on("touchmove.drag",m,s3).on("touchend.drag touchcancel.drag",x).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(j,A){if(!(d||!e.call(this,j,A))){var S=y(this,t.call(this,j,A),j,A,"mouse");S&&($t(j.view).on("mousemove.drag",g,Vo).on("mouseup.drag",v,Vo),T1(j.view),xc(j),u=!1,l=j.clientX,c=j.clientY,S("start",j))}}function g(j){if(hi(j),!u){var A=j.clientX-l,S=j.clientY-c;u=A*A+S*S>p}i.mouse("drag",j)}function v(j){$t(j.view).on("mousemove.drag mouseup.drag",null),A1(j.view,u),hi(j),i.mouse("end",j)}function _(j,A){if(e.call(this,j,A)){var S=j.changedTouches,P=t.call(this,j,A),N=S.length,V,E;for(V=0;V<N;++V)(E=y(this,P,j,A,S[V].identifier,S[V]))&&(xc(j),E("start",j,S[V]))}}function m(j){var A=j.changedTouches,S=A.length,P,N;for(P=0;P<S;++P)(N=i[A[P].identifier])&&(hi(j),N("drag",j,A[P]))}function x(j){var A=j.changedTouches,S=A.length,P,N;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),P=0;P<S;++P)(N=i[A[P].identifier])&&(xc(j),N("end",j,A[P]))}function y(j,A,S,P,N,V){var E=s.copy(),I=Tn(V||S,A),R,q,T;if((T=n.call(j,new Du("beforestart",{sourceEvent:S,target:f,identifier:N,active:a,x:I[0],y:I[1],dx:0,dy:0,dispatch:E}),P))!=null)return R=T.x-I[0]||0,q=T.y-I[1]||0,function O(D,C,L){var M=I,w;switch(D){case"start":i[N]=O,w=a++;break;case"end":delete i[N],--a;case"drag":I=Tn(L||C,A),w=a;break}E.call(D,j,new Du(D,{sourceEvent:C,subject:T,target:f,identifier:N,active:w,x:I[0]+R,y:I[1]+q,dx:I[0]-M[0],dy:I[1]-M[1],dispatch:E}),P)}}return f.filter=function(j){return arguments.length?(e=typeof j=="function"?j:Rs(!!j),f):e},f.container=function(j){return arguments.length?(t=typeof j=="function"?j:Rs(j),f):t},f.subject=function(j){return arguments.length?(n=typeof j=="function"?j:Rs(j),f):n},f.touchable=function(j){return arguments.length?(r=typeof j=="function"?j:Rs(!!j),f):r},f.on=function(){var j=s.on.apply(s,arguments);return j===s?f:j},f.clickDistance=function(j){return arguments.length?(p=(j=+j)*j,f):Math.sqrt(p)},f}function wp(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function P1(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function ls(){}var Wo=.7,Fa=1/Wo,mi="\\s*([+-]?\\d+)\\s*",Ho="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",_n="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",d3=/^#([0-9a-f]{3,8})$/,p3=new RegExp(`^rgb\\(${mi},${mi},${mi}\\)$`),f3=new RegExp(`^rgb\\(${_n},${_n},${_n}\\)$`),h3=new RegExp(`^rgba\\(${mi},${mi},${mi},${Ho}\\)$`),m3=new RegExp(`^rgba\\(${_n},${_n},${_n},${Ho}\\)$`),g3=new RegExp(`^hsl\\(${Ho},${_n},${_n}\\)$`),x3=new RegExp(`^hsla\\(${Ho},${_n},${_n},${Ho}\\)$`),Rm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};wp(ls,qo,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Im,formatHex:Im,formatHex8:y3,formatHsl:v3,formatRgb:Om,toString:Om});function Im(){return this.rgb().formatHex()}function y3(){return this.rgb().formatHex8()}function v3(){return M1(this).formatHsl()}function Om(){return this.rgb().formatRgb()}function qo(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=d3.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?$m(t):n===3?new Ct(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Is(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Is(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=p3.exec(e))?new Ct(t[1],t[2],t[3],1):(t=f3.exec(e))?new Ct(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=h3.exec(e))?Is(t[1],t[2],t[3],t[4]):(t=m3.exec(e))?Is(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=g3.exec(e))?Bm(t[1],t[2]/100,t[3]/100,1):(t=x3.exec(e))?Bm(t[1],t[2]/100,t[3]/100,t[4]):Rm.hasOwnProperty(e)?$m(Rm[e]):e==="transparent"?new Ct(NaN,NaN,NaN,0):null}function $m(e){return new Ct(e>>16&255,e>>8&255,e&255,1)}function Is(e,t,n,r){return r<=0&&(e=t=n=NaN),new Ct(e,t,n,r)}function b3(e){return e instanceof ls||(e=qo(e)),e?(e=e.rgb(),new Ct(e.r,e.g,e.b,e.opacity)):new Ct}function Fu(e,t,n,r){return arguments.length===1?b3(e):new Ct(e,t,n,r??1)}function Ct(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}wp(Ct,Fu,P1(ls,{brighter(e){return e=e==null?Fa:Math.pow(Fa,e),new Ct(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Wo:Math.pow(Wo,e),new Ct(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Ct(Tr(this.r),Tr(this.g),Tr(this.b),Ba(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Dm,formatHex:Dm,formatHex8:w3,formatRgb:Fm,toString:Fm}));function Dm(){return`#${Sr(this.r)}${Sr(this.g)}${Sr(this.b)}`}function w3(){return`#${Sr(this.r)}${Sr(this.g)}${Sr(this.b)}${Sr((isNaN(this.opacity)?1:this.opacity)*255)}`}function Fm(){const e=Ba(this.opacity);return`${e===1?"rgb(":"rgba("}${Tr(this.r)}, ${Tr(this.g)}, ${Tr(this.b)}${e===1?")":`, ${e})`}`}function Ba(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Tr(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Sr(e){return e=Tr(e),(e<16?"0":"")+e.toString(16)}function Bm(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new ln(e,t,n,r)}function M1(e){if(e instanceof ln)return new ln(e.h,e.s,e.l,e.opacity);if(e instanceof ls||(e=qo(e)),!e)return new ln;if(e instanceof ln)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),s=Math.max(t,n,r),a=NaN,l=s-i,c=(s+i)/2;return l?(t===s?a=(n-r)/l+(n<r)*6:n===s?a=(r-t)/l+2:a=(t-n)/l+4,l/=c<.5?s+i:2-s-i,a*=60):l=c>0&&c<1?0:a,new ln(a,l,c,e.opacity)}function k3(e,t,n,r){return arguments.length===1?M1(e):new ln(e,t,n,r??1)}function ln(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}wp(ln,k3,P1(ls,{brighter(e){return e=e==null?Fa:Math.pow(Fa,e),new ln(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Wo:Math.pow(Wo,e),new ln(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new Ct(yc(e>=240?e-240:e+120,i,r),yc(e,i,r),yc(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new ln(Um(this.h),Os(this.s),Os(this.l),Ba(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Ba(this.opacity);return`${e===1?"hsl(":"hsla("}${Um(this.h)}, ${Os(this.s)*100}%, ${Os(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Um(e){return e=(e||0)%360,e<0?e+360:e}function Os(e){return Math.max(0,Math.min(1,e||0))}function yc(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const L1=e=>()=>e;function _3(e,t){return function(n){return e+n*t}}function j3(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function S3(e){return(e=+e)==1?R1:function(t,n){return n-t?j3(t,n,e):L1(isNaN(t)?n:t)}}function R1(e,t){var n=t-e;return n?_3(e,n):L1(isNaN(e)?t:e)}const Vm=function e(t){var n=S3(t);function r(i,s){var a=n((i=Fu(i)).r,(s=Fu(s)).r),l=n(i.g,s.g),c=n(i.b,s.b),u=R1(i.opacity,s.opacity);return function(d){return i.r=a(d),i.g=l(d),i.b=c(d),i.opacity=u(d),i+""}}return r.gamma=e,r}(1);function Jn(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}var Bu=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,vc=new RegExp(Bu.source,"g");function C3(e){return function(){return e}}function N3(e){return function(t){return e(t)+""}}function E3(e,t){var n=Bu.lastIndex=vc.lastIndex=0,r,i,s,a=-1,l=[],c=[];for(e=e+"",t=t+"";(r=Bu.exec(e))&&(i=vc.exec(t));)(s=i.index)>n&&(s=t.slice(n,s),l[a]?l[a]+=s:l[++a]=s),(r=r[0])===(i=i[0])?l[a]?l[a]+=i:l[++a]=i:(l[++a]=null,c.push({i:a,x:Jn(r,i)})),n=vc.lastIndex;return n<t.length&&(s=t.slice(n),l[a]?l[a]+=s:l[++a]=s),l.length<2?c[0]?N3(c[0].x):C3(t):(t=c.length,function(u){for(var d=0,p;d<t;++d)l[(p=c[d]).i]=p.x(u);return l.join("")})}var Wm=180/Math.PI,Uu={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function I1(e,t,n,r,i,s){var a,l,c;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(c=e*n+t*r)&&(n-=e*c,r-=t*c),(l=Math.sqrt(n*n+r*r))&&(n/=l,r/=l,c/=l),e*r<t*n&&(e=-e,t=-t,c=-c,a=-a),{translateX:i,translateY:s,rotate:Math.atan2(t,e)*Wm,skewX:Math.atan(c)*Wm,scaleX:a,scaleY:l}}var $s;function z3(e){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?Uu:I1(t.a,t.b,t.c,t.d,t.e,t.f)}function T3(e){return e==null||($s||($s=document.createElementNS("http://www.w3.org/2000/svg","g")),$s.setAttribute("transform",e),!(e=$s.transform.baseVal.consolidate()))?Uu:(e=e.matrix,I1(e.a,e.b,e.c,e.d,e.e,e.f))}function O1(e,t,n,r){function i(u){return u.length?u.pop()+" ":""}function s(u,d,p,f,h,g){if(u!==p||d!==f){var v=h.push("translate(",null,t,null,n);g.push({i:v-4,x:Jn(u,p)},{i:v-2,x:Jn(d,f)})}else(p||f)&&h.push("translate("+p+t+f+n)}function a(u,d,p,f){u!==d?(u-d>180?d+=360:d-u>180&&(u+=360),f.push({i:p.push(i(p)+"rotate(",null,r)-2,x:Jn(u,d)})):d&&p.push(i(p)+"rotate("+d+r)}function l(u,d,p,f){u!==d?f.push({i:p.push(i(p)+"skewX(",null,r)-2,x:Jn(u,d)}):d&&p.push(i(p)+"skewX("+d+r)}function c(u,d,p,f,h,g){if(u!==p||d!==f){var v=h.push(i(h)+"scale(",null,",",null,")");g.push({i:v-4,x:Jn(u,p)},{i:v-2,x:Jn(d,f)})}else(p!==1||f!==1)&&h.push(i(h)+"scale("+p+","+f+")")}return function(u,d){var p=[],f=[];return u=e(u),d=e(d),s(u.translateX,u.translateY,d.translateX,d.translateY,p,f),a(u.rotate,d.rotate,p,f),l(u.skewX,d.skewX,p,f),c(u.scaleX,u.scaleY,d.scaleX,d.scaleY,p,f),u=d=null,function(h){for(var g=-1,v=f.length,_;++g<v;)p[(_=f[g]).i]=_.x(h);return p.join("")}}}var A3=O1(z3,"px, ","px)","deg)"),P3=O1(T3,", ",")",")"),M3=1e-12;function Hm(e){return((e=Math.exp(e))+1/e)/2}function L3(e){return((e=Math.exp(e))-1/e)/2}function R3(e){return((e=Math.exp(2*e))-1)/(e+1)}const I3=function e(t,n,r){function i(s,a){var l=s[0],c=s[1],u=s[2],d=a[0],p=a[1],f=a[2],h=d-l,g=p-c,v=h*h+g*g,_,m;if(v<M3)m=Math.log(f/u)/t,_=function(P){return[l+P*h,c+P*g,u*Math.exp(t*P*m)]};else{var x=Math.sqrt(v),y=(f*f-u*u+r*v)/(2*u*n*x),j=(f*f-u*u-r*v)/(2*f*n*x),A=Math.log(Math.sqrt(y*y+1)-y),S=Math.log(Math.sqrt(j*j+1)-j);m=(S-A)/t,_=function(P){var N=P*m,V=Hm(A),E=u/(n*x)*(V*R3(t*N+A)-L3(A));return[l+E*h,c+E*g,u*V/Hm(t*N+A)]}}return _.duration=m*1e3*t/Math.SQRT2,_}return i.rho=function(s){var a=Math.max(.001,+s),l=a*a,c=l*l;return e(a,l,c)},i}(Math.SQRT2,2,4);var Ci=0,io=0,Qi=0,$1=1e3,Ua,oo,Va=0,Dr=0,vl=0,Jo=typeof performance=="object"&&performance.now?performance:Date,D1=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function kp(){return Dr||(D1(O3),Dr=Jo.now()+vl)}function O3(){Dr=0}function Wa(){this._call=this._time=this._next=null}Wa.prototype=_p.prototype={constructor:Wa,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?kp():+n)+(t==null?0:+t),!this._next&&oo!==this&&(oo?oo._next=this:Ua=this,oo=this),this._call=e,this._time=n,Vu()},stop:function(){this._call&&(this._call=null,this._time=1/0,Vu())}};function _p(e,t,n){var r=new Wa;return r.restart(e,t,n),r}function $3(){kp(),++Ci;for(var e=Ua,t;e;)(t=Dr-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Ci}function qm(){Dr=(Va=Jo.now())+vl,Ci=io=0;try{$3()}finally{Ci=0,F3(),Dr=0}}function D3(){var e=Jo.now(),t=e-Va;t>$1&&(vl-=t,Va=e)}function F3(){for(var e,t=Ua,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:Ua=n);oo=e,Vu(r)}function Vu(e){if(!Ci){io&&(io=clearTimeout(io));var t=e-Dr;t>24?(e<1/0&&(io=setTimeout(qm,e-Jo.now()-vl)),Qi&&(Qi=clearInterval(Qi))):(Qi||(Va=Jo.now(),Qi=setInterval(D3,$1)),Ci=1,D1(qm))}}function Jm(e,t,n){var r=new Wa;return t=t==null?0:+t,r.restart(i=>{r.stop(),e(i+t)},t,n),r}var B3=ss("start","end","cancel","interrupt"),U3=[],F1=0,Km=1,Wu=2,ra=3,Gm=4,Hu=5,ia=6;function bl(e,t,n,r,i,s){var a=e.__transition;if(!a)e.__transition={};else if(n in a)return;V3(e,n,{name:t,index:r,group:i,on:B3,tween:U3,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:F1})}function jp(e,t){var n=fn(e,t);if(n.state>F1)throw new Error("too late; already scheduled");return n}function Cn(e,t){var n=fn(e,t);if(n.state>ra)throw new Error("too late; already running");return n}function fn(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function V3(e,t,n){var r=e.__transition,i;r[t]=n,n.timer=_p(s,0,n.time);function s(u){n.state=Km,n.timer.restart(a,n.delay,n.time),n.delay<=u&&a(u-n.delay)}function a(u){var d,p,f,h;if(n.state!==Km)return c();for(d in r)if(h=r[d],h.name===n.name){if(h.state===ra)return Jm(a);h.state===Gm?(h.state=ia,h.timer.stop(),h.on.call("interrupt",e,e.__data__,h.index,h.group),delete r[d]):+d<t&&(h.state=ia,h.timer.stop(),h.on.call("cancel",e,e.__data__,h.index,h.group),delete r[d])}if(Jm(function(){n.state===ra&&(n.state=Gm,n.timer.restart(l,n.delay,n.time),l(u))}),n.state=Wu,n.on.call("start",e,e.__data__,n.index,n.group),n.state===Wu){for(n.state=ra,i=new Array(f=n.tween.length),d=0,p=-1;d<f;++d)(h=n.tween[d].value.call(e,e.__data__,n.index,n.group))&&(i[++p]=h);i.length=p+1}}function l(u){for(var d=u<n.duration?n.ease.call(null,u/n.duration):(n.timer.restart(c),n.state=Hu,1),p=-1,f=i.length;++p<f;)i[p].call(e,d);n.state===Hu&&(n.on.call("end",e,e.__data__,n.index,n.group),c())}function c(){n.state=ia,n.timer.stop(),delete r[t];for(var u in r)return;delete e.__transition}}function oa(e,t){var n=e.__transition,r,i,s=!0,a;if(n){t=t==null?null:t+"";for(a in n){if((r=n[a]).name!==t){s=!1;continue}i=r.state>Wu&&r.state<Hu,r.state=ia,r.timer.stop(),r.on.call(i?"interrupt":"cancel",e,e.__data__,r.index,r.group),delete n[a]}s&&delete e.__transition}}function W3(e){return this.each(function(){oa(this,e)})}function H3(e,t){var n,r;return function(){var i=Cn(this,e),s=i.tween;if(s!==n){r=n=s;for(var a=0,l=r.length;a<l;++a)if(r[a].name===t){r=r.slice(),r.splice(a,1);break}}i.tween=r}}function q3(e,t,n){var r,i;if(typeof n!="function")throw new Error;return function(){var s=Cn(this,e),a=s.tween;if(a!==r){i=(r=a).slice();for(var l={name:t,value:n},c=0,u=i.length;c<u;++c)if(i[c].name===t){i[c]=l;break}c===u&&i.push(l)}s.tween=i}}function J3(e,t){var n=this._id;if(e+="",arguments.length<2){for(var r=fn(this.node(),n).tween,i=0,s=r.length,a;i<s;++i)if((a=r[i]).name===e)return a.value;return null}return this.each((t==null?H3:q3)(n,e,t))}function Sp(e,t,n){var r=e._id;return e.each(function(){var i=Cn(this,r);(i.value||(i.value={}))[t]=n.apply(this,arguments)}),function(i){return fn(i,r).value[t]}}function B1(e,t){var n;return(typeof t=="number"?Jn:t instanceof qo?Vm:(n=qo(t))?(t=n,Vm):E3)(e,t)}function K3(e){return function(){this.removeAttribute(e)}}function G3(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Y3(e,t,n){var r,i=n+"",s;return function(){var a=this.getAttribute(e);return a===i?null:a===r?s:s=t(r=a,n)}}function Q3(e,t,n){var r,i=n+"",s;return function(){var a=this.getAttributeNS(e.space,e.local);return a===i?null:a===r?s:s=t(r=a,n)}}function X3(e,t,n){var r,i,s;return function(){var a,l=n(this),c;return l==null?void this.removeAttribute(e):(a=this.getAttribute(e),c=l+"",a===c?null:a===r&&c===i?s:(i=c,s=t(r=a,l)))}}function Z3(e,t,n){var r,i,s;return function(){var a,l=n(this),c;return l==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),c=l+"",a===c?null:a===r&&c===i?s:(i=c,s=t(r=a,l)))}}function eT(e,t){var n=yl(e),r=n==="transform"?P3:B1;return this.attrTween(e,typeof t=="function"?(n.local?Z3:X3)(n,r,Sp(this,"attr."+e,t)):t==null?(n.local?G3:K3)(n):(n.local?Q3:Y3)(n,r,t))}function tT(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function nT(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function rT(e,t){var n,r;function i(){var s=t.apply(this,arguments);return s!==r&&(n=(r=s)&&nT(e,s)),n}return i._value=t,i}function iT(e,t){var n,r;function i(){var s=t.apply(this,arguments);return s!==r&&(n=(r=s)&&tT(e,s)),n}return i._value=t,i}function oT(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var r=yl(e);return this.tween(n,(r.local?rT:iT)(r,t))}function sT(e,t){return function(){jp(this,e).delay=+t.apply(this,arguments)}}function aT(e,t){return t=+t,function(){jp(this,e).delay=t}}function lT(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?sT:aT)(t,e)):fn(this.node(),t).delay}function cT(e,t){return function(){Cn(this,e).duration=+t.apply(this,arguments)}}function uT(e,t){return t=+t,function(){Cn(this,e).duration=t}}function dT(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?cT:uT)(t,e)):fn(this.node(),t).duration}function pT(e,t){if(typeof t!="function")throw new Error;return function(){Cn(this,e).ease=t}}function fT(e){var t=this._id;return arguments.length?this.each(pT(t,e)):fn(this.node(),t).ease}function hT(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;Cn(this,e).ease=n}}function mT(e){if(typeof e!="function")throw new Error;return this.each(hT(this._id,e))}function gT(e){typeof e!="function"&&(e=b1(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var s=t[i],a=s.length,l=r[i]=[],c,u=0;u<a;++u)(c=s[u])&&e.call(c,c.__data__,u,s)&&l.push(c);return new Bn(r,this._parents,this._name,this._id)}function xT(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,r=t.length,i=n.length,s=Math.min(r,i),a=new Array(r),l=0;l<s;++l)for(var c=t[l],u=n[l],d=c.length,p=a[l]=new Array(d),f,h=0;h<d;++h)(f=c[h]||u[h])&&(p[h]=f);for(;l<r;++l)a[l]=t[l];return new Bn(a,this._parents,this._name,this._id)}function yT(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function vT(e,t,n){var r,i,s=yT(t)?jp:Cn;return function(){var a=s(this,e),l=a.on;l!==r&&(i=(r=l).copy()).on(t,n),a.on=i}}function bT(e,t){var n=this._id;return arguments.length<2?fn(this.node(),n).on.on(e):this.each(vT(n,e,t))}function wT(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function kT(){return this.on("end.remove",wT(this._id))}function _T(e){var t=this._name,n=this._id;typeof e!="function"&&(e=vp(e));for(var r=this._groups,i=r.length,s=new Array(i),a=0;a<i;++a)for(var l=r[a],c=l.length,u=s[a]=new Array(c),d,p,f=0;f<c;++f)(d=l[f])&&(p=e.call(d,d.__data__,f,l))&&("__data__"in d&&(p.__data__=d.__data__),u[f]=p,bl(u[f],t,n,f,u,fn(d,n)));return new Bn(s,this._parents,t,n)}function jT(e){var t=this._name,n=this._id;typeof e!="function"&&(e=v1(e));for(var r=this._groups,i=r.length,s=[],a=[],l=0;l<i;++l)for(var c=r[l],u=c.length,d,p=0;p<u;++p)if(d=c[p]){for(var f=e.call(d,d.__data__,p,c),h,g=fn(d,n),v=0,_=f.length;v<_;++v)(h=f[v])&&bl(h,t,n,v,f,g);s.push(f),a.push(d)}return new Bn(s,a,t,n)}var ST=as.prototype.constructor;function CT(){return new ST(this._groups,this._parents)}function NT(e,t){var n,r,i;return function(){var s=Si(this,e),a=(this.style.removeProperty(e),Si(this,e));return s===a?null:s===n&&a===r?i:i=t(n=s,r=a)}}function U1(e){return function(){this.style.removeProperty(e)}}function ET(e,t,n){var r,i=n+"",s;return function(){var a=Si(this,e);return a===i?null:a===r?s:s=t(r=a,n)}}function zT(e,t,n){var r,i,s;return function(){var a=Si(this,e),l=n(this),c=l+"";return l==null&&(c=l=(this.style.removeProperty(e),Si(this,e))),a===c?null:a===r&&c===i?s:(i=c,s=t(r=a,l))}}function TT(e,t){var n,r,i,s="style."+t,a="end."+s,l;return function(){var c=Cn(this,e),u=c.on,d=c.value[s]==null?l||(l=U1(t)):void 0;(u!==n||i!==d)&&(r=(n=u).copy()).on(a,i=d),c.on=r}}function AT(e,t,n){var r=(e+="")=="transform"?A3:B1;return t==null?this.styleTween(e,NT(e,r)).on("end.style."+e,U1(e)):typeof t=="function"?this.styleTween(e,zT(e,r,Sp(this,"style."+e,t))).each(TT(this._id,e)):this.styleTween(e,ET(e,r,t),n).on("end.style."+e,null)}function PT(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function MT(e,t,n){var r,i;function s(){var a=t.apply(this,arguments);return a!==i&&(r=(i=a)&&PT(e,a,n)),r}return s._value=t,s}function LT(e,t,n){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,MT(e,t,n??""))}function RT(e){return function(){this.textContent=e}}function IT(e){return function(){var t=e(this);this.textContent=t??""}}function OT(e){return this.tween("text",typeof e=="function"?IT(Sp(this,"text",e)):RT(e==null?"":e+""))}function $T(e){return function(t){this.textContent=e.call(this,t)}}function DT(e){var t,n;function r(){var i=e.apply(this,arguments);return i!==n&&(t=(n=i)&&$T(i)),t}return r._value=e,r}function FT(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,DT(e))}function BT(){for(var e=this._name,t=this._id,n=V1(),r=this._groups,i=r.length,s=0;s<i;++s)for(var a=r[s],l=a.length,c,u=0;u<l;++u)if(c=a[u]){var d=fn(c,t);bl(c,e,n,u,a,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new Bn(r,this._parents,e,n)}function UT(){var e,t,n=this,r=n._id,i=n.size();return new Promise(function(s,a){var l={value:a},c={value:function(){--i===0&&s()}};n.each(function(){var u=Cn(this,r),d=u.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(l),t._.interrupt.push(l),t._.end.push(c)),u.on=t}),i===0&&s()})}var VT=0;function Bn(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function V1(){return++VT}var En=as.prototype;Bn.prototype={constructor:Bn,select:_T,selectAll:jT,selectChild:En.selectChild,selectChildren:En.selectChildren,filter:gT,merge:xT,selection:CT,transition:BT,call:En.call,nodes:En.nodes,node:En.node,size:En.size,empty:En.empty,each:En.each,on:bT,attr:eT,attrTween:oT,style:AT,styleTween:LT,text:OT,textTween:FT,remove:kT,tween:J3,delay:lT,duration:dT,ease:fT,easeVarying:mT,end:UT,[Symbol.iterator]:En[Symbol.iterator]};function WT(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var HT={time:null,delay:0,duration:250,ease:WT};function qT(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function JT(e){var t,n;e instanceof Bn?(t=e._id,e=e._name):(t=V1(),(n=HT).time=kp(),e=e==null?null:e+"");for(var r=this._groups,i=r.length,s=0;s<i;++s)for(var a=r[s],l=a.length,c,u=0;u<l;++u)(c=a[u])&&bl(c,e,t,u,a,n||qT(c,t));return new Bn(r,this._parents,e,t)}as.prototype.interrupt=W3;as.prototype.transition=JT;function Ym(e,t){var n,r=1;e==null&&(e=0),t==null&&(t=0);function i(){var s,a=n.length,l,c=0,u=0;for(s=0;s<a;++s)l=n[s],c+=l.x,u+=l.y;for(c=(c/a-e)*r,u=(u/a-t)*r,s=0;s<a;++s)l=n[s],l.x-=c,l.y-=u}return i.initialize=function(s){n=s},i.x=function(s){return arguments.length?(e=+s,i):e},i.y=function(s){return arguments.length?(t=+s,i):t},i.strength=function(s){return arguments.length?(r=+s,i):r},i}function KT(e){const t=+this._x.call(null,e),n=+this._y.call(null,e);return W1(this.cover(t,n),t,n,e)}function W1(e,t,n,r){if(isNaN(t)||isNaN(n))return e;var i,s=e._root,a={data:r},l=e._x0,c=e._y0,u=e._x1,d=e._y1,p,f,h,g,v,_,m,x;if(!s)return e._root=a,e;for(;s.length;)if((v=t>=(p=(l+u)/2))?l=p:u=p,(_=n>=(f=(c+d)/2))?c=f:d=f,i=s,!(s=s[m=_<<1|v]))return i[m]=a,e;if(h=+e._x.call(null,s.data),g=+e._y.call(null,s.data),t===h&&n===g)return a.next=s,i?i[m]=a:e._root=a,e;do i=i?i[m]=new Array(4):e._root=new Array(4),(v=t>=(p=(l+u)/2))?l=p:u=p,(_=n>=(f=(c+d)/2))?c=f:d=f;while((m=_<<1|v)===(x=(g>=f)<<1|h>=p));return i[x]=s,i[m]=a,e}function GT(e){var t,n,r=e.length,i,s,a=new Array(r),l=new Array(r),c=1/0,u=1/0,d=-1/0,p=-1/0;for(n=0;n<r;++n)isNaN(i=+this._x.call(null,t=e[n]))||isNaN(s=+this._y.call(null,t))||(a[n]=i,l[n]=s,i<c&&(c=i),i>d&&(d=i),s<u&&(u=s),s>p&&(p=s));if(c>d||u>p)return this;for(this.cover(c,u).cover(d,p),n=0;n<r;++n)W1(this,a[n],l[n],e[n]);return this}function YT(e,t){if(isNaN(e=+e)||isNaN(t=+t))return this;var n=this._x0,r=this._y0,i=this._x1,s=this._y1;if(isNaN(n))i=(n=Math.floor(e))+1,s=(r=Math.floor(t))+1;else{for(var a=i-n||1,l=this._root,c,u;n>e||e>=i||r>t||t>=s;)switch(u=(t<r)<<1|e<n,c=new Array(4),c[u]=l,l=c,a*=2,u){case 0:i=n+a,s=r+a;break;case 1:n=i-a,s=r+a;break;case 2:i=n+a,r=s-a;break;case 3:n=i-a,r=s-a;break}this._root&&this._root.length&&(this._root=l)}return this._x0=n,this._y0=r,this._x1=i,this._y1=s,this}function QT(){var e=[];return this.visit(function(t){if(!t.length)do e.push(t.data);while(t=t.next)}),e}function XT(e){return arguments.length?this.cover(+e[0][0],+e[0][1]).cover(+e[1][0],+e[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function xt(e,t,n,r,i){this.node=e,this.x0=t,this.y0=n,this.x1=r,this.y1=i}function ZT(e,t,n){var r,i=this._x0,s=this._y0,a,l,c,u,d=this._x1,p=this._y1,f=[],h=this._root,g,v;for(h&&f.push(new xt(h,i,s,d,p)),n==null?n=1/0:(i=e-n,s=t-n,d=e+n,p=t+n,n*=n);g=f.pop();)if(!(!(h=g.node)||(a=g.x0)>d||(l=g.y0)>p||(c=g.x1)<i||(u=g.y1)<s))if(h.length){var _=(a+c)/2,m=(l+u)/2;f.push(new xt(h[3],_,m,c,u),new xt(h[2],a,m,_,u),new xt(h[1],_,l,c,m),new xt(h[0],a,l,_,m)),(v=(t>=m)<<1|e>=_)&&(g=f[f.length-1],f[f.length-1]=f[f.length-1-v],f[f.length-1-v]=g)}else{var x=e-+this._x.call(null,h.data),y=t-+this._y.call(null,h.data),j=x*x+y*y;if(j<n){var A=Math.sqrt(n=j);i=e-A,s=t-A,d=e+A,p=t+A,r=h.data}}return r}function e8(e){if(isNaN(d=+this._x.call(null,e))||isNaN(p=+this._y.call(null,e)))return this;var t,n=this._root,r,i,s,a=this._x0,l=this._y0,c=this._x1,u=this._y1,d,p,f,h,g,v,_,m;if(!n)return this;if(n.length)for(;;){if((g=d>=(f=(a+c)/2))?a=f:c=f,(v=p>=(h=(l+u)/2))?l=h:u=h,t=n,!(n=n[_=v<<1|g]))return this;if(!n.length)break;(t[_+1&3]||t[_+2&3]||t[_+3&3])&&(r=t,m=_)}for(;n.data!==e;)if(i=n,!(n=n.next))return this;return(s=n.next)&&delete n.next,i?(s?i.next=s:delete i.next,this):t?(s?t[_]=s:delete t[_],(n=t[0]||t[1]||t[2]||t[3])&&n===(t[3]||t[2]||t[1]||t[0])&&!n.length&&(r?r[m]=n:this._root=n),this):(this._root=s,this)}function t8(e){for(var t=0,n=e.length;t<n;++t)this.remove(e[t]);return this}function n8(){return this._root}function r8(){var e=0;return this.visit(function(t){if(!t.length)do++e;while(t=t.next)}),e}function i8(e){var t=[],n,r=this._root,i,s,a,l,c;for(r&&t.push(new xt(r,this._x0,this._y0,this._x1,this._y1));n=t.pop();)if(!e(r=n.node,s=n.x0,a=n.y0,l=n.x1,c=n.y1)&&r.length){var u=(s+l)/2,d=(a+c)/2;(i=r[3])&&t.push(new xt(i,u,d,l,c)),(i=r[2])&&t.push(new xt(i,s,d,u,c)),(i=r[1])&&t.push(new xt(i,u,a,l,d)),(i=r[0])&&t.push(new xt(i,s,a,u,d))}return this}function o8(e){var t=[],n=[],r;for(this._root&&t.push(new xt(this._root,this._x0,this._y0,this._x1,this._y1));r=t.pop();){var i=r.node;if(i.length){var s,a=r.x0,l=r.y0,c=r.x1,u=r.y1,d=(a+c)/2,p=(l+u)/2;(s=i[0])&&t.push(new xt(s,a,l,d,p)),(s=i[1])&&t.push(new xt(s,d,l,c,p)),(s=i[2])&&t.push(new xt(s,a,p,d,u)),(s=i[3])&&t.push(new xt(s,d,p,c,u))}n.push(r)}for(;r=n.pop();)e(r.node,r.x0,r.y0,r.x1,r.y1);return this}function s8(e){return e[0]}function a8(e){return arguments.length?(this._x=e,this):this._x}function l8(e){return e[1]}function c8(e){return arguments.length?(this._y=e,this):this._y}function Cp(e,t,n){var r=new Np(t??s8,n??l8,NaN,NaN,NaN,NaN);return e==null?r:r.addAll(e)}function Np(e,t,n,r,i,s){this._x=e,this._y=t,this._x0=n,this._y0=r,this._x1=i,this._y1=s,this._root=void 0}function Qm(e){for(var t={data:e.data},n=t;e=e.next;)n=n.next={data:e.data};return t}var wt=Cp.prototype=Np.prototype;wt.copy=function(){var e=new Np(this._x,this._y,this._x0,this._y0,this._x1,this._y1),t=this._root,n,r;if(!t)return e;if(!t.length)return e._root=Qm(t),e;for(n=[{source:t,target:e._root=new Array(4)}];t=n.pop();)for(var i=0;i<4;++i)(r=t.source[i])&&(r.length?n.push({source:r,target:t.target[i]=new Array(4)}):t.target[i]=Qm(r));return e};wt.add=KT;wt.addAll=GT;wt.cover=YT;wt.data=QT;wt.extent=XT;wt.find=ZT;wt.remove=e8;wt.removeAll=t8;wt.root=n8;wt.size=r8;wt.visit=i8;wt.visitAfter=o8;wt.x=a8;wt.y=c8;function Ar(e){return function(){return e}}function er(e){return(e()-.5)*1e-6}function u8(e){return e.x+e.vx}function d8(e){return e.y+e.vy}function Xm(e){var t,n,r,i=1,s=1;typeof e!="function"&&(e=Ar(e==null?1:+e));function a(){for(var u,d=t.length,p,f,h,g,v,_,m=0;m<s;++m)for(p=Cp(t,u8,d8).visitAfter(l),u=0;u<d;++u)f=t[u],v=n[f.index],_=v*v,h=f.x+f.vx,g=f.y+f.vy,p.visit(x);function x(y,j,A,S,P){var N=y.data,V=y.r,E=v+V;if(N){if(N.index>f.index){var I=h-N.x-N.vx,R=g-N.y-N.vy,q=I*I+R*R;q<E*E&&(I===0&&(I=er(r),q+=I*I),R===0&&(R=er(r),q+=R*R),q=(E-(q=Math.sqrt(q)))/q*i,f.vx+=(I*=q)*(E=(V*=V)/(_+V)),f.vy+=(R*=q)*E,N.vx-=I*(E=1-E),N.vy-=R*E)}return}return j>h+E||S<h-E||A>g+E||P<g-E}}function l(u){if(u.data)return u.r=n[u.data.index];for(var d=u.r=0;d<4;++d)u[d]&&u[d].r>u.r&&(u.r=u[d].r)}function c(){if(t){var u,d=t.length,p;for(n=new Array(d),u=0;u<d;++u)p=t[u],n[p.index]=+e(p,u,t)}}return a.initialize=function(u,d){t=u,r=d,c()},a.iterations=function(u){return arguments.length?(s=+u,a):s},a.strength=function(u){return arguments.length?(i=+u,a):i},a.radius=function(u){return arguments.length?(e=typeof u=="function"?u:Ar(+u),c(),a):e},a}function p8(e){return e.index}function Zm(e,t){var n=e.get(t);if(!n)throw new Error("node not found: "+t);return n}function eg(e){var t=p8,n=p,r,i=Ar(30),s,a,l,c,u,d=1;e==null&&(e=[]);function p(_){return 1/Math.min(l[_.source.index],l[_.target.index])}function f(_){for(var m=0,x=e.length;m<d;++m)for(var y=0,j,A,S,P,N,V,E;y<x;++y)j=e[y],A=j.source,S=j.target,P=S.x+S.vx-A.x-A.vx||er(u),N=S.y+S.vy-A.y-A.vy||er(u),V=Math.sqrt(P*P+N*N),V=(V-s[y])/V*_*r[y],P*=V,N*=V,S.vx-=P*(E=c[y]),S.vy-=N*E,A.vx+=P*(E=1-E),A.vy+=N*E}function h(){if(a){var _,m=a.length,x=e.length,y=new Map(a.map((A,S)=>[t(A,S,a),A])),j;for(_=0,l=new Array(m);_<x;++_)j=e[_],j.index=_,typeof j.source!="object"&&(j.source=Zm(y,j.source)),typeof j.target!="object"&&(j.target=Zm(y,j.target)),l[j.source.index]=(l[j.source.index]||0)+1,l[j.target.index]=(l[j.target.index]||0)+1;for(_=0,c=new Array(x);_<x;++_)j=e[_],c[_]=l[j.source.index]/(l[j.source.index]+l[j.target.index]);r=new Array(x),g(),s=new Array(x),v()}}function g(){if(a)for(var _=0,m=e.length;_<m;++_)r[_]=+n(e[_],_,e)}function v(){if(a)for(var _=0,m=e.length;_<m;++_)s[_]=+i(e[_],_,e)}return f.initialize=function(_,m){a=_,u=m,h()},f.links=function(_){return arguments.length?(e=_,h(),f):e},f.id=function(_){return arguments.length?(t=_,f):t},f.iterations=function(_){return arguments.length?(d=+_,f):d},f.strength=function(_){return arguments.length?(n=typeof _=="function"?_:Ar(+_),g(),f):n},f.distance=function(_){return arguments.length?(i=typeof _=="function"?_:Ar(+_),v(),f):i},f}const f8=1664525,h8=1013904223,tg=4294967296;function m8(){let e=1;return()=>(e=(f8*e+h8)%tg)/tg}function g8(e){return e.x}function x8(e){return e.y}var y8=10,v8=Math.PI*(3-Math.sqrt(5));function ng(e){var t,n=1,r=.001,i=1-Math.pow(r,1/300),s=0,a=.6,l=new Map,c=_p(p),u=ss("tick","end"),d=m8();e==null&&(e=[]);function p(){f(),u.call("tick",t),n<r&&(c.stop(),u.call("end",t))}function f(v){var _,m=e.length,x;v===void 0&&(v=1);for(var y=0;y<v;++y)for(n+=(s-n)*i,l.forEach(function(j){j(n)}),_=0;_<m;++_)x=e[_],x.fx==null?x.x+=x.vx*=a:(x.x=x.fx,x.vx=0),x.fy==null?x.y+=x.vy*=a:(x.y=x.fy,x.vy=0);return t}function h(){for(var v=0,_=e.length,m;v<_;++v){if(m=e[v],m.index=v,m.fx!=null&&(m.x=m.fx),m.fy!=null&&(m.y=m.fy),isNaN(m.x)||isNaN(m.y)){var x=y8*Math.sqrt(.5+v),y=v*v8;m.x=x*Math.cos(y),m.y=x*Math.sin(y)}(isNaN(m.vx)||isNaN(m.vy))&&(m.vx=m.vy=0)}}function g(v){return v.initialize&&v.initialize(e,d),v}return h(),t={tick:f,restart:function(){return c.restart(p),t},stop:function(){return c.stop(),t},nodes:function(v){return arguments.length?(e=v,h(),l.forEach(g),t):e},alpha:function(v){return arguments.length?(n=+v,t):n},alphaMin:function(v){return arguments.length?(r=+v,t):r},alphaDecay:function(v){return arguments.length?(i=+v,t):+i},alphaTarget:function(v){return arguments.length?(s=+v,t):s},velocityDecay:function(v){return arguments.length?(a=1-v,t):1-a},randomSource:function(v){return arguments.length?(d=v,l.forEach(g),t):d},force:function(v,_){return arguments.length>1?(_==null?l.delete(v):l.set(v,g(_)),t):l.get(v)},find:function(v,_,m){var x=0,y=e.length,j,A,S,P,N;for(m==null?m=1/0:m*=m,x=0;x<y;++x)P=e[x],j=v-P.x,A=_-P.y,S=j*j+A*A,S<m&&(N=P,m=S);return N},on:function(v,_){return arguments.length>1?(u.on(v,_),t):u.on(v)}}}function rg(){var e,t,n,r,i=Ar(-30),s,a=1,l=1/0,c=.81;function u(h){var g,v=e.length,_=Cp(e,g8,x8).visitAfter(p);for(r=h,g=0;g<v;++g)t=e[g],_.visit(f)}function d(){if(e){var h,g=e.length,v;for(s=new Array(g),h=0;h<g;++h)v=e[h],s[v.index]=+i(v,h,e)}}function p(h){var g=0,v,_,m=0,x,y,j;if(h.length){for(x=y=j=0;j<4;++j)(v=h[j])&&(_=Math.abs(v.value))&&(g+=v.value,m+=_,x+=_*v.x,y+=_*v.y);h.x=x/m,h.y=y/m}else{v=h,v.x=v.data.x,v.y=v.data.y;do g+=s[v.data.index];while(v=v.next)}h.value=g}function f(h,g,v,_){if(!h.value)return!0;var m=h.x-t.x,x=h.y-t.y,y=_-g,j=m*m+x*x;if(y*y/c<j)return j<l&&(m===0&&(m=er(n),j+=m*m),x===0&&(x=er(n),j+=x*x),j<a&&(j=Math.sqrt(a*j)),t.vx+=m*h.value*r/j,t.vy+=x*h.value*r/j),!0;if(h.length||j>=l)return;(h.data!==t||h.next)&&(m===0&&(m=er(n),j+=m*m),x===0&&(x=er(n),j+=x*x),j<a&&(j=Math.sqrt(a*j)));do h.data!==t&&(y=s[h.data.index]*r/j,t.vx+=m*y,t.vy+=x*y);while(h=h.next)}return u.initialize=function(h,g){e=h,n=g,d()},u.strength=function(h){return arguments.length?(i=typeof h=="function"?h:Ar(+h),d(),u):i},u.distanceMin=function(h){return arguments.length?(a=h*h,u):Math.sqrt(a)},u.distanceMax=function(h){return arguments.length?(l=h*h,u):Math.sqrt(l)},u.theta=function(h){return arguments.length?(c=h*h,u):Math.sqrt(c)},u}const Ds=e=>()=>e;function b8(e,{sourceEvent:t,target:n,transform:r,dispatch:i}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:r,enumerable:!0,configurable:!0},_:{value:i}})}function Ln(e,t,n){this.k=e,this.x=t,this.y=n}Ln.prototype={constructor:Ln,scale:function(e){return e===1?this:new Ln(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Ln(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var bo=new Ln(1,0,0);Ln.prototype;function bc(e){e.stopImmediatePropagation()}function Xi(e){e.preventDefault(),e.stopImmediatePropagation()}function w8(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function k8(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function ig(){return this.__zoom||bo}function _8(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function j8(){return navigator.maxTouchPoints||"ontouchstart"in this}function S8(e,t,n){var r=e.invertX(t[0][0])-n[0][0],i=e.invertX(t[1][0])-n[1][0],s=e.invertY(t[0][1])-n[0][1],a=e.invertY(t[1][1])-n[1][1];return e.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),a>s?(s+a)/2:Math.min(0,s)||Math.max(0,a))}function og(){var e=w8,t=k8,n=S8,r=_8,i=j8,s=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],l=250,c=I3,u=ss("start","zoom","end"),d,p,f,h=500,g=150,v=0,_=10;function m(T){T.property("__zoom",ig).on("wheel.zoom",N,{passive:!1}).on("mousedown.zoom",V).on("dblclick.zoom",E).filter(i).on("touchstart.zoom",I).on("touchmove.zoom",R).on("touchend.zoom touchcancel.zoom",q).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}m.transform=function(T,O,D,C){var L=T.selection?T.selection():T;L.property("__zoom",ig),T!==L?A(T,O,D,C):L.interrupt().each(function(){S(this,arguments).event(C).start().zoom(null,typeof O=="function"?O.apply(this,arguments):O).end()})},m.scaleBy=function(T,O,D,C){m.scaleTo(T,function(){var L=this.__zoom.k,M=typeof O=="function"?O.apply(this,arguments):O;return L*M},D,C)},m.scaleTo=function(T,O,D,C){m.transform(T,function(){var L=t.apply(this,arguments),M=this.__zoom,w=D==null?j(L):typeof D=="function"?D.apply(this,arguments):D,H=M.invert(w),K=typeof O=="function"?O.apply(this,arguments):O;return n(y(x(M,K),w,H),L,a)},D,C)},m.translateBy=function(T,O,D,C){m.transform(T,function(){return n(this.__zoom.translate(typeof O=="function"?O.apply(this,arguments):O,typeof D=="function"?D.apply(this,arguments):D),t.apply(this,arguments),a)},null,C)},m.translateTo=function(T,O,D,C,L){m.transform(T,function(){var M=t.apply(this,arguments),w=this.__zoom,H=C==null?j(M):typeof C=="function"?C.apply(this,arguments):C;return n(bo.translate(H[0],H[1]).scale(w.k).translate(typeof O=="function"?-O.apply(this,arguments):-O,typeof D=="function"?-D.apply(this,arguments):-D),M,a)},C,L)};function x(T,O){return O=Math.max(s[0],Math.min(s[1],O)),O===T.k?T:new Ln(O,T.x,T.y)}function y(T,O,D){var C=O[0]-D[0]*T.k,L=O[1]-D[1]*T.k;return C===T.x&&L===T.y?T:new Ln(T.k,C,L)}function j(T){return[(+T[0][0]+ +T[1][0])/2,(+T[0][1]+ +T[1][1])/2]}function A(T,O,D,C){T.on("start.zoom",function(){S(this,arguments).event(C).start()}).on("interrupt.zoom end.zoom",function(){S(this,arguments).event(C).end()}).tween("zoom",function(){var L=this,M=arguments,w=S(L,M).event(C),H=t.apply(L,M),K=D==null?j(H):typeof D=="function"?D.apply(L,M):D,b=Math.max(H[1][0]-H[0][0],H[1][1]-H[0][1]),z=L.__zoom,F=typeof O=="function"?O.apply(L,M):O,U=c(z.invert(K).concat(b/z.k),F.invert(K).concat(b/F.k));return function(ee){if(ee===1)ee=F;else{var le=U(ee),Y=b/le[2];ee=new Ln(Y,K[0]-le[0]*Y,K[1]-le[1]*Y)}w.zoom(null,ee)}})}function S(T,O,D){return!D&&T.__zooming||new P(T,O)}function P(T,O){this.that=T,this.args=O,this.active=0,this.sourceEvent=null,this.extent=t.apply(T,O),this.taps=0}P.prototype={event:function(T){return T&&(this.sourceEvent=T),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(T,O){return this.mouse&&T!=="mouse"&&(this.mouse[1]=O.invert(this.mouse[0])),this.touch0&&T!=="touch"&&(this.touch0[1]=O.invert(this.touch0[0])),this.touch1&&T!=="touch"&&(this.touch1[1]=O.invert(this.touch1[0])),this.that.__zoom=O,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(T){var O=$t(this.that).datum();u.call(T,this.that,new b8(T,{sourceEvent:this.sourceEvent,target:m,transform:this.that.__zoom,dispatch:u}),O)}};function N(T,...O){if(!e.apply(this,arguments))return;var D=S(this,O).event(T),C=this.__zoom,L=Math.max(s[0],Math.min(s[1],C.k*Math.pow(2,r.apply(this,arguments)))),M=Tn(T);if(D.wheel)(D.mouse[0][0]!==M[0]||D.mouse[0][1]!==M[1])&&(D.mouse[1]=C.invert(D.mouse[0]=M)),clearTimeout(D.wheel);else{if(C.k===L)return;D.mouse=[M,C.invert(M)],oa(this),D.start()}Xi(T),D.wheel=setTimeout(w,g),D.zoom("mouse",n(y(x(C,L),D.mouse[0],D.mouse[1]),D.extent,a));function w(){D.wheel=null,D.end()}}function V(T,...O){if(f||!e.apply(this,arguments))return;var D=T.currentTarget,C=S(this,O,!0).event(T),L=$t(T.view).on("mousemove.zoom",K,!0).on("mouseup.zoom",b,!0),M=Tn(T,D),w=T.clientX,H=T.clientY;T1(T.view),bc(T),C.mouse=[M,this.__zoom.invert(M)],oa(this),C.start();function K(z){if(Xi(z),!C.moved){var F=z.clientX-w,U=z.clientY-H;C.moved=F*F+U*U>v}C.event(z).zoom("mouse",n(y(C.that.__zoom,C.mouse[0]=Tn(z,D),C.mouse[1]),C.extent,a))}function b(z){L.on("mousemove.zoom mouseup.zoom",null),A1(z.view,C.moved),Xi(z),C.event(z).end()}}function E(T,...O){if(e.apply(this,arguments)){var D=this.__zoom,C=Tn(T.changedTouches?T.changedTouches[0]:T,this),L=D.invert(C),M=D.k*(T.shiftKey?.5:2),w=n(y(x(D,M),C,L),t.apply(this,O),a);Xi(T),l>0?$t(this).transition().duration(l).call(A,w,C,T):$t(this).call(m.transform,w,C,T)}}function I(T,...O){if(e.apply(this,arguments)){var D=T.touches,C=D.length,L=S(this,O,T.changedTouches.length===C).event(T),M,w,H,K;for(bc(T),w=0;w<C;++w)H=D[w],K=Tn(H,this),K=[K,this.__zoom.invert(K),H.identifier],L.touch0?!L.touch1&&L.touch0[2]!==K[2]&&(L.touch1=K,L.taps=0):(L.touch0=K,M=!0,L.taps=1+!!d);d&&(d=clearTimeout(d)),M&&(L.taps<2&&(p=K[0],d=setTimeout(function(){d=null},h)),oa(this),L.start())}}function R(T,...O){if(this.__zooming){var D=S(this,O).event(T),C=T.changedTouches,L=C.length,M,w,H,K;for(Xi(T),M=0;M<L;++M)w=C[M],H=Tn(w,this),D.touch0&&D.touch0[2]===w.identifier?D.touch0[0]=H:D.touch1&&D.touch1[2]===w.identifier&&(D.touch1[0]=H);if(w=D.that.__zoom,D.touch1){var b=D.touch0[0],z=D.touch0[1],F=D.touch1[0],U=D.touch1[1],ee=(ee=F[0]-b[0])*ee+(ee=F[1]-b[1])*ee,le=(le=U[0]-z[0])*le+(le=U[1]-z[1])*le;w=x(w,Math.sqrt(ee/le)),H=[(b[0]+F[0])/2,(b[1]+F[1])/2],K=[(z[0]+U[0])/2,(z[1]+U[1])/2]}else if(D.touch0)H=D.touch0[0],K=D.touch0[1];else return;D.zoom("touch",n(y(w,H,K),D.extent,a))}}function q(T,...O){if(this.__zooming){var D=S(this,O).event(T),C=T.changedTouches,L=C.length,M,w;for(bc(T),f&&clearTimeout(f),f=setTimeout(function(){f=null},h),M=0;M<L;++M)w=C[M],D.touch0&&D.touch0[2]===w.identifier?delete D.touch0:D.touch1&&D.touch1[2]===w.identifier&&delete D.touch1;if(D.touch1&&!D.touch0&&(D.touch0=D.touch1,delete D.touch1),D.touch0)D.touch0[1]=this.__zoom.invert(D.touch0[0]);else if(D.end(),D.taps===2&&(w=Tn(w,this),Math.hypot(p[0]-w[0],p[1]-w[1])<_)){var H=$t(this).on("dblclick.zoom");H&&H.apply(this,arguments)}}}return m.wheelDelta=function(T){return arguments.length?(r=typeof T=="function"?T:Ds(+T),m):r},m.filter=function(T){return arguments.length?(e=typeof T=="function"?T:Ds(!!T),m):e},m.touchable=function(T){return arguments.length?(i=typeof T=="function"?T:Ds(!!T),m):i},m.extent=function(T){return arguments.length?(t=typeof T=="function"?T:Ds([[+T[0][0],+T[0][1]],[+T[1][0],+T[1][1]]]),m):t},m.scaleExtent=function(T){return arguments.length?(s[0]=+T[0],s[1]=+T[1],m):[s[0],s[1]]},m.translateExtent=function(T){return arguments.length?(a[0][0]=+T[0][0],a[1][0]=+T[1][0],a[0][1]=+T[0][1],a[1][1]=+T[1][1],m):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},m.constrain=function(T){return arguments.length?(n=T,m):n},m.duration=function(T){return arguments.length?(l=+T,m):l},m.interpolate=function(T){return arguments.length?(c=T,m):c},m.on=function(){var T=u.on.apply(u,arguments);return T===u?m:T},m.clickDistance=function(T){return arguments.length?(v=(T=+T)*T,m):Math.sqrt(v)},m.tapDistance=function(T){return arguments.length?(_=+T,m):_},m}const sg=[{bg:"#0e7490",fg:"#e0f2fe"},{bg:"#6d28d9",fg:"#ede9fe"},{bg:"#047857",fg:"#d1fae5"},{bg:"#b91c1c",fg:"#fee2e2"},{bg:"#b45309",fg:"#fef3c7"},{bg:"#1d4ed8",fg:"#dbeafe"},{bg:"#be185d",fg:"#fce7f3"},{bg:"#4d7c0f",fg:"#ecfccb"},{bg:"#7c3aed",fg:"#ede9fe"},{bg:"#0f766e",fg:"#ccfbf1"},{bg:"#c2410c",fg:"#ffedd5"},{bg:"#4338ca",fg:"#e0e7ff"}],ag=new Map;function wc(e){if(e==="sandbox"||e==="system")return{bg:"#374151",fg:"#9ca3af"};const t=ag.get(e);if(t)return t;let n=0;for(let s=0;s<e.length;s++)n=(n<<5)-n+e.charCodeAt(s),n=n&n;const r=Math.abs(n)%sg.length,i=sg[r];return ag.set(e,i),i}const kc={bg:"#14b8a6"};function C8({agents:e,events:t,selectedEventIndex:n,isOpen:r,onOpenChange:i}){const[s,a]=k.useState(!1),[l,c]=k.useState(!1),u=r!==void 0?r:s,d=R=>{i?i(R):a(R)},[p,f]=k.useState(null),h=k.useRef(null),g=k.useRef(null),v=k.useRef(null),_=k.useRef(null),m=k.useRef(null),x=k.useRef(null),y=k.useRef(new Map),j=k.useRef(null),{activeAgents:A,activeTools:S,transitions:P,visitedAgents:N,toolCalls:V,activeBranches:E}=k.useMemo(()=>{var z;const R=n!==null?n:t.length-1;if(R<0||t.length===0)return{activeAgents:new Set,activeTools:new Set,transitions:new Map,visitedAgents:new Set,toolCalls:new Map,activeBranches:new Set};const q=t.slice(0,R+1),T=new Map,O=new Map,D=new Set,C=new Set;D.add("system");const L=new Map;L.set("",["system"]);const M=new Map,w=F=>{const U=F||"";if(!L.has(U)){const ee=U.includes(".")?U.substring(0,U.lastIndexOf(".")):"",le=L.get(ee)||["system"];L.set(U,[...le])}return L.get(U)};for(const F of q){const U=F.branch||"";if(F.event_type==="agent_start"){const ee=F.agent_name;D.add(ee);const le=w(U);if(le.length>0){const Y=le[le.length-1];if(Y!==ee){const B=`${Y}->${ee}`;T.set(B,(T.get(B)||0)+1)}}le.push(ee)}else if(F.event_type==="agent_end"){const ee=w(U);ee.length>1&&ee.pop()}else if(F.event_type==="tool_call"){const ee=(z=F.data)==null?void 0:z.tool_name,le=w(U);if(ee&&le.length>0){const Y=le[le.length-1];C.add(ee);const B=`${Y}->tool:${ee}`;O.set(B,(O.get(B)||0)+1),M.set(U,ee)}}else F.event_type==="tool_result"&&M.set(U,null)}C.forEach(F=>D.add(`tool:${F}`));const H=new Set,K=new Set,b=new Set;for(const[F,U]of L){if(U.length>1){const le=U[U.length-1];H.add(le),F&&b.add(F)}const ee=M.get(F);ee&&K.add(ee)}return{activeAgents:H,activeTools:K,transitions:T,visitedAgents:D,toolCalls:O,activeBranches:b}},[t,n]),I=k.useMemo(()=>{const R=new Map(e.map(C=>[C.name,C])),q=[],T=new Map;for(const C of N){if(C.startsWith("tool:"))continue;const L=R.get(C),M=(L==null?void 0:L.id)||C,w=y.current.get(M);q.push({id:M,name:C,type:C==="system"?"System":(L==null?void 0:L.type)||"LlmAgent",isActive:A.has(C),wasActive:!0,x:w==null?void 0:w.x,y:w==null?void 0:w.y}),T.set(C,M)}for(const C of N){if(!C.startsWith("tool:"))continue;const L=C.slice(5),M=`tool:${L}`,w=y.current.get(M);q.push({id:M,name:L,type:"Tool",isActive:S.has(L),wasActive:!0,x:w==null?void 0:w.x,y:w==null?void 0:w.y}),T.set(C,M)}const O=new Set(q.map(C=>C.id)),D=[];for(const[C,L]of P){const[M,w]=C.split("->"),H=T.get(M),K=T.get(w);H&&K&&O.has(H)&&O.has(K)&&D.push({source:H,target:K,type:"transition",count:L})}for(const[C,L]of V){const[M,w]=C.split("->"),H=T.get(M),K=T.get(w);H&&K&&O.has(H)&&O.has(K)&&D.push({source:H,target:K,type:"tool",count:L})}return{nodes:q,links:D}},[e,A,S,N,P,V]);return k.useEffect(()=>{var B;if(!h.current||!u)return;const R=$t(h.current),q=300,T=400;R.selectAll("*").remove();const O=R.append("g"),D={current:((B=j.current)==null?void 0:B.k)||1},C=og().scaleExtent([.3,3]).on("zoom",$=>{O.attr("transform",$.transform),j.current=$.transform,D.current=$.transform.k});R.call(C),j.current&&(R.call(C.transform,j.current),D.current=j.current.k);const L=()=>{if(I.nodes.length===0)return null;let $=1/0,J=-1/0,Q=1/0,ne=-1/0;if(I.nodes.forEach(_e=>{_e.x!==void 0&&_e.y!==void 0&&($=Math.min($,_e.x),J=Math.max(J,_e.x),Q=Math.min(Q,_e.y),ne=Math.max(ne,_e.y))}),$===1/0)return null;const me=60,ve=J-$+me*2,Z=ne-Q+me*2,ce=Math.min(q/ve,T/Z,1.5)*.85,be=($+J)/2,ae=(Q+ne)/2;return bo.translate(q/2,T/2).scale(ce).translate(-be,-ae)},M=($,J,Q)=>$+(J-$)*Q,w=$=>{const J=j.current;if(!J){j.current=$,D.current=$.k,R.call(C.transform,$);return}const Q=.15,ne=M(J.x,$.x,Q),me=M(J.y,$.y,Q),ve=M(J.k,$.k,Q),Z=bo.translate(ne,me).scale(ve);j.current=Z,D.current=Z.k,R.call(C.transform,Z)},H=I.nodes.every($=>$.x!==void 0&&$.y!==void 0),K=140,b=()=>{const $=K/D.current;for(const J of I.nodes){if(J.x===void 0||J.y===void 0)continue;const Q=Math.sqrt(J.x*J.x+J.y*J.y);if(Q>$){const ne=$/Q;J.x*=ne,J.y*=ne}}},z=()=>{for(const $ of I.nodes)if($.name==="system"&&$.x!==void 0&&$.y!==void 0){const Q=K/D.current*.75,ne=225*Math.PI/180,me=Q*Math.cos(ne),ve=-Q*Math.sin(ne),Z=.3;$.vx=($.vx||0)+(me-$.x)*Z,$.vy=($.vy||0)+(ve-$.y)*Z}},F=ng(I.nodes).force("link",eg(I.links).id($=>$.id).distance(100)).force("charge",rg().strength(-400)).force("center",Ym(0,0)).force("collision",Xm().radius(40)).force("boundary",b).force("systemPull",z).alphaDecay(.01);H?F.alpha(.3):F.alpha(1),x.current=F;const U=O.append("g").selectAll("path").data(I.links).join("path").attr("stroke",$=>$.type==="transition"?"#22c55e":$.type==="sub_agent"?"#6366f1":"#f59e0b").attr("stroke-width",$=>$.type==="transition"?Math.min($.count+2,20):1.5).attr("stroke-opacity",$=>$.type==="transition"?.8:.4).attr("stroke-dasharray",$=>$.type==="tool"?"4,2":"none").attr("fill","none"),ee=O.append("g").selectAll("g").data(I.nodes).join("g").call(Lm().on("start",($,J)=>{$.active||F.alphaTarget(.3).restart(),J.fx=J.x,J.fy=J.y}).on("drag",($,J)=>{J.fx=$.x,J.fy=$.y}).on("end",($,J)=>{$.active||F.alphaTarget(0),J.fx=null,J.fy=null})),le=$=>$.type==="System"?14:$.type==="Tool"?12:18;ee.append("circle").attr("r",$=>le($)).attr("fill",$=>$.type==="Tool"?kc.bg:wc($.name).bg).attr("stroke",$=>$.isActive?"#fff":$.wasActive?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.2)").attr("stroke-width",$=>$.isActive?3:1.5).attr("opacity",$=>$.wasActive?1:.5).attr("class",$=>$.isActive?"active-node":"").style("cursor","pointer").on("mouseenter",function($,J){var ve;const Q=(ve=v.current)==null?void 0:ve.getBoundingClientRect();if(!Q)return;const ne=$.clientX-Q.left,me=$.clientY-Q.top;f({x:ne,y:me,node:J}),$t(this).transition().duration(150).attr("r",le(J)+6)}).on("mouseleave",function($,J){f(null),$t(this).transition().duration(150).attr("r",le(J))}),ee.append("text").text($=>$.name.length>10?$.name.slice(0,8)+"…":$.name).attr("text-anchor","middle").attr("dy",32).attr("font-size",10).attr("fill","#e4e4e7").attr("font-weight",$=>$.isActive?600:400),F.on("tick",()=>{U.attr("d",J=>{const Q=J.target.x-J.source.x,ne=J.target.y-J.source.y,me=Math.sqrt(Q*Q+ne*ne)*(J.type==="transition"?1.5:2);return`M${J.source.x},${J.source.y}A${me},${me} 0 0,1 ${J.target.x},${J.target.y}`}),ee.attr("transform",J=>`translate(${J.x},${J.y})`),I.nodes.forEach(J=>{J.x!==void 0&&J.y!==void 0&&y.current.set(J.id,{x:J.x,y:J.y})});const $=L();$&&w($)});const Y=L();return Y&&w(Y),()=>{F.stop()}},[I,u]),k.useEffect(()=>{if(!g.current||!l)return;const R=$t(g.current),q=_.current;if(!q)return;const T=Math.min(q.clientWidth,q.clientHeight),O=T,D=T;R.selectAll("*").remove();const C=R.append("g"),L=og().scaleExtent([.3,3]).on("zoom",U=>{C.attr("transform",U.transform),m.current=U.transform});if(R.call(L),m.current)R.call(L.transform,m.current);else{const U=bo.translate(O/2,D/2).scale(.9);R.call(L.transform,U),m.current=U}const M=T*.35,w=()=>{for(const U of I.nodes){if(U.x===void 0||U.y===void 0)continue;const ee=Math.sqrt(U.x*U.x+U.y*U.y);if(ee>M){const le=M/ee;U.x*=le,U.y*=le}}},H=I.nodes.every(U=>U.x!==void 0&&U.y!==void 0),K=ng(I.nodes).force("link",eg(I.links).id(U=>U.id).distance(120)).force("charge",rg().strength(-500)).force("center",Ym(0,0)).force("collision",Xm().radius(50)).force("boundary",w).alpha(H?.1:.8).alphaDecay(.02),b=C.append("g").selectAll("path").data(I.links).join("path").attr("stroke",U=>U.type==="transition"?"#22c55e":U.type==="sub_agent"?"#6366f1":"#f59e0b").attr("stroke-width",U=>U.type==="transition"?Math.min(U.count+2,20):2).attr("stroke-opacity",U=>U.type==="transition"?.8:.5).attr("stroke-dasharray",U=>U.type==="tool"?"6,3":"none").attr("fill","none"),z=U=>U.type==="System"?20:U.type==="Tool"?18:28,F=C.append("g").selectAll("g").data(I.nodes).join("g").call(Lm().on("start",(U,ee)=>{U.active||K.alphaTarget(.3).restart(),ee.fx=ee.x,ee.fy=ee.y}).on("drag",(U,ee)=>{ee.fx=U.x,ee.fy=U.y}).on("end",(U,ee)=>{U.active||K.alphaTarget(0),ee.fx=null,ee.fy=null}));return F.append("circle").attr("r",U=>z(U)).attr("fill",U=>U.type==="Tool"?kc.bg:wc(U.name).bg).attr("stroke",U=>U.isActive?"#fff":U.wasActive?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.2)").attr("stroke-width",U=>U.isActive?4:2).attr("opacity",U=>U.wasActive?1:.5).attr("class",U=>U.isActive?"active-node":"").style("cursor","grab"),F.append("text").text(U=>U.name.length>15?U.name.slice(0,13)+"…":U.name).attr("text-anchor","middle").attr("dy",U=>z(U)+18).attr("font-size",14).attr("fill","#e4e4e7").attr("font-weight",U=>U.isActive?600:400),K.on("tick",()=>{b.attr("d",U=>{const ee=U.target.x-U.source.x,le=U.target.y-U.source.y,Y=Math.sqrt(ee*ee+le*le)*(U.type==="transition"?1.5:2);return`M${U.source.x},${U.source.y}A${Y},${Y} 0 0,1 ${U.target.x},${U.target.y}`}),F.attr("transform",U=>`translate(${U.x},${U.y})`),I.nodes.forEach(U=>{U.x!==void 0&&U.y!==void 0&&y.current.set(U.id,{x:U.x,y:U.y})})}),()=>{K.stop()}},[I,l]),o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
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
          border-radius: 0 200px 200px 0;
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
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border-radius: 50%;
          border: 2px solid rgba(99, 102, 241, 0.4);
          box-shadow: 0 0 60px rgba(99, 102, 241, 0.3), 0 0 120px rgba(0, 0, 0, 0.5);
          overflow: hidden;
          animation: modalScaleIn 0.3s ease;
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
      `}),o.jsx("div",{className:`agent-graph-container ${u?"":"closed"}`,children:o.jsxs("div",{className:"agent-graph-panel",children:[o.jsxs("div",{className:"agent-graph-content clickable",ref:v,onClick:()=>c(!0),title:"Click to expand",children:[o.jsx("svg",{ref:h,className:"agent-graph-svg"}),o.jsxs("div",{className:"agent-graph-legend",children:[o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{className:"legend-line",style:{background:"#22c55e"}}),o.jsx("span",{children:"agent flow"})]}),o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{className:"legend-line",style:{background:"#f59e0b",borderStyle:"dashed"}}),o.jsx("span",{children:"tool call"})]})]}),p&&o.jsxs("div",{className:"agent-graph-tooltip",style:{left:Math.min(p.x+15,180),top:Math.max(p.y-20,10)},children:[o.jsx("div",{className:"agent-graph-tooltip-name",children:p.node.name}),o.jsxs("div",{className:"agent-graph-tooltip-type",children:[o.jsx("div",{className:"agent-graph-tooltip-dot",style:{background:p.node.type==="Tool"?kc.bg:wc(p.node.name).bg}}),p.node.type]}),p.node.isActive&&o.jsx("div",{className:"agent-graph-tooltip-active",children:"● Currently executing"})]})]}),o.jsx("button",{className:"agent-graph-toggle",onClick:()=>d(!u),children:o.jsx(_t,{size:20})})]})}),l&&o.jsx("div",{className:"agent-graph-modal-overlay",onClick:()=>{c(!1),m.current=null},children:o.jsxs("div",{className:"agent-graph-modal",ref:_,onClick:R=>R.stopPropagation(),children:[o.jsx("button",{className:"agent-graph-modal-close",onClick:()=>{c(!1),m.current=null},title:"Close",children:o.jsx("div",{className:"agent-graph-modal-close-arc",children:o.jsx(Ur,{size:18,className:"agent-graph-modal-close-icon"})})}),o.jsx("svg",{ref:g,className:"agent-graph-modal-svg"})]})})]})}const lg={agent_start:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},agent_end:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},tool_call:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},tool_result:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},model_call:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},model_response:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},callback_error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"},state_change:{bg:"#3d0d1f",fg:"#fda4af",border:"#f43f5e"},transfer:{bg:"#0d2d3d",fg:"#7dd3fc",border:"#0ea5e9"},callback_start:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},callback_end:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"}},N8={agent_start:_u,agent_end:_u,tool_call:dn,tool_result:dn,model_call:Jd,model_response:Ma,state_change:In,transfer:Zd,callback_start:jn,callback_end:jn,callback_error:cv},cg=[{bg:"#0e7490",fg:"#e0f2fe"},{bg:"#6d28d9",fg:"#ede9fe"},{bg:"#047857",fg:"#d1fae5"},{bg:"#b91c1c",fg:"#fee2e2"},{bg:"#b45309",fg:"#fef3c7"},{bg:"#1d4ed8",fg:"#dbeafe"},{bg:"#be185d",fg:"#fce7f3"},{bg:"#4d7c0f",fg:"#ecfccb"},{bg:"#7c3aed",fg:"#ede9fe"},{bg:"#0f766e",fg:"#ccfbf1"},{bg:"#c2410c",fg:"#ffedd5"},{bg:"#4338ca",fg:"#e0e7ff"}],ug=new Map;function Ha(e){if(e==="sandbox"||e==="system")return{bg:"#374151",fg:"#9ca3af"};let t=ug.get(e);if(t===void 0){let n=0;for(let r=0;r<e.length;r++)n=(n<<5)-n+e.charCodeAt(r),n=n&n;t=Math.abs(n)%cg.length,ug.set(e,t)}return cg[t]}function E8(e){var t,n,r,i,s,a,l,c,u,d,p,f,h,g,v,_,m,x,y,j,A,S,P,N,V,E,I,R,q;switch(e.event_type){case"agent_start":return`START ${e.agent_name}`;case"agent_end":return(t=e.data)!=null&&t.error?`END ${e.agent_name} [ERROR]`:`END ${e.agent_name}`;case"tool_call":const O=Object.entries(((n=e.data)==null?void 0:n.args)||{}).map(([Y,B])=>{const $=B!=null?JSON.stringify(B):"null";return`${Y}=${$.slice(0,500)}${$.length>500?"...":""}`}).join(", ")||"";return`CALL ${((r=e.data)==null?void 0:r.tool_name)||"unknown"}(${O.slice(0,1e3)}${O.length>1e3?"...":""})`;case"tool_result":const D=(i=e.data)==null?void 0:i.result;let C="";if((a=(s=D==null?void 0:D.content)==null?void 0:s[0])!=null&&a.text)C=String(D.content[0].text).slice(0,500);else if(typeof D=="string")C=D.slice(0,500);else if(D!=null){const Y=JSON.stringify(D);C=Y?Y.slice(0,500):""}else C="";return`RESULT ${((l=e.data)==null?void 0:l.tool_name)||"unknown"} → ${C}${C.length>=500?"...":""}`;case"model_call":return`LLM_REQ ${((u=(c=e.data)==null?void 0:c.contents)==null?void 0:u.length)||0} msgs, ${((d=e.data)==null?void 0:d.tool_count)||0} tools`;case"model_response":const L=((f=(p=e.data)==null?void 0:p.response_content)==null?void 0:f.parts)||((h=e.data)==null?void 0:h.parts)||[],M=L.find(Y=>(Y==null?void 0:Y.type)==="function_call");if(M)return`LLM_RSP → ${M.name||"unknown"}()`;const w=L.find(Y=>(Y==null?void 0:Y.type)==="text");if(w!=null&&w.text){const Y=String(w.text);return`LLM_RSP "${Y.slice(0,50)}${Y.length>50?"...":""}"`}return`LLM_RSP (${((g=e.data)==null?void 0:g.finish_reason)||"complete"})`;case"state_change":return`STATE ${Object.keys(((v=e.data)==null?void 0:v.state_delta)||{}).join(", ")}`;case"transfer":return`TRANSFER → ${((_=e.data)==null?void 0:_.target)||"unknown"}`;case"callback_start":const K=((m=e.data)==null?void 0:m.callback_name)||"unknown",b=((x=e.data)==null?void 0:x.callback_type)||"";return K==="network_approval"?`⏳ AWAITING APPROVAL ${((y=e.data)==null?void 0:y.host)||((j=e.data)==null?void 0:j.url)||""}`:`CALLBACK START ${b?`[${b}]`:""} ${K}`;case"callback_end":const z=((A=e.data)==null?void 0:A.callback_name)||"unknown",F=((S=e.data)==null?void 0:S.callback_type)||"",U=(P=e.data)!=null&&P.error?" [ERROR]":"";return z==="network_approval"?((N=e.data)==null?void 0:N.action)==="deny"?`🚫 DENIED ${((V=e.data)==null?void 0:V.host)||""}`:`✅ APPROVED ${((E=e.data)==null?void 0:E.pattern)||((I=e.data)==null?void 0:I.host)||""}`:`CALLBACK END ${F?`[${F}]`:""} ${z}${U}`;case"callback_error":const ee=((R=e.data)==null?void 0:R.source)||"unknown",le=((q=e.data)==null?void 0:q.error)||"Unknown error";return`⚠️ ERROR in ${ee}: ${le.slice(0,50)}${le.length>50?"...":""}`;default:return e.event_type.toUpperCase()}}function z8(e,t){const n=e-t;return n<1?`+${(n*1e3).toFixed(0)}ms`:n<60?`+${n.toFixed(2)}s`:`+${Math.floor(n/60)}m${(n%60).toFixed(0)}s`}function T8(e){const t={timestamp:"#71717a",bracket:"#a78bfa",ip:"#22d3ee",domain:"#34d399",url:"#60a5fa",method:"#f472b6",status:"#4ade80",statusError:"#f87171",number:"#fbbf24",keyword:"#c084fc",info:"#22d3ee",warning:"#fbbf24",error:"#f87171",debug:"#71717a"},n=[];let r=e,i=0;const s=(l,c)=>{l&&n.push(c?o.jsx("span",{style:{color:c},children:l},i++):o.jsx("span",{children:l},i++))},a=[{regex:/^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+Z?\s*)/,color:t.timestamp},{regex:/(\[[^\]]+\])/,color:t.bracket},{regex:/\b(GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS|CONNECT)\b/,color:t.method},{regex:/\b([23]\d{2})\s+(OK|Created|Accepted|No Content|Moved|Found|Not Modified)\b/,color:t.status},{regex:/\b([45]\d{2})\s+\w+/,color:t.statusError},{regex:/(<< \d{3} \w+)/,color:t.status},{regex:/(https?:\/\/[^\s]+)/,color:t.url},{regex:/(\s)(\/[a-zA-Z0-9_\-./]+)/,color:t.url,group:2},{regex:/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d+)/,color:t.ip},{regex:/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/,color:t.ip},{regex:/(sandbox-agent-[a-zA-Z0-9_-]+:\d+)/,color:t.domain},{regex:/(host\.docker\.internal:\d+)/,color:t.domain},{regex:/([a-zA-Z][a-zA-Z0-9-]*\.(?:com|org|net|io|dev|local|internal)(?::\d+)?)/,color:t.domain},{regex:/\b(\d+(?:\.\d+)?[kmgb])\b/i,color:t.number},{regex:/\b(INFO)\b/,color:t.info},{regex:/\b(WARNING|WARN)\b/,color:t.warning},{regex:/\b(ERROR|CRITICAL|FATAL)\b/,color:t.error},{regex:/\b(DEBUG)\b/,color:t.debug},{regex:/([a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*){2,})/,color:t.domain},{regex:/\b(client|server|connect|disconnect|completion|model|provider)\b/i,color:t.keyword}];for(;r.length>0;){let l=null;for(const{regex:c,color:u,group:d}of a){const p=r.match(c);if(p&&p.index!==void 0){const f=d?r.indexOf(p[d],p.index):p.index,h=d?p[d]:p[0];(!l||f<l.index)&&(l={index:f,length:h.length,text:h,color:u})}}if(l)l.index>0&&s(r.slice(0,l.index)),s(l.text,l.color),r=r.slice(l.index+l.length);else{s(r);break}}return o.jsx(o.Fragment,{children:n})}function A8({content:e}){const t=e.split(`
`);return o.jsx(o.Fragment,{children:t.map((n,r)=>o.jsx("div",{children:T8(n)},r))})}function P8({event:e}){var l,c,u,d,p,f,h,g,v,_,m,x,y,j,A,S,P,N,V,E,I;const[t,n]=k.useState(new Set(["instruction","messages","result","response","state_delta","data"])),[r,i]=k.useState(null),s=R=>{const q=new Set(t);q.has(R)?q.delete(R):q.add(R),n(q)},a=(R,q=0,T=!1)=>{const O="  ".repeat(q),D="  ".repeat(q+1);if(R===null)return o.jsx("span",{className:"json-null",children:"null"});if(R===void 0)return o.jsx("span",{className:"json-undefined",children:"undefined"});if(typeof R=="boolean")return o.jsx("span",{className:"json-boolean",children:R.toString()});if(typeof R=="number")return o.jsx("span",{className:"json-number",children:R});if(typeof R=="string"){const C=R.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\t/g,"\\t"),L=()=>i(R);return C.length>300&&q>0?o.jsxs("span",{className:"json-string json-string-clickable",onClick:L,title:"Click to view as Markdown",children:['"',C.slice(0,300),'..." ',o.jsxs("span",{className:"json-truncated",children:["(",R.length," chars)"]})]}):o.jsxs("span",{className:"json-string json-string-clickable",onClick:L,title:"Click to view as Markdown",children:['"',C,'"']})}if(Array.isArray(R))return R.length===0?o.jsx("span",{className:"json-bracket",children:"[]"}):R.every(L=>L===null||typeof L!="object")&&R.length<=3?o.jsxs("span",{className:"json-inline",children:[o.jsx("span",{className:"json-bracket",children:"["}),R.map((L,M)=>o.jsxs("span",{children:[a(L,q+1,!0),M<R.length-1&&o.jsx("span",{className:"json-comma",children:", "})]},M)),o.jsx("span",{className:"json-bracket",children:"]"})]}):o.jsxs("span",{className:"json-block",children:[o.jsx("span",{className:"json-bracket",children:"["}),R.map((L,M)=>o.jsxs("span",{children:[`
`+D,a(L,q+1),M<R.length-1&&o.jsx("span",{className:"json-comma",children:","})]},M)),`
`+O,o.jsx("span",{className:"json-bracket",children:"]"})]});if(typeof R=="object"){const C=Object.entries(R);return C.length===0?o.jsx("span",{className:"json-bracket",children:"{}"}):C.length<=2&&C.every(([,M])=>M===null||typeof M!="object")&&T?o.jsxs("span",{className:"json-inline",children:[o.jsx("span",{className:"json-bracket",children:"{"}),C.map(([M,w],H)=>o.jsxs("span",{children:[o.jsxs("span",{className:"json-key",children:['"',M,'"']}),o.jsx("span",{className:"json-colon",children:": "}),a(w,q+1,!0),H<C.length-1&&o.jsx("span",{className:"json-comma",children:", "})]},M)),o.jsx("span",{className:"json-bracket",children:"}"})]}):o.jsxs("span",{className:"json-block",children:[o.jsx("span",{className:"json-bracket",children:"{"}),C.map(([M,w],H)=>o.jsxs("span",{children:[`
`+D,o.jsxs("span",{className:"json-key",children:['"',M,'"']}),o.jsx("span",{className:"json-colon",children:": "}),a(w,q+1),H<C.length-1&&o.jsx("span",{className:"json-comma",children:","})]},M)),`
`+O,o.jsx("span",{className:"json-bracket",children:"}"})]})}return String(R)};return o.jsxs("div",{className:"event-detail",children:[o.jsxs("div",{className:"detail-header",children:[o.jsx("span",{className:"detail-type",children:e.event_type}),o.jsx("span",{className:"detail-agent",style:{backgroundColor:Ha(e.agent_name).bg,color:Ha(e.agent_name).fg,padding:"2px 8px",borderRadius:"4px",fontWeight:600},children:e.agent_name}),o.jsx("span",{className:"detail-time",children:new Date(e.timestamp*1e3).toISOString()})]}),o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("data"),children:[t.has("data")?o.jsx(It,{size:12}):o.jsx(_t,{size:12}),o.jsx("span",{children:"Event Data"})]}),t.has("data")&&o.jsx("div",{className:"section-content json-viewer",children:a(e.data)})]}),e.event_type==="agent_start"&&((l=e.data)==null?void 0:l.instruction)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("instruction"),children:[t.has("instruction")?o.jsx(It,{size:12}):o.jsx(_t,{size:12}),o.jsx("span",{children:"Instruction"}),o.jsxs("span",{className:"char-count",children:[e.data.instruction.length," chars"]})]}),t.has("instruction")&&o.jsx("div",{className:"section-content",children:o.jsx("pre",{className:"instruction-text",children:e.data.instruction})})]}),e.event_type==="model_call"&&((c=e.data)==null?void 0:c.contents)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("messages"),children:[t.has("messages")?o.jsx(It,{size:12}):o.jsx(_t,{size:12}),o.jsxs("span",{children:["Messages (",e.data.contents.length,")"]})]}),t.has("messages")&&o.jsx("div",{className:"section-content",children:e.data.contents.map((R,q)=>{var T;return o.jsxs("div",{className:"message-item",children:[o.jsx("span",{className:`message-role ${R.role}`,children:R.role}),o.jsx("div",{className:"message-parts",children:(T=R.parts)==null?void 0:T.map((O,D)=>o.jsxs("div",{className:"message-part",children:[O.text&&o.jsx("pre",{children:O.text}),O.function_call&&o.jsxs("div",{className:"function-call",children:[o.jsx("strong",{children:O.function_call.name}),o.jsx("pre",{children:JSON.stringify(O.function_call.args,null,2)})]}),O.function_response&&o.jsxs("div",{className:"function-response",children:[o.jsx("strong",{children:O.function_response.name}),o.jsx("pre",{children:JSON.stringify(O.function_response.response,null,2)})]})]},D))})]},q)})})]}),e.event_type==="tool_result"&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("result"),children:[t.has("result")?o.jsx(It,{size:12}):o.jsx(_t,{size:12}),o.jsx("span",{children:"Tool Result"})]}),t.has("result")&&o.jsx("div",{className:"section-content",children:o.jsx("pre",{className:"result-content",children:((f=(p=(d=(u=e.data)==null?void 0:u.result)==null?void 0:d.content)==null?void 0:p[0])==null?void 0:f.text)||(typeof((h=e.data)==null?void 0:h.result)=="string"?e.data.result:JSON.stringify((g=e.data)==null?void 0:g.result,null,2))})})]}),e.event_type==="model_response"&&((v=e.data)==null?void 0:v.parts)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("response"),children:[t.has("response")?o.jsx(It,{size:12}):o.jsx(_t,{size:12}),o.jsxs("span",{children:["Response (",e.data.parts.length," part",e.data.parts.length!==1?"s":"",")"]}),e.data.token_counts&&o.jsxs("span",{className:"token-badge",children:[e.data.token_counts.input,"↑ ",e.data.token_counts.output,"↓"]})]}),t.has("response")&&o.jsx("div",{className:"section-content",children:e.data.parts.map((R,q)=>o.jsxs("div",{className:"response-part",children:[R.type==="text"&&R.text&&o.jsx("pre",{className:"response-text",children:R.text}),R.type==="function_call"&&o.jsxs("div",{className:"function-call",children:[o.jsxs("strong",{children:["→ ",R.name,"()"]}),R.args&&Object.keys(R.args).length>0&&o.jsx("pre",{children:JSON.stringify(R.args,null,2)})]}),R.thought&&o.jsx("div",{className:"thought-indicator",children:"💭 Thinking"})]},q))})]}),(e.event_type==="callback_start"||e.event_type==="callback_end")&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("callback_info"),children:[t.has("callback_info")?o.jsx(It,{size:12}):o.jsx(_t,{size:12}),o.jsx("span",{children:"Callback Information"})]}),t.has("callback_info")&&o.jsxs("div",{className:"section-content",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Name:"})," ",((_=e.data)==null?void 0:_.callback_name)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Type:"})," ",((m=e.data)==null?void 0:m.callback_type)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Module Path:"})," ",((x=e.data)==null?void 0:x.module_path)||"unknown"]}),((y=e.data)==null?void 0:y.error)&&o.jsxs("div",{style:{color:"#ef4444",marginTop:"8px"},children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Error:"})," ",e.data.error]}),((j=e.data)==null?void 0:j.error_type)&&o.jsxs("div",{style:{marginTop:"4px",fontSize:"0.9em",opacity:.8},children:[o.jsx("strong",{children:"Type:"})," ",e.data.error_type]}),((A=e.data)==null?void 0:A.stack_trace)&&o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Stack Trace:"}),o.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"300px",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:e.data.stack_trace})]})]})]})]}),e.event_type==="callback_error"&&o.jsxs("div",{className:"detail-section",style:{borderColor:"#dc2626"},children:[o.jsxs("div",{className:"section-header",onClick:()=>s("error_info"),style:{color:"#fca5a5"},children:[t.has("error_info")?o.jsx(It,{size:12}):o.jsx(_t,{size:12}),o.jsx("span",{children:"⚠️ Error Details"})]}),t.has("error_info")&&o.jsxs("div",{className:"section-content",style:{color:"#fca5a5"},children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Source:"})," ",((S=e.data)==null?void 0:S.source)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Error Type:"})," ",((P=e.data)==null?void 0:P.error_type)||"unknown"]}),o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Message:"})," ",((N=e.data)==null?void 0:N.error)||"No error message"]}),((V=e.data)==null?void 0:V.context)&&o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Context:"})," ",e.data.context]}),((E=e.data)==null?void 0:E.traceback)&&o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Stack Trace:"}),o.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"400px",whiteSpace:"pre-wrap",wordBreak:"break-word",color:"#fca5a5"},children:e.data.traceback})]})]})]}),e.event_type==="state_change"&&((I=e.data)==null?void 0:I.state_delta)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("state_delta"),children:[t.has("state_delta")?o.jsx(It,{size:12}):o.jsx(_t,{size:12}),o.jsxs("span",{children:["State Changes (",Object.keys(e.data.state_delta).length,")"]})]}),t.has("state_delta")&&o.jsx("div",{className:"section-content",children:Object.entries(e.data.state_delta).map(([R,q])=>o.jsxs("div",{className:"state-delta-item",children:[o.jsx("div",{className:"state-delta-key",children:R}),o.jsx("pre",{className:"state-delta-value",children:typeof q=="string"?q:JSON.stringify(q,null,2)})]},R))})]}),r&&o.jsx(M8,{content:r,onClose:()=>i(null)})]})}function M8({content:e,onClose:t}){return o.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.8)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2e3},onClick:t,children:o.jsxs("div",{style:{backgroundColor:"#1a1a1e",borderRadius:"8px",border:"1px solid #3f3f46",width:"90%",maxWidth:"1200px",height:"85%",display:"flex",flexDirection:"column",overflow:"hidden"},onClick:n=>n.stopPropagation(),children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx(Or,{size:16}),o.jsx("span",{style:{fontWeight:600},children:"String Content"}),o.jsxs("span",{style:{color:"#71717a",fontSize:"12px"},children:["(",e.length," chars)"]})]}),o.jsx("button",{onClick:t,style:{background:"none",border:"none",color:"#a1a1aa",cursor:"pointer",padding:"4px",display:"flex",alignItems:"center"},children:o.jsx(Ur,{size:18})})]}),o.jsx("div",{style:{flex:1,overflow:"auto",padding:"20px"},children:o.jsx("pre",{style:{fontSize:"12px",lineHeight:"1.5",color:"#e4e4e7",whiteSpace:"pre-wrap",wordBreak:"break-word",fontFamily:'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',margin:0},children:e})}),o.jsx("div",{style:{padding:"8px 16px",borderTop:"1px solid #3f3f46",backgroundColor:"#27272a",display:"flex",justifyContent:"flex-end",gap:"8px"},children:o.jsxs("button",{onClick:()=>navigator.clipboard.writeText(e),style:{background:"#3f3f46",border:"none",borderRadius:"4px",padding:"6px 12px",color:"#e4e4e7",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",fontSize:"12px"},children:[o.jsx(ns,{size:12}),"Copy"]})})]})})}function L8({content:e,title:t,onClose:n}){return o.jsxs("div",{className:"modal-overlay",onClick:n,children:[o.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[o.jsxs("div",{className:"modal-header",children:[o.jsx("h3",{children:t}),o.jsx("button",{className:"modal-close",onClick:n,children:"×"})]}),o.jsx("div",{className:"modal-body markdown-content",children:o.jsx(d1,{children:e})})]}),o.jsx("style",{children:`
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
      `})]})}function R8({events:e,selectedEventIndex:t,project:n}){const[r,i]=k.useState(null),s=k.useMemo(()=>{var u;const l={};return(u=n==null?void 0:n.app)!=null&&u.state_keys&&n.app.state_keys.forEach(d=>{l[d.name]={value:void 0,timestamp:null,defined:!0,description:d.description,type:d.type}}),n!=null&&n.agents&&n.agents.forEach(d=>{if(d.type==="LlmAgent"&&d.output_key){const p=d.output_key;l[p]||(l[p]={value:void 0,timestamp:null,defined:!0,description:`Output from ${d.name}`,type:"string"})}}),(t!==null?e.slice(0,t+1):e).filter(d=>d.event_type==="state_change").forEach(d=>{var p;(p=d.data)!=null&&p.state_delta&&Object.entries(d.data.state_delta).forEach(([f,h])=>{var g;l[f]={...l[f],value:h,timestamp:d.timestamp,defined:((g=l[f])==null?void 0:g.defined)??!1}})}),l},[e,t,n]),a=Object.entries(s);return o.jsxs(o.Fragment,{children:[r&&o.jsx(L8,{content:r.content,title:r.title,onClose:()=>i(null)}),o.jsxs("div",{className:"state-snapshot",children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"state-header",children:t!==null?`State after event #${t}`:e.length>0?"State at end of run":"Defined State Keys"}),a.length===0?o.jsx("div",{className:"state-empty",children:"No state keys defined"}):a.map(([l,{value:c,timestamp:u,defined:d,description:p,type:f}])=>o.jsxs("div",{className:`state-entry ${c===void 0?"unset":""}`,children:[o.jsxs("div",{className:"state-key",children:[l,f&&o.jsxs("span",{className:"state-type",children:["(",f,")"]})]}),o.jsx("div",{className:"state-value",onClick:()=>{if(c!==void 0){const h=typeof c=="string"?c:JSON.stringify(c,null,2);i({content:h,title:l})}},style:{cursor:c!==void 0?"pointer":"default"},title:c!==void 0?"Click to view in markdown viewer":void 0,children:c===void 0?"(not set)":typeof c=="string"?c:JSON.stringify(c,null,2)}),p&&o.jsx("div",{className:"state-desc",children:p}),u&&o.jsx("div",{className:"state-time",children:new Date(u*1e3).toLocaleTimeString()})]},l))]})]})}function I8({project:e,sessionId:t}){const[n,r]=k.useState([]),[i,s]=k.useState(!1),[a,l]=k.useState(null),[c,u]=k.useState(null),[d,p]=k.useState(null);k.useEffect(()=>{if(!(e!=null&&e.id)||!t){r([]);return}(async()=>{s(!0),l(null);try{const _=await Ky(e.id,t);r(_)}catch(_){l(_.message||"Failed to load artifacts"),r([])}finally{s(!1)}})()},[e==null?void 0:e.id,t]);const f=v=>v===null?"":v<1024?`${v} B`:v<1024*1024?`${(v/1024).toFixed(1)} KB`:`${(v/(1024*1024)).toFixed(1)} MB`,h=v=>{if(!(e!=null&&e.id)||!t)return;const _=Xs(e.id,t,v),m=document.createElement("a");m.href=_,m.download=v,document.body.appendChild(m),m.click(),document.body.removeChild(m)},g=v=>{if(!(!(e!=null&&e.id)||!t)&&v.is_image){const _=Xs(e.id,t,v.filename);p(_)}};return o.jsxs(o.Fragment,{children:[d&&o.jsx("div",{className:"artifact-image-modal",onClick:()=>p(null),style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e4,cursor:"pointer"},children:o.jsxs("div",{onClick:v=>v.stopPropagation(),style:{maxWidth:"90vw",maxHeight:"90vh",position:"relative"},children:[o.jsx("button",{onClick:()=>p(null),style:{position:"absolute",top:-40,right:0,background:"transparent",border:"none",color:"#fff",cursor:"pointer",padding:8},children:o.jsx(Ur,{size:24})}),o.jsx("img",{src:d,alt:"Artifact preview",style:{maxWidth:"90vw",maxHeight:"85vh",objectFit:"contain",borderRadius:8}})]})}),o.jsxs("div",{className:"artifacts-panel",children:[o.jsx("style",{children:`
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
        `}),o.jsx("div",{className:"artifacts-header",children:t?"Session Artifacts":"No Session Selected"}),i?o.jsxs("div",{className:"artifacts-loading",children:[o.jsx(Xt,{size:16,className:"spin",style:{marginBottom:8}}),o.jsx("div",{children:"Loading artifacts..."})]}):a?o.jsx("div",{className:"artifacts-error",children:a}):t?n.length===0?o.jsxs("div",{className:"artifacts-empty",children:[o.jsx(Aa,{size:24,style:{marginBottom:8,opacity:.5}}),o.jsx("div",{children:"No artifacts in this session"}),o.jsx("div",{style:{fontSize:10,marginTop:4,color:"#52525b"},children:"Use tool_context.save_artifact() to save artifacts"})]}):n.map(v=>o.jsxs("div",{className:"artifact-item",children:[o.jsx("div",{className:`artifact-icon ${v.is_image?"image":""}`,children:v.is_image?o.jsx(g_,{size:16}):o.jsx(f_,{size:16})}),o.jsxs("div",{className:"artifact-info",children:[o.jsx("div",{className:"artifact-name",title:v.filename,children:v.filename}),o.jsxs("div",{className:"artifact-meta",children:[v.mime_type||"unknown type",v.size!==null&&` • ${f(v.size)}`]})]}),o.jsxs("div",{className:"artifact-actions",children:[v.is_image&&o.jsx("button",{className:"artifact-btn",title:"Preview",onClick:()=>g(v),children:o.jsx(Or,{size:14})}),o.jsx("button",{className:"artifact-btn",title:"Download",onClick:()=>h(v.filename),children:o.jsx(Ai,{size:14})})]}),v.is_image&&c===v.filename&&(e==null?void 0:e.id)&&t&&o.jsx("div",{className:"artifact-preview",children:o.jsx("img",{src:Xs(e.id,t,v.filename),alt:v.filename})})]},v.filename)):o.jsxs("div",{className:"artifacts-empty",children:[o.jsx(Aa,{size:24,style:{marginBottom:8,opacity:.5}}),o.jsx("div",{children:"Start a session to see artifacts"})]})]})]})}function _c(e){if(!e)return{text:"",isError:!1};if(e.success===!1)return{text:e.error||"Unknown error",isError:!0};let t=e.result||e;if(typeof t=="string")try{const n=t.replace(/'/g,'"').replace(/True/g,"true").replace(/False/g,"false").replace(/None/g,"null");t=JSON.parse(n)}catch{return{text:t,isError:!1}}return t.content&&Array.isArray(t.content)?{text:t.content.filter(r=>r.type==="text").map(r=>r.text).join(`
`),isError:t.isError===!0}:{text:typeof t=="string"?t:JSON.stringify(t,null,2),isError:!1}}function dg(e,t){if(!t||!t.trim())return e;const n=t.trim();let r=e;try{r=JSON.parse(e)}catch{}if(n.startsWith("js:")){const i=n.slice(3).trim();try{const a=new Function("value","data",`return ${i}`)(e,r);return typeof a=="string"?a:JSON.stringify(a,null,2)}catch(s){return`[JS error: ${s}]`}}if(n.startsWith("."))try{const i=n.slice(1).split(".").filter(Boolean);let s=r;for(const a of i){const l=a.match(/^(\w+)?\[(\d+)\]$/);l?(l[1]&&(s=s[l[1]]),s=s[parseInt(l[2])]):s=s[a]}return s==null?"[No match]":typeof s=="string"?s:JSON.stringify(s,null,2)}catch(i){return`[Path error: ${i.message}]`}try{const s=new Function("value","data",`return ${n}`)(e,r);return typeof s=="string"?s:JSON.stringify(s,null,2)}catch(i){return`[Transform error: ${i.message}]`}}function O8({project:e,selectedEventIndex:t,sandboxMode:n}){var ee,le;const{watches:r,updateWatch:i,addWatch:s,removeWatch:a,runEvents:l}=ht(),[c,u]=k.useState(!1),[d,p]=k.useState(null),[f,h]=k.useState({}),[g,v]=k.useState(new Set),[_,m]=k.useState(""),[x,y]=k.useState(""),[j,A]=k.useState({}),[S,P]=k.useState(""),[N,V]=k.useState([]),[E,I]=k.useState(null),[R,q]=k.useState(null),[T,O]=k.useState(!1);k.useEffect(()=>{Hd().then(V).catch(console.error)},[]);const D=k.useMemo(()=>{const Y=e.mcp_servers||[],B=new Set(Y.map(J=>J.name)),$=N.filter(J=>!B.has(J.name));return[...Y,...$]},[e.mcp_servers,N]),C=k.useCallback(async Y=>{if(!(f[Y]||g.has(Y))){v(B=>new Set([...B,Y]));try{const B=await Ce(`/projects/${e.id}/mcp-servers/${encodeURIComponent(Y)}/test-connection`,{method:"POST"});B.success&&h($=>({...$,[Y]:B.tools}))}catch(B){console.error("Failed to load tools:",B)}finally{v(B=>{const $=new Set(B);return $.delete(Y),$})}}},[e.id,f,g]);k.useEffect(()=>{var J;if(d)return;if(!_||!x){A({});return}const B=(f[_]||[]).find(Q=>Q.name===x);if(!((J=B==null?void 0:B.parameters)!=null&&J.properties)){A({});return}const $={};Object.entries(B.parameters.properties).forEach(([Q,ne])=>{ne.type==="string"?$[Q]=ne.default||"":ne.type==="number"||ne.type==="integer"?$[Q]=ne.default||0:ne.type==="boolean"?$[Q]=ne.default||!1:$[Q]=ne.default||null}),A($)},[_,x,f,d]);const L=()=>{p(null),m(""),y(""),A({}),P(""),I(null),q(null),u(!0)},M=Y=>{if(p(Y.id),m(Y.serverName),y(Y.toolName),A({...Y.args}),P(Y.transform||""),Y.result){const{text:B}=_c(Y.result);I(B),q(null)}else I(null),q(null);f[Y.serverName]||C(Y.serverName),u(!0)},w=async()=>{var B;if(!_||!x)return;O(!0),q(null);const Y=((B=e.app)==null?void 0:B.id)||`app_${e.id}`;try{const $=await Ce(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:_,tool_name:x,arguments:j,sandbox_mode:n,app_id:n?Y:void 0})}),{text:J,isError:Q}=_c($);Q?(q(J),I(null)):(I(J),q(null))}catch($){q(String($)),I(null)}finally{O(!1)}},H=k.useMemo(()=>E?!S||!S.trim()?E:dg(E,S):null,[E,S]),K=()=>{if(!(!_||!x)){if(d){i(d,{serverName:_,toolName:x,args:{...j},transform:S||void 0});const Y=r.find(B=>B.id===d);Y&&z({...Y,serverName:_,toolName:x,args:j,transform:S||void 0,history:Y.history||[]})}else{const Y={id:`watch-${Date.now()}`,serverName:_,toolName:x,args:{...j},transform:S||void 0,history:[]};s(Y),z(Y)}u(!1)}},b=Y=>{a(Y)},z=k.useCallback(async(Y,B)=>{var ne;i(Y.id,{isLoading:!0,error:void 0});const $=B??l.length-1,J=Date.now(),Q=((ne=e.app)==null?void 0:ne.id)||`app_${e.id}`;try{const me=await Ce(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:Y.serverName,tool_name:Y.toolName,arguments:Y.args,sandbox_mode:n,app_id:n?Q:void 0})}),ve={eventIndex:$,timestamp:J,result:me},Z=[...Y.history||[],ve];i(Y.id,{result:me,isLoading:!1,lastRun:J,history:Z})}catch(me){const ve={eventIndex:$,timestamp:J,error:String(me)},Z=[...Y.history||[],ve];i(Y.id,{error:String(me),isLoading:!1,lastRun:J,history:Z})}},[e.id,(ee=e.app)==null?void 0:ee.id,i,l.length,n]),F=()=>{r.forEach(Y=>z(Y))},U=k.useMemo(()=>!_||!x?null:(f[_]||[]).find(B=>B.name===x),[_,x,f]);return o.jsxs("div",{className:"tool-watch-panel",children:[o.jsxs("div",{className:"watch-header",children:[o.jsx(Or,{size:14}),o.jsx("span",{children:"Tool Watch"}),o.jsx("span",{className:"watch-auto-badge",title:"Watches auto-refresh on every event",children:"⚡ Auto"}),o.jsxs("div",{className:"watch-actions",children:[o.jsx("button",{className:"watch-btn",onClick:F,title:"Refresh all",children:o.jsx(Xt,{size:12})}),o.jsx("button",{className:"watch-btn",onClick:L,title:"Add watch",children:o.jsx(Xe,{size:12})})]})]}),r.length===0?o.jsxs("div",{className:"watch-empty",children:[o.jsx(Or,{size:20,style:{opacity:.3}}),o.jsx("span",{children:"No watch expressions"}),o.jsxs("button",{className:"add-watch-btn",onClick:L,children:[o.jsx(Xe,{size:12})," Add Tool Watch"]})]}):o.jsx("div",{className:"watch-list",children:r.map(Y=>{let B=Y.result,$=Y.error;if(t!==null&&Y.history&&Y.history.length>0){const ve=Y.history.filter(Z=>Z.eventIndex<=t);if(ve.length>0){const Z=ve[ve.length-1];B=Z.result,$=Z.error}else B=void 0,$=void 0}const{text:J,isError:Q}=B?_c(B):{text:"",isError:!1},ne=B?dg(J,Y.transform):"",me=$||Q;return o.jsxs("div",{className:`watch-item ${me?"error":""}`,children:[o.jsxs("div",{className:"watch-item-header",children:[o.jsxs("span",{className:"watch-expr",children:[o.jsx("span",{className:"watch-server",children:Y.serverName}),o.jsx("span",{className:"watch-tool",children:Y.toolName}),Object.keys(Y.args).length>0&&o.jsxs("span",{className:"watch-args",children:["(",Object.entries(Y.args).map(([ve,Z])=>`${ve}=${JSON.stringify(Z)}`).join(", "),")"]}),t!==null&&o.jsxs("span",{className:"watch-time-indicator",children:["@",t]})]}),o.jsxs("div",{className:"watch-item-actions",children:[o.jsx("button",{onClick:()=>M(Y),title:"Edit watch",children:o.jsx(dn,{size:10})}),o.jsx("button",{onClick:()=>z(Y),title:"Refresh",children:Y.isLoading?o.jsx(Xt,{size:10,className:"spin"}):o.jsx(Xt,{size:10})}),o.jsx("button",{onClick:()=>b(Y.id),title:"Remove",children:o.jsx(Ue,{size:10})})]})]}),o.jsx("div",{className:"watch-result",children:Y.isLoading?o.jsx("span",{className:"loading",children:"Loading..."}):$?o.jsx("span",{className:"error",children:$}):B?o.jsx("pre",{className:Q?"error-text":"",children:ne}):o.jsx("span",{className:"no-result",children:t!==null?"No data at this event":"Not yet run"})})]},Y.id)})}),c&&o.jsx("div",{className:"watch-dialog-overlay",onClick:()=>u(!1),children:o.jsxs("div",{className:"watch-dialog",onClick:Y=>Y.stopPropagation(),children:[o.jsxs("div",{className:"dialog-header",children:[o.jsx("span",{children:d?"Edit Watch":"Add Tool Watch"}),o.jsx("button",{onClick:()=>u(!1),children:o.jsx(Ur,{size:14})})]}),o.jsxs("div",{className:"dialog-body",children:[o.jsxs("div",{className:"form-row",children:[o.jsx("label",{children:"MCP Server"}),o.jsxs("select",{value:_,onChange:Y=>{m(Y.target.value),d||y(""),Y.target.value&&C(Y.target.value)},children:[o.jsx("option",{value:"",children:"Select server..."}),D.map(Y=>o.jsx("option",{value:Y.name,children:Y.name},Y.name))]})]}),o.jsxs("div",{className:"form-row",children:[o.jsx("label",{children:"Tool"}),o.jsxs("select",{value:x,onChange:Y=>y(Y.target.value),disabled:!_||g.has(_),children:[o.jsx("option",{value:"",children:g.has(_)?"Loading tools...":"Select tool..."}),(f[_]||[]).map(Y=>o.jsx("option",{value:Y.name,children:Y.name},Y.name))]})]}),(U==null?void 0:U.description)&&o.jsx("div",{className:"tool-desc",children:U.description}),((le=U==null?void 0:U.parameters)==null?void 0:le.properties)&&Object.keys(U.parameters.properties).length>0&&o.jsxs("div",{className:"tool-args",children:[o.jsx("label",{children:"Arguments"}),Object.entries(U.parameters.properties).map(([Y,B])=>{var $,J;return o.jsxs("div",{className:"arg-row",children:[o.jsxs("span",{className:"arg-name",children:[Y,(($=U.parameters.required)==null?void 0:$.includes(Y))&&o.jsx("span",{className:"required",children:"*"})]}),o.jsx("input",{type:B.type==="number"||B.type==="integer"?"number":"text",value:typeof j[Y]=="object"?JSON.stringify(j[Y]):j[Y]??"",onChange:Q=>A(ne=>({...ne,[Y]:Q.target.value})),placeholder:((J=B.description)==null?void 0:J.slice(0,40))||Y})]},Y)})]}),_&&x&&o.jsxs("div",{className:"test-section",children:[o.jsxs("div",{className:"test-header",children:[o.jsx("label",{children:"Test & Preview"}),o.jsxs("button",{className:"test-btn",onClick:w,disabled:T,children:[T?o.jsx(Xt,{size:12,className:"spin"}):o.jsx(fr,{size:12}),T?"Running...":"Test Run"]})]}),R&&o.jsxs("div",{className:"test-result error",children:[o.jsx("span",{className:"test-label",children:"Error:"}),o.jsx("pre",{children:R})]}),E&&o.jsxs("div",{className:"test-result",children:[o.jsx("span",{className:"test-label",children:"Raw Result:"}),o.jsx("pre",{children:E})]})]}),o.jsxs("div",{className:"form-row transform-row",children:[o.jsx("label",{children:"Transform (optional)"}),o.jsx("input",{type:"text",value:S,onChange:Y=>P(Y.target.value),placeholder:"e.g., .items[0].name or .content[].text"}),o.jsxs("div",{className:"transform-hints",children:[o.jsx("span",{className:"hint-title",children:"Path:"}),o.jsx("code",{onClick:()=>P(".items[0].name"),children:".items[0].name"}),o.jsx("code",{onClick:()=>P(".content[0].text"),children:".content[0].text"}),o.jsx("code",{onClick:()=>P(".result.data"),children:".result.data"}),o.jsx("span",{className:"hint-title",children:"JS:"}),o.jsx("code",{onClick:()=>P("js:value.split('\\n')[0]"),children:"js:value.split('\\n')[0]"}),o.jsx("code",{onClick:()=>P("js:data.items?.length"),children:"js:data.items?.length"})]})]}),E&&S&&o.jsxs("div",{className:"transform-preview",children:[o.jsx("span",{className:"test-label",children:"Transform Preview:"}),o.jsx("pre",{className:H!=null&&H.startsWith("[Transform error")?"error":"",children:H})]})]}),o.jsxs("div",{className:"dialog-footer",children:[o.jsx("button",{className:"cancel-btn",onClick:()=>u(!1),children:"Cancel"}),o.jsx("button",{className:"add-btn",onClick:K,disabled:!_||!x,children:d?"Save Changes":"Add Watch"})]})]})})]})}function $8(){var Rp,Ip;const{project:e,updateProject:t,isRunning:n,setIsRunning:r,runEvents:i,addRunEvent:s,clearRunEvents:a,clearWatchHistories:l,runAgentId:c,setRunAgentId:u,watches:d,updateWatch:p,currentSessionId:f,setCurrentSessionId:h}=ht(),[g,v]=k.useState(""),[_,m]=k.useState(null),[x,y]=k.useState(null),[j,A]=k.useState(null),[S,P]=k.useState(""),[N,V]=k.useState(new Set(["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_start","callback_end","callback_error"])),[E,I]=k.useState(()=>{const W=localStorage.getItem("sandboxMode");return W!==null?W==="true":!0});k.useEffect(()=>{localStorage.setItem("sandboxMode",String(E))},[E]);const[R,q]=k.useState(null),[T,O]=k.useState(!1),[D,C]=k.useState({}),[L,M]=k.useState(!1),[w,H]=k.useState("agent"),K=k.useRef(null),b=k.useRef(!0),z=k.useRef(0),[F,U]=k.useState(!0),[ee,le]=k.useState(!0),[Y,B]=k.useState(!1),[$,J]=k.useState(!1),[Q,ne]=k.useState(360),[me,ve]=k.useState(!1),[Z,ce]=k.useState(!1),[be,ae]=k.useState(!1),[_e,G]=k.useState([]),te=k.useRef(null);k.useEffect(()=>{if(!e)return;const W=`promptHistory_${e.id}`,re=localStorage.getItem(W);if(re)try{const pe=JSON.parse(re),ge=Object.entries(pe).map(([de,Te])=>({prompt:de,count:Te})).sort((de,Te)=>Te.count-de.count);G(ge)}catch(pe){console.error("Failed to parse prompt history:",pe)}else G([])},[e==null?void 0:e.id]);const ue=k.useCallback(W=>{const re=W.trim();if(!re||!e)return;const pe=`promptHistory_${e.id}`,ge=localStorage.getItem(pe),de=ge?JSON.parse(ge):{};de[re]=(de[re]||0)+1,localStorage.setItem(pe,JSON.stringify(de));const Te=Object.entries(de).map(([Me,Mt])=>({prompt:Me,count:Mt})).sort((Me,Mt)=>Mt.count-Me.count);G(Te)},[e]),xe=k.useMemo(()=>{const W=g.toLowerCase().trim();return _e.filter(re=>!W||re.prompt.toLowerCase().includes(W)).slice(0,10)},[_e,g]),[X,oe]=k.useState([60,80,100,80,1]),[ye,je]=k.useState(null),ke=k.useRef(0),Re=k.useRef(0),[qe,rt]=k.useState([]),[Ee,it]=k.useState(null),[Je,Nn]=k.useState(!1),Jt=k.useRef(0),Ep=k.useCallback(async(W,re)=>{var Te;if(!e)return;p(W.id,{isLoading:!0,error:void 0});const pe=re??i.length-1,ge=Date.now(),de=((Te=e.app)==null?void 0:Te.id)||`app_${e.id}`;try{const Me=await Ce(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:W.serverName,tool_name:W.toolName,arguments:W.args,sandbox_mode:E,app_id:E?de:void 0})}),Mt={eventIndex:pe,timestamp:ge,result:Me},hn=[...W.history||[],Mt];p(W.id,{result:Me,isLoading:!1,lastRun:ge,history:hn})}catch(Me){const Mt={eventIndex:pe,timestamp:ge,error:String(Me)},hn=[...W.history||[],Mt];p(W.id,{error:String(Me),isLoading:!1,lastRun:ge,history:hn})}},[e==null?void 0:e.id,(Rp=e==null?void 0:e.app)==null?void 0:Rp.id,p,i.length,E]);k.useEffect(()=>{if(i.length>Jt.current&&d.length>0){const W=i.length-1;d.forEach(re=>{re.isLoading||Ep(re,W)})}Jt.current=i.length},[i.length,d,Ep]),k.useEffect(()=>{c!==null&&(zp(c),u(null))},[c,u]);const[Li,zp]=k.useState(null),cs=k.useRef(null),wl=k.useRef(null);k.useEffect(()=>{if(!me)return;const W=pe=>{if(!wl.current)return;const de=wl.current.getBoundingClientRect().right-pe.clientX;ne(Math.min(600,Math.max(200,de)))},re=()=>{ve(!1)};return document.addEventListener("mousemove",W),document.addEventListener("mouseup",re),()=>{document.removeEventListener("mousemove",W),document.removeEventListener("mouseup",re)}},[me]),k.useEffect(()=>{if(ye===null)return;const W=pe=>{const ge=pe.clientX-ke.current,de=Math.max(40,Re.current+ge);oe(Te=>{const Me=[...Te];return Me[ye]=de,Me})},re=()=>{je(null)};return document.addEventListener("mousemove",W),document.addEventListener("mouseup",re),document.body.style.cursor="col-resize",document.body.style.userSelect="none",()=>{document.removeEventListener("mousemove",W),document.removeEventListener("mouseup",re),document.body.style.cursor="",document.body.style.userSelect=""}},[ye]);const us=(W,re)=>{re.preventDefault(),ke.current=re.clientX,Re.current=X[W],je(W)},Tp=X.map((W,re)=>re===X.length-1?`minmax(${W}px, 1fr)`:`${W}px`).join(" "),q1=k.useMemo(()=>i.length===0?{min:0,max:0}:{min:i[0].timestamp,max:i[i.length-1].timestamp},[i]),Pt=k.useMemo(()=>i.filter((W,re)=>{var pe,ge,de;if(j&&(W.timestamp<j[0]||W.timestamp>j[1])||N.size>0&&!N.has(W.event_type))return!1;if(F&&W.event_type==="model_response"){const Te=((ge=(pe=W.data)==null?void 0:pe.response_content)==null?void 0:ge.parts)||((de=W.data)==null?void 0:de.parts)||[],Me=Te.some(hn=>hn.type==="function_call"),Mt=Te.some(hn=>hn.type==="text");if(!Me&&!Mt)return!1}return!(S&&!JSON.stringify(W).toLowerCase().includes(S.toLowerCase()))}),[i,j,N,S,F]),ds=k.useMemo(()=>{var ge;let W=0,re=0;const pe=x!==null?x+1:i.length;for(let de=0;de<pe;de++){const Te=i[de];Te.event_type==="model_response"&&((ge=Te.data)!=null&&ge.token_counts)&&(W+=Te.data.token_counts.input||0,re+=Te.data.token_counts.output||0)}return{input:W,output:re,total:W+re}},[i,x]),Ap=x!==null?i[x]:null;k.useEffect(()=>{if(!e){rt([]);return}(async()=>{Nn(!0);try{const re=await wu(e.id);rt(re)}catch(re){console.error("Failed to load sessions:",re),rt([])}finally{Nn(!1)}})()},[e]);const kl=k.useCallback(async W=>{if(!e){it(null);return}if(!W){a(),l(),h(null),it(null),y(null),A(null);return}try{const re=await Jy(e.id,W);a(),l(),h(re.id),it(W),y(null),A(null);for(const pe of re.events)s(pe)}catch(re){alert(`Failed to load session: ${re.message||"Unknown error"}`)}},[e,a,l,h,s]);k.useEffect(()=>{if(!e||qe.length===0||Je)return;const re=new URLSearchParams(window.location.search).get("session");if(re)if(qe.some(ge=>ge.id===re)){kl(re);const ge=window.location.pathname;window.history.replaceState({},"",ge)}else console.warn(`Session ${re} not found in available sessions`)},[e,qe,Je,kl]),k.useEffect(()=>{n&&cs.current&&(cs.current.scrollTop=cs.current.scrollHeight)},[i.length,n]);const Ri=k.useCallback(W=>{const re=W??g;if(!e||!re.trim()||n)return;ce(!0),ue(re),ae(!1),v(re),_&&(_.close(),m(null)),a(),l(),it(null),h(null),r(!0),y(null),A(null);const pe=Xy(e.id);m(pe),pe.onopen=()=>{pe.send(JSON.stringify({message:re,agent_id:Li||void 0,sandbox_mode:E}))},pe.onmessage=ge=>{var Te;const de=JSON.parse(ge.data);if(de.event_type==="agent_start"&&((Te=de.data)!=null&&Te.session_id)){const Me=de.data.session_id;de.data.session_reused,h(Me),Me&&qe.some(Mt=>Mt.id===Me)&&it(Me)}else if(de.type==="session_started")h(de.session_id),de.session_id&&qe.some(Me=>Me.id===de.session_id)&&it(de.session_id);else if(de.type==="sandbox_starting")s({timestamp:Date.now()/1e3,event_type:"agent_start",agent_name:"sandbox",data:{message:"Starting Docker sandbox..."}});else if(de.type==="sandbox_started")s({timestamp:Date.now()/1e3,event_type:"agent_start",agent_name:"sandbox",data:{message:`Sandbox started (ID: ${de.sandbox_id})`}});else if(de.type==="sandbox_response")s({timestamp:Date.now()/1e3,event_type:"model_response",agent_name:"sandbox",data:de.data});else if(de.event_type==="approval_required"||de.type==="network_request"&&de.event_type==="approval_required"){const Me={id:de.id,method:de.method||"GET",url:de.url,host:de.host,source:de.source||"agent",headers:de.headers||{},timeout:de.timeout||30};q(Me),s({timestamp:Date.now()/1e3,event_type:"callback_start",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`⚠️ Network request to ${de.host} requires approval`,host:de.host,url:de.url}})}else de.type==="completed"?(r(!1),pe.close()):de.type==="error"?(r(!1),s({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:de.error}})):s(de)},pe.onerror=()=>{r(!1),s({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:"WebSocket connection error"}})},pe.onclose=()=>{r(!1)}},[e,g,n,_,a,l,r,s,Li,h,E,ue]),J1=k.useCallback(()=>{_==null||_.close(),r(!1)},[_,r]),K1=k.useCallback(async(W,re,pe)=>{var hn,Op,$p,Dp,Fp,Bp,Up,Vp,Wp,Hp,qp,Jp,Kp,Gp,Yp,Qp,Xp,Zp,ef,tf,nf,rf,of,sf,af,lf;if(!R||!e)return;const ge=((hn=e.app)==null?void 0:hn.id)||e.id,de=W?"allow_pattern":"allow_once",Te=W||R.host,Me=re||"exact",Mt=pe?`/sandbox/${ge}/approval?project_id=${e.id}`:`/sandbox/${ge}/approval`;try{if(await Ce(Mt,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:R.id,action:de,pattern:Te,pattern_type:Me,persist:pe||!1})}),pe&&de==="allow_pattern"){const jl=((Dp=($p=(Op=e.app)==null?void 0:Op.sandbox)==null?void 0:$p.allowlist)==null?void 0:Dp.user)||[],a0={id:`pattern_${Date.now().toString(36)}`,pattern:Te,pattern_type:Me,source:"approved",added_at:new Date().toISOString()};t({app:{...e.app,sandbox:{...(Fp=e.app)==null?void 0:Fp.sandbox,enabled:((Up=(Bp=e.app)==null?void 0:Bp.sandbox)==null?void 0:Up.enabled)??!1,allow_all_network:((Wp=(Vp=e.app)==null?void 0:Vp.sandbox)==null?void 0:Wp.allow_all_network)??!1,allowlist:{auto:((Jp=(qp=(Hp=e.app)==null?void 0:Hp.sandbox)==null?void 0:qp.allowlist)==null?void 0:Jp.auto)||[],user:[...jl,a0]},unknown_action:((Gp=(Kp=e.app)==null?void 0:Kp.sandbox)==null?void 0:Gp.unknown_action)??"ask",approval_timeout:((Qp=(Yp=e.app)==null?void 0:Yp.sandbox)==null?void 0:Qp.approval_timeout)??30,agent_memory_limit_mb:((Zp=(Xp=e.app)==null?void 0:Xp.sandbox)==null?void 0:Zp.agent_memory_limit_mb)??512,agent_cpu_limit:((tf=(ef=e.app)==null?void 0:ef.sandbox)==null?void 0:tf.agent_cpu_limit)??1,mcp_memory_limit_mb:((rf=(nf=e.app)==null?void 0:nf.sandbox)==null?void 0:rf.mcp_memory_limit_mb)??256,mcp_cpu_limit:((sf=(of=e.app)==null?void 0:of.sandbox)==null?void 0:sf.mcp_cpu_limit)??.5,run_timeout:((lf=(af=e.app)==null?void 0:af.sandbox)==null?void 0:lf.run_timeout)??300}}})}s({timestamp:Date.now()/1e3,event_type:"callback_end",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`✅ Approved: ${Te}`,pattern:Te,action:de}})}catch(jl){console.error("Failed to approve:",jl)}q(null)},[R,e,s,t]),G1=k.useCallback(async()=>{var re;if(!R||!e)return;const W=((re=e.app)==null?void 0:re.id)||e.id;try{await Ce(`/sandbox/${W}/approval`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:R.id,action:"deny"})}),s({timestamp:Date.now()/1e3,event_type:"callback_end",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`❌ Denied: ${R.host}`,host:R.host,action:"deny"}})}catch(pe){console.error("Failed to deny:",pe)}q(null)},[R,e,s]),Ii=k.useCallback(async(W=!0)=>{var pe;if(!e)return;const re=((pe=e.app)==null?void 0:pe.id)||`app_${e.id}`;W&&M(!0);try{const[ge,de]=await Promise.all([Ce(`/sandbox/${re}/logs?container=agent&tail=500`).catch(()=>null),Ce(`/sandbox/${re}/logs?container=gateway&tail=500`).catch(()=>null)]);C({agent:(ge==null?void 0:ge.logs)||(ge==null?void 0:ge.error)||"No logs available",gateway:(de==null?void 0:de.logs)||(de==null?void 0:de.error)||"No logs available"})}catch(ge){console.error("Failed to fetch logs:",ge),C({agent:`Error fetching logs: ${ge}`,gateway:`Error fetching logs: ${ge}`})}finally{W&&M(!1)}},[e]),Y1=k.useCallback(()=>{O(!0),Ii()},[Ii]);k.useEffect(()=>{if(!T||!K.current||L)return;const W=K.current,re=z.current,pe=W.scrollHeight;setTimeout(()=>{if(K.current){if(b.current)K.current.scrollTop=K.current.scrollHeight;else if(re>0&&pe>re){const ge=pe-re;K.current.scrollTop+=ge}z.current=K.current.scrollHeight}},50)},[T,w,D,L]),k.useEffect(()=>{T&&(b.current=!0,z.current=0)},[T,w]);const Q1=k.useCallback(()=>{if(!K.current)return;const W=K.current,pe=W.scrollHeight-W.scrollTop-W.clientHeight<50;b.current=pe},[]);k.useEffect(()=>{if(!T)return;const W=setInterval(()=>{Ii(!1)},3e3);return()=>clearInterval(W)},[T,Ii]),k.useEffect(()=>{const W=re=>{if((re.metaKey||re.ctrlKey)&&re.key==="Enter"){re.preventDefault(),Ri();return}if(re.key==="ArrowDown"||re.key==="ArrowUp"){if(re.target instanceof HTMLInputElement||re.target instanceof HTMLTextAreaElement||(re.preventDefault(),Pt.length===0))return;if(re.key==="ArrowDown")if(x===null){const pe=i.indexOf(Pt[0]);y(pe)}else{const pe=Pt.findIndex(ge=>i.indexOf(ge)===x);if(pe<Pt.length-1){const ge=i.indexOf(Pt[pe+1]);y(ge)}}else if(re.key==="ArrowUp")if(x===null){const pe=i.indexOf(Pt[Pt.length-1]);y(pe)}else{const pe=Pt.findIndex(ge=>i.indexOf(ge)===x);if(pe>0){const ge=i.indexOf(Pt[pe-1]);y(ge)}}}};return window.addEventListener("keydown",W),()=>window.removeEventListener("keydown",W)},[Ri,Pt,x,i]);const X1=k.useCallback(()=>{var de;if(i.length===0)return;const W={version:1,exportedAt:new Date().toISOString(),projectId:e==null?void 0:e.id,projectName:e==null?void 0:e.name,agentId:Li||((de=e==null?void 0:e.app)==null?void 0:de.root_agent_id),events:i},re=new Blob([JSON.stringify(W,null,2)],{type:"application/json"}),pe=URL.createObjectURL(re),ge=document.createElement("a");ge.href=pe,ge.download=`run-${(e==null?void 0:e.name)||"export"}-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,document.body.appendChild(ge),ge.click(),document.body.removeChild(ge),URL.revokeObjectURL(pe)},[i,e,Li]),Z1=k.useCallback(async()=>{if(!f||!e){alert("No active session to save");return}try{const W=await qy(f);if(W.success){alert(W.message||"Session saved to memory successfully");try{const re=await wu(e.id);rt(re)}catch{}}else alert(`Failed to save to memory: ${W.error||"Unknown error"}`)}catch(W){alert(`Error saving to memory: ${W.message||"Unknown error"}`)}},[f,e]),[e0,ps]=k.useState(!1),[t0,n0]=k.useState([]),[Oi,Pp]=k.useState(""),[_l,r0]=k.useState("Test Case from Session"),[Mp,Lp]=k.useState(!1),i0=k.useCallback(async()=>{if(!f||!e){alert("No active session to create test case from");return}try{const W=await Ce(`/projects/${e.id}/eval-sets`);if(n0(W.eval_sets||[]),!W.eval_sets||W.eval_sets.length===0){confirm(`No evaluation sets found. Would you like to create one first?

Go to the Evals tab to create an evaluation set.`)&&(window.location.href=`/project/${e.id}/evals`);return}Pp(W.eval_sets[0].id),ps(!0)}catch(W){alert(`Error loading eval sets: ${W.message||"Unknown error"}`)}},[f,e]),o0=k.useCallback(async()=>{if(!f||!e||!Oi){alert("Please select an evaluation set");return}Lp(!0);try{const W=await Ce(`/projects/${e.id}/session-to-eval-case`,{method:"POST",body:JSON.stringify({session_id:f,eval_set_id:Oi,case_name:_l})});ps(!1),alert(`Test case "${W.eval_case.name}" created successfully!

Token count: ${W.session_token_count.toLocaleString()} tokens

Go to the Evals tab to view and edit the test case.`)}catch(W){alert(`Error creating test case: ${W.message||"Unknown error"}`)}finally{Lp(!1)}},[f,e,Oi,_l]),s0=k.useCallback(()=>{const W=document.createElement("input");W.type="file",W.accept=".json",W.onchange=async re=>{var ge;const pe=(ge=re.target.files)==null?void 0:ge[0];if(pe)try{const de=await pe.text(),Te=JSON.parse(de);if(!Te.events||!Array.isArray(Te.events)){alert("Invalid run file: missing events array");return}a(),l(),y(null),A(null),Te.events.forEach(Me=>{s(Me)})}catch(de){alert(`Failed to load run file: ${de}`)}},W.click()},[a,l,s]);return k.useEffect(()=>{if(x!==null){const W=document.querySelector(".event-row.selected");W==null||W.scrollIntoView({behavior:"smooth",block:"nearest"})}},[x]),e?o.jsxs("div",{className:`run-panel ${me?"resizing":""}`,children:[o.jsx("style",{children:`
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
      `}),o.jsx(C8,{agents:e.agents,events:i,selectedEventIndex:x,isOpen:Z,onOpenChange:ce}),o.jsxs("div",{className:"input-area",children:[o.jsxs("select",{className:"agent-selector",value:Li||"",onChange:W=>zp(W.target.value||null),disabled:n,title:"Select which agent to run",children:[o.jsx("option",{value:"",children:e.app.root_agent_id?`Root: ${((Ip=e.agents.find(W=>W.id===e.app.root_agent_id))==null?void 0:Ip.name)||e.app.root_agent_id}`:"No root agent"}),e.agents.filter(W=>W.id!==e.app.root_agent_id).map(W=>o.jsxs("option",{value:W.id,children:[W.name," (",W.type.replace("Agent",""),")"]},W.id))]}),o.jsxs("select",{className:"agent-selector",value:Ee||"",onChange:W=>kl(W.target.value||null),disabled:n||Je,style:{minWidth:180},title:"Load a saved session",children:[o.jsx("option",{value:"",children:Je?"Loading...":"Load Session..."}),qe.map(W=>{const re=new Date(W.started_at*1e3),pe=W.duration?`${W.duration.toFixed(1)}s`:"?";return o.jsxs("option",{value:W.id,children:[re.toLocaleString()," (",W.event_count," events, ",pe,")"]},W.id)})]}),o.jsxs("div",{style:{position:"relative",flex:1,display:"flex"},children:[o.jsx("input",{ref:te,type:"text",placeholder:"Enter your query...",value:g,onChange:W=>v(W.target.value),onFocus:()=>ae(!0),onBlur:()=>setTimeout(()=>ae(!1),150),onKeyDown:W=>{W.key==="Enter"&&!W.shiftKey?Ri():W.key==="Escape"&&ae(!1)},disabled:n,style:{flex:1}}),be&&xe.length>0&&o.jsx("div",{style:{position:"absolute",top:"100%",left:0,right:0,background:"#18181b",border:"1px solid #3f3f46",borderRadius:"6px",marginTop:"4px",maxHeight:"240px",overflowY:"auto",zIndex:100,boxShadow:"0 4px 12px rgba(0,0,0,0.4)"},children:xe.map((W,re)=>o.jsxs("div",{style:{padding:"8px 12px",fontSize:"12px",color:"#e4e4e7",cursor:"pointer",borderBottom:re<xe.length-1?"1px solid #27272a":"none",display:"flex",justifyContent:"space-between",alignItems:"center"},onMouseDown:pe=>{pe.preventDefault(),Ri(W.prompt)},onMouseEnter:pe=>{pe.currentTarget.style.background="#27272a"},onMouseLeave:pe=>{pe.currentTarget.style.background="transparent"},children:[o.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1,marginRight:"8px"},children:W.prompt}),o.jsxs("span",{style:{fontSize:"10px",color:"#71717a",flexShrink:0},children:["×",W.count]})]},re))})]}),n?o.jsxs("button",{className:"stop",onClick:J1,children:[o.jsx(__,{size:14}),"Stop"]}):o.jsxs("button",{onClick:()=>Ri(),disabled:!g.trim(),children:[o.jsx(fr,{size:14}),"Run"]}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"4px",marginLeft:"12px",fontSize:"11px",color:E?"#22d3ee":"#71717a",cursor:"pointer"},title:"Run in isolated Docker container",children:[o.jsx("input",{type:"checkbox",checked:E,onChange:W=>I(W.target.checked),disabled:n,style:{accentColor:"#22d3ee"}}),"🐳 Sandbox"]}),E&&o.jsx("button",{onClick:Y1,style:{background:"transparent",border:"1px solid #3f3f46",borderRadius:"4px",padding:"2px 8px",marginLeft:"8px",fontSize:"11px",color:"#a1a1aa",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"},title:"View container logs",children:"📋 Logs"})]}),o.jsxs("div",{className:"toolbar",children:[o.jsxs("div",{className:"toolbar-section",children:[o.jsx(mv,{size:12,style:{color:"#71717a"}}),o.jsx("input",{type:"text",placeholder:"Filter events...",value:S,onChange:W=>P(W.target.value)})]}),o.jsx("div",{className:"toolbar-divider"}),o.jsxs("div",{className:"toolbar-section",children:[["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_error"].map(W=>o.jsx("button",{className:`filter-chip ${N.has(W)?"active":""}`,onClick:()=>{const re=new Set(N);re.has(W)?re.delete(W):re.add(W),V(re)},children:W.replace("_"," ")},W)),o.jsx("button",{className:`filter-chip ${N.has("callback_start")&&N.has("callback_end")?"active":""}`,onClick:()=>{const W=new Set(N);W.has("callback_start")&&W.has("callback_end")?(W.delete("callback_start"),W.delete("callback_end")):(W.add("callback_start"),W.add("callback_end")),V(W)},title:"Show/hide callback events",children:"callback"}),o.jsx("button",{className:`filter-chip ${F?"active":""}`,onClick:()=>U(!F),title:"Hide LLM_RESP (complete) events",children:"hide (complete)"})]}),o.jsx("div",{className:"toolbar-divider"}),o.jsxs("div",{className:"toolbar-section",children:[o.jsxs("button",{className:`toolbar-btn ${ee?"active":""}`,onClick:()=>{le(!ee),B(!1),J(!1)},children:[o.jsx(In,{size:12}),"State"]}),o.jsxs("button",{className:`toolbar-btn ${$?"active":""}`,onClick:()=>{J(!$),le(!1),B(!1)},children:[o.jsx(Aa,{size:12}),"Artifacts"]}),o.jsxs("button",{className:`toolbar-btn ${Y?"active":""}`,onClick:()=>{B(!Y),le(!1),J(!1)},children:[o.jsx(Zl,{size:12}),"Tools"]})]}),o.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:[o.jsxs("span",{style:{fontSize:10,color:"#71717a"},children:[Pt.length," / ",i.length," events"]}),j&&o.jsx("button",{className:"toolbar-btn",onClick:()=>A(null),children:"Clear Range"})]})]}),o.jsxs("div",{className:"main-content",ref:wl,children:[o.jsxs("div",{className:"event-list-container",children:[o.jsxs("div",{className:"event-list-header",style:{gridTemplateColumns:Tp},children:[o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"#"}),o.jsx("div",{className:`column-resize-handle ${ye===0?"active":""}`,onMouseDown:W=>us(0,W)})]}),o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"Time"}),o.jsx("div",{className:`column-resize-handle ${ye===1?"active":""}`,onMouseDown:W=>us(1,W)})]}),o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"Agent"}),o.jsx("div",{className:`column-resize-handle ${ye===2?"active":""}`,onMouseDown:W=>us(2,W)})]}),o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"Type"}),o.jsx("div",{className:`column-resize-handle ${ye===3?"active":""}`,onMouseDown:W=>us(3,W)})]}),o.jsx("div",{className:"header-cell",children:o.jsx("span",{children:"Info"})})]}),o.jsx("div",{className:"event-list",ref:cs,children:Pt.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(fv,{size:24}),o.jsx("span",{children:i.length===0?"No events yet":"No matching events"})]}):Pt.map((W,re)=>{const pe=i.indexOf(W),ge=lg[W.event_type]||lg.error,de=N8[W.event_type]||Ma;return o.jsxs("div",{className:`event-row ${x===pe?"selected":""}`,style:{background:ge.bg,gridTemplateColumns:Tp},onClick:()=>y(pe),onDoubleClick:()=>{le(!1),B(!1),J(!1)},children:[o.jsx("div",{className:"index",children:pe}),o.jsx("div",{className:"time",style:{color:ge.fg},children:z8(W.timestamp,q1.min)}),o.jsx("div",{className:"agent",children:o.jsx("span",{className:"agent-badge",style:{backgroundColor:Ha(W.agent_name).bg,color:Ha(W.agent_name).fg},children:W.agent_name})}),o.jsxs("div",{className:"type",style:{color:ge.fg},children:[o.jsx(de,{size:10}),W.event_type.split("_")[0]]}),o.jsx("div",{className:"summary",children:E8(W)})]},pe)})})]}),o.jsxs("div",{className:"side-panel-container",style:{width:Q},children:[o.jsx("div",{className:`resize-handle ${me?"active":""}`,onMouseDown:()=>ve(!0)}),o.jsxs("div",{className:"side-panel",style:{width:Q-4},children:[o.jsxs("div",{className:"side-panel-tabs",children:[o.jsxs("button",{className:`side-panel-tab ${!ee&&!Y&&!$?"active":""}`,onClick:()=>{le(!1),B(!1),J(!1)},children:[o.jsx(Or,{size:12,style:{marginRight:4}}),"Details"]}),o.jsxs("button",{className:`side-panel-tab ${ee?"active":""}`,onClick:()=>{le(!0),B(!1),J(!1)},children:[o.jsx(In,{size:12,style:{marginRight:4}}),"State"]}),o.jsxs("button",{className:`side-panel-tab ${$?"active":""}`,onClick:()=>{J(!0),le(!1),B(!1)},children:[o.jsx(Aa,{size:12,style:{marginRight:4}}),"Artifacts"]}),o.jsxs("button",{className:`side-panel-tab ${Y?"active":""}`,onClick:()=>{B(!0),le(!1),J(!1)},children:[o.jsx(Zl,{size:12,style:{marginRight:4}}),"Tools"]})]}),o.jsx("div",{className:"side-panel-content",children:Y?o.jsx(O8,{project:e,selectedEventIndex:x,sandboxMode:E}):$?o.jsx(I8,{project:e,sessionId:f}):ee?o.jsx(R8,{events:i,selectedEventIndex:x,project:e}):Ap?o.jsx(P8,{event:Ap}):o.jsxs("div",{className:"empty-state",children:[o.jsx(Or,{size:24}),o.jsx("span",{children:"Select an event to view details"})]})})]})]})]}),o.jsxs("div",{className:"stats-bar",children:[o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Events:"}),o.jsx("span",{className:"stat-value",children:i.length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Tool Calls:"}),o.jsx("span",{className:"stat-value",children:i.filter(W=>W.event_type==="tool_call").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Model Calls:"}),o.jsx("span",{className:"stat-value",children:i.filter(W=>W.event_type==="model_call").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Callbacks:"}),o.jsx("span",{className:"stat-value",children:i.filter(W=>W.event_type==="callback_start").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"State Changes:"}),o.jsx("span",{className:"stat-value",children:i.filter(W=>W.event_type==="state_change").length})]}),i.length>0&&o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Duration:"}),o.jsxs("span",{className:"stat-value",children:[((i[i.length-1].timestamp-i[0].timestamp)*1e3).toFixed(0),"ms"]})]}),ds.total>0&&o.jsx("div",{className:"stat-item token-stats",children:o.jsxs("span",{className:"stat-value token-value",children:[o.jsxs("span",{className:"token-in",title:"Input tokens",children:[ds.input.toLocaleString(),"↑"]}),o.jsxs("span",{className:"token-out",title:"Output tokens",children:[ds.output.toLocaleString(),"↓"]}),o.jsx("span",{className:"token-total",title:"Total tokens",children:ds.total.toLocaleString()})]})}),o.jsx("div",{className:"stats-bar-spacer"}),o.jsxs("button",{className:"stats-bar-btn",onClick:s0,title:"Load a saved run",children:[o.jsx(dl,{size:12}),"Load"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:X1,disabled:i.length===0,title:"Save current run to file",children:[o.jsx(Ai,{size:12}),"Save"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:Z1,disabled:!f||i.length===0,title:"Save current session to memory",children:[o.jsx(In,{size:12}),"Save to Memory"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:i0,disabled:!f||i.length===0,title:"Create evaluation test case from this session",style:{background:"rgba(var(--accent-primary-rgb), 0.15)"},children:[o.jsx(Su,{size:12}),"Create Test Case"]})]}),e0&&o.jsx("div",{className:"dialog-overlay",style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>ps(!1),children:o.jsxs("div",{className:"dialog-content",style:{background:"var(--bg-secondary)",borderRadius:"var(--radius-md)",padding:24,width:400,maxWidth:"90vw",border:"1px solid var(--border-color)"},onClick:W=>W.stopPropagation(),children:[o.jsxs("h3",{style:{marginBottom:16,display:"flex",alignItems:"center",gap:8},children:[o.jsx(Su,{size:18}),"Create Test Case from Session"]}),o.jsxs("div",{style:{marginBottom:16},children:[o.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Test Case Name"}),o.jsx("input",{type:"text",value:_l,onChange:W=>r0(W.target.value),placeholder:"Enter test case name",style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"}})]}),o.jsxs("div",{style:{marginBottom:20},children:[o.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Add to Evaluation Set"}),o.jsx("select",{value:Oi,onChange:W=>Pp(W.target.value),style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"},children:t0.map(W=>o.jsx("option",{value:W.id,children:W.name},W.id))})]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:16},children:"This will extract user messages and tool calls from the current session to create a replayable test case. You can edit the expected responses and tool calls in the Evals tab after creation."}),o.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>ps(!1),children:"Cancel"}),o.jsx("button",{className:"btn btn-primary",onClick:o0,disabled:Mp||!Oi,children:Mp?"Creating...":"Create Test Case"})]})]})}),R&&o.jsx(_E,{request:R,timeout:R.timeout||30,onApprove:K1,onDeny:G1,onClose:()=>q(null)}),T&&o.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>O(!1),children:o.jsxs("div",{style:{backgroundColor:"#18181b",borderRadius:"8px",border:"1px solid #3f3f46",width:"90%",maxWidth:"1400px",height:"80%",display:"flex",flexDirection:"column",overflow:"hidden"},onClick:W=>W.stopPropagation(),children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx(Zl,{size:16}),o.jsx("span",{style:{fontWeight:600},children:"Container Logs"})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsxs("button",{onClick:Ii,disabled:L,style:{background:"#3f3f46",border:"none",borderRadius:"4px",padding:"4px 8px",color:"#e4e4e7",cursor:L?"wait":"pointer",display:"flex",alignItems:"center",gap:"4px",fontSize:"12px"},children:[o.jsx(Xt,{size:12,className:L?"animate-spin":""}),"Refresh"]}),o.jsx("button",{onClick:()=>O(!1),style:{background:"transparent",border:"none",color:"#71717a",cursor:"pointer",padding:"4px"},children:o.jsx(Ur,{size:16})})]})]}),o.jsxs("div",{style:{display:"flex",gap:"0",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[o.jsx("button",{onClick:()=>H("agent"),style:{padding:"8px 16px",background:w==="agent"?"#18181b":"transparent",border:"none",borderBottom:w==="agent"?"2px solid #22d3ee":"2px solid transparent",color:w==="agent"?"#22d3ee":"#a1a1aa",cursor:"pointer",fontSize:"13px"},children:"🤖 Agent"}),o.jsx("button",{onClick:()=>H("gateway"),style:{padding:"8px 16px",background:w==="gateway"?"#18181b":"transparent",border:"none",borderBottom:w==="gateway"?"2px solid #22d3ee":"2px solid transparent",color:w==="gateway"?"#22d3ee":"#a1a1aa",cursor:"pointer",fontSize:"13px"},children:"🌐 Gateway"})]}),o.jsx("div",{ref:K,onScroll:Q1,style:{flex:1,overflow:"auto",padding:"12px",fontFamily:"ui-monospace, monospace",fontSize:"11px",lineHeight:"1.5",whiteSpace:"pre-wrap",wordBreak:"break-all",color:"#d4d4d8",backgroundColor:"#09090b"},children:L?o.jsx("div",{style:{color:"#71717a",textAlign:"center",padding:"20px"},children:"Loading logs..."}):D[w]?o.jsx(A8,{content:D[w]}):o.jsx("div",{style:{color:"#71717a"},children:"No logs available"})})]})})]}):o.jsx("div",{className:"run-panel empty",children:"No project loaded"})}const D8=()=>Math.random().toString(36).substring(2,10),F8=()=>({id:D8(),name:"New SkillSet",description:"",embedding_model:void 0,app_model_id:void 0,external_store_type:void 0,external_store_config:{},search_enabled:!0,preload_enabled:!0,preload_top_k:3,preload_min_score:.4,sources:[],entry_count:0});function B8(){const{project:e,setProject:t}=ht(),[n,r]=k.useState(null),[i,s]=k.useState(null),[a,l]=k.useState(""),[c,u]=k.useState([]),[d,p]=k.useState(!1),[f,h]=k.useState(!1),[g,v]=k.useState(""),[_,m]=k.useState(!1),[x,y]=k.useState(null),[j,A]=k.useState(null),S=k.useRef(null),P=(e==null?void 0:e.skillsets)||[],N=P.find(M=>M.id===n);k.useEffect(()=>{lv().then(M=>A(M.available)).catch(()=>A(!1))},[]),k.useEffect(()=>{P.length>0&&!n&&r(P[0].id)},[P,n]),k.useEffect(()=>{!e||!n||V()},[e==null?void 0:e.id,n]);const V=k.useCallback(async()=>{if(!(!e||!n))try{const M=await rv(e.id,n);s(M),I(n,{entry_count:M.entry_count})}catch(M){console.error("Failed to load stats:",M)}},[e==null?void 0:e.id,n]),E=M=>{e&&t({...e,...M})},I=(M,w)=>{e&&t({...e,skillsets:e.skillsets.map(H=>H.id===M?{...H,...w}:H)})},R=()=>{if(!e)return;const M=F8();E({skillsets:[...P,M]}),r(M.id)},q=M=>{e&&confirm("Delete this SkillSet and all its data?")&&(E({skillsets:P.filter(w=>w.id!==M)}),n===M&&r(P.length>1?P[0].id:null),s(null),u([]))},T=async()=>{if(!(!e||!n||!a.trim())){p(!0),y(null);try{const M=await sv(e.id,n,a.trim(),10,0);u(M.results)}catch(M){y("Search failed"),console.error(M)}finally{p(!1)}}},O=async()=>{if(!(!e||!n||!g.trim())){m(!0),y(null);try{const M=await iv(e.id,n,g.trim());v(""),await V(),alert(`Added ${M.chunks_added} chunks from ${M.source_name}`)}catch(M){y(M.message||"Failed to fetch URL")}finally{m(!1)}}},D=async M=>{var H;const w=(H=M.target.files)==null?void 0:H[0];if(!(!w||!e||!n)){y(null);try{const K=await ov(e.id,n,w);await V(),alert(`Added ${K.chunks_added} chunks from ${K.source_name}`)}catch(K){y(K.message||"Upload failed")}S.current&&(S.current.value="")}},C=async()=>{if(!(!e||!n)&&confirm("Delete all entries in this SkillSet?"))try{await av(e.id,n),await V(),u([])}catch{y("Clear failed")}},L=M=>{const w=Math.round(M*100),H=160,K=70,b=20+(1-M)*15,z=.15+M*.25;return`linear-gradient(90deg, hsla(${H}, ${K}%, ${b}%, ${z}) 0%, transparent ${w}%)`};return e?o.jsxs("div",{className:"skillsets-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"skillset-list",children:[o.jsxs("div",{className:"skillset-list-header",children:[o.jsx("h3",{children:"SkillSets"}),o.jsx("button",{className:"btn-icon",onClick:R,title:"Add SkillSet",children:o.jsx(Xe,{size:16})})]}),P.length===0?o.jsxs("div",{className:"empty-state",style:{padding:"40px 0"},children:[o.jsx(In,{size:32}),o.jsx("span",{children:"No SkillSets"}),o.jsxs("button",{className:"btn-primary",onClick:R,children:[o.jsx(Xe,{size:14})," Create SkillSet"]})]}):P.map(M=>o.jsxs("div",{className:`skillset-item ${n===M.id?"selected":""}`,onClick:()=>r(M.id),children:[o.jsx(In,{size:16,style:{color:"var(--accent)",flexShrink:0}}),o.jsxs("div",{className:"skillset-item-info",children:[o.jsx("div",{className:"skillset-item-name",children:M.name}),o.jsxs("div",{className:"skillset-item-count",children:[M.entry_count||0," entries"]})]}),o.jsx("button",{className:"skillset-item-delete",onClick:w=>{w.stopPropagation(),q(M.id)},children:o.jsx(Ue,{size:14})})]},M.id))]}),N?o.jsxs("div",{className:"skillset-detail",children:[o.jsxs("div",{className:"skillset-header",children:[o.jsxs("div",{className:"skillset-header-info",children:[o.jsx("input",{className:"skillset-name-input",value:N.name,onChange:M=>I(N.id,{name:M.target.value}),placeholder:"SkillSet Name"}),o.jsx("textarea",{className:"skillset-desc-input",value:N.description,onChange:M=>I(N.id,{description:M.target.value}),placeholder:"Description (optional)",rows:1}),o.jsxs("div",{className:"skillset-model",children:[o.jsx("label",{style:{fontSize:"12px",color:"var(--text-secondary)",marginRight:"8px"},children:"Embedding Model:"}),o.jsxs("select",{style:{flex:1,padding:"4px 8px",fontSize:"12px",background:"var(--bg-secondary)",border:"1px solid var(--border)",borderRadius:"4px",color:"var(--text-primary)"},value:N.embedding_model||"text-embedding-004",onChange:M=>I(N.id,{embedding_model:M.target.value}),children:[o.jsxs("optgroup",{label:"Google Gemini",children:[o.jsx("option",{value:"text-embedding-004",children:"text-embedding-004 (768d)"}),o.jsx("option",{value:"text-embedding-005",children:"text-embedding-005"})]}),o.jsxs("optgroup",{label:"OpenAI",children:[o.jsx("option",{value:"text-embedding-3-small",children:"text-embedding-3-small (1536d)"}),o.jsx("option",{value:"text-embedding-3-large",children:"text-embedding-3-large (3072d)"})]}),o.jsxs("optgroup",{label:"Cohere",children:[o.jsx("option",{value:"embed-english-v3.0",children:"embed-english-v3.0 (1024d)"}),o.jsx("option",{value:"embed-multilingual-v3.0",children:"embed-multilingual-v3.0 (1024d)"})]})]})]}),o.jsxs("div",{className:"skillset-stats",children:[o.jsxs("span",{className:"skillset-stat",children:[o.jsx("strong",{children:(i==null?void 0:i.entry_count)||0})," entries"]}),o.jsxs("span",{className:"skillset-stat",children:[o.jsx("strong",{children:Object.keys((i==null?void 0:i.sources)||{}).length})," sources"]}),j===!1&&o.jsx("span",{className:"skillset-stat",style:{color:"var(--warning)"},children:"⚠ No embeddings"})]})]}),o.jsx("button",{className:"btn-icon",onClick:V,title:"Refresh",children:o.jsx(Xt,{size:16})})]}),x&&o.jsxs("div",{className:"error-banner",children:[x,o.jsx("button",{onClick:()=>y(null),children:o.jsx(Ur,{size:14})})]}),o.jsxs("div",{className:"search-section",children:[o.jsx("div",{className:"search-input-wrapper",children:o.jsx("input",{className:"search-input",value:a,onChange:M=>l(M.target.value),onKeyDown:M=>M.key==="Enter"&&T(),placeholder:"Search this SkillSet..."})}),o.jsxs("button",{className:"btn-primary",onClick:T,disabled:d||!a.trim(),children:[o.jsx(mv,{size:14}),d?"Searching...":"Search"]})]}),o.jsxs("div",{className:"search-results",children:[c.length===0&&!d&&a&&o.jsx("div",{className:"empty-state",children:o.jsx("span",{children:"No results found"})}),c.map(M=>o.jsxs("div",{className:"search-result",style:{background:L(M.score)},children:[o.jsxs("span",{className:"search-result-score",children:[(M.score*100).toFixed(0),"%"]}),o.jsx("div",{className:"search-result-text",children:M.text}),o.jsx("div",{className:"search-result-source",children:M.source_name})]},M.id))]}),o.jsxs("div",{className:"add-sources-section",children:[o.jsxs("div",{className:"add-sources-header",onClick:()=>h(!f),children:[f?o.jsx(It,{size:16}):o.jsx(_t,{size:16}),o.jsx("h4",{children:"Add Sources"})]}),f&&o.jsxs("div",{className:"add-sources-content",children:[o.jsxs("div",{className:"source-row",children:[o.jsx(Kd,{size:16,style:{color:"var(--text-tertiary)"}}),o.jsx("input",{className:"source-input",value:g,onChange:M=>v(M.target.value),onKeyDown:M=>M.key==="Enter"&&O(),placeholder:"Enter URL (e.g., llms.txt file)"}),o.jsxs("button",{className:"btn-primary",onClick:O,disabled:_||!g.trim(),children:[o.jsx(x_,{size:14}),_?"Loading...":"Add"]})]}),o.jsxs("div",{className:"source-row",children:[o.jsx(p_,{size:16,style:{color:"var(--text-tertiary)"}}),o.jsx("input",{ref:S,type:"file",accept:".txt,.md,.json,.csv,.html",onChange:D}),o.jsxs("button",{className:"btn-primary",onClick:()=>{var M;return(M=S.current)==null?void 0:M.click()},children:[o.jsx(dl,{size:14}),"Upload File"]}),o.jsx("span",{style:{fontSize:"12px",color:"var(--text-tertiary)"},children:".txt, .md, .json, .csv"})]}),((i==null?void 0:i.entry_count)||0)>0&&o.jsx("div",{className:"source-row",style:{marginTop:"8px"},children:o.jsxs("button",{className:"clear-button",onClick:C,children:[o.jsx(Ue,{size:12}),"Clear All Entries (",(i==null?void 0:i.entry_count)||0,")"]})})]})]})]}):P.length>0?o.jsx("div",{className:"skillset-detail",children:o.jsxs("div",{className:"empty-state",children:[o.jsx(In,{size:48}),o.jsx("span",{children:"Select a SkillSet"})]})}):null]}):null}const bn={tool_trajectory_avg_score:{name:"Tool Trajectory",description:"Did the agent call the right tools in the expected order?",requiresJudge:!1,scale:[0,1]},response_match_score:{name:"Response Match (ROUGE-1)",description:"Does the response contain expected text? (fuzzy word matching)",requiresJudge:!1,scale:[0,1]},response_evaluation_score:{name:"Response Evaluation (LLM)",description:"LLM-judged semantic match of final response",requiresJudge:!0,scale:[1,5]},final_response_match_v2:{name:"Response Quality v2 (LLM)",description:"Enhanced LLM-judged response quality check",requiresJudge:!0,scale:[0,1]},safety_v1:{name:"Safety",description:"Is the response safe and harmless? (Vertex AI)",requiresJudge:!0,scale:[0,1]},hallucinations_v1:{name:"Hallucination Detection",description:"Are all claims supported by context? No false information?",requiresJudge:!0,scale:[0,1]},rubric_based_final_response_quality_v1:{name:"Rubric: Response Quality",description:"Custom rubric-based quality assessment of responses",requiresJudge:!0,scale:[0,1]},rubric_based_tool_use_quality_v1:{name:"Rubric: Tool Use Quality",description:"Custom rubric-based assessment of tool usage",requiresJudge:!0,scale:[0,1]}},Ko=(e,t,n)=>{if(t==null)return{value:"-",comparison:""};const r=bn[e],i=(r==null?void 0:r.scale)||[0,1];if(i[0]===1&&i[1]===5){const s=n??3.5;return{value:t.toFixed(1),comparison:`${s.toFixed(1)} / ${i[1].toFixed(1)}`}}else{const s=n??.7;return{value:`${Math.round(t*100)}%`,comparison:`${Math.round(s*100)}% min`}}},U8={metrics:[{metric:"tool_trajectory_avg_score",enabled:!0,criterion:{threshold:1}},{metric:"response_match_score",enabled:!0,criterion:{threshold:.7}}],default_trajectory_match_type:"in_order",num_runs:1};function H1(){return`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`}function V8(){const{project:e}=ht(),[t,n]=k.useState([]),[r,i]=k.useState(null),[s,a]=k.useState(null),[l,c]=k.useState(new Set),[u,d]=k.useState(new Map),[p,f]=k.useState(new Map),[h,g]=k.useState(new Set),[v,_]=k.useState(!1),[m,x]=k.useState(null),[y,j]=k.useState([]),[A,S]=k.useState(null),P=async()=>{if(e)try{const B=await Ye.get(`/projects/${e.id}/eval-history`);j(B.runs||[])}catch(B){console.warn("Failed to load eval history:",B)}},N=async(B,$=!0)=>{if(e)try{const Q=(await Ye.get(`/projects/${e.id}/eval-history/${B}`)).run;if(S(Q),Q!=null&&Q.case_results){const ne=new Map;for(const me of Q.case_results)ne.set(me.eval_case_id,me);d(ne)}if((Q==null?void 0:Q.eval_set_id)==="batch")c(new Set(t.map(ne=>ne.id))),i(null);else if(Q!=null&&Q.eval_set_id){const ne=new Map;ne.set(Q.eval_set_id,Q),f(ne),i(Q.eval_set_id),c(me=>new Set([...me,Q.eval_set_id]))}a(null),$&&window.history.pushState({run:B},"",`?run=${B}`)}catch(J){console.warn("Failed to load history run:",J)}},V=(B,$=!0)=>{i(B),a(null),S(null),$&&B?window.history.pushState({set:B},"",`?set=${B}`):$&&window.history.pushState({},"",window.location.pathname)},E=(B,$,J=!0)=>{i(B),a($),S(null),J&&$?window.history.pushState({set:B,case:$},"",`?set=${B}&case=${$}`):J&&B&&window.history.pushState({set:B},"",`?set=${B}`)},I=()=>{S(null),d(new Map),f(new Map),window.history.pushState({},"",window.location.pathname)},R=async B=>{if(e)try{await Ye.delete(`/projects/${e.id}/eval-history/${B}`),j($=>$.filter(J=>J.id!==B)),(A==null?void 0:A.id)===B&&S(null)}catch($){console.warn("Failed to delete history run:",$)}};k.useEffect(()=>{e!=null&&e.id&&(q(),P())},[e==null?void 0:e.id]),k.useEffect(()=>{const B=()=>{g(new Set(t.map(J=>J.id)))},$=()=>{g(new Set),P()};return window.addEventListener("eval-tests-started",B),window.addEventListener("eval-tests-completed",$),()=>{window.removeEventListener("eval-tests-started",B),window.removeEventListener("eval-tests-completed",$)}},[t]),k.useEffect(()=>{if(!(e!=null&&e.id)||v)return;const B=()=>{const J=new URLSearchParams(window.location.search),Q=J.get("set"),ne=J.get("case"),me=J.get("run");if(me){N(me,!1);return}if(Q)i(Q),a(ne),S(null),c(ve=>new Set([...ve,Q]));else{if(!r&&!s&&!A)return;i(null),a(null),S(null)}};B();const $=()=>{B()};return window.addEventListener("popstate",$),()=>window.removeEventListener("popstate",$)},[e==null?void 0:e.id,v,t.length]);const q=async()=>{var B,$;if(e!=null&&e.id){_(!0),x(null);try{const J=await Ye.get(`/projects/${e.id}/eval-sets`);if(n(J.eval_sets||[]),((B=J.eval_sets)==null?void 0:B.length)>0){const Q=new URLSearchParams(window.location.search),ne=Q.get("set"),me=Q.get("case"),ve=ne||(me?($=J.eval_sets.find(Z=>Z.eval_cases.some(ce=>ce.id===me)))==null?void 0:$.id:null)||J.eval_sets[0].id;c(new Set([ve]))}}catch(J){x(J.message||"Failed to load eval sets")}finally{_(!1)}}},T=t.find(B=>B.id===r),O=T==null?void 0:T.eval_cases.find(B=>B.id===s),D=async()=>{if(e!=null&&e.id)try{const B=await Ye.post(`/projects/${e.id}/eval-sets`,{name:"New Eval Set",description:"",eval_config:U8});n($=>[...$,B.eval_set]),i(B.eval_set.id),c($=>new Set([...$,B.eval_set.id]))}catch(B){x(B.message||"Failed to create eval set")}},C=async B=>{if(e!=null&&e.id)try{const $=await Ye.post(`/projects/${e.id}/eval-sets/${B}/cases`,{name:"New Test Case",description:"",invocations:[{id:H1(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]}],initial_state:{},rubrics:[],enabled_metrics:[],tags:[]});n(J=>J.map(Q=>Q.id===B?{...Q,eval_cases:[...Q.eval_cases,$.eval_case]}:Q)),i(B),a($.eval_case.id)}catch($){x($.message||"Failed to create eval case")}},L=async(B,$,J)=>{if(e!=null&&e.id)try{const Q=await Ye.put(`/projects/${e.id}/eval-sets/${B}/cases/${$}`,J);n(ne=>ne.map(me=>me.id===B?{...me,eval_cases:me.eval_cases.map(ve=>ve.id===$?Q.eval_case:ve)}:me))}catch(Q){x(Q.message||"Failed to update eval case")}},M=async(B,$)=>{if(e!=null&&e.id)try{await Ye.delete(`/projects/${e.id}/eval-sets/${B}/cases/${$}`),n(J=>J.map(Q=>Q.id===B?{...Q,eval_cases:Q.eval_cases.filter(ne=>ne.id!==$)}:Q)),s===$&&a(null)}catch(J){x(J.message||"Failed to delete eval case")}},w=async B=>{if(e!=null&&e.id)try{await Ye.delete(`/projects/${e.id}/eval-sets/${B}`),n($=>$.filter(J=>J.id!==B)),r===B&&(i(null),a(null))}catch($){x($.message||"Failed to delete eval set")}},H=async B=>{if(e!=null&&e.id)try{const $=await Ye.get(`/projects/${e.id}/eval-sets/${B}/export`),J=new Blob([JSON.stringify($,null,2)],{type:"application/json"}),Q=URL.createObjectURL(J),ne=document.createElement("a");ne.href=Q;const me=t.find(ve=>ve.id===B);ne.download=`${(me==null?void 0:me.name)||"eval-set"}.json`,document.body.appendChild(ne),ne.click(),document.body.removeChild(ne),URL.revokeObjectURL(Q)}catch($){x($.message||"Failed to export eval set")}},K=async B=>{if(e!=null&&e.id)try{const $=await B.text(),J=JSON.parse($),Q=await Ye.post(`/projects/${e.id}/eval-sets/import`,J);n(ne=>[...ne,Q.eval_set]),i(Q.eval_set.id),c(ne=>new Set([...ne,Q.eval_set.id]))}catch($){x($.message||"Failed to import eval set")}},b=k.useRef(null),z=async()=>{if(!(!(e!=null&&e.id)||t.length===0))try{const B=await Promise.all(t.map(async ne=>{try{return await Ye.get(`/projects/${e.id}/eval-sets/${ne.id}/export`)}catch{return ne}})),$=new Blob([JSON.stringify(B,null,2)],{type:"application/json"}),J=URL.createObjectURL($),Q=document.createElement("a");Q.href=J,Q.download=`${e.name||"project"}-eval-sets.json`,document.body.appendChild(Q),Q.click(),document.body.removeChild(Q),URL.revokeObjectURL(J)}catch(B){x(B.message||"Failed to export all eval sets")}},F=async(B,$)=>{if(e!=null&&e.id){g(J=>new Set([...J,$]));try{const J=await Ye.post(`/projects/${e.id}/eval-sets/${B}/cases/${$}/run`,{});d(Q=>new Map(Q).set($,J.result))}catch(J){x(J.message||"Failed to run eval case")}finally{g(J=>{const Q=new Set(J);return Q.delete($),Q})}}},U=async B=>{if(!(e!=null&&e.id))return;const $=t.find(Q=>Q.id===B);if(!$)return;const J=$.eval_cases.map(Q=>Q.id);g(Q=>new Set([...Q,B,...J]));try{const Q=await Ye.post(`/projects/${e.id}/eval-sets/${B}/run`,{});f(ne=>new Map(ne).set(B,Q.result));for(const ne of Q.result.case_results)d(me=>new Map(me).set(ne.eval_case_id,ne));try{await Ye.post(`/projects/${e.id}/eval-history`,Q.result),P()}catch(ne){console.warn("Failed to save eval run to history:",ne)}}catch(Q){x(Q.message||"Failed to run eval set")}finally{g(Q=>{const ne=new Set(Q);return ne.delete(B),J.forEach(me=>ne.delete(me)),ne})}},ee=B=>{c($=>{const J=new Set($);return J.has(B)?J.delete(B):J.add(B),J})},le=B=>{let $=B.eval_cases.length,J=0,Q=0,ne=0;for(const me of B.eval_cases){const ve=u.get(me.id);ve?ve.passed?J++:Q++:ne++}return{total:$,passed:J,failed:Q,pending:ne}},Y=B=>B==null?"-":`${Math.round(B*100)}%`;return e?o.jsxs("div",{className:"eval-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("aside",{className:"eval-sidebar",children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsx("h3",{children:"Evaluation Tests"}),o.jsxs("div",{className:"header-actions",children:[o.jsx("input",{type:"file",ref:b,accept:".json",style:{display:"none"},onChange:B=>{var J;const $=(J=B.target.files)==null?void 0:J[0];$&&(K($),B.target.value="")}}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var B;return(B=b.current)==null?void 0:B.click()},title:"Import eval set from JSON",children:o.jsx(dl,{size:14})}),t.length>0&&o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:z,title:"Download all eval sets as JSON",children:o.jsx(Ai,{size:14})}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:q,title:"Refresh",children:o.jsx(Xt,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:D,title:"New eval set",children:[o.jsx(Xe,{size:14}),"Set"]})]})]}),o.jsxs("div",{className:"eval-tree",children:[v&&o.jsx("p",{style:{color:"var(--text-muted)",padding:"16px"},children:"Loading..."}),m&&o.jsx("div",{style:{color:"var(--error)",padding:"16px",fontSize:"13px"},children:m}),!v&&t.length===0&&o.jsxs("div",{className:"empty-state",style:{padding:"32px"},children:[o.jsx(Xd,{size:32}),o.jsxs("p",{children:["No evaluation sets yet.",o.jsx("br",{}),"Create one to get started."]})]}),t.map(B=>{const $=l.has(B.id),J=le(B),Q=h.has(B.id);return o.jsxs("div",{className:"tree-item",children:[o.jsxs("div",{className:`tree-set ${r===B.id&&!s?"selected":""}`,onClick:()=>V(B.id),children:[o.jsx("button",{className:"expand-btn",onClick:ne=>{ne.stopPropagation(),ee(B.id)},children:B.eval_cases.length>0?$?o.jsx(It,{size:14}):o.jsx(_t,{size:14}):o.jsx("span",{style:{width:14}})}),o.jsx(pv,{size:14,style:{color:"var(--accent-secondary)"}}),o.jsx("span",{className:"set-name",children:B.name}),o.jsx("button",{className:"add-case-btn",onClick:ne=>{ne.stopPropagation(),C(B.id)},title:"Add test case",style:{padding:"2px 4px",marginLeft:4,background:"transparent",border:"none",cursor:"pointer",opacity:.6,display:"flex",alignItems:"center"},children:o.jsx(Xe,{size:12})}),J.total>0&&o.jsxs("span",{className:"set-stats",children:[J.passed>0&&o.jsx("span",{className:"stat-passed",children:J.passed}),J.failed>0&&o.jsx("span",{className:"stat-failed",children:J.failed}),J.pending>0&&o.jsx("span",{className:"stat-pending",children:J.pending})]}),o.jsx("button",{className:"run-btn",onClick:ne=>{ne.stopPropagation(),U(B.id)},title:"Run all tests in this set",disabled:Q,children:Q?o.jsx(Fo,{size:12,className:"spinning"}):o.jsx(fr,{size:12})})]}),$&&o.jsx("div",{className:"tree-children",style:{paddingLeft:16},children:B.eval_cases.map(ne=>{var Z;const me=u.get(ne.id),ve=h.has(ne.id);return o.jsxs("div",{className:`tree-case ${s===ne.id?"selected":""}`,onClick:()=>E(B.id,ne.id),children:[ve?o.jsx(Fo,{size:14,className:"spinning",style:{color:"var(--warning)"}}):me?me.passed?o.jsx(pr,{size:14,style:{color:"var(--success)"}}):o.jsx($r,{size:14,style:{color:"var(--error)"}}):o.jsx(Pa,{size:14,style:{color:"var(--text-muted)"}}),o.jsx("span",{className:"case-name",children:ne.name}),me&&me.metric_results.length>0&&o.jsx("span",{style:{fontSize:11,color:me.passed?"var(--success)":"var(--error)"},children:Y((Z=me.metric_results[0])==null?void 0:Z.score)}),o.jsx("button",{className:"run-btn",onClick:ce=>{ce.stopPropagation(),F(B.id,ne.id)},disabled:ve,children:o.jsx(fr,{size:12})})]},ne.id)})})]},B.id)})]}),o.jsxs("div",{className:"history-section",children:[o.jsx("div",{className:"history-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 12px",borderTop:"1px solid var(--border-color)",background:"var(--bg-secondary)"},children:o.jsxs("span",{style:{fontWeight:500,fontSize:13},children:["Previous Runs (",y.length,")"]})}),o.jsx("div",{className:"history-list",style:{maxHeight:200,overflowY:"auto"},children:y.length===0?o.jsx("div",{style:{padding:"12px",color:"var(--text-secondary)",fontSize:12,textAlign:"center"},children:"No previous runs"}):[...y].sort((B,$)=>($.started_at||0)-(B.started_at||0)).map(B=>{const $=B.passed_cases===B.total_cases;return o.jsx("div",{className:`history-item ${(A==null?void 0:A.id)===B.id?"selected":""}`,onClick:()=>N(B.id),style:{padding:"8px 12px",borderBottom:"1px solid var(--border-color)",cursor:"pointer",background:(A==null?void 0:A.id)===B.id?"var(--bg-tertiary)":"transparent",fontSize:12},children:o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[$?o.jsx(pr,{size:14,style:{color:"var(--success)",flexShrink:0}}):o.jsx($r,{size:14,style:{color:"var(--error)",flexShrink:0}}),o.jsxs("div",{children:[o.jsx("div",{style:{fontWeight:500},children:B.eval_set_name||"Unnamed"}),o.jsx("div",{style:{color:"var(--text-secondary)",fontSize:11},children:new Date(B.started_at*1e3).toLocaleString()})]})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsxs("span",{style:{color:$?"var(--success)":"var(--error)",fontWeight:500,fontSize:11},children:[B.passed_cases,"/",B.total_cases]}),o.jsx("button",{className:"btn btn-icon",onClick:J=>{J.stopPropagation(),R(B.id)},title:"Delete run",style:{padding:2},children:o.jsx(Ue,{size:12})})]})]})},B.id)})})]})]}),o.jsx("div",{className:"eval-editor",children:A?o.jsx(H8,{run:A,onClose:I}):O?o.jsx(q8,{evalCase:O,evalSetId:r,projectId:e.id,result:u.get(O.id),isRunning:h.has(O.id),onUpdate:B=>L(r,O.id,B),onDelete:()=>M(r,O.id),onRun:()=>F(r,O.id),onClearResult:()=>d(B=>{const $=new Map(B);return $.delete(O.id),$})}):T?o.jsx(J8,{evalSet:T,projectId:e.id,result:p.get(T.id),isRunning:h.has(T.id),caseResults:u,onUpdate:async B=>{try{const $=await Ye.put(`/projects/${e.id}/eval-sets/${T.id}`,B);n(J=>J.map(Q=>Q.id===T.id?$.eval_set:Q))}catch($){x($.message)}},onDelete:()=>w(T.id),onRun:()=>U(T.id),onExport:()=>H(T.id)}):o.jsx("div",{className:"editor-content",children:o.jsxs("div",{className:"empty-state",children:[o.jsx(Pa,{size:48}),o.jsxs("p",{children:["Select a test case to edit",o.jsx("br",{}),"or create a new one"]})]})})})]}):null}function W8({value:e,onChange:t}){var a,l;const{project:n}=ht(),r=((a=n==null?void 0:n.app)==null?void 0:a.models)||[],i=(l=n==null?void 0:n.app)==null?void 0:l.default_model_id,s=r.find(c=>c.id===i);return o.jsxs("select",{value:e,onChange:c=>t(c.target.value),style:{width:"100%",maxWidth:400},children:[o.jsx("option",{value:"",children:s?`App Default (${s.model_name})`:"App Default"}),r.map(c=>o.jsx("option",{value:c.model_name,children:c.model_name},c.id)),o.jsx("option",{value:"gemini-2.0-flash",children:"gemini-2.0-flash"}),o.jsx("option",{value:"gemini-2.5-flash",children:"gemini-2.5-flash"}),o.jsx("option",{value:"gemini-2.5-pro",children:"gemini-2.5-pro"})]})}function H8({run:e,onClose:t}){var h;const{project:n}=ht(),[r,i]=k.useState(!0),[s,a]=k.useState(new Set),l=e.case_results||[],c=l.filter(g=>g.passed).length,u=l.filter(g=>!g.passed).length,d=r?l.filter(g=>!g.passed):l,p=g=>{a(v=>{const _=new Set(v);return _.has(g)?_.delete(g):_.add(g),_})},f=g=>{g&&n&&(window.location.href=`/project/${n.id}/run?session=${g}`)};return o.jsxs("div",{className:"test-result-viewer",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"result-header",children:[o.jsx("h2",{children:e.eval_set_name||"Test Run Results"}),o.jsx("div",{style:{display:"flex",gap:8},children:o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{if(n){const g=`${window.location.origin}/project/${n.id}/evaluate?run=${e.id}`;navigator.clipboard.writeText(g)}},title:"Copy link to this run",children:o.jsx(Yd,{size:14})})})]}),o.jsxs("div",{className:"result-summary",children:[o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Status"}),o.jsx("span",{className:`value ${c===l.length?"passed":"failed"}`,children:c===l.length?"PASSED":"FAILED"})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Passed"}),o.jsx("span",{className:"value passed",children:c})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Failed"}),o.jsx("span",{className:"value failed",children:u})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Total Cases"}),o.jsx("span",{className:"value",children:l.length})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Duration"}),o.jsx("span",{className:"value",children:e.duration_ms?`${(e.duration_ms/1e3).toFixed(1)}s`:"-"})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Tokens"}),o.jsx("span",{className:"value",children:((h=e.total_tokens)==null?void 0:h.toLocaleString())||"-"})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Run Time"}),o.jsx("span",{className:"value",style:{fontSize:13},children:e.started_at?new Date(e.started_at*1e3).toLocaleString():"-"})]})]}),o.jsxs("div",{style:{padding:"8px 20px",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",gap:10,background:"var(--bg-secondary)"},children:[o.jsxs("label",{className:"toggle-switch",style:{transform:"scale(0.85)"},children:[o.jsx("input",{type:"checkbox",checked:r,onChange:g=>i(g.target.checked)}),o.jsx("span",{className:"toggle-slider"})]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:"Hide passing results"})]}),o.jsxs("div",{className:"result-cases",children:[d.map((g,v)=>{var I,R,q,T,O,D;const _=g.case_id||`case-${v}`,m=s.has(_),x=((I=g.metric_results)==null?void 0:I.filter(C=>!C.passed||C.error))||[],y=((R=g.metric_results)==null?void 0:R.filter(C=>C.passed&&!C.error))||[],j=((q=g.rubric_results)==null?void 0:q.filter(C=>!C.passed||C.error))||[],A=((T=g.rubric_results)==null?void 0:T.filter(C=>C.passed&&!C.error))||[],S=m?g.metric_results:x,P=m?g.rubric_results:j,N=m?g.invocation_results:(O=g.invocation_results)==null?void 0:O.filter(C=>{var L;return((L=C.metric_results)==null?void 0:L.some(M=>!M.passed))||C.error}),V=y.length+A.length,E=x.length+j.length;return o.jsxs("div",{className:"result-case",children:[o.jsxs("div",{className:"result-case-header",onClick:()=>p(_),style:{cursor:"pointer"},children:[o.jsxs("div",{className:"result-case-name",children:[o.jsx("span",{style:{marginRight:6,fontSize:12,color:"var(--text-muted)"},children:m?"▼":"▶"}),g.passed?o.jsx(pr,{size:16,style:{color:"var(--success)"}}):o.jsx($r,{size:16,style:{color:"var(--error)"}}),g.eval_set_name&&(e==null?void 0:e.eval_set_id)==="batch"&&o.jsx("span",{style:{fontSize:10,color:"var(--text-muted)",background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4,marginRight:6},children:g.eval_set_name}),g.case_name||`Case ${v+1}`,o.jsxs("span",{style:{marginLeft:10,fontSize:11,color:"var(--text-muted)",fontWeight:400},children:[E>0&&o.jsxs("span",{style:{color:"var(--error)"},children:[E," failed"]}),E>0&&V>0&&" · ",V>0&&o.jsxs("span",{style:{color:"var(--success)"},children:[V," passed"]})]})]}),o.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[g.session_id&&o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:C=>{C.stopPropagation(),f(g.session_id)},title:"View session in Run panel",children:[o.jsx(uv,{size:12})," View Session"]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:g.duration_ms?`${(g.duration_ms/1e3).toFixed(2)}s`:""})]})]}),o.jsxs("div",{className:"result-case-details",children:[(S==null?void 0:S.length)>0&&o.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:8},children:[S.map((C,L)=>{const M=Ko(C.metric,C.score,C.threshold);return o.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:C.error?"rgba(255, 193, 7, 0.1)":C.passed?"rgba(var(--success-rgb), 0.05)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${C.error?"var(--warning)":C.passed?"var(--border-color)":"var(--error)"}`,display:"flex",flexDirection:"column",alignItems:"center",minWidth:80},children:[o.jsx("span",{style:{fontSize:10,color:"var(--text-secondary)",textAlign:"center",marginBottom:2},children:C.metric.replace(/_/g," ").replace("v1","").replace("v2","").trim()}),C.error?o.jsx("span",{style:{fontSize:10,color:"var(--warning)"},children:"Error"}):o.jsxs(o.Fragment,{children:[o.jsx("span",{style:{fontSize:14,fontWeight:600,color:C.passed?"var(--success)":"var(--error)"},children:M.value}),o.jsx("span",{style:{fontSize:9,color:"var(--text-muted)"},children:M.comparison})]})]},L)}),!m&&y.length>0&&o.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"var(--bg-tertiary)",border:"1px dashed var(--border-color)",display:"flex",alignItems:"center",fontSize:11,color:"var(--text-muted)"},children:["+",y.length," passed"]})]}),S==null?void 0:S.filter(C=>!C.passed&&C.rationale).map((C,L)=>o.jsxs("div",{style:{marginTop:8,padding:"8px 12px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:12},children:[o.jsxs("div",{style:{fontWeight:500,marginBottom:4,color:"var(--error)",fontSize:11},children:[C.metric.replace(/_/g," ")," - Why it failed:"]}),o.jsx("div",{style:{whiteSpace:"pre-wrap",color:"var(--text-secondary)",lineHeight:1.4},children:C.rationale})]},`rationale-${L}`)),(P==null?void 0:P.length)>0&&o.jsxs("div",{style:{marginTop:8},children:[o.jsx("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:4},children:"Custom Rubrics"}),P.map((C,L)=>o.jsxs("div",{style:{marginBottom:C.rationale&&!C.passed?8:4},children:[o.jsxs("div",{className:"metric-row",children:[o.jsx("span",{className:"metric-name",style:{flex:1},children:C.rubric}),o.jsx("span",{className:`metric-value ${C.passed?"passed":"failed"}`,children:C.passed?"✓ Pass":"✗ Fail"})]}),!C.passed&&C.rationale&&o.jsxs("div",{style:{marginTop:4,marginLeft:8,padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:11,color:"var(--text-secondary)"},children:[o.jsx("strong",{style:{color:"var(--error)"},children:"Why:"})," ",C.rationale]}),C.error&&o.jsxs("div",{style:{marginTop:4,marginLeft:8,fontSize:11,color:"var(--warning)"},children:["Error: ",C.error]})]},L)),!m&&A.length>0&&o.jsxs("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:["+",A.length," passed rubric",A.length>1?"s":""]})]}),(N==null?void 0:N.length)>0&&o.jsxs("div",{className:"invocation-summary",children:[o.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:8},children:["Invocations (",N.length,!m&&((D=g.invocation_results)==null?void 0:D.length)>N.length?` of ${g.invocation_results.length}`:"",")"]}),N.map((C,L)=>o.jsxs("div",{className:"invocation-item",children:[o.jsxs("div",{className:"invocation-query",children:["Turn ",C.invocation_id||L+1,": ",C.user_message||"(no message)"]}),C.actual_response&&o.jsxs("div",{className:"invocation-response",children:["Response: ",C.actual_response.substring(0,200),C.actual_response.length>200?"...":""]})]},L))]}),g.error&&o.jsx("div",{style:{marginTop:12,padding:12,background:"rgba(255, 107, 107, 0.1)",borderRadius:"var(--radius-sm)",color:"var(--error)",fontSize:12,whiteSpace:"pre-wrap"},children:g.error})]})]},_)}),l.length===0&&o.jsx("div",{style:{textAlign:"center",padding:32,color:"var(--text-secondary)"},children:"No test cases in this run"})]})]})}function q8({evalCase:e,evalSetId:t,projectId:n,result:r,isRunning:i,onUpdate:s,onDelete:a,onRun:l,onClearResult:c}){var A,S,P;const{project:u}=ht(),[d,p]=k.useState(e),[f,h]=k.useState("assertions");k.useEffect(()=>{p(e)},[e.id]);const g=k.useCallback(N=>{p(V=>({...V,...N})),s(N)},[s]),v=()=>{const N={id:H1(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]};g({invocations:[...d.invocations,N]})},_=(N,V)=>{const E=[...d.invocations];E[N]={...E[N],...V},g({invocations:E})},m=N=>{g({invocations:d.invocations.filter((V,E)=>E!==N)})},x=N=>{const V=[...d.invocations];V[N]={...V[N],expected_tool_calls:[...V[N].expected_tool_calls,{name:"",args:{},args_match_mode:"subset"}]},g({invocations:V})},y=(N,V,E)=>{const I=[...d.invocations],R=[...I[N].expected_tool_calls];R[V]={...R[V],...E},I[N]={...I[N],expected_tool_calls:R},g({invocations:I})},j=(N,V)=>{const E=[...d.invocations];E[N]={...E[N],expected_tool_calls:E[N].expected_tool_calls.filter((I,R)=>R!==V)},g({invocations:E})};return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(Pa,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("input",{type:"text",value:d.name,onChange:N=>g({name:N.target.value}),placeholder:"Test case name"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const N=`${window.location.origin}/project/${n}/evaluate?set=${t}&case=${e.id}`;navigator.clipboard.writeText(N)},title:"Copy link to this test case",children:o.jsx(Yd,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:i,children:[i?o.jsx(Fo,{size:14,className:"spinning"}):o.jsx(fr,{size:14}),"Run"]}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:o.jsx(Ue,{size:14})})]}),o.jsxs("div",{className:"tabs",children:[o.jsxs("div",{className:`tab ${f==="assertions"?"active":""}`,onClick:()=>h("assertions"),children:[o.jsx(Ma,{size:14,style:{marginRight:6}}),"Assertions (",d.invocations.length,")"]}),o.jsxs("div",{className:`tab ${f==="rubrics"?"active":""}`,onClick:()=>h("rubrics"),children:[o.jsx(Xd,{size:14,style:{marginRight:6}}),"LLM Judges"]}),o.jsxs("div",{className:`tab ${f==="docs"?"active":""}`,onClick:()=>h("docs"),children:[o.jsx(ji,{size:14,style:{marginRight:6}}),"Docs"]}),o.jsxs("div",{className:`tab ${f==="json"?"active":""}`,onClick:()=>h("json"),children:[o.jsx(jn,{size:14,style:{marginRight:6}}),"JSON"]})]}),o.jsxs("div",{className:"editor-content",children:[f==="assertions"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:{display:"flex",gap:12,marginBottom:12},children:[o.jsxs("div",{style:{flex:1},children:[o.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"target_agent"}),o.jsxs("select",{value:d.target_agent||"",onChange:N=>g({target_agent:N.target.value||void 0}),style:{width:"100%"},children:[o.jsx("option",{value:"",children:"root_agent"}),(A=u==null?void 0:u.agents)==null?void 0:A.map(N=>o.jsx("option",{value:N.name,children:N.name},N.name))]})]}),o.jsxs("div",{style:{flex:1},children:[o.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"tags"}),o.jsx("input",{type:"text",value:d.tags.join(", "),onChange:N=>g({tags:N.target.value.split(",").map(V=>V.trim()).filter(Boolean)}),placeholder:"smoke, regression",style:{width:"100%"}})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("textarea",{value:d.description,onChange:N=>g({description:N.target.value}),placeholder:"What does this test verify?",style:{minHeight:40}})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:["session_input ",o.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(initial state)"})]}),o.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:o.jsx(Zt,{height:"100%",defaultLanguage:"json",value:(()=>{var V;if((!d.initial_state||Object.keys(d.initial_state).length===0)&&((V=u==null?void 0:u.app)!=null&&V.state_keys)&&u.app.state_keys.length>0){const E={};return u.app.state_keys.forEach(I=>{I.default_value!==void 0?E[I.name]=I.default_value:E[I.name]=I.type==="string"?"":I.type==="number"?0:I.type==="boolean"?!1:I.type==="array"?[]:{}}),JSON.stringify(E,null,2)}return JSON.stringify(d.initial_state,null,2)})(),onChange:N=>{try{N&&g({initial_state:JSON.parse(N)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(Ma,{size:14}),"Conversation Turns"]}),d.invocations.map((N,V)=>o.jsxs("div",{className:"invocation-card",children:[o.jsxs("div",{className:"invocation-number",children:[o.jsx("span",{children:V+1}),d.invocations.length>1&&o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>m(V),style:{padding:4},children:o.jsx(Ue,{size:10})})]}),o.jsxs("div",{className:"invocation-content",children:[o.jsxs("div",{className:"invocation-row",children:[o.jsxs("div",{className:"form-section",children:[o.jsx("label",{children:"User Query"}),o.jsx("textarea",{value:N.user_message,onChange:E=>_(V,{user_message:E.target.value}),placeholder:"The message to send to the agent..."})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("label",{children:["Expected Response ",o.jsx("span",{style:{color:"var(--text-muted)",fontWeight:400},children:"(ROUGE-1)"})]}),o.jsx("textarea",{value:N.expected_response||"",onChange:E=>_(V,{expected_response:E.target.value||void 0}),placeholder:"Expected text (partial match)..."})]})]}),N.expected_tool_calls.map((E,I)=>o.jsxs("div",{className:"tool-call-compact",children:[o.jsx("input",{type:"text",value:E.name,onChange:R=>y(V,I,{name:R.target.value}),placeholder:"tool_name",className:"tool-name-input"}),o.jsxs("div",{className:"pillbox-toggle",children:[o.jsx("button",{className:`pill ${E.args_match_mode==="subset"?"active":""}`,onClick:()=>y(V,I,{args_match_mode:"subset"}),children:"Partial"}),o.jsx("button",{className:`pill ${E.args_match_mode==="exact"?"active":""}`,onClick:()=>y(V,I,{args_match_mode:"exact"}),children:"Exact"})]}),o.jsx("div",{className:"tool-args-editor",children:o.jsx(Zt,{height:"22px",defaultLanguage:"json",value:JSON.stringify(E.args||{}),onChange:R=>{try{R&&y(V,I,{args:JSON.parse(R)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,wordWrap:"off",scrollbar:{vertical:"hidden",horizontal:"hidden"},overviewRulerLanes:0,hideCursorInOverviewRuler:!0,overviewRulerBorder:!1,renderLineHighlight:"none",fontSize:11,padding:{top:3,bottom:3},automaticLayout:!0}})}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>j(V,I),style:{padding:"4px 6px"},children:o.jsx(Ue,{size:10})})]},I)),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>x(V),style:{marginTop:4},children:[o.jsx(Xe,{size:12})," Assert Tool Call"]})]})]},N.id)),o.jsxs("button",{className:"btn btn-secondary",onClick:v,children:[o.jsx(Xe,{size:14})," Add Turn"]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(pr,{size:14,style:{marginRight:6}}),"final_session_state ",o.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(optional)"})]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Assert that session state contains these key-value pairs after all turns complete."}),o.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:o.jsx(Zt,{height:"100%",defaultLanguage:"json",value:d.expected_final_state?JSON.stringify(d.expected_final_state,null,2):"{}",onChange:N=>{if(!N||N==="{}")g({expected_final_state:void 0});else try{g({expected_final_state:JSON.parse(N)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]})]}),f==="rubrics"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"form-section",style:{marginBottom:16},children:[{metric:"safety_v1",label:"safety_v1",default:.8,max:1},{metric:"hallucinations_v1",label:"hallucinations_v1",default:.8,max:1},{metric:"response_evaluation_score",label:"response_evaluation_score",default:3.5,max:5},{metric:"final_response_match_v2",label:"final_response_match_v2",default:.7,max:1}].map(({metric:N,label:V,default:E,max:I})=>{const R=(d.enabled_metrics||[]).find(T=>T.metric===N),q=(R==null?void 0:R.threshold)??E;return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:!!R,onChange:T=>{const O=[...d.enabled_metrics||[]];if(T.target.checked)O.push({metric:N,threshold:E});else{const D=O.findIndex(C=>C.metric===N);D!==-1&&O.splice(D,1)}g({enabled_metrics:O})}}),o.jsx("span",{className:"toggle-slider"})]}),o.jsx("span",{style:{fontSize:12,opacity:R?1:.5,minWidth:100},children:V}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:R?1:.4},children:"≥"}),o.jsx("input",{type:"number",min:I===5?1:0,max:I,step:.1,value:q,disabled:!R,onChange:T=>{const O=[...d.enabled_metrics||[]],D=O.findIndex(C=>C.metric===N);D!==-1&&(O[D]={...O[D],threshold:parseFloat(T.target.value)||0},g({enabled_metrics:O}))},style:{width:60,textAlign:"center",opacity:R?1:.3,padding:"2px 4px",fontSize:11}})]},N)})}),o.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--border-color)",margin:"16px 0"}}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Custom Rubrics"}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Natural language criteria evaluated by an LLM judge. Returns pass/fail per rubric."}),d.rubrics.map((N,V)=>o.jsxs("div",{className:"tool-call-row",style:{marginBottom:8},children:[o.jsx("input",{type:"text",value:N.rubric,onChange:E=>{const I=[...d.rubrics];I[V]={rubric:E.target.value},g({rubrics:I})},placeholder:"e.g., The response mentions the return policy",style:{flex:1}}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>g({rubrics:d.rubrics.filter((E,I)=>I!==V)}),children:o.jsx(Ue,{size:12})})]},V)),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>g({rubrics:[...d.rubrics,{rubric:""}]}),children:[o.jsx(Xe,{size:12})," Add Rubric"]})]})]}),f==="docs"&&o.jsxs("div",{style:{fontSize:13,lineHeight:1.6,color:"var(--text-secondary)",overflowY:"auto",maxHeight:"100%"},children:[o.jsx("h3",{style:{marginBottom:16,color:"var(--text-primary)"},children:"Evaluation Test Case Guide"}),o.jsxs("section",{style:{marginBottom:24,padding:12,background:"rgba(var(--accent-primary-rgb), 0.1)",borderRadius:"var(--radius-md)",border:"1px solid var(--accent-primary)"},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Quick Overview"}),o.jsxs("p",{children:["Each test case simulates a ",o.jsx("strong",{children:"multi-turn conversation"})," with an agent. For each turn (invocation), you provide a user message and define what you expect the agent to do."]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Invocations"})," = conversation turns (user messages)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Expected Response"})," = the agent's ",o.jsx("em",{children:"final text reply"})," for that turn"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Expected Tool Calls"})," = tools the agent should invoke during that turn"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Session State"})," = test the ",o.jsx("em",{children:"final state"})," after ALL turns complete"]})]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:'📝 What is "Expected Response"?'}),o.jsxs("p",{children:["The ",o.jsx("strong",{children:"Expected Response"})," is matched against the agent's ",o.jsx("strong",{children:"final response"})," for that specific turn — NOT every message."]}),o.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[o.jsx("p",{style:{marginBottom:8},children:o.jsx("strong",{children:"During one turn, an agent may:"})}),o.jsxs("ul",{style:{marginLeft:20,marginBottom:12},children:[o.jsx("li",{children:"Send intermediate thinking/reasoning messages"}),o.jsx("li",{children:"Call multiple tools"}),o.jsx("li",{children:"Transfer to sub-agents (who may respond)"}),o.jsxs("li",{children:["Finally send a ",o.jsx("em",{children:"concluding response"})]})]}),o.jsxs("p",{children:["Only the ",o.jsx("strong",{children:"last text response"})," from the agent for that turn is compared against your Expected Response."]})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Tip: If you need to verify intermediate steps, use Tool Trajectory matching or custom Rubrics."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🔄 Response Matching (ROUGE-1)"}),o.jsxs("p",{children:["The ",o.jsx("code",{children:"response_match_score"})," uses ",o.jsx("strong",{children:"ROUGE-1 F1 scoring"})," — fuzzy word-level matching:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:"Tokenizes both expected and actual responses into words"}),o.jsx("li",{children:"Calculates word overlap (not exact string match)"}),o.jsx("li",{children:"Returns a score from 0.0 to 1.0"})]}),o.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[o.jsx("p",{children:o.jsx("strong",{children:"Example:"})}),o.jsxs("p",{children:["Expected: ",o.jsx("code",{children:'"The weather in Paris is sunny today"'})]}),o.jsxs("p",{children:["Actual: ",o.jsx("code",{children:'"Today in Paris, expect sunny weather"'})]}),o.jsx("p",{style:{marginTop:8,color:"var(--success)"},children:"✓ High ROUGE-1 score (same words, different order)"})]}),o.jsxs("p",{style:{marginTop:8},children:["A threshold of ",o.jsx("strong",{children:"0.7"})," means 70% word overlap is required to pass."]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🛠️ Tool Trajectory Matching"}),o.jsxs("p",{children:["The ",o.jsx("code",{children:"tool_trajectory_avg_score"})," verifies the agent called expected tools. Match types:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Exact"})," — Same tools in same order, no extras allowed"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"In Order"})," — Expected tools appear in order, extras allowed between"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Any Order"})," — All expected tools present, any order, extras allowed"]})]}),o.jsx("p",{style:{marginTop:8},children:"For each tool, you can match by:"}),o.jsxs("ul",{style:{marginLeft:20,marginTop:4},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Name Only"})," — Just check the tool was called"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Exact Args"})," — Arguments must match exactly (provide JSON)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Args Subset"})," — Your expected args must be present in actual args"]})]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💾 Session State Testing"}),o.jsxs("p",{children:[o.jsx("strong",{children:"Initial State"})," (Settings tab) — Pre-populate session state before running the test:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:"Set user preferences or context"}),o.jsx("li",{children:"Simulate a specific scenario"}),o.jsx("li",{children:"Test state-dependent behavior"})]}),o.jsxs("p",{style:{marginTop:12},children:[o.jsx("strong",{children:"Expected Final State"})," — Verified at the ",o.jsx("em",{children:"very end"})," of the test case, ",o.jsx("strong",{children:"after ALL invocations complete"}),"."]}),o.jsx("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8,borderLeft:"3px solid var(--warning)"},children:o.jsxs("p",{style:{margin:0},children:[o.jsx("strong",{children:"Important:"})," State is tested once after the entire conversation, NOT after each turn. To test state changes per-turn, use separate test cases."]})})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Target Agent (Settings tab)"}),o.jsxs("p",{children:["By default, tests run against the ",o.jsx("strong",{children:"root_agent"})," of your App. You can select a specific sub-agent to test in isolation:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"root_agent"})," — Test the full agent hierarchy (default)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Specific agent"})," — Unit test individual agents"]})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Useful for testing sub-agents independently before integrating into the full system."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📋 Custom Rubrics"}),o.jsx("p",{children:"Rubrics are custom yes/no criteria evaluated by an LLM judge. Examples:"}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:'"Does the response mention the product price?"'}),o.jsx("li",{children:'"Is the tone professional and helpful?"'}),o.jsx("li",{children:'"Does the response avoid mentioning competitors?"'})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Note: Rubric evaluation requires LLM-judged metrics to be enabled in the Eval Set."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📊 Available Metrics"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Metric"}),o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Type"}),o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Description"})]})}),o.jsx("tbody",{children:Object.keys(bn).map(N=>o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("td",{style:{padding:"8px 4px",fontFamily:"var(--font-mono)",fontSize:11},children:N}),o.jsx("td",{style:{padding:"8px 4px"},children:bn[N].requiresJudge?o.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--accent-primary)",color:"white",borderRadius:4},children:"LLM Judge"}):o.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--bg-tertiary)",borderRadius:4},children:"Built-in"})}),o.jsx("td",{style:{padding:"8px 4px",color:"var(--text-muted)"},children:bn[N].description})]},N))})]})]}),o.jsxs("section",{children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💡 Tips"}),o.jsxs("ul",{style:{marginLeft:20},children:[o.jsx("li",{children:"Start with simple single-turn tests, then add complexity"}),o.jsx("li",{children:'Use "In Order" matching for most tool trajectory tests'}),o.jsx("li",{children:"Lower ROUGE thresholds (0.5-0.6) for creative/varied responses"}),o.jsx("li",{children:"Higher thresholds (0.8-0.9) for factual/precise responses"}),o.jsx("li",{children:"Use tags to organize tests by feature or priority"}),o.jsx("li",{children:"Test sub-agents individually using Target Agent selector"})]})]})]}),f==="json"&&o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[o.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:o.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this test case. You can use this with ",o.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval"}),"."]})}),o.jsx("div",{style:{flex:1,minHeight:300,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:o.jsx(Zt,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify({name:d.name,description:d.description||void 0,tags:(S=d.tags)!=null&&S.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(N=>{var V;return{user_message:N.user_message,expected_response:N.expected_response||void 0,expected_tool_calls:(V=N.expected_tool_calls)!=null&&V.length?N.expected_tool_calls.map(E=>({tool_name:E.tool_name,args:E.match_type!=="name_only"&&Object.keys(E.args||{}).length?E.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(P=d.rubrics)!=null&&P.length?d.rubrics.map(N=>N.rubric):void 0},null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),o.jsx("div",{style:{display:"flex",gap:8},children:o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var V,E;const N=JSON.stringify({name:d.name,description:d.description||void 0,tags:(V=d.tags)!=null&&V.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(I=>{var R;return{user_message:I.user_message,expected_response:I.expected_response||void 0,expected_tool_calls:(R=I.expected_tool_calls)!=null&&R.length?I.expected_tool_calls.map(q=>({tool_name:q.tool_name,args:q.match_type!=="name_only"&&Object.keys(q.args||{}).length?q.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(E=d.rubrics)!=null&&E.length?d.rubrics.map(I=>I.rubric):void 0},null,2);navigator.clipboard.writeText(N)},children:[o.jsx(ns,{size:14})," Copy JSON"]})})]})]}),r&&o.jsxs("div",{className:"result-panel",children:[o.jsxs("div",{className:`result-header ${r.passed?"passed":"failed"}`,children:[r.passed?o.jsxs(o.Fragment,{children:[o.jsx(pr,{size:18})," ",o.jsx("strong",{children:"Passed"})]}):o.jsxs(o.Fragment,{children:[o.jsx($r,{size:18})," ",o.jsx("strong",{children:"Failed"})]}),o.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:12},children:[r.total_tokens?o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},title:"Total tokens used",children:[r.total_tokens.toLocaleString()," tokens"]}):null,o.jsxs("span",{style:{color:"var(--text-muted)",fontSize:12},children:[r.duration_ms.toFixed(0),"ms"]}),r.session_id&&o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{window.location.href=`/project/${u==null?void 0:u.id}/run?session=${r.session_id}`},title:"View this session in the Run panel",style:{fontSize:11},children:[o.jsx(uv,{size:12}),"View Session"]}),c&&o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Close test results",style:{fontSize:11,padding:"4px 8px"},children:"✕"})]})]}),o.jsx("div",{className:"result-scores",children:r.metric_results.map((N,V)=>{var I;const E=Ko(N.metric,N.score,N.threshold);return o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:`score-value ${N.passed?"passed":"failed"}`,children:E.value}),o.jsx("div",{className:"score-label",children:((I=bn[N.metric])==null?void 0:I.name)||N.metric}),o.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",marginTop:2},children:E.comparison}),N.error&&o.jsx("div",{style:{fontSize:10,color:"var(--error)",marginTop:4},children:N.error})]},V)})}),r.rubric_results&&r.rubric_results.length>0&&o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Custom Rubrics"}),o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:r.rubric_results.map((N,V)=>o.jsxs("div",{style:{padding:"8px 12px",borderRadius:"var(--radius-sm)",background:N.passed?"rgba(var(--success-rgb), 0.1)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${N.passed?"var(--success)":"var(--error)"}`,display:"flex",alignItems:"center",gap:10},children:[o.jsx("span",{style:{fontSize:16,color:N.passed?"var(--success)":"var(--error)",fontWeight:"bold"},children:N.passed?"✓":"✗"}),o.jsxs("div",{style:{flex:1},children:[o.jsx("div",{style:{fontSize:12,color:"var(--text-primary)"},children:N.rubric}),N.error&&o.jsxs("div",{style:{fontSize:10,color:"var(--error)",marginTop:2},children:["Error: ",N.error]})]})]},V))})]}),r.invocation_results.map((N,V)=>o.jsxs("div",{className:"result-details",children:[o.jsxs("h5",{children:["Turn ",V+1,": ",N.user_message.length>50?N.user_message.slice(0,50)+"…":N.user_message]}),N.metric_results.length>0&&o.jsx("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:N.metric_results.map((E,I)=>{var q;const R=Ko(E.metric,E.score,E.threshold);return o.jsxs("span",{style:{fontSize:11,padding:"2px 6px",borderRadius:"var(--radius-sm)",background:E.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:E.passed?"var(--success)":"var(--error)"},children:[((q=bn[E.metric])==null?void 0:q.name)||E.metric,": ",R.value]},I)})}),o.jsxs("div",{className:"detail-box",children:[o.jsx("strong",{children:"Actual Response:"}),`
`,N.actual_response||"(no response)",`

`,N.actual_tool_calls.length>0&&o.jsxs(o.Fragment,{children:[o.jsx("strong",{children:"Tool Calls:"}),`
`,N.actual_tool_calls.map((E,I)=>`  ${I+1}. ${E.name}(${JSON.stringify(E.args)})
`).join("")]})]})]},V)),r.error&&o.jsxs("div",{className:"result-details",children:[o.jsx("h5",{style:{color:"var(--error)"},children:"Error"}),o.jsx("div",{className:"detail-box",style:{color:"var(--error)"},children:r.error})]})]})]})}function J8({evalSet:e,projectId:t,result:n,isRunning:r,caseResults:i,onUpdate:s,onDelete:a,onRun:l,onExport:c}){var v,_,m,x;const[u,d]=k.useState(e.name),[p,f]=k.useState(!1);k.useEffect(()=>{d(e.name)},[e.id]);const h=k.useCallback(()=>{u!==e.name&&s({name:u})},[u,e.name,s]),g=y=>y==null?"-":`${Math.round(y*100)}%`;return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(pv,{size:20,style:{color:"var(--accent-secondary)"}}),o.jsx("input",{type:"text",value:u,onChange:y=>d(y.target.value),onBlur:h,placeholder:"Eval set name"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const y=`${window.location.origin}/project/${t}/evaluate?set=${e.id}`;navigator.clipboard.writeText(y)},title:"Copy link to this eval set",children:o.jsx(Yd,{size:14})}),o.jsxs("button",{className:`btn btn-sm ${p?"btn-primary":"btn-secondary"}`,onClick:()=>f(!p),title:"View/Hide JSON",children:[o.jsx(jn,{size:14}),"JSON"]}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Export as JSON (compatible with adk eval)",children:o.jsx(Ai,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:r,children:[r?o.jsx(Fo,{size:14,className:"spinning"}):o.jsx(fr,{size:14}),"Run All"]}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:o.jsx(Ue,{size:14})})]}),o.jsx("div",{className:"editor-content",children:p?o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[o.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:o.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this evaluation set. Save this file and use with ",o.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval <agent_path> <eval_file.json>"})]})}),o.jsx("div",{style:{flex:1,minHeight:400,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:o.jsx(Zt,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(y=>{var j,A;return{name:y.name,description:y.description||void 0,tags:(j=y.tags)!=null&&j.length?y.tags:void 0,target_agent:y.target_agent!=="root_agent"?y.target_agent:void 0,invocations:y.invocations.map(S=>{var P;return{user_message:S.user_message,expected_response:S.expected_response||void 0,expected_tool_calls:(P=S.expected_tool_calls)!=null&&P.length?S.expected_tool_calls.map(N=>({tool_name:N.tool_name,args:N.match_type!=="name_only"&&Object.keys(N.args||{}).length?N.args:void 0})):void 0}}),session_input:Object.keys(y.session_input||{}).length?{state:y.session_input}:void 0,final_session_state:Object.keys(y.final_session_state||{}).length?y.final_session_state:void 0,rubrics:(A=y.rubrics)!=null&&A.length?y.rubrics.map(S=>S.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((v=e.eval_config.metrics)==null?void 0:v.filter(y=>y.enabled))||void 0}:void 0}],null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),o.jsx("div",{style:{display:"flex",gap:8},children:o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var j;const y=JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(A=>{var S,P;return{name:A.name,description:A.description||void 0,tags:(S=A.tags)!=null&&S.length?A.tags:void 0,target_agent:A.target_agent!=="root_agent"?A.target_agent:void 0,invocations:A.invocations.map(N=>{var V;return{user_message:N.user_message,expected_response:N.expected_response||void 0,expected_tool_calls:(V=N.expected_tool_calls)!=null&&V.length?N.expected_tool_calls.map(E=>({tool_name:E.tool_name,args:E.match_type!=="name_only"&&Object.keys(E.args||{}).length?E.args:void 0})):void 0}}),session_input:Object.keys(A.session_input||{}).length?{state:A.session_input}:void 0,final_session_state:Object.keys(A.final_session_state||{}).length?A.final_session_state:void 0,rubrics:(P=A.rubrics)!=null&&P.length?A.rubrics.map(N=>N.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((j=e.eval_config.metrics)==null?void 0:j.filter(A=>A.enabled))||void 0}:void 0}],null,2);navigator.clipboard.writeText(y)},children:[o.jsx(ns,{size:14})," Copy JSON"]})})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("textarea",{value:e.description,onChange:y=>s({description:y.target.value}),placeholder:"Description of this evaluation set...",style:{minHeight:40}})]}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"LLM Judge Model"}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Model used for LLM-judged metrics (safety, hallucinations, etc.)."}),o.jsx(W8,{value:((_=e.eval_config)==null?void 0:_.judge_model)||"",onChange:y=>s({eval_config:{...e.eval_config,judge_model:y}})})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(gv,{size:14})," Evaluation Metrics"]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Configure which metrics to use and their pass thresholds."}),Object.keys(bn).map(y=>{var N,V,E;const j=bn[y],A=(V=(N=e.eval_config)==null?void 0:N.metrics)==null?void 0:V.find(I=>I.metric===y),S=(A==null?void 0:A.enabled)??!1,P=((E=A==null?void 0:A.criterion)==null?void 0:E.threshold)??.7;return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:S,onChange:I=>{var T;const R=[...((T=e.eval_config)==null?void 0:T.metrics)||[]],q=R.findIndex(O=>O.metric===y);I.target.checked?q===-1?R.push({metric:y,enabled:!0,criterion:{threshold:.7}}):R[q]={...R[q],enabled:!0}:q!==-1&&(R[q]={...R[q],enabled:!1}),s({eval_config:{...e.eval_config,metrics:R}})}}),o.jsx("span",{className:"toggle-slider"})]}),o.jsxs("span",{style:{fontSize:12,opacity:S?1:.5,minWidth:140,fontWeight:S?500:400},children:[j.name,j.requiresJudge&&o.jsx("span",{style:{fontSize:9,marginLeft:4,color:"var(--accent-primary)"},children:"LLM"})]}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:S?1:.4},children:"≥"}),o.jsx("input",{type:"number",min:0,max:1,step:.1,value:P,disabled:!S,onChange:I=>{var T;const R=[...((T=e.eval_config)==null?void 0:T.metrics)||[]],q=R.findIndex(O=>O.metric===y);q!==-1&&(R[q]={...R[q],criterion:{...R[q].criterion,threshold:parseFloat(I.target.value)||.7}},s({eval_config:{...e.eval_config,metrics:R}}))},style:{width:60,textAlign:"center",opacity:S?1:.3,padding:"2px 4px",fontSize:11}})]},y)}),o.jsxs("div",{className:"form-row",style:{marginTop:16},children:[o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Default Trajectory Match Type"}),o.jsxs("select",{value:((m=e.eval_config)==null?void 0:m.default_trajectory_match_type)||"in_order",onChange:y=>s({eval_config:{...e.eval_config,default_trajectory_match_type:y.target.value}}),children:[o.jsx("option",{value:"exact",children:"Exact (same order, no extras)"}),o.jsx("option",{value:"in_order",children:"In Order (extras allowed between)"}),o.jsx("option",{value:"any_order",children:"Any Order (all present, any order)"})]})]}),o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Number of Runs"}),o.jsx("input",{type:"number",min:1,max:10,value:((x=e.eval_config)==null?void 0:x.num_runs)||1,onChange:y=>s({eval_config:{...e.eval_config,num_runs:parseInt(y.target.value)||1}})}),o.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:"Run each test multiple times for statistical reliability."})]})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(b_,{size:14})," Coverage Summary"]}),n?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"result-scores",children:[o.jsxs("div",{className:"score-card",children:[o.jsxs("div",{className:"score-value",style:{color:"var(--accent-primary)"},children:[n.passed_cases,"/",n.total_cases]}),o.jsx("div",{className:"score-label",children:"Cases Passed"})]}),o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:`score-value ${n.overall_pass_rate>=.8?"passed":"failed"}`,children:g(n.overall_pass_rate)}),o.jsx("div",{className:"score-label",children:"Pass Rate"})]}),Object.entries(n.metric_avg_scores||{}).map(([y,j])=>{var S;const A=Ko(y,j);return o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:"score-value",children:A.value}),o.jsxs("div",{className:"score-label",children:["Avg ",((S=bn[y])==null?void 0:S.name)||y]})]},y)})]}),o.jsxs("div",{style:{marginTop:16},children:[o.jsx("div",{style:{marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Overall Pass Rate"}),o.jsx("div",{className:"coverage-bar",children:o.jsx("div",{className:`coverage-fill ${n.overall_pass_rate>=.8?"passed":"failed"}`,style:{width:`${n.overall_pass_rate*100}%`}})})]}),Object.entries(n.metric_pass_rates||{}).length>0&&o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Metric Pass Rates"}),Object.entries(n.metric_pass_rates).map(([y,j])=>{var A;return o.jsxs("div",{style:{marginBottom:8},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4},children:[o.jsx("span",{children:((A=bn[y])==null?void 0:A.name)||y}),o.jsx("span",{children:g(j)})]}),o.jsx("div",{className:"coverage-bar",children:o.jsx("div",{className:`coverage-fill ${j>=.8?"passed":"failed"}`,style:{width:`${j*100}%`}})})]},y)})]}),o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Individual Results"}),o.jsxs("table",{style:{width:"100%",fontSize:12,borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Test Case"}),o.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Metrics"}),o.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Status"})]})}),o.jsx("tbody",{children:n.case_results.map(y=>o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("td",{style:{padding:"8px 4px"},children:y.eval_case_name}),o.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:y.metric_results.map((j,A)=>{const S=Ko(j.metric,j.score,j.threshold);return o.jsx("span",{style:{fontSize:10,padding:"2px 4px",marginRight:4,borderRadius:"var(--radius-sm)",background:j.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:j.passed?"var(--success)":"var(--error)"},children:S.value},A)})}),o.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:y.passed?o.jsx(pr,{size:14,style:{color:"var(--success)"}}):y.error?o.jsx(ji,{size:14,style:{color:"var(--warning)"}}):o.jsx($r,{size:14,style:{color:"var(--error)"}})})]},y.eval_case_id))})]})]})]}):o.jsxs("div",{style:{textAlign:"center",padding:"32px",color:"var(--text-muted)",background:"var(--bg-tertiary)",borderRadius:"var(--radius-md)"},children:[o.jsx(Xd,{size:32,style:{marginBottom:8,opacity:.3}}),o.jsx("p",{children:"Run the evaluation set to see coverage metrics"})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:["Test Cases (",e.eval_cases.length,")"]}),e.eval_cases.length===0?o.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"No test cases yet. Add cases to this eval set to start testing."}):o.jsx("ul",{style:{listStyle:"none",padding:0},children:e.eval_cases.map(y=>{const j=i.get(y.id);return o.jsxs("li",{style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",background:"var(--bg-tertiary)",borderRadius:"var(--radius-sm)",marginBottom:8},children:[j?j.passed?o.jsx(pr,{size:14,style:{color:"var(--success)"}}):o.jsx($r,{size:14,style:{color:"var(--error)"}}):o.jsx(Pa,{size:14,style:{color:"var(--text-muted)"}}),o.jsx("span",{style:{flex:1},children:y.name}),o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},children:[y.invocations.length," turn(s)"]})]},y.id)})})]})]})})]})}function K8(){const{project:e,setProject:t}=ht(),[n,r]=k.useState(""),[i,s]=k.useState(!0),[a,l]=k.useState(!1),[c,u]=k.useState(null),[d,p]=k.useState(!1);if(!e)return null;k.useEffect(()=>{f()},[e.id]);async function f(){s(!0),u(null);try{const x=await Gy(e.id);r(x),l(!1)}catch(x){u(x.message)}finally{s(!1)}}function h(x){x!==void 0&&(r(x),l(!0),u(null))}async function g(){s(!0),u(null);try{const x=await Yy(e.id,n);t(x),l(!1)}catch(x){u(x.message)}finally{s(!1)}}function v(){navigator.clipboard.writeText(n),p(!0),setTimeout(()=>p(!1),2e3)}function _(){const x=new Blob([n],{type:"text/yaml"}),y=URL.createObjectURL(x),j=document.createElement("a");j.href=y,j.download=`${e.name}.yaml`,j.click(),URL.revokeObjectURL(y)}function m(){const x=document.createElement("input");x.type="file",x.accept=".yaml,.yml",x.onchange=async y=>{var S;const j=(S=y.target.files)==null?void 0:S[0];if(!j)return;const A=await j.text();r(A),l(!0)},x.click()}return o.jsxs("div",{className:"yaml-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"yaml-header",children:[o.jsxs("div",{className:"yaml-title",children:[o.jsx("h3",{children:"Project Configuration"}),a&&o.jsxs("span",{className:"status-badge warning",children:[o.jsx(ji,{size:12}),"Unsaved changes"]}),c&&o.jsxs("span",{className:"status-badge error",children:[o.jsx(ji,{size:12}),c]}),d&&o.jsxs("span",{className:"status-badge success",children:[o.jsx(qd,{size:12}),"Copied!"]})]}),o.jsxs("div",{className:"yaml-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:v,title:"Copy to clipboard",children:[o.jsx(ns,{size:14}),"Copy"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:_,title:"Download YAML",children:[o.jsx(Ai,{size:14}),"Download"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:m,title:"Upload YAML",children:[o.jsx(dl,{size:14}),"Upload"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:f,title:"Reload from server",children:[o.jsx(Xt,{size:14}),"Reload"]}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:g,disabled:!a||i,children:"Apply Changes"})]})]}),o.jsx("div",{className:"yaml-editor",children:o.jsx(Zt,{height:"100%",language:"yaml",theme:"vs-dark",value:n,onChange:h,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),o.jsxs("div",{className:"yaml-info",children:[o.jsx("p",{children:"This YAML represents your entire project configuration including the app, agents, tools, and state keys."}),o.jsxs("p",{children:["You can edit the YAML directly, then click ",o.jsx("code",{children:"Apply Changes"})," to update the project. Use ",o.jsx("code",{children:"Download"})," to save a backup or ",o.jsx("code",{children:"Upload"})," to import a configuration."]})]})]})}function G8(){const{project:e}=ht(),[t,n]=k.useState(!1),[r,i]=k.useState(""),[s,a]=k.useState(!1),[l,c]=k.useState(null);if(k.useEffect(()=>{e&&(a(!0),c(null),fetch(`/api/projects/${e.id}/code`).then(p=>{if(!p.ok)throw new Error("Failed to fetch code");return p.json()}).then(p=>{let f=p.code||"";f=f.replace(/\n# --- Callback instrumentation \(for event tracking\) ---[\s\S]*?# --- End callback instrumentation ---\n/g,""),f=f.replace(/_wrap_callback\("[^"]+",\s*"[^"]+",\s*(\w+)\)/g,"$1"),i(f),a(!1)}).catch(p=>{c(p.message),a(!1),i("# Failed to generate code. Please check the backend logs.")}))},[e]),!e)return null;function u(){navigator.clipboard.writeText(r),n(!0),setTimeout(()=>n(!1),2e3)}function d(){if(!e)return;const p=new Blob([r],{type:"text/x-python"}),f=URL.createObjectURL(p),h=document.createElement("a");h.href=f,h.download=`${e.name}_agent.py`,h.click(),URL.revokeObjectURL(f)}return o.jsxs("div",{className:"code-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"code-header",children:[o.jsxs("div",{className:"code-title",children:[o.jsx(jn,{size:16}),o.jsx("h3",{children:"Python Code"}),o.jsx("span",{className:"badge",children:s?"Loading...":"Generated"}),t&&o.jsxs("span",{className:"status-badge success",children:[o.jsx(qd,{size:12}),"Copied!"]}),l&&o.jsxs("span",{className:"status-badge error",children:[o.jsx(ji,{size:12}),"Error"]})]}),o.jsxs("div",{className:"code-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:u,title:"Copy to clipboard",disabled:s||!!l,children:[o.jsx(ns,{size:14}),"Copy"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:d,title:"Download Python file",disabled:s||!!l,children:[o.jsx(Ai,{size:14}),"Download"]})]})]}),o.jsx("div",{className:"code-editor",children:s?o.jsx("div",{className:"code-loading",children:o.jsx("div",{children:"Loading generated code..."})}):l?o.jsxs("div",{className:"code-error",children:[o.jsx(ji,{size:24}),o.jsx("div",{children:l})]}):o.jsx(Zt,{height:"100%",language:"python",theme:"vs-dark",value:r,options:{readOnly:!0,minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),o.jsxs("div",{className:"code-info",children:[o.jsx("p",{children:"This is the Python code equivalent of your project configuration. You can use this code directly with ADK."}),o.jsxs("p",{children:["Place this in a file named ",o.jsx("code",{children:"agent.py"})," inside your agent directory, then run with ",o.jsx("code",{children:"adk web ."})," or ",o.jsx("code",{children:"adk run your_agent"}),"."]})]})]})}const Y8=[{id:"app",label:"App",icon:gv},{id:"agents",label:"Agents",icon:zr},{id:"tools",label:"Tools",icon:dn},{id:"callbacks",label:"Callbacks",icon:jn},{id:"run",label:"Run",icon:fv},{id:"skillsets",label:"SkillSets",icon:c_},{id:"eval",label:"Evaluate",icon:Su},{id:"yaml",label:"YAML",icon:d_},{id:"code",label:"Code",icon:jn}],Q8=["app","agents","tools","callbacks","run","skillsets","eval","yaml","code"];function jc(){var O,D;const{projectId:e,tab:t,itemId:n}=uk(),r=Vd(),{project:i,setProject:s,activeTab:a,setActiveTab:l,hasUnsavedChanges:c,setHasUnsavedChanges:u,selectedAgentId:d,setSelectedAgentId:p,selectedToolId:f,setSelectedToolId:h}=ht(),[g,v]=k.useState(!0),[_,m]=k.useState(!1),[x,y]=k.useState(!1),[j,A]=k.useState(null),S=k.useRef(!0),P=k.useRef(null);k.useEffect(()=>{t&&Q8.includes(t)?l(t):!t&&e&&r(`/project/${e}/${a}`,{replace:!0})},[t,e]),k.useEffect(()=>{t==="agents"&&n?p(n):t==="tools"&&n&&h(n)},[t,n]);function N(C){l(C),C==="agents"&&d?r(`/project/${e}/${C}/${d}`,{replace:!0}):C==="tools"&&f?r(`/project/${e}/${C}/${f}`,{replace:!0}):r(`/project/${e}/${C}`,{replace:!0})}function V(C){C?r(`/project/${e}/${a}/${C}`,{replace:!0}):r(`/project/${e}/${a}`,{replace:!0})}k.useEffect(()=>(e&&E(e),()=>{s(null),u(!1)}),[e]);async function E(C){S.current=!0;try{const L=await Vy(C);s(L),P.current=JSON.stringify(L),u(!1)}catch(L){console.error("Failed to load project:",L),r("/")}finally{v(!1),setTimeout(()=>{S.current=!1},100)}}async function I(){if(i){m(!0);try{const{eval_sets:C,...L}=i;await bu(i.id,L),P.current=JSON.stringify(i),u(!1)}catch(C){console.error("Failed to save project:",C)}finally{m(!1)}}}async function R(){if(i){y(!0),A(null),window.dispatchEvent(new CustomEvent("eval-tests-started"));try{let C=0,L=0;const M=[],w=[];for(const H of i.eval_sets||[]){if(H.eval_cases.length===0)continue;const K=await Ye.post(`/projects/${i.id}/eval-sets/${H.id}/run`,{});K.result&&(C+=K.result.passed_cases||0,L+=K.result.total_cases||0,K.result.case_results&&M.push(...K.result.case_results),w.push(K.result.eval_set_name||H.name||H.id))}if(M.length>0){const H={id:Date.now().toString(36)+Math.random().toString(36).substr(2,5),eval_set_id:"batch",eval_set_name:w.length>1?`All Tests (${w.length} sets)`:w[0]||"All Tests",started_at:Date.now()/1e3,completed_at:Date.now()/1e3,total_cases:L,passed_cases:C,failed_cases:L-C,case_results:M};try{await Ye.post(`/projects/${i.id}/eval-history`,H)}catch(K){console.warn("Failed to save batch eval run to history:",K)}}A({passed:C,total:L}),window.dispatchEvent(new CustomEvent("eval-tests-completed")),setTimeout(()=>A(null),5e3)}catch(C){console.error("Failed to run tests:",C),A({passed:0,total:-1}),setTimeout(()=>A(null),5e3)}finally{y(!1)}}}const q=k.useRef(null);k.useEffect(()=>{if(i&&!S.current&&q.current){const C=i.app.models||[],L=q.current||[];if(C.some((w,H)=>{const K=L.find(b=>b.id===w.id);return K?K.provider!==w.provider||K.model_name!==w.model_name||K.api_base!==w.api_base||K.temperature!==w.temperature||K.max_output_tokens!==w.max_output_tokens||K.top_p!==w.top_p||K.top_k!==w.top_k:!1})){const w=i.app.default_model_id,H=i.agents.map(b=>{if(b.type==="LlmAgent"&&b.model){const z=b.model._appModelId;if(z){const F=C.find(U=>U.id===z);if(F)return{...b,model:{provider:F.provider,model_name:F.model_name,api_base:F.api_base,temperature:F.temperature,max_output_tokens:F.max_output_tokens,top_p:F.top_p,top_k:F.top_k,fallbacks:[],_appModelId:z}}}else if(w){const F=C.find(U=>U.id===w);if(F&&b.model.provider===F.provider&&b.model.model_name===F.model_name&&b.model.api_base===F.api_base)return{...b,model:{provider:F.provider,model_name:F.model_name,api_base:F.api_base,temperature:F.temperature,max_output_tokens:F.max_output_tokens,top_p:F.top_p,top_k:F.top_k,fallbacks:[],_appModelId:w}}}}return b});H.some((b,z)=>JSON.stringify(b)!==JSON.stringify(i.agents[z]))&&s({...i,agents:H})}}i&&(q.current=i.app.models||[])},[i==null?void 0:i.app.models,i,s]);const T=k.useRef(null);return k.useEffect(()=>(i&&!S.current&&P.current&&JSON.stringify(i)!==P.current&&(u(!0),T.current&&clearTimeout(T.current),T.current=setTimeout(async()=>{try{const{eval_sets:L,...M}=i;await bu(i.id,M),P.current=JSON.stringify(i),u(!1)}catch(L){console.error("Auto-save failed:",L)}},500)),()=>{T.current&&clearTimeout(T.current)}),[i]),g?o.jsxs("div",{className:"loading-screen",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("header",{className:"top-bar",children:[o.jsxs("div",{className:"top-bar-left",children:[o.jsxs("button",{className:"back-btn",onClick:()=>r("/"),children:[o.jsx(a_,{size:18}),"Project"]}),o.jsx("h1",{className:"project-name",children:i.name})]}),o.jsx("nav",{className:"tabs-bar",children:Y8.map(C=>o.jsxs("button",{className:`tab-btn ${a===C.id?"active":""}`,onClick:()=>N(C.id),children:[o.jsx(C.icon,{size:14}),C.label]},C.id))}),o.jsxs("div",{className:"top-bar-right",children:[o.jsxs("button",{className:`btn ${j?j.total===-1?"btn-error":j.passed===j.total?"btn-success":"btn-warning":"btn-secondary"}`,onClick:R,disabled:x||!((O=i==null?void 0:i.eval_sets)!=null&&O.some(C=>C.eval_cases.length>0)),title:(D=i==null?void 0:i.eval_sets)!=null&&D.some(C=>C.eval_cases.length>0)?"Run all evaluation tests":"No test cases defined",style:{marginRight:8},children:[x?o.jsx(hv,{size:16,className:"spin"}):o.jsx(fr,{size:16}),x?"Testing...":j?j.total===-1?"Error":`${j.passed}/${j.total}`:"Test"]}),o.jsxs("button",{className:"btn btn-primary",onClick:I,disabled:_,children:[o.jsx(La,{size:16}),_?"Saving...":"Save"]})]})]}),o.jsxs("main",{className:"main-content",children:[a==="app"&&o.jsx(P_,{}),a==="agents"&&o.jsx(D4,{onSelectAgent:V}),a==="tools"&&o.jsx(vE,{onSelectTool:V}),a==="callbacks"&&o.jsx(wE,{onSelectCallback:V}),a==="run"&&o.jsx($8,{}),a==="skillsets"&&o.jsx(B8,{}),a==="eval"&&o.jsx(V8,{}),a==="yaml"&&o.jsx(K8,{}),a==="code"&&o.jsx(G8,{})]})]}):null}function X8(){const{setMcpServers:e,setBuiltinTools:t}=ht();return k.useEffect(()=>{Hd().then(e).catch(console.error),Qy().then(t).catch(console.error)},[e,t]),o.jsxs(Nk,{children:[o.jsx(qr,{path:"/",element:o.jsx(S_,{})}),o.jsx(qr,{path:"/project/:projectId",element:o.jsx(jc,{})}),o.jsx(qr,{path:"/project/:projectId/:tab",element:o.jsx(jc,{})}),o.jsx(qr,{path:"/project/:projectId/:tab/:itemId",element:o.jsx(jc,{})}),o.jsx(qr,{path:"*",element:o.jsx(Sk,{to:"/",replace:!0})})]})}Sc.createRoot(document.getElementById("root")).render(o.jsx(Bt.StrictMode,{children:o.jsx(Tk,{children:o.jsx(X8,{})})}));
