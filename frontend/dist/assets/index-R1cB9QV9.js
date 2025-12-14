function bx(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Ys=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Lo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var uf={exports:{}},Ao={},df={exports:{}},we={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rs=Symbol.for("react.element"),kx=Symbol.for("react.portal"),wx=Symbol.for("react.fragment"),jx=Symbol.for("react.strict_mode"),_x=Symbol.for("react.profiler"),Sx=Symbol.for("react.provider"),Cx=Symbol.for("react.context"),Nx=Symbol.for("react.forward_ref"),Ex=Symbol.for("react.suspense"),zx=Symbol.for("react.memo"),Tx=Symbol.for("react.lazy"),Ou=Symbol.iterator;function Px(e){return e===null||typeof e!="object"?null:(e=Ou&&e[Ou]||e["@@iterator"],typeof e=="function"?e:null)}var pf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ff=Object.assign,mf={};function Yr(e,t,n){this.props=e,this.context=t,this.refs=mf,this.updater=n||pf}Yr.prototype.isReactComponent={};Yr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hf(){}hf.prototype=Yr.prototype;function dc(e,t,n){this.props=e,this.context=t,this.refs=mf,this.updater=n||pf}var pc=dc.prototype=new hf;pc.constructor=dc;ff(pc,Yr.prototype);pc.isPureReactComponent=!0;var Iu=Array.isArray,gf=Object.prototype.hasOwnProperty,fc={current:null},xf={key:!0,ref:!0,__self:!0,__source:!0};function yf(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)gf.call(t,r)&&!xf.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:rs,type:e,key:o,ref:a,props:i,_owner:fc.current}}function Lx(e,t){return{$$typeof:rs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function mc(e){return typeof e=="object"&&e!==null&&e.$$typeof===rs}function Ax(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $u=/\/+/g;function oa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ax(""+e.key):t.toString(36)}function Os(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case rs:case kx:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+oa(a,0):r,Iu(i)?(n="",e!=null&&(n=e.replace($u,"$&/")+"/"),Os(i,t,n,"",function(u){return u})):i!=null&&(mc(i)&&(i=Lx(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace($u,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Iu(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+oa(o,l);a+=Os(o,t,n,c,i)}else if(c=Px(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+oa(o,l++),a+=Os(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ms(e,t,n){if(e==null)return e;var r=[],i=0;return Os(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Rx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var dt={current:null},Is={transition:null},Mx={ReactCurrentDispatcher:dt,ReactCurrentBatchConfig:Is,ReactCurrentOwner:fc};function vf(){throw Error("act(...) is not supported in production builds of React.")}we.Children={map:ms,forEach:function(e,t,n){ms(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ms(e,function(){t++}),t},toArray:function(e){return ms(e,function(t){return t})||[]},only:function(e){if(!mc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};we.Component=Yr;we.Fragment=wx;we.Profiler=_x;we.PureComponent=dc;we.StrictMode=jx;we.Suspense=Ex;we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mx;we.act=vf;we.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ff({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=fc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)gf.call(t,c)&&!xf.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:rs,type:e.type,key:i,ref:o,props:r,_owner:a}};we.createContext=function(e){return e={$$typeof:Cx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Sx,_context:e},e.Consumer=e};we.createElement=yf;we.createFactory=function(e){var t=yf.bind(null,e);return t.type=e,t};we.createRef=function(){return{current:null}};we.forwardRef=function(e){return{$$typeof:Nx,render:e}};we.isValidElement=mc;we.lazy=function(e){return{$$typeof:Tx,_payload:{_status:-1,_result:e},_init:Rx}};we.memo=function(e,t){return{$$typeof:zx,type:e,compare:t===void 0?null:t}};we.startTransition=function(e){var t=Is.transition;Is.transition={};try{e()}finally{Is.transition=t}};we.unstable_act=vf;we.useCallback=function(e,t){return dt.current.useCallback(e,t)};we.useContext=function(e){return dt.current.useContext(e)};we.useDebugValue=function(){};we.useDeferredValue=function(e){return dt.current.useDeferredValue(e)};we.useEffect=function(e,t){return dt.current.useEffect(e,t)};we.useId=function(){return dt.current.useId()};we.useImperativeHandle=function(e,t,n){return dt.current.useImperativeHandle(e,t,n)};we.useInsertionEffect=function(e,t){return dt.current.useInsertionEffect(e,t)};we.useLayoutEffect=function(e,t){return dt.current.useLayoutEffect(e,t)};we.useMemo=function(e,t){return dt.current.useMemo(e,t)};we.useReducer=function(e,t,n){return dt.current.useReducer(e,t,n)};we.useRef=function(e){return dt.current.useRef(e)};we.useState=function(e){return dt.current.useState(e)};we.useSyncExternalStore=function(e,t,n){return dt.current.useSyncExternalStore(e,t,n)};we.useTransition=function(){return dt.current.useTransition()};we.version="18.3.1";df.exports=we;var w=df.exports;const Nt=Lo(w),Ox=bx({__proto__:null,default:Nt},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ix=w,$x=Symbol.for("react.element"),Dx=Symbol.for("react.fragment"),Fx=Object.prototype.hasOwnProperty,Bx=Ix.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ux={key:!0,ref:!0,__self:!0,__source:!0};function bf(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Fx.call(t,r)&&!Ux.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:$x,type:e,key:o,ref:a,props:i,_owner:Bx.current}}Ao.Fragment=Dx;Ao.jsx=bf;Ao.jsxs=bf;uf.exports=Ao;var s=uf.exports,Xa={},kf={exports:{}},Tt={},wf={exports:{}},jf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,A){var j=I.length;I.push(A);e:for(;0<j;){var J=j-1>>>1,Q=I[J];if(0<i(Q,A))I[J]=A,I[j]=Q,j=J;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var A=I[0],j=I.pop();if(j!==A){I[0]=j;e:for(var J=0,Q=I.length,E=Q>>>1;J<E;){var xe=2*(J+1)-1,M=I[xe],te=xe+1,V=I[te];if(0>i(M,j))te<Q&&0>i(V,M)?(I[J]=V,I[te]=j,J=te):(I[J]=M,I[xe]=j,J=xe);else if(te<Q&&0>i(V,j))I[J]=V,I[te]=j,J=te;else break e}}return A}function i(I,A){var j=I.sortIndex-A.sortIndex;return j!==0?j:I.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,p=null,f=3,m=!1,x=!1,b=!1,T=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(I){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=I)r(u),A.sortIndex=A.expirationTime,t(c,A);else break;A=n(u)}}function P(I){if(b=!1,h(I),!x)if(n(c)!==null)x=!0,ne(C);else{var A=n(u);A!==null&&L(P,A.startTime-I)}}function C(I,A){x=!1,b&&(b=!1,y(k),k=-1),m=!0;var j=f;try{for(h(A),p=n(c);p!==null&&(!(p.expirationTime>A)||I&&!v());){var J=p.callback;if(typeof J=="function"){p.callback=null,f=p.priorityLevel;var Q=J(p.expirationTime<=A);A=e.unstable_now(),typeof Q=="function"?p.callback=Q:p===n(c)&&r(c),h(A)}else r(c);p=n(c)}if(p!==null)var E=!0;else{var xe=n(u);xe!==null&&L(P,xe.startTime-A),E=!1}return E}finally{p=null,f=j,m=!1}}var _=!1,N=null,k=-1,R=5,S=-1;function v(){return!(e.unstable_now()-S<R)}function z(){if(N!==null){var I=e.unstable_now();S=I;var A=!0;try{A=N(!0,I)}finally{A?F():(_=!1,N=null)}}else _=!1}var F;if(typeof g=="function")F=function(){g(z)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,D=U.port2;U.port1.onmessage=z,F=function(){D.postMessage(null)}}else F=function(){T(z,0)};function ne(I){N=I,_||(_=!0,F())}function L(I,A){k=T(function(){I(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){x||m||(x=!0,ne(C))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(I){switch(f){case 1:case 2:case 3:var A=3;break;default:A=f}var j=f;f=A;try{return I()}finally{f=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,A){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var j=f;f=I;try{return A()}finally{f=j}},e.unstable_scheduleCallback=function(I,A,j){var J=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?J+j:J):j=J,I){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=j+Q,I={id:d++,callback:A,priorityLevel:I,startTime:j,expirationTime:Q,sortIndex:-1},j>J?(I.sortIndex=j,t(u,I),n(c)===null&&I===n(u)&&(b?(y(k),k=-1):b=!0,L(P,j-J))):(I.sortIndex=Q,t(c,I),x||m||(x=!0,ne(C))),I},e.unstable_shouldYield=v,e.unstable_wrapCallback=function(I){var A=f;return function(){var j=f;f=A;try{return I.apply(this,arguments)}finally{f=j}}}})(jf);wf.exports=jf;var Vx=wf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wx=w,zt=Vx;function X(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _f=new Set,Ri={};function hr(e,t){Ur(e,t),Ur(e+"Capture",t)}function Ur(e,t){for(Ri[e]=t,e=0;e<t.length;e++)_f.add(t[e])}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Za=Object.prototype.hasOwnProperty,Hx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Du={},Fu={};function qx(e){return Za.call(Fu,e)?!0:Za.call(Du,e)?!1:Hx.test(e)?Fu[e]=!0:(Du[e]=!0,!1)}function Jx(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Kx(e,t,n,r){if(t===null||typeof t>"u"||Jx(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){tt[e]=new pt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];tt[t]=new pt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){tt[e]=new pt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){tt[e]=new pt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){tt[e]=new pt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){tt[e]=new pt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){tt[e]=new pt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){tt[e]=new pt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){tt[e]=new pt(e,5,!1,e.toLowerCase(),null,!1,!1)});var hc=/[\-:]([a-z])/g;function gc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(hc,gc);tt[t]=new pt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(hc,gc);tt[t]=new pt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(hc,gc);tt[t]=new pt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){tt[e]=new pt(e,1,!1,e.toLowerCase(),null,!1,!1)});tt.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){tt[e]=new pt(e,1,!1,e.toLowerCase(),null,!0,!0)});function xc(e,t,n,r){var i=tt.hasOwnProperty(t)?tt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Kx(t,n,i,r)&&(n=null),r||i===null?qx(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var jn=Wx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hs=Symbol.for("react.element"),kr=Symbol.for("react.portal"),wr=Symbol.for("react.fragment"),yc=Symbol.for("react.strict_mode"),el=Symbol.for("react.profiler"),Sf=Symbol.for("react.provider"),Cf=Symbol.for("react.context"),vc=Symbol.for("react.forward_ref"),tl=Symbol.for("react.suspense"),nl=Symbol.for("react.suspense_list"),bc=Symbol.for("react.memo"),En=Symbol.for("react.lazy"),Nf=Symbol.for("react.offscreen"),Bu=Symbol.iterator;function ri(e){return e===null||typeof e!="object"?null:(e=Bu&&e[Bu]||e["@@iterator"],typeof e=="function"?e:null)}var Ie=Object.assign,aa;function gi(e){if(aa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);aa=t&&t[1]||""}return`
`+aa+e}var la=!1;function ca(e,t){if(!e||la)return"";la=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{la=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?gi(e):""}function Qx(e){switch(e.tag){case 5:return gi(e.type);case 16:return gi("Lazy");case 13:return gi("Suspense");case 19:return gi("SuspenseList");case 0:case 2:case 15:return e=ca(e.type,!1),e;case 11:return e=ca(e.type.render,!1),e;case 1:return e=ca(e.type,!0),e;default:return""}}function rl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wr:return"Fragment";case kr:return"Portal";case el:return"Profiler";case yc:return"StrictMode";case tl:return"Suspense";case nl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cf:return(e.displayName||"Context")+".Consumer";case Sf:return(e._context.displayName||"Context")+".Provider";case vc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case bc:return t=e.displayName||null,t!==null?t:rl(e.type)||"Memo";case En:t=e._payload,e=e._init;try{return rl(e(t))}catch{}}return null}function Gx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rl(t);case 8:return t===yc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Hn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ef(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Yx(e){var t=Ef(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gs(e){e._valueTracker||(e._valueTracker=Yx(e))}function zf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ef(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Xs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function il(e,t){var n=t.checked;return Ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Uu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Hn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Tf(e,t){t=t.checked,t!=null&&xc(e,"checked",t,!1)}function sl(e,t){Tf(e,t);var n=Hn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ol(e,t.type,n):t.hasOwnProperty("defaultValue")&&ol(e,t.type,Hn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ol(e,t,n){(t!=="number"||Xs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var xi=Array.isArray;function Rr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Hn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function al(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(X(91));return Ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(X(92));if(xi(n)){if(1<n.length)throw Error(X(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Hn(n)}}function Pf(e,t){var n=Hn(t.value),r=Hn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Hu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Lf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ll(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Lf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xs,Af=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xs=xs||document.createElement("div"),xs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ki={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xx=["Webkit","ms","Moz","O"];Object.keys(ki).forEach(function(e){Xx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ki[t]=ki[e]})});function Rf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ki.hasOwnProperty(e)&&ki[e]?(""+t).trim():t+"px"}function Mf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Rf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Zx=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cl(e,t){if(t){if(Zx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(X(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(X(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(X(61))}if(t.style!=null&&typeof t.style!="object")throw Error(X(62))}}function ul(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dl=null;function kc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pl=null,Mr=null,Or=null;function qu(e){if(e=os(e)){if(typeof pl!="function")throw Error(X(280));var t=e.stateNode;t&&(t=$o(t),pl(e.stateNode,e.type,t))}}function Of(e){Mr?Or?Or.push(e):Or=[e]:Mr=e}function If(){if(Mr){var e=Mr,t=Or;if(Or=Mr=null,qu(e),t)for(e=0;e<t.length;e++)qu(t[e])}}function $f(e,t){return e(t)}function Df(){}var ua=!1;function Ff(e,t,n){if(ua)return e(t,n);ua=!0;try{return $f(e,t,n)}finally{ua=!1,(Mr!==null||Or!==null)&&(Df(),If())}}function Oi(e,t){var n=e.stateNode;if(n===null)return null;var r=$o(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(X(231,t,typeof n));return n}var fl=!1;if(vn)try{var ii={};Object.defineProperty(ii,"passive",{get:function(){fl=!0}}),window.addEventListener("test",ii,ii),window.removeEventListener("test",ii,ii)}catch{fl=!1}function ey(e,t,n,r,i,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var wi=!1,Zs=null,eo=!1,ml=null,ty={onError:function(e){wi=!0,Zs=e}};function ny(e,t,n,r,i,o,a,l,c){wi=!1,Zs=null,ey.apply(ty,arguments)}function ry(e,t,n,r,i,o,a,l,c){if(ny.apply(this,arguments),wi){if(wi){var u=Zs;wi=!1,Zs=null}else throw Error(X(198));eo||(eo=!0,ml=u)}}function gr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Bf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ju(e){if(gr(e)!==e)throw Error(X(188))}function iy(e){var t=e.alternate;if(!t){if(t=gr(e),t===null)throw Error(X(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ju(i),e;if(o===r)return Ju(i),t;o=o.sibling}throw Error(X(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(X(189))}}if(n.alternate!==r)throw Error(X(190))}if(n.tag!==3)throw Error(X(188));return n.stateNode.current===n?e:t}function Uf(e){return e=iy(e),e!==null?Vf(e):null}function Vf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Vf(e);if(t!==null)return t;e=e.sibling}return null}var Wf=zt.unstable_scheduleCallback,Ku=zt.unstable_cancelCallback,sy=zt.unstable_shouldYield,oy=zt.unstable_requestPaint,Fe=zt.unstable_now,ay=zt.unstable_getCurrentPriorityLevel,wc=zt.unstable_ImmediatePriority,Hf=zt.unstable_UserBlockingPriority,to=zt.unstable_NormalPriority,ly=zt.unstable_LowPriority,qf=zt.unstable_IdlePriority,Ro=null,ln=null;function cy(e){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(Ro,e,void 0,(e.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:py,uy=Math.log,dy=Math.LN2;function py(e){return e>>>=0,e===0?32:31-(uy(e)/dy|0)|0}var ys=64,vs=4194304;function yi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function no(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=yi(l):(o&=a,o!==0&&(r=yi(o)))}else a=n&~i,a!==0?r=yi(a):o!==0&&(r=yi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Qt(t),i=1<<n,r|=e[n],t&=~i;return r}function fy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function my(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Qt(o),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=fy(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function hl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Jf(){var e=ys;return ys<<=1,!(ys&4194240)&&(ys=64),e}function da(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function is(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qt(t),e[t]=n}function hy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Qt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function jc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Qt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Ee=0;function Kf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Qf,_c,Gf,Yf,Xf,gl=!1,bs=[],On=null,In=null,$n=null,Ii=new Map,$i=new Map,Tn=[],gy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qu(e,t){switch(e){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":Ii.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$i.delete(t.pointerId)}}function si(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=os(t),t!==null&&_c(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function xy(e,t,n,r,i){switch(t){case"focusin":return On=si(On,e,t,n,r,i),!0;case"dragenter":return In=si(In,e,t,n,r,i),!0;case"mouseover":return $n=si($n,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ii.set(o,si(Ii.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,$i.set(o,si($i.get(o)||null,e,t,n,r,i)),!0}return!1}function Zf(e){var t=nr(e.target);if(t!==null){var n=gr(t);if(n!==null){if(t=n.tag,t===13){if(t=Bf(n),t!==null){e.blockedOn=t,Xf(e.priority,function(){Gf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $s(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);dl=r,n.target.dispatchEvent(r),dl=null}else return t=os(n),t!==null&&_c(t),e.blockedOn=n,!1;t.shift()}return!0}function Gu(e,t,n){$s(e)&&n.delete(t)}function yy(){gl=!1,On!==null&&$s(On)&&(On=null),In!==null&&$s(In)&&(In=null),$n!==null&&$s($n)&&($n=null),Ii.forEach(Gu),$i.forEach(Gu)}function oi(e,t){e.blockedOn===t&&(e.blockedOn=null,gl||(gl=!0,zt.unstable_scheduleCallback(zt.unstable_NormalPriority,yy)))}function Di(e){function t(i){return oi(i,e)}if(0<bs.length){oi(bs[0],e);for(var n=1;n<bs.length;n++){var r=bs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(On!==null&&oi(On,e),In!==null&&oi(In,e),$n!==null&&oi($n,e),Ii.forEach(t),$i.forEach(t),n=0;n<Tn.length;n++)r=Tn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Tn.length&&(n=Tn[0],n.blockedOn===null);)Zf(n),n.blockedOn===null&&Tn.shift()}var Ir=jn.ReactCurrentBatchConfig,ro=!0;function vy(e,t,n,r){var i=Ee,o=Ir.transition;Ir.transition=null;try{Ee=1,Sc(e,t,n,r)}finally{Ee=i,Ir.transition=o}}function by(e,t,n,r){var i=Ee,o=Ir.transition;Ir.transition=null;try{Ee=4,Sc(e,t,n,r)}finally{Ee=i,Ir.transition=o}}function Sc(e,t,n,r){if(ro){var i=xl(e,t,n,r);if(i===null)ka(e,t,r,io,n),Qu(e,r);else if(xy(i,e,t,n,r))r.stopPropagation();else if(Qu(e,r),t&4&&-1<gy.indexOf(e)){for(;i!==null;){var o=os(i);if(o!==null&&Qf(o),o=xl(e,t,n,r),o===null&&ka(e,t,r,io,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ka(e,t,r,null,n)}}var io=null;function xl(e,t,n,r){if(io=null,e=kc(r),e=nr(e),e!==null)if(t=gr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Bf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return io=e,null}function em(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ay()){case wc:return 1;case Hf:return 4;case to:case ly:return 16;case qf:return 536870912;default:return 16}default:return 16}}var Ln=null,Cc=null,Ds=null;function tm(){if(Ds)return Ds;var e,t=Cc,n=t.length,r,i="value"in Ln?Ln.value:Ln.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ds=i.slice(e,1<r?1-r:void 0)}function Fs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ks(){return!0}function Yu(){return!1}function Pt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ks:Yu,this.isPropagationStopped=Yu,this}return Ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ks)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ks)},persist:function(){},isPersistent:ks}),t}var Xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nc=Pt(Xr),ss=Ie({},Xr,{view:0,detail:0}),ky=Pt(ss),pa,fa,ai,Mo=Ie({},ss,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ec,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ai&&(ai&&e.type==="mousemove"?(pa=e.screenX-ai.screenX,fa=e.screenY-ai.screenY):fa=pa=0,ai=e),pa)},movementY:function(e){return"movementY"in e?e.movementY:fa}}),Xu=Pt(Mo),wy=Ie({},Mo,{dataTransfer:0}),jy=Pt(wy),_y=Ie({},ss,{relatedTarget:0}),ma=Pt(_y),Sy=Ie({},Xr,{animationName:0,elapsedTime:0,pseudoElement:0}),Cy=Pt(Sy),Ny=Ie({},Xr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ey=Pt(Ny),zy=Ie({},Xr,{data:0}),Zu=Pt(zy),Ty={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Py={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ly={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ay(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ly[e])?!!t[e]:!1}function Ec(){return Ay}var Ry=Ie({},ss,{key:function(e){if(e.key){var t=Ty[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Py[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ec,charCode:function(e){return e.type==="keypress"?Fs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),My=Pt(Ry),Oy=Ie({},Mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ed=Pt(Oy),Iy=Ie({},ss,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ec}),$y=Pt(Iy),Dy=Ie({},Xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fy=Pt(Dy),By=Ie({},Mo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Uy=Pt(By),Vy=[9,13,27,32],zc=vn&&"CompositionEvent"in window,ji=null;vn&&"documentMode"in document&&(ji=document.documentMode);var Wy=vn&&"TextEvent"in window&&!ji,nm=vn&&(!zc||ji&&8<ji&&11>=ji),td=" ",nd=!1;function rm(e,t){switch(e){case"keyup":return Vy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function im(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jr=!1;function Hy(e,t){switch(e){case"compositionend":return im(t);case"keypress":return t.which!==32?null:(nd=!0,td);case"textInput":return e=t.data,e===td&&nd?null:e;default:return null}}function qy(e,t){if(jr)return e==="compositionend"||!zc&&rm(e,t)?(e=tm(),Ds=Cc=Ln=null,jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nm&&t.locale!=="ko"?null:t.data;default:return null}}var Jy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Jy[e.type]:t==="textarea"}function sm(e,t,n,r){Of(r),t=so(t,"onChange"),0<t.length&&(n=new Nc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _i=null,Fi=null;function Ky(e){gm(e,0)}function Oo(e){var t=Cr(e);if(zf(t))return e}function Qy(e,t){if(e==="change")return t}var om=!1;if(vn){var ha;if(vn){var ga="oninput"in document;if(!ga){var id=document.createElement("div");id.setAttribute("oninput","return;"),ga=typeof id.oninput=="function"}ha=ga}else ha=!1;om=ha&&(!document.documentMode||9<document.documentMode)}function sd(){_i&&(_i.detachEvent("onpropertychange",am),Fi=_i=null)}function am(e){if(e.propertyName==="value"&&Oo(Fi)){var t=[];sm(t,Fi,e,kc(e)),Ff(Ky,t)}}function Gy(e,t,n){e==="focusin"?(sd(),_i=t,Fi=n,_i.attachEvent("onpropertychange",am)):e==="focusout"&&sd()}function Yy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oo(Fi)}function Xy(e,t){if(e==="click")return Oo(t)}function Zy(e,t){if(e==="input"||e==="change")return Oo(t)}function ev(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xt=typeof Object.is=="function"?Object.is:ev;function Bi(e,t){if(Xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Za.call(t,i)||!Xt(e[i],t[i]))return!1}return!0}function od(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ad(e,t){var n=od(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=od(n)}}function lm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cm(){for(var e=window,t=Xs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xs(e.document)}return t}function Tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function tv(e){var t=cm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&lm(n.ownerDocument.documentElement,n)){if(r!==null&&Tc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ad(n,o);var a=ad(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var nv=vn&&"documentMode"in document&&11>=document.documentMode,_r=null,yl=null,Si=null,vl=!1;function ld(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vl||_r==null||_r!==Xs(r)||(r=_r,"selectionStart"in r&&Tc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Si&&Bi(Si,r)||(Si=r,r=so(yl,"onSelect"),0<r.length&&(t=new Nc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=_r)))}function ws(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:ws("Animation","AnimationEnd"),animationiteration:ws("Animation","AnimationIteration"),animationstart:ws("Animation","AnimationStart"),transitionend:ws("Transition","TransitionEnd")},xa={},um={};vn&&(um=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);function Io(e){if(xa[e])return xa[e];if(!Sr[e])return e;var t=Sr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in um)return xa[e]=t[n];return e}var dm=Io("animationend"),pm=Io("animationiteration"),fm=Io("animationstart"),mm=Io("transitionend"),hm=new Map,cd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(e,t){hm.set(e,t),hr(t,[e])}for(var ya=0;ya<cd.length;ya++){var va=cd[ya],rv=va.toLowerCase(),iv=va[0].toUpperCase()+va.slice(1);Kn(rv,"on"+iv)}Kn(dm,"onAnimationEnd");Kn(pm,"onAnimationIteration");Kn(fm,"onAnimationStart");Kn("dblclick","onDoubleClick");Kn("focusin","onFocus");Kn("focusout","onBlur");Kn(mm,"onTransitionEnd");Ur("onMouseEnter",["mouseout","mouseover"]);Ur("onMouseLeave",["mouseout","mouseover"]);Ur("onPointerEnter",["pointerout","pointerover"]);Ur("onPointerLeave",["pointerout","pointerover"]);hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sv=new Set("cancel close invalid load scroll toggle".split(" ").concat(vi));function ud(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ry(r,t,void 0,e),e.currentTarget=null}function gm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;ud(i,l,u),o=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;ud(i,l,u),o=c}}}if(eo)throw e=ml,eo=!1,ml=null,e}function Le(e,t){var n=t[_l];n===void 0&&(n=t[_l]=new Set);var r=e+"__bubble";n.has(r)||(xm(t,e,2,!1),n.add(r))}function ba(e,t,n){var r=0;t&&(r|=4),xm(n,e,r,t)}var js="_reactListening"+Math.random().toString(36).slice(2);function Ui(e){if(!e[js]){e[js]=!0,_f.forEach(function(n){n!=="selectionchange"&&(sv.has(n)||ba(n,!1,e),ba(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[js]||(t[js]=!0,ba("selectionchange",!1,t))}}function xm(e,t,n,r){switch(em(t)){case 1:var i=vy;break;case 4:i=by;break;default:i=Sc}n=i.bind(null,t,n,e),i=void 0,!fl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ka(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=nr(l),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Ff(function(){var u=o,d=kc(n),p=[];e:{var f=hm.get(e);if(f!==void 0){var m=Nc,x=e;switch(e){case"keypress":if(Fs(n)===0)break e;case"keydown":case"keyup":m=My;break;case"focusin":x="focus",m=ma;break;case"focusout":x="blur",m=ma;break;case"beforeblur":case"afterblur":m=ma;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Xu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=jy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=$y;break;case dm:case pm:case fm:m=Cy;break;case mm:m=Fy;break;case"scroll":m=ky;break;case"wheel":m=Uy;break;case"copy":case"cut":case"paste":m=Ey;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=ed}var b=(t&4)!==0,T=!b&&e==="scroll",y=b?f!==null?f+"Capture":null:f;b=[];for(var g=u,h;g!==null;){h=g;var P=h.stateNode;if(h.tag===5&&P!==null&&(h=P,y!==null&&(P=Oi(g,y),P!=null&&b.push(Vi(g,P,h)))),T)break;g=g.return}0<b.length&&(f=new m(f,x,null,n,d),p.push({event:f,listeners:b}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==dl&&(x=n.relatedTarget||n.fromElement)&&(nr(x)||x[bn]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=u,x=x?nr(x):null,x!==null&&(T=gr(x),x!==T||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=u),m!==x)){if(b=Xu,P="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(b=ed,P="onPointerLeave",y="onPointerEnter",g="pointer"),T=m==null?f:Cr(m),h=x==null?f:Cr(x),f=new b(P,g+"leave",m,n,d),f.target=T,f.relatedTarget=h,P=null,nr(d)===u&&(b=new b(y,g+"enter",x,n,d),b.target=h,b.relatedTarget=T,P=b),T=P,m&&x)t:{for(b=m,y=x,g=0,h=b;h;h=yr(h))g++;for(h=0,P=y;P;P=yr(P))h++;for(;0<g-h;)b=yr(b),g--;for(;0<h-g;)y=yr(y),h--;for(;g--;){if(b===y||y!==null&&b===y.alternate)break t;b=yr(b),y=yr(y)}b=null}else b=null;m!==null&&dd(p,f,m,b,!1),x!==null&&T!==null&&dd(p,T,x,b,!0)}}e:{if(f=u?Cr(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var C=Qy;else if(rd(f))if(om)C=Zy;else{C=Yy;var _=Gy}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Xy);if(C&&(C=C(e,u))){sm(p,C,n,d);break e}_&&_(e,f,u),e==="focusout"&&(_=f._wrapperState)&&_.controlled&&f.type==="number"&&ol(f,"number",f.value)}switch(_=u?Cr(u):window,e){case"focusin":(rd(_)||_.contentEditable==="true")&&(_r=_,yl=u,Si=null);break;case"focusout":Si=yl=_r=null;break;case"mousedown":vl=!0;break;case"contextmenu":case"mouseup":case"dragend":vl=!1,ld(p,n,d);break;case"selectionchange":if(nv)break;case"keydown":case"keyup":ld(p,n,d)}var N;if(zc)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else jr?rm(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(nm&&n.locale!=="ko"&&(jr||k!=="onCompositionStart"?k==="onCompositionEnd"&&jr&&(N=tm()):(Ln=d,Cc="value"in Ln?Ln.value:Ln.textContent,jr=!0)),_=so(u,k),0<_.length&&(k=new Zu(k,e,null,n,d),p.push({event:k,listeners:_}),N?k.data=N:(N=im(n),N!==null&&(k.data=N)))),(N=Wy?Hy(e,n):qy(e,n))&&(u=so(u,"onBeforeInput"),0<u.length&&(d=new Zu("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=N))}gm(p,t)})}function Vi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function so(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Oi(e,n),o!=null&&r.unshift(Vi(e,o,i)),o=Oi(e,t),o!=null&&r.push(Vi(e,o,i))),e=e.return}return r}function yr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function dd(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Oi(n,o),c!=null&&a.unshift(Vi(n,c,l))):i||(c=Oi(n,o),c!=null&&a.push(Vi(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var ov=/\r\n?/g,av=/\u0000|\uFFFD/g;function pd(e){return(typeof e=="string"?e:""+e).replace(ov,`
`).replace(av,"")}function _s(e,t,n){if(t=pd(t),pd(e)!==t&&n)throw Error(X(425))}function oo(){}var bl=null,kl=null;function wl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jl=typeof setTimeout=="function"?setTimeout:void 0,lv=typeof clearTimeout=="function"?clearTimeout:void 0,fd=typeof Promise=="function"?Promise:void 0,cv=typeof queueMicrotask=="function"?queueMicrotask:typeof fd<"u"?function(e){return fd.resolve(null).then(e).catch(uv)}:jl;function uv(e){setTimeout(function(){throw e})}function wa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Di(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Di(t)}function Dn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function md(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Zr=Math.random().toString(36).slice(2),sn="__reactFiber$"+Zr,Wi="__reactProps$"+Zr,bn="__reactContainer$"+Zr,_l="__reactEvents$"+Zr,dv="__reactListeners$"+Zr,pv="__reactHandles$"+Zr;function nr(e){var t=e[sn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[bn]||n[sn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=md(e);e!==null;){if(n=e[sn])return n;e=md(e)}return t}e=n,n=e.parentNode}return null}function os(e){return e=e[sn]||e[bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(X(33))}function $o(e){return e[Wi]||null}var Sl=[],Nr=-1;function Qn(e){return{current:e}}function Ae(e){0>Nr||(e.current=Sl[Nr],Sl[Nr]=null,Nr--)}function Te(e,t){Nr++,Sl[Nr]=e.current,e.current=t}var qn={},ot=Qn(qn),gt=Qn(!1),cr=qn;function Vr(e,t){var n=e.type.contextTypes;if(!n)return qn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function xt(e){return e=e.childContextTypes,e!=null}function ao(){Ae(gt),Ae(ot)}function hd(e,t,n){if(ot.current!==qn)throw Error(X(168));Te(ot,t),Te(gt,n)}function ym(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(X(108,Gx(e)||"Unknown",i));return Ie({},n,r)}function lo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qn,cr=ot.current,Te(ot,e),Te(gt,gt.current),!0}function gd(e,t,n){var r=e.stateNode;if(!r)throw Error(X(169));n?(e=ym(e,t,cr),r.__reactInternalMemoizedMergedChildContext=e,Ae(gt),Ae(ot),Te(ot,e)):Ae(gt),Te(gt,n)}var mn=null,Do=!1,ja=!1;function vm(e){mn===null?mn=[e]:mn.push(e)}function fv(e){Do=!0,vm(e)}function Gn(){if(!ja&&mn!==null){ja=!0;var e=0,t=Ee;try{var n=mn;for(Ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}mn=null,Do=!1}catch(i){throw mn!==null&&(mn=mn.slice(e+1)),Wf(wc,Gn),i}finally{Ee=t,ja=!1}}return null}var Er=[],zr=0,co=null,uo=0,Mt=[],Ot=0,ur=null,hn=1,gn="";function Zn(e,t){Er[zr++]=uo,Er[zr++]=co,co=e,uo=t}function bm(e,t,n){Mt[Ot++]=hn,Mt[Ot++]=gn,Mt[Ot++]=ur,ur=e;var r=hn;e=gn;var i=32-Qt(r)-1;r&=~(1<<i),n+=1;var o=32-Qt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,hn=1<<32-Qt(t)+i|n<<i|r,gn=o+e}else hn=1<<o|n<<i|r,gn=e}function Pc(e){e.return!==null&&(Zn(e,1),bm(e,1,0))}function Lc(e){for(;e===co;)co=Er[--zr],Er[zr]=null,uo=Er[--zr],Er[zr]=null;for(;e===ur;)ur=Mt[--Ot],Mt[Ot]=null,gn=Mt[--Ot],Mt[Ot]=null,hn=Mt[--Ot],Mt[Ot]=null}var Et=null,St=null,Re=!1,Kt=null;function km(e,t){var n=$t(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function xd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Et=e,St=Dn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Et=e,St=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ur!==null?{id:hn,overflow:gn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$t(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Et=e,St=null,!0):!1;default:return!1}}function Cl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Nl(e){if(Re){var t=St;if(t){var n=t;if(!xd(e,t)){if(Cl(e))throw Error(X(418));t=Dn(n.nextSibling);var r=Et;t&&xd(e,t)?km(r,n):(e.flags=e.flags&-4097|2,Re=!1,Et=e)}}else{if(Cl(e))throw Error(X(418));e.flags=e.flags&-4097|2,Re=!1,Et=e}}}function yd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Et=e}function Ss(e){if(e!==Et)return!1;if(!Re)return yd(e),Re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wl(e.type,e.memoizedProps)),t&&(t=St)){if(Cl(e))throw wm(),Error(X(418));for(;t;)km(e,t),t=Dn(t.nextSibling)}if(yd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(X(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){St=Dn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}St=null}}else St=Et?Dn(e.stateNode.nextSibling):null;return!0}function wm(){for(var e=St;e;)e=Dn(e.nextSibling)}function Wr(){St=Et=null,Re=!1}function Ac(e){Kt===null?Kt=[e]:Kt.push(e)}var mv=jn.ReactCurrentBatchConfig;function li(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(X(309));var r=n.stateNode}if(!r)throw Error(X(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(X(284));if(!n._owner)throw Error(X(290,e))}return e}function Cs(e,t){throw e=Object.prototype.toString.call(t),Error(X(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vd(e){var t=e._init;return t(e._payload)}function jm(e){function t(y,g){if(e){var h=y.deletions;h===null?(y.deletions=[g],y.flags|=16):h.push(g)}}function n(y,g){if(!e)return null;for(;g!==null;)t(y,g),g=g.sibling;return null}function r(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function i(y,g){return y=Vn(y,g),y.index=0,y.sibling=null,y}function o(y,g,h){return y.index=h,e?(h=y.alternate,h!==null?(h=h.index,h<g?(y.flags|=2,g):h):(y.flags|=2,g)):(y.flags|=1048576,g)}function a(y){return e&&y.alternate===null&&(y.flags|=2),y}function l(y,g,h,P){return g===null||g.tag!==6?(g=Ta(h,y.mode,P),g.return=y,g):(g=i(g,h),g.return=y,g)}function c(y,g,h,P){var C=h.type;return C===wr?d(y,g,h.props.children,P,h.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===En&&vd(C)===g.type)?(P=i(g,h.props),P.ref=li(y,g,h),P.return=y,P):(P=Js(h.type,h.key,h.props,null,y.mode,P),P.ref=li(y,g,h),P.return=y,P)}function u(y,g,h,P){return g===null||g.tag!==4||g.stateNode.containerInfo!==h.containerInfo||g.stateNode.implementation!==h.implementation?(g=Pa(h,y.mode,P),g.return=y,g):(g=i(g,h.children||[]),g.return=y,g)}function d(y,g,h,P,C){return g===null||g.tag!==7?(g=or(h,y.mode,P,C),g.return=y,g):(g=i(g,h),g.return=y,g)}function p(y,g,h){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Ta(""+g,y.mode,h),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case hs:return h=Js(g.type,g.key,g.props,null,y.mode,h),h.ref=li(y,null,g),h.return=y,h;case kr:return g=Pa(g,y.mode,h),g.return=y,g;case En:var P=g._init;return p(y,P(g._payload),h)}if(xi(g)||ri(g))return g=or(g,y.mode,h,null),g.return=y,g;Cs(y,g)}return null}function f(y,g,h,P){var C=g!==null?g.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return C!==null?null:l(y,g,""+h,P);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case hs:return h.key===C?c(y,g,h,P):null;case kr:return h.key===C?u(y,g,h,P):null;case En:return C=h._init,f(y,g,C(h._payload),P)}if(xi(h)||ri(h))return C!==null?null:d(y,g,h,P,null);Cs(y,h)}return null}function m(y,g,h,P,C){if(typeof P=="string"&&P!==""||typeof P=="number")return y=y.get(h)||null,l(g,y,""+P,C);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case hs:return y=y.get(P.key===null?h:P.key)||null,c(g,y,P,C);case kr:return y=y.get(P.key===null?h:P.key)||null,u(g,y,P,C);case En:var _=P._init;return m(y,g,h,_(P._payload),C)}if(xi(P)||ri(P))return y=y.get(h)||null,d(g,y,P,C,null);Cs(g,P)}return null}function x(y,g,h,P){for(var C=null,_=null,N=g,k=g=0,R=null;N!==null&&k<h.length;k++){N.index>k?(R=N,N=null):R=N.sibling;var S=f(y,N,h[k],P);if(S===null){N===null&&(N=R);break}e&&N&&S.alternate===null&&t(y,N),g=o(S,g,k),_===null?C=S:_.sibling=S,_=S,N=R}if(k===h.length)return n(y,N),Re&&Zn(y,k),C;if(N===null){for(;k<h.length;k++)N=p(y,h[k],P),N!==null&&(g=o(N,g,k),_===null?C=N:_.sibling=N,_=N);return Re&&Zn(y,k),C}for(N=r(y,N);k<h.length;k++)R=m(N,y,k,h[k],P),R!==null&&(e&&R.alternate!==null&&N.delete(R.key===null?k:R.key),g=o(R,g,k),_===null?C=R:_.sibling=R,_=R);return e&&N.forEach(function(v){return t(y,v)}),Re&&Zn(y,k),C}function b(y,g,h,P){var C=ri(h);if(typeof C!="function")throw Error(X(150));if(h=C.call(h),h==null)throw Error(X(151));for(var _=C=null,N=g,k=g=0,R=null,S=h.next();N!==null&&!S.done;k++,S=h.next()){N.index>k?(R=N,N=null):R=N.sibling;var v=f(y,N,S.value,P);if(v===null){N===null&&(N=R);break}e&&N&&v.alternate===null&&t(y,N),g=o(v,g,k),_===null?C=v:_.sibling=v,_=v,N=R}if(S.done)return n(y,N),Re&&Zn(y,k),C;if(N===null){for(;!S.done;k++,S=h.next())S=p(y,S.value,P),S!==null&&(g=o(S,g,k),_===null?C=S:_.sibling=S,_=S);return Re&&Zn(y,k),C}for(N=r(y,N);!S.done;k++,S=h.next())S=m(N,y,k,S.value,P),S!==null&&(e&&S.alternate!==null&&N.delete(S.key===null?k:S.key),g=o(S,g,k),_===null?C=S:_.sibling=S,_=S);return e&&N.forEach(function(z){return t(y,z)}),Re&&Zn(y,k),C}function T(y,g,h,P){if(typeof h=="object"&&h!==null&&h.type===wr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case hs:e:{for(var C=h.key,_=g;_!==null;){if(_.key===C){if(C=h.type,C===wr){if(_.tag===7){n(y,_.sibling),g=i(_,h.props.children),g.return=y,y=g;break e}}else if(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===En&&vd(C)===_.type){n(y,_.sibling),g=i(_,h.props),g.ref=li(y,_,h),g.return=y,y=g;break e}n(y,_);break}else t(y,_);_=_.sibling}h.type===wr?(g=or(h.props.children,y.mode,P,h.key),g.return=y,y=g):(P=Js(h.type,h.key,h.props,null,y.mode,P),P.ref=li(y,g,h),P.return=y,y=P)}return a(y);case kr:e:{for(_=h.key;g!==null;){if(g.key===_)if(g.tag===4&&g.stateNode.containerInfo===h.containerInfo&&g.stateNode.implementation===h.implementation){n(y,g.sibling),g=i(g,h.children||[]),g.return=y,y=g;break e}else{n(y,g);break}else t(y,g);g=g.sibling}g=Pa(h,y.mode,P),g.return=y,y=g}return a(y);case En:return _=h._init,T(y,g,_(h._payload),P)}if(xi(h))return x(y,g,h,P);if(ri(h))return b(y,g,h,P);Cs(y,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,g!==null&&g.tag===6?(n(y,g.sibling),g=i(g,h),g.return=y,y=g):(n(y,g),g=Ta(h,y.mode,P),g.return=y,y=g),a(y)):n(y,g)}return T}var Hr=jm(!0),_m=jm(!1),po=Qn(null),fo=null,Tr=null,Rc=null;function Mc(){Rc=Tr=fo=null}function Oc(e){var t=po.current;Ae(po),e._currentValue=t}function El(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $r(e,t){fo=e,Rc=Tr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ht=!0),e.firstContext=null)}function Bt(e){var t=e._currentValue;if(Rc!==e)if(e={context:e,memoizedValue:t,next:null},Tr===null){if(fo===null)throw Error(X(308));Tr=e,fo.dependencies={lanes:0,firstContext:e}}else Tr=Tr.next=e;return t}var rr=null;function Ic(e){rr===null?rr=[e]:rr.push(e)}function Sm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ic(t)):(n.next=i.next,i.next=n),t.interleaved=n,kn(e,r)}function kn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var zn=!1;function $c(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function xn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,_e&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,kn(e,n)}return i=r.interleaved,i===null?(t.next=t,Ic(r)):(t.next=i.next,i.next=t),r.interleaved=t,kn(e,n)}function Bs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,jc(e,n)}}function bd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function mo(e,t,n,r){var i=e.updateQueue;zn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(o!==null){var p=i.baseState;a=0,d=u=c=null,l=o;do{var f=l.lane,m=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,b=l;switch(f=t,m=n,b.tag){case 1:if(x=b.payload,typeof x=="function"){p=x.call(m,p,f);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=b.payload,f=typeof x=="function"?x.call(m,p,f):x,f==null)break e;p=Ie({},p,f);break e;case 2:zn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else m={eventTime:m,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=m,c=p):d=d.next=m,a|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);pr|=a,e.lanes=a,e.memoizedState=p}}function kd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(X(191,i));i.call(r)}}}var as={},cn=Qn(as),Hi=Qn(as),qi=Qn(as);function ir(e){if(e===as)throw Error(X(174));return e}function Dc(e,t){switch(Te(qi,t),Te(Hi,e),Te(cn,as),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ll(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ll(t,e)}Ae(cn),Te(cn,t)}function qr(){Ae(cn),Ae(Hi),Ae(qi)}function Nm(e){ir(qi.current);var t=ir(cn.current),n=ll(t,e.type);t!==n&&(Te(Hi,e),Te(cn,n))}function Fc(e){Hi.current===e&&(Ae(cn),Ae(Hi))}var Me=Qn(0);function ho(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _a=[];function Bc(){for(var e=0;e<_a.length;e++)_a[e]._workInProgressVersionPrimary=null;_a.length=0}var Us=jn.ReactCurrentDispatcher,Sa=jn.ReactCurrentBatchConfig,dr=0,Oe=null,Je=null,Qe=null,go=!1,Ci=!1,Ji=0,hv=0;function rt(){throw Error(X(321))}function Uc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xt(e[n],t[n]))return!1;return!0}function Vc(e,t,n,r,i,o){if(dr=o,Oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Us.current=e===null||e.memoizedState===null?vv:bv,e=n(r,i),Ci){o=0;do{if(Ci=!1,Ji=0,25<=o)throw Error(X(301));o+=1,Qe=Je=null,t.updateQueue=null,Us.current=kv,e=n(r,i)}while(Ci)}if(Us.current=xo,t=Je!==null&&Je.next!==null,dr=0,Qe=Je=Oe=null,go=!1,t)throw Error(X(300));return e}function Wc(){var e=Ji!==0;return Ji=0,e}function tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Oe.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Ut(){if(Je===null){var e=Oe.alternate;e=e!==null?e.memoizedState:null}else e=Je.next;var t=Qe===null?Oe.memoizedState:Qe.next;if(t!==null)Qe=t,Je=e;else{if(e===null)throw Error(X(310));Je=e,e={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},Qe===null?Oe.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function Ki(e,t){return typeof t=="function"?t(e):t}function Ca(e){var t=Ut(),n=t.queue;if(n===null)throw Error(X(311));n.lastRenderedReducer=e;var r=Je,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,c=null,u=o;do{var d=u.lane;if((dr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,a=r):c=c.next=p,Oe.lanes|=d,pr|=d}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=l,Xt(r,t.memoizedState)||(ht=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Oe.lanes|=o,pr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Na(e){var t=Ut(),n=t.queue;if(n===null)throw Error(X(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Xt(o,t.memoizedState)||(ht=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Em(){}function zm(e,t){var n=Oe,r=Ut(),i=t(),o=!Xt(r.memoizedState,i);if(o&&(r.memoizedState=i,ht=!0),r=r.queue,Hc(Lm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,Qi(9,Pm.bind(null,n,r,i,t),void 0,null),Ye===null)throw Error(X(349));dr&30||Tm(n,t,i)}return i}function Tm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Oe.updateQueue,t===null?(t={lastEffect:null,stores:null},Oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Pm(e,t,n,r){t.value=n,t.getSnapshot=r,Am(t)&&Rm(e)}function Lm(e,t,n){return n(function(){Am(t)&&Rm(e)})}function Am(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xt(e,n)}catch{return!0}}function Rm(e){var t=kn(e,1);t!==null&&Gt(t,e,1,-1)}function wd(e){var t=tn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:e},t.queue=e,e=e.dispatch=yv.bind(null,Oe,e),[t.memoizedState,e]}function Qi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Oe.updateQueue,t===null?(t={lastEffect:null,stores:null},Oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Mm(){return Ut().memoizedState}function Vs(e,t,n,r){var i=tn();Oe.flags|=e,i.memoizedState=Qi(1|t,n,void 0,r===void 0?null:r)}function Fo(e,t,n,r){var i=Ut();r=r===void 0?null:r;var o=void 0;if(Je!==null){var a=Je.memoizedState;if(o=a.destroy,r!==null&&Uc(r,a.deps)){i.memoizedState=Qi(t,n,o,r);return}}Oe.flags|=e,i.memoizedState=Qi(1|t,n,o,r)}function jd(e,t){return Vs(8390656,8,e,t)}function Hc(e,t){return Fo(2048,8,e,t)}function Om(e,t){return Fo(4,2,e,t)}function Im(e,t){return Fo(4,4,e,t)}function $m(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Dm(e,t,n){return n=n!=null?n.concat([e]):null,Fo(4,4,$m.bind(null,t,e),n)}function qc(){}function Fm(e,t){var n=Ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Uc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Bm(e,t){var n=Ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Uc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Um(e,t,n){return dr&21?(Xt(n,t)||(n=Jf(),Oe.lanes|=n,pr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ht=!0),e.memoizedState=n)}function gv(e,t){var n=Ee;Ee=n!==0&&4>n?n:4,e(!0);var r=Sa.transition;Sa.transition={};try{e(!1),t()}finally{Ee=n,Sa.transition=r}}function Vm(){return Ut().memoizedState}function xv(e,t,n){var r=Un(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Wm(e))Hm(t,n);else if(n=Sm(e,t,n,r),n!==null){var i=ut();Gt(n,e,r,i),qm(n,t,r)}}function yv(e,t,n){var r=Un(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wm(e))Hm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Xt(l,a)){var c=t.interleaved;c===null?(i.next=i,Ic(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Sm(e,t,i,r),n!==null&&(i=ut(),Gt(n,e,r,i),qm(n,t,r))}}function Wm(e){var t=e.alternate;return e===Oe||t!==null&&t===Oe}function Hm(e,t){Ci=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,jc(e,n)}}var xo={readContext:Bt,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},vv={readContext:Bt,useCallback:function(e,t){return tn().memoizedState=[e,t===void 0?null:t],e},useContext:Bt,useEffect:jd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vs(4194308,4,$m.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vs(4,2,e,t)},useMemo:function(e,t){var n=tn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=xv.bind(null,Oe,e),[r.memoizedState,e]},useRef:function(e){var t=tn();return e={current:e},t.memoizedState=e},useState:wd,useDebugValue:qc,useDeferredValue:function(e){return tn().memoizedState=e},useTransition:function(){var e=wd(!1),t=e[0];return e=gv.bind(null,e[1]),tn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Oe,i=tn();if(Re){if(n===void 0)throw Error(X(407));n=n()}else{if(n=t(),Ye===null)throw Error(X(349));dr&30||Tm(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,jd(Lm.bind(null,r,o,e),[e]),r.flags|=2048,Qi(9,Pm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=tn(),t=Ye.identifierPrefix;if(Re){var n=gn,r=hn;n=(r&~(1<<32-Qt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ji++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=hv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},bv={readContext:Bt,useCallback:Fm,useContext:Bt,useEffect:Hc,useImperativeHandle:Dm,useInsertionEffect:Om,useLayoutEffect:Im,useMemo:Bm,useReducer:Ca,useRef:Mm,useState:function(){return Ca(Ki)},useDebugValue:qc,useDeferredValue:function(e){var t=Ut();return Um(t,Je.memoizedState,e)},useTransition:function(){var e=Ca(Ki)[0],t=Ut().memoizedState;return[e,t]},useMutableSource:Em,useSyncExternalStore:zm,useId:Vm,unstable_isNewReconciler:!1},kv={readContext:Bt,useCallback:Fm,useContext:Bt,useEffect:Hc,useImperativeHandle:Dm,useInsertionEffect:Om,useLayoutEffect:Im,useMemo:Bm,useReducer:Na,useRef:Mm,useState:function(){return Na(Ki)},useDebugValue:qc,useDeferredValue:function(e){var t=Ut();return Je===null?t.memoizedState=e:Um(t,Je.memoizedState,e)},useTransition:function(){var e=Na(Ki)[0],t=Ut().memoizedState;return[e,t]},useMutableSource:Em,useSyncExternalStore:zm,useId:Vm,unstable_isNewReconciler:!1};function qt(e,t){if(e&&e.defaultProps){t=Ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function zl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bo={isMounted:function(e){return(e=e._reactInternals)?gr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ut(),i=Un(e),o=xn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Fn(e,o,i),t!==null&&(Gt(t,e,i,r),Bs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ut(),i=Un(e),o=xn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Fn(e,o,i),t!==null&&(Gt(t,e,i,r),Bs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ut(),r=Un(e),i=xn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Fn(e,i,r),t!==null&&(Gt(t,e,r,n),Bs(t,e,r))}};function _d(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Bi(n,r)||!Bi(i,o):!0}function Jm(e,t,n){var r=!1,i=qn,o=t.contextType;return typeof o=="object"&&o!==null?o=Bt(o):(i=xt(t)?cr:ot.current,r=t.contextTypes,o=(r=r!=null)?Vr(e,i):qn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Bo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Sd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bo.enqueueReplaceState(t,t.state,null)}function Tl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},$c(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Bt(o):(o=xt(t)?cr:ot.current,i.context=Vr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(zl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Bo.enqueueReplaceState(i,i.state,null),mo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Jr(e,t){try{var n="",r=t;do n+=Qx(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ea(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Pl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var wv=typeof WeakMap=="function"?WeakMap:Map;function Km(e,t,n){n=xn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){vo||(vo=!0,Bl=r),Pl(e,t)},n}function Qm(e,t,n){n=xn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Pl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Pl(e,t),typeof r!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Cd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new wv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ov.bind(null,e,t,n),t.then(e,e))}function Nd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ed(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=xn(-1,1),t.tag=2,Fn(n,t,1))),n.lanes|=1),e)}var jv=jn.ReactCurrentOwner,ht=!1;function ct(e,t,n,r){t.child=e===null?_m(t,null,n,r):Hr(t,e.child,n,r)}function zd(e,t,n,r,i){n=n.render;var o=t.ref;return $r(t,i),r=Vc(e,t,n,r,o,i),n=Wc(),e!==null&&!ht?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,wn(e,t,i)):(Re&&n&&Pc(t),t.flags|=1,ct(e,t,r,i),t.child)}function Td(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!eu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Gm(e,t,o,r,i)):(e=Js(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Bi,n(a,r)&&e.ref===t.ref)return wn(e,t,i)}return t.flags|=1,e=Vn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Gm(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Bi(o,r)&&e.ref===t.ref)if(ht=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ht=!0);else return t.lanes=e.lanes,wn(e,t,i)}return Ll(e,t,n,r,i)}function Ym(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(Lr,jt),jt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Te(Lr,jt),jt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Te(Lr,jt),jt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Te(Lr,jt),jt|=r;return ct(e,t,i,n),t.child}function Xm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ll(e,t,n,r,i){var o=xt(n)?cr:ot.current;return o=Vr(t,o),$r(t,i),n=Vc(e,t,n,r,o,i),r=Wc(),e!==null&&!ht?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,wn(e,t,i)):(Re&&r&&Pc(t),t.flags|=1,ct(e,t,n,i),t.child)}function Pd(e,t,n,r,i){if(xt(n)){var o=!0;lo(t)}else o=!1;if($r(t,i),t.stateNode===null)Ws(e,t),Jm(t,n,r),Tl(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Bt(u):(u=xt(n)?cr:ot.current,u=Vr(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Sd(t,a,r,u),zn=!1;var f=t.memoizedState;a.state=f,mo(t,r,a,i),c=t.memoizedState,l!==r||f!==c||gt.current||zn?(typeof d=="function"&&(zl(t,n,d,r),c=t.memoizedState),(l=zn||_d(t,n,l,r,f,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Cm(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:qt(t.type,l),a.props=u,p=t.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Bt(c):(c=xt(n)?cr:ot.current,c=Vr(t,c));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||f!==c)&&Sd(t,a,r,c),zn=!1,f=t.memoizedState,a.state=f,mo(t,r,a,i);var x=t.memoizedState;l!==p||f!==x||gt.current||zn?(typeof m=="function"&&(zl(t,n,m,r),x=t.memoizedState),(u=zn||_d(t,n,u,r,f,x,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),a.props=r,a.state=x,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Al(e,t,n,r,o,i)}function Al(e,t,n,r,i,o){Xm(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&gd(t,n,!1),wn(e,t,o);r=t.stateNode,jv.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Hr(t,e.child,null,o),t.child=Hr(t,null,l,o)):ct(e,t,l,o),t.memoizedState=r.state,i&&gd(t,n,!0),t.child}function Zm(e){var t=e.stateNode;t.pendingContext?hd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hd(e,t.context,!1),Dc(e,t.containerInfo)}function Ld(e,t,n,r,i){return Wr(),Ac(i),t.flags|=256,ct(e,t,n,r),t.child}var Rl={dehydrated:null,treeContext:null,retryLane:0};function Ml(e){return{baseLanes:e,cachePool:null,transitions:null}}function eh(e,t,n){var r=t.pendingProps,i=Me.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Te(Me,i&1),e===null)return Nl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Wo(a,r,0,null),e=or(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ml(n),t.memoizedState=Rl,e):Jc(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return _v(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Vn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Vn(l,o):(o=or(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Ml(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Rl,r}return o=e.child,e=o.sibling,r=Vn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Jc(e,t){return t=Wo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ns(e,t,n,r){return r!==null&&Ac(r),Hr(t,e.child,null,n),e=Jc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _v(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Ea(Error(X(422))),Ns(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Wo({mode:"visible",children:r.children},i,0,null),o=or(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Hr(t,e.child,null,a),t.child.memoizedState=Ml(a),t.memoizedState=Rl,o);if(!(t.mode&1))return Ns(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(X(419)),r=Ea(o,r,void 0),Ns(e,t,a,r)}if(l=(a&e.childLanes)!==0,ht||l){if(r=Ye,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,kn(e,i),Gt(r,e,i,-1))}return Zc(),r=Ea(Error(X(421))),Ns(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Iv.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,St=Dn(i.nextSibling),Et=t,Re=!0,Kt=null,e!==null&&(Mt[Ot++]=hn,Mt[Ot++]=gn,Mt[Ot++]=ur,hn=e.id,gn=e.overflow,ur=t),t=Jc(t,r.children),t.flags|=4096,t)}function Ad(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),El(e.return,t,n)}function za(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function th(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ct(e,t,r.children,n),r=Me.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ad(e,n,t);else if(e.tag===19)Ad(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Te(Me,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ho(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),za(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ho(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}za(t,!0,n,null,o);break;case"together":za(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ws(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(X(153));if(t.child!==null){for(e=t.child,n=Vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Sv(e,t,n){switch(t.tag){case 3:Zm(t),Wr();break;case 5:Nm(t);break;case 1:xt(t.type)&&lo(t);break;case 4:Dc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Te(po,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Te(Me,Me.current&1),t.flags|=128,null):n&t.child.childLanes?eh(e,t,n):(Te(Me,Me.current&1),e=wn(e,t,n),e!==null?e.sibling:null);Te(Me,Me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return th(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Te(Me,Me.current),r)break;return null;case 22:case 23:return t.lanes=0,Ym(e,t,n)}return wn(e,t,n)}var nh,Ol,rh,ih;nh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ol=function(){};rh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ir(cn.current);var o=null;switch(n){case"input":i=il(e,i),r=il(e,r),o=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),o=[];break;case"textarea":i=al(e,i),r=al(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=oo)}cl(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ri.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ri.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Le("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};ih=function(e,t,n,r){n!==r&&(t.flags|=4)};function ci(e,t){if(!Re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function it(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Cv(e,t,n){var r=t.pendingProps;switch(Lc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(t),null;case 1:return xt(t.type)&&ao(),it(t),null;case 3:return r=t.stateNode,qr(),Ae(gt),Ae(ot),Bc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ss(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Kt!==null&&(Wl(Kt),Kt=null))),Ol(e,t),it(t),null;case 5:Fc(t);var i=ir(qi.current);if(n=t.type,e!==null&&t.stateNode!=null)rh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(X(166));return it(t),null}if(e=ir(cn.current),Ss(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[sn]=t,r[Wi]=o,e=(t.mode&1)!==0,n){case"dialog":Le("cancel",r),Le("close",r);break;case"iframe":case"object":case"embed":Le("load",r);break;case"video":case"audio":for(i=0;i<vi.length;i++)Le(vi[i],r);break;case"source":Le("error",r);break;case"img":case"image":case"link":Le("error",r),Le("load",r);break;case"details":Le("toggle",r);break;case"input":Uu(r,o),Le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Le("invalid",r);break;case"textarea":Wu(r,o),Le("invalid",r)}cl(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&_s(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&_s(r.textContent,l,e),i=["children",""+l]):Ri.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Le("scroll",r)}switch(n){case"input":gs(r),Vu(r,o,!0);break;case"textarea":gs(r),Hu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=oo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Lf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[sn]=t,e[Wi]=r,nh(e,t,!1,!1),t.stateNode=e;e:{switch(a=ul(n,r),n){case"dialog":Le("cancel",e),Le("close",e),i=r;break;case"iframe":case"object":case"embed":Le("load",e),i=r;break;case"video":case"audio":for(i=0;i<vi.length;i++)Le(vi[i],e);i=r;break;case"source":Le("error",e),i=r;break;case"img":case"image":case"link":Le("error",e),Le("load",e),i=r;break;case"details":Le("toggle",e),i=r;break;case"input":Uu(e,r),i=il(e,r),Le("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),Le("invalid",e);break;case"textarea":Wu(e,r),i=al(e,r),Le("invalid",e);break;default:i=r}cl(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Mf(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Af(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Mi(e,c):typeof c=="number"&&Mi(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ri.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Le("scroll",e):c!=null&&xc(e,o,c,a))}switch(n){case"input":gs(e),Vu(e,r,!1);break;case"textarea":gs(e),Hu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Hn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Rr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Rr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=oo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return it(t),null;case 6:if(e&&t.stateNode!=null)ih(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(X(166));if(n=ir(qi.current),ir(cn.current),Ss(t)){if(r=t.stateNode,n=t.memoizedProps,r[sn]=t,(o=r.nodeValue!==n)&&(e=Et,e!==null))switch(e.tag){case 3:_s(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_s(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[sn]=t,t.stateNode=r}return it(t),null;case 13:if(Ae(Me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Re&&St!==null&&t.mode&1&&!(t.flags&128))wm(),Wr(),t.flags|=98560,o=!1;else if(o=Ss(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(X(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(X(317));o[sn]=t}else Wr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;it(t),o=!1}else Kt!==null&&(Wl(Kt),Kt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Me.current&1?Ke===0&&(Ke=3):Zc())),t.updateQueue!==null&&(t.flags|=4),it(t),null);case 4:return qr(),Ol(e,t),e===null&&Ui(t.stateNode.containerInfo),it(t),null;case 10:return Oc(t.type._context),it(t),null;case 17:return xt(t.type)&&ao(),it(t),null;case 19:if(Ae(Me),o=t.memoizedState,o===null)return it(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)ci(o,!1);else{if(Ke!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ho(e),a!==null){for(t.flags|=128,ci(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Te(Me,Me.current&1|2),t.child}e=e.sibling}o.tail!==null&&Fe()>Kr&&(t.flags|=128,r=!0,ci(o,!1),t.lanes=4194304)}else{if(!r)if(e=ho(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ci(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Re)return it(t),null}else 2*Fe()-o.renderingStartTime>Kr&&n!==1073741824&&(t.flags|=128,r=!0,ci(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Fe(),t.sibling=null,n=Me.current,Te(Me,r?n&1|2:n&1),t):(it(t),null);case 22:case 23:return Xc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?jt&1073741824&&(it(t),t.subtreeFlags&6&&(t.flags|=8192)):it(t),null;case 24:return null;case 25:return null}throw Error(X(156,t.tag))}function Nv(e,t){switch(Lc(t),t.tag){case 1:return xt(t.type)&&ao(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qr(),Ae(gt),Ae(ot),Bc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fc(t),null;case 13:if(Ae(Me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(X(340));Wr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ae(Me),null;case 4:return qr(),null;case 10:return Oc(t.type._context),null;case 22:case 23:return Xc(),null;case 24:return null;default:return null}}var Es=!1,st=!1,Ev=typeof WeakSet=="function"?WeakSet:Set,ce=null;function Pr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$e(e,t,r)}else n.current=null}function Il(e,t,n){try{n()}catch(r){$e(e,t,r)}}var Rd=!1;function zv(e,t){if(bl=ro,e=cm(),Tc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var m;p!==n||i!==0&&p.nodeType!==3||(l=a+i),p!==o||r!==0&&p.nodeType!==3||(c=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===e)break t;if(f===n&&++u===i&&(l=a),f===o&&++d===r&&(c=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(kl={focusedElem:e,selectionRange:n},ro=!1,ce=t;ce!==null;)if(t=ce,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ce=e;else for(;ce!==null;){t=ce;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var b=x.memoizedProps,T=x.memoizedState,y=t.stateNode,g=y.getSnapshotBeforeUpdate(t.elementType===t.type?b:qt(t.type,b),T);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(X(163))}}catch(P){$e(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,ce=e;break}ce=t.return}return x=Rd,Rd=!1,x}function Ni(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Il(t,n,o)}i=i.next}while(i!==r)}}function Uo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function $l(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function sh(e){var t=e.alternate;t!==null&&(e.alternate=null,sh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[sn],delete t[Wi],delete t[_l],delete t[dv],delete t[pv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function oh(e){return e.tag===5||e.tag===3||e.tag===4}function Md(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||oh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Dl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=oo));else if(r!==4&&(e=e.child,e!==null))for(Dl(e,t,n),e=e.sibling;e!==null;)Dl(e,t,n),e=e.sibling}function Fl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fl(e,t,n),e=e.sibling;e!==null;)Fl(e,t,n),e=e.sibling}var Ze=null,Jt=!1;function Cn(e,t,n){for(n=n.child;n!==null;)ah(e,t,n),n=n.sibling}function ah(e,t,n){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(Ro,n)}catch{}switch(n.tag){case 5:st||Pr(n,t);case 6:var r=Ze,i=Jt;Ze=null,Cn(e,t,n),Ze=r,Jt=i,Ze!==null&&(Jt?(e=Ze,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ze.removeChild(n.stateNode));break;case 18:Ze!==null&&(Jt?(e=Ze,n=n.stateNode,e.nodeType===8?wa(e.parentNode,n):e.nodeType===1&&wa(e,n),Di(e)):wa(Ze,n.stateNode));break;case 4:r=Ze,i=Jt,Ze=n.stateNode.containerInfo,Jt=!0,Cn(e,t,n),Ze=r,Jt=i;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Il(n,t,a),i=i.next}while(i!==r)}Cn(e,t,n);break;case 1:if(!st&&(Pr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){$e(n,t,l)}Cn(e,t,n);break;case 21:Cn(e,t,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,Cn(e,t,n),st=r):Cn(e,t,n);break;default:Cn(e,t,n)}}function Od(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ev),t.forEach(function(r){var i=$v.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ht(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ze=l.stateNode,Jt=!1;break e;case 3:Ze=l.stateNode.containerInfo,Jt=!0;break e;case 4:Ze=l.stateNode.containerInfo,Jt=!0;break e}l=l.return}if(Ze===null)throw Error(X(160));ah(o,a,i),Ze=null,Jt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){$e(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lh(t,e),t=t.sibling}function lh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ht(t,e),en(e),r&4){try{Ni(3,e,e.return),Uo(3,e)}catch(b){$e(e,e.return,b)}try{Ni(5,e,e.return)}catch(b){$e(e,e.return,b)}}break;case 1:Ht(t,e),en(e),r&512&&n!==null&&Pr(n,n.return);break;case 5:if(Ht(t,e),en(e),r&512&&n!==null&&Pr(n,n.return),e.flags&32){var i=e.stateNode;try{Mi(i,"")}catch(b){$e(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Tf(i,o),ul(l,a);var u=ul(l,o);for(a=0;a<c.length;a+=2){var d=c[a],p=c[a+1];d==="style"?Mf(i,p):d==="dangerouslySetInnerHTML"?Af(i,p):d==="children"?Mi(i,p):xc(i,d,p,u)}switch(l){case"input":sl(i,o);break;case"textarea":Pf(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Rr(i,!!o.multiple,m,!1):f!==!!o.multiple&&(o.defaultValue!=null?Rr(i,!!o.multiple,o.defaultValue,!0):Rr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Wi]=o}catch(b){$e(e,e.return,b)}}break;case 6:if(Ht(t,e),en(e),r&4){if(e.stateNode===null)throw Error(X(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(b){$e(e,e.return,b)}}break;case 3:if(Ht(t,e),en(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Di(t.containerInfo)}catch(b){$e(e,e.return,b)}break;case 4:Ht(t,e),en(e);break;case 13:Ht(t,e),en(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Gc=Fe())),r&4&&Od(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(st=(u=st)||d,Ht(t,e),st=u):Ht(t,e),en(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(ce=e,d=e.child;d!==null;){for(p=ce=d;ce!==null;){switch(f=ce,m=f.child,f.tag){case 0:case 11:case 14:case 15:Ni(4,f,f.return);break;case 1:Pr(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(b){$e(r,n,b)}}break;case 5:Pr(f,f.return);break;case 22:if(f.memoizedState!==null){$d(p);continue}}m!==null?(m.return=f,ce=m):$d(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Rf("display",a))}catch(b){$e(e,e.return,b)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(b){$e(e,e.return,b)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ht(t,e),en(e),r&4&&Od(e);break;case 21:break;default:Ht(t,e),en(e)}}function en(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(oh(n)){var r=n;break e}n=n.return}throw Error(X(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Mi(i,""),r.flags&=-33);var o=Md(e);Fl(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Md(e);Dl(e,l,a);break;default:throw Error(X(161))}}catch(c){$e(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Tv(e,t,n){ce=e,ch(e)}function ch(e,t,n){for(var r=(e.mode&1)!==0;ce!==null;){var i=ce,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Es;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||st;l=Es;var u=st;if(Es=a,(st=c)&&!u)for(ce=i;ce!==null;)a=ce,c=a.child,a.tag===22&&a.memoizedState!==null?Dd(i):c!==null?(c.return=a,ce=c):Dd(i);for(;o!==null;)ce=o,ch(o),o=o.sibling;ce=i,Es=l,st=u}Id(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,ce=o):Id(e)}}function Id(e){for(;ce!==null;){var t=ce;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:st||Uo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!st)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:qt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&kd(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}kd(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Di(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(X(163))}st||t.flags&512&&$l(t)}catch(f){$e(t,t.return,f)}}if(t===e){ce=null;break}if(n=t.sibling,n!==null){n.return=t.return,ce=n;break}ce=t.return}}function $d(e){for(;ce!==null;){var t=ce;if(t===e){ce=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ce=n;break}ce=t.return}}function Dd(e){for(;ce!==null;){var t=ce;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Uo(4,t)}catch(c){$e(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){$e(t,i,c)}}var o=t.return;try{$l(t)}catch(c){$e(t,o,c)}break;case 5:var a=t.return;try{$l(t)}catch(c){$e(t,a,c)}}}catch(c){$e(t,t.return,c)}if(t===e){ce=null;break}var l=t.sibling;if(l!==null){l.return=t.return,ce=l;break}ce=t.return}}var Pv=Math.ceil,yo=jn.ReactCurrentDispatcher,Kc=jn.ReactCurrentOwner,Ft=jn.ReactCurrentBatchConfig,_e=0,Ye=null,He=null,et=0,jt=0,Lr=Qn(0),Ke=0,Gi=null,pr=0,Vo=0,Qc=0,Ei=null,mt=null,Gc=0,Kr=1/0,fn=null,vo=!1,Bl=null,Bn=null,zs=!1,An=null,bo=0,zi=0,Ul=null,Hs=-1,qs=0;function ut(){return _e&6?Fe():Hs!==-1?Hs:Hs=Fe()}function Un(e){return e.mode&1?_e&2&&et!==0?et&-et:mv.transition!==null?(qs===0&&(qs=Jf()),qs):(e=Ee,e!==0||(e=window.event,e=e===void 0?16:em(e.type)),e):1}function Gt(e,t,n,r){if(50<zi)throw zi=0,Ul=null,Error(X(185));is(e,n,r),(!(_e&2)||e!==Ye)&&(e===Ye&&(!(_e&2)&&(Vo|=n),Ke===4&&Pn(e,et)),yt(e,r),n===1&&_e===0&&!(t.mode&1)&&(Kr=Fe()+500,Do&&Gn()))}function yt(e,t){var n=e.callbackNode;my(e,t);var r=no(e,e===Ye?et:0);if(r===0)n!==null&&Ku(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ku(n),t===1)e.tag===0?fv(Fd.bind(null,e)):vm(Fd.bind(null,e)),cv(function(){!(_e&6)&&Gn()}),n=null;else{switch(Kf(r)){case 1:n=wc;break;case 4:n=Hf;break;case 16:n=to;break;case 536870912:n=qf;break;default:n=to}n=xh(n,uh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function uh(e,t){if(Hs=-1,qs=0,_e&6)throw Error(X(327));var n=e.callbackNode;if(Dr()&&e.callbackNode!==n)return null;var r=no(e,e===Ye?et:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ko(e,r);else{t=r;var i=_e;_e|=2;var o=ph();(Ye!==e||et!==t)&&(fn=null,Kr=Fe()+500,sr(e,t));do try{Rv();break}catch(l){dh(e,l)}while(!0);Mc(),yo.current=o,_e=i,He!==null?t=0:(Ye=null,et=0,t=Ke)}if(t!==0){if(t===2&&(i=hl(e),i!==0&&(r=i,t=Vl(e,i))),t===1)throw n=Gi,sr(e,0),Pn(e,r),yt(e,Fe()),n;if(t===6)Pn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Lv(i)&&(t=ko(e,r),t===2&&(o=hl(e),o!==0&&(r=o,t=Vl(e,o))),t===1))throw n=Gi,sr(e,0),Pn(e,r),yt(e,Fe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(X(345));case 2:er(e,mt,fn);break;case 3:if(Pn(e,r),(r&130023424)===r&&(t=Gc+500-Fe(),10<t)){if(no(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ut(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=jl(er.bind(null,e,mt,fn),t);break}er(e,mt,fn);break;case 4:if(Pn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Qt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Pv(r/1960))-r,10<r){e.timeoutHandle=jl(er.bind(null,e,mt,fn),r);break}er(e,mt,fn);break;case 5:er(e,mt,fn);break;default:throw Error(X(329))}}}return yt(e,Fe()),e.callbackNode===n?uh.bind(null,e):null}function Vl(e,t){var n=Ei;return e.current.memoizedState.isDehydrated&&(sr(e,t).flags|=256),e=ko(e,t),e!==2&&(t=mt,mt=n,t!==null&&Wl(t)),e}function Wl(e){mt===null?mt=e:mt.push.apply(mt,e)}function Lv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Xt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pn(e,t){for(t&=~Qc,t&=~Vo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Qt(t),r=1<<n;e[n]=-1,t&=~r}}function Fd(e){if(_e&6)throw Error(X(327));Dr();var t=no(e,0);if(!(t&1))return yt(e,Fe()),null;var n=ko(e,t);if(e.tag!==0&&n===2){var r=hl(e);r!==0&&(t=r,n=Vl(e,r))}if(n===1)throw n=Gi,sr(e,0),Pn(e,t),yt(e,Fe()),n;if(n===6)throw Error(X(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,er(e,mt,fn),yt(e,Fe()),null}function Yc(e,t){var n=_e;_e|=1;try{return e(t)}finally{_e=n,_e===0&&(Kr=Fe()+500,Do&&Gn())}}function fr(e){An!==null&&An.tag===0&&!(_e&6)&&Dr();var t=_e;_e|=1;var n=Ft.transition,r=Ee;try{if(Ft.transition=null,Ee=1,e)return e()}finally{Ee=r,Ft.transition=n,_e=t,!(_e&6)&&Gn()}}function Xc(){jt=Lr.current,Ae(Lr)}function sr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,lv(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(Lc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ao();break;case 3:qr(),Ae(gt),Ae(ot),Bc();break;case 5:Fc(r);break;case 4:qr();break;case 13:Ae(Me);break;case 19:Ae(Me);break;case 10:Oc(r.type._context);break;case 22:case 23:Xc()}n=n.return}if(Ye=e,He=e=Vn(e.current,null),et=jt=t,Ke=0,Gi=null,Qc=Vo=pr=0,mt=Ei=null,rr!==null){for(t=0;t<rr.length;t++)if(n=rr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}rr=null}return e}function dh(e,t){do{var n=He;try{if(Mc(),Us.current=xo,go){for(var r=Oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}go=!1}if(dr=0,Qe=Je=Oe=null,Ci=!1,Ji=0,Kc.current=null,n===null||n.return===null){Ke=1,Gi=t,He=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=et,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Nd(a);if(m!==null){m.flags&=-257,Ed(m,a,l,o,t),m.mode&1&&Cd(o,u,t),t=m,c=u;var x=t.updateQueue;if(x===null){var b=new Set;b.add(c),t.updateQueue=b}else x.add(c);break e}else{if(!(t&1)){Cd(o,u,t),Zc();break e}c=Error(X(426))}}else if(Re&&l.mode&1){var T=Nd(a);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Ed(T,a,l,o,t),Ac(Jr(c,l));break e}}o=c=Jr(c,l),Ke!==4&&(Ke=2),Ei===null?Ei=[o]:Ei.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var y=Km(o,c,t);bd(o,y);break e;case 1:l=c;var g=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Bn===null||!Bn.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var P=Qm(o,l,t);bd(o,P);break e}}o=o.return}while(o!==null)}mh(n)}catch(C){t=C,He===n&&n!==null&&(He=n=n.return);continue}break}while(!0)}function ph(){var e=yo.current;return yo.current=xo,e===null?xo:e}function Zc(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),Ye===null||!(pr&268435455)&&!(Vo&268435455)||Pn(Ye,et)}function ko(e,t){var n=_e;_e|=2;var r=ph();(Ye!==e||et!==t)&&(fn=null,sr(e,t));do try{Av();break}catch(i){dh(e,i)}while(!0);if(Mc(),_e=n,yo.current=r,He!==null)throw Error(X(261));return Ye=null,et=0,Ke}function Av(){for(;He!==null;)fh(He)}function Rv(){for(;He!==null&&!sy();)fh(He)}function fh(e){var t=gh(e.alternate,e,jt);e.memoizedProps=e.pendingProps,t===null?mh(e):He=t,Kc.current=null}function mh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Nv(n,t),n!==null){n.flags&=32767,He=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ke=6,He=null;return}}else if(n=Cv(n,t,jt),n!==null){He=n;return}if(t=t.sibling,t!==null){He=t;return}He=t=e}while(t!==null);Ke===0&&(Ke=5)}function er(e,t,n){var r=Ee,i=Ft.transition;try{Ft.transition=null,Ee=1,Mv(e,t,n,r)}finally{Ft.transition=i,Ee=r}return null}function Mv(e,t,n,r){do Dr();while(An!==null);if(_e&6)throw Error(X(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(X(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(hy(e,o),e===Ye&&(He=Ye=null,et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zs||(zs=!0,xh(to,function(){return Dr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ft.transition,Ft.transition=null;var a=Ee;Ee=1;var l=_e;_e|=4,Kc.current=null,zv(e,n),lh(n,e),tv(kl),ro=!!bl,kl=bl=null,e.current=n,Tv(n),oy(),_e=l,Ee=a,Ft.transition=o}else e.current=n;if(zs&&(zs=!1,An=e,bo=i),o=e.pendingLanes,o===0&&(Bn=null),cy(n.stateNode),yt(e,Fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(vo)throw vo=!1,e=Bl,Bl=null,e;return bo&1&&e.tag!==0&&Dr(),o=e.pendingLanes,o&1?e===Ul?zi++:(zi=0,Ul=e):zi=0,Gn(),null}function Dr(){if(An!==null){var e=Kf(bo),t=Ft.transition,n=Ee;try{if(Ft.transition=null,Ee=16>e?16:e,An===null)var r=!1;else{if(e=An,An=null,bo=0,_e&6)throw Error(X(331));var i=_e;for(_e|=4,ce=e.current;ce!==null;){var o=ce,a=o.child;if(ce.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(ce=u;ce!==null;){var d=ce;switch(d.tag){case 0:case 11:case 15:Ni(8,d,o)}var p=d.child;if(p!==null)p.return=d,ce=p;else for(;ce!==null;){d=ce;var f=d.sibling,m=d.return;if(sh(d),d===u){ce=null;break}if(f!==null){f.return=m,ce=f;break}ce=m}}}var x=o.alternate;if(x!==null){var b=x.child;if(b!==null){x.child=null;do{var T=b.sibling;b.sibling=null,b=T}while(b!==null)}}ce=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,ce=a;else e:for(;ce!==null;){if(o=ce,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ni(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,ce=y;break e}ce=o.return}}var g=e.current;for(ce=g;ce!==null;){a=ce;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,ce=h;else e:for(a=g;ce!==null;){if(l=ce,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Uo(9,l)}}catch(C){$e(l,l.return,C)}if(l===a){ce=null;break e}var P=l.sibling;if(P!==null){P.return=l.return,ce=P;break e}ce=l.return}}if(_e=i,Gn(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(Ro,e)}catch{}r=!0}return r}finally{Ee=n,Ft.transition=t}}return!1}function Bd(e,t,n){t=Jr(n,t),t=Km(e,t,1),e=Fn(e,t,1),t=ut(),e!==null&&(is(e,1,t),yt(e,t))}function $e(e,t,n){if(e.tag===3)Bd(e,e,n);else for(;t!==null;){if(t.tag===3){Bd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bn===null||!Bn.has(r))){e=Jr(n,e),e=Qm(t,e,1),t=Fn(t,e,1),e=ut(),t!==null&&(is(t,1,e),yt(t,e));break}}t=t.return}}function Ov(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ut(),e.pingedLanes|=e.suspendedLanes&n,Ye===e&&(et&n)===n&&(Ke===4||Ke===3&&(et&130023424)===et&&500>Fe()-Gc?sr(e,0):Qc|=n),yt(e,t)}function hh(e,t){t===0&&(e.mode&1?(t=vs,vs<<=1,!(vs&130023424)&&(vs=4194304)):t=1);var n=ut();e=kn(e,t),e!==null&&(is(e,t,n),yt(e,n))}function Iv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hh(e,n)}function $v(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(X(314))}r!==null&&r.delete(t),hh(e,n)}var gh;gh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||gt.current)ht=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ht=!1,Sv(e,t,n);ht=!!(e.flags&131072)}else ht=!1,Re&&t.flags&1048576&&bm(t,uo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ws(e,t),e=t.pendingProps;var i=Vr(t,ot.current);$r(t,n),i=Vc(null,t,r,e,i,n);var o=Wc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xt(r)?(o=!0,lo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$c(t),i.updater=Bo,t.stateNode=i,i._reactInternals=t,Tl(t,r,e,n),t=Al(null,t,r,!0,o,n)):(t.tag=0,Re&&o&&Pc(t),ct(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ws(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Fv(r),e=qt(r,e),i){case 0:t=Ll(null,t,r,e,n);break e;case 1:t=Pd(null,t,r,e,n);break e;case 11:t=zd(null,t,r,e,n);break e;case 14:t=Td(null,t,r,qt(r.type,e),n);break e}throw Error(X(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qt(r,i),Ll(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qt(r,i),Pd(e,t,r,i,n);case 3:e:{if(Zm(t),e===null)throw Error(X(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Cm(e,t),mo(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Jr(Error(X(423)),t),t=Ld(e,t,r,n,i);break e}else if(r!==i){i=Jr(Error(X(424)),t),t=Ld(e,t,r,n,i);break e}else for(St=Dn(t.stateNode.containerInfo.firstChild),Et=t,Re=!0,Kt=null,n=_m(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wr(),r===i){t=wn(e,t,n);break e}ct(e,t,r,n)}t=t.child}return t;case 5:return Nm(t),e===null&&Nl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,wl(r,i)?a=null:o!==null&&wl(r,o)&&(t.flags|=32),Xm(e,t),ct(e,t,a,n),t.child;case 6:return e===null&&Nl(t),null;case 13:return eh(e,t,n);case 4:return Dc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Hr(t,null,r,n):ct(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qt(r,i),zd(e,t,r,i,n);case 7:return ct(e,t,t.pendingProps,n),t.child;case 8:return ct(e,t,t.pendingProps.children,n),t.child;case 12:return ct(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Te(po,r._currentValue),r._currentValue=a,o!==null)if(Xt(o.value,a)){if(o.children===i.children&&!gt.current){t=wn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=xn(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),El(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(X(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),El(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ct(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,$r(t,n),i=Bt(i),r=r(i),t.flags|=1,ct(e,t,r,n),t.child;case 14:return r=t.type,i=qt(r,t.pendingProps),i=qt(r.type,i),Td(e,t,r,i,n);case 15:return Gm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qt(r,i),Ws(e,t),t.tag=1,xt(r)?(e=!0,lo(t)):e=!1,$r(t,n),Jm(t,r,i),Tl(t,r,i,n),Al(null,t,r,!0,e,n);case 19:return th(e,t,n);case 22:return Ym(e,t,n)}throw Error(X(156,t.tag))};function xh(e,t){return Wf(e,t)}function Dv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(e,t,n,r){return new Dv(e,t,n,r)}function eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fv(e){if(typeof e=="function")return eu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vc)return 11;if(e===bc)return 14}return 2}function Vn(e,t){var n=e.alternate;return n===null?(n=$t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Js(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")eu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case wr:return or(n.children,i,o,t);case yc:a=8,i|=8;break;case el:return e=$t(12,n,t,i|2),e.elementType=el,e.lanes=o,e;case tl:return e=$t(13,n,t,i),e.elementType=tl,e.lanes=o,e;case nl:return e=$t(19,n,t,i),e.elementType=nl,e.lanes=o,e;case Nf:return Wo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Sf:a=10;break e;case Cf:a=9;break e;case vc:a=11;break e;case bc:a=14;break e;case En:a=16,r=null;break e}throw Error(X(130,e==null?e:typeof e,""))}return t=$t(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function or(e,t,n,r){return e=$t(7,e,r,t),e.lanes=n,e}function Wo(e,t,n,r){return e=$t(22,e,r,t),e.elementType=Nf,e.lanes=n,e.stateNode={isHidden:!1},e}function Ta(e,t,n){return e=$t(6,e,null,t),e.lanes=n,e}function Pa(e,t,n){return t=$t(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=da(0),this.expirationTimes=da(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=da(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function tu(e,t,n,r,i,o,a,l,c){return e=new Bv(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=$t(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$c(o),e}function Uv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function yh(e){if(!e)return qn;e=e._reactInternals;e:{if(gr(e)!==e||e.tag!==1)throw Error(X(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(X(171))}if(e.tag===1){var n=e.type;if(xt(n))return ym(e,n,t)}return t}function vh(e,t,n,r,i,o,a,l,c){return e=tu(n,r,!0,e,i,o,a,l,c),e.context=yh(null),n=e.current,r=ut(),i=Un(n),o=xn(r,i),o.callback=t??null,Fn(n,o,i),e.current.lanes=i,is(e,i,r),yt(e,r),e}function Ho(e,t,n,r){var i=t.current,o=ut(),a=Un(i);return n=yh(n),t.context===null?t.context=n:t.pendingContext=n,t=xn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Fn(i,t,a),e!==null&&(Gt(e,i,a,o),Bs(e,i,a)),a}function wo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ud(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function nu(e,t){Ud(e,t),(e=e.alternate)&&Ud(e,t)}function Vv(){return null}var bh=typeof reportError=="function"?reportError:function(e){console.error(e)};function ru(e){this._internalRoot=e}qo.prototype.render=ru.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(X(409));Ho(e,t,null,null)};qo.prototype.unmount=ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fr(function(){Ho(null,e,null,null)}),t[bn]=null}};function qo(e){this._internalRoot=e}qo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Yf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Tn.length&&t!==0&&t<Tn[n].priority;n++);Tn.splice(n,0,e),n===0&&Zf(e)}};function iu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Jo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vd(){}function Wv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=wo(a);o.call(u)}}var a=vh(t,r,e,0,null,!1,!1,"",Vd);return e._reactRootContainer=a,e[bn]=a.current,Ui(e.nodeType===8?e.parentNode:e),fr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=wo(c);l.call(u)}}var c=tu(e,0,!1,null,null,!1,!1,"",Vd);return e._reactRootContainer=c,e[bn]=c.current,Ui(e.nodeType===8?e.parentNode:e),fr(function(){Ho(t,c,n,r)}),c}function Ko(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=wo(a);l.call(c)}}Ho(t,a,e,i)}else a=Wv(n,t,e,i,r);return wo(a)}Qf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=yi(t.pendingLanes);n!==0&&(jc(t,n|1),yt(t,Fe()),!(_e&6)&&(Kr=Fe()+500,Gn()))}break;case 13:fr(function(){var r=kn(e,1);if(r!==null){var i=ut();Gt(r,e,1,i)}}),nu(e,1)}};_c=function(e){if(e.tag===13){var t=kn(e,134217728);if(t!==null){var n=ut();Gt(t,e,134217728,n)}nu(e,134217728)}};Gf=function(e){if(e.tag===13){var t=Un(e),n=kn(e,t);if(n!==null){var r=ut();Gt(n,e,t,r)}nu(e,t)}};Yf=function(){return Ee};Xf=function(e,t){var n=Ee;try{return Ee=e,t()}finally{Ee=n}};pl=function(e,t,n){switch(t){case"input":if(sl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=$o(r);if(!i)throw Error(X(90));zf(r),sl(r,i)}}}break;case"textarea":Pf(e,n);break;case"select":t=n.value,t!=null&&Rr(e,!!n.multiple,t,!1)}};$f=Yc;Df=fr;var Hv={usingClientEntryPoint:!1,Events:[os,Cr,$o,Of,If,Yc]},ui={findFiberByHostInstance:nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qv={bundleType:ui.bundleType,version:ui.version,rendererPackageName:ui.rendererPackageName,rendererConfig:ui.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Uf(e),e===null?null:e.stateNode},findFiberByHostInstance:ui.findFiberByHostInstance||Vv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ts=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ts.isDisabled&&Ts.supportsFiber)try{Ro=Ts.inject(qv),ln=Ts}catch{}}Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hv;Tt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!iu(t))throw Error(X(200));return Uv(e,t,null,n)};Tt.createRoot=function(e,t){if(!iu(e))throw Error(X(299));var n=!1,r="",i=bh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=tu(e,1,!1,null,null,n,!1,r,i),e[bn]=t.current,Ui(e.nodeType===8?e.parentNode:e),new ru(t)};Tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(X(188)):(e=Object.keys(e).join(","),Error(X(268,e)));return e=Uf(t),e=e===null?null:e.stateNode,e};Tt.flushSync=function(e){return fr(e)};Tt.hydrate=function(e,t,n){if(!Jo(t))throw Error(X(200));return Ko(null,e,t,!0,n)};Tt.hydrateRoot=function(e,t,n){if(!iu(e))throw Error(X(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=bh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=vh(t,null,e,1,n??null,i,!1,o,a),e[bn]=t.current,Ui(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new qo(t)};Tt.render=function(e,t,n){if(!Jo(t))throw Error(X(200));return Ko(null,e,t,!1,n)};Tt.unmountComponentAtNode=function(e){if(!Jo(e))throw Error(X(40));return e._reactRootContainer?(fr(function(){Ko(null,null,e,!1,function(){e._reactRootContainer=null,e[bn]=null})}),!0):!1};Tt.unstable_batchedUpdates=Yc;Tt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Jo(n))throw Error(X(200));if(e==null||e._reactInternals===void 0)throw Error(X(38));return Ko(e,t,n,!1,r)};Tt.version="18.3.1-next-f1338f8080-20240426";function kh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kh)}catch(e){console.error(e)}}kh(),kf.exports=Tt;var wh=kf.exports,Wd=wh;Xa.createRoot=Wd.createRoot,Xa.hydrateRoot=Wd.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yi(){return Yi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yi.apply(this,arguments)}var Rn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Rn||(Rn={}));const Hd="popstate";function Jv(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Hl("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:jh(i)}return Qv(t,n,null,e)}function qe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function su(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Kv(){return Math.random().toString(36).substr(2,8)}function qd(e,t){return{usr:e.state,key:e.key,idx:t}}function Hl(e,t,n,r){return n===void 0&&(n=null),Yi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ei(t):t,{state:n,key:t&&t.key||r||Kv()})}function jh(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ei(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Qv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=Rn.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(Yi({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function p(){l=Rn.Pop;let T=d(),y=T==null?null:T-u;u=T,c&&c({action:l,location:b.location,delta:y})}function f(T,y){l=Rn.Push;let g=Hl(b.location,T,y);u=d()+1;let h=qd(g,u),P=b.createHref(g);try{a.pushState(h,"",P)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(P)}o&&c&&c({action:l,location:b.location,delta:1})}function m(T,y){l=Rn.Replace;let g=Hl(b.location,T,y);u=d();let h=qd(g,u),P=b.createHref(g);a.replaceState(h,"",P),o&&c&&c({action:l,location:b.location,delta:0})}function x(T){let y=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof T=="string"?T:jh(T);return g=g.replace(/ $/,"%20"),qe(y,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,y)}let b={get action(){return l},get location(){return e(i,a)},listen(T){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Hd,p),c=T,()=>{i.removeEventListener(Hd,p),c=null}},createHref(T){return t(i,T)},createURL:x,encodeLocation(T){let y=x(T);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:f,replace:m,go(T){return a.go(T)}};return b}var Jd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Jd||(Jd={}));function Gv(e,t,n){return n===void 0&&(n="/"),Yv(e,t,n)}function Yv(e,t,n,r){let i=typeof t=="string"?ei(t):t,o=Ch(i.pathname||"/",n);if(o==null)return null;let a=_h(e);Xv(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=u1(o);l=a1(a[c],u)}return l}function _h(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(qe(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=ar([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(qe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),_h(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:s1(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let c of Sh(o.path))i(o,a,c)}),t}function Sh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Sh(r.join("/")),l=[];return l.push(...a.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Xv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:o1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Zv=/^:[\w-]+$/,e1=3,t1=2,n1=1,r1=10,i1=-2,Kd=e=>e==="*";function s1(e,t){let n=e.split("/"),r=n.length;return n.some(Kd)&&(r+=i1),t&&(r+=t1),n.filter(i=>!Kd(i)).reduce((i,o)=>i+(Zv.test(o)?e1:o===""?n1:r1),r)}function o1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function a1(e,t,n){let{routesMeta:r}=e,i={},o="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",p=l1({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),f=c.route;if(!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:ar([o,p.pathname]),pathnameBase:h1(ar([o,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(o=ar([o,p.pathnameBase]))}return a}function l1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=c1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:f,isOptional:m}=d;if(f==="*"){let b=l[p]||"";a=o.slice(0,o.length-b.length).replace(/(.)\/+$/,"$1")}const x=l[p];return m&&!x?u[f]=void 0:u[f]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function c1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),su(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function u1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return su(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ch(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const d1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,p1=e=>d1.test(e);function f1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ei(e):e,o;if(n)if(p1(n))o=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),su(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?o=Qd(n.substring(1),"/"):o=Qd(n,t)}else o=t;return{pathname:o,search:g1(r),hash:x1(i)}}function Qd(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function La(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function m1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Nh(e,t){let n=m1(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Eh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ei(e):(i=Yi({},e),qe(!i.pathname||!i.pathname.includes("?"),La("?","pathname","search",i)),qe(!i.pathname||!i.pathname.includes("#"),La("#","pathname","hash",i)),qe(!i.search||!i.search.includes("#"),La("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}l=p>=0?t[p]:"/"}let c=f1(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const ar=e=>e.join("/").replace(/\/\/+/g,"/"),h1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),g1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,x1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function y1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const zh=["post","put","patch","delete"];new Set(zh);const v1=["get",...zh];new Set(v1);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xi(){return Xi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xi.apply(this,arguments)}const ou=w.createContext(null),b1=w.createContext(null),ls=w.createContext(null),Qo=w.createContext(null),Yn=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Th=w.createContext(null);function cs(){return w.useContext(Qo)!=null}function au(){return cs()||qe(!1),w.useContext(Qo).location}function Ph(e){w.useContext(ls).static||w.useLayoutEffect(e)}function lu(){let{isDataRoute:e}=w.useContext(Yn);return e?R1():k1()}function k1(){cs()||qe(!1);let e=w.useContext(ou),{basename:t,future:n,navigator:r}=w.useContext(ls),{matches:i}=w.useContext(Yn),{pathname:o}=au(),a=JSON.stringify(Nh(i,n.v7_relativeSplatPath)),l=w.useRef(!1);return Ph(()=>{l.current=!0}),w.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=Eh(u,JSON.parse(a),o,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:ar([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,a,o,e])}function w1(){let{matches:e}=w.useContext(Yn),t=e[e.length-1];return t?t.params:{}}function j1(e,t){return _1(e,t)}function _1(e,t,n,r){cs()||qe(!1);let{navigator:i}=w.useContext(ls),{matches:o}=w.useContext(Yn),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=au(),d;if(t){var p;let T=typeof t=="string"?ei(t):t;c==="/"||(p=T.pathname)!=null&&p.startsWith(c)||qe(!1),d=T}else d=u;let f=d.pathname||"/",m=f;if(c!=="/"){let T=c.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(T.length).join("/")}let x=Gv(e,{pathname:m}),b=z1(x&&x.map(T=>Object.assign({},T,{params:Object.assign({},l,T.params),pathname:ar([c,i.encodeLocation?i.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?c:ar([c,i.encodeLocation?i.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),o,n,r);return t&&b?w.createElement(Qo.Provider,{value:{location:Xi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Rn.Pop}},b):b}function S1(){let e=A1(),t=y1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,null)}const C1=w.createElement(S1,null);class N1 extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(Yn.Provider,{value:this.props.routeContext},w.createElement(Th.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function E1(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(ou);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Yn.Provider,{value:t},r)}function z1(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||qe(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:m}=n,x=p.route.loader&&f[p.route.id]===void 0&&(!m||m[p.route.id]===void 0);if(p.route.lazy||x){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,p,f)=>{let m,x=!1,b=null,T=null;n&&(m=l&&p.route.id?l[p.route.id]:void 0,b=p.route.errorElement||C1,c&&(u<0&&f===0?(M1("route-fallback"),x=!0,T=null):u===f&&(x=!0,T=p.route.hydrateFallbackElement||null)));let y=t.concat(a.slice(0,f+1)),g=()=>{let h;return m?h=b:x?h=T:p.route.Component?h=w.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=d,w.createElement(E1,{match:p,routeContext:{outlet:d,matches:y,isDataRoute:n!=null},children:h})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?w.createElement(N1,{location:n.location,revalidation:n.revalidation,component:b,error:m,children:g(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):g()},null)}var Lh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Lh||{}),Ah=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ah||{});function T1(e){let t=w.useContext(ou);return t||qe(!1),t}function P1(e){let t=w.useContext(b1);return t||qe(!1),t}function L1(e){let t=w.useContext(Yn);return t||qe(!1),t}function Rh(e){let t=L1(),n=t.matches[t.matches.length-1];return n.route.id||qe(!1),n.route.id}function A1(){var e;let t=w.useContext(Th),n=P1(),r=Rh();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function R1(){let{router:e}=T1(Lh.UseNavigateStable),t=Rh(Ah.UseNavigateStable),n=w.useRef(!1);return Ph(()=>{n.current=!0}),w.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Xi({fromRouteId:t},o)))},[e,t])}const Gd={};function M1(e,t,n){Gd[e]||(Gd[e]=!0)}function O1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function I1(e){let{to:t,replace:n,state:r,relative:i}=e;cs()||qe(!1);let{future:o,static:a}=w.useContext(ls),{matches:l}=w.useContext(Yn),{pathname:c}=au(),u=lu(),d=Eh(t,Nh(l,o.v7_relativeSplatPath),c,i==="path"),p=JSON.stringify(d);return w.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:i}),[u,p,i,n,r]),null}function br(e){qe(!1)}function $1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Rn.Pop,navigator:o,static:a=!1,future:l}=e;cs()&&qe(!1);let c=t.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:c,navigator:o,static:a,future:Xi({v7_relativeSplatPath:!1},l)}),[c,l,o,a]);typeof r=="string"&&(r=ei(r));let{pathname:d="/",search:p="",hash:f="",state:m=null,key:x="default"}=r,b=w.useMemo(()=>{let T=Ch(d,c);return T==null?null:{location:{pathname:T,search:p,hash:f,state:m,key:x},navigationType:i}},[c,d,p,f,m,x,i]);return b==null?null:w.createElement(ls.Provider,{value:u},w.createElement(Qo.Provider,{children:n,value:b}))}function D1(e){let{children:t,location:n}=e;return j1(ql(t),n)}new Promise(()=>{});function ql(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let o=[...t,i];if(r.type===w.Fragment){n.push.apply(n,ql(r.props.children,o));return}r.type!==br&&qe(!1),!r.props.index||!r.props.children||qe(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=ql(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const F1="6";try{window.__reactRouterVersion=F1}catch{}const B1="startTransition",Yd=Ox[B1];function U1(e){let{basename:t,children:n,future:r,window:i}=e,o=w.useRef();o.current==null&&(o.current=Jv({window:i,v5Compat:!0}));let a=o.current,[l,c]=w.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=w.useCallback(p=>{u&&Yd?Yd(()=>c(p)):c(p)},[c,u]);return w.useLayoutEffect(()=>a.listen(d),[a,d]),w.useEffect(()=>O1(r),[r]),w.createElement($1,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}var Xd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Xd||(Xd={}));var Zd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Zd||(Zd={}));const V1={},ep=e=>{let t;const n=new Set,r=(d,p)=>{const f=typeof d=="function"?d(t):d;if(!Object.is(f,t)){const m=t;t=p??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(x=>x(t,m))}},i=()=>t,c={setState:r,getState:i,getInitialState:()=>u,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(V1?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,c);return c},W1=e=>e?ep(e):ep;var Mh={exports:{}},Oh={},Ih={exports:{}},$h={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qr=w;function H1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var q1=typeof Object.is=="function"?Object.is:H1,J1=Qr.useState,K1=Qr.useEffect,Q1=Qr.useLayoutEffect,G1=Qr.useDebugValue;function Y1(e,t){var n=t(),r=J1({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return Q1(function(){i.value=n,i.getSnapshot=t,Aa(i)&&o({inst:i})},[e,n,t]),K1(function(){return Aa(i)&&o({inst:i}),e(function(){Aa(i)&&o({inst:i})})},[e]),G1(n),n}function Aa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!q1(e,n)}catch{return!0}}function X1(e,t){return t()}var Z1=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?X1:Y1;$h.useSyncExternalStore=Qr.useSyncExternalStore!==void 0?Qr.useSyncExternalStore:Z1;Ih.exports=$h;var e0=Ih.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Go=w,t0=e0;function n0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var r0=typeof Object.is=="function"?Object.is:n0,i0=t0.useSyncExternalStore,s0=Go.useRef,o0=Go.useEffect,a0=Go.useMemo,l0=Go.useDebugValue;Oh.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=s0(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=a0(function(){function c(m){if(!u){if(u=!0,d=m,m=r(m),i!==void 0&&a.hasValue){var x=a.value;if(i(x,m))return p=x}return p=m}if(x=p,r0(d,m))return x;var b=r(m);return i!==void 0&&i(x,b)?(d=m,x):(d=m,p=b)}var u=!1,d,p,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,r,i]);var l=i0(e,o[0],o[1]);return o0(function(){a.hasValue=!0,a.value=l},[l]),l0(l),l};Mh.exports=Oh;var c0=Mh.exports;const u0=Lo(c0),Dh={},{useDebugValue:d0}=Nt,{useSyncExternalStoreWithSelector:p0}=u0;let tp=!1;const f0=e=>e;function m0(e,t=f0,n){(Dh?"production":void 0)!=="production"&&n&&!tp&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),tp=!0);const r=p0(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return d0(r),r}const np=e=>{(Dh?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?W1(e):e,n=(r,i)=>m0(t,r,i);return Object.assign(n,t),n},h0=e=>e?np(e):np,at=h0((e,t)=>({project:null,selectedAgentId:null,selectedToolId:null,mcpServers:[],builtinTools:[],isRunning:!1,runEvents:[],watches:[],activeTab:"app",sidebarOpen:!0,hasUnsavedChanges:!1,runAgentId:null,currentSessionId:null,setProject:n=>{var i;const r=((i=n==null?void 0:n.watches)==null?void 0:i.map(o=>({...o,result:void 0,error:void 0,isLoading:!1,lastRun:void 0,history:[]})))||[];e({project:n,watches:r})},setSelectedAgentId:n=>e({selectedAgentId:n}),setSelectedToolId:n=>e({selectedToolId:n}),setMcpServers:n=>e({mcpServers:n}),setBuiltinTools:n=>e({builtinTools:n}),setIsRunning:n=>e({isRunning:n}),addRunEvent:n=>e(r=>({runEvents:[...r.runEvents,n]})),clearRunEvents:()=>e({runEvents:[]}),setWatches:n=>e({watches:n}),updateWatch:(n,r)=>e(i=>{const o=i.watches.map(l=>l.id===n?{...l,...r}:l);if(("serverName"in r||"toolName"in r||"args"in r||"transform"in r)&&i.project){const l=o.map(({id:c,serverName:u,toolName:d,args:p,transform:f})=>({id:c,serverName:u,toolName:d,args:p,transform:f}));return{watches:o,project:{...i.project,watches:l},hasUnsavedChanges:!0}}return{watches:o}}),addWatch:n=>e(r=>{const i=[...r.watches,n],{project:o}=r;if(o){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...o,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),removeWatch:n=>e(r=>{const i=r.watches.filter(a=>a.id!==n),{project:o}=r;if(o){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...o,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),clearWatchHistories:()=>e(n=>({watches:n.watches.map(r=>({...r,history:[],result:void 0,error:void 0}))})),setActiveTab:n=>e({activeTab:n}),setSidebarOpen:n=>e({sidebarOpen:n}),setHasUnsavedChanges:n=>e({hasUnsavedChanges:n}),setRunAgentId:n=>e({runAgentId:n}),setCurrentSessionId:n=>e({currentSessionId:n}),updateProject:n=>{const{project:r}=t();r&&e({project:{...r,...n}})},addAgent:n=>{const{project:r}=t();r&&e({project:{...r,agents:[...r.agents,n]}})},updateAgent:(n,r)=>{const{project:i}=t();i&&e({project:{...i,agents:i.agents.map(o=>o.id===n?{...o,...r}:o)}})},removeAgent:n=>{const{project:r,selectedAgentId:i}=t();r&&e({project:{...r,agents:r.agents.filter(o=>o.id!==n)},selectedAgentId:i===n?null:i})},addCustomTool:n=>{const{project:r}=t();r&&e({project:{...r,custom_tools:[...r.custom_tools,n]}})},updateCustomTool:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_tools:i.custom_tools.map(o=>o.id===n?{...o,...r}:o)}})},removeCustomTool:n=>{const{project:r,selectedToolId:i}=t();r&&e({project:{...r,custom_tools:r.custom_tools.filter(o=>o.id!==n)},selectedToolId:i===n?null:i})},addCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:[...r.custom_callbacks||[],n]}})},updateCustomCallback:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_callbacks:(i.custom_callbacks||[]).map(o=>o.id===n?{...o,...r}:o)}})},removeCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:(r.custom_callbacks||[]).filter(i=>i.id!==n)}})}})),Fh="/api";async function Se(e,t){const n=await fetch(`${Fh}${e}`,{...t,headers:{"Content-Type":"application/json",...t==null?void 0:t.headers}});if(!n.ok){const r=await n.json().catch(()=>({detail:"Unknown error"}));throw new Error(r.detail||`HTTP ${n.status}`)}return n.json()}async function Bh(){return(await Se("/projects")).projects}async function Uh(e){return(await Se(`/projects/${e}`)).project}async function Vh(e,t=""){return(await Se("/projects",{method:"POST",body:JSON.stringify({name:e,description:t})})).project}async function Jl(e,t){return(await Se(`/projects/${e}`,{method:"PUT",body:JSON.stringify(t)})).project}async function Wh(e){await Se(`/projects/${e}`,{method:"DELETE"})}async function Hh(e){return Se(`/sessions/${e}/save-to-memory`,{method:"POST"})}async function Kl(e){return(await Se(`/projects/${e}/sessions`)).sessions}async function qh(e,t){return(await Se(`/projects/${e}/sessions/${t}/load`)).session}async function Jh(e){return(await Se(`/projects/${e}/yaml`)).yaml}async function Kh(e,t){return(await Se(`/projects/${e}/yaml`,{method:"PUT",body:JSON.stringify({yaml:t})})).project}async function cu(){return(await Se("/mcp-servers")).servers}async function Qh(){return(await Se("/builtin-tools")).tools}function Gh(e){const t=window.location.protocol==="https:"?"wss:":"ws:",n=window.location.host;return new WebSocket(`${t}//${n}/ws/run/${e}`)}async function Ks(e,t,n,r){return await Se(`/projects/${e}/generate-prompt`,{method:"POST",body:JSON.stringify({agent_id:t,context:n,agent_config:r||void 0})})}async function Yh(e,t){return await Se(`/projects/${e}/generate-agent-config`,{method:"POST",body:JSON.stringify({description:t})})}async function Xh(e,t,n,r=[],i){return await Se(`/projects/${e}/generate-tool-code`,{method:"POST",body:JSON.stringify({tool_name:t,tool_description:n,state_keys_used:r,context:i})})}async function Zh(e,t,n,r,i=[],o){return await Se(`/projects/${e}/generate-callback-code`,{method:"POST",body:JSON.stringify({callback_name:t,callback_description:n,callback_type:r,state_keys_used:i,context:o})})}async function Ql(e){return await Se("/test-mcp-server",{method:"POST",body:JSON.stringify(e)})}async function eg(e,t){return Se(`/projects/${e}/skillsets/${t}/stats`)}async function tg(e,t,n,r,i=500,o=50){return Se(`/projects/${e}/skillsets/${t}/url`,{method:"POST",body:JSON.stringify({url:n,source_name:r,chunk_size:i,chunk_overlap:o})})}async function ng(e,t,n,r=500,i=50){const o=new FormData;o.append("file",n),o.append("chunk_size",String(r)),o.append("chunk_overlap",String(i));const a=await fetch(`${Fh}/projects/${e}/skillsets/${t}/file`,{method:"POST",body:o});if(!a.ok)throw new Error(`Upload failed: ${a.statusText}`);return a.json()}async function rg(e,t,n,r=10,i=0){return Se(`/projects/${e}/skillsets/${t}/search`,{method:"POST",body:JSON.stringify({query:n,top_k:r,min_score:i})})}async function ig(e,t){return Se(`/projects/${e}/skillsets/${t}/entries`,{method:"DELETE"})}async function sg(){return Se("/skillsets/embeddings-available")}const Ve={async get(e){return Se(e)},async post(e,t){return Se(e,{method:"POST",body:t?JSON.stringify(t):void 0})},async put(e,t){return Se(e,{method:"PUT",body:t?JSON.stringify(t):void 0})},async delete(e){return Se(e,{method:"DELETE"})}},g0=Object.freeze(Object.defineProperty({__proto__:null,addSkillSetUrl:tg,api:Ve,checkEmbeddingsAvailable:sg,clearSkillSet:ig,createProject:Vh,createRunWebSocket:Gh,deleteProject:Wh,fetchJSON:Se,generateAgentConfig:Yh,generateCallbackCode:Zh,generatePrompt:Ks,generateToolCode:Xh,getBuiltinTools:Qh,getMcpServers:cu,getProject:Uh,getProjectYaml:Jh,getSkillSetStats:eg,listProjectSessions:Kl,listProjects:Bh,loadSession:qh,saveSessionToMemory:Hh,searchSkillSet:rg,testMcpServer:Ql,updateProject:Jl,updateProjectFromYaml:Kh,uploadSkillSetFile:ng},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var x0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),de=(e,t)=>{const n=w.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:l="",children:c,...u},d)=>w.createElement("svg",{ref:d,...x0,width:i,height:i,stroke:r,strokeWidth:a?Number(o)*24/Number(i):o,className:["lucide",`lucide-${y0(e)}`,l].join(" "),...u},[...t.map(([p,f])=>w.createElement(p,f)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=de("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=de("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=de("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=de("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=de("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=de("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=de("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=de("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=de("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=de("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=de("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=de("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=de("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=de("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=de("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=de("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=de("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=de("FileCheck",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=de("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=de("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=de("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=de("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=de("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=de("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=de("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=de("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=de("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=de("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=de("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=de("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=de("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=de("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=de("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=de("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=de("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=de("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=de("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=de("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=de("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=de("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=de("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=de("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=de("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=de("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=de("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=de("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=de("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=de("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=de("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=de("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=de("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=de("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=de("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=de("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=de("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=de("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=de("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=de("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=de("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=de("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=de("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function M0(){const e=lu(),[t,n]=w.useState([]),[r,i]=w.useState(!0),[o,a]=w.useState(!1),[l,c]=w.useState("");w.useEffect(()=>{u()},[]);async function u(){try{const f=await Bh();n(f)}catch(f){console.error("Failed to load projects:",f)}finally{i(!1)}}async function d(){if(l.trim())try{const f=await Vh(l.trim());e(`/project/${f.id}`)}catch(f){console.error("Failed to create project:",f)}}async function p(f,m){if(m.stopPropagation(),!!confirm("Delete this project?"))try{await Wh(f),n(t.filter(x=>x.id!==f))}catch(x){console.error("Failed to delete project:",x)}}return s.jsxs("div",{className:"project-list",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("header",{className:"header",children:[s.jsxs("div",{className:"logo",children:[s.jsx(fu,{size:40,className:"logo-icon"}),s.jsx("h1",{className:"title",children:"ADK Playground"})]}),s.jsx("p",{className:"subtitle",children:"Build, test, and deploy AI agents visually"})]}),s.jsxs("div",{className:"content",children:[o?s.jsxs("div",{className:"create-form",children:[s.jsx("input",{type:"text",placeholder:"Project name...",value:l,onChange:f=>c(f.target.value),onKeyDown:f=>f.key==="Enter"&&d(),autoFocus:!0}),s.jsxs("button",{className:"btn btn-primary",onClick:d,children:[s.jsx(Ge,{size:18}),"Create"]}),s.jsx("button",{className:"btn btn-secondary",onClick:()=>a(!1),children:"Cancel"})]}):s.jsx("div",{className:"create-form",children:s.jsxs("button",{className:"btn btn-primary",onClick:()=>a(!0),children:[s.jsx(Ge,{size:18}),"New Project"]})}),r?s.jsx("div",{className:"loading",children:"Loading projects..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(rp,{size:48,style:{marginBottom:16,opacity:.3}}),s.jsx("p",{children:"No projects yet. Create one to get started!"})]}):s.jsx("div",{className:"projects-grid",children:t.map(f=>s.jsxs("div",{className:"project-card",onClick:()=>e(`/project/${f.id}`),children:[s.jsxs("h3",{children:[s.jsx(rp,{size:18}),f.name]}),s.jsx("p",{children:f.description||"No description"}),s.jsx("button",{className:"delete-btn",onClick:m=>p(f.id,m),children:s.jsx(De,{size:16})})]},f.id))})]})]})}const sp={},O0=5*60*1e3;function I0({projectId:e,value:t,provider:n,apiBase:r,onChange:i,placeholder:o="Search models..."}){const a=`${e}:${n||""}:${r||""}`,[l,c]=w.useState(t||""),[u,d]=w.useState(!1),[p,f]=w.useState([]),[m,x]=w.useState(!1),[b,T]=w.useState(null),[y,g]=w.useState(-1),[h,P]=w.useState({top:0,left:0,width:0}),C=w.useRef(null),_=w.useRef(null);w.useEffect(()=>{if(u&&C.current){const U=C.current.getBoundingClientRect();P({top:U.bottom+window.scrollY+4,left:U.left+window.scrollX,width:U.width})}},[u]);const N=w.useCallback(async()=>{const U=sp[a];if(U&&Date.now()-U.timestamp<O0){const D=[];Object.values(U.providers).forEach(ne=>{D.push(...ne.models)}),f(D);return}x(!0),T(null);try{const D=new URLSearchParams;n&&D.append("provider",n),r&&D.append("api_base",r);const ne=`/models/${e}${D.toString()?"?"+D.toString():""}`,L=await Ve.get(ne);sp[a]={providers:L.providers,timestamp:Date.now()};const I=[];Object.values(L.providers).forEach(A=>{A.models&&A.models.length>0&&I.push(...A.models)}),f(I)}catch(D){T(D.message||"Failed to fetch models")}finally{x(!1)}},[e,a,r,n]);w.useEffect(()=>{N()},[N]),w.useEffect(()=>{c(t||"")},[t]);const k=p.filter(U=>{const D=l.toLowerCase();return U.id.toLowerCase().includes(D)||U.name.toLowerCase().includes(D)||U.provider.toLowerCase().includes(D)});w.useEffect(()=>{const U=D=>{_.current&&!_.current.contains(D.target)&&C.current&&!C.current.contains(D.target)&&d(!1)};return document.addEventListener("mousedown",U),()=>document.removeEventListener("mousedown",U)},[]);const R=U=>{if(!u){(U.key==="ArrowDown"||U.key==="Enter")&&(d(!0),U.preventDefault());return}switch(U.key){case"ArrowDown":g(D=>Math.min(D+1,k.length-1)),U.preventDefault();break;case"ArrowUp":g(D=>Math.max(D-1,0)),U.preventDefault();break;case"Enter":y>=0&&y<k.length&&S(k[y]),U.preventDefault();break;case"Escape":d(!1);break}},S=U=>{c(U.id),i(U.id,U.provider),d(!1)},v=U=>{c(U.target.value),d(!0),g(-1),i(U.target.value,n||"gemini")},z=U=>{switch(U.toLowerCase()){case"gemini":return"provider-gemini";case"anthropic":return"provider-anthropic";case"openai":return"provider-openai";case"groq":return"provider-groq";case"ollama":return"provider-ollama";default:return"provider-other"}},F=u?s.jsxs("div",{ref:_,className:"model-autocomplete-dropdown model-autocomplete-dropdown-portal",style:{position:"fixed",top:h.top,left:h.left,width:h.width},children:[m&&s.jsx("div",{className:"model-autocomplete-loading",children:"Loading models..."}),b&&s.jsx("div",{className:"model-autocomplete-error",children:b}),!m&&!b&&k.length===0&&s.jsx("div",{className:"model-autocomplete-empty",children:l?"No matching models":"No models available"}),!m&&k.length>0&&s.jsxs("div",{className:"model-autocomplete-list",children:[k.slice(0,50).map((U,D)=>s.jsxs("div",{className:`model-autocomplete-item ${D===y?"highlighted":""}`,onClick:()=>S(U),onMouseEnter:()=>g(D),children:[s.jsx("span",{className:`provider-badge ${z(U.provider)}`,children:U.provider}),s.jsx("span",{className:"model-id",children:U.id}),U.context_window&&s.jsxs("span",{className:"model-context",title:`${U.context_window.toLocaleString()} token context`,children:[Math.round(U.context_window/1e3),"K"]}),U.supports_tools&&s.jsx("span",{className:"model-feature",title:"Supports function calling / tools",children:"🔧"}),U.supports_vision&&s.jsx("span",{className:"model-feature",title:"Supports image/vision input",children:"👁️"}),U.supports_json_mode&&s.jsx("span",{className:"model-feature",title:"Supports structured JSON output",children:"📋"})]},`${U.provider}-${U.id}`)),k.length>50&&s.jsxs("div",{className:"model-autocomplete-more",children:["+",k.length-50," more..."]})]})]}):null;return s.jsxs("div",{className:"model-autocomplete",children:[s.jsx("input",{ref:C,type:"text",value:l,onChange:v,onFocus:()=>d(!0),onKeyDown:R,placeholder:o,className:"model-autocomplete-input"}),F&&wh.createPortal(F,document.body)]})}const $0=[{value:"gemini",label:"Gemini"},{value:"anthropic",label:"Anthropic"},{value:"openai",label:"OpenAI"},{value:"groq",label:"Groq"},{value:"litellm",label:"LiteLLM / Other"}];function D0(e,t){return e.startsWith("openai/")?"openai":e.startsWith("groq/")?"groq":e.startsWith("ollama/")?"litellm":e.startsWith("claude-")?"anthropic":e.startsWith("gemini-")?"gemini":e.includes("/")?"litellm":t||"gemini"}function xg({projectId:e,values:t,onChange:n,className:r=""}){return s.jsxs("div",{className:`model-config-form ${r}`,children:[s.jsxs("div",{className:"model-config-row",children:[s.jsxs("div",{className:"model-config-field",style:{flex:1},children:[s.jsx("label",{children:"Provider"}),s.jsx("select",{value:t.provider||"gemini",onChange:i=>n({provider:i.target.value}),children:$0.map(i=>s.jsx("option",{value:i.value,children:i.label},i.value))})]}),s.jsxs("div",{className:"model-config-field",style:{flex:3},children:[s.jsx("label",{children:"Model"}),s.jsx(I0,{projectId:e,value:t.model_name||"",provider:t.provider,apiBase:t.api_base,onChange:(i,o)=>{const a=D0(i,o);n({model_name:i,provider:a})},placeholder:"Search models..."})]}),t.provider==="litellm"&&s.jsxs("div",{className:"model-config-field",style:{flex:2},children:[s.jsx("label",{children:"API Base"}),s.jsx("input",{type:"text",value:t.api_base||"",onChange:i=>n({api_base:i.target.value||void 0}),placeholder:"http://localhost:11434"})]})]}),s.jsxs("div",{className:"model-config-row",children:[s.jsxs("div",{className:"model-config-field",children:[s.jsx("label",{children:"Temperature"}),s.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:t.temperature??"",onChange:i=>n({temperature:i.target.value?parseFloat(i.target.value):void 0}),placeholder:"Default"})]}),s.jsxs("div",{className:"model-config-field",children:[s.jsx("label",{children:"Max Tokens"}),s.jsx("input",{type:"number",min:"1",value:t.max_output_tokens??"",onChange:i=>n({max_output_tokens:i.target.value?parseInt(i.target.value):void 0}),placeholder:"Default"})]}),s.jsxs("div",{className:"model-config-field",children:[s.jsx("label",{children:"Top P"}),s.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:t.top_p??"",onChange:i=>n({top_p:i.target.value?parseFloat(i.target.value):void 0}),placeholder:"Default"})]}),s.jsxs("div",{className:"model-config-field",children:[s.jsx("label",{children:"Top K"}),s.jsx("input",{type:"number",min:"1",value:t.top_k??"",onChange:i=>n({top_k:i.target.value?parseInt(i.target.value):void 0}),placeholder:"Default"})]})]})]})}const F0=[{key:"GOOGLE_API_KEY",description:"API key for Gemini models"},{key:"OPENAI_API_KEY",description:"API key for OpenAI models (via LiteLLM)"},{key:"ANTHROPIC_API_KEY",description:"API key for Anthropic Claude models"},{key:"AZURE_API_KEY",description:"API key for Azure OpenAI Service"},{key:"AZURE_API_BASE",description:"Base URL for Azure OpenAI endpoint (e.g., https://your-resource.openai.azure.com)"},{key:"AZURE_API_VERSION",description:"API version for Azure OpenAI (e.g., 2024-02-15-preview)"},{key:"GOOGLE_GENAI_USE_VERTEXAI",description:'Set to "1" to use Vertex AI instead of API key'},{key:"GOOGLE_CLOUD_PROJECT",description:"Google Cloud project ID for Vertex AI"},{key:"GOOGLE_CLOUD_REGION",description:"Google Cloud region for Vertex AI (e.g., us-central1)"}];function B0(e){return/^[a-zA-Z0-9_]+$/.test(e)}function U0(){const{project:e,updateProject:t}=at(),[n,r]=w.useState(null);if(!e)return null;const{app:i}=e;function o(v){t({app:{...i,...v}})}function a(v){if(v===""){r(null),o({name:v});return}B0(v)?r(null):r("Name can only contain letters, numbers, and underscores"),o({name:v})}function l(){const v={name:`state_key_${i.state_keys.length+1}`,description:"",type:"string",scope:"session"};o({state_keys:[...i.state_keys,v]})}function c(v,z){const F=[...i.state_keys];F[v]={...F[v],...z},o({state_keys:F})}function u(v){o({state_keys:i.state_keys.filter((z,F)=>F!==v)})}function d(v="ReflectAndRetryToolPlugin"){let z;switch(v){case"ReflectAndRetryToolPlugin":z={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1};break;case"ContextFilterPlugin":z={type:"ContextFilterPlugin",name:"context_filter",num_invocations_to_keep:5};break;case"LoggingPlugin":z={type:"LoggingPlugin",name:"logging"};break;case"GlobalInstructionPlugin":z={type:"GlobalInstructionPlugin",name:"global_instruction",global_instruction:""};break;case"SaveFilesAsArtifactsPlugin":z={type:"SaveFilesAsArtifactsPlugin",name:"save_files"};break;case"MultimodalToolResultsPlugin":z={type:"MultimodalToolResultsPlugin",name:"multimodal_tools"};break;default:z={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1}}o({plugins:[...i.plugins,z]})}function p(v,z){const F=[...i.plugins];F[v]={...F[v],...z},o({plugins:F})}function f(v){o({plugins:i.plugins.filter((z,F)=>F!==v)})}const m=i.models||[];function x(){const v=`model_${Date.now().toString(36)}`,z={id:v,name:"New Model",provider:"gemini",model_name:"gemini-2.0-flash",is_default:m.length===0};o({models:[...m,z],default_model_id:m.length===0?v:i.default_model_id})}function b(v,z){const F=m.map(U=>U.id===v?{...U,...z}:U);o({models:F})}function T(v){var U;const z=m.filter(D=>D.id!==v),F=i.default_model_id===v?((U=z[0])==null?void 0:U.id)||void 0:i.default_model_id;o({models:z,default_model_id:F})}function y(v){o({default_model_id:v})}const g=i.env_vars||{},[h,P]=w.useState({}),[C,_]=w.useState("");function N(v=""){const z=v||C.trim();!z||g[z]!==void 0||(o({env_vars:{...g,[z]:""}}),_(""))}function k(v,z){o({env_vars:{...g,[v]:z}})}function R(v){const z={...g};delete z[v],o({env_vars:z})}function S(v){P(z=>({...z,[v]:!z[v]}))}return s.jsxs("div",{className:"app-config",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("section",{className:"section",children:[s.jsx("div",{className:"section-header",children:s.jsxs("h2",{className:"section-title",children:[s.jsx(L0,{size:20}),"Basic Information"]})}),s.jsxs("div",{className:"form-grid",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"App Name"}),s.jsx("input",{type:"text",value:i.name,onChange:v=>a(v.target.value),style:{borderColor:n?"var(--error)":void 0}}),n&&s.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:4},children:n})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Root Agent"}),s.jsxs("select",{value:i.root_agent_id||"",onChange:v=>o({root_agent_id:v.target.value||void 0}),children:[s.jsx("option",{value:"",children:"Select an agent..."}),e.agents.map(v=>s.jsx("option",{value:v.id,children:v.name},v.id))]})]}),s.jsxs("div",{className:"form-group full-width",children:[s.jsx("label",{children:"Description"}),s.jsx("textarea",{value:i.description,onChange:v=>o({description:v.target.value}),rows:2})]})]})]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(yn,{size:20}),"Services"]}),s.jsx("span",{className:"section-hint",children:"Configure session, memory, and artifact storage backends"})]}),s.jsxs("div",{className:"form-grid",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Session Service"}),s.jsxs("select",{value:i.session_service_uri.split("://")[0],onChange:v=>{const z=v.target.value;o({session_service_uri:{memory:"memory://",file:"file://~/.adk-playground/sessions",sqlite:"sqlite://~/.adk-playground/sessions.db",postgresql:"postgresql://user:pass@localhost:5432/adk_sessions",mysql:"mysql://user:pass@localhost:3306/adk_sessions",agentengine:"agentengine://project/us-central1/engine-id"}[z]||z+"://"})},children:[s.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),s.jsx("option",{value:"file",children:"File System (JSON)"}),s.jsx("option",{value:"sqlite",children:"SQLite (local)"}),s.jsx("option",{value:"postgresql",children:"PostgreSQL"}),s.jsx("option",{value:"mysql",children:"MySQL"}),s.jsx("option",{value:"agentengine",children:"Vertex AI Agent Engine"})]}),i.session_service_uri.startsWith("file://")&&s.jsx("input",{type:"text",value:i.session_service_uri.replace("file://",""),onChange:v=>o({session_service_uri:"file://"+v.target.value}),placeholder:"~/.adk-playground/sessions",style:{marginTop:8}}),i.session_service_uri.startsWith("sqlite://")&&s.jsx("input",{type:"text",value:i.session_service_uri.replace("sqlite://",""),onChange:v=>o({session_service_uri:"sqlite://"+v.target.value}),placeholder:"~/.adk-playground/sessions.db",style:{marginTop:8}}),(i.session_service_uri.startsWith("postgresql://")||i.session_service_uri.startsWith("mysql://"))&&s.jsx("input",{type:"text",value:i.session_service_uri,onChange:v=>o({session_service_uri:v.target.value}),placeholder:"postgresql://user:pass@localhost:5432/db",style:{marginTop:8}}),i.session_service_uri.startsWith("agentengine://")&&s.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[s.jsx("input",{type:"text",value:i.session_service_uri.split("/")[2]||"",onChange:v=>{const z=i.session_service_uri.split("/");z[2]=v.target.value,o({session_service_uri:z.join("/")})},placeholder:"project-id"}),s.jsx("input",{type:"text",value:i.session_service_uri.split("/")[3]||"",onChange:v=>{const z=i.session_service_uri.split("/");z[3]=v.target.value,o({session_service_uri:z.join("/")})},placeholder:"location (e.g., us-central1)"}),s.jsx("input",{type:"text",value:i.session_service_uri.split("/")[4]||"",onChange:v=>{const z=i.session_service_uri.split("/");z[4]=v.target.value,o({session_service_uri:z.join("/")})},placeholder:"agent-engine-id"})]}),s.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.session_service_uri.startsWith("memory://")&&"Sessions stored in memory, lost on restart",i.session_service_uri.startsWith("file://")&&"Sessions stored as JSON files, preserves UI events",i.session_service_uri.startsWith("sqlite://")&&"Persists to local SQLite file",i.session_service_uri.startsWith("postgresql://")&&"Production-ready PostgreSQL backend",i.session_service_uri.startsWith("mysql://")&&"Production-ready MySQL backend",i.session_service_uri.startsWith("agentengine://")&&"Vertex AI Agent Engine managed sessions"]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Memory Service"}),s.jsxs("select",{value:i.memory_service_uri.split("://")[0],onChange:v=>{const z=v.target.value;o({memory_service_uri:{memory:"memory://",file:"file://~/.adk-playground/memory",rag:"rag://rag-corpus-id",agentengine:"agentengine://project/us-central1/engine-id"}[z]||z+"://"})},children:[s.jsx("option",{value:"memory",children:"In-Memory (keyword matching)"}),s.jsx("option",{value:"file",children:"File System (keyword matching)"}),s.jsx("option",{value:"rag",children:"Vertex AI RAG"}),s.jsx("option",{value:"agentengine",children:"Vertex AI Memory Bank"})]}),i.memory_service_uri.startsWith("file://")&&s.jsx("input",{type:"text",value:i.memory_service_uri.replace("file://",""),onChange:v=>o({memory_service_uri:"file://"+v.target.value}),placeholder:"~/.adk-playground/memory",style:{marginTop:8}}),i.memory_service_uri.startsWith("rag://")&&s.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[s.jsx("input",{type:"text",value:i.memory_service_uri.replace("rag://",""),onChange:v=>o({memory_service_uri:"rag://"+v.target.value}),placeholder:"rag-corpus-id or full resource path"}),s.jsx("span",{className:"help-text",style:{fontSize:11,color:"var(--text-dim)"},children:"Format: projects/PROJECT/locations/LOCATION/ragCorpora/CORPUS_ID"})]}),i.memory_service_uri.startsWith("agentengine://")&&s.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[s.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[2]||"",onChange:v=>{const z=i.memory_service_uri.split("/");z[2]=v.target.value,o({memory_service_uri:z.join("/")})},placeholder:"project-id"}),s.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[3]||"",onChange:v=>{const z=i.memory_service_uri.split("/");z[3]=v.target.value,o({memory_service_uri:z.join("/")})},placeholder:"location (e.g., us-central1)"}),s.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[4]||"",onChange:v=>{const z=i.memory_service_uri.split("/");z[4]=v.target.value,o({memory_service_uri:z.join("/")})},placeholder:"agent-engine-id"})]}),s.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.memory_service_uri.startsWith("memory://")&&"Simple keyword matching, good for prototyping",i.memory_service_uri.startsWith("file://")&&"Persists memories as JSON files",i.memory_service_uri.startsWith("rag://")&&"Semantic search using Vertex AI RAG corpus",i.memory_service_uri.startsWith("agentengine://")&&"Managed memory via Agent Engine Memory Bank"]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Artifact Service"}),s.jsxs("select",{value:i.artifact_service_uri.split("://")[0]==="gs"?"gs":i.artifact_service_uri.split("://")[0],onChange:v=>{const z=v.target.value;o({artifact_service_uri:{memory:"memory://",file:"file://~/.adk-playground/artifacts",gs:"gs://your-bucket-name"}[z]||z+"://"})},children:[s.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),s.jsx("option",{value:"file",children:"File System"}),s.jsx("option",{value:"gs",children:"Google Cloud Storage"})]}),i.artifact_service_uri.startsWith("file://")&&s.jsx("input",{type:"text",value:i.artifact_service_uri.replace("file://",""),onChange:v=>o({artifact_service_uri:"file://"+v.target.value}),placeholder:"~/.adk-playground/artifacts",style:{marginTop:8}}),i.artifact_service_uri.startsWith("gs://")&&s.jsx("input",{type:"text",value:i.artifact_service_uri.replace("gs://",""),onChange:v=>o({artifact_service_uri:"gs://"+v.target.value}),placeholder:"bucket-name/optional-prefix",style:{marginTop:8}}),s.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.artifact_service_uri.startsWith("memory://")&&"Artifacts stored in memory, lost on restart",i.artifact_service_uri.startsWith("file://")&&"Persists to local filesystem",i.artifact_service_uri.startsWith("gs://")&&"Production-ready Google Cloud Storage backend"]})]})]})]}),s.jsxs("section",{className:"section",children:[s.jsx("div",{className:"section-header",children:s.jsxs("h2",{className:"section-title",children:[s.jsx(Yl,{size:20}),"Environment Variables"]})}),s.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginBottom:16},children:"Set API keys and other environment variables. These are passed to the agent runtime."}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16},children:F0.filter(v=>g[v.key]===void 0).map(v=>s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>N(v.key),title:v.description,children:[s.jsx(Ge,{size:12}),v.key]},v.key))}),Object.keys(g).length===0?s.jsx("p",{className:"empty-message",children:"No environment variables set. Click a button above to add common variables, or add a custom one below."}):Object.entries(g).map(([v,z])=>s.jsxs("div",{className:"list-item",style:{alignItems:"center"},children:[s.jsxs("div",{style:{flex:1,display:"flex",gap:12,alignItems:"center"},children:[s.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:13,minWidth:200},children:v}),s.jsxs("div",{style:{flex:1,display:"flex",gap:8,alignItems:"center"},children:[s.jsx("input",{type:h[v]?"text":"password",value:z,onChange:F=>k(v,F.target.value),placeholder:"Enter value...",style:{flex:1}}),s.jsx("button",{className:"delete-item",onClick:()=>S(v),title:h[v]?"Hide value":"Show value",children:h[v]?s.jsx(k0,{size:16}):s.jsx(Zi,{size:16})})]})]}),s.jsx("button",{className:"delete-item",onClick:()=>R(v),children:s.jsx(De,{size:16})})]},v)),s.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[s.jsx("input",{type:"text",value:C,onChange:v=>_(v.target.value.toUpperCase().replace(/[^A-Z0-9_]/g,"")),placeholder:"CUSTOM_VAR_NAME",style:{flex:1,fontFamily:"var(--font-mono)"},onKeyDown:v=>v.key==="Enter"&&N()}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>N(),disabled:!C.trim(),children:[s.jsx(Ge,{size:14}),"Add Variable"]})]})]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(uu,{size:20}),"Models"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:x,children:[s.jsx(Ge,{size:14}),"Add Model"]})]}),m.length===0?s.jsx("p",{className:"empty-message",children:"No models configured. Add models that agents can use."}):m.map(v=>s.jsxs("div",{className:"model-card",children:[s.jsxs("div",{className:"model-card-header",children:[s.jsx("input",{type:"text",value:v.name,onChange:z=>b(v.id,{name:z.target.value}),placeholder:"Model name",className:"model-name-input"}),s.jsx("button",{className:`default-model-btn ${i.default_model_id===v.id?"is-default":""}`,onClick:()=>y(v.id),title:i.default_model_id===v.id?"Default model":"Set as default",children:s.jsx(fg,{size:14,fill:i.default_model_id===v.id?"currentColor":"none"})}),s.jsx("button",{className:"delete-item",onClick:()=>T(v.id),children:s.jsx(De,{size:16})})]}),s.jsx("div",{className:"model-card-body",children:s.jsx(xg,{projectId:e.id,values:v,onChange:z=>b(v.id,z)})})]},v.id))]}),s.jsxs("section",{className:"section",children:[s.jsx("div",{className:"section-header",children:s.jsxs("h2",{className:"section-title",children:[s.jsx(gg,{size:20}),"Advanced Options"]})}),s.jsxs("div",{className:"toggle-group",children:[s.jsx("div",{className:`toggle ${i.compaction.enabled?"active":""}`,onClick:()=>o({compaction:{...i.compaction,enabled:!i.compaction.enabled}})}),s.jsxs("div",{className:"toggle-label",children:[s.jsx("strong",{children:"Event Compaction"}),s.jsx("span",{children:"Automatically summarize old events to reduce context size"})]}),i.compaction.enabled&&s.jsx("input",{type:"number",value:i.compaction.max_events,onChange:v=>o({compaction:{...i.compaction,max_events:parseInt(v.target.value)||100}}),style:{width:80},placeholder:"Max events"})]}),s.jsxs("div",{className:"toggle-group",style:{marginTop:12},children:[s.jsx("div",{className:`toggle ${i.context_cache.enabled?"active":""}`,onClick:()=>o({context_cache:{...i.context_cache,enabled:!i.context_cache.enabled}})}),s.jsxs("div",{className:"toggle-label",children:[s.jsx("strong",{children:"Context Caching"}),s.jsx("span",{children:"Cache static instructions for better performance"})]}),i.context_cache.enabled&&s.jsx("input",{type:"number",value:i.context_cache.ttl_seconds,onChange:v=>o({context_cache:{...i.context_cache,ttl_seconds:parseInt(v.target.value)||3600}}),style:{width:100},placeholder:"TTL (seconds)"})]}),s.jsxs("div",{className:"toggle-group",style:{marginTop:12},children:[s.jsx("div",{className:`toggle ${i.resumability.enabled?"active":""}`,onClick:()=>o({resumability:{...i.resumability,enabled:!i.resumability.enabled}})}),s.jsxs("div",{className:"toggle-label",children:[s.jsx("strong",{children:"Resumability"}),s.jsx("span",{children:"Allow pausing and resuming agent execution"})]})]})]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(du,{size:20}),"Session State Keys"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:l,children:[s.jsx(Ge,{size:14}),"Add Key"]})]}),i.state_keys.length===0?s.jsx("p",{className:"empty-message",children:"No state keys defined. Add keys to declare what data agents can share."}):i.state_keys.map((v,z)=>s.jsxs("div",{className:"list-item",children:[s.jsxs("div",{className:"list-item-content",children:[s.jsx("input",{type:"text",value:v.name,onChange:F=>c(z,{name:F.target.value}),placeholder:"Key name"}),s.jsxs("select",{value:v.type,onChange:F=>c(z,{type:F.target.value}),children:[s.jsx("option",{value:"string",children:"String"}),s.jsx("option",{value:"number",children:"Number"}),s.jsx("option",{value:"boolean",children:"Boolean"}),s.jsx("option",{value:"object",children:"Object"}),s.jsx("option",{value:"array",children:"Array"})]}),s.jsxs("select",{value:v.scope,onChange:F=>c(z,{scope:F.target.value}),children:[s.jsx("option",{value:"session",children:"Session"}),s.jsx("option",{value:"user",children:"User"}),s.jsx("option",{value:"app",children:"App"}),s.jsx("option",{value:"temp",children:"Temporary"})]}),s.jsx("input",{type:"text",value:v.description,onChange:F=>c(z,{description:F.target.value}),placeholder:"Description",style:{gridColumn:"span 2"}})]}),s.jsx("button",{className:"delete-item",onClick:()=>u(z),children:s.jsx(De,{size:16})})]},z))]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(Mn,{size:20}),"Plugins"]}),s.jsx("div",{className:"plugin-add-dropdown",children:s.jsxs("select",{className:"btn btn-secondary btn-sm",value:"",onChange:v=>{v.target.value&&(d(v.target.value),v.target.value="")},style:{paddingRight:8},children:[s.jsx("option",{value:"",children:"+ Add Plugin..."}),s.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),s.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),s.jsx("option",{value:"LoggingPlugin",children:"Logging"}),s.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),s.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),s.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]})})]}),i.plugins.length===0?s.jsx("p",{className:"empty-message",children:"No plugins configured. Add plugins to extend agent functionality."}):i.plugins.map((v,z)=>s.jsxs("div",{className:"list-item",style:{flexDirection:"column",gap:12},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",gap:12},children:[s.jsxs("select",{value:v.type,onChange:F=>p(z,{type:F.target.value}),style:{flex:1},children:[s.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),s.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),s.jsx("option",{value:"LoggingPlugin",children:"Logging"}),s.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),s.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),s.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]}),s.jsx("button",{className:"delete-item",onClick:()=>f(z),children:s.jsx(De,{size:16})})]}),v.type==="ReflectAndRetryToolPlugin"&&s.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[s.jsxs("div",{className:"form-group",style:{flex:0},children:[s.jsx("label",{style:{fontSize:12},children:"Max Retries"}),s.jsx("input",{type:"number",min:"0",max:"10",value:v.max_retries??3,onChange:F=>p(z,{max_retries:parseInt(F.target.value)||0}),style:{width:70}})]}),s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[s.jsxs("span",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:v.throw_exception_if_retry_exceeded??!1,onChange:F=>p(z,{throw_exception_if_retry_exceeded:F.target.checked})}),s.jsx("span",{className:"toggle-slider"})]}),"Throw exception if retry exceeded"]})]}),v.type==="ContextFilterPlugin"&&s.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[s.jsxs("div",{className:"form-group",style:{flex:0},children:[s.jsx("label",{style:{fontSize:12},children:"Invocations to Keep"}),s.jsx("input",{type:"number",min:"1",max:"100",value:v.num_invocations_to_keep??5,onChange:F=>p(z,{num_invocations_to_keep:parseInt(F.target.value)||1}),style:{width:70}})]}),s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Keeps only the last N conversation turns to reduce context size"})]}),v.type==="LoggingPlugin"&&s.jsx("div",{style:{paddingLeft:8},children:s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Logs all agent events (messages, tool calls, responses) to the console"})}),v.type==="GlobalInstructionPlugin"&&s.jsxs("div",{style:{width:"100%",paddingLeft:8},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{style:{fontSize:12},children:"Global Instruction"}),s.jsx("textarea",{value:v.global_instruction??"",onChange:F=>p(z,{global_instruction:F.target.value}),placeholder:"Instructions that apply to all agents in the app...",rows:3,style:{width:"100%"}})]}),s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"This instruction is prepended to every agent's system prompt"})]}),v.type==="SaveFilesAsArtifactsPlugin"&&s.jsx("div",{style:{paddingLeft:8},children:s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Automatically saves files uploaded in user messages as artifacts for later retrieval"})}),v.type==="MultimodalToolResultsPlugin"&&s.jsx("div",{style:{paddingLeft:8},children:s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Allows tools to return multimodal content (images, files) directly to the LLM"})})]},z))]})]})}const V0="modulepreload",W0=function(e){return"/"+e},op={},H0=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=W0(c),c in op)return;op[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":V0,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((f,m)=>{p.addEventListener("load",f),p.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})};function ap(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function q0(e){if(Array.isArray(e))return e}function J0(e,t,n){return(t=eb(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function K0(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(d){u=!0,i=d}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function Q0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function cp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?lp(Object(n),!0).forEach(function(r){J0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function G0(e,t){if(e==null)return{};var n,r,i=Y0(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Y0(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function X0(e,t){return q0(e)||K0(e,t)||tb(e,t)||Q0()}function Z0(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function eb(e){var t=Z0(e,"string");return typeof t=="symbol"?t:t+""}function tb(e,t){if(e){if(typeof e=="string")return ap(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ap(e,t):void 0}}function nb(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function up(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function dp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?up(Object(n),!0).forEach(function(r){nb(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):up(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rb(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,o){return o(i)},r)}}function bi(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function Eo(e){return{}.toString.call(e).includes("Object")}function ib(e){return!Object.keys(e).length}function es(e){return typeof e=="function"}function sb(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ob(e,t){return Eo(t)||Wn("changeType"),Object.keys(t).some(function(n){return!sb(e,n)})&&Wn("changeField"),t}function ab(e){es(e)||Wn("selectorType")}function lb(e){es(e)||Eo(e)||Wn("handlerType"),Eo(e)&&Object.values(e).some(function(t){return!es(t)})&&Wn("handlersType")}function cb(e){e||Wn("initialIsRequired"),Eo(e)||Wn("initialType"),ib(e)&&Wn("initialContent")}function ub(e,t){throw new Error(e[t]||e.default)}var db={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Wn=bi(ub)(db),Ps={changes:ob,selector:ab,handler:lb,initial:cb};function pb(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ps.initial(e),Ps.handler(t);var n={current:e},r=bi(hb)(n,t),i=bi(mb)(n),o=bi(Ps.changes)(e),a=bi(fb)(n);function l(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return Ps.selector(u),u(n.current)}function c(u){rb(r,i,o,a)(u)}return[l,c]}function fb(e,t){return es(t)?t(e.current):t}function mb(e,t){return e.current=dp(dp({},e.current),t),t}function hb(e,t,n){return es(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var gb={create:pb},xb={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function yb(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function vb(e){return{}.toString.call(e).includes("Object")}function bb(e){return e||pp("configIsRequired"),vb(e)||pp("configType"),e.urls?(kb(),{paths:{vs:e.urls.monacoBase}}):e}function kb(){console.warn(yg.deprecation)}function wb(e,t){throw new Error(e[t]||e.default)}var yg={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},pp=yb(wb)(yg),jb={config:bb},_b=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(o,a){return a(o)},i)}};function vg(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],vg(e[n],t[n]))}),cp(cp({},e),t)}var Sb={type:"cancelation",msg:"operation is manually canceled"};function Ma(e){var t=!1,n=new Promise(function(r,i){e.then(function(o){return t?i(Sb):r(o)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var Cb=["monaco"],Nb=gb.create({config:xb,isInitialized:!1,resolve:null,reject:null,monaco:null}),bg=X0(Nb,2),ds=bg[0],Zo=bg[1];function Eb(e){var t=jb.config(e),n=t.monaco,r=G0(t,Cb);Zo(function(i){return{config:vg(i.config,r),monaco:n}})}function zb(){var e=ds(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(Zo({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),Ma(Oa);if(window.monaco&&window.monaco.editor)return kg(window.monaco),e.resolve(window.monaco),Ma(Oa);_b(Tb,Lb)(Ab)}return Ma(Oa)}function Tb(e){return document.body.appendChild(e)}function Pb(e){var t=document.createElement("script");return e&&(t.src=e),t}function Lb(e){var t=ds(function(r){var i=r.config,o=r.reject;return{config:i,reject:o}}),n=Pb("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function Ab(){var e=ds(function(n){var r=n.config,i=n.resolve,o=n.reject;return{config:r,resolve:i,reject:o}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;kg(r),e.resolve(r)},function(n){e.reject(n)})}function kg(e){ds().monaco||Zo({monaco:e})}function Rb(){return ds(function(e){var t=e.monaco;return t})}var Oa=new Promise(function(e,t){return Zo({resolve:e,reject:t})}),wg={config:Eb,init:zb,__getMonacoInstance:Rb},Mb={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Ia=Mb,Ob={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Ib=Ob;function $b({children:e}){return Nt.createElement("div",{style:Ib.container},e)}var Db=$b,Fb=Db;function Bb({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:o,wrapperProps:a}){return Nt.createElement("section",{style:{...Ia.wrapper,width:e,height:t},...a},!n&&Nt.createElement(Fb,null,r),Nt.createElement("div",{ref:i,style:{...Ia.fullWidth,...!n&&Ia.hide},className:o}))}var Ub=Bb,jg=w.memo(Ub);function Vb(e){w.useEffect(e,[])}var _g=Vb;function Wb(e,t,n=!0){let r=w.useRef(!0);w.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var _t=Wb;function Ti(){}function Ar(e,t,n,r){return Hb(e,r)||qb(e,t,n,r)}function Hb(e,t){return e.editor.getModel(Sg(e,t))}function qb(e,t,n,r){return e.editor.createModel(t,n,r?Sg(e,r):void 0)}function Sg(e,t){return e.Uri.parse(t)}function Jb({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:o,modifiedModelPath:a,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:c=!1,theme:u="light",loading:d="Loading...",options:p={},height:f="100%",width:m="100%",className:x,wrapperProps:b={},beforeMount:T=Ti,onMount:y=Ti}){let[g,h]=w.useState(!1),[P,C]=w.useState(!0),_=w.useRef(null),N=w.useRef(null),k=w.useRef(null),R=w.useRef(y),S=w.useRef(T),v=w.useRef(!1);_g(()=>{let D=wg.init();return D.then(ne=>(N.current=ne)&&C(!1)).catch(ne=>(ne==null?void 0:ne.type)!=="cancelation"&&console.error("Monaco initialization: error:",ne)),()=>_.current?U():D.cancel()}),_t(()=>{if(_.current&&N.current){let D=_.current.getOriginalEditor(),ne=Ar(N.current,e||"",r||n||"text",o||"");ne!==D.getModel()&&D.setModel(ne)}},[o],g),_t(()=>{if(_.current&&N.current){let D=_.current.getModifiedEditor(),ne=Ar(N.current,t||"",i||n||"text",a||"");ne!==D.getModel()&&D.setModel(ne)}},[a],g),_t(()=>{let D=_.current.getModifiedEditor();D.getOption(N.current.editor.EditorOption.readOnly)?D.setValue(t||""):t!==D.getValue()&&(D.executeEdits("",[{range:D.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),D.pushUndoStop())},[t],g),_t(()=>{var D,ne;(ne=(D=_.current)==null?void 0:D.getModel())==null||ne.original.setValue(e||"")},[e],g),_t(()=>{let{original:D,modified:ne}=_.current.getModel();N.current.editor.setModelLanguage(D,r||n||"text"),N.current.editor.setModelLanguage(ne,i||n||"text")},[n,r,i],g),_t(()=>{var D;(D=N.current)==null||D.editor.setTheme(u)},[u],g),_t(()=>{var D;(D=_.current)==null||D.updateOptions(p)},[p],g);let z=w.useCallback(()=>{var L;if(!N.current)return;S.current(N.current);let D=Ar(N.current,e||"",r||n||"text",o||""),ne=Ar(N.current,t||"",i||n||"text",a||"");(L=_.current)==null||L.setModel({original:D,modified:ne})},[n,t,i,e,r,o,a]),F=w.useCallback(()=>{var D;!v.current&&k.current&&(_.current=N.current.editor.createDiffEditor(k.current,{automaticLayout:!0,...p}),z(),(D=N.current)==null||D.editor.setTheme(u),h(!0),v.current=!0)},[p,u,z]);w.useEffect(()=>{g&&R.current(_.current,N.current)},[g]),w.useEffect(()=>{!P&&!g&&F()},[P,g,F]);function U(){var ne,L,I,A;let D=(ne=_.current)==null?void 0:ne.getModel();l||((L=D==null?void 0:D.original)==null||L.dispose()),c||((I=D==null?void 0:D.modified)==null||I.dispose()),(A=_.current)==null||A.dispose()}return Nt.createElement(jg,{width:m,height:f,isEditorReady:g,loading:d,_ref:k,className:x,wrapperProps:b})}var Kb=Jb;w.memo(Kb);function Qb(e){let t=w.useRef();return w.useEffect(()=>{t.current=e},[e]),t.current}var Gb=Qb,Ls=new Map;function Yb({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:o,theme:a="light",line:l,loading:c="Loading...",options:u={},overrideServices:d={},saveViewState:p=!0,keepCurrentModel:f=!1,width:m="100%",height:x="100%",className:b,wrapperProps:T={},beforeMount:y=Ti,onMount:g=Ti,onChange:h,onValidate:P=Ti}){let[C,_]=w.useState(!1),[N,k]=w.useState(!0),R=w.useRef(null),S=w.useRef(null),v=w.useRef(null),z=w.useRef(g),F=w.useRef(y),U=w.useRef(),D=w.useRef(r),ne=Gb(o),L=w.useRef(!1),I=w.useRef(!1);_g(()=>{let J=wg.init();return J.then(Q=>(R.current=Q)&&k(!1)).catch(Q=>(Q==null?void 0:Q.type)!=="cancelation"&&console.error("Monaco initialization: error:",Q)),()=>S.current?j():J.cancel()}),_t(()=>{var Q,E,xe,M;let J=Ar(R.current,e||r||"",t||i||"",o||n||"");J!==((Q=S.current)==null?void 0:Q.getModel())&&(p&&Ls.set(ne,(E=S.current)==null?void 0:E.saveViewState()),(xe=S.current)==null||xe.setModel(J),p&&((M=S.current)==null||M.restoreViewState(Ls.get(o))))},[o],C),_t(()=>{var J;(J=S.current)==null||J.updateOptions(u)},[u],C),_t(()=>{!S.current||r===void 0||(S.current.getOption(R.current.editor.EditorOption.readOnly)?S.current.setValue(r):r!==S.current.getValue()&&(I.current=!0,S.current.executeEdits("",[{range:S.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),S.current.pushUndoStop(),I.current=!1))},[r],C),_t(()=>{var Q,E;let J=(Q=S.current)==null?void 0:Q.getModel();J&&i&&((E=R.current)==null||E.editor.setModelLanguage(J,i))},[i],C),_t(()=>{var J;l!==void 0&&((J=S.current)==null||J.revealLine(l))},[l],C),_t(()=>{var J;(J=R.current)==null||J.editor.setTheme(a)},[a],C);let A=w.useCallback(()=>{var J;if(!(!v.current||!R.current)&&!L.current){F.current(R.current);let Q=o||n,E=Ar(R.current,r||e||"",t||i||"",Q||"");S.current=(J=R.current)==null?void 0:J.editor.create(v.current,{model:E,automaticLayout:!0,...u},d),p&&S.current.restoreViewState(Ls.get(Q)),R.current.editor.setTheme(a),l!==void 0&&S.current.revealLine(l),_(!0),L.current=!0}},[e,t,n,r,i,o,u,d,p,a,l]);w.useEffect(()=>{C&&z.current(S.current,R.current)},[C]),w.useEffect(()=>{!N&&!C&&A()},[N,C,A]),D.current=r,w.useEffect(()=>{var J,Q;C&&h&&((J=U.current)==null||J.dispose(),U.current=(Q=S.current)==null?void 0:Q.onDidChangeModelContent(E=>{I.current||h(S.current.getValue(),E)}))},[C,h]),w.useEffect(()=>{if(C){let J=R.current.editor.onDidChangeMarkers(Q=>{var xe;let E=(xe=S.current.getModel())==null?void 0:xe.uri;if(E&&Q.find(M=>M.path===E.path)){let M=R.current.editor.getModelMarkers({resource:E});P==null||P(M)}});return()=>{J==null||J.dispose()}}return()=>{}},[C,P]);function j(){var J,Q;(J=U.current)==null||J.dispose(),f?p&&Ls.set(o,S.current.saveViewState()):(Q=S.current.getModel())==null||Q.dispose(),S.current.dispose()}return Nt.createElement(jg,{width:m,height:x,isEditorReady:C,loading:c,_ref:v,className:b,wrapperProps:T})}var Xb=Yb,Zb=w.memo(Xb),Dt=Zb;function ek(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const tk=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,nk=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,rk={};function fp(e,t){return(rk.jsx?nk:tk).test(e)}const ik=/[ \t\n\f\r]/g;function sk(e){return typeof e=="object"?e.type==="text"?mp(e.value):!1:mp(e)}function mp(e){return e.replace(ik,"")===""}class ps{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}ps.prototype.normal={};ps.prototype.property={};ps.prototype.space=void 0;function Cg(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new ps(n,r,t)}function Zl(e){return e.toLowerCase()}class bt{constructor(t,n){this.attribute=n,this.property=t}}bt.prototype.attribute="";bt.prototype.booleanish=!1;bt.prototype.boolean=!1;bt.prototype.commaOrSpaceSeparated=!1;bt.prototype.commaSeparated=!1;bt.prototype.defined=!1;bt.prototype.mustUseProperty=!1;bt.prototype.number=!1;bt.prototype.overloadedBoolean=!1;bt.prototype.property="";bt.prototype.spaceSeparated=!1;bt.prototype.space=void 0;let ok=0;const ke=xr(),We=xr(),ec=xr(),ee=xr(),ze=xr(),Fr=xr(),wt=xr();function xr(){return 2**++ok}const tc=Object.freeze(Object.defineProperty({__proto__:null,boolean:ke,booleanish:We,commaOrSpaceSeparated:wt,commaSeparated:Fr,number:ee,overloadedBoolean:ec,spaceSeparated:ze},Symbol.toStringTag,{value:"Module"})),$a=Object.keys(tc);class hu extends bt{constructor(t,n,r,i){let o=-1;if(super(t,n),hp(this,"space",i),typeof r=="number")for(;++o<$a.length;){const a=$a[o];hp(this,$a[o],(r&tc[a])===tc[a])}}}hu.prototype.defined=!0;function hp(e,t,n){n&&(e[t]=n)}function ti(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const o=new hu(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[Zl(r)]=r,n[Zl(o.attribute)]=r}return new ps(t,n,e.space)}const Ng=ti({properties:{ariaActiveDescendant:null,ariaAtomic:We,ariaAutoComplete:null,ariaBusy:We,ariaChecked:We,ariaColCount:ee,ariaColIndex:ee,ariaColSpan:ee,ariaControls:ze,ariaCurrent:null,ariaDescribedBy:ze,ariaDetails:null,ariaDisabled:We,ariaDropEffect:ze,ariaErrorMessage:null,ariaExpanded:We,ariaFlowTo:ze,ariaGrabbed:We,ariaHasPopup:null,ariaHidden:We,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ze,ariaLevel:ee,ariaLive:null,ariaModal:We,ariaMultiLine:We,ariaMultiSelectable:We,ariaOrientation:null,ariaOwns:ze,ariaPlaceholder:null,ariaPosInSet:ee,ariaPressed:We,ariaReadOnly:We,ariaRelevant:null,ariaRequired:We,ariaRoleDescription:ze,ariaRowCount:ee,ariaRowIndex:ee,ariaRowSpan:ee,ariaSelected:We,ariaSetSize:ee,ariaSort:null,ariaValueMax:ee,ariaValueMin:ee,ariaValueNow:ee,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function Eg(e,t){return t in e?e[t]:t}function zg(e,t){return Eg(e,t.toLowerCase())}const ak=ti({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Fr,acceptCharset:ze,accessKey:ze,action:null,allow:null,allowFullScreen:ke,allowPaymentRequest:ke,allowUserMedia:ke,alt:null,as:null,async:ke,autoCapitalize:null,autoComplete:ze,autoFocus:ke,autoPlay:ke,blocking:ze,capture:null,charSet:null,checked:ke,cite:null,className:ze,cols:ee,colSpan:null,content:null,contentEditable:We,controls:ke,controlsList:ze,coords:ee|Fr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ke,defer:ke,dir:null,dirName:null,disabled:ke,download:ec,draggable:We,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ke,formTarget:null,headers:ze,height:ee,hidden:ec,high:ee,href:null,hrefLang:null,htmlFor:ze,httpEquiv:ze,id:null,imageSizes:null,imageSrcSet:null,inert:ke,inputMode:null,integrity:null,is:null,isMap:ke,itemId:null,itemProp:ze,itemRef:ze,itemScope:ke,itemType:ze,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ke,low:ee,manifest:null,max:null,maxLength:ee,media:null,method:null,min:null,minLength:ee,multiple:ke,muted:ke,name:null,nonce:null,noModule:ke,noValidate:ke,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ke,optimum:ee,pattern:null,ping:ze,placeholder:null,playsInline:ke,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ke,referrerPolicy:null,rel:ze,required:ke,reversed:ke,rows:ee,rowSpan:ee,sandbox:ze,scope:null,scoped:ke,seamless:ke,selected:ke,shadowRootClonable:ke,shadowRootDelegatesFocus:ke,shadowRootMode:null,shape:null,size:ee,sizes:null,slot:null,span:ee,spellCheck:We,src:null,srcDoc:null,srcLang:null,srcSet:null,start:ee,step:null,style:null,tabIndex:ee,target:null,title:null,translate:null,type:null,typeMustMatch:ke,useMap:null,value:We,width:ee,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ze,axis:null,background:null,bgColor:null,border:ee,borderColor:null,bottomMargin:ee,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ke,declare:ke,event:null,face:null,frame:null,frameBorder:null,hSpace:ee,leftMargin:ee,link:null,longDesc:null,lowSrc:null,marginHeight:ee,marginWidth:ee,noResize:ke,noHref:ke,noShade:ke,noWrap:ke,object:null,profile:null,prompt:null,rev:null,rightMargin:ee,rules:null,scheme:null,scrolling:We,standby:null,summary:null,text:null,topMargin:ee,valueType:null,version:null,vAlign:null,vLink:null,vSpace:ee,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ke,disableRemotePlayback:ke,prefix:null,property:null,results:ee,security:null,unselectable:null},space:"html",transform:zg}),lk=ti({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:wt,accentHeight:ee,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:ee,amplitude:ee,arabicForm:null,ascent:ee,attributeName:null,attributeType:null,azimuth:ee,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:ee,by:null,calcMode:null,capHeight:ee,className:ze,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:ee,diffuseConstant:ee,direction:null,display:null,dur:null,divisor:ee,dominantBaseline:null,download:ke,dx:null,dy:null,edgeMode:null,editable:null,elevation:ee,enableBackground:null,end:null,event:null,exponent:ee,externalResourcesRequired:null,fill:null,fillOpacity:ee,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Fr,g2:Fr,glyphName:Fr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:ee,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:ee,horizOriginX:ee,horizOriginY:ee,id:null,ideographic:ee,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:ee,k:ee,k1:ee,k2:ee,k3:ee,k4:ee,kernelMatrix:wt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:ee,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:ee,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:ee,overlineThickness:ee,paintOrder:null,panose1:null,path:null,pathLength:ee,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ze,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:ee,pointsAtY:ee,pointsAtZ:ee,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:wt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:wt,rev:wt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:wt,requiredFeatures:wt,requiredFonts:wt,requiredFormats:wt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:ee,specularExponent:ee,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:ee,strikethroughThickness:ee,string:null,stroke:null,strokeDashArray:wt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:ee,strokeOpacity:ee,strokeWidth:null,style:null,surfaceScale:ee,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:wt,tabIndex:ee,tableValues:null,target:null,targetX:ee,targetY:ee,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:wt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:ee,underlineThickness:ee,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:ee,values:null,vAlphabetic:ee,vMathematical:ee,vectorEffect:null,vHanging:ee,vIdeographic:ee,version:null,vertAdvY:ee,vertOriginX:ee,vertOriginY:ee,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:ee,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Eg}),Tg=ti({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),Pg=ti({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:zg}),Lg=ti({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),ck={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},uk=/[A-Z]/g,gp=/-[a-z]/g,dk=/^data[-\w.:]+$/i;function pk(e,t){const n=Zl(t);let r=t,i=bt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&dk.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(gp,mk);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!gp.test(o)){let a=o.replace(uk,fk);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a}}i=hu}return new i(r,t)}function fk(e){return"-"+e.toLowerCase()}function mk(e){return e.charAt(1).toUpperCase()}const hk=Cg([Ng,ak,Tg,Pg,Lg],"html"),gu=Cg([Ng,lk,Tg,Pg,Lg],"svg");function gk(e){return e.join(" ").trim()}var xu={},xp=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,xk=/\n/g,yk=/^\s*/,vk=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,bk=/^:\s*/,kk=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,wk=/^[;\s]*/,jk=/^\s+|\s+$/g,_k=`
`,yp="/",vp="*",tr="",Sk="comment",Ck="declaration";function Nk(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(x){var b=x.match(xk);b&&(n+=b.length);var T=x.lastIndexOf(_k);r=~T?x.length-T:r+x.length}function o(){var x={line:n,column:r};return function(b){return b.position=new a(x),u(),b}}function a(x){this.start=x,this.end={line:n,column:r},this.source=t.source}a.prototype.content=e;function l(x){var b=new Error(t.source+":"+n+":"+r+": "+x);if(b.reason=x,b.filename=t.source,b.line=n,b.column=r,b.source=e,!t.silent)throw b}function c(x){var b=x.exec(e);if(b){var T=b[0];return i(T),e=e.slice(T.length),b}}function u(){c(yk)}function d(x){var b;for(x=x||[];b=p();)b!==!1&&x.push(b);return x}function p(){var x=o();if(!(yp!=e.charAt(0)||vp!=e.charAt(1))){for(var b=2;tr!=e.charAt(b)&&(vp!=e.charAt(b)||yp!=e.charAt(b+1));)++b;if(b+=2,tr===e.charAt(b-1))return l("End of comment missing");var T=e.slice(2,b-2);return r+=2,i(T),e=e.slice(b),r+=2,x({type:Sk,comment:T})}}function f(){var x=o(),b=c(vk);if(b){if(p(),!c(bk))return l("property missing ':'");var T=c(kk),y=x({type:Ck,property:bp(b[0].replace(xp,tr)),value:T?bp(T[0].replace(xp,tr)):tr});return c(wk),y}}function m(){var x=[];d(x);for(var b;b=f();)b!==!1&&(x.push(b),d(x));return x}return u(),m()}function bp(e){return e?e.replace(jk,tr):tr}var Ek=Nk,zk=Ys&&Ys.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(xu,"__esModule",{value:!0});xu.default=Pk;const Tk=zk(Ek);function Pk(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,Tk.default)(e),i=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:a,value:l}=o;i?t(a,l,o):l&&(n=n||{},n[a]=l)}),n}var ea={};Object.defineProperty(ea,"__esModule",{value:!0});ea.camelCase=void 0;var Lk=/^--[a-zA-Z0-9_-]+$/,Ak=/-([a-z])/g,Rk=/^[^-]+$/,Mk=/^-(webkit|moz|ms|o|khtml)-/,Ok=/^-(ms)-/,Ik=function(e){return!e||Rk.test(e)||Lk.test(e)},$k=function(e,t){return t.toUpperCase()},kp=function(e,t){return"".concat(t,"-")},Dk=function(e,t){return t===void 0&&(t={}),Ik(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(Ok,kp):e=e.replace(Mk,kp),e.replace(Ak,$k))};ea.camelCase=Dk;var Fk=Ys&&Ys.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Bk=Fk(xu),Uk=ea;function nc(e,t){var n={};return!e||typeof e!="string"||(0,Bk.default)(e,function(r,i){r&&i&&(n[(0,Uk.camelCase)(r,t)]=i)}),n}nc.default=nc;var Vk=nc;const Wk=Lo(Vk),Ag=Rg("end"),yu=Rg("start");function Rg(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Hk(e){const t=yu(e),n=Ag(e);if(t&&n)return{start:t,end:n}}function Pi(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?wp(e.position):"start"in e||"end"in e?wp(e):"line"in e||"column"in e?rc(e):""}function rc(e){return jp(e&&e.line)+":"+jp(e&&e.column)}function wp(e){return rc(e&&e.start)+"-"+rc(e&&e.end)}function jp(e){return e&&typeof e=="number"?e:1}class lt extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},a=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(a=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?o.ruleId=r:(o.source=r.slice(0,c),o.ruleId=r.slice(c+1))}if(!o.place&&o.ancestors&&o.ancestors){const c=o.ancestors[o.ancestors.length-1];c&&(o.place=c.position)}const l=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=Pi(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=a&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}lt.prototype.file="";lt.prototype.name="";lt.prototype.reason="";lt.prototype.message="";lt.prototype.stack="";lt.prototype.column=void 0;lt.prototype.line=void 0;lt.prototype.ancestors=void 0;lt.prototype.cause=void 0;lt.prototype.fatal=void 0;lt.prototype.place=void 0;lt.prototype.ruleId=void 0;lt.prototype.source=void 0;const vu={}.hasOwnProperty,qk=new Map,Jk=/[A-Z]/g,Kk=new Set(["table","tbody","thead","tfoot","tr"]),Qk=new Set(["td","th"]),Mg="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Gk(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=iw(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=rw(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?gu:hk,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=Og(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function Og(e,t,n){if(t.type==="element")return Yk(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return Xk(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return ew(e,t,n);if(t.type==="mdxjsEsm")return Zk(e,t);if(t.type==="root")return tw(e,t,n);if(t.type==="text")return nw(e,t)}function Yk(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=gu,e.schema=i),e.ancestors.push(t);const o=$g(e,t.tagName,!1),a=sw(e,t);let l=ku(e,t);return Kk.has(t.tagName)&&(l=l.filter(function(c){return typeof c=="string"?!sk(c):!0})),Ig(e,a,o,t),bu(a,l),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function Xk(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}ts(e,t.position)}function Zk(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);ts(e,t.position)}function ew(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=gu,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:$g(e,t.name,!0),a=ow(e,t),l=ku(e,t);return Ig(e,a,o,t),bu(a,l),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function tw(e,t,n){const r={};return bu(r,ku(e,t)),e.create(t,e.Fragment,r,n)}function nw(e,t){return t.value}function Ig(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function bu(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function rw(e,t,n){return r;function r(i,o,a,l){const u=Array.isArray(a.children)?n:t;return l?u(o,a,l):u(o,a)}}function iw(e,t){return n;function n(r,i,o,a){const l=Array.isArray(o.children),c=yu(r);return t(i,o,a,l,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function sw(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&vu.call(t.properties,i)){const o=aw(e,i,t.properties[i]);if(o){const[a,l]=o;e.tableCellAlignToStyle&&a==="align"&&typeof l=="string"&&Qk.has(t.tagName)?r=l:n[a]=l}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function ow(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const a=o.expression;a.type;const l=a.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument))}else ts(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const l=r.value.data.estree.body[0];l.type,o=e.evaluater.evaluateExpression(l.expression)}else ts(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function ku(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:qk;for(;++r<t.children.length;){const o=t.children[r];let a;if(e.passKeys){const c=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(c){const u=i.get(c)||0;a=c+"-"+u,i.set(c,u+1)}}const l=Og(e,o,a);l!==void 0&&n.push(l)}return n}function aw(e,t,n){const r=pk(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?ek(n):gk(n)),r.property==="style"){let i=typeof n=="object"?n:lw(e,String(n));return e.stylePropertyNameCase==="css"&&(i=cw(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?ck[r.property]||r.property:r.attribute,n]}}function lw(e,t){try{return Wk(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new lt("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Mg+"#cannot-parse-style-attribute",i}}function $g(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,a;for(;++o<i.length;){const l=fp(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};a=a?{type:"MemberExpression",object:a,property:l,computed:!!(o&&l.type==="Literal"),optional:!1}:l}r=a}else r=fp(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return vu.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);ts(e)}function ts(e,t){const n=new lt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Mg+"#cannot-handle-mdx-estrees-without-createevaluater",n}function cw(e){const t={};let n;for(n in e)vu.call(e,n)&&(t[uw(n)]=e[n]);return t}function uw(e){let t=e.replace(Jk,dw);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function dw(e){return"-"+e.toLowerCase()}const Da={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},pw={};function fw(e,t){const n=pw,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Dg(e,r,i)}function Dg(e,t,n){if(mw(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return _p(e.children,t,n)}return Array.isArray(e)?_p(e,t,n):""}function _p(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Dg(e[i],t,n);return r.join("")}function mw(e){return!!(e&&typeof e=="object")}const Sp=document.createElement("i");function wu(e){const t="&"+e+";";Sp.innerHTML=t;const n=Sp.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function dn(e,t,n,r){const i=e.length;let o=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);o<r.length;)a=r.slice(o,o+1e4),a.unshift(t,0),e.splice(...a),o+=1e4,t+=1e4}function It(e,t){return e.length>0?(dn(e,e.length,0,t),e):t}const Cp={}.hasOwnProperty;function hw(e){const t={};let n=-1;for(;++n<e.length;)gw(t,e[n]);return t}function gw(e,t){let n;for(n in t){const i=(Cp.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let a;if(o)for(a in o){Cp.call(i,a)||(i[a]=[]);const l=o[a];xw(i[a],Array.isArray(l)?l:l?[l]:[])}}}function xw(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);dn(e,0,0,r)}function Fg(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Br(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const on=Xn(/[A-Za-z]/),Ct=Xn(/[\dA-Za-z]/),yw=Xn(/[#-'*+\--9=?A-Z^-~]/);function ic(e){return e!==null&&(e<32||e===127)}const sc=Xn(/\d/),vw=Xn(/[\dA-Fa-f]/),bw=Xn(/[!-/:-@[-`{-~]/);function ye(e){return e!==null&&e<-2}function vt(e){return e!==null&&(e<0||e===32)}function Ne(e){return e===-2||e===-1||e===32}const kw=Xn(new RegExp("\\p{P}|\\p{S}","u")),ww=Xn(/\s/);function Xn(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function ni(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let a="";if(o===37&&Ct(e.charCodeAt(n+1))&&Ct(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(a=String.fromCharCode(o));else if(o>55295&&o<57344){const l=e.charCodeAt(n+1);o<56320&&l>56319&&l<57344?(a=String.fromCharCode(o,l),i=1):a="�"}else a=String.fromCharCode(o);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function Pe(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return a;function a(c){return Ne(c)?(e.enter(n),l(c)):t(c)}function l(c){return Ne(c)&&o++<i?(e.consume(c),l):(e.exit(n),t(c))}}const jw={tokenize:_w};function _w(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),Pe(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),o(l)}function o(l){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,a(l)}function a(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return ye(l)?(e.consume(l),e.exit("chunkText"),o):(e.consume(l),a)}}const Sw={tokenize:Cw},Np={tokenize:Nw};function Cw(e){const t=this,n=[];let r=0,i,o,a;return l;function l(h){if(r<n.length){const P=n[r];return t.containerState=P[1],e.attempt(P[0].continuation,c,u)(h)}return u(h)}function c(h){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&g();const P=t.events.length;let C=P,_;for(;C--;)if(t.events[C][0]==="exit"&&t.events[C][1].type==="chunkFlow"){_=t.events[C][1].end;break}y(r);let N=P;for(;N<t.events.length;)t.events[N][1].end={..._},N++;return dn(t.events,C+1,0,t.events.slice(P)),t.events.length=N,u(h)}return l(h)}function u(h){if(r===n.length){if(!i)return f(h);if(i.currentConstruct&&i.currentConstruct.concrete)return x(h);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Np,d,p)(h)}function d(h){return i&&g(),y(r),f(h)}function p(h){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,x(h)}function f(h){return t.containerState={},e.attempt(Np,m,x)(h)}function m(h){return r++,n.push([t.currentConstruct,t.containerState]),f(h)}function x(h){if(h===null){i&&g(),y(0),e.consume(h);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),b(h)}function b(h){if(h===null){T(e.exit("chunkFlow"),!0),y(0),e.consume(h);return}return ye(h)?(e.consume(h),T(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(h),b)}function T(h,P){const C=t.sliceStream(h);if(P&&C.push(null),h.previous=o,o&&(o.next=h),o=h,i.defineSkip(h.start),i.write(C),t.parser.lazy[h.start.line]){let _=i.events.length;for(;_--;)if(i.events[_][1].start.offset<a&&(!i.events[_][1].end||i.events[_][1].end.offset>a))return;const N=t.events.length;let k=N,R,S;for(;k--;)if(t.events[k][0]==="exit"&&t.events[k][1].type==="chunkFlow"){if(R){S=t.events[k][1].end;break}R=!0}for(y(r),_=N;_<t.events.length;)t.events[_][1].end={...S},_++;dn(t.events,k+1,0,t.events.slice(N)),t.events.length=_}}function y(h){let P=n.length;for(;P-- >h;){const C=n[P];t.containerState=C[1],C[0].exit.call(t,e)}n.length=h}function g(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function Nw(e,t,n){return Pe(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Ep(e){if(e===null||vt(e)||ww(e))return 1;if(kw(e))return 2}function ju(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const oc={name:"attention",resolveAll:Ew,tokenize:zw};function Ew(e,t){let n=-1,r,i,o,a,l,c,u,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p={...e[r][1].end},f={...e[n][1].start};zp(p,-c),zp(f,c),a={type:c>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},l={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},o={type:c>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?"strong":"emphasis",start:{...a.start},end:{...l.end}},e[r][1].end={...a.start},e[n][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=It(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=It(u,[["enter",i,t],["enter",a,t],["exit",a,t],["enter",o,t]]),u=It(u,ju(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=It(u,[["exit",o,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,u=It(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,dn(e,r-1,n-r+3,u),n=r+u.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function zw(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Ep(r);let o;return a;function a(c){return o=c,e.enter("attentionSequence"),l(c)}function l(c){if(c===o)return e.consume(c),l;const u=e.exit("attentionSequence"),d=Ep(c),p=!d||d===2&&i||n.includes(c),f=!i||i===2&&d||n.includes(r);return u._open=!!(o===42?p:p&&(i||!f)),u._close=!!(o===42?f:f&&(d||!p)),t(c)}}function zp(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Tw={name:"autolink",tokenize:Pw};function Pw(e,t,n){let r=0;return i;function i(m){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(m){return on(m)?(e.consume(m),a):m===64?n(m):u(m)}function a(m){return m===43||m===45||m===46||Ct(m)?(r=1,l(m)):u(m)}function l(m){return m===58?(e.consume(m),r=0,c):(m===43||m===45||m===46||Ct(m))&&r++<32?(e.consume(m),l):(r=0,u(m))}function c(m){return m===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):m===null||m===32||m===60||ic(m)?n(m):(e.consume(m),c)}function u(m){return m===64?(e.consume(m),d):yw(m)?(e.consume(m),u):n(m)}function d(m){return Ct(m)?p(m):n(m)}function p(m){return m===46?(e.consume(m),r=0,d):m===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):f(m)}function f(m){if((m===45||Ct(m))&&r++<63){const x=m===45?f:p;return e.consume(m),x}return n(m)}}const ta={partial:!0,tokenize:Lw};function Lw(e,t,n){return r;function r(o){return Ne(o)?Pe(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||ye(o)?t(o):n(o)}}const Bg={continuation:{tokenize:Rw},exit:Mw,name:"blockQuote",tokenize:Aw};function Aw(e,t,n){const r=this;return i;function i(a){if(a===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),o}return n(a)}function o(a){return Ne(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function Rw(e,t,n){const r=this;return i;function i(a){return Ne(a)?Pe(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):o(a)}function o(a){return e.attempt(Bg,t,n)(a)}}function Mw(e){e.exit("blockQuote")}const Ug={name:"characterEscape",tokenize:Ow};function Ow(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return bw(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const Vg={name:"characterReference",tokenize:Iw};function Iw(e,t,n){const r=this;let i=0,o,a;return l;function l(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),c}function c(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,a=Ct,d(p))}function u(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,a=vw,d):(e.enter("characterReferenceValue"),o=7,a=sc,d(p))}function d(p){if(p===59&&i){const f=e.exit("characterReferenceValue");return a===Ct&&!wu(r.sliceSerialize(f))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(p)&&i++<o?(e.consume(p),d):n(p)}}const Tp={partial:!0,tokenize:Dw},Pp={concrete:!0,name:"codeFenced",tokenize:$w};function $w(e,t,n){const r=this,i={partial:!0,tokenize:C};let o=0,a=0,l;return c;function c(_){return u(_)}function u(_){const N=r.events[r.events.length-1];return o=N&&N[1].type==="linePrefix"?N[2].sliceSerialize(N[1],!0).length:0,l=_,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(_)}function d(_){return _===l?(a++,e.consume(_),d):a<3?n(_):(e.exit("codeFencedFenceSequence"),Ne(_)?Pe(e,p,"whitespace")(_):p(_))}function p(_){return _===null||ye(_)?(e.exit("codeFencedFence"),r.interrupt?t(_):e.check(Tp,b,P)(_)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(_))}function f(_){return _===null||ye(_)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(_)):Ne(_)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Pe(e,m,"whitespace")(_)):_===96&&_===l?n(_):(e.consume(_),f)}function m(_){return _===null||ye(_)?p(_):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),x(_))}function x(_){return _===null||ye(_)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(_)):_===96&&_===l?n(_):(e.consume(_),x)}function b(_){return e.attempt(i,P,T)(_)}function T(_){return e.enter("lineEnding"),e.consume(_),e.exit("lineEnding"),y}function y(_){return o>0&&Ne(_)?Pe(e,g,"linePrefix",o+1)(_):g(_)}function g(_){return _===null||ye(_)?e.check(Tp,b,P)(_):(e.enter("codeFlowValue"),h(_))}function h(_){return _===null||ye(_)?(e.exit("codeFlowValue"),g(_)):(e.consume(_),h)}function P(_){return e.exit("codeFenced"),t(_)}function C(_,N,k){let R=0;return S;function S(D){return _.enter("lineEnding"),_.consume(D),_.exit("lineEnding"),v}function v(D){return _.enter("codeFencedFence"),Ne(D)?Pe(_,z,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(D):z(D)}function z(D){return D===l?(_.enter("codeFencedFenceSequence"),F(D)):k(D)}function F(D){return D===l?(R++,_.consume(D),F):R>=a?(_.exit("codeFencedFenceSequence"),Ne(D)?Pe(_,U,"whitespace")(D):U(D)):k(D)}function U(D){return D===null||ye(D)?(_.exit("codeFencedFence"),N(D)):k(D)}}}function Dw(e,t,n){const r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}const Fa={name:"codeIndented",tokenize:Bw},Fw={partial:!0,tokenize:Uw};function Bw(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),Pe(e,o,"linePrefix",5)(u)}function o(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?a(u):n(u)}function a(u){return u===null?c(u):ye(u)?e.attempt(Fw,a,c)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||ye(u)?(e.exit("codeFlowValue"),a(u)):(e.consume(u),l)}function c(u){return e.exit("codeIndented"),t(u)}}function Uw(e,t,n){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):ye(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):Pe(e,o,"linePrefix",5)(a)}function o(a){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):ye(a)?i(a):n(a)}}const Vw={name:"codeText",previous:Hw,resolve:Ww,tokenize:qw};function Ww(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Hw(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function qw(e,t,n){let r=0,i,o;return a;function a(p){return e.enter("codeText"),e.enter("codeTextSequence"),l(p)}function l(p){return p===96?(e.consume(p),r++,l):(e.exit("codeTextSequence"),c(p))}function c(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),c):p===96?(o=e.enter("codeTextSequence"),i=0,d(p)):ye(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),c):(e.enter("codeTextData"),u(p))}function u(p){return p===null||p===32||p===96||ye(p)?(e.exit("codeTextData"),c(p)):(e.consume(p),u)}function d(p){return p===96?(e.consume(p),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(o.type="codeTextData",u(p))}}class Jw{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&pi(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),pi(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),pi(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);pi(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);pi(this.left,n.reverse())}}}function pi(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Wg(e){const t={};let n=-1,r,i,o,a,l,c,u;const d=new Jw(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,o=0,o<c.length&&c[o][1].type==="lineEndingBlank"&&(o+=2),o<c.length&&c[o][1].type==="content"))for(;++o<c.length&&c[o][1].type!=="content";)c[o][1].type==="chunkText"&&(c[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Kw(d,n)),n=t[n],u=!0);else if(r[1]._container){for(o=n,i=void 0;o--;)if(a=d.get(o),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=o);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},l=d.slice(i,n),l.unshift(r),d.splice(i,n-i+1,l))}}return dn(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function Kw(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const o=[];let a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const l=a.events,c=[],u={};let d,p,f=-1,m=n,x=0,b=0;const T=[b];for(;m;){for(;e.get(++i)[1]!==m;);o.push(i),m._tokenizer||(d=r.sliceStream(m),m.next||d.push(null),p&&a.defineSkip(m.start),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),p=m,m=m.next}for(m=n;++f<l.length;)l[f][0]==="exit"&&l[f-1][0]==="enter"&&l[f][1].type===l[f-1][1].type&&l[f][1].start.line!==l[f][1].end.line&&(b=f+1,T.push(b),m._tokenizer=void 0,m.previous=void 0,m=m.next);for(a.events=[],m?(m._tokenizer=void 0,m.previous=void 0):T.pop(),f=T.length;f--;){const y=l.slice(T[f],T[f+1]),g=o.pop();c.push([g,g+y.length-1]),e.splice(g,2,y)}for(c.reverse(),f=-1;++f<c.length;)u[x+c[f][0]]=x+c[f][1],x+=c[f][1]-c[f][0]-1;return u}const Qw={resolve:Yw,tokenize:Xw},Gw={partial:!0,tokenize:Zw};function Yw(e){return Wg(e),e}function Xw(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?o(l):ye(l)?e.check(Gw,a,o)(l):(e.consume(l),i)}function o(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function a(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function Zw(e,t,n){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),Pe(e,o,"linePrefix")}function o(a){if(a===null||ye(a))return n(a);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function Hg(e,t,n,r,i,o,a,l,c){const u=c||Number.POSITIVE_INFINITY;let d=0;return p;function p(y){return y===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(y),e.exit(o),f):y===null||y===32||y===41||ic(y)?n(y):(e.enter(r),e.enter(a),e.enter(l),e.enter("chunkString",{contentType:"string"}),b(y))}function f(y){return y===62?(e.enter(o),e.consume(y),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),m(y))}function m(y){return y===62?(e.exit("chunkString"),e.exit(l),f(y)):y===null||y===60||ye(y)?n(y):(e.consume(y),y===92?x:m)}function x(y){return y===60||y===62||y===92?(e.consume(y),m):m(y)}function b(y){return!d&&(y===null||y===41||vt(y))?(e.exit("chunkString"),e.exit(l),e.exit(a),e.exit(r),t(y)):d<u&&y===40?(e.consume(y),d++,b):y===41?(e.consume(y),d--,b):y===null||y===32||y===40||ic(y)?n(y):(e.consume(y),y===92?T:b)}function T(y){return y===40||y===41||y===92?(e.consume(y),b):b(y)}}function qg(e,t,n,r,i,o){const a=this;let l=0,c;return u;function u(m){return e.enter(r),e.enter(i),e.consume(m),e.exit(i),e.enter(o),d}function d(m){return l>999||m===null||m===91||m===93&&!c||m===94&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?n(m):m===93?(e.exit(o),e.enter(i),e.consume(m),e.exit(i),e.exit(r),t):ye(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),p(m))}function p(m){return m===null||m===91||m===93||ye(m)||l++>999?(e.exit("chunkString"),d(m)):(e.consume(m),c||(c=!Ne(m)),m===92?f:p)}function f(m){return m===91||m===92||m===93?(e.consume(m),l++,p):p(m)}}function Jg(e,t,n,r,i,o){let a;return l;function l(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),a=f===40?41:f,c):n(f)}function c(f){return f===a?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(o),u(f))}function u(f){return f===a?(e.exit(o),c(a)):f===null?n(f):ye(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),Pe(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===a||f===null||ye(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?p:d)}function p(f){return f===a||f===92?(e.consume(f),d):d(f)}}function Li(e,t){let n;return r;function r(i){return ye(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):Ne(i)?Pe(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const ej={name:"definition",tokenize:nj},tj={partial:!0,tokenize:rj};function nj(e,t,n){const r=this;let i;return o;function o(m){return e.enter("definition"),a(m)}function a(m){return qg.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(m)}function l(m){return i=Br(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),m===58?(e.enter("definitionMarker"),e.consume(m),e.exit("definitionMarker"),c):n(m)}function c(m){return vt(m)?Li(e,u)(m):u(m)}function u(m){return Hg(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(m)}function d(m){return e.attempt(tj,p,p)(m)}function p(m){return Ne(m)?Pe(e,f,"whitespace")(m):f(m)}function f(m){return m===null||ye(m)?(e.exit("definition"),r.parser.defined.push(i),t(m)):n(m)}}function rj(e,t,n){return r;function r(l){return vt(l)?Li(e,i)(l):n(l)}function i(l){return Jg(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function o(l){return Ne(l)?Pe(e,a,"whitespace")(l):a(l)}function a(l){return l===null||ye(l)?t(l):n(l)}}const ij={name:"hardBreakEscape",tokenize:sj};function sj(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return ye(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const oj={name:"headingAtx",resolve:aj,tokenize:lj};function aj(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},dn(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function lj(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),o(d)}function o(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&r++<6?(e.consume(d),a):d===null||vt(d)?(e.exit("atxHeadingSequence"),l(d)):n(d)}function l(d){return d===35?(e.enter("atxHeadingSequence"),c(d)):d===null||ye(d)?(e.exit("atxHeading"),t(d)):Ne(d)?Pe(e,l,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function c(d){return d===35?(e.consume(d),c):(e.exit("atxHeadingSequence"),l(d))}function u(d){return d===null||d===35||vt(d)?(e.exit("atxHeadingText"),l(d)):(e.consume(d),u)}}const cj=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Lp=["pre","script","style","textarea"],uj={concrete:!0,name:"htmlFlow",resolveTo:fj,tokenize:mj},dj={partial:!0,tokenize:gj},pj={partial:!0,tokenize:hj};function fj(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function mj(e,t,n){const r=this;let i,o,a,l,c;return u;function u(E){return d(E)}function d(E){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(E),p}function p(E){return E===33?(e.consume(E),f):E===47?(e.consume(E),o=!0,b):E===63?(e.consume(E),i=3,r.interrupt?t:j):on(E)?(e.consume(E),a=String.fromCharCode(E),T):n(E)}function f(E){return E===45?(e.consume(E),i=2,m):E===91?(e.consume(E),i=5,l=0,x):on(E)?(e.consume(E),i=4,r.interrupt?t:j):n(E)}function m(E){return E===45?(e.consume(E),r.interrupt?t:j):n(E)}function x(E){const xe="CDATA[";return E===xe.charCodeAt(l++)?(e.consume(E),l===xe.length?r.interrupt?t:z:x):n(E)}function b(E){return on(E)?(e.consume(E),a=String.fromCharCode(E),T):n(E)}function T(E){if(E===null||E===47||E===62||vt(E)){const xe=E===47,M=a.toLowerCase();return!xe&&!o&&Lp.includes(M)?(i=1,r.interrupt?t(E):z(E)):cj.includes(a.toLowerCase())?(i=6,xe?(e.consume(E),y):r.interrupt?t(E):z(E)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(E):o?g(E):h(E))}return E===45||Ct(E)?(e.consume(E),a+=String.fromCharCode(E),T):n(E)}function y(E){return E===62?(e.consume(E),r.interrupt?t:z):n(E)}function g(E){return Ne(E)?(e.consume(E),g):S(E)}function h(E){return E===47?(e.consume(E),S):E===58||E===95||on(E)?(e.consume(E),P):Ne(E)?(e.consume(E),h):S(E)}function P(E){return E===45||E===46||E===58||E===95||Ct(E)?(e.consume(E),P):C(E)}function C(E){return E===61?(e.consume(E),_):Ne(E)?(e.consume(E),C):h(E)}function _(E){return E===null||E===60||E===61||E===62||E===96?n(E):E===34||E===39?(e.consume(E),c=E,N):Ne(E)?(e.consume(E),_):k(E)}function N(E){return E===c?(e.consume(E),c=null,R):E===null||ye(E)?n(E):(e.consume(E),N)}function k(E){return E===null||E===34||E===39||E===47||E===60||E===61||E===62||E===96||vt(E)?C(E):(e.consume(E),k)}function R(E){return E===47||E===62||Ne(E)?h(E):n(E)}function S(E){return E===62?(e.consume(E),v):n(E)}function v(E){return E===null||ye(E)?z(E):Ne(E)?(e.consume(E),v):n(E)}function z(E){return E===45&&i===2?(e.consume(E),ne):E===60&&i===1?(e.consume(E),L):E===62&&i===4?(e.consume(E),J):E===63&&i===3?(e.consume(E),j):E===93&&i===5?(e.consume(E),A):ye(E)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(dj,Q,F)(E)):E===null||ye(E)?(e.exit("htmlFlowData"),F(E)):(e.consume(E),z)}function F(E){return e.check(pj,U,Q)(E)}function U(E){return e.enter("lineEnding"),e.consume(E),e.exit("lineEnding"),D}function D(E){return E===null||ye(E)?F(E):(e.enter("htmlFlowData"),z(E))}function ne(E){return E===45?(e.consume(E),j):z(E)}function L(E){return E===47?(e.consume(E),a="",I):z(E)}function I(E){if(E===62){const xe=a.toLowerCase();return Lp.includes(xe)?(e.consume(E),J):z(E)}return on(E)&&a.length<8?(e.consume(E),a+=String.fromCharCode(E),I):z(E)}function A(E){return E===93?(e.consume(E),j):z(E)}function j(E){return E===62?(e.consume(E),J):E===45&&i===2?(e.consume(E),j):z(E)}function J(E){return E===null||ye(E)?(e.exit("htmlFlowData"),Q(E)):(e.consume(E),J)}function Q(E){return e.exit("htmlFlow"),t(E)}}function hj(e,t,n){const r=this;return i;function i(a){return ye(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o):n(a)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function gj(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(ta,t,n)}}const xj={name:"htmlText",tokenize:yj};function yj(e,t,n){const r=this;let i,o,a;return l;function l(j){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(j),c}function c(j){return j===33?(e.consume(j),u):j===47?(e.consume(j),C):j===63?(e.consume(j),h):on(j)?(e.consume(j),k):n(j)}function u(j){return j===45?(e.consume(j),d):j===91?(e.consume(j),o=0,x):on(j)?(e.consume(j),g):n(j)}function d(j){return j===45?(e.consume(j),m):n(j)}function p(j){return j===null?n(j):j===45?(e.consume(j),f):ye(j)?(a=p,L(j)):(e.consume(j),p)}function f(j){return j===45?(e.consume(j),m):p(j)}function m(j){return j===62?ne(j):j===45?f(j):p(j)}function x(j){const J="CDATA[";return j===J.charCodeAt(o++)?(e.consume(j),o===J.length?b:x):n(j)}function b(j){return j===null?n(j):j===93?(e.consume(j),T):ye(j)?(a=b,L(j)):(e.consume(j),b)}function T(j){return j===93?(e.consume(j),y):b(j)}function y(j){return j===62?ne(j):j===93?(e.consume(j),y):b(j)}function g(j){return j===null||j===62?ne(j):ye(j)?(a=g,L(j)):(e.consume(j),g)}function h(j){return j===null?n(j):j===63?(e.consume(j),P):ye(j)?(a=h,L(j)):(e.consume(j),h)}function P(j){return j===62?ne(j):h(j)}function C(j){return on(j)?(e.consume(j),_):n(j)}function _(j){return j===45||Ct(j)?(e.consume(j),_):N(j)}function N(j){return ye(j)?(a=N,L(j)):Ne(j)?(e.consume(j),N):ne(j)}function k(j){return j===45||Ct(j)?(e.consume(j),k):j===47||j===62||vt(j)?R(j):n(j)}function R(j){return j===47?(e.consume(j),ne):j===58||j===95||on(j)?(e.consume(j),S):ye(j)?(a=R,L(j)):Ne(j)?(e.consume(j),R):ne(j)}function S(j){return j===45||j===46||j===58||j===95||Ct(j)?(e.consume(j),S):v(j)}function v(j){return j===61?(e.consume(j),z):ye(j)?(a=v,L(j)):Ne(j)?(e.consume(j),v):R(j)}function z(j){return j===null||j===60||j===61||j===62||j===96?n(j):j===34||j===39?(e.consume(j),i=j,F):ye(j)?(a=z,L(j)):Ne(j)?(e.consume(j),z):(e.consume(j),U)}function F(j){return j===i?(e.consume(j),i=void 0,D):j===null?n(j):ye(j)?(a=F,L(j)):(e.consume(j),F)}function U(j){return j===null||j===34||j===39||j===60||j===61||j===96?n(j):j===47||j===62||vt(j)?R(j):(e.consume(j),U)}function D(j){return j===47||j===62||vt(j)?R(j):n(j)}function ne(j){return j===62?(e.consume(j),e.exit("htmlTextData"),e.exit("htmlText"),t):n(j)}function L(j){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(j),e.exit("lineEnding"),I}function I(j){return Ne(j)?Pe(e,A,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(j):A(j)}function A(j){return e.enter("htmlTextData"),a(j)}}const _u={name:"labelEnd",resolveAll:wj,resolveTo:jj,tokenize:_j},vj={tokenize:Sj},bj={tokenize:Cj},kj={tokenize:Nj};function wj(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&dn(e,0,e.length,n),e}function jj(e,t){let n=e.length,r=0,i,o,a,l;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(a){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=n);const c={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[o][1].start},end:{...e[a][1].end}},d={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[a-2][1].start}};return l=[["enter",c,t],["enter",u,t]],l=It(l,e.slice(o+1,o+r+3)),l=It(l,[["enter",d,t]]),l=It(l,ju(t.parser.constructs.insideSpan.null,e.slice(o+r+4,a-3),t)),l=It(l,[["exit",d,t],e[a-2],e[a-1],["exit",u,t]]),l=It(l,e.slice(a+1)),l=It(l,[["exit",c,t]]),dn(e,o,e.length,l),e}function _j(e,t,n){const r=this;let i=r.events.length,o,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return l;function l(f){return o?o._inactive?p(f):(a=r.parser.defined.includes(Br(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),c):n(f)}function c(f){return f===40?e.attempt(vj,d,a?d:p)(f):f===91?e.attempt(bj,d,a?u:p)(f):a?d(f):p(f)}function u(f){return e.attempt(kj,d,p)(f)}function d(f){return t(f)}function p(f){return o._balanced=!0,n(f)}}function Sj(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),i}function i(p){return vt(p)?Li(e,o)(p):o(p)}function o(p){return p===41?d(p):Hg(e,a,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function a(p){return vt(p)?Li(e,c)(p):d(p)}function l(p){return n(p)}function c(p){return p===34||p===39||p===40?Jg(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function u(p){return vt(p)?Li(e,d)(p):d(p)}function d(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function Cj(e,t,n){const r=this;return i;function i(l){return qg.call(r,e,o,a,"reference","referenceMarker","referenceString")(l)}function o(l){return r.parser.defined.includes(Br(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function a(l){return n(l)}}function Nj(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const Ej={name:"labelStartImage",resolveAll:_u.resolveAll,tokenize:zj};function zj(e,t,n){const r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),o}function o(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),a):n(l)}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const Tj={name:"labelStartLink",resolveAll:_u.resolveAll,tokenize:Pj};function Pj(e,t,n){const r=this;return i;function i(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),o}function o(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const Ba={name:"lineEnding",tokenize:Lj};function Lj(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Pe(e,t,"linePrefix")}}const Qs={name:"thematicBreak",tokenize:Aj};function Aj(e,t,n){let r=0,i;return o;function o(u){return e.enter("thematicBreak"),a(u)}function a(u){return i=u,l(u)}function l(u){return u===i?(e.enter("thematicBreakSequence"),c(u)):r>=3&&(u===null||ye(u))?(e.exit("thematicBreak"),t(u)):n(u)}function c(u){return u===i?(e.consume(u),r++,c):(e.exit("thematicBreakSequence"),Ne(u)?Pe(e,l,"whitespace")(u):l(u))}}const ft={continuation:{tokenize:Ij},exit:Dj,name:"list",tokenize:Oj},Rj={partial:!0,tokenize:Fj},Mj={partial:!0,tokenize:$j};function Oj(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return l;function l(m){const x=r.containerState.type||(m===42||m===43||m===45?"listUnordered":"listOrdered");if(x==="listUnordered"?!r.containerState.marker||m===r.containerState.marker:sc(m)){if(r.containerState.type||(r.containerState.type=x,e.enter(x,{_container:!0})),x==="listUnordered")return e.enter("listItemPrefix"),m===42||m===45?e.check(Qs,n,u)(m):u(m);if(!r.interrupt||m===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(m)}return n(m)}function c(m){return sc(m)&&++a<10?(e.consume(m),c):(!r.interrupt||a<2)&&(r.containerState.marker?m===r.containerState.marker:m===41||m===46)?(e.exit("listItemValue"),u(m)):n(m)}function u(m){return e.enter("listItemMarker"),e.consume(m),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||m,e.check(ta,r.interrupt?n:d,e.attempt(Rj,f,p))}function d(m){return r.containerState.initialBlankLine=!0,o++,f(m)}function p(m){return Ne(m)?(e.enter("listItemPrefixWhitespace"),e.consume(m),e.exit("listItemPrefixWhitespace"),f):n(m)}function f(m){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(m)}}function Ij(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(ta,i,o);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Pe(e,t,"listItemIndent",r.containerState.size+1)(l)}function o(l){return r.containerState.furtherBlankLines||!Ne(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Mj,t,a)(l))}function a(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,Pe(e,e.attempt(ft,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function $j(e,t,n){const r=this;return Pe(e,i,"listItemIndent",r.containerState.size+1);function i(o){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(o):n(o)}}function Dj(e){e.exit(this.containerState.type)}function Fj(e,t,n){const r=this;return Pe(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const a=r.events[r.events.length-1];return!Ne(o)&&a&&a[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const Ap={name:"setextUnderline",resolveTo:Bj,tokenize:Uj};function Bj(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",a,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=a,e.push(["exit",a,t]),e}function Uj(e,t,n){const r=this;let i;return o;function o(u){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),i=u,a(u)):n(u)}function a(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===i?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),Ne(u)?Pe(e,c,"lineSuffix")(u):c(u))}function c(u){return u===null||ye(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const Vj={tokenize:Wj};function Wj(e){const t=this,n=e.attempt(ta,r,e.attempt(this.parser.constructs.flowInitial,i,Pe(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Qw,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const Hj={resolveAll:Qg()},qj=Kg("string"),Jj=Kg("text");function Kg(e){return{resolveAll:Qg(e==="text"?Kj:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,a,l);return a;function a(d){return u(d)?o(d):l(d)}function l(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),c}function c(d){return u(d)?(n.exit("data"),o(d)):(n.consume(d),c)}function u(d){if(d===null)return!0;const p=i[d];let f=-1;if(p)for(;++f<p.length;){const m=p[f];if(!m.previous||m.previous.call(r,r.previous))return!0}return!1}}}function Qg(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function Kj(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,a=-1,l=0,c;for(;o--;){const u=i[o];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)l++,a--;if(a)break;a=-1}else if(u===-2)c=!0,l++;else if(u!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){const u={type:n===e.length||c||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?a:r.start._bufferIndex+a,_index:r.start._index+o,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const Qj={42:ft,43:ft,45:ft,48:ft,49:ft,50:ft,51:ft,52:ft,53:ft,54:ft,55:ft,56:ft,57:ft,62:Bg},Gj={91:ej},Yj={[-2]:Fa,[-1]:Fa,32:Fa},Xj={35:oj,42:Qs,45:[Ap,Qs],60:uj,61:Ap,95:Qs,96:Pp,126:Pp},Zj={38:Vg,92:Ug},e_={[-5]:Ba,[-4]:Ba,[-3]:Ba,33:Ej,38:Vg,42:oc,60:[Tw,xj],91:Tj,92:[ij,Ug],93:_u,95:oc,96:Vw},t_={null:[oc,Hj]},n_={null:[42,95]},r_={null:[]},i_=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:n_,contentInitial:Gj,disable:r_,document:Qj,flow:Xj,flowInitial:Yj,insideSpan:t_,string:Zj,text:e_},Symbol.toStringTag,{value:"Module"}));function s_(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},o=[];let a=[],l=[];const c={attempt:N(C),check:N(_),consume:g,enter:h,exit:P,interrupt:N(_,{interrupt:!0})},u={code:null,containerState:{},defineSkip:b,events:[],now:x,parser:e,previous:null,sliceSerialize:f,sliceStream:m,write:p};let d=t.tokenize.call(u,c);return t.resolveAll&&o.push(t),u;function p(v){return a=It(a,v),T(),a[a.length-1]!==null?[]:(k(t,0),u.events=ju(o,u.events,u),u.events)}function f(v,z){return a_(m(v),z)}function m(v){return o_(a,v)}function x(){const{_bufferIndex:v,_index:z,line:F,column:U,offset:D}=r;return{_bufferIndex:v,_index:z,line:F,column:U,offset:D}}function b(v){i[v.line]=v.column,S()}function T(){let v;for(;r._index<a.length;){const z=a[r._index];if(typeof z=="string")for(v=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===v&&r._bufferIndex<z.length;)y(z.charCodeAt(r._bufferIndex));else y(z)}}function y(v){d=d(v)}function g(v){ye(v)?(r.line++,r.column=1,r.offset+=v===-3?2:1,S()):v!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=v}function h(v,z){const F=z||{};return F.type=v,F.start=x(),u.events.push(["enter",F,u]),l.push(F),F}function P(v){const z=l.pop();return z.end=x(),u.events.push(["exit",z,u]),z}function C(v,z){k(v,z.from)}function _(v,z){z.restore()}function N(v,z){return F;function F(U,D,ne){let L,I,A,j;return Array.isArray(U)?Q(U):"tokenize"in U?Q([U]):J(U);function J(te){return V;function V(se){const pe=se!==null&&te[se],O=se!==null&&te.null,H=[...Array.isArray(pe)?pe:pe?[pe]:[],...Array.isArray(O)?O:O?[O]:[]];return Q(H)(se)}}function Q(te){return L=te,I=0,te.length===0?ne:E(te[I])}function E(te){return V;function V(se){return j=R(),A=te,te.partial||(u.currentConstruct=te),te.name&&u.parser.constructs.disable.null.includes(te.name)?M():te.tokenize.call(z?Object.assign(Object.create(u),z):u,c,xe,M)(se)}}function xe(te){return v(A,j),D}function M(te){return j.restore(),++I<L.length?E(L[I]):ne}}}function k(v,z){v.resolveAll&&!o.includes(v)&&o.push(v),v.resolve&&dn(u.events,z,u.events.length-z,v.resolve(u.events.slice(z),u)),v.resolveTo&&(u.events=v.resolveTo(u.events,u))}function R(){const v=x(),z=u.previous,F=u.currentConstruct,U=u.events.length,D=Array.from(l);return{from:U,restore:ne};function ne(){r=v,u.previous=z,u.currentConstruct=F,u.events.length=U,l=D,S()}}function S(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function o_(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let a;if(n===i)a=[e[n].slice(r,o)];else{if(a=e.slice(n,i),r>-1){const l=a[0];typeof l=="string"?a[0]=l.slice(r):a.shift()}o>0&&a.push(e[i].slice(0,o))}return a}function a_(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let a;if(typeof o=="string")a=o;else switch(o){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(o)}i=o===-2,r.push(a)}return r.join("")}function l_(e){const r={constructs:hw([i_,...(e||{}).extensions||[]]),content:i(jw),defined:[],document:i(Sw),flow:i(Vj),lazy:{},string:i(qj),text:i(Jj)};return r;function i(o){return a;function a(l){return s_(r,o,l)}}}function c_(e){for(;!Wg(e););return e}const Rp=/[\0\t\n\r]/g;function u_(){let e=1,t="",n=!0,r;return i;function i(o,a,l){const c=[];let u,d,p,f,m;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(a||void 0).decode(o)),p=0,t="",n&&(o.charCodeAt(0)===65279&&p++,n=void 0);p<o.length;){if(Rp.lastIndex=p,u=Rp.exec(o),f=u&&u.index!==void 0?u.index:o.length,m=o.charCodeAt(f),!u){t=o.slice(p);break}if(m===10&&p===f&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),p<f&&(c.push(o.slice(p,f)),e+=f-p),m){case 0:{c.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,c.push(-2);e++<d;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}p=f+1}return l&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const d_=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function p_(e){return e.replace(d_,f_)}function f_(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return Fg(n.slice(o?2:1),o?16:10)}return wu(n)||e}const Gg={}.hasOwnProperty;function m_(e,t,n){return typeof t!="string"&&(n=t,t=void 0),h_(n)(c_(l_(n).document().write(u_()(e,t,!0))))}function h_(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(ve),autolinkProtocol:R,autolinkEmail:R,atxHeading:o(q),blockQuote:o(O),characterEscape:R,characterReference:R,codeFenced:o(H),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:o(H,a),codeText:o(K,a),codeTextData:R,data:R,codeFlowValue:R,definition:o(Z),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:o(ae),hardBreakEscape:o(re),hardBreakTrailing:o(re),htmlFlow:o(ie,a),htmlFlowData:R,htmlText:o(ie,a),htmlTextData:R,image:o(ge),label:a,link:o(ve),listItem:o(Y),listItemValue:f,listOrdered:o(B,p),listUnordered:o(B),paragraph:o(oe),reference:E,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:o(q),strong:o(me),thematicBreak:o(nt)},exit:{atxHeading:c(),atxHeadingSequence:C,autolink:c(),autolinkEmail:pe,autolinkProtocol:se,blockQuote:c(),characterEscapeValue:S,characterReferenceMarkerHexadecimal:M,characterReferenceMarkerNumeric:M,characterReferenceValue:te,characterReference:V,codeFenced:c(T),codeFencedFence:b,codeFencedFenceInfo:m,codeFencedFenceMeta:x,codeFlowValue:S,codeIndented:c(y),codeText:c(D),codeTextData:S,data:S,definition:c(),definitionDestinationString:P,definitionLabelString:g,definitionTitleString:h,emphasis:c(),hardBreakEscape:c(z),hardBreakTrailing:c(z),htmlFlow:c(F),htmlFlowData:S,htmlText:c(U),htmlTextData:S,image:c(L),label:A,labelText:I,lineEnding:v,link:c(ne),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:xe,resourceDestinationString:j,resourceTitleString:J,resource:Q,setextHeading:c(k),setextHeadingLineSequence:N,setextHeadingText:_,strong:c(),thematicBreak:c()}};Yg(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(W){let G={type:"root",children:[]};const fe={stack:[G],tokenStack:[],config:t,enter:l,exit:u,buffer:a,resume:d,data:n},le=[];let je=-1;for(;++je<W.length;)if(W[je][1].type==="listOrdered"||W[je][1].type==="listUnordered")if(W[je][0]==="enter")le.push(je);else{const Be=le.pop();je=i(W,Be,je)}for(je=-1;++je<W.length;){const Be=t[W[je][0]];Gg.call(Be,W[je][1].type)&&Be[W[je][1].type].call(Object.assign({sliceSerialize:W[je][2].sliceSerialize},fe),W[je][1])}if(fe.tokenStack.length>0){const Be=fe.tokenStack[fe.tokenStack.length-1];(Be[1]||Mp).call(fe,void 0,Be[0])}for(G.position={start:Nn(W.length>0?W[0][1].start:{line:1,column:1,offset:0}),end:Nn(W.length>0?W[W.length-2][1].end:{line:1,column:1,offset:0})},je=-1;++je<t.transforms.length;)G=t.transforms[je](G)||G;return G}function i(W,G,fe){let le=G-1,je=-1,Be=!1,pn,Vt,Wt,_n;for(;++le<=fe;){const Xe=W[le];switch(Xe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Xe[0]==="enter"?je++:je--,_n=void 0;break}case"lineEndingBlank":{Xe[0]==="enter"&&(pn&&!_n&&!je&&!Wt&&(Wt=le),_n=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:_n=void 0}if(!je&&Xe[0]==="enter"&&Xe[1].type==="listItemPrefix"||je===-1&&Xe[0]==="exit"&&(Xe[1].type==="listUnordered"||Xe[1].type==="listOrdered")){if(pn){let Sn=le;for(Vt=void 0;Sn--;){const Lt=W[Sn];if(Lt[1].type==="lineEnding"||Lt[1].type==="lineEndingBlank"){if(Lt[0]==="exit")continue;Vt&&(W[Vt][1].type="lineEndingBlank",Be=!0),Lt[1].type="lineEnding",Vt=Sn}else if(!(Lt[1].type==="linePrefix"||Lt[1].type==="blockQuotePrefix"||Lt[1].type==="blockQuotePrefixWhitespace"||Lt[1].type==="blockQuoteMarker"||Lt[1].type==="listItemIndent"))break}Wt&&(!Vt||Wt<Vt)&&(pn._spread=!0),pn.end=Object.assign({},Vt?W[Vt][1].start:Xe[1].end),W.splice(Vt||le,0,["exit",pn,Xe[2]]),le++,fe++}if(Xe[1].type==="listItemPrefix"){const Sn={type:"listItem",_spread:!1,start:Object.assign({},Xe[1].start),end:void 0};pn=Sn,W.splice(le,0,["enter",Sn,Xe[2]]),le++,fe++,Wt=void 0,_n=!0}}}return W[G][1]._spread=Be,fe}function o(W,G){return fe;function fe(le){l.call(this,W(le),le),G&&G.call(this,le)}}function a(){this.stack.push({type:"fragment",children:[]})}function l(W,G,fe){this.stack[this.stack.length-1].children.push(W),this.stack.push(W),this.tokenStack.push([G,fe||void 0]),W.position={start:Nn(G.start),end:void 0}}function c(W){return G;function G(fe){W&&W.call(this,fe),u.call(this,fe)}}function u(W,G){const fe=this.stack.pop(),le=this.tokenStack.pop();if(le)le[0].type!==W.type&&(G?G.call(this,W,le[0]):(le[1]||Mp).call(this,W,le[0]));else throw new Error("Cannot close `"+W.type+"` ("+Pi({start:W.start,end:W.end})+"): it’s not open");fe.position.end=Nn(W.end)}function d(){return fw(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function f(W){if(this.data.expectingFirstListItemValue){const G=this.stack[this.stack.length-2];G.start=Number.parseInt(this.sliceSerialize(W),10),this.data.expectingFirstListItemValue=void 0}}function m(){const W=this.resume(),G=this.stack[this.stack.length-1];G.lang=W}function x(){const W=this.resume(),G=this.stack[this.stack.length-1];G.meta=W}function b(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function T(){const W=this.resume(),G=this.stack[this.stack.length-1];G.value=W.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function y(){const W=this.resume(),G=this.stack[this.stack.length-1];G.value=W.replace(/(\r?\n|\r)$/g,"")}function g(W){const G=this.resume(),fe=this.stack[this.stack.length-1];fe.label=G,fe.identifier=Br(this.sliceSerialize(W)).toLowerCase()}function h(){const W=this.resume(),G=this.stack[this.stack.length-1];G.title=W}function P(){const W=this.resume(),G=this.stack[this.stack.length-1];G.url=W}function C(W){const G=this.stack[this.stack.length-1];if(!G.depth){const fe=this.sliceSerialize(W).length;G.depth=fe}}function _(){this.data.setextHeadingSlurpLineEnding=!0}function N(W){const G=this.stack[this.stack.length-1];G.depth=this.sliceSerialize(W).codePointAt(0)===61?1:2}function k(){this.data.setextHeadingSlurpLineEnding=void 0}function R(W){const fe=this.stack[this.stack.length-1].children;let le=fe[fe.length-1];(!le||le.type!=="text")&&(le=kt(),le.position={start:Nn(W.start),end:void 0},fe.push(le)),this.stack.push(le)}function S(W){const G=this.stack.pop();G.value+=this.sliceSerialize(W),G.position.end=Nn(W.end)}function v(W){const G=this.stack[this.stack.length-1];if(this.data.atHardBreak){const fe=G.children[G.children.length-1];fe.position.end=Nn(W.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(G.type)&&(R.call(this,W),S.call(this,W))}function z(){this.data.atHardBreak=!0}function F(){const W=this.resume(),G=this.stack[this.stack.length-1];G.value=W}function U(){const W=this.resume(),G=this.stack[this.stack.length-1];G.value=W}function D(){const W=this.resume(),G=this.stack[this.stack.length-1];G.value=W}function ne(){const W=this.stack[this.stack.length-1];if(this.data.inReference){const G=this.data.referenceType||"shortcut";W.type+="Reference",W.referenceType=G,delete W.url,delete W.title}else delete W.identifier,delete W.label;this.data.referenceType=void 0}function L(){const W=this.stack[this.stack.length-1];if(this.data.inReference){const G=this.data.referenceType||"shortcut";W.type+="Reference",W.referenceType=G,delete W.url,delete W.title}else delete W.identifier,delete W.label;this.data.referenceType=void 0}function I(W){const G=this.sliceSerialize(W),fe=this.stack[this.stack.length-2];fe.label=p_(G),fe.identifier=Br(G).toLowerCase()}function A(){const W=this.stack[this.stack.length-1],G=this.resume(),fe=this.stack[this.stack.length-1];if(this.data.inReference=!0,fe.type==="link"){const le=W.children;fe.children=le}else fe.alt=G}function j(){const W=this.resume(),G=this.stack[this.stack.length-1];G.url=W}function J(){const W=this.resume(),G=this.stack[this.stack.length-1];G.title=W}function Q(){this.data.inReference=void 0}function E(){this.data.referenceType="collapsed"}function xe(W){const G=this.resume(),fe=this.stack[this.stack.length-1];fe.label=G,fe.identifier=Br(this.sliceSerialize(W)).toLowerCase(),this.data.referenceType="full"}function M(W){this.data.characterReferenceType=W.type}function te(W){const G=this.sliceSerialize(W),fe=this.data.characterReferenceType;let le;fe?(le=Fg(G,fe==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):le=wu(G);const je=this.stack[this.stack.length-1];je.value+=le}function V(W){const G=this.stack.pop();G.position.end=Nn(W.end)}function se(W){S.call(this,W);const G=this.stack[this.stack.length-1];G.url=this.sliceSerialize(W)}function pe(W){S.call(this,W);const G=this.stack[this.stack.length-1];G.url="mailto:"+this.sliceSerialize(W)}function O(){return{type:"blockquote",children:[]}}function H(){return{type:"code",lang:null,meta:null,value:""}}function K(){return{type:"inlineCode",value:""}}function Z(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function ae(){return{type:"emphasis",children:[]}}function q(){return{type:"heading",depth:0,children:[]}}function re(){return{type:"break"}}function ie(){return{type:"html",value:""}}function ge(){return{type:"image",title:null,url:"",alt:null}}function ve(){return{type:"link",title:null,url:"",children:[]}}function B(W){return{type:"list",ordered:W.type==="listOrdered",start:null,spread:W._spread,children:[]}}function Y(W){return{type:"listItem",spread:W._spread,checked:null,children:[]}}function oe(){return{type:"paragraph",children:[]}}function me(){return{type:"strong",children:[]}}function kt(){return{type:"text",value:""}}function nt(){return{type:"thematicBreak"}}}function Nn(e){return{line:e.line,column:e.column,offset:e.offset}}function Yg(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?Yg(e,r):g_(e,r)}}function g_(e,t){let n;for(n in t)if(Gg.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Mp(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Pi({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Pi({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Pi({start:t.start,end:t.end})+") is still open")}function x_(e){const t=this;t.parser=n;function n(r){return m_(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function y_(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function v_(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function b_(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function k_(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function w_(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function j_(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=ni(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let a,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=o+1,l+=1,e.footnoteCounts.set(r,l);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,c);const u={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,u),e.applyData(t,u)}function __(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function S_(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Xg(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function C_(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Xg(e,t);const i={src:ni(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function N_(e,t){const n={src:ni(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function E_(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function z_(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Xg(e,t);const i={href:ni(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function T_(e,t){const n={href:ni(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function P_(e,t,n){const r=e.all(t),i=n?L_(n):Zg(t),o={},a=[];if(typeof t.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const d=r[l];(i||l!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?a.push(...d.children):a.push(d)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:a};return e.patch(t,u),e.applyData(t,u)}function L_(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Zg(n[r])}return t}function Zg(e){const t=e.spread;return t??e.children.length>1}function A_(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function R_(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function M_(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function O_(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function I_(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),i.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},l=yu(t.children[1]),c=Ag(t.children[t.children.length-1]);l&&c&&(a.position={start:l,end:c}),i.push(a)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function $_(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,l=a?a.length:t.children.length;let c=-1;const u=[];for(;++c<l;){const p=t.children[c],f={},m=a?a[c]:void 0;m&&(f.align=m);let x={type:"element",tagName:o,properties:f,children:[]};p&&(x.children=e.all(p),e.patch(p,x),x=e.applyData(p,x)),u.push(x)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function D_(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const Op=9,Ip=32;function F_(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push($p(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push($p(t.slice(i),i>0,!1)),o.join("")}function $p(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===Op||o===Ip;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===Op||o===Ip;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function B_(e,t){const n={type:"text",value:F_(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function U_(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const V_={blockquote:y_,break:v_,code:b_,delete:k_,emphasis:w_,footnoteReference:j_,heading:__,html:S_,imageReference:C_,image:N_,inlineCode:E_,linkReference:z_,link:T_,listItem:P_,list:A_,paragraph:R_,root:M_,strong:O_,table:I_,tableCell:D_,tableRow:$_,text:B_,thematicBreak:U_,toml:As,yaml:As,definition:As,footnoteDefinition:As};function As(){}const ex=-1,na=0,Ai=1,zo=2,Su=3,Cu=4,Nu=5,Eu=6,tx=7,nx=8,Dp=typeof self=="object"?self:globalThis,W_=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,a]=t[i];switch(o){case na:case ex:return n(a,i);case Ai:{const l=n([],i);for(const c of a)l.push(r(c));return l}case zo:{const l=n({},i);for(const[c,u]of a)l[r(c)]=r(u);return l}case Su:return n(new Date(a),i);case Cu:{const{source:l,flags:c}=a;return n(new RegExp(l,c),i)}case Nu:{const l=n(new Map,i);for(const[c,u]of a)l.set(r(c),r(u));return l}case Eu:{const l=n(new Set,i);for(const c of a)l.add(r(c));return l}case tx:{const{name:l,message:c}=a;return n(new Dp[l](c),i)}case nx:return n(BigInt(a),i);case"BigInt":return n(Object(BigInt(a)),i);case"ArrayBuffer":return n(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:l}=new Uint8Array(a);return n(new DataView(l),a)}}return n(new Dp[o](a),i)};return r},Fp=e=>W_(new Map,e)(0),vr="",{toString:H_}={},{keys:q_}=Object,fi=e=>{const t=typeof e;if(t!=="object"||!e)return[na,t];const n=H_.call(e).slice(8,-1);switch(n){case"Array":return[Ai,vr];case"Object":return[zo,vr];case"Date":return[Su,vr];case"RegExp":return[Cu,vr];case"Map":return[Nu,vr];case"Set":return[Eu,vr];case"DataView":return[Ai,n]}return n.includes("Array")?[Ai,n]:n.includes("Error")?[tx,n]:[zo,n]},Rs=([e,t])=>e===na&&(t==="function"||t==="symbol"),J_=(e,t,n,r)=>{const i=(a,l)=>{const c=r.push(a)-1;return n.set(l,c),c},o=a=>{if(n.has(a))return n.get(a);let[l,c]=fi(a);switch(l){case na:{let d=a;switch(c){case"bigint":l=nx,d=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);d=null;break;case"undefined":return i([ex],a)}return i([l,d],a)}case Ai:{if(c){let f=a;return c==="DataView"?f=new Uint8Array(a.buffer):c==="ArrayBuffer"&&(f=new Uint8Array(a)),i([c,[...f]],a)}const d=[],p=i([l,d],a);for(const f of a)d.push(o(f));return p}case zo:{if(c)switch(c){case"BigInt":return i([c,a.toString()],a);case"Boolean":case"Number":case"String":return i([c,a.valueOf()],a)}if(t&&"toJSON"in a)return o(a.toJSON());const d=[],p=i([l,d],a);for(const f of q_(a))(e||!Rs(fi(a[f])))&&d.push([o(f),o(a[f])]);return p}case Su:return i([l,a.toISOString()],a);case Cu:{const{source:d,flags:p}=a;return i([l,{source:d,flags:p}],a)}case Nu:{const d=[],p=i([l,d],a);for(const[f,m]of a)(e||!(Rs(fi(f))||Rs(fi(m))))&&d.push([o(f),o(m)]);return p}case Eu:{const d=[],p=i([l,d],a);for(const f of a)(e||!Rs(fi(f)))&&d.push(o(f));return p}}const{message:u}=a;return i([l,{name:c,message:u}],a)};return o},Bp=(e,{json:t,lossy:n}={})=>{const r=[];return J_(!(t||n),!!t,new Map,r)(e),r},To=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Fp(Bp(e,t)):structuredClone(e):(e,t)=>Fp(Bp(e,t));function K_(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function Q_(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function G_(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||K_,r=e.options.footnoteBackLabel||Q_,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let c=-1;for(;++c<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[c]);if(!u)continue;const d=e.all(u),p=String(u.identifier).toUpperCase(),f=ni(p.toLowerCase());let m=0;const x=[],b=e.footnoteCounts.get(p);for(;b!==void 0&&++m<=b;){x.length>0&&x.push({type:"text",value:" "});let g=typeof n=="string"?n:n(c,m);typeof g=="string"&&(g={type:"text",value:g}),x.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(m>1?"-"+m:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,m),className:["data-footnote-backref"]},children:Array.isArray(g)?g:[g]})}const T=d[d.length-1];if(T&&T.type==="element"&&T.tagName==="p"){const g=T.children[T.children.length-1];g&&g.type==="text"?g.value+=" ":T.children.push({type:"text",value:" "}),T.children.push(...x)}else d.push(...x);const y={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(u,y),l.push(y)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...To(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const rx=function(e){if(e==null)return e2;if(typeof e=="function")return ra(e);if(typeof e=="object")return Array.isArray(e)?Y_(e):X_(e);if(typeof e=="string")return Z_(e);throw new Error("Expected function, string, or object as test")};function Y_(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=rx(e[n]);return ra(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function X_(e){const t=e;return ra(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function Z_(e){return ra(t);function t(n){return n&&n.type===e}}function ra(e){return t;function t(n,r,i){return!!(t2(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function e2(){return!0}function t2(e){return e!==null&&typeof e=="object"&&"type"in e}const ix=[],n2=!0,Up=!1,r2="skip";function i2(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=rx(i),a=r?-1:1;l(e,void 0,[])();function l(c,u,d){const p=c&&typeof c=="object"?c:{};if(typeof p.type=="string"){const m=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(c.type+(m?"<"+m+">":""))+")"})}return f;function f(){let m=ix,x,b,T;if((!t||o(c,u,d[d.length-1]||void 0))&&(m=s2(n(c,d)),m[0]===Up))return m;if("children"in c&&c.children){const y=c;if(y.children&&m[0]!==r2)for(b=(r?y.children.length:-1)+a,T=d.concat(y);b>-1&&b<y.children.length;){const g=y.children[b];if(x=l(g,b,T)(),x[0]===Up)return x;b=typeof x[1]=="number"?x[1]:b+a}}return m}}}function s2(e){return Array.isArray(e)?e:typeof e=="number"?[n2,e]:e==null?ix:[e]}function sx(e,t,n,r){let i,o,a;typeof t=="function"&&typeof n!="function"?(o=void 0,a=t,i=n):(o=t,a=n,i=r),i2(e,o,l,i);function l(c,u){const d=u[u.length-1],p=d?d.children.indexOf(c):void 0;return a(c,p,d)}}const ac={}.hasOwnProperty,o2={};function a2(e,t){const n=t||o2,r=new Map,i=new Map,o=new Map,a={...V_,...n.handlers},l={all:u,applyData:c2,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:a,one:c,options:n,patch:l2,wrap:d2};return sx(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:i,f=String(d.identifier).toUpperCase();p.has(f)||p.set(f,d)}}),l;function c(d,p){const f=d.type,m=l.handlers[f];if(ac.call(l.handlers,f)&&m)return m(l,d,p);if(l.options.passThrough&&l.options.passThrough.includes(f)){if("children"in d){const{children:b,...T}=d,y=To(T);return y.children=l.all(d),y}return To(d)}return(l.options.unknownHandler||u2)(l,d,p)}function u(d){const p=[];if("children"in d){const f=d.children;let m=-1;for(;++m<f.length;){const x=l.one(f[m],d);if(x){if(m&&f[m-1].type==="break"&&(!Array.isArray(x)&&x.type==="text"&&(x.value=Vp(x.value)),!Array.isArray(x)&&x.type==="element")){const b=x.children[0];b&&b.type==="text"&&(b.value=Vp(b.value))}Array.isArray(x)?p.push(...x):p.push(x)}}}return p}}function l2(e,t){e.position&&(t.position=Hk(e))}function c2(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&o&&Object.assign(n.properties,To(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function u2(e,t){const n=t.data||{},r="value"in t&&!(ac.call(n,"hProperties")||ac.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function d2(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Vp(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Wp(e,t){const n=a2(e,t),r=n.one(e,void 0),i=G_(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function p2(e,t){return e&&"run"in e?async function(n,r){const i=Wp(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Wp(n,{file:r,...e||t})}}function Hp(e){if(e)throw e}var Gs=Object.prototype.hasOwnProperty,ox=Object.prototype.toString,qp=Object.defineProperty,Jp=Object.getOwnPropertyDescriptor,Kp=function(t){return typeof Array.isArray=="function"?Array.isArray(t):ox.call(t)==="[object Array]"},Qp=function(t){if(!t||ox.call(t)!=="[object Object]")return!1;var n=Gs.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Gs.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||Gs.call(t,i)},Gp=function(t,n){qp&&n.name==="__proto__"?qp(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Yp=function(t,n){if(n==="__proto__")if(Gs.call(t,n)){if(Jp)return Jp(t,n).value}else return;return t[n]},f2=function e(){var t,n,r,i,o,a,l=arguments[0],c=1,u=arguments.length,d=!1;for(typeof l=="boolean"&&(d=l,l=arguments[1]||{},c=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});c<u;++c)if(t=arguments[c],t!=null)for(n in t)r=Yp(l,n),i=Yp(t,n),l!==i&&(d&&i&&(Qp(i)||(o=Kp(i)))?(o?(o=!1,a=r&&Kp(r)?r:[]):a=r&&Qp(r)?r:{},Gp(l,{name:n,newValue:e(d,a,i)})):typeof i<"u"&&Gp(l,{name:n,newValue:i}));return l};const Ua=Lo(f2);function lc(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function m2(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);l(null,...i);function l(c,...u){const d=e[++o];let p=-1;if(c){a(c);return}for(;++p<i.length;)(u[p]===null||u[p]===void 0)&&(u[p]=i[p]);i=u,d?h2(d,l)(...u):a(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function h2(e,t){let n;return r;function r(...a){const l=e.length>a.length;let c;l&&a.push(i);try{c=e.apply(this,a)}catch(u){const d=u;if(l&&n)throw d;return i(d)}l||(c&&c.then&&typeof c.then=="function"?c.then(o,i):c instanceof Error?i(c):o(c))}function i(a,...l){n||(n=!0,t(a,...l))}function o(a){i(null,a)}}const nn={basename:g2,dirname:x2,extname:y2,join:v2,sep:"/"};function g2(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');fs(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let a=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else a<0&&(o=!0,a=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(r=i):(l=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function x2(e){if(fs(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function y2(e){fs(e);let t=e.length,n=-1,r=0,i=-1,o=0,a;for(;t--;){const l=e.codePointAt(t);if(l===47){if(a){r=t+1;break}continue}n<0&&(a=!0,n=t+1),l===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function v2(...e){let t=-1,n;for(;++t<e.length;)fs(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":b2(n)}function b2(e){fs(e);const t=e.codePointAt(0)===47;let n=k2(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function k2(e,t){let n="",r=0,i=-1,o=0,a=-1,l,c;for(;++a<=e.length;){if(a<e.length)l=e.codePointAt(a);else{if(l===47)break;l=47}if(l===47){if(!(i===a-1||o===1))if(i!==a-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),i=a,o=0;continue}}else if(n.length>0){n="",r=0,i=a,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,o=0}else l===46&&o>-1?o++:o=-1}return n}function fs(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const w2={cwd:j2};function j2(){return"/"}function cc(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function _2(e){if(typeof e=="string")e=new URL(e);else if(!cc(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return S2(e)}function S2(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const Va=["history","path","basename","stem","extname","dirname"];class ax{constructor(t){let n;t?cc(t)?n={path:t}:typeof t=="string"||C2(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":w2.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Va.length;){const o=Va[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)Va.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?nn.basename(this.path):void 0}set basename(t){Ha(t,"basename"),Wa(t,"basename"),this.path=nn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?nn.dirname(this.path):void 0}set dirname(t){Xp(this.basename,"dirname"),this.path=nn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?nn.extname(this.path):void 0}set extname(t){if(Wa(t,"extname"),Xp(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=nn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){cc(t)&&(t=_2(t)),Ha(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?nn.basename(this.path,this.extname):void 0}set stem(t){Ha(t,"stem"),Wa(t,"stem"),this.path=nn.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new lt(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Wa(e,t){if(e&&e.includes(nn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+nn.sep+"`")}function Ha(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Xp(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function C2(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const N2=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},E2={}.hasOwnProperty;class zu extends N2{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=m2()}copy(){const t=new zu;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Ua(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Ka("data",this.frozen),this.namespace[t]=n,this):E2.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Ka("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Ms(t),r=this.parser||this.Parser;return qa("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),qa("process",this.parser||this.Parser),Ja("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,a){const l=Ms(t),c=r.parse(l);r.run(c,l,function(d,p,f){if(d||!p||!f)return u(d);const m=p,x=r.stringify(m,f);P2(x)?f.value=x:f.result=x,u(d,f)});function u(d,p){d||!p?a(d):o?o(p):n(void 0,p)}}}processSync(t){let n=!1,r;return this.freeze(),qa("processSync",this.parser||this.Parser),Ja("processSync",this.compiler||this.Compiler),this.process(t,i),ef("processSync","process",n),r;function i(o,a){n=!0,Hp(o),r=a}}run(t,n,r){Zp(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(a,l){const c=Ms(n);i.run(t,c,u);function u(d,p,f){const m=p||t;d?l(d):a?a(m):r(void 0,m,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),ef("runSync","run",r),i;function o(a,l){Hp(a),i=l,r=!0}}stringify(t,n){this.freeze();const r=Ms(n),i=this.compiler||this.Compiler;return Ja("stringify",i),Zp(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(Ka("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(u){if(typeof u=="function")c(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...p]=u;c(d,p)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(i.settings=Ua(!0,i.settings,u.settings))}function l(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const p=u[d];o(p)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function c(u,d){let p=-1,f=-1;for(;++p<r.length;)if(r[p][0]===u){f=p;break}if(f===-1)r.push([u,...d]);else if(d.length>0){let[m,...x]=d;const b=r[f][1];lc(b)&&lc(m)&&(m=Ua(!0,b,m)),r[f]=[u,m,...x]}}}}const z2=new zu().freeze();function qa(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Ja(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Ka(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Zp(e){if(!lc(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function ef(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Ms(e){return T2(e)?e:new ax(e)}function T2(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function P2(e){return typeof e=="string"||L2(e)}function L2(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const A2="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",tf=[],nf={allowDangerousHtml:!0},R2=/^(https?|ircs?|mailto|xmpp)$/i,M2=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function lx(e){const t=O2(e),n=I2(e);return $2(t.runSync(t.parse(n),n),e)}function O2(e){const t=e.rehypePlugins||tf,n=e.remarkPlugins||tf,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...nf}:nf;return z2().use(x_).use(n).use(p2,r).use(t)}function I2(e){const t=e.children||"",n=new ax;return typeof t=="string"&&(n.value=t),n}function $2(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,a=t.skipHtml,l=t.unwrapDisallowed,c=t.urlTransform||D2;for(const d of M2)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+A2+d.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),sx(e,u),Gk(e,{Fragment:s.Fragment,components:i,ignoreInvalidStyle:!0,jsx:s.jsx,jsxs:s.jsxs,passKeys:!0,passNode:!0});function u(d,p,f){if(d.type==="raw"&&f&&typeof p=="number")return a?f.children.splice(p,1):f.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let m;for(m in Da)if(Object.hasOwn(Da,m)&&Object.hasOwn(d.properties,m)){const x=d.properties[m],b=Da[m];(b===null||b.includes(d.tagName))&&(d.properties[m]=c(String(x||""),m,d))}}if(d.type==="element"){let m=n?!n.includes(d.tagName):o?o.includes(d.tagName):!1;if(!m&&r&&typeof p=="number"&&(m=!r(d,p,f)),m&&f&&typeof p=="number")return l&&d.children?f.children.splice(p,1,...d.children):f.children.splice(p,1),p}}}function D2(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||R2.test(e.slice(0,t))?e:""}function F2({value:e,onChange:t,placeholder:n="Write your content here...",minHeight:r=200}){const[i,o]=w.useState(!1),[a,l]=w.useState(r),c=w.useRef(null),u=w.useRef(null);w.useEffect(()=>{if(e){const f=e.split(`
`).length,m=Math.max(r,Math.min(f*20+40,500));l(m)}},[e,r]),w.useEffect(()=>{i&&u.current&&u.current.focus()},[i]);function d(f){u.current=f,f.focus()}function p(f){c.current&&!c.current.contains(f.target)&&o(!1)}return w.useEffect(()=>{if(i)return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[i]),s.jsxs("div",{ref:c,className:"markdown-editor",children:[s.jsx("style",{children:`
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
      `}),i?s.jsx("div",{className:"monaco-wrapper",children:s.jsx(Dt,{height:"100%",language:"markdown",theme:"vs-dark",value:e,onChange:f=>t(f||""),onMount:d,options:{minimap:{enabled:!1},fontSize:14,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"off",scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",padding:{top:12,bottom:12},lineDecorationsWidth:8,folding:!1,glyphMargin:!1,renderLineHighlight:"none",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,scrollbar:{vertical:"auto",horizontal:"hidden"}}})}):s.jsxs("div",{className:"markdown-preview",onClick:()=>o(!0),children:[s.jsxs("span",{className:"edit-hint",children:[s.jsx(z0,{size:12}),"Click to edit"]}),e?s.jsx("div",{className:"markdown-content",children:s.jsx(lx,{children:e})}):s.jsx("div",{className:"markdown-placeholder",children:n})]})]})}function B2(e){return/^[a-zA-Z0-9_]+$/.test(e)}function U2({agent:e}){const{project:t,updateAgent:n,mcpServers:r,builtinTools:i,setActiveTab:o,setRunAgentId:a}=at(),[l,c]=w.useState(new Set(["basic","model","tools","subagents"])),[u,d]=w.useState(!1),[p,f]=w.useState(!1),[m,x]=w.useState(!1),[b,T]=w.useState(""),[y,g]=w.useState(null);if(!t)return null;function h(L){n(e.id,L)}function P(L){if(L===""){g(null),h({name:L});return}B2(L)?g(null):g("Name can only contain letters, numbers, and underscores"),h({name:L})}function C(L){const I=new Set(l);I.has(L)?I.delete(L):I.add(L),c(I)}const _=e.type==="LlmAgent",N=e;function k(L){_&&h({tools:[...N.tools,L]})}function R(L){_&&h({tools:N.tools.filter((I,A)=>A!==L)})}function S(L,I){if(!_)return;const A=[...N.tools];A[L]=I,h({tools:A})}function v(L){"sub_agents"in e&&h({sub_agents:[...e.sub_agents,L]})}function z(L){"sub_agents"in e&&h({sub_agents:e.sub_agents.filter(I=>I!==L)})}const F=t.agents.filter(L=>L.id!==e.id);async function U(){if(!(!t||!_)){d(!0);try{const L=N.instruction||"",I=L?`Current instruction to improve:

${L}

Please improve and expand this instruction while preserving its core intent.`:void 0,j=t.agents.some(Q=>Q.id===e.id)?void 0:e,J=await Ks(t.id,e.id,I,j);J.success&&J.prompt?h({instruction:J.prompt}):alert("Failed to generate prompt: "+(J.error||"Unknown error"))}catch(L){alert("Error generating prompt: "+L.message)}finally{d(!1)}}}async function D(){if(!(!t||!_||!b.trim())){d(!0);try{const I=`Current instruction:

${N.instruction||""}

---

Requested changes:
${b}

Please apply the requested changes to the instruction above. Output only the updated instruction, nothing else.`,j=t.agents.some(Q=>Q.id===e.id)?void 0:e,J=await Ks(t.id,e.id,I,j);J.success&&J.prompt?(h({instruction:J.prompt}),x(!1),T("")):alert("Failed to apply changes: "+(J.error||"Unknown error"))}catch(L){alert("Error applying changes: "+L.message)}finally{d(!1)}}}async function ne(){if(!t||!_)return;const L=N.instruction;if(!L){alert("Please write an instruction first");return}f(!0);try{const I=`Write a 5-10 word description of what this agent does.

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
${L.slice(0,500)}

Your response (5-10 words only):`,A=await Ks(t.id,e.id,I);if(A.success&&A.prompt){let j=A.prompt.trim();j=j.replace(/^["']|["']$/g,"").trim();const J=j.split(/[.!?\n]/)[0].trim(),Q=J.length>80?J.slice(0,77)+"...":J;h({description:Q})}else alert("Failed to generate description: "+(A.error||"Unknown error"))}catch(I){alert("Error generating description: "+I.message)}finally{f(!1)}}return s.jsxs("div",{className:"agent-editor",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"editor-header",children:[s.jsx(lr,{size:24,style:{color:"var(--accent-primary)"}}),s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[s.jsx("input",{type:"text",value:e.name,onChange:L=>P(L.target.value),placeholder:"Agent name",style:{borderColor:y?"var(--error)":void 0}}),y&&s.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:y})]}),s.jsx("span",{className:"badge badge-info",children:e.type}),s.jsxs("button",{className:"btn btn-primary btn-sm run-agent-btn",onClick:()=>{a(e.id),o("run")},title:"Test this agent",children:[s.jsx(Jn,{size:14}),"Run"]})]}),s.jsxs("div",{className:"editor-content",children:[s.jsxs(mi,{id:"basic",title:"Basic Info",icon:s.jsx(lr,{size:16}),expanded:l.has("basic"),onToggle:()=>C("basic"),children:[s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group full-width",children:[s.jsxs("div",{className:"label-with-action",children:[s.jsx("label",{children:"Description"}),_&&N.instruction&&s.jsx("button",{className:"btn btn-secondary btn-sm generate-btn",onClick:ne,disabled:p,title:"Generate description from instruction",children:p?s.jsxs(s.Fragment,{children:[s.jsx(rn,{size:14,className:"spin"}),"Summarizing..."]}):"Summarize"})]}),s.jsx("input",{type:"text",value:e.description,onChange:L=>h({description:L.target.value}),placeholder:"e.g., Reviews code for bugs and suggests fixes"})]})}),_&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group full-width",children:[s.jsxs("div",{className:"label-with-action",children:[s.jsx("label",{children:"Instruction"}),s.jsxs("div",{className:"action-buttons",children:[s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>x(!m),disabled:u||!N.instruction,title:"Request specific changes to the instruction",children:"Request Changes"}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:U,disabled:u,title:"Uses AI to improve and expand the current instruction",children:u?s.jsxs(s.Fragment,{children:[s.jsx(rn,{size:14,className:"spin"}),"Working..."]}):"Auto-Improve"})]})]}),m&&s.jsxs("div",{className:"request-changes-box",children:[s.jsx("input",{type:"text",value:b,onChange:L=>T(L.target.value),placeholder:"Describe what changes you want...",onKeyDown:L=>{L.key==="Enter"&&b.trim()?D():L.key==="Escape"&&(x(!1),T(""))},autoFocus:!0}),s.jsx("button",{className:"btn btn-primary btn-sm",onClick:D,disabled:u||!b.trim(),children:"Apply"})]}),s.jsx(F2,{value:N.instruction,onChange:L=>h({instruction:L}),placeholder:"Write your agent's instruction here... (Markdown supported)",minHeight:200})]})}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Output Key"}),s.jsxs("select",{value:N.output_key||"",onChange:L=>h({output_key:L.target.value||void 0}),children:[s.jsx("option",{value:"",children:"None"}),t.app.state_keys.map(L=>s.jsx("option",{value:L.name,children:L.name},L.name))]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Include Contents"}),s.jsxs("select",{value:N.include_contents,onChange:L=>h({include_contents:L.target.value}),children:[s.jsx("option",{value:"default",children:"Default"}),s.jsx("option",{value:"none",children:"None"})]})]})]}),s.jsxs("div",{className:"form-row",style:{gap:24},children:[s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[s.jsxs("span",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:N.disallow_transfer_to_parent,onChange:L=>h({disallow_transfer_to_parent:L.target.checked})}),s.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to parent"]}),s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[s.jsxs("span",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:N.disallow_transfer_to_peers,onChange:L=>h({disallow_transfer_to_peers:L.target.checked})}),s.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to peers"]})]})]}),e.type==="LoopAgent"&&s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Max Iterations"}),s.jsx("input",{type:"number",value:e.max_iterations||"",onChange:L=>h({max_iterations:parseInt(L.target.value)||void 0}),placeholder:"No limit"})]})})]}),_&&s.jsx(mi,{id:"model",title:"Model",icon:s.jsx(uu,{size:16}),expanded:l.has("model"),onToggle:()=>C("model"),children:s.jsx(W2,{agent:N,appModels:t.app.models||[],defaultModelId:t.app.default_model_id,projectId:t.id,onUpdate:L=>h({model:L})})}),_&&s.jsx(mi,{id:"tools",title:`Tools (${N.tools.length})`,icon:s.jsx(Yt,{size:16}),expanded:l.has("tools"),onToggle:()=>C("tools"),children:s.jsx(V2,{tools:N.tools,onAdd:k,onRemove:R,onUpdate:S,builtinTools:i,mcpServers:r,projectMcpServers:t.mcp_servers,customTools:t.custom_tools,agents:F,skillsets:t.skillsets||[]})}),"sub_agents"in e&&s.jsx(mi,{id:"subagents",title:`Sub-Agents (${e.sub_agents.length})`,icon:s.jsx(mg,{size:16}),expanded:l.has("subagents"),onToggle:()=>C("subagents"),children:s.jsxs("div",{className:"sub-agent-list",children:[e.sub_agents.map(L=>{const I=t.agents.find(A=>A.id===L);return I?s.jsxs("div",{className:"sub-agent-chip",children:[I.name,s.jsx("button",{onClick:()=>z(L),children:s.jsx(De,{size:12})})]},L):null}),s.jsxs("select",{value:"",onChange:L=>{L.target.value&&v(L.target.value)},style:{width:150,padding:"6px 10px",fontSize:13},children:[s.jsx("option",{value:"",children:"Add agent..."}),F.filter(L=>!e.sub_agents.includes(L.id)).map(L=>s.jsx("option",{value:L.id,children:L.name},L.id))]})]})}),s.jsx(mi,{id:"callbacks",title:"Callbacks",icon:s.jsx(un,{size:16}),expanded:l.has("callbacks"),onToggle:()=>C("callbacks"),children:s.jsx(H2,{agent:e,onUpdate:h,customCallbacks:t.custom_callbacks||[],isLlmAgent:_})})]})]})}function mi({id:e,title:t,icon:n,expanded:r,onToggle:i,children:o}){return s.jsxs("div",{className:"section",children:[s.jsxs("div",{className:"section-header",onClick:i,children:[r?s.jsx(At,{size:16}):s.jsx(Rt,{size:16}),s.jsxs("h4",{children:[n," ",t]})]}),r&&s.jsx("div",{className:"section-content",children:o})]})}function V2({tools:e,onAdd:t,onRemove:n,onUpdate:r,builtinTools:i,mcpServers:o,projectMcpServers:a,customTools:l,agents:c,skillsets:u}){const[d,p]=w.useState(!1),[f,m]=w.useState({}),[x,b]=w.useState(""),T=Nt.useRef(null),y=Nt.useRef(null),[g,h]=w.useState(null),[P,C]=w.useState(new Set),_=(M,te)=>{if(!x.trim())return!0;const V=x.toLowerCase();return M.toLowerCase().includes(V)||((te==null?void 0:te.toLowerCase().includes(V))??!1)},N=i.filter(M=>_(M.name,M.description)),k=o.filter(M=>_(M.name,M.description)),R=a.filter(M=>_(M.name,M.description)),S=l.filter(M=>_(M.name,M.description)),v=c.filter(M=>_(M.name,M.description)),z=u.filter(M=>_(M.name,M.description));function F(){if(T.current){const M=T.current.getBoundingClientRect(),te=window.innerHeight,V=350,se=te-M.bottom-16,pe=M.top-16;if(se>=200||se>=pe){const O=Math.min(V,se);m({top:M.bottom+4,left:M.left,maxHeight:O})}else{const O=Math.min(V,pe);m({top:M.top-O-4,left:M.left,maxHeight:O})}}p(!0),b(""),setTimeout(()=>{var M;return(M=y.current)==null?void 0:M.focus()},50)}function U(){p(!1),b("")}function D(M){t({type:"builtin",name:M}),U()}async function ne(M){U();const te=M.tool_filter||[];if(h({server:M,enabledTools:new Set(te),availableTools:te.map(V=>({name:V,description:""})),isLoading:te.length===0,error:void 0}),te.length===0)try{const{testMcpServer:V}=await H0(async()=>{const{testMcpServer:pe}=await Promise.resolve().then(()=>g0);return{testMcpServer:pe}},void 0),se=await V({connection_type:M.connection_type,command:M.command,args:M.args,env:M.env,url:M.url,headers:M.headers,timeout:M.timeout||30});se.success?h(pe=>pe?{...pe,availableTools:se.tools,enabledTools:new Set(se.tools.map(O=>O.name)),isLoading:!1}:null):h(pe=>pe?{...pe,isLoading:!1,error:se.error||"Failed to connect to MCP server"}:null)}catch(V){h(se=>se?{...se,isLoading:!1,error:V.message}:null)}}function L(M){if(!g)return;const te=new Set(g.enabledTools);te.has(M)?te.delete(M):te.add(M),h({...g,enabledTools:te})}function I(){if(!g)return;const M=Array.from(g.enabledTools);t({type:"mcp",server:{...g.server,tool_filter:M}}),h(null)}function A(M){const te=new Set(P);te.has(M)?te.delete(M):te.add(M),C(te)}function j(M,te){const V=e[M];if(V.type!=="mcp"||!V.server)return;const se=V.server.tool_filter||[];let pe;se.includes(te)?pe=se.filter(O=>O!==te):pe=[...se,te],r(M,{...V,server:{...V.server,tool_filter:pe}})}function J(M){t({type:"function",name:M.name,module_path:M.module_path}),U()}function Q(M){const te=c.find(V=>V.id===M);t({type:"agent",agent_id:M,name:te==null?void 0:te.name}),U()}function E(M){const te=u.find(V=>V.id===M);t({type:"skillset",skillset_id:M,name:te==null?void 0:te.name}),U()}function xe(M){return o.find(te=>te.name===M)}return s.jsxs("div",{children:[s.jsx("style",{children:`
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
      `}),s.jsx("div",{className:"tool-list",children:e.map((M,te)=>{var V;return M.type==="mcp"&&M.server?s.jsxs("div",{className:"mcp-tool-item",children:[s.jsxs("div",{className:"mcp-tool-header",onClick:()=>A(te),children:[P.has(te)?s.jsx(At,{size:14}):s.jsx(Rt,{size:14}),s.jsx(Yt,{size:14,style:{color:"var(--accent-primary)"}}),s.jsxs("div",{className:"mcp-tool-info",children:[s.jsx("div",{className:"mcp-tool-name",children:M.server.name}),s.jsx("div",{className:"mcp-tool-count",children:M.server.tool_filter===null||M.server.tool_filter===void 0?"all tools":`${M.server.tool_filter.length} tools enabled`})]}),s.jsx("button",{className:"delete-btn",onClick:se=>{se.stopPropagation(),n(te)},children:s.jsx(De,{size:14})})]}),P.has(te)&&s.jsx("div",{className:"mcp-tool-body",children:s.jsx("div",{className:"mcp-tool-list",children:(()=>{const se=xe(M.server.name),pe=(se==null?void 0:se.tool_filter)||M.server.tool_filter||[],O=new Set(M.server.tool_filter||[]);return pe.map(H=>s.jsxs("label",{className:`mcp-tool-chip ${O.has(H)?"enabled":"disabled"}`,onClick:()=>j(te,H),children:[s.jsx("input",{type:"checkbox",checked:O.has(H),onChange:()=>{},style:{display:"none"}}),H]},H))})()})})]},te):M.type==="skillset"?s.jsxs("div",{className:"tool-item",children:[s.jsx(yn,{size:14,style:{color:"var(--accent)"}}),s.jsxs("div",{className:"tool-item-info",children:[s.jsx("div",{className:"tool-item-name",children:M.name||((V=u.find(se=>se.id===M.skillset_id))==null?void 0:V.name)||"SkillSet"}),s.jsx("div",{className:"tool-item-type",children:"skillset"})]}),s.jsx("button",{className:"delete-btn",onClick:()=>n(te),children:s.jsx(De,{size:14})})]},te):s.jsxs("div",{className:"tool-item",children:[s.jsx(Yt,{size:14,style:{color:"var(--accent-primary)"}}),s.jsxs("div",{className:"tool-item-info",children:[s.jsx("div",{className:"tool-item-name",children:M.name||M.agent_id}),s.jsx("div",{className:"tool-item-type",children:M.type})]}),s.jsx("button",{className:"delete-btn",onClick:()=>n(te),children:s.jsx(De,{size:14})})]},te)})}),s.jsxs("div",{className:"add-tool-dropdown",style:{marginTop:12},children:[s.jsxs("button",{ref:T,className:"btn btn-secondary btn-sm",onClick:()=>d?U():F(),children:[s.jsx(Ge,{size:14}),"Add Tool"]}),d&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"dropdown-backdrop",onClick:U}),s.jsxs("div",{className:"dropdown-content dropdown-fixed",style:f,children:[s.jsx("div",{className:"dropdown-search",children:s.jsx("input",{ref:y,type:"text",placeholder:"Search tools...",value:x,onChange:M=>b(M.target.value),onKeyDown:M=>M.key==="Escape"&&U()})}),N.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsx("h5",{children:"Built-in Tools"}),N.map(M=>s.jsxs("button",{className:"dropdown-item",onClick:()=>D(M.name),children:[s.jsx("div",{className:"dropdown-item-name",children:M.name}),s.jsx("div",{className:"dropdown-item-desc",children:M.description})]},M.name))]}),k.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsxs("h5",{children:["Known MCP Servers (",k.length,")"]}),k.map(M=>s.jsxs("button",{className:"dropdown-item",onClick:()=>ne(M),children:[s.jsxs("div",{className:"dropdown-item-name",children:[M.name,s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:M.tool_filter===null||M.tool_filter===void 0?"all tools":`${M.tool_filter.length} tools`})]}),s.jsx("div",{className:"dropdown-item-desc",children:M.description})]},`known-${M.name}`))]}),R.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsxs("h5",{children:["Project MCP Servers (",R.length,")"]}),R.map(M=>s.jsxs("button",{className:"dropdown-item",onClick:()=>ne(M),children:[s.jsxs("div",{className:"dropdown-item-name",children:[M.name,s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:M.tool_filter===null||M.tool_filter===void 0?"all tools":`${M.tool_filter.length} tools`})]}),s.jsx("div",{className:"dropdown-item-desc",children:M.description||"Custom MCP server"})]},`project-${M.id||M.name}`))]}),S.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsx("h5",{children:"Custom Tools"}),S.map(M=>s.jsxs("button",{className:"dropdown-item",onClick:()=>J(M),children:[s.jsx("div",{className:"dropdown-item-name",children:M.name}),s.jsx("div",{className:"dropdown-item-desc",children:M.description})]},M.id))]}),v.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsx("h5",{children:"Agents as Tools"}),v.map(M=>s.jsxs("button",{className:"dropdown-item",onClick:()=>Q(M.id),children:[s.jsx("div",{className:"dropdown-item-name",children:M.name}),s.jsx("div",{className:"dropdown-item-desc",children:M.type})]},M.id))]}),z.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsxs("h5",{children:["SkillSets (",z.length,")"]}),z.map(M=>s.jsxs("button",{className:"dropdown-item",onClick:()=>E(M.id),children:[s.jsxs("div",{className:"dropdown-item-name",children:[M.name,s.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:[M.entry_count||0," entries"]})]}),s.jsx("div",{className:"dropdown-item-desc",children:M.description||"Vector knowledge base"})]},M.id))]}),x.trim()&&N.length===0&&k.length===0&&R.length===0&&S.length===0&&v.length===0&&z.length===0&&s.jsxs("div",{className:"dropdown-section",style:{textAlign:"center",padding:"20px",color:"var(--text-muted)"},children:['No tools matching "',x,'"']})]})]})]}),g&&s.jsx("div",{className:"mcp-config-dialog",children:s.jsxs("div",{className:"mcp-config-content",children:[s.jsxs("h3",{children:["Configure ",g.server.name]}),s.jsx("p",{children:g.server.description}),g.isLoading?s.jsxs("div",{className:"mcp-loading",children:[s.jsx("div",{className:"spinner"}),s.jsx("p",{children:"Connecting to MCP server and discovering tools..."})]}):g.error?s.jsxs("div",{className:"mcp-error",children:[s.jsxs("p",{children:["⚠️ Failed to discover tools: ",g.error]}),s.jsx("p",{className:"hint",children:"You can still add the server, but you won't be able to select specific tools."})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"mcp-select-actions",children:[s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>h({...g,enabledTools:new Set(g.availableTools.map(M=>M.name))}),children:["Select All (",g.availableTools.length,")"]}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>h({...g,enabledTools:new Set}),children:"Select None"})]}),s.jsx("div",{className:"mcp-tools-grid",children:g.availableTools.map(M=>s.jsxs("div",{className:"mcp-tool-row",title:M.description||M.name,style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[s.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[s.jsx("input",{type:"checkbox",checked:g.enabledTools.has(M.name),onChange:()=>L(M.name)}),s.jsx("span",{className:"toggle-slider"})]}),s.jsx("span",{style:{fontSize:13,opacity:g.enabledTools.has(M.name)?1:.5,cursor:"pointer"},onClick:()=>L(M.name),children:M.name})]},M.name))})]}),s.jsxs("div",{className:"dialog-actions",children:[s.jsx("button",{className:"btn btn-secondary",onClick:()=>h(null),children:"Cancel"}),s.jsxs("button",{className:"btn btn-primary",onClick:I,disabled:g.enabledTools.size===0,children:["Add ",g.enabledTools.size," Tools"]})]})]})})]})}function W2({agent:e,appModels:t,defaultModelId:n,projectId:r,onUpdate:i}){var f,m;const o=(f=e.model)==null?void 0:f._appModelId,a=e.model!==null&&e.model!==void 0&&!o,c=o||(()=>{if(!e.model)return n;const x=t.find(b=>{var T,y,g;return b.provider===((T=e.model)==null?void 0:T.provider)&&b.model_name===((y=e.model)==null?void 0:y.model_name)&&b.api_base===((g=e.model)==null?void 0:g.api_base)});return x==null?void 0:x.id})()||n||((m=t[0])==null?void 0:m.id);Nt.useEffect(()=>{var x,b,T,y,g;if(o){const h=t.find(P=>P.id===o);h&&(((x=e.model)==null?void 0:x.provider)!==h.provider||((b=e.model)==null?void 0:b.model_name)!==h.model_name||((T=e.model)==null?void 0:T.api_base)!==h.api_base||((y=e.model)==null?void 0:y.temperature)!==h.temperature||((g=e.model)==null?void 0:g.max_output_tokens)!==h.max_output_tokens)&&i({provider:h.provider,model_name:h.model_name,api_base:h.api_base,temperature:h.temperature,max_output_tokens:h.max_output_tokens,top_p:h.top_p,top_k:h.top_k,fallbacks:[],_appModelId:o})}},[o,t,e.model,i]);function u(x){const b=t.find(T=>T.id===x);b&&i({provider:b.provider,model_name:b.model_name,api_base:b.api_base,temperature:b.temperature,max_output_tokens:b.max_output_tokens,top_p:b.top_p,top_k:b.top_k,fallbacks:[],_appModelId:x})}function d(){var x;if(a){const b=n||((x=t[0])==null?void 0:x.id);b&&u(b)}else{const b=e.model;if(b){const{_appModelId:T,...y}=b;i(y)}else i({provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]})}}function p(x){const{_appModelId:b,...T}=e.model||{};i({...T,...x})}return t.find(x=>x.id===c),t.find(x=>x.id===n),s.jsxs("div",{className:"model-selector",children:[s.jsx("style",{children:`
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
      `}),t.length>0&&s.jsxs("div",{className:"model-choice",children:[s.jsxs("div",{className:`model-option ${a?"":"selected"}`,onClick:()=>!a||d(),children:[s.jsx("div",{className:"model-option-label",children:"Use App Model"}),s.jsx("div",{className:"model-option-desc",children:"Select from configured models"})]}),s.jsxs("div",{className:`model-option ${a?"selected":""}`,onClick:()=>a||d(),children:[s.jsx("div",{className:"model-option-label",children:"Custom"}),s.jsx("div",{className:"model-option-desc",children:"Configure model manually"})]})]}),!a&&t.length>0?s.jsx("div",{className:"app-model-select",children:t.map(x=>s.jsx("div",{className:`app-model-item ${c===x.id?"selected":""}`,onClick:()=>u(x.id),children:s.jsxs("div",{className:"app-model-item-info",children:[s.jsxs("div",{className:"app-model-item-name",children:[x.name,x.id===n&&s.jsxs("span",{className:"default-badge",children:[s.jsx(fg,{size:10,fill:"currentColor"}),"Default"]})]}),s.jsxs("div",{className:"app-model-item-details",children:[x.provider," / ",x.model_name,x.api_base&&` • ${x.api_base}`]})]})},x.id))}):t.length===0?s.jsx("div",{className:"no-models-message",children:"No models configured in App Config. Configure models there first, or use custom settings below."}):null,(a||t.length===0)&&s.jsx("div",{className:"custom-model-form",children:s.jsx(xg,{projectId:r,values:e.model||{},onChange:p})})]})}function H2({agent:e,onUpdate:t,customCallbacks:n,isLlmAgent:r}){const i=[{key:"before_agent_callbacks",label:"Before Agent"},{key:"after_agent_callbacks",label:"After Agent"}],o=[{key:"before_model_callbacks",label:"Before Model"},{key:"after_model_callbacks",label:"After Model"},{key:"before_tool_callbacks",label:"Before Tool"},{key:"after_tool_callbacks",label:"After Tool"}],a=r?[...i,...o]:i;function l(u,d){const p=e[u]||[],f=n.find(m=>m.id===d);f&&t({[u]:[...p,{module_path:f.module_path}]})}function c(u,d){const p=e[u]||[];t({[u]:p.filter((f,m)=>m!==d)})}return s.jsx("div",{className:"callbacks-editor",children:a.map(({key:u,label:d})=>{const p=e[u]||[],f=n;return s.jsxs("div",{className:"callback-type-group",style:{marginBottom:"20px"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[s.jsx("label",{style:{fontWeight:500,fontSize:"13px"},children:d}),f.length>0&&s.jsxs("select",{value:"",onChange:m=>{m.target.value&&(l(u,m.target.value),m.target.value="")},style:{padding:"4px 8px",fontSize:"12px",width:"200px"},children:[s.jsx("option",{value:"",children:"Add callback..."}),f.filter(m=>{const x=m.module_path;return!p.some(b=>b.module_path===x)}).map(m=>s.jsx("option",{value:m.id,children:m.name},m.id))]})]}),p.length===0?s.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",fontStyle:"italic",padding:"8px"},children:"No callbacks"}):s.jsx("div",{className:"callback-list",children:p.map((m,x)=>{const b=n.find(T=>T.module_path===m.module_path);return s.jsxs("div",{className:"callback-chip",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 10px",background:"var(--bg-secondary)",borderRadius:"4px",marginBottom:"4px"},children:[s.jsx("span",{style:{fontSize:"12px"},children:(b==null?void 0:b.name)||m.module_path}),s.jsx("button",{onClick:()=>c(u,x),style:{background:"none",border:"none",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},title:"Remove callback",children:s.jsx(De,{size:12})})]},x)})})]},u)})})}const Qa=[{type:"LlmAgent",label:"LLM Agent",icon:lr,color:"#00f5d4",description:"AI-powered agent with model reasoning"},{type:"SequentialAgent",label:"Sequential",icon:R0,color:"#7b2cbf",description:"Run sub-agents in order"},{type:"LoopAgent",label:"Loop",icon:P0,color:"#ffd93d",description:"Repeat sub-agents until exit"},{type:"ParallelAgent",label:"Parallel",icon:Gl,color:"#ff6b6b",description:"Run sub-agents simultaneously"}];function q2(){return`agent_${Date.now().toString(36)}`}function J2(e){return{provider:e.provider,model_name:e.model_name,api_base:e.api_base,temperature:e.temperature,max_output_tokens:e.max_output_tokens,top_p:e.top_p,top_k:e.top_k,fallbacks:[]}}function K2(e,t){const r={id:q2(),name:`New ${e}`,description:""},i=t?J2(t):{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]};switch(e){case"LlmAgent":return{...r,type:"LlmAgent",model:i,instruction:"",include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:[],sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};case"SequentialAgent":return{...r,type:"SequentialAgent",sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[]};case"LoopAgent":return{...r,type:"LoopAgent",sub_agents:[],max_iterations:10,before_agent_callbacks:[],after_agent_callbacks:[]};case"ParallelAgent":return{...r,type:"ParallelAgent",sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[]};default:throw new Error(`Unknown agent type: ${e}`)}}function Q2({onSelectAgent:e}){const{project:t,addAgent:n,removeAgent:r,updateAgent:i,selectedAgentId:o,setSelectedAgentId:a,mcpServers:l}=at(),[c,u]=w.useState(new Set),[d,p]=w.useState(!1),[f,m]=w.useState(""),[x,b]=w.useState(new Map),[T,y]=w.useState(380),[g,h]=w.useState(!1),P=w.useRef(null),[C,_]=w.useState(null),N=w.useRef(null),[k,R]=w.useState(null),[S,v]=w.useState(null),z=w.useRef(null),F=w.useRef(null),U=w.useCallback(q=>{q.preventDefault(),h(!0)},[]);if(w.useEffect(()=>{const q=ie=>{if(!g)return;const ge=Math.min(Math.max(200,ie.clientX),600);y(ge)},re=()=>{h(!1)};return g&&(document.addEventListener("mousemove",q),document.addEventListener("mouseup",re),document.body.style.cursor="col-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",q),document.removeEventListener("mouseup",re),document.body.style.cursor="",document.body.style.userSelect=""}},[g]),w.useEffect(()=>{if(t){const q=t.agents.filter(re=>"sub_agents"in re&&re.sub_agents.length>0).map(re=>re.id);u(new Set(q))}},[t==null?void 0:t.id,t==null?void 0:t.agents.length]),!t)return null;function D(){if(!f.trim()||!t)return;const q=`generating_${Date.now()}`,re=f;b(ie=>new Map(ie).set(q,re)),p(!1),m(""),Yh(t.id,re).then(ie=>{var ge,ve,B,Y;if(ie.success&&ie.config){const oe=ie.config,me=[];if((ge=oe.tools)!=null&&ge.builtin)for(const G of oe.tools.builtin)me.push({type:"builtin",name:G});if((ve=oe.tools)!=null&&ve.mcp)for(const G of oe.tools.mcp){const fe=l.find(le=>le.name===G.server);fe&&me.push({type:"mcp",server:{...fe,tool_filter:G.tools}})}if((B=oe.tools)!=null&&B.custom)for(const G of oe.tools.custom){const fe=t.custom_tools.find(le=>le.name===G);fe&&me.push({type:"function",name:G,module_path:fe.module_path})}if((Y=oe.tools)!=null&&Y.agents)for(const G of oe.tools.agents){const fe=t.agents.find(le=>le.id===G);fe&&me.push({type:"agent",agent_id:G,name:fe.name})}const kt=t.app.models||[],nt=kt.find(G=>G.id===t.app.default_model_id)||kt[0],W={id:`agent_${Date.now().toString(36)}`,type:"LlmAgent",name:oe.name||"new_agent",description:oe.description||"",instruction:oe.instruction||"",model:nt?{provider:nt.provider,model_name:nt.model_name,api_base:nt.api_base,temperature:nt.temperature,max_output_tokens:nt.max_output_tokens,top_p:nt.top_p,top_k:nt.top_k,fallbacks:[]}:{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]},include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:me,sub_agents:oe.sub_agents||[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};n(W),a(W.id),e==null||e(W.id)}else console.error("Failed to generate agent:",ie.error)}).catch(ie=>{console.error("Error generating agent:",ie)}).finally(()=>{b(ie=>{const ge=new Map(ie);return ge.delete(q),ge})})}const ne=t.agents.find(q=>q.id===o);function L(q){a(q),e==null||e(q)}function I(q){if(!t)return;const re=t.app.models||[],ie=re.find(ve=>ve.id===t.app.default_model_id)||re[0],ge=K2(q,ie);n(ge),L(ge.id)}function A(q,re){re.stopPropagation(),confirm("Delete this agent?")&&(r(q),o===q&&(e==null||e(null)))}function j(q){const re=new Set(c);re.has(q)?re.delete(q):re.add(q),u(re)}function J(q){if(!z.current||!N.current)return;const re=z.current.getBoundingClientRect(),ie=q.clientY-re.top,ge=60,ve=8;if(ie<ge){const B=Math.max(1,ve*(1-ie/ge));z.current.scrollTop-=B}else if(ie>re.height-ge){const B=Math.max(1,ve*(1-(re.height-ie)/ge));z.current.scrollTop+=B}}function Q(q,re){q.dataTransfer.setData("text/plain",re),q.dataTransfer.effectAllowed="move",N.current=re,requestAnimationFrame(()=>_(re))}function E(){N.current=null,_(null),R(null),v(null),F.current&&(cancelAnimationFrame(F.current),F.current=null)}function xe(q,re,ie){if(!t||(q.preventDefault(),q.stopPropagation(),!N.current))return;const ve=t.agents.find(B=>B.id===re);!ve||!("sub_agents"in ve)||(q.dataTransfer.dropEffect="move",v({parentId:re,index:ie}),R(null))}function M(q,re,ie){if(!t)return;q.preventDefault(),q.stopPropagation();const ge=q.dataTransfer.getData("text/plain");if(!ge)return;const ve=t.agents.find(Y=>Y.id===re);if(!ve||!("sub_agents"in ve))return;t.agents.forEach(Y=>{"sub_agents"in Y&&Y.sub_agents.includes(ge)&&i(Y.id,{sub_agents:Y.sub_agents.filter(oe=>oe!==ge)})});const B=[...ve.sub_agents.filter(Y=>Y!==ge)];B.splice(ie,0,ge),i(re,{sub_agents:B}),u(Y=>new Set([...Y,re])),_(null),v(null)}function te(q,re,ie){if(!t)return;const ge=N.current;if(q.preventDefault(),q.stopPropagation(),ge===re)return;const ve=t.agents.find(B=>B.id===ge);ve&&"sub_agents"in ve&&pe(ve,re)||(q.dataTransfer.dropEffect="move",R({agentId:re,type:ie}),v(null))}function V(q){const re=q.relatedTarget;(!re||!q.currentTarget.contains(re))&&R(null)}function se(q,re,ie){if(!t)return;q.preventDefault(),q.stopPropagation();const ge=q.dataTransfer.getData("text/plain");if(!ge||ge===re)return;const ve=t.agents.find(Y=>Y.id===re),B=t.agents.find(Y=>Y.id===ge);if(!(!ve||!B)){if(ie==="sub_agent")"sub_agents"in ve&&(t.agents.forEach(Y=>{"sub_agents"in Y&&Y.sub_agents.includes(ge)&&i(Y.id,{sub_agents:Y.sub_agents.filter(oe=>oe!==ge)})}),ve.sub_agents.includes(ge)||(i(re,{sub_agents:[...ve.sub_agents,ge]}),u(Y=>new Set([...Y,re]))));else if(ie==="tool"&&"tools"in ve){const Y=ve;Y.tools.some(me=>me.type==="agent"&&me.agent_id===ge)||i(re,{tools:[...Y.tools,{type:"agent",agent_id:ge,name:B.name}]})}_(null),R(null)}}function pe(q,re){if(!t||!("sub_agents"in q))return!1;if(q.sub_agents.includes(re))return!0;for(const ie of q.sub_agents){const ge=t.agents.find(ve=>ve.id===ie);if(ge&&pe(ge,re))return!0}return!1}function O(q){const re=Qa.find(ie=>ie.type===q);return re?re.icon:lr}function H(q){const re=Qa.find(ie=>ie.type===q);return re?re.color:"#888"}function K(q,re=0){return q.map(ie=>{const ge=O(ie.type),ve=H(ie.type),B="sub_agents"in ie&&ie.sub_agents.length>0,Y="sub_agents"in ie,oe=ie.type==="LlmAgent",me=c.has(ie.id),kt=C===ie.id,nt=(k==null?void 0:k.agentId)===ie.id&&(k==null?void 0:k.type)==="sub_agent",W=(k==null?void 0:k.agentId)===ie.id&&(k==null?void 0:k.type)==="tool",G=B&&t?ie.sub_agents.map(le=>t.agents.find(je=>je.id===le)).filter(le=>le!==void 0):[],fe=C&&C!==ie.id&&(Y||oe);return s.jsxs("div",{className:"agent-tree-item",children:[s.jsxs("div",{className:`agent-item ${o===ie.id?"selected":""} ${kt?"dragging":""} ${fe?"drop-target":""}`,onClick:()=>L(ie.id),style:{paddingLeft:12+re*20},draggable:!0,onDragStart:le=>Q(le,ie.id),onDragEnd:E,onDragOver:le=>{fe&&(le.preventDefault(),le.stopPropagation())},children:[s.jsx("div",{className:"drag-handle",children:s.jsx(S0,{size:12})}),B?s.jsx("button",{className:"expand-btn",onClick:le=>{le.stopPropagation(),j(ie.id)},children:me?s.jsx(At,{size:16}):s.jsx(Rt,{size:16})}):s.jsx("span",{style:{width:20}}),s.jsx("div",{className:"agent-icon",style:{background:ve},children:s.jsx(ge,{size:14})}),s.jsx("span",{className:"agent-name",children:ie.name}),s.jsx("button",{className:"delete-btn",onClick:le=>A(ie.id,le),children:s.jsx(De,{size:14})}),fe&&s.jsxs("div",{className:"drop-overlay",children:[Y&&s.jsxs("div",{className:`drop-zone-overlay ${nt?"active":""}`,onDragOver:le=>te(le,ie.id,"sub_agent"),onDragLeave:V,onDrop:le=>se(le,ie.id,"sub_agent"),children:[s.jsx(mg,{size:12}),s.jsx("span",{children:"Sub-agent"})]}),oe&&s.jsxs("div",{className:`drop-zone-overlay ${W?"active":""}`,onDragOver:le=>te(le,ie.id,"tool"),onDragLeave:V,onDrop:le=>se(le,ie.id,"tool"),children:[s.jsx(Yt,{size:12}),s.jsx("span",{children:"Tool"})]})]})]}),B&&me&&s.jsxs("div",{className:"sub-agents",children:[C&&C!==ie.id&&s.jsx("div",{className:`insert-indicator ${(S==null?void 0:S.parentId)===ie.id&&(S==null?void 0:S.index)===0?"active":""}`,style:{marginLeft:12+(re+1)*20},onDragOver:le=>xe(le,ie.id,0),onDragLeave:()=>v(null),onDrop:le=>M(le,ie.id,0)}),G.map((le,je)=>s.jsxs(Nt.Fragment,{children:[K([le],re+1),C&&C!==ie.id&&C!==le.id&&s.jsx("div",{className:`insert-indicator ${(S==null?void 0:S.parentId)===ie.id&&(S==null?void 0:S.index)===je+1?"active":""}`,style:{marginLeft:12+(re+1)*20},onDragOver:Be=>xe(Be,ie.id,je+1),onDragLeave:()=>v(null),onDrop:Be=>M(Be,ie.id,je+1)})]},le.id))]})]},ie.id)})}const Z=new Set(t.agents.flatMap(q=>"sub_agents"in q?q.sub_agents:[])),ae=t.agents.filter(q=>!Z.has(q.id));return s.jsxs("div",{className:"agents-panel",children:[s.jsx("style",{children:`
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
          height: 0px;
          margin: 0px 0;
          border-radius: 2px;
          background: transparent;
          transition: all 0.15s ease;
        }
        
        .insert-indicator:hover,
        .insert-indicator.active {
          background: var(--accent-primary);
          box-shadow: 0 0 8px rgba(124, 58, 237, 0.5);
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
      `}),s.jsxs("aside",{className:"agents-sidebar",style:{width:T},children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsxs("h3",{children:["Agents (",t.agents.length,")",x.size>0&&s.jsxs("span",{className:"generating-badge",children:[s.jsx(rn,{size:12,className:"spin"})," ",x.size]})]}),s.jsxs("div",{className:"header-buttons",children:[Qa.map(({type:q,icon:re,color:ie})=>s.jsx("button",{className:"quick-add-btn",style:{background:ie},onClick:()=>I(q),title:`Add ${q}`,children:s.jsx(re,{size:14})},q)),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>p(!0),title:"AI-powered agent setup",children:s.jsx(Ra,{size:14})})]})]}),s.jsx("div",{className:"agents-list",ref:z,onDragOver:J,children:t.agents.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(lr,{size:32}),s.jsx("p",{children:"No agents yet"})]}):K(ae)})]}),s.jsx("div",{ref:P,className:`sidebar-resizer ${g?"resizing":""}`,onMouseDown:U}),s.jsx("div",{className:"agent-editor-area",children:ne?s.jsx(U2,{agent:ne}):s.jsxs("div",{className:"empty-state card",children:[s.jsx(lr,{size:48}),s.jsxs("p",{children:["Select an agent to edit",s.jsx("br",{}),"or create a new one"]})]})}),d&&s.jsx("div",{className:"type-selector",onClick:()=>p(!1),children:s.jsxs("div",{className:"quick-setup-content",onClick:q=>q.stopPropagation(),children:[s.jsxs("h2",{children:[s.jsx(Ra,{size:20})," Quick Agent Setup"]}),s.jsx("p",{className:"quick-setup-desc",children:"Describe what you want this agent to do. Runs in the background - you can start multiple!"}),s.jsxs("div",{className:"quick-setup-form",children:[s.jsx("textarea",{value:f,onChange:q=>m(q.target.value),placeholder:"Example: An agent that searches the web for information and summarizes the results. It should be able to search Google and handle multiple queries in parallel.",rows:5,autoFocus:!0,onKeyDown:q=>{q.key==="Enter"&&(q.metaKey||q.ctrlKey)&&f.trim()&&D()}}),s.jsxs("div",{className:"quick-setup-info",children:[s.jsx("strong",{children:"Available resources:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[t.app.state_keys.length," state keys"]}),s.jsxs("li",{children:[l.length," MCP servers"]}),s.jsxs("li",{children:[t.custom_tools.length," custom tools"]}),s.jsxs("li",{children:[t.agents.length," existing agents"]})]})]}),s.jsxs("div",{className:"quick-setup-actions",children:[s.jsx("button",{className:"btn btn-secondary",onClick:()=>p(!1),children:"Cancel"}),s.jsxs("button",{className:"btn btn-primary",onClick:D,disabled:!f.trim(),children:[s.jsx(Ra,{size:14}),"Generate (⌘↵)"]})]})]})]})})]})}var Tu="\x1B[0m",Pu="\x1B[1m",cx=e=>e instanceof Error?e.message:typeof e=="string"?e:"An unknown error occurred",G2=e=>{let t=cx(e),n=`${Pu}[MONACOPILOT ERROR] ${t}${Tu}`;return console.error(n),{message:t}},Y2=(e,t)=>{console.warn(`${Pu}[MONACOPILOT WARN] ${e}${t?`
${cx(t)}`:""}${Tu}`)},X2=(e,t,n)=>console.warn(`${Pu}[MONACOPILOT DEPRECATED] "${e}" is deprecated${n?` in ${n}`:""}. Please use "${t}" instead. It will be removed in a future version.${Tu}`),Po={report:G2,warn:Y2,warnDeprecated:X2},rf=(e,t,n={})=>{if(t<=0)return"";let r=e.split(`
`),i=r.length;if(t>=i)return e;if(n.truncateDirection==="keepEnd"){let a=r.slice(-t);return a.every(l=>l==="")?`
`.repeat(t):a.join(`
`)}let o=r.slice(0,t);return o.every(a=>a==="")?`
`.repeat(t):o.join(`
`)},Z2=100,eS=!0,ux="onIdle",tS=!0,nS=120,rS=400,iS=0,Lu=(e,t)=>t.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:e.lineNumber,endColumn:e.column}),sS=(e,t)=>t.getValueInRange({startLineNumber:e.lineNumber,startColumn:e.column,endLineNumber:t.getLineCount(),endColumn:t.getLineMaxColumn(t.getLineCount())}),oS=e=>e.getValue(),aS=class{constructor(e){this.capacity=e,this.head=0,this.tail=0,this.size=0,this.buffer=new Array(e)}enqueue(e){let t;return this.size===this.capacity&&(t=this.dequeue()),this.buffer[this.tail]=e,this.tail=(this.tail+1)%this.capacity,this.size++,t}dequeue(){if(this.size===0)return;let e=this.buffer[this.head];return this.buffer[this.head]=void 0,this.head=(this.head+1)%this.capacity,this.size--,e}getAll(){return this.buffer.filter(e=>e!==void 0)}clear(){this.buffer=new Array(this.capacity),this.head=0,this.tail=0,this.size=0}getSize(){return this.size}isEmpty(){return this.size===0}isFull(){return this.size===this.capacity}},dx=class px{constructor(){this.cache=new aS(px.MAX_CACHE_SIZE)}get(t,n){return this.cache.getAll().filter(r=>this.isValidCacheItem(r,t,n))}add(t){t.completion.trim()&&this.cache.enqueue(t)}clear(){this.cache.clear()}isValidCacheItem(t,n,r){let i=t.textBeforeCursor.trim(),o=Lu(n,r),a=o,l=r.getLineContent(n.lineNumber);if(n.column===l.length+1&&n.lineNumber<r.getLineCount()){let u=r.getLineContent(n.lineNumber+1);a=`${o}
${u}`}if(!(a.trim().includes(i)||i.includes(a.trim())))return!1;let c=r.getValueInRange(t.range);return this.isPartialMatch(c,t.completion)?this.isPositionValid(t,n):!1}isPartialMatch(t,n){let r=t.trim(),i=n.trim();return i.startsWith(r)||r.startsWith(i)}isPositionValid(t,n){let{range:r}=t,{startLineNumber:i,startColumn:o,endLineNumber:a,endColumn:l}=r,{lineNumber:c,column:u}=n;return c<i||c>a?!1:i===a?u>=o-1&&u<=l+1:c===i?u>=o-1:c===a?u<=l+1:!0}};dx.MAX_CACHE_SIZE=20;var lS=dx,cS=class{constructor(e){this.formattedCompletion="",this.formattedCompletion=e}setCompletion(e){return this.formattedCompletion=e,this}removeInvalidLineBreaks(){return this.formattedCompletion=this.formattedCompletion.trimEnd(),this}removeMarkdownCodeSyntax(){return this.formattedCompletion=this.removeMarkdownCodeBlocks(this.formattedCompletion),this}removeMarkdownCodeBlocks(e){let t=e.split(`
`),n=[],r=!1;for(let i=0;i<t.length;i++){let o=t[i],a=o.trim().startsWith("```");if(a&&!r){r=!0;continue}if(a&&r){r=!1;continue}n.push(o)}return n.join(`
`)}removeExcessiveNewlines(){return this.formattedCompletion=this.formattedCompletion.replace(/\n{3,}/g,`

`),this}build(){return this.formattedCompletion}},uS=class{findOverlaps(e,t,n){if(!e)return{startOverlapLength:0,maxOverlapLength:0};let r=e.length,i=t.length,o=n.length,a=0,l=0,c=0,u=Math.min(r,i);for(let f=1;f<=u;f++){let m=e.substring(0,f),x=t.slice(-f);m===x&&(c=f)}let d=Math.min(r,o);for(let f=0;f<d&&e[f]===n[f];f++)a++;for(let f=1;f<=d;f++)e.slice(-f)===n.slice(0,f)&&(l=f);let p=Math.max(a,l);if(p===0){for(let f=1;f<r;f++)if(n.startsWith(e.substring(f))){p=r-f;break}}return{startOverlapLength:c,maxOverlapLength:p}}},dS=class{constructor(e){this.monaco=e,this.textOverlapCalculator=new uS}computeInsertionRange(e,t,n){if(!t)return this.createEmptyRange(e);let r=n.getOffsetAt(e),i=n.getValue().substring(0,r),o=n.getValue().substring(r);if(r>=n.getValue().length)return this.createEmptyRange(e);if(o.length===0)return this.createEmptyRange(e);let{startOverlapLength:a,maxOverlapLength:l}=this.textOverlapCalculator.findOverlaps(t,i,o),c=a>0?n.getPositionAt(r-a):e,u=r+l,d=n.getPositionAt(u);return new this.monaco.Range(c.lineNumber,c.column,d.lineNumber,d.column)}computeCacheRange(e,t){let n=e.lineNumber,r=e.column,i=t.split(`
`),o=i.length-1,a=n+o,l=o===0?r+i[0].length:i[o].length+1;return new this.monaco.Range(n,r,a,l)}createEmptyRange(e){return new this.monaco.Range(e.lineNumber,e.column,e.lineNumber,e.column)}},pS=async e=>{let{endpoint:t,body:n}=e,r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok)throw new Error(`Error while fetching completion item: ${r.statusText}`);let{completion:i,error:o}=await r.json();return{completion:i,error:o}},fS=({pos:e,mdl:t,options:n})=>{let{filename:r,language:i,technologies:o,relatedFiles:a,maxContextLines:l=Z2}=n,c=a&&a.length>0?3:2,u=l?Math.floor(l/c):void 0,d=(b,T,y)=>{let g=b(e,t);return T?rf(g,T,y):g},p=(b,T)=>!b||!T?b:b.map(({content:y,...g})=>({...g,content:rf(y,T)})),f=d(Lu,u,{truncateDirection:"keepEnd"}),m=d(sS,u,{truncateDirection:"keepStart"}),x=p(a,u);return{filename:r,language:i,technologies:o,relatedFiles:x,textBeforeCursor:f,textAfterCursor:m,cursorPosition:e}},mS=(e,t=300)=>{let n=null,r=null,i=(...o)=>{if(r)return r.args=o,r.promise;let a,l,c=new Promise((u,d)=>{a=u,l=d});return r={args:o,promise:c,resolve:a,reject:l},n&&(clearTimeout(n),n=null),n=setTimeout(async()=>{let u=r;if(u){r=null,n=null;try{let d=await e(...u.args);u.resolve(d)}catch(d){u.reject(d)}}},t),c};return i.cancel=()=>{n&&(clearTimeout(n),n=null),r&&(r.reject(new Error("Cancelled")),r=null)},i},hS=e=>typeof e=="string"?e==="Cancelled"||e==="AbortError":e instanceof Error?e.message==="Cancelled"||e.name==="AbortError":!1,hi=e=>({items:e,enableForwardStability:!0}),uc=new lS,gS=async({monaco:e,mdl:t,pos:n,token:r,isCompletionAccepted:i,options:o})=>{let{trigger:a=ux,enableCaching:l=eS,allowFollowUpCompletions:c=tS,onError:u,requestHandler:d}=o;if(l&&!i){let p=uc.get(n,t).map(f=>({insertText:f.completion,range:f.range}));if(p.length>0)return hi(p)}if(r.isCancellationRequested||!c&&i)return hi([]);try{let p=mS(async x=>{var T,y;(T=o.onCompletionRequested)==null||T.call(o,x);let b;if(d)b=await d(x);else if(o.endpoint)b=await pS({endpoint:o.endpoint,...x});else throw new Error('No endpoint specified for completion request. Please set the "endpoint" option in registerCompletion, or provide a custom requestHandler.');if(b.error)throw new Error(b.error);return(y=o.onCompletionRequestFinished)==null||y.call(o,x,b),b},{onTyping:nS,onIdle:rS,onDemand:iS}[a]);r.onCancellationRequested(()=>{p.cancel()});let f=fS({pos:n,mdl:t,options:o}),{completion:m}=await p({body:{completionMetadata:f}});if(m){let x=new cS(m).removeMarkdownCodeSyntax().removeExcessiveNewlines().removeInvalidLineBreaks().build(),b=new dS(e);return l&&uc.add({completion:x,range:b.computeCacheRange(n,x),textBeforeCursor:Lu(n,t)}),hi([{insertText:x,range:b.computeInsertionRange(n,x,t)}])}}catch(p){if(hS(p))return hi([]);u?u(p):Po.warn("Cannot provide completion",p)}return hi([])},Au=new WeakMap,ia=e=>Au.get(e),xS=(e,t)=>{Au.set(e,t)},sf=e=>{Au.delete(e)},yS=e=>({isCompletionAccepted:!1,isCompletionVisible:!1,isExplicitlyTriggered:!1,hasRejectedCurrentCompletion:!1,options:e}),vS=(e,t)=>{let n=ia(e);!n||!n.options||(n.options={...n.options,...t})},bS=(e,t,n)=>{let r=ia(t);return r?e.languages.registerInlineCompletionsProvider(n.language,{provideInlineCompletions:(i,o,a,l)=>{if(i!==t.getModel())return{items:[]};let c=r.options||n;if(!(c.trigger==="onDemand"&&!r.isExplicitlyTriggered||c.triggerIf&&!c.triggerIf({text:oS(t),position:o,triggerType:c.trigger??ux})))return gS({monaco:e,mdl:i,pos:o,token:l,isCompletionAccepted:r.isCompletionAccepted,options:c})},handleItemDidShow:(i,o,a)=>{var l,c;r.isExplicitlyTriggered=!1,r.hasRejectedCurrentCompletion=!1,!r.isCompletionAccepted&&(r.isCompletionVisible=!0,(c=(l=r.options||n).onCompletionShown)==null||c.call(l,a,o.range))},freeInlineCompletions:()=>{}}):null},kS={TAB:(e,t)=>t.keyCode===e.KeyCode.Tab,CMD_RIGHT_ARROW:(e,t)=>t.keyCode===e.KeyCode.RightArrow&&t.metaKey},wS=class{constructor(e,t,n){this.monaco=e,this.state=t,this.initialOptions=n}handleKeyEvent(e){let t=this.state.options||this.initialOptions,n={monaco:this.monaco,event:e,state:this.state,options:t};this.handleCompletionAcceptance(n),this.handleCompletionRejection(n)}handleCompletionAcceptance(e){var t,n;return e.state.isCompletionVisible&&this.isAcceptanceKey(e.event)?((n=(t=e.options).onCompletionAccepted)==null||n.call(t),e.state.isCompletionAccepted=!0,e.state.isCompletionVisible=!1,!0):(e.state.isCompletionAccepted=!1,!1)}handleCompletionRejection(e){var t,n;return this.shouldRejectCompletion(e)?((n=(t=e.options).onCompletionRejected)==null||n.call(t),e.state.hasRejectedCurrentCompletion=!0,!0):!1}shouldRejectCompletion(e){return e.state.isCompletionVisible&&!e.state.hasRejectedCurrentCompletion&&!e.state.isCompletionAccepted&&!this.isAcceptanceKey(e.event)}isAcceptanceKey(e){return Object.values(kS).some(t=>t(this.monaco,e))}},jS=(e,t,n,r)=>{let i=new wS(e,n,r);return t.onKeyDown(o=>i.handleKeyEvent(o))},fx=(e,t,n)=>{let r=[];xS(t,yS(n)),t.updateOptions({inlineSuggest:{enabled:!0}});try{let i=ia(t);if(!i)return Po.warn("Completion is not registered properly. State not found."),SS();let o=bS(e,t,n);o&&r.push(o);let a=jS(e,t,i,n);return r.push(a),{deregister:()=>{for(let l of r)l.dispose();uc.clear(),sf(t)},trigger:()=>_S(t),updateOptions:l=>{vS(t,l(i.options||n))}}}catch(i){return n.onError?n.onError(i):Po.report(i),{deregister:()=>{for(let o of r)o.dispose();sf(t)},trigger:()=>{},updateOptions:()=>{}}}},_S=e=>{let t=ia(e);if(!t){Po.warn("Completion is not registered. Use `registerCompletion` to register completion first.");return}t.isExplicitlyTriggered=!0,e.trigger("keyboard","editor.action.inlineSuggest.trigger",{})},SS=()=>({deregister:()=>{},trigger:()=>{},updateOptions:()=>{}});function CS(){return`tool_${Date.now().toString(36)}`}function NS(e){return/^[a-zA-Z0-9_]+$/.test(e)}const ES=`def my_tool(tool_context: ToolContext, param1: str) -> dict:
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
`;function zS({onSelectTool:e}){const{project:t,updateProject:n,addCustomTool:r,updateCustomTool:i,removeCustomTool:o,selectedToolId:a,setSelectedToolId:l,builtinTools:c,mcpServers:u}=at(),[d,p]=w.useState(""),[f,m]=w.useState(null),[x,b]=w.useState("tools"),[T,y]=w.useState(null),[g,h]=w.useState(""),[P,C]=w.useState(!1),[_,N]=w.useState(!1),[k,R]=w.useState(!1),[S,v]=w.useState(null),[z,F]=w.useState(null),[U,D]=w.useState({}),[ne,L]=w.useState("");if(!t)return null;const I=t.mcp_servers||[],A=t.custom_tools.find(B=>B.id===a),j=I.find(B=>B.name===T);function J(B){l(B),e==null||e(B)}w.useEffect(()=>{A&&(p(A.code),F(null))},[a]),w.useEffect(()=>{j&&(h(JSON.stringify(j,null,2)),C(!1))},[T]),w.useEffect(()=>{if(!t)return;const B=Q(t.mcp_servers||[]);L(JSON.stringify(B,null,2))},[t==null?void 0:t.mcp_servers]);function Q(B){const Y={};for(const oe of B){const me={};oe.connection_type==="stdio"?(me.command=oe.command||"",me.args=oe.args||[],Object.keys(oe.env||{}).length>0&&(me.env=oe.env)):oe.connection_type==="sse"&&(me.url=oe.url||"",Object.keys(oe.headers||{}).length>0&&(me.headers=oe.headers)),oe.timeout&&oe.timeout!==30&&(me.timeout=oe.timeout),oe.tool_filter&&(me.tool_filter=oe.tool_filter),oe.tool_name_prefix&&(me.tool_name_prefix=oe.tool_name_prefix),Y[oe.name]=me}return{mcpServers:Y}}function E(B){const Y=[];for(const[oe,me]of Object.entries(B.mcpServers||{})){const kt={name:oe,description:me.description||"",connection_type:me.url?"sse":"stdio",command:me.command,args:me.args||[],env:me.env||{},url:me.url,headers:me.headers||{},timeout:me.timeout||30,tool_filter:me.tool_filter||null,tool_name_prefix:me.tool_name_prefix};Y.push(kt)}return Y}function xe(B){B!==void 0&&L(B)}function M(){try{const B=JSON.parse(ne),Y=E(B);n({mcp_servers:Y})}catch(B){alert("Invalid JSON: "+B.message)}}async function te(B){const Y=I.find(oe=>oe.name===B);if(Y){D(oe=>({...oe,[B]:"testing"}));try{const oe=await Ql({connection_type:Y.connection_type,command:Y.command,args:Y.args,env:Y.env,url:Y.url,headers:Y.headers,timeout:Y.timeout});D(me=>({...me,[B]:oe.success?"connected":"error"}))}catch{D(me=>({...me,[B]:"error"}))}}}function V(B){const Y=u.find(me=>me.name===B);if(!Y)return;if(I.some(me=>me.name===B)){alert(`Server "${B}" is already configured`);return}const oe={name:Y.name,description:Y.description||"",connection_type:Y.connection_type,command:Y.command,args:Y.args||[],env:Y.env||{},url:Y.url,headers:Y.headers||{},timeout:Y.timeout||30,tool_filter:Y.tool_filter||null,tool_name_prefix:Y.tool_name_prefix};n({mcp_servers:[...I,oe]})}async function se(){for(const B of I)await te(B.name)}function pe(){const B=CS();r({id:B,name:"new_tool",description:"",module_path:"tools.custom",code:ES,state_keys_used:[]}),J(B)}function O(B,Y){Y.stopPropagation(),confirm("Delete this tool?")&&(o(B),a===B&&(e==null||e(null)))}function H(B){A&&(B.name!==void 0&&(B.name===""||NS(B.name)?F(null):F("Name can only contain letters, numbers, and underscores")),i(A.id,B))}function K(B){B!==void 0&&A&&(p(B),H({code:B}))}async function Z(){if(A){N(!0);try{const B=await Xh(t.id,A.name,A.description,A.state_keys_used);B.success&&B.code?(p(B.code),H({code:B.code})):(console.error("Failed to generate tool code:",B.error),alert("Failed to generate tool code: "+(B.error||"Unknown error")))}catch(B){console.error("Error generating tool code:",B),alert("Error generating tool code: "+B.message)}finally{N(!1)}}}const ae=w.useRef(null),q=w.useCallback((B,Y)=>{if(ae.current&&typeof ae.current=="function")try{ae.current()}catch{}try{const oe=fx(Y,B,{language:"python",endpoint:"/api/code-completion",trigger:"onTyping"});typeof oe=="function"?ae.current=oe:ae.current=null}catch{ae.current=null}},[]);w.useEffect(()=>()=>{if(ae.current&&typeof ae.current=="function")try{ae.current()}catch{}},[]);function re(B){B!==void 0&&(h(B),C(B!==JSON.stringify(j,null,2)))}function ie(){if(j)try{const B=JSON.parse(g),Y=j.name,oe=I.map(me=>me.name===Y?B:me);n({mcp_servers:oe}),y(B.name),C(!1)}catch(B){alert("Invalid JSON: "+B.message)}}async function ge(){R(!0),v(null);try{const B=JSON.parse(g),Y=await Ql({connection_type:B.connection_type,command:B.command,args:B.args,env:B.env,url:B.url,headers:B.headers,timeout:B.timeout||30});if(v(Y),Y.success&&Y.tools.length>0){const oe={...B,tool_filter:Y.tools.map(me=>me.name)};h(JSON.stringify(oe,null,2)),C(!0)}}catch(B){v({success:!1,tools:[],error:B.message})}finally{R(!1)}}const ve={};return t.custom_tools.forEach(B=>{const Y=B.module_path||"tools";ve[Y]||(ve[Y]=[]),ve[Y].push(B)}),s.jsxs("div",{className:"tools-panel",children:[s.jsx("style",{children:`
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
        
        .mcp-server-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 12px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-md);
          margin-bottom: 6px;
          transition: all 0.15s ease;
        }
        
        .mcp-server-item:hover {
          background: var(--bg-primary);
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
      `}),s.jsxs("aside",{className:"tools-sidebar",children:[s.jsxs("div",{className:"sidebar-tabs",children:[s.jsxs("button",{className:`sidebar-tab ${x==="tools"?"active":""}`,onClick:()=>b("tools"),children:[s.jsx(Yt,{size:14}),"Tools"]}),s.jsxs("button",{className:`sidebar-tab ${x==="mcp"?"active":""}`,onClick:()=>b("mcp"),children:[s.jsx(di,{size:14}),"MCP"]})]}),x==="tools"?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsxs("h3",{children:["Custom Tools (",t.custom_tools.length,")"]}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:pe,children:[s.jsx(Ge,{size:14}),"New"]})]}),s.jsxs("div",{className:"tools-tree",children:[c.length>0&&s.jsxs("div",{className:"module-group",children:[s.jsxs("div",{className:"module-header",children:[s.jsx(E0,{size:14}),"Built-in Tools"]}),c.map(B=>s.jsxs("div",{className:`tool-item builtin ${(f==null?void 0:f.name)===B.name?"selected":""}`,onClick:()=>{m(B),J(null),y(null)},children:[s.jsx(Yl,{size:14}),s.jsx("span",{className:"tool-name",children:B.name})]},B.name))]}),t.custom_tools.length===0&&c.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(un,{size:32}),s.jsx("p",{children:"No tools defined yet"})]}):t.custom_tools.length>0&&Object.entries(ve).map(([B,Y])=>s.jsxs("div",{className:"module-group",children:[s.jsxs("div",{className:"module-header",children:[s.jsx(_0,{size:14}),B]}),Y.map(oe=>s.jsxs("div",{className:`tool-item ${a===oe.id?"selected":""}`,onClick:()=>{J(oe.id),m(null),y(null)},children:[s.jsx(Yt,{size:14}),s.jsx("span",{className:"tool-name",children:oe.name}),s.jsx("button",{className:"delete-btn",onClick:me=>O(oe.id,me),children:s.jsx(De,{size:14})})]},oe.id))]},B))]})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsxs("h3",{children:["MCP Servers (",I.length,")"]}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:se,title:"Test all connections",children:s.jsx(rn,{size:14})})]}),s.jsx("div",{className:"mcp-servers-list",children:I.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(di,{size:32}),s.jsx("p",{children:"No MCP servers configured"}),s.jsx("p",{style:{fontSize:"12px",color:"var(--text-muted)"},children:"Edit the JSON to add servers"})]}):I.map(B=>{const Y=U[B.name]||"unknown";return s.jsxs("div",{className:"mcp-server-item",children:[s.jsxs("div",{className:"mcp-server-info",children:[s.jsx(di,{size:14}),s.jsx("span",{className:"mcp-server-name",children:B.name}),s.jsxs("span",{className:`mcp-status-badge ${Y}`,children:[Y==="testing"?s.jsx(rn,{size:10,className:"spin"}):null,Y==="unknown"&&"●",Y==="connected"&&"●",Y==="error"&&"●"]})]}),s.jsxs("div",{className:"mcp-server-actions",children:[s.jsx("span",{className:"mcp-server-type",children:B.connection_type}),s.jsx("button",{className:"btn btn-sm",onClick:()=>te(B.name),disabled:Y==="testing",title:"Test connection",children:Y==="testing"?s.jsx(rn,{size:12,className:"spin"}):s.jsx(rn,{size:12})})]})]},B.name)})})]})]}),s.jsx("div",{className:"tool-editor",children:f?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(Yl,{size:20,style:{color:"var(--accent-secondary)"}}),s.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:f.name}),s.jsx("span",{className:"badge badge-muted",children:"Built-in"})]}),s.jsxs("div",{className:"builtin-tool-info",children:[s.jsxs("div",{className:"info-section",children:[s.jsx("h4",{children:"Description"}),s.jsx("p",{children:f.description||"No description available."})]}),s.jsxs("div",{className:"info-section",children:[s.jsx("h4",{children:"Usage"}),s.jsx("p",{children:"This is a built-in tool provided by ADK. Add it to any LLM agent's tools list to enable it."}),s.jsxs("code",{children:['tools: ["',f.name,'"]']})]}),s.jsxs("div",{className:"info-section",children:[s.jsx("h4",{children:"Note"}),s.jsx("p",{children:"Built-in tools are read-only and cannot be modified. Create a custom tool if you need different behavior."})]})]})]}):A?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(Yt,{size:20,style:{color:"var(--accent-primary)"}}),s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[s.jsx("input",{type:"text",value:A.name,onChange:B=>H({name:B.target.value}),placeholder:"Tool name",style:{borderColor:z?"var(--error)":void 0}}),z&&s.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:z})]})]}),s.jsxs("div",{className:"editor-meta",children:[s.jsxs("div",{className:"meta-field grow",children:[s.jsx("label",{children:"Description"}),s.jsx("input",{type:"text",value:A.description,onChange:B=>H({description:B.target.value}),placeholder:"What does this tool do?"})]}),s.jsxs("div",{className:"meta-field",children:[s.jsx("label",{children:"Module Path"}),s.jsx("input",{type:"text",value:A.module_path,onChange:B=>H({module_path:B.target.value}),placeholder:"tools.custom",style:{width:180}})]})]}),s.jsxs("div",{className:"code-actions",children:[s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:Z,disabled:_||!A.name||!A.description,title:!A.name||!A.description?"Add a name and description first":"Generate code using AI",children:_?s.jsxs(s.Fragment,{children:[s.jsx(rn,{size:14,className:"spinning"}),"Generating..."]}):s.jsxs(s.Fragment,{children:[s.jsx(fu,{size:14}),"Write Tool"]})}),s.jsx("span",{className:"action-hint",children:"AI will generate code based on the tool name, description, and selected state keys"})]}),s.jsx("div",{className:"code-editor",children:s.jsx(Dt,{height:"100%",language:"python",theme:"vs-dark",value:d,onChange:K,onMount:q,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12}}})}),s.jsxs("div",{className:"state-keys-panel",children:[s.jsxs("h4",{children:[s.jsx(du,{size:14})," State Keys Used"]}),s.jsx("div",{className:"state-key-chips",children:t.app.state_keys.length===0?s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"No state keys defined. Add them in App Config."}):t.app.state_keys.map(B=>{const Y=A.state_keys_used.includes(B.name);return s.jsxs("label",{className:`state-key-chip ${Y?"selected":""}`,title:B.description,children:[s.jsx("input",{type:"checkbox",checked:Y,onChange:oe=>{const me=oe.target.checked?[...A.state_keys_used,B.name]:A.state_keys_used.filter(kt=>kt!==B.name);H({state_keys_used:me})}}),B.name,s.jsxs("span",{style:{color:"var(--text-muted)",fontSize:11},children:["(",B.type,")"]})]},B.name)})})]})]}):j?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(di,{size:20,style:{color:"var(--accent-primary)"}}),s.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:j.name}),s.jsx("span",{className:"badge badge-info",children:j.connection_type}),P&&s.jsx("span",{className:"unsaved-badge",children:"Unsaved"}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:ge,disabled:k,title:"Test connection and discover available tools",children:[k?s.jsx(rn,{size:14,className:"spin"}):s.jsx(cg,{size:14}),k?"Testing...":"Test Connection"]}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:ie,disabled:!P,children:[s.jsx(No,{size:14}),"Save"]})]}),S&&s.jsx("div",{className:`mcp-test-result ${S.success?"success":"error"}`,children:S.success?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"test-result-header",children:["✓ Connected! Found ",S.tools.length," tools"]}),S.tools.length>0&&s.jsxs("div",{className:"test-result-tools",children:[s.jsx("strong",{children:"Available tools:"}),s.jsx("ul",{children:S.tools.map(B=>s.jsxs("li",{children:[s.jsx("code",{children:B.name}),B.description&&s.jsxs("span",{children:[" — ",B.description]})]},B.name))}),s.jsx("p",{className:"hint",children:'The tool_filter has been updated with these tools. Click "Save" to apply.'})]})]}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"test-result-header",children:"✗ Connection failed"}),s.jsx("div",{className:"test-result-error",children:S.error})]})}),s.jsx("div",{className:"mcp-info",children:s.jsx("p",{children:'Configure your MCP server using JSON. Click "Test Connection" to verify and discover available tools.'})}),s.jsx("div",{className:"code-editor",children:s.jsx(Dt,{height:"100%",language:"json",theme:"vs-dark",value:g,onChange:re,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},formatOnPaste:!0}})}),s.jsxs("div",{className:"mcp-help",children:[s.jsx("h4",{children:"Schema Reference"}),s.jsxs("div",{className:"schema-fields",children:[s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"name"}),s.jsx("span",{children:"Unique identifier for this server"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"description"}),s.jsx("span",{children:"Human-readable description"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"connection_type"}),s.jsx("span",{children:'"stdio" | "sse" | "http"'})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"command"}),s.jsx("span",{children:"Command to run (for stdio)"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"args"}),s.jsx("span",{children:"Array of command arguments"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"env"}),s.jsx("span",{children:"Environment variables object"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"url"}),s.jsx("span",{children:"Server URL (for sse/http)"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"tool_filter"}),s.jsx("span",{children:"Array of tool names to include (null/omit = all tools, [] = no tools)"})]})]})]})]}):x==="mcp"?s.jsxs("div",{className:"mcp-json-editor",children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(di,{size:20,style:{color:"var(--accent-primary)"}}),s.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:"mcp.json"}),s.jsx("span",{className:"badge badge-muted",children:"Model Context Protocol"}),s.jsxs("select",{value:"",onChange:B=>{B.target.value&&V(B.target.value)},style:{padding:"6px 10px",fontSize:"12px",borderRadius:"6px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",color:"var(--text-primary)"},children:[s.jsx("option",{value:"",children:"+ Add known server..."}),u.filter(B=>!I.some(Y=>Y.name===B.name)).map(B=>s.jsxs("option",{value:B.name,children:[B.name," - ",B.description||"No description"]},B.name))]}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:M,children:[s.jsx(No,{size:14}),"Apply Changes"]})]}),s.jsx("div",{className:"mcp-json-info",children:s.jsxs("p",{children:["Configure your MCP servers using the standard ",s.jsx("code",{children:"mcp.json"})," format. Select a known server from the dropdown to add its configuration."]})}),s.jsx("div",{className:"editor-content",style:{flex:1},children:s.jsx(Dt,{height:"100%",defaultLanguage:"json",value:ne,onChange:xe,theme:"vs-dark",options:{minimap:{enabled:!1},fontSize:14,lineNumbers:"on",scrollBeyondLastLine:!1,wordWrap:"on",tabSize:2,formatOnPaste:!0,formatOnType:!0}})})]}):s.jsxs("div",{className:"empty-state",children:[s.jsx(un,{size:48}),s.jsxs("p",{children:["Select a tool to view",s.jsx("br",{}),"or create a new custom tool"]})]})})]})}function TS(){return`callback_${Date.now().toString(36)}`}function of(e){return/^[a-zA-Z0-9_]+$/.test(e)}function mx(e){switch(e){case"before_agent":case"after_agent":return`from google.adk.agents.callback_context import CallbackContext
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
`;default:return mx("before_agent")}}function PS({onSelectCallback:e}){var k,R;const{project:t,updateProject:n,addCustomCallback:r,updateCustomCallback:i,removeCustomCallback:o}=at(),[a,l]=w.useState(""),[c,u]=w.useState(null),[d,p]=w.useState(null),[f,m]=w.useState(!1),x=w.useRef(null);if(!t)return null;const b=t.custom_callbacks||[],T=b.find(S=>S.id===c);function y(S){u(S),e==null||e(S)}w.useEffect(()=>{T?(l(T.code),p(null)):l("")},[c,T]);function g(){const S=TS(),v={id:S,name:"new_callback",description:"",module_path:"callbacks.custom",code:mx("before_agent"),state_keys_used:[]};r(v),y(S)}function h(S,v){v.stopPropagation(),confirm("Delete this callback?")&&(o(S),c===S&&(e==null||e(null),u(null),l("")))}function P(){if(!c)return;const S=b.find(F=>F.id===c);if(!S)return;const v=S.name.trim();if(!v){alert("Please enter a name");return}if(!of(v)){p("Name must contain only alphanumeric characters and underscores");return}if(b.find(F=>F.name===v&&F.id!==S.id)){p("A callback with this name already exists");return}i(S.id,{code:a,name:v,description:S.description,module_path:S.module_path,state_keys_used:S.state_keys_used}),p(null)}function C(S,v){x.current=v;try{fx(v,{endpoint:"/api/code-completion",language:"python"})}catch(z){console.warn("Failed to register Monacopilot completion:",z)}}async function _(){if(T){m(!0);try{let S="before_agent";const v=T.name.toLowerCase(),z=T.description.toLowerCase();v.includes("after_agent")||z.includes("after agent")?S="after_agent":v.includes("before_model")||z.includes("before model")?S="before_model":v.includes("after_model")||z.includes("after model")?S="after_model":v.includes("before_tool")||z.includes("before tool")?S="before_tool":v.includes("after_tool")||z.includes("after tool")?S="after_tool":(v.includes("before_agent")||z.includes("before agent"))&&(S="before_agent");const F=await Zh(t.id,T.name,T.description,S,T.state_keys_used);F.success&&F.code?(l(F.code),i(T.id,{code:F.code})):(console.error("Failed to generate callback code:",F.error),alert("Failed to generate callback code: "+(F.error||"Unknown error")))}catch(S){console.error("Error generating callback code:",S),alert("Error generating callback code: "+S.message)}finally{m(!1)}}}const N=((R=(k=t.app)==null?void 0:k.state_keys)==null?void 0:R.map(S=>S.name))||[];return s.jsxs("div",{className:"tools-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"tools-sidebar",children:[s.jsxs("div",{className:"tools-sidebar-header",children:[s.jsx("h3",{children:"Callbacks"}),s.jsx("button",{className:"btn btn-primary btn-sm",onClick:g,title:"Add Callback",children:s.jsx(Ge,{size:16})})]}),s.jsx("div",{className:"tools-list",children:b.length===0?s.jsx("div",{style:{padding:"16px",color:"var(--text-secondary)",fontSize:"14px"},children:"No callbacks yet. Click + to add one."}):b.map(S=>s.jsxs("div",{className:`tool-item ${c===S.id?"selected":""}`,onClick:()=>y(S.id),children:[s.jsxs("div",{style:{flex:1},children:[s.jsx("div",{className:"tool-item-name",children:S.name}),S.description&&s.jsx("div",{className:"tool-item-type",style:{fontSize:"11px",color:"var(--text-secondary)",marginTop:"2px"},children:S.description})]}),s.jsx("div",{className:"tool-item-actions",children:s.jsx("button",{className:"btn btn-icon btn-sm",onClick:v=>h(S.id,v),title:"Delete",children:s.jsx(De,{size:14})})})]},S.id))})]}),s.jsx("div",{className:"tools-editor",children:T?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"tools-editor-header",children:[s.jsx("h3",{children:"Edit Callback"}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:P,children:[s.jsx(No,{size:16,style:{marginRight:"6px"}}),"Save"]})]}),s.jsxs("div",{className:"tools-editor-content",style:{padding:"16px",overflowY:"auto"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Name"}),s.jsx("input",{type:"text",value:T.name,onChange:S=>{const v=S.target.value;i(T.id,{name:v}),d&&of(v)&&p(null)},className:d?"error":""}),d&&s.jsx("div",{className:"error-message",children:d})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Description"}),s.jsx("textarea",{value:T.description,onChange:S=>i(T.id,{description:S.target.value}),rows:2,placeholder:"Describe what this callback does..."})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Module Path"}),s.jsx("input",{type:"text",value:T.module_path,onChange:S=>i(T.id,{module_path:S.target.value}),placeholder:"callbacks.custom"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"State Keys Used"}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"8px"},children:N.map(S=>{const v=T.state_keys_used.includes(S);return s.jsxs("button",{type:"button",className:`btn btn-sm ${v?"btn-primary":"btn-secondary"}`,onClick:()=>{const z=v?T.state_keys_used.filter(F=>F!==S):[...T.state_keys_used,S];i(T.id,{state_keys_used:z})},children:[s.jsx(du,{size:12,style:{marginRight:"4px"}}),S]},S)})}),N.length===0&&s.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"12px",marginTop:"4px"},children:"No state keys defined in App Config"})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[s.jsx("label",{children:"Code"}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:_,disabled:f||!T.name,title:T.name?"Generate code using AI":"Add a name first",children:f?s.jsxs(s.Fragment,{children:[s.jsx(rn,{size:14,className:"spinning"}),"Generating..."]}):s.jsxs(s.Fragment,{children:[s.jsx(fu,{size:14}),"Generate"]})})]}),s.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"8px"},children:"AI will generate code based on the callback name, description, and selected state keys"}),s.jsx("div",{className:"code-editor-container",children:s.jsx(Dt,{height:"100%",language:"python",theme:"vs-dark",value:a,onChange:S=>l(S||""),onMount:C,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0}})})]})]})]}):s.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)"},children:"Select a callback to edit, or create a new one"})})]})}const af={agent_start:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},agent_end:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},tool_call:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},tool_result:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},model_call:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},model_response:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},state_change:{bg:"#3d0d1f",fg:"#fda4af",border:"#f43f5e"},transfer:{bg:"#0d2d3d",fg:"#7dd3fc",border:"#0ea5e9"},callback_start:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},callback_end:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"}},LS={agent_start:Gl,agent_end:Gl,tool_call:Yt,tool_result:Yt,model_call:uu,model_response:Co,state_change:yn,transfer:gg,callback_start:un,callback_end:un};function AS(e){var t,n,r,i,o,a,l,c,u,d,p,f,m,x,b,T,y,g,h,P,C;switch(e.event_type){case"agent_start":return`START ${e.agent_name}`;case"agent_end":return(t=e.data)!=null&&t.error?`END ${e.agent_name} [ERROR]`:`END ${e.agent_name}`;case"tool_call":const N=Object.entries(((n=e.data)==null?void 0:n.args)||{}).map(([A,j])=>{const J=j!=null?JSON.stringify(j):"null";return`${A}=${J.slice(0,20)}`}).join(", ")||"";return`CALL ${((r=e.data)==null?void 0:r.tool_name)||"unknown"}(${N.slice(0,60)}${N.length>60?"...":""})`;case"tool_result":const k=(i=e.data)==null?void 0:i.result;let R="";if((a=(o=k==null?void 0:k.content)==null?void 0:o[0])!=null&&a.text)R=String(k.content[0].text).slice(0,60);else if(typeof k=="string")R=k.slice(0,60);else if(k!=null){const A=JSON.stringify(k);R=A?A.slice(0,60):""}else R="";return`RESULT ${((l=e.data)==null?void 0:l.tool_name)||"unknown"} → ${R}${R.length>=60?"...":""}`;case"model_call":return`LLM_REQ ${((u=(c=e.data)==null?void 0:c.contents)==null?void 0:u.length)||0} msgs, ${((d=e.data)==null?void 0:d.tool_count)||0} tools`;case"model_response":const S=((f=(p=e.data)==null?void 0:p.response_content)==null?void 0:f.parts)||((m=e.data)==null?void 0:m.parts)||[],v=S.find(A=>(A==null?void 0:A.type)==="function_call");if(v)return`LLM_RSP → ${v.name||"unknown"}()`;const z=S.find(A=>(A==null?void 0:A.type)==="text");if(z!=null&&z.text){const A=String(z.text);return`LLM_RSP "${A.slice(0,50)}${A.length>50?"...":""}"`}return`LLM_RSP (${((x=e.data)==null?void 0:x.finish_reason)||"complete"})`;case"state_change":return`STATE ${Object.keys(((b=e.data)==null?void 0:b.state_delta)||{}).join(", ")}`;case"transfer":return`TRANSFER → ${((T=e.data)==null?void 0:T.target)||"unknown"}`;case"callback_start":const U=((y=e.data)==null?void 0:y.callback_name)||"unknown",D=((g=e.data)==null?void 0:g.callback_type)||"";return`CALLBACK START ${D?`[${D}]`:""} ${U}`;case"callback_end":const ne=((h=e.data)==null?void 0:h.callback_name)||"unknown",L=((P=e.data)==null?void 0:P.callback_type)||"",I=(C=e.data)!=null&&C.error?" [ERROR]":"";return`CALLBACK END ${L?`[${L}]`:""} ${ne}${I}`;default:return e.event_type.toUpperCase()}}function RS(e,t){const n=e-t;return n<1?`+${(n*1e3).toFixed(0)}ms`:n<60?`+${n.toFixed(2)}s`:`+${Math.floor(n/60)}m${(n%60).toFixed(0)}s`}function MS({event:e}){var o,a,l,c,u,d,p,f,m,x,b,T,y,g,h,P;const[t,n]=w.useState(new Set(["instruction","messages","result","response","state_delta","data"])),r=C=>{const _=new Set(t);_.has(C)?_.delete(C):_.add(C),n(_)},i=(C,_=0,N=!1)=>{const k="  ".repeat(_),R="  ".repeat(_+1);if(C===null)return s.jsx("span",{className:"json-null",children:"null"});if(C===void 0)return s.jsx("span",{className:"json-undefined",children:"undefined"});if(typeof C=="boolean")return s.jsx("span",{className:"json-boolean",children:C.toString()});if(typeof C=="number")return s.jsx("span",{className:"json-number",children:C});if(typeof C=="string"){const S=C.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\t/g,"\\t");return S.length>300&&_>0?s.jsxs("span",{className:"json-string",children:['"',S.slice(0,300),'..." ',s.jsxs("span",{className:"json-truncated",children:["(",C.length," chars)"]})]}):s.jsxs("span",{className:"json-string",children:['"',S,'"']})}if(Array.isArray(C))return C.length===0?s.jsx("span",{className:"json-bracket",children:"[]"}):C.every(v=>v===null||typeof v!="object")&&C.length<=3?s.jsxs("span",{className:"json-inline",children:[s.jsx("span",{className:"json-bracket",children:"["}),C.map((v,z)=>s.jsxs("span",{children:[i(v,_+1,!0),z<C.length-1&&s.jsx("span",{className:"json-comma",children:", "})]},z)),s.jsx("span",{className:"json-bracket",children:"]"})]}):s.jsxs("span",{className:"json-block",children:[s.jsx("span",{className:"json-bracket",children:"["}),C.map((v,z)=>s.jsxs("span",{children:[`
`+R,i(v,_+1),z<C.length-1&&s.jsx("span",{className:"json-comma",children:","})]},z)),`
`+k,s.jsx("span",{className:"json-bracket",children:"]"})]});if(typeof C=="object"){const S=Object.entries(C);return S.length===0?s.jsx("span",{className:"json-bracket",children:"{}"}):S.length<=2&&S.every(([,z])=>z===null||typeof z!="object")&&N?s.jsxs("span",{className:"json-inline",children:[s.jsx("span",{className:"json-bracket",children:"{"}),S.map(([z,F],U)=>s.jsxs("span",{children:[s.jsxs("span",{className:"json-key",children:['"',z,'"']}),s.jsx("span",{className:"json-colon",children:": "}),i(F,_+1,!0),U<S.length-1&&s.jsx("span",{className:"json-comma",children:", "})]},z)),s.jsx("span",{className:"json-bracket",children:"}"})]}):s.jsxs("span",{className:"json-block",children:[s.jsx("span",{className:"json-bracket",children:"{"}),S.map(([z,F],U)=>s.jsxs("span",{children:[`
`+R,s.jsxs("span",{className:"json-key",children:['"',z,'"']}),s.jsx("span",{className:"json-colon",children:": "}),i(F,_+1),U<S.length-1&&s.jsx("span",{className:"json-comma",children:","})]},z)),`
`+k,s.jsx("span",{className:"json-bracket",children:"}"})]})}return String(C)};return s.jsxs("div",{className:"event-detail",children:[s.jsxs("div",{className:"detail-header",children:[s.jsx("span",{className:"detail-type",children:e.event_type}),s.jsx("span",{className:"detail-agent",children:e.agent_name}),s.jsx("span",{className:"detail-time",children:new Date(e.timestamp*1e3).toISOString()})]}),s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("data"),children:[t.has("data")?s.jsx(At,{size:12}):s.jsx(Rt,{size:12}),s.jsx("span",{children:"Event Data"})]}),t.has("data")&&s.jsx("div",{className:"section-content json-viewer",children:i(e.data)})]}),e.event_type==="agent_start"&&((o=e.data)==null?void 0:o.instruction)&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("instruction"),children:[t.has("instruction")?s.jsx(At,{size:12}):s.jsx(Rt,{size:12}),s.jsx("span",{children:"Instruction"}),s.jsxs("span",{className:"char-count",children:[e.data.instruction.length," chars"]})]}),t.has("instruction")&&s.jsx("div",{className:"section-content",children:s.jsx("pre",{className:"instruction-text",children:e.data.instruction})})]}),e.event_type==="model_call"&&((a=e.data)==null?void 0:a.contents)&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("messages"),children:[t.has("messages")?s.jsx(At,{size:12}):s.jsx(Rt,{size:12}),s.jsxs("span",{children:["Messages (",e.data.contents.length,")"]})]}),t.has("messages")&&s.jsx("div",{className:"section-content",children:e.data.contents.map((C,_)=>{var N;return s.jsxs("div",{className:"message-item",children:[s.jsx("span",{className:`message-role ${C.role}`,children:C.role}),s.jsx("div",{className:"message-parts",children:(N=C.parts)==null?void 0:N.map((k,R)=>s.jsxs("div",{className:"message-part",children:[k.text&&s.jsx("pre",{children:k.text}),k.function_call&&s.jsxs("div",{className:"function-call",children:[s.jsx("strong",{children:k.function_call.name}),s.jsx("pre",{children:JSON.stringify(k.function_call.args,null,2)})]}),k.function_response&&s.jsxs("div",{className:"function-response",children:[s.jsx("strong",{children:k.function_response.name}),s.jsx("pre",{children:JSON.stringify(k.function_response.response,null,2)})]})]},R))})]},_)})})]}),e.event_type==="tool_result"&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("result"),children:[t.has("result")?s.jsx(At,{size:12}):s.jsx(Rt,{size:12}),s.jsx("span",{children:"Tool Result"})]}),t.has("result")&&s.jsx("div",{className:"section-content",children:s.jsx("pre",{className:"result-content",children:((d=(u=(c=(l=e.data)==null?void 0:l.result)==null?void 0:c.content)==null?void 0:u[0])==null?void 0:d.text)||(typeof((p=e.data)==null?void 0:p.result)=="string"?e.data.result:JSON.stringify((f=e.data)==null?void 0:f.result,null,2))})})]}),e.event_type==="model_response"&&((m=e.data)==null?void 0:m.parts)&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("response"),children:[t.has("response")?s.jsx(At,{size:12}):s.jsx(Rt,{size:12}),s.jsxs("span",{children:["Response (",e.data.parts.length," part",e.data.parts.length!==1?"s":"",")"]}),e.data.token_counts&&s.jsxs("span",{className:"token-badge",children:[e.data.token_counts.input,"↑ ",e.data.token_counts.output,"↓"]})]}),t.has("response")&&s.jsx("div",{className:"section-content",children:e.data.parts.map((C,_)=>s.jsxs("div",{className:"response-part",children:[C.type==="text"&&C.text&&s.jsx("pre",{className:"response-text",children:C.text}),C.type==="function_call"&&s.jsxs("div",{className:"function-call",children:[s.jsxs("strong",{children:["→ ",C.name,"()"]}),C.args&&Object.keys(C.args).length>0&&s.jsx("pre",{children:JSON.stringify(C.args,null,2)})]}),C.thought&&s.jsx("div",{className:"thought-indicator",children:"💭 Thinking"})]},_))})]}),(e.event_type==="callback_start"||e.event_type==="callback_end")&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("callback_info"),children:[t.has("callback_info")?s.jsx(At,{size:12}):s.jsx(Rt,{size:12}),s.jsx("span",{children:"Callback Information"})]}),t.has("callback_info")&&s.jsxs("div",{className:"section-content",children:[s.jsxs("div",{children:[s.jsx("strong",{children:"Name:"})," ",((x=e.data)==null?void 0:x.callback_name)||"unknown"]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Type:"})," ",((b=e.data)==null?void 0:b.callback_type)||"unknown"]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Module Path:"})," ",((T=e.data)==null?void 0:T.module_path)||"unknown"]}),((y=e.data)==null?void 0:y.error)&&s.jsxs("div",{style:{color:"#ef4444",marginTop:"8px"},children:[s.jsxs("div",{children:[s.jsx("strong",{children:"Error:"})," ",e.data.error]}),((g=e.data)==null?void 0:g.error_type)&&s.jsxs("div",{style:{marginTop:"4px",fontSize:"0.9em",opacity:.8},children:[s.jsx("strong",{children:"Type:"})," ",e.data.error_type]}),((h=e.data)==null?void 0:h.stack_trace)&&s.jsxs("div",{style:{marginTop:"8px"},children:[s.jsx("strong",{children:"Stack Trace:"}),s.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"300px",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:e.data.stack_trace})]})]})]})]}),e.event_type==="state_change"&&((P=e.data)==null?void 0:P.state_delta)&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("state_delta"),children:[t.has("state_delta")?s.jsx(At,{size:12}):s.jsx(Rt,{size:12}),s.jsxs("span",{children:["State Changes (",Object.keys(e.data.state_delta).length,")"]})]}),t.has("state_delta")&&s.jsx("div",{className:"section-content",children:Object.entries(e.data.state_delta).map(([C,_])=>s.jsxs("div",{className:"state-delta-item",children:[s.jsx("div",{className:"state-delta-key",children:C}),s.jsx("pre",{className:"state-delta-value",children:typeof _=="string"?_:JSON.stringify(_,null,2)})]},C))})]})]})}function OS({content:e,title:t,onClose:n}){return s.jsxs("div",{className:"modal-overlay",onClick:n,children:[s.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h3",{children:t}),s.jsx("button",{className:"modal-close",onClick:n,children:"×"})]}),s.jsx("div",{className:"modal-body markdown-content",children:s.jsx(lx,{children:e})})]}),s.jsx("style",{children:`
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
      `})]})}function IS({events:e,selectedEventIndex:t,project:n}){const[r,i]=w.useState(null),o=w.useMemo(()=>{var u;const l={};return(u=n==null?void 0:n.app)!=null&&u.state_keys&&n.app.state_keys.forEach(d=>{l[d.name]={value:void 0,timestamp:null,defined:!0,description:d.description,type:d.type}}),n!=null&&n.agents&&n.agents.forEach(d=>{if(d.type==="LlmAgent"&&d.output_key){const p=d.output_key;l[p]||(l[p]={value:void 0,timestamp:null,defined:!0,description:`Output from ${d.name}`,type:"string"})}}),(t!==null?e.slice(0,t+1):e).filter(d=>d.event_type==="state_change").forEach(d=>{var p;(p=d.data)!=null&&p.state_delta&&Object.entries(d.data.state_delta).forEach(([f,m])=>{var x;l[f]={...l[f],value:m,timestamp:d.timestamp,defined:((x=l[f])==null?void 0:x.defined)??!1}})}),l},[e,t,n]),a=Object.entries(o);return s.jsxs(s.Fragment,{children:[r&&s.jsx(OS,{content:r.content,title:r.title,onClose:()=>i(null)}),s.jsxs("div",{className:"state-snapshot",children:[s.jsx("style",{children:`
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
      `}),s.jsx("div",{className:"state-header",children:t!==null?`State after event #${t}`:e.length>0?"State at end of run":"Defined State Keys"}),a.length===0?s.jsx("div",{className:"state-empty",children:"No state keys defined"}):a.map(([l,{value:c,timestamp:u,defined:d,description:p,type:f}])=>s.jsxs("div",{className:`state-entry ${c===void 0?"unset":""}`,children:[s.jsxs("div",{className:"state-key",children:[l,f&&s.jsxs("span",{className:"state-type",children:["(",f,")"]})]}),s.jsx("div",{className:"state-value",onClick:()=>{if(c!==void 0){const m=typeof c=="string"?c:JSON.stringify(c,null,2);i({content:m,title:l})}},style:{cursor:c!==void 0?"pointer":"default"},title:c!==void 0?"Click to view in markdown viewer":void 0,children:c===void 0?"(not set)":typeof c=="string"?c:JSON.stringify(c,null,2)}),p&&s.jsx("div",{className:"state-desc",children:p}),u&&s.jsx("div",{className:"state-time",children:new Date(u*1e3).toLocaleTimeString()})]},l))]})]})}function Ga(e){if(!e)return{text:"",isError:!1};if(e.success===!1)return{text:e.error||"Unknown error",isError:!0};let t=e.result||e;if(typeof t=="string")try{const n=t.replace(/'/g,'"').replace(/True/g,"true").replace(/False/g,"false").replace(/None/g,"null");t=JSON.parse(n)}catch{return{text:t,isError:!1}}return t.content&&Array.isArray(t.content)?{text:t.content.filter(r=>r.type==="text").map(r=>r.text).join(`
`),isError:t.isError===!0}:{text:typeof t=="string"?t:JSON.stringify(t,null,2),isError:!1}}function lf(e,t){if(!t||!t.trim())return e;const n=t.trim();let r=e;try{r=JSON.parse(e)}catch{}if(n.startsWith("js:")){const i=n.slice(3).trim();try{const a=new Function("value","data",`return ${i}`)(e,r);return typeof a=="string"?a:JSON.stringify(a,null,2)}catch(o){return`[JS error: ${o}]`}}if(n.startsWith("."))try{const i=n.slice(1).split(".").filter(Boolean);let o=r;for(const a of i){const l=a.match(/^(\w+)?\[(\d+)\]$/);l?(l[1]&&(o=o[l[1]]),o=o[parseInt(l[2])]):o=o[a]}return o==null?"[No match]":typeof o=="string"?o:JSON.stringify(o,null,2)}catch(i){return`[Path error: ${i.message}]`}try{const o=new Function("value","data",`return ${n}`)(e,r);return typeof o=="string"?o:JSON.stringify(o,null,2)}catch(i){return`[Transform error: ${i.message}]`}}function $S({project:e,selectedEventIndex:t}){var te;const{watches:n,updateWatch:r,addWatch:i,removeWatch:o,runEvents:a}=at(),[l,c]=w.useState(!1),[u,d]=w.useState(null),[p,f]=w.useState({}),[m,x]=w.useState(new Set),[b,T]=w.useState(""),[y,g]=w.useState(""),[h,P]=w.useState({}),[C,_]=w.useState(""),[N,k]=w.useState([]),[R,S]=w.useState(null),[v,z]=w.useState(null),[F,U]=w.useState(!1);w.useEffect(()=>{cu().then(k).catch(console.error)},[]);const D=w.useMemo(()=>{const V=e.mcp_servers||[],se=new Set(V.map(O=>O.name)),pe=N.filter(O=>!se.has(O.name));return[...V,...pe]},[e.mcp_servers,N]),ne=w.useCallback(async V=>{if(!(p[V]||m.has(V))){x(se=>new Set([...se,V]));try{const se=await Se(`/projects/${e.id}/mcp-servers/${encodeURIComponent(V)}/test-connection`,{method:"POST"});se.success&&f(pe=>({...pe,[V]:se.tools}))}catch(se){console.error("Failed to load tools:",se)}finally{x(se=>{const pe=new Set(se);return pe.delete(V),pe})}}},[e.id,p,m]);w.useEffect(()=>{var O;if(u)return;if(!b||!y){P({});return}const se=(p[b]||[]).find(H=>H.name===y);if(!((O=se==null?void 0:se.parameters)!=null&&O.properties)){P({});return}const pe={};Object.entries(se.parameters.properties).forEach(([H,K])=>{K.type==="string"?pe[H]=K.default||"":K.type==="number"||K.type==="integer"?pe[H]=K.default||0:K.type==="boolean"?pe[H]=K.default||!1:pe[H]=K.default||null}),P(pe)},[b,y,p,u]);const L=()=>{d(null),T(""),g(""),P({}),_(""),S(null),z(null),c(!0)},I=V=>{if(d(V.id),T(V.serverName),g(V.toolName),P({...V.args}),_(V.transform||""),V.result){const{text:se}=Ga(V.result);S(se),z(null)}else S(null),z(null);p[V.serverName]||ne(V.serverName),c(!0)},A=async()=>{if(!(!b||!y)){U(!0),z(null);try{const V=await Se(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:b,tool_name:y,arguments:h})}),{text:se,isError:pe}=Ga(V);pe?(z(se),S(null)):(S(se),z(null))}catch(V){z(String(V)),S(null)}finally{U(!1)}}},j=w.useMemo(()=>R?!C||!C.trim()?R:lf(R,C):null,[R,C]),J=()=>{if(!(!b||!y)){if(u){r(u,{serverName:b,toolName:y,args:{...h},transform:C||void 0});const V=n.find(se=>se.id===u);V&&E({...V,serverName:b,toolName:y,args:h,transform:C||void 0,history:V.history||[]})}else{const V={id:`watch-${Date.now()}`,serverName:b,toolName:y,args:{...h},transform:C||void 0,history:[]};i(V),E(V)}c(!1)}},Q=V=>{o(V)},E=w.useCallback(async(V,se)=>{r(V.id,{isLoading:!0,error:void 0});const pe=se??a.length-1,O=Date.now();try{const H=await Se(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:V.serverName,tool_name:V.toolName,arguments:V.args})}),K={eventIndex:pe,timestamp:O,result:H},Z=[...V.history||[],K];r(V.id,{result:H,isLoading:!1,lastRun:O,history:Z})}catch(H){const K={eventIndex:pe,timestamp:O,error:String(H)},Z=[...V.history||[],K];r(V.id,{error:String(H),isLoading:!1,lastRun:O,history:Z})}},[e.id,r,a.length]),xe=()=>{n.forEach(V=>E(V))},M=w.useMemo(()=>!b||!y?null:(p[b]||[]).find(se=>se.name===y),[b,y,p]);return s.jsxs("div",{className:"tool-watch-panel",children:[s.jsxs("div",{className:"watch-header",children:[s.jsx(Zi,{size:14}),s.jsx("span",{children:"Tool Watch"}),s.jsx("span",{className:"watch-auto-badge",title:"Watches auto-refresh on every event",children:"⚡ Auto"}),s.jsxs("div",{className:"watch-actions",children:[s.jsx("button",{className:"watch-btn",onClick:xe,title:"Refresh all",children:s.jsx(Mn,{size:12})}),s.jsx("button",{className:"watch-btn",onClick:L,title:"Add watch",children:s.jsx(Ge,{size:12})})]})]}),n.length===0?s.jsxs("div",{className:"watch-empty",children:[s.jsx(Zi,{size:20,style:{opacity:.3}}),s.jsx("span",{children:"No watch expressions"}),s.jsxs("button",{className:"add-watch-btn",onClick:L,children:[s.jsx(Ge,{size:12})," Add Tool Watch"]})]}):s.jsx("div",{className:"watch-list",children:n.map(V=>{let se=V.result,pe=V.error;if(t!==null&&V.history&&V.history.length>0){const ae=V.history.filter(q=>q.eventIndex<=t);if(ae.length>0){const q=ae[ae.length-1];se=q.result,pe=q.error}else se=void 0,pe=void 0}const{text:O,isError:H}=se?Ga(se):{text:"",isError:!1},K=se?lf(O,V.transform):"",Z=pe||H;return s.jsxs("div",{className:`watch-item ${Z?"error":""}`,children:[s.jsxs("div",{className:"watch-item-header",children:[s.jsxs("span",{className:"watch-expr",children:[s.jsx("span",{className:"watch-server",children:V.serverName}),s.jsx("span",{className:"watch-tool",children:V.toolName}),Object.keys(V.args).length>0&&s.jsxs("span",{className:"watch-args",children:["(",Object.entries(V.args).map(([ae,q])=>`${ae}=${JSON.stringify(q)}`).join(", "),")"]}),t!==null&&s.jsxs("span",{className:"watch-time-indicator",children:["@",t]})]}),s.jsxs("div",{className:"watch-item-actions",children:[s.jsx("button",{onClick:()=>I(V),title:"Edit watch",children:s.jsx(Yt,{size:10})}),s.jsx("button",{onClick:()=>E(V),title:"Refresh",children:V.isLoading?s.jsx(Mn,{size:10,className:"spin"}):s.jsx(Mn,{size:10})}),s.jsx("button",{onClick:()=>Q(V.id),title:"Remove",children:s.jsx(De,{size:10})})]})]}),s.jsx("div",{className:"watch-result",children:V.isLoading?s.jsx("span",{className:"loading",children:"Loading..."}):pe?s.jsx("span",{className:"error",children:pe}):se?s.jsx("pre",{className:H?"error-text":"",children:K}):s.jsx("span",{className:"no-result",children:t!==null?"No data at this event":"Not yet run"})})]},V.id)})}),l&&s.jsx("div",{className:"watch-dialog-overlay",onClick:()=>c(!1),children:s.jsxs("div",{className:"watch-dialog",onClick:V=>V.stopPropagation(),children:[s.jsxs("div",{className:"dialog-header",children:[s.jsx("span",{children:u?"Edit Watch":"Add Tool Watch"}),s.jsx("button",{onClick:()=>c(!1),children:s.jsx(hg,{size:14})})]}),s.jsxs("div",{className:"dialog-body",children:[s.jsxs("div",{className:"form-row",children:[s.jsx("label",{children:"MCP Server"}),s.jsxs("select",{value:b,onChange:V=>{T(V.target.value),u||g(""),V.target.value&&ne(V.target.value)},children:[s.jsx("option",{value:"",children:"Select server..."}),D.map(V=>s.jsx("option",{value:V.name,children:V.name},V.name))]})]}),s.jsxs("div",{className:"form-row",children:[s.jsx("label",{children:"Tool"}),s.jsxs("select",{value:y,onChange:V=>g(V.target.value),disabled:!b||m.has(b),children:[s.jsx("option",{value:"",children:m.has(b)?"Loading tools...":"Select tool..."}),(p[b]||[]).map(V=>s.jsx("option",{value:V.name,children:V.name},V.name))]})]}),(M==null?void 0:M.description)&&s.jsx("div",{className:"tool-desc",children:M.description}),((te=M==null?void 0:M.parameters)==null?void 0:te.properties)&&Object.keys(M.parameters.properties).length>0&&s.jsxs("div",{className:"tool-args",children:[s.jsx("label",{children:"Arguments"}),Object.entries(M.parameters.properties).map(([V,se])=>{var pe,O;return s.jsxs("div",{className:"arg-row",children:[s.jsxs("span",{className:"arg-name",children:[V,((pe=M.parameters.required)==null?void 0:pe.includes(V))&&s.jsx("span",{className:"required",children:"*"})]}),s.jsx("input",{type:se.type==="number"||se.type==="integer"?"number":"text",value:typeof h[V]=="object"?JSON.stringify(h[V]):h[V]??"",onChange:H=>P(K=>({...K,[V]:H.target.value})),placeholder:((O=se.description)==null?void 0:O.slice(0,40))||V})]},V)})]}),b&&y&&s.jsxs("div",{className:"test-section",children:[s.jsxs("div",{className:"test-header",children:[s.jsx("label",{children:"Test & Preview"}),s.jsxs("button",{className:"test-btn",onClick:A,disabled:F,children:[F?s.jsx(Mn,{size:12,className:"spin"}):s.jsx(Jn,{size:12}),F?"Running...":"Test Run"]})]}),v&&s.jsxs("div",{className:"test-result error",children:[s.jsx("span",{className:"test-label",children:"Error:"}),s.jsx("pre",{children:v})]}),R&&s.jsxs("div",{className:"test-result",children:[s.jsx("span",{className:"test-label",children:"Raw Result:"}),s.jsx("pre",{children:R})]})]}),s.jsxs("div",{className:"form-row transform-row",children:[s.jsx("label",{children:"Transform (optional)"}),s.jsx("input",{type:"text",value:C,onChange:V=>_(V.target.value),placeholder:"e.g., .items[0].name or .content[].text"}),s.jsxs("div",{className:"transform-hints",children:[s.jsx("span",{className:"hint-title",children:"Path:"}),s.jsx("code",{onClick:()=>_(".items[0].name"),children:".items[0].name"}),s.jsx("code",{onClick:()=>_(".content[0].text"),children:".content[0].text"}),s.jsx("code",{onClick:()=>_(".result.data"),children:".result.data"}),s.jsx("span",{className:"hint-title",children:"JS:"}),s.jsx("code",{onClick:()=>_("js:value.split('\\n')[0]"),children:"js:value.split('\\n')[0]"}),s.jsx("code",{onClick:()=>_("js:data.items?.length"),children:"js:data.items?.length"})]})]}),R&&C&&s.jsxs("div",{className:"transform-preview",children:[s.jsx("span",{className:"test-label",children:"Transform Preview:"}),s.jsx("pre",{className:j!=null&&j.startsWith("[Transform error")?"error":"",children:j})]})]}),s.jsxs("div",{className:"dialog-footer",children:[s.jsx("button",{className:"cancel-btn",onClick:()=>c(!1),children:"Cancel"}),s.jsx("button",{className:"add-btn",onClick:J,disabled:!b||!y,children:u?"Save Changes":"Add Watch"})]})]})})]})}function DS(){var Mu;const{project:e,isRunning:t,setIsRunning:n,runEvents:r,addRunEvent:i,clearRunEvents:o,clearWatchHistories:a,runAgentId:l,setRunAgentId:c,watches:u,updateWatch:d,currentSessionId:p,setCurrentSessionId:f}=at(),[m,x]=w.useState(""),[b,T]=w.useState(null),[y,g]=w.useState(null),[h,P]=w.useState(null),[C,_]=w.useState(""),[N,k]=w.useState(new Set(["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_start","callback_end"])),[R,S]=w.useState(!1),[v,z]=w.useState(!0),[F,U]=w.useState(!0),[D,ne]=w.useState(!1),[L,I]=w.useState(360),[A,j]=w.useState(!1),[J,Q]=w.useState([60,80,100,80,1]),[E,xe]=w.useState(null),M=w.useRef(0),te=w.useRef(0),[V,se]=w.useState([]),[pe,O]=w.useState(null),[H,K]=w.useState(!1),Z=w.useRef(0),ae=w.useCallback(async($,ue)=>{if(!e)return;d($.id,{isLoading:!0,error:void 0});const he=ue??r.length-1,be=Date.now();try{const Ce=await Se(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:$.serverName,tool_name:$.toolName,arguments:$.args})}),Ue={eventIndex:he,timestamp:be,result:Ce},Zt=[...$.history||[],Ue];d($.id,{result:Ce,isLoading:!1,lastRun:be,history:Zt})}catch(Ce){const Ue={eventIndex:he,timestamp:be,error:String(Ce)},Zt=[...$.history||[],Ue];d($.id,{error:String(Ce),isLoading:!1,lastRun:be,history:Zt})}},[e==null?void 0:e.id,d,r.length]);w.useEffect(()=>{if(r.length>Z.current&&u.length>0){const $=r.length-1;u.forEach(ue=>{ue.isLoading||ae(ue,$)})}Z.current=r.length},[r.length,u,ae]),w.useEffect(()=>{l!==null&&(re(l),c(null))},[l,c]);const[q,re]=w.useState(null),ie=w.useRef(null),ge=w.useRef(null);w.useEffect(()=>{if(!A)return;const $=he=>{if(!ge.current)return;const Ce=ge.current.getBoundingClientRect().right-he.clientX;I(Math.min(600,Math.max(200,Ce)))},ue=()=>{j(!1)};return document.addEventListener("mousemove",$),document.addEventListener("mouseup",ue),()=>{document.removeEventListener("mousemove",$),document.removeEventListener("mouseup",ue)}},[A]),w.useEffect(()=>{if(E===null)return;const $=he=>{const be=he.clientX-M.current,Ce=Math.max(40,te.current+be);Q(Ue=>{const Zt=[...Ue];return Zt[E]=Ce,Zt})},ue=()=>{xe(null)};return document.addEventListener("mousemove",$),document.addEventListener("mouseup",ue),document.body.style.cursor="col-resize",document.body.style.userSelect="none",()=>{document.removeEventListener("mousemove",$),document.removeEventListener("mouseup",ue),document.body.style.cursor="",document.body.style.userSelect=""}},[E]);const ve=($,ue)=>{ue.preventDefault(),M.current=ue.clientX,te.current=J[$],xe($)},B=J.map(($,ue)=>ue===J.length-1?`minmax(${$}px, 1fr)`:`${$}px`).join(" "),Y=w.useMemo(()=>r.length===0?{min:0,max:0}:{min:r[0].timestamp,max:r[r.length-1].timestamp},[r]),oe=w.useMemo(()=>r.filter(($,ue)=>{var he,be,Ce;if(h&&($.timestamp<h[0]||$.timestamp>h[1])||N.size>0&&!N.has($.event_type))return!1;if(v&&$.event_type==="model_response"){const Ue=((be=(he=$.data)==null?void 0:he.response_content)==null?void 0:be.parts)||((Ce=$.data)==null?void 0:Ce.parts)||[],Zt=Ue.some(sa=>sa.type==="function_call"),vx=Ue.some(sa=>sa.type==="text");if(!Zt&&!vx)return!1}return!(C&&!JSON.stringify($).toLowerCase().includes(C.toLowerCase()))}),[r,h,N,C,v]),me=w.useMemo(()=>{var be;let $=0,ue=0;const he=y!==null?y+1:r.length;for(let Ce=0;Ce<he;Ce++){const Ue=r[Ce];Ue.event_type==="model_response"&&((be=Ue.data)!=null&&be.token_counts)&&($+=Ue.data.token_counts.input||0,ue+=Ue.data.token_counts.output||0)}return{input:$,output:ue,total:$+ue}},[r,y]),kt=y!==null?r[y]:null;w.useEffect(()=>{if(!e){se([]);return}(async()=>{K(!0);try{const ue=await Kl(e.id);se(ue)}catch(ue){console.error("Failed to load sessions:",ue),se([])}finally{K(!1)}})()},[e]);const nt=w.useCallback(async $=>{if(!e){O(null);return}if(!$){o(),a(),f(null),O(null),g(null),P(null);return}try{const ue=await qh(e.id,$);o(),a(),f(ue.id),O($),g(null),P(null);for(const he of ue.events)i(he)}catch(ue){alert(`Failed to load session: ${ue.message||"Unknown error"}`)}},[e,o,a,f,i]);w.useEffect(()=>{if(!e||V.length===0||H)return;const ue=new URLSearchParams(window.location.search).get("session");if(ue)if(V.some(be=>be.id===ue)){nt(ue);const be=window.location.pathname;window.history.replaceState({},"",be)}else console.warn(`Session ${ue} not found in available sessions`)},[e,V,H,nt]),w.useEffect(()=>{t&&ie.current&&(ie.current.scrollTop=ie.current.scrollHeight)},[r.length,t]);const W=w.useCallback(()=>{if(!e||!m.trim()||t)return;b&&(b.close(),T(null)),p||(o(),a(),O(null)),n(!0),g(null),P(null);const $=Gh(e.id);T($),$.onopen=()=>{$.send(JSON.stringify({message:m,agent_id:q||void 0,session_id:p||void 0,sandbox_mode:R}))},$.onmessage=ue=>{var be;const he=JSON.parse(ue.data);if(he.event_type==="agent_start"&&((be=he.data)!=null&&be.session_id)){const Ce=he.data.session_id;he.data.session_reused,f(Ce),Ce&&V.some(Ue=>Ue.id===Ce)&&O(Ce)}else he.type==="session_started"?(f(he.session_id),he.session_id&&V.some(Ce=>Ce.id===he.session_id)&&O(he.session_id)):he.type==="sandbox_starting"?i({timestamp:Date.now()/1e3,event_type:"agent_start",agent_name:"sandbox",data:{message:"Starting Docker sandbox..."}}):he.type==="sandbox_started"?i({timestamp:Date.now()/1e3,event_type:"agent_start",agent_name:"sandbox",data:{message:`Sandbox started (ID: ${he.sandbox_id})`}}):he.type==="sandbox_response"?i({timestamp:Date.now()/1e3,event_type:"model_response",agent_name:"sandbox",data:he.data}):he.type==="completed"?(n(!1),$.close()):he.type==="error"?(n(!1),i({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:he.error}})):i(he)},$.onerror=()=>{n(!1),i({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:"WebSocket connection error"}})},$.onclose=()=>{n(!1)}},[e,m,t,b,o,n,i,q,p,R]),G=w.useCallback(()=>{b==null||b.close(),n(!1)},[b,n]);w.useEffect(()=>{const $=ue=>{if((ue.metaKey||ue.ctrlKey)&&ue.key==="Enter"){ue.preventDefault(),W();return}if(ue.key==="ArrowDown"||ue.key==="ArrowUp"){if(ue.target instanceof HTMLInputElement||ue.target instanceof HTMLTextAreaElement||(ue.preventDefault(),oe.length===0))return;if(ue.key==="ArrowDown")if(y===null){const he=r.indexOf(oe[0]);g(he)}else{const he=oe.findIndex(be=>r.indexOf(be)===y);if(he<oe.length-1){const be=r.indexOf(oe[he+1]);g(be)}}else if(ue.key==="ArrowUp")if(y===null){const he=r.indexOf(oe[oe.length-1]);g(he)}else{const he=oe.findIndex(be=>r.indexOf(be)===y);if(he>0){const be=r.indexOf(oe[he-1]);g(be)}}}};return window.addEventListener("keydown",$),()=>window.removeEventListener("keydown",$)},[W,oe,y,r]);const fe=w.useCallback(()=>{var Ce;if(r.length===0)return;const $={version:1,exportedAt:new Date().toISOString(),projectId:e==null?void 0:e.id,projectName:e==null?void 0:e.name,agentId:q||((Ce=e==null?void 0:e.app)==null?void 0:Ce.root_agent_id),events:r},ue=new Blob([JSON.stringify($,null,2)],{type:"application/json"}),he=URL.createObjectURL(ue),be=document.createElement("a");be.href=he,be.download=`run-${(e==null?void 0:e.name)||"export"}-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,document.body.appendChild(be),be.click(),document.body.removeChild(be),URL.revokeObjectURL(he)},[r,e,q]),le=w.useCallback(async()=>{if(!p||!e){alert("No active session to save");return}try{const $=await Hh(p);if($.success){alert($.message||"Session saved to memory successfully");try{const ue=await Kl(e.id);se(ue)}catch{}}else alert(`Failed to save to memory: ${$.error||"Unknown error"}`)}catch($){alert(`Error saving to memory: ${$.message||"Unknown error"}`)}},[p,e]),[je,Be]=w.useState(!1),[pn,Vt]=w.useState([]),[Wt,_n]=w.useState(""),[Xe,Sn]=w.useState("Test Case from Session"),[Lt,Ru]=w.useState(!1),gx=w.useCallback(async()=>{if(!p||!e){alert("No active session to create test case from");return}try{const $=await Se(`/projects/${e.id}/eval-sets`);if(Vt($.eval_sets||[]),!$.eval_sets||$.eval_sets.length===0){confirm(`No evaluation sets found. Would you like to create one first?

Go to the Evals tab to create an evaluation set.`)&&(window.location.href=`/project/${e.id}/evals`);return}_n($.eval_sets[0].id),Be(!0)}catch($){alert(`Error loading eval sets: ${$.message||"Unknown error"}`)}},[p,e]),xx=w.useCallback(async()=>{if(!p||!e||!Wt){alert("Please select an evaluation set");return}Ru(!0);try{const $=await Se(`/projects/${e.id}/session-to-eval-case`,{method:"POST",body:JSON.stringify({session_id:p,eval_set_id:Wt,case_name:Xe})});Be(!1),alert(`Test case "${$.eval_case.name}" created successfully!

Token count: ${$.session_token_count.toLocaleString()} tokens

Go to the Evals tab to view and edit the test case.`)}catch($){alert(`Error creating test case: ${$.message||"Unknown error"}`)}finally{Ru(!1)}},[p,e,Wt,Xe]),yx=w.useCallback(()=>{const $=document.createElement("input");$.type="file",$.accept=".json",$.onchange=async ue=>{var be;const he=(be=ue.target.files)==null?void 0:be[0];if(he)try{const Ce=await he.text(),Ue=JSON.parse(Ce);if(!Ue.events||!Array.isArray(Ue.events)){alert("Invalid run file: missing events array");return}o(),a(),g(null),P(null),Ue.events.forEach(Zt=>{i(Zt)})}catch(Ce){alert(`Failed to load run file: ${Ce}`)}},$.click()},[o,a,i]);return w.useEffect(()=>{if(y!==null){const $=document.querySelector(".event-row.selected");$==null||$.scrollIntoView({behavior:"smooth",block:"nearest"})}},[y]),e?s.jsxs("div",{className:`run-panel ${A?"resizing":""}`,children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"input-area",children:[s.jsxs("select",{className:"agent-selector",value:q||"",onChange:$=>re($.target.value||null),disabled:t,title:"Select which agent to run",children:[s.jsx("option",{value:"",children:e.app.root_agent_id?`Root: ${((Mu=e.agents.find($=>$.id===e.app.root_agent_id))==null?void 0:Mu.name)||e.app.root_agent_id}`:"No root agent"}),e.agents.filter($=>$.id!==e.app.root_agent_id).map($=>s.jsxs("option",{value:$.id,children:[$.name," (",$.type.replace("Agent",""),")"]},$.id))]}),s.jsxs("select",{className:"agent-selector",value:pe||"",onChange:$=>nt($.target.value||null),disabled:t||H,style:{minWidth:180},title:"Load a saved session",children:[s.jsx("option",{value:"",children:H?"Loading...":"Load Session..."}),V.map($=>{const ue=new Date($.started_at*1e3),he=$.duration?`${$.duration.toFixed(1)}s`:"?";return s.jsxs("option",{value:$.id,children:[ue.toLocaleString()," (",$.event_count," events, ",he,")"]},$.id)})]}),s.jsx("input",{type:"text",placeholder:"Enter your query...",value:m,onChange:$=>x($.target.value),onKeyDown:$=>$.key==="Enter"&&!$.shiftKey&&W(),disabled:t}),t?s.jsxs("button",{className:"stop",onClick:G,children:[s.jsx(A0,{size:14}),"Stop"]}):s.jsxs("button",{onClick:W,disabled:!m.trim(),children:[s.jsx(Jn,{size:14}),"Run"]}),s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"4px",marginLeft:"12px",fontSize:"11px",color:R?"#22d3ee":"#71717a",cursor:"pointer"},title:"Run in isolated Docker container",children:[s.jsx("input",{type:"checkbox",checked:R,onChange:$=>S($.target.checked),disabled:t,style:{accentColor:"#22d3ee"}}),"🐳 Sandbox"]})]}),s.jsxs("div",{className:"toolbar",children:[s.jsxs("div",{className:"toolbar-section",children:[s.jsx(dg,{size:12,style:{color:"#71717a"}}),s.jsx("input",{type:"text",placeholder:"Filter events...",value:C,onChange:$=>_($.target.value)})]}),s.jsx("div",{className:"toolbar-divider"}),s.jsxs("div",{className:"toolbar-section",children:[["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change"].map($=>s.jsx("button",{className:`filter-chip ${N.has($)?"active":""}`,onClick:()=>{const ue=new Set(N);ue.has($)?ue.delete($):ue.add($),k(ue)},children:$.replace("_"," ")},$)),s.jsx("button",{className:`filter-chip ${N.has("callback_start")&&N.has("callback_end")?"active":""}`,onClick:()=>{const $=new Set(N);$.has("callback_start")&&$.has("callback_end")?($.delete("callback_start"),$.delete("callback_end")):($.add("callback_start"),$.add("callback_end")),k($)},title:"Show/hide callback events",children:"callback"}),s.jsx("button",{className:`filter-chip ${v?"active":""}`,onClick:()=>z(!v),title:"Hide LLM_RESP (complete) events",children:"hide (complete)"})]}),s.jsx("div",{className:"toolbar-divider"}),s.jsxs("div",{className:"toolbar-section",children:[s.jsxs("button",{className:`toolbar-btn ${F?"active":""}`,onClick:()=>U(!F),children:[s.jsx(yn,{size:12}),"State"]}),s.jsxs("button",{className:`toolbar-btn ${D?"active":""}`,onClick:()=>ne(!D),children:[s.jsx(ip,{size:12}),"Tools"]})]}),s.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:[s.jsxs("span",{style:{fontSize:10,color:"#71717a"},children:[oe.length," / ",r.length," events"]}),h&&s.jsx("button",{className:"toolbar-btn",onClick:()=>P(null),children:"Clear Range"})]})]}),s.jsxs("div",{className:"main-content",ref:ge,children:[s.jsxs("div",{className:"event-list-container",children:[s.jsxs("div",{className:"event-list-header",style:{gridTemplateColumns:B},children:[s.jsxs("div",{className:"header-cell",children:[s.jsx("span",{children:"#"}),s.jsx("div",{className:`column-resize-handle ${E===0?"active":""}`,onMouseDown:$=>ve(0,$)})]}),s.jsxs("div",{className:"header-cell",children:[s.jsx("span",{children:"Time"}),s.jsx("div",{className:`column-resize-handle ${E===1?"active":""}`,onMouseDown:$=>ve(1,$)})]}),s.jsxs("div",{className:"header-cell",children:[s.jsx("span",{children:"Agent"}),s.jsx("div",{className:`column-resize-handle ${E===2?"active":""}`,onMouseDown:$=>ve(2,$)})]}),s.jsxs("div",{className:"header-cell",children:[s.jsx("span",{children:"Type"}),s.jsx("div",{className:`column-resize-handle ${E===3?"active":""}`,onMouseDown:$=>ve(3,$)})]}),s.jsx("div",{className:"header-cell",children:s.jsx("span",{children:"Info"})})]}),s.jsx("div",{className:"event-list",ref:ie,children:oe.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(ug,{size:24}),s.jsx("span",{children:r.length===0?"No events yet":"No matching events"})]}):oe.map(($,ue)=>{const he=r.indexOf($),be=af[$.event_type]||af.error,Ce=LS[$.event_type]||Co;return s.jsxs("div",{className:`event-row ${y===he?"selected":""}`,style:{background:be.bg,gridTemplateColumns:B},onClick:()=>g(he),onDoubleClick:()=>{U(!1),ne(!1)},children:[s.jsx("div",{className:"index",children:he}),s.jsx("div",{className:"time",style:{color:be.fg},children:RS($.timestamp,Y.min)}),s.jsx("div",{className:"agent",style:{color:be.fg},children:$.agent_name}),s.jsxs("div",{className:"type",style:{color:be.fg},children:[s.jsx(Ce,{size:10}),$.event_type.split("_")[0]]}),s.jsx("div",{className:"summary",children:AS($)})]},he)})})]}),s.jsxs("div",{className:"side-panel-container",style:{width:L},children:[s.jsx("div",{className:`resize-handle ${A?"active":""}`,onMouseDown:()=>j(!0)}),s.jsxs("div",{className:"side-panel",style:{width:L-4},children:[s.jsxs("div",{className:"side-panel-tabs",children:[s.jsxs("button",{className:`side-panel-tab ${!F&&!D?"active":""}`,onClick:()=>{U(!1),ne(!1)},children:[s.jsx(Zi,{size:12,style:{marginRight:4}}),"Details"]}),s.jsxs("button",{className:`side-panel-tab ${F?"active":""}`,onClick:()=>{U(!0),ne(!1)},children:[s.jsx(yn,{size:12,style:{marginRight:4}}),"State"]}),s.jsxs("button",{className:`side-panel-tab ${D?"active":""}`,onClick:()=>{ne(!0),U(!1)},children:[s.jsx(ip,{size:12,style:{marginRight:4}}),"Tools"]})]}),s.jsx("div",{className:"side-panel-content",children:D?s.jsx($S,{project:e,selectedEventIndex:y}):F?s.jsx(IS,{events:r,selectedEventIndex:y,project:e}):kt?s.jsx(MS,{event:kt}):s.jsxs("div",{className:"empty-state",children:[s.jsx(Zi,{size:24}),s.jsx("span",{children:"Select an event to view details"})]})})]})]})]}),s.jsxs("div",{className:"stats-bar",children:[s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Events:"}),s.jsx("span",{className:"stat-value",children:r.length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Tool Calls:"}),s.jsx("span",{className:"stat-value",children:r.filter($=>$.event_type==="tool_call").length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Model Calls:"}),s.jsx("span",{className:"stat-value",children:r.filter($=>$.event_type==="model_call").length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Callbacks:"}),s.jsx("span",{className:"stat-value",children:r.filter($=>$.event_type==="callback_start").length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"State Changes:"}),s.jsx("span",{className:"stat-value",children:r.filter($=>$.event_type==="state_change").length})]}),r.length>0&&s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Duration:"}),s.jsxs("span",{className:"stat-value",children:[((r[r.length-1].timestamp-r[0].timestamp)*1e3).toFixed(0),"ms"]})]}),me.total>0&&s.jsx("div",{className:"stat-item token-stats",children:s.jsxs("span",{className:"stat-value token-value",children:[s.jsxs("span",{className:"token-in",title:"Input tokens",children:[me.input.toLocaleString(),"↑"]}),s.jsxs("span",{className:"token-out",title:"Output tokens",children:[me.output.toLocaleString(),"↓"]}),s.jsx("span",{className:"token-total",title:"Total tokens",children:me.total.toLocaleString()})]})}),s.jsx("div",{className:"stats-bar-spacer"}),s.jsxs("button",{className:"stats-bar-btn",onClick:yx,title:"Load a saved run",children:[s.jsx(Xo,{size:12}),"Load"]}),s.jsxs("button",{className:"stats-bar-btn",onClick:fe,disabled:r.length===0,title:"Save current run to file",children:[s.jsx(us,{size:12}),"Save"]}),s.jsxs("button",{className:"stats-bar-btn",onClick:le,disabled:!p||r.length===0,title:"Save current session to memory",children:[s.jsx(yn,{size:12}),"Save to Memory"]}),s.jsxs("button",{className:"stats-bar-btn",onClick:gx,disabled:!p||r.length===0,title:"Create evaluation test case from this session",style:{background:"rgba(var(--accent-primary-rgb), 0.15)"},children:[s.jsx(Xl,{size:12}),"Create Test Case"]})]}),je&&s.jsx("div",{className:"dialog-overlay",style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>Be(!1),children:s.jsxs("div",{className:"dialog-content",style:{background:"var(--bg-secondary)",borderRadius:"var(--radius-md)",padding:24,width:400,maxWidth:"90vw",border:"1px solid var(--border-color)"},onClick:$=>$.stopPropagation(),children:[s.jsxs("h3",{style:{marginBottom:16,display:"flex",alignItems:"center",gap:8},children:[s.jsx(Xl,{size:18}),"Create Test Case from Session"]}),s.jsxs("div",{style:{marginBottom:16},children:[s.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Test Case Name"}),s.jsx("input",{type:"text",value:Xe,onChange:$=>Sn($.target.value),placeholder:"Enter test case name",style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"}})]}),s.jsxs("div",{style:{marginBottom:20},children:[s.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Add to Evaluation Set"}),s.jsx("select",{value:Wt,onChange:$=>_n($.target.value),style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"},children:pn.map($=>s.jsx("option",{value:$.id,children:$.name},$.id))})]}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:16},children:"This will extract user messages and tool calls from the current session to create a replayable test case. You can edit the expected responses and tool calls in the Evals tab after creation."}),s.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[s.jsx("button",{className:"btn btn-secondary",onClick:()=>Be(!1),children:"Cancel"}),s.jsx("button",{className:"btn btn-primary",onClick:xx,disabled:Lt||!Wt,children:Lt?"Creating...":"Create Test Case"})]})]})})]}):s.jsx("div",{className:"run-panel empty",children:"No project loaded"})}const FS=()=>Math.random().toString(36).substring(2,10),BS=()=>({id:FS(),name:"New SkillSet",description:"",embedding_model:void 0,app_model_id:void 0,external_store_type:void 0,external_store_config:{},search_enabled:!0,preload_enabled:!0,preload_top_k:3,preload_min_score:.4,sources:[],entry_count:0});function US(){const{project:e,setProject:t}=at(),[n,r]=w.useState(null),[i,o]=w.useState(null),[a,l]=w.useState(""),[c,u]=w.useState([]),[d,p]=w.useState(!1),[f,m]=w.useState(!1),[x,b]=w.useState(""),[T,y]=w.useState(!1),[g,h]=w.useState(null),[P,C]=w.useState(null),_=w.useRef(null),N=(e==null?void 0:e.skillsets)||[],k=N.find(A=>A.id===n);w.useEffect(()=>{sg().then(A=>C(A.available)).catch(()=>C(!1))},[]),w.useEffect(()=>{N.length>0&&!n&&r(N[0].id)},[N,n]),w.useEffect(()=>{!e||!n||R()},[e==null?void 0:e.id,n]);const R=w.useCallback(async()=>{if(!(!e||!n))try{const A=await eg(e.id,n);o(A),v(n,{entry_count:A.entry_count})}catch(A){console.error("Failed to load stats:",A)}},[e==null?void 0:e.id,n]),S=A=>{e&&t({...e,...A})},v=(A,j)=>{e&&t({...e,skillsets:e.skillsets.map(J=>J.id===A?{...J,...j}:J)})},z=()=>{if(!e)return;const A=BS();S({skillsets:[...N,A]}),r(A.id)},F=A=>{e&&confirm("Delete this SkillSet and all its data?")&&(S({skillsets:N.filter(j=>j.id!==A)}),n===A&&r(N.length>1?N[0].id:null),o(null),u([]))},U=async()=>{if(!(!e||!n||!a.trim())){p(!0),h(null);try{const A=await rg(e.id,n,a.trim(),10,0);u(A.results)}catch(A){h("Search failed"),console.error(A)}finally{p(!1)}}},D=async()=>{if(!(!e||!n||!x.trim())){y(!0),h(null);try{const A=await tg(e.id,n,x.trim());b(""),await R(),alert(`Added ${A.chunks_added} chunks from ${A.source_name}`)}catch(A){h(A.message||"Failed to fetch URL")}finally{y(!1)}}},ne=async A=>{var J;const j=(J=A.target.files)==null?void 0:J[0];if(!(!j||!e||!n)){h(null);try{const Q=await ng(e.id,n,j);await R(),alert(`Added ${Q.chunks_added} chunks from ${Q.source_name}`)}catch(Q){h(Q.message||"Upload failed")}_.current&&(_.current.value="")}},L=async()=>{if(!(!e||!n)&&confirm("Delete all entries in this SkillSet?"))try{await ig(e.id,n),await R(),u([])}catch{h("Clear failed")}},I=A=>{const j=Math.round(A*100),J=160,Q=70,E=20+(1-A)*15,xe=.15+A*.25;return`linear-gradient(90deg, hsla(${J}, ${Q}%, ${E}%, ${xe}) 0%, transparent ${j}%)`};return e?s.jsxs("div",{className:"skillsets-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"skillset-list",children:[s.jsxs("div",{className:"skillset-list-header",children:[s.jsx("h3",{children:"SkillSets"}),s.jsx("button",{className:"btn-icon",onClick:z,title:"Add SkillSet",children:s.jsx(Ge,{size:16})})]}),N.length===0?s.jsxs("div",{className:"empty-state",style:{padding:"40px 0"},children:[s.jsx(yn,{size:32}),s.jsx("span",{children:"No SkillSets"}),s.jsxs("button",{className:"btn-primary",onClick:z,children:[s.jsx(Ge,{size:14})," Create SkillSet"]})]}):N.map(A=>s.jsxs("div",{className:`skillset-item ${n===A.id?"selected":""}`,onClick:()=>r(A.id),children:[s.jsx(yn,{size:16,style:{color:"var(--accent)",flexShrink:0}}),s.jsxs("div",{className:"skillset-item-info",children:[s.jsx("div",{className:"skillset-item-name",children:A.name}),s.jsxs("div",{className:"skillset-item-count",children:[A.entry_count||0," entries"]})]}),s.jsx("button",{className:"skillset-item-delete",onClick:j=>{j.stopPropagation(),F(A.id)},children:s.jsx(De,{size:14})})]},A.id))]}),k?s.jsxs("div",{className:"skillset-detail",children:[s.jsxs("div",{className:"skillset-header",children:[s.jsxs("div",{className:"skillset-header-info",children:[s.jsx("input",{className:"skillset-name-input",value:k.name,onChange:A=>v(k.id,{name:A.target.value}),placeholder:"SkillSet Name"}),s.jsx("textarea",{className:"skillset-desc-input",value:k.description,onChange:A=>v(k.id,{description:A.target.value}),placeholder:"Description (optional)",rows:1}),s.jsxs("div",{className:"skillset-model",children:[s.jsx("label",{style:{fontSize:"12px",color:"var(--text-secondary)",marginRight:"8px"},children:"Embedding Model:"}),s.jsxs("select",{style:{flex:1,padding:"4px 8px",fontSize:"12px",background:"var(--bg-secondary)",border:"1px solid var(--border)",borderRadius:"4px",color:"var(--text-primary)"},value:k.embedding_model||"text-embedding-004",onChange:A=>v(k.id,{embedding_model:A.target.value}),children:[s.jsxs("optgroup",{label:"Google Gemini",children:[s.jsx("option",{value:"text-embedding-004",children:"text-embedding-004 (768d)"}),s.jsx("option",{value:"text-embedding-005",children:"text-embedding-005"})]}),s.jsxs("optgroup",{label:"OpenAI",children:[s.jsx("option",{value:"text-embedding-3-small",children:"text-embedding-3-small (1536d)"}),s.jsx("option",{value:"text-embedding-3-large",children:"text-embedding-3-large (3072d)"})]}),s.jsxs("optgroup",{label:"Cohere",children:[s.jsx("option",{value:"embed-english-v3.0",children:"embed-english-v3.0 (1024d)"}),s.jsx("option",{value:"embed-multilingual-v3.0",children:"embed-multilingual-v3.0 (1024d)"})]})]})]}),s.jsxs("div",{className:"skillset-stats",children:[s.jsxs("span",{className:"skillset-stat",children:[s.jsx("strong",{children:(i==null?void 0:i.entry_count)||0})," entries"]}),s.jsxs("span",{className:"skillset-stat",children:[s.jsx("strong",{children:Object.keys((i==null?void 0:i.sources)||{}).length})," sources"]}),P===!1&&s.jsx("span",{className:"skillset-stat",style:{color:"var(--warning)"},children:"⚠ No embeddings"})]})]}),s.jsx("button",{className:"btn-icon",onClick:R,title:"Refresh",children:s.jsx(Mn,{size:16})})]}),g&&s.jsxs("div",{className:"error-banner",children:[g,s.jsx("button",{onClick:()=>h(null),children:s.jsx(hg,{size:14})})]}),s.jsxs("div",{className:"search-section",children:[s.jsx("div",{className:"search-input-wrapper",children:s.jsx("input",{className:"search-input",value:a,onChange:A=>l(A.target.value),onKeyDown:A=>A.key==="Enter"&&U(),placeholder:"Search this SkillSet..."})}),s.jsxs("button",{className:"btn-primary",onClick:U,disabled:d||!a.trim(),children:[s.jsx(dg,{size:14}),d?"Searching...":"Search"]})]}),s.jsxs("div",{className:"search-results",children:[c.length===0&&!d&&a&&s.jsx("div",{className:"empty-state",children:s.jsx("span",{children:"No results found"})}),c.map(A=>s.jsxs("div",{className:"search-result",style:{background:I(A.score)},children:[s.jsxs("span",{className:"search-result-score",children:[(A.score*100).toFixed(0),"%"]}),s.jsx("div",{className:"search-result-text",children:A.text}),s.jsx("div",{className:"search-result-source",children:A.source_name})]},A.id))]}),s.jsxs("div",{className:"add-sources-section",children:[s.jsxs("div",{className:"add-sources-header",onClick:()=>m(!f),children:[f?s.jsx(At,{size:16}):s.jsx(Rt,{size:16}),s.jsx("h4",{children:"Add Sources"})]}),f&&s.jsxs("div",{className:"add-sources-content",children:[s.jsxs("div",{className:"source-row",children:[s.jsx(cg,{size:16,style:{color:"var(--text-tertiary)"}}),s.jsx("input",{className:"source-input",value:x,onChange:A=>b(A.target.value),onKeyDown:A=>A.key==="Enter"&&D(),placeholder:"Enter URL (e.g., llms.txt file)"}),s.jsxs("button",{className:"btn-primary",onClick:D,disabled:T||!x.trim(),children:[s.jsx(C0,{size:14}),T?"Loading...":"Add"]})]}),s.jsxs("div",{className:"source-row",children:[s.jsx(j0,{size:16,style:{color:"var(--text-tertiary)"}}),s.jsx("input",{ref:_,type:"file",accept:".txt,.md,.json,.csv,.html",onChange:ne}),s.jsxs("button",{className:"btn-primary",onClick:()=>{var A;return(A=_.current)==null?void 0:A.click()},children:[s.jsx(Xo,{size:14}),"Upload File"]}),s.jsx("span",{style:{fontSize:"12px",color:"var(--text-tertiary)"},children:".txt, .md, .json, .csv"})]}),((i==null?void 0:i.entry_count)||0)>0&&s.jsx("div",{className:"source-row",style:{marginTop:"8px"},children:s.jsxs("button",{className:"clear-button",onClick:L,children:[s.jsx(De,{size:12}),"Clear All Entries (",(i==null?void 0:i.entry_count)||0,")"]})})]})]})]}):N.length>0?s.jsx("div",{className:"skillset-detail",children:s.jsxs("div",{className:"empty-state",children:[s.jsx(yn,{size:48}),s.jsx("span",{children:"Select a SkillSet"})]})}):null]}):null}const an={tool_trajectory_avg_score:{name:"Tool Trajectory",description:"Did the agent call the right tools in the expected order?",requiresJudge:!1,scale:[0,1]},response_match_score:{name:"Response Match (ROUGE-1)",description:"Does the response contain expected text? (fuzzy word matching)",requiresJudge:!1,scale:[0,1]},response_evaluation_score:{name:"Response Evaluation (LLM)",description:"LLM-judged semantic match of final response",requiresJudge:!0,scale:[1,5]},final_response_match_v2:{name:"Response Quality v2 (LLM)",description:"Enhanced LLM-judged response quality check",requiresJudge:!0,scale:[0,1]},safety_v1:{name:"Safety",description:"Is the response safe and harmless? (Vertex AI)",requiresJudge:!0,scale:[0,1]},hallucinations_v1:{name:"Hallucination Detection",description:"Are all claims supported by context? No false information?",requiresJudge:!0,scale:[0,1]},rubric_based_final_response_quality_v1:{name:"Rubric: Response Quality",description:"Custom rubric-based quality assessment of responses",requiresJudge:!0,scale:[0,1]},rubric_based_tool_use_quality_v1:{name:"Rubric: Tool Use Quality",description:"Custom rubric-based assessment of tool usage",requiresJudge:!0,scale:[0,1]}},ns=(e,t,n)=>{if(t==null)return{value:"-",comparison:""};const r=an[e],i=(r==null?void 0:r.scale)||[0,1];if(i[0]===1&&i[1]===5){const o=n??3.5;return{value:t.toFixed(1),comparison:`${o.toFixed(1)} / ${i[1].toFixed(1)}`}}else{const o=n??.7;return{value:`${Math.round(t*100)}%`,comparison:`${Math.round(o*100)}% min`}}},VS={metrics:[{metric:"tool_trajectory_avg_score",enabled:!0,criterion:{threshold:1}},{metric:"response_match_score",enabled:!0,criterion:{threshold:.7}}],default_trajectory_match_type:"in_order",num_runs:1};function hx(){return`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`}function WS(){const{project:e}=at(),[t,n]=w.useState([]),[r,i]=w.useState(null),[o,a]=w.useState(null),[l,c]=w.useState(new Set),[u,d]=w.useState(new Map),[p,f]=w.useState(new Map),[m,x]=w.useState(new Set),[b,T]=w.useState(!1),[y,g]=w.useState(null),[h,P]=w.useState([]),[C,_]=w.useState(null),N=async()=>{if(e)try{const O=await Ve.get(`/projects/${e.id}/eval-history`);P(O.runs||[])}catch(O){console.warn("Failed to load eval history:",O)}},k=async(O,H=!0)=>{if(e)try{const Z=(await Ve.get(`/projects/${e.id}/eval-history/${O}`)).run;if(_(Z),Z!=null&&Z.case_results){const ae=new Map;for(const q of Z.case_results)ae.set(q.eval_case_id,q);d(ae)}if((Z==null?void 0:Z.eval_set_id)==="batch")c(new Set(t.map(ae=>ae.id))),i(null);else if(Z!=null&&Z.eval_set_id){const ae=new Map;ae.set(Z.eval_set_id,Z),f(ae),i(Z.eval_set_id),c(q=>new Set([...q,Z.eval_set_id]))}a(null),H&&window.history.pushState({run:O},"",`?run=${O}`)}catch(K){console.warn("Failed to load history run:",K)}},R=(O,H=!0)=>{i(O),a(null),_(null),H&&O?window.history.pushState({set:O},"",`?set=${O}`):H&&window.history.pushState({},"",window.location.pathname)},S=(O,H,K=!0)=>{i(O),a(H),_(null),K&&H?window.history.pushState({set:O,case:H},"",`?set=${O}&case=${H}`):K&&O&&window.history.pushState({set:O},"",`?set=${O}`)},v=()=>{_(null),d(new Map),f(new Map),window.history.pushState({},"",window.location.pathname)},z=async O=>{if(e)try{await Ve.delete(`/projects/${e.id}/eval-history/${O}`),P(H=>H.filter(K=>K.id!==O)),(C==null?void 0:C.id)===O&&_(null)}catch(H){console.warn("Failed to delete history run:",H)}};w.useEffect(()=>{e!=null&&e.id&&(F(),N())},[e==null?void 0:e.id]),w.useEffect(()=>{const O=()=>{x(new Set(t.map(K=>K.id)))},H=()=>{x(new Set),N()};return window.addEventListener("eval-tests-started",O),window.addEventListener("eval-tests-completed",H),()=>{window.removeEventListener("eval-tests-started",O),window.removeEventListener("eval-tests-completed",H)}},[t]),w.useEffect(()=>{if(!(e!=null&&e.id)||b)return;const O=()=>{const K=new URLSearchParams(window.location.search),Z=K.get("set"),ae=K.get("case"),q=K.get("run");if(q){k(q,!1);return}if(Z)i(Z),a(ae),_(null),c(re=>new Set([...re,Z]));else{if(!r&&!o&&!C)return;i(null),a(null),_(null)}};O();const H=()=>{O()};return window.addEventListener("popstate",H),()=>window.removeEventListener("popstate",H)},[e==null?void 0:e.id,b,t.length]);const F=async()=>{var O,H;if(e!=null&&e.id){T(!0),g(null);try{const K=await Ve.get(`/projects/${e.id}/eval-sets`);if(n(K.eval_sets||[]),((O=K.eval_sets)==null?void 0:O.length)>0){const Z=new URLSearchParams(window.location.search),ae=Z.get("set"),q=Z.get("case"),re=ae||(q?(H=K.eval_sets.find(ie=>ie.eval_cases.some(ge=>ge.id===q)))==null?void 0:H.id:null)||K.eval_sets[0].id;c(new Set([re]))}}catch(K){g(K.message||"Failed to load eval sets")}finally{T(!1)}}},U=t.find(O=>O.id===r),D=U==null?void 0:U.eval_cases.find(O=>O.id===o),ne=async()=>{if(e!=null&&e.id)try{const O=await Ve.post(`/projects/${e.id}/eval-sets`,{name:"New Eval Set",description:"",eval_config:VS});n(H=>[...H,O.eval_set]),i(O.eval_set.id),c(H=>new Set([...H,O.eval_set.id]))}catch(O){g(O.message||"Failed to create eval set")}},L=async O=>{if(e!=null&&e.id)try{const H=await Ve.post(`/projects/${e.id}/eval-sets/${O}/cases`,{name:"New Test Case",description:"",invocations:[{id:hx(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]}],initial_state:{},rubrics:[],enabled_metrics:[],tags:[]});n(K=>K.map(Z=>Z.id===O?{...Z,eval_cases:[...Z.eval_cases,H.eval_case]}:Z)),i(O),a(H.eval_case.id)}catch(H){g(H.message||"Failed to create eval case")}},I=async(O,H,K)=>{if(e!=null&&e.id)try{const Z=await Ve.put(`/projects/${e.id}/eval-sets/${O}/cases/${H}`,K);n(ae=>ae.map(q=>q.id===O?{...q,eval_cases:q.eval_cases.map(re=>re.id===H?Z.eval_case:re)}:q))}catch(Z){g(Z.message||"Failed to update eval case")}},A=async(O,H)=>{if(e!=null&&e.id)try{await Ve.delete(`/projects/${e.id}/eval-sets/${O}/cases/${H}`),n(K=>K.map(Z=>Z.id===O?{...Z,eval_cases:Z.eval_cases.filter(ae=>ae.id!==H)}:Z)),o===H&&a(null)}catch(K){g(K.message||"Failed to delete eval case")}},j=async O=>{if(e!=null&&e.id)try{await Ve.delete(`/projects/${e.id}/eval-sets/${O}`),n(H=>H.filter(K=>K.id!==O)),r===O&&(i(null),a(null))}catch(H){g(H.message||"Failed to delete eval set")}},J=async O=>{if(e!=null&&e.id)try{const H=await Ve.get(`/projects/${e.id}/eval-sets/${O}/export`),K=new Blob([JSON.stringify(H,null,2)],{type:"application/json"}),Z=URL.createObjectURL(K),ae=document.createElement("a");ae.href=Z;const q=t.find(re=>re.id===O);ae.download=`${(q==null?void 0:q.name)||"eval-set"}.json`,document.body.appendChild(ae),ae.click(),document.body.removeChild(ae),URL.revokeObjectURL(Z)}catch(H){g(H.message||"Failed to export eval set")}},Q=async O=>{if(e!=null&&e.id)try{const H=await O.text(),K=JSON.parse(H),Z=await Ve.post(`/projects/${e.id}/eval-sets/import`,K);n(ae=>[...ae,Z.eval_set]),i(Z.eval_set.id),c(ae=>new Set([...ae,Z.eval_set.id]))}catch(H){g(H.message||"Failed to import eval set")}},E=w.useRef(null),xe=async()=>{if(!(!(e!=null&&e.id)||t.length===0))try{const O=await Promise.all(t.map(async ae=>{try{return await Ve.get(`/projects/${e.id}/eval-sets/${ae.id}/export`)}catch{return ae}})),H=new Blob([JSON.stringify(O,null,2)],{type:"application/json"}),K=URL.createObjectURL(H),Z=document.createElement("a");Z.href=K,Z.download=`${e.name||"project"}-eval-sets.json`,document.body.appendChild(Z),Z.click(),document.body.removeChild(Z),URL.revokeObjectURL(K)}catch(O){g(O.message||"Failed to export all eval sets")}},M=async(O,H)=>{if(e!=null&&e.id){x(K=>new Set([...K,H]));try{const K=await Ve.post(`/projects/${e.id}/eval-sets/${O}/cases/${H}/run`,{});d(Z=>new Map(Z).set(H,K.result))}catch(K){g(K.message||"Failed to run eval case")}finally{x(K=>{const Z=new Set(K);return Z.delete(H),Z})}}},te=async O=>{if(!(e!=null&&e.id))return;const H=t.find(Z=>Z.id===O);if(!H)return;const K=H.eval_cases.map(Z=>Z.id);x(Z=>new Set([...Z,O,...K]));try{const Z=await Ve.post(`/projects/${e.id}/eval-sets/${O}/run`,{});f(ae=>new Map(ae).set(O,Z.result));for(const ae of Z.result.case_results)d(q=>new Map(q).set(ae.eval_case_id,ae));try{await Ve.post(`/projects/${e.id}/eval-history`,Z.result),N()}catch(ae){console.warn("Failed to save eval run to history:",ae)}}catch(Z){g(Z.message||"Failed to run eval set")}finally{x(Z=>{const ae=new Set(Z);return ae.delete(O),K.forEach(q=>ae.delete(q)),ae})}},V=O=>{c(H=>{const K=new Set(H);return K.has(O)?K.delete(O):K.add(O),K})},se=O=>{let H=O.eval_cases.length,K=0,Z=0,ae=0;for(const q of O.eval_cases){const re=u.get(q.id);re?re.passed?K++:Z++:ae++}return{total:H,passed:K,failed:Z,pending:ae}},pe=O=>O==null?"-":`${Math.round(O*100)}%`;return e?s.jsxs("div",{className:"eval-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("aside",{className:"eval-sidebar",children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsx("h3",{children:"Evaluation Tests"}),s.jsxs("div",{className:"header-actions",children:[s.jsx("input",{type:"file",ref:E,accept:".json",style:{display:"none"},onChange:O=>{var K;const H=(K=O.target.files)==null?void 0:K[0];H&&(Q(H),O.target.value="")}}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var O;return(O=E.current)==null?void 0:O.click()},title:"Import eval set from JSON",children:s.jsx(Xo,{size:14})}),t.length>0&&s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:xe,title:"Download all eval sets as JSON",children:s.jsx(us,{size:14})}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:F,title:"Refresh",children:s.jsx(Mn,{size:14})}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:ne,title:"New eval set",children:[s.jsx(Ge,{size:14}),"Set"]})]})]}),s.jsxs("div",{className:"eval-tree",children:[b&&s.jsx("p",{style:{color:"var(--text-muted)",padding:"16px"},children:"Loading..."}),y&&s.jsx("div",{style:{color:"var(--error)",padding:"16px",fontSize:"13px"},children:y}),!b&&t.length===0&&s.jsxs("div",{className:"empty-state",style:{padding:"32px"},children:[s.jsx(mu,{size:32}),s.jsxs("p",{children:["No evaluation sets yet.",s.jsx("br",{}),"Create one to get started."]})]}),t.map(O=>{const H=l.has(O.id),K=se(O),Z=m.has(O.id);return s.jsxs("div",{className:"tree-item",children:[s.jsxs("div",{className:`tree-set ${r===O.id&&!o?"selected":""}`,onClick:()=>R(O.id),children:[s.jsx("button",{className:"expand-btn",onClick:ae=>{ae.stopPropagation(),V(O.id)},children:O.eval_cases.length>0?H?s.jsx(At,{size:14}):s.jsx(Rt,{size:14}):s.jsx("span",{style:{width:14}})}),s.jsx(lg,{size:14,style:{color:"var(--accent-secondary)"}}),s.jsx("span",{className:"set-name",children:O.name}),s.jsx("button",{className:"add-case-btn",onClick:ae=>{ae.stopPropagation(),L(O.id)},title:"Add test case",style:{padding:"2px 4px",marginLeft:4,background:"transparent",border:"none",cursor:"pointer",opacity:.6,display:"flex",alignItems:"center"},children:s.jsx(Ge,{size:12})}),K.total>0&&s.jsxs("span",{className:"set-stats",children:[K.passed>0&&s.jsx("span",{className:"stat-passed",children:K.passed}),K.failed>0&&s.jsx("span",{className:"stat-failed",children:K.failed}),K.pending>0&&s.jsx("span",{className:"stat-pending",children:K.pending})]}),s.jsx("button",{className:"run-btn",onClick:ae=>{ae.stopPropagation(),te(O.id)},title:"Run all tests in this set",disabled:Z,children:Z?s.jsx(_o,{size:12,className:"spinning"}):s.jsx(Jn,{size:12})})]}),H&&s.jsx("div",{className:"tree-children",style:{paddingLeft:16},children:O.eval_cases.map(ae=>{var ie;const q=u.get(ae.id),re=m.has(ae.id);return s.jsxs("div",{className:`tree-case ${o===ae.id?"selected":""}`,onClick:()=>S(O.id,ae.id),children:[re?s.jsx(_o,{size:14,className:"spinning",style:{color:"var(--warning)"}}):q?q.passed?s.jsx(mr,{size:14,style:{color:"var(--success)"}}):s.jsx(Gr,{size:14,style:{color:"var(--error)"}}):s.jsx(So,{size:14,style:{color:"var(--text-muted)"}}),s.jsx("span",{className:"case-name",children:ae.name}),q&&q.metric_results.length>0&&s.jsx("span",{style:{fontSize:11,color:q.passed?"var(--success)":"var(--error)"},children:pe((ie=q.metric_results[0])==null?void 0:ie.score)}),s.jsx("button",{className:"run-btn",onClick:ge=>{ge.stopPropagation(),M(O.id,ae.id)},disabled:re,children:s.jsx(Jn,{size:12})})]},ae.id)})})]},O.id)})]}),s.jsxs("div",{className:"history-section",children:[s.jsx("div",{className:"history-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 12px",borderTop:"1px solid var(--border-color)",background:"var(--bg-secondary)"},children:s.jsxs("span",{style:{fontWeight:500,fontSize:13},children:["Previous Runs (",h.length,")"]})}),s.jsx("div",{className:"history-list",style:{maxHeight:200,overflowY:"auto"},children:h.length===0?s.jsx("div",{style:{padding:"12px",color:"var(--text-secondary)",fontSize:12,textAlign:"center"},children:"No previous runs"}):[...h].sort((O,H)=>(H.started_at||0)-(O.started_at||0)).map(O=>{const H=O.passed_cases===O.total_cases;return s.jsx("div",{className:`history-item ${(C==null?void 0:C.id)===O.id?"selected":""}`,onClick:()=>k(O.id),style:{padding:"8px 12px",borderBottom:"1px solid var(--border-color)",cursor:"pointer",background:(C==null?void 0:C.id)===O.id?"var(--bg-tertiary)":"transparent",fontSize:12},children:s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[H?s.jsx(mr,{size:14,style:{color:"var(--success)",flexShrink:0}}):s.jsx(Gr,{size:14,style:{color:"var(--error)",flexShrink:0}}),s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:500},children:O.eval_set_name||"Unnamed"}),s.jsx("div",{style:{color:"var(--text-secondary)",fontSize:11},children:new Date(O.started_at*1e3).toLocaleString()})]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsxs("span",{style:{color:H?"var(--success)":"var(--error)",fontWeight:500,fontSize:11},children:[O.passed_cases,"/",O.total_cases]}),s.jsx("button",{className:"btn btn-icon",onClick:K=>{K.stopPropagation(),z(O.id)},title:"Delete run",style:{padding:2},children:s.jsx(De,{size:12})})]})]})},O.id)})})]})]}),s.jsx("div",{className:"eval-editor",children:C?s.jsx(qS,{run:C,onClose:v}):D?s.jsx(JS,{evalCase:D,evalSetId:r,projectId:e.id,result:u.get(D.id),isRunning:m.has(D.id),onUpdate:O=>I(r,D.id,O),onDelete:()=>A(r,D.id),onRun:()=>M(r,D.id),onClearResult:()=>d(O=>{const H=new Map(O);return H.delete(D.id),H})}):U?s.jsx(KS,{evalSet:U,projectId:e.id,result:p.get(U.id),isRunning:m.has(U.id),caseResults:u,onUpdate:async O=>{try{const H=await Ve.put(`/projects/${e.id}/eval-sets/${U.id}`,O);n(K=>K.map(Z=>Z.id===U.id?H.eval_set:Z))}catch(H){g(H.message)}},onDelete:()=>j(U.id),onRun:()=>te(U.id),onExport:()=>J(U.id)}):s.jsx("div",{className:"editor-content",children:s.jsxs("div",{className:"empty-state",children:[s.jsx(So,{size:48}),s.jsxs("p",{children:["Select a test case to edit",s.jsx("br",{}),"or create a new one"]})]})})})]}):null}function HS({value:e,onChange:t}){var a,l;const{project:n}=at(),r=((a=n==null?void 0:n.app)==null?void 0:a.models)||[],i=(l=n==null?void 0:n.app)==null?void 0:l.default_model_id,o=r.find(c=>c.id===i);return s.jsxs("select",{value:e,onChange:c=>t(c.target.value),style:{width:"100%",maxWidth:400},children:[s.jsx("option",{value:"",children:o?`App Default (${o.model_name})`:"App Default"}),r.map(c=>s.jsx("option",{value:c.model_name,children:c.model_name},c.id)),s.jsx("option",{value:"gemini-2.0-flash",children:"gemini-2.0-flash"}),s.jsx("option",{value:"gemini-2.5-flash",children:"gemini-2.5-flash"}),s.jsx("option",{value:"gemini-2.5-pro",children:"gemini-2.5-pro"})]})}function qS({run:e,onClose:t}){var m;const{project:n}=at(),[r,i]=w.useState(!0),[o,a]=w.useState(new Set),l=e.case_results||[],c=l.filter(x=>x.passed).length,u=l.filter(x=>!x.passed).length,d=r?l.filter(x=>!x.passed):l,p=x=>{a(b=>{const T=new Set(b);return T.has(x)?T.delete(x):T.add(x),T})},f=x=>{x&&n&&(window.location.href=`/project/${n.id}/run?session=${x}`)};return s.jsxs("div",{className:"test-result-viewer",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"result-header",children:[s.jsx("h2",{children:e.eval_set_name||"Test Run Results"}),s.jsx("div",{style:{display:"flex",gap:8},children:s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{if(n){const x=`${window.location.origin}/project/${n.id}/evaluate?run=${e.id}`;navigator.clipboard.writeText(x)}},title:"Copy link to this run",children:s.jsx(pu,{size:14})})})]}),s.jsxs("div",{className:"result-summary",children:[s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Status"}),s.jsx("span",{className:`value ${c===l.length?"passed":"failed"}`,children:c===l.length?"PASSED":"FAILED"})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Passed"}),s.jsx("span",{className:"value passed",children:c})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Failed"}),s.jsx("span",{className:"value failed",children:u})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Total Cases"}),s.jsx("span",{className:"value",children:l.length})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Duration"}),s.jsx("span",{className:"value",children:e.duration_ms?`${(e.duration_ms/1e3).toFixed(1)}s`:"-"})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Tokens"}),s.jsx("span",{className:"value",children:((m=e.total_tokens)==null?void 0:m.toLocaleString())||"-"})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Run Time"}),s.jsx("span",{className:"value",style:{fontSize:13},children:e.started_at?new Date(e.started_at*1e3).toLocaleString():"-"})]})]}),s.jsxs("div",{style:{padding:"8px 20px",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",gap:10,background:"var(--bg-secondary)"},children:[s.jsxs("label",{className:"toggle-switch",style:{transform:"scale(0.85)"},children:[s.jsx("input",{type:"checkbox",checked:r,onChange:x=>i(x.target.checked)}),s.jsx("span",{className:"toggle-slider"})]}),s.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:"Hide passing results"})]}),s.jsxs("div",{className:"result-cases",children:[d.map((x,b)=>{var v,z,F,U,D,ne;const T=x.case_id||`case-${b}`,y=o.has(T),g=((v=x.metric_results)==null?void 0:v.filter(L=>!L.passed||L.error))||[],h=((z=x.metric_results)==null?void 0:z.filter(L=>L.passed&&!L.error))||[],P=((F=x.rubric_results)==null?void 0:F.filter(L=>!L.passed||L.error))||[],C=((U=x.rubric_results)==null?void 0:U.filter(L=>L.passed&&!L.error))||[],_=y?x.metric_results:g,N=y?x.rubric_results:P,k=y?x.invocation_results:(D=x.invocation_results)==null?void 0:D.filter(L=>{var I;return((I=L.metric_results)==null?void 0:I.some(A=>!A.passed))||L.error}),R=h.length+C.length,S=g.length+P.length;return s.jsxs("div",{className:"result-case",children:[s.jsxs("div",{className:"result-case-header",onClick:()=>p(T),style:{cursor:"pointer"},children:[s.jsxs("div",{className:"result-case-name",children:[s.jsx("span",{style:{marginRight:6,fontSize:12,color:"var(--text-muted)"},children:y?"▼":"▶"}),x.passed?s.jsx(mr,{size:16,style:{color:"var(--success)"}}):s.jsx(Gr,{size:16,style:{color:"var(--error)"}}),x.eval_set_name&&(e==null?void 0:e.eval_set_id)==="batch"&&s.jsx("span",{style:{fontSize:10,color:"var(--text-muted)",background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4,marginRight:6},children:x.eval_set_name}),x.case_name||`Case ${b+1}`,s.jsxs("span",{style:{marginLeft:10,fontSize:11,color:"var(--text-muted)",fontWeight:400},children:[S>0&&s.jsxs("span",{style:{color:"var(--error)"},children:[S," failed"]}),S>0&&R>0&&" · ",R>0&&s.jsxs("span",{style:{color:"var(--success)"},children:[R," passed"]})]})]}),s.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[x.session_id&&s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:L=>{L.stopPropagation(),f(x.session_id)},title:"View session in Run panel",children:[s.jsx(ag,{size:12})," View Session"]}),s.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:x.duration_ms?`${(x.duration_ms/1e3).toFixed(2)}s`:""})]})]}),s.jsxs("div",{className:"result-case-details",children:[(_==null?void 0:_.length)>0&&s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:8},children:[_.map((L,I)=>{const A=ns(L.metric,L.score,L.threshold);return s.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:L.error?"rgba(255, 193, 7, 0.1)":L.passed?"rgba(var(--success-rgb), 0.05)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${L.error?"var(--warning)":L.passed?"var(--border-color)":"var(--error)"}`,display:"flex",flexDirection:"column",alignItems:"center",minWidth:80},children:[s.jsx("span",{style:{fontSize:10,color:"var(--text-secondary)",textAlign:"center",marginBottom:2},children:L.metric.replace(/_/g," ").replace("v1","").replace("v2","").trim()}),L.error?s.jsx("span",{style:{fontSize:10,color:"var(--warning)"},children:"Error"}):s.jsxs(s.Fragment,{children:[s.jsx("span",{style:{fontSize:14,fontWeight:600,color:L.passed?"var(--success)":"var(--error)"},children:A.value}),s.jsx("span",{style:{fontSize:9,color:"var(--text-muted)"},children:A.comparison})]})]},I)}),!y&&h.length>0&&s.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"var(--bg-tertiary)",border:"1px dashed var(--border-color)",display:"flex",alignItems:"center",fontSize:11,color:"var(--text-muted)"},children:["+",h.length," passed"]})]}),_==null?void 0:_.filter(L=>!L.passed&&L.rationale).map((L,I)=>s.jsxs("div",{style:{marginTop:8,padding:"8px 12px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:12},children:[s.jsxs("div",{style:{fontWeight:500,marginBottom:4,color:"var(--error)",fontSize:11},children:[L.metric.replace(/_/g," ")," - Why it failed:"]}),s.jsx("div",{style:{whiteSpace:"pre-wrap",color:"var(--text-secondary)",lineHeight:1.4},children:L.rationale})]},`rationale-${I}`)),(N==null?void 0:N.length)>0&&s.jsxs("div",{style:{marginTop:8},children:[s.jsx("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:4},children:"Custom Rubrics"}),N.map((L,I)=>s.jsxs("div",{style:{marginBottom:L.rationale&&!L.passed?8:4},children:[s.jsxs("div",{className:"metric-row",children:[s.jsx("span",{className:"metric-name",style:{flex:1},children:L.rubric}),s.jsx("span",{className:`metric-value ${L.passed?"passed":"failed"}`,children:L.passed?"✓ Pass":"✗ Fail"})]}),!L.passed&&L.rationale&&s.jsxs("div",{style:{marginTop:4,marginLeft:8,padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:11,color:"var(--text-secondary)"},children:[s.jsx("strong",{style:{color:"var(--error)"},children:"Why:"})," ",L.rationale]}),L.error&&s.jsxs("div",{style:{marginTop:4,marginLeft:8,fontSize:11,color:"var(--warning)"},children:["Error: ",L.error]})]},I)),!y&&C.length>0&&s.jsxs("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:["+",C.length," passed rubric",C.length>1?"s":""]})]}),(k==null?void 0:k.length)>0&&s.jsxs("div",{className:"invocation-summary",children:[s.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:8},children:["Invocations (",k.length,!y&&((ne=x.invocation_results)==null?void 0:ne.length)>k.length?` of ${x.invocation_results.length}`:"",")"]}),k.map((L,I)=>s.jsxs("div",{className:"invocation-item",children:[s.jsxs("div",{className:"invocation-query",children:["Turn ",L.invocation_id||I+1,": ",L.user_message||"(no message)"]}),L.actual_response&&s.jsxs("div",{className:"invocation-response",children:["Response: ",L.actual_response.substring(0,200),L.actual_response.length>200?"...":""]})]},I))]}),x.error&&s.jsx("div",{style:{marginTop:12,padding:12,background:"rgba(255, 107, 107, 0.1)",borderRadius:"var(--radius-sm)",color:"var(--error)",fontSize:12,whiteSpace:"pre-wrap"},children:x.error})]})]},T)}),l.length===0&&s.jsx("div",{style:{textAlign:"center",padding:32,color:"var(--text-secondary)"},children:"No test cases in this run"})]})]})}function JS({evalCase:e,evalSetId:t,projectId:n,result:r,isRunning:i,onUpdate:o,onDelete:a,onRun:l,onClearResult:c}){var C,_,N;const{project:u}=at(),[d,p]=w.useState(e),[f,m]=w.useState("assertions");w.useEffect(()=>{p(e)},[e.id]);const x=w.useCallback(k=>{p(R=>({...R,...k})),o(k)},[o]),b=()=>{const k={id:hx(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]};x({invocations:[...d.invocations,k]})},T=(k,R)=>{const S=[...d.invocations];S[k]={...S[k],...R},x({invocations:S})},y=k=>{x({invocations:d.invocations.filter((R,S)=>S!==k)})},g=k=>{const R=[...d.invocations];R[k]={...R[k],expected_tool_calls:[...R[k].expected_tool_calls,{name:"",args:{},args_match_mode:"subset"}]},x({invocations:R})},h=(k,R,S)=>{const v=[...d.invocations],z=[...v[k].expected_tool_calls];z[R]={...z[R],...S},v[k]={...v[k],expected_tool_calls:z},x({invocations:v})},P=(k,R)=>{const S=[...d.invocations];S[k]={...S[k],expected_tool_calls:S[k].expected_tool_calls.filter((v,z)=>z!==R)},x({invocations:S})};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(So,{size:20,style:{color:"var(--accent-primary)"}}),s.jsx("input",{type:"text",value:d.name,onChange:k=>x({name:k.target.value}),placeholder:"Test case name"}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const k=`${window.location.origin}/project/${n}/evaluate?set=${t}&case=${e.id}`;navigator.clipboard.writeText(k)},title:"Copy link to this test case",children:s.jsx(pu,{size:14})}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:i,children:[i?s.jsx(_o,{size:14,className:"spinning"}):s.jsx(Jn,{size:14}),"Run"]}),s.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:s.jsx(De,{size:14})})]}),s.jsxs("div",{className:"tabs",children:[s.jsxs("div",{className:`tab ${f==="assertions"?"active":""}`,onClick:()=>m("assertions"),children:[s.jsx(Co,{size:14,style:{marginRight:6}}),"Assertions (",d.invocations.length,")"]}),s.jsxs("div",{className:`tab ${f==="rubrics"?"active":""}`,onClick:()=>m("rubrics"),children:[s.jsx(mu,{size:14,style:{marginRight:6}}),"LLM Judges"]}),s.jsxs("div",{className:`tab ${f==="docs"?"active":""}`,onClick:()=>m("docs"),children:[s.jsx(jo,{size:14,style:{marginRight:6}}),"Docs"]}),s.jsxs("div",{className:`tab ${f==="json"?"active":""}`,onClick:()=>m("json"),children:[s.jsx(un,{size:14,style:{marginRight:6}}),"JSON"]})]}),s.jsxs("div",{className:"editor-content",children:[f==="assertions"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{style:{display:"flex",gap:12,marginBottom:12},children:[s.jsxs("div",{style:{flex:1},children:[s.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"target_agent"}),s.jsxs("select",{value:d.target_agent||"",onChange:k=>x({target_agent:k.target.value||void 0}),style:{width:"100%"},children:[s.jsx("option",{value:"",children:"root_agent"}),(C=u==null?void 0:u.agents)==null?void 0:C.map(k=>s.jsx("option",{value:k.name,children:k.name},k.name))]})]}),s.jsxs("div",{style:{flex:1},children:[s.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"tags"}),s.jsx("input",{type:"text",value:d.tags.join(", "),onChange:k=>x({tags:k.target.value.split(",").map(R=>R.trim()).filter(Boolean)}),placeholder:"smoke, regression",style:{width:"100%"}})]})]}),s.jsxs("div",{className:"form-section",children:[s.jsx("h4",{children:"Description"}),s.jsx("textarea",{value:d.description,onChange:k=>x({description:k.target.value}),placeholder:"What does this test verify?",style:{minHeight:40}})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:["session_input ",s.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(initial state)"})]}),s.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:s.jsx(Dt,{height:"100%",defaultLanguage:"json",value:(()=>{var R;if((!d.initial_state||Object.keys(d.initial_state).length===0)&&((R=u==null?void 0:u.app)!=null&&R.state_keys)&&u.app.state_keys.length>0){const S={};return u.app.state_keys.forEach(v=>{v.default_value!==void 0?S[v.name]=v.default_value:S[v.name]=v.type==="string"?"":v.type==="number"?0:v.type==="boolean"?!1:v.type==="array"?[]:{}}),JSON.stringify(S,null,2)}return JSON.stringify(d.initial_state,null,2)})(),onChange:k=>{try{k&&x({initial_state:JSON.parse(k)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:[s.jsx(Co,{size:14}),"Conversation Turns"]}),d.invocations.map((k,R)=>s.jsxs("div",{className:"invocation-card",children:[s.jsxs("div",{className:"invocation-number",children:[s.jsx("span",{children:R+1}),d.invocations.length>1&&s.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>y(R),style:{padding:4},children:s.jsx(De,{size:10})})]}),s.jsxs("div",{className:"invocation-content",children:[s.jsxs("div",{className:"invocation-row",children:[s.jsxs("div",{className:"form-section",children:[s.jsx("label",{children:"User Query"}),s.jsx("textarea",{value:k.user_message,onChange:S=>T(R,{user_message:S.target.value}),placeholder:"The message to send to the agent..."})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("label",{children:["Expected Response ",s.jsx("span",{style:{color:"var(--text-muted)",fontWeight:400},children:"(ROUGE-1)"})]}),s.jsx("textarea",{value:k.expected_response||"",onChange:S=>T(R,{expected_response:S.target.value||void 0}),placeholder:"Expected text (partial match)..."})]})]}),k.expected_tool_calls.map((S,v)=>s.jsxs("div",{className:"tool-call-compact",children:[s.jsx("input",{type:"text",value:S.name,onChange:z=>h(R,v,{name:z.target.value}),placeholder:"tool_name",className:"tool-name-input"}),s.jsxs("div",{className:"pillbox-toggle",children:[s.jsx("button",{className:`pill ${S.args_match_mode==="subset"?"active":""}`,onClick:()=>h(R,v,{args_match_mode:"subset"}),children:"Partial"}),s.jsx("button",{className:`pill ${S.args_match_mode==="exact"?"active":""}`,onClick:()=>h(R,v,{args_match_mode:"exact"}),children:"Exact"})]}),s.jsx("div",{className:"tool-args-editor",children:s.jsx(Dt,{height:"22px",defaultLanguage:"json",value:JSON.stringify(S.args||{}),onChange:z=>{try{z&&h(R,v,{args:JSON.parse(z)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,wordWrap:"off",scrollbar:{vertical:"hidden",horizontal:"hidden"},overviewRulerLanes:0,hideCursorInOverviewRuler:!0,overviewRulerBorder:!1,renderLineHighlight:"none",fontSize:11,padding:{top:3,bottom:3},automaticLayout:!0}})}),s.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>P(R,v),style:{padding:"4px 6px"},children:s.jsx(De,{size:10})})]},v)),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>g(R),style:{marginTop:4},children:[s.jsx(Ge,{size:12})," Assert Tool Call"]})]})]},k.id)),s.jsxs("button",{className:"btn btn-secondary",onClick:b,children:[s.jsx(Ge,{size:14})," Add Turn"]})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:[s.jsx(mr,{size:14,style:{marginRight:6}}),"final_session_state ",s.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(optional)"})]}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Assert that session state contains these key-value pairs after all turns complete."}),s.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:s.jsx(Dt,{height:"100%",defaultLanguage:"json",value:d.expected_final_state?JSON.stringify(d.expected_final_state,null,2):"{}",onChange:k=>{if(!k||k==="{}")x({expected_final_state:void 0});else try{x({expected_final_state:JSON.parse(k)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]})]}),f==="rubrics"&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"form-section",style:{marginBottom:16},children:[{metric:"safety_v1",label:"safety_v1",default:.8,max:1},{metric:"hallucinations_v1",label:"hallucinations_v1",default:.8,max:1},{metric:"response_evaluation_score",label:"response_evaluation_score",default:3.5,max:5},{metric:"final_response_match_v2",label:"final_response_match_v2",default:.7,max:1}].map(({metric:k,label:R,default:S,max:v})=>{const z=(d.enabled_metrics||[]).find(U=>U.metric===k),F=(z==null?void 0:z.threshold)??S;return s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[s.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[s.jsx("input",{type:"checkbox",checked:!!z,onChange:U=>{const D=[...d.enabled_metrics||[]];if(U.target.checked)D.push({metric:k,threshold:S});else{const ne=D.findIndex(L=>L.metric===k);ne!==-1&&D.splice(ne,1)}x({enabled_metrics:D})}}),s.jsx("span",{className:"toggle-slider"})]}),s.jsx("span",{style:{fontSize:12,opacity:z?1:.5,minWidth:100},children:R}),s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:z?1:.4},children:"≥"}),s.jsx("input",{type:"number",min:v===5?1:0,max:v,step:.1,value:F,disabled:!z,onChange:U=>{const D=[...d.enabled_metrics||[]],ne=D.findIndex(L=>L.metric===k);ne!==-1&&(D[ne]={...D[ne],threshold:parseFloat(U.target.value)||0},x({enabled_metrics:D}))},style:{width:60,textAlign:"center",opacity:z?1:.3,padding:"2px 4px",fontSize:11}})]},k)})}),s.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--border-color)",margin:"16px 0"}}),s.jsxs("div",{className:"form-section",children:[s.jsx("h4",{children:"Custom Rubrics"}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Natural language criteria evaluated by an LLM judge. Returns pass/fail per rubric."}),d.rubrics.map((k,R)=>s.jsxs("div",{className:"tool-call-row",style:{marginBottom:8},children:[s.jsx("input",{type:"text",value:k.rubric,onChange:S=>{const v=[...d.rubrics];v[R]={rubric:S.target.value},x({rubrics:v})},placeholder:"e.g., The response mentions the return policy",style:{flex:1}}),s.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>x({rubrics:d.rubrics.filter((S,v)=>v!==R)}),children:s.jsx(De,{size:12})})]},R)),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>x({rubrics:[...d.rubrics,{rubric:""}]}),children:[s.jsx(Ge,{size:12})," Add Rubric"]})]})]}),f==="docs"&&s.jsxs("div",{style:{fontSize:13,lineHeight:1.6,color:"var(--text-secondary)",overflowY:"auto",maxHeight:"100%"},children:[s.jsx("h3",{style:{marginBottom:16,color:"var(--text-primary)"},children:"Evaluation Test Case Guide"}),s.jsxs("section",{style:{marginBottom:24,padding:12,background:"rgba(var(--accent-primary-rgb), 0.1)",borderRadius:"var(--radius-md)",border:"1px solid var(--accent-primary)"},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Quick Overview"}),s.jsxs("p",{children:["Each test case simulates a ",s.jsx("strong",{children:"multi-turn conversation"})," with an agent. For each turn (invocation), you provide a user message and define what you expect the agent to do."]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Invocations"})," = conversation turns (user messages)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Expected Response"})," = the agent's ",s.jsx("em",{children:"final text reply"})," for that turn"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Expected Tool Calls"})," = tools the agent should invoke during that turn"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Session State"})," = test the ",s.jsx("em",{children:"final state"})," after ALL turns complete"]})]})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:'📝 What is "Expected Response"?'}),s.jsxs("p",{children:["The ",s.jsx("strong",{children:"Expected Response"})," is matched against the agent's ",s.jsx("strong",{children:"final response"})," for that specific turn — NOT every message."]}),s.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[s.jsx("p",{style:{marginBottom:8},children:s.jsx("strong",{children:"During one turn, an agent may:"})}),s.jsxs("ul",{style:{marginLeft:20,marginBottom:12},children:[s.jsx("li",{children:"Send intermediate thinking/reasoning messages"}),s.jsx("li",{children:"Call multiple tools"}),s.jsx("li",{children:"Transfer to sub-agents (who may respond)"}),s.jsxs("li",{children:["Finally send a ",s.jsx("em",{children:"concluding response"})]})]}),s.jsxs("p",{children:["Only the ",s.jsx("strong",{children:"last text response"})," from the agent for that turn is compared against your Expected Response."]})]}),s.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Tip: If you need to verify intermediate steps, use Tool Trajectory matching or custom Rubrics."})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🔄 Response Matching (ROUGE-1)"}),s.jsxs("p",{children:["The ",s.jsx("code",{children:"response_match_score"})," uses ",s.jsx("strong",{children:"ROUGE-1 F1 scoring"})," — fuzzy word-level matching:"]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsx("li",{children:"Tokenizes both expected and actual responses into words"}),s.jsx("li",{children:"Calculates word overlap (not exact string match)"}),s.jsx("li",{children:"Returns a score from 0.0 to 1.0"})]}),s.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[s.jsx("p",{children:s.jsx("strong",{children:"Example:"})}),s.jsxs("p",{children:["Expected: ",s.jsx("code",{children:'"The weather in Paris is sunny today"'})]}),s.jsxs("p",{children:["Actual: ",s.jsx("code",{children:'"Today in Paris, expect sunny weather"'})]}),s.jsx("p",{style:{marginTop:8,color:"var(--success)"},children:"✓ High ROUGE-1 score (same words, different order)"})]}),s.jsxs("p",{style:{marginTop:8},children:["A threshold of ",s.jsx("strong",{children:"0.7"})," means 70% word overlap is required to pass."]})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🛠️ Tool Trajectory Matching"}),s.jsxs("p",{children:["The ",s.jsx("code",{children:"tool_trajectory_avg_score"})," verifies the agent called expected tools. Match types:"]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Exact"})," — Same tools in same order, no extras allowed"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"In Order"})," — Expected tools appear in order, extras allowed between"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Any Order"})," — All expected tools present, any order, extras allowed"]})]}),s.jsx("p",{style:{marginTop:8},children:"For each tool, you can match by:"}),s.jsxs("ul",{style:{marginLeft:20,marginTop:4},children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Name Only"})," — Just check the tool was called"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Exact Args"})," — Arguments must match exactly (provide JSON)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Args Subset"})," — Your expected args must be present in actual args"]})]})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💾 Session State Testing"}),s.jsxs("p",{children:[s.jsx("strong",{children:"Initial State"})," (Settings tab) — Pre-populate session state before running the test:"]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsx("li",{children:"Set user preferences or context"}),s.jsx("li",{children:"Simulate a specific scenario"}),s.jsx("li",{children:"Test state-dependent behavior"})]}),s.jsxs("p",{style:{marginTop:12},children:[s.jsx("strong",{children:"Expected Final State"})," — Verified at the ",s.jsx("em",{children:"very end"})," of the test case, ",s.jsx("strong",{children:"after ALL invocations complete"}),"."]}),s.jsx("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8,borderLeft:"3px solid var(--warning)"},children:s.jsxs("p",{style:{margin:0},children:[s.jsx("strong",{children:"Important:"})," State is tested once after the entire conversation, NOT after each turn. To test state changes per-turn, use separate test cases."]})})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Target Agent (Settings tab)"}),s.jsxs("p",{children:["By default, tests run against the ",s.jsx("strong",{children:"root_agent"})," of your App. You can select a specific sub-agent to test in isolation:"]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsxs("li",{children:[s.jsx("strong",{children:"root_agent"})," — Test the full agent hierarchy (default)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Specific agent"})," — Unit test individual agents"]})]}),s.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Useful for testing sub-agents independently before integrating into the full system."})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📋 Custom Rubrics"}),s.jsx("p",{children:"Rubrics are custom yes/no criteria evaluated by an LLM judge. Examples:"}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsx("li",{children:'"Does the response mention the product price?"'}),s.jsx("li",{children:'"Is the tone professional and helpful?"'}),s.jsx("li",{children:'"Does the response avoid mentioning competitors?"'})]}),s.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Note: Rubric evaluation requires LLM-judged metrics to be enabled in the Eval Set."})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📊 Available Metrics"}),s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12},children:[s.jsx("thead",{children:s.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[s.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Metric"}),s.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Type"}),s.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Description"})]})}),s.jsx("tbody",{children:Object.keys(an).map(k=>s.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[s.jsx("td",{style:{padding:"8px 4px",fontFamily:"var(--font-mono)",fontSize:11},children:k}),s.jsx("td",{style:{padding:"8px 4px"},children:an[k].requiresJudge?s.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--accent-primary)",color:"white",borderRadius:4},children:"LLM Judge"}):s.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--bg-tertiary)",borderRadius:4},children:"Built-in"})}),s.jsx("td",{style:{padding:"8px 4px",color:"var(--text-muted)"},children:an[k].description})]},k))})]})]}),s.jsxs("section",{children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💡 Tips"}),s.jsxs("ul",{style:{marginLeft:20},children:[s.jsx("li",{children:"Start with simple single-turn tests, then add complexity"}),s.jsx("li",{children:'Use "In Order" matching for most tool trajectory tests'}),s.jsx("li",{children:"Lower ROUGE thresholds (0.5-0.6) for creative/varied responses"}),s.jsx("li",{children:"Higher thresholds (0.8-0.9) for factual/precise responses"}),s.jsx("li",{children:"Use tags to organize tests by feature or priority"}),s.jsx("li",{children:"Test sub-agents individually using Target Agent selector"})]})]})]}),f==="json"&&s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[s.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:s.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this test case. You can use this with ",s.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval"}),"."]})}),s.jsx("div",{style:{flex:1,minHeight:300,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:s.jsx(Dt,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify({name:d.name,description:d.description||void 0,tags:(_=d.tags)!=null&&_.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(k=>{var R;return{user_message:k.user_message,expected_response:k.expected_response||void 0,expected_tool_calls:(R=k.expected_tool_calls)!=null&&R.length?k.expected_tool_calls.map(S=>({tool_name:S.tool_name,args:S.match_type!=="name_only"&&Object.keys(S.args||{}).length?S.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(N=d.rubrics)!=null&&N.length?d.rubrics.map(k=>k.rubric):void 0},null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),s.jsx("div",{style:{display:"flex",gap:8},children:s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var R,S;const k=JSON.stringify({name:d.name,description:d.description||void 0,tags:(R=d.tags)!=null&&R.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(v=>{var z;return{user_message:v.user_message,expected_response:v.expected_response||void 0,expected_tool_calls:(z=v.expected_tool_calls)!=null&&z.length?v.expected_tool_calls.map(F=>({tool_name:F.tool_name,args:F.match_type!=="name_only"&&Object.keys(F.args||{}).length?F.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(S=d.rubrics)!=null&&S.length?d.rubrics.map(v=>v.rubric):void 0},null,2);navigator.clipboard.writeText(k)},children:[s.jsx(Yo,{size:14})," Copy JSON"]})})]})]}),r&&s.jsxs("div",{className:"result-panel",children:[s.jsxs("div",{className:`result-header ${r.passed?"passed":"failed"}`,children:[r.passed?s.jsxs(s.Fragment,{children:[s.jsx(mr,{size:18})," ",s.jsx("strong",{children:"Passed"})]}):s.jsxs(s.Fragment,{children:[s.jsx(Gr,{size:18})," ",s.jsx("strong",{children:"Failed"})]}),s.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:12},children:[r.total_tokens?s.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},title:"Total tokens used",children:[r.total_tokens.toLocaleString()," tokens"]}):null,s.jsxs("span",{style:{color:"var(--text-muted)",fontSize:12},children:[r.duration_ms.toFixed(0),"ms"]}),r.session_id&&s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{window.location.href=`/project/${u==null?void 0:u.id}/run?session=${r.session_id}`},title:"View this session in the Run panel",style:{fontSize:11},children:[s.jsx(ag,{size:12}),"View Session"]}),c&&s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Close test results",style:{fontSize:11,padding:"4px 8px"},children:"✕"})]})]}),s.jsx("div",{className:"result-scores",children:r.metric_results.map((k,R)=>{var v;const S=ns(k.metric,k.score,k.threshold);return s.jsxs("div",{className:"score-card",children:[s.jsx("div",{className:`score-value ${k.passed?"passed":"failed"}`,children:S.value}),s.jsx("div",{className:"score-label",children:((v=an[k.metric])==null?void 0:v.name)||k.metric}),s.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",marginTop:2},children:S.comparison}),k.error&&s.jsx("div",{style:{fontSize:10,color:"var(--error)",marginTop:4},children:k.error})]},R)})}),r.rubric_results&&r.rubric_results.length>0&&s.jsxs("div",{style:{marginTop:16},children:[s.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Custom Rubrics"}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:r.rubric_results.map((k,R)=>s.jsxs("div",{style:{padding:"8px 12px",borderRadius:"var(--radius-sm)",background:k.passed?"rgba(var(--success-rgb), 0.1)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${k.passed?"var(--success)":"var(--error)"}`,display:"flex",alignItems:"center",gap:10},children:[s.jsx("span",{style:{fontSize:16,color:k.passed?"var(--success)":"var(--error)",fontWeight:"bold"},children:k.passed?"✓":"✗"}),s.jsxs("div",{style:{flex:1},children:[s.jsx("div",{style:{fontSize:12,color:"var(--text-primary)"},children:k.rubric}),k.error&&s.jsxs("div",{style:{fontSize:10,color:"var(--error)",marginTop:2},children:["Error: ",k.error]})]})]},R))})]}),r.invocation_results.map((k,R)=>s.jsxs("div",{className:"result-details",children:[s.jsxs("h5",{children:["Turn ",R+1,": ",k.user_message.length>50?k.user_message.slice(0,50)+"…":k.user_message]}),k.metric_results.length>0&&s.jsx("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:k.metric_results.map((S,v)=>{var F;const z=ns(S.metric,S.score,S.threshold);return s.jsxs("span",{style:{fontSize:11,padding:"2px 6px",borderRadius:"var(--radius-sm)",background:S.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:S.passed?"var(--success)":"var(--error)"},children:[((F=an[S.metric])==null?void 0:F.name)||S.metric,": ",z.value]},v)})}),s.jsxs("div",{className:"detail-box",children:[s.jsx("strong",{children:"Actual Response:"}),`
`,k.actual_response||"(no response)",`

`,k.actual_tool_calls.length>0&&s.jsxs(s.Fragment,{children:[s.jsx("strong",{children:"Tool Calls:"}),`
`,k.actual_tool_calls.map((S,v)=>`  ${v+1}. ${S.name}(${JSON.stringify(S.args)})
`).join("")]})]})]},R)),r.error&&s.jsxs("div",{className:"result-details",children:[s.jsx("h5",{style:{color:"var(--error)"},children:"Error"}),s.jsx("div",{className:"detail-box",style:{color:"var(--error)"},children:r.error})]})]})]})}function KS({evalSet:e,projectId:t,result:n,isRunning:r,caseResults:i,onUpdate:o,onDelete:a,onRun:l,onExport:c}){var b,T,y,g;const[u,d]=w.useState(e.name),[p,f]=w.useState(!1);w.useEffect(()=>{d(e.name)},[e.id]);const m=w.useCallback(()=>{u!==e.name&&o({name:u})},[u,e.name,o]),x=h=>h==null?"-":`${Math.round(h*100)}%`;return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(lg,{size:20,style:{color:"var(--accent-secondary)"}}),s.jsx("input",{type:"text",value:u,onChange:h=>d(h.target.value),onBlur:m,placeholder:"Eval set name"}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const h=`${window.location.origin}/project/${t}/evaluate?set=${e.id}`;navigator.clipboard.writeText(h)},title:"Copy link to this eval set",children:s.jsx(pu,{size:14})}),s.jsxs("button",{className:`btn btn-sm ${p?"btn-primary":"btn-secondary"}`,onClick:()=>f(!p),title:"View/Hide JSON",children:[s.jsx(un,{size:14}),"JSON"]}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Export as JSON (compatible with adk eval)",children:s.jsx(us,{size:14})}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:r,children:[r?s.jsx(_o,{size:14,className:"spinning"}):s.jsx(Jn,{size:14}),"Run All"]}),s.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:s.jsx(De,{size:14})})]}),s.jsx("div",{className:"editor-content",children:p?s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[s.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:s.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this evaluation set. Save this file and use with ",s.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval <agent_path> <eval_file.json>"})]})}),s.jsx("div",{style:{flex:1,minHeight:400,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:s.jsx(Dt,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(h=>{var P,C;return{name:h.name,description:h.description||void 0,tags:(P=h.tags)!=null&&P.length?h.tags:void 0,target_agent:h.target_agent!=="root_agent"?h.target_agent:void 0,invocations:h.invocations.map(_=>{var N;return{user_message:_.user_message,expected_response:_.expected_response||void 0,expected_tool_calls:(N=_.expected_tool_calls)!=null&&N.length?_.expected_tool_calls.map(k=>({tool_name:k.tool_name,args:k.match_type!=="name_only"&&Object.keys(k.args||{}).length?k.args:void 0})):void 0}}),session_input:Object.keys(h.session_input||{}).length?{state:h.session_input}:void 0,final_session_state:Object.keys(h.final_session_state||{}).length?h.final_session_state:void 0,rubrics:(C=h.rubrics)!=null&&C.length?h.rubrics.map(_=>_.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((b=e.eval_config.metrics)==null?void 0:b.filter(h=>h.enabled))||void 0}:void 0}],null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),s.jsx("div",{style:{display:"flex",gap:8},children:s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var P;const h=JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(C=>{var _,N;return{name:C.name,description:C.description||void 0,tags:(_=C.tags)!=null&&_.length?C.tags:void 0,target_agent:C.target_agent!=="root_agent"?C.target_agent:void 0,invocations:C.invocations.map(k=>{var R;return{user_message:k.user_message,expected_response:k.expected_response||void 0,expected_tool_calls:(R=k.expected_tool_calls)!=null&&R.length?k.expected_tool_calls.map(S=>({tool_name:S.tool_name,args:S.match_type!=="name_only"&&Object.keys(S.args||{}).length?S.args:void 0})):void 0}}),session_input:Object.keys(C.session_input||{}).length?{state:C.session_input}:void 0,final_session_state:Object.keys(C.final_session_state||{}).length?C.final_session_state:void 0,rubrics:(N=C.rubrics)!=null&&N.length?C.rubrics.map(k=>k.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((P=e.eval_config.metrics)==null?void 0:P.filter(C=>C.enabled))||void 0}:void 0}],null,2);navigator.clipboard.writeText(h)},children:[s.jsx(Yo,{size:14})," Copy JSON"]})})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"form-section",children:[s.jsx("h4",{children:"Description"}),s.jsx("textarea",{value:e.description,onChange:h=>o({description:h.target.value}),placeholder:"Description of this evaluation set...",style:{minHeight:40}})]}),s.jsxs("div",{className:"form-section",children:[s.jsx("h4",{children:"LLM Judge Model"}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Model used for LLM-judged metrics (safety, hallucinations, etc.)."}),s.jsx(HS,{value:((T=e.eval_config)==null?void 0:T.judge_model)||"",onChange:h=>o({eval_config:{...e.eval_config,judge_model:h}})})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:[s.jsx(pg,{size:14})," Evaluation Metrics"]}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Configure which metrics to use and their pass thresholds."}),Object.keys(an).map(h=>{var k,R,S;const P=an[h],C=(R=(k=e.eval_config)==null?void 0:k.metrics)==null?void 0:R.find(v=>v.metric===h),_=(C==null?void 0:C.enabled)??!1,N=((S=C==null?void 0:C.criterion)==null?void 0:S.threshold)??.7;return s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[s.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[s.jsx("input",{type:"checkbox",checked:_,onChange:v=>{var U;const z=[...((U=e.eval_config)==null?void 0:U.metrics)||[]],F=z.findIndex(D=>D.metric===h);v.target.checked?F===-1?z.push({metric:h,enabled:!0,criterion:{threshold:.7}}):z[F]={...z[F],enabled:!0}:F!==-1&&(z[F]={...z[F],enabled:!1}),o({eval_config:{...e.eval_config,metrics:z}})}}),s.jsx("span",{className:"toggle-slider"})]}),s.jsxs("span",{style:{fontSize:12,opacity:_?1:.5,minWidth:140,fontWeight:_?500:400},children:[P.name,P.requiresJudge&&s.jsx("span",{style:{fontSize:9,marginLeft:4,color:"var(--accent-primary)"},children:"LLM"})]}),s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:_?1:.4},children:"≥"}),s.jsx("input",{type:"number",min:0,max:1,step:.1,value:N,disabled:!_,onChange:v=>{var U;const z=[...((U=e.eval_config)==null?void 0:U.metrics)||[]],F=z.findIndex(D=>D.metric===h);F!==-1&&(z[F]={...z[F],criterion:{...z[F].criterion,threshold:parseFloat(v.target.value)||.7}},o({eval_config:{...e.eval_config,metrics:z}}))},style:{width:60,textAlign:"center",opacity:_?1:.3,padding:"2px 4px",fontSize:11}})]},h)}),s.jsxs("div",{className:"form-row",style:{marginTop:16},children:[s.jsxs("div",{className:"form-field",children:[s.jsx("label",{children:"Default Trajectory Match Type"}),s.jsxs("select",{value:((y=e.eval_config)==null?void 0:y.default_trajectory_match_type)||"in_order",onChange:h=>o({eval_config:{...e.eval_config,default_trajectory_match_type:h.target.value}}),children:[s.jsx("option",{value:"exact",children:"Exact (same order, no extras)"}),s.jsx("option",{value:"in_order",children:"In Order (extras allowed between)"}),s.jsx("option",{value:"any_order",children:"Any Order (all present, any order)"})]})]}),s.jsxs("div",{className:"form-field",children:[s.jsx("label",{children:"Number of Runs"}),s.jsx("input",{type:"number",min:1,max:10,value:((g=e.eval_config)==null?void 0:g.num_runs)||1,onChange:h=>o({eval_config:{...e.eval_config,num_runs:parseInt(h.target.value)||1}})}),s.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:"Run each test multiple times for statistical reliability."})]})]})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:[s.jsx(T0,{size:14})," Coverage Summary"]}),n?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"result-scores",children:[s.jsxs("div",{className:"score-card",children:[s.jsxs("div",{className:"score-value",style:{color:"var(--accent-primary)"},children:[n.passed_cases,"/",n.total_cases]}),s.jsx("div",{className:"score-label",children:"Cases Passed"})]}),s.jsxs("div",{className:"score-card",children:[s.jsx("div",{className:`score-value ${n.overall_pass_rate>=.8?"passed":"failed"}`,children:x(n.overall_pass_rate)}),s.jsx("div",{className:"score-label",children:"Pass Rate"})]}),Object.entries(n.metric_avg_scores||{}).map(([h,P])=>{var _;const C=ns(h,P);return s.jsxs("div",{className:"score-card",children:[s.jsx("div",{className:"score-value",children:C.value}),s.jsxs("div",{className:"score-label",children:["Avg ",((_=an[h])==null?void 0:_.name)||h]})]},h)})]}),s.jsxs("div",{style:{marginTop:16},children:[s.jsx("div",{style:{marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Overall Pass Rate"}),s.jsx("div",{className:"coverage-bar",children:s.jsx("div",{className:`coverage-fill ${n.overall_pass_rate>=.8?"passed":"failed"}`,style:{width:`${n.overall_pass_rate*100}%`}})})]}),Object.entries(n.metric_pass_rates||{}).length>0&&s.jsxs("div",{style:{marginTop:16},children:[s.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Metric Pass Rates"}),Object.entries(n.metric_pass_rates).map(([h,P])=>{var C;return s.jsxs("div",{style:{marginBottom:8},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4},children:[s.jsx("span",{children:((C=an[h])==null?void 0:C.name)||h}),s.jsx("span",{children:x(P)})]}),s.jsx("div",{className:"coverage-bar",children:s.jsx("div",{className:`coverage-fill ${P>=.8?"passed":"failed"}`,style:{width:`${P*100}%`}})})]},h)})]}),s.jsxs("div",{style:{marginTop:16},children:[s.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Individual Results"}),s.jsxs("table",{style:{width:"100%",fontSize:12,borderCollapse:"collapse"},children:[s.jsx("thead",{children:s.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[s.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Test Case"}),s.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Metrics"}),s.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Status"})]})}),s.jsx("tbody",{children:n.case_results.map(h=>s.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[s.jsx("td",{style:{padding:"8px 4px"},children:h.eval_case_name}),s.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:h.metric_results.map((P,C)=>{const _=ns(P.metric,P.score,P.threshold);return s.jsx("span",{style:{fontSize:10,padding:"2px 4px",marginRight:4,borderRadius:"var(--radius-sm)",background:P.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:P.passed?"var(--success)":"var(--error)"},children:_.value},C)})}),s.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:h.passed?s.jsx(mr,{size:14,style:{color:"var(--success)"}}):h.error?s.jsx(jo,{size:14,style:{color:"var(--warning)"}}):s.jsx(Gr,{size:14,style:{color:"var(--error)"}})})]},h.eval_case_id))})]})]})]}):s.jsxs("div",{style:{textAlign:"center",padding:"32px",color:"var(--text-muted)",background:"var(--bg-tertiary)",borderRadius:"var(--radius-md)"},children:[s.jsx(mu,{size:32,style:{marginBottom:8,opacity:.3}}),s.jsx("p",{children:"Run the evaluation set to see coverage metrics"})]})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:["Test Cases (",e.eval_cases.length,")"]}),e.eval_cases.length===0?s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"No test cases yet. Add cases to this eval set to start testing."}):s.jsx("ul",{style:{listStyle:"none",padding:0},children:e.eval_cases.map(h=>{const P=i.get(h.id);return s.jsxs("li",{style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",background:"var(--bg-tertiary)",borderRadius:"var(--radius-sm)",marginBottom:8},children:[P?P.passed?s.jsx(mr,{size:14,style:{color:"var(--success)"}}):s.jsx(Gr,{size:14,style:{color:"var(--error)"}}):s.jsx(So,{size:14,style:{color:"var(--text-muted)"}}),s.jsx("span",{style:{flex:1},children:h.name}),s.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},children:[h.invocations.length," turn(s)"]})]},h.id)})})]})]})})]})}function QS(){const{project:e,setProject:t}=at(),[n,r]=w.useState(""),[i,o]=w.useState(!0),[a,l]=w.useState(!1),[c,u]=w.useState(null),[d,p]=w.useState(!1);if(!e)return null;w.useEffect(()=>{f()},[e.id]);async function f(){o(!0),u(null);try{const g=await Jh(e.id);r(g),l(!1)}catch(g){u(g.message)}finally{o(!1)}}function m(g){g!==void 0&&(r(g),l(!0),u(null))}async function x(){o(!0),u(null);try{const g=await Kh(e.id,n);t(g),l(!1)}catch(g){u(g.message)}finally{o(!1)}}function b(){navigator.clipboard.writeText(n),p(!0),setTimeout(()=>p(!1),2e3)}function T(){const g=new Blob([n],{type:"text/yaml"}),h=URL.createObjectURL(g),P=document.createElement("a");P.href=h,P.download=`${e.name}.yaml`,P.click(),URL.revokeObjectURL(h)}function y(){const g=document.createElement("input");g.type="file",g.accept=".yaml,.yml",g.onchange=async h=>{var _;const P=(_=h.target.files)==null?void 0:_[0];if(!P)return;const C=await P.text();r(C),l(!0)},g.click()}return s.jsxs("div",{className:"yaml-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"yaml-header",children:[s.jsxs("div",{className:"yaml-title",children:[s.jsx("h3",{children:"Project Configuration"}),a&&s.jsxs("span",{className:"status-badge warning",children:[s.jsx(jo,{size:12}),"Unsaved changes"]}),c&&s.jsxs("span",{className:"status-badge error",children:[s.jsx(jo,{size:12}),c]}),d&&s.jsxs("span",{className:"status-badge success",children:[s.jsx(og,{size:12}),"Copied!"]})]}),s.jsxs("div",{className:"yaml-actions",children:[s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:b,title:"Copy to clipboard",children:[s.jsx(Yo,{size:14}),"Copy"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:T,title:"Download YAML",children:[s.jsx(us,{size:14}),"Download"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:y,title:"Upload YAML",children:[s.jsx(Xo,{size:14}),"Upload"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:f,title:"Reload from server",children:[s.jsx(Mn,{size:14}),"Reload"]}),s.jsx("button",{className:"btn btn-primary btn-sm",onClick:x,disabled:!a||i,children:"Apply Changes"})]})]}),s.jsx("div",{className:"yaml-editor",children:s.jsx(Dt,{height:"100%",language:"yaml",theme:"vs-dark",value:n,onChange:m,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),s.jsxs("div",{className:"yaml-info",children:[s.jsx("p",{children:"This YAML represents your entire project configuration including the app, agents, tools, and state keys."}),s.jsxs("p",{children:["You can edit the YAML directly, then click ",s.jsx("code",{children:"Apply Changes"})," to update the project. Use ",s.jsx("code",{children:"Download"})," to save a backup or ",s.jsx("code",{children:"Upload"})," to import a configuration."]})]})]})}function cf(e){return e.replace(/\\/g,"\\\\").replace(/"""/g,'\\"\\"\\"')}function GS(e,t="model"){if(!e)return"";const n=[`model="${e.model_name}"`];return e.api_base&&n.push(`api_base="${e.api_base}"`),e.temperature!=null&&n.push(`temperature=${e.temperature}`),e.max_output_tokens!=null&&n.push(`max_output_tokens=${e.max_output_tokens}`),e.top_p!=null&&n.push(`top_p=${e.top_p}`),e.top_k!=null&&n.push(`top_k=${e.top_k}`),e.provider==="litellm"?`${t} = LiteLlm(
    ${n.join(`,
    `)}
)`:e.provider==="anthropic"?`${t} = Claude(
    ${n.join(`,
    `)}
)`:`${t} = "${e.model_name}"  # Gemini model`}function YS(e,t){var n,r;if(e.type==="builtin")return e.name||"";if(e.type==="function")return e.name||"custom_tool";if(e.type==="agent"){const i=t.agents.find(o=>o.id===e.agent_id);return i?`AgentTool(agent=${i.name}_agent)`:"AgentTool(agent=sub_agent)"}else{if(e.type==="mcp")return(n=e.server)!=null&&n.name?`${e.server.name}_tools`:"";if(e.type==="skillset"){const i=e.skillset_id,o=(r=t.skillsets)==null?void 0:r.find(a=>a.id===i);return o?`${o.name.replace(/[^a-zA-Z0-9_]/g,"_")}_skillset`:""}}return""}function XS(e,t,n){const r=n.get(e.id)||`${e.name}_agent`;if(e.type==="LlmAgent"){const i=e,o=[`name="${e.name}"`];i.model&&o.push(`model=${e.name}_model`),i.instruction&&o.push(`instruction="""${cf(i.instruction)}"""`),i.description&&o.push(`description="${cf(i.description)}"`),i.output_key&&o.push(`output_key="${i.output_key}"`);const a=i.tools.map(c=>YS(c,t)).filter(c=>c&&!c.startsWith("#"));if(a.length>0&&o.push(`tools=[${a.join(", ")}]`),i.sub_agents&&i.sub_agents.length>0){const c=i.sub_agents.map(u=>n.get(u)||"sub_agent").join(", ");o.push(`sub_agents=[${c}]`)}i.include_contents==="none"&&o.push('include_contents="none"'),i.disallow_transfer_to_parent&&o.push("disallow_transfer_to_parent=True"),i.disallow_transfer_to_peers&&o.push("disallow_transfer_to_peers=True");const l={before_agent_callbacks:"before_agent_callback",after_agent_callbacks:"after_agent_callback",before_model_callbacks:"before_model_callback",after_model_callbacks:"after_model_callback",before_tool_callbacks:"before_tool_callback",after_tool_callbacks:"after_tool_callback"};for(const[c,u]of Object.entries(l)){const d=i[c]||[];if(d.length>0){const p=d.map(f=>{const m=t.custom_callbacks.find(x=>x.module_path===f.module_path);return m?`"${f.module_path}.${m.name}"`:`"${f.module_path}"`}).join(", ");if(d.length===1){const f=t.custom_callbacks.find(x=>x.module_path===d[0].module_path),m=f?`${d[0].module_path}.${f.name}`:d[0].module_path;o.push(`${u}="${m}"`)}else o.push(`${u}=[${p}]`)}}return`${r} = Agent(
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
)`}return`# Unknown agent type: ${e.type}`}function ZS(e){const t=[];return e.connection_type==="stdio"?(t.push(`${e.name}_tools = McpToolset(`),t.push("    connection_params=StdioConnectionParams("),t.push("        server_params=StdioServerParameters("),e.command&&t.push(`            command="${e.command}",`),e.args.length>0&&t.push(`            args=${JSON.stringify(e.args)},`),Object.keys(e.env).length>0&&t.push(`            env=${JSON.stringify(e.env)},`),t.push("        ),"),e.timeout&&t.push(`        timeout=${e.timeout},`),t.push("    ),"),t.push(")")):e.connection_type==="sse"&&(t.push(`${e.name}_tools = McpToolset(`),t.push("    connection_params=SseConnectionParams("),e.url&&t.push(`        url="${e.url}",`),e.timeout&&t.push(`        timeout=${e.timeout},`),t.push("    ),"),t.push(")")),t.join(`
`)}function eC(e,t){const n=[];return n.push(`# SkillSet: ${e.name}`),n.push(`${e.name.replace(/[^a-zA-Z0-9_]/g,"_")}_manager = KnowledgeServiceManager()`),n.push(`${e.name.replace(/[^a-zA-Z0-9_]/g,"_")}_skillset = SkillSet(`),n.push(`    skillset_id="${e.id}",`),n.push(`    project_id="${t.id}",`),n.push(`    manager=${e.name.replace(/[^a-zA-Z0-9_]/g,"_")}_manager,`),e.embedding_model?n.push(`    model_name="${e.embedding_model}",`):n.push('    model_name="text-embedding-004",'),n.push(`    search_enabled=${e.search_enabled?"True":"False"},`),n.push(`    preload_enabled=${e.preload_enabled?"True":"False"},`),e.preload_top_k&&n.push(`    preload_top_k=${e.preload_top_k},`),e.preload_min_score&&n.push(`    preload_min_score=${e.preload_min_score},`),n.push(")"),n.join(`
`)}function tC(e){const t=[];t.push('"""'),t.push(`${e.name} - Generated by ADK Playground`),e.description&&(t.push(""),t.push(e.description)),t.push('"""'),t.push("");const n=e.app.env_vars||{},r=Object.keys(n);r.length>0&&(t.push("import os"),t.push(""),t.push("# Environment Variables"),t.push("# Set these before running, or uncomment and add values:"),r.forEach(N=>{const k=n[N];if(k){const S=N.toLowerCase().includes("key")||N.toLowerCase().includes("secret")?"***":k;t.push(`os.environ["${N}"] = "${S}"  # Set your ${N}`)}else t.push(`# os.environ["${N}"] = ""  # TODO: Set your ${N}`)}),t.push(""));const i=new Set;i.add("from google.adk.agents import Agent");const o=e.agents.some(N=>N.type==="SequentialAgent"),a=e.agents.some(N=>N.type==="LoopAgent"),l=e.agents.some(N=>N.type==="ParallelAgent");o&&i.add("from google.adk.agents import SequentialAgent"),a&&i.add("from google.adk.agents import LoopAgent"),l&&i.add("from google.adk.agents import ParallelAgent"),e.agents.some(N=>{var k;return N.type==="LlmAgent"&&((k=N.model)==null?void 0:k.provider)==="litellm"})&&i.add("from google.adk.models.lite_llm import LiteLlm"),e.agents.some(N=>N.type==="LlmAgent"&&N.tools.some(k=>k.type==="agent"))&&i.add("from google.adk.tools import AgentTool");const d=new Set;if(e.agents.forEach(N=>{N.type==="LlmAgent"&&N.tools.forEach(k=>{k.type==="builtin"&&k.name&&d.add(k.name)})}),d.has("exit_loop")&&i.add("from google.adk.tools import exit_loop"),d.has("google_search")&&i.add("from google.adk.tools import google_search"),e.mcp_servers.length>0){i.add("from google.adk.tools.mcp_tool.mcp_toolset import McpToolset");const N=e.mcp_servers.some(R=>R.connection_type==="stdio"),k=e.mcp_servers.some(R=>R.connection_type==="sse");N&&(i.add("from google.adk.tools.mcp_tool.mcp_session_manager import StdioConnectionParams"),i.add("from mcp import StdioServerParameters")),k&&i.add("from google.adk.tools.mcp_tool.mcp_session_manager import SseConnectionParams")}e.skillsets&&e.skillsets.length>0;const f=new Set;e.agents.forEach(N=>{"tools"in N&&N.tools&&N.tools.forEach(k=>{k.type==="skillset"&&f.add(k.skillset_id)})}),f.size>0&&(i.add("from skillset import SkillSet"),i.add("from knowledge_service import KnowledgeServiceManager")),i.add("from google.adk.apps import App");const m=e.app.plugins.length>0;m&&e.app.plugins.forEach(N=>{N.type==="ReflectAndRetryToolPlugin"&&i.add("from google.adk.plugins import ReflectAndRetryToolPlugin")});const x=Array.from(i).sort();t.push(...x),t.push(""),t.push("");const b=new Map;e.agents.forEach(N=>{const k=N.name.endsWith("_agent")?N.name:`${N.name}_agent`;b.set(N.id,k)});const T=[],y=new Set;function g(N){if(y.has(N))return;const k=e.agents.find(R=>R.id===N);k&&(k.sub_agents.forEach(R=>g(R)),y.add(N),T.push(k))}e.agents.forEach(N=>g(N.id));const h=new Map;T.forEach(N=>{N.type==="LlmAgent"&&N.tools.forEach(k=>{k.type==="mcp"&&k.server&&h.set(k.server.name,k.server)})}),h.size>0&&(t.push("# MCP Server Toolsets"),h.forEach(N=>{t.push(ZS(N)),t.push("")}),t.push(""));const P=new Set;T.forEach(N=>{N.type==="LlmAgent"&&N.tools.forEach(k=>{k.type==="skillset"&&P.add(k.skillset_id)})}),P.size>0&&e.skillsets&&(t.push("# SkillSet Toolsets"),t.push("# Note: SkillSets store knowledge in ~/.adk-playground/skillsets/{project_id}/"),P.forEach(N=>{var R;const k=(R=e.skillsets)==null?void 0:R.find(S=>S.id===N);k&&(t.push(eC(k,e)),t.push(""))}),t.push("")),e.custom_tools.length>0&&(t.push("# Custom Tools"),e.custom_tools.forEach(N=>{t.push(N.code),t.push("")}),t.push("")),e.custom_callbacks&&e.custom_callbacks.length>0&&(t.push("# Custom Callbacks"),e.custom_callbacks.forEach(N=>{t.push(N.code),t.push("")}),t.push("")),t.push("# Models"),T.forEach(N=>{N.type==="LlmAgent"&&N.model&&(t.push(GS(N.model,`${N.name}_model`)),t.push(""))}),t.push(""),t.push("# Agents"),T.forEach(N=>{t.push(XS(N,e,b)),t.push("")});const C=e.agents.find(N=>N.id===e.app.root_agent_id),_=C?b.get(C.id):"root_agent";if(t.push(""),t.push(""),t.push("# App Configuration"),t.push("app = App("),t.push(`    name="${e.app.name}",`),t.push(`    root_agent=${_},`),m){const N=e.app.plugins.map(k=>k.type==="ReflectAndRetryToolPlugin"?`        ReflectAndRetryToolPlugin(max_retries=${k.max_retries||3})`:`        # ${k.type}()`);t.push("    plugins=["),t.push(N.join(`,
`)),t.push("    ],")}return t.push(")"),t.join(`
`)}function nC(){const{project:e}=at(),[t,n]=w.useState(!1);if(!e)return null;const r=w.useMemo(()=>tC(e),[e]);function i(){navigator.clipboard.writeText(r),n(!0),setTimeout(()=>n(!1),2e3)}function o(){const a=new Blob([r],{type:"text/x-python"}),l=URL.createObjectURL(a),c=document.createElement("a");c.href=l,c.download=`${e.name}_agent.py`,c.click(),URL.revokeObjectURL(l)}return s.jsxs("div",{className:"code-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"code-header",children:[s.jsxs("div",{className:"code-title",children:[s.jsx(un,{size:16}),s.jsx("h3",{children:"Python Code"}),s.jsx("span",{className:"badge",children:"Generated"}),t&&s.jsxs("span",{className:"status-badge success",children:[s.jsx(og,{size:12}),"Copied!"]})]}),s.jsxs("div",{className:"code-actions",children:[s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:i,title:"Copy to clipboard",children:[s.jsx(Yo,{size:14}),"Copy"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:o,title:"Download Python file",children:[s.jsx(us,{size:14}),"Download"]})]})]}),s.jsx("div",{className:"code-editor",children:s.jsx(Dt,{height:"100%",language:"python",theme:"vs-dark",value:r,options:{readOnly:!0,minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),s.jsxs("div",{className:"code-info",children:[s.jsx("p",{children:"This is the Python code equivalent of your project configuration. You can use this code directly with ADK."}),s.jsxs("p",{children:["Place this in a file named ",s.jsx("code",{children:"agent.py"})," inside your agent directory, then run with ",s.jsx("code",{children:"adk web ."})," or ",s.jsx("code",{children:"adk run your_agent"}),"."]})]})]})}const rC=[{id:"app",label:"App",icon:pg},{id:"agents",label:"Agents",icon:lr},{id:"tools",label:"Tools",icon:Yt},{id:"callbacks",label:"Callbacks",icon:un},{id:"run",label:"Run",icon:ug},{id:"skillsets",label:"SkillSets",icon:b0},{id:"eval",label:"Evaluate",icon:Xl},{id:"yaml",label:"YAML",icon:w0},{id:"code",label:"Code",icon:un}],iC=["app","agents","tools","callbacks","run","skillsets","eval","yaml","code"];function Ya(){var D,ne;const{projectId:e,tab:t,itemId:n}=w1(),r=lu(),{project:i,setProject:o,activeTab:a,setActiveTab:l,hasUnsavedChanges:c,setHasUnsavedChanges:u,selectedAgentId:d,setSelectedAgentId:p,selectedToolId:f,setSelectedToolId:m}=at(),[x,b]=w.useState(!0),[T,y]=w.useState(!1),[g,h]=w.useState(!1),[P,C]=w.useState(null),_=w.useRef(!0),N=w.useRef(null);w.useEffect(()=>{t&&iC.includes(t)?l(t):!t&&e&&r(`/project/${e}/${a}`,{replace:!0})},[t,e]),w.useEffect(()=>{t==="agents"&&n?p(n):t==="tools"&&n&&m(n)},[t,n]);function k(L){l(L),L==="agents"&&d?r(`/project/${e}/${L}/${d}`,{replace:!0}):L==="tools"&&f?r(`/project/${e}/${L}/${f}`,{replace:!0}):r(`/project/${e}/${L}`,{replace:!0})}function R(L){L?r(`/project/${e}/${a}/${L}`,{replace:!0}):r(`/project/${e}/${a}`,{replace:!0})}w.useEffect(()=>(e&&S(e),()=>{o(null),u(!1)}),[e]);async function S(L){_.current=!0;try{const I=await Uh(L);o(I),N.current=JSON.stringify(I),u(!1)}catch(I){console.error("Failed to load project:",I),r("/")}finally{b(!1),setTimeout(()=>{_.current=!1},100)}}async function v(){if(i){y(!0);try{const{eval_sets:L,...I}=i;await Jl(i.id,I),N.current=JSON.stringify(i),u(!1)}catch(L){console.error("Failed to save project:",L)}finally{y(!1)}}}async function z(){if(i){h(!0),C(null),window.dispatchEvent(new CustomEvent("eval-tests-started"));try{let L=0,I=0;const A=[],j=[];for(const J of i.eval_sets||[]){if(J.eval_cases.length===0)continue;const Q=await Ve.post(`/projects/${i.id}/eval-sets/${J.id}/run`,{});Q.result&&(L+=Q.result.passed_cases||0,I+=Q.result.total_cases||0,Q.result.case_results&&A.push(...Q.result.case_results),j.push(Q.result.eval_set_name||J.name||J.id))}if(A.length>0){const J={id:Date.now().toString(36)+Math.random().toString(36).substr(2,5),eval_set_id:"batch",eval_set_name:j.length>1?`All Tests (${j.length} sets)`:j[0]||"All Tests",started_at:Date.now()/1e3,completed_at:Date.now()/1e3,total_cases:I,passed_cases:L,failed_cases:I-L,case_results:A};try{await Ve.post(`/projects/${i.id}/eval-history`,J)}catch(Q){console.warn("Failed to save batch eval run to history:",Q)}}C({passed:L,total:I}),window.dispatchEvent(new CustomEvent("eval-tests-completed")),setTimeout(()=>C(null),5e3)}catch(L){console.error("Failed to run tests:",L),C({passed:0,total:-1}),setTimeout(()=>C(null),5e3)}finally{h(!1)}}}const F=w.useRef(null);w.useEffect(()=>{if(i&&!_.current&&F.current){const L=i.app.models||[],I=F.current||[];if(L.some((j,J)=>{const Q=I.find(E=>E.id===j.id);return Q?Q.provider!==j.provider||Q.model_name!==j.model_name||Q.api_base!==j.api_base||Q.temperature!==j.temperature||Q.max_output_tokens!==j.max_output_tokens||Q.top_p!==j.top_p||Q.top_k!==j.top_k:!1})){const j=i.app.default_model_id,J=i.agents.map(E=>{if(E.type==="LlmAgent"&&E.model){const xe=E.model._appModelId;if(xe){const M=L.find(te=>te.id===xe);if(M)return{...E,model:{provider:M.provider,model_name:M.model_name,api_base:M.api_base,temperature:M.temperature,max_output_tokens:M.max_output_tokens,top_p:M.top_p,top_k:M.top_k,fallbacks:[],_appModelId:xe}}}else if(j){const M=L.find(te=>te.id===j);if(M&&E.model.provider===M.provider&&E.model.model_name===M.model_name&&E.model.api_base===M.api_base)return{...E,model:{provider:M.provider,model_name:M.model_name,api_base:M.api_base,temperature:M.temperature,max_output_tokens:M.max_output_tokens,top_p:M.top_p,top_k:M.top_k,fallbacks:[],_appModelId:j}}}}return E});J.some((E,xe)=>JSON.stringify(E)!==JSON.stringify(i.agents[xe]))&&o({...i,agents:J})}}i&&(F.current=i.app.models||[])},[i==null?void 0:i.app.models,i,o]);const U=w.useRef(null);return w.useEffect(()=>(i&&!_.current&&N.current&&JSON.stringify(i)!==N.current&&(u(!0),U.current&&clearTimeout(U.current),U.current=setTimeout(async()=>{try{const{eval_sets:I,...A}=i;await Jl(i.id,A),N.current=JSON.stringify(i),u(!1)}catch(I){console.error("Auto-save failed:",I)}},500)),()=>{U.current&&clearTimeout(U.current)}),[i]),x?s.jsxs("div",{className:"loading-screen",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("header",{className:"top-bar",children:[s.jsxs("div",{className:"top-bar-left",children:[s.jsxs("button",{className:"back-btn",onClick:()=>r("/"),children:[s.jsx(v0,{size:18}),"Project"]}),s.jsx("h1",{className:"project-name",children:i.name})]}),s.jsx("nav",{className:"tabs-bar",children:rC.map(L=>s.jsxs("button",{className:`tab-btn ${a===L.id?"active":""}`,onClick:()=>k(L.id),children:[s.jsx(L.icon,{size:14}),L.label]},L.id))}),s.jsxs("div",{className:"top-bar-right",children:[s.jsxs("button",{className:`btn ${P?P.total===-1?"btn-error":P.passed===P.total?"btn-success":"btn-warning":"btn-secondary"}`,onClick:z,disabled:g||!((D=i==null?void 0:i.eval_sets)!=null&&D.some(L=>L.eval_cases.length>0)),title:(ne=i==null?void 0:i.eval_sets)!=null&&ne.some(L=>L.eval_cases.length>0)?"Run all evaluation tests":"No test cases defined",style:{marginRight:8},children:[g?s.jsx(N0,{size:16,className:"spin"}):s.jsx(Jn,{size:16}),g?"Testing...":P?P.total===-1?"Error":`${P.passed}/${P.total}`:"Test"]}),s.jsxs("button",{className:"btn btn-primary",onClick:v,disabled:T,children:[s.jsx(No,{size:16}),T?"Saving...":"Save"]})]})]}),s.jsxs("main",{className:"main-content",children:[a==="app"&&s.jsx(U0,{}),a==="agents"&&s.jsx(Q2,{onSelectAgent:R}),a==="tools"&&s.jsx(zS,{onSelectTool:R}),a==="callbacks"&&s.jsx(PS,{onSelectCallback:R}),a==="run"&&s.jsx(DS,{}),a==="skillsets"&&s.jsx(US,{}),a==="eval"&&s.jsx(WS,{}),a==="yaml"&&s.jsx(QS,{}),a==="code"&&s.jsx(nC,{})]})]}):null}function sC(){const{setMcpServers:e,setBuiltinTools:t}=at();return w.useEffect(()=>{cu().then(e).catch(console.error),Qh().then(t).catch(console.error)},[e,t]),s.jsxs(D1,{children:[s.jsx(br,{path:"/",element:s.jsx(M0,{})}),s.jsx(br,{path:"/project/:projectId",element:s.jsx(Ya,{})}),s.jsx(br,{path:"/project/:projectId/:tab",element:s.jsx(Ya,{})}),s.jsx(br,{path:"/project/:projectId/:tab/:itemId",element:s.jsx(Ya,{})}),s.jsx(br,{path:"*",element:s.jsx(I1,{to:"/",replace:!0})})]})}Xa.createRoot(document.getElementById("root")).render(s.jsx(Nt.StrictMode,{children:s.jsx(U1,{children:s.jsx(sC,{})})}));
