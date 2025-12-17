function h0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var ga=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function nl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vg={exports:{}},rl={},bg={exports:{}},Me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rs=Symbol.for("react.element"),m0=Symbol.for("react.portal"),g0=Symbol.for("react.fragment"),x0=Symbol.for("react.strict_mode"),y0=Symbol.for("react.profiler"),v0=Symbol.for("react.provider"),b0=Symbol.for("react.context"),w0=Symbol.for("react.forward_ref"),k0=Symbol.for("react.suspense"),j0=Symbol.for("react.memo"),_0=Symbol.for("react.lazy"),mf=Symbol.iterator;function S0(e){return e===null||typeof e!="object"?null:(e=mf&&e[mf]||e["@@iterator"],typeof e=="function"?e:null)}var wg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kg=Object.assign,jg={};function Pi(e,t,n){this.props=e,this.context=t,this.refs=jg,this.updater=n||wg}Pi.prototype.isReactComponent={};Pi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Pi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _g(){}_g.prototype=Pi.prototype;function nd(e,t,n){this.props=e,this.context=t,this.refs=jg,this.updater=n||wg}var rd=nd.prototype=new _g;rd.constructor=nd;kg(rd,Pi.prototype);rd.isPureReactComponent=!0;var gf=Array.isArray,Sg=Object.prototype.hasOwnProperty,id={current:null},Cg={key:!0,ref:!0,__self:!0,__source:!0};function Ng(e,t,n){var r,i={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)Sg.call(t,r)&&!Cg.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:rs,type:e,key:s,ref:a,props:i,_owner:id.current}}function C0(e,t){return{$$typeof:rs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function od(e){return typeof e=="object"&&e!==null&&e.$$typeof===rs}function N0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var xf=/\/+/g;function Ol(e,t){return typeof e=="object"&&e!==null&&e.key!=null?N0(""+e.key):t.toString(36)}function Ys(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case rs:case m0:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Ol(a,0):r,gf(i)?(n="",e!=null&&(n=e.replace(xf,"$&/")+"/"),Ys(i,t,n,"",function(u){return u})):i!=null&&(od(i)&&(i=C0(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(xf,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",gf(e))for(var l=0;l<e.length;l++){s=e[l];var c=r+Ol(s,l);a+=Ys(s,t,n,c,i)}else if(c=S0(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=r+Ol(s,l++),a+=Ys(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ws(e,t,n){if(e==null)return e;var r=[],i=0;return Ys(e,r,"","",function(s){return t.call(n,s,i++)}),r}function E0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var St={current:null},Qs={transition:null},z0={ReactCurrentDispatcher:St,ReactCurrentBatchConfig:Qs,ReactCurrentOwner:id};function Eg(){throw Error("act(...) is not supported in production builds of React.")}Me.Children={map:ws,forEach:function(e,t,n){ws(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ws(e,function(){t++}),t},toArray:function(e){return ws(e,function(t){return t})||[]},only:function(e){if(!od(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Me.Component=Pi;Me.Fragment=g0;Me.Profiler=y0;Me.PureComponent=nd;Me.StrictMode=x0;Me.Suspense=k0;Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z0;Me.act=Eg;Me.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=kg({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=id.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Sg.call(t,c)&&!Cg.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:rs,type:e.type,key:i,ref:s,props:r,_owner:a}};Me.createContext=function(e){return e={$$typeof:b0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:v0,_context:e},e.Consumer=e};Me.createElement=Ng;Me.createFactory=function(e){var t=Ng.bind(null,e);return t.type=e,t};Me.createRef=function(){return{current:null}};Me.forwardRef=function(e){return{$$typeof:w0,render:e}};Me.isValidElement=od;Me.lazy=function(e){return{$$typeof:_0,_payload:{_status:-1,_result:e},_init:E0}};Me.memo=function(e,t){return{$$typeof:j0,type:e,compare:t===void 0?null:t}};Me.startTransition=function(e){var t=Qs.transition;Qs.transition={};try{e()}finally{Qs.transition=t}};Me.unstable_act=Eg;Me.useCallback=function(e,t){return St.current.useCallback(e,t)};Me.useContext=function(e){return St.current.useContext(e)};Me.useDebugValue=function(){};Me.useDeferredValue=function(e){return St.current.useDeferredValue(e)};Me.useEffect=function(e,t){return St.current.useEffect(e,t)};Me.useId=function(){return St.current.useId()};Me.useImperativeHandle=function(e,t,n){return St.current.useImperativeHandle(e,t,n)};Me.useInsertionEffect=function(e,t){return St.current.useInsertionEffect(e,t)};Me.useLayoutEffect=function(e,t){return St.current.useLayoutEffect(e,t)};Me.useMemo=function(e,t){return St.current.useMemo(e,t)};Me.useReducer=function(e,t,n){return St.current.useReducer(e,t,n)};Me.useRef=function(e){return St.current.useRef(e)};Me.useState=function(e){return St.current.useState(e)};Me.useSyncExternalStore=function(e,t,n){return St.current.useSyncExternalStore(e,t,n)};Me.useTransition=function(){return St.current.useTransition()};Me.version="18.3.1";bg.exports=Me;var k=bg.exports;const qt=nl(k),T0=h0({__proto__:null,default:qt},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0=k,M0=Symbol.for("react.element"),L0=Symbol.for("react.fragment"),P0=Object.prototype.hasOwnProperty,R0=A0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I0={key:!0,ref:!0,__self:!0,__source:!0};function zg(e,t,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)P0.call(t,r)&&!I0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:M0,type:e,key:s,ref:a,props:i,_owner:R0.current}}rl.Fragment=L0;rl.jsx=zg;rl.jsxs=zg;vg.exports=rl;var o=vg.exports,Rc={},Tg={exports:{}},Yt={},Ag={exports:{}},Mg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,P){var w=R.length;R.push(P);e:for(;0<w;){var W=w-1>>>1,H=R[W];if(0<i(H,P))R[W]=P,R[w]=H,w=W;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var P=R[0],w=R.pop();if(w!==P){R[0]=w;e:for(var W=0,H=R.length,y=H>>>1;W<y;){var N=2*(W+1)-1,$=R[N],ne=N+1,de=R[ne];if(0>i($,w))ne<H&&0>i(de,$)?(R[W]=de,R[ne]=w,W=ne):(R[W]=$,R[N]=w,W=N);else if(ne<H&&0>i(de,w))R[W]=de,R[ne]=w,W=ne;else break e}}return P}function i(R,P){var w=R.sortIndex-P.sortIndex;return w!==0?w:R.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,f=null,p=3,h=!1,m=!1,b=!1,j=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(R){for(var P=n(u);P!==null;){if(P.callback===null)r(u);else if(P.startTime<=R)r(u),P.sortIndex=P.expirationTime,t(c,P);else break;P=n(u)}}function _(R){if(b=!1,v(R),!m)if(n(c)!==null)m=!0,M(T);else{var P=n(u);P!==null&&S(_,P.startTime-R)}}function T(R,P){m=!1,b&&(b=!1,g(E),E=-1),h=!0;var w=p;try{for(v(P),f=n(c);f!==null&&(!(f.expirationTime>P)||R&&!I());){var W=f.callback;if(typeof W=="function"){f.callback=null,p=f.priorityLevel;var H=W(f.expirationTime<=P);P=e.unstable_now(),typeof H=="function"?f.callback=H:f===n(c)&&r(c),v(P)}else r(c);f=n(c)}if(f!==null)var y=!0;else{var N=n(u);N!==null&&S(_,N.startTime-P),y=!1}return y}finally{f=null,p=w,h=!1}}var C=!1,L=null,E=-1,U=5,z=-1;function I(){return!(e.unstable_now()-z<U)}function q(){if(L!==null){var R=e.unstable_now();z=R;var P=!0;try{P=L(!0,R)}finally{P?G():(C=!1,L=null)}}else C=!1}var G;if(typeof x=="function")G=function(){x(q)};else if(typeof MessageChannel<"u"){var A=new MessageChannel,O=A.port2;A.port1.onmessage=q,G=function(){O.postMessage(null)}}else G=function(){j(q,0)};function M(R){L=R,C||(C=!0,G())}function S(R,P){E=j(function(){R(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){m||h||(m=!0,M(T))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(R){switch(p){case 1:case 2:case 3:var P=3;break;default:P=p}var w=p;p=P;try{return R()}finally{p=w}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,P){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var w=p;p=R;try{return P()}finally{p=w}},e.unstable_scheduleCallback=function(R,P,w){var W=e.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?W+w:W):w=W,R){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=w+H,R={id:d++,callback:P,priorityLevel:R,startTime:w,expirationTime:H,sortIndex:-1},w>W?(R.sortIndex=w,t(u,R),n(c)===null&&R===n(u)&&(b?(g(E),E=-1):b=!0,S(_,w-W))):(R.sortIndex=H,t(c,R),m||h||(m=!0,M(T))),R},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(R){var P=p;return function(){var w=p;p=P;try{return R.apply(this,arguments)}finally{p=w}}}})(Mg);Ag.exports=Mg;var O0=Ag.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0=k,Kt=O0;function ce(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lg=new Set,To={};function Hr(e,t){ki(e,t),ki(e+"Capture",t)}function ki(e,t){for(To[e]=t,e=0;e<t.length;e++)Lg.add(t[e])}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ic=Object.prototype.hasOwnProperty,D0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yf={},vf={};function F0(e){return Ic.call(vf,e)?!0:Ic.call(yf,e)?!1:D0.test(e)?vf[e]=!0:(yf[e]=!0,!1)}function B0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function U0(e,t,n,r){if(t===null||typeof t>"u"||B0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ct(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pt[e]=new Ct(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pt[t]=new Ct(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pt[e]=new Ct(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pt[e]=new Ct(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pt[e]=new Ct(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pt[e]=new Ct(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pt[e]=new Ct(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pt[e]=new Ct(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pt[e]=new Ct(e,5,!1,e.toLowerCase(),null,!1,!1)});var sd=/[\-:]([a-z])/g;function ad(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(sd,ad);pt[t]=new Ct(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(sd,ad);pt[t]=new Ct(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(sd,ad);pt[t]=new Ct(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pt[e]=new Ct(e,1,!1,e.toLowerCase(),null,!1,!1)});pt.xlinkHref=new Ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pt[e]=new Ct(e,1,!1,e.toLowerCase(),null,!0,!0)});function ld(e,t,n,r){var i=pt.hasOwnProperty(t)?pt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(U0(t,n,i,r)&&(n=null),r||i===null?F0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Jn=$0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ks=Symbol.for("react.element"),Zr=Symbol.for("react.portal"),ei=Symbol.for("react.fragment"),cd=Symbol.for("react.strict_mode"),Oc=Symbol.for("react.profiler"),Pg=Symbol.for("react.provider"),Rg=Symbol.for("react.context"),ud=Symbol.for("react.forward_ref"),$c=Symbol.for("react.suspense"),Dc=Symbol.for("react.suspense_list"),dd=Symbol.for("react.memo"),Yn=Symbol.for("react.lazy"),Ig=Symbol.for("react.offscreen"),bf=Symbol.iterator;function qi(e){return e===null||typeof e!="object"?null:(e=bf&&e[bf]||e["@@iterator"],typeof e=="function"?e:null)}var Ye=Object.assign,$l;function ao(e){if($l===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);$l=t&&t[1]||""}return`
`+$l+e}var Dl=!1;function Fl(e,t){if(!e||Dl)return"";Dl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{Dl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ao(e):""}function W0(e){switch(e.tag){case 5:return ao(e.type);case 16:return ao("Lazy");case 13:return ao("Suspense");case 19:return ao("SuspenseList");case 0:case 2:case 15:return e=Fl(e.type,!1),e;case 11:return e=Fl(e.type.render,!1),e;case 1:return e=Fl(e.type,!0),e;default:return""}}function Fc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ei:return"Fragment";case Zr:return"Portal";case Oc:return"Profiler";case cd:return"StrictMode";case $c:return"Suspense";case Dc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rg:return(e.displayName||"Context")+".Consumer";case Pg:return(e._context.displayName||"Context")+".Provider";case ud:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case dd:return t=e.displayName||null,t!==null?t:Fc(e.type)||"Memo";case Yn:t=e._payload,e=e._init;try{return Fc(e(t))}catch{}}return null}function V0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fc(t);case 8:return t===cd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Og(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function H0(e){var t=Og(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function js(e){e._valueTracker||(e._valueTracker=H0(e))}function $g(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Og(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Bc(e,t){var n=t.checked;return Ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function wf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Dg(e,t){t=t.checked,t!=null&&ld(e,"checked",t,!1)}function Uc(e,t){Dg(e,t);var n=mr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Wc(e,t.type,n):t.hasOwnProperty("defaultValue")&&Wc(e,t.type,mr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function kf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Wc(e,t,n){(t!=="number"||xa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var lo=Array.isArray;function pi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Vc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(ce(91));return Ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function jf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(ce(92));if(lo(n)){if(1<n.length)throw Error(ce(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mr(n)}}function Fg(e,t){var n=mr(t.value),r=mr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function _f(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _s,Ug=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_s=_s||document.createElement("div"),_s.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_s.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ao(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var go={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},q0=["Webkit","ms","Moz","O"];Object.keys(go).forEach(function(e){q0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),go[t]=go[e]})});function Wg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||go.hasOwnProperty(e)&&go[e]?(""+t).trim():t+"px"}function Vg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Wg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var J0=Ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qc(e,t){if(t){if(J0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(ce(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(ce(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(ce(61))}if(t.style!=null&&typeof t.style!="object")throw Error(ce(62))}}function Jc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kc=null;function pd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gc=null,fi=null,hi=null;function Sf(e){if(e=ss(e)){if(typeof Gc!="function")throw Error(ce(280));var t=e.stateNode;t&&(t=ll(t),Gc(e.stateNode,e.type,t))}}function Hg(e){fi?hi?hi.push(e):hi=[e]:fi=e}function qg(){if(fi){var e=fi,t=hi;if(hi=fi=null,Sf(e),t)for(e=0;e<t.length;e++)Sf(t[e])}}function Jg(e,t){return e(t)}function Kg(){}var Bl=!1;function Gg(e,t,n){if(Bl)return e(t,n);Bl=!0;try{return Jg(e,t,n)}finally{Bl=!1,(fi!==null||hi!==null)&&(Kg(),qg())}}function Mo(e,t){var n=e.stateNode;if(n===null)return null;var r=ll(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(ce(231,t,typeof n));return n}var Yc=!1;if(Bn)try{var Ji={};Object.defineProperty(Ji,"passive",{get:function(){Yc=!0}}),window.addEventListener("test",Ji,Ji),window.removeEventListener("test",Ji,Ji)}catch{Yc=!1}function K0(e,t,n,r,i,s,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var xo=!1,ya=null,va=!1,Qc=null,G0={onError:function(e){xo=!0,ya=e}};function Y0(e,t,n,r,i,s,a,l,c){xo=!1,ya=null,K0.apply(G0,arguments)}function Q0(e,t,n,r,i,s,a,l,c){if(Y0.apply(this,arguments),xo){if(xo){var u=ya;xo=!1,ya=null}else throw Error(ce(198));va||(va=!0,Qc=u)}}function qr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Yg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cf(e){if(qr(e)!==e)throw Error(ce(188))}function X0(e){var t=e.alternate;if(!t){if(t=qr(e),t===null)throw Error(ce(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Cf(i),e;if(s===r)return Cf(i),t;s=s.sibling}throw Error(ce(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(ce(189))}}if(n.alternate!==r)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?e:t}function Qg(e){return e=X0(e),e!==null?Xg(e):null}function Xg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xg(e);if(t!==null)return t;e=e.sibling}return null}var Zg=Kt.unstable_scheduleCallback,Nf=Kt.unstable_cancelCallback,Z0=Kt.unstable_shouldYield,eb=Kt.unstable_requestPaint,Ze=Kt.unstable_now,tb=Kt.unstable_getCurrentPriorityLevel,fd=Kt.unstable_ImmediatePriority,ex=Kt.unstable_UserBlockingPriority,ba=Kt.unstable_NormalPriority,nb=Kt.unstable_LowPriority,tx=Kt.unstable_IdlePriority,il=null,Sn=null;function rb(e){if(Sn&&typeof Sn.onCommitFiberRoot=="function")try{Sn.onCommitFiberRoot(il,e,void 0,(e.current.flags&128)===128)}catch{}}var hn=Math.clz32?Math.clz32:sb,ib=Math.log,ob=Math.LN2;function sb(e){return e>>>=0,e===0?32:31-(ib(e)/ob|0)|0}var Ss=64,Cs=4194304;function co(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function wa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=co(l):(s&=a,s!==0&&(r=co(s)))}else a=n&~i,a!==0?r=co(a):s!==0&&(r=co(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-hn(t),i=1<<n,r|=e[n],t&=~i;return r}function ab(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lb(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-hn(s),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=ab(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function Xc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nx(){var e=Ss;return Ss<<=1,!(Ss&4194240)&&(Ss=64),e}function Ul(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function is(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-hn(t),e[t]=n}function cb(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-hn(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function hd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-hn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var $e=0;function rx(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ix,md,ox,sx,ax,Zc=!1,Ns=[],sr=null,ar=null,lr=null,Lo=new Map,Po=new Map,Zn=[],ub="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ef(e,t){switch(e){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":Lo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(t.pointerId)}}function Ki(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ss(t),t!==null&&md(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function db(e,t,n,r,i){switch(t){case"focusin":return sr=Ki(sr,e,t,n,r,i),!0;case"dragenter":return ar=Ki(ar,e,t,n,r,i),!0;case"mouseover":return lr=Ki(lr,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Lo.set(s,Ki(Lo.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Po.set(s,Ki(Po.get(s)||null,e,t,n,r,i)),!0}return!1}function lx(e){var t=Er(e.target);if(t!==null){var n=qr(t);if(n!==null){if(t=n.tag,t===13){if(t=Yg(n),t!==null){e.blockedOn=t,ax(e.priority,function(){ox(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=eu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Kc=r,n.target.dispatchEvent(r),Kc=null}else return t=ss(n),t!==null&&md(t),e.blockedOn=n,!1;t.shift()}return!0}function zf(e,t,n){Xs(e)&&n.delete(t)}function pb(){Zc=!1,sr!==null&&Xs(sr)&&(sr=null),ar!==null&&Xs(ar)&&(ar=null),lr!==null&&Xs(lr)&&(lr=null),Lo.forEach(zf),Po.forEach(zf)}function Gi(e,t){e.blockedOn===t&&(e.blockedOn=null,Zc||(Zc=!0,Kt.unstable_scheduleCallback(Kt.unstable_NormalPriority,pb)))}function Ro(e){function t(i){return Gi(i,e)}if(0<Ns.length){Gi(Ns[0],e);for(var n=1;n<Ns.length;n++){var r=Ns[n];r.blockedOn===e&&(r.blockedOn=null)}}for(sr!==null&&Gi(sr,e),ar!==null&&Gi(ar,e),lr!==null&&Gi(lr,e),Lo.forEach(t),Po.forEach(t),n=0;n<Zn.length;n++)r=Zn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Zn.length&&(n=Zn[0],n.blockedOn===null);)lx(n),n.blockedOn===null&&Zn.shift()}var mi=Jn.ReactCurrentBatchConfig,ka=!0;function fb(e,t,n,r){var i=$e,s=mi.transition;mi.transition=null;try{$e=1,gd(e,t,n,r)}finally{$e=i,mi.transition=s}}function hb(e,t,n,r){var i=$e,s=mi.transition;mi.transition=null;try{$e=4,gd(e,t,n,r)}finally{$e=i,mi.transition=s}}function gd(e,t,n,r){if(ka){var i=eu(e,t,n,r);if(i===null)Xl(e,t,r,ja,n),Ef(e,r);else if(db(i,e,t,n,r))r.stopPropagation();else if(Ef(e,r),t&4&&-1<ub.indexOf(e)){for(;i!==null;){var s=ss(i);if(s!==null&&ix(s),s=eu(e,t,n,r),s===null&&Xl(e,t,r,ja,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Xl(e,t,r,null,n)}}var ja=null;function eu(e,t,n,r){if(ja=null,e=pd(r),e=Er(e),e!==null)if(t=qr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Yg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ja=e,null}function cx(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tb()){case fd:return 1;case ex:return 4;case ba:case nb:return 16;case tx:return 536870912;default:return 16}default:return 16}}var tr=null,xd=null,Zs=null;function ux(){if(Zs)return Zs;var e,t=xd,n=t.length,r,i="value"in tr?tr.value:tr.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return Zs=i.slice(e,1<r?1-r:void 0)}function ea(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Es(){return!0}function Tf(){return!1}function Qt(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Es:Tf,this.isPropagationStopped=Tf,this}return Ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Es)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Es)},persist:function(){},isPersistent:Es}),t}var Ri={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yd=Qt(Ri),os=Ye({},Ri,{view:0,detail:0}),mb=Qt(os),Wl,Vl,Yi,ol=Ye({},os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yi&&(Yi&&e.type==="mousemove"?(Wl=e.screenX-Yi.screenX,Vl=e.screenY-Yi.screenY):Vl=Wl=0,Yi=e),Wl)},movementY:function(e){return"movementY"in e?e.movementY:Vl}}),Af=Qt(ol),gb=Ye({},ol,{dataTransfer:0}),xb=Qt(gb),yb=Ye({},os,{relatedTarget:0}),Hl=Qt(yb),vb=Ye({},Ri,{animationName:0,elapsedTime:0,pseudoElement:0}),bb=Qt(vb),wb=Ye({},Ri,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kb=Qt(wb),jb=Ye({},Ri,{data:0}),Mf=Qt(jb),_b={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cb[e])?!!t[e]:!1}function vd(){return Nb}var Eb=Ye({},os,{key:function(e){if(e.key){var t=_b[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ea(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vd,charCode:function(e){return e.type==="keypress"?ea(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ea(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zb=Qt(Eb),Tb=Ye({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lf=Qt(Tb),Ab=Ye({},os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vd}),Mb=Qt(Ab),Lb=Ye({},Ri,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pb=Qt(Lb),Rb=Ye({},ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ib=Qt(Rb),Ob=[9,13,27,32],bd=Bn&&"CompositionEvent"in window,yo=null;Bn&&"documentMode"in document&&(yo=document.documentMode);var $b=Bn&&"TextEvent"in window&&!yo,dx=Bn&&(!bd||yo&&8<yo&&11>=yo),Pf=" ",Rf=!1;function px(e,t){switch(e){case"keyup":return Ob.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ti=!1;function Db(e,t){switch(e){case"compositionend":return fx(t);case"keypress":return t.which!==32?null:(Rf=!0,Pf);case"textInput":return e=t.data,e===Pf&&Rf?null:e;default:return null}}function Fb(e,t){if(ti)return e==="compositionend"||!bd&&px(e,t)?(e=ux(),Zs=xd=tr=null,ti=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return dx&&t.locale!=="ko"?null:t.data;default:return null}}var Bb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function If(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bb[e.type]:t==="textarea"}function hx(e,t,n,r){Hg(r),t=_a(t,"onChange"),0<t.length&&(n=new yd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vo=null,Io=null;function Ub(e){Sx(e,0)}function sl(e){var t=ii(e);if($g(t))return e}function Wb(e,t){if(e==="change")return t}var mx=!1;if(Bn){var ql;if(Bn){var Jl="oninput"in document;if(!Jl){var Of=document.createElement("div");Of.setAttribute("oninput","return;"),Jl=typeof Of.oninput=="function"}ql=Jl}else ql=!1;mx=ql&&(!document.documentMode||9<document.documentMode)}function $f(){vo&&(vo.detachEvent("onpropertychange",gx),Io=vo=null)}function gx(e){if(e.propertyName==="value"&&sl(Io)){var t=[];hx(t,Io,e,pd(e)),Gg(Ub,t)}}function Vb(e,t,n){e==="focusin"?($f(),vo=t,Io=n,vo.attachEvent("onpropertychange",gx)):e==="focusout"&&$f()}function Hb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sl(Io)}function qb(e,t){if(e==="click")return sl(t)}function Jb(e,t){if(e==="input"||e==="change")return sl(t)}function Kb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xn=typeof Object.is=="function"?Object.is:Kb;function Oo(e,t){if(xn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ic.call(t,i)||!xn(e[i],t[i]))return!1}return!0}function Df(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ff(e,t){var n=Df(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Df(n)}}function xx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yx(){for(var e=window,t=xa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xa(e.document)}return t}function wd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gb(e){var t=yx(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&xx(n.ownerDocument.documentElement,n)){if(r!==null&&wd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Ff(n,s);var a=Ff(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yb=Bn&&"documentMode"in document&&11>=document.documentMode,ni=null,tu=null,bo=null,nu=!1;function Bf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nu||ni==null||ni!==xa(r)||(r=ni,"selectionStart"in r&&wd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bo&&Oo(bo,r)||(bo=r,r=_a(tu,"onSelect"),0<r.length&&(t=new yd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ni)))}function zs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ri={animationend:zs("Animation","AnimationEnd"),animationiteration:zs("Animation","AnimationIteration"),animationstart:zs("Animation","AnimationStart"),transitionend:zs("Transition","TransitionEnd")},Kl={},vx={};Bn&&(vx=document.createElement("div").style,"AnimationEvent"in window||(delete ri.animationend.animation,delete ri.animationiteration.animation,delete ri.animationstart.animation),"TransitionEvent"in window||delete ri.transitionend.transition);function al(e){if(Kl[e])return Kl[e];if(!ri[e])return e;var t=ri[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vx)return Kl[e]=t[n];return e}var bx=al("animationend"),wx=al("animationiteration"),kx=al("animationstart"),jx=al("transitionend"),_x=new Map,Uf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(e,t){_x.set(e,t),Hr(t,[e])}for(var Gl=0;Gl<Uf.length;Gl++){var Yl=Uf[Gl],Qb=Yl.toLowerCase(),Xb=Yl[0].toUpperCase()+Yl.slice(1);vr(Qb,"on"+Xb)}vr(bx,"onAnimationEnd");vr(wx,"onAnimationIteration");vr(kx,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(jx,"onTransitionEnd");ki("onMouseEnter",["mouseout","mouseover"]);ki("onMouseLeave",["mouseout","mouseover"]);ki("onPointerEnter",["pointerout","pointerover"]);ki("onPointerLeave",["pointerout","pointerover"]);Hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zb=new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));function Wf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Q0(r,t,void 0,e),e.currentTarget=null}function Sx(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;Wf(i,l,u),s=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;Wf(i,l,u),s=c}}}if(va)throw e=Qc,va=!1,Qc=null,e}function Ve(e,t){var n=t[au];n===void 0&&(n=t[au]=new Set);var r=e+"__bubble";n.has(r)||(Cx(t,e,2,!1),n.add(r))}function Ql(e,t,n){var r=0;t&&(r|=4),Cx(n,e,r,t)}var Ts="_reactListening"+Math.random().toString(36).slice(2);function $o(e){if(!e[Ts]){e[Ts]=!0,Lg.forEach(function(n){n!=="selectionchange"&&(Zb.has(n)||Ql(n,!1,e),Ql(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ts]||(t[Ts]=!0,Ql("selectionchange",!1,t))}}function Cx(e,t,n,r){switch(cx(t)){case 1:var i=fb;break;case 4:i=hb;break;default:i=gd}n=i.bind(null,t,n,e),i=void 0,!Yc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Xl(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Er(l),a===null)return;if(c=a.tag,c===5||c===6){r=s=a;continue e}l=l.parentNode}}r=r.return}Gg(function(){var u=s,d=pd(n),f=[];e:{var p=_x.get(e);if(p!==void 0){var h=yd,m=e;switch(e){case"keypress":if(ea(n)===0)break e;case"keydown":case"keyup":h=zb;break;case"focusin":m="focus",h=Hl;break;case"focusout":m="blur",h=Hl;break;case"beforeblur":case"afterblur":h=Hl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Af;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=xb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Mb;break;case bx:case wx:case kx:h=bb;break;case jx:h=Pb;break;case"scroll":h=mb;break;case"wheel":h=Ib;break;case"copy":case"cut":case"paste":h=kb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Lf}var b=(t&4)!==0,j=!b&&e==="scroll",g=b?p!==null?p+"Capture":null:p;b=[];for(var x=u,v;x!==null;){v=x;var _=v.stateNode;if(v.tag===5&&_!==null&&(v=_,g!==null&&(_=Mo(x,g),_!=null&&b.push(Do(x,_,v)))),j)break;x=x.return}0<b.length&&(p=new h(p,m,null,n,d),f.push({event:p,listeners:b}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==Kc&&(m=n.relatedTarget||n.fromElement)&&(Er(m)||m[Un]))break e;if((h||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=u,m=m?Er(m):null,m!==null&&(j=qr(m),m!==j||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=u),h!==m)){if(b=Af,_="onMouseLeave",g="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(b=Lf,_="onPointerLeave",g="onPointerEnter",x="pointer"),j=h==null?p:ii(h),v=m==null?p:ii(m),p=new b(_,x+"leave",h,n,d),p.target=j,p.relatedTarget=v,_=null,Er(d)===u&&(b=new b(g,x+"enter",m,n,d),b.target=v,b.relatedTarget=j,_=b),j=_,h&&m)t:{for(b=h,g=m,x=0,v=b;v;v=Gr(v))x++;for(v=0,_=g;_;_=Gr(_))v++;for(;0<x-v;)b=Gr(b),x--;for(;0<v-x;)g=Gr(g),v--;for(;x--;){if(b===g||g!==null&&b===g.alternate)break t;b=Gr(b),g=Gr(g)}b=null}else b=null;h!==null&&Vf(f,p,h,b,!1),m!==null&&j!==null&&Vf(f,j,m,b,!0)}}e:{if(p=u?ii(u):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var T=Wb;else if(If(p))if(mx)T=Jb;else{T=Hb;var C=Vb}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(T=qb);if(T&&(T=T(e,u))){hx(f,T,n,d);break e}C&&C(e,p,u),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&Wc(p,"number",p.value)}switch(C=u?ii(u):window,e){case"focusin":(If(C)||C.contentEditable==="true")&&(ni=C,tu=u,bo=null);break;case"focusout":bo=tu=ni=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,Bf(f,n,d);break;case"selectionchange":if(Yb)break;case"keydown":case"keyup":Bf(f,n,d)}var L;if(bd)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else ti?px(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(dx&&n.locale!=="ko"&&(ti||E!=="onCompositionStart"?E==="onCompositionEnd"&&ti&&(L=ux()):(tr=d,xd="value"in tr?tr.value:tr.textContent,ti=!0)),C=_a(u,E),0<C.length&&(E=new Mf(E,e,null,n,d),f.push({event:E,listeners:C}),L?E.data=L:(L=fx(n),L!==null&&(E.data=L)))),(L=$b?Db(e,n):Fb(e,n))&&(u=_a(u,"onBeforeInput"),0<u.length&&(d=new Mf("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=L))}Sx(f,t)})}function Do(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _a(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Mo(e,n),s!=null&&r.unshift(Do(e,s,i)),s=Mo(e,t),s!=null&&r.push(Do(e,s,i))),e=e.return}return r}function Gr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vf(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Mo(n,s),c!=null&&a.unshift(Do(n,c,l))):i||(c=Mo(n,s),c!=null&&a.push(Do(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var ew=/\r\n?/g,tw=/\u0000|\uFFFD/g;function Hf(e){return(typeof e=="string"?e:""+e).replace(ew,`
`).replace(tw,"")}function As(e,t,n){if(t=Hf(t),Hf(e)!==t&&n)throw Error(ce(425))}function Sa(){}var ru=null,iu=null;function ou(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var su=typeof setTimeout=="function"?setTimeout:void 0,nw=typeof clearTimeout=="function"?clearTimeout:void 0,qf=typeof Promise=="function"?Promise:void 0,rw=typeof queueMicrotask=="function"?queueMicrotask:typeof qf<"u"?function(e){return qf.resolve(null).then(e).catch(iw)}:su;function iw(e){setTimeout(function(){throw e})}function Zl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ro(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ro(t)}function cr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Jf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ii=Math.random().toString(36).slice(2),kn="__reactFiber$"+Ii,Fo="__reactProps$"+Ii,Un="__reactContainer$"+Ii,au="__reactEvents$"+Ii,ow="__reactListeners$"+Ii,sw="__reactHandles$"+Ii;function Er(e){var t=e[kn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Un]||n[kn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Jf(e);e!==null;){if(n=e[kn])return n;e=Jf(e)}return t}e=n,n=e.parentNode}return null}function ss(e){return e=e[kn]||e[Un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ii(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(ce(33))}function ll(e){return e[Fo]||null}var lu=[],oi=-1;function br(e){return{current:e}}function He(e){0>oi||(e.current=lu[oi],lu[oi]=null,oi--)}function Ue(e,t){oi++,lu[oi]=e.current,e.current=t}var gr={},xt=br(gr),Lt=br(!1),$r=gr;function ji(e,t){var n=e.type.contextTypes;if(!n)return gr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Pt(e){return e=e.childContextTypes,e!=null}function Ca(){He(Lt),He(xt)}function Kf(e,t,n){if(xt.current!==gr)throw Error(ce(168));Ue(xt,t),Ue(Lt,n)}function Nx(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(ce(108,V0(e)||"Unknown",i));return Ye({},n,r)}function Na(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gr,$r=xt.current,Ue(xt,e),Ue(Lt,Lt.current),!0}function Gf(e,t,n){var r=e.stateNode;if(!r)throw Error(ce(169));n?(e=Nx(e,t,$r),r.__reactInternalMemoizedMergedChildContext=e,He(Lt),He(xt),Ue(xt,e)):He(Lt),Ue(Lt,n)}var Rn=null,cl=!1,ec=!1;function Ex(e){Rn===null?Rn=[e]:Rn.push(e)}function aw(e){cl=!0,Ex(e)}function wr(){if(!ec&&Rn!==null){ec=!0;var e=0,t=$e;try{var n=Rn;for($e=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Rn=null,cl=!1}catch(i){throw Rn!==null&&(Rn=Rn.slice(e+1)),Zg(fd,wr),i}finally{$e=t,ec=!1}}return null}var si=[],ai=0,Ea=null,za=0,Zt=[],en=0,Dr=null,In=1,On="";function Sr(e,t){si[ai++]=za,si[ai++]=Ea,Ea=e,za=t}function zx(e,t,n){Zt[en++]=In,Zt[en++]=On,Zt[en++]=Dr,Dr=e;var r=In;e=On;var i=32-hn(r)-1;r&=~(1<<i),n+=1;var s=32-hn(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,In=1<<32-hn(t)+i|n<<i|r,On=s+e}else In=1<<s|n<<i|r,On=e}function kd(e){e.return!==null&&(Sr(e,1),zx(e,1,0))}function jd(e){for(;e===Ea;)Ea=si[--ai],si[ai]=null,za=si[--ai],si[ai]=null;for(;e===Dr;)Dr=Zt[--en],Zt[en]=null,On=Zt[--en],Zt[en]=null,In=Zt[--en],Zt[en]=null}var Jt=null,Vt=null,qe=!1,pn=null;function Tx(e,t){var n=nn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Yf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Jt=e,Vt=cr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Jt=e,Vt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Dr!==null?{id:In,overflow:On}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=nn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Jt=e,Vt=null,!0):!1;default:return!1}}function cu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function uu(e){if(qe){var t=Vt;if(t){var n=t;if(!Yf(e,t)){if(cu(e))throw Error(ce(418));t=cr(n.nextSibling);var r=Jt;t&&Yf(e,t)?Tx(r,n):(e.flags=e.flags&-4097|2,qe=!1,Jt=e)}}else{if(cu(e))throw Error(ce(418));e.flags=e.flags&-4097|2,qe=!1,Jt=e}}}function Qf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Jt=e}function Ms(e){if(e!==Jt)return!1;if(!qe)return Qf(e),qe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ou(e.type,e.memoizedProps)),t&&(t=Vt)){if(cu(e))throw Ax(),Error(ce(418));for(;t;)Tx(e,t),t=cr(t.nextSibling)}if(Qf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(ce(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Vt=cr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Vt=null}}else Vt=Jt?cr(e.stateNode.nextSibling):null;return!0}function Ax(){for(var e=Vt;e;)e=cr(e.nextSibling)}function _i(){Vt=Jt=null,qe=!1}function _d(e){pn===null?pn=[e]:pn.push(e)}var lw=Jn.ReactCurrentBatchConfig;function Qi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var r=n.stateNode}if(!r)throw Error(ce(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,e))}return e}function Ls(e,t){throw e=Object.prototype.toString.call(t),Error(ce(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Xf(e){var t=e._init;return t(e._payload)}function Mx(e){function t(g,x){if(e){var v=g.deletions;v===null?(g.deletions=[x],g.flags|=16):v.push(x)}}function n(g,x){if(!e)return null;for(;x!==null;)t(g,x),x=x.sibling;return null}function r(g,x){for(g=new Map;x!==null;)x.key!==null?g.set(x.key,x):g.set(x.index,x),x=x.sibling;return g}function i(g,x){return g=fr(g,x),g.index=0,g.sibling=null,g}function s(g,x,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<x?(g.flags|=2,x):v):(g.flags|=2,x)):(g.flags|=1048576,x)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,x,v,_){return x===null||x.tag!==6?(x=ac(v,g.mode,_),x.return=g,x):(x=i(x,v),x.return=g,x)}function c(g,x,v,_){var T=v.type;return T===ei?d(g,x,v.props.children,_,v.key):x!==null&&(x.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Yn&&Xf(T)===x.type)?(_=i(x,v.props),_.ref=Qi(g,x,v),_.return=g,_):(_=aa(v.type,v.key,v.props,null,g.mode,_),_.ref=Qi(g,x,v),_.return=g,_)}function u(g,x,v,_){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=lc(v,g.mode,_),x.return=g,x):(x=i(x,v.children||[]),x.return=g,x)}function d(g,x,v,_,T){return x===null||x.tag!==7?(x=Lr(v,g.mode,_,T),x.return=g,x):(x=i(x,v),x.return=g,x)}function f(g,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=ac(""+x,g.mode,v),x.return=g,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ks:return v=aa(x.type,x.key,x.props,null,g.mode,v),v.ref=Qi(g,null,x),v.return=g,v;case Zr:return x=lc(x,g.mode,v),x.return=g,x;case Yn:var _=x._init;return f(g,_(x._payload),v)}if(lo(x)||qi(x))return x=Lr(x,g.mode,v,null),x.return=g,x;Ls(g,x)}return null}function p(g,x,v,_){var T=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:l(g,x,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ks:return v.key===T?c(g,x,v,_):null;case Zr:return v.key===T?u(g,x,v,_):null;case Yn:return T=v._init,p(g,x,T(v._payload),_)}if(lo(v)||qi(v))return T!==null?null:d(g,x,v,_,null);Ls(g,v)}return null}function h(g,x,v,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return g=g.get(v)||null,l(x,g,""+_,T);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ks:return g=g.get(_.key===null?v:_.key)||null,c(x,g,_,T);case Zr:return g=g.get(_.key===null?v:_.key)||null,u(x,g,_,T);case Yn:var C=_._init;return h(g,x,v,C(_._payload),T)}if(lo(_)||qi(_))return g=g.get(v)||null,d(x,g,_,T,null);Ls(x,_)}return null}function m(g,x,v,_){for(var T=null,C=null,L=x,E=x=0,U=null;L!==null&&E<v.length;E++){L.index>E?(U=L,L=null):U=L.sibling;var z=p(g,L,v[E],_);if(z===null){L===null&&(L=U);break}e&&L&&z.alternate===null&&t(g,L),x=s(z,x,E),C===null?T=z:C.sibling=z,C=z,L=U}if(E===v.length)return n(g,L),qe&&Sr(g,E),T;if(L===null){for(;E<v.length;E++)L=f(g,v[E],_),L!==null&&(x=s(L,x,E),C===null?T=L:C.sibling=L,C=L);return qe&&Sr(g,E),T}for(L=r(g,L);E<v.length;E++)U=h(L,g,E,v[E],_),U!==null&&(e&&U.alternate!==null&&L.delete(U.key===null?E:U.key),x=s(U,x,E),C===null?T=U:C.sibling=U,C=U);return e&&L.forEach(function(I){return t(g,I)}),qe&&Sr(g,E),T}function b(g,x,v,_){var T=qi(v);if(typeof T!="function")throw Error(ce(150));if(v=T.call(v),v==null)throw Error(ce(151));for(var C=T=null,L=x,E=x=0,U=null,z=v.next();L!==null&&!z.done;E++,z=v.next()){L.index>E?(U=L,L=null):U=L.sibling;var I=p(g,L,z.value,_);if(I===null){L===null&&(L=U);break}e&&L&&I.alternate===null&&t(g,L),x=s(I,x,E),C===null?T=I:C.sibling=I,C=I,L=U}if(z.done)return n(g,L),qe&&Sr(g,E),T;if(L===null){for(;!z.done;E++,z=v.next())z=f(g,z.value,_),z!==null&&(x=s(z,x,E),C===null?T=z:C.sibling=z,C=z);return qe&&Sr(g,E),T}for(L=r(g,L);!z.done;E++,z=v.next())z=h(L,g,E,z.value,_),z!==null&&(e&&z.alternate!==null&&L.delete(z.key===null?E:z.key),x=s(z,x,E),C===null?T=z:C.sibling=z,C=z);return e&&L.forEach(function(q){return t(g,q)}),qe&&Sr(g,E),T}function j(g,x,v,_){if(typeof v=="object"&&v!==null&&v.type===ei&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ks:e:{for(var T=v.key,C=x;C!==null;){if(C.key===T){if(T=v.type,T===ei){if(C.tag===7){n(g,C.sibling),x=i(C,v.props.children),x.return=g,g=x;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Yn&&Xf(T)===C.type){n(g,C.sibling),x=i(C,v.props),x.ref=Qi(g,C,v),x.return=g,g=x;break e}n(g,C);break}else t(g,C);C=C.sibling}v.type===ei?(x=Lr(v.props.children,g.mode,_,v.key),x.return=g,g=x):(_=aa(v.type,v.key,v.props,null,g.mode,_),_.ref=Qi(g,x,v),_.return=g,g=_)}return a(g);case Zr:e:{for(C=v.key;x!==null;){if(x.key===C)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(g,x.sibling),x=i(x,v.children||[]),x.return=g,g=x;break e}else{n(g,x);break}else t(g,x);x=x.sibling}x=lc(v,g.mode,_),x.return=g,g=x}return a(g);case Yn:return C=v._init,j(g,x,C(v._payload),_)}if(lo(v))return m(g,x,v,_);if(qi(v))return b(g,x,v,_);Ls(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(g,x.sibling),x=i(x,v),x.return=g,g=x):(n(g,x),x=ac(v,g.mode,_),x.return=g,g=x),a(g)):n(g,x)}return j}var Si=Mx(!0),Lx=Mx(!1),Ta=br(null),Aa=null,li=null,Sd=null;function Cd(){Sd=li=Aa=null}function Nd(e){var t=Ta.current;He(Ta),e._currentValue=t}function du(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gi(e,t){Aa=e,Sd=li=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(At=!0),e.firstContext=null)}function an(e){var t=e._currentValue;if(Sd!==e)if(e={context:e,memoizedValue:t,next:null},li===null){if(Aa===null)throw Error(ce(308));li=e,Aa.dependencies={lanes:0,firstContext:e}}else li=li.next=e;return t}var zr=null;function Ed(e){zr===null?zr=[e]:zr.push(e)}function Px(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ed(t)):(n.next=i.next,i.next=n),t.interleaved=n,Wn(e,r)}function Wn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Qn=!1;function zd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rx(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Dn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ur(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Re&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Wn(e,n)}return i=r.interleaved,i===null?(t.next=t,Ed(r)):(t.next=i.next,i.next=t),r.interleaved=t,Wn(e,n)}function ta(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hd(e,n)}}function Zf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ma(e,t,n,r){var i=e.updateQueue;Qn=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(s!==null){var f=i.baseState;a=0,d=u=c=null,l=s;do{var p=l.lane,h=l.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,b=l;switch(p=t,h=n,b.tag){case 1:if(m=b.payload,typeof m=="function"){f=m.call(h,f,p);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=b.payload,p=typeof m=="function"?m.call(h,f,p):m,p==null)break e;f=Ye({},f,p);break e;case 2:Qn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else h={eventTime:h,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=h,c=f):d=d.next=h,a|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Br|=a,e.lanes=a,e.memoizedState=f}}function eh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(ce(191,i));i.call(r)}}}var as={},Cn=br(as),Bo=br(as),Uo=br(as);function Tr(e){if(e===as)throw Error(ce(174));return e}function Td(e,t){switch(Ue(Uo,t),Ue(Bo,e),Ue(Cn,as),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Hc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Hc(t,e)}He(Cn),Ue(Cn,t)}function Ci(){He(Cn),He(Bo),He(Uo)}function Ix(e){Tr(Uo.current);var t=Tr(Cn.current),n=Hc(t,e.type);t!==n&&(Ue(Bo,e),Ue(Cn,n))}function Ad(e){Bo.current===e&&(He(Cn),He(Bo))}var Ke=br(0);function La(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var tc=[];function Md(){for(var e=0;e<tc.length;e++)tc[e]._workInProgressVersionPrimary=null;tc.length=0}var na=Jn.ReactCurrentDispatcher,nc=Jn.ReactCurrentBatchConfig,Fr=0,Ge=null,st=null,lt=null,Pa=!1,wo=!1,Wo=0,cw=0;function ht(){throw Error(ce(321))}function Ld(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xn(e[n],t[n]))return!1;return!0}function Pd(e,t,n,r,i,s){if(Fr=s,Ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,na.current=e===null||e.memoizedState===null?fw:hw,e=n(r,i),wo){s=0;do{if(wo=!1,Wo=0,25<=s)throw Error(ce(301));s+=1,lt=st=null,t.updateQueue=null,na.current=mw,e=n(r,i)}while(wo)}if(na.current=Ra,t=st!==null&&st.next!==null,Fr=0,lt=st=Ge=null,Pa=!1,t)throw Error(ce(300));return e}function Rd(){var e=Wo!==0;return Wo=0,e}function bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lt===null?Ge.memoizedState=lt=e:lt=lt.next=e,lt}function ln(){if(st===null){var e=Ge.alternate;e=e!==null?e.memoizedState:null}else e=st.next;var t=lt===null?Ge.memoizedState:lt.next;if(t!==null)lt=t,st=e;else{if(e===null)throw Error(ce(310));st=e,e={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},lt===null?Ge.memoizedState=lt=e:lt=lt.next=e}return lt}function Vo(e,t){return typeof t=="function"?t(e):t}function rc(e){var t=ln(),n=t.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=e;var r=st,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,c=null,u=s;do{var d=u.lane;if((Fr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,a=r):c=c.next=f,Ge.lanes|=d,Br|=d}u=u.next}while(u!==null&&u!==s);c===null?a=r:c.next=l,xn(r,t.memoizedState)||(At=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Ge.lanes|=s,Br|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ic(e){var t=ln(),n=t.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);xn(s,t.memoizedState)||(At=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Ox(){}function $x(e,t){var n=Ge,r=ln(),i=t(),s=!xn(r.memoizedState,i);if(s&&(r.memoizedState=i,At=!0),r=r.queue,Id(Bx.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||lt!==null&&lt.memoizedState.tag&1){if(n.flags|=2048,Ho(9,Fx.bind(null,n,r,i,t),void 0,null),ct===null)throw Error(ce(349));Fr&30||Dx(n,t,i)}return i}function Dx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ge.updateQueue,t===null?(t={lastEffect:null,stores:null},Ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fx(e,t,n,r){t.value=n,t.getSnapshot=r,Ux(t)&&Wx(e)}function Bx(e,t,n){return n(function(){Ux(t)&&Wx(e)})}function Ux(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xn(e,n)}catch{return!0}}function Wx(e){var t=Wn(e,1);t!==null&&mn(t,e,1,-1)}function th(e){var t=bn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:e},t.queue=e,e=e.dispatch=pw.bind(null,Ge,e),[t.memoizedState,e]}function Ho(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ge.updateQueue,t===null?(t={lastEffect:null,stores:null},Ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Vx(){return ln().memoizedState}function ra(e,t,n,r){var i=bn();Ge.flags|=e,i.memoizedState=Ho(1|t,n,void 0,r===void 0?null:r)}function ul(e,t,n,r){var i=ln();r=r===void 0?null:r;var s=void 0;if(st!==null){var a=st.memoizedState;if(s=a.destroy,r!==null&&Ld(r,a.deps)){i.memoizedState=Ho(t,n,s,r);return}}Ge.flags|=e,i.memoizedState=Ho(1|t,n,s,r)}function nh(e,t){return ra(8390656,8,e,t)}function Id(e,t){return ul(2048,8,e,t)}function Hx(e,t){return ul(4,2,e,t)}function qx(e,t){return ul(4,4,e,t)}function Jx(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Kx(e,t,n){return n=n!=null?n.concat([e]):null,ul(4,4,Jx.bind(null,t,e),n)}function Od(){}function Gx(e,t){var n=ln();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ld(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Yx(e,t){var n=ln();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ld(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Qx(e,t,n){return Fr&21?(xn(n,t)||(n=nx(),Ge.lanes|=n,Br|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,At=!0),e.memoizedState=n)}function uw(e,t){var n=$e;$e=n!==0&&4>n?n:4,e(!0);var r=nc.transition;nc.transition={};try{e(!1),t()}finally{$e=n,nc.transition=r}}function Xx(){return ln().memoizedState}function dw(e,t,n){var r=pr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zx(e))ey(t,n);else if(n=Px(e,t,n,r),n!==null){var i=_t();mn(n,e,r,i),ty(n,t,r)}}function pw(e,t,n){var r=pr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zx(e))ey(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,xn(l,a)){var c=t.interleaved;c===null?(i.next=i,Ed(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Px(e,t,i,r),n!==null&&(i=_t(),mn(n,e,r,i),ty(n,t,r))}}function Zx(e){var t=e.alternate;return e===Ge||t!==null&&t===Ge}function ey(e,t){wo=Pa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ty(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hd(e,n)}}var Ra={readContext:an,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useInsertionEffect:ht,useLayoutEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useMutableSource:ht,useSyncExternalStore:ht,useId:ht,unstable_isNewReconciler:!1},fw={readContext:an,useCallback:function(e,t){return bn().memoizedState=[e,t===void 0?null:t],e},useContext:an,useEffect:nh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ra(4194308,4,Jx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ra(4194308,4,e,t)},useInsertionEffect:function(e,t){return ra(4,2,e,t)},useMemo:function(e,t){var n=bn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=dw.bind(null,Ge,e),[r.memoizedState,e]},useRef:function(e){var t=bn();return e={current:e},t.memoizedState=e},useState:th,useDebugValue:Od,useDeferredValue:function(e){return bn().memoizedState=e},useTransition:function(){var e=th(!1),t=e[0];return e=uw.bind(null,e[1]),bn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ge,i=bn();if(qe){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=t(),ct===null)throw Error(ce(349));Fr&30||Dx(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,nh(Bx.bind(null,r,s,e),[e]),r.flags|=2048,Ho(9,Fx.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=bn(),t=ct.identifierPrefix;if(qe){var n=On,r=In;n=(r&~(1<<32-hn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=cw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},hw={readContext:an,useCallback:Gx,useContext:an,useEffect:Id,useImperativeHandle:Kx,useInsertionEffect:Hx,useLayoutEffect:qx,useMemo:Yx,useReducer:rc,useRef:Vx,useState:function(){return rc(Vo)},useDebugValue:Od,useDeferredValue:function(e){var t=ln();return Qx(t,st.memoizedState,e)},useTransition:function(){var e=rc(Vo)[0],t=ln().memoizedState;return[e,t]},useMutableSource:Ox,useSyncExternalStore:$x,useId:Xx,unstable_isNewReconciler:!1},mw={readContext:an,useCallback:Gx,useContext:an,useEffect:Id,useImperativeHandle:Kx,useInsertionEffect:Hx,useLayoutEffect:qx,useMemo:Yx,useReducer:ic,useRef:Vx,useState:function(){return ic(Vo)},useDebugValue:Od,useDeferredValue:function(e){var t=ln();return st===null?t.memoizedState=e:Qx(t,st.memoizedState,e)},useTransition:function(){var e=ic(Vo)[0],t=ln().memoizedState;return[e,t]},useMutableSource:Ox,useSyncExternalStore:$x,useId:Xx,unstable_isNewReconciler:!1};function un(e,t){if(e&&e.defaultProps){t=Ye({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function pu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ye({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dl={isMounted:function(e){return(e=e._reactInternals)?qr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_t(),i=pr(e),s=Dn(r,i);s.payload=t,n!=null&&(s.callback=n),t=ur(e,s,i),t!==null&&(mn(t,e,i,r),ta(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_t(),i=pr(e),s=Dn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ur(e,s,i),t!==null&&(mn(t,e,i,r),ta(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_t(),r=pr(e),i=Dn(n,r);i.tag=2,t!=null&&(i.callback=t),t=ur(e,i,r),t!==null&&(mn(t,e,r,n),ta(t,e,r))}};function rh(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!Oo(n,r)||!Oo(i,s):!0}function ny(e,t,n){var r=!1,i=gr,s=t.contextType;return typeof s=="object"&&s!==null?s=an(s):(i=Pt(t)?$r:xt.current,r=t.contextTypes,s=(r=r!=null)?ji(e,i):gr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=dl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function ih(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&dl.enqueueReplaceState(t,t.state,null)}function fu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},zd(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=an(s):(s=Pt(t)?$r:xt.current,i.context=ji(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(pu(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&dl.enqueueReplaceState(i,i.state,null),Ma(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ni(e,t){try{var n="",r=t;do n+=W0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function oc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function hu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var gw=typeof WeakMap=="function"?WeakMap:Map;function ry(e,t,n){n=Dn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Oa||(Oa=!0,_u=r),hu(e,t)},n}function iy(e,t,n){n=Dn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){hu(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hu(e,t),typeof r!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function oh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new gw;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Tw.bind(null,e,t,n),t.then(e,e))}function sh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ah(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Dn(-1,1),t.tag=2,ur(n,t,1))),n.lanes|=1),e)}var xw=Jn.ReactCurrentOwner,At=!1;function bt(e,t,n,r){t.child=e===null?Lx(t,null,n,r):Si(t,e.child,n,r)}function lh(e,t,n,r,i){n=n.render;var s=t.ref;return gi(t,i),r=Pd(e,t,n,r,s,i),n=Rd(),e!==null&&!At?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vn(e,t,i)):(qe&&n&&kd(t),t.flags|=1,bt(e,t,r,i),t.child)}function ch(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Hd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,oy(e,t,s,r,i)):(e=aa(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Oo,n(a,r)&&e.ref===t.ref)return Vn(e,t,i)}return t.flags|=1,e=fr(s,r),e.ref=t.ref,e.return=t,t.child=e}function oy(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Oo(s,r)&&e.ref===t.ref)if(At=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(At=!0);else return t.lanes=e.lanes,Vn(e,t,i)}return mu(e,t,n,r,i)}function sy(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ue(ui,Ut),Ut|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ue(ui,Ut),Ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ue(ui,Ut),Ut|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Ue(ui,Ut),Ut|=r;return bt(e,t,i,n),t.child}function ay(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function mu(e,t,n,r,i){var s=Pt(n)?$r:xt.current;return s=ji(t,s),gi(t,i),n=Pd(e,t,n,r,s,i),r=Rd(),e!==null&&!At?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vn(e,t,i)):(qe&&r&&kd(t),t.flags|=1,bt(e,t,n,i),t.child)}function uh(e,t,n,r,i){if(Pt(n)){var s=!0;Na(t)}else s=!1;if(gi(t,i),t.stateNode===null)ia(e,t),ny(t,n,r),fu(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=an(u):(u=Pt(n)?$r:xt.current,u=ji(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&ih(t,a,r,u),Qn=!1;var p=t.memoizedState;a.state=p,Ma(t,r,a,i),c=t.memoizedState,l!==r||p!==c||Lt.current||Qn?(typeof d=="function"&&(pu(t,n,d,r),c=t.memoizedState),(l=Qn||rh(t,n,l,r,p,c,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Rx(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:un(t.type,l),a.props=u,f=t.pendingProps,p=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=an(c):(c=Pt(n)?$r:xt.current,c=ji(t,c));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||p!==c)&&ih(t,a,r,c),Qn=!1,p=t.memoizedState,a.state=p,Ma(t,r,a,i);var m=t.memoizedState;l!==f||p!==m||Lt.current||Qn?(typeof h=="function"&&(pu(t,n,h,r),m=t.memoizedState),(u=Qn||rh(t,n,u,r,p,m,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,m,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,m,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return gu(e,t,n,r,s,i)}function gu(e,t,n,r,i,s){ay(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Gf(t,n,!1),Vn(e,t,s);r=t.stateNode,xw.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Si(t,e.child,null,s),t.child=Si(t,null,l,s)):bt(e,t,l,s),t.memoizedState=r.state,i&&Gf(t,n,!0),t.child}function ly(e){var t=e.stateNode;t.pendingContext?Kf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Kf(e,t.context,!1),Td(e,t.containerInfo)}function dh(e,t,n,r,i){return _i(),_d(i),t.flags|=256,bt(e,t,n,r),t.child}var xu={dehydrated:null,treeContext:null,retryLane:0};function yu(e){return{baseLanes:e,cachePool:null,transitions:null}}function cy(e,t,n){var r=t.pendingProps,i=Ke.current,s=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ue(Ke,i&1),e===null)return uu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=hl(a,r,0,null),e=Lr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=yu(n),t.memoizedState=xu,e):$d(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return yw(e,t,a,r,l,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=fr(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=fr(l,s):(s=Lr(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?yu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=xu,r}return s=e.child,e=s.sibling,r=fr(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function $d(e,t){return t=hl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ps(e,t,n,r){return r!==null&&_d(r),Si(t,e.child,null,n),e=$d(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yw(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=oc(Error(ce(422))),Ps(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=hl({mode:"visible",children:r.children},i,0,null),s=Lr(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Si(t,e.child,null,a),t.child.memoizedState=yu(a),t.memoizedState=xu,s);if(!(t.mode&1))return Ps(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(ce(419)),r=oc(s,r,void 0),Ps(e,t,a,r)}if(l=(a&e.childLanes)!==0,At||l){if(r=ct,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Wn(e,i),mn(r,e,i,-1))}return Vd(),r=oc(Error(ce(421))),Ps(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Aw.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Vt=cr(i.nextSibling),Jt=t,qe=!0,pn=null,e!==null&&(Zt[en++]=In,Zt[en++]=On,Zt[en++]=Dr,In=e.id,On=e.overflow,Dr=t),t=$d(t,r.children),t.flags|=4096,t)}function ph(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),du(e.return,t,n)}function sc(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function uy(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(bt(e,t,r.children,n),r=Ke.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ph(e,n,t);else if(e.tag===19)ph(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ue(Ke,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&La(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),sc(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&La(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}sc(t,!0,n,null,s);break;case"together":sc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ia(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Br|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(ce(153));if(t.child!==null){for(e=t.child,n=fr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vw(e,t,n){switch(t.tag){case 3:ly(t),_i();break;case 5:Ix(t);break;case 1:Pt(t.type)&&Na(t);break;case 4:Td(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ue(Ta,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ue(Ke,Ke.current&1),t.flags|=128,null):n&t.child.childLanes?cy(e,t,n):(Ue(Ke,Ke.current&1),e=Vn(e,t,n),e!==null?e.sibling:null);Ue(Ke,Ke.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return uy(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ue(Ke,Ke.current),r)break;return null;case 22:case 23:return t.lanes=0,sy(e,t,n)}return Vn(e,t,n)}var dy,vu,py,fy;dy=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vu=function(){};py=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Tr(Cn.current);var s=null;switch(n){case"input":i=Bc(e,i),r=Bc(e,r),s=[];break;case"select":i=Ye({},i,{value:void 0}),r=Ye({},r,{value:void 0}),s=[];break;case"textarea":i=Vc(e,i),r=Vc(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Sa)}qc(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(To.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(To.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Ve("scroll",e),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};fy=function(e,t,n,r){n!==r&&(t.flags|=4)};function Xi(e,t){if(!qe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function mt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function bw(e,t,n){var r=t.pendingProps;switch(jd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(t),null;case 1:return Pt(t.type)&&Ca(),mt(t),null;case 3:return r=t.stateNode,Ci(),He(Lt),He(xt),Md(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ms(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,pn!==null&&(Nu(pn),pn=null))),vu(e,t),mt(t),null;case 5:Ad(t);var i=Tr(Uo.current);if(n=t.type,e!==null&&t.stateNode!=null)py(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(ce(166));return mt(t),null}if(e=Tr(Cn.current),Ms(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[kn]=t,r[Fo]=s,e=(t.mode&1)!==0,n){case"dialog":Ve("cancel",r),Ve("close",r);break;case"iframe":case"object":case"embed":Ve("load",r);break;case"video":case"audio":for(i=0;i<uo.length;i++)Ve(uo[i],r);break;case"source":Ve("error",r);break;case"img":case"image":case"link":Ve("error",r),Ve("load",r);break;case"details":Ve("toggle",r);break;case"input":wf(r,s),Ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ve("invalid",r);break;case"textarea":jf(r,s),Ve("invalid",r)}qc(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&As(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&As(r.textContent,l,e),i=["children",""+l]):To.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Ve("scroll",r)}switch(n){case"input":js(r),kf(r,s,!0);break;case"textarea":js(r),_f(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Sa)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[kn]=t,e[Fo]=r,dy(e,t,!1,!1),t.stateNode=e;e:{switch(a=Jc(n,r),n){case"dialog":Ve("cancel",e),Ve("close",e),i=r;break;case"iframe":case"object":case"embed":Ve("load",e),i=r;break;case"video":case"audio":for(i=0;i<uo.length;i++)Ve(uo[i],e);i=r;break;case"source":Ve("error",e),i=r;break;case"img":case"image":case"link":Ve("error",e),Ve("load",e),i=r;break;case"details":Ve("toggle",e),i=r;break;case"input":wf(e,r),i=Bc(e,r),Ve("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ye({},r,{value:void 0}),Ve("invalid",e);break;case"textarea":jf(e,r),i=Vc(e,r),Ve("invalid",e);break;default:i=r}qc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?Vg(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Ug(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ao(e,c):typeof c=="number"&&Ao(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(To.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Ve("scroll",e):c!=null&&ld(e,s,c,a))}switch(n){case"input":js(e),kf(e,r,!1);break;case"textarea":js(e),_f(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mr(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?pi(e,!!r.multiple,s,!1):r.defaultValue!=null&&pi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Sa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return mt(t),null;case 6:if(e&&t.stateNode!=null)fy(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(ce(166));if(n=Tr(Uo.current),Tr(Cn.current),Ms(t)){if(r=t.stateNode,n=t.memoizedProps,r[kn]=t,(s=r.nodeValue!==n)&&(e=Jt,e!==null))switch(e.tag){case 3:As(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&As(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kn]=t,t.stateNode=r}return mt(t),null;case 13:if(He(Ke),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(qe&&Vt!==null&&t.mode&1&&!(t.flags&128))Ax(),_i(),t.flags|=98560,s=!1;else if(s=Ms(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(ce(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[kn]=t}else _i(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;mt(t),s=!1}else pn!==null&&(Nu(pn),pn=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ke.current&1?at===0&&(at=3):Vd())),t.updateQueue!==null&&(t.flags|=4),mt(t),null);case 4:return Ci(),vu(e,t),e===null&&$o(t.stateNode.containerInfo),mt(t),null;case 10:return Nd(t.type._context),mt(t),null;case 17:return Pt(t.type)&&Ca(),mt(t),null;case 19:if(He(Ke),s=t.memoizedState,s===null)return mt(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)Xi(s,!1);else{if(at!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=La(e),a!==null){for(t.flags|=128,Xi(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ue(Ke,Ke.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ze()>Ei&&(t.flags|=128,r=!0,Xi(s,!1),t.lanes=4194304)}else{if(!r)if(e=La(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Xi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!qe)return mt(t),null}else 2*Ze()-s.renderingStartTime>Ei&&n!==1073741824&&(t.flags|=128,r=!0,Xi(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ze(),t.sibling=null,n=Ke.current,Ue(Ke,r?n&1|2:n&1),t):(mt(t),null);case 22:case 23:return Wd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ut&1073741824&&(mt(t),t.subtreeFlags&6&&(t.flags|=8192)):mt(t),null;case 24:return null;case 25:return null}throw Error(ce(156,t.tag))}function ww(e,t){switch(jd(t),t.tag){case 1:return Pt(t.type)&&Ca(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ci(),He(Lt),He(xt),Md(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ad(t),null;case 13:if(He(Ke),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(ce(340));_i()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return He(Ke),null;case 4:return Ci(),null;case 10:return Nd(t.type._context),null;case 22:case 23:return Wd(),null;case 24:return null;default:return null}}var Rs=!1,gt=!1,kw=typeof WeakSet=="function"?WeakSet:Set,we=null;function ci(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Qe(e,t,r)}else n.current=null}function bu(e,t,n){try{n()}catch(r){Qe(e,t,r)}}var fh=!1;function jw(e,t){if(ru=ka,e=yx(),wd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||i!==0&&f.nodeType!==3||(l=a+i),f!==s||r!==0&&f.nodeType!==3||(c=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(h=f.firstChild)!==null;)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++u===i&&(l=a),p===s&&++d===r&&(c=a),(h=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=h}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(iu={focusedElem:e,selectionRange:n},ka=!1,we=t;we!==null;)if(t=we,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,we=e;else for(;we!==null;){t=we;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var b=m.memoizedProps,j=m.memoizedState,g=t.stateNode,x=g.getSnapshotBeforeUpdate(t.elementType===t.type?b:un(t.type,b),j);g.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(_){Qe(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,we=e;break}we=t.return}return m=fh,fh=!1,m}function ko(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&bu(t,n,s)}i=i.next}while(i!==r)}}function pl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function wu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hy(e){var t=e.alternate;t!==null&&(e.alternate=null,hy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kn],delete t[Fo],delete t[au],delete t[ow],delete t[sw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function my(e){return e.tag===5||e.tag===3||e.tag===4}function hh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||my(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ku(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Sa));else if(r!==4&&(e=e.child,e!==null))for(ku(e,t,n),e=e.sibling;e!==null;)ku(e,t,n),e=e.sibling}function ju(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ju(e,t,n),e=e.sibling;e!==null;)ju(e,t,n),e=e.sibling}var ut=null,dn=!1;function Kn(e,t,n){for(n=n.child;n!==null;)gy(e,t,n),n=n.sibling}function gy(e,t,n){if(Sn&&typeof Sn.onCommitFiberUnmount=="function")try{Sn.onCommitFiberUnmount(il,n)}catch{}switch(n.tag){case 5:gt||ci(n,t);case 6:var r=ut,i=dn;ut=null,Kn(e,t,n),ut=r,dn=i,ut!==null&&(dn?(e=ut,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ut.removeChild(n.stateNode));break;case 18:ut!==null&&(dn?(e=ut,n=n.stateNode,e.nodeType===8?Zl(e.parentNode,n):e.nodeType===1&&Zl(e,n),Ro(e)):Zl(ut,n.stateNode));break;case 4:r=ut,i=dn,ut=n.stateNode.containerInfo,dn=!0,Kn(e,t,n),ut=r,dn=i;break;case 0:case 11:case 14:case 15:if(!gt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&bu(n,t,a),i=i.next}while(i!==r)}Kn(e,t,n);break;case 1:if(!gt&&(ci(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Qe(n,t,l)}Kn(e,t,n);break;case 21:Kn(e,t,n);break;case 22:n.mode&1?(gt=(r=gt)||n.memoizedState!==null,Kn(e,t,n),gt=r):Kn(e,t,n);break;default:Kn(e,t,n)}}function mh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new kw),t.forEach(function(r){var i=Mw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function cn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:ut=l.stateNode,dn=!1;break e;case 3:ut=l.stateNode.containerInfo,dn=!0;break e;case 4:ut=l.stateNode.containerInfo,dn=!0;break e}l=l.return}if(ut===null)throw Error(ce(160));gy(s,a,i),ut=null,dn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Qe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xy(t,e),t=t.sibling}function xy(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(cn(t,e),vn(e),r&4){try{ko(3,e,e.return),pl(3,e)}catch(b){Qe(e,e.return,b)}try{ko(5,e,e.return)}catch(b){Qe(e,e.return,b)}}break;case 1:cn(t,e),vn(e),r&512&&n!==null&&ci(n,n.return);break;case 5:if(cn(t,e),vn(e),r&512&&n!==null&&ci(n,n.return),e.flags&32){var i=e.stateNode;try{Ao(i,"")}catch(b){Qe(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Dg(i,s),Jc(l,a);var u=Jc(l,s);for(a=0;a<c.length;a+=2){var d=c[a],f=c[a+1];d==="style"?Vg(i,f):d==="dangerouslySetInnerHTML"?Ug(i,f):d==="children"?Ao(i,f):ld(i,d,f,u)}switch(l){case"input":Uc(i,s);break;case"textarea":Fg(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?pi(i,!!s.multiple,h,!1):p!==!!s.multiple&&(s.defaultValue!=null?pi(i,!!s.multiple,s.defaultValue,!0):pi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Fo]=s}catch(b){Qe(e,e.return,b)}}break;case 6:if(cn(t,e),vn(e),r&4){if(e.stateNode===null)throw Error(ce(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(b){Qe(e,e.return,b)}}break;case 3:if(cn(t,e),vn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ro(t.containerInfo)}catch(b){Qe(e,e.return,b)}break;case 4:cn(t,e),vn(e);break;case 13:cn(t,e),vn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Bd=Ze())),r&4&&mh(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(gt=(u=gt)||d,cn(t,e),gt=u):cn(t,e),vn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(we=e,d=e.child;d!==null;){for(f=we=d;we!==null;){switch(p=we,h=p.child,p.tag){case 0:case 11:case 14:case 15:ko(4,p,p.return);break;case 1:ci(p,p.return);var m=p.stateNode;if(typeof m.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(b){Qe(r,n,b)}}break;case 5:ci(p,p.return);break;case 22:if(p.memoizedState!==null){xh(f);continue}}h!==null?(h.return=p,we=h):xh(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,c=f.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Wg("display",a))}catch(b){Qe(e,e.return,b)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(b){Qe(e,e.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:cn(t,e),vn(e),r&4&&mh(e);break;case 21:break;default:cn(t,e),vn(e)}}function vn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(my(n)){var r=n;break e}n=n.return}throw Error(ce(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ao(i,""),r.flags&=-33);var s=hh(e);ju(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=hh(e);ku(e,l,a);break;default:throw Error(ce(161))}}catch(c){Qe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _w(e,t,n){we=e,yy(e)}function yy(e,t,n){for(var r=(e.mode&1)!==0;we!==null;){var i=we,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Rs;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||gt;l=Rs;var u=gt;if(Rs=a,(gt=c)&&!u)for(we=i;we!==null;)a=we,c=a.child,a.tag===22&&a.memoizedState!==null?yh(i):c!==null?(c.return=a,we=c):yh(i);for(;s!==null;)we=s,yy(s),s=s.sibling;we=i,Rs=l,gt=u}gh(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,we=s):gh(e)}}function gh(e){for(;we!==null;){var t=we;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:gt||pl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!gt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:un(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&eh(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}eh(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ro(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}gt||t.flags&512&&wu(t)}catch(p){Qe(t,t.return,p)}}if(t===e){we=null;break}if(n=t.sibling,n!==null){n.return=t.return,we=n;break}we=t.return}}function xh(e){for(;we!==null;){var t=we;if(t===e){we=null;break}var n=t.sibling;if(n!==null){n.return=t.return,we=n;break}we=t.return}}function yh(e){for(;we!==null;){var t=we;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pl(4,t)}catch(c){Qe(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Qe(t,i,c)}}var s=t.return;try{wu(t)}catch(c){Qe(t,s,c)}break;case 5:var a=t.return;try{wu(t)}catch(c){Qe(t,a,c)}}}catch(c){Qe(t,t.return,c)}if(t===e){we=null;break}var l=t.sibling;if(l!==null){l.return=t.return,we=l;break}we=t.return}}var Sw=Math.ceil,Ia=Jn.ReactCurrentDispatcher,Dd=Jn.ReactCurrentOwner,sn=Jn.ReactCurrentBatchConfig,Re=0,ct=null,rt=null,dt=0,Ut=0,ui=br(0),at=0,qo=null,Br=0,fl=0,Fd=0,jo=null,Tt=null,Bd=0,Ei=1/0,Ln=null,Oa=!1,_u=null,dr=null,Is=!1,nr=null,$a=0,_o=0,Su=null,oa=-1,sa=0;function _t(){return Re&6?Ze():oa!==-1?oa:oa=Ze()}function pr(e){return e.mode&1?Re&2&&dt!==0?dt&-dt:lw.transition!==null?(sa===0&&(sa=nx()),sa):(e=$e,e!==0||(e=window.event,e=e===void 0?16:cx(e.type)),e):1}function mn(e,t,n,r){if(50<_o)throw _o=0,Su=null,Error(ce(185));is(e,n,r),(!(Re&2)||e!==ct)&&(e===ct&&(!(Re&2)&&(fl|=n),at===4&&er(e,dt)),Rt(e,r),n===1&&Re===0&&!(t.mode&1)&&(Ei=Ze()+500,cl&&wr()))}function Rt(e,t){var n=e.callbackNode;lb(e,t);var r=wa(e,e===ct?dt:0);if(r===0)n!==null&&Nf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Nf(n),t===1)e.tag===0?aw(vh.bind(null,e)):Ex(vh.bind(null,e)),rw(function(){!(Re&6)&&wr()}),n=null;else{switch(rx(r)){case 1:n=fd;break;case 4:n=ex;break;case 16:n=ba;break;case 536870912:n=tx;break;default:n=ba}n=Cy(n,vy.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vy(e,t){if(oa=-1,sa=0,Re&6)throw Error(ce(327));var n=e.callbackNode;if(xi()&&e.callbackNode!==n)return null;var r=wa(e,e===ct?dt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Da(e,r);else{t=r;var i=Re;Re|=2;var s=wy();(ct!==e||dt!==t)&&(Ln=null,Ei=Ze()+500,Mr(e,t));do try{Ew();break}catch(l){by(e,l)}while(!0);Cd(),Ia.current=s,Re=i,rt!==null?t=0:(ct=null,dt=0,t=at)}if(t!==0){if(t===2&&(i=Xc(e),i!==0&&(r=i,t=Cu(e,i))),t===1)throw n=qo,Mr(e,0),er(e,r),Rt(e,Ze()),n;if(t===6)er(e,r);else{if(i=e.current.alternate,!(r&30)&&!Cw(i)&&(t=Da(e,r),t===2&&(s=Xc(e),s!==0&&(r=s,t=Cu(e,s))),t===1))throw n=qo,Mr(e,0),er(e,r),Rt(e,Ze()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(ce(345));case 2:Cr(e,Tt,Ln);break;case 3:if(er(e,r),(r&130023424)===r&&(t=Bd+500-Ze(),10<t)){if(wa(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){_t(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=su(Cr.bind(null,e,Tt,Ln),t);break}Cr(e,Tt,Ln);break;case 4:if(er(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-hn(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=Ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sw(r/1960))-r,10<r){e.timeoutHandle=su(Cr.bind(null,e,Tt,Ln),r);break}Cr(e,Tt,Ln);break;case 5:Cr(e,Tt,Ln);break;default:throw Error(ce(329))}}}return Rt(e,Ze()),e.callbackNode===n?vy.bind(null,e):null}function Cu(e,t){var n=jo;return e.current.memoizedState.isDehydrated&&(Mr(e,t).flags|=256),e=Da(e,t),e!==2&&(t=Tt,Tt=n,t!==null&&Nu(t)),e}function Nu(e){Tt===null?Tt=e:Tt.push.apply(Tt,e)}function Cw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!xn(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function er(e,t){for(t&=~Fd,t&=~fl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-hn(t),r=1<<n;e[n]=-1,t&=~r}}function vh(e){if(Re&6)throw Error(ce(327));xi();var t=wa(e,0);if(!(t&1))return Rt(e,Ze()),null;var n=Da(e,t);if(e.tag!==0&&n===2){var r=Xc(e);r!==0&&(t=r,n=Cu(e,r))}if(n===1)throw n=qo,Mr(e,0),er(e,t),Rt(e,Ze()),n;if(n===6)throw Error(ce(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Cr(e,Tt,Ln),Rt(e,Ze()),null}function Ud(e,t){var n=Re;Re|=1;try{return e(t)}finally{Re=n,Re===0&&(Ei=Ze()+500,cl&&wr())}}function Ur(e){nr!==null&&nr.tag===0&&!(Re&6)&&xi();var t=Re;Re|=1;var n=sn.transition,r=$e;try{if(sn.transition=null,$e=1,e)return e()}finally{$e=r,sn.transition=n,Re=t,!(Re&6)&&wr()}}function Wd(){Ut=ui.current,He(ui)}function Mr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,nw(n)),rt!==null)for(n=rt.return;n!==null;){var r=n;switch(jd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ca();break;case 3:Ci(),He(Lt),He(xt),Md();break;case 5:Ad(r);break;case 4:Ci();break;case 13:He(Ke);break;case 19:He(Ke);break;case 10:Nd(r.type._context);break;case 22:case 23:Wd()}n=n.return}if(ct=e,rt=e=fr(e.current,null),dt=Ut=t,at=0,qo=null,Fd=fl=Br=0,Tt=jo=null,zr!==null){for(t=0;t<zr.length;t++)if(n=zr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}zr=null}return e}function by(e,t){do{var n=rt;try{if(Cd(),na.current=Ra,Pa){for(var r=Ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Pa=!1}if(Fr=0,lt=st=Ge=null,wo=!1,Wo=0,Dd.current=null,n===null||n.return===null){at=1,qo=t,rt=null;break}e:{var s=e,a=n.return,l=n,c=t;if(t=dt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=sh(a);if(h!==null){h.flags&=-257,ah(h,a,l,s,t),h.mode&1&&oh(s,u,t),t=h,c=u;var m=t.updateQueue;if(m===null){var b=new Set;b.add(c),t.updateQueue=b}else m.add(c);break e}else{if(!(t&1)){oh(s,u,t),Vd();break e}c=Error(ce(426))}}else if(qe&&l.mode&1){var j=sh(a);if(j!==null){!(j.flags&65536)&&(j.flags|=256),ah(j,a,l,s,t),_d(Ni(c,l));break e}}s=c=Ni(c,l),at!==4&&(at=2),jo===null?jo=[s]:jo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var g=ry(s,c,t);Zf(s,g);break e;case 1:l=c;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(dr===null||!dr.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t;var _=iy(s,l,t);Zf(s,_);break e}}s=s.return}while(s!==null)}jy(n)}catch(T){t=T,rt===n&&n!==null&&(rt=n=n.return);continue}break}while(!0)}function wy(){var e=Ia.current;return Ia.current=Ra,e===null?Ra:e}function Vd(){(at===0||at===3||at===2)&&(at=4),ct===null||!(Br&268435455)&&!(fl&268435455)||er(ct,dt)}function Da(e,t){var n=Re;Re|=2;var r=wy();(ct!==e||dt!==t)&&(Ln=null,Mr(e,t));do try{Nw();break}catch(i){by(e,i)}while(!0);if(Cd(),Re=n,Ia.current=r,rt!==null)throw Error(ce(261));return ct=null,dt=0,at}function Nw(){for(;rt!==null;)ky(rt)}function Ew(){for(;rt!==null&&!Z0();)ky(rt)}function ky(e){var t=Sy(e.alternate,e,Ut);e.memoizedProps=e.pendingProps,t===null?jy(e):rt=t,Dd.current=null}function jy(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ww(n,t),n!==null){n.flags&=32767,rt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{at=6,rt=null;return}}else if(n=bw(n,t,Ut),n!==null){rt=n;return}if(t=t.sibling,t!==null){rt=t;return}rt=t=e}while(t!==null);at===0&&(at=5)}function Cr(e,t,n){var r=$e,i=sn.transition;try{sn.transition=null,$e=1,zw(e,t,n,r)}finally{sn.transition=i,$e=r}return null}function zw(e,t,n,r){do xi();while(nr!==null);if(Re&6)throw Error(ce(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(ce(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(cb(e,s),e===ct&&(rt=ct=null,dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Is||(Is=!0,Cy(ba,function(){return xi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=sn.transition,sn.transition=null;var a=$e;$e=1;var l=Re;Re|=4,Dd.current=null,jw(e,n),xy(n,e),Gb(iu),ka=!!ru,iu=ru=null,e.current=n,_w(n),eb(),Re=l,$e=a,sn.transition=s}else e.current=n;if(Is&&(Is=!1,nr=e,$a=i),s=e.pendingLanes,s===0&&(dr=null),rb(n.stateNode),Rt(e,Ze()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Oa)throw Oa=!1,e=_u,_u=null,e;return $a&1&&e.tag!==0&&xi(),s=e.pendingLanes,s&1?e===Su?_o++:(_o=0,Su=e):_o=0,wr(),null}function xi(){if(nr!==null){var e=rx($a),t=sn.transition,n=$e;try{if(sn.transition=null,$e=16>e?16:e,nr===null)var r=!1;else{if(e=nr,nr=null,$a=0,Re&6)throw Error(ce(331));var i=Re;for(Re|=4,we=e.current;we!==null;){var s=we,a=s.child;if(we.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(we=u;we!==null;){var d=we;switch(d.tag){case 0:case 11:case 15:ko(8,d,s)}var f=d.child;if(f!==null)f.return=d,we=f;else for(;we!==null;){d=we;var p=d.sibling,h=d.return;if(hy(d),d===u){we=null;break}if(p!==null){p.return=h,we=p;break}we=h}}}var m=s.alternate;if(m!==null){var b=m.child;if(b!==null){m.child=null;do{var j=b.sibling;b.sibling=null,b=j}while(b!==null)}}we=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,we=a;else e:for(;we!==null;){if(s=we,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ko(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,we=g;break e}we=s.return}}var x=e.current;for(we=x;we!==null;){a=we;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,we=v;else e:for(a=x;we!==null;){if(l=we,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:pl(9,l)}}catch(T){Qe(l,l.return,T)}if(l===a){we=null;break e}var _=l.sibling;if(_!==null){_.return=l.return,we=_;break e}we=l.return}}if(Re=i,wr(),Sn&&typeof Sn.onPostCommitFiberRoot=="function")try{Sn.onPostCommitFiberRoot(il,e)}catch{}r=!0}return r}finally{$e=n,sn.transition=t}}return!1}function bh(e,t,n){t=Ni(n,t),t=ry(e,t,1),e=ur(e,t,1),t=_t(),e!==null&&(is(e,1,t),Rt(e,t))}function Qe(e,t,n){if(e.tag===3)bh(e,e,n);else for(;t!==null;){if(t.tag===3){bh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dr===null||!dr.has(r))){e=Ni(n,e),e=iy(t,e,1),t=ur(t,e,1),e=_t(),t!==null&&(is(t,1,e),Rt(t,e));break}}t=t.return}}function Tw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=_t(),e.pingedLanes|=e.suspendedLanes&n,ct===e&&(dt&n)===n&&(at===4||at===3&&(dt&130023424)===dt&&500>Ze()-Bd?Mr(e,0):Fd|=n),Rt(e,t)}function _y(e,t){t===0&&(e.mode&1?(t=Cs,Cs<<=1,!(Cs&130023424)&&(Cs=4194304)):t=1);var n=_t();e=Wn(e,t),e!==null&&(is(e,t,n),Rt(e,n))}function Aw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_y(e,n)}function Mw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(ce(314))}r!==null&&r.delete(t),_y(e,n)}var Sy;Sy=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Lt.current)At=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return At=!1,vw(e,t,n);At=!!(e.flags&131072)}else At=!1,qe&&t.flags&1048576&&zx(t,za,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ia(e,t),e=t.pendingProps;var i=ji(t,xt.current);gi(t,n),i=Pd(null,t,r,e,i,n);var s=Rd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pt(r)?(s=!0,Na(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zd(t),i.updater=dl,t.stateNode=i,i._reactInternals=t,fu(t,r,e,n),t=gu(null,t,r,!0,s,n)):(t.tag=0,qe&&s&&kd(t),bt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ia(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Pw(r),e=un(r,e),i){case 0:t=mu(null,t,r,e,n);break e;case 1:t=uh(null,t,r,e,n);break e;case 11:t=lh(null,t,r,e,n);break e;case 14:t=ch(null,t,r,un(r.type,e),n);break e}throw Error(ce(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:un(r,i),mu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:un(r,i),uh(e,t,r,i,n);case 3:e:{if(ly(t),e===null)throw Error(ce(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Rx(e,t),Ma(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Ni(Error(ce(423)),t),t=dh(e,t,r,n,i);break e}else if(r!==i){i=Ni(Error(ce(424)),t),t=dh(e,t,r,n,i);break e}else for(Vt=cr(t.stateNode.containerInfo.firstChild),Jt=t,qe=!0,pn=null,n=Lx(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_i(),r===i){t=Vn(e,t,n);break e}bt(e,t,r,n)}t=t.child}return t;case 5:return Ix(t),e===null&&uu(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,ou(r,i)?a=null:s!==null&&ou(r,s)&&(t.flags|=32),ay(e,t),bt(e,t,a,n),t.child;case 6:return e===null&&uu(t),null;case 13:return cy(e,t,n);case 4:return Td(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Si(t,null,r,n):bt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:un(r,i),lh(e,t,r,i,n);case 7:return bt(e,t,t.pendingProps,n),t.child;case 8:return bt(e,t,t.pendingProps.children,n),t.child;case 12:return bt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,Ue(Ta,r._currentValue),r._currentValue=a,s!==null)if(xn(s.value,a)){if(s.children===i.children&&!Lt.current){t=Vn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Dn(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),du(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ce(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),du(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}bt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,gi(t,n),i=an(i),r=r(i),t.flags|=1,bt(e,t,r,n),t.child;case 14:return r=t.type,i=un(r,t.pendingProps),i=un(r.type,i),ch(e,t,r,i,n);case 15:return oy(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:un(r,i),ia(e,t),t.tag=1,Pt(r)?(e=!0,Na(t)):e=!1,gi(t,n),ny(t,r,i),fu(t,r,i,n),gu(null,t,r,!0,e,n);case 19:return uy(e,t,n);case 22:return sy(e,t,n)}throw Error(ce(156,t.tag))};function Cy(e,t){return Zg(e,t)}function Lw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nn(e,t,n,r){return new Lw(e,t,n,r)}function Hd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pw(e){if(typeof e=="function")return Hd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ud)return 11;if(e===dd)return 14}return 2}function fr(e,t){var n=e.alternate;return n===null?(n=nn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function aa(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")Hd(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ei:return Lr(n.children,i,s,t);case cd:a=8,i|=8;break;case Oc:return e=nn(12,n,t,i|2),e.elementType=Oc,e.lanes=s,e;case $c:return e=nn(13,n,t,i),e.elementType=$c,e.lanes=s,e;case Dc:return e=nn(19,n,t,i),e.elementType=Dc,e.lanes=s,e;case Ig:return hl(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pg:a=10;break e;case Rg:a=9;break e;case ud:a=11;break e;case dd:a=14;break e;case Yn:a=16,r=null;break e}throw Error(ce(130,e==null?e:typeof e,""))}return t=nn(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Lr(e,t,n,r){return e=nn(7,e,r,t),e.lanes=n,e}function hl(e,t,n,r){return e=nn(22,e,r,t),e.elementType=Ig,e.lanes=n,e.stateNode={isHidden:!1},e}function ac(e,t,n){return e=nn(6,e,null,t),e.lanes=n,e}function lc(e,t,n){return t=nn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ul(0),this.expirationTimes=Ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ul(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function qd(e,t,n,r,i,s,a,l,c){return e=new Rw(e,t,n,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=nn(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zd(s),e}function Iw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ny(e){if(!e)return gr;e=e._reactInternals;e:{if(qr(e)!==e||e.tag!==1)throw Error(ce(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(ce(171))}if(e.tag===1){var n=e.type;if(Pt(n))return Nx(e,n,t)}return t}function Ey(e,t,n,r,i,s,a,l,c){return e=qd(n,r,!0,e,i,s,a,l,c),e.context=Ny(null),n=e.current,r=_t(),i=pr(n),s=Dn(r,i),s.callback=t??null,ur(n,s,i),e.current.lanes=i,is(e,i,r),Rt(e,r),e}function ml(e,t,n,r){var i=t.current,s=_t(),a=pr(i);return n=Ny(n),t.context===null?t.context=n:t.pendingContext=n,t=Dn(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ur(i,t,a),e!==null&&(mn(e,i,a,s),ta(e,i,a)),a}function Fa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Jd(e,t){wh(e,t),(e=e.alternate)&&wh(e,t)}function Ow(){return null}var zy=typeof reportError=="function"?reportError:function(e){console.error(e)};function Kd(e){this._internalRoot=e}gl.prototype.render=Kd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(ce(409));ml(e,t,null,null)};gl.prototype.unmount=Kd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ur(function(){ml(null,e,null,null)}),t[Un]=null}};function gl(e){this._internalRoot=e}gl.prototype.unstable_scheduleHydration=function(e){if(e){var t=sx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Zn.length&&t!==0&&t<Zn[n].priority;n++);Zn.splice(n,0,e),n===0&&lx(e)}};function Gd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function kh(){}function $w(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Fa(a);s.call(u)}}var a=Ey(t,r,e,0,null,!1,!1,"",kh);return e._reactRootContainer=a,e[Un]=a.current,$o(e.nodeType===8?e.parentNode:e),Ur(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Fa(c);l.call(u)}}var c=qd(e,0,!1,null,null,!1,!1,"",kh);return e._reactRootContainer=c,e[Un]=c.current,$o(e.nodeType===8?e.parentNode:e),Ur(function(){ml(t,c,n,r)}),c}function yl(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var c=Fa(a);l.call(c)}}ml(t,a,e,i)}else a=$w(n,t,e,i,r);return Fa(a)}ix=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=co(t.pendingLanes);n!==0&&(hd(t,n|1),Rt(t,Ze()),!(Re&6)&&(Ei=Ze()+500,wr()))}break;case 13:Ur(function(){var r=Wn(e,1);if(r!==null){var i=_t();mn(r,e,1,i)}}),Jd(e,1)}};md=function(e){if(e.tag===13){var t=Wn(e,134217728);if(t!==null){var n=_t();mn(t,e,134217728,n)}Jd(e,134217728)}};ox=function(e){if(e.tag===13){var t=pr(e),n=Wn(e,t);if(n!==null){var r=_t();mn(n,e,t,r)}Jd(e,t)}};sx=function(){return $e};ax=function(e,t){var n=$e;try{return $e=e,t()}finally{$e=n}};Gc=function(e,t,n){switch(t){case"input":if(Uc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ll(r);if(!i)throw Error(ce(90));$g(r),Uc(r,i)}}}break;case"textarea":Fg(e,n);break;case"select":t=n.value,t!=null&&pi(e,!!n.multiple,t,!1)}};Jg=Ud;Kg=Ur;var Dw={usingClientEntryPoint:!1,Events:[ss,ii,ll,Hg,qg,Ud]},Zi={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fw={bundleType:Zi.bundleType,version:Zi.version,rendererPackageName:Zi.rendererPackageName,rendererConfig:Zi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qg(e),e===null?null:e.stateNode},findFiberByHostInstance:Zi.findFiberByHostInstance||Ow,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Os=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Os.isDisabled&&Os.supportsFiber)try{il=Os.inject(Fw),Sn=Os}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dw;Yt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gd(t))throw Error(ce(200));return Iw(e,t,null,n)};Yt.createRoot=function(e,t){if(!Gd(e))throw Error(ce(299));var n=!1,r="",i=zy;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=qd(e,1,!1,null,null,n,!1,r,i),e[Un]=t.current,$o(e.nodeType===8?e.parentNode:e),new Kd(t)};Yt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(ce(188)):(e=Object.keys(e).join(","),Error(ce(268,e)));return e=Qg(t),e=e===null?null:e.stateNode,e};Yt.flushSync=function(e){return Ur(e)};Yt.hydrate=function(e,t,n){if(!xl(t))throw Error(ce(200));return yl(null,e,t,!0,n)};Yt.hydrateRoot=function(e,t,n){if(!Gd(e))throw Error(ce(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=zy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Ey(t,null,e,1,n??null,i,!1,s,a),e[Un]=t.current,$o(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new gl(t)};Yt.render=function(e,t,n){if(!xl(t))throw Error(ce(200));return yl(null,e,t,!1,n)};Yt.unmountComponentAtNode=function(e){if(!xl(e))throw Error(ce(40));return e._reactRootContainer?(Ur(function(){yl(null,null,e,!1,function(){e._reactRootContainer=null,e[Un]=null})}),!0):!1};Yt.unstable_batchedUpdates=Ud;Yt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xl(n))throw Error(ce(200));if(e==null||e._reactInternals===void 0)throw Error(ce(38));return yl(e,t,n,!1,r)};Yt.version="18.3.1-next-f1338f8080-20240426";function Ty(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ty)}catch(e){console.error(e)}}Ty(),Tg.exports=Yt;var Ay=Tg.exports,jh=Ay;Rc.createRoot=jh.createRoot,Rc.hydrateRoot=jh.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jo(){return Jo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jo.apply(this,arguments)}var rr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(rr||(rr={}));const _h="popstate";function Bw(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:a,hash:l}=r.location;return Eu("",{pathname:s,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:My(i)}return Ww(t,n,null,e)}function it(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Yd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Uw(){return Math.random().toString(36).substr(2,8)}function Sh(e,t){return{usr:e.state,key:e.key,idx:t}}function Eu(e,t,n,r){return n===void 0&&(n=null),Jo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Oi(t):t,{state:n,key:t&&t.key||r||Uw()})}function My(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Oi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ww(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,l=rr.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(Jo({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function f(){l=rr.Pop;let j=d(),g=j==null?null:j-u;u=j,c&&c({action:l,location:b.location,delta:g})}function p(j,g){l=rr.Push;let x=Eu(b.location,j,g);u=d()+1;let v=Sh(x,u),_=b.createHref(x);try{a.pushState(v,"",_)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(_)}s&&c&&c({action:l,location:b.location,delta:1})}function h(j,g){l=rr.Replace;let x=Eu(b.location,j,g);u=d();let v=Sh(x,u),_=b.createHref(x);a.replaceState(v,"",_),s&&c&&c({action:l,location:b.location,delta:0})}function m(j){let g=i.location.origin!=="null"?i.location.origin:i.location.href,x=typeof j=="string"?j:My(j);return x=x.replace(/ $/,"%20"),it(g,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,g)}let b={get action(){return l},get location(){return e(i,a)},listen(j){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(_h,f),c=j,()=>{i.removeEventListener(_h,f),c=null}},createHref(j){return t(i,j)},createURL:m,encodeLocation(j){let g=m(j);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:h,go(j){return a.go(j)}};return b}var Ch;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ch||(Ch={}));function Vw(e,t,n){return n===void 0&&(n="/"),Hw(e,t,n)}function Hw(e,t,n,r){let i=typeof t=="string"?Oi(t):t,s=Ry(i.pathname||"/",n);if(s==null)return null;let a=Ly(e);qw(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=ik(s);l=tk(a[c],u)}return l}function Ly(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,a,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};c.relativePath.startsWith("/")&&(it(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Pr([r,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(it(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ly(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:Zw(u,s.index),routesMeta:d})};return e.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,a);else for(let c of Py(s.path))i(s,a,c)}),t}function Py(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=Py(r.join("/")),l=[];return l.push(...a.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function qw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ek(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Jw=/^:[\w-]+$/,Kw=3,Gw=2,Yw=1,Qw=10,Xw=-2,Nh=e=>e==="*";function Zw(e,t){let n=e.split("/"),r=n.length;return n.some(Nh)&&(r+=Xw),t&&(r+=Gw),n.filter(i=>!Nh(i)).reduce((i,s)=>i+(Jw.test(s)?Kw:s===""?Yw:Qw),r)}function ek(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function tk(e,t,n){let{routesMeta:r}=e,i={},s="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",f=nk({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),p=c.route;if(!f)return null;Object.assign(i,f.params),a.push({params:i,pathname:Pr([s,f.pathname]),pathnameBase:ck(Pr([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=Pr([s,f.pathnameBase]))}return a}function nk(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=rk(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:p,isOptional:h}=d;if(p==="*"){let b=l[f]||"";a=s.slice(0,s.length-b.length).replace(/(.)\/+$/,"$1")}const m=l[f];return h&&!m?u[p]=void 0:u[p]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:e}}function rk(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Yd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function ik(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Yd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ry(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const ok=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sk=e=>ok.test(e);function ak(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Oi(e):e,s;if(n)if(sk(n))s=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),Yd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=Eh(n.substring(1),"/"):s=Eh(n,t)}else s=t;return{pathname:s,search:uk(r),hash:dk(i)}}function Eh(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function cc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lk(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Iy(e,t){let n=lk(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Oy(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Oi(e):(i=Jo({},e),it(!i.pathname||!i.pathname.includes("?"),cc("?","pathname","search",i)),it(!i.pathname||!i.pathname.includes("#"),cc("#","pathname","hash",i)),it(!i.search||!i.search.includes("#"),cc("#","search","hash",i)));let s=e===""||i.pathname==="",a=s?"/":i.pathname,l;if(a==null)l=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}l=f>=0?t[f]:"/"}let c=ak(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Pr=e=>e.join("/").replace(/\/\/+/g,"/"),ck=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),uk=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,dk=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function pk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const $y=["post","put","patch","delete"];new Set($y);const fk=["get",...$y];new Set(fk);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ko(){return Ko=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ko.apply(this,arguments)}const Qd=k.createContext(null),hk=k.createContext(null),ls=k.createContext(null),vl=k.createContext(null),kr=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Dy=k.createContext(null);function cs(){return k.useContext(vl)!=null}function Xd(){return cs()||it(!1),k.useContext(vl).location}function Fy(e){k.useContext(ls).static||k.useLayoutEffect(e)}function Zd(){let{isDataRoute:e}=k.useContext(kr);return e?Ek():mk()}function mk(){cs()||it(!1);let e=k.useContext(Qd),{basename:t,future:n,navigator:r}=k.useContext(ls),{matches:i}=k.useContext(kr),{pathname:s}=Xd(),a=JSON.stringify(Iy(i,n.v7_relativeSplatPath)),l=k.useRef(!1);return Fy(()=>{l.current=!0}),k.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let f=Oy(u,JSON.parse(a),s,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Pr([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,a,s,e])}function gk(){let{matches:e}=k.useContext(kr),t=e[e.length-1];return t?t.params:{}}function xk(e,t){return yk(e,t)}function yk(e,t,n,r){cs()||it(!1);let{navigator:i}=k.useContext(ls),{matches:s}=k.useContext(kr),a=s[s.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=Xd(),d;if(t){var f;let j=typeof t=="string"?Oi(t):t;c==="/"||(f=j.pathname)!=null&&f.startsWith(c)||it(!1),d=j}else d=u;let p=d.pathname||"/",h=p;if(c!=="/"){let j=c.replace(/^\//,"").split("/");h="/"+p.replace(/^\//,"").split("/").slice(j.length).join("/")}let m=Vw(e,{pathname:h}),b=jk(m&&m.map(j=>Object.assign({},j,{params:Object.assign({},l,j.params),pathname:Pr([c,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?c:Pr([c,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),s,n,r);return t&&b?k.createElement(vl.Provider,{value:{location:Ko({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:rr.Pop}},b):b}function vk(){let e=Nk(),t=pk(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,null)}const bk=k.createElement(vk,null);class wk extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(kr.Provider,{value:this.props.routeContext},k.createElement(Dy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function kk(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext(Qd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(kr.Provider,{value:t},r)}function jk(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=a.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||it(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let f=a[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:p,errors:h}=n,m=f.route.loader&&p[f.route.id]===void 0&&(!h||h[f.route.id]===void 0);if(f.route.lazy||m){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,f,p)=>{let h,m=!1,b=null,j=null;n&&(h=l&&f.route.id?l[f.route.id]:void 0,b=f.route.errorElement||bk,c&&(u<0&&p===0?(zk("route-fallback"),m=!0,j=null):u===p&&(m=!0,j=f.route.hydrateFallbackElement||null)));let g=t.concat(a.slice(0,p+1)),x=()=>{let v;return h?v=b:m?v=j:f.route.Component?v=k.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=d,k.createElement(kk,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?k.createElement(wk,{location:n.location,revalidation:n.revalidation,component:b,error:h,children:x(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):x()},null)}var By=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(By||{}),Uy=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Uy||{});function _k(e){let t=k.useContext(Qd);return t||it(!1),t}function Sk(e){let t=k.useContext(hk);return t||it(!1),t}function Ck(e){let t=k.useContext(kr);return t||it(!1),t}function Wy(e){let t=Ck(),n=t.matches[t.matches.length-1];return n.route.id||it(!1),n.route.id}function Nk(){var e;let t=k.useContext(Dy),n=Sk(),r=Wy();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Ek(){let{router:e}=_k(By.UseNavigateStable),t=Wy(Uy.UseNavigateStable),n=k.useRef(!1);return Fy(()=>{n.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ko({fromRouteId:t},s)))},[e,t])}const zh={};function zk(e,t,n){zh[e]||(zh[e]=!0)}function Tk(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ak(e){let{to:t,replace:n,state:r,relative:i}=e;cs()||it(!1);let{future:s,static:a}=k.useContext(ls),{matches:l}=k.useContext(kr),{pathname:c}=Xd(),u=Zd(),d=Oy(t,Iy(l,s.v7_relativeSplatPath),c,i==="path"),f=JSON.stringify(d);return k.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function Xr(e){it(!1)}function Mk(e){let{basename:t="/",children:n=null,location:r,navigationType:i=rr.Pop,navigator:s,static:a=!1,future:l}=e;cs()&&it(!1);let c=t.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:c,navigator:s,static:a,future:Ko({v7_relativeSplatPath:!1},l)}),[c,l,s,a]);typeof r=="string"&&(r=Oi(r));let{pathname:d="/",search:f="",hash:p="",state:h=null,key:m="default"}=r,b=k.useMemo(()=>{let j=Ry(d,c);return j==null?null:{location:{pathname:j,search:f,hash:p,state:h,key:m},navigationType:i}},[c,d,f,p,h,m,i]);return b==null?null:k.createElement(ls.Provider,{value:u},k.createElement(vl.Provider,{children:n,value:b}))}function Lk(e){let{children:t,location:n}=e;return xk(zu(t),n)}new Promise(()=>{});function zu(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,i)=>{if(!k.isValidElement(r))return;let s=[...t,i];if(r.type===k.Fragment){n.push.apply(n,zu(r.props.children,s));return}r.type!==Xr&&it(!1),!r.props.index||!r.props.children||it(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=zu(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Pk="6";try{window.__reactRouterVersion=Pk}catch{}const Rk="startTransition",Th=T0[Rk];function Ik(e){let{basename:t,children:n,future:r,window:i}=e,s=k.useRef();s.current==null&&(s.current=Bw({window:i,v5Compat:!0}));let a=s.current,[l,c]=k.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=k.useCallback(f=>{u&&Th?Th(()=>c(f)):c(f)},[c,u]);return k.useLayoutEffect(()=>a.listen(d),[a,d]),k.useEffect(()=>Tk(r),[r]),k.createElement(Mk,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}var Ah;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ah||(Ah={}));var Mh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Mh||(Mh={}));const Ok={},Lh=e=>{let t;const n=new Set,r=(d,f)=>{const p=typeof d=="function"?d(t):d;if(!Object.is(p,t)){const h=t;t=f??(typeof p!="object"||p===null)?p:Object.assign({},t,p),n.forEach(m=>m(t,h))}},i=()=>t,c={setState:r,getState:i,getInitialState:()=>u,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(Ok?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,c);return c},$k=e=>e?Lh(e):Lh;var Vy={exports:{}},Hy={},qy={exports:{}},Jy={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zi=k;function Dk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fk=typeof Object.is=="function"?Object.is:Dk,Bk=zi.useState,Uk=zi.useEffect,Wk=zi.useLayoutEffect,Vk=zi.useDebugValue;function Hk(e,t){var n=t(),r=Bk({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return Wk(function(){i.value=n,i.getSnapshot=t,uc(i)&&s({inst:i})},[e,n,t]),Uk(function(){return uc(i)&&s({inst:i}),e(function(){uc(i)&&s({inst:i})})},[e]),Vk(n),n}function uc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fk(e,n)}catch{return!0}}function qk(e,t){return t()}var Jk=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?qk:Hk;Jy.useSyncExternalStore=zi.useSyncExternalStore!==void 0?zi.useSyncExternalStore:Jk;qy.exports=Jy;var Kk=qy.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bl=k,Gk=Kk;function Yk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qk=typeof Object.is=="function"?Object.is:Yk,Xk=Gk.useSyncExternalStore,Zk=bl.useRef,ej=bl.useEffect,tj=bl.useMemo,nj=bl.useDebugValue;Hy.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=Zk(null);if(s.current===null){var a={hasValue:!1,value:null};s.current=a}else a=s.current;s=tj(function(){function c(h){if(!u){if(u=!0,d=h,h=r(h),i!==void 0&&a.hasValue){var m=a.value;if(i(m,h))return f=m}return f=h}if(m=f,Qk(d,h))return m;var b=r(h);return i!==void 0&&i(m,b)?(d=h,m):(d=h,f=b)}var u=!1,d,f,p=n===void 0?null:n;return[function(){return c(t())},p===null?void 0:function(){return c(p())}]},[t,n,r,i]);var l=Xk(e,s[0],s[1]);return ej(function(){a.hasValue=!0,a.value=l},[l]),nj(l),l};Vy.exports=Hy;var rj=Vy.exports;const ij=nl(rj),Ky={},{useDebugValue:oj}=qt,{useSyncExternalStoreWithSelector:sj}=ij;let Ph=!1;const aj=e=>e;function lj(e,t=aj,n){(Ky?"production":void 0)!=="production"&&n&&!Ph&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Ph=!0);const r=sj(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return oj(r),r}const Rh=e=>{(Ky?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?$k(e):e,n=(r,i)=>lj(t,r,i);return Object.assign(n,t),n},cj=e=>e?Rh(e):Rh,yt=cj((e,t)=>({project:null,selectedAgentId:null,selectedToolId:null,mcpServers:[],builtinTools:[],isRunning:!1,runEvents:[],watches:[],activeTab:"app",sidebarOpen:!0,hasUnsavedChanges:!1,runAgentId:null,currentSessionId:null,setProject:n=>{var i;const r=((i=n==null?void 0:n.watches)==null?void 0:i.map(s=>({...s,result:void 0,error:void 0,isLoading:!1,lastRun:void 0,history:[]})))||[];e({project:n,watches:r})},setSelectedAgentId:n=>e({selectedAgentId:n}),setSelectedToolId:n=>e({selectedToolId:n}),setMcpServers:n=>e({mcpServers:n}),setBuiltinTools:n=>e({builtinTools:n}),setIsRunning:n=>e({isRunning:n}),addRunEvent:n=>e(r=>({runEvents:[...r.runEvents,n]})),clearRunEvents:()=>e({runEvents:[]}),setWatches:n=>e({watches:n}),updateWatch:(n,r)=>e(i=>{const s=i.watches.map(l=>l.id===n?{...l,...r}:l);if(("serverName"in r||"toolName"in r||"args"in r||"transform"in r)&&i.project){const l=s.map(({id:c,serverName:u,toolName:d,args:f,transform:p})=>({id:c,serverName:u,toolName:d,args:f,transform:p}));return{watches:s,project:{...i.project,watches:l},hasUnsavedChanges:!0}}return{watches:s}}),addWatch:n=>e(r=>{const i=[...r.watches,n],{project:s}=r;if(s){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:f})=>({id:l,serverName:c,toolName:u,args:d,transform:f}));return{watches:i,project:{...s,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),removeWatch:n=>e(r=>{const i=r.watches.filter(a=>a.id!==n),{project:s}=r;if(s){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:f})=>({id:l,serverName:c,toolName:u,args:d,transform:f}));return{watches:i,project:{...s,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),clearWatchHistories:()=>e(n=>({watches:n.watches.map(r=>({...r,history:[],result:void 0,error:void 0}))})),setActiveTab:n=>e({activeTab:n}),setSidebarOpen:n=>e({sidebarOpen:n}),setHasUnsavedChanges:n=>e({hasUnsavedChanges:n}),setRunAgentId:n=>e({runAgentId:n}),setCurrentSessionId:n=>e({currentSessionId:n}),updateProject:n=>{const{project:r}=t();r&&e({project:{...r,...n}})},addAgent:n=>{const{project:r}=t();if(r){let i=r.app;if(n.type==="LlmAgent"&&n.output_key){const s=n.output_key;r.app.state_keys.find(l=>l.name===s)||(i={...r.app,state_keys:[...r.app.state_keys,{name:s,description:`Output from ${n.name} agent`,type:"string",scope:"session"}]})}e({project:{...r,app:i,agents:[...r.agents,n]}})}},updateAgent:(n,r)=>{const{project:i}=t();if(i){const s=i.agents.find(l=>l.id===n);let a=i.app;if(s&&s.type==="LlmAgent"&&r.output_key){const l=s.output_key,c=r.output_key;if(l!==c){const u=i.app.state_keys.filter(f=>f.name!==l);u.find(f=>f.name===c)?a={...i.app,state_keys:u}:a={...i.app,state_keys:[...u,{name:c,description:`Output from ${r.name||s.name} agent`,type:"string",scope:"session"}]}}}e({project:{...i,app:a,agents:i.agents.map(l=>l.id===n?{...l,...r}:l)}})}},removeAgent:n=>{const{project:r,selectedAgentId:i}=t();r&&e({project:{...r,agents:r.agents.filter(s=>s.id!==n)},selectedAgentId:i===n?null:i})},addCustomTool:n=>{const{project:r}=t();r&&e({project:{...r,custom_tools:[...r.custom_tools,n]}})},updateCustomTool:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_tools:i.custom_tools.map(s=>s.id===n?{...s,...r}:s)}})},removeCustomTool:n=>{const{project:r,selectedToolId:i}=t();r&&e({project:{...r,custom_tools:r.custom_tools.filter(s=>s.id!==n)},selectedToolId:i===n?null:i})},addCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:[...r.custom_callbacks||[],n]}})},updateCustomCallback:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_callbacks:(i.custom_callbacks||[]).map(s=>s.id===n?{...s,...r}:s)}})},removeCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:(r.custom_callbacks||[]).filter(i=>i.id!==n)}})}})),ep="/api";async function Ae(e,t){const n=await fetch(`${ep}${e}`,{...t,headers:{"Content-Type":"application/json",...t==null?void 0:t.headers}});if(!n.ok){const r=await n.json().catch(()=>({detail:"Unknown error"}));throw new Error(r.detail||`HTTP ${n.status}`)}return n.json()}async function Gy(){return(await Ae("/projects")).projects}async function Yy(e){return(await Ae(`/projects/${e}`)).project}async function Qy(e,t=""){return(await Ae("/projects",{method:"POST",body:JSON.stringify({name:e,description:t})})).project}async function Tu(e,t){return(await Ae(`/projects/${e}`,{method:"PUT",body:JSON.stringify(t)})).project}async function Xy(e){await Ae(`/projects/${e}`,{method:"DELETE"})}async function Zy(e){return Ae(`/sessions/${e}/save-to-memory`,{method:"POST"})}async function Au(e){return(await Ae(`/projects/${e}/sessions`)).sessions}async function ev(e,t){return(await Ae(`/projects/${e}/sessions/${t}/load`)).session}async function tv(e,t){return(await Ae(`/projects/${e}/sessions/${t}/artifacts`)).artifacts||[]}function la(e,t,n){return`${ep}/projects/${e}/sessions/${t}/artifacts/${encodeURIComponent(n)}`}async function nv(e){return(await Ae(`/projects/${e}/yaml`)).yaml}async function rv(e,t){return(await Ae(`/projects/${e}/yaml`,{method:"PUT",body:JSON.stringify({yaml:t})})).project}async function tp(){return(await Ae("/mcp-servers")).servers}async function iv(){return(await Ae("/builtin-tools")).tools}function ov(e){const t=window.location.protocol==="https:"?"wss:":"ws:",n=window.location.host;return new WebSocket(`${t}//${n}/ws/run/${e}`)}async function ca(e,t,n,r){return await Ae(`/projects/${e}/generate-prompt`,{method:"POST",body:JSON.stringify({agent_id:t,context:n,agent_config:r||void 0})})}async function sv(e,t){return await Ae(`/projects/${e}/generate-agent-config`,{method:"POST",body:JSON.stringify({description:t})})}async function av(e,t,n,r=[],i){return await Ae(`/projects/${e}/generate-tool-code`,{method:"POST",body:JSON.stringify({tool_name:t,tool_description:n,state_keys_used:r,context:i})})}async function lv(e,t,n,r,i=[],s){return await Ae(`/projects/${e}/generate-callback-code`,{method:"POST",body:JSON.stringify({callback_name:t,callback_description:n,callback_type:r,state_keys_used:i,context:s})})}async function Mu(e){return await Ae("/test-mcp-server",{method:"POST",body:JSON.stringify(e)})}async function cv(e,t){return Ae(`/projects/${e}/test-model`,{method:"POST",body:JSON.stringify(t)})}async function uv(e,t){return Ae(`/projects/${e}/skillsets/${t}/stats`)}async function dv(e,t,n,r,i=500,s=50){return Ae(`/projects/${e}/skillsets/${t}/url`,{method:"POST",body:JSON.stringify({url:n,source_name:r,chunk_size:i,chunk_overlap:s})})}async function pv(e,t,n,r=500,i=50){const s=new FormData;s.append("file",n),s.append("chunk_size",String(r)),s.append("chunk_overlap",String(i));const a=await fetch(`${ep}/projects/${e}/skillsets/${t}/file`,{method:"POST",body:s});if(!a.ok)throw new Error(`Upload failed: ${a.statusText}`);return a.json()}async function fv(e,t,n,r=10,i=0){return Ae(`/projects/${e}/skillsets/${t}/search`,{method:"POST",body:JSON.stringify({query:n,top_k:r,min_score:i})})}async function hv(e,t){return Ae(`/projects/${e}/skillsets/${t}/entries`,{method:"DELETE"})}async function mv(){return Ae("/skillsets/embeddings-available")}const et={async get(e){return Ae(e)},async post(e,t){return Ae(e,{method:"POST",body:t?JSON.stringify(t):void 0})},async put(e,t){return Ae(e,{method:"PUT",body:t?JSON.stringify(t):void 0})},async delete(e){return Ae(e,{method:"DELETE"})}},uj=Object.freeze(Object.defineProperty({__proto__:null,addSkillSetUrl:dv,api:et,checkEmbeddingsAvailable:mv,clearSkillSet:hv,createProject:Qy,createRunWebSocket:ov,deleteProject:Xy,fetchJSON:Ae,generateAgentConfig:sv,generateCallbackCode:lv,generatePrompt:ca,generateToolCode:av,getArtifactUrl:la,getBuiltinTools:iv,getMcpServers:tp,getProject:Yy,getProjectYaml:nv,getSkillSetStats:uv,listArtifacts:tv,listProjectSessions:Au,listProjects:Gy,loadSession:ev,saveSessionToMemory:Zy,searchSkillSet:fv,testMcpServer:Mu,testModelConfig:cv,updateProject:Tu,updateProjectFromYaml:rv,uploadSkillSetFile:pv},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dj={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pj=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ve=(e,t)=>{const n=k.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:l="",children:c,...u},d)=>k.createElement("svg",{ref:d,...dj,width:i,height:i,stroke:r,strokeWidth:a?Number(s)*24/Number(i):s,className:["lucide",`lucide-${pj(e)}`,l].join(" "),...u},[...t.map(([f,p])=>k.createElement(f,p)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=ve("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=ve("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fj=ve("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hj=ve("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=ve("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mj=ve("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=ve("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=ve("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=ve("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=ve("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=ve("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=ve("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=ve("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=ve("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=ve("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=ve("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=ve("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gj=ve("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=ve("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=ve("FileBox",[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",key:"h7jej2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M2.97 13.12c-.6.36-.97 1.02-.97 1.74v3.28c0 .72.37 1.38.97 1.74l3 1.83c.63.39 1.43.39 2.06 0l3-1.83c.6-.36.97-1.02.97-1.74v-3.28c0-.72-.37-1.38-.97-1.74l-3-1.83a1.97 1.97 0 0 0-2.06 0l-3 1.83Z",key:"f4a3oc"}],["path",{d:"m7 17-4.74-2.85",key:"etm6su"}],["path",{d:"m7 17 4.74-2.85",key:"5xuooz"}],["path",{d:"M7 17v5",key:"1yj1jh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=ve("FileCheck",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xj=ve("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yj=ve("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vj=ve("File",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=ve("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=ve("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=ve("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=ve("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=ve("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bj=ve("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wj=ve("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kj=ve("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=ve("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=ve("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=ve("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jj=ve("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=ve("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=ve("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=ve("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=ve("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _j=ve("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sj=ve("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cj=ve("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=ve("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=ve("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=ve("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nj=ve("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=ve("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=ve("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=ve("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ej=ve("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=ve("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=ve("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=ve("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zj=ve("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=ve("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=ve("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=ve("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=ve("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=ve("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=ve("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=ve("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=ve("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tj=ve("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=ve("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=ve("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=ve("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=ve("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function Aj(){const e=Zd(),[t,n]=k.useState([]),[r,i]=k.useState(!0),[s,a]=k.useState(!1),[l,c]=k.useState("");k.useEffect(()=>{u()},[]);async function u(){try{const p=await Gy();n(p)}catch(p){console.error("Failed to load projects:",p)}finally{i(!1)}}async function d(){if(l.trim())try{const p=await Qy(l.trim());e(`/project/${p.id}`)}catch(p){console.error("Failed to create project:",p)}}async function f(p,h){if(h.stopPropagation(),!!confirm("Delete this project?"))try{await Xy(p),n(t.filter(m=>m.id!==p))}catch(m){console.error("Failed to delete project:",m)}}return o.jsxs("div",{className:"project-list",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("header",{className:"header",children:[o.jsxs("div",{className:"logo",children:[o.jsx(ap,{size:40,className:"logo-icon"}),o.jsx("h1",{className:"title",children:"ADK Playground"})]}),o.jsx("p",{className:"subtitle",children:"Build, test, and deploy AI agents visually"})]}),o.jsxs("div",{className:"content",children:[s?o.jsxs("div",{className:"create-form",children:[o.jsx("input",{type:"text",placeholder:"Project name...",value:l,onChange:p=>c(p.target.value),onKeyDown:p=>p.key==="Enter"&&d(),autoFocus:!0}),o.jsxs("button",{className:"btn btn-primary",onClick:d,children:[o.jsx(nt,{size:18}),"Create"]}),o.jsx("button",{className:"btn btn-secondary",onClick:()=>a(!1),children:"Cancel"})]}):o.jsx("div",{className:"create-form",children:o.jsxs("button",{className:"btn btn-primary",onClick:()=>a(!0),children:[o.jsx(nt,{size:18}),"New Project"]})}),r?o.jsx("div",{className:"loading",children:"Loading projects..."}):t.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Ih,{size:48,style:{marginBottom:16,opacity:.3}}),o.jsx("p",{children:"No projects yet. Create one to get started!"})]}):o.jsx("div",{className:"projects-grid",children:t.map(p=>o.jsxs("div",{className:"project-card",onClick:()=>e(`/project/${p.id}`),children:[o.jsxs("h3",{children:[o.jsx(Ih,{size:18}),p.name]}),o.jsx("p",{children:p.description||"No description"}),o.jsx("button",{className:"delete-btn",onClick:h=>f(p.id,h),children:o.jsx(Je,{size:16})})]},p.id))})]})]})}const Oh={},Mj=5*60*1e3;function Lj({projectId:e,value:t,provider:n,apiBase:r,onChange:i,placeholder:s="Search models..."}){const a=`${e}:${n||""}:${r||""}`,[l,c]=k.useState(t||""),[u,d]=k.useState(!1),[f,p]=k.useState([]),[h,m]=k.useState(!1),[b,j]=k.useState(null),[g,x]=k.useState(-1),[v,_]=k.useState({top:0,left:0,width:0}),T=k.useRef(null),C=k.useRef(null);k.useEffect(()=>{if(u&&T.current){const A=T.current.getBoundingClientRect();_({top:A.bottom+window.scrollY+4,left:A.left+window.scrollX,width:A.width})}},[u]);const L=k.useCallback(async()=>{const A=Oh[a];if(A&&Date.now()-A.timestamp<Mj){const O=[];Object.values(A.providers).forEach(M=>{O.push(...M.models)}),p(O);return}m(!0),j(null);try{const O=new URLSearchParams;n&&O.append("provider",n),r&&O.append("api_base",r);const M=`/models/${e}${O.toString()?"?"+O.toString():""}`,S=await et.get(M);Oh[a]={providers:S.providers,timestamp:Date.now()};const R=[];Object.values(S.providers).forEach(P=>{P.models&&P.models.length>0&&R.push(...P.models)}),p(R)}catch(O){j(O.message||"Failed to fetch models")}finally{m(!1)}},[e,a,r,n]);k.useEffect(()=>{L()},[L]),k.useEffect(()=>{c(t||"")},[t]);const E=f.filter(A=>{const O=l.toLowerCase();return A.id.toLowerCase().includes(O)||A.name.toLowerCase().includes(O)||A.provider.toLowerCase().includes(O)});k.useEffect(()=>{const A=O=>{C.current&&!C.current.contains(O.target)&&T.current&&!T.current.contains(O.target)&&d(!1)};return document.addEventListener("mousedown",A),()=>document.removeEventListener("mousedown",A)},[]);const U=A=>{if(!u){(A.key==="ArrowDown"||A.key==="Enter")&&(d(!0),A.preventDefault());return}switch(A.key){case"ArrowDown":x(O=>Math.min(O+1,E.length-1)),A.preventDefault();break;case"ArrowUp":x(O=>Math.max(O-1,0)),A.preventDefault();break;case"Enter":g>=0&&g<E.length&&z(E[g]),A.preventDefault();break;case"Escape":d(!1);break}},z=A=>{c(A.id),i(A.id,A.provider),d(!1)},I=A=>{c(A.target.value),d(!0),x(-1),i(A.target.value,n||"gemini")},q=A=>{switch(A.toLowerCase()){case"gemini":return"provider-gemini";case"anthropic":return"provider-anthropic";case"openai":return"provider-openai";case"groq":return"provider-groq";case"together":return"provider-together";case"ollama":return"provider-ollama";default:return"provider-other"}},G=u?o.jsxs("div",{ref:C,className:"model-autocomplete-dropdown model-autocomplete-dropdown-portal",style:{position:"fixed",top:v.top,left:v.left,width:v.width},children:[h&&o.jsx("div",{className:"model-autocomplete-loading",children:"Loading models..."}),b&&o.jsx("div",{className:"model-autocomplete-error",children:b}),!h&&!b&&E.length===0&&o.jsx("div",{className:"model-autocomplete-empty",children:l?"No matching models":"No models available"}),!h&&E.length>0&&o.jsxs("div",{className:"model-autocomplete-list",children:[E.slice(0,50).map((A,O)=>o.jsxs("div",{className:`model-autocomplete-item ${O===g?"highlighted":""}`,onClick:()=>z(A),onMouseEnter:()=>x(O),children:[o.jsx("span",{className:`provider-badge ${q(A.provider)}`,children:A.provider}),o.jsx("span",{className:"model-id",children:A.id}),A.context_window&&o.jsxs("span",{className:"model-context",title:`${A.context_window.toLocaleString()} token context`,children:[Math.round(A.context_window/1e3),"K"]}),A.supports_tools&&o.jsx("span",{className:"model-feature",title:"Supports function calling / tools",children:"🔧"}),A.supports_vision&&o.jsx("span",{className:"model-feature",title:"Supports image/vision input",children:"👁️"}),A.supports_json_mode&&o.jsx("span",{className:"model-feature",title:"Supports structured JSON output",children:"📋"})]},`${A.provider}-${A.id}`)),E.length>50&&o.jsxs("div",{className:"model-autocomplete-more",children:["+",E.length-50," more..."]})]})]}):null;return o.jsxs("div",{className:"model-autocomplete",children:[o.jsx("input",{ref:T,type:"text",value:l,onChange:I,onFocus:()=>d(!0),onKeyDown:U,placeholder:s,className:"model-autocomplete-input"}),G&&Ay.createPortal(G,document.body)]})}const Pj=[{value:"gemini",label:"Gemini"},{value:"anthropic",label:"Anthropic"},{value:"openai",label:"OpenAI"},{value:"groq",label:"Groq"},{value:"together",label:"Together (via LiteLLM)"},{value:"litellm",label:"LiteLLM / Other"}];function Rj(e,t){return e.startsWith("openai/")?"openai":e.startsWith("groq/")?"groq":e.startsWith("together_ai/")||e.startsWith("together/")?"together":e.startsWith("ollama/")?"litellm":e.startsWith("claude-")?"anthropic":e.startsWith("gemini-")?"gemini":e.includes("/")?"litellm":t||"gemini"}function Cv({projectId:e,values:t,onChange:n,className:r=""}){const[i,s]=k.useState(!1),[a,l]=k.useState(null),c=async()=>{var u;if(!t.model_name||!t.provider){l({success:!1,message:"Please select a model first"});return}s(!0),l(null);try{const d=await cv(e,{provider:t.provider,model_name:t.model_name,api_base:t.api_base});d.success?l({success:!0,message:((u=d.response)==null?void 0:u.slice(0,100))||"Model responded successfully!"}):l({success:!1,message:d.error||"Test failed"})}catch(d){l({success:!1,message:d.message||"Connection failed"})}finally{s(!1)}};return o.jsxs("div",{className:`model-config-form ${r}`,children:[o.jsxs("div",{className:"model-config-row",children:[o.jsxs("div",{className:"model-config-field",style:{flex:1},children:[o.jsx("label",{children:"Provider"}),o.jsx("select",{value:t.provider||"gemini",onChange:u=>{n({provider:u.target.value}),l(null)},children:Pj.map(u=>o.jsx("option",{value:u.value,children:u.label},u.value))})]}),o.jsxs("div",{className:"model-config-field",style:{flex:3},children:[o.jsx("label",{children:"Model"}),o.jsx(Lj,{projectId:e,value:t.model_name||"",provider:t.provider,apiBase:t.api_base,onChange:(u,d)=>{const f=Rj(u,d);n({model_name:u,provider:f}),l(null)},placeholder:"Search models..."})]}),o.jsxs("div",{className:"model-config-field",style:{flex:2},children:[o.jsx("label",{children:"API Base (optional)"}),o.jsx("input",{type:"text",value:t.api_base||"",onChange:u=>{n({api_base:u.target.value||void 0}),l(null)},placeholder:t.provider==="gemini"?"https://generativelanguage.googleapis.com":t.provider==="anthropic"?"https://api.anthropic.com":t.provider==="openai"?"https://api.openai.com/v1":t.provider==="groq"?"https://api.groq.com/openai/v1":t.provider==="together"?"https://api.together.xyz/v1":"http://localhost:11434"})]}),o.jsxs("div",{className:"model-config-field model-test-field",children:[o.jsx("label",{children:" "}),o.jsxs("button",{type:"button",className:`model-test-btn ${(a==null?void 0:a.success)===!0?"success":(a==null?void 0:a.success)===!1?"error":""}`,onClick:c,disabled:i||!t.model_name,title:(a==null?void 0:a.message)||"Test model connection",children:[i?o.jsx(bv,{size:14,className:"spinning"}):(a==null?void 0:a.success)===!0?o.jsx(Hn,{size:14}):(a==null?void 0:a.success)===!1?o.jsx(yr,{size:14}):o.jsx(cp,{size:14}),i?"Testing...":"Test"]})]})]}),o.jsxs("div",{className:"model-config-row",children:[o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Temperature"}),o.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:t.temperature??"",onChange:u=>n({temperature:u.target.value?parseFloat(u.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Max Tokens"}),o.jsx("input",{type:"number",min:"1",value:t.max_output_tokens??"",onChange:u=>n({max_output_tokens:u.target.value?parseInt(u.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Top P"}),o.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:t.top_p??"",onChange:u=>n({top_p:u.target.value?parseFloat(u.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Top K"}),o.jsx("input",{type:"number",min:"1",value:t.top_k??"",onChange:u=>n({top_k:u.target.value?parseInt(u.target.value):void 0}),placeholder:"Default"})]})]}),o.jsxs("div",{className:"model-config-row",children:[o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{title:"Number of times to retry on connection failure",children:"Retries"}),o.jsx("input",{type:"number",min:"0",max:"10",value:t.num_retries??"",onChange:u=>n({num_retries:u.target.value?parseInt(u.target.value):void 0}),placeholder:"3"})]}),o.jsxs("div",{className:"model-config-field",style:{flex:2},children:[o.jsx("label",{title:"Maximum time to wait for a response (in seconds)",children:"Timeout (seconds)"}),o.jsx("input",{type:"number",min:"10",max:"7200",step:"10",value:t.request_timeout??"",onChange:u=>n({request_timeout:u.target.value?parseInt(u.target.value):void 0}),placeholder:"1800 (30 min)"})]}),o.jsxs("div",{className:"model-config-field",style:{flex:3},children:[o.jsx("label",{children:" "}),o.jsx("span",{className:"model-config-hint",style:{fontSize:"11px",color:"#666",marginTop:"4px"},children:"Increase timeout for slow models like local Ollama"})]})]})]})}const Ij=[{key:"GOOGLE_API_KEY",description:"API key for Gemini models"},{key:"OPENAI_API_KEY",description:"API key for OpenAI models (via LiteLLM)"},{key:"GROQ_API_KEY",description:"API key for Groq models"},{key:"ANTHROPIC_API_KEY",description:"API key for Anthropic Claude models"},{key:"TOGETHER_API_KEY",description:"API key for Together (via LiteLLM, e.g. together_ai/* models)"},{key:"AZURE_API_KEY",description:"API key for Azure OpenAI Service"},{key:"AZURE_API_BASE",description:"Base URL for Azure OpenAI endpoint (e.g., https://your-resource.openai.azure.com)"},{key:"AZURE_API_VERSION",description:"API version for Azure OpenAI (e.g., 2024-02-15-preview)"},{key:"GOOGLE_GENAI_USE_VERTEXAI",description:'Set to "1" to use Vertex AI instead of API key'},{key:"GOOGLE_CLOUD_PROJECT",description:"Google Cloud project ID for Vertex AI"},{key:"GOOGLE_CLOUD_REGION",description:"Google Cloud region for Vertex AI (e.g., us-central1)"}];function Oj(e){return/^[a-zA-Z0-9_]+$/.test(e)}function $j(){var H;const{project:e,updateProject:t}=yt(),[n,r]=k.useState(null);if(!e)return null;const{app:i}=e;function s(y){t({app:{...i,...y}})}function a(y){if(y===""){r(null),s({name:y});return}Oj(y)?r(null):r("Name can only contain letters, numbers, and underscores"),s({name:y})}function l(){const y={name:`state_key_${i.state_keys.length+1}`,description:"",type:"string",scope:"session"};s({state_keys:[...i.state_keys,y]})}function c(y,N){const $=[...i.state_keys];$[y]={...$[y],...N},s({state_keys:$})}function u(y){s({state_keys:i.state_keys.filter((N,$)=>$!==y)})}function d(y="ReflectAndRetryToolPlugin"){let N;switch(y){case"ReflectAndRetryToolPlugin":N={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1};break;case"ContextFilterPlugin":N={type:"ContextFilterPlugin",name:"context_filter",num_invocations_to_keep:5};break;case"LoggingPlugin":N={type:"LoggingPlugin",name:"logging"};break;case"GlobalInstructionPlugin":N={type:"GlobalInstructionPlugin",name:"global_instruction",global_instruction:""};break;case"SaveFilesAsArtifactsPlugin":N={type:"SaveFilesAsArtifactsPlugin",name:"save_files"};break;case"MultimodalToolResultsPlugin":N={type:"MultimodalToolResultsPlugin",name:"multimodal_tools"};break;default:N={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1}}s({plugins:[...i.plugins,N]})}function f(y,N){const $=[...i.plugins];$[y]={...$[y],...N},s({plugins:$})}function p(y){s({plugins:i.plugins.filter((N,$)=>$!==y)})}const h=i.sandbox||{enabled:!1,allow_all_network:!1,allowlist:{auto:[],user:[]},unknown_action:"ask",approval_timeout:30,agent_memory_limit_mb:512,agent_cpu_limit:1,mcp_memory_limit_mb:256,mcp_cpu_limit:.5,run_timeout:3600,volume_mounts:[]},m=((H=h.allowlist)==null?void 0:H.user)||[],b=h.volume_mounts||[];function j(y){s({sandbox:{...h,...y}})}async function g(y){const N=i.id;try{await fetch(`/api/sandbox/${N}/allowlist/sync`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({patterns:y.map($=>({pattern:$.pattern,pattern_type:$.pattern_type})).filter($=>$.pattern)})})}catch($){console.debug("Could not sync allowlist to gateway:",$)}}function x(){const y={id:`pattern_${Date.now().toString(36)}`,pattern:"",pattern_type:"exact",source:"user",added_at:new Date().toISOString()},N={...h.allowlist,user:[...m,y]};j({allowlist:N})}function v(y,N){const $=[...m];$[y]={...$[y],...N};const ne=$;j({allowlist:{...h.allowlist,user:ne}}),N.pattern&&g(ne)}function _(y){const N=m.filter(($,ne)=>ne!==y);j({allowlist:{...h.allowlist,user:N}})}function T(){const y={host_path:"",container_path:"/mnt/data",mode:"ro"};j({volume_mounts:[...b,y]})}function C(y,N){const $=[...b];$[y]={...$[y],...N},j({volume_mounts:$})}function L(y){const N=b.filter(($,ne)=>ne!==y);j({volume_mounts:N})}const E=i.models||[];function U(){const y=`model_${Date.now().toString(36)}`,N={id:y,name:"New Model",provider:"gemini",model_name:"gemini-2.0-flash",is_default:E.length===0};s({models:[...E,N],default_model_id:E.length===0?y:i.default_model_id})}function z(y,N){const $=E.map(ne=>ne.id===y?{...ne,...N}:ne);s({models:$})}function I(y){var ne;const N=E.filter(de=>de.id!==y),$=i.default_model_id===y?((ne=N[0])==null?void 0:ne.id)||void 0:i.default_model_id;s({models:N,default_model_id:$})}function q(y){s({default_model_id:y})}const G=i.env_vars||{},[A,O]=k.useState({}),[M,S]=k.useState("");function R(y=""){const N=y||M.trim();!N||G[N]!==void 0||(s({env_vars:{...G,[N]:""}}),S(""))}function P(y,N){s({env_vars:{...G,[y]:N}})}function w(y){const N={...G};delete N[y],s({env_vars:N})}function W(y){O(N=>({...N,[y]:!N[y]}))}return o.jsxs("div",{className:"app-config",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("section",{className:"section",children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(Ej,{size:20}),"Basic Information"]})}),o.jsxs("div",{className:"form-grid",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"App Name"}),o.jsx("input",{type:"text",value:i.name,onChange:y=>a(y.target.value),style:{borderColor:n?"var(--error)":void 0}}),n&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:4},children:n})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Root Agent"}),o.jsxs("select",{value:i.root_agent_id||"",onChange:y=>s({root_agent_id:y.target.value||void 0}),children:[o.jsx("option",{value:"",children:"Select an agent..."}),e.agents.map(y=>o.jsx("option",{value:y.id,children:y.name},y.id))]})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(Fn,{size:20}),"Services"]}),o.jsx("span",{className:"section-hint",children:"Configure session, memory, and artifact storage backends"})]}),o.jsxs("div",{className:"form-grid",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Session Service"}),o.jsxs("select",{value:i.session_service_uri.split("://")[0],onChange:y=>{const N=y.target.value;s({session_service_uri:{memory:"memory://",file:"file://~/.adk-playground/sessions",sqlite:"sqlite://~/.adk-playground/sessions.db",postgresql:"postgresql://user:pass@localhost:5432/adk_sessions",mysql:"mysql://user:pass@localhost:3306/adk_sessions",agentengine:"agentengine://project/us-central1/engine-id"}[N]||N+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),o.jsx("option",{value:"file",children:"File System (JSON)"}),o.jsx("option",{value:"sqlite",children:"SQLite (local)"}),o.jsx("option",{value:"postgresql",children:"PostgreSQL"}),o.jsx("option",{value:"mysql",children:"MySQL"}),o.jsx("option",{value:"agentengine",children:"Vertex AI Agent Engine"})]}),i.session_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.session_service_uri.replace("file://",""),onChange:y=>s({session_service_uri:"file://"+y.target.value}),placeholder:"~/.adk-playground/sessions",style:{marginTop:8}}),i.session_service_uri.startsWith("sqlite://")&&o.jsx("input",{type:"text",value:i.session_service_uri.replace("sqlite://",""),onChange:y=>s({session_service_uri:"sqlite://"+y.target.value}),placeholder:"~/.adk-playground/sessions.db",style:{marginTop:8}}),(i.session_service_uri.startsWith("postgresql://")||i.session_service_uri.startsWith("mysql://"))&&o.jsx("input",{type:"text",value:i.session_service_uri,onChange:y=>s({session_service_uri:y.target.value}),placeholder:"postgresql://user:pass@localhost:5432/db",style:{marginTop:8}}),i.session_service_uri.startsWith("agentengine://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[2]||"",onChange:y=>{const N=i.session_service_uri.split("/");N[2]=y.target.value,s({session_service_uri:N.join("/")})},placeholder:"project-id"}),o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[3]||"",onChange:y=>{const N=i.session_service_uri.split("/");N[3]=y.target.value,s({session_service_uri:N.join("/")})},placeholder:"location (e.g., us-central1)"}),o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[4]||"",onChange:y=>{const N=i.session_service_uri.split("/");N[4]=y.target.value,s({session_service_uri:N.join("/")})},placeholder:"agent-engine-id"})]}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.session_service_uri.startsWith("memory://")&&"Sessions stored in memory, lost on restart",i.session_service_uri.startsWith("file://")&&"Sessions stored as JSON files, preserves UI events",i.session_service_uri.startsWith("sqlite://")&&"Persists to local SQLite file",i.session_service_uri.startsWith("postgresql://")&&"Production-ready PostgreSQL backend",i.session_service_uri.startsWith("mysql://")&&"Production-ready MySQL backend",i.session_service_uri.startsWith("agentengine://")&&"Vertex AI Agent Engine managed sessions"]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Memory Service"}),o.jsxs("select",{value:i.memory_service_uri.split("://")[0],onChange:y=>{const N=y.target.value;s({memory_service_uri:{memory:"memory://",file:"file://~/.adk-playground/memory",rag:"rag://rag-corpus-id",agentengine:"agentengine://project/us-central1/engine-id"}[N]||N+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (keyword matching)"}),o.jsx("option",{value:"file",children:"File System (keyword matching)"}),o.jsx("option",{value:"rag",children:"Vertex AI RAG"}),o.jsx("option",{value:"agentengine",children:"Vertex AI Memory Bank"})]}),i.memory_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.memory_service_uri.replace("file://",""),onChange:y=>s({memory_service_uri:"file://"+y.target.value}),placeholder:"~/.adk-playground/memory",style:{marginTop:8}}),i.memory_service_uri.startsWith("rag://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.memory_service_uri.replace("rag://",""),onChange:y=>s({memory_service_uri:"rag://"+y.target.value}),placeholder:"rag-corpus-id or full resource path"}),o.jsx("span",{className:"help-text",style:{fontSize:11,color:"var(--text-dim)"},children:"Format: projects/PROJECT/locations/LOCATION/ragCorpora/CORPUS_ID"})]}),i.memory_service_uri.startsWith("agentengine://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[2]||"",onChange:y=>{const N=i.memory_service_uri.split("/");N[2]=y.target.value,s({memory_service_uri:N.join("/")})},placeholder:"project-id"}),o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[3]||"",onChange:y=>{const N=i.memory_service_uri.split("/");N[3]=y.target.value,s({memory_service_uri:N.join("/")})},placeholder:"location (e.g., us-central1)"}),o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[4]||"",onChange:y=>{const N=i.memory_service_uri.split("/");N[4]=y.target.value,s({memory_service_uri:N.join("/")})},placeholder:"agent-engine-id"})]}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.memory_service_uri.startsWith("memory://")&&"Simple keyword matching, good for prototyping",i.memory_service_uri.startsWith("file://")&&"Persists memories as JSON files",i.memory_service_uri.startsWith("rag://")&&"Semantic search using Vertex AI RAG corpus",i.memory_service_uri.startsWith("agentengine://")&&"Managed memory via Agent Engine Memory Bank"]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Artifact Service"}),o.jsxs("select",{value:i.artifact_service_uri.split("://")[0]==="gs"?"gs":i.artifact_service_uri.split("://")[0],onChange:y=>{const N=y.target.value;s({artifact_service_uri:{memory:"memory://",file:"file://~/.adk-playground/artifacts",gs:"gs://your-bucket-name"}[N]||N+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),o.jsx("option",{value:"file",children:"File System"}),o.jsx("option",{value:"gs",children:"Google Cloud Storage"})]}),i.artifact_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.artifact_service_uri.replace("file://",""),onChange:y=>s({artifact_service_uri:"file://"+y.target.value}),placeholder:"~/.adk-playground/artifacts",style:{marginTop:8}}),i.artifact_service_uri.startsWith("gs://")&&o.jsx("input",{type:"text",value:i.artifact_service_uri.replace("gs://",""),onChange:y=>s({artifact_service_uri:"gs://"+y.target.value}),placeholder:"bucket-name/optional-prefix",style:{marginTop:8}}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.artifact_service_uri.startsWith("memory://")&&"Artifacts stored in memory, lost on restart",i.artifact_service_uri.startsWith("file://")&&"Persists to local filesystem",i.artifact_service_uri.startsWith("gs://")&&"Production-ready Google Cloud Storage backend"]})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(Pu,{size:20}),"Environment Variables"]})}),o.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginBottom:16},children:"Set API keys and other environment variables. These are passed to the agent runtime."}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16},children:Ij.filter(y=>G[y.key]===void 0).map(y=>o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>R(y.key),title:y.description,children:[o.jsx(nt,{size:12}),y.key]},y.key))}),Object.keys(G).length===0?o.jsx("p",{className:"empty-message",children:"No environment variables set. Click a button above to add common variables, or add a custom one below."}):Object.entries(G).map(([y,N])=>o.jsxs("div",{className:"list-item",style:{alignItems:"center"},children:[o.jsxs("div",{style:{flex:1,display:"flex",gap:12,alignItems:"center"},children:[o.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:13,minWidth:200},children:y}),o.jsxs("div",{style:{flex:1,display:"flex",gap:8,alignItems:"center"},children:[o.jsx("input",{type:A[y]?"text":"password",value:N,onChange:$=>P(y,$.target.value),placeholder:"Enter value...",style:{flex:1}}),o.jsx("button",{className:"delete-item",onClick:()=>W(y),title:A[y]?"Hide value":"Show value",children:A[y]?o.jsx(gj,{size:16}):o.jsx(Wr,{size:16})})]})]}),o.jsx("button",{className:"delete-item",onClick:()=>w(y),children:o.jsx(Je,{size:16})})]},y)),o.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[o.jsx("input",{type:"text",value:M,onChange:y=>S(y.target.value.toUpperCase().replace(/[^A-Z0-9_]/g,"")),placeholder:"CUSTOM_VAR_NAME",style:{flex:1,fontFamily:"var(--font-mono)"},onKeyDown:y=>y.key==="Enter"&&R()}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>R(),disabled:!M.trim(),children:[o.jsx(nt,{size:14}),"Add Variable"]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(rp,{size:20}),"Models"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:U,children:[o.jsx(nt,{size:14}),"Add Model"]})]}),E.length===0?o.jsx("p",{className:"empty-message",children:"No models configured. Add models that agents can use."}):E.map(y=>o.jsxs("div",{className:"model-card",children:[o.jsxs("div",{className:"model-card-header",children:[o.jsx("input",{type:"text",value:y.name,onChange:N=>z(y.id,{name:N.target.value}),placeholder:"Model name",className:"model-name-input"}),o.jsx("button",{className:`default-model-btn ${i.default_model_id===y.id?"is-default":""}`,onClick:()=>q(y.id),title:i.default_model_id===y.id?"Default model":"Set as default",children:o.jsx(_v,{size:14,fill:i.default_model_id===y.id?"currentColor":"none"})}),o.jsx("button",{className:"delete-item",onClick:()=>I(y.id),children:o.jsx(Je,{size:16})})]}),o.jsx("div",{className:"model-card-body",children:o.jsx(Cv,{projectId:e.id,values:y,onChange:N=>z(y.id,N)})})]},y.id))]}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20},children:[o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(op,{size:20}),"State Keys"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:l,children:[o.jsx(nt,{size:14}),"Add"]})]}),i.state_keys.length===0?o.jsx("p",{className:"empty-message",children:"No state keys. Auto-created when you add LlmAgents."}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:i.state_keys.map((y,N)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"6px 8px",background:"var(--bg-secondary)",borderRadius:4},children:[o.jsx("input",{type:"text",value:y.name,onChange:$=>c(N,{name:$.target.value}),placeholder:"Key name",style:{flex:1,minWidth:0,padding:"4px 8px",fontSize:12}}),o.jsxs("select",{value:y.type,onChange:$=>c(N,{type:$.target.value}),style:{width:60,flexShrink:0,padding:"4px 6px",fontSize:11},children:[o.jsx("option",{value:"string",children:"str"}),o.jsx("option",{value:"number",children:"num"}),o.jsx("option",{value:"boolean",children:"bool"}),o.jsx("option",{value:"object",children:"obj"}),o.jsx("option",{value:"array",children:"arr"})]}),o.jsx("button",{className:"delete-item",onClick:()=>u(N),style:{padding:4,flexShrink:0},children:o.jsx(Je,{size:12})})]},N))})]}),o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(cp,{size:20}),"Advanced Options"]})}),o.jsxs("div",{className:"toggle-group",children:[o.jsx("div",{className:`toggle ${i.compaction.enabled?"active":""}`,onClick:()=>s({compaction:{...i.compaction,enabled:!i.compaction.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Event Compaction"}),o.jsx("span",{children:"Summarize old events"})]}),i.compaction.enabled&&o.jsx("input",{type:"number",value:i.compaction.max_events,onChange:y=>s({compaction:{...i.compaction,max_events:parseInt(y.target.value)||100}}),style:{width:60,padding:"4px 6px",fontSize:12},placeholder:"Max"})]}),o.jsxs("div",{className:"toggle-group",style:{marginTop:10},children:[o.jsx("div",{className:`toggle ${i.context_cache.enabled?"active":""}`,onClick:()=>s({context_cache:{...i.context_cache,enabled:!i.context_cache.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Context Caching"}),o.jsx("span",{children:"Cache static instructions"})]}),i.context_cache.enabled&&o.jsx("input",{type:"number",value:i.context_cache.ttl_seconds,onChange:y=>s({context_cache:{...i.context_cache,ttl_seconds:parseInt(y.target.value)||3600}}),style:{width:70,padding:"4px 6px",fontSize:12},placeholder:"TTL"})]}),o.jsxs("div",{className:"toggle-group",style:{marginTop:10},children:[o.jsx("div",{className:`toggle ${i.resumability.enabled?"active":""}`,onClick:()=>s({resumability:{...i.resumability,enabled:!i.resumability.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Resumability"}),o.jsx("span",{children:"Pause/resume execution"})]})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(rn,{size:20}),"Plugins"]}),o.jsx("div",{className:"plugin-add-dropdown",children:o.jsxs("select",{className:"btn btn-secondary btn-sm",value:"",onChange:y=>{y.target.value&&(d(y.target.value),y.target.value="")},style:{paddingRight:8},children:[o.jsx("option",{value:"",children:"+ Add Plugin..."}),o.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),o.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),o.jsx("option",{value:"LoggingPlugin",children:"Logging"}),o.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),o.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),o.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]})})]}),i.plugins.length===0?o.jsx("p",{className:"empty-message",children:"No plugins configured. Add plugins to extend agent functionality."}):i.plugins.map((y,N)=>o.jsxs("div",{className:"list-item",style:{flexDirection:"column",gap:12},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",gap:12},children:[o.jsxs("select",{value:y.type,onChange:$=>f(N,{type:$.target.value}),style:{flex:1},children:[o.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),o.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),o.jsx("option",{value:"LoggingPlugin",children:"Logging"}),o.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),o.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),o.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]}),o.jsx("button",{className:"delete-item",onClick:()=>p(N),children:o.jsx(Je,{size:16})})]}),y.type==="ReflectAndRetryToolPlugin"&&o.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",style:{flex:0},children:[o.jsx("label",{style:{fontSize:12},children:"Max Retries"}),o.jsx("input",{type:"number",min:"0",max:"10",value:y.max_retries??3,onChange:$=>f(N,{max_retries:parseInt($.target.value)||0}),style:{width:70}})]}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:y.throw_exception_if_retry_exceeded??!1,onChange:$=>f(N,{throw_exception_if_retry_exceeded:$.target.checked})}),o.jsx("span",{className:"toggle-slider"})]}),"Throw exception if retry exceeded"]})]}),y.type==="ContextFilterPlugin"&&o.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",style:{flex:0},children:[o.jsx("label",{style:{fontSize:12},children:"Invocations to Keep"}),o.jsx("input",{type:"number",min:"1",max:"100",value:y.num_invocations_to_keep??5,onChange:$=>f(N,{num_invocations_to_keep:parseInt($.target.value)||1}),style:{width:70}})]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Keeps only the last N conversation turns to reduce context size"})]}),y.type==="LoggingPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Logs all agent events (messages, tool calls, responses) to the console"})}),y.type==="GlobalInstructionPlugin"&&o.jsxs("div",{style:{width:"100%",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{style:{fontSize:12},children:"Global Instruction"}),o.jsx("textarea",{value:y.global_instruction??"",onChange:$=>f(N,{global_instruction:$.target.value}),placeholder:"Instructions that apply to all agents in the app...",rows:3,style:{width:"100%"}})]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"This instruction is prepended to every agent's system prompt"})]}),y.type==="SaveFilesAsArtifactsPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Automatically saves files uploaded in user messages as artifacts for later retrieval"})}),y.type==="MultimodalToolResultsPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Allows tools to return multimodal content (images, files) directly to the LLM"})})]},N))]}),o.jsxs("section",{className:"section",children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(Ai,{size:20}),"Sandbox Limits"]})}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:12},children:[o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Run Timeout"}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("input",{type:"number",value:h.run_timeout,onChange:y=>j({run_timeout:parseInt(y.target.value)||3600}),min:60,max:86400,step:60,style:{width:100}}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)"},children:h.run_timeout>=3600?`${Math.floor(h.run_timeout/3600)}h ${Math.floor(h.run_timeout%3600/60)}m`:`${Math.floor(h.run_timeout/60)}m`})]}),o.jsx("p",{className:"field-hint",children:"Max time for agent run (seconds)"})]}),o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Agent Memory"}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("input",{type:"number",value:h.agent_memory_limit_mb,onChange:y=>j({agent_memory_limit_mb:parseInt(y.target.value)||512}),min:128,max:8192,step:128,style:{width:100}}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)"},children:"MB"})]}),o.jsx("p",{className:"field-hint",children:"Memory limit for agent container"})]}),o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Agent CPU"}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("input",{type:"number",value:h.agent_cpu_limit,onChange:y=>j({agent_cpu_limit:parseFloat(y.target.value)||1}),min:.25,max:8,step:.25,style:{width:100}}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)"},children:"cores"})]}),o.jsx("p",{className:"field-hint",children:"CPU limit for agent container"})]})]})]}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20},children:[o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(jv,{size:20}),"Network Allowlist"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:x,children:[o.jsx(nt,{size:14}),"Add"]})]}),o.jsxs("div",{className:"toggle-group",style:{marginBottom:10},children:[o.jsx("div",{className:`toggle ${h.allow_all_network?"active":""}`,onClick:()=>j({allow_all_network:!h.allow_all_network,unknown_action:h.allow_all_network?h.unknown_action:"allow"})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Allow all network connections"}),o.jsx("span",{children:"Disables approval/deny; still routes through the sandbox proxy"})]})]}),m.length===0?o.jsx("p",{className:"empty-message",style:{fontSize:11},children:"No custom patterns. LLM APIs allowed by default."}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:m.map((y,N)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"6px 8px",background:"var(--bg-secondary)",borderRadius:4},children:[o.jsx(ip,{size:14,style:{color:"var(--text-muted)",flexShrink:0}}),o.jsx("input",{type:"text",value:y.pattern,onChange:$=>v(N,{pattern:$.target.value}),placeholder:"*.example.com",style:{flex:1,padding:"4px 6px",fontSize:11}}),o.jsxs("select",{value:y.pattern_type,onChange:$=>v(N,{pattern_type:$.target.value}),style:{padding:"4px",fontSize:10,width:70},children:[o.jsx("option",{value:"exact",children:"exact"}),o.jsx("option",{value:"wildcard",children:"wild"}),o.jsx("option",{value:"regex",children:"regex"})]}),o.jsx("button",{className:"delete-item",onClick:()=>_(N),style:{padding:4},children:o.jsx(Je,{size:12})})]},y.id||N))})]}),o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(wj,{size:20}),"Volume Mounts"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:T,children:[o.jsx(nt,{size:14}),"Add"]})]}),b.length===0?o.jsx("p",{className:"empty-message",style:{fontSize:11},children:"No mounts. Add to give sandbox file access."}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:b.map((y,N)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"6px 8px",background:"var(--bg-secondary)",borderRadius:4},children:[o.jsx(xv,{size:14,style:{color:"var(--text-muted)",flexShrink:0}}),o.jsx("input",{type:"text",value:y.host_path,onChange:$=>C(N,{host_path:$.target.value}),placeholder:"~/path",style:{flex:1,padding:"4px 6px",fontSize:11},title:"Host path"}),o.jsx("span",{style:{color:"var(--text-muted)",fontSize:10},children:"→"}),o.jsx("input",{type:"text",value:y.container_path,onChange:$=>C(N,{container_path:$.target.value}),placeholder:"/mnt",style:{width:70,padding:"4px 6px",fontSize:11},title:"Container path"}),o.jsxs("select",{value:y.mode,onChange:$=>C(N,{mode:$.target.value}),style:{padding:"4px",fontSize:10,width:50},children:[o.jsx("option",{value:"ro",children:"ro"}),o.jsx("option",{value:"rw",children:"rw"})]}),o.jsx("button",{className:"delete-item",onClick:()=>L(N),style:{padding:4},children:o.jsx(Je,{size:12})})]},N))})]})]})]})}const Dj="modulepreload",Fj=function(e){return"/"+e},$h={},Bj=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=Fj(c),c in $h)return;$h[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Dj,u||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((p,h)=>{f.addEventListener("load",p),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})};function Dh(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Uj(e){if(Array.isArray(e))return e}function Wj(e,t,n){return(t=Yj(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vj(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,s,a,l=[],c=!0,u=!1;try{if(s=(n=n.call(e)).next,t!==0)for(;!(c=(r=s.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(d){u=!0,i=d}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function Hj(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Bh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Fh(Object(n),!0).forEach(function(r){Wj(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function qj(e,t){if(e==null)return{};var n,r,i=Jj(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Jj(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Kj(e,t){return Uj(e)||Vj(e,t)||Qj(e,t)||Hj()}function Gj(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Yj(e){var t=Gj(e,"string");return typeof t=="symbol"?t:t+""}function Qj(e,t){if(e){if(typeof e=="string")return Dh(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Dh(e,t):void 0}}function Xj(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Uh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Wh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Uh(Object(n),!0).forEach(function(r){Xj(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Uh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Zj(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,s){return s(i)},r)}}function po(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function Ha(e){return{}.toString.call(e).includes("Object")}function e2(e){return!Object.keys(e).length}function Go(e){return typeof e=="function"}function t2(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function n2(e,t){return Ha(t)||hr("changeType"),Object.keys(t).some(function(n){return!t2(e,n)})&&hr("changeField"),t}function r2(e){Go(e)||hr("selectorType")}function i2(e){Go(e)||Ha(e)||hr("handlerType"),Ha(e)&&Object.values(e).some(function(t){return!Go(t)})&&hr("handlersType")}function o2(e){e||hr("initialIsRequired"),Ha(e)||hr("initialType"),e2(e)&&hr("initialContent")}function s2(e,t){throw new Error(e[t]||e.default)}var a2={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},hr=po(s2)(a2),$s={changes:n2,selector:r2,handler:i2,initial:o2};function l2(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};$s.initial(e),$s.handler(t);var n={current:e},r=po(d2)(n,t),i=po(u2)(n),s=po($s.changes)(e),a=po(c2)(n);function l(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return $s.selector(u),u(n.current)}function c(u){Zj(r,i,s,a)(u)}return[l,c]}function c2(e,t){return Go(t)?t(e.current):t}function u2(e,t){return e.current=Wh(Wh({},e.current),t),t}function d2(e,t,n){return Go(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var p2={create:l2},f2={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function h2(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function m2(e){return{}.toString.call(e).includes("Object")}function g2(e){return e||Vh("configIsRequired"),m2(e)||Vh("configType"),e.urls?(x2(),{paths:{vs:e.urls.monacoBase}}):e}function x2(){console.warn(Nv.deprecation)}function y2(e,t){throw new Error(e[t]||e.default)}var Nv={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Vh=h2(y2)(Nv),v2={config:g2},b2=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(s,a){return a(s)},i)}};function Ev(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],Ev(e[n],t[n]))}),Bh(Bh({},e),t)}var w2={type:"cancelation",msg:"operation is manually canceled"};function fc(e){var t=!1,n=new Promise(function(r,i){e.then(function(s){return t?i(w2):r(s)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var k2=["monaco"],j2=p2.create({config:f2,isInitialized:!1,resolve:null,reject:null,monaco:null}),zv=Kj(j2,2),ds=zv[0],jl=zv[1];function _2(e){var t=v2.config(e),n=t.monaco,r=qj(t,k2);jl(function(i){return{config:Ev(i.config,r),monaco:n}})}function S2(){var e=ds(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(jl({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),fc(hc);if(window.monaco&&window.monaco.editor)return Tv(window.monaco),e.resolve(window.monaco),fc(hc);b2(C2,E2)(z2)}return fc(hc)}function C2(e){return document.body.appendChild(e)}function N2(e){var t=document.createElement("script");return e&&(t.src=e),t}function E2(e){var t=ds(function(r){var i=r.config,s=r.reject;return{config:i,reject:s}}),n=N2("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function z2(){var e=ds(function(n){var r=n.config,i=n.resolve,s=n.reject;return{config:r,resolve:i,reject:s}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;Tv(r),e.resolve(r)},function(n){e.reject(n)})}function Tv(e){ds().monaco||jl({monaco:e})}function T2(){return ds(function(e){var t=e.monaco;return t})}var hc=new Promise(function(e,t){return jl({resolve:e,reject:t})}),Av={config:_2,init:S2,__getMonacoInstance:T2},A2={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},mc=A2,M2={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},L2=M2;function P2({children:e}){return qt.createElement("div",{style:L2.container},e)}var R2=P2,I2=R2;function O2({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:s,wrapperProps:a}){return qt.createElement("section",{style:{...mc.wrapper,width:e,height:t},...a},!n&&qt.createElement(I2,null,r),qt.createElement("div",{ref:i,style:{...mc.fullWidth,...!n&&mc.hide},className:s}))}var $2=O2,Mv=k.memo($2);function D2(e){k.useEffect(e,[])}var Lv=D2;function F2(e,t,n=!0){let r=k.useRef(!0);k.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var Wt=F2;function So(){}function di(e,t,n,r){return B2(e,r)||U2(e,t,n,r)}function B2(e,t){return e.editor.getModel(Pv(e,t))}function U2(e,t,n,r){return e.editor.createModel(t,n,r?Pv(e,r):void 0)}function Pv(e,t){return e.Uri.parse(t)}function W2({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:s,modifiedModelPath:a,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:c=!1,theme:u="light",loading:d="Loading...",options:f={},height:p="100%",width:h="100%",className:m,wrapperProps:b={},beforeMount:j=So,onMount:g=So}){let[x,v]=k.useState(!1),[_,T]=k.useState(!0),C=k.useRef(null),L=k.useRef(null),E=k.useRef(null),U=k.useRef(g),z=k.useRef(j),I=k.useRef(!1);Lv(()=>{let O=Av.init();return O.then(M=>(L.current=M)&&T(!1)).catch(M=>(M==null?void 0:M.type)!=="cancelation"&&console.error("Monaco initialization: error:",M)),()=>C.current?A():O.cancel()}),Wt(()=>{if(C.current&&L.current){let O=C.current.getOriginalEditor(),M=di(L.current,e||"",r||n||"text",s||"");M!==O.getModel()&&O.setModel(M)}},[s],x),Wt(()=>{if(C.current&&L.current){let O=C.current.getModifiedEditor(),M=di(L.current,t||"",i||n||"text",a||"");M!==O.getModel()&&O.setModel(M)}},[a],x),Wt(()=>{let O=C.current.getModifiedEditor();O.getOption(L.current.editor.EditorOption.readOnly)?O.setValue(t||""):t!==O.getValue()&&(O.executeEdits("",[{range:O.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),O.pushUndoStop())},[t],x),Wt(()=>{var O,M;(M=(O=C.current)==null?void 0:O.getModel())==null||M.original.setValue(e||"")},[e],x),Wt(()=>{let{original:O,modified:M}=C.current.getModel();L.current.editor.setModelLanguage(O,r||n||"text"),L.current.editor.setModelLanguage(M,i||n||"text")},[n,r,i],x),Wt(()=>{var O;(O=L.current)==null||O.editor.setTheme(u)},[u],x),Wt(()=>{var O;(O=C.current)==null||O.updateOptions(f)},[f],x);let q=k.useCallback(()=>{var S;if(!L.current)return;z.current(L.current);let O=di(L.current,e||"",r||n||"text",s||""),M=di(L.current,t||"",i||n||"text",a||"");(S=C.current)==null||S.setModel({original:O,modified:M})},[n,t,i,e,r,s,a]),G=k.useCallback(()=>{var O;!I.current&&E.current&&(C.current=L.current.editor.createDiffEditor(E.current,{automaticLayout:!0,...f}),q(),(O=L.current)==null||O.editor.setTheme(u),v(!0),I.current=!0)},[f,u,q]);k.useEffect(()=>{x&&U.current(C.current,L.current)},[x]),k.useEffect(()=>{!_&&!x&&G()},[_,x,G]);function A(){var M,S,R,P;let O=(M=C.current)==null?void 0:M.getModel();l||((S=O==null?void 0:O.original)==null||S.dispose()),c||((R=O==null?void 0:O.modified)==null||R.dispose()),(P=C.current)==null||P.dispose()}return qt.createElement(Mv,{width:h,height:p,isEditorReady:x,loading:d,_ref:E,className:m,wrapperProps:b})}var V2=W2;k.memo(V2);function H2(e){let t=k.useRef();return k.useEffect(()=>{t.current=e},[e]),t.current}var q2=H2,Ds=new Map;function J2({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:s,theme:a="light",line:l,loading:c="Loading...",options:u={},overrideServices:d={},saveViewState:f=!0,keepCurrentModel:p=!1,width:h="100%",height:m="100%",className:b,wrapperProps:j={},beforeMount:g=So,onMount:x=So,onChange:v,onValidate:_=So}){let[T,C]=k.useState(!1),[L,E]=k.useState(!0),U=k.useRef(null),z=k.useRef(null),I=k.useRef(null),q=k.useRef(x),G=k.useRef(g),A=k.useRef(),O=k.useRef(r),M=q2(s),S=k.useRef(!1),R=k.useRef(!1);Lv(()=>{let W=Av.init();return W.then(H=>(U.current=H)&&E(!1)).catch(H=>(H==null?void 0:H.type)!=="cancelation"&&console.error("Monaco initialization: error:",H)),()=>z.current?w():W.cancel()}),Wt(()=>{var H,y,N,$;let W=di(U.current,e||r||"",t||i||"",s||n||"");W!==((H=z.current)==null?void 0:H.getModel())&&(f&&Ds.set(M,(y=z.current)==null?void 0:y.saveViewState()),(N=z.current)==null||N.setModel(W),f&&(($=z.current)==null||$.restoreViewState(Ds.get(s))))},[s],T),Wt(()=>{var W;(W=z.current)==null||W.updateOptions(u)},[u],T),Wt(()=>{!z.current||r===void 0||(z.current.getOption(U.current.editor.EditorOption.readOnly)?z.current.setValue(r):r!==z.current.getValue()&&(R.current=!0,z.current.executeEdits("",[{range:z.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),z.current.pushUndoStop(),R.current=!1))},[r],T),Wt(()=>{var H,y;let W=(H=z.current)==null?void 0:H.getModel();W&&i&&((y=U.current)==null||y.editor.setModelLanguage(W,i))},[i],T),Wt(()=>{var W;l!==void 0&&((W=z.current)==null||W.revealLine(l))},[l],T),Wt(()=>{var W;(W=U.current)==null||W.editor.setTheme(a)},[a],T);let P=k.useCallback(()=>{var W;if(!(!I.current||!U.current)&&!S.current){G.current(U.current);let H=s||n,y=di(U.current,r||e||"",t||i||"",H||"");z.current=(W=U.current)==null?void 0:W.editor.create(I.current,{model:y,automaticLayout:!0,...u},d),f&&z.current.restoreViewState(Ds.get(H)),U.current.editor.setTheme(a),l!==void 0&&z.current.revealLine(l),C(!0),S.current=!0}},[e,t,n,r,i,s,u,d,f,a,l]);k.useEffect(()=>{T&&q.current(z.current,U.current)},[T]),k.useEffect(()=>{!L&&!T&&P()},[L,T,P]),O.current=r,k.useEffect(()=>{var W,H;T&&v&&((W=A.current)==null||W.dispose(),A.current=(H=z.current)==null?void 0:H.onDidChangeModelContent(y=>{R.current||v(z.current.getValue(),y)}))},[T,v]),k.useEffect(()=>{if(T){let W=U.current.editor.onDidChangeMarkers(H=>{var N;let y=(N=z.current.getModel())==null?void 0:N.uri;if(y&&H.find($=>$.path===y.path)){let $=U.current.editor.getModelMarkers({resource:y});_==null||_($)}});return()=>{W==null||W.dispose()}}return()=>{}},[T,_]);function w(){var W,H;(W=A.current)==null||W.dispose(),p?f&&Ds.set(s,z.current.saveViewState()):(H=z.current.getModel())==null||H.dispose(),z.current.dispose()}return qt.createElement(Mv,{width:h,height:m,isEditorReady:T,loading:c,_ref:I,className:b,wrapperProps:j})}var K2=J2,G2=k.memo(K2),on=G2;function Y2(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const Q2=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,X2=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Z2={};function Hh(e,t){return(Z2.jsx?X2:Q2).test(e)}const e_=/[ \t\n\f\r]/g;function t_(e){return typeof e=="object"?e.type==="text"?qh(e.value):!1:qh(e)}function qh(e){return e.replace(e_,"")===""}class ps{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}ps.prototype.normal={};ps.prototype.property={};ps.prototype.space=void 0;function Rv(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new ps(n,r,t)}function Iu(e){return e.toLowerCase()}class Ot{constructor(t,n){this.attribute=n,this.property=t}}Ot.prototype.attribute="";Ot.prototype.booleanish=!1;Ot.prototype.boolean=!1;Ot.prototype.commaOrSpaceSeparated=!1;Ot.prototype.commaSeparated=!1;Ot.prototype.defined=!1;Ot.prototype.mustUseProperty=!1;Ot.prototype.number=!1;Ot.prototype.overloadedBoolean=!1;Ot.prototype.property="";Ot.prototype.spaceSeparated=!1;Ot.prototype.space=void 0;let n_=0;const Te=Jr(),tt=Jr(),Ou=Jr(),ue=Jr(),Be=Jr(),yi=Jr(),Bt=Jr();function Jr(){return 2**++n_}const $u=Object.freeze(Object.defineProperty({__proto__:null,boolean:Te,booleanish:tt,commaOrSpaceSeparated:Bt,commaSeparated:yi,number:ue,overloadedBoolean:Ou,spaceSeparated:Be},Symbol.toStringTag,{value:"Module"})),gc=Object.keys($u);class up extends Ot{constructor(t,n,r,i){let s=-1;if(super(t,n),Jh(this,"space",i),typeof r=="number")for(;++s<gc.length;){const a=gc[s];Jh(this,gc[s],(r&$u[a])===$u[a])}}}up.prototype.defined=!0;function Jh(e,t,n){n&&(e[t]=n)}function Fi(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const s=new up(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(s.mustUseProperty=!0),t[r]=s,n[Iu(r)]=r,n[Iu(s.attribute)]=r}return new ps(t,n,e.space)}const Iv=Fi({properties:{ariaActiveDescendant:null,ariaAtomic:tt,ariaAutoComplete:null,ariaBusy:tt,ariaChecked:tt,ariaColCount:ue,ariaColIndex:ue,ariaColSpan:ue,ariaControls:Be,ariaCurrent:null,ariaDescribedBy:Be,ariaDetails:null,ariaDisabled:tt,ariaDropEffect:Be,ariaErrorMessage:null,ariaExpanded:tt,ariaFlowTo:Be,ariaGrabbed:tt,ariaHasPopup:null,ariaHidden:tt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Be,ariaLevel:ue,ariaLive:null,ariaModal:tt,ariaMultiLine:tt,ariaMultiSelectable:tt,ariaOrientation:null,ariaOwns:Be,ariaPlaceholder:null,ariaPosInSet:ue,ariaPressed:tt,ariaReadOnly:tt,ariaRelevant:null,ariaRequired:tt,ariaRoleDescription:Be,ariaRowCount:ue,ariaRowIndex:ue,ariaRowSpan:ue,ariaSelected:tt,ariaSetSize:ue,ariaSort:null,ariaValueMax:ue,ariaValueMin:ue,ariaValueNow:ue,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function Ov(e,t){return t in e?e[t]:t}function $v(e,t){return Ov(e,t.toLowerCase())}const r_=Fi({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:yi,acceptCharset:Be,accessKey:Be,action:null,allow:null,allowFullScreen:Te,allowPaymentRequest:Te,allowUserMedia:Te,alt:null,as:null,async:Te,autoCapitalize:null,autoComplete:Be,autoFocus:Te,autoPlay:Te,blocking:Be,capture:null,charSet:null,checked:Te,cite:null,className:Be,cols:ue,colSpan:null,content:null,contentEditable:tt,controls:Te,controlsList:Be,coords:ue|yi,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Te,defer:Te,dir:null,dirName:null,disabled:Te,download:Ou,draggable:tt,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Te,formTarget:null,headers:Be,height:ue,hidden:Ou,high:ue,href:null,hrefLang:null,htmlFor:Be,httpEquiv:Be,id:null,imageSizes:null,imageSrcSet:null,inert:Te,inputMode:null,integrity:null,is:null,isMap:Te,itemId:null,itemProp:Be,itemRef:Be,itemScope:Te,itemType:Be,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Te,low:ue,manifest:null,max:null,maxLength:ue,media:null,method:null,min:null,minLength:ue,multiple:Te,muted:Te,name:null,nonce:null,noModule:Te,noValidate:Te,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Te,optimum:ue,pattern:null,ping:Be,placeholder:null,playsInline:Te,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Te,referrerPolicy:null,rel:Be,required:Te,reversed:Te,rows:ue,rowSpan:ue,sandbox:Be,scope:null,scoped:Te,seamless:Te,selected:Te,shadowRootClonable:Te,shadowRootDelegatesFocus:Te,shadowRootMode:null,shape:null,size:ue,sizes:null,slot:null,span:ue,spellCheck:tt,src:null,srcDoc:null,srcLang:null,srcSet:null,start:ue,step:null,style:null,tabIndex:ue,target:null,title:null,translate:null,type:null,typeMustMatch:Te,useMap:null,value:tt,width:ue,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Be,axis:null,background:null,bgColor:null,border:ue,borderColor:null,bottomMargin:ue,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Te,declare:Te,event:null,face:null,frame:null,frameBorder:null,hSpace:ue,leftMargin:ue,link:null,longDesc:null,lowSrc:null,marginHeight:ue,marginWidth:ue,noResize:Te,noHref:Te,noShade:Te,noWrap:Te,object:null,profile:null,prompt:null,rev:null,rightMargin:ue,rules:null,scheme:null,scrolling:tt,standby:null,summary:null,text:null,topMargin:ue,valueType:null,version:null,vAlign:null,vLink:null,vSpace:ue,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Te,disableRemotePlayback:Te,prefix:null,property:null,results:ue,security:null,unselectable:null},space:"html",transform:$v}),i_=Fi({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Bt,accentHeight:ue,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:ue,amplitude:ue,arabicForm:null,ascent:ue,attributeName:null,attributeType:null,azimuth:ue,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:ue,by:null,calcMode:null,capHeight:ue,className:Be,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:ue,diffuseConstant:ue,direction:null,display:null,dur:null,divisor:ue,dominantBaseline:null,download:Te,dx:null,dy:null,edgeMode:null,editable:null,elevation:ue,enableBackground:null,end:null,event:null,exponent:ue,externalResourcesRequired:null,fill:null,fillOpacity:ue,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:yi,g2:yi,glyphName:yi,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:ue,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:ue,horizOriginX:ue,horizOriginY:ue,id:null,ideographic:ue,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:ue,k:ue,k1:ue,k2:ue,k3:ue,k4:ue,kernelMatrix:Bt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:ue,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:ue,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:ue,overlineThickness:ue,paintOrder:null,panose1:null,path:null,pathLength:ue,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Be,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:ue,pointsAtY:ue,pointsAtZ:ue,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Bt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Bt,rev:Bt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Bt,requiredFeatures:Bt,requiredFonts:Bt,requiredFormats:Bt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:ue,specularExponent:ue,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:ue,strikethroughThickness:ue,string:null,stroke:null,strokeDashArray:Bt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:ue,strokeOpacity:ue,strokeWidth:null,style:null,surfaceScale:ue,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Bt,tabIndex:ue,tableValues:null,target:null,targetX:ue,targetY:ue,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Bt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:ue,underlineThickness:ue,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:ue,values:null,vAlphabetic:ue,vMathematical:ue,vectorEffect:null,vHanging:ue,vIdeographic:ue,version:null,vertAdvY:ue,vertOriginX:ue,vertOriginY:ue,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:ue,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Ov}),Dv=Fi({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),Fv=Fi({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:$v}),Bv=Fi({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),o_={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},s_=/[A-Z]/g,Kh=/-[a-z]/g,a_=/^data[-\w.:]+$/i;function l_(e,t){const n=Iu(t);let r=t,i=Ot;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&a_.test(t)){if(t.charAt(4)==="-"){const s=t.slice(5).replace(Kh,u_);r="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=t.slice(4);if(!Kh.test(s)){let a=s.replace(s_,c_);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a}}i=up}return new i(r,t)}function c_(e){return"-"+e.toLowerCase()}function u_(e){return e.charAt(1).toUpperCase()}const d_=Rv([Iv,r_,Dv,Fv,Bv],"html"),dp=Rv([Iv,i_,Dv,Fv,Bv],"svg");function p_(e){return e.join(" ").trim()}var pp={},Gh=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,f_=/\n/g,h_=/^\s*/,m_=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,g_=/^:\s*/,x_=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,y_=/^[;\s]*/,v_=/^\s+|\s+$/g,b_=`
`,Yh="/",Qh="*",Nr="",w_="comment",k_="declaration";function j_(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(m){var b=m.match(f_);b&&(n+=b.length);var j=m.lastIndexOf(b_);r=~j?m.length-j:r+m.length}function s(){var m={line:n,column:r};return function(b){return b.position=new a(m),u(),b}}function a(m){this.start=m,this.end={line:n,column:r},this.source=t.source}a.prototype.content=e;function l(m){var b=new Error(t.source+":"+n+":"+r+": "+m);if(b.reason=m,b.filename=t.source,b.line=n,b.column=r,b.source=e,!t.silent)throw b}function c(m){var b=m.exec(e);if(b){var j=b[0];return i(j),e=e.slice(j.length),b}}function u(){c(h_)}function d(m){var b;for(m=m||[];b=f();)b!==!1&&m.push(b);return m}function f(){var m=s();if(!(Yh!=e.charAt(0)||Qh!=e.charAt(1))){for(var b=2;Nr!=e.charAt(b)&&(Qh!=e.charAt(b)||Yh!=e.charAt(b+1));)++b;if(b+=2,Nr===e.charAt(b-1))return l("End of comment missing");var j=e.slice(2,b-2);return r+=2,i(j),e=e.slice(b),r+=2,m({type:w_,comment:j})}}function p(){var m=s(),b=c(m_);if(b){if(f(),!c(g_))return l("property missing ':'");var j=c(x_),g=m({type:k_,property:Xh(b[0].replace(Gh,Nr)),value:j?Xh(j[0].replace(Gh,Nr)):Nr});return c(y_),g}}function h(){var m=[];d(m);for(var b;b=p();)b!==!1&&(m.push(b),d(m));return m}return u(),h()}function Xh(e){return e?e.replace(v_,Nr):Nr}var __=j_,S_=ga&&ga.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(pp,"__esModule",{value:!0});pp.default=N_;const C_=S_(__);function N_(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,C_.default)(e),i=typeof t=="function";return r.forEach(s=>{if(s.type!=="declaration")return;const{property:a,value:l}=s;i?t(a,l,s):l&&(n=n||{},n[a]=l)}),n}var _l={};Object.defineProperty(_l,"__esModule",{value:!0});_l.camelCase=void 0;var E_=/^--[a-zA-Z0-9_-]+$/,z_=/-([a-z])/g,T_=/^[^-]+$/,A_=/^-(webkit|moz|ms|o|khtml)-/,M_=/^-(ms)-/,L_=function(e){return!e||T_.test(e)||E_.test(e)},P_=function(e,t){return t.toUpperCase()},Zh=function(e,t){return"".concat(t,"-")},R_=function(e,t){return t===void 0&&(t={}),L_(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(M_,Zh):e=e.replace(A_,Zh),e.replace(z_,P_))};_l.camelCase=R_;var I_=ga&&ga.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},O_=I_(pp),$_=_l;function Du(e,t){var n={};return!e||typeof e!="string"||(0,O_.default)(e,function(r,i){r&&i&&(n[(0,$_.camelCase)(r,t)]=i)}),n}Du.default=Du;var D_=Du;const F_=nl(D_),Uv=Wv("end"),fp=Wv("start");function Wv(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function B_(e){const t=fp(e),n=Uv(e);if(t&&n)return{start:t,end:n}}function Co(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?em(e.position):"start"in e||"end"in e?em(e):"line"in e||"column"in e?Fu(e):""}function Fu(e){return tm(e&&e.line)+":"+tm(e&&e.column)}function em(e){return Fu(e&&e.start)+"-"+Fu(e&&e.end)}function tm(e){return e&&typeof e=="number"?e:1}class vt extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",s={},a=!1;if(n&&("line"in n&&"column"in n?s={place:n}:"start"in n&&"end"in n?s={place:n}:"type"in n?s={ancestors:[n],place:n.position}:s={...n}),typeof t=="string"?i=t:!s.cause&&t&&(a=!0,i=t.message,s.cause=t),!s.ruleId&&!s.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?s.ruleId=r:(s.source=r.slice(0,c),s.ruleId=r.slice(c+1))}if(!s.place&&s.ancestors&&s.ancestors){const c=s.ancestors[s.ancestors.length-1];c&&(s.place=c.position)}const l=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=Co(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=a&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}vt.prototype.file="";vt.prototype.name="";vt.prototype.reason="";vt.prototype.message="";vt.prototype.stack="";vt.prototype.column=void 0;vt.prototype.line=void 0;vt.prototype.ancestors=void 0;vt.prototype.cause=void 0;vt.prototype.fatal=void 0;vt.prototype.place=void 0;vt.prototype.ruleId=void 0;vt.prototype.source=void 0;const hp={}.hasOwnProperty,U_=new Map,W_=/[A-Z]/g,V_=new Set(["table","tbody","thead","tfoot","tr"]),H_=new Set(["td","th"]),Vv="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function q_(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=eS(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Z_(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?dp:d_,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},s=Hv(i,e,void 0);return s&&typeof s!="string"?s:i.create(e,i.Fragment,{children:s||void 0},void 0)}function Hv(e,t,n){if(t.type==="element")return J_(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return K_(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return Y_(e,t,n);if(t.type==="mdxjsEsm")return G_(e,t);if(t.type==="root")return Q_(e,t,n);if(t.type==="text")return X_(e,t)}function J_(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=dp,e.schema=i),e.ancestors.push(t);const s=Jv(e,t.tagName,!1),a=tS(e,t);let l=gp(e,t);return V_.has(t.tagName)&&(l=l.filter(function(c){return typeof c=="string"?!t_(c):!0})),qv(e,a,s,t),mp(a,l),e.ancestors.pop(),e.schema=r,e.create(t,s,a,n)}function K_(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Yo(e,t.position)}function G_(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Yo(e,t.position)}function Y_(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=dp,e.schema=i),e.ancestors.push(t);const s=t.name===null?e.Fragment:Jv(e,t.name,!0),a=nS(e,t),l=gp(e,t);return qv(e,a,s,t),mp(a,l),e.ancestors.pop(),e.schema=r,e.create(t,s,a,n)}function Q_(e,t,n){const r={};return mp(r,gp(e,t)),e.create(t,e.Fragment,r,n)}function X_(e,t){return t.value}function qv(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function mp(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function Z_(e,t,n){return r;function r(i,s,a,l){const u=Array.isArray(a.children)?n:t;return l?u(s,a,l):u(s,a)}}function eS(e,t){return n;function n(r,i,s,a){const l=Array.isArray(s.children),c=fp(r);return t(i,s,a,l,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function tS(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&hp.call(t.properties,i)){const s=rS(e,i,t.properties[i]);if(s){const[a,l]=s;e.tableCellAlignToStyle&&a==="align"&&typeof l=="string"&&H_.has(t.tagName)?r=l:n[a]=l}}if(r){const s=n.style||(n.style={});s[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function nS(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const s=r.data.estree.body[0];s.type;const a=s.expression;a.type;const l=a.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument))}else Yo(e,t.position);else{const i=r.name;let s;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const l=r.value.data.estree.body[0];l.type,s=e.evaluater.evaluateExpression(l.expression)}else Yo(e,t.position);else s=r.value===null?!0:r.value;n[i]=s}return n}function gp(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:U_;for(;++r<t.children.length;){const s=t.children[r];let a;if(e.passKeys){const c=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(c){const u=i.get(c)||0;a=c+"-"+u,i.set(c,u+1)}}const l=Hv(e,s,a);l!==void 0&&n.push(l)}return n}function rS(e,t,n){const r=l_(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Y2(n):p_(n)),r.property==="style"){let i=typeof n=="object"?n:iS(e,String(n));return e.stylePropertyNameCase==="css"&&(i=oS(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?o_[r.property]||r.property:r.attribute,n]}}function iS(e,t){try{return F_(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new vt("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Vv+"#cannot-parse-style-attribute",i}}function Jv(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let s=-1,a;for(;++s<i.length;){const l=Hh(i[s])?{type:"Identifier",name:i[s]}:{type:"Literal",value:i[s]};a=a?{type:"MemberExpression",object:a,property:l,computed:!!(s&&l.type==="Literal"),optional:!1}:l}r=a}else r=Hh(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return hp.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Yo(e)}function Yo(e,t){const n=new vt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Vv+"#cannot-handle-mdx-estrees-without-createevaluater",n}function oS(e){const t={};let n;for(n in e)hp.call(e,n)&&(t[sS(n)]=e[n]);return t}function sS(e){let t=e.replace(W_,aS);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function aS(e){return"-"+e.toLowerCase()}const xc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},lS={};function cS(e,t){const n=lS,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Kv(e,r,i)}function Kv(e,t,n){if(uS(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return nm(e.children,t,n)}return Array.isArray(e)?nm(e,t,n):""}function nm(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Kv(e[i],t,n);return r.join("")}function uS(e){return!!(e&&typeof e=="object")}const rm=document.createElement("i");function xp(e){const t="&"+e+";";rm.innerHTML=t;const n=rm.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function zn(e,t,n,r){const i=e.length;let s=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);s<r.length;)a=r.slice(s,s+1e4),a.unshift(t,0),e.splice(...a),s+=1e4,t+=1e4}function tn(e,t){return e.length>0?(zn(e,e.length,0,t),e):t}const im={}.hasOwnProperty;function dS(e){const t={};let n=-1;for(;++n<e.length;)pS(t,e[n]);return t}function pS(e,t){let n;for(n in t){const i=(im.call(e,n)?e[n]:void 0)||(e[n]={}),s=t[n];let a;if(s)for(a in s){im.call(i,a)||(i[a]=[]);const l=s[a];fS(i[a],Array.isArray(l)?l:l?[l]:[])}}}function fS(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);zn(e,0,0,r)}function Gv(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function vi(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const jn=jr(/[A-Za-z]/),Ht=jr(/[\dA-Za-z]/),hS=jr(/[#-'*+\--9=?A-Z^-~]/);function Bu(e){return e!==null&&(e<32||e===127)}const Uu=jr(/\d/),mS=jr(/[\dA-Fa-f]/),gS=jr(/[!-/:-@[-`{-~]/);function Ne(e){return e!==null&&e<-2}function It(e){return e!==null&&(e<0||e===32)}function Oe(e){return e===-2||e===-1||e===32}const xS=jr(new RegExp("\\p{P}|\\p{S}","u")),yS=jr(/\s/);function jr(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Bi(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const s=e.charCodeAt(n);let a="";if(s===37&&Ht(e.charCodeAt(n+1))&&Ht(e.charCodeAt(n+2)))i=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(a=String.fromCharCode(s));else if(s>55295&&s<57344){const l=e.charCodeAt(n+1);s<56320&&l>56319&&l<57344?(a=String.fromCharCode(s,l),i=1):a="�"}else a=String.fromCharCode(s);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function We(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let s=0;return a;function a(c){return Oe(c)?(e.enter(n),l(c)):t(c)}function l(c){return Oe(c)&&s++<i?(e.consume(c),l):(e.exit(n),t(c))}}const vS={tokenize:bS};function bS(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),We(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),s(l)}function s(l){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,a(l)}function a(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return Ne(l)?(e.consume(l),e.exit("chunkText"),s):(e.consume(l),a)}}const wS={tokenize:kS},om={tokenize:jS};function kS(e){const t=this,n=[];let r=0,i,s,a;return l;function l(v){if(r<n.length){const _=n[r];return t.containerState=_[1],e.attempt(_[0].continuation,c,u)(v)}return u(v)}function c(v){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&x();const _=t.events.length;let T=_,C;for(;T--;)if(t.events[T][0]==="exit"&&t.events[T][1].type==="chunkFlow"){C=t.events[T][1].end;break}g(r);let L=_;for(;L<t.events.length;)t.events[L][1].end={...C},L++;return zn(t.events,T+1,0,t.events.slice(_)),t.events.length=L,u(v)}return l(v)}function u(v){if(r===n.length){if(!i)return p(v);if(i.currentConstruct&&i.currentConstruct.concrete)return m(v);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(om,d,f)(v)}function d(v){return i&&x(),g(r),p(v)}function f(v){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,m(v)}function p(v){return t.containerState={},e.attempt(om,h,m)(v)}function h(v){return r++,n.push([t.currentConstruct,t.containerState]),p(v)}function m(v){if(v===null){i&&x(),g(0),e.consume(v);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:s}),b(v)}function b(v){if(v===null){j(e.exit("chunkFlow"),!0),g(0),e.consume(v);return}return Ne(v)?(e.consume(v),j(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(v),b)}function j(v,_){const T=t.sliceStream(v);if(_&&T.push(null),v.previous=s,s&&(s.next=v),s=v,i.defineSkip(v.start),i.write(T),t.parser.lazy[v.start.line]){let C=i.events.length;for(;C--;)if(i.events[C][1].start.offset<a&&(!i.events[C][1].end||i.events[C][1].end.offset>a))return;const L=t.events.length;let E=L,U,z;for(;E--;)if(t.events[E][0]==="exit"&&t.events[E][1].type==="chunkFlow"){if(U){z=t.events[E][1].end;break}U=!0}for(g(r),C=L;C<t.events.length;)t.events[C][1].end={...z},C++;zn(t.events,E+1,0,t.events.slice(L)),t.events.length=C}}function g(v){let _=n.length;for(;_-- >v;){const T=n[_];t.containerState=T[1],T[0].exit.call(t,e)}n.length=v}function x(){i.write([null]),s=void 0,i=void 0,t.containerState._closeFlow=void 0}}function jS(e,t,n){return We(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function sm(e){if(e===null||It(e)||yS(e))return 1;if(xS(e))return 2}function yp(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const s=e[i].resolveAll;s&&!r.includes(s)&&(t=s(t,n),r.push(s))}return t}const Wu={name:"attention",resolveAll:_S,tokenize:SS};function _S(e,t){let n=-1,r,i,s,a,l,c,u,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const f={...e[r][1].end},p={...e[n][1].start};am(f,-c),am(p,c),a={type:c>1?"strongSequence":"emphasisSequence",start:f,end:{...e[r][1].end}},l={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:p},s={type:c>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?"strong":"emphasis",start:{...a.start},end:{...l.end}},e[r][1].end={...a.start},e[n][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=tn(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=tn(u,[["enter",i,t],["enter",a,t],["exit",a,t],["enter",s,t]]),u=tn(u,yp(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=tn(u,[["exit",s,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,u=tn(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,zn(e,r-1,n-r+3,u),n=r+u.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function SS(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=sm(r);let s;return a;function a(c){return s=c,e.enter("attentionSequence"),l(c)}function l(c){if(c===s)return e.consume(c),l;const u=e.exit("attentionSequence"),d=sm(c),f=!d||d===2&&i||n.includes(c),p=!i||i===2&&d||n.includes(r);return u._open=!!(s===42?f:f&&(i||!p)),u._close=!!(s===42?p:p&&(d||!f)),t(c)}}function am(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const CS={name:"autolink",tokenize:NS};function NS(e,t,n){let r=0;return i;function i(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),s}function s(h){return jn(h)?(e.consume(h),a):h===64?n(h):u(h)}function a(h){return h===43||h===45||h===46||Ht(h)?(r=1,l(h)):u(h)}function l(h){return h===58?(e.consume(h),r=0,c):(h===43||h===45||h===46||Ht(h))&&r++<32?(e.consume(h),l):(r=0,u(h))}function c(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):h===null||h===32||h===60||Bu(h)?n(h):(e.consume(h),c)}function u(h){return h===64?(e.consume(h),d):hS(h)?(e.consume(h),u):n(h)}function d(h){return Ht(h)?f(h):n(h)}function f(h){return h===46?(e.consume(h),r=0,d):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):p(h)}function p(h){if((h===45||Ht(h))&&r++<63){const m=h===45?p:f;return e.consume(h),m}return n(h)}}const Sl={partial:!0,tokenize:ES};function ES(e,t,n){return r;function r(s){return Oe(s)?We(e,i,"linePrefix")(s):i(s)}function i(s){return s===null||Ne(s)?t(s):n(s)}}const Yv={continuation:{tokenize:TS},exit:AS,name:"blockQuote",tokenize:zS};function zS(e,t,n){const r=this;return i;function i(a){if(a===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),s}return n(a)}function s(a){return Oe(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function TS(e,t,n){const r=this;return i;function i(a){return Oe(a)?We(e,s,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):s(a)}function s(a){return e.attempt(Yv,t,n)(a)}}function AS(e){e.exit("blockQuote")}const Qv={name:"characterEscape",tokenize:MS};function MS(e,t,n){return r;function r(s){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(s),e.exit("escapeMarker"),i}function i(s){return gS(s)?(e.enter("characterEscapeValue"),e.consume(s),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(s)}}const Xv={name:"characterReference",tokenize:LS};function LS(e,t,n){const r=this;let i=0,s,a;return l;function l(f){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),c}function c(f){return f===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(f),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),s=31,a=Ht,d(f))}function u(f){return f===88||f===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(f),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),s=6,a=mS,d):(e.enter("characterReferenceValue"),s=7,a=Uu,d(f))}function d(f){if(f===59&&i){const p=e.exit("characterReferenceValue");return a===Ht&&!xp(r.sliceSerialize(p))?n(f):(e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(f)&&i++<s?(e.consume(f),d):n(f)}}const lm={partial:!0,tokenize:RS},cm={concrete:!0,name:"codeFenced",tokenize:PS};function PS(e,t,n){const r=this,i={partial:!0,tokenize:T};let s=0,a=0,l;return c;function c(C){return u(C)}function u(C){const L=r.events[r.events.length-1];return s=L&&L[1].type==="linePrefix"?L[2].sliceSerialize(L[1],!0).length:0,l=C,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(C)}function d(C){return C===l?(a++,e.consume(C),d):a<3?n(C):(e.exit("codeFencedFenceSequence"),Oe(C)?We(e,f,"whitespace")(C):f(C))}function f(C){return C===null||Ne(C)?(e.exit("codeFencedFence"),r.interrupt?t(C):e.check(lm,b,_)(C)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),p(C))}function p(C){return C===null||Ne(C)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),f(C)):Oe(C)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),We(e,h,"whitespace")(C)):C===96&&C===l?n(C):(e.consume(C),p)}function h(C){return C===null||Ne(C)?f(C):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),m(C))}function m(C){return C===null||Ne(C)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),f(C)):C===96&&C===l?n(C):(e.consume(C),m)}function b(C){return e.attempt(i,_,j)(C)}function j(C){return e.enter("lineEnding"),e.consume(C),e.exit("lineEnding"),g}function g(C){return s>0&&Oe(C)?We(e,x,"linePrefix",s+1)(C):x(C)}function x(C){return C===null||Ne(C)?e.check(lm,b,_)(C):(e.enter("codeFlowValue"),v(C))}function v(C){return C===null||Ne(C)?(e.exit("codeFlowValue"),x(C)):(e.consume(C),v)}function _(C){return e.exit("codeFenced"),t(C)}function T(C,L,E){let U=0;return z;function z(O){return C.enter("lineEnding"),C.consume(O),C.exit("lineEnding"),I}function I(O){return C.enter("codeFencedFence"),Oe(O)?We(C,q,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(O):q(O)}function q(O){return O===l?(C.enter("codeFencedFenceSequence"),G(O)):E(O)}function G(O){return O===l?(U++,C.consume(O),G):U>=a?(C.exit("codeFencedFenceSequence"),Oe(O)?We(C,A,"whitespace")(O):A(O)):E(O)}function A(O){return O===null||Ne(O)?(C.exit("codeFencedFence"),L(O)):E(O)}}}function RS(e,t,n){const r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),s)}function s(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}const yc={name:"codeIndented",tokenize:OS},IS={partial:!0,tokenize:$S};function OS(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),We(e,s,"linePrefix",5)(u)}function s(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?a(u):n(u)}function a(u){return u===null?c(u):Ne(u)?e.attempt(IS,a,c)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||Ne(u)?(e.exit("codeFlowValue"),a(u)):(e.consume(u),l)}function c(u){return e.exit("codeIndented"),t(u)}}function $S(e,t,n){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):Ne(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):We(e,s,"linePrefix",5)(a)}function s(a){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):Ne(a)?i(a):n(a)}}const DS={name:"codeText",previous:BS,resolve:FS,tokenize:US};function FS(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function BS(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function US(e,t,n){let r=0,i,s;return a;function a(f){return e.enter("codeText"),e.enter("codeTextSequence"),l(f)}function l(f){return f===96?(e.consume(f),r++,l):(e.exit("codeTextSequence"),c(f))}function c(f){return f===null?n(f):f===32?(e.enter("space"),e.consume(f),e.exit("space"),c):f===96?(s=e.enter("codeTextSequence"),i=0,d(f)):Ne(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),c):(e.enter("codeTextData"),u(f))}function u(f){return f===null||f===32||f===96||Ne(f)?(e.exit("codeTextData"),c(f)):(e.consume(f),u)}function d(f){return f===96?(e.consume(f),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(f)):(s.type="codeTextData",u(f))}}class WS{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const s=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&to(this.left,r),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),to(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),to(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);to(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);to(this.left,n.reverse())}}}function to(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Zv(e){const t={};let n=-1,r,i,s,a,l,c,u;const d=new WS(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,s=0,s<c.length&&c[s][1].type==="lineEndingBlank"&&(s+=2),s<c.length&&c[s][1].type==="content"))for(;++s<c.length&&c[s][1].type!=="content";)c[s][1].type==="chunkText"&&(c[s][1]._isInFirstContentOfListItem=!0,s++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,VS(d,n)),n=t[n],u=!0);else if(r[1]._container){for(s=n,i=void 0;s--;)if(a=d.get(s),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=s);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},l=d.slice(i,n),l.unshift(r),d.splice(i,n-i+1,l))}}return zn(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function VS(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const s=[];let a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const l=a.events,c=[],u={};let d,f,p=-1,h=n,m=0,b=0;const j=[b];for(;h;){for(;e.get(++i)[1]!==h;);s.push(i),h._tokenizer||(d=r.sliceStream(h),h.next||d.push(null),f&&a.defineSkip(h.start),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),f=h,h=h.next}for(h=n;++p<l.length;)l[p][0]==="exit"&&l[p-1][0]==="enter"&&l[p][1].type===l[p-1][1].type&&l[p][1].start.line!==l[p][1].end.line&&(b=p+1,j.push(b),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(a.events=[],h?(h._tokenizer=void 0,h.previous=void 0):j.pop(),p=j.length;p--;){const g=l.slice(j[p],j[p+1]),x=s.pop();c.push([x,x+g.length-1]),e.splice(x,2,g)}for(c.reverse(),p=-1;++p<c.length;)u[m+c[p][0]]=m+c[p][1],m+=c[p][1]-c[p][0]-1;return u}const HS={resolve:JS,tokenize:KS},qS={partial:!0,tokenize:GS};function JS(e){return Zv(e),e}function KS(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?s(l):Ne(l)?e.check(qS,a,s)(l):(e.consume(l),i)}function s(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function a(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function GS(e,t,n){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),We(e,s,"linePrefix")}function s(a){if(a===null||Ne(a))return n(a);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function e1(e,t,n,r,i,s,a,l,c){const u=c||Number.POSITIVE_INFINITY;let d=0;return f;function f(g){return g===60?(e.enter(r),e.enter(i),e.enter(s),e.consume(g),e.exit(s),p):g===null||g===32||g===41||Bu(g)?n(g):(e.enter(r),e.enter(a),e.enter(l),e.enter("chunkString",{contentType:"string"}),b(g))}function p(g){return g===62?(e.enter(s),e.consume(g),e.exit(s),e.exit(i),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),h(g))}function h(g){return g===62?(e.exit("chunkString"),e.exit(l),p(g)):g===null||g===60||Ne(g)?n(g):(e.consume(g),g===92?m:h)}function m(g){return g===60||g===62||g===92?(e.consume(g),h):h(g)}function b(g){return!d&&(g===null||g===41||It(g))?(e.exit("chunkString"),e.exit(l),e.exit(a),e.exit(r),t(g)):d<u&&g===40?(e.consume(g),d++,b):g===41?(e.consume(g),d--,b):g===null||g===32||g===40||Bu(g)?n(g):(e.consume(g),g===92?j:b)}function j(g){return g===40||g===41||g===92?(e.consume(g),b):b(g)}}function t1(e,t,n,r,i,s){const a=this;let l=0,c;return u;function u(h){return e.enter(r),e.enter(i),e.consume(h),e.exit(i),e.enter(s),d}function d(h){return l>999||h===null||h===91||h===93&&!c||h===94&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?n(h):h===93?(e.exit(s),e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):Ne(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),f(h))}function f(h){return h===null||h===91||h===93||Ne(h)||l++>999?(e.exit("chunkString"),d(h)):(e.consume(h),c||(c=!Oe(h)),h===92?p:f)}function p(h){return h===91||h===92||h===93?(e.consume(h),l++,f):f(h)}}function n1(e,t,n,r,i,s){let a;return l;function l(p){return p===34||p===39||p===40?(e.enter(r),e.enter(i),e.consume(p),e.exit(i),a=p===40?41:p,c):n(p)}function c(p){return p===a?(e.enter(i),e.consume(p),e.exit(i),e.exit(r),t):(e.enter(s),u(p))}function u(p){return p===a?(e.exit(s),c(a)):p===null?n(p):Ne(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),We(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(p))}function d(p){return p===a||p===null||Ne(p)?(e.exit("chunkString"),u(p)):(e.consume(p),p===92?f:d)}function f(p){return p===a||p===92?(e.consume(p),d):d(p)}}function No(e,t){let n;return r;function r(i){return Ne(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):Oe(i)?We(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const YS={name:"definition",tokenize:XS},QS={partial:!0,tokenize:ZS};function XS(e,t,n){const r=this;let i;return s;function s(h){return e.enter("definition"),a(h)}function a(h){return t1.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function l(h){return i=vi(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),c):n(h)}function c(h){return It(h)?No(e,u)(h):u(h)}function u(h){return e1(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function d(h){return e.attempt(QS,f,f)(h)}function f(h){return Oe(h)?We(e,p,"whitespace")(h):p(h)}function p(h){return h===null||Ne(h)?(e.exit("definition"),r.parser.defined.push(i),t(h)):n(h)}}function ZS(e,t,n){return r;function r(l){return It(l)?No(e,i)(l):n(l)}function i(l){return n1(e,s,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function s(l){return Oe(l)?We(e,a,"whitespace")(l):a(l)}function a(l){return l===null||Ne(l)?t(l):n(l)}}const eC={name:"hardBreakEscape",tokenize:tC};function tC(e,t,n){return r;function r(s){return e.enter("hardBreakEscape"),e.consume(s),i}function i(s){return Ne(s)?(e.exit("hardBreakEscape"),t(s)):n(s)}}const nC={name:"headingAtx",resolve:rC,tokenize:iC};function rC(e,t){let n=e.length-2,r=3,i,s;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},s={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},zn(e,r,n-r+1,[["enter",i,t],["enter",s,t],["exit",s,t],["exit",i,t]])),e}function iC(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),s(d)}function s(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&r++<6?(e.consume(d),a):d===null||It(d)?(e.exit("atxHeadingSequence"),l(d)):n(d)}function l(d){return d===35?(e.enter("atxHeadingSequence"),c(d)):d===null||Ne(d)?(e.exit("atxHeading"),t(d)):Oe(d)?We(e,l,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function c(d){return d===35?(e.consume(d),c):(e.exit("atxHeadingSequence"),l(d))}function u(d){return d===null||d===35||It(d)?(e.exit("atxHeadingText"),l(d)):(e.consume(d),u)}}const oC=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],um=["pre","script","style","textarea"],sC={concrete:!0,name:"htmlFlow",resolveTo:cC,tokenize:uC},aC={partial:!0,tokenize:pC},lC={partial:!0,tokenize:dC};function cC(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function uC(e,t,n){const r=this;let i,s,a,l,c;return u;function u(y){return d(y)}function d(y){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(y),f}function f(y){return y===33?(e.consume(y),p):y===47?(e.consume(y),s=!0,b):y===63?(e.consume(y),i=3,r.interrupt?t:w):jn(y)?(e.consume(y),a=String.fromCharCode(y),j):n(y)}function p(y){return y===45?(e.consume(y),i=2,h):y===91?(e.consume(y),i=5,l=0,m):jn(y)?(e.consume(y),i=4,r.interrupt?t:w):n(y)}function h(y){return y===45?(e.consume(y),r.interrupt?t:w):n(y)}function m(y){const N="CDATA[";return y===N.charCodeAt(l++)?(e.consume(y),l===N.length?r.interrupt?t:q:m):n(y)}function b(y){return jn(y)?(e.consume(y),a=String.fromCharCode(y),j):n(y)}function j(y){if(y===null||y===47||y===62||It(y)){const N=y===47,$=a.toLowerCase();return!N&&!s&&um.includes($)?(i=1,r.interrupt?t(y):q(y)):oC.includes(a.toLowerCase())?(i=6,N?(e.consume(y),g):r.interrupt?t(y):q(y)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(y):s?x(y):v(y))}return y===45||Ht(y)?(e.consume(y),a+=String.fromCharCode(y),j):n(y)}function g(y){return y===62?(e.consume(y),r.interrupt?t:q):n(y)}function x(y){return Oe(y)?(e.consume(y),x):z(y)}function v(y){return y===47?(e.consume(y),z):y===58||y===95||jn(y)?(e.consume(y),_):Oe(y)?(e.consume(y),v):z(y)}function _(y){return y===45||y===46||y===58||y===95||Ht(y)?(e.consume(y),_):T(y)}function T(y){return y===61?(e.consume(y),C):Oe(y)?(e.consume(y),T):v(y)}function C(y){return y===null||y===60||y===61||y===62||y===96?n(y):y===34||y===39?(e.consume(y),c=y,L):Oe(y)?(e.consume(y),C):E(y)}function L(y){return y===c?(e.consume(y),c=null,U):y===null||Ne(y)?n(y):(e.consume(y),L)}function E(y){return y===null||y===34||y===39||y===47||y===60||y===61||y===62||y===96||It(y)?T(y):(e.consume(y),E)}function U(y){return y===47||y===62||Oe(y)?v(y):n(y)}function z(y){return y===62?(e.consume(y),I):n(y)}function I(y){return y===null||Ne(y)?q(y):Oe(y)?(e.consume(y),I):n(y)}function q(y){return y===45&&i===2?(e.consume(y),M):y===60&&i===1?(e.consume(y),S):y===62&&i===4?(e.consume(y),W):y===63&&i===3?(e.consume(y),w):y===93&&i===5?(e.consume(y),P):Ne(y)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(aC,H,G)(y)):y===null||Ne(y)?(e.exit("htmlFlowData"),G(y)):(e.consume(y),q)}function G(y){return e.check(lC,A,H)(y)}function A(y){return e.enter("lineEnding"),e.consume(y),e.exit("lineEnding"),O}function O(y){return y===null||Ne(y)?G(y):(e.enter("htmlFlowData"),q(y))}function M(y){return y===45?(e.consume(y),w):q(y)}function S(y){return y===47?(e.consume(y),a="",R):q(y)}function R(y){if(y===62){const N=a.toLowerCase();return um.includes(N)?(e.consume(y),W):q(y)}return jn(y)&&a.length<8?(e.consume(y),a+=String.fromCharCode(y),R):q(y)}function P(y){return y===93?(e.consume(y),w):q(y)}function w(y){return y===62?(e.consume(y),W):y===45&&i===2?(e.consume(y),w):q(y)}function W(y){return y===null||Ne(y)?(e.exit("htmlFlowData"),H(y)):(e.consume(y),W)}function H(y){return e.exit("htmlFlow"),t(y)}}function dC(e,t,n){const r=this;return i;function i(a){return Ne(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),s):n(a)}function s(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function pC(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Sl,t,n)}}const fC={name:"htmlText",tokenize:hC};function hC(e,t,n){const r=this;let i,s,a;return l;function l(w){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(w),c}function c(w){return w===33?(e.consume(w),u):w===47?(e.consume(w),T):w===63?(e.consume(w),v):jn(w)?(e.consume(w),E):n(w)}function u(w){return w===45?(e.consume(w),d):w===91?(e.consume(w),s=0,m):jn(w)?(e.consume(w),x):n(w)}function d(w){return w===45?(e.consume(w),h):n(w)}function f(w){return w===null?n(w):w===45?(e.consume(w),p):Ne(w)?(a=f,S(w)):(e.consume(w),f)}function p(w){return w===45?(e.consume(w),h):f(w)}function h(w){return w===62?M(w):w===45?p(w):f(w)}function m(w){const W="CDATA[";return w===W.charCodeAt(s++)?(e.consume(w),s===W.length?b:m):n(w)}function b(w){return w===null?n(w):w===93?(e.consume(w),j):Ne(w)?(a=b,S(w)):(e.consume(w),b)}function j(w){return w===93?(e.consume(w),g):b(w)}function g(w){return w===62?M(w):w===93?(e.consume(w),g):b(w)}function x(w){return w===null||w===62?M(w):Ne(w)?(a=x,S(w)):(e.consume(w),x)}function v(w){return w===null?n(w):w===63?(e.consume(w),_):Ne(w)?(a=v,S(w)):(e.consume(w),v)}function _(w){return w===62?M(w):v(w)}function T(w){return jn(w)?(e.consume(w),C):n(w)}function C(w){return w===45||Ht(w)?(e.consume(w),C):L(w)}function L(w){return Ne(w)?(a=L,S(w)):Oe(w)?(e.consume(w),L):M(w)}function E(w){return w===45||Ht(w)?(e.consume(w),E):w===47||w===62||It(w)?U(w):n(w)}function U(w){return w===47?(e.consume(w),M):w===58||w===95||jn(w)?(e.consume(w),z):Ne(w)?(a=U,S(w)):Oe(w)?(e.consume(w),U):M(w)}function z(w){return w===45||w===46||w===58||w===95||Ht(w)?(e.consume(w),z):I(w)}function I(w){return w===61?(e.consume(w),q):Ne(w)?(a=I,S(w)):Oe(w)?(e.consume(w),I):U(w)}function q(w){return w===null||w===60||w===61||w===62||w===96?n(w):w===34||w===39?(e.consume(w),i=w,G):Ne(w)?(a=q,S(w)):Oe(w)?(e.consume(w),q):(e.consume(w),A)}function G(w){return w===i?(e.consume(w),i=void 0,O):w===null?n(w):Ne(w)?(a=G,S(w)):(e.consume(w),G)}function A(w){return w===null||w===34||w===39||w===60||w===61||w===96?n(w):w===47||w===62||It(w)?U(w):(e.consume(w),A)}function O(w){return w===47||w===62||It(w)?U(w):n(w)}function M(w){return w===62?(e.consume(w),e.exit("htmlTextData"),e.exit("htmlText"),t):n(w)}function S(w){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),R}function R(w){return Oe(w)?We(e,P,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(w):P(w)}function P(w){return e.enter("htmlTextData"),a(w)}}const vp={name:"labelEnd",resolveAll:yC,resolveTo:vC,tokenize:bC},mC={tokenize:wC},gC={tokenize:kC},xC={tokenize:jC};function yC(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&zn(e,0,e.length,n),e}function vC(e,t){let n=e.length,r=0,i,s,a,l;for(;n--;)if(i=e[n][1],s){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(a){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(s=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=n);const c={type:e[s][1].type==="labelLink"?"link":"image",start:{...e[s][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[s][1].start},end:{...e[a][1].end}},d={type:"labelText",start:{...e[s+r+2][1].end},end:{...e[a-2][1].start}};return l=[["enter",c,t],["enter",u,t]],l=tn(l,e.slice(s+1,s+r+3)),l=tn(l,[["enter",d,t]]),l=tn(l,yp(t.parser.constructs.insideSpan.null,e.slice(s+r+4,a-3),t)),l=tn(l,[["exit",d,t],e[a-2],e[a-1],["exit",u,t]]),l=tn(l,e.slice(a+1)),l=tn(l,[["exit",c,t]]),zn(e,s,e.length,l),e}function bC(e,t,n){const r=this;let i=r.events.length,s,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){s=r.events[i][1];break}return l;function l(p){return s?s._inactive?f(p):(a=r.parser.defined.includes(vi(r.sliceSerialize({start:s.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(p),e.exit("labelMarker"),e.exit("labelEnd"),c):n(p)}function c(p){return p===40?e.attempt(mC,d,a?d:f)(p):p===91?e.attempt(gC,d,a?u:f)(p):a?d(p):f(p)}function u(p){return e.attempt(xC,d,f)(p)}function d(p){return t(p)}function f(p){return s._balanced=!0,n(p)}}function wC(e,t,n){return r;function r(f){return e.enter("resource"),e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),i}function i(f){return It(f)?No(e,s)(f):s(f)}function s(f){return f===41?d(f):e1(e,a,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(f)}function a(f){return It(f)?No(e,c)(f):d(f)}function l(f){return n(f)}function c(f){return f===34||f===39||f===40?n1(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(f):d(f)}function u(f){return It(f)?No(e,d)(f):d(f)}function d(f){return f===41?(e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),e.exit("resource"),t):n(f)}}function kC(e,t,n){const r=this;return i;function i(l){return t1.call(r,e,s,a,"reference","referenceMarker","referenceString")(l)}function s(l){return r.parser.defined.includes(vi(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function a(l){return n(l)}}function jC(e,t,n){return r;function r(s){return e.enter("reference"),e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),i}function i(s){return s===93?(e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),e.exit("reference"),t):n(s)}}const _C={name:"labelStartImage",resolveAll:vp.resolveAll,tokenize:SC};function SC(e,t,n){const r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),s}function s(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),a):n(l)}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const CC={name:"labelStartLink",resolveAll:vp.resolveAll,tokenize:NC};function NC(e,t,n){const r=this;return i;function i(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),s}function s(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const vc={name:"lineEnding",tokenize:EC};function EC(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),We(e,t,"linePrefix")}}const ua={name:"thematicBreak",tokenize:zC};function zC(e,t,n){let r=0,i;return s;function s(u){return e.enter("thematicBreak"),a(u)}function a(u){return i=u,l(u)}function l(u){return u===i?(e.enter("thematicBreakSequence"),c(u)):r>=3&&(u===null||Ne(u))?(e.exit("thematicBreak"),t(u)):n(u)}function c(u){return u===i?(e.consume(u),r++,c):(e.exit("thematicBreakSequence"),Oe(u)?We(e,l,"whitespace")(u):l(u))}}const Et={continuation:{tokenize:LC},exit:RC,name:"list",tokenize:MC},TC={partial:!0,tokenize:IC},AC={partial:!0,tokenize:PC};function MC(e,t,n){const r=this,i=r.events[r.events.length-1];let s=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return l;function l(h){const m=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(m==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:Uu(h)){if(r.containerState.type||(r.containerState.type=m,e.enter(m,{_container:!0})),m==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(ua,n,u)(h):u(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(h)}return n(h)}function c(h){return Uu(h)&&++a<10?(e.consume(h),c):(!r.interrupt||a<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),u(h)):n(h)}function u(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(Sl,r.interrupt?n:d,e.attempt(TC,p,f))}function d(h){return r.containerState.initialBlankLine=!0,s++,p(h)}function f(h){return Oe(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),p):n(h)}function p(h){return r.containerState.size=s+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function LC(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Sl,i,s);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,We(e,t,"listItemIndent",r.containerState.size+1)(l)}function s(l){return r.containerState.furtherBlankLines||!Oe(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(AC,t,a)(l))}function a(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,We(e,e.attempt(Et,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function PC(e,t,n){const r=this;return We(e,i,"listItemIndent",r.containerState.size+1);function i(s){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(s):n(s)}}function RC(e){e.exit(this.containerState.type)}function IC(e,t,n){const r=this;return We(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(s){const a=r.events[r.events.length-1];return!Oe(s)&&a&&a[1].type==="listItemPrefixWhitespace"?t(s):n(s)}}const dm={name:"setextUnderline",resolveTo:OC,tokenize:$C};function OC(e,t){let n=e.length,r,i,s;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!s&&e[n][1].type==="definition"&&(s=n);const a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",s?(e.splice(i,0,["enter",a,t]),e.splice(s+1,0,["exit",e[r][1],t]),e[r][1].end={...e[s][1].end}):e[r][1]=a,e.push(["exit",a,t]),e}function $C(e,t,n){const r=this;let i;return s;function s(u){let d=r.events.length,f;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){f=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||f)?(e.enter("setextHeadingLine"),i=u,a(u)):n(u)}function a(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===i?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),Oe(u)?We(e,c,"lineSuffix")(u):c(u))}function c(u){return u===null||Ne(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const DC={tokenize:FC};function FC(e){const t=this,n=e.attempt(Sl,r,e.attempt(this.parser.constructs.flowInitial,i,We(e,e.attempt(this.parser.constructs.flow,i,e.attempt(HS,i)),"linePrefix")));return n;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEndingBlank"),e.consume(s),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const BC={resolveAll:i1()},UC=r1("string"),WC=r1("text");function r1(e){return{resolveAll:i1(e==="text"?VC:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],s=n.attempt(i,a,l);return a;function a(d){return u(d)?s(d):l(d)}function l(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),c}function c(d){return u(d)?(n.exit("data"),s(d)):(n.consume(d),c)}function u(d){if(d===null)return!0;const f=i[d];let p=-1;if(f)for(;++p<f.length;){const h=f[p];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function i1(e){return t;function t(n,r){let i=-1,s;for(;++i<=n.length;)s===void 0?n[i]&&n[i][1].type==="data"&&(s=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==s+2&&(n[s][1].end=n[i-1][1].end,n.splice(s+2,i-s-2),i=s+2),s=void 0);return e?e(n,r):n}}function VC(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let s=i.length,a=-1,l=0,c;for(;s--;){const u=i[s];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)l++,a--;if(a)break;a=-1}else if(u===-2)c=!0,l++;else if(u!==-1){s++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){const u={type:n===e.length||c||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?a:r.start._bufferIndex+a,_index:r.start._index+s,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const HC={42:Et,43:Et,45:Et,48:Et,49:Et,50:Et,51:Et,52:Et,53:Et,54:Et,55:Et,56:Et,57:Et,62:Yv},qC={91:YS},JC={[-2]:yc,[-1]:yc,32:yc},KC={35:nC,42:ua,45:[dm,ua],60:sC,61:dm,95:ua,96:cm,126:cm},GC={38:Xv,92:Qv},YC={[-5]:vc,[-4]:vc,[-3]:vc,33:_C,38:Xv,42:Wu,60:[CS,fC],91:CC,92:[eC,Qv],93:vp,95:Wu,96:DS},QC={null:[Wu,BC]},XC={null:[42,95]},ZC={null:[]},eN=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:XC,contentInitial:qC,disable:ZC,document:HC,flow:KC,flowInitial:JC,insideSpan:QC,string:GC,text:YC},Symbol.toStringTag,{value:"Module"}));function tN(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},s=[];let a=[],l=[];const c={attempt:L(T),check:L(C),consume:x,enter:v,exit:_,interrupt:L(C,{interrupt:!0})},u={code:null,containerState:{},defineSkip:b,events:[],now:m,parser:e,previous:null,sliceSerialize:p,sliceStream:h,write:f};let d=t.tokenize.call(u,c);return t.resolveAll&&s.push(t),u;function f(I){return a=tn(a,I),j(),a[a.length-1]!==null?[]:(E(t,0),u.events=yp(s,u.events,u),u.events)}function p(I,q){return rN(h(I),q)}function h(I){return nN(a,I)}function m(){const{_bufferIndex:I,_index:q,line:G,column:A,offset:O}=r;return{_bufferIndex:I,_index:q,line:G,column:A,offset:O}}function b(I){i[I.line]=I.column,z()}function j(){let I;for(;r._index<a.length;){const q=a[r._index];if(typeof q=="string")for(I=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===I&&r._bufferIndex<q.length;)g(q.charCodeAt(r._bufferIndex));else g(q)}}function g(I){d=d(I)}function x(I){Ne(I)?(r.line++,r.column=1,r.offset+=I===-3?2:1,z()):I!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=I}function v(I,q){const G=q||{};return G.type=I,G.start=m(),u.events.push(["enter",G,u]),l.push(G),G}function _(I){const q=l.pop();return q.end=m(),u.events.push(["exit",q,u]),q}function T(I,q){E(I,q.from)}function C(I,q){q.restore()}function L(I,q){return G;function G(A,O,M){let S,R,P,w;return Array.isArray(A)?H(A):"tokenize"in A?H([A]):W(A);function W(ne){return de;function de(be){const te=be!==null&&ne[be],D=be!==null&&ne.null,X=[...Array.isArray(te)?te:te?[te]:[],...Array.isArray(D)?D:D?[D]:[]];return H(X)(be)}}function H(ne){return S=ne,R=0,ne.length===0?M:y(ne[R])}function y(ne){return de;function de(be){return w=U(),P=ne,ne.partial||(u.currentConstruct=ne),ne.name&&u.parser.constructs.disable.null.includes(ne.name)?$():ne.tokenize.call(q?Object.assign(Object.create(u),q):u,c,N,$)(be)}}function N(ne){return I(P,w),O}function $(ne){return w.restore(),++R<S.length?y(S[R]):M}}}function E(I,q){I.resolveAll&&!s.includes(I)&&s.push(I),I.resolve&&zn(u.events,q,u.events.length-q,I.resolve(u.events.slice(q),u)),I.resolveTo&&(u.events=I.resolveTo(u.events,u))}function U(){const I=m(),q=u.previous,G=u.currentConstruct,A=u.events.length,O=Array.from(l);return{from:A,restore:M};function M(){r=I,u.previous=q,u.currentConstruct=G,u.events.length=A,l=O,z()}}function z(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function nN(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,s=t.end._bufferIndex;let a;if(n===i)a=[e[n].slice(r,s)];else{if(a=e.slice(n,i),r>-1){const l=a[0];typeof l=="string"?a[0]=l.slice(r):a.shift()}s>0&&a.push(e[i].slice(0,s))}return a}function rN(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const s=e[n];let a;if(typeof s=="string")a=s;else switch(s){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(s)}i=s===-2,r.push(a)}return r.join("")}function iN(e){const r={constructs:dS([eN,...(e||{}).extensions||[]]),content:i(vS),defined:[],document:i(wS),flow:i(DC),lazy:{},string:i(UC),text:i(WC)};return r;function i(s){return a;function a(l){return tN(r,s,l)}}}function oN(e){for(;!Zv(e););return e}const pm=/[\0\t\n\r]/g;function sN(){let e=1,t="",n=!0,r;return i;function i(s,a,l){const c=[];let u,d,f,p,h;for(s=t+(typeof s=="string"?s.toString():new TextDecoder(a||void 0).decode(s)),f=0,t="",n&&(s.charCodeAt(0)===65279&&f++,n=void 0);f<s.length;){if(pm.lastIndex=f,u=pm.exec(s),p=u&&u.index!==void 0?u.index:s.length,h=s.charCodeAt(p),!u){t=s.slice(f);break}if(h===10&&f===p&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),f<p&&(c.push(s.slice(f,p)),e+=p-f),h){case 0:{c.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,c.push(-2);e++<d;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}f=p+1}return l&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const aN=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function lN(e){return e.replace(aN,cN)}function cN(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),s=i===120||i===88;return Gv(n.slice(s?2:1),s?16:10)}return xp(n)||e}const o1={}.hasOwnProperty;function uN(e,t,n){return typeof t!="string"&&(n=t,t=void 0),dN(n)(oN(iN(n).document().write(sN()(e,t,!0))))}function dN(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(ke),autolinkProtocol:U,autolinkEmail:U,atxHeading:s(J),blockQuote:s(D),characterEscape:U,characterReference:U,codeFenced:s(X),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:s(X,a),codeText:s(re,a),codeTextData:U,data:U,codeFlowValue:U,definition:s(Q),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:s(ae),hardBreakEscape:s(pe),hardBreakTrailing:s(pe),htmlFlow:s(Z,a),htmlFlowData:U,htmlText:s(Z,a),htmlTextData:U,image:s(se),label:a,link:s(ke),listItem:s(ee),listItemValue:p,listOrdered:s(F,f),listUnordered:s(F),paragraph:s(B),reference:y,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:s(J),strong:s(K),thematicBreak:s(ge)},exit:{atxHeading:c(),atxHeadingSequence:T,autolink:c(),autolinkEmail:te,autolinkProtocol:be,blockQuote:c(),characterEscapeValue:z,characterReferenceMarkerHexadecimal:$,characterReferenceMarkerNumeric:$,characterReferenceValue:ne,characterReference:de,codeFenced:c(j),codeFencedFence:b,codeFencedFenceInfo:h,codeFencedFenceMeta:m,codeFlowValue:z,codeIndented:c(g),codeText:c(O),codeTextData:z,data:z,definition:c(),definitionDestinationString:_,definitionLabelString:x,definitionTitleString:v,emphasis:c(),hardBreakEscape:c(q),hardBreakTrailing:c(q),htmlFlow:c(G),htmlFlowData:z,htmlText:c(A),htmlTextData:z,image:c(S),label:P,labelText:R,lineEnding:I,link:c(M),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:N,resourceDestinationString:w,resourceTitleString:W,resource:H,setextHeading:c(E),setextHeadingLineSequence:L,setextHeadingText:C,strong:c(),thematicBreak:c()}};s1(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(Y){let oe={type:"root",children:[]};const je={stack:[oe],tokenStack:[],config:t,enter:l,exit:u,buffer:a,resume:d,data:n},Ce=[];let _e=-1;for(;++_e<Y.length;)if(Y[_e][1].type==="listOrdered"||Y[_e][1].type==="listUnordered")if(Y[_e][0]==="enter")Ce.push(_e);else{const Le=Ce.pop();_e=i(Y,Le,_e)}for(_e=-1;++_e<Y.length;){const Le=t[Y[_e][0]];o1.call(Le,Y[_e][1].type)&&Le[Y[_e][1].type].call(Object.assign({sliceSerialize:Y[_e][2].sliceSerialize},je),Y[_e][1])}if(je.tokenStack.length>0){const Le=je.tokenStack[je.tokenStack.length-1];(Le[1]||fm).call(je,void 0,Le[0])}for(oe.position={start:Gn(Y.length>0?Y[0][1].start:{line:1,column:1,offset:0}),end:Gn(Y.length>0?Y[Y.length-2][1].end:{line:1,column:1,offset:0})},_e=-1;++_e<t.transforms.length;)oe=t.transforms[_e](oe)||oe;return oe}function i(Y,oe,je){let Ce=oe-1,_e=-1,Le=!1,Xe,ot,fe,Ee;for(;++Ce<=je;){const he=Y[Ce];switch(he[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{he[0]==="enter"?_e++:_e--,Ee=void 0;break}case"lineEndingBlank":{he[0]==="enter"&&(Xe&&!Ee&&!_e&&!fe&&(fe=Ce),Ee=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Ee=void 0}if(!_e&&he[0]==="enter"&&he[1].type==="listItemPrefix"||_e===-1&&he[0]==="exit"&&(he[1].type==="listUnordered"||he[1].type==="listOrdered")){if(Xe){let ze=Ce;for(ot=void 0;ze--;){const Se=Y[ze];if(Se[1].type==="lineEnding"||Se[1].type==="lineEndingBlank"){if(Se[0]==="exit")continue;ot&&(Y[ot][1].type="lineEndingBlank",Le=!0),Se[1].type="lineEnding",ot=ze}else if(!(Se[1].type==="linePrefix"||Se[1].type==="blockQuotePrefix"||Se[1].type==="blockQuotePrefixWhitespace"||Se[1].type==="blockQuoteMarker"||Se[1].type==="listItemIndent"))break}fe&&(!ot||fe<ot)&&(Xe._spread=!0),Xe.end=Object.assign({},ot?Y[ot][1].start:he[1].end),Y.splice(ot||Ce,0,["exit",Xe,he[2]]),Ce++,je++}if(he[1].type==="listItemPrefix"){const ze={type:"listItem",_spread:!1,start:Object.assign({},he[1].start),end:void 0};Xe=ze,Y.splice(Ce,0,["enter",ze,he[2]]),Ce++,je++,fe=void 0,Ee=!0}}}return Y[oe][1]._spread=Le,je}function s(Y,oe){return je;function je(Ce){l.call(this,Y(Ce),Ce),oe&&oe.call(this,Ce)}}function a(){this.stack.push({type:"fragment",children:[]})}function l(Y,oe,je){this.stack[this.stack.length-1].children.push(Y),this.stack.push(Y),this.tokenStack.push([oe,je||void 0]),Y.position={start:Gn(oe.start),end:void 0}}function c(Y){return oe;function oe(je){Y&&Y.call(this,je),u.call(this,je)}}function u(Y,oe){const je=this.stack.pop(),Ce=this.tokenStack.pop();if(Ce)Ce[0].type!==Y.type&&(oe?oe.call(this,Y,Ce[0]):(Ce[1]||fm).call(this,Y,Ce[0]));else throw new Error("Cannot close `"+Y.type+"` ("+Co({start:Y.start,end:Y.end})+"): it’s not open");je.position.end=Gn(Y.end)}function d(){return cS(this.stack.pop())}function f(){this.data.expectingFirstListItemValue=!0}function p(Y){if(this.data.expectingFirstListItemValue){const oe=this.stack[this.stack.length-2];oe.start=Number.parseInt(this.sliceSerialize(Y),10),this.data.expectingFirstListItemValue=void 0}}function h(){const Y=this.resume(),oe=this.stack[this.stack.length-1];oe.lang=Y}function m(){const Y=this.resume(),oe=this.stack[this.stack.length-1];oe.meta=Y}function b(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function j(){const Y=this.resume(),oe=this.stack[this.stack.length-1];oe.value=Y.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function g(){const Y=this.resume(),oe=this.stack[this.stack.length-1];oe.value=Y.replace(/(\r?\n|\r)$/g,"")}function x(Y){const oe=this.resume(),je=this.stack[this.stack.length-1];je.label=oe,je.identifier=vi(this.sliceSerialize(Y)).toLowerCase()}function v(){const Y=this.resume(),oe=this.stack[this.stack.length-1];oe.title=Y}function _(){const Y=this.resume(),oe=this.stack[this.stack.length-1];oe.url=Y}function T(Y){const oe=this.stack[this.stack.length-1];if(!oe.depth){const je=this.sliceSerialize(Y).length;oe.depth=je}}function C(){this.data.setextHeadingSlurpLineEnding=!0}function L(Y){const oe=this.stack[this.stack.length-1];oe.depth=this.sliceSerialize(Y).codePointAt(0)===61?1:2}function E(){this.data.setextHeadingSlurpLineEnding=void 0}function U(Y){const je=this.stack[this.stack.length-1].children;let Ce=je[je.length-1];(!Ce||Ce.type!=="text")&&(Ce=ie(),Ce.position={start:Gn(Y.start),end:void 0},je.push(Ce)),this.stack.push(Ce)}function z(Y){const oe=this.stack.pop();oe.value+=this.sliceSerialize(Y),oe.position.end=Gn(Y.end)}function I(Y){const oe=this.stack[this.stack.length-1];if(this.data.atHardBreak){const je=oe.children[oe.children.length-1];je.position.end=Gn(Y.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(oe.type)&&(U.call(this,Y),z.call(this,Y))}function q(){this.data.atHardBreak=!0}function G(){const Y=this.resume(),oe=this.stack[this.stack.length-1];oe.value=Y}function A(){const Y=this.resume(),oe=this.stack[this.stack.length-1];oe.value=Y}function O(){const Y=this.resume(),oe=this.stack[this.stack.length-1];oe.value=Y}function M(){const Y=this.stack[this.stack.length-1];if(this.data.inReference){const oe=this.data.referenceType||"shortcut";Y.type+="Reference",Y.referenceType=oe,delete Y.url,delete Y.title}else delete Y.identifier,delete Y.label;this.data.referenceType=void 0}function S(){const Y=this.stack[this.stack.length-1];if(this.data.inReference){const oe=this.data.referenceType||"shortcut";Y.type+="Reference",Y.referenceType=oe,delete Y.url,delete Y.title}else delete Y.identifier,delete Y.label;this.data.referenceType=void 0}function R(Y){const oe=this.sliceSerialize(Y),je=this.stack[this.stack.length-2];je.label=lN(oe),je.identifier=vi(oe).toLowerCase()}function P(){const Y=this.stack[this.stack.length-1],oe=this.resume(),je=this.stack[this.stack.length-1];if(this.data.inReference=!0,je.type==="link"){const Ce=Y.children;je.children=Ce}else je.alt=oe}function w(){const Y=this.resume(),oe=this.stack[this.stack.length-1];oe.url=Y}function W(){const Y=this.resume(),oe=this.stack[this.stack.length-1];oe.title=Y}function H(){this.data.inReference=void 0}function y(){this.data.referenceType="collapsed"}function N(Y){const oe=this.resume(),je=this.stack[this.stack.length-1];je.label=oe,je.identifier=vi(this.sliceSerialize(Y)).toLowerCase(),this.data.referenceType="full"}function $(Y){this.data.characterReferenceType=Y.type}function ne(Y){const oe=this.sliceSerialize(Y),je=this.data.characterReferenceType;let Ce;je?(Ce=Gv(oe,je==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Ce=xp(oe);const _e=this.stack[this.stack.length-1];_e.value+=Ce}function de(Y){const oe=this.stack.pop();oe.position.end=Gn(Y.end)}function be(Y){z.call(this,Y);const oe=this.stack[this.stack.length-1];oe.url=this.sliceSerialize(Y)}function te(Y){z.call(this,Y);const oe=this.stack[this.stack.length-1];oe.url="mailto:"+this.sliceSerialize(Y)}function D(){return{type:"blockquote",children:[]}}function X(){return{type:"code",lang:null,meta:null,value:""}}function re(){return{type:"inlineCode",value:""}}function Q(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function ae(){return{type:"emphasis",children:[]}}function J(){return{type:"heading",depth:0,children:[]}}function pe(){return{type:"break"}}function Z(){return{type:"html",value:""}}function se(){return{type:"image",title:null,url:"",alt:null}}function ke(){return{type:"link",title:null,url:"",children:[]}}function F(Y){return{type:"list",ordered:Y.type==="listOrdered",start:null,spread:Y._spread,children:[]}}function ee(Y){return{type:"listItem",spread:Y._spread,checked:null,children:[]}}function B(){return{type:"paragraph",children:[]}}function K(){return{type:"strong",children:[]}}function ie(){return{type:"text",value:""}}function ge(){return{type:"thematicBreak"}}}function Gn(e){return{line:e.line,column:e.column,offset:e.offset}}function s1(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?s1(e,r):pN(e,r)}}function pN(e,t){let n;for(n in t)if(o1.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function fm(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Co({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Co({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Co({start:t.start,end:t.end})+") is still open")}function fN(e){const t=this;t.parser=n;function n(r){return uN(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function hN(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function mN(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function gN(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let s={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(s.data={meta:t.meta}),e.patch(t,s),s=e.applyData(t,s),s={type:"element",tagName:"pre",properties:{},children:[s]},e.patch(t,s),s}function xN(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function yN(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function vN(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Bi(r.toLowerCase()),s=e.footnoteOrder.indexOf(r);let a,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=s+1,l+=1,e.footnoteCounts.set(r,l);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,c);const u={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,u),e.applyData(t,u)}function bN(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function wN(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function a1(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),s=i[0];s&&s.type==="text"?s.value="["+s.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function kN(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return a1(e,t);const i={src:Bi(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,s),e.applyData(t,s)}function jN(e,t){const n={src:Bi(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function _N(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function SN(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return a1(e,t);const i={href:Bi(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,s),e.applyData(t,s)}function CN(e,t){const n={href:Bi(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function NN(e,t,n){const r=e.all(t),i=n?EN(n):l1(t),s={},a=[];if(typeof t.checked=="boolean"){const d=r[0];let f;d&&d.type==="element"&&d.tagName==="p"?f=d:(f={type:"element",tagName:"p",properties:{},children:[]},r.unshift(f)),f.children.length>0&&f.children.unshift({type:"text",value:" "}),f.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const d=r[l];(i||l!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?a.push(...d.children):a.push(d)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:s,children:a};return e.patch(t,u),e.applyData(t,u)}function EN(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=l1(n[r])}return t}function l1(e){const t=e.spread;return t??e.children.length>1}function zN(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const s={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,s),e.applyData(t,s)}function TN(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function AN(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function MN(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function LN(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),i.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},l=fp(t.children[1]),c=Uv(t.children[t.children.length-1]);l&&c&&(a.position={start:l,end:c}),i.push(a)}const s={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,s),e.applyData(t,s)}function PN(e,t,n){const r=n?n.children:void 0,s=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,l=a?a.length:t.children.length;let c=-1;const u=[];for(;++c<l;){const f=t.children[c],p={},h=a?a[c]:void 0;h&&(p.align=h);let m={type:"element",tagName:s,properties:p,children:[]};f&&(m.children=e.all(f),e.patch(f,m),m=e.applyData(f,m)),u.push(m)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function RN(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const hm=9,mm=32;function IN(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const s=[];for(;r;)s.push(gm(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return s.push(gm(t.slice(i),i>0,!1)),s.join("")}function gm(e,t,n){let r=0,i=e.length;if(t){let s=e.codePointAt(r);for(;s===hm||s===mm;)r++,s=e.codePointAt(r)}if(n){let s=e.codePointAt(i-1);for(;s===hm||s===mm;)i--,s=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function ON(e,t){const n={type:"text",value:IN(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function $N(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const DN={blockquote:hN,break:mN,code:gN,delete:xN,emphasis:yN,footnoteReference:vN,heading:bN,html:wN,imageReference:kN,image:jN,inlineCode:_N,linkReference:SN,link:CN,listItem:NN,list:zN,paragraph:TN,root:AN,strong:MN,table:LN,tableCell:RN,tableRow:PN,text:ON,thematicBreak:$N,toml:Fs,yaml:Fs,definition:Fs,footnoteDefinition:Fs};function Fs(){}const c1=-1,Cl=0,Eo=1,qa=2,bp=3,wp=4,kp=5,jp=6,u1=7,d1=8,xm=typeof self=="object"?self:globalThis,FN=(e,t)=>{const n=(i,s)=>(e.set(s,i),i),r=i=>{if(e.has(i))return e.get(i);const[s,a]=t[i];switch(s){case Cl:case c1:return n(a,i);case Eo:{const l=n([],i);for(const c of a)l.push(r(c));return l}case qa:{const l=n({},i);for(const[c,u]of a)l[r(c)]=r(u);return l}case bp:return n(new Date(a),i);case wp:{const{source:l,flags:c}=a;return n(new RegExp(l,c),i)}case kp:{const l=n(new Map,i);for(const[c,u]of a)l.set(r(c),r(u));return l}case jp:{const l=n(new Set,i);for(const c of a)l.add(r(c));return l}case u1:{const{name:l,message:c}=a;return n(new xm[l](c),i)}case d1:return n(BigInt(a),i);case"BigInt":return n(Object(BigInt(a)),i);case"ArrayBuffer":return n(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:l}=new Uint8Array(a);return n(new DataView(l),a)}}return n(new xm[s](a),i)};return r},ym=e=>FN(new Map,e)(0),Yr="",{toString:BN}={},{keys:UN}=Object,no=e=>{const t=typeof e;if(t!=="object"||!e)return[Cl,t];const n=BN.call(e).slice(8,-1);switch(n){case"Array":return[Eo,Yr];case"Object":return[qa,Yr];case"Date":return[bp,Yr];case"RegExp":return[wp,Yr];case"Map":return[kp,Yr];case"Set":return[jp,Yr];case"DataView":return[Eo,n]}return n.includes("Array")?[Eo,n]:n.includes("Error")?[u1,n]:[qa,n]},Bs=([e,t])=>e===Cl&&(t==="function"||t==="symbol"),WN=(e,t,n,r)=>{const i=(a,l)=>{const c=r.push(a)-1;return n.set(l,c),c},s=a=>{if(n.has(a))return n.get(a);let[l,c]=no(a);switch(l){case Cl:{let d=a;switch(c){case"bigint":l=d1,d=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);d=null;break;case"undefined":return i([c1],a)}return i([l,d],a)}case Eo:{if(c){let p=a;return c==="DataView"?p=new Uint8Array(a.buffer):c==="ArrayBuffer"&&(p=new Uint8Array(a)),i([c,[...p]],a)}const d=[],f=i([l,d],a);for(const p of a)d.push(s(p));return f}case qa:{if(c)switch(c){case"BigInt":return i([c,a.toString()],a);case"Boolean":case"Number":case"String":return i([c,a.valueOf()],a)}if(t&&"toJSON"in a)return s(a.toJSON());const d=[],f=i([l,d],a);for(const p of UN(a))(e||!Bs(no(a[p])))&&d.push([s(p),s(a[p])]);return f}case bp:return i([l,a.toISOString()],a);case wp:{const{source:d,flags:f}=a;return i([l,{source:d,flags:f}],a)}case kp:{const d=[],f=i([l,d],a);for(const[p,h]of a)(e||!(Bs(no(p))||Bs(no(h))))&&d.push([s(p),s(h)]);return f}case jp:{const d=[],f=i([l,d],a);for(const p of a)(e||!Bs(no(p)))&&d.push(s(p));return f}}const{message:u}=a;return i([l,{name:c,message:u}],a)};return s},vm=(e,{json:t,lossy:n}={})=>{const r=[];return WN(!(t||n),!!t,new Map,r)(e),r},Ja=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?ym(vm(e,t)):structuredClone(e):(e,t)=>ym(vm(e,t));function VN(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function HN(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function qN(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||VN,r=e.options.footnoteBackLabel||HN,i=e.options.footnoteLabel||"Footnotes",s=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let c=-1;for(;++c<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[c]);if(!u)continue;const d=e.all(u),f=String(u.identifier).toUpperCase(),p=Bi(f.toLowerCase());let h=0;const m=[],b=e.footnoteCounts.get(f);for(;b!==void 0&&++h<=b;){m.length>0&&m.push({type:"text",value:" "});let x=typeof n=="string"?n:n(c,h);typeof x=="string"&&(x={type:"text",value:x}),m.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+p+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,h),className:["data-footnote-backref"]},children:Array.isArray(x)?x:[x]})}const j=d[d.length-1];if(j&&j.type==="element"&&j.tagName==="p"){const x=j.children[j.children.length-1];x&&x.type==="text"?x.value+=" ":j.children.push({type:"text",value:" "}),j.children.push(...m)}else d.push(...m);const g={type:"element",tagName:"li",properties:{id:t+"fn-"+p},children:e.wrap(d,!0)};e.patch(u,g),l.push(g)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...Ja(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const p1=function(e){if(e==null)return YN;if(typeof e=="function")return Nl(e);if(typeof e=="object")return Array.isArray(e)?JN(e):KN(e);if(typeof e=="string")return GN(e);throw new Error("Expected function, string, or object as test")};function JN(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=p1(e[n]);return Nl(r);function r(...i){let s=-1;for(;++s<t.length;)if(t[s].apply(this,i))return!0;return!1}}function KN(e){const t=e;return Nl(n);function n(r){const i=r;let s;for(s in e)if(i[s]!==t[s])return!1;return!0}}function GN(e){return Nl(t);function t(n){return n&&n.type===e}}function Nl(e){return t;function t(n,r,i){return!!(QN(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function YN(){return!0}function QN(e){return e!==null&&typeof e=="object"&&"type"in e}const f1=[],XN=!0,bm=!1,ZN="skip";function e4(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const s=p1(i),a=r?-1:1;l(e,void 0,[])();function l(c,u,d){const f=c&&typeof c=="object"?c:{};if(typeof f.type=="string"){const h=typeof f.tagName=="string"?f.tagName:typeof f.name=="string"?f.name:void 0;Object.defineProperty(p,"name",{value:"node ("+(c.type+(h?"<"+h+">":""))+")"})}return p;function p(){let h=f1,m,b,j;if((!t||s(c,u,d[d.length-1]||void 0))&&(h=t4(n(c,d)),h[0]===bm))return h;if("children"in c&&c.children){const g=c;if(g.children&&h[0]!==ZN)for(b=(r?g.children.length:-1)+a,j=d.concat(g);b>-1&&b<g.children.length;){const x=g.children[b];if(m=l(x,b,j)(),m[0]===bm)return m;b=typeof m[1]=="number"?m[1]:b+a}}return h}}}function t4(e){return Array.isArray(e)?e:typeof e=="number"?[XN,e]:e==null?f1:[e]}function h1(e,t,n,r){let i,s,a;typeof t=="function"&&typeof n!="function"?(s=void 0,a=t,i=n):(s=t,a=n,i=r),e4(e,s,l,i);function l(c,u){const d=u[u.length-1],f=d?d.children.indexOf(c):void 0;return a(c,f,d)}}const Vu={}.hasOwnProperty,n4={};function r4(e,t){const n=t||n4,r=new Map,i=new Map,s=new Map,a={...DN,...n.handlers},l={all:u,applyData:o4,definitionById:r,footnoteById:i,footnoteCounts:s,footnoteOrder:[],handlers:a,one:c,options:n,patch:i4,wrap:a4};return h1(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const f=d.type==="definition"?r:i,p=String(d.identifier).toUpperCase();f.has(p)||f.set(p,d)}}),l;function c(d,f){const p=d.type,h=l.handlers[p];if(Vu.call(l.handlers,p)&&h)return h(l,d,f);if(l.options.passThrough&&l.options.passThrough.includes(p)){if("children"in d){const{children:b,...j}=d,g=Ja(j);return g.children=l.all(d),g}return Ja(d)}return(l.options.unknownHandler||s4)(l,d,f)}function u(d){const f=[];if("children"in d){const p=d.children;let h=-1;for(;++h<p.length;){const m=l.one(p[h],d);if(m){if(h&&p[h-1].type==="break"&&(!Array.isArray(m)&&m.type==="text"&&(m.value=wm(m.value)),!Array.isArray(m)&&m.type==="element")){const b=m.children[0];b&&b.type==="text"&&(b.value=wm(b.value))}Array.isArray(m)?f.push(...m):f.push(m)}}}return f}}function i4(e,t){e.position&&(t.position=B_(e))}function o4(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,s=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&s&&Object.assign(n.properties,Ja(s)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function s4(e,t){const n=t.data||{},r="value"in t&&!(Vu.call(n,"hProperties")||Vu.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function a4(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function wm(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function km(e,t){const n=r4(e,t),r=n.one(e,void 0),i=qN(n),s=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&s.children.push({type:"text",value:`
`},i),s}function l4(e,t){return e&&"run"in e?async function(n,r){const i=km(n,{file:r,...t});await e.run(i,r)}:function(n,r){return km(n,{file:r,...e||t})}}function jm(e){if(e)throw e}var da=Object.prototype.hasOwnProperty,m1=Object.prototype.toString,_m=Object.defineProperty,Sm=Object.getOwnPropertyDescriptor,Cm=function(t){return typeof Array.isArray=="function"?Array.isArray(t):m1.call(t)==="[object Array]"},Nm=function(t){if(!t||m1.call(t)!=="[object Object]")return!1;var n=da.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&da.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||da.call(t,i)},Em=function(t,n){_m&&n.name==="__proto__"?_m(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},zm=function(t,n){if(n==="__proto__")if(da.call(t,n)){if(Sm)return Sm(t,n).value}else return;return t[n]},c4=function e(){var t,n,r,i,s,a,l=arguments[0],c=1,u=arguments.length,d=!1;for(typeof l=="boolean"&&(d=l,l=arguments[1]||{},c=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});c<u;++c)if(t=arguments[c],t!=null)for(n in t)r=zm(l,n),i=zm(t,n),l!==i&&(d&&i&&(Nm(i)||(s=Cm(i)))?(s?(s=!1,a=r&&Cm(r)?r:[]):a=r&&Nm(r)?r:{},Em(l,{name:n,newValue:e(d,a,i)})):typeof i<"u"&&Em(l,{name:n,newValue:i}));return l};const bc=nl(c4);function Hu(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function u4(){const e=[],t={run:n,use:r};return t;function n(...i){let s=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);l(null,...i);function l(c,...u){const d=e[++s];let f=-1;if(c){a(c);return}for(;++f<i.length;)(u[f]===null||u[f]===void 0)&&(u[f]=i[f]);i=u,d?d4(d,l)(...u):a(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function d4(e,t){let n;return r;function r(...a){const l=e.length>a.length;let c;l&&a.push(i);try{c=e.apply(this,a)}catch(u){const d=u;if(l&&n)throw d;return i(d)}l||(c&&c.then&&typeof c.then=="function"?c.then(s,i):c instanceof Error?i(c):s(c))}function i(a,...l){n||(n=!0,t(a,...l))}function s(a){i(null,a)}}const wn={basename:p4,dirname:f4,extname:h4,join:m4,sep:"/"};function p4(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');fs(e);let n=0,r=-1,i=e.length,s;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else r<0&&(s=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let a=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else a<0&&(s=!0,a=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(r=i):(l=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function f4(e){if(fs(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function h4(e){fs(e);let t=e.length,n=-1,r=0,i=-1,s=0,a;for(;t--;){const l=e.codePointAt(t);if(l===47){if(a){r=t+1;break}continue}n<0&&(a=!0,n=t+1),l===46?i<0?i=t:s!==1&&(s=1):i>-1&&(s=-1)}return i<0||n<0||s===0||s===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function m4(...e){let t=-1,n;for(;++t<e.length;)fs(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":g4(n)}function g4(e){fs(e);const t=e.codePointAt(0)===47;let n=x4(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function x4(e,t){let n="",r=0,i=-1,s=0,a=-1,l,c;for(;++a<=e.length;){if(a<e.length)l=e.codePointAt(a);else{if(l===47)break;l=47}if(l===47){if(!(i===a-1||s===1))if(i!==a-1&&s===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),i=a,s=0;continue}}else if(n.length>0){n="",r=0,i=a,s=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,s=0}else l===46&&s>-1?s++:s=-1}return n}function fs(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const y4={cwd:v4};function v4(){return"/"}function qu(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function b4(e){if(typeof e=="string")e=new URL(e);else if(!qu(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return w4(e)}function w4(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const wc=["history","path","basename","stem","extname","dirname"];class g1{constructor(t){let n;t?qu(t)?n={path:t}:typeof t=="string"||k4(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":y4.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<wc.length;){const s=wc[r];s in n&&n[s]!==void 0&&n[s]!==null&&(this[s]=s==="history"?[...n[s]]:n[s])}let i;for(i in n)wc.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?wn.basename(this.path):void 0}set basename(t){jc(t,"basename"),kc(t,"basename"),this.path=wn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?wn.dirname(this.path):void 0}set dirname(t){Tm(this.basename,"dirname"),this.path=wn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?wn.extname(this.path):void 0}set extname(t){if(kc(t,"extname"),Tm(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=wn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){qu(t)&&(t=b4(t)),jc(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?wn.basename(this.path,this.extname):void 0}set stem(t){jc(t,"stem"),kc(t,"stem"),this.path=wn.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new vt(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function kc(e,t){if(e&&e.includes(wn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+wn.sep+"`")}function jc(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Tm(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function k4(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const j4=function(e){const r=this.constructor.prototype,i=r[e],s=function(){return i.apply(s,arguments)};return Object.setPrototypeOf(s,r),s},_4={}.hasOwnProperty;class _p extends j4{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=u4()}copy(){const t=new _p;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(bc(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Cc("data",this.frozen),this.namespace[t]=n,this):_4.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Cc("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Us(t),r=this.parser||this.Parser;return _c("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),_c("process",this.parser||this.Parser),Sc("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(s,a){const l=Us(t),c=r.parse(l);r.run(c,l,function(d,f,p){if(d||!f||!p)return u(d);const h=f,m=r.stringify(h,p);N4(m)?p.value=m:p.result=m,u(d,p)});function u(d,f){d||!f?a(d):s?s(f):n(void 0,f)}}}processSync(t){let n=!1,r;return this.freeze(),_c("processSync",this.parser||this.Parser),Sc("processSync",this.compiler||this.Compiler),this.process(t,i),Mm("processSync","process",n),r;function i(s,a){n=!0,jm(s),r=a}}run(t,n,r){Am(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?s(void 0,r):new Promise(s);function s(a,l){const c=Us(n);i.run(t,c,u);function u(d,f,p){const h=f||t;d?l(d):a?a(h):r(void 0,h,p)}}}runSync(t,n){let r=!1,i;return this.run(t,n,s),Mm("runSync","run",r),i;function s(a,l){jm(a),i=l,r=!0}}stringify(t,n){this.freeze();const r=Us(n),i=this.compiler||this.Compiler;return Sc("stringify",i),Am(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(Cc("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function s(u){if(typeof u=="function")c(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...f]=u;c(d,f)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(i.settings=bc(!0,i.settings,u.settings))}function l(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const f=u[d];s(f)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function c(u,d){let f=-1,p=-1;for(;++f<r.length;)if(r[f][0]===u){p=f;break}if(p===-1)r.push([u,...d]);else if(d.length>0){let[h,...m]=d;const b=r[p][1];Hu(b)&&Hu(h)&&(h=bc(!0,b,h)),r[p]=[u,h,...m]}}}}const S4=new _p().freeze();function _c(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Sc(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Cc(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Am(e){if(!Hu(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Mm(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Us(e){return C4(e)?e:new g1(e)}function C4(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function N4(e){return typeof e=="string"||E4(e)}function E4(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const z4="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Lm=[],Pm={allowDangerousHtml:!0},T4=/^(https?|ircs?|mailto|xmpp)$/i,A4=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function x1(e){const t=M4(e),n=L4(e);return P4(t.runSync(t.parse(n),n),e)}function M4(e){const t=e.rehypePlugins||Lm,n=e.remarkPlugins||Lm,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Pm}:Pm;return S4().use(fN).use(n).use(l4,r).use(t)}function L4(e){const t=e.children||"",n=new g1;return typeof t=="string"&&(n.value=t),n}function P4(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,s=t.disallowedElements,a=t.skipHtml,l=t.unwrapDisallowed,c=t.urlTransform||R4;for(const d of A4)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+z4+d.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),h1(e,u),q_(e,{Fragment:o.Fragment,components:i,ignoreInvalidStyle:!0,jsx:o.jsx,jsxs:o.jsxs,passKeys:!0,passNode:!0});function u(d,f,p){if(d.type==="raw"&&p&&typeof f=="number")return a?p.children.splice(f,1):p.children[f]={type:"text",value:d.value},f;if(d.type==="element"){let h;for(h in xc)if(Object.hasOwn(xc,h)&&Object.hasOwn(d.properties,h)){const m=d.properties[h],b=xc[h];(b===null||b.includes(d.tagName))&&(d.properties[h]=c(String(m||""),h,d))}}if(d.type==="element"){let h=n?!n.includes(d.tagName):s?s.includes(d.tagName):!1;if(!h&&r&&typeof f=="number"&&(h=!r(d,f,p)),h&&p&&typeof f=="number")return l&&d.children?p.children.splice(f,1,...d.children):p.children.splice(f,1),f}}}function R4(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||T4.test(e.slice(0,t))?e:""}function I4({value:e,onChange:t,placeholder:n="Write your content here...",minHeight:r=200}){const[i,s]=k.useState(!1),[a,l]=k.useState(r),c=k.useRef(null),u=k.useRef(null);k.useEffect(()=>{if(e){const p=e.split(`
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
      `}),i?o.jsx("div",{className:"monaco-wrapper",children:o.jsx(on,{height:"100%",language:"markdown",theme:"vs-dark",value:e,onChange:p=>t(p||""),onMount:d,options:{minimap:{enabled:!1},fontSize:14,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"off",scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",padding:{top:12,bottom:12},lineDecorationsWidth:8,folding:!1,glyphMargin:!1,renderLineHighlight:"none",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,scrollbar:{vertical:"auto",horizontal:"hidden"}}})}):o.jsxs("div",{className:"markdown-preview",onClick:()=>s(!0),children:[o.jsxs("span",{className:"edit-hint",children:[o.jsx(Sj,{size:12}),"Click to edit"]}),e?o.jsx("div",{className:"markdown-content",children:o.jsx(x1,{children:e})}):o.jsx("div",{className:"markdown-placeholder",children:n})]})]})}function O4(e){return/^[a-zA-Z0-9_]+$/.test(e)}function $4({agent:e}){const{project:t,updateAgent:n,mcpServers:r,builtinTools:i,setActiveTab:s,setRunAgentId:a}=yt(),[l,c]=k.useState(new Set(["basic","model","tools","subagents","callbacks"])),[u,d]=k.useState(!1),[f,p]=k.useState(!1),[h,m]=k.useState(!1),[b,j]=k.useState(""),[g,x]=k.useState(null);if(!t)return null;function v(S){n(e.id,S)}function _(S){if(S===""){x(null),v({name:S});return}O4(S)?x(null):x("Name can only contain letters, numbers, and underscores"),e.type==="LlmAgent"?v({name:S,output_key:S}):v({name:S})}function T(S){const R=new Set(l);R.has(S)?R.delete(S):R.add(S),c(R)}const C=e.type==="LlmAgent",L=e;function E(S){C&&v({tools:[...L.tools,S]})}function U(S){C&&v({tools:L.tools.filter((R,P)=>P!==S)})}function z(S,R){if(!C)return;const P=[...L.tools];P[S]=R,v({tools:P})}function I(S){"sub_agents"in e&&v({sub_agents:[...e.sub_agents,S]})}function q(S){"sub_agents"in e&&v({sub_agents:e.sub_agents.filter(R=>R!==S)})}const G=t.agents.filter(S=>S.id!==e.id);async function A(){if(!(!t||!C)){d(!0);try{const S=L.instruction||"",R=S?`Current instruction to improve:

${S}

Please improve and expand this instruction while preserving its core intent.`:void 0,w=t.agents.some(H=>H.id===e.id)?void 0:e,W=await ca(t.id,e.id,R,w);W.success&&W.prompt?v({instruction:W.prompt}):alert("Failed to generate prompt: "+(W.error||"Unknown error"))}catch(S){alert("Error generating prompt: "+S.message)}finally{d(!1)}}}async function O(){if(!(!t||!C||!b.trim())){d(!0);try{const R=`Current instruction:

${L.instruction||""}

---

Requested changes:
${b}

Please apply the requested changes to the instruction above. Output only the updated instruction, nothing else.`,w=t.agents.some(H=>H.id===e.id)?void 0:e,W=await ca(t.id,e.id,R,w);W.success&&W.prompt?(v({instruction:W.prompt}),m(!1),j("")):alert("Failed to apply changes: "+(W.error||"Unknown error"))}catch(S){alert("Error applying changes: "+S.message)}finally{d(!1)}}}async function M(){if(!t||!C)return;const S=L.instruction;if(!S){alert("Please write an instruction first");return}p(!0);try{const R=`Write a 5-10 word description of what this agent does.

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
${S.slice(0,500)}

Your response (5-10 words only):`,P=await ca(t.id,e.id,R);if(P.success&&P.prompt){let w=P.prompt.trim();w=w.replace(/^["']|["']$/g,"").trim();const W=w.split(/[.!?\n]/)[0].trim(),H=W.length>80?W.slice(0,77)+"...":W;v({description:H})}else alert("Failed to generate description: "+(P.error||"Unknown error"))}catch(R){alert("Error generating description: "+R.message)}finally{p(!1)}}return o.jsxs("div",{className:"agent-editor",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"editor-header",children:[o.jsx(Rr,{size:24,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o.jsx("input",{type:"text",value:e.name,onChange:S=>_(S.target.value),placeholder:"Agent name",style:{borderColor:g?"var(--error)":void 0}}),g&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:g})]}),o.jsx("span",{className:"badge badge-info",children:e.type}),o.jsxs("button",{className:"btn btn-primary btn-sm run-agent-btn",onClick:()=>{a(e.id),s("run")},title:"Test this agent",children:[o.jsx(xr,{size:14}),"Run"]})]}),o.jsxs("div",{className:"editor-content",children:[o.jsxs(ro,{id:"basic",title:"Basic Info",icon:o.jsx(Rr,{size:16}),expanded:l.has("basic"),onToggle:()=>T("basic"),children:[o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group full-width",children:[o.jsxs("div",{className:"label-with-action",children:[o.jsx("label",{children:"Description"}),C&&L.instruction&&o.jsx("button",{className:"btn btn-secondary btn-sm generate-btn",onClick:M,disabled:f,title:"Generate description from instruction",children:f?o.jsxs(o.Fragment,{children:[o.jsx(ir,{size:14,className:"spin"}),"Summarizing..."]}):"Summarize"})]}),o.jsx("input",{type:"text",value:e.description,onChange:S=>v({description:S.target.value}),placeholder:"e.g., Reviews code for bugs and suggests fixes"})]})}),C&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group full-width",children:[o.jsxs("div",{className:"label-with-action",children:[o.jsx("label",{children:"Instruction"}),o.jsxs("div",{className:"action-buttons",children:[o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>m(!h),disabled:u||!L.instruction,title:"Request specific changes to the instruction",children:"Request Changes"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:A,disabled:u,title:"Uses AI to improve and expand the current instruction",children:u?o.jsxs(o.Fragment,{children:[o.jsx(ir,{size:14,className:"spin"}),"Working..."]}):"Auto-Improve"})]})]}),h&&o.jsxs("div",{className:"request-changes-box",children:[o.jsx("input",{type:"text",value:b,onChange:S=>j(S.target.value),placeholder:"Describe what changes you want...",onKeyDown:S=>{S.key==="Enter"&&b.trim()?O():S.key==="Escape"&&(m(!1),j(""))},autoFocus:!0}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:O,disabled:u||!b.trim(),children:"Apply"})]}),o.jsx(I4,{value:L.instruction,onChange:S=>v({instruction:S}),placeholder:"Write your agent's instruction here... (Markdown supported)",minHeight:200})]})}),o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Output Key"}),o.jsxs("select",{value:L.output_key||"",onChange:S=>v({output_key:S.target.value||void 0}),children:[o.jsx("option",{value:"",children:"None"}),t.app.state_keys.map(S=>o.jsx("option",{value:S.name,children:S.name},S.name))]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Include Contents"}),o.jsxs("select",{value:L.include_contents,onChange:S=>v({include_contents:S.target.value}),children:[o.jsx("option",{value:"default",children:"Default"}),o.jsx("option",{value:"none",children:"None"})]})]})]}),o.jsxs("div",{className:"form-row",style:{gap:24},children:[o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:L.disallow_transfer_to_parent,onChange:S=>v({disallow_transfer_to_parent:S.target.checked})}),o.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to parent"]}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:L.disallow_transfer_to_peers,onChange:S=>v({disallow_transfer_to_peers:S.target.checked})}),o.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to peers"]})]})]}),e.type==="LoopAgent"&&o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Max Iterations"}),o.jsx("input",{type:"number",value:e.max_iterations||"",onChange:S=>v({max_iterations:parseInt(S.target.value)||void 0}),placeholder:"No limit"})]})})]}),C&&o.jsx(ro,{id:"model",title:"Model",icon:o.jsx(rp,{size:16}),expanded:l.has("model"),onToggle:()=>T("model"),children:o.jsx(F4,{agent:L,appModels:t.app.models||[],defaultModelId:t.app.default_model_id,projectId:t.id,onUpdate:S=>v({model:S})})}),C&&o.jsx(ro,{id:"tools",title:`Tools (${L.tools.length})`,icon:o.jsx(gn,{size:16}),expanded:l.has("tools"),onToggle:()=>T("tools"),children:o.jsx(D4,{tools:L.tools,onAdd:E,onRemove:U,onUpdate:z,builtinTools:i,mcpServers:r,projectMcpServers:t.mcp_servers,customTools:t.custom_tools,agents:G,skillsets:t.skillsets||[]})}),"sub_agents"in e&&o.jsx(ro,{id:"subagents",title:`Sub-Agents (${e.sub_agents.length})`,icon:o.jsx(Sv,{size:16}),expanded:l.has("subagents"),onToggle:()=>T("subagents"),children:o.jsxs("div",{className:"sub-agent-list",children:[e.sub_agents.map(S=>{const R=t.agents.find(P=>P.id===S);return R?o.jsxs("div",{className:"sub-agent-chip",children:[R.name,o.jsx("button",{onClick:()=>q(S),children:o.jsx(Je,{size:12})})]},S):null}),o.jsxs("select",{value:"",onChange:S=>{S.target.value&&I(S.target.value)},style:{width:150,padding:"6px 10px",fontSize:13},children:[o.jsx("option",{value:"",children:"Add agent..."}),G.filter(S=>!e.sub_agents.includes(S.id)).map(S=>o.jsx("option",{value:S.id,children:S.name},S.id))]})]})}),o.jsx(ro,{id:"callbacks",title:"Callbacks",icon:o.jsx(En,{size:16}),expanded:l.has("callbacks"),onToggle:()=>T("callbacks"),children:o.jsx(B4,{agent:e,onUpdate:v,customCallbacks:t.custom_callbacks||[],isLlmAgent:C})})]})]})}function ro({id:e,title:t,icon:n,expanded:r,onToggle:i,children:s}){return o.jsxs("div",{className:"section",children:[o.jsxs("div",{className:"section-header",onClick:i,children:[r?o.jsx(zt,{size:16}):o.jsx(wt,{size:16}),o.jsxs("h4",{children:[n," ",t]})]}),r&&o.jsx("div",{className:"section-content",children:s})]})}function D4({tools:e,onAdd:t,onRemove:n,onUpdate:r,builtinTools:i,mcpServers:s,projectMcpServers:a,customTools:l,agents:c,skillsets:u}){const[d,f]=k.useState(!1),[p,h]=k.useState({}),[m,b]=k.useState(""),j=qt.useRef(null),g=qt.useRef(null),[x,v]=k.useState(null),[_,T]=k.useState(new Set),C=(N,$)=>{if(!m.trim())return!0;const ne=m.toLowerCase();return N.toLowerCase().includes(ne)||(($==null?void 0:$.toLowerCase().includes(ne))??!1)},L=i.filter(N=>C(N.name,N.description)),E=a.filter(N=>C(N.name,N.description)),U=l.filter(N=>C(N.name,N.description)),z=c.filter(N=>C(N.name,N.description)),I=u.filter(N=>C(N.name,N.description));function q(){if(j.current){const N=j.current.getBoundingClientRect(),$=window.innerHeight,ne=350,de=$-N.bottom-16,be=N.top-16;if(de>=200||de>=be){const te=Math.min(ne,de);h({top:N.bottom+4,left:N.left,maxHeight:te})}else{const te=Math.min(ne,be);h({top:N.top-te-4,left:N.left,maxHeight:te})}}f(!0),b(""),setTimeout(()=>{var N;return(N=g.current)==null?void 0:N.focus()},50)}function G(){f(!1),b("")}function A(N){t({type:"builtin",name:N}),G()}async function O(N){G();const $=N.tool_filter||[];if(v({server:N,enabledTools:new Set($),availableTools:$.map(ne=>({name:ne,description:""})),isLoading:$.length===0,error:void 0}),$.length===0)try{const{testMcpServer:ne}=await Bj(async()=>{const{testMcpServer:be}=await Promise.resolve().then(()=>uj);return{testMcpServer:be}},void 0),de=await ne({connection_type:N.connection_type,command:N.command,args:N.args,env:N.env,url:N.url,headers:N.headers,timeout:N.timeout||30});de.success?v(be=>be?{...be,availableTools:de.tools,enabledTools:new Set(de.tools.map(te=>te.name)),isLoading:!1}:null):v(be=>be?{...be,isLoading:!1,error:de.error||"Failed to connect to MCP server"}:null)}catch(ne){v(de=>de?{...de,isLoading:!1,error:ne.message}:null)}}function M(N){if(!x)return;const $=new Set(x.enabledTools);$.has(N)?$.delete(N):$.add(N),v({...x,enabledTools:$})}function S(){if(!x)return;const N=Array.from(x.enabledTools);t({type:"mcp",server:{...x.server,tool_filter:N}}),v(null)}function R(N){const $=new Set(_);$.has(N)?$.delete(N):$.add(N),T($)}function P(N,$){const ne=e[N];if(ne.type!=="mcp"||!ne.server)return;const de=ne.server.tool_filter||[];let be;de.includes($)?be=de.filter(te=>te!==$):be=[...de,$],r(N,{...ne,server:{...ne.server,tool_filter:be}})}function w(N){t({type:"function",name:N.name,module_path:N.module_path}),G()}function W(N){const $=c.find(ne=>ne.id===N);t({type:"agent",agent_id:N,name:$==null?void 0:$.name}),G()}function H(N){const $=u.find(ne=>ne.id===N);t({type:"skillset",skillset_id:N,name:$==null?void 0:$.name}),G()}function y(N){return s.find($=>$.name===N)}return o.jsxs("div",{children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"tool-list",children:e.map((N,$)=>{var ne;return N.type==="mcp"&&N.server?o.jsxs("div",{className:"mcp-tool-item",children:[o.jsxs("div",{className:"mcp-tool-header",onClick:()=>R($),children:[_.has($)?o.jsx(zt,{size:14}):o.jsx(wt,{size:14}),o.jsx(gn,{size:14,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{className:"mcp-tool-info",children:[o.jsx("div",{className:"mcp-tool-name",children:N.server.name}),o.jsx("div",{className:"mcp-tool-count",children:N.server.tool_filter===null||N.server.tool_filter===void 0?"all tools":`${N.server.tool_filter.length} tools enabled`})]}),o.jsx("button",{className:"delete-btn",onClick:de=>{de.stopPropagation(),n($)},children:o.jsx(Je,{size:14})})]}),_.has($)&&o.jsx("div",{className:"mcp-tool-body",children:o.jsx("div",{className:"mcp-tool-list",children:(()=>{const de=y(N.server.name),be=(de==null?void 0:de.tool_filter)||N.server.tool_filter||[],te=new Set(N.server.tool_filter||[]);return be.map(D=>o.jsxs("label",{className:`mcp-tool-chip ${te.has(D)?"enabled":"disabled"}`,onClick:()=>P($,D),children:[o.jsx("input",{type:"checkbox",checked:te.has(D),onChange:()=>{},style:{display:"none"}}),D]},D))})()})})]},$):N.type==="skillset"?o.jsxs("div",{className:"tool-item",children:[o.jsx(Fn,{size:14,style:{color:"var(--accent)"}}),o.jsxs("div",{className:"tool-item-info",children:[o.jsx("div",{className:"tool-item-name",children:N.name||((ne=u.find(de=>de.id===N.skillset_id))==null?void 0:ne.name)||"SkillSet"}),o.jsx("div",{className:"tool-item-type",children:"skillset"})]}),o.jsx("button",{className:"delete-btn",onClick:()=>n($),children:o.jsx(Je,{size:14})})]},$):o.jsxs("div",{className:"tool-item",children:[o.jsx(gn,{size:14,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{className:"tool-item-info",children:[o.jsx("div",{className:"tool-item-name",children:N.name||N.agent_id}),o.jsx("div",{className:"tool-item-type",children:N.type})]}),o.jsx("button",{className:"delete-btn",onClick:()=>n($),children:o.jsx(Je,{size:14})})]},$)})}),o.jsxs("div",{className:"add-tool-dropdown",style:{marginTop:12},children:[o.jsxs("button",{ref:j,className:"btn btn-secondary btn-sm",onClick:()=>d?G():q(),children:[o.jsx(nt,{size:14}),"Add Tool"]}),d&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"dropdown-backdrop",onClick:G}),o.jsxs("div",{className:"dropdown-content dropdown-fixed",style:p,children:[o.jsx("div",{className:"dropdown-search",children:o.jsx("input",{ref:g,type:"text",placeholder:"Search tools...",value:m,onChange:N=>b(N.target.value),onKeyDown:N=>N.key==="Escape"&&G()})}),L.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Built-in Tools"}),L.map(N=>o.jsxs("button",{className:"dropdown-item",onClick:()=>A(N.name),children:[o.jsx("div",{className:"dropdown-item-name",children:N.name}),o.jsx("div",{className:"dropdown-item-desc",children:N.description})]},N.name))]}),E.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsxs("h5",{children:["Project MCP Servers (",E.length,")"]}),E.map(N=>o.jsxs("button",{className:"dropdown-item",onClick:()=>O(N),children:[o.jsxs("div",{className:"dropdown-item-name",children:[N.name,o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:N.tool_filter===null||N.tool_filter===void 0?"all tools":`${N.tool_filter.length} tools`})]}),o.jsx("div",{className:"dropdown-item-desc",children:N.description||"Custom MCP server"})]},`project-${N.id||N.name}`))]}),U.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Custom Tools"}),U.map(N=>o.jsxs("button",{className:"dropdown-item",onClick:()=>w(N),children:[o.jsx("div",{className:"dropdown-item-name",children:N.name}),o.jsx("div",{className:"dropdown-item-desc",children:N.description})]},N.id))]}),z.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Agents as Tools"}),z.map(N=>o.jsxs("button",{className:"dropdown-item",onClick:()=>W(N.id),children:[o.jsx("div",{className:"dropdown-item-name",children:N.name}),o.jsx("div",{className:"dropdown-item-desc",children:N.type})]},N.id))]}),I.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsxs("h5",{children:["SkillSets (",I.length,")"]}),I.map(N=>o.jsxs("button",{className:"dropdown-item",onClick:()=>H(N.id),children:[o.jsxs("div",{className:"dropdown-item-name",children:[N.name,o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:[N.entry_count||0," entries"]})]}),o.jsx("div",{className:"dropdown-item-desc",children:N.description||"Vector knowledge base"})]},N.id))]}),m.trim()&&L.length===0&&E.length===0&&U.length===0&&z.length===0&&I.length===0&&o.jsxs("div",{className:"dropdown-section",style:{textAlign:"center",padding:"20px",color:"var(--text-muted)"},children:['No tools matching "',m,'"']})]})]})]}),x&&o.jsx("div",{className:"mcp-config-dialog",children:o.jsxs("div",{className:"mcp-config-content",children:[o.jsxs("h3",{children:["Configure ",x.server.name]}),o.jsx("p",{children:x.server.description}),x.isLoading?o.jsxs("div",{className:"mcp-loading",children:[o.jsx("div",{className:"spinner"}),o.jsx("p",{children:"Connecting to MCP server and discovering tools..."})]}):x.error?o.jsxs("div",{className:"mcp-error",children:[o.jsxs("p",{children:["⚠️ Failed to discover tools: ",x.error]}),o.jsx("p",{className:"hint",children:"You can still add the server, but you won't be able to select specific tools."})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"mcp-select-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>v({...x,enabledTools:new Set(x.availableTools.map(N=>N.name))}),children:["Select All (",x.availableTools.length,")"]}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>v({...x,enabledTools:new Set}),children:"Select None"})]}),o.jsx("div",{className:"mcp-tools-grid",children:x.availableTools.map(N=>o.jsxs("div",{className:"mcp-tool-row",title:N.description||N.name,style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:x.enabledTools.has(N.name),onChange:()=>M(N.name)}),o.jsx("span",{className:"toggle-slider"})]}),o.jsx("span",{style:{fontSize:13,opacity:x.enabledTools.has(N.name)?1:.5,cursor:"pointer"},onClick:()=>M(N.name),children:N.name})]},N.name))})]}),o.jsxs("div",{className:"dialog-actions",children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>v(null),children:"Cancel"}),o.jsxs("button",{className:"btn btn-primary",onClick:S,disabled:x.enabledTools.size===0,children:["Add ",x.enabledTools.size," Tools"]})]})]})})]})}function F4({agent:e,appModels:t,defaultModelId:n,projectId:r,onUpdate:i}){var p,h;const s=(p=e.model)==null?void 0:p._appModelId,a=e.model!==null&&e.model!==void 0&&!s,c=s||(()=>{if(!e.model)return n;const m=t.find(b=>{var j,g,x;return b.provider===((j=e.model)==null?void 0:j.provider)&&b.model_name===((g=e.model)==null?void 0:g.model_name)&&b.api_base===((x=e.model)==null?void 0:x.api_base)});return m==null?void 0:m.id})()||n||((h=t[0])==null?void 0:h.id);qt.useEffect(()=>{var m,b,j,g,x;if(s){const v=t.find(_=>_.id===s);v&&(((m=e.model)==null?void 0:m.provider)!==v.provider||((b=e.model)==null?void 0:b.model_name)!==v.model_name||((j=e.model)==null?void 0:j.api_base)!==v.api_base||((g=e.model)==null?void 0:g.temperature)!==v.temperature||((x=e.model)==null?void 0:x.max_output_tokens)!==v.max_output_tokens)&&i({provider:v.provider,model_name:v.model_name,api_base:v.api_base,temperature:v.temperature,max_output_tokens:v.max_output_tokens,top_p:v.top_p,top_k:v.top_k,fallbacks:[],_appModelId:s})}},[s,t,e.model,i]);function u(m){const b=t.find(j=>j.id===m);b&&i({provider:b.provider,model_name:b.model_name,api_base:b.api_base,temperature:b.temperature,max_output_tokens:b.max_output_tokens,top_p:b.top_p,top_k:b.top_k,fallbacks:[],_appModelId:m})}function d(){var m;if(a){const b=n||((m=t[0])==null?void 0:m.id);b&&u(b)}else{const b=e.model;if(b){const{_appModelId:j,...g}=b;i(g)}else i({provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]})}}function f(m){const{_appModelId:b,...j}=e.model||{};i({...j,...m})}return t.find(m=>m.id===c),t.find(m=>m.id===n),o.jsxs("div",{className:"model-selector",children:[o.jsx("style",{children:`
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
      `}),t.length>0&&o.jsxs("div",{className:"model-choice",children:[o.jsxs("div",{className:`model-option ${a?"":"selected"}`,onClick:()=>!a||d(),children:[o.jsx("div",{className:"model-option-label",children:"Use App Model"}),o.jsx("div",{className:"model-option-desc",children:"Select from configured models"})]}),o.jsxs("div",{className:`model-option ${a?"selected":""}`,onClick:()=>a||d(),children:[o.jsx("div",{className:"model-option-label",children:"Custom"}),o.jsx("div",{className:"model-option-desc",children:"Configure model manually"})]})]}),!a&&t.length>0?o.jsx("div",{className:"app-model-select",children:t.map(m=>o.jsx("div",{className:`app-model-item ${c===m.id?"selected":""}`,onClick:()=>u(m.id),children:o.jsxs("div",{className:"app-model-item-info",children:[o.jsxs("div",{className:"app-model-item-name",children:[m.name,m.id===n&&o.jsxs("span",{className:"default-badge",children:[o.jsx(_v,{size:10,fill:"currentColor"}),"Default"]})]}),o.jsxs("div",{className:"app-model-item-details",children:[m.provider," / ",m.model_name,m.api_base&&` • ${m.api_base}`]})]})},m.id))}):t.length===0?o.jsx("div",{className:"no-models-message",children:"No models configured in App Config. Configure models there first, or use custom settings below."}):null,(a||t.length===0)&&o.jsx("div",{className:"custom-model-form",children:o.jsx(Cv,{projectId:r,values:e.model||{},onChange:f})})]})}const Nc=[{id:"builtin_exit_loop",name:"exit_on_EXIT_LOOP_NOW",description:'Exits LoopAgent when model says "EXIT LOOP NOW". Use as after_model_callback.',module_path:"exit_on_EXIT_LOOP_NOW",code:"",state_keys_used:[]}];function B4({agent:e,onUpdate:t,customCallbacks:n,isLlmAgent:r}){const i=[...Nc,...n],s=[{key:"before_agent_callbacks",label:"Before Agent"},{key:"after_agent_callbacks",label:"After Agent"}],a=[{key:"before_model_callbacks",label:"Before Model"},{key:"after_model_callbacks",label:"After Model"},{key:"before_tool_callbacks",label:"Before Tool"},{key:"after_tool_callbacks",label:"After Tool"}],l=r?[...s,...a]:s;function c(d,f){const p=e[d]||[],h=i.find(m=>m.id===f);h&&t({[d]:[...p,{module_path:h.module_path}]})}function u(d,f){const p=e[d]||[];t({[d]:p.filter((h,m)=>m!==f)})}return o.jsx("div",{className:"callbacks-editor",children:l.map(({key:d,label:f})=>{const p=e[d]||[],h=i;return o.jsxs("div",{className:"callback-type-group",style:{marginBottom:"20px"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[o.jsx("label",{style:{fontWeight:500,fontSize:"13px"},children:f}),h.length>0&&o.jsxs("select",{value:"",onChange:m=>{m.target.value&&(c(d,m.target.value),m.target.value="")},style:{padding:"4px 8px",fontSize:"12px",width:"200px"},children:[o.jsx("option",{value:"",children:"Add callback..."}),o.jsx("optgroup",{label:"Built-in",children:Nc.filter(m=>!p.some(b=>b.module_path===m.module_path)).map(m=>o.jsx("option",{value:m.id,children:m.name},m.id))}),o.jsx("optgroup",{label:"Custom",children:n.filter(m=>!p.some(b=>b.module_path===m.module_path)).map(m=>o.jsx("option",{value:m.id,children:m.name},m.id))})]})]}),p.length===0?o.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",fontStyle:"italic",padding:"8px"},children:"No callbacks"}):o.jsx("div",{className:"callback-list",children:p.map((m,b)=>{const j=i.find(x=>x.module_path===m.module_path),g=Nc.some(x=>x.module_path===m.module_path);return o.jsxs("div",{className:"callback-chip",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 10px",background:g?"var(--accent-bg, #1a365d)":"var(--bg-secondary)",borderRadius:"4px",marginBottom:"4px"},title:(j==null?void 0:j.description)||"",children:[o.jsxs("span",{style:{fontSize:"12px",display:"flex",alignItems:"center",gap:"6px"},children:[g&&o.jsx("span",{style:{fontSize:"9px",padding:"1px 4px",background:"var(--accent-color, #3182ce)",borderRadius:"3px",textTransform:"uppercase",fontWeight:600},children:"built-in"}),(j==null?void 0:j.name)||m.module_path]}),o.jsx("button",{onClick:()=>u(d,b),style:{background:"none",border:"none",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},title:"Remove callback",children:o.jsx(Je,{size:12})})]},b)})})]},d)})})}const Ec=[{type:"LlmAgent",label:"LLM Agent",icon:Rr,color:"#00f5d4",description:"AI-powered agent with model reasoning"},{type:"SequentialAgent",label:"Sequential",icon:Tj,color:"#7b2cbf",description:"Run sub-agents in order"},{type:"LoopAgent",label:"Loop",icon:Nj,color:"#ffd93d",description:"Repeat sub-agents until exit"},{type:"ParallelAgent",label:"Parallel",icon:Lu,color:"#ff6b6b",description:"Run sub-agents simultaneously"}];function U4(){return`agent_${Date.now().toString(36)}`}function W4(e){return{provider:e.provider,model_name:e.model_name,api_base:e.api_base,temperature:e.temperature,max_output_tokens:e.max_output_tokens,top_p:e.top_p,top_k:e.top_k,fallbacks:[]}}function V4(e,t){const n=U4(),r={LlmAgent:"new_agent",SequentialAgent:"new_sequence",LoopAgent:"new_loop",ParallelAgent:"new_parallel"},i={id:n,name:r[e]||"new_agent",description:""},s=t?W4(t):{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]};switch(e){case"LlmAgent":return{...i,type:"LlmAgent",model:s,instruction:"",include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:[],sub_agents:[],output_key:r[e]||"new_agent",before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};case"SequentialAgent":return{...i,type:"SequentialAgent",sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[]};case"LoopAgent":return{...i,type:"LoopAgent",sub_agents:[],max_iterations:10,before_agent_callbacks:[],after_agent_callbacks:[]};case"ParallelAgent":return{...i,type:"ParallelAgent",sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[]};default:throw new Error(`Unknown agent type: ${e}`)}}function H4({onSelectAgent:e}){const{project:t,addAgent:n,removeAgent:r,updateAgent:i,selectedAgentId:s,setSelectedAgentId:a,mcpServers:l}=yt(),[c,u]=k.useState(new Set),[d,f]=k.useState(!1),[p,h]=k.useState(""),[m,b]=k.useState(new Map),[j,g]=k.useState(380),[x,v]=k.useState(!1),_=k.useRef(null),[T,C]=k.useState(null),L=k.useRef(null),[E,U]=k.useState(null),[z,I]=k.useState(null),q=k.useRef(null),G=k.useRef(null),A=k.useCallback(Z=>{Z.preventDefault(),v(!0)},[]);if(k.useEffect(()=>{const Z=ke=>{if(!x)return;const F=Math.min(Math.max(200,ke.clientX),600);g(F)},se=()=>{v(!1)};return x&&(document.addEventListener("mousemove",Z),document.addEventListener("mouseup",se),document.body.style.cursor="col-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",Z),document.removeEventListener("mouseup",se),document.body.style.cursor="",document.body.style.userSelect=""}},[x]),k.useEffect(()=>{if(t){const Z=t.agents.filter(se=>"sub_agents"in se&&se.sub_agents.length>0).map(se=>se.id);u(new Set(Z))}},[t==null?void 0:t.id,t==null?void 0:t.agents.length]),!t)return null;const O=k.useMemo(()=>new Map(t.agents.map(Z=>[Z.id,Z])),[t.agents]);function M(){if(!p.trim()||!t)return;const Z=`generating_${Date.now()}`,se=p;b(ke=>new Map(ke).set(Z,se)),f(!1),h(""),sv(t.id,se).then(ke=>{var F,ee,B,K;if(ke.success&&ke.config){const ie=ke.config,ge=[];if((F=ie.tools)!=null&&F.builtin)for(const _e of ie.tools.builtin)ge.push({type:"builtin",name:_e});if((ee=ie.tools)!=null&&ee.mcp)for(const _e of ie.tools.mcp){const Le=l.find(Xe=>Xe.name===_e.server);Le&&ge.push({type:"mcp",server:{...Le,tool_filter:_e.tools}})}if((B=ie.tools)!=null&&B.custom)for(const _e of ie.tools.custom){const Le=t.custom_tools.find(Xe=>Xe.name===_e);Le&&ge.push({type:"function",name:_e,module_path:Le.module_path})}if((K=ie.tools)!=null&&K.agents)for(const _e of ie.tools.agents){const Le=t.agents.find(Xe=>Xe.id===_e);Le&&ge.push({type:"agent",agent_id:_e,name:Le.name})}const Y=t.app.models||[],oe=Y.find(_e=>_e.id===t.app.default_model_id)||Y[0],je=ie.name||"new_agent",Ce={id:`agent_${Date.now().toString(36)}`,type:"LlmAgent",name:je,description:ie.description||"",instruction:ie.instruction||"",output_key:ie.output_key||je,model:oe?{provider:oe.provider,model_name:oe.model_name,api_base:oe.api_base,temperature:oe.temperature,max_output_tokens:oe.max_output_tokens,top_p:oe.top_p,top_k:oe.top_k,fallbacks:[]}:{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]},include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:ge,sub_agents:ie.sub_agents||[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};n(Ce),a(Ce.id),e==null||e(Ce.id)}else console.error("Failed to generate agent:",ke.error)}).catch(ke=>{console.error("Error generating agent:",ke)}).finally(()=>{b(ke=>{const F=new Map(ke);return F.delete(Z),F})})}const S=t.agents.find(Z=>Z.id===s);function R(Z){a(Z),e==null||e(Z)}function P(Z){if(!t)return;const se=t.app.models||[],ke=se.find(ee=>ee.id===t.app.default_model_id)||se[0],F=V4(Z,ke);n(F),R(F.id)}function w(Z,se){se.stopPropagation(),confirm("Delete this agent?")&&(r(Z),s===Z&&(e==null||e(null)))}function W(Z){const se=new Set(c);se.has(Z)?se.delete(Z):se.add(Z),u(se)}function H(Z){if(!q.current||!L.current)return;const se=q.current.getBoundingClientRect(),ke=Z.clientY-se.top,F=60,ee=8;if(ke<F){const B=Math.max(1,ee*(1-ke/F));q.current.scrollTop-=B}else if(ke>se.height-F){const B=Math.max(1,ee*(1-(se.height-ke)/F));q.current.scrollTop+=B}}function y(Z,se){Z.dataTransfer.setData("text/plain",se),Z.dataTransfer.effectAllowed="move",L.current=se,requestAnimationFrame(()=>C(se))}function N(){L.current=null,C(null),U(null),I(null),G.current&&(cancelAnimationFrame(G.current),G.current=null)}function $(Z,se,ke){if(!t)return;Z.preventDefault(),Z.stopPropagation();const F=L.current;if(!F)return;const ee=t.agents.find(B=>B.id===se);!ee||!("sub_agents"in ee)||D(F,se)||(Z.dataTransfer.dropEffect="move",I({parentId:se,index:ke}),U(null))}function ne(Z,se,ke){if(!t)return;Z.preventDefault(),Z.stopPropagation();const F=Z.dataTransfer.getData("text/plain");if(!F)return;if(F===se||D(F,se)){I(null);return}const ee=t.agents.find(K=>K.id===se);if(!ee||!("sub_agents"in ee))return;t.agents.forEach(K=>{"sub_agents"in K&&K.sub_agents.includes(F)&&i(K.id,{sub_agents:K.sub_agents.filter(ie=>ie!==F)})});const B=[...ee.sub_agents.filter(K=>K!==F)];B.splice(ke,0,F),i(se,{sub_agents:B}),u(K=>new Set([...K,se])),C(null),I(null)}function de(Z,se,ke){if(!t)return;const F=L.current;Z.preventDefault(),Z.stopPropagation(),F!==se&&(F&&D(F,se)||(Z.dataTransfer.dropEffect="move",U({agentId:se,type:ke}),I(null)))}function be(Z){const se=Z.relatedTarget;(!se||!Z.currentTarget.contains(se))&&U(null)}function te(Z,se,ke){if(!t)return;Z.preventDefault(),Z.stopPropagation();const F=Z.dataTransfer.getData("text/plain");if(!F||F===se)return;if(ke==="sub_agent"&&D(F,se)){C(null),U(null),I(null);return}const ee=t.agents.find(K=>K.id===se),B=t.agents.find(K=>K.id===F);if(!(!ee||!B)){if(ke==="sub_agent")"sub_agents"in ee&&(t.agents.forEach(K=>{"sub_agents"in K&&K.sub_agents.includes(F)&&i(K.id,{sub_agents:K.sub_agents.filter(ie=>ie!==F)})}),ee.sub_agents.includes(F)||(i(se,{sub_agents:[...ee.sub_agents,F]}),u(K=>new Set([...K,se]))));else if(ke==="tool"&&"tools"in ee){const K=ee;K.tools.some(ge=>ge.type==="agent"&&ge.agent_id===F)||i(se,{tools:[...K.tools,{type:"agent",agent_id:F,name:B.name}]})}C(null),U(null)}}function D(Z,se){if(Z===se)return!0;const ke=[Z],F=new Set;for(;ke.length;){const ee=ke.pop();if(F.has(ee))continue;F.add(ee);const B=O.get(ee);if(!(!B||!("sub_agents"in B)))for(const K of B.sub_agents){if(K===se)return!0;ke.push(K)}}return!1}function X(Z){const se=Ec.find(ke=>ke.type===Z);return se?se.icon:Rr}function re(Z){const se=Ec.find(ke=>ke.type===Z);return se?se.color:"#888"}function Q(Z,se=0,ke=new Set){return Z.map(F=>{const ee=X(F.type),B=re(F.type),K="sub_agents"in F&&F.sub_agents.length>0,ie="sub_agents"in F,ge=F.type==="LlmAgent",Y=c.has(F.id),oe=T===F.id,je=(E==null?void 0:E.agentId)===F.id&&(E==null?void 0:E.type)==="sub_agent",Ce=(E==null?void 0:E.agentId)===F.id&&(E==null?void 0:E.type)==="tool",_e=ke.has(F.id),Le=K&&Y&&!_e,Xe=Le&&t?F.sub_agents.map(fe=>t.agents.find(Ee=>Ee.id===fe)).filter(fe=>fe!==void 0):[],ot=T&&T!==F.id&&(ie||ge);return o.jsxs("div",{className:"agent-tree-item",children:[o.jsxs("div",{className:`agent-item ${s===F.id?"selected":""} ${oe?"dragging":""} ${ot?"drop-target":""}`,onClick:()=>R(F.id),style:{paddingLeft:12+se*20},draggable:!0,onDragStart:fe=>y(fe,F.id),onDragEnd:N,onDragOver:fe=>{ot&&(fe.preventDefault(),fe.stopPropagation())},children:[o.jsx("div",{className:"drag-handle",children:o.jsx(bj,{size:12})}),K?o.jsx("button",{className:"expand-btn",onClick:fe=>{fe.stopPropagation(),W(F.id)},children:Y?o.jsx(zt,{size:16}):o.jsx(wt,{size:16})}):o.jsx("span",{style:{width:20}}),o.jsx("div",{className:"agent-icon",style:{background:B},children:o.jsx(ee,{size:14})}),o.jsx("span",{className:"agent-name",children:F.name}),o.jsx("button",{className:"delete-btn",onClick:fe=>w(F.id,fe),children:o.jsx(Je,{size:14})}),ot&&o.jsxs("div",{className:"drop-overlay",children:[ie&&o.jsxs("div",{className:`drop-zone-overlay ${je?"active":""}`,onDragOver:fe=>de(fe,F.id,"sub_agent"),onDragLeave:be,onDrop:fe=>te(fe,F.id,"sub_agent"),children:[o.jsx(Sv,{size:12}),o.jsx("span",{children:"Sub-agent"})]}),ge&&o.jsxs("div",{className:`drop-zone-overlay ${Ce?"active":""}`,onDragOver:fe=>de(fe,F.id,"tool"),onDragLeave:be,onDrop:fe=>te(fe,F.id,"tool"),children:[o.jsx(gn,{size:12}),o.jsx("span",{children:"Tool"})]})]})]}),Le&&o.jsxs("div",{className:"sub-agents",children:[T&&T!==F.id&&o.jsx("div",{className:`insert-indicator ${(z==null?void 0:z.parentId)===F.id&&(z==null?void 0:z.index)===0?"active":""}`,style:{marginLeft:12+(se+1)*20},onDragOver:fe=>$(fe,F.id,0),onDragLeave:()=>I(null),onDrop:fe=>ne(fe,F.id,0)}),Xe.map((fe,Ee)=>o.jsxs(qt.Fragment,{children:[Q([fe],se+1,new Set([...ke,F.id])),T&&T!==F.id&&T!==fe.id&&o.jsx("div",{className:`insert-indicator ${(z==null?void 0:z.parentId)===F.id&&(z==null?void 0:z.index)===Ee+1?"active":""}`,style:{marginLeft:12+(se+1)*20},onDragOver:he=>$(he,F.id,Ee+1),onDragLeave:()=>I(null),onDrop:he=>ne(he,F.id,Ee+1)})]},fe.id))]})]},F.id)})}const ae=new Set(t.agents.flatMap(Z=>"sub_agents"in Z?Z.sub_agents:[])),J=t.agents.filter(Z=>!ae.has(Z.id)),pe=J.length>0?J:t.agents;return o.jsxs("div",{className:"agents-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("aside",{className:"agents-sidebar",style:{width:j},children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["Agents (",t.agents.length,")",m.size>0&&o.jsxs("span",{className:"generating-badge",children:[o.jsx(ir,{size:12,className:"spin"})," ",m.size]})]}),o.jsxs("div",{className:"header-buttons",children:[Ec.map(({type:Z,icon:se,color:ke})=>o.jsx("button",{className:"quick-add-btn",style:{background:ke},onClick:()=>P(Z),title:`Add ${Z}`,children:o.jsx(se,{size:14})},Z)),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>f(!0),title:"AI-powered agent setup",children:o.jsx(pc,{size:14})})]})]}),o.jsx("div",{className:"agents-list",ref:q,onDragOver:H,children:t.agents.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Rr,{size:32}),o.jsx("p",{children:"No agents yet"})]}):Q(pe)})]}),o.jsx("div",{ref:_,className:`sidebar-resizer ${x?"resizing":""}`,onMouseDown:A}),o.jsx("div",{className:"agent-editor-area",children:S?o.jsx($4,{agent:S}):o.jsxs("div",{className:"empty-state card",children:[o.jsx(Rr,{size:48}),o.jsxs("p",{children:["Select an agent to edit",o.jsx("br",{}),"or create a new one"]})]})}),d&&o.jsx("div",{className:"type-selector",onClick:()=>f(!1),children:o.jsxs("div",{className:"quick-setup-content",onClick:Z=>Z.stopPropagation(),children:[o.jsxs("h2",{children:[o.jsx(pc,{size:20})," Quick Agent Setup"]}),o.jsx("p",{className:"quick-setup-desc",children:"Describe what you want this agent to do. Runs in the background - you can start multiple!"}),o.jsxs("div",{className:"quick-setup-form",children:[o.jsx("textarea",{value:p,onChange:Z=>h(Z.target.value),placeholder:"Example: An agent that searches the web for information and summarizes the results. It should be able to search Google and handle multiple queries in parallel.",rows:5,autoFocus:!0,onKeyDown:Z=>{Z.key==="Enter"&&(Z.metaKey||Z.ctrlKey)&&p.trim()&&M()}}),o.jsxs("div",{className:"quick-setup-info",children:[o.jsx("strong",{children:"Available resources:"}),o.jsxs("ul",{children:[o.jsxs("li",{children:[t.app.state_keys.length," state keys"]}),o.jsxs("li",{children:[l.length," MCP servers"]}),o.jsxs("li",{children:[t.custom_tools.length," custom tools"]}),o.jsxs("li",{children:[t.agents.length," existing agents"]})]})]}),o.jsxs("div",{className:"quick-setup-actions",children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>f(!1),children:"Cancel"}),o.jsxs("button",{className:"btn btn-primary",onClick:M,disabled:!p.trim(),children:[o.jsx(pc,{size:14}),"Generate (⌘↵)"]})]})]})]})})]})}var Sp="\x1B[0m",Cp="\x1B[1m",y1=e=>e instanceof Error?e.message:typeof e=="string"?e:"An unknown error occurred",q4=e=>{let t=y1(e),n=`${Cp}[MONACOPILOT ERROR] ${t}${Sp}`;return console.error(n),{message:t}},J4=(e,t)=>{console.warn(`${Cp}[MONACOPILOT WARN] ${e}${t?`
${y1(t)}`:""}${Sp}`)},K4=(e,t,n)=>console.warn(`${Cp}[MONACOPILOT DEPRECATED] "${e}" is deprecated${n?` in ${n}`:""}. Please use "${t}" instead. It will be removed in a future version.${Sp}`),Ka={report:q4,warn:J4,warnDeprecated:K4},Rm=(e,t,n={})=>{if(t<=0)return"";let r=e.split(`
`),i=r.length;if(t>=i)return e;if(n.truncateDirection==="keepEnd"){let a=r.slice(-t);return a.every(l=>l==="")?`
`.repeat(t):a.join(`
`)}let s=r.slice(0,t);return s.every(a=>a==="")?`
`.repeat(t):s.join(`
`)},G4=100,Y4=!0,v1="onIdle",Q4=!0,X4=120,Z4=400,eE=0,Np=(e,t)=>t.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:e.lineNumber,endColumn:e.column}),tE=(e,t)=>t.getValueInRange({startLineNumber:e.lineNumber,startColumn:e.column,endLineNumber:t.getLineCount(),endColumn:t.getLineMaxColumn(t.getLineCount())}),nE=e=>e.getValue(),rE=class{constructor(e){this.capacity=e,this.head=0,this.tail=0,this.size=0,this.buffer=new Array(e)}enqueue(e){let t;return this.size===this.capacity&&(t=this.dequeue()),this.buffer[this.tail]=e,this.tail=(this.tail+1)%this.capacity,this.size++,t}dequeue(){if(this.size===0)return;let e=this.buffer[this.head];return this.buffer[this.head]=void 0,this.head=(this.head+1)%this.capacity,this.size--,e}getAll(){return this.buffer.filter(e=>e!==void 0)}clear(){this.buffer=new Array(this.capacity),this.head=0,this.tail=0,this.size=0}getSize(){return this.size}isEmpty(){return this.size===0}isFull(){return this.size===this.capacity}},b1=class w1{constructor(){this.cache=new rE(w1.MAX_CACHE_SIZE)}get(t,n){return this.cache.getAll().filter(r=>this.isValidCacheItem(r,t,n))}add(t){t.completion.trim()&&this.cache.enqueue(t)}clear(){this.cache.clear()}isValidCacheItem(t,n,r){let i=t.textBeforeCursor.trim(),s=Np(n,r),a=s,l=r.getLineContent(n.lineNumber);if(n.column===l.length+1&&n.lineNumber<r.getLineCount()){let u=r.getLineContent(n.lineNumber+1);a=`${s}
${u}`}if(!(a.trim().includes(i)||i.includes(a.trim())))return!1;let c=r.getValueInRange(t.range);return this.isPartialMatch(c,t.completion)?this.isPositionValid(t,n):!1}isPartialMatch(t,n){let r=t.trim(),i=n.trim();return i.startsWith(r)||r.startsWith(i)}isPositionValid(t,n){let{range:r}=t,{startLineNumber:i,startColumn:s,endLineNumber:a,endColumn:l}=r,{lineNumber:c,column:u}=n;return c<i||c>a?!1:i===a?u>=s-1&&u<=l+1:c===i?u>=s-1:c===a?u<=l+1:!0}};b1.MAX_CACHE_SIZE=20;var iE=b1,oE=class{constructor(e){this.formattedCompletion="",this.formattedCompletion=e}setCompletion(e){return this.formattedCompletion=e,this}removeInvalidLineBreaks(){return this.formattedCompletion=this.formattedCompletion.trimEnd(),this}removeMarkdownCodeSyntax(){return this.formattedCompletion=this.removeMarkdownCodeBlocks(this.formattedCompletion),this}removeMarkdownCodeBlocks(e){let t=e.split(`
`),n=[],r=!1;for(let i=0;i<t.length;i++){let s=t[i],a=s.trim().startsWith("```");if(a&&!r){r=!0;continue}if(a&&r){r=!1;continue}n.push(s)}return n.join(`
`)}removeExcessiveNewlines(){return this.formattedCompletion=this.formattedCompletion.replace(/\n{3,}/g,`

`),this}build(){return this.formattedCompletion}},sE=class{findOverlaps(e,t,n){if(!e)return{startOverlapLength:0,maxOverlapLength:0};let r=e.length,i=t.length,s=n.length,a=0,l=0,c=0,u=Math.min(r,i);for(let p=1;p<=u;p++){let h=e.substring(0,p),m=t.slice(-p);h===m&&(c=p)}let d=Math.min(r,s);for(let p=0;p<d&&e[p]===n[p];p++)a++;for(let p=1;p<=d;p++)e.slice(-p)===n.slice(0,p)&&(l=p);let f=Math.max(a,l);if(f===0){for(let p=1;p<r;p++)if(n.startsWith(e.substring(p))){f=r-p;break}}return{startOverlapLength:c,maxOverlapLength:f}}},aE=class{constructor(e){this.monaco=e,this.textOverlapCalculator=new sE}computeInsertionRange(e,t,n){if(!t)return this.createEmptyRange(e);let r=n.getOffsetAt(e),i=n.getValue().substring(0,r),s=n.getValue().substring(r);if(r>=n.getValue().length)return this.createEmptyRange(e);if(s.length===0)return this.createEmptyRange(e);let{startOverlapLength:a,maxOverlapLength:l}=this.textOverlapCalculator.findOverlaps(t,i,s),c=a>0?n.getPositionAt(r-a):e,u=r+l,d=n.getPositionAt(u);return new this.monaco.Range(c.lineNumber,c.column,d.lineNumber,d.column)}computeCacheRange(e,t){let n=e.lineNumber,r=e.column,i=t.split(`
`),s=i.length-1,a=n+s,l=s===0?r+i[0].length:i[s].length+1;return new this.monaco.Range(n,r,a,l)}createEmptyRange(e){return new this.monaco.Range(e.lineNumber,e.column,e.lineNumber,e.column)}},lE=async e=>{let{endpoint:t,body:n}=e,r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok)throw new Error(`Error while fetching completion item: ${r.statusText}`);let{completion:i,error:s}=await r.json();return{completion:i,error:s}},cE=({pos:e,mdl:t,options:n})=>{let{filename:r,language:i,technologies:s,relatedFiles:a,maxContextLines:l=G4}=n,c=a&&a.length>0?3:2,u=l?Math.floor(l/c):void 0,d=(b,j,g)=>{let x=b(e,t);return j?Rm(x,j,g):x},f=(b,j)=>!b||!j?b:b.map(({content:g,...x})=>({...x,content:Rm(g,j)})),p=d(Np,u,{truncateDirection:"keepEnd"}),h=d(tE,u,{truncateDirection:"keepStart"}),m=f(a,u);return{filename:r,language:i,technologies:s,relatedFiles:m,textBeforeCursor:p,textAfterCursor:h,cursorPosition:e}},uE=(e,t=300)=>{let n=null,r=null,i=(...s)=>{if(r)return r.args=s,r.promise;let a,l,c=new Promise((u,d)=>{a=u,l=d});return r={args:s,promise:c,resolve:a,reject:l},n&&(clearTimeout(n),n=null),n=setTimeout(async()=>{let u=r;if(u){r=null,n=null;try{let d=await e(...u.args);u.resolve(d)}catch(d){u.reject(d)}}},t),c};return i.cancel=()=>{n&&(clearTimeout(n),n=null),r&&(r.reject(new Error("Cancelled")),r=null)},i},dE=e=>typeof e=="string"?e==="Cancelled"||e==="AbortError":e instanceof Error?e.message==="Cancelled"||e.name==="AbortError":!1,io=e=>({items:e,enableForwardStability:!0}),Ju=new iE,pE=async({monaco:e,mdl:t,pos:n,token:r,isCompletionAccepted:i,options:s})=>{let{trigger:a=v1,enableCaching:l=Y4,allowFollowUpCompletions:c=Q4,onError:u,requestHandler:d}=s;if(l&&!i){let f=Ju.get(n,t).map(p=>({insertText:p.completion,range:p.range}));if(f.length>0)return io(f)}if(r.isCancellationRequested||!c&&i)return io([]);try{let f=uE(async m=>{var j,g;(j=s.onCompletionRequested)==null||j.call(s,m);let b;if(d)b=await d(m);else if(s.endpoint)b=await lE({endpoint:s.endpoint,...m});else throw new Error('No endpoint specified for completion request. Please set the "endpoint" option in registerCompletion, or provide a custom requestHandler.');if(b.error)throw new Error(b.error);return(g=s.onCompletionRequestFinished)==null||g.call(s,m,b),b},{onTyping:X4,onIdle:Z4,onDemand:eE}[a]);r.onCancellationRequested(()=>{f.cancel()});let p=cE({pos:n,mdl:t,options:s}),{completion:h}=await f({body:{completionMetadata:p}});if(h){let m=new oE(h).removeMarkdownCodeSyntax().removeExcessiveNewlines().removeInvalidLineBreaks().build(),b=new aE(e);return l&&Ju.add({completion:m,range:b.computeCacheRange(n,m),textBeforeCursor:Np(n,t)}),io([{insertText:m,range:b.computeInsertionRange(n,m,t)}])}}catch(f){if(dE(f))return io([]);u?u(f):Ka.warn("Cannot provide completion",f)}return io([])},Ep=new WeakMap,El=e=>Ep.get(e),fE=(e,t)=>{Ep.set(e,t)},Im=e=>{Ep.delete(e)},hE=e=>({isCompletionAccepted:!1,isCompletionVisible:!1,isExplicitlyTriggered:!1,hasRejectedCurrentCompletion:!1,options:e}),mE=(e,t)=>{let n=El(e);!n||!n.options||(n.options={...n.options,...t})},gE=(e,t,n)=>{let r=El(t);return r?e.languages.registerInlineCompletionsProvider(n.language,{provideInlineCompletions:(i,s,a,l)=>{if(i!==t.getModel())return{items:[]};let c=r.options||n;if(!(c.trigger==="onDemand"&&!r.isExplicitlyTriggered||c.triggerIf&&!c.triggerIf({text:nE(t),position:s,triggerType:c.trigger??v1})))return pE({monaco:e,mdl:i,pos:s,token:l,isCompletionAccepted:r.isCompletionAccepted,options:c})},handleItemDidShow:(i,s,a)=>{var l,c;r.isExplicitlyTriggered=!1,r.hasRejectedCurrentCompletion=!1,!r.isCompletionAccepted&&(r.isCompletionVisible=!0,(c=(l=r.options||n).onCompletionShown)==null||c.call(l,a,s.range))},freeInlineCompletions:()=>{}}):null},xE={TAB:(e,t)=>t.keyCode===e.KeyCode.Tab,CMD_RIGHT_ARROW:(e,t)=>t.keyCode===e.KeyCode.RightArrow&&t.metaKey},yE=class{constructor(e,t,n){this.monaco=e,this.state=t,this.initialOptions=n}handleKeyEvent(e){let t=this.state.options||this.initialOptions,n={monaco:this.monaco,event:e,state:this.state,options:t};this.handleCompletionAcceptance(n),this.handleCompletionRejection(n)}handleCompletionAcceptance(e){var t,n;return e.state.isCompletionVisible&&this.isAcceptanceKey(e.event)?((n=(t=e.options).onCompletionAccepted)==null||n.call(t),e.state.isCompletionAccepted=!0,e.state.isCompletionVisible=!1,!0):(e.state.isCompletionAccepted=!1,!1)}handleCompletionRejection(e){var t,n;return this.shouldRejectCompletion(e)?((n=(t=e.options).onCompletionRejected)==null||n.call(t),e.state.hasRejectedCurrentCompletion=!0,!0):!1}shouldRejectCompletion(e){return e.state.isCompletionVisible&&!e.state.hasRejectedCurrentCompletion&&!e.state.isCompletionAccepted&&!this.isAcceptanceKey(e.event)}isAcceptanceKey(e){return Object.values(xE).some(t=>t(this.monaco,e))}},vE=(e,t,n,r)=>{let i=new yE(e,n,r);return t.onKeyDown(s=>i.handleKeyEvent(s))},k1=(e,t,n)=>{let r=[];fE(t,hE(n)),t.updateOptions({inlineSuggest:{enabled:!0}});try{let i=El(t);if(!i)return Ka.warn("Completion is not registered properly. State not found."),wE();let s=gE(e,t,n);s&&r.push(s);let a=vE(e,t,i,n);return r.push(a),{deregister:()=>{for(let l of r)l.dispose();Ju.clear(),Im(t)},trigger:()=>bE(t),updateOptions:l=>{mE(t,l(i.options||n))}}}catch(i){return n.onError?n.onError(i):Ka.report(i),{deregister:()=>{for(let s of r)s.dispose();Im(t)},trigger:()=>{},updateOptions:()=>{}}}},bE=e=>{let t=El(e);if(!t){Ka.warn("Completion is not registered. Use `registerCompletion` to register completion first.");return}t.isExplicitlyTriggered=!0,e.trigger("keyboard","editor.action.inlineSuggest.trigger",{})},wE=()=>({deregister:()=>{},trigger:()=>{},updateOptions:()=>{}});function kE(){return`tool_${Date.now().toString(36)}`}function jE(e){return/^[a-zA-Z0-9_]+$/.test(e)}const _E=`def my_tool(tool_context: ToolContext, param1: str) -> dict:
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
`;function SE({onSelectTool:e}){const{project:t,updateProject:n,addCustomTool:r,updateCustomTool:i,removeCustomTool:s,selectedToolId:a,setSelectedToolId:l,builtinTools:c,mcpServers:u}=yt(),[d,f]=k.useState(""),[p,h]=k.useState(null),[m,b]=k.useState("tools"),[j,g]=k.useState(null),[x,v]=k.useState(""),[_,T]=k.useState(!1),[C,L]=k.useState(!1),[E,U]=k.useState(!1),[z,I]=k.useState(null),[q,G]=k.useState(null),[A,O]=k.useState({}),[M,S]=k.useState({}),[R,P]=k.useState("");if(!t)return null;const w=t.mcp_servers||[],W=t.custom_tools.find(B=>B.id===a),H=w.find(B=>B.name===j);function y(B){l(B),e==null||e(B)}k.useEffect(()=>{W&&(f(W.code),G(null))},[a]),k.useEffect(()=>{H&&(v(JSON.stringify(H,null,2)),T(!1))},[j]),k.useEffect(()=>{if(!t)return;const B=N(t.mcp_servers||[]);P(JSON.stringify(B,null,2))},[t==null?void 0:t.mcp_servers]),k.useEffect(()=>{if(m==="mcp"&&w.length>0){const B=w.filter(K=>!A[K.name]||A[K.name]==="unknown");B.length>0&&B.forEach(K=>{be(K.name)})}},[m,w.length]);function N(B){const K={};for(const ie of B){const ge={};ie.connection_type==="stdio"?(ge.command=ie.command||"",ge.args=ie.args||[],Object.keys(ie.env||{}).length>0&&(ge.env=ie.env)):ie.connection_type==="sse"&&(ge.url=ie.url||"",Object.keys(ie.headers||{}).length>0&&(ge.headers=ie.headers)),ie.timeout&&ie.timeout!==30&&(ge.timeout=ie.timeout),ie.tool_filter&&(ge.tool_filter=ie.tool_filter),ie.tool_name_prefix&&(ge.tool_name_prefix=ie.tool_name_prefix),K[ie.name]=ge}return{mcpServers:K}}function $(B){const K=[];for(const[ie,ge]of Object.entries(B.mcpServers||{})){const Y={name:ie,description:ge.description||"",connection_type:ge.url?"sse":"stdio",command:ge.command,args:ge.args||[],env:ge.env||{},url:ge.url,headers:ge.headers||{},timeout:ge.timeout||30,tool_filter:ge.tool_filter||null,tool_name_prefix:ge.tool_name_prefix};K.push(Y)}return K}function ne(B){B!==void 0&&P(B)}function de(){try{const B=JSON.parse(R),K=$(B);n({mcp_servers:K})}catch(B){alert("Invalid JSON: "+B.message)}}async function be(B){const K=w.find(ie=>ie.name===B);if(K){O(ie=>({...ie,[B]:"testing"})),S(ie=>({...ie,[B]:""}));try{const ie=await Mu({connection_type:K.connection_type,command:K.command,args:K.args,env:K.env,url:K.url,headers:K.headers,timeout:K.timeout});O(ge=>({...ge,[B]:ie.success?"connected":"error"})),!ie.success&&ie.error&&S(ge=>({...ge,[B]:ie.error||"Unknown error"}))}catch(ie){O(ge=>({...ge,[B]:"error"})),S(ge=>({...ge,[B]:ie.message}))}}}function te(B){const K=u.find(ge=>ge.name===B);if(!K)return;if(w.some(ge=>ge.name===B)){alert(`Server "${B}" is already configured`);return}const ie={name:K.name,description:K.description||"",connection_type:K.connection_type,command:K.command,args:K.args||[],env:K.env||{},url:K.url,headers:K.headers||{},timeout:K.timeout||30,tool_filter:K.tool_filter||null,tool_name_prefix:K.tool_name_prefix};n({mcp_servers:[...w,ie]})}async function D(){for(const B of w)await be(B.name)}function X(){const B=kE();r({id:B,name:"new_tool",description:"",module_path:"tools.custom",code:_E,state_keys_used:[]}),y(B)}function re(B,K){K.stopPropagation(),confirm("Delete this tool?")&&(s(B),a===B&&(e==null||e(null)))}function Q(B){W&&(B.name!==void 0&&(B.name===""||jE(B.name)?G(null):G("Name can only contain letters, numbers, and underscores")),i(W.id,B))}function ae(B){B!==void 0&&W&&(f(B),Q({code:B}))}async function J(){if(W){L(!0);try{const B=await av(t.id,W.name,W.description,W.state_keys_used);B.success&&B.code?(f(B.code),Q({code:B.code})):(console.error("Failed to generate tool code:",B.error),alert("Failed to generate tool code: "+(B.error||"Unknown error")))}catch(B){console.error("Error generating tool code:",B),alert("Error generating tool code: "+B.message)}finally{L(!1)}}}const pe=k.useRef(null),Z=k.useCallback((B,K)=>{if(pe.current&&typeof pe.current=="function")try{pe.current()}catch{}try{const ie=k1(K,B,{language:"python",endpoint:"/api/code-completion",trigger:"onTyping"});typeof ie=="function"?pe.current=ie:pe.current=null}catch{pe.current=null}},[]);k.useEffect(()=>()=>{if(pe.current&&typeof pe.current=="function")try{pe.current()}catch{}},[]);function se(B){B!==void 0&&(v(B),T(B!==JSON.stringify(H,null,2)))}function ke(){if(H)try{const B=JSON.parse(x),K=H.name,ie=w.map(ge=>ge.name===K?B:ge);n({mcp_servers:ie}),g(B.name),T(!1)}catch(B){alert("Invalid JSON: "+B.message)}}async function F(){U(!0),I(null);try{const B=JSON.parse(x),K=await Mu({connection_type:B.connection_type,command:B.command,args:B.args,env:B.env,url:B.url,headers:B.headers,timeout:B.timeout||30});if(I(K),K.success&&K.tools.length>0){const ie={...B,tool_filter:K.tools.map(ge=>ge.name)};v(JSON.stringify(ie,null,2)),T(!0)}}catch(B){I({success:!1,tools:[],error:B.message})}finally{U(!1)}}const ee={};return t.custom_tools.forEach(B=>{const K=B.module_path||"tools";ee[K]||(ee[K]=[]),ee[K].push(B)}),o.jsxs("div",{className:"tools-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("aside",{className:"tools-sidebar",children:[o.jsxs("div",{className:"sidebar-tabs",children:[o.jsxs("button",{className:`sidebar-tab ${m==="tools"?"active":""}`,onClick:()=>{b("tools"),g(null)},children:[o.jsx(gn,{size:14}),"Tools"]}),o.jsxs("button",{className:`sidebar-tab ${m==="mcp"?"active":""}`,onClick:()=>{b("mcp"),l(null),h(null),g(null)},children:[o.jsx(eo,{size:14}),"MCP"]})]}),m==="tools"?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["Custom Tools (",t.custom_tools.length,")"]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:X,children:[o.jsx(nt,{size:14}),"New"]})]}),o.jsxs("div",{className:"tools-tree",children:[c.length>0&&o.jsxs("div",{className:"module-group",children:[o.jsxs("div",{className:"module-header",children:[o.jsx(_j,{size:14}),"Built-in Tools"]}),c.map(B=>o.jsxs("div",{className:`tool-item builtin ${(p==null?void 0:p.name)===B.name?"selected":""}`,onClick:()=>{h(B),y(null),g(null)},children:[o.jsx(Pu,{size:14}),o.jsx("span",{className:"tool-name",children:B.name})]},B.name))]}),t.custom_tools.length===0&&c.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(En,{size:32}),o.jsx("p",{children:"No tools defined yet"})]}):t.custom_tools.length>0&&Object.entries(ee).map(([B,K])=>o.jsxs("div",{className:"module-group",children:[o.jsxs("div",{className:"module-header",children:[o.jsx(xv,{size:14}),B]}),K.map(ie=>o.jsxs("div",{className:`tool-item ${a===ie.id?"selected":""}`,onClick:()=>{y(ie.id),h(null),g(null)},children:[o.jsx(gn,{size:14}),o.jsx("span",{className:"tool-name",children:ie.name}),o.jsx("button",{className:"delete-btn",onClick:ge=>re(ie.id,ge),children:o.jsx(Je,{size:14})})]},ie.id))]},B))]})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["MCP Servers (",w.length,")"]}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:D,title:"Test all server connections",children:o.jsx(rn,{size:14})})]}),o.jsx("div",{className:"mcp-servers-list",children:w.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(eo,{size:32}),o.jsx("p",{children:"No MCP servers configured"}),o.jsx("p",{style:{fontSize:"12px",color:"var(--text-muted)"},children:"Edit the JSON to add servers"})]}):w.map(B=>{const K=A[B.name]||"unknown",ie=M[B.name];return o.jsxs("div",{className:"mcp-server-item-wrapper",children:[o.jsxs("div",{className:"mcp-server-item",children:[o.jsxs("div",{className:"mcp-server-info",children:[o.jsx(eo,{size:14}),o.jsx("span",{className:"mcp-server-name",children:B.name}),o.jsxs("span",{className:`mcp-status-badge ${K}`,children:[K==="testing"?o.jsx(ir,{size:10,className:"spin"}):null,K==="unknown"&&"●",K==="connected"&&"●",K==="error"&&"●"]})]}),o.jsxs("div",{className:"mcp-server-actions",children:[o.jsx("span",{className:"mcp-server-type",children:B.connection_type}),o.jsxs("button",{className:"btn btn-sm",onClick:()=>be(B.name),disabled:K==="testing",title:"Test server connection",style:{display:"flex",alignItems:"center",gap:4},children:[K==="testing"?o.jsx(ir,{size:12,className:"spin"}):o.jsx(rn,{size:12}),o.jsx("span",{style:{fontSize:11},children:"Test"})]})]})]}),K==="error"&&ie&&o.jsxs("div",{className:"mcp-server-error",children:[o.jsx("span",{style:{fontWeight:500,color:"var(--error)"},children:"Error:"})," ",ie]})]},B.name)})})]})]}),o.jsx("div",{className:"tool-editor",children:p?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(Pu,{size:20,style:{color:"var(--accent-secondary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:p.name}),o.jsx("span",{className:"badge badge-muted",children:"Built-in"})]}),o.jsxs("div",{className:"builtin-tool-info",children:[o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("p",{children:p.description||"No description available."})]}),o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Usage"}),o.jsx("p",{children:"This is a built-in tool provided by ADK. Add it to any LLM agent's tools list to enable it."}),o.jsxs("code",{children:['tools: ["',p.name,'"]']})]}),o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Note"}),o.jsx("p",{children:"Built-in tools are read-only and cannot be modified. Create a custom tool if you need different behavior."})]})]})]}):W?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(gn,{size:20,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o.jsx("input",{type:"text",value:W.name,onChange:B=>Q({name:B.target.value}),placeholder:"Tool name",style:{borderColor:q?"var(--error)":void 0}}),q&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:q})]})]}),o.jsxs("div",{className:"editor-meta",children:[o.jsxs("div",{className:"meta-field grow",children:[o.jsx("label",{children:"Description"}),o.jsx("input",{type:"text",value:W.description,onChange:B=>Q({description:B.target.value}),placeholder:"What does this tool do?"})]}),o.jsxs("div",{className:"meta-field",children:[o.jsx("label",{children:"Module Path"}),o.jsx("input",{type:"text",value:W.module_path,onChange:B=>Q({module_path:B.target.value}),placeholder:"tools.custom",style:{width:180}})]})]}),o.jsxs("div",{className:"code-actions",children:[o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:J,disabled:C||!W.name||!W.description,title:!W.name||!W.description?"Add a name and description first":"Generate code using AI",children:C?o.jsxs(o.Fragment,{children:[o.jsx(ir,{size:14,className:"spinning"}),"Generating..."]}):o.jsxs(o.Fragment,{children:[o.jsx(ap,{size:14}),"Write Tool"]})}),o.jsx("span",{className:"action-hint",children:"AI will generate code based on the tool name, description, and selected state keys"})]}),o.jsx("div",{className:"code-editor",children:o.jsx(on,{height:"100%",language:"python",theme:"vs-dark",value:d,onChange:ae,onMount:Z,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12}}})}),o.jsxs("div",{className:"state-keys-panel",children:[o.jsxs("h4",{children:[o.jsx(op,{size:14})," State Keys Used"]}),o.jsx("div",{className:"state-key-chips",children:t.app.state_keys.length===0?o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"No state keys defined. Add them in App Config."}):t.app.state_keys.map(B=>{const K=W.state_keys_used.includes(B.name);return o.jsxs("label",{className:`state-key-chip ${K?"selected":""}`,title:B.description,children:[o.jsx("input",{type:"checkbox",checked:K,onChange:ie=>{const ge=ie.target.checked?[...W.state_keys_used,B.name]:W.state_keys_used.filter(Y=>Y!==B.name);Q({state_keys_used:ge})}}),B.name,o.jsxs("span",{style:{color:"var(--text-muted)",fontSize:11},children:["(",B.type,")"]})]},B.name)})})]})]}):H?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(eo,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:H.name}),o.jsx("span",{className:"badge badge-info",children:H.connection_type}),_&&o.jsx("span",{className:"unsaved-badge",children:"Unsaved"}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:F,disabled:E,title:"Test connection and discover available tools",children:[E?o.jsx(ir,{size:14,className:"spin"}):o.jsx(ip,{size:14}),E?"Testing...":"Test Connection"]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:ke,disabled:!_,children:[o.jsx(Va,{size:14}),"Save"]})]}),z&&o.jsx("div",{className:`mcp-test-result ${z.success?"success":"error"}`,children:z.success?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"test-result-header",children:["✓ Connected! Found ",z.tools.length," tools"]}),z.tools.length>0&&o.jsxs("div",{className:"test-result-tools",children:[o.jsx("strong",{children:"Available tools:"}),o.jsx("ul",{children:z.tools.map(B=>o.jsxs("li",{children:[o.jsx("code",{children:B.name}),B.description&&o.jsxs("span",{children:[" — ",B.description]})]},B.name))}),o.jsx("p",{className:"hint",children:'The tool_filter has been updated with these tools. Click "Save" to apply.'})]})]}):o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"test-result-header",children:"✗ Connection failed"}),o.jsx("div",{className:"test-result-error",children:z.error})]})}),o.jsx("div",{className:"mcp-info",children:o.jsx("p",{children:'Configure your MCP server using JSON. Click "Test Connection" to verify and discover available tools.'})}),o.jsx("div",{className:"code-editor",children:o.jsx(on,{height:"100%",language:"json",theme:"vs-dark",value:x,onChange:se,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},formatOnPaste:!0}})}),o.jsxs("div",{className:"mcp-help",children:[o.jsx("h4",{children:"Schema Reference"}),o.jsxs("div",{className:"schema-fields",children:[o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"name"}),o.jsx("span",{children:"Unique identifier for this server"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"description"}),o.jsx("span",{children:"Human-readable description"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"connection_type"}),o.jsx("span",{children:'"stdio" | "sse" | "http"'})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"command"}),o.jsx("span",{children:"Command to run (for stdio)"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"args"}),o.jsx("span",{children:"Array of command arguments"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"env"}),o.jsx("span",{children:"Environment variables object"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"url"}),o.jsx("span",{children:"Server URL (for sse/http)"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"tool_filter"}),o.jsx("span",{children:"Array of tool names to include (null/omit = all tools, [] = no tools)"})]})]})]})]}):m==="mcp"?o.jsxs("div",{className:"mcp-json-editor",children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(eo,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:"mcp.json"}),o.jsx("span",{className:"badge badge-muted",children:"Model Context Protocol"}),o.jsxs("select",{value:"",onChange:B=>{B.target.value&&te(B.target.value)},style:{padding:"6px 10px",fontSize:"12px",borderRadius:"6px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",color:"var(--text-primary)"},children:[o.jsx("option",{value:"",children:"+ Add known server..."}),u.filter(B=>!w.some(K=>K.name===B.name)).map(B=>o.jsxs("option",{value:B.name,children:[B.name," - ",B.description||"No description"]},B.name))]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:de,children:[o.jsx(Va,{size:14}),"Apply Changes"]})]}),o.jsx("div",{className:"mcp-json-info",children:o.jsxs("p",{children:["Configure your MCP servers using the standard ",o.jsx("code",{children:"mcp.json"})," format. Select a known server from the dropdown to add its configuration."]})}),o.jsx("div",{className:"editor-content",style:{flex:1},children:o.jsx(on,{height:"100%",defaultLanguage:"json",value:R,onChange:ne,theme:"vs-dark",options:{minimap:{enabled:!1},fontSize:14,lineNumbers:"on",scrollBeyondLastLine:!1,wordWrap:"on",tabSize:2,formatOnPaste:!0,formatOnType:!0}})})]}):o.jsxs("div",{className:"empty-state",children:[o.jsx(En,{size:48}),o.jsxs("p",{children:["Select a tool to view",o.jsx("br",{}),"or create a new custom tool"]})]})})]})}function CE(){return`callback_${Date.now().toString(36)}`}function Om(e){return/^[a-zA-Z0-9_]+$/.test(e)}function j1(e){switch(e){case"before_agent":case"after_agent":return`from google.adk.agents.callback_context import CallbackContext
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
`;default:return j1("before_agent")}}function NE({onSelectCallback:e}){var E,U;const{project:t,updateProject:n,addCustomCallback:r,updateCustomCallback:i,removeCustomCallback:s}=yt(),[a,l]=k.useState(""),[c,u]=k.useState(null),[d,f]=k.useState(null),[p,h]=k.useState(!1),m=k.useRef(null);if(!t)return null;const b=t.custom_callbacks||[],j=b.find(z=>z.id===c);function g(z){u(z),e==null||e(z)}k.useEffect(()=>{j?(l(j.code),f(null)):l("")},[c,j]);function x(){const z=CE(),I="new_callback",q={id:z,name:I,description:"",module_path:`callbacks.${I}`,code:j1("before_agent"),state_keys_used:[]};r(q),g(z)}function v(z,I){I.stopPropagation(),confirm("Delete this callback?")&&(s(z),c===z&&(e==null||e(null),u(null),l("")))}function _(){if(!c)return;const z=b.find(G=>G.id===c);if(!z)return;const I=z.name.trim();if(!I){alert("Please enter a name");return}if(!Om(I)){f("Name must contain only alphanumeric characters and underscores");return}if(b.find(G=>G.name===I&&G.id!==z.id)){f("A callback with this name already exists");return}i(z.id,{code:a,name:I,description:z.description,module_path:`callbacks.${I}`,state_keys_used:z.state_keys_used}),f(null)}function T(z,I){m.current=I;try{k1(I,{endpoint:"/api/code-completion",language:"python"})}catch(q){console.warn("Failed to register Monacopilot completion:",q)}}async function C(){if(j){h(!0);try{let z="before_agent";const I=j.name.toLowerCase(),q=j.description.toLowerCase();I.includes("after_agent")||q.includes("after agent")?z="after_agent":I.includes("before_model")||q.includes("before model")?z="before_model":I.includes("after_model")||q.includes("after model")?z="after_model":I.includes("before_tool")||q.includes("before tool")?z="before_tool":I.includes("after_tool")||q.includes("after tool")?z="after_tool":(I.includes("before_agent")||q.includes("before agent"))&&(z="before_agent");const G=await lv(t.id,j.name,j.description,z,j.state_keys_used);G.success&&G.code?(l(G.code),i(j.id,{code:G.code})):(console.error("Failed to generate callback code:",G.error),alert("Failed to generate callback code: "+(G.error||"Unknown error")))}catch(z){console.error("Error generating callback code:",z),alert("Error generating callback code: "+z.message)}finally{h(!1)}}}const L=((U=(E=t.app)==null?void 0:E.state_keys)==null?void 0:U.map(z=>z.name))||[];return o.jsxs("div",{className:"tools-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"tools-sidebar",children:[o.jsxs("div",{className:"tools-sidebar-header",children:[o.jsx("h3",{children:"Callbacks"}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:x,title:"Add Callback",children:o.jsx(nt,{size:16})})]}),o.jsx("div",{className:"tools-list",children:b.length===0?o.jsx("div",{style:{padding:"16px",color:"var(--text-secondary)",fontSize:"14px"},children:"No callbacks yet. Click + to add one."}):b.map(z=>o.jsxs("div",{className:`tool-item ${c===z.id?"selected":""}`,onClick:()=>g(z.id),children:[o.jsxs("div",{style:{flex:1},children:[o.jsx("div",{className:"tool-item-name",children:z.name}),z.description&&o.jsx("div",{className:"tool-item-type",style:{fontSize:"11px",color:"var(--text-secondary)",marginTop:"2px"},children:z.description})]}),o.jsx("div",{className:"tool-item-actions",children:o.jsx("button",{className:"btn btn-icon btn-sm",onClick:I=>v(z.id,I),title:"Delete",children:o.jsx(Je,{size:14})})})]},z.id))})]}),o.jsx("div",{className:"tools-editor",children:j?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"tools-editor-header",children:[o.jsx("h3",{children:"Edit Callback"}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:_,children:[o.jsx(Va,{size:16,style:{marginRight:"6px"}}),"Save"]})]}),o.jsxs("div",{className:"tools-editor-content",style:{padding:"16px",overflowY:"auto"},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Name"}),o.jsx("input",{type:"text",value:j.name,onChange:z=>{const I=z.target.value;i(j.id,{name:I,module_path:`callbacks.${I.trim()||"callback"}`}),d&&Om(I)&&f(null)},className:d?"error":""}),d&&o.jsx("div",{className:"error-message",children:d})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Description"}),o.jsx("textarea",{value:j.description,onChange:z=>i(j.id,{description:z.target.value}),rows:2,placeholder:"Describe what this callback does..."})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Module Path"}),o.jsx("input",{type:"text",value:j.module_path,onChange:z=>i(j.id,{module_path:z.target.value}),placeholder:"callbacks.custom"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"State Keys Used"}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"8px"},children:L.map(z=>{const I=j.state_keys_used.includes(z);return o.jsxs("button",{type:"button",className:`btn btn-sm ${I?"btn-primary":"btn-secondary"}`,onClick:()=>{const q=I?j.state_keys_used.filter(G=>G!==z):[...j.state_keys_used,z];i(j.id,{state_keys_used:q})},children:[o.jsx(op,{size:12,style:{marginRight:"4px"}}),z]},z)})}),L.length===0&&o.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"12px",marginTop:"4px"},children:"No state keys defined in App Config"})]}),o.jsxs("div",{className:"form-group",children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[o.jsx("label",{children:"Code"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:C,disabled:p||!j.name,title:j.name?"Generate code using AI":"Add a name first",children:p?o.jsxs(o.Fragment,{children:[o.jsx(ir,{size:14,className:"spinning"}),"Generating..."]}):o.jsxs(o.Fragment,{children:[o.jsx(ap,{size:14}),"Generate"]})})]}),o.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"8px"},children:"AI will generate code based on the callback name, description, and selected state keys"}),o.jsx("div",{className:"code-editor-container",children:o.jsx(on,{height:"100%",language:"python",theme:"vs-dark",value:a,onChange:z=>l(z||""),onMount:T,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0}})})]})]})]}):o.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)"},children:"Select a callback to edit, or create a new one"})})]})}function EE(e){try{const t=new URL(e),n=t.host,r=t.pathname,i=[{pattern:n,label:`${n} (exact domain)`},{pattern:`${n}/*`,label:`${n}/* (domain + any path)`}],s=n.split(".");if(s.length>2){const a=s.slice(-2).join(".");i.push({pattern:`*.${a}`,label:`*.${a} (all subdomains)`})}if(r&&r!=="/"){const a=r.split("/").filter(Boolean);a.length>0&&i.push({pattern:`${n}/${a[0]}/*`,label:`${n}/${a[0]}/* (specific path)`})}return i}catch{return[{pattern:e,label:e}]}}const Fe={overlay:{position:"fixed",inset:0,backgroundColor:"rgba(0, 0, 0, 0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999},dialog:{backgroundColor:"#12121a",border:"1px solid rgba(245, 158, 11, 0.5)",borderRadius:8,boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.5)",width:500,maxWidth:"90vw",overflow:"hidden"},header:{display:"flex",alignItems:"center",gap:8,padding:12,borderBottom:"1px solid #374151",backgroundColor:"rgba(120, 53, 15, 0.2)"},headerIcon:{color:"#fbbf24"},headerTitle:{fontWeight:600,color:"#fcd34d",fontSize:14},closeButton:{marginLeft:"auto",background:"none",border:"none",color:"#6b7280",cursor:"pointer",padding:4,display:"flex",alignItems:"center"},content:{padding:16,display:"flex",flexDirection:"column",gap:16},sourceText:{fontSize:13,color:"#9ca3af"},requestBox:{backgroundColor:"#0a0a0f",borderRadius:6,border:"1px solid #374151",padding:12,fontFamily:"'SF Mono', 'Consolas', monospace",fontSize:13},methodBadge:e=>({fontWeight:700,color:e==="POST"?"#4ade80":e==="GET"?"#60a5fa":"#9ca3af",marginRight:8}),urlText:{color:"#d1d5db",wordBreak:"break-all"},headersText:{marginTop:8,fontSize:11,color:"#6b7280"},label:{fontSize:13,color:"#9ca3af",marginBottom:6},select:{width:"100%",padding:"10px 12px",backgroundColor:"#1a1a24",border:"1px solid #4b5563",borderRadius:6,fontSize:13,color:"#e5e7eb",cursor:"pointer",appearance:"none",backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 12px center",paddingRight:36},customInput:{width:"100%",padding:"10px 12px",backgroundColor:"#1a1a24",border:"1px solid #4b5563",borderRadius:6,fontSize:13,color:"#e5e7eb",fontFamily:"'SF Mono', 'Consolas', monospace"},radioGroup:{display:"flex",gap:16,marginTop:8},radioLabel:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"#9ca3af",cursor:"pointer"},backLink:{marginLeft:"auto",fontSize:12,color:"#6b7280",background:"none",border:"none",cursor:"pointer"},checkboxLabel:{display:"flex",alignItems:"center",gap:8,fontSize:13,color:"#9ca3af",cursor:"pointer"},footer:{display:"flex",alignItems:"center",gap:8,padding:12,borderTop:"1px solid #374151",backgroundColor:"#0a0a0f"},button:e=>{const t={display:"flex",alignItems:"center",gap:6,padding:"8px 16px",borderRadius:6,fontSize:13,fontWeight:500,cursor:"pointer",border:"1px solid",transition:"all 0.15s ease"};switch(e){case"deny":return{...t,backgroundColor:"rgba(220, 38, 38, 0.2)",borderColor:"rgba(239, 68, 68, 0.5)",color:"#f87171"};case"once":return{...t,backgroundColor:"rgba(75, 85, 99, 0.2)",borderColor:"rgba(107, 114, 128, 0.5)",color:"#d1d5db"};case"pattern":return{...t,backgroundColor:"rgba(22, 163, 74, 0.2)",borderColor:"rgba(34, 197, 94, 0.5)",color:"#4ade80"}}},timerContainer:{marginLeft:"auto",display:"flex",alignItems:"center",gap:6,color:"#6b7280",fontSize:13},progressBar:{height:3,backgroundColor:"#1f2937"},progressFill:e=>({height:"100%",backgroundColor:"#f59e0b",transition:"width 1s linear",width:`${e}%`})};function zE({request:e,timeout:t,onApprove:n,onDeny:r,onClose:i}){const[s,a]=k.useState(""),[l,c]=k.useState("exact"),[u,d]=k.useState(!1),[f,p]=k.useState(""),[h,m]=k.useState(!1),[b,j]=k.useState(t),g=EE(e.url);k.useEffect(()=>{g.length>0&&!s&&a(g[0].pattern)},[g,s]),k.useEffect(()=>{const L=setInterval(()=>{j(E=>E<=1?(r(),0):E-1)},1e3);return()=>clearInterval(L)},[r]);const x=k.useCallback(()=>{n()},[n]),v=k.useCallback(()=>{n(h?f:s,l,u)},[n,h,f,s,l,u]),_=b/t*100,T=e.source.startsWith("mcp:"),C=T?e.source.substring(4):"agent";return o.jsx("div",{style:Fe.overlay,children:o.jsxs("div",{style:Fe.dialog,children:[o.jsxs("div",{style:Fe.header,children:[o.jsx(wl,{size:18,style:Fe.headerIcon}),o.jsx("span",{style:Fe.headerTitle,children:"Network Request Approval"}),o.jsx("button",{style:Fe.closeButton,onClick:i,children:o.jsx(Di,{size:16})})]}),o.jsxs("div",{style:Fe.content,children:[o.jsx("div",{style:Fe.sourceText,children:T?o.jsxs(o.Fragment,{children:['MCP server "',o.jsx("span",{style:{color:"#22d3ee"},children:C}),'" wants to connect to:']}):o.jsx(o.Fragment,{children:"Agent wants to connect to:"})}),o.jsxs("div",{style:Fe.requestBox,children:[o.jsxs("div",{children:[o.jsx("span",{style:Fe.methodBadge(e.method),children:e.method}),o.jsx("span",{style:Fe.urlText,children:e.url})]}),e.headers&&Object.keys(e.headers).length>0&&o.jsxs("div",{style:Fe.headersText,children:["Headers: ",Object.keys(e.headers).join(", ")]})]}),o.jsxs("div",{children:[o.jsx("div",{style:Fe.label,children:"Allow pattern:"}),h?o.jsxs("div",{children:[o.jsx("input",{type:"text",value:f,onChange:L=>p(L.target.value),placeholder:"e.g., *.example.com/*",style:Fe.customInput}),o.jsxs("div",{style:Fe.radioGroup,children:[o.jsxs("label",{style:Fe.radioLabel,children:[o.jsx("input",{type:"radio",checked:l==="wildcard",onChange:()=>c("wildcard")}),"Wildcard"]}),o.jsxs("label",{style:Fe.radioLabel,children:[o.jsx("input",{type:"radio",checked:l==="regex",onChange:()=>c("regex")}),"Regex"]}),o.jsx("button",{onClick:()=>m(!1),style:Fe.backLink,children:"← Back to suggestions"})]})]}):o.jsxs("select",{value:s,onChange:L=>{L.target.value==="__custom__"?(m(!0),p(s)):a(L.target.value)},style:Fe.select,children:[g.map(L=>o.jsx("option",{value:L.pattern,children:L.label},L.pattern)),o.jsx("option",{value:"__custom__",children:"Custom pattern..."})]})]}),o.jsxs("label",{style:Fe.checkboxLabel,children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:u,onChange:L=>d(L.target.checked)}),o.jsx("span",{className:"toggle-slider"})]}),"Save to project (persists across sessions)"]})]}),o.jsxs("div",{style:Fe.footer,children:[o.jsxs("button",{onClick:r,style:Fe.button("deny"),children:[o.jsx(hj,{size:14}),"Deny"]}),o.jsxs("button",{onClick:x,style:Fe.button("once"),children:[o.jsx(np,{size:14}),"Allow Once"]}),o.jsxs("button",{onClick:v,style:Fe.button("pattern"),children:[o.jsx(jv,{size:14}),"Allow Pattern"]}),o.jsxs("div",{style:Fe.timerContainer,children:[o.jsx(Ai,{size:14}),o.jsxs("span",{children:[b,"s"]})]})]}),o.jsx("div",{style:Fe.progressBar,children:o.jsx("div",{style:Fe.progressFill(_)})})]})})}var TE={value:()=>{}};function hs(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new pa(n)}function pa(e){this._=e}function AE(e,t){return e.trim().split(/^|\s+/).map(function(n){var r="",i=n.indexOf(".");if(i>=0&&(r=n.slice(i+1),n=n.slice(0,i)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}pa.prototype=hs.prototype={constructor:pa,on:function(e,t){var n=this._,r=AE(e+"",n),i,s=-1,a=r.length;if(arguments.length<2){for(;++s<a;)if((i=(e=r[s]).type)&&(i=ME(n[i],e.name)))return i;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++s<a;)if(i=(e=r[s]).type)n[i]=$m(n[i],e.name,t);else if(t==null)for(i in n)n[i]=$m(n[i],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new pa(e)},call:function(e,t){if((i=arguments.length-2)>0)for(var n=new Array(i),r=0,i,s;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(s=this._[e],r=0,i=s.length;r<i;++r)s[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],i=0,s=r.length;i<s;++i)r[i].value.apply(t,n)}};function ME(e,t){for(var n=0,r=e.length,i;n<r;++n)if((i=e[n]).name===t)return i.value}function $m(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=TE,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var Ku="http://www.w3.org/1999/xhtml";const Dm={svg:"http://www.w3.org/2000/svg",xhtml:Ku,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function zl(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),Dm.hasOwnProperty(t)?{space:Dm[t],local:e}:e}function LE(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===Ku&&t.documentElement.namespaceURI===Ku?t.createElement(e):t.createElementNS(n,e)}}function PE(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function _1(e){var t=zl(e);return(t.local?PE:LE)(t)}function RE(){}function zp(e){return e==null?RE:function(){return this.querySelector(e)}}function IE(e){typeof e!="function"&&(e=zp(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var s=t[i],a=s.length,l=r[i]=new Array(a),c,u,d=0;d<a;++d)(c=s[d])&&(u=e.call(c,c.__data__,d,s))&&("__data__"in c&&(u.__data__=c.__data__),l[d]=u);return new Gt(r,this._parents)}function OE(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function $E(){return[]}function S1(e){return e==null?$E:function(){return this.querySelectorAll(e)}}function DE(e){return function(){return OE(e.apply(this,arguments))}}function FE(e){typeof e=="function"?e=DE(e):e=S1(e);for(var t=this._groups,n=t.length,r=[],i=[],s=0;s<n;++s)for(var a=t[s],l=a.length,c,u=0;u<l;++u)(c=a[u])&&(r.push(e.call(c,c.__data__,u,a)),i.push(c));return new Gt(r,i)}function C1(e){return function(){return this.matches(e)}}function N1(e){return function(t){return t.matches(e)}}var BE=Array.prototype.find;function UE(e){return function(){return BE.call(this.children,e)}}function WE(){return this.firstElementChild}function VE(e){return this.select(e==null?WE:UE(typeof e=="function"?e:N1(e)))}var HE=Array.prototype.filter;function qE(){return Array.from(this.children)}function JE(e){return function(){return HE.call(this.children,e)}}function KE(e){return this.selectAll(e==null?qE:JE(typeof e=="function"?e:N1(e)))}function GE(e){typeof e!="function"&&(e=C1(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var s=t[i],a=s.length,l=r[i]=[],c,u=0;u<a;++u)(c=s[u])&&e.call(c,c.__data__,u,s)&&l.push(c);return new Gt(r,this._parents)}function E1(e){return new Array(e.length)}function YE(){return new Gt(this._enter||this._groups.map(E1),this._parents)}function Ga(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Ga.prototype={constructor:Ga,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function QE(e){return function(){return e}}function XE(e,t,n,r,i,s){for(var a=0,l,c=t.length,u=s.length;a<u;++a)(l=t[a])?(l.__data__=s[a],r[a]=l):n[a]=new Ga(e,s[a]);for(;a<c;++a)(l=t[a])&&(i[a]=l)}function ZE(e,t,n,r,i,s,a){var l,c,u=new Map,d=t.length,f=s.length,p=new Array(d),h;for(l=0;l<d;++l)(c=t[l])&&(p[l]=h=a.call(c,c.__data__,l,t)+"",u.has(h)?i[l]=c:u.set(h,c));for(l=0;l<f;++l)h=a.call(e,s[l],l,s)+"",(c=u.get(h))?(r[l]=c,c.__data__=s[l],u.delete(h)):n[l]=new Ga(e,s[l]);for(l=0;l<d;++l)(c=t[l])&&u.get(p[l])===c&&(i[l]=c)}function ez(e){return e.__data__}function tz(e,t){if(!arguments.length)return Array.from(this,ez);var n=t?ZE:XE,r=this._parents,i=this._groups;typeof e!="function"&&(e=QE(e));for(var s=i.length,a=new Array(s),l=new Array(s),c=new Array(s),u=0;u<s;++u){var d=r[u],f=i[u],p=f.length,h=nz(e.call(d,d&&d.__data__,u,r)),m=h.length,b=l[u]=new Array(m),j=a[u]=new Array(m),g=c[u]=new Array(p);n(d,f,b,j,g,h,t);for(var x=0,v=0,_,T;x<m;++x)if(_=b[x]){for(x>=v&&(v=x+1);!(T=j[v])&&++v<m;);_._next=T||null}}return a=new Gt(a,r),a._enter=l,a._exit=c,a}function nz(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function rz(){return new Gt(this._exit||this._groups.map(E1),this._parents)}function iz(e,t,n){var r=this.enter(),i=this,s=this.exit();return typeof e=="function"?(r=e(r),r&&(r=r.selection())):r=r.append(e+""),t!=null&&(i=t(i),i&&(i=i.selection())),n==null?s.remove():n(s),r&&i?r.merge(i).order():i}function oz(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,i=n.length,s=r.length,a=Math.min(i,s),l=new Array(i),c=0;c<a;++c)for(var u=n[c],d=r[c],f=u.length,p=l[c]=new Array(f),h,m=0;m<f;++m)(h=u[m]||d[m])&&(p[m]=h);for(;c<i;++c)l[c]=n[c];return new Gt(l,this._parents)}function sz(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],i=r.length-1,s=r[i],a;--i>=0;)(a=r[i])&&(s&&a.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(a,s),s=a);return this}function az(e){e||(e=lz);function t(f,p){return f&&p?e(f.__data__,p.__data__):!f-!p}for(var n=this._groups,r=n.length,i=new Array(r),s=0;s<r;++s){for(var a=n[s],l=a.length,c=i[s]=new Array(l),u,d=0;d<l;++d)(u=a[d])&&(c[d]=u);c.sort(t)}return new Gt(i,this._parents).order()}function lz(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function cz(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function uz(){return Array.from(this)}function dz(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,s=r.length;i<s;++i){var a=r[i];if(a)return a}return null}function pz(){let e=0;for(const t of this)++e;return e}function fz(){return!this.node()}function hz(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var i=t[n],s=0,a=i.length,l;s<a;++s)(l=i[s])&&e.call(l,l.__data__,s,i);return this}function mz(e){return function(){this.removeAttribute(e)}}function gz(e){return function(){this.removeAttributeNS(e.space,e.local)}}function xz(e,t){return function(){this.setAttribute(e,t)}}function yz(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function vz(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function bz(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function wz(e,t){var n=zl(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?gz:mz:typeof t=="function"?n.local?bz:vz:n.local?yz:xz)(n,t))}function z1(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function kz(e){return function(){this.style.removeProperty(e)}}function jz(e,t,n){return function(){this.style.setProperty(e,t,n)}}function _z(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function Sz(e,t,n){return arguments.length>1?this.each((t==null?kz:typeof t=="function"?_z:jz)(e,t,n??"")):Mi(this.node(),e)}function Mi(e,t){return e.style.getPropertyValue(t)||z1(e).getComputedStyle(e,null).getPropertyValue(t)}function Cz(e){return function(){delete this[e]}}function Nz(e,t){return function(){this[e]=t}}function Ez(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function zz(e,t){return arguments.length>1?this.each((t==null?Cz:typeof t=="function"?Ez:Nz)(e,t)):this.node()[e]}function T1(e){return e.trim().split(/^|\s+/)}function Tp(e){return e.classList||new A1(e)}function A1(e){this._node=e,this._names=T1(e.getAttribute("class")||"")}A1.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function M1(e,t){for(var n=Tp(e),r=-1,i=t.length;++r<i;)n.add(t[r])}function L1(e,t){for(var n=Tp(e),r=-1,i=t.length;++r<i;)n.remove(t[r])}function Tz(e){return function(){M1(this,e)}}function Az(e){return function(){L1(this,e)}}function Mz(e,t){return function(){(t.apply(this,arguments)?M1:L1)(this,e)}}function Lz(e,t){var n=T1(e+"");if(arguments.length<2){for(var r=Tp(this.node()),i=-1,s=n.length;++i<s;)if(!r.contains(n[i]))return!1;return!0}return this.each((typeof t=="function"?Mz:t?Tz:Az)(n,t))}function Pz(){this.textContent=""}function Rz(e){return function(){this.textContent=e}}function Iz(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function Oz(e){return arguments.length?this.each(e==null?Pz:(typeof e=="function"?Iz:Rz)(e)):this.node().textContent}function $z(){this.innerHTML=""}function Dz(e){return function(){this.innerHTML=e}}function Fz(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function Bz(e){return arguments.length?this.each(e==null?$z:(typeof e=="function"?Fz:Dz)(e)):this.node().innerHTML}function Uz(){this.nextSibling&&this.parentNode.appendChild(this)}function Wz(){return this.each(Uz)}function Vz(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Hz(){return this.each(Vz)}function qz(e){var t=typeof e=="function"?e:_1(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function Jz(){return null}function Kz(e,t){var n=typeof e=="function"?e:_1(e),r=t==null?Jz:typeof t=="function"?t:zp(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function Gz(){var e=this.parentNode;e&&e.removeChild(this)}function Yz(){return this.each(Gz)}function Qz(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Xz(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Zz(e){return this.select(e?Xz:Qz)}function e3(e){return arguments.length?this.property("__data__",e):this.node().__data__}function t3(e){return function(t){e.call(this,t,this.__data__)}}function n3(e){return e.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{type:t,name:n}})}function r3(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,i=t.length,s;n<i;++n)s=t[n],(!e.type||s.type===e.type)&&s.name===e.name?this.removeEventListener(s.type,s.listener,s.options):t[++r]=s;++r?t.length=r:delete this.__on}}}function i3(e,t,n){return function(){var r=this.__on,i,s=t3(t);if(r){for(var a=0,l=r.length;a<l;++a)if((i=r[a]).type===e.type&&i.name===e.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=s,i.options=n),i.value=t;return}}this.addEventListener(e.type,s,n),i={type:e.type,name:e.name,value:t,listener:s,options:n},r?r.push(i):this.__on=[i]}}function o3(e,t,n){var r=n3(e+""),i,s=r.length,a;if(arguments.length<2){var l=this.node().__on;if(l){for(var c=0,u=l.length,d;c<u;++c)for(i=0,d=l[c];i<s;++i)if((a=r[i]).type===d.type&&a.name===d.name)return d.value}return}for(l=t?i3:r3,i=0;i<s;++i)this.each(l(r[i],t,n));return this}function P1(e,t,n){var r=z1(e),i=r.CustomEvent;typeof i=="function"?i=new i(t,n):(i=r.document.createEvent("Event"),n?(i.initEvent(t,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(t,!1,!1)),e.dispatchEvent(i)}function s3(e,t){return function(){return P1(this,e,t)}}function a3(e,t){return function(){return P1(this,e,t.apply(this,arguments))}}function l3(e,t){return this.each((typeof t=="function"?a3:s3)(e,t))}function*c3(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,s=r.length,a;i<s;++i)(a=r[i])&&(yield a)}var R1=[null];function Gt(e,t){this._groups=e,this._parents=t}function ms(){return new Gt([[document.documentElement]],R1)}function u3(){return this}Gt.prototype=ms.prototype={constructor:Gt,select:IE,selectAll:FE,selectChild:VE,selectChildren:KE,filter:GE,data:tz,enter:YE,exit:rz,join:iz,merge:oz,selection:u3,order:sz,sort:az,call:cz,nodes:uz,node:dz,size:pz,empty:fz,each:hz,attr:wz,style:Sz,property:zz,classed:Lz,text:Oz,html:Bz,raise:Wz,lower:Hz,append:qz,insert:Kz,remove:Yz,clone:Zz,datum:e3,on:o3,dispatch:l3,[Symbol.iterator]:c3};function kt(e){return typeof e=="string"?new Gt([[document.querySelector(e)]],[document.documentElement]):new Gt([[e]],R1)}function d3(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Pn(e,t){if(e=d3(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}if(t.getBoundingClientRect){var i=t.getBoundingClientRect();return[e.clientX-i.left-t.clientLeft,e.clientY-i.top-t.clientTop]}}return[e.pageX,e.pageY]}const p3={passive:!1},Qo={capture:!0,passive:!1};function zc(e){e.stopImmediatePropagation()}function bi(e){e.preventDefault(),e.stopImmediatePropagation()}function I1(e){var t=e.document.documentElement,n=kt(e).on("dragstart.drag",bi,Qo);"onselectstart"in t?n.on("selectstart.drag",bi,Qo):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function O1(e,t){var n=e.document.documentElement,r=kt(e).on("dragstart.drag",null);t&&(r.on("click.drag",bi,Qo),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in n?r.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}const Ws=e=>()=>e;function Gu(e,{sourceEvent:t,subject:n,target:r,identifier:i,active:s,x:a,y:l,dx:c,dy:u,dispatch:d}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},identifier:{value:i,enumerable:!0,configurable:!0},active:{value:s,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:l,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:d}})}Gu.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function f3(e){return!e.ctrlKey&&!e.button}function h3(){return this.parentNode}function m3(e,t){return t??{x:e.x,y:e.y}}function g3(){return navigator.maxTouchPoints||"ontouchstart"in this}function Fm(){var e=f3,t=h3,n=m3,r=g3,i={},s=hs("start","drag","end"),a=0,l,c,u,d,f=0;function p(_){_.on("mousedown.drag",h).filter(r).on("touchstart.drag",j).on("touchmove.drag",g,p3).on("touchend.drag touchcancel.drag",x).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(_,T){if(!(d||!e.call(this,_,T))){var C=v(this,t.call(this,_,T),_,T,"mouse");C&&(kt(_.view).on("mousemove.drag",m,Qo).on("mouseup.drag",b,Qo),I1(_.view),zc(_),u=!1,l=_.clientX,c=_.clientY,C("start",_))}}function m(_){if(bi(_),!u){var T=_.clientX-l,C=_.clientY-c;u=T*T+C*C>f}i.mouse("drag",_)}function b(_){kt(_.view).on("mousemove.drag mouseup.drag",null),O1(_.view,u),bi(_),i.mouse("end",_)}function j(_,T){if(e.call(this,_,T)){var C=_.changedTouches,L=t.call(this,_,T),E=C.length,U,z;for(U=0;U<E;++U)(z=v(this,L,_,T,C[U].identifier,C[U]))&&(zc(_),z("start",_,C[U]))}}function g(_){var T=_.changedTouches,C=T.length,L,E;for(L=0;L<C;++L)(E=i[T[L].identifier])&&(bi(_),E("drag",_,T[L]))}function x(_){var T=_.changedTouches,C=T.length,L,E;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),L=0;L<C;++L)(E=i[T[L].identifier])&&(zc(_),E("end",_,T[L]))}function v(_,T,C,L,E,U){var z=s.copy(),I=Pn(U||C,T),q,G,A;if((A=n.call(_,new Gu("beforestart",{sourceEvent:C,target:p,identifier:E,active:a,x:I[0],y:I[1],dx:0,dy:0,dispatch:z}),L))!=null)return q=A.x-I[0]||0,G=A.y-I[1]||0,function O(M,S,R){var P=I,w;switch(M){case"start":i[E]=O,w=a++;break;case"end":delete i[E],--a;case"drag":I=Pn(R||S,T),w=a;break}z.call(M,_,new Gu(M,{sourceEvent:S,subject:A,target:p,identifier:E,active:w,x:I[0]+q,y:I[1]+G,dx:I[0]-P[0],dy:I[1]-P[1],dispatch:z}),L)}}return p.filter=function(_){return arguments.length?(e=typeof _=="function"?_:Ws(!!_),p):e},p.container=function(_){return arguments.length?(t=typeof _=="function"?_:Ws(_),p):t},p.subject=function(_){return arguments.length?(n=typeof _=="function"?_:Ws(_),p):n},p.touchable=function(_){return arguments.length?(r=typeof _=="function"?_:Ws(!!_),p):r},p.on=function(){var _=s.on.apply(s,arguments);return _===s?p:_},p.clickDistance=function(_){return arguments.length?(f=(_=+_)*_,p):Math.sqrt(f)},p}function Ap(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function $1(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function gs(){}var Xo=.7,Ya=1/Xo,wi="\\s*([+-]?\\d+)\\s*",Zo="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Nn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",x3=/^#([0-9a-f]{3,8})$/,y3=new RegExp(`^rgb\\(${wi},${wi},${wi}\\)$`),v3=new RegExp(`^rgb\\(${Nn},${Nn},${Nn}\\)$`),b3=new RegExp(`^rgba\\(${wi},${wi},${wi},${Zo}\\)$`),w3=new RegExp(`^rgba\\(${Nn},${Nn},${Nn},${Zo}\\)$`),k3=new RegExp(`^hsl\\(${Zo},${Nn},${Nn}\\)$`),j3=new RegExp(`^hsla\\(${Zo},${Nn},${Nn},${Zo}\\)$`),Bm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Ap(gs,es,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Um,formatHex:Um,formatHex8:_3,formatHsl:S3,formatRgb:Wm,toString:Wm});function Um(){return this.rgb().formatHex()}function _3(){return this.rgb().formatHex8()}function S3(){return D1(this).formatHsl()}function Wm(){return this.rgb().formatRgb()}function es(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=x3.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?Vm(t):n===3?new Mt(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Vs(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Vs(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=y3.exec(e))?new Mt(t[1],t[2],t[3],1):(t=v3.exec(e))?new Mt(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=b3.exec(e))?Vs(t[1],t[2],t[3],t[4]):(t=w3.exec(e))?Vs(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=k3.exec(e))?Jm(t[1],t[2]/100,t[3]/100,1):(t=j3.exec(e))?Jm(t[1],t[2]/100,t[3]/100,t[4]):Bm.hasOwnProperty(e)?Vm(Bm[e]):e==="transparent"?new Mt(NaN,NaN,NaN,0):null}function Vm(e){return new Mt(e>>16&255,e>>8&255,e&255,1)}function Vs(e,t,n,r){return r<=0&&(e=t=n=NaN),new Mt(e,t,n,r)}function C3(e){return e instanceof gs||(e=es(e)),e?(e=e.rgb(),new Mt(e.r,e.g,e.b,e.opacity)):new Mt}function Yu(e,t,n,r){return arguments.length===1?C3(e):new Mt(e,t,n,r??1)}function Mt(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}Ap(Mt,Yu,$1(gs,{brighter(e){return e=e==null?Ya:Math.pow(Ya,e),new Mt(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Xo:Math.pow(Xo,e),new Mt(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Mt(Ir(this.r),Ir(this.g),Ir(this.b),Qa(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Hm,formatHex:Hm,formatHex8:N3,formatRgb:qm,toString:qm}));function Hm(){return`#${Ar(this.r)}${Ar(this.g)}${Ar(this.b)}`}function N3(){return`#${Ar(this.r)}${Ar(this.g)}${Ar(this.b)}${Ar((isNaN(this.opacity)?1:this.opacity)*255)}`}function qm(){const e=Qa(this.opacity);return`${e===1?"rgb(":"rgba("}${Ir(this.r)}, ${Ir(this.g)}, ${Ir(this.b)}${e===1?")":`, ${e})`}`}function Qa(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Ir(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Ar(e){return e=Ir(e),(e<16?"0":"")+e.toString(16)}function Jm(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new fn(e,t,n,r)}function D1(e){if(e instanceof fn)return new fn(e.h,e.s,e.l,e.opacity);if(e instanceof gs||(e=es(e)),!e)return new fn;if(e instanceof fn)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),s=Math.max(t,n,r),a=NaN,l=s-i,c=(s+i)/2;return l?(t===s?a=(n-r)/l+(n<r)*6:n===s?a=(r-t)/l+2:a=(t-n)/l+4,l/=c<.5?s+i:2-s-i,a*=60):l=c>0&&c<1?0:a,new fn(a,l,c,e.opacity)}function E3(e,t,n,r){return arguments.length===1?D1(e):new fn(e,t,n,r??1)}function fn(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}Ap(fn,E3,$1(gs,{brighter(e){return e=e==null?Ya:Math.pow(Ya,e),new fn(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Xo:Math.pow(Xo,e),new fn(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new Mt(Tc(e>=240?e-240:e+120,i,r),Tc(e,i,r),Tc(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new fn(Km(this.h),Hs(this.s),Hs(this.l),Qa(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Qa(this.opacity);return`${e===1?"hsl(":"hsla("}${Km(this.h)}, ${Hs(this.s)*100}%, ${Hs(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Km(e){return e=(e||0)%360,e<0?e+360:e}function Hs(e){return Math.max(0,Math.min(1,e||0))}function Tc(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const F1=e=>()=>e;function z3(e,t){return function(n){return e+n*t}}function T3(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function A3(e){return(e=+e)==1?B1:function(t,n){return n-t?T3(t,n,e):F1(isNaN(t)?n:t)}}function B1(e,t){var n=t-e;return n?z3(e,n):F1(isNaN(e)?t:e)}const Gm=function e(t){var n=A3(t);function r(i,s){var a=n((i=Yu(i)).r,(s=Yu(s)).r),l=n(i.g,s.g),c=n(i.b,s.b),u=B1(i.opacity,s.opacity);return function(d){return i.r=a(d),i.g=l(d),i.b=c(d),i.opacity=u(d),i+""}}return r.gamma=e,r}(1);function Xn(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}var Qu=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Ac=new RegExp(Qu.source,"g");function M3(e){return function(){return e}}function L3(e){return function(t){return e(t)+""}}function P3(e,t){var n=Qu.lastIndex=Ac.lastIndex=0,r,i,s,a=-1,l=[],c=[];for(e=e+"",t=t+"";(r=Qu.exec(e))&&(i=Ac.exec(t));)(s=i.index)>n&&(s=t.slice(n,s),l[a]?l[a]+=s:l[++a]=s),(r=r[0])===(i=i[0])?l[a]?l[a]+=i:l[++a]=i:(l[++a]=null,c.push({i:a,x:Xn(r,i)})),n=Ac.lastIndex;return n<t.length&&(s=t.slice(n),l[a]?l[a]+=s:l[++a]=s),l.length<2?c[0]?L3(c[0].x):M3(t):(t=c.length,function(u){for(var d=0,f;d<t;++d)l[(f=c[d]).i]=f.x(u);return l.join("")})}var Ym=180/Math.PI,Xu={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function U1(e,t,n,r,i,s){var a,l,c;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(c=e*n+t*r)&&(n-=e*c,r-=t*c),(l=Math.sqrt(n*n+r*r))&&(n/=l,r/=l,c/=l),e*r<t*n&&(e=-e,t=-t,c=-c,a=-a),{translateX:i,translateY:s,rotate:Math.atan2(t,e)*Ym,skewX:Math.atan(c)*Ym,scaleX:a,scaleY:l}}var qs;function R3(e){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?Xu:U1(t.a,t.b,t.c,t.d,t.e,t.f)}function I3(e){return e==null||(qs||(qs=document.createElementNS("http://www.w3.org/2000/svg","g")),qs.setAttribute("transform",e),!(e=qs.transform.baseVal.consolidate()))?Xu:(e=e.matrix,U1(e.a,e.b,e.c,e.d,e.e,e.f))}function W1(e,t,n,r){function i(u){return u.length?u.pop()+" ":""}function s(u,d,f,p,h,m){if(u!==f||d!==p){var b=h.push("translate(",null,t,null,n);m.push({i:b-4,x:Xn(u,f)},{i:b-2,x:Xn(d,p)})}else(f||p)&&h.push("translate("+f+t+p+n)}function a(u,d,f,p){u!==d?(u-d>180?d+=360:d-u>180&&(u+=360),p.push({i:f.push(i(f)+"rotate(",null,r)-2,x:Xn(u,d)})):d&&f.push(i(f)+"rotate("+d+r)}function l(u,d,f,p){u!==d?p.push({i:f.push(i(f)+"skewX(",null,r)-2,x:Xn(u,d)}):d&&f.push(i(f)+"skewX("+d+r)}function c(u,d,f,p,h,m){if(u!==f||d!==p){var b=h.push(i(h)+"scale(",null,",",null,")");m.push({i:b-4,x:Xn(u,f)},{i:b-2,x:Xn(d,p)})}else(f!==1||p!==1)&&h.push(i(h)+"scale("+f+","+p+")")}return function(u,d){var f=[],p=[];return u=e(u),d=e(d),s(u.translateX,u.translateY,d.translateX,d.translateY,f,p),a(u.rotate,d.rotate,f,p),l(u.skewX,d.skewX,f,p),c(u.scaleX,u.scaleY,d.scaleX,d.scaleY,f,p),u=d=null,function(h){for(var m=-1,b=p.length,j;++m<b;)f[(j=p[m]).i]=j.x(h);return f.join("")}}}var O3=W1(R3,"px, ","px)","deg)"),$3=W1(I3,", ",")",")"),D3=1e-12;function Qm(e){return((e=Math.exp(e))+1/e)/2}function F3(e){return((e=Math.exp(e))-1/e)/2}function B3(e){return((e=Math.exp(2*e))-1)/(e+1)}const U3=function e(t,n,r){function i(s,a){var l=s[0],c=s[1],u=s[2],d=a[0],f=a[1],p=a[2],h=d-l,m=f-c,b=h*h+m*m,j,g;if(b<D3)g=Math.log(p/u)/t,j=function(L){return[l+L*h,c+L*m,u*Math.exp(t*L*g)]};else{var x=Math.sqrt(b),v=(p*p-u*u+r*b)/(2*u*n*x),_=(p*p-u*u-r*b)/(2*p*n*x),T=Math.log(Math.sqrt(v*v+1)-v),C=Math.log(Math.sqrt(_*_+1)-_);g=(C-T)/t,j=function(L){var E=L*g,U=Qm(T),z=u/(n*x)*(U*B3(t*E+T)-F3(T));return[l+z*h,c+z*m,u*U/Qm(t*E+T)]}}return j.duration=g*1e3*t/Math.SQRT2,j}return i.rho=function(s){var a=Math.max(.001,+s),l=a*a,c=l*l;return e(a,l,c)},i}(Math.SQRT2,2,4);var Li=0,fo=0,oo=0,V1=1e3,Xa,ho,Za=0,Vr=0,Tl=0,ts=typeof performance=="object"&&performance.now?performance:Date,H1=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Mp(){return Vr||(H1(W3),Vr=ts.now()+Tl)}function W3(){Vr=0}function el(){this._call=this._time=this._next=null}el.prototype=Lp.prototype={constructor:el,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?Mp():+n)+(t==null?0:+t),!this._next&&ho!==this&&(ho?ho._next=this:Xa=this,ho=this),this._call=e,this._time=n,Zu()},stop:function(){this._call&&(this._call=null,this._time=1/0,Zu())}};function Lp(e,t,n){var r=new el;return r.restart(e,t,n),r}function V3(){Mp(),++Li;for(var e=Xa,t;e;)(t=Vr-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Li}function Xm(){Vr=(Za=ts.now())+Tl,Li=fo=0;try{V3()}finally{Li=0,q3(),Vr=0}}function H3(){var e=ts.now(),t=e-Za;t>V1&&(Tl-=t,Za=e)}function q3(){for(var e,t=Xa,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:Xa=n);ho=e,Zu(r)}function Zu(e){if(!Li){fo&&(fo=clearTimeout(fo));var t=e-Vr;t>24?(e<1/0&&(fo=setTimeout(Xm,e-ts.now()-Tl)),oo&&(oo=clearInterval(oo))):(oo||(Za=ts.now(),oo=setInterval(H3,V1)),Li=1,H1(Xm))}}function Zm(e,t,n){var r=new el;return t=t==null?0:+t,r.restart(i=>{r.stop(),e(i+t)},t,n),r}var J3=hs("start","end","cancel","interrupt"),K3=[],q1=0,eg=1,ed=2,fa=3,tg=4,td=5,ha=6;function Al(e,t,n,r,i,s){var a=e.__transition;if(!a)e.__transition={};else if(n in a)return;G3(e,n,{name:t,index:r,group:i,on:J3,tween:K3,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:q1})}function Pp(e,t){var n=yn(e,t);if(n.state>q1)throw new Error("too late; already scheduled");return n}function Tn(e,t){var n=yn(e,t);if(n.state>fa)throw new Error("too late; already running");return n}function yn(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function G3(e,t,n){var r=e.__transition,i;r[t]=n,n.timer=Lp(s,0,n.time);function s(u){n.state=eg,n.timer.restart(a,n.delay,n.time),n.delay<=u&&a(u-n.delay)}function a(u){var d,f,p,h;if(n.state!==eg)return c();for(d in r)if(h=r[d],h.name===n.name){if(h.state===fa)return Zm(a);h.state===tg?(h.state=ha,h.timer.stop(),h.on.call("interrupt",e,e.__data__,h.index,h.group),delete r[d]):+d<t&&(h.state=ha,h.timer.stop(),h.on.call("cancel",e,e.__data__,h.index,h.group),delete r[d])}if(Zm(function(){n.state===fa&&(n.state=tg,n.timer.restart(l,n.delay,n.time),l(u))}),n.state=ed,n.on.call("start",e,e.__data__,n.index,n.group),n.state===ed){for(n.state=fa,i=new Array(p=n.tween.length),d=0,f=-1;d<p;++d)(h=n.tween[d].value.call(e,e.__data__,n.index,n.group))&&(i[++f]=h);i.length=f+1}}function l(u){for(var d=u<n.duration?n.ease.call(null,u/n.duration):(n.timer.restart(c),n.state=td,1),f=-1,p=i.length;++f<p;)i[f].call(e,d);n.state===td&&(n.on.call("end",e,e.__data__,n.index,n.group),c())}function c(){n.state=ha,n.timer.stop(),delete r[t];for(var u in r)return;delete e.__transition}}function ma(e,t){var n=e.__transition,r,i,s=!0,a;if(n){t=t==null?null:t+"";for(a in n){if((r=n[a]).name!==t){s=!1;continue}i=r.state>ed&&r.state<td,r.state=ha,r.timer.stop(),r.on.call(i?"interrupt":"cancel",e,e.__data__,r.index,r.group),delete n[a]}s&&delete e.__transition}}function Y3(e){return this.each(function(){ma(this,e)})}function Q3(e,t){var n,r;return function(){var i=Tn(this,e),s=i.tween;if(s!==n){r=n=s;for(var a=0,l=r.length;a<l;++a)if(r[a].name===t){r=r.slice(),r.splice(a,1);break}}i.tween=r}}function X3(e,t,n){var r,i;if(typeof n!="function")throw new Error;return function(){var s=Tn(this,e),a=s.tween;if(a!==r){i=(r=a).slice();for(var l={name:t,value:n},c=0,u=i.length;c<u;++c)if(i[c].name===t){i[c]=l;break}c===u&&i.push(l)}s.tween=i}}function Z3(e,t){var n=this._id;if(e+="",arguments.length<2){for(var r=yn(this.node(),n).tween,i=0,s=r.length,a;i<s;++i)if((a=r[i]).name===e)return a.value;return null}return this.each((t==null?Q3:X3)(n,e,t))}function Rp(e,t,n){var r=e._id;return e.each(function(){var i=Tn(this,r);(i.value||(i.value={}))[t]=n.apply(this,arguments)}),function(i){return yn(i,r).value[t]}}function J1(e,t){var n;return(typeof t=="number"?Xn:t instanceof es?Gm:(n=es(t))?(t=n,Gm):P3)(e,t)}function eT(e){return function(){this.removeAttribute(e)}}function tT(e){return function(){this.removeAttributeNS(e.space,e.local)}}function nT(e,t,n){var r,i=n+"",s;return function(){var a=this.getAttribute(e);return a===i?null:a===r?s:s=t(r=a,n)}}function rT(e,t,n){var r,i=n+"",s;return function(){var a=this.getAttributeNS(e.space,e.local);return a===i?null:a===r?s:s=t(r=a,n)}}function iT(e,t,n){var r,i,s;return function(){var a,l=n(this),c;return l==null?void this.removeAttribute(e):(a=this.getAttribute(e),c=l+"",a===c?null:a===r&&c===i?s:(i=c,s=t(r=a,l)))}}function oT(e,t,n){var r,i,s;return function(){var a,l=n(this),c;return l==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),c=l+"",a===c?null:a===r&&c===i?s:(i=c,s=t(r=a,l)))}}function sT(e,t){var n=zl(e),r=n==="transform"?$3:J1;return this.attrTween(e,typeof t=="function"?(n.local?oT:iT)(n,r,Rp(this,"attr."+e,t)):t==null?(n.local?tT:eT)(n):(n.local?rT:nT)(n,r,t))}function aT(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function lT(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function cT(e,t){var n,r;function i(){var s=t.apply(this,arguments);return s!==r&&(n=(r=s)&&lT(e,s)),n}return i._value=t,i}function uT(e,t){var n,r;function i(){var s=t.apply(this,arguments);return s!==r&&(n=(r=s)&&aT(e,s)),n}return i._value=t,i}function dT(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var r=zl(e);return this.tween(n,(r.local?cT:uT)(r,t))}function pT(e,t){return function(){Pp(this,e).delay=+t.apply(this,arguments)}}function fT(e,t){return t=+t,function(){Pp(this,e).delay=t}}function hT(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?pT:fT)(t,e)):yn(this.node(),t).delay}function mT(e,t){return function(){Tn(this,e).duration=+t.apply(this,arguments)}}function gT(e,t){return t=+t,function(){Tn(this,e).duration=t}}function xT(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?mT:gT)(t,e)):yn(this.node(),t).duration}function yT(e,t){if(typeof t!="function")throw new Error;return function(){Tn(this,e).ease=t}}function vT(e){var t=this._id;return arguments.length?this.each(yT(t,e)):yn(this.node(),t).ease}function bT(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;Tn(this,e).ease=n}}function wT(e){if(typeof e!="function")throw new Error;return this.each(bT(this._id,e))}function kT(e){typeof e!="function"&&(e=C1(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var s=t[i],a=s.length,l=r[i]=[],c,u=0;u<a;++u)(c=s[u])&&e.call(c,c.__data__,u,s)&&l.push(c);return new qn(r,this._parents,this._name,this._id)}function jT(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,r=t.length,i=n.length,s=Math.min(r,i),a=new Array(r),l=0;l<s;++l)for(var c=t[l],u=n[l],d=c.length,f=a[l]=new Array(d),p,h=0;h<d;++h)(p=c[h]||u[h])&&(f[h]=p);for(;l<r;++l)a[l]=t[l];return new qn(a,this._parents,this._name,this._id)}function _T(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function ST(e,t,n){var r,i,s=_T(t)?Pp:Tn;return function(){var a=s(this,e),l=a.on;l!==r&&(i=(r=l).copy()).on(t,n),a.on=i}}function CT(e,t){var n=this._id;return arguments.length<2?yn(this.node(),n).on.on(e):this.each(ST(n,e,t))}function NT(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function ET(){return this.on("end.remove",NT(this._id))}function zT(e){var t=this._name,n=this._id;typeof e!="function"&&(e=zp(e));for(var r=this._groups,i=r.length,s=new Array(i),a=0;a<i;++a)for(var l=r[a],c=l.length,u=s[a]=new Array(c),d,f,p=0;p<c;++p)(d=l[p])&&(f=e.call(d,d.__data__,p,l))&&("__data__"in d&&(f.__data__=d.__data__),u[p]=f,Al(u[p],t,n,p,u,yn(d,n)));return new qn(s,this._parents,t,n)}function TT(e){var t=this._name,n=this._id;typeof e!="function"&&(e=S1(e));for(var r=this._groups,i=r.length,s=[],a=[],l=0;l<i;++l)for(var c=r[l],u=c.length,d,f=0;f<u;++f)if(d=c[f]){for(var p=e.call(d,d.__data__,f,c),h,m=yn(d,n),b=0,j=p.length;b<j;++b)(h=p[b])&&Al(h,t,n,b,p,m);s.push(p),a.push(d)}return new qn(s,a,t,n)}var AT=ms.prototype.constructor;function MT(){return new AT(this._groups,this._parents)}function LT(e,t){var n,r,i;return function(){var s=Mi(this,e),a=(this.style.removeProperty(e),Mi(this,e));return s===a?null:s===n&&a===r?i:i=t(n=s,r=a)}}function K1(e){return function(){this.style.removeProperty(e)}}function PT(e,t,n){var r,i=n+"",s;return function(){var a=Mi(this,e);return a===i?null:a===r?s:s=t(r=a,n)}}function RT(e,t,n){var r,i,s;return function(){var a=Mi(this,e),l=n(this),c=l+"";return l==null&&(c=l=(this.style.removeProperty(e),Mi(this,e))),a===c?null:a===r&&c===i?s:(i=c,s=t(r=a,l))}}function IT(e,t){var n,r,i,s="style."+t,a="end."+s,l;return function(){var c=Tn(this,e),u=c.on,d=c.value[s]==null?l||(l=K1(t)):void 0;(u!==n||i!==d)&&(r=(n=u).copy()).on(a,i=d),c.on=r}}function OT(e,t,n){var r=(e+="")=="transform"?O3:J1;return t==null?this.styleTween(e,LT(e,r)).on("end.style."+e,K1(e)):typeof t=="function"?this.styleTween(e,RT(e,r,Rp(this,"style."+e,t))).each(IT(this._id,e)):this.styleTween(e,PT(e,r,t),n).on("end.style."+e,null)}function $T(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function DT(e,t,n){var r,i;function s(){var a=t.apply(this,arguments);return a!==i&&(r=(i=a)&&$T(e,a,n)),r}return s._value=t,s}function FT(e,t,n){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,DT(e,t,n??""))}function BT(e){return function(){this.textContent=e}}function UT(e){return function(){var t=e(this);this.textContent=t??""}}function WT(e){return this.tween("text",typeof e=="function"?UT(Rp(this,"text",e)):BT(e==null?"":e+""))}function VT(e){return function(t){this.textContent=e.call(this,t)}}function HT(e){var t,n;function r(){var i=e.apply(this,arguments);return i!==n&&(t=(n=i)&&VT(i)),t}return r._value=e,r}function qT(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,HT(e))}function JT(){for(var e=this._name,t=this._id,n=G1(),r=this._groups,i=r.length,s=0;s<i;++s)for(var a=r[s],l=a.length,c,u=0;u<l;++u)if(c=a[u]){var d=yn(c,t);Al(c,e,n,u,a,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new qn(r,this._parents,e,n)}function KT(){var e,t,n=this,r=n._id,i=n.size();return new Promise(function(s,a){var l={value:a},c={value:function(){--i===0&&s()}};n.each(function(){var u=Tn(this,r),d=u.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(l),t._.interrupt.push(l),t._.end.push(c)),u.on=t}),i===0&&s()})}var GT=0;function qn(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function G1(){return++GT}var Mn=ms.prototype;qn.prototype={constructor:qn,select:zT,selectAll:TT,selectChild:Mn.selectChild,selectChildren:Mn.selectChildren,filter:kT,merge:jT,selection:MT,transition:JT,call:Mn.call,nodes:Mn.nodes,node:Mn.node,size:Mn.size,empty:Mn.empty,each:Mn.each,on:CT,attr:sT,attrTween:dT,style:OT,styleTween:FT,text:WT,textTween:qT,remove:ET,tween:Z3,delay:hT,duration:xT,ease:vT,easeVarying:wT,end:KT,[Symbol.iterator]:Mn[Symbol.iterator]};function YT(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var QT={time:null,delay:0,duration:250,ease:YT};function XT(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function ZT(e){var t,n;e instanceof qn?(t=e._id,e=e._name):(t=G1(),(n=QT).time=Mp(),e=e==null?null:e+"");for(var r=this._groups,i=r.length,s=0;s<i;++s)for(var a=r[s],l=a.length,c,u=0;u<l;++u)(c=a[u])&&Al(c,e,t,u,a,n||XT(c,t));return new qn(r,this._parents,e,t)}ms.prototype.interrupt=Y3;ms.prototype.transition=ZT;function ng(e,t){var n,r=1;e==null&&(e=0),t==null&&(t=0);function i(){var s,a=n.length,l,c=0,u=0;for(s=0;s<a;++s)l=n[s],c+=l.x,u+=l.y;for(c=(c/a-e)*r,u=(u/a-t)*r,s=0;s<a;++s)l=n[s],l.x-=c,l.y-=u}return i.initialize=function(s){n=s},i.x=function(s){return arguments.length?(e=+s,i):e},i.y=function(s){return arguments.length?(t=+s,i):t},i.strength=function(s){return arguments.length?(r=+s,i):r},i}function e5(e){const t=+this._x.call(null,e),n=+this._y.call(null,e);return Y1(this.cover(t,n),t,n,e)}function Y1(e,t,n,r){if(isNaN(t)||isNaN(n))return e;var i,s=e._root,a={data:r},l=e._x0,c=e._y0,u=e._x1,d=e._y1,f,p,h,m,b,j,g,x;if(!s)return e._root=a,e;for(;s.length;)if((b=t>=(f=(l+u)/2))?l=f:u=f,(j=n>=(p=(c+d)/2))?c=p:d=p,i=s,!(s=s[g=j<<1|b]))return i[g]=a,e;if(h=+e._x.call(null,s.data),m=+e._y.call(null,s.data),t===h&&n===m)return a.next=s,i?i[g]=a:e._root=a,e;do i=i?i[g]=new Array(4):e._root=new Array(4),(b=t>=(f=(l+u)/2))?l=f:u=f,(j=n>=(p=(c+d)/2))?c=p:d=p;while((g=j<<1|b)===(x=(m>=p)<<1|h>=f));return i[x]=s,i[g]=a,e}function t5(e){var t,n,r=e.length,i,s,a=new Array(r),l=new Array(r),c=1/0,u=1/0,d=-1/0,f=-1/0;for(n=0;n<r;++n)isNaN(i=+this._x.call(null,t=e[n]))||isNaN(s=+this._y.call(null,t))||(a[n]=i,l[n]=s,i<c&&(c=i),i>d&&(d=i),s<u&&(u=s),s>f&&(f=s));if(c>d||u>f)return this;for(this.cover(c,u).cover(d,f),n=0;n<r;++n)Y1(this,a[n],l[n],e[n]);return this}function n5(e,t){if(isNaN(e=+e)||isNaN(t=+t))return this;var n=this._x0,r=this._y0,i=this._x1,s=this._y1;if(isNaN(n))i=(n=Math.floor(e))+1,s=(r=Math.floor(t))+1;else{for(var a=i-n||1,l=this._root,c,u;n>e||e>=i||r>t||t>=s;)switch(u=(t<r)<<1|e<n,c=new Array(4),c[u]=l,l=c,a*=2,u){case 0:i=n+a,s=r+a;break;case 1:n=i-a,s=r+a;break;case 2:i=n+a,r=s-a;break;case 3:n=i-a,r=s-a;break}this._root&&this._root.length&&(this._root=l)}return this._x0=n,this._y0=r,this._x1=i,this._y1=s,this}function r5(){var e=[];return this.visit(function(t){if(!t.length)do e.push(t.data);while(t=t.next)}),e}function i5(e){return arguments.length?this.cover(+e[0][0],+e[0][1]).cover(+e[1][0],+e[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function jt(e,t,n,r,i){this.node=e,this.x0=t,this.y0=n,this.x1=r,this.y1=i}function o5(e,t,n){var r,i=this._x0,s=this._y0,a,l,c,u,d=this._x1,f=this._y1,p=[],h=this._root,m,b;for(h&&p.push(new jt(h,i,s,d,f)),n==null?n=1/0:(i=e-n,s=t-n,d=e+n,f=t+n,n*=n);m=p.pop();)if(!(!(h=m.node)||(a=m.x0)>d||(l=m.y0)>f||(c=m.x1)<i||(u=m.y1)<s))if(h.length){var j=(a+c)/2,g=(l+u)/2;p.push(new jt(h[3],j,g,c,u),new jt(h[2],a,g,j,u),new jt(h[1],j,l,c,g),new jt(h[0],a,l,j,g)),(b=(t>=g)<<1|e>=j)&&(m=p[p.length-1],p[p.length-1]=p[p.length-1-b],p[p.length-1-b]=m)}else{var x=e-+this._x.call(null,h.data),v=t-+this._y.call(null,h.data),_=x*x+v*v;if(_<n){var T=Math.sqrt(n=_);i=e-T,s=t-T,d=e+T,f=t+T,r=h.data}}return r}function s5(e){if(isNaN(d=+this._x.call(null,e))||isNaN(f=+this._y.call(null,e)))return this;var t,n=this._root,r,i,s,a=this._x0,l=this._y0,c=this._x1,u=this._y1,d,f,p,h,m,b,j,g;if(!n)return this;if(n.length)for(;;){if((m=d>=(p=(a+c)/2))?a=p:c=p,(b=f>=(h=(l+u)/2))?l=h:u=h,t=n,!(n=n[j=b<<1|m]))return this;if(!n.length)break;(t[j+1&3]||t[j+2&3]||t[j+3&3])&&(r=t,g=j)}for(;n.data!==e;)if(i=n,!(n=n.next))return this;return(s=n.next)&&delete n.next,i?(s?i.next=s:delete i.next,this):t?(s?t[j]=s:delete t[j],(n=t[0]||t[1]||t[2]||t[3])&&n===(t[3]||t[2]||t[1]||t[0])&&!n.length&&(r?r[g]=n:this._root=n),this):(this._root=s,this)}function a5(e){for(var t=0,n=e.length;t<n;++t)this.remove(e[t]);return this}function l5(){return this._root}function c5(){var e=0;return this.visit(function(t){if(!t.length)do++e;while(t=t.next)}),e}function u5(e){var t=[],n,r=this._root,i,s,a,l,c;for(r&&t.push(new jt(r,this._x0,this._y0,this._x1,this._y1));n=t.pop();)if(!e(r=n.node,s=n.x0,a=n.y0,l=n.x1,c=n.y1)&&r.length){var u=(s+l)/2,d=(a+c)/2;(i=r[3])&&t.push(new jt(i,u,d,l,c)),(i=r[2])&&t.push(new jt(i,s,d,u,c)),(i=r[1])&&t.push(new jt(i,u,a,l,d)),(i=r[0])&&t.push(new jt(i,s,a,u,d))}return this}function d5(e){var t=[],n=[],r;for(this._root&&t.push(new jt(this._root,this._x0,this._y0,this._x1,this._y1));r=t.pop();){var i=r.node;if(i.length){var s,a=r.x0,l=r.y0,c=r.x1,u=r.y1,d=(a+c)/2,f=(l+u)/2;(s=i[0])&&t.push(new jt(s,a,l,d,f)),(s=i[1])&&t.push(new jt(s,d,l,c,f)),(s=i[2])&&t.push(new jt(s,a,f,d,u)),(s=i[3])&&t.push(new jt(s,d,f,c,u))}n.push(r)}for(;r=n.pop();)e(r.node,r.x0,r.y0,r.x1,r.y1);return this}function p5(e){return e[0]}function f5(e){return arguments.length?(this._x=e,this):this._x}function h5(e){return e[1]}function m5(e){return arguments.length?(this._y=e,this):this._y}function Ip(e,t,n){var r=new Op(t??p5,n??h5,NaN,NaN,NaN,NaN);return e==null?r:r.addAll(e)}function Op(e,t,n,r,i,s){this._x=e,this._y=t,this._x0=n,this._y0=r,this._x1=i,this._y1=s,this._root=void 0}function rg(e){for(var t={data:e.data},n=t;e=e.next;)n=n.next={data:e.data};return t}var Nt=Ip.prototype=Op.prototype;Nt.copy=function(){var e=new Op(this._x,this._y,this._x0,this._y0,this._x1,this._y1),t=this._root,n,r;if(!t)return e;if(!t.length)return e._root=rg(t),e;for(n=[{source:t,target:e._root=new Array(4)}];t=n.pop();)for(var i=0;i<4;++i)(r=t.source[i])&&(r.length?n.push({source:r,target:t.target[i]=new Array(4)}):t.target[i]=rg(r));return e};Nt.add=e5;Nt.addAll=t5;Nt.cover=n5;Nt.data=r5;Nt.extent=i5;Nt.find=o5;Nt.remove=s5;Nt.removeAll=a5;Nt.root=l5;Nt.size=c5;Nt.visit=u5;Nt.visitAfter=d5;Nt.x=f5;Nt.y=m5;function Or(e){return function(){return e}}function or(e){return(e()-.5)*1e-6}function g5(e){return e.x+e.vx}function x5(e){return e.y+e.vy}function ig(e){var t,n,r,i=1,s=1;typeof e!="function"&&(e=Or(e==null?1:+e));function a(){for(var u,d=t.length,f,p,h,m,b,j,g=0;g<s;++g)for(f=Ip(t,g5,x5).visitAfter(l),u=0;u<d;++u)p=t[u],b=n[p.index],j=b*b,h=p.x+p.vx,m=p.y+p.vy,f.visit(x);function x(v,_,T,C,L){var E=v.data,U=v.r,z=b+U;if(E){if(E.index>p.index){var I=h-E.x-E.vx,q=m-E.y-E.vy,G=I*I+q*q;G<z*z&&(I===0&&(I=or(r),G+=I*I),q===0&&(q=or(r),G+=q*q),G=(z-(G=Math.sqrt(G)))/G*i,p.vx+=(I*=G)*(z=(U*=U)/(j+U)),p.vy+=(q*=G)*z,E.vx-=I*(z=1-z),E.vy-=q*z)}return}return _>h+z||C<h-z||T>m+z||L<m-z}}function l(u){if(u.data)return u.r=n[u.data.index];for(var d=u.r=0;d<4;++d)u[d]&&u[d].r>u.r&&(u.r=u[d].r)}function c(){if(t){var u,d=t.length,f;for(n=new Array(d),u=0;u<d;++u)f=t[u],n[f.index]=+e(f,u,t)}}return a.initialize=function(u,d){t=u,r=d,c()},a.iterations=function(u){return arguments.length?(s=+u,a):s},a.strength=function(u){return arguments.length?(i=+u,a):i},a.radius=function(u){return arguments.length?(e=typeof u=="function"?u:Or(+u),c(),a):e},a}function y5(e){return e.index}function og(e,t){var n=e.get(t);if(!n)throw new Error("node not found: "+t);return n}function sg(e){var t=y5,n=f,r,i=Or(30),s,a,l,c,u,d=1;e==null&&(e=[]);function f(j){return 1/Math.min(l[j.source.index],l[j.target.index])}function p(j){for(var g=0,x=e.length;g<d;++g)for(var v=0,_,T,C,L,E,U,z;v<x;++v)_=e[v],T=_.source,C=_.target,L=C.x+C.vx-T.x-T.vx||or(u),E=C.y+C.vy-T.y-T.vy||or(u),U=Math.sqrt(L*L+E*E),U=(U-s[v])/U*j*r[v],L*=U,E*=U,C.vx-=L*(z=c[v]),C.vy-=E*z,T.vx+=L*(z=1-z),T.vy+=E*z}function h(){if(a){var j,g=a.length,x=e.length,v=new Map(a.map((T,C)=>[t(T,C,a),T])),_;for(j=0,l=new Array(g);j<x;++j)_=e[j],_.index=j,typeof _.source!="object"&&(_.source=og(v,_.source)),typeof _.target!="object"&&(_.target=og(v,_.target)),l[_.source.index]=(l[_.source.index]||0)+1,l[_.target.index]=(l[_.target.index]||0)+1;for(j=0,c=new Array(x);j<x;++j)_=e[j],c[j]=l[_.source.index]/(l[_.source.index]+l[_.target.index]);r=new Array(x),m(),s=new Array(x),b()}}function m(){if(a)for(var j=0,g=e.length;j<g;++j)r[j]=+n(e[j],j,e)}function b(){if(a)for(var j=0,g=e.length;j<g;++j)s[j]=+i(e[j],j,e)}return p.initialize=function(j,g){a=j,u=g,h()},p.links=function(j){return arguments.length?(e=j,h(),p):e},p.id=function(j){return arguments.length?(t=j,p):t},p.iterations=function(j){return arguments.length?(d=+j,p):d},p.strength=function(j){return arguments.length?(n=typeof j=="function"?j:Or(+j),m(),p):n},p.distance=function(j){return arguments.length?(i=typeof j=="function"?j:Or(+j),b(),p):i},p}const v5=1664525,b5=1013904223,ag=4294967296;function w5(){let e=1;return()=>(e=(v5*e+b5)%ag)/ag}function k5(e){return e.x}function j5(e){return e.y}var _5=10,S5=Math.PI*(3-Math.sqrt(5));function lg(e){var t,n=1,r=.001,i=1-Math.pow(r,1/300),s=0,a=.6,l=new Map,c=Lp(f),u=hs("tick","end"),d=w5();e==null&&(e=[]);function f(){p(),u.call("tick",t),n<r&&(c.stop(),u.call("end",t))}function p(b){var j,g=e.length,x;b===void 0&&(b=1);for(var v=0;v<b;++v)for(n+=(s-n)*i,l.forEach(function(_){_(n)}),j=0;j<g;++j)x=e[j],x.fx==null?x.x+=x.vx*=a:(x.x=x.fx,x.vx=0),x.fy==null?x.y+=x.vy*=a:(x.y=x.fy,x.vy=0);return t}function h(){for(var b=0,j=e.length,g;b<j;++b){if(g=e[b],g.index=b,g.fx!=null&&(g.x=g.fx),g.fy!=null&&(g.y=g.fy),isNaN(g.x)||isNaN(g.y)){var x=_5*Math.sqrt(.5+b),v=b*S5;g.x=x*Math.cos(v),g.y=x*Math.sin(v)}(isNaN(g.vx)||isNaN(g.vy))&&(g.vx=g.vy=0)}}function m(b){return b.initialize&&b.initialize(e,d),b}return h(),t={tick:p,restart:function(){return c.restart(f),t},stop:function(){return c.stop(),t},nodes:function(b){return arguments.length?(e=b,h(),l.forEach(m),t):e},alpha:function(b){return arguments.length?(n=+b,t):n},alphaMin:function(b){return arguments.length?(r=+b,t):r},alphaDecay:function(b){return arguments.length?(i=+b,t):+i},alphaTarget:function(b){return arguments.length?(s=+b,t):s},velocityDecay:function(b){return arguments.length?(a=1-b,t):1-a},randomSource:function(b){return arguments.length?(d=b,l.forEach(m),t):d},force:function(b,j){return arguments.length>1?(j==null?l.delete(b):l.set(b,m(j)),t):l.get(b)},find:function(b,j,g){var x=0,v=e.length,_,T,C,L,E;for(g==null?g=1/0:g*=g,x=0;x<v;++x)L=e[x],_=b-L.x,T=j-L.y,C=_*_+T*T,C<g&&(E=L,g=C);return E},on:function(b,j){return arguments.length>1?(u.on(b,j),t):u.on(b)}}}function cg(){var e,t,n,r,i=Or(-30),s,a=1,l=1/0,c=.81;function u(h){var m,b=e.length,j=Ip(e,k5,j5).visitAfter(f);for(r=h,m=0;m<b;++m)t=e[m],j.visit(p)}function d(){if(e){var h,m=e.length,b;for(s=new Array(m),h=0;h<m;++h)b=e[h],s[b.index]=+i(b,h,e)}}function f(h){var m=0,b,j,g=0,x,v,_;if(h.length){for(x=v=_=0;_<4;++_)(b=h[_])&&(j=Math.abs(b.value))&&(m+=b.value,g+=j,x+=j*b.x,v+=j*b.y);h.x=x/g,h.y=v/g}else{b=h,b.x=b.data.x,b.y=b.data.y;do m+=s[b.data.index];while(b=b.next)}h.value=m}function p(h,m,b,j){if(!h.value)return!0;var g=h.x-t.x,x=h.y-t.y,v=j-m,_=g*g+x*x;if(v*v/c<_)return _<l&&(g===0&&(g=or(n),_+=g*g),x===0&&(x=or(n),_+=x*x),_<a&&(_=Math.sqrt(a*_)),t.vx+=g*h.value*r/_,t.vy+=x*h.value*r/_),!0;if(h.length||_>=l)return;(h.data!==t||h.next)&&(g===0&&(g=or(n),_+=g*g),x===0&&(x=or(n),_+=x*x),_<a&&(_=Math.sqrt(a*_)));do h.data!==t&&(v=s[h.data.index]*r/_,t.vx+=g*v,t.vy+=x*v);while(h=h.next)}return u.initialize=function(h,m){e=h,n=m,d()},u.strength=function(h){return arguments.length?(i=typeof h=="function"?h:Or(+h),d(),u):i},u.distanceMin=function(h){return arguments.length?(a=h*h,u):Math.sqrt(a)},u.distanceMax=function(h){return arguments.length?(l=h*h,u):Math.sqrt(l)},u.theta=function(h){return arguments.length?(c=h*h,u):Math.sqrt(c)},u}const Js=e=>()=>e;function C5(e,{sourceEvent:t,target:n,transform:r,dispatch:i}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:r,enumerable:!0,configurable:!0},_:{value:i}})}function $n(e,t,n){this.k=e,this.x=t,this.y=n}$n.prototype={constructor:$n,scale:function(e){return e===1?this:new $n(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new $n(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var zo=new $n(1,0,0);$n.prototype;function Mc(e){e.stopImmediatePropagation()}function so(e){e.preventDefault(),e.stopImmediatePropagation()}function N5(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function E5(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function ug(){return this.__zoom||zo}function z5(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function T5(){return navigator.maxTouchPoints||"ontouchstart"in this}function A5(e,t,n){var r=e.invertX(t[0][0])-n[0][0],i=e.invertX(t[1][0])-n[1][0],s=e.invertY(t[0][1])-n[0][1],a=e.invertY(t[1][1])-n[1][1];return e.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),a>s?(s+a)/2:Math.min(0,s)||Math.max(0,a))}function dg(){var e=N5,t=E5,n=A5,r=z5,i=T5,s=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],l=250,c=U3,u=hs("start","zoom","end"),d,f,p,h=500,m=150,b=0,j=10;function g(A){A.property("__zoom",ug).on("wheel.zoom",E,{passive:!1}).on("mousedown.zoom",U).on("dblclick.zoom",z).filter(i).on("touchstart.zoom",I).on("touchmove.zoom",q).on("touchend.zoom touchcancel.zoom",G).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}g.transform=function(A,O,M,S){var R=A.selection?A.selection():A;R.property("__zoom",ug),A!==R?T(A,O,M,S):R.interrupt().each(function(){C(this,arguments).event(S).start().zoom(null,typeof O=="function"?O.apply(this,arguments):O).end()})},g.scaleBy=function(A,O,M,S){g.scaleTo(A,function(){var R=this.__zoom.k,P=typeof O=="function"?O.apply(this,arguments):O;return R*P},M,S)},g.scaleTo=function(A,O,M,S){g.transform(A,function(){var R=t.apply(this,arguments),P=this.__zoom,w=M==null?_(R):typeof M=="function"?M.apply(this,arguments):M,W=P.invert(w),H=typeof O=="function"?O.apply(this,arguments):O;return n(v(x(P,H),w,W),R,a)},M,S)},g.translateBy=function(A,O,M,S){g.transform(A,function(){return n(this.__zoom.translate(typeof O=="function"?O.apply(this,arguments):O,typeof M=="function"?M.apply(this,arguments):M),t.apply(this,arguments),a)},null,S)},g.translateTo=function(A,O,M,S,R){g.transform(A,function(){var P=t.apply(this,arguments),w=this.__zoom,W=S==null?_(P):typeof S=="function"?S.apply(this,arguments):S;return n(zo.translate(W[0],W[1]).scale(w.k).translate(typeof O=="function"?-O.apply(this,arguments):-O,typeof M=="function"?-M.apply(this,arguments):-M),P,a)},S,R)};function x(A,O){return O=Math.max(s[0],Math.min(s[1],O)),O===A.k?A:new $n(O,A.x,A.y)}function v(A,O,M){var S=O[0]-M[0]*A.k,R=O[1]-M[1]*A.k;return S===A.x&&R===A.y?A:new $n(A.k,S,R)}function _(A){return[(+A[0][0]+ +A[1][0])/2,(+A[0][1]+ +A[1][1])/2]}function T(A,O,M,S){A.on("start.zoom",function(){C(this,arguments).event(S).start()}).on("interrupt.zoom end.zoom",function(){C(this,arguments).event(S).end()}).tween("zoom",function(){var R=this,P=arguments,w=C(R,P).event(S),W=t.apply(R,P),H=M==null?_(W):typeof M=="function"?M.apply(R,P):M,y=Math.max(W[1][0]-W[0][0],W[1][1]-W[0][1]),N=R.__zoom,$=typeof O=="function"?O.apply(R,P):O,ne=c(N.invert(H).concat(y/N.k),$.invert(H).concat(y/$.k));return function(de){if(de===1)de=$;else{var be=ne(de),te=y/be[2];de=new $n(te,H[0]-be[0]*te,H[1]-be[1]*te)}w.zoom(null,de)}})}function C(A,O,M){return!M&&A.__zooming||new L(A,O)}function L(A,O){this.that=A,this.args=O,this.active=0,this.sourceEvent=null,this.extent=t.apply(A,O),this.taps=0}L.prototype={event:function(A){return A&&(this.sourceEvent=A),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(A,O){return this.mouse&&A!=="mouse"&&(this.mouse[1]=O.invert(this.mouse[0])),this.touch0&&A!=="touch"&&(this.touch0[1]=O.invert(this.touch0[0])),this.touch1&&A!=="touch"&&(this.touch1[1]=O.invert(this.touch1[0])),this.that.__zoom=O,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(A){var O=kt(this.that).datum();u.call(A,this.that,new C5(A,{sourceEvent:this.sourceEvent,target:g,transform:this.that.__zoom,dispatch:u}),O)}};function E(A,...O){if(!e.apply(this,arguments))return;var M=C(this,O).event(A),S=this.__zoom,R=Math.max(s[0],Math.min(s[1],S.k*Math.pow(2,r.apply(this,arguments)))),P=Pn(A);if(M.wheel)(M.mouse[0][0]!==P[0]||M.mouse[0][1]!==P[1])&&(M.mouse[1]=S.invert(M.mouse[0]=P)),clearTimeout(M.wheel);else{if(S.k===R)return;M.mouse=[P,S.invert(P)],ma(this),M.start()}so(A),M.wheel=setTimeout(w,m),M.zoom("mouse",n(v(x(S,R),M.mouse[0],M.mouse[1]),M.extent,a));function w(){M.wheel=null,M.end()}}function U(A,...O){if(p||!e.apply(this,arguments))return;var M=A.currentTarget,S=C(this,O,!0).event(A),R=kt(A.view).on("mousemove.zoom",H,!0).on("mouseup.zoom",y,!0),P=Pn(A,M),w=A.clientX,W=A.clientY;I1(A.view),Mc(A),S.mouse=[P,this.__zoom.invert(P)],ma(this),S.start();function H(N){if(so(N),!S.moved){var $=N.clientX-w,ne=N.clientY-W;S.moved=$*$+ne*ne>b}S.event(N).zoom("mouse",n(v(S.that.__zoom,S.mouse[0]=Pn(N,M),S.mouse[1]),S.extent,a))}function y(N){R.on("mousemove.zoom mouseup.zoom",null),O1(N.view,S.moved),so(N),S.event(N).end()}}function z(A,...O){if(e.apply(this,arguments)){var M=this.__zoom,S=Pn(A.changedTouches?A.changedTouches[0]:A,this),R=M.invert(S),P=M.k*(A.shiftKey?.5:2),w=n(v(x(M,P),S,R),t.apply(this,O),a);so(A),l>0?kt(this).transition().duration(l).call(T,w,S,A):kt(this).call(g.transform,w,S,A)}}function I(A,...O){if(e.apply(this,arguments)){var M=A.touches,S=M.length,R=C(this,O,A.changedTouches.length===S).event(A),P,w,W,H;for(Mc(A),w=0;w<S;++w)W=M[w],H=Pn(W,this),H=[H,this.__zoom.invert(H),W.identifier],R.touch0?!R.touch1&&R.touch0[2]!==H[2]&&(R.touch1=H,R.taps=0):(R.touch0=H,P=!0,R.taps=1+!!d);d&&(d=clearTimeout(d)),P&&(R.taps<2&&(f=H[0],d=setTimeout(function(){d=null},h)),ma(this),R.start())}}function q(A,...O){if(this.__zooming){var M=C(this,O).event(A),S=A.changedTouches,R=S.length,P,w,W,H;for(so(A),P=0;P<R;++P)w=S[P],W=Pn(w,this),M.touch0&&M.touch0[2]===w.identifier?M.touch0[0]=W:M.touch1&&M.touch1[2]===w.identifier&&(M.touch1[0]=W);if(w=M.that.__zoom,M.touch1){var y=M.touch0[0],N=M.touch0[1],$=M.touch1[0],ne=M.touch1[1],de=(de=$[0]-y[0])*de+(de=$[1]-y[1])*de,be=(be=ne[0]-N[0])*be+(be=ne[1]-N[1])*be;w=x(w,Math.sqrt(de/be)),W=[(y[0]+$[0])/2,(y[1]+$[1])/2],H=[(N[0]+ne[0])/2,(N[1]+ne[1])/2]}else if(M.touch0)W=M.touch0[0],H=M.touch0[1];else return;M.zoom("touch",n(v(w,W,H),M.extent,a))}}function G(A,...O){if(this.__zooming){var M=C(this,O).event(A),S=A.changedTouches,R=S.length,P,w;for(Mc(A),p&&clearTimeout(p),p=setTimeout(function(){p=null},h),P=0;P<R;++P)w=S[P],M.touch0&&M.touch0[2]===w.identifier?delete M.touch0:M.touch1&&M.touch1[2]===w.identifier&&delete M.touch1;if(M.touch1&&!M.touch0&&(M.touch0=M.touch1,delete M.touch1),M.touch0)M.touch0[1]=this.__zoom.invert(M.touch0[0]);else if(M.end(),M.taps===2&&(w=Pn(w,this),Math.hypot(f[0]-w[0],f[1]-w[1])<j)){var W=kt(this).on("dblclick.zoom");W&&W.apply(this,arguments)}}}return g.wheelDelta=function(A){return arguments.length?(r=typeof A=="function"?A:Js(+A),g):r},g.filter=function(A){return arguments.length?(e=typeof A=="function"?A:Js(!!A),g):e},g.touchable=function(A){return arguments.length?(i=typeof A=="function"?A:Js(!!A),g):i},g.extent=function(A){return arguments.length?(t=typeof A=="function"?A:Js([[+A[0][0],+A[0][1]],[+A[1][0],+A[1][1]]]),g):t},g.scaleExtent=function(A){return arguments.length?(s[0]=+A[0],s[1]=+A[1],g):[s[0],s[1]]},g.translateExtent=function(A){return arguments.length?(a[0][0]=+A[0][0],a[1][0]=+A[1][0],a[0][1]=+A[0][1],a[1][1]=+A[1][1],g):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},g.constrain=function(A){return arguments.length?(n=A,g):n},g.duration=function(A){return arguments.length?(l=+A,g):l},g.interpolate=function(A){return arguments.length?(c=A,g):c},g.on=function(){var A=u.on.apply(u,arguments);return A===u?g:A},g.clickDistance=function(A){return arguments.length?(b=(A=+A)*A,g):Math.sqrt(b)},g.tapDistance=function(A){return arguments.length?(j=+A,g):j},g}const pg=[{bg:"#0e7490",fg:"#e0f2fe"},{bg:"#6d28d9",fg:"#ede9fe"},{bg:"#047857",fg:"#d1fae5"},{bg:"#b91c1c",fg:"#fee2e2"},{bg:"#b45309",fg:"#fef3c7"},{bg:"#1d4ed8",fg:"#dbeafe"},{bg:"#be185d",fg:"#fce7f3"},{bg:"#4d7c0f",fg:"#ecfccb"},{bg:"#7c3aed",fg:"#ede9fe"},{bg:"#0f766e",fg:"#ccfbf1"},{bg:"#c2410c",fg:"#ffedd5"},{bg:"#4338ca",fg:"#e0e7ff"}],fg=new Map;function Ks(e){if(e==="sandbox"||e==="system")return{bg:"#374151",fg:"#9ca3af"};const t=fg.get(e);if(t)return t;let n=0;for(let s=0;s<e.length;s++)n=(n<<5)-n+e.charCodeAt(s),n=n&n;const r=Math.abs(n)%pg.length,i=pg[r];return fg.set(e,i),i}const Gs={bg:"#14b8a6"},mo={LlmAgent:"#00f5d4",SequentialAgent:"#7b2cbf",LoopAgent:"#ffd93d",ParallelAgent:"#ff6b6b",Tool:"#14b8a6",System:"#6b7280"};function Qr(e){return mo[e]||"#6b7280"}function M5({agents:e,events:t,selectedEventIndex:n,isOpen:r,onOpenChange:i,runState:s="idle"}){const[a,l]=k.useState(!1),[c,u]=k.useState(!1),d=r!==void 0?r:a,f=S=>{i?i(S):l(S)},[p,h]=k.useState(null),[m,b]=k.useState(null),j=k.useRef(null),g=k.useRef(null),x=k.useRef(null),v=k.useRef(null),_=k.useRef(null),T=k.useRef(null),C=k.useRef(new Map),L=k.useRef(null),{activeAgents:E,activeTools:U,transitions:z,visitedAgents:I,toolCalls:q,activeBranches:G,lastMessages:A,toolLastCalls:O}=k.useMemo(()=>{var ee,B,K,ie,ge,Y,oe,je,Ce,_e,Le,Xe,ot;const S=n!==null?n:t.length-1;if(S<0||t.length===0)return{activeAgents:new Set,activeTools:new Set,transitions:new Map,visitedAgents:new Set,toolCalls:new Map,activeBranches:new Set,lastMessages:new Map,toolLastCalls:new Map};const R=new Map(e.map(fe=>[fe.name,fe.type])),P=new Map(e.map(fe=>[fe.id,fe])),w=fe=>{const Ee=R.get(fe);if(!Ee)return!1;const he=Ee.toLowerCase();return he==="sequentialagent"||he==="sequential"},W=new Map,H=new Map;for(const fe of e)if(w(fe.name)&&"sub_agents"in fe){const he=fe.sub_agents.map(ze=>{var Se;return(Se=P.get(ze))==null?void 0:Se.name}).filter(ze=>ze!==void 0);H.set(fe.name,he);for(const ze of he)W.set(ze,fe.name)}const y=(fe,Ee)=>{const he=H.get(Ee);if(!he)return null;const ze=he.indexOf(fe);return ze>0?he[ze-1]:null},N=t.slice(0,S+1),$=new Map,ne=new Map,de=new Set,be=new Set,te=new Map,D=new Map;de.add("system");const X=new Map;X.set("",["system"]);let re=null;const Q=new Map,ae=new Map,J=new Map,pe=fe=>{const Ee=fe||"";return X.has(Ee)||X.set(Ee,["system"]),X.get(Ee)},Z=(fe,Ee)=>{if(!fe)return null;const he=fe.split("."),ze=he.indexOf(Ee);return ze>0?he[ze-1]:he.length>=1&&he[he.length-1]===Ee&&he.length>=2?he[he.length-2]:null};for(const fe of N){const Ee=fe.branch||"";if(fe.event_type==="agent_start"){const he=fe.agent_name;de.add(he);const ze=pe(Ee);let Se=null;const De=Z(Ee,he);De&&De!==he?(Se=De,ze.includes(De)||(ze.push(De),de.add(De))):ze.length>0&&(Se=ze[ze.length-1]);let $t=Se;const _r=W.get(he);if(_r){const Xt=y(he,_r);Xt?$t=Xt:$t=_r,J.set(he,_r)}else if(Se&&w(Se)){J.set(he,Se);const Xt=ae.get(Se);Xt&&Xt!==he&&($t=Xt)}if($t&&$t!==he){const Xt=`${$t}->${he}`;$.set(Xt,($.get(Xt)||0)+1),$t==="system"&&Ee===""&&!re&&(re=he)}ze[ze.length-1]!==he&&ze.push(he)}else if(fe.event_type==="agent_end"){const he=fe.agent_name,ze=J.get(he);if(ze&&ae.set(ze,he),w(he)){const Se=H.get(he),De=Se&&Se.length>0?Se[Se.length-1]:ae.get(he);if(De){const $t=`${De}->${he}`;$.set($t,($.get($t)||0)+1)}ae.delete(he)}if(he===re){const Se=`${he}->system`;$.set(Se,($.get(Se)||0)+1)}for(const[,Se]of X){const De=Se.lastIndexOf(he);De>0&&Se.splice(De,1)}}else if(fe.event_type==="tool_call"){const he=(ee=fe.data)==null?void 0:ee.tool_name,ze=pe(Ee);if(he&&ze.length>0){const Se=ze[ze.length-1];be.add(he);const De=`${Se}->tool:${he}`;ne.set(De,(ne.get(De)||0)+1),Q.set(Ee,he),D.set(he,{args:((B=fe.data)==null?void 0:B.args)||((K=fe.data)==null?void 0:K.arguments)})}}else if(fe.event_type==="tool_result"){const he=(ie=fe.data)==null?void 0:ie.tool_name;if(he){const ze=D.get(he),Se=((je=(oe=(Y=(ge=fe.data)==null?void 0:ge.result)==null?void 0:Y.content)==null?void 0:oe[0])==null?void 0:je.text)||((Ce=fe.data)==null?void 0:Ce.result)||((_e=fe.data)==null?void 0:_e.output);ze?ze.result=typeof Se=="string"?Se:JSON.stringify(Se):D.set(he,{args:null,result:typeof Se=="string"?Se:JSON.stringify(Se)})}Q.set(Ee,null)}else if(fe.event_type==="model_response"){const he=fe.agent_name;if(he&&he!=="system"){const Se=(((Xe=(Le=fe.data)==null?void 0:Le.response_content)==null?void 0:Xe.parts)||((ot=fe.data)==null?void 0:ot.parts)||[]).find(De=>(De==null?void 0:De.type)==="text"&&(De==null?void 0:De.text));Se!=null&&Se.text&&te.set(he,Se.text)}}}be.forEach(fe=>de.add(`tool:${fe}`));const se=new Set,ke=new Set,F=new Set;for(const[fe,Ee]of X){if(Ee.length>1){const ze=Ee[Ee.length-1];se.add(ze),fe&&F.add(fe)}const he=Q.get(fe);he&&ke.add(he)}return{activeAgents:se,activeTools:ke,transitions:$,visitedAgents:de,toolCalls:ne,activeBranches:F,lastMessages:te,toolLastCalls:D}},[t,n,e]),M=k.useMemo(()=>{const S=new Map(e.map(H=>[H.name,H])),R=[],P=new Map;for(const H of I){if(H.startsWith("tool:"))continue;const y=S.get(H),N=(y==null?void 0:y.id)||H,$=C.current.get(N);R.push({id:N,name:H,type:H==="system"?"System":(y==null?void 0:y.type)||"LlmAgent",isActive:E.has(H),wasActive:!0,lastMessage:A.get(H),x:$==null?void 0:$.x,y:$==null?void 0:$.y}),P.set(H,N)}for(const H of I){if(!H.startsWith("tool:"))continue;const y=H.slice(5),N=`tool:${y}`,$=C.current.get(N);R.push({id:N,name:y,type:"Tool",isActive:U.has(y),wasActive:!0,lastToolCall:O.get(y),x:$==null?void 0:$.x,y:$==null?void 0:$.y}),P.set(H,N)}const w=new Set(R.map(H=>H.id)),W=[];for(const[H,y]of z){const[N,$]=H.split("->"),ne=P.get(N),de=P.get($);ne&&de&&w.has(ne)&&w.has(de)&&W.push({source:ne,target:de,type:"transition",count:y})}for(const[H,y]of q){const[N,$]=H.split("->"),ne=P.get(N),de=P.get($);ne&&de&&w.has(ne)&&w.has(de)&&W.push({source:ne,target:de,type:"tool",count:y})}return{nodes:R,links:W}},[e,E,U,I,z,q,A,O]);return k.useEffect(()=>{var ke;if(!j.current||!d)return;const S=kt(j.current),R=300,P=400;S.selectAll("*").remove();const w=S.append("g"),W={current:((ke=L.current)==null?void 0:ke.k)||1},H=dg().scaleExtent([.3,3]).on("zoom",F=>{w.attr("transform",F.transform),L.current=F.transform,W.current=F.transform.k});S.call(H),L.current&&(S.call(H.transform,L.current),W.current=L.current.k);const y=()=>{if(M.nodes.length===0)return null;let F=1/0,ee=-1/0,B=1/0,K=-1/0;if(M.nodes.forEach(_e=>{_e.x!==void 0&&_e.y!==void 0&&(F=Math.min(F,_e.x),ee=Math.max(ee,_e.x),B=Math.min(B,_e.y),K=Math.max(K,_e.y))}),F===1/0)return null;const ie=60,ge=ee-F+ie*2,Y=K-B+ie*2,oe=Math.min(R/ge,P/Y,1.5)*.85,je=(F+ee)/2,Ce=(B+K)/2;return zo.translate(R/2,P/2).scale(oe).translate(-je,-Ce)},N=(F,ee,B)=>F+(ee-F)*B,$=F=>{const ee=L.current;if(!ee){L.current=F,W.current=F.k,S.call(H.transform,F);return}const B=.15,K=N(ee.x,F.x,B),ie=N(ee.y,F.y,B),ge=N(ee.k,F.k,B),Y=zo.translate(K,ie).scale(ge);L.current=Y,W.current=Y.k,S.call(H.transform,Y)},ne=M.nodes.every(F=>F.x!==void 0&&F.y!==void 0);if(!ne){const F=new Map;for(const ee of M.nodes)ee.x!==void 0&&ee.y!==void 0&&F.set(ee.id,{x:ee.x,y:ee.y});for(const ee of M.nodes)if(ee.x===void 0||ee.y===void 0){const B=M.links.find(K=>(typeof K.target=="string"?K.target:K.target.id)===ee.id);if(B){const K=typeof B.source=="string"?B.source:B.source.id,ie=F.get(K);if(ie){const ge=Math.random()*Math.PI*2,Y=50+Math.random()*30;ee.x=ie.x+Math.cos(ge)*Y,ee.y=ie.y+Math.sin(ge)*Y,F.set(ee.id,{x:ee.x,y:ee.y})}}(ee.x===void 0||ee.y===void 0)&&(ee.x=(Math.random()-.5)*50,ee.y=(Math.random()-.5)*50)}}const de=140,be=()=>{const F=de/W.current;for(const ee of M.nodes){if(ee.x===void 0||ee.y===void 0)continue;const B=Math.sqrt(ee.x*ee.x+ee.y*ee.y);if(B>F){const K=F/B;ee.x*=K,ee.y*=K}}},te=()=>{for(const F of M.nodes)if(F.name==="system"&&F.x!==void 0&&F.y!==void 0){const B=de/W.current*.75,K=225*Math.PI/180,ie=B*Math.cos(K),ge=-B*Math.sin(K),Y=.3;F.vx=(F.vx||0)+(ie-F.x)*Y,F.vy=(F.vy||0)+(ge-F.y)*Y}},D=new Set;for(const F of M.links){const ee=typeof F.source=="string"?F.source:F.source.id;D.add(ee)}const X=new Set(M.nodes.filter(F=>!D.has(F.id)&&F.name!=="system").map(F=>F.id)),re=()=>{const ee=de/W.current*.65,B=.15;for(const K of M.nodes)if(X.has(K.id)&&K.x!==void 0&&K.y!==void 0){const ie=Math.sqrt(K.x*K.x+K.y*K.y)||1;if(ie<ee){const ge=K.x/ie,Y=K.y/ie,oe=(ee-ie)*B;K.vx=(K.vx||0)+ge*oe,K.vy=(K.vy||0)+Y*oe}}},Q=lg(M.nodes).force("link",sg(M.links).id(F=>F.id).distance(100)).force("charge",cg().strength(-400)).force("center",ng(0,0)).force("collision",ig().radius(40)).force("boundary",be).force("systemPull",te).force("leafOutward",re).alphaDecay(.01);ne?Q.alpha(.3):Q.alpha(1),T.current=Q;const ae=S.append("defs");M.links.forEach((F,ee)=>{const B=ae.append("linearGradient").attr("id",`link-gradient-${ee}`).attr("gradientUnits","userSpaceOnUse");if(F.type==="transition")B.append("stop").attr("offset","0%").attr("stop-color","#166534").attr("stop-opacity",.1),B.append("stop").attr("offset","25%").attr("stop-color","#166534").attr("stop-opacity",.4),B.append("stop").attr("offset","50%").attr("stop-color","#22c55e").attr("stop-opacity",.7),B.append("stop").attr("offset","75%").attr("stop-color","#4ade80").attr("stop-opacity",.9),B.append("stop").attr("offset","100%").attr("stop-color","#86efac").attr("stop-opacity",1);else{const K=F.type==="sub_agent"?{start:"#3730a3",end:"#a5b4fc"}:{start:"#92400e",end:"#fcd34d"};B.append("stop").attr("offset","0%").attr("stop-color",K.start),B.append("stop").attr("offset","100%").attr("stop-color",K.end)}});const J=w.append("g").attr("class","links").selectAll("path").data(M.links).join("path").attr("stroke",(F,ee)=>`url(#link-gradient-${ee})`).attr("stroke-width",F=>{const ee=F.type==="transition"?2:1.5;return Math.min(ee+(F.count-1)*1.5,18)}).attr("stroke-opacity",F=>F.type==="transition"?.8:.5).attr("stroke-dasharray",F=>F.type==="tool"?"4,2":"none").attr("fill","none"),pe=w.append("g").selectAll("g").data(M.nodes).join("g").call(Fm().on("start",(F,ee)=>{F.active||Q.alphaTarget(.3).restart(),ee.fx=ee.x,ee.fy=ee.y}).on("drag",(F,ee)=>{ee.fx=F.x,ee.fy=F.y}).on("end",(F,ee)=>{F.active||Q.alphaTarget(0),ee.fx=null,ee.fy=null})),Z=F=>F.type==="System"?14:F.type==="Tool"?12:18;pe.filter(F=>F.type!=="Tool"&&F.type!=="System").append("circle").attr("r",F=>Z(F)+5).attr("fill","none").attr("stroke",F=>Qr(F.type)).attr("stroke-width",3).attr("stroke-opacity",F=>F.wasActive?.9:.4).attr("stroke-dasharray",F=>F.type==="SequentialAgent"?"8,4":F.type==="LoopAgent"?"6,3":F.type==="ParallelAgent"?"3,3":"none"),pe.append("circle").attr("r",F=>Z(F)).attr("fill",F=>F.type==="Tool"?Gs.bg:Ks(F.name).bg).attr("stroke",F=>F.isActive?"#fff":F.wasActive?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.2)").attr("stroke-width",F=>F.isActive?3:1.5).attr("opacity",F=>F.wasActive?1:.5).attr("class",F=>F.isActive?"active-node":"").style("cursor","pointer").on("mouseenter",function(F,ee){var ge;const B=(ge=x.current)==null?void 0:ge.getBoundingClientRect();if(!B)return;const K=F.clientX-B.left,ie=F.clientY-B.top;h({x:K,y:ie,node:ee}),kt(this).transition().duration(150).attr("r",Z(ee)+6)}).on("mouseleave",function(F,ee){h(null),kt(this).transition().duration(150).attr("r",Z(ee))}),pe.append("text").text(F=>F.name.length>10?F.name.slice(0,8)+"…":F.name).attr("text-anchor","middle").attr("dy",32).attr("font-size",10).attr("fill","#e4e4e7").attr("font-weight",F=>F.isActive?600:400),Q.on("tick",()=>{J.attr("d",ee=>{const B=ee.target.x-ee.source.x,K=ee.target.y-ee.source.y,ie=Math.sqrt(B*B+K*K)*1.5;return`M${ee.source.x},${ee.source.y}A${ie},${ie} 0 0,1 ${ee.target.x},${ee.target.y}`}),M.links.forEach((ee,B)=>{ae.select(`#link-gradient-${B}`).attr("x1",ee.source.x).attr("y1",ee.source.y).attr("x2",ee.target.x).attr("y2",ee.target.y)}),pe.attr("transform",ee=>`translate(${ee.x},${ee.y})`),M.nodes.forEach(ee=>{ee.x!==void 0&&ee.y!==void 0&&C.current.set(ee.id,{x:ee.x,y:ee.y})});const F=y();F&&$(F)});const se=y();return se&&$(se),()=>{Q.stop()}},[M,d]),k.useEffect(()=>{if(!g.current||!c)return;const S=kt(g.current),R=v.current;if(!R)return;const P=Math.min(R.clientWidth,R.clientHeight),w=P,W=P;S.selectAll("*").remove();const H=S.append("g"),y=dg().scaleExtent([.3,3]).on("zoom",J=>{H.attr("transform",J.transform),_.current=J.transform});if(S.call(y),_.current)S.call(y.transform,_.current);else{const J=zo.translate(w/2,W/2).scale(.9);S.call(y.transform,J),_.current=J}const N=P*.35,$=()=>{for(const J of M.nodes){if(J.x===void 0||J.y===void 0)continue;const pe=Math.sqrt(J.x*J.x+J.y*J.y);if(pe>N){const Z=N/pe;J.x*=Z,J.y*=Z}}},ne=new Set;for(const J of M.links){const pe=typeof J.source=="string"?J.source:J.source.id;ne.add(pe)}const de=new Set(M.nodes.filter(J=>!ne.has(J.id)&&J.name!=="system").map(J=>J.id)),be=()=>{const J=N*.75,pe=.12;for(const Z of M.nodes)if(de.has(Z.id)&&Z.x!==void 0&&Z.y!==void 0){const se=Math.sqrt(Z.x*Z.x+Z.y*Z.y)||1;if(se<J){const ke=Z.x/se,F=Z.y/se,ee=(J-se)*pe;Z.vx=(Z.vx||0)+ke*ee,Z.vy=(Z.vy||0)+F*ee}}},te=M.nodes.every(J=>J.x!==void 0&&J.y!==void 0),D=lg(M.nodes).force("link",sg(M.links).id(J=>J.id).distance(120)).force("charge",cg().strength(-500)).force("center",ng(0,0)).force("collision",ig().radius(50)).force("boundary",$).force("leafOutward",be).alpha(te?.1:.8).alphaDecay(.02),X=S.append("defs");M.links.forEach((J,pe)=>{const Z=X.append("linearGradient").attr("id",`exp-link-gradient-${pe}`).attr("gradientUnits","userSpaceOnUse");if(J.type==="transition")Z.append("stop").attr("offset","0%").attr("stop-color","#166534").attr("stop-opacity",.1),Z.append("stop").attr("offset","25%").attr("stop-color","#166534").attr("stop-opacity",.4),Z.append("stop").attr("offset","50%").attr("stop-color","#22c55e").attr("stop-opacity",.7),Z.append("stop").attr("offset","75%").attr("stop-color","#4ade80").attr("stop-opacity",.9),Z.append("stop").attr("offset","100%").attr("stop-color","#86efac").attr("stop-opacity",1);else{const se=J.type==="sub_agent"?{start:"#3730a3",end:"#a5b4fc"}:{start:"#92400e",end:"#fcd34d"};Z.append("stop").attr("offset","0%").attr("stop-color",se.start),Z.append("stop").attr("offset","100%").attr("stop-color",se.end)}});const re=H.append("g").attr("class","links").selectAll("path").data(M.links).join("path").attr("stroke",(J,pe)=>`url(#exp-link-gradient-${pe})`).attr("stroke-width",J=>{const pe=J.type==="transition"?3:2;return Math.min(pe+(J.count-1)*2.5,28)}).attr("stroke-opacity",J=>J.type==="transition"?.8:.5).attr("stroke-dasharray",J=>J.type==="tool"?"6,3":"none").attr("fill","none"),Q=J=>J.type==="System"?20:J.type==="Tool"?18:28,ae=H.append("g").selectAll("g").data(M.nodes).join("g").call(Fm().on("start",(J,pe)=>{J.active||D.alphaTarget(.3).restart(),pe.fx=pe.x,pe.fy=pe.y}).on("drag",(J,pe)=>{pe.fx=J.x,pe.fy=J.y}).on("end",(J,pe)=>{J.active||D.alphaTarget(0),pe.fx=null,pe.fy=null}));return ae.filter(J=>J.type!=="Tool"&&J.type!=="System").append("circle").attr("r",J=>Q(J)+6).attr("fill","none").attr("stroke",J=>Qr(J.type)).attr("stroke-width",4).attr("stroke-opacity",J=>J.wasActive?.9:.4).attr("stroke-dasharray",J=>J.type==="SequentialAgent"?"10,5":J.type==="LoopAgent"?"8,4":J.type==="ParallelAgent"?"4,4":"none"),ae.append("circle").attr("r",J=>Q(J)).attr("fill",J=>J.type==="Tool"?Gs.bg:Ks(J.name).bg).attr("stroke",J=>J.isActive?"#fff":J.wasActive?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.2)").attr("stroke-width",J=>J.isActive?4:2).attr("opacity",J=>J.wasActive?1:.5).attr("class",J=>J.isActive?"active-node":"").style("cursor","grab").on("mouseenter",function(J,pe){var F;const Z=(F=v.current)==null?void 0:F.getBoundingClientRect();if(!Z)return;const se=J.clientX-Z.left,ke=J.clientY-Z.top;b({x:se,y:ke,node:pe}),kt(this).transition().duration(150).attr("r",Q(pe)+8)}).on("mouseleave",function(J,pe){b(null),kt(this).transition().duration(150).attr("r",Q(pe))}),ae.append("text").text(J=>J.name.length>15?J.name.slice(0,13)+"…":J.name).attr("text-anchor","middle").attr("dy",J=>Q(J)+18).attr("font-size",14).attr("fill","#e4e4e7").attr("font-weight",J=>J.isActive?600:400),D.on("tick",()=>{re.attr("d",J=>{const pe=J.target.x-J.source.x,Z=J.target.y-J.source.y,se=Math.sqrt(pe*pe+Z*Z)*1.5;return`M${J.source.x},${J.source.y}A${se},${se} 0 0,1 ${J.target.x},${J.target.y}`}),M.links.forEach((J,pe)=>{X.select(`#exp-link-gradient-${pe}`).attr("x1",J.source.x).attr("y1",J.source.y).attr("x2",J.target.x).attr("y2",J.target.y)}),ae.attr("transform",J=>`translate(${J.x},${J.y})`),M.nodes.forEach(J=>{J.x!==void 0&&J.y!==void 0&&C.current.set(J.id,{x:J.x,y:J.y})})}),()=>{D.stop()}},[M,c]),o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:`agent-graph-container ${d?"":"closed"}`,children:o.jsxs("div",{className:"agent-graph-panel",children:[o.jsxs("div",{className:`agent-graph-content clickable state-${s}`,ref:x,onClick:()=>u(!0),title:"Click to expand",children:[o.jsx("svg",{ref:j,className:"agent-graph-svg"}),o.jsxs("div",{className:"agent-graph-legend",children:[o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{className:"legend-line",style:{background:"#22c55e"}}),o.jsx("span",{children:"agent flow"})]}),o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{className:"legend-line",style:{background:"#f59e0b",borderStyle:"dashed"}}),o.jsx("span",{children:"tool call"})]}),o.jsxs("div",{style:{marginTop:4,borderTop:"1px solid #333",paddingTop:4},children:[o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{style:{width:10,height:10,borderRadius:"50%",border:`2px solid ${mo.LlmAgent}`}}),o.jsx("span",{children:"LLM"})]}),o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{style:{width:10,height:10,borderRadius:"50%",border:`2px dashed ${mo.SequentialAgent}`}}),o.jsx("span",{children:"Sequential"})]}),o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{style:{width:10,height:10,borderRadius:"50%",border:`2px dashed ${mo.LoopAgent}`}}),o.jsx("span",{children:"Loop"})]}),o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{style:{width:10,height:10,borderRadius:"50%",border:`2px dotted ${mo.ParallelAgent}`}}),o.jsx("span",{children:"Parallel"})]})]})]}),p&&o.jsxs("div",{className:"agent-graph-tooltip",style:{left:Math.min(p.x+15,180),top:Math.max(p.y-20,10)},children:[o.jsx("div",{className:"agent-graph-tooltip-name",children:p.node.name}),o.jsxs("div",{className:"agent-graph-tooltip-type",children:[o.jsx("div",{className:"agent-graph-tooltip-dot",style:{background:p.node.type==="Tool"?Gs.bg:Ks(p.node.name).bg,border:p.node.type!=="Tool"&&p.node.type!=="System"?`2px solid ${Qr(p.node.type)}`:"none",width:12,height:12}}),o.jsx("span",{style:{color:Qr(p.node.type)},children:p.node.type==="LlmAgent"?"LLM Agent":p.node.type==="SequentialAgent"?"Sequential":p.node.type==="LoopAgent"?"Loop":p.node.type==="ParallelAgent"?"Parallel":p.node.type})]}),p.node.isActive&&o.jsx("div",{className:"agent-graph-tooltip-active",children:"● Currently executing"}),p.node.lastMessage&&o.jsxs("div",{className:"agent-graph-tooltip-message",children:['"',p.node.lastMessage.slice(0,80),p.node.lastMessage.length>80?"...":"",'"']}),p.node.type==="Tool"&&p.node.lastToolCall&&o.jsxs("div",{className:"agent-graph-tooltip-tool",children:[p.node.lastToolCall.args&&o.jsxs("div",{className:"tooltip-tool-args",children:[o.jsx("span",{className:"tooltip-tool-label",children:"Args:"})," ",(()=>{const S=JSON.stringify(p.node.lastToolCall.args);return S.slice(0,60)+(S.length>60?"...":"")})()]}),p.node.lastToolCall.result&&o.jsxs("div",{className:"tooltip-tool-result",children:[o.jsx("span",{className:"tooltip-tool-label",children:"Result:"})," ",p.node.lastToolCall.result.slice(0,60),p.node.lastToolCall.result.length>60?"...":""]})]})]})]}),o.jsx("button",{className:`agent-graph-toggle state-${s}`,onClick:()=>f(!d),children:o.jsx(wt,{size:20})})]})}),c&&o.jsx("div",{className:"agent-graph-modal-overlay",onClick:()=>{u(!1),_.current=null},children:o.jsxs("div",{className:`agent-graph-modal state-${s}`,ref:v,onClick:S=>S.stopPropagation(),children:[o.jsx("svg",{ref:g,className:"agent-graph-modal-svg"}),m&&o.jsxs("div",{className:"agent-graph-tooltip expanded-tooltip",style:{left:Math.min(m.x+20,window.innerWidth-200),top:Math.max(m.y-20,20)},children:[o.jsx("div",{className:"agent-graph-tooltip-name",children:m.node.name}),o.jsxs("div",{className:"agent-graph-tooltip-type",children:[o.jsx("div",{className:"agent-graph-tooltip-dot",style:{background:m.node.type==="Tool"?Gs.bg:Ks(m.node.name).bg,border:m.node.type!=="Tool"&&m.node.type!=="System"?`2px solid ${Qr(m.node.type)}`:"none",width:12,height:12}}),o.jsx("span",{style:{color:Qr(m.node.type)},children:m.node.type==="LlmAgent"?"LLM Agent":m.node.type==="SequentialAgent"?"Sequential":m.node.type==="LoopAgent"?"Loop":m.node.type==="ParallelAgent"?"Parallel":m.node.type})]}),m.node.isActive&&o.jsx("div",{className:"agent-graph-tooltip-active",children:"● Currently executing"}),m.node.lastMessage&&o.jsxs("div",{className:"agent-graph-tooltip-message",children:['"',m.node.lastMessage.slice(0,120),m.node.lastMessage.length>120?"...":"",'"']}),m.node.type==="Tool"&&m.node.lastToolCall&&o.jsxs("div",{className:"agent-graph-tooltip-tool",children:[m.node.lastToolCall.args&&o.jsxs("div",{className:"tooltip-tool-args",children:[o.jsx("span",{className:"tooltip-tool-label",children:"Args:"})," ",(()=>{const S=JSON.stringify(m.node.lastToolCall.args);return S.slice(0,100)+(S.length>100?"...":"")})()]}),m.node.lastToolCall.result&&o.jsxs("div",{className:"tooltip-tool-result",children:[o.jsx("span",{className:"tooltip-tool-label",children:"Result:"})," ",m.node.lastToolCall.result.slice(0,100),m.node.lastToolCall.result.length>100?"...":""]})]})]})]})})]})}const hg={agent_start:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},agent_end:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},tool_call:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},tool_result:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},model_call:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},model_response:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},callback_error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"},state_change:{bg:"#3d0d1f",fg:"#fda4af",border:"#f43f5e"},transfer:{bg:"#0d2d3d",fg:"#7dd3fc",border:"#0ea5e9"},callback_start:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},callback_end:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"}},L5={agent_start:Lu,agent_end:Lu,tool_call:gn,tool_result:gn,model_call:rp,model_response:Wa,state_change:Fn,transfer:cp,callback_start:En,callback_end:En,callback_error:wl},mg=[{bg:"#0e7490",fg:"#e0f2fe"},{bg:"#6d28d9",fg:"#ede9fe"},{bg:"#047857",fg:"#d1fae5"},{bg:"#b91c1c",fg:"#fee2e2"},{bg:"#b45309",fg:"#fef3c7"},{bg:"#1d4ed8",fg:"#dbeafe"},{bg:"#be185d",fg:"#fce7f3"},{bg:"#4d7c0f",fg:"#ecfccb"},{bg:"#7c3aed",fg:"#ede9fe"},{bg:"#0f766e",fg:"#ccfbf1"},{bg:"#c2410c",fg:"#ffedd5"},{bg:"#4338ca",fg:"#e0e7ff"}],gg=new Map;function tl(e){if(e==="sandbox"||e==="system")return{bg:"#374151",fg:"#9ca3af"};let t=gg.get(e);if(t===void 0){let n=0;for(let r=0;r<e.length;r++)n=(n<<5)-n+e.charCodeAt(r),n=n&n;t=Math.abs(n)%mg.length,gg.set(e,t)}return mg[t]}function xg(e){var t,n,r,i,s,a,l,c,u,d,f,p,h,m,b,j,g,x,v,_,T,C,L,E,U,z,I,q,G,A,O,M;switch(e.event_type){case"agent_start":return`START ${e.agent_name}`;case"agent_end":if((t=e.data)!=null&&t.error){const Q=(n=e.data)!=null&&n.hint?` 💡 ${e.data.hint.slice(0,100)}`:"";return`END ${e.agent_name} [ERROR] ${e.data.error}${Q}`}return`END ${e.agent_name}`;case"tool_call":const R=Object.entries(((r=e.data)==null?void 0:r.args)||{}).map(([Q,ae])=>{const J=ae!=null?JSON.stringify(ae):"null";return`${Q}=${J.slice(0,500)}${J.length>500?"...":""}`}).join(", ")||"";return`CALL ${((i=e.data)==null?void 0:i.tool_name)||"unknown"}(${R.slice(0,1e3)}${R.length>1e3?"...":""})`;case"tool_result":const P=(s=e.data)==null?void 0:s.result;let w="";if((l=(a=P==null?void 0:P.content)==null?void 0:a[0])!=null&&l.text)w=String(P.content[0].text).slice(0,500);else if(typeof P=="string")w=P.slice(0,500);else if(P!=null){const Q=JSON.stringify(P);w=Q?Q.slice(0,500):""}else w="";return`RESULT ${((c=e.data)==null?void 0:c.tool_name)||"unknown"} → ${w}${w.length>=500?"...":""}`;case"model_call":return`LLM_REQ ${((d=(u=e.data)==null?void 0:u.contents)==null?void 0:d.length)||0} msgs, ${((f=e.data)==null?void 0:f.tool_count)||0} tools`;case"model_response":const W=((h=(p=e.data)==null?void 0:p.response_content)==null?void 0:h.parts)||((m=e.data)==null?void 0:m.parts)||[],H=W.find(Q=>(Q==null?void 0:Q.type)==="function_call");if(H)return`LLM_RSP → ${H.name||"unknown"}()`;const y=W.find(Q=>(Q==null?void 0:Q.type)==="text");if(y!=null&&y.text){const Q=String(y.text);return`LLM_RSP "${Q.slice(0,50)}${Q.length>50?"...":""}"`}return`LLM_RSP (${((b=e.data)==null?void 0:b.finish_reason)||"complete"})`;case"state_change":return`STATE ${Object.keys(((j=e.data)==null?void 0:j.state_delta)||{}).join(", ")}`;case"transfer":return`TRANSFER → ${((g=e.data)==null?void 0:g.target)||"unknown"}`;case"callback_start":const $=((x=e.data)==null?void 0:x.callback_name)||"unknown",ne=((v=e.data)==null?void 0:v.callback_type)||"";return $==="network_approval"?`⏳ AWAITING APPROVAL ${((_=e.data)==null?void 0:_.host)||((T=e.data)==null?void 0:T.url)||""}`:`CALLBACK START ${ne?`[${ne}]`:""} ${$}`;case"callback_end":const de=((C=e.data)==null?void 0:C.callback_name)||"unknown",be=((L=e.data)==null?void 0:L.callback_type)||"",te=(E=e.data)!=null&&E.error?" [ERROR]":"";return de==="network_approval"?((U=e.data)==null?void 0:U.action)==="deny"?`🚫 DENIED ${((z=e.data)==null?void 0:z.host)||""}`:`✅ APPROVED ${((I=e.data)==null?void 0:I.pattern)||((q=e.data)==null?void 0:q.host)||""}`:`CALLBACK END ${be?`[${be}]`:""} ${de}${te}`;case"callback_error":const D=((G=e.data)==null?void 0:G.source)||"unknown",X=((A=e.data)==null?void 0:A.error)||"Unknown error";return`⚠️ ERROR in ${D}: ${X.slice(0,50)}${X.length>50?"...":""}`;case"compaction":const re=((O=e.data)==null?void 0:O.summary_preview)||"";return`📦 COMPACTION "${re.slice(0,80)}${re.length>80?"...":""}"`;default:return((M=e.event_type)==null?void 0:M.toUpperCase())||"UNKNOWN"}}function P5(e,t){const n=e-t;return n<1?`+${(n*1e3).toFixed(0)}ms`:n<60?`+${n.toFixed(2)}s`:`+${Math.floor(n/60)}m${(n%60).toFixed(0)}s`}function R5(e){const t={timestamp:"#71717a",bracket:"#a78bfa",ip:"#22d3ee",domain:"#34d399",url:"#60a5fa",method:"#f472b6",status:"#4ade80",statusError:"#f87171",number:"#fbbf24",keyword:"#c084fc",info:"#22d3ee",warning:"#fbbf24",error:"#f87171",debug:"#71717a"},n=[];let r=e,i=0;const s=(l,c)=>{l&&n.push(c?o.jsx("span",{style:{color:c},children:l},i++):o.jsx("span",{children:l},i++))},a=[{regex:/^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+Z?\s*)/,color:t.timestamp},{regex:/(\[[^\]]+\])/,color:t.bracket},{regex:/\b(GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS|CONNECT)\b/,color:t.method},{regex:/\b([23]\d{2})\s+(OK|Created|Accepted|No Content|Moved|Found|Not Modified)\b/,color:t.status},{regex:/\b([45]\d{2})\s+\w+/,color:t.statusError},{regex:/(<< \d{3} \w+)/,color:t.status},{regex:/(https?:\/\/[^\s]+)/,color:t.url},{regex:/(\s)(\/[a-zA-Z0-9_\-./]+)/,color:t.url,group:2},{regex:/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d+)/,color:t.ip},{regex:/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/,color:t.ip},{regex:/(sandbox-agent-[a-zA-Z0-9_-]+:\d+)/,color:t.domain},{regex:/(host\.docker\.internal:\d+)/,color:t.domain},{regex:/([a-zA-Z][a-zA-Z0-9-]*\.(?:com|org|net|io|dev|local|internal)(?::\d+)?)/,color:t.domain},{regex:/\b(\d+(?:\.\d+)?[kmgb])\b/i,color:t.number},{regex:/\b(INFO)\b/,color:t.info},{regex:/\b(WARNING|WARN)\b/,color:t.warning},{regex:/\b(ERROR|CRITICAL|FATAL)\b/,color:t.error},{regex:/\b(DEBUG)\b/,color:t.debug},{regex:/([a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*){2,})/,color:t.domain},{regex:/\b(client|server|connect|disconnect|completion|model|provider)\b/i,color:t.keyword}];for(;r.length>0;){let l=null;for(const{regex:c,color:u,group:d}of a){const f=r.match(c);if(f&&f.index!==void 0){const p=d?r.indexOf(f[d],f.index):f.index,h=d?f[d]:f[0];(!l||p<l.index)&&(l={index:p,length:h.length,text:h,color:u})}}if(l)l.index>0&&s(r.slice(0,l.index)),s(l.text,l.color),r=r.slice(l.index+l.length);else{s(r);break}}return o.jsx(o.Fragment,{children:n})}function I5({content:e}){const t=e.split(`
`);return o.jsx(o.Fragment,{children:t.map((n,r)=>o.jsx("div",{children:R5(n)},r))})}function O5({event:e}){var l,c,u,d,f,p,h,m,b,j,g,x,v,_,T,C,L,E,U,z,I,q,G,A,O;const[t,n]=k.useState(new Set(["instruction","messages","result","response","state_delta","data"])),[r,i]=k.useState(null),s=M=>{const S=new Set(t);S.has(M)?S.delete(M):S.add(M),n(S)},a=(M,S=0,R=!1)=>{const P="  ".repeat(S),w="  ".repeat(S+1);if(M===null)return o.jsx("span",{className:"json-null",children:"null"});if(M===void 0)return o.jsx("span",{className:"json-undefined",children:"undefined"});if(typeof M=="boolean")return o.jsx("span",{className:"json-boolean",children:M.toString()});if(typeof M=="number")return o.jsx("span",{className:"json-number",children:M});if(typeof M=="string"){const W=M.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\t/g,"\\t"),H=()=>i(M);return W.length>300&&S>0?o.jsxs("span",{className:"json-string json-string-clickable",onClick:H,title:"Click to view as Markdown",children:['"',W.slice(0,300),'..." ',o.jsxs("span",{className:"json-truncated",children:["(",M.length," chars)"]})]}):o.jsxs("span",{className:"json-string json-string-clickable",onClick:H,title:"Click to view as Markdown",children:['"',W,'"']})}if(Array.isArray(M))return M.length===0?o.jsx("span",{className:"json-bracket",children:"[]"}):M.every(H=>H===null||typeof H!="object")&&M.length<=3?o.jsxs("span",{className:"json-inline",children:[o.jsx("span",{className:"json-bracket",children:"["}),M.map((H,y)=>o.jsxs("span",{children:[a(H,S+1,!0),y<M.length-1&&o.jsx("span",{className:"json-comma",children:", "})]},y)),o.jsx("span",{className:"json-bracket",children:"]"})]}):o.jsxs("span",{className:"json-block",children:[o.jsx("span",{className:"json-bracket",children:"["}),M.map((H,y)=>o.jsxs("span",{children:[`
`+w,a(H,S+1),y<M.length-1&&o.jsx("span",{className:"json-comma",children:","})]},y)),`
`+P,o.jsx("span",{className:"json-bracket",children:"]"})]});if(typeof M=="object"){const W=Object.entries(M);return W.length===0?o.jsx("span",{className:"json-bracket",children:"{}"}):W.length<=2&&W.every(([,y])=>y===null||typeof y!="object")&&R?o.jsxs("span",{className:"json-inline",children:[o.jsx("span",{className:"json-bracket",children:"{"}),W.map(([y,N],$)=>o.jsxs("span",{children:[o.jsxs("span",{className:"json-key",children:['"',y,'"']}),o.jsx("span",{className:"json-colon",children:": "}),a(N,S+1,!0),$<W.length-1&&o.jsx("span",{className:"json-comma",children:", "})]},y)),o.jsx("span",{className:"json-bracket",children:"}"})]}):o.jsxs("span",{className:"json-block",children:[o.jsx("span",{className:"json-bracket",children:"{"}),W.map(([y,N],$)=>o.jsxs("span",{children:[`
`+w,o.jsxs("span",{className:"json-key",children:['"',y,'"']}),o.jsx("span",{className:"json-colon",children:": "}),a(N,S+1),$<W.length-1&&o.jsx("span",{className:"json-comma",children:","})]},y)),`
`+P,o.jsx("span",{className:"json-bracket",children:"}"})]})}return String(M)};return o.jsxs("div",{className:"event-detail",children:[o.jsxs("div",{className:"detail-header",children:[o.jsx("span",{className:"detail-type",children:e.event_type}),o.jsx("span",{className:"detail-agent",style:{backgroundColor:tl(e.agent_name).bg,color:tl(e.agent_name).fg,padding:"2px 8px",borderRadius:"4px",fontWeight:600},children:e.agent_name}),o.jsx("span",{className:"detail-time",children:new Date(e.timestamp*1e3).toISOString()})]}),((l=e.data)==null?void 0:l.error)&&o.jsxs("div",{className:"detail-section",style:{borderColor:"#dc2626"},children:[o.jsxs("div",{className:"section-header",style:{color:"#fca5a5"},children:[o.jsx(wl,{size:12,style:{color:"#ef4444"}}),o.jsx("span",{children:"⚠️ Error"})]}),o.jsxs("div",{className:"section-content",style:{color:"#fca5a5"},children:[o.jsxs("div",{style:{marginBottom:"8px"},children:[o.jsx("strong",{children:"Message:"})," ",e.data.error]}),e.data.hint&&o.jsxs("div",{style:{marginBottom:"8px",padding:"8px 12px",backgroundColor:"rgba(34, 197, 94, 0.1)",borderRadius:"6px",borderLeft:"3px solid #22c55e"},children:[o.jsx("strong",{style:{color:"#22c55e"},children:"💡 Hint:"})," ",o.jsx("span",{style:{color:"#86efac"},children:e.data.hint})]}),e.data.error_type&&e.data.error_type!=="unknown"&&o.jsxs("div",{style:{fontSize:"0.9em",opacity:.8},children:[o.jsx("strong",{children:"Type:"})," ",e.data.error_type]}),e.data.sub_errors&&e.data.sub_errors.length>0&&o.jsxs("div",{style:{marginTop:"12px"},children:[o.jsxs("strong",{children:["Sub-errors (",e.data.sub_errors.length,"):"]}),e.data.sub_errors.map((M,S)=>o.jsxs("div",{style:{marginTop:"8px",marginLeft:"12px",padding:"8px",backgroundColor:"rgba(220, 38, 38, 0.1)",borderRadius:"4px"},children:[o.jsxs("div",{children:[o.jsxs("strong",{children:[M.exception_type,":"]})," ",M.message]}),M.hint&&o.jsxs("div",{style:{marginTop:"4px",color:"#86efac",fontSize:"0.9em"},children:["💡 ",M.hint]}),M.stack_trace&&o.jsxs("details",{style:{marginTop:"6px"},children:[o.jsx("summary",{style:{cursor:"pointer",opacity:.7,fontSize:"0.9em"},children:"Stack trace"}),o.jsx("pre",{style:{marginTop:"4px",padding:"6px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.75em",overflow:"auto",maxHeight:"200px",whiteSpace:"pre-wrap",wordBreak:"break-word",fontFamily:'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'},children:M.stack_trace})]})]},S))]}),e.data.stack_trace&&o.jsxs("details",{style:{marginTop:"12px"},children:[o.jsx("summary",{style:{cursor:"pointer",opacity:.8,fontWeight:500},children:"📋 Stack Trace"}),o.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.8em",overflow:"auto",maxHeight:"400px",whiteSpace:"pre-wrap",wordBreak:"break-word",fontFamily:'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',lineHeight:"1.4"},children:e.data.stack_trace})]}),e.data.raw_error&&e.data.raw_error!==e.data.error&&!e.data.stack_trace&&o.jsxs("details",{style:{marginTop:"8px"},children:[o.jsx("summary",{style:{cursor:"pointer",opacity:.7},children:"Raw error"}),o.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"200px",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:e.data.raw_error})]})]})]}),o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("data"),children:[t.has("data")?o.jsx(zt,{size:12}):o.jsx(wt,{size:12}),o.jsx("span",{children:"Event Data"})]}),t.has("data")&&o.jsx("div",{className:"section-content json-viewer",children:a(e.data)})]}),e.event_type==="agent_start"&&((c=e.data)==null?void 0:c.instruction)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("instruction"),children:[t.has("instruction")?o.jsx(zt,{size:12}):o.jsx(wt,{size:12}),o.jsx("span",{children:"Instruction"}),o.jsxs("span",{className:"char-count",children:[e.data.instruction.length," chars"]})]}),t.has("instruction")&&o.jsx("div",{className:"section-content",children:o.jsx("pre",{className:"instruction-text",children:e.data.instruction})})]}),e.event_type==="model_call"&&((u=e.data)==null?void 0:u.contents)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("messages"),children:[t.has("messages")?o.jsx(zt,{size:12}):o.jsx(wt,{size:12}),o.jsxs("span",{children:["Messages (",e.data.contents.length,")"]})]}),t.has("messages")&&o.jsx("div",{className:"section-content",children:e.data.contents.map((M,S)=>{var R;return o.jsxs("div",{className:"message-item",children:[o.jsx("span",{className:`message-role ${M.role}`,children:M.role}),o.jsx("div",{className:"message-parts",children:(R=M.parts)==null?void 0:R.map((P,w)=>o.jsxs("div",{className:"message-part",children:[P.text&&o.jsx("pre",{children:P.text}),P.function_call&&o.jsxs("div",{className:"function-call",children:[o.jsx("strong",{children:P.function_call.name}),o.jsx("pre",{children:JSON.stringify(P.function_call.args,null,2)})]}),P.function_response&&o.jsxs("div",{className:"function-response",children:[o.jsx("strong",{children:P.function_response.name}),o.jsx("pre",{children:JSON.stringify(P.function_response.response,null,2)})]})]},w))})]},S)})})]}),e.event_type==="tool_result"&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("result"),children:[t.has("result")?o.jsx(zt,{size:12}):o.jsx(wt,{size:12}),o.jsx("span",{children:"Tool Result"})]}),t.has("result")&&o.jsx("div",{className:"section-content",children:o.jsx("pre",{className:"result-content",children:((h=(p=(f=(d=e.data)==null?void 0:d.result)==null?void 0:f.content)==null?void 0:p[0])==null?void 0:h.text)||(typeof((m=e.data)==null?void 0:m.result)=="string"?e.data.result:JSON.stringify((b=e.data)==null?void 0:b.result,null,2))})})]}),e.event_type==="model_response"&&((j=e.data)==null?void 0:j.parts)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("response"),children:[t.has("response")?o.jsx(zt,{size:12}):o.jsx(wt,{size:12}),o.jsxs("span",{children:["Response (",e.data.parts.length," part",e.data.parts.length!==1?"s":"",")"]}),e.data.token_counts&&o.jsxs("span",{className:"token-badge",children:[e.data.token_counts.input,"↑ ",e.data.token_counts.output,"↓"]})]}),t.has("response")&&o.jsx("div",{className:"section-content",children:e.data.parts.map((M,S)=>o.jsxs("div",{className:"response-part",children:[M.type==="text"&&M.text&&o.jsx("pre",{className:"response-text",children:M.text}),M.type==="function_call"&&o.jsxs("div",{className:"function-call",children:[o.jsxs("strong",{children:["→ ",M.name,"()"]}),M.args&&Object.keys(M.args).length>0&&o.jsx("pre",{children:JSON.stringify(M.args,null,2)})]}),M.thought&&o.jsx("div",{className:"thought-indicator",children:"💭 Thinking"})]},S))})]}),(e.event_type==="callback_start"||e.event_type==="callback_end")&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("callback_info"),children:[t.has("callback_info")?o.jsx(zt,{size:12}):o.jsx(wt,{size:12}),o.jsx("span",{children:"Callback Information"})]}),t.has("callback_info")&&o.jsxs("div",{className:"section-content",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Name:"})," ",((g=e.data)==null?void 0:g.callback_name)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Type:"})," ",((x=e.data)==null?void 0:x.callback_type)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Module Path:"})," ",((v=e.data)==null?void 0:v.module_path)||"unknown"]}),((_=e.data)==null?void 0:_.error)&&o.jsxs("div",{style:{color:"#ef4444",marginTop:"8px"},children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Error:"})," ",e.data.error]}),((T=e.data)==null?void 0:T.error_type)&&o.jsxs("div",{style:{marginTop:"4px",fontSize:"0.9em",opacity:.8},children:[o.jsx("strong",{children:"Type:"})," ",e.data.error_type]}),((C=e.data)==null?void 0:C.stack_trace)&&o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Stack Trace:"}),o.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"300px",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:e.data.stack_trace})]})]})]})]}),e.event_type==="callback_error"&&o.jsxs("div",{className:"detail-section",style:{borderColor:"#dc2626"},children:[o.jsxs("div",{className:"section-header",onClick:()=>s("error_info"),style:{color:"#fca5a5"},children:[t.has("error_info")?o.jsx(zt,{size:12}):o.jsx(wt,{size:12}),o.jsx("span",{children:"⚠️ Error Details"})]}),t.has("error_info")&&o.jsxs("div",{className:"section-content",style:{color:"#fca5a5"},children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Source:"})," ",((L=e.data)==null?void 0:L.source)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Error Type:"})," ",((E=e.data)==null?void 0:E.error_type)||"unknown"]}),o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Message:"})," ",((U=e.data)==null?void 0:U.error)||"No error message"]}),((z=e.data)==null?void 0:z.context)&&o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Context:"})," ",e.data.context]}),((I=e.data)==null?void 0:I.traceback)&&o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Stack Trace:"}),o.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"400px",whiteSpace:"pre-wrap",wordBreak:"break-word",color:"#fca5a5"},children:e.data.traceback})]})]})]}),e.event_type==="state_change"&&((q=e.data)==null?void 0:q.state_delta)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("state_delta"),children:[t.has("state_delta")?o.jsx(zt,{size:12}):o.jsx(wt,{size:12}),o.jsxs("span",{children:["State Changes (",Object.keys(e.data.state_delta).length,")"]})]}),t.has("state_delta")&&o.jsx("div",{className:"section-content",children:Object.entries(e.data.state_delta).map(([M,S])=>o.jsxs("div",{className:"state-delta-item",children:[o.jsx("div",{className:"state-delta-key",children:M}),o.jsx("pre",{className:"state-delta-value",children:typeof S=="string"?S:JSON.stringify(S,null,2)})]},M))})]}),e.event_type==="compaction"&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("compaction_info"),children:[t.has("compaction_info")?o.jsx(zt,{size:12}):o.jsx(wt,{size:12}),o.jsx("span",{children:"📦 Compaction Details"})]}),t.has("compaction_info")&&o.jsxs("div",{className:"section-content",children:[o.jsxs("div",{style:{marginBottom:"12px",padding:"8px",background:"rgba(147, 51, 234, 0.1)",borderRadius:"4px",border:"1px solid rgba(147, 51, 234, 0.3)"},children:[o.jsx("div",{style:{fontSize:"11px",color:"#a855f7",marginBottom:"4px",fontWeight:600},children:"Event Compaction Occurred"}),o.jsx("div",{style:{fontSize:"12px",color:"#e4e4e7"},children:"ADK has summarized older events to manage context window limits."})]}),((G=e.data)==null?void 0:G.start_timestamp)&&((A=e.data)==null?void 0:A.end_timestamp)&&o.jsxs("div",{style:{marginBottom:"8px"},children:[o.jsx("strong",{children:"Time Range Compacted:"})," ",new Date(e.data.start_timestamp*1e3).toLocaleTimeString()," - ",new Date(e.data.end_timestamp*1e3).toLocaleTimeString()]}),((O=e.data)==null?void 0:O.summary_preview)&&o.jsxs("div",{children:[o.jsx("strong",{children:"Summary Preview:"}),o.jsx("pre",{style:{marginTop:"8px",padding:"12px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"11px",overflow:"auto",maxHeight:"300px",whiteSpace:"pre-wrap",wordBreak:"break-word",border:"1px solid #27272a"},children:e.data.summary_preview})]})]})]}),r&&o.jsx($5,{content:r,onClose:()=>i(null)})]})}function $5({content:e,onClose:t}){return o.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.8)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2e3},onClick:t,children:o.jsxs("div",{style:{backgroundColor:"#1a1a1e",borderRadius:"8px",border:"1px solid #3f3f46",width:"90%",maxWidth:"1200px",height:"85%",display:"flex",flexDirection:"column",overflow:"hidden"},onClick:n=>n.stopPropagation(),children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx(Wr,{size:16}),o.jsx("span",{style:{fontWeight:600},children:"String Content"}),o.jsxs("span",{style:{color:"#71717a",fontSize:"12px"},children:["(",e.length," chars)"]})]}),o.jsx("button",{onClick:t,style:{background:"none",border:"none",color:"#a1a1aa",cursor:"pointer",padding:"4px",display:"flex",alignItems:"center"},children:o.jsx(Di,{size:18})})]}),o.jsx("div",{style:{flex:1,overflow:"auto",padding:"20px"},children:o.jsx("pre",{style:{fontSize:"12px",lineHeight:"1.5",color:"#e4e4e7",whiteSpace:"pre-wrap",wordBreak:"break-word",fontFamily:'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',margin:0},children:e})}),o.jsx("div",{style:{padding:"8px 16px",borderTop:"1px solid #3f3f46",backgroundColor:"#27272a",display:"flex",justifyContent:"flex-end",gap:"8px"},children:o.jsxs("button",{onClick:()=>navigator.clipboard.writeText(e),style:{background:"#3f3f46",border:"none",borderRadius:"4px",padding:"6px 12px",color:"#e4e4e7",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",fontSize:"12px"},children:[o.jsx(us,{size:12}),"Copy"]})})]})})}function D5({content:e,title:t,onClose:n}){return o.jsxs("div",{className:"modal-overlay",onClick:n,children:[o.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[o.jsxs("div",{className:"modal-header",children:[o.jsx("h3",{children:t}),o.jsx("button",{className:"modal-close",onClick:n,children:"×"})]}),o.jsx("div",{className:"modal-body markdown-content",children:o.jsx(x1,{children:e})})]}),o.jsx("style",{children:`
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
      `})]})}function F5({events:e,selectedEventIndex:t,project:n}){const[r,i]=k.useState(null),s=k.useMemo(()=>{var u;const l={};return(u=n==null?void 0:n.app)!=null&&u.state_keys&&n.app.state_keys.forEach(d=>{l[d.name]={value:void 0,timestamp:null,defined:!0,description:d.description,type:d.type}}),n!=null&&n.agents&&n.agents.forEach(d=>{if(d.type==="LlmAgent"&&d.output_key){const f=d.output_key;l[f]||(l[f]={value:void 0,timestamp:null,defined:!0,description:`Output from ${d.name}`,type:"string"})}}),(t!==null?e.slice(0,t+1):e).filter(d=>d.event_type==="state_change").forEach(d=>{var f;(f=d.data)!=null&&f.state_delta&&Object.entries(d.data.state_delta).forEach(([p,h])=>{var m;l[p]={...l[p],value:h,timestamp:d.timestamp,defined:((m=l[p])==null?void 0:m.defined)??!1}})}),l},[e,t,n]),a=Object.entries(s);return o.jsxs(o.Fragment,{children:[r&&o.jsx(D5,{content:r.content,title:r.title,onClose:()=>i(null)}),o.jsxs("div",{className:"state-snapshot",children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"state-header",children:t!==null?`State after event #${t}`:e.length>0?"State at end of run":"Defined State Keys"}),a.length===0?o.jsx("div",{className:"state-empty",children:"No state keys defined"}):a.map(([l,{value:c,timestamp:u,defined:d,description:f,type:p}])=>o.jsxs("div",{className:`state-entry ${c===void 0?"unset":""}`,children:[o.jsxs("div",{className:"state-key",children:[l,p&&o.jsxs("span",{className:"state-type",children:["(",p,")"]})]}),o.jsx("div",{className:"state-value",onClick:()=>{if(c!==void 0){const h=typeof c=="string"?c:JSON.stringify(c,null,2);i({content:h,title:l})}},style:{cursor:c!==void 0?"pointer":"default"},title:c!==void 0?"Click to view in markdown viewer":void 0,children:c===void 0?"(not set)":typeof c=="string"?c:JSON.stringify(c,null,2)}),f&&o.jsx("div",{className:"state-desc",children:f}),u&&o.jsx("div",{className:"state-time",children:new Date(u*1e3).toLocaleTimeString()})]},l))]})]})}function B5({project:e,sessionId:t}){const[n,r]=k.useState([]),[i,s]=k.useState(!1),[a,l]=k.useState(null),[c,u]=k.useState(null),[d,f]=k.useState(null);k.useEffect(()=>{if(!(e!=null&&e.id)||!t){r([]);return}(async()=>{s(!0),l(null);try{const j=await tv(e.id,t);r(j)}catch(j){l(j.message||"Failed to load artifacts"),r([])}finally{s(!1)}})()},[e==null?void 0:e.id,t]);const p=b=>b===null?"":b<1024?`${b} B`:b<1024*1024?`${(b/1024).toFixed(1)} KB`:`${(b/(1024*1024)).toFixed(1)} MB`,h=b=>{if(!(e!=null&&e.id)||!t)return;const j=la(e.id,t,b),g=document.createElement("a");g.href=j,g.download=b,document.body.appendChild(g),g.click(),document.body.removeChild(g)},m=b=>{if(!(!(e!=null&&e.id)||!t)&&b.is_image){const j=la(e.id,t,b.filename);f(j)}};return o.jsxs(o.Fragment,{children:[d&&o.jsx("div",{className:"artifact-image-modal",onClick:()=>f(null),style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e4,cursor:"pointer"},children:o.jsxs("div",{onClick:b=>b.stopPropagation(),style:{maxWidth:"90vw",maxHeight:"90vh",position:"relative"},children:[o.jsx("button",{onClick:()=>f(null),style:{position:"absolute",top:-40,right:0,background:"transparent",border:"none",color:"#fff",cursor:"pointer",padding:8},children:o.jsx(Di,{size:24})}),o.jsx("img",{src:d,alt:"Artifact preview",style:{maxWidth:"90vw",maxHeight:"85vh",objectFit:"contain",borderRadius:8}})]})}),o.jsxs("div",{className:"artifacts-panel",children:[o.jsx("style",{children:`
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
        `}),o.jsx("div",{className:"artifacts-header",children:t?"Session Artifacts":"No Session Selected"}),i?o.jsxs("div",{className:"artifacts-loading",children:[o.jsx(rn,{size:16,className:"spin",style:{marginBottom:8}}),o.jsx("div",{children:"Loading artifacts..."})]}):a?o.jsx("div",{className:"artifacts-error",children:a}):t?n.length===0?o.jsxs("div",{className:"artifacts-empty",children:[o.jsx(Ba,{size:24,style:{marginBottom:8,opacity:.5}}),o.jsx("div",{children:"No artifacts in this session"}),o.jsx("div",{style:{fontSize:10,marginTop:4,color:"#52525b"},children:"Use tool_context.save_artifact() to save artifacts"})]}):n.map(b=>o.jsxs("div",{className:"artifact-item",children:[o.jsx("div",{className:`artifact-icon ${b.is_image?"image":""}`,children:b.is_image?o.jsx(kj,{size:16}):o.jsx(vj,{size:16})}),o.jsxs("div",{className:"artifact-info",children:[o.jsx("div",{className:"artifact-name",title:b.filename,children:b.filename}),o.jsxs("div",{className:"artifact-meta",children:[b.mime_type||"unknown type",b.size!==null&&` • ${p(b.size)}`]})]}),o.jsxs("div",{className:"artifact-actions",children:[b.is_image&&o.jsx("button",{className:"artifact-btn",title:"Preview",onClick:()=>m(b),children:o.jsx(Wr,{size:14})}),o.jsx("button",{className:"artifact-btn",title:"Download",onClick:()=>h(b.filename),children:o.jsx($i,{size:14})})]}),b.is_image&&c===b.filename&&(e==null?void 0:e.id)&&t&&o.jsx("div",{className:"artifact-preview",children:o.jsx("img",{src:la(e.id,t,b.filename),alt:b.filename})})]},b.filename)):o.jsxs("div",{className:"artifacts-empty",children:[o.jsx(Ba,{size:24,style:{marginBottom:8,opacity:.5}}),o.jsx("div",{children:"Start a session to see artifacts"})]})]})]})}function Lc(e){if(!e)return{text:"",isError:!1};if(e.success===!1)return{text:e.error||"Unknown error",isError:!0};let t=e.result||e;if(typeof t=="string")try{const n=t.replace(/'/g,'"').replace(/True/g,"true").replace(/False/g,"false").replace(/None/g,"null");t=JSON.parse(n)}catch{return{text:t,isError:!1}}return t.content&&Array.isArray(t.content)?{text:t.content.filter(r=>r.type==="text").map(r=>r.text).join(`
`),isError:t.isError===!0}:{text:typeof t=="string"?t:JSON.stringify(t,null,2),isError:!1}}function yg(e,t){if(!t||!t.trim())return e;const n=t.trim();let r=e;try{r=JSON.parse(e)}catch{}if(n.startsWith("js:")){const i=n.slice(3).trim();try{const a=new Function("value","data",`return ${i}`)(e,r);return typeof a=="string"?a:JSON.stringify(a,null,2)}catch(s){return`[JS error: ${s}]`}}if(n.startsWith("."))try{const i=n.slice(1).split(".").filter(Boolean);let s=r;for(const a of i){const l=a.match(/^(\w+)?\[(\d+)\]$/);l?(l[1]&&(s=s[l[1]]),s=s[parseInt(l[2])]):s=s[a]}return s==null?"[No match]":typeof s=="string"?s:JSON.stringify(s,null,2)}catch(i){return`[Path error: ${i.message}]`}try{const s=new Function("value","data",`return ${n}`)(e,r);return typeof s=="string"?s:JSON.stringify(s,null,2)}catch(i){return`[Transform error: ${i.message}]`}}function U5({project:e,selectedEventIndex:t,sandboxMode:n}){var de,be;const{watches:r,updateWatch:i,addWatch:s,removeWatch:a,runEvents:l}=yt(),[c,u]=k.useState(!1),[d,f]=k.useState(null),[p,h]=k.useState({}),[m,b]=k.useState(new Set),[j,g]=k.useState(""),[x,v]=k.useState(""),[_,T]=k.useState({}),[C,L]=k.useState(""),[E,U]=k.useState([]),[z,I]=k.useState(null),[q,G]=k.useState(null),[A,O]=k.useState(!1);k.useEffect(()=>{tp().then(U).catch(console.error)},[]);const M=k.useMemo(()=>{const te=e.mcp_servers||[],D=new Set(te.map(re=>re.name)),X=E.filter(re=>!D.has(re.name));return[...te,...X]},[e.mcp_servers,E]),S=k.useCallback(async te=>{if(!(p[te]||m.has(te))){b(D=>new Set([...D,te]));try{const D=await Ae(`/projects/${e.id}/mcp-servers/${encodeURIComponent(te)}/test-connection`,{method:"POST"});D.success&&h(X=>({...X,[te]:D.tools}))}catch(D){console.error("Failed to load tools:",D)}finally{b(D=>{const X=new Set(D);return X.delete(te),X})}}},[e.id,p,m]);k.useEffect(()=>{var re;if(d)return;if(!j||!x){T({});return}const D=(p[j]||[]).find(Q=>Q.name===x);if(!((re=D==null?void 0:D.parameters)!=null&&re.properties)){T({});return}const X={};Object.entries(D.parameters.properties).forEach(([Q,ae])=>{ae.type==="string"?X[Q]=ae.default||"":ae.type==="number"||ae.type==="integer"?X[Q]=ae.default||0:ae.type==="boolean"?X[Q]=ae.default||!1:X[Q]=ae.default||null}),T(X)},[j,x,p,d]);const R=()=>{f(null),g(""),v(""),T({}),L(""),I(null),G(null),u(!0)},P=te=>{if(f(te.id),g(te.serverName),v(te.toolName),T({...te.args}),L(te.transform||""),te.result){const{text:D}=Lc(te.result);I(D),G(null)}else I(null),G(null);p[te.serverName]||S(te.serverName),u(!0)},w=async()=>{var D;if(!j||!x)return;O(!0),G(null);const te=((D=e.app)==null?void 0:D.id)||`app_${e.id}`;try{const X=await Ae(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:j,tool_name:x,arguments:_,sandbox_mode:n,app_id:n?te:void 0})}),{text:re,isError:Q}=Lc(X);Q?(G(re),I(null)):(I(re),G(null))}catch(X){G(String(X)),I(null)}finally{O(!1)}},W=k.useMemo(()=>z?!C||!C.trim()?z:yg(z,C):null,[z,C]),H=()=>{if(!(!j||!x)){if(d){i(d,{serverName:j,toolName:x,args:{..._},transform:C||void 0});const te=r.find(D=>D.id===d);te&&N({...te,serverName:j,toolName:x,args:_,transform:C||void 0,history:te.history||[]})}else{const te={id:`watch-${Date.now()}`,serverName:j,toolName:x,args:{..._},transform:C||void 0,history:[]};s(te),N(te)}u(!1)}},y=te=>{a(te)},N=k.useCallback(async(te,D)=>{var ae;i(te.id,{isLoading:!0,error:void 0});const X=D??l.length-1,re=Date.now(),Q=((ae=e.app)==null?void 0:ae.id)||`app_${e.id}`;try{const J=await Ae(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:te.serverName,tool_name:te.toolName,arguments:te.args,sandbox_mode:n,app_id:n?Q:void 0})}),pe={eventIndex:X,timestamp:re,result:J},Z=[...te.history||[],pe];i(te.id,{result:J,isLoading:!1,lastRun:re,history:Z})}catch(J){const pe={eventIndex:X,timestamp:re,error:String(J)},Z=[...te.history||[],pe];i(te.id,{error:String(J),isLoading:!1,lastRun:re,history:Z})}},[e.id,(de=e.app)==null?void 0:de.id,i,l.length,n]),$=()=>{r.forEach(te=>N(te))},ne=k.useMemo(()=>!j||!x?null:(p[j]||[]).find(D=>D.name===x),[j,x,p]);return o.jsxs("div",{className:"tool-watch-panel",children:[o.jsxs("div",{className:"watch-header",children:[o.jsx(Wr,{size:14}),o.jsx("span",{children:"Tool Watch"}),o.jsx("span",{className:"watch-auto-badge",title:"Watches auto-refresh on every event",children:"⚡ Auto"}),o.jsxs("div",{className:"watch-actions",children:[o.jsx("button",{className:"watch-btn",onClick:$,title:"Refresh all",children:o.jsx(rn,{size:12})}),o.jsx("button",{className:"watch-btn",onClick:R,title:"Add watch",children:o.jsx(nt,{size:12})})]})]}),r.length===0?o.jsxs("div",{className:"watch-empty",children:[o.jsx(Wr,{size:20,style:{opacity:.3}}),o.jsx("span",{children:"No watch expressions"}),o.jsxs("button",{className:"add-watch-btn",onClick:R,children:[o.jsx(nt,{size:12})," Add Tool Watch"]})]}):o.jsx("div",{className:"watch-list",children:r.map(te=>{let D=te.result,X=te.error;if(t!==null&&te.history&&te.history.length>0){const pe=te.history.filter(Z=>Z.eventIndex<=t);if(pe.length>0){const Z=pe[pe.length-1];D=Z.result,X=Z.error}else D=void 0,X=void 0}const{text:re,isError:Q}=D?Lc(D):{text:"",isError:!1},ae=D?yg(re,te.transform):"",J=X||Q;return o.jsxs("div",{className:`watch-item ${J?"error":""}`,children:[o.jsxs("div",{className:"watch-item-header",children:[o.jsxs("span",{className:"watch-expr",children:[o.jsx("span",{className:"watch-server",children:te.serverName}),o.jsx("span",{className:"watch-tool",children:te.toolName}),Object.keys(te.args).length>0&&o.jsxs("span",{className:"watch-args",children:["(",Object.entries(te.args).map(([pe,Z])=>`${pe}=${JSON.stringify(Z)}`).join(", "),")"]}),t!==null&&o.jsxs("span",{className:"watch-time-indicator",children:["@",t]})]}),o.jsxs("div",{className:"watch-item-actions",children:[o.jsx("button",{onClick:()=>P(te),title:"Edit watch",children:o.jsx(gn,{size:10})}),o.jsx("button",{onClick:()=>N(te),title:"Refresh",children:te.isLoading?o.jsx(rn,{size:10,className:"spin"}):o.jsx(rn,{size:10})}),o.jsx("button",{onClick:()=>y(te.id),title:"Remove",children:o.jsx(Je,{size:10})})]})]}),o.jsx("div",{className:"watch-result",children:te.isLoading?o.jsx("span",{className:"loading",children:"Loading..."}):X?o.jsx("span",{className:"error",children:X}):D?o.jsx("pre",{className:Q?"error-text":"",children:ae}):o.jsx("span",{className:"no-result",children:t!==null?"No data at this event":"Not yet run"})})]},te.id)})}),c&&o.jsx("div",{className:"watch-dialog-overlay",onClick:()=>u(!1),children:o.jsxs("div",{className:"watch-dialog",onClick:te=>te.stopPropagation(),children:[o.jsxs("div",{className:"dialog-header",children:[o.jsx("span",{children:d?"Edit Watch":"Add Tool Watch"}),o.jsx("button",{onClick:()=>u(!1),children:o.jsx(Di,{size:14})})]}),o.jsxs("div",{className:"dialog-body",children:[o.jsxs("div",{className:"form-row",children:[o.jsx("label",{children:"MCP Server"}),o.jsxs("select",{value:j,onChange:te=>{g(te.target.value),d||v(""),te.target.value&&S(te.target.value)},children:[o.jsx("option",{value:"",children:"Select server..."}),M.map(te=>o.jsx("option",{value:te.name,children:te.name},te.name))]})]}),o.jsxs("div",{className:"form-row",children:[o.jsx("label",{children:"Tool"}),o.jsxs("select",{value:x,onChange:te=>v(te.target.value),disabled:!j||m.has(j),children:[o.jsx("option",{value:"",children:m.has(j)?"Loading tools...":"Select tool..."}),(p[j]||[]).map(te=>o.jsx("option",{value:te.name,children:te.name},te.name))]})]}),(ne==null?void 0:ne.description)&&o.jsx("div",{className:"tool-desc",children:ne.description}),((be=ne==null?void 0:ne.parameters)==null?void 0:be.properties)&&Object.keys(ne.parameters.properties).length>0&&o.jsxs("div",{className:"tool-args",children:[o.jsx("label",{children:"Arguments"}),Object.entries(ne.parameters.properties).map(([te,D])=>{var X,re;return o.jsxs("div",{className:"arg-row",children:[o.jsxs("span",{className:"arg-name",children:[te,((X=ne.parameters.required)==null?void 0:X.includes(te))&&o.jsx("span",{className:"required",children:"*"})]}),o.jsx("input",{type:D.type==="number"||D.type==="integer"?"number":"text",value:typeof _[te]=="object"?JSON.stringify(_[te]):_[te]??"",onChange:Q=>T(ae=>({...ae,[te]:Q.target.value})),placeholder:((re=D.description)==null?void 0:re.slice(0,40))||te})]},te)})]}),j&&x&&o.jsxs("div",{className:"test-section",children:[o.jsxs("div",{className:"test-header",children:[o.jsx("label",{children:"Test & Preview"}),o.jsxs("button",{className:"test-btn",onClick:w,disabled:A,children:[A?o.jsx(rn,{size:12,className:"spin"}):o.jsx(xr,{size:12}),A?"Running...":"Test Run"]})]}),q&&o.jsxs("div",{className:"test-result error",children:[o.jsx("span",{className:"test-label",children:"Error:"}),o.jsx("pre",{children:q})]}),z&&o.jsxs("div",{className:"test-result",children:[o.jsx("span",{className:"test-label",children:"Raw Result:"}),o.jsx("pre",{children:z})]})]}),o.jsxs("div",{className:"form-row transform-row",children:[o.jsx("label",{children:"Transform (optional)"}),o.jsx("input",{type:"text",value:C,onChange:te=>L(te.target.value),placeholder:"e.g., .items[0].name or .content[].text"}),o.jsxs("div",{className:"transform-hints",children:[o.jsx("span",{className:"hint-title",children:"Path:"}),o.jsx("code",{onClick:()=>L(".items[0].name"),children:".items[0].name"}),o.jsx("code",{onClick:()=>L(".content[0].text"),children:".content[0].text"}),o.jsx("code",{onClick:()=>L(".result.data"),children:".result.data"}),o.jsx("span",{className:"hint-title",children:"JS:"}),o.jsx("code",{onClick:()=>L("js:value.split('\\n')[0]"),children:"js:value.split('\\n')[0]"}),o.jsx("code",{onClick:()=>L("js:data.items?.length"),children:"js:data.items?.length"})]})]}),z&&C&&o.jsxs("div",{className:"transform-preview",children:[o.jsx("span",{className:"test-label",children:"Transform Preview:"}),o.jsx("pre",{className:W!=null&&W.startsWith("[Transform error")?"error":"",children:W})]})]}),o.jsxs("div",{className:"dialog-footer",children:[o.jsx("button",{className:"cancel-btn",onClick:()=>u(!1),children:"Cancel"}),o.jsx("button",{className:"add-btn",onClick:H,disabled:!j||!x,children:d?"Save Changes":"Add Watch"})]})]})})]})}function W5(){var Vp,Hp;const{project:e,updateProject:t,isRunning:n,setIsRunning:r,runEvents:i,addRunEvent:s,clearRunEvents:a,clearWatchHistories:l,runAgentId:c,setRunAgentId:u,watches:d,updateWatch:f,currentSessionId:p,setCurrentSessionId:h}=yt(),[m,b]=k.useState(""),[j,g]=k.useState(null),[x,v]=k.useState(null),[_,T]=k.useState(null),[C,L]=k.useState(""),[E,U]=k.useState(new Set(["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_start","callback_end","callback_error"])),[z,I]=k.useState(()=>{const V=localStorage.getItem("sandboxMode");return V!==null?V==="true":!0});k.useEffect(()=>{localStorage.setItem("sandboxMode",String(z))},[z]);const[q,G]=k.useState(null),[A,O]=k.useState(!1),[M,S]=k.useState({}),[R,P]=k.useState(!1),[w,W]=k.useState("agent"),H=k.useRef(null),y=k.useRef(!0),N=k.useRef(0),[$,ne]=k.useState(!0),[de,be]=k.useState(!0),[te,D]=k.useState(!1),[X,re]=k.useState(!1),[Q,ae]=k.useState(360),[J,pe]=k.useState(!1),[Z,se]=k.useState(!1),[ke,F]=k.useState(!1),ee=k.useMemo(()=>n?"running":i.length===0?"idle":ke?"cancelled":i.slice(-5).some(me=>{var xe,Pe,Ie,ft,Ft;if(!me||!me.event_type)return!1;if((xe=me.data)!=null&&xe.error||me.event_type==="callback_error"||me.event_type==="agent_end"&&((Pe=me.data)!=null&&Pe.error)||xg(me).includes("[ERROR]"))return!0;if(me.event_type==="model_response"){const An=(((ft=(Ie=me.data)==null?void 0:Ie.response_content)==null?void 0:ft.parts)||((Ft=me.data)==null?void 0:Ft.parts)||[]).find(Kr=>(Kr==null?void 0:Kr.type)==="text");if(An!=null&&An.text&&(An.text.includes("[ERROR]")||An.text.toLowerCase().includes("error:")||An.text.toLowerCase().includes("exception:")))return!0}return!1})?"failed":"completed",[n,i,ke]),[B,K]=k.useState(!1),[ie,ge]=k.useState([]),Y=k.useRef(null);k.useEffect(()=>{if(!e)return;const V=`promptHistory_${e.id}`,le=localStorage.getItem(V);if(le)try{const me=JSON.parse(le),ye=Object.entries(me).map(([xe,Pe])=>({prompt:xe,count:Pe})).sort((xe,Pe)=>Pe.count-xe.count);ge(ye)}catch(me){console.error("Failed to parse prompt history:",me)}else ge([])},[e==null?void 0:e.id]);const oe=k.useCallback(V=>{const le=V.trim();if(!le||!e)return;const me=`promptHistory_${e.id}`,ye=localStorage.getItem(me),xe=ye?JSON.parse(ye):{};xe[le]=(xe[le]||0)+1,localStorage.setItem(me,JSON.stringify(xe));const Pe=Object.entries(xe).map(([Ie,ft])=>({prompt:Ie,count:ft})).sort((Ie,ft)=>ft.count-Ie.count);ge(Pe)},[e]),je=k.useMemo(()=>{const V=m.toLowerCase().trim();return ie.filter(le=>!V||le.prompt.toLowerCase().includes(V)).slice(0,10)},[ie,m]),[Ce,_e]=k.useState([60,80,100,80,1]),[Le,Xe]=k.useState(null),ot=k.useRef(0),fe=k.useRef(0),[Ee,he]=k.useState([]),[ze,Se]=k.useState(null),[De,$t]=k.useState(!1),_r=k.useRef(0),Xt=k.useCallback(async(V,le)=>{var Pe;if(!e)return;f(V.id,{isLoading:!0,error:void 0});const me=le??i.length-1,ye=Date.now(),xe=((Pe=e.app)==null?void 0:Pe.id)||`app_${e.id}`;try{const Ie=await Ae(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:V.serverName,tool_name:V.toolName,arguments:V.args,sandbox_mode:z,app_id:z?xe:void 0})}),ft={eventIndex:me,timestamp:ye,result:Ie},Ft=[...V.history||[],ft];f(V.id,{result:Ie,isLoading:!1,lastRun:ye,history:Ft})}catch(Ie){const ft={eventIndex:me,timestamp:ye,error:String(Ie)},Ft=[...V.history||[],ft];f(V.id,{error:String(Ie),isLoading:!1,lastRun:ye,history:Ft})}},[e==null?void 0:e.id,(Vp=e==null?void 0:e.app)==null?void 0:Vp.id,f,i.length,z]);k.useEffect(()=>{if(i.length>_r.current&&d.length>0){const V=i.length-1;d.forEach(le=>{le.isLoading||Xt(le,V)})}_r.current=i.length},[i.length,d,Xt]),k.useEffect(()=>{c!==null&&($p(c),u(null))},[c,u]);const[Ui,$p]=k.useState(null),xs=k.useRef(null),Ml=k.useRef(null);k.useEffect(()=>{if(!J)return;const V=me=>{if(!Ml.current)return;const xe=Ml.current.getBoundingClientRect().right-me.clientX;ae(Math.min(600,Math.max(200,xe)))},le=()=>{pe(!1)};return document.addEventListener("mousemove",V),document.addEventListener("mouseup",le),()=>{document.removeEventListener("mousemove",V),document.removeEventListener("mouseup",le)}},[J]),k.useEffect(()=>{if(Le===null)return;const V=me=>{const ye=me.clientX-ot.current,xe=Math.max(40,fe.current+ye);_e(Pe=>{const Ie=[...Pe];return Ie[Le]=xe,Ie})},le=()=>{Xe(null)};return document.addEventListener("mousemove",V),document.addEventListener("mouseup",le),document.body.style.cursor="col-resize",document.body.style.userSelect="none",()=>{document.removeEventListener("mousemove",V),document.removeEventListener("mouseup",le),document.body.style.cursor="",document.body.style.userSelect=""}},[Le]);const ys=(V,le)=>{le.preventDefault(),ot.current=le.clientX,fe.current=Ce[V],Xe(V)},Dp=Ce.map((V,le)=>le===Ce.length-1?`minmax(${V}px, 1fr)`:`${V}px`).join(" "),X1=k.useMemo(()=>i.length===0?{min:0,max:0}:{min:i[0].timestamp,max:i[i.length-1].timestamp},[i]),Dt=k.useMemo(()=>i.filter((V,le)=>{var me,ye,xe;if(_&&(V.timestamp<_[0]||V.timestamp>_[1])||E.size>0&&!E.has(V.event_type))return!1;if($&&V.event_type==="model_response"){const Pe=((ye=(me=V.data)==null?void 0:me.response_content)==null?void 0:ye.parts)||((xe=V.data)==null?void 0:xe.parts)||[],Ie=Pe.some(Ft=>Ft.type==="function_call"),ft=Pe.some(Ft=>Ft.type==="text");if(!Ie&&!ft)return!1}return!(C&&!JSON.stringify(V).toLowerCase().includes(C.toLowerCase()))}),[i,_,E,C,$]),vs=k.useMemo(()=>{var ye;let V=0,le=0;const me=x!==null?x+1:i.length;for(let xe=0;xe<me;xe++){const Pe=i[xe];Pe.event_type==="model_response"&&((ye=Pe.data)!=null&&ye.token_counts)&&(V+=Pe.data.token_counts.input||0,le+=Pe.data.token_counts.output||0)}return{input:V,output:le,total:V+le}},[i,x]),Fp=x!==null?i[x]:null;k.useEffect(()=>{if(!e){he([]);return}(async()=>{$t(!0);try{const le=await Au(e.id);he(le)}catch(le){console.error("Failed to load sessions:",le),he([])}finally{$t(!1)}})()},[e]);const Ll=k.useCallback(async V=>{if(!e){Se(null);return}if(!V){a(),l(),h(null),Se(null),v(null),T(null);return}try{const le=await ev(e.id,V);a(),l(),h(le.id),Se(V),v(null),T(null);for(const me of le.events)s(me)}catch(le){alert(`Failed to load session: ${le.message||"Unknown error"}`)}},[e,a,l,h,s]);k.useEffect(()=>{if(!e||Ee.length===0||De)return;const le=new URLSearchParams(window.location.search).get("session");if(le)if(Ee.some(ye=>ye.id===le)){Ll(le);const ye=window.location.pathname;window.history.replaceState({},"",ye)}else console.warn(`Session ${le} not found in available sessions`)},[e,Ee,De,Ll]),k.useEffect(()=>{n&&xs.current&&(xs.current.scrollTop=xs.current.scrollHeight)},[i.length,n]);const Wi=k.useCallback(V=>{const le=V??m;if(!e||!le.trim()||n)return;se(!0),oe(le),K(!1),b(le),j&&(j.close(),g(null)),a(),l(),Se(null),h(null),r(!0),F(!1),v(null),T(null);const me=ov(e.id);g(me),me.onopen=()=>{me.send(JSON.stringify({message:le,agent_id:Ui||void 0,sandbox_mode:z}))},me.onmessage=ye=>{var Pe;const xe=JSON.parse(ye.data);if(xe.event_type==="agent_start"&&((Pe=xe.data)!=null&&Pe.session_id)){const Ie=xe.data.session_id;xe.data.session_reused,h(Ie),Ie&&Ee.some(ft=>ft.id===Ie)&&Se(Ie)}else if(xe.type==="session_started")h(xe.session_id),xe.session_id&&Ee.some(Ie=>Ie.id===xe.session_id)&&Se(xe.session_id);else if(xe.type==="sandbox_starting")s({timestamp:Date.now()/1e3,event_type:"agent_start",agent_name:"sandbox",data:{message:"Starting Docker sandbox..."}});else if(xe.type==="sandbox_started")s({timestamp:Date.now()/1e3,event_type:"agent_start",agent_name:"sandbox",data:{message:`Sandbox started (ID: ${xe.sandbox_id})`}});else if(xe.type==="sandbox_response")s({timestamp:Date.now()/1e3,event_type:"model_response",agent_name:"sandbox",data:xe.data});else if(xe.event_type==="approval_required"||xe.type==="network_request"&&xe.event_type==="approval_required"){const Ie={id:xe.id,method:xe.method||"GET",url:xe.url,host:xe.host,source:xe.source||"agent",headers:xe.headers||{},timeout:xe.timeout||30};G(Ie),s({timestamp:Date.now()/1e3,event_type:"callback_start",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`⚠️ Network request to ${xe.host} requires approval`,host:xe.host,url:xe.url}})}else xe.type==="completed"?(r(!1),me.close()):xe.type==="error"?(r(!1),s({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:xe.error}})):s(xe)},me.onerror=ye=>{console.error("WebSocket error:",ye),r(!1),s({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:"Connection error. The server may have timed out or the LLM request failed. Try again or check if your model server is running.",retryable:!0}})},me.onclose=ye=>{n&&(r(!1),ye.code!==1e3&&ye.code!==1005&&s({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:`Connection closed unexpectedly (code: ${ye.code}). This may be due to a timeout or server error. Try increasing the request timeout in your model configuration.`,retryable:!0}}))}},[e,m,n,j,a,l,r,s,Ui,h,z,oe]),Z1=k.useCallback(()=>{j==null||j.close(),r(!1),F(!0)},[j,r]),e0=k.useCallback(async(V,le,me)=>{var Ft,Rl,An,Kr,qp,Jp,Kp,Gp,Yp,Qp,Xp,Zp,ef,tf,nf,rf,of,sf,af,lf,cf,uf,df,pf,ff,hf;if(!q||!e)return;const ye=((Ft=e.app)==null?void 0:Ft.id)||e.id,xe=V?"allow_pattern":"allow_once",Pe=V||q.host,Ie=le||"exact",ft=me?`/sandbox/${ye}/approval?project_id=${e.id}`:`/sandbox/${ye}/approval`;try{if(await Ae(ft,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:q.id,action:xe,pattern:Pe,pattern_type:Ie,persist:me||!1})}),me&&xe==="allow_pattern"){const Il=((Kr=(An=(Rl=e.app)==null?void 0:Rl.sandbox)==null?void 0:An.allowlist)==null?void 0:Kr.user)||[],f0={id:`pattern_${Date.now().toString(36)}`,pattern:Pe,pattern_type:Ie,source:"approved",added_at:new Date().toISOString()};t({app:{...e.app,sandbox:{...(qp=e.app)==null?void 0:qp.sandbox,enabled:((Kp=(Jp=e.app)==null?void 0:Jp.sandbox)==null?void 0:Kp.enabled)??!1,allow_all_network:((Yp=(Gp=e.app)==null?void 0:Gp.sandbox)==null?void 0:Yp.allow_all_network)??!1,allowlist:{auto:((Zp=(Xp=(Qp=e.app)==null?void 0:Qp.sandbox)==null?void 0:Xp.allowlist)==null?void 0:Zp.auto)||[],user:[...Il,f0]},unknown_action:((tf=(ef=e.app)==null?void 0:ef.sandbox)==null?void 0:tf.unknown_action)??"ask",approval_timeout:((rf=(nf=e.app)==null?void 0:nf.sandbox)==null?void 0:rf.approval_timeout)??30,agent_memory_limit_mb:((sf=(of=e.app)==null?void 0:of.sandbox)==null?void 0:sf.agent_memory_limit_mb)??512,agent_cpu_limit:((lf=(af=e.app)==null?void 0:af.sandbox)==null?void 0:lf.agent_cpu_limit)??1,mcp_memory_limit_mb:((uf=(cf=e.app)==null?void 0:cf.sandbox)==null?void 0:uf.mcp_memory_limit_mb)??256,mcp_cpu_limit:((pf=(df=e.app)==null?void 0:df.sandbox)==null?void 0:pf.mcp_cpu_limit)??.5,run_timeout:((hf=(ff=e.app)==null?void 0:ff.sandbox)==null?void 0:hf.run_timeout)??3600}}})}s({timestamp:Date.now()/1e3,event_type:"callback_end",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`✅ Approved: ${Pe}`,pattern:Pe,action:xe}})}catch(Il){console.error("Failed to approve:",Il)}G(null)},[q,e,s,t]),t0=k.useCallback(async()=>{var le;if(!q||!e)return;const V=((le=e.app)==null?void 0:le.id)||e.id;try{await Ae(`/sandbox/${V}/approval`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:q.id,action:"deny"})}),s({timestamp:Date.now()/1e3,event_type:"callback_end",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`❌ Denied: ${q.host}`,host:q.host,action:"deny"}})}catch(me){console.error("Failed to deny:",me)}G(null)},[q,e,s]),Vi=k.useCallback(async(V=!0)=>{var me;if(!e)return;const le=((me=e.app)==null?void 0:me.id)||`app_${e.id}`;V&&P(!0);try{const[ye,xe]=await Promise.all([Ae(`/sandbox/${le}/logs?container=agent&tail=500`).catch(()=>null),Ae(`/sandbox/${le}/logs?container=gateway&tail=500`).catch(()=>null)]);S({agent:(ye==null?void 0:ye.logs)||(ye==null?void 0:ye.error)||"No logs available",gateway:(xe==null?void 0:xe.logs)||(xe==null?void 0:xe.error)||"No logs available"})}catch(ye){console.error("Failed to fetch logs:",ye),S({agent:`Error fetching logs: ${ye}`,gateway:`Error fetching logs: ${ye}`})}finally{V&&P(!1)}},[e]),n0=k.useCallback(()=>{O(!0),Vi()},[Vi]);k.useEffect(()=>{if(!A||!H.current||R)return;const V=H.current,le=N.current,me=V.scrollHeight;setTimeout(()=>{if(H.current){if(y.current)H.current.scrollTop=H.current.scrollHeight;else if(le>0&&me>le){const ye=me-le;H.current.scrollTop+=ye}N.current=H.current.scrollHeight}},50)},[A,w,M,R]),k.useEffect(()=>{A&&(y.current=!0,N.current=0)},[A,w]);const r0=k.useCallback(()=>{if(!H.current)return;const V=H.current,me=V.scrollHeight-V.scrollTop-V.clientHeight<50;y.current=me},[]);k.useEffect(()=>{if(!A)return;const V=setInterval(()=>{Vi(!1)},3e3);return()=>clearInterval(V)},[A,Vi]),k.useEffect(()=>{const V=le=>{if((le.metaKey||le.ctrlKey)&&le.key==="Enter"){le.preventDefault(),Wi();return}if(le.key==="ArrowDown"||le.key==="ArrowUp"){if(le.target instanceof HTMLInputElement||le.target instanceof HTMLTextAreaElement||(le.preventDefault(),Dt.length===0))return;if(le.key==="ArrowDown")if(x===null){const me=i.indexOf(Dt[0]);v(me)}else{const me=Dt.findIndex(ye=>i.indexOf(ye)===x);if(me<Dt.length-1){const ye=i.indexOf(Dt[me+1]);v(ye)}}else if(le.key==="ArrowUp")if(x===null){const me=i.indexOf(Dt[Dt.length-1]);v(me)}else{const me=Dt.findIndex(ye=>i.indexOf(ye)===x);if(me>0){const ye=i.indexOf(Dt[me-1]);v(ye)}}}};return window.addEventListener("keydown",V),()=>window.removeEventListener("keydown",V)},[Wi,Dt,x,i]);const i0=k.useCallback(()=>{var xe;if(i.length===0)return;const V={version:1,exportedAt:new Date().toISOString(),projectId:e==null?void 0:e.id,projectName:e==null?void 0:e.name,agentId:Ui||((xe=e==null?void 0:e.app)==null?void 0:xe.root_agent_id),events:i},le=new Blob([JSON.stringify(V,null,2)],{type:"application/json"}),me=URL.createObjectURL(le),ye=document.createElement("a");ye.href=me,ye.download=`run-${(e==null?void 0:e.name)||"export"}-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,document.body.appendChild(ye),ye.click(),document.body.removeChild(ye),URL.revokeObjectURL(me)},[i,e,Ui]),o0=k.useCallback(async()=>{if(!p||!e){alert("No active session to save");return}try{const V=await Zy(p);if(V.success){alert(V.message||"Session saved to memory successfully");try{const le=await Au(e.id);he(le)}catch{}}else alert(`Failed to save to memory: ${V.error||"Unknown error"}`)}catch(V){alert(`Error saving to memory: ${V.message||"Unknown error"}`)}},[p,e]),[s0,bs]=k.useState(!1),[a0,l0]=k.useState([]),[Hi,Bp]=k.useState(""),[Pl,c0]=k.useState("Test Case from Session"),[Up,Wp]=k.useState(!1),u0=k.useCallback(async()=>{if(!p||!e){alert("No active session to create test case from");return}try{const V=await Ae(`/projects/${e.id}/eval-sets`);if(l0(V.eval_sets||[]),!V.eval_sets||V.eval_sets.length===0){confirm(`No evaluation sets found. Would you like to create one first?

Go to the Evals tab to create an evaluation set.`)&&(window.location.href=`/project/${e.id}/evals`);return}Bp(V.eval_sets[0].id),bs(!0)}catch(V){alert(`Error loading eval sets: ${V.message||"Unknown error"}`)}},[p,e]),d0=k.useCallback(async()=>{if(!p||!e||!Hi){alert("Please select an evaluation set");return}Wp(!0);try{const V=await Ae(`/projects/${e.id}/session-to-eval-case`,{method:"POST",body:JSON.stringify({session_id:p,eval_set_id:Hi,case_name:Pl})});bs(!1),alert(`Test case "${V.eval_case.name}" created successfully!

Token count: ${V.session_token_count.toLocaleString()} tokens

Go to the Evals tab to view and edit the test case.`)}catch(V){alert(`Error creating test case: ${V.message||"Unknown error"}`)}finally{Wp(!1)}},[p,e,Hi,Pl]),p0=k.useCallback(()=>{const V=document.createElement("input");V.type="file",V.accept=".json",V.onchange=async le=>{var ye;const me=(ye=le.target.files)==null?void 0:ye[0];if(me)try{const xe=await me.text(),Pe=JSON.parse(xe);if(!Pe.events||!Array.isArray(Pe.events)){alert("Invalid run file: missing events array");return}a(),l(),v(null),T(null),Pe.events.forEach(Ie=>{s(Ie)})}catch(xe){alert(`Failed to load run file: ${xe}`)}},V.click()},[a,l,s]);return k.useEffect(()=>{if(x!==null){const V=document.querySelector(".event-row.selected");V==null||V.scrollIntoView({behavior:"smooth",block:"nearest"})}},[x]),e?o.jsxs("div",{className:`run-panel ${J?"resizing":""}`,children:[o.jsx("style",{children:`
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
      `}),o.jsx(M5,{agents:e.agents,events:i,selectedEventIndex:x,isOpen:Z,onOpenChange:se,runState:ee}),o.jsxs("div",{className:"input-area",children:[o.jsxs("select",{className:"agent-selector",value:Ui||"",onChange:V=>$p(V.target.value||null),disabled:n,title:"Select which agent to run",children:[o.jsx("option",{value:"",children:e.app.root_agent_id?`Root: ${((Hp=e.agents.find(V=>V.id===e.app.root_agent_id))==null?void 0:Hp.name)||e.app.root_agent_id}`:"No root agent"}),e.agents.filter(V=>V.id!==e.app.root_agent_id).map(V=>o.jsxs("option",{value:V.id,children:[V.name," (",V.type.replace("Agent",""),")"]},V.id))]}),o.jsxs("select",{className:"agent-selector",value:ze||"",onChange:V=>Ll(V.target.value||null),disabled:n||De,style:{minWidth:180},title:"Load a saved session",children:[o.jsx("option",{value:"",children:De?"Loading...":"Load Session..."}),Ee.map(V=>{const le=new Date(V.started_at*1e3),me=V.duration?`${V.duration.toFixed(1)}s`:"?";return o.jsxs("option",{value:V.id,children:[le.toLocaleString()," (",V.event_count," events, ",me,")"]},V.id)})]}),o.jsxs("div",{style:{position:"relative",flex:1,display:"flex"},children:[o.jsx("input",{ref:Y,type:"text",placeholder:"Enter your query...",value:m,onChange:V=>b(V.target.value),onFocus:()=>K(!0),onBlur:()=>setTimeout(()=>K(!1),150),onKeyDown:V=>{V.key==="Enter"&&!V.shiftKey?Wi():V.key==="Escape"&&K(!1)},disabled:n,style:{flex:1}}),B&&je.length>0&&o.jsx("div",{style:{position:"absolute",top:"100%",left:0,right:0,background:"#18181b",border:"1px solid #3f3f46",borderRadius:"6px",marginTop:"4px",maxHeight:"240px",overflowY:"auto",zIndex:100,boxShadow:"0 4px 12px rgba(0,0,0,0.4)"},children:je.map((V,le)=>o.jsxs("div",{style:{padding:"8px 12px",fontSize:"12px",color:"#e4e4e7",cursor:"pointer",borderBottom:le<je.length-1?"1px solid #27272a":"none",display:"flex",justifyContent:"space-between",alignItems:"center"},onMouseDown:me=>{me.preventDefault(),Wi(V.prompt)},onMouseEnter:me=>{me.currentTarget.style.background="#27272a"},onMouseLeave:me=>{me.currentTarget.style.background="transparent"},children:[o.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1,marginRight:"8px"},children:V.prompt}),o.jsxs("span",{style:{fontSize:"10px",color:"#71717a",flexShrink:0},children:["×",V.count]})]},le))})]}),n?o.jsxs("button",{className:"stop",onClick:Z1,children:[o.jsx(zj,{size:14}),"Stop"]}):o.jsxs("button",{onClick:()=>Wi(),disabled:!m.trim(),children:[o.jsx(xr,{size:14}),"Run"]}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"4px",marginLeft:"12px",fontSize:"11px",color:z?"#22d3ee":"#71717a",cursor:"pointer"},title:"Run in isolated Docker container",children:[o.jsx("input",{type:"checkbox",checked:z,onChange:V=>I(V.target.checked),disabled:n,style:{accentColor:"#22d3ee"}}),"🐳 Sandbox"]}),z&&o.jsx("button",{onClick:n0,style:{background:"transparent",border:"1px solid #3f3f46",borderRadius:"4px",padding:"2px 8px",marginLeft:"8px",fontSize:"11px",color:"#a1a1aa",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"},title:"View container logs",children:"📋 Logs"})]}),o.jsxs("div",{className:"toolbar",children:[o.jsxs("div",{className:"toolbar-section",children:[o.jsx(wv,{size:12,style:{color:"#71717a"}}),o.jsx("input",{type:"text",placeholder:"Filter events...",value:C,onChange:V=>L(V.target.value)})]}),o.jsx("div",{className:"toolbar-divider"}),o.jsxs("div",{className:"toolbar-section",children:[["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_error"].map(V=>o.jsx("button",{className:`filter-chip ${E.has(V)?"active":""}`,onClick:()=>{const le=new Set(E);le.has(V)?le.delete(V):le.add(V),U(le)},children:V.replace("_"," ")},V)),o.jsx("button",{className:`filter-chip ${E.has("callback_start")&&E.has("callback_end")?"active":""}`,onClick:()=>{const V=new Set(E);V.has("callback_start")&&V.has("callback_end")?(V.delete("callback_start"),V.delete("callback_end")):(V.add("callback_start"),V.add("callback_end")),U(V)},title:"Show/hide callback events",children:"callback"}),o.jsx("button",{className:`filter-chip ${$?"active":""}`,onClick:()=>ne(!$),title:"Hide LLM_RESP (complete) events",children:"hide (complete)"})]}),o.jsx("div",{className:"toolbar-divider"}),o.jsxs("div",{className:"toolbar-section",children:[o.jsxs("button",{className:`toolbar-btn ${de?"active":""}`,onClick:()=>{be(!de),D(!1),re(!1)},children:[o.jsx(Fn,{size:12}),"State"]}),o.jsxs("button",{className:`toolbar-btn ${X?"active":""}`,onClick:()=>{re(!X),be(!1),D(!1)},children:[o.jsx(Ba,{size:12}),"Artifacts"]}),o.jsxs("button",{className:`toolbar-btn ${te?"active":""}`,onClick:()=>{D(!te),be(!1),re(!1)},children:[o.jsx(dc,{size:12}),"Tools"]})]}),o.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:[o.jsxs("span",{style:{fontSize:10,color:"#71717a"},children:[Dt.length," / ",i.length," events"]}),_&&o.jsx("button",{className:"toolbar-btn",onClick:()=>T(null),children:"Clear Range"})]})]}),o.jsxs("div",{className:"main-content",ref:Ml,children:[o.jsxs("div",{className:"event-list-container",children:[o.jsxs("div",{className:"event-list-header",style:{gridTemplateColumns:Dp},children:[o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"#"}),o.jsx("div",{className:`column-resize-handle ${Le===0?"active":""}`,onMouseDown:V=>ys(0,V)})]}),o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"Time"}),o.jsx("div",{className:`column-resize-handle ${Le===1?"active":""}`,onMouseDown:V=>ys(1,V)})]}),o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"Agent"}),o.jsx("div",{className:`column-resize-handle ${Le===2?"active":""}`,onMouseDown:V=>ys(2,V)})]}),o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"Type"}),o.jsx("div",{className:`column-resize-handle ${Le===3?"active":""}`,onMouseDown:V=>ys(3,V)})]}),o.jsx("div",{className:"header-cell",children:o.jsx("span",{children:"Info"})})]}),o.jsx("div",{className:"event-list",ref:xs,children:Dt.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(vv,{size:24}),o.jsx("span",{children:i.length===0?"No events yet":"No matching events"})]}):Dt.map((V,le)=>{const me=i.indexOf(V),ye=hg[V.event_type]||hg.error,xe=L5[V.event_type]||Wa;return o.jsxs("div",{className:`event-row ${x===me?"selected":""}`,style:{background:ye.bg,gridTemplateColumns:Dp},onClick:()=>v(me),onDoubleClick:()=>{be(!1),D(!1),re(!1)},children:[o.jsx("div",{className:"index",children:me}),o.jsx("div",{className:"time",style:{color:ye.fg},children:P5(V.timestamp,X1.min)}),o.jsx("div",{className:"agent",children:o.jsx("span",{className:"agent-badge",style:{backgroundColor:tl(V.agent_name).bg,color:tl(V.agent_name).fg},children:V.agent_name})}),o.jsxs("div",{className:"type",style:{color:ye.fg},children:[o.jsx(xe,{size:10}),V.event_type.split("_")[0]]}),o.jsx("div",{className:"summary",children:xg(V)})]},me)})})]}),o.jsxs("div",{className:"side-panel-container",style:{width:Q},children:[o.jsx("div",{className:`resize-handle ${J?"active":""}`,onMouseDown:()=>pe(!0)}),o.jsxs("div",{className:"side-panel",style:{width:Q-4},children:[o.jsxs("div",{className:"side-panel-tabs",children:[o.jsxs("button",{className:`side-panel-tab ${!de&&!te&&!X?"active":""}`,onClick:()=>{be(!1),D(!1),re(!1)},children:[o.jsx(Wr,{size:12,style:{marginRight:4}}),"Details"]}),o.jsxs("button",{className:`side-panel-tab ${de?"active":""}`,onClick:()=>{be(!0),D(!1),re(!1)},children:[o.jsx(Fn,{size:12,style:{marginRight:4}}),"State"]}),o.jsxs("button",{className:`side-panel-tab ${X?"active":""}`,onClick:()=>{re(!0),be(!1),D(!1)},children:[o.jsx(Ba,{size:12,style:{marginRight:4}}),"Artifacts"]}),o.jsxs("button",{className:`side-panel-tab ${te?"active":""}`,onClick:()=>{D(!0),be(!1),re(!1)},children:[o.jsx(dc,{size:12,style:{marginRight:4}}),"Tools"]})]}),o.jsx("div",{className:"side-panel-content",children:te?o.jsx(U5,{project:e,selectedEventIndex:x,sandboxMode:z}):X?o.jsx(B5,{project:e,sessionId:p}):de?o.jsx(F5,{events:i,selectedEventIndex:x,project:e}):Fp?o.jsx(O5,{event:Fp}):o.jsxs("div",{className:"empty-state",children:[o.jsx(Wr,{size:24}),o.jsx("span",{children:"Select an event to view details"})]})})]})]})]}),o.jsxs("div",{className:"stats-bar",children:[o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Events:"}),o.jsx("span",{className:"stat-value",children:i.length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Tool Calls:"}),o.jsx("span",{className:"stat-value",children:i.filter(V=>V.event_type==="tool_call").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Model Calls:"}),o.jsx("span",{className:"stat-value",children:i.filter(V=>V.event_type==="model_call").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Callbacks:"}),o.jsx("span",{className:"stat-value",children:i.filter(V=>V.event_type==="callback_start").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"State Changes:"}),o.jsx("span",{className:"stat-value",children:i.filter(V=>V.event_type==="state_change").length})]}),i.length>0&&o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Duration:"}),o.jsxs("span",{className:"stat-value",children:[((i[i.length-1].timestamp-i[0].timestamp)*1e3).toFixed(0),"ms"]})]}),vs.total>0&&o.jsx("div",{className:"stat-item token-stats",children:o.jsxs("span",{className:"stat-value token-value",children:[o.jsxs("span",{className:"token-in",title:"Input tokens",children:[vs.input.toLocaleString(),"↑"]}),o.jsxs("span",{className:"token-out",title:"Output tokens",children:[vs.output.toLocaleString(),"↓"]}),o.jsx("span",{className:"token-total",title:"Total tokens",children:vs.total.toLocaleString()})]})}),o.jsx("div",{className:"stats-bar-spacer"}),o.jsxs("button",{className:"stats-bar-btn",onClick:p0,title:"Load a saved run",children:[o.jsx(kl,{size:12}),"Load"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:i0,disabled:i.length===0,title:"Save current run to file",children:[o.jsx($i,{size:12}),"Save"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:o0,disabled:!p||i.length===0,title:"Save current session to memory",children:[o.jsx(Fn,{size:12}),"Save to Memory"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:u0,disabled:!p||i.length===0,title:"Create evaluation test case from this session",style:{background:"rgba(var(--accent-primary-rgb), 0.15)"},children:[o.jsx(Ru,{size:12}),"Create Test Case"]})]}),s0&&o.jsx("div",{className:"dialog-overlay",style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>bs(!1),children:o.jsxs("div",{className:"dialog-content",style:{background:"var(--bg-secondary)",borderRadius:"var(--radius-md)",padding:24,width:400,maxWidth:"90vw",border:"1px solid var(--border-color)"},onClick:V=>V.stopPropagation(),children:[o.jsxs("h3",{style:{marginBottom:16,display:"flex",alignItems:"center",gap:8},children:[o.jsx(Ru,{size:18}),"Create Test Case from Session"]}),o.jsxs("div",{style:{marginBottom:16},children:[o.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Test Case Name"}),o.jsx("input",{type:"text",value:Pl,onChange:V=>c0(V.target.value),placeholder:"Enter test case name",style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"}})]}),o.jsxs("div",{style:{marginBottom:20},children:[o.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Add to Evaluation Set"}),o.jsx("select",{value:Hi,onChange:V=>Bp(V.target.value),style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"},children:a0.map(V=>o.jsx("option",{value:V.id,children:V.name},V.id))})]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:16},children:"This will extract user messages and tool calls from the current session to create a replayable test case. You can edit the expected responses and tool calls in the Evals tab after creation."}),o.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>bs(!1),children:"Cancel"}),o.jsx("button",{className:"btn btn-primary",onClick:d0,disabled:Up||!Hi,children:Up?"Creating...":"Create Test Case"})]})]})}),q&&o.jsx(zE,{request:q,timeout:q.timeout||30,onApprove:e0,onDeny:t0,onClose:()=>G(null)}),A&&o.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>O(!1),children:o.jsxs("div",{style:{backgroundColor:"#18181b",borderRadius:"8px",border:"1px solid #3f3f46",width:"90%",maxWidth:"1400px",height:"80%",display:"flex",flexDirection:"column",overflow:"hidden"},onClick:V=>V.stopPropagation(),children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx(dc,{size:16}),o.jsx("span",{style:{fontWeight:600},children:"Container Logs"})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsxs("button",{onClick:Vi,disabled:R,style:{background:"#3f3f46",border:"none",borderRadius:"4px",padding:"4px 8px",color:"#e4e4e7",cursor:R?"wait":"pointer",display:"flex",alignItems:"center",gap:"4px",fontSize:"12px"},children:[o.jsx(rn,{size:12,className:R?"animate-spin":""}),"Refresh"]}),o.jsx("button",{onClick:()=>O(!1),style:{background:"transparent",border:"none",color:"#71717a",cursor:"pointer",padding:"4px"},children:o.jsx(Di,{size:16})})]})]}),o.jsxs("div",{style:{display:"flex",gap:"0",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[o.jsx("button",{onClick:()=>W("agent"),style:{padding:"8px 16px",background:w==="agent"?"#18181b":"transparent",border:"none",borderBottom:w==="agent"?"2px solid #22d3ee":"2px solid transparent",color:w==="agent"?"#22d3ee":"#a1a1aa",cursor:"pointer",fontSize:"13px"},children:"🤖 Agent"}),o.jsx("button",{onClick:()=>W("gateway"),style:{padding:"8px 16px",background:w==="gateway"?"#18181b":"transparent",border:"none",borderBottom:w==="gateway"?"2px solid #22d3ee":"2px solid transparent",color:w==="gateway"?"#22d3ee":"#a1a1aa",cursor:"pointer",fontSize:"13px"},children:"🌐 Gateway"})]}),o.jsx("div",{ref:H,onScroll:r0,style:{flex:1,overflow:"auto",padding:"12px",fontFamily:"ui-monospace, monospace",fontSize:"11px",lineHeight:"1.5",whiteSpace:"pre-wrap",wordBreak:"break-all",color:"#d4d4d8",backgroundColor:"#09090b"},children:R?o.jsx("div",{style:{color:"#71717a",textAlign:"center",padding:"20px"},children:"Loading logs..."}):M[w]?o.jsx(I5,{content:M[w]}):o.jsx("div",{style:{color:"#71717a"},children:"No logs available"})})]})})]}):o.jsx("div",{className:"run-panel empty",children:"No project loaded"})}const V5=()=>Math.random().toString(36).substring(2,10),H5=()=>({id:V5(),name:"New SkillSet",description:"",embedding_model:void 0,app_model_id:void 0,external_store_type:void 0,external_store_config:{},search_enabled:!0,preload_enabled:!0,preload_top_k:3,preload_min_score:.4,sources:[],entry_count:0});function q5(){const{project:e,setProject:t}=yt(),[n,r]=k.useState(null),[i,s]=k.useState(null),[a,l]=k.useState(""),[c,u]=k.useState([]),[d,f]=k.useState(!1),[p,h]=k.useState(!1),[m,b]=k.useState(""),[j,g]=k.useState(!1),[x,v]=k.useState(null),[_,T]=k.useState(null),C=k.useRef(null),L=(e==null?void 0:e.skillsets)||[],E=L.find(P=>P.id===n);k.useEffect(()=>{mv().then(P=>T(P.available)).catch(()=>T(!1))},[]),k.useEffect(()=>{L.length>0&&!n&&r(L[0].id)},[L,n]),k.useEffect(()=>{!e||!n||U()},[e==null?void 0:e.id,n]);const U=k.useCallback(async()=>{if(!(!e||!n))try{const P=await uv(e.id,n);s(P),I(n,{entry_count:P.entry_count})}catch(P){console.error("Failed to load stats:",P)}},[e==null?void 0:e.id,n]),z=P=>{e&&t({...e,...P})},I=(P,w)=>{e&&t({...e,skillsets:e.skillsets.map(W=>W.id===P?{...W,...w}:W)})},q=()=>{if(!e)return;const P=H5();z({skillsets:[...L,P]}),r(P.id)},G=P=>{e&&confirm("Delete this SkillSet and all its data?")&&(z({skillsets:L.filter(w=>w.id!==P)}),n===P&&r(L.length>1?L[0].id:null),s(null),u([]))},A=async()=>{if(!(!e||!n||!a.trim())){f(!0),v(null);try{const P=await fv(e.id,n,a.trim(),10,0);u(P.results)}catch(P){v("Search failed"),console.error(P)}finally{f(!1)}}},O=async()=>{if(!(!e||!n||!m.trim())){g(!0),v(null);try{const P=await dv(e.id,n,m.trim());b(""),await U(),alert(`Added ${P.chunks_added} chunks from ${P.source_name}`)}catch(P){v(P.message||"Failed to fetch URL")}finally{g(!1)}}},M=async P=>{var W;const w=(W=P.target.files)==null?void 0:W[0];if(!(!w||!e||!n)){v(null);try{const H=await pv(e.id,n,w);await U(),alert(`Added ${H.chunks_added} chunks from ${H.source_name}`)}catch(H){v(H.message||"Upload failed")}C.current&&(C.current.value="")}},S=async()=>{if(!(!e||!n)&&confirm("Delete all entries in this SkillSet?"))try{await hv(e.id,n),await U(),u([])}catch{v("Clear failed")}},R=P=>{const w=Math.round(P*100),W=160,H=70,y=20+(1-P)*15,N=.15+P*.25;return`linear-gradient(90deg, hsla(${W}, ${H}%, ${y}%, ${N}) 0%, transparent ${w}%)`};return e?o.jsxs("div",{className:"skillsets-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"skillset-list",children:[o.jsxs("div",{className:"skillset-list-header",children:[o.jsx("h3",{children:"SkillSets"}),o.jsx("button",{className:"btn-icon",onClick:q,title:"Add SkillSet",children:o.jsx(nt,{size:16})})]}),L.length===0?o.jsxs("div",{className:"empty-state",style:{padding:"40px 0"},children:[o.jsx(Fn,{size:32}),o.jsx("span",{children:"No SkillSets"}),o.jsxs("button",{className:"btn-primary",onClick:q,children:[o.jsx(nt,{size:14})," Create SkillSet"]})]}):L.map(P=>o.jsxs("div",{className:`skillset-item ${n===P.id?"selected":""}`,onClick:()=>r(P.id),children:[o.jsx(Fn,{size:16,style:{color:"var(--accent)",flexShrink:0}}),o.jsxs("div",{className:"skillset-item-info",children:[o.jsx("div",{className:"skillset-item-name",children:P.name}),o.jsxs("div",{className:"skillset-item-count",children:[P.entry_count||0," entries"]})]}),o.jsx("button",{className:"skillset-item-delete",onClick:w=>{w.stopPropagation(),G(P.id)},children:o.jsx(Je,{size:14})})]},P.id))]}),E?o.jsxs("div",{className:"skillset-detail",children:[o.jsxs("div",{className:"skillset-header",children:[o.jsxs("div",{className:"skillset-header-info",children:[o.jsx("input",{className:"skillset-name-input",value:E.name,onChange:P=>I(E.id,{name:P.target.value}),placeholder:"SkillSet Name"}),o.jsx("textarea",{className:"skillset-desc-input",value:E.description,onChange:P=>I(E.id,{description:P.target.value}),placeholder:"Description (optional)",rows:1}),o.jsxs("div",{className:"skillset-model",children:[o.jsx("label",{style:{fontSize:"12px",color:"var(--text-secondary)",marginRight:"8px"},children:"Embedding Model:"}),o.jsxs("select",{style:{flex:1,padding:"4px 8px",fontSize:"12px",background:"var(--bg-secondary)",border:"1px solid var(--border)",borderRadius:"4px",color:"var(--text-primary)"},value:E.embedding_model||"text-embedding-004",onChange:P=>I(E.id,{embedding_model:P.target.value}),children:[o.jsxs("optgroup",{label:"Google Gemini",children:[o.jsx("option",{value:"text-embedding-004",children:"text-embedding-004 (768d)"}),o.jsx("option",{value:"text-embedding-005",children:"text-embedding-005"})]}),o.jsxs("optgroup",{label:"OpenAI",children:[o.jsx("option",{value:"text-embedding-3-small",children:"text-embedding-3-small (1536d)"}),o.jsx("option",{value:"text-embedding-3-large",children:"text-embedding-3-large (3072d)"})]}),o.jsxs("optgroup",{label:"Cohere",children:[o.jsx("option",{value:"embed-english-v3.0",children:"embed-english-v3.0 (1024d)"}),o.jsx("option",{value:"embed-multilingual-v3.0",children:"embed-multilingual-v3.0 (1024d)"})]})]})]}),o.jsxs("div",{className:"skillset-stats",children:[o.jsxs("span",{className:"skillset-stat",children:[o.jsx("strong",{children:(i==null?void 0:i.entry_count)||0})," entries"]}),o.jsxs("span",{className:"skillset-stat",children:[o.jsx("strong",{children:Object.keys((i==null?void 0:i.sources)||{}).length})," sources"]}),_===!1&&o.jsx("span",{className:"skillset-stat",style:{color:"var(--warning)"},children:"⚠ No embeddings"})]})]}),o.jsx("button",{className:"btn-icon",onClick:U,title:"Refresh",children:o.jsx(rn,{size:16})})]}),x&&o.jsxs("div",{className:"error-banner",children:[x,o.jsx("button",{onClick:()=>v(null),children:o.jsx(Di,{size:14})})]}),o.jsxs("div",{className:"search-section",children:[o.jsx("div",{className:"search-input-wrapper",children:o.jsx("input",{className:"search-input",value:a,onChange:P=>l(P.target.value),onKeyDown:P=>P.key==="Enter"&&A(),placeholder:"Search this SkillSet..."})}),o.jsxs("button",{className:"btn-primary",onClick:A,disabled:d||!a.trim(),children:[o.jsx(wv,{size:14}),d?"Searching...":"Search"]})]}),o.jsxs("div",{className:"search-results",children:[c.length===0&&!d&&a&&o.jsx("div",{className:"empty-state",children:o.jsx("span",{children:"No results found"})}),c.map(P=>o.jsxs("div",{className:"search-result",style:{background:R(P.score)},children:[o.jsxs("span",{className:"search-result-score",children:[(P.score*100).toFixed(0),"%"]}),o.jsx("div",{className:"search-result-text",children:P.text}),o.jsx("div",{className:"search-result-source",children:P.source_name})]},P.id))]}),o.jsxs("div",{className:"add-sources-section",children:[o.jsxs("div",{className:"add-sources-header",onClick:()=>h(!p),children:[p?o.jsx(zt,{size:16}):o.jsx(wt,{size:16}),o.jsx("h4",{children:"Add Sources"})]}),p&&o.jsxs("div",{className:"add-sources-content",children:[o.jsxs("div",{className:"source-row",children:[o.jsx(ip,{size:16,style:{color:"var(--text-tertiary)"}}),o.jsx("input",{className:"source-input",value:m,onChange:P=>b(P.target.value),onKeyDown:P=>P.key==="Enter"&&O(),placeholder:"Enter URL (e.g., llms.txt file)"}),o.jsxs("button",{className:"btn-primary",onClick:O,disabled:j||!m.trim(),children:[o.jsx(jj,{size:14}),j?"Loading...":"Add"]})]}),o.jsxs("div",{className:"source-row",children:[o.jsx(yj,{size:16,style:{color:"var(--text-tertiary)"}}),o.jsx("input",{ref:C,type:"file",accept:".txt,.md,.json,.csv,.html",onChange:M}),o.jsxs("button",{className:"btn-primary",onClick:()=>{var P;return(P=C.current)==null?void 0:P.click()},children:[o.jsx(kl,{size:14}),"Upload File"]}),o.jsx("span",{style:{fontSize:"12px",color:"var(--text-tertiary)"},children:".txt, .md, .json, .csv"})]}),((i==null?void 0:i.entry_count)||0)>0&&o.jsx("div",{className:"source-row",style:{marginTop:"8px"},children:o.jsxs("button",{className:"clear-button",onClick:S,children:[o.jsx(Je,{size:12}),"Clear All Entries (",(i==null?void 0:i.entry_count)||0,")"]})})]})]})]}):L.length>0?o.jsx("div",{className:"skillset-detail",children:o.jsxs("div",{className:"empty-state",children:[o.jsx(Fn,{size:48}),o.jsx("span",{children:"Select a SkillSet"})]})}):null]}):null}const _n={tool_trajectory_avg_score:{name:"Tool Trajectory",description:"Did the agent call the right tools in the expected order?",requiresJudge:!1,scale:[0,1]},response_match_score:{name:"Response Match (ROUGE-1)",description:"Does the response contain expected text? (fuzzy word matching)",requiresJudge:!1,scale:[0,1]},response_evaluation_score:{name:"Response Evaluation (LLM)",description:"LLM-judged semantic match of final response",requiresJudge:!0,scale:[1,5]},final_response_match_v2:{name:"Response Quality v2 (LLM)",description:"Enhanced LLM-judged response quality check",requiresJudge:!0,scale:[0,1]},safety_v1:{name:"Safety",description:"Is the response safe and harmless? (Vertex AI)",requiresJudge:!0,scale:[0,1]},hallucinations_v1:{name:"Hallucination Detection",description:"Are all claims supported by context? No false information?",requiresJudge:!0,scale:[0,1]},rubric_based_final_response_quality_v1:{name:"Rubric: Response Quality",description:"Custom rubric-based quality assessment of responses",requiresJudge:!0,scale:[0,1]},rubric_based_tool_use_quality_v1:{name:"Rubric: Tool Use Quality",description:"Custom rubric-based assessment of tool usage",requiresJudge:!0,scale:[0,1]}},ns=(e,t,n)=>{if(t==null)return{value:"-",comparison:""};const r=_n[e],i=(r==null?void 0:r.scale)||[0,1];if(i[0]===1&&i[1]===5){const s=n??3.5;return{value:t.toFixed(1),comparison:`${s.toFixed(1)} / ${i[1].toFixed(1)}`}}else{const s=n??.7;return{value:`${Math.round(t*100)}%`,comparison:`${Math.round(s*100)}% min`}}},J5={metrics:[{metric:"tool_trajectory_avg_score",enabled:!0,criterion:{threshold:1}},{metric:"response_match_score",enabled:!0,criterion:{threshold:.7}}],default_trajectory_match_type:"in_order",num_runs:1};function Q1(){return`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`}function K5(){const{project:e}=yt(),[t,n]=k.useState([]),[r,i]=k.useState(null),[s,a]=k.useState(null),[l,c]=k.useState(new Set),[u,d]=k.useState(new Map),[f,p]=k.useState(new Map),[h,m]=k.useState(new Set),[b,j]=k.useState(!1),[g,x]=k.useState(null),[v,_]=k.useState([]),[T,C]=k.useState(null),L=async()=>{if(e)try{const D=await et.get(`/projects/${e.id}/eval-history`);_(D.runs||[])}catch(D){console.warn("Failed to load eval history:",D)}},E=async(D,X=!0)=>{if(e)try{const Q=(await et.get(`/projects/${e.id}/eval-history/${D}`)).run;if(C(Q),Q!=null&&Q.case_results){const ae=new Map;for(const J of Q.case_results)ae.set(J.eval_case_id,J);d(ae)}if((Q==null?void 0:Q.eval_set_id)==="batch")c(new Set(t.map(ae=>ae.id))),i(null);else if(Q!=null&&Q.eval_set_id){const ae=new Map;ae.set(Q.eval_set_id,Q),p(ae),i(Q.eval_set_id),c(J=>new Set([...J,Q.eval_set_id]))}a(null),X&&window.history.pushState({run:D},"",`?run=${D}`)}catch(re){console.warn("Failed to load history run:",re)}},U=(D,X=!0)=>{i(D),a(null),C(null),X&&D?window.history.pushState({set:D},"",`?set=${D}`):X&&window.history.pushState({},"",window.location.pathname)},z=(D,X,re=!0)=>{i(D),a(X),C(null),re&&X?window.history.pushState({set:D,case:X},"",`?set=${D}&case=${X}`):re&&D&&window.history.pushState({set:D},"",`?set=${D}`)},I=()=>{C(null),d(new Map),p(new Map),window.history.pushState({},"",window.location.pathname)},q=async D=>{if(e)try{await et.delete(`/projects/${e.id}/eval-history/${D}`),_(X=>X.filter(re=>re.id!==D)),(T==null?void 0:T.id)===D&&C(null)}catch(X){console.warn("Failed to delete history run:",X)}};k.useEffect(()=>{e!=null&&e.id&&(G(),L())},[e==null?void 0:e.id]),k.useEffect(()=>{const D=()=>{m(new Set(t.map(re=>re.id)))},X=()=>{m(new Set),L()};return window.addEventListener("eval-tests-started",D),window.addEventListener("eval-tests-completed",X),()=>{window.removeEventListener("eval-tests-started",D),window.removeEventListener("eval-tests-completed",X)}},[t]),k.useEffect(()=>{if(!(e!=null&&e.id)||b)return;const D=()=>{const re=new URLSearchParams(window.location.search),Q=re.get("set"),ae=re.get("case"),J=re.get("run");if(J){E(J,!1);return}if(Q)i(Q),a(ae),C(null),c(pe=>new Set([...pe,Q]));else{if(!r&&!s&&!T)return;i(null),a(null),C(null)}};D();const X=()=>{D()};return window.addEventListener("popstate",X),()=>window.removeEventListener("popstate",X)},[e==null?void 0:e.id,b,t.length]);const G=async()=>{var D,X;if(e!=null&&e.id){j(!0),x(null);try{const re=await et.get(`/projects/${e.id}/eval-sets`);if(n(re.eval_sets||[]),((D=re.eval_sets)==null?void 0:D.length)>0){const Q=new URLSearchParams(window.location.search),ae=Q.get("set"),J=Q.get("case"),pe=ae||(J?(X=re.eval_sets.find(Z=>Z.eval_cases.some(se=>se.id===J)))==null?void 0:X.id:null)||re.eval_sets[0].id;c(new Set([pe]))}}catch(re){x(re.message||"Failed to load eval sets")}finally{j(!1)}}},A=t.find(D=>D.id===r),O=A==null?void 0:A.eval_cases.find(D=>D.id===s),M=async()=>{if(e!=null&&e.id)try{const D=await et.post(`/projects/${e.id}/eval-sets`,{name:"New Eval Set",description:"",eval_config:J5});n(X=>[...X,D.eval_set]),i(D.eval_set.id),c(X=>new Set([...X,D.eval_set.id]))}catch(D){x(D.message||"Failed to create eval set")}},S=async D=>{if(e!=null&&e.id)try{const X=await et.post(`/projects/${e.id}/eval-sets/${D}/cases`,{name:"New Test Case",description:"",invocations:[{id:Q1(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]}],initial_state:{},rubrics:[],enabled_metrics:[],tags:[]});n(re=>re.map(Q=>Q.id===D?{...Q,eval_cases:[...Q.eval_cases,X.eval_case]}:Q)),i(D),a(X.eval_case.id)}catch(X){x(X.message||"Failed to create eval case")}},R=async(D,X,re)=>{if(e!=null&&e.id)try{const Q=await et.put(`/projects/${e.id}/eval-sets/${D}/cases/${X}`,re);n(ae=>ae.map(J=>J.id===D?{...J,eval_cases:J.eval_cases.map(pe=>pe.id===X?Q.eval_case:pe)}:J))}catch(Q){x(Q.message||"Failed to update eval case")}},P=async(D,X)=>{if(e!=null&&e.id)try{await et.delete(`/projects/${e.id}/eval-sets/${D}/cases/${X}`),n(re=>re.map(Q=>Q.id===D?{...Q,eval_cases:Q.eval_cases.filter(ae=>ae.id!==X)}:Q)),s===X&&a(null)}catch(re){x(re.message||"Failed to delete eval case")}},w=async D=>{if(e!=null&&e.id)try{await et.delete(`/projects/${e.id}/eval-sets/${D}`),n(X=>X.filter(re=>re.id!==D)),r===D&&(i(null),a(null))}catch(X){x(X.message||"Failed to delete eval set")}},W=async D=>{if(e!=null&&e.id)try{const X=await et.get(`/projects/${e.id}/eval-sets/${D}/export`),re=new Blob([JSON.stringify(X,null,2)],{type:"application/json"}),Q=URL.createObjectURL(re),ae=document.createElement("a");ae.href=Q;const J=t.find(pe=>pe.id===D);ae.download=`${(J==null?void 0:J.name)||"eval-set"}.json`,document.body.appendChild(ae),ae.click(),document.body.removeChild(ae),URL.revokeObjectURL(Q)}catch(X){x(X.message||"Failed to export eval set")}},H=async D=>{if(e!=null&&e.id)try{const X=await D.text(),re=JSON.parse(X),Q=await et.post(`/projects/${e.id}/eval-sets/import`,re);n(ae=>[...ae,Q.eval_set]),i(Q.eval_set.id),c(ae=>new Set([...ae,Q.eval_set.id]))}catch(X){x(X.message||"Failed to import eval set")}},y=k.useRef(null),N=async()=>{if(!(!(e!=null&&e.id)||t.length===0))try{const D=await Promise.all(t.map(async ae=>{try{return await et.get(`/projects/${e.id}/eval-sets/${ae.id}/export`)}catch{return ae}})),X=new Blob([JSON.stringify(D,null,2)],{type:"application/json"}),re=URL.createObjectURL(X),Q=document.createElement("a");Q.href=re,Q.download=`${e.name||"project"}-eval-sets.json`,document.body.appendChild(Q),Q.click(),document.body.removeChild(Q),URL.revokeObjectURL(re)}catch(D){x(D.message||"Failed to export all eval sets")}},$=async(D,X)=>{if(e!=null&&e.id){m(re=>new Set([...re,X]));try{const re=await et.post(`/projects/${e.id}/eval-sets/${D}/cases/${X}/run`,{});d(Q=>new Map(Q).set(X,re.result))}catch(re){x(re.message||"Failed to run eval case")}finally{m(re=>{const Q=new Set(re);return Q.delete(X),Q})}}},ne=async D=>{if(!(e!=null&&e.id))return;const X=t.find(Q=>Q.id===D);if(!X)return;const re=X.eval_cases.map(Q=>Q.id);m(Q=>new Set([...Q,D,...re]));try{const Q=await et.post(`/projects/${e.id}/eval-sets/${D}/run`,{});p(ae=>new Map(ae).set(D,Q.result));for(const ae of Q.result.case_results)d(J=>new Map(J).set(ae.eval_case_id,ae));try{await et.post(`/projects/${e.id}/eval-history`,Q.result),L()}catch(ae){console.warn("Failed to save eval run to history:",ae)}}catch(Q){x(Q.message||"Failed to run eval set")}finally{m(Q=>{const ae=new Set(Q);return ae.delete(D),re.forEach(J=>ae.delete(J)),ae})}},de=D=>{c(X=>{const re=new Set(X);return re.has(D)?re.delete(D):re.add(D),re})},be=D=>{let X=D.eval_cases.length,re=0,Q=0,ae=0;for(const J of D.eval_cases){const pe=u.get(J.id);pe?pe.passed?re++:Q++:ae++}return{total:X,passed:re,failed:Q,pending:ae}},te=D=>D==null?"-":`${Math.round(D*100)}%`;return e?o.jsxs("div",{className:"eval-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("aside",{className:"eval-sidebar",children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsx("h3",{children:"Evaluation Tests"}),o.jsxs("div",{className:"header-actions",children:[o.jsx("input",{type:"file",ref:y,accept:".json",style:{display:"none"},onChange:D=>{var re;const X=(re=D.target.files)==null?void 0:re[0];X&&(H(X),D.target.value="")}}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var D;return(D=y.current)==null?void 0:D.click()},title:"Import eval set from JSON",children:o.jsx(kl,{size:14})}),t.length>0&&o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:N,title:"Download all eval sets as JSON",children:o.jsx($i,{size:14})}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:G,title:"Refresh",children:o.jsx(rn,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:M,title:"New eval set",children:[o.jsx(nt,{size:14}),"Set"]})]})]}),o.jsxs("div",{className:"eval-tree",children:[b&&o.jsx("p",{style:{color:"var(--text-muted)",padding:"16px"},children:"Loading..."}),g&&o.jsx("div",{style:{color:"var(--error)",padding:"16px",fontSize:"13px"},children:g}),!b&&t.length===0&&o.jsxs("div",{className:"empty-state",style:{padding:"32px"},children:[o.jsx(lp,{size:32}),o.jsxs("p",{children:["No evaluation sets yet.",o.jsx("br",{}),"Create one to get started."]})]}),t.map(D=>{const X=l.has(D.id),re=be(D),Q=h.has(D.id);return o.jsxs("div",{className:"tree-item",children:[o.jsxs("div",{className:`tree-set ${r===D.id&&!s?"selected":""}`,onClick:()=>U(D.id),children:[o.jsx("button",{className:"expand-btn",onClick:ae=>{ae.stopPropagation(),de(D.id)},children:D.eval_cases.length>0?X?o.jsx(zt,{size:14}):o.jsx(wt,{size:14}):o.jsx("span",{style:{width:14}})}),o.jsx(yv,{size:14,style:{color:"var(--accent-secondary)"}}),o.jsx("span",{className:"set-name",children:D.name}),o.jsx("button",{className:"add-case-btn",onClick:ae=>{ae.stopPropagation(),S(D.id)},title:"Add test case",style:{padding:"2px 4px",marginLeft:4,background:"transparent",border:"none",cursor:"pointer",opacity:.6,display:"flex",alignItems:"center"},children:o.jsx(nt,{size:12})}),re.total>0&&o.jsxs("span",{className:"set-stats",children:[re.passed>0&&o.jsx("span",{className:"stat-passed",children:re.passed}),re.failed>0&&o.jsx("span",{className:"stat-failed",children:re.failed}),re.pending>0&&o.jsx("span",{className:"stat-pending",children:re.pending})]}),o.jsx("button",{className:"run-btn",onClick:ae=>{ae.stopPropagation(),ne(D.id)},title:"Run all tests in this set",disabled:Q,children:Q?o.jsx(Ai,{size:12,className:"spinning"}):o.jsx(xr,{size:12})})]}),X&&o.jsx("div",{className:"tree-children",style:{paddingLeft:16},children:D.eval_cases.map(ae=>{var Z;const J=u.get(ae.id),pe=h.has(ae.id);return o.jsxs("div",{className:`tree-case ${s===ae.id?"selected":""}`,onClick:()=>z(D.id,ae.id),children:[pe?o.jsx(Ai,{size:14,className:"spinning",style:{color:"var(--warning)"}}):J?J.passed?o.jsx(Hn,{size:14,style:{color:"var(--success)"}}):o.jsx(yr,{size:14,style:{color:"var(--error)"}}):o.jsx(Ua,{size:14,style:{color:"var(--text-muted)"}}),o.jsx("span",{className:"case-name",children:ae.name}),J&&J.metric_results.length>0&&o.jsx("span",{style:{fontSize:11,color:J.passed?"var(--success)":"var(--error)"},children:te((Z=J.metric_results[0])==null?void 0:Z.score)}),o.jsx("button",{className:"run-btn",onClick:se=>{se.stopPropagation(),$(D.id,ae.id)},disabled:pe,children:o.jsx(xr,{size:12})})]},ae.id)})})]},D.id)})]}),o.jsxs("div",{className:"history-section",children:[o.jsx("div",{className:"history-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 12px",borderTop:"1px solid var(--border-color)",background:"var(--bg-secondary)"},children:o.jsxs("span",{style:{fontWeight:500,fontSize:13},children:["Previous Runs (",v.length,")"]})}),o.jsx("div",{className:"history-list",style:{maxHeight:200,overflowY:"auto"},children:v.length===0?o.jsx("div",{style:{padding:"12px",color:"var(--text-secondary)",fontSize:12,textAlign:"center"},children:"No previous runs"}):[...v].sort((D,X)=>(X.started_at||0)-(D.started_at||0)).map(D=>{const X=D.passed_cases===D.total_cases;return o.jsx("div",{className:`history-item ${(T==null?void 0:T.id)===D.id?"selected":""}`,onClick:()=>E(D.id),style:{padding:"8px 12px",borderBottom:"1px solid var(--border-color)",cursor:"pointer",background:(T==null?void 0:T.id)===D.id?"var(--bg-tertiary)":"transparent",fontSize:12},children:o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[X?o.jsx(Hn,{size:14,style:{color:"var(--success)",flexShrink:0}}):o.jsx(yr,{size:14,style:{color:"var(--error)",flexShrink:0}}),o.jsxs("div",{children:[o.jsx("div",{style:{fontWeight:500},children:D.eval_set_name||"Unnamed"}),o.jsx("div",{style:{color:"var(--text-secondary)",fontSize:11},children:new Date(D.started_at*1e3).toLocaleString()})]})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsxs("span",{style:{color:X?"var(--success)":"var(--error)",fontWeight:500,fontSize:11},children:[D.passed_cases,"/",D.total_cases]}),o.jsx("button",{className:"btn btn-icon",onClick:re=>{re.stopPropagation(),q(D.id)},title:"Delete run",style:{padding:2},children:o.jsx(Je,{size:12})})]})]})},D.id)})})]})]}),o.jsx("div",{className:"eval-editor",children:T?o.jsx(Y5,{run:T,onClose:I}):O?o.jsx(Q5,{evalCase:O,evalSetId:r,projectId:e.id,result:u.get(O.id),isRunning:h.has(O.id),onUpdate:D=>R(r,O.id,D),onDelete:()=>P(r,O.id),onRun:()=>$(r,O.id),onClearResult:()=>d(D=>{const X=new Map(D);return X.delete(O.id),X})}):A?o.jsx(X5,{evalSet:A,projectId:e.id,result:f.get(A.id),isRunning:h.has(A.id),caseResults:u,onUpdate:async D=>{try{const X=await et.put(`/projects/${e.id}/eval-sets/${A.id}`,D);n(re=>re.map(Q=>Q.id===A.id?X.eval_set:Q))}catch(X){x(X.message)}},onDelete:()=>w(A.id),onRun:()=>ne(A.id),onExport:()=>W(A.id)}):o.jsx("div",{className:"editor-content",children:o.jsxs("div",{className:"empty-state",children:[o.jsx(Ua,{size:48}),o.jsxs("p",{children:["Select a test case to edit",o.jsx("br",{}),"or create a new one"]})]})})})]}):null}function G5({value:e,onChange:t}){var a,l;const{project:n}=yt(),r=((a=n==null?void 0:n.app)==null?void 0:a.models)||[],i=(l=n==null?void 0:n.app)==null?void 0:l.default_model_id,s=r.find(c=>c.id===i);return o.jsxs("select",{value:e,onChange:c=>t(c.target.value),style:{width:"100%",maxWidth:400},children:[o.jsx("option",{value:"",children:s?`App Default (${s.model_name})`:"App Default"}),r.map(c=>o.jsx("option",{value:c.model_name,children:c.model_name},c.id)),o.jsx("option",{value:"gemini-2.0-flash",children:"gemini-2.0-flash"}),o.jsx("option",{value:"gemini-2.5-flash",children:"gemini-2.5-flash"}),o.jsx("option",{value:"gemini-2.5-pro",children:"gemini-2.5-pro"})]})}function Y5({run:e,onClose:t}){var h;const{project:n}=yt(),[r,i]=k.useState(!0),[s,a]=k.useState(new Set),l=e.case_results||[],c=l.filter(m=>m.passed).length,u=l.filter(m=>!m.passed).length,d=r?l.filter(m=>!m.passed):l,f=m=>{a(b=>{const j=new Set(b);return j.has(m)?j.delete(m):j.add(m),j})},p=m=>{m&&n&&(window.location.href=`/project/${n.id}/run?session=${m}`)};return o.jsxs("div",{className:"test-result-viewer",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"result-header",children:[o.jsx("h2",{children:e.eval_set_name||"Test Run Results"}),o.jsx("div",{style:{display:"flex",gap:8},children:o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{if(n){const m=`${window.location.origin}/project/${n.id}/evaluate?run=${e.id}`;navigator.clipboard.writeText(m)}},title:"Copy link to this run",children:o.jsx(sp,{size:14})})})]}),o.jsxs("div",{className:"result-summary",children:[o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Status"}),o.jsx("span",{className:`value ${c===l.length?"passed":"failed"}`,children:c===l.length?"PASSED":"FAILED"})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Passed"}),o.jsx("span",{className:"value passed",children:c})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Failed"}),o.jsx("span",{className:"value failed",children:u})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Total Cases"}),o.jsx("span",{className:"value",children:l.length})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Duration"}),o.jsx("span",{className:"value",children:e.duration_ms?`${(e.duration_ms/1e3).toFixed(1)}s`:"-"})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Tokens"}),o.jsx("span",{className:"value",children:((h=e.total_tokens)==null?void 0:h.toLocaleString())||"-"})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Run Time"}),o.jsx("span",{className:"value",style:{fontSize:13},children:e.started_at?new Date(e.started_at*1e3).toLocaleString():"-"})]})]}),o.jsxs("div",{style:{padding:"8px 20px",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",gap:10,background:"var(--bg-secondary)"},children:[o.jsxs("label",{className:"toggle-switch",style:{transform:"scale(0.85)"},children:[o.jsx("input",{type:"checkbox",checked:r,onChange:m=>i(m.target.checked)}),o.jsx("span",{className:"toggle-slider"})]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:"Hide passing results"})]}),o.jsxs("div",{className:"result-cases",children:[d.map((m,b)=>{var I,q,G,A,O,M;const j=m.case_id||`case-${b}`,g=s.has(j),x=((I=m.metric_results)==null?void 0:I.filter(S=>!S.passed||S.error))||[],v=((q=m.metric_results)==null?void 0:q.filter(S=>S.passed&&!S.error))||[],_=((G=m.rubric_results)==null?void 0:G.filter(S=>!S.passed||S.error))||[],T=((A=m.rubric_results)==null?void 0:A.filter(S=>S.passed&&!S.error))||[],C=g?m.metric_results:x,L=g?m.rubric_results:_,E=g?m.invocation_results:(O=m.invocation_results)==null?void 0:O.filter(S=>{var R;return((R=S.metric_results)==null?void 0:R.some(P=>!P.passed))||S.error}),U=v.length+T.length,z=x.length+_.length;return o.jsxs("div",{className:"result-case",children:[o.jsxs("div",{className:"result-case-header",onClick:()=>f(j),style:{cursor:"pointer"},children:[o.jsxs("div",{className:"result-case-name",children:[o.jsx("span",{style:{marginRight:6,fontSize:12,color:"var(--text-muted)"},children:g?"▼":"▶"}),m.passed?o.jsx(Hn,{size:16,style:{color:"var(--success)"}}):o.jsx(yr,{size:16,style:{color:"var(--error)"}}),m.eval_set_name&&(e==null?void 0:e.eval_set_id)==="batch"&&o.jsx("span",{style:{fontSize:10,color:"var(--text-muted)",background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4,marginRight:6},children:m.eval_set_name}),m.case_name||`Case ${b+1}`,o.jsxs("span",{style:{marginLeft:10,fontSize:11,color:"var(--text-muted)",fontWeight:400},children:[(m.num_runs||1)>1&&o.jsxs("span",{style:{marginRight:8,padding:"2px 6px",borderRadius:4,background:(m.pass_rate||0)>=.5?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:(m.pass_rate||0)>=.5?"var(--success)":"var(--error)",fontWeight:500},children:[m.runs_passed,"/",m.runs_completed," runs (",((m.pass_rate||0)*100).toFixed(0),"%)"]}),z>0&&o.jsxs("span",{style:{color:"var(--error)"},children:[z," failed"]}),z>0&&U>0&&" · ",U>0&&o.jsxs("span",{style:{color:"var(--success)"},children:[U," passed"]})]})]}),o.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[m.session_id&&o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:S=>{S.stopPropagation(),p(m.session_id)},title:"View session in Run panel",children:[o.jsx(gv,{size:12})," View Session"]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:m.duration_ms?`${(m.duration_ms/1e3).toFixed(2)}s`:""})]})]}),o.jsxs("div",{className:"result-case-details",children:[(C==null?void 0:C.length)>0&&o.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:8},children:[C.map((S,R)=>{const P=ns(S.metric,S.score,S.threshold);return o.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:S.error?"rgba(255, 193, 7, 0.1)":S.passed?"rgba(var(--success-rgb), 0.05)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${S.error?"var(--warning)":S.passed?"var(--border-color)":"var(--error)"}`,display:"flex",flexDirection:"column",alignItems:"center",minWidth:80},children:[o.jsx("span",{style:{fontSize:10,color:"var(--text-secondary)",textAlign:"center",marginBottom:2},children:S.metric.replace(/_/g," ").replace("v1","").replace("v2","").trim()}),S.error?o.jsx("span",{style:{fontSize:10,color:"var(--warning)"},children:"Error"}):o.jsxs(o.Fragment,{children:[o.jsx("span",{style:{fontSize:14,fontWeight:600,color:S.passed?"var(--success)":"var(--error)"},children:P.value}),o.jsx("span",{style:{fontSize:9,color:"var(--text-muted)"},children:P.comparison})]})]},R)}),!g&&v.length>0&&o.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"var(--bg-tertiary)",border:"1px dashed var(--border-color)",display:"flex",alignItems:"center",fontSize:11,color:"var(--text-muted)"},children:["+",v.length," passed"]})]}),C==null?void 0:C.filter(S=>!S.passed&&S.rationale).map((S,R)=>o.jsxs("div",{style:{marginTop:8,padding:"8px 12px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:12},children:[o.jsxs("div",{style:{fontWeight:500,marginBottom:4,color:"var(--error)",fontSize:11},children:[S.metric.replace(/_/g," ")," - Why it failed:"]}),o.jsx("div",{style:{whiteSpace:"pre-wrap",color:"var(--text-secondary)",lineHeight:1.4},children:S.rationale})]},`rationale-${R}`)),(L==null?void 0:L.length)>0&&o.jsxs("div",{style:{marginTop:8},children:[o.jsx("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:4},children:"Custom Rubrics"}),L.map((S,R)=>o.jsxs("div",{style:{marginBottom:S.rationale&&!S.passed?8:4},children:[o.jsxs("div",{className:"metric-row",children:[o.jsx("span",{className:"metric-name",style:{flex:1},children:S.rubric}),o.jsx("span",{className:`metric-value ${S.passed?"passed":"failed"}`,children:S.passed?"✓ Pass":"✗ Fail"})]}),!S.passed&&S.rationale&&o.jsxs("div",{style:{marginTop:4,marginLeft:8,padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:11,color:"var(--text-secondary)"},children:[o.jsx("strong",{style:{color:"var(--error)"},children:"Why:"})," ",S.rationale]}),S.error&&o.jsxs("div",{style:{marginTop:4,marginLeft:8,fontSize:11,color:"var(--warning)"},children:["Error: ",S.error]})]},R)),!g&&T.length>0&&o.jsxs("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:["+",T.length," passed rubric",T.length>1?"s":""]})]}),g&&(m.num_runs||1)>1&&m.run_results&&m.run_results.length>0&&o.jsxs("div",{style:{marginTop:12,marginBottom:12},children:[o.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:8},children:["Individual Run Results (",m.runs_passed,"/",m.runs_completed," passed)"]}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:m.run_results.map((S,R)=>o.jsxs("div",{style:{padding:"4px 10px",borderRadius:"var(--radius-sm)",background:S.error?"rgba(255, 193, 7, 0.15)":S.passed?"rgba(var(--success-rgb), 0.1)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${S.error?"var(--warning)":S.passed?"var(--success)":"var(--error)"}`,fontSize:11,display:"flex",alignItems:"center",gap:6},title:S.error||`Run ${S.run_number}: ${S.passed?"Passed":"Failed"} (${(S.duration_ms/1e3).toFixed(2)}s)`,children:[S.error?o.jsx(wl,{size:12,style:{color:"var(--warning)"}}):S.passed?o.jsx(Hn,{size:12,style:{color:"var(--success)"}}):o.jsx(yr,{size:12,style:{color:"var(--error)"}}),o.jsxs("span",{style:{color:S.error?"var(--warning)":S.passed?"var(--success)":"var(--error)"},children:["Run ",S.run_number]}),o.jsxs("span",{style:{color:"var(--text-muted)",fontSize:10},children:[(S.duration_ms/1e3).toFixed(1),"s"]})]},R))})]}),(E==null?void 0:E.length)>0&&o.jsxs("div",{className:"invocation-summary",children:[o.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:8},children:["Invocations (",E.length,!g&&((M=m.invocation_results)==null?void 0:M.length)>E.length?` of ${m.invocation_results.length}`:"",")"]}),E.map((S,R)=>o.jsxs("div",{className:"invocation-item",children:[o.jsxs("div",{className:"invocation-query",children:["Turn ",S.invocation_id||R+1,": ",S.user_message||"(no message)"]}),S.actual_response&&o.jsxs("div",{className:"invocation-response",children:["Response: ",S.actual_response.substring(0,200),S.actual_response.length>200?"...":""]})]},R))]}),m.error&&o.jsx("div",{style:{marginTop:12,padding:12,background:"rgba(255, 107, 107, 0.1)",borderRadius:"var(--radius-sm)",color:"var(--error)",fontSize:12,whiteSpace:"pre-wrap"},children:m.error})]})]},j)}),l.length===0&&o.jsx("div",{style:{textAlign:"center",padding:32,color:"var(--text-secondary)"},children:"No test cases in this run"})]})]})}function Q5({evalCase:e,evalSetId:t,projectId:n,result:r,isRunning:i,onUpdate:s,onDelete:a,onRun:l,onClearResult:c}){var T,C,L;const{project:u}=yt(),[d,f]=k.useState(e),[p,h]=k.useState("assertions");k.useEffect(()=>{f(e)},[e.id]);const m=k.useCallback(E=>{f(U=>({...U,...E})),s(E)},[s]),b=()=>{const E={id:Q1(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]};m({invocations:[...d.invocations,E]})},j=(E,U)=>{const z=[...d.invocations];z[E]={...z[E],...U},m({invocations:z})},g=E=>{m({invocations:d.invocations.filter((U,z)=>z!==E)})},x=E=>{const U=[...d.invocations];U[E]={...U[E],expected_tool_calls:[...U[E].expected_tool_calls,{name:"",args:{},args_match_mode:"subset"}]},m({invocations:U})},v=(E,U,z)=>{const I=[...d.invocations],q=[...I[E].expected_tool_calls];q[U]={...q[U],...z},I[E]={...I[E],expected_tool_calls:q},m({invocations:I})},_=(E,U)=>{const z=[...d.invocations];z[E]={...z[E],expected_tool_calls:z[E].expected_tool_calls.filter((I,q)=>q!==U)},m({invocations:z})};return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(Ua,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("input",{type:"text",value:d.name,onChange:E=>m({name:E.target.value}),placeholder:"Test case name"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const E=`${window.location.origin}/project/${n}/evaluate?set=${t}&case=${e.id}`;navigator.clipboard.writeText(E)},title:"Copy link to this test case",children:o.jsx(sp,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:i,children:[i?o.jsx(Ai,{size:14,className:"spinning"}):o.jsx(xr,{size:14}),"Run"]}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:o.jsx(Je,{size:14})})]}),o.jsxs("div",{className:"tabs",children:[o.jsxs("div",{className:`tab ${p==="assertions"?"active":""}`,onClick:()=>h("assertions"),children:[o.jsx(Wa,{size:14,style:{marginRight:6}}),"Assertions (",d.invocations.length,")"]}),o.jsxs("div",{className:`tab ${p==="rubrics"?"active":""}`,onClick:()=>h("rubrics"),children:[o.jsx(lp,{size:14,style:{marginRight:6}}),"LLM Judges"]}),o.jsxs("div",{className:`tab ${p==="docs"?"active":""}`,onClick:()=>h("docs"),children:[o.jsx(Ti,{size:14,style:{marginRight:6}}),"Docs"]}),o.jsxs("div",{className:`tab ${p==="json"?"active":""}`,onClick:()=>h("json"),children:[o.jsx(En,{size:14,style:{marginRight:6}}),"JSON"]})]}),o.jsxs("div",{className:"editor-content",children:[p==="assertions"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:{display:"flex",gap:12,marginBottom:12},children:[o.jsxs("div",{style:{flex:1},children:[o.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"target_agent"}),o.jsxs("select",{value:d.target_agent||"",onChange:E=>m({target_agent:E.target.value||void 0}),style:{width:"100%"},children:[o.jsx("option",{value:"",children:"root_agent"}),(T=u==null?void 0:u.agents)==null?void 0:T.map(E=>o.jsx("option",{value:E.name,children:E.name},E.name))]})]}),o.jsxs("div",{style:{flex:1},children:[o.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"tags"}),o.jsx("input",{type:"text",value:d.tags.join(", "),onChange:E=>m({tags:E.target.value.split(",").map(U=>U.trim()).filter(Boolean)}),placeholder:"smoke, regression",style:{width:"100%"}})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("textarea",{value:d.description,onChange:E=>m({description:E.target.value}),placeholder:"What does this test verify?",style:{minHeight:40}})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:["session_input ",o.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(initial state)"})]}),o.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:o.jsx(on,{height:"100%",defaultLanguage:"json",value:(()=>{var U;if((!d.initial_state||Object.keys(d.initial_state).length===0)&&((U=u==null?void 0:u.app)!=null&&U.state_keys)&&u.app.state_keys.length>0){const z={};return u.app.state_keys.forEach(I=>{I.default_value!==void 0?z[I.name]=I.default_value:z[I.name]=I.type==="string"?"":I.type==="number"?0:I.type==="boolean"?!1:I.type==="array"?[]:{}}),JSON.stringify(z,null,2)}return JSON.stringify(d.initial_state,null,2)})(),onChange:E=>{try{E&&m({initial_state:JSON.parse(E)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(Wa,{size:14}),"Conversation Turns"]}),d.invocations.map((E,U)=>o.jsxs("div",{className:"invocation-card",children:[o.jsxs("div",{className:"invocation-number",children:[o.jsx("span",{children:U+1}),d.invocations.length>1&&o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>g(U),style:{padding:4},children:o.jsx(Je,{size:10})})]}),o.jsxs("div",{className:"invocation-content",children:[o.jsxs("div",{className:"invocation-row",children:[o.jsxs("div",{className:"form-section",children:[o.jsx("label",{children:"User Query"}),o.jsx("textarea",{value:E.user_message,onChange:z=>j(U,{user_message:z.target.value}),placeholder:"The message to send to the agent..."})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("label",{children:["Expected Response ",o.jsx("span",{style:{color:"var(--text-muted)",fontWeight:400},children:"(ROUGE-1)"})]}),o.jsx("textarea",{value:E.expected_response||"",onChange:z=>j(U,{expected_response:z.target.value||void 0}),placeholder:"Expected text (partial match)..."})]})]}),E.expected_tool_calls.map((z,I)=>o.jsxs("div",{className:"tool-call-compact",children:[o.jsx("input",{type:"text",value:z.name,onChange:q=>v(U,I,{name:q.target.value}),placeholder:"tool_name",className:"tool-name-input"}),o.jsxs("div",{className:"pillbox-toggle",children:[o.jsx("button",{className:`pill ${z.args_match_mode==="subset"?"active":""}`,onClick:()=>v(U,I,{args_match_mode:"subset"}),children:"Partial"}),o.jsx("button",{className:`pill ${z.args_match_mode==="exact"?"active":""}`,onClick:()=>v(U,I,{args_match_mode:"exact"}),children:"Exact"})]}),o.jsx("div",{className:"tool-args-editor",children:o.jsx(on,{height:"22px",defaultLanguage:"json",value:JSON.stringify(z.args||{}),onChange:q=>{try{q&&v(U,I,{args:JSON.parse(q)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,wordWrap:"off",scrollbar:{vertical:"hidden",horizontal:"hidden"},overviewRulerLanes:0,hideCursorInOverviewRuler:!0,overviewRulerBorder:!1,renderLineHighlight:"none",fontSize:11,padding:{top:3,bottom:3},automaticLayout:!0}})}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>_(U,I),style:{padding:"4px 6px"},children:o.jsx(Je,{size:10})})]},I)),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>x(U),style:{marginTop:4},children:[o.jsx(nt,{size:12})," Assert Tool Call"]})]})]},E.id)),o.jsxs("button",{className:"btn btn-secondary",onClick:b,children:[o.jsx(nt,{size:14})," Add Turn"]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(Hn,{size:14,style:{marginRight:6}}),"final_session_state ",o.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(optional)"})]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Assert that session state contains these key-value pairs after all turns complete."}),o.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:o.jsx(on,{height:"100%",defaultLanguage:"json",value:d.expected_final_state?JSON.stringify(d.expected_final_state,null,2):"{}",onChange:E=>{if(!E||E==="{}")m({expected_final_state:void 0});else try{m({expected_final_state:JSON.parse(E)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]})]}),p==="rubrics"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"form-section",style:{marginBottom:16},children:[{metric:"safety_v1",label:"safety_v1",default:.8,max:1},{metric:"hallucinations_v1",label:"hallucinations_v1",default:.8,max:1},{metric:"response_evaluation_score",label:"response_evaluation_score",default:3.5,max:5},{metric:"final_response_match_v2",label:"final_response_match_v2",default:.7,max:1}].map(({metric:E,label:U,default:z,max:I})=>{const q=(d.enabled_metrics||[]).find(A=>A.metric===E),G=(q==null?void 0:q.threshold)??z;return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:!!q,onChange:A=>{const O=[...d.enabled_metrics||[]];if(A.target.checked)O.push({metric:E,threshold:z});else{const M=O.findIndex(S=>S.metric===E);M!==-1&&O.splice(M,1)}m({enabled_metrics:O})}}),o.jsx("span",{className:"toggle-slider"})]}),o.jsx("span",{style:{fontSize:12,opacity:q?1:.5,minWidth:100},children:U}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:q?1:.4},children:"≥"}),o.jsx("input",{type:"number",min:I===5?1:0,max:I,step:.1,value:G,disabled:!q,onChange:A=>{const O=[...d.enabled_metrics||[]],M=O.findIndex(S=>S.metric===E);M!==-1&&(O[M]={...O[M],threshold:parseFloat(A.target.value)||0},m({enabled_metrics:O}))},style:{width:60,textAlign:"center",opacity:q?1:.3,padding:"2px 4px",fontSize:11}})]},E)})}),o.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--border-color)",margin:"16px 0"}}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Custom Rubrics"}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Natural language criteria evaluated by an LLM judge. Returns pass/fail per rubric."}),d.rubrics.map((E,U)=>o.jsxs("div",{className:"tool-call-row",style:{marginBottom:8},children:[o.jsx("input",{type:"text",value:E.rubric,onChange:z=>{const I=[...d.rubrics];I[U]={rubric:z.target.value},m({rubrics:I})},placeholder:"e.g., The response mentions the return policy",style:{flex:1}}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>m({rubrics:d.rubrics.filter((z,I)=>I!==U)}),children:o.jsx(Je,{size:12})})]},U)),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>m({rubrics:[...d.rubrics,{rubric:""}]}),children:[o.jsx(nt,{size:12})," Add Rubric"]})]})]}),p==="docs"&&o.jsxs("div",{style:{fontSize:13,lineHeight:1.6,color:"var(--text-secondary)",overflowY:"auto",maxHeight:"100%"},children:[o.jsx("h3",{style:{marginBottom:16,color:"var(--text-primary)"},children:"Evaluation Test Case Guide"}),o.jsxs("section",{style:{marginBottom:24,padding:12,background:"rgba(var(--accent-primary-rgb), 0.1)",borderRadius:"var(--radius-md)",border:"1px solid var(--accent-primary)"},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Quick Overview"}),o.jsxs("p",{children:["Each test case simulates a ",o.jsx("strong",{children:"multi-turn conversation"})," with an agent. For each turn (invocation), you provide a user message and define what you expect the agent to do."]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Invocations"})," = conversation turns (user messages)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Expected Response"})," = the agent's ",o.jsx("em",{children:"final text reply"})," for that turn"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Expected Tool Calls"})," = tools the agent should invoke during that turn"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Session State"})," = test the ",o.jsx("em",{children:"final state"})," after ALL turns complete"]})]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:'📝 What is "Expected Response"?'}),o.jsxs("p",{children:["The ",o.jsx("strong",{children:"Expected Response"})," is matched against the agent's ",o.jsx("strong",{children:"final response"})," for that specific turn — NOT every message."]}),o.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[o.jsx("p",{style:{marginBottom:8},children:o.jsx("strong",{children:"During one turn, an agent may:"})}),o.jsxs("ul",{style:{marginLeft:20,marginBottom:12},children:[o.jsx("li",{children:"Send intermediate thinking/reasoning messages"}),o.jsx("li",{children:"Call multiple tools"}),o.jsx("li",{children:"Transfer to sub-agents (who may respond)"}),o.jsxs("li",{children:["Finally send a ",o.jsx("em",{children:"concluding response"})]})]}),o.jsxs("p",{children:["Only the ",o.jsx("strong",{children:"last text response"})," from the agent for that turn is compared against your Expected Response."]})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Tip: If you need to verify intermediate steps, use Tool Trajectory matching or custom Rubrics."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🔄 Response Matching (ROUGE-1)"}),o.jsxs("p",{children:["The ",o.jsx("code",{children:"response_match_score"})," uses ",o.jsx("strong",{children:"ROUGE-1 F1 scoring"})," — fuzzy word-level matching:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:"Tokenizes both expected and actual responses into words"}),o.jsx("li",{children:"Calculates word overlap (not exact string match)"}),o.jsx("li",{children:"Returns a score from 0.0 to 1.0"})]}),o.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[o.jsx("p",{children:o.jsx("strong",{children:"Example:"})}),o.jsxs("p",{children:["Expected: ",o.jsx("code",{children:'"The weather in Paris is sunny today"'})]}),o.jsxs("p",{children:["Actual: ",o.jsx("code",{children:'"Today in Paris, expect sunny weather"'})]}),o.jsx("p",{style:{marginTop:8,color:"var(--success)"},children:"✓ High ROUGE-1 score (same words, different order)"})]}),o.jsxs("p",{style:{marginTop:8},children:["A threshold of ",o.jsx("strong",{children:"0.7"})," means 70% word overlap is required to pass."]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🛠️ Tool Trajectory Matching"}),o.jsxs("p",{children:["The ",o.jsx("code",{children:"tool_trajectory_avg_score"})," verifies the agent called expected tools. Match types:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Exact"})," — Same tools in same order, no extras allowed"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"In Order"})," — Expected tools appear in order, extras allowed between"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Any Order"})," — All expected tools present, any order, extras allowed"]})]}),o.jsx("p",{style:{marginTop:8},children:"For each tool, you can match by:"}),o.jsxs("ul",{style:{marginLeft:20,marginTop:4},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Name Only"})," — Just check the tool was called"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Exact Args"})," — Arguments must match exactly (provide JSON)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Args Subset"})," — Your expected args must be present in actual args"]})]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💾 Session State Testing"}),o.jsxs("p",{children:[o.jsx("strong",{children:"Initial State"})," (Settings tab) — Pre-populate session state before running the test:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:"Set user preferences or context"}),o.jsx("li",{children:"Simulate a specific scenario"}),o.jsx("li",{children:"Test state-dependent behavior"})]}),o.jsxs("p",{style:{marginTop:12},children:[o.jsx("strong",{children:"Expected Final State"})," — Verified at the ",o.jsx("em",{children:"very end"})," of the test case, ",o.jsx("strong",{children:"after ALL invocations complete"}),"."]}),o.jsx("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8,borderLeft:"3px solid var(--warning)"},children:o.jsxs("p",{style:{margin:0},children:[o.jsx("strong",{children:"Important:"})," State is tested once after the entire conversation, NOT after each turn. To test state changes per-turn, use separate test cases."]})})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Target Agent (Settings tab)"}),o.jsxs("p",{children:["By default, tests run against the ",o.jsx("strong",{children:"root_agent"})," of your App. You can select a specific sub-agent to test in isolation:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"root_agent"})," — Test the full agent hierarchy (default)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Specific agent"})," — Unit test individual agents"]})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Useful for testing sub-agents independently before integrating into the full system."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📋 Custom Rubrics"}),o.jsx("p",{children:"Rubrics are custom yes/no criteria evaluated by an LLM judge. Examples:"}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:'"Does the response mention the product price?"'}),o.jsx("li",{children:'"Is the tone professional and helpful?"'}),o.jsx("li",{children:'"Does the response avoid mentioning competitors?"'})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Note: Rubric evaluation requires LLM-judged metrics to be enabled in the Eval Set."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📊 Available Metrics"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Metric"}),o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Type"}),o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Description"})]})}),o.jsx("tbody",{children:Object.keys(_n).map(E=>o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("td",{style:{padding:"8px 4px",fontFamily:"var(--font-mono)",fontSize:11},children:E}),o.jsx("td",{style:{padding:"8px 4px"},children:_n[E].requiresJudge?o.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--accent-primary)",color:"white",borderRadius:4},children:"LLM Judge"}):o.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--bg-tertiary)",borderRadius:4},children:"Built-in"})}),o.jsx("td",{style:{padding:"8px 4px",color:"var(--text-muted)"},children:_n[E].description})]},E))})]})]}),o.jsxs("section",{children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💡 Tips"}),o.jsxs("ul",{style:{marginLeft:20},children:[o.jsx("li",{children:"Start with simple single-turn tests, then add complexity"}),o.jsx("li",{children:'Use "In Order" matching for most tool trajectory tests'}),o.jsx("li",{children:"Lower ROUGE thresholds (0.5-0.6) for creative/varied responses"}),o.jsx("li",{children:"Higher thresholds (0.8-0.9) for factual/precise responses"}),o.jsx("li",{children:"Use tags to organize tests by feature or priority"}),o.jsx("li",{children:"Test sub-agents individually using Target Agent selector"})]})]})]}),p==="json"&&o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[o.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:o.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this test case. You can use this with ",o.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval"}),"."]})}),o.jsx("div",{style:{flex:1,minHeight:300,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:o.jsx(on,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify({name:d.name,description:d.description||void 0,tags:(C=d.tags)!=null&&C.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(E=>{var U;return{user_message:E.user_message,expected_response:E.expected_response||void 0,expected_tool_calls:(U=E.expected_tool_calls)!=null&&U.length?E.expected_tool_calls.map(z=>({tool_name:z.tool_name,args:z.match_type!=="name_only"&&Object.keys(z.args||{}).length?z.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(L=d.rubrics)!=null&&L.length?d.rubrics.map(E=>E.rubric):void 0},null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),o.jsx("div",{style:{display:"flex",gap:8},children:o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var U,z;const E=JSON.stringify({name:d.name,description:d.description||void 0,tags:(U=d.tags)!=null&&U.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(I=>{var q;return{user_message:I.user_message,expected_response:I.expected_response||void 0,expected_tool_calls:(q=I.expected_tool_calls)!=null&&q.length?I.expected_tool_calls.map(G=>({tool_name:G.tool_name,args:G.match_type!=="name_only"&&Object.keys(G.args||{}).length?G.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(z=d.rubrics)!=null&&z.length?d.rubrics.map(I=>I.rubric):void 0},null,2);navigator.clipboard.writeText(E)},children:[o.jsx(us,{size:14})," Copy JSON"]})})]})]}),r&&o.jsxs("div",{className:"result-panel",children:[o.jsxs("div",{className:`result-header ${r.passed?"passed":"failed"}`,children:[r.passed?o.jsxs(o.Fragment,{children:[o.jsx(Hn,{size:18})," ",o.jsx("strong",{children:"Passed"})]}):o.jsxs(o.Fragment,{children:[o.jsx(yr,{size:18})," ",o.jsx("strong",{children:"Failed"})]}),o.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:12},children:[r.total_tokens?o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},title:"Total tokens used",children:[r.total_tokens.toLocaleString()," tokens"]}):null,o.jsxs("span",{style:{color:"var(--text-muted)",fontSize:12},children:[r.duration_ms.toFixed(0),"ms"]}),r.session_id&&o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{window.location.href=`/project/${u==null?void 0:u.id}/run?session=${r.session_id}`},title:"View this session in the Run panel",style:{fontSize:11},children:[o.jsx(gv,{size:12}),"View Session"]}),c&&o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Close test results",style:{fontSize:11,padding:"4px 8px"},children:"✕"})]})]}),o.jsx("div",{className:"result-scores",children:r.metric_results.map((E,U)=>{var I;const z=ns(E.metric,E.score,E.threshold);return o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:`score-value ${E.passed?"passed":"failed"}`,children:z.value}),o.jsx("div",{className:"score-label",children:((I=_n[E.metric])==null?void 0:I.name)||E.metric}),o.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",marginTop:2},children:z.comparison}),E.error&&o.jsx("div",{style:{fontSize:10,color:"var(--error)",marginTop:4},children:E.error})]},U)})}),r.rubric_results&&r.rubric_results.length>0&&o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Custom Rubrics"}),o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:r.rubric_results.map((E,U)=>o.jsxs("div",{style:{padding:"8px 12px",borderRadius:"var(--radius-sm)",background:E.passed?"rgba(var(--success-rgb), 0.1)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${E.passed?"var(--success)":"var(--error)"}`,display:"flex",alignItems:"center",gap:10},children:[o.jsx("span",{style:{fontSize:16,color:E.passed?"var(--success)":"var(--error)",fontWeight:"bold"},children:E.passed?"✓":"✗"}),o.jsxs("div",{style:{flex:1},children:[o.jsx("div",{style:{fontSize:12,color:"var(--text-primary)"},children:E.rubric}),E.error&&o.jsxs("div",{style:{fontSize:10,color:"var(--error)",marginTop:2},children:["Error: ",E.error]})]})]},U))})]}),r.invocation_results.map((E,U)=>o.jsxs("div",{className:"result-details",children:[o.jsxs("h5",{children:["Turn ",U+1,": ",E.user_message.length>50?E.user_message.slice(0,50)+"…":E.user_message]}),E.metric_results.length>0&&o.jsx("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:E.metric_results.map((z,I)=>{var G;const q=ns(z.metric,z.score,z.threshold);return o.jsxs("span",{style:{fontSize:11,padding:"2px 6px",borderRadius:"var(--radius-sm)",background:z.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:z.passed?"var(--success)":"var(--error)"},children:[((G=_n[z.metric])==null?void 0:G.name)||z.metric,": ",q.value]},I)})}),o.jsxs("div",{className:"detail-box",children:[o.jsx("strong",{children:"Actual Response:"}),`
`,E.actual_response||"(no response)",`

`,E.actual_tool_calls.length>0&&o.jsxs(o.Fragment,{children:[o.jsx("strong",{children:"Tool Calls:"}),`
`,E.actual_tool_calls.map((z,I)=>`  ${I+1}. ${z.name}(${JSON.stringify(z.args)})
`).join("")]})]})]},U)),r.error&&o.jsxs("div",{className:"result-details",children:[o.jsx("h5",{style:{color:"var(--error)"},children:"Error"}),o.jsx("div",{className:"detail-box",style:{color:"var(--error)"},children:r.error})]})]})]})}function X5({evalSet:e,projectId:t,result:n,isRunning:r,caseResults:i,onUpdate:s,onDelete:a,onRun:l,onExport:c}){var b,j,g,x;const[u,d]=k.useState(e.name),[f,p]=k.useState(!1);k.useEffect(()=>{d(e.name)},[e.id]);const h=k.useCallback(()=>{u!==e.name&&s({name:u})},[u,e.name,s]),m=v=>v==null?"-":`${Math.round(v*100)}%`;return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(yv,{size:20,style:{color:"var(--accent-secondary)"}}),o.jsx("input",{type:"text",value:u,onChange:v=>d(v.target.value),onBlur:h,placeholder:"Eval set name"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const v=`${window.location.origin}/project/${t}/evaluate?set=${e.id}`;navigator.clipboard.writeText(v)},title:"Copy link to this eval set",children:o.jsx(sp,{size:14})}),o.jsxs("button",{className:`btn btn-sm ${f?"btn-primary":"btn-secondary"}`,onClick:()=>p(!f),title:"View/Hide JSON",children:[o.jsx(En,{size:14}),"JSON"]}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Export as JSON (compatible with adk eval)",children:o.jsx($i,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:r,children:[r?o.jsx(Ai,{size:14,className:"spinning"}):o.jsx(xr,{size:14}),"Run All"]}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:o.jsx(Je,{size:14})})]}),o.jsx("div",{className:"editor-content",children:f?o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[o.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:o.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this evaluation set. Save this file and use with ",o.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval <agent_path> <eval_file.json>"})]})}),o.jsx("div",{style:{flex:1,minHeight:400,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:o.jsx(on,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(v=>{var _,T;return{name:v.name,description:v.description||void 0,tags:(_=v.tags)!=null&&_.length?v.tags:void 0,target_agent:v.target_agent!=="root_agent"?v.target_agent:void 0,invocations:v.invocations.map(C=>{var L;return{user_message:C.user_message,expected_response:C.expected_response||void 0,expected_tool_calls:(L=C.expected_tool_calls)!=null&&L.length?C.expected_tool_calls.map(E=>({tool_name:E.tool_name,args:E.match_type!=="name_only"&&Object.keys(E.args||{}).length?E.args:void 0})):void 0}}),session_input:Object.keys(v.session_input||{}).length?{state:v.session_input}:void 0,final_session_state:Object.keys(v.final_session_state||{}).length?v.final_session_state:void 0,rubrics:(T=v.rubrics)!=null&&T.length?v.rubrics.map(C=>C.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((b=e.eval_config.metrics)==null?void 0:b.filter(v=>v.enabled))||void 0}:void 0}],null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),o.jsx("div",{style:{display:"flex",gap:8},children:o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var _;const v=JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(T=>{var C,L;return{name:T.name,description:T.description||void 0,tags:(C=T.tags)!=null&&C.length?T.tags:void 0,target_agent:T.target_agent!=="root_agent"?T.target_agent:void 0,invocations:T.invocations.map(E=>{var U;return{user_message:E.user_message,expected_response:E.expected_response||void 0,expected_tool_calls:(U=E.expected_tool_calls)!=null&&U.length?E.expected_tool_calls.map(z=>({tool_name:z.tool_name,args:z.match_type!=="name_only"&&Object.keys(z.args||{}).length?z.args:void 0})):void 0}}),session_input:Object.keys(T.session_input||{}).length?{state:T.session_input}:void 0,final_session_state:Object.keys(T.final_session_state||{}).length?T.final_session_state:void 0,rubrics:(L=T.rubrics)!=null&&L.length?T.rubrics.map(E=>E.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((_=e.eval_config.metrics)==null?void 0:_.filter(T=>T.enabled))||void 0}:void 0}],null,2);navigator.clipboard.writeText(v)},children:[o.jsx(us,{size:14})," Copy JSON"]})})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("textarea",{value:e.description,onChange:v=>s({description:v.target.value}),placeholder:"Description of this evaluation set...",style:{minHeight:40}})]}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"LLM Judge Model"}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Model used for LLM-judged metrics (safety, hallucinations, etc.)."}),o.jsx(G5,{value:((j=e.eval_config)==null?void 0:j.judge_model)||"",onChange:v=>s({eval_config:{...e.eval_config,judge_model:v}})})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(kv,{size:14})," Evaluation Metrics"]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Configure which metrics to use and their pass thresholds."}),Object.keys(_n).map(v=>{var E,U,z;const _=_n[v],T=(U=(E=e.eval_config)==null?void 0:E.metrics)==null?void 0:U.find(I=>I.metric===v),C=(T==null?void 0:T.enabled)??!1,L=((z=T==null?void 0:T.criterion)==null?void 0:z.threshold)??.7;return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:C,onChange:I=>{var A;const q=[...((A=e.eval_config)==null?void 0:A.metrics)||[]],G=q.findIndex(O=>O.metric===v);I.target.checked?G===-1?q.push({metric:v,enabled:!0,criterion:{threshold:.7}}):q[G]={...q[G],enabled:!0}:G!==-1&&(q[G]={...q[G],enabled:!1}),s({eval_config:{...e.eval_config,metrics:q}})}}),o.jsx("span",{className:"toggle-slider"})]}),o.jsxs("span",{style:{fontSize:12,opacity:C?1:.5,minWidth:140,fontWeight:C?500:400},children:[_.name,_.requiresJudge&&o.jsx("span",{style:{fontSize:9,marginLeft:4,color:"var(--accent-primary)"},children:"LLM"})]}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:C?1:.4},children:"≥"}),o.jsx("input",{type:"number",min:0,max:1,step:.1,value:L,disabled:!C,onChange:I=>{var A;const q=[...((A=e.eval_config)==null?void 0:A.metrics)||[]],G=q.findIndex(O=>O.metric===v);G!==-1&&(q[G]={...q[G],criterion:{...q[G].criterion,threshold:parseFloat(I.target.value)||.7}},s({eval_config:{...e.eval_config,metrics:q}}))},style:{width:60,textAlign:"center",opacity:C?1:.3,padding:"2px 4px",fontSize:11}})]},v)}),o.jsxs("div",{className:"form-row",style:{marginTop:16},children:[o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Default Trajectory Match Type"}),o.jsxs("select",{value:((g=e.eval_config)==null?void 0:g.default_trajectory_match_type)||"in_order",onChange:v=>s({eval_config:{...e.eval_config,default_trajectory_match_type:v.target.value}}),children:[o.jsx("option",{value:"exact",children:"Exact (same order, no extras)"}),o.jsx("option",{value:"in_order",children:"In Order (extras allowed between)"}),o.jsx("option",{value:"any_order",children:"Any Order (all present, any order)"})]})]}),o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Number of Runs"}),o.jsx("input",{type:"number",min:1,max:10,value:((x=e.eval_config)==null?void 0:x.num_runs)||1,onChange:v=>s({eval_config:{...e.eval_config,num_runs:parseInt(v.target.value)||1}})}),o.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:"Run each test multiple times for statistical reliability."})]})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(Cj,{size:14})," Coverage Summary"]}),n?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"result-scores",children:[o.jsxs("div",{className:"score-card",children:[o.jsxs("div",{className:"score-value",style:{color:"var(--accent-primary)"},children:[n.passed_cases,"/",n.total_cases]}),o.jsx("div",{className:"score-label",children:"Cases Passed"})]}),o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:`score-value ${n.overall_pass_rate>=.8?"passed":"failed"}`,children:m(n.overall_pass_rate)}),o.jsx("div",{className:"score-label",children:"Pass Rate"})]}),Object.entries(n.metric_avg_scores||{}).map(([v,_])=>{var C;const T=ns(v,_);return o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:"score-value",children:T.value}),o.jsxs("div",{className:"score-label",children:["Avg ",((C=_n[v])==null?void 0:C.name)||v]})]},v)})]}),o.jsxs("div",{style:{marginTop:16},children:[o.jsx("div",{style:{marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Overall Pass Rate"}),o.jsx("div",{className:"coverage-bar",children:o.jsx("div",{className:`coverage-fill ${n.overall_pass_rate>=.8?"passed":"failed"}`,style:{width:`${n.overall_pass_rate*100}%`}})})]}),Object.entries(n.metric_pass_rates||{}).length>0&&o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Metric Pass Rates"}),Object.entries(n.metric_pass_rates).map(([v,_])=>{var T;return o.jsxs("div",{style:{marginBottom:8},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4},children:[o.jsx("span",{children:((T=_n[v])==null?void 0:T.name)||v}),o.jsx("span",{children:m(_)})]}),o.jsx("div",{className:"coverage-bar",children:o.jsx("div",{className:`coverage-fill ${_>=.8?"passed":"failed"}`,style:{width:`${_*100}%`}})})]},v)})]}),o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Individual Results"}),o.jsxs("table",{style:{width:"100%",fontSize:12,borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Test Case"}),o.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Metrics"}),o.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Status"})]})}),o.jsx("tbody",{children:n.case_results.map(v=>o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("td",{style:{padding:"8px 4px"},children:v.eval_case_name}),o.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:v.metric_results.map((_,T)=>{const C=ns(_.metric,_.score,_.threshold);return o.jsx("span",{style:{fontSize:10,padding:"2px 4px",marginRight:4,borderRadius:"var(--radius-sm)",background:_.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:_.passed?"var(--success)":"var(--error)"},children:C.value},T)})}),o.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:v.passed?o.jsx(Hn,{size:14,style:{color:"var(--success)"}}):v.error?o.jsx(Ti,{size:14,style:{color:"var(--warning)"}}):o.jsx(yr,{size:14,style:{color:"var(--error)"}})})]},v.eval_case_id))})]})]})]}):o.jsxs("div",{style:{textAlign:"center",padding:"32px",color:"var(--text-muted)",background:"var(--bg-tertiary)",borderRadius:"var(--radius-md)"},children:[o.jsx(lp,{size:32,style:{marginBottom:8,opacity:.3}}),o.jsx("p",{children:"Run the evaluation set to see coverage metrics"})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:["Test Cases (",e.eval_cases.length,")"]}),e.eval_cases.length===0?o.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"No test cases yet. Add cases to this eval set to start testing."}):o.jsx("ul",{style:{listStyle:"none",padding:0},children:e.eval_cases.map(v=>{const _=i.get(v.id);return o.jsxs("li",{style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",background:"var(--bg-tertiary)",borderRadius:"var(--radius-sm)",marginBottom:8},children:[_?_.passed?o.jsx(Hn,{size:14,style:{color:"var(--success)"}}):o.jsx(yr,{size:14,style:{color:"var(--error)"}}):o.jsx(Ua,{size:14,style:{color:"var(--text-muted)"}}),o.jsx("span",{style:{flex:1},children:v.name}),o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},children:[v.invocations.length," turn(s)"]})]},v.id)})})]})]})})]})}function Z5(){const{project:e,setProject:t}=yt(),[n,r]=k.useState(""),[i,s]=k.useState(!0),[a,l]=k.useState(!1),[c,u]=k.useState(null),[d,f]=k.useState(!1);if(!e)return null;k.useEffect(()=>{p()},[e.id]);async function p(){s(!0),u(null);try{const x=await nv(e.id);r(x),l(!1)}catch(x){u(x.message)}finally{s(!1)}}function h(x){x!==void 0&&(r(x),l(!0),u(null))}async function m(){s(!0),u(null);try{const x=await rv(e.id,n);t(x),l(!1)}catch(x){u(x.message)}finally{s(!1)}}function b(){navigator.clipboard.writeText(n),f(!0),setTimeout(()=>f(!1),2e3)}function j(){const x=new Blob([n],{type:"text/yaml"}),v=URL.createObjectURL(x),_=document.createElement("a");_.href=v,_.download=`${e.name}.yaml`,_.click(),URL.revokeObjectURL(v)}function g(){const x=document.createElement("input");x.type="file",x.accept=".yaml,.yml",x.onchange=async v=>{var C;const _=(C=v.target.files)==null?void 0:C[0];if(!_)return;const T=await _.text();r(T),l(!0)},x.click()}return o.jsxs("div",{className:"yaml-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"yaml-header",children:[o.jsxs("div",{className:"yaml-title",children:[o.jsx("h3",{children:"Project Configuration"}),a&&o.jsxs("span",{className:"status-badge warning",children:[o.jsx(Ti,{size:12}),"Unsaved changes"]}),c&&o.jsxs("span",{className:"status-badge error",children:[o.jsx(Ti,{size:12}),c]}),d&&o.jsxs("span",{className:"status-badge success",children:[o.jsx(np,{size:12}),"Copied!"]})]}),o.jsxs("div",{className:"yaml-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:b,title:"Copy to clipboard",children:[o.jsx(us,{size:14}),"Copy"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:j,title:"Download YAML",children:[o.jsx($i,{size:14}),"Download"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:g,title:"Upload YAML",children:[o.jsx(kl,{size:14}),"Upload"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:p,title:"Reload from server",children:[o.jsx(rn,{size:14}),"Reload"]}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:m,disabled:!a||i,children:"Apply Changes"})]})]}),o.jsx("div",{className:"yaml-editor",children:o.jsx(on,{height:"100%",language:"yaml",theme:"vs-dark",value:n,onChange:h,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),o.jsxs("div",{className:"yaml-info",children:[o.jsx("p",{children:"This YAML represents your entire project configuration including the app, agents, tools, and state keys."}),o.jsxs("p",{children:["You can edit the YAML directly, then click ",o.jsx("code",{children:"Apply Changes"})," to update the project. Use ",o.jsx("code",{children:"Download"})," to save a backup or ",o.jsx("code",{children:"Upload"})," to import a configuration."]})]})]})}function e8(){const{project:e}=yt(),[t,n]=k.useState(!1),[r,i]=k.useState(""),[s,a]=k.useState(!1),[l,c]=k.useState(null);if(k.useEffect(()=>{e&&(a(!0),c(null),fetch(`/api/projects/${e.id}/code`).then(f=>{if(!f.ok)throw new Error("Failed to fetch code");return f.json()}).then(f=>{let p=f.code||"";p=p.replace(/\n# --- Callback instrumentation \(for event tracking\) ---[\s\S]*?# --- End callback instrumentation ---\n/g,""),p=p.replace(/_wrap_callback\("[^"]+",\s*"[^"]+",\s*(\w+)\)/g,"$1"),i(p),a(!1)}).catch(f=>{c(f.message),a(!1),i("# Failed to generate code. Please check the backend logs.")}))},[e]),!e)return null;function u(){navigator.clipboard.writeText(r),n(!0),setTimeout(()=>n(!1),2e3)}function d(){if(!e)return;const f=new Blob([r],{type:"text/x-python"}),p=URL.createObjectURL(f),h=document.createElement("a");h.href=p,h.download=`${e.name}_agent.py`,h.click(),URL.revokeObjectURL(p)}return o.jsxs("div",{className:"code-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"code-header",children:[o.jsxs("div",{className:"code-title",children:[o.jsx(En,{size:16}),o.jsx("h3",{children:"Python Code"}),o.jsx("span",{className:"badge",children:s?"Loading...":"Generated"}),t&&o.jsxs("span",{className:"status-badge success",children:[o.jsx(np,{size:12}),"Copied!"]}),l&&o.jsxs("span",{className:"status-badge error",children:[o.jsx(Ti,{size:12}),"Error"]})]}),o.jsxs("div",{className:"code-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:u,title:"Copy to clipboard",disabled:s||!!l,children:[o.jsx(us,{size:14}),"Copy"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:d,title:"Download Python file",disabled:s||!!l,children:[o.jsx($i,{size:14}),"Download"]})]})]}),o.jsx("div",{className:"code-editor",children:s?o.jsx("div",{className:"code-loading",children:o.jsx("div",{children:"Loading generated code..."})}):l?o.jsxs("div",{className:"code-error",children:[o.jsx(Ti,{size:24}),o.jsx("div",{children:l})]}):o.jsx(on,{height:"100%",language:"python",theme:"vs-dark",value:r,options:{readOnly:!0,minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),o.jsxs("div",{className:"code-info",children:[o.jsx("p",{children:"This is the Python code equivalent of your project configuration. You can use this code directly with ADK."}),o.jsxs("p",{children:["Place this in a file named ",o.jsx("code",{children:"agent.py"})," inside your agent directory, then run with ",o.jsx("code",{children:"adk web ."})," or ",o.jsx("code",{children:"adk run your_agent"}),"."]})]})]})}const t8=[{id:"app",label:"App",icon:kv},{id:"agents",label:"Agents",icon:Rr},{id:"tools",label:"Tools",icon:gn},{id:"callbacks",label:"Callbacks",icon:En},{id:"run",label:"Run",icon:vv},{id:"skillsets",label:"SkillSets",icon:mj},{id:"eval",label:"Evaluate",icon:Ru},{id:"yaml",label:"YAML",icon:xj},{id:"code",label:"Code",icon:En}],n8=["app","agents","tools","callbacks","run","skillsets","eval","yaml","code"];function Pc(){var O,M;const{projectId:e,tab:t,itemId:n}=gk(),r=Zd(),{project:i,setProject:s,activeTab:a,setActiveTab:l,hasUnsavedChanges:c,setHasUnsavedChanges:u,selectedAgentId:d,setSelectedAgentId:f,selectedToolId:p,setSelectedToolId:h}=yt(),[m,b]=k.useState(!0),[j,g]=k.useState(!1),[x,v]=k.useState(!1),[_,T]=k.useState(null),C=k.useRef(!0),L=k.useRef(null);k.useEffect(()=>{t&&n8.includes(t)?l(t):!t&&e&&r(`/project/${e}/${a}`,{replace:!0})},[t,e]),k.useEffect(()=>{t==="agents"&&n?f(n):t==="tools"&&n&&h(n)},[t,n]);function E(S){l(S),S==="agents"&&d?r(`/project/${e}/${S}/${d}`,{replace:!0}):S==="tools"&&p?r(`/project/${e}/${S}/${p}`,{replace:!0}):r(`/project/${e}/${S}`,{replace:!0})}function U(S){S?r(`/project/${e}/${a}/${S}`,{replace:!0}):r(`/project/${e}/${a}`,{replace:!0})}k.useEffect(()=>(e&&z(e),()=>{s(null),u(!1)}),[e]);async function z(S){C.current=!0;try{const R=await Yy(S);s(R),L.current=JSON.stringify(R),u(!1)}catch(R){console.error("Failed to load project:",R),r("/")}finally{b(!1),setTimeout(()=>{C.current=!1},100)}}async function I(){if(i){g(!0);try{const{eval_sets:S,...R}=i;await Tu(i.id,R),L.current=JSON.stringify(i),u(!1)}catch(S){console.error("Failed to save project:",S)}finally{g(!1)}}}async function q(){if(i){v(!0),T(null),window.dispatchEvent(new CustomEvent("eval-tests-started"));try{let S=0,R=0;const P=[],w=[];for(const W of i.eval_sets||[]){if(W.eval_cases.length===0)continue;const H=await et.post(`/projects/${i.id}/eval-sets/${W.id}/run`,{});H.result&&(S+=H.result.passed_cases||0,R+=H.result.total_cases||0,H.result.case_results&&P.push(...H.result.case_results),w.push(H.result.eval_set_name||W.name||W.id))}if(P.length>0){const W={id:Date.now().toString(36)+Math.random().toString(36).substr(2,5),eval_set_id:"batch",eval_set_name:w.length>1?`All Tests (${w.length} sets)`:w[0]||"All Tests",started_at:Date.now()/1e3,completed_at:Date.now()/1e3,total_cases:R,passed_cases:S,failed_cases:R-S,case_results:P};try{await et.post(`/projects/${i.id}/eval-history`,W)}catch(H){console.warn("Failed to save batch eval run to history:",H)}}T({passed:S,total:R}),window.dispatchEvent(new CustomEvent("eval-tests-completed")),setTimeout(()=>T(null),5e3)}catch(S){console.error("Failed to run tests:",S),T({passed:0,total:-1}),setTimeout(()=>T(null),5e3)}finally{v(!1)}}}const G=k.useRef(null);k.useEffect(()=>{if(i&&!C.current&&G.current){const S=i.app.models||[],R=G.current||[];if(S.some((w,W)=>{const H=R.find(y=>y.id===w.id);return H?H.provider!==w.provider||H.model_name!==w.model_name||H.api_base!==w.api_base||H.temperature!==w.temperature||H.max_output_tokens!==w.max_output_tokens||H.top_p!==w.top_p||H.top_k!==w.top_k:!1})){const w=i.app.default_model_id,W=i.agents.map(y=>{if(y.type==="LlmAgent"&&y.model){const N=y.model._appModelId;if(N){const $=S.find(ne=>ne.id===N);if($)return{...y,model:{provider:$.provider,model_name:$.model_name,api_base:$.api_base,temperature:$.temperature,max_output_tokens:$.max_output_tokens,top_p:$.top_p,top_k:$.top_k,fallbacks:[],_appModelId:N}}}else if(w){const $=S.find(ne=>ne.id===w);if($&&y.model.provider===$.provider&&y.model.model_name===$.model_name&&y.model.api_base===$.api_base)return{...y,model:{provider:$.provider,model_name:$.model_name,api_base:$.api_base,temperature:$.temperature,max_output_tokens:$.max_output_tokens,top_p:$.top_p,top_k:$.top_k,fallbacks:[],_appModelId:w}}}}return y});W.some((y,N)=>JSON.stringify(y)!==JSON.stringify(i.agents[N]))&&s({...i,agents:W})}}i&&(G.current=i.app.models||[])},[i==null?void 0:i.app.models,i,s]);const A=k.useRef(null);return k.useEffect(()=>(i&&!C.current&&L.current&&JSON.stringify(i)!==L.current&&(u(!0),A.current&&clearTimeout(A.current),A.current=setTimeout(async()=>{try{const{eval_sets:R,...P}=i;await Tu(i.id,P),L.current=JSON.stringify(i),u(!1)}catch(R){console.error("Auto-save failed:",R)}},500)),()=>{A.current&&clearTimeout(A.current)}),[i]),m?o.jsxs("div",{className:"loading-screen",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("header",{className:"top-bar",children:[o.jsxs("div",{className:"top-bar-left",children:[o.jsxs("button",{className:"back-btn",onClick:()=>r("/"),children:[o.jsx(fj,{size:18}),"Project"]}),o.jsx("h1",{className:"project-name",children:i.name})]}),o.jsx("nav",{className:"tabs-bar",children:t8.map(S=>o.jsxs("button",{className:`tab-btn ${a===S.id?"active":""}`,onClick:()=>E(S.id),children:[o.jsx(S.icon,{size:14}),S.label]},S.id))}),o.jsxs("div",{className:"top-bar-right",children:[o.jsxs("button",{className:`btn ${_?_.total===-1?"btn-error":_.passed===_.total?"btn-success":"btn-warning":"btn-secondary"}`,onClick:q,disabled:x||!((O=i==null?void 0:i.eval_sets)!=null&&O.some(S=>S.eval_cases.length>0)),title:(M=i==null?void 0:i.eval_sets)!=null&&M.some(S=>S.eval_cases.length>0)?"Run all evaluation tests":"No test cases defined",style:{marginRight:8},children:[x?o.jsx(bv,{size:16,className:"spin"}):o.jsx(xr,{size:16}),x?"Testing...":_?_.total===-1?"Error":`${_.passed}/${_.total}`:"Test"]}),o.jsxs("button",{className:"btn btn-primary",onClick:I,disabled:j,children:[o.jsx(Va,{size:16}),j?"Saving...":"Save"]})]})]}),o.jsxs("main",{className:"main-content",children:[a==="app"&&o.jsx($j,{}),a==="agents"&&o.jsx(H4,{onSelectAgent:U}),a==="tools"&&o.jsx(SE,{onSelectTool:U}),a==="callbacks"&&o.jsx(NE,{onSelectCallback:U}),a==="run"&&o.jsx(W5,{}),a==="skillsets"&&o.jsx(q5,{}),a==="eval"&&o.jsx(K5,{}),a==="yaml"&&o.jsx(Z5,{}),a==="code"&&o.jsx(e8,{})]})]}):null}function r8(){const{setMcpServers:e,setBuiltinTools:t}=yt();return k.useEffect(()=>{tp().then(e).catch(console.error),iv().then(t).catch(console.error)},[e,t]),o.jsxs(Lk,{children:[o.jsx(Xr,{path:"/",element:o.jsx(Aj,{})}),o.jsx(Xr,{path:"/project/:projectId",element:o.jsx(Pc,{})}),o.jsx(Xr,{path:"/project/:projectId/:tab",element:o.jsx(Pc,{})}),o.jsx(Xr,{path:"/project/:projectId/:tab/:itemId",element:o.jsx(Pc,{})}),o.jsx(Xr,{path:"*",element:o.jsx(Ak,{to:"/",replace:!0})})]})}Rc.createRoot(document.getElementById("root")).render(o.jsx(qt.StrictMode,{children:o.jsx(Ik,{children:o.jsx(r8,{})})}));
