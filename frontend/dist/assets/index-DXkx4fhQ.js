function ax(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Ws=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var tf={exports:{}},So={},nf={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qi=Symbol.for("react.element"),lx=Symbol.for("react.portal"),cx=Symbol.for("react.fragment"),ux=Symbol.for("react.strict_mode"),dx=Symbol.for("react.profiler"),px=Symbol.for("react.provider"),fx=Symbol.for("react.context"),mx=Symbol.for("react.forward_ref"),hx=Symbol.for("react.suspense"),gx=Symbol.for("react.memo"),xx=Symbol.for("react.lazy"),Eu=Symbol.iterator;function yx(e){return e===null||typeof e!="object"?null:(e=Eu&&e[Eu]||e["@@iterator"],typeof e=="function"?e:null)}var rf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sf=Object.assign,of={};function Wr(e,t,n){this.props=e,this.context=t,this.refs=of,this.updater=n||rf}Wr.prototype.isReactComponent={};Wr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Wr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function af(){}af.prototype=Wr.prototype;function ic(e,t,n){this.props=e,this.context=t,this.refs=of,this.updater=n||rf}var sc=ic.prototype=new af;sc.constructor=ic;sf(sc,Wr.prototype);sc.isPureReactComponent=!0;var zu=Array.isArray,lf=Object.prototype.hasOwnProperty,oc={current:null},cf={key:!0,ref:!0,__self:!0,__source:!0};function uf(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)lf.call(t,r)&&!cf.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Qi,type:e,key:o,ref:a,props:i,_owner:oc.current}}function vx(e,t){return{$$typeof:Qi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ac(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qi}function bx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Tu=/\/+/g;function Zo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?bx(""+e.key):t.toString(36)}function zs(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Qi:case lx:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Zo(a,0):r,zu(i)?(n="",e!=null&&(n=e.replace(Tu,"$&/")+"/"),zs(i,t,n,"",function(u){return u})):i!=null&&(ac(i)&&(i=vx(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Tu,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",zu(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+Zo(o,l);a+=zs(o,t,n,c,i)}else if(c=yx(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+Zo(o,l++),a+=zs(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function as(e,t,n){if(e==null)return e;var r=[],i=0;return zs(e,r,"","",function(o){return t.call(n,o,i++)}),r}function kx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var it={current:null},Ts={transition:null},jx={ReactCurrentDispatcher:it,ReactCurrentBatchConfig:Ts,ReactCurrentOwner:oc};function df(){throw Error("act(...) is not supported in production builds of React.")}xe.Children={map:as,forEach:function(e,t,n){as(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return as(e,function(){t++}),t},toArray:function(e){return as(e,function(t){return t})||[]},only:function(e){if(!ac(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};xe.Component=Wr;xe.Fragment=cx;xe.Profiler=dx;xe.PureComponent=ic;xe.StrictMode=ux;xe.Suspense=hx;xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jx;xe.act=df;xe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=sf({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=oc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)lf.call(t,c)&&!cf.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Qi,type:e.type,key:i,ref:o,props:r,_owner:a}};xe.createContext=function(e){return e={$$typeof:fx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:px,_context:e},e.Consumer=e};xe.createElement=uf;xe.createFactory=function(e){var t=uf.bind(null,e);return t.type=e,t};xe.createRef=function(){return{current:null}};xe.forwardRef=function(e){return{$$typeof:mx,render:e}};xe.isValidElement=ac;xe.lazy=function(e){return{$$typeof:xx,_payload:{_status:-1,_result:e},_init:kx}};xe.memo=function(e,t){return{$$typeof:gx,type:e,compare:t===void 0?null:t}};xe.startTransition=function(e){var t=Ts.transition;Ts.transition={};try{e()}finally{Ts.transition=t}};xe.unstable_act=df;xe.useCallback=function(e,t){return it.current.useCallback(e,t)};xe.useContext=function(e){return it.current.useContext(e)};xe.useDebugValue=function(){};xe.useDeferredValue=function(e){return it.current.useDeferredValue(e)};xe.useEffect=function(e,t){return it.current.useEffect(e,t)};xe.useId=function(){return it.current.useId()};xe.useImperativeHandle=function(e,t,n){return it.current.useImperativeHandle(e,t,n)};xe.useInsertionEffect=function(e,t){return it.current.useInsertionEffect(e,t)};xe.useLayoutEffect=function(e,t){return it.current.useLayoutEffect(e,t)};xe.useMemo=function(e,t){return it.current.useMemo(e,t)};xe.useReducer=function(e,t,n){return it.current.useReducer(e,t,n)};xe.useRef=function(e){return it.current.useRef(e)};xe.useState=function(e){return it.current.useState(e)};xe.useSyncExternalStore=function(e,t,n){return it.current.useSyncExternalStore(e,t,n)};xe.useTransition=function(){return it.current.useTransition()};xe.version="18.3.1";nf.exports=xe;var _=nf.exports;const Lt=_o(_),wx=ax({__proto__:null,default:Lt},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _x=_,Sx=Symbol.for("react.element"),Cx=Symbol.for("react.fragment"),Nx=Object.prototype.hasOwnProperty,Ex=_x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zx={key:!0,ref:!0,__self:!0,__source:!0};function pf(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Nx.call(t,r)&&!zx.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Sx,type:e,key:o,ref:a,props:i,_owner:Ex.current}}So.Fragment=Cx;So.jsx=pf;So.jsxs=pf;tf.exports=So;var s=tf.exports,Ha={},ff={exports:{}},wt={},mf={exports:{}},hf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,I){var k=O.length;O.push(I);e:for(;0<k;){var U=k-1>>>1,K=O[U];if(0<i(K,I))O[U]=I,O[k]=K,k=U;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var I=O[0],k=O.pop();if(k!==I){O[0]=k;e:for(var U=0,K=O.length,C=K>>>1;U<C;){var le=2*(U+1)-1,A=O[le],Z=le+1,B=O[Z];if(0>i(A,k))Z<K&&0>i(B,A)?(O[U]=B,O[Z]=k,U=Z):(O[U]=A,O[le]=k,U=le);else if(Z<K&&0>i(B,k))O[U]=B,O[Z]=k,U=Z;else break e}}return I}function i(O,I){var k=O.sortIndex-I.sortIndex;return k!==0?k:O.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,p=null,f=3,m=!1,y=!1,w=!1,N=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(O){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=O)r(u),I.sortIndex=I.expirationTime,t(c,I);else break;I=n(u)}}function L(O){if(w=!1,v(O),!y)if(n(c)!==null)y=!0,X(S);else{var I=n(u);I!==null&&z(L,I.startTime-O)}}function S(O,I){y=!1,w&&(w=!1,x(P),P=-1),m=!0;var k=f;try{for(v(I),p=n(c);p!==null&&(!(p.expirationTime>I)||O&&!j());){var U=p.callback;if(typeof U=="function"){p.callback=null,f=p.priorityLevel;var K=U(p.expirationTime<=I);I=e.unstable_now(),typeof K=="function"?p.callback=K:p===n(c)&&r(c),v(I)}else r(c);p=n(c)}if(p!==null)var C=!0;else{var le=n(u);le!==null&&z(L,le.startTime-I),C=!1}return C}finally{p=null,f=k,m=!1}}var g=!1,b=null,P=-1,R=5,E=-1;function j(){return!(e.unstable_now()-E<R)}function T(){if(b!==null){var O=e.unstable_now();E=O;var I=!0;try{I=b(!0,O)}finally{I?M():(g=!1,b=null)}}else g=!1}var M;if(typeof h=="function")M=function(){h(T)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,F=V.port2;V.port1.onmessage=T,M=function(){F.postMessage(null)}}else M=function(){N(T,0)};function X(O){b=O,g||(g=!0,M())}function z(O,I){P=N(function(){O(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){y||m||(y=!0,X(S))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(O){switch(f){case 1:case 2:case 3:var I=3;break;default:I=f}var k=f;f=I;try{return O()}finally{f=k}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,I){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var k=f;f=O;try{return I()}finally{f=k}},e.unstable_scheduleCallback=function(O,I,k){var U=e.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?U+k:U):k=U,O){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=k+K,O={id:d++,callback:I,priorityLevel:O,startTime:k,expirationTime:K,sortIndex:-1},k>U?(O.sortIndex=k,t(u,O),n(c)===null&&O===n(u)&&(w?(x(P),P=-1):w=!0,z(L,k-U))):(O.sortIndex=K,t(c,O),y||m||(y=!0,X(S))),O},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(O){var I=f;return function(){var k=f;f=I;try{return O.apply(this,arguments)}finally{f=k}}}})(hf);mf.exports=hf;var Tx=mf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Px=_,jt=Tx;function Q(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gf=new Set,Ci={};function or(e,t){Rr(e,t),Rr(e+"Capture",t)}function Rr(e,t){for(Ci[e]=t,e=0;e<t.length;e++)gf.add(t[e])}var ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qa=Object.prototype.hasOwnProperty,Lx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pu={},Lu={};function Ax(e){return qa.call(Lu,e)?!0:qa.call(Pu,e)?!1:Lx.test(e)?Lu[e]=!0:(Pu[e]=!0,!1)}function Rx(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ix(e,t,n,r){if(t===null||typeof t>"u"||Rx(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function st(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Qe[e]=new st(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Qe[t]=new st(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Qe[e]=new st(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Qe[e]=new st(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Qe[e]=new st(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Qe[e]=new st(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Qe[e]=new st(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Qe[e]=new st(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Qe[e]=new st(e,5,!1,e.toLowerCase(),null,!1,!1)});var lc=/[\-:]([a-z])/g;function cc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(lc,cc);Qe[t]=new st(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(lc,cc);Qe[t]=new st(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(lc,cc);Qe[t]=new st(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Qe[e]=new st(e,1,!1,e.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new st("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Qe[e]=new st(e,1,!1,e.toLowerCase(),null,!0,!0)});function uc(e,t,n,r){var i=Qe.hasOwnProperty(t)?Qe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ix(t,n,i,r)&&(n=null),r||i===null?Ax(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pn=Px.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ls=Symbol.for("react.element"),fr=Symbol.for("react.portal"),mr=Symbol.for("react.fragment"),dc=Symbol.for("react.strict_mode"),Ja=Symbol.for("react.profiler"),xf=Symbol.for("react.provider"),yf=Symbol.for("react.context"),pc=Symbol.for("react.forward_ref"),Ka=Symbol.for("react.suspense"),Qa=Symbol.for("react.suspense_list"),fc=Symbol.for("react.memo"),gn=Symbol.for("react.lazy"),vf=Symbol.for("react.offscreen"),Au=Symbol.iterator;function Gr(e){return e===null||typeof e!="object"?null:(e=Au&&e[Au]||e["@@iterator"],typeof e=="function"?e:null)}var Re=Object.assign,ea;function li(e){if(ea===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ea=t&&t[1]||""}return`
`+ea+e}var ta=!1;function na(e,t){if(!e||ta)return"";ta=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{ta=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?li(e):""}function Mx(e){switch(e.tag){case 5:return li(e.type);case 16:return li("Lazy");case 13:return li("Suspense");case 19:return li("SuspenseList");case 0:case 2:case 15:return e=na(e.type,!1),e;case 11:return e=na(e.type.render,!1),e;case 1:return e=na(e.type,!0),e;default:return""}}function Ga(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mr:return"Fragment";case fr:return"Portal";case Ja:return"Profiler";case dc:return"StrictMode";case Ka:return"Suspense";case Qa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yf:return(e.displayName||"Context")+".Consumer";case xf:return(e._context.displayName||"Context")+".Provider";case pc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fc:return t=e.displayName||null,t!==null?t:Ga(e.type)||"Memo";case gn:t=e._payload,e=e._init;try{return Ga(e(t))}catch{}}return null}function Ox(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ga(t);case 8:return t===dc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function An(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $x(e){var t=bf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function cs(e){e._valueTracker||(e._valueTracker=$x(e))}function kf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=bf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Hs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ya(e,t){var n=t.checked;return Re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ru(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=An(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jf(e,t){t=t.checked,t!=null&&uc(e,"checked",t,!1)}function Xa(e,t){jf(e,t);var n=An(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Za(e,t.type,n):t.hasOwnProperty("defaultValue")&&Za(e,t.type,An(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Iu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Za(e,t,n){(t!=="number"||Hs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ci=Array.isArray;function Cr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+An(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function el(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(Q(91));return Re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Mu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(Q(92));if(ci(n)){if(1<n.length)throw Error(Q(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:An(n)}}function wf(e,t){var n=An(t.value),r=An(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ou(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function _f(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?_f(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var us,Sf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(us=us||document.createElement("div"),us.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=us.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ni(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dx=["Webkit","ms","Moz","O"];Object.keys(fi).forEach(function(e){Dx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fi[t]=fi[e]})});function Cf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||fi.hasOwnProperty(e)&&fi[e]?(""+t).trim():t+"px"}function Nf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Cf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Fx=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nl(e,t){if(t){if(Fx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(Q(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(Q(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(Q(61))}if(t.style!=null&&typeof t.style!="object")throw Error(Q(62))}}function rl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var il=null;function mc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sl=null,Nr=null,Er=null;function $u(e){if(e=Xi(e)){if(typeof sl!="function")throw Error(Q(280));var t=e.stateNode;t&&(t=To(t),sl(e.stateNode,e.type,t))}}function Ef(e){Nr?Er?Er.push(e):Er=[e]:Nr=e}function zf(){if(Nr){var e=Nr,t=Er;if(Er=Nr=null,$u(e),t)for(e=0;e<t.length;e++)$u(t[e])}}function Tf(e,t){return e(t)}function Pf(){}var ra=!1;function Lf(e,t,n){if(ra)return e(t,n);ra=!0;try{return Tf(e,t,n)}finally{ra=!1,(Nr!==null||Er!==null)&&(Pf(),zf())}}function Ei(e,t){var n=e.stateNode;if(n===null)return null;var r=To(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Q(231,t,typeof n));return n}var ol=!1;if(ln)try{var Yr={};Object.defineProperty(Yr,"passive",{get:function(){ol=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{ol=!1}function Bx(e,t,n,r,i,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var mi=!1,qs=null,Js=!1,al=null,Ux={onError:function(e){mi=!0,qs=e}};function Vx(e,t,n,r,i,o,a,l,c){mi=!1,qs=null,Bx.apply(Ux,arguments)}function Wx(e,t,n,r,i,o,a,l,c){if(Vx.apply(this,arguments),mi){if(mi){var u=qs;mi=!1,qs=null}else throw Error(Q(198));Js||(Js=!0,al=u)}}function ar(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Af(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Du(e){if(ar(e)!==e)throw Error(Q(188))}function Hx(e){var t=e.alternate;if(!t){if(t=ar(e),t===null)throw Error(Q(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Du(i),e;if(o===r)return Du(i),t;o=o.sibling}throw Error(Q(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(Q(189))}}if(n.alternate!==r)throw Error(Q(190))}if(n.tag!==3)throw Error(Q(188));return n.stateNode.current===n?e:t}function Rf(e){return e=Hx(e),e!==null?If(e):null}function If(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=If(e);if(t!==null)return t;e=e.sibling}return null}var Mf=jt.unstable_scheduleCallback,Fu=jt.unstable_cancelCallback,qx=jt.unstable_shouldYield,Jx=jt.unstable_requestPaint,Me=jt.unstable_now,Kx=jt.unstable_getCurrentPriorityLevel,hc=jt.unstable_ImmediatePriority,Of=jt.unstable_UserBlockingPriority,Ks=jt.unstable_NormalPriority,Qx=jt.unstable_LowPriority,$f=jt.unstable_IdlePriority,Co=null,Qt=null;function Gx(e){if(Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(Co,e,void 0,(e.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:Zx,Yx=Math.log,Xx=Math.LN2;function Zx(e){return e>>>=0,e===0?32:31-(Yx(e)/Xx|0)|0}var ds=64,ps=4194304;function ui(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=ui(l):(o&=a,o!==0&&(r=ui(o)))}else a=n&~i,a!==0?r=ui(a):o!==0&&(r=ui(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ft(t),i=1<<n,r|=e[n],t&=~i;return r}function ey(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ty(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ft(o),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=ey(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function ll(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Df(){var e=ds;return ds<<=1,!(ds&4194240)&&(ds=64),e}function ia(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ft(t),e[t]=n}function ny(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ft(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function gc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ft(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var je=0;function Ff(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bf,xc,Uf,Vf,Wf,cl=!1,fs=[],_n=null,Sn=null,Cn=null,zi=new Map,Ti=new Map,yn=[],ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bu(e,t){switch(e){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":zi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ti.delete(t.pointerId)}}function Xr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Xi(t),t!==null&&xc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function iy(e,t,n,r,i){switch(t){case"focusin":return _n=Xr(_n,e,t,n,r,i),!0;case"dragenter":return Sn=Xr(Sn,e,t,n,r,i),!0;case"mouseover":return Cn=Xr(Cn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return zi.set(o,Xr(zi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ti.set(o,Xr(Ti.get(o)||null,e,t,n,r,i)),!0}return!1}function Hf(e){var t=Jn(e.target);if(t!==null){var n=ar(t);if(n!==null){if(t=n.tag,t===13){if(t=Af(n),t!==null){e.blockedOn=t,Wf(e.priority,function(){Uf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ps(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ul(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);il=r,n.target.dispatchEvent(r),il=null}else return t=Xi(n),t!==null&&xc(t),e.blockedOn=n,!1;t.shift()}return!0}function Uu(e,t,n){Ps(e)&&n.delete(t)}function sy(){cl=!1,_n!==null&&Ps(_n)&&(_n=null),Sn!==null&&Ps(Sn)&&(Sn=null),Cn!==null&&Ps(Cn)&&(Cn=null),zi.forEach(Uu),Ti.forEach(Uu)}function Zr(e,t){e.blockedOn===t&&(e.blockedOn=null,cl||(cl=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,sy)))}function Pi(e){function t(i){return Zr(i,e)}if(0<fs.length){Zr(fs[0],e);for(var n=1;n<fs.length;n++){var r=fs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_n!==null&&Zr(_n,e),Sn!==null&&Zr(Sn,e),Cn!==null&&Zr(Cn,e),zi.forEach(t),Ti.forEach(t),n=0;n<yn.length;n++)r=yn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yn.length&&(n=yn[0],n.blockedOn===null);)Hf(n),n.blockedOn===null&&yn.shift()}var zr=pn.ReactCurrentBatchConfig,Gs=!0;function oy(e,t,n,r){var i=je,o=zr.transition;zr.transition=null;try{je=1,yc(e,t,n,r)}finally{je=i,zr.transition=o}}function ay(e,t,n,r){var i=je,o=zr.transition;zr.transition=null;try{je=4,yc(e,t,n,r)}finally{je=i,zr.transition=o}}function yc(e,t,n,r){if(Gs){var i=ul(e,t,n,r);if(i===null)ma(e,t,r,Ys,n),Bu(e,r);else if(iy(i,e,t,n,r))r.stopPropagation();else if(Bu(e,r),t&4&&-1<ry.indexOf(e)){for(;i!==null;){var o=Xi(i);if(o!==null&&Bf(o),o=ul(e,t,n,r),o===null&&ma(e,t,r,Ys,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ma(e,t,r,null,n)}}var Ys=null;function ul(e,t,n,r){if(Ys=null,e=mc(r),e=Jn(e),e!==null)if(t=ar(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Af(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ys=e,null}function qf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kx()){case hc:return 1;case Of:return 4;case Ks:case Qx:return 16;case $f:return 536870912;default:return 16}default:return 16}}var bn=null,vc=null,Ls=null;function Jf(){if(Ls)return Ls;var e,t=vc,n=t.length,r,i="value"in bn?bn.value:bn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ls=i.slice(e,1<r?1-r:void 0)}function As(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ms(){return!0}function Vu(){return!1}function _t(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ms:Vu,this.isPropagationStopped=Vu,this}return Re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ms)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ms)},persist:function(){},isPersistent:ms}),t}var Hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bc=_t(Hr),Yi=Re({},Hr,{view:0,detail:0}),ly=_t(Yi),sa,oa,ei,No=Re({},Yi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ei&&(ei&&e.type==="mousemove"?(sa=e.screenX-ei.screenX,oa=e.screenY-ei.screenY):oa=sa=0,ei=e),sa)},movementY:function(e){return"movementY"in e?e.movementY:oa}}),Wu=_t(No),cy=Re({},No,{dataTransfer:0}),uy=_t(cy),dy=Re({},Yi,{relatedTarget:0}),aa=_t(dy),py=Re({},Hr,{animationName:0,elapsedTime:0,pseudoElement:0}),fy=_t(py),my=Re({},Hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hy=_t(my),gy=Re({},Hr,{data:0}),Hu=_t(gy),xy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function by(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vy[e])?!!t[e]:!1}function kc(){return by}var ky=Re({},Yi,{key:function(e){if(e.key){var t=xy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=As(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kc,charCode:function(e){return e.type==="keypress"?As(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?As(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jy=_t(ky),wy=Re({},No,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qu=_t(wy),_y=Re({},Yi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kc}),Sy=_t(_y),Cy=Re({},Hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ny=_t(Cy),Ey=Re({},No,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zy=_t(Ey),Ty=[9,13,27,32],jc=ln&&"CompositionEvent"in window,hi=null;ln&&"documentMode"in document&&(hi=document.documentMode);var Py=ln&&"TextEvent"in window&&!hi,Kf=ln&&(!jc||hi&&8<hi&&11>=hi),Ju=" ",Ku=!1;function Qf(e,t){switch(e){case"keyup":return Ty.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hr=!1;function Ly(e,t){switch(e){case"compositionend":return Gf(t);case"keypress":return t.which!==32?null:(Ku=!0,Ju);case"textInput":return e=t.data,e===Ju&&Ku?null:e;default:return null}}function Ay(e,t){if(hr)return e==="compositionend"||!jc&&Qf(e,t)?(e=Jf(),Ls=vc=bn=null,hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kf&&t.locale!=="ko"?null:t.data;default:return null}}var Ry={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ry[e.type]:t==="textarea"}function Yf(e,t,n,r){Ef(r),t=Xs(t,"onChange"),0<t.length&&(n=new bc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var gi=null,Li=null;function Iy(e){lm(e,0)}function Eo(e){var t=yr(e);if(kf(t))return e}function My(e,t){if(e==="change")return t}var Xf=!1;if(ln){var la;if(ln){var ca="oninput"in document;if(!ca){var Gu=document.createElement("div");Gu.setAttribute("oninput","return;"),ca=typeof Gu.oninput=="function"}la=ca}else la=!1;Xf=la&&(!document.documentMode||9<document.documentMode)}function Yu(){gi&&(gi.detachEvent("onpropertychange",Zf),Li=gi=null)}function Zf(e){if(e.propertyName==="value"&&Eo(Li)){var t=[];Yf(t,Li,e,mc(e)),Lf(Iy,t)}}function Oy(e,t,n){e==="focusin"?(Yu(),gi=t,Li=n,gi.attachEvent("onpropertychange",Zf)):e==="focusout"&&Yu()}function $y(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Eo(Li)}function Dy(e,t){if(e==="click")return Eo(t)}function Fy(e,t){if(e==="input"||e==="change")return Eo(t)}function By(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ut=typeof Object.is=="function"?Object.is:By;function Ai(e,t){if(Ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!qa.call(t,i)||!Ut(e[i],t[i]))return!1}return!0}function Xu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zu(e,t){var n=Xu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xu(n)}}function em(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?em(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function tm(){for(var e=window,t=Hs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hs(e.document)}return t}function wc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Uy(e){var t=tm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&em(n.ownerDocument.documentElement,n)){if(r!==null&&wc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Zu(n,o);var a=Zu(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vy=ln&&"documentMode"in document&&11>=document.documentMode,gr=null,dl=null,xi=null,pl=!1;function ed(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pl||gr==null||gr!==Hs(r)||(r=gr,"selectionStart"in r&&wc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xi&&Ai(xi,r)||(xi=r,r=Xs(dl,"onSelect"),0<r.length&&(t=new bc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function hs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xr={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionend:hs("Transition","TransitionEnd")},ua={},nm={};ln&&(nm=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function zo(e){if(ua[e])return ua[e];if(!xr[e])return e;var t=xr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in nm)return ua[e]=t[n];return e}var rm=zo("animationend"),im=zo("animationiteration"),sm=zo("animationstart"),om=zo("transitionend"),am=new Map,td="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(e,t){am.set(e,t),or(t,[e])}for(var da=0;da<td.length;da++){var pa=td[da],Wy=pa.toLowerCase(),Hy=pa[0].toUpperCase()+pa.slice(1);On(Wy,"on"+Hy)}On(rm,"onAnimationEnd");On(im,"onAnimationIteration");On(sm,"onAnimationStart");On("dblclick","onDoubleClick");On("focusin","onFocus");On("focusout","onBlur");On(om,"onTransitionEnd");Rr("onMouseEnter",["mouseout","mouseover"]);Rr("onMouseLeave",["mouseout","mouseover"]);Rr("onPointerEnter",["pointerout","pointerover"]);Rr("onPointerLeave",["pointerout","pointerover"]);or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));or("onBeforeInput",["compositionend","keypress","textInput","paste"]);or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qy=new Set("cancel close invalid load scroll toggle".split(" ").concat(di));function nd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Wx(r,t,void 0,e),e.currentTarget=null}function lm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;nd(i,l,u),o=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;nd(i,l,u),o=c}}}if(Js)throw e=al,Js=!1,al=null,e}function Ne(e,t){var n=t[xl];n===void 0&&(n=t[xl]=new Set);var r=e+"__bubble";n.has(r)||(cm(t,e,2,!1),n.add(r))}function fa(e,t,n){var r=0;t&&(r|=4),cm(n,e,r,t)}var gs="_reactListening"+Math.random().toString(36).slice(2);function Ri(e){if(!e[gs]){e[gs]=!0,gf.forEach(function(n){n!=="selectionchange"&&(qy.has(n)||fa(n,!1,e),fa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gs]||(t[gs]=!0,fa("selectionchange",!1,t))}}function cm(e,t,n,r){switch(qf(t)){case 1:var i=oy;break;case 4:i=ay;break;default:i=yc}n=i.bind(null,t,n,e),i=void 0,!ol||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ma(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Jn(l),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Lf(function(){var u=o,d=mc(n),p=[];e:{var f=am.get(e);if(f!==void 0){var m=bc,y=e;switch(e){case"keypress":if(As(n)===0)break e;case"keydown":case"keyup":m=jy;break;case"focusin":y="focus",m=aa;break;case"focusout":y="blur",m=aa;break;case"beforeblur":case"afterblur":m=aa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Wu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=uy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Sy;break;case rm:case im:case sm:m=fy;break;case om:m=Ny;break;case"scroll":m=ly;break;case"wheel":m=zy;break;case"copy":case"cut":case"paste":m=hy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=qu}var w=(t&4)!==0,N=!w&&e==="scroll",x=w?f!==null?f+"Capture":null:f;w=[];for(var h=u,v;h!==null;){v=h;var L=v.stateNode;if(v.tag===5&&L!==null&&(v=L,x!==null&&(L=Ei(h,x),L!=null&&w.push(Ii(h,L,v)))),N)break;h=h.return}0<w.length&&(f=new m(f,y,null,n,d),p.push({event:f,listeners:w}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==il&&(y=n.relatedTarget||n.fromElement)&&(Jn(y)||y[cn]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?Jn(y):null,y!==null&&(N=ar(y),y!==N||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(w=Wu,L="onMouseLeave",x="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(w=qu,L="onPointerLeave",x="onPointerEnter",h="pointer"),N=m==null?f:yr(m),v=y==null?f:yr(y),f=new w(L,h+"leave",m,n,d),f.target=N,f.relatedTarget=v,L=null,Jn(d)===u&&(w=new w(x,h+"enter",y,n,d),w.target=v,w.relatedTarget=N,L=w),N=L,m&&y)t:{for(w=m,x=y,h=0,v=w;v;v=cr(v))h++;for(v=0,L=x;L;L=cr(L))v++;for(;0<h-v;)w=cr(w),h--;for(;0<v-h;)x=cr(x),v--;for(;h--;){if(w===x||x!==null&&w===x.alternate)break t;w=cr(w),x=cr(x)}w=null}else w=null;m!==null&&rd(p,f,m,w,!1),y!==null&&N!==null&&rd(p,N,y,w,!0)}}e:{if(f=u?yr(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var S=My;else if(Qu(f))if(Xf)S=Fy;else{S=$y;var g=Oy}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=Dy);if(S&&(S=S(e,u))){Yf(p,S,n,d);break e}g&&g(e,f,u),e==="focusout"&&(g=f._wrapperState)&&g.controlled&&f.type==="number"&&Za(f,"number",f.value)}switch(g=u?yr(u):window,e){case"focusin":(Qu(g)||g.contentEditable==="true")&&(gr=g,dl=u,xi=null);break;case"focusout":xi=dl=gr=null;break;case"mousedown":pl=!0;break;case"contextmenu":case"mouseup":case"dragend":pl=!1,ed(p,n,d);break;case"selectionchange":if(Vy)break;case"keydown":case"keyup":ed(p,n,d)}var b;if(jc)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else hr?Qf(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Kf&&n.locale!=="ko"&&(hr||P!=="onCompositionStart"?P==="onCompositionEnd"&&hr&&(b=Jf()):(bn=d,vc="value"in bn?bn.value:bn.textContent,hr=!0)),g=Xs(u,P),0<g.length&&(P=new Hu(P,e,null,n,d),p.push({event:P,listeners:g}),b?P.data=b:(b=Gf(n),b!==null&&(P.data=b)))),(b=Py?Ly(e,n):Ay(e,n))&&(u=Xs(u,"onBeforeInput"),0<u.length&&(d=new Hu("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=b))}lm(p,t)})}function Ii(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ei(e,n),o!=null&&r.unshift(Ii(e,o,i)),o=Ei(e,t),o!=null&&r.push(Ii(e,o,i))),e=e.return}return r}function cr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function rd(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Ei(n,o),c!=null&&a.unshift(Ii(n,c,l))):i||(c=Ei(n,o),c!=null&&a.push(Ii(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Jy=/\r\n?/g,Ky=/\u0000|\uFFFD/g;function id(e){return(typeof e=="string"?e:""+e).replace(Jy,`
`).replace(Ky,"")}function xs(e,t,n){if(t=id(t),id(e)!==t&&n)throw Error(Q(425))}function Zs(){}var fl=null,ml=null;function hl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gl=typeof setTimeout=="function"?setTimeout:void 0,Qy=typeof clearTimeout=="function"?clearTimeout:void 0,sd=typeof Promise=="function"?Promise:void 0,Gy=typeof queueMicrotask=="function"?queueMicrotask:typeof sd<"u"?function(e){return sd.resolve(null).then(e).catch(Yy)}:gl;function Yy(e){setTimeout(function(){throw e})}function ha(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Pi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Pi(t)}function Nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function od(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var qr=Math.random().toString(36).slice(2),qt="__reactFiber$"+qr,Mi="__reactProps$"+qr,cn="__reactContainer$"+qr,xl="__reactEvents$"+qr,Xy="__reactListeners$"+qr,Zy="__reactHandles$"+qr;function Jn(e){var t=e[qt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[cn]||n[qt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=od(e);e!==null;){if(n=e[qt])return n;e=od(e)}return t}e=n,n=e.parentNode}return null}function Xi(e){return e=e[qt]||e[cn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Q(33))}function To(e){return e[Mi]||null}var yl=[],vr=-1;function $n(e){return{current:e}}function Ee(e){0>vr||(e.current=yl[vr],yl[vr]=null,vr--)}function _e(e,t){vr++,yl[vr]=e.current,e.current=t}var Rn={},Ze=$n(Rn),ct=$n(!1),er=Rn;function Ir(e,t){var n=e.type.contextTypes;if(!n)return Rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ut(e){return e=e.childContextTypes,e!=null}function eo(){Ee(ct),Ee(Ze)}function ad(e,t,n){if(Ze.current!==Rn)throw Error(Q(168));_e(Ze,t),_e(ct,n)}function um(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(Q(108,Ox(e)||"Unknown",i));return Re({},n,r)}function to(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,er=Ze.current,_e(Ze,e),_e(ct,ct.current),!0}function ld(e,t,n){var r=e.stateNode;if(!r)throw Error(Q(169));n?(e=um(e,t,er),r.__reactInternalMemoizedMergedChildContext=e,Ee(ct),Ee(Ze),_e(Ze,e)):Ee(ct),_e(ct,n)}var tn=null,Po=!1,ga=!1;function dm(e){tn===null?tn=[e]:tn.push(e)}function ev(e){Po=!0,dm(e)}function Dn(){if(!ga&&tn!==null){ga=!0;var e=0,t=je;try{var n=tn;for(je=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}tn=null,Po=!1}catch(i){throw tn!==null&&(tn=tn.slice(e+1)),Mf(hc,Dn),i}finally{je=t,ga=!1}}return null}var br=[],kr=0,no=null,ro=0,Et=[],zt=0,tr=null,nn=1,rn="";function Wn(e,t){br[kr++]=ro,br[kr++]=no,no=e,ro=t}function pm(e,t,n){Et[zt++]=nn,Et[zt++]=rn,Et[zt++]=tr,tr=e;var r=nn;e=rn;var i=32-Ft(r)-1;r&=~(1<<i),n+=1;var o=32-Ft(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,nn=1<<32-Ft(t)+i|n<<i|r,rn=o+e}else nn=1<<o|n<<i|r,rn=e}function _c(e){e.return!==null&&(Wn(e,1),pm(e,1,0))}function Sc(e){for(;e===no;)no=br[--kr],br[kr]=null,ro=br[--kr],br[kr]=null;for(;e===tr;)tr=Et[--zt],Et[zt]=null,rn=Et[--zt],Et[zt]=null,nn=Et[--zt],Et[zt]=null}var kt=null,vt=null,ze=!1,Dt=null;function fm(e,t){var n=Pt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function cd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,kt=e,vt=Nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,kt=e,vt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=tr!==null?{id:nn,overflow:rn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,kt=e,vt=null,!0):!1;default:return!1}}function vl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bl(e){if(ze){var t=vt;if(t){var n=t;if(!cd(e,t)){if(vl(e))throw Error(Q(418));t=Nn(n.nextSibling);var r=kt;t&&cd(e,t)?fm(r,n):(e.flags=e.flags&-4097|2,ze=!1,kt=e)}}else{if(vl(e))throw Error(Q(418));e.flags=e.flags&-4097|2,ze=!1,kt=e}}}function ud(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;kt=e}function ys(e){if(e!==kt)return!1;if(!ze)return ud(e),ze=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hl(e.type,e.memoizedProps)),t&&(t=vt)){if(vl(e))throw mm(),Error(Q(418));for(;t;)fm(e,t),t=Nn(t.nextSibling)}if(ud(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){vt=Nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}vt=null}}else vt=kt?Nn(e.stateNode.nextSibling):null;return!0}function mm(){for(var e=vt;e;)e=Nn(e.nextSibling)}function Mr(){vt=kt=null,ze=!1}function Cc(e){Dt===null?Dt=[e]:Dt.push(e)}var tv=pn.ReactCurrentBatchConfig;function ti(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Q(309));var r=n.stateNode}if(!r)throw Error(Q(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(Q(284));if(!n._owner)throw Error(Q(290,e))}return e}function vs(e,t){throw e=Object.prototype.toString.call(t),Error(Q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function dd(e){var t=e._init;return t(e._payload)}function hm(e){function t(x,h){if(e){var v=x.deletions;v===null?(x.deletions=[h],x.flags|=16):v.push(h)}}function n(x,h){if(!e)return null;for(;h!==null;)t(x,h),h=h.sibling;return null}function r(x,h){for(x=new Map;h!==null;)h.key!==null?x.set(h.key,h):x.set(h.index,h),h=h.sibling;return x}function i(x,h){return x=Pn(x,h),x.index=0,x.sibling=null,x}function o(x,h,v){return x.index=v,e?(v=x.alternate,v!==null?(v=v.index,v<h?(x.flags|=2,h):v):(x.flags|=2,h)):(x.flags|=1048576,h)}function a(x){return e&&x.alternate===null&&(x.flags|=2),x}function l(x,h,v,L){return h===null||h.tag!==6?(h=wa(v,x.mode,L),h.return=x,h):(h=i(h,v),h.return=x,h)}function c(x,h,v,L){var S=v.type;return S===mr?d(x,h,v.props.children,L,v.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===gn&&dd(S)===h.type)?(L=i(h,v.props),L.ref=ti(x,h,v),L.return=x,L):(L=Fs(v.type,v.key,v.props,null,x.mode,L),L.ref=ti(x,h,v),L.return=x,L)}function u(x,h,v,L){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=_a(v,x.mode,L),h.return=x,h):(h=i(h,v.children||[]),h.return=x,h)}function d(x,h,v,L,S){return h===null||h.tag!==7?(h=Yn(v,x.mode,L,S),h.return=x,h):(h=i(h,v),h.return=x,h)}function p(x,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=wa(""+h,x.mode,v),h.return=x,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ls:return v=Fs(h.type,h.key,h.props,null,x.mode,v),v.ref=ti(x,null,h),v.return=x,v;case fr:return h=_a(h,x.mode,v),h.return=x,h;case gn:var L=h._init;return p(x,L(h._payload),v)}if(ci(h)||Gr(h))return h=Yn(h,x.mode,v,null),h.return=x,h;vs(x,h)}return null}function f(x,h,v,L){var S=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:l(x,h,""+v,L);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ls:return v.key===S?c(x,h,v,L):null;case fr:return v.key===S?u(x,h,v,L):null;case gn:return S=v._init,f(x,h,S(v._payload),L)}if(ci(v)||Gr(v))return S!==null?null:d(x,h,v,L,null);vs(x,v)}return null}function m(x,h,v,L,S){if(typeof L=="string"&&L!==""||typeof L=="number")return x=x.get(v)||null,l(h,x,""+L,S);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case ls:return x=x.get(L.key===null?v:L.key)||null,c(h,x,L,S);case fr:return x=x.get(L.key===null?v:L.key)||null,u(h,x,L,S);case gn:var g=L._init;return m(x,h,v,g(L._payload),S)}if(ci(L)||Gr(L))return x=x.get(v)||null,d(h,x,L,S,null);vs(h,L)}return null}function y(x,h,v,L){for(var S=null,g=null,b=h,P=h=0,R=null;b!==null&&P<v.length;P++){b.index>P?(R=b,b=null):R=b.sibling;var E=f(x,b,v[P],L);if(E===null){b===null&&(b=R);break}e&&b&&E.alternate===null&&t(x,b),h=o(E,h,P),g===null?S=E:g.sibling=E,g=E,b=R}if(P===v.length)return n(x,b),ze&&Wn(x,P),S;if(b===null){for(;P<v.length;P++)b=p(x,v[P],L),b!==null&&(h=o(b,h,P),g===null?S=b:g.sibling=b,g=b);return ze&&Wn(x,P),S}for(b=r(x,b);P<v.length;P++)R=m(b,x,P,v[P],L),R!==null&&(e&&R.alternate!==null&&b.delete(R.key===null?P:R.key),h=o(R,h,P),g===null?S=R:g.sibling=R,g=R);return e&&b.forEach(function(j){return t(x,j)}),ze&&Wn(x,P),S}function w(x,h,v,L){var S=Gr(v);if(typeof S!="function")throw Error(Q(150));if(v=S.call(v),v==null)throw Error(Q(151));for(var g=S=null,b=h,P=h=0,R=null,E=v.next();b!==null&&!E.done;P++,E=v.next()){b.index>P?(R=b,b=null):R=b.sibling;var j=f(x,b,E.value,L);if(j===null){b===null&&(b=R);break}e&&b&&j.alternate===null&&t(x,b),h=o(j,h,P),g===null?S=j:g.sibling=j,g=j,b=R}if(E.done)return n(x,b),ze&&Wn(x,P),S;if(b===null){for(;!E.done;P++,E=v.next())E=p(x,E.value,L),E!==null&&(h=o(E,h,P),g===null?S=E:g.sibling=E,g=E);return ze&&Wn(x,P),S}for(b=r(x,b);!E.done;P++,E=v.next())E=m(b,x,P,E.value,L),E!==null&&(e&&E.alternate!==null&&b.delete(E.key===null?P:E.key),h=o(E,h,P),g===null?S=E:g.sibling=E,g=E);return e&&b.forEach(function(T){return t(x,T)}),ze&&Wn(x,P),S}function N(x,h,v,L){if(typeof v=="object"&&v!==null&&v.type===mr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ls:e:{for(var S=v.key,g=h;g!==null;){if(g.key===S){if(S=v.type,S===mr){if(g.tag===7){n(x,g.sibling),h=i(g,v.props.children),h.return=x,x=h;break e}}else if(g.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===gn&&dd(S)===g.type){n(x,g.sibling),h=i(g,v.props),h.ref=ti(x,g,v),h.return=x,x=h;break e}n(x,g);break}else t(x,g);g=g.sibling}v.type===mr?(h=Yn(v.props.children,x.mode,L,v.key),h.return=x,x=h):(L=Fs(v.type,v.key,v.props,null,x.mode,L),L.ref=ti(x,h,v),L.return=x,x=L)}return a(x);case fr:e:{for(g=v.key;h!==null;){if(h.key===g)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(x,h.sibling),h=i(h,v.children||[]),h.return=x,x=h;break e}else{n(x,h);break}else t(x,h);h=h.sibling}h=_a(v,x.mode,L),h.return=x,x=h}return a(x);case gn:return g=v._init,N(x,h,g(v._payload),L)}if(ci(v))return y(x,h,v,L);if(Gr(v))return w(x,h,v,L);vs(x,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(x,h.sibling),h=i(h,v),h.return=x,x=h):(n(x,h),h=wa(v,x.mode,L),h.return=x,x=h),a(x)):n(x,h)}return N}var Or=hm(!0),gm=hm(!1),io=$n(null),so=null,jr=null,Nc=null;function Ec(){Nc=jr=so=null}function zc(e){var t=io.current;Ee(io),e._currentValue=t}function kl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Tr(e,t){so=e,Nc=jr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(lt=!0),e.firstContext=null)}function Rt(e){var t=e._currentValue;if(Nc!==e)if(e={context:e,memoizedValue:t,next:null},jr===null){if(so===null)throw Error(Q(308));jr=e,so.dependencies={lanes:0,firstContext:e}}else jr=jr.next=e;return t}var Kn=null;function Tc(e){Kn===null?Kn=[e]:Kn.push(e)}function xm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Tc(t)):(n.next=i.next,i.next=n),t.interleaved=n,un(e,r)}function un(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xn=!1;function Pc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ym(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function sn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function En(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ye&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,un(e,n)}return i=r.interleaved,i===null?(t.next=t,Tc(r)):(t.next=i.next,i.next=t),r.interleaved=t,un(e,n)}function Rs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gc(e,n)}}function pd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function oo(e,t,n,r){var i=e.updateQueue;xn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(o!==null){var p=i.baseState;a=0,d=u=c=null,l=o;do{var f=l.lane,m=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,w=l;switch(f=t,m=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){p=y.call(m,p,f);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,f=typeof y=="function"?y.call(m,p,f):y,f==null)break e;p=Re({},p,f);break e;case 2:xn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else m={eventTime:m,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=m,c=p):d=d.next=m,a|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);rr|=a,e.lanes=a,e.memoizedState=p}}function fd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(Q(191,i));i.call(r)}}}var Zi={},Gt=$n(Zi),Oi=$n(Zi),$i=$n(Zi);function Qn(e){if(e===Zi)throw Error(Q(174));return e}function Lc(e,t){switch(_e($i,t),_e(Oi,e),_e(Gt,Zi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:tl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=tl(t,e)}Ee(Gt),_e(Gt,t)}function $r(){Ee(Gt),Ee(Oi),Ee($i)}function vm(e){Qn($i.current);var t=Qn(Gt.current),n=tl(t,e.type);t!==n&&(_e(Oi,e),_e(Gt,n))}function Ac(e){Oi.current===e&&(Ee(Gt),Ee(Oi))}var Pe=$n(0);function ao(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xa=[];function Rc(){for(var e=0;e<xa.length;e++)xa[e]._workInProgressVersionPrimary=null;xa.length=0}var Is=pn.ReactCurrentDispatcher,ya=pn.ReactCurrentBatchConfig,nr=0,Ae=null,Ue=null,He=null,lo=!1,yi=!1,Di=0,nv=0;function Ge(){throw Error(Q(321))}function Ic(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ut(e[n],t[n]))return!1;return!0}function Mc(e,t,n,r,i,o){if(nr=o,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Is.current=e===null||e.memoizedState===null?ov:av,e=n(r,i),yi){o=0;do{if(yi=!1,Di=0,25<=o)throw Error(Q(301));o+=1,He=Ue=null,t.updateQueue=null,Is.current=lv,e=n(r,i)}while(yi)}if(Is.current=co,t=Ue!==null&&Ue.next!==null,nr=0,He=Ue=Ae=null,lo=!1,t)throw Error(Q(300));return e}function Oc(){var e=Di!==0;return Di=0,e}function Wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Ae.memoizedState=He=e:He=He.next=e,He}function It(){if(Ue===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=He===null?Ae.memoizedState:He.next;if(t!==null)He=t,Ue=e;else{if(e===null)throw Error(Q(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},He===null?Ae.memoizedState=He=e:He=He.next=e}return He}function Fi(e,t){return typeof t=="function"?t(e):t}function va(e){var t=It(),n=t.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=e;var r=Ue,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,c=null,u=o;do{var d=u.lane;if((nr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,a=r):c=c.next=p,Ae.lanes|=d,rr|=d}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=l,Ut(r,t.memoizedState)||(lt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ae.lanes|=o,rr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ba(e){var t=It(),n=t.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Ut(o,t.memoizedState)||(lt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function bm(){}function km(e,t){var n=Ae,r=It(),i=t(),o=!Ut(r.memoizedState,i);if(o&&(r.memoizedState=i,lt=!0),r=r.queue,$c(_m.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,Bi(9,wm.bind(null,n,r,i,t),void 0,null),qe===null)throw Error(Q(349));nr&30||jm(n,t,i)}return i}function jm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function wm(e,t,n,r){t.value=n,t.getSnapshot=r,Sm(t)&&Cm(e)}function _m(e,t,n){return n(function(){Sm(t)&&Cm(e)})}function Sm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ut(e,n)}catch{return!0}}function Cm(e){var t=un(e,1);t!==null&&Bt(t,e,1,-1)}function md(e){var t=Wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:e},t.queue=e,e=e.dispatch=sv.bind(null,Ae,e),[t.memoizedState,e]}function Bi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Nm(){return It().memoizedState}function Ms(e,t,n,r){var i=Wt();Ae.flags|=e,i.memoizedState=Bi(1|t,n,void 0,r===void 0?null:r)}function Lo(e,t,n,r){var i=It();r=r===void 0?null:r;var o=void 0;if(Ue!==null){var a=Ue.memoizedState;if(o=a.destroy,r!==null&&Ic(r,a.deps)){i.memoizedState=Bi(t,n,o,r);return}}Ae.flags|=e,i.memoizedState=Bi(1|t,n,o,r)}function hd(e,t){return Ms(8390656,8,e,t)}function $c(e,t){return Lo(2048,8,e,t)}function Em(e,t){return Lo(4,2,e,t)}function zm(e,t){return Lo(4,4,e,t)}function Tm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pm(e,t,n){return n=n!=null?n.concat([e]):null,Lo(4,4,Tm.bind(null,t,e),n)}function Dc(){}function Lm(e,t){var n=It();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ic(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Am(e,t){var n=It();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ic(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Rm(e,t,n){return nr&21?(Ut(n,t)||(n=Df(),Ae.lanes|=n,rr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,lt=!0),e.memoizedState=n)}function rv(e,t){var n=je;je=n!==0&&4>n?n:4,e(!0);var r=ya.transition;ya.transition={};try{e(!1),t()}finally{je=n,ya.transition=r}}function Im(){return It().memoizedState}function iv(e,t,n){var r=Tn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Mm(e))Om(t,n);else if(n=xm(e,t,n,r),n!==null){var i=rt();Bt(n,e,r,i),$m(n,t,r)}}function sv(e,t,n){var r=Tn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mm(e))Om(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Ut(l,a)){var c=t.interleaved;c===null?(i.next=i,Tc(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=xm(e,t,i,r),n!==null&&(i=rt(),Bt(n,e,r,i),$m(n,t,r))}}function Mm(e){var t=e.alternate;return e===Ae||t!==null&&t===Ae}function Om(e,t){yi=lo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $m(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gc(e,n)}}var co={readContext:Rt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},ov={readContext:Rt,useCallback:function(e,t){return Wt().memoizedState=[e,t===void 0?null:t],e},useContext:Rt,useEffect:hd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ms(4194308,4,Tm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ms(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ms(4,2,e,t)},useMemo:function(e,t){var n=Wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=iv.bind(null,Ae,e),[r.memoizedState,e]},useRef:function(e){var t=Wt();return e={current:e},t.memoizedState=e},useState:md,useDebugValue:Dc,useDeferredValue:function(e){return Wt().memoizedState=e},useTransition:function(){var e=md(!1),t=e[0];return e=rv.bind(null,e[1]),Wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ae,i=Wt();if(ze){if(n===void 0)throw Error(Q(407));n=n()}else{if(n=t(),qe===null)throw Error(Q(349));nr&30||jm(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,hd(_m.bind(null,r,o,e),[e]),r.flags|=2048,Bi(9,wm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Wt(),t=qe.identifierPrefix;if(ze){var n=rn,r=nn;n=(r&~(1<<32-Ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Di++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=nv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},av={readContext:Rt,useCallback:Lm,useContext:Rt,useEffect:$c,useImperativeHandle:Pm,useInsertionEffect:Em,useLayoutEffect:zm,useMemo:Am,useReducer:va,useRef:Nm,useState:function(){return va(Fi)},useDebugValue:Dc,useDeferredValue:function(e){var t=It();return Rm(t,Ue.memoizedState,e)},useTransition:function(){var e=va(Fi)[0],t=It().memoizedState;return[e,t]},useMutableSource:bm,useSyncExternalStore:km,useId:Im,unstable_isNewReconciler:!1},lv={readContext:Rt,useCallback:Lm,useContext:Rt,useEffect:$c,useImperativeHandle:Pm,useInsertionEffect:Em,useLayoutEffect:zm,useMemo:Am,useReducer:ba,useRef:Nm,useState:function(){return ba(Fi)},useDebugValue:Dc,useDeferredValue:function(e){var t=It();return Ue===null?t.memoizedState=e:Rm(t,Ue.memoizedState,e)},useTransition:function(){var e=ba(Fi)[0],t=It().memoizedState;return[e,t]},useMutableSource:bm,useSyncExternalStore:km,useId:Im,unstable_isNewReconciler:!1};function Ot(e,t){if(e&&e.defaultProps){t=Re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function jl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ao={isMounted:function(e){return(e=e._reactInternals)?ar(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=rt(),i=Tn(e),o=sn(r,i);o.payload=t,n!=null&&(o.callback=n),t=En(e,o,i),t!==null&&(Bt(t,e,i,r),Rs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=rt(),i=Tn(e),o=sn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=En(e,o,i),t!==null&&(Bt(t,e,i,r),Rs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=rt(),r=Tn(e),i=sn(n,r);i.tag=2,t!=null&&(i.callback=t),t=En(e,i,r),t!==null&&(Bt(t,e,r,n),Rs(t,e,r))}};function gd(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Ai(n,r)||!Ai(i,o):!0}function Dm(e,t,n){var r=!1,i=Rn,o=t.contextType;return typeof o=="object"&&o!==null?o=Rt(o):(i=ut(t)?er:Ze.current,r=t.contextTypes,o=(r=r!=null)?Ir(e,i):Rn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ao,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function xd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ao.enqueueReplaceState(t,t.state,null)}function wl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Pc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Rt(o):(o=ut(t)?er:Ze.current,i.context=Ir(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(jl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ao.enqueueReplaceState(i,i.state,null),oo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Dr(e,t){try{var n="",r=t;do n+=Mx(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ka(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function _l(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cv=typeof WeakMap=="function"?WeakMap:Map;function Fm(e,t,n){n=sn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){po||(po=!0,Rl=r),_l(e,t)},n}function Bm(e,t,n){n=sn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){_l(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){_l(e,t),typeof r!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function yd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new cv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=wv.bind(null,e,t,n),t.then(e,e))}function vd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=sn(-1,1),t.tag=2,En(n,t,1))),n.lanes|=1),e)}var uv=pn.ReactCurrentOwner,lt=!1;function nt(e,t,n,r){t.child=e===null?gm(t,null,n,r):Or(t,e.child,n,r)}function kd(e,t,n,r,i){n=n.render;var o=t.ref;return Tr(t,i),r=Mc(e,t,n,r,o,i),n=Oc(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dn(e,t,i)):(ze&&n&&_c(t),t.flags|=1,nt(e,t,r,i),t.child)}function jd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Jc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Um(e,t,o,r,i)):(e=Fs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ai,n(a,r)&&e.ref===t.ref)return dn(e,t,i)}return t.flags|=1,e=Pn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Um(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ai(o,r)&&e.ref===t.ref)if(lt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(lt=!0);else return t.lanes=e.lanes,dn(e,t,i)}return Sl(e,t,n,r,i)}function Vm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(_r,xt),xt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_e(_r,xt),xt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,_e(_r,xt),xt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,_e(_r,xt),xt|=r;return nt(e,t,i,n),t.child}function Wm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Sl(e,t,n,r,i){var o=ut(n)?er:Ze.current;return o=Ir(t,o),Tr(t,i),n=Mc(e,t,n,r,o,i),r=Oc(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dn(e,t,i)):(ze&&r&&_c(t),t.flags|=1,nt(e,t,n,i),t.child)}function wd(e,t,n,r,i){if(ut(n)){var o=!0;to(t)}else o=!1;if(Tr(t,i),t.stateNode===null)Os(e,t),Dm(t,n,r),wl(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Rt(u):(u=ut(n)?er:Ze.current,u=Ir(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&xd(t,a,r,u),xn=!1;var f=t.memoizedState;a.state=f,oo(t,r,a,i),c=t.memoizedState,l!==r||f!==c||ct.current||xn?(typeof d=="function"&&(jl(t,n,d,r),c=t.memoizedState),(l=xn||gd(t,n,l,r,f,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ym(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Ot(t.type,l),a.props=u,p=t.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Rt(c):(c=ut(n)?er:Ze.current,c=Ir(t,c));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||f!==c)&&xd(t,a,r,c),xn=!1,f=t.memoizedState,a.state=f,oo(t,r,a,i);var y=t.memoizedState;l!==p||f!==y||ct.current||xn?(typeof m=="function"&&(jl(t,n,m,r),y=t.memoizedState),(u=xn||gd(t,n,u,r,f,y,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Cl(e,t,n,r,o,i)}function Cl(e,t,n,r,i,o){Wm(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&ld(t,n,!1),dn(e,t,o);r=t.stateNode,uv.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Or(t,e.child,null,o),t.child=Or(t,null,l,o)):nt(e,t,l,o),t.memoizedState=r.state,i&&ld(t,n,!0),t.child}function Hm(e){var t=e.stateNode;t.pendingContext?ad(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ad(e,t.context,!1),Lc(e,t.containerInfo)}function _d(e,t,n,r,i){return Mr(),Cc(i),t.flags|=256,nt(e,t,n,r),t.child}var Nl={dehydrated:null,treeContext:null,retryLane:0};function El(e){return{baseLanes:e,cachePool:null,transitions:null}}function qm(e,t,n){var r=t.pendingProps,i=Pe.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),_e(Pe,i&1),e===null)return bl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Mo(a,r,0,null),e=Yn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=El(n),t.memoizedState=Nl,e):Fc(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return dv(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Pn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Pn(l,o):(o=Yn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?El(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Nl,r}return o=e.child,e=o.sibling,r=Pn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Fc(e,t){return t=Mo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function bs(e,t,n,r){return r!==null&&Cc(r),Or(t,e.child,null,n),e=Fc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dv(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=ka(Error(Q(422))),bs(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Mo({mode:"visible",children:r.children},i,0,null),o=Yn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Or(t,e.child,null,a),t.child.memoizedState=El(a),t.memoizedState=Nl,o);if(!(t.mode&1))return bs(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(Q(419)),r=ka(o,r,void 0),bs(e,t,a,r)}if(l=(a&e.childLanes)!==0,lt||l){if(r=qe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,un(e,i),Bt(r,e,i,-1))}return qc(),r=ka(Error(Q(421))),bs(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=_v.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,vt=Nn(i.nextSibling),kt=t,ze=!0,Dt=null,e!==null&&(Et[zt++]=nn,Et[zt++]=rn,Et[zt++]=tr,nn=e.id,rn=e.overflow,tr=t),t=Fc(t,r.children),t.flags|=4096,t)}function Sd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),kl(e.return,t,n)}function ja(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Jm(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(nt(e,t,r.children,n),r=Pe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sd(e,n,t);else if(e.tag===19)Sd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_e(Pe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ao(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ja(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ao(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ja(t,!0,n,null,o);break;case"together":ja(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Os(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(Q(153));if(t.child!==null){for(e=t.child,n=Pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pv(e,t,n){switch(t.tag){case 3:Hm(t),Mr();break;case 5:vm(t);break;case 1:ut(t.type)&&to(t);break;case 4:Lc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;_e(io,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(_e(Pe,Pe.current&1),t.flags|=128,null):n&t.child.childLanes?qm(e,t,n):(_e(Pe,Pe.current&1),e=dn(e,t,n),e!==null?e.sibling:null);_e(Pe,Pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Jm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(Pe,Pe.current),r)break;return null;case 22:case 23:return t.lanes=0,Vm(e,t,n)}return dn(e,t,n)}var Km,zl,Qm,Gm;Km=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zl=function(){};Qm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Qn(Gt.current);var o=null;switch(n){case"input":i=Ya(e,i),r=Ya(e,r),o=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),o=[];break;case"textarea":i=el(e,i),r=el(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zs)}nl(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ci.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ci.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Ne("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Gm=function(e,t,n,r){n!==r&&(t.flags|=4)};function ni(e,t){if(!ze)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function fv(e,t,n){var r=t.pendingProps;switch(Sc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return ut(t.type)&&eo(),Ye(t),null;case 3:return r=t.stateNode,$r(),Ee(ct),Ee(Ze),Rc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ys(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Dt!==null&&(Ol(Dt),Dt=null))),zl(e,t),Ye(t),null;case 5:Ac(t);var i=Qn($i.current);if(n=t.type,e!==null&&t.stateNode!=null)Qm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(Q(166));return Ye(t),null}if(e=Qn(Gt.current),ys(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[qt]=t,r[Mi]=o,e=(t.mode&1)!==0,n){case"dialog":Ne("cancel",r),Ne("close",r);break;case"iframe":case"object":case"embed":Ne("load",r);break;case"video":case"audio":for(i=0;i<di.length;i++)Ne(di[i],r);break;case"source":Ne("error",r);break;case"img":case"image":case"link":Ne("error",r),Ne("load",r);break;case"details":Ne("toggle",r);break;case"input":Ru(r,o),Ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ne("invalid",r);break;case"textarea":Mu(r,o),Ne("invalid",r)}nl(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&xs(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&xs(r.textContent,l,e),i=["children",""+l]):Ci.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Ne("scroll",r)}switch(n){case"input":cs(r),Iu(r,o,!0);break;case"textarea":cs(r),Ou(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Zs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_f(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[qt]=t,e[Mi]=r,Km(e,t,!1,!1),t.stateNode=e;e:{switch(a=rl(n,r),n){case"dialog":Ne("cancel",e),Ne("close",e),i=r;break;case"iframe":case"object":case"embed":Ne("load",e),i=r;break;case"video":case"audio":for(i=0;i<di.length;i++)Ne(di[i],e);i=r;break;case"source":Ne("error",e),i=r;break;case"img":case"image":case"link":Ne("error",e),Ne("load",e),i=r;break;case"details":Ne("toggle",e),i=r;break;case"input":Ru(e,r),i=Ya(e,r),Ne("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),Ne("invalid",e);break;case"textarea":Mu(e,r),i=el(e,r),Ne("invalid",e);break;default:i=r}nl(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Nf(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Sf(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ni(e,c):typeof c=="number"&&Ni(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ci.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Ne("scroll",e):c!=null&&uc(e,o,c,a))}switch(n){case"input":cs(e),Iu(e,r,!1);break;case"textarea":cs(e),Ou(e);break;case"option":r.value!=null&&e.setAttribute("value",""+An(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Cr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Cr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Zs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ye(t),null;case 6:if(e&&t.stateNode!=null)Gm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(Q(166));if(n=Qn($i.current),Qn(Gt.current),ys(t)){if(r=t.stateNode,n=t.memoizedProps,r[qt]=t,(o=r.nodeValue!==n)&&(e=kt,e!==null))switch(e.tag){case 3:xs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xs(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qt]=t,t.stateNode=r}return Ye(t),null;case 13:if(Ee(Pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ze&&vt!==null&&t.mode&1&&!(t.flags&128))mm(),Mr(),t.flags|=98560,o=!1;else if(o=ys(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(Q(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Q(317));o[qt]=t}else Mr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ye(t),o=!1}else Dt!==null&&(Ol(Dt),Dt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Pe.current&1?Ve===0&&(Ve=3):qc())),t.updateQueue!==null&&(t.flags|=4),Ye(t),null);case 4:return $r(),zl(e,t),e===null&&Ri(t.stateNode.containerInfo),Ye(t),null;case 10:return zc(t.type._context),Ye(t),null;case 17:return ut(t.type)&&eo(),Ye(t),null;case 19:if(Ee(Pe),o=t.memoizedState,o===null)return Ye(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)ni(o,!1);else{if(Ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ao(e),a!==null){for(t.flags|=128,ni(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _e(Pe,Pe.current&1|2),t.child}e=e.sibling}o.tail!==null&&Me()>Fr&&(t.flags|=128,r=!0,ni(o,!1),t.lanes=4194304)}else{if(!r)if(e=ao(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ni(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ze)return Ye(t),null}else 2*Me()-o.renderingStartTime>Fr&&n!==1073741824&&(t.flags|=128,r=!0,ni(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Me(),t.sibling=null,n=Pe.current,_e(Pe,r?n&1|2:n&1),t):(Ye(t),null);case 22:case 23:return Hc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xt&1073741824&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),null;case 24:return null;case 25:return null}throw Error(Q(156,t.tag))}function mv(e,t){switch(Sc(t),t.tag){case 1:return ut(t.type)&&eo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $r(),Ee(ct),Ee(Ze),Rc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ac(t),null;case 13:if(Ee(Pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Q(340));Mr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ee(Pe),null;case 4:return $r(),null;case 10:return zc(t.type._context),null;case 22:case 23:return Hc(),null;case 24:return null;default:return null}}var ks=!1,Xe=!1,hv=typeof WeakSet=="function"?WeakSet:Set,re=null;function wr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(e,t,r)}else n.current=null}function Tl(e,t,n){try{n()}catch(r){Ie(e,t,r)}}var Cd=!1;function gv(e,t){if(fl=Gs,e=tm(),wc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var m;p!==n||i!==0&&p.nodeType!==3||(l=a+i),p!==o||r!==0&&p.nodeType!==3||(c=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===e)break t;if(f===n&&++u===i&&(l=a),f===o&&++d===r&&(c=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ml={focusedElem:e,selectionRange:n},Gs=!1,re=t;re!==null;)if(t=re,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,re=e;else for(;re!==null;){t=re;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,N=y.memoizedState,x=t.stateNode,h=x.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ot(t.type,w),N);x.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Q(163))}}catch(L){Ie(t,t.return,L)}if(e=t.sibling,e!==null){e.return=t.return,re=e;break}re=t.return}return y=Cd,Cd=!1,y}function vi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Tl(t,n,o)}i=i.next}while(i!==r)}}function Ro(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Pl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ym(e){var t=e.alternate;t!==null&&(e.alternate=null,Ym(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qt],delete t[Mi],delete t[xl],delete t[Xy],delete t[Zy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xm(e){return e.tag===5||e.tag===3||e.tag===4}function Nd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ll(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zs));else if(r!==4&&(e=e.child,e!==null))for(Ll(e,t,n),e=e.sibling;e!==null;)Ll(e,t,n),e=e.sibling}function Al(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Al(e,t,n),e=e.sibling;e!==null;)Al(e,t,n),e=e.sibling}var Je=null,$t=!1;function mn(e,t,n){for(n=n.child;n!==null;)Zm(e,t,n),n=n.sibling}function Zm(e,t,n){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(Co,n)}catch{}switch(n.tag){case 5:Xe||wr(n,t);case 6:var r=Je,i=$t;Je=null,mn(e,t,n),Je=r,$t=i,Je!==null&&($t?(e=Je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&($t?(e=Je,n=n.stateNode,e.nodeType===8?ha(e.parentNode,n):e.nodeType===1&&ha(e,n),Pi(e)):ha(Je,n.stateNode));break;case 4:r=Je,i=$t,Je=n.stateNode.containerInfo,$t=!0,mn(e,t,n),Je=r,$t=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Tl(n,t,a),i=i.next}while(i!==r)}mn(e,t,n);break;case 1:if(!Xe&&(wr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ie(n,t,l)}mn(e,t,n);break;case 21:mn(e,t,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,mn(e,t,n),Xe=r):mn(e,t,n);break;default:mn(e,t,n)}}function Ed(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hv),t.forEach(function(r){var i=Sv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Je=l.stateNode,$t=!1;break e;case 3:Je=l.stateNode.containerInfo,$t=!0;break e;case 4:Je=l.stateNode.containerInfo,$t=!0;break e}l=l.return}if(Je===null)throw Error(Q(160));Zm(o,a,i),Je=null,$t=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Ie(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)eh(t,e),t=t.sibling}function eh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mt(t,e),Vt(e),r&4){try{vi(3,e,e.return),Ro(3,e)}catch(w){Ie(e,e.return,w)}try{vi(5,e,e.return)}catch(w){Ie(e,e.return,w)}}break;case 1:Mt(t,e),Vt(e),r&512&&n!==null&&wr(n,n.return);break;case 5:if(Mt(t,e),Vt(e),r&512&&n!==null&&wr(n,n.return),e.flags&32){var i=e.stateNode;try{Ni(i,"")}catch(w){Ie(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&jf(i,o),rl(l,a);var u=rl(l,o);for(a=0;a<c.length;a+=2){var d=c[a],p=c[a+1];d==="style"?Nf(i,p):d==="dangerouslySetInnerHTML"?Sf(i,p):d==="children"?Ni(i,p):uc(i,d,p,u)}switch(l){case"input":Xa(i,o);break;case"textarea":wf(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Cr(i,!!o.multiple,m,!1):f!==!!o.multiple&&(o.defaultValue!=null?Cr(i,!!o.multiple,o.defaultValue,!0):Cr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Mi]=o}catch(w){Ie(e,e.return,w)}}break;case 6:if(Mt(t,e),Vt(e),r&4){if(e.stateNode===null)throw Error(Q(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){Ie(e,e.return,w)}}break;case 3:if(Mt(t,e),Vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pi(t.containerInfo)}catch(w){Ie(e,e.return,w)}break;case 4:Mt(t,e),Vt(e);break;case 13:Mt(t,e),Vt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Vc=Me())),r&4&&Ed(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Xe=(u=Xe)||d,Mt(t,e),Xe=u):Mt(t,e),Vt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(re=e,d=e.child;d!==null;){for(p=re=d;re!==null;){switch(f=re,m=f.child,f.tag){case 0:case 11:case 14:case 15:vi(4,f,f.return);break;case 1:wr(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){Ie(r,n,w)}}break;case 5:wr(f,f.return);break;case 22:if(f.memoizedState!==null){Td(p);continue}}m!==null?(m.return=f,re=m):Td(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Cf("display",a))}catch(w){Ie(e,e.return,w)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(w){Ie(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Mt(t,e),Vt(e),r&4&&Ed(e);break;case 21:break;default:Mt(t,e),Vt(e)}}function Vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xm(n)){var r=n;break e}n=n.return}throw Error(Q(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ni(i,""),r.flags&=-33);var o=Nd(e);Al(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Nd(e);Ll(e,l,a);break;default:throw Error(Q(161))}}catch(c){Ie(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xv(e,t,n){re=e,th(e)}function th(e,t,n){for(var r=(e.mode&1)!==0;re!==null;){var i=re,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||ks;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Xe;l=ks;var u=Xe;if(ks=a,(Xe=c)&&!u)for(re=i;re!==null;)a=re,c=a.child,a.tag===22&&a.memoizedState!==null?Pd(i):c!==null?(c.return=a,re=c):Pd(i);for(;o!==null;)re=o,th(o),o=o.sibling;re=i,ks=l,Xe=u}zd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,re=o):zd(e)}}function zd(e){for(;re!==null;){var t=re;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Xe||Ro(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ot(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&fd(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}fd(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Pi(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Q(163))}Xe||t.flags&512&&Pl(t)}catch(f){Ie(t,t.return,f)}}if(t===e){re=null;break}if(n=t.sibling,n!==null){n.return=t.return,re=n;break}re=t.return}}function Td(e){for(;re!==null;){var t=re;if(t===e){re=null;break}var n=t.sibling;if(n!==null){n.return=t.return,re=n;break}re=t.return}}function Pd(e){for(;re!==null;){var t=re;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ro(4,t)}catch(c){Ie(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Ie(t,i,c)}}var o=t.return;try{Pl(t)}catch(c){Ie(t,o,c)}break;case 5:var a=t.return;try{Pl(t)}catch(c){Ie(t,a,c)}}}catch(c){Ie(t,t.return,c)}if(t===e){re=null;break}var l=t.sibling;if(l!==null){l.return=t.return,re=l;break}re=t.return}}var yv=Math.ceil,uo=pn.ReactCurrentDispatcher,Bc=pn.ReactCurrentOwner,At=pn.ReactCurrentBatchConfig,ye=0,qe=null,De=null,Ke=0,xt=0,_r=$n(0),Ve=0,Ui=null,rr=0,Io=0,Uc=0,bi=null,at=null,Vc=0,Fr=1/0,en=null,po=!1,Rl=null,zn=null,js=!1,kn=null,fo=0,ki=0,Il=null,$s=-1,Ds=0;function rt(){return ye&6?Me():$s!==-1?$s:$s=Me()}function Tn(e){return e.mode&1?ye&2&&Ke!==0?Ke&-Ke:tv.transition!==null?(Ds===0&&(Ds=Df()),Ds):(e=je,e!==0||(e=window.event,e=e===void 0?16:qf(e.type)),e):1}function Bt(e,t,n,r){if(50<ki)throw ki=0,Il=null,Error(Q(185));Gi(e,n,r),(!(ye&2)||e!==qe)&&(e===qe&&(!(ye&2)&&(Io|=n),Ve===4&&vn(e,Ke)),dt(e,r),n===1&&ye===0&&!(t.mode&1)&&(Fr=Me()+500,Po&&Dn()))}function dt(e,t){var n=e.callbackNode;ty(e,t);var r=Qs(e,e===qe?Ke:0);if(r===0)n!==null&&Fu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Fu(n),t===1)e.tag===0?ev(Ld.bind(null,e)):dm(Ld.bind(null,e)),Gy(function(){!(ye&6)&&Dn()}),n=null;else{switch(Ff(r)){case 1:n=hc;break;case 4:n=Of;break;case 16:n=Ks;break;case 536870912:n=$f;break;default:n=Ks}n=ch(n,nh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function nh(e,t){if($s=-1,Ds=0,ye&6)throw Error(Q(327));var n=e.callbackNode;if(Pr()&&e.callbackNode!==n)return null;var r=Qs(e,e===qe?Ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=mo(e,r);else{t=r;var i=ye;ye|=2;var o=ih();(qe!==e||Ke!==t)&&(en=null,Fr=Me()+500,Gn(e,t));do try{kv();break}catch(l){rh(e,l)}while(!0);Ec(),uo.current=o,ye=i,De!==null?t=0:(qe=null,Ke=0,t=Ve)}if(t!==0){if(t===2&&(i=ll(e),i!==0&&(r=i,t=Ml(e,i))),t===1)throw n=Ui,Gn(e,0),vn(e,r),dt(e,Me()),n;if(t===6)vn(e,r);else{if(i=e.current.alternate,!(r&30)&&!vv(i)&&(t=mo(e,r),t===2&&(o=ll(e),o!==0&&(r=o,t=Ml(e,o))),t===1))throw n=Ui,Gn(e,0),vn(e,r),dt(e,Me()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(Q(345));case 2:Hn(e,at,en);break;case 3:if(vn(e,r),(r&130023424)===r&&(t=Vc+500-Me(),10<t)){if(Qs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){rt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=gl(Hn.bind(null,e,at,en),t);break}Hn(e,at,en);break;case 4:if(vn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Ft(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yv(r/1960))-r,10<r){e.timeoutHandle=gl(Hn.bind(null,e,at,en),r);break}Hn(e,at,en);break;case 5:Hn(e,at,en);break;default:throw Error(Q(329))}}}return dt(e,Me()),e.callbackNode===n?nh.bind(null,e):null}function Ml(e,t){var n=bi;return e.current.memoizedState.isDehydrated&&(Gn(e,t).flags|=256),e=mo(e,t),e!==2&&(t=at,at=n,t!==null&&Ol(t)),e}function Ol(e){at===null?at=e:at.push.apply(at,e)}function vv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ut(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vn(e,t){for(t&=~Uc,t&=~Io,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ft(t),r=1<<n;e[n]=-1,t&=~r}}function Ld(e){if(ye&6)throw Error(Q(327));Pr();var t=Qs(e,0);if(!(t&1))return dt(e,Me()),null;var n=mo(e,t);if(e.tag!==0&&n===2){var r=ll(e);r!==0&&(t=r,n=Ml(e,r))}if(n===1)throw n=Ui,Gn(e,0),vn(e,t),dt(e,Me()),n;if(n===6)throw Error(Q(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Hn(e,at,en),dt(e,Me()),null}function Wc(e,t){var n=ye;ye|=1;try{return e(t)}finally{ye=n,ye===0&&(Fr=Me()+500,Po&&Dn())}}function ir(e){kn!==null&&kn.tag===0&&!(ye&6)&&Pr();var t=ye;ye|=1;var n=At.transition,r=je;try{if(At.transition=null,je=1,e)return e()}finally{je=r,At.transition=n,ye=t,!(ye&6)&&Dn()}}function Hc(){xt=_r.current,Ee(_r)}function Gn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Qy(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(Sc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&eo();break;case 3:$r(),Ee(ct),Ee(Ze),Rc();break;case 5:Ac(r);break;case 4:$r();break;case 13:Ee(Pe);break;case 19:Ee(Pe);break;case 10:zc(r.type._context);break;case 22:case 23:Hc()}n=n.return}if(qe=e,De=e=Pn(e.current,null),Ke=xt=t,Ve=0,Ui=null,Uc=Io=rr=0,at=bi=null,Kn!==null){for(t=0;t<Kn.length;t++)if(n=Kn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Kn=null}return e}function rh(e,t){do{var n=De;try{if(Ec(),Is.current=co,lo){for(var r=Ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}lo=!1}if(nr=0,He=Ue=Ae=null,yi=!1,Di=0,Bc.current=null,n===null||n.return===null){Ve=1,Ui=t,De=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=Ke,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=vd(a);if(m!==null){m.flags&=-257,bd(m,a,l,o,t),m.mode&1&&yd(o,u,t),t=m,c=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(c),t.updateQueue=w}else y.add(c);break e}else{if(!(t&1)){yd(o,u,t),qc();break e}c=Error(Q(426))}}else if(ze&&l.mode&1){var N=vd(a);if(N!==null){!(N.flags&65536)&&(N.flags|=256),bd(N,a,l,o,t),Cc(Dr(c,l));break e}}o=c=Dr(c,l),Ve!==4&&(Ve=2),bi===null?bi=[o]:bi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var x=Fm(o,c,t);pd(o,x);break e;case 1:l=c;var h=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(zn===null||!zn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var L=Bm(o,l,t);pd(o,L);break e}}o=o.return}while(o!==null)}oh(n)}catch(S){t=S,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function ih(){var e=uo.current;return uo.current=co,e===null?co:e}function qc(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),qe===null||!(rr&268435455)&&!(Io&268435455)||vn(qe,Ke)}function mo(e,t){var n=ye;ye|=2;var r=ih();(qe!==e||Ke!==t)&&(en=null,Gn(e,t));do try{bv();break}catch(i){rh(e,i)}while(!0);if(Ec(),ye=n,uo.current=r,De!==null)throw Error(Q(261));return qe=null,Ke=0,Ve}function bv(){for(;De!==null;)sh(De)}function kv(){for(;De!==null&&!qx();)sh(De)}function sh(e){var t=lh(e.alternate,e,xt);e.memoizedProps=e.pendingProps,t===null?oh(e):De=t,Bc.current=null}function oh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mv(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,De=null;return}}else if(n=fv(n,t,xt),n!==null){De=n;return}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);Ve===0&&(Ve=5)}function Hn(e,t,n){var r=je,i=At.transition;try{At.transition=null,je=1,jv(e,t,n,r)}finally{At.transition=i,je=r}return null}function jv(e,t,n,r){do Pr();while(kn!==null);if(ye&6)throw Error(Q(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(Q(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ny(e,o),e===qe&&(De=qe=null,Ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||js||(js=!0,ch(Ks,function(){return Pr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=At.transition,At.transition=null;var a=je;je=1;var l=ye;ye|=4,Bc.current=null,gv(e,n),eh(n,e),Uy(ml),Gs=!!fl,ml=fl=null,e.current=n,xv(n),Jx(),ye=l,je=a,At.transition=o}else e.current=n;if(js&&(js=!1,kn=e,fo=i),o=e.pendingLanes,o===0&&(zn=null),Gx(n.stateNode),dt(e,Me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(po)throw po=!1,e=Rl,Rl=null,e;return fo&1&&e.tag!==0&&Pr(),o=e.pendingLanes,o&1?e===Il?ki++:(ki=0,Il=e):ki=0,Dn(),null}function Pr(){if(kn!==null){var e=Ff(fo),t=At.transition,n=je;try{if(At.transition=null,je=16>e?16:e,kn===null)var r=!1;else{if(e=kn,kn=null,fo=0,ye&6)throw Error(Q(331));var i=ye;for(ye|=4,re=e.current;re!==null;){var o=re,a=o.child;if(re.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(re=u;re!==null;){var d=re;switch(d.tag){case 0:case 11:case 15:vi(8,d,o)}var p=d.child;if(p!==null)p.return=d,re=p;else for(;re!==null;){d=re;var f=d.sibling,m=d.return;if(Ym(d),d===u){re=null;break}if(f!==null){f.return=m,re=f;break}re=m}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var N=w.sibling;w.sibling=null,w=N}while(w!==null)}}re=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,re=a;else e:for(;re!==null;){if(o=re,o.flags&2048)switch(o.tag){case 0:case 11:case 15:vi(9,o,o.return)}var x=o.sibling;if(x!==null){x.return=o.return,re=x;break e}re=o.return}}var h=e.current;for(re=h;re!==null;){a=re;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,re=v;else e:for(a=h;re!==null;){if(l=re,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ro(9,l)}}catch(S){Ie(l,l.return,S)}if(l===a){re=null;break e}var L=l.sibling;if(L!==null){L.return=l.return,re=L;break e}re=l.return}}if(ye=i,Dn(),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(Co,e)}catch{}r=!0}return r}finally{je=n,At.transition=t}}return!1}function Ad(e,t,n){t=Dr(n,t),t=Fm(e,t,1),e=En(e,t,1),t=rt(),e!==null&&(Gi(e,1,t),dt(e,t))}function Ie(e,t,n){if(e.tag===3)Ad(e,e,n);else for(;t!==null;){if(t.tag===3){Ad(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zn===null||!zn.has(r))){e=Dr(n,e),e=Bm(t,e,1),t=En(t,e,1),e=rt(),t!==null&&(Gi(t,1,e),dt(t,e));break}}t=t.return}}function wv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=rt(),e.pingedLanes|=e.suspendedLanes&n,qe===e&&(Ke&n)===n&&(Ve===4||Ve===3&&(Ke&130023424)===Ke&&500>Me()-Vc?Gn(e,0):Uc|=n),dt(e,t)}function ah(e,t){t===0&&(e.mode&1?(t=ps,ps<<=1,!(ps&130023424)&&(ps=4194304)):t=1);var n=rt();e=un(e,t),e!==null&&(Gi(e,t,n),dt(e,n))}function _v(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ah(e,n)}function Sv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(Q(314))}r!==null&&r.delete(t),ah(e,n)}var lh;lh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ct.current)lt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return lt=!1,pv(e,t,n);lt=!!(e.flags&131072)}else lt=!1,ze&&t.flags&1048576&&pm(t,ro,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Os(e,t),e=t.pendingProps;var i=Ir(t,Ze.current);Tr(t,n),i=Mc(null,t,r,e,i,n);var o=Oc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ut(r)?(o=!0,to(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Pc(t),i.updater=Ao,t.stateNode=i,i._reactInternals=t,wl(t,r,e,n),t=Cl(null,t,r,!0,o,n)):(t.tag=0,ze&&o&&_c(t),nt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Os(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Nv(r),e=Ot(r,e),i){case 0:t=Sl(null,t,r,e,n);break e;case 1:t=wd(null,t,r,e,n);break e;case 11:t=kd(null,t,r,e,n);break e;case 14:t=jd(null,t,r,Ot(r.type,e),n);break e}throw Error(Q(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),Sl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),wd(e,t,r,i,n);case 3:e:{if(Hm(t),e===null)throw Error(Q(387));r=t.pendingProps,o=t.memoizedState,i=o.element,ym(e,t),oo(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Dr(Error(Q(423)),t),t=_d(e,t,r,n,i);break e}else if(r!==i){i=Dr(Error(Q(424)),t),t=_d(e,t,r,n,i);break e}else for(vt=Nn(t.stateNode.containerInfo.firstChild),kt=t,ze=!0,Dt=null,n=gm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mr(),r===i){t=dn(e,t,n);break e}nt(e,t,r,n)}t=t.child}return t;case 5:return vm(t),e===null&&bl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,hl(r,i)?a=null:o!==null&&hl(r,o)&&(t.flags|=32),Wm(e,t),nt(e,t,a,n),t.child;case 6:return e===null&&bl(t),null;case 13:return qm(e,t,n);case 4:return Lc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Or(t,null,r,n):nt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),kd(e,t,r,i,n);case 7:return nt(e,t,t.pendingProps,n),t.child;case 8:return nt(e,t,t.pendingProps.children,n),t.child;case 12:return nt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,_e(io,r._currentValue),r._currentValue=a,o!==null)if(Ut(o.value,a)){if(o.children===i.children&&!ct.current){t=dn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=sn(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),kl(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(Q(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),kl(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}nt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Tr(t,n),i=Rt(i),r=r(i),t.flags|=1,nt(e,t,r,n),t.child;case 14:return r=t.type,i=Ot(r,t.pendingProps),i=Ot(r.type,i),jd(e,t,r,i,n);case 15:return Um(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),Os(e,t),t.tag=1,ut(r)?(e=!0,to(t)):e=!1,Tr(t,n),Dm(t,r,i),wl(t,r,i,n),Cl(null,t,r,!0,e,n);case 19:return Jm(e,t,n);case 22:return Vm(e,t,n)}throw Error(Q(156,t.tag))};function ch(e,t){return Mf(e,t)}function Cv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(e,t,n,r){return new Cv(e,t,n,r)}function Jc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nv(e){if(typeof e=="function")return Jc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pc)return 11;if(e===fc)return 14}return 2}function Pn(e,t){var n=e.alternate;return n===null?(n=Pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fs(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Jc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case mr:return Yn(n.children,i,o,t);case dc:a=8,i|=8;break;case Ja:return e=Pt(12,n,t,i|2),e.elementType=Ja,e.lanes=o,e;case Ka:return e=Pt(13,n,t,i),e.elementType=Ka,e.lanes=o,e;case Qa:return e=Pt(19,n,t,i),e.elementType=Qa,e.lanes=o,e;case vf:return Mo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xf:a=10;break e;case yf:a=9;break e;case pc:a=11;break e;case fc:a=14;break e;case gn:a=16,r=null;break e}throw Error(Q(130,e==null?e:typeof e,""))}return t=Pt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Yn(e,t,n,r){return e=Pt(7,e,r,t),e.lanes=n,e}function Mo(e,t,n,r){return e=Pt(22,e,r,t),e.elementType=vf,e.lanes=n,e.stateNode={isHidden:!1},e}function wa(e,t,n){return e=Pt(6,e,null,t),e.lanes=n,e}function _a(e,t,n){return t=Pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ev(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ia(0),this.expirationTimes=ia(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ia(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Kc(e,t,n,r,i,o,a,l,c){return e=new Ev(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Pt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pc(o),e}function zv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function uh(e){if(!e)return Rn;e=e._reactInternals;e:{if(ar(e)!==e||e.tag!==1)throw Error(Q(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ut(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(Q(171))}if(e.tag===1){var n=e.type;if(ut(n))return um(e,n,t)}return t}function dh(e,t,n,r,i,o,a,l,c){return e=Kc(n,r,!0,e,i,o,a,l,c),e.context=uh(null),n=e.current,r=rt(),i=Tn(n),o=sn(r,i),o.callback=t??null,En(n,o,i),e.current.lanes=i,Gi(e,i,r),dt(e,r),e}function Oo(e,t,n,r){var i=t.current,o=rt(),a=Tn(i);return n=uh(n),t.context===null?t.context=n:t.pendingContext=n,t=sn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=En(i,t,a),e!==null&&(Bt(e,i,a,o),Rs(e,i,a)),a}function ho(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qc(e,t){Rd(e,t),(e=e.alternate)&&Rd(e,t)}function Tv(){return null}var ph=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gc(e){this._internalRoot=e}$o.prototype.render=Gc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Q(409));Oo(e,t,null,null)};$o.prototype.unmount=Gc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ir(function(){Oo(null,e,null,null)}),t[cn]=null}};function $o(e){this._internalRoot=e}$o.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yn.length&&t!==0&&t<yn[n].priority;n++);yn.splice(n,0,e),n===0&&Hf(e)}};function Yc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Do(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Id(){}function Pv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ho(a);o.call(u)}}var a=dh(t,r,e,0,null,!1,!1,"",Id);return e._reactRootContainer=a,e[cn]=a.current,Ri(e.nodeType===8?e.parentNode:e),ir(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=ho(c);l.call(u)}}var c=Kc(e,0,!1,null,null,!1,!1,"",Id);return e._reactRootContainer=c,e[cn]=c.current,Ri(e.nodeType===8?e.parentNode:e),ir(function(){Oo(t,c,n,r)}),c}function Fo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=ho(a);l.call(c)}}Oo(t,a,e,i)}else a=Pv(n,t,e,i,r);return ho(a)}Bf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ui(t.pendingLanes);n!==0&&(gc(t,n|1),dt(t,Me()),!(ye&6)&&(Fr=Me()+500,Dn()))}break;case 13:ir(function(){var r=un(e,1);if(r!==null){var i=rt();Bt(r,e,1,i)}}),Qc(e,1)}};xc=function(e){if(e.tag===13){var t=un(e,134217728);if(t!==null){var n=rt();Bt(t,e,134217728,n)}Qc(e,134217728)}};Uf=function(e){if(e.tag===13){var t=Tn(e),n=un(e,t);if(n!==null){var r=rt();Bt(n,e,t,r)}Qc(e,t)}};Vf=function(){return je};Wf=function(e,t){var n=je;try{return je=e,t()}finally{je=n}};sl=function(e,t,n){switch(t){case"input":if(Xa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=To(r);if(!i)throw Error(Q(90));kf(r),Xa(r,i)}}}break;case"textarea":wf(e,n);break;case"select":t=n.value,t!=null&&Cr(e,!!n.multiple,t,!1)}};Tf=Wc;Pf=ir;var Lv={usingClientEntryPoint:!1,Events:[Xi,yr,To,Ef,zf,Wc]},ri={findFiberByHostInstance:Jn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Av={bundleType:ri.bundleType,version:ri.version,rendererPackageName:ri.rendererPackageName,rendererConfig:ri.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rf(e),e===null?null:e.stateNode},findFiberByHostInstance:ri.findFiberByHostInstance||Tv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ws=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ws.isDisabled&&ws.supportsFiber)try{Co=ws.inject(Av),Qt=ws}catch{}}wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lv;wt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yc(t))throw Error(Q(200));return zv(e,t,null,n)};wt.createRoot=function(e,t){if(!Yc(e))throw Error(Q(299));var n=!1,r="",i=ph;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Kc(e,1,!1,null,null,n,!1,r,i),e[cn]=t.current,Ri(e.nodeType===8?e.parentNode:e),new Gc(t)};wt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Q(188)):(e=Object.keys(e).join(","),Error(Q(268,e)));return e=Rf(t),e=e===null?null:e.stateNode,e};wt.flushSync=function(e){return ir(e)};wt.hydrate=function(e,t,n){if(!Do(t))throw Error(Q(200));return Fo(null,e,t,!0,n)};wt.hydrateRoot=function(e,t,n){if(!Yc(e))throw Error(Q(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=ph;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=dh(t,null,e,1,n??null,i,!1,o,a),e[cn]=t.current,Ri(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new $o(t)};wt.render=function(e,t,n){if(!Do(t))throw Error(Q(200));return Fo(null,e,t,!1,n)};wt.unmountComponentAtNode=function(e){if(!Do(e))throw Error(Q(40));return e._reactRootContainer?(ir(function(){Fo(null,null,e,!1,function(){e._reactRootContainer=null,e[cn]=null})}),!0):!1};wt.unstable_batchedUpdates=Wc;wt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Do(n))throw Error(Q(200));if(e==null||e._reactInternals===void 0)throw Error(Q(38));return Fo(e,t,n,!1,r)};wt.version="18.3.1-next-f1338f8080-20240426";function fh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fh)}catch(e){console.error(e)}}fh(),ff.exports=wt;var Rv=ff.exports,Md=Rv;Ha.createRoot=Md.createRoot,Ha.hydrateRoot=Md.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vi(){return Vi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vi.apply(this,arguments)}var jn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(jn||(jn={}));const Od="popstate";function Iv(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return $l("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:mh(i)}return Ov(t,n,null,e)}function Fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Xc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Mv(){return Math.random().toString(36).substr(2,8)}function $d(e,t){return{usr:e.state,key:e.key,idx:t}}function $l(e,t,n,r){return n===void 0&&(n=null),Vi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Jr(t):t,{state:n,key:t&&t.key||r||Mv()})}function mh(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Jr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ov(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=jn.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(Vi({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function p(){l=jn.Pop;let N=d(),x=N==null?null:N-u;u=N,c&&c({action:l,location:w.location,delta:x})}function f(N,x){l=jn.Push;let h=$l(w.location,N,x);u=d()+1;let v=$d(h,u),L=w.createHref(h);try{a.pushState(v,"",L)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(L)}o&&c&&c({action:l,location:w.location,delta:1})}function m(N,x){l=jn.Replace;let h=$l(w.location,N,x);u=d();let v=$d(h,u),L=w.createHref(h);a.replaceState(v,"",L),o&&c&&c({action:l,location:w.location,delta:0})}function y(N){let x=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof N=="string"?N:mh(N);return h=h.replace(/ $/,"%20"),Fe(x,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,x)}let w={get action(){return l},get location(){return e(i,a)},listen(N){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Od,p),c=N,()=>{i.removeEventListener(Od,p),c=null}},createHref(N){return t(i,N)},createURL:y,encodeLocation(N){let x=y(N);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:f,replace:m,go(N){return a.go(N)}};return w}var Dd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Dd||(Dd={}));function $v(e,t,n){return n===void 0&&(n="/"),Dv(e,t,n)}function Dv(e,t,n,r){let i=typeof t=="string"?Jr(t):t,o=xh(i.pathname||"/",n);if(o==null)return null;let a=hh(e);Fv(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=Xv(o);l=Qv(a[c],u)}return l}function hh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(Fe(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Xn([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(Fe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),hh(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Jv(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let c of gh(o.path))i(o,a,c)}),t}function gh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=gh(r.join("/")),l=[];return l.push(...a.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Fv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Kv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Bv=/^:[\w-]+$/,Uv=3,Vv=2,Wv=1,Hv=10,qv=-2,Fd=e=>e==="*";function Jv(e,t){let n=e.split("/"),r=n.length;return n.some(Fd)&&(r+=qv),t&&(r+=Vv),n.filter(i=>!Fd(i)).reduce((i,o)=>i+(Bv.test(o)?Uv:o===""?Wv:Hv),r)}function Kv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Qv(e,t,n){let{routesMeta:r}=e,i={},o="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",p=Gv({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),f=c.route;if(!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:Xn([o,p.pathname]),pathnameBase:r1(Xn([o,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(o=Xn([o,p.pathnameBase]))}return a}function Gv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Yv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:f,isOptional:m}=d;if(f==="*"){let w=l[p]||"";a=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const y=l[p];return m&&!y?u[f]=void 0:u[f]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function Yv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Xc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Xv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Xc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function xh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Zv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,e1=e=>Zv.test(e);function t1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Jr(e):e,o;if(n)if(e1(n))o=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),Xc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?o=Bd(n.substring(1),"/"):o=Bd(n,t)}else o=t;return{pathname:o,search:i1(r),hash:s1(i)}}function Bd(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Sa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function n1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function yh(e,t){let n=n1(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function vh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Jr(e):(i=Vi({},e),Fe(!i.pathname||!i.pathname.includes("?"),Sa("?","pathname","search",i)),Fe(!i.pathname||!i.pathname.includes("#"),Sa("#","pathname","hash",i)),Fe(!i.search||!i.search.includes("#"),Sa("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}l=p>=0?t[p]:"/"}let c=t1(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Xn=e=>e.join("/").replace(/\/\/+/g,"/"),r1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),i1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,s1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function o1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const bh=["post","put","patch","delete"];new Set(bh);const a1=["get",...bh];new Set(a1);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wi(){return Wi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wi.apply(this,arguments)}const Zc=_.createContext(null),l1=_.createContext(null),es=_.createContext(null),Bo=_.createContext(null),Fn=_.createContext({outlet:null,matches:[],isDataRoute:!1}),kh=_.createContext(null);function ts(){return _.useContext(Bo)!=null}function eu(){return ts()||Fe(!1),_.useContext(Bo).location}function jh(e){_.useContext(es).static||_.useLayoutEffect(e)}function tu(){let{isDataRoute:e}=_.useContext(Fn);return e?j1():c1()}function c1(){ts()||Fe(!1);let e=_.useContext(Zc),{basename:t,future:n,navigator:r}=_.useContext(es),{matches:i}=_.useContext(Fn),{pathname:o}=eu(),a=JSON.stringify(yh(i,n.v7_relativeSplatPath)),l=_.useRef(!1);return jh(()=>{l.current=!0}),_.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=vh(u,JSON.parse(a),o,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Xn([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,a,o,e])}function u1(){let{matches:e}=_.useContext(Fn),t=e[e.length-1];return t?t.params:{}}function d1(e,t){return p1(e,t)}function p1(e,t,n,r){ts()||Fe(!1);let{navigator:i}=_.useContext(es),{matches:o}=_.useContext(Fn),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=eu(),d;if(t){var p;let N=typeof t=="string"?Jr(t):t;c==="/"||(p=N.pathname)!=null&&p.startsWith(c)||Fe(!1),d=N}else d=u;let f=d.pathname||"/",m=f;if(c!=="/"){let N=c.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(N.length).join("/")}let y=$v(e,{pathname:m}),w=x1(y&&y.map(N=>Object.assign({},N,{params:Object.assign({},l,N.params),pathname:Xn([c,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?c:Xn([c,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),o,n,r);return t&&w?_.createElement(Bo.Provider,{value:{location:Wi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:jn.Pop}},w):w}function f1(){let e=k1(),t=o1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},t),n?_.createElement("pre",{style:i},n):null,null)}const m1=_.createElement(f1,null);class h1 extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?_.createElement(Fn.Provider,{value:this.props.routeContext},_.createElement(kh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function g1(e){let{routeContext:t,match:n,children:r}=e,i=_.useContext(Zc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(Fn.Provider,{value:t},r)}function x1(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Fe(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:m}=n,y=p.route.loader&&f[p.route.id]===void 0&&(!m||m[p.route.id]===void 0);if(p.route.lazy||y){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,p,f)=>{let m,y=!1,w=null,N=null;n&&(m=l&&p.route.id?l[p.route.id]:void 0,w=p.route.errorElement||m1,c&&(u<0&&f===0?(w1("route-fallback"),y=!0,N=null):u===f&&(y=!0,N=p.route.hydrateFallbackElement||null)));let x=t.concat(a.slice(0,f+1)),h=()=>{let v;return m?v=w:y?v=N:p.route.Component?v=_.createElement(p.route.Component,null):p.route.element?v=p.route.element:v=d,_.createElement(g1,{match:p,routeContext:{outlet:d,matches:x,isDataRoute:n!=null},children:v})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?_.createElement(h1,{location:n.location,revalidation:n.revalidation,component:w,error:m,children:h(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):h()},null)}var wh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(wh||{}),_h=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(_h||{});function y1(e){let t=_.useContext(Zc);return t||Fe(!1),t}function v1(e){let t=_.useContext(l1);return t||Fe(!1),t}function b1(e){let t=_.useContext(Fn);return t||Fe(!1),t}function Sh(e){let t=b1(),n=t.matches[t.matches.length-1];return n.route.id||Fe(!1),n.route.id}function k1(){var e;let t=_.useContext(kh),n=v1(),r=Sh();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function j1(){let{router:e}=y1(wh.UseNavigateStable),t=Sh(_h.UseNavigateStable),n=_.useRef(!1);return jh(()=>{n.current=!0}),_.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Wi({fromRouteId:t},o)))},[e,t])}const Ud={};function w1(e,t,n){Ud[e]||(Ud[e]=!0)}function _1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function S1(e){let{to:t,replace:n,state:r,relative:i}=e;ts()||Fe(!1);let{future:o,static:a}=_.useContext(es),{matches:l}=_.useContext(Fn),{pathname:c}=eu(),u=tu(),d=vh(t,yh(l,o.v7_relativeSplatPath),c,i==="path"),p=JSON.stringify(d);return _.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:i}),[u,p,i,n,r]),null}function pr(e){Fe(!1)}function C1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=jn.Pop,navigator:o,static:a=!1,future:l}=e;ts()&&Fe(!1);let c=t.replace(/^\/*/,"/"),u=_.useMemo(()=>({basename:c,navigator:o,static:a,future:Wi({v7_relativeSplatPath:!1},l)}),[c,l,o,a]);typeof r=="string"&&(r=Jr(r));let{pathname:d="/",search:p="",hash:f="",state:m=null,key:y="default"}=r,w=_.useMemo(()=>{let N=xh(d,c);return N==null?null:{location:{pathname:N,search:p,hash:f,state:m,key:y},navigationType:i}},[c,d,p,f,m,y,i]);return w==null?null:_.createElement(es.Provider,{value:u},_.createElement(Bo.Provider,{children:n,value:w}))}function N1(e){let{children:t,location:n}=e;return d1(Dl(t),n)}new Promise(()=>{});function Dl(e,t){t===void 0&&(t=[]);let n=[];return _.Children.forEach(e,(r,i)=>{if(!_.isValidElement(r))return;let o=[...t,i];if(r.type===_.Fragment){n.push.apply(n,Dl(r.props.children,o));return}r.type!==pr&&Fe(!1),!r.props.index||!r.props.children||Fe(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Dl(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const E1="6";try{window.__reactRouterVersion=E1}catch{}const z1="startTransition",Vd=wx[z1];function T1(e){let{basename:t,children:n,future:r,window:i}=e,o=_.useRef();o.current==null&&(o.current=Iv({window:i,v5Compat:!0}));let a=o.current,[l,c]=_.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=_.useCallback(p=>{u&&Vd?Vd(()=>c(p)):c(p)},[c,u]);return _.useLayoutEffect(()=>a.listen(d),[a,d]),_.useEffect(()=>_1(r),[r]),_.createElement(C1,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}var Wd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Wd||(Wd={}));var Hd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Hd||(Hd={}));const P1={},qd=e=>{let t;const n=new Set,r=(d,p)=>{const f=typeof d=="function"?d(t):d;if(!Object.is(f,t)){const m=t;t=p??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(y=>y(t,m))}},i=()=>t,c={setState:r,getState:i,getInitialState:()=>u,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(P1?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,c);return c},L1=e=>e?qd(e):qd;var Ch={exports:{}},Nh={},Eh={exports:{}},zh={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Br=_;function A1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var R1=typeof Object.is=="function"?Object.is:A1,I1=Br.useState,M1=Br.useEffect,O1=Br.useLayoutEffect,$1=Br.useDebugValue;function D1(e,t){var n=t(),r=I1({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return O1(function(){i.value=n,i.getSnapshot=t,Ca(i)&&o({inst:i})},[e,n,t]),M1(function(){return Ca(i)&&o({inst:i}),e(function(){Ca(i)&&o({inst:i})})},[e]),$1(n),n}function Ca(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!R1(e,n)}catch{return!0}}function F1(e,t){return t()}var B1=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?F1:D1;zh.useSyncExternalStore=Br.useSyncExternalStore!==void 0?Br.useSyncExternalStore:B1;Eh.exports=zh;var U1=Eh.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uo=_,V1=U1;function W1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var H1=typeof Object.is=="function"?Object.is:W1,q1=V1.useSyncExternalStore,J1=Uo.useRef,K1=Uo.useEffect,Q1=Uo.useMemo,G1=Uo.useDebugValue;Nh.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=J1(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=Q1(function(){function c(m){if(!u){if(u=!0,d=m,m=r(m),i!==void 0&&a.hasValue){var y=a.value;if(i(y,m))return p=y}return p=m}if(y=p,H1(d,m))return y;var w=r(m);return i!==void 0&&i(y,w)?(d=m,y):(d=m,p=w)}var u=!1,d,p,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,r,i]);var l=q1(e,o[0],o[1]);return K1(function(){a.hasValue=!0,a.value=l},[l]),G1(l),l};Ch.exports=Nh;var Y1=Ch.exports;const X1=_o(Y1),Th={},{useDebugValue:Z1}=Lt,{useSyncExternalStoreWithSelector:e0}=X1;let Jd=!1;const t0=e=>e;function n0(e,t=t0,n){(Th?"production":void 0)!=="production"&&n&&!Jd&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Jd=!0);const r=e0(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return Z1(r),r}const Kd=e=>{(Th?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?L1(e):e,n=(r,i)=>n0(t,r,i);return Object.assign(n,t),n},r0=e=>e?Kd(e):Kd,et=r0((e,t)=>({project:null,selectedAgentId:null,selectedToolId:null,mcpServers:[],builtinTools:[],isRunning:!1,runEvents:[],watches:[],activeTab:"app",sidebarOpen:!0,hasUnsavedChanges:!1,runAgentId:null,currentSessionId:null,setProject:n=>{var i;const r=((i=n==null?void 0:n.watches)==null?void 0:i.map(o=>({...o,result:void 0,error:void 0,isLoading:!1,lastRun:void 0,history:[]})))||[];e({project:n,watches:r})},setSelectedAgentId:n=>e({selectedAgentId:n}),setSelectedToolId:n=>e({selectedToolId:n}),setMcpServers:n=>e({mcpServers:n}),setBuiltinTools:n=>e({builtinTools:n}),setIsRunning:n=>e({isRunning:n}),addRunEvent:n=>e(r=>({runEvents:[...r.runEvents,n]})),clearRunEvents:()=>e({runEvents:[]}),setWatches:n=>e({watches:n}),updateWatch:(n,r)=>e(i=>{const o=i.watches.map(l=>l.id===n?{...l,...r}:l);if(("serverName"in r||"toolName"in r||"args"in r||"transform"in r)&&i.project){const l=o.map(({id:c,serverName:u,toolName:d,args:p,transform:f})=>({id:c,serverName:u,toolName:d,args:p,transform:f}));return{watches:o,project:{...i.project,watches:l},hasUnsavedChanges:!0}}return{watches:o}}),addWatch:n=>e(r=>{const i=[...r.watches,n],{project:o}=r;if(o){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...o,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),removeWatch:n=>e(r=>{const i=r.watches.filter(a=>a.id!==n),{project:o}=r;if(o){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...o,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),clearWatchHistories:()=>e(n=>({watches:n.watches.map(r=>({...r,history:[],result:void 0,error:void 0}))})),setActiveTab:n=>e({activeTab:n}),setSidebarOpen:n=>e({sidebarOpen:n}),setHasUnsavedChanges:n=>e({hasUnsavedChanges:n}),setRunAgentId:n=>e({runAgentId:n}),setCurrentSessionId:n=>e({currentSessionId:n}),updateProject:n=>{const{project:r}=t();r&&e({project:{...r,...n}})},addAgent:n=>{const{project:r}=t();r&&e({project:{...r,agents:[...r.agents,n]}})},updateAgent:(n,r)=>{const{project:i}=t();i&&e({project:{...i,agents:i.agents.map(o=>o.id===n?{...o,...r}:o)}})},removeAgent:n=>{const{project:r,selectedAgentId:i}=t();r&&e({project:{...r,agents:r.agents.filter(o=>o.id!==n)},selectedAgentId:i===n?null:i})},addCustomTool:n=>{const{project:r}=t();r&&e({project:{...r,custom_tools:[...r.custom_tools,n]}})},updateCustomTool:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_tools:i.custom_tools.map(o=>o.id===n?{...o,...r}:o)}})},removeCustomTool:n=>{const{project:r,selectedToolId:i}=t();r&&e({project:{...r,custom_tools:r.custom_tools.filter(o=>o.id!==n)},selectedToolId:i===n?null:i})},addCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:[...r.custom_callbacks||[],n]}})},updateCustomCallback:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_callbacks:(i.custom_callbacks||[]).map(o=>o.id===n?{...o,...r}:o)}})},removeCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:(r.custom_callbacks||[]).filter(i=>i.id!==n)}})}})),Ph="/api";async function ve(e,t){const n=await fetch(`${Ph}${e}`,{...t,headers:{"Content-Type":"application/json",...t==null?void 0:t.headers}});if(!n.ok){const r=await n.json().catch(()=>({detail:"Unknown error"}));throw new Error(r.detail||`HTTP ${n.status}`)}return n.json()}async function Lh(){return(await ve("/projects")).projects}async function Ah(e){return(await ve(`/projects/${e}`)).project}async function Rh(e,t=""){return(await ve("/projects",{method:"POST",body:JSON.stringify({name:e,description:t})})).project}async function Fl(e,t){return(await ve(`/projects/${e}`,{method:"PUT",body:JSON.stringify(t)})).project}async function Ih(e){await ve(`/projects/${e}`,{method:"DELETE"})}async function Mh(e){return ve(`/sessions/${e}/save-to-memory`,{method:"POST"})}async function Bl(e){return(await ve(`/projects/${e}/sessions`)).sessions}async function Oh(e,t){return(await ve(`/projects/${e}/sessions/${t}/load`)).session}async function $h(e){return(await ve(`/projects/${e}/yaml`)).yaml}async function Dh(e,t){return(await ve(`/projects/${e}/yaml`,{method:"PUT",body:JSON.stringify({yaml:t})})).project}async function nu(){return(await ve("/mcp-servers")).servers}async function Fh(){return(await ve("/builtin-tools")).tools}function Bh(e){const t=window.location.protocol==="https:"?"wss:":"ws:",n=window.location.host;return new WebSocket(`${t}//${n}/ws/run/${e}`)}async function Bs(e,t,n,r){return await ve(`/projects/${e}/generate-prompt`,{method:"POST",body:JSON.stringify({agent_id:t,context:n,agent_config:r||void 0})})}async function Uh(e,t){return await ve(`/projects/${e}/generate-agent-config`,{method:"POST",body:JSON.stringify({description:t})})}async function Vh(e,t,n,r=[],i){return await ve(`/projects/${e}/generate-tool-code`,{method:"POST",body:JSON.stringify({tool_name:t,tool_description:n,state_keys_used:r,context:i})})}async function Wh(e,t,n,r,i=[],o){return await ve(`/projects/${e}/generate-callback-code`,{method:"POST",body:JSON.stringify({callback_name:t,callback_description:n,callback_type:r,state_keys_used:i,context:o})})}async function Hh(e){return await ve("/test-mcp-server",{method:"POST",body:JSON.stringify(e)})}async function qh(e,t){return ve(`/projects/${e}/skillsets/${t}/stats`)}async function Jh(e,t,n,r,i=500,o=50){return ve(`/projects/${e}/skillsets/${t}/url`,{method:"POST",body:JSON.stringify({url:n,source_name:r,chunk_size:i,chunk_overlap:o})})}async function Kh(e,t,n,r=500,i=50){const o=new FormData;o.append("file",n),o.append("chunk_size",String(r)),o.append("chunk_overlap",String(i));const a=await fetch(`${Ph}/projects/${e}/skillsets/${t}/file`,{method:"POST",body:o});if(!a.ok)throw new Error(`Upload failed: ${a.statusText}`);return a.json()}async function Qh(e,t,n,r=10,i=0){return ve(`/projects/${e}/skillsets/${t}/search`,{method:"POST",body:JSON.stringify({query:n,top_k:r,min_score:i})})}async function Gh(e,t){return ve(`/projects/${e}/skillsets/${t}/entries`,{method:"DELETE"})}async function Yh(){return ve("/skillsets/embeddings-available")}const Be={async get(e){return ve(e)},async post(e,t){return ve(e,{method:"POST",body:t?JSON.stringify(t):void 0})},async put(e,t){return ve(e,{method:"PUT",body:t?JSON.stringify(t):void 0})},async delete(e){return ve(e,{method:"DELETE"})}},i0=Object.freeze(Object.defineProperty({__proto__:null,addSkillSetUrl:Jh,api:Be,checkEmbeddingsAvailable:Yh,clearSkillSet:Gh,createProject:Rh,createRunWebSocket:Bh,deleteProject:Ih,fetchJSON:ve,generateAgentConfig:Uh,generateCallbackCode:Wh,generatePrompt:Bs,generateToolCode:Vh,getBuiltinTools:Fh,getMcpServers:nu,getProject:Ah,getProjectYaml:$h,getSkillSetStats:qh,listProjectSessions:Bl,listProjects:Lh,loadSession:Oh,saveSessionToMemory:Mh,searchSkillSet:Qh,testMcpServer:Hh,updateProject:Fl,updateProjectFromYaml:Dh,uploadSkillSetFile:Kh},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var s0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),oe=(e,t)=>{const n=_.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:l="",children:c,...u},d)=>_.createElement("svg",{ref:d,...s0,width:i,height:i,stroke:r,strokeWidth:a?Number(o)*24/Number(i):o,className:["lucide",`lucide-${o0(e)}`,l].join(" "),...u},[...t.map(([p,f])=>_.createElement(p,f)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=oe("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=oe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=oe("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=oe("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=oe("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=oe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=oe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=oe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=oe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=oe("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=oe("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=oe("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=oe("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=oe("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=oe("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=oe("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=oe("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=oe("FileCheck",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=oe("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=oe("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=oe("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=oe("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=oe("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=oe("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=oe("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=oe("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=oe("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=oe("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=oe("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=oe("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=oe("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=oe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=oe("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=oe("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=oe("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=oe("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=oe("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=oe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=oe("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=oe("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=oe("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=oe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=oe("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=oe("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=oe("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=oe("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=oe("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=oe("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=oe("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=oe("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=oe("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=oe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=oe("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=oe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=oe("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=oe("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=oe("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=oe("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=oe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=oe("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function j0(){const e=tu(),[t,n]=_.useState([]),[r,i]=_.useState(!0),[o,a]=_.useState(!1),[l,c]=_.useState("");_.useEffect(()=>{u()},[]);async function u(){try{const f=await Lh();n(f)}catch(f){console.error("Failed to load projects:",f)}finally{i(!1)}}async function d(){if(l.trim())try{const f=await Rh(l.trim());e(`/project/${f.id}`)}catch(f){console.error("Failed to create project:",f)}}async function p(f,m){if(m.stopPropagation(),!!confirm("Delete this project?"))try{await Ih(f),n(t.filter(y=>y.id!==f))}catch(y){console.error("Failed to delete project:",y)}}return s.jsxs("div",{className:"project-list",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("header",{className:"header",children:[s.jsxs("div",{className:"logo",children:[s.jsx(au,{size:40,className:"logo-icon"}),s.jsx("h1",{className:"title",children:"ADK Playground"})]}),s.jsx("p",{className:"subtitle",children:"Build, test, and deploy AI agents visually"})]}),s.jsxs("div",{className:"content",children:[o?s.jsxs("div",{className:"create-form",children:[s.jsx("input",{type:"text",placeholder:"Project name...",value:l,onChange:f=>c(f.target.value),onKeyDown:f=>f.key==="Enter"&&d(),autoFocus:!0}),s.jsxs("button",{className:"btn btn-primary",onClick:d,children:[s.jsx(Oe,{size:18}),"Create"]}),s.jsx("button",{className:"btn btn-secondary",onClick:()=>a(!1),children:"Cancel"})]}):s.jsx("div",{className:"create-form",children:s.jsxs("button",{className:"btn btn-primary",onClick:()=>a(!0),children:[s.jsx(Oe,{size:18}),"New Project"]})}),r?s.jsx("div",{className:"loading",children:"Loading projects..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(Qd,{size:48,style:{marginBottom:16,opacity:.3}}),s.jsx("p",{children:"No projects yet. Create one to get started!"})]}):s.jsx("div",{className:"projects-grid",children:t.map(f=>s.jsxs("div",{className:"project-card",onClick:()=>e(`/project/${f.id}`),children:[s.jsxs("h3",{children:[s.jsx(Qd,{size:18}),f.name]}),s.jsx("p",{children:f.description||"No description"}),s.jsx("button",{className:"delete-btn",onClick:m=>p(f.id,m),children:s.jsx(Le,{size:16})})]},f.id))})]})]})}const w0=[{key:"GOOGLE_API_KEY",description:"API key for Gemini models"},{key:"OPENAI_API_KEY",description:"API key for OpenAI models (via LiteLLM)"},{key:"ANTHROPIC_API_KEY",description:"API key for Anthropic Claude models"},{key:"AZURE_API_KEY",description:"API key for Azure OpenAI Service"},{key:"AZURE_API_BASE",description:"Base URL for Azure OpenAI endpoint (e.g., https://your-resource.openai.azure.com)"},{key:"AZURE_API_VERSION",description:"API version for Azure OpenAI (e.g., 2024-02-15-preview)"},{key:"GOOGLE_GENAI_USE_VERTEXAI",description:'Set to "1" to use Vertex AI instead of API key'},{key:"GOOGLE_CLOUD_PROJECT",description:"Google Cloud project ID for Vertex AI"},{key:"GOOGLE_CLOUD_REGION",description:"Google Cloud region for Vertex AI (e.g., us-central1)"}];function _0(e){return/^[a-zA-Z0-9_]+$/.test(e)}function S0(){const{project:e,updateProject:t}=et(),[n,r]=_.useState(null);if(!e)return null;const{app:i}=e;function o(j){t({app:{...i,...j}})}function a(j){if(j===""){r(null),o({name:j});return}_0(j)?r(null):r("Name can only contain letters, numbers, and underscores"),o({name:j})}function l(){const j={name:`state_key_${i.state_keys.length+1}`,description:"",type:"string",scope:"session"};o({state_keys:[...i.state_keys,j]})}function c(j,T){const M=[...i.state_keys];M[j]={...M[j],...T},o({state_keys:M})}function u(j){o({state_keys:i.state_keys.filter((T,M)=>M!==j)})}function d(j="ReflectAndRetryToolPlugin"){let T;switch(j){case"ReflectAndRetryToolPlugin":T={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1};break;case"ContextFilterPlugin":T={type:"ContextFilterPlugin",name:"context_filter",num_invocations_to_keep:5};break;case"LoggingPlugin":T={type:"LoggingPlugin",name:"logging"};break;case"GlobalInstructionPlugin":T={type:"GlobalInstructionPlugin",name:"global_instruction",global_instruction:""};break;case"SaveFilesAsArtifactsPlugin":T={type:"SaveFilesAsArtifactsPlugin",name:"save_files"};break;case"MultimodalToolResultsPlugin":T={type:"MultimodalToolResultsPlugin",name:"multimodal_tools"};break;default:T={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1}}o({plugins:[...i.plugins,T]})}function p(j,T){const M=[...i.plugins];M[j]={...M[j],...T},o({plugins:M})}function f(j){o({plugins:i.plugins.filter((T,M)=>M!==j)})}const m=i.models||[];function y(){const j=`model_${Date.now().toString(36)}`,T={id:j,name:"New Model",provider:"gemini",model_name:"gemini-2.0-flash",is_default:m.length===0};o({models:[...m,T],default_model_id:m.length===0?j:i.default_model_id})}function w(j,T){const M=m.map(V=>V.id===j?{...V,...T}:V);o({models:M})}function N(j){var V;const T=m.filter(F=>F.id!==j),M=i.default_model_id===j?((V=T[0])==null?void 0:V.id)||void 0:i.default_model_id;o({models:T,default_model_id:M})}function x(j){o({default_model_id:j})}const h=i.env_vars||{},[v,L]=_.useState({}),[S,g]=_.useState("");function b(j=""){const T=j||S.trim();!T||h[T]!==void 0||(o({env_vars:{...h,[T]:""}}),g(""))}function P(j,T){o({env_vars:{...h,[j]:T}})}function R(j){const T={...h};delete T[j],o({env_vars:T})}function E(j){L(T=>({...T,[j]:!T[j]}))}return s.jsxs("div",{className:"app-config",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("section",{className:"section",children:[s.jsx("div",{className:"section-header",children:s.jsxs("h2",{className:"section-title",children:[s.jsx(y0,{size:20}),"Basic Information"]})}),s.jsxs("div",{className:"form-grid",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"App Name"}),s.jsx("input",{type:"text",value:i.name,onChange:j=>a(j.target.value),style:{borderColor:n?"var(--error)":void 0}}),n&&s.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:4},children:n})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Root Agent"}),s.jsxs("select",{value:i.root_agent_id||"",onChange:j=>o({root_agent_id:j.target.value||void 0}),children:[s.jsx("option",{value:"",children:"Select an agent..."}),e.agents.map(j=>s.jsx("option",{value:j.id,children:j.name},j.id))]})]}),s.jsxs("div",{className:"form-group full-width",children:[s.jsx("label",{children:"Description"}),s.jsx("textarea",{value:i.description,onChange:j=>o({description:j.target.value}),rows:2})]})]})]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(on,{size:20}),"Services"]}),s.jsx("span",{className:"section-hint",children:"Configure session, memory, and artifact storage backends"})]}),s.jsxs("div",{className:"form-grid",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Session Service"}),s.jsxs("select",{value:i.session_service_uri.split("://")[0],onChange:j=>{const T=j.target.value;o({session_service_uri:{memory:"memory://",file:"file://~/.adk-playground/sessions",sqlite:"sqlite://~/.adk-playground/sessions.db",postgresql:"postgresql://user:pass@localhost:5432/adk_sessions",mysql:"mysql://user:pass@localhost:3306/adk_sessions",agentengine:"agentengine://project/us-central1/engine-id"}[T]||T+"://"})},children:[s.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),s.jsx("option",{value:"file",children:"File System (JSON)"}),s.jsx("option",{value:"sqlite",children:"SQLite (local)"}),s.jsx("option",{value:"postgresql",children:"PostgreSQL"}),s.jsx("option",{value:"mysql",children:"MySQL"}),s.jsx("option",{value:"agentengine",children:"Vertex AI Agent Engine"})]}),i.session_service_uri.startsWith("file://")&&s.jsx("input",{type:"text",value:i.session_service_uri.replace("file://",""),onChange:j=>o({session_service_uri:"file://"+j.target.value}),placeholder:"~/.adk-playground/sessions",style:{marginTop:8}}),i.session_service_uri.startsWith("sqlite://")&&s.jsx("input",{type:"text",value:i.session_service_uri.replace("sqlite://",""),onChange:j=>o({session_service_uri:"sqlite://"+j.target.value}),placeholder:"~/.adk-playground/sessions.db",style:{marginTop:8}}),(i.session_service_uri.startsWith("postgresql://")||i.session_service_uri.startsWith("mysql://"))&&s.jsx("input",{type:"text",value:i.session_service_uri,onChange:j=>o({session_service_uri:j.target.value}),placeholder:"postgresql://user:pass@localhost:5432/db",style:{marginTop:8}}),i.session_service_uri.startsWith("agentengine://")&&s.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[s.jsx("input",{type:"text",value:i.session_service_uri.split("/")[2]||"",onChange:j=>{const T=i.session_service_uri.split("/");T[2]=j.target.value,o({session_service_uri:T.join("/")})},placeholder:"project-id"}),s.jsx("input",{type:"text",value:i.session_service_uri.split("/")[3]||"",onChange:j=>{const T=i.session_service_uri.split("/");T[3]=j.target.value,o({session_service_uri:T.join("/")})},placeholder:"location (e.g., us-central1)"}),s.jsx("input",{type:"text",value:i.session_service_uri.split("/")[4]||"",onChange:j=>{const T=i.session_service_uri.split("/");T[4]=j.target.value,o({session_service_uri:T.join("/")})},placeholder:"agent-engine-id"})]}),s.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.session_service_uri.startsWith("memory://")&&"Sessions stored in memory, lost on restart",i.session_service_uri.startsWith("file://")&&"Sessions stored as JSON files, preserves UI events",i.session_service_uri.startsWith("sqlite://")&&"Persists to local SQLite file",i.session_service_uri.startsWith("postgresql://")&&"Production-ready PostgreSQL backend",i.session_service_uri.startsWith("mysql://")&&"Production-ready MySQL backend",i.session_service_uri.startsWith("agentengine://")&&"Vertex AI Agent Engine managed sessions"]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Memory Service"}),s.jsxs("select",{value:i.memory_service_uri.split("://")[0],onChange:j=>{const T=j.target.value;o({memory_service_uri:{memory:"memory://",file:"file://~/.adk-playground/memory",rag:"rag://rag-corpus-id",agentengine:"agentengine://project/us-central1/engine-id"}[T]||T+"://"})},children:[s.jsx("option",{value:"memory",children:"In-Memory (keyword matching)"}),s.jsx("option",{value:"file",children:"File System (keyword matching)"}),s.jsx("option",{value:"rag",children:"Vertex AI RAG"}),s.jsx("option",{value:"agentengine",children:"Vertex AI Memory Bank"})]}),i.memory_service_uri.startsWith("file://")&&s.jsx("input",{type:"text",value:i.memory_service_uri.replace("file://",""),onChange:j=>o({memory_service_uri:"file://"+j.target.value}),placeholder:"~/.adk-playground/memory",style:{marginTop:8}}),i.memory_service_uri.startsWith("rag://")&&s.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[s.jsx("input",{type:"text",value:i.memory_service_uri.replace("rag://",""),onChange:j=>o({memory_service_uri:"rag://"+j.target.value}),placeholder:"rag-corpus-id or full resource path"}),s.jsx("span",{className:"help-text",style:{fontSize:11,color:"var(--text-dim)"},children:"Format: projects/PROJECT/locations/LOCATION/ragCorpora/CORPUS_ID"})]}),i.memory_service_uri.startsWith("agentengine://")&&s.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[s.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[2]||"",onChange:j=>{const T=i.memory_service_uri.split("/");T[2]=j.target.value,o({memory_service_uri:T.join("/")})},placeholder:"project-id"}),s.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[3]||"",onChange:j=>{const T=i.memory_service_uri.split("/");T[3]=j.target.value,o({memory_service_uri:T.join("/")})},placeholder:"location (e.g., us-central1)"}),s.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[4]||"",onChange:j=>{const T=i.memory_service_uri.split("/");T[4]=j.target.value,o({memory_service_uri:T.join("/")})},placeholder:"agent-engine-id"})]}),s.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.memory_service_uri.startsWith("memory://")&&"Simple keyword matching, good for prototyping",i.memory_service_uri.startsWith("file://")&&"Persists memories as JSON files",i.memory_service_uri.startsWith("rag://")&&"Semantic search using Vertex AI RAG corpus",i.memory_service_uri.startsWith("agentengine://")&&"Managed memory via Agent Engine Memory Bank"]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Artifact Service"}),s.jsxs("select",{value:i.artifact_service_uri.split("://")[0]==="gs"?"gs":i.artifact_service_uri.split("://")[0],onChange:j=>{const T=j.target.value;o({artifact_service_uri:{memory:"memory://",file:"file://~/.adk-playground/artifacts",gs:"gs://your-bucket-name"}[T]||T+"://"})},children:[s.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),s.jsx("option",{value:"file",children:"File System"}),s.jsx("option",{value:"gs",children:"Google Cloud Storage"})]}),i.artifact_service_uri.startsWith("file://")&&s.jsx("input",{type:"text",value:i.artifact_service_uri.replace("file://",""),onChange:j=>o({artifact_service_uri:"file://"+j.target.value}),placeholder:"~/.adk-playground/artifacts",style:{marginTop:8}}),i.artifact_service_uri.startsWith("gs://")&&s.jsx("input",{type:"text",value:i.artifact_service_uri.replace("gs://",""),onChange:j=>o({artifact_service_uri:"gs://"+j.target.value}),placeholder:"bucket-name/optional-prefix",style:{marginTop:8}}),s.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.artifact_service_uri.startsWith("memory://")&&"Artifacts stored in memory, lost on restart",i.artifact_service_uri.startsWith("file://")&&"Persists to local filesystem",i.artifact_service_uri.startsWith("gs://")&&"Production-ready Google Cloud Storage backend"]})]})]})]}),s.jsxs("section",{className:"section",children:[s.jsx("div",{className:"section-header",children:s.jsxs("h2",{className:"section-title",children:[s.jsx(Wl,{size:20}),"Environment Variables"]})}),s.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginBottom:16},children:"Set API keys and other environment variables. These are passed to the agent runtime."}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16},children:w0.filter(j=>h[j.key]===void 0).map(j=>s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>b(j.key),title:j.description,children:[s.jsx(Oe,{size:12}),j.key]},j.key))}),Object.keys(h).length===0?s.jsx("p",{className:"empty-message",children:"No environment variables set. Click a button above to add common variables, or add a custom one below."}):Object.entries(h).map(([j,T])=>s.jsxs("div",{className:"list-item",style:{alignItems:"center"},children:[s.jsxs("div",{style:{flex:1,display:"flex",gap:12,alignItems:"center"},children:[s.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:13,minWidth:200},children:j}),s.jsxs("div",{style:{flex:1,display:"flex",gap:8,alignItems:"center"},children:[s.jsx("input",{type:v[j]?"text":"password",value:T,onChange:M=>P(j,M.target.value),placeholder:"Enter value...",style:{flex:1}}),s.jsx("button",{className:"delete-item",onClick:()=>E(j),title:v[j]?"Hide value":"Show value",children:v[j]?s.jsx(c0,{size:16}):s.jsx(Hi,{size:16})})]})]}),s.jsx("button",{className:"delete-item",onClick:()=>R(j),children:s.jsx(Le,{size:16})})]},j)),s.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[s.jsx("input",{type:"text",value:S,onChange:j=>g(j.target.value.toUpperCase().replace(/[^A-Z0-9_]/g,"")),placeholder:"CUSTOM_VAR_NAME",style:{flex:1,fontFamily:"var(--font-mono)"},onKeyDown:j=>j.key==="Enter"&&b()}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>b(),disabled:!S.trim(),children:[s.jsx(Oe,{size:14}),"Add Variable"]})]})]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(ru,{size:20}),"Models"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:y,children:[s.jsx(Oe,{size:14}),"Add Model"]})]}),m.length===0?s.jsx("p",{className:"empty-message",children:"No models configured. Add models that agents can use."}):m.map(j=>s.jsxs("div",{className:"model-card",children:[s.jsxs("div",{className:"model-card-header",children:[s.jsx("input",{type:"text",value:j.name,onChange:T=>w(j.id,{name:T.target.value}),placeholder:"Model name",className:"model-name-input"}),s.jsx("button",{className:`default-model-btn ${i.default_model_id===j.id?"is-default":""}`,onClick:()=>x(j.id),title:i.default_model_id===j.id?"Default model":"Set as default",children:s.jsx(sg,{size:14,fill:i.default_model_id===j.id?"currentColor":"none"})}),s.jsx("button",{className:"delete-item",onClick:()=>N(j.id),children:s.jsx(Le,{size:16})})]}),s.jsxs("div",{className:"model-card-body",children:[s.jsxs("div",{className:"model-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Provider"}),s.jsxs("select",{value:j.provider,onChange:T=>w(j.id,{provider:T.target.value}),children:[s.jsx("option",{value:"gemini",children:"Gemini"}),s.jsx("option",{value:"litellm",children:"LiteLLM"}),s.jsx("option",{value:"anthropic",children:"Anthropic"})]})]}),s.jsxs("div",{className:"form-group",style:{flex:2},children:[s.jsx("label",{children:"Model Name"}),s.jsx("input",{type:"text",value:j.model_name,onChange:T=>w(j.id,{model_name:T.target.value}),placeholder:"e.g., gemini-2.0-flash"})]}),j.provider==="litellm"&&s.jsxs("div",{className:"form-group",style:{flex:2},children:[s.jsx("label",{children:"API Base URL"}),s.jsx("input",{type:"text",value:j.api_base||"",onChange:T=>w(j.id,{api_base:T.target.value||void 0}),placeholder:"http://localhost:11434"})]})]}),s.jsxs("div",{className:"model-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Temperature"}),s.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:j.temperature??"",onChange:T=>w(j.id,{temperature:T.target.value?parseFloat(T.target.value):void 0}),placeholder:"Default"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Max Tokens"}),s.jsx("input",{type:"number",min:"1",value:j.max_output_tokens??"",onChange:T=>w(j.id,{max_output_tokens:T.target.value?parseInt(T.target.value):void 0}),placeholder:"Default"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Top P"}),s.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:j.top_p??"",onChange:T=>w(j.id,{top_p:T.target.value?parseFloat(T.target.value):void 0}),placeholder:"Default"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Top K"}),s.jsx("input",{type:"number",min:"1",value:j.top_k??"",onChange:T=>w(j.id,{top_k:T.target.value?parseInt(T.target.value):void 0}),placeholder:"Default"})]})]})]})]},j.id))]}),s.jsxs("section",{className:"section",children:[s.jsx("div",{className:"section-header",children:s.jsxs("h2",{className:"section-title",children:[s.jsx(ag,{size:20}),"Advanced Options"]})}),s.jsxs("div",{className:"toggle-group",children:[s.jsx("div",{className:`toggle ${i.compaction.enabled?"active":""}`,onClick:()=>o({compaction:{...i.compaction,enabled:!i.compaction.enabled}})}),s.jsxs("div",{className:"toggle-label",children:[s.jsx("strong",{children:"Event Compaction"}),s.jsx("span",{children:"Automatically summarize old events to reduce context size"})]}),i.compaction.enabled&&s.jsx("input",{type:"number",value:i.compaction.max_events,onChange:j=>o({compaction:{...i.compaction,max_events:parseInt(j.target.value)||100}}),style:{width:80},placeholder:"Max events"})]}),s.jsxs("div",{className:"toggle-group",style:{marginTop:12},children:[s.jsx("div",{className:`toggle ${i.context_cache.enabled?"active":""}`,onClick:()=>o({context_cache:{...i.context_cache,enabled:!i.context_cache.enabled}})}),s.jsxs("div",{className:"toggle-label",children:[s.jsx("strong",{children:"Context Caching"}),s.jsx("span",{children:"Cache static instructions for better performance"})]}),i.context_cache.enabled&&s.jsx("input",{type:"number",value:i.context_cache.ttl_seconds,onChange:j=>o({context_cache:{...i.context_cache,ttl_seconds:parseInt(j.target.value)||3600}}),style:{width:100},placeholder:"TTL (seconds)"})]}),s.jsxs("div",{className:"toggle-group",style:{marginTop:12},children:[s.jsx("div",{className:`toggle ${i.resumability.enabled?"active":""}`,onClick:()=>o({resumability:{...i.resumability,enabled:!i.resumability.enabled}})}),s.jsxs("div",{className:"toggle-label",children:[s.jsx("strong",{children:"Resumability"}),s.jsx("span",{children:"Allow pausing and resuming agent execution"})]})]})]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(iu,{size:20}),"Session State Keys"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:l,children:[s.jsx(Oe,{size:14}),"Add Key"]})]}),i.state_keys.length===0?s.jsx("p",{className:"empty-message",children:"No state keys defined. Add keys to declare what data agents can share."}):i.state_keys.map((j,T)=>s.jsxs("div",{className:"list-item",children:[s.jsxs("div",{className:"list-item-content",children:[s.jsx("input",{type:"text",value:j.name,onChange:M=>c(T,{name:M.target.value}),placeholder:"Key name"}),s.jsxs("select",{value:j.type,onChange:M=>c(T,{type:M.target.value}),children:[s.jsx("option",{value:"string",children:"String"}),s.jsx("option",{value:"number",children:"Number"}),s.jsx("option",{value:"boolean",children:"Boolean"}),s.jsx("option",{value:"object",children:"Object"}),s.jsx("option",{value:"array",children:"Array"})]}),s.jsxs("select",{value:j.scope,onChange:M=>c(T,{scope:M.target.value}),children:[s.jsx("option",{value:"session",children:"Session"}),s.jsx("option",{value:"user",children:"User"}),s.jsx("option",{value:"app",children:"App"}),s.jsx("option",{value:"temp",children:"Temporary"})]}),s.jsx("input",{type:"text",value:j.description,onChange:M=>c(T,{description:M.target.value}),placeholder:"Description",style:{gridColumn:"span 2"}})]}),s.jsx("button",{className:"delete-item",onClick:()=>u(T),children:s.jsx(Le,{size:16})})]},T))]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(wn,{size:20}),"Plugins"]}),s.jsx("div",{className:"plugin-add-dropdown",children:s.jsxs("select",{className:"btn btn-secondary btn-sm",value:"",onChange:j=>{j.target.value&&(d(j.target.value),j.target.value="")},style:{paddingRight:8},children:[s.jsx("option",{value:"",children:"+ Add Plugin..."}),s.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),s.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),s.jsx("option",{value:"LoggingPlugin",children:"Logging"}),s.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),s.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),s.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]})})]}),i.plugins.length===0?s.jsx("p",{className:"empty-message",children:"No plugins configured. Add plugins to extend agent functionality."}):i.plugins.map((j,T)=>s.jsxs("div",{className:"list-item",style:{flexDirection:"column",gap:12},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",gap:12},children:[s.jsxs("select",{value:j.type,onChange:M=>p(T,{type:M.target.value}),style:{flex:1},children:[s.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),s.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),s.jsx("option",{value:"LoggingPlugin",children:"Logging"}),s.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),s.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),s.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]}),s.jsx("button",{className:"delete-item",onClick:()=>f(T),children:s.jsx(Le,{size:16})})]}),j.type==="ReflectAndRetryToolPlugin"&&s.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[s.jsxs("div",{className:"form-group",style:{flex:0},children:[s.jsx("label",{style:{fontSize:12},children:"Max Retries"}),s.jsx("input",{type:"number",min:"0",max:"10",value:j.max_retries??3,onChange:M=>p(T,{max_retries:parseInt(M.target.value)||0}),style:{width:70}})]}),s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[s.jsxs("span",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:j.throw_exception_if_retry_exceeded??!1,onChange:M=>p(T,{throw_exception_if_retry_exceeded:M.target.checked})}),s.jsx("span",{className:"toggle-slider"})]}),"Throw exception if retry exceeded"]})]}),j.type==="ContextFilterPlugin"&&s.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[s.jsxs("div",{className:"form-group",style:{flex:0},children:[s.jsx("label",{style:{fontSize:12},children:"Invocations to Keep"}),s.jsx("input",{type:"number",min:"1",max:"100",value:j.num_invocations_to_keep??5,onChange:M=>p(T,{num_invocations_to_keep:parseInt(M.target.value)||1}),style:{width:70}})]}),s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Keeps only the last N conversation turns to reduce context size"})]}),j.type==="LoggingPlugin"&&s.jsx("div",{style:{paddingLeft:8},children:s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Logs all agent events (messages, tool calls, responses) to the console"})}),j.type==="GlobalInstructionPlugin"&&s.jsxs("div",{style:{width:"100%",paddingLeft:8},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{style:{fontSize:12},children:"Global Instruction"}),s.jsx("textarea",{value:j.global_instruction??"",onChange:M=>p(T,{global_instruction:M.target.value}),placeholder:"Instructions that apply to all agents in the app...",rows:3,style:{width:"100%"}})]}),s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"This instruction is prepended to every agent's system prompt"})]}),j.type==="SaveFilesAsArtifactsPlugin"&&s.jsx("div",{style:{paddingLeft:8},children:s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Automatically saves files uploaded in user messages as artifacts for later retrieval"})}),j.type==="MultimodalToolResultsPlugin"&&s.jsx("div",{style:{paddingLeft:8},children:s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Allows tools to return multimodal content (images, files) directly to the LLM"})})]},T))]})]})}const C0="modulepreload",N0=function(e){return"/"+e},Xd={},E0=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=N0(c),c in Xd)return;Xd[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":C0,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((f,m)=>{p.addEventListener("load",f),p.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})};function Zd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function z0(e){if(Array.isArray(e))return e}function T0(e,t,n){return(t=O0(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P0(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(d){u=!0,i=d}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function L0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ep(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function tp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ep(Object(n),!0).forEach(function(r){T0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ep(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function A0(e,t){if(e==null)return{};var n,r,i=R0(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function R0(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function I0(e,t){return z0(e)||P0(e,t)||$0(e,t)||L0()}function M0(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function O0(e){var t=M0(e,"string");return typeof t=="symbol"?t:t+""}function $0(e,t){if(e){if(typeof e=="string")return Zd(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Zd(e,t):void 0}}function D0(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function np(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function rp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?np(Object(n),!0).forEach(function(r){D0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):np(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function F0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,o){return o(i)},r)}}function pi(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function bo(e){return{}.toString.call(e).includes("Object")}function B0(e){return!Object.keys(e).length}function qi(e){return typeof e=="function"}function U0(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function V0(e,t){return bo(t)||Ln("changeType"),Object.keys(t).some(function(n){return!U0(e,n)})&&Ln("changeField"),t}function W0(e){qi(e)||Ln("selectorType")}function H0(e){qi(e)||bo(e)||Ln("handlerType"),bo(e)&&Object.values(e).some(function(t){return!qi(t)})&&Ln("handlersType")}function q0(e){e||Ln("initialIsRequired"),bo(e)||Ln("initialType"),B0(e)&&Ln("initialContent")}function J0(e,t){throw new Error(e[t]||e.default)}var K0={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Ln=pi(J0)(K0),_s={changes:V0,selector:W0,handler:H0,initial:q0};function Q0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};_s.initial(e),_s.handler(t);var n={current:e},r=pi(X0)(n,t),i=pi(Y0)(n),o=pi(_s.changes)(e),a=pi(G0)(n);function l(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return _s.selector(u),u(n.current)}function c(u){F0(r,i,o,a)(u)}return[l,c]}function G0(e,t){return qi(t)?t(e.current):t}function Y0(e,t){return e.current=rp(rp({},e.current),t),t}function X0(e,t,n){return qi(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var Z0={create:Q0},eb={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function tb(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function nb(e){return{}.toString.call(e).includes("Object")}function rb(e){return e||ip("configIsRequired"),nb(e)||ip("configType"),e.urls?(ib(),{paths:{vs:e.urls.monacoBase}}):e}function ib(){console.warn(lg.deprecation)}function sb(e,t){throw new Error(e[t]||e.default)}var lg={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},ip=tb(sb)(lg),ob={config:rb},ab=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(o,a){return a(o)},i)}};function cg(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],cg(e[n],t[n]))}),tp(tp({},e),t)}var lb={type:"cancelation",msg:"operation is manually canceled"};function Ea(e){var t=!1,n=new Promise(function(r,i){e.then(function(o){return t?i(lb):r(o)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var cb=["monaco"],ub=Z0.create({config:eb,isInitialized:!1,resolve:null,reject:null,monaco:null}),ug=I0(ub,2),rs=ug[0],Wo=ug[1];function db(e){var t=ob.config(e),n=t.monaco,r=A0(t,cb);Wo(function(i){return{config:cg(i.config,r),monaco:n}})}function pb(){var e=rs(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(Wo({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),Ea(za);if(window.monaco&&window.monaco.editor)return dg(window.monaco),e.resolve(window.monaco),Ea(za);ab(fb,hb)(gb)}return Ea(za)}function fb(e){return document.body.appendChild(e)}function mb(e){var t=document.createElement("script");return e&&(t.src=e),t}function hb(e){var t=rs(function(r){var i=r.config,o=r.reject;return{config:i,reject:o}}),n=mb("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function gb(){var e=rs(function(n){var r=n.config,i=n.resolve,o=n.reject;return{config:r,resolve:i,reject:o}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;dg(r),e.resolve(r)},function(n){e.reject(n)})}function dg(e){rs().monaco||Wo({monaco:e})}function xb(){return rs(function(e){var t=e.monaco;return t})}var za=new Promise(function(e,t){return Wo({resolve:e,reject:t})}),pg={config:db,init:pb,__getMonacoInstance:xb},yb={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Ta=yb,vb={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},bb=vb;function kb({children:e}){return Lt.createElement("div",{style:bb.container},e)}var jb=kb,wb=jb;function _b({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:o,wrapperProps:a}){return Lt.createElement("section",{style:{...Ta.wrapper,width:e,height:t},...a},!n&&Lt.createElement(wb,null,r),Lt.createElement("div",{ref:i,style:{...Ta.fullWidth,...!n&&Ta.hide},className:o}))}var Sb=_b,fg=_.memo(Sb);function Cb(e){_.useEffect(e,[])}var mg=Cb;function Nb(e,t,n=!0){let r=_.useRef(!0);_.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var yt=Nb;function ji(){}function Sr(e,t,n,r){return Eb(e,r)||zb(e,t,n,r)}function Eb(e,t){return e.editor.getModel(hg(e,t))}function zb(e,t,n,r){return e.editor.createModel(t,n,r?hg(e,r):void 0)}function hg(e,t){return e.Uri.parse(t)}function Tb({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:o,modifiedModelPath:a,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:c=!1,theme:u="light",loading:d="Loading...",options:p={},height:f="100%",width:m="100%",className:y,wrapperProps:w={},beforeMount:N=ji,onMount:x=ji}){let[h,v]=_.useState(!1),[L,S]=_.useState(!0),g=_.useRef(null),b=_.useRef(null),P=_.useRef(null),R=_.useRef(x),E=_.useRef(N),j=_.useRef(!1);mg(()=>{let F=pg.init();return F.then(X=>(b.current=X)&&S(!1)).catch(X=>(X==null?void 0:X.type)!=="cancelation"&&console.error("Monaco initialization: error:",X)),()=>g.current?V():F.cancel()}),yt(()=>{if(g.current&&b.current){let F=g.current.getOriginalEditor(),X=Sr(b.current,e||"",r||n||"text",o||"");X!==F.getModel()&&F.setModel(X)}},[o],h),yt(()=>{if(g.current&&b.current){let F=g.current.getModifiedEditor(),X=Sr(b.current,t||"",i||n||"text",a||"");X!==F.getModel()&&F.setModel(X)}},[a],h),yt(()=>{let F=g.current.getModifiedEditor();F.getOption(b.current.editor.EditorOption.readOnly)?F.setValue(t||""):t!==F.getValue()&&(F.executeEdits("",[{range:F.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),F.pushUndoStop())},[t],h),yt(()=>{var F,X;(X=(F=g.current)==null?void 0:F.getModel())==null||X.original.setValue(e||"")},[e],h),yt(()=>{let{original:F,modified:X}=g.current.getModel();b.current.editor.setModelLanguage(F,r||n||"text"),b.current.editor.setModelLanguage(X,i||n||"text")},[n,r,i],h),yt(()=>{var F;(F=b.current)==null||F.editor.setTheme(u)},[u],h),yt(()=>{var F;(F=g.current)==null||F.updateOptions(p)},[p],h);let T=_.useCallback(()=>{var z;if(!b.current)return;E.current(b.current);let F=Sr(b.current,e||"",r||n||"text",o||""),X=Sr(b.current,t||"",i||n||"text",a||"");(z=g.current)==null||z.setModel({original:F,modified:X})},[n,t,i,e,r,o,a]),M=_.useCallback(()=>{var F;!j.current&&P.current&&(g.current=b.current.editor.createDiffEditor(P.current,{automaticLayout:!0,...p}),T(),(F=b.current)==null||F.editor.setTheme(u),v(!0),j.current=!0)},[p,u,T]);_.useEffect(()=>{h&&R.current(g.current,b.current)},[h]),_.useEffect(()=>{!L&&!h&&M()},[L,h,M]);function V(){var X,z,O,I;let F=(X=g.current)==null?void 0:X.getModel();l||((z=F==null?void 0:F.original)==null||z.dispose()),c||((O=F==null?void 0:F.modified)==null||O.dispose()),(I=g.current)==null||I.dispose()}return Lt.createElement(fg,{width:m,height:f,isEditorReady:h,loading:d,_ref:P,className:y,wrapperProps:w})}var Pb=Tb;_.memo(Pb);function Lb(e){let t=_.useRef();return _.useEffect(()=>{t.current=e},[e]),t.current}var Ab=Lb,Ss=new Map;function Rb({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:o,theme:a="light",line:l,loading:c="Loading...",options:u={},overrideServices:d={},saveViewState:p=!0,keepCurrentModel:f=!1,width:m="100%",height:y="100%",className:w,wrapperProps:N={},beforeMount:x=ji,onMount:h=ji,onChange:v,onValidate:L=ji}){let[S,g]=_.useState(!1),[b,P]=_.useState(!0),R=_.useRef(null),E=_.useRef(null),j=_.useRef(null),T=_.useRef(h),M=_.useRef(x),V=_.useRef(),F=_.useRef(r),X=Ab(o),z=_.useRef(!1),O=_.useRef(!1);mg(()=>{let U=pg.init();return U.then(K=>(R.current=K)&&P(!1)).catch(K=>(K==null?void 0:K.type)!=="cancelation"&&console.error("Monaco initialization: error:",K)),()=>E.current?k():U.cancel()}),yt(()=>{var K,C,le,A;let U=Sr(R.current,e||r||"",t||i||"",o||n||"");U!==((K=E.current)==null?void 0:K.getModel())&&(p&&Ss.set(X,(C=E.current)==null?void 0:C.saveViewState()),(le=E.current)==null||le.setModel(U),p&&((A=E.current)==null||A.restoreViewState(Ss.get(o))))},[o],S),yt(()=>{var U;(U=E.current)==null||U.updateOptions(u)},[u],S),yt(()=>{!E.current||r===void 0||(E.current.getOption(R.current.editor.EditorOption.readOnly)?E.current.setValue(r):r!==E.current.getValue()&&(O.current=!0,E.current.executeEdits("",[{range:E.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),E.current.pushUndoStop(),O.current=!1))},[r],S),yt(()=>{var K,C;let U=(K=E.current)==null?void 0:K.getModel();U&&i&&((C=R.current)==null||C.editor.setModelLanguage(U,i))},[i],S),yt(()=>{var U;l!==void 0&&((U=E.current)==null||U.revealLine(l))},[l],S),yt(()=>{var U;(U=R.current)==null||U.editor.setTheme(a)},[a],S);let I=_.useCallback(()=>{var U;if(!(!j.current||!R.current)&&!z.current){M.current(R.current);let K=o||n,C=Sr(R.current,r||e||"",t||i||"",K||"");E.current=(U=R.current)==null?void 0:U.editor.create(j.current,{model:C,automaticLayout:!0,...u},d),p&&E.current.restoreViewState(Ss.get(K)),R.current.editor.setTheme(a),l!==void 0&&E.current.revealLine(l),g(!0),z.current=!0}},[e,t,n,r,i,o,u,d,p,a,l]);_.useEffect(()=>{S&&T.current(E.current,R.current)},[S]),_.useEffect(()=>{!b&&!S&&I()},[b,S,I]),F.current=r,_.useEffect(()=>{var U,K;S&&v&&((U=V.current)==null||U.dispose(),V.current=(K=E.current)==null?void 0:K.onDidChangeModelContent(C=>{O.current||v(E.current.getValue(),C)}))},[S,v]),_.useEffect(()=>{if(S){let U=R.current.editor.onDidChangeMarkers(K=>{var le;let C=(le=E.current.getModel())==null?void 0:le.uri;if(C&&K.find(A=>A.path===C.path)){let A=R.current.editor.getModelMarkers({resource:C});L==null||L(A)}});return()=>{U==null||U.dispose()}}return()=>{}},[S,L]);function k(){var U,K;(U=V.current)==null||U.dispose(),f?p&&Ss.set(o,E.current.saveViewState()):(K=E.current.getModel())==null||K.dispose(),E.current.dispose()}return Lt.createElement(fg,{width:m,height:y,isEditorReady:S,loading:c,_ref:j,className:w,wrapperProps:N})}var Ib=Rb,Mb=_.memo(Ib),an=Mb;function Ob(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const $b=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Db=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Fb={};function sp(e,t){return(Fb.jsx?Db:$b).test(e)}const Bb=/[ \t\n\f\r]/g;function Ub(e){return typeof e=="object"?e.type==="text"?op(e.value):!1:op(e)}function op(e){return e.replace(Bb,"")===""}class is{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}is.prototype.normal={};is.prototype.property={};is.prototype.space=void 0;function gg(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new is(n,r,t)}function ql(e){return e.toLowerCase()}class ft{constructor(t,n){this.attribute=n,this.property=t}}ft.prototype.attribute="";ft.prototype.booleanish=!1;ft.prototype.boolean=!1;ft.prototype.commaOrSpaceSeparated=!1;ft.prototype.commaSeparated=!1;ft.prototype.defined=!1;ft.prototype.mustUseProperty=!1;ft.prototype.number=!1;ft.prototype.overloadedBoolean=!1;ft.prototype.property="";ft.prototype.spaceSeparated=!1;ft.prototype.space=void 0;let Vb=0;const fe=lr(),$e=lr(),Jl=lr(),Y=lr(),we=lr(),Lr=lr(),gt=lr();function lr(){return 2**++Vb}const Kl=Object.freeze(Object.defineProperty({__proto__:null,boolean:fe,booleanish:$e,commaOrSpaceSeparated:gt,commaSeparated:Lr,number:Y,overloadedBoolean:Jl,spaceSeparated:we},Symbol.toStringTag,{value:"Module"})),Pa=Object.keys(Kl);class cu extends ft{constructor(t,n,r,i){let o=-1;if(super(t,n),ap(this,"space",i),typeof r=="number")for(;++o<Pa.length;){const a=Pa[o];ap(this,Pa[o],(r&Kl[a])===Kl[a])}}}cu.prototype.defined=!0;function ap(e,t,n){n&&(e[t]=n)}function Kr(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const o=new cu(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[ql(r)]=r,n[ql(o.attribute)]=r}return new is(t,n,e.space)}const xg=Kr({properties:{ariaActiveDescendant:null,ariaAtomic:$e,ariaAutoComplete:null,ariaBusy:$e,ariaChecked:$e,ariaColCount:Y,ariaColIndex:Y,ariaColSpan:Y,ariaControls:we,ariaCurrent:null,ariaDescribedBy:we,ariaDetails:null,ariaDisabled:$e,ariaDropEffect:we,ariaErrorMessage:null,ariaExpanded:$e,ariaFlowTo:we,ariaGrabbed:$e,ariaHasPopup:null,ariaHidden:$e,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:we,ariaLevel:Y,ariaLive:null,ariaModal:$e,ariaMultiLine:$e,ariaMultiSelectable:$e,ariaOrientation:null,ariaOwns:we,ariaPlaceholder:null,ariaPosInSet:Y,ariaPressed:$e,ariaReadOnly:$e,ariaRelevant:null,ariaRequired:$e,ariaRoleDescription:we,ariaRowCount:Y,ariaRowIndex:Y,ariaRowSpan:Y,ariaSelected:$e,ariaSetSize:Y,ariaSort:null,ariaValueMax:Y,ariaValueMin:Y,ariaValueNow:Y,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function yg(e,t){return t in e?e[t]:t}function vg(e,t){return yg(e,t.toLowerCase())}const Wb=Kr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Lr,acceptCharset:we,accessKey:we,action:null,allow:null,allowFullScreen:fe,allowPaymentRequest:fe,allowUserMedia:fe,alt:null,as:null,async:fe,autoCapitalize:null,autoComplete:we,autoFocus:fe,autoPlay:fe,blocking:we,capture:null,charSet:null,checked:fe,cite:null,className:we,cols:Y,colSpan:null,content:null,contentEditable:$e,controls:fe,controlsList:we,coords:Y|Lr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:fe,defer:fe,dir:null,dirName:null,disabled:fe,download:Jl,draggable:$e,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:fe,formTarget:null,headers:we,height:Y,hidden:Jl,high:Y,href:null,hrefLang:null,htmlFor:we,httpEquiv:we,id:null,imageSizes:null,imageSrcSet:null,inert:fe,inputMode:null,integrity:null,is:null,isMap:fe,itemId:null,itemProp:we,itemRef:we,itemScope:fe,itemType:we,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:fe,low:Y,manifest:null,max:null,maxLength:Y,media:null,method:null,min:null,minLength:Y,multiple:fe,muted:fe,name:null,nonce:null,noModule:fe,noValidate:fe,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:fe,optimum:Y,pattern:null,ping:we,placeholder:null,playsInline:fe,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:fe,referrerPolicy:null,rel:we,required:fe,reversed:fe,rows:Y,rowSpan:Y,sandbox:we,scope:null,scoped:fe,seamless:fe,selected:fe,shadowRootClonable:fe,shadowRootDelegatesFocus:fe,shadowRootMode:null,shape:null,size:Y,sizes:null,slot:null,span:Y,spellCheck:$e,src:null,srcDoc:null,srcLang:null,srcSet:null,start:Y,step:null,style:null,tabIndex:Y,target:null,title:null,translate:null,type:null,typeMustMatch:fe,useMap:null,value:$e,width:Y,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:we,axis:null,background:null,bgColor:null,border:Y,borderColor:null,bottomMargin:Y,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:fe,declare:fe,event:null,face:null,frame:null,frameBorder:null,hSpace:Y,leftMargin:Y,link:null,longDesc:null,lowSrc:null,marginHeight:Y,marginWidth:Y,noResize:fe,noHref:fe,noShade:fe,noWrap:fe,object:null,profile:null,prompt:null,rev:null,rightMargin:Y,rules:null,scheme:null,scrolling:$e,standby:null,summary:null,text:null,topMargin:Y,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Y,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:fe,disableRemotePlayback:fe,prefix:null,property:null,results:Y,security:null,unselectable:null},space:"html",transform:vg}),Hb=Kr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:gt,accentHeight:Y,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:Y,amplitude:Y,arabicForm:null,ascent:Y,attributeName:null,attributeType:null,azimuth:Y,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:Y,by:null,calcMode:null,capHeight:Y,className:we,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:Y,diffuseConstant:Y,direction:null,display:null,dur:null,divisor:Y,dominantBaseline:null,download:fe,dx:null,dy:null,edgeMode:null,editable:null,elevation:Y,enableBackground:null,end:null,event:null,exponent:Y,externalResourcesRequired:null,fill:null,fillOpacity:Y,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Lr,g2:Lr,glyphName:Lr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:Y,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:Y,horizOriginX:Y,horizOriginY:Y,id:null,ideographic:Y,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:Y,k:Y,k1:Y,k2:Y,k3:Y,k4:Y,kernelMatrix:gt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:Y,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:Y,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:Y,overlineThickness:Y,paintOrder:null,panose1:null,path:null,pathLength:Y,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:we,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:Y,pointsAtY:Y,pointsAtZ:Y,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:gt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:gt,rev:gt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:gt,requiredFeatures:gt,requiredFonts:gt,requiredFormats:gt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:Y,specularExponent:Y,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:Y,strikethroughThickness:Y,string:null,stroke:null,strokeDashArray:gt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:Y,strokeOpacity:Y,strokeWidth:null,style:null,surfaceScale:Y,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:gt,tabIndex:Y,tableValues:null,target:null,targetX:Y,targetY:Y,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:gt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:Y,underlineThickness:Y,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:Y,values:null,vAlphabetic:Y,vMathematical:Y,vectorEffect:null,vHanging:Y,vIdeographic:Y,version:null,vertAdvY:Y,vertOriginX:Y,vertOriginY:Y,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:Y,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:yg}),bg=Kr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),kg=Kr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:vg}),jg=Kr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),qb={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Jb=/[A-Z]/g,lp=/-[a-z]/g,Kb=/^data[-\w.:]+$/i;function Qb(e,t){const n=ql(t);let r=t,i=ft;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Kb.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(lp,Yb);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!lp.test(o)){let a=o.replace(Jb,Gb);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a}}i=cu}return new i(r,t)}function Gb(e){return"-"+e.toLowerCase()}function Yb(e){return e.charAt(1).toUpperCase()}const Xb=gg([xg,Wb,bg,kg,jg],"html"),uu=gg([xg,Hb,bg,kg,jg],"svg");function Zb(e){return e.join(" ").trim()}var du={},cp=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,ek=/\n/g,tk=/^\s*/,nk=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,rk=/^:\s*/,ik=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,sk=/^[;\s]*/,ok=/^\s+|\s+$/g,ak=`
`,up="/",dp="*",qn="",lk="comment",ck="declaration";function uk(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(y){var w=y.match(ek);w&&(n+=w.length);var N=y.lastIndexOf(ak);r=~N?y.length-N:r+y.length}function o(){var y={line:n,column:r};return function(w){return w.position=new a(y),u(),w}}function a(y){this.start=y,this.end={line:n,column:r},this.source=t.source}a.prototype.content=e;function l(y){var w=new Error(t.source+":"+n+":"+r+": "+y);if(w.reason=y,w.filename=t.source,w.line=n,w.column=r,w.source=e,!t.silent)throw w}function c(y){var w=y.exec(e);if(w){var N=w[0];return i(N),e=e.slice(N.length),w}}function u(){c(tk)}function d(y){var w;for(y=y||[];w=p();)w!==!1&&y.push(w);return y}function p(){var y=o();if(!(up!=e.charAt(0)||dp!=e.charAt(1))){for(var w=2;qn!=e.charAt(w)&&(dp!=e.charAt(w)||up!=e.charAt(w+1));)++w;if(w+=2,qn===e.charAt(w-1))return l("End of comment missing");var N=e.slice(2,w-2);return r+=2,i(N),e=e.slice(w),r+=2,y({type:lk,comment:N})}}function f(){var y=o(),w=c(nk);if(w){if(p(),!c(rk))return l("property missing ':'");var N=c(ik),x=y({type:ck,property:pp(w[0].replace(cp,qn)),value:N?pp(N[0].replace(cp,qn)):qn});return c(sk),x}}function m(){var y=[];d(y);for(var w;w=f();)w!==!1&&(y.push(w),d(y));return y}return u(),m()}function pp(e){return e?e.replace(ok,qn):qn}var dk=uk,pk=Ws&&Ws.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(du,"__esModule",{value:!0});du.default=mk;const fk=pk(dk);function mk(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,fk.default)(e),i=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:a,value:l}=o;i?t(a,l,o):l&&(n=n||{},n[a]=l)}),n}var Ho={};Object.defineProperty(Ho,"__esModule",{value:!0});Ho.camelCase=void 0;var hk=/^--[a-zA-Z0-9_-]+$/,gk=/-([a-z])/g,xk=/^[^-]+$/,yk=/^-(webkit|moz|ms|o|khtml)-/,vk=/^-(ms)-/,bk=function(e){return!e||xk.test(e)||hk.test(e)},kk=function(e,t){return t.toUpperCase()},fp=function(e,t){return"".concat(t,"-")},jk=function(e,t){return t===void 0&&(t={}),bk(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(vk,fp):e=e.replace(yk,fp),e.replace(gk,kk))};Ho.camelCase=jk;var wk=Ws&&Ws.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},_k=wk(du),Sk=Ho;function Ql(e,t){var n={};return!e||typeof e!="string"||(0,_k.default)(e,function(r,i){r&&i&&(n[(0,Sk.camelCase)(r,t)]=i)}),n}Ql.default=Ql;var Ck=Ql;const Nk=_o(Ck),wg=_g("end"),pu=_g("start");function _g(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Ek(e){const t=pu(e),n=wg(e);if(t&&n)return{start:t,end:n}}function wi(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?mp(e.position):"start"in e||"end"in e?mp(e):"line"in e||"column"in e?Gl(e):""}function Gl(e){return hp(e&&e.line)+":"+hp(e&&e.column)}function mp(e){return Gl(e&&e.start)+"-"+Gl(e&&e.end)}function hp(e){return e&&typeof e=="number"?e:1}class tt extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},a=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(a=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?o.ruleId=r:(o.source=r.slice(0,c),o.ruleId=r.slice(c+1))}if(!o.place&&o.ancestors&&o.ancestors){const c=o.ancestors[o.ancestors.length-1];c&&(o.place=c.position)}const l=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=wi(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=a&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}tt.prototype.file="";tt.prototype.name="";tt.prototype.reason="";tt.prototype.message="";tt.prototype.stack="";tt.prototype.column=void 0;tt.prototype.line=void 0;tt.prototype.ancestors=void 0;tt.prototype.cause=void 0;tt.prototype.fatal=void 0;tt.prototype.place=void 0;tt.prototype.ruleId=void 0;tt.prototype.source=void 0;const fu={}.hasOwnProperty,zk=new Map,Tk=/[A-Z]/g,Pk=new Set(["table","tbody","thead","tfoot","tr"]),Lk=new Set(["td","th"]),Sg="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Ak(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=Bk(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Fk(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?uu:Xb,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=Cg(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function Cg(e,t,n){if(t.type==="element")return Rk(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return Ik(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return Ok(e,t,n);if(t.type==="mdxjsEsm")return Mk(e,t);if(t.type==="root")return $k(e,t,n);if(t.type==="text")return Dk(e,t)}function Rk(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=uu,e.schema=i),e.ancestors.push(t);const o=Eg(e,t.tagName,!1),a=Uk(e,t);let l=hu(e,t);return Pk.has(t.tagName)&&(l=l.filter(function(c){return typeof c=="string"?!Ub(c):!0})),Ng(e,a,o,t),mu(a,l),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function Ik(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Ji(e,t.position)}function Mk(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Ji(e,t.position)}function Ok(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=uu,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:Eg(e,t.name,!0),a=Vk(e,t),l=hu(e,t);return Ng(e,a,o,t),mu(a,l),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function $k(e,t,n){const r={};return mu(r,hu(e,t)),e.create(t,e.Fragment,r,n)}function Dk(e,t){return t.value}function Ng(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function mu(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function Fk(e,t,n){return r;function r(i,o,a,l){const u=Array.isArray(a.children)?n:t;return l?u(o,a,l):u(o,a)}}function Bk(e,t){return n;function n(r,i,o,a){const l=Array.isArray(o.children),c=pu(r);return t(i,o,a,l,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function Uk(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&fu.call(t.properties,i)){const o=Wk(e,i,t.properties[i]);if(o){const[a,l]=o;e.tableCellAlignToStyle&&a==="align"&&typeof l=="string"&&Lk.has(t.tagName)?r=l:n[a]=l}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function Vk(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const a=o.expression;a.type;const l=a.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument))}else Ji(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const l=r.value.data.estree.body[0];l.type,o=e.evaluater.evaluateExpression(l.expression)}else Ji(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function hu(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:zk;for(;++r<t.children.length;){const o=t.children[r];let a;if(e.passKeys){const c=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(c){const u=i.get(c)||0;a=c+"-"+u,i.set(c,u+1)}}const l=Cg(e,o,a);l!==void 0&&n.push(l)}return n}function Wk(e,t,n){const r=Qb(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Ob(n):Zb(n)),r.property==="style"){let i=typeof n=="object"?n:Hk(e,String(n));return e.stylePropertyNameCase==="css"&&(i=qk(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?qb[r.property]||r.property:r.attribute,n]}}function Hk(e,t){try{return Nk(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new tt("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Sg+"#cannot-parse-style-attribute",i}}function Eg(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,a;for(;++o<i.length;){const l=sp(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};a=a?{type:"MemberExpression",object:a,property:l,computed:!!(o&&l.type==="Literal"),optional:!1}:l}r=a}else r=sp(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return fu.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Ji(e)}function Ji(e,t){const n=new tt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Sg+"#cannot-handle-mdx-estrees-without-createevaluater",n}function qk(e){const t={};let n;for(n in e)fu.call(e,n)&&(t[Jk(n)]=e[n]);return t}function Jk(e){let t=e.replace(Tk,Kk);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function Kk(e){return"-"+e.toLowerCase()}const La={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Qk={};function Gk(e,t){const n=Qk,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return zg(e,r,i)}function zg(e,t,n){if(Yk(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return gp(e.children,t,n)}return Array.isArray(e)?gp(e,t,n):""}function gp(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=zg(e[i],t,n);return r.join("")}function Yk(e){return!!(e&&typeof e=="object")}const xp=document.createElement("i");function gu(e){const t="&"+e+";";xp.innerHTML=t;const n=xp.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Xt(e,t,n,r){const i=e.length;let o=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);o<r.length;)a=r.slice(o,o+1e4),a.unshift(t,0),e.splice(...a),o+=1e4,t+=1e4}function Tt(e,t){return e.length>0?(Xt(e,e.length,0,t),e):t}const yp={}.hasOwnProperty;function Xk(e){const t={};let n=-1;for(;++n<e.length;)Zk(t,e[n]);return t}function Zk(e,t){let n;for(n in t){const i=(yp.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let a;if(o)for(a in o){yp.call(i,a)||(i[a]=[]);const l=o[a];ej(i[a],Array.isArray(l)?l:l?[l]:[])}}}function ej(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Xt(e,0,0,r)}function Tg(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Ar(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Jt=Bn(/[A-Za-z]/),bt=Bn(/[\dA-Za-z]/),tj=Bn(/[#-'*+\--9=?A-Z^-~]/);function Yl(e){return e!==null&&(e<32||e===127)}const Xl=Bn(/\d/),nj=Bn(/[\dA-Fa-f]/),rj=Bn(/[!-/:-@[-`{-~]/);function de(e){return e!==null&&e<-2}function pt(e){return e!==null&&(e<0||e===32)}function be(e){return e===-2||e===-1||e===32}const ij=Bn(new RegExp("\\p{P}|\\p{S}","u")),sj=Bn(/\s/);function Bn(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Qr(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let a="";if(o===37&&bt(e.charCodeAt(n+1))&&bt(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(a=String.fromCharCode(o));else if(o>55295&&o<57344){const l=e.charCodeAt(n+1);o<56320&&l>56319&&l<57344?(a=String.fromCharCode(o,l),i=1):a="�"}else a=String.fromCharCode(o);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function Se(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return a;function a(c){return be(c)?(e.enter(n),l(c)):t(c)}function l(c){return be(c)&&o++<i?(e.consume(c),l):(e.exit(n),t(c))}}const oj={tokenize:aj};function aj(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),Se(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),o(l)}function o(l){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,a(l)}function a(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return de(l)?(e.consume(l),e.exit("chunkText"),o):(e.consume(l),a)}}const lj={tokenize:cj},vp={tokenize:uj};function cj(e){const t=this,n=[];let r=0,i,o,a;return l;function l(v){if(r<n.length){const L=n[r];return t.containerState=L[1],e.attempt(L[0].continuation,c,u)(v)}return u(v)}function c(v){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&h();const L=t.events.length;let S=L,g;for(;S--;)if(t.events[S][0]==="exit"&&t.events[S][1].type==="chunkFlow"){g=t.events[S][1].end;break}x(r);let b=L;for(;b<t.events.length;)t.events[b][1].end={...g},b++;return Xt(t.events,S+1,0,t.events.slice(L)),t.events.length=b,u(v)}return l(v)}function u(v){if(r===n.length){if(!i)return f(v);if(i.currentConstruct&&i.currentConstruct.concrete)return y(v);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(vp,d,p)(v)}function d(v){return i&&h(),x(r),f(v)}function p(v){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,y(v)}function f(v){return t.containerState={},e.attempt(vp,m,y)(v)}function m(v){return r++,n.push([t.currentConstruct,t.containerState]),f(v)}function y(v){if(v===null){i&&h(),x(0),e.consume(v);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),w(v)}function w(v){if(v===null){N(e.exit("chunkFlow"),!0),x(0),e.consume(v);return}return de(v)?(e.consume(v),N(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(v),w)}function N(v,L){const S=t.sliceStream(v);if(L&&S.push(null),v.previous=o,o&&(o.next=v),o=v,i.defineSkip(v.start),i.write(S),t.parser.lazy[v.start.line]){let g=i.events.length;for(;g--;)if(i.events[g][1].start.offset<a&&(!i.events[g][1].end||i.events[g][1].end.offset>a))return;const b=t.events.length;let P=b,R,E;for(;P--;)if(t.events[P][0]==="exit"&&t.events[P][1].type==="chunkFlow"){if(R){E=t.events[P][1].end;break}R=!0}for(x(r),g=b;g<t.events.length;)t.events[g][1].end={...E},g++;Xt(t.events,P+1,0,t.events.slice(b)),t.events.length=g}}function x(v){let L=n.length;for(;L-- >v;){const S=n[L];t.containerState=S[1],S[0].exit.call(t,e)}n.length=v}function h(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function uj(e,t,n){return Se(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function bp(e){if(e===null||pt(e)||sj(e))return 1;if(ij(e))return 2}function xu(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const Zl={name:"attention",resolveAll:dj,tokenize:pj};function dj(e,t){let n=-1,r,i,o,a,l,c,u,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p={...e[r][1].end},f={...e[n][1].start};kp(p,-c),kp(f,c),a={type:c>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},l={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},o={type:c>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?"strong":"emphasis",start:{...a.start},end:{...l.end}},e[r][1].end={...a.start},e[n][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=Tt(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=Tt(u,[["enter",i,t],["enter",a,t],["exit",a,t],["enter",o,t]]),u=Tt(u,xu(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=Tt(u,[["exit",o,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,u=Tt(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,Xt(e,r-1,n-r+3,u),n=r+u.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function pj(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=bp(r);let o;return a;function a(c){return o=c,e.enter("attentionSequence"),l(c)}function l(c){if(c===o)return e.consume(c),l;const u=e.exit("attentionSequence"),d=bp(c),p=!d||d===2&&i||n.includes(c),f=!i||i===2&&d||n.includes(r);return u._open=!!(o===42?p:p&&(i||!f)),u._close=!!(o===42?f:f&&(d||!p)),t(c)}}function kp(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const fj={name:"autolink",tokenize:mj};function mj(e,t,n){let r=0;return i;function i(m){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(m){return Jt(m)?(e.consume(m),a):m===64?n(m):u(m)}function a(m){return m===43||m===45||m===46||bt(m)?(r=1,l(m)):u(m)}function l(m){return m===58?(e.consume(m),r=0,c):(m===43||m===45||m===46||bt(m))&&r++<32?(e.consume(m),l):(r=0,u(m))}function c(m){return m===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):m===null||m===32||m===60||Yl(m)?n(m):(e.consume(m),c)}function u(m){return m===64?(e.consume(m),d):tj(m)?(e.consume(m),u):n(m)}function d(m){return bt(m)?p(m):n(m)}function p(m){return m===46?(e.consume(m),r=0,d):m===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):f(m)}function f(m){if((m===45||bt(m))&&r++<63){const y=m===45?f:p;return e.consume(m),y}return n(m)}}const qo={partial:!0,tokenize:hj};function hj(e,t,n){return r;function r(o){return be(o)?Se(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||de(o)?t(o):n(o)}}const Pg={continuation:{tokenize:xj},exit:yj,name:"blockQuote",tokenize:gj};function gj(e,t,n){const r=this;return i;function i(a){if(a===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),o}return n(a)}function o(a){return be(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function xj(e,t,n){const r=this;return i;function i(a){return be(a)?Se(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):o(a)}function o(a){return e.attempt(Pg,t,n)(a)}}function yj(e){e.exit("blockQuote")}const Lg={name:"characterEscape",tokenize:vj};function vj(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return rj(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const Ag={name:"characterReference",tokenize:bj};function bj(e,t,n){const r=this;let i=0,o,a;return l;function l(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),c}function c(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,a=bt,d(p))}function u(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,a=nj,d):(e.enter("characterReferenceValue"),o=7,a=Xl,d(p))}function d(p){if(p===59&&i){const f=e.exit("characterReferenceValue");return a===bt&&!gu(r.sliceSerialize(f))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(p)&&i++<o?(e.consume(p),d):n(p)}}const jp={partial:!0,tokenize:jj},wp={concrete:!0,name:"codeFenced",tokenize:kj};function kj(e,t,n){const r=this,i={partial:!0,tokenize:S};let o=0,a=0,l;return c;function c(g){return u(g)}function u(g){const b=r.events[r.events.length-1];return o=b&&b[1].type==="linePrefix"?b[2].sliceSerialize(b[1],!0).length:0,l=g,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(g)}function d(g){return g===l?(a++,e.consume(g),d):a<3?n(g):(e.exit("codeFencedFenceSequence"),be(g)?Se(e,p,"whitespace")(g):p(g))}function p(g){return g===null||de(g)?(e.exit("codeFencedFence"),r.interrupt?t(g):e.check(jp,w,L)(g)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(g))}function f(g){return g===null||de(g)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(g)):be(g)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Se(e,m,"whitespace")(g)):g===96&&g===l?n(g):(e.consume(g),f)}function m(g){return g===null||de(g)?p(g):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),y(g))}function y(g){return g===null||de(g)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(g)):g===96&&g===l?n(g):(e.consume(g),y)}function w(g){return e.attempt(i,L,N)(g)}function N(g){return e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),x}function x(g){return o>0&&be(g)?Se(e,h,"linePrefix",o+1)(g):h(g)}function h(g){return g===null||de(g)?e.check(jp,w,L)(g):(e.enter("codeFlowValue"),v(g))}function v(g){return g===null||de(g)?(e.exit("codeFlowValue"),h(g)):(e.consume(g),v)}function L(g){return e.exit("codeFenced"),t(g)}function S(g,b,P){let R=0;return E;function E(F){return g.enter("lineEnding"),g.consume(F),g.exit("lineEnding"),j}function j(F){return g.enter("codeFencedFence"),be(F)?Se(g,T,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(F):T(F)}function T(F){return F===l?(g.enter("codeFencedFenceSequence"),M(F)):P(F)}function M(F){return F===l?(R++,g.consume(F),M):R>=a?(g.exit("codeFencedFenceSequence"),be(F)?Se(g,V,"whitespace")(F):V(F)):P(F)}function V(F){return F===null||de(F)?(g.exit("codeFencedFence"),b(F)):P(F)}}}function jj(e,t,n){const r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}const Aa={name:"codeIndented",tokenize:_j},wj={partial:!0,tokenize:Sj};function _j(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),Se(e,o,"linePrefix",5)(u)}function o(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?a(u):n(u)}function a(u){return u===null?c(u):de(u)?e.attempt(wj,a,c)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||de(u)?(e.exit("codeFlowValue"),a(u)):(e.consume(u),l)}function c(u){return e.exit("codeIndented"),t(u)}}function Sj(e,t,n){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):de(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):Se(e,o,"linePrefix",5)(a)}function o(a){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):de(a)?i(a):n(a)}}const Cj={name:"codeText",previous:Ej,resolve:Nj,tokenize:zj};function Nj(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Ej(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function zj(e,t,n){let r=0,i,o;return a;function a(p){return e.enter("codeText"),e.enter("codeTextSequence"),l(p)}function l(p){return p===96?(e.consume(p),r++,l):(e.exit("codeTextSequence"),c(p))}function c(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),c):p===96?(o=e.enter("codeTextSequence"),i=0,d(p)):de(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),c):(e.enter("codeTextData"),u(p))}function u(p){return p===null||p===32||p===96||de(p)?(e.exit("codeTextData"),c(p)):(e.consume(p),u)}function d(p){return p===96?(e.consume(p),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(o.type="codeTextData",u(p))}}class Tj{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&ii(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),ii(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),ii(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);ii(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);ii(this.left,n.reverse())}}}function ii(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Rg(e){const t={};let n=-1,r,i,o,a,l,c,u;const d=new Tj(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,o=0,o<c.length&&c[o][1].type==="lineEndingBlank"&&(o+=2),o<c.length&&c[o][1].type==="content"))for(;++o<c.length&&c[o][1].type!=="content";)c[o][1].type==="chunkText"&&(c[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Pj(d,n)),n=t[n],u=!0);else if(r[1]._container){for(o=n,i=void 0;o--;)if(a=d.get(o),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=o);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},l=d.slice(i,n),l.unshift(r),d.splice(i,n-i+1,l))}}return Xt(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function Pj(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const o=[];let a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const l=a.events,c=[],u={};let d,p,f=-1,m=n,y=0,w=0;const N=[w];for(;m;){for(;e.get(++i)[1]!==m;);o.push(i),m._tokenizer||(d=r.sliceStream(m),m.next||d.push(null),p&&a.defineSkip(m.start),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),p=m,m=m.next}for(m=n;++f<l.length;)l[f][0]==="exit"&&l[f-1][0]==="enter"&&l[f][1].type===l[f-1][1].type&&l[f][1].start.line!==l[f][1].end.line&&(w=f+1,N.push(w),m._tokenizer=void 0,m.previous=void 0,m=m.next);for(a.events=[],m?(m._tokenizer=void 0,m.previous=void 0):N.pop(),f=N.length;f--;){const x=l.slice(N[f],N[f+1]),h=o.pop();c.push([h,h+x.length-1]),e.splice(h,2,x)}for(c.reverse(),f=-1;++f<c.length;)u[y+c[f][0]]=y+c[f][1],y+=c[f][1]-c[f][0]-1;return u}const Lj={resolve:Rj,tokenize:Ij},Aj={partial:!0,tokenize:Mj};function Rj(e){return Rg(e),e}function Ij(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?o(l):de(l)?e.check(Aj,a,o)(l):(e.consume(l),i)}function o(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function a(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function Mj(e,t,n){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),Se(e,o,"linePrefix")}function o(a){if(a===null||de(a))return n(a);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function Ig(e,t,n,r,i,o,a,l,c){const u=c||Number.POSITIVE_INFINITY;let d=0;return p;function p(x){return x===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(x),e.exit(o),f):x===null||x===32||x===41||Yl(x)?n(x):(e.enter(r),e.enter(a),e.enter(l),e.enter("chunkString",{contentType:"string"}),w(x))}function f(x){return x===62?(e.enter(o),e.consume(x),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),m(x))}function m(x){return x===62?(e.exit("chunkString"),e.exit(l),f(x)):x===null||x===60||de(x)?n(x):(e.consume(x),x===92?y:m)}function y(x){return x===60||x===62||x===92?(e.consume(x),m):m(x)}function w(x){return!d&&(x===null||x===41||pt(x))?(e.exit("chunkString"),e.exit(l),e.exit(a),e.exit(r),t(x)):d<u&&x===40?(e.consume(x),d++,w):x===41?(e.consume(x),d--,w):x===null||x===32||x===40||Yl(x)?n(x):(e.consume(x),x===92?N:w)}function N(x){return x===40||x===41||x===92?(e.consume(x),w):w(x)}}function Mg(e,t,n,r,i,o){const a=this;let l=0,c;return u;function u(m){return e.enter(r),e.enter(i),e.consume(m),e.exit(i),e.enter(o),d}function d(m){return l>999||m===null||m===91||m===93&&!c||m===94&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?n(m):m===93?(e.exit(o),e.enter(i),e.consume(m),e.exit(i),e.exit(r),t):de(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),p(m))}function p(m){return m===null||m===91||m===93||de(m)||l++>999?(e.exit("chunkString"),d(m)):(e.consume(m),c||(c=!be(m)),m===92?f:p)}function f(m){return m===91||m===92||m===93?(e.consume(m),l++,p):p(m)}}function Og(e,t,n,r,i,o){let a;return l;function l(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),a=f===40?41:f,c):n(f)}function c(f){return f===a?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(o),u(f))}function u(f){return f===a?(e.exit(o),c(a)):f===null?n(f):de(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),Se(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===a||f===null||de(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?p:d)}function p(f){return f===a||f===92?(e.consume(f),d):d(f)}}function _i(e,t){let n;return r;function r(i){return de(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):be(i)?Se(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const Oj={name:"definition",tokenize:Dj},$j={partial:!0,tokenize:Fj};function Dj(e,t,n){const r=this;let i;return o;function o(m){return e.enter("definition"),a(m)}function a(m){return Mg.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(m)}function l(m){return i=Ar(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),m===58?(e.enter("definitionMarker"),e.consume(m),e.exit("definitionMarker"),c):n(m)}function c(m){return pt(m)?_i(e,u)(m):u(m)}function u(m){return Ig(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(m)}function d(m){return e.attempt($j,p,p)(m)}function p(m){return be(m)?Se(e,f,"whitespace")(m):f(m)}function f(m){return m===null||de(m)?(e.exit("definition"),r.parser.defined.push(i),t(m)):n(m)}}function Fj(e,t,n){return r;function r(l){return pt(l)?_i(e,i)(l):n(l)}function i(l){return Og(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function o(l){return be(l)?Se(e,a,"whitespace")(l):a(l)}function a(l){return l===null||de(l)?t(l):n(l)}}const Bj={name:"hardBreakEscape",tokenize:Uj};function Uj(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return de(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const Vj={name:"headingAtx",resolve:Wj,tokenize:Hj};function Wj(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Xt(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function Hj(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),o(d)}function o(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&r++<6?(e.consume(d),a):d===null||pt(d)?(e.exit("atxHeadingSequence"),l(d)):n(d)}function l(d){return d===35?(e.enter("atxHeadingSequence"),c(d)):d===null||de(d)?(e.exit("atxHeading"),t(d)):be(d)?Se(e,l,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function c(d){return d===35?(e.consume(d),c):(e.exit("atxHeadingSequence"),l(d))}function u(d){return d===null||d===35||pt(d)?(e.exit("atxHeadingText"),l(d)):(e.consume(d),u)}}const qj=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],_p=["pre","script","style","textarea"],Jj={concrete:!0,name:"htmlFlow",resolveTo:Gj,tokenize:Yj},Kj={partial:!0,tokenize:Zj},Qj={partial:!0,tokenize:Xj};function Gj(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Yj(e,t,n){const r=this;let i,o,a,l,c;return u;function u(C){return d(C)}function d(C){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(C),p}function p(C){return C===33?(e.consume(C),f):C===47?(e.consume(C),o=!0,w):C===63?(e.consume(C),i=3,r.interrupt?t:k):Jt(C)?(e.consume(C),a=String.fromCharCode(C),N):n(C)}function f(C){return C===45?(e.consume(C),i=2,m):C===91?(e.consume(C),i=5,l=0,y):Jt(C)?(e.consume(C),i=4,r.interrupt?t:k):n(C)}function m(C){return C===45?(e.consume(C),r.interrupt?t:k):n(C)}function y(C){const le="CDATA[";return C===le.charCodeAt(l++)?(e.consume(C),l===le.length?r.interrupt?t:T:y):n(C)}function w(C){return Jt(C)?(e.consume(C),a=String.fromCharCode(C),N):n(C)}function N(C){if(C===null||C===47||C===62||pt(C)){const le=C===47,A=a.toLowerCase();return!le&&!o&&_p.includes(A)?(i=1,r.interrupt?t(C):T(C)):qj.includes(a.toLowerCase())?(i=6,le?(e.consume(C),x):r.interrupt?t(C):T(C)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(C):o?h(C):v(C))}return C===45||bt(C)?(e.consume(C),a+=String.fromCharCode(C),N):n(C)}function x(C){return C===62?(e.consume(C),r.interrupt?t:T):n(C)}function h(C){return be(C)?(e.consume(C),h):E(C)}function v(C){return C===47?(e.consume(C),E):C===58||C===95||Jt(C)?(e.consume(C),L):be(C)?(e.consume(C),v):E(C)}function L(C){return C===45||C===46||C===58||C===95||bt(C)?(e.consume(C),L):S(C)}function S(C){return C===61?(e.consume(C),g):be(C)?(e.consume(C),S):v(C)}function g(C){return C===null||C===60||C===61||C===62||C===96?n(C):C===34||C===39?(e.consume(C),c=C,b):be(C)?(e.consume(C),g):P(C)}function b(C){return C===c?(e.consume(C),c=null,R):C===null||de(C)?n(C):(e.consume(C),b)}function P(C){return C===null||C===34||C===39||C===47||C===60||C===61||C===62||C===96||pt(C)?S(C):(e.consume(C),P)}function R(C){return C===47||C===62||be(C)?v(C):n(C)}function E(C){return C===62?(e.consume(C),j):n(C)}function j(C){return C===null||de(C)?T(C):be(C)?(e.consume(C),j):n(C)}function T(C){return C===45&&i===2?(e.consume(C),X):C===60&&i===1?(e.consume(C),z):C===62&&i===4?(e.consume(C),U):C===63&&i===3?(e.consume(C),k):C===93&&i===5?(e.consume(C),I):de(C)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(Kj,K,M)(C)):C===null||de(C)?(e.exit("htmlFlowData"),M(C)):(e.consume(C),T)}function M(C){return e.check(Qj,V,K)(C)}function V(C){return e.enter("lineEnding"),e.consume(C),e.exit("lineEnding"),F}function F(C){return C===null||de(C)?M(C):(e.enter("htmlFlowData"),T(C))}function X(C){return C===45?(e.consume(C),k):T(C)}function z(C){return C===47?(e.consume(C),a="",O):T(C)}function O(C){if(C===62){const le=a.toLowerCase();return _p.includes(le)?(e.consume(C),U):T(C)}return Jt(C)&&a.length<8?(e.consume(C),a+=String.fromCharCode(C),O):T(C)}function I(C){return C===93?(e.consume(C),k):T(C)}function k(C){return C===62?(e.consume(C),U):C===45&&i===2?(e.consume(C),k):T(C)}function U(C){return C===null||de(C)?(e.exit("htmlFlowData"),K(C)):(e.consume(C),U)}function K(C){return e.exit("htmlFlow"),t(C)}}function Xj(e,t,n){const r=this;return i;function i(a){return de(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o):n(a)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function Zj(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(qo,t,n)}}const ew={name:"htmlText",tokenize:tw};function tw(e,t,n){const r=this;let i,o,a;return l;function l(k){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(k),c}function c(k){return k===33?(e.consume(k),u):k===47?(e.consume(k),S):k===63?(e.consume(k),v):Jt(k)?(e.consume(k),P):n(k)}function u(k){return k===45?(e.consume(k),d):k===91?(e.consume(k),o=0,y):Jt(k)?(e.consume(k),h):n(k)}function d(k){return k===45?(e.consume(k),m):n(k)}function p(k){return k===null?n(k):k===45?(e.consume(k),f):de(k)?(a=p,z(k)):(e.consume(k),p)}function f(k){return k===45?(e.consume(k),m):p(k)}function m(k){return k===62?X(k):k===45?f(k):p(k)}function y(k){const U="CDATA[";return k===U.charCodeAt(o++)?(e.consume(k),o===U.length?w:y):n(k)}function w(k){return k===null?n(k):k===93?(e.consume(k),N):de(k)?(a=w,z(k)):(e.consume(k),w)}function N(k){return k===93?(e.consume(k),x):w(k)}function x(k){return k===62?X(k):k===93?(e.consume(k),x):w(k)}function h(k){return k===null||k===62?X(k):de(k)?(a=h,z(k)):(e.consume(k),h)}function v(k){return k===null?n(k):k===63?(e.consume(k),L):de(k)?(a=v,z(k)):(e.consume(k),v)}function L(k){return k===62?X(k):v(k)}function S(k){return Jt(k)?(e.consume(k),g):n(k)}function g(k){return k===45||bt(k)?(e.consume(k),g):b(k)}function b(k){return de(k)?(a=b,z(k)):be(k)?(e.consume(k),b):X(k)}function P(k){return k===45||bt(k)?(e.consume(k),P):k===47||k===62||pt(k)?R(k):n(k)}function R(k){return k===47?(e.consume(k),X):k===58||k===95||Jt(k)?(e.consume(k),E):de(k)?(a=R,z(k)):be(k)?(e.consume(k),R):X(k)}function E(k){return k===45||k===46||k===58||k===95||bt(k)?(e.consume(k),E):j(k)}function j(k){return k===61?(e.consume(k),T):de(k)?(a=j,z(k)):be(k)?(e.consume(k),j):R(k)}function T(k){return k===null||k===60||k===61||k===62||k===96?n(k):k===34||k===39?(e.consume(k),i=k,M):de(k)?(a=T,z(k)):be(k)?(e.consume(k),T):(e.consume(k),V)}function M(k){return k===i?(e.consume(k),i=void 0,F):k===null?n(k):de(k)?(a=M,z(k)):(e.consume(k),M)}function V(k){return k===null||k===34||k===39||k===60||k===61||k===96?n(k):k===47||k===62||pt(k)?R(k):(e.consume(k),V)}function F(k){return k===47||k===62||pt(k)?R(k):n(k)}function X(k){return k===62?(e.consume(k),e.exit("htmlTextData"),e.exit("htmlText"),t):n(k)}function z(k){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),O}function O(k){return be(k)?Se(e,I,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(k):I(k)}function I(k){return e.enter("htmlTextData"),a(k)}}const yu={name:"labelEnd",resolveAll:sw,resolveTo:ow,tokenize:aw},nw={tokenize:lw},rw={tokenize:cw},iw={tokenize:uw};function sw(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&Xt(e,0,e.length,n),e}function ow(e,t){let n=e.length,r=0,i,o,a,l;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(a){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=n);const c={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[o][1].start},end:{...e[a][1].end}},d={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[a-2][1].start}};return l=[["enter",c,t],["enter",u,t]],l=Tt(l,e.slice(o+1,o+r+3)),l=Tt(l,[["enter",d,t]]),l=Tt(l,xu(t.parser.constructs.insideSpan.null,e.slice(o+r+4,a-3),t)),l=Tt(l,[["exit",d,t],e[a-2],e[a-1],["exit",u,t]]),l=Tt(l,e.slice(a+1)),l=Tt(l,[["exit",c,t]]),Xt(e,o,e.length,l),e}function aw(e,t,n){const r=this;let i=r.events.length,o,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return l;function l(f){return o?o._inactive?p(f):(a=r.parser.defined.includes(Ar(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),c):n(f)}function c(f){return f===40?e.attempt(nw,d,a?d:p)(f):f===91?e.attempt(rw,d,a?u:p)(f):a?d(f):p(f)}function u(f){return e.attempt(iw,d,p)(f)}function d(f){return t(f)}function p(f){return o._balanced=!0,n(f)}}function lw(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),i}function i(p){return pt(p)?_i(e,o)(p):o(p)}function o(p){return p===41?d(p):Ig(e,a,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function a(p){return pt(p)?_i(e,c)(p):d(p)}function l(p){return n(p)}function c(p){return p===34||p===39||p===40?Og(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function u(p){return pt(p)?_i(e,d)(p):d(p)}function d(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function cw(e,t,n){const r=this;return i;function i(l){return Mg.call(r,e,o,a,"reference","referenceMarker","referenceString")(l)}function o(l){return r.parser.defined.includes(Ar(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function a(l){return n(l)}}function uw(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const dw={name:"labelStartImage",resolveAll:yu.resolveAll,tokenize:pw};function pw(e,t,n){const r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),o}function o(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),a):n(l)}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const fw={name:"labelStartLink",resolveAll:yu.resolveAll,tokenize:mw};function mw(e,t,n){const r=this;return i;function i(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),o}function o(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const Ra={name:"lineEnding",tokenize:hw};function hw(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Se(e,t,"linePrefix")}}const Us={name:"thematicBreak",tokenize:gw};function gw(e,t,n){let r=0,i;return o;function o(u){return e.enter("thematicBreak"),a(u)}function a(u){return i=u,l(u)}function l(u){return u===i?(e.enter("thematicBreakSequence"),c(u)):r>=3&&(u===null||de(u))?(e.exit("thematicBreak"),t(u)):n(u)}function c(u){return u===i?(e.consume(u),r++,c):(e.exit("thematicBreakSequence"),be(u)?Se(e,l,"whitespace")(u):l(u))}}const ot={continuation:{tokenize:bw},exit:jw,name:"list",tokenize:vw},xw={partial:!0,tokenize:ww},yw={partial:!0,tokenize:kw};function vw(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return l;function l(m){const y=r.containerState.type||(m===42||m===43||m===45?"listUnordered":"listOrdered");if(y==="listUnordered"?!r.containerState.marker||m===r.containerState.marker:Xl(m)){if(r.containerState.type||(r.containerState.type=y,e.enter(y,{_container:!0})),y==="listUnordered")return e.enter("listItemPrefix"),m===42||m===45?e.check(Us,n,u)(m):u(m);if(!r.interrupt||m===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(m)}return n(m)}function c(m){return Xl(m)&&++a<10?(e.consume(m),c):(!r.interrupt||a<2)&&(r.containerState.marker?m===r.containerState.marker:m===41||m===46)?(e.exit("listItemValue"),u(m)):n(m)}function u(m){return e.enter("listItemMarker"),e.consume(m),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||m,e.check(qo,r.interrupt?n:d,e.attempt(xw,f,p))}function d(m){return r.containerState.initialBlankLine=!0,o++,f(m)}function p(m){return be(m)?(e.enter("listItemPrefixWhitespace"),e.consume(m),e.exit("listItemPrefixWhitespace"),f):n(m)}function f(m){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(m)}}function bw(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(qo,i,o);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Se(e,t,"listItemIndent",r.containerState.size+1)(l)}function o(l){return r.containerState.furtherBlankLines||!be(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(yw,t,a)(l))}function a(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,Se(e,e.attempt(ot,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function kw(e,t,n){const r=this;return Se(e,i,"listItemIndent",r.containerState.size+1);function i(o){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(o):n(o)}}function jw(e){e.exit(this.containerState.type)}function ww(e,t,n){const r=this;return Se(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const a=r.events[r.events.length-1];return!be(o)&&a&&a[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const Sp={name:"setextUnderline",resolveTo:_w,tokenize:Sw};function _w(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",a,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=a,e.push(["exit",a,t]),e}function Sw(e,t,n){const r=this;let i;return o;function o(u){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),i=u,a(u)):n(u)}function a(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===i?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),be(u)?Se(e,c,"lineSuffix")(u):c(u))}function c(u){return u===null||de(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const Cw={tokenize:Nw};function Nw(e){const t=this,n=e.attempt(qo,r,e.attempt(this.parser.constructs.flowInitial,i,Se(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Lj,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const Ew={resolveAll:Dg()},zw=$g("string"),Tw=$g("text");function $g(e){return{resolveAll:Dg(e==="text"?Pw:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,a,l);return a;function a(d){return u(d)?o(d):l(d)}function l(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),c}function c(d){return u(d)?(n.exit("data"),o(d)):(n.consume(d),c)}function u(d){if(d===null)return!0;const p=i[d];let f=-1;if(p)for(;++f<p.length;){const m=p[f];if(!m.previous||m.previous.call(r,r.previous))return!0}return!1}}}function Dg(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function Pw(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,a=-1,l=0,c;for(;o--;){const u=i[o];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)l++,a--;if(a)break;a=-1}else if(u===-2)c=!0,l++;else if(u!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){const u={type:n===e.length||c||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?a:r.start._bufferIndex+a,_index:r.start._index+o,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const Lw={42:ot,43:ot,45:ot,48:ot,49:ot,50:ot,51:ot,52:ot,53:ot,54:ot,55:ot,56:ot,57:ot,62:Pg},Aw={91:Oj},Rw={[-2]:Aa,[-1]:Aa,32:Aa},Iw={35:Vj,42:Us,45:[Sp,Us],60:Jj,61:Sp,95:Us,96:wp,126:wp},Mw={38:Ag,92:Lg},Ow={[-5]:Ra,[-4]:Ra,[-3]:Ra,33:dw,38:Ag,42:Zl,60:[fj,ew],91:fw,92:[Bj,Lg],93:yu,95:Zl,96:Cj},$w={null:[Zl,Ew]},Dw={null:[42,95]},Fw={null:[]},Bw=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Dw,contentInitial:Aw,disable:Fw,document:Lw,flow:Iw,flowInitial:Rw,insideSpan:$w,string:Mw,text:Ow},Symbol.toStringTag,{value:"Module"}));function Uw(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},o=[];let a=[],l=[];const c={attempt:b(S),check:b(g),consume:h,enter:v,exit:L,interrupt:b(g,{interrupt:!0})},u={code:null,containerState:{},defineSkip:w,events:[],now:y,parser:e,previous:null,sliceSerialize:f,sliceStream:m,write:p};let d=t.tokenize.call(u,c);return t.resolveAll&&o.push(t),u;function p(j){return a=Tt(a,j),N(),a[a.length-1]!==null?[]:(P(t,0),u.events=xu(o,u.events,u),u.events)}function f(j,T){return Ww(m(j),T)}function m(j){return Vw(a,j)}function y(){const{_bufferIndex:j,_index:T,line:M,column:V,offset:F}=r;return{_bufferIndex:j,_index:T,line:M,column:V,offset:F}}function w(j){i[j.line]=j.column,E()}function N(){let j;for(;r._index<a.length;){const T=a[r._index];if(typeof T=="string")for(j=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===j&&r._bufferIndex<T.length;)x(T.charCodeAt(r._bufferIndex));else x(T)}}function x(j){d=d(j)}function h(j){de(j)?(r.line++,r.column=1,r.offset+=j===-3?2:1,E()):j!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=j}function v(j,T){const M=T||{};return M.type=j,M.start=y(),u.events.push(["enter",M,u]),l.push(M),M}function L(j){const T=l.pop();return T.end=y(),u.events.push(["exit",T,u]),T}function S(j,T){P(j,T.from)}function g(j,T){T.restore()}function b(j,T){return M;function M(V,F,X){let z,O,I,k;return Array.isArray(V)?K(V):"tokenize"in V?K([V]):U(V);function U(Z){return B;function B(te){const ae=te!==null&&Z[te],$=te!==null&&Z.null,q=[...Array.isArray(ae)?ae:ae?[ae]:[],...Array.isArray($)?$:$?[$]:[]];return K(q)(te)}}function K(Z){return z=Z,O=0,Z.length===0?X:C(Z[O])}function C(Z){return B;function B(te){return k=R(),I=Z,Z.partial||(u.currentConstruct=Z),Z.name&&u.parser.constructs.disable.null.includes(Z.name)?A():Z.tokenize.call(T?Object.assign(Object.create(u),T):u,c,le,A)(te)}}function le(Z){return j(I,k),F}function A(Z){return k.restore(),++O<z.length?C(z[O]):X}}}function P(j,T){j.resolveAll&&!o.includes(j)&&o.push(j),j.resolve&&Xt(u.events,T,u.events.length-T,j.resolve(u.events.slice(T),u)),j.resolveTo&&(u.events=j.resolveTo(u.events,u))}function R(){const j=y(),T=u.previous,M=u.currentConstruct,V=u.events.length,F=Array.from(l);return{from:V,restore:X};function X(){r=j,u.previous=T,u.currentConstruct=M,u.events.length=V,l=F,E()}}function E(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function Vw(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let a;if(n===i)a=[e[n].slice(r,o)];else{if(a=e.slice(n,i),r>-1){const l=a[0];typeof l=="string"?a[0]=l.slice(r):a.shift()}o>0&&a.push(e[i].slice(0,o))}return a}function Ww(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let a;if(typeof o=="string")a=o;else switch(o){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(o)}i=o===-2,r.push(a)}return r.join("")}function Hw(e){const r={constructs:Xk([Bw,...(e||{}).extensions||[]]),content:i(oj),defined:[],document:i(lj),flow:i(Cw),lazy:{},string:i(zw),text:i(Tw)};return r;function i(o){return a;function a(l){return Uw(r,o,l)}}}function qw(e){for(;!Rg(e););return e}const Cp=/[\0\t\n\r]/g;function Jw(){let e=1,t="",n=!0,r;return i;function i(o,a,l){const c=[];let u,d,p,f,m;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(a||void 0).decode(o)),p=0,t="",n&&(o.charCodeAt(0)===65279&&p++,n=void 0);p<o.length;){if(Cp.lastIndex=p,u=Cp.exec(o),f=u&&u.index!==void 0?u.index:o.length,m=o.charCodeAt(f),!u){t=o.slice(p);break}if(m===10&&p===f&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),p<f&&(c.push(o.slice(p,f)),e+=f-p),m){case 0:{c.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,c.push(-2);e++<d;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}p=f+1}return l&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const Kw=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Qw(e){return e.replace(Kw,Gw)}function Gw(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return Tg(n.slice(o?2:1),o?16:10)}return gu(n)||e}const Fg={}.hasOwnProperty;function Yw(e,t,n){return typeof t!="string"&&(n=t,t=void 0),Xw(n)(qw(Hw(n).document().write(Jw()(e,t,!0))))}function Xw(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(Te),autolinkProtocol:R,autolinkEmail:R,atxHeading:o(ce),blockQuote:o($),characterEscape:R,characterReference:R,codeFenced:o(q),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:o(q,a),codeText:o(J,a),codeTextData:R,data:R,codeFlowValue:R,definition:o(G),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:o(ne),hardBreakEscape:o(Ce),hardBreakTrailing:o(Ce),htmlFlow:o(W,a),htmlFlowData:R,htmlText:o(W,a),htmlTextData:R,image:o(he),label:a,link:o(Te),listItem:o(fn),listItemValue:f,listOrdered:o(mt,p),listUnordered:o(mt),paragraph:o(Go),reference:C,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:o(ce),strong:o(Yo),thematicBreak:o(os)},exit:{atxHeading:c(),atxHeadingSequence:S,autolink:c(),autolinkEmail:ae,autolinkProtocol:te,blockQuote:c(),characterEscapeValue:E,characterReferenceMarkerHexadecimal:A,characterReferenceMarkerNumeric:A,characterReferenceValue:Z,characterReference:B,codeFenced:c(N),codeFencedFence:w,codeFencedFenceInfo:m,codeFencedFenceMeta:y,codeFlowValue:E,codeIndented:c(x),codeText:c(F),codeTextData:E,data:E,definition:c(),definitionDestinationString:L,definitionLabelString:h,definitionTitleString:v,emphasis:c(),hardBreakEscape:c(T),hardBreakTrailing:c(T),htmlFlow:c(M),htmlFlowData:E,htmlText:c(V),htmlTextData:E,image:c(z),label:I,labelText:O,lineEnding:j,link:c(X),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:le,resourceDestinationString:k,resourceTitleString:U,resource:K,setextHeading:c(P),setextHeadingLineSequence:b,setextHeadingText:g,strong:c(),thematicBreak:c()}};Bg(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(H){let ee={type:"root",children:[]};const pe={stack:[ee],tokenStack:[],config:t,enter:l,exit:u,buffer:a,resume:d,data:n},ge=[];let ke=-1;for(;++ke<H.length;)if(H[ke][1].type==="listOrdered"||H[ke][1].type==="listUnordered")if(H[ke][0]==="enter")ge.push(ke);else{const ht=ge.pop();ke=i(H,ht,ke)}for(ke=-1;++ke<H.length;){const ht=t[H[ke][0]];Fg.call(ht,H[ke][1].type)&&ht[H[ke][1].type].call(Object.assign({sliceSerialize:H[ke][2].sliceSerialize},pe),H[ke][1])}if(pe.tokenStack.length>0){const ht=pe.tokenStack[pe.tokenStack.length-1];(ht[1]||Np).call(pe,void 0,ht[0])}for(ee.position={start:hn(H.length>0?H[0][1].start:{line:1,column:1,offset:0}),end:hn(H.length>0?H[H.length-2][1].end:{line:1,column:1,offset:0})},ke=-1;++ke<t.transforms.length;)ee=t.transforms[ke](ee)||ee;return ee}function i(H,ee,pe){let ge=ee-1,ke=-1,ht=!1,Zt,St,D,ie;for(;++ge<=pe;){const se=H[ge];switch(se[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{se[0]==="enter"?ke++:ke--,ie=void 0;break}case"lineEndingBlank":{se[0]==="enter"&&(Zt&&!ie&&!ke&&!D&&(D=ge),ie=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:ie=void 0}if(!ke&&se[0]==="enter"&&se[1].type==="listItemPrefix"||ke===-1&&se[0]==="exit"&&(se[1].type==="listUnordered"||se[1].type==="listOrdered")){if(Zt){let ue=ge;for(St=void 0;ue--;){const me=H[ue];if(me[1].type==="lineEnding"||me[1].type==="lineEndingBlank"){if(me[0]==="exit")continue;St&&(H[St][1].type="lineEndingBlank",ht=!0),me[1].type="lineEnding",St=ue}else if(!(me[1].type==="linePrefix"||me[1].type==="blockQuotePrefix"||me[1].type==="blockQuotePrefixWhitespace"||me[1].type==="blockQuoteMarker"||me[1].type==="listItemIndent"))break}D&&(!St||D<St)&&(Zt._spread=!0),Zt.end=Object.assign({},St?H[St][1].start:se[1].end),H.splice(St||ge,0,["exit",Zt,se[2]]),ge++,pe++}if(se[1].type==="listItemPrefix"){const ue={type:"listItem",_spread:!1,start:Object.assign({},se[1].start),end:void 0};Zt=ue,H.splice(ge,0,["enter",ue,se[2]]),ge++,pe++,D=void 0,ie=!0}}}return H[ee][1]._spread=ht,pe}function o(H,ee){return pe;function pe(ge){l.call(this,H(ge),ge),ee&&ee.call(this,ge)}}function a(){this.stack.push({type:"fragment",children:[]})}function l(H,ee,pe){this.stack[this.stack.length-1].children.push(H),this.stack.push(H),this.tokenStack.push([ee,pe||void 0]),H.position={start:hn(ee.start),end:void 0}}function c(H){return ee;function ee(pe){H&&H.call(this,pe),u.call(this,pe)}}function u(H,ee){const pe=this.stack.pop(),ge=this.tokenStack.pop();if(ge)ge[0].type!==H.type&&(ee?ee.call(this,H,ge[0]):(ge[1]||Np).call(this,H,ge[0]));else throw new Error("Cannot close `"+H.type+"` ("+wi({start:H.start,end:H.end})+"): it’s not open");pe.position.end=hn(H.end)}function d(){return Gk(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function f(H){if(this.data.expectingFirstListItemValue){const ee=this.stack[this.stack.length-2];ee.start=Number.parseInt(this.sliceSerialize(H),10),this.data.expectingFirstListItemValue=void 0}}function m(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.lang=H}function y(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.meta=H}function w(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function N(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.value=H.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function x(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.value=H.replace(/(\r?\n|\r)$/g,"")}function h(H){const ee=this.resume(),pe=this.stack[this.stack.length-1];pe.label=ee,pe.identifier=Ar(this.sliceSerialize(H)).toLowerCase()}function v(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.title=H}function L(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.url=H}function S(H){const ee=this.stack[this.stack.length-1];if(!ee.depth){const pe=this.sliceSerialize(H).length;ee.depth=pe}}function g(){this.data.setextHeadingSlurpLineEnding=!0}function b(H){const ee=this.stack[this.stack.length-1];ee.depth=this.sliceSerialize(H).codePointAt(0)===61?1:2}function P(){this.data.setextHeadingSlurpLineEnding=void 0}function R(H){const pe=this.stack[this.stack.length-1].children;let ge=pe[pe.length-1];(!ge||ge.type!=="text")&&(ge=Un(),ge.position={start:hn(H.start),end:void 0},pe.push(ge)),this.stack.push(ge)}function E(H){const ee=this.stack.pop();ee.value+=this.sliceSerialize(H),ee.position.end=hn(H.end)}function j(H){const ee=this.stack[this.stack.length-1];if(this.data.atHardBreak){const pe=ee.children[ee.children.length-1];pe.position.end=hn(H.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(ee.type)&&(R.call(this,H),E.call(this,H))}function T(){this.data.atHardBreak=!0}function M(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.value=H}function V(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.value=H}function F(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.value=H}function X(){const H=this.stack[this.stack.length-1];if(this.data.inReference){const ee=this.data.referenceType||"shortcut";H.type+="Reference",H.referenceType=ee,delete H.url,delete H.title}else delete H.identifier,delete H.label;this.data.referenceType=void 0}function z(){const H=this.stack[this.stack.length-1];if(this.data.inReference){const ee=this.data.referenceType||"shortcut";H.type+="Reference",H.referenceType=ee,delete H.url,delete H.title}else delete H.identifier,delete H.label;this.data.referenceType=void 0}function O(H){const ee=this.sliceSerialize(H),pe=this.stack[this.stack.length-2];pe.label=Qw(ee),pe.identifier=Ar(ee).toLowerCase()}function I(){const H=this.stack[this.stack.length-1],ee=this.resume(),pe=this.stack[this.stack.length-1];if(this.data.inReference=!0,pe.type==="link"){const ge=H.children;pe.children=ge}else pe.alt=ee}function k(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.url=H}function U(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.title=H}function K(){this.data.inReference=void 0}function C(){this.data.referenceType="collapsed"}function le(H){const ee=this.resume(),pe=this.stack[this.stack.length-1];pe.label=ee,pe.identifier=Ar(this.sliceSerialize(H)).toLowerCase(),this.data.referenceType="full"}function A(H){this.data.characterReferenceType=H.type}function Z(H){const ee=this.sliceSerialize(H),pe=this.data.characterReferenceType;let ge;pe?(ge=Tg(ee,pe==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):ge=gu(ee);const ke=this.stack[this.stack.length-1];ke.value+=ge}function B(H){const ee=this.stack.pop();ee.position.end=hn(H.end)}function te(H){E.call(this,H);const ee=this.stack[this.stack.length-1];ee.url=this.sliceSerialize(H)}function ae(H){E.call(this,H);const ee=this.stack[this.stack.length-1];ee.url="mailto:"+this.sliceSerialize(H)}function $(){return{type:"blockquote",children:[]}}function q(){return{type:"code",lang:null,meta:null,value:""}}function J(){return{type:"inlineCode",value:""}}function G(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function ne(){return{type:"emphasis",children:[]}}function ce(){return{type:"heading",depth:0,children:[]}}function Ce(){return{type:"break"}}function W(){return{type:"html",value:""}}function he(){return{type:"image",title:null,url:"",alt:null}}function Te(){return{type:"link",title:null,url:"",children:[]}}function mt(H){return{type:"list",ordered:H.type==="listOrdered",start:null,spread:H._spread,children:[]}}function fn(H){return{type:"listItem",spread:H._spread,checked:null,children:[]}}function Go(){return{type:"paragraph",children:[]}}function Yo(){return{type:"strong",children:[]}}function Un(){return{type:"text",value:""}}function os(){return{type:"thematicBreak"}}}function hn(e){return{line:e.line,column:e.column,offset:e.offset}}function Bg(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?Bg(e,r):Zw(e,r)}}function Zw(e,t){let n;for(n in t)if(Fg.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Np(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+wi({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+wi({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+wi({start:t.start,end:t.end})+") is still open")}function e2(e){const t=this;t.parser=n;function n(r){return Yw(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function t2(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function n2(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function r2(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function i2(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function s2(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function o2(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Qr(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let a,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=o+1,l+=1,e.footnoteCounts.set(r,l);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,c);const u={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,u),e.applyData(t,u)}function a2(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function l2(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Ug(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function c2(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Ug(e,t);const i={src:Qr(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function u2(e,t){const n={src:Qr(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function d2(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function p2(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Ug(e,t);const i={href:Qr(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function f2(e,t){const n={href:Qr(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function m2(e,t,n){const r=e.all(t),i=n?h2(n):Vg(t),o={},a=[];if(typeof t.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const d=r[l];(i||l!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?a.push(...d.children):a.push(d)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:a};return e.patch(t,u),e.applyData(t,u)}function h2(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Vg(n[r])}return t}function Vg(e){const t=e.spread;return t??e.children.length>1}function g2(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function x2(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function y2(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function v2(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function b2(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),i.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},l=pu(t.children[1]),c=wg(t.children[t.children.length-1]);l&&c&&(a.position={start:l,end:c}),i.push(a)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function k2(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,l=a?a.length:t.children.length;let c=-1;const u=[];for(;++c<l;){const p=t.children[c],f={},m=a?a[c]:void 0;m&&(f.align=m);let y={type:"element",tagName:o,properties:f,children:[]};p&&(y.children=e.all(p),e.patch(p,y),y=e.applyData(p,y)),u.push(y)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function j2(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const Ep=9,zp=32;function w2(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(Tp(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(Tp(t.slice(i),i>0,!1)),o.join("")}function Tp(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===Ep||o===zp;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===Ep||o===zp;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function _2(e,t){const n={type:"text",value:w2(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function S2(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const C2={blockquote:t2,break:n2,code:r2,delete:i2,emphasis:s2,footnoteReference:o2,heading:a2,html:l2,imageReference:c2,image:u2,inlineCode:d2,linkReference:p2,link:f2,listItem:m2,list:g2,paragraph:x2,root:y2,strong:v2,table:b2,tableCell:j2,tableRow:k2,text:_2,thematicBreak:S2,toml:Cs,yaml:Cs,definition:Cs,footnoteDefinition:Cs};function Cs(){}const Wg=-1,Jo=0,Si=1,ko=2,vu=3,bu=4,ku=5,ju=6,Hg=7,qg=8,Pp=typeof self=="object"?self:globalThis,N2=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,a]=t[i];switch(o){case Jo:case Wg:return n(a,i);case Si:{const l=n([],i);for(const c of a)l.push(r(c));return l}case ko:{const l=n({},i);for(const[c,u]of a)l[r(c)]=r(u);return l}case vu:return n(new Date(a),i);case bu:{const{source:l,flags:c}=a;return n(new RegExp(l,c),i)}case ku:{const l=n(new Map,i);for(const[c,u]of a)l.set(r(c),r(u));return l}case ju:{const l=n(new Set,i);for(const c of a)l.add(r(c));return l}case Hg:{const{name:l,message:c}=a;return n(new Pp[l](c),i)}case qg:return n(BigInt(a),i);case"BigInt":return n(Object(BigInt(a)),i);case"ArrayBuffer":return n(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:l}=new Uint8Array(a);return n(new DataView(l),a)}}return n(new Pp[o](a),i)};return r},Lp=e=>N2(new Map,e)(0),dr="",{toString:E2}={},{keys:z2}=Object,si=e=>{const t=typeof e;if(t!=="object"||!e)return[Jo,t];const n=E2.call(e).slice(8,-1);switch(n){case"Array":return[Si,dr];case"Object":return[ko,dr];case"Date":return[vu,dr];case"RegExp":return[bu,dr];case"Map":return[ku,dr];case"Set":return[ju,dr];case"DataView":return[Si,n]}return n.includes("Array")?[Si,n]:n.includes("Error")?[Hg,n]:[ko,n]},Ns=([e,t])=>e===Jo&&(t==="function"||t==="symbol"),T2=(e,t,n,r)=>{const i=(a,l)=>{const c=r.push(a)-1;return n.set(l,c),c},o=a=>{if(n.has(a))return n.get(a);let[l,c]=si(a);switch(l){case Jo:{let d=a;switch(c){case"bigint":l=qg,d=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);d=null;break;case"undefined":return i([Wg],a)}return i([l,d],a)}case Si:{if(c){let f=a;return c==="DataView"?f=new Uint8Array(a.buffer):c==="ArrayBuffer"&&(f=new Uint8Array(a)),i([c,[...f]],a)}const d=[],p=i([l,d],a);for(const f of a)d.push(o(f));return p}case ko:{if(c)switch(c){case"BigInt":return i([c,a.toString()],a);case"Boolean":case"Number":case"String":return i([c,a.valueOf()],a)}if(t&&"toJSON"in a)return o(a.toJSON());const d=[],p=i([l,d],a);for(const f of z2(a))(e||!Ns(si(a[f])))&&d.push([o(f),o(a[f])]);return p}case vu:return i([l,a.toISOString()],a);case bu:{const{source:d,flags:p}=a;return i([l,{source:d,flags:p}],a)}case ku:{const d=[],p=i([l,d],a);for(const[f,m]of a)(e||!(Ns(si(f))||Ns(si(m))))&&d.push([o(f),o(m)]);return p}case ju:{const d=[],p=i([l,d],a);for(const f of a)(e||!Ns(si(f)))&&d.push(o(f));return p}}const{message:u}=a;return i([l,{name:c,message:u}],a)};return o},Ap=(e,{json:t,lossy:n}={})=>{const r=[];return T2(!(t||n),!!t,new Map,r)(e),r},jo=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Lp(Ap(e,t)):structuredClone(e):(e,t)=>Lp(Ap(e,t));function P2(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function L2(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function A2(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||P2,r=e.options.footnoteBackLabel||L2,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let c=-1;for(;++c<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[c]);if(!u)continue;const d=e.all(u),p=String(u.identifier).toUpperCase(),f=Qr(p.toLowerCase());let m=0;const y=[],w=e.footnoteCounts.get(p);for(;w!==void 0&&++m<=w;){y.length>0&&y.push({type:"text",value:" "});let h=typeof n=="string"?n:n(c,m);typeof h=="string"&&(h={type:"text",value:h}),y.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(m>1?"-"+m:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,m),className:["data-footnote-backref"]},children:Array.isArray(h)?h:[h]})}const N=d[d.length-1];if(N&&N.type==="element"&&N.tagName==="p"){const h=N.children[N.children.length-1];h&&h.type==="text"?h.value+=" ":N.children.push({type:"text",value:" "}),N.children.push(...y)}else d.push(...y);const x={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(u,x),l.push(x)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...jo(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const Jg=function(e){if(e==null)return O2;if(typeof e=="function")return Ko(e);if(typeof e=="object")return Array.isArray(e)?R2(e):I2(e);if(typeof e=="string")return M2(e);throw new Error("Expected function, string, or object as test")};function R2(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Jg(e[n]);return Ko(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function I2(e){const t=e;return Ko(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function M2(e){return Ko(t);function t(n){return n&&n.type===e}}function Ko(e){return t;function t(n,r,i){return!!($2(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function O2(){return!0}function $2(e){return e!==null&&typeof e=="object"&&"type"in e}const Kg=[],D2=!0,Rp=!1,F2="skip";function B2(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=Jg(i),a=r?-1:1;l(e,void 0,[])();function l(c,u,d){const p=c&&typeof c=="object"?c:{};if(typeof p.type=="string"){const m=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(c.type+(m?"<"+m+">":""))+")"})}return f;function f(){let m=Kg,y,w,N;if((!t||o(c,u,d[d.length-1]||void 0))&&(m=U2(n(c,d)),m[0]===Rp))return m;if("children"in c&&c.children){const x=c;if(x.children&&m[0]!==F2)for(w=(r?x.children.length:-1)+a,N=d.concat(x);w>-1&&w<x.children.length;){const h=x.children[w];if(y=l(h,w,N)(),y[0]===Rp)return y;w=typeof y[1]=="number"?y[1]:w+a}}return m}}}function U2(e){return Array.isArray(e)?e:typeof e=="number"?[D2,e]:e==null?Kg:[e]}function Qg(e,t,n,r){let i,o,a;typeof t=="function"&&typeof n!="function"?(o=void 0,a=t,i=n):(o=t,a=n,i=r),B2(e,o,l,i);function l(c,u){const d=u[u.length-1],p=d?d.children.indexOf(c):void 0;return a(c,p,d)}}const ec={}.hasOwnProperty,V2={};function W2(e,t){const n=t||V2,r=new Map,i=new Map,o=new Map,a={...C2,...n.handlers},l={all:u,applyData:q2,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:a,one:c,options:n,patch:H2,wrap:K2};return Qg(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:i,f=String(d.identifier).toUpperCase();p.has(f)||p.set(f,d)}}),l;function c(d,p){const f=d.type,m=l.handlers[f];if(ec.call(l.handlers,f)&&m)return m(l,d,p);if(l.options.passThrough&&l.options.passThrough.includes(f)){if("children"in d){const{children:w,...N}=d,x=jo(N);return x.children=l.all(d),x}return jo(d)}return(l.options.unknownHandler||J2)(l,d,p)}function u(d){const p=[];if("children"in d){const f=d.children;let m=-1;for(;++m<f.length;){const y=l.one(f[m],d);if(y){if(m&&f[m-1].type==="break"&&(!Array.isArray(y)&&y.type==="text"&&(y.value=Ip(y.value)),!Array.isArray(y)&&y.type==="element")){const w=y.children[0];w&&w.type==="text"&&(w.value=Ip(w.value))}Array.isArray(y)?p.push(...y):p.push(y)}}}return p}}function H2(e,t){e.position&&(t.position=Ek(e))}function q2(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&o&&Object.assign(n.properties,jo(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function J2(e,t){const n=t.data||{},r="value"in t&&!(ec.call(n,"hProperties")||ec.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function K2(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Ip(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Mp(e,t){const n=W2(e,t),r=n.one(e,void 0),i=A2(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function Q2(e,t){return e&&"run"in e?async function(n,r){const i=Mp(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Mp(n,{file:r,...e||t})}}function Op(e){if(e)throw e}var Vs=Object.prototype.hasOwnProperty,Gg=Object.prototype.toString,$p=Object.defineProperty,Dp=Object.getOwnPropertyDescriptor,Fp=function(t){return typeof Array.isArray=="function"?Array.isArray(t):Gg.call(t)==="[object Array]"},Bp=function(t){if(!t||Gg.call(t)!=="[object Object]")return!1;var n=Vs.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Vs.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||Vs.call(t,i)},Up=function(t,n){$p&&n.name==="__proto__"?$p(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Vp=function(t,n){if(n==="__proto__")if(Vs.call(t,n)){if(Dp)return Dp(t,n).value}else return;return t[n]},G2=function e(){var t,n,r,i,o,a,l=arguments[0],c=1,u=arguments.length,d=!1;for(typeof l=="boolean"&&(d=l,l=arguments[1]||{},c=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});c<u;++c)if(t=arguments[c],t!=null)for(n in t)r=Vp(l,n),i=Vp(t,n),l!==i&&(d&&i&&(Bp(i)||(o=Fp(i)))?(o?(o=!1,a=r&&Fp(r)?r:[]):a=r&&Bp(r)?r:{},Up(l,{name:n,newValue:e(d,a,i)})):typeof i<"u"&&Up(l,{name:n,newValue:i}));return l};const Ia=_o(G2);function tc(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Y2(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);l(null,...i);function l(c,...u){const d=e[++o];let p=-1;if(c){a(c);return}for(;++p<i.length;)(u[p]===null||u[p]===void 0)&&(u[p]=i[p]);i=u,d?X2(d,l)(...u):a(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function X2(e,t){let n;return r;function r(...a){const l=e.length>a.length;let c;l&&a.push(i);try{c=e.apply(this,a)}catch(u){const d=u;if(l&&n)throw d;return i(d)}l||(c&&c.then&&typeof c.then=="function"?c.then(o,i):c instanceof Error?i(c):o(c))}function i(a,...l){n||(n=!0,t(a,...l))}function o(a){i(null,a)}}const Ht={basename:Z2,dirname:e_,extname:t_,join:n_,sep:"/"};function Z2(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');ss(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let a=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else a<0&&(o=!0,a=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(r=i):(l=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function e_(e){if(ss(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function t_(e){ss(e);let t=e.length,n=-1,r=0,i=-1,o=0,a;for(;t--;){const l=e.codePointAt(t);if(l===47){if(a){r=t+1;break}continue}n<0&&(a=!0,n=t+1),l===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function n_(...e){let t=-1,n;for(;++t<e.length;)ss(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":r_(n)}function r_(e){ss(e);const t=e.codePointAt(0)===47;let n=i_(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function i_(e,t){let n="",r=0,i=-1,o=0,a=-1,l,c;for(;++a<=e.length;){if(a<e.length)l=e.codePointAt(a);else{if(l===47)break;l=47}if(l===47){if(!(i===a-1||o===1))if(i!==a-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),i=a,o=0;continue}}else if(n.length>0){n="",r=0,i=a,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,o=0}else l===46&&o>-1?o++:o=-1}return n}function ss(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const s_={cwd:o_};function o_(){return"/"}function nc(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function a_(e){if(typeof e=="string")e=new URL(e);else if(!nc(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return l_(e)}function l_(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const Ma=["history","path","basename","stem","extname","dirname"];class Yg{constructor(t){let n;t?nc(t)?n={path:t}:typeof t=="string"||c_(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":s_.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Ma.length;){const o=Ma[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)Ma.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?Ht.basename(this.path):void 0}set basename(t){$a(t,"basename"),Oa(t,"basename"),this.path=Ht.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?Ht.dirname(this.path):void 0}set dirname(t){Wp(this.basename,"dirname"),this.path=Ht.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?Ht.extname(this.path):void 0}set extname(t){if(Oa(t,"extname"),Wp(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Ht.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){nc(t)&&(t=a_(t)),$a(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?Ht.basename(this.path,this.extname):void 0}set stem(t){$a(t,"stem"),Oa(t,"stem"),this.path=Ht.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new tt(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Oa(e,t){if(e&&e.includes(Ht.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Ht.sep+"`")}function $a(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Wp(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function c_(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const u_=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},d_={}.hasOwnProperty;class wu extends u_{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Y2()}copy(){const t=new wu;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Ia(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Ba("data",this.frozen),this.namespace[t]=n,this):d_.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Ba("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Es(t),r=this.parser||this.Parser;return Da("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Da("process",this.parser||this.Parser),Fa("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,a){const l=Es(t),c=r.parse(l);r.run(c,l,function(d,p,f){if(d||!p||!f)return u(d);const m=p,y=r.stringify(m,f);m_(y)?f.value=y:f.result=y,u(d,f)});function u(d,p){d||!p?a(d):o?o(p):n(void 0,p)}}}processSync(t){let n=!1,r;return this.freeze(),Da("processSync",this.parser||this.Parser),Fa("processSync",this.compiler||this.Compiler),this.process(t,i),qp("processSync","process",n),r;function i(o,a){n=!0,Op(o),r=a}}run(t,n,r){Hp(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(a,l){const c=Es(n);i.run(t,c,u);function u(d,p,f){const m=p||t;d?l(d):a?a(m):r(void 0,m,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),qp("runSync","run",r),i;function o(a,l){Op(a),i=l,r=!0}}stringify(t,n){this.freeze();const r=Es(n),i=this.compiler||this.Compiler;return Fa("stringify",i),Hp(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(Ba("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(u){if(typeof u=="function")c(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...p]=u;c(d,p)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(i.settings=Ia(!0,i.settings,u.settings))}function l(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const p=u[d];o(p)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function c(u,d){let p=-1,f=-1;for(;++p<r.length;)if(r[p][0]===u){f=p;break}if(f===-1)r.push([u,...d]);else if(d.length>0){let[m,...y]=d;const w=r[f][1];tc(w)&&tc(m)&&(m=Ia(!0,w,m)),r[f]=[u,m,...y]}}}}const p_=new wu().freeze();function Da(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Fa(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Ba(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Hp(e){if(!tc(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function qp(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Es(e){return f_(e)?e:new Yg(e)}function f_(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function m_(e){return typeof e=="string"||h_(e)}function h_(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const g_="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Jp=[],Kp={allowDangerousHtml:!0},x_=/^(https?|ircs?|mailto|xmpp)$/i,y_=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Xg(e){const t=v_(e),n=b_(e);return k_(t.runSync(t.parse(n),n),e)}function v_(e){const t=e.rehypePlugins||Jp,n=e.remarkPlugins||Jp,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Kp}:Kp;return p_().use(e2).use(n).use(Q2,r).use(t)}function b_(e){const t=e.children||"",n=new Yg;return typeof t=="string"&&(n.value=t),n}function k_(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,a=t.skipHtml,l=t.unwrapDisallowed,c=t.urlTransform||j_;for(const d of y_)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+g_+d.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),Qg(e,u),Ak(e,{Fragment:s.Fragment,components:i,ignoreInvalidStyle:!0,jsx:s.jsx,jsxs:s.jsxs,passKeys:!0,passNode:!0});function u(d,p,f){if(d.type==="raw"&&f&&typeof p=="number")return a?f.children.splice(p,1):f.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let m;for(m in La)if(Object.hasOwn(La,m)&&Object.hasOwn(d.properties,m)){const y=d.properties[m],w=La[m];(w===null||w.includes(d.tagName))&&(d.properties[m]=c(String(y||""),m,d))}}if(d.type==="element"){let m=n?!n.includes(d.tagName):o?o.includes(d.tagName):!1;if(!m&&r&&typeof p=="number"&&(m=!r(d,p,f)),m&&f&&typeof p=="number")return l&&d.children?f.children.splice(p,1,...d.children):f.children.splice(p,1),p}}}function j_(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||x_.test(e.slice(0,t))?e:""}function w_({value:e,onChange:t,placeholder:n="Write your content here...",minHeight:r=200}){const[i,o]=_.useState(!1),[a,l]=_.useState(r),c=_.useRef(null),u=_.useRef(null);_.useEffect(()=>{if(e){const f=e.split(`
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
      `}),i?s.jsx("div",{className:"monaco-wrapper",children:s.jsx(an,{height:"100%",language:"markdown",theme:"vs-dark",value:e,onChange:f=>t(f||""),onMount:d,options:{minimap:{enabled:!1},fontSize:14,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"off",scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",padding:{top:12,bottom:12},lineDecorationsWidth:8,folding:!1,glyphMargin:!1,renderLineHighlight:"none",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,scrollbar:{vertical:"auto",horizontal:"hidden"}}})}):s.jsxs("div",{className:"markdown-preview",onClick:()=>o(!0),children:[s.jsxs("span",{className:"edit-hint",children:[s.jsx(h0,{size:12}),"Click to edit"]}),e?s.jsx("div",{className:"markdown-content",children:s.jsx(Xg,{children:e})}):s.jsx("div",{className:"markdown-placeholder",children:n})]})]})}function __(e){return/^[a-zA-Z0-9_]+$/.test(e)}function S_({agent:e}){const{project:t,updateAgent:n,mcpServers:r,builtinTools:i,setActiveTab:o,setRunAgentId:a}=et(),[l,c]=_.useState(new Set(["basic","model","tools","subagents"])),[u,d]=_.useState(!1),[p,f]=_.useState(!1),[m,y]=_.useState(!1),[w,N]=_.useState(""),[x,h]=_.useState(null);if(!t)return null;function v(z){n(e.id,z)}function L(z){if(z===""){h(null),v({name:z});return}__(z)?h(null):h("Name can only contain letters, numbers, and underscores"),v({name:z})}function S(z){const O=new Set(l);O.has(z)?O.delete(z):O.add(z),c(O)}const g=e.type==="LlmAgent",b=e;function P(z){g&&v({tools:[...b.tools,z]})}function R(z){g&&v({tools:b.tools.filter((O,I)=>I!==z)})}function E(z,O){if(!g)return;const I=[...b.tools];I[z]=O,v({tools:I})}function j(z){"sub_agents"in e&&v({sub_agents:[...e.sub_agents,z]})}function T(z){"sub_agents"in e&&v({sub_agents:e.sub_agents.filter(O=>O!==z)})}const M=t.agents.filter(z=>z.id!==e.id);async function V(){if(!(!t||!g)){d(!0);try{const z=b.instruction||"",O=z?`Current instruction to improve:

${z}

Please improve and expand this instruction while preserving its core intent.`:void 0,k=t.agents.some(K=>K.id===e.id)?void 0:e,U=await Bs(t.id,e.id,O,k);U.success&&U.prompt?v({instruction:U.prompt}):alert("Failed to generate prompt: "+(U.error||"Unknown error"))}catch(z){alert("Error generating prompt: "+z.message)}finally{d(!1)}}}async function F(){if(!(!t||!g||!w.trim())){d(!0);try{const O=`Current instruction:

${b.instruction||""}

---

Requested changes:
${w}

Please apply the requested changes to the instruction above. Output only the updated instruction, nothing else.`,k=t.agents.some(K=>K.id===e.id)?void 0:e,U=await Bs(t.id,e.id,O,k);U.success&&U.prompt?(v({instruction:U.prompt}),y(!1),N("")):alert("Failed to apply changes: "+(U.error||"Unknown error"))}catch(z){alert("Error applying changes: "+z.message)}finally{d(!1)}}}async function X(){if(!t||!g)return;const z=b.instruction;if(!z){alert("Please write an instruction first");return}f(!0);try{const O=`Write a 5-10 word description of what this agent does.

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
${z.slice(0,500)}

Your response (5-10 words only):`,I=await Bs(t.id,e.id,O);if(I.success&&I.prompt){let k=I.prompt.trim();k=k.replace(/^["']|["']$/g,"").trim();const U=k.split(/[.!?\n]/)[0].trim(),K=U.length>80?U.slice(0,77)+"...":U;v({description:K})}else alert("Failed to generate description: "+(I.error||"Unknown error"))}catch(O){alert("Error generating description: "+O.message)}finally{f(!1)}}return s.jsxs("div",{className:"agent-editor",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"editor-header",children:[s.jsx(Zn,{size:24,style:{color:"var(--accent-primary)"}}),s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[s.jsx("input",{type:"text",value:e.name,onChange:z=>L(z.target.value),placeholder:"Agent name",style:{borderColor:x?"var(--error)":void 0}}),x&&s.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:x})]}),s.jsx("span",{className:"badge badge-info",children:e.type}),s.jsxs("button",{className:"btn btn-primary btn-sm run-agent-btn",onClick:()=>{a(e.id),o("run")},title:"Test this agent",children:[s.jsx(Mn,{size:14}),"Run"]})]}),s.jsxs("div",{className:"editor-content",children:[s.jsxs(oi,{id:"basic",title:"Basic Info",icon:s.jsx(Zn,{size:16}),expanded:l.has("basic"),onToggle:()=>S("basic"),children:[s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group full-width",children:[s.jsxs("div",{className:"label-with-action",children:[s.jsx("label",{children:"Description"}),g&&b.instruction&&s.jsx("button",{className:"btn btn-secondary btn-sm generate-btn",onClick:X,disabled:p,title:"Generate description from instruction",children:p?s.jsxs(s.Fragment,{children:[s.jsx(Ur,{size:14,className:"spin"}),"Summarizing..."]}):"Summarize"})]}),s.jsx("input",{type:"text",value:e.description,onChange:z=>v({description:z.target.value}),placeholder:"e.g., Reviews code for bugs and suggests fixes"})]})}),g&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group full-width",children:[s.jsxs("div",{className:"label-with-action",children:[s.jsx("label",{children:"Instruction"}),s.jsxs("div",{className:"action-buttons",children:[s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>y(!m),disabled:u||!b.instruction,title:"Request specific changes to the instruction",children:"Request Changes"}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:V,disabled:u,title:"Uses AI to improve and expand the current instruction",children:u?s.jsxs(s.Fragment,{children:[s.jsx(Ur,{size:14,className:"spin"}),"Working..."]}):"Auto-Improve"})]})]}),m&&s.jsxs("div",{className:"request-changes-box",children:[s.jsx("input",{type:"text",value:w,onChange:z=>N(z.target.value),placeholder:"Describe what changes you want...",onKeyDown:z=>{z.key==="Enter"&&w.trim()?F():z.key==="Escape"&&(y(!1),N(""))},autoFocus:!0}),s.jsx("button",{className:"btn btn-primary btn-sm",onClick:F,disabled:u||!w.trim(),children:"Apply"})]}),s.jsx(w_,{value:b.instruction,onChange:z=>v({instruction:z}),placeholder:"Write your agent's instruction here... (Markdown supported)",minHeight:200})]})}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Output Key"}),s.jsxs("select",{value:b.output_key||"",onChange:z=>v({output_key:z.target.value||void 0}),children:[s.jsx("option",{value:"",children:"None"}),t.app.state_keys.map(z=>s.jsx("option",{value:z.name,children:z.name},z.name))]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Include Contents"}),s.jsxs("select",{value:b.include_contents,onChange:z=>v({include_contents:z.target.value}),children:[s.jsx("option",{value:"default",children:"Default"}),s.jsx("option",{value:"none",children:"None"})]})]})]}),s.jsxs("div",{className:"form-row",style:{gap:24},children:[s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[s.jsxs("span",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:b.disallow_transfer_to_parent,onChange:z=>v({disallow_transfer_to_parent:z.target.checked})}),s.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to parent"]}),s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[s.jsxs("span",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:b.disallow_transfer_to_peers,onChange:z=>v({disallow_transfer_to_peers:z.target.checked})}),s.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to peers"]})]})]}),e.type==="LoopAgent"&&s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Max Iterations"}),s.jsx("input",{type:"number",value:e.max_iterations||"",onChange:z=>v({max_iterations:parseInt(z.target.value)||void 0}),placeholder:"No limit"})]})})]}),g&&s.jsx(oi,{id:"model",title:"Model",icon:s.jsx(ru,{size:16}),expanded:l.has("model"),onToggle:()=>S("model"),children:s.jsx(N_,{agent:b,appModels:t.app.models||[],defaultModelId:t.app.default_model_id,onUpdate:z=>v({model:z})})}),g&&s.jsx(oi,{id:"tools",title:`Tools (${b.tools.length})`,icon:s.jsx(Yt,{size:16}),expanded:l.has("tools"),onToggle:()=>S("tools"),children:s.jsx(C_,{tools:b.tools,onAdd:P,onRemove:R,onUpdate:E,builtinTools:i,mcpServers:r,projectMcpServers:t.mcp_servers,customTools:t.custom_tools,agents:M,skillsets:t.skillsets||[]})}),"sub_agents"in e&&s.jsx(oi,{id:"subagents",title:`Sub-Agents (${e.sub_agents.length})`,icon:s.jsx(b0,{size:16}),expanded:l.has("subagents"),onToggle:()=>S("subagents"),children:s.jsxs("div",{className:"sub-agent-list",children:[e.sub_agents.map(z=>{const O=t.agents.find(I=>I.id===z);return O?s.jsxs("div",{className:"sub-agent-chip",children:[O.name,s.jsx("button",{onClick:()=>T(z),children:s.jsx(Le,{size:12})})]},z):null}),s.jsxs("select",{value:"",onChange:z=>{z.target.value&&j(z.target.value)},style:{width:150,padding:"6px 10px",fontSize:13},children:[s.jsx("option",{value:"",children:"Add agent..."}),M.filter(z=>!e.sub_agents.includes(z.id)).map(z=>s.jsx("option",{value:z.id,children:z.name},z.id))]})]})}),g&&s.jsx(oi,{id:"callbacks",title:"Callbacks",icon:s.jsx(In,{size:16}),expanded:l.has("callbacks"),onToggle:()=>S("callbacks"),children:s.jsx(E_,{agent:b,onUpdate:v,customCallbacks:t.custom_callbacks||[]})})]})]})}function oi({id:e,title:t,icon:n,expanded:r,onToggle:i,children:o}){return s.jsxs("div",{className:"section",children:[s.jsxs("div",{className:"section-header",onClick:i,children:[r?s.jsx(Ct,{size:16}):s.jsx(Nt,{size:16}),s.jsxs("h4",{children:[n," ",t]})]}),r&&s.jsx("div",{className:"section-content",children:o})]})}function C_({tools:e,onAdd:t,onRemove:n,onUpdate:r,builtinTools:i,mcpServers:o,projectMcpServers:a,customTools:l,agents:c,skillsets:u}){const[d,p]=_.useState(!1),[f,m]=_.useState({}),[y,w]=_.useState(""),N=Lt.useRef(null),x=Lt.useRef(null),[h,v]=_.useState(null),[L,S]=_.useState(new Set),g=(A,Z)=>{if(!y.trim())return!0;const B=y.toLowerCase();return A.toLowerCase().includes(B)||((Z==null?void 0:Z.toLowerCase().includes(B))??!1)},b=i.filter(A=>g(A.name,A.description)),P=o.filter(A=>g(A.name,A.description)),R=a.filter(A=>g(A.name,A.description)),E=l.filter(A=>g(A.name,A.description)),j=c.filter(A=>g(A.name,A.description)),T=u.filter(A=>g(A.name,A.description));function M(){if(N.current){const A=N.current.getBoundingClientRect(),Z=window.innerHeight,B=350,te=Z-A.bottom-16,ae=A.top-16;if(te>=200||te>=ae){const $=Math.min(B,te);m({top:A.bottom+4,left:A.left,maxHeight:$})}else{const $=Math.min(B,ae);m({top:A.top-$-4,left:A.left,maxHeight:$})}}p(!0),w(""),setTimeout(()=>{var A;return(A=x.current)==null?void 0:A.focus()},50)}function V(){p(!1),w("")}function F(A){t({type:"builtin",name:A}),V()}async function X(A){V();const Z=A.tool_filter||[];if(v({server:A,enabledTools:new Set(Z),availableTools:Z.map(B=>({name:B,description:""})),isLoading:Z.length===0,error:void 0}),Z.length===0)try{const{testMcpServer:B}=await E0(async()=>{const{testMcpServer:ae}=await Promise.resolve().then(()=>i0);return{testMcpServer:ae}},void 0),te=await B({connection_type:A.connection_type,command:A.command,args:A.args,env:A.env,url:A.url,headers:A.headers,timeout:A.timeout||30});te.success?v(ae=>ae?{...ae,availableTools:te.tools,enabledTools:new Set(te.tools.map($=>$.name)),isLoading:!1}:null):v(ae=>ae?{...ae,isLoading:!1,error:te.error||"Failed to connect to MCP server"}:null)}catch(B){v(te=>te?{...te,isLoading:!1,error:B.message}:null)}}function z(A){if(!h)return;const Z=new Set(h.enabledTools);Z.has(A)?Z.delete(A):Z.add(A),v({...h,enabledTools:Z})}function O(){if(!h)return;const A=Array.from(h.enabledTools);t({type:"mcp",server:{...h.server,tool_filter:A}}),v(null)}function I(A){const Z=new Set(L);Z.has(A)?Z.delete(A):Z.add(A),S(Z)}function k(A,Z){const B=e[A];if(B.type!=="mcp"||!B.server)return;const te=B.server.tool_filter||[];let ae;te.includes(Z)?ae=te.filter($=>$!==Z):ae=[...te,Z],r(A,{...B,server:{...B.server,tool_filter:ae}})}function U(A){t({type:"function",name:A.name,module_path:A.module_path}),V()}function K(A){const Z=c.find(B=>B.id===A);t({type:"agent",agent_id:A,name:Z==null?void 0:Z.name}),V()}function C(A){const Z=u.find(B=>B.id===A);t({type:"skillset",skillset_id:A,name:Z==null?void 0:Z.name}),V()}function le(A){return o.find(Z=>Z.name===A)}return s.jsxs("div",{children:[s.jsx("style",{children:`
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
      `}),s.jsx("div",{className:"tool-list",children:e.map((A,Z)=>{var B;return A.type==="mcp"&&A.server?s.jsxs("div",{className:"mcp-tool-item",children:[s.jsxs("div",{className:"mcp-tool-header",onClick:()=>I(Z),children:[L.has(Z)?s.jsx(Ct,{size:14}):s.jsx(Nt,{size:14}),s.jsx(Yt,{size:14,style:{color:"var(--accent-primary)"}}),s.jsxs("div",{className:"mcp-tool-info",children:[s.jsx("div",{className:"mcp-tool-name",children:A.server.name}),s.jsx("div",{className:"mcp-tool-count",children:A.server.tool_filter===null||A.server.tool_filter===void 0?"all tools":`${A.server.tool_filter.length} tools enabled`})]}),s.jsx("button",{className:"delete-btn",onClick:te=>{te.stopPropagation(),n(Z)},children:s.jsx(Le,{size:14})})]}),L.has(Z)&&s.jsx("div",{className:"mcp-tool-body",children:s.jsx("div",{className:"mcp-tool-list",children:(()=>{const te=le(A.server.name),ae=(te==null?void 0:te.tool_filter)||A.server.tool_filter||[],$=new Set(A.server.tool_filter||[]);return ae.map(q=>s.jsxs("label",{className:`mcp-tool-chip ${$.has(q)?"enabled":"disabled"}`,onClick:()=>k(Z,q),children:[s.jsx("input",{type:"checkbox",checked:$.has(q),onChange:()=>{},style:{display:"none"}}),q]},q))})()})})]},Z):A.type==="skillset"?s.jsxs("div",{className:"tool-item",children:[s.jsx(on,{size:14,style:{color:"var(--accent)"}}),s.jsxs("div",{className:"tool-item-info",children:[s.jsx("div",{className:"tool-item-name",children:A.name||((B=u.find(te=>te.id===A.skillset_id))==null?void 0:B.name)||"SkillSet"}),s.jsx("div",{className:"tool-item-type",children:"skillset"})]}),s.jsx("button",{className:"delete-btn",onClick:()=>n(Z),children:s.jsx(Le,{size:14})})]},Z):s.jsxs("div",{className:"tool-item",children:[s.jsx(Yt,{size:14,style:{color:"var(--accent-primary)"}}),s.jsxs("div",{className:"tool-item-info",children:[s.jsx("div",{className:"tool-item-name",children:A.name||A.agent_id}),s.jsx("div",{className:"tool-item-type",children:A.type})]}),s.jsx("button",{className:"delete-btn",onClick:()=>n(Z),children:s.jsx(Le,{size:14})})]},Z)})}),s.jsxs("div",{className:"add-tool-dropdown",style:{marginTop:12},children:[s.jsxs("button",{ref:N,className:"btn btn-secondary btn-sm",onClick:()=>d?V():M(),children:[s.jsx(Oe,{size:14}),"Add Tool"]}),d&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"dropdown-backdrop",onClick:V}),s.jsxs("div",{className:"dropdown-content dropdown-fixed",style:f,children:[s.jsx("div",{className:"dropdown-search",children:s.jsx("input",{ref:x,type:"text",placeholder:"Search tools...",value:y,onChange:A=>w(A.target.value),onKeyDown:A=>A.key==="Escape"&&V()})}),b.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsx("h5",{children:"Built-in Tools"}),b.map(A=>s.jsxs("button",{className:"dropdown-item",onClick:()=>F(A.name),children:[s.jsx("div",{className:"dropdown-item-name",children:A.name}),s.jsx("div",{className:"dropdown-item-desc",children:A.description})]},A.name))]}),P.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsxs("h5",{children:["Known MCP Servers (",P.length,")"]}),P.map(A=>s.jsxs("button",{className:"dropdown-item",onClick:()=>X(A),children:[s.jsxs("div",{className:"dropdown-item-name",children:[A.name,s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:A.tool_filter===null||A.tool_filter===void 0?"all tools":`${A.tool_filter.length} tools`})]}),s.jsx("div",{className:"dropdown-item-desc",children:A.description})]},`known-${A.name}`))]}),R.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsxs("h5",{children:["Project MCP Servers (",R.length,")"]}),R.map(A=>s.jsxs("button",{className:"dropdown-item",onClick:()=>X(A),children:[s.jsxs("div",{className:"dropdown-item-name",children:[A.name,s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:A.tool_filter===null||A.tool_filter===void 0?"all tools":`${A.tool_filter.length} tools`})]}),s.jsx("div",{className:"dropdown-item-desc",children:A.description||"Custom MCP server"})]},`project-${A.id||A.name}`))]}),E.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsx("h5",{children:"Custom Tools"}),E.map(A=>s.jsxs("button",{className:"dropdown-item",onClick:()=>U(A),children:[s.jsx("div",{className:"dropdown-item-name",children:A.name}),s.jsx("div",{className:"dropdown-item-desc",children:A.description})]},A.id))]}),j.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsx("h5",{children:"Agents as Tools"}),j.map(A=>s.jsxs("button",{className:"dropdown-item",onClick:()=>K(A.id),children:[s.jsx("div",{className:"dropdown-item-name",children:A.name}),s.jsx("div",{className:"dropdown-item-desc",children:A.type})]},A.id))]}),T.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsxs("h5",{children:["SkillSets (",T.length,")"]}),T.map(A=>s.jsxs("button",{className:"dropdown-item",onClick:()=>C(A.id),children:[s.jsxs("div",{className:"dropdown-item-name",children:[A.name,s.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:[A.entry_count||0," entries"]})]}),s.jsx("div",{className:"dropdown-item-desc",children:A.description||"Vector knowledge base"})]},A.id))]}),y.trim()&&b.length===0&&P.length===0&&R.length===0&&E.length===0&&j.length===0&&T.length===0&&s.jsxs("div",{className:"dropdown-section",style:{textAlign:"center",padding:"20px",color:"var(--text-muted)"},children:['No tools matching "',y,'"']})]})]})]}),h&&s.jsx("div",{className:"mcp-config-dialog",children:s.jsxs("div",{className:"mcp-config-content",children:[s.jsxs("h3",{children:["Configure ",h.server.name]}),s.jsx("p",{children:h.server.description}),h.isLoading?s.jsxs("div",{className:"mcp-loading",children:[s.jsx("div",{className:"spinner"}),s.jsx("p",{children:"Connecting to MCP server and discovering tools..."})]}):h.error?s.jsxs("div",{className:"mcp-error",children:[s.jsxs("p",{children:["⚠️ Failed to discover tools: ",h.error]}),s.jsx("p",{className:"hint",children:"You can still add the server, but you won't be able to select specific tools."})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"mcp-select-actions",children:[s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>v({...h,enabledTools:new Set(h.availableTools.map(A=>A.name))}),children:["Select All (",h.availableTools.length,")"]}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>v({...h,enabledTools:new Set}),children:"Select None"})]}),s.jsx("div",{className:"mcp-tools-grid",children:h.availableTools.map(A=>s.jsxs("div",{className:"mcp-tool-row",title:A.description||A.name,style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[s.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[s.jsx("input",{type:"checkbox",checked:h.enabledTools.has(A.name),onChange:()=>z(A.name)}),s.jsx("span",{className:"toggle-slider"})]}),s.jsx("span",{style:{fontSize:13,opacity:h.enabledTools.has(A.name)?1:.5,cursor:"pointer"},onClick:()=>z(A.name),children:A.name})]},A.name))})]}),s.jsxs("div",{className:"dialog-actions",children:[s.jsx("button",{className:"btn btn-secondary",onClick:()=>v(null),children:"Cancel"}),s.jsxs("button",{className:"btn btn-primary",onClick:O,disabled:h.enabledTools.size===0,children:["Add ",h.enabledTools.size," Tools"]})]})]})})]})}function N_({agent:e,appModels:t,defaultModelId:n,onUpdate:r}){var p,f,m,y,w,N,x,h,v,L;const i=(p=e.model)==null?void 0:p._appModelId,o=e.model!==null&&e.model!==void 0&&!i,l=i||(()=>{if(!e.model)return n;const S=t.find(g=>{var b,P,R;return g.provider===((b=e.model)==null?void 0:b.provider)&&g.model_name===((P=e.model)==null?void 0:P.model_name)&&g.api_base===((R=e.model)==null?void 0:R.api_base)});return S==null?void 0:S.id})()||n||((f=t[0])==null?void 0:f.id);Lt.useEffect(()=>{var S,g,b,P,R;if(i){const E=t.find(j=>j.id===i);E&&(((S=e.model)==null?void 0:S.provider)!==E.provider||((g=e.model)==null?void 0:g.model_name)!==E.model_name||((b=e.model)==null?void 0:b.api_base)!==E.api_base||((P=e.model)==null?void 0:P.temperature)!==E.temperature||((R=e.model)==null?void 0:R.max_output_tokens)!==E.max_output_tokens)&&r({provider:E.provider,model_name:E.model_name,api_base:E.api_base,temperature:E.temperature,max_output_tokens:E.max_output_tokens,top_p:E.top_p,top_k:E.top_k,fallbacks:[],_appModelId:i})}},[i,t,e.model,r]);function c(S){const g=t.find(b=>b.id===S);g&&r({provider:g.provider,model_name:g.model_name,api_base:g.api_base,temperature:g.temperature,max_output_tokens:g.max_output_tokens,top_p:g.top_p,top_k:g.top_k,fallbacks:[],_appModelId:S})}function u(){var S;if(o){const g=n||((S=t[0])==null?void 0:S.id);g&&c(g)}else{const g=e.model;if(g){const{_appModelId:b,...P}=g;r(P)}else r({provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]})}}function d(S){const{_appModelId:g,...b}=e.model||{};r({...b,...S})}return t.find(S=>S.id===l),t.find(S=>S.id===n),s.jsxs("div",{className:"model-selector",children:[s.jsx("style",{children:`
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
      `}),t.length>0&&s.jsxs("div",{className:"model-choice",children:[s.jsxs("div",{className:`model-option ${o?"":"selected"}`,onClick:()=>!o||u(),children:[s.jsx("div",{className:"model-option-label",children:"Use App Model"}),s.jsx("div",{className:"model-option-desc",children:"Select from configured models"})]}),s.jsxs("div",{className:`model-option ${o?"selected":""}`,onClick:()=>o||u(),children:[s.jsx("div",{className:"model-option-label",children:"Custom"}),s.jsx("div",{className:"model-option-desc",children:"Configure model manually"})]})]}),!o&&t.length>0?s.jsx("div",{className:"app-model-select",children:t.map(S=>s.jsx("div",{className:`app-model-item ${l===S.id?"selected":""}`,onClick:()=>c(S.id),children:s.jsxs("div",{className:"app-model-item-info",children:[s.jsxs("div",{className:"app-model-item-name",children:[S.name,S.id===n&&s.jsxs("span",{className:"default-badge",children:[s.jsx(sg,{size:10,fill:"currentColor"}),"Default"]})]}),s.jsxs("div",{className:"app-model-item-details",children:[S.provider," / ",S.model_name,S.api_base&&` • ${S.api_base}`]})]})},S.id))}):t.length===0?s.jsx("div",{className:"no-models-message",children:"No models configured in App Config. Configure models there first, or use custom settings below."}):null,(o||t.length===0)&&s.jsxs("div",{className:"custom-model-form",children:[s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Provider"}),s.jsxs("select",{value:((m=e.model)==null?void 0:m.provider)||"gemini",onChange:S=>d({provider:S.target.value}),children:[s.jsx("option",{value:"gemini",children:"Gemini"}),s.jsx("option",{value:"litellm",children:"LiteLLM"}),s.jsx("option",{value:"anthropic",children:"Anthropic"})]})]}),s.jsxs("div",{className:"form-group",style:{flex:2},children:[s.jsx("label",{children:"Model Name"}),s.jsx("input",{type:"text",value:((y=e.model)==null?void 0:y.model_name)||"",onChange:S=>d({model_name:S.target.value}),placeholder:"e.g., gemini-2.0-flash"})]}),((w=e.model)==null?void 0:w.provider)==="litellm"&&s.jsxs("div",{className:"form-group",style:{flex:2},children:[s.jsx("label",{children:"API Base"}),s.jsx("input",{type:"text",value:((N=e.model)==null?void 0:N.api_base)||"",onChange:S=>d({api_base:S.target.value||void 0}),placeholder:"http://localhost:11434"})]})]}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Temperature"}),s.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:((x=e.model)==null?void 0:x.temperature)??"",onChange:S=>d({temperature:S.target.value?parseFloat(S.target.value):void 0}),placeholder:"Default"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Max Tokens"}),s.jsx("input",{type:"number",value:((h=e.model)==null?void 0:h.max_output_tokens)??"",onChange:S=>d({max_output_tokens:S.target.value?parseInt(S.target.value):void 0}),placeholder:"Default"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Top P"}),s.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:((v=e.model)==null?void 0:v.top_p)??"",onChange:S=>d({top_p:S.target.value?parseFloat(S.target.value):void 0}),placeholder:"Default"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Top K"}),s.jsx("input",{type:"number",min:"1",value:((L=e.model)==null?void 0:L.top_k)??"",onChange:S=>d({top_k:S.target.value?parseInt(S.target.value):void 0}),placeholder:"Default"})]})]})]})]})}function E_({agent:e,onUpdate:t,customCallbacks:n}){const r=[{key:"before_agent_callbacks",label:"Before Agent"},{key:"after_agent_callbacks",label:"After Agent"},{key:"before_model_callbacks",label:"Before Model"},{key:"after_model_callbacks",label:"After Model"},{key:"before_tool_callbacks",label:"Before Tool"},{key:"after_tool_callbacks",label:"After Tool"}];function i(a,l){const c=e[a]||[],u=n.find(d=>d.id===l);u&&t({[a]:[...c,{module_path:u.module_path}]})}function o(a,l){const c=e[a]||[];t({[a]:c.filter((u,d)=>d!==l)})}return s.jsx("div",{className:"callbacks-editor",children:r.map(({key:a,label:l})=>{const c=e[a]||[],u=n;return s.jsxs("div",{className:"callback-type-group",style:{marginBottom:"20px"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[s.jsx("label",{style:{fontWeight:500,fontSize:"13px"},children:l}),u.length>0&&s.jsxs("select",{value:"",onChange:d=>{d.target.value&&(i(a,d.target.value),d.target.value="")},style:{padding:"4px 8px",fontSize:"12px",width:"200px"},children:[s.jsx("option",{value:"",children:"Add callback..."}),u.filter(d=>{const p=d.module_path;return!c.some(f=>f.module_path===p)}).map(d=>s.jsx("option",{value:d.id,children:d.name},d.id))]})]}),c.length===0?s.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",fontStyle:"italic",padding:"8px"},children:"No callbacks"}):s.jsx("div",{className:"callback-list",children:c.map((d,p)=>{const f=n.find(m=>m.module_path===d.module_path);return s.jsxs("div",{className:"callback-chip",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 10px",background:"var(--bg-secondary)",borderRadius:"4px",marginBottom:"4px"},children:[s.jsx("span",{style:{fontSize:"12px"},children:(f==null?void 0:f.name)||d.module_path}),s.jsx("button",{onClick:()=>o(a,p),style:{background:"none",border:"none",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},title:"Remove callback",children:s.jsx(Le,{size:12})})]},p)})})]},a)})})}const Ua=[{type:"LlmAgent",label:"LLM Agent",icon:Zn,color:"#00f5d4",description:"AI-powered agent with model reasoning"},{type:"SequentialAgent",label:"Sequential",icon:k0,color:"#7b2cbf",description:"Run sub-agents in order"},{type:"LoopAgent",label:"Loop",icon:x0,color:"#ffd93d",description:"Repeat sub-agents until exit"},{type:"ParallelAgent",label:"Parallel",icon:Ul,color:"#ff6b6b",description:"Run sub-agents simultaneously"}];function z_(){return`agent_${Date.now().toString(36)}`}function T_(e){return{provider:e.provider,model_name:e.model_name,api_base:e.api_base,temperature:e.temperature,max_output_tokens:e.max_output_tokens,top_p:e.top_p,top_k:e.top_k,fallbacks:[]}}function P_(e,t){const r={id:z_(),name:`New ${e}`,description:""},i=t?T_(t):{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]};switch(e){case"LlmAgent":return{...r,type:"LlmAgent",model:i,instruction:"",include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:[],sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};case"SequentialAgent":return{...r,type:"SequentialAgent",sub_agents:[]};case"LoopAgent":return{...r,type:"LoopAgent",sub_agents:[],max_iterations:10};case"ParallelAgent":return{...r,type:"ParallelAgent",sub_agents:[]};default:throw new Error(`Unknown agent type: ${e}`)}}function L_({onSelectAgent:e}){const{project:t,addAgent:n,removeAgent:r,updateAgent:i,selectedAgentId:o,setSelectedAgentId:a,mcpServers:l}=et(),[c,u]=_.useState(!1),[d,p]=_.useState(new Set),[f,m]=_.useState(!1),[y,w]=_.useState(""),[N,x]=_.useState(!1);if(_.useEffect(()=>{if(t){const M=t.agents.filter(V=>"sub_agents"in V&&V.sub_agents.length>0).map(V=>V.id);p(new Set(M))}},[t==null?void 0:t.id,t==null?void 0:t.agents.length]),!t)return null;async function h(){var M,V,F,X;if(!(!y.trim()||!t)){x(!0);try{const z=await Uh(t.id,y);if(z.success&&z.config){const O=z.config,I=[];if((M=O.tools)!=null&&M.builtin)for(const C of O.tools.builtin)I.push({type:"builtin",name:C});if((V=O.tools)!=null&&V.mcp)for(const C of O.tools.mcp){const le=l.find(A=>A.name===C.server);le&&I.push({type:"mcp",server:{...le,tool_filter:C.tools}})}if((F=O.tools)!=null&&F.custom)for(const C of O.tools.custom){const le=t.custom_tools.find(A=>A.name===C);le&&I.push({type:"function",name:C,module_path:le.module_path})}if((X=O.tools)!=null&&X.agents)for(const C of O.tools.agents){const le=t.agents.find(A=>A.id===C);le&&I.push({type:"agent",agent_id:C,name:le.name})}const k=t.app.models||[],U=k.find(C=>C.id===t.app.default_model_id)||k[0],K={id:`agent_${Date.now().toString(36)}`,type:"LlmAgent",name:O.name||"new_agent",description:O.description||"",instruction:O.instruction||"",model:U?{provider:U.provider,model_name:U.model_name,api_base:U.api_base,temperature:U.temperature,max_output_tokens:U.max_output_tokens,top_p:U.top_p,top_k:U.top_k,fallbacks:[]}:{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]},include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:I,sub_agents:O.sub_agents||[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};n(K),a(K.id),e==null||e(K.id),m(!1),w("")}else alert("Failed to generate agent: "+(z.error||"Unknown error"))}catch(z){alert("Error generating agent: "+z.message)}finally{x(!1)}}}const v=t.agents.find(M=>M.id===o);function L(M){a(M),e==null||e(M)}function S(M){const V=t.app.models||[],F=V.find(z=>z.id===t.app.default_model_id)||V[0],X=P_(M,F);n(X),L(X.id),u(!1)}function g(M,V){V.stopPropagation(),confirm("Delete this agent?")&&(r(M),o===M&&(e==null||e(null)))}function b(M){const V=new Set(d);V.has(M)?V.delete(M):V.add(M),p(V)}function P(M){const V=Ua.find(F=>F.type===M);return V?V.icon:Zn}function R(M){const V=Ua.find(F=>F.type===M);return V?V.color:"#888"}function E(M,V=0){return M.map(F=>{const X=P(F.type),z=R(F.type),O="sub_agents"in F&&F.sub_agents.length>0,I=d.has(F.id),k=O?F.sub_agents.map(U=>t.agents.find(K=>K.id===U)).filter(U=>U!==void 0):[];return s.jsxs("div",{className:"agent-tree-item",children:[s.jsxs("div",{className:`agent-item ${o===F.id?"selected":""}`,onClick:()=>L(F.id),style:{paddingLeft:12+V*20},children:[O?s.jsx("button",{className:"expand-btn",onClick:U=>{U.stopPropagation(),b(F.id)},children:I?s.jsx(Ct,{size:16}):s.jsx(Nt,{size:16})}):s.jsx("span",{style:{width:20}}),s.jsx("div",{className:"agent-icon",style:{background:z},children:s.jsx(X,{size:14})}),s.jsx("span",{className:"agent-name",children:F.name}),s.jsx("span",{className:"agent-type",children:F.type}),s.jsx("button",{className:"delete-btn",onClick:U=>g(F.id,U),children:s.jsx(Le,{size:14})})]}),O&&I&&s.jsx("div",{className:"sub-agents",children:E(k,V+1)})]},F.id)})}const j=new Set(t.agents.flatMap(M=>"sub_agents"in M?M.sub_agents:[])),T=t.agents.filter(M=>!j.has(M.id));return s.jsxs("div",{className:"agents-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("aside",{className:"agents-sidebar",children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsxs("h3",{children:["Agents (",t.agents.length,")"]}),s.jsxs("div",{className:"header-buttons",children:[s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>m(!0),title:"AI-powered agent setup",children:[s.jsx(Na,{size:14}),"Quick"]}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>u(!0),children:[s.jsx(Oe,{size:14}),"Add"]})]})]}),s.jsx("div",{className:"agents-list",children:t.agents.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(Zn,{size:32}),s.jsx("p",{children:"No agents yet"})]}):E(T)})]}),s.jsx("div",{className:"agent-editor-area",children:v?s.jsx(S_,{agent:v}):s.jsxs("div",{className:"empty-state card",children:[s.jsx(Zn,{size:48}),s.jsxs("p",{children:["Select an agent to edit",s.jsx("br",{}),"or create a new one"]})]})}),c&&s.jsx("div",{className:"type-selector",onClick:()=>u(!1),children:s.jsxs("div",{className:"type-selector-content",onClick:M=>M.stopPropagation(),children:[s.jsx("h2",{children:"Add Agent"}),s.jsx("div",{className:"type-options",children:Ua.map(({type:M,label:V,icon:F,color:X,description:z})=>s.jsxs("button",{className:"type-option",onClick:()=>S(M),children:[s.jsx("div",{className:"type-option-icon",style:{background:X},children:s.jsx(F,{size:20})}),s.jsxs("div",{className:"type-option-info",children:[s.jsx("h4",{children:V}),s.jsx("p",{children:z})]})]},M))})]})}),f&&s.jsx("div",{className:"type-selector",onClick:()=>!N&&m(!1),children:s.jsxs("div",{className:"quick-setup-content",onClick:M=>M.stopPropagation(),children:[s.jsxs("h2",{children:[s.jsx(Na,{size:20})," Quick Agent Setup"]}),s.jsx("p",{className:"quick-setup-desc",children:"Describe what you want this agent to do, and AI will configure everything: name, description, instruction, tools, and sub-agents."}),s.jsxs("div",{className:"quick-setup-form",children:[s.jsx("textarea",{value:y,onChange:M=>w(M.target.value),placeholder:"Example: An agent that searches the web for information and summarizes the results. It should be able to search Google and handle multiple queries in parallel.",rows:5,disabled:N,autoFocus:!0}),s.jsxs("div",{className:"quick-setup-info",children:[s.jsx("strong",{children:"Available resources:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[t.app.state_keys.length," state keys"]}),s.jsxs("li",{children:[l.length," MCP servers"]}),s.jsxs("li",{children:[t.custom_tools.length," custom tools"]}),s.jsxs("li",{children:[t.agents.length," existing agents"]})]})]}),s.jsxs("div",{className:"quick-setup-actions",children:[s.jsx("button",{className:"btn btn-secondary",onClick:()=>m(!1),disabled:N,children:"Cancel"}),s.jsx("button",{className:"btn btn-primary",onClick:h,disabled:N||!y.trim(),children:N?s.jsxs(s.Fragment,{children:[s.jsx(Ur,{size:14,className:"spin"}),"Generating..."]}):s.jsxs(s.Fragment,{children:[s.jsx(Na,{size:14}),"Create Agent"]})})]})]})]})})]})}var _u="\x1B[0m",Su="\x1B[1m",Zg=e=>e instanceof Error?e.message:typeof e=="string"?e:"An unknown error occurred",A_=e=>{let t=Zg(e),n=`${Su}[MONACOPILOT ERROR] ${t}${_u}`;return console.error(n),{message:t}},R_=(e,t)=>{console.warn(`${Su}[MONACOPILOT WARN] ${e}${t?`
${Zg(t)}`:""}${_u}`)},I_=(e,t,n)=>console.warn(`${Su}[MONACOPILOT DEPRECATED] "${e}" is deprecated${n?` in ${n}`:""}. Please use "${t}" instead. It will be removed in a future version.${_u}`),wo={report:A_,warn:R_,warnDeprecated:I_},Qp=(e,t,n={})=>{if(t<=0)return"";let r=e.split(`
`),i=r.length;if(t>=i)return e;if(n.truncateDirection==="keepEnd"){let a=r.slice(-t);return a.every(l=>l==="")?`
`.repeat(t):a.join(`
`)}let o=r.slice(0,t);return o.every(a=>a==="")?`
`.repeat(t):o.join(`
`)},M_=100,O_=!0,ex="onIdle",$_=!0,D_=120,F_=400,B_=0,Cu=(e,t)=>t.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:e.lineNumber,endColumn:e.column}),U_=(e,t)=>t.getValueInRange({startLineNumber:e.lineNumber,startColumn:e.column,endLineNumber:t.getLineCount(),endColumn:t.getLineMaxColumn(t.getLineCount())}),V_=e=>e.getValue(),W_=class{constructor(e){this.capacity=e,this.head=0,this.tail=0,this.size=0,this.buffer=new Array(e)}enqueue(e){let t;return this.size===this.capacity&&(t=this.dequeue()),this.buffer[this.tail]=e,this.tail=(this.tail+1)%this.capacity,this.size++,t}dequeue(){if(this.size===0)return;let e=this.buffer[this.head];return this.buffer[this.head]=void 0,this.head=(this.head+1)%this.capacity,this.size--,e}getAll(){return this.buffer.filter(e=>e!==void 0)}clear(){this.buffer=new Array(this.capacity),this.head=0,this.tail=0,this.size=0}getSize(){return this.size}isEmpty(){return this.size===0}isFull(){return this.size===this.capacity}},tx=class nx{constructor(){this.cache=new W_(nx.MAX_CACHE_SIZE)}get(t,n){return this.cache.getAll().filter(r=>this.isValidCacheItem(r,t,n))}add(t){t.completion.trim()&&this.cache.enqueue(t)}clear(){this.cache.clear()}isValidCacheItem(t,n,r){let i=t.textBeforeCursor.trim(),o=Cu(n,r),a=o,l=r.getLineContent(n.lineNumber);if(n.column===l.length+1&&n.lineNumber<r.getLineCount()){let u=r.getLineContent(n.lineNumber+1);a=`${o}
${u}`}if(!(a.trim().includes(i)||i.includes(a.trim())))return!1;let c=r.getValueInRange(t.range);return this.isPartialMatch(c,t.completion)?this.isPositionValid(t,n):!1}isPartialMatch(t,n){let r=t.trim(),i=n.trim();return i.startsWith(r)||r.startsWith(i)}isPositionValid(t,n){let{range:r}=t,{startLineNumber:i,startColumn:o,endLineNumber:a,endColumn:l}=r,{lineNumber:c,column:u}=n;return c<i||c>a?!1:i===a?u>=o-1&&u<=l+1:c===i?u>=o-1:c===a?u<=l+1:!0}};tx.MAX_CACHE_SIZE=20;var H_=tx,q_=class{constructor(e){this.formattedCompletion="",this.formattedCompletion=e}setCompletion(e){return this.formattedCompletion=e,this}removeInvalidLineBreaks(){return this.formattedCompletion=this.formattedCompletion.trimEnd(),this}removeMarkdownCodeSyntax(){return this.formattedCompletion=this.removeMarkdownCodeBlocks(this.formattedCompletion),this}removeMarkdownCodeBlocks(e){let t=e.split(`
`),n=[],r=!1;for(let i=0;i<t.length;i++){let o=t[i],a=o.trim().startsWith("```");if(a&&!r){r=!0;continue}if(a&&r){r=!1;continue}n.push(o)}return n.join(`
`)}removeExcessiveNewlines(){return this.formattedCompletion=this.formattedCompletion.replace(/\n{3,}/g,`

`),this}build(){return this.formattedCompletion}},J_=class{findOverlaps(e,t,n){if(!e)return{startOverlapLength:0,maxOverlapLength:0};let r=e.length,i=t.length,o=n.length,a=0,l=0,c=0,u=Math.min(r,i);for(let f=1;f<=u;f++){let m=e.substring(0,f),y=t.slice(-f);m===y&&(c=f)}let d=Math.min(r,o);for(let f=0;f<d&&e[f]===n[f];f++)a++;for(let f=1;f<=d;f++)e.slice(-f)===n.slice(0,f)&&(l=f);let p=Math.max(a,l);if(p===0){for(let f=1;f<r;f++)if(n.startsWith(e.substring(f))){p=r-f;break}}return{startOverlapLength:c,maxOverlapLength:p}}},K_=class{constructor(e){this.monaco=e,this.textOverlapCalculator=new J_}computeInsertionRange(e,t,n){if(!t)return this.createEmptyRange(e);let r=n.getOffsetAt(e),i=n.getValue().substring(0,r),o=n.getValue().substring(r);if(r>=n.getValue().length)return this.createEmptyRange(e);if(o.length===0)return this.createEmptyRange(e);let{startOverlapLength:a,maxOverlapLength:l}=this.textOverlapCalculator.findOverlaps(t,i,o),c=a>0?n.getPositionAt(r-a):e,u=r+l,d=n.getPositionAt(u);return new this.monaco.Range(c.lineNumber,c.column,d.lineNumber,d.column)}computeCacheRange(e,t){let n=e.lineNumber,r=e.column,i=t.split(`
`),o=i.length-1,a=n+o,l=o===0?r+i[0].length:i[o].length+1;return new this.monaco.Range(n,r,a,l)}createEmptyRange(e){return new this.monaco.Range(e.lineNumber,e.column,e.lineNumber,e.column)}},Q_=async e=>{let{endpoint:t,body:n}=e,r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok)throw new Error(`Error while fetching completion item: ${r.statusText}`);let{completion:i,error:o}=await r.json();return{completion:i,error:o}},G_=({pos:e,mdl:t,options:n})=>{let{filename:r,language:i,technologies:o,relatedFiles:a,maxContextLines:l=M_}=n,c=a&&a.length>0?3:2,u=l?Math.floor(l/c):void 0,d=(w,N,x)=>{let h=w(e,t);return N?Qp(h,N,x):h},p=(w,N)=>!w||!N?w:w.map(({content:x,...h})=>({...h,content:Qp(x,N)})),f=d(Cu,u,{truncateDirection:"keepEnd"}),m=d(U_,u,{truncateDirection:"keepStart"}),y=p(a,u);return{filename:r,language:i,technologies:o,relatedFiles:y,textBeforeCursor:f,textAfterCursor:m,cursorPosition:e}},Y_=(e,t=300)=>{let n=null,r=null,i=(...o)=>{if(r)return r.args=o,r.promise;let a,l,c=new Promise((u,d)=>{a=u,l=d});return r={args:o,promise:c,resolve:a,reject:l},n&&(clearTimeout(n),n=null),n=setTimeout(async()=>{let u=r;if(u){r=null,n=null;try{let d=await e(...u.args);u.resolve(d)}catch(d){u.reject(d)}}},t),c};return i.cancel=()=>{n&&(clearTimeout(n),n=null),r&&(r.reject(new Error("Cancelled")),r=null)},i},X_=e=>typeof e=="string"?e==="Cancelled"||e==="AbortError":e instanceof Error?e.message==="Cancelled"||e.name==="AbortError":!1,ai=e=>({items:e,enableForwardStability:!0}),rc=new H_,Z_=async({monaco:e,mdl:t,pos:n,token:r,isCompletionAccepted:i,options:o})=>{let{trigger:a=ex,enableCaching:l=O_,allowFollowUpCompletions:c=$_,onError:u,requestHandler:d}=o;if(l&&!i){let p=rc.get(n,t).map(f=>({insertText:f.completion,range:f.range}));if(p.length>0)return ai(p)}if(r.isCancellationRequested||!c&&i)return ai([]);try{let p=Y_(async y=>{var N,x;(N=o.onCompletionRequested)==null||N.call(o,y);let w;if(d)w=await d(y);else if(o.endpoint)w=await Q_({endpoint:o.endpoint,...y});else throw new Error('No endpoint specified for completion request. Please set the "endpoint" option in registerCompletion, or provide a custom requestHandler.');if(w.error)throw new Error(w.error);return(x=o.onCompletionRequestFinished)==null||x.call(o,y,w),w},{onTyping:D_,onIdle:F_,onDemand:B_}[a]);r.onCancellationRequested(()=>{p.cancel()});let f=G_({pos:n,mdl:t,options:o}),{completion:m}=await p({body:{completionMetadata:f}});if(m){let y=new q_(m).removeMarkdownCodeSyntax().removeExcessiveNewlines().removeInvalidLineBreaks().build(),w=new K_(e);return l&&rc.add({completion:y,range:w.computeCacheRange(n,y),textBeforeCursor:Cu(n,t)}),ai([{insertText:y,range:w.computeInsertionRange(n,y,t)}])}}catch(p){if(X_(p))return ai([]);u?u(p):wo.warn("Cannot provide completion",p)}return ai([])},Nu=new WeakMap,Qo=e=>Nu.get(e),eS=(e,t)=>{Nu.set(e,t)},Gp=e=>{Nu.delete(e)},tS=e=>({isCompletionAccepted:!1,isCompletionVisible:!1,isExplicitlyTriggered:!1,hasRejectedCurrentCompletion:!1,options:e}),nS=(e,t)=>{let n=Qo(e);!n||!n.options||(n.options={...n.options,...t})},rS=(e,t,n)=>{let r=Qo(t);return r?e.languages.registerInlineCompletionsProvider(n.language,{provideInlineCompletions:(i,o,a,l)=>{if(i!==t.getModel())return{items:[]};let c=r.options||n;if(!(c.trigger==="onDemand"&&!r.isExplicitlyTriggered||c.triggerIf&&!c.triggerIf({text:V_(t),position:o,triggerType:c.trigger??ex})))return Z_({monaco:e,mdl:i,pos:o,token:l,isCompletionAccepted:r.isCompletionAccepted,options:c})},handleItemDidShow:(i,o,a)=>{var l,c;r.isExplicitlyTriggered=!1,r.hasRejectedCurrentCompletion=!1,!r.isCompletionAccepted&&(r.isCompletionVisible=!0,(c=(l=r.options||n).onCompletionShown)==null||c.call(l,a,o.range))},freeInlineCompletions:()=>{}}):null},iS={TAB:(e,t)=>t.keyCode===e.KeyCode.Tab,CMD_RIGHT_ARROW:(e,t)=>t.keyCode===e.KeyCode.RightArrow&&t.metaKey},sS=class{constructor(e,t,n){this.monaco=e,this.state=t,this.initialOptions=n}handleKeyEvent(e){let t=this.state.options||this.initialOptions,n={monaco:this.monaco,event:e,state:this.state,options:t};this.handleCompletionAcceptance(n),this.handleCompletionRejection(n)}handleCompletionAcceptance(e){var t,n;return e.state.isCompletionVisible&&this.isAcceptanceKey(e.event)?((n=(t=e.options).onCompletionAccepted)==null||n.call(t),e.state.isCompletionAccepted=!0,e.state.isCompletionVisible=!1,!0):(e.state.isCompletionAccepted=!1,!1)}handleCompletionRejection(e){var t,n;return this.shouldRejectCompletion(e)?((n=(t=e.options).onCompletionRejected)==null||n.call(t),e.state.hasRejectedCurrentCompletion=!0,!0):!1}shouldRejectCompletion(e){return e.state.isCompletionVisible&&!e.state.hasRejectedCurrentCompletion&&!e.state.isCompletionAccepted&&!this.isAcceptanceKey(e.event)}isAcceptanceKey(e){return Object.values(iS).some(t=>t(this.monaco,e))}},oS=(e,t,n,r)=>{let i=new sS(e,n,r);return t.onKeyDown(o=>i.handleKeyEvent(o))},rx=(e,t,n)=>{let r=[];eS(t,tS(n)),t.updateOptions({inlineSuggest:{enabled:!0}});try{let i=Qo(t);if(!i)return wo.warn("Completion is not registered properly. State not found."),lS();let o=rS(e,t,n);o&&r.push(o);let a=oS(e,t,i,n);return r.push(a),{deregister:()=>{for(let l of r)l.dispose();rc.clear(),Gp(t)},trigger:()=>aS(t),updateOptions:l=>{nS(t,l(i.options||n))}}}catch(i){return n.onError?n.onError(i):wo.report(i),{deregister:()=>{for(let o of r)o.dispose();Gp(t)},trigger:()=>{},updateOptions:()=>{}}}},aS=e=>{let t=Qo(e);if(!t){wo.warn("Completion is not registered. Use `registerCompletion` to register completion first.");return}t.isExplicitlyTriggered=!0,e.trigger("keyboard","editor.action.inlineSuggest.trigger",{})},lS=()=>({deregister:()=>{},trigger:()=>{},updateOptions:()=>{}});function cS(){return`tool_${Date.now().toString(36)}`}function uS(e){return/^[a-zA-Z0-9_]+$/.test(e)}const dS=`def my_tool(tool_context: ToolContext, param1: str) -> dict:
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
`;function pS({onSelectTool:e}){var Ce;const{project:t,updateProject:n,addCustomTool:r,updateCustomTool:i,removeCustomTool:o,selectedToolId:a,setSelectedToolId:l,builtinTools:c,mcpServers:u}=et(),[d,p]=_.useState(""),[f,m]=_.useState(null),[y,w]=_.useState("tools"),[N,x]=_.useState(null),[h,v]=_.useState(""),[L,S]=_.useState(!1),[g,b]=_.useState(null),[P,R]=_.useState(!1),[E,j]=_.useState(!1),[T,M]=_.useState(null),[V,F]=_.useState(null);if(!t)return null;const X=t.mcp_servers||[],z=t.custom_tools.find(W=>W.id===a),O=X.find(W=>W.name===N),I=new Set(X.map(W=>W.name)),k=u.filter(W=>!I.has(W.name));function U(W){l(W),e==null||e(W)}_.useEffect(()=>{z&&(p(z.code),F(null))},[a]),_.useEffect(()=>{O&&(v(JSON.stringify(O,null,2)),S(!1))},[N]);function K(){const W=cS();r({id:W,name:"new_tool",description:"",module_path:"tools.custom",code:dS,state_keys_used:[]}),U(W)}function C(W,he){he.stopPropagation(),confirm("Delete this tool?")&&(o(W),a===W&&(e==null||e(null)))}function le(W){z&&(W.name!==void 0&&(W.name===""||uS(W.name)?F(null):F("Name can only contain letters, numbers, and underscores")),i(z.id,W))}function A(W){W!==void 0&&z&&(p(W),le({code:W}))}async function Z(){if(z){R(!0);try{const W=await Vh(t.id,z.name,z.description,z.state_keys_used);W.success&&W.code?(p(W.code),le({code:W.code})):(console.error("Failed to generate tool code:",W.error),alert("Failed to generate tool code: "+(W.error||"Unknown error")))}catch(W){console.error("Error generating tool code:",W),alert("Error generating tool code: "+W.message)}finally{R(!1)}}}const B=_.useRef(null),te=_.useCallback((W,he)=>{if(B.current&&typeof B.current=="function")try{B.current()}catch{}try{const Te=rx(he,W,{language:"python",endpoint:"/api/code-completion",trigger:"onTyping"});typeof Te=="function"?B.current=Te:B.current=null}catch{B.current=null}},[]);_.useEffect(()=>()=>{if(B.current&&typeof B.current=="function")try{B.current()}catch{}},[]);function ae(){const W={name:`mcp_server_${Date.now().toString(36)}`,description:"New MCP Server",connection_type:"stdio",command:"npx",args:["-y","@modelcontextprotocol/server-example"],env:{},headers:{},timeout:10};n({mcp_servers:[...X,W]}),x(W.name),b(null)}function $(W){const he={...W};n({mcp_servers:[...X,he]}),x(he.name),b(null)}function q(W,he){he.stopPropagation(),confirm("Delete this MCP server?")&&(n({mcp_servers:X.filter(Te=>Te.name!==W)}),N===W&&x(null))}function J(W){W!==void 0&&(v(W),S(W!==JSON.stringify(O,null,2)))}function G(){if(O)try{const W=JSON.parse(h),he=O.name,Te=X.map(mt=>mt.name===he?W:mt);n({mcp_servers:Te}),x(W.name),S(!1)}catch(W){alert("Invalid JSON: "+W.message)}}async function ne(){j(!0),M(null);try{const W=JSON.parse(h),he=await Hh({connection_type:W.connection_type,command:W.command,args:W.args,env:W.env,url:W.url,headers:W.headers,timeout:W.timeout||30});if(M(he),he.success&&he.tools.length>0){const Te={...W,tool_filter:he.tools.map(mt=>mt.name)};v(JSON.stringify(Te,null,2)),S(!0)}}catch(W){M({success:!1,tools:[],error:W.message})}finally{j(!1)}}const ce={};return t.custom_tools.forEach(W=>{const he=W.module_path||"tools";ce[he]||(ce[he]=[]),ce[he].push(W)}),s.jsxs("div",{className:"tools-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("aside",{className:"tools-sidebar",children:[s.jsxs("div",{className:"sidebar-tabs",children:[s.jsxs("button",{className:`sidebar-tab ${y==="tools"?"active":""}`,onClick:()=>w("tools"),children:[s.jsx(Yt,{size:14}),"Tools"]}),s.jsxs("button",{className:`sidebar-tab ${y==="mcp"?"active":""}`,onClick:()=>w("mcp"),children:[s.jsx(ur,{size:14}),"MCP"]})]}),y==="tools"?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsxs("h3",{children:["Custom Tools (",t.custom_tools.length,")"]}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:K,children:[s.jsx(Oe,{size:14}),"New"]})]}),s.jsxs("div",{className:"tools-tree",children:[c.length>0&&s.jsxs("div",{className:"module-group",children:[s.jsxs("div",{className:"module-header",children:[s.jsx(Gd,{size:14}),"Built-in Tools"]}),c.map(W=>s.jsxs("div",{className:`tool-item builtin ${(f==null?void 0:f.name)===W.name?"selected":""}`,onClick:()=>{m(W),U(null),x(null)},children:[s.jsx(Wl,{size:14}),s.jsx("span",{className:"tool-name",children:W.name})]},W.name))]}),t.custom_tools.length===0&&c.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(In,{size:32}),s.jsx("p",{children:"No tools defined yet"})]}):t.custom_tools.length>0&&Object.entries(ce).map(([W,he])=>s.jsxs("div",{className:"module-group",children:[s.jsxs("div",{className:"module-header",children:[s.jsx(p0,{size:14}),W]}),he.map(Te=>s.jsxs("div",{className:`tool-item ${a===Te.id?"selected":""}`,onClick:()=>{U(Te.id),m(null),x(null)},children:[s.jsx(Yt,{size:14}),s.jsx("span",{className:"tool-name",children:Te.name}),s.jsx("button",{className:"delete-btn",onClick:mt=>C(Te.id,mt),children:s.jsx(Le,{size:14})})]},Te.id))]},W))]})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsxs("h3",{children:["MCP Servers (",X.length,")"]}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:ae,children:[s.jsx(Oe,{size:14}),"Custom"]})]}),s.jsxs("div",{className:"tools-tree",children:[X.length>0&&s.jsxs("div",{className:"module-group",children:[s.jsxs("div",{className:"module-header",children:[s.jsx(Vl,{size:14}),"Configured (",X.length,")"]}),X.map(W=>s.jsxs("div",{className:`tool-item ${N===W.name?"selected":""}`,onClick:()=>{x(W.name),b(null),U(null),m(null)},children:[s.jsx(ur,{size:14}),s.jsx("span",{className:"tool-name",children:W.name}),s.jsx("span",{className:"tool-type-badge",children:W.connection_type}),s.jsx("button",{className:"delete-btn",onClick:he=>q(W.name,he),children:s.jsx(Le,{size:14})})]},W.name))]}),k.length>0&&s.jsxs("div",{className:"module-group",children:[s.jsxs("div",{className:"module-header",children:[s.jsx(Gd,{size:14}),"Available Templates (",k.length,")"]}),k.map(W=>s.jsxs("div",{className:`tool-item known-server ${(g==null?void 0:g.name)===W.name?"selected":""}`,onClick:()=>{b(W),x(null),U(null),m(null)},children:[s.jsx(ur,{size:14}),s.jsx("span",{className:"tool-name",children:W.name}),s.jsx("span",{className:"tool-type-badge",children:W.connection_type})]},W.name))]}),X.length===0&&k.length===0&&s.jsxs("div",{className:"empty-state",children:[s.jsx(ur,{size:32}),s.jsx("p",{children:"No MCP servers available"})]})]})]})]}),s.jsx("div",{className:"tool-editor",children:f?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(Wl,{size:20,style:{color:"var(--accent-secondary)"}}),s.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:f.name}),s.jsx("span",{className:"badge badge-muted",children:"Built-in"})]}),s.jsxs("div",{className:"builtin-tool-info",children:[s.jsxs("div",{className:"info-section",children:[s.jsx("h4",{children:"Description"}),s.jsx("p",{children:f.description||"No description available."})]}),s.jsxs("div",{className:"info-section",children:[s.jsx("h4",{children:"Usage"}),s.jsx("p",{children:"This is a built-in tool provided by ADK. Add it to any LLM agent's tools list to enable it."}),s.jsxs("code",{children:['tools: ["',f.name,'"]']})]}),s.jsxs("div",{className:"info-section",children:[s.jsx("h4",{children:"Note"}),s.jsx("p",{children:"Built-in tools are read-only and cannot be modified. Create a custom tool if you need different behavior."})]})]})]}):z?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(Yt,{size:20,style:{color:"var(--accent-primary)"}}),s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[s.jsx("input",{type:"text",value:z.name,onChange:W=>le({name:W.target.value}),placeholder:"Tool name",style:{borderColor:V?"var(--error)":void 0}}),V&&s.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:V})]})]}),s.jsxs("div",{className:"editor-meta",children:[s.jsxs("div",{className:"meta-field grow",children:[s.jsx("label",{children:"Description"}),s.jsx("input",{type:"text",value:z.description,onChange:W=>le({description:W.target.value}),placeholder:"What does this tool do?"})]}),s.jsxs("div",{className:"meta-field",children:[s.jsx("label",{children:"Module Path"}),s.jsx("input",{type:"text",value:z.module_path,onChange:W=>le({module_path:W.target.value}),placeholder:"tools.custom",style:{width:180}})]})]}),s.jsxs("div",{className:"code-actions",children:[s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:Z,disabled:P||!z.name||!z.description,title:!z.name||!z.description?"Add a name and description first":"Generate code using AI",children:P?s.jsxs(s.Fragment,{children:[s.jsx(Ur,{size:14,className:"spinning"}),"Generating..."]}):s.jsxs(s.Fragment,{children:[s.jsx(au,{size:14}),"Write Tool"]})}),s.jsx("span",{className:"action-hint",children:"AI will generate code based on the tool name, description, and selected state keys"})]}),s.jsx("div",{className:"code-editor",children:s.jsx(an,{height:"100%",language:"python",theme:"vs-dark",value:d,onChange:A,onMount:te,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12}}})}),s.jsxs("div",{className:"state-keys-panel",children:[s.jsxs("h4",{children:[s.jsx(iu,{size:14})," State Keys Used"]}),s.jsx("div",{className:"state-key-chips",children:t.app.state_keys.length===0?s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"No state keys defined. Add them in App Config."}):t.app.state_keys.map(W=>{const he=z.state_keys_used.includes(W.name);return s.jsxs("label",{className:`state-key-chip ${he?"selected":""}`,title:W.description,children:[s.jsx("input",{type:"checkbox",checked:he,onChange:Te=>{const mt=Te.target.checked?[...z.state_keys_used,W.name]:z.state_keys_used.filter(fn=>fn!==W.name);le({state_keys_used:mt})}}),W.name,s.jsxs("span",{style:{color:"var(--text-muted)",fontSize:11},children:["(",W.type,")"]})]},W.name)})})]})]}):g?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(ur,{size:20,style:{color:"var(--accent-secondary)"}}),s.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:g.name}),s.jsx("span",{className:"badge badge-info",children:g.connection_type}),s.jsx("span",{className:"badge badge-muted",children:"Template"}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>$(g),children:[s.jsx(Oe,{size:14}),"Add to Project"]})]}),s.jsxs("div",{className:"known-server-preview",children:[s.jsxs("div",{className:"preview-section",children:[s.jsx("h4",{children:"Description"}),s.jsx("p",{children:g.description})]}),s.jsxs("div",{className:"preview-section",children:[s.jsx("h4",{children:"Command"}),s.jsxs("code",{children:[g.command," ",(Ce=g.args)==null?void 0:Ce.join(" ")]})]}),g.env&&Object.keys(g.env).length>0&&s.jsxs("div",{className:"preview-section",children:[s.jsx("h4",{children:"Required Environment Variables"}),s.jsx("div",{className:"env-vars",children:Object.entries(g.env).map(([W,he])=>s.jsxs("div",{className:"env-var",children:[s.jsx("code",{children:W}),he?s.jsx("span",{className:"env-value",children:he}):s.jsx("span",{className:"env-required",children:"Required"})]},W))})]}),g.tool_filter&&g.tool_filter.length>0&&s.jsxs("div",{className:"preview-section",children:[s.jsxs("h4",{children:["Available Tools (",g.tool_filter.length,")"]}),s.jsx("div",{className:"tool-badges",children:g.tool_filter.map(W=>s.jsx("span",{className:"tool-badge",children:W},W))})]}),s.jsxs("div",{className:"preview-section",children:[s.jsx("h4",{children:"Configuration Preview"}),s.jsx("pre",{className:"config-preview",children:JSON.stringify(g,null,2)})]})]})]}):O?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(ur,{size:20,style:{color:"var(--accent-primary)"}}),s.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:O.name}),s.jsx("span",{className:"badge badge-info",children:O.connection_type}),L&&s.jsx("span",{className:"unsaved-badge",children:"Unsaved"}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:ne,disabled:E,title:"Test connection and discover available tools",children:[E?s.jsx(Ur,{size:14,className:"spin"}):s.jsx(Vl,{size:14}),E?"Testing...":"Test Connection"]}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:G,disabled:!L,children:[s.jsx(ou,{size:14}),"Save"]})]}),T&&s.jsx("div",{className:`mcp-test-result ${T.success?"success":"error"}`,children:T.success?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"test-result-header",children:["✓ Connected! Found ",T.tools.length," tools"]}),T.tools.length>0&&s.jsxs("div",{className:"test-result-tools",children:[s.jsx("strong",{children:"Available tools:"}),s.jsx("ul",{children:T.tools.map(W=>s.jsxs("li",{children:[s.jsx("code",{children:W.name}),W.description&&s.jsxs("span",{children:[" — ",W.description]})]},W.name))}),s.jsx("p",{className:"hint",children:'The tool_filter has been updated with these tools. Click "Save" to apply.'})]})]}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"test-result-header",children:"✗ Connection failed"}),s.jsx("div",{className:"test-result-error",children:T.error})]})}),s.jsx("div",{className:"mcp-info",children:s.jsx("p",{children:'Configure your MCP server using JSON. Click "Test Connection" to verify and discover available tools.'})}),s.jsx("div",{className:"code-editor",children:s.jsx(an,{height:"100%",language:"json",theme:"vs-dark",value:h,onChange:J,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},formatOnPaste:!0}})}),s.jsxs("div",{className:"mcp-help",children:[s.jsx("h4",{children:"Schema Reference"}),s.jsxs("div",{className:"schema-fields",children:[s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"name"}),s.jsx("span",{children:"Unique identifier for this server"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"description"}),s.jsx("span",{children:"Human-readable description"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"connection_type"}),s.jsx("span",{children:'"stdio" | "sse" | "http"'})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"command"}),s.jsx("span",{children:"Command to run (for stdio)"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"args"}),s.jsx("span",{children:"Array of command arguments"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"env"}),s.jsx("span",{children:"Environment variables object"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"url"}),s.jsx("span",{children:"Server URL (for sse/http)"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"tool_filter"}),s.jsx("span",{children:"Array of tool names to include (null/omit = all tools, [] = no tools)"})]})]})]})]}):s.jsxs("div",{className:"empty-state",children:[s.jsx(In,{size:48}),s.jsxs("p",{children:["Select a tool to view",s.jsx("br",{}),"or create a new custom tool"]})]})})]})}function fS(){return`callback_${Date.now().toString(36)}`}function Yp(e){return/^[a-zA-Z0-9_]+$/.test(e)}function ix(e){switch(e){case"before_agent":case"after_agent":return`from google.adk.agents.callback_context import CallbackContext
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
`;default:return ix("before_agent")}}function mS({onSelectCallback:e}){var P,R;const{project:t,updateProject:n,addCustomCallback:r,updateCustomCallback:i,removeCustomCallback:o}=et(),[a,l]=_.useState(""),[c,u]=_.useState(null),[d,p]=_.useState(null),[f,m]=_.useState(!1),y=_.useRef(null);if(!t)return null;const w=t.custom_callbacks||[],N=w.find(E=>E.id===c);function x(E){u(E),e==null||e(E)}_.useEffect(()=>{N?(l(N.code),p(null)):l("")},[c,N]);function h(){const E=fS(),j={id:E,name:"new_callback",description:"",module_path:"callbacks.custom",code:ix("before_agent"),state_keys_used:[]};r(j),x(E)}function v(E,j){j.stopPropagation(),confirm("Delete this callback?")&&(o(E),c===E&&(e==null||e(null),u(null),l("")))}function L(){if(!c)return;const E=w.find(M=>M.id===c);if(!E)return;const j=E.name.trim();if(!j){alert("Please enter a name");return}if(!Yp(j)){p("Name must contain only alphanumeric characters and underscores");return}if(w.find(M=>M.name===j&&M.id!==E.id)){p("A callback with this name already exists");return}i(E.id,{code:a,name:j,description:E.description,module_path:E.module_path,state_keys_used:E.state_keys_used}),p(null)}function S(E,j){y.current=j;try{rx(j,{endpoint:"/api/code-completion",language:"python"})}catch(T){console.warn("Failed to register Monacopilot completion:",T)}}async function g(){if(N){m(!0);try{let E="before_agent";const j=N.name.toLowerCase(),T=N.description.toLowerCase();j.includes("after_agent")||T.includes("after agent")?E="after_agent":j.includes("before_model")||T.includes("before model")?E="before_model":j.includes("after_model")||T.includes("after model")?E="after_model":j.includes("before_tool")||T.includes("before tool")?E="before_tool":j.includes("after_tool")||T.includes("after tool")?E="after_tool":(j.includes("before_agent")||T.includes("before agent"))&&(E="before_agent");const M=await Wh(t.id,N.name,N.description,E,N.state_keys_used);M.success&&M.code?(l(M.code),i(N.id,{code:M.code})):(console.error("Failed to generate callback code:",M.error),alert("Failed to generate callback code: "+(M.error||"Unknown error")))}catch(E){console.error("Error generating callback code:",E),alert("Error generating callback code: "+E.message)}finally{m(!1)}}}const b=((R=(P=t.app)==null?void 0:P.state_keys)==null?void 0:R.map(E=>E.name))||[];return s.jsxs("div",{className:"tools-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"tools-sidebar",children:[s.jsxs("div",{className:"tools-sidebar-header",children:[s.jsx("h3",{children:"Callbacks"}),s.jsx("button",{className:"btn btn-primary btn-sm",onClick:h,title:"Add Callback",children:s.jsx(Oe,{size:16})})]}),s.jsx("div",{className:"tools-list",children:w.length===0?s.jsx("div",{style:{padding:"16px",color:"var(--text-secondary)",fontSize:"14px"},children:"No callbacks yet. Click + to add one."}):w.map(E=>s.jsxs("div",{className:`tool-item ${c===E.id?"selected":""}`,onClick:()=>x(E.id),children:[s.jsxs("div",{style:{flex:1},children:[s.jsx("div",{className:"tool-item-name",children:E.name}),E.description&&s.jsx("div",{className:"tool-item-type",style:{fontSize:"11px",color:"var(--text-secondary)",marginTop:"2px"},children:E.description})]}),s.jsx("div",{className:"tool-item-actions",children:s.jsx("button",{className:"btn btn-icon btn-sm",onClick:j=>v(E.id,j),title:"Delete",children:s.jsx(Le,{size:14})})})]},E.id))})]}),s.jsx("div",{className:"tools-editor",children:N?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"tools-editor-header",children:[s.jsx("h3",{children:"Edit Callback"}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:L,children:[s.jsx(ou,{size:16,style:{marginRight:"6px"}}),"Save"]})]}),s.jsxs("div",{className:"tools-editor-content",style:{padding:"16px",overflowY:"auto"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Name"}),s.jsx("input",{type:"text",value:N.name,onChange:E=>{const j=E.target.value;i(N.id,{name:j}),d&&Yp(j)&&p(null)},className:d?"error":""}),d&&s.jsx("div",{className:"error-message",children:d})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Description"}),s.jsx("textarea",{value:N.description,onChange:E=>i(N.id,{description:E.target.value}),rows:2,placeholder:"Describe what this callback does..."})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Module Path"}),s.jsx("input",{type:"text",value:N.module_path,onChange:E=>i(N.id,{module_path:E.target.value}),placeholder:"callbacks.custom"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"State Keys Used"}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"8px"},children:b.map(E=>{const j=N.state_keys_used.includes(E);return s.jsxs("button",{type:"button",className:`btn btn-sm ${j?"btn-primary":"btn-secondary"}`,onClick:()=>{const T=j?N.state_keys_used.filter(M=>M!==E):[...N.state_keys_used,E];i(N.id,{state_keys_used:T})},children:[s.jsx(iu,{size:12,style:{marginRight:"4px"}}),E]},E)})}),b.length===0&&s.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"12px",marginTop:"4px"},children:"No state keys defined in App Config"})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[s.jsx("label",{children:"Code"}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:g,disabled:f||!N.name,title:N.name?"Generate code using AI":"Add a name first",children:f?s.jsxs(s.Fragment,{children:[s.jsx(Ur,{size:14,className:"spinning"}),"Generating..."]}):s.jsxs(s.Fragment,{children:[s.jsx(au,{size:14}),"Generate"]})})]}),s.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"8px"},children:"AI will generate code based on the callback name, description, and selected state keys"}),s.jsx("div",{className:"code-editor-container",children:s.jsx(an,{height:"100%",language:"python",theme:"vs-dark",value:a,onChange:E=>l(E||""),onMount:S,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0}})})]})]})]}):s.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)"},children:"Select a callback to edit, or create a new one"})})]})}const Xp={agent_start:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},agent_end:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},tool_call:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},tool_result:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},model_call:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},model_response:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},state_change:{bg:"#3d0d1f",fg:"#fda4af",border:"#f43f5e"},transfer:{bg:"#0d2d3d",fg:"#7dd3fc",border:"#0ea5e9"},callback_start:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},callback_end:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"}},hS={agent_start:Ul,agent_end:Ul,tool_call:Yt,tool_result:Yt,model_call:ru,model_response:vo,state_change:on,transfer:ag,callback_start:In,callback_end:In};function gS(e){var t,n,r,i,o,a,l,c,u,d,p,f,m,y,w,N,x,h,v,L,S;switch(e.event_type){case"agent_start":return`START ${e.agent_name}`;case"agent_end":return(t=e.data)!=null&&t.error?`END ${e.agent_name} [ERROR]`:`END ${e.agent_name}`;case"tool_call":const b=Object.entries(((n=e.data)==null?void 0:n.args)||{}).map(([I,k])=>{const U=k!=null?JSON.stringify(k):"null";return`${I}=${U.slice(0,20)}`}).join(", ")||"";return`CALL ${((r=e.data)==null?void 0:r.tool_name)||"unknown"}(${b.slice(0,60)}${b.length>60?"...":""})`;case"tool_result":const P=(i=e.data)==null?void 0:i.result;let R="";if((a=(o=P==null?void 0:P.content)==null?void 0:o[0])!=null&&a.text)R=String(P.content[0].text).slice(0,60);else if(typeof P=="string")R=P.slice(0,60);else if(P!=null){const I=JSON.stringify(P);R=I?I.slice(0,60):""}else R="";return`RESULT ${((l=e.data)==null?void 0:l.tool_name)||"unknown"} → ${R}${R.length>=60?"...":""}`;case"model_call":return`LLM_REQ ${((u=(c=e.data)==null?void 0:c.contents)==null?void 0:u.length)||0} msgs, ${((d=e.data)==null?void 0:d.tool_count)||0} tools`;case"model_response":const E=((f=(p=e.data)==null?void 0:p.response_content)==null?void 0:f.parts)||((m=e.data)==null?void 0:m.parts)||[],j=E.find(I=>(I==null?void 0:I.type)==="function_call");if(j)return`LLM_RSP → ${j.name||"unknown"}()`;const T=E.find(I=>(I==null?void 0:I.type)==="text");if(T!=null&&T.text){const I=String(T.text);return`LLM_RSP "${I.slice(0,50)}${I.length>50?"...":""}"`}return`LLM_RSP (${((y=e.data)==null?void 0:y.finish_reason)||"complete"})`;case"state_change":return`STATE ${Object.keys(((w=e.data)==null?void 0:w.state_delta)||{}).join(", ")}`;case"transfer":return`TRANSFER → ${((N=e.data)==null?void 0:N.target)||"unknown"}`;case"callback_start":const V=((x=e.data)==null?void 0:x.callback_name)||"unknown",F=((h=e.data)==null?void 0:h.callback_type)||"";return`CALLBACK START ${F?`[${F}]`:""} ${V}`;case"callback_end":const X=((v=e.data)==null?void 0:v.callback_name)||"unknown",z=((L=e.data)==null?void 0:L.callback_type)||"",O=(S=e.data)!=null&&S.error?" [ERROR]":"";return`CALLBACK END ${z?`[${z}]`:""} ${X}${O}`;default:return e.event_type.toUpperCase()}}function xS(e,t){const n=e-t;return n<1?`+${(n*1e3).toFixed(0)}ms`:n<60?`+${n.toFixed(2)}s`:`+${Math.floor(n/60)}m${(n%60).toFixed(0)}s`}function yS({event:e}){var o,a,l,c,u,d,p,f,m,y,w,N,x,h,v,L;const[t,n]=_.useState(new Set(["instruction","messages","result","response","state_delta","data"])),r=S=>{const g=new Set(t);g.has(S)?g.delete(S):g.add(S),n(g)},i=(S,g=0,b=!1)=>{const P="  ".repeat(g),R="  ".repeat(g+1);if(S===null)return s.jsx("span",{className:"json-null",children:"null"});if(S===void 0)return s.jsx("span",{className:"json-undefined",children:"undefined"});if(typeof S=="boolean")return s.jsx("span",{className:"json-boolean",children:S.toString()});if(typeof S=="number")return s.jsx("span",{className:"json-number",children:S});if(typeof S=="string"){const E=S.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\t/g,"\\t");return E.length>300&&g>0?s.jsxs("span",{className:"json-string",children:['"',E.slice(0,300),'..." ',s.jsxs("span",{className:"json-truncated",children:["(",S.length," chars)"]})]}):s.jsxs("span",{className:"json-string",children:['"',E,'"']})}if(Array.isArray(S))return S.length===0?s.jsx("span",{className:"json-bracket",children:"[]"}):S.every(j=>j===null||typeof j!="object")&&S.length<=3?s.jsxs("span",{className:"json-inline",children:[s.jsx("span",{className:"json-bracket",children:"["}),S.map((j,T)=>s.jsxs("span",{children:[i(j,g+1,!0),T<S.length-1&&s.jsx("span",{className:"json-comma",children:", "})]},T)),s.jsx("span",{className:"json-bracket",children:"]"})]}):s.jsxs("span",{className:"json-block",children:[s.jsx("span",{className:"json-bracket",children:"["}),S.map((j,T)=>s.jsxs("span",{children:[`
`+R,i(j,g+1),T<S.length-1&&s.jsx("span",{className:"json-comma",children:","})]},T)),`
`+P,s.jsx("span",{className:"json-bracket",children:"]"})]});if(typeof S=="object"){const E=Object.entries(S);return E.length===0?s.jsx("span",{className:"json-bracket",children:"{}"}):E.length<=2&&E.every(([,T])=>T===null||typeof T!="object")&&b?s.jsxs("span",{className:"json-inline",children:[s.jsx("span",{className:"json-bracket",children:"{"}),E.map(([T,M],V)=>s.jsxs("span",{children:[s.jsxs("span",{className:"json-key",children:['"',T,'"']}),s.jsx("span",{className:"json-colon",children:": "}),i(M,g+1,!0),V<E.length-1&&s.jsx("span",{className:"json-comma",children:", "})]},T)),s.jsx("span",{className:"json-bracket",children:"}"})]}):s.jsxs("span",{className:"json-block",children:[s.jsx("span",{className:"json-bracket",children:"{"}),E.map(([T,M],V)=>s.jsxs("span",{children:[`
`+R,s.jsxs("span",{className:"json-key",children:['"',T,'"']}),s.jsx("span",{className:"json-colon",children:": "}),i(M,g+1),V<E.length-1&&s.jsx("span",{className:"json-comma",children:","})]},T)),`
`+P,s.jsx("span",{className:"json-bracket",children:"}"})]})}return String(S)};return s.jsxs("div",{className:"event-detail",children:[s.jsxs("div",{className:"detail-header",children:[s.jsx("span",{className:"detail-type",children:e.event_type}),s.jsx("span",{className:"detail-agent",children:e.agent_name}),s.jsx("span",{className:"detail-time",children:new Date(e.timestamp*1e3).toISOString()})]}),s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("data"),children:[t.has("data")?s.jsx(Ct,{size:12}):s.jsx(Nt,{size:12}),s.jsx("span",{children:"Event Data"})]}),t.has("data")&&s.jsx("div",{className:"section-content json-viewer",children:i(e.data)})]}),e.event_type==="agent_start"&&((o=e.data)==null?void 0:o.instruction)&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("instruction"),children:[t.has("instruction")?s.jsx(Ct,{size:12}):s.jsx(Nt,{size:12}),s.jsx("span",{children:"Instruction"}),s.jsxs("span",{className:"char-count",children:[e.data.instruction.length," chars"]})]}),t.has("instruction")&&s.jsx("div",{className:"section-content",children:s.jsx("pre",{className:"instruction-text",children:e.data.instruction})})]}),e.event_type==="model_call"&&((a=e.data)==null?void 0:a.contents)&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("messages"),children:[t.has("messages")?s.jsx(Ct,{size:12}):s.jsx(Nt,{size:12}),s.jsxs("span",{children:["Messages (",e.data.contents.length,")"]})]}),t.has("messages")&&s.jsx("div",{className:"section-content",children:e.data.contents.map((S,g)=>{var b;return s.jsxs("div",{className:"message-item",children:[s.jsx("span",{className:`message-role ${S.role}`,children:S.role}),s.jsx("div",{className:"message-parts",children:(b=S.parts)==null?void 0:b.map((P,R)=>s.jsxs("div",{className:"message-part",children:[P.text&&s.jsx("pre",{children:P.text}),P.function_call&&s.jsxs("div",{className:"function-call",children:[s.jsx("strong",{children:P.function_call.name}),s.jsx("pre",{children:JSON.stringify(P.function_call.args,null,2)})]}),P.function_response&&s.jsxs("div",{className:"function-response",children:[s.jsx("strong",{children:P.function_response.name}),s.jsx("pre",{children:JSON.stringify(P.function_response.response,null,2)})]})]},R))})]},g)})})]}),e.event_type==="tool_result"&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("result"),children:[t.has("result")?s.jsx(Ct,{size:12}):s.jsx(Nt,{size:12}),s.jsx("span",{children:"Tool Result"})]}),t.has("result")&&s.jsx("div",{className:"section-content",children:s.jsx("pre",{className:"result-content",children:((d=(u=(c=(l=e.data)==null?void 0:l.result)==null?void 0:c.content)==null?void 0:u[0])==null?void 0:d.text)||(typeof((p=e.data)==null?void 0:p.result)=="string"?e.data.result:JSON.stringify((f=e.data)==null?void 0:f.result,null,2))})})]}),e.event_type==="model_response"&&((m=e.data)==null?void 0:m.parts)&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("response"),children:[t.has("response")?s.jsx(Ct,{size:12}):s.jsx(Nt,{size:12}),s.jsxs("span",{children:["Response (",e.data.parts.length," part",e.data.parts.length!==1?"s":"",")"]}),e.data.token_counts&&s.jsxs("span",{className:"token-badge",children:[e.data.token_counts.input,"↑ ",e.data.token_counts.output,"↓"]})]}),t.has("response")&&s.jsx("div",{className:"section-content",children:e.data.parts.map((S,g)=>s.jsxs("div",{className:"response-part",children:[S.type==="text"&&S.text&&s.jsx("pre",{className:"response-text",children:S.text}),S.type==="function_call"&&s.jsxs("div",{className:"function-call",children:[s.jsxs("strong",{children:["→ ",S.name,"()"]}),S.args&&Object.keys(S.args).length>0&&s.jsx("pre",{children:JSON.stringify(S.args,null,2)})]}),S.thought&&s.jsx("div",{className:"thought-indicator",children:"💭 Thinking"})]},g))})]}),(e.event_type==="callback_start"||e.event_type==="callback_end")&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("callback_info"),children:[t.has("callback_info")?s.jsx(Ct,{size:12}):s.jsx(Nt,{size:12}),s.jsx("span",{children:"Callback Information"})]}),t.has("callback_info")&&s.jsxs("div",{className:"section-content",children:[s.jsxs("div",{children:[s.jsx("strong",{children:"Name:"})," ",((y=e.data)==null?void 0:y.callback_name)||"unknown"]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Type:"})," ",((w=e.data)==null?void 0:w.callback_type)||"unknown"]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Module Path:"})," ",((N=e.data)==null?void 0:N.module_path)||"unknown"]}),((x=e.data)==null?void 0:x.error)&&s.jsxs("div",{style:{color:"#ef4444",marginTop:"8px"},children:[s.jsxs("div",{children:[s.jsx("strong",{children:"Error:"})," ",e.data.error]}),((h=e.data)==null?void 0:h.error_type)&&s.jsxs("div",{style:{marginTop:"4px",fontSize:"0.9em",opacity:.8},children:[s.jsx("strong",{children:"Type:"})," ",e.data.error_type]}),((v=e.data)==null?void 0:v.stack_trace)&&s.jsxs("div",{style:{marginTop:"8px"},children:[s.jsx("strong",{children:"Stack Trace:"}),s.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"300px",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:e.data.stack_trace})]})]})]})]}),e.event_type==="state_change"&&((L=e.data)==null?void 0:L.state_delta)&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("state_delta"),children:[t.has("state_delta")?s.jsx(Ct,{size:12}):s.jsx(Nt,{size:12}),s.jsxs("span",{children:["State Changes (",Object.keys(e.data.state_delta).length,")"]})]}),t.has("state_delta")&&s.jsx("div",{className:"section-content",children:Object.entries(e.data.state_delta).map(([S,g])=>s.jsxs("div",{className:"state-delta-item",children:[s.jsx("div",{className:"state-delta-key",children:S}),s.jsx("pre",{className:"state-delta-value",children:typeof g=="string"?g:JSON.stringify(g,null,2)})]},S))})]})]})}function vS({content:e,title:t,onClose:n}){return s.jsxs("div",{className:"modal-overlay",onClick:n,children:[s.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h3",{children:t}),s.jsx("button",{className:"modal-close",onClick:n,children:"×"})]}),s.jsx("div",{className:"modal-body markdown-content",children:s.jsx(Xg,{children:e})})]}),s.jsx("style",{children:`
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
      `})]})}function bS({events:e,selectedEventIndex:t,project:n}){const[r,i]=_.useState(null),o=_.useMemo(()=>{var u;const l={};return(u=n==null?void 0:n.app)!=null&&u.state_keys&&n.app.state_keys.forEach(d=>{l[d.name]={value:void 0,timestamp:null,defined:!0,description:d.description,type:d.type}}),n!=null&&n.agents&&n.agents.forEach(d=>{if(d.type==="LlmAgent"&&d.output_key){const p=d.output_key;l[p]||(l[p]={value:void 0,timestamp:null,defined:!0,description:`Output from ${d.name}`,type:"string"})}}),(t!==null?e.slice(0,t+1):e).filter(d=>d.event_type==="state_change").forEach(d=>{var p;(p=d.data)!=null&&p.state_delta&&Object.entries(d.data.state_delta).forEach(([f,m])=>{var y;l[f]={...l[f],value:m,timestamp:d.timestamp,defined:((y=l[f])==null?void 0:y.defined)??!1}})}),l},[e,t,n]),a=Object.entries(o);return s.jsxs(s.Fragment,{children:[r&&s.jsx(vS,{content:r.content,title:r.title,onClose:()=>i(null)}),s.jsxs("div",{className:"state-snapshot",children:[s.jsx("style",{children:`
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
      `}),s.jsx("div",{className:"state-header",children:t!==null?`State after event #${t}`:e.length>0?"State at end of run":"Defined State Keys"}),a.length===0?s.jsx("div",{className:"state-empty",children:"No state keys defined"}):a.map(([l,{value:c,timestamp:u,defined:d,description:p,type:f}])=>s.jsxs("div",{className:`state-entry ${c===void 0?"unset":""}`,children:[s.jsxs("div",{className:"state-key",children:[l,f&&s.jsxs("span",{className:"state-type",children:["(",f,")"]})]}),s.jsx("div",{className:"state-value",onClick:()=>{if(c!==void 0){const m=typeof c=="string"?c:JSON.stringify(c,null,2);i({content:m,title:l})}},style:{cursor:c!==void 0?"pointer":"default"},title:c!==void 0?"Click to view in markdown viewer":void 0,children:c===void 0?"(not set)":typeof c=="string"?c:JSON.stringify(c,null,2)}),p&&s.jsx("div",{className:"state-desc",children:p}),u&&s.jsx("div",{className:"state-time",children:new Date(u*1e3).toLocaleTimeString()})]},l))]})]})}function Va(e){if(!e)return{text:"",isError:!1};if(e.success===!1)return{text:e.error||"Unknown error",isError:!0};let t=e.result||e;if(typeof t=="string")try{const n=t.replace(/'/g,'"').replace(/True/g,"true").replace(/False/g,"false").replace(/None/g,"null");t=JSON.parse(n)}catch{return{text:t,isError:!1}}return t.content&&Array.isArray(t.content)?{text:t.content.filter(r=>r.type==="text").map(r=>r.text).join(`
`),isError:t.isError===!0}:{text:typeof t=="string"?t:JSON.stringify(t,null,2),isError:!1}}function Zp(e,t){if(!t||!t.trim())return e;const n=t.trim();let r=e;try{r=JSON.parse(e)}catch{}if(n.startsWith("js:")){const i=n.slice(3).trim();try{const a=new Function("value","data",`return ${i}`)(e,r);return typeof a=="string"?a:JSON.stringify(a,null,2)}catch(o){return`[JS error: ${o}]`}}if(n.startsWith("."))try{const i=n.slice(1).split(".").filter(Boolean);let o=r;for(const a of i){const l=a.match(/^(\w+)?\[(\d+)\]$/);l?(l[1]&&(o=o[l[1]]),o=o[parseInt(l[2])]):o=o[a]}return o==null?"[No match]":typeof o=="string"?o:JSON.stringify(o,null,2)}catch(i){return`[Path error: ${i.message}]`}try{const o=new Function("value","data",`return ${n}`)(e,r);return typeof o=="string"?o:JSON.stringify(o,null,2)}catch(i){return`[Transform error: ${i.message}]`}}function kS({project:e,selectedEventIndex:t}){var Z;const{watches:n,updateWatch:r,addWatch:i,removeWatch:o,runEvents:a}=et(),[l,c]=_.useState(!1),[u,d]=_.useState(null),[p,f]=_.useState({}),[m,y]=_.useState(new Set),[w,N]=_.useState(""),[x,h]=_.useState(""),[v,L]=_.useState({}),[S,g]=_.useState(""),[b,P]=_.useState([]),[R,E]=_.useState(null),[j,T]=_.useState(null),[M,V]=_.useState(!1);_.useEffect(()=>{nu().then(P).catch(console.error)},[]);const F=_.useMemo(()=>{const B=e.mcp_servers||[],te=new Set(B.map($=>$.name)),ae=b.filter($=>!te.has($.name));return[...B,...ae]},[e.mcp_servers,b]),X=_.useCallback(async B=>{if(!(p[B]||m.has(B))){y(te=>new Set([...te,B]));try{const te=await ve(`/projects/${e.id}/mcp-servers/${encodeURIComponent(B)}/test-connection`,{method:"POST"});te.success&&f(ae=>({...ae,[B]:te.tools}))}catch(te){console.error("Failed to load tools:",te)}finally{y(te=>{const ae=new Set(te);return ae.delete(B),ae})}}},[e.id,p,m]);_.useEffect(()=>{var $;if(u)return;if(!w||!x){L({});return}const te=(p[w]||[]).find(q=>q.name===x);if(!(($=te==null?void 0:te.parameters)!=null&&$.properties)){L({});return}const ae={};Object.entries(te.parameters.properties).forEach(([q,J])=>{J.type==="string"?ae[q]=J.default||"":J.type==="number"||J.type==="integer"?ae[q]=J.default||0:J.type==="boolean"?ae[q]=J.default||!1:ae[q]=J.default||null}),L(ae)},[w,x,p,u]);const z=()=>{d(null),N(""),h(""),L({}),g(""),E(null),T(null),c(!0)},O=B=>{if(d(B.id),N(B.serverName),h(B.toolName),L({...B.args}),g(B.transform||""),B.result){const{text:te}=Va(B.result);E(te),T(null)}else E(null),T(null);p[B.serverName]||X(B.serverName),c(!0)},I=async()=>{if(!(!w||!x)){V(!0),T(null);try{const B=await ve(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:w,tool_name:x,arguments:v})}),{text:te,isError:ae}=Va(B);ae?(T(te),E(null)):(E(te),T(null))}catch(B){T(String(B)),E(null)}finally{V(!1)}}},k=_.useMemo(()=>R?!S||!S.trim()?R:Zp(R,S):null,[R,S]),U=()=>{if(!(!w||!x)){if(u){r(u,{serverName:w,toolName:x,args:{...v},transform:S||void 0});const B=n.find(te=>te.id===u);B&&C({...B,serverName:w,toolName:x,args:v,transform:S||void 0,history:B.history||[]})}else{const B={id:`watch-${Date.now()}`,serverName:w,toolName:x,args:{...v},transform:S||void 0,history:[]};i(B),C(B)}c(!1)}},K=B=>{o(B)},C=_.useCallback(async(B,te)=>{r(B.id,{isLoading:!0,error:void 0});const ae=te??a.length-1,$=Date.now();try{const q=await ve(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:B.serverName,tool_name:B.toolName,arguments:B.args})}),J={eventIndex:ae,timestamp:$,result:q},G=[...B.history||[],J];r(B.id,{result:q,isLoading:!1,lastRun:$,history:G})}catch(q){const J={eventIndex:ae,timestamp:$,error:String(q)},G=[...B.history||[],J];r(B.id,{error:String(q),isLoading:!1,lastRun:$,history:G})}},[e.id,r,a.length]),le=()=>{n.forEach(B=>C(B))},A=_.useMemo(()=>!w||!x?null:(p[w]||[]).find(te=>te.name===x),[w,x,p]);return s.jsxs("div",{className:"tool-watch-panel",children:[s.jsxs("div",{className:"watch-header",children:[s.jsx(Hi,{size:14}),s.jsx("span",{children:"Tool Watch"}),s.jsx("span",{className:"watch-auto-badge",title:"Watches auto-refresh on every event",children:"⚡ Auto"}),s.jsxs("div",{className:"watch-actions",children:[s.jsx("button",{className:"watch-btn",onClick:le,title:"Refresh all",children:s.jsx(wn,{size:12})}),s.jsx("button",{className:"watch-btn",onClick:z,title:"Add watch",children:s.jsx(Oe,{size:12})})]})]}),n.length===0?s.jsxs("div",{className:"watch-empty",children:[s.jsx(Hi,{size:20,style:{opacity:.3}}),s.jsx("span",{children:"No watch expressions"}),s.jsxs("button",{className:"add-watch-btn",onClick:z,children:[s.jsx(Oe,{size:12})," Add Tool Watch"]})]}):s.jsx("div",{className:"watch-list",children:n.map(B=>{let te=B.result,ae=B.error;if(t!==null&&B.history&&B.history.length>0){const ne=B.history.filter(ce=>ce.eventIndex<=t);if(ne.length>0){const ce=ne[ne.length-1];te=ce.result,ae=ce.error}else te=void 0,ae=void 0}const{text:$,isError:q}=te?Va(te):{text:"",isError:!1},J=te?Zp($,B.transform):"",G=ae||q;return s.jsxs("div",{className:`watch-item ${G?"error":""}`,children:[s.jsxs("div",{className:"watch-item-header",children:[s.jsxs("span",{className:"watch-expr",children:[s.jsx("span",{className:"watch-server",children:B.serverName}),s.jsx("span",{className:"watch-tool",children:B.toolName}),Object.keys(B.args).length>0&&s.jsxs("span",{className:"watch-args",children:["(",Object.entries(B.args).map(([ne,ce])=>`${ne}=${JSON.stringify(ce)}`).join(", "),")"]}),t!==null&&s.jsxs("span",{className:"watch-time-indicator",children:["@",t]})]}),s.jsxs("div",{className:"watch-item-actions",children:[s.jsx("button",{onClick:()=>O(B),title:"Edit watch",children:s.jsx(Yt,{size:10})}),s.jsx("button",{onClick:()=>C(B),title:"Refresh",children:B.isLoading?s.jsx(wn,{size:10,className:"spin"}):s.jsx(wn,{size:10})}),s.jsx("button",{onClick:()=>K(B.id),title:"Remove",children:s.jsx(Le,{size:10})})]})]}),s.jsx("div",{className:"watch-result",children:B.isLoading?s.jsx("span",{className:"loading",children:"Loading..."}):ae?s.jsx("span",{className:"error",children:ae}):te?s.jsx("pre",{className:q?"error-text":"",children:J}):s.jsx("span",{className:"no-result",children:t!==null?"No data at this event":"Not yet run"})})]},B.id)})}),l&&s.jsx("div",{className:"watch-dialog-overlay",onClick:()=>c(!1),children:s.jsxs("div",{className:"watch-dialog",onClick:B=>B.stopPropagation(),children:[s.jsxs("div",{className:"dialog-header",children:[s.jsx("span",{children:u?"Edit Watch":"Add Tool Watch"}),s.jsx("button",{onClick:()=>c(!1),children:s.jsx(og,{size:14})})]}),s.jsxs("div",{className:"dialog-body",children:[s.jsxs("div",{className:"form-row",children:[s.jsx("label",{children:"MCP Server"}),s.jsxs("select",{value:w,onChange:B=>{N(B.target.value),u||h(""),B.target.value&&X(B.target.value)},children:[s.jsx("option",{value:"",children:"Select server..."}),F.map(B=>s.jsx("option",{value:B.name,children:B.name},B.name))]})]}),s.jsxs("div",{className:"form-row",children:[s.jsx("label",{children:"Tool"}),s.jsxs("select",{value:x,onChange:B=>h(B.target.value),disabled:!w||m.has(w),children:[s.jsx("option",{value:"",children:m.has(w)?"Loading tools...":"Select tool..."}),(p[w]||[]).map(B=>s.jsx("option",{value:B.name,children:B.name},B.name))]})]}),(A==null?void 0:A.description)&&s.jsx("div",{className:"tool-desc",children:A.description}),((Z=A==null?void 0:A.parameters)==null?void 0:Z.properties)&&Object.keys(A.parameters.properties).length>0&&s.jsxs("div",{className:"tool-args",children:[s.jsx("label",{children:"Arguments"}),Object.entries(A.parameters.properties).map(([B,te])=>{var ae,$;return s.jsxs("div",{className:"arg-row",children:[s.jsxs("span",{className:"arg-name",children:[B,((ae=A.parameters.required)==null?void 0:ae.includes(B))&&s.jsx("span",{className:"required",children:"*"})]}),s.jsx("input",{type:te.type==="number"||te.type==="integer"?"number":"text",value:typeof v[B]=="object"?JSON.stringify(v[B]):v[B]??"",onChange:q=>L(J=>({...J,[B]:q.target.value})),placeholder:(($=te.description)==null?void 0:$.slice(0,40))||B})]},B)})]}),w&&x&&s.jsxs("div",{className:"test-section",children:[s.jsxs("div",{className:"test-header",children:[s.jsx("label",{children:"Test & Preview"}),s.jsxs("button",{className:"test-btn",onClick:I,disabled:M,children:[M?s.jsx(wn,{size:12,className:"spin"}):s.jsx(Mn,{size:12}),M?"Running...":"Test Run"]})]}),j&&s.jsxs("div",{className:"test-result error",children:[s.jsx("span",{className:"test-label",children:"Error:"}),s.jsx("pre",{children:j})]}),R&&s.jsxs("div",{className:"test-result",children:[s.jsx("span",{className:"test-label",children:"Raw Result:"}),s.jsx("pre",{children:R})]})]}),s.jsxs("div",{className:"form-row transform-row",children:[s.jsx("label",{children:"Transform (optional)"}),s.jsx("input",{type:"text",value:S,onChange:B=>g(B.target.value),placeholder:"e.g., .items[0].name or .content[].text"}),s.jsxs("div",{className:"transform-hints",children:[s.jsx("span",{className:"hint-title",children:"Path:"}),s.jsx("code",{onClick:()=>g(".items[0].name"),children:".items[0].name"}),s.jsx("code",{onClick:()=>g(".content[0].text"),children:".content[0].text"}),s.jsx("code",{onClick:()=>g(".result.data"),children:".result.data"}),s.jsx("span",{className:"hint-title",children:"JS:"}),s.jsx("code",{onClick:()=>g("js:value.split('\\n')[0]"),children:"js:value.split('\\n')[0]"}),s.jsx("code",{onClick:()=>g("js:data.items?.length"),children:"js:data.items?.length"})]})]}),R&&S&&s.jsxs("div",{className:"transform-preview",children:[s.jsx("span",{className:"test-label",children:"Transform Preview:"}),s.jsx("pre",{className:k!=null&&k.startsWith("[Transform error")?"error":"",children:k})]})]}),s.jsxs("div",{className:"dialog-footer",children:[s.jsx("button",{className:"cancel-btn",onClick:()=>c(!1),children:"Cancel"}),s.jsx("button",{className:"add-btn",onClick:U,disabled:!w||!x,children:u?"Save Changes":"Add Watch"})]})]})})]})}function jS(){var St;const{project:e,isRunning:t,setIsRunning:n,runEvents:r,addRunEvent:i,clearRunEvents:o,clearWatchHistories:a,runAgentId:l,setRunAgentId:c,watches:u,updateWatch:d,currentSessionId:p,setCurrentSessionId:f}=et(),[m,y]=_.useState(""),[w,N]=_.useState(null),[x,h]=_.useState(null),[v,L]=_.useState(null),[S,g]=_.useState(""),[b,P]=_.useState(new Set(["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_start","callback_end"])),[R,E]=_.useState(!0),[j,T]=_.useState(!0),[M,V]=_.useState(!1),[F,X]=_.useState(360),[z,O]=_.useState(!1),[I,k]=_.useState([]),[U,K]=_.useState(null),[C,le]=_.useState(!1),A=_.useRef(0),Z=_.useCallback(async(D,ie)=>{if(!e)return;d(D.id,{isLoading:!0,error:void 0});const se=ie??r.length-1,ue=Date.now();try{const me=await ve(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:D.serverName,tool_name:D.toolName,arguments:D.args})}),We={eventIndex:se,timestamp:ue,result:me},Vn=[...D.history||[],We];d(D.id,{result:me,isLoading:!1,lastRun:ue,history:Vn})}catch(me){const We={eventIndex:se,timestamp:ue,error:String(me)},Vn=[...D.history||[],We];d(D.id,{error:String(me),isLoading:!1,lastRun:ue,history:Vn})}},[e==null?void 0:e.id,d,r.length]);_.useEffect(()=>{if(r.length>A.current&&u.length>0){const D=r.length-1;u.forEach(ie=>{ie.isLoading||Z(ie,D)})}A.current=r.length},[r.length,u,Z]),_.useEffect(()=>{l!==null&&(te(l),c(null))},[l,c]);const[B,te]=_.useState(null),ae=_.useRef(null),$=_.useRef(null);_.useEffect(()=>{if(!z)return;const D=se=>{if(!$.current)return;const me=$.current.getBoundingClientRect().right-se.clientX;X(Math.min(600,Math.max(200,me)))},ie=()=>{O(!1)};return document.addEventListener("mousemove",D),document.addEventListener("mouseup",ie),()=>{document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",ie)}},[z]);const q=_.useMemo(()=>r.length===0?{min:0,max:0}:{min:r[0].timestamp,max:r[r.length-1].timestamp},[r]),J=_.useMemo(()=>r.filter((D,ie)=>{var se,ue,me;if(v&&(D.timestamp<v[0]||D.timestamp>v[1])||b.size>0&&!b.has(D.event_type))return!1;if(R&&D.event_type==="model_response"){const We=((ue=(se=D.data)==null?void 0:se.response_content)==null?void 0:ue.parts)||((me=D.data)==null?void 0:me.parts)||[],Vn=We.some(Xo=>Xo.type==="function_call"),ox=We.some(Xo=>Xo.type==="text");if(!Vn&&!ox)return!1}return!(S&&!JSON.stringify(D).toLowerCase().includes(S.toLowerCase()))}),[r,v,b,S,R]),G=_.useMemo(()=>{var ue;let D=0,ie=0;const se=x!==null?x+1:r.length;for(let me=0;me<se;me++){const We=r[me];We.event_type==="model_response"&&((ue=We.data)!=null&&ue.token_counts)&&(D+=We.data.token_counts.input||0,ie+=We.data.token_counts.output||0)}return{input:D,output:ie,total:D+ie}},[r,x]),ne=x!==null?r[x]:null;_.useEffect(()=>{if(!e){k([]);return}(async()=>{le(!0);try{const ie=await Bl(e.id);k(ie)}catch(ie){console.error("Failed to load sessions:",ie),k([])}finally{le(!1)}})()},[e]);const ce=_.useCallback(async D=>{if(!e){K(null);return}if(!D){o(),a(),f(null),K(null),h(null),L(null);return}try{const ie=await Oh(e.id,D);o(),a(),f(ie.id),K(D),h(null),L(null);for(const se of ie.events)i(se)}catch(ie){alert(`Failed to load session: ${ie.message||"Unknown error"}`)}},[e,o,a,f,i]);_.useEffect(()=>{if(!e||I.length===0||C)return;const ie=new URLSearchParams(window.location.search).get("session");if(ie)if(I.some(ue=>ue.id===ie)){ce(ie);const ue=window.location.pathname;window.history.replaceState({},"",ue)}else console.warn(`Session ${ie} not found in available sessions`)},[e,I,C,ce]),_.useEffect(()=>{t&&ae.current&&(ae.current.scrollTop=ae.current.scrollHeight)},[r.length,t]);const Ce=_.useCallback(()=>{if(!e||!m.trim()||t)return;w&&(w.close(),N(null)),p||(o(),a(),K(null)),n(!0),h(null),L(null);const D=Bh(e.id);N(D),D.onopen=()=>{D.send(JSON.stringify({message:m,agent_id:B||void 0,session_id:p||void 0}))},D.onmessage=ie=>{var ue;const se=JSON.parse(ie.data);if(se.event_type==="agent_start"&&((ue=se.data)!=null&&ue.session_id)){const me=se.data.session_id;se.data.session_reused,f(me),me&&I.some(We=>We.id===me)&&K(me)}else se.type==="session_started"?(f(se.session_id),se.session_id&&I.some(me=>me.id===se.session_id)&&K(se.session_id)):se.type==="completed"?(n(!1),D.close()):se.type==="error"?(n(!1),i({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:se.error}})):i(se)},D.onerror=()=>{n(!1),i({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:"WebSocket connection error"}})},D.onclose=()=>{n(!1)}},[e,m,t,w,o,n,i,B,p]),W=_.useCallback(()=>{w==null||w.close(),n(!1)},[w,n]);_.useEffect(()=>{const D=ie=>{if((ie.metaKey||ie.ctrlKey)&&ie.key==="Enter"){ie.preventDefault(),Ce();return}if(ie.key==="ArrowDown"||ie.key==="ArrowUp"){if(ie.target instanceof HTMLInputElement||ie.target instanceof HTMLTextAreaElement||(ie.preventDefault(),J.length===0))return;if(ie.key==="ArrowDown")if(x===null){const se=r.indexOf(J[0]);h(se)}else{const se=J.findIndex(ue=>r.indexOf(ue)===x);if(se<J.length-1){const ue=r.indexOf(J[se+1]);h(ue)}}else if(ie.key==="ArrowUp")if(x===null){const se=r.indexOf(J[J.length-1]);h(se)}else{const se=J.findIndex(ue=>r.indexOf(ue)===x);if(se>0){const ue=r.indexOf(J[se-1]);h(ue)}}}};return window.addEventListener("keydown",D),()=>window.removeEventListener("keydown",D)},[Ce,J,x,r]);const he=_.useCallback(()=>{var me;if(r.length===0)return;const D={version:1,exportedAt:new Date().toISOString(),projectId:e==null?void 0:e.id,projectName:e==null?void 0:e.name,agentId:B||((me=e==null?void 0:e.app)==null?void 0:me.root_agent_id),events:r},ie=new Blob([JSON.stringify(D,null,2)],{type:"application/json"}),se=URL.createObjectURL(ie),ue=document.createElement("a");ue.href=se,ue.download=`run-${(e==null?void 0:e.name)||"export"}-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,document.body.appendChild(ue),ue.click(),document.body.removeChild(ue),URL.revokeObjectURL(se)},[r,e,B]),Te=_.useCallback(async()=>{if(!p||!e){alert("No active session to save");return}try{const D=await Mh(p);if(D.success){alert(D.message||"Session saved to memory successfully");try{const ie=await Bl(e.id);k(ie)}catch{}}else alert(`Failed to save to memory: ${D.error||"Unknown error"}`)}catch(D){alert(`Error saving to memory: ${D.message||"Unknown error"}`)}},[p,e]),[mt,fn]=_.useState(!1),[Go,Yo]=_.useState([]),[Un,os]=_.useState(""),[H,ee]=_.useState("Test Case from Session"),[pe,ge]=_.useState(!1),ke=_.useCallback(async()=>{if(!p||!e){alert("No active session to create test case from");return}try{const D=await ve(`/projects/${e.id}/eval-sets`);if(Yo(D.eval_sets||[]),!D.eval_sets||D.eval_sets.length===0){confirm(`No evaluation sets found. Would you like to create one first?

Go to the Evals tab to create an evaluation set.`)&&(window.location.href=`/project/${e.id}/evals`);return}os(D.eval_sets[0].id),fn(!0)}catch(D){alert(`Error loading eval sets: ${D.message||"Unknown error"}`)}},[p,e]),ht=_.useCallback(async()=>{if(!p||!e||!Un){alert("Please select an evaluation set");return}ge(!0);try{const D=await ve(`/projects/${e.id}/session-to-eval-case`,{method:"POST",body:JSON.stringify({session_id:p,eval_set_id:Un,case_name:H})});fn(!1),alert(`Test case "${D.eval_case.name}" created successfully!

Token count: ${D.session_token_count.toLocaleString()} tokens

Go to the Evals tab to view and edit the test case.`)}catch(D){alert(`Error creating test case: ${D.message||"Unknown error"}`)}finally{ge(!1)}},[p,e,Un,H]),Zt=_.useCallback(()=>{const D=document.createElement("input");D.type="file",D.accept=".json",D.onchange=async ie=>{var ue;const se=(ue=ie.target.files)==null?void 0:ue[0];if(se)try{const me=await se.text(),We=JSON.parse(me);if(!We.events||!Array.isArray(We.events)){alert("Invalid run file: missing events array");return}o(),a(),h(null),L(null),We.events.forEach(Vn=>{i(Vn)})}catch(me){alert(`Failed to load run file: ${me}`)}},D.click()},[o,a,i]);return _.useEffect(()=>{if(x!==null){const D=document.querySelector(".event-row.selected");D==null||D.scrollIntoView({behavior:"smooth",block:"nearest"})}},[x]),e?s.jsxs("div",{className:`run-panel ${z?"resizing":""}`,children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"input-area",children:[s.jsxs("select",{className:"agent-selector",value:B||"",onChange:D=>te(D.target.value||null),disabled:t,title:"Select which agent to run",children:[s.jsx("option",{value:"",children:e.app.root_agent_id?`Root: ${((St=e.agents.find(D=>D.id===e.app.root_agent_id))==null?void 0:St.name)||e.app.root_agent_id}`:"No root agent"}),e.agents.filter(D=>D.id!==e.app.root_agent_id).map(D=>s.jsxs("option",{value:D.id,children:[D.name," (",D.type.replace("Agent",""),")"]},D.id))]}),s.jsxs("select",{className:"agent-selector",value:U||"",onChange:D=>ce(D.target.value||null),disabled:t||C,style:{minWidth:180},title:"Load a saved session",children:[s.jsx("option",{value:"",children:C?"Loading...":"Load Session..."}),I.map(D=>{const ie=new Date(D.started_at*1e3),se=D.duration?`${D.duration.toFixed(1)}s`:"?";return s.jsxs("option",{value:D.id,children:[ie.toLocaleString()," (",D.event_count," events, ",se,")"]},D.id)})]}),s.jsx("input",{type:"text",placeholder:"Enter your query...",value:m,onChange:D=>y(D.target.value),onKeyDown:D=>D.key==="Enter"&&!D.shiftKey&&Ce(),disabled:t}),t?s.jsxs("button",{className:"stop",onClick:W,children:[s.jsx(v0,{size:14}),"Stop"]}):s.jsxs("button",{onClick:Ce,disabled:!m.trim(),children:[s.jsx(Mn,{size:14}),"Run"]})]}),s.jsxs("div",{className:"toolbar",children:[s.jsxs("div",{className:"toolbar-section",children:[s.jsx(rg,{size:12,style:{color:"#71717a"}}),s.jsx("input",{type:"text",placeholder:"Filter events...",value:S,onChange:D=>g(D.target.value)})]}),s.jsx("div",{className:"toolbar-divider"}),s.jsxs("div",{className:"toolbar-section",children:[["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change"].map(D=>s.jsx("button",{className:`filter-chip ${b.has(D)?"active":""}`,onClick:()=>{const ie=new Set(b);ie.has(D)?ie.delete(D):ie.add(D),P(ie)},children:D.replace("_"," ")},D)),s.jsx("button",{className:`filter-chip ${b.has("callback_start")&&b.has("callback_end")?"active":""}`,onClick:()=>{const D=new Set(b);D.has("callback_start")&&D.has("callback_end")?(D.delete("callback_start"),D.delete("callback_end")):(D.add("callback_start"),D.add("callback_end")),P(D)},title:"Show/hide callback events",children:"callback"}),s.jsx("button",{className:`filter-chip ${R?"active":""}`,onClick:()=>E(!R),title:"Hide LLM_RESP (complete) events",children:"hide (complete)"})]}),s.jsx("div",{className:"toolbar-divider"}),s.jsxs("div",{className:"toolbar-section",children:[s.jsxs("button",{className:`toolbar-btn ${j?"active":""}`,onClick:()=>T(!j),children:[s.jsx(on,{size:12}),"State"]}),s.jsxs("button",{className:`toolbar-btn ${M?"active":""}`,onClick:()=>V(!M),children:[s.jsx(Yd,{size:12}),"Tools"]})]}),s.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:[s.jsxs("span",{style:{fontSize:10,color:"#71717a"},children:[J.length," / ",r.length," events"]}),v&&s.jsx("button",{className:"toolbar-btn",onClick:()=>L(null),children:"Clear Range"})]})]}),s.jsxs("div",{className:"main-content",ref:$,children:[s.jsxs("div",{className:"event-list-container",children:[s.jsxs("div",{className:"event-list-header",children:[s.jsx("div",{children:"#"}),s.jsx("div",{children:"Time"}),s.jsx("div",{children:"Agent"}),s.jsx("div",{children:"Type"}),s.jsx("div",{children:"Info"})]}),s.jsx("div",{className:"event-list",ref:ae,children:J.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(ng,{size:24}),s.jsx("span",{children:r.length===0?"No events yet":"No matching events"})]}):J.map((D,ie)=>{const se=r.indexOf(D),ue=Xp[D.event_type]||Xp.error,me=hS[D.event_type]||vo;return s.jsxs("div",{className:`event-row ${x===se?"selected":""}`,style:{background:ue.bg},onClick:()=>h(se),onDoubleClick:()=>{T(!1),V(!1)},children:[s.jsx("div",{className:"index",children:se}),s.jsx("div",{className:"time",style:{color:ue.fg},children:xS(D.timestamp,q.min)}),s.jsx("div",{className:"agent",style:{color:ue.fg},children:D.agent_name}),s.jsxs("div",{className:"type",style:{color:ue.fg},children:[s.jsx(me,{size:10}),D.event_type.split("_")[0]]}),s.jsx("div",{className:"summary",children:gS(D)})]},se)})})]}),s.jsxs("div",{className:"side-panel-container",style:{width:F},children:[s.jsx("div",{className:`resize-handle ${z?"active":""}`,onMouseDown:()=>O(!0)}),s.jsxs("div",{className:"side-panel",style:{width:F-4},children:[s.jsxs("div",{className:"side-panel-tabs",children:[s.jsxs("button",{className:`side-panel-tab ${!j&&!M?"active":""}`,onClick:()=>{T(!1),V(!1)},children:[s.jsx(Hi,{size:12,style:{marginRight:4}}),"Details"]}),s.jsxs("button",{className:`side-panel-tab ${j?"active":""}`,onClick:()=>{T(!0),V(!1)},children:[s.jsx(on,{size:12,style:{marginRight:4}}),"State"]}),s.jsxs("button",{className:`side-panel-tab ${M?"active":""}`,onClick:()=>{V(!0),T(!1)},children:[s.jsx(Yd,{size:12,style:{marginRight:4}}),"Tools"]})]}),s.jsx("div",{className:"side-panel-content",children:M?s.jsx(kS,{project:e,selectedEventIndex:x}):j?s.jsx(bS,{events:r,selectedEventIndex:x,project:e}):ne?s.jsx(yS,{event:ne}):s.jsxs("div",{className:"empty-state",children:[s.jsx(Hi,{size:24}),s.jsx("span",{children:"Select an event to view details"})]})})]})]})]}),s.jsxs("div",{className:"stats-bar",children:[s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Events:"}),s.jsx("span",{className:"stat-value",children:r.length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Tool Calls:"}),s.jsx("span",{className:"stat-value",children:r.filter(D=>D.event_type==="tool_call").length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Model Calls:"}),s.jsx("span",{className:"stat-value",children:r.filter(D=>D.event_type==="model_call").length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Callbacks:"}),s.jsx("span",{className:"stat-value",children:r.filter(D=>D.event_type==="callback_start").length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"State Changes:"}),s.jsx("span",{className:"stat-value",children:r.filter(D=>D.event_type==="state_change").length})]}),r.length>0&&s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Duration:"}),s.jsxs("span",{className:"stat-value",children:[((r[r.length-1].timestamp-r[0].timestamp)*1e3).toFixed(0),"ms"]})]}),G.total>0&&s.jsx("div",{className:"stat-item token-stats",children:s.jsxs("span",{className:"stat-value token-value",children:[s.jsxs("span",{className:"token-in",title:"Input tokens",children:[G.input.toLocaleString(),"↑"]}),s.jsxs("span",{className:"token-out",title:"Output tokens",children:[G.output.toLocaleString(),"↓"]}),s.jsx("span",{className:"token-total",title:"Total tokens",children:G.total.toLocaleString()})]})}),s.jsx("div",{className:"stats-bar-spacer"}),s.jsxs("button",{className:"stats-bar-btn",onClick:Zt,title:"Load a saved run",children:[s.jsx(Vo,{size:12}),"Load"]}),s.jsxs("button",{className:"stats-bar-btn",onClick:he,disabled:r.length===0,title:"Save current run to file",children:[s.jsx(ns,{size:12}),"Save"]}),s.jsxs("button",{className:"stats-bar-btn",onClick:Te,disabled:!p||r.length===0,title:"Save current session to memory",children:[s.jsx(on,{size:12}),"Save to Memory"]}),s.jsxs("button",{className:"stats-bar-btn",onClick:ke,disabled:!p||r.length===0,title:"Create evaluation test case from this session",style:{background:"rgba(var(--accent-primary-rgb), 0.15)"},children:[s.jsx(Hl,{size:12}),"Create Test Case"]})]}),mt&&s.jsx("div",{className:"dialog-overlay",style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>fn(!1),children:s.jsxs("div",{className:"dialog-content",style:{background:"var(--bg-secondary)",borderRadius:"var(--radius-md)",padding:24,width:400,maxWidth:"90vw",border:"1px solid var(--border-color)"},onClick:D=>D.stopPropagation(),children:[s.jsxs("h3",{style:{marginBottom:16,display:"flex",alignItems:"center",gap:8},children:[s.jsx(Hl,{size:18}),"Create Test Case from Session"]}),s.jsxs("div",{style:{marginBottom:16},children:[s.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Test Case Name"}),s.jsx("input",{type:"text",value:H,onChange:D=>ee(D.target.value),placeholder:"Enter test case name",style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"}})]}),s.jsxs("div",{style:{marginBottom:20},children:[s.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Add to Evaluation Set"}),s.jsx("select",{value:Un,onChange:D=>os(D.target.value),style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"},children:Go.map(D=>s.jsx("option",{value:D.id,children:D.name},D.id))})]}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:16},children:"This will extract user messages and tool calls from the current session to create a replayable test case. You can edit the expected responses and tool calls in the Evals tab after creation."}),s.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[s.jsx("button",{className:"btn btn-secondary",onClick:()=>fn(!1),children:"Cancel"}),s.jsx("button",{className:"btn btn-primary",onClick:ht,disabled:pe||!Un,children:pe?"Creating...":"Create Test Case"})]})]})})]}):s.jsx("div",{className:"run-panel empty",children:"No project loaded"})}const wS=()=>Math.random().toString(36).substring(2,10),_S=()=>({id:wS(),name:"New SkillSet",description:"",embedding_model:void 0,app_model_id:void 0,external_store_type:void 0,external_store_config:{},search_enabled:!0,preload_enabled:!0,preload_top_k:3,preload_min_score:.4,sources:[],entry_count:0});function SS(){const{project:e,setProject:t}=et(),[n,r]=_.useState(null),[i,o]=_.useState(null),[a,l]=_.useState(""),[c,u]=_.useState([]),[d,p]=_.useState(!1),[f,m]=_.useState(!1),[y,w]=_.useState(""),[N,x]=_.useState(!1),[h,v]=_.useState(null),[L,S]=_.useState(null),g=_.useRef(null),b=(e==null?void 0:e.skillsets)||[],P=b.find(I=>I.id===n);_.useEffect(()=>{Yh().then(I=>S(I.available)).catch(()=>S(!1))},[]),_.useEffect(()=>{b.length>0&&!n&&r(b[0].id)},[b,n]),_.useEffect(()=>{!e||!n||R()},[e==null?void 0:e.id,n]);const R=_.useCallback(async()=>{if(!(!e||!n))try{const I=await qh(e.id,n);o(I),j(n,{entry_count:I.entry_count})}catch(I){console.error("Failed to load stats:",I)}},[e==null?void 0:e.id,n]),E=I=>{e&&t({...e,...I})},j=(I,k)=>{e&&t({...e,skillsets:e.skillsets.map(U=>U.id===I?{...U,...k}:U)})},T=()=>{if(!e)return;const I=_S();E({skillsets:[...b,I]}),r(I.id)},M=I=>{e&&confirm("Delete this SkillSet and all its data?")&&(E({skillsets:b.filter(k=>k.id!==I)}),n===I&&r(b.length>1?b[0].id:null),o(null),u([]))},V=async()=>{if(!(!e||!n||!a.trim())){p(!0),v(null);try{const I=await Qh(e.id,n,a.trim(),10,0);u(I.results)}catch(I){v("Search failed"),console.error(I)}finally{p(!1)}}},F=async()=>{if(!(!e||!n||!y.trim())){x(!0),v(null);try{const I=await Jh(e.id,n,y.trim());w(""),await R(),alert(`Added ${I.chunks_added} chunks from ${I.source_name}`)}catch(I){v(I.message||"Failed to fetch URL")}finally{x(!1)}}},X=async I=>{var U;const k=(U=I.target.files)==null?void 0:U[0];if(!(!k||!e||!n)){v(null);try{const K=await Kh(e.id,n,k);await R(),alert(`Added ${K.chunks_added} chunks from ${K.source_name}`)}catch(K){v(K.message||"Upload failed")}g.current&&(g.current.value="")}},z=async()=>{if(!(!e||!n)&&confirm("Delete all entries in this SkillSet?"))try{await Gh(e.id,n),await R(),u([])}catch{v("Clear failed")}},O=I=>{const k=Math.round(I*100),U=160,K=70,C=20+(1-I)*15,le=.15+I*.25;return`linear-gradient(90deg, hsla(${U}, ${K}%, ${C}%, ${le}) 0%, transparent ${k}%)`};return e?s.jsxs("div",{className:"skillsets-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"skillset-list",children:[s.jsxs("div",{className:"skillset-list-header",children:[s.jsx("h3",{children:"SkillSets"}),s.jsx("button",{className:"btn-icon",onClick:T,title:"Add SkillSet",children:s.jsx(Oe,{size:16})})]}),b.length===0?s.jsxs("div",{className:"empty-state",style:{padding:"40px 0"},children:[s.jsx(on,{size:32}),s.jsx("span",{children:"No SkillSets"}),s.jsxs("button",{className:"btn-primary",onClick:T,children:[s.jsx(Oe,{size:14})," Create SkillSet"]})]}):b.map(I=>s.jsxs("div",{className:`skillset-item ${n===I.id?"selected":""}`,onClick:()=>r(I.id),children:[s.jsx(on,{size:16,style:{color:"var(--accent)",flexShrink:0}}),s.jsxs("div",{className:"skillset-item-info",children:[s.jsx("div",{className:"skillset-item-name",children:I.name}),s.jsxs("div",{className:"skillset-item-count",children:[I.entry_count||0," entries"]})]}),s.jsx("button",{className:"skillset-item-delete",onClick:k=>{k.stopPropagation(),M(I.id)},children:s.jsx(Le,{size:14})})]},I.id))]}),P?s.jsxs("div",{className:"skillset-detail",children:[s.jsxs("div",{className:"skillset-header",children:[s.jsxs("div",{className:"skillset-header-info",children:[s.jsx("input",{className:"skillset-name-input",value:P.name,onChange:I=>j(P.id,{name:I.target.value}),placeholder:"SkillSet Name"}),s.jsx("textarea",{className:"skillset-desc-input",value:P.description,onChange:I=>j(P.id,{description:I.target.value}),placeholder:"Description (optional)",rows:1}),s.jsxs("div",{className:"skillset-model",children:[s.jsx("label",{style:{fontSize:"12px",color:"var(--text-secondary)",marginRight:"8px"},children:"Embedding Model:"}),s.jsxs("select",{style:{flex:1,padding:"4px 8px",fontSize:"12px",background:"var(--bg-secondary)",border:"1px solid var(--border)",borderRadius:"4px",color:"var(--text-primary)"},value:P.embedding_model||"text-embedding-004",onChange:I=>j(P.id,{embedding_model:I.target.value}),children:[s.jsxs("optgroup",{label:"Google Gemini",children:[s.jsx("option",{value:"text-embedding-004",children:"text-embedding-004 (768d)"}),s.jsx("option",{value:"text-embedding-005",children:"text-embedding-005"})]}),s.jsxs("optgroup",{label:"OpenAI",children:[s.jsx("option",{value:"text-embedding-3-small",children:"text-embedding-3-small (1536d)"}),s.jsx("option",{value:"text-embedding-3-large",children:"text-embedding-3-large (3072d)"})]}),s.jsxs("optgroup",{label:"Cohere",children:[s.jsx("option",{value:"embed-english-v3.0",children:"embed-english-v3.0 (1024d)"}),s.jsx("option",{value:"embed-multilingual-v3.0",children:"embed-multilingual-v3.0 (1024d)"})]})]})]}),s.jsxs("div",{className:"skillset-stats",children:[s.jsxs("span",{className:"skillset-stat",children:[s.jsx("strong",{children:(i==null?void 0:i.entry_count)||0})," entries"]}),s.jsxs("span",{className:"skillset-stat",children:[s.jsx("strong",{children:Object.keys((i==null?void 0:i.sources)||{}).length})," sources"]}),L===!1&&s.jsx("span",{className:"skillset-stat",style:{color:"var(--warning)"},children:"⚠ No embeddings"})]})]}),s.jsx("button",{className:"btn-icon",onClick:R,title:"Refresh",children:s.jsx(wn,{size:16})})]}),h&&s.jsxs("div",{className:"error-banner",children:[h,s.jsx("button",{onClick:()=>v(null),children:s.jsx(og,{size:14})})]}),s.jsxs("div",{className:"search-section",children:[s.jsx("div",{className:"search-input-wrapper",children:s.jsx("input",{className:"search-input",value:a,onChange:I=>l(I.target.value),onKeyDown:I=>I.key==="Enter"&&V(),placeholder:"Search this SkillSet..."})}),s.jsxs("button",{className:"btn-primary",onClick:V,disabled:d||!a.trim(),children:[s.jsx(rg,{size:14}),d?"Searching...":"Search"]})]}),s.jsxs("div",{className:"search-results",children:[c.length===0&&!d&&a&&s.jsx("div",{className:"empty-state",children:s.jsx("span",{children:"No results found"})}),c.map(I=>s.jsxs("div",{className:"search-result",style:{background:O(I.score)},children:[s.jsxs("span",{className:"search-result-score",children:[(I.score*100).toFixed(0),"%"]}),s.jsx("div",{className:"search-result-text",children:I.text}),s.jsx("div",{className:"search-result-source",children:I.source_name})]},I.id))]}),s.jsxs("div",{className:"add-sources-section",children:[s.jsxs("div",{className:"add-sources-header",onClick:()=>m(!f),children:[f?s.jsx(Ct,{size:16}):s.jsx(Nt,{size:16}),s.jsx("h4",{children:"Add Sources"})]}),f&&s.jsxs("div",{className:"add-sources-content",children:[s.jsxs("div",{className:"source-row",children:[s.jsx(Vl,{size:16,style:{color:"var(--text-tertiary)"}}),s.jsx("input",{className:"source-input",value:y,onChange:I=>w(I.target.value),onKeyDown:I=>I.key==="Enter"&&F(),placeholder:"Enter URL (e.g., llms.txt file)"}),s.jsxs("button",{className:"btn-primary",onClick:F,disabled:N||!y.trim(),children:[s.jsx(f0,{size:14}),N?"Loading...":"Add"]})]}),s.jsxs("div",{className:"source-row",children:[s.jsx(d0,{size:16,style:{color:"var(--text-tertiary)"}}),s.jsx("input",{ref:g,type:"file",accept:".txt,.md,.json,.csv,.html",onChange:X}),s.jsxs("button",{className:"btn-primary",onClick:()=>{var I;return(I=g.current)==null?void 0:I.click()},children:[s.jsx(Vo,{size:14}),"Upload File"]}),s.jsx("span",{style:{fontSize:"12px",color:"var(--text-tertiary)"},children:".txt, .md, .json, .csv"})]}),((i==null?void 0:i.entry_count)||0)>0&&s.jsx("div",{className:"source-row",style:{marginTop:"8px"},children:s.jsxs("button",{className:"clear-button",onClick:z,children:[s.jsx(Le,{size:12}),"Clear All Entries (",(i==null?void 0:i.entry_count)||0,")"]})})]})]})]}):b.length>0?s.jsx("div",{className:"skillset-detail",children:s.jsxs("div",{className:"empty-state",children:[s.jsx(on,{size:48}),s.jsx("span",{children:"Select a SkillSet"})]})}):null]}):null}const Kt={tool_trajectory_avg_score:{name:"Tool Trajectory",description:"Did the agent call the right tools in the expected order?",requiresJudge:!1,scale:[0,1]},response_match_score:{name:"Response Match (ROUGE-1)",description:"Does the response contain expected text? (fuzzy word matching)",requiresJudge:!1,scale:[0,1]},response_evaluation_score:{name:"Response Evaluation (LLM)",description:"LLM-judged semantic match of final response",requiresJudge:!0,scale:[1,5]},final_response_match_v2:{name:"Response Quality v2 (LLM)",description:"Enhanced LLM-judged response quality check",requiresJudge:!0,scale:[0,1]},safety_v1:{name:"Safety",description:"Is the response safe and harmless? (Vertex AI)",requiresJudge:!0,scale:[0,1]},hallucinations_v1:{name:"Hallucination Detection",description:"Are all claims supported by context? No false information?",requiresJudge:!0,scale:[0,1]},rubric_based_final_response_quality_v1:{name:"Rubric: Response Quality",description:"Custom rubric-based quality assessment of responses",requiresJudge:!0,scale:[0,1]},rubric_based_tool_use_quality_v1:{name:"Rubric: Tool Use Quality",description:"Custom rubric-based assessment of tool usage",requiresJudge:!0,scale:[0,1]}},Ki=(e,t,n)=>{if(t==null)return{value:"-",comparison:""};const r=Kt[e],i=(r==null?void 0:r.scale)||[0,1];if(i[0]===1&&i[1]===5){const o=n??3.5;return{value:t.toFixed(1),comparison:`${o.toFixed(1)} / ${i[1].toFixed(1)}`}}else{const o=n??.7;return{value:`${Math.round(t*100)}%`,comparison:`${Math.round(o*100)}% min`}}},CS={metrics:[{metric:"tool_trajectory_avg_score",enabled:!0,criterion:{threshold:1}},{metric:"response_match_score",enabled:!0,criterion:{threshold:.7}}],default_trajectory_match_type:"in_order",num_runs:1};function sx(){return`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`}function NS(){const{project:e}=et(),[t,n]=_.useState([]),[r,i]=_.useState(null),[o,a]=_.useState(null),[l,c]=_.useState(new Set),[u,d]=_.useState(new Map),[p,f]=_.useState(new Map),[m,y]=_.useState(new Set),[w,N]=_.useState(!1),[x,h]=_.useState(null),[v,L]=_.useState([]),[S,g]=_.useState(null),b=async()=>{if(e)try{const $=await Be.get(`/projects/${e.id}/eval-history`);L($.runs||[])}catch($){console.warn("Failed to load eval history:",$)}},P=async($,q=!0)=>{if(e)try{const G=(await Be.get(`/projects/${e.id}/eval-history/${$}`)).run;if(g(G),G!=null&&G.case_results){const ne=new Map;for(const ce of G.case_results)ne.set(ce.eval_case_id,ce);d(ne)}if((G==null?void 0:G.eval_set_id)==="batch")c(new Set(t.map(ne=>ne.id))),i(null);else if(G!=null&&G.eval_set_id){const ne=new Map;ne.set(G.eval_set_id,G),f(ne),i(G.eval_set_id),c(ce=>new Set([...ce,G.eval_set_id]))}a(null),q&&window.history.pushState({run:$},"",`?run=${$}`)}catch(J){console.warn("Failed to load history run:",J)}},R=($,q=!0)=>{i($),a(null),g(null),q&&$?window.history.pushState({set:$},"",`?set=${$}`):q&&window.history.pushState({},"",window.location.pathname)},E=($,q,J=!0)=>{i($),a(q),g(null),J&&q?window.history.pushState({set:$,case:q},"",`?set=${$}&case=${q}`):J&&$&&window.history.pushState({set:$},"",`?set=${$}`)},j=()=>{g(null),d(new Map),f(new Map),window.history.pushState({},"",window.location.pathname)},T=async $=>{if(e)try{await Be.delete(`/projects/${e.id}/eval-history/${$}`),L(q=>q.filter(J=>J.id!==$)),(S==null?void 0:S.id)===$&&g(null)}catch(q){console.warn("Failed to delete history run:",q)}};_.useEffect(()=>{e!=null&&e.id&&(M(),b())},[e==null?void 0:e.id]),_.useEffect(()=>{const $=()=>{y(new Set(t.map(J=>J.id)))},q=()=>{y(new Set),b()};return window.addEventListener("eval-tests-started",$),window.addEventListener("eval-tests-completed",q),()=>{window.removeEventListener("eval-tests-started",$),window.removeEventListener("eval-tests-completed",q)}},[t]),_.useEffect(()=>{if(!(e!=null&&e.id)||w)return;const $=()=>{const J=new URLSearchParams(window.location.search),G=J.get("set"),ne=J.get("case"),ce=J.get("run");if(ce){P(ce,!1);return}if(G)i(G),a(ne),g(null),c(Ce=>new Set([...Ce,G]));else{if(!r&&!o&&!S)return;i(null),a(null),g(null)}};$();const q=()=>{$()};return window.addEventListener("popstate",q),()=>window.removeEventListener("popstate",q)},[e==null?void 0:e.id,w,t.length]);const M=async()=>{var $,q;if(e!=null&&e.id){N(!0),h(null);try{const J=await Be.get(`/projects/${e.id}/eval-sets`);if(n(J.eval_sets||[]),(($=J.eval_sets)==null?void 0:$.length)>0){const G=new URLSearchParams(window.location.search),ne=G.get("set"),ce=G.get("case"),Ce=ne||(ce?(q=J.eval_sets.find(W=>W.eval_cases.some(he=>he.id===ce)))==null?void 0:q.id:null)||J.eval_sets[0].id;c(new Set([Ce]))}}catch(J){h(J.message||"Failed to load eval sets")}finally{N(!1)}}},V=t.find($=>$.id===r),F=V==null?void 0:V.eval_cases.find($=>$.id===o),X=async()=>{if(e!=null&&e.id)try{const $=await Be.post(`/projects/${e.id}/eval-sets`,{name:"New Eval Set",description:"",eval_config:CS});n(q=>[...q,$.eval_set]),i($.eval_set.id),c(q=>new Set([...q,$.eval_set.id]))}catch($){h($.message||"Failed to create eval set")}},z=async $=>{if(e!=null&&e.id)try{const q=await Be.post(`/projects/${e.id}/eval-sets/${$}/cases`,{name:"New Test Case",description:"",invocations:[{id:sx(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]}],initial_state:{},rubrics:[],enabled_metrics:[],tags:[]});n(J=>J.map(G=>G.id===$?{...G,eval_cases:[...G.eval_cases,q.eval_case]}:G)),i($),a(q.eval_case.id)}catch(q){h(q.message||"Failed to create eval case")}},O=async($,q,J)=>{if(e!=null&&e.id)try{const G=await Be.put(`/projects/${e.id}/eval-sets/${$}/cases/${q}`,J);n(ne=>ne.map(ce=>ce.id===$?{...ce,eval_cases:ce.eval_cases.map(Ce=>Ce.id===q?G.eval_case:Ce)}:ce))}catch(G){h(G.message||"Failed to update eval case")}},I=async($,q)=>{if(e!=null&&e.id)try{await Be.delete(`/projects/${e.id}/eval-sets/${$}/cases/${q}`),n(J=>J.map(G=>G.id===$?{...G,eval_cases:G.eval_cases.filter(ne=>ne.id!==q)}:G)),o===q&&a(null)}catch(J){h(J.message||"Failed to delete eval case")}},k=async $=>{if(e!=null&&e.id)try{await Be.delete(`/projects/${e.id}/eval-sets/${$}`),n(q=>q.filter(J=>J.id!==$)),r===$&&(i(null),a(null))}catch(q){h(q.message||"Failed to delete eval set")}},U=async $=>{if(e!=null&&e.id)try{const q=await Be.get(`/projects/${e.id}/eval-sets/${$}/export`),J=new Blob([JSON.stringify(q,null,2)],{type:"application/json"}),G=URL.createObjectURL(J),ne=document.createElement("a");ne.href=G;const ce=t.find(Ce=>Ce.id===$);ne.download=`${(ce==null?void 0:ce.name)||"eval-set"}.json`,document.body.appendChild(ne),ne.click(),document.body.removeChild(ne),URL.revokeObjectURL(G)}catch(q){h(q.message||"Failed to export eval set")}},K=async $=>{if(e!=null&&e.id)try{const q=await $.text(),J=JSON.parse(q),G=await Be.post(`/projects/${e.id}/eval-sets/import`,J);n(ne=>[...ne,G.eval_set]),i(G.eval_set.id),c(ne=>new Set([...ne,G.eval_set.id]))}catch(q){h(q.message||"Failed to import eval set")}},C=_.useRef(null),le=async()=>{if(!(!(e!=null&&e.id)||t.length===0))try{const $=await Promise.all(t.map(async ne=>{try{return await Be.get(`/projects/${e.id}/eval-sets/${ne.id}/export`)}catch{return ne}})),q=new Blob([JSON.stringify($,null,2)],{type:"application/json"}),J=URL.createObjectURL(q),G=document.createElement("a");G.href=J,G.download=`${e.name||"project"}-eval-sets.json`,document.body.appendChild(G),G.click(),document.body.removeChild(G),URL.revokeObjectURL(J)}catch($){h($.message||"Failed to export all eval sets")}},A=async($,q)=>{if(e!=null&&e.id){y(J=>new Set([...J,q]));try{const J=await Be.post(`/projects/${e.id}/eval-sets/${$}/cases/${q}/run`,{});d(G=>new Map(G).set(q,J.result))}catch(J){h(J.message||"Failed to run eval case")}finally{y(J=>{const G=new Set(J);return G.delete(q),G})}}},Z=async $=>{if(!(e!=null&&e.id))return;const q=t.find(G=>G.id===$);if(!q)return;const J=q.eval_cases.map(G=>G.id);y(G=>new Set([...G,$,...J]));try{const G=await Be.post(`/projects/${e.id}/eval-sets/${$}/run`,{});f(ne=>new Map(ne).set($,G.result));for(const ne of G.result.case_results)d(ce=>new Map(ce).set(ne.eval_case_id,ne));try{await Be.post(`/projects/${e.id}/eval-history`,G.result),b()}catch(ne){console.warn("Failed to save eval run to history:",ne)}}catch(G){h(G.message||"Failed to run eval set")}finally{y(G=>{const ne=new Set(G);return ne.delete($),J.forEach(ce=>ne.delete(ce)),ne})}},B=$=>{c(q=>{const J=new Set(q);return J.has($)?J.delete($):J.add($),J})},te=$=>{let q=$.eval_cases.length,J=0,G=0,ne=0;for(const ce of $.eval_cases){const Ce=u.get(ce.id);Ce?Ce.passed?J++:G++:ne++}return{total:q,passed:J,failed:G,pending:ne}},ae=$=>$==null?"-":`${Math.round($*100)}%`;return e?s.jsxs("div",{className:"eval-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("aside",{className:"eval-sidebar",children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsx("h3",{children:"Evaluation Tests"}),s.jsxs("div",{className:"header-actions",children:[s.jsx("input",{type:"file",ref:C,accept:".json",style:{display:"none"},onChange:$=>{var J;const q=(J=$.target.files)==null?void 0:J[0];q&&(K(q),$.target.value="")}}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var $;return($=C.current)==null?void 0:$.click()},title:"Import eval set from JSON",children:s.jsx(Vo,{size:14})}),t.length>0&&s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:le,title:"Download all eval sets as JSON",children:s.jsx(ns,{size:14})}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:M,title:"Refresh",children:s.jsx(wn,{size:14})}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:X,title:"New eval set",children:[s.jsx(Oe,{size:14}),"Set"]})]})]}),s.jsxs("div",{className:"eval-tree",children:[w&&s.jsx("p",{style:{color:"var(--text-muted)",padding:"16px"},children:"Loading..."}),x&&s.jsx("div",{style:{color:"var(--error)",padding:"16px",fontSize:"13px"},children:x}),!w&&t.length===0&&s.jsxs("div",{className:"empty-state",style:{padding:"32px"},children:[s.jsx(lu,{size:32}),s.jsxs("p",{children:["No evaluation sets yet.",s.jsx("br",{}),"Create one to get started."]})]}),t.map($=>{const q=l.has($.id),J=te($),G=m.has($.id);return s.jsxs("div",{className:"tree-item",children:[s.jsxs("div",{className:`tree-set ${r===$.id&&!o?"selected":""}`,onClick:()=>R($.id),children:[s.jsx("button",{className:"expand-btn",onClick:ne=>{ne.stopPropagation(),B($.id)},children:$.eval_cases.length>0?q?s.jsx(Ct,{size:14}):s.jsx(Nt,{size:14}):s.jsx("span",{style:{width:14}})}),s.jsx(tg,{size:14,style:{color:"var(--accent-secondary)"}}),s.jsx("span",{className:"set-name",children:$.name}),s.jsx("button",{className:"add-case-btn",onClick:ne=>{ne.stopPropagation(),z($.id)},title:"Add test case",style:{padding:"2px 4px",marginLeft:4,background:"transparent",border:"none",cursor:"pointer",opacity:.6,display:"flex",alignItems:"center"},children:s.jsx(Oe,{size:12})}),J.total>0&&s.jsxs("span",{className:"set-stats",children:[J.passed>0&&s.jsx("span",{className:"stat-passed",children:J.passed}),J.failed>0&&s.jsx("span",{className:"stat-failed",children:J.failed}),J.pending>0&&s.jsx("span",{className:"stat-pending",children:J.pending})]}),s.jsx("button",{className:"run-btn",onClick:ne=>{ne.stopPropagation(),Z($.id)},title:"Run all tests in this set",disabled:G,children:G?s.jsx(xo,{size:12,className:"spinning"}):s.jsx(Mn,{size:12})})]}),q&&s.jsx("div",{className:"tree-children",style:{paddingLeft:16},children:$.eval_cases.map(ne=>{var W;const ce=u.get(ne.id),Ce=m.has(ne.id);return s.jsxs("div",{className:`tree-case ${o===ne.id?"selected":""}`,onClick:()=>E($.id,ne.id),children:[Ce?s.jsx(xo,{size:14,className:"spinning",style:{color:"var(--warning)"}}):ce?ce.passed?s.jsx(sr,{size:14,style:{color:"var(--success)"}}):s.jsx(Vr,{size:14,style:{color:"var(--error)"}}):s.jsx(yo,{size:14,style:{color:"var(--text-muted)"}}),s.jsx("span",{className:"case-name",children:ne.name}),ce&&ce.metric_results.length>0&&s.jsx("span",{style:{fontSize:11,color:ce.passed?"var(--success)":"var(--error)"},children:ae((W=ce.metric_results[0])==null?void 0:W.score)}),s.jsx("button",{className:"run-btn",onClick:he=>{he.stopPropagation(),A($.id,ne.id)},disabled:Ce,children:s.jsx(Mn,{size:12})})]},ne.id)})})]},$.id)})]}),s.jsxs("div",{className:"history-section",children:[s.jsx("div",{className:"history-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 12px",borderTop:"1px solid var(--border-color)",background:"var(--bg-secondary)"},children:s.jsxs("span",{style:{fontWeight:500,fontSize:13},children:["Previous Runs (",v.length,")"]})}),s.jsx("div",{className:"history-list",style:{maxHeight:200,overflowY:"auto"},children:v.length===0?s.jsx("div",{style:{padding:"12px",color:"var(--text-secondary)",fontSize:12,textAlign:"center"},children:"No previous runs"}):[...v].sort(($,q)=>(q.started_at||0)-($.started_at||0)).map($=>{const q=$.passed_cases===$.total_cases;return s.jsx("div",{className:`history-item ${(S==null?void 0:S.id)===$.id?"selected":""}`,onClick:()=>P($.id),style:{padding:"8px 12px",borderBottom:"1px solid var(--border-color)",cursor:"pointer",background:(S==null?void 0:S.id)===$.id?"var(--bg-tertiary)":"transparent",fontSize:12},children:s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[q?s.jsx(sr,{size:14,style:{color:"var(--success)",flexShrink:0}}):s.jsx(Vr,{size:14,style:{color:"var(--error)",flexShrink:0}}),s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:500},children:$.eval_set_name||"Unnamed"}),s.jsx("div",{style:{color:"var(--text-secondary)",fontSize:11},children:new Date($.started_at*1e3).toLocaleString()})]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsxs("span",{style:{color:q?"var(--success)":"var(--error)",fontWeight:500,fontSize:11},children:[$.passed_cases,"/",$.total_cases]}),s.jsx("button",{className:"btn btn-icon",onClick:J=>{J.stopPropagation(),T($.id)},title:"Delete run",style:{padding:2},children:s.jsx(Le,{size:12})})]})]})},$.id)})})]})]}),s.jsx("div",{className:"eval-editor",children:S?s.jsx(zS,{run:S,onClose:j}):F?s.jsx(TS,{evalCase:F,evalSetId:r,projectId:e.id,result:u.get(F.id),isRunning:m.has(F.id),onUpdate:$=>O(r,F.id,$),onDelete:()=>I(r,F.id),onRun:()=>A(r,F.id),onClearResult:()=>d($=>{const q=new Map($);return q.delete(F.id),q})}):V?s.jsx(PS,{evalSet:V,projectId:e.id,result:p.get(V.id),isRunning:m.has(V.id),caseResults:u,onUpdate:async $=>{try{const q=await Be.put(`/projects/${e.id}/eval-sets/${V.id}`,$);n(J=>J.map(G=>G.id===V.id?q.eval_set:G))}catch(q){h(q.message)}},onDelete:()=>k(V.id),onRun:()=>Z(V.id),onExport:()=>U(V.id)}):s.jsx("div",{className:"editor-content",children:s.jsxs("div",{className:"empty-state",children:[s.jsx(yo,{size:48}),s.jsxs("p",{children:["Select a test case to edit",s.jsx("br",{}),"or create a new one"]})]})})})]}):null}function ES({value:e,onChange:t}){var a,l;const{project:n}=et(),r=((a=n==null?void 0:n.app)==null?void 0:a.models)||[],i=(l=n==null?void 0:n.app)==null?void 0:l.default_model_id,o=r.find(c=>c.id===i);return s.jsxs("select",{value:e,onChange:c=>t(c.target.value),style:{width:"100%",maxWidth:400},children:[s.jsx("option",{value:"",children:o?`App Default (${o.model_name})`:"App Default"}),r.map(c=>s.jsx("option",{value:c.model_name,children:c.model_name},c.id)),s.jsx("option",{value:"gemini-2.0-flash",children:"gemini-2.0-flash"}),s.jsx("option",{value:"gemini-2.5-flash",children:"gemini-2.5-flash"}),s.jsx("option",{value:"gemini-2.5-pro",children:"gemini-2.5-pro"})]})}function zS({run:e,onClose:t}){var m;const{project:n}=et(),[r,i]=_.useState(!0),[o,a]=_.useState(new Set),l=e.case_results||[],c=l.filter(y=>y.passed).length,u=l.filter(y=>!y.passed).length,d=r?l.filter(y=>!y.passed):l,p=y=>{a(w=>{const N=new Set(w);return N.has(y)?N.delete(y):N.add(y),N})},f=y=>{y&&n&&(window.location.href=`/project/${n.id}/run?session=${y}`)};return s.jsxs("div",{className:"test-result-viewer",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"result-header",children:[s.jsx("h2",{children:e.eval_set_name||"Test Run Results"}),s.jsx("div",{style:{display:"flex",gap:8},children:s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{if(n){const y=`${window.location.origin}/project/${n.id}/evaluate?run=${e.id}`;navigator.clipboard.writeText(y)}},title:"Copy link to this run",children:s.jsx(su,{size:14})})})]}),s.jsxs("div",{className:"result-summary",children:[s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Status"}),s.jsx("span",{className:`value ${c===l.length?"passed":"failed"}`,children:c===l.length?"PASSED":"FAILED"})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Passed"}),s.jsx("span",{className:"value passed",children:c})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Failed"}),s.jsx("span",{className:"value failed",children:u})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Total Cases"}),s.jsx("span",{className:"value",children:l.length})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Duration"}),s.jsx("span",{className:"value",children:e.duration_ms?`${(e.duration_ms/1e3).toFixed(1)}s`:"-"})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Tokens"}),s.jsx("span",{className:"value",children:((m=e.total_tokens)==null?void 0:m.toLocaleString())||"-"})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Run Time"}),s.jsx("span",{className:"value",style:{fontSize:13},children:e.started_at?new Date(e.started_at*1e3).toLocaleString():"-"})]})]}),s.jsxs("div",{style:{padding:"8px 20px",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",gap:10,background:"var(--bg-secondary)"},children:[s.jsxs("label",{className:"toggle-switch",style:{transform:"scale(0.85)"},children:[s.jsx("input",{type:"checkbox",checked:r,onChange:y=>i(y.target.checked)}),s.jsx("span",{className:"toggle-slider"})]}),s.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:"Hide passing results"})]}),s.jsxs("div",{className:"result-cases",children:[d.map((y,w)=>{var j,T,M,V,F,X;const N=y.case_id||`case-${w}`,x=o.has(N),h=((j=y.metric_results)==null?void 0:j.filter(z=>!z.passed||z.error))||[],v=((T=y.metric_results)==null?void 0:T.filter(z=>z.passed&&!z.error))||[],L=((M=y.rubric_results)==null?void 0:M.filter(z=>!z.passed||z.error))||[],S=((V=y.rubric_results)==null?void 0:V.filter(z=>z.passed&&!z.error))||[],g=x?y.metric_results:h,b=x?y.rubric_results:L,P=x?y.invocation_results:(F=y.invocation_results)==null?void 0:F.filter(z=>{var O;return((O=z.metric_results)==null?void 0:O.some(I=>!I.passed))||z.error}),R=v.length+S.length,E=h.length+L.length;return s.jsxs("div",{className:"result-case",children:[s.jsxs("div",{className:"result-case-header",onClick:()=>p(N),style:{cursor:"pointer"},children:[s.jsxs("div",{className:"result-case-name",children:[s.jsx("span",{style:{marginRight:6,fontSize:12,color:"var(--text-muted)"},children:x?"▼":"▶"}),y.passed?s.jsx(sr,{size:16,style:{color:"var(--success)"}}):s.jsx(Vr,{size:16,style:{color:"var(--error)"}}),y.eval_set_name&&(e==null?void 0:e.eval_set_id)==="batch"&&s.jsx("span",{style:{fontSize:10,color:"var(--text-muted)",background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4,marginRight:6},children:y.eval_set_name}),y.case_name||`Case ${w+1}`,s.jsxs("span",{style:{marginLeft:10,fontSize:11,color:"var(--text-muted)",fontWeight:400},children:[E>0&&s.jsxs("span",{style:{color:"var(--error)"},children:[E," failed"]}),E>0&&R>0&&" · ",R>0&&s.jsxs("span",{style:{color:"var(--success)"},children:[R," passed"]})]})]}),s.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[y.session_id&&s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:z=>{z.stopPropagation(),f(y.session_id)},title:"View session in Run panel",children:[s.jsx(eg,{size:12})," View Session"]}),s.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:y.duration_ms?`${(y.duration_ms/1e3).toFixed(2)}s`:""})]})]}),s.jsxs("div",{className:"result-case-details",children:[(g==null?void 0:g.length)>0&&s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:8},children:[g.map((z,O)=>{const I=Ki(z.metric,z.score,z.threshold);return s.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:z.error?"rgba(255, 193, 7, 0.1)":z.passed?"rgba(var(--success-rgb), 0.05)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${z.error?"var(--warning)":z.passed?"var(--border-color)":"var(--error)"}`,display:"flex",flexDirection:"column",alignItems:"center",minWidth:80},children:[s.jsx("span",{style:{fontSize:10,color:"var(--text-secondary)",textAlign:"center",marginBottom:2},children:z.metric.replace(/_/g," ").replace("v1","").replace("v2","").trim()}),z.error?s.jsx("span",{style:{fontSize:10,color:"var(--warning)"},children:"Error"}):s.jsxs(s.Fragment,{children:[s.jsx("span",{style:{fontSize:14,fontWeight:600,color:z.passed?"var(--success)":"var(--error)"},children:I.value}),s.jsx("span",{style:{fontSize:9,color:"var(--text-muted)"},children:I.comparison})]})]},O)}),!x&&v.length>0&&s.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"var(--bg-tertiary)",border:"1px dashed var(--border-color)",display:"flex",alignItems:"center",fontSize:11,color:"var(--text-muted)"},children:["+",v.length," passed"]})]}),g==null?void 0:g.filter(z=>!z.passed&&z.rationale).map((z,O)=>s.jsxs("div",{style:{marginTop:8,padding:"8px 12px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:12},children:[s.jsxs("div",{style:{fontWeight:500,marginBottom:4,color:"var(--error)",fontSize:11},children:[z.metric.replace(/_/g," ")," - Why it failed:"]}),s.jsx("div",{style:{whiteSpace:"pre-wrap",color:"var(--text-secondary)",lineHeight:1.4},children:z.rationale})]},`rationale-${O}`)),(b==null?void 0:b.length)>0&&s.jsxs("div",{style:{marginTop:8},children:[s.jsx("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:4},children:"Custom Rubrics"}),b.map((z,O)=>s.jsxs("div",{style:{marginBottom:z.rationale&&!z.passed?8:4},children:[s.jsxs("div",{className:"metric-row",children:[s.jsx("span",{className:"metric-name",style:{flex:1},children:z.rubric}),s.jsx("span",{className:`metric-value ${z.passed?"passed":"failed"}`,children:z.passed?"✓ Pass":"✗ Fail"})]}),!z.passed&&z.rationale&&s.jsxs("div",{style:{marginTop:4,marginLeft:8,padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:11,color:"var(--text-secondary)"},children:[s.jsx("strong",{style:{color:"var(--error)"},children:"Why:"})," ",z.rationale]}),z.error&&s.jsxs("div",{style:{marginTop:4,marginLeft:8,fontSize:11,color:"var(--warning)"},children:["Error: ",z.error]})]},O)),!x&&S.length>0&&s.jsxs("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:["+",S.length," passed rubric",S.length>1?"s":""]})]}),(P==null?void 0:P.length)>0&&s.jsxs("div",{className:"invocation-summary",children:[s.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:8},children:["Invocations (",P.length,!x&&((X=y.invocation_results)==null?void 0:X.length)>P.length?` of ${y.invocation_results.length}`:"",")"]}),P.map((z,O)=>s.jsxs("div",{className:"invocation-item",children:[s.jsxs("div",{className:"invocation-query",children:["Turn ",z.invocation_id||O+1,": ",z.user_message||"(no message)"]}),z.actual_response&&s.jsxs("div",{className:"invocation-response",children:["Response: ",z.actual_response.substring(0,200),z.actual_response.length>200?"...":""]})]},O))]}),y.error&&s.jsx("div",{style:{marginTop:12,padding:12,background:"rgba(255, 107, 107, 0.1)",borderRadius:"var(--radius-sm)",color:"var(--error)",fontSize:12,whiteSpace:"pre-wrap"},children:y.error})]})]},N)}),l.length===0&&s.jsx("div",{style:{textAlign:"center",padding:32,color:"var(--text-secondary)"},children:"No test cases in this run"})]})]})}function TS({evalCase:e,evalSetId:t,projectId:n,result:r,isRunning:i,onUpdate:o,onDelete:a,onRun:l,onClearResult:c}){var S;const{project:u}=et(),[d,p]=_.useState(e),[f,m]=_.useState("assertions");_.useEffect(()=>{p(e)},[e.id]);const y=_.useCallback(g=>{p(b=>({...b,...g})),o(g)},[o]),w=()=>{const g={id:sx(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]};y({invocations:[...d.invocations,g]})},N=(g,b)=>{const P=[...d.invocations];P[g]={...P[g],...b},y({invocations:P})},x=g=>{y({invocations:d.invocations.filter((b,P)=>P!==g)})},h=g=>{const b=[...d.invocations];b[g]={...b[g],expected_tool_calls:[...b[g].expected_tool_calls,{name:"",args:{},args_match_mode:"subset"}]},y({invocations:b})},v=(g,b,P)=>{const R=[...d.invocations],E=[...R[g].expected_tool_calls];E[b]={...E[b],...P},R[g]={...R[g],expected_tool_calls:E},y({invocations:R})},L=(g,b)=>{const P=[...d.invocations];P[g]={...P[g],expected_tool_calls:P[g].expected_tool_calls.filter((R,E)=>E!==b)},y({invocations:P})};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(yo,{size:20,style:{color:"var(--accent-primary)"}}),s.jsx("input",{type:"text",value:d.name,onChange:g=>y({name:g.target.value}),placeholder:"Test case name"}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const g=`${window.location.origin}/project/${n}/evaluate?set=${t}&case=${e.id}`;navigator.clipboard.writeText(g)},title:"Copy link to this test case",children:s.jsx(su,{size:14})}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:i,children:[i?s.jsx(xo,{size:14,className:"spinning"}):s.jsx(Mn,{size:14}),"Run"]}),s.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:s.jsx(Le,{size:14})})]}),s.jsxs("div",{className:"tabs",children:[s.jsxs("div",{className:`tab ${f==="assertions"?"active":""}`,onClick:()=>m("assertions"),children:[s.jsx(vo,{size:14,style:{marginRight:6}}),"Assertions (",d.invocations.length,")"]}),s.jsxs("div",{className:`tab ${f==="rubrics"?"active":""}`,onClick:()=>m("rubrics"),children:[s.jsx(lu,{size:14,style:{marginRight:6}}),"LLM Judges"]}),s.jsxs("div",{className:`tab ${f==="docs"?"active":""}`,onClick:()=>m("docs"),children:[s.jsx(go,{size:14,style:{marginRight:6}}),"Docs"]})]}),s.jsxs("div",{className:"editor-content",children:[f==="assertions"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{style:{display:"flex",gap:12,marginBottom:12},children:[s.jsxs("div",{style:{flex:1},children:[s.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"target_agent"}),s.jsxs("select",{value:d.target_agent||"",onChange:g=>y({target_agent:g.target.value||void 0}),style:{width:"100%"},children:[s.jsx("option",{value:"",children:"root_agent"}),(S=u==null?void 0:u.agents)==null?void 0:S.map(g=>s.jsx("option",{value:g.name,children:g.name},g.name))]})]}),s.jsxs("div",{style:{flex:1},children:[s.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"tags"}),s.jsx("input",{type:"text",value:d.tags.join(", "),onChange:g=>y({tags:g.target.value.split(",").map(b=>b.trim()).filter(Boolean)}),placeholder:"smoke, regression",style:{width:"100%"}})]})]}),s.jsxs("div",{className:"form-section",children:[s.jsx("h4",{children:"Description"}),s.jsx("textarea",{value:d.description,onChange:g=>y({description:g.target.value}),placeholder:"What does this test verify?",style:{minHeight:40}})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:["session_input ",s.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(initial state)"})]}),s.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:s.jsx(an,{height:"100%",defaultLanguage:"json",value:(()=>{var b;if((!d.initial_state||Object.keys(d.initial_state).length===0)&&((b=u==null?void 0:u.app)!=null&&b.state_keys)&&u.app.state_keys.length>0){const P={};return u.app.state_keys.forEach(R=>{R.default_value!==void 0?P[R.name]=R.default_value:P[R.name]=R.type==="string"?"":R.type==="number"?0:R.type==="boolean"?!1:R.type==="array"?[]:{}}),JSON.stringify(P,null,2)}return JSON.stringify(d.initial_state,null,2)})(),onChange:g=>{try{g&&y({initial_state:JSON.parse(g)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:[s.jsx(vo,{size:14}),"Conversation Turns"]}),d.invocations.map((g,b)=>s.jsxs("div",{className:"invocation-card",children:[s.jsxs("div",{className:"invocation-number",children:[s.jsx("span",{children:b+1}),d.invocations.length>1&&s.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>x(b),style:{padding:4},children:s.jsx(Le,{size:10})})]}),s.jsxs("div",{className:"invocation-content",children:[s.jsxs("div",{className:"invocation-row",children:[s.jsxs("div",{className:"form-section",children:[s.jsx("label",{children:"User Query"}),s.jsx("textarea",{value:g.user_message,onChange:P=>N(b,{user_message:P.target.value}),placeholder:"The message to send to the agent..."})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("label",{children:["Expected Response ",s.jsx("span",{style:{color:"var(--text-muted)",fontWeight:400},children:"(ROUGE-1)"})]}),s.jsx("textarea",{value:g.expected_response||"",onChange:P=>N(b,{expected_response:P.target.value||void 0}),placeholder:"Expected text (partial match)..."})]})]}),g.expected_tool_calls.map((P,R)=>s.jsxs("div",{className:"tool-call-compact",children:[s.jsx("input",{type:"text",value:P.name,onChange:E=>v(b,R,{name:E.target.value}),placeholder:"tool_name",className:"tool-name-input"}),s.jsxs("div",{className:"pillbox-toggle",children:[s.jsx("button",{className:`pill ${P.args_match_mode==="subset"?"active":""}`,onClick:()=>v(b,R,{args_match_mode:"subset"}),children:"Partial"}),s.jsx("button",{className:`pill ${P.args_match_mode==="exact"?"active":""}`,onClick:()=>v(b,R,{args_match_mode:"exact"}),children:"Exact"})]}),s.jsx("div",{className:"tool-args-editor",children:s.jsx(an,{height:"22px",defaultLanguage:"json",value:JSON.stringify(P.args||{}),onChange:E=>{try{E&&v(b,R,{args:JSON.parse(E)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,wordWrap:"off",scrollbar:{vertical:"hidden",horizontal:"hidden"},overviewRulerLanes:0,hideCursorInOverviewRuler:!0,overviewRulerBorder:!1,renderLineHighlight:"none",fontSize:11,padding:{top:3,bottom:3},automaticLayout:!0}})}),s.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>L(b,R),style:{padding:"4px 6px"},children:s.jsx(Le,{size:10})})]},R)),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>h(b),style:{marginTop:4},children:[s.jsx(Oe,{size:12})," Assert Tool Call"]})]})]},g.id)),s.jsxs("button",{className:"btn btn-secondary",onClick:w,children:[s.jsx(Oe,{size:14})," Add Turn"]})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:[s.jsx(sr,{size:14,style:{marginRight:6}}),"final_session_state ",s.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(optional)"})]}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Assert that session state contains these key-value pairs after all turns complete."}),s.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:s.jsx(an,{height:"100%",defaultLanguage:"json",value:d.expected_final_state?JSON.stringify(d.expected_final_state,null,2):"{}",onChange:g=>{if(!g||g==="{}")y({expected_final_state:void 0});else try{y({expected_final_state:JSON.parse(g)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]})]}),f==="rubrics"&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"form-section",style:{marginBottom:16},children:[{metric:"safety_v1",label:"safety_v1",default:.8,max:1},{metric:"hallucinations_v1",label:"hallucinations_v1",default:.8,max:1},{metric:"response_evaluation_score",label:"response_evaluation_score",default:3.5,max:5},{metric:"final_response_match_v2",label:"final_response_match_v2",default:.7,max:1}].map(({metric:g,label:b,default:P,max:R})=>{const E=(d.enabled_metrics||[]).find(T=>T.metric===g),j=(E==null?void 0:E.threshold)??P;return s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[s.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[s.jsx("input",{type:"checkbox",checked:!!E,onChange:T=>{const M=[...d.enabled_metrics||[]];if(T.target.checked)M.push({metric:g,threshold:P});else{const V=M.findIndex(F=>F.metric===g);V!==-1&&M.splice(V,1)}y({enabled_metrics:M})}}),s.jsx("span",{className:"toggle-slider"})]}),s.jsx("span",{style:{fontSize:12,opacity:E?1:.5,minWidth:100},children:b}),s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:E?1:.4},children:"≥"}),s.jsx("input",{type:"number",min:R===5?1:0,max:R,step:.1,value:j,disabled:!E,onChange:T=>{const M=[...d.enabled_metrics||[]],V=M.findIndex(F=>F.metric===g);V!==-1&&(M[V]={...M[V],threshold:parseFloat(T.target.value)||0},y({enabled_metrics:M}))},style:{width:60,textAlign:"center",opacity:E?1:.3,padding:"2px 4px",fontSize:11}})]},g)})}),s.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--border-color)",margin:"16px 0"}}),s.jsxs("div",{className:"form-section",children:[s.jsx("h4",{children:"Custom Rubrics"}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Natural language criteria evaluated by an LLM judge. Returns pass/fail per rubric."}),d.rubrics.map((g,b)=>s.jsxs("div",{className:"tool-call-row",style:{marginBottom:8},children:[s.jsx("input",{type:"text",value:g.rubric,onChange:P=>{const R=[...d.rubrics];R[b]={rubric:P.target.value},y({rubrics:R})},placeholder:"e.g., The response mentions the return policy",style:{flex:1}}),s.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>y({rubrics:d.rubrics.filter((P,R)=>R!==b)}),children:s.jsx(Le,{size:12})})]},b)),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>y({rubrics:[...d.rubrics,{rubric:""}]}),children:[s.jsx(Oe,{size:12})," Add Rubric"]})]})]}),f==="docs"&&s.jsxs("div",{style:{fontSize:13,lineHeight:1.6,color:"var(--text-secondary)",overflowY:"auto",maxHeight:"100%"},children:[s.jsx("h3",{style:{marginBottom:16,color:"var(--text-primary)"},children:"Evaluation Test Case Guide"}),s.jsxs("section",{style:{marginBottom:24,padding:12,background:"rgba(var(--accent-primary-rgb), 0.1)",borderRadius:"var(--radius-md)",border:"1px solid var(--accent-primary)"},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Quick Overview"}),s.jsxs("p",{children:["Each test case simulates a ",s.jsx("strong",{children:"multi-turn conversation"})," with an agent. For each turn (invocation), you provide a user message and define what you expect the agent to do."]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Invocations"})," = conversation turns (user messages)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Expected Response"})," = the agent's ",s.jsx("em",{children:"final text reply"})," for that turn"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Expected Tool Calls"})," = tools the agent should invoke during that turn"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Session State"})," = test the ",s.jsx("em",{children:"final state"})," after ALL turns complete"]})]})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:'📝 What is "Expected Response"?'}),s.jsxs("p",{children:["The ",s.jsx("strong",{children:"Expected Response"})," is matched against the agent's ",s.jsx("strong",{children:"final response"})," for that specific turn — NOT every message."]}),s.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[s.jsx("p",{style:{marginBottom:8},children:s.jsx("strong",{children:"During one turn, an agent may:"})}),s.jsxs("ul",{style:{marginLeft:20,marginBottom:12},children:[s.jsx("li",{children:"Send intermediate thinking/reasoning messages"}),s.jsx("li",{children:"Call multiple tools"}),s.jsx("li",{children:"Transfer to sub-agents (who may respond)"}),s.jsxs("li",{children:["Finally send a ",s.jsx("em",{children:"concluding response"})]})]}),s.jsxs("p",{children:["Only the ",s.jsx("strong",{children:"last text response"})," from the agent for that turn is compared against your Expected Response."]})]}),s.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Tip: If you need to verify intermediate steps, use Tool Trajectory matching or custom Rubrics."})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🔄 Response Matching (ROUGE-1)"}),s.jsxs("p",{children:["The ",s.jsx("code",{children:"response_match_score"})," uses ",s.jsx("strong",{children:"ROUGE-1 F1 scoring"})," — fuzzy word-level matching:"]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsx("li",{children:"Tokenizes both expected and actual responses into words"}),s.jsx("li",{children:"Calculates word overlap (not exact string match)"}),s.jsx("li",{children:"Returns a score from 0.0 to 1.0"})]}),s.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[s.jsx("p",{children:s.jsx("strong",{children:"Example:"})}),s.jsxs("p",{children:["Expected: ",s.jsx("code",{children:'"The weather in Paris is sunny today"'})]}),s.jsxs("p",{children:["Actual: ",s.jsx("code",{children:'"Today in Paris, expect sunny weather"'})]}),s.jsx("p",{style:{marginTop:8,color:"var(--success)"},children:"✓ High ROUGE-1 score (same words, different order)"})]}),s.jsxs("p",{style:{marginTop:8},children:["A threshold of ",s.jsx("strong",{children:"0.7"})," means 70% word overlap is required to pass."]})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🛠️ Tool Trajectory Matching"}),s.jsxs("p",{children:["The ",s.jsx("code",{children:"tool_trajectory_avg_score"})," verifies the agent called expected tools. Match types:"]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Exact"})," — Same tools in same order, no extras allowed"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"In Order"})," — Expected tools appear in order, extras allowed between"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Any Order"})," — All expected tools present, any order, extras allowed"]})]}),s.jsx("p",{style:{marginTop:8},children:"For each tool, you can match by:"}),s.jsxs("ul",{style:{marginLeft:20,marginTop:4},children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Name Only"})," — Just check the tool was called"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Exact Args"})," — Arguments must match exactly (provide JSON)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Args Subset"})," — Your expected args must be present in actual args"]})]})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💾 Session State Testing"}),s.jsxs("p",{children:[s.jsx("strong",{children:"Initial State"})," (Settings tab) — Pre-populate session state before running the test:"]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsx("li",{children:"Set user preferences or context"}),s.jsx("li",{children:"Simulate a specific scenario"}),s.jsx("li",{children:"Test state-dependent behavior"})]}),s.jsxs("p",{style:{marginTop:12},children:[s.jsx("strong",{children:"Expected Final State"})," — Verified at the ",s.jsx("em",{children:"very end"})," of the test case, ",s.jsx("strong",{children:"after ALL invocations complete"}),"."]}),s.jsx("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8,borderLeft:"3px solid var(--warning)"},children:s.jsxs("p",{style:{margin:0},children:[s.jsx("strong",{children:"Important:"})," State is tested once after the entire conversation, NOT after each turn. To test state changes per-turn, use separate test cases."]})})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Target Agent (Settings tab)"}),s.jsxs("p",{children:["By default, tests run against the ",s.jsx("strong",{children:"root_agent"})," of your App. You can select a specific sub-agent to test in isolation:"]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsxs("li",{children:[s.jsx("strong",{children:"root_agent"})," — Test the full agent hierarchy (default)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Specific agent"})," — Unit test individual agents"]})]}),s.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Useful for testing sub-agents independently before integrating into the full system."})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📋 Custom Rubrics"}),s.jsx("p",{children:"Rubrics are custom yes/no criteria evaluated by an LLM judge. Examples:"}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsx("li",{children:'"Does the response mention the product price?"'}),s.jsx("li",{children:'"Is the tone professional and helpful?"'}),s.jsx("li",{children:'"Does the response avoid mentioning competitors?"'})]}),s.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Note: Rubric evaluation requires LLM-judged metrics to be enabled in the Eval Set."})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📊 Available Metrics"}),s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12},children:[s.jsx("thead",{children:s.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[s.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Metric"}),s.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Type"}),s.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Description"})]})}),s.jsx("tbody",{children:Object.keys(Kt).map(g=>s.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[s.jsx("td",{style:{padding:"8px 4px",fontFamily:"var(--font-mono)",fontSize:11},children:g}),s.jsx("td",{style:{padding:"8px 4px"},children:Kt[g].requiresJudge?s.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--accent-primary)",color:"white",borderRadius:4},children:"LLM Judge"}):s.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--bg-tertiary)",borderRadius:4},children:"Built-in"})}),s.jsx("td",{style:{padding:"8px 4px",color:"var(--text-muted)"},children:Kt[g].description})]},g))})]})]}),s.jsxs("section",{children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💡 Tips"}),s.jsxs("ul",{style:{marginLeft:20},children:[s.jsx("li",{children:"Start with simple single-turn tests, then add complexity"}),s.jsx("li",{children:'Use "In Order" matching for most tool trajectory tests'}),s.jsx("li",{children:"Lower ROUGE thresholds (0.5-0.6) for creative/varied responses"}),s.jsx("li",{children:"Higher thresholds (0.8-0.9) for factual/precise responses"}),s.jsx("li",{children:"Use tags to organize tests by feature or priority"}),s.jsx("li",{children:"Test sub-agents individually using Target Agent selector"})]})]})]})]}),r&&s.jsxs("div",{className:"result-panel",children:[s.jsxs("div",{className:`result-header ${r.passed?"passed":"failed"}`,children:[r.passed?s.jsxs(s.Fragment,{children:[s.jsx(sr,{size:18})," ",s.jsx("strong",{children:"Passed"})]}):s.jsxs(s.Fragment,{children:[s.jsx(Vr,{size:18})," ",s.jsx("strong",{children:"Failed"})]}),s.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:12},children:[r.total_tokens?s.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},title:"Total tokens used",children:[r.total_tokens.toLocaleString()," tokens"]}):null,s.jsxs("span",{style:{color:"var(--text-muted)",fontSize:12},children:[r.duration_ms.toFixed(0),"ms"]}),r.session_id&&s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{window.location.href=`/project/${u==null?void 0:u.id}/run?session=${r.session_id}`},title:"View this session in the Run panel",style:{fontSize:11},children:[s.jsx(eg,{size:12}),"View Session"]}),c&&s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Close test results",style:{fontSize:11,padding:"4px 8px"},children:"✕"})]})]}),s.jsx("div",{className:"result-scores",children:r.metric_results.map((g,b)=>{var R;const P=Ki(g.metric,g.score,g.threshold);return s.jsxs("div",{className:"score-card",children:[s.jsx("div",{className:`score-value ${g.passed?"passed":"failed"}`,children:P.value}),s.jsx("div",{className:"score-label",children:((R=Kt[g.metric])==null?void 0:R.name)||g.metric}),s.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",marginTop:2},children:P.comparison}),g.error&&s.jsx("div",{style:{fontSize:10,color:"var(--error)",marginTop:4},children:g.error})]},b)})}),r.rubric_results&&r.rubric_results.length>0&&s.jsxs("div",{style:{marginTop:16},children:[s.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Custom Rubrics"}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:r.rubric_results.map((g,b)=>s.jsxs("div",{style:{padding:"8px 12px",borderRadius:"var(--radius-sm)",background:g.passed?"rgba(var(--success-rgb), 0.1)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${g.passed?"var(--success)":"var(--error)"}`,display:"flex",alignItems:"center",gap:10},children:[s.jsx("span",{style:{fontSize:16,color:g.passed?"var(--success)":"var(--error)",fontWeight:"bold"},children:g.passed?"✓":"✗"}),s.jsxs("div",{style:{flex:1},children:[s.jsx("div",{style:{fontSize:12,color:"var(--text-primary)"},children:g.rubric}),g.error&&s.jsxs("div",{style:{fontSize:10,color:"var(--error)",marginTop:2},children:["Error: ",g.error]})]})]},b))})]}),r.invocation_results.map((g,b)=>s.jsxs("div",{className:"result-details",children:[s.jsxs("h5",{children:["Turn ",b+1,": ",g.user_message.length>50?g.user_message.slice(0,50)+"…":g.user_message]}),g.metric_results.length>0&&s.jsx("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:g.metric_results.map((P,R)=>{var j;const E=Ki(P.metric,P.score,P.threshold);return s.jsxs("span",{style:{fontSize:11,padding:"2px 6px",borderRadius:"var(--radius-sm)",background:P.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:P.passed?"var(--success)":"var(--error)"},children:[((j=Kt[P.metric])==null?void 0:j.name)||P.metric,": ",E.value]},R)})}),s.jsxs("div",{className:"detail-box",children:[s.jsx("strong",{children:"Actual Response:"}),`
`,g.actual_response||"(no response)",`

`,g.actual_tool_calls.length>0&&s.jsxs(s.Fragment,{children:[s.jsx("strong",{children:"Tool Calls:"}),`
`,g.actual_tool_calls.map((P,R)=>`  ${R+1}. ${P.name}(${JSON.stringify(P.args)})
`).join("")]})]})]},b)),r.error&&s.jsxs("div",{className:"result-details",children:[s.jsx("h5",{style:{color:"var(--error)"},children:"Error"}),s.jsx("div",{className:"detail-box",style:{color:"var(--error)"},children:r.error})]})]})]})}function PS({evalSet:e,projectId:t,result:n,isRunning:r,caseResults:i,onUpdate:o,onDelete:a,onRun:l,onExport:c}){var m,y,w;const[u,d]=_.useState(e.name);_.useEffect(()=>{d(e.name)},[e.id]);const p=_.useCallback(()=>{u!==e.name&&o({name:u})},[u,e.name,o]),f=N=>N==null?"-":`${Math.round(N*100)}%`;return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(tg,{size:20,style:{color:"var(--accent-secondary)"}}),s.jsx("input",{type:"text",value:u,onChange:N=>d(N.target.value),onBlur:p,placeholder:"Eval set name"}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const N=`${window.location.origin}/project/${t}/evaluate?set=${e.id}`;navigator.clipboard.writeText(N)},title:"Copy link to this eval set",children:s.jsx(su,{size:14})}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Export as JSON (compatible with adk eval)",children:s.jsx(ns,{size:14})}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:r,children:[r?s.jsx(xo,{size:14,className:"spinning"}):s.jsx(Mn,{size:14}),"Run All"]}),s.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:s.jsx(Le,{size:14})})]}),s.jsxs("div",{className:"editor-content",children:[s.jsxs("div",{className:"form-section",children:[s.jsx("h4",{children:"Description"}),s.jsx("textarea",{value:e.description,onChange:N=>o({description:N.target.value}),placeholder:"Description of this evaluation set...",style:{minHeight:40}})]}),s.jsxs("div",{className:"form-section",children:[s.jsx("h4",{children:"LLM Judge Model"}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Model used for LLM-judged metrics (safety, hallucinations, etc.)."}),s.jsx(ES,{value:((m=e.eval_config)==null?void 0:m.judge_model)||"",onChange:N=>o({eval_config:{...e.eval_config,judge_model:N}})})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:[s.jsx(ig,{size:14})," Evaluation Metrics"]}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Configure which metrics to use and their pass thresholds."}),Object.keys(Kt).map(N=>{var S,g,b;const x=Kt[N],h=(g=(S=e.eval_config)==null?void 0:S.metrics)==null?void 0:g.find(P=>P.metric===N),v=(h==null?void 0:h.enabled)??!1,L=((b=h==null?void 0:h.criterion)==null?void 0:b.threshold)??.7;return s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[s.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[s.jsx("input",{type:"checkbox",checked:v,onChange:P=>{var j;const R=[...((j=e.eval_config)==null?void 0:j.metrics)||[]],E=R.findIndex(T=>T.metric===N);P.target.checked?E===-1?R.push({metric:N,enabled:!0,criterion:{threshold:.7}}):R[E]={...R[E],enabled:!0}:E!==-1&&(R[E]={...R[E],enabled:!1}),o({eval_config:{...e.eval_config,metrics:R}})}}),s.jsx("span",{className:"toggle-slider"})]}),s.jsxs("span",{style:{fontSize:12,opacity:v?1:.5,minWidth:140,fontWeight:v?500:400},children:[x.name,x.requiresJudge&&s.jsx("span",{style:{fontSize:9,marginLeft:4,color:"var(--accent-primary)"},children:"LLM"})]}),s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:v?1:.4},children:"≥"}),s.jsx("input",{type:"number",min:0,max:1,step:.1,value:L,disabled:!v,onChange:P=>{var j;const R=[...((j=e.eval_config)==null?void 0:j.metrics)||[]],E=R.findIndex(T=>T.metric===N);E!==-1&&(R[E]={...R[E],criterion:{...R[E].criterion,threshold:parseFloat(P.target.value)||.7}},o({eval_config:{...e.eval_config,metrics:R}}))},style:{width:60,textAlign:"center",opacity:v?1:.3,padding:"2px 4px",fontSize:11}})]},N)}),s.jsxs("div",{className:"form-row",style:{marginTop:16},children:[s.jsxs("div",{className:"form-field",children:[s.jsx("label",{children:"Default Trajectory Match Type"}),s.jsxs("select",{value:((y=e.eval_config)==null?void 0:y.default_trajectory_match_type)||"in_order",onChange:N=>o({eval_config:{...e.eval_config,default_trajectory_match_type:N.target.value}}),children:[s.jsx("option",{value:"exact",children:"Exact (same order, no extras)"}),s.jsx("option",{value:"in_order",children:"In Order (extras allowed between)"}),s.jsx("option",{value:"any_order",children:"Any Order (all present, any order)"})]})]}),s.jsxs("div",{className:"form-field",children:[s.jsx("label",{children:"Number of Runs"}),s.jsx("input",{type:"number",min:1,max:10,value:((w=e.eval_config)==null?void 0:w.num_runs)||1,onChange:N=>o({eval_config:{...e.eval_config,num_runs:parseInt(N.target.value)||1}})}),s.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:"Run each test multiple times for statistical reliability."})]})]})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:[s.jsx(g0,{size:14})," Coverage Summary"]}),n?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"result-scores",children:[s.jsxs("div",{className:"score-card",children:[s.jsxs("div",{className:"score-value",style:{color:"var(--accent-primary)"},children:[n.passed_cases,"/",n.total_cases]}),s.jsx("div",{className:"score-label",children:"Cases Passed"})]}),s.jsxs("div",{className:"score-card",children:[s.jsx("div",{className:`score-value ${n.overall_pass_rate>=.8?"passed":"failed"}`,children:f(n.overall_pass_rate)}),s.jsx("div",{className:"score-label",children:"Pass Rate"})]}),Object.entries(n.metric_avg_scores||{}).map(([N,x])=>{var v;const h=Ki(N,x);return s.jsxs("div",{className:"score-card",children:[s.jsx("div",{className:"score-value",children:h.value}),s.jsxs("div",{className:"score-label",children:["Avg ",((v=Kt[N])==null?void 0:v.name)||N]})]},N)})]}),s.jsxs("div",{style:{marginTop:16},children:[s.jsx("div",{style:{marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Overall Pass Rate"}),s.jsx("div",{className:"coverage-bar",children:s.jsx("div",{className:`coverage-fill ${n.overall_pass_rate>=.8?"passed":"failed"}`,style:{width:`${n.overall_pass_rate*100}%`}})})]}),Object.entries(n.metric_pass_rates||{}).length>0&&s.jsxs("div",{style:{marginTop:16},children:[s.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Metric Pass Rates"}),Object.entries(n.metric_pass_rates).map(([N,x])=>{var h;return s.jsxs("div",{style:{marginBottom:8},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4},children:[s.jsx("span",{children:((h=Kt[N])==null?void 0:h.name)||N}),s.jsx("span",{children:f(x)})]}),s.jsx("div",{className:"coverage-bar",children:s.jsx("div",{className:`coverage-fill ${x>=.8?"passed":"failed"}`,style:{width:`${x*100}%`}})})]},N)})]}),s.jsxs("div",{style:{marginTop:16},children:[s.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Individual Results"}),s.jsxs("table",{style:{width:"100%",fontSize:12,borderCollapse:"collapse"},children:[s.jsx("thead",{children:s.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[s.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Test Case"}),s.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Metrics"}),s.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Status"})]})}),s.jsx("tbody",{children:n.case_results.map(N=>s.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[s.jsx("td",{style:{padding:"8px 4px"},children:N.eval_case_name}),s.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:N.metric_results.map((x,h)=>{const v=Ki(x.metric,x.score,x.threshold);return s.jsx("span",{style:{fontSize:10,padding:"2px 4px",marginRight:4,borderRadius:"var(--radius-sm)",background:x.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:x.passed?"var(--success)":"var(--error)"},children:v.value},h)})}),s.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:N.passed?s.jsx(sr,{size:14,style:{color:"var(--success)"}}):N.error?s.jsx(go,{size:14,style:{color:"var(--warning)"}}):s.jsx(Vr,{size:14,style:{color:"var(--error)"}})})]},N.eval_case_id))})]})]})]}):s.jsxs("div",{style:{textAlign:"center",padding:"32px",color:"var(--text-muted)",background:"var(--bg-tertiary)",borderRadius:"var(--radius-md)"},children:[s.jsx(lu,{size:32,style:{marginBottom:8,opacity:.3}}),s.jsx("p",{children:"Run the evaluation set to see coverage metrics"})]})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:["Test Cases (",e.eval_cases.length,")"]}),e.eval_cases.length===0?s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"No test cases yet. Add cases to this eval set to start testing."}):s.jsx("ul",{style:{listStyle:"none",padding:0},children:e.eval_cases.map(N=>{const x=i.get(N.id);return s.jsxs("li",{style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",background:"var(--bg-tertiary)",borderRadius:"var(--radius-sm)",marginBottom:8},children:[x?x.passed?s.jsx(sr,{size:14,style:{color:"var(--success)"}}):s.jsx(Vr,{size:14,style:{color:"var(--error)"}}):s.jsx(yo,{size:14,style:{color:"var(--text-muted)"}}),s.jsx("span",{style:{flex:1},children:N.name}),s.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},children:[N.invocations.length," turn(s)"]})]},N.id)})})]})]})]})}function LS(){const{project:e,setProject:t}=et(),[n,r]=_.useState(""),[i,o]=_.useState(!0),[a,l]=_.useState(!1),[c,u]=_.useState(null),[d,p]=_.useState(!1);if(!e)return null;_.useEffect(()=>{f()},[e.id]);async function f(){o(!0),u(null);try{const h=await $h(e.id);r(h),l(!1)}catch(h){u(h.message)}finally{o(!1)}}function m(h){h!==void 0&&(r(h),l(!0),u(null))}async function y(){o(!0),u(null);try{const h=await Dh(e.id,n);t(h),l(!1)}catch(h){u(h.message)}finally{o(!1)}}function w(){navigator.clipboard.writeText(n),p(!0),setTimeout(()=>p(!1),2e3)}function N(){const h=new Blob([n],{type:"text/yaml"}),v=URL.createObjectURL(h),L=document.createElement("a");L.href=v,L.download=`${e.name}.yaml`,L.click(),URL.revokeObjectURL(v)}function x(){const h=document.createElement("input");h.type="file",h.accept=".yaml,.yml",h.onchange=async v=>{var g;const L=(g=v.target.files)==null?void 0:g[0];if(!L)return;const S=await L.text();r(S),l(!0)},h.click()}return s.jsxs("div",{className:"yaml-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"yaml-header",children:[s.jsxs("div",{className:"yaml-title",children:[s.jsx("h3",{children:"Project Configuration"}),a&&s.jsxs("span",{className:"status-badge warning",children:[s.jsx(go,{size:12}),"Unsaved changes"]}),c&&s.jsxs("span",{className:"status-badge error",children:[s.jsx(go,{size:12}),c]}),d&&s.jsxs("span",{className:"status-badge success",children:[s.jsx(Xh,{size:12}),"Copied!"]})]}),s.jsxs("div",{className:"yaml-actions",children:[s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:w,title:"Copy to clipboard",children:[s.jsx(Zh,{size:14}),"Copy"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:N,title:"Download YAML",children:[s.jsx(ns,{size:14}),"Download"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:x,title:"Upload YAML",children:[s.jsx(Vo,{size:14}),"Upload"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:f,title:"Reload from server",children:[s.jsx(wn,{size:14}),"Reload"]}),s.jsx("button",{className:"btn btn-primary btn-sm",onClick:y,disabled:!a||i,children:"Apply Changes"})]})]}),s.jsx("div",{className:"yaml-editor",children:s.jsx(an,{height:"100%",language:"yaml",theme:"vs-dark",value:n,onChange:m,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),s.jsxs("div",{className:"yaml-info",children:[s.jsx("p",{children:"This YAML represents your entire project configuration including the app, agents, tools, and state keys."}),s.jsxs("p",{children:["You can edit the YAML directly, then click ",s.jsx("code",{children:"Apply Changes"})," to update the project. Use ",s.jsx("code",{children:"Download"})," to save a backup or ",s.jsx("code",{children:"Upload"})," to import a configuration."]})]})]})}function ef(e){return e.replace(/\\/g,"\\\\").replace(/"""/g,'\\"\\"\\"')}function AS(e,t="model"){if(!e)return"";const n=[`model="${e.model_name}"`];return e.api_base&&n.push(`api_base="${e.api_base}"`),e.temperature!=null&&n.push(`temperature=${e.temperature}`),e.max_output_tokens!=null&&n.push(`max_output_tokens=${e.max_output_tokens}`),e.top_p!=null&&n.push(`top_p=${e.top_p}`),e.top_k!=null&&n.push(`top_k=${e.top_k}`),e.provider==="litellm"?`${t} = LiteLlm(
    ${n.join(`,
    `)}
)`:e.provider==="anthropic"?`${t} = Claude(
    ${n.join(`,
    `)}
)`:`${t} = "${e.model_name}"  # Gemini model`}function RS(e,t){var n,r;if(e.type==="builtin")return e.name||"";if(e.type==="function")return e.name||"custom_tool";if(e.type==="agent"){const i=t.agents.find(o=>o.id===e.agent_id);return i?`AgentTool(agent=${i.name}_agent)`:"AgentTool(agent=sub_agent)"}else{if(e.type==="mcp")return(n=e.server)!=null&&n.name?`${e.server.name}_tools`:"";if(e.type==="skillset"){const i=e.skillset_id,o=(r=t.skillsets)==null?void 0:r.find(a=>a.id===i);return o?`${o.name.replace(/[^a-zA-Z0-9_]/g,"_")}_skillset`:""}}return""}function IS(e,t,n){const r=n.get(e.id)||`${e.name}_agent`;if(e.type==="LlmAgent"){const i=e,o=[`name="${e.name}"`];i.model&&o.push(`model=${e.name}_model`),i.instruction&&o.push(`instruction="""${ef(i.instruction)}"""`),i.description&&o.push(`description="${ef(i.description)}"`),i.output_key&&o.push(`output_key="${i.output_key}"`);const a=i.tools.map(c=>RS(c,t)).filter(c=>c&&!c.startsWith("#"));if(a.length>0&&o.push(`tools=[${a.join(", ")}]`),i.sub_agents&&i.sub_agents.length>0){const c=i.sub_agents.map(u=>n.get(u)||"sub_agent").join(", ");o.push(`sub_agents=[${c}]`)}i.include_contents==="none"&&o.push('include_contents="none"'),i.disallow_transfer_to_parent&&o.push("disallow_transfer_to_parent=True"),i.disallow_transfer_to_peers&&o.push("disallow_transfer_to_peers=True");const l={before_agent_callbacks:"before_agent_callback",after_agent_callbacks:"after_agent_callback",before_model_callbacks:"before_model_callback",after_model_callbacks:"after_model_callback",before_tool_callbacks:"before_tool_callback",after_tool_callbacks:"after_tool_callback"};for(const[c,u]of Object.entries(l)){const d=i[c]||[];if(d.length>0){const p=d.map(f=>{const m=t.custom_callbacks.find(y=>y.module_path===f.module_path);return m?`"${f.module_path}.${m.name}"`:`"${f.module_path}"`}).join(", ");if(d.length===1){const f=t.custom_callbacks.find(y=>y.module_path===d[0].module_path),m=f?`${d[0].module_path}.${f.name}`:d[0].module_path;o.push(`${u}="${m}"`)}else o.push(`${u}=[${p}]`)}}return`${r} = Agent(
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
)`}return`# Unknown agent type: ${e.type}`}function MS(e){const t=[];return e.connection_type==="stdio"?(t.push(`${e.name}_tools = McpToolset(`),t.push("    connection_params=StdioConnectionParams("),t.push("        server_params=StdioServerParameters("),e.command&&t.push(`            command="${e.command}",`),e.args.length>0&&t.push(`            args=${JSON.stringify(e.args)},`),Object.keys(e.env).length>0&&t.push(`            env=${JSON.stringify(e.env)},`),t.push("        ),"),e.timeout&&t.push(`        timeout=${e.timeout},`),t.push("    ),"),t.push(")")):e.connection_type==="sse"&&(t.push(`${e.name}_tools = McpToolset(`),t.push("    connection_params=SseConnectionParams("),e.url&&t.push(`        url="${e.url}",`),e.timeout&&t.push(`        timeout=${e.timeout},`),t.push("    ),"),t.push(")")),t.join(`
`)}function OS(e,t){const n=[];return n.push(`# SkillSet: ${e.name}`),n.push(`${e.name.replace(/[^a-zA-Z0-9_]/g,"_")}_manager = KnowledgeServiceManager()`),n.push(`${e.name.replace(/[^a-zA-Z0-9_]/g,"_")}_skillset = SkillSet(`),n.push(`    skillset_id="${e.id}",`),n.push(`    project_id="${t.id}",`),n.push(`    manager=${e.name.replace(/[^a-zA-Z0-9_]/g,"_")}_manager,`),e.embedding_model?n.push(`    model_name="${e.embedding_model}",`):n.push('    model_name="text-embedding-004",'),n.push(`    search_enabled=${e.search_enabled?"True":"False"},`),n.push(`    preload_enabled=${e.preload_enabled?"True":"False"},`),e.preload_top_k&&n.push(`    preload_top_k=${e.preload_top_k},`),e.preload_min_score&&n.push(`    preload_min_score=${e.preload_min_score},`),n.push(")"),n.join(`
`)}function $S(e){const t=[];t.push('"""'),t.push(`${e.name} - Generated by ADK Playground`),e.description&&(t.push(""),t.push(e.description)),t.push('"""'),t.push("");const n=e.app.env_vars||{},r=Object.keys(n);r.length>0&&(t.push("import os"),t.push(""),t.push("# Environment Variables"),t.push("# Set these before running, or uncomment and add values:"),r.forEach(b=>{const P=n[b];if(P){const E=b.toLowerCase().includes("key")||b.toLowerCase().includes("secret")?"***":P;t.push(`os.environ["${b}"] = "${E}"  # Set your ${b}`)}else t.push(`# os.environ["${b}"] = ""  # TODO: Set your ${b}`)}),t.push(""));const i=new Set;i.add("from google.adk.agents import Agent");const o=e.agents.some(b=>b.type==="SequentialAgent"),a=e.agents.some(b=>b.type==="LoopAgent"),l=e.agents.some(b=>b.type==="ParallelAgent");o&&i.add("from google.adk.agents import SequentialAgent"),a&&i.add("from google.adk.agents import LoopAgent"),l&&i.add("from google.adk.agents import ParallelAgent"),e.agents.some(b=>{var P;return b.type==="LlmAgent"&&((P=b.model)==null?void 0:P.provider)==="litellm"})&&i.add("from google.adk.models.lite_llm import LiteLlm"),e.agents.some(b=>b.type==="LlmAgent"&&b.tools.some(P=>P.type==="agent"))&&i.add("from google.adk.tools import AgentTool");const d=new Set;if(e.agents.forEach(b=>{b.type==="LlmAgent"&&b.tools.forEach(P=>{P.type==="builtin"&&P.name&&d.add(P.name)})}),d.has("exit_loop")&&i.add("from google.adk.tools import exit_loop"),d.has("google_search")&&i.add("from google.adk.tools import google_search"),e.mcp_servers.length>0){i.add("from google.adk.tools.mcp_tool.mcp_toolset import McpToolset");const b=e.mcp_servers.some(R=>R.connection_type==="stdio"),P=e.mcp_servers.some(R=>R.connection_type==="sse");b&&(i.add("from google.adk.tools.mcp_tool.mcp_session_manager import StdioConnectionParams"),i.add("from mcp import StdioServerParameters")),P&&i.add("from google.adk.tools.mcp_tool.mcp_session_manager import SseConnectionParams")}e.skillsets&&e.skillsets.length>0;const f=new Set;e.agents.forEach(b=>{"tools"in b&&b.tools&&b.tools.forEach(P=>{P.type==="skillset"&&f.add(P.skillset_id)})}),f.size>0&&(i.add("from skillset import SkillSet"),i.add("from knowledge_service import KnowledgeServiceManager")),i.add("from google.adk.apps import App");const m=e.app.plugins.length>0;m&&e.app.plugins.forEach(b=>{b.type==="ReflectAndRetryToolPlugin"&&i.add("from google.adk.plugins import ReflectAndRetryToolPlugin")});const y=Array.from(i).sort();t.push(...y),t.push(""),t.push("");const w=new Map;e.agents.forEach(b=>{const P=b.name.endsWith("_agent")?b.name:`${b.name}_agent`;w.set(b.id,P)});const N=[],x=new Set;function h(b){if(x.has(b))return;const P=e.agents.find(R=>R.id===b);P&&(P.sub_agents.forEach(R=>h(R)),x.add(b),N.push(P))}e.agents.forEach(b=>h(b.id));const v=new Map;N.forEach(b=>{b.type==="LlmAgent"&&b.tools.forEach(P=>{P.type==="mcp"&&P.server&&v.set(P.server.name,P.server)})}),v.size>0&&(t.push("# MCP Server Toolsets"),v.forEach(b=>{t.push(MS(b)),t.push("")}),t.push(""));const L=new Set;N.forEach(b=>{b.type==="LlmAgent"&&b.tools.forEach(P=>{P.type==="skillset"&&L.add(P.skillset_id)})}),L.size>0&&e.skillsets&&(t.push("# SkillSet Toolsets"),t.push("# Note: SkillSets store knowledge in ~/.adk-playground/skillsets/{project_id}/"),L.forEach(b=>{var R;const P=(R=e.skillsets)==null?void 0:R.find(E=>E.id===b);P&&(t.push(OS(P,e)),t.push(""))}),t.push("")),e.custom_tools.length>0&&(t.push("# Custom Tools"),e.custom_tools.forEach(b=>{t.push(b.code),t.push("")}),t.push("")),e.custom_callbacks&&e.custom_callbacks.length>0&&(t.push("# Custom Callbacks"),e.custom_callbacks.forEach(b=>{t.push(b.code),t.push("")}),t.push("")),t.push("# Models"),N.forEach(b=>{b.type==="LlmAgent"&&b.model&&(t.push(AS(b.model,`${b.name}_model`)),t.push(""))}),t.push(""),t.push("# Agents"),N.forEach(b=>{t.push(IS(b,e,w)),t.push("")});const S=e.agents.find(b=>b.id===e.app.root_agent_id),g=S?w.get(S.id):"root_agent";if(t.push(""),t.push(""),t.push("# App Configuration"),t.push("app = App("),t.push(`    name="${e.app.name}",`),t.push(`    root_agent=${g},`),m){const b=e.app.plugins.map(P=>P.type==="ReflectAndRetryToolPlugin"?`        ReflectAndRetryToolPlugin(max_retries=${P.max_retries||3})`:`        # ${P.type}()`);t.push("    plugins=["),t.push(b.join(`,
`)),t.push("    ],")}return t.push(")"),t.join(`
`)}function DS(){const{project:e}=et(),[t,n]=_.useState(!1);if(!e)return null;const r=_.useMemo(()=>$S(e),[e]);function i(){navigator.clipboard.writeText(r),n(!0),setTimeout(()=>n(!1),2e3)}function o(){const a=new Blob([r],{type:"text/x-python"}),l=URL.createObjectURL(a),c=document.createElement("a");c.href=l,c.download=`${e.name}_agent.py`,c.click(),URL.revokeObjectURL(l)}return s.jsxs("div",{className:"code-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"code-header",children:[s.jsxs("div",{className:"code-title",children:[s.jsx(In,{size:16}),s.jsx("h3",{children:"Python Code"}),s.jsx("span",{className:"badge",children:"Generated"}),t&&s.jsxs("span",{className:"status-badge success",children:[s.jsx(Xh,{size:12}),"Copied!"]})]}),s.jsxs("div",{className:"code-actions",children:[s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:i,title:"Copy to clipboard",children:[s.jsx(Zh,{size:14}),"Copy"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:o,title:"Download Python file",children:[s.jsx(ns,{size:14}),"Download"]})]})]}),s.jsx("div",{className:"code-editor",children:s.jsx(an,{height:"100%",language:"python",theme:"vs-dark",value:r,options:{readOnly:!0,minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),s.jsxs("div",{className:"code-info",children:[s.jsx("p",{children:"This is the Python code equivalent of your project configuration. You can use this code directly with ADK."}),s.jsxs("p",{children:["Place this in a file named ",s.jsx("code",{children:"agent.py"})," inside your agent directory, then run with ",s.jsx("code",{children:"adk web ."})," or ",s.jsx("code",{children:"adk run your_agent"}),"."]})]})]})}const FS=[{id:"app",label:"App",icon:ig},{id:"agents",label:"Agents",icon:Zn},{id:"tools",label:"Tools",icon:Yt},{id:"callbacks",label:"Callbacks",icon:In},{id:"run",label:"Run",icon:ng},{id:"skillsets",label:"SkillSets",icon:l0},{id:"eval",label:"Evaluate",icon:Hl},{id:"yaml",label:"YAML",icon:u0},{id:"code",label:"Code",icon:In}],BS=["app","agents","tools","callbacks","run","skillsets","eval","yaml","code"];function Wa(){var F,X;const{projectId:e,tab:t,itemId:n}=u1(),r=tu(),{project:i,setProject:o,activeTab:a,setActiveTab:l,hasUnsavedChanges:c,setHasUnsavedChanges:u,selectedAgentId:d,setSelectedAgentId:p,selectedToolId:f,setSelectedToolId:m}=et(),[y,w]=_.useState(!0),[N,x]=_.useState(!1),[h,v]=_.useState(!1),[L,S]=_.useState(null),g=_.useRef(!0),b=_.useRef(null);_.useEffect(()=>{t&&BS.includes(t)?l(t):!t&&e&&r(`/project/${e}/${a}`,{replace:!0})},[t,e]),_.useEffect(()=>{t==="agents"&&n?p(n):t==="tools"&&n&&m(n)},[t,n]);function P(z){l(z),z==="agents"&&d?r(`/project/${e}/${z}/${d}`,{replace:!0}):z==="tools"&&f?r(`/project/${e}/${z}/${f}`,{replace:!0}):r(`/project/${e}/${z}`,{replace:!0})}function R(z){z?r(`/project/${e}/${a}/${z}`,{replace:!0}):r(`/project/${e}/${a}`,{replace:!0})}_.useEffect(()=>(e&&E(e),()=>{o(null),u(!1)}),[e]);async function E(z){g.current=!0;try{const O=await Ah(z);o(O),b.current=JSON.stringify(O),u(!1)}catch(O){console.error("Failed to load project:",O),r("/")}finally{w(!1),setTimeout(()=>{g.current=!1},100)}}async function j(){if(i){x(!0);try{const{eval_sets:z,...O}=i;await Fl(i.id,O),b.current=JSON.stringify(i),u(!1)}catch(z){console.error("Failed to save project:",z)}finally{x(!1)}}}async function T(){if(i){v(!0),S(null),window.dispatchEvent(new CustomEvent("eval-tests-started"));try{let z=0,O=0;const I=[],k=[];for(const U of i.eval_sets||[]){if(U.eval_cases.length===0)continue;const K=await Be.post(`/projects/${i.id}/eval-sets/${U.id}/run`,{});K.result&&(z+=K.result.passed_cases||0,O+=K.result.total_cases||0,K.result.case_results&&I.push(...K.result.case_results),k.push(K.result.eval_set_name||U.name||U.id))}if(I.length>0){const U={id:Date.now().toString(36)+Math.random().toString(36).substr(2,5),eval_set_id:"batch",eval_set_name:k.length>1?`All Tests (${k.length} sets)`:k[0]||"All Tests",started_at:Date.now()/1e3,completed_at:Date.now()/1e3,total_cases:O,passed_cases:z,failed_cases:O-z,case_results:I};try{await Be.post(`/projects/${i.id}/eval-history`,U)}catch(K){console.warn("Failed to save batch eval run to history:",K)}}S({passed:z,total:O}),window.dispatchEvent(new CustomEvent("eval-tests-completed")),setTimeout(()=>S(null),5e3)}catch(z){console.error("Failed to run tests:",z),S({passed:0,total:-1}),setTimeout(()=>S(null),5e3)}finally{v(!1)}}}const M=_.useRef(null);_.useEffect(()=>{if(i&&!g.current&&M.current){const z=i.app.models||[],O=M.current||[];if(z.some((k,U)=>{const K=O.find(C=>C.id===k.id);return K?K.provider!==k.provider||K.model_name!==k.model_name||K.api_base!==k.api_base||K.temperature!==k.temperature||K.max_output_tokens!==k.max_output_tokens||K.top_p!==k.top_p||K.top_k!==k.top_k:!1})){const k=i.app.default_model_id,U=i.agents.map(C=>{if(C.type==="LlmAgent"&&C.model){const le=C.model._appModelId;if(le){const A=z.find(Z=>Z.id===le);if(A)return{...C,model:{provider:A.provider,model_name:A.model_name,api_base:A.api_base,temperature:A.temperature,max_output_tokens:A.max_output_tokens,top_p:A.top_p,top_k:A.top_k,fallbacks:[],_appModelId:le}}}else if(k){const A=z.find(Z=>Z.id===k);if(A&&C.model.provider===A.provider&&C.model.model_name===A.model_name&&C.model.api_base===A.api_base)return{...C,model:{provider:A.provider,model_name:A.model_name,api_base:A.api_base,temperature:A.temperature,max_output_tokens:A.max_output_tokens,top_p:A.top_p,top_k:A.top_k,fallbacks:[],_appModelId:k}}}}return C});U.some((C,le)=>JSON.stringify(C)!==JSON.stringify(i.agents[le]))&&o({...i,agents:U})}}i&&(M.current=i.app.models||[])},[i==null?void 0:i.app.models,i,o]);const V=_.useRef(null);return _.useEffect(()=>(i&&!g.current&&b.current&&JSON.stringify(i)!==b.current&&(u(!0),V.current&&clearTimeout(V.current),V.current=setTimeout(async()=>{try{const{eval_sets:O,...I}=i;await Fl(i.id,I),b.current=JSON.stringify(i),u(!1)}catch(O){console.error("Auto-save failed:",O)}},500)),()=>{V.current&&clearTimeout(V.current)}),[i]),y?s.jsxs("div",{className:"loading-screen",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("header",{className:"top-bar",children:[s.jsxs("div",{className:"top-bar-left",children:[s.jsxs("button",{className:"back-btn",onClick:()=>r("/"),children:[s.jsx(a0,{size:18}),"Project"]}),s.jsx("h1",{className:"project-name",children:i.name})]}),s.jsx("nav",{className:"tabs-bar",children:FS.map(z=>s.jsxs("button",{className:`tab-btn ${a===z.id?"active":""}`,onClick:()=>P(z.id),children:[s.jsx(z.icon,{size:14}),z.label]},z.id))}),s.jsxs("div",{className:"top-bar-right",children:[s.jsxs("button",{className:`btn ${L?L.total===-1?"btn-error":L.passed===L.total?"btn-success":"btn-warning":"btn-secondary"}`,onClick:T,disabled:h||!((F=i==null?void 0:i.eval_sets)!=null&&F.some(z=>z.eval_cases.length>0)),title:(X=i==null?void 0:i.eval_sets)!=null&&X.some(z=>z.eval_cases.length>0)?"Run all evaluation tests":"No test cases defined",style:{marginRight:8},children:[h?s.jsx(m0,{size:16,className:"spin"}):s.jsx(Mn,{size:16}),h?"Testing...":L?L.total===-1?"Error":`${L.passed}/${L.total}`:"Test"]}),s.jsxs("button",{className:"btn btn-primary",onClick:j,disabled:N,children:[s.jsx(ou,{size:16}),N?"Saving...":"Save"]})]})]}),s.jsxs("main",{className:"main-content",children:[a==="app"&&s.jsx(S0,{}),a==="agents"&&s.jsx(L_,{onSelectAgent:R}),a==="tools"&&s.jsx(pS,{onSelectTool:R}),a==="callbacks"&&s.jsx(mS,{onSelectCallback:R}),a==="run"&&s.jsx(jS,{}),a==="skillsets"&&s.jsx(SS,{}),a==="eval"&&s.jsx(NS,{}),a==="yaml"&&s.jsx(LS,{}),a==="code"&&s.jsx(DS,{})]})]}):null}function US(){const{setMcpServers:e,setBuiltinTools:t}=et();return _.useEffect(()=>{nu().then(e).catch(console.error),Fh().then(t).catch(console.error)},[e,t]),s.jsxs(N1,{children:[s.jsx(pr,{path:"/",element:s.jsx(j0,{})}),s.jsx(pr,{path:"/project/:projectId",element:s.jsx(Wa,{})}),s.jsx(pr,{path:"/project/:projectId/:tab",element:s.jsx(Wa,{})}),s.jsx(pr,{path:"/project/:projectId/:tab/:itemId",element:s.jsx(Wa,{})}),s.jsx(pr,{path:"*",element:s.jsx(S1,{to:"/",replace:!0})})]})}Ha.createRoot(document.getElementById("root")).render(s.jsx(Lt.StrictMode,{children:s.jsx(T1,{children:s.jsx(US,{})})}));
