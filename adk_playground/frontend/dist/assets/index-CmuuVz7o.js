function lx(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Uo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function js(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function US(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var tf={exports:{}},ws={},nf={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ji=Symbol.for("react.element"),ax=Symbol.for("react.portal"),cx=Symbol.for("react.fragment"),ux=Symbol.for("react.strict_mode"),dx=Symbol.for("react.profiler"),px=Symbol.for("react.provider"),fx=Symbol.for("react.context"),mx=Symbol.for("react.forward_ref"),hx=Symbol.for("react.suspense"),gx=Symbol.for("react.memo"),xx=Symbol.for("react.lazy"),Eu=Symbol.iterator;function yx(e){return e===null||typeof e!="object"?null:(e=Eu&&e[Eu]||e["@@iterator"],typeof e=="function"?e:null)}var rf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},of=Object.assign,sf={};function Ur(e,t,n){this.props=e,this.context=t,this.refs=sf,this.updater=n||rf}Ur.prototype.isReactComponent={};Ur.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ur.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function lf(){}lf.prototype=Ur.prototype;function oc(e,t,n){this.props=e,this.context=t,this.refs=sf,this.updater=n||rf}var sc=oc.prototype=new lf;sc.constructor=oc;of(sc,Ur.prototype);sc.isPureReactComponent=!0;var zu=Array.isArray,af=Object.prototype.hasOwnProperty,lc={current:null},cf={key:!0,ref:!0,__self:!0,__source:!0};function uf(e,t,n){var r,i={},s=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(s=""+t.key),t)af.call(t,r)&&!cf.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ji,type:e,key:s,ref:l,props:i,_owner:lc.current}}function vx(e,t){return{$$typeof:Ji,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ac(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ji}function bx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Tu=/\/+/g;function Xs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?bx(""+e.key):t.toString(36)}function No(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ji:case ax:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Xs(l,0):r,zu(i)?(n="",e!=null&&(n=e.replace(Tu,"$&/")+"/"),No(i,t,n,"",function(u){return u})):i!=null&&(ac(i)&&(i=vx(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Tu,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",zu(e))for(var a=0;a<e.length;a++){s=e[a];var c=r+Xs(s,a);l+=No(s,t,n,c,i)}else if(c=yx(e),typeof c=="function")for(e=c.call(e),a=0;!(s=e.next()).done;)s=s.value,c=r+Xs(s,a++),l+=No(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function io(e,t,n){if(e==null)return e;var r=[],i=0;return No(e,r,"","",function(s){return t.call(n,s,i++)}),r}function kx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var nt={current:null},Eo={transition:null},jx={ReactCurrentDispatcher:nt,ReactCurrentBatchConfig:Eo,ReactCurrentOwner:lc};function df(){throw Error("act(...) is not supported in production builds of React.")}fe.Children={map:io,forEach:function(e,t,n){io(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return io(e,function(){t++}),t},toArray:function(e){return io(e,function(t){return t})||[]},only:function(e){if(!ac(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};fe.Component=Ur;fe.Fragment=cx;fe.Profiler=dx;fe.PureComponent=oc;fe.StrictMode=ux;fe.Suspense=hx;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jx;fe.act=df;fe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=of({},e.props),i=e.key,s=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,l=lc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)af.call(t,c)&&!cf.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ji,type:e.type,key:i,ref:s,props:r,_owner:l}};fe.createContext=function(e){return e={$$typeof:fx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:px,_context:e},e.Consumer=e};fe.createElement=uf;fe.createFactory=function(e){var t=uf.bind(null,e);return t.type=e,t};fe.createRef=function(){return{current:null}};fe.forwardRef=function(e){return{$$typeof:mx,render:e}};fe.isValidElement=ac;fe.lazy=function(e){return{$$typeof:xx,_payload:{_status:-1,_result:e},_init:kx}};fe.memo=function(e,t){return{$$typeof:gx,type:e,compare:t===void 0?null:t}};fe.startTransition=function(e){var t=Eo.transition;Eo.transition={};try{e()}finally{Eo.transition=t}};fe.unstable_act=df;fe.useCallback=function(e,t){return nt.current.useCallback(e,t)};fe.useContext=function(e){return nt.current.useContext(e)};fe.useDebugValue=function(){};fe.useDeferredValue=function(e){return nt.current.useDeferredValue(e)};fe.useEffect=function(e,t){return nt.current.useEffect(e,t)};fe.useId=function(){return nt.current.useId()};fe.useImperativeHandle=function(e,t,n){return nt.current.useImperativeHandle(e,t,n)};fe.useInsertionEffect=function(e,t){return nt.current.useInsertionEffect(e,t)};fe.useLayoutEffect=function(e,t){return nt.current.useLayoutEffect(e,t)};fe.useMemo=function(e,t){return nt.current.useMemo(e,t)};fe.useReducer=function(e,t,n){return nt.current.useReducer(e,t,n)};fe.useRef=function(e){return nt.current.useRef(e)};fe.useState=function(e){return nt.current.useState(e)};fe.useSyncExternalStore=function(e,t,n){return nt.current.useSyncExternalStore(e,t,n)};fe.useTransition=function(){return nt.current.useTransition()};fe.version="18.3.1";nf.exports=fe;var _=nf.exports;const Lt=js(_),wx=lx({__proto__:null,default:Lt},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _x=_,Sx=Symbol.for("react.element"),Cx=Symbol.for("react.fragment"),Nx=Object.prototype.hasOwnProperty,Ex=_x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zx={key:!0,ref:!0,__self:!0,__source:!0};function pf(e,t,n){var r,i={},s=null,l=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Nx.call(t,r)&&!zx.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Sx,type:e,key:s,ref:l,props:i,_owner:Ex.current}}ws.Fragment=Cx;ws.jsx=pf;ws.jsxs=pf;tf.exports=ws;var o=tf.exports,Wl={},ff={exports:{}},jt={},mf={exports:{}},hf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,I){var b=$.length;$.push(I);e:for(;0<b;){var U=b-1>>>1,J=$[U];if(0<i(J,I))$[U]=I,$[b]=J,b=U;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var I=$[0],b=$.pop();if(b!==I){$[0]=b;e:for(var U=0,J=$.length,S=J>>>1;U<S;){var oe=2*(U+1)-1,L=$[oe],X=oe+1,F=$[X];if(0>i(L,b))X<J&&0>i(F,L)?($[U]=F,$[X]=b,U=X):($[U]=L,$[oe]=b,U=oe);else if(X<J&&0>i(F,b))$[U]=F,$[X]=b,U=X;else break e}}return I}function i($,I){var b=$.sortIndex-I.sortIndex;return b!==0?b:$.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var c=[],u=[],d=1,p=null,f=3,m=!1,w=!1,j=!1,N=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y($){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=$)r(u),I.sortIndex=I.expirationTime,t(c,I);else break;I=n(u)}}function P($){if(j=!1,y($),!w)if(n(c)!==null)w=!0,Y(C);else{var I=n(u);I!==null&&A(P,I.startTime-$)}}function C($,I){w=!1,j&&(j=!1,g(T),T=-1),m=!0;var b=f;try{for(y(I),p=n(c);p!==null&&(!(p.expirationTime>I)||$&&!k());){var U=p.callback;if(typeof U=="function"){p.callback=null,f=p.priorityLevel;var J=U(p.expirationTime<=I);I=e.unstable_now(),typeof J=="function"?p.callback=J:p===n(c)&&r(c),y(I)}else r(c);p=n(c)}if(p!==null)var S=!0;else{var oe=n(u);oe!==null&&A(P,oe.startTime-I),S=!1}return S}finally{p=null,f=b,m=!1}}var x=!1,v=null,T=-1,R=5,E=-1;function k(){return!(e.unstable_now()-E<R)}function z(){if(v!==null){var $=e.unstable_now();E=$;var I=!0;try{I=v(!0,$)}finally{I?M():(x=!1,v=null)}}else x=!1}var M;if(typeof h=="function")M=function(){h(z)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,B=q.port2;q.port1.onmessage=z,M=function(){B.postMessage(null)}}else M=function(){N(z,0)};function Y($){v=$,x||(x=!0,M())}function A($,I){T=N(function(){$(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){w||m||(w=!0,Y(C))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function($){switch(f){case 1:case 2:case 3:var I=3;break;default:I=f}var b=f;f=I;try{return $()}finally{f=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,I){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var b=f;f=$;try{return I()}finally{f=b}},e.unstable_scheduleCallback=function($,I,b){var U=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?U+b:U):b=U,$){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=b+J,$={id:d++,callback:I,priorityLevel:$,startTime:b,expirationTime:J,sortIndex:-1},b>U?($.sortIndex=b,t(u,$),n(c)===null&&$===n(u)&&(j?(g(T),T=-1):j=!0,A(P,b-U))):($.sortIndex=J,t(c,$),w||m||(w=!0,Y(C))),$},e.unstable_shouldYield=k,e.unstable_wrapCallback=function($){var I=f;return function(){var b=f;f=I;try{return $.apply(this,arguments)}finally{f=b}}}})(hf);mf.exports=hf;var Tx=mf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Px=_,kt=Tx;function K(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gf=new Set,_i={};function or(e,t){Ar(e,t),Ar(e+"Capture",t)}function Ar(e,t){for(_i[e]=t,e=0;e<t.length;e++)gf.add(t[e])}var an=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hl=Object.prototype.hasOwnProperty,Lx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pu={},Lu={};function Ax(e){return Hl.call(Lu,e)?!0:Hl.call(Pu,e)?!1:Lx.test(e)?Lu[e]=!0:(Pu[e]=!0,!1)}function Rx(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ix(e,t,n,r){if(t===null||typeof t>"u"||Rx(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function rt(e,t,n,r,i,s,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=l}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ke[e]=new rt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ke[t]=new rt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ke[e]=new rt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ke[e]=new rt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ke[e]=new rt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ke[e]=new rt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ke[e]=new rt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ke[e]=new rt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ke[e]=new rt(e,5,!1,e.toLowerCase(),null,!1,!1)});var cc=/[\-:]([a-z])/g;function uc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(cc,uc);Ke[t]=new rt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(cc,uc);Ke[t]=new rt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(cc,uc);Ke[t]=new rt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ke[e]=new rt(e,1,!1,e.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ke[e]=new rt(e,1,!1,e.toLowerCase(),null,!0,!0)});function dc(e,t,n,r){var i=Ke.hasOwnProperty(t)?Ke[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ix(t,n,i,r)&&(n=null),r||i===null?Ax(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pn=Px.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oo=Symbol.for("react.element"),pr=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),pc=Symbol.for("react.strict_mode"),ql=Symbol.for("react.profiler"),xf=Symbol.for("react.provider"),yf=Symbol.for("react.context"),fc=Symbol.for("react.forward_ref"),Jl=Symbol.for("react.suspense"),Kl=Symbol.for("react.suspense_list"),mc=Symbol.for("react.memo"),gn=Symbol.for("react.lazy"),vf=Symbol.for("react.offscreen"),Au=Symbol.iterator;function Kr(e){return e===null||typeof e!="object"?null:(e=Au&&e[Au]||e["@@iterator"],typeof e=="function"?e:null)}var Le=Object.assign,Zs;function si(e){if(Zs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Zs=t&&t[1]||""}return`
`+Zs+e}var el=!1;function tl(e,t){if(!e||el)return"";el=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),l=i.length-1,a=s.length-1;1<=l&&0<=a&&i[l]!==s[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==s[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==s[a]){var c=`
`+i[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=a);break}}}finally{el=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?si(e):""}function Mx(e){switch(e.tag){case 5:return si(e.type);case 16:return si("Lazy");case 13:return si("Suspense");case 19:return si("SuspenseList");case 0:case 2:case 15:return e=tl(e.type,!1),e;case 11:return e=tl(e.type.render,!1),e;case 1:return e=tl(e.type,!0),e;default:return""}}function Ql(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fr:return"Fragment";case pr:return"Portal";case ql:return"Profiler";case pc:return"StrictMode";case Jl:return"Suspense";case Kl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yf:return(e.displayName||"Context")+".Consumer";case xf:return(e._context.displayName||"Context")+".Provider";case fc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mc:return t=e.displayName||null,t!==null?t:Ql(e.type)||"Memo";case gn:t=e._payload,e=e._init;try{return Ql(e(t))}catch{}}return null}function Ox(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ql(t);case 8:return t===pc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function An(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $x(e){var t=bf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,s.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function so(e){e._valueTracker||(e._valueTracker=$x(e))}function kf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=bf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Vo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Gl(e,t){var n=t.checked;return Le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ru(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=An(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jf(e,t){t=t.checked,t!=null&&dc(e,"checked",t,!1)}function Yl(e,t){jf(e,t);var n=An(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Xl(e,t.type,An(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Iu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Xl(e,t,n){(t!=="number"||Vo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var li=Array.isArray;function Sr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+An(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(K(91));return Le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Mu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(K(92));if(li(n)){if(1<n.length)throw Error(K(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:An(n)}}function wf(e,t){var n=An(t.value),r=An(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ou(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function _f(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ea(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?_f(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lo,Sf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(lo=lo||document.createElement("div"),lo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=lo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Si(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var di={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dx=["Webkit","ms","Moz","O"];Object.keys(di).forEach(function(e){Dx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),di[t]=di[e]})});function Cf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||di.hasOwnProperty(e)&&di[e]?(""+t).trim():t+"px"}function Nf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Cf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Fx=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ta(e,t){if(t){if(Fx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(K(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(K(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(K(61))}if(t.style!=null&&typeof t.style!="object")throw Error(K(62))}}function na(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ra=null;function hc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ia=null,Cr=null,Nr=null;function $u(e){if(e=Gi(e)){if(typeof ia!="function")throw Error(K(280));var t=e.stateNode;t&&(t=Es(t),ia(e.stateNode,e.type,t))}}function Ef(e){Cr?Nr?Nr.push(e):Nr=[e]:Cr=e}function zf(){if(Cr){var e=Cr,t=Nr;if(Nr=Cr=null,$u(e),t)for(e=0;e<t.length;e++)$u(t[e])}}function Tf(e,t){return e(t)}function Pf(){}var nl=!1;function Lf(e,t,n){if(nl)return e(t,n);nl=!0;try{return Tf(e,t,n)}finally{nl=!1,(Cr!==null||Nr!==null)&&(Pf(),zf())}}function Ci(e,t){var n=e.stateNode;if(n===null)return null;var r=Es(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(K(231,t,typeof n));return n}var oa=!1;if(an)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){oa=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{oa=!1}function Bx(e,t,n,r,i,s,l,a,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var pi=!1,Wo=null,Ho=!1,sa=null,Ux={onError:function(e){pi=!0,Wo=e}};function Vx(e,t,n,r,i,s,l,a,c){pi=!1,Wo=null,Bx.apply(Ux,arguments)}function Wx(e,t,n,r,i,s,l,a,c){if(Vx.apply(this,arguments),pi){if(pi){var u=Wo;pi=!1,Wo=null}else throw Error(K(198));Ho||(Ho=!0,sa=u)}}function sr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Af(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Du(e){if(sr(e)!==e)throw Error(K(188))}function Hx(e){var t=e.alternate;if(!t){if(t=sr(e),t===null)throw Error(K(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Du(i),e;if(s===r)return Du(i),t;s=s.sibling}throw Error(K(188))}if(n.return!==r.return)n=i,r=s;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=s;break}if(a===r){l=!0,r=i,n=s;break}a=a.sibling}if(!l){for(a=s.child;a;){if(a===n){l=!0,n=s,r=i;break}if(a===r){l=!0,r=s,n=i;break}a=a.sibling}if(!l)throw Error(K(189))}}if(n.alternate!==r)throw Error(K(190))}if(n.tag!==3)throw Error(K(188));return n.stateNode.current===n?e:t}function Rf(e){return e=Hx(e),e!==null?If(e):null}function If(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=If(e);if(t!==null)return t;e=e.sibling}return null}var Mf=kt.unstable_scheduleCallback,Fu=kt.unstable_cancelCallback,qx=kt.unstable_shouldYield,Jx=kt.unstable_requestPaint,Ie=kt.unstable_now,Kx=kt.unstable_getCurrentPriorityLevel,gc=kt.unstable_ImmediatePriority,Of=kt.unstable_UserBlockingPriority,qo=kt.unstable_NormalPriority,Qx=kt.unstable_LowPriority,$f=kt.unstable_IdlePriority,_s=null,Kt=null;function Gx(e){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(_s,e,void 0,(e.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:Zx,Yx=Math.log,Xx=Math.LN2;function Zx(e){return e>>>=0,e===0?32:31-(Yx(e)/Xx|0)|0}var ao=64,co=4194304;function ai(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Jo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=ai(a):(s&=l,s!==0&&(r=ai(s)))}else l=n&~i,l!==0?r=ai(l):s!==0&&(r=ai(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ft(t),i=1<<n,r|=e[n],t&=~i;return r}function ey(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ty(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-Ft(s),a=1<<l,c=i[l];c===-1?(!(a&n)||a&r)&&(i[l]=ey(a,t)):c<=t&&(e.expiredLanes|=a),s&=~a}}function la(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Df(){var e=ao;return ao<<=1,!(ao&4194240)&&(ao=64),e}function rl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ki(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ft(t),e[t]=n}function ny(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ft(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function xc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ft(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var be=0;function Ff(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bf,yc,Uf,Vf,Wf,aa=!1,uo=[],_n=null,Sn=null,Cn=null,Ni=new Map,Ei=new Map,yn=[],ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bu(e,t){switch(e){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":Ni.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ei.delete(t.pointerId)}}function Gr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Gi(t),t!==null&&yc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function iy(e,t,n,r,i){switch(t){case"focusin":return _n=Gr(_n,e,t,n,r,i),!0;case"dragenter":return Sn=Gr(Sn,e,t,n,r,i),!0;case"mouseover":return Cn=Gr(Cn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ni.set(s,Gr(Ni.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ei.set(s,Gr(Ei.get(s)||null,e,t,n,r,i)),!0}return!1}function Hf(e){var t=Jn(e.target);if(t!==null){var n=sr(t);if(n!==null){if(t=n.tag,t===13){if(t=Af(n),t!==null){e.blockedOn=t,Wf(e.priority,function(){Uf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ca(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ra=r,n.target.dispatchEvent(r),ra=null}else return t=Gi(n),t!==null&&yc(t),e.blockedOn=n,!1;t.shift()}return!0}function Uu(e,t,n){zo(e)&&n.delete(t)}function oy(){aa=!1,_n!==null&&zo(_n)&&(_n=null),Sn!==null&&zo(Sn)&&(Sn=null),Cn!==null&&zo(Cn)&&(Cn=null),Ni.forEach(Uu),Ei.forEach(Uu)}function Yr(e,t){e.blockedOn===t&&(e.blockedOn=null,aa||(aa=!0,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,oy)))}function zi(e){function t(i){return Yr(i,e)}if(0<uo.length){Yr(uo[0],e);for(var n=1;n<uo.length;n++){var r=uo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_n!==null&&Yr(_n,e),Sn!==null&&Yr(Sn,e),Cn!==null&&Yr(Cn,e),Ni.forEach(t),Ei.forEach(t),n=0;n<yn.length;n++)r=yn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yn.length&&(n=yn[0],n.blockedOn===null);)Hf(n),n.blockedOn===null&&yn.shift()}var Er=pn.ReactCurrentBatchConfig,Ko=!0;function sy(e,t,n,r){var i=be,s=Er.transition;Er.transition=null;try{be=1,vc(e,t,n,r)}finally{be=i,Er.transition=s}}function ly(e,t,n,r){var i=be,s=Er.transition;Er.transition=null;try{be=4,vc(e,t,n,r)}finally{be=i,Er.transition=s}}function vc(e,t,n,r){if(Ko){var i=ca(e,t,n,r);if(i===null)fl(e,t,r,Qo,n),Bu(e,r);else if(iy(i,e,t,n,r))r.stopPropagation();else if(Bu(e,r),t&4&&-1<ry.indexOf(e)){for(;i!==null;){var s=Gi(i);if(s!==null&&Bf(s),s=ca(e,t,n,r),s===null&&fl(e,t,r,Qo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else fl(e,t,r,null,n)}}var Qo=null;function ca(e,t,n,r){if(Qo=null,e=hc(r),e=Jn(e),e!==null)if(t=sr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Af(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qo=e,null}function qf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kx()){case gc:return 1;case Of:return 4;case qo:case Qx:return 16;case $f:return 536870912;default:return 16}default:return 16}}var bn=null,bc=null,To=null;function Jf(){if(To)return To;var e,t=bc,n=t.length,r,i="value"in bn?bn.value:bn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[s-r];r++);return To=i.slice(e,1<r?1-r:void 0)}function Po(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function po(){return!0}function Vu(){return!1}function wt(e){function t(n,r,i,s,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?po:Vu,this.isPropagationStopped=Vu,this}return Le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),t}var Vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kc=wt(Vr),Qi=Le({},Vr,{view:0,detail:0}),ay=wt(Qi),il,ol,Xr,Ss=Le({},Qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xr&&(Xr&&e.type==="mousemove"?(il=e.screenX-Xr.screenX,ol=e.screenY-Xr.screenY):ol=il=0,Xr=e),il)},movementY:function(e){return"movementY"in e?e.movementY:ol}}),Wu=wt(Ss),cy=Le({},Ss,{dataTransfer:0}),uy=wt(cy),dy=Le({},Qi,{relatedTarget:0}),sl=wt(dy),py=Le({},Vr,{animationName:0,elapsedTime:0,pseudoElement:0}),fy=wt(py),my=Le({},Vr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hy=wt(my),gy=Le({},Vr,{data:0}),Hu=wt(gy),xy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function by(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vy[e])?!!t[e]:!1}function jc(){return by}var ky=Le({},Qi,{key:function(e){if(e.key){var t=xy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Po(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jc,charCode:function(e){return e.type==="keypress"?Po(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Po(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jy=wt(ky),wy=Le({},Ss,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qu=wt(wy),_y=Le({},Qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jc}),Sy=wt(_y),Cy=Le({},Vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ny=wt(Cy),Ey=Le({},Ss,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zy=wt(Ey),Ty=[9,13,27,32],wc=an&&"CompositionEvent"in window,fi=null;an&&"documentMode"in document&&(fi=document.documentMode);var Py=an&&"TextEvent"in window&&!fi,Kf=an&&(!wc||fi&&8<fi&&11>=fi),Ju=" ",Ku=!1;function Qf(e,t){switch(e){case"keyup":return Ty.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mr=!1;function Ly(e,t){switch(e){case"compositionend":return Gf(t);case"keypress":return t.which!==32?null:(Ku=!0,Ju);case"textInput":return e=t.data,e===Ju&&Ku?null:e;default:return null}}function Ay(e,t){if(mr)return e==="compositionend"||!wc&&Qf(e,t)?(e=Jf(),To=bc=bn=null,mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kf&&t.locale!=="ko"?null:t.data;default:return null}}var Ry={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ry[e.type]:t==="textarea"}function Yf(e,t,n,r){Ef(r),t=Go(t,"onChange"),0<t.length&&(n=new kc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var mi=null,Ti=null;function Iy(e){am(e,0)}function Cs(e){var t=xr(e);if(kf(t))return e}function My(e,t){if(e==="change")return t}var Xf=!1;if(an){var ll;if(an){var al="oninput"in document;if(!al){var Gu=document.createElement("div");Gu.setAttribute("oninput","return;"),al=typeof Gu.oninput=="function"}ll=al}else ll=!1;Xf=ll&&(!document.documentMode||9<document.documentMode)}function Yu(){mi&&(mi.detachEvent("onpropertychange",Zf),Ti=mi=null)}function Zf(e){if(e.propertyName==="value"&&Cs(Ti)){var t=[];Yf(t,Ti,e,hc(e)),Lf(Iy,t)}}function Oy(e,t,n){e==="focusin"?(Yu(),mi=t,Ti=n,mi.attachEvent("onpropertychange",Zf)):e==="focusout"&&Yu()}function $y(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cs(Ti)}function Dy(e,t){if(e==="click")return Cs(t)}function Fy(e,t){if(e==="input"||e==="change")return Cs(t)}function By(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ut=typeof Object.is=="function"?Object.is:By;function Pi(e,t){if(Ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Hl.call(t,i)||!Ut(e[i],t[i]))return!1}return!0}function Xu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zu(e,t){var n=Xu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xu(n)}}function em(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?em(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function tm(){for(var e=window,t=Vo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vo(e.document)}return t}function _c(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Uy(e){var t=tm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&em(n.ownerDocument.documentElement,n)){if(r!==null&&_c(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Zu(n,s);var l=Zu(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vy=an&&"documentMode"in document&&11>=document.documentMode,hr=null,ua=null,hi=null,da=!1;function ed(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;da||hr==null||hr!==Vo(r)||(r=hr,"selectionStart"in r&&_c(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hi&&Pi(hi,r)||(hi=r,r=Go(ua,"onSelect"),0<r.length&&(t=new kc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hr)))}function fo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gr={animationend:fo("Animation","AnimationEnd"),animationiteration:fo("Animation","AnimationIteration"),animationstart:fo("Animation","AnimationStart"),transitionend:fo("Transition","TransitionEnd")},cl={},nm={};an&&(nm=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function Ns(e){if(cl[e])return cl[e];if(!gr[e])return e;var t=gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in nm)return cl[e]=t[n];return e}var rm=Ns("animationend"),im=Ns("animationiteration"),om=Ns("animationstart"),sm=Ns("transitionend"),lm=new Map,td="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(e,t){lm.set(e,t),or(t,[e])}for(var ul=0;ul<td.length;ul++){var dl=td[ul],Wy=dl.toLowerCase(),Hy=dl[0].toUpperCase()+dl.slice(1);On(Wy,"on"+Hy)}On(rm,"onAnimationEnd");On(im,"onAnimationIteration");On(om,"onAnimationStart");On("dblclick","onDoubleClick");On("focusin","onFocus");On("focusout","onBlur");On(sm,"onTransitionEnd");Ar("onMouseEnter",["mouseout","mouseover"]);Ar("onMouseLeave",["mouseout","mouseover"]);Ar("onPointerEnter",["pointerout","pointerover"]);Ar("onPointerLeave",["pointerout","pointerover"]);or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));or("onBeforeInput",["compositionend","keypress","textInput","paste"]);or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qy=new Set("cancel close invalid load scroll toggle".split(" ").concat(ci));function nd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Wx(r,t,void 0,e),e.currentTarget=null}function am(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==s&&i.isPropagationStopped())break e;nd(i,a,u),s=c}else for(l=0;l<r.length;l++){if(a=r[l],c=a.instance,u=a.currentTarget,a=a.listener,c!==s&&i.isPropagationStopped())break e;nd(i,a,u),s=c}}}if(Ho)throw e=sa,Ho=!1,sa=null,e}function _e(e,t){var n=t[ga];n===void 0&&(n=t[ga]=new Set);var r=e+"__bubble";n.has(r)||(cm(t,e,2,!1),n.add(r))}function pl(e,t,n){var r=0;t&&(r|=4),cm(n,e,r,t)}var mo="_reactListening"+Math.random().toString(36).slice(2);function Li(e){if(!e[mo]){e[mo]=!0,gf.forEach(function(n){n!=="selectionchange"&&(qy.has(n)||pl(n,!1,e),pl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mo]||(t[mo]=!0,pl("selectionchange",!1,t))}}function cm(e,t,n,r){switch(qf(t)){case 1:var i=sy;break;case 4:i=ly;break;default:i=vc}n=i.bind(null,t,n,e),i=void 0,!oa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function fl(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Jn(a),l===null)return;if(c=l.tag,c===5||c===6){r=s=l;continue e}a=a.parentNode}}r=r.return}Lf(function(){var u=s,d=hc(n),p=[];e:{var f=lm.get(e);if(f!==void 0){var m=kc,w=e;switch(e){case"keypress":if(Po(n)===0)break e;case"keydown":case"keyup":m=jy;break;case"focusin":w="focus",m=sl;break;case"focusout":w="blur",m=sl;break;case"beforeblur":case"afterblur":m=sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Wu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=uy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Sy;break;case rm:case im:case om:m=fy;break;case sm:m=Ny;break;case"scroll":m=ay;break;case"wheel":m=zy;break;case"copy":case"cut":case"paste":m=hy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=qu}var j=(t&4)!==0,N=!j&&e==="scroll",g=j?f!==null?f+"Capture":null:f;j=[];for(var h=u,y;h!==null;){y=h;var P=y.stateNode;if(y.tag===5&&P!==null&&(y=P,g!==null&&(P=Ci(h,g),P!=null&&j.push(Ai(h,P,y)))),N)break;h=h.return}0<j.length&&(f=new m(f,w,null,n,d),p.push({event:f,listeners:j}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==ra&&(w=n.relatedTarget||n.fromElement)&&(Jn(w)||w[cn]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(w=n.relatedTarget||n.toElement,m=u,w=w?Jn(w):null,w!==null&&(N=sr(w),w!==N||w.tag!==5&&w.tag!==6)&&(w=null)):(m=null,w=u),m!==w)){if(j=Wu,P="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(j=qu,P="onPointerLeave",g="onPointerEnter",h="pointer"),N=m==null?f:xr(m),y=w==null?f:xr(w),f=new j(P,h+"leave",m,n,d),f.target=N,f.relatedTarget=y,P=null,Jn(d)===u&&(j=new j(g,h+"enter",w,n,d),j.target=y,j.relatedTarget=N,P=j),N=P,m&&w)t:{for(j=m,g=w,h=0,y=j;y;y=ar(y))h++;for(y=0,P=g;P;P=ar(P))y++;for(;0<h-y;)j=ar(j),h--;for(;0<y-h;)g=ar(g),y--;for(;h--;){if(j===g||g!==null&&j===g.alternate)break t;j=ar(j),g=ar(g)}j=null}else j=null;m!==null&&rd(p,f,m,j,!1),w!==null&&N!==null&&rd(p,N,w,j,!0)}}e:{if(f=u?xr(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var C=My;else if(Qu(f))if(Xf)C=Fy;else{C=$y;var x=Oy}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Dy);if(C&&(C=C(e,u))){Yf(p,C,n,d);break e}x&&x(e,f,u),e==="focusout"&&(x=f._wrapperState)&&x.controlled&&f.type==="number"&&Xl(f,"number",f.value)}switch(x=u?xr(u):window,e){case"focusin":(Qu(x)||x.contentEditable==="true")&&(hr=x,ua=u,hi=null);break;case"focusout":hi=ua=hr=null;break;case"mousedown":da=!0;break;case"contextmenu":case"mouseup":case"dragend":da=!1,ed(p,n,d);break;case"selectionchange":if(Vy)break;case"keydown":case"keyup":ed(p,n,d)}var v;if(wc)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else mr?Qf(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Kf&&n.locale!=="ko"&&(mr||T!=="onCompositionStart"?T==="onCompositionEnd"&&mr&&(v=Jf()):(bn=d,bc="value"in bn?bn.value:bn.textContent,mr=!0)),x=Go(u,T),0<x.length&&(T=new Hu(T,e,null,n,d),p.push({event:T,listeners:x}),v?T.data=v:(v=Gf(n),v!==null&&(T.data=v)))),(v=Py?Ly(e,n):Ay(e,n))&&(u=Go(u,"onBeforeInput"),0<u.length&&(d=new Hu("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=v))}am(p,t)})}function Ai(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Go(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ci(e,n),s!=null&&r.unshift(Ai(e,s,i)),s=Ci(e,t),s!=null&&r.push(Ai(e,s,i))),e=e.return}return r}function ar(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function rd(e,t,n,r,i){for(var s=t._reactName,l=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,i?(c=Ci(n,s),c!=null&&l.unshift(Ai(n,c,a))):i||(c=Ci(n,s),c!=null&&l.push(Ai(n,c,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Jy=/\r\n?/g,Ky=/\u0000|\uFFFD/g;function id(e){return(typeof e=="string"?e:""+e).replace(Jy,`
`).replace(Ky,"")}function ho(e,t,n){if(t=id(t),id(e)!==t&&n)throw Error(K(425))}function Yo(){}var pa=null,fa=null;function ma(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ha=typeof setTimeout=="function"?setTimeout:void 0,Qy=typeof clearTimeout=="function"?clearTimeout:void 0,od=typeof Promise=="function"?Promise:void 0,Gy=typeof queueMicrotask=="function"?queueMicrotask:typeof od<"u"?function(e){return od.resolve(null).then(e).catch(Yy)}:ha;function Yy(e){setTimeout(function(){throw e})}function ml(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),zi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zi(t)}function Nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function sd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Wr=Math.random().toString(36).slice(2),qt="__reactFiber$"+Wr,Ri="__reactProps$"+Wr,cn="__reactContainer$"+Wr,ga="__reactEvents$"+Wr,Xy="__reactListeners$"+Wr,Zy="__reactHandles$"+Wr;function Jn(e){var t=e[qt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[cn]||n[qt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sd(e);e!==null;){if(n=e[qt])return n;e=sd(e)}return t}e=n,n=e.parentNode}return null}function Gi(e){return e=e[qt]||e[cn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(K(33))}function Es(e){return e[Ri]||null}var xa=[],yr=-1;function $n(e){return{current:e}}function Se(e){0>yr||(e.current=xa[yr],xa[yr]=null,yr--)}function je(e,t){yr++,xa[yr]=e.current,e.current=t}var Rn={},Xe=$n(Rn),at=$n(!1),er=Rn;function Rr(e,t){var n=e.type.contextTypes;if(!n)return Rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ct(e){return e=e.childContextTypes,e!=null}function Xo(){Se(at),Se(Xe)}function ld(e,t,n){if(Xe.current!==Rn)throw Error(K(168));je(Xe,t),je(at,n)}function um(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(K(108,Ox(e)||"Unknown",i));return Le({},n,r)}function Zo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,er=Xe.current,je(Xe,e),je(at,at.current),!0}function ad(e,t,n){var r=e.stateNode;if(!r)throw Error(K(169));n?(e=um(e,t,er),r.__reactInternalMemoizedMergedChildContext=e,Se(at),Se(Xe),je(Xe,e)):Se(at),je(at,n)}var en=null,zs=!1,hl=!1;function dm(e){en===null?en=[e]:en.push(e)}function ev(e){zs=!0,dm(e)}function Dn(){if(!hl&&en!==null){hl=!0;var e=0,t=be;try{var n=en;for(be=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}en=null,zs=!1}catch(i){throw en!==null&&(en=en.slice(e+1)),Mf(gc,Dn),i}finally{be=t,hl=!1}}return null}var vr=[],br=0,es=null,ts=0,Et=[],zt=0,tr=null,nn=1,rn="";function Wn(e,t){vr[br++]=ts,vr[br++]=es,es=e,ts=t}function pm(e,t,n){Et[zt++]=nn,Et[zt++]=rn,Et[zt++]=tr,tr=e;var r=nn;e=rn;var i=32-Ft(r)-1;r&=~(1<<i),n+=1;var s=32-Ft(t)+i;if(30<s){var l=i-i%5;s=(r&(1<<l)-1).toString(32),r>>=l,i-=l,nn=1<<32-Ft(t)+i|n<<i|r,rn=s+e}else nn=1<<s|n<<i|r,rn=e}function Sc(e){e.return!==null&&(Wn(e,1),pm(e,1,0))}function Cc(e){for(;e===es;)es=vr[--br],vr[br]=null,ts=vr[--br],vr[br]=null;for(;e===tr;)tr=Et[--zt],Et[zt]=null,rn=Et[--zt],Et[zt]=null,nn=Et[--zt],Et[zt]=null}var bt=null,yt=null,Ce=!1,Dt=null;function fm(e,t){var n=Pt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function cd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,bt=e,yt=Nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,bt=e,yt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=tr!==null?{id:nn,overflow:rn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,bt=e,yt=null,!0):!1;default:return!1}}function ya(e){return(e.mode&1)!==0&&(e.flags&128)===0}function va(e){if(Ce){var t=yt;if(t){var n=t;if(!cd(e,t)){if(ya(e))throw Error(K(418));t=Nn(n.nextSibling);var r=bt;t&&cd(e,t)?fm(r,n):(e.flags=e.flags&-4097|2,Ce=!1,bt=e)}}else{if(ya(e))throw Error(K(418));e.flags=e.flags&-4097|2,Ce=!1,bt=e}}}function ud(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;bt=e}function go(e){if(e!==bt)return!1;if(!Ce)return ud(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ma(e.type,e.memoizedProps)),t&&(t=yt)){if(ya(e))throw mm(),Error(K(418));for(;t;)fm(e,t),t=Nn(t.nextSibling)}if(ud(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){yt=Nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}yt=null}}else yt=bt?Nn(e.stateNode.nextSibling):null;return!0}function mm(){for(var e=yt;e;)e=Nn(e.nextSibling)}function Ir(){yt=bt=null,Ce=!1}function Nc(e){Dt===null?Dt=[e]:Dt.push(e)}var tv=pn.ReactCurrentBatchConfig;function Zr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(K(309));var r=n.stateNode}if(!r)throw Error(K(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(l){var a=i.refs;l===null?delete a[s]:a[s]=l},t._stringRef=s,t)}if(typeof e!="string")throw Error(K(284));if(!n._owner)throw Error(K(290,e))}return e}function xo(e,t){throw e=Object.prototype.toString.call(t),Error(K(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function dd(e){var t=e._init;return t(e._payload)}function hm(e){function t(g,h){if(e){var y=g.deletions;y===null?(g.deletions=[h],g.flags|=16):y.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=Pn(g,h),g.index=0,g.sibling=null,g}function s(g,h,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<h?(g.flags|=2,h):y):(g.flags|=2,h)):(g.flags|=1048576,h)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,h,y,P){return h===null||h.tag!==6?(h=jl(y,g.mode,P),h.return=g,h):(h=i(h,y),h.return=g,h)}function c(g,h,y,P){var C=y.type;return C===fr?d(g,h,y.props.children,P,y.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===gn&&dd(C)===h.type)?(P=i(h,y.props),P.ref=Zr(g,h,y),P.return=g,P):(P=$o(y.type,y.key,y.props,null,g.mode,P),P.ref=Zr(g,h,y),P.return=g,P)}function u(g,h,y,P){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=wl(y,g.mode,P),h.return=g,h):(h=i(h,y.children||[]),h.return=g,h)}function d(g,h,y,P,C){return h===null||h.tag!==7?(h=Yn(y,g.mode,P,C),h.return=g,h):(h=i(h,y),h.return=g,h)}function p(g,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=jl(""+h,g.mode,y),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case oo:return y=$o(h.type,h.key,h.props,null,g.mode,y),y.ref=Zr(g,null,h),y.return=g,y;case pr:return h=wl(h,g.mode,y),h.return=g,h;case gn:var P=h._init;return p(g,P(h._payload),y)}if(li(h)||Kr(h))return h=Yn(h,g.mode,y,null),h.return=g,h;xo(g,h)}return null}function f(g,h,y,P){var C=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return C!==null?null:a(g,h,""+y,P);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case oo:return y.key===C?c(g,h,y,P):null;case pr:return y.key===C?u(g,h,y,P):null;case gn:return C=y._init,f(g,h,C(y._payload),P)}if(li(y)||Kr(y))return C!==null?null:d(g,h,y,P,null);xo(g,y)}return null}function m(g,h,y,P,C){if(typeof P=="string"&&P!==""||typeof P=="number")return g=g.get(y)||null,a(h,g,""+P,C);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case oo:return g=g.get(P.key===null?y:P.key)||null,c(h,g,P,C);case pr:return g=g.get(P.key===null?y:P.key)||null,u(h,g,P,C);case gn:var x=P._init;return m(g,h,y,x(P._payload),C)}if(li(P)||Kr(P))return g=g.get(y)||null,d(h,g,P,C,null);xo(h,P)}return null}function w(g,h,y,P){for(var C=null,x=null,v=h,T=h=0,R=null;v!==null&&T<y.length;T++){v.index>T?(R=v,v=null):R=v.sibling;var E=f(g,v,y[T],P);if(E===null){v===null&&(v=R);break}e&&v&&E.alternate===null&&t(g,v),h=s(E,h,T),x===null?C=E:x.sibling=E,x=E,v=R}if(T===y.length)return n(g,v),Ce&&Wn(g,T),C;if(v===null){for(;T<y.length;T++)v=p(g,y[T],P),v!==null&&(h=s(v,h,T),x===null?C=v:x.sibling=v,x=v);return Ce&&Wn(g,T),C}for(v=r(g,v);T<y.length;T++)R=m(v,g,T,y[T],P),R!==null&&(e&&R.alternate!==null&&v.delete(R.key===null?T:R.key),h=s(R,h,T),x===null?C=R:x.sibling=R,x=R);return e&&v.forEach(function(k){return t(g,k)}),Ce&&Wn(g,T),C}function j(g,h,y,P){var C=Kr(y);if(typeof C!="function")throw Error(K(150));if(y=C.call(y),y==null)throw Error(K(151));for(var x=C=null,v=h,T=h=0,R=null,E=y.next();v!==null&&!E.done;T++,E=y.next()){v.index>T?(R=v,v=null):R=v.sibling;var k=f(g,v,E.value,P);if(k===null){v===null&&(v=R);break}e&&v&&k.alternate===null&&t(g,v),h=s(k,h,T),x===null?C=k:x.sibling=k,x=k,v=R}if(E.done)return n(g,v),Ce&&Wn(g,T),C;if(v===null){for(;!E.done;T++,E=y.next())E=p(g,E.value,P),E!==null&&(h=s(E,h,T),x===null?C=E:x.sibling=E,x=E);return Ce&&Wn(g,T),C}for(v=r(g,v);!E.done;T++,E=y.next())E=m(v,g,T,E.value,P),E!==null&&(e&&E.alternate!==null&&v.delete(E.key===null?T:E.key),h=s(E,h,T),x===null?C=E:x.sibling=E,x=E);return e&&v.forEach(function(z){return t(g,z)}),Ce&&Wn(g,T),C}function N(g,h,y,P){if(typeof y=="object"&&y!==null&&y.type===fr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case oo:e:{for(var C=y.key,x=h;x!==null;){if(x.key===C){if(C=y.type,C===fr){if(x.tag===7){n(g,x.sibling),h=i(x,y.props.children),h.return=g,g=h;break e}}else if(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===gn&&dd(C)===x.type){n(g,x.sibling),h=i(x,y.props),h.ref=Zr(g,x,y),h.return=g,g=h;break e}n(g,x);break}else t(g,x);x=x.sibling}y.type===fr?(h=Yn(y.props.children,g.mode,P,y.key),h.return=g,g=h):(P=$o(y.type,y.key,y.props,null,g.mode,P),P.ref=Zr(g,h,y),P.return=g,g=P)}return l(g);case pr:e:{for(x=y.key;h!==null;){if(h.key===x)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(g,h.sibling),h=i(h,y.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=wl(y,g.mode,P),h.return=g,g=h}return l(g);case gn:return x=y._init,N(g,h,x(y._payload),P)}if(li(y))return w(g,h,y,P);if(Kr(y))return j(g,h,y,P);xo(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,y),h.return=g,g=h):(n(g,h),h=jl(y,g.mode,P),h.return=g,g=h),l(g)):n(g,h)}return N}var Mr=hm(!0),gm=hm(!1),ns=$n(null),rs=null,kr=null,Ec=null;function zc(){Ec=kr=rs=null}function Tc(e){var t=ns.current;Se(ns),e._currentValue=t}function ba(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zr(e,t){rs=e,Ec=kr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(lt=!0),e.firstContext=null)}function Rt(e){var t=e._currentValue;if(Ec!==e)if(e={context:e,memoizedValue:t,next:null},kr===null){if(rs===null)throw Error(K(308));kr=e,rs.dependencies={lanes:0,firstContext:e}}else kr=kr.next=e;return t}var Kn=null;function Pc(e){Kn===null?Kn=[e]:Kn.push(e)}function xm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Pc(t)):(n.next=i.next,i.next=n),t.interleaved=n,un(e,r)}function un(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xn=!1;function Lc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ym(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function on(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function En(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,un(e,n)}return i=r.interleaved,i===null?(t.next=t,Pc(r)):(t.next=i.next,i.next=t),r.interleaved=t,un(e,n)}function Lo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xc(e,n)}}function pd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function is(e,t,n,r){var i=e.updateQueue;xn=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,u=c.next;c.next=null,l===null?s=u:l.next=u,l=c;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==l&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=c))}if(s!==null){var p=i.baseState;l=0,d=u=c=null,a=s;do{var f=a.lane,m=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,j=a;switch(f=t,m=n,j.tag){case 1:if(w=j.payload,typeof w=="function"){p=w.call(m,p,f);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=j.payload,f=typeof w=="function"?w.call(m,p,f):w,f==null)break e;p=Le({},p,f);break e;case 2:xn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=m,c=p):d=d.next=m,l|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);rr|=l,e.lanes=l,e.memoizedState=p}}function fd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(K(191,i));i.call(r)}}}var Yi={},Qt=$n(Yi),Ii=$n(Yi),Mi=$n(Yi);function Qn(e){if(e===Yi)throw Error(K(174));return e}function Ac(e,t){switch(je(Mi,t),je(Ii,e),je(Qt,Yi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ea(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ea(t,e)}Se(Qt),je(Qt,t)}function Or(){Se(Qt),Se(Ii),Se(Mi)}function vm(e){Qn(Mi.current);var t=Qn(Qt.current),n=ea(t,e.type);t!==n&&(je(Ii,e),je(Qt,n))}function Rc(e){Ii.current===e&&(Se(Qt),Se(Ii))}var ze=$n(0);function os(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gl=[];function Ic(){for(var e=0;e<gl.length;e++)gl[e]._workInProgressVersionPrimary=null;gl.length=0}var Ao=pn.ReactCurrentDispatcher,xl=pn.ReactCurrentBatchConfig,nr=0,Pe=null,Fe=null,We=null,ss=!1,gi=!1,Oi=0,nv=0;function Qe(){throw Error(K(321))}function Mc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ut(e[n],t[n]))return!1;return!0}function Oc(e,t,n,r,i,s){if(nr=s,Pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ao.current=e===null||e.memoizedState===null?sv:lv,e=n(r,i),gi){s=0;do{if(gi=!1,Oi=0,25<=s)throw Error(K(301));s+=1,We=Fe=null,t.updateQueue=null,Ao.current=av,e=n(r,i)}while(gi)}if(Ao.current=ls,t=Fe!==null&&Fe.next!==null,nr=0,We=Fe=Pe=null,ss=!1,t)throw Error(K(300));return e}function $c(){var e=Oi!==0;return Oi=0,e}function Wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Pe.memoizedState=We=e:We=We.next=e,We}function It(){if(Fe===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=We===null?Pe.memoizedState:We.next;if(t!==null)We=t,Fe=e;else{if(e===null)throw Error(K(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},We===null?Pe.memoizedState=We=e:We=We.next=e}return We}function $i(e,t){return typeof t=="function"?t(e):t}function yl(e){var t=It(),n=t.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=e;var r=Fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=l=null,c=null,u=s;do{var d=u.lane;if((nr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=p,l=r):c=c.next=p,Pe.lanes|=d,rr|=d}u=u.next}while(u!==null&&u!==s);c===null?l=r:c.next=a,Ut(r,t.memoizedState)||(lt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Pe.lanes|=s,rr|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vl(e){var t=It(),n=t.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do s=e(s,l.action),l=l.next;while(l!==i);Ut(s,t.memoizedState)||(lt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function bm(){}function km(e,t){var n=Pe,r=It(),i=t(),s=!Ut(r.memoizedState,i);if(s&&(r.memoizedState=i,lt=!0),r=r.queue,Dc(_m.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,Di(9,wm.bind(null,n,r,i,t),void 0,null),He===null)throw Error(K(349));nr&30||jm(n,t,i)}return i}function jm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function wm(e,t,n,r){t.value=n,t.getSnapshot=r,Sm(t)&&Cm(e)}function _m(e,t,n){return n(function(){Sm(t)&&Cm(e)})}function Sm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ut(e,n)}catch{return!0}}function Cm(e){var t=un(e,1);t!==null&&Bt(t,e,1,-1)}function md(e){var t=Wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:e},t.queue=e,e=e.dispatch=ov.bind(null,Pe,e),[t.memoizedState,e]}function Di(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Nm(){return It().memoizedState}function Ro(e,t,n,r){var i=Wt();Pe.flags|=e,i.memoizedState=Di(1|t,n,void 0,r===void 0?null:r)}function Ts(e,t,n,r){var i=It();r=r===void 0?null:r;var s=void 0;if(Fe!==null){var l=Fe.memoizedState;if(s=l.destroy,r!==null&&Mc(r,l.deps)){i.memoizedState=Di(t,n,s,r);return}}Pe.flags|=e,i.memoizedState=Di(1|t,n,s,r)}function hd(e,t){return Ro(8390656,8,e,t)}function Dc(e,t){return Ts(2048,8,e,t)}function Em(e,t){return Ts(4,2,e,t)}function zm(e,t){return Ts(4,4,e,t)}function Tm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pm(e,t,n){return n=n!=null?n.concat([e]):null,Ts(4,4,Tm.bind(null,t,e),n)}function Fc(){}function Lm(e,t){var n=It();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Am(e,t){var n=It();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Rm(e,t,n){return nr&21?(Ut(n,t)||(n=Df(),Pe.lanes|=n,rr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,lt=!0),e.memoizedState=n)}function rv(e,t){var n=be;be=n!==0&&4>n?n:4,e(!0);var r=xl.transition;xl.transition={};try{e(!1),t()}finally{be=n,xl.transition=r}}function Im(){return It().memoizedState}function iv(e,t,n){var r=Tn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Mm(e))Om(t,n);else if(n=xm(e,t,n,r),n!==null){var i=tt();Bt(n,e,r,i),$m(n,t,r)}}function ov(e,t,n){var r=Tn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mm(e))Om(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,a=s(l,n);if(i.hasEagerState=!0,i.eagerState=a,Ut(a,l)){var c=t.interleaved;c===null?(i.next=i,Pc(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=xm(e,t,i,r),n!==null&&(i=tt(),Bt(n,e,r,i),$m(n,t,r))}}function Mm(e){var t=e.alternate;return e===Pe||t!==null&&t===Pe}function Om(e,t){gi=ss=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $m(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xc(e,n)}}var ls={readContext:Rt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},sv={readContext:Rt,useCallback:function(e,t){return Wt().memoizedState=[e,t===void 0?null:t],e},useContext:Rt,useEffect:hd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ro(4194308,4,Tm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ro(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ro(4,2,e,t)},useMemo:function(e,t){var n=Wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=iv.bind(null,Pe,e),[r.memoizedState,e]},useRef:function(e){var t=Wt();return e={current:e},t.memoizedState=e},useState:md,useDebugValue:Fc,useDeferredValue:function(e){return Wt().memoizedState=e},useTransition:function(){var e=md(!1),t=e[0];return e=rv.bind(null,e[1]),Wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Pe,i=Wt();if(Ce){if(n===void 0)throw Error(K(407));n=n()}else{if(n=t(),He===null)throw Error(K(349));nr&30||jm(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,hd(_m.bind(null,r,s,e),[e]),r.flags|=2048,Di(9,wm.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Wt(),t=He.identifierPrefix;if(Ce){var n=rn,r=nn;n=(r&~(1<<32-Ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Oi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=nv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},lv={readContext:Rt,useCallback:Lm,useContext:Rt,useEffect:Dc,useImperativeHandle:Pm,useInsertionEffect:Em,useLayoutEffect:zm,useMemo:Am,useReducer:yl,useRef:Nm,useState:function(){return yl($i)},useDebugValue:Fc,useDeferredValue:function(e){var t=It();return Rm(t,Fe.memoizedState,e)},useTransition:function(){var e=yl($i)[0],t=It().memoizedState;return[e,t]},useMutableSource:bm,useSyncExternalStore:km,useId:Im,unstable_isNewReconciler:!1},av={readContext:Rt,useCallback:Lm,useContext:Rt,useEffect:Dc,useImperativeHandle:Pm,useInsertionEffect:Em,useLayoutEffect:zm,useMemo:Am,useReducer:vl,useRef:Nm,useState:function(){return vl($i)},useDebugValue:Fc,useDeferredValue:function(e){var t=It();return Fe===null?t.memoizedState=e:Rm(t,Fe.memoizedState,e)},useTransition:function(){var e=vl($i)[0],t=It().memoizedState;return[e,t]},useMutableSource:bm,useSyncExternalStore:km,useId:Im,unstable_isNewReconciler:!1};function Ot(e,t){if(e&&e.defaultProps){t=Le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ka(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ps={isMounted:function(e){return(e=e._reactInternals)?sr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=tt(),i=Tn(e),s=on(r,i);s.payload=t,n!=null&&(s.callback=n),t=En(e,s,i),t!==null&&(Bt(t,e,i,r),Lo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=tt(),i=Tn(e),s=on(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=En(e,s,i),t!==null&&(Bt(t,e,i,r),Lo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=tt(),r=Tn(e),i=on(n,r);i.tag=2,t!=null&&(i.callback=t),t=En(e,i,r),t!==null&&(Bt(t,e,r,n),Lo(t,e,r))}};function gd(e,t,n,r,i,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,l):t.prototype&&t.prototype.isPureReactComponent?!Pi(n,r)||!Pi(i,s):!0}function Dm(e,t,n){var r=!1,i=Rn,s=t.contextType;return typeof s=="object"&&s!==null?s=Rt(s):(i=ct(t)?er:Xe.current,r=t.contextTypes,s=(r=r!=null)?Rr(e,i):Rn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ps,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function xd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ps.enqueueReplaceState(t,t.state,null)}function ja(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Lc(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Rt(s):(s=ct(t)?er:Xe.current,i.context=Rr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ka(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ps.enqueueReplaceState(i,i.state,null),is(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function $r(e,t){try{var n="",r=t;do n+=Mx(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function bl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function wa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cv=typeof WeakMap=="function"?WeakMap:Map;function Fm(e,t,n){n=on(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){cs||(cs=!0,Aa=r),wa(e,t)},n}function Bm(e,t,n){n=on(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){wa(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){wa(e,t),typeof r!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function yd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new cv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=wv.bind(null,e,t,n),t.then(e,e))}function vd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=on(-1,1),t.tag=2,En(n,t,1))),n.lanes|=1),e)}var uv=pn.ReactCurrentOwner,lt=!1;function et(e,t,n,r){t.child=e===null?gm(t,null,n,r):Mr(t,e.child,n,r)}function kd(e,t,n,r,i){n=n.render;var s=t.ref;return zr(t,i),r=Oc(e,t,n,r,s,i),n=$c(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dn(e,t,i)):(Ce&&n&&Sc(t),t.flags|=1,et(e,t,r,i),t.child)}function jd(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Kc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Um(e,t,s,r,i)):(e=$o(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:Pi,n(l,r)&&e.ref===t.ref)return dn(e,t,i)}return t.flags|=1,e=Pn(s,r),e.ref=t.ref,e.return=t,t.child=e}function Um(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Pi(s,r)&&e.ref===t.ref)if(lt=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(lt=!0);else return t.lanes=e.lanes,dn(e,t,i)}return _a(e,t,n,r,i)}function Vm(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(wr,gt),gt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,je(wr,gt),gt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,je(wr,gt),gt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,je(wr,gt),gt|=r;return et(e,t,i,n),t.child}function Wm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _a(e,t,n,r,i){var s=ct(n)?er:Xe.current;return s=Rr(t,s),zr(t,i),n=Oc(e,t,n,r,s,i),r=$c(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dn(e,t,i)):(Ce&&r&&Sc(t),t.flags|=1,et(e,t,n,i),t.child)}function wd(e,t,n,r,i){if(ct(n)){var s=!0;Zo(t)}else s=!1;if(zr(t,i),t.stateNode===null)Io(e,t),Dm(t,n,r),ja(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var c=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Rt(u):(u=ct(n)?er:Xe.current,u=Rr(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||c!==u)&&xd(t,l,r,u),xn=!1;var f=t.memoizedState;l.state=f,is(t,r,l,i),c=t.memoizedState,a!==r||f!==c||at.current||xn?(typeof d=="function"&&(ka(t,n,d,r),c=t.memoizedState),(a=xn||gd(t,n,a,r,f,c,u))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,ym(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ot(t.type,a),l.props=u,p=t.pendingProps,f=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=Rt(c):(c=ct(n)?er:Xe.current,c=Rr(t,c));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==p||f!==c)&&xd(t,l,r,c),xn=!1,f=t.memoizedState,l.state=f,is(t,r,l,i);var w=t.memoizedState;a!==p||f!==w||at.current||xn?(typeof m=="function"&&(ka(t,n,m,r),w=t.memoizedState),(u=xn||gd(t,n,u,r,f,w,c)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=c,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Sa(e,t,n,r,s,i)}function Sa(e,t,n,r,i,s){Wm(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&ad(t,n,!1),dn(e,t,s);r=t.stateNode,uv.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Mr(t,e.child,null,s),t.child=Mr(t,null,a,s)):et(e,t,a,s),t.memoizedState=r.state,i&&ad(t,n,!0),t.child}function Hm(e){var t=e.stateNode;t.pendingContext?ld(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ld(e,t.context,!1),Ac(e,t.containerInfo)}function _d(e,t,n,r,i){return Ir(),Nc(i),t.flags|=256,et(e,t,n,r),t.child}var Ca={dehydrated:null,treeContext:null,retryLane:0};function Na(e){return{baseLanes:e,cachePool:null,transitions:null}}function qm(e,t,n){var r=t.pendingProps,i=ze.current,s=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),je(ze,i&1),e===null)return va(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,s?(r=t.mode,s=t.child,l={mode:"hidden",children:l},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=Rs(l,r,0,null),e=Yn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Na(n),t.memoizedState=Ca,e):Bc(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return dv(e,t,l,r,a,i,n);if(s){s=r.fallback,l=t.mode,i=e.child,a=i.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Pn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Pn(a,s):(s=Yn(s,l,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,l=e.child.memoizedState,l=l===null?Na(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Ca,r}return s=e.child,e=s.sibling,r=Pn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Bc(e,t){return t=Rs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yo(e,t,n,r){return r!==null&&Nc(r),Mr(t,e.child,null,n),e=Bc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dv(e,t,n,r,i,s,l){if(n)return t.flags&256?(t.flags&=-257,r=bl(Error(K(422))),yo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Rs({mode:"visible",children:r.children},i,0,null),s=Yn(s,i,l,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Mr(t,e.child,null,l),t.child.memoizedState=Na(l),t.memoizedState=Ca,s);if(!(t.mode&1))return yo(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(K(419)),r=bl(s,r,void 0),yo(e,t,l,r)}if(a=(l&e.childLanes)!==0,lt||a){if(r=He,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,un(e,i),Bt(r,e,i,-1))}return Jc(),r=bl(Error(K(421))),yo(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=_v.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,yt=Nn(i.nextSibling),bt=t,Ce=!0,Dt=null,e!==null&&(Et[zt++]=nn,Et[zt++]=rn,Et[zt++]=tr,nn=e.id,rn=e.overflow,tr=t),t=Bc(t,r.children),t.flags|=4096,t)}function Sd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ba(e.return,t,n)}function kl(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Jm(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(et(e,t,r.children,n),r=ze.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sd(e,n,t);else if(e.tag===19)Sd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(je(ze,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&os(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),kl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&os(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}kl(t,!0,n,null,s);break;case"together":kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Io(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(K(153));if(t.child!==null){for(e=t.child,n=Pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pv(e,t,n){switch(t.tag){case 3:Hm(t),Ir();break;case 5:vm(t);break;case 1:ct(t.type)&&Zo(t);break;case 4:Ac(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;je(ns,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(je(ze,ze.current&1),t.flags|=128,null):n&t.child.childLanes?qm(e,t,n):(je(ze,ze.current&1),e=dn(e,t,n),e!==null?e.sibling:null);je(ze,ze.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Jm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),je(ze,ze.current),r)break;return null;case 22:case 23:return t.lanes=0,Vm(e,t,n)}return dn(e,t,n)}var Km,Ea,Qm,Gm;Km=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ea=function(){};Qm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Qn(Qt.current);var s=null;switch(n){case"input":i=Gl(e,i),r=Gl(e,r),s=[];break;case"select":i=Le({},i,{value:void 0}),r=Le({},r,{value:void 0}),s=[];break;case"textarea":i=Zl(e,i),r=Zl(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yo)}ta(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_i.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&a[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_i.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&_e("scroll",e),s||a===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Gm=function(e,t,n,r){n!==r&&(t.flags|=4)};function ei(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function fv(e,t,n){var r=t.pendingProps;switch(Cc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(t),null;case 1:return ct(t.type)&&Xo(),Ge(t),null;case 3:return r=t.stateNode,Or(),Se(at),Se(Xe),Ic(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(go(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Dt!==null&&(Ma(Dt),Dt=null))),Ea(e,t),Ge(t),null;case 5:Rc(t);var i=Qn(Mi.current);if(n=t.type,e!==null&&t.stateNode!=null)Qm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(K(166));return Ge(t),null}if(e=Qn(Qt.current),go(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[qt]=t,r[Ri]=s,e=(t.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<ci.length;i++)_e(ci[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":Ru(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":Mu(r,s),_e("invalid",r)}ta(n,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ho(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ho(r.textContent,a,e),i=["children",""+a]):_i.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&_e("scroll",r)}switch(n){case"input":so(r),Iu(r,s,!0);break;case"textarea":so(r),Ou(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Yo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_f(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[qt]=t,e[Ri]=r,Km(e,t,!1,!1),t.stateNode=e;e:{switch(l=na(n,r),n){case"dialog":_e("cancel",e),_e("close",e),i=r;break;case"iframe":case"object":case"embed":_e("load",e),i=r;break;case"video":case"audio":for(i=0;i<ci.length;i++)_e(ci[i],e);i=r;break;case"source":_e("error",e),i=r;break;case"img":case"image":case"link":_e("error",e),_e("load",e),i=r;break;case"details":_e("toggle",e),i=r;break;case"input":Ru(e,r),i=Gl(e,r),_e("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Le({},r,{value:void 0}),_e("invalid",e);break;case"textarea":Mu(e,r),i=Zl(e,r),_e("invalid",e);break;default:i=r}ta(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var c=a[s];s==="style"?Nf(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Sf(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Si(e,c):typeof c=="number"&&Si(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_i.hasOwnProperty(s)?c!=null&&s==="onScroll"&&_e("scroll",e):c!=null&&dc(e,s,c,l))}switch(n){case"input":so(e),Iu(e,r,!1);break;case"textarea":so(e),Ou(e);break;case"option":r.value!=null&&e.setAttribute("value",""+An(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Sr(e,!!r.multiple,s,!1):r.defaultValue!=null&&Sr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Yo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ge(t),null;case 6:if(e&&t.stateNode!=null)Gm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(K(166));if(n=Qn(Mi.current),Qn(Qt.current),go(t)){if(r=t.stateNode,n=t.memoizedProps,r[qt]=t,(s=r.nodeValue!==n)&&(e=bt,e!==null))switch(e.tag){case 3:ho(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ho(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qt]=t,t.stateNode=r}return Ge(t),null;case 13:if(Se(ze),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&yt!==null&&t.mode&1&&!(t.flags&128))mm(),Ir(),t.flags|=98560,s=!1;else if(s=go(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(K(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(K(317));s[qt]=t}else Ir(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ge(t),s=!1}else Dt!==null&&(Ma(Dt),Dt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ze.current&1?Be===0&&(Be=3):Jc())),t.updateQueue!==null&&(t.flags|=4),Ge(t),null);case 4:return Or(),Ea(e,t),e===null&&Li(t.stateNode.containerInfo),Ge(t),null;case 10:return Tc(t.type._context),Ge(t),null;case 17:return ct(t.type)&&Xo(),Ge(t),null;case 19:if(Se(ze),s=t.memoizedState,s===null)return Ge(t),null;if(r=(t.flags&128)!==0,l=s.rendering,l===null)if(r)ei(s,!1);else{if(Be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=os(e),l!==null){for(t.flags|=128,ei(s,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return je(ze,ze.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ie()>Dr&&(t.flags|=128,r=!0,ei(s,!1),t.lanes=4194304)}else{if(!r)if(e=os(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ei(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!Ce)return Ge(t),null}else 2*Ie()-s.renderingStartTime>Dr&&n!==1073741824&&(t.flags|=128,r=!0,ei(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(n=s.last,n!==null?n.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ie(),t.sibling=null,n=ze.current,je(ze,r?n&1|2:n&1),t):(Ge(t),null);case 22:case 23:return qc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?gt&1073741824&&(Ge(t),t.subtreeFlags&6&&(t.flags|=8192)):Ge(t),null;case 24:return null;case 25:return null}throw Error(K(156,t.tag))}function mv(e,t){switch(Cc(t),t.tag){case 1:return ct(t.type)&&Xo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Or(),Se(at),Se(Xe),Ic(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Rc(t),null;case 13:if(Se(ze),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(K(340));Ir()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Se(ze),null;case 4:return Or(),null;case 10:return Tc(t.type._context),null;case 22:case 23:return qc(),null;case 24:return null;default:return null}}var vo=!1,Ye=!1,hv=typeof WeakSet=="function"?WeakSet:Set,ne=null;function jr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(e,t,r)}else n.current=null}function za(e,t,n){try{n()}catch(r){Ae(e,t,r)}}var Cd=!1;function gv(e,t){if(pa=Ko,e=tm(),_c(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,a=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var m;p!==n||i!==0&&p.nodeType!==3||(a=l+i),p!==s||r!==0&&p.nodeType!==3||(c=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===e)break t;if(f===n&&++u===i&&(a=l),f===s&&++d===r&&(c=l),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(fa={focusedElem:e,selectionRange:n},Ko=!1,ne=t;ne!==null;)if(t=ne,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ne=e;else for(;ne!==null;){t=ne;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var j=w.memoizedProps,N=w.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?j:Ot(t.type,j),N);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(K(163))}}catch(P){Ae(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,ne=e;break}ne=t.return}return w=Cd,Cd=!1,w}function xi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&za(t,n,s)}i=i.next}while(i!==r)}}function Ls(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ta(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ym(e){var t=e.alternate;t!==null&&(e.alternate=null,Ym(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qt],delete t[Ri],delete t[ga],delete t[Xy],delete t[Zy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xm(e){return e.tag===5||e.tag===3||e.tag===4}function Nd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Yo));else if(r!==4&&(e=e.child,e!==null))for(Pa(e,t,n),e=e.sibling;e!==null;)Pa(e,t,n),e=e.sibling}function La(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(La(e,t,n),e=e.sibling;e!==null;)La(e,t,n),e=e.sibling}var qe=null,$t=!1;function mn(e,t,n){for(n=n.child;n!==null;)Zm(e,t,n),n=n.sibling}function Zm(e,t,n){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(_s,n)}catch{}switch(n.tag){case 5:Ye||jr(n,t);case 6:var r=qe,i=$t;qe=null,mn(e,t,n),qe=r,$t=i,qe!==null&&($t?(e=qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&($t?(e=qe,n=n.stateNode,e.nodeType===8?ml(e.parentNode,n):e.nodeType===1&&ml(e,n),zi(e)):ml(qe,n.stateNode));break;case 4:r=qe,i=$t,qe=n.stateNode.containerInfo,$t=!0,mn(e,t,n),qe=r,$t=i;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&za(n,t,l),i=i.next}while(i!==r)}mn(e,t,n);break;case 1:if(!Ye&&(jr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ae(n,t,a)}mn(e,t,n);break;case 21:mn(e,t,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,mn(e,t,n),Ye=r):mn(e,t,n);break;default:mn(e,t,n)}}function Ed(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hv),t.forEach(function(r){var i=Sv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:qe=a.stateNode,$t=!1;break e;case 3:qe=a.stateNode.containerInfo,$t=!0;break e;case 4:qe=a.stateNode.containerInfo,$t=!0;break e}a=a.return}if(qe===null)throw Error(K(160));Zm(s,l,i),qe=null,$t=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Ae(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)eh(t,e),t=t.sibling}function eh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mt(t,e),Vt(e),r&4){try{xi(3,e,e.return),Ls(3,e)}catch(j){Ae(e,e.return,j)}try{xi(5,e,e.return)}catch(j){Ae(e,e.return,j)}}break;case 1:Mt(t,e),Vt(e),r&512&&n!==null&&jr(n,n.return);break;case 5:if(Mt(t,e),Vt(e),r&512&&n!==null&&jr(n,n.return),e.flags&32){var i=e.stateNode;try{Si(i,"")}catch(j){Ae(e,e.return,j)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,l=n!==null?n.memoizedProps:s,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&jf(i,s),na(a,l);var u=na(a,s);for(l=0;l<c.length;l+=2){var d=c[l],p=c[l+1];d==="style"?Nf(i,p):d==="dangerouslySetInnerHTML"?Sf(i,p):d==="children"?Si(i,p):dc(i,d,p,u)}switch(a){case"input":Yl(i,s);break;case"textarea":wf(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Sr(i,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?Sr(i,!!s.multiple,s.defaultValue,!0):Sr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ri]=s}catch(j){Ae(e,e.return,j)}}break;case 6:if(Mt(t,e),Vt(e),r&4){if(e.stateNode===null)throw Error(K(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(j){Ae(e,e.return,j)}}break;case 3:if(Mt(t,e),Vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zi(t.containerInfo)}catch(j){Ae(e,e.return,j)}break;case 4:Mt(t,e),Vt(e);break;case 13:Mt(t,e),Vt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Wc=Ie())),r&4&&Ed(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ye=(u=Ye)||d,Mt(t,e),Ye=u):Mt(t,e),Vt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(ne=e,d=e.child;d!==null;){for(p=ne=d;ne!==null;){switch(f=ne,m=f.child,f.tag){case 0:case 11:case 14:case 15:xi(4,f,f.return);break;case 1:jr(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(j){Ae(r,n,j)}}break;case 5:jr(f,f.return);break;case 22:if(f.memoizedState!==null){Td(p);continue}}m!==null?(m.return=f,ne=m):Td(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,c=p.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=Cf("display",l))}catch(j){Ae(e,e.return,j)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(j){Ae(e,e.return,j)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Mt(t,e),Vt(e),r&4&&Ed(e);break;case 21:break;default:Mt(t,e),Vt(e)}}function Vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xm(n)){var r=n;break e}n=n.return}throw Error(K(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Si(i,""),r.flags&=-33);var s=Nd(e);La(e,s,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Nd(e);Pa(e,a,l);break;default:throw Error(K(161))}}catch(c){Ae(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xv(e,t,n){ne=e,th(e)}function th(e,t,n){for(var r=(e.mode&1)!==0;ne!==null;){var i=ne,s=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||vo;if(!l){var a=i.alternate,c=a!==null&&a.memoizedState!==null||Ye;a=vo;var u=Ye;if(vo=l,(Ye=c)&&!u)for(ne=i;ne!==null;)l=ne,c=l.child,l.tag===22&&l.memoizedState!==null?Pd(i):c!==null?(c.return=l,ne=c):Pd(i);for(;s!==null;)ne=s,th(s),s=s.sibling;ne=i,vo=a,Ye=u}zd(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,ne=s):zd(e)}}function zd(e){for(;ne!==null;){var t=ne;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ye||Ls(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ot(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&fd(t,s,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}fd(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&zi(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(K(163))}Ye||t.flags&512&&Ta(t)}catch(f){Ae(t,t.return,f)}}if(t===e){ne=null;break}if(n=t.sibling,n!==null){n.return=t.return,ne=n;break}ne=t.return}}function Td(e){for(;ne!==null;){var t=ne;if(t===e){ne=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ne=n;break}ne=t.return}}function Pd(e){for(;ne!==null;){var t=ne;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ls(4,t)}catch(c){Ae(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Ae(t,i,c)}}var s=t.return;try{Ta(t)}catch(c){Ae(t,s,c)}break;case 5:var l=t.return;try{Ta(t)}catch(c){Ae(t,l,c)}}}catch(c){Ae(t,t.return,c)}if(t===e){ne=null;break}var a=t.sibling;if(a!==null){a.return=t.return,ne=a;break}ne=t.return}}var yv=Math.ceil,as=pn.ReactCurrentDispatcher,Uc=pn.ReactCurrentOwner,At=pn.ReactCurrentBatchConfig,ge=0,He=null,$e=null,Je=0,gt=0,wr=$n(0),Be=0,Fi=null,rr=0,As=0,Vc=0,yi=null,st=null,Wc=0,Dr=1/0,Zt=null,cs=!1,Aa=null,zn=null,bo=!1,kn=null,us=0,vi=0,Ra=null,Mo=-1,Oo=0;function tt(){return ge&6?Ie():Mo!==-1?Mo:Mo=Ie()}function Tn(e){return e.mode&1?ge&2&&Je!==0?Je&-Je:tv.transition!==null?(Oo===0&&(Oo=Df()),Oo):(e=be,e!==0||(e=window.event,e=e===void 0?16:qf(e.type)),e):1}function Bt(e,t,n,r){if(50<vi)throw vi=0,Ra=null,Error(K(185));Ki(e,n,r),(!(ge&2)||e!==He)&&(e===He&&(!(ge&2)&&(As|=n),Be===4&&vn(e,Je)),ut(e,r),n===1&&ge===0&&!(t.mode&1)&&(Dr=Ie()+500,zs&&Dn()))}function ut(e,t){var n=e.callbackNode;ty(e,t);var r=Jo(e,e===He?Je:0);if(r===0)n!==null&&Fu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Fu(n),t===1)e.tag===0?ev(Ld.bind(null,e)):dm(Ld.bind(null,e)),Gy(function(){!(ge&6)&&Dn()}),n=null;else{switch(Ff(r)){case 1:n=gc;break;case 4:n=Of;break;case 16:n=qo;break;case 536870912:n=$f;break;default:n=qo}n=ch(n,nh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function nh(e,t){if(Mo=-1,Oo=0,ge&6)throw Error(K(327));var n=e.callbackNode;if(Tr()&&e.callbackNode!==n)return null;var r=Jo(e,e===He?Je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ds(e,r);else{t=r;var i=ge;ge|=2;var s=ih();(He!==e||Je!==t)&&(Zt=null,Dr=Ie()+500,Gn(e,t));do try{kv();break}catch(a){rh(e,a)}while(!0);zc(),as.current=s,ge=i,$e!==null?t=0:(He=null,Je=0,t=Be)}if(t!==0){if(t===2&&(i=la(e),i!==0&&(r=i,t=Ia(e,i))),t===1)throw n=Fi,Gn(e,0),vn(e,r),ut(e,Ie()),n;if(t===6)vn(e,r);else{if(i=e.current.alternate,!(r&30)&&!vv(i)&&(t=ds(e,r),t===2&&(s=la(e),s!==0&&(r=s,t=Ia(e,s))),t===1))throw n=Fi,Gn(e,0),vn(e,r),ut(e,Ie()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(K(345));case 2:Hn(e,st,Zt);break;case 3:if(vn(e,r),(r&130023424)===r&&(t=Wc+500-Ie(),10<t)){if(Jo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){tt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ha(Hn.bind(null,e,st,Zt),t);break}Hn(e,st,Zt);break;case 4:if(vn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ft(r);s=1<<l,l=t[l],l>i&&(i=l),r&=~s}if(r=i,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yv(r/1960))-r,10<r){e.timeoutHandle=ha(Hn.bind(null,e,st,Zt),r);break}Hn(e,st,Zt);break;case 5:Hn(e,st,Zt);break;default:throw Error(K(329))}}}return ut(e,Ie()),e.callbackNode===n?nh.bind(null,e):null}function Ia(e,t){var n=yi;return e.current.memoizedState.isDehydrated&&(Gn(e,t).flags|=256),e=ds(e,t),e!==2&&(t=st,st=n,t!==null&&Ma(t)),e}function Ma(e){st===null?st=e:st.push.apply(st,e)}function vv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ut(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vn(e,t){for(t&=~Vc,t&=~As,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ft(t),r=1<<n;e[n]=-1,t&=~r}}function Ld(e){if(ge&6)throw Error(K(327));Tr();var t=Jo(e,0);if(!(t&1))return ut(e,Ie()),null;var n=ds(e,t);if(e.tag!==0&&n===2){var r=la(e);r!==0&&(t=r,n=Ia(e,r))}if(n===1)throw n=Fi,Gn(e,0),vn(e,t),ut(e,Ie()),n;if(n===6)throw Error(K(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Hn(e,st,Zt),ut(e,Ie()),null}function Hc(e,t){var n=ge;ge|=1;try{return e(t)}finally{ge=n,ge===0&&(Dr=Ie()+500,zs&&Dn())}}function ir(e){kn!==null&&kn.tag===0&&!(ge&6)&&Tr();var t=ge;ge|=1;var n=At.transition,r=be;try{if(At.transition=null,be=1,e)return e()}finally{be=r,At.transition=n,ge=t,!(ge&6)&&Dn()}}function qc(){gt=wr.current,Se(wr)}function Gn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Qy(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(Cc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xo();break;case 3:Or(),Se(at),Se(Xe),Ic();break;case 5:Rc(r);break;case 4:Or();break;case 13:Se(ze);break;case 19:Se(ze);break;case 10:Tc(r.type._context);break;case 22:case 23:qc()}n=n.return}if(He=e,$e=e=Pn(e.current,null),Je=gt=t,Be=0,Fi=null,Vc=As=rr=0,st=yi=null,Kn!==null){for(t=0;t<Kn.length;t++)if(n=Kn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var l=s.next;s.next=i,r.next=l}n.pending=r}Kn=null}return e}function rh(e,t){do{var n=$e;try{if(zc(),Ao.current=ls,ss){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ss=!1}if(nr=0,We=Fe=Pe=null,gi=!1,Oi=0,Uc.current=null,n===null||n.return===null){Be=1,Fi=t,$e=null;break}e:{var s=e,l=n.return,a=n,c=t;if(t=Je,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=vd(l);if(m!==null){m.flags&=-257,bd(m,l,a,s,t),m.mode&1&&yd(s,u,t),t=m,c=u;var w=t.updateQueue;if(w===null){var j=new Set;j.add(c),t.updateQueue=j}else w.add(c);break e}else{if(!(t&1)){yd(s,u,t),Jc();break e}c=Error(K(426))}}else if(Ce&&a.mode&1){var N=vd(l);if(N!==null){!(N.flags&65536)&&(N.flags|=256),bd(N,l,a,s,t),Nc($r(c,a));break e}}s=c=$r(c,a),Be!==4&&(Be=2),yi===null?yi=[s]:yi.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var g=Fm(s,c,t);pd(s,g);break e;case 1:a=c;var h=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(zn===null||!zn.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t;var P=Bm(s,a,t);pd(s,P);break e}}s=s.return}while(s!==null)}sh(n)}catch(C){t=C,$e===n&&n!==null&&($e=n=n.return);continue}break}while(!0)}function ih(){var e=as.current;return as.current=ls,e===null?ls:e}function Jc(){(Be===0||Be===3||Be===2)&&(Be=4),He===null||!(rr&268435455)&&!(As&268435455)||vn(He,Je)}function ds(e,t){var n=ge;ge|=2;var r=ih();(He!==e||Je!==t)&&(Zt=null,Gn(e,t));do try{bv();break}catch(i){rh(e,i)}while(!0);if(zc(),ge=n,as.current=r,$e!==null)throw Error(K(261));return He=null,Je=0,Be}function bv(){for(;$e!==null;)oh($e)}function kv(){for(;$e!==null&&!qx();)oh($e)}function oh(e){var t=ah(e.alternate,e,gt);e.memoizedProps=e.pendingProps,t===null?sh(e):$e=t,Uc.current=null}function sh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mv(n,t),n!==null){n.flags&=32767,$e=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Be=6,$e=null;return}}else if(n=fv(n,t,gt),n!==null){$e=n;return}if(t=t.sibling,t!==null){$e=t;return}$e=t=e}while(t!==null);Be===0&&(Be=5)}function Hn(e,t,n){var r=be,i=At.transition;try{At.transition=null,be=1,jv(e,t,n,r)}finally{At.transition=i,be=r}return null}function jv(e,t,n,r){do Tr();while(kn!==null);if(ge&6)throw Error(K(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(K(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(ny(e,s),e===He&&($e=He=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bo||(bo=!0,ch(qo,function(){return Tr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=At.transition,At.transition=null;var l=be;be=1;var a=ge;ge|=4,Uc.current=null,gv(e,n),eh(n,e),Uy(fa),Ko=!!pa,fa=pa=null,e.current=n,xv(n),Jx(),ge=a,be=l,At.transition=s}else e.current=n;if(bo&&(bo=!1,kn=e,us=i),s=e.pendingLanes,s===0&&(zn=null),Gx(n.stateNode),ut(e,Ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(cs)throw cs=!1,e=Aa,Aa=null,e;return us&1&&e.tag!==0&&Tr(),s=e.pendingLanes,s&1?e===Ra?vi++:(vi=0,Ra=e):vi=0,Dn(),null}function Tr(){if(kn!==null){var e=Ff(us),t=At.transition,n=be;try{if(At.transition=null,be=16>e?16:e,kn===null)var r=!1;else{if(e=kn,kn=null,us=0,ge&6)throw Error(K(331));var i=ge;for(ge|=4,ne=e.current;ne!==null;){var s=ne,l=s.child;if(ne.flags&16){var a=s.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(ne=u;ne!==null;){var d=ne;switch(d.tag){case 0:case 11:case 15:xi(8,d,s)}var p=d.child;if(p!==null)p.return=d,ne=p;else for(;ne!==null;){d=ne;var f=d.sibling,m=d.return;if(Ym(d),d===u){ne=null;break}if(f!==null){f.return=m,ne=f;break}ne=m}}}var w=s.alternate;if(w!==null){var j=w.child;if(j!==null){w.child=null;do{var N=j.sibling;j.sibling=null,j=N}while(j!==null)}}ne=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,ne=l;else e:for(;ne!==null;){if(s=ne,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xi(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,ne=g;break e}ne=s.return}}var h=e.current;for(ne=h;ne!==null;){l=ne;var y=l.child;if(l.subtreeFlags&2064&&y!==null)y.return=l,ne=y;else e:for(l=h;ne!==null;){if(a=ne,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ls(9,a)}}catch(C){Ae(a,a.return,C)}if(a===l){ne=null;break e}var P=a.sibling;if(P!==null){P.return=a.return,ne=P;break e}ne=a.return}}if(ge=i,Dn(),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(_s,e)}catch{}r=!0}return r}finally{be=n,At.transition=t}}return!1}function Ad(e,t,n){t=$r(n,t),t=Fm(e,t,1),e=En(e,t,1),t=tt(),e!==null&&(Ki(e,1,t),ut(e,t))}function Ae(e,t,n){if(e.tag===3)Ad(e,e,n);else for(;t!==null;){if(t.tag===3){Ad(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zn===null||!zn.has(r))){e=$r(n,e),e=Bm(t,e,1),t=En(t,e,1),e=tt(),t!==null&&(Ki(t,1,e),ut(t,e));break}}t=t.return}}function wv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=tt(),e.pingedLanes|=e.suspendedLanes&n,He===e&&(Je&n)===n&&(Be===4||Be===3&&(Je&130023424)===Je&&500>Ie()-Wc?Gn(e,0):Vc|=n),ut(e,t)}function lh(e,t){t===0&&(e.mode&1?(t=co,co<<=1,!(co&130023424)&&(co=4194304)):t=1);var n=tt();e=un(e,t),e!==null&&(Ki(e,t,n),ut(e,n))}function _v(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),lh(e,n)}function Sv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(K(314))}r!==null&&r.delete(t),lh(e,n)}var ah;ah=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||at.current)lt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return lt=!1,pv(e,t,n);lt=!!(e.flags&131072)}else lt=!1,Ce&&t.flags&1048576&&pm(t,ts,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Io(e,t),e=t.pendingProps;var i=Rr(t,Xe.current);zr(t,n),i=Oc(null,t,r,e,i,n);var s=$c();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ct(r)?(s=!0,Zo(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Lc(t),i.updater=Ps,t.stateNode=i,i._reactInternals=t,ja(t,r,e,n),t=Sa(null,t,r,!0,s,n)):(t.tag=0,Ce&&s&&Sc(t),et(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Io(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Nv(r),e=Ot(r,e),i){case 0:t=_a(null,t,r,e,n);break e;case 1:t=wd(null,t,r,e,n);break e;case 11:t=kd(null,t,r,e,n);break e;case 14:t=jd(null,t,r,Ot(r.type,e),n);break e}throw Error(K(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),_a(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),wd(e,t,r,i,n);case 3:e:{if(Hm(t),e===null)throw Error(K(387));r=t.pendingProps,s=t.memoizedState,i=s.element,ym(e,t),is(t,r,null,n);var l=t.memoizedState;if(r=l.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=$r(Error(K(423)),t),t=_d(e,t,r,n,i);break e}else if(r!==i){i=$r(Error(K(424)),t),t=_d(e,t,r,n,i);break e}else for(yt=Nn(t.stateNode.containerInfo.firstChild),bt=t,Ce=!0,Dt=null,n=gm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ir(),r===i){t=dn(e,t,n);break e}et(e,t,r,n)}t=t.child}return t;case 5:return vm(t),e===null&&va(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,ma(r,i)?l=null:s!==null&&ma(r,s)&&(t.flags|=32),Wm(e,t),et(e,t,l,n),t.child;case 6:return e===null&&va(t),null;case 13:return qm(e,t,n);case 4:return Ac(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Mr(t,null,r,n):et(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),kd(e,t,r,i,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,l=i.value,je(ns,r._currentValue),r._currentValue=l,s!==null)if(Ut(s.value,l)){if(s.children===i.children&&!at.current){t=dn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){l=s.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=on(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),ba(s.return,n,t),a.lanes|=n;break}c=c.next}}else if(s.tag===10)l=s.type===t.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(K(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ba(l,n,t),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}et(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,zr(t,n),i=Rt(i),r=r(i),t.flags|=1,et(e,t,r,n),t.child;case 14:return r=t.type,i=Ot(r,t.pendingProps),i=Ot(r.type,i),jd(e,t,r,i,n);case 15:return Um(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),Io(e,t),t.tag=1,ct(r)?(e=!0,Zo(t)):e=!1,zr(t,n),Dm(t,r,i),ja(t,r,i,n),Sa(null,t,r,!0,e,n);case 19:return Jm(e,t,n);case 22:return Vm(e,t,n)}throw Error(K(156,t.tag))};function ch(e,t){return Mf(e,t)}function Cv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(e,t,n,r){return new Cv(e,t,n,r)}function Kc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nv(e){if(typeof e=="function")return Kc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fc)return 11;if(e===mc)return 14}return 2}function Pn(e,t){var n=e.alternate;return n===null?(n=Pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $o(e,t,n,r,i,s){var l=2;if(r=e,typeof e=="function")Kc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case fr:return Yn(n.children,i,s,t);case pc:l=8,i|=8;break;case ql:return e=Pt(12,n,t,i|2),e.elementType=ql,e.lanes=s,e;case Jl:return e=Pt(13,n,t,i),e.elementType=Jl,e.lanes=s,e;case Kl:return e=Pt(19,n,t,i),e.elementType=Kl,e.lanes=s,e;case vf:return Rs(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xf:l=10;break e;case yf:l=9;break e;case fc:l=11;break e;case mc:l=14;break e;case gn:l=16,r=null;break e}throw Error(K(130,e==null?e:typeof e,""))}return t=Pt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Yn(e,t,n,r){return e=Pt(7,e,r,t),e.lanes=n,e}function Rs(e,t,n,r){return e=Pt(22,e,r,t),e.elementType=vf,e.lanes=n,e.stateNode={isHidden:!1},e}function jl(e,t,n){return e=Pt(6,e,null,t),e.lanes=n,e}function wl(e,t,n){return t=Pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ev(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rl(0),this.expirationTimes=rl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Qc(e,t,n,r,i,s,l,a,c){return e=new Ev(e,t,n,a,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Pt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lc(s),e}function zv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function uh(e){if(!e)return Rn;e=e._reactInternals;e:{if(sr(e)!==e||e.tag!==1)throw Error(K(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ct(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(K(171))}if(e.tag===1){var n=e.type;if(ct(n))return um(e,n,t)}return t}function dh(e,t,n,r,i,s,l,a,c){return e=Qc(n,r,!0,e,i,s,l,a,c),e.context=uh(null),n=e.current,r=tt(),i=Tn(n),s=on(r,i),s.callback=t??null,En(n,s,i),e.current.lanes=i,Ki(e,i,r),ut(e,r),e}function Is(e,t,n,r){var i=t.current,s=tt(),l=Tn(i);return n=uh(n),t.context===null?t.context=n:t.pendingContext=n,t=on(s,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=En(i,t,l),e!==null&&(Bt(e,i,l,s),Lo(e,i,l)),l}function ps(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gc(e,t){Rd(e,t),(e=e.alternate)&&Rd(e,t)}function Tv(){return null}var ph=typeof reportError=="function"?reportError:function(e){console.error(e)};function Yc(e){this._internalRoot=e}Ms.prototype.render=Yc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(K(409));Is(e,t,null,null)};Ms.prototype.unmount=Yc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ir(function(){Is(null,e,null,null)}),t[cn]=null}};function Ms(e){this._internalRoot=e}Ms.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yn.length&&t!==0&&t<yn[n].priority;n++);yn.splice(n,0,e),n===0&&Hf(e)}};function Xc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Os(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Id(){}function Pv(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ps(l);s.call(u)}}var l=dh(t,r,e,0,null,!1,!1,"",Id);return e._reactRootContainer=l,e[cn]=l.current,Li(e.nodeType===8?e.parentNode:e),ir(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ps(c);a.call(u)}}var c=Qc(e,0,!1,null,null,!1,!1,"",Id);return e._reactRootContainer=c,e[cn]=c.current,Li(e.nodeType===8?e.parentNode:e),ir(function(){Is(t,c,n,r)}),c}function $s(e,t,n,r,i){var s=n._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var a=i;i=function(){var c=ps(l);a.call(c)}}Is(t,l,e,i)}else l=Pv(n,t,e,i,r);return ps(l)}Bf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ai(t.pendingLanes);n!==0&&(xc(t,n|1),ut(t,Ie()),!(ge&6)&&(Dr=Ie()+500,Dn()))}break;case 13:ir(function(){var r=un(e,1);if(r!==null){var i=tt();Bt(r,e,1,i)}}),Gc(e,1)}};yc=function(e){if(e.tag===13){var t=un(e,134217728);if(t!==null){var n=tt();Bt(t,e,134217728,n)}Gc(e,134217728)}};Uf=function(e){if(e.tag===13){var t=Tn(e),n=un(e,t);if(n!==null){var r=tt();Bt(n,e,t,r)}Gc(e,t)}};Vf=function(){return be};Wf=function(e,t){var n=be;try{return be=e,t()}finally{be=n}};ia=function(e,t,n){switch(t){case"input":if(Yl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Es(r);if(!i)throw Error(K(90));kf(r),Yl(r,i)}}}break;case"textarea":wf(e,n);break;case"select":t=n.value,t!=null&&Sr(e,!!n.multiple,t,!1)}};Tf=Hc;Pf=ir;var Lv={usingClientEntryPoint:!1,Events:[Gi,xr,Es,Ef,zf,Hc]},ti={findFiberByHostInstance:Jn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Av={bundleType:ti.bundleType,version:ti.version,rendererPackageName:ti.rendererPackageName,rendererConfig:ti.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rf(e),e===null?null:e.stateNode},findFiberByHostInstance:ti.findFiberByHostInstance||Tv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ko.isDisabled&&ko.supportsFiber)try{_s=ko.inject(Av),Kt=ko}catch{}}jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lv;jt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xc(t))throw Error(K(200));return zv(e,t,null,n)};jt.createRoot=function(e,t){if(!Xc(e))throw Error(K(299));var n=!1,r="",i=ph;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Qc(e,1,!1,null,null,n,!1,r,i),e[cn]=t.current,Li(e.nodeType===8?e.parentNode:e),new Yc(t)};jt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(K(188)):(e=Object.keys(e).join(","),Error(K(268,e)));return e=Rf(t),e=e===null?null:e.stateNode,e};jt.flushSync=function(e){return ir(e)};jt.hydrate=function(e,t,n){if(!Os(t))throw Error(K(200));return $s(null,e,t,!0,n)};jt.hydrateRoot=function(e,t,n){if(!Xc(e))throw Error(K(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",l=ph;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=dh(t,null,e,1,n??null,i,!1,s,l),e[cn]=t.current,Li(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ms(t)};jt.render=function(e,t,n){if(!Os(t))throw Error(K(200));return $s(null,e,t,!1,n)};jt.unmountComponentAtNode=function(e){if(!Os(e))throw Error(K(40));return e._reactRootContainer?(ir(function(){$s(null,null,e,!1,function(){e._reactRootContainer=null,e[cn]=null})}),!0):!1};jt.unstable_batchedUpdates=Hc;jt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Os(n))throw Error(K(200));if(e==null||e._reactInternals===void 0)throw Error(K(38));return $s(e,t,n,!1,r)};jt.version="18.3.1-next-f1338f8080-20240426";function fh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fh)}catch(e){console.error(e)}}fh(),ff.exports=jt;var Rv=ff.exports,Md=Rv;Wl.createRoot=Md.createRoot,Wl.hydrateRoot=Md.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bi(){return Bi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bi.apply(this,arguments)}var jn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(jn||(jn={}));const Od="popstate";function Iv(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:l,hash:a}=r.location;return Oa("",{pathname:s,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:mh(i)}return Ov(t,n,null,e)}function De(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Zc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Mv(){return Math.random().toString(36).substr(2,8)}function $d(e,t){return{usr:e.state,key:e.key,idx:t}}function Oa(e,t,n,r){return n===void 0&&(n=null),Bi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Hr(t):t,{state:n,key:t&&t.key||r||Mv()})}function mh(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Hr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ov(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,l=i.history,a=jn.Pop,c=null,u=d();u==null&&(u=0,l.replaceState(Bi({},l.state,{idx:u}),""));function d(){return(l.state||{idx:null}).idx}function p(){a=jn.Pop;let N=d(),g=N==null?null:N-u;u=N,c&&c({action:a,location:j.location,delta:g})}function f(N,g){a=jn.Push;let h=Oa(j.location,N,g);u=d()+1;let y=$d(h,u),P=j.createHref(h);try{l.pushState(y,"",P)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(P)}s&&c&&c({action:a,location:j.location,delta:1})}function m(N,g){a=jn.Replace;let h=Oa(j.location,N,g);u=d();let y=$d(h,u),P=j.createHref(h);l.replaceState(y,"",P),s&&c&&c({action:a,location:j.location,delta:0})}function w(N){let g=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof N=="string"?N:mh(N);return h=h.replace(/ $/,"%20"),De(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let j={get action(){return a},get location(){return e(i,l)},listen(N){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Od,p),c=N,()=>{i.removeEventListener(Od,p),c=null}},createHref(N){return t(i,N)},createURL:w,encodeLocation(N){let g=w(N);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:m,go(N){return l.go(N)}};return j}var Dd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Dd||(Dd={}));function $v(e,t,n){return n===void 0&&(n="/"),Dv(e,t,n)}function Dv(e,t,n,r){let i=typeof t=="string"?Hr(t):t,s=xh(i.pathname||"/",n);if(s==null)return null;let l=hh(e);Fv(l);let a=null;for(let c=0;a==null&&c<l.length;++c){let u=Xv(s);a=Qv(l[c],u)}return a}function hh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,l,a)=>{let c={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:l,route:s};c.relativePath.startsWith("/")&&(De(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Xn([r,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(De(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),hh(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:Jv(u,s.index),routesMeta:d})};return e.forEach((s,l)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,l);else for(let c of gh(s.path))i(s,l,c)}),t}function gh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let l=gh(r.join("/")),a=[];return a.push(...l.map(c=>c===""?s:[s,c].join("/"))),i&&a.push(...l),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function Fv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Kv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Bv=/^:[\w-]+$/,Uv=3,Vv=2,Wv=1,Hv=10,qv=-2,Fd=e=>e==="*";function Jv(e,t){let n=e.split("/"),r=n.length;return n.some(Fd)&&(r+=qv),t&&(r+=Vv),n.filter(i=>!Fd(i)).reduce((i,s)=>i+(Bv.test(s)?Uv:s===""?Wv:Hv),r)}function Kv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Qv(e,t,n){let{routesMeta:r}=e,i={},s="/",l=[];for(let a=0;a<r.length;++a){let c=r[a],u=a===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",p=Gv({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),f=c.route;if(!p)return null;Object.assign(i,p.params),l.push({params:i,pathname:Xn([s,p.pathname]),pathnameBase:r1(Xn([s,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(s=Xn([s,p.pathnameBase]))}return l}function Gv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Yv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],l=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:f,isOptional:m}=d;if(f==="*"){let j=a[p]||"";l=s.slice(0,s.length-j.length).replace(/(.)\/+$/,"$1")}const w=a[p];return m&&!w?u[f]=void 0:u[f]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:l,pattern:e}}function Yv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Zc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Xv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Zc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function xh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Zv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,e1=e=>Zv.test(e);function t1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Hr(e):e,s;if(n)if(e1(n))s=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),Zc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?s=Bd(n.substring(1),"/"):s=Bd(n,t)}else s=t;return{pathname:s,search:i1(r),hash:o1(i)}}function Bd(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function _l(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function n1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function yh(e,t){let n=n1(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function vh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Hr(e):(i=Bi({},e),De(!i.pathname||!i.pathname.includes("?"),_l("?","pathname","search",i)),De(!i.pathname||!i.pathname.includes("#"),_l("#","pathname","hash",i)),De(!i.search||!i.search.includes("#"),_l("#","search","hash",i)));let s=e===""||i.pathname==="",l=s?"/":i.pathname,a;if(l==null)a=n;else{let p=t.length-1;if(!r&&l.startsWith("..")){let f=l.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}a=p>=0?t[p]:"/"}let c=t1(i,a),u=l&&l!=="/"&&l.endsWith("/"),d=(s||l===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Xn=e=>e.join("/").replace(/\/\/+/g,"/"),r1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),i1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,o1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function s1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const bh=["post","put","patch","delete"];new Set(bh);const l1=["get",...bh];new Set(l1);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ui(){return Ui=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ui.apply(this,arguments)}const eu=_.createContext(null),a1=_.createContext(null),Xi=_.createContext(null),Ds=_.createContext(null),Fn=_.createContext({outlet:null,matches:[],isDataRoute:!1}),kh=_.createContext(null);function Zi(){return _.useContext(Ds)!=null}function tu(){return Zi()||De(!1),_.useContext(Ds).location}function jh(e){_.useContext(Xi).static||_.useLayoutEffect(e)}function nu(){let{isDataRoute:e}=_.useContext(Fn);return e?j1():c1()}function c1(){Zi()||De(!1);let e=_.useContext(eu),{basename:t,future:n,navigator:r}=_.useContext(Xi),{matches:i}=_.useContext(Fn),{pathname:s}=tu(),l=JSON.stringify(yh(i,n.v7_relativeSplatPath)),a=_.useRef(!1);return jh(()=>{a.current=!0}),_.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let p=vh(u,JSON.parse(l),s,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Xn([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,l,s,e])}function u1(){let{matches:e}=_.useContext(Fn),t=e[e.length-1];return t?t.params:{}}function d1(e,t){return p1(e,t)}function p1(e,t,n,r){Zi()||De(!1);let{navigator:i}=_.useContext(Xi),{matches:s}=_.useContext(Fn),l=s[s.length-1],a=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let u=tu(),d;if(t){var p;let N=typeof t=="string"?Hr(t):t;c==="/"||(p=N.pathname)!=null&&p.startsWith(c)||De(!1),d=N}else d=u;let f=d.pathname||"/",m=f;if(c!=="/"){let N=c.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(N.length).join("/")}let w=$v(e,{pathname:m}),j=x1(w&&w.map(N=>Object.assign({},N,{params:Object.assign({},a,N.params),pathname:Xn([c,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?c:Xn([c,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,n,r);return t&&j?_.createElement(Ds.Provider,{value:{location:Ui({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:jn.Pop}},j):j}function f1(){let e=k1(),t=s1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},t),n?_.createElement("pre",{style:i},n):null,null)}const m1=_.createElement(f1,null);class h1 extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?_.createElement(Fn.Provider,{value:this.props.routeContext},_.createElement(kh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function g1(e){let{routeContext:t,match:n,children:r}=e,i=_.useContext(eu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(Fn.Provider,{value:t},r)}function x1(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=l.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);d>=0||De(!1),l=l.slice(0,Math.min(l.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<l.length;d++){let p=l[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:m}=n,w=p.route.loader&&f[p.route.id]===void 0&&(!m||m[p.route.id]===void 0);if(p.route.lazy||w){c=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((d,p,f)=>{let m,w=!1,j=null,N=null;n&&(m=a&&p.route.id?a[p.route.id]:void 0,j=p.route.errorElement||m1,c&&(u<0&&f===0?(w1("route-fallback"),w=!0,N=null):u===f&&(w=!0,N=p.route.hydrateFallbackElement||null)));let g=t.concat(l.slice(0,f+1)),h=()=>{let y;return m?y=j:w?y=N:p.route.Component?y=_.createElement(p.route.Component,null):p.route.element?y=p.route.element:y=d,_.createElement(g1,{match:p,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:y})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?_.createElement(h1,{location:n.location,revalidation:n.revalidation,component:j,error:m,children:h(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):h()},null)}var wh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(wh||{}),_h=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(_h||{});function y1(e){let t=_.useContext(eu);return t||De(!1),t}function v1(e){let t=_.useContext(a1);return t||De(!1),t}function b1(e){let t=_.useContext(Fn);return t||De(!1),t}function Sh(e){let t=b1(),n=t.matches[t.matches.length-1];return n.route.id||De(!1),n.route.id}function k1(){var e;let t=_.useContext(kh),n=v1(),r=Sh();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function j1(){let{router:e}=y1(wh.UseNavigateStable),t=Sh(_h.UseNavigateStable),n=_.useRef(!1);return jh(()=>{n.current=!0}),_.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ui({fromRouteId:t},s)))},[e,t])}const Ud={};function w1(e,t,n){Ud[e]||(Ud[e]=!0)}function _1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function S1(e){let{to:t,replace:n,state:r,relative:i}=e;Zi()||De(!1);let{future:s,static:l}=_.useContext(Xi),{matches:a}=_.useContext(Fn),{pathname:c}=tu(),u=nu(),d=vh(t,yh(a,s.v7_relativeSplatPath),c,i==="path"),p=JSON.stringify(d);return _.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:i}),[u,p,i,n,r]),null}function dr(e){De(!1)}function C1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=jn.Pop,navigator:s,static:l=!1,future:a}=e;Zi()&&De(!1);let c=t.replace(/^\/*/,"/"),u=_.useMemo(()=>({basename:c,navigator:s,static:l,future:Ui({v7_relativeSplatPath:!1},a)}),[c,a,s,l]);typeof r=="string"&&(r=Hr(r));let{pathname:d="/",search:p="",hash:f="",state:m=null,key:w="default"}=r,j=_.useMemo(()=>{let N=xh(d,c);return N==null?null:{location:{pathname:N,search:p,hash:f,state:m,key:w},navigationType:i}},[c,d,p,f,m,w,i]);return j==null?null:_.createElement(Xi.Provider,{value:u},_.createElement(Ds.Provider,{children:n,value:j}))}function N1(e){let{children:t,location:n}=e;return d1($a(t),n)}new Promise(()=>{});function $a(e,t){t===void 0&&(t=[]);let n=[];return _.Children.forEach(e,(r,i)=>{if(!_.isValidElement(r))return;let s=[...t,i];if(r.type===_.Fragment){n.push.apply(n,$a(r.props.children,s));return}r.type!==dr&&De(!1),!r.props.index||!r.props.children||De(!1);let l={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=$a(r.props.children,s)),n.push(l)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const E1="6";try{window.__reactRouterVersion=E1}catch{}const z1="startTransition",Vd=wx[z1];function T1(e){let{basename:t,children:n,future:r,window:i}=e,s=_.useRef();s.current==null&&(s.current=Iv({window:i,v5Compat:!0}));let l=s.current,[a,c]=_.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},d=_.useCallback(p=>{u&&Vd?Vd(()=>c(p)):c(p)},[c,u]);return _.useLayoutEffect(()=>l.listen(d),[l,d]),_.useEffect(()=>_1(r),[r]),_.createElement(C1,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}var Wd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Wd||(Wd={}));var Hd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Hd||(Hd={}));const P1={},qd=e=>{let t;const n=new Set,r=(d,p)=>{const f=typeof d=="function"?d(t):d;if(!Object.is(f,t)){const m=t;t=p??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(w=>w(t,m))}},i=()=>t,c={setState:r,getState:i,getInitialState:()=>u,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(P1?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,c);return c},L1=e=>e?qd(e):qd;var Ch={exports:{}},Nh={},Eh={exports:{}},zh={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fr=_;function A1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var R1=typeof Object.is=="function"?Object.is:A1,I1=Fr.useState,M1=Fr.useEffect,O1=Fr.useLayoutEffect,$1=Fr.useDebugValue;function D1(e,t){var n=t(),r=I1({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return O1(function(){i.value=n,i.getSnapshot=t,Sl(i)&&s({inst:i})},[e,n,t]),M1(function(){return Sl(i)&&s({inst:i}),e(function(){Sl(i)&&s({inst:i})})},[e]),$1(n),n}function Sl(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!R1(e,n)}catch{return!0}}function F1(e,t){return t()}var B1=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?F1:D1;zh.useSyncExternalStore=Fr.useSyncExternalStore!==void 0?Fr.useSyncExternalStore:B1;Eh.exports=zh;var U1=Eh.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fs=_,V1=U1;function W1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var H1=typeof Object.is=="function"?Object.is:W1,q1=V1.useSyncExternalStore,J1=Fs.useRef,K1=Fs.useEffect,Q1=Fs.useMemo,G1=Fs.useDebugValue;Nh.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=J1(null);if(s.current===null){var l={hasValue:!1,value:null};s.current=l}else l=s.current;s=Q1(function(){function c(m){if(!u){if(u=!0,d=m,m=r(m),i!==void 0&&l.hasValue){var w=l.value;if(i(w,m))return p=w}return p=m}if(w=p,H1(d,m))return w;var j=r(m);return i!==void 0&&i(w,j)?(d=m,w):(d=m,p=j)}var u=!1,d,p,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,r,i]);var a=q1(e,s[0],s[1]);return K1(function(){l.hasValue=!0,l.value=a},[a]),G1(a),a};Ch.exports=Nh;var Y1=Ch.exports;const X1=js(Y1),Th={},{useDebugValue:Z1}=Lt,{useSyncExternalStoreWithSelector:e0}=X1;let Jd=!1;const t0=e=>e;function n0(e,t=t0,n){(Th?"production":void 0)!=="production"&&n&&!Jd&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Jd=!0);const r=e0(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return Z1(r),r}const Kd=e=>{(Th?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?L1(e):e,n=(r,i)=>n0(t,r,i);return Object.assign(n,t),n},r0=e=>e?Kd(e):Kd,it=r0((e,t)=>({project:null,selectedAgentId:null,selectedToolId:null,mcpServers:[],builtinTools:[],isRunning:!1,runEvents:[],watches:[],activeTab:"app",sidebarOpen:!0,hasUnsavedChanges:!1,runAgentId:null,currentSessionId:null,setProject:n=>{var i;const r=((i=n==null?void 0:n.watches)==null?void 0:i.map(s=>({...s,result:void 0,error:void 0,isLoading:!1,lastRun:void 0,history:[]})))||[];e({project:n,watches:r})},setSelectedAgentId:n=>e({selectedAgentId:n}),setSelectedToolId:n=>e({selectedToolId:n}),setMcpServers:n=>e({mcpServers:n}),setBuiltinTools:n=>e({builtinTools:n}),setIsRunning:n=>e({isRunning:n}),addRunEvent:n=>e(r=>({runEvents:[...r.runEvents,n]})),clearRunEvents:()=>e({runEvents:[]}),setWatches:n=>e({watches:n}),updateWatch:(n,r)=>e(i=>{const s=i.watches.map(a=>a.id===n?{...a,...r}:a);if(("serverName"in r||"toolName"in r||"args"in r||"transform"in r)&&i.project){const a=s.map(({id:c,serverName:u,toolName:d,args:p,transform:f})=>({id:c,serverName:u,toolName:d,args:p,transform:f}));return{watches:s,project:{...i.project,watches:a},hasUnsavedChanges:!0}}return{watches:s}}),addWatch:n=>e(r=>{const i=[...r.watches,n],{project:s}=r;if(s){const l=i.map(({id:a,serverName:c,toolName:u,args:d,transform:p})=>({id:a,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...s,watches:l},hasUnsavedChanges:!0}}return{watches:i}}),removeWatch:n=>e(r=>{const i=r.watches.filter(l=>l.id!==n),{project:s}=r;if(s){const l=i.map(({id:a,serverName:c,toolName:u,args:d,transform:p})=>({id:a,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...s,watches:l},hasUnsavedChanges:!0}}return{watches:i}}),clearWatchHistories:()=>e(n=>({watches:n.watches.map(r=>({...r,history:[],result:void 0,error:void 0}))})),setActiveTab:n=>e({activeTab:n}),setSidebarOpen:n=>e({sidebarOpen:n}),setHasUnsavedChanges:n=>e({hasUnsavedChanges:n}),setRunAgentId:n=>e({runAgentId:n}),setCurrentSessionId:n=>e({currentSessionId:n}),updateProject:n=>{const{project:r}=t();r&&e({project:{...r,...n}})},addAgent:n=>{const{project:r}=t();r&&e({project:{...r,agents:[...r.agents,n]}})},updateAgent:(n,r)=>{const{project:i}=t();i&&e({project:{...i,agents:i.agents.map(s=>s.id===n?{...s,...r}:s)}})},removeAgent:n=>{const{project:r,selectedAgentId:i}=t();r&&e({project:{...r,agents:r.agents.filter(s=>s.id!==n)},selectedAgentId:i===n?null:i})},addCustomTool:n=>{const{project:r}=t();r&&e({project:{...r,custom_tools:[...r.custom_tools,n]}})},updateCustomTool:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_tools:i.custom_tools.map(s=>s.id===n?{...s,...r}:s)}})},removeCustomTool:n=>{const{project:r,selectedToolId:i}=t();r&&e({project:{...r,custom_tools:r.custom_tools.filter(s=>s.id!==n)},selectedToolId:i===n?null:i})},addCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:[...r.custom_callbacks||[],n]}})},updateCustomCallback:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_callbacks:(i.custom_callbacks||[]).map(s=>s.id===n?{...s,...r}:s)}})},removeCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:(r.custom_callbacks||[]).filter(i=>i.id!==n)}})}})),Ph="/api";async function xe(e,t){const n=await fetch(`${Ph}${e}`,{...t,headers:{"Content-Type":"application/json",...t==null?void 0:t.headers}});if(!n.ok){const r=await n.json().catch(()=>({detail:"Unknown error"}));throw new Error(r.detail||`HTTP ${n.status}`)}return n.json()}async function Lh(){return(await xe("/projects")).projects}async function Ah(e){return(await xe(`/projects/${e}`)).project}async function Rh(e,t=""){return(await xe("/projects",{method:"POST",body:JSON.stringify({name:e,description:t})})).project}async function Da(e,t){return(await xe(`/projects/${e}`,{method:"PUT",body:JSON.stringify(t)})).project}async function Ih(e){await xe(`/projects/${e}`,{method:"DELETE"})}async function Mh(e){return xe(`/sessions/${e}/save-to-memory`,{method:"POST"})}async function Fa(e){return(await xe(`/projects/${e}/sessions`)).sessions}async function Oh(e,t){return(await xe(`/projects/${e}/sessions/${t}/load`)).session}async function $h(e){return(await xe(`/projects/${e}/yaml`)).yaml}async function Dh(e,t){return(await xe(`/projects/${e}/yaml`,{method:"PUT",body:JSON.stringify({yaml:t})})).project}async function ru(){return(await xe("/mcp-servers")).servers}async function Fh(){return(await xe("/builtin-tools")).tools}function Bh(e){const t=window.location.protocol==="https:"?"wss:":"ws:",n=window.location.host;return new WebSocket(`${t}//${n}/ws/run/${e}`)}async function Do(e,t,n,r){return await xe(`/projects/${e}/generate-prompt`,{method:"POST",body:JSON.stringify({agent_id:t,context:n,agent_config:r||void 0})})}async function Uh(e,t){return await xe(`/projects/${e}/generate-agent-config`,{method:"POST",body:JSON.stringify({description:t})})}async function Vh(e,t,n,r=[],i){return await xe(`/projects/${e}/generate-tool-code`,{method:"POST",body:JSON.stringify({tool_name:t,tool_description:n,state_keys_used:r,context:i})})}async function Wh(e,t,n,r,i=[],s){return await xe(`/projects/${e}/generate-callback-code`,{method:"POST",body:JSON.stringify({callback_name:t,callback_description:n,callback_type:r,state_keys_used:i,context:s})})}async function Hh(e){return await xe("/test-mcp-server",{method:"POST",body:JSON.stringify(e)})}async function qh(e,t){return xe(`/projects/${e}/skillsets/${t}/stats`)}async function Jh(e,t,n,r,i=500,s=50){return xe(`/projects/${e}/skillsets/${t}/url`,{method:"POST",body:JSON.stringify({url:n,source_name:r,chunk_size:i,chunk_overlap:s})})}async function Kh(e,t,n,r=500,i=50){const s=new FormData;s.append("file",n),s.append("chunk_size",String(r)),s.append("chunk_overlap",String(i));const l=await fetch(`${Ph}/projects/${e}/skillsets/${t}/file`,{method:"POST",body:s});if(!l.ok)throw new Error(`Upload failed: ${l.statusText}`);return l.json()}async function Qh(e,t,n,r=10,i=0){return xe(`/projects/${e}/skillsets/${t}/search`,{method:"POST",body:JSON.stringify({query:n,top_k:r,min_score:i})})}async function Gh(e,t){return xe(`/projects/${e}/skillsets/${t}/entries`,{method:"DELETE"})}async function Yh(){return xe("/skillsets/embeddings-available")}const Ve={async get(e){return xe(e)},async post(e,t){return xe(e,{method:"POST",body:t?JSON.stringify(t):void 0})},async put(e,t){return xe(e,{method:"PUT",body:t?JSON.stringify(t):void 0})},async delete(e){return xe(e,{method:"DELETE"})}},i0=Object.freeze(Object.defineProperty({__proto__:null,addSkillSetUrl:Jh,api:Ve,checkEmbeddingsAvailable:Yh,clearSkillSet:Gh,createProject:Rh,createRunWebSocket:Bh,deleteProject:Ih,fetchJSON:xe,generateAgentConfig:Uh,generateCallbackCode:Wh,generatePrompt:Do,generateToolCode:Vh,getBuiltinTools:Fh,getMcpServers:ru,getProject:Ah,getProjectYaml:$h,getSkillSetStats:qh,listProjectSessions:Fa,listProjects:Lh,loadSession:Oh,saveSessionToMemory:Mh,searchSkillSet:Qh,testMcpServer:Hh,updateProject:Da,updateProjectFromYaml:Dh,uploadSkillSetFile:Kh},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var o0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),se=(e,t)=>{const n=_.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:l,className:a="",children:c,...u},d)=>_.createElement("svg",{ref:d,...o0,width:i,height:i,stroke:r,strokeWidth:l?Number(s)*24/Number(i):s,className:["lucide",`lucide-${s0(e)}`,a].join(" "),...u},[...t.map(([p,f])=>_.createElement(p,f)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=se("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=se("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=se("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=se("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=se("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=se("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
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
 */const ms=se("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=se("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=se("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=se("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=se("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=se("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=se("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=se("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=se("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=se("FileCheck",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=se("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=se("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=se("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=se("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=se("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=se("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=se("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=se("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=se("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=se("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=se("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=se("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=se("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=se("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=se("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=se("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=se("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
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
 */const y0=se("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=se("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=se("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=se("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=se("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=se("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=se("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=se("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=se("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=se("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=se("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=se("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=se("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=se("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=se("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=se("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=se("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=se("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=se("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=se("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=se("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function w0(){const e=nu(),[t,n]=_.useState([]),[r,i]=_.useState(!0),[s,l]=_.useState(!1),[a,c]=_.useState("");_.useEffect(()=>{u()},[]);async function u(){try{const f=await Lh();n(f)}catch(f){console.error("Failed to load projects:",f)}finally{i(!1)}}async function d(){if(a.trim())try{const f=await Rh(a.trim());e(`/project/${f.id}`)}catch(f){console.error("Failed to create project:",f)}}async function p(f,m){if(m.stopPropagation(),!!confirm("Delete this project?"))try{await Ih(f),n(t.filter(w=>w.id!==f))}catch(w){console.error("Failed to delete project:",w)}}return o.jsxs("div",{className:"project-list",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("header",{className:"header",children:[o.jsxs("div",{className:"logo",children:[o.jsx(lu,{size:40,className:"logo-icon"}),o.jsx("h1",{className:"title",children:"ADK Playground"})]}),o.jsx("p",{className:"subtitle",children:"Build, test, and deploy AI agents visually"})]}),o.jsxs("div",{className:"content",children:[s?o.jsxs("div",{className:"create-form",children:[o.jsx("input",{type:"text",placeholder:"Project name...",value:a,onChange:f=>c(f.target.value),onKeyDown:f=>f.key==="Enter"&&d(),autoFocus:!0}),o.jsxs("button",{className:"btn btn-primary",onClick:d,children:[o.jsx(Me,{size:18}),"Create"]}),o.jsx("button",{className:"btn btn-secondary",onClick:()=>l(!1),children:"Cancel"})]}):o.jsx("div",{className:"create-form",children:o.jsxs("button",{className:"btn btn-primary",onClick:()=>l(!0),children:[o.jsx(Me,{size:18}),"New Project"]})}),r?o.jsx("div",{className:"loading",children:"Loading projects..."}):t.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Qd,{size:48,style:{marginBottom:16,opacity:.3}}),o.jsx("p",{children:"No projects yet. Create one to get started!"})]}):o.jsx("div",{className:"projects-grid",children:t.map(f=>o.jsxs("div",{className:"project-card",onClick:()=>e(`/project/${f.id}`),children:[o.jsxs("h3",{children:[o.jsx(Qd,{size:18}),f.name]}),o.jsx("p",{children:f.description||"No description"}),o.jsx("button",{className:"delete-btn",onClick:m=>p(f.id,m),children:o.jsx(Te,{size:16})})]},f.id))})]})]})}const _0=[{key:"GOOGLE_API_KEY",description:"API key for Gemini models"},{key:"OPENAI_API_KEY",description:"API key for OpenAI models (via LiteLLM)"},{key:"ANTHROPIC_API_KEY",description:"API key for Anthropic Claude models"},{key:"AZURE_API_KEY",description:"API key for Azure OpenAI Service"},{key:"AZURE_API_BASE",description:"Base URL for Azure OpenAI endpoint (e.g., https://your-resource.openai.azure.com)"},{key:"AZURE_API_VERSION",description:"API version for Azure OpenAI (e.g., 2024-02-15-preview)"},{key:"GOOGLE_GENAI_USE_VERTEXAI",description:'Set to "1" to use Vertex AI instead of API key'},{key:"GOOGLE_CLOUD_PROJECT",description:"Google Cloud project ID for Vertex AI"},{key:"GOOGLE_CLOUD_REGION",description:"Google Cloud region for Vertex AI (e.g., us-central1)"}];function S0(e){return/^[a-zA-Z0-9_]+$/.test(e)}function C0(){const{project:e,updateProject:t}=it(),[n,r]=_.useState(null);if(!e)return null;const{app:i}=e;function s(k){t({app:{...i,...k}})}function l(k){if(k===""){r(null),s({name:k});return}S0(k)?r(null):r("Name can only contain letters, numbers, and underscores"),s({name:k})}function a(){const k={name:`state_key_${i.state_keys.length+1}`,description:"",type:"string",scope:"session"};s({state_keys:[...i.state_keys,k]})}function c(k,z){const M=[...i.state_keys];M[k]={...M[k],...z},s({state_keys:M})}function u(k){s({state_keys:i.state_keys.filter((z,M)=>M!==k)})}function d(k="ReflectAndRetryToolPlugin"){let z;switch(k){case"ReflectAndRetryToolPlugin":z={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1};break;case"ContextFilterPlugin":z={type:"ContextFilterPlugin",name:"context_filter",num_invocations_to_keep:5};break;case"LoggingPlugin":z={type:"LoggingPlugin",name:"logging"};break;case"GlobalInstructionPlugin":z={type:"GlobalInstructionPlugin",name:"global_instruction",global_instruction:""};break;case"SaveFilesAsArtifactsPlugin":z={type:"SaveFilesAsArtifactsPlugin",name:"save_files"};break;case"MultimodalToolResultsPlugin":z={type:"MultimodalToolResultsPlugin",name:"multimodal_tools"};break;default:z={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1}}s({plugins:[...i.plugins,z]})}function p(k,z){const M=[...i.plugins];M[k]={...M[k],...z},s({plugins:M})}function f(k){s({plugins:i.plugins.filter((z,M)=>M!==k)})}const m=i.models||[];function w(){const k=`model_${Date.now().toString(36)}`,z={id:k,name:"New Model",provider:"gemini",model_name:"gemini-2.0-flash",is_default:m.length===0};s({models:[...m,z],default_model_id:m.length===0?k:i.default_model_id})}function j(k,z){const M=m.map(q=>q.id===k?{...q,...z}:q);s({models:M})}function N(k){var q;const z=m.filter(B=>B.id!==k),M=i.default_model_id===k?((q=z[0])==null?void 0:q.id)||void 0:i.default_model_id;s({models:z,default_model_id:M})}function g(k){s({default_model_id:k})}const h=i.env_vars||{},[y,P]=_.useState({}),[C,x]=_.useState("");function v(k=""){const z=k||C.trim();!z||h[z]!==void 0||(s({env_vars:{...h,[z]:""}}),x(""))}function T(k,z){s({env_vars:{...h,[k]:z}})}function R(k){const z={...h};delete z[k],s({env_vars:z})}function E(k){P(z=>({...z,[k]:!z[k]}))}return o.jsxs("div",{className:"app-config",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("section",{className:"section",children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(v0,{size:20}),"Basic Information"]})}),o.jsxs("div",{className:"form-grid",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"App Name"}),o.jsx("input",{type:"text",value:i.name,onChange:k=>l(k.target.value),style:{borderColor:n?"var(--error)":void 0}}),n&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:4},children:n})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Root Agent"}),o.jsxs("select",{value:i.root_agent_id||"",onChange:k=>s({root_agent_id:k.target.value||void 0}),children:[o.jsx("option",{value:"",children:"Select an agent..."}),e.agents.map(k=>o.jsx("option",{value:k.id,children:k.name},k.id))]})]}),o.jsxs("div",{className:"form-group full-width",children:[o.jsx("label",{children:"Description"}),o.jsx("textarea",{value:i.description,onChange:k=>s({description:k.target.value}),rows:2})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(sn,{size:20}),"Services"]}),o.jsx("span",{className:"section-hint",children:"Configure session, memory, and artifact storage backends"})]}),o.jsxs("div",{className:"form-grid",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Session Service"}),o.jsxs("select",{value:i.session_service_uri.split("://")[0],onChange:k=>{const z=k.target.value;s({session_service_uri:{memory:"memory://",file:"file://~/.adk-playground/sessions",sqlite:"sqlite://~/.adk-playground/sessions.db",postgresql:"postgresql://user:pass@localhost:5432/adk_sessions",mysql:"mysql://user:pass@localhost:3306/adk_sessions",agentengine:"agentengine://project/us-central1/engine-id"}[z]||z+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),o.jsx("option",{value:"file",children:"File System (JSON)"}),o.jsx("option",{value:"sqlite",children:"SQLite (local)"}),o.jsx("option",{value:"postgresql",children:"PostgreSQL"}),o.jsx("option",{value:"mysql",children:"MySQL"}),o.jsx("option",{value:"agentengine",children:"Vertex AI Agent Engine"})]}),i.session_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.session_service_uri.replace("file://",""),onChange:k=>s({session_service_uri:"file://"+k.target.value}),placeholder:"~/.adk-playground/sessions",style:{marginTop:8}}),i.session_service_uri.startsWith("sqlite://")&&o.jsx("input",{type:"text",value:i.session_service_uri.replace("sqlite://",""),onChange:k=>s({session_service_uri:"sqlite://"+k.target.value}),placeholder:"~/.adk-playground/sessions.db",style:{marginTop:8}}),(i.session_service_uri.startsWith("postgresql://")||i.session_service_uri.startsWith("mysql://"))&&o.jsx("input",{type:"text",value:i.session_service_uri,onChange:k=>s({session_service_uri:k.target.value}),placeholder:"postgresql://user:pass@localhost:5432/db",style:{marginTop:8}}),i.session_service_uri.startsWith("agentengine://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[2]||"",onChange:k=>{const z=i.session_service_uri.split("/");z[2]=k.target.value,s({session_service_uri:z.join("/")})},placeholder:"project-id"}),o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[3]||"",onChange:k=>{const z=i.session_service_uri.split("/");z[3]=k.target.value,s({session_service_uri:z.join("/")})},placeholder:"location (e.g., us-central1)"}),o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[4]||"",onChange:k=>{const z=i.session_service_uri.split("/");z[4]=k.target.value,s({session_service_uri:z.join("/")})},placeholder:"agent-engine-id"})]}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.session_service_uri.startsWith("memory://")&&"Sessions stored in memory, lost on restart",i.session_service_uri.startsWith("file://")&&"Sessions stored as JSON files, preserves UI events",i.session_service_uri.startsWith("sqlite://")&&"Persists to local SQLite file",i.session_service_uri.startsWith("postgresql://")&&"Production-ready PostgreSQL backend",i.session_service_uri.startsWith("mysql://")&&"Production-ready MySQL backend",i.session_service_uri.startsWith("agentengine://")&&"Vertex AI Agent Engine managed sessions"]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Memory Service"}),o.jsxs("select",{value:i.memory_service_uri.split("://")[0],onChange:k=>{const z=k.target.value;s({memory_service_uri:{memory:"memory://",file:"file://~/.adk-playground/memory",rag:"rag://rag-corpus-id",agentengine:"agentengine://project/us-central1/engine-id"}[z]||z+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (keyword matching)"}),o.jsx("option",{value:"file",children:"File System (keyword matching)"}),o.jsx("option",{value:"rag",children:"Vertex AI RAG"}),o.jsx("option",{value:"agentengine",children:"Vertex AI Memory Bank"})]}),i.memory_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.memory_service_uri.replace("file://",""),onChange:k=>s({memory_service_uri:"file://"+k.target.value}),placeholder:"~/.adk-playground/memory",style:{marginTop:8}}),i.memory_service_uri.startsWith("rag://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.memory_service_uri.replace("rag://",""),onChange:k=>s({memory_service_uri:"rag://"+k.target.value}),placeholder:"rag-corpus-id or full resource path"}),o.jsx("span",{className:"help-text",style:{fontSize:11,color:"var(--text-dim)"},children:"Format: projects/PROJECT/locations/LOCATION/ragCorpora/CORPUS_ID"})]}),i.memory_service_uri.startsWith("agentengine://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[2]||"",onChange:k=>{const z=i.memory_service_uri.split("/");z[2]=k.target.value,s({memory_service_uri:z.join("/")})},placeholder:"project-id"}),o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[3]||"",onChange:k=>{const z=i.memory_service_uri.split("/");z[3]=k.target.value,s({memory_service_uri:z.join("/")})},placeholder:"location (e.g., us-central1)"}),o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[4]||"",onChange:k=>{const z=i.memory_service_uri.split("/");z[4]=k.target.value,s({memory_service_uri:z.join("/")})},placeholder:"agent-engine-id"})]}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.memory_service_uri.startsWith("memory://")&&"Simple keyword matching, good for prototyping",i.memory_service_uri.startsWith("file://")&&"Persists memories as JSON files",i.memory_service_uri.startsWith("rag://")&&"Semantic search using Vertex AI RAG corpus",i.memory_service_uri.startsWith("agentengine://")&&"Managed memory via Agent Engine Memory Bank"]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Artifact Service"}),o.jsxs("select",{value:i.artifact_service_uri.split("://")[0]==="gs"?"gs":i.artifact_service_uri.split("://")[0],onChange:k=>{const z=k.target.value;s({artifact_service_uri:{memory:"memory://",file:"file://~/.adk-playground/artifacts",gs:"gs://your-bucket-name"}[z]||z+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),o.jsx("option",{value:"file",children:"File System"}),o.jsx("option",{value:"gs",children:"Google Cloud Storage"})]}),i.artifact_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.artifact_service_uri.replace("file://",""),onChange:k=>s({artifact_service_uri:"file://"+k.target.value}),placeholder:"~/.adk-playground/artifacts",style:{marginTop:8}}),i.artifact_service_uri.startsWith("gs://")&&o.jsx("input",{type:"text",value:i.artifact_service_uri.replace("gs://",""),onChange:k=>s({artifact_service_uri:"gs://"+k.target.value}),placeholder:"bucket-name/optional-prefix",style:{marginTop:8}}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.artifact_service_uri.startsWith("memory://")&&"Artifacts stored in memory, lost on restart",i.artifact_service_uri.startsWith("file://")&&"Persists to local filesystem",i.artifact_service_uri.startsWith("gs://")&&"Production-ready Google Cloud Storage backend"]})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(Va,{size:20}),"Environment Variables"]})}),o.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginBottom:16},children:"Set API keys and other environment variables. These are passed to the agent runtime."}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16},children:_0.filter(k=>h[k.key]===void 0).map(k=>o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>v(k.key),title:k.description,children:[o.jsx(Me,{size:12}),k.key]},k.key))}),Object.keys(h).length===0?o.jsx("p",{className:"empty-message",children:"No environment variables set. Click a button above to add common variables, or add a custom one below."}):Object.entries(h).map(([k,z])=>o.jsxs("div",{className:"list-item",style:{alignItems:"center"},children:[o.jsxs("div",{style:{flex:1,display:"flex",gap:12,alignItems:"center"},children:[o.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:13,minWidth:200},children:k}),o.jsxs("div",{style:{flex:1,display:"flex",gap:8,alignItems:"center"},children:[o.jsx("input",{type:y[k]?"text":"password",value:z,onChange:M=>T(k,M.target.value),placeholder:"Enter value...",style:{flex:1}}),o.jsx("button",{className:"delete-item",onClick:()=>E(k),title:y[k]?"Hide value":"Show value",children:y[k]?o.jsx(u0,{size:16}):o.jsx(Wi,{size:16})})]})]}),o.jsx("button",{className:"delete-item",onClick:()=>R(k),children:o.jsx(Te,{size:16})})]},k)),o.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[o.jsx("input",{type:"text",value:C,onChange:k=>x(k.target.value.toUpperCase().replace(/[^A-Z0-9_]/g,"")),placeholder:"CUSTOM_VAR_NAME",style:{flex:1,fontFamily:"var(--font-mono)"},onKeyDown:k=>k.key==="Enter"&&v()}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>v(),disabled:!C.trim(),children:[o.jsx(Me,{size:14}),"Add Variable"]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(iu,{size:20}),"Models"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:w,children:[o.jsx(Me,{size:14}),"Add Model"]})]}),m.length===0?o.jsx("p",{className:"empty-message",children:"No models configured. Add models that agents can use."}):m.map(k=>o.jsxs("div",{className:"model-card",children:[o.jsxs("div",{className:"model-card-header",children:[o.jsx("input",{type:"text",value:k.name,onChange:z=>j(k.id,{name:z.target.value}),placeholder:"Model name",className:"model-name-input"}),o.jsx("button",{className:`default-model-btn ${i.default_model_id===k.id?"is-default":""}`,onClick:()=>g(k.id),title:i.default_model_id===k.id?"Default model":"Set as default",children:o.jsx(ig,{size:14,fill:i.default_model_id===k.id?"currentColor":"none"})}),o.jsx("button",{className:"delete-item",onClick:()=>N(k.id),children:o.jsx(Te,{size:16})})]}),o.jsxs("div",{className:"model-card-body",children:[o.jsxs("div",{className:"model-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Provider"}),o.jsxs("select",{value:k.provider,onChange:z=>j(k.id,{provider:z.target.value}),children:[o.jsx("option",{value:"gemini",children:"Gemini"}),o.jsx("option",{value:"litellm",children:"LiteLLM"}),o.jsx("option",{value:"anthropic",children:"Anthropic"})]})]}),o.jsxs("div",{className:"form-group",style:{flex:2},children:[o.jsx("label",{children:"Model Name"}),o.jsx("input",{type:"text",value:k.model_name,onChange:z=>j(k.id,{model_name:z.target.value}),placeholder:"e.g., gemini-2.0-flash"})]}),k.provider==="litellm"&&o.jsxs("div",{className:"form-group",style:{flex:2},children:[o.jsx("label",{children:"API Base URL"}),o.jsx("input",{type:"text",value:k.api_base||"",onChange:z=>j(k.id,{api_base:z.target.value||void 0}),placeholder:"http://localhost:11434"})]})]}),o.jsxs("div",{className:"model-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Temperature"}),o.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:k.temperature??"",onChange:z=>j(k.id,{temperature:z.target.value?parseFloat(z.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Max Tokens"}),o.jsx("input",{type:"number",min:"1",value:k.max_output_tokens??"",onChange:z=>j(k.id,{max_output_tokens:z.target.value?parseInt(z.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Top P"}),o.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:k.top_p??"",onChange:z=>j(k.id,{top_p:z.target.value?parseFloat(z.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Top K"}),o.jsx("input",{type:"number",min:"1",value:k.top_k??"",onChange:z=>j(k.id,{top_k:z.target.value?parseInt(z.target.value):void 0}),placeholder:"Default"})]})]})]})]},k.id))]}),o.jsxs("section",{className:"section",children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(sg,{size:20}),"Advanced Options"]})}),o.jsxs("div",{className:"toggle-group",children:[o.jsx("div",{className:`toggle ${i.compaction.enabled?"active":""}`,onClick:()=>s({compaction:{...i.compaction,enabled:!i.compaction.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Event Compaction"}),o.jsx("span",{children:"Automatically summarize old events to reduce context size"})]}),i.compaction.enabled&&o.jsx("input",{type:"number",value:i.compaction.max_events,onChange:k=>s({compaction:{...i.compaction,max_events:parseInt(k.target.value)||100}}),style:{width:80},placeholder:"Max events"})]}),o.jsxs("div",{className:"toggle-group",style:{marginTop:12},children:[o.jsx("div",{className:`toggle ${i.context_cache.enabled?"active":""}`,onClick:()=>s({context_cache:{...i.context_cache,enabled:!i.context_cache.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Context Caching"}),o.jsx("span",{children:"Cache static instructions for better performance"})]}),i.context_cache.enabled&&o.jsx("input",{type:"number",value:i.context_cache.ttl_seconds,onChange:k=>s({context_cache:{...i.context_cache,ttl_seconds:parseInt(k.target.value)||3600}}),style:{width:100},placeholder:"TTL (seconds)"})]}),o.jsxs("div",{className:"toggle-group",style:{marginTop:12},children:[o.jsx("div",{className:`toggle ${i.resumability.enabled?"active":""}`,onClick:()=>s({resumability:{...i.resumability,enabled:!i.resumability.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Resumability"}),o.jsx("span",{children:"Allow pausing and resuming agent execution"})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(ou,{size:20}),"Session State Keys"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:a,children:[o.jsx(Me,{size:14}),"Add Key"]})]}),i.state_keys.length===0?o.jsx("p",{className:"empty-message",children:"No state keys defined. Add keys to declare what data agents can share."}):i.state_keys.map((k,z)=>o.jsxs("div",{className:"list-item",children:[o.jsxs("div",{className:"list-item-content",children:[o.jsx("input",{type:"text",value:k.name,onChange:M=>c(z,{name:M.target.value}),placeholder:"Key name"}),o.jsxs("select",{value:k.type,onChange:M=>c(z,{type:M.target.value}),children:[o.jsx("option",{value:"string",children:"String"}),o.jsx("option",{value:"number",children:"Number"}),o.jsx("option",{value:"boolean",children:"Boolean"}),o.jsx("option",{value:"object",children:"Object"}),o.jsx("option",{value:"array",children:"Array"})]}),o.jsxs("select",{value:k.scope,onChange:M=>c(z,{scope:M.target.value}),children:[o.jsx("option",{value:"session",children:"Session"}),o.jsx("option",{value:"user",children:"User"}),o.jsx("option",{value:"app",children:"App"}),o.jsx("option",{value:"temp",children:"Temporary"})]}),o.jsx("input",{type:"text",value:k.description,onChange:M=>c(z,{description:M.target.value}),placeholder:"Description",style:{gridColumn:"span 2"}})]}),o.jsx("button",{className:"delete-item",onClick:()=>u(z),children:o.jsx(Te,{size:16})})]},z))]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(wn,{size:20}),"Plugins"]}),o.jsx("div",{className:"plugin-add-dropdown",children:o.jsxs("select",{className:"btn btn-secondary btn-sm",value:"",onChange:k=>{k.target.value&&(d(k.target.value),k.target.value="")},style:{paddingRight:8},children:[o.jsx("option",{value:"",children:"+ Add Plugin..."}),o.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),o.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),o.jsx("option",{value:"LoggingPlugin",children:"Logging"}),o.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),o.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),o.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]})})]}),i.plugins.length===0?o.jsx("p",{className:"empty-message",children:"No plugins configured. Add plugins to extend agent functionality."}):i.plugins.map((k,z)=>o.jsxs("div",{className:"list-item",style:{flexDirection:"column",gap:12},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",gap:12},children:[o.jsxs("select",{value:k.type,onChange:M=>p(z,{type:M.target.value}),style:{flex:1},children:[o.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),o.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),o.jsx("option",{value:"LoggingPlugin",children:"Logging"}),o.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),o.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),o.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]}),o.jsx("button",{className:"delete-item",onClick:()=>f(z),children:o.jsx(Te,{size:16})})]}),k.type==="ReflectAndRetryToolPlugin"&&o.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",style:{flex:0},children:[o.jsx("label",{style:{fontSize:12},children:"Max Retries"}),o.jsx("input",{type:"number",min:"0",max:"10",value:k.max_retries??3,onChange:M=>p(z,{max_retries:parseInt(M.target.value)||0}),style:{width:70}})]}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:k.throw_exception_if_retry_exceeded??!1,onChange:M=>p(z,{throw_exception_if_retry_exceeded:M.target.checked})}),o.jsx("span",{className:"toggle-slider"})]}),"Throw exception if retry exceeded"]})]}),k.type==="ContextFilterPlugin"&&o.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",style:{flex:0},children:[o.jsx("label",{style:{fontSize:12},children:"Invocations to Keep"}),o.jsx("input",{type:"number",min:"1",max:"100",value:k.num_invocations_to_keep??5,onChange:M=>p(z,{num_invocations_to_keep:parseInt(M.target.value)||1}),style:{width:70}})]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Keeps only the last N conversation turns to reduce context size"})]}),k.type==="LoggingPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Logs all agent events (messages, tool calls, responses) to the console"})}),k.type==="GlobalInstructionPlugin"&&o.jsxs("div",{style:{width:"100%",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{style:{fontSize:12},children:"Global Instruction"}),o.jsx("textarea",{value:k.global_instruction??"",onChange:M=>p(z,{global_instruction:M.target.value}),placeholder:"Instructions that apply to all agents in the app...",rows:3,style:{width:"100%"}})]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"This instruction is prepended to every agent's system prompt"})]}),k.type==="SaveFilesAsArtifactsPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Automatically saves files uploaded in user messages as artifacts for later retrieval"})}),k.type==="MultimodalToolResultsPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Allows tools to return multimodal content (images, files) directly to the LLM"})})]},z))]})]})}const N0="modulepreload",E0=function(e){return"/"+e},Xd={},lg=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),a=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=E0(c),c in Xd)return;Xd[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":N0,u||(p.as="script"),p.crossOrigin="",p.href=c,a&&p.setAttribute("nonce",a),document.head.appendChild(p),u)return new Promise((f,m)=>{p.addEventListener("load",f),p.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(l){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=l,window.dispatchEvent(a),!a.defaultPrevented)throw l}return i.then(l=>{for(const a of l||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};function Zd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function z0(e){if(Array.isArray(e))return e}function T0(e,t,n){return(t=O0(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P0(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,s,l,a=[],c=!0,u=!1;try{if(s=(n=n.call(e)).next,t!==0)for(;!(c=(r=s.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(d){u=!0,i=d}finally{try{if(!c&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw i}}return a}}function L0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ep(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function tp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ep(Object(n),!0).forEach(function(r){T0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ep(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function A0(e,t){if(e==null)return{};var n,r,i=R0(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function R0(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function I0(e,t){return z0(e)||P0(e,t)||$0(e,t)||L0()}function M0(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function O0(e){var t=M0(e,"string");return typeof t=="symbol"?t:t+""}function $0(e,t){if(e){if(typeof e=="string")return Zd(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Zd(e,t):void 0}}function D0(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function np(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function rp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?np(Object(n),!0).forEach(function(r){D0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):np(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function F0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,s){return s(i)},r)}}function ui(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var l=arguments.length,a=new Array(l),c=0;c<l;c++)a[c]=arguments[c];return t.apply(n,[].concat(i,a))}}}function ys(e){return{}.toString.call(e).includes("Object")}function B0(e){return!Object.keys(e).length}function Hi(e){return typeof e=="function"}function U0(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function V0(e,t){return ys(t)||Ln("changeType"),Object.keys(t).some(function(n){return!U0(e,n)})&&Ln("changeField"),t}function W0(e){Hi(e)||Ln("selectorType")}function H0(e){Hi(e)||ys(e)||Ln("handlerType"),ys(e)&&Object.values(e).some(function(t){return!Hi(t)})&&Ln("handlersType")}function q0(e){e||Ln("initialIsRequired"),ys(e)||Ln("initialType"),B0(e)&&Ln("initialContent")}function J0(e,t){throw new Error(e[t]||e.default)}var K0={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Ln=ui(J0)(K0),jo={changes:V0,selector:W0,handler:H0,initial:q0};function Q0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};jo.initial(e),jo.handler(t);var n={current:e},r=ui(X0)(n,t),i=ui(Y0)(n),s=ui(jo.changes)(e),l=ui(G0)(n);function a(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return jo.selector(u),u(n.current)}function c(u){F0(r,i,s,l)(u)}return[a,c]}function G0(e,t){return Hi(t)?t(e.current):t}function Y0(e,t){return e.current=rp(rp({},e.current),t),t}function X0(e,t,n){return Hi(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var Z0={create:Q0},eb={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function tb(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var l=arguments.length,a=new Array(l),c=0;c<l;c++)a[c]=arguments[c];return t.apply(n,[].concat(i,a))}}}function nb(e){return{}.toString.call(e).includes("Object")}function rb(e){return e||ip("configIsRequired"),nb(e)||ip("configType"),e.urls?(ib(),{paths:{vs:e.urls.monacoBase}}):e}function ib(){console.warn(ag.deprecation)}function ob(e,t){throw new Error(e[t]||e.default)}var ag={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},ip=tb(ob)(ag),sb={config:rb},lb=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(s,l){return l(s)},i)}};function cg(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],cg(e[n],t[n]))}),tp(tp({},e),t)}var ab={type:"cancelation",msg:"operation is manually canceled"};function Nl(e){var t=!1,n=new Promise(function(r,i){e.then(function(s){return t?i(ab):r(s)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var cb=["monaco"],ub=Z0.create({config:eb,isInitialized:!1,resolve:null,reject:null,monaco:null}),ug=I0(ub,2),eo=ug[0],Vs=ug[1];function db(e){var t=sb.config(e),n=t.monaco,r=A0(t,cb);Vs(function(i){return{config:cg(i.config,r),monaco:n}})}function pb(){var e=eo(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(Vs({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),Nl(El);if(window.monaco&&window.monaco.editor)return dg(window.monaco),e.resolve(window.monaco),Nl(El);lb(fb,hb)(gb)}return Nl(El)}function fb(e){return document.body.appendChild(e)}function mb(e){var t=document.createElement("script");return e&&(t.src=e),t}function hb(e){var t=eo(function(r){var i=r.config,s=r.reject;return{config:i,reject:s}}),n=mb("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function gb(){var e=eo(function(n){var r=n.config,i=n.resolve,s=n.reject;return{config:r,resolve:i,reject:s}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;dg(r),e.resolve(r)},function(n){e.reject(n)})}function dg(e){eo().monaco||Vs({monaco:e})}function xb(){return eo(function(e){var t=e.monaco;return t})}var El=new Promise(function(e,t){return Vs({resolve:e,reject:t})}),pg={config:db,init:pb,__getMonacoInstance:xb},yb={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},zl=yb,vb={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},bb=vb;function kb({children:e}){return Lt.createElement("div",{style:bb.container},e)}var jb=kb,wb=jb;function _b({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:s,wrapperProps:l}){return Lt.createElement("section",{style:{...zl.wrapper,width:e,height:t},...l},!n&&Lt.createElement(wb,null,r),Lt.createElement("div",{ref:i,style:{...zl.fullWidth,...!n&&zl.hide},className:s}))}var Sb=_b,fg=_.memo(Sb);function Cb(e){_.useEffect(e,[])}var mg=Cb;function Nb(e,t,n=!0){let r=_.useRef(!0);_.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var xt=Nb;function bi(){}function _r(e,t,n,r){return Eb(e,r)||zb(e,t,n,r)}function Eb(e,t){return e.editor.getModel(hg(e,t))}function zb(e,t,n,r){return e.editor.createModel(t,n,r?hg(e,r):void 0)}function hg(e,t){return e.Uri.parse(t)}function Tb({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:s,modifiedModelPath:l,keepCurrentOriginalModel:a=!1,keepCurrentModifiedModel:c=!1,theme:u="light",loading:d="Loading...",options:p={},height:f="100%",width:m="100%",className:w,wrapperProps:j={},beforeMount:N=bi,onMount:g=bi}){let[h,y]=_.useState(!1),[P,C]=_.useState(!0),x=_.useRef(null),v=_.useRef(null),T=_.useRef(null),R=_.useRef(g),E=_.useRef(N),k=_.useRef(!1);mg(()=>{let B=pg.init();return B.then(Y=>(v.current=Y)&&C(!1)).catch(Y=>(Y==null?void 0:Y.type)!=="cancelation"&&console.error("Monaco initialization: error:",Y)),()=>x.current?q():B.cancel()}),xt(()=>{if(x.current&&v.current){let B=x.current.getOriginalEditor(),Y=_r(v.current,e||"",r||n||"text",s||"");Y!==B.getModel()&&B.setModel(Y)}},[s],h),xt(()=>{if(x.current&&v.current){let B=x.current.getModifiedEditor(),Y=_r(v.current,t||"",i||n||"text",l||"");Y!==B.getModel()&&B.setModel(Y)}},[l],h),xt(()=>{let B=x.current.getModifiedEditor();B.getOption(v.current.editor.EditorOption.readOnly)?B.setValue(t||""):t!==B.getValue()&&(B.executeEdits("",[{range:B.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),B.pushUndoStop())},[t],h),xt(()=>{var B,Y;(Y=(B=x.current)==null?void 0:B.getModel())==null||Y.original.setValue(e||"")},[e],h),xt(()=>{let{original:B,modified:Y}=x.current.getModel();v.current.editor.setModelLanguage(B,r||n||"text"),v.current.editor.setModelLanguage(Y,i||n||"text")},[n,r,i],h),xt(()=>{var B;(B=v.current)==null||B.editor.setTheme(u)},[u],h),xt(()=>{var B;(B=x.current)==null||B.updateOptions(p)},[p],h);let z=_.useCallback(()=>{var A;if(!v.current)return;E.current(v.current);let B=_r(v.current,e||"",r||n||"text",s||""),Y=_r(v.current,t||"",i||n||"text",l||"");(A=x.current)==null||A.setModel({original:B,modified:Y})},[n,t,i,e,r,s,l]),M=_.useCallback(()=>{var B;!k.current&&T.current&&(x.current=v.current.editor.createDiffEditor(T.current,{automaticLayout:!0,...p}),z(),(B=v.current)==null||B.editor.setTheme(u),y(!0),k.current=!0)},[p,u,z]);_.useEffect(()=>{h&&R.current(x.current,v.current)},[h]),_.useEffect(()=>{!P&&!h&&M()},[P,h,M]);function q(){var Y,A,$,I;let B=(Y=x.current)==null?void 0:Y.getModel();a||((A=B==null?void 0:B.original)==null||A.dispose()),c||(($=B==null?void 0:B.modified)==null||$.dispose()),(I=x.current)==null||I.dispose()}return Lt.createElement(fg,{width:m,height:f,isEditorReady:h,loading:d,_ref:T,className:w,wrapperProps:j})}var Pb=Tb;_.memo(Pb);function Lb(e){let t=_.useRef();return _.useEffect(()=>{t.current=e},[e]),t.current}var Ab=Lb,wo=new Map;function Rb({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:s,theme:l="light",line:a,loading:c="Loading...",options:u={},overrideServices:d={},saveViewState:p=!0,keepCurrentModel:f=!1,width:m="100%",height:w="100%",className:j,wrapperProps:N={},beforeMount:g=bi,onMount:h=bi,onChange:y,onValidate:P=bi}){let[C,x]=_.useState(!1),[v,T]=_.useState(!0),R=_.useRef(null),E=_.useRef(null),k=_.useRef(null),z=_.useRef(h),M=_.useRef(g),q=_.useRef(),B=_.useRef(r),Y=Ab(s),A=_.useRef(!1),$=_.useRef(!1);mg(()=>{let U=pg.init();return U.then(J=>(R.current=J)&&T(!1)).catch(J=>(J==null?void 0:J.type)!=="cancelation"&&console.error("Monaco initialization: error:",J)),()=>E.current?b():U.cancel()}),xt(()=>{var J,S,oe,L;let U=_r(R.current,e||r||"",t||i||"",s||n||"");U!==((J=E.current)==null?void 0:J.getModel())&&(p&&wo.set(Y,(S=E.current)==null?void 0:S.saveViewState()),(oe=E.current)==null||oe.setModel(U),p&&((L=E.current)==null||L.restoreViewState(wo.get(s))))},[s],C),xt(()=>{var U;(U=E.current)==null||U.updateOptions(u)},[u],C),xt(()=>{!E.current||r===void 0||(E.current.getOption(R.current.editor.EditorOption.readOnly)?E.current.setValue(r):r!==E.current.getValue()&&($.current=!0,E.current.executeEdits("",[{range:E.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),E.current.pushUndoStop(),$.current=!1))},[r],C),xt(()=>{var J,S;let U=(J=E.current)==null?void 0:J.getModel();U&&i&&((S=R.current)==null||S.editor.setModelLanguage(U,i))},[i],C),xt(()=>{var U;a!==void 0&&((U=E.current)==null||U.revealLine(a))},[a],C),xt(()=>{var U;(U=R.current)==null||U.editor.setTheme(l)},[l],C);let I=_.useCallback(()=>{var U;if(!(!k.current||!R.current)&&!A.current){M.current(R.current);let J=s||n,S=_r(R.current,r||e||"",t||i||"",J||"");E.current=(U=R.current)==null?void 0:U.editor.create(k.current,{model:S,automaticLayout:!0,...u},d),p&&E.current.restoreViewState(wo.get(J)),R.current.editor.setTheme(l),a!==void 0&&E.current.revealLine(a),x(!0),A.current=!0}},[e,t,n,r,i,s,u,d,p,l,a]);_.useEffect(()=>{C&&z.current(E.current,R.current)},[C]),_.useEffect(()=>{!v&&!C&&I()},[v,C,I]),B.current=r,_.useEffect(()=>{var U,J;C&&y&&((U=q.current)==null||U.dispose(),q.current=(J=E.current)==null?void 0:J.onDidChangeModelContent(S=>{$.current||y(E.current.getValue(),S)}))},[C,y]),_.useEffect(()=>{if(C){let U=R.current.editor.onDidChangeMarkers(J=>{var oe;let S=(oe=E.current.getModel())==null?void 0:oe.uri;if(S&&J.find(L=>L.path===S.path)){let L=R.current.editor.getModelMarkers({resource:S});P==null||P(L)}});return()=>{U==null||U.dispose()}}return()=>{}},[C,P]);function b(){var U,J;(U=q.current)==null||U.dispose(),f?p&&wo.set(s,E.current.saveViewState()):(J=E.current.getModel())==null||J.dispose(),E.current.dispose()}return Lt.createElement(fg,{width:m,height:w,isEditorReady:C,loading:c,_ref:k,className:j,wrapperProps:N})}var Ib=Rb,Mb=_.memo(Ib),ln=Mb;function Ob(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const $b=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Db=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Fb={};function op(e,t){return(Fb.jsx?Db:$b).test(e)}const Bb=/[ \t\n\f\r]/g;function Ub(e){return typeof e=="object"?e.type==="text"?sp(e.value):!1:sp(e)}function sp(e){return e.replace(Bb,"")===""}class to{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}to.prototype.normal={};to.prototype.property={};to.prototype.space=void 0;function gg(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new to(n,r,t)}function Ha(e){return e.toLowerCase()}class pt{constructor(t,n){this.attribute=n,this.property=t}}pt.prototype.attribute="";pt.prototype.booleanish=!1;pt.prototype.boolean=!1;pt.prototype.commaOrSpaceSeparated=!1;pt.prototype.commaSeparated=!1;pt.prototype.defined=!1;pt.prototype.mustUseProperty=!1;pt.prototype.number=!1;pt.prototype.overloadedBoolean=!1;pt.prototype.property="";pt.prototype.spaceSeparated=!1;pt.prototype.space=void 0;let Vb=0;const ue=lr(),Oe=lr(),qa=lr(),Q=lr(),ke=lr(),Pr=lr(),ht=lr();function lr(){return 2**++Vb}const Ja=Object.freeze(Object.defineProperty({__proto__:null,boolean:ue,booleanish:Oe,commaOrSpaceSeparated:ht,commaSeparated:Pr,number:Q,overloadedBoolean:qa,spaceSeparated:ke},Symbol.toStringTag,{value:"Module"})),Tl=Object.keys(Ja);class cu extends pt{constructor(t,n,r,i){let s=-1;if(super(t,n),lp(this,"space",i),typeof r=="number")for(;++s<Tl.length;){const l=Tl[s];lp(this,Tl[s],(r&Ja[l])===Ja[l])}}}cu.prototype.defined=!0;function lp(e,t,n){n&&(e[t]=n)}function qr(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const s=new cu(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(s.mustUseProperty=!0),t[r]=s,n[Ha(r)]=r,n[Ha(s.attribute)]=r}return new to(t,n,e.space)}const xg=qr({properties:{ariaActiveDescendant:null,ariaAtomic:Oe,ariaAutoComplete:null,ariaBusy:Oe,ariaChecked:Oe,ariaColCount:Q,ariaColIndex:Q,ariaColSpan:Q,ariaControls:ke,ariaCurrent:null,ariaDescribedBy:ke,ariaDetails:null,ariaDisabled:Oe,ariaDropEffect:ke,ariaErrorMessage:null,ariaExpanded:Oe,ariaFlowTo:ke,ariaGrabbed:Oe,ariaHasPopup:null,ariaHidden:Oe,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ke,ariaLevel:Q,ariaLive:null,ariaModal:Oe,ariaMultiLine:Oe,ariaMultiSelectable:Oe,ariaOrientation:null,ariaOwns:ke,ariaPlaceholder:null,ariaPosInSet:Q,ariaPressed:Oe,ariaReadOnly:Oe,ariaRelevant:null,ariaRequired:Oe,ariaRoleDescription:ke,ariaRowCount:Q,ariaRowIndex:Q,ariaRowSpan:Q,ariaSelected:Oe,ariaSetSize:Q,ariaSort:null,ariaValueMax:Q,ariaValueMin:Q,ariaValueNow:Q,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function yg(e,t){return t in e?e[t]:t}function vg(e,t){return yg(e,t.toLowerCase())}const Wb=qr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Pr,acceptCharset:ke,accessKey:ke,action:null,allow:null,allowFullScreen:ue,allowPaymentRequest:ue,allowUserMedia:ue,alt:null,as:null,async:ue,autoCapitalize:null,autoComplete:ke,autoFocus:ue,autoPlay:ue,blocking:ke,capture:null,charSet:null,checked:ue,cite:null,className:ke,cols:Q,colSpan:null,content:null,contentEditable:Oe,controls:ue,controlsList:ke,coords:Q|Pr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ue,defer:ue,dir:null,dirName:null,disabled:ue,download:qa,draggable:Oe,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ue,formTarget:null,headers:ke,height:Q,hidden:qa,high:Q,href:null,hrefLang:null,htmlFor:ke,httpEquiv:ke,id:null,imageSizes:null,imageSrcSet:null,inert:ue,inputMode:null,integrity:null,is:null,isMap:ue,itemId:null,itemProp:ke,itemRef:ke,itemScope:ue,itemType:ke,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ue,low:Q,manifest:null,max:null,maxLength:Q,media:null,method:null,min:null,minLength:Q,multiple:ue,muted:ue,name:null,nonce:null,noModule:ue,noValidate:ue,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ue,optimum:Q,pattern:null,ping:ke,placeholder:null,playsInline:ue,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ue,referrerPolicy:null,rel:ke,required:ue,reversed:ue,rows:Q,rowSpan:Q,sandbox:ke,scope:null,scoped:ue,seamless:ue,selected:ue,shadowRootClonable:ue,shadowRootDelegatesFocus:ue,shadowRootMode:null,shape:null,size:Q,sizes:null,slot:null,span:Q,spellCheck:Oe,src:null,srcDoc:null,srcLang:null,srcSet:null,start:Q,step:null,style:null,tabIndex:Q,target:null,title:null,translate:null,type:null,typeMustMatch:ue,useMap:null,value:Oe,width:Q,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ke,axis:null,background:null,bgColor:null,border:Q,borderColor:null,bottomMargin:Q,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ue,declare:ue,event:null,face:null,frame:null,frameBorder:null,hSpace:Q,leftMargin:Q,link:null,longDesc:null,lowSrc:null,marginHeight:Q,marginWidth:Q,noResize:ue,noHref:ue,noShade:ue,noWrap:ue,object:null,profile:null,prompt:null,rev:null,rightMargin:Q,rules:null,scheme:null,scrolling:Oe,standby:null,summary:null,text:null,topMargin:Q,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Q,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ue,disableRemotePlayback:ue,prefix:null,property:null,results:Q,security:null,unselectable:null},space:"html",transform:vg}),Hb=qr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:ht,accentHeight:Q,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:Q,amplitude:Q,arabicForm:null,ascent:Q,attributeName:null,attributeType:null,azimuth:Q,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:Q,by:null,calcMode:null,capHeight:Q,className:ke,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:Q,diffuseConstant:Q,direction:null,display:null,dur:null,divisor:Q,dominantBaseline:null,download:ue,dx:null,dy:null,edgeMode:null,editable:null,elevation:Q,enableBackground:null,end:null,event:null,exponent:Q,externalResourcesRequired:null,fill:null,fillOpacity:Q,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Pr,g2:Pr,glyphName:Pr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:Q,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:Q,horizOriginX:Q,horizOriginY:Q,id:null,ideographic:Q,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:Q,k:Q,k1:Q,k2:Q,k3:Q,k4:Q,kernelMatrix:ht,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:Q,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:Q,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:Q,overlineThickness:Q,paintOrder:null,panose1:null,path:null,pathLength:Q,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ke,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:Q,pointsAtY:Q,pointsAtZ:Q,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:ht,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:ht,rev:ht,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:ht,requiredFeatures:ht,requiredFonts:ht,requiredFormats:ht,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:Q,specularExponent:Q,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:Q,strikethroughThickness:Q,string:null,stroke:null,strokeDashArray:ht,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:Q,strokeOpacity:Q,strokeWidth:null,style:null,surfaceScale:Q,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:ht,tabIndex:Q,tableValues:null,target:null,targetX:Q,targetY:Q,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:ht,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:Q,underlineThickness:Q,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:Q,values:null,vAlphabetic:Q,vMathematical:Q,vectorEffect:null,vHanging:Q,vIdeographic:Q,version:null,vertAdvY:Q,vertOriginX:Q,vertOriginY:Q,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:Q,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:yg}),bg=qr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),kg=qr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:vg}),jg=qr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),qb={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Jb=/[A-Z]/g,ap=/-[a-z]/g,Kb=/^data[-\w.:]+$/i;function Qb(e,t){const n=Ha(t);let r=t,i=pt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Kb.test(t)){if(t.charAt(4)==="-"){const s=t.slice(5).replace(ap,Yb);r="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=t.slice(4);if(!ap.test(s)){let l=s.replace(Jb,Gb);l.charAt(0)!=="-"&&(l="-"+l),t="data"+l}}i=cu}return new i(r,t)}function Gb(e){return"-"+e.toLowerCase()}function Yb(e){return e.charAt(1).toUpperCase()}const Xb=gg([xg,Wb,bg,kg,jg],"html"),uu=gg([xg,Hb,bg,kg,jg],"svg");function Zb(e){return e.join(" ").trim()}var du={},cp=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,ek=/\n/g,tk=/^\s*/,nk=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,rk=/^:\s*/,ik=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,ok=/^[;\s]*/,sk=/^\s+|\s+$/g,lk=`
`,up="/",dp="*",qn="",ak="comment",ck="declaration";function uk(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(w){var j=w.match(ek);j&&(n+=j.length);var N=w.lastIndexOf(lk);r=~N?w.length-N:r+w.length}function s(){var w={line:n,column:r};return function(j){return j.position=new l(w),u(),j}}function l(w){this.start=w,this.end={line:n,column:r},this.source=t.source}l.prototype.content=e;function a(w){var j=new Error(t.source+":"+n+":"+r+": "+w);if(j.reason=w,j.filename=t.source,j.line=n,j.column=r,j.source=e,!t.silent)throw j}function c(w){var j=w.exec(e);if(j){var N=j[0];return i(N),e=e.slice(N.length),j}}function u(){c(tk)}function d(w){var j;for(w=w||[];j=p();)j!==!1&&w.push(j);return w}function p(){var w=s();if(!(up!=e.charAt(0)||dp!=e.charAt(1))){for(var j=2;qn!=e.charAt(j)&&(dp!=e.charAt(j)||up!=e.charAt(j+1));)++j;if(j+=2,qn===e.charAt(j-1))return a("End of comment missing");var N=e.slice(2,j-2);return r+=2,i(N),e=e.slice(j),r+=2,w({type:ak,comment:N})}}function f(){var w=s(),j=c(nk);if(j){if(p(),!c(rk))return a("property missing ':'");var N=c(ik),g=w({type:ck,property:pp(j[0].replace(cp,qn)),value:N?pp(N[0].replace(cp,qn)):qn});return c(ok),g}}function m(){var w=[];d(w);for(var j;j=f();)j!==!1&&(w.push(j),d(w));return w}return u(),m()}function pp(e){return e?e.replace(sk,qn):qn}var dk=uk,pk=Uo&&Uo.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(du,"__esModule",{value:!0});du.default=mk;const fk=pk(dk);function mk(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,fk.default)(e),i=typeof t=="function";return r.forEach(s=>{if(s.type!=="declaration")return;const{property:l,value:a}=s;i?t(l,a,s):a&&(n=n||{},n[l]=a)}),n}var Ws={};Object.defineProperty(Ws,"__esModule",{value:!0});Ws.camelCase=void 0;var hk=/^--[a-zA-Z0-9_-]+$/,gk=/-([a-z])/g,xk=/^[^-]+$/,yk=/^-(webkit|moz|ms|o|khtml)-/,vk=/^-(ms)-/,bk=function(e){return!e||xk.test(e)||hk.test(e)},kk=function(e,t){return t.toUpperCase()},fp=function(e,t){return"".concat(t,"-")},jk=function(e,t){return t===void 0&&(t={}),bk(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(vk,fp):e=e.replace(yk,fp),e.replace(gk,kk))};Ws.camelCase=jk;var wk=Uo&&Uo.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},_k=wk(du),Sk=Ws;function Ka(e,t){var n={};return!e||typeof e!="string"||(0,_k.default)(e,function(r,i){r&&i&&(n[(0,Sk.camelCase)(r,t)]=i)}),n}Ka.default=Ka;var Ck=Ka;const Nk=js(Ck),wg=_g("end"),pu=_g("start");function _g(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Ek(e){const t=pu(e),n=wg(e);if(t&&n)return{start:t,end:n}}function ki(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?mp(e.position):"start"in e||"end"in e?mp(e):"line"in e||"column"in e?Qa(e):""}function Qa(e){return hp(e&&e.line)+":"+hp(e&&e.column)}function mp(e){return Qa(e&&e.start)+"-"+Qa(e&&e.end)}function hp(e){return e&&typeof e=="number"?e:1}class Ze extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",s={},l=!1;if(n&&("line"in n&&"column"in n?s={place:n}:"start"in n&&"end"in n?s={place:n}:"type"in n?s={ancestors:[n],place:n.position}:s={...n}),typeof t=="string"?i=t:!s.cause&&t&&(l=!0,i=t.message,s.cause=t),!s.ruleId&&!s.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?s.ruleId=r:(s.source=r.slice(0,c),s.ruleId=r.slice(c+1))}if(!s.place&&s.ancestors&&s.ancestors){const c=s.ancestors[s.ancestors.length-1];c&&(s.place=c.position)}const a=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=a?a.line:void 0,this.name=ki(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=l&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Ze.prototype.file="";Ze.prototype.name="";Ze.prototype.reason="";Ze.prototype.message="";Ze.prototype.stack="";Ze.prototype.column=void 0;Ze.prototype.line=void 0;Ze.prototype.ancestors=void 0;Ze.prototype.cause=void 0;Ze.prototype.fatal=void 0;Ze.prototype.place=void 0;Ze.prototype.ruleId=void 0;Ze.prototype.source=void 0;const fu={}.hasOwnProperty,zk=new Map,Tk=/[A-Z]/g,Pk=new Set(["table","tbody","thead","tfoot","tr"]),Lk=new Set(["td","th"]),Sg="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Ak(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=Bk(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Fk(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?uu:Xb,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},s=Cg(i,e,void 0);return s&&typeof s!="string"?s:i.create(e,i.Fragment,{children:s||void 0},void 0)}function Cg(e,t,n){if(t.type==="element")return Rk(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return Ik(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return Ok(e,t,n);if(t.type==="mdxjsEsm")return Mk(e,t);if(t.type==="root")return $k(e,t,n);if(t.type==="text")return Dk(e,t)}function Rk(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=uu,e.schema=i),e.ancestors.push(t);const s=Eg(e,t.tagName,!1),l=Uk(e,t);let a=hu(e,t);return Pk.has(t.tagName)&&(a=a.filter(function(c){return typeof c=="string"?!Ub(c):!0})),Ng(e,l,s,t),mu(l,a),e.ancestors.pop(),e.schema=r,e.create(t,s,l,n)}function Ik(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}qi(e,t.position)}function Mk(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);qi(e,t.position)}function Ok(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=uu,e.schema=i),e.ancestors.push(t);const s=t.name===null?e.Fragment:Eg(e,t.name,!0),l=Vk(e,t),a=hu(e,t);return Ng(e,l,s,t),mu(l,a),e.ancestors.pop(),e.schema=r,e.create(t,s,l,n)}function $k(e,t,n){const r={};return mu(r,hu(e,t)),e.create(t,e.Fragment,r,n)}function Dk(e,t){return t.value}function Ng(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function mu(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function Fk(e,t,n){return r;function r(i,s,l,a){const u=Array.isArray(l.children)?n:t;return a?u(s,l,a):u(s,l)}}function Bk(e,t){return n;function n(r,i,s,l){const a=Array.isArray(s.children),c=pu(r);return t(i,s,l,a,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function Uk(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&fu.call(t.properties,i)){const s=Wk(e,i,t.properties[i]);if(s){const[l,a]=s;e.tableCellAlignToStyle&&l==="align"&&typeof a=="string"&&Lk.has(t.tagName)?r=a:n[l]=a}}if(r){const s=n.style||(n.style={});s[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function Vk(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const s=r.data.estree.body[0];s.type;const l=s.expression;l.type;const a=l.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else qi(e,t.position);else{const i=r.name;let s;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const a=r.value.data.estree.body[0];a.type,s=e.evaluater.evaluateExpression(a.expression)}else qi(e,t.position);else s=r.value===null?!0:r.value;n[i]=s}return n}function hu(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:zk;for(;++r<t.children.length;){const s=t.children[r];let l;if(e.passKeys){const c=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(c){const u=i.get(c)||0;l=c+"-"+u,i.set(c,u+1)}}const a=Cg(e,s,l);a!==void 0&&n.push(a)}return n}function Wk(e,t,n){const r=Qb(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Ob(n):Zb(n)),r.property==="style"){let i=typeof n=="object"?n:Hk(e,String(n));return e.stylePropertyNameCase==="css"&&(i=qk(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?qb[r.property]||r.property:r.attribute,n]}}function Hk(e,t){try{return Nk(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new Ze("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Sg+"#cannot-parse-style-attribute",i}}function Eg(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let s=-1,l;for(;++s<i.length;){const a=op(i[s])?{type:"Identifier",name:i[s]}:{type:"Literal",value:i[s]};l=l?{type:"MemberExpression",object:l,property:a,computed:!!(s&&a.type==="Literal"),optional:!1}:a}r=l}else r=op(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return fu.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);qi(e)}function qi(e,t){const n=new Ze("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Sg+"#cannot-handle-mdx-estrees-without-createevaluater",n}function qk(e){const t={};let n;for(n in e)fu.call(e,n)&&(t[Jk(n)]=e[n]);return t}function Jk(e){let t=e.replace(Tk,Kk);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function Kk(e){return"-"+e.toLowerCase()}const Pl={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Qk={};function Gk(e,t){const n=Qk,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return zg(e,r,i)}function zg(e,t,n){if(Yk(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return gp(e.children,t,n)}return Array.isArray(e)?gp(e,t,n):""}function gp(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=zg(e[i],t,n);return r.join("")}function Yk(e){return!!(e&&typeof e=="object")}const xp=document.createElement("i");function gu(e){const t="&"+e+";";xp.innerHTML=t;const n=xp.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Yt(e,t,n,r){const i=e.length;let s=0,l;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)l=Array.from(r),l.unshift(t,n),e.splice(...l);else for(n&&e.splice(t,n);s<r.length;)l=r.slice(s,s+1e4),l.unshift(t,0),e.splice(...l),s+=1e4,t+=1e4}function Tt(e,t){return e.length>0?(Yt(e,e.length,0,t),e):t}const yp={}.hasOwnProperty;function Xk(e){const t={};let n=-1;for(;++n<e.length;)Zk(t,e[n]);return t}function Zk(e,t){let n;for(n in t){const i=(yp.call(e,n)?e[n]:void 0)||(e[n]={}),s=t[n];let l;if(s)for(l in s){yp.call(i,l)||(i[l]=[]);const a=s[l];ej(i[l],Array.isArray(a)?a:a?[a]:[])}}}function ej(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Yt(e,0,0,r)}function Tg(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Lr(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Jt=Bn(/[A-Za-z]/),vt=Bn(/[\dA-Za-z]/),tj=Bn(/[#-'*+\--9=?A-Z^-~]/);function Ga(e){return e!==null&&(e<32||e===127)}const Ya=Bn(/\d/),nj=Bn(/[\dA-Fa-f]/),rj=Bn(/[!-/:-@[-`{-~]/);function ae(e){return e!==null&&e<-2}function dt(e){return e!==null&&(e<0||e===32)}function ye(e){return e===-2||e===-1||e===32}const ij=Bn(new RegExp("\\p{P}|\\p{S}","u")),oj=Bn(/\s/);function Bn(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Jr(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const s=e.charCodeAt(n);let l="";if(s===37&&vt(e.charCodeAt(n+1))&&vt(e.charCodeAt(n+2)))i=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(l=String.fromCharCode(s));else if(s>55295&&s<57344){const a=e.charCodeAt(n+1);s<56320&&a>56319&&a<57344?(l=String.fromCharCode(s,a),i=1):l="�"}else l=String.fromCharCode(s);l&&(t.push(e.slice(r,n),encodeURIComponent(l)),r=n+i+1,l=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function we(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let s=0;return l;function l(c){return ye(c)?(e.enter(n),a(c)):t(c)}function a(c){return ye(c)&&s++<i?(e.consume(c),a):(e.exit(n),t(c))}}const sj={tokenize:lj};function lj(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),we(e,t,"linePrefix")}function i(a){return e.enter("paragraph"),s(a)}function s(a){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,l(a)}function l(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return ae(a)?(e.consume(a),e.exit("chunkText"),s):(e.consume(a),l)}}const aj={tokenize:cj},vp={tokenize:uj};function cj(e){const t=this,n=[];let r=0,i,s,l;return a;function a(y){if(r<n.length){const P=n[r];return t.containerState=P[1],e.attempt(P[0].continuation,c,u)(y)}return u(y)}function c(y){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&h();const P=t.events.length;let C=P,x;for(;C--;)if(t.events[C][0]==="exit"&&t.events[C][1].type==="chunkFlow"){x=t.events[C][1].end;break}g(r);let v=P;for(;v<t.events.length;)t.events[v][1].end={...x},v++;return Yt(t.events,C+1,0,t.events.slice(P)),t.events.length=v,u(y)}return a(y)}function u(y){if(r===n.length){if(!i)return f(y);if(i.currentConstruct&&i.currentConstruct.concrete)return w(y);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(vp,d,p)(y)}function d(y){return i&&h(),g(r),f(y)}function p(y){return t.parser.lazy[t.now().line]=r!==n.length,l=t.now().offset,w(y)}function f(y){return t.containerState={},e.attempt(vp,m,w)(y)}function m(y){return r++,n.push([t.currentConstruct,t.containerState]),f(y)}function w(y){if(y===null){i&&h(),g(0),e.consume(y);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:s}),j(y)}function j(y){if(y===null){N(e.exit("chunkFlow"),!0),g(0),e.consume(y);return}return ae(y)?(e.consume(y),N(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(y),j)}function N(y,P){const C=t.sliceStream(y);if(P&&C.push(null),y.previous=s,s&&(s.next=y),s=y,i.defineSkip(y.start),i.write(C),t.parser.lazy[y.start.line]){let x=i.events.length;for(;x--;)if(i.events[x][1].start.offset<l&&(!i.events[x][1].end||i.events[x][1].end.offset>l))return;const v=t.events.length;let T=v,R,E;for(;T--;)if(t.events[T][0]==="exit"&&t.events[T][1].type==="chunkFlow"){if(R){E=t.events[T][1].end;break}R=!0}for(g(r),x=v;x<t.events.length;)t.events[x][1].end={...E},x++;Yt(t.events,T+1,0,t.events.slice(v)),t.events.length=x}}function g(y){let P=n.length;for(;P-- >y;){const C=n[P];t.containerState=C[1],C[0].exit.call(t,e)}n.length=y}function h(){i.write([null]),s=void 0,i=void 0,t.containerState._closeFlow=void 0}}function uj(e,t,n){return we(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function bp(e){if(e===null||dt(e)||oj(e))return 1;if(ij(e))return 2}function xu(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const s=e[i].resolveAll;s&&!r.includes(s)&&(t=s(t,n),r.push(s))}return t}const Xa={name:"attention",resolveAll:dj,tokenize:pj};function dj(e,t){let n=-1,r,i,s,l,a,c,u,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p={...e[r][1].end},f={...e[n][1].start};kp(p,-c),kp(f,c),l={type:c>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},a={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},s={type:c>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?"strong":"emphasis",start:{...l.start},end:{...a.end}},e[r][1].end={...l.start},e[n][1].start={...a.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=Tt(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=Tt(u,[["enter",i,t],["enter",l,t],["exit",l,t],["enter",s,t]]),u=Tt(u,xu(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=Tt(u,[["exit",s,t],["enter",a,t],["exit",a,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,u=Tt(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,Yt(e,r-1,n-r+3,u),n=r+u.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function pj(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=bp(r);let s;return l;function l(c){return s=c,e.enter("attentionSequence"),a(c)}function a(c){if(c===s)return e.consume(c),a;const u=e.exit("attentionSequence"),d=bp(c),p=!d||d===2&&i||n.includes(c),f=!i||i===2&&d||n.includes(r);return u._open=!!(s===42?p:p&&(i||!f)),u._close=!!(s===42?f:f&&(d||!p)),t(c)}}function kp(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const fj={name:"autolink",tokenize:mj};function mj(e,t,n){let r=0;return i;function i(m){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),s}function s(m){return Jt(m)?(e.consume(m),l):m===64?n(m):u(m)}function l(m){return m===43||m===45||m===46||vt(m)?(r=1,a(m)):u(m)}function a(m){return m===58?(e.consume(m),r=0,c):(m===43||m===45||m===46||vt(m))&&r++<32?(e.consume(m),a):(r=0,u(m))}function c(m){return m===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):m===null||m===32||m===60||Ga(m)?n(m):(e.consume(m),c)}function u(m){return m===64?(e.consume(m),d):tj(m)?(e.consume(m),u):n(m)}function d(m){return vt(m)?p(m):n(m)}function p(m){return m===46?(e.consume(m),r=0,d):m===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):f(m)}function f(m){if((m===45||vt(m))&&r++<63){const w=m===45?f:p;return e.consume(m),w}return n(m)}}const Hs={partial:!0,tokenize:hj};function hj(e,t,n){return r;function r(s){return ye(s)?we(e,i,"linePrefix")(s):i(s)}function i(s){return s===null||ae(s)?t(s):n(s)}}const Pg={continuation:{tokenize:xj},exit:yj,name:"blockQuote",tokenize:gj};function gj(e,t,n){const r=this;return i;function i(l){if(l===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(l),e.exit("blockQuoteMarker"),s}return n(l)}function s(l){return ye(l)?(e.enter("blockQuotePrefixWhitespace"),e.consume(l),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(l))}}function xj(e,t,n){const r=this;return i;function i(l){return ye(l)?we(e,s,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):s(l)}function s(l){return e.attempt(Pg,t,n)(l)}}function yj(e){e.exit("blockQuote")}const Lg={name:"characterEscape",tokenize:vj};function vj(e,t,n){return r;function r(s){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(s),e.exit("escapeMarker"),i}function i(s){return rj(s)?(e.enter("characterEscapeValue"),e.consume(s),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(s)}}const Ag={name:"characterReference",tokenize:bj};function bj(e,t,n){const r=this;let i=0,s,l;return a;function a(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),c}function c(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),s=31,l=vt,d(p))}function u(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),s=6,l=nj,d):(e.enter("characterReferenceValue"),s=7,l=Ya,d(p))}function d(p){if(p===59&&i){const f=e.exit("characterReferenceValue");return l===vt&&!gu(r.sliceSerialize(f))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return l(p)&&i++<s?(e.consume(p),d):n(p)}}const jp={partial:!0,tokenize:jj},wp={concrete:!0,name:"codeFenced",tokenize:kj};function kj(e,t,n){const r=this,i={partial:!0,tokenize:C};let s=0,l=0,a;return c;function c(x){return u(x)}function u(x){const v=r.events[r.events.length-1];return s=v&&v[1].type==="linePrefix"?v[2].sliceSerialize(v[1],!0).length:0,a=x,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(x)}function d(x){return x===a?(l++,e.consume(x),d):l<3?n(x):(e.exit("codeFencedFenceSequence"),ye(x)?we(e,p,"whitespace")(x):p(x))}function p(x){return x===null||ae(x)?(e.exit("codeFencedFence"),r.interrupt?t(x):e.check(jp,j,P)(x)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(x))}function f(x){return x===null||ae(x)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(x)):ye(x)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),we(e,m,"whitespace")(x)):x===96&&x===a?n(x):(e.consume(x),f)}function m(x){return x===null||ae(x)?p(x):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),w(x))}function w(x){return x===null||ae(x)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(x)):x===96&&x===a?n(x):(e.consume(x),w)}function j(x){return e.attempt(i,P,N)(x)}function N(x){return e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),g}function g(x){return s>0&&ye(x)?we(e,h,"linePrefix",s+1)(x):h(x)}function h(x){return x===null||ae(x)?e.check(jp,j,P)(x):(e.enter("codeFlowValue"),y(x))}function y(x){return x===null||ae(x)?(e.exit("codeFlowValue"),h(x)):(e.consume(x),y)}function P(x){return e.exit("codeFenced"),t(x)}function C(x,v,T){let R=0;return E;function E(B){return x.enter("lineEnding"),x.consume(B),x.exit("lineEnding"),k}function k(B){return x.enter("codeFencedFence"),ye(B)?we(x,z,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(B):z(B)}function z(B){return B===a?(x.enter("codeFencedFenceSequence"),M(B)):T(B)}function M(B){return B===a?(R++,x.consume(B),M):R>=l?(x.exit("codeFencedFenceSequence"),ye(B)?we(x,q,"whitespace")(B):q(B)):T(B)}function q(B){return B===null||ae(B)?(x.exit("codeFencedFence"),v(B)):T(B)}}}function jj(e,t,n){const r=this;return i;function i(l){return l===null?n(l):(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),s)}function s(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}const Ll={name:"codeIndented",tokenize:_j},wj={partial:!0,tokenize:Sj};function _j(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),we(e,s,"linePrefix",5)(u)}function s(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?l(u):n(u)}function l(u){return u===null?c(u):ae(u)?e.attempt(wj,l,c)(u):(e.enter("codeFlowValue"),a(u))}function a(u){return u===null||ae(u)?(e.exit("codeFlowValue"),l(u)):(e.consume(u),a)}function c(u){return e.exit("codeIndented"),t(u)}}function Sj(e,t,n){const r=this;return i;function i(l){return r.parser.lazy[r.now().line]?n(l):ae(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),i):we(e,s,"linePrefix",5)(l)}function s(l){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):ae(l)?i(l):n(l)}}const Cj={name:"codeText",previous:Ej,resolve:Nj,tokenize:zj};function Nj(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Ej(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function zj(e,t,n){let r=0,i,s;return l;function l(p){return e.enter("codeText"),e.enter("codeTextSequence"),a(p)}function a(p){return p===96?(e.consume(p),r++,a):(e.exit("codeTextSequence"),c(p))}function c(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),c):p===96?(s=e.enter("codeTextSequence"),i=0,d(p)):ae(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),c):(e.enter("codeTextData"),u(p))}function u(p){return p===null||p===32||p===96||ae(p)?(e.exit("codeTextData"),c(p)):(e.consume(p),u)}function d(p){return p===96?(e.consume(p),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(s.type="codeTextData",u(p))}}class Tj{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const s=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&ni(this.left,r),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),ni(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),ni(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);ni(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);ni(this.left,n.reverse())}}}function ni(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Rg(e){const t={};let n=-1,r,i,s,l,a,c,u;const d=new Tj(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,s=0,s<c.length&&c[s][1].type==="lineEndingBlank"&&(s+=2),s<c.length&&c[s][1].type==="content"))for(;++s<c.length&&c[s][1].type!=="content";)c[s][1].type==="chunkText"&&(c[s][1]._isInFirstContentOfListItem=!0,s++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Pj(d,n)),n=t[n],u=!0);else if(r[1]._container){for(s=n,i=void 0;s--;)if(l=d.get(s),l[1].type==="lineEnding"||l[1].type==="lineEndingBlank")l[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),l[1].type="lineEnding",i=s);else if(!(l[1].type==="linePrefix"||l[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},a=d.slice(i,n),a.unshift(r),d.splice(i,n-i+1,a))}}return Yt(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function Pj(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const s=[];let l=n._tokenizer;l||(l=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(l._contentTypeTextTrailing=!0));const a=l.events,c=[],u={};let d,p,f=-1,m=n,w=0,j=0;const N=[j];for(;m;){for(;e.get(++i)[1]!==m;);s.push(i),m._tokenizer||(d=r.sliceStream(m),m.next||d.push(null),p&&l.defineSkip(m.start),m._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(d),m._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),p=m,m=m.next}for(m=n;++f<a.length;)a[f][0]==="exit"&&a[f-1][0]==="enter"&&a[f][1].type===a[f-1][1].type&&a[f][1].start.line!==a[f][1].end.line&&(j=f+1,N.push(j),m._tokenizer=void 0,m.previous=void 0,m=m.next);for(l.events=[],m?(m._tokenizer=void 0,m.previous=void 0):N.pop(),f=N.length;f--;){const g=a.slice(N[f],N[f+1]),h=s.pop();c.push([h,h+g.length-1]),e.splice(h,2,g)}for(c.reverse(),f=-1;++f<c.length;)u[w+c[f][0]]=w+c[f][1],w+=c[f][1]-c[f][0]-1;return u}const Lj={resolve:Rj,tokenize:Ij},Aj={partial:!0,tokenize:Mj};function Rj(e){return Rg(e),e}function Ij(e,t){let n;return r;function r(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?s(a):ae(a)?e.check(Aj,l,s)(a):(e.consume(a),i)}function s(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function l(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function Mj(e,t,n){const r=this;return i;function i(l){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),we(e,s,"linePrefix")}function s(l){if(l===null||ae(l))return n(l);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):e.interrupt(r.parser.constructs.flow,n,t)(l)}}function Ig(e,t,n,r,i,s,l,a,c){const u=c||Number.POSITIVE_INFINITY;let d=0;return p;function p(g){return g===60?(e.enter(r),e.enter(i),e.enter(s),e.consume(g),e.exit(s),f):g===null||g===32||g===41||Ga(g)?n(g):(e.enter(r),e.enter(l),e.enter(a),e.enter("chunkString",{contentType:"string"}),j(g))}function f(g){return g===62?(e.enter(s),e.consume(g),e.exit(s),e.exit(i),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),m(g))}function m(g){return g===62?(e.exit("chunkString"),e.exit(a),f(g)):g===null||g===60||ae(g)?n(g):(e.consume(g),g===92?w:m)}function w(g){return g===60||g===62||g===92?(e.consume(g),m):m(g)}function j(g){return!d&&(g===null||g===41||dt(g))?(e.exit("chunkString"),e.exit(a),e.exit(l),e.exit(r),t(g)):d<u&&g===40?(e.consume(g),d++,j):g===41?(e.consume(g),d--,j):g===null||g===32||g===40||Ga(g)?n(g):(e.consume(g),g===92?N:j)}function N(g){return g===40||g===41||g===92?(e.consume(g),j):j(g)}}function Mg(e,t,n,r,i,s){const l=this;let a=0,c;return u;function u(m){return e.enter(r),e.enter(i),e.consume(m),e.exit(i),e.enter(s),d}function d(m){return a>999||m===null||m===91||m===93&&!c||m===94&&!a&&"_hiddenFootnoteSupport"in l.parser.constructs?n(m):m===93?(e.exit(s),e.enter(i),e.consume(m),e.exit(i),e.exit(r),t):ae(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),p(m))}function p(m){return m===null||m===91||m===93||ae(m)||a++>999?(e.exit("chunkString"),d(m)):(e.consume(m),c||(c=!ye(m)),m===92?f:p)}function f(m){return m===91||m===92||m===93?(e.consume(m),a++,p):p(m)}}function Og(e,t,n,r,i,s){let l;return a;function a(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),l=f===40?41:f,c):n(f)}function c(f){return f===l?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(s),u(f))}function u(f){return f===l?(e.exit(s),c(l)):f===null?n(f):ae(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),we(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===l||f===null||ae(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?p:d)}function p(f){return f===l||f===92?(e.consume(f),d):d(f)}}function ji(e,t){let n;return r;function r(i){return ae(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):ye(i)?we(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const Oj={name:"definition",tokenize:Dj},$j={partial:!0,tokenize:Fj};function Dj(e,t,n){const r=this;let i;return s;function s(m){return e.enter("definition"),l(m)}function l(m){return Mg.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(m)}function a(m){return i=Lr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),m===58?(e.enter("definitionMarker"),e.consume(m),e.exit("definitionMarker"),c):n(m)}function c(m){return dt(m)?ji(e,u)(m):u(m)}function u(m){return Ig(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(m)}function d(m){return e.attempt($j,p,p)(m)}function p(m){return ye(m)?we(e,f,"whitespace")(m):f(m)}function f(m){return m===null||ae(m)?(e.exit("definition"),r.parser.defined.push(i),t(m)):n(m)}}function Fj(e,t,n){return r;function r(a){return dt(a)?ji(e,i)(a):n(a)}function i(a){return Og(e,s,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function s(a){return ye(a)?we(e,l,"whitespace")(a):l(a)}function l(a){return a===null||ae(a)?t(a):n(a)}}const Bj={name:"hardBreakEscape",tokenize:Uj};function Uj(e,t,n){return r;function r(s){return e.enter("hardBreakEscape"),e.consume(s),i}function i(s){return ae(s)?(e.exit("hardBreakEscape"),t(s)):n(s)}}const Vj={name:"headingAtx",resolve:Wj,tokenize:Hj};function Wj(e,t){let n=e.length-2,r=3,i,s;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},s={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Yt(e,r,n-r+1,[["enter",i,t],["enter",s,t],["exit",s,t],["exit",i,t]])),e}function Hj(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),s(d)}function s(d){return e.enter("atxHeadingSequence"),l(d)}function l(d){return d===35&&r++<6?(e.consume(d),l):d===null||dt(d)?(e.exit("atxHeadingSequence"),a(d)):n(d)}function a(d){return d===35?(e.enter("atxHeadingSequence"),c(d)):d===null||ae(d)?(e.exit("atxHeading"),t(d)):ye(d)?we(e,a,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function c(d){return d===35?(e.consume(d),c):(e.exit("atxHeadingSequence"),a(d))}function u(d){return d===null||d===35||dt(d)?(e.exit("atxHeadingText"),a(d)):(e.consume(d),u)}}const qj=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],_p=["pre","script","style","textarea"],Jj={concrete:!0,name:"htmlFlow",resolveTo:Gj,tokenize:Yj},Kj={partial:!0,tokenize:Zj},Qj={partial:!0,tokenize:Xj};function Gj(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Yj(e,t,n){const r=this;let i,s,l,a,c;return u;function u(S){return d(S)}function d(S){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(S),p}function p(S){return S===33?(e.consume(S),f):S===47?(e.consume(S),s=!0,j):S===63?(e.consume(S),i=3,r.interrupt?t:b):Jt(S)?(e.consume(S),l=String.fromCharCode(S),N):n(S)}function f(S){return S===45?(e.consume(S),i=2,m):S===91?(e.consume(S),i=5,a=0,w):Jt(S)?(e.consume(S),i=4,r.interrupt?t:b):n(S)}function m(S){return S===45?(e.consume(S),r.interrupt?t:b):n(S)}function w(S){const oe="CDATA[";return S===oe.charCodeAt(a++)?(e.consume(S),a===oe.length?r.interrupt?t:z:w):n(S)}function j(S){return Jt(S)?(e.consume(S),l=String.fromCharCode(S),N):n(S)}function N(S){if(S===null||S===47||S===62||dt(S)){const oe=S===47,L=l.toLowerCase();return!oe&&!s&&_p.includes(L)?(i=1,r.interrupt?t(S):z(S)):qj.includes(l.toLowerCase())?(i=6,oe?(e.consume(S),g):r.interrupt?t(S):z(S)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(S):s?h(S):y(S))}return S===45||vt(S)?(e.consume(S),l+=String.fromCharCode(S),N):n(S)}function g(S){return S===62?(e.consume(S),r.interrupt?t:z):n(S)}function h(S){return ye(S)?(e.consume(S),h):E(S)}function y(S){return S===47?(e.consume(S),E):S===58||S===95||Jt(S)?(e.consume(S),P):ye(S)?(e.consume(S),y):E(S)}function P(S){return S===45||S===46||S===58||S===95||vt(S)?(e.consume(S),P):C(S)}function C(S){return S===61?(e.consume(S),x):ye(S)?(e.consume(S),C):y(S)}function x(S){return S===null||S===60||S===61||S===62||S===96?n(S):S===34||S===39?(e.consume(S),c=S,v):ye(S)?(e.consume(S),x):T(S)}function v(S){return S===c?(e.consume(S),c=null,R):S===null||ae(S)?n(S):(e.consume(S),v)}function T(S){return S===null||S===34||S===39||S===47||S===60||S===61||S===62||S===96||dt(S)?C(S):(e.consume(S),T)}function R(S){return S===47||S===62||ye(S)?y(S):n(S)}function E(S){return S===62?(e.consume(S),k):n(S)}function k(S){return S===null||ae(S)?z(S):ye(S)?(e.consume(S),k):n(S)}function z(S){return S===45&&i===2?(e.consume(S),Y):S===60&&i===1?(e.consume(S),A):S===62&&i===4?(e.consume(S),U):S===63&&i===3?(e.consume(S),b):S===93&&i===5?(e.consume(S),I):ae(S)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(Kj,J,M)(S)):S===null||ae(S)?(e.exit("htmlFlowData"),M(S)):(e.consume(S),z)}function M(S){return e.check(Qj,q,J)(S)}function q(S){return e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),B}function B(S){return S===null||ae(S)?M(S):(e.enter("htmlFlowData"),z(S))}function Y(S){return S===45?(e.consume(S),b):z(S)}function A(S){return S===47?(e.consume(S),l="",$):z(S)}function $(S){if(S===62){const oe=l.toLowerCase();return _p.includes(oe)?(e.consume(S),U):z(S)}return Jt(S)&&l.length<8?(e.consume(S),l+=String.fromCharCode(S),$):z(S)}function I(S){return S===93?(e.consume(S),b):z(S)}function b(S){return S===62?(e.consume(S),U):S===45&&i===2?(e.consume(S),b):z(S)}function U(S){return S===null||ae(S)?(e.exit("htmlFlowData"),J(S)):(e.consume(S),U)}function J(S){return e.exit("htmlFlow"),t(S)}}function Xj(e,t,n){const r=this;return i;function i(l){return ae(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),s):n(l)}function s(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}function Zj(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Hs,t,n)}}const ew={name:"htmlText",tokenize:tw};function tw(e,t,n){const r=this;let i,s,l;return a;function a(b){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(b),c}function c(b){return b===33?(e.consume(b),u):b===47?(e.consume(b),C):b===63?(e.consume(b),y):Jt(b)?(e.consume(b),T):n(b)}function u(b){return b===45?(e.consume(b),d):b===91?(e.consume(b),s=0,w):Jt(b)?(e.consume(b),h):n(b)}function d(b){return b===45?(e.consume(b),m):n(b)}function p(b){return b===null?n(b):b===45?(e.consume(b),f):ae(b)?(l=p,A(b)):(e.consume(b),p)}function f(b){return b===45?(e.consume(b),m):p(b)}function m(b){return b===62?Y(b):b===45?f(b):p(b)}function w(b){const U="CDATA[";return b===U.charCodeAt(s++)?(e.consume(b),s===U.length?j:w):n(b)}function j(b){return b===null?n(b):b===93?(e.consume(b),N):ae(b)?(l=j,A(b)):(e.consume(b),j)}function N(b){return b===93?(e.consume(b),g):j(b)}function g(b){return b===62?Y(b):b===93?(e.consume(b),g):j(b)}function h(b){return b===null||b===62?Y(b):ae(b)?(l=h,A(b)):(e.consume(b),h)}function y(b){return b===null?n(b):b===63?(e.consume(b),P):ae(b)?(l=y,A(b)):(e.consume(b),y)}function P(b){return b===62?Y(b):y(b)}function C(b){return Jt(b)?(e.consume(b),x):n(b)}function x(b){return b===45||vt(b)?(e.consume(b),x):v(b)}function v(b){return ae(b)?(l=v,A(b)):ye(b)?(e.consume(b),v):Y(b)}function T(b){return b===45||vt(b)?(e.consume(b),T):b===47||b===62||dt(b)?R(b):n(b)}function R(b){return b===47?(e.consume(b),Y):b===58||b===95||Jt(b)?(e.consume(b),E):ae(b)?(l=R,A(b)):ye(b)?(e.consume(b),R):Y(b)}function E(b){return b===45||b===46||b===58||b===95||vt(b)?(e.consume(b),E):k(b)}function k(b){return b===61?(e.consume(b),z):ae(b)?(l=k,A(b)):ye(b)?(e.consume(b),k):R(b)}function z(b){return b===null||b===60||b===61||b===62||b===96?n(b):b===34||b===39?(e.consume(b),i=b,M):ae(b)?(l=z,A(b)):ye(b)?(e.consume(b),z):(e.consume(b),q)}function M(b){return b===i?(e.consume(b),i=void 0,B):b===null?n(b):ae(b)?(l=M,A(b)):(e.consume(b),M)}function q(b){return b===null||b===34||b===39||b===60||b===61||b===96?n(b):b===47||b===62||dt(b)?R(b):(e.consume(b),q)}function B(b){return b===47||b===62||dt(b)?R(b):n(b)}function Y(b){return b===62?(e.consume(b),e.exit("htmlTextData"),e.exit("htmlText"),t):n(b)}function A(b){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),$}function $(b){return ye(b)?we(e,I,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(b):I(b)}function I(b){return e.enter("htmlTextData"),l(b)}}const yu={name:"labelEnd",resolveAll:ow,resolveTo:sw,tokenize:lw},nw={tokenize:aw},rw={tokenize:cw},iw={tokenize:uw};function ow(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&Yt(e,0,e.length,n),e}function sw(e,t){let n=e.length,r=0,i,s,l,a;for(;n--;)if(i=e[n][1],s){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(l){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(s=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(l=n);const c={type:e[s][1].type==="labelLink"?"link":"image",start:{...e[s][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[s][1].start},end:{...e[l][1].end}},d={type:"labelText",start:{...e[s+r+2][1].end},end:{...e[l-2][1].start}};return a=[["enter",c,t],["enter",u,t]],a=Tt(a,e.slice(s+1,s+r+3)),a=Tt(a,[["enter",d,t]]),a=Tt(a,xu(t.parser.constructs.insideSpan.null,e.slice(s+r+4,l-3),t)),a=Tt(a,[["exit",d,t],e[l-2],e[l-1],["exit",u,t]]),a=Tt(a,e.slice(l+1)),a=Tt(a,[["exit",c,t]]),Yt(e,s,e.length,a),e}function lw(e,t,n){const r=this;let i=r.events.length,s,l;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){s=r.events[i][1];break}return a;function a(f){return s?s._inactive?p(f):(l=r.parser.defined.includes(Lr(r.sliceSerialize({start:s.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),c):n(f)}function c(f){return f===40?e.attempt(nw,d,l?d:p)(f):f===91?e.attempt(rw,d,l?u:p)(f):l?d(f):p(f)}function u(f){return e.attempt(iw,d,p)(f)}function d(f){return t(f)}function p(f){return s._balanced=!0,n(f)}}function aw(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),i}function i(p){return dt(p)?ji(e,s)(p):s(p)}function s(p){return p===41?d(p):Ig(e,l,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function l(p){return dt(p)?ji(e,c)(p):d(p)}function a(p){return n(p)}function c(p){return p===34||p===39||p===40?Og(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function u(p){return dt(p)?ji(e,d)(p):d(p)}function d(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function cw(e,t,n){const r=this;return i;function i(a){return Mg.call(r,e,s,l,"reference","referenceMarker","referenceString")(a)}function s(a){return r.parser.defined.includes(Lr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function l(a){return n(a)}}function uw(e,t,n){return r;function r(s){return e.enter("reference"),e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),i}function i(s){return s===93?(e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),e.exit("reference"),t):n(s)}}const dw={name:"labelStartImage",resolveAll:yu.resolveAll,tokenize:pw};function pw(e,t,n){const r=this;return i;function i(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),s}function s(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),l):n(a)}function l(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const fw={name:"labelStartLink",resolveAll:yu.resolveAll,tokenize:mw};function mw(e,t,n){const r=this;return i;function i(l){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelLink"),s}function s(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const Al={name:"lineEnding",tokenize:hw};function hw(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),we(e,t,"linePrefix")}}const Fo={name:"thematicBreak",tokenize:gw};function gw(e,t,n){let r=0,i;return s;function s(u){return e.enter("thematicBreak"),l(u)}function l(u){return i=u,a(u)}function a(u){return u===i?(e.enter("thematicBreakSequence"),c(u)):r>=3&&(u===null||ae(u))?(e.exit("thematicBreak"),t(u)):n(u)}function c(u){return u===i?(e.consume(u),r++,c):(e.exit("thematicBreakSequence"),ye(u)?we(e,a,"whitespace")(u):a(u))}}const ot={continuation:{tokenize:bw},exit:jw,name:"list",tokenize:vw},xw={partial:!0,tokenize:ww},yw={partial:!0,tokenize:kw};function vw(e,t,n){const r=this,i=r.events[r.events.length-1];let s=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,l=0;return a;function a(m){const w=r.containerState.type||(m===42||m===43||m===45?"listUnordered":"listOrdered");if(w==="listUnordered"?!r.containerState.marker||m===r.containerState.marker:Ya(m)){if(r.containerState.type||(r.containerState.type=w,e.enter(w,{_container:!0})),w==="listUnordered")return e.enter("listItemPrefix"),m===42||m===45?e.check(Fo,n,u)(m):u(m);if(!r.interrupt||m===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(m)}return n(m)}function c(m){return Ya(m)&&++l<10?(e.consume(m),c):(!r.interrupt||l<2)&&(r.containerState.marker?m===r.containerState.marker:m===41||m===46)?(e.exit("listItemValue"),u(m)):n(m)}function u(m){return e.enter("listItemMarker"),e.consume(m),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||m,e.check(Hs,r.interrupt?n:d,e.attempt(xw,f,p))}function d(m){return r.containerState.initialBlankLine=!0,s++,f(m)}function p(m){return ye(m)?(e.enter("listItemPrefixWhitespace"),e.consume(m),e.exit("listItemPrefixWhitespace"),f):n(m)}function f(m){return r.containerState.size=s+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(m)}}function bw(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Hs,i,s);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,we(e,t,"listItemIndent",r.containerState.size+1)(a)}function s(a){return r.containerState.furtherBlankLines||!ye(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,l(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(yw,t,l)(a))}function l(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,we(e,e.attempt(ot,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function kw(e,t,n){const r=this;return we(e,i,"listItemIndent",r.containerState.size+1);function i(s){const l=r.events[r.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===r.containerState.size?t(s):n(s)}}function jw(e){e.exit(this.containerState.type)}function ww(e,t,n){const r=this;return we(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(s){const l=r.events[r.events.length-1];return!ye(s)&&l&&l[1].type==="listItemPrefixWhitespace"?t(s):n(s)}}const Sp={name:"setextUnderline",resolveTo:_w,tokenize:Sw};function _w(e,t){let n=e.length,r,i,s;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!s&&e[n][1].type==="definition"&&(s=n);const l={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",s?(e.splice(i,0,["enter",l,t]),e.splice(s+1,0,["exit",e[r][1],t]),e[r][1].end={...e[s][1].end}):e[r][1]=l,e.push(["exit",l,t]),e}function Sw(e,t,n){const r=this;let i;return s;function s(u){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),i=u,l(u)):n(u)}function l(u){return e.enter("setextHeadingLineSequence"),a(u)}function a(u){return u===i?(e.consume(u),a):(e.exit("setextHeadingLineSequence"),ye(u)?we(e,c,"lineSuffix")(u):c(u))}function c(u){return u===null||ae(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const Cw={tokenize:Nw};function Nw(e){const t=this,n=e.attempt(Hs,r,e.attempt(this.parser.constructs.flowInitial,i,we(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Lj,i)),"linePrefix")));return n;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEndingBlank"),e.consume(s),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const Ew={resolveAll:Dg()},zw=$g("string"),Tw=$g("text");function $g(e){return{resolveAll:Dg(e==="text"?Pw:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],s=n.attempt(i,l,a);return l;function l(d){return u(d)?s(d):a(d)}function a(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),c}function c(d){return u(d)?(n.exit("data"),s(d)):(n.consume(d),c)}function u(d){if(d===null)return!0;const p=i[d];let f=-1;if(p)for(;++f<p.length;){const m=p[f];if(!m.previous||m.previous.call(r,r.previous))return!0}return!1}}}function Dg(e){return t;function t(n,r){let i=-1,s;for(;++i<=n.length;)s===void 0?n[i]&&n[i][1].type==="data"&&(s=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==s+2&&(n[s][1].end=n[i-1][1].end,n.splice(s+2,i-s-2),i=s+2),s=void 0);return e?e(n,r):n}}function Pw(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let s=i.length,l=-1,a=0,c;for(;s--;){const u=i[s];if(typeof u=="string"){for(l=u.length;u.charCodeAt(l-1)===32;)a++,l--;if(l)break;l=-1}else if(u===-2)c=!0,a++;else if(u!==-1){s++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(a=0),a){const u={type:n===e.length||c||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?l:r.start._bufferIndex+l,_index:r.start._index+s,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const Lw={42:ot,43:ot,45:ot,48:ot,49:ot,50:ot,51:ot,52:ot,53:ot,54:ot,55:ot,56:ot,57:ot,62:Pg},Aw={91:Oj},Rw={[-2]:Ll,[-1]:Ll,32:Ll},Iw={35:Vj,42:Fo,45:[Sp,Fo],60:Jj,61:Sp,95:Fo,96:wp,126:wp},Mw={38:Ag,92:Lg},Ow={[-5]:Al,[-4]:Al,[-3]:Al,33:dw,38:Ag,42:Xa,60:[fj,ew],91:fw,92:[Bj,Lg],93:yu,95:Xa,96:Cj},$w={null:[Xa,Ew]},Dw={null:[42,95]},Fw={null:[]},Bw=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Dw,contentInitial:Aw,disable:Fw,document:Lw,flow:Iw,flowInitial:Rw,insideSpan:$w,string:Mw,text:Ow},Symbol.toStringTag,{value:"Module"}));function Uw(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},s=[];let l=[],a=[];const c={attempt:v(C),check:v(x),consume:h,enter:y,exit:P,interrupt:v(x,{interrupt:!0})},u={code:null,containerState:{},defineSkip:j,events:[],now:w,parser:e,previous:null,sliceSerialize:f,sliceStream:m,write:p};let d=t.tokenize.call(u,c);return t.resolveAll&&s.push(t),u;function p(k){return l=Tt(l,k),N(),l[l.length-1]!==null?[]:(T(t,0),u.events=xu(s,u.events,u),u.events)}function f(k,z){return Ww(m(k),z)}function m(k){return Vw(l,k)}function w(){const{_bufferIndex:k,_index:z,line:M,column:q,offset:B}=r;return{_bufferIndex:k,_index:z,line:M,column:q,offset:B}}function j(k){i[k.line]=k.column,E()}function N(){let k;for(;r._index<l.length;){const z=l[r._index];if(typeof z=="string")for(k=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===k&&r._bufferIndex<z.length;)g(z.charCodeAt(r._bufferIndex));else g(z)}}function g(k){d=d(k)}function h(k){ae(k)?(r.line++,r.column=1,r.offset+=k===-3?2:1,E()):k!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===l[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=k}function y(k,z){const M=z||{};return M.type=k,M.start=w(),u.events.push(["enter",M,u]),a.push(M),M}function P(k){const z=a.pop();return z.end=w(),u.events.push(["exit",z,u]),z}function C(k,z){T(k,z.from)}function x(k,z){z.restore()}function v(k,z){return M;function M(q,B,Y){let A,$,I,b;return Array.isArray(q)?J(q):"tokenize"in q?J([q]):U(q);function U(X){return F;function F(O){const V=O!==null&&X[O],G=O!==null&&X.null,Z=[...Array.isArray(V)?V:V?[V]:[],...Array.isArray(G)?G:G?[G]:[]];return J(Z)(O)}}function J(X){return A=X,$=0,X.length===0?Y:S(X[$])}function S(X){return F;function F(O){return b=R(),I=X,X.partial||(u.currentConstruct=X),X.name&&u.parser.constructs.disable.null.includes(X.name)?L():X.tokenize.call(z?Object.assign(Object.create(u),z):u,c,oe,L)(O)}}function oe(X){return k(I,b),B}function L(X){return b.restore(),++$<A.length?S(A[$]):Y}}}function T(k,z){k.resolveAll&&!s.includes(k)&&s.push(k),k.resolve&&Yt(u.events,z,u.events.length-z,k.resolve(u.events.slice(z),u)),k.resolveTo&&(u.events=k.resolveTo(u.events,u))}function R(){const k=w(),z=u.previous,M=u.currentConstruct,q=u.events.length,B=Array.from(a);return{from:q,restore:Y};function Y(){r=k,u.previous=z,u.currentConstruct=M,u.events.length=q,a=B,E()}}function E(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function Vw(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,s=t.end._bufferIndex;let l;if(n===i)l=[e[n].slice(r,s)];else{if(l=e.slice(n,i),r>-1){const a=l[0];typeof a=="string"?l[0]=a.slice(r):l.shift()}s>0&&l.push(e[i].slice(0,s))}return l}function Ww(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const s=e[n];let l;if(typeof s=="string")l=s;else switch(s){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=t?" ":"	";break}case-1:{if(!t&&i)continue;l=" ";break}default:l=String.fromCharCode(s)}i=s===-2,r.push(l)}return r.join("")}function Hw(e){const r={constructs:Xk([Bw,...(e||{}).extensions||[]]),content:i(sj),defined:[],document:i(aj),flow:i(Cw),lazy:{},string:i(zw),text:i(Tw)};return r;function i(s){return l;function l(a){return Uw(r,s,a)}}}function qw(e){for(;!Rg(e););return e}const Cp=/[\0\t\n\r]/g;function Jw(){let e=1,t="",n=!0,r;return i;function i(s,l,a){const c=[];let u,d,p,f,m;for(s=t+(typeof s=="string"?s.toString():new TextDecoder(l||void 0).decode(s)),p=0,t="",n&&(s.charCodeAt(0)===65279&&p++,n=void 0);p<s.length;){if(Cp.lastIndex=p,u=Cp.exec(s),f=u&&u.index!==void 0?u.index:s.length,m=s.charCodeAt(f),!u){t=s.slice(p);break}if(m===10&&p===f&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),p<f&&(c.push(s.slice(p,f)),e+=f-p),m){case 0:{c.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,c.push(-2);e++<d;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}p=f+1}return a&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const Kw=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Qw(e){return e.replace(Kw,Gw)}function Gw(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),s=i===120||i===88;return Tg(n.slice(s?2:1),s?16:10)}return gu(n)||e}const Fg={}.hasOwnProperty;function Yw(e,t,n){return typeof t!="string"&&(n=t,t=void 0),Xw(n)(qw(Hw(n).document().write(Jw()(e,t,!0))))}function Xw(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(Ee),autolinkProtocol:R,autolinkEmail:R,atxHeading:s(Re),blockQuote:s(G),characterEscape:R,characterReference:R,codeFenced:s(Z),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:s(Z,l),codeText:s(te,l),codeTextData:R,data:R,codeFlowValue:R,definition:s(me),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:s(Ne),hardBreakEscape:s(_t),hardBreakTrailing:s(_t),htmlFlow:s(H,l),htmlFlowData:R,htmlText:s(H,l),htmlTextData:R,image:s(he),label:l,link:s(Ee),listItem:s(fn),listItemValue:f,listOrdered:s(ft,p),listUnordered:s(ft),paragraph:s(Qs),reference:S,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:s(Re),strong:s(Gs),thematicBreak:s(ro)},exit:{atxHeading:c(),atxHeadingSequence:C,autolink:c(),autolinkEmail:V,autolinkProtocol:O,blockQuote:c(),characterEscapeValue:E,characterReferenceMarkerHexadecimal:L,characterReferenceMarkerNumeric:L,characterReferenceValue:X,characterReference:F,codeFenced:c(N),codeFencedFence:j,codeFencedFenceInfo:m,codeFencedFenceMeta:w,codeFlowValue:E,codeIndented:c(g),codeText:c(B),codeTextData:E,data:E,definition:c(),definitionDestinationString:P,definitionLabelString:h,definitionTitleString:y,emphasis:c(),hardBreakEscape:c(z),hardBreakTrailing:c(z),htmlFlow:c(M),htmlFlowData:E,htmlText:c(q),htmlTextData:E,image:c(A),label:I,labelText:$,lineEnding:k,link:c(Y),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:oe,resourceDestinationString:b,resourceTitleString:U,resource:J,setextHeading:c(T),setextHeadingLineSequence:v,setextHeadingText:x,strong:c(),thematicBreak:c()}};Bg(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(W){let ee={type:"root",children:[]};const ce={stack:[ee],tokenStack:[],config:t,enter:a,exit:u,buffer:l,resume:d,data:n},pe=[];let ve=-1;for(;++ve<W.length;)if(W[ve][1].type==="listOrdered"||W[ve][1].type==="listUnordered")if(W[ve][0]==="enter")pe.push(ve);else{const mt=pe.pop();ve=i(W,mt,ve)}for(ve=-1;++ve<W.length;){const mt=t[W[ve][0]];Fg.call(mt,W[ve][1].type)&&mt[W[ve][1].type].call(Object.assign({sliceSerialize:W[ve][2].sliceSerialize},ce),W[ve][1])}if(ce.tokenStack.length>0){const mt=ce.tokenStack[ce.tokenStack.length-1];(mt[1]||Np).call(ce,void 0,mt[0])}for(ee.position={start:hn(W.length>0?W[0][1].start:{line:1,column:1,offset:0}),end:hn(W.length>0?W[W.length-2][1].end:{line:1,column:1,offset:0})},ve=-1;++ve<t.transforms.length;)ee=t.transforms[ve](ee)||ee;return ee}function i(W,ee,ce){let pe=ee-1,ve=-1,mt=!1,Xt,St,D,re;for(;++pe<=ce;){const ie=W[pe];switch(ie[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{ie[0]==="enter"?ve++:ve--,re=void 0;break}case"lineEndingBlank":{ie[0]==="enter"&&(Xt&&!re&&!ve&&!D&&(D=pe),re=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:re=void 0}if(!ve&&ie[0]==="enter"&&ie[1].type==="listItemPrefix"||ve===-1&&ie[0]==="exit"&&(ie[1].type==="listUnordered"||ie[1].type==="listOrdered")){if(Xt){let le=pe;for(St=void 0;le--;){const de=W[le];if(de[1].type==="lineEnding"||de[1].type==="lineEndingBlank"){if(de[0]==="exit")continue;St&&(W[St][1].type="lineEndingBlank",mt=!0),de[1].type="lineEnding",St=le}else if(!(de[1].type==="linePrefix"||de[1].type==="blockQuotePrefix"||de[1].type==="blockQuotePrefixWhitespace"||de[1].type==="blockQuoteMarker"||de[1].type==="listItemIndent"))break}D&&(!St||D<St)&&(Xt._spread=!0),Xt.end=Object.assign({},St?W[St][1].start:ie[1].end),W.splice(St||pe,0,["exit",Xt,ie[2]]),pe++,ce++}if(ie[1].type==="listItemPrefix"){const le={type:"listItem",_spread:!1,start:Object.assign({},ie[1].start),end:void 0};Xt=le,W.splice(pe,0,["enter",le,ie[2]]),pe++,ce++,D=void 0,re=!0}}}return W[ee][1]._spread=mt,ce}function s(W,ee){return ce;function ce(pe){a.call(this,W(pe),pe),ee&&ee.call(this,pe)}}function l(){this.stack.push({type:"fragment",children:[]})}function a(W,ee,ce){this.stack[this.stack.length-1].children.push(W),this.stack.push(W),this.tokenStack.push([ee,ce||void 0]),W.position={start:hn(ee.start),end:void 0}}function c(W){return ee;function ee(ce){W&&W.call(this,ce),u.call(this,ce)}}function u(W,ee){const ce=this.stack.pop(),pe=this.tokenStack.pop();if(pe)pe[0].type!==W.type&&(ee?ee.call(this,W,pe[0]):(pe[1]||Np).call(this,W,pe[0]));else throw new Error("Cannot close `"+W.type+"` ("+ki({start:W.start,end:W.end})+"): it’s not open");ce.position.end=hn(W.end)}function d(){return Gk(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function f(W){if(this.data.expectingFirstListItemValue){const ee=this.stack[this.stack.length-2];ee.start=Number.parseInt(this.sliceSerialize(W),10),this.data.expectingFirstListItemValue=void 0}}function m(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.lang=W}function w(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.meta=W}function j(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function N(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.value=W.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function g(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.value=W.replace(/(\r?\n|\r)$/g,"")}function h(W){const ee=this.resume(),ce=this.stack[this.stack.length-1];ce.label=ee,ce.identifier=Lr(this.sliceSerialize(W)).toLowerCase()}function y(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.title=W}function P(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.url=W}function C(W){const ee=this.stack[this.stack.length-1];if(!ee.depth){const ce=this.sliceSerialize(W).length;ee.depth=ce}}function x(){this.data.setextHeadingSlurpLineEnding=!0}function v(W){const ee=this.stack[this.stack.length-1];ee.depth=this.sliceSerialize(W).codePointAt(0)===61?1:2}function T(){this.data.setextHeadingSlurpLineEnding=void 0}function R(W){const ce=this.stack[this.stack.length-1].children;let pe=ce[ce.length-1];(!pe||pe.type!=="text")&&(pe=Un(),pe.position={start:hn(W.start),end:void 0},ce.push(pe)),this.stack.push(pe)}function E(W){const ee=this.stack.pop();ee.value+=this.sliceSerialize(W),ee.position.end=hn(W.end)}function k(W){const ee=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ce=ee.children[ee.children.length-1];ce.position.end=hn(W.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(ee.type)&&(R.call(this,W),E.call(this,W))}function z(){this.data.atHardBreak=!0}function M(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.value=W}function q(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.value=W}function B(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.value=W}function Y(){const W=this.stack[this.stack.length-1];if(this.data.inReference){const ee=this.data.referenceType||"shortcut";W.type+="Reference",W.referenceType=ee,delete W.url,delete W.title}else delete W.identifier,delete W.label;this.data.referenceType=void 0}function A(){const W=this.stack[this.stack.length-1];if(this.data.inReference){const ee=this.data.referenceType||"shortcut";W.type+="Reference",W.referenceType=ee,delete W.url,delete W.title}else delete W.identifier,delete W.label;this.data.referenceType=void 0}function $(W){const ee=this.sliceSerialize(W),ce=this.stack[this.stack.length-2];ce.label=Qw(ee),ce.identifier=Lr(ee).toLowerCase()}function I(){const W=this.stack[this.stack.length-1],ee=this.resume(),ce=this.stack[this.stack.length-1];if(this.data.inReference=!0,ce.type==="link"){const pe=W.children;ce.children=pe}else ce.alt=ee}function b(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.url=W}function U(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.title=W}function J(){this.data.inReference=void 0}function S(){this.data.referenceType="collapsed"}function oe(W){const ee=this.resume(),ce=this.stack[this.stack.length-1];ce.label=ee,ce.identifier=Lr(this.sliceSerialize(W)).toLowerCase(),this.data.referenceType="full"}function L(W){this.data.characterReferenceType=W.type}function X(W){const ee=this.sliceSerialize(W),ce=this.data.characterReferenceType;let pe;ce?(pe=Tg(ee,ce==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):pe=gu(ee);const ve=this.stack[this.stack.length-1];ve.value+=pe}function F(W){const ee=this.stack.pop();ee.position.end=hn(W.end)}function O(W){E.call(this,W);const ee=this.stack[this.stack.length-1];ee.url=this.sliceSerialize(W)}function V(W){E.call(this,W);const ee=this.stack[this.stack.length-1];ee.url="mailto:"+this.sliceSerialize(W)}function G(){return{type:"blockquote",children:[]}}function Z(){return{type:"code",lang:null,meta:null,value:""}}function te(){return{type:"inlineCode",value:""}}function me(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Ne(){return{type:"emphasis",children:[]}}function Re(){return{type:"heading",depth:0,children:[]}}function _t(){return{type:"break"}}function H(){return{type:"html",value:""}}function he(){return{type:"image",title:null,url:"",alt:null}}function Ee(){return{type:"link",title:null,url:"",children:[]}}function ft(W){return{type:"list",ordered:W.type==="listOrdered",start:null,spread:W._spread,children:[]}}function fn(W){return{type:"listItem",spread:W._spread,checked:null,children:[]}}function Qs(){return{type:"paragraph",children:[]}}function Gs(){return{type:"strong",children:[]}}function Un(){return{type:"text",value:""}}function ro(){return{type:"thematicBreak"}}}function hn(e){return{line:e.line,column:e.column,offset:e.offset}}function Bg(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?Bg(e,r):Zw(e,r)}}function Zw(e,t){let n;for(n in t)if(Fg.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Np(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+ki({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+ki({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+ki({start:t.start,end:t.end})+") is still open")}function e2(e){const t=this;t.parser=n;function n(r){return Yw(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function t2(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function n2(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function r2(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let s={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(s.data={meta:t.meta}),e.patch(t,s),s=e.applyData(t,s),s={type:"element",tagName:"pre",properties:{},children:[s]},e.patch(t,s),s}function i2(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function o2(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function s2(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Jr(r.toLowerCase()),s=e.footnoteOrder.indexOf(r);let l,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),l=e.footnoteOrder.length):l=s+1,a+=1,e.footnoteCounts.set(r,a);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(l)}]};e.patch(t,c);const u={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,u),e.applyData(t,u)}function l2(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function a2(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Ug(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),s=i[0];s&&s.type==="text"?s.value="["+s.value:i.unshift({type:"text",value:"["});const l=i[i.length-1];return l&&l.type==="text"?l.value+=r:i.push({type:"text",value:r}),i}function c2(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Ug(e,t);const i={src:Jr(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,s),e.applyData(t,s)}function u2(e,t){const n={src:Jr(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function d2(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function p2(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Ug(e,t);const i={href:Jr(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,s),e.applyData(t,s)}function f2(e,t){const n={href:Jr(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function m2(e,t,n){const r=e.all(t),i=n?h2(n):Vg(t),s={},l=[];if(typeof t.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const d=r[a];(i||a!==0||d.type!=="element"||d.tagName!=="p")&&l.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?l.push(...d.children):l.push(d)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&l.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:s,children:l};return e.patch(t,u),e.applyData(t,u)}function h2(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Vg(n[r])}return t}function Vg(e){const t=e.spread;return t??e.children.length>1}function g2(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const l=r[i];if(l.type==="element"&&l.tagName==="li"&&l.properties&&Array.isArray(l.properties.className)&&l.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const s={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,s),e.applyData(t,s)}function x2(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function y2(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function v2(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function b2(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const l={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],l),i.push(l)}if(n.length>0){const l={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=pu(t.children[1]),c=wg(t.children[t.children.length-1]);a&&c&&(l.position={start:a,end:c}),i.push(l)}const s={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,s),e.applyData(t,s)}function k2(e,t,n){const r=n?n.children:void 0,s=(r?r.indexOf(t):1)===0?"th":"td",l=n&&n.type==="table"?n.align:void 0,a=l?l.length:t.children.length;let c=-1;const u=[];for(;++c<a;){const p=t.children[c],f={},m=l?l[c]:void 0;m&&(f.align=m);let w={type:"element",tagName:s,properties:f,children:[]};p&&(w.children=e.all(p),e.patch(p,w),w=e.applyData(p,w)),u.push(w)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function j2(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const Ep=9,zp=32;function w2(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const s=[];for(;r;)s.push(Tp(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return s.push(Tp(t.slice(i),i>0,!1)),s.join("")}function Tp(e,t,n){let r=0,i=e.length;if(t){let s=e.codePointAt(r);for(;s===Ep||s===zp;)r++,s=e.codePointAt(r)}if(n){let s=e.codePointAt(i-1);for(;s===Ep||s===zp;)i--,s=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function _2(e,t){const n={type:"text",value:w2(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function S2(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const C2={blockquote:t2,break:n2,code:r2,delete:i2,emphasis:o2,footnoteReference:s2,heading:l2,html:a2,imageReference:c2,image:u2,inlineCode:d2,linkReference:p2,link:f2,listItem:m2,list:g2,paragraph:x2,root:y2,strong:v2,table:b2,tableCell:j2,tableRow:k2,text:_2,thematicBreak:S2,toml:_o,yaml:_o,definition:_o,footnoteDefinition:_o};function _o(){}const Wg=-1,qs=0,wi=1,vs=2,vu=3,bu=4,ku=5,ju=6,Hg=7,qg=8,Pp=typeof self=="object"?self:globalThis,N2=(e,t)=>{const n=(i,s)=>(e.set(s,i),i),r=i=>{if(e.has(i))return e.get(i);const[s,l]=t[i];switch(s){case qs:case Wg:return n(l,i);case wi:{const a=n([],i);for(const c of l)a.push(r(c));return a}case vs:{const a=n({},i);for(const[c,u]of l)a[r(c)]=r(u);return a}case vu:return n(new Date(l),i);case bu:{const{source:a,flags:c}=l;return n(new RegExp(a,c),i)}case ku:{const a=n(new Map,i);for(const[c,u]of l)a.set(r(c),r(u));return a}case ju:{const a=n(new Set,i);for(const c of l)a.add(r(c));return a}case Hg:{const{name:a,message:c}=l;return n(new Pp[a](c),i)}case qg:return n(BigInt(l),i);case"BigInt":return n(Object(BigInt(l)),i);case"ArrayBuffer":return n(new Uint8Array(l).buffer,l);case"DataView":{const{buffer:a}=new Uint8Array(l);return n(new DataView(a),l)}}return n(new Pp[s](l),i)};return r},Lp=e=>N2(new Map,e)(0),ur="",{toString:E2}={},{keys:z2}=Object,ri=e=>{const t=typeof e;if(t!=="object"||!e)return[qs,t];const n=E2.call(e).slice(8,-1);switch(n){case"Array":return[wi,ur];case"Object":return[vs,ur];case"Date":return[vu,ur];case"RegExp":return[bu,ur];case"Map":return[ku,ur];case"Set":return[ju,ur];case"DataView":return[wi,n]}return n.includes("Array")?[wi,n]:n.includes("Error")?[Hg,n]:[vs,n]},So=([e,t])=>e===qs&&(t==="function"||t==="symbol"),T2=(e,t,n,r)=>{const i=(l,a)=>{const c=r.push(l)-1;return n.set(a,c),c},s=l=>{if(n.has(l))return n.get(l);let[a,c]=ri(l);switch(a){case qs:{let d=l;switch(c){case"bigint":a=qg,d=l.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);d=null;break;case"undefined":return i([Wg],l)}return i([a,d],l)}case wi:{if(c){let f=l;return c==="DataView"?f=new Uint8Array(l.buffer):c==="ArrayBuffer"&&(f=new Uint8Array(l)),i([c,[...f]],l)}const d=[],p=i([a,d],l);for(const f of l)d.push(s(f));return p}case vs:{if(c)switch(c){case"BigInt":return i([c,l.toString()],l);case"Boolean":case"Number":case"String":return i([c,l.valueOf()],l)}if(t&&"toJSON"in l)return s(l.toJSON());const d=[],p=i([a,d],l);for(const f of z2(l))(e||!So(ri(l[f])))&&d.push([s(f),s(l[f])]);return p}case vu:return i([a,l.toISOString()],l);case bu:{const{source:d,flags:p}=l;return i([a,{source:d,flags:p}],l)}case ku:{const d=[],p=i([a,d],l);for(const[f,m]of l)(e||!(So(ri(f))||So(ri(m))))&&d.push([s(f),s(m)]);return p}case ju:{const d=[],p=i([a,d],l);for(const f of l)(e||!So(ri(f)))&&d.push(s(f));return p}}const{message:u}=l;return i([a,{name:c,message:u}],l)};return s},Ap=(e,{json:t,lossy:n}={})=>{const r=[];return T2(!(t||n),!!t,new Map,r)(e),r},bs=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Lp(Ap(e,t)):structuredClone(e):(e,t)=>Lp(Ap(e,t));function P2(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function L2(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function A2(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||P2,r=e.options.footnoteBackLabel||L2,i=e.options.footnoteLabel||"Footnotes",s=e.options.footnoteLabelTagName||"h2",l=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let c=-1;for(;++c<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[c]);if(!u)continue;const d=e.all(u),p=String(u.identifier).toUpperCase(),f=Jr(p.toLowerCase());let m=0;const w=[],j=e.footnoteCounts.get(p);for(;j!==void 0&&++m<=j;){w.length>0&&w.push({type:"text",value:" "});let h=typeof n=="string"?n:n(c,m);typeof h=="string"&&(h={type:"text",value:h}),w.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(m>1?"-"+m:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,m),className:["data-footnote-backref"]},children:Array.isArray(h)?h:[h]})}const N=d[d.length-1];if(N&&N.type==="element"&&N.tagName==="p"){const h=N.children[N.children.length-1];h&&h.type==="text"?h.value+=" ":N.children.push({type:"text",value:" "}),N.children.push(...w)}else d.push(...w);const g={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(u,g),a.push(g)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...bs(l),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const Jg=function(e){if(e==null)return O2;if(typeof e=="function")return Js(e);if(typeof e=="object")return Array.isArray(e)?R2(e):I2(e);if(typeof e=="string")return M2(e);throw new Error("Expected function, string, or object as test")};function R2(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Jg(e[n]);return Js(r);function r(...i){let s=-1;for(;++s<t.length;)if(t[s].apply(this,i))return!0;return!1}}function I2(e){const t=e;return Js(n);function n(r){const i=r;let s;for(s in e)if(i[s]!==t[s])return!1;return!0}}function M2(e){return Js(t);function t(n){return n&&n.type===e}}function Js(e){return t;function t(n,r,i){return!!($2(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function O2(){return!0}function $2(e){return e!==null&&typeof e=="object"&&"type"in e}const Kg=[],D2=!0,Rp=!1,F2="skip";function B2(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const s=Jg(i),l=r?-1:1;a(e,void 0,[])();function a(c,u,d){const p=c&&typeof c=="object"?c:{};if(typeof p.type=="string"){const m=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(c.type+(m?"<"+m+">":""))+")"})}return f;function f(){let m=Kg,w,j,N;if((!t||s(c,u,d[d.length-1]||void 0))&&(m=U2(n(c,d)),m[0]===Rp))return m;if("children"in c&&c.children){const g=c;if(g.children&&m[0]!==F2)for(j=(r?g.children.length:-1)+l,N=d.concat(g);j>-1&&j<g.children.length;){const h=g.children[j];if(w=a(h,j,N)(),w[0]===Rp)return w;j=typeof w[1]=="number"?w[1]:j+l}}return m}}}function U2(e){return Array.isArray(e)?e:typeof e=="number"?[D2,e]:e==null?Kg:[e]}function Qg(e,t,n,r){let i,s,l;typeof t=="function"&&typeof n!="function"?(s=void 0,l=t,i=n):(s=t,l=n,i=r),B2(e,s,a,i);function a(c,u){const d=u[u.length-1],p=d?d.children.indexOf(c):void 0;return l(c,p,d)}}const Za={}.hasOwnProperty,V2={};function W2(e,t){const n=t||V2,r=new Map,i=new Map,s=new Map,l={...C2,...n.handlers},a={all:u,applyData:q2,definitionById:r,footnoteById:i,footnoteCounts:s,footnoteOrder:[],handlers:l,one:c,options:n,patch:H2,wrap:K2};return Qg(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:i,f=String(d.identifier).toUpperCase();p.has(f)||p.set(f,d)}}),a;function c(d,p){const f=d.type,m=a.handlers[f];if(Za.call(a.handlers,f)&&m)return m(a,d,p);if(a.options.passThrough&&a.options.passThrough.includes(f)){if("children"in d){const{children:j,...N}=d,g=bs(N);return g.children=a.all(d),g}return bs(d)}return(a.options.unknownHandler||J2)(a,d,p)}function u(d){const p=[];if("children"in d){const f=d.children;let m=-1;for(;++m<f.length;){const w=a.one(f[m],d);if(w){if(m&&f[m-1].type==="break"&&(!Array.isArray(w)&&w.type==="text"&&(w.value=Ip(w.value)),!Array.isArray(w)&&w.type==="element")){const j=w.children[0];j&&j.type==="text"&&(j.value=Ip(j.value))}Array.isArray(w)?p.push(...w):p.push(w)}}}return p}}function H2(e,t){e.position&&(t.position=Ek(e))}function q2(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,s=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const l="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:l}}n.type==="element"&&s&&Object.assign(n.properties,bs(s)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function J2(e,t){const n=t.data||{},r="value"in t&&!(Za.call(n,"hProperties")||Za.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function K2(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Ip(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Mp(e,t){const n=W2(e,t),r=n.one(e,void 0),i=A2(n),s=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&s.children.push({type:"text",value:`
`},i),s}function Q2(e,t){return e&&"run"in e?async function(n,r){const i=Mp(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Mp(n,{file:r,...e||t})}}function Op(e){if(e)throw e}var Bo=Object.prototype.hasOwnProperty,Gg=Object.prototype.toString,$p=Object.defineProperty,Dp=Object.getOwnPropertyDescriptor,Fp=function(t){return typeof Array.isArray=="function"?Array.isArray(t):Gg.call(t)==="[object Array]"},Bp=function(t){if(!t||Gg.call(t)!=="[object Object]")return!1;var n=Bo.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Bo.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||Bo.call(t,i)},Up=function(t,n){$p&&n.name==="__proto__"?$p(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Vp=function(t,n){if(n==="__proto__")if(Bo.call(t,n)){if(Dp)return Dp(t,n).value}else return;return t[n]},G2=function e(){var t,n,r,i,s,l,a=arguments[0],c=1,u=arguments.length,d=!1;for(typeof a=="boolean"&&(d=a,a=arguments[1]||{},c=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});c<u;++c)if(t=arguments[c],t!=null)for(n in t)r=Vp(a,n),i=Vp(t,n),a!==i&&(d&&i&&(Bp(i)||(s=Fp(i)))?(s?(s=!1,l=r&&Fp(r)?r:[]):l=r&&Bp(r)?r:{},Up(a,{name:n,newValue:e(d,l,i)})):typeof i<"u"&&Up(a,{name:n,newValue:i}));return a};const Rl=js(G2);function ec(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Y2(){const e=[],t={run:n,use:r};return t;function n(...i){let s=-1;const l=i.pop();if(typeof l!="function")throw new TypeError("Expected function as last argument, not "+l);a(null,...i);function a(c,...u){const d=e[++s];let p=-1;if(c){l(c);return}for(;++p<i.length;)(u[p]===null||u[p]===void 0)&&(u[p]=i[p]);i=u,d?X2(d,a)(...u):l(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function X2(e,t){let n;return r;function r(...l){const a=e.length>l.length;let c;a&&l.push(i);try{c=e.apply(this,l)}catch(u){const d=u;if(a&&n)throw d;return i(d)}a||(c&&c.then&&typeof c.then=="function"?c.then(s,i):c instanceof Error?i(c):s(c))}function i(l,...a){n||(n=!0,t(l,...a))}function s(l){i(null,l)}}const Ht={basename:Z2,dirname:e_,extname:t_,join:n_,sep:"/"};function Z2(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');no(e);let n=0,r=-1,i=e.length,s;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else r<0&&(s=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let l=-1,a=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else l<0&&(s=!0,l=i+1),a>-1&&(e.codePointAt(i)===t.codePointAt(a--)?a<0&&(r=i):(a=-1,r=l));return n===r?r=l:r<0&&(r=e.length),e.slice(n,r)}function e_(e){if(no(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function t_(e){no(e);let t=e.length,n=-1,r=0,i=-1,s=0,l;for(;t--;){const a=e.codePointAt(t);if(a===47){if(l){r=t+1;break}continue}n<0&&(l=!0,n=t+1),a===46?i<0?i=t:s!==1&&(s=1):i>-1&&(s=-1)}return i<0||n<0||s===0||s===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function n_(...e){let t=-1,n;for(;++t<e.length;)no(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":r_(n)}function r_(e){no(e);const t=e.codePointAt(0)===47;let n=i_(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function i_(e,t){let n="",r=0,i=-1,s=0,l=-1,a,c;for(;++l<=e.length;){if(l<e.length)a=e.codePointAt(l);else{if(a===47)break;a=47}if(a===47){if(!(i===l-1||s===1))if(i!==l-1&&s===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),i=l,s=0;continue}}else if(n.length>0){n="",r=0,i=l,s=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,l):n=e.slice(i+1,l),r=l-i-1;i=l,s=0}else a===46&&s>-1?s++:s=-1}return n}function no(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const o_={cwd:s_};function s_(){return"/"}function tc(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function l_(e){if(typeof e=="string")e=new URL(e);else if(!tc(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return a_(e)}function a_(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const Il=["history","path","basename","stem","extname","dirname"];class Yg{constructor(t){let n;t?tc(t)?n={path:t}:typeof t=="string"||c_(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":o_.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Il.length;){const s=Il[r];s in n&&n[s]!==void 0&&n[s]!==null&&(this[s]=s==="history"?[...n[s]]:n[s])}let i;for(i in n)Il.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?Ht.basename(this.path):void 0}set basename(t){Ol(t,"basename"),Ml(t,"basename"),this.path=Ht.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?Ht.dirname(this.path):void 0}set dirname(t){Wp(this.basename,"dirname"),this.path=Ht.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?Ht.extname(this.path):void 0}set extname(t){if(Ml(t,"extname"),Wp(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Ht.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){tc(t)&&(t=l_(t)),Ol(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?Ht.basename(this.path,this.extname):void 0}set stem(t){Ol(t,"stem"),Ml(t,"stem"),this.path=Ht.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new Ze(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Ml(e,t){if(e&&e.includes(Ht.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Ht.sep+"`")}function Ol(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Wp(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function c_(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const u_=function(e){const r=this.constructor.prototype,i=r[e],s=function(){return i.apply(s,arguments)};return Object.setPrototypeOf(s,r),s},d_={}.hasOwnProperty;class wu extends u_{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Y2()}copy(){const t=new wu;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Rl(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Fl("data",this.frozen),this.namespace[t]=n,this):d_.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Fl("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Co(t),r=this.parser||this.Parser;return $l("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),$l("process",this.parser||this.Parser),Dl("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(s,l){const a=Co(t),c=r.parse(a);r.run(c,a,function(d,p,f){if(d||!p||!f)return u(d);const m=p,w=r.stringify(m,f);m_(w)?f.value=w:f.result=w,u(d,f)});function u(d,p){d||!p?l(d):s?s(p):n(void 0,p)}}}processSync(t){let n=!1,r;return this.freeze(),$l("processSync",this.parser||this.Parser),Dl("processSync",this.compiler||this.Compiler),this.process(t,i),qp("processSync","process",n),r;function i(s,l){n=!0,Op(s),r=l}}run(t,n,r){Hp(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?s(void 0,r):new Promise(s);function s(l,a){const c=Co(n);i.run(t,c,u);function u(d,p,f){const m=p||t;d?a(d):l?l(m):r(void 0,m,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,s),qp("runSync","run",r),i;function s(l,a){Op(l),i=a,r=!0}}stringify(t,n){this.freeze();const r=Co(n),i=this.compiler||this.Compiler;return Dl("stringify",i),Hp(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(Fl("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):l(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function s(u){if(typeof u=="function")c(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...p]=u;c(d,p)}else l(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function l(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(u.plugins),u.settings&&(i.settings=Rl(!0,i.settings,u.settings))}function a(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const p=u[d];s(p)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function c(u,d){let p=-1,f=-1;for(;++p<r.length;)if(r[p][0]===u){f=p;break}if(f===-1)r.push([u,...d]);else if(d.length>0){let[m,...w]=d;const j=r[f][1];ec(j)&&ec(m)&&(m=Rl(!0,j,m)),r[f]=[u,m,...w]}}}}const p_=new wu().freeze();function $l(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Dl(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Fl(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Hp(e){if(!ec(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function qp(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Co(e){return f_(e)?e:new Yg(e)}function f_(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function m_(e){return typeof e=="string"||h_(e)}function h_(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const g_="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Jp=[],Kp={allowDangerousHtml:!0},x_=/^(https?|ircs?|mailto|xmpp)$/i,y_=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Xg(e){const t=v_(e),n=b_(e);return k_(t.runSync(t.parse(n),n),e)}function v_(e){const t=e.rehypePlugins||Jp,n=e.remarkPlugins||Jp,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Kp}:Kp;return p_().use(e2).use(n).use(Q2,r).use(t)}function b_(e){const t=e.children||"",n=new Yg;return typeof t=="string"&&(n.value=t),n}function k_(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,s=t.disallowedElements,l=t.skipHtml,a=t.unwrapDisallowed,c=t.urlTransform||j_;for(const d of y_)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+g_+d.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),Qg(e,u),Ak(e,{Fragment:o.Fragment,components:i,ignoreInvalidStyle:!0,jsx:o.jsx,jsxs:o.jsxs,passKeys:!0,passNode:!0});function u(d,p,f){if(d.type==="raw"&&f&&typeof p=="number")return l?f.children.splice(p,1):f.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let m;for(m in Pl)if(Object.hasOwn(Pl,m)&&Object.hasOwn(d.properties,m)){const w=d.properties[m],j=Pl[m];(j===null||j.includes(d.tagName))&&(d.properties[m]=c(String(w||""),m,d))}}if(d.type==="element"){let m=n?!n.includes(d.tagName):s?s.includes(d.tagName):!1;if(!m&&r&&typeof p=="number"&&(m=!r(d,p,f)),m&&f&&typeof p=="number")return a&&d.children?f.children.splice(p,1,...d.children):f.children.splice(p,1),p}}}function j_(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||x_.test(e.slice(0,t))?e:""}function w_({value:e,onChange:t,placeholder:n="Write your content here...",minHeight:r=200}){const[i,s]=_.useState(!1),[l,a]=_.useState(r),c=_.useRef(null),u=_.useRef(null);_.useEffect(()=>{if(e){const f=e.split(`
`).length,m=Math.max(r,Math.min(f*20+40,500));a(m)}},[e,r]),_.useEffect(()=>{i&&u.current&&u.current.focus()},[i]);function d(f){u.current=f,f.focus()}function p(f){c.current&&!c.current.contains(f.target)&&s(!1)}return _.useEffect(()=>{if(i)return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[i]),o.jsxs("div",{ref:c,className:"markdown-editor",children:[o.jsx("style",{children:`
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
          height: ${l}px;
        }
      `}),i?o.jsx("div",{className:"monaco-wrapper",children:o.jsx(ln,{height:"100%",language:"markdown",theme:"vs-dark",value:e,onChange:f=>t(f||""),onMount:d,options:{minimap:{enabled:!1},fontSize:14,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"off",scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",padding:{top:12,bottom:12},lineDecorationsWidth:8,folding:!1,glyphMargin:!1,renderLineHighlight:"none",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,scrollbar:{vertical:"auto",horizontal:"hidden"}}})}):o.jsxs("div",{className:"markdown-preview",onClick:()=>s(!0),children:[o.jsxs("span",{className:"edit-hint",children:[o.jsx(g0,{size:12}),"Click to edit"]}),e?o.jsx("div",{className:"markdown-content",children:o.jsx(Xg,{children:e})}):o.jsx("div",{className:"markdown-placeholder",children:n})]})]})}function __(e){return/^[a-zA-Z0-9_]+$/.test(e)}function S_({agent:e}){const{project:t,updateAgent:n,mcpServers:r,builtinTools:i,setActiveTab:s,setRunAgentId:l}=it(),[a,c]=_.useState(new Set(["basic","model","tools","subagents"])),[u,d]=_.useState(!1),[p,f]=_.useState(!1),[m,w]=_.useState(!1),[j,N]=_.useState(""),[g,h]=_.useState(null);if(!t)return null;function y(A){n(e.id,A)}function P(A){if(A===""){h(null),y({name:A});return}__(A)?h(null):h("Name can only contain letters, numbers, and underscores"),y({name:A})}function C(A){const $=new Set(a);$.has(A)?$.delete(A):$.add(A),c($)}const x=e.type==="LlmAgent",v=e;function T(A){x&&y({tools:[...v.tools,A]})}function R(A){x&&y({tools:v.tools.filter(($,I)=>I!==A)})}function E(A,$){if(!x)return;const I=[...v.tools];I[A]=$,y({tools:I})}function k(A){"sub_agents"in e&&y({sub_agents:[...e.sub_agents,A]})}function z(A){"sub_agents"in e&&y({sub_agents:e.sub_agents.filter($=>$!==A)})}const M=t.agents.filter(A=>A.id!==e.id);async function q(){if(!(!t||!x)){d(!0);try{const A=v.instruction||"",$=A?`Current instruction to improve:

${A}

Please improve and expand this instruction while preserving its core intent.`:void 0,b=t.agents.some(J=>J.id===e.id)?void 0:e,U=await Do(t.id,e.id,$,b);U.success&&U.prompt?y({instruction:U.prompt}):alert("Failed to generate prompt: "+(U.error||"Unknown error"))}catch(A){alert("Error generating prompt: "+A.message)}finally{d(!1)}}}async function B(){if(!(!t||!x||!j.trim())){d(!0);try{const $=`Current instruction:

${v.instruction||""}

---

Requested changes:
${j}

Please apply the requested changes to the instruction above. Output only the updated instruction, nothing else.`,b=t.agents.some(J=>J.id===e.id)?void 0:e,U=await Do(t.id,e.id,$,b);U.success&&U.prompt?(y({instruction:U.prompt}),w(!1),N("")):alert("Failed to apply changes: "+(U.error||"Unknown error"))}catch(A){alert("Error applying changes: "+A.message)}finally{d(!1)}}}async function Y(){if(!t||!x)return;const A=v.instruction;if(!A){alert("Please write an instruction first");return}f(!0);try{const $=`Write a 5-10 word description of what this agent does.

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

Your response (5-10 words only):`,I=await Do(t.id,e.id,$);if(I.success&&I.prompt){let b=I.prompt.trim();b=b.replace(/^["']|["']$/g,"").trim();const U=b.split(/[.!?\n]/)[0].trim(),J=U.length>80?U.slice(0,77)+"...":U;y({description:J})}else alert("Failed to generate description: "+(I.error||"Unknown error"))}catch($){alert("Error generating description: "+$.message)}finally{f(!1)}}return o.jsxs("div",{className:"agent-editor",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"editor-header",children:[o.jsx(Zn,{size:24,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o.jsx("input",{type:"text",value:e.name,onChange:A=>P(A.target.value),placeholder:"Agent name",style:{borderColor:g?"var(--error)":void 0}}),g&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:g})]}),o.jsx("span",{className:"badge badge-info",children:e.type}),o.jsxs("button",{className:"btn btn-primary btn-sm run-agent-btn",onClick:()=>{l(e.id),s("run")},title:"Test this agent",children:[o.jsx(Mn,{size:14}),"Run"]})]}),o.jsxs("div",{className:"editor-content",children:[o.jsxs(ii,{id:"basic",title:"Basic Info",icon:o.jsx(Zn,{size:16}),expanded:a.has("basic"),onToggle:()=>C("basic"),children:[o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group full-width",children:[o.jsxs("div",{className:"label-with-action",children:[o.jsx("label",{children:"Description"}),x&&v.instruction&&o.jsx("button",{className:"btn btn-secondary btn-sm generate-btn",onClick:Y,disabled:p,title:"Generate description from instruction",children:p?o.jsxs(o.Fragment,{children:[o.jsx(Br,{size:14,className:"spin"}),"Summarizing..."]}):"Summarize"})]}),o.jsx("input",{type:"text",value:e.description,onChange:A=>y({description:A.target.value}),placeholder:"e.g., Reviews code for bugs and suggests fixes"})]})}),x&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group full-width",children:[o.jsxs("div",{className:"label-with-action",children:[o.jsx("label",{children:"Instruction"}),o.jsxs("div",{className:"action-buttons",children:[o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>w(!m),disabled:u||!v.instruction,title:"Request specific changes to the instruction",children:"Request Changes"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:q,disabled:u,title:"Uses AI to improve and expand the current instruction",children:u?o.jsxs(o.Fragment,{children:[o.jsx(Br,{size:14,className:"spin"}),"Working..."]}):"Auto-Improve"})]})]}),m&&o.jsxs("div",{className:"request-changes-box",children:[o.jsx("input",{type:"text",value:j,onChange:A=>N(A.target.value),placeholder:"Describe what changes you want...",onKeyDown:A=>{A.key==="Enter"&&j.trim()?B():A.key==="Escape"&&(w(!1),N(""))},autoFocus:!0}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:B,disabled:u||!j.trim(),children:"Apply"})]}),o.jsx(w_,{value:v.instruction,onChange:A=>y({instruction:A}),placeholder:"Write your agent's instruction here... (Markdown supported)",minHeight:200})]})}),o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Output Key"}),o.jsxs("select",{value:v.output_key||"",onChange:A=>y({output_key:A.target.value||void 0}),children:[o.jsx("option",{value:"",children:"None"}),t.app.state_keys.map(A=>o.jsx("option",{value:A.name,children:A.name},A.name))]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Include Contents"}),o.jsxs("select",{value:v.include_contents,onChange:A=>y({include_contents:A.target.value}),children:[o.jsx("option",{value:"default",children:"Default"}),o.jsx("option",{value:"none",children:"None"})]})]})]}),o.jsxs("div",{className:"form-row",style:{gap:24},children:[o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:v.disallow_transfer_to_parent,onChange:A=>y({disallow_transfer_to_parent:A.target.checked})}),o.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to parent"]}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:v.disallow_transfer_to_peers,onChange:A=>y({disallow_transfer_to_peers:A.target.checked})}),o.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to peers"]})]})]}),e.type==="LoopAgent"&&o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Max Iterations"}),o.jsx("input",{type:"number",value:e.max_iterations||"",onChange:A=>y({max_iterations:parseInt(A.target.value)||void 0}),placeholder:"No limit"})]})})]}),x&&o.jsx(ii,{id:"model",title:"Model",icon:o.jsx(iu,{size:16}),expanded:a.has("model"),onToggle:()=>C("model"),children:o.jsx(N_,{agent:v,appModels:t.app.models||[],defaultModelId:t.app.default_model_id,onUpdate:A=>y({model:A})})}),x&&o.jsx(ii,{id:"tools",title:`Tools (${v.tools.length})`,icon:o.jsx(Gt,{size:16}),expanded:a.has("tools"),onToggle:()=>C("tools"),children:o.jsx(C_,{tools:v.tools,onAdd:T,onRemove:R,onUpdate:E,builtinTools:i,mcpServers:r,projectMcpServers:t.mcp_servers,customTools:t.custom_tools,agents:M,skillsets:t.skillsets||[]})}),x&&o.jsx(ii,{id:"callbacks",title:"Callbacks",icon:o.jsx(In,{size:16}),expanded:a.has("callbacks"),onToggle:()=>C("callbacks"),children:o.jsx(E_,{agent:v,onUpdate:y,customCallbacks:t.custom_callbacks||[]})}),"sub_agents"in e&&o.jsx(ii,{id:"subagents",title:`Sub-Agents (${e.sub_agents.length})`,icon:o.jsx(k0,{size:16}),expanded:a.has("subagents"),onToggle:()=>C("subagents"),children:o.jsxs("div",{className:"sub-agent-list",children:[e.sub_agents.map(A=>{const $=t.agents.find(I=>I.id===A);return $?o.jsxs("div",{className:"sub-agent-chip",children:[$.name,o.jsx("button",{onClick:()=>z(A),children:o.jsx(Te,{size:12})})]},A):null}),o.jsxs("select",{value:"",onChange:A=>{A.target.value&&k(A.target.value)},style:{width:150,padding:"6px 10px",fontSize:13},children:[o.jsx("option",{value:"",children:"Add agent..."}),M.filter(A=>!e.sub_agents.includes(A.id)).map(A=>o.jsx("option",{value:A.id,children:A.name},A.id))]})]})})]})]})}function ii({id:e,title:t,icon:n,expanded:r,onToggle:i,children:s}){return o.jsxs("div",{className:"section",children:[o.jsxs("div",{className:"section-header",onClick:i,children:[r?o.jsx(Ct,{size:16}):o.jsx(Nt,{size:16}),o.jsxs("h4",{children:[n," ",t]})]}),r&&o.jsx("div",{className:"section-content",children:s})]})}function C_({tools:e,onAdd:t,onRemove:n,onUpdate:r,builtinTools:i,mcpServers:s,projectMcpServers:l,customTools:a,agents:c,skillsets:u}){const[d,p]=_.useState(!1),[f,m]=_.useState({}),[w,j]=_.useState(""),N=Lt.useRef(null),g=Lt.useRef(null),[h,y]=_.useState(null),[P,C]=_.useState(new Set),x=(L,X)=>{if(!w.trim())return!0;const F=w.toLowerCase();return L.toLowerCase().includes(F)||((X==null?void 0:X.toLowerCase().includes(F))??!1)},v=i.filter(L=>x(L.name,L.description)),T=s.filter(L=>x(L.name,L.description)),R=l.filter(L=>x(L.name,L.description)),E=a.filter(L=>x(L.name,L.description)),k=c.filter(L=>x(L.name,L.description)),z=u.filter(L=>x(L.name,L.description));function M(){if(N.current){const L=N.current.getBoundingClientRect(),X=window.innerHeight,F=350,O=X-L.bottom-16,V=L.top-16;if(O>=200||O>=V){const G=Math.min(F,O);m({top:L.bottom+4,left:L.left,maxHeight:G})}else{const G=Math.min(F,V);m({top:L.top-G-4,left:L.left,maxHeight:G})}}p(!0),j(""),setTimeout(()=>{var L;return(L=g.current)==null?void 0:L.focus()},50)}function q(){p(!1),j("")}function B(L){t({type:"builtin",name:L}),q()}async function Y(L){q();const X=L.tool_filter||[];if(y({server:L,enabledTools:new Set(X),availableTools:X.map(F=>({name:F,description:""})),isLoading:X.length===0,error:void 0}),X.length===0)try{const{testMcpServer:F}=await lg(async()=>{const{testMcpServer:V}=await Promise.resolve().then(()=>i0);return{testMcpServer:V}},void 0),O=await F({connection_type:L.connection_type,command:L.command,args:L.args,env:L.env,url:L.url,headers:L.headers,timeout:L.timeout||30});O.success?y(V=>V?{...V,availableTools:O.tools,enabledTools:new Set(O.tools.map(G=>G.name)),isLoading:!1}:null):y(V=>V?{...V,isLoading:!1,error:O.error||"Failed to connect to MCP server"}:null)}catch(F){y(O=>O?{...O,isLoading:!1,error:F.message}:null)}}function A(L){if(!h)return;const X=new Set(h.enabledTools);X.has(L)?X.delete(L):X.add(L),y({...h,enabledTools:X})}function $(){if(!h)return;const L=Array.from(h.enabledTools);t({type:"mcp",server:{...h.server,tool_filter:L}}),y(null)}function I(L){const X=new Set(P);X.has(L)?X.delete(L):X.add(L),C(X)}function b(L,X){const F=e[L];if(F.type!=="mcp"||!F.server)return;const O=F.server.tool_filter||[];let V;O.includes(X)?V=O.filter(G=>G!==X):V=[...O,X],r(L,{...F,server:{...F.server,tool_filter:V}})}function U(L){t({type:"function",name:L.name,module_path:L.module_path}),q()}function J(L){const X=c.find(F=>F.id===L);t({type:"agent",agent_id:L,name:X==null?void 0:X.name}),q()}function S(L){const X=u.find(F=>F.id===L);t({type:"skillset",skillset_id:L,name:X==null?void 0:X.name}),q()}function oe(L){return s.find(X=>X.name===L)}return o.jsxs("div",{children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"tool-list",children:e.map((L,X)=>{var F;return L.type==="mcp"&&L.server?o.jsxs("div",{className:"mcp-tool-item",children:[o.jsxs("div",{className:"mcp-tool-header",onClick:()=>I(X),children:[P.has(X)?o.jsx(Ct,{size:14}):o.jsx(Nt,{size:14}),o.jsx(Gt,{size:14,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{className:"mcp-tool-info",children:[o.jsx("div",{className:"mcp-tool-name",children:L.server.name}),o.jsx("div",{className:"mcp-tool-count",children:L.server.tool_filter===null||L.server.tool_filter===void 0?"all tools":`${L.server.tool_filter.length} tools enabled`})]}),o.jsx("button",{className:"delete-btn",onClick:O=>{O.stopPropagation(),n(X)},children:o.jsx(Te,{size:14})})]}),P.has(X)&&o.jsx("div",{className:"mcp-tool-body",children:o.jsx("div",{className:"mcp-tool-list",children:(()=>{const O=oe(L.server.name),V=(O==null?void 0:O.tool_filter)||L.server.tool_filter||[],G=new Set(L.server.tool_filter||[]);return V.map(Z=>o.jsxs("label",{className:`mcp-tool-chip ${G.has(Z)?"enabled":"disabled"}`,onClick:()=>b(X,Z),children:[o.jsx("input",{type:"checkbox",checked:G.has(Z),onChange:()=>{},style:{display:"none"}}),Z]},Z))})()})})]},X):L.type==="skillset"?o.jsxs("div",{className:"tool-item",children:[o.jsx(sn,{size:14,style:{color:"var(--accent)"}}),o.jsxs("div",{className:"tool-item-info",children:[o.jsx("div",{className:"tool-item-name",children:L.name||((F=u.find(O=>O.id===L.skillset_id))==null?void 0:F.name)||"SkillSet"}),o.jsx("div",{className:"tool-item-type",children:"skillset"})]}),o.jsx("button",{className:"delete-btn",onClick:()=>n(X),children:o.jsx(Te,{size:14})})]},X):o.jsxs("div",{className:"tool-item",children:[o.jsx(Gt,{size:14,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{className:"tool-item-info",children:[o.jsx("div",{className:"tool-item-name",children:L.name||L.agent_id}),o.jsx("div",{className:"tool-item-type",children:L.type})]}),o.jsx("button",{className:"delete-btn",onClick:()=>n(X),children:o.jsx(Te,{size:14})})]},X)})}),o.jsxs("div",{className:"add-tool-dropdown",style:{marginTop:12},children:[o.jsxs("button",{ref:N,className:"btn btn-secondary btn-sm",onClick:()=>d?q():M(),children:[o.jsx(Me,{size:14}),"Add Tool"]}),d&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"dropdown-backdrop",onClick:q}),o.jsxs("div",{className:"dropdown-content dropdown-fixed",style:f,children:[o.jsx("div",{className:"dropdown-search",children:o.jsx("input",{ref:g,type:"text",placeholder:"Search tools...",value:w,onChange:L=>j(L.target.value),onKeyDown:L=>L.key==="Escape"&&q()})}),v.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Built-in Tools"}),v.map(L=>o.jsxs("button",{className:"dropdown-item",onClick:()=>B(L.name),children:[o.jsx("div",{className:"dropdown-item-name",children:L.name}),o.jsx("div",{className:"dropdown-item-desc",children:L.description})]},L.name))]}),T.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsxs("h5",{children:["Known MCP Servers (",T.length,")"]}),T.map(L=>o.jsxs("button",{className:"dropdown-item",onClick:()=>Y(L),children:[o.jsxs("div",{className:"dropdown-item-name",children:[L.name,o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:L.tool_filter===null||L.tool_filter===void 0?"all tools":`${L.tool_filter.length} tools`})]}),o.jsx("div",{className:"dropdown-item-desc",children:L.description})]},`known-${L.name}`))]}),R.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsxs("h5",{children:["Project MCP Servers (",R.length,")"]}),R.map(L=>o.jsxs("button",{className:"dropdown-item",onClick:()=>Y(L),children:[o.jsxs("div",{className:"dropdown-item-name",children:[L.name,o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:L.tool_filter===null||L.tool_filter===void 0?"all tools":`${L.tool_filter.length} tools`})]}),o.jsx("div",{className:"dropdown-item-desc",children:L.description||"Custom MCP server"})]},`project-${L.id||L.name}`))]}),E.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Custom Tools"}),E.map(L=>o.jsxs("button",{className:"dropdown-item",onClick:()=>U(L),children:[o.jsx("div",{className:"dropdown-item-name",children:L.name}),o.jsx("div",{className:"dropdown-item-desc",children:L.description})]},L.id))]}),k.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Agents as Tools"}),k.map(L=>o.jsxs("button",{className:"dropdown-item",onClick:()=>J(L.id),children:[o.jsx("div",{className:"dropdown-item-name",children:L.name}),o.jsx("div",{className:"dropdown-item-desc",children:L.type})]},L.id))]}),z.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsxs("h5",{children:["SkillSets (",z.length,")"]}),z.map(L=>o.jsxs("button",{className:"dropdown-item",onClick:()=>S(L.id),children:[o.jsxs("div",{className:"dropdown-item-name",children:[L.name,o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:[L.entry_count||0," entries"]})]}),o.jsx("div",{className:"dropdown-item-desc",children:L.description||"Vector knowledge base"})]},L.id))]}),w.trim()&&v.length===0&&T.length===0&&R.length===0&&E.length===0&&k.length===0&&z.length===0&&o.jsxs("div",{className:"dropdown-section",style:{textAlign:"center",padding:"20px",color:"var(--text-muted)"},children:['No tools matching "',w,'"']})]})]})]}),h&&o.jsx("div",{className:"mcp-config-dialog",children:o.jsxs("div",{className:"mcp-config-content",children:[o.jsxs("h3",{children:["Configure ",h.server.name]}),o.jsx("p",{children:h.server.description}),h.isLoading?o.jsxs("div",{className:"mcp-loading",children:[o.jsx("div",{className:"spinner"}),o.jsx("p",{children:"Connecting to MCP server and discovering tools..."})]}):h.error?o.jsxs("div",{className:"mcp-error",children:[o.jsxs("p",{children:["⚠️ Failed to discover tools: ",h.error]}),o.jsx("p",{className:"hint",children:"You can still add the server, but you won't be able to select specific tools."})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"mcp-select-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>y({...h,enabledTools:new Set(h.availableTools.map(L=>L.name))}),children:["Select All (",h.availableTools.length,")"]}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>y({...h,enabledTools:new Set}),children:"Select None"})]}),o.jsx("div",{className:"mcp-tools-grid",children:h.availableTools.map(L=>o.jsxs("div",{className:"mcp-tool-row",title:L.description||L.name,style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:h.enabledTools.has(L.name),onChange:()=>A(L.name)}),o.jsx("span",{className:"toggle-slider"})]}),o.jsx("span",{style:{fontSize:13,opacity:h.enabledTools.has(L.name)?1:.5,cursor:"pointer"},onClick:()=>A(L.name),children:L.name})]},L.name))})]}),o.jsxs("div",{className:"dialog-actions",children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>y(null),children:"Cancel"}),o.jsxs("button",{className:"btn btn-primary",onClick:$,disabled:h.enabledTools.size===0,children:["Add ",h.enabledTools.size," Tools"]})]})]})})]})}function N_({agent:e,appModels:t,defaultModelId:n,onUpdate:r}){var p,f,m,w,j,N,g,h,y,P;const i=(p=e.model)==null?void 0:p._appModelId,s=e.model!==null&&e.model!==void 0&&!i,a=i||(()=>{if(!e.model)return n;const C=t.find(x=>{var v,T,R;return x.provider===((v=e.model)==null?void 0:v.provider)&&x.model_name===((T=e.model)==null?void 0:T.model_name)&&x.api_base===((R=e.model)==null?void 0:R.api_base)});return C==null?void 0:C.id})()||n||((f=t[0])==null?void 0:f.id);Lt.useEffect(()=>{var C,x,v,T,R;if(i){const E=t.find(k=>k.id===i);E&&(((C=e.model)==null?void 0:C.provider)!==E.provider||((x=e.model)==null?void 0:x.model_name)!==E.model_name||((v=e.model)==null?void 0:v.api_base)!==E.api_base||((T=e.model)==null?void 0:T.temperature)!==E.temperature||((R=e.model)==null?void 0:R.max_output_tokens)!==E.max_output_tokens)&&r({provider:E.provider,model_name:E.model_name,api_base:E.api_base,temperature:E.temperature,max_output_tokens:E.max_output_tokens,top_p:E.top_p,top_k:E.top_k,fallbacks:[],_appModelId:i})}},[i,t,e.model,r]);function c(C){const x=t.find(v=>v.id===C);x&&r({provider:x.provider,model_name:x.model_name,api_base:x.api_base,temperature:x.temperature,max_output_tokens:x.max_output_tokens,top_p:x.top_p,top_k:x.top_k,fallbacks:[],_appModelId:C})}function u(){var C;if(s){const x=n||((C=t[0])==null?void 0:C.id);x&&c(x)}else{const x=e.model;if(x){const{_appModelId:v,...T}=x;r(T)}else r({provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]})}}function d(C){const{_appModelId:x,...v}=e.model||{};r({...v,...C})}return t.find(C=>C.id===a),t.find(C=>C.id===n),o.jsxs("div",{className:"model-selector",children:[o.jsx("style",{children:`
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
      `}),t.length>0&&o.jsxs("div",{className:"model-choice",children:[o.jsxs("div",{className:`model-option ${s?"":"selected"}`,onClick:()=>!s||u(),children:[o.jsx("div",{className:"model-option-label",children:"Use App Model"}),o.jsx("div",{className:"model-option-desc",children:"Select from configured models"})]}),o.jsxs("div",{className:`model-option ${s?"selected":""}`,onClick:()=>s||u(),children:[o.jsx("div",{className:"model-option-label",children:"Custom"}),o.jsx("div",{className:"model-option-desc",children:"Configure model manually"})]})]}),!s&&t.length>0?o.jsx("div",{className:"app-model-select",children:t.map(C=>o.jsx("div",{className:`app-model-item ${a===C.id?"selected":""}`,onClick:()=>c(C.id),children:o.jsxs("div",{className:"app-model-item-info",children:[o.jsxs("div",{className:"app-model-item-name",children:[C.name,C.id===n&&o.jsxs("span",{className:"default-badge",children:[o.jsx(ig,{size:10,fill:"currentColor"}),"Default"]})]}),o.jsxs("div",{className:"app-model-item-details",children:[C.provider," / ",C.model_name,C.api_base&&` • ${C.api_base}`]})]})},C.id))}):t.length===0?o.jsx("div",{className:"no-models-message",children:"No models configured in App Config. Configure models there first, or use custom settings below."}):null,(s||t.length===0)&&o.jsxs("div",{className:"custom-model-form",children:[o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Provider"}),o.jsxs("select",{value:((m=e.model)==null?void 0:m.provider)||"gemini",onChange:C=>d({provider:C.target.value}),children:[o.jsx("option",{value:"gemini",children:"Gemini"}),o.jsx("option",{value:"litellm",children:"LiteLLM"}),o.jsx("option",{value:"anthropic",children:"Anthropic"})]})]}),o.jsxs("div",{className:"form-group",style:{flex:2},children:[o.jsx("label",{children:"Model Name"}),o.jsx("input",{type:"text",value:((w=e.model)==null?void 0:w.model_name)||"",onChange:C=>d({model_name:C.target.value}),placeholder:"e.g., gemini-2.0-flash"})]}),((j=e.model)==null?void 0:j.provider)==="litellm"&&o.jsxs("div",{className:"form-group",style:{flex:2},children:[o.jsx("label",{children:"API Base"}),o.jsx("input",{type:"text",value:((N=e.model)==null?void 0:N.api_base)||"",onChange:C=>d({api_base:C.target.value||void 0}),placeholder:"http://localhost:11434"})]})]}),o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Temperature"}),o.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:((g=e.model)==null?void 0:g.temperature)??"",onChange:C=>d({temperature:C.target.value?parseFloat(C.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Max Tokens"}),o.jsx("input",{type:"number",value:((h=e.model)==null?void 0:h.max_output_tokens)??"",onChange:C=>d({max_output_tokens:C.target.value?parseInt(C.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Top P"}),o.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:((y=e.model)==null?void 0:y.top_p)??"",onChange:C=>d({top_p:C.target.value?parseFloat(C.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Top K"}),o.jsx("input",{type:"number",min:"1",value:((P=e.model)==null?void 0:P.top_k)??"",onChange:C=>d({top_k:C.target.value?parseInt(C.target.value):void 0}),placeholder:"Default"})]})]})]})]})}function E_({agent:e,onUpdate:t,customCallbacks:n}){const r=[{key:"before_agent_callbacks",label:"Before Agent"},{key:"after_agent_callbacks",label:"After Agent"},{key:"before_model_callbacks",label:"Before Model"},{key:"after_model_callbacks",label:"After Model"},{key:"before_tool_callbacks",label:"Before Tool"},{key:"after_tool_callbacks",label:"After Tool"}];function i(l,a){const c=e[l]||[],u=n.find(d=>d.id===a);u&&t({[l]:[...c,{module_path:u.module_path}]})}function s(l,a){const c=e[l]||[];t({[l]:c.filter((u,d)=>d!==a)})}return o.jsx("div",{className:"callbacks-editor",children:r.map(({key:l,label:a})=>{const c=e[l]||[],u=n;return o.jsxs("div",{className:"callback-type-group",style:{marginBottom:"20px"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[o.jsx("label",{style:{fontWeight:500,fontSize:"13px"},children:a}),u.length>0&&o.jsxs("select",{value:"",onChange:d=>{d.target.value&&(i(l,d.target.value),d.target.value="")},style:{padding:"4px 8px",fontSize:"12px",width:"200px"},children:[o.jsx("option",{value:"",children:"Add callback..."}),u.filter(d=>{const p=d.module_path;return!c.some(f=>f.module_path===p)}).map(d=>o.jsx("option",{value:d.id,children:d.name},d.id))]})]}),c.length===0?o.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",fontStyle:"italic",padding:"8px"},children:"No callbacks"}):o.jsx("div",{className:"callback-list",children:c.map((d,p)=>{const f=n.find(m=>m.module_path===d.module_path);return o.jsxs("div",{className:"callback-chip",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 10px",background:"var(--bg-secondary)",borderRadius:"4px",marginBottom:"4px"},children:[o.jsx("span",{style:{fontSize:"12px"},children:(f==null?void 0:f.name)||d.module_path}),o.jsx("button",{onClick:()=>s(l,p),style:{background:"none",border:"none",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},title:"Remove callback",children:o.jsx(Te,{size:12})})]},p)})})]},l)})})}const Bl=[{type:"LlmAgent",label:"LLM Agent",icon:Zn,color:"#00f5d4",description:"AI-powered agent with model reasoning"},{type:"SequentialAgent",label:"Sequential",icon:j0,color:"#7b2cbf",description:"Run sub-agents in order"},{type:"LoopAgent",label:"Loop",icon:y0,color:"#ffd93d",description:"Repeat sub-agents until exit"},{type:"ParallelAgent",label:"Parallel",icon:Ba,color:"#ff6b6b",description:"Run sub-agents simultaneously"}];function z_(){return`agent_${Date.now().toString(36)}`}function T_(e){return{provider:e.provider,model_name:e.model_name,api_base:e.api_base,temperature:e.temperature,max_output_tokens:e.max_output_tokens,top_p:e.top_p,top_k:e.top_k,fallbacks:[]}}function P_(e,t){const r={id:z_(),name:`New ${e}`,description:""},i=t?T_(t):{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]};switch(e){case"LlmAgent":return{...r,type:"LlmAgent",model:i,instruction:"",include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:[],sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};case"SequentialAgent":return{...r,type:"SequentialAgent",sub_agents:[]};case"LoopAgent":return{...r,type:"LoopAgent",sub_agents:[],max_iterations:10};case"ParallelAgent":return{...r,type:"ParallelAgent",sub_agents:[]};default:throw new Error(`Unknown agent type: ${e}`)}}function L_({onSelectAgent:e}){const{project:t,addAgent:n,removeAgent:r,updateAgent:i,selectedAgentId:s,setSelectedAgentId:l,mcpServers:a}=it(),[c,u]=_.useState(!1),[d,p]=_.useState(new Set),[f,m]=_.useState(!1),[w,j]=_.useState(""),[N,g]=_.useState(!1);if(_.useEffect(()=>{if(t){const M=t.agents.filter(q=>"sub_agents"in q&&q.sub_agents.length>0).map(q=>q.id);p(new Set(M))}},[t==null?void 0:t.id,t==null?void 0:t.agents.length]),!t)return null;async function h(){var M,q,B,Y;if(!(!w.trim()||!t)){g(!0);try{const A=await Uh(t.id,w);if(A.success&&A.config){const $=A.config,I=[];if((M=$.tools)!=null&&M.builtin)for(const S of $.tools.builtin)I.push({type:"builtin",name:S});if((q=$.tools)!=null&&q.mcp)for(const S of $.tools.mcp){const oe=a.find(L=>L.name===S.server);oe&&I.push({type:"mcp",server:{...oe,tool_filter:S.tools}})}if((B=$.tools)!=null&&B.custom)for(const S of $.tools.custom){const oe=t.custom_tools.find(L=>L.name===S);oe&&I.push({type:"function",name:S,module_path:oe.module_path})}if((Y=$.tools)!=null&&Y.agents)for(const S of $.tools.agents){const oe=t.agents.find(L=>L.id===S);oe&&I.push({type:"agent",agent_id:S,name:oe.name})}const b=t.app.models||[],U=b.find(S=>S.id===t.app.default_model_id)||b[0],J={id:`agent_${Date.now().toString(36)}`,type:"LlmAgent",name:$.name||"new_agent",description:$.description||"",instruction:$.instruction||"",model:U?{provider:U.provider,model_name:U.model_name,api_base:U.api_base,temperature:U.temperature,max_output_tokens:U.max_output_tokens,top_p:U.top_p,top_k:U.top_k,fallbacks:[]}:{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]},include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:I,sub_agents:$.sub_agents||[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};n(J),l(J.id),e==null||e(J.id),m(!1),j("")}else alert("Failed to generate agent: "+(A.error||"Unknown error"))}catch(A){alert("Error generating agent: "+A.message)}finally{g(!1)}}}const y=t.agents.find(M=>M.id===s);function P(M){l(M),e==null||e(M)}function C(M){const q=t.app.models||[],B=q.find(A=>A.id===t.app.default_model_id)||q[0],Y=P_(M,B);n(Y),P(Y.id),u(!1)}function x(M,q){q.stopPropagation(),confirm("Delete this agent?")&&(r(M),s===M&&(e==null||e(null)))}function v(M){const q=new Set(d);q.has(M)?q.delete(M):q.add(M),p(q)}function T(M){const q=Bl.find(B=>B.type===M);return q?q.icon:Zn}function R(M){const q=Bl.find(B=>B.type===M);return q?q.color:"#888"}function E(M,q=0){return M.map(B=>{const Y=T(B.type),A=R(B.type),$="sub_agents"in B&&B.sub_agents.length>0,I=d.has(B.id),b=$?B.sub_agents.map(U=>t.agents.find(J=>J.id===U)).filter(U=>U!==void 0):[];return o.jsxs("div",{className:"agent-tree-item",children:[o.jsxs("div",{className:`agent-item ${s===B.id?"selected":""}`,onClick:()=>P(B.id),style:{paddingLeft:12+q*20},children:[$?o.jsx("button",{className:"expand-btn",onClick:U=>{U.stopPropagation(),v(B.id)},children:I?o.jsx(Ct,{size:16}):o.jsx(Nt,{size:16})}):o.jsx("span",{style:{width:20}}),o.jsx("div",{className:"agent-icon",style:{background:A},children:o.jsx(Y,{size:14})}),o.jsx("span",{className:"agent-name",children:B.name}),o.jsx("span",{className:"agent-type",children:B.type}),o.jsx("button",{className:"delete-btn",onClick:U=>x(B.id,U),children:o.jsx(Te,{size:14})})]}),$&&I&&o.jsx("div",{className:"sub-agents",children:E(b,q+1)})]},B.id)})}const k=new Set(t.agents.flatMap(M=>"sub_agents"in M?M.sub_agents:[])),z=t.agents.filter(M=>!k.has(M.id));return o.jsxs("div",{className:"agents-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("aside",{className:"agents-sidebar",children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["Agents (",t.agents.length,")"]}),o.jsxs("div",{className:"header-buttons",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>m(!0),title:"AI-powered agent setup",children:[o.jsx(Cl,{size:14}),"Quick"]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>u(!0),children:[o.jsx(Me,{size:14}),"Add"]})]})]}),o.jsx("div",{className:"agents-list",children:t.agents.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Zn,{size:32}),o.jsx("p",{children:"No agents yet"})]}):E(z)})]}),o.jsx("div",{className:"agent-editor-area",children:y?o.jsx(S_,{agent:y}):o.jsxs("div",{className:"empty-state card",children:[o.jsx(Zn,{size:48}),o.jsxs("p",{children:["Select an agent to edit",o.jsx("br",{}),"or create a new one"]})]})}),c&&o.jsx("div",{className:"type-selector",onClick:()=>u(!1),children:o.jsxs("div",{className:"type-selector-content",onClick:M=>M.stopPropagation(),children:[o.jsx("h2",{children:"Add Agent"}),o.jsx("div",{className:"type-options",children:Bl.map(({type:M,label:q,icon:B,color:Y,description:A})=>o.jsxs("button",{className:"type-option",onClick:()=>C(M),children:[o.jsx("div",{className:"type-option-icon",style:{background:Y},children:o.jsx(B,{size:20})}),o.jsxs("div",{className:"type-option-info",children:[o.jsx("h4",{children:q}),o.jsx("p",{children:A})]})]},M))})]})}),f&&o.jsx("div",{className:"type-selector",onClick:()=>!N&&m(!1),children:o.jsxs("div",{className:"quick-setup-content",onClick:M=>M.stopPropagation(),children:[o.jsxs("h2",{children:[o.jsx(Cl,{size:20})," Quick Agent Setup"]}),o.jsx("p",{className:"quick-setup-desc",children:"Describe what you want this agent to do, and AI will configure everything: name, description, instruction, tools, and sub-agents."}),o.jsxs("div",{className:"quick-setup-form",children:[o.jsx("textarea",{value:w,onChange:M=>j(M.target.value),placeholder:"Example: An agent that searches the web for information and summarizes the results. It should be able to search Google and handle multiple queries in parallel.",rows:5,disabled:N,autoFocus:!0}),o.jsxs("div",{className:"quick-setup-info",children:[o.jsx("strong",{children:"Available resources:"}),o.jsxs("ul",{children:[o.jsxs("li",{children:[t.app.state_keys.length," state keys"]}),o.jsxs("li",{children:[a.length," MCP servers"]}),o.jsxs("li",{children:[t.custom_tools.length," custom tools"]}),o.jsxs("li",{children:[t.agents.length," existing agents"]})]})]}),o.jsxs("div",{className:"quick-setup-actions",children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>m(!1),disabled:N,children:"Cancel"}),o.jsx("button",{className:"btn btn-primary",onClick:h,disabled:N||!w.trim(),children:N?o.jsxs(o.Fragment,{children:[o.jsx(Br,{size:14,className:"spin"}),"Generating..."]}):o.jsxs(o.Fragment,{children:[o.jsx(Cl,{size:14}),"Create Agent"]})})]})]})]})})]})}var _u="\x1B[0m",Su="\x1B[1m",Zg=e=>e instanceof Error?e.message:typeof e=="string"?e:"An unknown error occurred",A_=e=>{let t=Zg(e),n=`${Su}[MONACOPILOT ERROR] ${t}${_u}`;return console.error(n),{message:t}},R_=(e,t)=>{console.warn(`${Su}[MONACOPILOT WARN] ${e}${t?`
${Zg(t)}`:""}${_u}`)},I_=(e,t,n)=>console.warn(`${Su}[MONACOPILOT DEPRECATED] "${e}" is deprecated${n?` in ${n}`:""}. Please use "${t}" instead. It will be removed in a future version.${_u}`),ks={report:A_,warn:R_,warnDeprecated:I_},Qp=(e,t,n={})=>{if(t<=0)return"";let r=e.split(`
`),i=r.length;if(t>=i)return e;if(n.truncateDirection==="keepEnd"){let l=r.slice(-t);return l.every(a=>a==="")?`
`.repeat(t):l.join(`
`)}let s=r.slice(0,t);return s.every(l=>l==="")?`
`.repeat(t):s.join(`
`)},M_=100,O_=!0,ex="onIdle",$_=!0,D_=120,F_=400,B_=0,Cu=(e,t)=>t.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:e.lineNumber,endColumn:e.column}),U_=(e,t)=>t.getValueInRange({startLineNumber:e.lineNumber,startColumn:e.column,endLineNumber:t.getLineCount(),endColumn:t.getLineMaxColumn(t.getLineCount())}),V_=e=>e.getValue(),W_=class{constructor(e){this.capacity=e,this.head=0,this.tail=0,this.size=0,this.buffer=new Array(e)}enqueue(e){let t;return this.size===this.capacity&&(t=this.dequeue()),this.buffer[this.tail]=e,this.tail=(this.tail+1)%this.capacity,this.size++,t}dequeue(){if(this.size===0)return;let e=this.buffer[this.head];return this.buffer[this.head]=void 0,this.head=(this.head+1)%this.capacity,this.size--,e}getAll(){return this.buffer.filter(e=>e!==void 0)}clear(){this.buffer=new Array(this.capacity),this.head=0,this.tail=0,this.size=0}getSize(){return this.size}isEmpty(){return this.size===0}isFull(){return this.size===this.capacity}},tx=class nx{constructor(){this.cache=new W_(nx.MAX_CACHE_SIZE)}get(t,n){return this.cache.getAll().filter(r=>this.isValidCacheItem(r,t,n))}add(t){t.completion.trim()&&this.cache.enqueue(t)}clear(){this.cache.clear()}isValidCacheItem(t,n,r){let i=t.textBeforeCursor.trim(),s=Cu(n,r),l=s,a=r.getLineContent(n.lineNumber);if(n.column===a.length+1&&n.lineNumber<r.getLineCount()){let u=r.getLineContent(n.lineNumber+1);l=`${s}
${u}`}if(!(l.trim().includes(i)||i.includes(l.trim())))return!1;let c=r.getValueInRange(t.range);return this.isPartialMatch(c,t.completion)?this.isPositionValid(t,n):!1}isPartialMatch(t,n){let r=t.trim(),i=n.trim();return i.startsWith(r)||r.startsWith(i)}isPositionValid(t,n){let{range:r}=t,{startLineNumber:i,startColumn:s,endLineNumber:l,endColumn:a}=r,{lineNumber:c,column:u}=n;return c<i||c>l?!1:i===l?u>=s-1&&u<=a+1:c===i?u>=s-1:c===l?u<=a+1:!0}};tx.MAX_CACHE_SIZE=20;var H_=tx,q_=class{constructor(e){this.formattedCompletion="",this.formattedCompletion=e}setCompletion(e){return this.formattedCompletion=e,this}removeInvalidLineBreaks(){return this.formattedCompletion=this.formattedCompletion.trimEnd(),this}removeMarkdownCodeSyntax(){return this.formattedCompletion=this.removeMarkdownCodeBlocks(this.formattedCompletion),this}removeMarkdownCodeBlocks(e){let t=e.split(`
`),n=[],r=!1;for(let i=0;i<t.length;i++){let s=t[i],l=s.trim().startsWith("```");if(l&&!r){r=!0;continue}if(l&&r){r=!1;continue}n.push(s)}return n.join(`
`)}removeExcessiveNewlines(){return this.formattedCompletion=this.formattedCompletion.replace(/\n{3,}/g,`

`),this}build(){return this.formattedCompletion}},J_=class{findOverlaps(e,t,n){if(!e)return{startOverlapLength:0,maxOverlapLength:0};let r=e.length,i=t.length,s=n.length,l=0,a=0,c=0,u=Math.min(r,i);for(let f=1;f<=u;f++){let m=e.substring(0,f),w=t.slice(-f);m===w&&(c=f)}let d=Math.min(r,s);for(let f=0;f<d&&e[f]===n[f];f++)l++;for(let f=1;f<=d;f++)e.slice(-f)===n.slice(0,f)&&(a=f);let p=Math.max(l,a);if(p===0){for(let f=1;f<r;f++)if(n.startsWith(e.substring(f))){p=r-f;break}}return{startOverlapLength:c,maxOverlapLength:p}}},K_=class{constructor(e){this.monaco=e,this.textOverlapCalculator=new J_}computeInsertionRange(e,t,n){if(!t)return this.createEmptyRange(e);let r=n.getOffsetAt(e),i=n.getValue().substring(0,r),s=n.getValue().substring(r);if(r>=n.getValue().length)return this.createEmptyRange(e);if(s.length===0)return this.createEmptyRange(e);let{startOverlapLength:l,maxOverlapLength:a}=this.textOverlapCalculator.findOverlaps(t,i,s),c=l>0?n.getPositionAt(r-l):e,u=r+a,d=n.getPositionAt(u);return new this.monaco.Range(c.lineNumber,c.column,d.lineNumber,d.column)}computeCacheRange(e,t){let n=e.lineNumber,r=e.column,i=t.split(`
`),s=i.length-1,l=n+s,a=s===0?r+i[0].length:i[s].length+1;return new this.monaco.Range(n,r,l,a)}createEmptyRange(e){return new this.monaco.Range(e.lineNumber,e.column,e.lineNumber,e.column)}},Q_=async e=>{let{endpoint:t,body:n}=e,r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok)throw new Error(`Error while fetching completion item: ${r.statusText}`);let{completion:i,error:s}=await r.json();return{completion:i,error:s}},G_=({pos:e,mdl:t,options:n})=>{let{filename:r,language:i,technologies:s,relatedFiles:l,maxContextLines:a=M_}=n,c=l&&l.length>0?3:2,u=a?Math.floor(a/c):void 0,d=(j,N,g)=>{let h=j(e,t);return N?Qp(h,N,g):h},p=(j,N)=>!j||!N?j:j.map(({content:g,...h})=>({...h,content:Qp(g,N)})),f=d(Cu,u,{truncateDirection:"keepEnd"}),m=d(U_,u,{truncateDirection:"keepStart"}),w=p(l,u);return{filename:r,language:i,technologies:s,relatedFiles:w,textBeforeCursor:f,textAfterCursor:m,cursorPosition:e}},Y_=(e,t=300)=>{let n=null,r=null,i=(...s)=>{if(r)return r.args=s,r.promise;let l,a,c=new Promise((u,d)=>{l=u,a=d});return r={args:s,promise:c,resolve:l,reject:a},n&&(clearTimeout(n),n=null),n=setTimeout(async()=>{let u=r;if(u){r=null,n=null;try{let d=await e(...u.args);u.resolve(d)}catch(d){u.reject(d)}}},t),c};return i.cancel=()=>{n&&(clearTimeout(n),n=null),r&&(r.reject(new Error("Cancelled")),r=null)},i},X_=e=>typeof e=="string"?e==="Cancelled"||e==="AbortError":e instanceof Error?e.message==="Cancelled"||e.name==="AbortError":!1,oi=e=>({items:e,enableForwardStability:!0}),nc=new H_,Z_=async({monaco:e,mdl:t,pos:n,token:r,isCompletionAccepted:i,options:s})=>{let{trigger:l=ex,enableCaching:a=O_,allowFollowUpCompletions:c=$_,onError:u,requestHandler:d}=s;if(a&&!i){let p=nc.get(n,t).map(f=>({insertText:f.completion,range:f.range}));if(p.length>0)return oi(p)}if(r.isCancellationRequested||!c&&i)return oi([]);try{let p=Y_(async w=>{var N,g;(N=s.onCompletionRequested)==null||N.call(s,w);let j;if(d)j=await d(w);else if(s.endpoint)j=await Q_({endpoint:s.endpoint,...w});else throw new Error('No endpoint specified for completion request. Please set the "endpoint" option in registerCompletion, or provide a custom requestHandler.');if(j.error)throw new Error(j.error);return(g=s.onCompletionRequestFinished)==null||g.call(s,w,j),j},{onTyping:D_,onIdle:F_,onDemand:B_}[l]);r.onCancellationRequested(()=>{p.cancel()});let f=G_({pos:n,mdl:t,options:s}),{completion:m}=await p({body:{completionMetadata:f}});if(m){let w=new q_(m).removeMarkdownCodeSyntax().removeExcessiveNewlines().removeInvalidLineBreaks().build(),j=new K_(e);return a&&nc.add({completion:w,range:j.computeCacheRange(n,w),textBeforeCursor:Cu(n,t)}),oi([{insertText:w,range:j.computeInsertionRange(n,w,t)}])}}catch(p){if(X_(p))return oi([]);u?u(p):ks.warn("Cannot provide completion",p)}return oi([])},Nu=new WeakMap,Ks=e=>Nu.get(e),eS=(e,t)=>{Nu.set(e,t)},Gp=e=>{Nu.delete(e)},tS=e=>({isCompletionAccepted:!1,isCompletionVisible:!1,isExplicitlyTriggered:!1,hasRejectedCurrentCompletion:!1,options:e}),nS=(e,t)=>{let n=Ks(e);!n||!n.options||(n.options={...n.options,...t})},rS=(e,t,n)=>{let r=Ks(t);return r?e.languages.registerInlineCompletionsProvider(n.language,{provideInlineCompletions:(i,s,l,a)=>{if(i!==t.getModel())return{items:[]};let c=r.options||n;if(!(c.trigger==="onDemand"&&!r.isExplicitlyTriggered||c.triggerIf&&!c.triggerIf({text:V_(t),position:s,triggerType:c.trigger??ex})))return Z_({monaco:e,mdl:i,pos:s,token:a,isCompletionAccepted:r.isCompletionAccepted,options:c})},handleItemDidShow:(i,s,l)=>{var a,c;r.isExplicitlyTriggered=!1,r.hasRejectedCurrentCompletion=!1,!r.isCompletionAccepted&&(r.isCompletionVisible=!0,(c=(a=r.options||n).onCompletionShown)==null||c.call(a,l,s.range))},freeInlineCompletions:()=>{}}):null},iS={TAB:(e,t)=>t.keyCode===e.KeyCode.Tab,CMD_RIGHT_ARROW:(e,t)=>t.keyCode===e.KeyCode.RightArrow&&t.metaKey},oS=class{constructor(e,t,n){this.monaco=e,this.state=t,this.initialOptions=n}handleKeyEvent(e){let t=this.state.options||this.initialOptions,n={monaco:this.monaco,event:e,state:this.state,options:t};this.handleCompletionAcceptance(n),this.handleCompletionRejection(n)}handleCompletionAcceptance(e){var t,n;return e.state.isCompletionVisible&&this.isAcceptanceKey(e.event)?((n=(t=e.options).onCompletionAccepted)==null||n.call(t),e.state.isCompletionAccepted=!0,e.state.isCompletionVisible=!1,!0):(e.state.isCompletionAccepted=!1,!1)}handleCompletionRejection(e){var t,n;return this.shouldRejectCompletion(e)?((n=(t=e.options).onCompletionRejected)==null||n.call(t),e.state.hasRejectedCurrentCompletion=!0,!0):!1}shouldRejectCompletion(e){return e.state.isCompletionVisible&&!e.state.hasRejectedCurrentCompletion&&!e.state.isCompletionAccepted&&!this.isAcceptanceKey(e.event)}isAcceptanceKey(e){return Object.values(iS).some(t=>t(this.monaco,e))}},sS=(e,t,n,r)=>{let i=new oS(e,n,r);return t.onKeyDown(s=>i.handleKeyEvent(s))},rx=(e,t,n)=>{let r=[];eS(t,tS(n)),t.updateOptions({inlineSuggest:{enabled:!0}});try{let i=Ks(t);if(!i)return ks.warn("Completion is not registered properly. State not found."),aS();let s=rS(e,t,n);s&&r.push(s);let l=sS(e,t,i,n);return r.push(l),{deregister:()=>{for(let a of r)a.dispose();nc.clear(),Gp(t)},trigger:()=>lS(t),updateOptions:a=>{nS(t,a(i.options||n))}}}catch(i){return n.onError?n.onError(i):ks.report(i),{deregister:()=>{for(let s of r)s.dispose();Gp(t)},trigger:()=>{},updateOptions:()=>{}}}},lS=e=>{let t=Ks(e);if(!t){ks.warn("Completion is not registered. Use `registerCompletion` to register completion first.");return}t.isExplicitlyTriggered=!0,e.trigger("keyboard","editor.action.inlineSuggest.trigger",{})},aS=()=>({deregister:()=>{},trigger:()=>{},updateOptions:()=>{}});function cS(){return`tool_${Date.now().toString(36)}`}function uS(e){return/^[a-zA-Z0-9_]+$/.test(e)}const dS=`def my_tool(tool_context: ToolContext, param1: str) -> dict:
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
`;function pS({onSelectTool:e}){var _t;const{project:t,updateProject:n,addCustomTool:r,updateCustomTool:i,removeCustomTool:s,selectedToolId:l,setSelectedToolId:a,builtinTools:c,mcpServers:u}=it(),[d,p]=_.useState(""),[f,m]=_.useState(null),[w,j]=_.useState("tools"),[N,g]=_.useState(null),[h,y]=_.useState(""),[P,C]=_.useState(!1),[x,v]=_.useState(null),[T,R]=_.useState(!1),[E,k]=_.useState(!1),[z,M]=_.useState(null),[q,B]=_.useState(null);if(!t)return null;const Y=t.mcp_servers||[],A=t.custom_tools.find(H=>H.id===l),$=Y.find(H=>H.name===N),I=new Set(Y.map(H=>H.name)),b=u.filter(H=>!I.has(H.name));function U(H){a(H),e==null||e(H)}_.useEffect(()=>{A&&(p(A.code),B(null))},[l]),_.useEffect(()=>{$&&(y(JSON.stringify($,null,2)),C(!1))},[N]);function J(){const H=cS();r({id:H,name:"new_tool",description:"",module_path:"tools.custom",code:dS,state_keys_used:[]}),U(H)}function S(H,he){he.stopPropagation(),confirm("Delete this tool?")&&(s(H),l===H&&(e==null||e(null)))}function oe(H){A&&(H.name!==void 0&&(H.name===""||uS(H.name)?B(null):B("Name can only contain letters, numbers, and underscores")),i(A.id,H))}function L(H){H!==void 0&&A&&(p(H),oe({code:H}))}async function X(){if(A){R(!0);try{const H=await Vh(t.id,A.name,A.description,A.state_keys_used);H.success&&H.code?(p(H.code),oe({code:H.code})):(console.error("Failed to generate tool code:",H.error),alert("Failed to generate tool code: "+(H.error||"Unknown error")))}catch(H){console.error("Error generating tool code:",H),alert("Error generating tool code: "+H.message)}finally{R(!1)}}}const F=_.useRef(null),O=_.useCallback((H,he)=>{if(F.current&&typeof F.current=="function")try{F.current()}catch{}try{const Ee=rx(he,H,{language:"python",endpoint:"/api/code-completion",trigger:"onTyping"});typeof Ee=="function"?F.current=Ee:F.current=null}catch{F.current=null}},[]);_.useEffect(()=>()=>{if(F.current&&typeof F.current=="function")try{F.current()}catch{}},[]);function V(){const H={name:`mcp_server_${Date.now().toString(36)}`,description:"New MCP Server",connection_type:"stdio",command:"npx",args:["-y","@modelcontextprotocol/server-example"],env:{},headers:{},timeout:10};n({mcp_servers:[...Y,H]}),g(H.name),v(null)}function G(H){const he={...H};n({mcp_servers:[...Y,he]}),g(he.name),v(null)}function Z(H,he){he.stopPropagation(),confirm("Delete this MCP server?")&&(n({mcp_servers:Y.filter(Ee=>Ee.name!==H)}),N===H&&g(null))}function te(H){H!==void 0&&(y(H),C(H!==JSON.stringify($,null,2)))}function me(){if($)try{const H=JSON.parse(h),he=$.name,Ee=Y.map(ft=>ft.name===he?H:ft);n({mcp_servers:Ee}),g(H.name),C(!1)}catch(H){alert("Invalid JSON: "+H.message)}}async function Ne(){k(!0),M(null);try{const H=JSON.parse(h),he=await Hh({connection_type:H.connection_type,command:H.command,args:H.args,env:H.env,url:H.url,headers:H.headers,timeout:H.timeout||30});if(M(he),he.success&&he.tools.length>0){const Ee={...H,tool_filter:he.tools.map(ft=>ft.name)};y(JSON.stringify(Ee,null,2)),C(!0)}}catch(H){M({success:!1,tools:[],error:H.message})}finally{k(!1)}}const Re={};return t.custom_tools.forEach(H=>{const he=H.module_path||"tools";Re[he]||(Re[he]=[]),Re[he].push(H)}),o.jsxs("div",{className:"tools-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("aside",{className:"tools-sidebar",children:[o.jsxs("div",{className:"sidebar-tabs",children:[o.jsxs("button",{className:`sidebar-tab ${w==="tools"?"active":""}`,onClick:()=>j("tools"),children:[o.jsx(Gt,{size:14}),"Tools"]}),o.jsxs("button",{className:`sidebar-tab ${w==="mcp"?"active":""}`,onClick:()=>j("mcp"),children:[o.jsx(cr,{size:14}),"MCP"]})]}),w==="tools"?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["Custom Tools (",t.custom_tools.length,")"]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:J,children:[o.jsx(Me,{size:14}),"New"]})]}),o.jsxs("div",{className:"tools-tree",children:[c.length>0&&o.jsxs("div",{className:"module-group",children:[o.jsxs("div",{className:"module-header",children:[o.jsx(Gd,{size:14}),"Built-in Tools"]}),c.map(H=>o.jsxs("div",{className:`tool-item builtin ${(f==null?void 0:f.name)===H.name?"selected":""}`,onClick:()=>{m(H),U(null),g(null)},children:[o.jsx(Va,{size:14}),o.jsx("span",{className:"tool-name",children:H.name})]},H.name))]}),t.custom_tools.length===0&&c.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(In,{size:32}),o.jsx("p",{children:"No tools defined yet"})]}):t.custom_tools.length>0&&Object.entries(Re).map(([H,he])=>o.jsxs("div",{className:"module-group",children:[o.jsxs("div",{className:"module-header",children:[o.jsx(f0,{size:14}),H]}),he.map(Ee=>o.jsxs("div",{className:`tool-item ${l===Ee.id?"selected":""}`,onClick:()=>{U(Ee.id),m(null),g(null)},children:[o.jsx(Gt,{size:14}),o.jsx("span",{className:"tool-name",children:Ee.name}),o.jsx("button",{className:"delete-btn",onClick:ft=>S(Ee.id,ft),children:o.jsx(Te,{size:14})})]},Ee.id))]},H))]})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["MCP Servers (",Y.length,")"]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:V,children:[o.jsx(Me,{size:14}),"Custom"]})]}),o.jsxs("div",{className:"tools-tree",children:[Y.length>0&&o.jsxs("div",{className:"module-group",children:[o.jsxs("div",{className:"module-header",children:[o.jsx(Ua,{size:14}),"Configured (",Y.length,")"]}),Y.map(H=>o.jsxs("div",{className:`tool-item ${N===H.name?"selected":""}`,onClick:()=>{g(H.name),v(null),U(null),m(null)},children:[o.jsx(cr,{size:14}),o.jsx("span",{className:"tool-name",children:H.name}),o.jsx("span",{className:"tool-type-badge",children:H.connection_type}),o.jsx("button",{className:"delete-btn",onClick:he=>Z(H.name,he),children:o.jsx(Te,{size:14})})]},H.name))]}),b.length>0&&o.jsxs("div",{className:"module-group",children:[o.jsxs("div",{className:"module-header",children:[o.jsx(Gd,{size:14}),"Available Templates (",b.length,")"]}),b.map(H=>o.jsxs("div",{className:`tool-item known-server ${(x==null?void 0:x.name)===H.name?"selected":""}`,onClick:()=>{v(H),g(null),U(null),m(null)},children:[o.jsx(cr,{size:14}),o.jsx("span",{className:"tool-name",children:H.name}),o.jsx("span",{className:"tool-type-badge",children:H.connection_type})]},H.name))]}),Y.length===0&&b.length===0&&o.jsxs("div",{className:"empty-state",children:[o.jsx(cr,{size:32}),o.jsx("p",{children:"No MCP servers available"})]})]})]})]}),o.jsx("div",{className:"tool-editor",children:f?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(Va,{size:20,style:{color:"var(--accent-secondary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:f.name}),o.jsx("span",{className:"badge badge-muted",children:"Built-in"})]}),o.jsxs("div",{className:"builtin-tool-info",children:[o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("p",{children:f.description||"No description available."})]}),o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Usage"}),o.jsx("p",{children:"This is a built-in tool provided by ADK. Add it to any LLM agent's tools list to enable it."}),o.jsxs("code",{children:['tools: ["',f.name,'"]']})]}),o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Note"}),o.jsx("p",{children:"Built-in tools are read-only and cannot be modified. Create a custom tool if you need different behavior."})]})]})]}):A?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(Gt,{size:20,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o.jsx("input",{type:"text",value:A.name,onChange:H=>oe({name:H.target.value}),placeholder:"Tool name",style:{borderColor:q?"var(--error)":void 0}}),q&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:q})]})]}),o.jsxs("div",{className:"editor-meta",children:[o.jsxs("div",{className:"meta-field grow",children:[o.jsx("label",{children:"Description"}),o.jsx("input",{type:"text",value:A.description,onChange:H=>oe({description:H.target.value}),placeholder:"What does this tool do?"})]}),o.jsxs("div",{className:"meta-field",children:[o.jsx("label",{children:"Module Path"}),o.jsx("input",{type:"text",value:A.module_path,onChange:H=>oe({module_path:H.target.value}),placeholder:"tools.custom",style:{width:180}})]})]}),o.jsxs("div",{className:"code-actions",children:[o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:X,disabled:T||!A.name||!A.description,title:!A.name||!A.description?"Add a name and description first":"Generate code using AI",children:T?o.jsxs(o.Fragment,{children:[o.jsx(Br,{size:14,className:"spinning"}),"Generating..."]}):o.jsxs(o.Fragment,{children:[o.jsx(lu,{size:14}),"Write Tool"]})}),o.jsx("span",{className:"action-hint",children:"AI will generate code based on the tool name, description, and selected state keys"})]}),o.jsx("div",{className:"code-editor",children:o.jsx(ln,{height:"100%",language:"python",theme:"vs-dark",value:d,onChange:L,onMount:O,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12}}})}),o.jsxs("div",{className:"state-keys-panel",children:[o.jsxs("h4",{children:[o.jsx(ou,{size:14})," State Keys Used"]}),o.jsx("div",{className:"state-key-chips",children:t.app.state_keys.length===0?o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"No state keys defined. Add them in App Config."}):t.app.state_keys.map(H=>{const he=A.state_keys_used.includes(H.name);return o.jsxs("label",{className:`state-key-chip ${he?"selected":""}`,title:H.description,children:[o.jsx("input",{type:"checkbox",checked:he,onChange:Ee=>{const ft=Ee.target.checked?[...A.state_keys_used,H.name]:A.state_keys_used.filter(fn=>fn!==H.name);oe({state_keys_used:ft})}}),H.name,o.jsxs("span",{style:{color:"var(--text-muted)",fontSize:11},children:["(",H.type,")"]})]},H.name)})})]})]}):x?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(cr,{size:20,style:{color:"var(--accent-secondary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:x.name}),o.jsx("span",{className:"badge badge-info",children:x.connection_type}),o.jsx("span",{className:"badge badge-muted",children:"Template"}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>G(x),children:[o.jsx(Me,{size:14}),"Add to Project"]})]}),o.jsxs("div",{className:"known-server-preview",children:[o.jsxs("div",{className:"preview-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("p",{children:x.description})]}),o.jsxs("div",{className:"preview-section",children:[o.jsx("h4",{children:"Command"}),o.jsxs("code",{children:[x.command," ",(_t=x.args)==null?void 0:_t.join(" ")]})]}),x.env&&Object.keys(x.env).length>0&&o.jsxs("div",{className:"preview-section",children:[o.jsx("h4",{children:"Required Environment Variables"}),o.jsx("div",{className:"env-vars",children:Object.entries(x.env).map(([H,he])=>o.jsxs("div",{className:"env-var",children:[o.jsx("code",{children:H}),he?o.jsx("span",{className:"env-value",children:he}):o.jsx("span",{className:"env-required",children:"Required"})]},H))})]}),x.tool_filter&&x.tool_filter.length>0&&o.jsxs("div",{className:"preview-section",children:[o.jsxs("h4",{children:["Available Tools (",x.tool_filter.length,")"]}),o.jsx("div",{className:"tool-badges",children:x.tool_filter.map(H=>o.jsx("span",{className:"tool-badge",children:H},H))})]}),o.jsxs("div",{className:"preview-section",children:[o.jsx("h4",{children:"Configuration Preview"}),o.jsx("pre",{className:"config-preview",children:JSON.stringify(x,null,2)})]})]})]}):$?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(cr,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:$.name}),o.jsx("span",{className:"badge badge-info",children:$.connection_type}),P&&o.jsx("span",{className:"unsaved-badge",children:"Unsaved"}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:Ne,disabled:E,title:"Test connection and discover available tools",children:[E?o.jsx(Br,{size:14,className:"spin"}):o.jsx(Ua,{size:14}),E?"Testing...":"Test Connection"]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:me,disabled:!P,children:[o.jsx(su,{size:14}),"Save"]})]}),z&&o.jsx("div",{className:`mcp-test-result ${z.success?"success":"error"}`,children:z.success?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"test-result-header",children:["✓ Connected! Found ",z.tools.length," tools"]}),z.tools.length>0&&o.jsxs("div",{className:"test-result-tools",children:[o.jsx("strong",{children:"Available tools:"}),o.jsx("ul",{children:z.tools.map(H=>o.jsxs("li",{children:[o.jsx("code",{children:H.name}),H.description&&o.jsxs("span",{children:[" — ",H.description]})]},H.name))}),o.jsx("p",{className:"hint",children:'The tool_filter has been updated with these tools. Click "Save" to apply.'})]})]}):o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"test-result-header",children:"✗ Connection failed"}),o.jsx("div",{className:"test-result-error",children:z.error})]})}),o.jsx("div",{className:"mcp-info",children:o.jsx("p",{children:'Configure your MCP server using JSON. Click "Test Connection" to verify and discover available tools.'})}),o.jsx("div",{className:"code-editor",children:o.jsx(ln,{height:"100%",language:"json",theme:"vs-dark",value:h,onChange:te,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},formatOnPaste:!0}})}),o.jsxs("div",{className:"mcp-help",children:[o.jsx("h4",{children:"Schema Reference"}),o.jsxs("div",{className:"schema-fields",children:[o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"name"}),o.jsx("span",{children:"Unique identifier for this server"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"description"}),o.jsx("span",{children:"Human-readable description"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"connection_type"}),o.jsx("span",{children:'"stdio" | "sse" | "http"'})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"command"}),o.jsx("span",{children:"Command to run (for stdio)"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"args"}),o.jsx("span",{children:"Array of command arguments"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"env"}),o.jsx("span",{children:"Environment variables object"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"url"}),o.jsx("span",{children:"Server URL (for sse/http)"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"tool_filter"}),o.jsx("span",{children:"Array of tool names to include (null/omit = all tools, [] = no tools)"})]})]})]})]}):o.jsxs("div",{className:"empty-state",children:[o.jsx(In,{size:48}),o.jsxs("p",{children:["Select a tool to view",o.jsx("br",{}),"or create a new custom tool"]})]})})]})}function fS(){return`callback_${Date.now().toString(36)}`}function Yp(e){return/^[a-zA-Z0-9_]+$/.test(e)}function ix(e){switch(e){case"before_agent":case"after_agent":return`from google.adk.agents.callback_context import CallbackContext
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
`;default:return ix("before_agent")}}function mS({onSelectCallback:e}){var T,R;const{project:t,updateProject:n,addCustomCallback:r,updateCustomCallback:i,removeCustomCallback:s}=it(),[l,a]=_.useState(""),[c,u]=_.useState(null),[d,p]=_.useState(null),[f,m]=_.useState(!1),w=_.useRef(null);if(!t)return null;const j=t.custom_callbacks||[],N=j.find(E=>E.id===c);function g(E){u(E),e==null||e(E)}_.useEffect(()=>{N?(a(N.code),p(null)):a("")},[c,N]);function h(){const E=fS(),k={id:E,name:"new_callback",description:"",module_path:"callbacks.custom",code:ix("before_agent"),state_keys_used:[]};r(k),g(E)}function y(E,k){k.stopPropagation(),confirm("Delete this callback?")&&(s(E),c===E&&(e==null||e(null),u(null),a("")))}function P(){if(!c)return;const E=j.find(M=>M.id===c);if(!E)return;const k=E.name.trim();if(!k){alert("Please enter a name");return}if(!Yp(k)){p("Name must contain only alphanumeric characters and underscores");return}if(j.find(M=>M.name===k&&M.id!==E.id)){p("A callback with this name already exists");return}i(E.id,{code:l,name:k,description:E.description,module_path:E.module_path,state_keys_used:E.state_keys_used}),p(null)}function C(E,k){w.current=k;try{rx(k,{endpoint:"/api/code-completion",language:"python"})}catch(z){console.warn("Failed to register Monacopilot completion:",z)}}async function x(){if(N){m(!0);try{let E="before_agent";const k=N.name.toLowerCase(),z=N.description.toLowerCase();k.includes("after_agent")||z.includes("after agent")?E="after_agent":k.includes("before_model")||z.includes("before model")?E="before_model":k.includes("after_model")||z.includes("after model")?E="after_model":k.includes("before_tool")||z.includes("before tool")?E="before_tool":k.includes("after_tool")||z.includes("after tool")?E="after_tool":(k.includes("before_agent")||z.includes("before agent"))&&(E="before_agent");const M=await Wh(t.id,N.name,N.description,E,N.state_keys_used);M.success&&M.code?(a(M.code),i(N.id,{code:M.code})):(console.error("Failed to generate callback code:",M.error),alert("Failed to generate callback code: "+(M.error||"Unknown error")))}catch(E){console.error("Error generating callback code:",E),alert("Error generating callback code: "+E.message)}finally{m(!1)}}}const v=((R=(T=t.app)==null?void 0:T.state_keys)==null?void 0:R.map(E=>E.name))||[];return o.jsxs("div",{className:"tools-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"tools-sidebar",children:[o.jsxs("div",{className:"tools-sidebar-header",children:[o.jsx("h3",{children:"Callbacks"}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:h,title:"Add Callback",children:o.jsx(Me,{size:16})})]}),o.jsx("div",{className:"tools-list",children:j.length===0?o.jsx("div",{style:{padding:"16px",color:"var(--text-secondary)",fontSize:"14px"},children:"No callbacks yet. Click + to add one."}):j.map(E=>o.jsxs("div",{className:`tool-item ${c===E.id?"selected":""}`,onClick:()=>g(E.id),children:[o.jsxs("div",{style:{flex:1},children:[o.jsx("div",{className:"tool-item-name",children:E.name}),E.description&&o.jsx("div",{className:"tool-item-type",style:{fontSize:"11px",color:"var(--text-secondary)",marginTop:"2px"},children:E.description})]}),o.jsx("div",{className:"tool-item-actions",children:o.jsx("button",{className:"btn btn-icon btn-sm",onClick:k=>y(E.id,k),title:"Delete",children:o.jsx(Te,{size:14})})})]},E.id))})]}),o.jsx("div",{className:"tools-editor",children:N?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"tools-editor-header",children:[o.jsx("h3",{children:"Edit Callback"}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:P,children:[o.jsx(su,{size:16,style:{marginRight:"6px"}}),"Save"]})]}),o.jsxs("div",{className:"tools-editor-content",style:{padding:"16px",overflowY:"auto"},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Name"}),o.jsx("input",{type:"text",value:N.name,onChange:E=>{const k=E.target.value;i(N.id,{name:k}),d&&Yp(k)&&p(null)},className:d?"error":""}),d&&o.jsx("div",{className:"error-message",children:d})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Description"}),o.jsx("textarea",{value:N.description,onChange:E=>i(N.id,{description:E.target.value}),rows:2,placeholder:"Describe what this callback does..."})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Module Path"}),o.jsx("input",{type:"text",value:N.module_path,onChange:E=>i(N.id,{module_path:E.target.value}),placeholder:"callbacks.custom"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"State Keys Used"}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"8px"},children:v.map(E=>{const k=N.state_keys_used.includes(E);return o.jsxs("button",{type:"button",className:`btn btn-sm ${k?"btn-primary":"btn-secondary"}`,onClick:()=>{const z=k?N.state_keys_used.filter(M=>M!==E):[...N.state_keys_used,E];i(N.id,{state_keys_used:z})},children:[o.jsx(ou,{size:12,style:{marginRight:"4px"}}),E]},E)})}),v.length===0&&o.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"12px",marginTop:"4px"},children:"No state keys defined in App Config"})]}),o.jsxs("div",{className:"form-group",children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[o.jsx("label",{children:"Code"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:x,disabled:f||!N.name,title:N.name?"Generate code using AI":"Add a name first",children:f?o.jsxs(o.Fragment,{children:[o.jsx(Br,{size:14,className:"spinning"}),"Generating..."]}):o.jsxs(o.Fragment,{children:[o.jsx(lu,{size:14}),"Generate"]})})]}),o.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"8px"},children:"AI will generate code based on the callback name, description, and selected state keys"}),o.jsx("div",{className:"code-editor-container",children:o.jsx(ln,{height:"100%",language:"python",theme:"vs-dark",value:l,onChange:E=>a(E||""),onMount:C,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0}})})]})]})]}):o.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)"},children:"Select a callback to edit, or create a new one"})})]})}const Xp={agent_start:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},agent_end:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},tool_call:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},tool_result:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},model_call:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},model_response:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},state_change:{bg:"#3d0d1f",fg:"#fda4af",border:"#f43f5e"},transfer:{bg:"#0d2d3d",fg:"#7dd3fc",border:"#0ea5e9"},callback_start:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},callback_end:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"}},hS={agent_start:Ba,agent_end:Ba,tool_call:Gt,tool_result:Gt,model_call:iu,model_response:gs,state_change:sn,transfer:sg,callback_start:In,callback_end:In};function gS(e){var t,n,r,i,s,l,a,c,u,d,p,f,m,w,j,N,g,h,y,P,C;switch(e.event_type){case"agent_start":return`START ${e.agent_name}`;case"agent_end":return(t=e.data)!=null&&t.error?`END ${e.agent_name} [ERROR]`:`END ${e.agent_name}`;case"tool_call":const v=Object.entries(((n=e.data)==null?void 0:n.args)||{}).map(([I,b])=>{const U=b!=null?JSON.stringify(b):"null";return`${I}=${U.slice(0,20)}`}).join(", ")||"";return`CALL ${((r=e.data)==null?void 0:r.tool_name)||"unknown"}(${v.slice(0,60)}${v.length>60?"...":""})`;case"tool_result":const T=(i=e.data)==null?void 0:i.result;let R="";if((l=(s=T==null?void 0:T.content)==null?void 0:s[0])!=null&&l.text)R=String(T.content[0].text).slice(0,60);else if(typeof T=="string")R=T.slice(0,60);else if(T!=null){const I=JSON.stringify(T);R=I?I.slice(0,60):""}else R="";return`RESULT ${((a=e.data)==null?void 0:a.tool_name)||"unknown"} → ${R}${R.length>=60?"...":""}`;case"model_call":return`LLM_REQ ${((u=(c=e.data)==null?void 0:c.contents)==null?void 0:u.length)||0} msgs, ${((d=e.data)==null?void 0:d.tool_count)||0} tools`;case"model_response":const E=((f=(p=e.data)==null?void 0:p.response_content)==null?void 0:f.parts)||((m=e.data)==null?void 0:m.parts)||[],k=E.find(I=>(I==null?void 0:I.type)==="function_call");if(k)return`LLM_RSP → ${k.name||"unknown"}()`;const z=E.find(I=>(I==null?void 0:I.type)==="text");if(z!=null&&z.text){const I=String(z.text);return`LLM_RSP "${I.slice(0,50)}${I.length>50?"...":""}"`}return`LLM_RSP (${((w=e.data)==null?void 0:w.finish_reason)||"complete"})`;case"state_change":return`STATE ${Object.keys(((j=e.data)==null?void 0:j.state_delta)||{}).join(", ")}`;case"transfer":return`TRANSFER → ${((N=e.data)==null?void 0:N.target)||"unknown"}`;case"callback_start":const q=((g=e.data)==null?void 0:g.callback_name)||"unknown",B=((h=e.data)==null?void 0:h.callback_type)||"";return`CALLBACK START ${B?`[${B}]`:""} ${q}`;case"callback_end":const Y=((y=e.data)==null?void 0:y.callback_name)||"unknown",A=((P=e.data)==null?void 0:P.callback_type)||"",$=(C=e.data)!=null&&C.error?" [ERROR]":"";return`CALLBACK END ${A?`[${A}]`:""} ${Y}${$}`;default:return e.event_type.toUpperCase()}}function xS(e,t){const n=e-t;return n<1?`+${(n*1e3).toFixed(0)}ms`:n<60?`+${n.toFixed(2)}s`:`+${Math.floor(n/60)}m${(n%60).toFixed(0)}s`}function yS({event:e}){var s,l,a,c,u,d,p,f,m,w,j,N,g,h,y,P;const[t,n]=_.useState(new Set(["instruction","messages","result","response","state_delta","data"])),r=C=>{const x=new Set(t);x.has(C)?x.delete(C):x.add(C),n(x)},i=(C,x=0,v=!1)=>{const T="  ".repeat(x),R="  ".repeat(x+1);if(C===null)return o.jsx("span",{className:"json-null",children:"null"});if(C===void 0)return o.jsx("span",{className:"json-undefined",children:"undefined"});if(typeof C=="boolean")return o.jsx("span",{className:"json-boolean",children:C.toString()});if(typeof C=="number")return o.jsx("span",{className:"json-number",children:C});if(typeof C=="string"){const E=C.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\t/g,"\\t");return E.length>300&&x>0?o.jsxs("span",{className:"json-string",children:['"',E.slice(0,300),'..." ',o.jsxs("span",{className:"json-truncated",children:["(",C.length," chars)"]})]}):o.jsxs("span",{className:"json-string",children:['"',E,'"']})}if(Array.isArray(C))return C.length===0?o.jsx("span",{className:"json-bracket",children:"[]"}):C.every(k=>k===null||typeof k!="object")&&C.length<=3?o.jsxs("span",{className:"json-inline",children:[o.jsx("span",{className:"json-bracket",children:"["}),C.map((k,z)=>o.jsxs("span",{children:[i(k,x+1,!0),z<C.length-1&&o.jsx("span",{className:"json-comma",children:", "})]},z)),o.jsx("span",{className:"json-bracket",children:"]"})]}):o.jsxs("span",{className:"json-block",children:[o.jsx("span",{className:"json-bracket",children:"["}),C.map((k,z)=>o.jsxs("span",{children:[`
`+R,i(k,x+1),z<C.length-1&&o.jsx("span",{className:"json-comma",children:","})]},z)),`
`+T,o.jsx("span",{className:"json-bracket",children:"]"})]});if(typeof C=="object"){const E=Object.entries(C);return E.length===0?o.jsx("span",{className:"json-bracket",children:"{}"}):E.length<=2&&E.every(([,z])=>z===null||typeof z!="object")&&v?o.jsxs("span",{className:"json-inline",children:[o.jsx("span",{className:"json-bracket",children:"{"}),E.map(([z,M],q)=>o.jsxs("span",{children:[o.jsxs("span",{className:"json-key",children:['"',z,'"']}),o.jsx("span",{className:"json-colon",children:": "}),i(M,x+1,!0),q<E.length-1&&o.jsx("span",{className:"json-comma",children:", "})]},z)),o.jsx("span",{className:"json-bracket",children:"}"})]}):o.jsxs("span",{className:"json-block",children:[o.jsx("span",{className:"json-bracket",children:"{"}),E.map(([z,M],q)=>o.jsxs("span",{children:[`
`+R,o.jsxs("span",{className:"json-key",children:['"',z,'"']}),o.jsx("span",{className:"json-colon",children:": "}),i(M,x+1),q<E.length-1&&o.jsx("span",{className:"json-comma",children:","})]},z)),`
`+T,o.jsx("span",{className:"json-bracket",children:"}"})]})}return String(C)};return o.jsxs("div",{className:"event-detail",children:[o.jsxs("div",{className:"detail-header",children:[o.jsx("span",{className:"detail-type",children:e.event_type}),o.jsx("span",{className:"detail-agent",children:e.agent_name}),o.jsx("span",{className:"detail-time",children:new Date(e.timestamp*1e3).toISOString()})]}),o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>r("data"),children:[t.has("data")?o.jsx(Ct,{size:12}):o.jsx(Nt,{size:12}),o.jsx("span",{children:"Event Data"})]}),t.has("data")&&o.jsx("div",{className:"section-content json-viewer",children:i(e.data)})]}),e.event_type==="agent_start"&&((s=e.data)==null?void 0:s.instruction)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>r("instruction"),children:[t.has("instruction")?o.jsx(Ct,{size:12}):o.jsx(Nt,{size:12}),o.jsx("span",{children:"Instruction"}),o.jsxs("span",{className:"char-count",children:[e.data.instruction.length," chars"]})]}),t.has("instruction")&&o.jsx("div",{className:"section-content",children:o.jsx("pre",{className:"instruction-text",children:e.data.instruction})})]}),e.event_type==="model_call"&&((l=e.data)==null?void 0:l.contents)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>r("messages"),children:[t.has("messages")?o.jsx(Ct,{size:12}):o.jsx(Nt,{size:12}),o.jsxs("span",{children:["Messages (",e.data.contents.length,")"]})]}),t.has("messages")&&o.jsx("div",{className:"section-content",children:e.data.contents.map((C,x)=>{var v;return o.jsxs("div",{className:"message-item",children:[o.jsx("span",{className:`message-role ${C.role}`,children:C.role}),o.jsx("div",{className:"message-parts",children:(v=C.parts)==null?void 0:v.map((T,R)=>o.jsxs("div",{className:"message-part",children:[T.text&&o.jsx("pre",{children:T.text}),T.function_call&&o.jsxs("div",{className:"function-call",children:[o.jsx("strong",{children:T.function_call.name}),o.jsx("pre",{children:JSON.stringify(T.function_call.args,null,2)})]}),T.function_response&&o.jsxs("div",{className:"function-response",children:[o.jsx("strong",{children:T.function_response.name}),o.jsx("pre",{children:JSON.stringify(T.function_response.response,null,2)})]})]},R))})]},x)})})]}),e.event_type==="tool_result"&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>r("result"),children:[t.has("result")?o.jsx(Ct,{size:12}):o.jsx(Nt,{size:12}),o.jsx("span",{children:"Tool Result"})]}),t.has("result")&&o.jsx("div",{className:"section-content",children:o.jsx("pre",{className:"result-content",children:((d=(u=(c=(a=e.data)==null?void 0:a.result)==null?void 0:c.content)==null?void 0:u[0])==null?void 0:d.text)||(typeof((p=e.data)==null?void 0:p.result)=="string"?e.data.result:JSON.stringify((f=e.data)==null?void 0:f.result,null,2))})})]}),e.event_type==="model_response"&&((m=e.data)==null?void 0:m.parts)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>r("response"),children:[t.has("response")?o.jsx(Ct,{size:12}):o.jsx(Nt,{size:12}),o.jsxs("span",{children:["Response (",e.data.parts.length," part",e.data.parts.length!==1?"s":"",")"]}),e.data.token_counts&&o.jsxs("span",{className:"token-badge",children:[e.data.token_counts.input,"↑ ",e.data.token_counts.output,"↓"]})]}),t.has("response")&&o.jsx("div",{className:"section-content",children:e.data.parts.map((C,x)=>o.jsxs("div",{className:"response-part",children:[C.type==="text"&&C.text&&o.jsx("pre",{className:"response-text",children:C.text}),C.type==="function_call"&&o.jsxs("div",{className:"function-call",children:[o.jsxs("strong",{children:["→ ",C.name,"()"]}),C.args&&Object.keys(C.args).length>0&&o.jsx("pre",{children:JSON.stringify(C.args,null,2)})]}),C.thought&&o.jsx("div",{className:"thought-indicator",children:"💭 Thinking"})]},x))})]}),(e.event_type==="callback_start"||e.event_type==="callback_end")&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>r("callback_info"),children:[t.has("callback_info")?o.jsx(Ct,{size:12}):o.jsx(Nt,{size:12}),o.jsx("span",{children:"Callback Information"})]}),t.has("callback_info")&&o.jsxs("div",{className:"section-content",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Name:"})," ",((w=e.data)==null?void 0:w.callback_name)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Type:"})," ",((j=e.data)==null?void 0:j.callback_type)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Module Path:"})," ",((N=e.data)==null?void 0:N.module_path)||"unknown"]}),((g=e.data)==null?void 0:g.error)&&o.jsxs("div",{style:{color:"#ef4444",marginTop:"8px"},children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Error:"})," ",e.data.error]}),((h=e.data)==null?void 0:h.error_type)&&o.jsxs("div",{style:{marginTop:"4px",fontSize:"0.9em",opacity:.8},children:[o.jsx("strong",{children:"Type:"})," ",e.data.error_type]}),((y=e.data)==null?void 0:y.stack_trace)&&o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Stack Trace:"}),o.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"300px",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:e.data.stack_trace})]})]})]})]}),e.event_type==="state_change"&&((P=e.data)==null?void 0:P.state_delta)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>r("state_delta"),children:[t.has("state_delta")?o.jsx(Ct,{size:12}):o.jsx(Nt,{size:12}),o.jsxs("span",{children:["State Changes (",Object.keys(e.data.state_delta).length,")"]})]}),t.has("state_delta")&&o.jsx("div",{className:"section-content",children:Object.entries(e.data.state_delta).map(([C,x])=>o.jsxs("div",{className:"state-delta-item",children:[o.jsx("div",{className:"state-delta-key",children:C}),o.jsx("pre",{className:"state-delta-value",children:typeof x=="string"?x:JSON.stringify(x,null,2)})]},C))})]})]})}function vS({content:e,title:t,onClose:n}){return o.jsxs("div",{className:"modal-overlay",onClick:n,children:[o.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[o.jsxs("div",{className:"modal-header",children:[o.jsx("h3",{children:t}),o.jsx("button",{className:"modal-close",onClick:n,children:"×"})]}),o.jsx("div",{className:"modal-body markdown-content",children:o.jsx(Xg,{children:e})})]}),o.jsx("style",{children:`
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
      `})]})}function bS({events:e,selectedEventIndex:t,project:n}){const[r,i]=_.useState(null),s=_.useMemo(()=>{var u;const a={};return(u=n==null?void 0:n.app)!=null&&u.state_keys&&n.app.state_keys.forEach(d=>{a[d.name]={value:void 0,timestamp:null,defined:!0,description:d.description,type:d.type}}),n!=null&&n.agents&&n.agents.forEach(d=>{if(d.type==="LlmAgent"&&d.output_key){const p=d.output_key;a[p]||(a[p]={value:void 0,timestamp:null,defined:!0,description:`Output from ${d.name}`,type:"string"})}}),(t!==null?e.slice(0,t+1):e).filter(d=>d.event_type==="state_change").forEach(d=>{var p;(p=d.data)!=null&&p.state_delta&&Object.entries(d.data.state_delta).forEach(([f,m])=>{var w;a[f]={...a[f],value:m,timestamp:d.timestamp,defined:((w=a[f])==null?void 0:w.defined)??!1}})}),a},[e,t,n]),l=Object.entries(s);return o.jsxs(o.Fragment,{children:[r&&o.jsx(vS,{content:r.content,title:r.title,onClose:()=>i(null)}),o.jsxs("div",{className:"state-snapshot",children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"state-header",children:t!==null?`State after event #${t}`:e.length>0?"State at end of run":"Defined State Keys"}),l.length===0?o.jsx("div",{className:"state-empty",children:"No state keys defined"}):l.map(([a,{value:c,timestamp:u,defined:d,description:p,type:f}])=>o.jsxs("div",{className:`state-entry ${c===void 0?"unset":""}`,children:[o.jsxs("div",{className:"state-key",children:[a,f&&o.jsxs("span",{className:"state-type",children:["(",f,")"]})]}),o.jsx("div",{className:"state-value",onClick:()=>{if(c!==void 0){const m=typeof c=="string"?c:JSON.stringify(c,null,2);i({content:m,title:a})}},style:{cursor:c!==void 0?"pointer":"default"},title:c!==void 0?"Click to view in markdown viewer":void 0,children:c===void 0?"(not set)":typeof c=="string"?c:JSON.stringify(c,null,2)}),p&&o.jsx("div",{className:"state-desc",children:p}),u&&o.jsx("div",{className:"state-time",children:new Date(u*1e3).toLocaleTimeString()})]},a))]})]})}let rc=null,ic=null;(async()=>{try{rc=(await lg(()=>import("./jq-DDNFKc5d.js").then(t=>t.j),[])).default}catch(e){console.warn("jq-web failed to load:",e.message),ic=e.message}})();function Ul(e){if(!e)return{text:"",isError:!1};if(e.success===!1)return{text:e.error||"Unknown error",isError:!0};let t=e.result||e;if(typeof t=="string")try{const n=t.replace(/'/g,'"').replace(/True/g,"true").replace(/False/g,"false").replace(/None/g,"null");t=JSON.parse(n)}catch{return{text:t,isError:!1}}return t.content&&Array.isArray(t.content)?{text:t.content.filter(r=>r.type==="text").map(r=>r.text).join(`
`),isError:t.isError===!0}:{text:typeof t=="string"?t:JSON.stringify(t,null,2),isError:!1}}function Zp(e,t){if(!t||!t.trim())return e;const n=t.trim();let r=e;try{r=JSON.parse(e)}catch{}if(n.startsWith("js:")){const i=n.slice(3).trim();try{const l=new Function("value","data",`return ${i}`)(e,r);return typeof l=="string"?l:JSON.stringify(l,null,2)}catch(s){return`[JS error: ${s}]`}}if(rc)try{const i=rc.json(r,n);return i==null?"[No match]":typeof i=="string"?i:JSON.stringify(i,null,2)}catch(i){if(!n.startsWith("."))try{const l=new Function("value","data",`return ${n}`)(e,r);return typeof l=="string"?l:JSON.stringify(l,null,2)}catch{}return`[jq error: ${i.message||i}]`}else{if(ic){if(n.startsWith(".")&&!n.includes("|"))try{const i=n.slice(1).split(".").filter(Boolean);let s=r;for(const l of i){const a=l.match(/^(\w+)?\[(\d+)\]$/);a?(a[1]&&(s=s[a[1]]),s=s[parseInt(a[2])]):s=s[l]}return typeof s=="string"?s:JSON.stringify(s,null,2)}catch{}try{const s=new Function("value","data",`return ${n}`)(e,r);return typeof s=="string"?s:JSON.stringify(s,null,2)}catch(i){return`[jq not loaded: ${ic}. JS fallback failed: ${i.message}]`}}return"[jq loading...]"}}function kS({project:e,selectedEventIndex:t}){var X;const{watches:n,updateWatch:r,addWatch:i,removeWatch:s,runEvents:l}=it(),[a,c]=_.useState(!1),[u,d]=_.useState(null),[p,f]=_.useState({}),[m,w]=_.useState(new Set),[j,N]=_.useState(""),[g,h]=_.useState(""),[y,P]=_.useState({}),[C,x]=_.useState(""),[v,T]=_.useState([]),[R,E]=_.useState(null),[k,z]=_.useState(null),[M,q]=_.useState(!1);_.useEffect(()=>{ru().then(T).catch(console.error)},[]);const B=_.useMemo(()=>{const F=e.mcp_servers||[],O=new Set(F.map(G=>G.name)),V=v.filter(G=>!O.has(G.name));return[...F,...V]},[e.mcp_servers,v]),Y=_.useCallback(async F=>{if(!(p[F]||m.has(F))){w(O=>new Set([...O,F]));try{const O=await xe(`/projects/${e.id}/mcp-servers/${encodeURIComponent(F)}/test-connection`,{method:"POST"});O.success&&f(V=>({...V,[F]:O.tools}))}catch(O){console.error("Failed to load tools:",O)}finally{w(O=>{const V=new Set(O);return V.delete(F),V})}}},[e.id,p,m]);_.useEffect(()=>{var G;if(u)return;if(!j||!g){P({});return}const O=(p[j]||[]).find(Z=>Z.name===g);if(!((G=O==null?void 0:O.parameters)!=null&&G.properties)){P({});return}const V={};Object.entries(O.parameters.properties).forEach(([Z,te])=>{te.type==="string"?V[Z]=te.default||"":te.type==="number"||te.type==="integer"?V[Z]=te.default||0:te.type==="boolean"?V[Z]=te.default||!1:V[Z]=te.default||null}),P(V)},[j,g,p,u]);const A=()=>{d(null),N(""),h(""),P({}),x(""),E(null),z(null),c(!0)},$=F=>{if(d(F.id),N(F.serverName),h(F.toolName),P({...F.args}),x(F.transform||""),F.result){const{text:O}=Ul(F.result);E(O),z(null)}else E(null),z(null);p[F.serverName]||Y(F.serverName),c(!0)},I=async()=>{if(!(!j||!g)){q(!0),z(null);try{const F=await xe(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:j,tool_name:g,arguments:y})}),{text:O,isError:V}=Ul(F);V?(z(O),E(null)):(E(O),z(null))}catch(F){z(String(F)),E(null)}finally{q(!1)}}},b=_.useMemo(()=>R?!C||!C.trim()?R:Zp(R,C):null,[R,C]),U=()=>{if(!(!j||!g)){if(u){r(u,{serverName:j,toolName:g,args:{...y},transform:C||void 0});const F=n.find(O=>O.id===u);F&&S({...F,serverName:j,toolName:g,args:y,transform:C||void 0,history:F.history||[]})}else{const F={id:`watch-${Date.now()}`,serverName:j,toolName:g,args:{...y},transform:C||void 0,history:[]};i(F),S(F)}c(!1)}},J=F=>{s(F)},S=_.useCallback(async(F,O)=>{r(F.id,{isLoading:!0,error:void 0});const V=O??l.length-1,G=Date.now();try{const Z=await xe(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:F.serverName,tool_name:F.toolName,arguments:F.args})}),te={eventIndex:V,timestamp:G,result:Z},me=[...F.history||[],te];r(F.id,{result:Z,isLoading:!1,lastRun:G,history:me})}catch(Z){const te={eventIndex:V,timestamp:G,error:String(Z)},me=[...F.history||[],te];r(F.id,{error:String(Z),isLoading:!1,lastRun:G,history:me})}},[e.id,r,l.length]),oe=()=>{n.forEach(F=>S(F))},L=_.useMemo(()=>!j||!g?null:(p[j]||[]).find(O=>O.name===g),[j,g,p]);return o.jsxs("div",{className:"tool-watch-panel",children:[o.jsxs("div",{className:"watch-header",children:[o.jsx(Wi,{size:14}),o.jsx("span",{children:"Tool Watch"}),o.jsx("span",{className:"watch-auto-badge",title:"Watches auto-refresh on every event",children:"⚡ Auto"}),o.jsxs("div",{className:"watch-actions",children:[o.jsx("button",{className:"watch-btn",onClick:oe,title:"Refresh all",children:o.jsx(wn,{size:12})}),o.jsx("button",{className:"watch-btn",onClick:A,title:"Add watch",children:o.jsx(Me,{size:12})})]})]}),n.length===0?o.jsxs("div",{className:"watch-empty",children:[o.jsx(Wi,{size:20,style:{opacity:.3}}),o.jsx("span",{children:"No watch expressions"}),o.jsxs("button",{className:"add-watch-btn",onClick:A,children:[o.jsx(Me,{size:12})," Add Tool Watch"]})]}):o.jsx("div",{className:"watch-list",children:n.map(F=>{let O=F.result,V=F.error;if(t!==null&&F.history&&F.history.length>0){const Ne=F.history.filter(Re=>Re.eventIndex<=t);if(Ne.length>0){const Re=Ne[Ne.length-1];O=Re.result,V=Re.error}else O=void 0,V=void 0}const{text:G,isError:Z}=O?Ul(O):{text:"",isError:!1},te=O?Zp(G,F.transform):"",me=V||Z;return o.jsxs("div",{className:`watch-item ${me?"error":""}`,children:[o.jsxs("div",{className:"watch-item-header",children:[o.jsxs("span",{className:"watch-expr",children:[o.jsx("span",{className:"watch-server",children:F.serverName}),o.jsx("span",{className:"watch-tool",children:F.toolName}),Object.keys(F.args).length>0&&o.jsxs("span",{className:"watch-args",children:["(",Object.entries(F.args).map(([Ne,Re])=>`${Ne}=${JSON.stringify(Re)}`).join(", "),")"]}),t!==null&&o.jsxs("span",{className:"watch-time-indicator",children:["@",t]})]}),o.jsxs("div",{className:"watch-item-actions",children:[o.jsx("button",{onClick:()=>$(F),title:"Edit watch",children:o.jsx(Gt,{size:10})}),o.jsx("button",{onClick:()=>S(F),title:"Refresh",children:F.isLoading?o.jsx(wn,{size:10,className:"spin"}):o.jsx(wn,{size:10})}),o.jsx("button",{onClick:()=>J(F.id),title:"Remove",children:o.jsx(Te,{size:10})})]})]}),o.jsx("div",{className:"watch-result",children:F.isLoading?o.jsx("span",{className:"loading",children:"Loading..."}):V?o.jsx("span",{className:"error",children:V}):O?o.jsx("pre",{className:Z?"error-text":"",children:te}):o.jsx("span",{className:"no-result",children:t!==null?"No data at this event":"Not yet run"})})]},F.id)})}),a&&o.jsx("div",{className:"watch-dialog-overlay",onClick:()=>c(!1),children:o.jsxs("div",{className:"watch-dialog",onClick:F=>F.stopPropagation(),children:[o.jsxs("div",{className:"dialog-header",children:[o.jsx("span",{children:u?"Edit Watch":"Add Tool Watch"}),o.jsx("button",{onClick:()=>c(!1),children:o.jsx(og,{size:14})})]}),o.jsxs("div",{className:"dialog-body",children:[o.jsxs("div",{className:"form-row",children:[o.jsx("label",{children:"MCP Server"}),o.jsxs("select",{value:j,onChange:F=>{N(F.target.value),u||h(""),F.target.value&&Y(F.target.value)},children:[o.jsx("option",{value:"",children:"Select server..."}),B.map(F=>o.jsx("option",{value:F.name,children:F.name},F.name))]})]}),o.jsxs("div",{className:"form-row",children:[o.jsx("label",{children:"Tool"}),o.jsxs("select",{value:g,onChange:F=>h(F.target.value),disabled:!j||m.has(j),children:[o.jsx("option",{value:"",children:m.has(j)?"Loading tools...":"Select tool..."}),(p[j]||[]).map(F=>o.jsx("option",{value:F.name,children:F.name},F.name))]})]}),(L==null?void 0:L.description)&&o.jsx("div",{className:"tool-desc",children:L.description}),((X=L==null?void 0:L.parameters)==null?void 0:X.properties)&&Object.keys(L.parameters.properties).length>0&&o.jsxs("div",{className:"tool-args",children:[o.jsx("label",{children:"Arguments"}),Object.entries(L.parameters.properties).map(([F,O])=>{var V,G;return o.jsxs("div",{className:"arg-row",children:[o.jsxs("span",{className:"arg-name",children:[F,((V=L.parameters.required)==null?void 0:V.includes(F))&&o.jsx("span",{className:"required",children:"*"})]}),o.jsx("input",{type:O.type==="number"||O.type==="integer"?"number":"text",value:typeof y[F]=="object"?JSON.stringify(y[F]):y[F]??"",onChange:Z=>P(te=>({...te,[F]:Z.target.value})),placeholder:((G=O.description)==null?void 0:G.slice(0,40))||F})]},F)})]}),j&&g&&o.jsxs("div",{className:"test-section",children:[o.jsxs("div",{className:"test-header",children:[o.jsx("label",{children:"Test & Preview"}),o.jsxs("button",{className:"test-btn",onClick:I,disabled:M,children:[M?o.jsx(wn,{size:12,className:"spin"}):o.jsx(Mn,{size:12}),M?"Running...":"Test Run"]})]}),k&&o.jsxs("div",{className:"test-result error",children:[o.jsx("span",{className:"test-label",children:"Error:"}),o.jsx("pre",{children:k})]}),R&&o.jsxs("div",{className:"test-result",children:[o.jsx("span",{className:"test-label",children:"Raw Result:"}),o.jsx("pre",{children:R})]})]}),o.jsxs("div",{className:"form-row transform-row",children:[o.jsx("label",{children:"Transform (optional)"}),o.jsx("input",{type:"text",value:C,onChange:F=>x(F.target.value),placeholder:"e.g., .items[0].name or .content[].text"}),o.jsxs("div",{className:"transform-hints",children:[o.jsx("span",{className:"hint-title",children:"jq:"}),o.jsx("code",{onClick:()=>x(".items[0].name"),children:".items[0].name"}),o.jsx("code",{onClick:()=>x(".content[].text"),children:".content[].text"}),o.jsx("code",{onClick:()=>x(".result.content[0].text"),children:".result.content[0].text"}),o.jsx("code",{onClick:()=>x('.[] | select(.status == "active")'),children:".[] | select()"}),o.jsx("span",{className:"hint-title",children:"JS:"}),o.jsx("code",{onClick:()=>x("js:value.split('\\n')[0]"),children:"js:value.split('\\n')[0]"}),o.jsx("code",{onClick:()=>x("js:data.length"),children:"js:data.length"})]})]}),R&&C&&o.jsxs("div",{className:"transform-preview",children:[o.jsx("span",{className:"test-label",children:"Transform Preview:"}),o.jsx("pre",{className:b!=null&&b.startsWith("[Transform error")?"error":"",children:b})]})]}),o.jsxs("div",{className:"dialog-footer",children:[o.jsx("button",{className:"cancel-btn",onClick:()=>c(!1),children:"Cancel"}),o.jsx("button",{className:"add-btn",onClick:U,disabled:!j||!g,children:u?"Save Changes":"Add Watch"})]})]})})]})}function jS(){var St;const{project:e,isRunning:t,setIsRunning:n,runEvents:r,addRunEvent:i,clearRunEvents:s,clearWatchHistories:l,runAgentId:a,setRunAgentId:c,watches:u,updateWatch:d,currentSessionId:p,setCurrentSessionId:f}=it(),[m,w]=_.useState(""),[j,N]=_.useState(null),[g,h]=_.useState(null),[y,P]=_.useState(null),[C,x]=_.useState(""),[v,T]=_.useState(new Set(["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_start","callback_end"])),[R,E]=_.useState(!0),[k,z]=_.useState(!0),[M,q]=_.useState(!1),[B,Y]=_.useState(360),[A,$]=_.useState(!1),[I,b]=_.useState([]),[U,J]=_.useState(null),[S,oe]=_.useState(!1),L=_.useRef(0),X=_.useCallback(async(D,re)=>{if(!e)return;d(D.id,{isLoading:!0,error:void 0});const ie=re??r.length-1,le=Date.now();try{const de=await xe(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:D.serverName,tool_name:D.toolName,arguments:D.args})}),Ue={eventIndex:ie,timestamp:le,result:de},Vn=[...D.history||[],Ue];d(D.id,{result:de,isLoading:!1,lastRun:le,history:Vn})}catch(de){const Ue={eventIndex:ie,timestamp:le,error:String(de)},Vn=[...D.history||[],Ue];d(D.id,{error:String(de),isLoading:!1,lastRun:le,history:Vn})}},[e==null?void 0:e.id,d,r.length]);_.useEffect(()=>{if(r.length>L.current&&u.length>0){const D=r.length-1;u.forEach(re=>{re.isLoading||X(re,D)})}L.current=r.length},[r.length,u,X]),_.useEffect(()=>{a!==null&&(O(a),c(null))},[a,c]);const[F,O]=_.useState(null),V=_.useRef(null),G=_.useRef(null);_.useEffect(()=>{if(!A)return;const D=ie=>{if(!G.current)return;const de=G.current.getBoundingClientRect().right-ie.clientX;Y(Math.min(600,Math.max(200,de)))},re=()=>{$(!1)};return document.addEventListener("mousemove",D),document.addEventListener("mouseup",re),()=>{document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",re)}},[A]);const Z=_.useMemo(()=>r.length===0?{min:0,max:0}:{min:r[0].timestamp,max:r[r.length-1].timestamp},[r]),te=_.useMemo(()=>r.filter((D,re)=>{var ie,le,de;if(y&&(D.timestamp<y[0]||D.timestamp>y[1])||v.size>0&&!v.has(D.event_type))return!1;if(R&&D.event_type==="model_response"){const Ue=((le=(ie=D.data)==null?void 0:ie.response_content)==null?void 0:le.parts)||((de=D.data)==null?void 0:de.parts)||[],Vn=Ue.some(Ys=>Ys.type==="function_call"),sx=Ue.some(Ys=>Ys.type==="text");if(!Vn&&!sx)return!1}return!(C&&!JSON.stringify(D).toLowerCase().includes(C.toLowerCase()))}),[r,y,v,C,R]),me=_.useMemo(()=>{var le;let D=0,re=0;const ie=g!==null?g+1:r.length;for(let de=0;de<ie;de++){const Ue=r[de];Ue.event_type==="model_response"&&((le=Ue.data)!=null&&le.token_counts)&&(D+=Ue.data.token_counts.input||0,re+=Ue.data.token_counts.output||0)}return{input:D,output:re,total:D+re}},[r,g]),Ne=g!==null?r[g]:null;_.useEffect(()=>{if(!e){b([]);return}(async()=>{oe(!0);try{const re=await Fa(e.id);b(re)}catch(re){console.error("Failed to load sessions:",re),b([])}finally{oe(!1)}})()},[e]);const Re=_.useCallback(async D=>{if(!e){J(null);return}if(!D){s(),l(),f(null),J(null),h(null),P(null);return}try{const re=await Oh(e.id,D);s(),l(),f(re.id),J(D),h(null),P(null);for(const ie of re.events)i(ie)}catch(re){alert(`Failed to load session: ${re.message||"Unknown error"}`)}},[e,s,l,f,i]);_.useEffect(()=>{if(!e||I.length===0||S)return;const re=new URLSearchParams(window.location.search).get("session");if(re)if(I.some(le=>le.id===re)){Re(re);const le=window.location.pathname;window.history.replaceState({},"",le)}else console.warn(`Session ${re} not found in available sessions`)},[e,I,S,Re]),_.useEffect(()=>{t&&V.current&&(V.current.scrollTop=V.current.scrollHeight)},[r.length,t]);const _t=_.useCallback(()=>{if(!e||!m.trim()||t)return;j&&(j.close(),N(null)),p||(s(),l(),J(null)),n(!0),h(null),P(null);const D=Bh(e.id);N(D),D.onopen=()=>{D.send(JSON.stringify({message:m,agent_id:F||void 0,session_id:p||void 0}))},D.onmessage=re=>{var le;const ie=JSON.parse(re.data);if(ie.event_type==="agent_start"&&((le=ie.data)!=null&&le.session_id)){const de=ie.data.session_id;ie.data.session_reused,f(de),de&&I.some(Ue=>Ue.id===de)&&J(de)}else ie.type==="session_started"?(f(ie.session_id),ie.session_id&&I.some(de=>de.id===ie.session_id)&&J(ie.session_id)):ie.type==="completed"?(n(!1),D.close()):ie.type==="error"?(n(!1),i({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:ie.error}})):i(ie)},D.onerror=()=>{n(!1),i({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:"WebSocket connection error"}})},D.onclose=()=>{n(!1)}},[e,m,t,j,s,n,i,F,p]),H=_.useCallback(()=>{j==null||j.close(),n(!1)},[j,n]);_.useEffect(()=>{const D=re=>{if((re.metaKey||re.ctrlKey)&&re.key==="Enter"){re.preventDefault(),_t();return}if(re.key==="ArrowDown"||re.key==="ArrowUp"){if(re.target instanceof HTMLInputElement||re.target instanceof HTMLTextAreaElement||(re.preventDefault(),te.length===0))return;if(re.key==="ArrowDown")if(g===null){const ie=r.indexOf(te[0]);h(ie)}else{const ie=te.findIndex(le=>r.indexOf(le)===g);if(ie<te.length-1){const le=r.indexOf(te[ie+1]);h(le)}}else if(re.key==="ArrowUp")if(g===null){const ie=r.indexOf(te[te.length-1]);h(ie)}else{const ie=te.findIndex(le=>r.indexOf(le)===g);if(ie>0){const le=r.indexOf(te[ie-1]);h(le)}}}};return window.addEventListener("keydown",D),()=>window.removeEventListener("keydown",D)},[_t,te,g,r]);const he=_.useCallback(()=>{var de;if(r.length===0)return;const D={version:1,exportedAt:new Date().toISOString(),projectId:e==null?void 0:e.id,projectName:e==null?void 0:e.name,agentId:F||((de=e==null?void 0:e.app)==null?void 0:de.root_agent_id),events:r},re=new Blob([JSON.stringify(D,null,2)],{type:"application/json"}),ie=URL.createObjectURL(re),le=document.createElement("a");le.href=ie,le.download=`run-${(e==null?void 0:e.name)||"export"}-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,document.body.appendChild(le),le.click(),document.body.removeChild(le),URL.revokeObjectURL(ie)},[r,e,F]),Ee=_.useCallback(async()=>{if(!p||!e){alert("No active session to save");return}try{const D=await Mh(p);if(D.success){alert(D.message||"Session saved to memory successfully");try{const re=await Fa(e.id);b(re)}catch{}}else alert(`Failed to save to memory: ${D.error||"Unknown error"}`)}catch(D){alert(`Error saving to memory: ${D.message||"Unknown error"}`)}},[p,e]),[ft,fn]=_.useState(!1),[Qs,Gs]=_.useState([]),[Un,ro]=_.useState(""),[W,ee]=_.useState("Test Case from Session"),[ce,pe]=_.useState(!1),ve=_.useCallback(async()=>{if(!p||!e){alert("No active session to create test case from");return}try{const D=await xe(`/projects/${e.id}/eval-sets`);if(Gs(D.eval_sets||[]),!D.eval_sets||D.eval_sets.length===0){confirm(`No evaluation sets found. Would you like to create one first?

Go to the Evals tab to create an evaluation set.`)&&(window.location.href=`/project/${e.id}/evals`);return}ro(D.eval_sets[0].id),fn(!0)}catch(D){alert(`Error loading eval sets: ${D.message||"Unknown error"}`)}},[p,e]),mt=_.useCallback(async()=>{if(!p||!e||!Un){alert("Please select an evaluation set");return}pe(!0);try{const D=await xe(`/projects/${e.id}/session-to-eval-case`,{method:"POST",body:JSON.stringify({session_id:p,eval_set_id:Un,case_name:W})});fn(!1),alert(`Test case "${D.eval_case.name}" created successfully!

Token count: ${D.session_token_count.toLocaleString()} tokens

Go to the Evals tab to view and edit the test case.`)}catch(D){alert(`Error creating test case: ${D.message||"Unknown error"}`)}finally{pe(!1)}},[p,e,Un,W]),Xt=_.useCallback(()=>{const D=document.createElement("input");D.type="file",D.accept=".json",D.onchange=async re=>{var le;const ie=(le=re.target.files)==null?void 0:le[0];if(ie)try{const de=await ie.text(),Ue=JSON.parse(de);if(!Ue.events||!Array.isArray(Ue.events)){alert("Invalid run file: missing events array");return}s(),l(),h(null),P(null),Ue.events.forEach(Vn=>{i(Vn)})}catch(de){alert(`Failed to load run file: ${de}`)}},D.click()},[s,l,i]);return _.useEffect(()=>{if(g!==null){const D=document.querySelector(".event-row.selected");D==null||D.scrollIntoView({behavior:"smooth",block:"nearest"})}},[g]),e?o.jsxs("div",{className:`run-panel ${A?"resizing":""}`,children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"input-area",children:[o.jsxs("select",{className:"agent-selector",value:F||"",onChange:D=>O(D.target.value||null),disabled:t,title:"Select which agent to run",children:[o.jsx("option",{value:"",children:e.app.root_agent_id?`Root: ${((St=e.agents.find(D=>D.id===e.app.root_agent_id))==null?void 0:St.name)||e.app.root_agent_id}`:"No root agent"}),e.agents.filter(D=>D.id!==e.app.root_agent_id).map(D=>o.jsxs("option",{value:D.id,children:[D.name," (",D.type.replace("Agent",""),")"]},D.id))]}),o.jsxs("select",{className:"agent-selector",value:U||"",onChange:D=>Re(D.target.value||null),disabled:t||S,style:{minWidth:180},title:"Load a saved session",children:[o.jsx("option",{value:"",children:S?"Loading...":"Load Session..."}),I.map(D=>{const re=new Date(D.started_at*1e3),ie=D.duration?`${D.duration.toFixed(1)}s`:"?";return o.jsxs("option",{value:D.id,children:[re.toLocaleString()," (",D.event_count," events, ",ie,")"]},D.id)})]}),o.jsx("input",{type:"text",placeholder:"Enter your query...",value:m,onChange:D=>w(D.target.value),onKeyDown:D=>D.key==="Enter"&&!D.shiftKey&&_t(),disabled:t}),t?o.jsxs("button",{className:"stop",onClick:H,children:[o.jsx(b0,{size:14}),"Stop"]}):o.jsxs("button",{onClick:_t,disabled:!m.trim(),children:[o.jsx(Mn,{size:14}),"Run"]})]}),o.jsxs("div",{className:"toolbar",children:[o.jsxs("div",{className:"toolbar-section",children:[o.jsx(ng,{size:12,style:{color:"#71717a"}}),o.jsx("input",{type:"text",placeholder:"Filter events...",value:C,onChange:D=>x(D.target.value)})]}),o.jsx("div",{className:"toolbar-divider"}),o.jsxs("div",{className:"toolbar-section",children:[["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change"].map(D=>o.jsx("button",{className:`filter-chip ${v.has(D)?"active":""}`,onClick:()=>{const re=new Set(v);re.has(D)?re.delete(D):re.add(D),T(re)},children:D.replace("_"," ")},D)),o.jsx("button",{className:`filter-chip ${v.has("callback_start")&&v.has("callback_end")?"active":""}`,onClick:()=>{const D=new Set(v);D.has("callback_start")&&D.has("callback_end")?(D.delete("callback_start"),D.delete("callback_end")):(D.add("callback_start"),D.add("callback_end")),T(D)},title:"Show/hide callback events",children:"callback"}),o.jsx("button",{className:`filter-chip ${R?"active":""}`,onClick:()=>E(!R),title:"Hide LLM_RESP (complete) events",children:"hide (complete)"})]}),o.jsx("div",{className:"toolbar-divider"}),o.jsxs("div",{className:"toolbar-section",children:[o.jsxs("button",{className:`toolbar-btn ${k?"active":""}`,onClick:()=>z(!k),children:[o.jsx(sn,{size:12}),"State"]}),o.jsxs("button",{className:`toolbar-btn ${M?"active":""}`,onClick:()=>q(!M),children:[o.jsx(Yd,{size:12}),"Tools"]})]}),o.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:[o.jsxs("span",{style:{fontSize:10,color:"#71717a"},children:[te.length," / ",r.length," events"]}),y&&o.jsx("button",{className:"toolbar-btn",onClick:()=>P(null),children:"Clear Range"})]})]}),o.jsxs("div",{className:"main-content",ref:G,children:[o.jsxs("div",{className:"event-list-container",children:[o.jsxs("div",{className:"event-list-header",children:[o.jsx("div",{children:"#"}),o.jsx("div",{children:"Time"}),o.jsx("div",{children:"Agent"}),o.jsx("div",{children:"Type"}),o.jsx("div",{children:"Info"})]}),o.jsx("div",{className:"event-list",ref:V,children:te.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(tg,{size:24}),o.jsx("span",{children:r.length===0?"No events yet":"No matching events"})]}):te.map((D,re)=>{const ie=r.indexOf(D),le=Xp[D.event_type]||Xp.error,de=hS[D.event_type]||gs;return o.jsxs("div",{className:`event-row ${g===ie?"selected":""}`,style:{background:le.bg},onClick:()=>h(ie),onDoubleClick:()=>{z(!1),q(!1)},children:[o.jsx("div",{className:"index",children:ie}),o.jsx("div",{className:"time",style:{color:le.fg},children:xS(D.timestamp,Z.min)}),o.jsx("div",{className:"agent",style:{color:le.fg},children:D.agent_name}),o.jsxs("div",{className:"type",style:{color:le.fg},children:[o.jsx(de,{size:10}),D.event_type.split("_")[0]]}),o.jsx("div",{className:"summary",children:gS(D)})]},ie)})})]}),o.jsxs("div",{className:"side-panel-container",style:{width:B},children:[o.jsx("div",{className:`resize-handle ${A?"active":""}`,onMouseDown:()=>$(!0)}),o.jsxs("div",{className:"side-panel",style:{width:B-4},children:[o.jsxs("div",{className:"side-panel-tabs",children:[o.jsxs("button",{className:`side-panel-tab ${!k&&!M?"active":""}`,onClick:()=>{z(!1),q(!1)},children:[o.jsx(Wi,{size:12,style:{marginRight:4}}),"Details"]}),o.jsxs("button",{className:`side-panel-tab ${k?"active":""}`,onClick:()=>{z(!0),q(!1)},children:[o.jsx(sn,{size:12,style:{marginRight:4}}),"State"]}),o.jsxs("button",{className:`side-panel-tab ${M?"active":""}`,onClick:()=>{q(!0),z(!1)},children:[o.jsx(Yd,{size:12,style:{marginRight:4}}),"Tools"]})]}),o.jsx("div",{className:"side-panel-content",children:M?o.jsx(kS,{project:e,selectedEventIndex:g}):k?o.jsx(bS,{events:r,selectedEventIndex:g,project:e}):Ne?o.jsx(yS,{event:Ne}):o.jsxs("div",{className:"empty-state",children:[o.jsx(Wi,{size:24}),o.jsx("span",{children:"Select an event to view details"})]})})]})]})]}),o.jsxs("div",{className:"stats-bar",children:[o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Events:"}),o.jsx("span",{className:"stat-value",children:r.length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Tool Calls:"}),o.jsx("span",{className:"stat-value",children:r.filter(D=>D.event_type==="tool_call").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Model Calls:"}),o.jsx("span",{className:"stat-value",children:r.filter(D=>D.event_type==="model_call").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Callbacks:"}),o.jsx("span",{className:"stat-value",children:r.filter(D=>D.event_type==="callback_start").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"State Changes:"}),o.jsx("span",{className:"stat-value",children:r.filter(D=>D.event_type==="state_change").length})]}),r.length>0&&o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Duration:"}),o.jsxs("span",{className:"stat-value",children:[((r[r.length-1].timestamp-r[0].timestamp)*1e3).toFixed(0),"ms"]})]}),me.total>0&&o.jsx("div",{className:"stat-item token-stats",children:o.jsxs("span",{className:"stat-value token-value",children:[o.jsxs("span",{className:"token-in",title:"Input tokens",children:[me.input.toLocaleString(),"↑"]}),o.jsxs("span",{className:"token-out",title:"Output tokens",children:[me.output.toLocaleString(),"↓"]}),o.jsx("span",{className:"token-total",title:"Total tokens",children:me.total.toLocaleString()})]})}),o.jsx("div",{className:"stats-bar-spacer"}),o.jsxs("button",{className:"stats-bar-btn",onClick:Xt,title:"Load a saved run",children:[o.jsx(Us,{size:12}),"Load"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:he,disabled:r.length===0,title:"Save current run to file",children:[o.jsx(Bs,{size:12}),"Save"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:Ee,disabled:!p||r.length===0,title:"Save current session to memory",children:[o.jsx(sn,{size:12}),"Save to Memory"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:ve,disabled:!p||r.length===0,title:"Create evaluation test case from this session",style:{background:"rgba(var(--accent-primary-rgb), 0.15)"},children:[o.jsx(Wa,{size:12}),"Create Test Case"]})]}),ft&&o.jsx("div",{className:"dialog-overlay",style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>fn(!1),children:o.jsxs("div",{className:"dialog-content",style:{background:"var(--bg-secondary)",borderRadius:"var(--radius-md)",padding:24,width:400,maxWidth:"90vw",border:"1px solid var(--border-color)"},onClick:D=>D.stopPropagation(),children:[o.jsxs("h3",{style:{marginBottom:16,display:"flex",alignItems:"center",gap:8},children:[o.jsx(Wa,{size:18}),"Create Test Case from Session"]}),o.jsxs("div",{style:{marginBottom:16},children:[o.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Test Case Name"}),o.jsx("input",{type:"text",value:W,onChange:D=>ee(D.target.value),placeholder:"Enter test case name",style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"}})]}),o.jsxs("div",{style:{marginBottom:20},children:[o.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Add to Evaluation Set"}),o.jsx("select",{value:Un,onChange:D=>ro(D.target.value),style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"},children:Qs.map(D=>o.jsx("option",{value:D.id,children:D.name},D.id))})]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:16},children:"This will extract user messages and tool calls from the current session to create a replayable test case. You can edit the expected responses and tool calls in the Evals tab after creation."}),o.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>fn(!1),children:"Cancel"}),o.jsx("button",{className:"btn btn-primary",onClick:mt,disabled:ce||!Un,children:ce?"Creating...":"Create Test Case"})]})]})})]}):o.jsx("div",{className:"run-panel empty",children:"No project loaded"})}const wS=()=>Math.random().toString(36).substring(2,10),_S=()=>({id:wS(),name:"New SkillSet",description:"",embedding_model:void 0,app_model_id:void 0,external_store_type:void 0,external_store_config:{},search_enabled:!0,preload_enabled:!0,preload_top_k:3,preload_min_score:.4,sources:[],entry_count:0});function SS(){const{project:e,setProject:t}=it(),[n,r]=_.useState(null),[i,s]=_.useState(null),[l,a]=_.useState(""),[c,u]=_.useState([]),[d,p]=_.useState(!1),[f,m]=_.useState(!1),[w,j]=_.useState(""),[N,g]=_.useState(!1),[h,y]=_.useState(null),[P,C]=_.useState(null),x=_.useRef(null),v=(e==null?void 0:e.skillsets)||[],T=v.find(I=>I.id===n);_.useEffect(()=>{Yh().then(I=>C(I.available)).catch(()=>C(!1))},[]),_.useEffect(()=>{v.length>0&&!n&&r(v[0].id)},[v,n]),_.useEffect(()=>{!e||!n||R()},[e==null?void 0:e.id,n]);const R=_.useCallback(async()=>{if(!(!e||!n))try{const I=await qh(e.id,n);s(I),k(n,{entry_count:I.entry_count})}catch(I){console.error("Failed to load stats:",I)}},[e==null?void 0:e.id,n]),E=I=>{e&&t({...e,...I})},k=(I,b)=>{e&&t({...e,skillsets:e.skillsets.map(U=>U.id===I?{...U,...b}:U)})},z=()=>{if(!e)return;const I=_S();E({skillsets:[...v,I]}),r(I.id)},M=I=>{e&&confirm("Delete this SkillSet and all its data?")&&(E({skillsets:v.filter(b=>b.id!==I)}),n===I&&r(v.length>1?v[0].id:null),s(null),u([]))},q=async()=>{if(!(!e||!n||!l.trim())){p(!0),y(null);try{const I=await Qh(e.id,n,l.trim(),10,0);u(I.results)}catch(I){y("Search failed"),console.error(I)}finally{p(!1)}}},B=async()=>{if(!(!e||!n||!w.trim())){g(!0),y(null);try{const I=await Jh(e.id,n,w.trim());j(""),await R(),alert(`Added ${I.chunks_added} chunks from ${I.source_name}`)}catch(I){y(I.message||"Failed to fetch URL")}finally{g(!1)}}},Y=async I=>{var U;const b=(U=I.target.files)==null?void 0:U[0];if(!(!b||!e||!n)){y(null);try{const J=await Kh(e.id,n,b);await R(),alert(`Added ${J.chunks_added} chunks from ${J.source_name}`)}catch(J){y(J.message||"Upload failed")}x.current&&(x.current.value="")}},A=async()=>{if(!(!e||!n)&&confirm("Delete all entries in this SkillSet?"))try{await Gh(e.id,n),await R(),u([])}catch{y("Clear failed")}},$=I=>{const b=Math.round(I*100),U=160,J=70,S=20+(1-I)*15,oe=.15+I*.25;return`linear-gradient(90deg, hsla(${U}, ${J}%, ${S}%, ${oe}) 0%, transparent ${b}%)`};return e?o.jsxs("div",{className:"skillsets-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"skillset-list",children:[o.jsxs("div",{className:"skillset-list-header",children:[o.jsx("h3",{children:"SkillSets"}),o.jsx("button",{className:"btn-icon",onClick:z,title:"Add SkillSet",children:o.jsx(Me,{size:16})})]}),v.length===0?o.jsxs("div",{className:"empty-state",style:{padding:"40px 0"},children:[o.jsx(sn,{size:32}),o.jsx("span",{children:"No SkillSets"}),o.jsxs("button",{className:"btn-primary",onClick:z,children:[o.jsx(Me,{size:14})," Create SkillSet"]})]}):v.map(I=>o.jsxs("div",{className:`skillset-item ${n===I.id?"selected":""}`,onClick:()=>r(I.id),children:[o.jsx(sn,{size:16,style:{color:"var(--accent)",flexShrink:0}}),o.jsxs("div",{className:"skillset-item-info",children:[o.jsx("div",{className:"skillset-item-name",children:I.name}),o.jsxs("div",{className:"skillset-item-count",children:[I.entry_count||0," entries"]})]}),o.jsx("button",{className:"skillset-item-delete",onClick:b=>{b.stopPropagation(),M(I.id)},children:o.jsx(Te,{size:14})})]},I.id))]}),T?o.jsxs("div",{className:"skillset-detail",children:[o.jsxs("div",{className:"skillset-header",children:[o.jsxs("div",{className:"skillset-header-info",children:[o.jsx("input",{className:"skillset-name-input",value:T.name,onChange:I=>k(T.id,{name:I.target.value}),placeholder:"SkillSet Name"}),o.jsx("textarea",{className:"skillset-desc-input",value:T.description,onChange:I=>k(T.id,{description:I.target.value}),placeholder:"Description (optional)",rows:1}),o.jsxs("div",{className:"skillset-model",children:[o.jsx("label",{style:{fontSize:"12px",color:"var(--text-secondary)",marginRight:"8px"},children:"Embedding Model:"}),o.jsxs("select",{style:{flex:1,padding:"4px 8px",fontSize:"12px",background:"var(--bg-secondary)",border:"1px solid var(--border)",borderRadius:"4px",color:"var(--text-primary)"},value:T.embedding_model||"text-embedding-004",onChange:I=>k(T.id,{embedding_model:I.target.value}),children:[o.jsxs("optgroup",{label:"Google Gemini",children:[o.jsx("option",{value:"text-embedding-004",children:"text-embedding-004 (768d)"}),o.jsx("option",{value:"text-embedding-005",children:"text-embedding-005"})]}),o.jsxs("optgroup",{label:"OpenAI",children:[o.jsx("option",{value:"text-embedding-3-small",children:"text-embedding-3-small (1536d)"}),o.jsx("option",{value:"text-embedding-3-large",children:"text-embedding-3-large (3072d)"})]}),o.jsxs("optgroup",{label:"Cohere",children:[o.jsx("option",{value:"embed-english-v3.0",children:"embed-english-v3.0 (1024d)"}),o.jsx("option",{value:"embed-multilingual-v3.0",children:"embed-multilingual-v3.0 (1024d)"})]})]})]}),o.jsxs("div",{className:"skillset-stats",children:[o.jsxs("span",{className:"skillset-stat",children:[o.jsx("strong",{children:(i==null?void 0:i.entry_count)||0})," entries"]}),o.jsxs("span",{className:"skillset-stat",children:[o.jsx("strong",{children:Object.keys((i==null?void 0:i.sources)||{}).length})," sources"]}),P===!1&&o.jsx("span",{className:"skillset-stat",style:{color:"var(--warning)"},children:"⚠ No embeddings"})]})]}),o.jsx("button",{className:"btn-icon",onClick:R,title:"Refresh",children:o.jsx(wn,{size:16})})]}),h&&o.jsxs("div",{className:"error-banner",children:[h,o.jsx("button",{onClick:()=>y(null),children:o.jsx(og,{size:14})})]}),o.jsxs("div",{className:"search-section",children:[o.jsx("div",{className:"search-input-wrapper",children:o.jsx("input",{className:"search-input",value:l,onChange:I=>a(I.target.value),onKeyDown:I=>I.key==="Enter"&&q(),placeholder:"Search this SkillSet..."})}),o.jsxs("button",{className:"btn-primary",onClick:q,disabled:d||!l.trim(),children:[o.jsx(ng,{size:14}),d?"Searching...":"Search"]})]}),o.jsxs("div",{className:"search-results",children:[c.length===0&&!d&&l&&o.jsx("div",{className:"empty-state",children:o.jsx("span",{children:"No results found"})}),c.map(I=>o.jsxs("div",{className:"search-result",style:{background:$(I.score)},children:[o.jsxs("span",{className:"search-result-score",children:[(I.score*100).toFixed(0),"%"]}),o.jsx("div",{className:"search-result-text",children:I.text}),o.jsx("div",{className:"search-result-source",children:I.source_name})]},I.id))]}),o.jsxs("div",{className:"add-sources-section",children:[o.jsxs("div",{className:"add-sources-header",onClick:()=>m(!f),children:[f?o.jsx(Ct,{size:16}):o.jsx(Nt,{size:16}),o.jsx("h4",{children:"Add Sources"})]}),f&&o.jsxs("div",{className:"add-sources-content",children:[o.jsxs("div",{className:"source-row",children:[o.jsx(Ua,{size:16,style:{color:"var(--text-tertiary)"}}),o.jsx("input",{className:"source-input",value:w,onChange:I=>j(I.target.value),onKeyDown:I=>I.key==="Enter"&&B(),placeholder:"Enter URL (e.g., llms.txt file)"}),o.jsxs("button",{className:"btn-primary",onClick:B,disabled:N||!w.trim(),children:[o.jsx(m0,{size:14}),N?"Loading...":"Add"]})]}),o.jsxs("div",{className:"source-row",children:[o.jsx(p0,{size:16,style:{color:"var(--text-tertiary)"}}),o.jsx("input",{ref:x,type:"file",accept:".txt,.md,.json,.csv,.html",onChange:Y}),o.jsxs("button",{className:"btn-primary",onClick:()=>{var I;return(I=x.current)==null?void 0:I.click()},children:[o.jsx(Us,{size:14}),"Upload File"]}),o.jsx("span",{style:{fontSize:"12px",color:"var(--text-tertiary)"},children:".txt, .md, .json, .csv"})]}),((i==null?void 0:i.entry_count)||0)>0&&o.jsx("div",{className:"source-row",style:{marginTop:"8px"},children:o.jsxs("button",{className:"clear-button",onClick:A,children:[o.jsx(Te,{size:12}),"Clear All Entries (",(i==null?void 0:i.entry_count)||0,")"]})})]})]})]}):v.length>0?o.jsx("div",{className:"skillset-detail",children:o.jsxs("div",{className:"empty-state",children:[o.jsx(sn,{size:48}),o.jsx("span",{children:"Select a SkillSet"})]})}):null]}):null}const tn={tool_trajectory_avg_score:{name:"Tool Trajectory",description:"Did the agent call the right tools in the expected order?",requiresJudge:!1},response_match_score:{name:"Response Match (ROUGE-1)",description:"Does the response contain expected text? (fuzzy word matching)",requiresJudge:!1},response_evaluation_score:{name:"Response Evaluation (LLM)",description:"LLM-judged semantic match of final response",requiresJudge:!0},final_response_match_v2:{name:"Response Quality v2 (LLM)",description:"Enhanced LLM-judged response quality check",requiresJudge:!0},safety_v1:{name:"Safety",description:"Is the response safe and harmless? (Vertex AI)",requiresJudge:!0},hallucinations_v1:{name:"Hallucination Detection",description:"Are all claims supported by context? No false information?",requiresJudge:!0},rubric_based_final_response_quality_v1:{name:"Rubric: Response Quality",description:"Custom rubric-based quality assessment of responses",requiresJudge:!0},rubric_based_tool_use_quality_v1:{name:"Rubric: Tool Use Quality",description:"Custom rubric-based assessment of tool usage",requiresJudge:!0}},CS={metrics:[{metric:"tool_trajectory_avg_score",enabled:!0,criterion:{threshold:1}},{metric:"response_match_score",enabled:!0,criterion:{threshold:.7}}],default_trajectory_match_type:"in_order",num_runs:1};function ox(){return`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`}function NS(){const{project:e}=it(),[t,n]=_.useState([]),[r,i]=_.useState(null),[s,l]=_.useState(null),[a,c]=_.useState(new Set),[u,d]=_.useState(new Map),[p,f]=_.useState(new Map),[m,w]=_.useState(new Set),[j,N]=_.useState(!1),[g,h]=_.useState(null),[y,P]=_.useState([]),[C,x]=_.useState(!1),[v,T]=_.useState(null),R=async()=>{if(e)try{const O=await Ve.get(`/projects/${e.id}/eval-history`);P(O.runs||[])}catch(O){console.warn("Failed to load eval history:",O)}},E=async O=>{if(e)try{const V=await Ve.get(`/projects/${e.id}/eval-history/${O}`);T(V.run)}catch(V){console.warn("Failed to load history run:",V)}},k=async O=>{if(e)try{await Ve.delete(`/projects/${e.id}/eval-history/${O}`),P(V=>V.filter(G=>G.id!==O)),(v==null?void 0:v.id)===O&&T(null)}catch(V){console.warn("Failed to delete history run:",V)}};_.useEffect(()=>{e!=null&&e.id&&(z(),R())},[e==null?void 0:e.id]);const z=async()=>{var O;if(e!=null&&e.id){N(!0),h(null);try{const V=await Ve.get(`/projects/${e.id}/eval-sets`);n(V.eval_sets||[]),((O=V.eval_sets)==null?void 0:O.length)>0&&c(new Set([V.eval_sets[0].id]))}catch(V){h(V.message||"Failed to load eval sets")}finally{N(!1)}}},M=t.find(O=>O.id===r),q=M==null?void 0:M.eval_cases.find(O=>O.id===s),B=async()=>{if(e!=null&&e.id)try{const O=await Ve.post(`/projects/${e.id}/eval-sets`,{name:"New Eval Set",description:"",eval_config:CS});n(V=>[...V,O.eval_set]),i(O.eval_set.id),c(V=>new Set([...V,O.eval_set.id]))}catch(O){h(O.message||"Failed to create eval set")}},Y=async O=>{if(e!=null&&e.id)try{const V=await Ve.post(`/projects/${e.id}/eval-sets/${O}/cases`,{name:"New Test Case",description:"",invocations:[{id:ox(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]}],initial_state:{},rubrics:[],enabled_metrics:[],tags:[]});n(G=>G.map(Z=>Z.id===O?{...Z,eval_cases:[...Z.eval_cases,V.eval_case]}:Z)),i(O),l(V.eval_case.id)}catch(V){h(V.message||"Failed to create eval case")}},A=async(O,V,G)=>{if(e!=null&&e.id)try{const Z=await Ve.put(`/projects/${e.id}/eval-sets/${O}/cases/${V}`,G);n(te=>te.map(me=>me.id===O?{...me,eval_cases:me.eval_cases.map(Ne=>Ne.id===V?Z.eval_case:Ne)}:me))}catch(Z){h(Z.message||"Failed to update eval case")}},$=async(O,V)=>{if(e!=null&&e.id)try{await Ve.delete(`/projects/${e.id}/eval-sets/${O}/cases/${V}`),n(G=>G.map(Z=>Z.id===O?{...Z,eval_cases:Z.eval_cases.filter(te=>te.id!==V)}:Z)),s===V&&l(null)}catch(G){h(G.message||"Failed to delete eval case")}},I=async O=>{if(e!=null&&e.id)try{await Ve.delete(`/projects/${e.id}/eval-sets/${O}`),n(V=>V.filter(G=>G.id!==O)),r===O&&(i(null),l(null))}catch(V){h(V.message||"Failed to delete eval set")}},b=async O=>{if(e!=null&&e.id)try{const V=await Ve.get(`/projects/${e.id}/eval-sets/${O}/export`),G=new Blob([JSON.stringify(V,null,2)],{type:"application/json"}),Z=URL.createObjectURL(G),te=document.createElement("a");te.href=Z;const me=t.find(Ne=>Ne.id===O);te.download=`${(me==null?void 0:me.name)||"eval-set"}.json`,document.body.appendChild(te),te.click(),document.body.removeChild(te),URL.revokeObjectURL(Z)}catch(V){h(V.message||"Failed to export eval set")}},U=async O=>{if(e!=null&&e.id)try{const V=await O.text(),G=JSON.parse(V),Z=await Ve.post(`/projects/${e.id}/eval-sets/import`,G);n(te=>[...te,Z.eval_set]),i(Z.eval_set.id),c(te=>new Set([...te,Z.eval_set.id]))}catch(V){h(V.message||"Failed to import eval set")}},J=_.useRef(null),S=async(O,V)=>{if(e!=null&&e.id){w(G=>new Set([...G,V]));try{const G=await Ve.post(`/projects/${e.id}/eval-sets/${O}/cases/${V}/run`,{});d(Z=>new Map(Z).set(V,G.result))}catch(G){h(G.message||"Failed to run eval case")}finally{w(G=>{const Z=new Set(G);return Z.delete(V),Z})}}},oe=async O=>{if(!(e!=null&&e.id))return;const V=t.find(Z=>Z.id===O);if(!V)return;const G=V.eval_cases.map(Z=>Z.id);w(Z=>new Set([...Z,O,...G]));try{const Z=await Ve.post(`/projects/${e.id}/eval-sets/${O}/run`,{});f(te=>new Map(te).set(O,Z.result));for(const te of Z.result.case_results)d(me=>new Map(me).set(te.eval_case_id,te));try{await Ve.post(`/projects/${e.id}/eval-history`,Z.result),R()}catch(te){console.warn("Failed to save eval run to history:",te)}}catch(Z){h(Z.message||"Failed to run eval set")}finally{w(Z=>{const te=new Set(Z);return te.delete(O),G.forEach(me=>te.delete(me)),te})}},L=O=>{c(V=>{const G=new Set(V);return G.has(O)?G.delete(O):G.add(O),G})},X=O=>{let V=O.eval_cases.length,G=0,Z=0,te=0;for(const me of O.eval_cases){const Ne=u.get(me.id);Ne?Ne.passed?G++:Z++:te++}return{total:V,passed:G,failed:Z,pending:te}},F=O=>O==null?"-":`${Math.round(O*100)}%`;return e?o.jsxs("div",{className:"eval-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("aside",{className:"eval-sidebar",children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsx("h3",{children:"Evaluation Tests"}),o.jsxs("div",{className:"header-actions",children:[o.jsx("input",{type:"file",ref:J,accept:".json",style:{display:"none"},onChange:O=>{var G;const V=(G=O.target.files)==null?void 0:G[0];V&&(U(V),O.target.value="")}}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var O;return(O=J.current)==null?void 0:O.click()},title:"Import eval set from JSON",children:o.jsx(Us,{size:14})}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:z,title:"Refresh",children:o.jsx(wn,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:B,title:"New eval set",children:[o.jsx(Me,{size:14}),"Set"]})]})]}),o.jsxs("div",{className:"eval-tree",children:[j&&o.jsx("p",{style:{color:"var(--text-muted)",padding:"16px"},children:"Loading..."}),g&&o.jsx("div",{style:{color:"var(--error)",padding:"16px",fontSize:"13px"},children:g}),!j&&t.length===0&&o.jsxs("div",{className:"empty-state",style:{padding:"32px"},children:[o.jsx(au,{size:32}),o.jsxs("p",{children:["No evaluation sets yet.",o.jsx("br",{}),"Create one to get started."]})]}),t.map(O=>{const V=a.has(O.id),G=X(O),Z=m.has(O.id);return o.jsxs("div",{className:"tree-item",children:[o.jsxs("div",{className:`tree-set ${r===O.id&&!s?"selected":""}`,onClick:()=>{i(O.id),l(null)},children:[o.jsx("button",{className:"expand-btn",onClick:te=>{te.stopPropagation(),L(O.id)},children:O.eval_cases.length>0?V?o.jsx(Ct,{size:14}):o.jsx(Nt,{size:14}):o.jsx("span",{style:{width:14}})}),o.jsx(eg,{size:14,style:{color:"var(--accent-secondary)"}}),o.jsx("span",{className:"set-name",children:O.name}),G.total>0&&o.jsxs("span",{className:"set-stats",children:[G.passed>0&&o.jsx("span",{className:"stat-passed",children:G.passed}),G.failed>0&&o.jsx("span",{className:"stat-failed",children:G.failed}),G.pending>0&&o.jsx("span",{className:"stat-pending",children:G.pending})]}),o.jsx("button",{className:"run-btn",onClick:te=>{te.stopPropagation(),oe(O.id)},title:"Run all tests in this set",disabled:Z,children:Z?o.jsx(ms,{size:12,className:"spinning"}):o.jsx(Mn,{size:12})})]}),V&&o.jsxs("div",{className:"tree-children",style:{paddingLeft:16},children:[O.eval_cases.map(te=>{var Re;const me=u.get(te.id),Ne=m.has(te.id);return o.jsxs("div",{className:`tree-case ${s===te.id?"selected":""}`,onClick:()=>{i(O.id),l(te.id)},children:[Ne?o.jsx(ms,{size:14,className:"spinning",style:{color:"var(--warning)"}}):me?me.passed?o.jsx(Vi,{size:14,style:{color:"var(--success)"}}):o.jsx(xs,{size:14,style:{color:"var(--error)"}}):o.jsx(hs,{size:14,style:{color:"var(--text-muted)"}}),o.jsx("span",{className:"case-name",children:te.name}),me&&me.metric_results.length>0&&o.jsx("span",{style:{fontSize:11,color:me.passed?"var(--success)":"var(--error)"},children:F((Re=me.metric_results[0])==null?void 0:Re.score)}),o.jsx("button",{className:"run-btn",onClick:_t=>{_t.stopPropagation(),S(O.id,te.id)},disabled:Ne,children:o.jsx(Mn,{size:12})})]},te.id)}),o.jsxs("button",{className:"btn btn-secondary btn-sm",style:{marginTop:8,marginLeft:20},onClick:()=>Y(O.id),children:[o.jsx(Me,{size:12}),"Add Test Case"]})]})]},O.id)})]}),o.jsxs("div",{className:"history-section",children:[o.jsx("div",{className:"history-header",onClick:()=>x(!C),style:{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 12px",borderTop:"1px solid var(--border-color)",background:"var(--bg-secondary)"},children:o.jsxs("span",{style:{fontWeight:500,fontSize:13},children:[C?"▼":"▶"," Previous Runs (",y.length,")"]})}),C&&o.jsx("div",{className:"history-list",style:{maxHeight:200,overflowY:"auto"},children:y.length===0?o.jsx("div",{style:{padding:"12px",color:"var(--text-secondary)",fontSize:12,textAlign:"center"},children:"No previous runs"}):y.map(O=>o.jsx("div",{className:`history-item ${(v==null?void 0:v.id)===O.id?"selected":""}`,onClick:()=>E(O.id),style:{padding:"8px 12px",borderBottom:"1px solid var(--border-color)",cursor:"pointer",background:(v==null?void 0:v.id)===O.id?"var(--bg-tertiary)":"transparent",fontSize:12},children:o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[o.jsxs("div",{children:[o.jsx("div",{style:{fontWeight:500},children:O.eval_set_name||"Unnamed"}),o.jsx("div",{style:{color:"var(--text-secondary)",fontSize:11},children:new Date(O.started_at*1e3).toLocaleString()})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsxs("span",{style:{color:O.passed_cases===O.total_cases?"var(--success-color)":"var(--error-color)",fontWeight:500},children:[O.passed_cases,"/",O.total_cases]}),o.jsx("button",{className:"btn btn-icon",onClick:V=>{V.stopPropagation(),k(O.id)},title:"Delete run",style:{padding:2},children:o.jsx(Te,{size:12})})]})]})},O.id))})]})]}),o.jsx("div",{className:"eval-editor",children:q?o.jsx(zS,{evalCase:q,evalSetId:r,projectId:e.id,result:u.get(q.id),isRunning:m.has(q.id),onUpdate:O=>A(r,q.id,O),onDelete:()=>$(r,q.id),onRun:()=>S(r,q.id)}):M?o.jsx(TS,{evalSet:M,projectId:e.id,result:p.get(M.id),isRunning:m.has(M.id),caseResults:u,onUpdate:async O=>{try{const V=await Ve.put(`/projects/${e.id}/eval-sets/${M.id}`,O);n(G=>G.map(Z=>Z.id===M.id?V.eval_set:Z))}catch(V){h(V.message)}},onDelete:()=>I(M.id),onRun:()=>oe(M.id),onExport:()=>b(M.id)}):o.jsx("div",{className:"editor-content",children:o.jsxs("div",{className:"empty-state",children:[o.jsx(hs,{size:48}),o.jsxs("p",{children:["Select a test case to edit",o.jsx("br",{}),"or create a new one"]})]})})})]}):null}function ES({value:e,onChange:t}){var l,a;const{project:n}=it(),r=((l=n==null?void 0:n.app)==null?void 0:l.models)||[],i=(a=n==null?void 0:n.app)==null?void 0:a.default_model_id,s=r.find(c=>c.id===i);return o.jsxs("select",{value:e,onChange:c=>t(c.target.value),style:{width:"100%",maxWidth:400},children:[o.jsx("option",{value:"",children:s?`App Default (${s.model_name})`:"App Default"}),r.map(c=>o.jsx("option",{value:c.model_name,children:c.model_name},c.id)),o.jsx("option",{value:"gemini-2.0-flash",children:"gemini-2.0-flash"}),o.jsx("option",{value:"gemini-2.5-flash",children:"gemini-2.5-flash"}),o.jsx("option",{value:"gemini-2.5-pro",children:"gemini-2.5-pro"})]})}function zS({evalCase:e,evalSetId:t,projectId:n,result:r,isRunning:i,onUpdate:s,onDelete:l,onRun:a}){var C;const{project:c}=it(),[u,d]=_.useState(e),[p,f]=_.useState("assertions");_.useEffect(()=>{d(e)},[e.id]);const m=_.useCallback(x=>{d(v=>({...v,...x})),s(x)},[s]),w=()=>{const x={id:ox(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]};m({invocations:[...u.invocations,x]})},j=(x,v)=>{const T=[...u.invocations];T[x]={...T[x],...v},m({invocations:T})},N=x=>{m({invocations:u.invocations.filter((v,T)=>T!==x)})},g=x=>{const v=[...u.invocations];v[x]={...v[x],expected_tool_calls:[...v[x].expected_tool_calls,{name:"",args:{},args_match_mode:"subset"}]},m({invocations:v})},h=(x,v,T)=>{const R=[...u.invocations],E=[...R[x].expected_tool_calls];E[v]={...E[v],...T},R[x]={...R[x],expected_tool_calls:E},m({invocations:R})},y=(x,v)=>{const T=[...u.invocations];T[x]={...T[x],expected_tool_calls:T[x].expected_tool_calls.filter((R,E)=>E!==v)},m({invocations:T})},P=x=>x==null?"-":`${Math.round(x*100)}%`;return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(hs,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("input",{type:"text",value:u.name,onChange:x=>m({name:x.target.value}),placeholder:"Test case name"}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:a,disabled:i,children:[i?o.jsx(ms,{size:14,className:"spinning"}):o.jsx(Mn,{size:14}),"Run"]}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:l,children:o.jsx(Te,{size:14})})]}),o.jsxs("div",{className:"tabs",children:[o.jsxs("div",{className:`tab ${p==="assertions"?"active":""}`,onClick:()=>f("assertions"),children:[o.jsx(gs,{size:14,style:{marginRight:6}}),"Assertions (",u.invocations.length,")"]}),o.jsxs("div",{className:`tab ${p==="rubrics"?"active":""}`,onClick:()=>f("rubrics"),children:[o.jsx(au,{size:14,style:{marginRight:6}}),"LLM Judges"]}),o.jsxs("div",{className:`tab ${p==="docs"?"active":""}`,onClick:()=>f("docs"),children:[o.jsx(fs,{size:14,style:{marginRight:6}}),"Docs"]})]}),o.jsxs("div",{className:"editor-content",children:[p==="assertions"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:{display:"flex",gap:12,marginBottom:12},children:[o.jsxs("div",{style:{flex:1},children:[o.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"target_agent"}),o.jsxs("select",{value:u.target_agent||"",onChange:x=>m({target_agent:x.target.value||void 0}),style:{width:"100%"},children:[o.jsx("option",{value:"",children:"root_agent"}),(C=c==null?void 0:c.agents)==null?void 0:C.map(x=>o.jsx("option",{value:x.name,children:x.name},x.name))]})]}),o.jsxs("div",{style:{flex:1},children:[o.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"tags"}),o.jsx("input",{type:"text",value:u.tags.join(", "),onChange:x=>m({tags:x.target.value.split(",").map(v=>v.trim()).filter(Boolean)}),placeholder:"smoke, regression",style:{width:"100%"}})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("textarea",{value:u.description,onChange:x=>m({description:x.target.value}),placeholder:"What does this test verify?",style:{minHeight:40}})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:["session_input ",o.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(initial state)"})]}),o.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:o.jsx(ln,{height:"100%",defaultLanguage:"json",value:(()=>{var v;if((!u.initial_state||Object.keys(u.initial_state).length===0)&&((v=c==null?void 0:c.app)!=null&&v.state_keys)&&c.app.state_keys.length>0){const T={};return c.app.state_keys.forEach(R=>{R.default_value!==void 0?T[R.name]=R.default_value:T[R.name]=R.type==="string"?"":R.type==="number"?0:R.type==="boolean"?!1:R.type==="array"?[]:{}}),JSON.stringify(T,null,2)}return JSON.stringify(u.initial_state,null,2)})(),onChange:x=>{try{x&&m({initial_state:JSON.parse(x)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(gs,{size:14}),"Conversation Turns"]}),u.invocations.map((x,v)=>o.jsxs("div",{className:"invocation-card",children:[o.jsxs("div",{className:"invocation-number",children:[o.jsx("span",{children:v+1}),u.invocations.length>1&&o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>N(v),style:{padding:4},children:o.jsx(Te,{size:10})})]}),o.jsxs("div",{className:"invocation-content",children:[o.jsxs("div",{className:"invocation-row",children:[o.jsxs("div",{className:"form-section",children:[o.jsx("label",{children:"User Query"}),o.jsx("textarea",{value:x.user_message,onChange:T=>j(v,{user_message:T.target.value}),placeholder:"The message to send to the agent..."})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("label",{children:["Expected Response ",o.jsx("span",{style:{color:"var(--text-muted)",fontWeight:400},children:"(ROUGE-1)"})]}),o.jsx("textarea",{value:x.expected_response||"",onChange:T=>j(v,{expected_response:T.target.value||void 0}),placeholder:"Expected text (partial match)..."})]})]}),x.expected_tool_calls.map((T,R)=>o.jsxs("div",{className:"tool-call-compact",children:[o.jsx("input",{type:"text",value:T.name,onChange:E=>h(v,R,{name:E.target.value}),placeholder:"tool_name",className:"tool-name-input"}),o.jsxs("div",{className:"pillbox-toggle",children:[o.jsx("button",{className:`pill ${T.args_match_mode==="subset"?"active":""}`,onClick:()=>h(v,R,{args_match_mode:"subset"}),children:"Partial"}),o.jsx("button",{className:`pill ${T.args_match_mode==="exact"?"active":""}`,onClick:()=>h(v,R,{args_match_mode:"exact"}),children:"Exact"})]}),o.jsx("div",{className:"tool-args-editor",children:o.jsx(ln,{height:"22px",defaultLanguage:"json",value:JSON.stringify(T.args||{}),onChange:E=>{try{E&&h(v,R,{args:JSON.parse(E)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,wordWrap:"off",scrollbar:{vertical:"hidden",horizontal:"hidden"},overviewRulerLanes:0,hideCursorInOverviewRuler:!0,overviewRulerBorder:!1,renderLineHighlight:"none",fontSize:11,padding:{top:3,bottom:3},automaticLayout:!0}})}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>y(v,R),style:{padding:"4px 6px"},children:o.jsx(Te,{size:10})})]},R)),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>g(v),style:{marginTop:4},children:[o.jsx(Me,{size:12})," Assert Tool Call"]})]})]},x.id)),o.jsxs("button",{className:"btn btn-secondary",onClick:w,children:[o.jsx(Me,{size:14})," Add Turn"]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(Vi,{size:14,style:{marginRight:6}}),"final_session_state ",o.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(optional)"})]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Assert that session state contains these key-value pairs after all turns complete."}),o.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:o.jsx(ln,{height:"100%",defaultLanguage:"json",value:u.expected_final_state?JSON.stringify(u.expected_final_state,null,2):"{}",onChange:x=>{if(!x||x==="{}")m({expected_final_state:void 0});else try{m({expected_final_state:JSON.parse(x)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]})]}),p==="rubrics"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"form-section",style:{marginBottom:16},children:[{metric:"safety_v1",label:"safety_v1",default:.8,max:1},{metric:"hallucinations_v1",label:"hallucinations_v1",default:.8,max:1},{metric:"response_evaluation_score",label:"response_evaluation_score",default:3.5,max:5},{metric:"final_response_match_v2",label:"final_response_match_v2",default:.7,max:1}].map(({metric:x,label:v,default:T,max:R})=>{const E=(u.enabled_metrics||[]).find(z=>z.metric===x),k=(E==null?void 0:E.threshold)??T;return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:!!E,onChange:z=>{const M=[...u.enabled_metrics||[]];if(z.target.checked)M.push({metric:x,threshold:T});else{const q=M.findIndex(B=>B.metric===x);q!==-1&&M.splice(q,1)}m({enabled_metrics:M})}}),o.jsx("span",{className:"toggle-slider"})]}),o.jsx("span",{style:{fontSize:12,opacity:E?1:.5,minWidth:100},children:v}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:E?1:.4},children:"≥"}),o.jsx("input",{type:"number",min:R===5?1:0,max:R,step:.1,value:k,disabled:!E,onChange:z=>{const M=[...u.enabled_metrics||[]],q=M.findIndex(B=>B.metric===x);q!==-1&&(M[q]={...M[q],threshold:parseFloat(z.target.value)||0},m({enabled_metrics:M}))},style:{width:60,textAlign:"center",opacity:E?1:.3,padding:"2px 4px",fontSize:11}})]},x)})}),o.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--border-color)",margin:"16px 0"}}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Custom Rubrics"}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Natural language criteria evaluated by an LLM judge. Returns pass/fail per rubric."}),u.rubrics.map((x,v)=>o.jsxs("div",{className:"tool-call-row",style:{marginBottom:8},children:[o.jsx("input",{type:"text",value:x.rubric,onChange:T=>{const R=[...u.rubrics];R[v]={rubric:T.target.value},m({rubrics:R})},placeholder:"e.g., The response mentions the return policy",style:{flex:1}}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>m({rubrics:u.rubrics.filter((T,R)=>R!==v)}),children:o.jsx(Te,{size:12})})]},v)),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>m({rubrics:[...u.rubrics,{rubric:""}]}),children:[o.jsx(Me,{size:12})," Add Rubric"]})]})]}),p==="docs"&&o.jsxs("div",{style:{fontSize:13,lineHeight:1.6,color:"var(--text-secondary)",overflowY:"auto",maxHeight:"100%"},children:[o.jsx("h3",{style:{marginBottom:16,color:"var(--text-primary)"},children:"Evaluation Test Case Guide"}),o.jsxs("section",{style:{marginBottom:24,padding:12,background:"rgba(var(--accent-primary-rgb), 0.1)",borderRadius:"var(--radius-md)",border:"1px solid var(--accent-primary)"},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Quick Overview"}),o.jsxs("p",{children:["Each test case simulates a ",o.jsx("strong",{children:"multi-turn conversation"})," with an agent. For each turn (invocation), you provide a user message and define what you expect the agent to do."]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Invocations"})," = conversation turns (user messages)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Expected Response"})," = the agent's ",o.jsx("em",{children:"final text reply"})," for that turn"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Expected Tool Calls"})," = tools the agent should invoke during that turn"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Session State"})," = test the ",o.jsx("em",{children:"final state"})," after ALL turns complete"]})]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:'📝 What is "Expected Response"?'}),o.jsxs("p",{children:["The ",o.jsx("strong",{children:"Expected Response"})," is matched against the agent's ",o.jsx("strong",{children:"final response"})," for that specific turn — NOT every message."]}),o.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[o.jsx("p",{style:{marginBottom:8},children:o.jsx("strong",{children:"During one turn, an agent may:"})}),o.jsxs("ul",{style:{marginLeft:20,marginBottom:12},children:[o.jsx("li",{children:"Send intermediate thinking/reasoning messages"}),o.jsx("li",{children:"Call multiple tools"}),o.jsx("li",{children:"Transfer to sub-agents (who may respond)"}),o.jsxs("li",{children:["Finally send a ",o.jsx("em",{children:"concluding response"})]})]}),o.jsxs("p",{children:["Only the ",o.jsx("strong",{children:"last text response"})," from the agent for that turn is compared against your Expected Response."]})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Tip: If you need to verify intermediate steps, use Tool Trajectory matching or custom Rubrics."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🔄 Response Matching (ROUGE-1)"}),o.jsxs("p",{children:["The ",o.jsx("code",{children:"response_match_score"})," uses ",o.jsx("strong",{children:"ROUGE-1 F1 scoring"})," — fuzzy word-level matching:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:"Tokenizes both expected and actual responses into words"}),o.jsx("li",{children:"Calculates word overlap (not exact string match)"}),o.jsx("li",{children:"Returns a score from 0.0 to 1.0"})]}),o.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[o.jsx("p",{children:o.jsx("strong",{children:"Example:"})}),o.jsxs("p",{children:["Expected: ",o.jsx("code",{children:'"The weather in Paris is sunny today"'})]}),o.jsxs("p",{children:["Actual: ",o.jsx("code",{children:'"Today in Paris, expect sunny weather"'})]}),o.jsx("p",{style:{marginTop:8,color:"var(--success)"},children:"✓ High ROUGE-1 score (same words, different order)"})]}),o.jsxs("p",{style:{marginTop:8},children:["A threshold of ",o.jsx("strong",{children:"0.7"})," means 70% word overlap is required to pass."]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🛠️ Tool Trajectory Matching"}),o.jsxs("p",{children:["The ",o.jsx("code",{children:"tool_trajectory_avg_score"})," verifies the agent called expected tools. Match types:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Exact"})," — Same tools in same order, no extras allowed"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"In Order"})," — Expected tools appear in order, extras allowed between"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Any Order"})," — All expected tools present, any order, extras allowed"]})]}),o.jsx("p",{style:{marginTop:8},children:"For each tool, you can match by:"}),o.jsxs("ul",{style:{marginLeft:20,marginTop:4},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Name Only"})," — Just check the tool was called"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Exact Args"})," — Arguments must match exactly (provide JSON)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Args Subset"})," — Your expected args must be present in actual args"]})]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💾 Session State Testing"}),o.jsxs("p",{children:[o.jsx("strong",{children:"Initial State"})," (Settings tab) — Pre-populate session state before running the test:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:"Set user preferences or context"}),o.jsx("li",{children:"Simulate a specific scenario"}),o.jsx("li",{children:"Test state-dependent behavior"})]}),o.jsxs("p",{style:{marginTop:12},children:[o.jsx("strong",{children:"Expected Final State"})," — Verified at the ",o.jsx("em",{children:"very end"})," of the test case, ",o.jsx("strong",{children:"after ALL invocations complete"}),"."]}),o.jsx("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8,borderLeft:"3px solid var(--warning)"},children:o.jsxs("p",{style:{margin:0},children:[o.jsx("strong",{children:"Important:"})," State is tested once after the entire conversation, NOT after each turn. To test state changes per-turn, use separate test cases."]})})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Target Agent (Settings tab)"}),o.jsxs("p",{children:["By default, tests run against the ",o.jsx("strong",{children:"root_agent"})," of your App. You can select a specific sub-agent to test in isolation:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"root_agent"})," — Test the full agent hierarchy (default)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Specific agent"})," — Unit test individual agents"]})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Useful for testing sub-agents independently before integrating into the full system."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📋 Custom Rubrics"}),o.jsx("p",{children:"Rubrics are custom yes/no criteria evaluated by an LLM judge. Examples:"}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:'"Does the response mention the product price?"'}),o.jsx("li",{children:'"Is the tone professional and helpful?"'}),o.jsx("li",{children:'"Does the response avoid mentioning competitors?"'})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Note: Rubric evaluation requires LLM-judged metrics to be enabled in the Eval Set."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📊 Available Metrics"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Metric"}),o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Type"}),o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Description"})]})}),o.jsx("tbody",{children:Object.keys(tn).map(x=>o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("td",{style:{padding:"8px 4px",fontFamily:"var(--font-mono)",fontSize:11},children:x}),o.jsx("td",{style:{padding:"8px 4px"},children:tn[x].requiresJudge?o.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--accent-primary)",color:"white",borderRadius:4},children:"LLM Judge"}):o.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--bg-tertiary)",borderRadius:4},children:"Built-in"})}),o.jsx("td",{style:{padding:"8px 4px",color:"var(--text-muted)"},children:tn[x].description})]},x))})]})]}),o.jsxs("section",{children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💡 Tips"}),o.jsxs("ul",{style:{marginLeft:20},children:[o.jsx("li",{children:"Start with simple single-turn tests, then add complexity"}),o.jsx("li",{children:'Use "In Order" matching for most tool trajectory tests'}),o.jsx("li",{children:"Lower ROUGE thresholds (0.5-0.6) for creative/varied responses"}),o.jsx("li",{children:"Higher thresholds (0.8-0.9) for factual/precise responses"}),o.jsx("li",{children:"Use tags to organize tests by feature or priority"}),o.jsx("li",{children:"Test sub-agents individually using Target Agent selector"})]})]})]})]}),r&&o.jsxs("div",{className:"result-panel",children:[o.jsxs("div",{className:`result-header ${r.passed?"passed":"failed"}`,children:[r.passed?o.jsxs(o.Fragment,{children:[o.jsx(Vi,{size:18})," ",o.jsx("strong",{children:"Passed"})]}):o.jsxs(o.Fragment,{children:[o.jsx(xs,{size:18})," ",o.jsx("strong",{children:"Failed"})]}),o.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:12},children:[r.total_tokens?o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},title:"Total tokens used",children:[r.total_tokens.toLocaleString()," tokens"]}):null,o.jsxs("span",{style:{color:"var(--text-muted)",fontSize:12},children:[r.duration_ms.toFixed(0),"ms"]}),r.session_id&&o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{window.location.href=`/project/${c==null?void 0:c.id}/run?session=${r.session_id}`},title:"View this session in the Run panel",style:{fontSize:11},children:[o.jsx(c0,{size:12}),"View Session"]})]})]}),o.jsx("div",{className:"result-scores",children:r.metric_results.map((x,v)=>{var T;return o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:`score-value ${x.passed?"passed":"failed"}`,children:P(x.score)}),o.jsx("div",{className:"score-label",children:((T=tn[x.metric])==null?void 0:T.name)||x.metric}),x.error&&o.jsx("div",{style:{fontSize:10,color:"var(--error)",marginTop:4},children:x.error})]},v)})}),r.invocation_results.map((x,v)=>o.jsxs("div",{className:"result-details",children:[o.jsxs("h5",{children:["Turn ",v+1,": ",x.user_message.length>50?x.user_message.slice(0,50)+"…":x.user_message]}),x.metric_results.length>0&&o.jsx("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:x.metric_results.map((T,R)=>{var E;return o.jsxs("span",{style:{fontSize:11,padding:"2px 6px",borderRadius:"var(--radius-sm)",background:T.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:T.passed?"var(--success)":"var(--error)"},children:[((E=tn[T.metric])==null?void 0:E.name)||T.metric,": ",P(T.score)]},R)})}),o.jsxs("div",{className:"detail-box",children:[o.jsx("strong",{children:"Actual Response:"}),`
`,x.actual_response||"(no response)",`

`,x.actual_tool_calls.length>0&&o.jsxs(o.Fragment,{children:[o.jsx("strong",{children:"Tool Calls:"}),`
`,x.actual_tool_calls.map((T,R)=>`  ${R+1}. ${T.name}(${JSON.stringify(T.args)})
`).join("")]})]})]},v)),r.error&&o.jsxs("div",{className:"result-details",children:[o.jsx("h5",{style:{color:"var(--error)"},children:"Error"}),o.jsx("div",{className:"detail-box",style:{color:"var(--error)"},children:r.error})]})]})]})}function TS({evalSet:e,projectId:t,result:n,isRunning:r,caseResults:i,onUpdate:s,onDelete:l,onRun:a,onExport:c}){var m,w,j;const[u,d]=_.useState(e.name);_.useEffect(()=>{d(e.name)},[e.id]);const p=_.useCallback(()=>{u!==e.name&&s({name:u})},[u,e.name,s]),f=N=>N==null?"-":`${Math.round(N*100)}%`;return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(eg,{size:20,style:{color:"var(--accent-secondary)"}}),o.jsx("input",{type:"text",value:u,onChange:N=>d(N.target.value),onBlur:p,placeholder:"Eval set name"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Export as JSON (compatible with adk eval)",children:o.jsx(Bs,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:a,disabled:r,children:[r?o.jsx(ms,{size:14,className:"spinning"}):o.jsx(Mn,{size:14}),"Run All"]}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:l,children:o.jsx(Te,{size:14})})]}),o.jsxs("div",{className:"editor-content",children:[o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("textarea",{value:e.description,onChange:N=>s({description:N.target.value}),placeholder:"Description of this evaluation set...",style:{minHeight:40}})]}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"LLM Judge Model"}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Model used for LLM-judged metrics (safety, hallucinations, etc.)."}),o.jsx(ES,{value:((m=e.eval_config)==null?void 0:m.judge_model)||"",onChange:N=>s({eval_config:{...e.eval_config,judge_model:N}})})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(rg,{size:14})," Evaluation Metrics"]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Configure which metrics to use and their pass thresholds."}),Object.keys(tn).map(N=>{var C,x,v;const g=tn[N],h=(x=(C=e.eval_config)==null?void 0:C.metrics)==null?void 0:x.find(T=>T.metric===N),y=(h==null?void 0:h.enabled)??!1,P=((v=h==null?void 0:h.criterion)==null?void 0:v.threshold)??.7;return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:y,onChange:T=>{var k;const R=[...((k=e.eval_config)==null?void 0:k.metrics)||[]],E=R.findIndex(z=>z.metric===N);T.target.checked?E===-1?R.push({metric:N,enabled:!0,criterion:{threshold:.7}}):R[E]={...R[E],enabled:!0}:E!==-1&&(R[E]={...R[E],enabled:!1}),s({eval_config:{...e.eval_config,metrics:R}})}}),o.jsx("span",{className:"toggle-slider"})]}),o.jsxs("span",{style:{fontSize:12,opacity:y?1:.5,minWidth:140,fontWeight:y?500:400},children:[g.name,g.requiresJudge&&o.jsx("span",{style:{fontSize:9,marginLeft:4,color:"var(--accent-primary)"},children:"LLM"})]}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:y?1:.4},children:"≥"}),o.jsx("input",{type:"number",min:0,max:1,step:.1,value:P,disabled:!y,onChange:T=>{var k;const R=[...((k=e.eval_config)==null?void 0:k.metrics)||[]],E=R.findIndex(z=>z.metric===N);E!==-1&&(R[E]={...R[E],criterion:{...R[E].criterion,threshold:parseFloat(T.target.value)||.7}},s({eval_config:{...e.eval_config,metrics:R}}))},style:{width:60,textAlign:"center",opacity:y?1:.3,padding:"2px 4px",fontSize:11}})]},N)}),o.jsxs("div",{className:"form-row",style:{marginTop:16},children:[o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Default Trajectory Match Type"}),o.jsxs("select",{value:((w=e.eval_config)==null?void 0:w.default_trajectory_match_type)||"in_order",onChange:N=>s({eval_config:{...e.eval_config,default_trajectory_match_type:N.target.value}}),children:[o.jsx("option",{value:"exact",children:"Exact (same order, no extras)"}),o.jsx("option",{value:"in_order",children:"In Order (extras allowed between)"}),o.jsx("option",{value:"any_order",children:"Any Order (all present, any order)"})]})]}),o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Number of Runs"}),o.jsx("input",{type:"number",min:1,max:10,value:((j=e.eval_config)==null?void 0:j.num_runs)||1,onChange:N=>s({eval_config:{...e.eval_config,num_runs:parseInt(N.target.value)||1}})}),o.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:"Run each test multiple times for statistical reliability."})]})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(x0,{size:14})," Coverage Summary"]}),n?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"result-scores",children:[o.jsxs("div",{className:"score-card",children:[o.jsxs("div",{className:"score-value",style:{color:"var(--accent-primary)"},children:[n.passed_cases,"/",n.total_cases]}),o.jsx("div",{className:"score-label",children:"Cases Passed"})]}),o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:`score-value ${n.overall_pass_rate>=.8?"passed":"failed"}`,children:f(n.overall_pass_rate)}),o.jsx("div",{className:"score-label",children:"Pass Rate"})]}),Object.entries(n.metric_avg_scores||{}).map(([N,g])=>{var h;return o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:"score-value",children:f(g)}),o.jsxs("div",{className:"score-label",children:["Avg ",((h=tn[N])==null?void 0:h.name)||N]})]},N)})]}),o.jsxs("div",{style:{marginTop:16},children:[o.jsx("div",{style:{marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Overall Pass Rate"}),o.jsx("div",{className:"coverage-bar",children:o.jsx("div",{className:`coverage-fill ${n.overall_pass_rate>=.8?"passed":"failed"}`,style:{width:`${n.overall_pass_rate*100}%`}})})]}),Object.entries(n.metric_pass_rates||{}).length>0&&o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Metric Pass Rates"}),Object.entries(n.metric_pass_rates).map(([N,g])=>{var h;return o.jsxs("div",{style:{marginBottom:8},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4},children:[o.jsx("span",{children:((h=tn[N])==null?void 0:h.name)||N}),o.jsx("span",{children:f(g)})]}),o.jsx("div",{className:"coverage-bar",children:o.jsx("div",{className:`coverage-fill ${g>=.8?"passed":"failed"}`,style:{width:`${g*100}%`}})})]},N)})]}),o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Individual Results"}),o.jsxs("table",{style:{width:"100%",fontSize:12,borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Test Case"}),o.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Metrics"}),o.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Status"})]})}),o.jsx("tbody",{children:n.case_results.map(N=>o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("td",{style:{padding:"8px 4px"},children:N.eval_case_name}),o.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:N.metric_results.map((g,h)=>o.jsx("span",{style:{fontSize:10,padding:"2px 4px",marginRight:4,borderRadius:"var(--radius-sm)",background:g.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:g.passed?"var(--success)":"var(--error)"},children:f(g.score)},h))}),o.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:N.passed?o.jsx(Vi,{size:14,style:{color:"var(--success)"}}):N.error?o.jsx(fs,{size:14,style:{color:"var(--warning)"}}):o.jsx(xs,{size:14,style:{color:"var(--error)"}})})]},N.eval_case_id))})]})]})]}):o.jsxs("div",{style:{textAlign:"center",padding:"32px",color:"var(--text-muted)",background:"var(--bg-tertiary)",borderRadius:"var(--radius-md)"},children:[o.jsx(au,{size:32,style:{marginBottom:8,opacity:.3}}),o.jsx("p",{children:"Run the evaluation set to see coverage metrics"})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:["Test Cases (",e.eval_cases.length,")"]}),e.eval_cases.length===0?o.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"No test cases yet. Add cases to this eval set to start testing."}):o.jsx("ul",{style:{listStyle:"none",padding:0},children:e.eval_cases.map(N=>{const g=i.get(N.id);return o.jsxs("li",{style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",background:"var(--bg-tertiary)",borderRadius:"var(--radius-sm)",marginBottom:8},children:[g?g.passed?o.jsx(Vi,{size:14,style:{color:"var(--success)"}}):o.jsx(xs,{size:14,style:{color:"var(--error)"}}):o.jsx(hs,{size:14,style:{color:"var(--text-muted)"}}),o.jsx("span",{style:{flex:1},children:N.name}),o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},children:[N.invocations.length," turn(s)"]})]},N.id)})})]})]})]})}function PS(){const{project:e,setProject:t}=it(),[n,r]=_.useState(""),[i,s]=_.useState(!0),[l,a]=_.useState(!1),[c,u]=_.useState(null),[d,p]=_.useState(!1);if(!e)return null;_.useEffect(()=>{f()},[e.id]);async function f(){s(!0),u(null);try{const h=await $h(e.id);r(h),a(!1)}catch(h){u(h.message)}finally{s(!1)}}function m(h){h!==void 0&&(r(h),a(!0),u(null))}async function w(){s(!0),u(null);try{const h=await Dh(e.id,n);t(h),a(!1)}catch(h){u(h.message)}finally{s(!1)}}function j(){navigator.clipboard.writeText(n),p(!0),setTimeout(()=>p(!1),2e3)}function N(){const h=new Blob([n],{type:"text/yaml"}),y=URL.createObjectURL(h),P=document.createElement("a");P.href=y,P.download=`${e.name}.yaml`,P.click(),URL.revokeObjectURL(y)}function g(){const h=document.createElement("input");h.type="file",h.accept=".yaml,.yml",h.onchange=async y=>{var x;const P=(x=y.target.files)==null?void 0:x[0];if(!P)return;const C=await P.text();r(C),a(!0)},h.click()}return o.jsxs("div",{className:"yaml-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"yaml-header",children:[o.jsxs("div",{className:"yaml-title",children:[o.jsx("h3",{children:"Project Configuration"}),l&&o.jsxs("span",{className:"status-badge warning",children:[o.jsx(fs,{size:12}),"Unsaved changes"]}),c&&o.jsxs("span",{className:"status-badge error",children:[o.jsx(fs,{size:12}),c]}),d&&o.jsxs("span",{className:"status-badge success",children:[o.jsx(Xh,{size:12}),"Copied!"]})]}),o.jsxs("div",{className:"yaml-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:j,title:"Copy to clipboard",children:[o.jsx(Zh,{size:14}),"Copy"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:N,title:"Download YAML",children:[o.jsx(Bs,{size:14}),"Download"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:g,title:"Upload YAML",children:[o.jsx(Us,{size:14}),"Upload"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:f,title:"Reload from server",children:[o.jsx(wn,{size:14}),"Reload"]}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:w,disabled:!l||i,children:"Apply Changes"})]})]}),o.jsx("div",{className:"yaml-editor",children:o.jsx(ln,{height:"100%",language:"yaml",theme:"vs-dark",value:n,onChange:m,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),o.jsxs("div",{className:"yaml-info",children:[o.jsx("p",{children:"This YAML represents your entire project configuration including the app, agents, tools, and state keys."}),o.jsxs("p",{children:["You can edit the YAML directly, then click ",o.jsx("code",{children:"Apply Changes"})," to update the project. Use ",o.jsx("code",{children:"Download"})," to save a backup or ",o.jsx("code",{children:"Upload"})," to import a configuration."]})]})]})}function ef(e){return e.replace(/\\/g,"\\\\").replace(/"""/g,'\\"\\"\\"')}function LS(e,t="model"){if(!e)return"";const n=[`model="${e.model_name}"`];return e.api_base&&n.push(`api_base="${e.api_base}"`),e.temperature!=null&&n.push(`temperature=${e.temperature}`),e.max_output_tokens!=null&&n.push(`max_output_tokens=${e.max_output_tokens}`),e.top_p!=null&&n.push(`top_p=${e.top_p}`),e.top_k!=null&&n.push(`top_k=${e.top_k}`),e.provider==="litellm"?`${t} = LiteLlm(
    ${n.join(`,
    `)}
)`:e.provider==="anthropic"?`${t} = Claude(
    ${n.join(`,
    `)}
)`:`${t} = "${e.model_name}"  # Gemini model`}function AS(e,t){var n,r;if(e.type==="builtin")return e.name||"";if(e.type==="function")return e.name||"custom_tool";if(e.type==="agent"){const i=t.agents.find(s=>s.id===e.agent_id);return i?`AgentTool(agent=${i.name}_agent)`:"AgentTool(agent=sub_agent)"}else{if(e.type==="mcp")return(n=e.server)!=null&&n.name?`${e.server.name}_tools`:"";if(e.type==="skillset"){const i=e.skillset_id,s=(r=t.skillsets)==null?void 0:r.find(l=>l.id===i);return s?`${s.name.replace(/[^a-zA-Z0-9_]/g,"_")}_skillset`:""}}return""}function RS(e,t,n){const r=n.get(e.id)||`${e.name}_agent`;if(e.type==="LlmAgent"){const i=e,s=[`name="${e.name}"`];i.model&&s.push(`model=${e.name}_model`),i.instruction&&s.push(`instruction="""${ef(i.instruction)}"""`),i.description&&s.push(`description="${ef(i.description)}"`),i.output_key&&s.push(`output_key="${i.output_key}"`);const l=i.tools.map(c=>AS(c,t)).filter(c=>c&&!c.startsWith("#"));if(l.length>0&&s.push(`tools=[${l.join(", ")}]`),i.sub_agents&&i.sub_agents.length>0){const c=i.sub_agents.map(u=>n.get(u)||"sub_agent").join(", ");s.push(`sub_agents=[${c}]`)}i.include_contents==="none"&&s.push('include_contents="none"'),i.disallow_transfer_to_parent&&s.push("disallow_transfer_to_parent=True"),i.disallow_transfer_to_peers&&s.push("disallow_transfer_to_peers=True");const a={before_agent_callbacks:"before_agent_callback",after_agent_callbacks:"after_agent_callback",before_model_callbacks:"before_model_callback",after_model_callbacks:"after_model_callback",before_tool_callbacks:"before_tool_callback",after_tool_callbacks:"after_tool_callback"};for(const[c,u]of Object.entries(a)){const d=i[c]||[];if(d.length>0){const p=d.map(f=>{const m=t.custom_callbacks.find(w=>w.module_path===f.module_path);return m?`"${f.module_path}.${m.name}"`:`"${f.module_path}"`}).join(", ");if(d.length===1){const f=t.custom_callbacks.find(w=>w.module_path===d[0].module_path),m=f?`${d[0].module_path}.${f.name}`:d[0].module_path;s.push(`${u}="${m}"`)}else s.push(`${u}=[${p}]`)}}return`${r} = Agent(
    ${s.join(`,
    `)}
)`}else if(e.type==="SequentialAgent"){const i=e.sub_agents.map(s=>n.get(s)||"sub_agent").join(", ");return`${r} = SequentialAgent(
    name="${e.name}",
    sub_agents=[${i}]
)`}else if(e.type==="LoopAgent"){const i=e,s=[`name="${e.name}"`],l=e.sub_agents.map(a=>n.get(a)||"sub_agent").join(", ");return s.push(`sub_agents=[${l}]`),i.max_iterations&&s.push(`max_iterations=${i.max_iterations}`),`${r} = LoopAgent(
    ${s.join(`,
    `)}
)`}else if(e.type==="ParallelAgent"){const i=e.sub_agents.map(s=>n.get(s)||"sub_agent").join(", ");return`${r} = ParallelAgent(
    name="${e.name}",
    sub_agents=[${i}]
)`}return`# Unknown agent type: ${e.type}`}function IS(e){const t=[];return e.connection_type==="stdio"?(t.push(`${e.name}_tools = McpToolset(`),t.push("    connection_params=StdioConnectionParams("),t.push("        server_params=StdioServerParameters("),e.command&&t.push(`            command="${e.command}",`),e.args.length>0&&t.push(`            args=${JSON.stringify(e.args)},`),Object.keys(e.env).length>0&&t.push(`            env=${JSON.stringify(e.env)},`),t.push("        ),"),e.timeout&&t.push(`        timeout=${e.timeout},`),t.push("    ),"),t.push(")")):e.connection_type==="sse"&&(t.push(`${e.name}_tools = McpToolset(`),t.push("    connection_params=SseConnectionParams("),e.url&&t.push(`        url="${e.url}",`),e.timeout&&t.push(`        timeout=${e.timeout},`),t.push("    ),"),t.push(")")),t.join(`
`)}function MS(e,t){const n=[];return n.push(`# SkillSet: ${e.name}`),n.push(`${e.name.replace(/[^a-zA-Z0-9_]/g,"_")}_manager = KnowledgeServiceManager()`),n.push(`${e.name.replace(/[^a-zA-Z0-9_]/g,"_")}_skillset = SkillSet(`),n.push(`    skillset_id="${e.id}",`),n.push(`    project_id="${t.id}",`),n.push(`    manager=${e.name.replace(/[^a-zA-Z0-9_]/g,"_")}_manager,`),e.embedding_model?n.push(`    model_name="${e.embedding_model}",`):n.push('    model_name="text-embedding-004",'),n.push(`    search_enabled=${e.search_enabled?"True":"False"},`),n.push(`    preload_enabled=${e.preload_enabled?"True":"False"},`),e.preload_top_k&&n.push(`    preload_top_k=${e.preload_top_k},`),e.preload_min_score&&n.push(`    preload_min_score=${e.preload_min_score},`),n.push(")"),n.join(`
`)}function OS(e){const t=[];t.push('"""'),t.push(`${e.name} - Generated by ADK Playground`),e.description&&(t.push(""),t.push(e.description)),t.push('"""'),t.push("");const n=e.app.env_vars||{},r=Object.keys(n);r.length>0&&(t.push("import os"),t.push(""),t.push("# Environment Variables"),t.push("# Set these before running, or uncomment and add values:"),r.forEach(v=>{const T=n[v];if(T){const E=v.toLowerCase().includes("key")||v.toLowerCase().includes("secret")?"***":T;t.push(`os.environ["${v}"] = "${E}"  # Set your ${v}`)}else t.push(`# os.environ["${v}"] = ""  # TODO: Set your ${v}`)}),t.push(""));const i=new Set;i.add("from google.adk.agents import Agent");const s=e.agents.some(v=>v.type==="SequentialAgent"),l=e.agents.some(v=>v.type==="LoopAgent"),a=e.agents.some(v=>v.type==="ParallelAgent");s&&i.add("from google.adk.agents import SequentialAgent"),l&&i.add("from google.adk.agents import LoopAgent"),a&&i.add("from google.adk.agents import ParallelAgent"),e.agents.some(v=>{var T;return v.type==="LlmAgent"&&((T=v.model)==null?void 0:T.provider)==="litellm"})&&i.add("from google.adk.models.lite_llm import LiteLlm"),e.agents.some(v=>v.type==="LlmAgent"&&v.tools.some(T=>T.type==="agent"))&&i.add("from google.adk.tools import AgentTool");const d=new Set;if(e.agents.forEach(v=>{v.type==="LlmAgent"&&v.tools.forEach(T=>{T.type==="builtin"&&T.name&&d.add(T.name)})}),d.has("exit_loop")&&i.add("from google.adk.tools import exit_loop"),d.has("google_search")&&i.add("from google.adk.tools import google_search"),e.mcp_servers.length>0){i.add("from google.adk.tools.mcp_tool.mcp_toolset import McpToolset");const v=e.mcp_servers.some(R=>R.connection_type==="stdio"),T=e.mcp_servers.some(R=>R.connection_type==="sse");v&&(i.add("from google.adk.tools.mcp_tool.mcp_session_manager import StdioConnectionParams"),i.add("from mcp import StdioServerParameters")),T&&i.add("from google.adk.tools.mcp_tool.mcp_session_manager import SseConnectionParams")}e.skillsets&&e.skillsets.length>0;const f=new Set;e.agents.forEach(v=>{"tools"in v&&v.tools&&v.tools.forEach(T=>{T.type==="skillset"&&f.add(T.skillset_id)})}),f.size>0&&(i.add("from skillset import SkillSet"),i.add("from knowledge_service import KnowledgeServiceManager")),i.add("from google.adk.apps import App");const m=e.app.plugins.length>0;m&&e.app.plugins.forEach(v=>{v.type==="ReflectAndRetryToolPlugin"&&i.add("from google.adk.plugins import ReflectAndRetryToolPlugin")});const w=Array.from(i).sort();t.push(...w),t.push(""),t.push("");const j=new Map;e.agents.forEach(v=>{const T=v.name.endsWith("_agent")?v.name:`${v.name}_agent`;j.set(v.id,T)});const N=[],g=new Set;function h(v){if(g.has(v))return;const T=e.agents.find(R=>R.id===v);T&&(T.sub_agents.forEach(R=>h(R)),g.add(v),N.push(T))}e.agents.forEach(v=>h(v.id));const y=new Map;N.forEach(v=>{v.type==="LlmAgent"&&v.tools.forEach(T=>{T.type==="mcp"&&T.server&&y.set(T.server.name,T.server)})}),y.size>0&&(t.push("# MCP Server Toolsets"),y.forEach(v=>{t.push(IS(v)),t.push("")}),t.push(""));const P=new Set;N.forEach(v=>{v.type==="LlmAgent"&&v.tools.forEach(T=>{T.type==="skillset"&&P.add(T.skillset_id)})}),P.size>0&&e.skillsets&&(t.push("# SkillSet Toolsets"),t.push("# Note: SkillSets store knowledge in ~/.adk-playground/skillsets/{project_id}/"),P.forEach(v=>{var R;const T=(R=e.skillsets)==null?void 0:R.find(E=>E.id===v);T&&(t.push(MS(T,e)),t.push(""))}),t.push("")),e.custom_tools.length>0&&(t.push("# Custom Tools"),e.custom_tools.forEach(v=>{t.push(v.code),t.push("")}),t.push("")),e.custom_callbacks&&e.custom_callbacks.length>0&&(t.push("# Custom Callbacks"),e.custom_callbacks.forEach(v=>{t.push(v.code),t.push("")}),t.push("")),t.push("# Models"),N.forEach(v=>{v.type==="LlmAgent"&&v.model&&(t.push(LS(v.model,`${v.name}_model`)),t.push(""))}),t.push(""),t.push("# Agents"),N.forEach(v=>{t.push(RS(v,e,j)),t.push("")});const C=e.agents.find(v=>v.id===e.app.root_agent_id),x=C?j.get(C.id):"root_agent";if(t.push(""),t.push(""),t.push("# App Configuration"),t.push("app = App("),t.push(`    name="${e.app.name}",`),t.push(`    root_agent=${x},`),m){const v=e.app.plugins.map(T=>T.type==="ReflectAndRetryToolPlugin"?`        ReflectAndRetryToolPlugin(max_retries=${T.max_retries||3})`:`        # ${T.type}()`);t.push("    plugins=["),t.push(v.join(`,
`)),t.push("    ],")}return t.push(")"),t.join(`
`)}function $S(){const{project:e}=it(),[t,n]=_.useState(!1);if(!e)return null;const r=_.useMemo(()=>OS(e),[e]);function i(){navigator.clipboard.writeText(r),n(!0),setTimeout(()=>n(!1),2e3)}function s(){const l=new Blob([r],{type:"text/x-python"}),a=URL.createObjectURL(l),c=document.createElement("a");c.href=a,c.download=`${e.name}_agent.py`,c.click(),URL.revokeObjectURL(a)}return o.jsxs("div",{className:"code-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"code-header",children:[o.jsxs("div",{className:"code-title",children:[o.jsx(In,{size:16}),o.jsx("h3",{children:"Python Code"}),o.jsx("span",{className:"badge",children:"Generated"}),t&&o.jsxs("span",{className:"status-badge success",children:[o.jsx(Xh,{size:12}),"Copied!"]})]}),o.jsxs("div",{className:"code-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:i,title:"Copy to clipboard",children:[o.jsx(Zh,{size:14}),"Copy"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:s,title:"Download Python file",children:[o.jsx(Bs,{size:14}),"Download"]})]})]}),o.jsx("div",{className:"code-editor",children:o.jsx(ln,{height:"100%",language:"python",theme:"vs-dark",value:r,options:{readOnly:!0,minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),o.jsxs("div",{className:"code-info",children:[o.jsx("p",{children:"This is the Python code equivalent of your project configuration. You can use this code directly with ADK."}),o.jsxs("p",{children:["Place this in a file named ",o.jsx("code",{children:"agent.py"})," inside your agent directory, then run with ",o.jsx("code",{children:"adk web ."})," or ",o.jsx("code",{children:"adk run your_agent"}),"."]})]})]})}const DS=[{id:"app",label:"App",icon:rg},{id:"agents",label:"Agents",icon:Zn},{id:"tools",label:"Tools",icon:Gt},{id:"callbacks",label:"Callbacks",icon:In},{id:"run",label:"Run",icon:tg},{id:"skillsets",label:"SkillSets",icon:a0},{id:"eval",label:"Evaluate",icon:Wa},{id:"yaml",label:"YAML",icon:d0},{id:"code",label:"Code",icon:In}],FS=["app","agents","tools","callbacks","run","skillsets","eval","yaml","code"];function Vl(){var B,Y;const{projectId:e,tab:t,itemId:n}=u1(),r=nu(),{project:i,setProject:s,activeTab:l,setActiveTab:a,hasUnsavedChanges:c,setHasUnsavedChanges:u,selectedAgentId:d,setSelectedAgentId:p,selectedToolId:f,setSelectedToolId:m}=it(),[w,j]=_.useState(!0),[N,g]=_.useState(!1),[h,y]=_.useState(!1),[P,C]=_.useState(null),x=_.useRef(!0),v=_.useRef(null);_.useEffect(()=>{t&&FS.includes(t)?a(t):!t&&e&&r(`/project/${e}/${l}`,{replace:!0})},[t,e]),_.useEffect(()=>{t==="agents"&&n?p(n):t==="tools"&&n&&m(n)},[t,n]);function T(A){a(A),A==="agents"&&d?r(`/project/${e}/${A}/${d}`,{replace:!0}):A==="tools"&&f?r(`/project/${e}/${A}/${f}`,{replace:!0}):r(`/project/${e}/${A}`,{replace:!0})}function R(A){A?r(`/project/${e}/${l}/${A}`,{replace:!0}):r(`/project/${e}/${l}`,{replace:!0})}_.useEffect(()=>(e&&E(e),()=>{s(null),u(!1)}),[e]);async function E(A){x.current=!0;try{const $=await Ah(A);s($),v.current=JSON.stringify($),u(!1)}catch($){console.error("Failed to load project:",$),r("/")}finally{j(!1),setTimeout(()=>{x.current=!1},100)}}async function k(){if(i){g(!0);try{const{eval_sets:A,...$}=i;await Da(i.id,$),v.current=JSON.stringify(i),u(!1)}catch(A){console.error("Failed to save project:",A)}finally{g(!1)}}}async function z(){if(i){y(!0),C(null);try{let A=0,$=0;for(const I of i.eval_sets||[]){if(I.eval_cases.length===0)continue;const b=await Ve.post(`/projects/${i.id}/eval-sets/${I.id}/run`,{});if(b.result){A+=b.result.passed_cases||0,$+=b.result.total_cases||0;try{await Ve.post(`/projects/${i.id}/eval-history`,b.result)}catch(U){console.warn("Failed to save eval run to history:",U)}}}C({passed:A,total:$}),setTimeout(()=>C(null),5e3)}catch(A){console.error("Failed to run tests:",A),C({passed:0,total:-1}),setTimeout(()=>C(null),5e3)}finally{y(!1)}}}const M=_.useRef(null);_.useEffect(()=>{if(i&&!x.current&&M.current){const A=i.app.models||[],$=M.current||[];if(A.some((b,U)=>{const J=$.find(S=>S.id===b.id);return J?J.provider!==b.provider||J.model_name!==b.model_name||J.api_base!==b.api_base||J.temperature!==b.temperature||J.max_output_tokens!==b.max_output_tokens||J.top_p!==b.top_p||J.top_k!==b.top_k:!1})){const b=i.app.default_model_id,U=i.agents.map(S=>{if(S.type==="LlmAgent"&&S.model){const oe=S.model._appModelId;if(oe){const L=A.find(X=>X.id===oe);if(L)return{...S,model:{provider:L.provider,model_name:L.model_name,api_base:L.api_base,temperature:L.temperature,max_output_tokens:L.max_output_tokens,top_p:L.top_p,top_k:L.top_k,fallbacks:[],_appModelId:oe}}}else if(b){const L=A.find(X=>X.id===b);if(L&&S.model.provider===L.provider&&S.model.model_name===L.model_name&&S.model.api_base===L.api_base)return{...S,model:{provider:L.provider,model_name:L.model_name,api_base:L.api_base,temperature:L.temperature,max_output_tokens:L.max_output_tokens,top_p:L.top_p,top_k:L.top_k,fallbacks:[],_appModelId:b}}}}return S});U.some((S,oe)=>JSON.stringify(S)!==JSON.stringify(i.agents[oe]))&&s({...i,agents:U})}}i&&(M.current=i.app.models||[])},[i==null?void 0:i.app.models,i,s]);const q=_.useRef(null);return _.useEffect(()=>(i&&!x.current&&v.current&&JSON.stringify(i)!==v.current&&(u(!0),q.current&&clearTimeout(q.current),q.current=setTimeout(async()=>{try{const{eval_sets:$,...I}=i;await Da(i.id,I),v.current=JSON.stringify(i),u(!1)}catch($){console.error("Auto-save failed:",$)}},500)),()=>{q.current&&clearTimeout(q.current)}),[i]),w?o.jsxs("div",{className:"loading-screen",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("header",{className:"top-bar",children:[o.jsxs("div",{className:"top-bar-left",children:[o.jsxs("button",{className:"back-btn",onClick:()=>r("/"),children:[o.jsx(l0,{size:18}),"Project"]}),o.jsx("h1",{className:"project-name",children:i.name})]}),o.jsx("nav",{className:"tabs-bar",children:DS.map(A=>o.jsxs("button",{className:`tab-btn ${l===A.id?"active":""}`,onClick:()=>T(A.id),children:[o.jsx(A.icon,{size:14}),A.label]},A.id))}),o.jsxs("div",{className:"top-bar-right",children:[o.jsxs("button",{className:`btn ${P?P.total===-1?"btn-error":P.passed===P.total?"btn-success":"btn-warning":"btn-secondary"}`,onClick:z,disabled:h||!((B=i==null?void 0:i.eval_sets)!=null&&B.some(A=>A.eval_cases.length>0)),title:(Y=i==null?void 0:i.eval_sets)!=null&&Y.some(A=>A.eval_cases.length>0)?"Run all evaluation tests":"No test cases defined",style:{marginRight:8},children:[h?o.jsx(h0,{size:16,className:"spin"}):o.jsx(Mn,{size:16}),h?"Testing...":P?P.total===-1?"Error":`${P.passed}/${P.total}`:"Test"]}),o.jsxs("button",{className:"btn btn-primary",onClick:k,disabled:N,children:[o.jsx(su,{size:16}),N?"Saving...":"Save"]})]})]}),o.jsxs("main",{className:"main-content",children:[l==="app"&&o.jsx(C0,{}),l==="agents"&&o.jsx(L_,{onSelectAgent:R}),l==="tools"&&o.jsx(pS,{onSelectTool:R}),l==="callbacks"&&o.jsx(mS,{onSelectCallback:R}),l==="run"&&o.jsx(jS,{}),l==="skillsets"&&o.jsx(SS,{}),l==="eval"&&o.jsx(NS,{}),l==="yaml"&&o.jsx(PS,{}),l==="code"&&o.jsx($S,{})]})]}):null}function BS(){const{setMcpServers:e,setBuiltinTools:t}=it();return _.useEffect(()=>{ru().then(e).catch(console.error),Fh().then(t).catch(console.error)},[e,t]),o.jsxs(N1,{children:[o.jsx(dr,{path:"/",element:o.jsx(w0,{})}),o.jsx(dr,{path:"/project/:projectId",element:o.jsx(Vl,{})}),o.jsx(dr,{path:"/project/:projectId/:tab",element:o.jsx(Vl,{})}),o.jsx(dr,{path:"/project/:projectId/:tab/:itemId",element:o.jsx(Vl,{})}),o.jsx(dr,{path:"*",element:o.jsx(S1,{to:"/",replace:!0})})]})}Wl.createRoot(document.getElementById("root")).render(o.jsx(Lt.StrictMode,{children:o.jsx(T1,{children:o.jsx(BS,{})})}));export{js as a,US as g};
