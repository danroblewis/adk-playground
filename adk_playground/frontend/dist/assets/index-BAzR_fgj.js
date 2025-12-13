function ax(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in e)){const o=Object.getOwnPropertyDescriptor(r,s);o&&Object.defineProperty(e,s,o.get?o:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();var Ws=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nf={exports:{}},So={},rf={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qi=Symbol.for("react.element"),lx=Symbol.for("react.portal"),cx=Symbol.for("react.fragment"),ux=Symbol.for("react.strict_mode"),dx=Symbol.for("react.profiler"),px=Symbol.for("react.provider"),fx=Symbol.for("react.context"),mx=Symbol.for("react.forward_ref"),hx=Symbol.for("react.suspense"),gx=Symbol.for("react.memo"),xx=Symbol.for("react.lazy"),zu=Symbol.iterator;function yx(e){return e===null||typeof e!="object"?null:(e=zu&&e[zu]||e["@@iterator"],typeof e=="function"?e:null)}var sf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},of=Object.assign,af={};function Wr(e,t,n){this.props=e,this.context=t,this.refs=af,this.updater=n||sf}Wr.prototype.isReactComponent={};Wr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Wr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function lf(){}lf.prototype=Wr.prototype;function sc(e,t,n){this.props=e,this.context=t,this.refs=af,this.updater=n||sf}var oc=sc.prototype=new lf;oc.constructor=sc;of(oc,Wr.prototype);oc.isPureReactComponent=!0;var Tu=Array.isArray,cf=Object.prototype.hasOwnProperty,ac={current:null},uf={key:!0,ref:!0,__self:!0,__source:!0};function df(e,t,n){var r,s={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)cf.call(t,r)&&!uf.hasOwnProperty(r)&&(s[r]=t[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];s.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Qi,type:e,key:o,ref:a,props:s,_owner:ac.current}}function vx(e,t){return{$$typeof:Qi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function lc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qi}function bx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Pu=/\/+/g;function ea(e,t){return typeof e=="object"&&e!==null&&e.key!=null?bx(""+e.key):t.toString(36)}function zs(e,t,n,r,s){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Qi:case lx:a=!0}}if(a)return a=e,s=s(a),e=r===""?"."+ea(a,0):r,Tu(s)?(n="",e!=null&&(n=e.replace(Pu,"$&/")+"/"),zs(s,t,n,"",function(u){return u})):s!=null&&(lc(s)&&(s=vx(s,n+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(Pu,"$&/")+"/")+e)),t.push(s)),1;if(a=0,r=r===""?".":r+":",Tu(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+ea(o,l);a+=zs(o,t,n,c,s)}else if(c=yx(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+ea(o,l++),a+=zs(o,t,n,c,s);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function as(e,t,n){if(e==null)return e;var r=[],s=0;return zs(e,r,"","",function(o){return t.call(n,o,s++)}),r}function kx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var it={current:null},Ts={transition:null},jx={ReactCurrentDispatcher:it,ReactCurrentBatchConfig:Ts,ReactCurrentOwner:ac};function pf(){throw Error("act(...) is not supported in production builds of React.")}xe.Children={map:as,forEach:function(e,t,n){as(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return as(e,function(){t++}),t},toArray:function(e){return as(e,function(t){return t})||[]},only:function(e){if(!lc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};xe.Component=Wr;xe.Fragment=cx;xe.Profiler=dx;xe.PureComponent=sc;xe.StrictMode=ux;xe.Suspense=hx;xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jx;xe.act=pf;xe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=of({},e.props),s=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=ac.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)cf.call(t,c)&&!uf.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Qi,type:e.type,key:s,ref:o,props:r,_owner:a}};xe.createContext=function(e){return e={$$typeof:fx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:px,_context:e},e.Consumer=e};xe.createElement=df;xe.createFactory=function(e){var t=df.bind(null,e);return t.type=e,t};xe.createRef=function(){return{current:null}};xe.forwardRef=function(e){return{$$typeof:mx,render:e}};xe.isValidElement=lc;xe.lazy=function(e){return{$$typeof:xx,_payload:{_status:-1,_result:e},_init:kx}};xe.memo=function(e,t){return{$$typeof:gx,type:e,compare:t===void 0?null:t}};xe.startTransition=function(e){var t=Ts.transition;Ts.transition={};try{e()}finally{Ts.transition=t}};xe.unstable_act=pf;xe.useCallback=function(e,t){return it.current.useCallback(e,t)};xe.useContext=function(e){return it.current.useContext(e)};xe.useDebugValue=function(){};xe.useDeferredValue=function(e){return it.current.useDeferredValue(e)};xe.useEffect=function(e,t){return it.current.useEffect(e,t)};xe.useId=function(){return it.current.useId()};xe.useImperativeHandle=function(e,t,n){return it.current.useImperativeHandle(e,t,n)};xe.useInsertionEffect=function(e,t){return it.current.useInsertionEffect(e,t)};xe.useLayoutEffect=function(e,t){return it.current.useLayoutEffect(e,t)};xe.useMemo=function(e,t){return it.current.useMemo(e,t)};xe.useReducer=function(e,t,n){return it.current.useReducer(e,t,n)};xe.useRef=function(e){return it.current.useRef(e)};xe.useState=function(e){return it.current.useState(e)};xe.useSyncExternalStore=function(e,t,n){return it.current.useSyncExternalStore(e,t,n)};xe.useTransition=function(){return it.current.useTransition()};xe.version="18.3.1";rf.exports=xe;var S=rf.exports;const Lt=_o(S),wx=ax({__proto__:null,default:Lt},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _x=S,Sx=Symbol.for("react.element"),Cx=Symbol.for("react.fragment"),Nx=Object.prototype.hasOwnProperty,Ex=_x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zx={key:!0,ref:!0,__self:!0,__source:!0};function ff(e,t,n){var r,s={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Nx.call(t,r)&&!zx.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:Sx,type:e,key:o,ref:a,props:s,_owner:Ex.current}}So.Fragment=Cx;So.jsx=ff;So.jsxs=ff;nf.exports=So;var i=nf.exports,qa={},mf={exports:{}},wt={},hf={exports:{}},gf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,I){var k=O.length;O.push(I);e:for(;0<k;){var V=k-1>>>1,K=O[V];if(0<s(K,I))O[V]=I,O[k]=K,k=V;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var I=O[0],k=O.pop();if(k!==I){O[0]=k;e:for(var V=0,K=O.length,z=K>>>1;V<z;){var le=2*(V+1)-1,A=O[le],Z=le+1,B=O[Z];if(0>s(A,k))Z<K&&0>s(B,A)?(O[V]=B,O[Z]=k,V=Z):(O[V]=A,O[le]=k,V=le);else if(Z<K&&0>s(B,k))O[V]=B,O[Z]=k,V=Z;else break e}}return I}function s(O,I){var k=O.sortIndex-I.sortIndex;return k!==0?k:O.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,p=null,f=3,m=!1,y=!1,_=!1,L=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(O){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=O)r(u),I.sortIndex=I.expirationTime,t(c,I);else break;I=n(u)}}function P(O){if(_=!1,h(O),!y)if(n(c)!==null)y=!0,Q(j);else{var I=n(u);I!==null&&T(P,I.startTime-O)}}function j(O,I){y=!1,_&&(_=!1,x(w),w=-1),m=!0;var k=f;try{for(h(I),p=n(c);p!==null&&(!(p.expirationTime>I)||O&&!v());){var V=p.callback;if(typeof V=="function"){p.callback=null,f=p.priorityLevel;var K=V(p.expirationTime<=I);I=e.unstable_now(),typeof K=="function"?p.callback=K:p===n(c)&&r(c),h(I)}else r(c);p=n(c)}if(p!==null)var z=!0;else{var le=n(u);le!==null&&T(P,le.startTime-I),z=!1}return z}finally{p=null,f=k,m=!1}}var b=!1,C=null,w=-1,R=5,N=-1;function v(){return!(e.unstable_now()-N<R)}function E(){if(C!==null){var O=e.unstable_now();N=O;var I=!0;try{I=C(!0,O)}finally{I?M():(b=!1,C=null)}}else b=!1}var M;if(typeof g=="function")M=function(){g(E)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,D=U.port2;U.port1.onmessage=E,M=function(){D.postMessage(null)}}else M=function(){L(E,0)};function Q(O){C=O,b||(b=!0,M())}function T(O,I){w=L(function(){O(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){y||m||(y=!0,Q(j))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(O){switch(f){case 1:case 2:case 3:var I=3;break;default:I=f}var k=f;f=I;try{return O()}finally{f=k}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,I){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var k=f;f=O;try{return I()}finally{f=k}},e.unstable_scheduleCallback=function(O,I,k){var V=e.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?V+k:V):k=V,O){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=k+K,O={id:d++,callback:I,priorityLevel:O,startTime:k,expirationTime:K,sortIndex:-1},k>V?(O.sortIndex=k,t(u,O),n(c)===null&&O===n(u)&&(_?(x(w),w=-1):_=!0,T(P,k-V))):(O.sortIndex=K,t(c,O),y||m||(y=!0,Q(j))),O},e.unstable_shouldYield=v,e.unstable_wrapCallback=function(O){var I=f;return function(){var k=f;f=I;try{return O.apply(this,arguments)}finally{f=k}}}})(gf);hf.exports=gf;var Tx=hf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Px=S,jt=Tx;function G(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xf=new Set,Ci={};function or(e,t){Rr(e,t),Rr(e+"Capture",t)}function Rr(e,t){for(Ci[e]=t,e=0;e<t.length;e++)xf.add(t[e])}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ja=Object.prototype.hasOwnProperty,Lx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lu={},Au={};function Ax(e){return Ja.call(Au,e)?!0:Ja.call(Lu,e)?!1:Lx.test(e)?Au[e]=!0:(Lu[e]=!0,!1)}function Rx(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ix(e,t,n,r){if(t===null||typeof t>"u"||Rx(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function st(e,t,n,r,s,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Qe[e]=new st(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Qe[t]=new st(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Qe[e]=new st(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Qe[e]=new st(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Qe[e]=new st(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Qe[e]=new st(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Qe[e]=new st(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Qe[e]=new st(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Qe[e]=new st(e,5,!1,e.toLowerCase(),null,!1,!1)});var cc=/[\-:]([a-z])/g;function uc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(cc,uc);Qe[t]=new st(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(cc,uc);Qe[t]=new st(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(cc,uc);Qe[t]=new st(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Qe[e]=new st(e,1,!1,e.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new st("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Qe[e]=new st(e,1,!1,e.toLowerCase(),null,!0,!0)});function dc(e,t,n,r){var s=Qe.hasOwnProperty(t)?Qe[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ix(t,n,s,r)&&(n=null),r||s===null?Ax(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var fn=Px.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ls=Symbol.for("react.element"),fr=Symbol.for("react.portal"),mr=Symbol.for("react.fragment"),pc=Symbol.for("react.strict_mode"),Ka=Symbol.for("react.profiler"),yf=Symbol.for("react.provider"),vf=Symbol.for("react.context"),fc=Symbol.for("react.forward_ref"),Qa=Symbol.for("react.suspense"),Ga=Symbol.for("react.suspense_list"),mc=Symbol.for("react.memo"),xn=Symbol.for("react.lazy"),bf=Symbol.for("react.offscreen"),Ru=Symbol.iterator;function Gr(e){return e===null||typeof e!="object"?null:(e=Ru&&e[Ru]||e["@@iterator"],typeof e=="function"?e:null)}var Re=Object.assign,ta;function li(e){if(ta===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ta=t&&t[1]||""}return`
`+ta+e}var na=!1;function ra(e,t){if(!e||na)return"";na=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),o=r.stack.split(`
`),a=s.length-1,l=o.length-1;1<=a&&0<=l&&s[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(s[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||s[a]!==o[l]){var c=`
`+s[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{na=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?li(e):""}function Mx(e){switch(e.tag){case 5:return li(e.type);case 16:return li("Lazy");case 13:return li("Suspense");case 19:return li("SuspenseList");case 0:case 2:case 15:return e=ra(e.type,!1),e;case 11:return e=ra(e.type.render,!1),e;case 1:return e=ra(e.type,!0),e;default:return""}}function Ya(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mr:return"Fragment";case fr:return"Portal";case Ka:return"Profiler";case pc:return"StrictMode";case Qa:return"Suspense";case Ga:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vf:return(e.displayName||"Context")+".Consumer";case yf:return(e._context.displayName||"Context")+".Provider";case fc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mc:return t=e.displayName||null,t!==null?t:Ya(e.type)||"Memo";case xn:t=e._payload,e=e._init;try{return Ya(e(t))}catch{}}return null}function Ox(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ya(t);case 8:return t===pc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $x(e){var t=kf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function cs(e){e._valueTracker||(e._valueTracker=$x(e))}function jf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=kf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Hs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xa(e,t){var n=t.checked;return Re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Iu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Rn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function wf(e,t){t=t.checked,t!=null&&dc(e,"checked",t,!1)}function Za(e,t){wf(e,t);var n=Rn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?el(e,t.type,n):t.hasOwnProperty("defaultValue")&&el(e,t.type,Rn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Mu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function el(e,t,n){(t!=="number"||Hs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ci=Array.isArray;function Cr(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Rn(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function tl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(G(91));return Re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ou(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(G(92));if(ci(n)){if(1<n.length)throw Error(G(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Rn(n)}}function _f(e,t){var n=Rn(t.value),r=Rn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $u(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Sf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Sf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var us,Cf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(us=us||document.createElement("div"),us.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=us.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ni(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dx=["Webkit","ms","Moz","O"];Object.keys(fi).forEach(function(e){Dx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fi[t]=fi[e]})});function Nf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||fi.hasOwnProperty(e)&&fi[e]?(""+t).trim():t+"px"}function Ef(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Nf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var Fx=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rl(e,t){if(t){if(Fx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(G(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(G(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(G(61))}if(t.style!=null&&typeof t.style!="object")throw Error(G(62))}}function il(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sl=null;function hc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ol=null,Nr=null,Er=null;function Du(e){if(e=Xi(e)){if(typeof ol!="function")throw Error(G(280));var t=e.stateNode;t&&(t=To(t),ol(e.stateNode,e.type,t))}}function zf(e){Nr?Er?Er.push(e):Er=[e]:Nr=e}function Tf(){if(Nr){var e=Nr,t=Er;if(Er=Nr=null,Du(e),t)for(e=0;e<t.length;e++)Du(t[e])}}function Pf(e,t){return e(t)}function Lf(){}var ia=!1;function Af(e,t,n){if(ia)return e(t,n);ia=!0;try{return Pf(e,t,n)}finally{ia=!1,(Nr!==null||Er!==null)&&(Lf(),Tf())}}function Ei(e,t){var n=e.stateNode;if(n===null)return null;var r=To(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(G(231,t,typeof n));return n}var al=!1;if(cn)try{var Yr={};Object.defineProperty(Yr,"passive",{get:function(){al=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{al=!1}function Bx(e,t,n,r,s,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var mi=!1,qs=null,Js=!1,ll=null,Ux={onError:function(e){mi=!0,qs=e}};function Vx(e,t,n,r,s,o,a,l,c){mi=!1,qs=null,Bx.apply(Ux,arguments)}function Wx(e,t,n,r,s,o,a,l,c){if(Vx.apply(this,arguments),mi){if(mi){var u=qs;mi=!1,qs=null}else throw Error(G(198));Js||(Js=!0,ll=u)}}function ar(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Rf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fu(e){if(ar(e)!==e)throw Error(G(188))}function Hx(e){var t=e.alternate;if(!t){if(t=ar(e),t===null)throw Error(G(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var o=s.alternate;if(o===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===n)return Fu(s),e;if(o===r)return Fu(s),t;o=o.sibling}throw Error(G(188))}if(n.return!==r.return)n=s,r=o;else{for(var a=!1,l=s.child;l;){if(l===n){a=!0,n=s,r=o;break}if(l===r){a=!0,r=s,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=s;break}if(l===r){a=!0,r=o,n=s;break}l=l.sibling}if(!a)throw Error(G(189))}}if(n.alternate!==r)throw Error(G(190))}if(n.tag!==3)throw Error(G(188));return n.stateNode.current===n?e:t}function If(e){return e=Hx(e),e!==null?Mf(e):null}function Mf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Mf(e);if(t!==null)return t;e=e.sibling}return null}var Of=jt.unstable_scheduleCallback,Bu=jt.unstable_cancelCallback,qx=jt.unstable_shouldYield,Jx=jt.unstable_requestPaint,Me=jt.unstable_now,Kx=jt.unstable_getCurrentPriorityLevel,gc=jt.unstable_ImmediatePriority,$f=jt.unstable_UserBlockingPriority,Ks=jt.unstable_NormalPriority,Qx=jt.unstable_LowPriority,Df=jt.unstable_IdlePriority,Co=null,Gt=null;function Gx(e){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(Co,e,void 0,(e.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:Zx,Yx=Math.log,Xx=Math.LN2;function Zx(e){return e>>>=0,e===0?32:31-(Yx(e)/Xx|0)|0}var ds=64,ps=4194304;function ui(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~s;l!==0?r=ui(l):(o&=a,o!==0&&(r=ui(o)))}else a=n&~s,a!==0?r=ui(a):o!==0&&(r=ui(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,o=t&-t,s>=o||s===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Bt(t),s=1<<n,r|=e[n],t&=~s;return r}function ey(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ty(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Bt(o),l=1<<a,c=s[a];c===-1?(!(l&n)||l&r)&&(s[a]=ey(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function cl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ff(){var e=ds;return ds<<=1,!(ds&4194240)&&(ds=64),e}function sa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Bt(t),e[t]=n}function ny(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Bt(n),o=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~o}}function xc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Bt(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var je=0;function Bf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Uf,yc,Vf,Wf,Hf,ul=!1,fs=[],Sn=null,Cn=null,Nn=null,zi=new Map,Ti=new Map,vn=[],ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uu(e,t){switch(e){case"focusin":case"focusout":Sn=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":zi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ti.delete(t.pointerId)}}function Xr(e,t,n,r,s,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[s]},t!==null&&(t=Xi(t),t!==null&&yc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function iy(e,t,n,r,s){switch(t){case"focusin":return Sn=Xr(Sn,e,t,n,r,s),!0;case"dragenter":return Cn=Xr(Cn,e,t,n,r,s),!0;case"mouseover":return Nn=Xr(Nn,e,t,n,r,s),!0;case"pointerover":var o=s.pointerId;return zi.set(o,Xr(zi.get(o)||null,e,t,n,r,s)),!0;case"gotpointercapture":return o=s.pointerId,Ti.set(o,Xr(Ti.get(o)||null,e,t,n,r,s)),!0}return!1}function qf(e){var t=Jn(e.target);if(t!==null){var n=ar(t);if(n!==null){if(t=n.tag,t===13){if(t=Rf(n),t!==null){e.blockedOn=t,Hf(e.priority,function(){Vf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ps(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sl=r,n.target.dispatchEvent(r),sl=null}else return t=Xi(n),t!==null&&yc(t),e.blockedOn=n,!1;t.shift()}return!0}function Vu(e,t,n){Ps(e)&&n.delete(t)}function sy(){ul=!1,Sn!==null&&Ps(Sn)&&(Sn=null),Cn!==null&&Ps(Cn)&&(Cn=null),Nn!==null&&Ps(Nn)&&(Nn=null),zi.forEach(Vu),Ti.forEach(Vu)}function Zr(e,t){e.blockedOn===t&&(e.blockedOn=null,ul||(ul=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,sy)))}function Pi(e){function t(s){return Zr(s,e)}if(0<fs.length){Zr(fs[0],e);for(var n=1;n<fs.length;n++){var r=fs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Sn!==null&&Zr(Sn,e),Cn!==null&&Zr(Cn,e),Nn!==null&&Zr(Nn,e),zi.forEach(t),Ti.forEach(t),n=0;n<vn.length;n++)r=vn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<vn.length&&(n=vn[0],n.blockedOn===null);)qf(n),n.blockedOn===null&&vn.shift()}var zr=fn.ReactCurrentBatchConfig,Gs=!0;function oy(e,t,n,r){var s=je,o=zr.transition;zr.transition=null;try{je=1,vc(e,t,n,r)}finally{je=s,zr.transition=o}}function ay(e,t,n,r){var s=je,o=zr.transition;zr.transition=null;try{je=4,vc(e,t,n,r)}finally{je=s,zr.transition=o}}function vc(e,t,n,r){if(Gs){var s=dl(e,t,n,r);if(s===null)ha(e,t,r,Ys,n),Uu(e,r);else if(iy(s,e,t,n,r))r.stopPropagation();else if(Uu(e,r),t&4&&-1<ry.indexOf(e)){for(;s!==null;){var o=Xi(s);if(o!==null&&Uf(o),o=dl(e,t,n,r),o===null&&ha(e,t,r,Ys,n),o===s)break;s=o}s!==null&&r.stopPropagation()}else ha(e,t,r,null,n)}}var Ys=null;function dl(e,t,n,r){if(Ys=null,e=hc(r),e=Jn(e),e!==null)if(t=ar(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Rf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ys=e,null}function Jf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kx()){case gc:return 1;case $f:return 4;case Ks:case Qx:return 16;case Df:return 536870912;default:return 16}default:return 16}}var kn=null,bc=null,Ls=null;function Kf(){if(Ls)return Ls;var e,t=bc,n=t.length,r,s="value"in kn?kn.value:kn.textContent,o=s.length;for(e=0;e<n&&t[e]===s[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===s[o-r];r++);return Ls=s.slice(e,1<r?1-r:void 0)}function As(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ms(){return!0}function Wu(){return!1}function _t(e){function t(n,r,s,o,a){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ms:Wu,this.isPropagationStopped=Wu,this}return Re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ms)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ms)},persist:function(){},isPersistent:ms}),t}var Hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kc=_t(Hr),Yi=Re({},Hr,{view:0,detail:0}),ly=_t(Yi),oa,aa,ei,No=Re({},Yi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ei&&(ei&&e.type==="mousemove"?(oa=e.screenX-ei.screenX,aa=e.screenY-ei.screenY):aa=oa=0,ei=e),oa)},movementY:function(e){return"movementY"in e?e.movementY:aa}}),Hu=_t(No),cy=Re({},No,{dataTransfer:0}),uy=_t(cy),dy=Re({},Yi,{relatedTarget:0}),la=_t(dy),py=Re({},Hr,{animationName:0,elapsedTime:0,pseudoElement:0}),fy=_t(py),my=Re({},Hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hy=_t(my),gy=Re({},Hr,{data:0}),qu=_t(gy),xy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function by(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vy[e])?!!t[e]:!1}function jc(){return by}var ky=Re({},Yi,{key:function(e){if(e.key){var t=xy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=As(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jc,charCode:function(e){return e.type==="keypress"?As(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?As(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jy=_t(ky),wy=Re({},No,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ju=_t(wy),_y=Re({},Yi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jc}),Sy=_t(_y),Cy=Re({},Hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ny=_t(Cy),Ey=Re({},No,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zy=_t(Ey),Ty=[9,13,27,32],wc=cn&&"CompositionEvent"in window,hi=null;cn&&"documentMode"in document&&(hi=document.documentMode);var Py=cn&&"TextEvent"in window&&!hi,Qf=cn&&(!wc||hi&&8<hi&&11>=hi),Ku=" ",Qu=!1;function Gf(e,t){switch(e){case"keyup":return Ty.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hr=!1;function Ly(e,t){switch(e){case"compositionend":return Yf(t);case"keypress":return t.which!==32?null:(Qu=!0,Ku);case"textInput":return e=t.data,e===Ku&&Qu?null:e;default:return null}}function Ay(e,t){if(hr)return e==="compositionend"||!wc&&Gf(e,t)?(e=Kf(),Ls=bc=kn=null,hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qf&&t.locale!=="ko"?null:t.data;default:return null}}var Ry={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ry[e.type]:t==="textarea"}function Xf(e,t,n,r){zf(r),t=Xs(t,"onChange"),0<t.length&&(n=new kc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var gi=null,Li=null;function Iy(e){cm(e,0)}function Eo(e){var t=yr(e);if(jf(t))return e}function My(e,t){if(e==="change")return t}var Zf=!1;if(cn){var ca;if(cn){var ua="oninput"in document;if(!ua){var Yu=document.createElement("div");Yu.setAttribute("oninput","return;"),ua=typeof Yu.oninput=="function"}ca=ua}else ca=!1;Zf=ca&&(!document.documentMode||9<document.documentMode)}function Xu(){gi&&(gi.detachEvent("onpropertychange",em),Li=gi=null)}function em(e){if(e.propertyName==="value"&&Eo(Li)){var t=[];Xf(t,Li,e,hc(e)),Af(Iy,t)}}function Oy(e,t,n){e==="focusin"?(Xu(),gi=t,Li=n,gi.attachEvent("onpropertychange",em)):e==="focusout"&&Xu()}function $y(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Eo(Li)}function Dy(e,t){if(e==="click")return Eo(t)}function Fy(e,t){if(e==="input"||e==="change")return Eo(t)}function By(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Vt=typeof Object.is=="function"?Object.is:By;function Ai(e,t){if(Vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Ja.call(t,s)||!Vt(e[s],t[s]))return!1}return!0}function Zu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ed(e,t){var n=Zu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zu(n)}}function tm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nm(){for(var e=window,t=Hs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hs(e.document)}return t}function _c(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Uy(e){var t=nm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&tm(n.ownerDocument.documentElement,n)){if(r!==null&&_c(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,o=Math.min(r.start,s);r=r.end===void 0?o:Math.min(r.end,s),!e.extend&&o>r&&(s=r,r=o,o=s),s=ed(n,o);var a=ed(n,r);s&&a&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vy=cn&&"documentMode"in document&&11>=document.documentMode,gr=null,pl=null,xi=null,fl=!1;function td(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fl||gr==null||gr!==Hs(r)||(r=gr,"selectionStart"in r&&_c(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xi&&Ai(xi,r)||(xi=r,r=Xs(pl,"onSelect"),0<r.length&&(t=new kc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function hs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xr={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionend:hs("Transition","TransitionEnd")},da={},rm={};cn&&(rm=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function zo(e){if(da[e])return da[e];if(!xr[e])return e;var t=xr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in rm)return da[e]=t[n];return e}var im=zo("animationend"),sm=zo("animationiteration"),om=zo("animationstart"),am=zo("transitionend"),lm=new Map,nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(e,t){lm.set(e,t),or(t,[e])}for(var pa=0;pa<nd.length;pa++){var fa=nd[pa],Wy=fa.toLowerCase(),Hy=fa[0].toUpperCase()+fa.slice(1);On(Wy,"on"+Hy)}On(im,"onAnimationEnd");On(sm,"onAnimationIteration");On(om,"onAnimationStart");On("dblclick","onDoubleClick");On("focusin","onFocus");On("focusout","onBlur");On(am,"onTransitionEnd");Rr("onMouseEnter",["mouseout","mouseover"]);Rr("onMouseLeave",["mouseout","mouseover"]);Rr("onPointerEnter",["pointerout","pointerover"]);Rr("onPointerLeave",["pointerout","pointerover"]);or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));or("onBeforeInput",["compositionend","keypress","textInput","paste"]);or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qy=new Set("cancel close invalid load scroll toggle".split(" ").concat(di));function rd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Wx(r,t,void 0,e),e.currentTarget=null}function cm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&s.isPropagationStopped())break e;rd(s,l,u),o=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&s.isPropagationStopped())break e;rd(s,l,u),o=c}}}if(Js)throw e=ll,Js=!1,ll=null,e}function Ne(e,t){var n=t[yl];n===void 0&&(n=t[yl]=new Set);var r=e+"__bubble";n.has(r)||(um(t,e,2,!1),n.add(r))}function ma(e,t,n){var r=0;t&&(r|=4),um(n,e,r,t)}var gs="_reactListening"+Math.random().toString(36).slice(2);function Ri(e){if(!e[gs]){e[gs]=!0,xf.forEach(function(n){n!=="selectionchange"&&(qy.has(n)||ma(n,!1,e),ma(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gs]||(t[gs]=!0,ma("selectionchange",!1,t))}}function um(e,t,n,r){switch(Jf(t)){case 1:var s=oy;break;case 4:s=ay;break;default:s=vc}n=s.bind(null,t,n,e),s=void 0,!al||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function ha(e,t,n,r,s){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;a=a.return}for(;l!==null;){if(a=Jn(l),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Af(function(){var u=o,d=hc(n),p=[];e:{var f=lm.get(e);if(f!==void 0){var m=kc,y=e;switch(e){case"keypress":if(As(n)===0)break e;case"keydown":case"keyup":m=jy;break;case"focusin":y="focus",m=la;break;case"focusout":y="blur",m=la;break;case"beforeblur":case"afterblur":m=la;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Hu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=uy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Sy;break;case im:case sm:case om:m=fy;break;case am:m=Ny;break;case"scroll":m=ly;break;case"wheel":m=zy;break;case"copy":case"cut":case"paste":m=hy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Ju}var _=(t&4)!==0,L=!_&&e==="scroll",x=_?f!==null?f+"Capture":null:f;_=[];for(var g=u,h;g!==null;){h=g;var P=h.stateNode;if(h.tag===5&&P!==null&&(h=P,x!==null&&(P=Ei(g,x),P!=null&&_.push(Ii(g,P,h)))),L)break;g=g.return}0<_.length&&(f=new m(f,y,null,n,d),p.push({event:f,listeners:_}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==sl&&(y=n.relatedTarget||n.fromElement)&&(Jn(y)||y[un]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?Jn(y):null,y!==null&&(L=ar(y),y!==L||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(_=Hu,P="onMouseLeave",x="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(_=Ju,P="onPointerLeave",x="onPointerEnter",g="pointer"),L=m==null?f:yr(m),h=y==null?f:yr(y),f=new _(P,g+"leave",m,n,d),f.target=L,f.relatedTarget=h,P=null,Jn(d)===u&&(_=new _(x,g+"enter",y,n,d),_.target=h,_.relatedTarget=L,P=_),L=P,m&&y)t:{for(_=m,x=y,g=0,h=_;h;h=cr(h))g++;for(h=0,P=x;P;P=cr(P))h++;for(;0<g-h;)_=cr(_),g--;for(;0<h-g;)x=cr(x),h--;for(;g--;){if(_===x||x!==null&&_===x.alternate)break t;_=cr(_),x=cr(x)}_=null}else _=null;m!==null&&id(p,f,m,_,!1),y!==null&&L!==null&&id(p,L,y,_,!0)}}e:{if(f=u?yr(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var j=My;else if(Gu(f))if(Zf)j=Fy;else{j=$y;var b=Oy}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(j=Dy);if(j&&(j=j(e,u))){Xf(p,j,n,d);break e}b&&b(e,f,u),e==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&el(f,"number",f.value)}switch(b=u?yr(u):window,e){case"focusin":(Gu(b)||b.contentEditable==="true")&&(gr=b,pl=u,xi=null);break;case"focusout":xi=pl=gr=null;break;case"mousedown":fl=!0;break;case"contextmenu":case"mouseup":case"dragend":fl=!1,td(p,n,d);break;case"selectionchange":if(Vy)break;case"keydown":case"keyup":td(p,n,d)}var C;if(wc)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else hr?Gf(e,n)&&(w="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(Qf&&n.locale!=="ko"&&(hr||w!=="onCompositionStart"?w==="onCompositionEnd"&&hr&&(C=Kf()):(kn=d,bc="value"in kn?kn.value:kn.textContent,hr=!0)),b=Xs(u,w),0<b.length&&(w=new qu(w,e,null,n,d),p.push({event:w,listeners:b}),C?w.data=C:(C=Yf(n),C!==null&&(w.data=C)))),(C=Py?Ly(e,n):Ay(e,n))&&(u=Xs(u,"onBeforeInput"),0<u.length&&(d=new qu("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=C))}cm(p,t)})}function Ii(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xs(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=Ei(e,n),o!=null&&r.unshift(Ii(e,o,s)),o=Ei(e,t),o!=null&&r.push(Ii(e,o,s))),e=e.return}return r}function cr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function id(e,t,n,r,s){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,s?(c=Ei(n,o),c!=null&&a.unshift(Ii(n,c,l))):s||(c=Ei(n,o),c!=null&&a.push(Ii(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Jy=/\r\n?/g,Ky=/\u0000|\uFFFD/g;function sd(e){return(typeof e=="string"?e:""+e).replace(Jy,`
`).replace(Ky,"")}function xs(e,t,n){if(t=sd(t),sd(e)!==t&&n)throw Error(G(425))}function Zs(){}var ml=null,hl=null;function gl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xl=typeof setTimeout=="function"?setTimeout:void 0,Qy=typeof clearTimeout=="function"?clearTimeout:void 0,od=typeof Promise=="function"?Promise:void 0,Gy=typeof queueMicrotask=="function"?queueMicrotask:typeof od<"u"?function(e){return od.resolve(null).then(e).catch(Yy)}:xl;function Yy(e){setTimeout(function(){throw e})}function ga(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),Pi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Pi(t)}function En(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ad(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var qr=Math.random().toString(36).slice(2),Jt="__reactFiber$"+qr,Mi="__reactProps$"+qr,un="__reactContainer$"+qr,yl="__reactEvents$"+qr,Xy="__reactListeners$"+qr,Zy="__reactHandles$"+qr;function Jn(e){var t=e[Jt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[un]||n[Jt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ad(e);e!==null;){if(n=e[Jt])return n;e=ad(e)}return t}e=n,n=e.parentNode}return null}function Xi(e){return e=e[Jt]||e[un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(G(33))}function To(e){return e[Mi]||null}var vl=[],vr=-1;function $n(e){return{current:e}}function Ee(e){0>vr||(e.current=vl[vr],vl[vr]=null,vr--)}function _e(e,t){vr++,vl[vr]=e.current,e.current=t}var In={},Ze=$n(In),ct=$n(!1),er=In;function Ir(e,t){var n=e.type.contextTypes;if(!n)return In;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in n)s[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function ut(e){return e=e.childContextTypes,e!=null}function eo(){Ee(ct),Ee(Ze)}function ld(e,t,n){if(Ze.current!==In)throw Error(G(168));_e(Ze,t),_e(ct,n)}function dm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(G(108,Ox(e)||"Unknown",s));return Re({},n,r)}function to(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||In,er=Ze.current,_e(Ze,e),_e(ct,ct.current),!0}function cd(e,t,n){var r=e.stateNode;if(!r)throw Error(G(169));n?(e=dm(e,t,er),r.__reactInternalMemoizedMergedChildContext=e,Ee(ct),Ee(Ze),_e(Ze,e)):Ee(ct),_e(ct,n)}var rn=null,Po=!1,xa=!1;function pm(e){rn===null?rn=[e]:rn.push(e)}function ev(e){Po=!0,pm(e)}function Dn(){if(!xa&&rn!==null){xa=!0;var e=0,t=je;try{var n=rn;for(je=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}rn=null,Po=!1}catch(s){throw rn!==null&&(rn=rn.slice(e+1)),Of(gc,Dn),s}finally{je=t,xa=!1}}return null}var br=[],kr=0,no=null,ro=0,Et=[],zt=0,tr=null,sn=1,on="";function Wn(e,t){br[kr++]=ro,br[kr++]=no,no=e,ro=t}function fm(e,t,n){Et[zt++]=sn,Et[zt++]=on,Et[zt++]=tr,tr=e;var r=sn;e=on;var s=32-Bt(r)-1;r&=~(1<<s),n+=1;var o=32-Bt(t)+s;if(30<o){var a=s-s%5;o=(r&(1<<a)-1).toString(32),r>>=a,s-=a,sn=1<<32-Bt(t)+s|n<<s|r,on=o+e}else sn=1<<o|n<<s|r,on=e}function Sc(e){e.return!==null&&(Wn(e,1),fm(e,1,0))}function Cc(e){for(;e===no;)no=br[--kr],br[kr]=null,ro=br[--kr],br[kr]=null;for(;e===tr;)tr=Et[--zt],Et[zt]=null,on=Et[--zt],Et[zt]=null,sn=Et[--zt],Et[zt]=null}var kt=null,vt=null,ze=!1,Dt=null;function mm(e,t){var n=Pt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ud(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,kt=e,vt=En(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,kt=e,vt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=tr!==null?{id:sn,overflow:on}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,kt=e,vt=null,!0):!1;default:return!1}}function bl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function kl(e){if(ze){var t=vt;if(t){var n=t;if(!ud(e,t)){if(bl(e))throw Error(G(418));t=En(n.nextSibling);var r=kt;t&&ud(e,t)?mm(r,n):(e.flags=e.flags&-4097|2,ze=!1,kt=e)}}else{if(bl(e))throw Error(G(418));e.flags=e.flags&-4097|2,ze=!1,kt=e}}}function dd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;kt=e}function ys(e){if(e!==kt)return!1;if(!ze)return dd(e),ze=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gl(e.type,e.memoizedProps)),t&&(t=vt)){if(bl(e))throw hm(),Error(G(418));for(;t;)mm(e,t),t=En(t.nextSibling)}if(dd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){vt=En(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}vt=null}}else vt=kt?En(e.stateNode.nextSibling):null;return!0}function hm(){for(var e=vt;e;)e=En(e.nextSibling)}function Mr(){vt=kt=null,ze=!1}function Nc(e){Dt===null?Dt=[e]:Dt.push(e)}var tv=fn.ReactCurrentBatchConfig;function ti(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(G(309));var r=n.stateNode}if(!r)throw Error(G(147,e));var s=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=s.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(G(284));if(!n._owner)throw Error(G(290,e))}return e}function vs(e,t){throw e=Object.prototype.toString.call(t),Error(G(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pd(e){var t=e._init;return t(e._payload)}function gm(e){function t(x,g){if(e){var h=x.deletions;h===null?(x.deletions=[g],x.flags|=16):h.push(g)}}function n(x,g){if(!e)return null;for(;g!==null;)t(x,g),g=g.sibling;return null}function r(x,g){for(x=new Map;g!==null;)g.key!==null?x.set(g.key,g):x.set(g.index,g),g=g.sibling;return x}function s(x,g){return x=Ln(x,g),x.index=0,x.sibling=null,x}function o(x,g,h){return x.index=h,e?(h=x.alternate,h!==null?(h=h.index,h<g?(x.flags|=2,g):h):(x.flags|=2,g)):(x.flags|=1048576,g)}function a(x){return e&&x.alternate===null&&(x.flags|=2),x}function l(x,g,h,P){return g===null||g.tag!==6?(g=_a(h,x.mode,P),g.return=x,g):(g=s(g,h),g.return=x,g)}function c(x,g,h,P){var j=h.type;return j===mr?d(x,g,h.props.children,P,h.key):g!==null&&(g.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===xn&&pd(j)===g.type)?(P=s(g,h.props),P.ref=ti(x,g,h),P.return=x,P):(P=Fs(h.type,h.key,h.props,null,x.mode,P),P.ref=ti(x,g,h),P.return=x,P)}function u(x,g,h,P){return g===null||g.tag!==4||g.stateNode.containerInfo!==h.containerInfo||g.stateNode.implementation!==h.implementation?(g=Sa(h,x.mode,P),g.return=x,g):(g=s(g,h.children||[]),g.return=x,g)}function d(x,g,h,P,j){return g===null||g.tag!==7?(g=Yn(h,x.mode,P,j),g.return=x,g):(g=s(g,h),g.return=x,g)}function p(x,g,h){if(typeof g=="string"&&g!==""||typeof g=="number")return g=_a(""+g,x.mode,h),g.return=x,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ls:return h=Fs(g.type,g.key,g.props,null,x.mode,h),h.ref=ti(x,null,g),h.return=x,h;case fr:return g=Sa(g,x.mode,h),g.return=x,g;case xn:var P=g._init;return p(x,P(g._payload),h)}if(ci(g)||Gr(g))return g=Yn(g,x.mode,h,null),g.return=x,g;vs(x,g)}return null}function f(x,g,h,P){var j=g!==null?g.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return j!==null?null:l(x,g,""+h,P);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ls:return h.key===j?c(x,g,h,P):null;case fr:return h.key===j?u(x,g,h,P):null;case xn:return j=h._init,f(x,g,j(h._payload),P)}if(ci(h)||Gr(h))return j!==null?null:d(x,g,h,P,null);vs(x,h)}return null}function m(x,g,h,P,j){if(typeof P=="string"&&P!==""||typeof P=="number")return x=x.get(h)||null,l(g,x,""+P,j);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case ls:return x=x.get(P.key===null?h:P.key)||null,c(g,x,P,j);case fr:return x=x.get(P.key===null?h:P.key)||null,u(g,x,P,j);case xn:var b=P._init;return m(x,g,h,b(P._payload),j)}if(ci(P)||Gr(P))return x=x.get(h)||null,d(g,x,P,j,null);vs(g,P)}return null}function y(x,g,h,P){for(var j=null,b=null,C=g,w=g=0,R=null;C!==null&&w<h.length;w++){C.index>w?(R=C,C=null):R=C.sibling;var N=f(x,C,h[w],P);if(N===null){C===null&&(C=R);break}e&&C&&N.alternate===null&&t(x,C),g=o(N,g,w),b===null?j=N:b.sibling=N,b=N,C=R}if(w===h.length)return n(x,C),ze&&Wn(x,w),j;if(C===null){for(;w<h.length;w++)C=p(x,h[w],P),C!==null&&(g=o(C,g,w),b===null?j=C:b.sibling=C,b=C);return ze&&Wn(x,w),j}for(C=r(x,C);w<h.length;w++)R=m(C,x,w,h[w],P),R!==null&&(e&&R.alternate!==null&&C.delete(R.key===null?w:R.key),g=o(R,g,w),b===null?j=R:b.sibling=R,b=R);return e&&C.forEach(function(v){return t(x,v)}),ze&&Wn(x,w),j}function _(x,g,h,P){var j=Gr(h);if(typeof j!="function")throw Error(G(150));if(h=j.call(h),h==null)throw Error(G(151));for(var b=j=null,C=g,w=g=0,R=null,N=h.next();C!==null&&!N.done;w++,N=h.next()){C.index>w?(R=C,C=null):R=C.sibling;var v=f(x,C,N.value,P);if(v===null){C===null&&(C=R);break}e&&C&&v.alternate===null&&t(x,C),g=o(v,g,w),b===null?j=v:b.sibling=v,b=v,C=R}if(N.done)return n(x,C),ze&&Wn(x,w),j;if(C===null){for(;!N.done;w++,N=h.next())N=p(x,N.value,P),N!==null&&(g=o(N,g,w),b===null?j=N:b.sibling=N,b=N);return ze&&Wn(x,w),j}for(C=r(x,C);!N.done;w++,N=h.next())N=m(C,x,w,N.value,P),N!==null&&(e&&N.alternate!==null&&C.delete(N.key===null?w:N.key),g=o(N,g,w),b===null?j=N:b.sibling=N,b=N);return e&&C.forEach(function(E){return t(x,E)}),ze&&Wn(x,w),j}function L(x,g,h,P){if(typeof h=="object"&&h!==null&&h.type===mr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ls:e:{for(var j=h.key,b=g;b!==null;){if(b.key===j){if(j=h.type,j===mr){if(b.tag===7){n(x,b.sibling),g=s(b,h.props.children),g.return=x,x=g;break e}}else if(b.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===xn&&pd(j)===b.type){n(x,b.sibling),g=s(b,h.props),g.ref=ti(x,b,h),g.return=x,x=g;break e}n(x,b);break}else t(x,b);b=b.sibling}h.type===mr?(g=Yn(h.props.children,x.mode,P,h.key),g.return=x,x=g):(P=Fs(h.type,h.key,h.props,null,x.mode,P),P.ref=ti(x,g,h),P.return=x,x=P)}return a(x);case fr:e:{for(b=h.key;g!==null;){if(g.key===b)if(g.tag===4&&g.stateNode.containerInfo===h.containerInfo&&g.stateNode.implementation===h.implementation){n(x,g.sibling),g=s(g,h.children||[]),g.return=x,x=g;break e}else{n(x,g);break}else t(x,g);g=g.sibling}g=Sa(h,x.mode,P),g.return=x,x=g}return a(x);case xn:return b=h._init,L(x,g,b(h._payload),P)}if(ci(h))return y(x,g,h,P);if(Gr(h))return _(x,g,h,P);vs(x,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,g!==null&&g.tag===6?(n(x,g.sibling),g=s(g,h),g.return=x,x=g):(n(x,g),g=_a(h,x.mode,P),g.return=x,x=g),a(x)):n(x,g)}return L}var Or=gm(!0),xm=gm(!1),io=$n(null),so=null,jr=null,Ec=null;function zc(){Ec=jr=so=null}function Tc(e){var t=io.current;Ee(io),e._currentValue=t}function jl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Tr(e,t){so=e,Ec=jr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(lt=!0),e.firstContext=null)}function Rt(e){var t=e._currentValue;if(Ec!==e)if(e={context:e,memoizedValue:t,next:null},jr===null){if(so===null)throw Error(G(308));jr=e,so.dependencies={lanes:0,firstContext:e}}else jr=jr.next=e;return t}var Kn=null;function Pc(e){Kn===null?Kn=[e]:Kn.push(e)}function ym(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,Pc(t)):(n.next=s.next,s.next=n),t.interleaved=n,dn(e,r)}function dn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var yn=!1;function Lc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function an(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function zn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ye&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,dn(e,n)}return s=r.interleaved,s===null?(t.next=t,Pc(r)):(t.next=s.next,s.next=t),r.interleaved=t,dn(e,n)}function Rs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xc(e,n)}}function fd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?s=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?s=o=t:o=o.next=t}else s=o=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function oo(e,t,n,r){var s=e.updateQueue;yn=!1;var o=s.firstBaseUpdate,a=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(o!==null){var p=s.baseState;a=0,d=u=c=null,l=o;do{var f=l.lane,m=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,_=l;switch(f=t,m=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){p=y.call(m,p,f);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,f=typeof y=="function"?y.call(m,p,f):y,f==null)break e;p=Re({},p,f);break e;case 2:yn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=s.effects,f===null?s.effects=[l]:f.push(l))}else m={eventTime:m,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=m,c=p):d=d.next=m,a|=f;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;f=l,l=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(d===null&&(c=p),s.baseState=c,s.firstBaseUpdate=u,s.lastBaseUpdate=d,t=s.shared.interleaved,t!==null){s=t;do a|=s.lane,s=s.next;while(s!==t)}else o===null&&(s.shared.lanes=0);rr|=a,e.lanes=a,e.memoizedState=p}}function md(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(G(191,s));s.call(r)}}}var Zi={},Yt=$n(Zi),Oi=$n(Zi),$i=$n(Zi);function Qn(e){if(e===Zi)throw Error(G(174));return e}function Ac(e,t){switch(_e($i,t),_e(Oi,e),_e(Yt,Zi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:nl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=nl(t,e)}Ee(Yt),_e(Yt,t)}function $r(){Ee(Yt),Ee(Oi),Ee($i)}function bm(e){Qn($i.current);var t=Qn(Yt.current),n=nl(t,e.type);t!==n&&(_e(Oi,e),_e(Yt,n))}function Rc(e){Oi.current===e&&(Ee(Yt),Ee(Oi))}var Pe=$n(0);function ao(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ya=[];function Ic(){for(var e=0;e<ya.length;e++)ya[e]._workInProgressVersionPrimary=null;ya.length=0}var Is=fn.ReactCurrentDispatcher,va=fn.ReactCurrentBatchConfig,nr=0,Ae=null,Ue=null,He=null,lo=!1,yi=!1,Di=0,nv=0;function Ge(){throw Error(G(321))}function Mc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Vt(e[n],t[n]))return!1;return!0}function Oc(e,t,n,r,s,o){if(nr=o,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Is.current=e===null||e.memoizedState===null?ov:av,e=n(r,s),yi){o=0;do{if(yi=!1,Di=0,25<=o)throw Error(G(301));o+=1,He=Ue=null,t.updateQueue=null,Is.current=lv,e=n(r,s)}while(yi)}if(Is.current=co,t=Ue!==null&&Ue.next!==null,nr=0,He=Ue=Ae=null,lo=!1,t)throw Error(G(300));return e}function $c(){var e=Di!==0;return Di=0,e}function Ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Ae.memoizedState=He=e:He=He.next=e,He}function It(){if(Ue===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=He===null?Ae.memoizedState:He.next;if(t!==null)He=t,Ue=e;else{if(e===null)throw Error(G(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},He===null?Ae.memoizedState=He=e:He=He.next=e}return He}function Fi(e,t){return typeof t=="function"?t(e):t}function ba(e){var t=It(),n=t.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=e;var r=Ue,s=r.baseQueue,o=n.pending;if(o!==null){if(s!==null){var a=s.next;s.next=o.next,o.next=a}r.baseQueue=s=o,n.pending=null}if(s!==null){o=s.next,r=r.baseState;var l=a=null,c=null,u=o;do{var d=u.lane;if((nr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,a=r):c=c.next=p,Ae.lanes|=d,rr|=d}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=l,Vt(r,t.memoizedState)||(lt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do o=s.lane,Ae.lanes|=o,rr|=o,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ka(e){var t=It(),n=t.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,o=t.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do o=e(o,a.action),a=a.next;while(a!==s);Vt(o,t.memoizedState)||(lt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function km(){}function jm(e,t){var n=Ae,r=It(),s=t(),o=!Vt(r.memoizedState,s);if(o&&(r.memoizedState=s,lt=!0),r=r.queue,Dc(Sm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,Bi(9,_m.bind(null,n,r,s,t),void 0,null),qe===null)throw Error(G(349));nr&30||wm(n,t,s)}return s}function wm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _m(e,t,n,r){t.value=n,t.getSnapshot=r,Cm(t)&&Nm(e)}function Sm(e,t,n){return n(function(){Cm(t)&&Nm(e)})}function Cm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Vt(e,n)}catch{return!0}}function Nm(e){var t=dn(e,1);t!==null&&Ut(t,e,1,-1)}function hd(e){var t=Ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:e},t.queue=e,e=e.dispatch=sv.bind(null,Ae,e),[t.memoizedState,e]}function Bi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Em(){return It().memoizedState}function Ms(e,t,n,r){var s=Ht();Ae.flags|=e,s.memoizedState=Bi(1|t,n,void 0,r===void 0?null:r)}function Lo(e,t,n,r){var s=It();r=r===void 0?null:r;var o=void 0;if(Ue!==null){var a=Ue.memoizedState;if(o=a.destroy,r!==null&&Mc(r,a.deps)){s.memoizedState=Bi(t,n,o,r);return}}Ae.flags|=e,s.memoizedState=Bi(1|t,n,o,r)}function gd(e,t){return Ms(8390656,8,e,t)}function Dc(e,t){return Lo(2048,8,e,t)}function zm(e,t){return Lo(4,2,e,t)}function Tm(e,t){return Lo(4,4,e,t)}function Pm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lm(e,t,n){return n=n!=null?n.concat([e]):null,Lo(4,4,Pm.bind(null,t,e),n)}function Fc(){}function Am(e,t){var n=It();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Rm(e,t){var n=It();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Im(e,t,n){return nr&21?(Vt(n,t)||(n=Ff(),Ae.lanes|=n,rr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,lt=!0),e.memoizedState=n)}function rv(e,t){var n=je;je=n!==0&&4>n?n:4,e(!0);var r=va.transition;va.transition={};try{e(!1),t()}finally{je=n,va.transition=r}}function Mm(){return It().memoizedState}function iv(e,t,n){var r=Pn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Om(e))$m(t,n);else if(n=ym(e,t,n,r),n!==null){var s=rt();Ut(n,e,r,s),Dm(n,t,r)}}function sv(e,t,n){var r=Pn(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Om(e))$m(t,s);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(s.hasEagerState=!0,s.eagerState=l,Vt(l,a)){var c=t.interleaved;c===null?(s.next=s,Pc(t)):(s.next=c.next,c.next=s),t.interleaved=s;return}}catch{}finally{}n=ym(e,t,s,r),n!==null&&(s=rt(),Ut(n,e,r,s),Dm(n,t,r))}}function Om(e){var t=e.alternate;return e===Ae||t!==null&&t===Ae}function $m(e,t){yi=lo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Dm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xc(e,n)}}var co={readContext:Rt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},ov={readContext:Rt,useCallback:function(e,t){return Ht().memoizedState=[e,t===void 0?null:t],e},useContext:Rt,useEffect:gd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ms(4194308,4,Pm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ms(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ms(4,2,e,t)},useMemo:function(e,t){var n=Ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=iv.bind(null,Ae,e),[r.memoizedState,e]},useRef:function(e){var t=Ht();return e={current:e},t.memoizedState=e},useState:hd,useDebugValue:Fc,useDeferredValue:function(e){return Ht().memoizedState=e},useTransition:function(){var e=hd(!1),t=e[0];return e=rv.bind(null,e[1]),Ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ae,s=Ht();if(ze){if(n===void 0)throw Error(G(407));n=n()}else{if(n=t(),qe===null)throw Error(G(349));nr&30||wm(r,t,n)}s.memoizedState=n;var o={value:n,getSnapshot:t};return s.queue=o,gd(Sm.bind(null,r,o,e),[e]),r.flags|=2048,Bi(9,_m.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ht(),t=qe.identifierPrefix;if(ze){var n=on,r=sn;n=(r&~(1<<32-Bt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Di++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=nv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},av={readContext:Rt,useCallback:Am,useContext:Rt,useEffect:Dc,useImperativeHandle:Lm,useInsertionEffect:zm,useLayoutEffect:Tm,useMemo:Rm,useReducer:ba,useRef:Em,useState:function(){return ba(Fi)},useDebugValue:Fc,useDeferredValue:function(e){var t=It();return Im(t,Ue.memoizedState,e)},useTransition:function(){var e=ba(Fi)[0],t=It().memoizedState;return[e,t]},useMutableSource:km,useSyncExternalStore:jm,useId:Mm,unstable_isNewReconciler:!1},lv={readContext:Rt,useCallback:Am,useContext:Rt,useEffect:Dc,useImperativeHandle:Lm,useInsertionEffect:zm,useLayoutEffect:Tm,useMemo:Rm,useReducer:ka,useRef:Em,useState:function(){return ka(Fi)},useDebugValue:Fc,useDeferredValue:function(e){var t=It();return Ue===null?t.memoizedState=e:Im(t,Ue.memoizedState,e)},useTransition:function(){var e=ka(Fi)[0],t=It().memoizedState;return[e,t]},useMutableSource:km,useSyncExternalStore:jm,useId:Mm,unstable_isNewReconciler:!1};function Ot(e,t){if(e&&e.defaultProps){t=Re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function wl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ao={isMounted:function(e){return(e=e._reactInternals)?ar(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=rt(),s=Pn(e),o=an(r,s);o.payload=t,n!=null&&(o.callback=n),t=zn(e,o,s),t!==null&&(Ut(t,e,s,r),Rs(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=rt(),s=Pn(e),o=an(r,s);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=zn(e,o,s),t!==null&&(Ut(t,e,s,r),Rs(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=rt(),r=Pn(e),s=an(n,r);s.tag=2,t!=null&&(s.callback=t),t=zn(e,s,r),t!==null&&(Ut(t,e,r,n),Rs(t,e,r))}};function xd(e,t,n,r,s,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Ai(n,r)||!Ai(s,o):!0}function Fm(e,t,n){var r=!1,s=In,o=t.contextType;return typeof o=="object"&&o!==null?o=Rt(o):(s=ut(t)?er:Ze.current,r=t.contextTypes,o=(r=r!=null)?Ir(e,s):In),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ao,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=o),t}function yd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ao.enqueueReplaceState(t,t.state,null)}function _l(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Lc(e);var o=t.contextType;typeof o=="object"&&o!==null?s.context=Rt(o):(o=ut(t)?er:Ze.current,s.context=Ir(e,o)),s.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(wl(e,t,o,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Ao.enqueueReplaceState(s,s.state,null),oo(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Dr(e,t){try{var n="",r=t;do n+=Mx(r),r=r.return;while(r);var s=n}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:s,digest:null}}function ja(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Sl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cv=typeof WeakMap=="function"?WeakMap:Map;function Bm(e,t,n){n=an(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){po||(po=!0,Il=r),Sl(e,t)},n}function Um(e,t,n){n=an(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){Sl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Sl(e,t),typeof r!="function"&&(Tn===null?Tn=new Set([this]):Tn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function vd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new cv;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=wv.bind(null,e,t,n),t.then(e,e))}function bd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function kd(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=an(-1,1),t.tag=2,zn(n,t,1))),n.lanes|=1),e)}var uv=fn.ReactCurrentOwner,lt=!1;function nt(e,t,n,r){t.child=e===null?xm(t,null,n,r):Or(t,e.child,n,r)}function jd(e,t,n,r,s){n=n.render;var o=t.ref;return Tr(t,s),r=Oc(e,t,n,r,o,s),n=$c(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,pn(e,t,s)):(ze&&n&&Sc(t),t.flags|=1,nt(e,t,r,s),t.child)}function wd(e,t,n,r,s){if(e===null){var o=n.type;return typeof o=="function"&&!Kc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Vm(e,t,o,r,s)):(e=Fs(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&s)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ai,n(a,r)&&e.ref===t.ref)return pn(e,t,s)}return t.flags|=1,e=Ln(o,r),e.ref=t.ref,e.return=t,t.child=e}function Vm(e,t,n,r,s){if(e!==null){var o=e.memoizedProps;if(Ai(o,r)&&e.ref===t.ref)if(lt=!1,t.pendingProps=r=o,(e.lanes&s)!==0)e.flags&131072&&(lt=!0);else return t.lanes=e.lanes,pn(e,t,s)}return Cl(e,t,n,r,s)}function Wm(e,t,n){var r=t.pendingProps,s=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(_r,xt),xt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_e(_r,xt),xt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,_e(_r,xt),xt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,_e(_r,xt),xt|=r;return nt(e,t,s,n),t.child}function Hm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cl(e,t,n,r,s){var o=ut(n)?er:Ze.current;return o=Ir(t,o),Tr(t,s),n=Oc(e,t,n,r,o,s),r=$c(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,pn(e,t,s)):(ze&&r&&Sc(t),t.flags|=1,nt(e,t,n,s),t.child)}function _d(e,t,n,r,s){if(ut(n)){var o=!0;to(t)}else o=!1;if(Tr(t,s),t.stateNode===null)Os(e,t),Fm(t,n,r),_l(t,n,r,s),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Rt(u):(u=ut(n)?er:Ze.current,u=Ir(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&yd(t,a,r,u),yn=!1;var f=t.memoizedState;a.state=f,oo(t,r,a,s),c=t.memoizedState,l!==r||f!==c||ct.current||yn?(typeof d=="function"&&(wl(t,n,d,r),c=t.memoizedState),(l=yn||xd(t,n,l,r,f,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,vm(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Ot(t.type,l),a.props=u,p=t.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Rt(c):(c=ut(n)?er:Ze.current,c=Ir(t,c));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||f!==c)&&yd(t,a,r,c),yn=!1,f=t.memoizedState,a.state=f,oo(t,r,a,s);var y=t.memoizedState;l!==p||f!==y||ct.current||yn?(typeof m=="function"&&(wl(t,n,m,r),y=t.memoizedState),(u=yn||xd(t,n,u,r,f,y,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Nl(e,t,n,r,o,s)}function Nl(e,t,n,r,s,o){Hm(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return s&&cd(t,n,!1),pn(e,t,o);r=t.stateNode,uv.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Or(t,e.child,null,o),t.child=Or(t,null,l,o)):nt(e,t,l,o),t.memoizedState=r.state,s&&cd(t,n,!0),t.child}function qm(e){var t=e.stateNode;t.pendingContext?ld(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ld(e,t.context,!1),Ac(e,t.containerInfo)}function Sd(e,t,n,r,s){return Mr(),Nc(s),t.flags|=256,nt(e,t,n,r),t.child}var El={dehydrated:null,treeContext:null,retryLane:0};function zl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Jm(e,t,n){var r=t.pendingProps,s=Pe.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(s&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),_e(Pe,s&1),e===null)return kl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Mo(a,r,0,null),e=Yn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=zl(n),t.memoizedState=El,e):Bc(t,a));if(s=e.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return dv(e,t,a,r,l,s,n);if(o){o=r.fallback,a=t.mode,s=e.child,l=s.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Ln(s,c),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?o=Ln(l,o):(o=Yn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?zl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=El,r}return o=e.child,e=o.sibling,r=Ln(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Bc(e,t){return t=Mo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function bs(e,t,n,r){return r!==null&&Nc(r),Or(t,e.child,null,n),e=Bc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dv(e,t,n,r,s,o,a){if(n)return t.flags&256?(t.flags&=-257,r=ja(Error(G(422))),bs(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,s=t.mode,r=Mo({mode:"visible",children:r.children},s,0,null),o=Yn(o,s,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Or(t,e.child,null,a),t.child.memoizedState=zl(a),t.memoizedState=El,o);if(!(t.mode&1))return bs(e,t,a,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(G(419)),r=ja(o,r,void 0),bs(e,t,a,r)}if(l=(a&e.childLanes)!==0,lt||l){if(r=qe,r!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|a)?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,dn(e,s),Ut(r,e,s,-1))}return Jc(),r=ja(Error(G(421))),bs(e,t,a,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=_v.bind(null,e),s._reactRetry=t,null):(e=o.treeContext,vt=En(s.nextSibling),kt=t,ze=!0,Dt=null,e!==null&&(Et[zt++]=sn,Et[zt++]=on,Et[zt++]=tr,sn=e.id,on=e.overflow,tr=t),t=Bc(t,r.children),t.flags|=4096,t)}function Cd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),jl(e.return,t,n)}function wa(e,t,n,r,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=s)}function Km(e,t,n){var r=t.pendingProps,s=r.revealOrder,o=r.tail;if(nt(e,t,r.children,n),r=Pe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cd(e,n,t);else if(e.tag===19)Cd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_e(Pe,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&ao(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),wa(t,!1,s,n,o);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&ao(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}wa(t,!0,n,null,o);break;case"together":wa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Os(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(G(153));if(t.child!==null){for(e=t.child,n=Ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pv(e,t,n){switch(t.tag){case 3:qm(t),Mr();break;case 5:bm(t);break;case 1:ut(t.type)&&to(t);break;case 4:Ac(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;_e(io,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(_e(Pe,Pe.current&1),t.flags|=128,null):n&t.child.childLanes?Jm(e,t,n):(_e(Pe,Pe.current&1),e=pn(e,t,n),e!==null?e.sibling:null);_e(Pe,Pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Km(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),_e(Pe,Pe.current),r)break;return null;case 22:case 23:return t.lanes=0,Wm(e,t,n)}return pn(e,t,n)}var Qm,Tl,Gm,Ym;Qm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Tl=function(){};Gm=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,Qn(Yt.current);var o=null;switch(n){case"input":s=Xa(e,s),r=Xa(e,r),o=[];break;case"select":s=Re({},s,{value:void 0}),r=Re({},r,{value:void 0}),o=[];break;case"textarea":s=tl(e,s),r=tl(e,r),o=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zs)}rl(n,r);var a;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var l=s[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ci.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ci.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Ne("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Ym=function(e,t,n,r){n!==r&&(t.flags|=4)};function ni(e,t){if(!ze)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function fv(e,t,n){var r=t.pendingProps;switch(Cc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return ut(t.type)&&eo(),Ye(t),null;case 3:return r=t.stateNode,$r(),Ee(ct),Ee(Ze),Ic(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ys(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Dt!==null&&($l(Dt),Dt=null))),Tl(e,t),Ye(t),null;case 5:Rc(t);var s=Qn($i.current);if(n=t.type,e!==null&&t.stateNode!=null)Gm(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(G(166));return Ye(t),null}if(e=Qn(Yt.current),ys(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Jt]=t,r[Mi]=o,e=(t.mode&1)!==0,n){case"dialog":Ne("cancel",r),Ne("close",r);break;case"iframe":case"object":case"embed":Ne("load",r);break;case"video":case"audio":for(s=0;s<di.length;s++)Ne(di[s],r);break;case"source":Ne("error",r);break;case"img":case"image":case"link":Ne("error",r),Ne("load",r);break;case"details":Ne("toggle",r);break;case"input":Iu(r,o),Ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ne("invalid",r);break;case"textarea":Ou(r,o),Ne("invalid",r)}rl(n,o),s=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&xs(r.textContent,l,e),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&xs(r.textContent,l,e),s=["children",""+l]):Ci.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Ne("scroll",r)}switch(n){case"input":cs(r),Mu(r,o,!0);break;case"textarea":cs(r),$u(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Zs)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Sf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Jt]=t,e[Mi]=r,Qm(e,t,!1,!1),t.stateNode=e;e:{switch(a=il(n,r),n){case"dialog":Ne("cancel",e),Ne("close",e),s=r;break;case"iframe":case"object":case"embed":Ne("load",e),s=r;break;case"video":case"audio":for(s=0;s<di.length;s++)Ne(di[s],e);s=r;break;case"source":Ne("error",e),s=r;break;case"img":case"image":case"link":Ne("error",e),Ne("load",e),s=r;break;case"details":Ne("toggle",e),s=r;break;case"input":Iu(e,r),s=Xa(e,r),Ne("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=Re({},r,{value:void 0}),Ne("invalid",e);break;case"textarea":Ou(e,r),s=tl(e,r),Ne("invalid",e);break;default:s=r}rl(n,s),l=s;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Ef(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Cf(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ni(e,c):typeof c=="number"&&Ni(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ci.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Ne("scroll",e):c!=null&&dc(e,o,c,a))}switch(n){case"input":cs(e),Mu(e,r,!1);break;case"textarea":cs(e),$u(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Rn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Cr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Cr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Zs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ye(t),null;case 6:if(e&&t.stateNode!=null)Ym(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(G(166));if(n=Qn($i.current),Qn(Yt.current),ys(t)){if(r=t.stateNode,n=t.memoizedProps,r[Jt]=t,(o=r.nodeValue!==n)&&(e=kt,e!==null))switch(e.tag){case 3:xs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xs(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Jt]=t,t.stateNode=r}return Ye(t),null;case 13:if(Ee(Pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ze&&vt!==null&&t.mode&1&&!(t.flags&128))hm(),Mr(),t.flags|=98560,o=!1;else if(o=ys(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(G(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(G(317));o[Jt]=t}else Mr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ye(t),o=!1}else Dt!==null&&($l(Dt),Dt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Pe.current&1?Ve===0&&(Ve=3):Jc())),t.updateQueue!==null&&(t.flags|=4),Ye(t),null);case 4:return $r(),Tl(e,t),e===null&&Ri(t.stateNode.containerInfo),Ye(t),null;case 10:return Tc(t.type._context),Ye(t),null;case 17:return ut(t.type)&&eo(),Ye(t),null;case 19:if(Ee(Pe),o=t.memoizedState,o===null)return Ye(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)ni(o,!1);else{if(Ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ao(e),a!==null){for(t.flags|=128,ni(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _e(Pe,Pe.current&1|2),t.child}e=e.sibling}o.tail!==null&&Me()>Fr&&(t.flags|=128,r=!0,ni(o,!1),t.lanes=4194304)}else{if(!r)if(e=ao(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ni(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ze)return Ye(t),null}else 2*Me()-o.renderingStartTime>Fr&&n!==1073741824&&(t.flags|=128,r=!0,ni(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Me(),t.sibling=null,n=Pe.current,_e(Pe,r?n&1|2:n&1),t):(Ye(t),null);case 22:case 23:return qc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xt&1073741824&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),null;case 24:return null;case 25:return null}throw Error(G(156,t.tag))}function mv(e,t){switch(Cc(t),t.tag){case 1:return ut(t.type)&&eo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $r(),Ee(ct),Ee(Ze),Ic(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Rc(t),null;case 13:if(Ee(Pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(G(340));Mr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ee(Pe),null;case 4:return $r(),null;case 10:return Tc(t.type._context),null;case 22:case 23:return qc(),null;case 24:return null;default:return null}}var ks=!1,Xe=!1,hv=typeof WeakSet=="function"?WeakSet:Set,re=null;function wr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(e,t,r)}else n.current=null}function Pl(e,t,n){try{n()}catch(r){Ie(e,t,r)}}var Nd=!1;function gv(e,t){if(ml=Gs,e=nm(),_c(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var m;p!==n||s!==0&&p.nodeType!==3||(l=a+s),p!==o||r!==0&&p.nodeType!==3||(c=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===e)break t;if(f===n&&++u===s&&(l=a),f===o&&++d===r&&(c=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(hl={focusedElem:e,selectionRange:n},Gs=!1,re=t;re!==null;)if(t=re,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,re=e;else for(;re!==null;){t=re;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,L=y.memoizedState,x=t.stateNode,g=x.getSnapshotBeforeUpdate(t.elementType===t.type?_:Ot(t.type,_),L);x.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(G(163))}}catch(P){Ie(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,re=e;break}re=t.return}return y=Nd,Nd=!1,y}function vi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var o=s.destroy;s.destroy=void 0,o!==void 0&&Pl(t,n,o)}s=s.next}while(s!==r)}}function Ro(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ll(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xm(e){var t=e.alternate;t!==null&&(e.alternate=null,Xm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Jt],delete t[Mi],delete t[yl],delete t[Xy],delete t[Zy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Zm(e){return e.tag===5||e.tag===3||e.tag===4}function Ed(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Al(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zs));else if(r!==4&&(e=e.child,e!==null))for(Al(e,t,n),e=e.sibling;e!==null;)Al(e,t,n),e=e.sibling}function Rl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Rl(e,t,n),e=e.sibling;e!==null;)Rl(e,t,n),e=e.sibling}var Je=null,$t=!1;function hn(e,t,n){for(n=n.child;n!==null;)eh(e,t,n),n=n.sibling}function eh(e,t,n){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(Co,n)}catch{}switch(n.tag){case 5:Xe||wr(n,t);case 6:var r=Je,s=$t;Je=null,hn(e,t,n),Je=r,$t=s,Je!==null&&($t?(e=Je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&($t?(e=Je,n=n.stateNode,e.nodeType===8?ga(e.parentNode,n):e.nodeType===1&&ga(e,n),Pi(e)):ga(Je,n.stateNode));break;case 4:r=Je,s=$t,Je=n.stateNode.containerInfo,$t=!0,hn(e,t,n),Je=r,$t=s;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var o=s,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Pl(n,t,a),s=s.next}while(s!==r)}hn(e,t,n);break;case 1:if(!Xe&&(wr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ie(n,t,l)}hn(e,t,n);break;case 21:hn(e,t,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,hn(e,t,n),Xe=r):hn(e,t,n);break;default:hn(e,t,n)}}function zd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hv),t.forEach(function(r){var s=Sv.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Je=l.stateNode,$t=!1;break e;case 3:Je=l.stateNode.containerInfo,$t=!0;break e;case 4:Je=l.stateNode.containerInfo,$t=!0;break e}l=l.return}if(Je===null)throw Error(G(160));eh(o,a,s),Je=null,$t=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(u){Ie(s,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)th(t,e),t=t.sibling}function th(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mt(t,e),Wt(e),r&4){try{vi(3,e,e.return),Ro(3,e)}catch(_){Ie(e,e.return,_)}try{vi(5,e,e.return)}catch(_){Ie(e,e.return,_)}}break;case 1:Mt(t,e),Wt(e),r&512&&n!==null&&wr(n,n.return);break;case 5:if(Mt(t,e),Wt(e),r&512&&n!==null&&wr(n,n.return),e.flags&32){var s=e.stateNode;try{Ni(s,"")}catch(_){Ie(e,e.return,_)}}if(r&4&&(s=e.stateNode,s!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&wf(s,o),il(l,a);var u=il(l,o);for(a=0;a<c.length;a+=2){var d=c[a],p=c[a+1];d==="style"?Ef(s,p):d==="dangerouslySetInnerHTML"?Cf(s,p):d==="children"?Ni(s,p):dc(s,d,p,u)}switch(l){case"input":Za(s,o);break;case"textarea":_f(s,o);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Cr(s,!!o.multiple,m,!1):f!==!!o.multiple&&(o.defaultValue!=null?Cr(s,!!o.multiple,o.defaultValue,!0):Cr(s,!!o.multiple,o.multiple?[]:"",!1))}s[Mi]=o}catch(_){Ie(e,e.return,_)}}break;case 6:if(Mt(t,e),Wt(e),r&4){if(e.stateNode===null)throw Error(G(162));s=e.stateNode,o=e.memoizedProps;try{s.nodeValue=o}catch(_){Ie(e,e.return,_)}}break;case 3:if(Mt(t,e),Wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pi(t.containerInfo)}catch(_){Ie(e,e.return,_)}break;case 4:Mt(t,e),Wt(e);break;case 13:Mt(t,e),Wt(e),s=e.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(Wc=Me())),r&4&&zd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Xe=(u=Xe)||d,Mt(t,e),Xe=u):Mt(t,e),Wt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(re=e,d=e.child;d!==null;){for(p=re=d;re!==null;){switch(f=re,m=f.child,f.tag){case 0:case 11:case 14:case 15:vi(4,f,f.return);break;case 1:wr(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(_){Ie(r,n,_)}}break;case 5:wr(f,f.return);break;case 22:if(f.memoizedState!==null){Pd(p);continue}}m!==null?(m.return=f,re=m):Pd(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{s=p.stateNode,u?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Nf("display",a))}catch(_){Ie(e,e.return,_)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(_){Ie(e,e.return,_)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Mt(t,e),Wt(e),r&4&&zd(e);break;case 21:break;default:Mt(t,e),Wt(e)}}function Wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Zm(n)){var r=n;break e}n=n.return}throw Error(G(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Ni(s,""),r.flags&=-33);var o=Ed(e);Rl(e,o,s);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Ed(e);Al(e,l,a);break;default:throw Error(G(161))}}catch(c){Ie(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xv(e,t,n){re=e,nh(e)}function nh(e,t,n){for(var r=(e.mode&1)!==0;re!==null;){var s=re,o=s.child;if(s.tag===22&&r){var a=s.memoizedState!==null||ks;if(!a){var l=s.alternate,c=l!==null&&l.memoizedState!==null||Xe;l=ks;var u=Xe;if(ks=a,(Xe=c)&&!u)for(re=s;re!==null;)a=re,c=a.child,a.tag===22&&a.memoizedState!==null?Ld(s):c!==null?(c.return=a,re=c):Ld(s);for(;o!==null;)re=o,nh(o),o=o.sibling;re=s,ks=l,Xe=u}Td(e)}else s.subtreeFlags&8772&&o!==null?(o.return=s,re=o):Td(e)}}function Td(e){for(;re!==null;){var t=re;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Xe||Ro(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Ot(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&md(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}md(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Pi(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(G(163))}Xe||t.flags&512&&Ll(t)}catch(f){Ie(t,t.return,f)}}if(t===e){re=null;break}if(n=t.sibling,n!==null){n.return=t.return,re=n;break}re=t.return}}function Pd(e){for(;re!==null;){var t=re;if(t===e){re=null;break}var n=t.sibling;if(n!==null){n.return=t.return,re=n;break}re=t.return}}function Ld(e){for(;re!==null;){var t=re;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ro(4,t)}catch(c){Ie(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(c){Ie(t,s,c)}}var o=t.return;try{Ll(t)}catch(c){Ie(t,o,c)}break;case 5:var a=t.return;try{Ll(t)}catch(c){Ie(t,a,c)}}}catch(c){Ie(t,t.return,c)}if(t===e){re=null;break}var l=t.sibling;if(l!==null){l.return=t.return,re=l;break}re=t.return}}var yv=Math.ceil,uo=fn.ReactCurrentDispatcher,Uc=fn.ReactCurrentOwner,At=fn.ReactCurrentBatchConfig,ye=0,qe=null,De=null,Ke=0,xt=0,_r=$n(0),Ve=0,Ui=null,rr=0,Io=0,Vc=0,bi=null,at=null,Wc=0,Fr=1/0,nn=null,po=!1,Il=null,Tn=null,js=!1,jn=null,fo=0,ki=0,Ml=null,$s=-1,Ds=0;function rt(){return ye&6?Me():$s!==-1?$s:$s=Me()}function Pn(e){return e.mode&1?ye&2&&Ke!==0?Ke&-Ke:tv.transition!==null?(Ds===0&&(Ds=Ff()),Ds):(e=je,e!==0||(e=window.event,e=e===void 0?16:Jf(e.type)),e):1}function Ut(e,t,n,r){if(50<ki)throw ki=0,Ml=null,Error(G(185));Gi(e,n,r),(!(ye&2)||e!==qe)&&(e===qe&&(!(ye&2)&&(Io|=n),Ve===4&&bn(e,Ke)),dt(e,r),n===1&&ye===0&&!(t.mode&1)&&(Fr=Me()+500,Po&&Dn()))}function dt(e,t){var n=e.callbackNode;ty(e,t);var r=Qs(e,e===qe?Ke:0);if(r===0)n!==null&&Bu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Bu(n),t===1)e.tag===0?ev(Ad.bind(null,e)):pm(Ad.bind(null,e)),Gy(function(){!(ye&6)&&Dn()}),n=null;else{switch(Bf(r)){case 1:n=gc;break;case 4:n=$f;break;case 16:n=Ks;break;case 536870912:n=Df;break;default:n=Ks}n=uh(n,rh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function rh(e,t){if($s=-1,Ds=0,ye&6)throw Error(G(327));var n=e.callbackNode;if(Pr()&&e.callbackNode!==n)return null;var r=Qs(e,e===qe?Ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=mo(e,r);else{t=r;var s=ye;ye|=2;var o=sh();(qe!==e||Ke!==t)&&(nn=null,Fr=Me()+500,Gn(e,t));do try{kv();break}catch(l){ih(e,l)}while(!0);zc(),uo.current=o,ye=s,De!==null?t=0:(qe=null,Ke=0,t=Ve)}if(t!==0){if(t===2&&(s=cl(e),s!==0&&(r=s,t=Ol(e,s))),t===1)throw n=Ui,Gn(e,0),bn(e,r),dt(e,Me()),n;if(t===6)bn(e,r);else{if(s=e.current.alternate,!(r&30)&&!vv(s)&&(t=mo(e,r),t===2&&(o=cl(e),o!==0&&(r=o,t=Ol(e,o))),t===1))throw n=Ui,Gn(e,0),bn(e,r),dt(e,Me()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(G(345));case 2:Hn(e,at,nn);break;case 3:if(bn(e,r),(r&130023424)===r&&(t=Wc+500-Me(),10<t)){if(Qs(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){rt(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=xl(Hn.bind(null,e,at,nn),t);break}Hn(e,at,nn);break;case 4:if(bn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var a=31-Bt(r);o=1<<a,a=t[a],a>s&&(s=a),r&=~o}if(r=s,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yv(r/1960))-r,10<r){e.timeoutHandle=xl(Hn.bind(null,e,at,nn),r);break}Hn(e,at,nn);break;case 5:Hn(e,at,nn);break;default:throw Error(G(329))}}}return dt(e,Me()),e.callbackNode===n?rh.bind(null,e):null}function Ol(e,t){var n=bi;return e.current.memoizedState.isDehydrated&&(Gn(e,t).flags|=256),e=mo(e,t),e!==2&&(t=at,at=n,t!==null&&$l(t)),e}function $l(e){at===null?at=e:at.push.apply(at,e)}function vv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],o=s.getSnapshot;s=s.value;try{if(!Vt(o(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bn(e,t){for(t&=~Vc,t&=~Io,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Bt(t),r=1<<n;e[n]=-1,t&=~r}}function Ad(e){if(ye&6)throw Error(G(327));Pr();var t=Qs(e,0);if(!(t&1))return dt(e,Me()),null;var n=mo(e,t);if(e.tag!==0&&n===2){var r=cl(e);r!==0&&(t=r,n=Ol(e,r))}if(n===1)throw n=Ui,Gn(e,0),bn(e,t),dt(e,Me()),n;if(n===6)throw Error(G(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Hn(e,at,nn),dt(e,Me()),null}function Hc(e,t){var n=ye;ye|=1;try{return e(t)}finally{ye=n,ye===0&&(Fr=Me()+500,Po&&Dn())}}function ir(e){jn!==null&&jn.tag===0&&!(ye&6)&&Pr();var t=ye;ye|=1;var n=At.transition,r=je;try{if(At.transition=null,je=1,e)return e()}finally{je=r,At.transition=n,ye=t,!(ye&6)&&Dn()}}function qc(){xt=_r.current,Ee(_r)}function Gn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Qy(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(Cc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&eo();break;case 3:$r(),Ee(ct),Ee(Ze),Ic();break;case 5:Rc(r);break;case 4:$r();break;case 13:Ee(Pe);break;case 19:Ee(Pe);break;case 10:Tc(r.type._context);break;case 22:case 23:qc()}n=n.return}if(qe=e,De=e=Ln(e.current,null),Ke=xt=t,Ve=0,Ui=null,Vc=Io=rr=0,at=bi=null,Kn!==null){for(t=0;t<Kn.length;t++)if(n=Kn[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=s,r.next=a}n.pending=r}Kn=null}return e}function ih(e,t){do{var n=De;try{if(zc(),Is.current=co,lo){for(var r=Ae.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}lo=!1}if(nr=0,He=Ue=Ae=null,yi=!1,Di=0,Uc.current=null,n===null||n.return===null){Ve=1,Ui=t,De=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=Ke,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=bd(a);if(m!==null){m.flags&=-257,kd(m,a,l,o,t),m.mode&1&&vd(o,u,t),t=m,c=u;var y=t.updateQueue;if(y===null){var _=new Set;_.add(c),t.updateQueue=_}else y.add(c);break e}else{if(!(t&1)){vd(o,u,t),Jc();break e}c=Error(G(426))}}else if(ze&&l.mode&1){var L=bd(a);if(L!==null){!(L.flags&65536)&&(L.flags|=256),kd(L,a,l,o,t),Nc(Dr(c,l));break e}}o=c=Dr(c,l),Ve!==4&&(Ve=2),bi===null?bi=[o]:bi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var x=Bm(o,c,t);fd(o,x);break e;case 1:l=c;var g=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Tn===null||!Tn.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var P=Um(o,l,t);fd(o,P);break e}}o=o.return}while(o!==null)}ah(n)}catch(j){t=j,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function sh(){var e=uo.current;return uo.current=co,e===null?co:e}function Jc(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),qe===null||!(rr&268435455)&&!(Io&268435455)||bn(qe,Ke)}function mo(e,t){var n=ye;ye|=2;var r=sh();(qe!==e||Ke!==t)&&(nn=null,Gn(e,t));do try{bv();break}catch(s){ih(e,s)}while(!0);if(zc(),ye=n,uo.current=r,De!==null)throw Error(G(261));return qe=null,Ke=0,Ve}function bv(){for(;De!==null;)oh(De)}function kv(){for(;De!==null&&!qx();)oh(De)}function oh(e){var t=ch(e.alternate,e,xt);e.memoizedProps=e.pendingProps,t===null?ah(e):De=t,Uc.current=null}function ah(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mv(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,De=null;return}}else if(n=fv(n,t,xt),n!==null){De=n;return}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);Ve===0&&(Ve=5)}function Hn(e,t,n){var r=je,s=At.transition;try{At.transition=null,je=1,jv(e,t,n,r)}finally{At.transition=s,je=r}return null}function jv(e,t,n,r){do Pr();while(jn!==null);if(ye&6)throw Error(G(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(G(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ny(e,o),e===qe&&(De=qe=null,Ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||js||(js=!0,uh(Ks,function(){return Pr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=At.transition,At.transition=null;var a=je;je=1;var l=ye;ye|=4,Uc.current=null,gv(e,n),th(n,e),Uy(hl),Gs=!!ml,hl=ml=null,e.current=n,xv(n),Jx(),ye=l,je=a,At.transition=o}else e.current=n;if(js&&(js=!1,jn=e,fo=s),o=e.pendingLanes,o===0&&(Tn=null),Gx(n.stateNode),dt(e,Me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(po)throw po=!1,e=Il,Il=null,e;return fo&1&&e.tag!==0&&Pr(),o=e.pendingLanes,o&1?e===Ml?ki++:(ki=0,Ml=e):ki=0,Dn(),null}function Pr(){if(jn!==null){var e=Bf(fo),t=At.transition,n=je;try{if(At.transition=null,je=16>e?16:e,jn===null)var r=!1;else{if(e=jn,jn=null,fo=0,ye&6)throw Error(G(331));var s=ye;for(ye|=4,re=e.current;re!==null;){var o=re,a=o.child;if(re.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(re=u;re!==null;){var d=re;switch(d.tag){case 0:case 11:case 15:vi(8,d,o)}var p=d.child;if(p!==null)p.return=d,re=p;else for(;re!==null;){d=re;var f=d.sibling,m=d.return;if(Xm(d),d===u){re=null;break}if(f!==null){f.return=m,re=f;break}re=m}}}var y=o.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var L=_.sibling;_.sibling=null,_=L}while(_!==null)}}re=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,re=a;else e:for(;re!==null;){if(o=re,o.flags&2048)switch(o.tag){case 0:case 11:case 15:vi(9,o,o.return)}var x=o.sibling;if(x!==null){x.return=o.return,re=x;break e}re=o.return}}var g=e.current;for(re=g;re!==null;){a=re;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,re=h;else e:for(a=g;re!==null;){if(l=re,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ro(9,l)}}catch(j){Ie(l,l.return,j)}if(l===a){re=null;break e}var P=l.sibling;if(P!==null){P.return=l.return,re=P;break e}re=l.return}}if(ye=s,Dn(),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(Co,e)}catch{}r=!0}return r}finally{je=n,At.transition=t}}return!1}function Rd(e,t,n){t=Dr(n,t),t=Bm(e,t,1),e=zn(e,t,1),t=rt(),e!==null&&(Gi(e,1,t),dt(e,t))}function Ie(e,t,n){if(e.tag===3)Rd(e,e,n);else for(;t!==null;){if(t.tag===3){Rd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tn===null||!Tn.has(r))){e=Dr(n,e),e=Um(t,e,1),t=zn(t,e,1),e=rt(),t!==null&&(Gi(t,1,e),dt(t,e));break}}t=t.return}}function wv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=rt(),e.pingedLanes|=e.suspendedLanes&n,qe===e&&(Ke&n)===n&&(Ve===4||Ve===3&&(Ke&130023424)===Ke&&500>Me()-Wc?Gn(e,0):Vc|=n),dt(e,t)}function lh(e,t){t===0&&(e.mode&1?(t=ps,ps<<=1,!(ps&130023424)&&(ps=4194304)):t=1);var n=rt();e=dn(e,t),e!==null&&(Gi(e,t,n),dt(e,n))}function _v(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),lh(e,n)}function Sv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(G(314))}r!==null&&r.delete(t),lh(e,n)}var ch;ch=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ct.current)lt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return lt=!1,pv(e,t,n);lt=!!(e.flags&131072)}else lt=!1,ze&&t.flags&1048576&&fm(t,ro,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Os(e,t),e=t.pendingProps;var s=Ir(t,Ze.current);Tr(t,n),s=Oc(null,t,r,e,s,n);var o=$c();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ut(r)?(o=!0,to(t)):o=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Lc(t),s.updater=Ao,t.stateNode=s,s._reactInternals=t,_l(t,r,e,n),t=Nl(null,t,r,!0,o,n)):(t.tag=0,ze&&o&&Sc(t),nt(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Os(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=Nv(r),e=Ot(r,e),s){case 0:t=Cl(null,t,r,e,n);break e;case 1:t=_d(null,t,r,e,n);break e;case 11:t=jd(null,t,r,e,n);break e;case 14:t=wd(null,t,r,Ot(r.type,e),n);break e}throw Error(G(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Ot(r,s),Cl(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Ot(r,s),_d(e,t,r,s,n);case 3:e:{if(qm(t),e===null)throw Error(G(387));r=t.pendingProps,o=t.memoizedState,s=o.element,vm(e,t),oo(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){s=Dr(Error(G(423)),t),t=Sd(e,t,r,n,s);break e}else if(r!==s){s=Dr(Error(G(424)),t),t=Sd(e,t,r,n,s);break e}else for(vt=En(t.stateNode.containerInfo.firstChild),kt=t,ze=!0,Dt=null,n=xm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mr(),r===s){t=pn(e,t,n);break e}nt(e,t,r,n)}t=t.child}return t;case 5:return bm(t),e===null&&kl(t),r=t.type,s=t.pendingProps,o=e!==null?e.memoizedProps:null,a=s.children,gl(r,s)?a=null:o!==null&&gl(r,o)&&(t.flags|=32),Hm(e,t),nt(e,t,a,n),t.child;case 6:return e===null&&kl(t),null;case 13:return Jm(e,t,n);case 4:return Ac(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Or(t,null,r,n):nt(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Ot(r,s),jd(e,t,r,s,n);case 7:return nt(e,t,t.pendingProps,n),t.child;case 8:return nt(e,t,t.pendingProps.children,n),t.child;case 12:return nt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,o=t.memoizedProps,a=s.value,_e(io,r._currentValue),r._currentValue=a,o!==null)if(Vt(o.value,a)){if(o.children===s.children&&!ct.current){t=pn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=an(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),jl(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(G(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),jl(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}nt(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,Tr(t,n),s=Rt(s),r=r(s),t.flags|=1,nt(e,t,r,n),t.child;case 14:return r=t.type,s=Ot(r,t.pendingProps),s=Ot(r.type,s),wd(e,t,r,s,n);case 15:return Vm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Ot(r,s),Os(e,t),t.tag=1,ut(r)?(e=!0,to(t)):e=!1,Tr(t,n),Fm(t,r,s),_l(t,r,s,n),Nl(null,t,r,!0,e,n);case 19:return Km(e,t,n);case 22:return Wm(e,t,n)}throw Error(G(156,t.tag))};function uh(e,t){return Of(e,t)}function Cv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(e,t,n,r){return new Cv(e,t,n,r)}function Kc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nv(e){if(typeof e=="function")return Kc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fc)return 11;if(e===mc)return 14}return 2}function Ln(e,t){var n=e.alternate;return n===null?(n=Pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fs(e,t,n,r,s,o){var a=2;if(r=e,typeof e=="function")Kc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case mr:return Yn(n.children,s,o,t);case pc:a=8,s|=8;break;case Ka:return e=Pt(12,n,t,s|2),e.elementType=Ka,e.lanes=o,e;case Qa:return e=Pt(13,n,t,s),e.elementType=Qa,e.lanes=o,e;case Ga:return e=Pt(19,n,t,s),e.elementType=Ga,e.lanes=o,e;case bf:return Mo(n,s,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yf:a=10;break e;case vf:a=9;break e;case fc:a=11;break e;case mc:a=14;break e;case xn:a=16,r=null;break e}throw Error(G(130,e==null?e:typeof e,""))}return t=Pt(a,n,t,s),t.elementType=e,t.type=r,t.lanes=o,t}function Yn(e,t,n,r){return e=Pt(7,e,r,t),e.lanes=n,e}function Mo(e,t,n,r){return e=Pt(22,e,r,t),e.elementType=bf,e.lanes=n,e.stateNode={isHidden:!1},e}function _a(e,t,n){return e=Pt(6,e,null,t),e.lanes=n,e}function Sa(e,t,n){return t=Pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ev(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sa(0),this.expirationTimes=sa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sa(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Qc(e,t,n,r,s,o,a,l,c){return e=new Ev(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Pt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lc(o),e}function zv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function dh(e){if(!e)return In;e=e._reactInternals;e:{if(ar(e)!==e||e.tag!==1)throw Error(G(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ut(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(G(171))}if(e.tag===1){var n=e.type;if(ut(n))return dm(e,n,t)}return t}function ph(e,t,n,r,s,o,a,l,c){return e=Qc(n,r,!0,e,s,o,a,l,c),e.context=dh(null),n=e.current,r=rt(),s=Pn(n),o=an(r,s),o.callback=t??null,zn(n,o,s),e.current.lanes=s,Gi(e,s,r),dt(e,r),e}function Oo(e,t,n,r){var s=t.current,o=rt(),a=Pn(s);return n=dh(n),t.context===null?t.context=n:t.pendingContext=n,t=an(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=zn(s,t,a),e!==null&&(Ut(e,s,a,o),Rs(e,s,a)),a}function ho(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Id(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gc(e,t){Id(e,t),(e=e.alternate)&&Id(e,t)}function Tv(){return null}var fh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Yc(e){this._internalRoot=e}$o.prototype.render=Yc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(G(409));Oo(e,t,null,null)};$o.prototype.unmount=Yc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ir(function(){Oo(null,e,null,null)}),t[un]=null}};function $o(e){this._internalRoot=e}$o.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vn.length&&t!==0&&t<vn[n].priority;n++);vn.splice(n,0,e),n===0&&qf(e)}};function Xc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Do(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Md(){}function Pv(e,t,n,r,s){if(s){if(typeof r=="function"){var o=r;r=function(){var u=ho(a);o.call(u)}}var a=ph(t,r,e,0,null,!1,!1,"",Md);return e._reactRootContainer=a,e[un]=a.current,Ri(e.nodeType===8?e.parentNode:e),ir(),a}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var u=ho(c);l.call(u)}}var c=Qc(e,0,!1,null,null,!1,!1,"",Md);return e._reactRootContainer=c,e[un]=c.current,Ri(e.nodeType===8?e.parentNode:e),ir(function(){Oo(t,c,n,r)}),c}function Fo(e,t,n,r,s){var o=n._reactRootContainer;if(o){var a=o;if(typeof s=="function"){var l=s;s=function(){var c=ho(a);l.call(c)}}Oo(t,a,e,s)}else a=Pv(n,t,e,s,r);return ho(a)}Uf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ui(t.pendingLanes);n!==0&&(xc(t,n|1),dt(t,Me()),!(ye&6)&&(Fr=Me()+500,Dn()))}break;case 13:ir(function(){var r=dn(e,1);if(r!==null){var s=rt();Ut(r,e,1,s)}}),Gc(e,1)}};yc=function(e){if(e.tag===13){var t=dn(e,134217728);if(t!==null){var n=rt();Ut(t,e,134217728,n)}Gc(e,134217728)}};Vf=function(e){if(e.tag===13){var t=Pn(e),n=dn(e,t);if(n!==null){var r=rt();Ut(n,e,t,r)}Gc(e,t)}};Wf=function(){return je};Hf=function(e,t){var n=je;try{return je=e,t()}finally{je=n}};ol=function(e,t,n){switch(t){case"input":if(Za(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=To(r);if(!s)throw Error(G(90));jf(r),Za(r,s)}}}break;case"textarea":_f(e,n);break;case"select":t=n.value,t!=null&&Cr(e,!!n.multiple,t,!1)}};Pf=Hc;Lf=ir;var Lv={usingClientEntryPoint:!1,Events:[Xi,yr,To,zf,Tf,Hc]},ri={findFiberByHostInstance:Jn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Av={bundleType:ri.bundleType,version:ri.version,rendererPackageName:ri.rendererPackageName,rendererConfig:ri.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=If(e),e===null?null:e.stateNode},findFiberByHostInstance:ri.findFiberByHostInstance||Tv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ws=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ws.isDisabled&&ws.supportsFiber)try{Co=ws.inject(Av),Gt=ws}catch{}}wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lv;wt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xc(t))throw Error(G(200));return zv(e,t,null,n)};wt.createRoot=function(e,t){if(!Xc(e))throw Error(G(299));var n=!1,r="",s=fh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Qc(e,1,!1,null,null,n,!1,r,s),e[un]=t.current,Ri(e.nodeType===8?e.parentNode:e),new Yc(t)};wt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(G(188)):(e=Object.keys(e).join(","),Error(G(268,e)));return e=If(t),e=e===null?null:e.stateNode,e};wt.flushSync=function(e){return ir(e)};wt.hydrate=function(e,t,n){if(!Do(t))throw Error(G(200));return Fo(null,e,t,!0,n)};wt.hydrateRoot=function(e,t,n){if(!Xc(e))throw Error(G(405));var r=n!=null&&n.hydratedSources||null,s=!1,o="",a=fh;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=ph(t,null,e,1,n??null,s,!1,o,a),e[un]=t.current,Ri(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new $o(t)};wt.render=function(e,t,n){if(!Do(t))throw Error(G(200));return Fo(null,e,t,!1,n)};wt.unmountComponentAtNode=function(e){if(!Do(e))throw Error(G(40));return e._reactRootContainer?(ir(function(){Fo(null,null,e,!1,function(){e._reactRootContainer=null,e[un]=null})}),!0):!1};wt.unstable_batchedUpdates=Hc;wt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Do(n))throw Error(G(200));if(e==null||e._reactInternals===void 0)throw Error(G(38));return Fo(e,t,n,!1,r)};wt.version="18.3.1-next-f1338f8080-20240426";function mh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mh)}catch(e){console.error(e)}}mh(),mf.exports=wt;var Rv=mf.exports,Od=Rv;qa.createRoot=Od.createRoot,qa.hydrateRoot=Od.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vi(){return Vi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vi.apply(this,arguments)}var wn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(wn||(wn={}));const $d="popstate";function Iv(e){e===void 0&&(e={});function t(r,s){let{pathname:o,search:a,hash:l}=r.location;return Dl("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:hh(s)}return Ov(t,n,null,e)}function Fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Zc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Mv(){return Math.random().toString(36).substr(2,8)}function Dd(e,t){return{usr:e.state,key:e.key,idx:t}}function Dl(e,t,n,r){return n===void 0&&(n=null),Vi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Jr(t):t,{state:n,key:t&&t.key||r||Mv()})}function hh(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Jr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ov(e,t,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:o=!1}=r,a=s.history,l=wn.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(Vi({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function p(){l=wn.Pop;let L=d(),x=L==null?null:L-u;u=L,c&&c({action:l,location:_.location,delta:x})}function f(L,x){l=wn.Push;let g=Dl(_.location,L,x);u=d()+1;let h=Dd(g,u),P=_.createHref(g);try{a.pushState(h,"",P)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;s.location.assign(P)}o&&c&&c({action:l,location:_.location,delta:1})}function m(L,x){l=wn.Replace;let g=Dl(_.location,L,x);u=d();let h=Dd(g,u),P=_.createHref(g);a.replaceState(h,"",P),o&&c&&c({action:l,location:_.location,delta:0})}function y(L){let x=s.location.origin!=="null"?s.location.origin:s.location.href,g=typeof L=="string"?L:hh(L);return g=g.replace(/ $/,"%20"),Fe(x,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,x)}let _={get action(){return l},get location(){return e(s,a)},listen(L){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener($d,p),c=L,()=>{s.removeEventListener($d,p),c=null}},createHref(L){return t(s,L)},createURL:y,encodeLocation(L){let x=y(L);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:f,replace:m,go(L){return a.go(L)}};return _}var Fd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Fd||(Fd={}));function $v(e,t,n){return n===void 0&&(n="/"),Dv(e,t,n)}function Dv(e,t,n,r){let s=typeof t=="string"?Jr(t):t,o=yh(s.pathname||"/",n);if(o==null)return null;let a=gh(e);Fv(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=Xv(o);l=Qv(a[c],u)}return l}function gh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(o,a,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(Fe(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Xn([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(Fe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),gh(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Jv(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))s(o,a);else for(let c of xh(o.path))s(o,a,c)}),t}function xh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,s=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return s?[o,""]:[o];let a=xh(r.join("/")),l=[];return l.push(...a.map(c=>c===""?o:[o,c].join("/"))),s&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Fv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Kv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Bv=/^:[\w-]+$/,Uv=3,Vv=2,Wv=1,Hv=10,qv=-2,Bd=e=>e==="*";function Jv(e,t){let n=e.split("/"),r=n.length;return n.some(Bd)&&(r+=qv),t&&(r+=Vv),n.filter(s=>!Bd(s)).reduce((s,o)=>s+(Bv.test(o)?Uv:o===""?Wv:Hv),r)}function Kv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,s)=>r===t[s])?e[e.length-1]-t[t.length-1]:0}function Qv(e,t,n){let{routesMeta:r}=e,s={},o="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",p=Gv({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),f=c.route;if(!p)return null;Object.assign(s,p.params),a.push({params:s,pathname:Xn([o,p.pathname]),pathnameBase:r1(Xn([o,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(o=Xn([o,p.pathnameBase]))}return a}function Gv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Yv(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let o=s[0],a=o.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:f,isOptional:m}=d;if(f==="*"){let _=l[p]||"";a=o.slice(0,o.length-_.length).replace(/(.)\/+$/,"$1")}const y=l[p];return m&&!y?u[f]=void 0:u[f]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function Yv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Zc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),r]}function Xv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Zc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function yh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Zv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,e1=e=>Zv.test(e);function t1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:s=""}=typeof e=="string"?Jr(e):e,o;if(n)if(e1(n))o=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),Zc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?o=Ud(n.substring(1),"/"):o=Ud(n,t)}else o=t;return{pathname:o,search:i1(r),hash:s1(s)}}function Ud(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Ca(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function n1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function vh(e,t){let n=n1(e);return t?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function bh(e,t,n,r){r===void 0&&(r=!1);let s;typeof e=="string"?s=Jr(e):(s=Vi({},e),Fe(!s.pathname||!s.pathname.includes("?"),Ca("?","pathname","search",s)),Fe(!s.pathname||!s.pathname.includes("#"),Ca("#","pathname","hash",s)),Fe(!s.search||!s.search.includes("#"),Ca("#","search","hash",s)));let o=e===""||s.pathname==="",a=o?"/":s.pathname,l;if(a==null)l=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;s.pathname=f.join("/")}l=p>=0?t[p]:"/"}let c=t1(s,l),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Xn=e=>e.join("/").replace(/\/\/+/g,"/"),r1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),i1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,s1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function o1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const kh=["post","put","patch","delete"];new Set(kh);const a1=["get",...kh];new Set(a1);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wi(){return Wi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wi.apply(this,arguments)}const eu=S.createContext(null),l1=S.createContext(null),es=S.createContext(null),Bo=S.createContext(null),Fn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),jh=S.createContext(null);function ts(){return S.useContext(Bo)!=null}function tu(){return ts()||Fe(!1),S.useContext(Bo).location}function wh(e){S.useContext(es).static||S.useLayoutEffect(e)}function nu(){let{isDataRoute:e}=S.useContext(Fn);return e?j1():c1()}function c1(){ts()||Fe(!1);let e=S.useContext(eu),{basename:t,future:n,navigator:r}=S.useContext(es),{matches:s}=S.useContext(Fn),{pathname:o}=tu(),a=JSON.stringify(vh(s,n.v7_relativeSplatPath)),l=S.useRef(!1);return wh(()=>{l.current=!0}),S.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=bh(u,JSON.parse(a),o,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Xn([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,a,o,e])}function u1(){let{matches:e}=S.useContext(Fn),t=e[e.length-1];return t?t.params:{}}function d1(e,t){return p1(e,t)}function p1(e,t,n,r){ts()||Fe(!1);let{navigator:s}=S.useContext(es),{matches:o}=S.useContext(Fn),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=tu(),d;if(t){var p;let L=typeof t=="string"?Jr(t):t;c==="/"||(p=L.pathname)!=null&&p.startsWith(c)||Fe(!1),d=L}else d=u;let f=d.pathname||"/",m=f;if(c!=="/"){let L=c.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(L.length).join("/")}let y=$v(e,{pathname:m}),_=x1(y&&y.map(L=>Object.assign({},L,{params:Object.assign({},l,L.params),pathname:Xn([c,s.encodeLocation?s.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?c:Xn([c,s.encodeLocation?s.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),o,n,r);return t&&_?S.createElement(Bo.Provider,{value:{location:Wi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:wn.Pop}},_):_}function f1(){let e=k1(),t=o1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:s},n):null,null)}const m1=S.createElement(f1,null);class h1 extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(Fn.Provider,{value:this.props.routeContext},S.createElement(jh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function g1(e){let{routeContext:t,match:n,children:r}=e,s=S.useContext(eu);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Fn.Provider,{value:t},r)}function x1(e,t,n,r){var s;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(s=n)==null?void 0:s.errors;if(l!=null){let d=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Fe(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:m}=n,y=p.route.loader&&f[p.route.id]===void 0&&(!m||m[p.route.id]===void 0);if(p.route.lazy||y){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,p,f)=>{let m,y=!1,_=null,L=null;n&&(m=l&&p.route.id?l[p.route.id]:void 0,_=p.route.errorElement||m1,c&&(u<0&&f===0?(w1("route-fallback"),y=!0,L=null):u===f&&(y=!0,L=p.route.hydrateFallbackElement||null)));let x=t.concat(a.slice(0,f+1)),g=()=>{let h;return m?h=_:y?h=L:p.route.Component?h=S.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=d,S.createElement(g1,{match:p,routeContext:{outlet:d,matches:x,isDataRoute:n!=null},children:h})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?S.createElement(h1,{location:n.location,revalidation:n.revalidation,component:_,error:m,children:g(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):g()},null)}var _h=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(_h||{}),Sh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Sh||{});function y1(e){let t=S.useContext(eu);return t||Fe(!1),t}function v1(e){let t=S.useContext(l1);return t||Fe(!1),t}function b1(e){let t=S.useContext(Fn);return t||Fe(!1),t}function Ch(e){let t=b1(),n=t.matches[t.matches.length-1];return n.route.id||Fe(!1),n.route.id}function k1(){var e;let t=S.useContext(jh),n=v1(),r=Ch();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function j1(){let{router:e}=y1(_h.UseNavigateStable),t=Ch(Sh.UseNavigateStable),n=S.useRef(!1);return wh(()=>{n.current=!0}),S.useCallback(function(s,o){o===void 0&&(o={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,Wi({fromRouteId:t},o)))},[e,t])}const Vd={};function w1(e,t,n){Vd[e]||(Vd[e]=!0)}function _1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function S1(e){let{to:t,replace:n,state:r,relative:s}=e;ts()||Fe(!1);let{future:o,static:a}=S.useContext(es),{matches:l}=S.useContext(Fn),{pathname:c}=tu(),u=nu(),d=bh(t,vh(l,o.v7_relativeSplatPath),c,s==="path"),p=JSON.stringify(d);return S.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:s}),[u,p,s,n,r]),null}function pr(e){Fe(!1)}function C1(e){let{basename:t="/",children:n=null,location:r,navigationType:s=wn.Pop,navigator:o,static:a=!1,future:l}=e;ts()&&Fe(!1);let c=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:c,navigator:o,static:a,future:Wi({v7_relativeSplatPath:!1},l)}),[c,l,o,a]);typeof r=="string"&&(r=Jr(r));let{pathname:d="/",search:p="",hash:f="",state:m=null,key:y="default"}=r,_=S.useMemo(()=>{let L=yh(d,c);return L==null?null:{location:{pathname:L,search:p,hash:f,state:m,key:y},navigationType:s}},[c,d,p,f,m,y,s]);return _==null?null:S.createElement(es.Provider,{value:u},S.createElement(Bo.Provider,{children:n,value:_}))}function N1(e){let{children:t,location:n}=e;return d1(Fl(t),n)}new Promise(()=>{});function Fl(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,s)=>{if(!S.isValidElement(r))return;let o=[...t,s];if(r.type===S.Fragment){n.push.apply(n,Fl(r.props.children,o));return}r.type!==pr&&Fe(!1),!r.props.index||!r.props.children||Fe(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Fl(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const E1="6";try{window.__reactRouterVersion=E1}catch{}const z1="startTransition",Wd=wx[z1];function T1(e){let{basename:t,children:n,future:r,window:s}=e,o=S.useRef();o.current==null&&(o.current=Iv({window:s,v5Compat:!0}));let a=o.current,[l,c]=S.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=S.useCallback(p=>{u&&Wd?Wd(()=>c(p)):c(p)},[c,u]);return S.useLayoutEffect(()=>a.listen(d),[a,d]),S.useEffect(()=>_1(r),[r]),S.createElement(C1,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}var Hd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Hd||(Hd={}));var qd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(qd||(qd={}));const P1={},Jd=e=>{let t;const n=new Set,r=(d,p)=>{const f=typeof d=="function"?d(t):d;if(!Object.is(f,t)){const m=t;t=p??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(y=>y(t,m))}},s=()=>t,c={setState:r,getState:s,getInitialState:()=>u,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(P1?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,s,c);return c},L1=e=>e?Jd(e):Jd;var Nh={exports:{}},Eh={},zh={exports:{}},Th={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Br=S;function A1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var R1=typeof Object.is=="function"?Object.is:A1,I1=Br.useState,M1=Br.useEffect,O1=Br.useLayoutEffect,$1=Br.useDebugValue;function D1(e,t){var n=t(),r=I1({inst:{value:n,getSnapshot:t}}),s=r[0].inst,o=r[1];return O1(function(){s.value=n,s.getSnapshot=t,Na(s)&&o({inst:s})},[e,n,t]),M1(function(){return Na(s)&&o({inst:s}),e(function(){Na(s)&&o({inst:s})})},[e]),$1(n),n}function Na(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!R1(e,n)}catch{return!0}}function F1(e,t){return t()}var B1=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?F1:D1;Th.useSyncExternalStore=Br.useSyncExternalStore!==void 0?Br.useSyncExternalStore:B1;zh.exports=Th;var U1=zh.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uo=S,V1=U1;function W1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var H1=typeof Object.is=="function"?Object.is:W1,q1=V1.useSyncExternalStore,J1=Uo.useRef,K1=Uo.useEffect,Q1=Uo.useMemo,G1=Uo.useDebugValue;Eh.useSyncExternalStoreWithSelector=function(e,t,n,r,s){var o=J1(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=Q1(function(){function c(m){if(!u){if(u=!0,d=m,m=r(m),s!==void 0&&a.hasValue){var y=a.value;if(s(y,m))return p=y}return p=m}if(y=p,H1(d,m))return y;var _=r(m);return s!==void 0&&s(y,_)?(d=m,y):(d=m,p=_)}var u=!1,d,p,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,r,s]);var l=q1(e,o[0],o[1]);return K1(function(){a.hasValue=!0,a.value=l},[l]),G1(l),l};Nh.exports=Eh;var Y1=Nh.exports;const X1=_o(Y1),Ph={},{useDebugValue:Z1}=Lt,{useSyncExternalStoreWithSelector:e0}=X1;let Kd=!1;const t0=e=>e;function n0(e,t=t0,n){(Ph?"production":void 0)!=="production"&&n&&!Kd&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Kd=!0);const r=e0(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return Z1(r),r}const Qd=e=>{(Ph?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?L1(e):e,n=(r,s)=>n0(t,r,s);return Object.assign(n,t),n},r0=e=>e?Qd(e):Qd,et=r0((e,t)=>({project:null,selectedAgentId:null,selectedToolId:null,mcpServers:[],builtinTools:[],isRunning:!1,runEvents:[],watches:[],activeTab:"app",sidebarOpen:!0,hasUnsavedChanges:!1,runAgentId:null,currentSessionId:null,setProject:n=>{var s;const r=((s=n==null?void 0:n.watches)==null?void 0:s.map(o=>({...o,result:void 0,error:void 0,isLoading:!1,lastRun:void 0,history:[]})))||[];e({project:n,watches:r})},setSelectedAgentId:n=>e({selectedAgentId:n}),setSelectedToolId:n=>e({selectedToolId:n}),setMcpServers:n=>e({mcpServers:n}),setBuiltinTools:n=>e({builtinTools:n}),setIsRunning:n=>e({isRunning:n}),addRunEvent:n=>e(r=>({runEvents:[...r.runEvents,n]})),clearRunEvents:()=>e({runEvents:[]}),setWatches:n=>e({watches:n}),updateWatch:(n,r)=>e(s=>{const o=s.watches.map(l=>l.id===n?{...l,...r}:l);if(("serverName"in r||"toolName"in r||"args"in r||"transform"in r)&&s.project){const l=o.map(({id:c,serverName:u,toolName:d,args:p,transform:f})=>({id:c,serverName:u,toolName:d,args:p,transform:f}));return{watches:o,project:{...s.project,watches:l},hasUnsavedChanges:!0}}return{watches:o}}),addWatch:n=>e(r=>{const s=[...r.watches,n],{project:o}=r;if(o){const a=s.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:s,project:{...o,watches:a},hasUnsavedChanges:!0}}return{watches:s}}),removeWatch:n=>e(r=>{const s=r.watches.filter(a=>a.id!==n),{project:o}=r;if(o){const a=s.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:s,project:{...o,watches:a},hasUnsavedChanges:!0}}return{watches:s}}),clearWatchHistories:()=>e(n=>({watches:n.watches.map(r=>({...r,history:[],result:void 0,error:void 0}))})),setActiveTab:n=>e({activeTab:n}),setSidebarOpen:n=>e({sidebarOpen:n}),setHasUnsavedChanges:n=>e({hasUnsavedChanges:n}),setRunAgentId:n=>e({runAgentId:n}),setCurrentSessionId:n=>e({currentSessionId:n}),updateProject:n=>{const{project:r}=t();r&&e({project:{...r,...n}})},addAgent:n=>{const{project:r}=t();r&&e({project:{...r,agents:[...r.agents,n]}})},updateAgent:(n,r)=>{const{project:s}=t();s&&e({project:{...s,agents:s.agents.map(o=>o.id===n?{...o,...r}:o)}})},removeAgent:n=>{const{project:r,selectedAgentId:s}=t();r&&e({project:{...r,agents:r.agents.filter(o=>o.id!==n)},selectedAgentId:s===n?null:s})},addCustomTool:n=>{const{project:r}=t();r&&e({project:{...r,custom_tools:[...r.custom_tools,n]}})},updateCustomTool:(n,r)=>{const{project:s}=t();s&&e({project:{...s,custom_tools:s.custom_tools.map(o=>o.id===n?{...o,...r}:o)}})},removeCustomTool:n=>{const{project:r,selectedToolId:s}=t();r&&e({project:{...r,custom_tools:r.custom_tools.filter(o=>o.id!==n)},selectedToolId:s===n?null:s})},addCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:[...r.custom_callbacks||[],n]}})},updateCustomCallback:(n,r)=>{const{project:s}=t();s&&e({project:{...s,custom_callbacks:(s.custom_callbacks||[]).map(o=>o.id===n?{...o,...r}:o)}})},removeCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:(r.custom_callbacks||[]).filter(s=>s.id!==n)}})}})),Lh="/api";async function ve(e,t){const n=await fetch(`${Lh}${e}`,{...t,headers:{"Content-Type":"application/json",...t==null?void 0:t.headers}});if(!n.ok){const r=await n.json().catch(()=>({detail:"Unknown error"}));throw new Error(r.detail||`HTTP ${n.status}`)}return n.json()}async function Ah(){return(await ve("/projects")).projects}async function Rh(e){return(await ve(`/projects/${e}`)).project}async function Ih(e,t=""){return(await ve("/projects",{method:"POST",body:JSON.stringify({name:e,description:t})})).project}async function Bl(e,t){return(await ve(`/projects/${e}`,{method:"PUT",body:JSON.stringify(t)})).project}async function Mh(e){await ve(`/projects/${e}`,{method:"DELETE"})}async function Oh(e){return ve(`/sessions/${e}/save-to-memory`,{method:"POST"})}async function Ul(e){return(await ve(`/projects/${e}/sessions`)).sessions}async function $h(e,t){return(await ve(`/projects/${e}/sessions/${t}/load`)).session}async function Dh(e){return(await ve(`/projects/${e}/yaml`)).yaml}async function Fh(e,t){return(await ve(`/projects/${e}/yaml`,{method:"PUT",body:JSON.stringify({yaml:t})})).project}async function ru(){return(await ve("/mcp-servers")).servers}async function Bh(){return(await ve("/builtin-tools")).tools}function Uh(e){const t=window.location.protocol==="https:"?"wss:":"ws:",n=window.location.host;return new WebSocket(`${t}//${n}/ws/run/${e}`)}async function Bs(e,t,n,r){return await ve(`/projects/${e}/generate-prompt`,{method:"POST",body:JSON.stringify({agent_id:t,context:n,agent_config:r||void 0})})}async function Vh(e,t){return await ve(`/projects/${e}/generate-agent-config`,{method:"POST",body:JSON.stringify({description:t})})}async function Wh(e,t,n,r=[],s){return await ve(`/projects/${e}/generate-tool-code`,{method:"POST",body:JSON.stringify({tool_name:t,tool_description:n,state_keys_used:r,context:s})})}async function Hh(e,t,n,r,s=[],o){return await ve(`/projects/${e}/generate-callback-code`,{method:"POST",body:JSON.stringify({callback_name:t,callback_description:n,callback_type:r,state_keys_used:s,context:o})})}async function qh(e){return await ve("/test-mcp-server",{method:"POST",body:JSON.stringify(e)})}async function Jh(e,t){return ve(`/projects/${e}/skillsets/${t}/stats`)}async function Kh(e,t,n,r,s=500,o=50){return ve(`/projects/${e}/skillsets/${t}/url`,{method:"POST",body:JSON.stringify({url:n,source_name:r,chunk_size:s,chunk_overlap:o})})}async function Qh(e,t,n,r=500,s=50){const o=new FormData;o.append("file",n),o.append("chunk_size",String(r)),o.append("chunk_overlap",String(s));const a=await fetch(`${Lh}/projects/${e}/skillsets/${t}/file`,{method:"POST",body:o});if(!a.ok)throw new Error(`Upload failed: ${a.statusText}`);return a.json()}async function Gh(e,t,n,r=10,s=0){return ve(`/projects/${e}/skillsets/${t}/search`,{method:"POST",body:JSON.stringify({query:n,top_k:r,min_score:s})})}async function Yh(e,t){return ve(`/projects/${e}/skillsets/${t}/entries`,{method:"DELETE"})}async function Xh(){return ve("/skillsets/embeddings-available")}const Be={async get(e){return ve(e)},async post(e,t){return ve(e,{method:"POST",body:t?JSON.stringify(t):void 0})},async put(e,t){return ve(e,{method:"PUT",body:t?JSON.stringify(t):void 0})},async delete(e){return ve(e,{method:"DELETE"})}},i0=Object.freeze(Object.defineProperty({__proto__:null,addSkillSetUrl:Kh,api:Be,checkEmbeddingsAvailable:Xh,clearSkillSet:Yh,createProject:Ih,createRunWebSocket:Uh,deleteProject:Mh,fetchJSON:ve,generateAgentConfig:Vh,generateCallbackCode:Hh,generatePrompt:Bs,generateToolCode:Wh,getBuiltinTools:Bh,getMcpServers:ru,getProject:Rh,getProjectYaml:Dh,getSkillSetStats:Jh,listProjectSessions:Ul,listProjects:Ah,loadSession:$h,saveSessionToMemory:Oh,searchSkillSet:Gh,testMcpServer:qh,updateProject:Bl,updateProjectFromYaml:Fh,uploadSkillSetFile:Qh},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var s0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),oe=(e,t)=>{const n=S.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:l="",children:c,...u},d)=>S.createElement("svg",{ref:d,...s0,width:s,height:s,stroke:r,strokeWidth:a?Number(o)*24/Number(s):o,className:["lucide",`lucide-${o0(e)}`,l].join(" "),...u},[...t.map(([p,f])=>S.createElement(p,f)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
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
 */const Zh=oe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
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
 */const Zt=oe("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=oe("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=oe("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=oe("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
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
 */const Gd=oe("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=oe("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=oe("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=oe("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=oe("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=oe("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
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
 */const Hl=oe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=oe("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=oe("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
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
 */const _n=oe("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=oe("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=oe("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
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
 */const lu=oe("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
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
 */const cu=oe("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=oe("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=oe("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=oe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=oe("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=oe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=oe("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=oe("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=oe("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
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
 */const ag=oe("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function j0(){const e=nu(),[t,n]=S.useState([]),[r,s]=S.useState(!0),[o,a]=S.useState(!1),[l,c]=S.useState("");S.useEffect(()=>{u()},[]);async function u(){try{const f=await Ah();n(f)}catch(f){console.error("Failed to load projects:",f)}finally{s(!1)}}async function d(){if(l.trim())try{const f=await Ih(l.trim());e(`/project/${f.id}`)}catch(f){console.error("Failed to create project:",f)}}async function p(f,m){if(m.stopPropagation(),!!confirm("Delete this project?"))try{await Mh(f),n(t.filter(y=>y.id!==f))}catch(y){console.error("Failed to delete project:",y)}}return i.jsxs("div",{className:"project-list",children:[i.jsx("style",{children:`
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
      `}),i.jsxs("header",{className:"header",children:[i.jsxs("div",{className:"logo",children:[i.jsx(lu,{size:40,className:"logo-icon"}),i.jsx("h1",{className:"title",children:"ADK Playground"})]}),i.jsx("p",{className:"subtitle",children:"Build, test, and deploy AI agents visually"})]}),i.jsxs("div",{className:"content",children:[o?i.jsxs("div",{className:"create-form",children:[i.jsx("input",{type:"text",placeholder:"Project name...",value:l,onChange:f=>c(f.target.value),onKeyDown:f=>f.key==="Enter"&&d(),autoFocus:!0}),i.jsxs("button",{className:"btn btn-primary",onClick:d,children:[i.jsx(Oe,{size:18}),"Create"]}),i.jsx("button",{className:"btn btn-secondary",onClick:()=>a(!1),children:"Cancel"})]}):i.jsx("div",{className:"create-form",children:i.jsxs("button",{className:"btn btn-primary",onClick:()=>a(!0),children:[i.jsx(Oe,{size:18}),"New Project"]})}),r?i.jsx("div",{className:"loading",children:"Loading projects..."}):t.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx(Gd,{size:48,style:{marginBottom:16,opacity:.3}}),i.jsx("p",{children:"No projects yet. Create one to get started!"})]}):i.jsx("div",{className:"projects-grid",children:t.map(f=>i.jsxs("div",{className:"project-card",onClick:()=>e(`/project/${f.id}`),children:[i.jsxs("h3",{children:[i.jsx(Gd,{size:18}),f.name]}),i.jsx("p",{children:f.description||"No description"}),i.jsx("button",{className:"delete-btn",onClick:m=>p(f.id,m),children:i.jsx(Le,{size:16})})]},f.id))})]})]})}const w0=[{key:"GOOGLE_API_KEY",description:"API key for Gemini models"},{key:"OPENAI_API_KEY",description:"API key for OpenAI models (via LiteLLM)"},{key:"ANTHROPIC_API_KEY",description:"API key for Anthropic Claude models"},{key:"AZURE_API_KEY",description:"API key for Azure OpenAI Service"},{key:"AZURE_API_BASE",description:"Base URL for Azure OpenAI endpoint (e.g., https://your-resource.openai.azure.com)"},{key:"AZURE_API_VERSION",description:"API version for Azure OpenAI (e.g., 2024-02-15-preview)"},{key:"GOOGLE_GENAI_USE_VERTEXAI",description:'Set to "1" to use Vertex AI instead of API key'},{key:"GOOGLE_CLOUD_PROJECT",description:"Google Cloud project ID for Vertex AI"},{key:"GOOGLE_CLOUD_REGION",description:"Google Cloud region for Vertex AI (e.g., us-central1)"}];function _0(e){return/^[a-zA-Z0-9_]+$/.test(e)}function S0(){const{project:e,updateProject:t}=et(),[n,r]=S.useState(null);if(!e)return null;const{app:s}=e;function o(v){t({app:{...s,...v}})}function a(v){if(v===""){r(null),o({name:v});return}_0(v)?r(null):r("Name can only contain letters, numbers, and underscores"),o({name:v})}function l(){const v={name:`state_key_${s.state_keys.length+1}`,description:"",type:"string",scope:"session"};o({state_keys:[...s.state_keys,v]})}function c(v,E){const M=[...s.state_keys];M[v]={...M[v],...E},o({state_keys:M})}function u(v){o({state_keys:s.state_keys.filter((E,M)=>M!==v)})}function d(v="ReflectAndRetryToolPlugin"){let E;switch(v){case"ReflectAndRetryToolPlugin":E={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1};break;case"ContextFilterPlugin":E={type:"ContextFilterPlugin",name:"context_filter",num_invocations_to_keep:5};break;case"LoggingPlugin":E={type:"LoggingPlugin",name:"logging"};break;case"GlobalInstructionPlugin":E={type:"GlobalInstructionPlugin",name:"global_instruction",global_instruction:""};break;case"SaveFilesAsArtifactsPlugin":E={type:"SaveFilesAsArtifactsPlugin",name:"save_files"};break;case"MultimodalToolResultsPlugin":E={type:"MultimodalToolResultsPlugin",name:"multimodal_tools"};break;default:E={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1}}o({plugins:[...s.plugins,E]})}function p(v,E){const M=[...s.plugins];M[v]={...M[v],...E},o({plugins:M})}function f(v){o({plugins:s.plugins.filter((E,M)=>M!==v)})}const m=s.models||[];function y(){const v=`model_${Date.now().toString(36)}`,E={id:v,name:"New Model",provider:"gemini",model_name:"gemini-2.0-flash",is_default:m.length===0};o({models:[...m,E],default_model_id:m.length===0?v:s.default_model_id})}function _(v,E){const M=m.map(U=>U.id===v?{...U,...E}:U);o({models:M})}function L(v){var U;const E=m.filter(D=>D.id!==v),M=s.default_model_id===v?((U=E[0])==null?void 0:U.id)||void 0:s.default_model_id;o({models:E,default_model_id:M})}function x(v){o({default_model_id:v})}const g=s.env_vars||{},[h,P]=S.useState({}),[j,b]=S.useState("");function C(v=""){const E=v||j.trim();!E||g[E]!==void 0||(o({env_vars:{...g,[E]:""}}),b(""))}function w(v,E){o({env_vars:{...g,[v]:E}})}function R(v){const E={...g};delete E[v],o({env_vars:E})}function N(v){P(E=>({...E,[v]:!E[v]}))}return i.jsxs("div",{className:"app-config",children:[i.jsx("style",{children:`
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
      `}),i.jsxs("section",{className:"section",children:[i.jsx("div",{className:"section-header",children:i.jsxs("h2",{className:"section-title",children:[i.jsx(y0,{size:20}),"Basic Information"]})}),i.jsxs("div",{className:"form-grid",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"App Name"}),i.jsx("input",{type:"text",value:s.name,onChange:v=>a(v.target.value),style:{borderColor:n?"var(--error)":void 0}}),n&&i.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:4},children:n})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Root Agent"}),i.jsxs("select",{value:s.root_agent_id||"",onChange:v=>o({root_agent_id:v.target.value||void 0}),children:[i.jsx("option",{value:"",children:"Select an agent..."}),e.agents.map(v=>i.jsx("option",{value:v.id,children:v.name},v.id))]})]}),i.jsxs("div",{className:"form-group full-width",children:[i.jsx("label",{children:"Description"}),i.jsx("textarea",{value:s.description,onChange:v=>o({description:v.target.value}),rows:2})]})]})]}),i.jsxs("section",{className:"section",children:[i.jsxs("div",{className:"section-header",children:[i.jsxs("h2",{className:"section-title",children:[i.jsx(ln,{size:20}),"Services"]}),i.jsx("span",{className:"section-hint",children:"Configure session, memory, and artifact storage backends"})]}),i.jsxs("div",{className:"form-grid",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Session Service"}),i.jsxs("select",{value:s.session_service_uri.split("://")[0],onChange:v=>{const E=v.target.value;o({session_service_uri:{memory:"memory://",file:"file://~/.adk-playground/sessions",sqlite:"sqlite://~/.adk-playground/sessions.db",postgresql:"postgresql://user:pass@localhost:5432/adk_sessions",mysql:"mysql://user:pass@localhost:3306/adk_sessions",agentengine:"agentengine://project/us-central1/engine-id"}[E]||E+"://"})},children:[i.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),i.jsx("option",{value:"file",children:"File System (JSON)"}),i.jsx("option",{value:"sqlite",children:"SQLite (local)"}),i.jsx("option",{value:"postgresql",children:"PostgreSQL"}),i.jsx("option",{value:"mysql",children:"MySQL"}),i.jsx("option",{value:"agentengine",children:"Vertex AI Agent Engine"})]}),s.session_service_uri.startsWith("file://")&&i.jsx("input",{type:"text",value:s.session_service_uri.replace("file://",""),onChange:v=>o({session_service_uri:"file://"+v.target.value}),placeholder:"~/.adk-playground/sessions",style:{marginTop:8}}),s.session_service_uri.startsWith("sqlite://")&&i.jsx("input",{type:"text",value:s.session_service_uri.replace("sqlite://",""),onChange:v=>o({session_service_uri:"sqlite://"+v.target.value}),placeholder:"~/.adk-playground/sessions.db",style:{marginTop:8}}),(s.session_service_uri.startsWith("postgresql://")||s.session_service_uri.startsWith("mysql://"))&&i.jsx("input",{type:"text",value:s.session_service_uri,onChange:v=>o({session_service_uri:v.target.value}),placeholder:"postgresql://user:pass@localhost:5432/db",style:{marginTop:8}}),s.session_service_uri.startsWith("agentengine://")&&i.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[i.jsx("input",{type:"text",value:s.session_service_uri.split("/")[2]||"",onChange:v=>{const E=s.session_service_uri.split("/");E[2]=v.target.value,o({session_service_uri:E.join("/")})},placeholder:"project-id"}),i.jsx("input",{type:"text",value:s.session_service_uri.split("/")[3]||"",onChange:v=>{const E=s.session_service_uri.split("/");E[3]=v.target.value,o({session_service_uri:E.join("/")})},placeholder:"location (e.g., us-central1)"}),i.jsx("input",{type:"text",value:s.session_service_uri.split("/")[4]||"",onChange:v=>{const E=s.session_service_uri.split("/");E[4]=v.target.value,o({session_service_uri:E.join("/")})},placeholder:"agent-engine-id"})]}),i.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[s.session_service_uri.startsWith("memory://")&&"Sessions stored in memory, lost on restart",s.session_service_uri.startsWith("file://")&&"Sessions stored as JSON files, preserves UI events",s.session_service_uri.startsWith("sqlite://")&&"Persists to local SQLite file",s.session_service_uri.startsWith("postgresql://")&&"Production-ready PostgreSQL backend",s.session_service_uri.startsWith("mysql://")&&"Production-ready MySQL backend",s.session_service_uri.startsWith("agentengine://")&&"Vertex AI Agent Engine managed sessions"]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Memory Service"}),i.jsxs("select",{value:s.memory_service_uri.split("://")[0],onChange:v=>{const E=v.target.value;o({memory_service_uri:{memory:"memory://",file:"file://~/.adk-playground/memory",rag:"rag://rag-corpus-id",agentengine:"agentengine://project/us-central1/engine-id"}[E]||E+"://"})},children:[i.jsx("option",{value:"memory",children:"In-Memory (keyword matching)"}),i.jsx("option",{value:"file",children:"File System (keyword matching)"}),i.jsx("option",{value:"rag",children:"Vertex AI RAG"}),i.jsx("option",{value:"agentengine",children:"Vertex AI Memory Bank"})]}),s.memory_service_uri.startsWith("file://")&&i.jsx("input",{type:"text",value:s.memory_service_uri.replace("file://",""),onChange:v=>o({memory_service_uri:"file://"+v.target.value}),placeholder:"~/.adk-playground/memory",style:{marginTop:8}}),s.memory_service_uri.startsWith("rag://")&&i.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[i.jsx("input",{type:"text",value:s.memory_service_uri.replace("rag://",""),onChange:v=>o({memory_service_uri:"rag://"+v.target.value}),placeholder:"rag-corpus-id or full resource path"}),i.jsx("span",{className:"help-text",style:{fontSize:11,color:"var(--text-dim)"},children:"Format: projects/PROJECT/locations/LOCATION/ragCorpora/CORPUS_ID"})]}),s.memory_service_uri.startsWith("agentengine://")&&i.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[i.jsx("input",{type:"text",value:s.memory_service_uri.split("/")[2]||"",onChange:v=>{const E=s.memory_service_uri.split("/");E[2]=v.target.value,o({memory_service_uri:E.join("/")})},placeholder:"project-id"}),i.jsx("input",{type:"text",value:s.memory_service_uri.split("/")[3]||"",onChange:v=>{const E=s.memory_service_uri.split("/");E[3]=v.target.value,o({memory_service_uri:E.join("/")})},placeholder:"location (e.g., us-central1)"}),i.jsx("input",{type:"text",value:s.memory_service_uri.split("/")[4]||"",onChange:v=>{const E=s.memory_service_uri.split("/");E[4]=v.target.value,o({memory_service_uri:E.join("/")})},placeholder:"agent-engine-id"})]}),i.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[s.memory_service_uri.startsWith("memory://")&&"Simple keyword matching, good for prototyping",s.memory_service_uri.startsWith("file://")&&"Persists memories as JSON files",s.memory_service_uri.startsWith("rag://")&&"Semantic search using Vertex AI RAG corpus",s.memory_service_uri.startsWith("agentengine://")&&"Managed memory via Agent Engine Memory Bank"]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Artifact Service"}),i.jsxs("select",{value:s.artifact_service_uri.split("://")[0]==="gs"?"gs":s.artifact_service_uri.split("://")[0],onChange:v=>{const E=v.target.value;o({artifact_service_uri:{memory:"memory://",file:"file://~/.adk-playground/artifacts",gs:"gs://your-bucket-name"}[E]||E+"://"})},children:[i.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),i.jsx("option",{value:"file",children:"File System"}),i.jsx("option",{value:"gs",children:"Google Cloud Storage"})]}),s.artifact_service_uri.startsWith("file://")&&i.jsx("input",{type:"text",value:s.artifact_service_uri.replace("file://",""),onChange:v=>o({artifact_service_uri:"file://"+v.target.value}),placeholder:"~/.adk-playground/artifacts",style:{marginTop:8}}),s.artifact_service_uri.startsWith("gs://")&&i.jsx("input",{type:"text",value:s.artifact_service_uri.replace("gs://",""),onChange:v=>o({artifact_service_uri:"gs://"+v.target.value}),placeholder:"bucket-name/optional-prefix",style:{marginTop:8}}),i.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[s.artifact_service_uri.startsWith("memory://")&&"Artifacts stored in memory, lost on restart",s.artifact_service_uri.startsWith("file://")&&"Persists to local filesystem",s.artifact_service_uri.startsWith("gs://")&&"Production-ready Google Cloud Storage backend"]})]})]})]}),i.jsxs("section",{className:"section",children:[i.jsx("div",{className:"section-header",children:i.jsxs("h2",{className:"section-title",children:[i.jsx(Hl,{size:20}),"Environment Variables"]})}),i.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginBottom:16},children:"Set API keys and other environment variables. These are passed to the agent runtime."}),i.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16},children:w0.filter(v=>g[v.key]===void 0).map(v=>i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>C(v.key),title:v.description,children:[i.jsx(Oe,{size:12}),v.key]},v.key))}),Object.keys(g).length===0?i.jsx("p",{className:"empty-message",children:"No environment variables set. Click a button above to add common variables, or add a custom one below."}):Object.entries(g).map(([v,E])=>i.jsxs("div",{className:"list-item",style:{alignItems:"center"},children:[i.jsxs("div",{style:{flex:1,display:"flex",gap:12,alignItems:"center"},children:[i.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:13,minWidth:200},children:v}),i.jsxs("div",{style:{flex:1,display:"flex",gap:8,alignItems:"center"},children:[i.jsx("input",{type:h[v]?"text":"password",value:E,onChange:M=>w(v,M.target.value),placeholder:"Enter value...",style:{flex:1}}),i.jsx("button",{className:"delete-item",onClick:()=>N(v),title:h[v]?"Hide value":"Show value",children:h[v]?i.jsx(c0,{size:16}):i.jsx(Hi,{size:16})})]})]}),i.jsx("button",{className:"delete-item",onClick:()=>R(v),children:i.jsx(Le,{size:16})})]},v)),i.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[i.jsx("input",{type:"text",value:j,onChange:v=>b(v.target.value.toUpperCase().replace(/[^A-Z0-9_]/g,"")),placeholder:"CUSTOM_VAR_NAME",style:{flex:1,fontFamily:"var(--font-mono)"},onKeyDown:v=>v.key==="Enter"&&C()}),i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>C(),disabled:!j.trim(),children:[i.jsx(Oe,{size:14}),"Add Variable"]})]})]}),i.jsxs("section",{className:"section",children:[i.jsxs("div",{className:"section-header",children:[i.jsxs("h2",{className:"section-title",children:[i.jsx(iu,{size:20}),"Models"]}),i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:y,children:[i.jsx(Oe,{size:14}),"Add Model"]})]}),m.length===0?i.jsx("p",{className:"empty-message",children:"No models configured. Add models that agents can use."}):m.map(v=>i.jsxs("div",{className:"model-card",children:[i.jsxs("div",{className:"model-card-header",children:[i.jsx("input",{type:"text",value:v.name,onChange:E=>_(v.id,{name:E.target.value}),placeholder:"Model name",className:"model-name-input"}),i.jsx("button",{className:`default-model-btn ${s.default_model_id===v.id?"is-default":""}`,onClick:()=>x(v.id),title:s.default_model_id===v.id?"Default model":"Set as default",children:i.jsx(sg,{size:14,fill:s.default_model_id===v.id?"currentColor":"none"})}),i.jsx("button",{className:"delete-item",onClick:()=>L(v.id),children:i.jsx(Le,{size:16})})]}),i.jsxs("div",{className:"model-card-body",children:[i.jsxs("div",{className:"model-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Provider"}),i.jsxs("select",{value:v.provider,onChange:E=>_(v.id,{provider:E.target.value}),children:[i.jsx("option",{value:"gemini",children:"Gemini"}),i.jsx("option",{value:"litellm",children:"LiteLLM"}),i.jsx("option",{value:"anthropic",children:"Anthropic"})]})]}),i.jsxs("div",{className:"form-group",style:{flex:2},children:[i.jsx("label",{children:"Model Name"}),i.jsx("input",{type:"text",value:v.model_name,onChange:E=>_(v.id,{model_name:E.target.value}),placeholder:"e.g., gemini-2.0-flash"})]}),v.provider==="litellm"&&i.jsxs("div",{className:"form-group",style:{flex:2},children:[i.jsx("label",{children:"API Base URL"}),i.jsx("input",{type:"text",value:v.api_base||"",onChange:E=>_(v.id,{api_base:E.target.value||void 0}),placeholder:"http://localhost:11434"})]})]}),i.jsxs("div",{className:"model-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Temperature"}),i.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:v.temperature??"",onChange:E=>_(v.id,{temperature:E.target.value?parseFloat(E.target.value):void 0}),placeholder:"Default"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Max Tokens"}),i.jsx("input",{type:"number",min:"1",value:v.max_output_tokens??"",onChange:E=>_(v.id,{max_output_tokens:E.target.value?parseInt(E.target.value):void 0}),placeholder:"Default"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Top P"}),i.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:v.top_p??"",onChange:E=>_(v.id,{top_p:E.target.value?parseFloat(E.target.value):void 0}),placeholder:"Default"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Top K"}),i.jsx("input",{type:"number",min:"1",value:v.top_k??"",onChange:E=>_(v.id,{top_k:E.target.value?parseInt(E.target.value):void 0}),placeholder:"Default"})]})]})]})]},v.id))]}),i.jsxs("section",{className:"section",children:[i.jsx("div",{className:"section-header",children:i.jsxs("h2",{className:"section-title",children:[i.jsx(ag,{size:20}),"Advanced Options"]})}),i.jsxs("div",{className:"toggle-group",children:[i.jsx("div",{className:`toggle ${s.compaction.enabled?"active":""}`,onClick:()=>o({compaction:{...s.compaction,enabled:!s.compaction.enabled}})}),i.jsxs("div",{className:"toggle-label",children:[i.jsx("strong",{children:"Event Compaction"}),i.jsx("span",{children:"Automatically summarize old events to reduce context size"})]}),s.compaction.enabled&&i.jsx("input",{type:"number",value:s.compaction.max_events,onChange:v=>o({compaction:{...s.compaction,max_events:parseInt(v.target.value)||100}}),style:{width:80},placeholder:"Max events"})]}),i.jsxs("div",{className:"toggle-group",style:{marginTop:12},children:[i.jsx("div",{className:`toggle ${s.context_cache.enabled?"active":""}`,onClick:()=>o({context_cache:{...s.context_cache,enabled:!s.context_cache.enabled}})}),i.jsxs("div",{className:"toggle-label",children:[i.jsx("strong",{children:"Context Caching"}),i.jsx("span",{children:"Cache static instructions for better performance"})]}),s.context_cache.enabled&&i.jsx("input",{type:"number",value:s.context_cache.ttl_seconds,onChange:v=>o({context_cache:{...s.context_cache,ttl_seconds:parseInt(v.target.value)||3600}}),style:{width:100},placeholder:"TTL (seconds)"})]}),i.jsxs("div",{className:"toggle-group",style:{marginTop:12},children:[i.jsx("div",{className:`toggle ${s.resumability.enabled?"active":""}`,onClick:()=>o({resumability:{...s.resumability,enabled:!s.resumability.enabled}})}),i.jsxs("div",{className:"toggle-label",children:[i.jsx("strong",{children:"Resumability"}),i.jsx("span",{children:"Allow pausing and resuming agent execution"})]})]})]}),i.jsxs("section",{className:"section",children:[i.jsxs("div",{className:"section-header",children:[i.jsxs("h2",{className:"section-title",children:[i.jsx(su,{size:20}),"Session State Keys"]}),i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:l,children:[i.jsx(Oe,{size:14}),"Add Key"]})]}),s.state_keys.length===0?i.jsx("p",{className:"empty-message",children:"No state keys defined. Add keys to declare what data agents can share."}):s.state_keys.map((v,E)=>i.jsxs("div",{className:"list-item",children:[i.jsxs("div",{className:"list-item-content",children:[i.jsx("input",{type:"text",value:v.name,onChange:M=>c(E,{name:M.target.value}),placeholder:"Key name"}),i.jsxs("select",{value:v.type,onChange:M=>c(E,{type:M.target.value}),children:[i.jsx("option",{value:"string",children:"String"}),i.jsx("option",{value:"number",children:"Number"}),i.jsx("option",{value:"boolean",children:"Boolean"}),i.jsx("option",{value:"object",children:"Object"}),i.jsx("option",{value:"array",children:"Array"})]}),i.jsxs("select",{value:v.scope,onChange:M=>c(E,{scope:M.target.value}),children:[i.jsx("option",{value:"session",children:"Session"}),i.jsx("option",{value:"user",children:"User"}),i.jsx("option",{value:"app",children:"App"}),i.jsx("option",{value:"temp",children:"Temporary"})]}),i.jsx("input",{type:"text",value:v.description,onChange:M=>c(E,{description:M.target.value}),placeholder:"Description",style:{gridColumn:"span 2"}})]}),i.jsx("button",{className:"delete-item",onClick:()=>u(E),children:i.jsx(Le,{size:16})})]},E))]}),i.jsxs("section",{className:"section",children:[i.jsxs("div",{className:"section-header",children:[i.jsxs("h2",{className:"section-title",children:[i.jsx(_n,{size:20}),"Plugins"]}),i.jsx("div",{className:"plugin-add-dropdown",children:i.jsxs("select",{className:"btn btn-secondary btn-sm",value:"",onChange:v=>{v.target.value&&(d(v.target.value),v.target.value="")},style:{paddingRight:8},children:[i.jsx("option",{value:"",children:"+ Add Plugin..."}),i.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),i.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),i.jsx("option",{value:"LoggingPlugin",children:"Logging"}),i.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),i.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),i.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]})})]}),s.plugins.length===0?i.jsx("p",{className:"empty-message",children:"No plugins configured. Add plugins to extend agent functionality."}):s.plugins.map((v,E)=>i.jsxs("div",{className:"list-item",style:{flexDirection:"column",gap:12},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",gap:12},children:[i.jsxs("select",{value:v.type,onChange:M=>p(E,{type:M.target.value}),style:{flex:1},children:[i.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),i.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),i.jsx("option",{value:"LoggingPlugin",children:"Logging"}),i.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),i.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),i.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]}),i.jsx("button",{className:"delete-item",onClick:()=>f(E),children:i.jsx(Le,{size:16})})]}),v.type==="ReflectAndRetryToolPlugin"&&i.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[i.jsxs("div",{className:"form-group",style:{flex:0},children:[i.jsx("label",{style:{fontSize:12},children:"Max Retries"}),i.jsx("input",{type:"number",min:"0",max:"10",value:v.max_retries??3,onChange:M=>p(E,{max_retries:parseInt(M.target.value)||0}),style:{width:70}})]}),i.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[i.jsxs("span",{className:"toggle-switch",children:[i.jsx("input",{type:"checkbox",checked:v.throw_exception_if_retry_exceeded??!1,onChange:M=>p(E,{throw_exception_if_retry_exceeded:M.target.checked})}),i.jsx("span",{className:"toggle-slider"})]}),"Throw exception if retry exceeded"]})]}),v.type==="ContextFilterPlugin"&&i.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[i.jsxs("div",{className:"form-group",style:{flex:0},children:[i.jsx("label",{style:{fontSize:12},children:"Invocations to Keep"}),i.jsx("input",{type:"number",min:"1",max:"100",value:v.num_invocations_to_keep??5,onChange:M=>p(E,{num_invocations_to_keep:parseInt(M.target.value)||1}),style:{width:70}})]}),i.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Keeps only the last N conversation turns to reduce context size"})]}),v.type==="LoggingPlugin"&&i.jsx("div",{style:{paddingLeft:8},children:i.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Logs all agent events (messages, tool calls, responses) to the console"})}),v.type==="GlobalInstructionPlugin"&&i.jsxs("div",{style:{width:"100%",paddingLeft:8},children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{style:{fontSize:12},children:"Global Instruction"}),i.jsx("textarea",{value:v.global_instruction??"",onChange:M=>p(E,{global_instruction:M.target.value}),placeholder:"Instructions that apply to all agents in the app...",rows:3,style:{width:"100%"}})]}),i.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"This instruction is prepended to every agent's system prompt"})]}),v.type==="SaveFilesAsArtifactsPlugin"&&i.jsx("div",{style:{paddingLeft:8},children:i.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Automatically saves files uploaded in user messages as artifacts for later retrieval"})}),v.type==="MultimodalToolResultsPlugin"&&i.jsx("div",{style:{paddingLeft:8},children:i.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Allows tools to return multimodal content (images, files) directly to the LLM"})})]},E))]})]})}const C0="modulepreload",N0=function(e){return"/"+e},Zd={},E0=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=N0(c),c in Zd)return;Zd[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":C0,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((f,m)=>{p.addEventListener("load",f),p.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})};function ep(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function z0(e){if(Array.isArray(e))return e}function T0(e,t,n){return(t=O0(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P0(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,s,o,a,l=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(d){u=!0,s=d}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw s}}return l}}function L0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function np(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?tp(Object(n),!0).forEach(function(r){T0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function A0(e,t){if(e==null)return{};var n,r,s=R0(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}function R0(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function I0(e,t){return z0(e)||P0(e,t)||$0(e,t)||L0()}function M0(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function O0(e){var t=M0(e,"string");return typeof t=="symbol"?t:t+""}function $0(e,t){if(e){if(typeof e=="string")return ep(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ep(e,t):void 0}}function D0(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function ip(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rp(Object(n),!0).forEach(function(r){D0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function F0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(s,o){return o(s)},r)}}function pi(e){return function t(){for(var n=this,r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return s.length>=e.length?e.apply(this,s):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(s,l))}}}function bo(e){return{}.toString.call(e).includes("Object")}function B0(e){return!Object.keys(e).length}function qi(e){return typeof e=="function"}function U0(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function V0(e,t){return bo(t)||An("changeType"),Object.keys(t).some(function(n){return!U0(e,n)})&&An("changeField"),t}function W0(e){qi(e)||An("selectorType")}function H0(e){qi(e)||bo(e)||An("handlerType"),bo(e)&&Object.values(e).some(function(t){return!qi(t)})&&An("handlersType")}function q0(e){e||An("initialIsRequired"),bo(e)||An("initialType"),B0(e)&&An("initialContent")}function J0(e,t){throw new Error(e[t]||e.default)}var K0={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},An=pi(J0)(K0),_s={changes:V0,selector:W0,handler:H0,initial:q0};function Q0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};_s.initial(e),_s.handler(t);var n={current:e},r=pi(X0)(n,t),s=pi(Y0)(n),o=pi(_s.changes)(e),a=pi(G0)(n);function l(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return _s.selector(u),u(n.current)}function c(u){F0(r,s,o,a)(u)}return[l,c]}function G0(e,t){return qi(t)?t(e.current):t}function Y0(e,t){return e.current=ip(ip({},e.current),t),t}function X0(e,t,n){return qi(t)?t(e.current):Object.keys(n).forEach(function(r){var s;return(s=t[r])===null||s===void 0?void 0:s.call(t,e.current[r])}),n}var Z0={create:Q0},eb={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function tb(e){return function t(){for(var n=this,r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return s.length>=e.length?e.apply(this,s):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(s,l))}}}function nb(e){return{}.toString.call(e).includes("Object")}function rb(e){return e||sp("configIsRequired"),nb(e)||sp("configType"),e.urls?(ib(),{paths:{vs:e.urls.monacoBase}}):e}function ib(){console.warn(lg.deprecation)}function sb(e,t){throw new Error(e[t]||e.default)}var lg={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},sp=tb(sb)(lg),ob={config:rb},ab=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(s){return n.reduceRight(function(o,a){return a(o)},s)}};function cg(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],cg(e[n],t[n]))}),np(np({},e),t)}var lb={type:"cancelation",msg:"operation is manually canceled"};function za(e){var t=!1,n=new Promise(function(r,s){e.then(function(o){return t?s(lb):r(o)}),e.catch(s)});return n.cancel=function(){return t=!0},n}var cb=["monaco"],ub=Z0.create({config:eb,isInitialized:!1,resolve:null,reject:null,monaco:null}),ug=I0(ub,2),rs=ug[0],Ho=ug[1];function db(e){var t=ob.config(e),n=t.monaco,r=A0(t,cb);Ho(function(s){return{config:cg(s.config,r),monaco:n}})}function pb(){var e=rs(function(t){var n=t.monaco,r=t.isInitialized,s=t.resolve;return{monaco:n,isInitialized:r,resolve:s}});if(!e.isInitialized){if(Ho({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),za(Ta);if(window.monaco&&window.monaco.editor)return dg(window.monaco),e.resolve(window.monaco),za(Ta);ab(fb,hb)(gb)}return za(Ta)}function fb(e){return document.body.appendChild(e)}function mb(e){var t=document.createElement("script");return e&&(t.src=e),t}function hb(e){var t=rs(function(r){var s=r.config,o=r.reject;return{config:s,reject:o}}),n=mb("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function gb(){var e=rs(function(n){var r=n.config,s=n.resolve,o=n.reject;return{config:r,resolve:s,reject:o}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;dg(r),e.resolve(r)},function(n){e.reject(n)})}function dg(e){rs().monaco||Ho({monaco:e})}function xb(){return rs(function(e){var t=e.monaco;return t})}var Ta=new Promise(function(e,t){return Ho({resolve:e,reject:t})}),pg={config:db,init:pb,__getMonacoInstance:xb},yb={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Pa=yb,vb={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},bb=vb;function kb({children:e}){return Lt.createElement("div",{style:bb.container},e)}var jb=kb,wb=jb;function _b({width:e,height:t,isEditorReady:n,loading:r,_ref:s,className:o,wrapperProps:a}){return Lt.createElement("section",{style:{...Pa.wrapper,width:e,height:t},...a},!n&&Lt.createElement(wb,null,r),Lt.createElement("div",{ref:s,style:{...Pa.fullWidth,...!n&&Pa.hide},className:o}))}var Sb=_b,fg=S.memo(Sb);function Cb(e){S.useEffect(e,[])}var mg=Cb;function Nb(e,t,n=!0){let r=S.useRef(!0);S.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var yt=Nb;function ji(){}function Sr(e,t,n,r){return Eb(e,r)||zb(e,t,n,r)}function Eb(e,t){return e.editor.getModel(hg(e,t))}function zb(e,t,n,r){return e.editor.createModel(t,n,r?hg(e,r):void 0)}function hg(e,t){return e.Uri.parse(t)}function Tb({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:s,originalModelPath:o,modifiedModelPath:a,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:c=!1,theme:u="light",loading:d="Loading...",options:p={},height:f="100%",width:m="100%",className:y,wrapperProps:_={},beforeMount:L=ji,onMount:x=ji}){let[g,h]=S.useState(!1),[P,j]=S.useState(!0),b=S.useRef(null),C=S.useRef(null),w=S.useRef(null),R=S.useRef(x),N=S.useRef(L),v=S.useRef(!1);mg(()=>{let D=pg.init();return D.then(Q=>(C.current=Q)&&j(!1)).catch(Q=>(Q==null?void 0:Q.type)!=="cancelation"&&console.error("Monaco initialization: error:",Q)),()=>b.current?U():D.cancel()}),yt(()=>{if(b.current&&C.current){let D=b.current.getOriginalEditor(),Q=Sr(C.current,e||"",r||n||"text",o||"");Q!==D.getModel()&&D.setModel(Q)}},[o],g),yt(()=>{if(b.current&&C.current){let D=b.current.getModifiedEditor(),Q=Sr(C.current,t||"",s||n||"text",a||"");Q!==D.getModel()&&D.setModel(Q)}},[a],g),yt(()=>{let D=b.current.getModifiedEditor();D.getOption(C.current.editor.EditorOption.readOnly)?D.setValue(t||""):t!==D.getValue()&&(D.executeEdits("",[{range:D.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),D.pushUndoStop())},[t],g),yt(()=>{var D,Q;(Q=(D=b.current)==null?void 0:D.getModel())==null||Q.original.setValue(e||"")},[e],g),yt(()=>{let{original:D,modified:Q}=b.current.getModel();C.current.editor.setModelLanguage(D,r||n||"text"),C.current.editor.setModelLanguage(Q,s||n||"text")},[n,r,s],g),yt(()=>{var D;(D=C.current)==null||D.editor.setTheme(u)},[u],g),yt(()=>{var D;(D=b.current)==null||D.updateOptions(p)},[p],g);let E=S.useCallback(()=>{var T;if(!C.current)return;N.current(C.current);let D=Sr(C.current,e||"",r||n||"text",o||""),Q=Sr(C.current,t||"",s||n||"text",a||"");(T=b.current)==null||T.setModel({original:D,modified:Q})},[n,t,s,e,r,o,a]),M=S.useCallback(()=>{var D;!v.current&&w.current&&(b.current=C.current.editor.createDiffEditor(w.current,{automaticLayout:!0,...p}),E(),(D=C.current)==null||D.editor.setTheme(u),h(!0),v.current=!0)},[p,u,E]);S.useEffect(()=>{g&&R.current(b.current,C.current)},[g]),S.useEffect(()=>{!P&&!g&&M()},[P,g,M]);function U(){var Q,T,O,I;let D=(Q=b.current)==null?void 0:Q.getModel();l||((T=D==null?void 0:D.original)==null||T.dispose()),c||((O=D==null?void 0:D.modified)==null||O.dispose()),(I=b.current)==null||I.dispose()}return Lt.createElement(fg,{width:m,height:f,isEditorReady:g,loading:d,_ref:w,className:y,wrapperProps:_})}var Pb=Tb;S.memo(Pb);function Lb(e){let t=S.useRef();return S.useEffect(()=>{t.current=e},[e]),t.current}var Ab=Lb,Ss=new Map;function Rb({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:s,path:o,theme:a="light",line:l,loading:c="Loading...",options:u={},overrideServices:d={},saveViewState:p=!0,keepCurrentModel:f=!1,width:m="100%",height:y="100%",className:_,wrapperProps:L={},beforeMount:x=ji,onMount:g=ji,onChange:h,onValidate:P=ji}){let[j,b]=S.useState(!1),[C,w]=S.useState(!0),R=S.useRef(null),N=S.useRef(null),v=S.useRef(null),E=S.useRef(g),M=S.useRef(x),U=S.useRef(),D=S.useRef(r),Q=Ab(o),T=S.useRef(!1),O=S.useRef(!1);mg(()=>{let V=pg.init();return V.then(K=>(R.current=K)&&w(!1)).catch(K=>(K==null?void 0:K.type)!=="cancelation"&&console.error("Monaco initialization: error:",K)),()=>N.current?k():V.cancel()}),yt(()=>{var K,z,le,A;let V=Sr(R.current,e||r||"",t||s||"",o||n||"");V!==((K=N.current)==null?void 0:K.getModel())&&(p&&Ss.set(Q,(z=N.current)==null?void 0:z.saveViewState()),(le=N.current)==null||le.setModel(V),p&&((A=N.current)==null||A.restoreViewState(Ss.get(o))))},[o],j),yt(()=>{var V;(V=N.current)==null||V.updateOptions(u)},[u],j),yt(()=>{!N.current||r===void 0||(N.current.getOption(R.current.editor.EditorOption.readOnly)?N.current.setValue(r):r!==N.current.getValue()&&(O.current=!0,N.current.executeEdits("",[{range:N.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),N.current.pushUndoStop(),O.current=!1))},[r],j),yt(()=>{var K,z;let V=(K=N.current)==null?void 0:K.getModel();V&&s&&((z=R.current)==null||z.editor.setModelLanguage(V,s))},[s],j),yt(()=>{var V;l!==void 0&&((V=N.current)==null||V.revealLine(l))},[l],j),yt(()=>{var V;(V=R.current)==null||V.editor.setTheme(a)},[a],j);let I=S.useCallback(()=>{var V;if(!(!v.current||!R.current)&&!T.current){M.current(R.current);let K=o||n,z=Sr(R.current,r||e||"",t||s||"",K||"");N.current=(V=R.current)==null?void 0:V.editor.create(v.current,{model:z,automaticLayout:!0,...u},d),p&&N.current.restoreViewState(Ss.get(K)),R.current.editor.setTheme(a),l!==void 0&&N.current.revealLine(l),b(!0),T.current=!0}},[e,t,n,r,s,o,u,d,p,a,l]);S.useEffect(()=>{j&&E.current(N.current,R.current)},[j]),S.useEffect(()=>{!C&&!j&&I()},[C,j,I]),D.current=r,S.useEffect(()=>{var V,K;j&&h&&((V=U.current)==null||V.dispose(),U.current=(K=N.current)==null?void 0:K.onDidChangeModelContent(z=>{O.current||h(N.current.getValue(),z)}))},[j,h]),S.useEffect(()=>{if(j){let V=R.current.editor.onDidChangeMarkers(K=>{var le;let z=(le=N.current.getModel())==null?void 0:le.uri;if(z&&K.find(A=>A.path===z.path)){let A=R.current.editor.getModelMarkers({resource:z});P==null||P(A)}});return()=>{V==null||V.dispose()}}return()=>{}},[j,P]);function k(){var V,K;(V=U.current)==null||V.dispose(),f?p&&Ss.set(o,N.current.saveViewState()):(K=N.current.getModel())==null||K.dispose(),N.current.dispose()}return Lt.createElement(fg,{width:m,height:y,isEditorReady:j,loading:c,_ref:v,className:_,wrapperProps:L})}var Ib=Rb,Mb=S.memo(Ib),Ft=Mb;function Ob(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const $b=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Db=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Fb={};function op(e,t){return(Fb.jsx?Db:$b).test(e)}const Bb=/[ \t\n\f\r]/g;function Ub(e){return typeof e=="object"?e.type==="text"?ap(e.value):!1:ap(e)}function ap(e){return e.replace(Bb,"")===""}class is{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}is.prototype.normal={};is.prototype.property={};is.prototype.space=void 0;function gg(e,t){const n={},r={};for(const s of e)Object.assign(n,s.property),Object.assign(r,s.normal);return new is(n,r,t)}function Jl(e){return e.toLowerCase()}class ft{constructor(t,n){this.attribute=n,this.property=t}}ft.prototype.attribute="";ft.prototype.booleanish=!1;ft.prototype.boolean=!1;ft.prototype.commaOrSpaceSeparated=!1;ft.prototype.commaSeparated=!1;ft.prototype.defined=!1;ft.prototype.mustUseProperty=!1;ft.prototype.number=!1;ft.prototype.overloadedBoolean=!1;ft.prototype.property="";ft.prototype.spaceSeparated=!1;ft.prototype.space=void 0;let Vb=0;const fe=lr(),$e=lr(),Kl=lr(),X=lr(),we=lr(),Lr=lr(),gt=lr();function lr(){return 2**++Vb}const Ql=Object.freeze(Object.defineProperty({__proto__:null,boolean:fe,booleanish:$e,commaOrSpaceSeparated:gt,commaSeparated:Lr,number:X,overloadedBoolean:Kl,spaceSeparated:we},Symbol.toStringTag,{value:"Module"})),La=Object.keys(Ql);class uu extends ft{constructor(t,n,r,s){let o=-1;if(super(t,n),lp(this,"space",s),typeof r=="number")for(;++o<La.length;){const a=La[o];lp(this,La[o],(r&Ql[a])===Ql[a])}}}uu.prototype.defined=!0;function lp(e,t,n){n&&(e[t]=n)}function Kr(e){const t={},n={};for(const[r,s]of Object.entries(e.properties)){const o=new uu(r,e.transform(e.attributes||{},r),s,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[Jl(r)]=r,n[Jl(o.attribute)]=r}return new is(t,n,e.space)}const xg=Kr({properties:{ariaActiveDescendant:null,ariaAtomic:$e,ariaAutoComplete:null,ariaBusy:$e,ariaChecked:$e,ariaColCount:X,ariaColIndex:X,ariaColSpan:X,ariaControls:we,ariaCurrent:null,ariaDescribedBy:we,ariaDetails:null,ariaDisabled:$e,ariaDropEffect:we,ariaErrorMessage:null,ariaExpanded:$e,ariaFlowTo:we,ariaGrabbed:$e,ariaHasPopup:null,ariaHidden:$e,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:we,ariaLevel:X,ariaLive:null,ariaModal:$e,ariaMultiLine:$e,ariaMultiSelectable:$e,ariaOrientation:null,ariaOwns:we,ariaPlaceholder:null,ariaPosInSet:X,ariaPressed:$e,ariaReadOnly:$e,ariaRelevant:null,ariaRequired:$e,ariaRoleDescription:we,ariaRowCount:X,ariaRowIndex:X,ariaRowSpan:X,ariaSelected:$e,ariaSetSize:X,ariaSort:null,ariaValueMax:X,ariaValueMin:X,ariaValueNow:X,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function yg(e,t){return t in e?e[t]:t}function vg(e,t){return yg(e,t.toLowerCase())}const Wb=Kr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Lr,acceptCharset:we,accessKey:we,action:null,allow:null,allowFullScreen:fe,allowPaymentRequest:fe,allowUserMedia:fe,alt:null,as:null,async:fe,autoCapitalize:null,autoComplete:we,autoFocus:fe,autoPlay:fe,blocking:we,capture:null,charSet:null,checked:fe,cite:null,className:we,cols:X,colSpan:null,content:null,contentEditable:$e,controls:fe,controlsList:we,coords:X|Lr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:fe,defer:fe,dir:null,dirName:null,disabled:fe,download:Kl,draggable:$e,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:fe,formTarget:null,headers:we,height:X,hidden:Kl,high:X,href:null,hrefLang:null,htmlFor:we,httpEquiv:we,id:null,imageSizes:null,imageSrcSet:null,inert:fe,inputMode:null,integrity:null,is:null,isMap:fe,itemId:null,itemProp:we,itemRef:we,itemScope:fe,itemType:we,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:fe,low:X,manifest:null,max:null,maxLength:X,media:null,method:null,min:null,minLength:X,multiple:fe,muted:fe,name:null,nonce:null,noModule:fe,noValidate:fe,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:fe,optimum:X,pattern:null,ping:we,placeholder:null,playsInline:fe,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:fe,referrerPolicy:null,rel:we,required:fe,reversed:fe,rows:X,rowSpan:X,sandbox:we,scope:null,scoped:fe,seamless:fe,selected:fe,shadowRootClonable:fe,shadowRootDelegatesFocus:fe,shadowRootMode:null,shape:null,size:X,sizes:null,slot:null,span:X,spellCheck:$e,src:null,srcDoc:null,srcLang:null,srcSet:null,start:X,step:null,style:null,tabIndex:X,target:null,title:null,translate:null,type:null,typeMustMatch:fe,useMap:null,value:$e,width:X,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:we,axis:null,background:null,bgColor:null,border:X,borderColor:null,bottomMargin:X,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:fe,declare:fe,event:null,face:null,frame:null,frameBorder:null,hSpace:X,leftMargin:X,link:null,longDesc:null,lowSrc:null,marginHeight:X,marginWidth:X,noResize:fe,noHref:fe,noShade:fe,noWrap:fe,object:null,profile:null,prompt:null,rev:null,rightMargin:X,rules:null,scheme:null,scrolling:$e,standby:null,summary:null,text:null,topMargin:X,valueType:null,version:null,vAlign:null,vLink:null,vSpace:X,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:fe,disableRemotePlayback:fe,prefix:null,property:null,results:X,security:null,unselectable:null},space:"html",transform:vg}),Hb=Kr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:gt,accentHeight:X,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:X,amplitude:X,arabicForm:null,ascent:X,attributeName:null,attributeType:null,azimuth:X,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:X,by:null,calcMode:null,capHeight:X,className:we,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:X,diffuseConstant:X,direction:null,display:null,dur:null,divisor:X,dominantBaseline:null,download:fe,dx:null,dy:null,edgeMode:null,editable:null,elevation:X,enableBackground:null,end:null,event:null,exponent:X,externalResourcesRequired:null,fill:null,fillOpacity:X,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Lr,g2:Lr,glyphName:Lr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:X,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:X,horizOriginX:X,horizOriginY:X,id:null,ideographic:X,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:X,k:X,k1:X,k2:X,k3:X,k4:X,kernelMatrix:gt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:X,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:X,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:X,overlineThickness:X,paintOrder:null,panose1:null,path:null,pathLength:X,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:we,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:X,pointsAtY:X,pointsAtZ:X,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:gt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:gt,rev:gt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:gt,requiredFeatures:gt,requiredFonts:gt,requiredFormats:gt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:X,specularExponent:X,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:X,strikethroughThickness:X,string:null,stroke:null,strokeDashArray:gt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:X,strokeOpacity:X,strokeWidth:null,style:null,surfaceScale:X,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:gt,tabIndex:X,tableValues:null,target:null,targetX:X,targetY:X,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:gt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:X,underlineThickness:X,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:X,values:null,vAlphabetic:X,vMathematical:X,vectorEffect:null,vHanging:X,vIdeographic:X,version:null,vertAdvY:X,vertOriginX:X,vertOriginY:X,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:X,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:yg}),bg=Kr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),kg=Kr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:vg}),jg=Kr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),qb={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Jb=/[A-Z]/g,cp=/-[a-z]/g,Kb=/^data[-\w.:]+$/i;function Qb(e,t){const n=Jl(t);let r=t,s=ft;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Kb.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(cp,Yb);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!cp.test(o)){let a=o.replace(Jb,Gb);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a}}s=uu}return new s(r,t)}function Gb(e){return"-"+e.toLowerCase()}function Yb(e){return e.charAt(1).toUpperCase()}const Xb=gg([xg,Wb,bg,kg,jg],"html"),du=gg([xg,Hb,bg,kg,jg],"svg");function Zb(e){return e.join(" ").trim()}var pu={},up=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,ek=/\n/g,tk=/^\s*/,nk=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,rk=/^:\s*/,ik=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,sk=/^[;\s]*/,ok=/^\s+|\s+$/g,ak=`
`,dp="/",pp="*",qn="",lk="comment",ck="declaration";function uk(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function s(y){var _=y.match(ek);_&&(n+=_.length);var L=y.lastIndexOf(ak);r=~L?y.length-L:r+y.length}function o(){var y={line:n,column:r};return function(_){return _.position=new a(y),u(),_}}function a(y){this.start=y,this.end={line:n,column:r},this.source=t.source}a.prototype.content=e;function l(y){var _=new Error(t.source+":"+n+":"+r+": "+y);if(_.reason=y,_.filename=t.source,_.line=n,_.column=r,_.source=e,!t.silent)throw _}function c(y){var _=y.exec(e);if(_){var L=_[0];return s(L),e=e.slice(L.length),_}}function u(){c(tk)}function d(y){var _;for(y=y||[];_=p();)_!==!1&&y.push(_);return y}function p(){var y=o();if(!(dp!=e.charAt(0)||pp!=e.charAt(1))){for(var _=2;qn!=e.charAt(_)&&(pp!=e.charAt(_)||dp!=e.charAt(_+1));)++_;if(_+=2,qn===e.charAt(_-1))return l("End of comment missing");var L=e.slice(2,_-2);return r+=2,s(L),e=e.slice(_),r+=2,y({type:lk,comment:L})}}function f(){var y=o(),_=c(nk);if(_){if(p(),!c(rk))return l("property missing ':'");var L=c(ik),x=y({type:ck,property:fp(_[0].replace(up,qn)),value:L?fp(L[0].replace(up,qn)):qn});return c(sk),x}}function m(){var y=[];d(y);for(var _;_=f();)_!==!1&&(y.push(_),d(y));return y}return u(),m()}function fp(e){return e?e.replace(ok,qn):qn}var dk=uk,pk=Ws&&Ws.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(pu,"__esModule",{value:!0});pu.default=mk;const fk=pk(dk);function mk(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,fk.default)(e),s=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:a,value:l}=o;s?t(a,l,o):l&&(n=n||{},n[a]=l)}),n}var qo={};Object.defineProperty(qo,"__esModule",{value:!0});qo.camelCase=void 0;var hk=/^--[a-zA-Z0-9_-]+$/,gk=/-([a-z])/g,xk=/^[^-]+$/,yk=/^-(webkit|moz|ms|o|khtml)-/,vk=/^-(ms)-/,bk=function(e){return!e||xk.test(e)||hk.test(e)},kk=function(e,t){return t.toUpperCase()},mp=function(e,t){return"".concat(t,"-")},jk=function(e,t){return t===void 0&&(t={}),bk(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(vk,mp):e=e.replace(yk,mp),e.replace(gk,kk))};qo.camelCase=jk;var wk=Ws&&Ws.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},_k=wk(pu),Sk=qo;function Gl(e,t){var n={};return!e||typeof e!="string"||(0,_k.default)(e,function(r,s){r&&s&&(n[(0,Sk.camelCase)(r,t)]=s)}),n}Gl.default=Gl;var Ck=Gl;const Nk=_o(Ck),wg=_g("end"),fu=_g("start");function _g(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Ek(e){const t=fu(e),n=wg(e);if(t&&n)return{start:t,end:n}}function wi(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?hp(e.position):"start"in e||"end"in e?hp(e):"line"in e||"column"in e?Yl(e):""}function Yl(e){return gp(e&&e.line)+":"+gp(e&&e.column)}function hp(e){return Yl(e&&e.start)+"-"+Yl(e&&e.end)}function gp(e){return e&&typeof e=="number"?e:1}class tt extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let s="",o={},a=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?s=t:!o.cause&&t&&(a=!0,s=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?o.ruleId=r:(o.source=r.slice(0,c),o.ruleId=r.slice(c+1))}if(!o.place&&o.ancestors&&o.ancestors){const c=o.ancestors[o.ancestors.length-1];c&&(o.place=c.position)}const l=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=s,this.line=l?l.line:void 0,this.name=wi(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=a&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}tt.prototype.file="";tt.prototype.name="";tt.prototype.reason="";tt.prototype.message="";tt.prototype.stack="";tt.prototype.column=void 0;tt.prototype.line=void 0;tt.prototype.ancestors=void 0;tt.prototype.cause=void 0;tt.prototype.fatal=void 0;tt.prototype.place=void 0;tt.prototype.ruleId=void 0;tt.prototype.source=void 0;const mu={}.hasOwnProperty,zk=new Map,Tk=/[A-Z]/g,Pk=new Set(["table","tbody","thead","tfoot","tr"]),Lk=new Set(["td","th"]),Sg="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Ak(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=Bk(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Fk(n,t.jsx,t.jsxs)}const s={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?du:Xb,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=Cg(s,e,void 0);return o&&typeof o!="string"?o:s.create(e,s.Fragment,{children:o||void 0},void 0)}function Cg(e,t,n){if(t.type==="element")return Rk(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return Ik(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return Ok(e,t,n);if(t.type==="mdxjsEsm")return Mk(e,t);if(t.type==="root")return $k(e,t,n);if(t.type==="text")return Dk(e,t)}function Rk(e,t,n){const r=e.schema;let s=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(s=du,e.schema=s),e.ancestors.push(t);const o=Eg(e,t.tagName,!1),a=Uk(e,t);let l=gu(e,t);return Pk.has(t.tagName)&&(l=l.filter(function(c){return typeof c=="string"?!Ub(c):!0})),Ng(e,a,o,t),hu(a,l),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function Ik(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Ji(e,t.position)}function Mk(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Ji(e,t.position)}function Ok(e,t,n){const r=e.schema;let s=r;t.name==="svg"&&r.space==="html"&&(s=du,e.schema=s),e.ancestors.push(t);const o=t.name===null?e.Fragment:Eg(e,t.name,!0),a=Vk(e,t),l=gu(e,t);return Ng(e,a,o,t),hu(a,l),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function $k(e,t,n){const r={};return hu(r,gu(e,t)),e.create(t,e.Fragment,r,n)}function Dk(e,t){return t.value}function Ng(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function hu(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function Fk(e,t,n){return r;function r(s,o,a,l){const u=Array.isArray(a.children)?n:t;return l?u(o,a,l):u(o,a)}}function Bk(e,t){return n;function n(r,s,o,a){const l=Array.isArray(o.children),c=fu(r);return t(s,o,a,l,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function Uk(e,t){const n={};let r,s;for(s in t.properties)if(s!=="children"&&mu.call(t.properties,s)){const o=Wk(e,s,t.properties[s]);if(o){const[a,l]=o;e.tableCellAlignToStyle&&a==="align"&&typeof l=="string"&&Lk.has(t.tagName)?r=l:n[a]=l}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function Vk(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const a=o.expression;a.type;const l=a.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument))}else Ji(e,t.position);else{const s=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const l=r.value.data.estree.body[0];l.type,o=e.evaluater.evaluateExpression(l.expression)}else Ji(e,t.position);else o=r.value===null?!0:r.value;n[s]=o}return n}function gu(e,t){const n=[];let r=-1;const s=e.passKeys?new Map:zk;for(;++r<t.children.length;){const o=t.children[r];let a;if(e.passKeys){const c=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(c){const u=s.get(c)||0;a=c+"-"+u,s.set(c,u+1)}}const l=Cg(e,o,a);l!==void 0&&n.push(l)}return n}function Wk(e,t,n){const r=Qb(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Ob(n):Zb(n)),r.property==="style"){let s=typeof n=="object"?n:Hk(e,String(n));return e.stylePropertyNameCase==="css"&&(s=qk(s)),["style",s]}return[e.elementAttributeNameCase==="react"&&r.space?qb[r.property]||r.property:r.attribute,n]}}function Hk(e,t){try{return Nk(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,s=new tt("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw s.file=e.filePath||void 0,s.url=Sg+"#cannot-parse-style-attribute",s}}function Eg(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const s=t.split(".");let o=-1,a;for(;++o<s.length;){const l=op(s[o])?{type:"Identifier",name:s[o]}:{type:"Literal",value:s[o]};a=a?{type:"MemberExpression",object:a,property:l,computed:!!(o&&l.type==="Literal"),optional:!1}:l}r=a}else r=op(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const s=r.value;return mu.call(e.components,s)?e.components[s]:s}if(e.evaluater)return e.evaluater.evaluateExpression(r);Ji(e)}function Ji(e,t){const n=new tt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Sg+"#cannot-handle-mdx-estrees-without-createevaluater",n}function qk(e){const t={};let n;for(n in e)mu.call(e,n)&&(t[Jk(n)]=e[n]);return t}function Jk(e){let t=e.replace(Tk,Kk);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function Kk(e){return"-"+e.toLowerCase()}const Aa={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Qk={};function Gk(e,t){const n=Qk,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,s=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return zg(e,r,s)}function zg(e,t,n){if(Yk(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return xp(e.children,t,n)}return Array.isArray(e)?xp(e,t,n):""}function xp(e,t,n){const r=[];let s=-1;for(;++s<e.length;)r[s]=zg(e[s],t,n);return r.join("")}function Yk(e){return!!(e&&typeof e=="object")}const yp=document.createElement("i");function xu(e){const t="&"+e+";";yp.innerHTML=t;const n=yp.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function en(e,t,n,r){const s=e.length;let o=0,a;if(t<0?t=-t>s?0:s+t:t=t>s?s:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);o<r.length;)a=r.slice(o,o+1e4),a.unshift(t,0),e.splice(...a),o+=1e4,t+=1e4}function Tt(e,t){return e.length>0?(en(e,e.length,0,t),e):t}const vp={}.hasOwnProperty;function Xk(e){const t={};let n=-1;for(;++n<e.length;)Zk(t,e[n]);return t}function Zk(e,t){let n;for(n in t){const s=(vp.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let a;if(o)for(a in o){vp.call(s,a)||(s[a]=[]);const l=o[a];ej(s[a],Array.isArray(l)?l:l?[l]:[])}}}function ej(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);en(e,0,0,r)}function Tg(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Ar(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Kt=Bn(/[A-Za-z]/),bt=Bn(/[\dA-Za-z]/),tj=Bn(/[#-'*+\--9=?A-Z^-~]/);function Xl(e){return e!==null&&(e<32||e===127)}const Zl=Bn(/\d/),nj=Bn(/[\dA-Fa-f]/),rj=Bn(/[!-/:-@[-`{-~]/);function de(e){return e!==null&&e<-2}function pt(e){return e!==null&&(e<0||e===32)}function be(e){return e===-2||e===-1||e===32}const ij=Bn(new RegExp("\\p{P}|\\p{S}","u")),sj=Bn(/\s/);function Bn(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Qr(e){const t=[];let n=-1,r=0,s=0;for(;++n<e.length;){const o=e.charCodeAt(n);let a="";if(o===37&&bt(e.charCodeAt(n+1))&&bt(e.charCodeAt(n+2)))s=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(a=String.fromCharCode(o));else if(o>55295&&o<57344){const l=e.charCodeAt(n+1);o<56320&&l>56319&&l<57344?(a=String.fromCharCode(o,l),s=1):a="�"}else a=String.fromCharCode(o);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+s+1,a=""),s&&(n+=s,s=0)}return t.join("")+e.slice(r)}function Se(e,t,n,r){const s=r?r-1:Number.POSITIVE_INFINITY;let o=0;return a;function a(c){return be(c)?(e.enter(n),l(c)):t(c)}function l(c){return be(c)&&o++<s?(e.consume(c),l):(e.exit(n),t(c))}}const oj={tokenize:aj};function aj(e){const t=e.attempt(this.parser.constructs.contentInitial,r,s);let n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),Se(e,t,"linePrefix")}function s(l){return e.enter("paragraph"),o(l)}function o(l){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,a(l)}function a(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return de(l)?(e.consume(l),e.exit("chunkText"),o):(e.consume(l),a)}}const lj={tokenize:cj},bp={tokenize:uj};function cj(e){const t=this,n=[];let r=0,s,o,a;return l;function l(h){if(r<n.length){const P=n[r];return t.containerState=P[1],e.attempt(P[0].continuation,c,u)(h)}return u(h)}function c(h){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,s&&g();const P=t.events.length;let j=P,b;for(;j--;)if(t.events[j][0]==="exit"&&t.events[j][1].type==="chunkFlow"){b=t.events[j][1].end;break}x(r);let C=P;for(;C<t.events.length;)t.events[C][1].end={...b},C++;return en(t.events,j+1,0,t.events.slice(P)),t.events.length=C,u(h)}return l(h)}function u(h){if(r===n.length){if(!s)return f(h);if(s.currentConstruct&&s.currentConstruct.concrete)return y(h);t.interrupt=!!(s.currentConstruct&&!s._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(bp,d,p)(h)}function d(h){return s&&g(),x(r),f(h)}function p(h){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,y(h)}function f(h){return t.containerState={},e.attempt(bp,m,y)(h)}function m(h){return r++,n.push([t.currentConstruct,t.containerState]),f(h)}function y(h){if(h===null){s&&g(),x(0),e.consume(h);return}return s=s||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:s,contentType:"flow",previous:o}),_(h)}function _(h){if(h===null){L(e.exit("chunkFlow"),!0),x(0),e.consume(h);return}return de(h)?(e.consume(h),L(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(h),_)}function L(h,P){const j=t.sliceStream(h);if(P&&j.push(null),h.previous=o,o&&(o.next=h),o=h,s.defineSkip(h.start),s.write(j),t.parser.lazy[h.start.line]){let b=s.events.length;for(;b--;)if(s.events[b][1].start.offset<a&&(!s.events[b][1].end||s.events[b][1].end.offset>a))return;const C=t.events.length;let w=C,R,N;for(;w--;)if(t.events[w][0]==="exit"&&t.events[w][1].type==="chunkFlow"){if(R){N=t.events[w][1].end;break}R=!0}for(x(r),b=C;b<t.events.length;)t.events[b][1].end={...N},b++;en(t.events,w+1,0,t.events.slice(C)),t.events.length=b}}function x(h){let P=n.length;for(;P-- >h;){const j=n[P];t.containerState=j[1],j[0].exit.call(t,e)}n.length=h}function g(){s.write([null]),o=void 0,s=void 0,t.containerState._closeFlow=void 0}}function uj(e,t,n){return Se(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function kp(e){if(e===null||pt(e)||sj(e))return 1;if(ij(e))return 2}function yu(e,t,n){const r=[];let s=-1;for(;++s<e.length;){const o=e[s].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const ec={name:"attention",resolveAll:dj,tokenize:pj};function dj(e,t){let n=-1,r,s,o,a,l,c,u,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p={...e[r][1].end},f={...e[n][1].start};jp(p,-c),jp(f,c),a={type:c>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},l={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},o={type:c>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},s={type:c>1?"strong":"emphasis",start:{...a.start},end:{...l.end}},e[r][1].end={...a.start},e[n][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=Tt(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=Tt(u,[["enter",s,t],["enter",a,t],["exit",a,t],["enter",o,t]]),u=Tt(u,yu(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=Tt(u,[["exit",o,t],["enter",l,t],["exit",l,t],["exit",s,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,u=Tt(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,en(e,r-1,n-r+3,u),n=r+u.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function pj(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,s=kp(r);let o;return a;function a(c){return o=c,e.enter("attentionSequence"),l(c)}function l(c){if(c===o)return e.consume(c),l;const u=e.exit("attentionSequence"),d=kp(c),p=!d||d===2&&s||n.includes(c),f=!s||s===2&&d||n.includes(r);return u._open=!!(o===42?p:p&&(s||!f)),u._close=!!(o===42?f:f&&(d||!p)),t(c)}}function jp(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const fj={name:"autolink",tokenize:mj};function mj(e,t,n){let r=0;return s;function s(m){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(m){return Kt(m)?(e.consume(m),a):m===64?n(m):u(m)}function a(m){return m===43||m===45||m===46||bt(m)?(r=1,l(m)):u(m)}function l(m){return m===58?(e.consume(m),r=0,c):(m===43||m===45||m===46||bt(m))&&r++<32?(e.consume(m),l):(r=0,u(m))}function c(m){return m===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):m===null||m===32||m===60||Xl(m)?n(m):(e.consume(m),c)}function u(m){return m===64?(e.consume(m),d):tj(m)?(e.consume(m),u):n(m)}function d(m){return bt(m)?p(m):n(m)}function p(m){return m===46?(e.consume(m),r=0,d):m===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):f(m)}function f(m){if((m===45||bt(m))&&r++<63){const y=m===45?f:p;return e.consume(m),y}return n(m)}}const Jo={partial:!0,tokenize:hj};function hj(e,t,n){return r;function r(o){return be(o)?Se(e,s,"linePrefix")(o):s(o)}function s(o){return o===null||de(o)?t(o):n(o)}}const Pg={continuation:{tokenize:xj},exit:yj,name:"blockQuote",tokenize:gj};function gj(e,t,n){const r=this;return s;function s(a){if(a===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),o}return n(a)}function o(a){return be(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function xj(e,t,n){const r=this;return s;function s(a){return be(a)?Se(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):o(a)}function o(a){return e.attempt(Pg,t,n)(a)}}function yj(e){e.exit("blockQuote")}const Lg={name:"characterEscape",tokenize:vj};function vj(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),s}function s(o){return rj(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const Ag={name:"characterReference",tokenize:bj};function bj(e,t,n){const r=this;let s=0,o,a;return l;function l(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),c}function c(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,a=bt,d(p))}function u(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,a=nj,d):(e.enter("characterReferenceValue"),o=7,a=Zl,d(p))}function d(p){if(p===59&&s){const f=e.exit("characterReferenceValue");return a===bt&&!xu(r.sliceSerialize(f))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(p)&&s++<o?(e.consume(p),d):n(p)}}const wp={partial:!0,tokenize:jj},_p={concrete:!0,name:"codeFenced",tokenize:kj};function kj(e,t,n){const r=this,s={partial:!0,tokenize:j};let o=0,a=0,l;return c;function c(b){return u(b)}function u(b){const C=r.events[r.events.length-1];return o=C&&C[1].type==="linePrefix"?C[2].sliceSerialize(C[1],!0).length:0,l=b,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(b)}function d(b){return b===l?(a++,e.consume(b),d):a<3?n(b):(e.exit("codeFencedFenceSequence"),be(b)?Se(e,p,"whitespace")(b):p(b))}function p(b){return b===null||de(b)?(e.exit("codeFencedFence"),r.interrupt?t(b):e.check(wp,_,P)(b)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(b))}function f(b){return b===null||de(b)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(b)):be(b)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Se(e,m,"whitespace")(b)):b===96&&b===l?n(b):(e.consume(b),f)}function m(b){return b===null||de(b)?p(b):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),y(b))}function y(b){return b===null||de(b)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(b)):b===96&&b===l?n(b):(e.consume(b),y)}function _(b){return e.attempt(s,P,L)(b)}function L(b){return e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),x}function x(b){return o>0&&be(b)?Se(e,g,"linePrefix",o+1)(b):g(b)}function g(b){return b===null||de(b)?e.check(wp,_,P)(b):(e.enter("codeFlowValue"),h(b))}function h(b){return b===null||de(b)?(e.exit("codeFlowValue"),g(b)):(e.consume(b),h)}function P(b){return e.exit("codeFenced"),t(b)}function j(b,C,w){let R=0;return N;function N(D){return b.enter("lineEnding"),b.consume(D),b.exit("lineEnding"),v}function v(D){return b.enter("codeFencedFence"),be(D)?Se(b,E,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(D):E(D)}function E(D){return D===l?(b.enter("codeFencedFenceSequence"),M(D)):w(D)}function M(D){return D===l?(R++,b.consume(D),M):R>=a?(b.exit("codeFencedFenceSequence"),be(D)?Se(b,U,"whitespace")(D):U(D)):w(D)}function U(D){return D===null||de(D)?(b.exit("codeFencedFence"),C(D)):w(D)}}}function jj(e,t,n){const r=this;return s;function s(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}const Ra={name:"codeIndented",tokenize:_j},wj={partial:!0,tokenize:Sj};function _j(e,t,n){const r=this;return s;function s(u){return e.enter("codeIndented"),Se(e,o,"linePrefix",5)(u)}function o(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?a(u):n(u)}function a(u){return u===null?c(u):de(u)?e.attempt(wj,a,c)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||de(u)?(e.exit("codeFlowValue"),a(u)):(e.consume(u),l)}function c(u){return e.exit("codeIndented"),t(u)}}function Sj(e,t,n){const r=this;return s;function s(a){return r.parser.lazy[r.now().line]?n(a):de(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),s):Se(e,o,"linePrefix",5)(a)}function o(a){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):de(a)?s(a):n(a)}}const Cj={name:"codeText",previous:Ej,resolve:Nj,tokenize:zj};function Nj(e){let t=e.length-4,n=3,r,s;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)s===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(s=r):(r===t||e[r][1].type==="lineEnding")&&(e[s][1].type="codeTextData",r!==s+2&&(e[s][1].end=e[r-1][1].end,e.splice(s+2,r-s-2),t-=r-s-2,r=s+2),s=void 0);return e}function Ej(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function zj(e,t,n){let r=0,s,o;return a;function a(p){return e.enter("codeText"),e.enter("codeTextSequence"),l(p)}function l(p){return p===96?(e.consume(p),r++,l):(e.exit("codeTextSequence"),c(p))}function c(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),c):p===96?(o=e.enter("codeTextSequence"),s=0,d(p)):de(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),c):(e.enter("codeTextData"),u(p))}function u(p){return p===null||p===32||p===96||de(p)?(e.exit("codeTextData"),c(p)):(e.consume(p),u)}function d(p){return p===96?(e.consume(p),s++,d):s===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(o.type="codeTextData",u(p))}}class Tj{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const s=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-s,Number.POSITIVE_INFINITY);return r&&ii(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),ii(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),ii(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);ii(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);ii(this.left,n.reverse())}}}function ii(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Rg(e){const t={};let n=-1,r,s,o,a,l,c,u;const d=new Tj(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,o=0,o<c.length&&c[o][1].type==="lineEndingBlank"&&(o+=2),o<c.length&&c[o][1].type==="content"))for(;++o<c.length&&c[o][1].type!=="content";)c[o][1].type==="chunkText"&&(c[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Pj(d,n)),n=t[n],u=!0);else if(r[1]._container){for(o=n,s=void 0;o--;)if(a=d.get(o),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(s&&(d.get(s)[1].type="lineEndingBlank"),a[1].type="lineEnding",s=o);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;s&&(r[1].end={...d.get(s)[1].start},l=d.slice(s,n),l.unshift(r),d.splice(s,n-s+1,l))}}return en(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function Pj(e,t){const n=e.get(t)[1],r=e.get(t)[2];let s=t-1;const o=[];let a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const l=a.events,c=[],u={};let d,p,f=-1,m=n,y=0,_=0;const L=[_];for(;m;){for(;e.get(++s)[1]!==m;);o.push(s),m._tokenizer||(d=r.sliceStream(m),m.next||d.push(null),p&&a.defineSkip(m.start),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),p=m,m=m.next}for(m=n;++f<l.length;)l[f][0]==="exit"&&l[f-1][0]==="enter"&&l[f][1].type===l[f-1][1].type&&l[f][1].start.line!==l[f][1].end.line&&(_=f+1,L.push(_),m._tokenizer=void 0,m.previous=void 0,m=m.next);for(a.events=[],m?(m._tokenizer=void 0,m.previous=void 0):L.pop(),f=L.length;f--;){const x=l.slice(L[f],L[f+1]),g=o.pop();c.push([g,g+x.length-1]),e.splice(g,2,x)}for(c.reverse(),f=-1;++f<c.length;)u[y+c[f][0]]=y+c[f][1],y+=c[f][1]-c[f][0]-1;return u}const Lj={resolve:Rj,tokenize:Ij},Aj={partial:!0,tokenize:Mj};function Rj(e){return Rg(e),e}function Ij(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),s(l)}function s(l){return l===null?o(l):de(l)?e.check(Aj,a,o)(l):(e.consume(l),s)}function o(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function a(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,s}}function Mj(e,t,n){const r=this;return s;function s(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),Se(e,o,"linePrefix")}function o(a){if(a===null||de(a))return n(a);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function Ig(e,t,n,r,s,o,a,l,c){const u=c||Number.POSITIVE_INFINITY;let d=0;return p;function p(x){return x===60?(e.enter(r),e.enter(s),e.enter(o),e.consume(x),e.exit(o),f):x===null||x===32||x===41||Xl(x)?n(x):(e.enter(r),e.enter(a),e.enter(l),e.enter("chunkString",{contentType:"string"}),_(x))}function f(x){return x===62?(e.enter(o),e.consume(x),e.exit(o),e.exit(s),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),m(x))}function m(x){return x===62?(e.exit("chunkString"),e.exit(l),f(x)):x===null||x===60||de(x)?n(x):(e.consume(x),x===92?y:m)}function y(x){return x===60||x===62||x===92?(e.consume(x),m):m(x)}function _(x){return!d&&(x===null||x===41||pt(x))?(e.exit("chunkString"),e.exit(l),e.exit(a),e.exit(r),t(x)):d<u&&x===40?(e.consume(x),d++,_):x===41?(e.consume(x),d--,_):x===null||x===32||x===40||Xl(x)?n(x):(e.consume(x),x===92?L:_)}function L(x){return x===40||x===41||x===92?(e.consume(x),_):_(x)}}function Mg(e,t,n,r,s,o){const a=this;let l=0,c;return u;function u(m){return e.enter(r),e.enter(s),e.consume(m),e.exit(s),e.enter(o),d}function d(m){return l>999||m===null||m===91||m===93&&!c||m===94&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?n(m):m===93?(e.exit(o),e.enter(s),e.consume(m),e.exit(s),e.exit(r),t):de(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),p(m))}function p(m){return m===null||m===91||m===93||de(m)||l++>999?(e.exit("chunkString"),d(m)):(e.consume(m),c||(c=!be(m)),m===92?f:p)}function f(m){return m===91||m===92||m===93?(e.consume(m),l++,p):p(m)}}function Og(e,t,n,r,s,o){let a;return l;function l(f){return f===34||f===39||f===40?(e.enter(r),e.enter(s),e.consume(f),e.exit(s),a=f===40?41:f,c):n(f)}function c(f){return f===a?(e.enter(s),e.consume(f),e.exit(s),e.exit(r),t):(e.enter(o),u(f))}function u(f){return f===a?(e.exit(o),c(a)):f===null?n(f):de(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),Se(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===a||f===null||de(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?p:d)}function p(f){return f===a||f===92?(e.consume(f),d):d(f)}}function _i(e,t){let n;return r;function r(s){return de(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),n=!0,r):be(s)?Se(e,r,n?"linePrefix":"lineSuffix")(s):t(s)}}const Oj={name:"definition",tokenize:Dj},$j={partial:!0,tokenize:Fj};function Dj(e,t,n){const r=this;let s;return o;function o(m){return e.enter("definition"),a(m)}function a(m){return Mg.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(m)}function l(m){return s=Ar(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),m===58?(e.enter("definitionMarker"),e.consume(m),e.exit("definitionMarker"),c):n(m)}function c(m){return pt(m)?_i(e,u)(m):u(m)}function u(m){return Ig(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(m)}function d(m){return e.attempt($j,p,p)(m)}function p(m){return be(m)?Se(e,f,"whitespace")(m):f(m)}function f(m){return m===null||de(m)?(e.exit("definition"),r.parser.defined.push(s),t(m)):n(m)}}function Fj(e,t,n){return r;function r(l){return pt(l)?_i(e,s)(l):n(l)}function s(l){return Og(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function o(l){return be(l)?Se(e,a,"whitespace")(l):a(l)}function a(l){return l===null||de(l)?t(l):n(l)}}const Bj={name:"hardBreakEscape",tokenize:Uj};function Uj(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),s}function s(o){return de(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const Vj={name:"headingAtx",resolve:Wj,tokenize:Hj};function Wj(e,t){let n=e.length-2,r=3,s,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(s={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},en(e,r,n-r+1,[["enter",s,t],["enter",o,t],["exit",o,t],["exit",s,t]])),e}function Hj(e,t,n){let r=0;return s;function s(d){return e.enter("atxHeading"),o(d)}function o(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&r++<6?(e.consume(d),a):d===null||pt(d)?(e.exit("atxHeadingSequence"),l(d)):n(d)}function l(d){return d===35?(e.enter("atxHeadingSequence"),c(d)):d===null||de(d)?(e.exit("atxHeading"),t(d)):be(d)?Se(e,l,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function c(d){return d===35?(e.consume(d),c):(e.exit("atxHeadingSequence"),l(d))}function u(d){return d===null||d===35||pt(d)?(e.exit("atxHeadingText"),l(d)):(e.consume(d),u)}}const qj=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Sp=["pre","script","style","textarea"],Jj={concrete:!0,name:"htmlFlow",resolveTo:Gj,tokenize:Yj},Kj={partial:!0,tokenize:Zj},Qj={partial:!0,tokenize:Xj};function Gj(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Yj(e,t,n){const r=this;let s,o,a,l,c;return u;function u(z){return d(z)}function d(z){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(z),p}function p(z){return z===33?(e.consume(z),f):z===47?(e.consume(z),o=!0,_):z===63?(e.consume(z),s=3,r.interrupt?t:k):Kt(z)?(e.consume(z),a=String.fromCharCode(z),L):n(z)}function f(z){return z===45?(e.consume(z),s=2,m):z===91?(e.consume(z),s=5,l=0,y):Kt(z)?(e.consume(z),s=4,r.interrupt?t:k):n(z)}function m(z){return z===45?(e.consume(z),r.interrupt?t:k):n(z)}function y(z){const le="CDATA[";return z===le.charCodeAt(l++)?(e.consume(z),l===le.length?r.interrupt?t:E:y):n(z)}function _(z){return Kt(z)?(e.consume(z),a=String.fromCharCode(z),L):n(z)}function L(z){if(z===null||z===47||z===62||pt(z)){const le=z===47,A=a.toLowerCase();return!le&&!o&&Sp.includes(A)?(s=1,r.interrupt?t(z):E(z)):qj.includes(a.toLowerCase())?(s=6,le?(e.consume(z),x):r.interrupt?t(z):E(z)):(s=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(z):o?g(z):h(z))}return z===45||bt(z)?(e.consume(z),a+=String.fromCharCode(z),L):n(z)}function x(z){return z===62?(e.consume(z),r.interrupt?t:E):n(z)}function g(z){return be(z)?(e.consume(z),g):N(z)}function h(z){return z===47?(e.consume(z),N):z===58||z===95||Kt(z)?(e.consume(z),P):be(z)?(e.consume(z),h):N(z)}function P(z){return z===45||z===46||z===58||z===95||bt(z)?(e.consume(z),P):j(z)}function j(z){return z===61?(e.consume(z),b):be(z)?(e.consume(z),j):h(z)}function b(z){return z===null||z===60||z===61||z===62||z===96?n(z):z===34||z===39?(e.consume(z),c=z,C):be(z)?(e.consume(z),b):w(z)}function C(z){return z===c?(e.consume(z),c=null,R):z===null||de(z)?n(z):(e.consume(z),C)}function w(z){return z===null||z===34||z===39||z===47||z===60||z===61||z===62||z===96||pt(z)?j(z):(e.consume(z),w)}function R(z){return z===47||z===62||be(z)?h(z):n(z)}function N(z){return z===62?(e.consume(z),v):n(z)}function v(z){return z===null||de(z)?E(z):be(z)?(e.consume(z),v):n(z)}function E(z){return z===45&&s===2?(e.consume(z),Q):z===60&&s===1?(e.consume(z),T):z===62&&s===4?(e.consume(z),V):z===63&&s===3?(e.consume(z),k):z===93&&s===5?(e.consume(z),I):de(z)&&(s===6||s===7)?(e.exit("htmlFlowData"),e.check(Kj,K,M)(z)):z===null||de(z)?(e.exit("htmlFlowData"),M(z)):(e.consume(z),E)}function M(z){return e.check(Qj,U,K)(z)}function U(z){return e.enter("lineEnding"),e.consume(z),e.exit("lineEnding"),D}function D(z){return z===null||de(z)?M(z):(e.enter("htmlFlowData"),E(z))}function Q(z){return z===45?(e.consume(z),k):E(z)}function T(z){return z===47?(e.consume(z),a="",O):E(z)}function O(z){if(z===62){const le=a.toLowerCase();return Sp.includes(le)?(e.consume(z),V):E(z)}return Kt(z)&&a.length<8?(e.consume(z),a+=String.fromCharCode(z),O):E(z)}function I(z){return z===93?(e.consume(z),k):E(z)}function k(z){return z===62?(e.consume(z),V):z===45&&s===2?(e.consume(z),k):E(z)}function V(z){return z===null||de(z)?(e.exit("htmlFlowData"),K(z)):(e.consume(z),V)}function K(z){return e.exit("htmlFlow"),t(z)}}function Xj(e,t,n){const r=this;return s;function s(a){return de(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o):n(a)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function Zj(e,t,n){return r;function r(s){return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),e.attempt(Jo,t,n)}}const ew={name:"htmlText",tokenize:tw};function tw(e,t,n){const r=this;let s,o,a;return l;function l(k){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(k),c}function c(k){return k===33?(e.consume(k),u):k===47?(e.consume(k),j):k===63?(e.consume(k),h):Kt(k)?(e.consume(k),w):n(k)}function u(k){return k===45?(e.consume(k),d):k===91?(e.consume(k),o=0,y):Kt(k)?(e.consume(k),g):n(k)}function d(k){return k===45?(e.consume(k),m):n(k)}function p(k){return k===null?n(k):k===45?(e.consume(k),f):de(k)?(a=p,T(k)):(e.consume(k),p)}function f(k){return k===45?(e.consume(k),m):p(k)}function m(k){return k===62?Q(k):k===45?f(k):p(k)}function y(k){const V="CDATA[";return k===V.charCodeAt(o++)?(e.consume(k),o===V.length?_:y):n(k)}function _(k){return k===null?n(k):k===93?(e.consume(k),L):de(k)?(a=_,T(k)):(e.consume(k),_)}function L(k){return k===93?(e.consume(k),x):_(k)}function x(k){return k===62?Q(k):k===93?(e.consume(k),x):_(k)}function g(k){return k===null||k===62?Q(k):de(k)?(a=g,T(k)):(e.consume(k),g)}function h(k){return k===null?n(k):k===63?(e.consume(k),P):de(k)?(a=h,T(k)):(e.consume(k),h)}function P(k){return k===62?Q(k):h(k)}function j(k){return Kt(k)?(e.consume(k),b):n(k)}function b(k){return k===45||bt(k)?(e.consume(k),b):C(k)}function C(k){return de(k)?(a=C,T(k)):be(k)?(e.consume(k),C):Q(k)}function w(k){return k===45||bt(k)?(e.consume(k),w):k===47||k===62||pt(k)?R(k):n(k)}function R(k){return k===47?(e.consume(k),Q):k===58||k===95||Kt(k)?(e.consume(k),N):de(k)?(a=R,T(k)):be(k)?(e.consume(k),R):Q(k)}function N(k){return k===45||k===46||k===58||k===95||bt(k)?(e.consume(k),N):v(k)}function v(k){return k===61?(e.consume(k),E):de(k)?(a=v,T(k)):be(k)?(e.consume(k),v):R(k)}function E(k){return k===null||k===60||k===61||k===62||k===96?n(k):k===34||k===39?(e.consume(k),s=k,M):de(k)?(a=E,T(k)):be(k)?(e.consume(k),E):(e.consume(k),U)}function M(k){return k===s?(e.consume(k),s=void 0,D):k===null?n(k):de(k)?(a=M,T(k)):(e.consume(k),M)}function U(k){return k===null||k===34||k===39||k===60||k===61||k===96?n(k):k===47||k===62||pt(k)?R(k):(e.consume(k),U)}function D(k){return k===47||k===62||pt(k)?R(k):n(k)}function Q(k){return k===62?(e.consume(k),e.exit("htmlTextData"),e.exit("htmlText"),t):n(k)}function T(k){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),O}function O(k){return be(k)?Se(e,I,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(k):I(k)}function I(k){return e.enter("htmlTextData"),a(k)}}const vu={name:"labelEnd",resolveAll:sw,resolveTo:ow,tokenize:aw},nw={tokenize:lw},rw={tokenize:cw},iw={tokenize:uw};function sw(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const s=r.type==="labelImage"?4:2;r.type="data",t+=s}}return e.length!==n.length&&en(e,0,e.length,n),e}function ow(e,t){let n=e.length,r=0,s,o,a,l;for(;n--;)if(s=e[n][1],o){if(s.type==="link"||s.type==="labelLink"&&s._inactive)break;e[n][0]==="enter"&&s.type==="labelLink"&&(s._inactive=!0)}else if(a){if(e[n][0]==="enter"&&(s.type==="labelImage"||s.type==="labelLink")&&!s._balanced&&(o=n,s.type!=="labelLink")){r=2;break}}else s.type==="labelEnd"&&(a=n);const c={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[o][1].start},end:{...e[a][1].end}},d={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[a-2][1].start}};return l=[["enter",c,t],["enter",u,t]],l=Tt(l,e.slice(o+1,o+r+3)),l=Tt(l,[["enter",d,t]]),l=Tt(l,yu(t.parser.constructs.insideSpan.null,e.slice(o+r+4,a-3),t)),l=Tt(l,[["exit",d,t],e[a-2],e[a-1],["exit",u,t]]),l=Tt(l,e.slice(a+1)),l=Tt(l,[["exit",c,t]]),en(e,o,e.length,l),e}function aw(e,t,n){const r=this;let s=r.events.length,o,a;for(;s--;)if((r.events[s][1].type==="labelImage"||r.events[s][1].type==="labelLink")&&!r.events[s][1]._balanced){o=r.events[s][1];break}return l;function l(f){return o?o._inactive?p(f):(a=r.parser.defined.includes(Ar(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),c):n(f)}function c(f){return f===40?e.attempt(nw,d,a?d:p)(f):f===91?e.attempt(rw,d,a?u:p)(f):a?d(f):p(f)}function u(f){return e.attempt(iw,d,p)(f)}function d(f){return t(f)}function p(f){return o._balanced=!0,n(f)}}function lw(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),s}function s(p){return pt(p)?_i(e,o)(p):o(p)}function o(p){return p===41?d(p):Ig(e,a,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function a(p){return pt(p)?_i(e,c)(p):d(p)}function l(p){return n(p)}function c(p){return p===34||p===39||p===40?Og(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function u(p){return pt(p)?_i(e,d)(p):d(p)}function d(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function cw(e,t,n){const r=this;return s;function s(l){return Mg.call(r,e,o,a,"reference","referenceMarker","referenceString")(l)}function o(l){return r.parser.defined.includes(Ar(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function a(l){return n(l)}}function uw(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),s}function s(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const dw={name:"labelStartImage",resolveAll:vu.resolveAll,tokenize:pw};function pw(e,t,n){const r=this;return s;function s(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),o}function o(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),a):n(l)}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const fw={name:"labelStartLink",resolveAll:vu.resolveAll,tokenize:mw};function mw(e,t,n){const r=this;return s;function s(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),o}function o(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const Ia={name:"lineEnding",tokenize:hw};function hw(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Se(e,t,"linePrefix")}}const Us={name:"thematicBreak",tokenize:gw};function gw(e,t,n){let r=0,s;return o;function o(u){return e.enter("thematicBreak"),a(u)}function a(u){return s=u,l(u)}function l(u){return u===s?(e.enter("thematicBreakSequence"),c(u)):r>=3&&(u===null||de(u))?(e.exit("thematicBreak"),t(u)):n(u)}function c(u){return u===s?(e.consume(u),r++,c):(e.exit("thematicBreakSequence"),be(u)?Se(e,l,"whitespace")(u):l(u))}}const ot={continuation:{tokenize:bw},exit:jw,name:"list",tokenize:vw},xw={partial:!0,tokenize:ww},yw={partial:!0,tokenize:kw};function vw(e,t,n){const r=this,s=r.events[r.events.length-1];let o=s&&s[1].type==="linePrefix"?s[2].sliceSerialize(s[1],!0).length:0,a=0;return l;function l(m){const y=r.containerState.type||(m===42||m===43||m===45?"listUnordered":"listOrdered");if(y==="listUnordered"?!r.containerState.marker||m===r.containerState.marker:Zl(m)){if(r.containerState.type||(r.containerState.type=y,e.enter(y,{_container:!0})),y==="listUnordered")return e.enter("listItemPrefix"),m===42||m===45?e.check(Us,n,u)(m):u(m);if(!r.interrupt||m===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(m)}return n(m)}function c(m){return Zl(m)&&++a<10?(e.consume(m),c):(!r.interrupt||a<2)&&(r.containerState.marker?m===r.containerState.marker:m===41||m===46)?(e.exit("listItemValue"),u(m)):n(m)}function u(m){return e.enter("listItemMarker"),e.consume(m),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||m,e.check(Jo,r.interrupt?n:d,e.attempt(xw,f,p))}function d(m){return r.containerState.initialBlankLine=!0,o++,f(m)}function p(m){return be(m)?(e.enter("listItemPrefixWhitespace"),e.consume(m),e.exit("listItemPrefixWhitespace"),f):n(m)}function f(m){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(m)}}function bw(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Jo,s,o);function s(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Se(e,t,"listItemIndent",r.containerState.size+1)(l)}function o(l){return r.containerState.furtherBlankLines||!be(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(yw,t,a)(l))}function a(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,Se(e,e.attempt(ot,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function kw(e,t,n){const r=this;return Se(e,s,"listItemIndent",r.containerState.size+1);function s(o){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(o):n(o)}}function jw(e){e.exit(this.containerState.type)}function ww(e,t,n){const r=this;return Se(e,s,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function s(o){const a=r.events[r.events.length-1];return!be(o)&&a&&a[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const Cp={name:"setextUnderline",resolveTo:_w,tokenize:Sw};function _w(e,t){let n=e.length,r,s,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(s=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[s][1].type="setextHeadingText",o?(e.splice(s,0,["enter",a,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=a,e.push(["exit",a,t]),e}function Sw(e,t,n){const r=this;let s;return o;function o(u){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),s=u,a(u)):n(u)}function a(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===s?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),be(u)?Se(e,c,"lineSuffix")(u):c(u))}function c(u){return u===null||de(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const Cw={tokenize:Nw};function Nw(e){const t=this,n=e.attempt(Jo,r,e.attempt(this.parser.constructs.flowInitial,s,Se(e,e.attempt(this.parser.constructs.flow,s,e.attempt(Lj,s)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function s(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const Ew={resolveAll:Dg()},zw=$g("string"),Tw=$g("text");function $g(e){return{resolveAll:Dg(e==="text"?Pw:void 0),tokenize:t};function t(n){const r=this,s=this.parser.constructs[e],o=n.attempt(s,a,l);return a;function a(d){return u(d)?o(d):l(d)}function l(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),c}function c(d){return u(d)?(n.exit("data"),o(d)):(n.consume(d),c)}function u(d){if(d===null)return!0;const p=s[d];let f=-1;if(p)for(;++f<p.length;){const m=p[f];if(!m.previous||m.previous.call(r,r.previous))return!0}return!1}}}function Dg(e){return t;function t(n,r){let s=-1,o;for(;++s<=n.length;)o===void 0?n[s]&&n[s][1].type==="data"&&(o=s,s++):(!n[s]||n[s][1].type!=="data")&&(s!==o+2&&(n[o][1].end=n[s-1][1].end,n.splice(o+2,s-o-2),s=o+2),o=void 0);return e?e(n,r):n}}function Pw(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],s=t.sliceStream(r);let o=s.length,a=-1,l=0,c;for(;o--;){const u=s[o];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)l++,a--;if(a)break;a=-1}else if(u===-2)c=!0,l++;else if(u!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){const u={type:n===e.length||c||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?a:r.start._bufferIndex+a,_index:r.start._index+o,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const Lw={42:ot,43:ot,45:ot,48:ot,49:ot,50:ot,51:ot,52:ot,53:ot,54:ot,55:ot,56:ot,57:ot,62:Pg},Aw={91:Oj},Rw={[-2]:Ra,[-1]:Ra,32:Ra},Iw={35:Vj,42:Us,45:[Cp,Us],60:Jj,61:Cp,95:Us,96:_p,126:_p},Mw={38:Ag,92:Lg},Ow={[-5]:Ia,[-4]:Ia,[-3]:Ia,33:dw,38:Ag,42:ec,60:[fj,ew],91:fw,92:[Bj,Lg],93:vu,95:ec,96:Cj},$w={null:[ec,Ew]},Dw={null:[42,95]},Fw={null:[]},Bw=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Dw,contentInitial:Aw,disable:Fw,document:Lw,flow:Iw,flowInitial:Rw,insideSpan:$w,string:Mw,text:Ow},Symbol.toStringTag,{value:"Module"}));function Uw(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const s={},o=[];let a=[],l=[];const c={attempt:C(j),check:C(b),consume:g,enter:h,exit:P,interrupt:C(b,{interrupt:!0})},u={code:null,containerState:{},defineSkip:_,events:[],now:y,parser:e,previous:null,sliceSerialize:f,sliceStream:m,write:p};let d=t.tokenize.call(u,c);return t.resolveAll&&o.push(t),u;function p(v){return a=Tt(a,v),L(),a[a.length-1]!==null?[]:(w(t,0),u.events=yu(o,u.events,u),u.events)}function f(v,E){return Ww(m(v),E)}function m(v){return Vw(a,v)}function y(){const{_bufferIndex:v,_index:E,line:M,column:U,offset:D}=r;return{_bufferIndex:v,_index:E,line:M,column:U,offset:D}}function _(v){s[v.line]=v.column,N()}function L(){let v;for(;r._index<a.length;){const E=a[r._index];if(typeof E=="string")for(v=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===v&&r._bufferIndex<E.length;)x(E.charCodeAt(r._bufferIndex));else x(E)}}function x(v){d=d(v)}function g(v){de(v)?(r.line++,r.column=1,r.offset+=v===-3?2:1,N()):v!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=v}function h(v,E){const M=E||{};return M.type=v,M.start=y(),u.events.push(["enter",M,u]),l.push(M),M}function P(v){const E=l.pop();return E.end=y(),u.events.push(["exit",E,u]),E}function j(v,E){w(v,E.from)}function b(v,E){E.restore()}function C(v,E){return M;function M(U,D,Q){let T,O,I,k;return Array.isArray(U)?K(U):"tokenize"in U?K([U]):V(U);function V(Z){return B;function B(te){const ae=te!==null&&Z[te],$=te!==null&&Z.null,q=[...Array.isArray(ae)?ae:ae?[ae]:[],...Array.isArray($)?$:$?[$]:[]];return K(q)(te)}}function K(Z){return T=Z,O=0,Z.length===0?Q:z(Z[O])}function z(Z){return B;function B(te){return k=R(),I=Z,Z.partial||(u.currentConstruct=Z),Z.name&&u.parser.constructs.disable.null.includes(Z.name)?A():Z.tokenize.call(E?Object.assign(Object.create(u),E):u,c,le,A)(te)}}function le(Z){return v(I,k),D}function A(Z){return k.restore(),++O<T.length?z(T[O]):Q}}}function w(v,E){v.resolveAll&&!o.includes(v)&&o.push(v),v.resolve&&en(u.events,E,u.events.length-E,v.resolve(u.events.slice(E),u)),v.resolveTo&&(u.events=v.resolveTo(u.events,u))}function R(){const v=y(),E=u.previous,M=u.currentConstruct,U=u.events.length,D=Array.from(l);return{from:U,restore:Q};function Q(){r=v,u.previous=E,u.currentConstruct=M,u.events.length=U,l=D,N()}}function N(){r.line in s&&r.column<2&&(r.column=s[r.line],r.offset+=s[r.line]-1)}}function Vw(e,t){const n=t.start._index,r=t.start._bufferIndex,s=t.end._index,o=t.end._bufferIndex;let a;if(n===s)a=[e[n].slice(r,o)];else{if(a=e.slice(n,s),r>-1){const l=a[0];typeof l=="string"?a[0]=l.slice(r):a.shift()}o>0&&a.push(e[s].slice(0,o))}return a}function Ww(e,t){let n=-1;const r=[];let s;for(;++n<e.length;){const o=e[n];let a;if(typeof o=="string")a=o;else switch(o){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&s)continue;a=" ";break}default:a=String.fromCharCode(o)}s=o===-2,r.push(a)}return r.join("")}function Hw(e){const r={constructs:Xk([Bw,...(e||{}).extensions||[]]),content:s(oj),defined:[],document:s(lj),flow:s(Cw),lazy:{},string:s(zw),text:s(Tw)};return r;function s(o){return a;function a(l){return Uw(r,o,l)}}}function qw(e){for(;!Rg(e););return e}const Np=/[\0\t\n\r]/g;function Jw(){let e=1,t="",n=!0,r;return s;function s(o,a,l){const c=[];let u,d,p,f,m;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(a||void 0).decode(o)),p=0,t="",n&&(o.charCodeAt(0)===65279&&p++,n=void 0);p<o.length;){if(Np.lastIndex=p,u=Np.exec(o),f=u&&u.index!==void 0?u.index:o.length,m=o.charCodeAt(f),!u){t=o.slice(p);break}if(m===10&&p===f&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),p<f&&(c.push(o.slice(p,f)),e+=f-p),m){case 0:{c.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,c.push(-2);e++<d;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}p=f+1}return l&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const Kw=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Qw(e){return e.replace(Kw,Gw)}function Gw(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const s=n.charCodeAt(1),o=s===120||s===88;return Tg(n.slice(o?2:1),o?16:10)}return xu(n)||e}const Fg={}.hasOwnProperty;function Yw(e,t,n){return typeof t!="string"&&(n=t,t=void 0),Xw(n)(qw(Hw(n).document().write(Jw()(e,t,!0))))}function Xw(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(Te),autolinkProtocol:R,autolinkEmail:R,atxHeading:o(ce),blockQuote:o($),characterEscape:R,characterReference:R,codeFenced:o(q),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:o(q,a),codeText:o(J,a),codeTextData:R,data:R,codeFlowValue:R,definition:o(Y),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:o(ne),hardBreakEscape:o(Ce),hardBreakTrailing:o(Ce),htmlFlow:o(W,a),htmlFlowData:R,htmlText:o(W,a),htmlTextData:R,image:o(he),label:a,link:o(Te),listItem:o(mn),listItemValue:f,listOrdered:o(mt,p),listUnordered:o(mt),paragraph:o(Yo),reference:z,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:o(ce),strong:o(Xo),thematicBreak:o(os)},exit:{atxHeading:c(),atxHeadingSequence:j,autolink:c(),autolinkEmail:ae,autolinkProtocol:te,blockQuote:c(),characterEscapeValue:N,characterReferenceMarkerHexadecimal:A,characterReferenceMarkerNumeric:A,characterReferenceValue:Z,characterReference:B,codeFenced:c(L),codeFencedFence:_,codeFencedFenceInfo:m,codeFencedFenceMeta:y,codeFlowValue:N,codeIndented:c(x),codeText:c(D),codeTextData:N,data:N,definition:c(),definitionDestinationString:P,definitionLabelString:g,definitionTitleString:h,emphasis:c(),hardBreakEscape:c(E),hardBreakTrailing:c(E),htmlFlow:c(M),htmlFlowData:N,htmlText:c(U),htmlTextData:N,image:c(T),label:I,labelText:O,lineEnding:v,link:c(Q),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:le,resourceDestinationString:k,resourceTitleString:V,resource:K,setextHeading:c(w),setextHeadingLineSequence:C,setextHeadingText:b,strong:c(),thematicBreak:c()}};Bg(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(H){let ee={type:"root",children:[]};const pe={stack:[ee],tokenStack:[],config:t,enter:l,exit:u,buffer:a,resume:d,data:n},ge=[];let ke=-1;for(;++ke<H.length;)if(H[ke][1].type==="listOrdered"||H[ke][1].type==="listUnordered")if(H[ke][0]==="enter")ge.push(ke);else{const ht=ge.pop();ke=s(H,ht,ke)}for(ke=-1;++ke<H.length;){const ht=t[H[ke][0]];Fg.call(ht,H[ke][1].type)&&ht[H[ke][1].type].call(Object.assign({sliceSerialize:H[ke][2].sliceSerialize},pe),H[ke][1])}if(pe.tokenStack.length>0){const ht=pe.tokenStack[pe.tokenStack.length-1];(ht[1]||Ep).call(pe,void 0,ht[0])}for(ee.position={start:gn(H.length>0?H[0][1].start:{line:1,column:1,offset:0}),end:gn(H.length>0?H[H.length-2][1].end:{line:1,column:1,offset:0})},ke=-1;++ke<t.transforms.length;)ee=t.transforms[ke](ee)||ee;return ee}function s(H,ee,pe){let ge=ee-1,ke=-1,ht=!1,tn,St,F,ie;for(;++ge<=pe;){const se=H[ge];switch(se[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{se[0]==="enter"?ke++:ke--,ie=void 0;break}case"lineEndingBlank":{se[0]==="enter"&&(tn&&!ie&&!ke&&!F&&(F=ge),ie=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:ie=void 0}if(!ke&&se[0]==="enter"&&se[1].type==="listItemPrefix"||ke===-1&&se[0]==="exit"&&(se[1].type==="listUnordered"||se[1].type==="listOrdered")){if(tn){let ue=ge;for(St=void 0;ue--;){const me=H[ue];if(me[1].type==="lineEnding"||me[1].type==="lineEndingBlank"){if(me[0]==="exit")continue;St&&(H[St][1].type="lineEndingBlank",ht=!0),me[1].type="lineEnding",St=ue}else if(!(me[1].type==="linePrefix"||me[1].type==="blockQuotePrefix"||me[1].type==="blockQuotePrefixWhitespace"||me[1].type==="blockQuoteMarker"||me[1].type==="listItemIndent"))break}F&&(!St||F<St)&&(tn._spread=!0),tn.end=Object.assign({},St?H[St][1].start:se[1].end),H.splice(St||ge,0,["exit",tn,se[2]]),ge++,pe++}if(se[1].type==="listItemPrefix"){const ue={type:"listItem",_spread:!1,start:Object.assign({},se[1].start),end:void 0};tn=ue,H.splice(ge,0,["enter",ue,se[2]]),ge++,pe++,F=void 0,ie=!0}}}return H[ee][1]._spread=ht,pe}function o(H,ee){return pe;function pe(ge){l.call(this,H(ge),ge),ee&&ee.call(this,ge)}}function a(){this.stack.push({type:"fragment",children:[]})}function l(H,ee,pe){this.stack[this.stack.length-1].children.push(H),this.stack.push(H),this.tokenStack.push([ee,pe||void 0]),H.position={start:gn(ee.start),end:void 0}}function c(H){return ee;function ee(pe){H&&H.call(this,pe),u.call(this,pe)}}function u(H,ee){const pe=this.stack.pop(),ge=this.tokenStack.pop();if(ge)ge[0].type!==H.type&&(ee?ee.call(this,H,ge[0]):(ge[1]||Ep).call(this,H,ge[0]));else throw new Error("Cannot close `"+H.type+"` ("+wi({start:H.start,end:H.end})+"): it’s not open");pe.position.end=gn(H.end)}function d(){return Gk(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function f(H){if(this.data.expectingFirstListItemValue){const ee=this.stack[this.stack.length-2];ee.start=Number.parseInt(this.sliceSerialize(H),10),this.data.expectingFirstListItemValue=void 0}}function m(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.lang=H}function y(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.meta=H}function _(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function L(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.value=H.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function x(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.value=H.replace(/(\r?\n|\r)$/g,"")}function g(H){const ee=this.resume(),pe=this.stack[this.stack.length-1];pe.label=ee,pe.identifier=Ar(this.sliceSerialize(H)).toLowerCase()}function h(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.title=H}function P(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.url=H}function j(H){const ee=this.stack[this.stack.length-1];if(!ee.depth){const pe=this.sliceSerialize(H).length;ee.depth=pe}}function b(){this.data.setextHeadingSlurpLineEnding=!0}function C(H){const ee=this.stack[this.stack.length-1];ee.depth=this.sliceSerialize(H).codePointAt(0)===61?1:2}function w(){this.data.setextHeadingSlurpLineEnding=void 0}function R(H){const pe=this.stack[this.stack.length-1].children;let ge=pe[pe.length-1];(!ge||ge.type!=="text")&&(ge=Un(),ge.position={start:gn(H.start),end:void 0},pe.push(ge)),this.stack.push(ge)}function N(H){const ee=this.stack.pop();ee.value+=this.sliceSerialize(H),ee.position.end=gn(H.end)}function v(H){const ee=this.stack[this.stack.length-1];if(this.data.atHardBreak){const pe=ee.children[ee.children.length-1];pe.position.end=gn(H.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(ee.type)&&(R.call(this,H),N.call(this,H))}function E(){this.data.atHardBreak=!0}function M(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.value=H}function U(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.value=H}function D(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.value=H}function Q(){const H=this.stack[this.stack.length-1];if(this.data.inReference){const ee=this.data.referenceType||"shortcut";H.type+="Reference",H.referenceType=ee,delete H.url,delete H.title}else delete H.identifier,delete H.label;this.data.referenceType=void 0}function T(){const H=this.stack[this.stack.length-1];if(this.data.inReference){const ee=this.data.referenceType||"shortcut";H.type+="Reference",H.referenceType=ee,delete H.url,delete H.title}else delete H.identifier,delete H.label;this.data.referenceType=void 0}function O(H){const ee=this.sliceSerialize(H),pe=this.stack[this.stack.length-2];pe.label=Qw(ee),pe.identifier=Ar(ee).toLowerCase()}function I(){const H=this.stack[this.stack.length-1],ee=this.resume(),pe=this.stack[this.stack.length-1];if(this.data.inReference=!0,pe.type==="link"){const ge=H.children;pe.children=ge}else pe.alt=ee}function k(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.url=H}function V(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.title=H}function K(){this.data.inReference=void 0}function z(){this.data.referenceType="collapsed"}function le(H){const ee=this.resume(),pe=this.stack[this.stack.length-1];pe.label=ee,pe.identifier=Ar(this.sliceSerialize(H)).toLowerCase(),this.data.referenceType="full"}function A(H){this.data.characterReferenceType=H.type}function Z(H){const ee=this.sliceSerialize(H),pe=this.data.characterReferenceType;let ge;pe?(ge=Tg(ee,pe==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):ge=xu(ee);const ke=this.stack[this.stack.length-1];ke.value+=ge}function B(H){const ee=this.stack.pop();ee.position.end=gn(H.end)}function te(H){N.call(this,H);const ee=this.stack[this.stack.length-1];ee.url=this.sliceSerialize(H)}function ae(H){N.call(this,H);const ee=this.stack[this.stack.length-1];ee.url="mailto:"+this.sliceSerialize(H)}function $(){return{type:"blockquote",children:[]}}function q(){return{type:"code",lang:null,meta:null,value:""}}function J(){return{type:"inlineCode",value:""}}function Y(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function ne(){return{type:"emphasis",children:[]}}function ce(){return{type:"heading",depth:0,children:[]}}function Ce(){return{type:"break"}}function W(){return{type:"html",value:""}}function he(){return{type:"image",title:null,url:"",alt:null}}function Te(){return{type:"link",title:null,url:"",children:[]}}function mt(H){return{type:"list",ordered:H.type==="listOrdered",start:null,spread:H._spread,children:[]}}function mn(H){return{type:"listItem",spread:H._spread,checked:null,children:[]}}function Yo(){return{type:"paragraph",children:[]}}function Xo(){return{type:"strong",children:[]}}function Un(){return{type:"text",value:""}}function os(){return{type:"thematicBreak"}}}function gn(e){return{line:e.line,column:e.column,offset:e.offset}}function Bg(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?Bg(e,r):Zw(e,r)}}function Zw(e,t){let n;for(n in t)if(Fg.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Ep(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+wi({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+wi({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+wi({start:t.start,end:t.end})+") is still open")}function e_(e){const t=this;t.parser=n;function n(r){return Yw(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function t_(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function n_(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function r_(e,t){const n=t.value?t.value+`
`:"",r={},s=t.lang?t.lang.split(/\s+/):[];s.length>0&&(r.className=["language-"+s[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function i_(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function s_(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function o_(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),s=Qr(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let a,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=o+1,l+=1,e.footnoteCounts.set(r,l);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+s,id:n+"fnref-"+s+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,c);const u={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,u),e.applyData(t,u)}function a_(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function l_(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Ug(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const s=e.all(t),o=s[0];o&&o.type==="text"?o.value="["+o.value:s.unshift({type:"text",value:"["});const a=s[s.length-1];return a&&a.type==="text"?a.value+=r:s.push({type:"text",value:r}),s}function c_(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Ug(e,t);const s={src:Qr(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(s.title=r.title);const o={type:"element",tagName:"img",properties:s,children:[]};return e.patch(t,o),e.applyData(t,o)}function u_(e,t){const n={src:Qr(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function d_(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function p_(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Ug(e,t);const s={href:Qr(r.url||"")};r.title!==null&&r.title!==void 0&&(s.title=r.title);const o={type:"element",tagName:"a",properties:s,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function f_(e,t){const n={href:Qr(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function m_(e,t,n){const r=e.all(t),s=n?h_(n):Vg(t),o={},a=[];if(typeof t.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const d=r[l];(s||l!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!s?a.push(...d.children):a.push(d)}const c=r[r.length-1];c&&(s||c.type!=="element"||c.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:a};return e.patch(t,u),e.applyData(t,u)}function h_(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Vg(n[r])}return t}function Vg(e){const t=e.spread;return t??e.children.length>1}function g_(e,t){const n={},r=e.all(t);let s=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++s<r.length;){const a=r[s];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function x_(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function y_(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function v_(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function b_(e,t){const n=e.all(t),r=n.shift(),s=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),s.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},l=fu(t.children[1]),c=wg(t.children[t.children.length-1]);l&&c&&(a.position={start:l,end:c}),s.push(a)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(s,!0)};return e.patch(t,o),e.applyData(t,o)}function k_(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,l=a?a.length:t.children.length;let c=-1;const u=[];for(;++c<l;){const p=t.children[c],f={},m=a?a[c]:void 0;m&&(f.align=m);let y={type:"element",tagName:o,properties:f,children:[]};p&&(y.children=e.all(p),e.patch(p,y),y=e.applyData(p,y)),u.push(y)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function j_(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const zp=9,Tp=32;function w_(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),s=0;const o=[];for(;r;)o.push(Pp(t.slice(s,r.index),s>0,!0),r[0]),s=r.index+r[0].length,r=n.exec(t);return o.push(Pp(t.slice(s),s>0,!1)),o.join("")}function Pp(e,t,n){let r=0,s=e.length;if(t){let o=e.codePointAt(r);for(;o===zp||o===Tp;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(s-1);for(;o===zp||o===Tp;)s--,o=e.codePointAt(s-1)}return s>r?e.slice(r,s):""}function __(e,t){const n={type:"text",value:w_(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function S_(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const C_={blockquote:t_,break:n_,code:r_,delete:i_,emphasis:s_,footnoteReference:o_,heading:a_,html:l_,imageReference:c_,image:u_,inlineCode:d_,linkReference:p_,link:f_,listItem:m_,list:g_,paragraph:x_,root:y_,strong:v_,table:b_,tableCell:j_,tableRow:k_,text:__,thematicBreak:S_,toml:Cs,yaml:Cs,definition:Cs,footnoteDefinition:Cs};function Cs(){}const Wg=-1,Ko=0,Si=1,ko=2,bu=3,ku=4,ju=5,wu=6,Hg=7,qg=8,Lp=typeof self=="object"?self:globalThis,N_=(e,t)=>{const n=(s,o)=>(e.set(o,s),s),r=s=>{if(e.has(s))return e.get(s);const[o,a]=t[s];switch(o){case Ko:case Wg:return n(a,s);case Si:{const l=n([],s);for(const c of a)l.push(r(c));return l}case ko:{const l=n({},s);for(const[c,u]of a)l[r(c)]=r(u);return l}case bu:return n(new Date(a),s);case ku:{const{source:l,flags:c}=a;return n(new RegExp(l,c),s)}case ju:{const l=n(new Map,s);for(const[c,u]of a)l.set(r(c),r(u));return l}case wu:{const l=n(new Set,s);for(const c of a)l.add(r(c));return l}case Hg:{const{name:l,message:c}=a;return n(new Lp[l](c),s)}case qg:return n(BigInt(a),s);case"BigInt":return n(Object(BigInt(a)),s);case"ArrayBuffer":return n(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:l}=new Uint8Array(a);return n(new DataView(l),a)}}return n(new Lp[o](a),s)};return r},Ap=e=>N_(new Map,e)(0),dr="",{toString:E_}={},{keys:z_}=Object,si=e=>{const t=typeof e;if(t!=="object"||!e)return[Ko,t];const n=E_.call(e).slice(8,-1);switch(n){case"Array":return[Si,dr];case"Object":return[ko,dr];case"Date":return[bu,dr];case"RegExp":return[ku,dr];case"Map":return[ju,dr];case"Set":return[wu,dr];case"DataView":return[Si,n]}return n.includes("Array")?[Si,n]:n.includes("Error")?[Hg,n]:[ko,n]},Ns=([e,t])=>e===Ko&&(t==="function"||t==="symbol"),T_=(e,t,n,r)=>{const s=(a,l)=>{const c=r.push(a)-1;return n.set(l,c),c},o=a=>{if(n.has(a))return n.get(a);let[l,c]=si(a);switch(l){case Ko:{let d=a;switch(c){case"bigint":l=qg,d=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);d=null;break;case"undefined":return s([Wg],a)}return s([l,d],a)}case Si:{if(c){let f=a;return c==="DataView"?f=new Uint8Array(a.buffer):c==="ArrayBuffer"&&(f=new Uint8Array(a)),s([c,[...f]],a)}const d=[],p=s([l,d],a);for(const f of a)d.push(o(f));return p}case ko:{if(c)switch(c){case"BigInt":return s([c,a.toString()],a);case"Boolean":case"Number":case"String":return s([c,a.valueOf()],a)}if(t&&"toJSON"in a)return o(a.toJSON());const d=[],p=s([l,d],a);for(const f of z_(a))(e||!Ns(si(a[f])))&&d.push([o(f),o(a[f])]);return p}case bu:return s([l,a.toISOString()],a);case ku:{const{source:d,flags:p}=a;return s([l,{source:d,flags:p}],a)}case ju:{const d=[],p=s([l,d],a);for(const[f,m]of a)(e||!(Ns(si(f))||Ns(si(m))))&&d.push([o(f),o(m)]);return p}case wu:{const d=[],p=s([l,d],a);for(const f of a)(e||!Ns(si(f)))&&d.push(o(f));return p}}const{message:u}=a;return s([l,{name:c,message:u}],a)};return o},Rp=(e,{json:t,lossy:n}={})=>{const r=[];return T_(!(t||n),!!t,new Map,r)(e),r},jo=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Ap(Rp(e,t)):structuredClone(e):(e,t)=>Ap(Rp(e,t));function P_(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function L_(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function A_(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||P_,r=e.options.footnoteBackLabel||L_,s=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let c=-1;for(;++c<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[c]);if(!u)continue;const d=e.all(u),p=String(u.identifier).toUpperCase(),f=Qr(p.toLowerCase());let m=0;const y=[],_=e.footnoteCounts.get(p);for(;_!==void 0&&++m<=_;){y.length>0&&y.push({type:"text",value:" "});let g=typeof n=="string"?n:n(c,m);typeof g=="string"&&(g={type:"text",value:g}),y.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(m>1?"-"+m:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,m),className:["data-footnote-backref"]},children:Array.isArray(g)?g:[g]})}const L=d[d.length-1];if(L&&L.type==="element"&&L.tagName==="p"){const g=L.children[L.children.length-1];g&&g.type==="text"?g.value+=" ":L.children.push({type:"text",value:" "}),L.children.push(...y)}else d.push(...y);const x={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(u,x),l.push(x)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...jo(a),id:"footnote-label"},children:[{type:"text",value:s}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const Jg=function(e){if(e==null)return O_;if(typeof e=="function")return Qo(e);if(typeof e=="object")return Array.isArray(e)?R_(e):I_(e);if(typeof e=="string")return M_(e);throw new Error("Expected function, string, or object as test")};function R_(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Jg(e[n]);return Qo(r);function r(...s){let o=-1;for(;++o<t.length;)if(t[o].apply(this,s))return!0;return!1}}function I_(e){const t=e;return Qo(n);function n(r){const s=r;let o;for(o in e)if(s[o]!==t[o])return!1;return!0}}function M_(e){return Qo(t);function t(n){return n&&n.type===e}}function Qo(e){return t;function t(n,r,s){return!!($_(n)&&e.call(this,n,typeof r=="number"?r:void 0,s||void 0))}}function O_(){return!0}function $_(e){return e!==null&&typeof e=="object"&&"type"in e}const Kg=[],D_=!0,Ip=!1,F_="skip";function B_(e,t,n,r){let s;typeof t=="function"&&typeof n!="function"?(r=n,n=t):s=t;const o=Jg(s),a=r?-1:1;l(e,void 0,[])();function l(c,u,d){const p=c&&typeof c=="object"?c:{};if(typeof p.type=="string"){const m=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(c.type+(m?"<"+m+">":""))+")"})}return f;function f(){let m=Kg,y,_,L;if((!t||o(c,u,d[d.length-1]||void 0))&&(m=U_(n(c,d)),m[0]===Ip))return m;if("children"in c&&c.children){const x=c;if(x.children&&m[0]!==F_)for(_=(r?x.children.length:-1)+a,L=d.concat(x);_>-1&&_<x.children.length;){const g=x.children[_];if(y=l(g,_,L)(),y[0]===Ip)return y;_=typeof y[1]=="number"?y[1]:_+a}}return m}}}function U_(e){return Array.isArray(e)?e:typeof e=="number"?[D_,e]:e==null?Kg:[e]}function Qg(e,t,n,r){let s,o,a;typeof t=="function"&&typeof n!="function"?(o=void 0,a=t,s=n):(o=t,a=n,s=r),B_(e,o,l,s);function l(c,u){const d=u[u.length-1],p=d?d.children.indexOf(c):void 0;return a(c,p,d)}}const tc={}.hasOwnProperty,V_={};function W_(e,t){const n=t||V_,r=new Map,s=new Map,o=new Map,a={...C_,...n.handlers},l={all:u,applyData:q_,definitionById:r,footnoteById:s,footnoteCounts:o,footnoteOrder:[],handlers:a,one:c,options:n,patch:H_,wrap:K_};return Qg(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:s,f=String(d.identifier).toUpperCase();p.has(f)||p.set(f,d)}}),l;function c(d,p){const f=d.type,m=l.handlers[f];if(tc.call(l.handlers,f)&&m)return m(l,d,p);if(l.options.passThrough&&l.options.passThrough.includes(f)){if("children"in d){const{children:_,...L}=d,x=jo(L);return x.children=l.all(d),x}return jo(d)}return(l.options.unknownHandler||J_)(l,d,p)}function u(d){const p=[];if("children"in d){const f=d.children;let m=-1;for(;++m<f.length;){const y=l.one(f[m],d);if(y){if(m&&f[m-1].type==="break"&&(!Array.isArray(y)&&y.type==="text"&&(y.value=Mp(y.value)),!Array.isArray(y)&&y.type==="element")){const _=y.children[0];_&&_.type==="text"&&(_.value=Mp(_.value))}Array.isArray(y)?p.push(...y):p.push(y)}}}return p}}function H_(e,t){e.position&&(t.position=Ek(e))}function q_(e,t){let n=t;if(e&&e.data){const r=e.data.hName,s=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&o&&Object.assign(n.properties,jo(o)),"children"in n&&n.children&&s!==null&&s!==void 0&&(n.children=s)}return n}function J_(e,t){const n=t.data||{},r="value"in t&&!(tc.call(n,"hProperties")||tc.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function K_(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Mp(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Op(e,t){const n=W_(e,t),r=n.one(e,void 0),s=A_(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return s&&o.children.push({type:"text",value:`
`},s),o}function Q_(e,t){return e&&"run"in e?async function(n,r){const s=Op(n,{file:r,...t});await e.run(s,r)}:function(n,r){return Op(n,{file:r,...e||t})}}function $p(e){if(e)throw e}var Vs=Object.prototype.hasOwnProperty,Gg=Object.prototype.toString,Dp=Object.defineProperty,Fp=Object.getOwnPropertyDescriptor,Bp=function(t){return typeof Array.isArray=="function"?Array.isArray(t):Gg.call(t)==="[object Array]"},Up=function(t){if(!t||Gg.call(t)!=="[object Object]")return!1;var n=Vs.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Vs.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var s;for(s in t);return typeof s>"u"||Vs.call(t,s)},Vp=function(t,n){Dp&&n.name==="__proto__"?Dp(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Wp=function(t,n){if(n==="__proto__")if(Vs.call(t,n)){if(Fp)return Fp(t,n).value}else return;return t[n]},G_=function e(){var t,n,r,s,o,a,l=arguments[0],c=1,u=arguments.length,d=!1;for(typeof l=="boolean"&&(d=l,l=arguments[1]||{},c=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});c<u;++c)if(t=arguments[c],t!=null)for(n in t)r=Wp(l,n),s=Wp(t,n),l!==s&&(d&&s&&(Up(s)||(o=Bp(s)))?(o?(o=!1,a=r&&Bp(r)?r:[]):a=r&&Up(r)?r:{},Vp(l,{name:n,newValue:e(d,a,s)})):typeof s<"u"&&Vp(l,{name:n,newValue:s}));return l};const Ma=_o(G_);function nc(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Y_(){const e=[],t={run:n,use:r};return t;function n(...s){let o=-1;const a=s.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);l(null,...s);function l(c,...u){const d=e[++o];let p=-1;if(c){a(c);return}for(;++p<s.length;)(u[p]===null||u[p]===void 0)&&(u[p]=s[p]);s=u,d?X_(d,l)(...u):a(null,...u)}}function r(s){if(typeof s!="function")throw new TypeError("Expected `middelware` to be a function, not "+s);return e.push(s),t}}function X_(e,t){let n;return r;function r(...a){const l=e.length>a.length;let c;l&&a.push(s);try{c=e.apply(this,a)}catch(u){const d=u;if(l&&n)throw d;return s(d)}l||(c&&c.then&&typeof c.then=="function"?c.then(o,s):c instanceof Error?s(c):o(c))}function s(a,...l){n||(n=!0,t(a,...l))}function o(a){s(null,a)}}const qt={basename:Z_,dirname:e2,extname:t2,join:n2,sep:"/"};function Z_(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');ss(e);let n=0,r=-1,s=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;s--;)if(e.codePointAt(s)===47){if(o){n=s+1;break}}else r<0&&(o=!0,r=s+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let a=-1,l=t.length-1;for(;s--;)if(e.codePointAt(s)===47){if(o){n=s+1;break}}else a<0&&(o=!0,a=s+1),l>-1&&(e.codePointAt(s)===t.codePointAt(l--)?l<0&&(r=s):(l=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function e2(e){if(ss(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function t2(e){ss(e);let t=e.length,n=-1,r=0,s=-1,o=0,a;for(;t--;){const l=e.codePointAt(t);if(l===47){if(a){r=t+1;break}continue}n<0&&(a=!0,n=t+1),l===46?s<0?s=t:o!==1&&(o=1):s>-1&&(o=-1)}return s<0||n<0||o===0||o===1&&s===n-1&&s===r+1?"":e.slice(s,n)}function n2(...e){let t=-1,n;for(;++t<e.length;)ss(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":r2(n)}function r2(e){ss(e);const t=e.codePointAt(0)===47;let n=i2(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function i2(e,t){let n="",r=0,s=-1,o=0,a=-1,l,c;for(;++a<=e.length;){if(a<e.length)l=e.codePointAt(a);else{if(l===47)break;l=47}if(l===47){if(!(s===a-1||o===1))if(s!==a-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),s=a,o=0;continue}}else if(n.length>0){n="",r=0,s=a,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(s+1,a):n=e.slice(s+1,a),r=a-s-1;s=a,o=0}else l===46&&o>-1?o++:o=-1}return n}function ss(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const s2={cwd:o2};function o2(){return"/"}function rc(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function a2(e){if(typeof e=="string")e=new URL(e);else if(!rc(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return l2(e)}function l2(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const s=new TypeError("File URL path must not include encoded / characters");throw s.code="ERR_INVALID_FILE_URL_PATH",s}}return decodeURIComponent(t)}const Oa=["history","path","basename","stem","extname","dirname"];class Yg{constructor(t){let n;t?rc(t)?n={path:t}:typeof t=="string"||c2(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":s2.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Oa.length;){const o=Oa[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let s;for(s in n)Oa.includes(s)||(this[s]=n[s])}get basename(){return typeof this.path=="string"?qt.basename(this.path):void 0}set basename(t){Da(t,"basename"),$a(t,"basename"),this.path=qt.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?qt.dirname(this.path):void 0}set dirname(t){Hp(this.basename,"dirname"),this.path=qt.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?qt.extname(this.path):void 0}set extname(t){if($a(t,"extname"),Hp(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=qt.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){rc(t)&&(t=a2(t)),Da(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?qt.basename(this.path,this.extname):void 0}set stem(t){Da(t,"stem"),$a(t,"stem"),this.path=qt.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const s=this.message(t,n,r);throw s.fatal=!0,s}info(t,n,r){const s=this.message(t,n,r);return s.fatal=void 0,s}message(t,n,r){const s=new tt(t,n,r);return this.path&&(s.name=this.path+":"+s.name,s.file=this.path),s.fatal=!1,this.messages.push(s),s}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function $a(e,t){if(e&&e.includes(qt.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+qt.sep+"`")}function Da(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Hp(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function c2(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const u2=function(e){const r=this.constructor.prototype,s=r[e],o=function(){return s.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},d2={}.hasOwnProperty;class _u extends u2{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Y_()}copy(){const t=new _u;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Ma(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Ua("data",this.frozen),this.namespace[t]=n,this):d2.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Ua("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const s=n.call(t,...r);typeof s=="function"&&this.transformers.use(s)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Es(t),r=this.parser||this.Parser;return Fa("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Fa("process",this.parser||this.Parser),Ba("process",this.compiler||this.Compiler),n?s(void 0,n):new Promise(s);function s(o,a){const l=Es(t),c=r.parse(l);r.run(c,l,function(d,p,f){if(d||!p||!f)return u(d);const m=p,y=r.stringify(m,f);m2(y)?f.value=y:f.result=y,u(d,f)});function u(d,p){d||!p?a(d):o?o(p):n(void 0,p)}}}processSync(t){let n=!1,r;return this.freeze(),Fa("processSync",this.parser||this.Parser),Ba("processSync",this.compiler||this.Compiler),this.process(t,s),Jp("processSync","process",n),r;function s(o,a){n=!0,$p(o),r=a}}run(t,n,r){qp(t),this.freeze();const s=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(a,l){const c=Es(n);s.run(t,c,u);function u(d,p,f){const m=p||t;d?l(d):a?a(m):r(void 0,m,f)}}}runSync(t,n){let r=!1,s;return this.run(t,n,o),Jp("runSync","run",r),s;function o(a,l){$p(a),s=l,r=!0}}stringify(t,n){this.freeze();const r=Es(n),s=this.compiler||this.Compiler;return Ba("stringify",s),qp(t),s(t,r)}use(t,...n){const r=this.attachers,s=this.namespace;if(Ua("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(u){if(typeof u=="function")c(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...p]=u;c(d,p)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(s.settings=Ma(!0,s.settings,u.settings))}function l(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const p=u[d];o(p)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function c(u,d){let p=-1,f=-1;for(;++p<r.length;)if(r[p][0]===u){f=p;break}if(f===-1)r.push([u,...d]);else if(d.length>0){let[m,...y]=d;const _=r[f][1];nc(_)&&nc(m)&&(m=Ma(!0,_,m)),r[f]=[u,m,...y]}}}}const p2=new _u().freeze();function Fa(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Ba(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Ua(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function qp(e){if(!nc(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Jp(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Es(e){return f2(e)?e:new Yg(e)}function f2(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function m2(e){return typeof e=="string"||h2(e)}function h2(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const g2="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Kp=[],Qp={allowDangerousHtml:!0},x2=/^(https?|ircs?|mailto|xmpp)$/i,y2=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Xg(e){const t=v2(e),n=b2(e);return k2(t.runSync(t.parse(n),n),e)}function v2(e){const t=e.rehypePlugins||Kp,n=e.remarkPlugins||Kp,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Qp}:Qp;return p2().use(e_).use(n).use(Q_,r).use(t)}function b2(e){const t=e.children||"",n=new Yg;return typeof t=="string"&&(n.value=t),n}function k2(e,t){const n=t.allowedElements,r=t.allowElement,s=t.components,o=t.disallowedElements,a=t.skipHtml,l=t.unwrapDisallowed,c=t.urlTransform||j2;for(const d of y2)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+g2+d.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),Qg(e,u),Ak(e,{Fragment:i.Fragment,components:s,ignoreInvalidStyle:!0,jsx:i.jsx,jsxs:i.jsxs,passKeys:!0,passNode:!0});function u(d,p,f){if(d.type==="raw"&&f&&typeof p=="number")return a?f.children.splice(p,1):f.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let m;for(m in Aa)if(Object.hasOwn(Aa,m)&&Object.hasOwn(d.properties,m)){const y=d.properties[m],_=Aa[m];(_===null||_.includes(d.tagName))&&(d.properties[m]=c(String(y||""),m,d))}}if(d.type==="element"){let m=n?!n.includes(d.tagName):o?o.includes(d.tagName):!1;if(!m&&r&&typeof p=="number"&&(m=!r(d,p,f)),m&&f&&typeof p=="number")return l&&d.children?f.children.splice(p,1,...d.children):f.children.splice(p,1),p}}}function j2(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),s=e.indexOf("/");return t===-1||s!==-1&&t>s||n!==-1&&t>n||r!==-1&&t>r||x2.test(e.slice(0,t))?e:""}function w2({value:e,onChange:t,placeholder:n="Write your content here...",minHeight:r=200}){const[s,o]=S.useState(!1),[a,l]=S.useState(r),c=S.useRef(null),u=S.useRef(null);S.useEffect(()=>{if(e){const f=e.split(`
`).length,m=Math.max(r,Math.min(f*20+40,500));l(m)}},[e,r]),S.useEffect(()=>{s&&u.current&&u.current.focus()},[s]);function d(f){u.current=f,f.focus()}function p(f){c.current&&!c.current.contains(f.target)&&o(!1)}return S.useEffect(()=>{if(s)return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[s]),i.jsxs("div",{ref:c,className:"markdown-editor",children:[i.jsx("style",{children:`
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
      `}),s?i.jsx("div",{className:"monaco-wrapper",children:i.jsx(Ft,{height:"100%",language:"markdown",theme:"vs-dark",value:e,onChange:f=>t(f||""),onMount:d,options:{minimap:{enabled:!1},fontSize:14,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"off",scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",padding:{top:12,bottom:12},lineDecorationsWidth:8,folding:!1,glyphMargin:!1,renderLineHighlight:"none",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,scrollbar:{vertical:"auto",horizontal:"hidden"}}})}):i.jsxs("div",{className:"markdown-preview",onClick:()=>o(!0),children:[i.jsxs("span",{className:"edit-hint",children:[i.jsx(h0,{size:12}),"Click to edit"]}),e?i.jsx("div",{className:"markdown-content",children:i.jsx(Xg,{children:e})}):i.jsx("div",{className:"markdown-placeholder",children:n})]})]})}function _2(e){return/^[a-zA-Z0-9_]+$/.test(e)}function S2({agent:e}){const{project:t,updateAgent:n,mcpServers:r,builtinTools:s,setActiveTab:o,setRunAgentId:a}=et(),[l,c]=S.useState(new Set(["basic","model","tools","subagents"])),[u,d]=S.useState(!1),[p,f]=S.useState(!1),[m,y]=S.useState(!1),[_,L]=S.useState(""),[x,g]=S.useState(null);if(!t)return null;function h(T){n(e.id,T)}function P(T){if(T===""){g(null),h({name:T});return}_2(T)?g(null):g("Name can only contain letters, numbers, and underscores"),h({name:T})}function j(T){const O=new Set(l);O.has(T)?O.delete(T):O.add(T),c(O)}const b=e.type==="LlmAgent",C=e;function w(T){b&&h({tools:[...C.tools,T]})}function R(T){b&&h({tools:C.tools.filter((O,I)=>I!==T)})}function N(T,O){if(!b)return;const I=[...C.tools];I[T]=O,h({tools:I})}function v(T){"sub_agents"in e&&h({sub_agents:[...e.sub_agents,T]})}function E(T){"sub_agents"in e&&h({sub_agents:e.sub_agents.filter(O=>O!==T)})}const M=t.agents.filter(T=>T.id!==e.id);async function U(){if(!(!t||!b)){d(!0);try{const T=C.instruction||"",O=T?`Current instruction to improve:

${T}

Please improve and expand this instruction while preserving its core intent.`:void 0,k=t.agents.some(K=>K.id===e.id)?void 0:e,V=await Bs(t.id,e.id,O,k);V.success&&V.prompt?h({instruction:V.prompt}):alert("Failed to generate prompt: "+(V.error||"Unknown error"))}catch(T){alert("Error generating prompt: "+T.message)}finally{d(!1)}}}async function D(){if(!(!t||!b||!_.trim())){d(!0);try{const O=`Current instruction:

${C.instruction||""}

---

Requested changes:
${_}

Please apply the requested changes to the instruction above. Output only the updated instruction, nothing else.`,k=t.agents.some(K=>K.id===e.id)?void 0:e,V=await Bs(t.id,e.id,O,k);V.success&&V.prompt?(h({instruction:V.prompt}),y(!1),L("")):alert("Failed to apply changes: "+(V.error||"Unknown error"))}catch(T){alert("Error applying changes: "+T.message)}finally{d(!1)}}}async function Q(){if(!t||!b)return;const T=C.instruction;if(!T){alert("Please write an instruction first");return}f(!0);try{const O=`Write a 5-10 word description of what this agent does.

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

Your response (5-10 words only):`,I=await Bs(t.id,e.id,O);if(I.success&&I.prompt){let k=I.prompt.trim();k=k.replace(/^["']|["']$/g,"").trim();const V=k.split(/[.!?\n]/)[0].trim(),K=V.length>80?V.slice(0,77)+"...":V;h({description:K})}else alert("Failed to generate description: "+(I.error||"Unknown error"))}catch(O){alert("Error generating description: "+O.message)}finally{f(!1)}}return i.jsxs("div",{className:"agent-editor",children:[i.jsx("style",{children:`
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
      `}),i.jsxs("div",{className:"editor-header",children:[i.jsx(Zn,{size:24,style:{color:"var(--accent-primary)"}}),i.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[i.jsx("input",{type:"text",value:e.name,onChange:T=>P(T.target.value),placeholder:"Agent name",style:{borderColor:x?"var(--error)":void 0}}),x&&i.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:x})]}),i.jsx("span",{className:"badge badge-info",children:e.type}),i.jsxs("button",{className:"btn btn-primary btn-sm run-agent-btn",onClick:()=>{a(e.id),o("run")},title:"Test this agent",children:[i.jsx(Mn,{size:14}),"Run"]})]}),i.jsxs("div",{className:"editor-content",children:[i.jsxs(oi,{id:"basic",title:"Basic Info",icon:i.jsx(Zn,{size:16}),expanded:l.has("basic"),onToggle:()=>j("basic"),children:[i.jsx("div",{className:"form-row",children:i.jsxs("div",{className:"form-group full-width",children:[i.jsxs("div",{className:"label-with-action",children:[i.jsx("label",{children:"Description"}),b&&C.instruction&&i.jsx("button",{className:"btn btn-secondary btn-sm generate-btn",onClick:Q,disabled:p,title:"Generate description from instruction",children:p?i.jsxs(i.Fragment,{children:[i.jsx(Ur,{size:14,className:"spin"}),"Summarizing..."]}):"Summarize"})]}),i.jsx("input",{type:"text",value:e.description,onChange:T=>h({description:T.target.value}),placeholder:"e.g., Reviews code for bugs and suggests fixes"})]})}),b&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"form-row",children:i.jsxs("div",{className:"form-group full-width",children:[i.jsxs("div",{className:"label-with-action",children:[i.jsx("label",{children:"Instruction"}),i.jsxs("div",{className:"action-buttons",children:[i.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>y(!m),disabled:u||!C.instruction,title:"Request specific changes to the instruction",children:"Request Changes"}),i.jsx("button",{className:"btn btn-secondary btn-sm",onClick:U,disabled:u,title:"Uses AI to improve and expand the current instruction",children:u?i.jsxs(i.Fragment,{children:[i.jsx(Ur,{size:14,className:"spin"}),"Working..."]}):"Auto-Improve"})]})]}),m&&i.jsxs("div",{className:"request-changes-box",children:[i.jsx("input",{type:"text",value:_,onChange:T=>L(T.target.value),placeholder:"Describe what changes you want...",onKeyDown:T=>{T.key==="Enter"&&_.trim()?D():T.key==="Escape"&&(y(!1),L(""))},autoFocus:!0}),i.jsx("button",{className:"btn btn-primary btn-sm",onClick:D,disabled:u||!_.trim(),children:"Apply"})]}),i.jsx(w2,{value:C.instruction,onChange:T=>h({instruction:T}),placeholder:"Write your agent's instruction here... (Markdown supported)",minHeight:200})]})}),i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Output Key"}),i.jsxs("select",{value:C.output_key||"",onChange:T=>h({output_key:T.target.value||void 0}),children:[i.jsx("option",{value:"",children:"None"}),t.app.state_keys.map(T=>i.jsx("option",{value:T.name,children:T.name},T.name))]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Include Contents"}),i.jsxs("select",{value:C.include_contents,onChange:T=>h({include_contents:T.target.value}),children:[i.jsx("option",{value:"default",children:"Default"}),i.jsx("option",{value:"none",children:"None"})]})]})]}),i.jsxs("div",{className:"form-row",style:{gap:24},children:[i.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[i.jsxs("span",{className:"toggle-switch",children:[i.jsx("input",{type:"checkbox",checked:C.disallow_transfer_to_parent,onChange:T=>h({disallow_transfer_to_parent:T.target.checked})}),i.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to parent"]}),i.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[i.jsxs("span",{className:"toggle-switch",children:[i.jsx("input",{type:"checkbox",checked:C.disallow_transfer_to_peers,onChange:T=>h({disallow_transfer_to_peers:T.target.checked})}),i.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to peers"]})]})]}),e.type==="LoopAgent"&&i.jsx("div",{className:"form-row",children:i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Max Iterations"}),i.jsx("input",{type:"number",value:e.max_iterations||"",onChange:T=>h({max_iterations:parseInt(T.target.value)||void 0}),placeholder:"No limit"})]})})]}),b&&i.jsx(oi,{id:"model",title:"Model",icon:i.jsx(iu,{size:16}),expanded:l.has("model"),onToggle:()=>j("model"),children:i.jsx(N2,{agent:C,appModels:t.app.models||[],defaultModelId:t.app.default_model_id,onUpdate:T=>h({model:T})})}),b&&i.jsx(oi,{id:"tools",title:`Tools (${C.tools.length})`,icon:i.jsx(Xt,{size:16}),expanded:l.has("tools"),onToggle:()=>j("tools"),children:i.jsx(C2,{tools:C.tools,onAdd:w,onRemove:R,onUpdate:N,builtinTools:s,mcpServers:r,projectMcpServers:t.mcp_servers,customTools:t.custom_tools,agents:M,skillsets:t.skillsets||[]})}),"sub_agents"in e&&i.jsx(oi,{id:"subagents",title:`Sub-Agents (${e.sub_agents.length})`,icon:i.jsx(b0,{size:16}),expanded:l.has("subagents"),onToggle:()=>j("subagents"),children:i.jsxs("div",{className:"sub-agent-list",children:[e.sub_agents.map(T=>{const O=t.agents.find(I=>I.id===T);return O?i.jsxs("div",{className:"sub-agent-chip",children:[O.name,i.jsx("button",{onClick:()=>E(T),children:i.jsx(Le,{size:12})})]},T):null}),i.jsxs("select",{value:"",onChange:T=>{T.target.value&&v(T.target.value)},style:{width:150,padding:"6px 10px",fontSize:13},children:[i.jsx("option",{value:"",children:"Add agent..."}),M.filter(T=>!e.sub_agents.includes(T.id)).map(T=>i.jsx("option",{value:T.id,children:T.name},T.id))]})]})}),b&&i.jsx(oi,{id:"callbacks",title:"Callbacks",icon:i.jsx(Zt,{size:16}),expanded:l.has("callbacks"),onToggle:()=>j("callbacks"),children:i.jsx(E2,{agent:C,onUpdate:h,customCallbacks:t.custom_callbacks||[]})})]})]})}function oi({id:e,title:t,icon:n,expanded:r,onToggle:s,children:o}){return i.jsxs("div",{className:"section",children:[i.jsxs("div",{className:"section-header",onClick:s,children:[r?i.jsx(Ct,{size:16}):i.jsx(Nt,{size:16}),i.jsxs("h4",{children:[n," ",t]})]}),r&&i.jsx("div",{className:"section-content",children:o})]})}function C2({tools:e,onAdd:t,onRemove:n,onUpdate:r,builtinTools:s,mcpServers:o,projectMcpServers:a,customTools:l,agents:c,skillsets:u}){const[d,p]=S.useState(!1),[f,m]=S.useState({}),[y,_]=S.useState(""),L=Lt.useRef(null),x=Lt.useRef(null),[g,h]=S.useState(null),[P,j]=S.useState(new Set),b=(A,Z)=>{if(!y.trim())return!0;const B=y.toLowerCase();return A.toLowerCase().includes(B)||((Z==null?void 0:Z.toLowerCase().includes(B))??!1)},C=s.filter(A=>b(A.name,A.description)),w=o.filter(A=>b(A.name,A.description)),R=a.filter(A=>b(A.name,A.description)),N=l.filter(A=>b(A.name,A.description)),v=c.filter(A=>b(A.name,A.description)),E=u.filter(A=>b(A.name,A.description));function M(){if(L.current){const A=L.current.getBoundingClientRect(),Z=window.innerHeight,B=350,te=Z-A.bottom-16,ae=A.top-16;if(te>=200||te>=ae){const $=Math.min(B,te);m({top:A.bottom+4,left:A.left,maxHeight:$})}else{const $=Math.min(B,ae);m({top:A.top-$-4,left:A.left,maxHeight:$})}}p(!0),_(""),setTimeout(()=>{var A;return(A=x.current)==null?void 0:A.focus()},50)}function U(){p(!1),_("")}function D(A){t({type:"builtin",name:A}),U()}async function Q(A){U();const Z=A.tool_filter||[];if(h({server:A,enabledTools:new Set(Z),availableTools:Z.map(B=>({name:B,description:""})),isLoading:Z.length===0,error:void 0}),Z.length===0)try{const{testMcpServer:B}=await E0(async()=>{const{testMcpServer:ae}=await Promise.resolve().then(()=>i0);return{testMcpServer:ae}},void 0),te=await B({connection_type:A.connection_type,command:A.command,args:A.args,env:A.env,url:A.url,headers:A.headers,timeout:A.timeout||30});te.success?h(ae=>ae?{...ae,availableTools:te.tools,enabledTools:new Set(te.tools.map($=>$.name)),isLoading:!1}:null):h(ae=>ae?{...ae,isLoading:!1,error:te.error||"Failed to connect to MCP server"}:null)}catch(B){h(te=>te?{...te,isLoading:!1,error:B.message}:null)}}function T(A){if(!g)return;const Z=new Set(g.enabledTools);Z.has(A)?Z.delete(A):Z.add(A),h({...g,enabledTools:Z})}function O(){if(!g)return;const A=Array.from(g.enabledTools);t({type:"mcp",server:{...g.server,tool_filter:A}}),h(null)}function I(A){const Z=new Set(P);Z.has(A)?Z.delete(A):Z.add(A),j(Z)}function k(A,Z){const B=e[A];if(B.type!=="mcp"||!B.server)return;const te=B.server.tool_filter||[];let ae;te.includes(Z)?ae=te.filter($=>$!==Z):ae=[...te,Z],r(A,{...B,server:{...B.server,tool_filter:ae}})}function V(A){t({type:"function",name:A.name,module_path:A.module_path}),U()}function K(A){const Z=c.find(B=>B.id===A);t({type:"agent",agent_id:A,name:Z==null?void 0:Z.name}),U()}function z(A){const Z=u.find(B=>B.id===A);t({type:"skillset",skillset_id:A,name:Z==null?void 0:Z.name}),U()}function le(A){return o.find(Z=>Z.name===A)}return i.jsxs("div",{children:[i.jsx("style",{children:`
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
      `}),i.jsx("div",{className:"tool-list",children:e.map((A,Z)=>{var B;return A.type==="mcp"&&A.server?i.jsxs("div",{className:"mcp-tool-item",children:[i.jsxs("div",{className:"mcp-tool-header",onClick:()=>I(Z),children:[P.has(Z)?i.jsx(Ct,{size:14}):i.jsx(Nt,{size:14}),i.jsx(Xt,{size:14,style:{color:"var(--accent-primary)"}}),i.jsxs("div",{className:"mcp-tool-info",children:[i.jsx("div",{className:"mcp-tool-name",children:A.server.name}),i.jsx("div",{className:"mcp-tool-count",children:A.server.tool_filter===null||A.server.tool_filter===void 0?"all tools":`${A.server.tool_filter.length} tools enabled`})]}),i.jsx("button",{className:"delete-btn",onClick:te=>{te.stopPropagation(),n(Z)},children:i.jsx(Le,{size:14})})]}),P.has(Z)&&i.jsx("div",{className:"mcp-tool-body",children:i.jsx("div",{className:"mcp-tool-list",children:(()=>{const te=le(A.server.name),ae=(te==null?void 0:te.tool_filter)||A.server.tool_filter||[],$=new Set(A.server.tool_filter||[]);return ae.map(q=>i.jsxs("label",{className:`mcp-tool-chip ${$.has(q)?"enabled":"disabled"}`,onClick:()=>k(Z,q),children:[i.jsx("input",{type:"checkbox",checked:$.has(q),onChange:()=>{},style:{display:"none"}}),q]},q))})()})})]},Z):A.type==="skillset"?i.jsxs("div",{className:"tool-item",children:[i.jsx(ln,{size:14,style:{color:"var(--accent)"}}),i.jsxs("div",{className:"tool-item-info",children:[i.jsx("div",{className:"tool-item-name",children:A.name||((B=u.find(te=>te.id===A.skillset_id))==null?void 0:B.name)||"SkillSet"}),i.jsx("div",{className:"tool-item-type",children:"skillset"})]}),i.jsx("button",{className:"delete-btn",onClick:()=>n(Z),children:i.jsx(Le,{size:14})})]},Z):i.jsxs("div",{className:"tool-item",children:[i.jsx(Xt,{size:14,style:{color:"var(--accent-primary)"}}),i.jsxs("div",{className:"tool-item-info",children:[i.jsx("div",{className:"tool-item-name",children:A.name||A.agent_id}),i.jsx("div",{className:"tool-item-type",children:A.type})]}),i.jsx("button",{className:"delete-btn",onClick:()=>n(Z),children:i.jsx(Le,{size:14})})]},Z)})}),i.jsxs("div",{className:"add-tool-dropdown",style:{marginTop:12},children:[i.jsxs("button",{ref:L,className:"btn btn-secondary btn-sm",onClick:()=>d?U():M(),children:[i.jsx(Oe,{size:14}),"Add Tool"]}),d&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"dropdown-backdrop",onClick:U}),i.jsxs("div",{className:"dropdown-content dropdown-fixed",style:f,children:[i.jsx("div",{className:"dropdown-search",children:i.jsx("input",{ref:x,type:"text",placeholder:"Search tools...",value:y,onChange:A=>_(A.target.value),onKeyDown:A=>A.key==="Escape"&&U()})}),C.length>0&&i.jsxs("div",{className:"dropdown-section",children:[i.jsx("h5",{children:"Built-in Tools"}),C.map(A=>i.jsxs("button",{className:"dropdown-item",onClick:()=>D(A.name),children:[i.jsx("div",{className:"dropdown-item-name",children:A.name}),i.jsx("div",{className:"dropdown-item-desc",children:A.description})]},A.name))]}),w.length>0&&i.jsxs("div",{className:"dropdown-section",children:[i.jsxs("h5",{children:["Known MCP Servers (",w.length,")"]}),w.map(A=>i.jsxs("button",{className:"dropdown-item",onClick:()=>Q(A),children:[i.jsxs("div",{className:"dropdown-item-name",children:[A.name,i.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:A.tool_filter===null||A.tool_filter===void 0?"all tools":`${A.tool_filter.length} tools`})]}),i.jsx("div",{className:"dropdown-item-desc",children:A.description})]},`known-${A.name}`))]}),R.length>0&&i.jsxs("div",{className:"dropdown-section",children:[i.jsxs("h5",{children:["Project MCP Servers (",R.length,")"]}),R.map(A=>i.jsxs("button",{className:"dropdown-item",onClick:()=>Q(A),children:[i.jsxs("div",{className:"dropdown-item-name",children:[A.name,i.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:A.tool_filter===null||A.tool_filter===void 0?"all tools":`${A.tool_filter.length} tools`})]}),i.jsx("div",{className:"dropdown-item-desc",children:A.description||"Custom MCP server"})]},`project-${A.id||A.name}`))]}),N.length>0&&i.jsxs("div",{className:"dropdown-section",children:[i.jsx("h5",{children:"Custom Tools"}),N.map(A=>i.jsxs("button",{className:"dropdown-item",onClick:()=>V(A),children:[i.jsx("div",{className:"dropdown-item-name",children:A.name}),i.jsx("div",{className:"dropdown-item-desc",children:A.description})]},A.id))]}),v.length>0&&i.jsxs("div",{className:"dropdown-section",children:[i.jsx("h5",{children:"Agents as Tools"}),v.map(A=>i.jsxs("button",{className:"dropdown-item",onClick:()=>K(A.id),children:[i.jsx("div",{className:"dropdown-item-name",children:A.name}),i.jsx("div",{className:"dropdown-item-desc",children:A.type})]},A.id))]}),E.length>0&&i.jsxs("div",{className:"dropdown-section",children:[i.jsxs("h5",{children:["SkillSets (",E.length,")"]}),E.map(A=>i.jsxs("button",{className:"dropdown-item",onClick:()=>z(A.id),children:[i.jsxs("div",{className:"dropdown-item-name",children:[A.name,i.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:[A.entry_count||0," entries"]})]}),i.jsx("div",{className:"dropdown-item-desc",children:A.description||"Vector knowledge base"})]},A.id))]}),y.trim()&&C.length===0&&w.length===0&&R.length===0&&N.length===0&&v.length===0&&E.length===0&&i.jsxs("div",{className:"dropdown-section",style:{textAlign:"center",padding:"20px",color:"var(--text-muted)"},children:['No tools matching "',y,'"']})]})]})]}),g&&i.jsx("div",{className:"mcp-config-dialog",children:i.jsxs("div",{className:"mcp-config-content",children:[i.jsxs("h3",{children:["Configure ",g.server.name]}),i.jsx("p",{children:g.server.description}),g.isLoading?i.jsxs("div",{className:"mcp-loading",children:[i.jsx("div",{className:"spinner"}),i.jsx("p",{children:"Connecting to MCP server and discovering tools..."})]}):g.error?i.jsxs("div",{className:"mcp-error",children:[i.jsxs("p",{children:["⚠️ Failed to discover tools: ",g.error]}),i.jsx("p",{className:"hint",children:"You can still add the server, but you won't be able to select specific tools."})]}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"mcp-select-actions",children:[i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>h({...g,enabledTools:new Set(g.availableTools.map(A=>A.name))}),children:["Select All (",g.availableTools.length,")"]}),i.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>h({...g,enabledTools:new Set}),children:"Select None"})]}),i.jsx("div",{className:"mcp-tools-grid",children:g.availableTools.map(A=>i.jsxs("div",{className:"mcp-tool-row",title:A.description||A.name,style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[i.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[i.jsx("input",{type:"checkbox",checked:g.enabledTools.has(A.name),onChange:()=>T(A.name)}),i.jsx("span",{className:"toggle-slider"})]}),i.jsx("span",{style:{fontSize:13,opacity:g.enabledTools.has(A.name)?1:.5,cursor:"pointer"},onClick:()=>T(A.name),children:A.name})]},A.name))})]}),i.jsxs("div",{className:"dialog-actions",children:[i.jsx("button",{className:"btn btn-secondary",onClick:()=>h(null),children:"Cancel"}),i.jsxs("button",{className:"btn btn-primary",onClick:O,disabled:g.enabledTools.size===0,children:["Add ",g.enabledTools.size," Tools"]})]})]})})]})}function N2({agent:e,appModels:t,defaultModelId:n,onUpdate:r}){var p,f,m,y,_,L,x,g,h,P;const s=(p=e.model)==null?void 0:p._appModelId,o=e.model!==null&&e.model!==void 0&&!s,l=s||(()=>{if(!e.model)return n;const j=t.find(b=>{var C,w,R;return b.provider===((C=e.model)==null?void 0:C.provider)&&b.model_name===((w=e.model)==null?void 0:w.model_name)&&b.api_base===((R=e.model)==null?void 0:R.api_base)});return j==null?void 0:j.id})()||n||((f=t[0])==null?void 0:f.id);Lt.useEffect(()=>{var j,b,C,w,R;if(s){const N=t.find(v=>v.id===s);N&&(((j=e.model)==null?void 0:j.provider)!==N.provider||((b=e.model)==null?void 0:b.model_name)!==N.model_name||((C=e.model)==null?void 0:C.api_base)!==N.api_base||((w=e.model)==null?void 0:w.temperature)!==N.temperature||((R=e.model)==null?void 0:R.max_output_tokens)!==N.max_output_tokens)&&r({provider:N.provider,model_name:N.model_name,api_base:N.api_base,temperature:N.temperature,max_output_tokens:N.max_output_tokens,top_p:N.top_p,top_k:N.top_k,fallbacks:[],_appModelId:s})}},[s,t,e.model,r]);function c(j){const b=t.find(C=>C.id===j);b&&r({provider:b.provider,model_name:b.model_name,api_base:b.api_base,temperature:b.temperature,max_output_tokens:b.max_output_tokens,top_p:b.top_p,top_k:b.top_k,fallbacks:[],_appModelId:j})}function u(){var j;if(o){const b=n||((j=t[0])==null?void 0:j.id);b&&c(b)}else{const b=e.model;if(b){const{_appModelId:C,...w}=b;r(w)}else r({provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]})}}function d(j){const{_appModelId:b,...C}=e.model||{};r({...C,...j})}return t.find(j=>j.id===l),t.find(j=>j.id===n),i.jsxs("div",{className:"model-selector",children:[i.jsx("style",{children:`
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
      `}),t.length>0&&i.jsxs("div",{className:"model-choice",children:[i.jsxs("div",{className:`model-option ${o?"":"selected"}`,onClick:()=>!o||u(),children:[i.jsx("div",{className:"model-option-label",children:"Use App Model"}),i.jsx("div",{className:"model-option-desc",children:"Select from configured models"})]}),i.jsxs("div",{className:`model-option ${o?"selected":""}`,onClick:()=>o||u(),children:[i.jsx("div",{className:"model-option-label",children:"Custom"}),i.jsx("div",{className:"model-option-desc",children:"Configure model manually"})]})]}),!o&&t.length>0?i.jsx("div",{className:"app-model-select",children:t.map(j=>i.jsx("div",{className:`app-model-item ${l===j.id?"selected":""}`,onClick:()=>c(j.id),children:i.jsxs("div",{className:"app-model-item-info",children:[i.jsxs("div",{className:"app-model-item-name",children:[j.name,j.id===n&&i.jsxs("span",{className:"default-badge",children:[i.jsx(sg,{size:10,fill:"currentColor"}),"Default"]})]}),i.jsxs("div",{className:"app-model-item-details",children:[j.provider," / ",j.model_name,j.api_base&&` • ${j.api_base}`]})]})},j.id))}):t.length===0?i.jsx("div",{className:"no-models-message",children:"No models configured in App Config. Configure models there first, or use custom settings below."}):null,(o||t.length===0)&&i.jsxs("div",{className:"custom-model-form",children:[i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Provider"}),i.jsxs("select",{value:((m=e.model)==null?void 0:m.provider)||"gemini",onChange:j=>d({provider:j.target.value}),children:[i.jsx("option",{value:"gemini",children:"Gemini"}),i.jsx("option",{value:"litellm",children:"LiteLLM"}),i.jsx("option",{value:"anthropic",children:"Anthropic"})]})]}),i.jsxs("div",{className:"form-group",style:{flex:2},children:[i.jsx("label",{children:"Model Name"}),i.jsx("input",{type:"text",value:((y=e.model)==null?void 0:y.model_name)||"",onChange:j=>d({model_name:j.target.value}),placeholder:"e.g., gemini-2.0-flash"})]}),((_=e.model)==null?void 0:_.provider)==="litellm"&&i.jsxs("div",{className:"form-group",style:{flex:2},children:[i.jsx("label",{children:"API Base"}),i.jsx("input",{type:"text",value:((L=e.model)==null?void 0:L.api_base)||"",onChange:j=>d({api_base:j.target.value||void 0}),placeholder:"http://localhost:11434"})]})]}),i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Temperature"}),i.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:((x=e.model)==null?void 0:x.temperature)??"",onChange:j=>d({temperature:j.target.value?parseFloat(j.target.value):void 0}),placeholder:"Default"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Max Tokens"}),i.jsx("input",{type:"number",value:((g=e.model)==null?void 0:g.max_output_tokens)??"",onChange:j=>d({max_output_tokens:j.target.value?parseInt(j.target.value):void 0}),placeholder:"Default"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Top P"}),i.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:((h=e.model)==null?void 0:h.top_p)??"",onChange:j=>d({top_p:j.target.value?parseFloat(j.target.value):void 0}),placeholder:"Default"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Top K"}),i.jsx("input",{type:"number",min:"1",value:((P=e.model)==null?void 0:P.top_k)??"",onChange:j=>d({top_k:j.target.value?parseInt(j.target.value):void 0}),placeholder:"Default"})]})]})]})]})}function E2({agent:e,onUpdate:t,customCallbacks:n}){const r=[{key:"before_agent_callbacks",label:"Before Agent"},{key:"after_agent_callbacks",label:"After Agent"},{key:"before_model_callbacks",label:"Before Model"},{key:"after_model_callbacks",label:"After Model"},{key:"before_tool_callbacks",label:"Before Tool"},{key:"after_tool_callbacks",label:"After Tool"}];function s(a,l){const c=e[a]||[],u=n.find(d=>d.id===l);u&&t({[a]:[...c,{module_path:u.module_path}]})}function o(a,l){const c=e[a]||[];t({[a]:c.filter((u,d)=>d!==l)})}return i.jsx("div",{className:"callbacks-editor",children:r.map(({key:a,label:l})=>{const c=e[a]||[],u=n;return i.jsxs("div",{className:"callback-type-group",style:{marginBottom:"20px"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[i.jsx("label",{style:{fontWeight:500,fontSize:"13px"},children:l}),u.length>0&&i.jsxs("select",{value:"",onChange:d=>{d.target.value&&(s(a,d.target.value),d.target.value="")},style:{padding:"4px 8px",fontSize:"12px",width:"200px"},children:[i.jsx("option",{value:"",children:"Add callback..."}),u.filter(d=>{const p=d.module_path;return!c.some(f=>f.module_path===p)}).map(d=>i.jsx("option",{value:d.id,children:d.name},d.id))]})]}),c.length===0?i.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",fontStyle:"italic",padding:"8px"},children:"No callbacks"}):i.jsx("div",{className:"callback-list",children:c.map((d,p)=>{const f=n.find(m=>m.module_path===d.module_path);return i.jsxs("div",{className:"callback-chip",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 10px",background:"var(--bg-secondary)",borderRadius:"4px",marginBottom:"4px"},children:[i.jsx("span",{style:{fontSize:"12px"},children:(f==null?void 0:f.name)||d.module_path}),i.jsx("button",{onClick:()=>o(a,p),style:{background:"none",border:"none",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},title:"Remove callback",children:i.jsx(Le,{size:12})})]},p)})})]},a)})})}const Va=[{type:"LlmAgent",label:"LLM Agent",icon:Zn,color:"#00f5d4",description:"AI-powered agent with model reasoning"},{type:"SequentialAgent",label:"Sequential",icon:k0,color:"#7b2cbf",description:"Run sub-agents in order"},{type:"LoopAgent",label:"Loop",icon:x0,color:"#ffd93d",description:"Repeat sub-agents until exit"},{type:"ParallelAgent",label:"Parallel",icon:Vl,color:"#ff6b6b",description:"Run sub-agents simultaneously"}];function z2(){return`agent_${Date.now().toString(36)}`}function T2(e){return{provider:e.provider,model_name:e.model_name,api_base:e.api_base,temperature:e.temperature,max_output_tokens:e.max_output_tokens,top_p:e.top_p,top_k:e.top_k,fallbacks:[]}}function P2(e,t){const r={id:z2(),name:`New ${e}`,description:""},s=t?T2(t):{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]};switch(e){case"LlmAgent":return{...r,type:"LlmAgent",model:s,instruction:"",include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:[],sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};case"SequentialAgent":return{...r,type:"SequentialAgent",sub_agents:[]};case"LoopAgent":return{...r,type:"LoopAgent",sub_agents:[],max_iterations:10};case"ParallelAgent":return{...r,type:"ParallelAgent",sub_agents:[]};default:throw new Error(`Unknown agent type: ${e}`)}}function L2({onSelectAgent:e}){const{project:t,addAgent:n,removeAgent:r,updateAgent:s,selectedAgentId:o,setSelectedAgentId:a,mcpServers:l}=et(),[c,u]=S.useState(!1),[d,p]=S.useState(new Set),[f,m]=S.useState(!1),[y,_]=S.useState(""),[L,x]=S.useState(!1);if(S.useEffect(()=>{if(t){const M=t.agents.filter(U=>"sub_agents"in U&&U.sub_agents.length>0).map(U=>U.id);p(new Set(M))}},[t==null?void 0:t.id,t==null?void 0:t.agents.length]),!t)return null;async function g(){var M,U,D,Q;if(!(!y.trim()||!t)){x(!0);try{const T=await Vh(t.id,y);if(T.success&&T.config){const O=T.config,I=[];if((M=O.tools)!=null&&M.builtin)for(const z of O.tools.builtin)I.push({type:"builtin",name:z});if((U=O.tools)!=null&&U.mcp)for(const z of O.tools.mcp){const le=l.find(A=>A.name===z.server);le&&I.push({type:"mcp",server:{...le,tool_filter:z.tools}})}if((D=O.tools)!=null&&D.custom)for(const z of O.tools.custom){const le=t.custom_tools.find(A=>A.name===z);le&&I.push({type:"function",name:z,module_path:le.module_path})}if((Q=O.tools)!=null&&Q.agents)for(const z of O.tools.agents){const le=t.agents.find(A=>A.id===z);le&&I.push({type:"agent",agent_id:z,name:le.name})}const k=t.app.models||[],V=k.find(z=>z.id===t.app.default_model_id)||k[0],K={id:`agent_${Date.now().toString(36)}`,type:"LlmAgent",name:O.name||"new_agent",description:O.description||"",instruction:O.instruction||"",model:V?{provider:V.provider,model_name:V.model_name,api_base:V.api_base,temperature:V.temperature,max_output_tokens:V.max_output_tokens,top_p:V.top_p,top_k:V.top_k,fallbacks:[]}:{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]},include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:I,sub_agents:O.sub_agents||[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};n(K),a(K.id),e==null||e(K.id),m(!1),_("")}else alert("Failed to generate agent: "+(T.error||"Unknown error"))}catch(T){alert("Error generating agent: "+T.message)}finally{x(!1)}}}const h=t.agents.find(M=>M.id===o);function P(M){a(M),e==null||e(M)}function j(M){const U=t.app.models||[],D=U.find(T=>T.id===t.app.default_model_id)||U[0],Q=P2(M,D);n(Q),P(Q.id),u(!1)}function b(M,U){U.stopPropagation(),confirm("Delete this agent?")&&(r(M),o===M&&(e==null||e(null)))}function C(M){const U=new Set(d);U.has(M)?U.delete(M):U.add(M),p(U)}function w(M){const U=Va.find(D=>D.type===M);return U?U.icon:Zn}function R(M){const U=Va.find(D=>D.type===M);return U?U.color:"#888"}function N(M,U=0){return M.map(D=>{const Q=w(D.type),T=R(D.type),O="sub_agents"in D&&D.sub_agents.length>0,I=d.has(D.id),k=O?D.sub_agents.map(V=>t.agents.find(K=>K.id===V)).filter(V=>V!==void 0):[];return i.jsxs("div",{className:"agent-tree-item",children:[i.jsxs("div",{className:`agent-item ${o===D.id?"selected":""}`,onClick:()=>P(D.id),style:{paddingLeft:12+U*20},children:[O?i.jsx("button",{className:"expand-btn",onClick:V=>{V.stopPropagation(),C(D.id)},children:I?i.jsx(Ct,{size:16}):i.jsx(Nt,{size:16})}):i.jsx("span",{style:{width:20}}),i.jsx("div",{className:"agent-icon",style:{background:T},children:i.jsx(Q,{size:14})}),i.jsx("span",{className:"agent-name",children:D.name}),i.jsx("span",{className:"agent-type",children:D.type}),i.jsx("button",{className:"delete-btn",onClick:V=>b(D.id,V),children:i.jsx(Le,{size:14})})]}),O&&I&&i.jsx("div",{className:"sub-agents",children:N(k,U+1)})]},D.id)})}const v=new Set(t.agents.flatMap(M=>"sub_agents"in M?M.sub_agents:[])),E=t.agents.filter(M=>!v.has(M.id));return i.jsxs("div",{className:"agents-panel",children:[i.jsx("style",{children:`
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
      `}),i.jsxs("aside",{className:"agents-sidebar",children:[i.jsxs("div",{className:"sidebar-header",children:[i.jsxs("h3",{children:["Agents (",t.agents.length,")"]}),i.jsxs("div",{className:"header-buttons",children:[i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>m(!0),title:"AI-powered agent setup",children:[i.jsx(Ea,{size:14}),"Quick"]}),i.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>u(!0),children:[i.jsx(Oe,{size:14}),"Add"]})]})]}),i.jsx("div",{className:"agents-list",children:t.agents.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx(Zn,{size:32}),i.jsx("p",{children:"No agents yet"})]}):N(E)})]}),i.jsx("div",{className:"agent-editor-area",children:h?i.jsx(S2,{agent:h}):i.jsxs("div",{className:"empty-state card",children:[i.jsx(Zn,{size:48}),i.jsxs("p",{children:["Select an agent to edit",i.jsx("br",{}),"or create a new one"]})]})}),c&&i.jsx("div",{className:"type-selector",onClick:()=>u(!1),children:i.jsxs("div",{className:"type-selector-content",onClick:M=>M.stopPropagation(),children:[i.jsx("h2",{children:"Add Agent"}),i.jsx("div",{className:"type-options",children:Va.map(({type:M,label:U,icon:D,color:Q,description:T})=>i.jsxs("button",{className:"type-option",onClick:()=>j(M),children:[i.jsx("div",{className:"type-option-icon",style:{background:Q},children:i.jsx(D,{size:20})}),i.jsxs("div",{className:"type-option-info",children:[i.jsx("h4",{children:U}),i.jsx("p",{children:T})]})]},M))})]})}),f&&i.jsx("div",{className:"type-selector",onClick:()=>!L&&m(!1),children:i.jsxs("div",{className:"quick-setup-content",onClick:M=>M.stopPropagation(),children:[i.jsxs("h2",{children:[i.jsx(Ea,{size:20})," Quick Agent Setup"]}),i.jsx("p",{className:"quick-setup-desc",children:"Describe what you want this agent to do, and AI will configure everything: name, description, instruction, tools, and sub-agents."}),i.jsxs("div",{className:"quick-setup-form",children:[i.jsx("textarea",{value:y,onChange:M=>_(M.target.value),placeholder:"Example: An agent that searches the web for information and summarizes the results. It should be able to search Google and handle multiple queries in parallel.",rows:5,disabled:L,autoFocus:!0}),i.jsxs("div",{className:"quick-setup-info",children:[i.jsx("strong",{children:"Available resources:"}),i.jsxs("ul",{children:[i.jsxs("li",{children:[t.app.state_keys.length," state keys"]}),i.jsxs("li",{children:[l.length," MCP servers"]}),i.jsxs("li",{children:[t.custom_tools.length," custom tools"]}),i.jsxs("li",{children:[t.agents.length," existing agents"]})]})]}),i.jsxs("div",{className:"quick-setup-actions",children:[i.jsx("button",{className:"btn btn-secondary",onClick:()=>m(!1),disabled:L,children:"Cancel"}),i.jsx("button",{className:"btn btn-primary",onClick:g,disabled:L||!y.trim(),children:L?i.jsxs(i.Fragment,{children:[i.jsx(Ur,{size:14,className:"spin"}),"Generating..."]}):i.jsxs(i.Fragment,{children:[i.jsx(Ea,{size:14}),"Create Agent"]})})]})]})]})})]})}var Su="\x1B[0m",Cu="\x1B[1m",Zg=e=>e instanceof Error?e.message:typeof e=="string"?e:"An unknown error occurred",A2=e=>{let t=Zg(e),n=`${Cu}[MONACOPILOT ERROR] ${t}${Su}`;return console.error(n),{message:t}},R2=(e,t)=>{console.warn(`${Cu}[MONACOPILOT WARN] ${e}${t?`
${Zg(t)}`:""}${Su}`)},I2=(e,t,n)=>console.warn(`${Cu}[MONACOPILOT DEPRECATED] "${e}" is deprecated${n?` in ${n}`:""}. Please use "${t}" instead. It will be removed in a future version.${Su}`),wo={report:A2,warn:R2,warnDeprecated:I2},Gp=(e,t,n={})=>{if(t<=0)return"";let r=e.split(`
`),s=r.length;if(t>=s)return e;if(n.truncateDirection==="keepEnd"){let a=r.slice(-t);return a.every(l=>l==="")?`
`.repeat(t):a.join(`
`)}let o=r.slice(0,t);return o.every(a=>a==="")?`
`.repeat(t):o.join(`
`)},M2=100,O2=!0,ex="onIdle",$2=!0,D2=120,F2=400,B2=0,Nu=(e,t)=>t.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:e.lineNumber,endColumn:e.column}),U2=(e,t)=>t.getValueInRange({startLineNumber:e.lineNumber,startColumn:e.column,endLineNumber:t.getLineCount(),endColumn:t.getLineMaxColumn(t.getLineCount())}),V2=e=>e.getValue(),W2=class{constructor(e){this.capacity=e,this.head=0,this.tail=0,this.size=0,this.buffer=new Array(e)}enqueue(e){let t;return this.size===this.capacity&&(t=this.dequeue()),this.buffer[this.tail]=e,this.tail=(this.tail+1)%this.capacity,this.size++,t}dequeue(){if(this.size===0)return;let e=this.buffer[this.head];return this.buffer[this.head]=void 0,this.head=(this.head+1)%this.capacity,this.size--,e}getAll(){return this.buffer.filter(e=>e!==void 0)}clear(){this.buffer=new Array(this.capacity),this.head=0,this.tail=0,this.size=0}getSize(){return this.size}isEmpty(){return this.size===0}isFull(){return this.size===this.capacity}},tx=class nx{constructor(){this.cache=new W2(nx.MAX_CACHE_SIZE)}get(t,n){return this.cache.getAll().filter(r=>this.isValidCacheItem(r,t,n))}add(t){t.completion.trim()&&this.cache.enqueue(t)}clear(){this.cache.clear()}isValidCacheItem(t,n,r){let s=t.textBeforeCursor.trim(),o=Nu(n,r),a=o,l=r.getLineContent(n.lineNumber);if(n.column===l.length+1&&n.lineNumber<r.getLineCount()){let u=r.getLineContent(n.lineNumber+1);a=`${o}
${u}`}if(!(a.trim().includes(s)||s.includes(a.trim())))return!1;let c=r.getValueInRange(t.range);return this.isPartialMatch(c,t.completion)?this.isPositionValid(t,n):!1}isPartialMatch(t,n){let r=t.trim(),s=n.trim();return s.startsWith(r)||r.startsWith(s)}isPositionValid(t,n){let{range:r}=t,{startLineNumber:s,startColumn:o,endLineNumber:a,endColumn:l}=r,{lineNumber:c,column:u}=n;return c<s||c>a?!1:s===a?u>=o-1&&u<=l+1:c===s?u>=o-1:c===a?u<=l+1:!0}};tx.MAX_CACHE_SIZE=20;var H2=tx,q2=class{constructor(e){this.formattedCompletion="",this.formattedCompletion=e}setCompletion(e){return this.formattedCompletion=e,this}removeInvalidLineBreaks(){return this.formattedCompletion=this.formattedCompletion.trimEnd(),this}removeMarkdownCodeSyntax(){return this.formattedCompletion=this.removeMarkdownCodeBlocks(this.formattedCompletion),this}removeMarkdownCodeBlocks(e){let t=e.split(`
`),n=[],r=!1;for(let s=0;s<t.length;s++){let o=t[s],a=o.trim().startsWith("```");if(a&&!r){r=!0;continue}if(a&&r){r=!1;continue}n.push(o)}return n.join(`
`)}removeExcessiveNewlines(){return this.formattedCompletion=this.formattedCompletion.replace(/\n{3,}/g,`

`),this}build(){return this.formattedCompletion}},J2=class{findOverlaps(e,t,n){if(!e)return{startOverlapLength:0,maxOverlapLength:0};let r=e.length,s=t.length,o=n.length,a=0,l=0,c=0,u=Math.min(r,s);for(let f=1;f<=u;f++){let m=e.substring(0,f),y=t.slice(-f);m===y&&(c=f)}let d=Math.min(r,o);for(let f=0;f<d&&e[f]===n[f];f++)a++;for(let f=1;f<=d;f++)e.slice(-f)===n.slice(0,f)&&(l=f);let p=Math.max(a,l);if(p===0){for(let f=1;f<r;f++)if(n.startsWith(e.substring(f))){p=r-f;break}}return{startOverlapLength:c,maxOverlapLength:p}}},K2=class{constructor(e){this.monaco=e,this.textOverlapCalculator=new J2}computeInsertionRange(e,t,n){if(!t)return this.createEmptyRange(e);let r=n.getOffsetAt(e),s=n.getValue().substring(0,r),o=n.getValue().substring(r);if(r>=n.getValue().length)return this.createEmptyRange(e);if(o.length===0)return this.createEmptyRange(e);let{startOverlapLength:a,maxOverlapLength:l}=this.textOverlapCalculator.findOverlaps(t,s,o),c=a>0?n.getPositionAt(r-a):e,u=r+l,d=n.getPositionAt(u);return new this.monaco.Range(c.lineNumber,c.column,d.lineNumber,d.column)}computeCacheRange(e,t){let n=e.lineNumber,r=e.column,s=t.split(`
`),o=s.length-1,a=n+o,l=o===0?r+s[0].length:s[o].length+1;return new this.monaco.Range(n,r,a,l)}createEmptyRange(e){return new this.monaco.Range(e.lineNumber,e.column,e.lineNumber,e.column)}},Q2=async e=>{let{endpoint:t,body:n}=e,r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok)throw new Error(`Error while fetching completion item: ${r.statusText}`);let{completion:s,error:o}=await r.json();return{completion:s,error:o}},G2=({pos:e,mdl:t,options:n})=>{let{filename:r,language:s,technologies:o,relatedFiles:a,maxContextLines:l=M2}=n,c=a&&a.length>0?3:2,u=l?Math.floor(l/c):void 0,d=(_,L,x)=>{let g=_(e,t);return L?Gp(g,L,x):g},p=(_,L)=>!_||!L?_:_.map(({content:x,...g})=>({...g,content:Gp(x,L)})),f=d(Nu,u,{truncateDirection:"keepEnd"}),m=d(U2,u,{truncateDirection:"keepStart"}),y=p(a,u);return{filename:r,language:s,technologies:o,relatedFiles:y,textBeforeCursor:f,textAfterCursor:m,cursorPosition:e}},Y2=(e,t=300)=>{let n=null,r=null,s=(...o)=>{if(r)return r.args=o,r.promise;let a,l,c=new Promise((u,d)=>{a=u,l=d});return r={args:o,promise:c,resolve:a,reject:l},n&&(clearTimeout(n),n=null),n=setTimeout(async()=>{let u=r;if(u){r=null,n=null;try{let d=await e(...u.args);u.resolve(d)}catch(d){u.reject(d)}}},t),c};return s.cancel=()=>{n&&(clearTimeout(n),n=null),r&&(r.reject(new Error("Cancelled")),r=null)},s},X2=e=>typeof e=="string"?e==="Cancelled"||e==="AbortError":e instanceof Error?e.message==="Cancelled"||e.name==="AbortError":!1,ai=e=>({items:e,enableForwardStability:!0}),ic=new H2,Z2=async({monaco:e,mdl:t,pos:n,token:r,isCompletionAccepted:s,options:o})=>{let{trigger:a=ex,enableCaching:l=O2,allowFollowUpCompletions:c=$2,onError:u,requestHandler:d}=o;if(l&&!s){let p=ic.get(n,t).map(f=>({insertText:f.completion,range:f.range}));if(p.length>0)return ai(p)}if(r.isCancellationRequested||!c&&s)return ai([]);try{let p=Y2(async y=>{var L,x;(L=o.onCompletionRequested)==null||L.call(o,y);let _;if(d)_=await d(y);else if(o.endpoint)_=await Q2({endpoint:o.endpoint,...y});else throw new Error('No endpoint specified for completion request. Please set the "endpoint" option in registerCompletion, or provide a custom requestHandler.');if(_.error)throw new Error(_.error);return(x=o.onCompletionRequestFinished)==null||x.call(o,y,_),_},{onTyping:D2,onIdle:F2,onDemand:B2}[a]);r.onCancellationRequested(()=>{p.cancel()});let f=G2({pos:n,mdl:t,options:o}),{completion:m}=await p({body:{completionMetadata:f}});if(m){let y=new q2(m).removeMarkdownCodeSyntax().removeExcessiveNewlines().removeInvalidLineBreaks().build(),_=new K2(e);return l&&ic.add({completion:y,range:_.computeCacheRange(n,y),textBeforeCursor:Nu(n,t)}),ai([{insertText:y,range:_.computeInsertionRange(n,y,t)}])}}catch(p){if(X2(p))return ai([]);u?u(p):wo.warn("Cannot provide completion",p)}return ai([])},Eu=new WeakMap,Go=e=>Eu.get(e),eS=(e,t)=>{Eu.set(e,t)},Yp=e=>{Eu.delete(e)},tS=e=>({isCompletionAccepted:!1,isCompletionVisible:!1,isExplicitlyTriggered:!1,hasRejectedCurrentCompletion:!1,options:e}),nS=(e,t)=>{let n=Go(e);!n||!n.options||(n.options={...n.options,...t})},rS=(e,t,n)=>{let r=Go(t);return r?e.languages.registerInlineCompletionsProvider(n.language,{provideInlineCompletions:(s,o,a,l)=>{if(s!==t.getModel())return{items:[]};let c=r.options||n;if(!(c.trigger==="onDemand"&&!r.isExplicitlyTriggered||c.triggerIf&&!c.triggerIf({text:V2(t),position:o,triggerType:c.trigger??ex})))return Z2({monaco:e,mdl:s,pos:o,token:l,isCompletionAccepted:r.isCompletionAccepted,options:c})},handleItemDidShow:(s,o,a)=>{var l,c;r.isExplicitlyTriggered=!1,r.hasRejectedCurrentCompletion=!1,!r.isCompletionAccepted&&(r.isCompletionVisible=!0,(c=(l=r.options||n).onCompletionShown)==null||c.call(l,a,o.range))},freeInlineCompletions:()=>{}}):null},iS={TAB:(e,t)=>t.keyCode===e.KeyCode.Tab,CMD_RIGHT_ARROW:(e,t)=>t.keyCode===e.KeyCode.RightArrow&&t.metaKey},sS=class{constructor(e,t,n){this.monaco=e,this.state=t,this.initialOptions=n}handleKeyEvent(e){let t=this.state.options||this.initialOptions,n={monaco:this.monaco,event:e,state:this.state,options:t};this.handleCompletionAcceptance(n),this.handleCompletionRejection(n)}handleCompletionAcceptance(e){var t,n;return e.state.isCompletionVisible&&this.isAcceptanceKey(e.event)?((n=(t=e.options).onCompletionAccepted)==null||n.call(t),e.state.isCompletionAccepted=!0,e.state.isCompletionVisible=!1,!0):(e.state.isCompletionAccepted=!1,!1)}handleCompletionRejection(e){var t,n;return this.shouldRejectCompletion(e)?((n=(t=e.options).onCompletionRejected)==null||n.call(t),e.state.hasRejectedCurrentCompletion=!0,!0):!1}shouldRejectCompletion(e){return e.state.isCompletionVisible&&!e.state.hasRejectedCurrentCompletion&&!e.state.isCompletionAccepted&&!this.isAcceptanceKey(e.event)}isAcceptanceKey(e){return Object.values(iS).some(t=>t(this.monaco,e))}},oS=(e,t,n,r)=>{let s=new sS(e,n,r);return t.onKeyDown(o=>s.handleKeyEvent(o))},rx=(e,t,n)=>{let r=[];eS(t,tS(n)),t.updateOptions({inlineSuggest:{enabled:!0}});try{let s=Go(t);if(!s)return wo.warn("Completion is not registered properly. State not found."),lS();let o=rS(e,t,n);o&&r.push(o);let a=oS(e,t,s,n);return r.push(a),{deregister:()=>{for(let l of r)l.dispose();ic.clear(),Yp(t)},trigger:()=>aS(t),updateOptions:l=>{nS(t,l(s.options||n))}}}catch(s){return n.onError?n.onError(s):wo.report(s),{deregister:()=>{for(let o of r)o.dispose();Yp(t)},trigger:()=>{},updateOptions:()=>{}}}},aS=e=>{let t=Go(e);if(!t){wo.warn("Completion is not registered. Use `registerCompletion` to register completion first.");return}t.isExplicitlyTriggered=!0,e.trigger("keyboard","editor.action.inlineSuggest.trigger",{})},lS=()=>({deregister:()=>{},trigger:()=>{},updateOptions:()=>{}});function cS(){return`tool_${Date.now().toString(36)}`}function uS(e){return/^[a-zA-Z0-9_]+$/.test(e)}const dS=`def my_tool(tool_context: ToolContext, param1: str) -> dict:
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
`;function pS({onSelectTool:e}){var Ce;const{project:t,updateProject:n,addCustomTool:r,updateCustomTool:s,removeCustomTool:o,selectedToolId:a,setSelectedToolId:l,builtinTools:c,mcpServers:u}=et(),[d,p]=S.useState(""),[f,m]=S.useState(null),[y,_]=S.useState("tools"),[L,x]=S.useState(null),[g,h]=S.useState(""),[P,j]=S.useState(!1),[b,C]=S.useState(null),[w,R]=S.useState(!1),[N,v]=S.useState(!1),[E,M]=S.useState(null),[U,D]=S.useState(null);if(!t)return null;const Q=t.mcp_servers||[],T=t.custom_tools.find(W=>W.id===a),O=Q.find(W=>W.name===L),I=new Set(Q.map(W=>W.name)),k=u.filter(W=>!I.has(W.name));function V(W){l(W),e==null||e(W)}S.useEffect(()=>{T&&(p(T.code),D(null))},[a]),S.useEffect(()=>{O&&(h(JSON.stringify(O,null,2)),j(!1))},[L]);function K(){const W=cS();r({id:W,name:"new_tool",description:"",module_path:"tools.custom",code:dS,state_keys_used:[]}),V(W)}function z(W,he){he.stopPropagation(),confirm("Delete this tool?")&&(o(W),a===W&&(e==null||e(null)))}function le(W){T&&(W.name!==void 0&&(W.name===""||uS(W.name)?D(null):D("Name can only contain letters, numbers, and underscores")),s(T.id,W))}function A(W){W!==void 0&&T&&(p(W),le({code:W}))}async function Z(){if(T){R(!0);try{const W=await Wh(t.id,T.name,T.description,T.state_keys_used);W.success&&W.code?(p(W.code),le({code:W.code})):(console.error("Failed to generate tool code:",W.error),alert("Failed to generate tool code: "+(W.error||"Unknown error")))}catch(W){console.error("Error generating tool code:",W),alert("Error generating tool code: "+W.message)}finally{R(!1)}}}const B=S.useRef(null),te=S.useCallback((W,he)=>{if(B.current&&typeof B.current=="function")try{B.current()}catch{}try{const Te=rx(he,W,{language:"python",endpoint:"/api/code-completion",trigger:"onTyping"});typeof Te=="function"?B.current=Te:B.current=null}catch{B.current=null}},[]);S.useEffect(()=>()=>{if(B.current&&typeof B.current=="function")try{B.current()}catch{}},[]);function ae(){const W={name:`mcp_server_${Date.now().toString(36)}`,description:"New MCP Server",connection_type:"stdio",command:"npx",args:["-y","@modelcontextprotocol/server-example"],env:{},headers:{},timeout:10};n({mcp_servers:[...Q,W]}),x(W.name),C(null)}function $(W){const he={...W};n({mcp_servers:[...Q,he]}),x(he.name),C(null)}function q(W,he){he.stopPropagation(),confirm("Delete this MCP server?")&&(n({mcp_servers:Q.filter(Te=>Te.name!==W)}),L===W&&x(null))}function J(W){W!==void 0&&(h(W),j(W!==JSON.stringify(O,null,2)))}function Y(){if(O)try{const W=JSON.parse(g),he=O.name,Te=Q.map(mt=>mt.name===he?W:mt);n({mcp_servers:Te}),x(W.name),j(!1)}catch(W){alert("Invalid JSON: "+W.message)}}async function ne(){v(!0),M(null);try{const W=JSON.parse(g),he=await qh({connection_type:W.connection_type,command:W.command,args:W.args,env:W.env,url:W.url,headers:W.headers,timeout:W.timeout||30});if(M(he),he.success&&he.tools.length>0){const Te={...W,tool_filter:he.tools.map(mt=>mt.name)};h(JSON.stringify(Te,null,2)),j(!0)}}catch(W){M({success:!1,tools:[],error:W.message})}finally{v(!1)}}const ce={};return t.custom_tools.forEach(W=>{const he=W.module_path||"tools";ce[he]||(ce[he]=[]),ce[he].push(W)}),i.jsxs("div",{className:"tools-panel",children:[i.jsx("style",{children:`
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
      `}),i.jsxs("aside",{className:"tools-sidebar",children:[i.jsxs("div",{className:"sidebar-tabs",children:[i.jsxs("button",{className:`sidebar-tab ${y==="tools"?"active":""}`,onClick:()=>_("tools"),children:[i.jsx(Xt,{size:14}),"Tools"]}),i.jsxs("button",{className:`sidebar-tab ${y==="mcp"?"active":""}`,onClick:()=>_("mcp"),children:[i.jsx(ur,{size:14}),"MCP"]})]}),y==="tools"?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"sidebar-header",children:[i.jsxs("h3",{children:["Custom Tools (",t.custom_tools.length,")"]}),i.jsxs("button",{className:"btn btn-primary btn-sm",onClick:K,children:[i.jsx(Oe,{size:14}),"New"]})]}),i.jsxs("div",{className:"tools-tree",children:[c.length>0&&i.jsxs("div",{className:"module-group",children:[i.jsxs("div",{className:"module-header",children:[i.jsx(Yd,{size:14}),"Built-in Tools"]}),c.map(W=>i.jsxs("div",{className:`tool-item builtin ${(f==null?void 0:f.name)===W.name?"selected":""}`,onClick:()=>{m(W),V(null),x(null)},children:[i.jsx(Hl,{size:14}),i.jsx("span",{className:"tool-name",children:W.name})]},W.name))]}),t.custom_tools.length===0&&c.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx(Zt,{size:32}),i.jsx("p",{children:"No tools defined yet"})]}):t.custom_tools.length>0&&Object.entries(ce).map(([W,he])=>i.jsxs("div",{className:"module-group",children:[i.jsxs("div",{className:"module-header",children:[i.jsx(p0,{size:14}),W]}),he.map(Te=>i.jsxs("div",{className:`tool-item ${a===Te.id?"selected":""}`,onClick:()=>{V(Te.id),m(null),x(null)},children:[i.jsx(Xt,{size:14}),i.jsx("span",{className:"tool-name",children:Te.name}),i.jsx("button",{className:"delete-btn",onClick:mt=>z(Te.id,mt),children:i.jsx(Le,{size:14})})]},Te.id))]},W))]})]}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"sidebar-header",children:[i.jsxs("h3",{children:["MCP Servers (",Q.length,")"]}),i.jsxs("button",{className:"btn btn-primary btn-sm",onClick:ae,children:[i.jsx(Oe,{size:14}),"Custom"]})]}),i.jsxs("div",{className:"tools-tree",children:[Q.length>0&&i.jsxs("div",{className:"module-group",children:[i.jsxs("div",{className:"module-header",children:[i.jsx(Wl,{size:14}),"Configured (",Q.length,")"]}),Q.map(W=>i.jsxs("div",{className:`tool-item ${L===W.name?"selected":""}`,onClick:()=>{x(W.name),C(null),V(null),m(null)},children:[i.jsx(ur,{size:14}),i.jsx("span",{className:"tool-name",children:W.name}),i.jsx("span",{className:"tool-type-badge",children:W.connection_type}),i.jsx("button",{className:"delete-btn",onClick:he=>q(W.name,he),children:i.jsx(Le,{size:14})})]},W.name))]}),k.length>0&&i.jsxs("div",{className:"module-group",children:[i.jsxs("div",{className:"module-header",children:[i.jsx(Yd,{size:14}),"Available Templates (",k.length,")"]}),k.map(W=>i.jsxs("div",{className:`tool-item known-server ${(b==null?void 0:b.name)===W.name?"selected":""}`,onClick:()=>{C(W),x(null),V(null),m(null)},children:[i.jsx(ur,{size:14}),i.jsx("span",{className:"tool-name",children:W.name}),i.jsx("span",{className:"tool-type-badge",children:W.connection_type})]},W.name))]}),Q.length===0&&k.length===0&&i.jsxs("div",{className:"empty-state",children:[i.jsx(ur,{size:32}),i.jsx("p",{children:"No MCP servers available"})]})]})]})]}),i.jsx("div",{className:"tool-editor",children:f?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"editor-header",children:[i.jsx(Hl,{size:20,style:{color:"var(--accent-secondary)"}}),i.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:f.name}),i.jsx("span",{className:"badge badge-muted",children:"Built-in"})]}),i.jsxs("div",{className:"builtin-tool-info",children:[i.jsxs("div",{className:"info-section",children:[i.jsx("h4",{children:"Description"}),i.jsx("p",{children:f.description||"No description available."})]}),i.jsxs("div",{className:"info-section",children:[i.jsx("h4",{children:"Usage"}),i.jsx("p",{children:"This is a built-in tool provided by ADK. Add it to any LLM agent's tools list to enable it."}),i.jsxs("code",{children:['tools: ["',f.name,'"]']})]}),i.jsxs("div",{className:"info-section",children:[i.jsx("h4",{children:"Note"}),i.jsx("p",{children:"Built-in tools are read-only and cannot be modified. Create a custom tool if you need different behavior."})]})]})]}):T?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"editor-header",children:[i.jsx(Xt,{size:20,style:{color:"var(--accent-primary)"}}),i.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[i.jsx("input",{type:"text",value:T.name,onChange:W=>le({name:W.target.value}),placeholder:"Tool name",style:{borderColor:U?"var(--error)":void 0}}),U&&i.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:U})]})]}),i.jsxs("div",{className:"editor-meta",children:[i.jsxs("div",{className:"meta-field grow",children:[i.jsx("label",{children:"Description"}),i.jsx("input",{type:"text",value:T.description,onChange:W=>le({description:W.target.value}),placeholder:"What does this tool do?"})]}),i.jsxs("div",{className:"meta-field",children:[i.jsx("label",{children:"Module Path"}),i.jsx("input",{type:"text",value:T.module_path,onChange:W=>le({module_path:W.target.value}),placeholder:"tools.custom",style:{width:180}})]})]}),i.jsxs("div",{className:"code-actions",children:[i.jsx("button",{className:"btn btn-secondary btn-sm",onClick:Z,disabled:w||!T.name||!T.description,title:!T.name||!T.description?"Add a name and description first":"Generate code using AI",children:w?i.jsxs(i.Fragment,{children:[i.jsx(Ur,{size:14,className:"spinning"}),"Generating..."]}):i.jsxs(i.Fragment,{children:[i.jsx(lu,{size:14}),"Write Tool"]})}),i.jsx("span",{className:"action-hint",children:"AI will generate code based on the tool name, description, and selected state keys"})]}),i.jsx("div",{className:"code-editor",children:i.jsx(Ft,{height:"100%",language:"python",theme:"vs-dark",value:d,onChange:A,onMount:te,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12}}})}),i.jsxs("div",{className:"state-keys-panel",children:[i.jsxs("h4",{children:[i.jsx(su,{size:14})," State Keys Used"]}),i.jsx("div",{className:"state-key-chips",children:t.app.state_keys.length===0?i.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"No state keys defined. Add them in App Config."}):t.app.state_keys.map(W=>{const he=T.state_keys_used.includes(W.name);return i.jsxs("label",{className:`state-key-chip ${he?"selected":""}`,title:W.description,children:[i.jsx("input",{type:"checkbox",checked:he,onChange:Te=>{const mt=Te.target.checked?[...T.state_keys_used,W.name]:T.state_keys_used.filter(mn=>mn!==W.name);le({state_keys_used:mt})}}),W.name,i.jsxs("span",{style:{color:"var(--text-muted)",fontSize:11},children:["(",W.type,")"]})]},W.name)})})]})]}):b?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"editor-header",children:[i.jsx(ur,{size:20,style:{color:"var(--accent-secondary)"}}),i.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:b.name}),i.jsx("span",{className:"badge badge-info",children:b.connection_type}),i.jsx("span",{className:"badge badge-muted",children:"Template"}),i.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>$(b),children:[i.jsx(Oe,{size:14}),"Add to Project"]})]}),i.jsxs("div",{className:"known-server-preview",children:[i.jsxs("div",{className:"preview-section",children:[i.jsx("h4",{children:"Description"}),i.jsx("p",{children:b.description})]}),i.jsxs("div",{className:"preview-section",children:[i.jsx("h4",{children:"Command"}),i.jsxs("code",{children:[b.command," ",(Ce=b.args)==null?void 0:Ce.join(" ")]})]}),b.env&&Object.keys(b.env).length>0&&i.jsxs("div",{className:"preview-section",children:[i.jsx("h4",{children:"Required Environment Variables"}),i.jsx("div",{className:"env-vars",children:Object.entries(b.env).map(([W,he])=>i.jsxs("div",{className:"env-var",children:[i.jsx("code",{children:W}),he?i.jsx("span",{className:"env-value",children:he}):i.jsx("span",{className:"env-required",children:"Required"})]},W))})]}),b.tool_filter&&b.tool_filter.length>0&&i.jsxs("div",{className:"preview-section",children:[i.jsxs("h4",{children:["Available Tools (",b.tool_filter.length,")"]}),i.jsx("div",{className:"tool-badges",children:b.tool_filter.map(W=>i.jsx("span",{className:"tool-badge",children:W},W))})]}),i.jsxs("div",{className:"preview-section",children:[i.jsx("h4",{children:"Configuration Preview"}),i.jsx("pre",{className:"config-preview",children:JSON.stringify(b,null,2)})]})]})]}):O?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"editor-header",children:[i.jsx(ur,{size:20,style:{color:"var(--accent-primary)"}}),i.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:O.name}),i.jsx("span",{className:"badge badge-info",children:O.connection_type}),P&&i.jsx("span",{className:"unsaved-badge",children:"Unsaved"}),i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:ne,disabled:N,title:"Test connection and discover available tools",children:[N?i.jsx(Ur,{size:14,className:"spin"}):i.jsx(Wl,{size:14}),N?"Testing...":"Test Connection"]}),i.jsxs("button",{className:"btn btn-primary btn-sm",onClick:Y,disabled:!P,children:[i.jsx(au,{size:14}),"Save"]})]}),E&&i.jsx("div",{className:`mcp-test-result ${E.success?"success":"error"}`,children:E.success?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"test-result-header",children:["✓ Connected! Found ",E.tools.length," tools"]}),E.tools.length>0&&i.jsxs("div",{className:"test-result-tools",children:[i.jsx("strong",{children:"Available tools:"}),i.jsx("ul",{children:E.tools.map(W=>i.jsxs("li",{children:[i.jsx("code",{children:W.name}),W.description&&i.jsxs("span",{children:[" — ",W.description]})]},W.name))}),i.jsx("p",{className:"hint",children:'The tool_filter has been updated with these tools. Click "Save" to apply.'})]})]}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"test-result-header",children:"✗ Connection failed"}),i.jsx("div",{className:"test-result-error",children:E.error})]})}),i.jsx("div",{className:"mcp-info",children:i.jsx("p",{children:'Configure your MCP server using JSON. Click "Test Connection" to verify and discover available tools.'})}),i.jsx("div",{className:"code-editor",children:i.jsx(Ft,{height:"100%",language:"json",theme:"vs-dark",value:g,onChange:J,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},formatOnPaste:!0}})}),i.jsxs("div",{className:"mcp-help",children:[i.jsx("h4",{children:"Schema Reference"}),i.jsxs("div",{className:"schema-fields",children:[i.jsxs("div",{className:"schema-field",children:[i.jsx("code",{children:"name"}),i.jsx("span",{children:"Unique identifier for this server"})]}),i.jsxs("div",{className:"schema-field",children:[i.jsx("code",{children:"description"}),i.jsx("span",{children:"Human-readable description"})]}),i.jsxs("div",{className:"schema-field",children:[i.jsx("code",{children:"connection_type"}),i.jsx("span",{children:'"stdio" | "sse" | "http"'})]}),i.jsxs("div",{className:"schema-field",children:[i.jsx("code",{children:"command"}),i.jsx("span",{children:"Command to run (for stdio)"})]}),i.jsxs("div",{className:"schema-field",children:[i.jsx("code",{children:"args"}),i.jsx("span",{children:"Array of command arguments"})]}),i.jsxs("div",{className:"schema-field",children:[i.jsx("code",{children:"env"}),i.jsx("span",{children:"Environment variables object"})]}),i.jsxs("div",{className:"schema-field",children:[i.jsx("code",{children:"url"}),i.jsx("span",{children:"Server URL (for sse/http)"})]}),i.jsxs("div",{className:"schema-field",children:[i.jsx("code",{children:"tool_filter"}),i.jsx("span",{children:"Array of tool names to include (null/omit = all tools, [] = no tools)"})]})]})]})]}):i.jsxs("div",{className:"empty-state",children:[i.jsx(Zt,{size:48}),i.jsxs("p",{children:["Select a tool to view",i.jsx("br",{}),"or create a new custom tool"]})]})})]})}function fS(){return`callback_${Date.now().toString(36)}`}function Xp(e){return/^[a-zA-Z0-9_]+$/.test(e)}function ix(e){switch(e){case"before_agent":case"after_agent":return`from google.adk.agents.callback_context import CallbackContext
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
`;default:return ix("before_agent")}}function mS({onSelectCallback:e}){var w,R;const{project:t,updateProject:n,addCustomCallback:r,updateCustomCallback:s,removeCustomCallback:o}=et(),[a,l]=S.useState(""),[c,u]=S.useState(null),[d,p]=S.useState(null),[f,m]=S.useState(!1),y=S.useRef(null);if(!t)return null;const _=t.custom_callbacks||[],L=_.find(N=>N.id===c);function x(N){u(N),e==null||e(N)}S.useEffect(()=>{L?(l(L.code),p(null)):l("")},[c,L]);function g(){const N=fS(),v={id:N,name:"new_callback",description:"",module_path:"callbacks.custom",code:ix("before_agent"),state_keys_used:[]};r(v),x(N)}function h(N,v){v.stopPropagation(),confirm("Delete this callback?")&&(o(N),c===N&&(e==null||e(null),u(null),l("")))}function P(){if(!c)return;const N=_.find(M=>M.id===c);if(!N)return;const v=N.name.trim();if(!v){alert("Please enter a name");return}if(!Xp(v)){p("Name must contain only alphanumeric characters and underscores");return}if(_.find(M=>M.name===v&&M.id!==N.id)){p("A callback with this name already exists");return}s(N.id,{code:a,name:v,description:N.description,module_path:N.module_path,state_keys_used:N.state_keys_used}),p(null)}function j(N,v){y.current=v;try{rx(v,{endpoint:"/api/code-completion",language:"python"})}catch(E){console.warn("Failed to register Monacopilot completion:",E)}}async function b(){if(L){m(!0);try{let N="before_agent";const v=L.name.toLowerCase(),E=L.description.toLowerCase();v.includes("after_agent")||E.includes("after agent")?N="after_agent":v.includes("before_model")||E.includes("before model")?N="before_model":v.includes("after_model")||E.includes("after model")?N="after_model":v.includes("before_tool")||E.includes("before tool")?N="before_tool":v.includes("after_tool")||E.includes("after tool")?N="after_tool":(v.includes("before_agent")||E.includes("before agent"))&&(N="before_agent");const M=await Hh(t.id,L.name,L.description,N,L.state_keys_used);M.success&&M.code?(l(M.code),s(L.id,{code:M.code})):(console.error("Failed to generate callback code:",M.error),alert("Failed to generate callback code: "+(M.error||"Unknown error")))}catch(N){console.error("Error generating callback code:",N),alert("Error generating callback code: "+N.message)}finally{m(!1)}}}const C=((R=(w=t.app)==null?void 0:w.state_keys)==null?void 0:R.map(N=>N.name))||[];return i.jsxs("div",{className:"tools-panel",children:[i.jsx("style",{children:`
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
      `}),i.jsxs("div",{className:"tools-sidebar",children:[i.jsxs("div",{className:"tools-sidebar-header",children:[i.jsx("h3",{children:"Callbacks"}),i.jsx("button",{className:"btn btn-primary btn-sm",onClick:g,title:"Add Callback",children:i.jsx(Oe,{size:16})})]}),i.jsx("div",{className:"tools-list",children:_.length===0?i.jsx("div",{style:{padding:"16px",color:"var(--text-secondary)",fontSize:"14px"},children:"No callbacks yet. Click + to add one."}):_.map(N=>i.jsxs("div",{className:`tool-item ${c===N.id?"selected":""}`,onClick:()=>x(N.id),children:[i.jsxs("div",{style:{flex:1},children:[i.jsx("div",{className:"tool-item-name",children:N.name}),N.description&&i.jsx("div",{className:"tool-item-type",style:{fontSize:"11px",color:"var(--text-secondary)",marginTop:"2px"},children:N.description})]}),i.jsx("div",{className:"tool-item-actions",children:i.jsx("button",{className:"btn btn-icon btn-sm",onClick:v=>h(N.id,v),title:"Delete",children:i.jsx(Le,{size:14})})})]},N.id))})]}),i.jsx("div",{className:"tools-editor",children:L?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"tools-editor-header",children:[i.jsx("h3",{children:"Edit Callback"}),i.jsxs("button",{className:"btn btn-primary btn-sm",onClick:P,children:[i.jsx(au,{size:16,style:{marginRight:"6px"}}),"Save"]})]}),i.jsxs("div",{className:"tools-editor-content",style:{padding:"16px",overflowY:"auto"},children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Name"}),i.jsx("input",{type:"text",value:L.name,onChange:N=>{const v=N.target.value;s(L.id,{name:v}),d&&Xp(v)&&p(null)},className:d?"error":""}),d&&i.jsx("div",{className:"error-message",children:d})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Description"}),i.jsx("textarea",{value:L.description,onChange:N=>s(L.id,{description:N.target.value}),rows:2,placeholder:"Describe what this callback does..."})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Module Path"}),i.jsx("input",{type:"text",value:L.module_path,onChange:N=>s(L.id,{module_path:N.target.value}),placeholder:"callbacks.custom"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"State Keys Used"}),i.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"8px"},children:C.map(N=>{const v=L.state_keys_used.includes(N);return i.jsxs("button",{type:"button",className:`btn btn-sm ${v?"btn-primary":"btn-secondary"}`,onClick:()=>{const E=v?L.state_keys_used.filter(M=>M!==N):[...L.state_keys_used,N];s(L.id,{state_keys_used:E})},children:[i.jsx(su,{size:12,style:{marginRight:"4px"}}),N]},N)})}),C.length===0&&i.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"12px",marginTop:"4px"},children:"No state keys defined in App Config"})]}),i.jsxs("div",{className:"form-group",children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[i.jsx("label",{children:"Code"}),i.jsx("button",{className:"btn btn-secondary btn-sm",onClick:b,disabled:f||!L.name,title:L.name?"Generate code using AI":"Add a name first",children:f?i.jsxs(i.Fragment,{children:[i.jsx(Ur,{size:14,className:"spinning"}),"Generating..."]}):i.jsxs(i.Fragment,{children:[i.jsx(lu,{size:14}),"Generate"]})})]}),i.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"8px"},children:"AI will generate code based on the callback name, description, and selected state keys"}),i.jsx("div",{className:"code-editor-container",children:i.jsx(Ft,{height:"100%",language:"python",theme:"vs-dark",value:a,onChange:N=>l(N||""),onMount:j,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0}})})]})]})]}):i.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)"},children:"Select a callback to edit, or create a new one"})})]})}const Zp={agent_start:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},agent_end:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},tool_call:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},tool_result:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},model_call:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},model_response:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},state_change:{bg:"#3d0d1f",fg:"#fda4af",border:"#f43f5e"},transfer:{bg:"#0d2d3d",fg:"#7dd3fc",border:"#0ea5e9"},callback_start:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},callback_end:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"}},hS={agent_start:Vl,agent_end:Vl,tool_call:Xt,tool_result:Xt,model_call:iu,model_response:vo,state_change:ln,transfer:ag,callback_start:Zt,callback_end:Zt};function gS(e){var t,n,r,s,o,a,l,c,u,d,p,f,m,y,_,L,x,g,h,P,j;switch(e.event_type){case"agent_start":return`START ${e.agent_name}`;case"agent_end":return(t=e.data)!=null&&t.error?`END ${e.agent_name} [ERROR]`:`END ${e.agent_name}`;case"tool_call":const C=Object.entries(((n=e.data)==null?void 0:n.args)||{}).map(([I,k])=>{const V=k!=null?JSON.stringify(k):"null";return`${I}=${V.slice(0,20)}`}).join(", ")||"";return`CALL ${((r=e.data)==null?void 0:r.tool_name)||"unknown"}(${C.slice(0,60)}${C.length>60?"...":""})`;case"tool_result":const w=(s=e.data)==null?void 0:s.result;let R="";if((a=(o=w==null?void 0:w.content)==null?void 0:o[0])!=null&&a.text)R=String(w.content[0].text).slice(0,60);else if(typeof w=="string")R=w.slice(0,60);else if(w!=null){const I=JSON.stringify(w);R=I?I.slice(0,60):""}else R="";return`RESULT ${((l=e.data)==null?void 0:l.tool_name)||"unknown"} → ${R}${R.length>=60?"...":""}`;case"model_call":return`LLM_REQ ${((u=(c=e.data)==null?void 0:c.contents)==null?void 0:u.length)||0} msgs, ${((d=e.data)==null?void 0:d.tool_count)||0} tools`;case"model_response":const N=((f=(p=e.data)==null?void 0:p.response_content)==null?void 0:f.parts)||((m=e.data)==null?void 0:m.parts)||[],v=N.find(I=>(I==null?void 0:I.type)==="function_call");if(v)return`LLM_RSP → ${v.name||"unknown"}()`;const E=N.find(I=>(I==null?void 0:I.type)==="text");if(E!=null&&E.text){const I=String(E.text);return`LLM_RSP "${I.slice(0,50)}${I.length>50?"...":""}"`}return`LLM_RSP (${((y=e.data)==null?void 0:y.finish_reason)||"complete"})`;case"state_change":return`STATE ${Object.keys(((_=e.data)==null?void 0:_.state_delta)||{}).join(", ")}`;case"transfer":return`TRANSFER → ${((L=e.data)==null?void 0:L.target)||"unknown"}`;case"callback_start":const U=((x=e.data)==null?void 0:x.callback_name)||"unknown",D=((g=e.data)==null?void 0:g.callback_type)||"";return`CALLBACK START ${D?`[${D}]`:""} ${U}`;case"callback_end":const Q=((h=e.data)==null?void 0:h.callback_name)||"unknown",T=((P=e.data)==null?void 0:P.callback_type)||"",O=(j=e.data)!=null&&j.error?" [ERROR]":"";return`CALLBACK END ${T?`[${T}]`:""} ${Q}${O}`;default:return e.event_type.toUpperCase()}}function xS(e,t){const n=e-t;return n<1?`+${(n*1e3).toFixed(0)}ms`:n<60?`+${n.toFixed(2)}s`:`+${Math.floor(n/60)}m${(n%60).toFixed(0)}s`}function yS({event:e}){var o,a,l,c,u,d,p,f,m,y,_,L,x,g,h,P;const[t,n]=S.useState(new Set(["instruction","messages","result","response","state_delta","data"])),r=j=>{const b=new Set(t);b.has(j)?b.delete(j):b.add(j),n(b)},s=(j,b=0,C=!1)=>{const w="  ".repeat(b),R="  ".repeat(b+1);if(j===null)return i.jsx("span",{className:"json-null",children:"null"});if(j===void 0)return i.jsx("span",{className:"json-undefined",children:"undefined"});if(typeof j=="boolean")return i.jsx("span",{className:"json-boolean",children:j.toString()});if(typeof j=="number")return i.jsx("span",{className:"json-number",children:j});if(typeof j=="string"){const N=j.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\t/g,"\\t");return N.length>300&&b>0?i.jsxs("span",{className:"json-string",children:['"',N.slice(0,300),'..." ',i.jsxs("span",{className:"json-truncated",children:["(",j.length," chars)"]})]}):i.jsxs("span",{className:"json-string",children:['"',N,'"']})}if(Array.isArray(j))return j.length===0?i.jsx("span",{className:"json-bracket",children:"[]"}):j.every(v=>v===null||typeof v!="object")&&j.length<=3?i.jsxs("span",{className:"json-inline",children:[i.jsx("span",{className:"json-bracket",children:"["}),j.map((v,E)=>i.jsxs("span",{children:[s(v,b+1,!0),E<j.length-1&&i.jsx("span",{className:"json-comma",children:", "})]},E)),i.jsx("span",{className:"json-bracket",children:"]"})]}):i.jsxs("span",{className:"json-block",children:[i.jsx("span",{className:"json-bracket",children:"["}),j.map((v,E)=>i.jsxs("span",{children:[`
`+R,s(v,b+1),E<j.length-1&&i.jsx("span",{className:"json-comma",children:","})]},E)),`
`+w,i.jsx("span",{className:"json-bracket",children:"]"})]});if(typeof j=="object"){const N=Object.entries(j);return N.length===0?i.jsx("span",{className:"json-bracket",children:"{}"}):N.length<=2&&N.every(([,E])=>E===null||typeof E!="object")&&C?i.jsxs("span",{className:"json-inline",children:[i.jsx("span",{className:"json-bracket",children:"{"}),N.map(([E,M],U)=>i.jsxs("span",{children:[i.jsxs("span",{className:"json-key",children:['"',E,'"']}),i.jsx("span",{className:"json-colon",children:": "}),s(M,b+1,!0),U<N.length-1&&i.jsx("span",{className:"json-comma",children:", "})]},E)),i.jsx("span",{className:"json-bracket",children:"}"})]}):i.jsxs("span",{className:"json-block",children:[i.jsx("span",{className:"json-bracket",children:"{"}),N.map(([E,M],U)=>i.jsxs("span",{children:[`
`+R,i.jsxs("span",{className:"json-key",children:['"',E,'"']}),i.jsx("span",{className:"json-colon",children:": "}),s(M,b+1),U<N.length-1&&i.jsx("span",{className:"json-comma",children:","})]},E)),`
`+w,i.jsx("span",{className:"json-bracket",children:"}"})]})}return String(j)};return i.jsxs("div",{className:"event-detail",children:[i.jsxs("div",{className:"detail-header",children:[i.jsx("span",{className:"detail-type",children:e.event_type}),i.jsx("span",{className:"detail-agent",children:e.agent_name}),i.jsx("span",{className:"detail-time",children:new Date(e.timestamp*1e3).toISOString()})]}),i.jsxs("div",{className:"detail-section",children:[i.jsxs("div",{className:"section-header",onClick:()=>r("data"),children:[t.has("data")?i.jsx(Ct,{size:12}):i.jsx(Nt,{size:12}),i.jsx("span",{children:"Event Data"})]}),t.has("data")&&i.jsx("div",{className:"section-content json-viewer",children:s(e.data)})]}),e.event_type==="agent_start"&&((o=e.data)==null?void 0:o.instruction)&&i.jsxs("div",{className:"detail-section",children:[i.jsxs("div",{className:"section-header",onClick:()=>r("instruction"),children:[t.has("instruction")?i.jsx(Ct,{size:12}):i.jsx(Nt,{size:12}),i.jsx("span",{children:"Instruction"}),i.jsxs("span",{className:"char-count",children:[e.data.instruction.length," chars"]})]}),t.has("instruction")&&i.jsx("div",{className:"section-content",children:i.jsx("pre",{className:"instruction-text",children:e.data.instruction})})]}),e.event_type==="model_call"&&((a=e.data)==null?void 0:a.contents)&&i.jsxs("div",{className:"detail-section",children:[i.jsxs("div",{className:"section-header",onClick:()=>r("messages"),children:[t.has("messages")?i.jsx(Ct,{size:12}):i.jsx(Nt,{size:12}),i.jsxs("span",{children:["Messages (",e.data.contents.length,")"]})]}),t.has("messages")&&i.jsx("div",{className:"section-content",children:e.data.contents.map((j,b)=>{var C;return i.jsxs("div",{className:"message-item",children:[i.jsx("span",{className:`message-role ${j.role}`,children:j.role}),i.jsx("div",{className:"message-parts",children:(C=j.parts)==null?void 0:C.map((w,R)=>i.jsxs("div",{className:"message-part",children:[w.text&&i.jsx("pre",{children:w.text}),w.function_call&&i.jsxs("div",{className:"function-call",children:[i.jsx("strong",{children:w.function_call.name}),i.jsx("pre",{children:JSON.stringify(w.function_call.args,null,2)})]}),w.function_response&&i.jsxs("div",{className:"function-response",children:[i.jsx("strong",{children:w.function_response.name}),i.jsx("pre",{children:JSON.stringify(w.function_response.response,null,2)})]})]},R))})]},b)})})]}),e.event_type==="tool_result"&&i.jsxs("div",{className:"detail-section",children:[i.jsxs("div",{className:"section-header",onClick:()=>r("result"),children:[t.has("result")?i.jsx(Ct,{size:12}):i.jsx(Nt,{size:12}),i.jsx("span",{children:"Tool Result"})]}),t.has("result")&&i.jsx("div",{className:"section-content",children:i.jsx("pre",{className:"result-content",children:((d=(u=(c=(l=e.data)==null?void 0:l.result)==null?void 0:c.content)==null?void 0:u[0])==null?void 0:d.text)||(typeof((p=e.data)==null?void 0:p.result)=="string"?e.data.result:JSON.stringify((f=e.data)==null?void 0:f.result,null,2))})})]}),e.event_type==="model_response"&&((m=e.data)==null?void 0:m.parts)&&i.jsxs("div",{className:"detail-section",children:[i.jsxs("div",{className:"section-header",onClick:()=>r("response"),children:[t.has("response")?i.jsx(Ct,{size:12}):i.jsx(Nt,{size:12}),i.jsxs("span",{children:["Response (",e.data.parts.length," part",e.data.parts.length!==1?"s":"",")"]}),e.data.token_counts&&i.jsxs("span",{className:"token-badge",children:[e.data.token_counts.input,"↑ ",e.data.token_counts.output,"↓"]})]}),t.has("response")&&i.jsx("div",{className:"section-content",children:e.data.parts.map((j,b)=>i.jsxs("div",{className:"response-part",children:[j.type==="text"&&j.text&&i.jsx("pre",{className:"response-text",children:j.text}),j.type==="function_call"&&i.jsxs("div",{className:"function-call",children:[i.jsxs("strong",{children:["→ ",j.name,"()"]}),j.args&&Object.keys(j.args).length>0&&i.jsx("pre",{children:JSON.stringify(j.args,null,2)})]}),j.thought&&i.jsx("div",{className:"thought-indicator",children:"💭 Thinking"})]},b))})]}),(e.event_type==="callback_start"||e.event_type==="callback_end")&&i.jsxs("div",{className:"detail-section",children:[i.jsxs("div",{className:"section-header",onClick:()=>r("callback_info"),children:[t.has("callback_info")?i.jsx(Ct,{size:12}):i.jsx(Nt,{size:12}),i.jsx("span",{children:"Callback Information"})]}),t.has("callback_info")&&i.jsxs("div",{className:"section-content",children:[i.jsxs("div",{children:[i.jsx("strong",{children:"Name:"})," ",((y=e.data)==null?void 0:y.callback_name)||"unknown"]}),i.jsxs("div",{children:[i.jsx("strong",{children:"Type:"})," ",((_=e.data)==null?void 0:_.callback_type)||"unknown"]}),i.jsxs("div",{children:[i.jsx("strong",{children:"Module Path:"})," ",((L=e.data)==null?void 0:L.module_path)||"unknown"]}),((x=e.data)==null?void 0:x.error)&&i.jsxs("div",{style:{color:"#ef4444",marginTop:"8px"},children:[i.jsxs("div",{children:[i.jsx("strong",{children:"Error:"})," ",e.data.error]}),((g=e.data)==null?void 0:g.error_type)&&i.jsxs("div",{style:{marginTop:"4px",fontSize:"0.9em",opacity:.8},children:[i.jsx("strong",{children:"Type:"})," ",e.data.error_type]}),((h=e.data)==null?void 0:h.stack_trace)&&i.jsxs("div",{style:{marginTop:"8px"},children:[i.jsx("strong",{children:"Stack Trace:"}),i.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"300px",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:e.data.stack_trace})]})]})]})]}),e.event_type==="state_change"&&((P=e.data)==null?void 0:P.state_delta)&&i.jsxs("div",{className:"detail-section",children:[i.jsxs("div",{className:"section-header",onClick:()=>r("state_delta"),children:[t.has("state_delta")?i.jsx(Ct,{size:12}):i.jsx(Nt,{size:12}),i.jsxs("span",{children:["State Changes (",Object.keys(e.data.state_delta).length,")"]})]}),t.has("state_delta")&&i.jsx("div",{className:"section-content",children:Object.entries(e.data.state_delta).map(([j,b])=>i.jsxs("div",{className:"state-delta-item",children:[i.jsx("div",{className:"state-delta-key",children:j}),i.jsx("pre",{className:"state-delta-value",children:typeof b=="string"?b:JSON.stringify(b,null,2)})]},j))})]})]})}function vS({content:e,title:t,onClose:n}){return i.jsxs("div",{className:"modal-overlay",onClick:n,children:[i.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[i.jsxs("div",{className:"modal-header",children:[i.jsx("h3",{children:t}),i.jsx("button",{className:"modal-close",onClick:n,children:"×"})]}),i.jsx("div",{className:"modal-body markdown-content",children:i.jsx(Xg,{children:e})})]}),i.jsx("style",{children:`
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
      `})]})}function bS({events:e,selectedEventIndex:t,project:n}){const[r,s]=S.useState(null),o=S.useMemo(()=>{var u;const l={};return(u=n==null?void 0:n.app)!=null&&u.state_keys&&n.app.state_keys.forEach(d=>{l[d.name]={value:void 0,timestamp:null,defined:!0,description:d.description,type:d.type}}),n!=null&&n.agents&&n.agents.forEach(d=>{if(d.type==="LlmAgent"&&d.output_key){const p=d.output_key;l[p]||(l[p]={value:void 0,timestamp:null,defined:!0,description:`Output from ${d.name}`,type:"string"})}}),(t!==null?e.slice(0,t+1):e).filter(d=>d.event_type==="state_change").forEach(d=>{var p;(p=d.data)!=null&&p.state_delta&&Object.entries(d.data.state_delta).forEach(([f,m])=>{var y;l[f]={...l[f],value:m,timestamp:d.timestamp,defined:((y=l[f])==null?void 0:y.defined)??!1}})}),l},[e,t,n]),a=Object.entries(o);return i.jsxs(i.Fragment,{children:[r&&i.jsx(vS,{content:r.content,title:r.title,onClose:()=>s(null)}),i.jsxs("div",{className:"state-snapshot",children:[i.jsx("style",{children:`
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
      `}),i.jsx("div",{className:"state-header",children:t!==null?`State after event #${t}`:e.length>0?"State at end of run":"Defined State Keys"}),a.length===0?i.jsx("div",{className:"state-empty",children:"No state keys defined"}):a.map(([l,{value:c,timestamp:u,defined:d,description:p,type:f}])=>i.jsxs("div",{className:`state-entry ${c===void 0?"unset":""}`,children:[i.jsxs("div",{className:"state-key",children:[l,f&&i.jsxs("span",{className:"state-type",children:["(",f,")"]})]}),i.jsx("div",{className:"state-value",onClick:()=>{if(c!==void 0){const m=typeof c=="string"?c:JSON.stringify(c,null,2);s({content:m,title:l})}},style:{cursor:c!==void 0?"pointer":"default"},title:c!==void 0?"Click to view in markdown viewer":void 0,children:c===void 0?"(not set)":typeof c=="string"?c:JSON.stringify(c,null,2)}),p&&i.jsx("div",{className:"state-desc",children:p}),u&&i.jsx("div",{className:"state-time",children:new Date(u*1e3).toLocaleTimeString()})]},l))]})]})}function Wa(e){if(!e)return{text:"",isError:!1};if(e.success===!1)return{text:e.error||"Unknown error",isError:!0};let t=e.result||e;if(typeof t=="string")try{const n=t.replace(/'/g,'"').replace(/True/g,"true").replace(/False/g,"false").replace(/None/g,"null");t=JSON.parse(n)}catch{return{text:t,isError:!1}}return t.content&&Array.isArray(t.content)?{text:t.content.filter(r=>r.type==="text").map(r=>r.text).join(`
`),isError:t.isError===!0}:{text:typeof t=="string"?t:JSON.stringify(t,null,2),isError:!1}}function ef(e,t){if(!t||!t.trim())return e;const n=t.trim();let r=e;try{r=JSON.parse(e)}catch{}if(n.startsWith("js:")){const s=n.slice(3).trim();try{const a=new Function("value","data",`return ${s}`)(e,r);return typeof a=="string"?a:JSON.stringify(a,null,2)}catch(o){return`[JS error: ${o}]`}}if(n.startsWith("."))try{const s=n.slice(1).split(".").filter(Boolean);let o=r;for(const a of s){const l=a.match(/^(\w+)?\[(\d+)\]$/);l?(l[1]&&(o=o[l[1]]),o=o[parseInt(l[2])]):o=o[a]}return o==null?"[No match]":typeof o=="string"?o:JSON.stringify(o,null,2)}catch(s){return`[Path error: ${s.message}]`}try{const o=new Function("value","data",`return ${n}`)(e,r);return typeof o=="string"?o:JSON.stringify(o,null,2)}catch(s){return`[Transform error: ${s.message}]`}}function kS({project:e,selectedEventIndex:t}){var Z;const{watches:n,updateWatch:r,addWatch:s,removeWatch:o,runEvents:a}=et(),[l,c]=S.useState(!1),[u,d]=S.useState(null),[p,f]=S.useState({}),[m,y]=S.useState(new Set),[_,L]=S.useState(""),[x,g]=S.useState(""),[h,P]=S.useState({}),[j,b]=S.useState(""),[C,w]=S.useState([]),[R,N]=S.useState(null),[v,E]=S.useState(null),[M,U]=S.useState(!1);S.useEffect(()=>{ru().then(w).catch(console.error)},[]);const D=S.useMemo(()=>{const B=e.mcp_servers||[],te=new Set(B.map($=>$.name)),ae=C.filter($=>!te.has($.name));return[...B,...ae]},[e.mcp_servers,C]),Q=S.useCallback(async B=>{if(!(p[B]||m.has(B))){y(te=>new Set([...te,B]));try{const te=await ve(`/projects/${e.id}/mcp-servers/${encodeURIComponent(B)}/test-connection`,{method:"POST"});te.success&&f(ae=>({...ae,[B]:te.tools}))}catch(te){console.error("Failed to load tools:",te)}finally{y(te=>{const ae=new Set(te);return ae.delete(B),ae})}}},[e.id,p,m]);S.useEffect(()=>{var $;if(u)return;if(!_||!x){P({});return}const te=(p[_]||[]).find(q=>q.name===x);if(!(($=te==null?void 0:te.parameters)!=null&&$.properties)){P({});return}const ae={};Object.entries(te.parameters.properties).forEach(([q,J])=>{J.type==="string"?ae[q]=J.default||"":J.type==="number"||J.type==="integer"?ae[q]=J.default||0:J.type==="boolean"?ae[q]=J.default||!1:ae[q]=J.default||null}),P(ae)},[_,x,p,u]);const T=()=>{d(null),L(""),g(""),P({}),b(""),N(null),E(null),c(!0)},O=B=>{if(d(B.id),L(B.serverName),g(B.toolName),P({...B.args}),b(B.transform||""),B.result){const{text:te}=Wa(B.result);N(te),E(null)}else N(null),E(null);p[B.serverName]||Q(B.serverName),c(!0)},I=async()=>{if(!(!_||!x)){U(!0),E(null);try{const B=await ve(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:_,tool_name:x,arguments:h})}),{text:te,isError:ae}=Wa(B);ae?(E(te),N(null)):(N(te),E(null))}catch(B){E(String(B)),N(null)}finally{U(!1)}}},k=S.useMemo(()=>R?!j||!j.trim()?R:ef(R,j):null,[R,j]),V=()=>{if(!(!_||!x)){if(u){r(u,{serverName:_,toolName:x,args:{...h},transform:j||void 0});const B=n.find(te=>te.id===u);B&&z({...B,serverName:_,toolName:x,args:h,transform:j||void 0,history:B.history||[]})}else{const B={id:`watch-${Date.now()}`,serverName:_,toolName:x,args:{...h},transform:j||void 0,history:[]};s(B),z(B)}c(!1)}},K=B=>{o(B)},z=S.useCallback(async(B,te)=>{r(B.id,{isLoading:!0,error:void 0});const ae=te??a.length-1,$=Date.now();try{const q=await ve(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:B.serverName,tool_name:B.toolName,arguments:B.args})}),J={eventIndex:ae,timestamp:$,result:q},Y=[...B.history||[],J];r(B.id,{result:q,isLoading:!1,lastRun:$,history:Y})}catch(q){const J={eventIndex:ae,timestamp:$,error:String(q)},Y=[...B.history||[],J];r(B.id,{error:String(q),isLoading:!1,lastRun:$,history:Y})}},[e.id,r,a.length]),le=()=>{n.forEach(B=>z(B))},A=S.useMemo(()=>!_||!x?null:(p[_]||[]).find(te=>te.name===x),[_,x,p]);return i.jsxs("div",{className:"tool-watch-panel",children:[i.jsxs("div",{className:"watch-header",children:[i.jsx(Hi,{size:14}),i.jsx("span",{children:"Tool Watch"}),i.jsx("span",{className:"watch-auto-badge",title:"Watches auto-refresh on every event",children:"⚡ Auto"}),i.jsxs("div",{className:"watch-actions",children:[i.jsx("button",{className:"watch-btn",onClick:le,title:"Refresh all",children:i.jsx(_n,{size:12})}),i.jsx("button",{className:"watch-btn",onClick:T,title:"Add watch",children:i.jsx(Oe,{size:12})})]})]}),n.length===0?i.jsxs("div",{className:"watch-empty",children:[i.jsx(Hi,{size:20,style:{opacity:.3}}),i.jsx("span",{children:"No watch expressions"}),i.jsxs("button",{className:"add-watch-btn",onClick:T,children:[i.jsx(Oe,{size:12})," Add Tool Watch"]})]}):i.jsx("div",{className:"watch-list",children:n.map(B=>{let te=B.result,ae=B.error;if(t!==null&&B.history&&B.history.length>0){const ne=B.history.filter(ce=>ce.eventIndex<=t);if(ne.length>0){const ce=ne[ne.length-1];te=ce.result,ae=ce.error}else te=void 0,ae=void 0}const{text:$,isError:q}=te?Wa(te):{text:"",isError:!1},J=te?ef($,B.transform):"",Y=ae||q;return i.jsxs("div",{className:`watch-item ${Y?"error":""}`,children:[i.jsxs("div",{className:"watch-item-header",children:[i.jsxs("span",{className:"watch-expr",children:[i.jsx("span",{className:"watch-server",children:B.serverName}),i.jsx("span",{className:"watch-tool",children:B.toolName}),Object.keys(B.args).length>0&&i.jsxs("span",{className:"watch-args",children:["(",Object.entries(B.args).map(([ne,ce])=>`${ne}=${JSON.stringify(ce)}`).join(", "),")"]}),t!==null&&i.jsxs("span",{className:"watch-time-indicator",children:["@",t]})]}),i.jsxs("div",{className:"watch-item-actions",children:[i.jsx("button",{onClick:()=>O(B),title:"Edit watch",children:i.jsx(Xt,{size:10})}),i.jsx("button",{onClick:()=>z(B),title:"Refresh",children:B.isLoading?i.jsx(_n,{size:10,className:"spin"}):i.jsx(_n,{size:10})}),i.jsx("button",{onClick:()=>K(B.id),title:"Remove",children:i.jsx(Le,{size:10})})]})]}),i.jsx("div",{className:"watch-result",children:B.isLoading?i.jsx("span",{className:"loading",children:"Loading..."}):ae?i.jsx("span",{className:"error",children:ae}):te?i.jsx("pre",{className:q?"error-text":"",children:J}):i.jsx("span",{className:"no-result",children:t!==null?"No data at this event":"Not yet run"})})]},B.id)})}),l&&i.jsx("div",{className:"watch-dialog-overlay",onClick:()=>c(!1),children:i.jsxs("div",{className:"watch-dialog",onClick:B=>B.stopPropagation(),children:[i.jsxs("div",{className:"dialog-header",children:[i.jsx("span",{children:u?"Edit Watch":"Add Tool Watch"}),i.jsx("button",{onClick:()=>c(!1),children:i.jsx(og,{size:14})})]}),i.jsxs("div",{className:"dialog-body",children:[i.jsxs("div",{className:"form-row",children:[i.jsx("label",{children:"MCP Server"}),i.jsxs("select",{value:_,onChange:B=>{L(B.target.value),u||g(""),B.target.value&&Q(B.target.value)},children:[i.jsx("option",{value:"",children:"Select server..."}),D.map(B=>i.jsx("option",{value:B.name,children:B.name},B.name))]})]}),i.jsxs("div",{className:"form-row",children:[i.jsx("label",{children:"Tool"}),i.jsxs("select",{value:x,onChange:B=>g(B.target.value),disabled:!_||m.has(_),children:[i.jsx("option",{value:"",children:m.has(_)?"Loading tools...":"Select tool..."}),(p[_]||[]).map(B=>i.jsx("option",{value:B.name,children:B.name},B.name))]})]}),(A==null?void 0:A.description)&&i.jsx("div",{className:"tool-desc",children:A.description}),((Z=A==null?void 0:A.parameters)==null?void 0:Z.properties)&&Object.keys(A.parameters.properties).length>0&&i.jsxs("div",{className:"tool-args",children:[i.jsx("label",{children:"Arguments"}),Object.entries(A.parameters.properties).map(([B,te])=>{var ae,$;return i.jsxs("div",{className:"arg-row",children:[i.jsxs("span",{className:"arg-name",children:[B,((ae=A.parameters.required)==null?void 0:ae.includes(B))&&i.jsx("span",{className:"required",children:"*"})]}),i.jsx("input",{type:te.type==="number"||te.type==="integer"?"number":"text",value:typeof h[B]=="object"?JSON.stringify(h[B]):h[B]??"",onChange:q=>P(J=>({...J,[B]:q.target.value})),placeholder:(($=te.description)==null?void 0:$.slice(0,40))||B})]},B)})]}),_&&x&&i.jsxs("div",{className:"test-section",children:[i.jsxs("div",{className:"test-header",children:[i.jsx("label",{children:"Test & Preview"}),i.jsxs("button",{className:"test-btn",onClick:I,disabled:M,children:[M?i.jsx(_n,{size:12,className:"spin"}):i.jsx(Mn,{size:12}),M?"Running...":"Test Run"]})]}),v&&i.jsxs("div",{className:"test-result error",children:[i.jsx("span",{className:"test-label",children:"Error:"}),i.jsx("pre",{children:v})]}),R&&i.jsxs("div",{className:"test-result",children:[i.jsx("span",{className:"test-label",children:"Raw Result:"}),i.jsx("pre",{children:R})]})]}),i.jsxs("div",{className:"form-row transform-row",children:[i.jsx("label",{children:"Transform (optional)"}),i.jsx("input",{type:"text",value:j,onChange:B=>b(B.target.value),placeholder:"e.g., .items[0].name or .content[].text"}),i.jsxs("div",{className:"transform-hints",children:[i.jsx("span",{className:"hint-title",children:"Path:"}),i.jsx("code",{onClick:()=>b(".items[0].name"),children:".items[0].name"}),i.jsx("code",{onClick:()=>b(".content[0].text"),children:".content[0].text"}),i.jsx("code",{onClick:()=>b(".result.data"),children:".result.data"}),i.jsx("span",{className:"hint-title",children:"JS:"}),i.jsx("code",{onClick:()=>b("js:value.split('\\n')[0]"),children:"js:value.split('\\n')[0]"}),i.jsx("code",{onClick:()=>b("js:data.items?.length"),children:"js:data.items?.length"})]})]}),R&&j&&i.jsxs("div",{className:"transform-preview",children:[i.jsx("span",{className:"test-label",children:"Transform Preview:"}),i.jsx("pre",{className:k!=null&&k.startsWith("[Transform error")?"error":"",children:k})]})]}),i.jsxs("div",{className:"dialog-footer",children:[i.jsx("button",{className:"cancel-btn",onClick:()=>c(!1),children:"Cancel"}),i.jsx("button",{className:"add-btn",onClick:V,disabled:!_||!x,children:u?"Save Changes":"Add Watch"})]})]})})]})}function jS(){var St;const{project:e,isRunning:t,setIsRunning:n,runEvents:r,addRunEvent:s,clearRunEvents:o,clearWatchHistories:a,runAgentId:l,setRunAgentId:c,watches:u,updateWatch:d,currentSessionId:p,setCurrentSessionId:f}=et(),[m,y]=S.useState(""),[_,L]=S.useState(null),[x,g]=S.useState(null),[h,P]=S.useState(null),[j,b]=S.useState(""),[C,w]=S.useState(new Set(["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_start","callback_end"])),[R,N]=S.useState(!0),[v,E]=S.useState(!0),[M,U]=S.useState(!1),[D,Q]=S.useState(360),[T,O]=S.useState(!1),[I,k]=S.useState([]),[V,K]=S.useState(null),[z,le]=S.useState(!1),A=S.useRef(0),Z=S.useCallback(async(F,ie)=>{if(!e)return;d(F.id,{isLoading:!0,error:void 0});const se=ie??r.length-1,ue=Date.now();try{const me=await ve(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:F.serverName,tool_name:F.toolName,arguments:F.args})}),We={eventIndex:se,timestamp:ue,result:me},Vn=[...F.history||[],We];d(F.id,{result:me,isLoading:!1,lastRun:ue,history:Vn})}catch(me){const We={eventIndex:se,timestamp:ue,error:String(me)},Vn=[...F.history||[],We];d(F.id,{error:String(me),isLoading:!1,lastRun:ue,history:Vn})}},[e==null?void 0:e.id,d,r.length]);S.useEffect(()=>{if(r.length>A.current&&u.length>0){const F=r.length-1;u.forEach(ie=>{ie.isLoading||Z(ie,F)})}A.current=r.length},[r.length,u,Z]),S.useEffect(()=>{l!==null&&(te(l),c(null))},[l,c]);const[B,te]=S.useState(null),ae=S.useRef(null),$=S.useRef(null);S.useEffect(()=>{if(!T)return;const F=se=>{if(!$.current)return;const me=$.current.getBoundingClientRect().right-se.clientX;Q(Math.min(600,Math.max(200,me)))},ie=()=>{O(!1)};return document.addEventListener("mousemove",F),document.addEventListener("mouseup",ie),()=>{document.removeEventListener("mousemove",F),document.removeEventListener("mouseup",ie)}},[T]);const q=S.useMemo(()=>r.length===0?{min:0,max:0}:{min:r[0].timestamp,max:r[r.length-1].timestamp},[r]),J=S.useMemo(()=>r.filter((F,ie)=>{var se,ue,me;if(h&&(F.timestamp<h[0]||F.timestamp>h[1])||C.size>0&&!C.has(F.event_type))return!1;if(R&&F.event_type==="model_response"){const We=((ue=(se=F.data)==null?void 0:se.response_content)==null?void 0:ue.parts)||((me=F.data)==null?void 0:me.parts)||[],Vn=We.some(Zo=>Zo.type==="function_call"),ox=We.some(Zo=>Zo.type==="text");if(!Vn&&!ox)return!1}return!(j&&!JSON.stringify(F).toLowerCase().includes(j.toLowerCase()))}),[r,h,C,j,R]),Y=S.useMemo(()=>{var ue;let F=0,ie=0;const se=x!==null?x+1:r.length;for(let me=0;me<se;me++){const We=r[me];We.event_type==="model_response"&&((ue=We.data)!=null&&ue.token_counts)&&(F+=We.data.token_counts.input||0,ie+=We.data.token_counts.output||0)}return{input:F,output:ie,total:F+ie}},[r,x]),ne=x!==null?r[x]:null;S.useEffect(()=>{if(!e){k([]);return}(async()=>{le(!0);try{const ie=await Ul(e.id);k(ie)}catch(ie){console.error("Failed to load sessions:",ie),k([])}finally{le(!1)}})()},[e]);const ce=S.useCallback(async F=>{if(!e){K(null);return}if(!F){o(),a(),f(null),K(null),g(null),P(null);return}try{const ie=await $h(e.id,F);o(),a(),f(ie.id),K(F),g(null),P(null);for(const se of ie.events)s(se)}catch(ie){alert(`Failed to load session: ${ie.message||"Unknown error"}`)}},[e,o,a,f,s]);S.useEffect(()=>{if(!e||I.length===0||z)return;const ie=new URLSearchParams(window.location.search).get("session");if(ie)if(I.some(ue=>ue.id===ie)){ce(ie);const ue=window.location.pathname;window.history.replaceState({},"",ue)}else console.warn(`Session ${ie} not found in available sessions`)},[e,I,z,ce]),S.useEffect(()=>{t&&ae.current&&(ae.current.scrollTop=ae.current.scrollHeight)},[r.length,t]);const Ce=S.useCallback(()=>{if(!e||!m.trim()||t)return;_&&(_.close(),L(null)),p||(o(),a(),K(null)),n(!0),g(null),P(null);const F=Uh(e.id);L(F),F.onopen=()=>{F.send(JSON.stringify({message:m,agent_id:B||void 0,session_id:p||void 0}))},F.onmessage=ie=>{var ue;const se=JSON.parse(ie.data);if(se.event_type==="agent_start"&&((ue=se.data)!=null&&ue.session_id)){const me=se.data.session_id;se.data.session_reused,f(me),me&&I.some(We=>We.id===me)&&K(me)}else se.type==="session_started"?(f(se.session_id),se.session_id&&I.some(me=>me.id===se.session_id)&&K(se.session_id)):se.type==="completed"?(n(!1),F.close()):se.type==="error"?(n(!1),s({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:se.error}})):s(se)},F.onerror=()=>{n(!1),s({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:"WebSocket connection error"}})},F.onclose=()=>{n(!1)}},[e,m,t,_,o,n,s,B,p]),W=S.useCallback(()=>{_==null||_.close(),n(!1)},[_,n]);S.useEffect(()=>{const F=ie=>{if((ie.metaKey||ie.ctrlKey)&&ie.key==="Enter"){ie.preventDefault(),Ce();return}if(ie.key==="ArrowDown"||ie.key==="ArrowUp"){if(ie.target instanceof HTMLInputElement||ie.target instanceof HTMLTextAreaElement||(ie.preventDefault(),J.length===0))return;if(ie.key==="ArrowDown")if(x===null){const se=r.indexOf(J[0]);g(se)}else{const se=J.findIndex(ue=>r.indexOf(ue)===x);if(se<J.length-1){const ue=r.indexOf(J[se+1]);g(ue)}}else if(ie.key==="ArrowUp")if(x===null){const se=r.indexOf(J[J.length-1]);g(se)}else{const se=J.findIndex(ue=>r.indexOf(ue)===x);if(se>0){const ue=r.indexOf(J[se-1]);g(ue)}}}};return window.addEventListener("keydown",F),()=>window.removeEventListener("keydown",F)},[Ce,J,x,r]);const he=S.useCallback(()=>{var me;if(r.length===0)return;const F={version:1,exportedAt:new Date().toISOString(),projectId:e==null?void 0:e.id,projectName:e==null?void 0:e.name,agentId:B||((me=e==null?void 0:e.app)==null?void 0:me.root_agent_id),events:r},ie=new Blob([JSON.stringify(F,null,2)],{type:"application/json"}),se=URL.createObjectURL(ie),ue=document.createElement("a");ue.href=se,ue.download=`run-${(e==null?void 0:e.name)||"export"}-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,document.body.appendChild(ue),ue.click(),document.body.removeChild(ue),URL.revokeObjectURL(se)},[r,e,B]),Te=S.useCallback(async()=>{if(!p||!e){alert("No active session to save");return}try{const F=await Oh(p);if(F.success){alert(F.message||"Session saved to memory successfully");try{const ie=await Ul(e.id);k(ie)}catch{}}else alert(`Failed to save to memory: ${F.error||"Unknown error"}`)}catch(F){alert(`Error saving to memory: ${F.message||"Unknown error"}`)}},[p,e]),[mt,mn]=S.useState(!1),[Yo,Xo]=S.useState([]),[Un,os]=S.useState(""),[H,ee]=S.useState("Test Case from Session"),[pe,ge]=S.useState(!1),ke=S.useCallback(async()=>{if(!p||!e){alert("No active session to create test case from");return}try{const F=await ve(`/projects/${e.id}/eval-sets`);if(Xo(F.eval_sets||[]),!F.eval_sets||F.eval_sets.length===0){confirm(`No evaluation sets found. Would you like to create one first?

Go to the Evals tab to create an evaluation set.`)&&(window.location.href=`/project/${e.id}/evals`);return}os(F.eval_sets[0].id),mn(!0)}catch(F){alert(`Error loading eval sets: ${F.message||"Unknown error"}`)}},[p,e]),ht=S.useCallback(async()=>{if(!p||!e||!Un){alert("Please select an evaluation set");return}ge(!0);try{const F=await ve(`/projects/${e.id}/session-to-eval-case`,{method:"POST",body:JSON.stringify({session_id:p,eval_set_id:Un,case_name:H})});mn(!1),alert(`Test case "${F.eval_case.name}" created successfully!

Token count: ${F.session_token_count.toLocaleString()} tokens

Go to the Evals tab to view and edit the test case.`)}catch(F){alert(`Error creating test case: ${F.message||"Unknown error"}`)}finally{ge(!1)}},[p,e,Un,H]),tn=S.useCallback(()=>{const F=document.createElement("input");F.type="file",F.accept=".json",F.onchange=async ie=>{var ue;const se=(ue=ie.target.files)==null?void 0:ue[0];if(se)try{const me=await se.text(),We=JSON.parse(me);if(!We.events||!Array.isArray(We.events)){alert("Invalid run file: missing events array");return}o(),a(),g(null),P(null),We.events.forEach(Vn=>{s(Vn)})}catch(me){alert(`Failed to load run file: ${me}`)}},F.click()},[o,a,s]);return S.useEffect(()=>{if(x!==null){const F=document.querySelector(".event-row.selected");F==null||F.scrollIntoView({behavior:"smooth",block:"nearest"})}},[x]),e?i.jsxs("div",{className:`run-panel ${T?"resizing":""}`,children:[i.jsx("style",{children:`
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
      `}),i.jsxs("div",{className:"input-area",children:[i.jsxs("select",{className:"agent-selector",value:B||"",onChange:F=>te(F.target.value||null),disabled:t,title:"Select which agent to run",children:[i.jsx("option",{value:"",children:e.app.root_agent_id?`Root: ${((St=e.agents.find(F=>F.id===e.app.root_agent_id))==null?void 0:St.name)||e.app.root_agent_id}`:"No root agent"}),e.agents.filter(F=>F.id!==e.app.root_agent_id).map(F=>i.jsxs("option",{value:F.id,children:[F.name," (",F.type.replace("Agent",""),")"]},F.id))]}),i.jsxs("select",{className:"agent-selector",value:V||"",onChange:F=>ce(F.target.value||null),disabled:t||z,style:{minWidth:180},title:"Load a saved session",children:[i.jsx("option",{value:"",children:z?"Loading...":"Load Session..."}),I.map(F=>{const ie=new Date(F.started_at*1e3),se=F.duration?`${F.duration.toFixed(1)}s`:"?";return i.jsxs("option",{value:F.id,children:[ie.toLocaleString()," (",F.event_count," events, ",se,")"]},F.id)})]}),i.jsx("input",{type:"text",placeholder:"Enter your query...",value:m,onChange:F=>y(F.target.value),onKeyDown:F=>F.key==="Enter"&&!F.shiftKey&&Ce(),disabled:t}),t?i.jsxs("button",{className:"stop",onClick:W,children:[i.jsx(v0,{size:14}),"Stop"]}):i.jsxs("button",{onClick:Ce,disabled:!m.trim(),children:[i.jsx(Mn,{size:14}),"Run"]})]}),i.jsxs("div",{className:"toolbar",children:[i.jsxs("div",{className:"toolbar-section",children:[i.jsx(rg,{size:12,style:{color:"#71717a"}}),i.jsx("input",{type:"text",placeholder:"Filter events...",value:j,onChange:F=>b(F.target.value)})]}),i.jsx("div",{className:"toolbar-divider"}),i.jsxs("div",{className:"toolbar-section",children:[["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change"].map(F=>i.jsx("button",{className:`filter-chip ${C.has(F)?"active":""}`,onClick:()=>{const ie=new Set(C);ie.has(F)?ie.delete(F):ie.add(F),w(ie)},children:F.replace("_"," ")},F)),i.jsx("button",{className:`filter-chip ${C.has("callback_start")&&C.has("callback_end")?"active":""}`,onClick:()=>{const F=new Set(C);F.has("callback_start")&&F.has("callback_end")?(F.delete("callback_start"),F.delete("callback_end")):(F.add("callback_start"),F.add("callback_end")),w(F)},title:"Show/hide callback events",children:"callback"}),i.jsx("button",{className:`filter-chip ${R?"active":""}`,onClick:()=>N(!R),title:"Hide LLM_RESP (complete) events",children:"hide (complete)"})]}),i.jsx("div",{className:"toolbar-divider"}),i.jsxs("div",{className:"toolbar-section",children:[i.jsxs("button",{className:`toolbar-btn ${v?"active":""}`,onClick:()=>E(!v),children:[i.jsx(ln,{size:12}),"State"]}),i.jsxs("button",{className:`toolbar-btn ${M?"active":""}`,onClick:()=>U(!M),children:[i.jsx(Xd,{size:12}),"Tools"]})]}),i.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:[i.jsxs("span",{style:{fontSize:10,color:"#71717a"},children:[J.length," / ",r.length," events"]}),h&&i.jsx("button",{className:"toolbar-btn",onClick:()=>P(null),children:"Clear Range"})]})]}),i.jsxs("div",{className:"main-content",ref:$,children:[i.jsxs("div",{className:"event-list-container",children:[i.jsxs("div",{className:"event-list-header",children:[i.jsx("div",{children:"#"}),i.jsx("div",{children:"Time"}),i.jsx("div",{children:"Agent"}),i.jsx("div",{children:"Type"}),i.jsx("div",{children:"Info"})]}),i.jsx("div",{className:"event-list",ref:ae,children:J.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx(ng,{size:24}),i.jsx("span",{children:r.length===0?"No events yet":"No matching events"})]}):J.map((F,ie)=>{const se=r.indexOf(F),ue=Zp[F.event_type]||Zp.error,me=hS[F.event_type]||vo;return i.jsxs("div",{className:`event-row ${x===se?"selected":""}`,style:{background:ue.bg},onClick:()=>g(se),onDoubleClick:()=>{E(!1),U(!1)},children:[i.jsx("div",{className:"index",children:se}),i.jsx("div",{className:"time",style:{color:ue.fg},children:xS(F.timestamp,q.min)}),i.jsx("div",{className:"agent",style:{color:ue.fg},children:F.agent_name}),i.jsxs("div",{className:"type",style:{color:ue.fg},children:[i.jsx(me,{size:10}),F.event_type.split("_")[0]]}),i.jsx("div",{className:"summary",children:gS(F)})]},se)})})]}),i.jsxs("div",{className:"side-panel-container",style:{width:D},children:[i.jsx("div",{className:`resize-handle ${T?"active":""}`,onMouseDown:()=>O(!0)}),i.jsxs("div",{className:"side-panel",style:{width:D-4},children:[i.jsxs("div",{className:"side-panel-tabs",children:[i.jsxs("button",{className:`side-panel-tab ${!v&&!M?"active":""}`,onClick:()=>{E(!1),U(!1)},children:[i.jsx(Hi,{size:12,style:{marginRight:4}}),"Details"]}),i.jsxs("button",{className:`side-panel-tab ${v?"active":""}`,onClick:()=>{E(!0),U(!1)},children:[i.jsx(ln,{size:12,style:{marginRight:4}}),"State"]}),i.jsxs("button",{className:`side-panel-tab ${M?"active":""}`,onClick:()=>{U(!0),E(!1)},children:[i.jsx(Xd,{size:12,style:{marginRight:4}}),"Tools"]})]}),i.jsx("div",{className:"side-panel-content",children:M?i.jsx(kS,{project:e,selectedEventIndex:x}):v?i.jsx(bS,{events:r,selectedEventIndex:x,project:e}):ne?i.jsx(yS,{event:ne}):i.jsxs("div",{className:"empty-state",children:[i.jsx(Hi,{size:24}),i.jsx("span",{children:"Select an event to view details"})]})})]})]})]}),i.jsxs("div",{className:"stats-bar",children:[i.jsxs("div",{className:"stat-item",children:[i.jsx("span",{children:"Events:"}),i.jsx("span",{className:"stat-value",children:r.length})]}),i.jsxs("div",{className:"stat-item",children:[i.jsx("span",{children:"Tool Calls:"}),i.jsx("span",{className:"stat-value",children:r.filter(F=>F.event_type==="tool_call").length})]}),i.jsxs("div",{className:"stat-item",children:[i.jsx("span",{children:"Model Calls:"}),i.jsx("span",{className:"stat-value",children:r.filter(F=>F.event_type==="model_call").length})]}),i.jsxs("div",{className:"stat-item",children:[i.jsx("span",{children:"Callbacks:"}),i.jsx("span",{className:"stat-value",children:r.filter(F=>F.event_type==="callback_start").length})]}),i.jsxs("div",{className:"stat-item",children:[i.jsx("span",{children:"State Changes:"}),i.jsx("span",{className:"stat-value",children:r.filter(F=>F.event_type==="state_change").length})]}),r.length>0&&i.jsxs("div",{className:"stat-item",children:[i.jsx("span",{children:"Duration:"}),i.jsxs("span",{className:"stat-value",children:[((r[r.length-1].timestamp-r[0].timestamp)*1e3).toFixed(0),"ms"]})]}),Y.total>0&&i.jsx("div",{className:"stat-item token-stats",children:i.jsxs("span",{className:"stat-value token-value",children:[i.jsxs("span",{className:"token-in",title:"Input tokens",children:[Y.input.toLocaleString(),"↑"]}),i.jsxs("span",{className:"token-out",title:"Output tokens",children:[Y.output.toLocaleString(),"↓"]}),i.jsx("span",{className:"token-total",title:"Total tokens",children:Y.total.toLocaleString()})]})}),i.jsx("div",{className:"stats-bar-spacer"}),i.jsxs("button",{className:"stats-bar-btn",onClick:tn,title:"Load a saved run",children:[i.jsx(Wo,{size:12}),"Load"]}),i.jsxs("button",{className:"stats-bar-btn",onClick:he,disabled:r.length===0,title:"Save current run to file",children:[i.jsx(ns,{size:12}),"Save"]}),i.jsxs("button",{className:"stats-bar-btn",onClick:Te,disabled:!p||r.length===0,title:"Save current session to memory",children:[i.jsx(ln,{size:12}),"Save to Memory"]}),i.jsxs("button",{className:"stats-bar-btn",onClick:ke,disabled:!p||r.length===0,title:"Create evaluation test case from this session",style:{background:"rgba(var(--accent-primary-rgb), 0.15)"},children:[i.jsx(ql,{size:12}),"Create Test Case"]})]}),mt&&i.jsx("div",{className:"dialog-overlay",style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>mn(!1),children:i.jsxs("div",{className:"dialog-content",style:{background:"var(--bg-secondary)",borderRadius:"var(--radius-md)",padding:24,width:400,maxWidth:"90vw",border:"1px solid var(--border-color)"},onClick:F=>F.stopPropagation(),children:[i.jsxs("h3",{style:{marginBottom:16,display:"flex",alignItems:"center",gap:8},children:[i.jsx(ql,{size:18}),"Create Test Case from Session"]}),i.jsxs("div",{style:{marginBottom:16},children:[i.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Test Case Name"}),i.jsx("input",{type:"text",value:H,onChange:F=>ee(F.target.value),placeholder:"Enter test case name",style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"}})]}),i.jsxs("div",{style:{marginBottom:20},children:[i.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Add to Evaluation Set"}),i.jsx("select",{value:Un,onChange:F=>os(F.target.value),style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"},children:Yo.map(F=>i.jsx("option",{value:F.id,children:F.name},F.id))})]}),i.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:16},children:"This will extract user messages and tool calls from the current session to create a replayable test case. You can edit the expected responses and tool calls in the Evals tab after creation."}),i.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[i.jsx("button",{className:"btn btn-secondary",onClick:()=>mn(!1),children:"Cancel"}),i.jsx("button",{className:"btn btn-primary",onClick:ht,disabled:pe||!Un,children:pe?"Creating...":"Create Test Case"})]})]})})]}):i.jsx("div",{className:"run-panel empty",children:"No project loaded"})}const wS=()=>Math.random().toString(36).substring(2,10),_S=()=>({id:wS(),name:"New SkillSet",description:"",embedding_model:void 0,app_model_id:void 0,external_store_type:void 0,external_store_config:{},search_enabled:!0,preload_enabled:!0,preload_top_k:3,preload_min_score:.4,sources:[],entry_count:0});function SS(){const{project:e,setProject:t}=et(),[n,r]=S.useState(null),[s,o]=S.useState(null),[a,l]=S.useState(""),[c,u]=S.useState([]),[d,p]=S.useState(!1),[f,m]=S.useState(!1),[y,_]=S.useState(""),[L,x]=S.useState(!1),[g,h]=S.useState(null),[P,j]=S.useState(null),b=S.useRef(null),C=(e==null?void 0:e.skillsets)||[],w=C.find(I=>I.id===n);S.useEffect(()=>{Xh().then(I=>j(I.available)).catch(()=>j(!1))},[]),S.useEffect(()=>{C.length>0&&!n&&r(C[0].id)},[C,n]),S.useEffect(()=>{!e||!n||R()},[e==null?void 0:e.id,n]);const R=S.useCallback(async()=>{if(!(!e||!n))try{const I=await Jh(e.id,n);o(I),v(n,{entry_count:I.entry_count})}catch(I){console.error("Failed to load stats:",I)}},[e==null?void 0:e.id,n]),N=I=>{e&&t({...e,...I})},v=(I,k)=>{e&&t({...e,skillsets:e.skillsets.map(V=>V.id===I?{...V,...k}:V)})},E=()=>{if(!e)return;const I=_S();N({skillsets:[...C,I]}),r(I.id)},M=I=>{e&&confirm("Delete this SkillSet and all its data?")&&(N({skillsets:C.filter(k=>k.id!==I)}),n===I&&r(C.length>1?C[0].id:null),o(null),u([]))},U=async()=>{if(!(!e||!n||!a.trim())){p(!0),h(null);try{const I=await Gh(e.id,n,a.trim(),10,0);u(I.results)}catch(I){h("Search failed"),console.error(I)}finally{p(!1)}}},D=async()=>{if(!(!e||!n||!y.trim())){x(!0),h(null);try{const I=await Kh(e.id,n,y.trim());_(""),await R(),alert(`Added ${I.chunks_added} chunks from ${I.source_name}`)}catch(I){h(I.message||"Failed to fetch URL")}finally{x(!1)}}},Q=async I=>{var V;const k=(V=I.target.files)==null?void 0:V[0];if(!(!k||!e||!n)){h(null);try{const K=await Qh(e.id,n,k);await R(),alert(`Added ${K.chunks_added} chunks from ${K.source_name}`)}catch(K){h(K.message||"Upload failed")}b.current&&(b.current.value="")}},T=async()=>{if(!(!e||!n)&&confirm("Delete all entries in this SkillSet?"))try{await Yh(e.id,n),await R(),u([])}catch{h("Clear failed")}},O=I=>{const k=Math.round(I*100),V=160,K=70,z=20+(1-I)*15,le=.15+I*.25;return`linear-gradient(90deg, hsla(${V}, ${K}%, ${z}%, ${le}) 0%, transparent ${k}%)`};return e?i.jsxs("div",{className:"skillsets-panel",children:[i.jsx("style",{children:`
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
      `}),i.jsxs("div",{className:"skillset-list",children:[i.jsxs("div",{className:"skillset-list-header",children:[i.jsx("h3",{children:"SkillSets"}),i.jsx("button",{className:"btn-icon",onClick:E,title:"Add SkillSet",children:i.jsx(Oe,{size:16})})]}),C.length===0?i.jsxs("div",{className:"empty-state",style:{padding:"40px 0"},children:[i.jsx(ln,{size:32}),i.jsx("span",{children:"No SkillSets"}),i.jsxs("button",{className:"btn-primary",onClick:E,children:[i.jsx(Oe,{size:14})," Create SkillSet"]})]}):C.map(I=>i.jsxs("div",{className:`skillset-item ${n===I.id?"selected":""}`,onClick:()=>r(I.id),children:[i.jsx(ln,{size:16,style:{color:"var(--accent)",flexShrink:0}}),i.jsxs("div",{className:"skillset-item-info",children:[i.jsx("div",{className:"skillset-item-name",children:I.name}),i.jsxs("div",{className:"skillset-item-count",children:[I.entry_count||0," entries"]})]}),i.jsx("button",{className:"skillset-item-delete",onClick:k=>{k.stopPropagation(),M(I.id)},children:i.jsx(Le,{size:14})})]},I.id))]}),w?i.jsxs("div",{className:"skillset-detail",children:[i.jsxs("div",{className:"skillset-header",children:[i.jsxs("div",{className:"skillset-header-info",children:[i.jsx("input",{className:"skillset-name-input",value:w.name,onChange:I=>v(w.id,{name:I.target.value}),placeholder:"SkillSet Name"}),i.jsx("textarea",{className:"skillset-desc-input",value:w.description,onChange:I=>v(w.id,{description:I.target.value}),placeholder:"Description (optional)",rows:1}),i.jsxs("div",{className:"skillset-model",children:[i.jsx("label",{style:{fontSize:"12px",color:"var(--text-secondary)",marginRight:"8px"},children:"Embedding Model:"}),i.jsxs("select",{style:{flex:1,padding:"4px 8px",fontSize:"12px",background:"var(--bg-secondary)",border:"1px solid var(--border)",borderRadius:"4px",color:"var(--text-primary)"},value:w.embedding_model||"text-embedding-004",onChange:I=>v(w.id,{embedding_model:I.target.value}),children:[i.jsxs("optgroup",{label:"Google Gemini",children:[i.jsx("option",{value:"text-embedding-004",children:"text-embedding-004 (768d)"}),i.jsx("option",{value:"text-embedding-005",children:"text-embedding-005"})]}),i.jsxs("optgroup",{label:"OpenAI",children:[i.jsx("option",{value:"text-embedding-3-small",children:"text-embedding-3-small (1536d)"}),i.jsx("option",{value:"text-embedding-3-large",children:"text-embedding-3-large (3072d)"})]}),i.jsxs("optgroup",{label:"Cohere",children:[i.jsx("option",{value:"embed-english-v3.0",children:"embed-english-v3.0 (1024d)"}),i.jsx("option",{value:"embed-multilingual-v3.0",children:"embed-multilingual-v3.0 (1024d)"})]})]})]}),i.jsxs("div",{className:"skillset-stats",children:[i.jsxs("span",{className:"skillset-stat",children:[i.jsx("strong",{children:(s==null?void 0:s.entry_count)||0})," entries"]}),i.jsxs("span",{className:"skillset-stat",children:[i.jsx("strong",{children:Object.keys((s==null?void 0:s.sources)||{}).length})," sources"]}),P===!1&&i.jsx("span",{className:"skillset-stat",style:{color:"var(--warning)"},children:"⚠ No embeddings"})]})]}),i.jsx("button",{className:"btn-icon",onClick:R,title:"Refresh",children:i.jsx(_n,{size:16})})]}),g&&i.jsxs("div",{className:"error-banner",children:[g,i.jsx("button",{onClick:()=>h(null),children:i.jsx(og,{size:14})})]}),i.jsxs("div",{className:"search-section",children:[i.jsx("div",{className:"search-input-wrapper",children:i.jsx("input",{className:"search-input",value:a,onChange:I=>l(I.target.value),onKeyDown:I=>I.key==="Enter"&&U(),placeholder:"Search this SkillSet..."})}),i.jsxs("button",{className:"btn-primary",onClick:U,disabled:d||!a.trim(),children:[i.jsx(rg,{size:14}),d?"Searching...":"Search"]})]}),i.jsxs("div",{className:"search-results",children:[c.length===0&&!d&&a&&i.jsx("div",{className:"empty-state",children:i.jsx("span",{children:"No results found"})}),c.map(I=>i.jsxs("div",{className:"search-result",style:{background:O(I.score)},children:[i.jsxs("span",{className:"search-result-score",children:[(I.score*100).toFixed(0),"%"]}),i.jsx("div",{className:"search-result-text",children:I.text}),i.jsx("div",{className:"search-result-source",children:I.source_name})]},I.id))]}),i.jsxs("div",{className:"add-sources-section",children:[i.jsxs("div",{className:"add-sources-header",onClick:()=>m(!f),children:[f?i.jsx(Ct,{size:16}):i.jsx(Nt,{size:16}),i.jsx("h4",{children:"Add Sources"})]}),f&&i.jsxs("div",{className:"add-sources-content",children:[i.jsxs("div",{className:"source-row",children:[i.jsx(Wl,{size:16,style:{color:"var(--text-tertiary)"}}),i.jsx("input",{className:"source-input",value:y,onChange:I=>_(I.target.value),onKeyDown:I=>I.key==="Enter"&&D(),placeholder:"Enter URL (e.g., llms.txt file)"}),i.jsxs("button",{className:"btn-primary",onClick:D,disabled:L||!y.trim(),children:[i.jsx(f0,{size:14}),L?"Loading...":"Add"]})]}),i.jsxs("div",{className:"source-row",children:[i.jsx(d0,{size:16,style:{color:"var(--text-tertiary)"}}),i.jsx("input",{ref:b,type:"file",accept:".txt,.md,.json,.csv,.html",onChange:Q}),i.jsxs("button",{className:"btn-primary",onClick:()=>{var I;return(I=b.current)==null?void 0:I.click()},children:[i.jsx(Wo,{size:14}),"Upload File"]}),i.jsx("span",{style:{fontSize:"12px",color:"var(--text-tertiary)"},children:".txt, .md, .json, .csv"})]}),((s==null?void 0:s.entry_count)||0)>0&&i.jsx("div",{className:"source-row",style:{marginTop:"8px"},children:i.jsxs("button",{className:"clear-button",onClick:T,children:[i.jsx(Le,{size:12}),"Clear All Entries (",(s==null?void 0:s.entry_count)||0,")"]})})]})]})]}):C.length>0?i.jsx("div",{className:"skillset-detail",children:i.jsxs("div",{className:"empty-state",children:[i.jsx(ln,{size:48}),i.jsx("span",{children:"Select a SkillSet"})]})}):null]}):null}const Qt={tool_trajectory_avg_score:{name:"Tool Trajectory",description:"Did the agent call the right tools in the expected order?",requiresJudge:!1,scale:[0,1]},response_match_score:{name:"Response Match (ROUGE-1)",description:"Does the response contain expected text? (fuzzy word matching)",requiresJudge:!1,scale:[0,1]},response_evaluation_score:{name:"Response Evaluation (LLM)",description:"LLM-judged semantic match of final response",requiresJudge:!0,scale:[1,5]},final_response_match_v2:{name:"Response Quality v2 (LLM)",description:"Enhanced LLM-judged response quality check",requiresJudge:!0,scale:[0,1]},safety_v1:{name:"Safety",description:"Is the response safe and harmless? (Vertex AI)",requiresJudge:!0,scale:[0,1]},hallucinations_v1:{name:"Hallucination Detection",description:"Are all claims supported by context? No false information?",requiresJudge:!0,scale:[0,1]},rubric_based_final_response_quality_v1:{name:"Rubric: Response Quality",description:"Custom rubric-based quality assessment of responses",requiresJudge:!0,scale:[0,1]},rubric_based_tool_use_quality_v1:{name:"Rubric: Tool Use Quality",description:"Custom rubric-based assessment of tool usage",requiresJudge:!0,scale:[0,1]}},Ki=(e,t,n)=>{if(t==null)return{value:"-",comparison:""};const r=Qt[e],s=(r==null?void 0:r.scale)||[0,1];if(s[0]===1&&s[1]===5){const o=n??3.5;return{value:t.toFixed(1),comparison:`${o.toFixed(1)} / ${s[1].toFixed(1)}`}}else{const o=n??.7;return{value:`${Math.round(t*100)}%`,comparison:`${Math.round(o*100)}% min`}}},CS={metrics:[{metric:"tool_trajectory_avg_score",enabled:!0,criterion:{threshold:1}},{metric:"response_match_score",enabled:!0,criterion:{threshold:.7}}],default_trajectory_match_type:"in_order",num_runs:1};function sx(){return`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`}function NS(){const{project:e}=et(),[t,n]=S.useState([]),[r,s]=S.useState(null),[o,a]=S.useState(null),[l,c]=S.useState(new Set),[u,d]=S.useState(new Map),[p,f]=S.useState(new Map),[m,y]=S.useState(new Set),[_,L]=S.useState(!1),[x,g]=S.useState(null),[h,P]=S.useState([]),[j,b]=S.useState(null),C=async()=>{if(e)try{const $=await Be.get(`/projects/${e.id}/eval-history`);P($.runs||[])}catch($){console.warn("Failed to load eval history:",$)}},w=async($,q=!0)=>{if(e)try{const Y=(await Be.get(`/projects/${e.id}/eval-history/${$}`)).run;if(b(Y),Y!=null&&Y.case_results){const ne=new Map;for(const ce of Y.case_results)ne.set(ce.eval_case_id,ce);d(ne)}if((Y==null?void 0:Y.eval_set_id)==="batch")c(new Set(t.map(ne=>ne.id))),s(null);else if(Y!=null&&Y.eval_set_id){const ne=new Map;ne.set(Y.eval_set_id,Y),f(ne),s(Y.eval_set_id),c(ce=>new Set([...ce,Y.eval_set_id]))}a(null),q&&window.history.pushState({run:$},"",`?run=${$}`)}catch(J){console.warn("Failed to load history run:",J)}},R=($,q=!0)=>{s($),a(null),b(null),q&&$?window.history.pushState({set:$},"",`?set=${$}`):q&&window.history.pushState({},"",window.location.pathname)},N=($,q,J=!0)=>{s($),a(q),b(null),J&&q?window.history.pushState({set:$,case:q},"",`?set=${$}&case=${q}`):J&&$&&window.history.pushState({set:$},"",`?set=${$}`)},v=()=>{b(null),d(new Map),f(new Map),window.history.pushState({},"",window.location.pathname)},E=async $=>{if(e)try{await Be.delete(`/projects/${e.id}/eval-history/${$}`),P(q=>q.filter(J=>J.id!==$)),(j==null?void 0:j.id)===$&&b(null)}catch(q){console.warn("Failed to delete history run:",q)}};S.useEffect(()=>{e!=null&&e.id&&(M(),C())},[e==null?void 0:e.id]),S.useEffect(()=>{const $=()=>{y(new Set(t.map(J=>J.id)))},q=()=>{y(new Set),C()};return window.addEventListener("eval-tests-started",$),window.addEventListener("eval-tests-completed",q),()=>{window.removeEventListener("eval-tests-started",$),window.removeEventListener("eval-tests-completed",q)}},[t]),S.useEffect(()=>{if(!(e!=null&&e.id)||_)return;const $=()=>{const J=new URLSearchParams(window.location.search),Y=J.get("set"),ne=J.get("case"),ce=J.get("run");if(ce){w(ce,!1);return}if(Y)s(Y),a(ne),b(null),c(Ce=>new Set([...Ce,Y]));else{if(!r&&!o&&!j)return;s(null),a(null),b(null)}};$();const q=()=>{$()};return window.addEventListener("popstate",q),()=>window.removeEventListener("popstate",q)},[e==null?void 0:e.id,_,t.length]);const M=async()=>{var $,q;if(e!=null&&e.id){L(!0),g(null);try{const J=await Be.get(`/projects/${e.id}/eval-sets`);if(n(J.eval_sets||[]),(($=J.eval_sets)==null?void 0:$.length)>0){const Y=new URLSearchParams(window.location.search),ne=Y.get("set"),ce=Y.get("case"),Ce=ne||(ce?(q=J.eval_sets.find(W=>W.eval_cases.some(he=>he.id===ce)))==null?void 0:q.id:null)||J.eval_sets[0].id;c(new Set([Ce]))}}catch(J){g(J.message||"Failed to load eval sets")}finally{L(!1)}}},U=t.find($=>$.id===r),D=U==null?void 0:U.eval_cases.find($=>$.id===o),Q=async()=>{if(e!=null&&e.id)try{const $=await Be.post(`/projects/${e.id}/eval-sets`,{name:"New Eval Set",description:"",eval_config:CS});n(q=>[...q,$.eval_set]),s($.eval_set.id),c(q=>new Set([...q,$.eval_set.id]))}catch($){g($.message||"Failed to create eval set")}},T=async $=>{if(e!=null&&e.id)try{const q=await Be.post(`/projects/${e.id}/eval-sets/${$}/cases`,{name:"New Test Case",description:"",invocations:[{id:sx(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]}],initial_state:{},rubrics:[],enabled_metrics:[],tags:[]});n(J=>J.map(Y=>Y.id===$?{...Y,eval_cases:[...Y.eval_cases,q.eval_case]}:Y)),s($),a(q.eval_case.id)}catch(q){g(q.message||"Failed to create eval case")}},O=async($,q,J)=>{if(e!=null&&e.id)try{const Y=await Be.put(`/projects/${e.id}/eval-sets/${$}/cases/${q}`,J);n(ne=>ne.map(ce=>ce.id===$?{...ce,eval_cases:ce.eval_cases.map(Ce=>Ce.id===q?Y.eval_case:Ce)}:ce))}catch(Y){g(Y.message||"Failed to update eval case")}},I=async($,q)=>{if(e!=null&&e.id)try{await Be.delete(`/projects/${e.id}/eval-sets/${$}/cases/${q}`),n(J=>J.map(Y=>Y.id===$?{...Y,eval_cases:Y.eval_cases.filter(ne=>ne.id!==q)}:Y)),o===q&&a(null)}catch(J){g(J.message||"Failed to delete eval case")}},k=async $=>{if(e!=null&&e.id)try{await Be.delete(`/projects/${e.id}/eval-sets/${$}`),n(q=>q.filter(J=>J.id!==$)),r===$&&(s(null),a(null))}catch(q){g(q.message||"Failed to delete eval set")}},V=async $=>{if(e!=null&&e.id)try{const q=await Be.get(`/projects/${e.id}/eval-sets/${$}/export`),J=new Blob([JSON.stringify(q,null,2)],{type:"application/json"}),Y=URL.createObjectURL(J),ne=document.createElement("a");ne.href=Y;const ce=t.find(Ce=>Ce.id===$);ne.download=`${(ce==null?void 0:ce.name)||"eval-set"}.json`,document.body.appendChild(ne),ne.click(),document.body.removeChild(ne),URL.revokeObjectURL(Y)}catch(q){g(q.message||"Failed to export eval set")}},K=async $=>{if(e!=null&&e.id)try{const q=await $.text(),J=JSON.parse(q),Y=await Be.post(`/projects/${e.id}/eval-sets/import`,J);n(ne=>[...ne,Y.eval_set]),s(Y.eval_set.id),c(ne=>new Set([...ne,Y.eval_set.id]))}catch(q){g(q.message||"Failed to import eval set")}},z=S.useRef(null),le=async()=>{if(!(!(e!=null&&e.id)||t.length===0))try{const $=await Promise.all(t.map(async ne=>{try{return await Be.get(`/projects/${e.id}/eval-sets/${ne.id}/export`)}catch{return ne}})),q=new Blob([JSON.stringify($,null,2)],{type:"application/json"}),J=URL.createObjectURL(q),Y=document.createElement("a");Y.href=J,Y.download=`${e.name||"project"}-eval-sets.json`,document.body.appendChild(Y),Y.click(),document.body.removeChild(Y),URL.revokeObjectURL(J)}catch($){g($.message||"Failed to export all eval sets")}},A=async($,q)=>{if(e!=null&&e.id){y(J=>new Set([...J,q]));try{const J=await Be.post(`/projects/${e.id}/eval-sets/${$}/cases/${q}/run`,{});d(Y=>new Map(Y).set(q,J.result))}catch(J){g(J.message||"Failed to run eval case")}finally{y(J=>{const Y=new Set(J);return Y.delete(q),Y})}}},Z=async $=>{if(!(e!=null&&e.id))return;const q=t.find(Y=>Y.id===$);if(!q)return;const J=q.eval_cases.map(Y=>Y.id);y(Y=>new Set([...Y,$,...J]));try{const Y=await Be.post(`/projects/${e.id}/eval-sets/${$}/run`,{});f(ne=>new Map(ne).set($,Y.result));for(const ne of Y.result.case_results)d(ce=>new Map(ce).set(ne.eval_case_id,ne));try{await Be.post(`/projects/${e.id}/eval-history`,Y.result),C()}catch(ne){console.warn("Failed to save eval run to history:",ne)}}catch(Y){g(Y.message||"Failed to run eval set")}finally{y(Y=>{const ne=new Set(Y);return ne.delete($),J.forEach(ce=>ne.delete(ce)),ne})}},B=$=>{c(q=>{const J=new Set(q);return J.has($)?J.delete($):J.add($),J})},te=$=>{let q=$.eval_cases.length,J=0,Y=0,ne=0;for(const ce of $.eval_cases){const Ce=u.get(ce.id);Ce?Ce.passed?J++:Y++:ne++}return{total:q,passed:J,failed:Y,pending:ne}},ae=$=>$==null?"-":`${Math.round($*100)}%`;return e?i.jsxs("div",{className:"eval-panel",children:[i.jsx("style",{children:`
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
      `}),i.jsxs("aside",{className:"eval-sidebar",children:[i.jsxs("div",{className:"sidebar-header",children:[i.jsx("h3",{children:"Evaluation Tests"}),i.jsxs("div",{className:"header-actions",children:[i.jsx("input",{type:"file",ref:z,accept:".json",style:{display:"none"},onChange:$=>{var J;const q=(J=$.target.files)==null?void 0:J[0];q&&(K(q),$.target.value="")}}),i.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var $;return($=z.current)==null?void 0:$.click()},title:"Import eval set from JSON",children:i.jsx(Wo,{size:14})}),t.length>0&&i.jsx("button",{className:"btn btn-secondary btn-sm",onClick:le,title:"Download all eval sets as JSON",children:i.jsx(ns,{size:14})}),i.jsx("button",{className:"btn btn-secondary btn-sm",onClick:M,title:"Refresh",children:i.jsx(_n,{size:14})}),i.jsxs("button",{className:"btn btn-primary btn-sm",onClick:Q,title:"New eval set",children:[i.jsx(Oe,{size:14}),"Set"]})]})]}),i.jsxs("div",{className:"eval-tree",children:[_&&i.jsx("p",{style:{color:"var(--text-muted)",padding:"16px"},children:"Loading..."}),x&&i.jsx("div",{style:{color:"var(--error)",padding:"16px",fontSize:"13px"},children:x}),!_&&t.length===0&&i.jsxs("div",{className:"empty-state",style:{padding:"32px"},children:[i.jsx(cu,{size:32}),i.jsxs("p",{children:["No evaluation sets yet.",i.jsx("br",{}),"Create one to get started."]})]}),t.map($=>{const q=l.has($.id),J=te($),Y=m.has($.id);return i.jsxs("div",{className:"tree-item",children:[i.jsxs("div",{className:`tree-set ${r===$.id&&!o?"selected":""}`,onClick:()=>R($.id),children:[i.jsx("button",{className:"expand-btn",onClick:ne=>{ne.stopPropagation(),B($.id)},children:$.eval_cases.length>0?q?i.jsx(Ct,{size:14}):i.jsx(Nt,{size:14}):i.jsx("span",{style:{width:14}})}),i.jsx(tg,{size:14,style:{color:"var(--accent-secondary)"}}),i.jsx("span",{className:"set-name",children:$.name}),i.jsx("button",{className:"add-case-btn",onClick:ne=>{ne.stopPropagation(),T($.id)},title:"Add test case",style:{padding:"2px 4px",marginLeft:4,background:"transparent",border:"none",cursor:"pointer",opacity:.6,display:"flex",alignItems:"center"},children:i.jsx(Oe,{size:12})}),J.total>0&&i.jsxs("span",{className:"set-stats",children:[J.passed>0&&i.jsx("span",{className:"stat-passed",children:J.passed}),J.failed>0&&i.jsx("span",{className:"stat-failed",children:J.failed}),J.pending>0&&i.jsx("span",{className:"stat-pending",children:J.pending})]}),i.jsx("button",{className:"run-btn",onClick:ne=>{ne.stopPropagation(),Z($.id)},title:"Run all tests in this set",disabled:Y,children:Y?i.jsx(xo,{size:12,className:"spinning"}):i.jsx(Mn,{size:12})})]}),q&&i.jsx("div",{className:"tree-children",style:{paddingLeft:16},children:$.eval_cases.map(ne=>{var W;const ce=u.get(ne.id),Ce=m.has(ne.id);return i.jsxs("div",{className:`tree-case ${o===ne.id?"selected":""}`,onClick:()=>N($.id,ne.id),children:[Ce?i.jsx(xo,{size:14,className:"spinning",style:{color:"var(--warning)"}}):ce?ce.passed?i.jsx(sr,{size:14,style:{color:"var(--success)"}}):i.jsx(Vr,{size:14,style:{color:"var(--error)"}}):i.jsx(yo,{size:14,style:{color:"var(--text-muted)"}}),i.jsx("span",{className:"case-name",children:ne.name}),ce&&ce.metric_results.length>0&&i.jsx("span",{style:{fontSize:11,color:ce.passed?"var(--success)":"var(--error)"},children:ae((W=ce.metric_results[0])==null?void 0:W.score)}),i.jsx("button",{className:"run-btn",onClick:he=>{he.stopPropagation(),A($.id,ne.id)},disabled:Ce,children:i.jsx(Mn,{size:12})})]},ne.id)})})]},$.id)})]}),i.jsxs("div",{className:"history-section",children:[i.jsx("div",{className:"history-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 12px",borderTop:"1px solid var(--border-color)",background:"var(--bg-secondary)"},children:i.jsxs("span",{style:{fontWeight:500,fontSize:13},children:["Previous Runs (",h.length,")"]})}),i.jsx("div",{className:"history-list",style:{maxHeight:200,overflowY:"auto"},children:h.length===0?i.jsx("div",{style:{padding:"12px",color:"var(--text-secondary)",fontSize:12,textAlign:"center"},children:"No previous runs"}):[...h].sort(($,q)=>(q.started_at||0)-($.started_at||0)).map($=>{const q=$.passed_cases===$.total_cases;return i.jsx("div",{className:`history-item ${(j==null?void 0:j.id)===$.id?"selected":""}`,onClick:()=>w($.id),style:{padding:"8px 12px",borderBottom:"1px solid var(--border-color)",cursor:"pointer",background:(j==null?void 0:j.id)===$.id?"var(--bg-tertiary)":"transparent",fontSize:12},children:i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[q?i.jsx(sr,{size:14,style:{color:"var(--success)",flexShrink:0}}):i.jsx(Vr,{size:14,style:{color:"var(--error)",flexShrink:0}}),i.jsxs("div",{children:[i.jsx("div",{style:{fontWeight:500},children:$.eval_set_name||"Unnamed"}),i.jsx("div",{style:{color:"var(--text-secondary)",fontSize:11},children:new Date($.started_at*1e3).toLocaleString()})]})]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[i.jsxs("span",{style:{color:q?"var(--success)":"var(--error)",fontWeight:500,fontSize:11},children:[$.passed_cases,"/",$.total_cases]}),i.jsx("button",{className:"btn btn-icon",onClick:J=>{J.stopPropagation(),E($.id)},title:"Delete run",style:{padding:2},children:i.jsx(Le,{size:12})})]})]})},$.id)})})]})]}),i.jsx("div",{className:"eval-editor",children:j?i.jsx(zS,{run:j,onClose:v}):D?i.jsx(TS,{evalCase:D,evalSetId:r,projectId:e.id,result:u.get(D.id),isRunning:m.has(D.id),onUpdate:$=>O(r,D.id,$),onDelete:()=>I(r,D.id),onRun:()=>A(r,D.id),onClearResult:()=>d($=>{const q=new Map($);return q.delete(D.id),q})}):U?i.jsx(PS,{evalSet:U,projectId:e.id,result:p.get(U.id),isRunning:m.has(U.id),caseResults:u,onUpdate:async $=>{try{const q=await Be.put(`/projects/${e.id}/eval-sets/${U.id}`,$);n(J=>J.map(Y=>Y.id===U.id?q.eval_set:Y))}catch(q){g(q.message)}},onDelete:()=>k(U.id),onRun:()=>Z(U.id),onExport:()=>V(U.id)}):i.jsx("div",{className:"editor-content",children:i.jsxs("div",{className:"empty-state",children:[i.jsx(yo,{size:48}),i.jsxs("p",{children:["Select a test case to edit",i.jsx("br",{}),"or create a new one"]})]})})})]}):null}function ES({value:e,onChange:t}){var a,l;const{project:n}=et(),r=((a=n==null?void 0:n.app)==null?void 0:a.models)||[],s=(l=n==null?void 0:n.app)==null?void 0:l.default_model_id,o=r.find(c=>c.id===s);return i.jsxs("select",{value:e,onChange:c=>t(c.target.value),style:{width:"100%",maxWidth:400},children:[i.jsx("option",{value:"",children:o?`App Default (${o.model_name})`:"App Default"}),r.map(c=>i.jsx("option",{value:c.model_name,children:c.model_name},c.id)),i.jsx("option",{value:"gemini-2.0-flash",children:"gemini-2.0-flash"}),i.jsx("option",{value:"gemini-2.5-flash",children:"gemini-2.5-flash"}),i.jsx("option",{value:"gemini-2.5-pro",children:"gemini-2.5-pro"})]})}function zS({run:e,onClose:t}){var m;const{project:n}=et(),[r,s]=S.useState(!0),[o,a]=S.useState(new Set),l=e.case_results||[],c=l.filter(y=>y.passed).length,u=l.filter(y=>!y.passed).length,d=r?l.filter(y=>!y.passed):l,p=y=>{a(_=>{const L=new Set(_);return L.has(y)?L.delete(y):L.add(y),L})},f=y=>{y&&n&&(window.location.href=`/project/${n.id}/run?session=${y}`)};return i.jsxs("div",{className:"test-result-viewer",children:[i.jsx("style",{children:`
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
      `}),i.jsxs("div",{className:"result-header",children:[i.jsx("h2",{children:e.eval_set_name||"Test Run Results"}),i.jsx("div",{style:{display:"flex",gap:8},children:i.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{if(n){const y=`${window.location.origin}/project/${n.id}/evaluate?run=${e.id}`;navigator.clipboard.writeText(y)}},title:"Copy link to this run",children:i.jsx(ou,{size:14})})})]}),i.jsxs("div",{className:"result-summary",children:[i.jsxs("div",{className:"summary-stat",children:[i.jsx("span",{className:"label",children:"Status"}),i.jsx("span",{className:`value ${c===l.length?"passed":"failed"}`,children:c===l.length?"PASSED":"FAILED"})]}),i.jsxs("div",{className:"summary-stat",children:[i.jsx("span",{className:"label",children:"Passed"}),i.jsx("span",{className:"value passed",children:c})]}),i.jsxs("div",{className:"summary-stat",children:[i.jsx("span",{className:"label",children:"Failed"}),i.jsx("span",{className:"value failed",children:u})]}),i.jsxs("div",{className:"summary-stat",children:[i.jsx("span",{className:"label",children:"Total Cases"}),i.jsx("span",{className:"value",children:l.length})]}),i.jsxs("div",{className:"summary-stat",children:[i.jsx("span",{className:"label",children:"Duration"}),i.jsx("span",{className:"value",children:e.duration_ms?`${(e.duration_ms/1e3).toFixed(1)}s`:"-"})]}),i.jsxs("div",{className:"summary-stat",children:[i.jsx("span",{className:"label",children:"Tokens"}),i.jsx("span",{className:"value",children:((m=e.total_tokens)==null?void 0:m.toLocaleString())||"-"})]}),i.jsxs("div",{className:"summary-stat",children:[i.jsx("span",{className:"label",children:"Run Time"}),i.jsx("span",{className:"value",style:{fontSize:13},children:e.started_at?new Date(e.started_at*1e3).toLocaleString():"-"})]})]}),i.jsxs("div",{style:{padding:"8px 20px",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",gap:10,background:"var(--bg-secondary)"},children:[i.jsxs("label",{className:"toggle-switch",style:{transform:"scale(0.85)"},children:[i.jsx("input",{type:"checkbox",checked:r,onChange:y=>s(y.target.checked)}),i.jsx("span",{className:"toggle-slider"})]}),i.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:"Hide passing results"})]}),i.jsxs("div",{className:"result-cases",children:[d.map((y,_)=>{var v,E,M,U,D,Q;const L=y.case_id||`case-${_}`,x=o.has(L),g=((v=y.metric_results)==null?void 0:v.filter(T=>!T.passed||T.error))||[],h=((E=y.metric_results)==null?void 0:E.filter(T=>T.passed&&!T.error))||[],P=((M=y.rubric_results)==null?void 0:M.filter(T=>!T.passed||T.error))||[],j=((U=y.rubric_results)==null?void 0:U.filter(T=>T.passed&&!T.error))||[],b=x?y.metric_results:g,C=x?y.rubric_results:P,w=x?y.invocation_results:(D=y.invocation_results)==null?void 0:D.filter(T=>{var O;return((O=T.metric_results)==null?void 0:O.some(I=>!I.passed))||T.error}),R=h.length+j.length,N=g.length+P.length;return i.jsxs("div",{className:"result-case",children:[i.jsxs("div",{className:"result-case-header",onClick:()=>p(L),style:{cursor:"pointer"},children:[i.jsxs("div",{className:"result-case-name",children:[i.jsx("span",{style:{marginRight:6,fontSize:12,color:"var(--text-muted)"},children:x?"▼":"▶"}),y.passed?i.jsx(sr,{size:16,style:{color:"var(--success)"}}):i.jsx(Vr,{size:16,style:{color:"var(--error)"}}),y.eval_set_name&&(e==null?void 0:e.eval_set_id)==="batch"&&i.jsx("span",{style:{fontSize:10,color:"var(--text-muted)",background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4,marginRight:6},children:y.eval_set_name}),y.case_name||`Case ${_+1}`,i.jsxs("span",{style:{marginLeft:10,fontSize:11,color:"var(--text-muted)",fontWeight:400},children:[N>0&&i.jsxs("span",{style:{color:"var(--error)"},children:[N," failed"]}),N>0&&R>0&&" · ",R>0&&i.jsxs("span",{style:{color:"var(--success)"},children:[R," passed"]})]})]}),i.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[y.session_id&&i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:T=>{T.stopPropagation(),f(y.session_id)},title:"View session in Run panel",children:[i.jsx(eg,{size:12})," View Session"]}),i.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:y.duration_ms?`${(y.duration_ms/1e3).toFixed(2)}s`:""})]})]}),i.jsxs("div",{className:"result-case-details",children:[(b==null?void 0:b.length)>0&&i.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:8},children:[b.map((T,O)=>{const I=Ki(T.metric,T.score,T.threshold);return i.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:T.error?"rgba(255, 193, 7, 0.1)":T.passed?"rgba(var(--success-rgb), 0.05)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${T.error?"var(--warning)":T.passed?"var(--border-color)":"var(--error)"}`,display:"flex",flexDirection:"column",alignItems:"center",minWidth:80},children:[i.jsx("span",{style:{fontSize:10,color:"var(--text-secondary)",textAlign:"center",marginBottom:2},children:T.metric.replace(/_/g," ").replace("v1","").replace("v2","").trim()}),T.error?i.jsx("span",{style:{fontSize:10,color:"var(--warning)"},children:"Error"}):i.jsxs(i.Fragment,{children:[i.jsx("span",{style:{fontSize:14,fontWeight:600,color:T.passed?"var(--success)":"var(--error)"},children:I.value}),i.jsx("span",{style:{fontSize:9,color:"var(--text-muted)"},children:I.comparison})]})]},O)}),!x&&h.length>0&&i.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"var(--bg-tertiary)",border:"1px dashed var(--border-color)",display:"flex",alignItems:"center",fontSize:11,color:"var(--text-muted)"},children:["+",h.length," passed"]})]}),b==null?void 0:b.filter(T=>!T.passed&&T.rationale).map((T,O)=>i.jsxs("div",{style:{marginTop:8,padding:"8px 12px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:12},children:[i.jsxs("div",{style:{fontWeight:500,marginBottom:4,color:"var(--error)",fontSize:11},children:[T.metric.replace(/_/g," ")," - Why it failed:"]}),i.jsx("div",{style:{whiteSpace:"pre-wrap",color:"var(--text-secondary)",lineHeight:1.4},children:T.rationale})]},`rationale-${O}`)),(C==null?void 0:C.length)>0&&i.jsxs("div",{style:{marginTop:8},children:[i.jsx("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:4},children:"Custom Rubrics"}),C.map((T,O)=>i.jsxs("div",{style:{marginBottom:T.rationale&&!T.passed?8:4},children:[i.jsxs("div",{className:"metric-row",children:[i.jsx("span",{className:"metric-name",style:{flex:1},children:T.rubric}),i.jsx("span",{className:`metric-value ${T.passed?"passed":"failed"}`,children:T.passed?"✓ Pass":"✗ Fail"})]}),!T.passed&&T.rationale&&i.jsxs("div",{style:{marginTop:4,marginLeft:8,padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:11,color:"var(--text-secondary)"},children:[i.jsx("strong",{style:{color:"var(--error)"},children:"Why:"})," ",T.rationale]}),T.error&&i.jsxs("div",{style:{marginTop:4,marginLeft:8,fontSize:11,color:"var(--warning)"},children:["Error: ",T.error]})]},O)),!x&&j.length>0&&i.jsxs("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:["+",j.length," passed rubric",j.length>1?"s":""]})]}),(w==null?void 0:w.length)>0&&i.jsxs("div",{className:"invocation-summary",children:[i.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:8},children:["Invocations (",w.length,!x&&((Q=y.invocation_results)==null?void 0:Q.length)>w.length?` of ${y.invocation_results.length}`:"",")"]}),w.map((T,O)=>i.jsxs("div",{className:"invocation-item",children:[i.jsxs("div",{className:"invocation-query",children:["Turn ",T.invocation_id||O+1,": ",T.user_message||"(no message)"]}),T.actual_response&&i.jsxs("div",{className:"invocation-response",children:["Response: ",T.actual_response.substring(0,200),T.actual_response.length>200?"...":""]})]},O))]}),y.error&&i.jsx("div",{style:{marginTop:12,padding:12,background:"rgba(255, 107, 107, 0.1)",borderRadius:"var(--radius-sm)",color:"var(--error)",fontSize:12,whiteSpace:"pre-wrap"},children:y.error})]})]},L)}),l.length===0&&i.jsx("div",{style:{textAlign:"center",padding:32,color:"var(--text-secondary)"},children:"No test cases in this run"})]})]})}function TS({evalCase:e,evalSetId:t,projectId:n,result:r,isRunning:s,onUpdate:o,onDelete:a,onRun:l,onClearResult:c}){var j,b,C;const{project:u}=et(),[d,p]=S.useState(e),[f,m]=S.useState("assertions");S.useEffect(()=>{p(e)},[e.id]);const y=S.useCallback(w=>{p(R=>({...R,...w})),o(w)},[o]),_=()=>{const w={id:sx(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]};y({invocations:[...d.invocations,w]})},L=(w,R)=>{const N=[...d.invocations];N[w]={...N[w],...R},y({invocations:N})},x=w=>{y({invocations:d.invocations.filter((R,N)=>N!==w)})},g=w=>{const R=[...d.invocations];R[w]={...R[w],expected_tool_calls:[...R[w].expected_tool_calls,{name:"",args:{},args_match_mode:"subset"}]},y({invocations:R})},h=(w,R,N)=>{const v=[...d.invocations],E=[...v[w].expected_tool_calls];E[R]={...E[R],...N},v[w]={...v[w],expected_tool_calls:E},y({invocations:v})},P=(w,R)=>{const N=[...d.invocations];N[w]={...N[w],expected_tool_calls:N[w].expected_tool_calls.filter((v,E)=>E!==R)},y({invocations:N})};return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"editor-header",children:[i.jsx(yo,{size:20,style:{color:"var(--accent-primary)"}}),i.jsx("input",{type:"text",value:d.name,onChange:w=>y({name:w.target.value}),placeholder:"Test case name"}),i.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const w=`${window.location.origin}/project/${n}/evaluate?set=${t}&case=${e.id}`;navigator.clipboard.writeText(w)},title:"Copy link to this test case",children:i.jsx(ou,{size:14})}),i.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:s,children:[s?i.jsx(xo,{size:14,className:"spinning"}):i.jsx(Mn,{size:14}),"Run"]}),i.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:i.jsx(Le,{size:14})})]}),i.jsxs("div",{className:"tabs",children:[i.jsxs("div",{className:`tab ${f==="assertions"?"active":""}`,onClick:()=>m("assertions"),children:[i.jsx(vo,{size:14,style:{marginRight:6}}),"Assertions (",d.invocations.length,")"]}),i.jsxs("div",{className:`tab ${f==="rubrics"?"active":""}`,onClick:()=>m("rubrics"),children:[i.jsx(cu,{size:14,style:{marginRight:6}}),"LLM Judges"]}),i.jsxs("div",{className:`tab ${f==="docs"?"active":""}`,onClick:()=>m("docs"),children:[i.jsx(go,{size:14,style:{marginRight:6}}),"Docs"]}),i.jsxs("div",{className:`tab ${f==="json"?"active":""}`,onClick:()=>m("json"),children:[i.jsx(Zt,{size:14,style:{marginRight:6}}),"JSON"]})]}),i.jsxs("div",{className:"editor-content",children:[f==="assertions"&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{style:{display:"flex",gap:12,marginBottom:12},children:[i.jsxs("div",{style:{flex:1},children:[i.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"target_agent"}),i.jsxs("select",{value:d.target_agent||"",onChange:w=>y({target_agent:w.target.value||void 0}),style:{width:"100%"},children:[i.jsx("option",{value:"",children:"root_agent"}),(j=u==null?void 0:u.agents)==null?void 0:j.map(w=>i.jsx("option",{value:w.name,children:w.name},w.name))]})]}),i.jsxs("div",{style:{flex:1},children:[i.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"tags"}),i.jsx("input",{type:"text",value:d.tags.join(", "),onChange:w=>y({tags:w.target.value.split(",").map(R=>R.trim()).filter(Boolean)}),placeholder:"smoke, regression",style:{width:"100%"}})]})]}),i.jsxs("div",{className:"form-section",children:[i.jsx("h4",{children:"Description"}),i.jsx("textarea",{value:d.description,onChange:w=>y({description:w.target.value}),placeholder:"What does this test verify?",style:{minHeight:40}})]}),i.jsxs("div",{className:"form-section",children:[i.jsxs("h4",{children:["session_input ",i.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(initial state)"})]}),i.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:i.jsx(Ft,{height:"100%",defaultLanguage:"json",value:(()=>{var R;if((!d.initial_state||Object.keys(d.initial_state).length===0)&&((R=u==null?void 0:u.app)!=null&&R.state_keys)&&u.app.state_keys.length>0){const N={};return u.app.state_keys.forEach(v=>{v.default_value!==void 0?N[v.name]=v.default_value:N[v.name]=v.type==="string"?"":v.type==="number"?0:v.type==="boolean"?!1:v.type==="array"?[]:{}}),JSON.stringify(N,null,2)}return JSON.stringify(d.initial_state,null,2)})(),onChange:w=>{try{w&&y({initial_state:JSON.parse(w)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]}),i.jsxs("div",{className:"form-section",children:[i.jsxs("h4",{children:[i.jsx(vo,{size:14}),"Conversation Turns"]}),d.invocations.map((w,R)=>i.jsxs("div",{className:"invocation-card",children:[i.jsxs("div",{className:"invocation-number",children:[i.jsx("span",{children:R+1}),d.invocations.length>1&&i.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>x(R),style:{padding:4},children:i.jsx(Le,{size:10})})]}),i.jsxs("div",{className:"invocation-content",children:[i.jsxs("div",{className:"invocation-row",children:[i.jsxs("div",{className:"form-section",children:[i.jsx("label",{children:"User Query"}),i.jsx("textarea",{value:w.user_message,onChange:N=>L(R,{user_message:N.target.value}),placeholder:"The message to send to the agent..."})]}),i.jsxs("div",{className:"form-section",children:[i.jsxs("label",{children:["Expected Response ",i.jsx("span",{style:{color:"var(--text-muted)",fontWeight:400},children:"(ROUGE-1)"})]}),i.jsx("textarea",{value:w.expected_response||"",onChange:N=>L(R,{expected_response:N.target.value||void 0}),placeholder:"Expected text (partial match)..."})]})]}),w.expected_tool_calls.map((N,v)=>i.jsxs("div",{className:"tool-call-compact",children:[i.jsx("input",{type:"text",value:N.name,onChange:E=>h(R,v,{name:E.target.value}),placeholder:"tool_name",className:"tool-name-input"}),i.jsxs("div",{className:"pillbox-toggle",children:[i.jsx("button",{className:`pill ${N.args_match_mode==="subset"?"active":""}`,onClick:()=>h(R,v,{args_match_mode:"subset"}),children:"Partial"}),i.jsx("button",{className:`pill ${N.args_match_mode==="exact"?"active":""}`,onClick:()=>h(R,v,{args_match_mode:"exact"}),children:"Exact"})]}),i.jsx("div",{className:"tool-args-editor",children:i.jsx(Ft,{height:"22px",defaultLanguage:"json",value:JSON.stringify(N.args||{}),onChange:E=>{try{E&&h(R,v,{args:JSON.parse(E)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,wordWrap:"off",scrollbar:{vertical:"hidden",horizontal:"hidden"},overviewRulerLanes:0,hideCursorInOverviewRuler:!0,overviewRulerBorder:!1,renderLineHighlight:"none",fontSize:11,padding:{top:3,bottom:3},automaticLayout:!0}})}),i.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>P(R,v),style:{padding:"4px 6px"},children:i.jsx(Le,{size:10})})]},v)),i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>g(R),style:{marginTop:4},children:[i.jsx(Oe,{size:12})," Assert Tool Call"]})]})]},w.id)),i.jsxs("button",{className:"btn btn-secondary",onClick:_,children:[i.jsx(Oe,{size:14})," Add Turn"]})]}),i.jsxs("div",{className:"form-section",children:[i.jsxs("h4",{children:[i.jsx(sr,{size:14,style:{marginRight:6}}),"final_session_state ",i.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(optional)"})]}),i.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Assert that session state contains these key-value pairs after all turns complete."}),i.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:i.jsx(Ft,{height:"100%",defaultLanguage:"json",value:d.expected_final_state?JSON.stringify(d.expected_final_state,null,2):"{}",onChange:w=>{if(!w||w==="{}")y({expected_final_state:void 0});else try{y({expected_final_state:JSON.parse(w)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]})]}),f==="rubrics"&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"form-section",style:{marginBottom:16},children:[{metric:"safety_v1",label:"safety_v1",default:.8,max:1},{metric:"hallucinations_v1",label:"hallucinations_v1",default:.8,max:1},{metric:"response_evaluation_score",label:"response_evaluation_score",default:3.5,max:5},{metric:"final_response_match_v2",label:"final_response_match_v2",default:.7,max:1}].map(({metric:w,label:R,default:N,max:v})=>{const E=(d.enabled_metrics||[]).find(U=>U.metric===w),M=(E==null?void 0:E.threshold)??N;return i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[i.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[i.jsx("input",{type:"checkbox",checked:!!E,onChange:U=>{const D=[...d.enabled_metrics||[]];if(U.target.checked)D.push({metric:w,threshold:N});else{const Q=D.findIndex(T=>T.metric===w);Q!==-1&&D.splice(Q,1)}y({enabled_metrics:D})}}),i.jsx("span",{className:"toggle-slider"})]}),i.jsx("span",{style:{fontSize:12,opacity:E?1:.5,minWidth:100},children:R}),i.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:E?1:.4},children:"≥"}),i.jsx("input",{type:"number",min:v===5?1:0,max:v,step:.1,value:M,disabled:!E,onChange:U=>{const D=[...d.enabled_metrics||[]],Q=D.findIndex(T=>T.metric===w);Q!==-1&&(D[Q]={...D[Q],threshold:parseFloat(U.target.value)||0},y({enabled_metrics:D}))},style:{width:60,textAlign:"center",opacity:E?1:.3,padding:"2px 4px",fontSize:11}})]},w)})}),i.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--border-color)",margin:"16px 0"}}),i.jsxs("div",{className:"form-section",children:[i.jsx("h4",{children:"Custom Rubrics"}),i.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Natural language criteria evaluated by an LLM judge. Returns pass/fail per rubric."}),d.rubrics.map((w,R)=>i.jsxs("div",{className:"tool-call-row",style:{marginBottom:8},children:[i.jsx("input",{type:"text",value:w.rubric,onChange:N=>{const v=[...d.rubrics];v[R]={rubric:N.target.value},y({rubrics:v})},placeholder:"e.g., The response mentions the return policy",style:{flex:1}}),i.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>y({rubrics:d.rubrics.filter((N,v)=>v!==R)}),children:i.jsx(Le,{size:12})})]},R)),i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>y({rubrics:[...d.rubrics,{rubric:""}]}),children:[i.jsx(Oe,{size:12})," Add Rubric"]})]})]}),f==="docs"&&i.jsxs("div",{style:{fontSize:13,lineHeight:1.6,color:"var(--text-secondary)",overflowY:"auto",maxHeight:"100%"},children:[i.jsx("h3",{style:{marginBottom:16,color:"var(--text-primary)"},children:"Evaluation Test Case Guide"}),i.jsxs("section",{style:{marginBottom:24,padding:12,background:"rgba(var(--accent-primary-rgb), 0.1)",borderRadius:"var(--radius-md)",border:"1px solid var(--accent-primary)"},children:[i.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Quick Overview"}),i.jsxs("p",{children:["Each test case simulates a ",i.jsx("strong",{children:"multi-turn conversation"})," with an agent. For each turn (invocation), you provide a user message and define what you expect the agent to do."]}),i.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Invocations"})," = conversation turns (user messages)"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Expected Response"})," = the agent's ",i.jsx("em",{children:"final text reply"})," for that turn"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Expected Tool Calls"})," = tools the agent should invoke during that turn"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Session State"})," = test the ",i.jsx("em",{children:"final state"})," after ALL turns complete"]})]})]}),i.jsxs("section",{style:{marginBottom:24},children:[i.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:'📝 What is "Expected Response"?'}),i.jsxs("p",{children:["The ",i.jsx("strong",{children:"Expected Response"})," is matched against the agent's ",i.jsx("strong",{children:"final response"})," for that specific turn — NOT every message."]}),i.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[i.jsx("p",{style:{marginBottom:8},children:i.jsx("strong",{children:"During one turn, an agent may:"})}),i.jsxs("ul",{style:{marginLeft:20,marginBottom:12},children:[i.jsx("li",{children:"Send intermediate thinking/reasoning messages"}),i.jsx("li",{children:"Call multiple tools"}),i.jsx("li",{children:"Transfer to sub-agents (who may respond)"}),i.jsxs("li",{children:["Finally send a ",i.jsx("em",{children:"concluding response"})]})]}),i.jsxs("p",{children:["Only the ",i.jsx("strong",{children:"last text response"})," from the agent for that turn is compared against your Expected Response."]})]}),i.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Tip: If you need to verify intermediate steps, use Tool Trajectory matching or custom Rubrics."})]}),i.jsxs("section",{style:{marginBottom:24},children:[i.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🔄 Response Matching (ROUGE-1)"}),i.jsxs("p",{children:["The ",i.jsx("code",{children:"response_match_score"})," uses ",i.jsx("strong",{children:"ROUGE-1 F1 scoring"})," — fuzzy word-level matching:"]}),i.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[i.jsx("li",{children:"Tokenizes both expected and actual responses into words"}),i.jsx("li",{children:"Calculates word overlap (not exact string match)"}),i.jsx("li",{children:"Returns a score from 0.0 to 1.0"})]}),i.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[i.jsx("p",{children:i.jsx("strong",{children:"Example:"})}),i.jsxs("p",{children:["Expected: ",i.jsx("code",{children:'"The weather in Paris is sunny today"'})]}),i.jsxs("p",{children:["Actual: ",i.jsx("code",{children:'"Today in Paris, expect sunny weather"'})]}),i.jsx("p",{style:{marginTop:8,color:"var(--success)"},children:"✓ High ROUGE-1 score (same words, different order)"})]}),i.jsxs("p",{style:{marginTop:8},children:["A threshold of ",i.jsx("strong",{children:"0.7"})," means 70% word overlap is required to pass."]})]}),i.jsxs("section",{style:{marginBottom:24},children:[i.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🛠️ Tool Trajectory Matching"}),i.jsxs("p",{children:["The ",i.jsx("code",{children:"tool_trajectory_avg_score"})," verifies the agent called expected tools. Match types:"]}),i.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Exact"})," — Same tools in same order, no extras allowed"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"In Order"})," — Expected tools appear in order, extras allowed between"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Any Order"})," — All expected tools present, any order, extras allowed"]})]}),i.jsx("p",{style:{marginTop:8},children:"For each tool, you can match by:"}),i.jsxs("ul",{style:{marginLeft:20,marginTop:4},children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Name Only"})," — Just check the tool was called"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Exact Args"})," — Arguments must match exactly (provide JSON)"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Args Subset"})," — Your expected args must be present in actual args"]})]})]}),i.jsxs("section",{style:{marginBottom:24},children:[i.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💾 Session State Testing"}),i.jsxs("p",{children:[i.jsx("strong",{children:"Initial State"})," (Settings tab) — Pre-populate session state before running the test:"]}),i.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[i.jsx("li",{children:"Set user preferences or context"}),i.jsx("li",{children:"Simulate a specific scenario"}),i.jsx("li",{children:"Test state-dependent behavior"})]}),i.jsxs("p",{style:{marginTop:12},children:[i.jsx("strong",{children:"Expected Final State"})," — Verified at the ",i.jsx("em",{children:"very end"})," of the test case, ",i.jsx("strong",{children:"after ALL invocations complete"}),"."]}),i.jsx("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8,borderLeft:"3px solid var(--warning)"},children:i.jsxs("p",{style:{margin:0},children:[i.jsx("strong",{children:"Important:"})," State is tested once after the entire conversation, NOT after each turn. To test state changes per-turn, use separate test cases."]})})]}),i.jsxs("section",{style:{marginBottom:24},children:[i.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Target Agent (Settings tab)"}),i.jsxs("p",{children:["By default, tests run against the ",i.jsx("strong",{children:"root_agent"})," of your App. You can select a specific sub-agent to test in isolation:"]}),i.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[i.jsxs("li",{children:[i.jsx("strong",{children:"root_agent"})," — Test the full agent hierarchy (default)"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Specific agent"})," — Unit test individual agents"]})]}),i.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Useful for testing sub-agents independently before integrating into the full system."})]}),i.jsxs("section",{style:{marginBottom:24},children:[i.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📋 Custom Rubrics"}),i.jsx("p",{children:"Rubrics are custom yes/no criteria evaluated by an LLM judge. Examples:"}),i.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[i.jsx("li",{children:'"Does the response mention the product price?"'}),i.jsx("li",{children:'"Is the tone professional and helpful?"'}),i.jsx("li",{children:'"Does the response avoid mentioning competitors?"'})]}),i.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Note: Rubric evaluation requires LLM-judged metrics to be enabled in the Eval Set."})]}),i.jsxs("section",{style:{marginBottom:24},children:[i.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📊 Available Metrics"}),i.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12},children:[i.jsx("thead",{children:i.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[i.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Metric"}),i.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Type"}),i.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Description"})]})}),i.jsx("tbody",{children:Object.keys(Qt).map(w=>i.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[i.jsx("td",{style:{padding:"8px 4px",fontFamily:"var(--font-mono)",fontSize:11},children:w}),i.jsx("td",{style:{padding:"8px 4px"},children:Qt[w].requiresJudge?i.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--accent-primary)",color:"white",borderRadius:4},children:"LLM Judge"}):i.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--bg-tertiary)",borderRadius:4},children:"Built-in"})}),i.jsx("td",{style:{padding:"8px 4px",color:"var(--text-muted)"},children:Qt[w].description})]},w))})]})]}),i.jsxs("section",{children:[i.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💡 Tips"}),i.jsxs("ul",{style:{marginLeft:20},children:[i.jsx("li",{children:"Start with simple single-turn tests, then add complexity"}),i.jsx("li",{children:'Use "In Order" matching for most tool trajectory tests'}),i.jsx("li",{children:"Lower ROUGE thresholds (0.5-0.6) for creative/varied responses"}),i.jsx("li",{children:"Higher thresholds (0.8-0.9) for factual/precise responses"}),i.jsx("li",{children:"Use tags to organize tests by feature or priority"}),i.jsx("li",{children:"Test sub-agents individually using Target Agent selector"})]})]})]}),f==="json"&&i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[i.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:i.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this test case. You can use this with ",i.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval"}),"."]})}),i.jsx("div",{style:{flex:1,minHeight:300,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:i.jsx(Ft,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify({name:d.name,description:d.description||void 0,tags:(b=d.tags)!=null&&b.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(w=>{var R;return{user_message:w.user_message,expected_response:w.expected_response||void 0,expected_tool_calls:(R=w.expected_tool_calls)!=null&&R.length?w.expected_tool_calls.map(N=>({tool_name:N.tool_name,args:N.match_type!=="name_only"&&Object.keys(N.args||{}).length?N.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(C=d.rubrics)!=null&&C.length?d.rubrics.map(w=>w.rubric):void 0},null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),i.jsx("div",{style:{display:"flex",gap:8},children:i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var R,N;const w=JSON.stringify({name:d.name,description:d.description||void 0,tags:(R=d.tags)!=null&&R.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(v=>{var E;return{user_message:v.user_message,expected_response:v.expected_response||void 0,expected_tool_calls:(E=v.expected_tool_calls)!=null&&E.length?v.expected_tool_calls.map(M=>({tool_name:M.tool_name,args:M.match_type!=="name_only"&&Object.keys(M.args||{}).length?M.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(N=d.rubrics)!=null&&N.length?d.rubrics.map(v=>v.rubric):void 0},null,2);navigator.clipboard.writeText(w)},children:[i.jsx(Vo,{size:14})," Copy JSON"]})})]})]}),r&&i.jsxs("div",{className:"result-panel",children:[i.jsxs("div",{className:`result-header ${r.passed?"passed":"failed"}`,children:[r.passed?i.jsxs(i.Fragment,{children:[i.jsx(sr,{size:18})," ",i.jsx("strong",{children:"Passed"})]}):i.jsxs(i.Fragment,{children:[i.jsx(Vr,{size:18})," ",i.jsx("strong",{children:"Failed"})]}),i.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:12},children:[r.total_tokens?i.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},title:"Total tokens used",children:[r.total_tokens.toLocaleString()," tokens"]}):null,i.jsxs("span",{style:{color:"var(--text-muted)",fontSize:12},children:[r.duration_ms.toFixed(0),"ms"]}),r.session_id&&i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{window.location.href=`/project/${u==null?void 0:u.id}/run?session=${r.session_id}`},title:"View this session in the Run panel",style:{fontSize:11},children:[i.jsx(eg,{size:12}),"View Session"]}),c&&i.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Close test results",style:{fontSize:11,padding:"4px 8px"},children:"✕"})]})]}),i.jsx("div",{className:"result-scores",children:r.metric_results.map((w,R)=>{var v;const N=Ki(w.metric,w.score,w.threshold);return i.jsxs("div",{className:"score-card",children:[i.jsx("div",{className:`score-value ${w.passed?"passed":"failed"}`,children:N.value}),i.jsx("div",{className:"score-label",children:((v=Qt[w.metric])==null?void 0:v.name)||w.metric}),i.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",marginTop:2},children:N.comparison}),w.error&&i.jsx("div",{style:{fontSize:10,color:"var(--error)",marginTop:4},children:w.error})]},R)})}),r.rubric_results&&r.rubric_results.length>0&&i.jsxs("div",{style:{marginTop:16},children:[i.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Custom Rubrics"}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:r.rubric_results.map((w,R)=>i.jsxs("div",{style:{padding:"8px 12px",borderRadius:"var(--radius-sm)",background:w.passed?"rgba(var(--success-rgb), 0.1)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${w.passed?"var(--success)":"var(--error)"}`,display:"flex",alignItems:"center",gap:10},children:[i.jsx("span",{style:{fontSize:16,color:w.passed?"var(--success)":"var(--error)",fontWeight:"bold"},children:w.passed?"✓":"✗"}),i.jsxs("div",{style:{flex:1},children:[i.jsx("div",{style:{fontSize:12,color:"var(--text-primary)"},children:w.rubric}),w.error&&i.jsxs("div",{style:{fontSize:10,color:"var(--error)",marginTop:2},children:["Error: ",w.error]})]})]},R))})]}),r.invocation_results.map((w,R)=>i.jsxs("div",{className:"result-details",children:[i.jsxs("h5",{children:["Turn ",R+1,": ",w.user_message.length>50?w.user_message.slice(0,50)+"…":w.user_message]}),w.metric_results.length>0&&i.jsx("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:w.metric_results.map((N,v)=>{var M;const E=Ki(N.metric,N.score,N.threshold);return i.jsxs("span",{style:{fontSize:11,padding:"2px 6px",borderRadius:"var(--radius-sm)",background:N.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:N.passed?"var(--success)":"var(--error)"},children:[((M=Qt[N.metric])==null?void 0:M.name)||N.metric,": ",E.value]},v)})}),i.jsxs("div",{className:"detail-box",children:[i.jsx("strong",{children:"Actual Response:"}),`
`,w.actual_response||"(no response)",`

`,w.actual_tool_calls.length>0&&i.jsxs(i.Fragment,{children:[i.jsx("strong",{children:"Tool Calls:"}),`
`,w.actual_tool_calls.map((N,v)=>`  ${v+1}. ${N.name}(${JSON.stringify(N.args)})
`).join("")]})]})]},R)),r.error&&i.jsxs("div",{className:"result-details",children:[i.jsx("h5",{style:{color:"var(--error)"},children:"Error"}),i.jsx("div",{className:"detail-box",style:{color:"var(--error)"},children:r.error})]})]})]})}function PS({evalSet:e,projectId:t,result:n,isRunning:r,caseResults:s,onUpdate:o,onDelete:a,onRun:l,onExport:c}){var _,L,x,g;const[u,d]=S.useState(e.name),[p,f]=S.useState(!1);S.useEffect(()=>{d(e.name)},[e.id]);const m=S.useCallback(()=>{u!==e.name&&o({name:u})},[u,e.name,o]),y=h=>h==null?"-":`${Math.round(h*100)}%`;return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"editor-header",children:[i.jsx(tg,{size:20,style:{color:"var(--accent-secondary)"}}),i.jsx("input",{type:"text",value:u,onChange:h=>d(h.target.value),onBlur:m,placeholder:"Eval set name"}),i.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const h=`${window.location.origin}/project/${t}/evaluate?set=${e.id}`;navigator.clipboard.writeText(h)},title:"Copy link to this eval set",children:i.jsx(ou,{size:14})}),i.jsxs("button",{className:`btn btn-sm ${p?"btn-primary":"btn-secondary"}`,onClick:()=>f(!p),title:"View/Hide JSON",children:[i.jsx(Zt,{size:14}),"JSON"]}),i.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Export as JSON (compatible with adk eval)",children:i.jsx(ns,{size:14})}),i.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:r,children:[r?i.jsx(xo,{size:14,className:"spinning"}):i.jsx(Mn,{size:14}),"Run All"]}),i.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:i.jsx(Le,{size:14})})]}),i.jsx("div",{className:"editor-content",children:p?i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[i.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:i.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this evaluation set. Save this file and use with ",i.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval <agent_path> <eval_file.json>"})]})}),i.jsx("div",{style:{flex:1,minHeight:400,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:i.jsx(Ft,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(h=>{var P,j;return{name:h.name,description:h.description||void 0,tags:(P=h.tags)!=null&&P.length?h.tags:void 0,target_agent:h.target_agent!=="root_agent"?h.target_agent:void 0,invocations:h.invocations.map(b=>{var C;return{user_message:b.user_message,expected_response:b.expected_response||void 0,expected_tool_calls:(C=b.expected_tool_calls)!=null&&C.length?b.expected_tool_calls.map(w=>({tool_name:w.tool_name,args:w.match_type!=="name_only"&&Object.keys(w.args||{}).length?w.args:void 0})):void 0}}),session_input:Object.keys(h.session_input||{}).length?{state:h.session_input}:void 0,final_session_state:Object.keys(h.final_session_state||{}).length?h.final_session_state:void 0,rubrics:(j=h.rubrics)!=null&&j.length?h.rubrics.map(b=>b.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((_=e.eval_config.metrics)==null?void 0:_.filter(h=>h.enabled))||void 0}:void 0}],null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),i.jsx("div",{style:{display:"flex",gap:8},children:i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var P;const h=JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(j=>{var b,C;return{name:j.name,description:j.description||void 0,tags:(b=j.tags)!=null&&b.length?j.tags:void 0,target_agent:j.target_agent!=="root_agent"?j.target_agent:void 0,invocations:j.invocations.map(w=>{var R;return{user_message:w.user_message,expected_response:w.expected_response||void 0,expected_tool_calls:(R=w.expected_tool_calls)!=null&&R.length?w.expected_tool_calls.map(N=>({tool_name:N.tool_name,args:N.match_type!=="name_only"&&Object.keys(N.args||{}).length?N.args:void 0})):void 0}}),session_input:Object.keys(j.session_input||{}).length?{state:j.session_input}:void 0,final_session_state:Object.keys(j.final_session_state||{}).length?j.final_session_state:void 0,rubrics:(C=j.rubrics)!=null&&C.length?j.rubrics.map(w=>w.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((P=e.eval_config.metrics)==null?void 0:P.filter(j=>j.enabled))||void 0}:void 0}],null,2);navigator.clipboard.writeText(h)},children:[i.jsx(Vo,{size:14})," Copy JSON"]})})]}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"form-section",children:[i.jsx("h4",{children:"Description"}),i.jsx("textarea",{value:e.description,onChange:h=>o({description:h.target.value}),placeholder:"Description of this evaluation set...",style:{minHeight:40}})]}),i.jsxs("div",{className:"form-section",children:[i.jsx("h4",{children:"LLM Judge Model"}),i.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Model used for LLM-judged metrics (safety, hallucinations, etc.)."}),i.jsx(ES,{value:((L=e.eval_config)==null?void 0:L.judge_model)||"",onChange:h=>o({eval_config:{...e.eval_config,judge_model:h}})})]}),i.jsxs("div",{className:"form-section",children:[i.jsxs("h4",{children:[i.jsx(ig,{size:14})," Evaluation Metrics"]}),i.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Configure which metrics to use and their pass thresholds."}),Object.keys(Qt).map(h=>{var w,R,N;const P=Qt[h],j=(R=(w=e.eval_config)==null?void 0:w.metrics)==null?void 0:R.find(v=>v.metric===h),b=(j==null?void 0:j.enabled)??!1,C=((N=j==null?void 0:j.criterion)==null?void 0:N.threshold)??.7;return i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[i.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[i.jsx("input",{type:"checkbox",checked:b,onChange:v=>{var U;const E=[...((U=e.eval_config)==null?void 0:U.metrics)||[]],M=E.findIndex(D=>D.metric===h);v.target.checked?M===-1?E.push({metric:h,enabled:!0,criterion:{threshold:.7}}):E[M]={...E[M],enabled:!0}:M!==-1&&(E[M]={...E[M],enabled:!1}),o({eval_config:{...e.eval_config,metrics:E}})}}),i.jsx("span",{className:"toggle-slider"})]}),i.jsxs("span",{style:{fontSize:12,opacity:b?1:.5,minWidth:140,fontWeight:b?500:400},children:[P.name,P.requiresJudge&&i.jsx("span",{style:{fontSize:9,marginLeft:4,color:"var(--accent-primary)"},children:"LLM"})]}),i.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:b?1:.4},children:"≥"}),i.jsx("input",{type:"number",min:0,max:1,step:.1,value:C,disabled:!b,onChange:v=>{var U;const E=[...((U=e.eval_config)==null?void 0:U.metrics)||[]],M=E.findIndex(D=>D.metric===h);M!==-1&&(E[M]={...E[M],criterion:{...E[M].criterion,threshold:parseFloat(v.target.value)||.7}},o({eval_config:{...e.eval_config,metrics:E}}))},style:{width:60,textAlign:"center",opacity:b?1:.3,padding:"2px 4px",fontSize:11}})]},h)}),i.jsxs("div",{className:"form-row",style:{marginTop:16},children:[i.jsxs("div",{className:"form-field",children:[i.jsx("label",{children:"Default Trajectory Match Type"}),i.jsxs("select",{value:((x=e.eval_config)==null?void 0:x.default_trajectory_match_type)||"in_order",onChange:h=>o({eval_config:{...e.eval_config,default_trajectory_match_type:h.target.value}}),children:[i.jsx("option",{value:"exact",children:"Exact (same order, no extras)"}),i.jsx("option",{value:"in_order",children:"In Order (extras allowed between)"}),i.jsx("option",{value:"any_order",children:"Any Order (all present, any order)"})]})]}),i.jsxs("div",{className:"form-field",children:[i.jsx("label",{children:"Number of Runs"}),i.jsx("input",{type:"number",min:1,max:10,value:((g=e.eval_config)==null?void 0:g.num_runs)||1,onChange:h=>o({eval_config:{...e.eval_config,num_runs:parseInt(h.target.value)||1}})}),i.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:"Run each test multiple times for statistical reliability."})]})]})]}),i.jsxs("div",{className:"form-section",children:[i.jsxs("h4",{children:[i.jsx(g0,{size:14})," Coverage Summary"]}),n?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"result-scores",children:[i.jsxs("div",{className:"score-card",children:[i.jsxs("div",{className:"score-value",style:{color:"var(--accent-primary)"},children:[n.passed_cases,"/",n.total_cases]}),i.jsx("div",{className:"score-label",children:"Cases Passed"})]}),i.jsxs("div",{className:"score-card",children:[i.jsx("div",{className:`score-value ${n.overall_pass_rate>=.8?"passed":"failed"}`,children:y(n.overall_pass_rate)}),i.jsx("div",{className:"score-label",children:"Pass Rate"})]}),Object.entries(n.metric_avg_scores||{}).map(([h,P])=>{var b;const j=Ki(h,P);return i.jsxs("div",{className:"score-card",children:[i.jsx("div",{className:"score-value",children:j.value}),i.jsxs("div",{className:"score-label",children:["Avg ",((b=Qt[h])==null?void 0:b.name)||h]})]},h)})]}),i.jsxs("div",{style:{marginTop:16},children:[i.jsx("div",{style:{marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Overall Pass Rate"}),i.jsx("div",{className:"coverage-bar",children:i.jsx("div",{className:`coverage-fill ${n.overall_pass_rate>=.8?"passed":"failed"}`,style:{width:`${n.overall_pass_rate*100}%`}})})]}),Object.entries(n.metric_pass_rates||{}).length>0&&i.jsxs("div",{style:{marginTop:16},children:[i.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Metric Pass Rates"}),Object.entries(n.metric_pass_rates).map(([h,P])=>{var j;return i.jsxs("div",{style:{marginBottom:8},children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4},children:[i.jsx("span",{children:((j=Qt[h])==null?void 0:j.name)||h}),i.jsx("span",{children:y(P)})]}),i.jsx("div",{className:"coverage-bar",children:i.jsx("div",{className:`coverage-fill ${P>=.8?"passed":"failed"}`,style:{width:`${P*100}%`}})})]},h)})]}),i.jsxs("div",{style:{marginTop:16},children:[i.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Individual Results"}),i.jsxs("table",{style:{width:"100%",fontSize:12,borderCollapse:"collapse"},children:[i.jsx("thead",{children:i.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[i.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Test Case"}),i.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Metrics"}),i.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Status"})]})}),i.jsx("tbody",{children:n.case_results.map(h=>i.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[i.jsx("td",{style:{padding:"8px 4px"},children:h.eval_case_name}),i.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:h.metric_results.map((P,j)=>{const b=Ki(P.metric,P.score,P.threshold);return i.jsx("span",{style:{fontSize:10,padding:"2px 4px",marginRight:4,borderRadius:"var(--radius-sm)",background:P.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:P.passed?"var(--success)":"var(--error)"},children:b.value},j)})}),i.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:h.passed?i.jsx(sr,{size:14,style:{color:"var(--success)"}}):h.error?i.jsx(go,{size:14,style:{color:"var(--warning)"}}):i.jsx(Vr,{size:14,style:{color:"var(--error)"}})})]},h.eval_case_id))})]})]})]}):i.jsxs("div",{style:{textAlign:"center",padding:"32px",color:"var(--text-muted)",background:"var(--bg-tertiary)",borderRadius:"var(--radius-md)"},children:[i.jsx(cu,{size:32,style:{marginBottom:8,opacity:.3}}),i.jsx("p",{children:"Run the evaluation set to see coverage metrics"})]})]}),i.jsxs("div",{className:"form-section",children:[i.jsxs("h4",{children:["Test Cases (",e.eval_cases.length,")"]}),e.eval_cases.length===0?i.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"No test cases yet. Add cases to this eval set to start testing."}):i.jsx("ul",{style:{listStyle:"none",padding:0},children:e.eval_cases.map(h=>{const P=s.get(h.id);return i.jsxs("li",{style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",background:"var(--bg-tertiary)",borderRadius:"var(--radius-sm)",marginBottom:8},children:[P?P.passed?i.jsx(sr,{size:14,style:{color:"var(--success)"}}):i.jsx(Vr,{size:14,style:{color:"var(--error)"}}):i.jsx(yo,{size:14,style:{color:"var(--text-muted)"}}),i.jsx("span",{style:{flex:1},children:h.name}),i.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},children:[h.invocations.length," turn(s)"]})]},h.id)})})]})]})})]})}function LS(){const{project:e,setProject:t}=et(),[n,r]=S.useState(""),[s,o]=S.useState(!0),[a,l]=S.useState(!1),[c,u]=S.useState(null),[d,p]=S.useState(!1);if(!e)return null;S.useEffect(()=>{f()},[e.id]);async function f(){o(!0),u(null);try{const g=await Dh(e.id);r(g),l(!1)}catch(g){u(g.message)}finally{o(!1)}}function m(g){g!==void 0&&(r(g),l(!0),u(null))}async function y(){o(!0),u(null);try{const g=await Fh(e.id,n);t(g),l(!1)}catch(g){u(g.message)}finally{o(!1)}}function _(){navigator.clipboard.writeText(n),p(!0),setTimeout(()=>p(!1),2e3)}function L(){const g=new Blob([n],{type:"text/yaml"}),h=URL.createObjectURL(g),P=document.createElement("a");P.href=h,P.download=`${e.name}.yaml`,P.click(),URL.revokeObjectURL(h)}function x(){const g=document.createElement("input");g.type="file",g.accept=".yaml,.yml",g.onchange=async h=>{var b;const P=(b=h.target.files)==null?void 0:b[0];if(!P)return;const j=await P.text();r(j),l(!0)},g.click()}return i.jsxs("div",{className:"yaml-panel",children:[i.jsx("style",{children:`
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
      `}),i.jsxs("div",{className:"yaml-header",children:[i.jsxs("div",{className:"yaml-title",children:[i.jsx("h3",{children:"Project Configuration"}),a&&i.jsxs("span",{className:"status-badge warning",children:[i.jsx(go,{size:12}),"Unsaved changes"]}),c&&i.jsxs("span",{className:"status-badge error",children:[i.jsx(go,{size:12}),c]}),d&&i.jsxs("span",{className:"status-badge success",children:[i.jsx(Zh,{size:12}),"Copied!"]})]}),i.jsxs("div",{className:"yaml-actions",children:[i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:_,title:"Copy to clipboard",children:[i.jsx(Vo,{size:14}),"Copy"]}),i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:L,title:"Download YAML",children:[i.jsx(ns,{size:14}),"Download"]}),i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:x,title:"Upload YAML",children:[i.jsx(Wo,{size:14}),"Upload"]}),i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:f,title:"Reload from server",children:[i.jsx(_n,{size:14}),"Reload"]}),i.jsx("button",{className:"btn btn-primary btn-sm",onClick:y,disabled:!a||s,children:"Apply Changes"})]})]}),i.jsx("div",{className:"yaml-editor",children:i.jsx(Ft,{height:"100%",language:"yaml",theme:"vs-dark",value:n,onChange:m,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),i.jsxs("div",{className:"yaml-info",children:[i.jsx("p",{children:"This YAML represents your entire project configuration including the app, agents, tools, and state keys."}),i.jsxs("p",{children:["You can edit the YAML directly, then click ",i.jsx("code",{children:"Apply Changes"})," to update the project. Use ",i.jsx("code",{children:"Download"})," to save a backup or ",i.jsx("code",{children:"Upload"})," to import a configuration."]})]})]})}function tf(e){return e.replace(/\\/g,"\\\\").replace(/"""/g,'\\"\\"\\"')}function AS(e,t="model"){if(!e)return"";const n=[`model="${e.model_name}"`];return e.api_base&&n.push(`api_base="${e.api_base}"`),e.temperature!=null&&n.push(`temperature=${e.temperature}`),e.max_output_tokens!=null&&n.push(`max_output_tokens=${e.max_output_tokens}`),e.top_p!=null&&n.push(`top_p=${e.top_p}`),e.top_k!=null&&n.push(`top_k=${e.top_k}`),e.provider==="litellm"?`${t} = LiteLlm(
    ${n.join(`,
    `)}
)`:e.provider==="anthropic"?`${t} = Claude(
    ${n.join(`,
    `)}
)`:`${t} = "${e.model_name}"  # Gemini model`}function RS(e,t){var n,r;if(e.type==="builtin")return e.name||"";if(e.type==="function")return e.name||"custom_tool";if(e.type==="agent"){const s=t.agents.find(o=>o.id===e.agent_id);return s?`AgentTool(agent=${s.name}_agent)`:"AgentTool(agent=sub_agent)"}else{if(e.type==="mcp")return(n=e.server)!=null&&n.name?`${e.server.name}_tools`:"";if(e.type==="skillset"){const s=e.skillset_id,o=(r=t.skillsets)==null?void 0:r.find(a=>a.id===s);return o?`${o.name.replace(/[^a-zA-Z0-9_]/g,"_")}_skillset`:""}}return""}function IS(e,t,n){const r=n.get(e.id)||`${e.name}_agent`;if(e.type==="LlmAgent"){const s=e,o=[`name="${e.name}"`];s.model&&o.push(`model=${e.name}_model`),s.instruction&&o.push(`instruction="""${tf(s.instruction)}"""`),s.description&&o.push(`description="${tf(s.description)}"`),s.output_key&&o.push(`output_key="${s.output_key}"`);const a=s.tools.map(c=>RS(c,t)).filter(c=>c&&!c.startsWith("#"));if(a.length>0&&o.push(`tools=[${a.join(", ")}]`),s.sub_agents&&s.sub_agents.length>0){const c=s.sub_agents.map(u=>n.get(u)||"sub_agent").join(", ");o.push(`sub_agents=[${c}]`)}s.include_contents==="none"&&o.push('include_contents="none"'),s.disallow_transfer_to_parent&&o.push("disallow_transfer_to_parent=True"),s.disallow_transfer_to_peers&&o.push("disallow_transfer_to_peers=True");const l={before_agent_callbacks:"before_agent_callback",after_agent_callbacks:"after_agent_callback",before_model_callbacks:"before_model_callback",after_model_callbacks:"after_model_callback",before_tool_callbacks:"before_tool_callback",after_tool_callbacks:"after_tool_callback"};for(const[c,u]of Object.entries(l)){const d=s[c]||[];if(d.length>0){const p=d.map(f=>{const m=t.custom_callbacks.find(y=>y.module_path===f.module_path);return m?`"${f.module_path}.${m.name}"`:`"${f.module_path}"`}).join(", ");if(d.length===1){const f=t.custom_callbacks.find(y=>y.module_path===d[0].module_path),m=f?`${d[0].module_path}.${f.name}`:d[0].module_path;o.push(`${u}="${m}"`)}else o.push(`${u}=[${p}]`)}}return`${r} = Agent(
    ${o.join(`,
    `)}
)`}else if(e.type==="SequentialAgent"){const s=e.sub_agents.map(o=>n.get(o)||"sub_agent").join(", ");return`${r} = SequentialAgent(
    name="${e.name}",
    sub_agents=[${s}]
)`}else if(e.type==="LoopAgent"){const s=e,o=[`name="${e.name}"`],a=e.sub_agents.map(l=>n.get(l)||"sub_agent").join(", ");return o.push(`sub_agents=[${a}]`),s.max_iterations&&o.push(`max_iterations=${s.max_iterations}`),`${r} = LoopAgent(
    ${o.join(`,
    `)}
)`}else if(e.type==="ParallelAgent"){const s=e.sub_agents.map(o=>n.get(o)||"sub_agent").join(", ");return`${r} = ParallelAgent(
    name="${e.name}",
    sub_agents=[${s}]
)`}return`# Unknown agent type: ${e.type}`}function MS(e){const t=[];return e.connection_type==="stdio"?(t.push(`${e.name}_tools = McpToolset(`),t.push("    connection_params=StdioConnectionParams("),t.push("        server_params=StdioServerParameters("),e.command&&t.push(`            command="${e.command}",`),e.args.length>0&&t.push(`            args=${JSON.stringify(e.args)},`),Object.keys(e.env).length>0&&t.push(`            env=${JSON.stringify(e.env)},`),t.push("        ),"),e.timeout&&t.push(`        timeout=${e.timeout},`),t.push("    ),"),t.push(")")):e.connection_type==="sse"&&(t.push(`${e.name}_tools = McpToolset(`),t.push("    connection_params=SseConnectionParams("),e.url&&t.push(`        url="${e.url}",`),e.timeout&&t.push(`        timeout=${e.timeout},`),t.push("    ),"),t.push(")")),t.join(`
`)}function OS(e,t){const n=[];return n.push(`# SkillSet: ${e.name}`),n.push(`${e.name.replace(/[^a-zA-Z0-9_]/g,"_")}_manager = KnowledgeServiceManager()`),n.push(`${e.name.replace(/[^a-zA-Z0-9_]/g,"_")}_skillset = SkillSet(`),n.push(`    skillset_id="${e.id}",`),n.push(`    project_id="${t.id}",`),n.push(`    manager=${e.name.replace(/[^a-zA-Z0-9_]/g,"_")}_manager,`),e.embedding_model?n.push(`    model_name="${e.embedding_model}",`):n.push('    model_name="text-embedding-004",'),n.push(`    search_enabled=${e.search_enabled?"True":"False"},`),n.push(`    preload_enabled=${e.preload_enabled?"True":"False"},`),e.preload_top_k&&n.push(`    preload_top_k=${e.preload_top_k},`),e.preload_min_score&&n.push(`    preload_min_score=${e.preload_min_score},`),n.push(")"),n.join(`
`)}function $S(e){const t=[];t.push('"""'),t.push(`${e.name} - Generated by ADK Playground`),e.description&&(t.push(""),t.push(e.description)),t.push('"""'),t.push("");const n=e.app.env_vars||{},r=Object.keys(n);r.length>0&&(t.push("import os"),t.push(""),t.push("# Environment Variables"),t.push("# Set these before running, or uncomment and add values:"),r.forEach(C=>{const w=n[C];if(w){const N=C.toLowerCase().includes("key")||C.toLowerCase().includes("secret")?"***":w;t.push(`os.environ["${C}"] = "${N}"  # Set your ${C}`)}else t.push(`# os.environ["${C}"] = ""  # TODO: Set your ${C}`)}),t.push(""));const s=new Set;s.add("from google.adk.agents import Agent");const o=e.agents.some(C=>C.type==="SequentialAgent"),a=e.agents.some(C=>C.type==="LoopAgent"),l=e.agents.some(C=>C.type==="ParallelAgent");o&&s.add("from google.adk.agents import SequentialAgent"),a&&s.add("from google.adk.agents import LoopAgent"),l&&s.add("from google.adk.agents import ParallelAgent"),e.agents.some(C=>{var w;return C.type==="LlmAgent"&&((w=C.model)==null?void 0:w.provider)==="litellm"})&&s.add("from google.adk.models.lite_llm import LiteLlm"),e.agents.some(C=>C.type==="LlmAgent"&&C.tools.some(w=>w.type==="agent"))&&s.add("from google.adk.tools import AgentTool");const d=new Set;if(e.agents.forEach(C=>{C.type==="LlmAgent"&&C.tools.forEach(w=>{w.type==="builtin"&&w.name&&d.add(w.name)})}),d.has("exit_loop")&&s.add("from google.adk.tools import exit_loop"),d.has("google_search")&&s.add("from google.adk.tools import google_search"),e.mcp_servers.length>0){s.add("from google.adk.tools.mcp_tool.mcp_toolset import McpToolset");const C=e.mcp_servers.some(R=>R.connection_type==="stdio"),w=e.mcp_servers.some(R=>R.connection_type==="sse");C&&(s.add("from google.adk.tools.mcp_tool.mcp_session_manager import StdioConnectionParams"),s.add("from mcp import StdioServerParameters")),w&&s.add("from google.adk.tools.mcp_tool.mcp_session_manager import SseConnectionParams")}e.skillsets&&e.skillsets.length>0;const f=new Set;e.agents.forEach(C=>{"tools"in C&&C.tools&&C.tools.forEach(w=>{w.type==="skillset"&&f.add(w.skillset_id)})}),f.size>0&&(s.add("from skillset import SkillSet"),s.add("from knowledge_service import KnowledgeServiceManager")),s.add("from google.adk.apps import App");const m=e.app.plugins.length>0;m&&e.app.plugins.forEach(C=>{C.type==="ReflectAndRetryToolPlugin"&&s.add("from google.adk.plugins import ReflectAndRetryToolPlugin")});const y=Array.from(s).sort();t.push(...y),t.push(""),t.push("");const _=new Map;e.agents.forEach(C=>{const w=C.name.endsWith("_agent")?C.name:`${C.name}_agent`;_.set(C.id,w)});const L=[],x=new Set;function g(C){if(x.has(C))return;const w=e.agents.find(R=>R.id===C);w&&(w.sub_agents.forEach(R=>g(R)),x.add(C),L.push(w))}e.agents.forEach(C=>g(C.id));const h=new Map;L.forEach(C=>{C.type==="LlmAgent"&&C.tools.forEach(w=>{w.type==="mcp"&&w.server&&h.set(w.server.name,w.server)})}),h.size>0&&(t.push("# MCP Server Toolsets"),h.forEach(C=>{t.push(MS(C)),t.push("")}),t.push(""));const P=new Set;L.forEach(C=>{C.type==="LlmAgent"&&C.tools.forEach(w=>{w.type==="skillset"&&P.add(w.skillset_id)})}),P.size>0&&e.skillsets&&(t.push("# SkillSet Toolsets"),t.push("# Note: SkillSets store knowledge in ~/.adk-playground/skillsets/{project_id}/"),P.forEach(C=>{var R;const w=(R=e.skillsets)==null?void 0:R.find(N=>N.id===C);w&&(t.push(OS(w,e)),t.push(""))}),t.push("")),e.custom_tools.length>0&&(t.push("# Custom Tools"),e.custom_tools.forEach(C=>{t.push(C.code),t.push("")}),t.push("")),e.custom_callbacks&&e.custom_callbacks.length>0&&(t.push("# Custom Callbacks"),e.custom_callbacks.forEach(C=>{t.push(C.code),t.push("")}),t.push("")),t.push("# Models"),L.forEach(C=>{C.type==="LlmAgent"&&C.model&&(t.push(AS(C.model,`${C.name}_model`)),t.push(""))}),t.push(""),t.push("# Agents"),L.forEach(C=>{t.push(IS(C,e,_)),t.push("")});const j=e.agents.find(C=>C.id===e.app.root_agent_id),b=j?_.get(j.id):"root_agent";if(t.push(""),t.push(""),t.push("# App Configuration"),t.push("app = App("),t.push(`    name="${e.app.name}",`),t.push(`    root_agent=${b},`),m){const C=e.app.plugins.map(w=>w.type==="ReflectAndRetryToolPlugin"?`        ReflectAndRetryToolPlugin(max_retries=${w.max_retries||3})`:`        # ${w.type}()`);t.push("    plugins=["),t.push(C.join(`,
`)),t.push("    ],")}return t.push(")"),t.join(`
`)}function DS(){const{project:e}=et(),[t,n]=S.useState(!1);if(!e)return null;const r=S.useMemo(()=>$S(e),[e]);function s(){navigator.clipboard.writeText(r),n(!0),setTimeout(()=>n(!1),2e3)}function o(){const a=new Blob([r],{type:"text/x-python"}),l=URL.createObjectURL(a),c=document.createElement("a");c.href=l,c.download=`${e.name}_agent.py`,c.click(),URL.revokeObjectURL(l)}return i.jsxs("div",{className:"code-panel",children:[i.jsx("style",{children:`
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
      `}),i.jsxs("div",{className:"code-header",children:[i.jsxs("div",{className:"code-title",children:[i.jsx(Zt,{size:16}),i.jsx("h3",{children:"Python Code"}),i.jsx("span",{className:"badge",children:"Generated"}),t&&i.jsxs("span",{className:"status-badge success",children:[i.jsx(Zh,{size:12}),"Copied!"]})]}),i.jsxs("div",{className:"code-actions",children:[i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:s,title:"Copy to clipboard",children:[i.jsx(Vo,{size:14}),"Copy"]}),i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:o,title:"Download Python file",children:[i.jsx(ns,{size:14}),"Download"]})]})]}),i.jsx("div",{className:"code-editor",children:i.jsx(Ft,{height:"100%",language:"python",theme:"vs-dark",value:r,options:{readOnly:!0,minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),i.jsxs("div",{className:"code-info",children:[i.jsx("p",{children:"This is the Python code equivalent of your project configuration. You can use this code directly with ADK."}),i.jsxs("p",{children:["Place this in a file named ",i.jsx("code",{children:"agent.py"})," inside your agent directory, then run with ",i.jsx("code",{children:"adk web ."})," or ",i.jsx("code",{children:"adk run your_agent"}),"."]})]})]})}const FS=[{id:"app",label:"App",icon:ig},{id:"agents",label:"Agents",icon:Zn},{id:"tools",label:"Tools",icon:Xt},{id:"callbacks",label:"Callbacks",icon:Zt},{id:"run",label:"Run",icon:ng},{id:"skillsets",label:"SkillSets",icon:l0},{id:"eval",label:"Evaluate",icon:ql},{id:"yaml",label:"YAML",icon:u0},{id:"code",label:"Code",icon:Zt}],BS=["app","agents","tools","callbacks","run","skillsets","eval","yaml","code"];function Ha(){var D,Q;const{projectId:e,tab:t,itemId:n}=u1(),r=nu(),{project:s,setProject:o,activeTab:a,setActiveTab:l,hasUnsavedChanges:c,setHasUnsavedChanges:u,selectedAgentId:d,setSelectedAgentId:p,selectedToolId:f,setSelectedToolId:m}=et(),[y,_]=S.useState(!0),[L,x]=S.useState(!1),[g,h]=S.useState(!1),[P,j]=S.useState(null),b=S.useRef(!0),C=S.useRef(null);S.useEffect(()=>{t&&BS.includes(t)?l(t):!t&&e&&r(`/project/${e}/${a}`,{replace:!0})},[t,e]),S.useEffect(()=>{t==="agents"&&n?p(n):t==="tools"&&n&&m(n)},[t,n]);function w(T){l(T),T==="agents"&&d?r(`/project/${e}/${T}/${d}`,{replace:!0}):T==="tools"&&f?r(`/project/${e}/${T}/${f}`,{replace:!0}):r(`/project/${e}/${T}`,{replace:!0})}function R(T){T?r(`/project/${e}/${a}/${T}`,{replace:!0}):r(`/project/${e}/${a}`,{replace:!0})}S.useEffect(()=>(e&&N(e),()=>{o(null),u(!1)}),[e]);async function N(T){b.current=!0;try{const O=await Rh(T);o(O),C.current=JSON.stringify(O),u(!1)}catch(O){console.error("Failed to load project:",O),r("/")}finally{_(!1),setTimeout(()=>{b.current=!1},100)}}async function v(){if(s){x(!0);try{const{eval_sets:T,...O}=s;await Bl(s.id,O),C.current=JSON.stringify(s),u(!1)}catch(T){console.error("Failed to save project:",T)}finally{x(!1)}}}async function E(){if(s){h(!0),j(null),window.dispatchEvent(new CustomEvent("eval-tests-started"));try{let T=0,O=0;const I=[],k=[];for(const V of s.eval_sets||[]){if(V.eval_cases.length===0)continue;const K=await Be.post(`/projects/${s.id}/eval-sets/${V.id}/run`,{});K.result&&(T+=K.result.passed_cases||0,O+=K.result.total_cases||0,K.result.case_results&&I.push(...K.result.case_results),k.push(K.result.eval_set_name||V.name||V.id))}if(I.length>0){const V={id:Date.now().toString(36)+Math.random().toString(36).substr(2,5),eval_set_id:"batch",eval_set_name:k.length>1?`All Tests (${k.length} sets)`:k[0]||"All Tests",started_at:Date.now()/1e3,completed_at:Date.now()/1e3,total_cases:O,passed_cases:T,failed_cases:O-T,case_results:I};try{await Be.post(`/projects/${s.id}/eval-history`,V)}catch(K){console.warn("Failed to save batch eval run to history:",K)}}j({passed:T,total:O}),window.dispatchEvent(new CustomEvent("eval-tests-completed")),setTimeout(()=>j(null),5e3)}catch(T){console.error("Failed to run tests:",T),j({passed:0,total:-1}),setTimeout(()=>j(null),5e3)}finally{h(!1)}}}const M=S.useRef(null);S.useEffect(()=>{if(s&&!b.current&&M.current){const T=s.app.models||[],O=M.current||[];if(T.some((k,V)=>{const K=O.find(z=>z.id===k.id);return K?K.provider!==k.provider||K.model_name!==k.model_name||K.api_base!==k.api_base||K.temperature!==k.temperature||K.max_output_tokens!==k.max_output_tokens||K.top_p!==k.top_p||K.top_k!==k.top_k:!1})){const k=s.app.default_model_id,V=s.agents.map(z=>{if(z.type==="LlmAgent"&&z.model){const le=z.model._appModelId;if(le){const A=T.find(Z=>Z.id===le);if(A)return{...z,model:{provider:A.provider,model_name:A.model_name,api_base:A.api_base,temperature:A.temperature,max_output_tokens:A.max_output_tokens,top_p:A.top_p,top_k:A.top_k,fallbacks:[],_appModelId:le}}}else if(k){const A=T.find(Z=>Z.id===k);if(A&&z.model.provider===A.provider&&z.model.model_name===A.model_name&&z.model.api_base===A.api_base)return{...z,model:{provider:A.provider,model_name:A.model_name,api_base:A.api_base,temperature:A.temperature,max_output_tokens:A.max_output_tokens,top_p:A.top_p,top_k:A.top_k,fallbacks:[],_appModelId:k}}}}return z});V.some((z,le)=>JSON.stringify(z)!==JSON.stringify(s.agents[le]))&&o({...s,agents:V})}}s&&(M.current=s.app.models||[])},[s==null?void 0:s.app.models,s,o]);const U=S.useRef(null);return S.useEffect(()=>(s&&!b.current&&C.current&&JSON.stringify(s)!==C.current&&(u(!0),U.current&&clearTimeout(U.current),U.current=setTimeout(async()=>{try{const{eval_sets:O,...I}=s;await Bl(s.id,I),C.current=JSON.stringify(s),u(!1)}catch(O){console.error("Auto-save failed:",O)}},500)),()=>{U.current&&clearTimeout(U.current)}),[s]),y?i.jsxs("div",{className:"loading-screen",children:[i.jsx("style",{children:`
          .loading-screen {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-muted);
          }
        `}),"Loading project..."]}):s?i.jsxs("div",{className:"project-editor",children:[i.jsx("style",{children:`
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
      `}),i.jsxs("header",{className:"top-bar",children:[i.jsxs("div",{className:"top-bar-left",children:[i.jsxs("button",{className:"back-btn",onClick:()=>r("/"),children:[i.jsx(a0,{size:18}),"Project"]}),i.jsx("h1",{className:"project-name",children:s.name})]}),i.jsx("nav",{className:"tabs-bar",children:FS.map(T=>i.jsxs("button",{className:`tab-btn ${a===T.id?"active":""}`,onClick:()=>w(T.id),children:[i.jsx(T.icon,{size:14}),T.label]},T.id))}),i.jsxs("div",{className:"top-bar-right",children:[i.jsxs("button",{className:`btn ${P?P.total===-1?"btn-error":P.passed===P.total?"btn-success":"btn-warning":"btn-secondary"}`,onClick:E,disabled:g||!((D=s==null?void 0:s.eval_sets)!=null&&D.some(T=>T.eval_cases.length>0)),title:(Q=s==null?void 0:s.eval_sets)!=null&&Q.some(T=>T.eval_cases.length>0)?"Run all evaluation tests":"No test cases defined",style:{marginRight:8},children:[g?i.jsx(m0,{size:16,className:"spin"}):i.jsx(Mn,{size:16}),g?"Testing...":P?P.total===-1?"Error":`${P.passed}/${P.total}`:"Test"]}),i.jsxs("button",{className:"btn btn-primary",onClick:v,disabled:L,children:[i.jsx(au,{size:16}),L?"Saving...":"Save"]})]})]}),i.jsxs("main",{className:"main-content",children:[a==="app"&&i.jsx(S0,{}),a==="agents"&&i.jsx(L2,{onSelectAgent:R}),a==="tools"&&i.jsx(pS,{onSelectTool:R}),a==="callbacks"&&i.jsx(mS,{onSelectCallback:R}),a==="run"&&i.jsx(jS,{}),a==="skillsets"&&i.jsx(SS,{}),a==="eval"&&i.jsx(NS,{}),a==="yaml"&&i.jsx(LS,{}),a==="code"&&i.jsx(DS,{})]})]}):null}function US(){const{setMcpServers:e,setBuiltinTools:t}=et();return S.useEffect(()=>{ru().then(e).catch(console.error),Bh().then(t).catch(console.error)},[e,t]),i.jsxs(N1,{children:[i.jsx(pr,{path:"/",element:i.jsx(j0,{})}),i.jsx(pr,{path:"/project/:projectId",element:i.jsx(Ha,{})}),i.jsx(pr,{path:"/project/:projectId/:tab",element:i.jsx(Ha,{})}),i.jsx(pr,{path:"/project/:projectId/:tab/:itemId",element:i.jsx(Ha,{})}),i.jsx(pr,{path:"*",element:i.jsx(S1,{to:"/",replace:!0})})]})}qa.createRoot(document.getElementById("root")).render(i.jsx(Lt.StrictMode,{children:i.jsx(T1,{children:i.jsx(US,{})})}));
