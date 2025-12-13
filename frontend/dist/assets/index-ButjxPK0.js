function Yg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Fo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ml(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function w_(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Gp={exports:{}},hl={},Qp={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hi=Symbol.for("react.element"),Xg=Symbol.for("react.portal"),Zg=Symbol.for("react.fragment"),ex=Symbol.for("react.strict_mode"),tx=Symbol.for("react.profiler"),nx=Symbol.for("react.provider"),rx=Symbol.for("react.context"),ix=Symbol.for("react.forward_ref"),ox=Symbol.for("react.suspense"),lx=Symbol.for("react.memo"),ax=Symbol.for("react.lazy"),yu=Symbol.iterator;function sx(e){return e===null||typeof e!="object"?null:(e=yu&&e[yu]||e["@@iterator"],typeof e=="function"?e:null)}var Jp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yp=Object.assign,Xp={};function Fr(e,t,n){this.props=e,this.context=t,this.refs=Xp,this.updater=n||Jp}Fr.prototype.isReactComponent={};Fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zp(){}Zp.prototype=Fr.prototype;function Gs(e,t,n){this.props=e,this.context=t,this.refs=Xp,this.updater=n||Jp}var Qs=Gs.prototype=new Zp;Qs.constructor=Gs;Yp(Qs,Fr.prototype);Qs.isPureReactComponent=!0;var vu=Array.isArray,ef=Object.prototype.hasOwnProperty,Js={current:null},tf={key:!0,ref:!0,__self:!0,__source:!0};function nf(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)ef.call(t,r)&&!tf.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Hi,type:e,key:o,ref:a,props:i,_owner:Js.current}}function cx(e,t){return{$$typeof:Hi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ys(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hi}function ux(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var bu=/\/+/g;function Fl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ux(""+e.key):t.toString(36)}function So(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Hi:case Xg:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Fl(a,0):r,vu(i)?(n="",e!=null&&(n=e.replace(bu,"$&/")+"/"),So(i,t,n,"",function(u){return u})):i!=null&&(Ys(i)&&(i=cx(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(bu,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",vu(e))for(var s=0;s<e.length;s++){o=e[s];var c=r+Fl(o,s);a+=So(o,t,n,c,i)}else if(c=sx(e),typeof c=="function")for(e=c.call(e),s=0;!(o=e.next()).done;)o=o.value,c=r+Fl(o,s++),a+=So(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function to(e,t,n){if(e==null)return e;var r=[],i=0;return So(e,r,"","",function(o){return t.call(n,o,i++)}),r}function dx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ye={current:null},_o={transition:null},px={ReactCurrentDispatcher:Ye,ReactCurrentBatchConfig:_o,ReactCurrentOwner:Js};function rf(){throw Error("act(...) is not supported in production builds of React.")}ue.Children={map:to,forEach:function(e,t,n){to(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return to(e,function(){t++}),t},toArray:function(e){return to(e,function(t){return t})||[]},only:function(e){if(!Ys(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ue.Component=Fr;ue.Fragment=Zg;ue.Profiler=tx;ue.PureComponent=Gs;ue.StrictMode=ex;ue.Suspense=ox;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=px;ue.act=rf;ue.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Yp({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Js.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)ef.call(t,c)&&!tf.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Hi,type:e.type,key:i,ref:o,props:r,_owner:a}};ue.createContext=function(e){return e={$$typeof:rx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:nx,_context:e},e.Consumer=e};ue.createElement=nf;ue.createFactory=function(e){var t=nf.bind(null,e);return t.type=e,t};ue.createRef=function(){return{current:null}};ue.forwardRef=function(e){return{$$typeof:ix,render:e}};ue.isValidElement=Ys;ue.lazy=function(e){return{$$typeof:ax,_payload:{_status:-1,_result:e},_init:dx}};ue.memo=function(e,t){return{$$typeof:lx,type:e,compare:t===void 0?null:t}};ue.startTransition=function(e){var t=_o.transition;_o.transition={};try{e()}finally{_o.transition=t}};ue.unstable_act=rf;ue.useCallback=function(e,t){return Ye.current.useCallback(e,t)};ue.useContext=function(e){return Ye.current.useContext(e)};ue.useDebugValue=function(){};ue.useDeferredValue=function(e){return Ye.current.useDeferredValue(e)};ue.useEffect=function(e,t){return Ye.current.useEffect(e,t)};ue.useId=function(){return Ye.current.useId()};ue.useImperativeHandle=function(e,t,n){return Ye.current.useImperativeHandle(e,t,n)};ue.useInsertionEffect=function(e,t){return Ye.current.useInsertionEffect(e,t)};ue.useLayoutEffect=function(e,t){return Ye.current.useLayoutEffect(e,t)};ue.useMemo=function(e,t){return Ye.current.useMemo(e,t)};ue.useReducer=function(e,t,n){return Ye.current.useReducer(e,t,n)};ue.useRef=function(e){return Ye.current.useRef(e)};ue.useState=function(e){return Ye.current.useState(e)};ue.useSyncExternalStore=function(e,t,n){return Ye.current.useSyncExternalStore(e,t,n)};ue.useTransition=function(){return Ye.current.useTransition()};ue.version="18.3.1";Qp.exports=ue;var _=Qp.exports;const Nt=ml(_),fx=Yg({__proto__:null,default:Nt},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mx=_,hx=Symbol.for("react.element"),gx=Symbol.for("react.fragment"),xx=Object.prototype.hasOwnProperty,yx=mx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vx={key:!0,ref:!0,__self:!0,__source:!0};function of(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)xx.call(t,r)&&!vx.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:hx,type:e,key:o,ref:a,props:i,_owner:yx.current}}hl.Fragment=gx;hl.jsx=of;hl.jsxs=of;Gp.exports=hl;var l=Gp.exports,La={},lf={exports:{}},xt={},af={exports:{}},sf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,L){var v=R.length;R.push(L);e:for(;0<v;){var V=v-1>>>1,Q=R[V];if(0<i(Q,L))R[V]=L,R[v]=Q,v=V;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var L=R[0],v=R.pop();if(v!==L){R[0]=v;e:for(var V=0,Q=R.length,N=Q>>>1;V<N;){var re=2*(V+1)-1,I=R[re],J=re+1,F=R[J];if(0>i(I,v))J<Q&&0>i(F,I)?(R[V]=F,R[J]=v,V=J):(R[V]=I,R[re]=v,V=re);else if(J<Q&&0>i(F,v))R[V]=F,R[J]=v,V=J;else break e}}return L}function i(R,L){var v=R.sortIndex-L.sortIndex;return v!==0?v:R.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var c=[],u=[],d=1,p=null,f=3,m=!1,b=!1,k=!1,E=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(R){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=R)r(u),L.sortIndex=L.expirationTime,t(c,L);else break;L=n(u)}}function P(R){if(k=!1,y(R),!b)if(n(c)!==null)b=!0,H(C);else{var L=n(u);L!==null&&A(P,L.startTime-R)}}function C(R,L){b=!1,k&&(k=!1,g(O),O=-1),m=!0;var v=f;try{for(y(L),p=n(c);p!==null&&(!(p.expirationTime>L)||R&&!x());){var V=p.callback;if(typeof V=="function"){p.callback=null,f=p.priorityLevel;var Q=V(p.expirationTime<=L);L=e.unstable_now(),typeof Q=="function"?p.callback=Q:p===n(c)&&r(c),y(L)}else r(c);p=n(c)}if(p!==null)var N=!0;else{var re=n(u);re!==null&&A(P,re.startTime-L),N=!1}return N}finally{p=null,f=v,m=!1}}var w=!1,T=null,O=-1,B=5,j=-1;function x(){return!(e.unstable_now()-j<B)}function S(){if(T!==null){var R=e.unstable_now();j=R;var L=!0;try{L=T(!0,R)}finally{L?z():(w=!1,T=null)}}else w=!1}var z;if(typeof h=="function")z=function(){h(S)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,D=$.port2;$.port1.onmessage=S,z=function(){D.postMessage(null)}}else z=function(){E(S,0)};function H(R){T=R,w||(w=!0,z())}function A(R,L){O=E(function(){R(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){b||m||(b=!0,H(C))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(R){switch(f){case 1:case 2:case 3:var L=3;break;default:L=f}var v=f;f=L;try{return R()}finally{f=v}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,L){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var v=f;f=R;try{return L()}finally{f=v}},e.unstable_scheduleCallback=function(R,L,v){var V=e.unstable_now();switch(typeof v=="object"&&v!==null?(v=v.delay,v=typeof v=="number"&&0<v?V+v:V):v=V,R){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=v+Q,R={id:d++,callback:L,priorityLevel:R,startTime:v,expirationTime:Q,sortIndex:-1},v>V?(R.sortIndex=v,t(u,R),n(c)===null&&R===n(u)&&(k?(g(O),O=-1):k=!0,A(P,v-V))):(R.sortIndex=Q,t(c,R),b||m||(b=!0,H(C))),R},e.unstable_shouldYield=x,e.unstable_wrapCallback=function(R){var L=f;return function(){var v=f;f=L;try{return R.apply(this,arguments)}finally{f=v}}}})(sf);af.exports=sf;var bx=af.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kx=_,gt=bx;function K(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cf=new Set,ji={};function Zn(e,t){zr(e,t),zr(e+"Capture",t)}function zr(e,t){for(ji[e]=t,e=0;e<t.length;e++)cf.add(t[e])}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ia=Object.prototype.hasOwnProperty,wx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ku={},wu={};function jx(e){return Ia.call(wu,e)?!0:Ia.call(ku,e)?!1:wx.test(e)?wu[e]=!0:(ku[e]=!0,!1)}function Sx(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _x(e,t,n,r){if(t===null||typeof t>"u"||Sx(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Xe(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ue[e]=new Xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ue[t]=new Xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ue[e]=new Xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ue[e]=new Xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ue[e]=new Xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ue[e]=new Xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ue[e]=new Xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ue[e]=new Xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ue[e]=new Xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xs=/[\-:]([a-z])/g;function Zs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xs,Zs);Ue[t]=new Xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xs,Zs);Ue[t]=new Xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xs,Zs);Ue[t]=new Xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ue[e]=new Xe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ue[e]=new Xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ec(e,t,n,r){var i=Ue.hasOwnProperty(t)?Ue[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_x(t,n,i,r)&&(n=null),r||i===null?jx(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var cn=kx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,no=Symbol.for("react.element"),sr=Symbol.for("react.portal"),cr=Symbol.for("react.fragment"),tc=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),uf=Symbol.for("react.provider"),df=Symbol.for("react.context"),nc=Symbol.for("react.forward_ref"),Ra=Symbol.for("react.suspense"),Ma=Symbol.for("react.suspense_list"),rc=Symbol.for("react.memo"),pn=Symbol.for("react.lazy"),pf=Symbol.for("react.offscreen"),ju=Symbol.iterator;function Kr(e){return e===null||typeof e!="object"?null:(e=ju&&e[ju]||e["@@iterator"],typeof e=="function"?e:null)}var Ee=Object.assign,$l;function oi(e){if($l===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);$l=t&&t[1]||""}return`
`+$l+e}var Bl=!1;function Ul(e,t){if(!e||Bl)return"";Bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=s);break}}}finally{Bl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?oi(e):""}function Cx(e){switch(e.tag){case 5:return oi(e.type);case 16:return oi("Lazy");case 13:return oi("Suspense");case 19:return oi("SuspenseList");case 0:case 2:case 15:return e=Ul(e.type,!1),e;case 11:return e=Ul(e.type.render,!1),e;case 1:return e=Ul(e.type,!0),e;default:return""}}function Oa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case cr:return"Fragment";case sr:return"Portal";case Aa:return"Profiler";case tc:return"StrictMode";case Ra:return"Suspense";case Ma:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case df:return(e.displayName||"Context")+".Consumer";case uf:return(e._context.displayName||"Context")+".Provider";case nc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case rc:return t=e.displayName||null,t!==null?t:Oa(e.type)||"Memo";case pn:t=e._payload,e=e._init;try{return Oa(e(t))}catch{}}return null}function Nx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oa(t);case 8:return t===tc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function En(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ff(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ex(e){var t=ff(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ro(e){e._valueTracker||(e._valueTracker=Ex(e))}function mf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ff(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $o(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Da(e,t){var n=t.checked;return Ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Su(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=En(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hf(e,t){t=t.checked,t!=null&&ec(e,"checked",t,!1)}function Fa(e,t){hf(e,t);var n=En(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?$a(e,t.type,n):t.hasOwnProperty("defaultValue")&&$a(e,t.type,En(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _u(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function $a(e,t,n){(t!=="number"||$o(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var li=Array.isArray;function kr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+En(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ba(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(K(91));return Ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(K(92));if(li(n)){if(1<n.length)throw Error(K(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:En(n)}}function gf(e,t){var n=En(t.value),r=En(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Nu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ua(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var io,yf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(io=io||document.createElement("div"),io.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=io.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Si(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ui={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zx=["Webkit","ms","Moz","O"];Object.keys(ui).forEach(function(e){zx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ui[t]=ui[e]})});function vf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ui.hasOwnProperty(e)&&ui[e]?(""+t).trim():t+"px"}function bf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=vf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Tx=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Va(e,t){if(t){if(Tx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(K(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(K(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(K(61))}if(t.style!=null&&typeof t.style!="object")throw Error(K(62))}}function Wa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ha=null;function ic(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qa=null,wr=null,jr=null;function Eu(e){if(e=Gi(e)){if(typeof qa!="function")throw Error(K(280));var t=e.stateNode;t&&(t=bl(t),qa(e.stateNode,e.type,t))}}function kf(e){wr?jr?jr.push(e):jr=[e]:wr=e}function wf(){if(wr){var e=wr,t=jr;if(jr=wr=null,Eu(e),t)for(e=0;e<t.length;e++)Eu(t[e])}}function jf(e,t){return e(t)}function Sf(){}var Vl=!1;function _f(e,t,n){if(Vl)return e(t,n);Vl=!0;try{return jf(e,t,n)}finally{Vl=!1,(wr!==null||jr!==null)&&(Sf(),wf())}}function _i(e,t){var n=e.stateNode;if(n===null)return null;var r=bl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(K(231,t,typeof n));return n}var Ka=!1;if(on)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){Ka=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{Ka=!1}function Px(e,t,n,r,i,o,a,s,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var di=!1,Bo=null,Uo=!1,Ga=null,Lx={onError:function(e){di=!0,Bo=e}};function Ix(e,t,n,r,i,o,a,s,c){di=!1,Bo=null,Px.apply(Lx,arguments)}function Ax(e,t,n,r,i,o,a,s,c){if(Ix.apply(this,arguments),di){if(di){var u=Bo;di=!1,Bo=null}else throw Error(K(198));Uo||(Uo=!0,Ga=u)}}function er(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Cf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zu(e){if(er(e)!==e)throw Error(K(188))}function Rx(e){var t=e.alternate;if(!t){if(t=er(e),t===null)throw Error(K(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return zu(i),e;if(o===r)return zu(i),t;o=o.sibling}throw Error(K(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(K(189))}}if(n.alternate!==r)throw Error(K(190))}if(n.tag!==3)throw Error(K(188));return n.stateNode.current===n?e:t}function Nf(e){return e=Rx(e),e!==null?Ef(e):null}function Ef(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ef(e);if(t!==null)return t;e=e.sibling}return null}var zf=gt.unstable_scheduleCallback,Tu=gt.unstable_cancelCallback,Mx=gt.unstable_shouldYield,Ox=gt.unstable_requestPaint,Te=gt.unstable_now,Dx=gt.unstable_getCurrentPriorityLevel,oc=gt.unstable_ImmediatePriority,Tf=gt.unstable_UserBlockingPriority,Vo=gt.unstable_NormalPriority,Fx=gt.unstable_LowPriority,Pf=gt.unstable_IdlePriority,gl=null,Ht=null;function $x(e){if(Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(gl,e,void 0,(e.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:Vx,Bx=Math.log,Ux=Math.LN2;function Vx(e){return e>>>=0,e===0?32:31-(Bx(e)/Ux|0)|0}var oo=64,lo=4194304;function ai(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=ai(s):(o&=a,o!==0&&(r=ai(o)))}else a=n&~i,a!==0?r=ai(a):o!==0&&(r=ai(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Mt(t),i=1<<n,r|=e[n],t&=~i;return r}function Wx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hx(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Mt(o),s=1<<a,c=i[a];c===-1?(!(s&n)||s&r)&&(i[a]=Wx(s,t)):c<=t&&(e.expiredLanes|=s),o&=~s}}function Qa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lf(){var e=oo;return oo<<=1,!(oo&4194240)&&(oo=64),e}function Wl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Mt(t),e[t]=n}function qx(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Mt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function lc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Mt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var xe=0;function If(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Af,ac,Rf,Mf,Of,Ja=!1,ao=[],vn=null,bn=null,kn=null,Ci=new Map,Ni=new Map,mn=[],Kx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pu(e,t){switch(e){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":bn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":Ci.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ni.delete(t.pointerId)}}function Qr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Gi(t),t!==null&&ac(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Gx(e,t,n,r,i){switch(t){case"focusin":return vn=Qr(vn,e,t,n,r,i),!0;case"dragenter":return bn=Qr(bn,e,t,n,r,i),!0;case"mouseover":return kn=Qr(kn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ci.set(o,Qr(Ci.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ni.set(o,Qr(Ni.get(o)||null,e,t,n,r,i)),!0}return!1}function Df(e){var t=$n(e.target);if(t!==null){var n=er(t);if(n!==null){if(t=n.tag,t===13){if(t=Cf(n),t!==null){e.blockedOn=t,Of(e.priority,function(){Rf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Co(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ya(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ha=r,n.target.dispatchEvent(r),Ha=null}else return t=Gi(n),t!==null&&ac(t),e.blockedOn=n,!1;t.shift()}return!0}function Lu(e,t,n){Co(e)&&n.delete(t)}function Qx(){Ja=!1,vn!==null&&Co(vn)&&(vn=null),bn!==null&&Co(bn)&&(bn=null),kn!==null&&Co(kn)&&(kn=null),Ci.forEach(Lu),Ni.forEach(Lu)}function Jr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ja||(Ja=!0,gt.unstable_scheduleCallback(gt.unstable_NormalPriority,Qx)))}function Ei(e){function t(i){return Jr(i,e)}if(0<ao.length){Jr(ao[0],e);for(var n=1;n<ao.length;n++){var r=ao[n];r.blockedOn===e&&(r.blockedOn=null)}}for(vn!==null&&Jr(vn,e),bn!==null&&Jr(bn,e),kn!==null&&Jr(kn,e),Ci.forEach(t),Ni.forEach(t),n=0;n<mn.length;n++)r=mn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<mn.length&&(n=mn[0],n.blockedOn===null);)Df(n),n.blockedOn===null&&mn.shift()}var Sr=cn.ReactCurrentBatchConfig,Ho=!0;function Jx(e,t,n,r){var i=xe,o=Sr.transition;Sr.transition=null;try{xe=1,sc(e,t,n,r)}finally{xe=i,Sr.transition=o}}function Yx(e,t,n,r){var i=xe,o=Sr.transition;Sr.transition=null;try{xe=4,sc(e,t,n,r)}finally{xe=i,Sr.transition=o}}function sc(e,t,n,r){if(Ho){var i=Ya(e,t,n,r);if(i===null)ea(e,t,r,qo,n),Pu(e,r);else if(Gx(i,e,t,n,r))r.stopPropagation();else if(Pu(e,r),t&4&&-1<Kx.indexOf(e)){for(;i!==null;){var o=Gi(i);if(o!==null&&Af(o),o=Ya(e,t,n,r),o===null&&ea(e,t,r,qo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ea(e,t,r,null,n)}}var qo=null;function Ya(e,t,n,r){if(qo=null,e=ic(r),e=$n(e),e!==null)if(t=er(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Cf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qo=e,null}function Ff(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dx()){case oc:return 1;case Tf:return 4;case Vo:case Fx:return 16;case Pf:return 536870912;default:return 16}default:return 16}}var gn=null,cc=null,No=null;function $f(){if(No)return No;var e,t=cc,n=t.length,r,i="value"in gn?gn.value:gn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return No=i.slice(e,1<r?1-r:void 0)}function Eo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function so(){return!0}function Iu(){return!1}function yt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?so:Iu,this.isPropagationStopped=Iu,this}return Ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=so)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=so)},persist:function(){},isPersistent:so}),t}var $r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uc=yt($r),Ki=Ee({},$r,{view:0,detail:0}),Xx=yt(Ki),Hl,ql,Yr,xl=Ee({},Ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yr&&(Yr&&e.type==="mousemove"?(Hl=e.screenX-Yr.screenX,ql=e.screenY-Yr.screenY):ql=Hl=0,Yr=e),Hl)},movementY:function(e){return"movementY"in e?e.movementY:ql}}),Au=yt(xl),Zx=Ee({},xl,{dataTransfer:0}),ey=yt(Zx),ty=Ee({},Ki,{relatedTarget:0}),Kl=yt(ty),ny=Ee({},$r,{animationName:0,elapsedTime:0,pseudoElement:0}),ry=yt(ny),iy=Ee({},$r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),oy=yt(iy),ly=Ee({},$r,{data:0}),Ru=yt(ly),ay={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cy[e])?!!t[e]:!1}function dc(){return uy}var dy=Ee({},Ki,{key:function(e){if(e.key){var t=ay[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Eo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dc,charCode:function(e){return e.type==="keypress"?Eo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Eo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),py=yt(dy),fy=Ee({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mu=yt(fy),my=Ee({},Ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dc}),hy=yt(my),gy=Ee({},$r,{propertyName:0,elapsedTime:0,pseudoElement:0}),xy=yt(gy),yy=Ee({},xl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vy=yt(yy),by=[9,13,27,32],pc=on&&"CompositionEvent"in window,pi=null;on&&"documentMode"in document&&(pi=document.documentMode);var ky=on&&"TextEvent"in window&&!pi,Bf=on&&(!pc||pi&&8<pi&&11>=pi),Ou=" ",Du=!1;function Uf(e,t){switch(e){case"keyup":return by.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ur=!1;function wy(e,t){switch(e){case"compositionend":return Vf(t);case"keypress":return t.which!==32?null:(Du=!0,Ou);case"textInput":return e=t.data,e===Ou&&Du?null:e;default:return null}}function jy(e,t){if(ur)return e==="compositionend"||!pc&&Uf(e,t)?(e=$f(),No=cc=gn=null,ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bf&&t.locale!=="ko"?null:t.data;default:return null}}var Sy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sy[e.type]:t==="textarea"}function Wf(e,t,n,r){kf(r),t=Ko(t,"onChange"),0<t.length&&(n=new uc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var fi=null,zi=null;function _y(e){tm(e,0)}function yl(e){var t=fr(e);if(mf(t))return e}function Cy(e,t){if(e==="change")return t}var Hf=!1;if(on){var Gl;if(on){var Ql="oninput"in document;if(!Ql){var $u=document.createElement("div");$u.setAttribute("oninput","return;"),Ql=typeof $u.oninput=="function"}Gl=Ql}else Gl=!1;Hf=Gl&&(!document.documentMode||9<document.documentMode)}function Bu(){fi&&(fi.detachEvent("onpropertychange",qf),zi=fi=null)}function qf(e){if(e.propertyName==="value"&&yl(zi)){var t=[];Wf(t,zi,e,ic(e)),_f(_y,t)}}function Ny(e,t,n){e==="focusin"?(Bu(),fi=t,zi=n,fi.attachEvent("onpropertychange",qf)):e==="focusout"&&Bu()}function Ey(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yl(zi)}function zy(e,t){if(e==="click")return yl(t)}function Ty(e,t){if(e==="input"||e==="change")return yl(t)}function Py(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dt=typeof Object.is=="function"?Object.is:Py;function Ti(e,t){if(Dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ia.call(t,i)||!Dt(e[i],t[i]))return!1}return!0}function Uu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vu(e,t){var n=Uu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uu(n)}}function Kf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Kf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gf(){for(var e=window,t=$o();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$o(e.document)}return t}function fc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ly(e){var t=Gf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Kf(n.ownerDocument.documentElement,n)){if(r!==null&&fc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Vu(n,o);var a=Vu(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Iy=on&&"documentMode"in document&&11>=document.documentMode,dr=null,Xa=null,mi=null,Za=!1;function Wu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Za||dr==null||dr!==$o(r)||(r=dr,"selectionStart"in r&&fc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mi&&Ti(mi,r)||(mi=r,r=Ko(Xa,"onSelect"),0<r.length&&(t=new uc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=dr)))}function co(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pr={animationend:co("Animation","AnimationEnd"),animationiteration:co("Animation","AnimationIteration"),animationstart:co("Animation","AnimationStart"),transitionend:co("Transition","TransitionEnd")},Jl={},Qf={};on&&(Qf=document.createElement("div").style,"AnimationEvent"in window||(delete pr.animationend.animation,delete pr.animationiteration.animation,delete pr.animationstart.animation),"TransitionEvent"in window||delete pr.transitionend.transition);function vl(e){if(Jl[e])return Jl[e];if(!pr[e])return e;var t=pr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qf)return Jl[e]=t[n];return e}var Jf=vl("animationend"),Yf=vl("animationiteration"),Xf=vl("animationstart"),Zf=vl("transitionend"),em=new Map,Hu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pn(e,t){em.set(e,t),Zn(t,[e])}for(var Yl=0;Yl<Hu.length;Yl++){var Xl=Hu[Yl],Ay=Xl.toLowerCase(),Ry=Xl[0].toUpperCase()+Xl.slice(1);Pn(Ay,"on"+Ry)}Pn(Jf,"onAnimationEnd");Pn(Yf,"onAnimationIteration");Pn(Xf,"onAnimationStart");Pn("dblclick","onDoubleClick");Pn("focusin","onFocus");Pn("focusout","onBlur");Pn(Zf,"onTransitionEnd");zr("onMouseEnter",["mouseout","mouseover"]);zr("onMouseLeave",["mouseout","mouseover"]);zr("onPointerEnter",["pointerout","pointerover"]);zr("onPointerLeave",["pointerout","pointerover"]);Zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),My=new Set("cancel close invalid load scroll toggle".split(" ").concat(si));function qu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ax(r,t,void 0,e),e.currentTarget=null}function tm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],c=s.instance,u=s.currentTarget;if(s=s.listener,c!==o&&i.isPropagationStopped())break e;qu(i,s,u),o=c}else for(a=0;a<r.length;a++){if(s=r[a],c=s.instance,u=s.currentTarget,s=s.listener,c!==o&&i.isPropagationStopped())break e;qu(i,s,u),o=c}}}if(Uo)throw e=Ga,Uo=!1,Ga=null,e}function we(e,t){var n=t[is];n===void 0&&(n=t[is]=new Set);var r=e+"__bubble";n.has(r)||(nm(t,e,2,!1),n.add(r))}function Zl(e,t,n){var r=0;t&&(r|=4),nm(n,e,r,t)}var uo="_reactListening"+Math.random().toString(36).slice(2);function Pi(e){if(!e[uo]){e[uo]=!0,cf.forEach(function(n){n!=="selectionchange"&&(My.has(n)||Zl(n,!1,e),Zl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[uo]||(t[uo]=!0,Zl("selectionchange",!1,t))}}function nm(e,t,n,r){switch(Ff(t)){case 1:var i=Jx;break;case 4:i=Yx;break;default:i=sc}n=i.bind(null,t,n,e),i=void 0,!Ka||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ea(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;s!==null;){if(a=$n(s),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}s=s.parentNode}}r=r.return}_f(function(){var u=o,d=ic(n),p=[];e:{var f=em.get(e);if(f!==void 0){var m=uc,b=e;switch(e){case"keypress":if(Eo(n)===0)break e;case"keydown":case"keyup":m=py;break;case"focusin":b="focus",m=Kl;break;case"focusout":b="blur",m=Kl;break;case"beforeblur":case"afterblur":m=Kl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Au;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=ey;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=hy;break;case Jf:case Yf:case Xf:m=ry;break;case Zf:m=xy;break;case"scroll":m=Xx;break;case"wheel":m=vy;break;case"copy":case"cut":case"paste":m=oy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Mu}var k=(t&4)!==0,E=!k&&e==="scroll",g=k?f!==null?f+"Capture":null:f;k=[];for(var h=u,y;h!==null;){y=h;var P=y.stateNode;if(y.tag===5&&P!==null&&(y=P,g!==null&&(P=_i(h,g),P!=null&&k.push(Li(h,P,y)))),E)break;h=h.return}0<k.length&&(f=new m(f,b,null,n,d),p.push({event:f,listeners:k}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==Ha&&(b=n.relatedTarget||n.fromElement)&&($n(b)||b[ln]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(b=n.relatedTarget||n.toElement,m=u,b=b?$n(b):null,b!==null&&(E=er(b),b!==E||b.tag!==5&&b.tag!==6)&&(b=null)):(m=null,b=u),m!==b)){if(k=Au,P="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(k=Mu,P="onPointerLeave",g="onPointerEnter",h="pointer"),E=m==null?f:fr(m),y=b==null?f:fr(b),f=new k(P,h+"leave",m,n,d),f.target=E,f.relatedTarget=y,P=null,$n(d)===u&&(k=new k(g,h+"enter",b,n,d),k.target=y,k.relatedTarget=E,P=k),E=P,m&&b)t:{for(k=m,g=b,h=0,y=k;y;y=ir(y))h++;for(y=0,P=g;P;P=ir(P))y++;for(;0<h-y;)k=ir(k),h--;for(;0<y-h;)g=ir(g),y--;for(;h--;){if(k===g||g!==null&&k===g.alternate)break t;k=ir(k),g=ir(g)}k=null}else k=null;m!==null&&Ku(p,f,m,k,!1),b!==null&&E!==null&&Ku(p,E,b,k,!0)}}e:{if(f=u?fr(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var C=Cy;else if(Fu(f))if(Hf)C=Ty;else{C=Ey;var w=Ny}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=zy);if(C&&(C=C(e,u))){Wf(p,C,n,d);break e}w&&w(e,f,u),e==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&$a(f,"number",f.value)}switch(w=u?fr(u):window,e){case"focusin":(Fu(w)||w.contentEditable==="true")&&(dr=w,Xa=u,mi=null);break;case"focusout":mi=Xa=dr=null;break;case"mousedown":Za=!0;break;case"contextmenu":case"mouseup":case"dragend":Za=!1,Wu(p,n,d);break;case"selectionchange":if(Iy)break;case"keydown":case"keyup":Wu(p,n,d)}var T;if(pc)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else ur?Uf(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Bf&&n.locale!=="ko"&&(ur||O!=="onCompositionStart"?O==="onCompositionEnd"&&ur&&(T=$f()):(gn=d,cc="value"in gn?gn.value:gn.textContent,ur=!0)),w=Ko(u,O),0<w.length&&(O=new Ru(O,e,null,n,d),p.push({event:O,listeners:w}),T?O.data=T:(T=Vf(n),T!==null&&(O.data=T)))),(T=ky?wy(e,n):jy(e,n))&&(u=Ko(u,"onBeforeInput"),0<u.length&&(d=new Ru("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=T))}tm(p,t)})}function Li(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ko(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=_i(e,n),o!=null&&r.unshift(Li(e,o,i)),o=_i(e,t),o!=null&&r.push(Li(e,o,i))),e=e.return}return r}function ir(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ku(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,c=s.alternate,u=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&u!==null&&(s=u,i?(c=_i(n,o),c!=null&&a.unshift(Li(n,c,s))):i||(c=_i(n,o),c!=null&&a.push(Li(n,c,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Oy=/\r\n?/g,Dy=/\u0000|\uFFFD/g;function Gu(e){return(typeof e=="string"?e:""+e).replace(Oy,`
`).replace(Dy,"")}function po(e,t,n){if(t=Gu(t),Gu(e)!==t&&n)throw Error(K(425))}function Go(){}var es=null,ts=null;function ns(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var rs=typeof setTimeout=="function"?setTimeout:void 0,Fy=typeof clearTimeout=="function"?clearTimeout:void 0,Qu=typeof Promise=="function"?Promise:void 0,$y=typeof queueMicrotask=="function"?queueMicrotask:typeof Qu<"u"?function(e){return Qu.resolve(null).then(e).catch(By)}:rs;function By(e){setTimeout(function(){throw e})}function ta(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ei(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ei(t)}function wn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ju(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Br=Math.random().toString(36).slice(2),Vt="__reactFiber$"+Br,Ii="__reactProps$"+Br,ln="__reactContainer$"+Br,is="__reactEvents$"+Br,Uy="__reactListeners$"+Br,Vy="__reactHandles$"+Br;function $n(e){var t=e[Vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ln]||n[Vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ju(e);e!==null;){if(n=e[Vt])return n;e=Ju(e)}return t}e=n,n=e.parentNode}return null}function Gi(e){return e=e[Vt]||e[ln],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function fr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(K(33))}function bl(e){return e[Ii]||null}var os=[],mr=-1;function Ln(e){return{current:e}}function je(e){0>mr||(e.current=os[mr],os[mr]=null,mr--)}function be(e,t){mr++,os[mr]=e.current,e.current=t}var zn={},Ke=Ln(zn),rt=Ln(!1),Gn=zn;function Tr(e,t){var n=e.type.contextTypes;if(!n)return zn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function it(e){return e=e.childContextTypes,e!=null}function Qo(){je(rt),je(Ke)}function Yu(e,t,n){if(Ke.current!==zn)throw Error(K(168));be(Ke,t),be(rt,n)}function rm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(K(108,Nx(e)||"Unknown",i));return Ee({},n,r)}function Jo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zn,Gn=Ke.current,be(Ke,e),be(rt,rt.current),!0}function Xu(e,t,n){var r=e.stateNode;if(!r)throw Error(K(169));n?(e=rm(e,t,Gn),r.__reactInternalMemoizedMergedChildContext=e,je(rt),je(Ke),be(Ke,e)):je(rt),be(rt,n)}var Xt=null,kl=!1,na=!1;function im(e){Xt===null?Xt=[e]:Xt.push(e)}function Wy(e){kl=!0,im(e)}function In(){if(!na&&Xt!==null){na=!0;var e=0,t=xe;try{var n=Xt;for(xe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xt=null,kl=!1}catch(i){throw Xt!==null&&(Xt=Xt.slice(e+1)),zf(oc,In),i}finally{xe=t,na=!1}}return null}var hr=[],gr=0,Yo=null,Xo=0,jt=[],St=0,Qn=null,Zt=1,en="";function On(e,t){hr[gr++]=Xo,hr[gr++]=Yo,Yo=e,Xo=t}function om(e,t,n){jt[St++]=Zt,jt[St++]=en,jt[St++]=Qn,Qn=e;var r=Zt;e=en;var i=32-Mt(r)-1;r&=~(1<<i),n+=1;var o=32-Mt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Zt=1<<32-Mt(t)+i|n<<i|r,en=o+e}else Zt=1<<o|n<<i|r,en=e}function mc(e){e.return!==null&&(On(e,1),om(e,1,0))}function hc(e){for(;e===Yo;)Yo=hr[--gr],hr[gr]=null,Xo=hr[--gr],hr[gr]=null;for(;e===Qn;)Qn=jt[--St],jt[St]=null,en=jt[--St],jt[St]=null,Zt=jt[--St],jt[St]=null}var ht=null,ft=null,Se=!1,Rt=null;function lm(e,t){var n=Ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Zu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,ft=wn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qn!==null?{id:Zt,overflow:en}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ht=e,ft=null,!0):!1;default:return!1}}function ls(e){return(e.mode&1)!==0&&(e.flags&128)===0}function as(e){if(Se){var t=ft;if(t){var n=t;if(!Zu(e,t)){if(ls(e))throw Error(K(418));t=wn(n.nextSibling);var r=ht;t&&Zu(e,t)?lm(r,n):(e.flags=e.flags&-4097|2,Se=!1,ht=e)}}else{if(ls(e))throw Error(K(418));e.flags=e.flags&-4097|2,Se=!1,ht=e}}}function ed(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function fo(e){if(e!==ht)return!1;if(!Se)return ed(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ns(e.type,e.memoizedProps)),t&&(t=ft)){if(ls(e))throw am(),Error(K(418));for(;t;)lm(e,t),t=wn(t.nextSibling)}if(ed(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ft=wn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=ht?wn(e.stateNode.nextSibling):null;return!0}function am(){for(var e=ft;e;)e=wn(e.nextSibling)}function Pr(){ft=ht=null,Se=!1}function gc(e){Rt===null?Rt=[e]:Rt.push(e)}var Hy=cn.ReactCurrentBatchConfig;function Xr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(K(309));var r=n.stateNode}if(!r)throw Error(K(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(K(284));if(!n._owner)throw Error(K(290,e))}return e}function mo(e,t){throw e=Object.prototype.toString.call(t),Error(K(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function td(e){var t=e._init;return t(e._payload)}function sm(e){function t(g,h){if(e){var y=g.deletions;y===null?(g.deletions=[h],g.flags|=16):y.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=Cn(g,h),g.index=0,g.sibling=null,g}function o(g,h,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<h?(g.flags|=2,h):y):(g.flags|=2,h)):(g.flags|=1048576,h)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,h,y,P){return h===null||h.tag!==6?(h=ca(y,g.mode,P),h.return=g,h):(h=i(h,y),h.return=g,h)}function c(g,h,y,P){var C=y.type;return C===cr?d(g,h,y.props.children,P,y.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===pn&&td(C)===h.type)?(P=i(h,y.props),P.ref=Xr(g,h,y),P.return=g,P):(P=Ro(y.type,y.key,y.props,null,g.mode,P),P.ref=Xr(g,h,y),P.return=g,P)}function u(g,h,y,P){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=ua(y,g.mode,P),h.return=g,h):(h=i(h,y.children||[]),h.return=g,h)}function d(g,h,y,P,C){return h===null||h.tag!==7?(h=Hn(y,g.mode,P,C),h.return=g,h):(h=i(h,y),h.return=g,h)}function p(g,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ca(""+h,g.mode,y),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case no:return y=Ro(h.type,h.key,h.props,null,g.mode,y),y.ref=Xr(g,null,h),y.return=g,y;case sr:return h=ua(h,g.mode,y),h.return=g,h;case pn:var P=h._init;return p(g,P(h._payload),y)}if(li(h)||Kr(h))return h=Hn(h,g.mode,y,null),h.return=g,h;mo(g,h)}return null}function f(g,h,y,P){var C=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return C!==null?null:s(g,h,""+y,P);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case no:return y.key===C?c(g,h,y,P):null;case sr:return y.key===C?u(g,h,y,P):null;case pn:return C=y._init,f(g,h,C(y._payload),P)}if(li(y)||Kr(y))return C!==null?null:d(g,h,y,P,null);mo(g,y)}return null}function m(g,h,y,P,C){if(typeof P=="string"&&P!==""||typeof P=="number")return g=g.get(y)||null,s(h,g,""+P,C);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case no:return g=g.get(P.key===null?y:P.key)||null,c(h,g,P,C);case sr:return g=g.get(P.key===null?y:P.key)||null,u(h,g,P,C);case pn:var w=P._init;return m(g,h,y,w(P._payload),C)}if(li(P)||Kr(P))return g=g.get(y)||null,d(h,g,P,C,null);mo(h,P)}return null}function b(g,h,y,P){for(var C=null,w=null,T=h,O=h=0,B=null;T!==null&&O<y.length;O++){T.index>O?(B=T,T=null):B=T.sibling;var j=f(g,T,y[O],P);if(j===null){T===null&&(T=B);break}e&&T&&j.alternate===null&&t(g,T),h=o(j,h,O),w===null?C=j:w.sibling=j,w=j,T=B}if(O===y.length)return n(g,T),Se&&On(g,O),C;if(T===null){for(;O<y.length;O++)T=p(g,y[O],P),T!==null&&(h=o(T,h,O),w===null?C=T:w.sibling=T,w=T);return Se&&On(g,O),C}for(T=r(g,T);O<y.length;O++)B=m(T,g,O,y[O],P),B!==null&&(e&&B.alternate!==null&&T.delete(B.key===null?O:B.key),h=o(B,h,O),w===null?C=B:w.sibling=B,w=B);return e&&T.forEach(function(x){return t(g,x)}),Se&&On(g,O),C}function k(g,h,y,P){var C=Kr(y);if(typeof C!="function")throw Error(K(150));if(y=C.call(y),y==null)throw Error(K(151));for(var w=C=null,T=h,O=h=0,B=null,j=y.next();T!==null&&!j.done;O++,j=y.next()){T.index>O?(B=T,T=null):B=T.sibling;var x=f(g,T,j.value,P);if(x===null){T===null&&(T=B);break}e&&T&&x.alternate===null&&t(g,T),h=o(x,h,O),w===null?C=x:w.sibling=x,w=x,T=B}if(j.done)return n(g,T),Se&&On(g,O),C;if(T===null){for(;!j.done;O++,j=y.next())j=p(g,j.value,P),j!==null&&(h=o(j,h,O),w===null?C=j:w.sibling=j,w=j);return Se&&On(g,O),C}for(T=r(g,T);!j.done;O++,j=y.next())j=m(T,g,O,j.value,P),j!==null&&(e&&j.alternate!==null&&T.delete(j.key===null?O:j.key),h=o(j,h,O),w===null?C=j:w.sibling=j,w=j);return e&&T.forEach(function(S){return t(g,S)}),Se&&On(g,O),C}function E(g,h,y,P){if(typeof y=="object"&&y!==null&&y.type===cr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case no:e:{for(var C=y.key,w=h;w!==null;){if(w.key===C){if(C=y.type,C===cr){if(w.tag===7){n(g,w.sibling),h=i(w,y.props.children),h.return=g,g=h;break e}}else if(w.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===pn&&td(C)===w.type){n(g,w.sibling),h=i(w,y.props),h.ref=Xr(g,w,y),h.return=g,g=h;break e}n(g,w);break}else t(g,w);w=w.sibling}y.type===cr?(h=Hn(y.props.children,g.mode,P,y.key),h.return=g,g=h):(P=Ro(y.type,y.key,y.props,null,g.mode,P),P.ref=Xr(g,h,y),P.return=g,g=P)}return a(g);case sr:e:{for(w=y.key;h!==null;){if(h.key===w)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(g,h.sibling),h=i(h,y.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=ua(y,g.mode,P),h.return=g,g=h}return a(g);case pn:return w=y._init,E(g,h,w(y._payload),P)}if(li(y))return b(g,h,y,P);if(Kr(y))return k(g,h,y,P);mo(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,y),h.return=g,g=h):(n(g,h),h=ca(y,g.mode,P),h.return=g,g=h),a(g)):n(g,h)}return E}var Lr=sm(!0),cm=sm(!1),Zo=Ln(null),el=null,xr=null,xc=null;function yc(){xc=xr=el=null}function vc(e){var t=Zo.current;je(Zo),e._currentValue=t}function ss(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _r(e,t){el=e,xc=xr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(nt=!0),e.firstContext=null)}function zt(e){var t=e._currentValue;if(xc!==e)if(e={context:e,memoizedValue:t,next:null},xr===null){if(el===null)throw Error(K(308));xr=e,el.dependencies={lanes:0,firstContext:e}}else xr=xr.next=e;return t}var Bn=null;function bc(e){Bn===null?Bn=[e]:Bn.push(e)}function um(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,bc(t)):(n.next=i.next,i.next=n),t.interleaved=n,an(e,r)}function an(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var fn=!1;function kc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function jn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,fe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,an(e,n)}return i=r.interleaved,i===null?(t.next=t,bc(r)):(t.next=i.next,i.next=t),r.interleaved=t,an(e,n)}function zo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lc(e,n)}}function nd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function tl(e,t,n,r){var i=e.updateQueue;fn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==a&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=c))}if(o!==null){var p=i.baseState;a=0,d=u=c=null,s=o;do{var f=s.lane,m=s.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var b=e,k=s;switch(f=t,m=n,k.tag){case 1:if(b=k.payload,typeof b=="function"){p=b.call(m,p,f);break e}p=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=k.payload,f=typeof b=="function"?b.call(m,p,f):b,f==null)break e;p=Ee({},p,f);break e;case 2:fn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else m={eventTime:m,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=m,c=p):d=d.next=m,a|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Yn|=a,e.lanes=a,e.memoizedState=p}}function rd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(K(191,i));i.call(r)}}}var Qi={},qt=Ln(Qi),Ai=Ln(Qi),Ri=Ln(Qi);function Un(e){if(e===Qi)throw Error(K(174));return e}function wc(e,t){switch(be(Ri,t),be(Ai,e),be(qt,Qi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ua(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ua(t,e)}je(qt),be(qt,t)}function Ir(){je(qt),je(Ai),je(Ri)}function pm(e){Un(Ri.current);var t=Un(qt.current),n=Ua(t,e.type);t!==n&&(be(Ai,e),be(qt,n))}function jc(e){Ai.current===e&&(je(qt),je(Ai))}var Ce=Ln(0);function nl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ra=[];function Sc(){for(var e=0;e<ra.length;e++)ra[e]._workInProgressVersionPrimary=null;ra.length=0}var To=cn.ReactCurrentDispatcher,ia=cn.ReactCurrentBatchConfig,Jn=0,Ne=null,Ae=null,Me=null,rl=!1,hi=!1,Mi=0,qy=0;function We(){throw Error(K(321))}function _c(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dt(e[n],t[n]))return!1;return!0}function Cc(e,t,n,r,i,o){if(Jn=o,Ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,To.current=e===null||e.memoizedState===null?Jy:Yy,e=n(r,i),hi){o=0;do{if(hi=!1,Mi=0,25<=o)throw Error(K(301));o+=1,Me=Ae=null,t.updateQueue=null,To.current=Xy,e=n(r,i)}while(hi)}if(To.current=il,t=Ae!==null&&Ae.next!==null,Jn=0,Me=Ae=Ne=null,rl=!1,t)throw Error(K(300));return e}function Nc(){var e=Mi!==0;return Mi=0,e}function Bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?Ne.memoizedState=Me=e:Me=Me.next=e,Me}function Tt(){if(Ae===null){var e=Ne.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Me===null?Ne.memoizedState:Me.next;if(t!==null)Me=t,Ae=e;else{if(e===null)throw Error(K(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Me===null?Ne.memoizedState=Me=e:Me=Me.next=e}return Me}function Oi(e,t){return typeof t=="function"?t(e):t}function oa(e){var t=Tt(),n=t.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=e;var r=Ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,c=null,u=o;do{var d=u.lane;if((Jn&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(s=c=p,a=r):c=c.next=p,Ne.lanes|=d,Yn|=d}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=s,Dt(r,t.memoizedState)||(nt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ne.lanes|=o,Yn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function la(e){var t=Tt(),n=t.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Dt(o,t.memoizedState)||(nt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function fm(){}function mm(e,t){var n=Ne,r=Tt(),i=t(),o=!Dt(r.memoizedState,i);if(o&&(r.memoizedState=i,nt=!0),r=r.queue,Ec(xm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Di(9,gm.bind(null,n,r,i,t),void 0,null),De===null)throw Error(K(349));Jn&30||hm(n,t,i)}return i}function hm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gm(e,t,n,r){t.value=n,t.getSnapshot=r,ym(t)&&vm(e)}function xm(e,t,n){return n(function(){ym(t)&&vm(e)})}function ym(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dt(e,n)}catch{return!0}}function vm(e){var t=an(e,1);t!==null&&Ot(t,e,1,-1)}function id(e){var t=Bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:e},t.queue=e,e=e.dispatch=Qy.bind(null,Ne,e),[t.memoizedState,e]}function Di(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function bm(){return Tt().memoizedState}function Po(e,t,n,r){var i=Bt();Ne.flags|=e,i.memoizedState=Di(1|t,n,void 0,r===void 0?null:r)}function wl(e,t,n,r){var i=Tt();r=r===void 0?null:r;var o=void 0;if(Ae!==null){var a=Ae.memoizedState;if(o=a.destroy,r!==null&&_c(r,a.deps)){i.memoizedState=Di(t,n,o,r);return}}Ne.flags|=e,i.memoizedState=Di(1|t,n,o,r)}function od(e,t){return Po(8390656,8,e,t)}function Ec(e,t){return wl(2048,8,e,t)}function km(e,t){return wl(4,2,e,t)}function wm(e,t){return wl(4,4,e,t)}function jm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sm(e,t,n){return n=n!=null?n.concat([e]):null,wl(4,4,jm.bind(null,t,e),n)}function zc(){}function _m(e,t){var n=Tt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_c(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cm(e,t){var n=Tt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_c(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Nm(e,t,n){return Jn&21?(Dt(n,t)||(n=Lf(),Ne.lanes|=n,Yn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,nt=!0),e.memoizedState=n)}function Ky(e,t){var n=xe;xe=n!==0&&4>n?n:4,e(!0);var r=ia.transition;ia.transition={};try{e(!1),t()}finally{xe=n,ia.transition=r}}function Em(){return Tt().memoizedState}function Gy(e,t,n){var r=_n(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zm(e))Tm(t,n);else if(n=um(e,t,n,r),n!==null){var i=Je();Ot(n,e,r,i),Pm(n,t,r)}}function Qy(e,t,n){var r=_n(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zm(e))Tm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Dt(s,a)){var c=t.interleaved;c===null?(i.next=i,bc(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=um(e,t,i,r),n!==null&&(i=Je(),Ot(n,e,r,i),Pm(n,t,r))}}function zm(e){var t=e.alternate;return e===Ne||t!==null&&t===Ne}function Tm(e,t){hi=rl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lc(e,n)}}var il={readContext:zt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},Jy={readContext:zt,useCallback:function(e,t){return Bt().memoizedState=[e,t===void 0?null:t],e},useContext:zt,useEffect:od,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Po(4194308,4,jm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Po(4194308,4,e,t)},useInsertionEffect:function(e,t){return Po(4,2,e,t)},useMemo:function(e,t){var n=Bt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Bt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Gy.bind(null,Ne,e),[r.memoizedState,e]},useRef:function(e){var t=Bt();return e={current:e},t.memoizedState=e},useState:id,useDebugValue:zc,useDeferredValue:function(e){return Bt().memoizedState=e},useTransition:function(){var e=id(!1),t=e[0];return e=Ky.bind(null,e[1]),Bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ne,i=Bt();if(Se){if(n===void 0)throw Error(K(407));n=n()}else{if(n=t(),De===null)throw Error(K(349));Jn&30||hm(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,od(xm.bind(null,r,o,e),[e]),r.flags|=2048,Di(9,gm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Bt(),t=De.identifierPrefix;if(Se){var n=en,r=Zt;n=(r&~(1<<32-Mt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Mi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Yy={readContext:zt,useCallback:_m,useContext:zt,useEffect:Ec,useImperativeHandle:Sm,useInsertionEffect:km,useLayoutEffect:wm,useMemo:Cm,useReducer:oa,useRef:bm,useState:function(){return oa(Oi)},useDebugValue:zc,useDeferredValue:function(e){var t=Tt();return Nm(t,Ae.memoizedState,e)},useTransition:function(){var e=oa(Oi)[0],t=Tt().memoizedState;return[e,t]},useMutableSource:fm,useSyncExternalStore:mm,useId:Em,unstable_isNewReconciler:!1},Xy={readContext:zt,useCallback:_m,useContext:zt,useEffect:Ec,useImperativeHandle:Sm,useInsertionEffect:km,useLayoutEffect:wm,useMemo:Cm,useReducer:la,useRef:bm,useState:function(){return la(Oi)},useDebugValue:zc,useDeferredValue:function(e){var t=Tt();return Ae===null?t.memoizedState=e:Nm(t,Ae.memoizedState,e)},useTransition:function(){var e=la(Oi)[0],t=Tt().memoizedState;return[e,t]},useMutableSource:fm,useSyncExternalStore:mm,useId:Em,unstable_isNewReconciler:!1};function It(e,t){if(e&&e.defaultProps){t=Ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function cs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var jl={isMounted:function(e){return(e=e._reactInternals)?er(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Je(),i=_n(e),o=nn(r,i);o.payload=t,n!=null&&(o.callback=n),t=jn(e,o,i),t!==null&&(Ot(t,e,i,r),zo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Je(),i=_n(e),o=nn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=jn(e,o,i),t!==null&&(Ot(t,e,i,r),zo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Je(),r=_n(e),i=nn(n,r);i.tag=2,t!=null&&(i.callback=t),t=jn(e,i,r),t!==null&&(Ot(t,e,r,n),zo(t,e,r))}};function ld(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Ti(n,r)||!Ti(i,o):!0}function Lm(e,t,n){var r=!1,i=zn,o=t.contextType;return typeof o=="object"&&o!==null?o=zt(o):(i=it(t)?Gn:Ke.current,r=t.contextTypes,o=(r=r!=null)?Tr(e,i):zn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=jl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ad(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&jl.enqueueReplaceState(t,t.state,null)}function us(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},kc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=zt(o):(o=it(t)?Gn:Ke.current,i.context=Tr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(cs(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&jl.enqueueReplaceState(i,i.state,null),tl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ar(e,t){try{var n="",r=t;do n+=Cx(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function aa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ds(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Zy=typeof WeakMap=="function"?WeakMap:Map;function Im(e,t,n){n=nn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ll||(ll=!0,ks=r),ds(e,t)},n}function Am(e,t,n){n=nn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ds(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ds(e,t),typeof r!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function sd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Zy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=fv.bind(null,e,t,n),t.then(e,e))}function cd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ud(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=nn(-1,1),t.tag=2,jn(n,t,1))),n.lanes|=1),e)}var ev=cn.ReactCurrentOwner,nt=!1;function Qe(e,t,n,r){t.child=e===null?cm(t,null,n,r):Lr(t,e.child,n,r)}function dd(e,t,n,r,i){n=n.render;var o=t.ref;return _r(t,i),r=Cc(e,t,n,r,o,i),n=Nc(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,sn(e,t,i)):(Se&&n&&mc(t),t.flags|=1,Qe(e,t,r,i),t.child)}function pd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Oc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Rm(e,t,o,r,i)):(e=Ro(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ti,n(a,r)&&e.ref===t.ref)return sn(e,t,i)}return t.flags|=1,e=Cn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Rm(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ti(o,r)&&e.ref===t.ref)if(nt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(nt=!0);else return t.lanes=e.lanes,sn(e,t,i)}return ps(e,t,n,r,i)}function Mm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(vr,dt),dt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,be(vr,dt),dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,be(vr,dt),dt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,be(vr,dt),dt|=r;return Qe(e,t,i,n),t.child}function Om(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ps(e,t,n,r,i){var o=it(n)?Gn:Ke.current;return o=Tr(t,o),_r(t,i),n=Cc(e,t,n,r,o,i),r=Nc(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,sn(e,t,i)):(Se&&r&&mc(t),t.flags|=1,Qe(e,t,n,i),t.child)}function fd(e,t,n,r,i){if(it(n)){var o=!0;Jo(t)}else o=!1;if(_r(t,i),t.stateNode===null)Lo(e,t),Lm(t,n,r),us(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=zt(u):(u=it(n)?Gn:Ke.current,u=Tr(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||c!==u)&&ad(t,a,r,u),fn=!1;var f=t.memoizedState;a.state=f,tl(t,r,a,i),c=t.memoizedState,s!==r||f!==c||rt.current||fn?(typeof d=="function"&&(cs(t,n,d,r),c=t.memoizedState),(s=fn||ld(t,n,s,r,f,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,dm(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:It(t.type,s),a.props=u,p=t.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=zt(c):(c=it(n)?Gn:Ke.current,c=Tr(t,c));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==p||f!==c)&&ad(t,a,r,c),fn=!1,f=t.memoizedState,a.state=f,tl(t,r,a,i);var b=t.memoizedState;s!==p||f!==b||rt.current||fn?(typeof m=="function"&&(cs(t,n,m,r),b=t.memoizedState),(u=fn||ld(t,n,u,r,f,b,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,b,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,b,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),a.props=r,a.state=b,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return fs(e,t,n,r,o,i)}function fs(e,t,n,r,i,o){Om(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Xu(t,n,!1),sn(e,t,o);r=t.stateNode,ev.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Lr(t,e.child,null,o),t.child=Lr(t,null,s,o)):Qe(e,t,s,o),t.memoizedState=r.state,i&&Xu(t,n,!0),t.child}function Dm(e){var t=e.stateNode;t.pendingContext?Yu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Yu(e,t.context,!1),wc(e,t.containerInfo)}function md(e,t,n,r,i){return Pr(),gc(i),t.flags|=256,Qe(e,t,n,r),t.child}var ms={dehydrated:null,treeContext:null,retryLane:0};function hs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fm(e,t,n){var r=t.pendingProps,i=Ce.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),be(Ce,i&1),e===null)return as(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Cl(a,r,0,null),e=Hn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=hs(n),t.memoizedState=ms,e):Tc(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return tv(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Cn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Cn(s,o):(o=Hn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?hs(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=ms,r}return o=e.child,e=o.sibling,r=Cn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Tc(e,t){return t=Cl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ho(e,t,n,r){return r!==null&&gc(r),Lr(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tv(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=aa(Error(K(422))),ho(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Cl({mode:"visible",children:r.children},i,0,null),o=Hn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Lr(t,e.child,null,a),t.child.memoizedState=hs(a),t.memoizedState=ms,o);if(!(t.mode&1))return ho(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(K(419)),r=aa(o,r,void 0),ho(e,t,a,r)}if(s=(a&e.childLanes)!==0,nt||s){if(r=De,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,an(e,i),Ot(r,e,i,-1))}return Mc(),r=aa(Error(K(421))),ho(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=mv.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ft=wn(i.nextSibling),ht=t,Se=!0,Rt=null,e!==null&&(jt[St++]=Zt,jt[St++]=en,jt[St++]=Qn,Zt=e.id,en=e.overflow,Qn=t),t=Tc(t,r.children),t.flags|=4096,t)}function hd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ss(e.return,t,n)}function sa(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function $m(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Qe(e,t,r.children,n),r=Ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hd(e,n,t);else if(e.tag===19)hd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(be(Ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&nl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),sa(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&nl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}sa(t,!0,n,null,o);break;case"together":sa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Lo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function sn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(K(153));if(t.child!==null){for(e=t.child,n=Cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nv(e,t,n){switch(t.tag){case 3:Dm(t),Pr();break;case 5:pm(t);break;case 1:it(t.type)&&Jo(t);break;case 4:wc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;be(Zo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(be(Ce,Ce.current&1),t.flags|=128,null):n&t.child.childLanes?Fm(e,t,n):(be(Ce,Ce.current&1),e=sn(e,t,n),e!==null?e.sibling:null);be(Ce,Ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $m(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),be(Ce,Ce.current),r)break;return null;case 22:case 23:return t.lanes=0,Mm(e,t,n)}return sn(e,t,n)}var Bm,gs,Um,Vm;Bm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gs=function(){};Um=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Un(qt.current);var o=null;switch(n){case"input":i=Da(e,i),r=Da(e,r),o=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),o=[];break;case"textarea":i=Ba(e,i),r=Ba(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Go)}Va(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ji.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(c!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&s[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ji.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&we("scroll",e),o||s===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Vm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Zr(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rv(e,t,n){var r=t.pendingProps;switch(hc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return it(t.type)&&Qo(),He(t),null;case 3:return r=t.stateNode,Ir(),je(rt),je(Ke),Sc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Rt!==null&&(Ss(Rt),Rt=null))),gs(e,t),He(t),null;case 5:jc(t);var i=Un(Ri.current);if(n=t.type,e!==null&&t.stateNode!=null)Um(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(K(166));return He(t),null}if(e=Un(qt.current),fo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Vt]=t,r[Ii]=o,e=(t.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<si.length;i++)we(si[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Su(r,o),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},we("invalid",r);break;case"textarea":Cu(r,o),we("invalid",r)}Va(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&po(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&po(r.textContent,s,e),i=["children",""+s]):ji.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&we("scroll",r)}switch(n){case"input":ro(r),_u(r,o,!0);break;case"textarea":ro(r),Nu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Go)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Vt]=t,e[Ii]=r,Bm(e,t,!1,!1),t.stateNode=e;e:{switch(a=Wa(n,r),n){case"dialog":we("cancel",e),we("close",e),i=r;break;case"iframe":case"object":case"embed":we("load",e),i=r;break;case"video":case"audio":for(i=0;i<si.length;i++)we(si[i],e);i=r;break;case"source":we("error",e),i=r;break;case"img":case"image":case"link":we("error",e),we("load",e),i=r;break;case"details":we("toggle",e),i=r;break;case"input":Su(e,r),i=Da(e,r),we("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),we("invalid",e);break;case"textarea":Cu(e,r),i=Ba(e,r),we("invalid",e);break;default:i=r}Va(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var c=s[o];o==="style"?bf(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&yf(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Si(e,c):typeof c=="number"&&Si(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ji.hasOwnProperty(o)?c!=null&&o==="onScroll"&&we("scroll",e):c!=null&&ec(e,o,c,a))}switch(n){case"input":ro(e),_u(e,r,!1);break;case"textarea":ro(e),Nu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+En(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?kr(e,!!r.multiple,o,!1):r.defaultValue!=null&&kr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Go)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return He(t),null;case 6:if(e&&t.stateNode!=null)Vm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(K(166));if(n=Un(Ri.current),Un(qt.current),fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Vt]=t,(o=r.nodeValue!==n)&&(e=ht,e!==null))switch(e.tag){case 3:po(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&po(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Vt]=t,t.stateNode=r}return He(t),null;case 13:if(je(Ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&ft!==null&&t.mode&1&&!(t.flags&128))am(),Pr(),t.flags|=98560,o=!1;else if(o=fo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(K(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(K(317));o[Vt]=t}else Pr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;He(t),o=!1}else Rt!==null&&(Ss(Rt),Rt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ce.current&1?Re===0&&(Re=3):Mc())),t.updateQueue!==null&&(t.flags|=4),He(t),null);case 4:return Ir(),gs(e,t),e===null&&Pi(t.stateNode.containerInfo),He(t),null;case 10:return vc(t.type._context),He(t),null;case 17:return it(t.type)&&Qo(),He(t),null;case 19:if(je(Ce),o=t.memoizedState,o===null)return He(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Zr(o,!1);else{if(Re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=nl(e),a!==null){for(t.flags|=128,Zr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return be(Ce,Ce.current&1|2),t.child}e=e.sibling}o.tail!==null&&Te()>Rr&&(t.flags|=128,r=!0,Zr(o,!1),t.lanes=4194304)}else{if(!r)if(e=nl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Zr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Se)return He(t),null}else 2*Te()-o.renderingStartTime>Rr&&n!==1073741824&&(t.flags|=128,r=!0,Zr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Te(),t.sibling=null,n=Ce.current,be(Ce,r?n&1|2:n&1),t):(He(t),null);case 22:case 23:return Rc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?dt&1073741824&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),null;case 24:return null;case 25:return null}throw Error(K(156,t.tag))}function iv(e,t){switch(hc(t),t.tag){case 1:return it(t.type)&&Qo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ir(),je(rt),je(Ke),Sc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return jc(t),null;case 13:if(je(Ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(K(340));Pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return je(Ce),null;case 4:return Ir(),null;case 10:return vc(t.type._context),null;case 22:case 23:return Rc(),null;case 24:return null;default:return null}}var go=!1,qe=!1,ov=typeof WeakSet=="function"?WeakSet:Set,X=null;function yr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(e,t,r)}else n.current=null}function xs(e,t,n){try{n()}catch(r){ze(e,t,r)}}var gd=!1;function lv(e,t){if(es=Ho,e=Gf(),fc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var m;p!==n||i!==0&&p.nodeType!==3||(s=a+i),p!==o||r!==0&&p.nodeType!==3||(c=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===e)break t;if(f===n&&++u===i&&(s=a),f===o&&++d===r&&(c=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ts={focusedElem:e,selectionRange:n},Ho=!1,X=t;X!==null;)if(t=X,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,X=e;else for(;X!==null;){t=X;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var k=b.memoizedProps,E=b.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?k:It(t.type,k),E);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(K(163))}}catch(P){ze(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,X=e;break}X=t.return}return b=gd,gd=!1,b}function gi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&xs(t,n,o)}i=i.next}while(i!==r)}}function Sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ys(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wm(e){var t=e.alternate;t!==null&&(e.alternate=null,Wm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Vt],delete t[Ii],delete t[is],delete t[Uy],delete t[Vy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hm(e){return e.tag===5||e.tag===3||e.tag===4}function xd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Go));else if(r!==4&&(e=e.child,e!==null))for(vs(e,t,n),e=e.sibling;e!==null;)vs(e,t,n),e=e.sibling}function bs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(bs(e,t,n),e=e.sibling;e!==null;)bs(e,t,n),e=e.sibling}var Fe=null,At=!1;function un(e,t,n){for(n=n.child;n!==null;)qm(e,t,n),n=n.sibling}function qm(e,t,n){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(gl,n)}catch{}switch(n.tag){case 5:qe||yr(n,t);case 6:var r=Fe,i=At;Fe=null,un(e,t,n),Fe=r,At=i,Fe!==null&&(At?(e=Fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(At?(e=Fe,n=n.stateNode,e.nodeType===8?ta(e.parentNode,n):e.nodeType===1&&ta(e,n),Ei(e)):ta(Fe,n.stateNode));break;case 4:r=Fe,i=At,Fe=n.stateNode.containerInfo,At=!0,un(e,t,n),Fe=r,At=i;break;case 0:case 11:case 14:case 15:if(!qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&xs(n,t,a),i=i.next}while(i!==r)}un(e,t,n);break;case 1:if(!qe&&(yr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ze(n,t,s)}un(e,t,n);break;case 21:un(e,t,n);break;case 22:n.mode&1?(qe=(r=qe)||n.memoizedState!==null,un(e,t,n),qe=r):un(e,t,n);break;default:un(e,t,n)}}function yd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ov),t.forEach(function(r){var i=hv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Fe=s.stateNode,At=!1;break e;case 3:Fe=s.stateNode.containerInfo,At=!0;break e;case 4:Fe=s.stateNode.containerInfo,At=!0;break e}s=s.return}if(Fe===null)throw Error(K(160));qm(o,a,i),Fe=null,At=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){ze(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Km(t,e),t=t.sibling}function Km(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Lt(t,e),$t(e),r&4){try{gi(3,e,e.return),Sl(3,e)}catch(k){ze(e,e.return,k)}try{gi(5,e,e.return)}catch(k){ze(e,e.return,k)}}break;case 1:Lt(t,e),$t(e),r&512&&n!==null&&yr(n,n.return);break;case 5:if(Lt(t,e),$t(e),r&512&&n!==null&&yr(n,n.return),e.flags&32){var i=e.stateNode;try{Si(i,"")}catch(k){ze(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&hf(i,o),Wa(s,a);var u=Wa(s,o);for(a=0;a<c.length;a+=2){var d=c[a],p=c[a+1];d==="style"?bf(i,p):d==="dangerouslySetInnerHTML"?yf(i,p):d==="children"?Si(i,p):ec(i,d,p,u)}switch(s){case"input":Fa(i,o);break;case"textarea":gf(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?kr(i,!!o.multiple,m,!1):f!==!!o.multiple&&(o.defaultValue!=null?kr(i,!!o.multiple,o.defaultValue,!0):kr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ii]=o}catch(k){ze(e,e.return,k)}}break;case 6:if(Lt(t,e),$t(e),r&4){if(e.stateNode===null)throw Error(K(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(k){ze(e,e.return,k)}}break;case 3:if(Lt(t,e),$t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ei(t.containerInfo)}catch(k){ze(e,e.return,k)}break;case 4:Lt(t,e),$t(e);break;case 13:Lt(t,e),$t(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ic=Te())),r&4&&yd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(qe=(u=qe)||d,Lt(t,e),qe=u):Lt(t,e),$t(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(X=e,d=e.child;d!==null;){for(p=X=d;X!==null;){switch(f=X,m=f.child,f.tag){case 0:case 11:case 14:case 15:gi(4,f,f.return);break;case 1:yr(f,f.return);var b=f.stateNode;if(typeof b.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(k){ze(r,n,k)}}break;case 5:yr(f,f.return);break;case 22:if(f.memoizedState!==null){bd(p);continue}}m!==null?(m.return=f,X=m):bd(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=vf("display",a))}catch(k){ze(e,e.return,k)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(k){ze(e,e.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Lt(t,e),$t(e),r&4&&yd(e);break;case 21:break;default:Lt(t,e),$t(e)}}function $t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Hm(n)){var r=n;break e}n=n.return}throw Error(K(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Si(i,""),r.flags&=-33);var o=xd(e);bs(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=xd(e);vs(e,s,a);break;default:throw Error(K(161))}}catch(c){ze(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function av(e,t,n){X=e,Gm(e)}function Gm(e,t,n){for(var r=(e.mode&1)!==0;X!==null;){var i=X,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||go;if(!a){var s=i.alternate,c=s!==null&&s.memoizedState!==null||qe;s=go;var u=qe;if(go=a,(qe=c)&&!u)for(X=i;X!==null;)a=X,c=a.child,a.tag===22&&a.memoizedState!==null?kd(i):c!==null?(c.return=a,X=c):kd(i);for(;o!==null;)X=o,Gm(o),o=o.sibling;X=i,go=s,qe=u}vd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,X=o):vd(e)}}function vd(e){for(;X!==null;){var t=X;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:qe||Sl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!qe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:It(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&rd(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}rd(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Ei(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(K(163))}qe||t.flags&512&&ys(t)}catch(f){ze(t,t.return,f)}}if(t===e){X=null;break}if(n=t.sibling,n!==null){n.return=t.return,X=n;break}X=t.return}}function bd(e){for(;X!==null;){var t=X;if(t===e){X=null;break}var n=t.sibling;if(n!==null){n.return=t.return,X=n;break}X=t.return}}function kd(e){for(;X!==null;){var t=X;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Sl(4,t)}catch(c){ze(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){ze(t,i,c)}}var o=t.return;try{ys(t)}catch(c){ze(t,o,c)}break;case 5:var a=t.return;try{ys(t)}catch(c){ze(t,a,c)}}}catch(c){ze(t,t.return,c)}if(t===e){X=null;break}var s=t.sibling;if(s!==null){s.return=t.return,X=s;break}X=t.return}}var sv=Math.ceil,ol=cn.ReactCurrentDispatcher,Pc=cn.ReactCurrentOwner,Et=cn.ReactCurrentBatchConfig,fe=0,De=null,Le=null,Be=0,dt=0,vr=Ln(0),Re=0,Fi=null,Yn=0,_l=0,Lc=0,xi=null,tt=null,Ic=0,Rr=1/0,Yt=null,ll=!1,ks=null,Sn=null,xo=!1,xn=null,al=0,yi=0,ws=null,Io=-1,Ao=0;function Je(){return fe&6?Te():Io!==-1?Io:Io=Te()}function _n(e){return e.mode&1?fe&2&&Be!==0?Be&-Be:Hy.transition!==null?(Ao===0&&(Ao=Lf()),Ao):(e=xe,e!==0||(e=window.event,e=e===void 0?16:Ff(e.type)),e):1}function Ot(e,t,n,r){if(50<yi)throw yi=0,ws=null,Error(K(185));qi(e,n,r),(!(fe&2)||e!==De)&&(e===De&&(!(fe&2)&&(_l|=n),Re===4&&hn(e,Be)),ot(e,r),n===1&&fe===0&&!(t.mode&1)&&(Rr=Te()+500,kl&&In()))}function ot(e,t){var n=e.callbackNode;Hx(e,t);var r=Wo(e,e===De?Be:0);if(r===0)n!==null&&Tu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Tu(n),t===1)e.tag===0?Wy(wd.bind(null,e)):im(wd.bind(null,e)),$y(function(){!(fe&6)&&In()}),n=null;else{switch(If(r)){case 1:n=oc;break;case 4:n=Tf;break;case 16:n=Vo;break;case 536870912:n=Pf;break;default:n=Vo}n=nh(n,Qm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Qm(e,t){if(Io=-1,Ao=0,fe&6)throw Error(K(327));var n=e.callbackNode;if(Cr()&&e.callbackNode!==n)return null;var r=Wo(e,e===De?Be:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=sl(e,r);else{t=r;var i=fe;fe|=2;var o=Ym();(De!==e||Be!==t)&&(Yt=null,Rr=Te()+500,Wn(e,t));do try{dv();break}catch(s){Jm(e,s)}while(!0);yc(),ol.current=o,fe=i,Le!==null?t=0:(De=null,Be=0,t=Re)}if(t!==0){if(t===2&&(i=Qa(e),i!==0&&(r=i,t=js(e,i))),t===1)throw n=Fi,Wn(e,0),hn(e,r),ot(e,Te()),n;if(t===6)hn(e,r);else{if(i=e.current.alternate,!(r&30)&&!cv(i)&&(t=sl(e,r),t===2&&(o=Qa(e),o!==0&&(r=o,t=js(e,o))),t===1))throw n=Fi,Wn(e,0),hn(e,r),ot(e,Te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(K(345));case 2:Dn(e,tt,Yt);break;case 3:if(hn(e,r),(r&130023424)===r&&(t=Ic+500-Te(),10<t)){if(Wo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=rs(Dn.bind(null,e,tt,Yt),t);break}Dn(e,tt,Yt);break;case 4:if(hn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Mt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sv(r/1960))-r,10<r){e.timeoutHandle=rs(Dn.bind(null,e,tt,Yt),r);break}Dn(e,tt,Yt);break;case 5:Dn(e,tt,Yt);break;default:throw Error(K(329))}}}return ot(e,Te()),e.callbackNode===n?Qm.bind(null,e):null}function js(e,t){var n=xi;return e.current.memoizedState.isDehydrated&&(Wn(e,t).flags|=256),e=sl(e,t),e!==2&&(t=tt,tt=n,t!==null&&Ss(t)),e}function Ss(e){tt===null?tt=e:tt.push.apply(tt,e)}function cv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Dt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function hn(e,t){for(t&=~Lc,t&=~_l,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Mt(t),r=1<<n;e[n]=-1,t&=~r}}function wd(e){if(fe&6)throw Error(K(327));Cr();var t=Wo(e,0);if(!(t&1))return ot(e,Te()),null;var n=sl(e,t);if(e.tag!==0&&n===2){var r=Qa(e);r!==0&&(t=r,n=js(e,r))}if(n===1)throw n=Fi,Wn(e,0),hn(e,t),ot(e,Te()),n;if(n===6)throw Error(K(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dn(e,tt,Yt),ot(e,Te()),null}function Ac(e,t){var n=fe;fe|=1;try{return e(t)}finally{fe=n,fe===0&&(Rr=Te()+500,kl&&In())}}function Xn(e){xn!==null&&xn.tag===0&&!(fe&6)&&Cr();var t=fe;fe|=1;var n=Et.transition,r=xe;try{if(Et.transition=null,xe=1,e)return e()}finally{xe=r,Et.transition=n,fe=t,!(fe&6)&&In()}}function Rc(){dt=vr.current,je(vr)}function Wn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Fy(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(hc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qo();break;case 3:Ir(),je(rt),je(Ke),Sc();break;case 5:jc(r);break;case 4:Ir();break;case 13:je(Ce);break;case 19:je(Ce);break;case 10:vc(r.type._context);break;case 22:case 23:Rc()}n=n.return}if(De=e,Le=e=Cn(e.current,null),Be=dt=t,Re=0,Fi=null,Lc=_l=Yn=0,tt=xi=null,Bn!==null){for(t=0;t<Bn.length;t++)if(n=Bn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Bn=null}return e}function Jm(e,t){do{var n=Le;try{if(yc(),To.current=il,rl){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}rl=!1}if(Jn=0,Me=Ae=Ne=null,hi=!1,Mi=0,Pc.current=null,n===null||n.return===null){Re=1,Fi=t,Le=null;break}e:{var o=e,a=n.return,s=n,c=t;if(t=Be,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=s,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=cd(a);if(m!==null){m.flags&=-257,ud(m,a,s,o,t),m.mode&1&&sd(o,u,t),t=m,c=u;var b=t.updateQueue;if(b===null){var k=new Set;k.add(c),t.updateQueue=k}else b.add(c);break e}else{if(!(t&1)){sd(o,u,t),Mc();break e}c=Error(K(426))}}else if(Se&&s.mode&1){var E=cd(a);if(E!==null){!(E.flags&65536)&&(E.flags|=256),ud(E,a,s,o,t),gc(Ar(c,s));break e}}o=c=Ar(c,s),Re!==4&&(Re=2),xi===null?xi=[o]:xi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=Im(o,c,t);nd(o,g);break e;case 1:s=c;var h=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Sn===null||!Sn.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var P=Am(o,s,t);nd(o,P);break e}}o=o.return}while(o!==null)}Zm(n)}catch(C){t=C,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function Ym(){var e=ol.current;return ol.current=il,e===null?il:e}function Mc(){(Re===0||Re===3||Re===2)&&(Re=4),De===null||!(Yn&268435455)&&!(_l&268435455)||hn(De,Be)}function sl(e,t){var n=fe;fe|=2;var r=Ym();(De!==e||Be!==t)&&(Yt=null,Wn(e,t));do try{uv();break}catch(i){Jm(e,i)}while(!0);if(yc(),fe=n,ol.current=r,Le!==null)throw Error(K(261));return De=null,Be=0,Re}function uv(){for(;Le!==null;)Xm(Le)}function dv(){for(;Le!==null&&!Mx();)Xm(Le)}function Xm(e){var t=th(e.alternate,e,dt);e.memoizedProps=e.pendingProps,t===null?Zm(e):Le=t,Pc.current=null}function Zm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=iv(n,t),n!==null){n.flags&=32767,Le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,Le=null;return}}else if(n=rv(n,t,dt),n!==null){Le=n;return}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);Re===0&&(Re=5)}function Dn(e,t,n){var r=xe,i=Et.transition;try{Et.transition=null,xe=1,pv(e,t,n,r)}finally{Et.transition=i,xe=r}return null}function pv(e,t,n,r){do Cr();while(xn!==null);if(fe&6)throw Error(K(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(K(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(qx(e,o),e===De&&(Le=De=null,Be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xo||(xo=!0,nh(Vo,function(){return Cr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Et.transition,Et.transition=null;var a=xe;xe=1;var s=fe;fe|=4,Pc.current=null,lv(e,n),Km(n,e),Ly(ts),Ho=!!es,ts=es=null,e.current=n,av(n),Ox(),fe=s,xe=a,Et.transition=o}else e.current=n;if(xo&&(xo=!1,xn=e,al=i),o=e.pendingLanes,o===0&&(Sn=null),$x(n.stateNode),ot(e,Te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ll)throw ll=!1,e=ks,ks=null,e;return al&1&&e.tag!==0&&Cr(),o=e.pendingLanes,o&1?e===ws?yi++:(yi=0,ws=e):yi=0,In(),null}function Cr(){if(xn!==null){var e=If(al),t=Et.transition,n=xe;try{if(Et.transition=null,xe=16>e?16:e,xn===null)var r=!1;else{if(e=xn,xn=null,al=0,fe&6)throw Error(K(331));var i=fe;for(fe|=4,X=e.current;X!==null;){var o=X,a=o.child;if(X.flags&16){var s=o.deletions;if(s!==null){for(var c=0;c<s.length;c++){var u=s[c];for(X=u;X!==null;){var d=X;switch(d.tag){case 0:case 11:case 15:gi(8,d,o)}var p=d.child;if(p!==null)p.return=d,X=p;else for(;X!==null;){d=X;var f=d.sibling,m=d.return;if(Wm(d),d===u){X=null;break}if(f!==null){f.return=m,X=f;break}X=m}}}var b=o.alternate;if(b!==null){var k=b.child;if(k!==null){b.child=null;do{var E=k.sibling;k.sibling=null,k=E}while(k!==null)}}X=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,X=a;else e:for(;X!==null;){if(o=X,o.flags&2048)switch(o.tag){case 0:case 11:case 15:gi(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,X=g;break e}X=o.return}}var h=e.current;for(X=h;X!==null;){a=X;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,X=y;else e:for(a=h;X!==null;){if(s=X,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Sl(9,s)}}catch(C){ze(s,s.return,C)}if(s===a){X=null;break e}var P=s.sibling;if(P!==null){P.return=s.return,X=P;break e}X=s.return}}if(fe=i,In(),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(gl,e)}catch{}r=!0}return r}finally{xe=n,Et.transition=t}}return!1}function jd(e,t,n){t=Ar(n,t),t=Im(e,t,1),e=jn(e,t,1),t=Je(),e!==null&&(qi(e,1,t),ot(e,t))}function ze(e,t,n){if(e.tag===3)jd(e,e,n);else for(;t!==null;){if(t.tag===3){jd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sn===null||!Sn.has(r))){e=Ar(n,e),e=Am(t,e,1),t=jn(t,e,1),e=Je(),t!==null&&(qi(t,1,e),ot(t,e));break}}t=t.return}}function fv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&n,De===e&&(Be&n)===n&&(Re===4||Re===3&&(Be&130023424)===Be&&500>Te()-Ic?Wn(e,0):Lc|=n),ot(e,t)}function eh(e,t){t===0&&(e.mode&1?(t=lo,lo<<=1,!(lo&130023424)&&(lo=4194304)):t=1);var n=Je();e=an(e,t),e!==null&&(qi(e,t,n),ot(e,n))}function mv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),eh(e,n)}function hv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(K(314))}r!==null&&r.delete(t),eh(e,n)}var th;th=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||rt.current)nt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return nt=!1,nv(e,t,n);nt=!!(e.flags&131072)}else nt=!1,Se&&t.flags&1048576&&om(t,Xo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Lo(e,t),e=t.pendingProps;var i=Tr(t,Ke.current);_r(t,n),i=Cc(null,t,r,e,i,n);var o=Nc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,it(r)?(o=!0,Jo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,kc(t),i.updater=jl,t.stateNode=i,i._reactInternals=t,us(t,r,e,n),t=fs(null,t,r,!0,o,n)):(t.tag=0,Se&&o&&mc(t),Qe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Lo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=xv(r),e=It(r,e),i){case 0:t=ps(null,t,r,e,n);break e;case 1:t=fd(null,t,r,e,n);break e;case 11:t=dd(null,t,r,e,n);break e;case 14:t=pd(null,t,r,It(r.type,e),n);break e}throw Error(K(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:It(r,i),ps(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:It(r,i),fd(e,t,r,i,n);case 3:e:{if(Dm(t),e===null)throw Error(K(387));r=t.pendingProps,o=t.memoizedState,i=o.element,dm(e,t),tl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ar(Error(K(423)),t),t=md(e,t,r,n,i);break e}else if(r!==i){i=Ar(Error(K(424)),t),t=md(e,t,r,n,i);break e}else for(ft=wn(t.stateNode.containerInfo.firstChild),ht=t,Se=!0,Rt=null,n=cm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Pr(),r===i){t=sn(e,t,n);break e}Qe(e,t,r,n)}t=t.child}return t;case 5:return pm(t),e===null&&as(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ns(r,i)?a=null:o!==null&&ns(r,o)&&(t.flags|=32),Om(e,t),Qe(e,t,a,n),t.child;case 6:return e===null&&as(t),null;case 13:return Fm(e,t,n);case 4:return wc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Lr(t,null,r,n):Qe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:It(r,i),dd(e,t,r,i,n);case 7:return Qe(e,t,t.pendingProps,n),t.child;case 8:return Qe(e,t,t.pendingProps.children,n),t.child;case 12:return Qe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,be(Zo,r._currentValue),r._currentValue=a,o!==null)if(Dt(o.value,a)){if(o.children===i.children&&!rt.current){t=sn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=nn(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ss(o.return,n,t),s.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(K(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),ss(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Qe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,_r(t,n),i=zt(i),r=r(i),t.flags|=1,Qe(e,t,r,n),t.child;case 14:return r=t.type,i=It(r,t.pendingProps),i=It(r.type,i),pd(e,t,r,i,n);case 15:return Rm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:It(r,i),Lo(e,t),t.tag=1,it(r)?(e=!0,Jo(t)):e=!1,_r(t,n),Lm(t,r,i),us(t,r,i,n),fs(null,t,r,!0,e,n);case 19:return $m(e,t,n);case 22:return Mm(e,t,n)}throw Error(K(156,t.tag))};function nh(e,t){return zf(e,t)}function gv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,t,n,r){return new gv(e,t,n,r)}function Oc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xv(e){if(typeof e=="function")return Oc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===nc)return 11;if(e===rc)return 14}return 2}function Cn(e,t){var n=e.alternate;return n===null?(n=Ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ro(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Oc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case cr:return Hn(n.children,i,o,t);case tc:a=8,i|=8;break;case Aa:return e=Ct(12,n,t,i|2),e.elementType=Aa,e.lanes=o,e;case Ra:return e=Ct(13,n,t,i),e.elementType=Ra,e.lanes=o,e;case Ma:return e=Ct(19,n,t,i),e.elementType=Ma,e.lanes=o,e;case pf:return Cl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case uf:a=10;break e;case df:a=9;break e;case nc:a=11;break e;case rc:a=14;break e;case pn:a=16,r=null;break e}throw Error(K(130,e==null?e:typeof e,""))}return t=Ct(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Hn(e,t,n,r){return e=Ct(7,e,r,t),e.lanes=n,e}function Cl(e,t,n,r){return e=Ct(22,e,r,t),e.elementType=pf,e.lanes=n,e.stateNode={isHidden:!1},e}function ca(e,t,n){return e=Ct(6,e,null,t),e.lanes=n,e}function ua(e,t,n){return t=Ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function yv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wl(0),this.expirationTimes=Wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dc(e,t,n,r,i,o,a,s,c){return e=new yv(e,t,n,s,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ct(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kc(o),e}function vv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function rh(e){if(!e)return zn;e=e._reactInternals;e:{if(er(e)!==e||e.tag!==1)throw Error(K(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(it(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(K(171))}if(e.tag===1){var n=e.type;if(it(n))return rm(e,n,t)}return t}function ih(e,t,n,r,i,o,a,s,c){return e=Dc(n,r,!0,e,i,o,a,s,c),e.context=rh(null),n=e.current,r=Je(),i=_n(n),o=nn(r,i),o.callback=t??null,jn(n,o,i),e.current.lanes=i,qi(e,i,r),ot(e,r),e}function Nl(e,t,n,r){var i=t.current,o=Je(),a=_n(i);return n=rh(n),t.context===null?t.context=n:t.pendingContext=n,t=nn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=jn(i,t,a),e!==null&&(Ot(e,i,a,o),zo(e,i,a)),a}function cl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fc(e,t){Sd(e,t),(e=e.alternate)&&Sd(e,t)}function bv(){return null}var oh=typeof reportError=="function"?reportError:function(e){console.error(e)};function $c(e){this._internalRoot=e}El.prototype.render=$c.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(K(409));Nl(e,t,null,null)};El.prototype.unmount=$c.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xn(function(){Nl(null,e,null,null)}),t[ln]=null}};function El(e){this._internalRoot=e}El.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<mn.length&&t!==0&&t<mn[n].priority;n++);mn.splice(n,0,e),n===0&&Df(e)}};function Bc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _d(){}function kv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=cl(a);o.call(u)}}var a=ih(t,r,e,0,null,!1,!1,"",_d);return e._reactRootContainer=a,e[ln]=a.current,Pi(e.nodeType===8?e.parentNode:e),Xn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=cl(c);s.call(u)}}var c=Dc(e,0,!1,null,null,!1,!1,"",_d);return e._reactRootContainer=c,e[ln]=c.current,Pi(e.nodeType===8?e.parentNode:e),Xn(function(){Nl(t,c,n,r)}),c}function Tl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var c=cl(a);s.call(c)}}Nl(t,a,e,i)}else a=kv(n,t,e,i,r);return cl(a)}Af=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ai(t.pendingLanes);n!==0&&(lc(t,n|1),ot(t,Te()),!(fe&6)&&(Rr=Te()+500,In()))}break;case 13:Xn(function(){var r=an(e,1);if(r!==null){var i=Je();Ot(r,e,1,i)}}),Fc(e,1)}};ac=function(e){if(e.tag===13){var t=an(e,134217728);if(t!==null){var n=Je();Ot(t,e,134217728,n)}Fc(e,134217728)}};Rf=function(e){if(e.tag===13){var t=_n(e),n=an(e,t);if(n!==null){var r=Je();Ot(n,e,t,r)}Fc(e,t)}};Mf=function(){return xe};Of=function(e,t){var n=xe;try{return xe=e,t()}finally{xe=n}};qa=function(e,t,n){switch(t){case"input":if(Fa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=bl(r);if(!i)throw Error(K(90));mf(r),Fa(r,i)}}}break;case"textarea":gf(e,n);break;case"select":t=n.value,t!=null&&kr(e,!!n.multiple,t,!1)}};jf=Ac;Sf=Xn;var wv={usingClientEntryPoint:!1,Events:[Gi,fr,bl,kf,wf,Ac]},ei={findFiberByHostInstance:$n,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jv={bundleType:ei.bundleType,version:ei.version,rendererPackageName:ei.rendererPackageName,rendererConfig:ei.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Nf(e),e===null?null:e.stateNode},findFiberByHostInstance:ei.findFiberByHostInstance||bv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yo.isDisabled&&yo.supportsFiber)try{gl=yo.inject(jv),Ht=yo}catch{}}xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wv;xt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bc(t))throw Error(K(200));return vv(e,t,null,n)};xt.createRoot=function(e,t){if(!Bc(e))throw Error(K(299));var n=!1,r="",i=oh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Dc(e,1,!1,null,null,n,!1,r,i),e[ln]=t.current,Pi(e.nodeType===8?e.parentNode:e),new $c(t)};xt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(K(188)):(e=Object.keys(e).join(","),Error(K(268,e)));return e=Nf(t),e=e===null?null:e.stateNode,e};xt.flushSync=function(e){return Xn(e)};xt.hydrate=function(e,t,n){if(!zl(t))throw Error(K(200));return Tl(null,e,t,!0,n)};xt.hydrateRoot=function(e,t,n){if(!Bc(e))throw Error(K(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=oh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=ih(t,null,e,1,n??null,i,!1,o,a),e[ln]=t.current,Pi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new El(t)};xt.render=function(e,t,n){if(!zl(t))throw Error(K(200));return Tl(null,e,t,!1,n)};xt.unmountComponentAtNode=function(e){if(!zl(e))throw Error(K(40));return e._reactRootContainer?(Xn(function(){Tl(null,null,e,!1,function(){e._reactRootContainer=null,e[ln]=null})}),!0):!1};xt.unstable_batchedUpdates=Ac;xt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zl(n))throw Error(K(200));if(e==null||e._reactInternals===void 0)throw Error(K(38));return Tl(e,t,n,!1,r)};xt.version="18.3.1-next-f1338f8080-20240426";function lh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lh)}catch(e){console.error(e)}}lh(),lf.exports=xt;var Sv=lf.exports,Cd=Sv;La.createRoot=Cd.createRoot,La.hydrateRoot=Cd.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $i(){return $i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$i.apply(this,arguments)}var yn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(yn||(yn={}));const Nd="popstate";function _v(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:s}=r.location;return _s("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ah(i)}return Nv(t,n,null,e)}function Ie(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Uc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Cv(){return Math.random().toString(36).substr(2,8)}function Ed(e,t){return{usr:e.state,key:e.key,idx:t}}function _s(e,t,n,r){return n===void 0&&(n=null),$i({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ur(t):t,{state:n,key:t&&t.key||r||Cv()})}function ah(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ur(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Nv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=yn.Pop,c=null,u=d();u==null&&(u=0,a.replaceState($i({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function p(){s=yn.Pop;let E=d(),g=E==null?null:E-u;u=E,c&&c({action:s,location:k.location,delta:g})}function f(E,g){s=yn.Push;let h=_s(k.location,E,g);u=d()+1;let y=Ed(h,u),P=k.createHref(h);try{a.pushState(y,"",P)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(P)}o&&c&&c({action:s,location:k.location,delta:1})}function m(E,g){s=yn.Replace;let h=_s(k.location,E,g);u=d();let y=Ed(h,u),P=k.createHref(h);a.replaceState(y,"",P),o&&c&&c({action:s,location:k.location,delta:0})}function b(E){let g=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof E=="string"?E:ah(E);return h=h.replace(/ $/,"%20"),Ie(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let k={get action(){return s},get location(){return e(i,a)},listen(E){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Nd,p),c=E,()=>{i.removeEventListener(Nd,p),c=null}},createHref(E){return t(i,E)},createURL:b,encodeLocation(E){let g=b(E);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:m,go(E){return a.go(E)}};return k}var zd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(zd||(zd={}));function Ev(e,t,n){return n===void 0&&(n="/"),zv(e,t,n)}function zv(e,t,n,r){let i=typeof t=="string"?Ur(t):t,o=uh(i.pathname||"/",n);if(o==null)return null;let a=sh(e);Tv(a);let s=null;for(let c=0;s==null&&c<a.length;++c){let u=Uv(o);s=Fv(a[c],u)}return s}function sh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let c={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(Ie(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=qn([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(Ie(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),sh(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Ov(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let c of ch(o.path))i(o,a,c)}),t}function ch(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=ch(r.join("/")),s=[];return s.push(...a.map(c=>c===""?o:[o,c].join("/"))),i&&s.push(...a),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function Tv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Dv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Pv=/^:[\w-]+$/,Lv=3,Iv=2,Av=1,Rv=10,Mv=-2,Td=e=>e==="*";function Ov(e,t){let n=e.split("/"),r=n.length;return n.some(Td)&&(r+=Mv),t&&(r+=Iv),n.filter(i=>!Td(i)).reduce((i,o)=>i+(Pv.test(o)?Lv:o===""?Av:Rv),r)}function Dv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Fv(e,t,n){let{routesMeta:r}=e,i={},o="/",a=[];for(let s=0;s<r.length;++s){let c=r[s],u=s===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",p=$v({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),f=c.route;if(!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:qn([o,p.pathname]),pathnameBase:Kv(qn([o,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(o=qn([o,p.pathnameBase]))}return a}function $v(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Bv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:f,isOptional:m}=d;if(f==="*"){let k=s[p]||"";a=o.slice(0,o.length-k.length).replace(/(.)\/+$/,"$1")}const b=s[p];return m&&!b?u[f]=void 0:u[f]=(b||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function Bv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Uc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,c)=>(r.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Uv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Uc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function uh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Vv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wv=e=>Vv.test(e);function Hv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ur(e):e,o;if(n)if(Wv(n))o=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),Uc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?o=Pd(n.substring(1),"/"):o=Pd(n,t)}else o=t;return{pathname:o,search:Gv(r),hash:Qv(i)}}function Pd(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function da(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function qv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function dh(e,t){let n=qv(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ph(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ur(e):(i=$i({},e),Ie(!i.pathname||!i.pathname.includes("?"),da("?","pathname","search",i)),Ie(!i.pathname||!i.pathname.includes("#"),da("#","pathname","hash",i)),Ie(!i.search||!i.search.includes("#"),da("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(a==null)s=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}s=p>=0?t[p]:"/"}let c=Hv(i,s),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const qn=e=>e.join("/").replace(/\/\/+/g,"/"),Kv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Gv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Qv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Jv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const fh=["post","put","patch","delete"];new Set(fh);const Yv=["get",...fh];new Set(Yv);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bi(){return Bi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bi.apply(this,arguments)}const Vc=_.createContext(null),Xv=_.createContext(null),Ji=_.createContext(null),Pl=_.createContext(null),An=_.createContext({outlet:null,matches:[],isDataRoute:!1}),mh=_.createContext(null);function Yi(){return _.useContext(Pl)!=null}function Wc(){return Yi()||Ie(!1),_.useContext(Pl).location}function hh(e){_.useContext(Ji).static||_.useLayoutEffect(e)}function Hc(){let{isDataRoute:e}=_.useContext(An);return e?p1():Zv()}function Zv(){Yi()||Ie(!1);let e=_.useContext(Vc),{basename:t,future:n,navigator:r}=_.useContext(Ji),{matches:i}=_.useContext(An),{pathname:o}=Wc(),a=JSON.stringify(dh(i,n.v7_relativeSplatPath)),s=_.useRef(!1);return hh(()=>{s.current=!0}),_.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let p=ph(u,JSON.parse(a),o,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:qn([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,a,o,e])}function e1(){let{matches:e}=_.useContext(An),t=e[e.length-1];return t?t.params:{}}function t1(e,t){return n1(e,t)}function n1(e,t,n,r){Yi()||Ie(!1);let{navigator:i}=_.useContext(Ji),{matches:o}=_.useContext(An),a=o[o.length-1],s=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=Wc(),d;if(t){var p;let E=typeof t=="string"?Ur(t):t;c==="/"||(p=E.pathname)!=null&&p.startsWith(c)||Ie(!1),d=E}else d=u;let f=d.pathname||"/",m=f;if(c!=="/"){let E=c.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(E.length).join("/")}let b=Ev(e,{pathname:m}),k=a1(b&&b.map(E=>Object.assign({},E,{params:Object.assign({},s,E.params),pathname:qn([c,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?c:qn([c,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),o,n,r);return t&&k?_.createElement(Pl.Provider,{value:{location:Bi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:yn.Pop}},k):k}function r1(){let e=d1(),t=Jv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},t),n?_.createElement("pre",{style:i},n):null,null)}const i1=_.createElement(r1,null);class o1 extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?_.createElement(An.Provider,{value:this.props.routeContext},_.createElement(mh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function l1(e){let{routeContext:t,match:n,children:r}=e,i=_.useContext(Vc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(An.Provider,{value:t},r)}function a1(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let d=a.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);d>=0||Ie(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:m}=n,b=p.route.loader&&f[p.route.id]===void 0&&(!m||m[p.route.id]===void 0);if(p.route.lazy||b){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,p,f)=>{let m,b=!1,k=null,E=null;n&&(m=s&&p.route.id?s[p.route.id]:void 0,k=p.route.errorElement||i1,c&&(u<0&&f===0?(f1("route-fallback"),b=!0,E=null):u===f&&(b=!0,E=p.route.hydrateFallbackElement||null)));let g=t.concat(a.slice(0,f+1)),h=()=>{let y;return m?y=k:b?y=E:p.route.Component?y=_.createElement(p.route.Component,null):p.route.element?y=p.route.element:y=d,_.createElement(l1,{match:p,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:y})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?_.createElement(o1,{location:n.location,revalidation:n.revalidation,component:k,error:m,children:h(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):h()},null)}var gh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(gh||{}),xh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(xh||{});function s1(e){let t=_.useContext(Vc);return t||Ie(!1),t}function c1(e){let t=_.useContext(Xv);return t||Ie(!1),t}function u1(e){let t=_.useContext(An);return t||Ie(!1),t}function yh(e){let t=u1(),n=t.matches[t.matches.length-1];return n.route.id||Ie(!1),n.route.id}function d1(){var e;let t=_.useContext(mh),n=c1(),r=yh();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function p1(){let{router:e}=s1(gh.UseNavigateStable),t=yh(xh.UseNavigateStable),n=_.useRef(!1);return hh(()=>{n.current=!0}),_.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Bi({fromRouteId:t},o)))},[e,t])}const Ld={};function f1(e,t,n){Ld[e]||(Ld[e]=!0)}function m1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function h1(e){let{to:t,replace:n,state:r,relative:i}=e;Yi()||Ie(!1);let{future:o,static:a}=_.useContext(Ji),{matches:s}=_.useContext(An),{pathname:c}=Wc(),u=Hc(),d=ph(t,dh(s,o.v7_relativeSplatPath),c,i==="path"),p=JSON.stringify(d);return _.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:i}),[u,p,i,n,r]),null}function ar(e){Ie(!1)}function g1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=yn.Pop,navigator:o,static:a=!1,future:s}=e;Yi()&&Ie(!1);let c=t.replace(/^\/*/,"/"),u=_.useMemo(()=>({basename:c,navigator:o,static:a,future:Bi({v7_relativeSplatPath:!1},s)}),[c,s,o,a]);typeof r=="string"&&(r=Ur(r));let{pathname:d="/",search:p="",hash:f="",state:m=null,key:b="default"}=r,k=_.useMemo(()=>{let E=uh(d,c);return E==null?null:{location:{pathname:E,search:p,hash:f,state:m,key:b},navigationType:i}},[c,d,p,f,m,b,i]);return k==null?null:_.createElement(Ji.Provider,{value:u},_.createElement(Pl.Provider,{children:n,value:k}))}function x1(e){let{children:t,location:n}=e;return t1(Cs(t),n)}new Promise(()=>{});function Cs(e,t){t===void 0&&(t=[]);let n=[];return _.Children.forEach(e,(r,i)=>{if(!_.isValidElement(r))return;let o=[...t,i];if(r.type===_.Fragment){n.push.apply(n,Cs(r.props.children,o));return}r.type!==ar&&Ie(!1),!r.props.index||!r.props.children||Ie(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Cs(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const y1="6";try{window.__reactRouterVersion=y1}catch{}const v1="startTransition",Id=fx[v1];function b1(e){let{basename:t,children:n,future:r,window:i}=e,o=_.useRef();o.current==null&&(o.current=_v({window:i,v5Compat:!0}));let a=o.current,[s,c]=_.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=_.useCallback(p=>{u&&Id?Id(()=>c(p)):c(p)},[c,u]);return _.useLayoutEffect(()=>a.listen(d),[a,d]),_.useEffect(()=>m1(r),[r]),_.createElement(g1,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}var Ad;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ad||(Ad={}));var Rd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Rd||(Rd={}));const k1={},Md=e=>{let t;const n=new Set,r=(d,p)=>{const f=typeof d=="function"?d(t):d;if(!Object.is(f,t)){const m=t;t=p??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(b=>b(t,m))}},i=()=>t,c={setState:r,getState:i,getInitialState:()=>u,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(k1?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,c);return c},w1=e=>e?Md(e):Md;var vh={exports:{}},bh={},kh={exports:{}},wh={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mr=_;function j1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var S1=typeof Object.is=="function"?Object.is:j1,_1=Mr.useState,C1=Mr.useEffect,N1=Mr.useLayoutEffect,E1=Mr.useDebugValue;function z1(e,t){var n=t(),r=_1({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return N1(function(){i.value=n,i.getSnapshot=t,pa(i)&&o({inst:i})},[e,n,t]),C1(function(){return pa(i)&&o({inst:i}),e(function(){pa(i)&&o({inst:i})})},[e]),E1(n),n}function pa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!S1(e,n)}catch{return!0}}function T1(e,t){return t()}var P1=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?T1:z1;wh.useSyncExternalStore=Mr.useSyncExternalStore!==void 0?Mr.useSyncExternalStore:P1;kh.exports=wh;var L1=kh.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ll=_,I1=L1;function A1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var R1=typeof Object.is=="function"?Object.is:A1,M1=I1.useSyncExternalStore,O1=Ll.useRef,D1=Ll.useEffect,F1=Ll.useMemo,$1=Ll.useDebugValue;bh.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=O1(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=F1(function(){function c(m){if(!u){if(u=!0,d=m,m=r(m),i!==void 0&&a.hasValue){var b=a.value;if(i(b,m))return p=b}return p=m}if(b=p,R1(d,m))return b;var k=r(m);return i!==void 0&&i(b,k)?(d=m,b):(d=m,p=k)}var u=!1,d,p,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,r,i]);var s=M1(e,o[0],o[1]);return D1(function(){a.hasValue=!0,a.value=s},[s]),$1(s),s};vh.exports=bh;var B1=vh.exports;const U1=ml(B1),jh={},{useDebugValue:V1}=Nt,{useSyncExternalStoreWithSelector:W1}=U1;let Od=!1;const H1=e=>e;function q1(e,t=H1,n){(jh?"production":void 0)!=="production"&&n&&!Od&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Od=!0);const r=W1(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return V1(r),r}const Dd=e=>{(jh?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?w1(e):e,n=(r,i)=>q1(t,r,i);return Object.assign(n,t),n},K1=e=>e?Dd(e):Dd,vt=K1((e,t)=>({project:null,selectedAgentId:null,selectedToolId:null,mcpServers:[],builtinTools:[],isRunning:!1,runEvents:[],watches:[],activeTab:"app",sidebarOpen:!0,hasUnsavedChanges:!1,runAgentId:null,currentSessionId:null,setProject:n=>{var i;const r=((i=n==null?void 0:n.watches)==null?void 0:i.map(o=>({...o,result:void 0,error:void 0,isLoading:!1,lastRun:void 0,history:[]})))||[];e({project:n,watches:r})},setSelectedAgentId:n=>e({selectedAgentId:n}),setSelectedToolId:n=>e({selectedToolId:n}),setMcpServers:n=>e({mcpServers:n}),setBuiltinTools:n=>e({builtinTools:n}),setIsRunning:n=>e({isRunning:n}),addRunEvent:n=>e(r=>({runEvents:[...r.runEvents,n]})),clearRunEvents:()=>e({runEvents:[]}),setWatches:n=>e({watches:n}),updateWatch:(n,r)=>e(i=>{const o=i.watches.map(s=>s.id===n?{...s,...r}:s);if(("serverName"in r||"toolName"in r||"args"in r||"transform"in r)&&i.project){const s=o.map(({id:c,serverName:u,toolName:d,args:p,transform:f})=>({id:c,serverName:u,toolName:d,args:p,transform:f}));return{watches:o,project:{...i.project,watches:s},hasUnsavedChanges:!0}}return{watches:o}}),addWatch:n=>e(r=>{const i=[...r.watches,n],{project:o}=r;if(o){const a=i.map(({id:s,serverName:c,toolName:u,args:d,transform:p})=>({id:s,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...o,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),removeWatch:n=>e(r=>{const i=r.watches.filter(a=>a.id!==n),{project:o}=r;if(o){const a=i.map(({id:s,serverName:c,toolName:u,args:d,transform:p})=>({id:s,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...o,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),clearWatchHistories:()=>e(n=>({watches:n.watches.map(r=>({...r,history:[],result:void 0,error:void 0}))})),setActiveTab:n=>e({activeTab:n}),setSidebarOpen:n=>e({sidebarOpen:n}),setHasUnsavedChanges:n=>e({hasUnsavedChanges:n}),setRunAgentId:n=>e({runAgentId:n}),setCurrentSessionId:n=>e({currentSessionId:n}),updateProject:n=>{const{project:r}=t();r&&e({project:{...r,...n}})},addAgent:n=>{const{project:r}=t();r&&e({project:{...r,agents:[...r.agents,n]}})},updateAgent:(n,r)=>{const{project:i}=t();i&&e({project:{...i,agents:i.agents.map(o=>o.id===n?{...o,...r}:o)}})},removeAgent:n=>{const{project:r,selectedAgentId:i}=t();r&&e({project:{...r,agents:r.agents.filter(o=>o.id!==n)},selectedAgentId:i===n?null:i})},addCustomTool:n=>{const{project:r}=t();r&&e({project:{...r,custom_tools:[...r.custom_tools,n]}})},updateCustomTool:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_tools:i.custom_tools.map(o=>o.id===n?{...o,...r}:o)}})},removeCustomTool:n=>{const{project:r,selectedToolId:i}=t();r&&e({project:{...r,custom_tools:r.custom_tools.filter(o=>o.id!==n)},selectedToolId:i===n?null:i})},addCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:[...r.custom_callbacks||[],n]}})},updateCustomCallback:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_callbacks:(i.custom_callbacks||[]).map(o=>o.id===n?{...o,...r}:o)}})},removeCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:(r.custom_callbacks||[]).filter(i=>i.id!==n)}})}})),Sh="/api";async function ye(e,t){const n=await fetch(`${Sh}${e}`,{...t,headers:{"Content-Type":"application/json",...t==null?void 0:t.headers}});if(!n.ok){const r=await n.json().catch(()=>({detail:"Unknown error"}));throw new Error(r.detail||`HTTP ${n.status}`)}return n.json()}async function _h(){return(await ye("/projects")).projects}async function Ch(e){return(await ye(`/projects/${e}`)).project}async function Nh(e,t=""){return(await ye("/projects",{method:"POST",body:JSON.stringify({name:e,description:t})})).project}async function Ns(e,t){return(await ye(`/projects/${e}`,{method:"PUT",body:JSON.stringify(t)})).project}async function Eh(e){await ye(`/projects/${e}`,{method:"DELETE"})}async function zh(e){return ye(`/sessions/${e}/save-to-memory`,{method:"POST"})}async function Es(e){return(await ye(`/projects/${e}/sessions`)).sessions}async function Th(e,t){return(await ye(`/projects/${e}/sessions/${t}/load`)).session}async function Ph(e){return(await ye(`/projects/${e}/yaml`)).yaml}async function Lh(e,t){return(await ye(`/projects/${e}/yaml`,{method:"PUT",body:JSON.stringify({yaml:t})})).project}async function zs(e){return(await ye(`/projects/${e}/code`)).code}async function qc(){return(await ye("/mcp-servers")).servers}async function Ih(){return(await ye("/builtin-tools")).tools}function Ah(e){const t=window.location.protocol==="https:"?"wss:":"ws:",n=window.location.host;return new WebSocket(`${t}//${n}/ws/run/${e}`)}async function Mo(e,t,n,r){return await ye(`/projects/${e}/generate-prompt`,{method:"POST",body:JSON.stringify({agent_id:t,context:n,agent_config:r||void 0})})}async function Rh(e,t){return await ye(`/projects/${e}/generate-agent-config`,{method:"POST",body:JSON.stringify({description:t})})}async function Mh(e,t,n,r=[],i){return await ye(`/projects/${e}/generate-tool-code`,{method:"POST",body:JSON.stringify({tool_name:t,tool_description:n,state_keys_used:r,context:i})})}async function Oh(e,t,n,r,i=[],o){return await ye(`/projects/${e}/generate-callback-code`,{method:"POST",body:JSON.stringify({callback_name:t,callback_description:n,callback_type:r,state_keys_used:i,context:o})})}async function Dh(e){return await ye("/test-mcp-server",{method:"POST",body:JSON.stringify(e)})}async function Fh(e,t){return ye(`/projects/${e}/skillsets/${t}/stats`)}async function $h(e,t,n,r,i=500,o=50){return ye(`/projects/${e}/skillsets/${t}/url`,{method:"POST",body:JSON.stringify({url:n,source_name:r,chunk_size:i,chunk_overlap:o})})}async function Bh(e,t,n,r=500,i=50){const o=new FormData;o.append("file",n),o.append("chunk_size",String(r)),o.append("chunk_overlap",String(i));const a=await fetch(`${Sh}/projects/${e}/skillsets/${t}/file`,{method:"POST",body:o});if(!a.ok)throw new Error(`Upload failed: ${a.statusText}`);return a.json()}async function Uh(e,t,n,r=10,i=0){return ye(`/projects/${e}/skillsets/${t}/search`,{method:"POST",body:JSON.stringify({query:n,top_k:r,min_score:i})})}async function Vh(e,t){return ye(`/projects/${e}/skillsets/${t}/entries`,{method:"DELETE"})}async function Wh(){return ye("/skillsets/embeddings-available")}const G1=Object.freeze(Object.defineProperty({__proto__:null,addSkillSetUrl:$h,checkEmbeddingsAvailable:Wh,clearSkillSet:Vh,createProject:Nh,createRunWebSocket:Ah,deleteProject:Eh,fetchJSON:ye,generateAgentConfig:Rh,generateCallbackCode:Oh,generatePrompt:Mo,generateToolCode:Mh,getBuiltinTools:Ih,getMcpServers:qc,getProject:Ch,getProjectCode:zs,getProjectYaml:Ph,getSkillSetStats:Fh,listProjectSessions:Es,listProjects:_h,loadSession:Th,saveSessionToMemory:zh,searchSkillSet:Uh,testMcpServer:Dh,updateProject:Ns,updateProjectFromYaml:Lh,uploadSkillSetFile:Bh},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Q1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ee=(e,t)=>{const n=_.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:s="",children:c,...u},d)=>_.createElement("svg",{ref:d,...Q1,width:i,height:i,stroke:r,strokeWidth:a?Number(o)*24/Number(i):o,className:["lucide",`lucide-${J1(e)}`,s].join(" "),...u},[...t.map(([p,f])=>_.createElement(p,f)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=ee("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=ee("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=ee("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=ee("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=ee("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=ee("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=ee("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=ee("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=ee("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=ee("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=ee("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=ee("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=ee("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=ee("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=ee("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=ee("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=ee("FileCheck",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=ee("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=ee("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=ee("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=ee("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=ee("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=ee("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=ee("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=ee("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=ee("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=ee("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=ee("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=ee("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=ee("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=ee("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=ee("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=ee("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=ee("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=ee("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=ee("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=ee("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=ee("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=ee("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=ee("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=ee("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=ee("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=ee("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=ee("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=ee("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=ee("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=ee("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=ee("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=ee("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=ee("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=ee("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=ee("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=ee("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=ee("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=ee("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function f0(){const e=Hc(),[t,n]=_.useState([]),[r,i]=_.useState(!0),[o,a]=_.useState(!1),[s,c]=_.useState("");_.useEffect(()=>{u()},[]);async function u(){try{const f=await _h();n(f)}catch(f){console.error("Failed to load projects:",f)}finally{i(!1)}}async function d(){if(s.trim())try{const f=await Nh(s.trim());e(`/project/${f.id}`)}catch(f){console.error("Failed to create project:",f)}}async function p(f,m){if(m.stopPropagation(),!!confirm("Delete this project?"))try{await Eh(f),n(t.filter(b=>b.id!==f))}catch(b){console.error("Failed to delete project:",b)}}return l.jsxs("div",{className:"project-list",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("header",{className:"header",children:[l.jsxs("div",{className:"logo",children:[l.jsx(Yc,{size:40,className:"logo-icon"}),l.jsx("h1",{className:"title",children:"ADK Playground"})]}),l.jsx("p",{className:"subtitle",children:"Build, test, and deploy AI agents visually"})]}),l.jsxs("div",{className:"content",children:[o?l.jsxs("div",{className:"create-form",children:[l.jsx("input",{type:"text",placeholder:"Project name...",value:s,onChange:f=>c(f.target.value),onKeyDown:f=>f.key==="Enter"&&d(),autoFocus:!0}),l.jsxs("button",{className:"btn btn-primary",onClick:d,children:[l.jsx($e,{size:18}),"Create"]}),l.jsx("button",{className:"btn btn-secondary",onClick:()=>a(!1),children:"Cancel"})]}):l.jsx("div",{className:"create-form",children:l.jsxs("button",{className:"btn btn-primary",onClick:()=>a(!0),children:[l.jsx($e,{size:18}),"New Project"]})}),r?l.jsx("div",{className:"loading",children:"Loading projects..."}):t.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx(Bd,{size:48,style:{marginBottom:16,opacity:.3}}),l.jsx("p",{children:"No projects yet. Create one to get started!"})]}):l.jsx("div",{className:"projects-grid",children:t.map(f=>l.jsxs("div",{className:"project-card",onClick:()=>e(`/project/${f.id}`),children:[l.jsxs("h3",{children:[l.jsx(Bd,{size:18}),f.name]}),l.jsx("p",{children:f.description||"No description"}),l.jsx("button",{className:"delete-btn",onClick:m=>p(f.id,m),children:l.jsx(Oe,{size:16})})]},f.id))})]})]})}const m0=[{key:"GOOGLE_API_KEY",description:"API key for Gemini models"},{key:"OPENAI_API_KEY",description:"API key for OpenAI models (via LiteLLM)"},{key:"ANTHROPIC_API_KEY",description:"API key for Anthropic Claude models"},{key:"AZURE_API_KEY",description:"API key for Azure OpenAI Service"},{key:"AZURE_API_BASE",description:"Base URL for Azure OpenAI endpoint (e.g., https://your-resource.openai.azure.com)"},{key:"AZURE_API_VERSION",description:"API version for Azure OpenAI (e.g., 2024-02-15-preview)"},{key:"GOOGLE_GENAI_USE_VERTEXAI",description:'Set to "1" to use Vertex AI instead of API key'},{key:"GOOGLE_CLOUD_PROJECT",description:"Google Cloud project ID for Vertex AI"},{key:"GOOGLE_CLOUD_REGION",description:"Google Cloud region for Vertex AI (e.g., us-central1)"}];function h0(e){return/^[a-zA-Z0-9_]+$/.test(e)}function g0(){const{project:e,updateProject:t}=vt(),[n,r]=_.useState(null);if(!e)return null;const{app:i}=e;function o(x){t({app:{...i,...x}})}function a(x){if(x===""){r(null),o({name:x});return}h0(x)?r(null):r("Name can only contain letters, numbers, and underscores"),o({name:x})}function s(){const x={name:`state_key_${i.state_keys.length+1}`,description:"",type:"string",scope:"session"};o({state_keys:[...i.state_keys,x]})}function c(x,S){const z=[...i.state_keys];z[x]={...z[x],...S},o({state_keys:z})}function u(x){o({state_keys:i.state_keys.filter((S,z)=>z!==x)})}function d(x="ReflectAndRetryToolPlugin"){let S;switch(x){case"ReflectAndRetryToolPlugin":S={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1};break;case"ContextFilterPlugin":S={type:"ContextFilterPlugin",name:"context_filter",num_invocations_to_keep:5};break;case"LoggingPlugin":S={type:"LoggingPlugin",name:"logging"};break;case"GlobalInstructionPlugin":S={type:"GlobalInstructionPlugin",name:"global_instruction",global_instruction:""};break;case"SaveFilesAsArtifactsPlugin":S={type:"SaveFilesAsArtifactsPlugin",name:"save_files"};break;case"MultimodalToolResultsPlugin":S={type:"MultimodalToolResultsPlugin",name:"multimodal_tools"};break;default:S={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1}}o({plugins:[...i.plugins,S]})}function p(x,S){const z=[...i.plugins];z[x]={...z[x],...S},o({plugins:z})}function f(x){o({plugins:i.plugins.filter((S,z)=>z!==x)})}const m=i.models||[];function b(){const x=`model_${Date.now().toString(36)}`,S={id:x,name:"New Model",provider:"gemini",model_name:"gemini-2.0-flash",is_default:m.length===0};o({models:[...m,S],default_model_id:m.length===0?x:i.default_model_id})}function k(x,S){const z=m.map($=>$.id===x?{...$,...S}:$);o({models:z})}function E(x){var $;const S=m.filter(D=>D.id!==x),z=i.default_model_id===x?(($=S[0])==null?void 0:$.id)||void 0:i.default_model_id;o({models:S,default_model_id:z})}function g(x){o({default_model_id:x})}const h=i.env_vars||{},[y,P]=_.useState({}),[C,w]=_.useState("");function T(x=""){const S=x||C.trim();!S||h[S]!==void 0||(o({env_vars:{...h,[S]:""}}),w(""))}function O(x,S){o({env_vars:{...h,[x]:S}})}function B(x){const S={...h};delete S[x],o({env_vars:S})}function j(x){P(S=>({...S,[x]:!S[x]}))}return l.jsxs("div",{className:"app-config",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("section",{className:"section",children:[l.jsx("div",{className:"section-header",children:l.jsxs("h2",{className:"section-title",children:[l.jsx(a0,{size:20}),"Basic Information"]})}),l.jsxs("div",{className:"form-grid",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"App Name"}),l.jsx("input",{type:"text",value:i.name,onChange:x=>a(x.target.value),style:{borderColor:n?"var(--error)":void 0}}),n&&l.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:4},children:n})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Root Agent"}),l.jsxs("select",{value:i.root_agent_id||"",onChange:x=>o({root_agent_id:x.target.value||void 0}),children:[l.jsx("option",{value:"",children:"Select an agent..."}),e.agents.map(x=>l.jsx("option",{value:x.id,children:x.name},x.id))]})]}),l.jsxs("div",{className:"form-group full-width",children:[l.jsx("label",{children:"Description"}),l.jsx("textarea",{value:i.description,onChange:x=>o({description:x.target.value}),rows:2})]})]})]}),l.jsxs("section",{className:"section",children:[l.jsxs("div",{className:"section-header",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx(rn,{size:20}),"Services"]}),l.jsx("span",{className:"section-hint",children:"Configure session, memory, and artifact storage backends"})]}),l.jsxs("div",{className:"form-grid",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Session Service"}),l.jsxs("select",{value:i.session_service_uri.split("://")[0],onChange:x=>{const S=x.target.value;o({session_service_uri:{memory:"memory://",sqlite:"sqlite://./sessions.db",postgresql:"postgresql://user:pass@localhost:5432/adk_sessions",mysql:"mysql://user:pass@localhost:3306/adk_sessions",agentengine:"agentengine://project/us-central1/engine-id"}[S]||S+"://"})},children:[l.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),l.jsx("option",{value:"sqlite",children:"SQLite (local)"}),l.jsx("option",{value:"postgresql",children:"PostgreSQL"}),l.jsx("option",{value:"mysql",children:"MySQL"}),l.jsx("option",{value:"agentengine",children:"Vertex AI Agent Engine"})]}),i.session_service_uri.startsWith("sqlite://")&&l.jsx("input",{type:"text",value:i.session_service_uri.replace("sqlite://",""),onChange:x=>o({session_service_uri:"sqlite://"+x.target.value}),placeholder:"./sessions.db",style:{marginTop:8}}),(i.session_service_uri.startsWith("postgresql://")||i.session_service_uri.startsWith("mysql://"))&&l.jsx("input",{type:"text",value:i.session_service_uri,onChange:x=>o({session_service_uri:x.target.value}),placeholder:"postgresql://user:pass@localhost:5432/db",style:{marginTop:8}}),i.session_service_uri.startsWith("agentengine://")&&l.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[l.jsx("input",{type:"text",value:i.session_service_uri.split("/")[2]||"",onChange:x=>{const S=i.session_service_uri.split("/");S[2]=x.target.value,o({session_service_uri:S.join("/")})},placeholder:"project-id"}),l.jsx("input",{type:"text",value:i.session_service_uri.split("/")[3]||"",onChange:x=>{const S=i.session_service_uri.split("/");S[3]=x.target.value,o({session_service_uri:S.join("/")})},placeholder:"location (e.g., us-central1)"}),l.jsx("input",{type:"text",value:i.session_service_uri.split("/")[4]||"",onChange:x=>{const S=i.session_service_uri.split("/");S[4]=x.target.value,o({session_service_uri:S.join("/")})},placeholder:"agent-engine-id"})]}),l.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.session_service_uri.startsWith("memory://")&&"Sessions stored in memory, lost on restart",i.session_service_uri.startsWith("sqlite://")&&"Persists to local SQLite file",i.session_service_uri.startsWith("postgresql://")&&"Production-ready PostgreSQL backend",i.session_service_uri.startsWith("mysql://")&&"Production-ready MySQL backend",i.session_service_uri.startsWith("agentengine://")&&"Vertex AI Agent Engine managed sessions"]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Memory Service"}),l.jsxs("select",{value:i.memory_service_uri.split("://")[0],onChange:x=>{const S=x.target.value;o({memory_service_uri:{memory:"memory://",rag:"rag://rag-corpus-id",agentengine:"agentengine://project/us-central1/engine-id"}[S]||S+"://"})},children:[l.jsx("option",{value:"memory",children:"In-Memory (keyword matching)"}),l.jsx("option",{value:"rag",children:"Vertex AI RAG"}),l.jsx("option",{value:"agentengine",children:"Vertex AI Memory Bank"})]}),i.memory_service_uri.startsWith("rag://")&&l.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[l.jsx("input",{type:"text",value:i.memory_service_uri.replace("rag://",""),onChange:x=>o({memory_service_uri:"rag://"+x.target.value}),placeholder:"rag-corpus-id or full resource path"}),l.jsx("span",{className:"help-text",style:{fontSize:11,color:"var(--text-dim)"},children:"Format: projects/PROJECT/locations/LOCATION/ragCorpora/CORPUS_ID"})]}),i.memory_service_uri.startsWith("agentengine://")&&l.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[l.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[2]||"",onChange:x=>{const S=i.memory_service_uri.split("/");S[2]=x.target.value,o({memory_service_uri:S.join("/")})},placeholder:"project-id"}),l.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[3]||"",onChange:x=>{const S=i.memory_service_uri.split("/");S[3]=x.target.value,o({memory_service_uri:S.join("/")})},placeholder:"location (e.g., us-central1)"}),l.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[4]||"",onChange:x=>{const S=i.memory_service_uri.split("/");S[4]=x.target.value,o({memory_service_uri:S.join("/")})},placeholder:"agent-engine-id"})]}),l.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.memory_service_uri.startsWith("memory://")&&"Simple keyword matching, good for prototyping",i.memory_service_uri.startsWith("rag://")&&"Semantic search using Vertex AI RAG corpus",i.memory_service_uri.startsWith("agentengine://")&&"Managed memory via Agent Engine Memory Bank"]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Artifact Service"}),l.jsxs("select",{value:i.artifact_service_uri.split("://")[0]==="gs"?"gs":i.artifact_service_uri.split("://")[0],onChange:x=>{const S=x.target.value;o({artifact_service_uri:{memory:"memory://",file:"file://./artifacts",gs:"gs://your-bucket-name"}[S]||S+"://"})},children:[l.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),l.jsx("option",{value:"file",children:"File System"}),l.jsx("option",{value:"gs",children:"Google Cloud Storage"})]}),i.artifact_service_uri.startsWith("file://")&&l.jsx("input",{type:"text",value:i.artifact_service_uri.replace("file://",""),onChange:x=>o({artifact_service_uri:"file://"+x.target.value}),placeholder:"./artifacts",style:{marginTop:8}}),i.artifact_service_uri.startsWith("gs://")&&l.jsx("input",{type:"text",value:i.artifact_service_uri.replace("gs://",""),onChange:x=>o({artifact_service_uri:"gs://"+x.target.value}),placeholder:"bucket-name/optional-prefix",style:{marginTop:8}}),l.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.artifact_service_uri.startsWith("memory://")&&"Artifacts stored in memory, lost on restart",i.artifact_service_uri.startsWith("file://")&&"Persists to local filesystem",i.artifact_service_uri.startsWith("gs://")&&"Production-ready Google Cloud Storage backend"]})]})]})]}),l.jsxs("section",{className:"section",children:[l.jsx("div",{className:"section-header",children:l.jsxs("h2",{className:"section-title",children:[l.jsx(Is,{size:20}),"Environment Variables"]})}),l.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginBottom:16},children:"Set API keys and other environment variables. These are passed to the agent runtime."}),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16},children:m0.filter(x=>h[x.key]===void 0).map(x=>l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>T(x.key),title:x.description,children:[l.jsx($e,{size:12}),x.key]},x.key))}),Object.keys(h).length===0?l.jsx("p",{className:"empty-message",children:"No environment variables set. Click a button above to add common variables, or add a custom one below."}):Object.entries(h).map(([x,S])=>l.jsxs("div",{className:"list-item",style:{alignItems:"center"},children:[l.jsxs("div",{style:{flex:1,display:"flex",gap:12,alignItems:"center"},children:[l.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:13,minWidth:200},children:x}),l.jsxs("div",{style:{flex:1,display:"flex",gap:8,alignItems:"center"},children:[l.jsx("input",{type:y[x]?"text":"password",value:S,onChange:z=>O(x,z.target.value),placeholder:"Enter value...",style:{flex:1}}),l.jsx("button",{className:"delete-item",onClick:()=>j(x),title:y[x]?"Hide value":"Show value",children:y[x]?l.jsx(e0,{size:16}):l.jsx(Ui,{size:16})})]})]}),l.jsx("button",{className:"delete-item",onClick:()=>B(x),children:l.jsx(Oe,{size:16})})]},x)),l.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[l.jsx("input",{type:"text",value:C,onChange:x=>w(x.target.value.toUpperCase().replace(/[^A-Z0-9_]/g,"")),placeholder:"CUSTOM_VAR_NAME",style:{flex:1,fontFamily:"var(--font-mono)"},onKeyDown:x=>x.key==="Enter"&&T()}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>T(),disabled:!C.trim(),children:[l.jsx($e,{size:14}),"Add Variable"]})]})]}),l.jsxs("section",{className:"section",children:[l.jsxs("div",{className:"section-header",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx(Kc,{size:20}),"Models"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:b,children:[l.jsx($e,{size:14}),"Add Model"]})]}),m.length===0?l.jsx("p",{className:"empty-message",children:"No models configured. Add models that agents can use."}):m.map(x=>l.jsxs("div",{className:"model-card",children:[l.jsxs("div",{className:"model-card-header",children:[l.jsx("input",{type:"text",value:x.name,onChange:S=>k(x.id,{name:S.target.value}),placeholder:"Model name",className:"model-name-input"}),l.jsx("button",{className:`default-model-btn ${i.default_model_id===x.id?"is-default":""}`,onClick:()=>g(x.id),title:i.default_model_id===x.id?"Default model":"Set as default",children:l.jsx(Jh,{size:14,fill:i.default_model_id===x.id?"currentColor":"none"})}),l.jsx("button",{className:"delete-item",onClick:()=>E(x.id),children:l.jsx(Oe,{size:16})})]}),l.jsxs("div",{className:"model-card-body",children:[l.jsxs("div",{className:"model-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Provider"}),l.jsxs("select",{value:x.provider,onChange:S=>k(x.id,{provider:S.target.value}),children:[l.jsx("option",{value:"gemini",children:"Gemini"}),l.jsx("option",{value:"litellm",children:"LiteLLM"}),l.jsx("option",{value:"anthropic",children:"Anthropic"})]})]}),l.jsxs("div",{className:"form-group",style:{flex:2},children:[l.jsx("label",{children:"Model Name"}),l.jsx("input",{type:"text",value:x.model_name,onChange:S=>k(x.id,{model_name:S.target.value}),placeholder:"e.g., gemini-2.0-flash"})]}),x.provider==="litellm"&&l.jsxs("div",{className:"form-group",style:{flex:2},children:[l.jsx("label",{children:"API Base URL"}),l.jsx("input",{type:"text",value:x.api_base||"",onChange:S=>k(x.id,{api_base:S.target.value||void 0}),placeholder:"http://localhost:11434"})]})]}),l.jsxs("div",{className:"model-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Temperature"}),l.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:x.temperature??"",onChange:S=>k(x.id,{temperature:S.target.value?parseFloat(S.target.value):void 0}),placeholder:"Default"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Max Tokens"}),l.jsx("input",{type:"number",min:"1",value:x.max_output_tokens??"",onChange:S=>k(x.id,{max_output_tokens:S.target.value?parseInt(S.target.value):void 0}),placeholder:"Default"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Top P"}),l.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:x.top_p??"",onChange:S=>k(x.id,{top_p:S.target.value?parseFloat(S.target.value):void 0}),placeholder:"Default"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Top K"}),l.jsx("input",{type:"number",min:"1",value:x.top_k??"",onChange:S=>k(x.id,{top_k:S.target.value?parseInt(S.target.value):void 0}),placeholder:"Default"})]})]})]})]},x.id))]}),l.jsxs("section",{className:"section",children:[l.jsx("div",{className:"section-header",children:l.jsxs("h2",{className:"section-title",children:[l.jsx(Xh,{size:20}),"Advanced Options"]})}),l.jsxs("div",{className:"toggle-group",children:[l.jsx("div",{className:`toggle ${i.compaction.enabled?"active":""}`,onClick:()=>o({compaction:{...i.compaction,enabled:!i.compaction.enabled}})}),l.jsxs("div",{className:"toggle-label",children:[l.jsx("strong",{children:"Event Compaction"}),l.jsx("span",{children:"Automatically summarize old events to reduce context size"})]}),i.compaction.enabled&&l.jsx("input",{type:"number",value:i.compaction.max_events,onChange:x=>o({compaction:{...i.compaction,max_events:parseInt(x.target.value)||100}}),style:{width:80},placeholder:"Max events"})]}),l.jsxs("div",{className:"toggle-group",style:{marginTop:12},children:[l.jsx("div",{className:`toggle ${i.context_cache.enabled?"active":""}`,onClick:()=>o({context_cache:{...i.context_cache,enabled:!i.context_cache.enabled}})}),l.jsxs("div",{className:"toggle-label",children:[l.jsx("strong",{children:"Context Caching"}),l.jsx("span",{children:"Cache static instructions for better performance"})]}),i.context_cache.enabled&&l.jsx("input",{type:"number",value:i.context_cache.ttl_seconds,onChange:x=>o({context_cache:{...i.context_cache,ttl_seconds:parseInt(x.target.value)||3600}}),style:{width:100},placeholder:"TTL (seconds)"})]}),l.jsxs("div",{className:"toggle-group",style:{marginTop:12},children:[l.jsx("div",{className:`toggle ${i.resumability.enabled?"active":""}`,onClick:()=>o({resumability:{...i.resumability,enabled:!i.resumability.enabled}})}),l.jsxs("div",{className:"toggle-label",children:[l.jsx("strong",{children:"Resumability"}),l.jsx("span",{children:"Allow pausing and resuming agent execution"})]})]})]}),l.jsxs("section",{className:"section",children:[l.jsxs("div",{className:"section-header",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx(Qc,{size:20}),"Session State Keys"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:s,children:[l.jsx($e,{size:14}),"Add Key"]})]}),i.state_keys.length===0?l.jsx("p",{className:"empty-message",children:"No state keys defined. Add keys to declare what data agents can share."}):i.state_keys.map((x,S)=>l.jsxs("div",{className:"list-item",children:[l.jsxs("div",{className:"list-item-content",children:[l.jsx("input",{type:"text",value:x.name,onChange:z=>c(S,{name:z.target.value}),placeholder:"Key name"}),l.jsxs("select",{value:x.type,onChange:z=>c(S,{type:z.target.value}),children:[l.jsx("option",{value:"string",children:"String"}),l.jsx("option",{value:"number",children:"Number"}),l.jsx("option",{value:"boolean",children:"Boolean"}),l.jsx("option",{value:"object",children:"Object"}),l.jsx("option",{value:"array",children:"Array"})]}),l.jsxs("select",{value:x.scope,onChange:z=>c(S,{scope:z.target.value}),children:[l.jsx("option",{value:"session",children:"Session"}),l.jsx("option",{value:"user",children:"User"}),l.jsx("option",{value:"app",children:"App"}),l.jsx("option",{value:"temp",children:"Temporary"})]}),l.jsx("input",{type:"text",value:x.description,onChange:z=>c(S,{description:z.target.value}),placeholder:"Description",style:{gridColumn:"span 2"}})]}),l.jsx("button",{className:"delete-item",onClick:()=>u(S),children:l.jsx(Oe,{size:16})})]},S))]}),l.jsxs("section",{className:"section",children:[l.jsxs("div",{className:"section-header",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx(tn,{size:20}),"Plugins"]}),l.jsx("div",{className:"plugin-add-dropdown",children:l.jsxs("select",{className:"btn btn-secondary btn-sm",value:"",onChange:x=>{x.target.value&&(d(x.target.value),x.target.value="")},style:{paddingRight:8},children:[l.jsx("option",{value:"",children:"+ Add Plugin..."}),l.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),l.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),l.jsx("option",{value:"LoggingPlugin",children:"Logging"}),l.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),l.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),l.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]})})]}),i.plugins.length===0?l.jsx("p",{className:"empty-message",children:"No plugins configured. Add plugins to extend agent functionality."}):i.plugins.map((x,S)=>l.jsxs("div",{className:"list-item",style:{flexDirection:"column",gap:12},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",gap:12},children:[l.jsxs("select",{value:x.type,onChange:z=>p(S,{type:z.target.value}),style:{flex:1},children:[l.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),l.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),l.jsx("option",{value:"LoggingPlugin",children:"Logging"}),l.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),l.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),l.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]}),l.jsx("button",{className:"delete-item",onClick:()=>f(S),children:l.jsx(Oe,{size:16})})]}),x.type==="ReflectAndRetryToolPlugin"&&l.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[l.jsxs("div",{className:"form-group",style:{flex:0},children:[l.jsx("label",{style:{fontSize:12},children:"Max Retries"}),l.jsx("input",{type:"number",min:"0",max:"10",value:x.max_retries??3,onChange:z=>p(S,{max_retries:parseInt(z.target.value)||0}),style:{width:70}})]}),l.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[l.jsx("input",{type:"checkbox",checked:x.throw_exception_if_retry_exceeded??!1,onChange:z=>p(S,{throw_exception_if_retry_exceeded:z.target.checked})}),"Throw exception if retry exceeded"]})]}),x.type==="ContextFilterPlugin"&&l.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[l.jsxs("div",{className:"form-group",style:{flex:0},children:[l.jsx("label",{style:{fontSize:12},children:"Invocations to Keep"}),l.jsx("input",{type:"number",min:"1",max:"100",value:x.num_invocations_to_keep??5,onChange:z=>p(S,{num_invocations_to_keep:parseInt(z.target.value)||1}),style:{width:70}})]}),l.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Keeps only the last N conversation turns to reduce context size"})]}),x.type==="LoggingPlugin"&&l.jsx("div",{style:{paddingLeft:8},children:l.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Logs all agent events (messages, tool calls, responses) to the console"})}),x.type==="GlobalInstructionPlugin"&&l.jsxs("div",{style:{width:"100%",paddingLeft:8},children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{style:{fontSize:12},children:"Global Instruction"}),l.jsx("textarea",{value:x.global_instruction??"",onChange:z=>p(S,{global_instruction:z.target.value}),placeholder:"Instructions that apply to all agents in the app...",rows:3,style:{width:"100%"}})]}),l.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"This instruction is prepended to every agent's system prompt"})]}),x.type==="SaveFilesAsArtifactsPlugin"&&l.jsx("div",{style:{paddingLeft:8},children:l.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Automatically saves files uploaded in user messages as artifacts for later retrieval"})}),x.type==="MultimodalToolResultsPlugin"&&l.jsx("div",{style:{paddingLeft:8},children:l.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Allows tools to return multimodal content (images, files) directly to the LLM"})})]},S))]})]})}const x0="modulepreload",y0=function(e){return"/"+e},Hd={},Zh=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=y0(c),c in Hd)return;Hd[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":x0,u||(p.as="script"),p.crossOrigin="",p.href=c,s&&p.setAttribute("nonce",s),document.head.appendChild(p),u)return new Promise((f,m)=>{p.addEventListener("load",f),p.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return i.then(a=>{for(const s of a||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})};function qd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function v0(e){if(Array.isArray(e))return e}function b0(e,t,n){return(t=N0(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k0(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,s=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(c=(r=o.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(d){u=!0,i=d}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return s}}function w0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Gd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Kd(Object(n),!0).forEach(function(r){b0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Kd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function j0(e,t){if(e==null)return{};var n,r,i=S0(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function S0(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function _0(e,t){return v0(e)||k0(e,t)||E0(e,t)||w0()}function C0(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function N0(e){var t=C0(e,"string");return typeof t=="symbol"?t:t+""}function E0(e,t){if(e){if(typeof e=="string")return qd(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?qd(e,t):void 0}}function z0(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Qd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Jd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qd(Object(n),!0).forEach(function(r){z0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function T0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,o){return o(i)},r)}}function ci(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return t.apply(n,[].concat(i,s))}}}function ul(e){return{}.toString.call(e).includes("Object")}function P0(e){return!Object.keys(e).length}function Vi(e){return typeof e=="function"}function L0(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function I0(e,t){return ul(t)||Nn("changeType"),Object.keys(t).some(function(n){return!L0(e,n)})&&Nn("changeField"),t}function A0(e){Vi(e)||Nn("selectorType")}function R0(e){Vi(e)||ul(e)||Nn("handlerType"),ul(e)&&Object.values(e).some(function(t){return!Vi(t)})&&Nn("handlersType")}function M0(e){e||Nn("initialIsRequired"),ul(e)||Nn("initialType"),P0(e)&&Nn("initialContent")}function O0(e,t){throw new Error(e[t]||e.default)}var D0={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Nn=ci(O0)(D0),vo={changes:I0,selector:A0,handler:R0,initial:M0};function F0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};vo.initial(e),vo.handler(t);var n={current:e},r=ci(U0)(n,t),i=ci(B0)(n),o=ci(vo.changes)(e),a=ci($0)(n);function s(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return vo.selector(u),u(n.current)}function c(u){T0(r,i,o,a)(u)}return[s,c]}function $0(e,t){return Vi(t)?t(e.current):t}function B0(e,t){return e.current=Jd(Jd({},e.current),t),t}function U0(e,t,n){return Vi(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var V0={create:F0},W0={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function H0(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return t.apply(n,[].concat(i,s))}}}function q0(e){return{}.toString.call(e).includes("Object")}function K0(e){return e||Yd("configIsRequired"),q0(e)||Yd("configType"),e.urls?(G0(),{paths:{vs:e.urls.monacoBase}}):e}function G0(){console.warn(eg.deprecation)}function Q0(e,t){throw new Error(e[t]||e.default)}var eg={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Yd=H0(Q0)(eg),J0={config:K0},Y0=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(o,a){return a(o)},i)}};function tg(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],tg(e[n],t[n]))}),Gd(Gd({},e),t)}var X0={type:"cancelation",msg:"operation is manually canceled"};function ha(e){var t=!1,n=new Promise(function(r,i){e.then(function(o){return t?i(X0):r(o)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var Z0=["monaco"],eb=V0.create({config:W0,isInitialized:!1,resolve:null,reject:null,monaco:null}),ng=_0(eb,2),Xi=ng[0],Il=ng[1];function tb(e){var t=J0.config(e),n=t.monaco,r=j0(t,Z0);Il(function(i){return{config:tg(i.config,r),monaco:n}})}function nb(){var e=Xi(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(Il({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),ha(ga);if(window.monaco&&window.monaco.editor)return rg(window.monaco),e.resolve(window.monaco),ha(ga);Y0(rb,ob)(lb)}return ha(ga)}function rb(e){return document.body.appendChild(e)}function ib(e){var t=document.createElement("script");return e&&(t.src=e),t}function ob(e){var t=Xi(function(r){var i=r.config,o=r.reject;return{config:i,reject:o}}),n=ib("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function lb(){var e=Xi(function(n){var r=n.config,i=n.resolve,o=n.reject;return{config:r,resolve:i,reject:o}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;rg(r),e.resolve(r)},function(n){e.reject(n)})}function rg(e){Xi().monaco||Il({monaco:e})}function ab(){return Xi(function(e){var t=e.monaco;return t})}var ga=new Promise(function(e,t){return Il({resolve:e,reject:t})}),ig={config:tb,init:nb,__getMonacoInstance:ab},sb={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},xa=sb,cb={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},ub=cb;function db({children:e}){return Nt.createElement("div",{style:ub.container},e)}var pb=db,fb=pb;function mb({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:o,wrapperProps:a}){return Nt.createElement("section",{style:{...xa.wrapper,width:e,height:t},...a},!n&&Nt.createElement(fb,null,r),Nt.createElement("div",{ref:i,style:{...xa.fullWidth,...!n&&xa.hide},className:o}))}var hb=mb,og=_.memo(hb);function gb(e){_.useEffect(e,[])}var lg=gb;function xb(e,t,n=!0){let r=_.useRef(!0);_.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var pt=xb;function vi(){}function br(e,t,n,r){return yb(e,r)||vb(e,t,n,r)}function yb(e,t){return e.editor.getModel(ag(e,t))}function vb(e,t,n,r){return e.editor.createModel(t,n,r?ag(e,r):void 0)}function ag(e,t){return e.Uri.parse(t)}function bb({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:o,modifiedModelPath:a,keepCurrentOriginalModel:s=!1,keepCurrentModifiedModel:c=!1,theme:u="light",loading:d="Loading...",options:p={},height:f="100%",width:m="100%",className:b,wrapperProps:k={},beforeMount:E=vi,onMount:g=vi}){let[h,y]=_.useState(!1),[P,C]=_.useState(!0),w=_.useRef(null),T=_.useRef(null),O=_.useRef(null),B=_.useRef(g),j=_.useRef(E),x=_.useRef(!1);lg(()=>{let D=ig.init();return D.then(H=>(T.current=H)&&C(!1)).catch(H=>(H==null?void 0:H.type)!=="cancelation"&&console.error("Monaco initialization: error:",H)),()=>w.current?$():D.cancel()}),pt(()=>{if(w.current&&T.current){let D=w.current.getOriginalEditor(),H=br(T.current,e||"",r||n||"text",o||"");H!==D.getModel()&&D.setModel(H)}},[o],h),pt(()=>{if(w.current&&T.current){let D=w.current.getModifiedEditor(),H=br(T.current,t||"",i||n||"text",a||"");H!==D.getModel()&&D.setModel(H)}},[a],h),pt(()=>{let D=w.current.getModifiedEditor();D.getOption(T.current.editor.EditorOption.readOnly)?D.setValue(t||""):t!==D.getValue()&&(D.executeEdits("",[{range:D.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),D.pushUndoStop())},[t],h),pt(()=>{var D,H;(H=(D=w.current)==null?void 0:D.getModel())==null||H.original.setValue(e||"")},[e],h),pt(()=>{let{original:D,modified:H}=w.current.getModel();T.current.editor.setModelLanguage(D,r||n||"text"),T.current.editor.setModelLanguage(H,i||n||"text")},[n,r,i],h),pt(()=>{var D;(D=T.current)==null||D.editor.setTheme(u)},[u],h),pt(()=>{var D;(D=w.current)==null||D.updateOptions(p)},[p],h);let S=_.useCallback(()=>{var A;if(!T.current)return;j.current(T.current);let D=br(T.current,e||"",r||n||"text",o||""),H=br(T.current,t||"",i||n||"text",a||"");(A=w.current)==null||A.setModel({original:D,modified:H})},[n,t,i,e,r,o,a]),z=_.useCallback(()=>{var D;!x.current&&O.current&&(w.current=T.current.editor.createDiffEditor(O.current,{automaticLayout:!0,...p}),S(),(D=T.current)==null||D.editor.setTheme(u),y(!0),x.current=!0)},[p,u,S]);_.useEffect(()=>{h&&B.current(w.current,T.current)},[h]),_.useEffect(()=>{!P&&!h&&z()},[P,h,z]);function $(){var H,A,R,L;let D=(H=w.current)==null?void 0:H.getModel();s||((A=D==null?void 0:D.original)==null||A.dispose()),c||((R=D==null?void 0:D.modified)==null||R.dispose()),(L=w.current)==null||L.dispose()}return Nt.createElement(og,{width:m,height:f,isEditorReady:h,loading:d,_ref:O,className:b,wrapperProps:k})}var kb=bb;_.memo(kb);function wb(e){let t=_.useRef();return _.useEffect(()=>{t.current=e},[e]),t.current}var jb=wb,bo=new Map;function Sb({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:o,theme:a="light",line:s,loading:c="Loading...",options:u={},overrideServices:d={},saveViewState:p=!0,keepCurrentModel:f=!1,width:m="100%",height:b="100%",className:k,wrapperProps:E={},beforeMount:g=vi,onMount:h=vi,onChange:y,onValidate:P=vi}){let[C,w]=_.useState(!1),[T,O]=_.useState(!0),B=_.useRef(null),j=_.useRef(null),x=_.useRef(null),S=_.useRef(h),z=_.useRef(g),$=_.useRef(),D=_.useRef(r),H=jb(o),A=_.useRef(!1),R=_.useRef(!1);lg(()=>{let V=ig.init();return V.then(Q=>(B.current=Q)&&O(!1)).catch(Q=>(Q==null?void 0:Q.type)!=="cancelation"&&console.error("Monaco initialization: error:",Q)),()=>j.current?v():V.cancel()}),pt(()=>{var Q,N,re,I;let V=br(B.current,e||r||"",t||i||"",o||n||"");V!==((Q=j.current)==null?void 0:Q.getModel())&&(p&&bo.set(H,(N=j.current)==null?void 0:N.saveViewState()),(re=j.current)==null||re.setModel(V),p&&((I=j.current)==null||I.restoreViewState(bo.get(o))))},[o],C),pt(()=>{var V;(V=j.current)==null||V.updateOptions(u)},[u],C),pt(()=>{!j.current||r===void 0||(j.current.getOption(B.current.editor.EditorOption.readOnly)?j.current.setValue(r):r!==j.current.getValue()&&(R.current=!0,j.current.executeEdits("",[{range:j.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),j.current.pushUndoStop(),R.current=!1))},[r],C),pt(()=>{var Q,N;let V=(Q=j.current)==null?void 0:Q.getModel();V&&i&&((N=B.current)==null||N.editor.setModelLanguage(V,i))},[i],C),pt(()=>{var V;s!==void 0&&((V=j.current)==null||V.revealLine(s))},[s],C),pt(()=>{var V;(V=B.current)==null||V.editor.setTheme(a)},[a],C);let L=_.useCallback(()=>{var V;if(!(!x.current||!B.current)&&!A.current){z.current(B.current);let Q=o||n,N=br(B.current,r||e||"",t||i||"",Q||"");j.current=(V=B.current)==null?void 0:V.editor.create(x.current,{model:N,automaticLayout:!0,...u},d),p&&j.current.restoreViewState(bo.get(Q)),B.current.editor.setTheme(a),s!==void 0&&j.current.revealLine(s),w(!0),A.current=!0}},[e,t,n,r,i,o,u,d,p,a,s]);_.useEffect(()=>{C&&S.current(j.current,B.current)},[C]),_.useEffect(()=>{!T&&!C&&L()},[T,C,L]),D.current=r,_.useEffect(()=>{var V,Q;C&&y&&((V=$.current)==null||V.dispose(),$.current=(Q=j.current)==null?void 0:Q.onDidChangeModelContent(N=>{R.current||y(j.current.getValue(),N)}))},[C,y]),_.useEffect(()=>{if(C){let V=B.current.editor.onDidChangeMarkers(Q=>{var re;let N=(re=j.current.getModel())==null?void 0:re.uri;if(N&&Q.find(I=>I.path===N.path)){let I=B.current.editor.getModelMarkers({resource:N});P==null||P(I)}});return()=>{V==null||V.dispose()}}return()=>{}},[C,P]);function v(){var V,Q;(V=$.current)==null||V.dispose(),f?p&&bo.set(o,j.current.saveViewState()):(Q=j.current.getModel())==null||Q.dispose(),j.current.dispose()}return Nt.createElement(og,{width:m,height:b,isEditorReady:C,loading:c,_ref:x,className:k,wrapperProps:E})}var _b=Sb,Cb=_.memo(_b),Dr=Cb;function Nb(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const Eb=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,zb=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Tb={};function Xd(e,t){return(Tb.jsx?zb:Eb).test(e)}const Pb=/[ \t\n\f\r]/g;function Lb(e){return typeof e=="object"?e.type==="text"?Zd(e.value):!1:Zd(e)}function Zd(e){return e.replace(Pb,"")===""}class Zi{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}Zi.prototype.normal={};Zi.prototype.property={};Zi.prototype.space=void 0;function sg(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new Zi(n,r,t)}function As(e){return e.toLowerCase()}class at{constructor(t,n){this.attribute=n,this.property=t}}at.prototype.attribute="";at.prototype.booleanish=!1;at.prototype.boolean=!1;at.prototype.commaOrSpaceSeparated=!1;at.prototype.commaSeparated=!1;at.prototype.defined=!1;at.prototype.mustUseProperty=!1;at.prototype.number=!1;at.prototype.overloadedBoolean=!1;at.prototype.property="";at.prototype.spaceSeparated=!1;at.prototype.space=void 0;let Ib=0;const ae=tr(),Pe=tr(),Rs=tr(),G=tr(),ve=tr(),Nr=tr(),ut=tr();function tr(){return 2**++Ib}const Ms=Object.freeze(Object.defineProperty({__proto__:null,boolean:ae,booleanish:Pe,commaOrSpaceSeparated:ut,commaSeparated:Nr,number:G,overloadedBoolean:Rs,spaceSeparated:ve},Symbol.toStringTag,{value:"Module"})),ya=Object.keys(Ms);class Zc extends at{constructor(t,n,r,i){let o=-1;if(super(t,n),ep(this,"space",i),typeof r=="number")for(;++o<ya.length;){const a=ya[o];ep(this,ya[o],(r&Ms[a])===Ms[a])}}}Zc.prototype.defined=!0;function ep(e,t,n){n&&(e[t]=n)}function Vr(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const o=new Zc(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[As(r)]=r,n[As(o.attribute)]=r}return new Zi(t,n,e.space)}const cg=Vr({properties:{ariaActiveDescendant:null,ariaAtomic:Pe,ariaAutoComplete:null,ariaBusy:Pe,ariaChecked:Pe,ariaColCount:G,ariaColIndex:G,ariaColSpan:G,ariaControls:ve,ariaCurrent:null,ariaDescribedBy:ve,ariaDetails:null,ariaDisabled:Pe,ariaDropEffect:ve,ariaErrorMessage:null,ariaExpanded:Pe,ariaFlowTo:ve,ariaGrabbed:Pe,ariaHasPopup:null,ariaHidden:Pe,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ve,ariaLevel:G,ariaLive:null,ariaModal:Pe,ariaMultiLine:Pe,ariaMultiSelectable:Pe,ariaOrientation:null,ariaOwns:ve,ariaPlaceholder:null,ariaPosInSet:G,ariaPressed:Pe,ariaReadOnly:Pe,ariaRelevant:null,ariaRequired:Pe,ariaRoleDescription:ve,ariaRowCount:G,ariaRowIndex:G,ariaRowSpan:G,ariaSelected:Pe,ariaSetSize:G,ariaSort:null,ariaValueMax:G,ariaValueMin:G,ariaValueNow:G,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function ug(e,t){return t in e?e[t]:t}function dg(e,t){return ug(e,t.toLowerCase())}const Ab=Vr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Nr,acceptCharset:ve,accessKey:ve,action:null,allow:null,allowFullScreen:ae,allowPaymentRequest:ae,allowUserMedia:ae,alt:null,as:null,async:ae,autoCapitalize:null,autoComplete:ve,autoFocus:ae,autoPlay:ae,blocking:ve,capture:null,charSet:null,checked:ae,cite:null,className:ve,cols:G,colSpan:null,content:null,contentEditable:Pe,controls:ae,controlsList:ve,coords:G|Nr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ae,defer:ae,dir:null,dirName:null,disabled:ae,download:Rs,draggable:Pe,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ae,formTarget:null,headers:ve,height:G,hidden:Rs,high:G,href:null,hrefLang:null,htmlFor:ve,httpEquiv:ve,id:null,imageSizes:null,imageSrcSet:null,inert:ae,inputMode:null,integrity:null,is:null,isMap:ae,itemId:null,itemProp:ve,itemRef:ve,itemScope:ae,itemType:ve,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ae,low:G,manifest:null,max:null,maxLength:G,media:null,method:null,min:null,minLength:G,multiple:ae,muted:ae,name:null,nonce:null,noModule:ae,noValidate:ae,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ae,optimum:G,pattern:null,ping:ve,placeholder:null,playsInline:ae,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ae,referrerPolicy:null,rel:ve,required:ae,reversed:ae,rows:G,rowSpan:G,sandbox:ve,scope:null,scoped:ae,seamless:ae,selected:ae,shadowRootClonable:ae,shadowRootDelegatesFocus:ae,shadowRootMode:null,shape:null,size:G,sizes:null,slot:null,span:G,spellCheck:Pe,src:null,srcDoc:null,srcLang:null,srcSet:null,start:G,step:null,style:null,tabIndex:G,target:null,title:null,translate:null,type:null,typeMustMatch:ae,useMap:null,value:Pe,width:G,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ve,axis:null,background:null,bgColor:null,border:G,borderColor:null,bottomMargin:G,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ae,declare:ae,event:null,face:null,frame:null,frameBorder:null,hSpace:G,leftMargin:G,link:null,longDesc:null,lowSrc:null,marginHeight:G,marginWidth:G,noResize:ae,noHref:ae,noShade:ae,noWrap:ae,object:null,profile:null,prompt:null,rev:null,rightMargin:G,rules:null,scheme:null,scrolling:Pe,standby:null,summary:null,text:null,topMargin:G,valueType:null,version:null,vAlign:null,vLink:null,vSpace:G,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ae,disableRemotePlayback:ae,prefix:null,property:null,results:G,security:null,unselectable:null},space:"html",transform:dg}),Rb=Vr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:ut,accentHeight:G,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:G,amplitude:G,arabicForm:null,ascent:G,attributeName:null,attributeType:null,azimuth:G,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:G,by:null,calcMode:null,capHeight:G,className:ve,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:G,diffuseConstant:G,direction:null,display:null,dur:null,divisor:G,dominantBaseline:null,download:ae,dx:null,dy:null,edgeMode:null,editable:null,elevation:G,enableBackground:null,end:null,event:null,exponent:G,externalResourcesRequired:null,fill:null,fillOpacity:G,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Nr,g2:Nr,glyphName:Nr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:G,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:G,horizOriginX:G,horizOriginY:G,id:null,ideographic:G,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:G,k:G,k1:G,k2:G,k3:G,k4:G,kernelMatrix:ut,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:G,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:G,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:G,overlineThickness:G,paintOrder:null,panose1:null,path:null,pathLength:G,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ve,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:G,pointsAtY:G,pointsAtZ:G,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:ut,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:ut,rev:ut,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:ut,requiredFeatures:ut,requiredFonts:ut,requiredFormats:ut,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:G,specularExponent:G,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:G,strikethroughThickness:G,string:null,stroke:null,strokeDashArray:ut,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:G,strokeOpacity:G,strokeWidth:null,style:null,surfaceScale:G,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:ut,tabIndex:G,tableValues:null,target:null,targetX:G,targetY:G,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:ut,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:G,underlineThickness:G,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:G,values:null,vAlphabetic:G,vMathematical:G,vectorEffect:null,vHanging:G,vIdeographic:G,version:null,vertAdvY:G,vertOriginX:G,vertOriginY:G,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:G,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:ug}),pg=Vr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),fg=Vr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:dg}),mg=Vr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),Mb={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Ob=/[A-Z]/g,tp=/-[a-z]/g,Db=/^data[-\w.:]+$/i;function Fb(e,t){const n=As(t);let r=t,i=at;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Db.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(tp,Bb);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!tp.test(o)){let a=o.replace(Ob,$b);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a}}i=Zc}return new i(r,t)}function $b(e){return"-"+e.toLowerCase()}function Bb(e){return e.charAt(1).toUpperCase()}const Ub=sg([cg,Ab,pg,fg,mg],"html"),eu=sg([cg,Rb,pg,fg,mg],"svg");function Vb(e){return e.join(" ").trim()}var tu={},np=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Wb=/\n/g,Hb=/^\s*/,qb=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Kb=/^:\s*/,Gb=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Qb=/^[;\s]*/,Jb=/^\s+|\s+$/g,Yb=`
`,rp="/",ip="*",Fn="",Xb="comment",Zb="declaration";function ek(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(b){var k=b.match(Wb);k&&(n+=k.length);var E=b.lastIndexOf(Yb);r=~E?b.length-E:r+b.length}function o(){var b={line:n,column:r};return function(k){return k.position=new a(b),u(),k}}function a(b){this.start=b,this.end={line:n,column:r},this.source=t.source}a.prototype.content=e;function s(b){var k=new Error(t.source+":"+n+":"+r+": "+b);if(k.reason=b,k.filename=t.source,k.line=n,k.column=r,k.source=e,!t.silent)throw k}function c(b){var k=b.exec(e);if(k){var E=k[0];return i(E),e=e.slice(E.length),k}}function u(){c(Hb)}function d(b){var k;for(b=b||[];k=p();)k!==!1&&b.push(k);return b}function p(){var b=o();if(!(rp!=e.charAt(0)||ip!=e.charAt(1))){for(var k=2;Fn!=e.charAt(k)&&(ip!=e.charAt(k)||rp!=e.charAt(k+1));)++k;if(k+=2,Fn===e.charAt(k-1))return s("End of comment missing");var E=e.slice(2,k-2);return r+=2,i(E),e=e.slice(k),r+=2,b({type:Xb,comment:E})}}function f(){var b=o(),k=c(qb);if(k){if(p(),!c(Kb))return s("property missing ':'");var E=c(Gb),g=b({type:Zb,property:op(k[0].replace(np,Fn)),value:E?op(E[0].replace(np,Fn)):Fn});return c(Qb),g}}function m(){var b=[];d(b);for(var k;k=f();)k!==!1&&(b.push(k),d(b));return b}return u(),m()}function op(e){return e?e.replace(Jb,Fn):Fn}var tk=ek,nk=Fo&&Fo.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(tu,"__esModule",{value:!0});tu.default=ik;const rk=nk(tk);function ik(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,rk.default)(e),i=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:a,value:s}=o;i?t(a,s,o):s&&(n=n||{},n[a]=s)}),n}var Al={};Object.defineProperty(Al,"__esModule",{value:!0});Al.camelCase=void 0;var ok=/^--[a-zA-Z0-9_-]+$/,lk=/-([a-z])/g,ak=/^[^-]+$/,sk=/^-(webkit|moz|ms|o|khtml)-/,ck=/^-(ms)-/,uk=function(e){return!e||ak.test(e)||ok.test(e)},dk=function(e,t){return t.toUpperCase()},lp=function(e,t){return"".concat(t,"-")},pk=function(e,t){return t===void 0&&(t={}),uk(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(ck,lp):e=e.replace(sk,lp),e.replace(lk,dk))};Al.camelCase=pk;var fk=Fo&&Fo.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},mk=fk(tu),hk=Al;function Os(e,t){var n={};return!e||typeof e!="string"||(0,mk.default)(e,function(r,i){r&&i&&(n[(0,hk.camelCase)(r,t)]=i)}),n}Os.default=Os;var gk=Os;const xk=ml(gk),hg=gg("end"),nu=gg("start");function gg(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function yk(e){const t=nu(e),n=hg(e);if(t&&n)return{start:t,end:n}}function bi(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?ap(e.position):"start"in e||"end"in e?ap(e):"line"in e||"column"in e?Ds(e):""}function Ds(e){return sp(e&&e.line)+":"+sp(e&&e.column)}function ap(e){return Ds(e&&e.start)+"-"+Ds(e&&e.end)}function sp(e){return e&&typeof e=="number"?e:1}class Ge extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},a=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(a=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?o.ruleId=r:(o.source=r.slice(0,c),o.ruleId=r.slice(c+1))}if(!o.place&&o.ancestors&&o.ancestors){const c=o.ancestors[o.ancestors.length-1];c&&(o.place=c.position)}const s=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=s?s.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=s?s.line:void 0,this.name=bi(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=a&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Ge.prototype.file="";Ge.prototype.name="";Ge.prototype.reason="";Ge.prototype.message="";Ge.prototype.stack="";Ge.prototype.column=void 0;Ge.prototype.line=void 0;Ge.prototype.ancestors=void 0;Ge.prototype.cause=void 0;Ge.prototype.fatal=void 0;Ge.prototype.place=void 0;Ge.prototype.ruleId=void 0;Ge.prototype.source=void 0;const ru={}.hasOwnProperty,vk=new Map,bk=/[A-Z]/g,kk=new Set(["table","tbody","thead","tfoot","tr"]),wk=new Set(["td","th"]),xg="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function jk(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=Pk(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Tk(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?eu:Ub,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=yg(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function yg(e,t,n){if(t.type==="element")return Sk(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return _k(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return Nk(e,t,n);if(t.type==="mdxjsEsm")return Ck(e,t);if(t.type==="root")return Ek(e,t,n);if(t.type==="text")return zk(e,t)}function Sk(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=eu,e.schema=i),e.ancestors.push(t);const o=bg(e,t.tagName,!1),a=Lk(e,t);let s=ou(e,t);return kk.has(t.tagName)&&(s=s.filter(function(c){return typeof c=="string"?!Lb(c):!0})),vg(e,a,o,t),iu(a,s),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function _k(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Wi(e,t.position)}function Ck(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Wi(e,t.position)}function Nk(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=eu,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:bg(e,t.name,!0),a=Ik(e,t),s=ou(e,t);return vg(e,a,o,t),iu(a,s),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function Ek(e,t,n){const r={};return iu(r,ou(e,t)),e.create(t,e.Fragment,r,n)}function zk(e,t){return t.value}function vg(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function iu(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function Tk(e,t,n){return r;function r(i,o,a,s){const u=Array.isArray(a.children)?n:t;return s?u(o,a,s):u(o,a)}}function Pk(e,t){return n;function n(r,i,o,a){const s=Array.isArray(o.children),c=nu(r);return t(i,o,a,s,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function Lk(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&ru.call(t.properties,i)){const o=Ak(e,i,t.properties[i]);if(o){const[a,s]=o;e.tableCellAlignToStyle&&a==="align"&&typeof s=="string"&&wk.has(t.tagName)?r=s:n[a]=s}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function Ik(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const a=o.expression;a.type;const s=a.properties[0];s.type,Object.assign(n,e.evaluater.evaluateExpression(s.argument))}else Wi(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const s=r.value.data.estree.body[0];s.type,o=e.evaluater.evaluateExpression(s.expression)}else Wi(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function ou(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:vk;for(;++r<t.children.length;){const o=t.children[r];let a;if(e.passKeys){const c=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(c){const u=i.get(c)||0;a=c+"-"+u,i.set(c,u+1)}}const s=yg(e,o,a);s!==void 0&&n.push(s)}return n}function Ak(e,t,n){const r=Fb(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Nb(n):Vb(n)),r.property==="style"){let i=typeof n=="object"?n:Rk(e,String(n));return e.stylePropertyNameCase==="css"&&(i=Mk(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?Mb[r.property]||r.property:r.attribute,n]}}function Rk(e,t){try{return xk(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new Ge("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=xg+"#cannot-parse-style-attribute",i}}function bg(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,a;for(;++o<i.length;){const s=Xd(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};a=a?{type:"MemberExpression",object:a,property:s,computed:!!(o&&s.type==="Literal"),optional:!1}:s}r=a}else r=Xd(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return ru.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Wi(e)}function Wi(e,t){const n=new Ge("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=xg+"#cannot-handle-mdx-estrees-without-createevaluater",n}function Mk(e){const t={};let n;for(n in e)ru.call(e,n)&&(t[Ok(n)]=e[n]);return t}function Ok(e){let t=e.replace(bk,Dk);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function Dk(e){return"-"+e.toLowerCase()}const va={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Fk={};function $k(e,t){const n=Fk,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return kg(e,r,i)}function kg(e,t,n){if(Bk(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return cp(e.children,t,n)}return Array.isArray(e)?cp(e,t,n):""}function cp(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=kg(e[i],t,n);return r.join("")}function Bk(e){return!!(e&&typeof e=="object")}const up=document.createElement("i");function lu(e){const t="&"+e+";";up.innerHTML=t;const n=up.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Gt(e,t,n,r){const i=e.length;let o=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);o<r.length;)a=r.slice(o,o+1e4),a.unshift(t,0),e.splice(...a),o+=1e4,t+=1e4}function _t(e,t){return e.length>0?(Gt(e,e.length,0,t),e):t}const dp={}.hasOwnProperty;function Uk(e){const t={};let n=-1;for(;++n<e.length;)Vk(t,e[n]);return t}function Vk(e,t){let n;for(n in t){const i=(dp.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let a;if(o)for(a in o){dp.call(i,a)||(i[a]=[]);const s=o[a];Wk(i[a],Array.isArray(s)?s:s?[s]:[])}}}function Wk(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Gt(e,0,0,r)}function wg(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Er(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Wt=Rn(/[A-Za-z]/),mt=Rn(/[\dA-Za-z]/),Hk=Rn(/[#-'*+\--9=?A-Z^-~]/);function Fs(e){return e!==null&&(e<32||e===127)}const $s=Rn(/\d/),qk=Rn(/[\dA-Fa-f]/),Kk=Rn(/[!-/:-@[-`{-~]/);function oe(e){return e!==null&&e<-2}function lt(e){return e!==null&&(e<0||e===32)}function ge(e){return e===-2||e===-1||e===32}const Gk=Rn(new RegExp("\\p{P}|\\p{S}","u")),Qk=Rn(/\s/);function Rn(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Wr(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let a="";if(o===37&&mt(e.charCodeAt(n+1))&&mt(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(a=String.fromCharCode(o));else if(o>55295&&o<57344){const s=e.charCodeAt(n+1);o<56320&&s>56319&&s<57344?(a=String.fromCharCode(o,s),i=1):a="�"}else a=String.fromCharCode(o);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function ke(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return a;function a(c){return ge(c)?(e.enter(n),s(c)):t(c)}function s(c){return ge(c)&&o++<i?(e.consume(c),s):(e.exit(n),t(c))}}const Jk={tokenize:Yk};function Yk(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),ke(e,t,"linePrefix")}function i(s){return e.enter("paragraph"),o(s)}function o(s){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,a(s)}function a(s){if(s===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(s);return}return oe(s)?(e.consume(s),e.exit("chunkText"),o):(e.consume(s),a)}}const Xk={tokenize:Zk},pp={tokenize:ew};function Zk(e){const t=this,n=[];let r=0,i,o,a;return s;function s(y){if(r<n.length){const P=n[r];return t.containerState=P[1],e.attempt(P[0].continuation,c,u)(y)}return u(y)}function c(y){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&h();const P=t.events.length;let C=P,w;for(;C--;)if(t.events[C][0]==="exit"&&t.events[C][1].type==="chunkFlow"){w=t.events[C][1].end;break}g(r);let T=P;for(;T<t.events.length;)t.events[T][1].end={...w},T++;return Gt(t.events,C+1,0,t.events.slice(P)),t.events.length=T,u(y)}return s(y)}function u(y){if(r===n.length){if(!i)return f(y);if(i.currentConstruct&&i.currentConstruct.concrete)return b(y);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(pp,d,p)(y)}function d(y){return i&&h(),g(r),f(y)}function p(y){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,b(y)}function f(y){return t.containerState={},e.attempt(pp,m,b)(y)}function m(y){return r++,n.push([t.currentConstruct,t.containerState]),f(y)}function b(y){if(y===null){i&&h(),g(0),e.consume(y);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),k(y)}function k(y){if(y===null){E(e.exit("chunkFlow"),!0),g(0),e.consume(y);return}return oe(y)?(e.consume(y),E(e.exit("chunkFlow")),r=0,t.interrupt=void 0,s):(e.consume(y),k)}function E(y,P){const C=t.sliceStream(y);if(P&&C.push(null),y.previous=o,o&&(o.next=y),o=y,i.defineSkip(y.start),i.write(C),t.parser.lazy[y.start.line]){let w=i.events.length;for(;w--;)if(i.events[w][1].start.offset<a&&(!i.events[w][1].end||i.events[w][1].end.offset>a))return;const T=t.events.length;let O=T,B,j;for(;O--;)if(t.events[O][0]==="exit"&&t.events[O][1].type==="chunkFlow"){if(B){j=t.events[O][1].end;break}B=!0}for(g(r),w=T;w<t.events.length;)t.events[w][1].end={...j},w++;Gt(t.events,O+1,0,t.events.slice(T)),t.events.length=w}}function g(y){let P=n.length;for(;P-- >y;){const C=n[P];t.containerState=C[1],C[0].exit.call(t,e)}n.length=y}function h(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function ew(e,t,n){return ke(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function fp(e){if(e===null||lt(e)||Qk(e))return 1;if(Gk(e))return 2}function au(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const Bs={name:"attention",resolveAll:tw,tokenize:nw};function tw(e,t){let n=-1,r,i,o,a,s,c,u,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p={...e[r][1].end},f={...e[n][1].start};mp(p,-c),mp(f,c),a={type:c>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},s={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},o={type:c>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?"strong":"emphasis",start:{...a.start},end:{...s.end}},e[r][1].end={...a.start},e[n][1].start={...s.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=_t(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=_t(u,[["enter",i,t],["enter",a,t],["exit",a,t],["enter",o,t]]),u=_t(u,au(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=_t(u,[["exit",o,t],["enter",s,t],["exit",s,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,u=_t(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,Gt(e,r-1,n-r+3,u),n=r+u.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function nw(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=fp(r);let o;return a;function a(c){return o=c,e.enter("attentionSequence"),s(c)}function s(c){if(c===o)return e.consume(c),s;const u=e.exit("attentionSequence"),d=fp(c),p=!d||d===2&&i||n.includes(c),f=!i||i===2&&d||n.includes(r);return u._open=!!(o===42?p:p&&(i||!f)),u._close=!!(o===42?f:f&&(d||!p)),t(c)}}function mp(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const rw={name:"autolink",tokenize:iw};function iw(e,t,n){let r=0;return i;function i(m){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(m){return Wt(m)?(e.consume(m),a):m===64?n(m):u(m)}function a(m){return m===43||m===45||m===46||mt(m)?(r=1,s(m)):u(m)}function s(m){return m===58?(e.consume(m),r=0,c):(m===43||m===45||m===46||mt(m))&&r++<32?(e.consume(m),s):(r=0,u(m))}function c(m){return m===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):m===null||m===32||m===60||Fs(m)?n(m):(e.consume(m),c)}function u(m){return m===64?(e.consume(m),d):Hk(m)?(e.consume(m),u):n(m)}function d(m){return mt(m)?p(m):n(m)}function p(m){return m===46?(e.consume(m),r=0,d):m===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):f(m)}function f(m){if((m===45||mt(m))&&r++<63){const b=m===45?f:p;return e.consume(m),b}return n(m)}}const Rl={partial:!0,tokenize:ow};function ow(e,t,n){return r;function r(o){return ge(o)?ke(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||oe(o)?t(o):n(o)}}const jg={continuation:{tokenize:aw},exit:sw,name:"blockQuote",tokenize:lw};function lw(e,t,n){const r=this;return i;function i(a){if(a===62){const s=r.containerState;return s.open||(e.enter("blockQuote",{_container:!0}),s.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),o}return n(a)}function o(a){return ge(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function aw(e,t,n){const r=this;return i;function i(a){return ge(a)?ke(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):o(a)}function o(a){return e.attempt(jg,t,n)(a)}}function sw(e){e.exit("blockQuote")}const Sg={name:"characterEscape",tokenize:cw};function cw(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return Kk(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const _g={name:"characterReference",tokenize:uw};function uw(e,t,n){const r=this;let i=0,o,a;return s;function s(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),c}function c(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,a=mt,d(p))}function u(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,a=qk,d):(e.enter("characterReferenceValue"),o=7,a=$s,d(p))}function d(p){if(p===59&&i){const f=e.exit("characterReferenceValue");return a===mt&&!lu(r.sliceSerialize(f))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(p)&&i++<o?(e.consume(p),d):n(p)}}const hp={partial:!0,tokenize:pw},gp={concrete:!0,name:"codeFenced",tokenize:dw};function dw(e,t,n){const r=this,i={partial:!0,tokenize:C};let o=0,a=0,s;return c;function c(w){return u(w)}function u(w){const T=r.events[r.events.length-1];return o=T&&T[1].type==="linePrefix"?T[2].sliceSerialize(T[1],!0).length:0,s=w,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(w)}function d(w){return w===s?(a++,e.consume(w),d):a<3?n(w):(e.exit("codeFencedFenceSequence"),ge(w)?ke(e,p,"whitespace")(w):p(w))}function p(w){return w===null||oe(w)?(e.exit("codeFencedFence"),r.interrupt?t(w):e.check(hp,k,P)(w)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(w))}function f(w){return w===null||oe(w)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(w)):ge(w)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),ke(e,m,"whitespace")(w)):w===96&&w===s?n(w):(e.consume(w),f)}function m(w){return w===null||oe(w)?p(w):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),b(w))}function b(w){return w===null||oe(w)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(w)):w===96&&w===s?n(w):(e.consume(w),b)}function k(w){return e.attempt(i,P,E)(w)}function E(w){return e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),g}function g(w){return o>0&&ge(w)?ke(e,h,"linePrefix",o+1)(w):h(w)}function h(w){return w===null||oe(w)?e.check(hp,k,P)(w):(e.enter("codeFlowValue"),y(w))}function y(w){return w===null||oe(w)?(e.exit("codeFlowValue"),h(w)):(e.consume(w),y)}function P(w){return e.exit("codeFenced"),t(w)}function C(w,T,O){let B=0;return j;function j(D){return w.enter("lineEnding"),w.consume(D),w.exit("lineEnding"),x}function x(D){return w.enter("codeFencedFence"),ge(D)?ke(w,S,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(D):S(D)}function S(D){return D===s?(w.enter("codeFencedFenceSequence"),z(D)):O(D)}function z(D){return D===s?(B++,w.consume(D),z):B>=a?(w.exit("codeFencedFenceSequence"),ge(D)?ke(w,$,"whitespace")(D):$(D)):O(D)}function $(D){return D===null||oe(D)?(w.exit("codeFencedFence"),T(D)):O(D)}}}function pw(e,t,n){const r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}const ba={name:"codeIndented",tokenize:mw},fw={partial:!0,tokenize:hw};function mw(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),ke(e,o,"linePrefix",5)(u)}function o(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?a(u):n(u)}function a(u){return u===null?c(u):oe(u)?e.attempt(fw,a,c)(u):(e.enter("codeFlowValue"),s(u))}function s(u){return u===null||oe(u)?(e.exit("codeFlowValue"),a(u)):(e.consume(u),s)}function c(u){return e.exit("codeIndented"),t(u)}}function hw(e,t,n){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):oe(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):ke(e,o,"linePrefix",5)(a)}function o(a){const s=r.events[r.events.length-1];return s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(a):oe(a)?i(a):n(a)}}const gw={name:"codeText",previous:yw,resolve:xw,tokenize:vw};function xw(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function yw(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function vw(e,t,n){let r=0,i,o;return a;function a(p){return e.enter("codeText"),e.enter("codeTextSequence"),s(p)}function s(p){return p===96?(e.consume(p),r++,s):(e.exit("codeTextSequence"),c(p))}function c(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),c):p===96?(o=e.enter("codeTextSequence"),i=0,d(p)):oe(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),c):(e.enter("codeTextData"),u(p))}function u(p){return p===null||p===32||p===96||oe(p)?(e.exit("codeTextData"),c(p)):(e.consume(p),u)}function d(p){return p===96?(e.consume(p),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(o.type="codeTextData",u(p))}}class bw{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&ti(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),ti(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),ti(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);ti(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);ti(this.left,n.reverse())}}}function ti(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Cg(e){const t={};let n=-1,r,i,o,a,s,c,u;const d=new bw(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,o=0,o<c.length&&c[o][1].type==="lineEndingBlank"&&(o+=2),o<c.length&&c[o][1].type==="content"))for(;++o<c.length&&c[o][1].type!=="content";)c[o][1].type==="chunkText"&&(c[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,kw(d,n)),n=t[n],u=!0);else if(r[1]._container){for(o=n,i=void 0;o--;)if(a=d.get(o),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=o);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},s=d.slice(i,n),s.unshift(r),d.splice(i,n-i+1,s))}}return Gt(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function kw(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const o=[];let a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const s=a.events,c=[],u={};let d,p,f=-1,m=n,b=0,k=0;const E=[k];for(;m;){for(;e.get(++i)[1]!==m;);o.push(i),m._tokenizer||(d=r.sliceStream(m),m.next||d.push(null),p&&a.defineSkip(m.start),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),p=m,m=m.next}for(m=n;++f<s.length;)s[f][0]==="exit"&&s[f-1][0]==="enter"&&s[f][1].type===s[f-1][1].type&&s[f][1].start.line!==s[f][1].end.line&&(k=f+1,E.push(k),m._tokenizer=void 0,m.previous=void 0,m=m.next);for(a.events=[],m?(m._tokenizer=void 0,m.previous=void 0):E.pop(),f=E.length;f--;){const g=s.slice(E[f],E[f+1]),h=o.pop();c.push([h,h+g.length-1]),e.splice(h,2,g)}for(c.reverse(),f=-1;++f<c.length;)u[b+c[f][0]]=b+c[f][1],b+=c[f][1]-c[f][0]-1;return u}const ww={resolve:Sw,tokenize:_w},jw={partial:!0,tokenize:Cw};function Sw(e){return Cg(e),e}function _w(e,t){let n;return r;function r(s){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(s)}function i(s){return s===null?o(s):oe(s)?e.check(jw,a,o)(s):(e.consume(s),i)}function o(s){return e.exit("chunkContent"),e.exit("content"),t(s)}function a(s){return e.consume(s),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function Cw(e,t,n){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),ke(e,o,"linePrefix")}function o(a){if(a===null||oe(a))return n(a);const s=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function Ng(e,t,n,r,i,o,a,s,c){const u=c||Number.POSITIVE_INFINITY;let d=0;return p;function p(g){return g===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(g),e.exit(o),f):g===null||g===32||g===41||Fs(g)?n(g):(e.enter(r),e.enter(a),e.enter(s),e.enter("chunkString",{contentType:"string"}),k(g))}function f(g){return g===62?(e.enter(o),e.consume(g),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(s),e.enter("chunkString",{contentType:"string"}),m(g))}function m(g){return g===62?(e.exit("chunkString"),e.exit(s),f(g)):g===null||g===60||oe(g)?n(g):(e.consume(g),g===92?b:m)}function b(g){return g===60||g===62||g===92?(e.consume(g),m):m(g)}function k(g){return!d&&(g===null||g===41||lt(g))?(e.exit("chunkString"),e.exit(s),e.exit(a),e.exit(r),t(g)):d<u&&g===40?(e.consume(g),d++,k):g===41?(e.consume(g),d--,k):g===null||g===32||g===40||Fs(g)?n(g):(e.consume(g),g===92?E:k)}function E(g){return g===40||g===41||g===92?(e.consume(g),k):k(g)}}function Eg(e,t,n,r,i,o){const a=this;let s=0,c;return u;function u(m){return e.enter(r),e.enter(i),e.consume(m),e.exit(i),e.enter(o),d}function d(m){return s>999||m===null||m===91||m===93&&!c||m===94&&!s&&"_hiddenFootnoteSupport"in a.parser.constructs?n(m):m===93?(e.exit(o),e.enter(i),e.consume(m),e.exit(i),e.exit(r),t):oe(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),p(m))}function p(m){return m===null||m===91||m===93||oe(m)||s++>999?(e.exit("chunkString"),d(m)):(e.consume(m),c||(c=!ge(m)),m===92?f:p)}function f(m){return m===91||m===92||m===93?(e.consume(m),s++,p):p(m)}}function zg(e,t,n,r,i,o){let a;return s;function s(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),a=f===40?41:f,c):n(f)}function c(f){return f===a?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(o),u(f))}function u(f){return f===a?(e.exit(o),c(a)):f===null?n(f):oe(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),ke(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===a||f===null||oe(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?p:d)}function p(f){return f===a||f===92?(e.consume(f),d):d(f)}}function ki(e,t){let n;return r;function r(i){return oe(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):ge(i)?ke(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const Nw={name:"definition",tokenize:zw},Ew={partial:!0,tokenize:Tw};function zw(e,t,n){const r=this;let i;return o;function o(m){return e.enter("definition"),a(m)}function a(m){return Eg.call(r,e,s,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(m)}function s(m){return i=Er(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),m===58?(e.enter("definitionMarker"),e.consume(m),e.exit("definitionMarker"),c):n(m)}function c(m){return lt(m)?ki(e,u)(m):u(m)}function u(m){return Ng(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(m)}function d(m){return e.attempt(Ew,p,p)(m)}function p(m){return ge(m)?ke(e,f,"whitespace")(m):f(m)}function f(m){return m===null||oe(m)?(e.exit("definition"),r.parser.defined.push(i),t(m)):n(m)}}function Tw(e,t,n){return r;function r(s){return lt(s)?ki(e,i)(s):n(s)}function i(s){return zg(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(s)}function o(s){return ge(s)?ke(e,a,"whitespace")(s):a(s)}function a(s){return s===null||oe(s)?t(s):n(s)}}const Pw={name:"hardBreakEscape",tokenize:Lw};function Lw(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return oe(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const Iw={name:"headingAtx",resolve:Aw,tokenize:Rw};function Aw(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Gt(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function Rw(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),o(d)}function o(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&r++<6?(e.consume(d),a):d===null||lt(d)?(e.exit("atxHeadingSequence"),s(d)):n(d)}function s(d){return d===35?(e.enter("atxHeadingSequence"),c(d)):d===null||oe(d)?(e.exit("atxHeading"),t(d)):ge(d)?ke(e,s,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function c(d){return d===35?(e.consume(d),c):(e.exit("atxHeadingSequence"),s(d))}function u(d){return d===null||d===35||lt(d)?(e.exit("atxHeadingText"),s(d)):(e.consume(d),u)}}const Mw=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],xp=["pre","script","style","textarea"],Ow={concrete:!0,name:"htmlFlow",resolveTo:$w,tokenize:Bw},Dw={partial:!0,tokenize:Vw},Fw={partial:!0,tokenize:Uw};function $w(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Bw(e,t,n){const r=this;let i,o,a,s,c;return u;function u(N){return d(N)}function d(N){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(N),p}function p(N){return N===33?(e.consume(N),f):N===47?(e.consume(N),o=!0,k):N===63?(e.consume(N),i=3,r.interrupt?t:v):Wt(N)?(e.consume(N),a=String.fromCharCode(N),E):n(N)}function f(N){return N===45?(e.consume(N),i=2,m):N===91?(e.consume(N),i=5,s=0,b):Wt(N)?(e.consume(N),i=4,r.interrupt?t:v):n(N)}function m(N){return N===45?(e.consume(N),r.interrupt?t:v):n(N)}function b(N){const re="CDATA[";return N===re.charCodeAt(s++)?(e.consume(N),s===re.length?r.interrupt?t:S:b):n(N)}function k(N){return Wt(N)?(e.consume(N),a=String.fromCharCode(N),E):n(N)}function E(N){if(N===null||N===47||N===62||lt(N)){const re=N===47,I=a.toLowerCase();return!re&&!o&&xp.includes(I)?(i=1,r.interrupt?t(N):S(N)):Mw.includes(a.toLowerCase())?(i=6,re?(e.consume(N),g):r.interrupt?t(N):S(N)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(N):o?h(N):y(N))}return N===45||mt(N)?(e.consume(N),a+=String.fromCharCode(N),E):n(N)}function g(N){return N===62?(e.consume(N),r.interrupt?t:S):n(N)}function h(N){return ge(N)?(e.consume(N),h):j(N)}function y(N){return N===47?(e.consume(N),j):N===58||N===95||Wt(N)?(e.consume(N),P):ge(N)?(e.consume(N),y):j(N)}function P(N){return N===45||N===46||N===58||N===95||mt(N)?(e.consume(N),P):C(N)}function C(N){return N===61?(e.consume(N),w):ge(N)?(e.consume(N),C):y(N)}function w(N){return N===null||N===60||N===61||N===62||N===96?n(N):N===34||N===39?(e.consume(N),c=N,T):ge(N)?(e.consume(N),w):O(N)}function T(N){return N===c?(e.consume(N),c=null,B):N===null||oe(N)?n(N):(e.consume(N),T)}function O(N){return N===null||N===34||N===39||N===47||N===60||N===61||N===62||N===96||lt(N)?C(N):(e.consume(N),O)}function B(N){return N===47||N===62||ge(N)?y(N):n(N)}function j(N){return N===62?(e.consume(N),x):n(N)}function x(N){return N===null||oe(N)?S(N):ge(N)?(e.consume(N),x):n(N)}function S(N){return N===45&&i===2?(e.consume(N),H):N===60&&i===1?(e.consume(N),A):N===62&&i===4?(e.consume(N),V):N===63&&i===3?(e.consume(N),v):N===93&&i===5?(e.consume(N),L):oe(N)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(Dw,Q,z)(N)):N===null||oe(N)?(e.exit("htmlFlowData"),z(N)):(e.consume(N),S)}function z(N){return e.check(Fw,$,Q)(N)}function $(N){return e.enter("lineEnding"),e.consume(N),e.exit("lineEnding"),D}function D(N){return N===null||oe(N)?z(N):(e.enter("htmlFlowData"),S(N))}function H(N){return N===45?(e.consume(N),v):S(N)}function A(N){return N===47?(e.consume(N),a="",R):S(N)}function R(N){if(N===62){const re=a.toLowerCase();return xp.includes(re)?(e.consume(N),V):S(N)}return Wt(N)&&a.length<8?(e.consume(N),a+=String.fromCharCode(N),R):S(N)}function L(N){return N===93?(e.consume(N),v):S(N)}function v(N){return N===62?(e.consume(N),V):N===45&&i===2?(e.consume(N),v):S(N)}function V(N){return N===null||oe(N)?(e.exit("htmlFlowData"),Q(N)):(e.consume(N),V)}function Q(N){return e.exit("htmlFlow"),t(N)}}function Uw(e,t,n){const r=this;return i;function i(a){return oe(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o):n(a)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function Vw(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Rl,t,n)}}const Ww={name:"htmlText",tokenize:Hw};function Hw(e,t,n){const r=this;let i,o,a;return s;function s(v){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(v),c}function c(v){return v===33?(e.consume(v),u):v===47?(e.consume(v),C):v===63?(e.consume(v),y):Wt(v)?(e.consume(v),O):n(v)}function u(v){return v===45?(e.consume(v),d):v===91?(e.consume(v),o=0,b):Wt(v)?(e.consume(v),h):n(v)}function d(v){return v===45?(e.consume(v),m):n(v)}function p(v){return v===null?n(v):v===45?(e.consume(v),f):oe(v)?(a=p,A(v)):(e.consume(v),p)}function f(v){return v===45?(e.consume(v),m):p(v)}function m(v){return v===62?H(v):v===45?f(v):p(v)}function b(v){const V="CDATA[";return v===V.charCodeAt(o++)?(e.consume(v),o===V.length?k:b):n(v)}function k(v){return v===null?n(v):v===93?(e.consume(v),E):oe(v)?(a=k,A(v)):(e.consume(v),k)}function E(v){return v===93?(e.consume(v),g):k(v)}function g(v){return v===62?H(v):v===93?(e.consume(v),g):k(v)}function h(v){return v===null||v===62?H(v):oe(v)?(a=h,A(v)):(e.consume(v),h)}function y(v){return v===null?n(v):v===63?(e.consume(v),P):oe(v)?(a=y,A(v)):(e.consume(v),y)}function P(v){return v===62?H(v):y(v)}function C(v){return Wt(v)?(e.consume(v),w):n(v)}function w(v){return v===45||mt(v)?(e.consume(v),w):T(v)}function T(v){return oe(v)?(a=T,A(v)):ge(v)?(e.consume(v),T):H(v)}function O(v){return v===45||mt(v)?(e.consume(v),O):v===47||v===62||lt(v)?B(v):n(v)}function B(v){return v===47?(e.consume(v),H):v===58||v===95||Wt(v)?(e.consume(v),j):oe(v)?(a=B,A(v)):ge(v)?(e.consume(v),B):H(v)}function j(v){return v===45||v===46||v===58||v===95||mt(v)?(e.consume(v),j):x(v)}function x(v){return v===61?(e.consume(v),S):oe(v)?(a=x,A(v)):ge(v)?(e.consume(v),x):B(v)}function S(v){return v===null||v===60||v===61||v===62||v===96?n(v):v===34||v===39?(e.consume(v),i=v,z):oe(v)?(a=S,A(v)):ge(v)?(e.consume(v),S):(e.consume(v),$)}function z(v){return v===i?(e.consume(v),i=void 0,D):v===null?n(v):oe(v)?(a=z,A(v)):(e.consume(v),z)}function $(v){return v===null||v===34||v===39||v===60||v===61||v===96?n(v):v===47||v===62||lt(v)?B(v):(e.consume(v),$)}function D(v){return v===47||v===62||lt(v)?B(v):n(v)}function H(v){return v===62?(e.consume(v),e.exit("htmlTextData"),e.exit("htmlText"),t):n(v)}function A(v){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),R}function R(v){return ge(v)?ke(e,L,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(v):L(v)}function L(v){return e.enter("htmlTextData"),a(v)}}const su={name:"labelEnd",resolveAll:Qw,resolveTo:Jw,tokenize:Yw},qw={tokenize:Xw},Kw={tokenize:Zw},Gw={tokenize:ej};function Qw(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&Gt(e,0,e.length,n),e}function Jw(e,t){let n=e.length,r=0,i,o,a,s;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(a){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=n);const c={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[o][1].start},end:{...e[a][1].end}},d={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[a-2][1].start}};return s=[["enter",c,t],["enter",u,t]],s=_t(s,e.slice(o+1,o+r+3)),s=_t(s,[["enter",d,t]]),s=_t(s,au(t.parser.constructs.insideSpan.null,e.slice(o+r+4,a-3),t)),s=_t(s,[["exit",d,t],e[a-2],e[a-1],["exit",u,t]]),s=_t(s,e.slice(a+1)),s=_t(s,[["exit",c,t]]),Gt(e,o,e.length,s),e}function Yw(e,t,n){const r=this;let i=r.events.length,o,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return s;function s(f){return o?o._inactive?p(f):(a=r.parser.defined.includes(Er(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),c):n(f)}function c(f){return f===40?e.attempt(qw,d,a?d:p)(f):f===91?e.attempt(Kw,d,a?u:p)(f):a?d(f):p(f)}function u(f){return e.attempt(Gw,d,p)(f)}function d(f){return t(f)}function p(f){return o._balanced=!0,n(f)}}function Xw(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),i}function i(p){return lt(p)?ki(e,o)(p):o(p)}function o(p){return p===41?d(p):Ng(e,a,s,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function a(p){return lt(p)?ki(e,c)(p):d(p)}function s(p){return n(p)}function c(p){return p===34||p===39||p===40?zg(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function u(p){return lt(p)?ki(e,d)(p):d(p)}function d(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function Zw(e,t,n){const r=this;return i;function i(s){return Eg.call(r,e,o,a,"reference","referenceMarker","referenceString")(s)}function o(s){return r.parser.defined.includes(Er(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(s):n(s)}function a(s){return n(s)}}function ej(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const tj={name:"labelStartImage",resolveAll:su.resolveAll,tokenize:nj};function nj(e,t,n){const r=this;return i;function i(s){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(s),e.exit("labelImageMarker"),o}function o(s){return s===91?(e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelImage"),a):n(s)}function a(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(s):t(s)}}const rj={name:"labelStartLink",resolveAll:su.resolveAll,tokenize:ij};function ij(e,t,n){const r=this;return i;function i(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),o}function o(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const ka={name:"lineEnding",tokenize:oj};function oj(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),ke(e,t,"linePrefix")}}const Oo={name:"thematicBreak",tokenize:lj};function lj(e,t,n){let r=0,i;return o;function o(u){return e.enter("thematicBreak"),a(u)}function a(u){return i=u,s(u)}function s(u){return u===i?(e.enter("thematicBreakSequence"),c(u)):r>=3&&(u===null||oe(u))?(e.exit("thematicBreak"),t(u)):n(u)}function c(u){return u===i?(e.consume(u),r++,c):(e.exit("thematicBreakSequence"),ge(u)?ke(e,s,"whitespace")(u):s(u))}}const et={continuation:{tokenize:uj},exit:pj,name:"list",tokenize:cj},aj={partial:!0,tokenize:fj},sj={partial:!0,tokenize:dj};function cj(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return s;function s(m){const b=r.containerState.type||(m===42||m===43||m===45?"listUnordered":"listOrdered");if(b==="listUnordered"?!r.containerState.marker||m===r.containerState.marker:$s(m)){if(r.containerState.type||(r.containerState.type=b,e.enter(b,{_container:!0})),b==="listUnordered")return e.enter("listItemPrefix"),m===42||m===45?e.check(Oo,n,u)(m):u(m);if(!r.interrupt||m===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(m)}return n(m)}function c(m){return $s(m)&&++a<10?(e.consume(m),c):(!r.interrupt||a<2)&&(r.containerState.marker?m===r.containerState.marker:m===41||m===46)?(e.exit("listItemValue"),u(m)):n(m)}function u(m){return e.enter("listItemMarker"),e.consume(m),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||m,e.check(Rl,r.interrupt?n:d,e.attempt(aj,f,p))}function d(m){return r.containerState.initialBlankLine=!0,o++,f(m)}function p(m){return ge(m)?(e.enter("listItemPrefixWhitespace"),e.consume(m),e.exit("listItemPrefixWhitespace"),f):n(m)}function f(m){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(m)}}function uj(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Rl,i,o);function i(s){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,ke(e,t,"listItemIndent",r.containerState.size+1)(s)}function o(s){return r.containerState.furtherBlankLines||!ge(s)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(s)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(sj,t,a)(s))}function a(s){return r.containerState._closeFlow=!0,r.interrupt=void 0,ke(e,e.attempt(et,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s)}}function dj(e,t,n){const r=this;return ke(e,i,"listItemIndent",r.containerState.size+1);function i(o){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(o):n(o)}}function pj(e){e.exit(this.containerState.type)}function fj(e,t,n){const r=this;return ke(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const a=r.events[r.events.length-1];return!ge(o)&&a&&a[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const yp={name:"setextUnderline",resolveTo:mj,tokenize:hj};function mj(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",a,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=a,e.push(["exit",a,t]),e}function hj(e,t,n){const r=this;let i;return o;function o(u){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),i=u,a(u)):n(u)}function a(u){return e.enter("setextHeadingLineSequence"),s(u)}function s(u){return u===i?(e.consume(u),s):(e.exit("setextHeadingLineSequence"),ge(u)?ke(e,c,"lineSuffix")(u):c(u))}function c(u){return u===null||oe(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const gj={tokenize:xj};function xj(e){const t=this,n=e.attempt(Rl,r,e.attempt(this.parser.constructs.flowInitial,i,ke(e,e.attempt(this.parser.constructs.flow,i,e.attempt(ww,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const yj={resolveAll:Pg()},vj=Tg("string"),bj=Tg("text");function Tg(e){return{resolveAll:Pg(e==="text"?kj:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,a,s);return a;function a(d){return u(d)?o(d):s(d)}function s(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),c}function c(d){return u(d)?(n.exit("data"),o(d)):(n.consume(d),c)}function u(d){if(d===null)return!0;const p=i[d];let f=-1;if(p)for(;++f<p.length;){const m=p[f];if(!m.previous||m.previous.call(r,r.previous))return!0}return!1}}}function Pg(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function kj(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,a=-1,s=0,c;for(;o--;){const u=i[o];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)s++,a--;if(a)break;a=-1}else if(u===-2)c=!0,s++;else if(u!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(s=0),s){const u={type:n===e.length||c||s<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?a:r.start._bufferIndex+a,_index:r.start._index+o,line:r.end.line,column:r.end.column-s,offset:r.end.offset-s},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const wj={42:et,43:et,45:et,48:et,49:et,50:et,51:et,52:et,53:et,54:et,55:et,56:et,57:et,62:jg},jj={91:Nw},Sj={[-2]:ba,[-1]:ba,32:ba},_j={35:Iw,42:Oo,45:[yp,Oo],60:Ow,61:yp,95:Oo,96:gp,126:gp},Cj={38:_g,92:Sg},Nj={[-5]:ka,[-4]:ka,[-3]:ka,33:tj,38:_g,42:Bs,60:[rw,Ww],91:rj,92:[Pw,Sg],93:su,95:Bs,96:gw},Ej={null:[Bs,yj]},zj={null:[42,95]},Tj={null:[]},Pj=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:zj,contentInitial:jj,disable:Tj,document:wj,flow:_j,flowInitial:Sj,insideSpan:Ej,string:Cj,text:Nj},Symbol.toStringTag,{value:"Module"}));function Lj(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},o=[];let a=[],s=[];const c={attempt:T(C),check:T(w),consume:h,enter:y,exit:P,interrupt:T(w,{interrupt:!0})},u={code:null,containerState:{},defineSkip:k,events:[],now:b,parser:e,previous:null,sliceSerialize:f,sliceStream:m,write:p};let d=t.tokenize.call(u,c);return t.resolveAll&&o.push(t),u;function p(x){return a=_t(a,x),E(),a[a.length-1]!==null?[]:(O(t,0),u.events=au(o,u.events,u),u.events)}function f(x,S){return Aj(m(x),S)}function m(x){return Ij(a,x)}function b(){const{_bufferIndex:x,_index:S,line:z,column:$,offset:D}=r;return{_bufferIndex:x,_index:S,line:z,column:$,offset:D}}function k(x){i[x.line]=x.column,j()}function E(){let x;for(;r._index<a.length;){const S=a[r._index];if(typeof S=="string")for(x=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===x&&r._bufferIndex<S.length;)g(S.charCodeAt(r._bufferIndex));else g(S)}}function g(x){d=d(x)}function h(x){oe(x)?(r.line++,r.column=1,r.offset+=x===-3?2:1,j()):x!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=x}function y(x,S){const z=S||{};return z.type=x,z.start=b(),u.events.push(["enter",z,u]),s.push(z),z}function P(x){const S=s.pop();return S.end=b(),u.events.push(["exit",S,u]),S}function C(x,S){O(x,S.from)}function w(x,S){S.restore()}function T(x,S){return z;function z($,D,H){let A,R,L,v;return Array.isArray($)?Q($):"tokenize"in $?Q([$]):V($);function V(J){return F;function F(Y){const Z=Y!==null&&J[Y],le=Y!==null&&J.null,me=[...Array.isArray(Z)?Z:Z?[Z]:[],...Array.isArray(le)?le:le?[le]:[]];return Q(me)(Y)}}function Q(J){return A=J,R=0,J.length===0?H:N(J[R])}function N(J){return F;function F(Y){return v=B(),L=J,J.partial||(u.currentConstruct=J),J.name&&u.parser.constructs.disable.null.includes(J.name)?I():J.tokenize.call(S?Object.assign(Object.create(u),S):u,c,re,I)(Y)}}function re(J){return x(L,v),D}function I(J){return v.restore(),++R<A.length?N(A[R]):H}}}function O(x,S){x.resolveAll&&!o.includes(x)&&o.push(x),x.resolve&&Gt(u.events,S,u.events.length-S,x.resolve(u.events.slice(S),u)),x.resolveTo&&(u.events=x.resolveTo(u.events,u))}function B(){const x=b(),S=u.previous,z=u.currentConstruct,$=u.events.length,D=Array.from(s);return{from:$,restore:H};function H(){r=x,u.previous=S,u.currentConstruct=z,u.events.length=$,s=D,j()}}function j(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function Ij(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let a;if(n===i)a=[e[n].slice(r,o)];else{if(a=e.slice(n,i),r>-1){const s=a[0];typeof s=="string"?a[0]=s.slice(r):a.shift()}o>0&&a.push(e[i].slice(0,o))}return a}function Aj(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let a;if(typeof o=="string")a=o;else switch(o){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(o)}i=o===-2,r.push(a)}return r.join("")}function Rj(e){const r={constructs:Uk([Pj,...(e||{}).extensions||[]]),content:i(Jk),defined:[],document:i(Xk),flow:i(gj),lazy:{},string:i(vj),text:i(bj)};return r;function i(o){return a;function a(s){return Lj(r,o,s)}}}function Mj(e){for(;!Cg(e););return e}const vp=/[\0\t\n\r]/g;function Oj(){let e=1,t="",n=!0,r;return i;function i(o,a,s){const c=[];let u,d,p,f,m;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(a||void 0).decode(o)),p=0,t="",n&&(o.charCodeAt(0)===65279&&p++,n=void 0);p<o.length;){if(vp.lastIndex=p,u=vp.exec(o),f=u&&u.index!==void 0?u.index:o.length,m=o.charCodeAt(f),!u){t=o.slice(p);break}if(m===10&&p===f&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),p<f&&(c.push(o.slice(p,f)),e+=f-p),m){case 0:{c.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,c.push(-2);e++<d;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}p=f+1}return s&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const Dj=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Fj(e){return e.replace(Dj,$j)}function $j(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return wg(n.slice(o?2:1),o?16:10)}return lu(n)||e}const Lg={}.hasOwnProperty;function Bj(e,t,n){return typeof t!="string"&&(n=t,t=void 0),Uj(n)(Mj(Rj(n).document().write(Oj()(e,t,!0))))}function Uj(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(_e),autolinkProtocol:B,autolinkEmail:B,atxHeading:o(Ve),blockQuote:o(le),characterEscape:B,characterReference:B,codeFenced:o(me),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:o(me,a),codeText:o(de,a),codeTextData:B,data:B,codeFlowValue:B,definition:o(Ze),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:o(bt),hardBreakEscape:o(Ft),hardBreakTrailing:o(Ft),htmlFlow:o(U,a),htmlFlowData:B,htmlText:o(U,a),htmlTextData:B,image:o(pe),label:a,link:o(_e),listItem:o(nr),listItemValue:f,listOrdered:o(st,p),listUnordered:o(st),paragraph:o(W),reference:N,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:o(Ve),strong:o(te),thematicBreak:o(se)},exit:{atxHeading:c(),atxHeadingSequence:C,autolink:c(),autolinkEmail:Z,autolinkProtocol:Y,blockQuote:c(),characterEscapeValue:j,characterReferenceMarkerHexadecimal:I,characterReferenceMarkerNumeric:I,characterReferenceValue:J,characterReference:F,codeFenced:c(E),codeFencedFence:k,codeFencedFenceInfo:m,codeFencedFenceMeta:b,codeFlowValue:j,codeIndented:c(g),codeText:c(D),codeTextData:j,data:j,definition:c(),definitionDestinationString:P,definitionLabelString:h,definitionTitleString:y,emphasis:c(),hardBreakEscape:c(S),hardBreakTrailing:c(S),htmlFlow:c(z),htmlFlowData:j,htmlText:c($),htmlTextData:j,image:c(A),label:L,labelText:R,lineEnding:x,link:c(H),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:re,resourceDestinationString:v,resourceTitleString:V,resource:Q,setextHeading:c(O),setextHeadingLineSequence:T,setextHeadingText:w,strong:c(),thematicBreak:c()}};Ig(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(M){let q={type:"root",children:[]};const ne={stack:[q],tokenStack:[],config:t,enter:s,exit:u,buffer:a,resume:d,data:n},ce=[];let he=-1;for(;++he<M.length;)if(M[he][1].type==="listOrdered"||M[he][1].type==="listUnordered")if(M[he][0]==="enter")ce.push(he);else{const Pt=ce.pop();he=i(M,Pt,he)}for(he=-1;++he<M.length;){const Pt=t[M[he][0]];Lg.call(Pt,M[he][1].type)&&Pt[M[he][1].type].call(Object.assign({sliceSerialize:M[he][2].sliceSerialize},ne),M[he][1])}if(ne.tokenStack.length>0){const Pt=ne.tokenStack[ne.tokenStack.length-1];(Pt[1]||bp).call(ne,void 0,Pt[0])}for(q.position={start:dn(M.length>0?M[0][1].start:{line:1,column:1,offset:0}),end:dn(M.length>0?M[M.length-2][1].end:{line:1,column:1,offset:0})},he=-1;++he<t.transforms.length;)q=t.transforms[he](q)||q;return q}function i(M,q,ne){let ce=q-1,he=-1,Pt=!1,Mn,Qt,Hr,qr;for(;++ce<=ne;){const ct=M[ce];switch(ct[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{ct[0]==="enter"?he++:he--,qr=void 0;break}case"lineEndingBlank":{ct[0]==="enter"&&(Mn&&!qr&&!he&&!Hr&&(Hr=ce),qr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:qr=void 0}if(!he&&ct[0]==="enter"&&ct[1].type==="listItemPrefix"||he===-1&&ct[0]==="exit"&&(ct[1].type==="listUnordered"||ct[1].type==="listOrdered")){if(Mn){let rr=ce;for(Qt=void 0;rr--;){const Jt=M[rr];if(Jt[1].type==="lineEnding"||Jt[1].type==="lineEndingBlank"){if(Jt[0]==="exit")continue;Qt&&(M[Qt][1].type="lineEndingBlank",Pt=!0),Jt[1].type="lineEnding",Qt=rr}else if(!(Jt[1].type==="linePrefix"||Jt[1].type==="blockQuotePrefix"||Jt[1].type==="blockQuotePrefixWhitespace"||Jt[1].type==="blockQuoteMarker"||Jt[1].type==="listItemIndent"))break}Hr&&(!Qt||Hr<Qt)&&(Mn._spread=!0),Mn.end=Object.assign({},Qt?M[Qt][1].start:ct[1].end),M.splice(Qt||ce,0,["exit",Mn,ct[2]]),ce++,ne++}if(ct[1].type==="listItemPrefix"){const rr={type:"listItem",_spread:!1,start:Object.assign({},ct[1].start),end:void 0};Mn=rr,M.splice(ce,0,["enter",rr,ct[2]]),ce++,ne++,Hr=void 0,qr=!0}}}return M[q][1]._spread=Pt,ne}function o(M,q){return ne;function ne(ce){s.call(this,M(ce),ce),q&&q.call(this,ce)}}function a(){this.stack.push({type:"fragment",children:[]})}function s(M,q,ne){this.stack[this.stack.length-1].children.push(M),this.stack.push(M),this.tokenStack.push([q,ne||void 0]),M.position={start:dn(q.start),end:void 0}}function c(M){return q;function q(ne){M&&M.call(this,ne),u.call(this,ne)}}function u(M,q){const ne=this.stack.pop(),ce=this.tokenStack.pop();if(ce)ce[0].type!==M.type&&(q?q.call(this,M,ce[0]):(ce[1]||bp).call(this,M,ce[0]));else throw new Error("Cannot close `"+M.type+"` ("+bi({start:M.start,end:M.end})+"): it’s not open");ne.position.end=dn(M.end)}function d(){return $k(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function f(M){if(this.data.expectingFirstListItemValue){const q=this.stack[this.stack.length-2];q.start=Number.parseInt(this.sliceSerialize(M),10),this.data.expectingFirstListItemValue=void 0}}function m(){const M=this.resume(),q=this.stack[this.stack.length-1];q.lang=M}function b(){const M=this.resume(),q=this.stack[this.stack.length-1];q.meta=M}function k(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function E(){const M=this.resume(),q=this.stack[this.stack.length-1];q.value=M.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function g(){const M=this.resume(),q=this.stack[this.stack.length-1];q.value=M.replace(/(\r?\n|\r)$/g,"")}function h(M){const q=this.resume(),ne=this.stack[this.stack.length-1];ne.label=q,ne.identifier=Er(this.sliceSerialize(M)).toLowerCase()}function y(){const M=this.resume(),q=this.stack[this.stack.length-1];q.title=M}function P(){const M=this.resume(),q=this.stack[this.stack.length-1];q.url=M}function C(M){const q=this.stack[this.stack.length-1];if(!q.depth){const ne=this.sliceSerialize(M).length;q.depth=ne}}function w(){this.data.setextHeadingSlurpLineEnding=!0}function T(M){const q=this.stack[this.stack.length-1];q.depth=this.sliceSerialize(M).codePointAt(0)===61?1:2}function O(){this.data.setextHeadingSlurpLineEnding=void 0}function B(M){const ne=this.stack[this.stack.length-1].children;let ce=ne[ne.length-1];(!ce||ce.type!=="text")&&(ce=ie(),ce.position={start:dn(M.start),end:void 0},ne.push(ce)),this.stack.push(ce)}function j(M){const q=this.stack.pop();q.value+=this.sliceSerialize(M),q.position.end=dn(M.end)}function x(M){const q=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ne=q.children[q.children.length-1];ne.position.end=dn(M.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(q.type)&&(B.call(this,M),j.call(this,M))}function S(){this.data.atHardBreak=!0}function z(){const M=this.resume(),q=this.stack[this.stack.length-1];q.value=M}function $(){const M=this.resume(),q=this.stack[this.stack.length-1];q.value=M}function D(){const M=this.resume(),q=this.stack[this.stack.length-1];q.value=M}function H(){const M=this.stack[this.stack.length-1];if(this.data.inReference){const q=this.data.referenceType||"shortcut";M.type+="Reference",M.referenceType=q,delete M.url,delete M.title}else delete M.identifier,delete M.label;this.data.referenceType=void 0}function A(){const M=this.stack[this.stack.length-1];if(this.data.inReference){const q=this.data.referenceType||"shortcut";M.type+="Reference",M.referenceType=q,delete M.url,delete M.title}else delete M.identifier,delete M.label;this.data.referenceType=void 0}function R(M){const q=this.sliceSerialize(M),ne=this.stack[this.stack.length-2];ne.label=Fj(q),ne.identifier=Er(q).toLowerCase()}function L(){const M=this.stack[this.stack.length-1],q=this.resume(),ne=this.stack[this.stack.length-1];if(this.data.inReference=!0,ne.type==="link"){const ce=M.children;ne.children=ce}else ne.alt=q}function v(){const M=this.resume(),q=this.stack[this.stack.length-1];q.url=M}function V(){const M=this.resume(),q=this.stack[this.stack.length-1];q.title=M}function Q(){this.data.inReference=void 0}function N(){this.data.referenceType="collapsed"}function re(M){const q=this.resume(),ne=this.stack[this.stack.length-1];ne.label=q,ne.identifier=Er(this.sliceSerialize(M)).toLowerCase(),this.data.referenceType="full"}function I(M){this.data.characterReferenceType=M.type}function J(M){const q=this.sliceSerialize(M),ne=this.data.characterReferenceType;let ce;ne?(ce=wg(q,ne==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):ce=lu(q);const he=this.stack[this.stack.length-1];he.value+=ce}function F(M){const q=this.stack.pop();q.position.end=dn(M.end)}function Y(M){j.call(this,M);const q=this.stack[this.stack.length-1];q.url=this.sliceSerialize(M)}function Z(M){j.call(this,M);const q=this.stack[this.stack.length-1];q.url="mailto:"+this.sliceSerialize(M)}function le(){return{type:"blockquote",children:[]}}function me(){return{type:"code",lang:null,meta:null,value:""}}function de(){return{type:"inlineCode",value:""}}function Ze(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function bt(){return{type:"emphasis",children:[]}}function Ve(){return{type:"heading",depth:0,children:[]}}function Ft(){return{type:"break"}}function U(){return{type:"html",value:""}}function pe(){return{type:"image",title:null,url:"",alt:null}}function _e(){return{type:"link",title:null,url:"",children:[]}}function st(M){return{type:"list",ordered:M.type==="listOrdered",start:null,spread:M._spread,children:[]}}function nr(M){return{type:"listItem",spread:M._spread,checked:null,children:[]}}function W(){return{type:"paragraph",children:[]}}function te(){return{type:"strong",children:[]}}function ie(){return{type:"text",value:""}}function se(){return{type:"thematicBreak"}}}function dn(e){return{line:e.line,column:e.column,offset:e.offset}}function Ig(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?Ig(e,r):Vj(e,r)}}function Vj(e,t){let n;for(n in t)if(Lg.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function bp(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+bi({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+bi({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+bi({start:t.start,end:t.end})+") is still open")}function Wj(e){const t=this;t.parser=n;function n(r){return Bj(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function Hj(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function qj(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function Kj(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function Gj(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Qj(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Jj(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Wr(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let a,s=e.footnoteCounts.get(r);s===void 0?(s=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=o+1,s+=1,e.footnoteCounts.set(r,s);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(s>1?"-"+s:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,c);const u={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,u),e.applyData(t,u)}function Yj(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Xj(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Ag(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function Zj(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Ag(e,t);const i={src:Wr(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function e2(e,t){const n={src:Wr(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function t2(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function n2(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Ag(e,t);const i={href:Wr(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function r2(e,t){const n={href:Wr(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function i2(e,t,n){const r=e.all(t),i=n?o2(n):Rg(t),o={},a=[];if(typeof t.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let s=-1;for(;++s<r.length;){const d=r[s];(i||s!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?a.push(...d.children):a.push(d)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:a};return e.patch(t,u),e.applyData(t,u)}function o2(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Rg(n[r])}return t}function Rg(e){const t=e.spread;return t??e.children.length>1}function l2(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function a2(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function s2(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function c2(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function u2(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),i.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},s=nu(t.children[1]),c=hg(t.children[t.children.length-1]);s&&c&&(a.position={start:s,end:c}),i.push(a)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function d2(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,s=a?a.length:t.children.length;let c=-1;const u=[];for(;++c<s;){const p=t.children[c],f={},m=a?a[c]:void 0;m&&(f.align=m);let b={type:"element",tagName:o,properties:f,children:[]};p&&(b.children=e.all(p),e.patch(p,b),b=e.applyData(p,b)),u.push(b)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function p2(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const kp=9,wp=32;function f2(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(jp(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(jp(t.slice(i),i>0,!1)),o.join("")}function jp(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===kp||o===wp;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===kp||o===wp;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function m2(e,t){const n={type:"text",value:f2(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function h2(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const g2={blockquote:Hj,break:qj,code:Kj,delete:Gj,emphasis:Qj,footnoteReference:Jj,heading:Yj,html:Xj,imageReference:Zj,image:e2,inlineCode:t2,linkReference:n2,link:r2,listItem:i2,list:l2,paragraph:a2,root:s2,strong:c2,table:u2,tableCell:p2,tableRow:d2,text:m2,thematicBreak:h2,toml:ko,yaml:ko,definition:ko,footnoteDefinition:ko};function ko(){}const Mg=-1,Ml=0,wi=1,dl=2,cu=3,uu=4,du=5,pu=6,Og=7,Dg=8,Sp=typeof self=="object"?self:globalThis,x2=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,a]=t[i];switch(o){case Ml:case Mg:return n(a,i);case wi:{const s=n([],i);for(const c of a)s.push(r(c));return s}case dl:{const s=n({},i);for(const[c,u]of a)s[r(c)]=r(u);return s}case cu:return n(new Date(a),i);case uu:{const{source:s,flags:c}=a;return n(new RegExp(s,c),i)}case du:{const s=n(new Map,i);for(const[c,u]of a)s.set(r(c),r(u));return s}case pu:{const s=n(new Set,i);for(const c of a)s.add(r(c));return s}case Og:{const{name:s,message:c}=a;return n(new Sp[s](c),i)}case Dg:return n(BigInt(a),i);case"BigInt":return n(Object(BigInt(a)),i);case"ArrayBuffer":return n(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:s}=new Uint8Array(a);return n(new DataView(s),a)}}return n(new Sp[o](a),i)};return r},_p=e=>x2(new Map,e)(0),lr="",{toString:y2}={},{keys:v2}=Object,ni=e=>{const t=typeof e;if(t!=="object"||!e)return[Ml,t];const n=y2.call(e).slice(8,-1);switch(n){case"Array":return[wi,lr];case"Object":return[dl,lr];case"Date":return[cu,lr];case"RegExp":return[uu,lr];case"Map":return[du,lr];case"Set":return[pu,lr];case"DataView":return[wi,n]}return n.includes("Array")?[wi,n]:n.includes("Error")?[Og,n]:[dl,n]},wo=([e,t])=>e===Ml&&(t==="function"||t==="symbol"),b2=(e,t,n,r)=>{const i=(a,s)=>{const c=r.push(a)-1;return n.set(s,c),c},o=a=>{if(n.has(a))return n.get(a);let[s,c]=ni(a);switch(s){case Ml:{let d=a;switch(c){case"bigint":s=Dg,d=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);d=null;break;case"undefined":return i([Mg],a)}return i([s,d],a)}case wi:{if(c){let f=a;return c==="DataView"?f=new Uint8Array(a.buffer):c==="ArrayBuffer"&&(f=new Uint8Array(a)),i([c,[...f]],a)}const d=[],p=i([s,d],a);for(const f of a)d.push(o(f));return p}case dl:{if(c)switch(c){case"BigInt":return i([c,a.toString()],a);case"Boolean":case"Number":case"String":return i([c,a.valueOf()],a)}if(t&&"toJSON"in a)return o(a.toJSON());const d=[],p=i([s,d],a);for(const f of v2(a))(e||!wo(ni(a[f])))&&d.push([o(f),o(a[f])]);return p}case cu:return i([s,a.toISOString()],a);case uu:{const{source:d,flags:p}=a;return i([s,{source:d,flags:p}],a)}case du:{const d=[],p=i([s,d],a);for(const[f,m]of a)(e||!(wo(ni(f))||wo(ni(m))))&&d.push([o(f),o(m)]);return p}case pu:{const d=[],p=i([s,d],a);for(const f of a)(e||!wo(ni(f)))&&d.push(o(f));return p}}const{message:u}=a;return i([s,{name:c,message:u}],a)};return o},Cp=(e,{json:t,lossy:n}={})=>{const r=[];return b2(!(t||n),!!t,new Map,r)(e),r},pl=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?_p(Cp(e,t)):structuredClone(e):(e,t)=>_p(Cp(e,t));function k2(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function w2(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function j2(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||k2,r=e.options.footnoteBackLabel||w2,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},s=[];let c=-1;for(;++c<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[c]);if(!u)continue;const d=e.all(u),p=String(u.identifier).toUpperCase(),f=Wr(p.toLowerCase());let m=0;const b=[],k=e.footnoteCounts.get(p);for(;k!==void 0&&++m<=k;){b.length>0&&b.push({type:"text",value:" "});let h=typeof n=="string"?n:n(c,m);typeof h=="string"&&(h={type:"text",value:h}),b.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(m>1?"-"+m:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,m),className:["data-footnote-backref"]},children:Array.isArray(h)?h:[h]})}const E=d[d.length-1];if(E&&E.type==="element"&&E.tagName==="p"){const h=E.children[E.children.length-1];h&&h.type==="text"?h.value+=" ":E.children.push({type:"text",value:" "}),E.children.push(...b)}else d.push(...b);const g={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(u,g),s.push(g)}if(s.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...pl(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(s,!0)},{type:"text",value:`
`}]}}const Fg=function(e){if(e==null)return N2;if(typeof e=="function")return Ol(e);if(typeof e=="object")return Array.isArray(e)?S2(e):_2(e);if(typeof e=="string")return C2(e);throw new Error("Expected function, string, or object as test")};function S2(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Fg(e[n]);return Ol(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function _2(e){const t=e;return Ol(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function C2(e){return Ol(t);function t(n){return n&&n.type===e}}function Ol(e){return t;function t(n,r,i){return!!(E2(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function N2(){return!0}function E2(e){return e!==null&&typeof e=="object"&&"type"in e}const $g=[],z2=!0,Np=!1,T2="skip";function P2(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=Fg(i),a=r?-1:1;s(e,void 0,[])();function s(c,u,d){const p=c&&typeof c=="object"?c:{};if(typeof p.type=="string"){const m=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(c.type+(m?"<"+m+">":""))+")"})}return f;function f(){let m=$g,b,k,E;if((!t||o(c,u,d[d.length-1]||void 0))&&(m=L2(n(c,d)),m[0]===Np))return m;if("children"in c&&c.children){const g=c;if(g.children&&m[0]!==T2)for(k=(r?g.children.length:-1)+a,E=d.concat(g);k>-1&&k<g.children.length;){const h=g.children[k];if(b=s(h,k,E)(),b[0]===Np)return b;k=typeof b[1]=="number"?b[1]:k+a}}return m}}}function L2(e){return Array.isArray(e)?e:typeof e=="number"?[z2,e]:e==null?$g:[e]}function Bg(e,t,n,r){let i,o,a;typeof t=="function"&&typeof n!="function"?(o=void 0,a=t,i=n):(o=t,a=n,i=r),P2(e,o,s,i);function s(c,u){const d=u[u.length-1],p=d?d.children.indexOf(c):void 0;return a(c,p,d)}}const Us={}.hasOwnProperty,I2={};function A2(e,t){const n=t||I2,r=new Map,i=new Map,o=new Map,a={...g2,...n.handlers},s={all:u,applyData:M2,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:a,one:c,options:n,patch:R2,wrap:D2};return Bg(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:i,f=String(d.identifier).toUpperCase();p.has(f)||p.set(f,d)}}),s;function c(d,p){const f=d.type,m=s.handlers[f];if(Us.call(s.handlers,f)&&m)return m(s,d,p);if(s.options.passThrough&&s.options.passThrough.includes(f)){if("children"in d){const{children:k,...E}=d,g=pl(E);return g.children=s.all(d),g}return pl(d)}return(s.options.unknownHandler||O2)(s,d,p)}function u(d){const p=[];if("children"in d){const f=d.children;let m=-1;for(;++m<f.length;){const b=s.one(f[m],d);if(b){if(m&&f[m-1].type==="break"&&(!Array.isArray(b)&&b.type==="text"&&(b.value=Ep(b.value)),!Array.isArray(b)&&b.type==="element")){const k=b.children[0];k&&k.type==="text"&&(k.value=Ep(k.value))}Array.isArray(b)?p.push(...b):p.push(b)}}}return p}}function R2(e,t){e.position&&(t.position=yk(e))}function M2(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&o&&Object.assign(n.properties,pl(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function O2(e,t){const n=t.data||{},r="value"in t&&!(Us.call(n,"hProperties")||Us.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function D2(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Ep(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function zp(e,t){const n=A2(e,t),r=n.one(e,void 0),i=j2(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function F2(e,t){return e&&"run"in e?async function(n,r){const i=zp(n,{file:r,...t});await e.run(i,r)}:function(n,r){return zp(n,{file:r,...e||t})}}function Tp(e){if(e)throw e}var Do=Object.prototype.hasOwnProperty,Ug=Object.prototype.toString,Pp=Object.defineProperty,Lp=Object.getOwnPropertyDescriptor,Ip=function(t){return typeof Array.isArray=="function"?Array.isArray(t):Ug.call(t)==="[object Array]"},Ap=function(t){if(!t||Ug.call(t)!=="[object Object]")return!1;var n=Do.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Do.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||Do.call(t,i)},Rp=function(t,n){Pp&&n.name==="__proto__"?Pp(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Mp=function(t,n){if(n==="__proto__")if(Do.call(t,n)){if(Lp)return Lp(t,n).value}else return;return t[n]},$2=function e(){var t,n,r,i,o,a,s=arguments[0],c=1,u=arguments.length,d=!1;for(typeof s=="boolean"&&(d=s,s=arguments[1]||{},c=2),(s==null||typeof s!="object"&&typeof s!="function")&&(s={});c<u;++c)if(t=arguments[c],t!=null)for(n in t)r=Mp(s,n),i=Mp(t,n),s!==i&&(d&&i&&(Ap(i)||(o=Ip(i)))?(o?(o=!1,a=r&&Ip(r)?r:[]):a=r&&Ap(r)?r:{},Rp(s,{name:n,newValue:e(d,a,i)})):typeof i<"u"&&Rp(s,{name:n,newValue:i}));return s};const wa=ml($2);function Vs(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function B2(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);s(null,...i);function s(c,...u){const d=e[++o];let p=-1;if(c){a(c);return}for(;++p<i.length;)(u[p]===null||u[p]===void 0)&&(u[p]=i[p]);i=u,d?U2(d,s)(...u):a(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function U2(e,t){let n;return r;function r(...a){const s=e.length>a.length;let c;s&&a.push(i);try{c=e.apply(this,a)}catch(u){const d=u;if(s&&n)throw d;return i(d)}s||(c&&c.then&&typeof c.then=="function"?c.then(o,i):c instanceof Error?i(c):o(c))}function i(a,...s){n||(n=!0,t(a,...s))}function o(a){i(null,a)}}const Ut={basename:V2,dirname:W2,extname:H2,join:q2,sep:"/"};function V2(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');eo(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let a=-1,s=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else a<0&&(o=!0,a=i+1),s>-1&&(e.codePointAt(i)===t.codePointAt(s--)?s<0&&(r=i):(s=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function W2(e){if(eo(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function H2(e){eo(e);let t=e.length,n=-1,r=0,i=-1,o=0,a;for(;t--;){const s=e.codePointAt(t);if(s===47){if(a){r=t+1;break}continue}n<0&&(a=!0,n=t+1),s===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function q2(...e){let t=-1,n;for(;++t<e.length;)eo(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":K2(n)}function K2(e){eo(e);const t=e.codePointAt(0)===47;let n=G2(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function G2(e,t){let n="",r=0,i=-1,o=0,a=-1,s,c;for(;++a<=e.length;){if(a<e.length)s=e.codePointAt(a);else{if(s===47)break;s=47}if(s===47){if(!(i===a-1||o===1))if(i!==a-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),i=a,o=0;continue}}else if(n.length>0){n="",r=0,i=a,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,o=0}else s===46&&o>-1?o++:o=-1}return n}function eo(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const Q2={cwd:J2};function J2(){return"/"}function Ws(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function Y2(e){if(typeof e=="string")e=new URL(e);else if(!Ws(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return X2(e)}function X2(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const ja=["history","path","basename","stem","extname","dirname"];class Vg{constructor(t){let n;t?Ws(t)?n={path:t}:typeof t=="string"||Z2(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":Q2.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<ja.length;){const o=ja[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)ja.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?Ut.basename(this.path):void 0}set basename(t){_a(t,"basename"),Sa(t,"basename"),this.path=Ut.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?Ut.dirname(this.path):void 0}set dirname(t){Op(this.basename,"dirname"),this.path=Ut.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?Ut.extname(this.path):void 0}set extname(t){if(Sa(t,"extname"),Op(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Ut.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Ws(t)&&(t=Y2(t)),_a(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?Ut.basename(this.path,this.extname):void 0}set stem(t){_a(t,"stem"),Sa(t,"stem"),this.path=Ut.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new Ge(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Sa(e,t){if(e&&e.includes(Ut.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Ut.sep+"`")}function _a(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Op(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function Z2(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const eS=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},tS={}.hasOwnProperty;class fu extends eS{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=B2()}copy(){const t=new fu;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(wa(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Ea("data",this.frozen),this.namespace[t]=n,this):tS.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Ea("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=jo(t),r=this.parser||this.Parser;return Ca("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Ca("process",this.parser||this.Parser),Na("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,a){const s=jo(t),c=r.parse(s);r.run(c,s,function(d,p,f){if(d||!p||!f)return u(d);const m=p,b=r.stringify(m,f);iS(b)?f.value=b:f.result=b,u(d,f)});function u(d,p){d||!p?a(d):o?o(p):n(void 0,p)}}}processSync(t){let n=!1,r;return this.freeze(),Ca("processSync",this.parser||this.Parser),Na("processSync",this.compiler||this.Compiler),this.process(t,i),Fp("processSync","process",n),r;function i(o,a){n=!0,Tp(o),r=a}}run(t,n,r){Dp(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(a,s){const c=jo(n);i.run(t,c,u);function u(d,p,f){const m=p||t;d?s(d):a?a(m):r(void 0,m,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),Fp("runSync","run",r),i;function o(a,s){Tp(a),i=s,r=!0}}stringify(t,n){this.freeze();const r=jo(n),i=this.compiler||this.Compiler;return Na("stringify",i),Dp(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(Ea("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?s(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(u){if(typeof u=="function")c(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...p]=u;c(d,p)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");s(u.plugins),u.settings&&(i.settings=wa(!0,i.settings,u.settings))}function s(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const p=u[d];o(p)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function c(u,d){let p=-1,f=-1;for(;++p<r.length;)if(r[p][0]===u){f=p;break}if(f===-1)r.push([u,...d]);else if(d.length>0){let[m,...b]=d;const k=r[f][1];Vs(k)&&Vs(m)&&(m=wa(!0,k,m)),r[f]=[u,m,...b]}}}}const nS=new fu().freeze();function Ca(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Na(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Ea(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Dp(e){if(!Vs(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Fp(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function jo(e){return rS(e)?e:new Vg(e)}function rS(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function iS(e){return typeof e=="string"||oS(e)}function oS(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const lS="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",$p=[],Bp={allowDangerousHtml:!0},aS=/^(https?|ircs?|mailto|xmpp)$/i,sS=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Wg(e){const t=cS(e),n=uS(e);return dS(t.runSync(t.parse(n),n),e)}function cS(e){const t=e.rehypePlugins||$p,n=e.remarkPlugins||$p,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Bp}:Bp;return nS().use(Wj).use(n).use(F2,r).use(t)}function uS(e){const t=e.children||"",n=new Vg;return typeof t=="string"&&(n.value=t),n}function dS(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,a=t.skipHtml,s=t.unwrapDisallowed,c=t.urlTransform||pS;for(const d of sS)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+lS+d.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),Bg(e,u),jk(e,{Fragment:l.Fragment,components:i,ignoreInvalidStyle:!0,jsx:l.jsx,jsxs:l.jsxs,passKeys:!0,passNode:!0});function u(d,p,f){if(d.type==="raw"&&f&&typeof p=="number")return a?f.children.splice(p,1):f.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let m;for(m in va)if(Object.hasOwn(va,m)&&Object.hasOwn(d.properties,m)){const b=d.properties[m],k=va[m];(k===null||k.includes(d.tagName))&&(d.properties[m]=c(String(b||""),m,d))}}if(d.type==="element"){let m=n?!n.includes(d.tagName):o?o.includes(d.tagName):!1;if(!m&&r&&typeof p=="number"&&(m=!r(d,p,f)),m&&f&&typeof p=="number")return s&&d.children?f.children.splice(p,1,...d.children):f.children.splice(p,1),p}}}function pS(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||aS.test(e.slice(0,t))?e:""}function fS({value:e,onChange:t,placeholder:n="Write your content here...",minHeight:r=200}){const[i,o]=_.useState(!1),[a,s]=_.useState(r),c=_.useRef(null),u=_.useRef(null);_.useEffect(()=>{if(e){const f=e.split(`
`).length,m=Math.max(r,Math.min(f*20+40,500));s(m)}},[e,r]),_.useEffect(()=>{i&&u.current&&u.current.focus()},[i]);function d(f){u.current=f,f.focus()}function p(f){c.current&&!c.current.contains(f.target)&&o(!1)}return _.useEffect(()=>{if(i)return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[i]),l.jsxs("div",{ref:c,className:"markdown-editor",children:[l.jsx("style",{children:`
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
      `}),i?l.jsx("div",{className:"monaco-wrapper",children:l.jsx(Dr,{height:"100%",language:"markdown",theme:"vs-dark",value:e,onChange:f=>t(f||""),onMount:d,options:{minimap:{enabled:!1},fontSize:14,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"off",scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",padding:{top:12,bottom:12},lineDecorationsWidth:8,folding:!1,glyphMargin:!1,renderLineHighlight:"none",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,scrollbar:{vertical:"auto",horizontal:"hidden"}}})}):l.jsxs("div",{className:"markdown-preview",onClick:()=>o(!0),children:[l.jsxs("span",{className:"edit-hint",children:[l.jsx(o0,{size:12}),"Click to edit"]}),e?l.jsx("div",{className:"markdown-content",children:l.jsx(Wg,{children:e})}):l.jsx("div",{className:"markdown-placeholder",children:n})]})]})}function mS(e){return/^[a-zA-Z0-9_]+$/.test(e)}function hS({agent:e}){const{project:t,updateAgent:n,mcpServers:r,builtinTools:i,setActiveTab:o,setRunAgentId:a}=vt(),[s,c]=_.useState(new Set(["basic","model","tools","subagents"])),[u,d]=_.useState(!1),[p,f]=_.useState(!1),[m,b]=_.useState(!1),[k,E]=_.useState(""),[g,h]=_.useState(null);if(!t)return null;function y(A){n(e.id,A)}function P(A){if(A===""){h(null),y({name:A});return}mS(A)?h(null):h("Name can only contain letters, numbers, and underscores"),y({name:A})}function C(A){const R=new Set(s);R.has(A)?R.delete(A):R.add(A),c(R)}const w=e.type==="LlmAgent",T=e;function O(A){w&&y({tools:[...T.tools,A]})}function B(A){w&&y({tools:T.tools.filter((R,L)=>L!==A)})}function j(A,R){if(!w)return;const L=[...T.tools];L[A]=R,y({tools:L})}function x(A){"sub_agents"in e&&y({sub_agents:[...e.sub_agents,A]})}function S(A){"sub_agents"in e&&y({sub_agents:e.sub_agents.filter(R=>R!==A)})}const z=t.agents.filter(A=>A.id!==e.id);async function $(){if(!(!t||!w)){d(!0);try{const A=T.instruction||"",R=A?`Current instruction to improve:

${A}

Please improve and expand this instruction while preserving its core intent.`:void 0,v=t.agents.some(Q=>Q.id===e.id)?void 0:e,V=await Mo(t.id,e.id,R,v);V.success&&V.prompt?y({instruction:V.prompt}):alert("Failed to generate prompt: "+(V.error||"Unknown error"))}catch(A){alert("Error generating prompt: "+A.message)}finally{d(!1)}}}async function D(){if(!(!t||!w||!k.trim())){d(!0);try{const R=`Current instruction:

${T.instruction||""}

---

Requested changes:
${k}

Please apply the requested changes to the instruction above. Output only the updated instruction, nothing else.`,v=t.agents.some(Q=>Q.id===e.id)?void 0:e,V=await Mo(t.id,e.id,R,v);V.success&&V.prompt?(y({instruction:V.prompt}),b(!1),E("")):alert("Failed to apply changes: "+(V.error||"Unknown error"))}catch(A){alert("Error applying changes: "+A.message)}finally{d(!1)}}}async function H(){if(!t||!w)return;const A=T.instruction;if(!A){alert("Please write an instruction first");return}f(!0);try{const R=`Write a 5-10 word description of what this agent does.

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
${A.slice(0,500)}

Your response (5-10 words only):`,L=await Mo(t.id,e.id,R);if(L.success&&L.prompt){let v=L.prompt.trim();v=v.replace(/^["']|["']$/g,"").trim();const V=v.split(/[.!?\n]/)[0].trim(),Q=V.length>80?V.slice(0,77)+"...":V;y({description:Q})}else alert("Failed to generate description: "+(L.error||"Unknown error"))}catch(R){alert("Error generating description: "+R.message)}finally{f(!1)}}return l.jsxs("div",{className:"agent-editor",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("div",{className:"editor-header",children:[l.jsx(Kn,{size:24,style:{color:"var(--accent-primary)"}}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx("input",{type:"text",value:e.name,onChange:A=>P(A.target.value),placeholder:"Agent name",style:{borderColor:g?"var(--error)":void 0}}),g&&l.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:g})]}),l.jsx("span",{className:"badge badge-info",children:e.type}),l.jsxs("button",{className:"btn btn-primary btn-sm run-agent-btn",onClick:()=>{a(e.id),o("run")},title:"Test this agent",children:[l.jsx(Vn,{size:14}),"Run"]})]}),l.jsxs("div",{className:"editor-content",children:[l.jsxs(ri,{id:"basic",title:"Basic Info",icon:l.jsx(Kn,{size:16}),expanded:s.has("basic"),onToggle:()=>C("basic"),children:[l.jsx("div",{className:"form-row",children:l.jsxs("div",{className:"form-group full-width",children:[l.jsxs("div",{className:"label-with-action",children:[l.jsx("label",{children:"Description"}),w&&T.instruction&&l.jsx("button",{className:"btn btn-secondary btn-sm generate-btn",onClick:H,disabled:p,title:"Generate description from instruction",children:p?l.jsxs(l.Fragment,{children:[l.jsx(Or,{size:14,className:"spin"}),"Summarizing..."]}):"Summarize"})]}),l.jsx("input",{type:"text",value:e.description,onChange:A=>y({description:A.target.value}),placeholder:"e.g., Reviews code for bugs and suggests fixes"})]})}),w&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"form-row",children:l.jsxs("div",{className:"form-group full-width",children:[l.jsxs("div",{className:"label-with-action",children:[l.jsx("label",{children:"Instruction"}),l.jsxs("div",{className:"action-buttons",children:[l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>b(!m),disabled:u||!T.instruction,title:"Request specific changes to the instruction",children:"Request Changes"}),l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:$,disabled:u,title:"Uses AI to improve and expand the current instruction",children:u?l.jsxs(l.Fragment,{children:[l.jsx(Or,{size:14,className:"spin"}),"Working..."]}):"Auto-Improve"})]})]}),m&&l.jsxs("div",{className:"request-changes-box",children:[l.jsx("input",{type:"text",value:k,onChange:A=>E(A.target.value),placeholder:"Describe what changes you want...",onKeyDown:A=>{A.key==="Enter"&&k.trim()?D():A.key==="Escape"&&(b(!1),E(""))},autoFocus:!0}),l.jsx("button",{className:"btn btn-primary btn-sm",onClick:D,disabled:u||!k.trim(),children:"Apply"})]}),l.jsx(fS,{value:T.instruction,onChange:A=>y({instruction:A}),placeholder:"Write your agent's instruction here... (Markdown supported)",minHeight:200})]})}),l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Output Key"}),l.jsxs("select",{value:T.output_key||"",onChange:A=>y({output_key:A.target.value||void 0}),children:[l.jsx("option",{value:"",children:"None"}),t.app.state_keys.map(A=>l.jsx("option",{value:A.name,children:A.name},A.name))]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Include Contents"}),l.jsxs("select",{value:T.include_contents,onChange:A=>y({include_contents:A.target.value}),children:[l.jsx("option",{value:"default",children:"Default"}),l.jsx("option",{value:"none",children:"None"})]})]})]}),l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"checkbox-group",children:[l.jsx("input",{type:"checkbox",id:"disallow-parent",checked:T.disallow_transfer_to_parent,onChange:A=>y({disallow_transfer_to_parent:A.target.checked})}),l.jsx("label",{htmlFor:"disallow-parent",children:"Disallow transfer to parent"})]}),l.jsxs("div",{className:"checkbox-group",children:[l.jsx("input",{type:"checkbox",id:"disallow-peers",checked:T.disallow_transfer_to_peers,onChange:A=>y({disallow_transfer_to_peers:A.target.checked})}),l.jsx("label",{htmlFor:"disallow-peers",children:"Disallow transfer to peers"})]})]})]}),e.type==="LoopAgent"&&l.jsx("div",{className:"form-row",children:l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Max Iterations"}),l.jsx("input",{type:"number",value:e.max_iterations||"",onChange:A=>y({max_iterations:parseInt(A.target.value)||void 0}),placeholder:"No limit"})]})})]}),w&&l.jsx(ri,{id:"model",title:"Model",icon:l.jsx(Kc,{size:16}),expanded:s.has("model"),onToggle:()=>C("model"),children:l.jsx(xS,{agent:T,appModels:t.app.models||[],defaultModelId:t.app.default_model_id,onUpdate:A=>y({model:A})})}),w&&l.jsx(ri,{id:"tools",title:`Tools (${T.tools.length})`,icon:l.jsx(Kt,{size:16}),expanded:s.has("tools"),onToggle:()=>C("tools"),children:l.jsx(gS,{tools:T.tools,onAdd:O,onRemove:B,onUpdate:j,builtinTools:i,mcpServers:r,projectMcpServers:t.mcp_servers,customTools:t.custom_tools,agents:z,skillsets:t.skillsets||[]})}),w&&l.jsx(ri,{id:"callbacks",title:"Callbacks",icon:l.jsx(Tn,{size:16}),expanded:s.has("callbacks"),onToggle:()=>C("callbacks"),children:l.jsx(yS,{agent:T,onUpdate:y,customCallbacks:t.custom_callbacks||[]})}),"sub_agents"in e&&l.jsx(ri,{id:"subagents",title:`Sub-Agents (${e.sub_agents.length})`,icon:l.jsx(d0,{size:16}),expanded:s.has("subagents"),onToggle:()=>C("subagents"),children:l.jsxs("div",{className:"sub-agent-list",children:[e.sub_agents.map(A=>{const R=t.agents.find(L=>L.id===A);return R?l.jsxs("div",{className:"sub-agent-chip",children:[R.name,l.jsx("button",{onClick:()=>S(A),children:l.jsx(Oe,{size:12})})]},A):null}),l.jsxs("select",{value:"",onChange:A=>{A.target.value&&x(A.target.value)},style:{width:150,padding:"6px 10px",fontSize:13},children:[l.jsx("option",{value:"",children:"Add agent..."}),z.filter(A=>!e.sub_agents.includes(A.id)).map(A=>l.jsx("option",{value:A.id,children:A.name},A.id))]})]})})]})]})}function ri({id:e,title:t,icon:n,expanded:r,onToggle:i,children:o}){return l.jsxs("div",{className:"section",children:[l.jsxs("div",{className:"section-header",onClick:i,children:[r?l.jsx(kt,{size:16}):l.jsx(wt,{size:16}),l.jsxs("h4",{children:[n," ",t]})]}),r&&l.jsx("div",{className:"section-content",children:o})]})}function gS({tools:e,onAdd:t,onRemove:n,onUpdate:r,builtinTools:i,mcpServers:o,projectMcpServers:a,customTools:s,agents:c,skillsets:u}){const[d,p]=_.useState(!1),[f,m]=_.useState({}),[b,k]=_.useState(""),E=Nt.useRef(null),g=Nt.useRef(null),[h,y]=_.useState(null),[P,C]=_.useState(new Set),w=(I,J)=>{if(!b.trim())return!0;const F=b.toLowerCase();return I.toLowerCase().includes(F)||((J==null?void 0:J.toLowerCase().includes(F))??!1)},T=i.filter(I=>w(I.name,I.description)),O=o.filter(I=>w(I.name,I.description)),B=a.filter(I=>w(I.name,I.description)),j=s.filter(I=>w(I.name,I.description)),x=c.filter(I=>w(I.name,I.description)),S=u.filter(I=>w(I.name,I.description));function z(){if(E.current){const I=E.current.getBoundingClientRect(),J=window.innerHeight,F=350,Y=J-I.bottom-16,Z=I.top-16;if(Y>=200||Y>=Z){const le=Math.min(F,Y);m({top:I.bottom+4,left:I.left,maxHeight:le})}else{const le=Math.min(F,Z);m({top:I.top-le-4,left:I.left,maxHeight:le})}}p(!0),k(""),setTimeout(()=>{var I;return(I=g.current)==null?void 0:I.focus()},50)}function $(){p(!1),k("")}function D(I){t({type:"builtin",name:I}),$()}async function H(I){$();const J=I.tool_filter||[];if(y({server:I,enabledTools:new Set(J),availableTools:J.map(F=>({name:F,description:""})),isLoading:J.length===0,error:void 0}),J.length===0)try{const{testMcpServer:F}=await Zh(async()=>{const{testMcpServer:Z}=await Promise.resolve().then(()=>G1);return{testMcpServer:Z}},void 0),Y=await F({connection_type:I.connection_type,command:I.command,args:I.args,env:I.env,url:I.url,headers:I.headers,timeout:I.timeout||30});Y.success?y(Z=>Z?{...Z,availableTools:Y.tools,enabledTools:new Set(Y.tools.map(le=>le.name)),isLoading:!1}:null):y(Z=>Z?{...Z,isLoading:!1,error:Y.error||"Failed to connect to MCP server"}:null)}catch(F){y(Y=>Y?{...Y,isLoading:!1,error:F.message}:null)}}function A(I){if(!h)return;const J=new Set(h.enabledTools);J.has(I)?J.delete(I):J.add(I),y({...h,enabledTools:J})}function R(){if(!h)return;const I=Array.from(h.enabledTools);t({type:"mcp",server:{...h.server,tool_filter:I}}),y(null)}function L(I){const J=new Set(P);J.has(I)?J.delete(I):J.add(I),C(J)}function v(I,J){const F=e[I];if(F.type!=="mcp"||!F.server)return;const Y=F.server.tool_filter||[];let Z;Y.includes(J)?Z=Y.filter(le=>le!==J):Z=[...Y,J],r(I,{...F,server:{...F.server,tool_filter:Z}})}function V(I){t({type:"function",name:I.name,module_path:I.module_path}),$()}function Q(I){const J=c.find(F=>F.id===I);t({type:"agent",agent_id:I,name:J==null?void 0:J.name}),$()}function N(I){const J=u.find(F=>F.id===I);t({type:"skillset",skillset_id:I,name:J==null?void 0:J.name}),$()}function re(I){return o.find(J=>J.name===I)}return l.jsxs("div",{children:[l.jsx("style",{children:`
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
      `}),l.jsx("div",{className:"tool-list",children:e.map((I,J)=>{var F;return I.type==="mcp"&&I.server?l.jsxs("div",{className:"mcp-tool-item",children:[l.jsxs("div",{className:"mcp-tool-header",onClick:()=>L(J),children:[P.has(J)?l.jsx(kt,{size:14}):l.jsx(wt,{size:14}),l.jsx(Kt,{size:14,style:{color:"var(--accent-primary)"}}),l.jsxs("div",{className:"mcp-tool-info",children:[l.jsx("div",{className:"mcp-tool-name",children:I.server.name}),l.jsx("div",{className:"mcp-tool-count",children:I.server.tool_filter===null||I.server.tool_filter===void 0?"all tools":`${I.server.tool_filter.length} tools enabled`})]}),l.jsx("button",{className:"delete-btn",onClick:Y=>{Y.stopPropagation(),n(J)},children:l.jsx(Oe,{size:14})})]}),P.has(J)&&l.jsx("div",{className:"mcp-tool-body",children:l.jsx("div",{className:"mcp-tool-list",children:(()=>{const Y=re(I.server.name),Z=(Y==null?void 0:Y.tool_filter)||I.server.tool_filter||[],le=new Set(I.server.tool_filter||[]);return Z.map(me=>l.jsxs("label",{className:`mcp-tool-chip ${le.has(me)?"enabled":"disabled"}`,onClick:()=>v(J,me),children:[l.jsx("input",{type:"checkbox",checked:le.has(me),onChange:()=>{},style:{display:"none"}}),me]},me))})()})})]},J):I.type==="skillset"?l.jsxs("div",{className:"tool-item",children:[l.jsx(rn,{size:14,style:{color:"var(--accent)"}}),l.jsxs("div",{className:"tool-item-info",children:[l.jsx("div",{className:"tool-item-name",children:I.name||((F=u.find(Y=>Y.id===I.skillset_id))==null?void 0:F.name)||"SkillSet"}),l.jsx("div",{className:"tool-item-type",children:"skillset"})]}),l.jsx("button",{className:"delete-btn",onClick:()=>n(J),children:l.jsx(Oe,{size:14})})]},J):l.jsxs("div",{className:"tool-item",children:[l.jsx(Kt,{size:14,style:{color:"var(--accent-primary)"}}),l.jsxs("div",{className:"tool-item-info",children:[l.jsx("div",{className:"tool-item-name",children:I.name||I.agent_id}),l.jsx("div",{className:"tool-item-type",children:I.type})]}),l.jsx("button",{className:"delete-btn",onClick:()=>n(J),children:l.jsx(Oe,{size:14})})]},J)})}),l.jsxs("div",{className:"add-tool-dropdown",style:{marginTop:12},children:[l.jsxs("button",{ref:E,className:"btn btn-secondary btn-sm",onClick:()=>d?$():z(),children:[l.jsx($e,{size:14}),"Add Tool"]}),d&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"dropdown-backdrop",onClick:$}),l.jsxs("div",{className:"dropdown-content dropdown-fixed",style:f,children:[l.jsx("div",{className:"dropdown-search",children:l.jsx("input",{ref:g,type:"text",placeholder:"Search tools...",value:b,onChange:I=>k(I.target.value),onKeyDown:I=>I.key==="Escape"&&$()})}),T.length>0&&l.jsxs("div",{className:"dropdown-section",children:[l.jsx("h5",{children:"Built-in Tools"}),T.map(I=>l.jsxs("button",{className:"dropdown-item",onClick:()=>D(I.name),children:[l.jsx("div",{className:"dropdown-item-name",children:I.name}),l.jsx("div",{className:"dropdown-item-desc",children:I.description})]},I.name))]}),O.length>0&&l.jsxs("div",{className:"dropdown-section",children:[l.jsxs("h5",{children:["Known MCP Servers (",O.length,")"]}),O.map(I=>l.jsxs("button",{className:"dropdown-item",onClick:()=>H(I),children:[l.jsxs("div",{className:"dropdown-item-name",children:[I.name,l.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:I.tool_filter===null||I.tool_filter===void 0?"all tools":`${I.tool_filter.length} tools`})]}),l.jsx("div",{className:"dropdown-item-desc",children:I.description})]},`known-${I.name}`))]}),B.length>0&&l.jsxs("div",{className:"dropdown-section",children:[l.jsxs("h5",{children:["Project MCP Servers (",B.length,")"]}),B.map(I=>l.jsxs("button",{className:"dropdown-item",onClick:()=>H(I),children:[l.jsxs("div",{className:"dropdown-item-name",children:[I.name,l.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:I.tool_filter===null||I.tool_filter===void 0?"all tools":`${I.tool_filter.length} tools`})]}),l.jsx("div",{className:"dropdown-item-desc",children:I.description||"Custom MCP server"})]},`project-${I.id||I.name}`))]}),j.length>0&&l.jsxs("div",{className:"dropdown-section",children:[l.jsx("h5",{children:"Custom Tools"}),j.map(I=>l.jsxs("button",{className:"dropdown-item",onClick:()=>V(I),children:[l.jsx("div",{className:"dropdown-item-name",children:I.name}),l.jsx("div",{className:"dropdown-item-desc",children:I.description})]},I.id))]}),x.length>0&&l.jsxs("div",{className:"dropdown-section",children:[l.jsx("h5",{children:"Agents as Tools"}),x.map(I=>l.jsxs("button",{className:"dropdown-item",onClick:()=>Q(I.id),children:[l.jsx("div",{className:"dropdown-item-name",children:I.name}),l.jsx("div",{className:"dropdown-item-desc",children:I.type})]},I.id))]}),S.length>0&&l.jsxs("div",{className:"dropdown-section",children:[l.jsxs("h5",{children:["SkillSets (",S.length,")"]}),S.map(I=>l.jsxs("button",{className:"dropdown-item",onClick:()=>N(I.id),children:[l.jsxs("div",{className:"dropdown-item-name",children:[I.name,l.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:[I.entry_count||0," entries"]})]}),l.jsx("div",{className:"dropdown-item-desc",children:I.description||"Vector knowledge base"})]},I.id))]}),b.trim()&&T.length===0&&O.length===0&&B.length===0&&j.length===0&&x.length===0&&S.length===0&&l.jsxs("div",{className:"dropdown-section",style:{textAlign:"center",padding:"20px",color:"var(--text-muted)"},children:['No tools matching "',b,'"']})]})]})]}),h&&l.jsx("div",{className:"mcp-config-dialog",children:l.jsxs("div",{className:"mcp-config-content",children:[l.jsxs("h3",{children:["Configure ",h.server.name]}),l.jsx("p",{children:h.server.description}),h.isLoading?l.jsxs("div",{className:"mcp-loading",children:[l.jsx("div",{className:"spinner"}),l.jsx("p",{children:"Connecting to MCP server and discovering tools..."})]}):h.error?l.jsxs("div",{className:"mcp-error",children:[l.jsxs("p",{children:["⚠️ Failed to discover tools: ",h.error]}),l.jsx("p",{className:"hint",children:"You can still add the server, but you won't be able to select specific tools."})]}):l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"mcp-select-actions",children:[l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>y({...h,enabledTools:new Set(h.availableTools.map(I=>I.name))}),children:["Select All (",h.availableTools.length,")"]}),l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>y({...h,enabledTools:new Set}),children:"Select None"})]}),l.jsx("div",{className:"mcp-tools-grid",children:h.availableTools.map(I=>l.jsxs("label",{className:`mcp-tool-toggle ${h.enabledTools.has(I.name)?"enabled":""}`,onClick:()=>A(I.name),title:I.description||I.name,children:[l.jsx("input",{type:"checkbox",checked:h.enabledTools.has(I.name),onChange:()=>{}}),I.name]},I.name))})]}),l.jsxs("div",{className:"dialog-actions",children:[l.jsx("button",{className:"btn btn-secondary",onClick:()=>y(null),children:"Cancel"}),l.jsxs("button",{className:"btn btn-primary",onClick:R,disabled:h.enabledTools.size===0,children:["Add ",h.enabledTools.size," Tools"]})]})]})})]})}function xS({agent:e,appModels:t,defaultModelId:n,onUpdate:r}){var p,f,m,b,k,E,g,h,y,P;const i=(p=e.model)==null?void 0:p._appModelId,o=e.model!==null&&e.model!==void 0&&!i,s=i||(()=>{if(!e.model)return n;const C=t.find(w=>{var T,O,B;return w.provider===((T=e.model)==null?void 0:T.provider)&&w.model_name===((O=e.model)==null?void 0:O.model_name)&&w.api_base===((B=e.model)==null?void 0:B.api_base)});return C==null?void 0:C.id})()||n||((f=t[0])==null?void 0:f.id);Nt.useEffect(()=>{var C,w,T,O,B;if(i){const j=t.find(x=>x.id===i);j&&(((C=e.model)==null?void 0:C.provider)!==j.provider||((w=e.model)==null?void 0:w.model_name)!==j.model_name||((T=e.model)==null?void 0:T.api_base)!==j.api_base||((O=e.model)==null?void 0:O.temperature)!==j.temperature||((B=e.model)==null?void 0:B.max_output_tokens)!==j.max_output_tokens)&&r({provider:j.provider,model_name:j.model_name,api_base:j.api_base,temperature:j.temperature,max_output_tokens:j.max_output_tokens,top_p:j.top_p,top_k:j.top_k,fallbacks:[],_appModelId:i})}},[i,t,e.model,r]);function c(C){const w=t.find(T=>T.id===C);w&&r({provider:w.provider,model_name:w.model_name,api_base:w.api_base,temperature:w.temperature,max_output_tokens:w.max_output_tokens,top_p:w.top_p,top_k:w.top_k,fallbacks:[],_appModelId:C})}function u(){var C;if(o){const w=n||((C=t[0])==null?void 0:C.id);w&&c(w)}else{const w=e.model;if(w){const{_appModelId:T,...O}=w;r(O)}else r({provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]})}}function d(C){const{_appModelId:w,...T}=e.model||{};r({...T,...C})}return t.find(C=>C.id===s),t.find(C=>C.id===n),l.jsxs("div",{className:"model-selector",children:[l.jsx("style",{children:`
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
      `}),t.length>0&&l.jsxs("div",{className:"model-choice",children:[l.jsxs("div",{className:`model-option ${o?"":"selected"}`,onClick:()=>!o||u(),children:[l.jsx("div",{className:"model-option-label",children:"Use App Model"}),l.jsx("div",{className:"model-option-desc",children:"Select from configured models"})]}),l.jsxs("div",{className:`model-option ${o?"selected":""}`,onClick:()=>o||u(),children:[l.jsx("div",{className:"model-option-label",children:"Custom"}),l.jsx("div",{className:"model-option-desc",children:"Configure model manually"})]})]}),!o&&t.length>0?l.jsx("div",{className:"app-model-select",children:t.map(C=>l.jsx("div",{className:`app-model-item ${s===C.id?"selected":""}`,onClick:()=>c(C.id),children:l.jsxs("div",{className:"app-model-item-info",children:[l.jsxs("div",{className:"app-model-item-name",children:[C.name,C.id===n&&l.jsxs("span",{className:"default-badge",children:[l.jsx(Jh,{size:10,fill:"currentColor"}),"Default"]})]}),l.jsxs("div",{className:"app-model-item-details",children:[C.provider," / ",C.model_name,C.api_base&&` • ${C.api_base}`]})]})},C.id))}):t.length===0?l.jsx("div",{className:"no-models-message",children:"No models configured in App Config. Configure models there first, or use custom settings below."}):null,(o||t.length===0)&&l.jsxs("div",{className:"custom-model-form",children:[l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Provider"}),l.jsxs("select",{value:((m=e.model)==null?void 0:m.provider)||"gemini",onChange:C=>d({provider:C.target.value}),children:[l.jsx("option",{value:"gemini",children:"Gemini"}),l.jsx("option",{value:"litellm",children:"LiteLLM"}),l.jsx("option",{value:"anthropic",children:"Anthropic"})]})]}),l.jsxs("div",{className:"form-group",style:{flex:2},children:[l.jsx("label",{children:"Model Name"}),l.jsx("input",{type:"text",value:((b=e.model)==null?void 0:b.model_name)||"",onChange:C=>d({model_name:C.target.value}),placeholder:"e.g., gemini-2.0-flash"})]}),((k=e.model)==null?void 0:k.provider)==="litellm"&&l.jsxs("div",{className:"form-group",style:{flex:2},children:[l.jsx("label",{children:"API Base"}),l.jsx("input",{type:"text",value:((E=e.model)==null?void 0:E.api_base)||"",onChange:C=>d({api_base:C.target.value||void 0}),placeholder:"http://localhost:11434"})]})]}),l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Temperature"}),l.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:((g=e.model)==null?void 0:g.temperature)??"",onChange:C=>d({temperature:C.target.value?parseFloat(C.target.value):void 0}),placeholder:"Default"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Max Tokens"}),l.jsx("input",{type:"number",value:((h=e.model)==null?void 0:h.max_output_tokens)??"",onChange:C=>d({max_output_tokens:C.target.value?parseInt(C.target.value):void 0}),placeholder:"Default"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Top P"}),l.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:((y=e.model)==null?void 0:y.top_p)??"",onChange:C=>d({top_p:C.target.value?parseFloat(C.target.value):void 0}),placeholder:"Default"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Top K"}),l.jsx("input",{type:"number",min:"1",value:((P=e.model)==null?void 0:P.top_k)??"",onChange:C=>d({top_k:C.target.value?parseInt(C.target.value):void 0}),placeholder:"Default"})]})]})]})]})}function yS({agent:e,onUpdate:t,customCallbacks:n}){const r=[{key:"before_agent_callbacks",label:"Before Agent"},{key:"after_agent_callbacks",label:"After Agent"},{key:"before_model_callbacks",label:"Before Model"},{key:"after_model_callbacks",label:"After Model"},{key:"before_tool_callbacks",label:"Before Tool"},{key:"after_tool_callbacks",label:"After Tool"}];function i(a,s){const c=e[a]||[],u=n.find(d=>d.id===s);u&&t({[a]:[...c,{module_path:u.module_path}]})}function o(a,s){const c=e[a]||[];t({[a]:c.filter((u,d)=>d!==s)})}return l.jsx("div",{className:"callbacks-editor",children:r.map(({key:a,label:s})=>{const c=e[a]||[],u=n;return l.jsxs("div",{className:"callback-type-group",style:{marginBottom:"20px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[l.jsx("label",{style:{fontWeight:500,fontSize:"13px"},children:s}),u.length>0&&l.jsxs("select",{value:"",onChange:d=>{d.target.value&&(i(a,d.target.value),d.target.value="")},style:{padding:"4px 8px",fontSize:"12px",width:"200px"},children:[l.jsx("option",{value:"",children:"Add callback..."}),u.filter(d=>{const p=d.module_path;return!c.some(f=>f.module_path===p)}).map(d=>l.jsx("option",{value:d.id,children:d.name},d.id))]})]}),c.length===0?l.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",fontStyle:"italic",padding:"8px"},children:"No callbacks"}):l.jsx("div",{className:"callback-list",children:c.map((d,p)=>{const f=n.find(m=>m.module_path===d.module_path);return l.jsxs("div",{className:"callback-chip",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 10px",background:"var(--bg-secondary)",borderRadius:"4px",marginBottom:"4px"},children:[l.jsx("span",{style:{fontSize:"12px"},children:(f==null?void 0:f.name)||d.module_path}),l.jsx("button",{onClick:()=>o(a,p),style:{background:"none",border:"none",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},title:"Remove callback",children:l.jsx(Oe,{size:12})})]},p)})})]},a)})})}const za=[{type:"LlmAgent",label:"LLM Agent",icon:Kn,color:"#00f5d4",description:"AI-powered agent with model reasoning"},{type:"SequentialAgent",label:"Sequential",icon:p0,color:"#7b2cbf",description:"Run sub-agents in order"},{type:"LoopAgent",label:"Loop",icon:l0,color:"#ffd93d",description:"Repeat sub-agents until exit"},{type:"ParallelAgent",label:"Parallel",icon:Ps,color:"#ff6b6b",description:"Run sub-agents simultaneously"}];function vS(){return`agent_${Date.now().toString(36)}`}function bS(e){return{provider:e.provider,model_name:e.model_name,api_base:e.api_base,temperature:e.temperature,max_output_tokens:e.max_output_tokens,top_p:e.top_p,top_k:e.top_k,fallbacks:[]}}function kS(e,t){const r={id:vS(),name:`New ${e}`,description:""},i=t?bS(t):{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]};switch(e){case"LlmAgent":return{...r,type:"LlmAgent",model:i,instruction:"",include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:[],sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};case"SequentialAgent":return{...r,type:"SequentialAgent",sub_agents:[]};case"LoopAgent":return{...r,type:"LoopAgent",sub_agents:[],max_iterations:10};case"ParallelAgent":return{...r,type:"ParallelAgent",sub_agents:[]};default:throw new Error(`Unknown agent type: ${e}`)}}function wS({onSelectAgent:e}){const{project:t,addAgent:n,removeAgent:r,updateAgent:i,selectedAgentId:o,setSelectedAgentId:a,mcpServers:s}=vt(),[c,u]=_.useState(!1),[d,p]=_.useState(new Set),[f,m]=_.useState(!1),[b,k]=_.useState(""),[E,g]=_.useState(!1);if(_.useEffect(()=>{if(t){const z=t.agents.filter($=>"sub_agents"in $&&$.sub_agents.length>0).map($=>$.id);p(new Set(z))}},[t==null?void 0:t.id,t==null?void 0:t.agents.length]),!t)return null;async function h(){var z,$,D,H;if(!(!b.trim()||!t)){g(!0);try{const A=await Rh(t.id,b);if(A.success&&A.config){const R=A.config,L=[];if((z=R.tools)!=null&&z.builtin)for(const N of R.tools.builtin)L.push({type:"builtin",name:N});if(($=R.tools)!=null&&$.mcp)for(const N of R.tools.mcp){const re=s.find(I=>I.name===N.server);re&&L.push({type:"mcp",server:{...re,tool_filter:N.tools}})}if((D=R.tools)!=null&&D.custom)for(const N of R.tools.custom){const re=t.custom_tools.find(I=>I.name===N);re&&L.push({type:"function",name:N,module_path:re.module_path})}if((H=R.tools)!=null&&H.agents)for(const N of R.tools.agents){const re=t.agents.find(I=>I.id===N);re&&L.push({type:"agent",agent_id:N,name:re.name})}const v=t.app.models||[],V=v.find(N=>N.id===t.app.default_model_id)||v[0],Q={id:`agent_${Date.now().toString(36)}`,type:"LlmAgent",name:R.name||"new_agent",description:R.description||"",instruction:R.instruction||"",model:V?{provider:V.provider,model_name:V.model_name,api_base:V.api_base,temperature:V.temperature,max_output_tokens:V.max_output_tokens,top_p:V.top_p,top_k:V.top_k,fallbacks:[]}:{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]},include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:L,sub_agents:R.sub_agents||[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};n(Q),a(Q.id),e==null||e(Q.id),m(!1),k("")}else alert("Failed to generate agent: "+(A.error||"Unknown error"))}catch(A){alert("Error generating agent: "+A.message)}finally{g(!1)}}}const y=t.agents.find(z=>z.id===o);function P(z){a(z),e==null||e(z)}function C(z){const $=t.app.models||[],D=$.find(A=>A.id===t.app.default_model_id)||$[0],H=kS(z,D);n(H),P(H.id),u(!1)}function w(z,$){$.stopPropagation(),confirm("Delete this agent?")&&(r(z),o===z&&(e==null||e(null)))}function T(z){const $=new Set(d);$.has(z)?$.delete(z):$.add(z),p($)}function O(z){const $=za.find(D=>D.type===z);return $?$.icon:Kn}function B(z){const $=za.find(D=>D.type===z);return $?$.color:"#888"}function j(z,$=0){return z.map(D=>{const H=O(D.type),A=B(D.type),R="sub_agents"in D&&D.sub_agents.length>0,L=d.has(D.id),v=R?D.sub_agents.map(V=>t.agents.find(Q=>Q.id===V)).filter(V=>V!==void 0):[];return l.jsxs("div",{className:"agent-tree-item",children:[l.jsxs("div",{className:`agent-item ${o===D.id?"selected":""}`,onClick:()=>P(D.id),style:{paddingLeft:12+$*20},children:[R?l.jsx("button",{className:"expand-btn",onClick:V=>{V.stopPropagation(),T(D.id)},children:L?l.jsx(kt,{size:16}):l.jsx(wt,{size:16})}):l.jsx("span",{style:{width:20}}),l.jsx("div",{className:"agent-icon",style:{background:A},children:l.jsx(H,{size:14})}),l.jsx("span",{className:"agent-name",children:D.name}),l.jsx("span",{className:"agent-type",children:D.type}),l.jsx("button",{className:"delete-btn",onClick:V=>w(D.id,V),children:l.jsx(Oe,{size:14})})]}),R&&L&&l.jsx("div",{className:"sub-agents",children:j(v,$+1)})]},D.id)})}const x=new Set(t.agents.flatMap(z=>"sub_agents"in z?z.sub_agents:[])),S=t.agents.filter(z=>!x.has(z.id));return l.jsxs("div",{className:"agents-panel",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("aside",{className:"agents-sidebar",children:[l.jsxs("div",{className:"sidebar-header",children:[l.jsxs("h3",{children:["Agents (",t.agents.length,")"]}),l.jsxs("div",{className:"header-buttons",children:[l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>m(!0),title:"AI-powered agent setup",children:[l.jsx(ma,{size:14}),"Quick"]}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>u(!0),children:[l.jsx($e,{size:14}),"Add"]})]})]}),l.jsx("div",{className:"agents-list",children:t.agents.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx(Kn,{size:32}),l.jsx("p",{children:"No agents yet"})]}):j(S)})]}),l.jsx("div",{className:"agent-editor-area",children:y?l.jsx(hS,{agent:y}):l.jsxs("div",{className:"empty-state card",children:[l.jsx(Kn,{size:48}),l.jsxs("p",{children:["Select an agent to edit",l.jsx("br",{}),"or create a new one"]})]})}),c&&l.jsx("div",{className:"type-selector",onClick:()=>u(!1),children:l.jsxs("div",{className:"type-selector-content",onClick:z=>z.stopPropagation(),children:[l.jsx("h2",{children:"Add Agent"}),l.jsx("div",{className:"type-options",children:za.map(({type:z,label:$,icon:D,color:H,description:A})=>l.jsxs("button",{className:"type-option",onClick:()=>C(z),children:[l.jsx("div",{className:"type-option-icon",style:{background:H},children:l.jsx(D,{size:20})}),l.jsxs("div",{className:"type-option-info",children:[l.jsx("h4",{children:$}),l.jsx("p",{children:A})]})]},z))})]})}),f&&l.jsx("div",{className:"type-selector",onClick:()=>!E&&m(!1),children:l.jsxs("div",{className:"quick-setup-content",onClick:z=>z.stopPropagation(),children:[l.jsxs("h2",{children:[l.jsx(ma,{size:20})," Quick Agent Setup"]}),l.jsx("p",{className:"quick-setup-desc",children:"Describe what you want this agent to do, and AI will configure everything: name, description, instruction, tools, and sub-agents."}),l.jsxs("div",{className:"quick-setup-form",children:[l.jsx("textarea",{value:b,onChange:z=>k(z.target.value),placeholder:"Example: An agent that searches the web for information and summarizes the results. It should be able to search Google and handle multiple queries in parallel.",rows:5,disabled:E,autoFocus:!0}),l.jsxs("div",{className:"quick-setup-info",children:[l.jsx("strong",{children:"Available resources:"}),l.jsxs("ul",{children:[l.jsxs("li",{children:[t.app.state_keys.length," state keys"]}),l.jsxs("li",{children:[s.length," MCP servers"]}),l.jsxs("li",{children:[t.custom_tools.length," custom tools"]}),l.jsxs("li",{children:[t.agents.length," existing agents"]})]})]}),l.jsxs("div",{className:"quick-setup-actions",children:[l.jsx("button",{className:"btn btn-secondary",onClick:()=>m(!1),disabled:E,children:"Cancel"}),l.jsx("button",{className:"btn btn-primary",onClick:h,disabled:E||!b.trim(),children:E?l.jsxs(l.Fragment,{children:[l.jsx(Or,{size:14,className:"spin"}),"Generating..."]}):l.jsxs(l.Fragment,{children:[l.jsx(ma,{size:14}),"Create Agent"]})})]})]})]})})]})}var mu="\x1B[0m",hu="\x1B[1m",Hg=e=>e instanceof Error?e.message:typeof e=="string"?e:"An unknown error occurred",jS=e=>{let t=Hg(e),n=`${hu}[MONACOPILOT ERROR] ${t}${mu}`;return console.error(n),{message:t}},SS=(e,t)=>{console.warn(`${hu}[MONACOPILOT WARN] ${e}${t?`
${Hg(t)}`:""}${mu}`)},_S=(e,t,n)=>console.warn(`${hu}[MONACOPILOT DEPRECATED] "${e}" is deprecated${n?` in ${n}`:""}. Please use "${t}" instead. It will be removed in a future version.${mu}`),fl={report:jS,warn:SS,warnDeprecated:_S},Up=(e,t,n={})=>{if(t<=0)return"";let r=e.split(`
`),i=r.length;if(t>=i)return e;if(n.truncateDirection==="keepEnd"){let a=r.slice(-t);return a.every(s=>s==="")?`
`.repeat(t):a.join(`
`)}let o=r.slice(0,t);return o.every(a=>a==="")?`
`.repeat(t):o.join(`
`)},CS=100,NS=!0,qg="onIdle",ES=!0,zS=120,TS=400,PS=0,gu=(e,t)=>t.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:e.lineNumber,endColumn:e.column}),LS=(e,t)=>t.getValueInRange({startLineNumber:e.lineNumber,startColumn:e.column,endLineNumber:t.getLineCount(),endColumn:t.getLineMaxColumn(t.getLineCount())}),IS=e=>e.getValue(),AS=class{constructor(e){this.capacity=e,this.head=0,this.tail=0,this.size=0,this.buffer=new Array(e)}enqueue(e){let t;return this.size===this.capacity&&(t=this.dequeue()),this.buffer[this.tail]=e,this.tail=(this.tail+1)%this.capacity,this.size++,t}dequeue(){if(this.size===0)return;let e=this.buffer[this.head];return this.buffer[this.head]=void 0,this.head=(this.head+1)%this.capacity,this.size--,e}getAll(){return this.buffer.filter(e=>e!==void 0)}clear(){this.buffer=new Array(this.capacity),this.head=0,this.tail=0,this.size=0}getSize(){return this.size}isEmpty(){return this.size===0}isFull(){return this.size===this.capacity}},Kg=class Gg{constructor(){this.cache=new AS(Gg.MAX_CACHE_SIZE)}get(t,n){return this.cache.getAll().filter(r=>this.isValidCacheItem(r,t,n))}add(t){t.completion.trim()&&this.cache.enqueue(t)}clear(){this.cache.clear()}isValidCacheItem(t,n,r){let i=t.textBeforeCursor.trim(),o=gu(n,r),a=o,s=r.getLineContent(n.lineNumber);if(n.column===s.length+1&&n.lineNumber<r.getLineCount()){let u=r.getLineContent(n.lineNumber+1);a=`${o}
${u}`}if(!(a.trim().includes(i)||i.includes(a.trim())))return!1;let c=r.getValueInRange(t.range);return this.isPartialMatch(c,t.completion)?this.isPositionValid(t,n):!1}isPartialMatch(t,n){let r=t.trim(),i=n.trim();return i.startsWith(r)||r.startsWith(i)}isPositionValid(t,n){let{range:r}=t,{startLineNumber:i,startColumn:o,endLineNumber:a,endColumn:s}=r,{lineNumber:c,column:u}=n;return c<i||c>a?!1:i===a?u>=o-1&&u<=s+1:c===i?u>=o-1:c===a?u<=s+1:!0}};Kg.MAX_CACHE_SIZE=20;var RS=Kg,MS=class{constructor(e){this.formattedCompletion="",this.formattedCompletion=e}setCompletion(e){return this.formattedCompletion=e,this}removeInvalidLineBreaks(){return this.formattedCompletion=this.formattedCompletion.trimEnd(),this}removeMarkdownCodeSyntax(){return this.formattedCompletion=this.removeMarkdownCodeBlocks(this.formattedCompletion),this}removeMarkdownCodeBlocks(e){let t=e.split(`
`),n=[],r=!1;for(let i=0;i<t.length;i++){let o=t[i],a=o.trim().startsWith("```");if(a&&!r){r=!0;continue}if(a&&r){r=!1;continue}n.push(o)}return n.join(`
`)}removeExcessiveNewlines(){return this.formattedCompletion=this.formattedCompletion.replace(/\n{3,}/g,`

`),this}build(){return this.formattedCompletion}},OS=class{findOverlaps(e,t,n){if(!e)return{startOverlapLength:0,maxOverlapLength:0};let r=e.length,i=t.length,o=n.length,a=0,s=0,c=0,u=Math.min(r,i);for(let f=1;f<=u;f++){let m=e.substring(0,f),b=t.slice(-f);m===b&&(c=f)}let d=Math.min(r,o);for(let f=0;f<d&&e[f]===n[f];f++)a++;for(let f=1;f<=d;f++)e.slice(-f)===n.slice(0,f)&&(s=f);let p=Math.max(a,s);if(p===0){for(let f=1;f<r;f++)if(n.startsWith(e.substring(f))){p=r-f;break}}return{startOverlapLength:c,maxOverlapLength:p}}},DS=class{constructor(e){this.monaco=e,this.textOverlapCalculator=new OS}computeInsertionRange(e,t,n){if(!t)return this.createEmptyRange(e);let r=n.getOffsetAt(e),i=n.getValue().substring(0,r),o=n.getValue().substring(r);if(r>=n.getValue().length)return this.createEmptyRange(e);if(o.length===0)return this.createEmptyRange(e);let{startOverlapLength:a,maxOverlapLength:s}=this.textOverlapCalculator.findOverlaps(t,i,o),c=a>0?n.getPositionAt(r-a):e,u=r+s,d=n.getPositionAt(u);return new this.monaco.Range(c.lineNumber,c.column,d.lineNumber,d.column)}computeCacheRange(e,t){let n=e.lineNumber,r=e.column,i=t.split(`
`),o=i.length-1,a=n+o,s=o===0?r+i[0].length:i[o].length+1;return new this.monaco.Range(n,r,a,s)}createEmptyRange(e){return new this.monaco.Range(e.lineNumber,e.column,e.lineNumber,e.column)}},FS=async e=>{let{endpoint:t,body:n}=e,r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok)throw new Error(`Error while fetching completion item: ${r.statusText}`);let{completion:i,error:o}=await r.json();return{completion:i,error:o}},$S=({pos:e,mdl:t,options:n})=>{let{filename:r,language:i,technologies:o,relatedFiles:a,maxContextLines:s=CS}=n,c=a&&a.length>0?3:2,u=s?Math.floor(s/c):void 0,d=(k,E,g)=>{let h=k(e,t);return E?Up(h,E,g):h},p=(k,E)=>!k||!E?k:k.map(({content:g,...h})=>({...h,content:Up(g,E)})),f=d(gu,u,{truncateDirection:"keepEnd"}),m=d(LS,u,{truncateDirection:"keepStart"}),b=p(a,u);return{filename:r,language:i,technologies:o,relatedFiles:b,textBeforeCursor:f,textAfterCursor:m,cursorPosition:e}},BS=(e,t=300)=>{let n=null,r=null,i=(...o)=>{if(r)return r.args=o,r.promise;let a,s,c=new Promise((u,d)=>{a=u,s=d});return r={args:o,promise:c,resolve:a,reject:s},n&&(clearTimeout(n),n=null),n=setTimeout(async()=>{let u=r;if(u){r=null,n=null;try{let d=await e(...u.args);u.resolve(d)}catch(d){u.reject(d)}}},t),c};return i.cancel=()=>{n&&(clearTimeout(n),n=null),r&&(r.reject(new Error("Cancelled")),r=null)},i},US=e=>typeof e=="string"?e==="Cancelled"||e==="AbortError":e instanceof Error?e.message==="Cancelled"||e.name==="AbortError":!1,ii=e=>({items:e,enableForwardStability:!0}),Hs=new RS,VS=async({monaco:e,mdl:t,pos:n,token:r,isCompletionAccepted:i,options:o})=>{let{trigger:a=qg,enableCaching:s=NS,allowFollowUpCompletions:c=ES,onError:u,requestHandler:d}=o;if(s&&!i){let p=Hs.get(n,t).map(f=>({insertText:f.completion,range:f.range}));if(p.length>0)return ii(p)}if(r.isCancellationRequested||!c&&i)return ii([]);try{let p=BS(async b=>{var E,g;(E=o.onCompletionRequested)==null||E.call(o,b);let k;if(d)k=await d(b);else if(o.endpoint)k=await FS({endpoint:o.endpoint,...b});else throw new Error('No endpoint specified for completion request. Please set the "endpoint" option in registerCompletion, or provide a custom requestHandler.');if(k.error)throw new Error(k.error);return(g=o.onCompletionRequestFinished)==null||g.call(o,b,k),k},{onTyping:zS,onIdle:TS,onDemand:PS}[a]);r.onCancellationRequested(()=>{p.cancel()});let f=$S({pos:n,mdl:t,options:o}),{completion:m}=await p({body:{completionMetadata:f}});if(m){let b=new MS(m).removeMarkdownCodeSyntax().removeExcessiveNewlines().removeInvalidLineBreaks().build(),k=new DS(e);return s&&Hs.add({completion:b,range:k.computeCacheRange(n,b),textBeforeCursor:gu(n,t)}),ii([{insertText:b,range:k.computeInsertionRange(n,b,t)}])}}catch(p){if(US(p))return ii([]);u?u(p):fl.warn("Cannot provide completion",p)}return ii([])},xu=new WeakMap,Dl=e=>xu.get(e),WS=(e,t)=>{xu.set(e,t)},Vp=e=>{xu.delete(e)},HS=e=>({isCompletionAccepted:!1,isCompletionVisible:!1,isExplicitlyTriggered:!1,hasRejectedCurrentCompletion:!1,options:e}),qS=(e,t)=>{let n=Dl(e);!n||!n.options||(n.options={...n.options,...t})},KS=(e,t,n)=>{let r=Dl(t);return r?e.languages.registerInlineCompletionsProvider(n.language,{provideInlineCompletions:(i,o,a,s)=>{if(i!==t.getModel())return{items:[]};let c=r.options||n;if(!(c.trigger==="onDemand"&&!r.isExplicitlyTriggered||c.triggerIf&&!c.triggerIf({text:IS(t),position:o,triggerType:c.trigger??qg})))return VS({monaco:e,mdl:i,pos:o,token:s,isCompletionAccepted:r.isCompletionAccepted,options:c})},handleItemDidShow:(i,o,a)=>{var s,c;r.isExplicitlyTriggered=!1,r.hasRejectedCurrentCompletion=!1,!r.isCompletionAccepted&&(r.isCompletionVisible=!0,(c=(s=r.options||n).onCompletionShown)==null||c.call(s,a,o.range))},freeInlineCompletions:()=>{}}):null},GS={TAB:(e,t)=>t.keyCode===e.KeyCode.Tab,CMD_RIGHT_ARROW:(e,t)=>t.keyCode===e.KeyCode.RightArrow&&t.metaKey},QS=class{constructor(e,t,n){this.monaco=e,this.state=t,this.initialOptions=n}handleKeyEvent(e){let t=this.state.options||this.initialOptions,n={monaco:this.monaco,event:e,state:this.state,options:t};this.handleCompletionAcceptance(n),this.handleCompletionRejection(n)}handleCompletionAcceptance(e){var t,n;return e.state.isCompletionVisible&&this.isAcceptanceKey(e.event)?((n=(t=e.options).onCompletionAccepted)==null||n.call(t),e.state.isCompletionAccepted=!0,e.state.isCompletionVisible=!1,!0):(e.state.isCompletionAccepted=!1,!1)}handleCompletionRejection(e){var t,n;return this.shouldRejectCompletion(e)?((n=(t=e.options).onCompletionRejected)==null||n.call(t),e.state.hasRejectedCurrentCompletion=!0,!0):!1}shouldRejectCompletion(e){return e.state.isCompletionVisible&&!e.state.hasRejectedCurrentCompletion&&!e.state.isCompletionAccepted&&!this.isAcceptanceKey(e.event)}isAcceptanceKey(e){return Object.values(GS).some(t=>t(this.monaco,e))}},JS=(e,t,n,r)=>{let i=new QS(e,n,r);return t.onKeyDown(o=>i.handleKeyEvent(o))},Qg=(e,t,n)=>{let r=[];WS(t,HS(n)),t.updateOptions({inlineSuggest:{enabled:!0}});try{let i=Dl(t);if(!i)return fl.warn("Completion is not registered properly. State not found."),XS();let o=KS(e,t,n);o&&r.push(o);let a=JS(e,t,i,n);return r.push(a),{deregister:()=>{for(let s of r)s.dispose();Hs.clear(),Vp(t)},trigger:()=>YS(t),updateOptions:s=>{qS(t,s(i.options||n))}}}catch(i){return n.onError?n.onError(i):fl.report(i),{deregister:()=>{for(let o of r)o.dispose();Vp(t)},trigger:()=>{},updateOptions:()=>{}}}},YS=e=>{let t=Dl(e);if(!t){fl.warn("Completion is not registered. Use `registerCompletion` to register completion first.");return}t.isExplicitlyTriggered=!0,e.trigger("keyboard","editor.action.inlineSuggest.trigger",{})},XS=()=>({deregister:()=>{},trigger:()=>{},updateOptions:()=>{}});function ZS(){return`tool_${Date.now().toString(36)}`}function e_(e){return/^[a-zA-Z0-9_]+$/.test(e)}const t_=`def my_tool(tool_context: ToolContext, param1: str) -> dict:
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
`;function n_({onSelectTool:e}){var Ft;const{project:t,updateProject:n,addCustomTool:r,updateCustomTool:i,removeCustomTool:o,selectedToolId:a,setSelectedToolId:s,builtinTools:c,mcpServers:u}=vt(),[d,p]=_.useState(""),[f,m]=_.useState(null),[b,k]=_.useState("tools"),[E,g]=_.useState(null),[h,y]=_.useState(""),[P,C]=_.useState(!1),[w,T]=_.useState(null),[O,B]=_.useState(!1),[j,x]=_.useState(!1),[S,z]=_.useState(null),[$,D]=_.useState(null);if(!t)return null;const H=t.mcp_servers||[],A=t.custom_tools.find(U=>U.id===a),R=H.find(U=>U.name===E),L=new Set(H.map(U=>U.name)),v=u.filter(U=>!L.has(U.name));function V(U){s(U),e==null||e(U)}_.useEffect(()=>{A&&(p(A.code),D(null))},[a]),_.useEffect(()=>{R&&(y(JSON.stringify(R,null,2)),C(!1))},[E]);function Q(){const U=ZS();r({id:U,name:"new_tool",description:"",module_path:"tools.custom",code:t_,state_keys_used:[]}),V(U)}function N(U,pe){pe.stopPropagation(),confirm("Delete this tool?")&&(o(U),a===U&&(e==null||e(null)))}function re(U){A&&(U.name!==void 0&&(U.name===""||e_(U.name)?D(null):D("Name can only contain letters, numbers, and underscores")),i(A.id,U))}function I(U){U!==void 0&&A&&(p(U),re({code:U}))}async function J(){if(A){B(!0);try{const U=await Mh(t.id,A.name,A.description,A.state_keys_used);U.success&&U.code?(p(U.code),re({code:U.code})):(console.error("Failed to generate tool code:",U.error),alert("Failed to generate tool code: "+(U.error||"Unknown error")))}catch(U){console.error("Error generating tool code:",U),alert("Error generating tool code: "+U.message)}finally{B(!1)}}}const F=_.useRef(null),Y=_.useCallback((U,pe)=>{if(F.current&&typeof F.current=="function")try{F.current()}catch{}try{const _e=Qg(pe,U,{language:"python",endpoint:"/api/code-completion",trigger:"onTyping"});typeof _e=="function"?F.current=_e:F.current=null}catch{F.current=null}},[]);_.useEffect(()=>()=>{if(F.current&&typeof F.current=="function")try{F.current()}catch{}},[]);function Z(){const U={name:`mcp_server_${Date.now().toString(36)}`,description:"New MCP Server",connection_type:"stdio",command:"npx",args:["-y","@modelcontextprotocol/server-example"],env:{},headers:{},timeout:10};n({mcp_servers:[...H,U]}),g(U.name),T(null)}function le(U){const pe={...U};n({mcp_servers:[...H,pe]}),g(pe.name),T(null)}function me(U,pe){pe.stopPropagation(),confirm("Delete this MCP server?")&&(n({mcp_servers:H.filter(_e=>_e.name!==U)}),E===U&&g(null))}function de(U){U!==void 0&&(y(U),C(U!==JSON.stringify(R,null,2)))}function Ze(){if(R)try{const U=JSON.parse(h),pe=R.name,_e=H.map(st=>st.name===pe?U:st);n({mcp_servers:_e}),g(U.name),C(!1)}catch(U){alert("Invalid JSON: "+U.message)}}async function bt(){x(!0),z(null);try{const U=JSON.parse(h),pe=await Dh({connection_type:U.connection_type,command:U.command,args:U.args,env:U.env,url:U.url,headers:U.headers,timeout:U.timeout||30});if(z(pe),pe.success&&pe.tools.length>0){const _e={...U,tool_filter:pe.tools.map(st=>st.name)};y(JSON.stringify(_e,null,2)),C(!0)}}catch(U){z({success:!1,tools:[],error:U.message})}finally{x(!1)}}const Ve={};return t.custom_tools.forEach(U=>{const pe=U.module_path||"tools";Ve[pe]||(Ve[pe]=[]),Ve[pe].push(U)}),l.jsxs("div",{className:"tools-panel",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("aside",{className:"tools-sidebar",children:[l.jsxs("div",{className:"sidebar-tabs",children:[l.jsxs("button",{className:`sidebar-tab ${b==="tools"?"active":""}`,onClick:()=>k("tools"),children:[l.jsx(Kt,{size:14}),"Tools"]}),l.jsxs("button",{className:`sidebar-tab ${b==="mcp"?"active":""}`,onClick:()=>k("mcp"),children:[l.jsx(or,{size:14}),"MCP"]})]}),b==="tools"?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"sidebar-header",children:[l.jsxs("h3",{children:["Custom Tools (",t.custom_tools.length,")"]}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:Q,children:[l.jsx($e,{size:14}),"New"]})]}),l.jsxs("div",{className:"tools-tree",children:[c.length>0&&l.jsxs("div",{className:"module-group",children:[l.jsxs("div",{className:"module-header",children:[l.jsx(Ud,{size:14}),"Built-in Tools"]}),c.map(U=>l.jsxs("div",{className:`tool-item builtin ${(f==null?void 0:f.name)===U.name?"selected":""}`,onClick:()=>{m(U),V(null),g(null)},children:[l.jsx(Is,{size:14}),l.jsx("span",{className:"tool-name",children:U.name})]},U.name))]}),t.custom_tools.length===0&&c.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx(Tn,{size:32}),l.jsx("p",{children:"No tools defined yet"})]}):t.custom_tools.length>0&&Object.entries(Ve).map(([U,pe])=>l.jsxs("div",{className:"module-group",children:[l.jsxs("div",{className:"module-header",children:[l.jsx(r0,{size:14}),U]}),pe.map(_e=>l.jsxs("div",{className:`tool-item ${a===_e.id?"selected":""}`,onClick:()=>{V(_e.id),m(null),g(null)},children:[l.jsx(Kt,{size:14}),l.jsx("span",{className:"tool-name",children:_e.name}),l.jsx("button",{className:"delete-btn",onClick:st=>N(_e.id,st),children:l.jsx(Oe,{size:14})})]},_e.id))]},U))]})]}):l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"sidebar-header",children:[l.jsxs("h3",{children:["MCP Servers (",H.length,")"]}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:Z,children:[l.jsx($e,{size:14}),"Custom"]})]}),l.jsxs("div",{className:"tools-tree",children:[H.length>0&&l.jsxs("div",{className:"module-group",children:[l.jsxs("div",{className:"module-header",children:[l.jsx(Ls,{size:14}),"Configured (",H.length,")"]}),H.map(U=>l.jsxs("div",{className:`tool-item ${E===U.name?"selected":""}`,onClick:()=>{g(U.name),T(null),V(null),m(null)},children:[l.jsx(or,{size:14}),l.jsx("span",{className:"tool-name",children:U.name}),l.jsx("span",{className:"tool-type-badge",children:U.connection_type}),l.jsx("button",{className:"delete-btn",onClick:pe=>me(U.name,pe),children:l.jsx(Oe,{size:14})})]},U.name))]}),v.length>0&&l.jsxs("div",{className:"module-group",children:[l.jsxs("div",{className:"module-header",children:[l.jsx(Ud,{size:14}),"Available Templates (",v.length,")"]}),v.map(U=>l.jsxs("div",{className:`tool-item known-server ${(w==null?void 0:w.name)===U.name?"selected":""}`,onClick:()=>{T(U),g(null),V(null),m(null)},children:[l.jsx(or,{size:14}),l.jsx("span",{className:"tool-name",children:U.name}),l.jsx("span",{className:"tool-type-badge",children:U.connection_type})]},U.name))]}),H.length===0&&v.length===0&&l.jsxs("div",{className:"empty-state",children:[l.jsx(or,{size:32}),l.jsx("p",{children:"No MCP servers available"})]})]})]})]}),l.jsx("div",{className:"tool-editor",children:f?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"editor-header",children:[l.jsx(Is,{size:20,style:{color:"var(--accent-secondary)"}}),l.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:f.name}),l.jsx("span",{className:"badge badge-muted",children:"Built-in"})]}),l.jsxs("div",{className:"builtin-tool-info",children:[l.jsxs("div",{className:"info-section",children:[l.jsx("h4",{children:"Description"}),l.jsx("p",{children:f.description||"No description available."})]}),l.jsxs("div",{className:"info-section",children:[l.jsx("h4",{children:"Usage"}),l.jsx("p",{children:"This is a built-in tool provided by ADK. Add it to any LLM agent's tools list to enable it."}),l.jsxs("code",{children:['tools: ["',f.name,'"]']})]}),l.jsxs("div",{className:"info-section",children:[l.jsx("h4",{children:"Note"}),l.jsx("p",{children:"Built-in tools are read-only and cannot be modified. Create a custom tool if you need different behavior."})]})]})]}):A?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"editor-header",children:[l.jsx(Kt,{size:20,style:{color:"var(--accent-primary)"}}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx("input",{type:"text",value:A.name,onChange:U=>re({name:U.target.value}),placeholder:"Tool name",style:{borderColor:$?"var(--error)":void 0}}),$&&l.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:$})]})]}),l.jsxs("div",{className:"editor-meta",children:[l.jsxs("div",{className:"meta-field grow",children:[l.jsx("label",{children:"Description"}),l.jsx("input",{type:"text",value:A.description,onChange:U=>re({description:U.target.value}),placeholder:"What does this tool do?"})]}),l.jsxs("div",{className:"meta-field",children:[l.jsx("label",{children:"Module Path"}),l.jsx("input",{type:"text",value:A.module_path,onChange:U=>re({module_path:U.target.value}),placeholder:"tools.custom",style:{width:180}})]})]}),l.jsxs("div",{className:"code-actions",children:[l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:J,disabled:O||!A.name||!A.description,title:!A.name||!A.description?"Add a name and description first":"Generate code using AI",children:O?l.jsxs(l.Fragment,{children:[l.jsx(Or,{size:14,className:"spinning"}),"Generating..."]}):l.jsxs(l.Fragment,{children:[l.jsx(Yc,{size:14}),"Write Tool"]})}),l.jsx("span",{className:"action-hint",children:"AI will generate code based on the tool name, description, and selected state keys"})]}),l.jsx("div",{className:"code-editor",children:l.jsx(Dr,{height:"100%",language:"python",theme:"vs-dark",value:d,onChange:I,onMount:Y,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12}}})}),l.jsxs("div",{className:"state-keys-panel",children:[l.jsxs("h4",{children:[l.jsx(Qc,{size:14})," State Keys Used"]}),l.jsx("div",{className:"state-key-chips",children:t.app.state_keys.length===0?l.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"No state keys defined. Add them in App Config."}):t.app.state_keys.map(U=>{const pe=A.state_keys_used.includes(U.name);return l.jsxs("label",{className:`state-key-chip ${pe?"selected":""}`,title:U.description,children:[l.jsx("input",{type:"checkbox",checked:pe,onChange:_e=>{const st=_e.target.checked?[...A.state_keys_used,U.name]:A.state_keys_used.filter(nr=>nr!==U.name);re({state_keys_used:st})}}),U.name,l.jsxs("span",{style:{color:"var(--text-muted)",fontSize:11},children:["(",U.type,")"]})]},U.name)})})]})]}):w?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"editor-header",children:[l.jsx(or,{size:20,style:{color:"var(--accent-secondary)"}}),l.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:w.name}),l.jsx("span",{className:"badge badge-info",children:w.connection_type}),l.jsx("span",{className:"badge badge-muted",children:"Template"}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>le(w),children:[l.jsx($e,{size:14}),"Add to Project"]})]}),l.jsxs("div",{className:"known-server-preview",children:[l.jsxs("div",{className:"preview-section",children:[l.jsx("h4",{children:"Description"}),l.jsx("p",{children:w.description})]}),l.jsxs("div",{className:"preview-section",children:[l.jsx("h4",{children:"Command"}),l.jsxs("code",{children:[w.command," ",(Ft=w.args)==null?void 0:Ft.join(" ")]})]}),w.env&&Object.keys(w.env).length>0&&l.jsxs("div",{className:"preview-section",children:[l.jsx("h4",{children:"Required Environment Variables"}),l.jsx("div",{className:"env-vars",children:Object.entries(w.env).map(([U,pe])=>l.jsxs("div",{className:"env-var",children:[l.jsx("code",{children:U}),pe?l.jsx("span",{className:"env-value",children:pe}):l.jsx("span",{className:"env-required",children:"Required"})]},U))})]}),w.tool_filter&&w.tool_filter.length>0&&l.jsxs("div",{className:"preview-section",children:[l.jsxs("h4",{children:["Available Tools (",w.tool_filter.length,")"]}),l.jsx("div",{className:"tool-badges",children:w.tool_filter.map(U=>l.jsx("span",{className:"tool-badge",children:U},U))})]}),l.jsxs("div",{className:"preview-section",children:[l.jsx("h4",{children:"Configuration Preview"}),l.jsx("pre",{className:"config-preview",children:JSON.stringify(w,null,2)})]})]})]}):R?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"editor-header",children:[l.jsx(or,{size:20,style:{color:"var(--accent-primary)"}}),l.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:R.name}),l.jsx("span",{className:"badge badge-info",children:R.connection_type}),P&&l.jsx("span",{className:"unsaved-badge",children:"Unsaved"}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:bt,disabled:j,title:"Test connection and discover available tools",children:[j?l.jsx(Or,{size:14,className:"spin"}):l.jsx(Ls,{size:14}),j?"Testing...":"Test Connection"]}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:Ze,disabled:!P,children:[l.jsx(Jc,{size:14}),"Save"]})]}),S&&l.jsx("div",{className:`mcp-test-result ${S.success?"success":"error"}`,children:S.success?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"test-result-header",children:["✓ Connected! Found ",S.tools.length," tools"]}),S.tools.length>0&&l.jsxs("div",{className:"test-result-tools",children:[l.jsx("strong",{children:"Available tools:"}),l.jsx("ul",{children:S.tools.map(U=>l.jsxs("li",{children:[l.jsx("code",{children:U.name}),U.description&&l.jsxs("span",{children:[" — ",U.description]})]},U.name))}),l.jsx("p",{className:"hint",children:'The tool_filter has been updated with these tools. Click "Save" to apply.'})]})]}):l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"test-result-header",children:"✗ Connection failed"}),l.jsx("div",{className:"test-result-error",children:S.error})]})}),l.jsx("div",{className:"mcp-info",children:l.jsx("p",{children:'Configure your MCP server using JSON. Click "Test Connection" to verify and discover available tools.'})}),l.jsx("div",{className:"code-editor",children:l.jsx(Dr,{height:"100%",language:"json",theme:"vs-dark",value:h,onChange:de,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},formatOnPaste:!0}})}),l.jsxs("div",{className:"mcp-help",children:[l.jsx("h4",{children:"Schema Reference"}),l.jsxs("div",{className:"schema-fields",children:[l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"name"}),l.jsx("span",{children:"Unique identifier for this server"})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"description"}),l.jsx("span",{children:"Human-readable description"})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"connection_type"}),l.jsx("span",{children:'"stdio" | "sse" | "http"'})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"command"}),l.jsx("span",{children:"Command to run (for stdio)"})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"args"}),l.jsx("span",{children:"Array of command arguments"})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"env"}),l.jsx("span",{children:"Environment variables object"})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"url"}),l.jsx("span",{children:"Server URL (for sse/http)"})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"tool_filter"}),l.jsx("span",{children:"Array of tool names to include (null/omit = all tools, [] = no tools)"})]})]})]})]}):l.jsxs("div",{className:"empty-state",children:[l.jsx(Tn,{size:48}),l.jsxs("p",{children:["Select a tool to view",l.jsx("br",{}),"or create a new custom tool"]})]})})]})}function r_(){return`callback_${Date.now().toString(36)}`}function Wp(e){return/^[a-zA-Z0-9_]+$/.test(e)}function Jg(e){switch(e){case"before_agent":case"after_agent":return`from google.adk.agents.callback_context import CallbackContext
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
`;default:return Jg("before_agent")}}function i_({onSelectCallback:e}){var O,B;const{project:t,updateProject:n,addCustomCallback:r,updateCustomCallback:i,removeCustomCallback:o}=vt(),[a,s]=_.useState(""),[c,u]=_.useState(null),[d,p]=_.useState(null),[f,m]=_.useState(!1),b=_.useRef(null);if(!t)return null;const k=t.custom_callbacks||[],E=k.find(j=>j.id===c);function g(j){u(j),e==null||e(j)}_.useEffect(()=>{E?(s(E.code),p(null)):s("")},[c,E]);function h(){const j=r_(),x={id:j,name:"new_callback",description:"",module_path:"callbacks.custom",code:Jg("before_agent"),state_keys_used:[]};r(x),g(j)}function y(j,x){x.stopPropagation(),confirm("Delete this callback?")&&(o(j),c===j&&(e==null||e(null),u(null),s("")))}function P(){if(!c)return;const j=k.find(z=>z.id===c);if(!j)return;const x=j.name.trim();if(!x){alert("Please enter a name");return}if(!Wp(x)){p("Name must contain only alphanumeric characters and underscores");return}if(k.find(z=>z.name===x&&z.id!==j.id)){p("A callback with this name already exists");return}i(j.id,{code:a,name:x,description:j.description,module_path:j.module_path,state_keys_used:j.state_keys_used}),p(null)}function C(j,x){b.current=x;try{Qg(x,{endpoint:"/api/code-completion",language:"python"})}catch(S){console.warn("Failed to register Monacopilot completion:",S)}}async function w(){if(E){m(!0);try{let j="before_agent";const x=E.name.toLowerCase(),S=E.description.toLowerCase();x.includes("after_agent")||S.includes("after agent")?j="after_agent":x.includes("before_model")||S.includes("before model")?j="before_model":x.includes("after_model")||S.includes("after model")?j="after_model":x.includes("before_tool")||S.includes("before tool")?j="before_tool":x.includes("after_tool")||S.includes("after tool")?j="after_tool":(x.includes("before_agent")||S.includes("before agent"))&&(j="before_agent");const z=await Oh(t.id,E.name,E.description,j,E.state_keys_used);z.success&&z.code?(s(z.code),i(E.id,{code:z.code})):(console.error("Failed to generate callback code:",z.error),alert("Failed to generate callback code: "+(z.error||"Unknown error")))}catch(j){console.error("Error generating callback code:",j),alert("Error generating callback code: "+j.message)}finally{m(!1)}}}const T=((B=(O=t.app)==null?void 0:O.state_keys)==null?void 0:B.map(j=>j.name))||[];return l.jsxs("div",{className:"tools-panel",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("div",{className:"tools-sidebar",children:[l.jsxs("div",{className:"tools-sidebar-header",children:[l.jsx("h3",{children:"Callbacks"}),l.jsx("button",{className:"btn btn-primary btn-sm",onClick:h,title:"Add Callback",children:l.jsx($e,{size:16})})]}),l.jsx("div",{className:"tools-list",children:k.length===0?l.jsx("div",{style:{padding:"16px",color:"var(--text-secondary)",fontSize:"14px"},children:"No callbacks yet. Click + to add one."}):k.map(j=>l.jsxs("div",{className:`tool-item ${c===j.id?"selected":""}`,onClick:()=>g(j.id),children:[l.jsxs("div",{style:{flex:1},children:[l.jsx("div",{className:"tool-item-name",children:j.name}),j.description&&l.jsx("div",{className:"tool-item-type",style:{fontSize:"11px",color:"var(--text-secondary)",marginTop:"2px"},children:j.description})]}),l.jsx("div",{className:"tool-item-actions",children:l.jsx("button",{className:"btn btn-icon btn-sm",onClick:x=>y(j.id,x),title:"Delete",children:l.jsx(Oe,{size:14})})})]},j.id))})]}),l.jsx("div",{className:"tools-editor",children:E?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"tools-editor-header",children:[l.jsx("h3",{children:"Edit Callback"}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:P,children:[l.jsx(Jc,{size:16,style:{marginRight:"6px"}}),"Save"]})]}),l.jsxs("div",{className:"tools-editor-content",style:{padding:"16px",overflowY:"auto"},children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Name"}),l.jsx("input",{type:"text",value:E.name,onChange:j=>{const x=j.target.value;i(E.id,{name:x}),d&&Wp(x)&&p(null)},className:d?"error":""}),d&&l.jsx("div",{className:"error-message",children:d})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Description"}),l.jsx("textarea",{value:E.description,onChange:j=>i(E.id,{description:j.target.value}),rows:2,placeholder:"Describe what this callback does..."})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Module Path"}),l.jsx("input",{type:"text",value:E.module_path,onChange:j=>i(E.id,{module_path:j.target.value}),placeholder:"callbacks.custom"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"State Keys Used"}),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"8px"},children:T.map(j=>{const x=E.state_keys_used.includes(j);return l.jsxs("button",{type:"button",className:`btn btn-sm ${x?"btn-primary":"btn-secondary"}`,onClick:()=>{const S=x?E.state_keys_used.filter(z=>z!==j):[...E.state_keys_used,j];i(E.id,{state_keys_used:S})},children:[l.jsx(Qc,{size:12,style:{marginRight:"4px"}}),j]},j)})}),T.length===0&&l.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"12px",marginTop:"4px"},children:"No state keys defined in App Config"})]}),l.jsxs("div",{className:"form-group",children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[l.jsx("label",{children:"Code"}),l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:w,disabled:f||!E.name,title:E.name?"Generate code using AI":"Add a name first",children:f?l.jsxs(l.Fragment,{children:[l.jsx(Or,{size:14,className:"spinning"}),"Generating..."]}):l.jsxs(l.Fragment,{children:[l.jsx(Yc,{size:14}),"Generate"]})})]}),l.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"8px"},children:"AI will generate code based on the callback name, description, and selected state keys"}),l.jsx("div",{className:"code-editor-container",children:l.jsx(Dr,{height:"100%",language:"python",theme:"vs-dark",value:a,onChange:j=>s(j||""),onMount:C,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0}})})]})]})]}):l.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)"},children:"Select a callback to edit, or create a new one"})})]})}const Hp={agent_start:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},agent_end:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},tool_call:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},tool_result:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},model_call:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},model_response:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},state_change:{bg:"#3d0d1f",fg:"#fda4af",border:"#f43f5e"},transfer:{bg:"#0d2d3d",fg:"#7dd3fc",border:"#0ea5e9"},callback_start:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},callback_end:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"}},o_={agent_start:Ps,agent_end:Ps,tool_call:Kt,tool_result:Kt,model_call:Kc,model_response:Gh,state_change:rn,transfer:Xh,callback_start:Tn,callback_end:Tn};function l_(e){var t,n,r,i,o,a,s,c,u,d,p,f,m,b,k,E,g,h,y,P,C;switch(e.event_type){case"agent_start":return`START ${e.agent_name}`;case"agent_end":return(t=e.data)!=null&&t.error?`END ${e.agent_name} [ERROR]`:`END ${e.agent_name}`;case"tool_call":const T=Object.entries(((n=e.data)==null?void 0:n.args)||{}).map(([L,v])=>{const V=v!=null?JSON.stringify(v):"null";return`${L}=${V.slice(0,20)}`}).join(", ")||"";return`CALL ${((r=e.data)==null?void 0:r.tool_name)||"unknown"}(${T.slice(0,60)}${T.length>60?"...":""})`;case"tool_result":const O=(i=e.data)==null?void 0:i.result;let B="";if((a=(o=O==null?void 0:O.content)==null?void 0:o[0])!=null&&a.text)B=String(O.content[0].text).slice(0,60);else if(typeof O=="string")B=O.slice(0,60);else if(O!=null){const L=JSON.stringify(O);B=L?L.slice(0,60):""}else B="";return`RESULT ${((s=e.data)==null?void 0:s.tool_name)||"unknown"} → ${B}${B.length>=60?"...":""}`;case"model_call":return`LLM_REQ ${((u=(c=e.data)==null?void 0:c.contents)==null?void 0:u.length)||0} msgs, ${((d=e.data)==null?void 0:d.tool_count)||0} tools`;case"model_response":const j=((f=(p=e.data)==null?void 0:p.response_content)==null?void 0:f.parts)||((m=e.data)==null?void 0:m.parts)||[],x=j.find(L=>(L==null?void 0:L.type)==="function_call");if(x)return`LLM_RSP → ${x.name||"unknown"}()`;const S=j.find(L=>(L==null?void 0:L.type)==="text");if(S!=null&&S.text){const L=String(S.text);return`LLM_RSP "${L.slice(0,50)}${L.length>50?"...":""}"`}return`LLM_RSP (${((b=e.data)==null?void 0:b.finish_reason)||"complete"})`;case"state_change":return`STATE ${Object.keys(((k=e.data)==null?void 0:k.state_delta)||{}).join(", ")}`;case"transfer":return`TRANSFER → ${((E=e.data)==null?void 0:E.target)||"unknown"}`;case"callback_start":const $=((g=e.data)==null?void 0:g.callback_name)||"unknown",D=((h=e.data)==null?void 0:h.callback_type)||"";return`CALLBACK START ${D?`[${D}]`:""} ${$}`;case"callback_end":const H=((y=e.data)==null?void 0:y.callback_name)||"unknown",A=((P=e.data)==null?void 0:P.callback_type)||"",R=(C=e.data)!=null&&C.error?" [ERROR]":"";return`CALLBACK END ${A?`[${A}]`:""} ${H}${R}`;default:return e.event_type.toUpperCase()}}function a_(e,t){const n=e-t;return n<1?`+${(n*1e3).toFixed(0)}ms`:n<60?`+${n.toFixed(2)}s`:`+${Math.floor(n/60)}m${(n%60).toFixed(0)}s`}function s_({event:e}){var o,a,s,c,u,d,p,f,m,b,k,E,g,h,y,P;const[t,n]=_.useState(new Set(["instruction","messages","result","response","state_delta","data"])),r=C=>{const w=new Set(t);w.has(C)?w.delete(C):w.add(C),n(w)},i=(C,w=0,T=!1)=>{const O="  ".repeat(w),B="  ".repeat(w+1);if(C===null)return l.jsx("span",{className:"json-null",children:"null"});if(C===void 0)return l.jsx("span",{className:"json-undefined",children:"undefined"});if(typeof C=="boolean")return l.jsx("span",{className:"json-boolean",children:C.toString()});if(typeof C=="number")return l.jsx("span",{className:"json-number",children:C});if(typeof C=="string"){const j=C.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\t/g,"\\t");return j.length>300&&w>0?l.jsxs("span",{className:"json-string",children:['"',j.slice(0,300),'..." ',l.jsxs("span",{className:"json-truncated",children:["(",C.length," chars)"]})]}):l.jsxs("span",{className:"json-string",children:['"',j,'"']})}if(Array.isArray(C))return C.length===0?l.jsx("span",{className:"json-bracket",children:"[]"}):C.every(x=>x===null||typeof x!="object")&&C.length<=3?l.jsxs("span",{className:"json-inline",children:[l.jsx("span",{className:"json-bracket",children:"["}),C.map((x,S)=>l.jsxs("span",{children:[i(x,w+1,!0),S<C.length-1&&l.jsx("span",{className:"json-comma",children:", "})]},S)),l.jsx("span",{className:"json-bracket",children:"]"})]}):l.jsxs("span",{className:"json-block",children:[l.jsx("span",{className:"json-bracket",children:"["}),C.map((x,S)=>l.jsxs("span",{children:[`
`+B,i(x,w+1),S<C.length-1&&l.jsx("span",{className:"json-comma",children:","})]},S)),`
`+O,l.jsx("span",{className:"json-bracket",children:"]"})]});if(typeof C=="object"){const j=Object.entries(C);return j.length===0?l.jsx("span",{className:"json-bracket",children:"{}"}):j.length<=2&&j.every(([,S])=>S===null||typeof S!="object")&&T?l.jsxs("span",{className:"json-inline",children:[l.jsx("span",{className:"json-bracket",children:"{"}),j.map(([S,z],$)=>l.jsxs("span",{children:[l.jsxs("span",{className:"json-key",children:['"',S,'"']}),l.jsx("span",{className:"json-colon",children:": "}),i(z,w+1,!0),$<j.length-1&&l.jsx("span",{className:"json-comma",children:", "})]},S)),l.jsx("span",{className:"json-bracket",children:"}"})]}):l.jsxs("span",{className:"json-block",children:[l.jsx("span",{className:"json-bracket",children:"{"}),j.map(([S,z],$)=>l.jsxs("span",{children:[`
`+B,l.jsxs("span",{className:"json-key",children:['"',S,'"']}),l.jsx("span",{className:"json-colon",children:": "}),i(z,w+1),$<j.length-1&&l.jsx("span",{className:"json-comma",children:","})]},S)),`
`+O,l.jsx("span",{className:"json-bracket",children:"}"})]})}return String(C)};return l.jsxs("div",{className:"event-detail",children:[l.jsxs("div",{className:"detail-header",children:[l.jsx("span",{className:"detail-type",children:e.event_type}),l.jsx("span",{className:"detail-agent",children:e.agent_name}),l.jsx("span",{className:"detail-time",children:new Date(e.timestamp*1e3).toISOString()})]}),l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("data"),children:[t.has("data")?l.jsx(kt,{size:12}):l.jsx(wt,{size:12}),l.jsx("span",{children:"Event Data"})]}),t.has("data")&&l.jsx("div",{className:"section-content json-viewer",children:i(e.data)})]}),e.event_type==="agent_start"&&((o=e.data)==null?void 0:o.instruction)&&l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("instruction"),children:[t.has("instruction")?l.jsx(kt,{size:12}):l.jsx(wt,{size:12}),l.jsx("span",{children:"Instruction"}),l.jsxs("span",{className:"char-count",children:[e.data.instruction.length," chars"]})]}),t.has("instruction")&&l.jsx("div",{className:"section-content",children:l.jsx("pre",{className:"instruction-text",children:e.data.instruction})})]}),e.event_type==="model_call"&&((a=e.data)==null?void 0:a.contents)&&l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("messages"),children:[t.has("messages")?l.jsx(kt,{size:12}):l.jsx(wt,{size:12}),l.jsxs("span",{children:["Messages (",e.data.contents.length,")"]})]}),t.has("messages")&&l.jsx("div",{className:"section-content",children:e.data.contents.map((C,w)=>{var T;return l.jsxs("div",{className:"message-item",children:[l.jsx("span",{className:`message-role ${C.role}`,children:C.role}),l.jsx("div",{className:"message-parts",children:(T=C.parts)==null?void 0:T.map((O,B)=>l.jsxs("div",{className:"message-part",children:[O.text&&l.jsx("pre",{children:O.text}),O.function_call&&l.jsxs("div",{className:"function-call",children:[l.jsx("strong",{children:O.function_call.name}),l.jsx("pre",{children:JSON.stringify(O.function_call.args,null,2)})]}),O.function_response&&l.jsxs("div",{className:"function-response",children:[l.jsx("strong",{children:O.function_response.name}),l.jsx("pre",{children:JSON.stringify(O.function_response.response,null,2)})]})]},B))})]},w)})})]}),e.event_type==="tool_result"&&l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("result"),children:[t.has("result")?l.jsx(kt,{size:12}):l.jsx(wt,{size:12}),l.jsx("span",{children:"Tool Result"})]}),t.has("result")&&l.jsx("div",{className:"section-content",children:l.jsx("pre",{className:"result-content",children:((d=(u=(c=(s=e.data)==null?void 0:s.result)==null?void 0:c.content)==null?void 0:u[0])==null?void 0:d.text)||(typeof((p=e.data)==null?void 0:p.result)=="string"?e.data.result:JSON.stringify((f=e.data)==null?void 0:f.result,null,2))})})]}),e.event_type==="model_response"&&((m=e.data)==null?void 0:m.parts)&&l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("response"),children:[t.has("response")?l.jsx(kt,{size:12}):l.jsx(wt,{size:12}),l.jsxs("span",{children:["Response (",e.data.parts.length," part",e.data.parts.length!==1?"s":"",")"]}),e.data.token_counts&&l.jsxs("span",{className:"token-badge",children:[e.data.token_counts.input,"↑ ",e.data.token_counts.output,"↓"]})]}),t.has("response")&&l.jsx("div",{className:"section-content",children:e.data.parts.map((C,w)=>l.jsxs("div",{className:"response-part",children:[C.type==="text"&&C.text&&l.jsx("pre",{className:"response-text",children:C.text}),C.type==="function_call"&&l.jsxs("div",{className:"function-call",children:[l.jsxs("strong",{children:["→ ",C.name,"()"]}),C.args&&Object.keys(C.args).length>0&&l.jsx("pre",{children:JSON.stringify(C.args,null,2)})]}),C.thought&&l.jsx("div",{className:"thought-indicator",children:"💭 Thinking"})]},w))})]}),(e.event_type==="callback_start"||e.event_type==="callback_end")&&l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("callback_info"),children:[t.has("callback_info")?l.jsx(kt,{size:12}):l.jsx(wt,{size:12}),l.jsx("span",{children:"Callback Information"})]}),t.has("callback_info")&&l.jsxs("div",{className:"section-content",children:[l.jsxs("div",{children:[l.jsx("strong",{children:"Name:"})," ",((b=e.data)==null?void 0:b.callback_name)||"unknown"]}),l.jsxs("div",{children:[l.jsx("strong",{children:"Type:"})," ",((k=e.data)==null?void 0:k.callback_type)||"unknown"]}),l.jsxs("div",{children:[l.jsx("strong",{children:"Module Path:"})," ",((E=e.data)==null?void 0:E.module_path)||"unknown"]}),((g=e.data)==null?void 0:g.error)&&l.jsxs("div",{style:{color:"#ef4444",marginTop:"8px"},children:[l.jsxs("div",{children:[l.jsx("strong",{children:"Error:"})," ",e.data.error]}),((h=e.data)==null?void 0:h.error_type)&&l.jsxs("div",{style:{marginTop:"4px",fontSize:"0.9em",opacity:.8},children:[l.jsx("strong",{children:"Type:"})," ",e.data.error_type]}),((y=e.data)==null?void 0:y.stack_trace)&&l.jsxs("div",{style:{marginTop:"8px"},children:[l.jsx("strong",{children:"Stack Trace:"}),l.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"300px",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:e.data.stack_trace})]})]})]})]}),e.event_type==="state_change"&&((P=e.data)==null?void 0:P.state_delta)&&l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("state_delta"),children:[t.has("state_delta")?l.jsx(kt,{size:12}):l.jsx(wt,{size:12}),l.jsxs("span",{children:["State Changes (",Object.keys(e.data.state_delta).length,")"]})]}),t.has("state_delta")&&l.jsx("div",{className:"section-content",children:Object.entries(e.data.state_delta).map(([C,w])=>l.jsxs("div",{className:"state-delta-item",children:[l.jsx("div",{className:"state-delta-key",children:C}),l.jsx("pre",{className:"state-delta-value",children:typeof w=="string"?w:JSON.stringify(w,null,2)})]},C))})]})]})}function c_({content:e,title:t,onClose:n}){return l.jsxs("div",{className:"modal-overlay",onClick:n,children:[l.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[l.jsxs("div",{className:"modal-header",children:[l.jsx("h3",{children:t}),l.jsx("button",{className:"modal-close",onClick:n,children:"×"})]}),l.jsx("div",{className:"modal-body markdown-content",children:l.jsx(Wg,{children:e})})]}),l.jsx("style",{children:`
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
      `})]})}function u_({events:e,selectedEventIndex:t,project:n}){const[r,i]=_.useState(null),o=_.useMemo(()=>{var u;const s={};return(u=n==null?void 0:n.app)!=null&&u.state_keys&&n.app.state_keys.forEach(d=>{s[d.name]={value:void 0,timestamp:null,defined:!0,description:d.description,type:d.type}}),n!=null&&n.agents&&n.agents.forEach(d=>{if(d.type==="LlmAgent"&&d.output_key){const p=d.output_key;s[p]||(s[p]={value:void 0,timestamp:null,defined:!0,description:`Output from ${d.name}`,type:"string"})}}),(t!==null?e.slice(0,t+1):e).filter(d=>d.event_type==="state_change").forEach(d=>{var p;(p=d.data)!=null&&p.state_delta&&Object.entries(d.data.state_delta).forEach(([f,m])=>{var b;s[f]={...s[f],value:m,timestamp:d.timestamp,defined:((b=s[f])==null?void 0:b.defined)??!1}})}),s},[e,t,n]),a=Object.entries(o);return l.jsxs(l.Fragment,{children:[r&&l.jsx(c_,{content:r.content,title:r.title,onClose:()=>i(null)}),l.jsxs("div",{className:"state-snapshot",children:[l.jsx("style",{children:`
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
      `}),l.jsx("div",{className:"state-header",children:t!==null?`State after event #${t}`:e.length>0?"State at end of run":"Defined State Keys"}),a.length===0?l.jsx("div",{className:"state-empty",children:"No state keys defined"}):a.map(([s,{value:c,timestamp:u,defined:d,description:p,type:f}])=>l.jsxs("div",{className:`state-entry ${c===void 0?"unset":""}`,children:[l.jsxs("div",{className:"state-key",children:[s,f&&l.jsxs("span",{className:"state-type",children:["(",f,")"]})]}),l.jsx("div",{className:"state-value",onClick:()=>{if(c!==void 0){const m=typeof c=="string"?c:JSON.stringify(c,null,2);i({content:m,title:s})}},style:{cursor:c!==void 0?"pointer":"default"},title:c!==void 0?"Click to view in markdown viewer":void 0,children:c===void 0?"(not set)":typeof c=="string"?c:JSON.stringify(c,null,2)}),p&&l.jsx("div",{className:"state-desc",children:p}),u&&l.jsx("div",{className:"state-time",children:new Date(u*1e3).toLocaleTimeString()})]},s))]})]})}let qs=null,Ks=null;(async()=>{try{qs=(await Zh(()=>import("./jq-DWiF-rDD.js").then(t=>t.j),[])).default}catch(e){console.warn("jq-web failed to load:",e.message),Ks=e.message}})();function Ta(e){if(!e)return{text:"",isError:!1};if(e.success===!1)return{text:e.error||"Unknown error",isError:!0};let t=e.result||e;if(typeof t=="string")try{const n=t.replace(/'/g,'"').replace(/True/g,"true").replace(/False/g,"false").replace(/None/g,"null");t=JSON.parse(n)}catch{return{text:t,isError:!1}}return t.content&&Array.isArray(t.content)?{text:t.content.filter(r=>r.type==="text").map(r=>r.text).join(`
`),isError:t.isError===!0}:{text:typeof t=="string"?t:JSON.stringify(t,null,2),isError:!1}}function qp(e,t){if(!t||!t.trim())return e;const n=t.trim();let r=e;try{r=JSON.parse(e)}catch{}if(n.startsWith("js:")){const i=n.slice(3).trim();try{const a=new Function("value","data",`return ${i}`)(e,r);return typeof a=="string"?a:JSON.stringify(a,null,2)}catch(o){return`[JS error: ${o}]`}}if(qs)try{const i=qs.json(r,n);return i==null?"[No match]":typeof i=="string"?i:JSON.stringify(i,null,2)}catch(i){if(!n.startsWith("."))try{const a=new Function("value","data",`return ${n}`)(e,r);return typeof a=="string"?a:JSON.stringify(a,null,2)}catch{}return`[jq error: ${i.message||i}]`}else{if(Ks){if(n.startsWith(".")&&!n.includes("|"))try{const i=n.slice(1).split(".").filter(Boolean);let o=r;for(const a of i){const s=a.match(/^(\w+)?\[(\d+)\]$/);s?(s[1]&&(o=o[s[1]]),o=o[parseInt(s[2])]):o=o[a]}return typeof o=="string"?o:JSON.stringify(o,null,2)}catch{}try{const o=new Function("value","data",`return ${n}`)(e,r);return typeof o=="string"?o:JSON.stringify(o,null,2)}catch(i){return`[jq not loaded: ${Ks}. JS fallback failed: ${i.message}]`}}return"[jq loading...]"}}function d_({project:e,selectedEventIndex:t}){var J;const{watches:n,updateWatch:r,addWatch:i,removeWatch:o,runEvents:a}=vt(),[s,c]=_.useState(!1),[u,d]=_.useState(null),[p,f]=_.useState({}),[m,b]=_.useState(new Set),[k,E]=_.useState(""),[g,h]=_.useState(""),[y,P]=_.useState({}),[C,w]=_.useState(""),[T,O]=_.useState([]),[B,j]=_.useState(null),[x,S]=_.useState(null),[z,$]=_.useState(!1);_.useEffect(()=>{qc().then(O).catch(console.error)},[]);const D=_.useMemo(()=>{const F=e.mcp_servers||[],Y=new Set(F.map(le=>le.name)),Z=T.filter(le=>!Y.has(le.name));return[...F,...Z]},[e.mcp_servers,T]),H=_.useCallback(async F=>{if(!(p[F]||m.has(F))){b(Y=>new Set([...Y,F]));try{const Y=await ye(`/projects/${e.id}/mcp-servers/${encodeURIComponent(F)}/test-connection`,{method:"POST"});Y.success&&f(Z=>({...Z,[F]:Y.tools}))}catch(Y){console.error("Failed to load tools:",Y)}finally{b(Y=>{const Z=new Set(Y);return Z.delete(F),Z})}}},[e.id,p,m]);_.useEffect(()=>{var le;if(u)return;if(!k||!g){P({});return}const Y=(p[k]||[]).find(me=>me.name===g);if(!((le=Y==null?void 0:Y.parameters)!=null&&le.properties)){P({});return}const Z={};Object.entries(Y.parameters.properties).forEach(([me,de])=>{de.type==="string"?Z[me]=de.default||"":de.type==="number"||de.type==="integer"?Z[me]=de.default||0:de.type==="boolean"?Z[me]=de.default||!1:Z[me]=de.default||null}),P(Z)},[k,g,p,u]);const A=()=>{d(null),E(""),h(""),P({}),w(""),j(null),S(null),c(!0)},R=F=>{if(d(F.id),E(F.serverName),h(F.toolName),P({...F.args}),w(F.transform||""),F.result){const{text:Y}=Ta(F.result);j(Y),S(null)}else j(null),S(null);p[F.serverName]||H(F.serverName),c(!0)},L=async()=>{if(!(!k||!g)){$(!0),S(null);try{const F=await ye(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:k,tool_name:g,arguments:y})}),{text:Y,isError:Z}=Ta(F);Z?(S(Y),j(null)):(j(Y),S(null))}catch(F){S(String(F)),j(null)}finally{$(!1)}}},v=_.useMemo(()=>B?!C||!C.trim()?B:qp(B,C):null,[B,C]),V=()=>{if(!(!k||!g)){if(u){r(u,{serverName:k,toolName:g,args:{...y},transform:C||void 0});const F=n.find(Y=>Y.id===u);F&&N({...F,serverName:k,toolName:g,args:y,transform:C||void 0,history:F.history||[]})}else{const F={id:`watch-${Date.now()}`,serverName:k,toolName:g,args:{...y},transform:C||void 0,history:[]};i(F),N(F)}c(!1)}},Q=F=>{o(F)},N=_.useCallback(async(F,Y)=>{r(F.id,{isLoading:!0,error:void 0});const Z=Y??a.length-1,le=Date.now();try{const me=await ye(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:F.serverName,tool_name:F.toolName,arguments:F.args})}),de={eventIndex:Z,timestamp:le,result:me},Ze=[...F.history||[],de];r(F.id,{result:me,isLoading:!1,lastRun:le,history:Ze})}catch(me){const de={eventIndex:Z,timestamp:le,error:String(me)},Ze=[...F.history||[],de];r(F.id,{error:String(me),isLoading:!1,lastRun:le,history:Ze})}},[e.id,r,a.length]),re=()=>{n.forEach(F=>N(F))},I=_.useMemo(()=>!k||!g?null:(p[k]||[]).find(Y=>Y.name===g),[k,g,p]);return l.jsxs("div",{className:"tool-watch-panel",children:[l.jsxs("div",{className:"watch-header",children:[l.jsx(Ui,{size:14}),l.jsx("span",{children:"Tool Watch"}),l.jsx("span",{className:"watch-auto-badge",title:"Watches auto-refresh on every event",children:"⚡ Auto"}),l.jsxs("div",{className:"watch-actions",children:[l.jsx("button",{className:"watch-btn",onClick:re,title:"Refresh all",children:l.jsx(tn,{size:12})}),l.jsx("button",{className:"watch-btn",onClick:A,title:"Add watch",children:l.jsx($e,{size:12})})]})]}),n.length===0?l.jsxs("div",{className:"watch-empty",children:[l.jsx(Ui,{size:20,style:{opacity:.3}}),l.jsx("span",{children:"No watch expressions"}),l.jsxs("button",{className:"add-watch-btn",onClick:A,children:[l.jsx($e,{size:12})," Add Tool Watch"]})]}):l.jsx("div",{className:"watch-list",children:n.map(F=>{let Y=F.result,Z=F.error;if(t!==null&&F.history&&F.history.length>0){const bt=F.history.filter(Ve=>Ve.eventIndex<=t);if(bt.length>0){const Ve=bt[bt.length-1];Y=Ve.result,Z=Ve.error}else Y=void 0,Z=void 0}const{text:le,isError:me}=Y?Ta(Y):{text:"",isError:!1},de=Y?qp(le,F.transform):"",Ze=Z||me;return l.jsxs("div",{className:`watch-item ${Ze?"error":""}`,children:[l.jsxs("div",{className:"watch-item-header",children:[l.jsxs("span",{className:"watch-expr",children:[l.jsx("span",{className:"watch-server",children:F.serverName}),l.jsx("span",{className:"watch-tool",children:F.toolName}),Object.keys(F.args).length>0&&l.jsxs("span",{className:"watch-args",children:["(",Object.entries(F.args).map(([bt,Ve])=>`${bt}=${JSON.stringify(Ve)}`).join(", "),")"]}),t!==null&&l.jsxs("span",{className:"watch-time-indicator",children:["@",t]})]}),l.jsxs("div",{className:"watch-item-actions",children:[l.jsx("button",{onClick:()=>R(F),title:"Edit watch",children:l.jsx(Kt,{size:10})}),l.jsx("button",{onClick:()=>N(F),title:"Refresh",children:F.isLoading?l.jsx(tn,{size:10,className:"spin"}):l.jsx(tn,{size:10})}),l.jsx("button",{onClick:()=>Q(F.id),title:"Remove",children:l.jsx(Oe,{size:10})})]})]}),l.jsx("div",{className:"watch-result",children:F.isLoading?l.jsx("span",{className:"loading",children:"Loading..."}):Z?l.jsx("span",{className:"error",children:Z}):Y?l.jsx("pre",{className:me?"error-text":"",children:de}):l.jsx("span",{className:"no-result",children:t!==null?"No data at this event":"Not yet run"})})]},F.id)})}),s&&l.jsx("div",{className:"watch-dialog-overlay",onClick:()=>c(!1),children:l.jsxs("div",{className:"watch-dialog",onClick:F=>F.stopPropagation(),children:[l.jsxs("div",{className:"dialog-header",children:[l.jsx("span",{children:u?"Edit Watch":"Add Tool Watch"}),l.jsx("button",{onClick:()=>c(!1),children:l.jsx(Yh,{size:14})})]}),l.jsxs("div",{className:"dialog-body",children:[l.jsxs("div",{className:"form-row",children:[l.jsx("label",{children:"MCP Server"}),l.jsxs("select",{value:k,onChange:F=>{E(F.target.value),u||h(""),F.target.value&&H(F.target.value)},children:[l.jsx("option",{value:"",children:"Select server..."}),D.map(F=>l.jsx("option",{value:F.name,children:F.name},F.name))]})]}),l.jsxs("div",{className:"form-row",children:[l.jsx("label",{children:"Tool"}),l.jsxs("select",{value:g,onChange:F=>h(F.target.value),disabled:!k||m.has(k),children:[l.jsx("option",{value:"",children:m.has(k)?"Loading tools...":"Select tool..."}),(p[k]||[]).map(F=>l.jsx("option",{value:F.name,children:F.name},F.name))]})]}),(I==null?void 0:I.description)&&l.jsx("div",{className:"tool-desc",children:I.description}),((J=I==null?void 0:I.parameters)==null?void 0:J.properties)&&Object.keys(I.parameters.properties).length>0&&l.jsxs("div",{className:"tool-args",children:[l.jsx("label",{children:"Arguments"}),Object.entries(I.parameters.properties).map(([F,Y])=>{var Z,le;return l.jsxs("div",{className:"arg-row",children:[l.jsxs("span",{className:"arg-name",children:[F,((Z=I.parameters.required)==null?void 0:Z.includes(F))&&l.jsx("span",{className:"required",children:"*"})]}),l.jsx("input",{type:Y.type==="number"||Y.type==="integer"?"number":"text",value:typeof y[F]=="object"?JSON.stringify(y[F]):y[F]??"",onChange:me=>P(de=>({...de,[F]:me.target.value})),placeholder:((le=Y.description)==null?void 0:le.slice(0,40))||F})]},F)})]}),k&&g&&l.jsxs("div",{className:"test-section",children:[l.jsxs("div",{className:"test-header",children:[l.jsx("label",{children:"Test & Preview"}),l.jsxs("button",{className:"test-btn",onClick:L,disabled:z,children:[z?l.jsx(tn,{size:12,className:"spin"}):l.jsx(Vn,{size:12}),z?"Running...":"Test Run"]})]}),x&&l.jsxs("div",{className:"test-result error",children:[l.jsx("span",{className:"test-label",children:"Error:"}),l.jsx("pre",{children:x})]}),B&&l.jsxs("div",{className:"test-result",children:[l.jsx("span",{className:"test-label",children:"Raw Result:"}),l.jsx("pre",{children:B})]})]}),l.jsxs("div",{className:"form-row transform-row",children:[l.jsx("label",{children:"Transform (optional)"}),l.jsx("input",{type:"text",value:C,onChange:F=>w(F.target.value),placeholder:"e.g., .items[0].name or .content[].text"}),l.jsxs("div",{className:"transform-hints",children:[l.jsx("span",{className:"hint-title",children:"jq:"}),l.jsx("code",{onClick:()=>w(".items[0].name"),children:".items[0].name"}),l.jsx("code",{onClick:()=>w(".content[].text"),children:".content[].text"}),l.jsx("code",{onClick:()=>w(".result.content[0].text"),children:".result.content[0].text"}),l.jsx("code",{onClick:()=>w('.[] | select(.status == "active")'),children:".[] | select()"}),l.jsx("span",{className:"hint-title",children:"JS:"}),l.jsx("code",{onClick:()=>w("js:value.split('\\n')[0]"),children:"js:value.split('\\n')[0]"}),l.jsx("code",{onClick:()=>w("js:data.length"),children:"js:data.length"})]})]}),B&&C&&l.jsxs("div",{className:"transform-preview",children:[l.jsx("span",{className:"test-label",children:"Transform Preview:"}),l.jsx("pre",{className:v!=null&&v.startsWith("[Transform error")?"error":"",children:v})]})]}),l.jsxs("div",{className:"dialog-footer",children:[l.jsx("button",{className:"cancel-btn",onClick:()=>c(!1),children:"Cancel"}),l.jsx("button",{className:"add-btn",onClick:V,disabled:!k||!g,children:u?"Save Changes":"Add Watch"})]})]})})]})}function p_(){var nr;const{project:e,isRunning:t,setIsRunning:n,runEvents:r,addRunEvent:i,clearRunEvents:o,clearWatchHistories:a,runAgentId:s,setRunAgentId:c,watches:u,updateWatch:d,currentSessionId:p,setCurrentSessionId:f}=vt(),[m,b]=_.useState(""),[k,E]=_.useState(null),[g,h]=_.useState(null),[y,P]=_.useState(null),[C,w]=_.useState(""),[T,O]=_.useState(new Set(["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_start","callback_end"])),[B,j]=_.useState(!0),[x,S]=_.useState(!0),[z,$]=_.useState(!1),[D,H]=_.useState(360),[A,R]=_.useState(!1),[L,v]=_.useState([]),[V,Q]=_.useState(null),[N,re]=_.useState(!1),I=_.useRef(0),J=_.useCallback(async(W,te)=>{if(!e)return;d(W.id,{isLoading:!0,error:void 0});const ie=te??r.length-1,se=Date.now();try{const M=await ye(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:W.serverName,tool_name:W.toolName,arguments:W.args})}),q={eventIndex:ie,timestamp:se,result:M},ne=[...W.history||[],q];d(W.id,{result:M,isLoading:!1,lastRun:se,history:ne})}catch(M){const q={eventIndex:ie,timestamp:se,error:String(M)},ne=[...W.history||[],q];d(W.id,{error:String(M),isLoading:!1,lastRun:se,history:ne})}},[e==null?void 0:e.id,d,r.length]);_.useEffect(()=>{if(r.length>I.current&&u.length>0){const W=r.length-1;u.forEach(te=>{te.isLoading||J(te,W)})}I.current=r.length},[r.length,u,J]),_.useEffect(()=>{s!==null&&(Y(s),c(null))},[s,c]);const[F,Y]=_.useState(null),Z=_.useRef(null),le=_.useRef(null);_.useEffect(()=>{if(!A)return;const W=ie=>{if(!le.current)return;const M=le.current.getBoundingClientRect().right-ie.clientX;H(Math.min(600,Math.max(200,M)))},te=()=>{R(!1)};return document.addEventListener("mousemove",W),document.addEventListener("mouseup",te),()=>{document.removeEventListener("mousemove",W),document.removeEventListener("mouseup",te)}},[A]);const me=_.useMemo(()=>r.length===0?{min:0,max:0}:{min:r[0].timestamp,max:r[r.length-1].timestamp},[r]),de=_.useMemo(()=>r.filter((W,te)=>{var ie,se,M;if(y&&(W.timestamp<y[0]||W.timestamp>y[1])||T.size>0&&!T.has(W.event_type))return!1;if(B&&W.event_type==="model_response"){const q=((se=(ie=W.data)==null?void 0:ie.response_content)==null?void 0:se.parts)||((M=W.data)==null?void 0:M.parts)||[],ne=q.some(he=>he.type==="function_call"),ce=q.some(he=>he.type==="text");if(!ne&&!ce)return!1}return!(C&&!JSON.stringify(W).toLowerCase().includes(C.toLowerCase()))}),[r,y,T,C,B]),Ze=_.useMemo(()=>{var se;let W=0,te=0;const ie=g!==null?g+1:r.length;for(let M=0;M<ie;M++){const q=r[M];q.event_type==="model_response"&&((se=q.data)!=null&&se.token_counts)&&(W+=q.data.token_counts.input||0,te+=q.data.token_counts.output||0)}return{input:W,output:te,total:W+te}},[r,g]),bt=g!==null?r[g]:null;_.useEffect(()=>{if(!e){v([]);return}(async()=>{re(!0);try{const te=await Es(e.id);v(te)}catch(te){console.error("Failed to load sessions:",te),v([])}finally{re(!1)}})()},[e]);const Ve=_.useCallback(async W=>{if(!e){Q(null);return}if(!W){o(),a(),f(null),Q(null),h(null),P(null);return}try{const te=await Th(e.id,W);o(),a(),f(te.id),Q(W),h(null),P(null);for(const ie of te.events)i(ie)}catch(te){alert(`Failed to load session: ${te.message||"Unknown error"}`)}},[e,o,a,f,i]);_.useEffect(()=>{t&&Z.current&&(Z.current.scrollTop=Z.current.scrollHeight)},[r.length,t]);const Ft=_.useCallback(()=>{if(!e||!m.trim()||t)return;k&&(k.close(),E(null)),p||(o(),a(),Q(null)),n(!0),h(null),P(null);const W=Ah(e.id);E(W),W.onopen=()=>{W.send(JSON.stringify({message:m,agent_id:F||void 0,session_id:p||void 0}))},W.onmessage=te=>{var se;const ie=JSON.parse(te.data);if(ie.event_type==="agent_start"&&((se=ie.data)!=null&&se.session_id)){const M=ie.data.session_id;ie.data.session_reused,f(M),M&&L.some(q=>q.id===M)&&Q(M)}else ie.type==="session_started"?(f(ie.session_id),ie.session_id&&L.some(M=>M.id===ie.session_id)&&Q(ie.session_id)):ie.type==="completed"?(n(!1),W.close()):ie.type==="error"?(n(!1),i({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:ie.error}})):i(ie)},W.onerror=()=>{n(!1),i({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:"WebSocket connection error"}})},W.onclose=()=>{n(!1)}},[e,m,t,k,o,n,i,F,p]),U=_.useCallback(()=>{k==null||k.close(),n(!1)},[k,n]);_.useEffect(()=>{const W=te=>{if((te.metaKey||te.ctrlKey)&&te.key==="Enter"){te.preventDefault(),Ft();return}if(te.key==="ArrowDown"||te.key==="ArrowUp"){if(te.target instanceof HTMLInputElement||te.target instanceof HTMLTextAreaElement||(te.preventDefault(),de.length===0))return;if(te.key==="ArrowDown")if(g===null){const ie=r.indexOf(de[0]);h(ie)}else{const ie=de.findIndex(se=>r.indexOf(se)===g);if(ie<de.length-1){const se=r.indexOf(de[ie+1]);h(se)}}else if(te.key==="ArrowUp")if(g===null){const ie=r.indexOf(de[de.length-1]);h(ie)}else{const ie=de.findIndex(se=>r.indexOf(se)===g);if(ie>0){const se=r.indexOf(de[ie-1]);h(se)}}}};return window.addEventListener("keydown",W),()=>window.removeEventListener("keydown",W)},[Ft,de,g,r]);const pe=_.useCallback(()=>{var M;if(r.length===0)return;const W={version:1,exportedAt:new Date().toISOString(),projectId:e==null?void 0:e.id,projectName:e==null?void 0:e.name,agentId:F||((M=e==null?void 0:e.app)==null?void 0:M.root_agent_id),events:r},te=new Blob([JSON.stringify(W,null,2)],{type:"application/json"}),ie=URL.createObjectURL(te),se=document.createElement("a");se.href=ie,se.download=`run-${(e==null?void 0:e.name)||"export"}-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,document.body.appendChild(se),se.click(),document.body.removeChild(se),URL.revokeObjectURL(ie)},[r,e,F]),_e=_.useCallback(async()=>{if(!p||!e){alert("No active session to save");return}try{const W=await zh(p);if(W.success){alert(W.message||"Session saved to memory successfully");try{const te=await Es(e.id);v(te)}catch{}}else alert(`Failed to save to memory: ${W.error||"Unknown error"}`)}catch(W){alert(`Error saving to memory: ${W.message||"Unknown error"}`)}},[p,e]),st=_.useCallback(()=>{const W=document.createElement("input");W.type="file",W.accept=".json",W.onchange=async te=>{var se;const ie=(se=te.target.files)==null?void 0:se[0];if(ie)try{const M=await ie.text(),q=JSON.parse(M);if(!q.events||!Array.isArray(q.events)){alert("Invalid run file: missing events array");return}o(),a(),h(null),P(null),q.events.forEach(ne=>{i(ne)})}catch(M){alert(`Failed to load run file: ${M}`)}},W.click()},[o,a,i]);return _.useEffect(()=>{if(g!==null){const W=document.querySelector(".event-row.selected");W==null||W.scrollIntoView({behavior:"smooth",block:"nearest"})}},[g]),e?l.jsxs("div",{className:`run-panel ${A?"resizing":""}`,children:[l.jsx("style",{children:`
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
      `}),l.jsxs("div",{className:"input-area",children:[l.jsxs("select",{className:"agent-selector",value:F||"",onChange:W=>Y(W.target.value||null),disabled:t,title:"Select which agent to run",children:[l.jsx("option",{value:"",children:e.app.root_agent_id?`Root: ${((nr=e.agents.find(W=>W.id===e.app.root_agent_id))==null?void 0:nr.name)||e.app.root_agent_id}`:"No root agent"}),e.agents.filter(W=>W.id!==e.app.root_agent_id).map(W=>l.jsxs("option",{value:W.id,children:[W.name," (",W.type.replace("Agent",""),")"]},W.id))]}),l.jsxs("select",{className:"agent-selector",value:V||"",onChange:W=>Ve(W.target.value||null),disabled:t||N,style:{minWidth:180},title:"Load a saved session",children:[l.jsx("option",{value:"",children:N?"Loading...":"Load Session..."}),L.map(W=>{const te=new Date(W.started_at*1e3),ie=W.duration?`${W.duration.toFixed(1)}s`:"?";return l.jsxs("option",{value:W.id,children:[te.toLocaleString()," (",W.event_count," events, ",ie,")"]},W.id)})]}),l.jsx("input",{type:"text",placeholder:"Enter your query...",value:m,onChange:W=>b(W.target.value),onKeyDown:W=>W.key==="Enter"&&!W.shiftKey&&Ft(),disabled:t}),t?l.jsxs("button",{className:"stop",onClick:U,children:[l.jsx(c0,{size:14}),"Stop"]}):l.jsxs("button",{onClick:Ft,disabled:!m.trim(),children:[l.jsx(Vn,{size:14}),"Run"]})]}),l.jsxs("div",{className:"toolbar",children:[l.jsxs("div",{className:"toolbar-section",children:[l.jsx(Qh,{size:12,style:{color:"#71717a"}}),l.jsx("input",{type:"text",placeholder:"Filter events...",value:C,onChange:W=>w(W.target.value)})]}),l.jsx("div",{className:"toolbar-divider"}),l.jsxs("div",{className:"toolbar-section",children:[["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change"].map(W=>l.jsx("button",{className:`filter-chip ${T.has(W)?"active":""}`,onClick:()=>{const te=new Set(T);te.has(W)?te.delete(W):te.add(W),O(te)},children:W.replace("_"," ")},W)),l.jsx("button",{className:`filter-chip ${T.has("callback_start")&&T.has("callback_end")?"active":""}`,onClick:()=>{const W=new Set(T);W.has("callback_start")&&W.has("callback_end")?(W.delete("callback_start"),W.delete("callback_end")):(W.add("callback_start"),W.add("callback_end")),O(W)},title:"Show/hide callback events",children:"callback"}),l.jsx("button",{className:`filter-chip ${B?"active":""}`,onClick:()=>j(!B),title:"Hide LLM_RESP (complete) events",children:"hide (complete)"})]}),l.jsx("div",{className:"toolbar-divider"}),l.jsxs("div",{className:"toolbar-section",children:[l.jsxs("button",{className:`toolbar-btn ${x?"active":""}`,onClick:()=>S(!x),children:[l.jsx(rn,{size:12}),"State"]}),l.jsxs("button",{className:`toolbar-btn ${z?"active":""}`,onClick:()=>$(!z),children:[l.jsx(Vd,{size:12}),"Tools"]})]}),l.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:[l.jsxs("span",{style:{fontSize:10,color:"#71717a"},children:[de.length," / ",r.length," events"]}),y&&l.jsx("button",{className:"toolbar-btn",onClick:()=>P(null),children:"Clear Range"})]})]}),l.jsxs("div",{className:"main-content",ref:le,children:[l.jsxs("div",{className:"event-list-container",children:[l.jsxs("div",{className:"event-list-header",children:[l.jsx("div",{children:"#"}),l.jsx("div",{children:"Time"}),l.jsx("div",{children:"Agent"}),l.jsx("div",{children:"Type"}),l.jsx("div",{children:"Info"})]}),l.jsx("div",{className:"event-list",ref:Z,children:de.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx(Kh,{size:24}),l.jsx("span",{children:r.length===0?"No events yet":"No matching events"})]}):de.map((W,te)=>{const ie=r.indexOf(W),se=Hp[W.event_type]||Hp.error,M=o_[W.event_type]||Gh;return l.jsxs("div",{className:`event-row ${g===ie?"selected":""}`,style:{background:se.bg},onClick:()=>h(ie),onDoubleClick:()=>{S(!1),$(!1)},children:[l.jsx("div",{className:"index",children:ie}),l.jsx("div",{className:"time",style:{color:se.fg},children:a_(W.timestamp,me.min)}),l.jsx("div",{className:"agent",style:{color:se.fg},children:W.agent_name}),l.jsxs("div",{className:"type",style:{color:se.fg},children:[l.jsx(M,{size:10}),W.event_type.split("_")[0]]}),l.jsx("div",{className:"summary",children:l_(W)})]},ie)})})]}),l.jsxs("div",{className:"side-panel-container",style:{width:D},children:[l.jsx("div",{className:`resize-handle ${A?"active":""}`,onMouseDown:()=>R(!0)}),l.jsxs("div",{className:"side-panel",style:{width:D-4},children:[l.jsxs("div",{className:"side-panel-tabs",children:[l.jsxs("button",{className:`side-panel-tab ${!x&&!z?"active":""}`,onClick:()=>{S(!1),$(!1)},children:[l.jsx(Ui,{size:12,style:{marginRight:4}}),"Details"]}),l.jsxs("button",{className:`side-panel-tab ${x?"active":""}`,onClick:()=>{S(!0),$(!1)},children:[l.jsx(rn,{size:12,style:{marginRight:4}}),"State"]}),l.jsxs("button",{className:`side-panel-tab ${z?"active":""}`,onClick:()=>{$(!0),S(!1)},children:[l.jsx(Vd,{size:12,style:{marginRight:4}}),"Tools"]})]}),l.jsx("div",{className:"side-panel-content",children:z?l.jsx(d_,{project:e,selectedEventIndex:g}):x?l.jsx(u_,{events:r,selectedEventIndex:g,project:e}):bt?l.jsx(s_,{event:bt}):l.jsxs("div",{className:"empty-state",children:[l.jsx(Ui,{size:24}),l.jsx("span",{children:"Select an event to view details"})]})})]})]})]}),l.jsxs("div",{className:"stats-bar",children:[l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{children:"Events:"}),l.jsx("span",{className:"stat-value",children:r.length})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{children:"Tool Calls:"}),l.jsx("span",{className:"stat-value",children:r.filter(W=>W.event_type==="tool_call").length})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{children:"Model Calls:"}),l.jsx("span",{className:"stat-value",children:r.filter(W=>W.event_type==="model_call").length})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{children:"Callbacks:"}),l.jsx("span",{className:"stat-value",children:r.filter(W=>W.event_type==="callback_start").length})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{children:"State Changes:"}),l.jsx("span",{className:"stat-value",children:r.filter(W=>W.event_type==="state_change").length})]}),r.length>0&&l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{children:"Duration:"}),l.jsxs("span",{className:"stat-value",children:[((r[r.length-1].timestamp-r[0].timestamp)*1e3).toFixed(0),"ms"]})]}),Ze.total>0&&l.jsx("div",{className:"stat-item token-stats",children:l.jsxs("span",{className:"stat-value token-value",children:[l.jsxs("span",{className:"token-in",title:"Input tokens",children:[Ze.input.toLocaleString(),"↑"]}),l.jsxs("span",{className:"token-out",title:"Output tokens",children:[Ze.output.toLocaleString(),"↓"]}),l.jsx("span",{className:"token-total",title:"Total tokens",children:Ze.total.toLocaleString()})]})}),l.jsx("div",{className:"stats-bar-spacer"}),l.jsxs("button",{className:"stats-bar-btn",onClick:st,title:"Load a saved run",children:[l.jsx(Xc,{size:12}),"Load"]}),l.jsxs("button",{className:"stats-bar-btn",onClick:pe,disabled:r.length===0,title:"Save current run to file",children:[l.jsx(Gc,{size:12}),"Save"]}),l.jsxs("button",{className:"stats-bar-btn",onClick:_e,disabled:!p||r.length===0,title:"Save current session to memory",children:[l.jsx(rn,{size:12}),"Save to Memory"]})]})]}):l.jsx("div",{className:"run-panel empty",children:"No project loaded"})}const f_=()=>Math.random().toString(36).substring(2,10),m_=()=>({id:f_(),name:"New SkillSet",description:"",embedding_model:void 0,app_model_id:void 0,external_store_type:void 0,external_store_config:{},search_enabled:!0,preload_enabled:!0,preload_top_k:3,preload_min_score:.4,sources:[],entry_count:0});function h_(){const{project:e,setProject:t}=vt(),[n,r]=_.useState(null),[i,o]=_.useState(null),[a,s]=_.useState(""),[c,u]=_.useState([]),[d,p]=_.useState(!1),[f,m]=_.useState(!1),[b,k]=_.useState(""),[E,g]=_.useState(!1),[h,y]=_.useState(null),[P,C]=_.useState(null),w=_.useRef(null),T=(e==null?void 0:e.skillsets)||[],O=T.find(L=>L.id===n);_.useEffect(()=>{Wh().then(L=>C(L.available)).catch(()=>C(!1))},[]),_.useEffect(()=>{T.length>0&&!n&&r(T[0].id)},[T,n]),_.useEffect(()=>{!e||!n||B()},[e==null?void 0:e.id,n]);const B=_.useCallback(async()=>{if(!(!e||!n))try{const L=await Fh(e.id,n);o(L),x(n,{entry_count:L.entry_count})}catch(L){console.error("Failed to load stats:",L)}},[e==null?void 0:e.id,n]),j=L=>{e&&t({...e,...L})},x=(L,v)=>{e&&t({...e,skillsets:e.skillsets.map(V=>V.id===L?{...V,...v}:V)})},S=()=>{if(!e)return;const L=m_();j({skillsets:[...T,L]}),r(L.id)},z=L=>{e&&confirm("Delete this SkillSet and all its data?")&&(j({skillsets:T.filter(v=>v.id!==L)}),n===L&&r(T.length>1?T[0].id:null),o(null),u([]))},$=async()=>{if(!(!e||!n||!a.trim())){p(!0),y(null);try{const L=await Uh(e.id,n,a.trim(),10,0);u(L.results)}catch(L){y("Search failed"),console.error(L)}finally{p(!1)}}},D=async()=>{if(!(!e||!n||!b.trim())){g(!0),y(null);try{const L=await $h(e.id,n,b.trim());k(""),await B(),alert(`Added ${L.chunks_added} chunks from ${L.source_name}`)}catch(L){y(L.message||"Failed to fetch URL")}finally{g(!1)}}},H=async L=>{var V;const v=(V=L.target.files)==null?void 0:V[0];if(!(!v||!e||!n)){y(null);try{const Q=await Bh(e.id,n,v);await B(),alert(`Added ${Q.chunks_added} chunks from ${Q.source_name}`)}catch(Q){y(Q.message||"Upload failed")}w.current&&(w.current.value="")}},A=async()=>{if(!(!e||!n)&&confirm("Delete all entries in this SkillSet?"))try{await Vh(e.id,n),await B(),u([])}catch{y("Clear failed")}},R=L=>{const v=Math.round(L*100),V=160,Q=70,N=20+(1-L)*15,re=.15+L*.25;return`linear-gradient(90deg, hsla(${V}, ${Q}%, ${N}%, ${re}) 0%, transparent ${v}%)`};return e?l.jsxs("div",{className:"skillsets-panel",children:[l.jsx("style",{children:`
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
        
        .btn-primary {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          background: var(--accent);
          border: none;
          border-radius: 6px;
          color: var(--bg-primary);
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s;
        }
        
        .btn-primary:hover {
          opacity: 0.9;
        }
        
        .btn-primary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
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
      `}),l.jsxs("div",{className:"skillset-list",children:[l.jsxs("div",{className:"skillset-list-header",children:[l.jsx("h3",{children:"SkillSets"}),l.jsx("button",{className:"btn-icon",onClick:S,title:"Add SkillSet",children:l.jsx($e,{size:16})})]}),T.length===0?l.jsxs("div",{className:"empty-state",style:{padding:"40px 0"},children:[l.jsx(rn,{size:32}),l.jsx("span",{children:"No SkillSets"}),l.jsxs("button",{className:"btn-primary",onClick:S,children:[l.jsx($e,{size:14})," Create SkillSet"]})]}):T.map(L=>l.jsxs("div",{className:`skillset-item ${n===L.id?"selected":""}`,onClick:()=>r(L.id),children:[l.jsx(rn,{size:16,style:{color:"var(--accent)",flexShrink:0}}),l.jsxs("div",{className:"skillset-item-info",children:[l.jsx("div",{className:"skillset-item-name",children:L.name}),l.jsxs("div",{className:"skillset-item-count",children:[L.entry_count||0," entries"]})]}),l.jsx("button",{className:"skillset-item-delete",onClick:v=>{v.stopPropagation(),z(L.id)},children:l.jsx(Oe,{size:14})})]},L.id))]}),O?l.jsxs("div",{className:"skillset-detail",children:[l.jsxs("div",{className:"skillset-header",children:[l.jsxs("div",{className:"skillset-header-info",children:[l.jsx("input",{className:"skillset-name-input",value:O.name,onChange:L=>x(O.id,{name:L.target.value}),placeholder:"SkillSet Name"}),l.jsx("textarea",{className:"skillset-desc-input",value:O.description,onChange:L=>x(O.id,{description:L.target.value}),placeholder:"Description (optional)",rows:1}),l.jsxs("div",{className:"skillset-model",children:[l.jsx("label",{style:{fontSize:"12px",color:"var(--text-secondary)",marginRight:"8px"},children:"Embedding Model:"}),l.jsxs("select",{style:{flex:1,padding:"4px 8px",fontSize:"12px",background:"var(--bg-secondary)",border:"1px solid var(--border)",borderRadius:"4px",color:"var(--text-primary)"},value:O.embedding_model||"text-embedding-004",onChange:L=>x(O.id,{embedding_model:L.target.value}),children:[l.jsxs("optgroup",{label:"Google Gemini",children:[l.jsx("option",{value:"text-embedding-004",children:"text-embedding-004 (768d)"}),l.jsx("option",{value:"text-embedding-005",children:"text-embedding-005"})]}),l.jsxs("optgroup",{label:"OpenAI",children:[l.jsx("option",{value:"text-embedding-3-small",children:"text-embedding-3-small (1536d)"}),l.jsx("option",{value:"text-embedding-3-large",children:"text-embedding-3-large (3072d)"})]}),l.jsxs("optgroup",{label:"Cohere",children:[l.jsx("option",{value:"embed-english-v3.0",children:"embed-english-v3.0 (1024d)"}),l.jsx("option",{value:"embed-multilingual-v3.0",children:"embed-multilingual-v3.0 (1024d)"})]})]})]}),l.jsxs("div",{className:"skillset-stats",children:[l.jsxs("span",{className:"skillset-stat",children:[l.jsx("strong",{children:(i==null?void 0:i.entry_count)||0})," entries"]}),l.jsxs("span",{className:"skillset-stat",children:[l.jsx("strong",{children:Object.keys((i==null?void 0:i.sources)||{}).length})," sources"]}),P===!1&&l.jsx("span",{className:"skillset-stat",style:{color:"var(--warning)"},children:"⚠ No embeddings"})]})]}),l.jsx("button",{className:"btn-icon",onClick:B,title:"Refresh",children:l.jsx(tn,{size:16})})]}),h&&l.jsxs("div",{className:"error-banner",children:[h,l.jsx("button",{onClick:()=>y(null),children:l.jsx(Yh,{size:14})})]}),l.jsxs("div",{className:"search-section",children:[l.jsx("div",{className:"search-input-wrapper",children:l.jsx("input",{className:"search-input",value:a,onChange:L=>s(L.target.value),onKeyDown:L=>L.key==="Enter"&&$(),placeholder:"Search this SkillSet..."})}),l.jsxs("button",{className:"btn-primary",onClick:$,disabled:d||!a.trim(),children:[l.jsx(Qh,{size:14}),d?"Searching...":"Search"]})]}),l.jsxs("div",{className:"search-results",children:[c.length===0&&!d&&a&&l.jsx("div",{className:"empty-state",children:l.jsx("span",{children:"No results found"})}),c.map(L=>l.jsxs("div",{className:"search-result",style:{background:R(L.score)},children:[l.jsxs("span",{className:"search-result-score",children:[(L.score*100).toFixed(0),"%"]}),l.jsx("div",{className:"search-result-text",children:L.text}),l.jsx("div",{className:"search-result-source",children:L.source_name})]},L.id))]}),l.jsxs("div",{className:"add-sources-section",children:[l.jsxs("div",{className:"add-sources-header",onClick:()=>m(!f),children:[f?l.jsx(kt,{size:16}):l.jsx(wt,{size:16}),l.jsx("h4",{children:"Add Sources"})]}),f&&l.jsxs("div",{className:"add-sources-content",children:[l.jsxs("div",{className:"source-row",children:[l.jsx(Ls,{size:16,style:{color:"var(--text-tertiary)"}}),l.jsx("input",{className:"source-input",value:b,onChange:L=>k(L.target.value),onKeyDown:L=>L.key==="Enter"&&D(),placeholder:"Enter URL (e.g., llms.txt file)"}),l.jsxs("button",{className:"btn-primary",onClick:D,disabled:E||!b.trim(),children:[l.jsx(i0,{size:14}),E?"Loading...":"Add"]})]}),l.jsxs("div",{className:"source-row",children:[l.jsx(n0,{size:16,style:{color:"var(--text-tertiary)"}}),l.jsx("input",{ref:w,type:"file",accept:".txt,.md,.json,.csv,.html",onChange:H}),l.jsxs("button",{className:"btn-primary",onClick:()=>{var L;return(L=w.current)==null?void 0:L.click()},children:[l.jsx(Xc,{size:14}),"Upload File"]}),l.jsx("span",{style:{fontSize:"12px",color:"var(--text-tertiary)"},children:".txt, .md, .json, .csv"})]}),((i==null?void 0:i.entry_count)||0)>0&&l.jsx("div",{className:"source-row",style:{marginTop:"8px"},children:l.jsxs("button",{className:"clear-button",onClick:A,children:[l.jsx(Oe,{size:12}),"Clear All Entries (",(i==null?void 0:i.entry_count)||0,")"]})})]})]})]}):T.length>0?l.jsx("div",{className:"skillset-detail",children:l.jsxs("div",{className:"empty-state",children:[l.jsx(rn,{size:48}),l.jsx("span",{children:"Select a SkillSet"})]})}):null]}):null}function Kp(){return`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`}function g_(){const{project:e}=vt(),[t,n]=_.useState([{id:"root",name:"All Tests",description:"Root test group",tests:[],children:[]}]),[r,i]=_.useState("root"),[o,a]=_.useState(null),[s,c]=_.useState(new Map),[u,d]=_.useState(new Set),[p,f]=_.useState(new Set(["root"]));if(!e)return null;function m(j,x){for(const S of j){if(S.id===x)return S;const z=m(S.children,x);if(z)return z}return null}function b(j,x,S){return j.map(z=>z.id===x?{...z,...S}:{...z,children:b(z.children,x,S)})}const k=m(t,r),E=k==null?void 0:k.tests.find(j=>j.id===o);function g(j){const x=new Set(p);x.has(j)?x.delete(j):x.add(j),f(x)}function h(j){const x={id:Kp(),name:"New Group",description:"",tests:[],children:[]};n(S=>{var z,$;return j==="root"&&((z=S[0])==null?void 0:z.id)==="root"?[{...S[0],children:[...S[0].children,x]}]:b(S,j,{children:[...(($=m(S,j))==null?void 0:$.children)||[],x]})}),i(x.id),f(S=>new Set([...S,j]))}function y(j){const x={id:Kp(),name:"New Test",description:"",input_message:"",expected_tool_calls:[],expected_state:{}};n(S=>{const z=m(S,j);return z?b(S,j,{tests:[...z.tests,x]}):S}),a(x.id)}function P(j,x,S){n(z=>{const $=m(z,j);return $?b(z,j,{tests:$.tests.map(D=>D.id===x?{...D,...S}:D)}):z})}function C(j,x){n(S=>{const z=m(S,j);return z?b(S,j,{tests:z.tests.filter($=>$.id!==x)}):S}),o===x&&a(null)}async function w(j){d($=>new Set([...$,j.id]));const x=Date.now();await new Promise($=>setTimeout($,1e3+Math.random()*2e3));const S=Math.random()>.3,z={test_id:j.id,passed:S,duration_ms:Date.now()-x,error:S?void 0:"Expected output did not match"};c($=>new Map($).set(j.id,z)),d($=>{const D=new Set($);return D.delete(j.id),D})}async function T(j){for(const x of j.tests)await w(x);for(const x of j.children)await T(x)}function O(j){let x=0,S=0,z=0;function $(D){for(const H of D.tests){x++;const A=s.get(H.id);A&&(A.passed?S++:z++)}for(const H of D.children)$(H)}return $(j),{total:x,passed:S,failed:z,pending:x-S-z}}function B(j,x=0){return j.map(S=>{const z=p.has(S.id),$=O(S),D=S.tests.length>0||S.children.length>0;return l.jsxs("div",{className:"test-tree-item",children:[l.jsxs("div",{className:`tree-group ${r===S.id?"selected":""}`,style:{paddingLeft:8+x*16},onClick:()=>i(S.id),children:[l.jsx("button",{className:"expand-btn",onClick:H=>{H.stopPropagation(),g(S.id)},children:D?z?l.jsx(kt,{size:14}):l.jsx(wt,{size:14}):l.jsx("span",{style:{width:14}})}),l.jsx($d,{size:14,style:{color:"var(--accent-secondary)"}}),l.jsx("span",{className:"group-name",children:S.name}),$.total>0&&l.jsxs("span",{className:"group-stats",children:[$.passed>0&&l.jsx("span",{className:"stat-passed",children:$.passed}),$.failed>0&&l.jsx("span",{className:"stat-failed",children:$.failed}),$.pending>0&&l.jsx("span",{className:"stat-pending",children:$.pending})]}),l.jsx("button",{className:"run-btn",onClick:H=>{H.stopPropagation(),T(S)},title:"Run all tests in this group",children:l.jsx(Vn,{size:12})})]}),z&&l.jsxs("div",{className:"tree-children",children:[S.tests.map(H=>{const A=s.get(H.id),R=u.has(H.id);return l.jsxs("div",{className:`tree-test ${o===H.id?"selected":""}`,style:{paddingLeft:24+x*16},onClick:()=>{i(S.id),a(H.id)},children:[R?l.jsx(Z1,{size:14,className:"spinning",style:{color:"var(--warning)"}}):A?A.passed?l.jsx(Fd,{size:14,style:{color:"var(--success)"}}):l.jsx(Wd,{size:14,style:{color:"var(--error)"}}):l.jsx(fa,{size:14,style:{color:"var(--text-muted)"}}),l.jsx("span",{className:"test-name",children:H.name}),l.jsx("button",{className:"run-btn",onClick:L=>{L.stopPropagation(),w(H)},disabled:R,children:l.jsx(Vn,{size:12})})]},H.id)}),B(S.children,x+1)]})]},S.id)})}return l.jsxs("div",{className:"eval-panel",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("aside",{className:"eval-sidebar",children:[l.jsxs("div",{className:"sidebar-header",children:[l.jsx("h3",{children:"Evaluation Tests"}),l.jsxs("div",{className:"header-actions",children:[l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>h(r),title:"Add test group",children:l.jsx($d,{size:14})}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>y(r),title:"Add test",children:[l.jsx($e,{size:14}),"Test"]})]})]}),l.jsx("div",{className:"test-tree",children:B(t)})]}),l.jsx("div",{className:"test-editor",children:E?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"editor-header",children:[l.jsx(fa,{size:20,style:{color:"var(--accent-primary)"}}),l.jsx("input",{type:"text",value:E.name,onChange:j=>P(r,E.id,{name:j.target.value}),placeholder:"Test name"}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>w(E),disabled:u.has(E.id),children:[l.jsx(Vn,{size:14}),"Run"]}),l.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>C(r,E.id),children:l.jsx(Oe,{size:14})})]}),l.jsxs("div",{className:"editor-content",children:[l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Description"}),l.jsx("textarea",{value:E.description,onChange:j=>P(r,E.id,{description:j.target.value}),placeholder:"What does this test verify?",style:{minHeight:40}})]}),l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Input Message"}),l.jsx("textarea",{value:E.input_message,onChange:j=>P(r,E.id,{input_message:j.target.value}),placeholder:"The message to send to the agent..."})]}),l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Expected Output (optional)"}),l.jsx("textarea",{value:E.expected_output||"",onChange:j=>P(r,E.id,{expected_output:j.target.value||void 0}),placeholder:"Expected text in the response (partial match)..."})]}),l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Expected Tool Calls"}),l.jsx("textarea",{value:E.expected_tool_calls.join(`
`),onChange:j=>P(r,E.id,{expected_tool_calls:j.target.value.split(`
`).filter(Boolean)}),placeholder:"Tool names (one per line)...",style:{minHeight:60}})]}),l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Expected State (JSON)"}),l.jsx("textarea",{value:JSON.stringify(E.expected_state,null,2),onChange:j=>{try{const x=JSON.parse(j.target.value);P(r,E.id,{expected_state:x})}catch{}},placeholder:'{"key": "value"}'})]})]}),s.has(E.id)&&l.jsxs("div",{className:"result-panel",children:[l.jsxs("div",{className:`result-header ${s.get(E.id).passed?"passed":"failed"}`,children:[s.get(E.id).passed?l.jsxs(l.Fragment,{children:[l.jsx(Fd,{size:18}),l.jsx("strong",{children:"Passed"})]}):l.jsxs(l.Fragment,{children:[l.jsx(Wd,{size:18}),l.jsx("strong",{children:"Failed"})]}),l.jsxs("span",{style:{marginLeft:"auto",color:"var(--text-muted)",fontSize:12},children:[s.get(E.id).duration_ms,"ms"]})]}),s.get(E.id).error&&l.jsx("div",{className:"result-error",children:s.get(E.id).error})]})]}):k?l.jsxs("div",{className:"editor-content",children:[l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Group Name"}),l.jsx("input",{type:"text",value:k.name,onChange:j=>n(x=>b(x,k.id,{name:j.target.value}))})]}),l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Description"}),l.jsx("textarea",{value:k.description,onChange:j=>n(x=>b(x,k.id,{description:j.target.value})),placeholder:"Description of this test group..."})]}),l.jsx("div",{style:{marginTop:20},children:l.jsxs("button",{className:"btn btn-primary",onClick:()=>T(k),children:[l.jsx(Vn,{size:16}),"Run All Tests in Group"]})})]}):l.jsxs("div",{className:"empty-state",children:[l.jsx(fa,{size:48}),l.jsxs("p",{children:["Select a test to edit",l.jsx("br",{}),"or create a new one"]})]})})]})}function x_(){const{project:e,setProject:t}=vt(),[n,r]=_.useState(""),[i,o]=_.useState(!0),[a,s]=_.useState(!1),[c,u]=_.useState(null),[d,p]=_.useState(!1);if(!e)return null;_.useEffect(()=>{f()},[e.id]);async function f(){o(!0),u(null);try{const h=await Ph(e.id);r(h),s(!1)}catch(h){u(h.message)}finally{o(!1)}}function m(h){h!==void 0&&(r(h),s(!0),u(null))}async function b(){o(!0),u(null);try{const h=await Lh(e.id,n);t(h),s(!1)}catch(h){u(h.message)}finally{o(!1)}}function k(){navigator.clipboard.writeText(n),p(!0),setTimeout(()=>p(!1),2e3)}function E(){const h=new Blob([n],{type:"text/yaml"}),y=URL.createObjectURL(h),P=document.createElement("a");P.href=y,P.download=`${e.name}.yaml`,P.click(),URL.revokeObjectURL(y)}function g(){const h=document.createElement("input");h.type="file",h.accept=".yaml,.yml",h.onchange=async y=>{var w;const P=(w=y.target.files)==null?void 0:w[0];if(!P)return;const C=await P.text();r(C),s(!0)},h.click()}return l.jsxs("div",{className:"yaml-panel",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("div",{className:"yaml-header",children:[l.jsxs("div",{className:"yaml-title",children:[l.jsx("h3",{children:"Project Configuration"}),a&&l.jsxs("span",{className:"status-badge warning",children:[l.jsx(Ts,{size:12}),"Unsaved changes"]}),c&&l.jsxs("span",{className:"status-badge error",children:[l.jsx(Ts,{size:12}),c]}),d&&l.jsxs("span",{className:"status-badge success",children:[l.jsx(Hh,{size:12}),"Copied!"]})]}),l.jsxs("div",{className:"yaml-actions",children:[l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:k,title:"Copy to clipboard",children:[l.jsx(qh,{size:14}),"Copy"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:E,title:"Download YAML",children:[l.jsx(Gc,{size:14}),"Download"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:g,title:"Upload YAML",children:[l.jsx(Xc,{size:14}),"Upload"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:f,title:"Reload from server",children:[l.jsx(tn,{size:14}),"Reload"]}),l.jsx("button",{className:"btn btn-primary btn-sm",onClick:b,disabled:!a||i,children:"Apply Changes"})]})]}),l.jsx("div",{className:"yaml-editor",children:l.jsx(Dr,{height:"100%",language:"yaml",theme:"vs-dark",value:n,onChange:m,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),l.jsxs("div",{className:"yaml-info",children:[l.jsx("p",{children:"This YAML represents your entire project configuration including the app, agents, tools, and state keys."}),l.jsxs("p",{children:["You can edit the YAML directly, then click ",l.jsx("code",{children:"Apply Changes"})," to update the project. Use ",l.jsx("code",{children:"Download"})," to save a backup or ",l.jsx("code",{children:"Upload"})," to import a configuration."]})]})]})}function y_(){const{project:e}=vt(),[t,n]=_.useState(!1),[r,i]=_.useState(""),[o,a]=_.useState(!1),[s,c]=_.useState(null);if(_.useEffect(()=>{if(!e){i("");return}let f=!1;async function m(){a(!0),c(null);try{const b=await zs(e.id);f||i(b)}catch(b){f||(c(b instanceof Error?b.message:"Failed to generate code"),i("# Error generating code. See error message above."))}finally{f||a(!1)}}return m(),()=>{f=!0}},[e]),!e)return null;function u(){navigator.clipboard.writeText(r),n(!0),setTimeout(()=>n(!1),2e3)}function d(){const f=new Blob([r],{type:"text/x-python"}),m=URL.createObjectURL(f),b=document.createElement("a");b.href=m,b.download=`${e.name}_agent.py`,b.click(),URL.revokeObjectURL(m)}async function p(){a(!0),c(null);try{const f=await zs(e.id);i(f)}catch(f){c(f instanceof Error?f.message:"Failed to generate code")}finally{a(!1)}}return l.jsxs("div",{className:"code-panel",children:[l.jsx("style",{children:`
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
        
        .status-badge.loading {
          background: rgba(167, 139, 250, 0.15);
          color: var(--accent-primary);
        }
        
        .status-badge.error {
          background: rgba(255, 100, 100, 0.15);
          color: #ff6464;
        }
        
        .spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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
      `}),l.jsxs("div",{className:"code-header",children:[l.jsxs("div",{className:"code-title",children:[l.jsx(Tn,{size:16}),l.jsx("h3",{children:"Python Code"}),l.jsx("span",{className:"badge",children:"Generated"}),o&&l.jsxs("span",{className:"status-badge loading",children:[l.jsx(tn,{size:12,className:"spin"}),"Loading..."]}),t&&l.jsxs("span",{className:"status-badge success",children:[l.jsx(Hh,{size:12}),"Copied!"]}),s&&l.jsxs("span",{className:"status-badge error",title:s,children:[l.jsx(Ts,{size:12}),"Error"]})]}),l.jsxs("div",{className:"code-actions",children:[l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:p,title:"Refresh code",disabled:o,children:l.jsx(tn,{size:14,className:o?"spin":""})}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:u,title:"Copy to clipboard",disabled:o||!!s,children:[l.jsx(qh,{size:14}),"Copy"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:d,title:"Download Python file",disabled:o||!!s,children:[l.jsx(Gc,{size:14}),"Download"]})]})]}),l.jsx("div",{className:"code-editor",children:l.jsx(Dr,{height:"100%",language:"python",theme:"vs-dark",value:r,options:{readOnly:!0,minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),l.jsxs("div",{className:"code-info",children:[l.jsxs("p",{children:[l.jsx("strong",{children:"This is the exact code that the runtime executes."}),"All callbacks and tools are included inline."]}),l.jsxs("p",{children:["To run this code yourself, save it as ",l.jsx("code",{children:"agent.py"})," in a directory, then run: ",l.jsx("code",{children:"adk run ."})," or ",l.jsx("code",{children:"adk web ."})]}),l.jsxs("p",{children:["For custom storage, use CLI options: ",l.jsx("code",{children:"adk run . --session_service_uri sqlite://./sessions.db"})]})]})]})}const v_=[{id:"app",label:"App",icon:s0},{id:"agents",label:"Agents",icon:Kn},{id:"tools",label:"Tools",icon:Kt},{id:"callbacks",label:"Callbacks",icon:Tn},{id:"run",label:"Run",icon:Kh},{id:"skillsets",label:"SkillSets",icon:X1},{id:"eval",label:"Evaluate",icon:u0},{id:"yaml",label:"YAML",icon:t0},{id:"code",label:"Code",icon:Tn}],b_=["app","agents","tools","callbacks","run","skillsets","eval","yaml","code"];function Pa(){const{projectId:e,tab:t,itemId:n}=e1(),r=Hc(),{project:i,setProject:o,activeTab:a,setActiveTab:s,hasUnsavedChanges:c,setHasUnsavedChanges:u,selectedAgentId:d,setSelectedAgentId:p,selectedToolId:f,setSelectedToolId:m}=vt(),[b,k]=_.useState(!0),[E,g]=_.useState(!1),h=_.useRef(!0),y=_.useRef(null);_.useEffect(()=>{t&&b_.includes(t)?s(t):!t&&e&&r(`/project/${e}/${a}`,{replace:!0})},[t,e]),_.useEffect(()=>{t==="agents"&&n?p(n):t==="tools"&&n&&m(n)},[t,n]);function P(j){s(j),j==="agents"&&d?r(`/project/${e}/${j}/${d}`,{replace:!0}):j==="tools"&&f?r(`/project/${e}/${j}/${f}`,{replace:!0}):r(`/project/${e}/${j}`,{replace:!0})}function C(j){j?r(`/project/${e}/${a}/${j}`,{replace:!0}):r(`/project/${e}/${a}`,{replace:!0})}_.useEffect(()=>(e&&w(e),()=>{o(null),u(!1)}),[e]);async function w(j){h.current=!0;try{const x=await Ch(j);o(x),y.current=JSON.stringify(x),u(!1)}catch(x){console.error("Failed to load project:",x),r("/")}finally{k(!1),setTimeout(()=>{h.current=!1},100)}}async function T(){if(i){g(!0);try{await Ns(i.id,i),y.current=JSON.stringify(i),u(!1)}catch(j){console.error("Failed to save project:",j)}finally{g(!1)}}}const O=_.useRef(null);_.useEffect(()=>{if(i&&!h.current&&O.current){const j=i.app.models||[],x=O.current||[];if(j.some((z,$)=>{const D=x.find(H=>H.id===z.id);return D?D.provider!==z.provider||D.model_name!==z.model_name||D.api_base!==z.api_base||D.temperature!==z.temperature||D.max_output_tokens!==z.max_output_tokens||D.top_p!==z.top_p||D.top_k!==z.top_k:!1})){const z=i.app.default_model_id,$=i.agents.map(H=>{if(H.type==="LlmAgent"&&H.model){const A=H.model._appModelId;if(A){const R=j.find(L=>L.id===A);if(R)return{...H,model:{provider:R.provider,model_name:R.model_name,api_base:R.api_base,temperature:R.temperature,max_output_tokens:R.max_output_tokens,top_p:R.top_p,top_k:R.top_k,fallbacks:[],_appModelId:A}}}else if(z){const R=j.find(L=>L.id===z);if(R&&H.model.provider===R.provider&&H.model.model_name===R.model_name&&H.model.api_base===R.api_base)return{...H,model:{provider:R.provider,model_name:R.model_name,api_base:R.api_base,temperature:R.temperature,max_output_tokens:R.max_output_tokens,top_p:R.top_p,top_k:R.top_k,fallbacks:[],_appModelId:z}}}}return H});$.some((H,A)=>JSON.stringify(H)!==JSON.stringify(i.agents[A]))&&o({...i,agents:$})}}i&&(O.current=i.app.models||[])},[i==null?void 0:i.app.models,i,o]);const B=_.useRef(null);return _.useEffect(()=>(i&&!h.current&&y.current&&JSON.stringify(i)!==y.current&&(u(!0),B.current&&clearTimeout(B.current),B.current=setTimeout(async()=>{try{await Ns(i.id,i),y.current=JSON.stringify(i),u(!1)}catch(x){console.error("Auto-save failed:",x)}},500)),()=>{B.current&&clearTimeout(B.current)}),[i]),b?l.jsxs("div",{className:"loading-screen",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("header",{className:"top-bar",children:[l.jsxs("div",{className:"top-bar-left",children:[l.jsxs("button",{className:"back-btn",onClick:()=>r("/"),children:[l.jsx(Y1,{size:18}),"Project"]}),l.jsx("h1",{className:"project-name",children:i.name})]}),l.jsx("nav",{className:"tabs-bar",children:v_.map(j=>l.jsxs("button",{className:`tab-btn ${a===j.id?"active":""}`,onClick:()=>P(j.id),children:[l.jsx(j.icon,{size:14}),j.label]},j.id))}),l.jsx("div",{className:"top-bar-right",children:l.jsxs("button",{className:"btn btn-primary",onClick:T,disabled:E,children:[l.jsx(Jc,{size:16}),E?"Saving...":"Save"]})})]}),l.jsxs("main",{className:"main-content",children:[a==="app"&&l.jsx(g0,{}),a==="agents"&&l.jsx(wS,{onSelectAgent:C}),a==="tools"&&l.jsx(n_,{onSelectTool:C}),a==="callbacks"&&l.jsx(i_,{onSelectCallback:C}),a==="run"&&l.jsx(p_,{}),a==="skillsets"&&l.jsx(h_,{}),a==="eval"&&l.jsx(g_,{}),a==="yaml"&&l.jsx(x_,{}),a==="code"&&l.jsx(y_,{})]})]}):null}function k_(){const{setMcpServers:e,setBuiltinTools:t}=vt();return _.useEffect(()=>{qc().then(e).catch(console.error),Ih().then(t).catch(console.error)},[e,t]),l.jsxs(x1,{children:[l.jsx(ar,{path:"/",element:l.jsx(f0,{})}),l.jsx(ar,{path:"/project/:projectId",element:l.jsx(Pa,{})}),l.jsx(ar,{path:"/project/:projectId/:tab",element:l.jsx(Pa,{})}),l.jsx(ar,{path:"/project/:projectId/:tab/:itemId",element:l.jsx(Pa,{})}),l.jsx(ar,{path:"*",element:l.jsx(h1,{to:"/",replace:!0})})]})}La.createRoot(document.getElementById("root")).render(l.jsx(Nt.StrictMode,{children:l.jsx(b1,{children:l.jsx(k_,{})})}));export{ml as a,w_ as g};
