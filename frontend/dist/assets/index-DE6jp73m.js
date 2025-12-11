function qg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function v_(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Jp={exports:{}},yl={},Yp={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ki=Symbol.for("react.element"),Kg=Symbol.for("react.portal"),Gg=Symbol.for("react.fragment"),Qg=Symbol.for("react.strict_mode"),Jg=Symbol.for("react.profiler"),Yg=Symbol.for("react.provider"),Xg=Symbol.for("react.context"),Zg=Symbol.for("react.forward_ref"),ex=Symbol.for("react.suspense"),tx=Symbol.for("react.memo"),nx=Symbol.for("react.lazy"),yu=Symbol.iterator;function rx(e){return e===null||typeof e!="object"?null:(e=yu&&e[yu]||e["@@iterator"],typeof e=="function"?e:null)}var Xp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zp=Object.assign,ef={};function Fr(e,t,n){this.props=e,this.context=t,this.refs=ef,this.updater=n||Xp}Fr.prototype.isReactComponent={};Fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function tf(){}tf.prototype=Fr.prototype;function Js(e,t,n){this.props=e,this.context=t,this.refs=ef,this.updater=n||Xp}var Ys=Js.prototype=new tf;Ys.constructor=Js;Zp(Ys,Fr.prototype);Ys.isPureReactComponent=!0;var vu=Array.isArray,nf=Object.prototype.hasOwnProperty,Xs={current:null},rf={key:!0,ref:!0,__self:!0,__source:!0};function of(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)nf.call(t,r)&&!rf.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Ki,type:e,key:o,ref:a,props:i,_owner:Xs.current}}function ix(e,t){return{$$typeof:Ki,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Zs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ki}function ox(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var bu=/\/+/g;function Ul(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ox(""+e.key):t.toString(36)}function Co(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ki:case Kg:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Ul(a,0):r,vu(i)?(n="",e!=null&&(n=e.replace(bu,"$&/")+"/"),Co(i,t,n,"",function(u){return u})):i!=null&&(Zs(i)&&(i=ix(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(bu,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",vu(e))for(var s=0;s<e.length;s++){o=e[s];var c=r+Ul(o,s);a+=Co(o,t,n,c,i)}else if(c=rx(e),typeof c=="function")for(e=c.call(e),s=0;!(o=e.next()).done;)o=o.value,c=r+Ul(o,s++),a+=Co(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ro(e,t,n){if(e==null)return e;var r=[],i=0;return Co(e,r,"","",function(o){return t.call(n,o,i++)}),r}function lx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ye={current:null},No={transition:null},ax={ReactCurrentDispatcher:Ye,ReactCurrentBatchConfig:No,ReactCurrentOwner:Xs};function lf(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:ro,forEach:function(e,t,n){ro(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ro(e,function(){t++}),t},toArray:function(e){return ro(e,function(t){return t})||[]},only:function(e){if(!Zs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};se.Component=Fr;se.Fragment=Gg;se.Profiler=Jg;se.PureComponent=Js;se.StrictMode=Qg;se.Suspense=ex;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ax;se.act=lf;se.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zp({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Xs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)nf.call(t,c)&&!rf.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Ki,type:e.type,key:i,ref:o,props:r,_owner:a}};se.createContext=function(e){return e={$$typeof:Xg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Yg,_context:e},e.Consumer=e};se.createElement=of;se.createFactory=function(e){var t=of.bind(null,e);return t.type=e,t};se.createRef=function(){return{current:null}};se.forwardRef=function(e){return{$$typeof:Zg,render:e}};se.isValidElement=Zs;se.lazy=function(e){return{$$typeof:nx,_payload:{_status:-1,_result:e},_init:lx}};se.memo=function(e,t){return{$$typeof:tx,type:e,compare:t===void 0?null:t}};se.startTransition=function(e){var t=No.transition;No.transition={};try{e()}finally{No.transition=t}};se.unstable_act=lf;se.useCallback=function(e,t){return Ye.current.useCallback(e,t)};se.useContext=function(e){return Ye.current.useContext(e)};se.useDebugValue=function(){};se.useDeferredValue=function(e){return Ye.current.useDeferredValue(e)};se.useEffect=function(e,t){return Ye.current.useEffect(e,t)};se.useId=function(){return Ye.current.useId()};se.useImperativeHandle=function(e,t,n){return Ye.current.useImperativeHandle(e,t,n)};se.useInsertionEffect=function(e,t){return Ye.current.useInsertionEffect(e,t)};se.useLayoutEffect=function(e,t){return Ye.current.useLayoutEffect(e,t)};se.useMemo=function(e,t){return Ye.current.useMemo(e,t)};se.useReducer=function(e,t,n){return Ye.current.useReducer(e,t,n)};se.useRef=function(e){return Ye.current.useRef(e)};se.useState=function(e){return Ye.current.useState(e)};se.useSyncExternalStore=function(e,t,n){return Ye.current.useSyncExternalStore(e,t,n)};se.useTransition=function(){return Ye.current.useTransition()};se.version="18.3.1";Yp.exports=se;var C=Yp.exports;const Rt=xl(C),sx=qg({__proto__:null,default:Rt},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cx=C,ux=Symbol.for("react.element"),dx=Symbol.for("react.fragment"),px=Object.prototype.hasOwnProperty,fx=cx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mx={key:!0,ref:!0,__self:!0,__source:!0};function af(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)px.call(t,r)&&!mx.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ux,type:e,key:o,ref:a,props:i,_owner:fx.current}}yl.Fragment=dx;yl.jsx=af;yl.jsxs=af;Jp.exports=yl;var l=Jp.exports,Ma={},sf={exports:{}},xt={},cf={exports:{}},uf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,V){var S=I.length;I.push(V);e:for(;0<S;){var W=S-1>>>1,G=I[W];if(0<i(G,V))I[W]=V,I[S]=G,S=W;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var V=I[0],S=I.pop();if(S!==V){I[0]=S;e:for(var W=0,G=I.length,N=G>>>1;W<N;){var ne=2*(W+1)-1,ie=I[ne],de=ne+1,U=I[de];if(0>i(ie,S))de<G&&0>i(U,ie)?(I[W]=U,I[de]=S,W=de):(I[W]=ie,I[ne]=S,W=ne);else if(de<G&&0>i(U,S))I[W]=U,I[de]=S,W=de;else break e}}return V}function i(I,V){var S=I.sortIndex-V.sortIndex;return S!==0?S:I.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var c=[],u=[],d=1,p=null,f=3,m=!1,w=!1,j=!1,z=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(I){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=I)r(u),V.sortIndex=V.expirationTime,t(c,V);else break;V=n(u)}}function P(I){if(j=!1,b(I),!w)if(n(c)!==null)w=!0,A(k);else{var V=n(u);V!==null&&T(P,V.startTime-I)}}function k(I,V){w=!1,j&&(j=!1,h(O),O=-1),m=!0;var S=f;try{for(b(V),p=n(c);p!==null&&(!(p.expirationTime>V)||I&&!v());){var W=p.callback;if(typeof W=="function"){p.callback=null,f=p.priorityLevel;var G=W(p.expirationTime<=V);V=e.unstable_now(),typeof G=="function"?p.callback=G:p===n(c)&&r(c),b(V)}else r(c);p=n(c)}if(p!==null)var N=!0;else{var ne=n(u);ne!==null&&T(P,ne.startTime-V),N=!1}return N}finally{p=null,f=S,m=!1}}var y=!1,L=null,O=-1,$=5,_=-1;function v(){return!(e.unstable_now()-_<$)}function g(){if(L!==null){var I=e.unstable_now();_=I;var V=!0;try{V=L(!0,I)}finally{V?E():(y=!1,L=null)}}else y=!1}var E;if(typeof x=="function")E=function(){x(g)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,R=D.port2;D.port1.onmessage=g,E=function(){R.postMessage(null)}}else E=function(){z(g,0)};function A(I){L=I,y||(y=!0,E())}function T(I,V){O=z(function(){I(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){w||m||(w=!0,A(k))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(I){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var S=f;f=V;try{return I()}finally{f=S}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,V){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var S=f;f=I;try{return V()}finally{f=S}},e.unstable_scheduleCallback=function(I,V,S){var W=e.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?W+S:W):S=W,I){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=S+G,I={id:d++,callback:V,priorityLevel:I,startTime:S,expirationTime:G,sortIndex:-1},S>W?(I.sortIndex=S,t(u,I),n(c)===null&&I===n(u)&&(j?(h(O),O=-1):j=!0,T(P,S-W))):(I.sortIndex=G,t(c,I),w||m||(w=!0,A(k))),I},e.unstable_shouldYield=v,e.unstable_wrapCallback=function(I){var V=f;return function(){var S=f;f=V;try{return I.apply(this,arguments)}finally{f=S}}}})(uf);cf.exports=uf;var hx=cf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gx=C,gt=hx;function q(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var df=new Set,Si={};function Zn(e,t){Tr(e,t),Tr(e+"Capture",t)}function Tr(e,t){for(Si[e]=t,e=0;e<t.length;e++)df.add(t[e])}var nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oa=Object.prototype.hasOwnProperty,xx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ku={},wu={};function yx(e){return Oa.call(wu,e)?!0:Oa.call(ku,e)?!1:xx.test(e)?wu[e]=!0:(ku[e]=!0,!1)}function vx(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function bx(e,t,n,r){if(t===null||typeof t>"u"||vx(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Xe(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ue[e]=new Xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ue[t]=new Xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ue[e]=new Xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ue[e]=new Xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ue[e]=new Xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ue[e]=new Xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ue[e]=new Xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ue[e]=new Xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ue[e]=new Xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var ec=/[\-:]([a-z])/g;function tc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ec,tc);Ue[t]=new Xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ec,tc);Ue[t]=new Xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ec,tc);Ue[t]=new Xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ue[e]=new Xe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ue[e]=new Xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function nc(e,t,n,r){var i=Ue.hasOwnProperty(t)?Ue[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(bx(t,n,i,r)&&(n=null),r||i===null?yx(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var an=gx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,io=Symbol.for("react.element"),cr=Symbol.for("react.portal"),ur=Symbol.for("react.fragment"),rc=Symbol.for("react.strict_mode"),Da=Symbol.for("react.profiler"),pf=Symbol.for("react.provider"),ff=Symbol.for("react.context"),ic=Symbol.for("react.forward_ref"),$a=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),oc=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),mf=Symbol.for("react.offscreen"),ju=Symbol.iterator;function Gr(e){return e===null||typeof e!="object"?null:(e=ju&&e[ju]||e["@@iterator"],typeof e=="function"?e:null)}var Ne=Object.assign,Vl;function li(e){if(Vl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vl=t&&t[1]||""}return`
`+Vl+e}var Wl=!1;function Hl(e,t){if(!e||Wl)return"";Wl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=s);break}}}finally{Wl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?li(e):""}function kx(e){switch(e.tag){case 5:return li(e.type);case 16:return li("Lazy");case 13:return li("Suspense");case 19:return li("SuspenseList");case 0:case 2:case 15:return e=Hl(e.type,!1),e;case 11:return e=Hl(e.type.render,!1),e;case 1:return e=Hl(e.type,!0),e;default:return""}}function Ba(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ur:return"Fragment";case cr:return"Portal";case Da:return"Profiler";case rc:return"StrictMode";case $a:return"Suspense";case Fa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ff:return(e.displayName||"Context")+".Consumer";case pf:return(e._context.displayName||"Context")+".Provider";case ic:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case oc:return t=e.displayName||null,t!==null?t:Ba(e.type)||"Memo";case un:t=e._payload,e=e._init;try{return Ba(e(t))}catch{}}return null}function wx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ba(t);case 8:return t===rc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jx(e){var t=hf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function oo(e){e._valueTracker||(e._valueTracker=jx(e))}function gf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=hf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Uo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ua(e,t){var n=t.checked;return Ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Su(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Nn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function xf(e,t){t=t.checked,t!=null&&nc(e,"checked",t,!1)}function Va(e,t){xf(e,t);var n=Nn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Wa(e,t.type,n):t.hasOwnProperty("defaultValue")&&Wa(e,t.type,Nn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _u(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Wa(e,t,n){(t!=="number"||Uo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ai=Array.isArray;function wr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Nn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ha(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(q(91));return Ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(q(92));if(ai(n)){if(1<n.length)throw Error(q(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Nn(n)}}function yf(e,t){var n=Nn(t.value),r=Nn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Nu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function vf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?vf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lo,bf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(lo=lo||document.createElement("div"),lo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=lo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _i(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var di={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sx=["Webkit","ms","Moz","O"];Object.keys(di).forEach(function(e){Sx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),di[t]=di[e]})});function kf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||di.hasOwnProperty(e)&&di[e]?(""+t).trim():t+"px"}function wf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=kf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var _x=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ka(e,t){if(t){if(_x[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(q(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(q(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(q(61))}if(t.style!=null&&typeof t.style!="object")throw Error(q(62))}}function Ga(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qa=null;function lc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ja=null,jr=null,Sr=null;function Eu(e){if(e=Ji(e)){if(typeof Ja!="function")throw Error(q(280));var t=e.stateNode;t&&(t=jl(t),Ja(e.stateNode,e.type,t))}}function jf(e){jr?Sr?Sr.push(e):Sr=[e]:jr=e}function Sf(){if(jr){var e=jr,t=Sr;if(Sr=jr=null,Eu(e),t)for(e=0;e<t.length;e++)Eu(t[e])}}function _f(e,t){return e(t)}function Cf(){}var ql=!1;function Nf(e,t,n){if(ql)return e(t,n);ql=!0;try{return _f(e,t,n)}finally{ql=!1,(jr!==null||Sr!==null)&&(Cf(),Sf())}}function Ci(e,t){var n=e.stateNode;if(n===null)return null;var r=jl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(q(231,t,typeof n));return n}var Ya=!1;if(nn)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){Ya=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{Ya=!1}function Cx(e,t,n,r,i,o,a,s,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var pi=!1,Vo=null,Wo=!1,Xa=null,Nx={onError:function(e){pi=!0,Vo=e}};function Ex(e,t,n,r,i,o,a,s,c){pi=!1,Vo=null,Cx.apply(Nx,arguments)}function zx(e,t,n,r,i,o,a,s,c){if(Ex.apply(this,arguments),pi){if(pi){var u=Vo;pi=!1,Vo=null}else throw Error(q(198));Wo||(Wo=!0,Xa=u)}}function er(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ef(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zu(e){if(er(e)!==e)throw Error(q(188))}function Tx(e){var t=e.alternate;if(!t){if(t=er(e),t===null)throw Error(q(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return zu(i),e;if(o===r)return zu(i),t;o=o.sibling}throw Error(q(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(q(189))}}if(n.alternate!==r)throw Error(q(190))}if(n.tag!==3)throw Error(q(188));return n.stateNode.current===n?e:t}function zf(e){return e=Tx(e),e!==null?Tf(e):null}function Tf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Tf(e);if(t!==null)return t;e=e.sibling}return null}var Pf=gt.unstable_scheduleCallback,Tu=gt.unstable_cancelCallback,Px=gt.unstable_shouldYield,Lx=gt.unstable_requestPaint,Te=gt.unstable_now,Ax=gt.unstable_getCurrentPriorityLevel,ac=gt.unstable_ImmediatePriority,Lf=gt.unstable_UserBlockingPriority,Ho=gt.unstable_NormalPriority,Ix=gt.unstable_LowPriority,Af=gt.unstable_IdlePriority,vl=null,Ht=null;function Rx(e){if(Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(vl,e,void 0,(e.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:Dx,Mx=Math.log,Ox=Math.LN2;function Dx(e){return e>>>=0,e===0?32:31-(Mx(e)/Ox|0)|0}var ao=64,so=4194304;function si(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=si(s):(o&=a,o!==0&&(r=si(o)))}else a=n&~i,a!==0?r=si(a):o!==0&&(r=si(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Mt(t),i=1<<n,r|=e[n],t&=~i;return r}function $x(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fx(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Mt(o),s=1<<a,c=i[a];c===-1?(!(s&n)||s&r)&&(i[a]=$x(s,t)):c<=t&&(e.expiredLanes|=s),o&=~s}}function Za(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function If(){var e=ao;return ao<<=1,!(ao&4194240)&&(ao=64),e}function Kl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Mt(t),e[t]=n}function Bx(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Mt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function sc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Mt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ge=0;function Rf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Mf,cc,Of,Df,$f,es=!1,co=[],yn=null,vn=null,bn=null,Ni=new Map,Ei=new Map,pn=[],Ux="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pu(e,t){switch(e){case"focusin":case"focusout":yn=null;break;case"dragenter":case"dragleave":vn=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":Ni.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ei.delete(t.pointerId)}}function Jr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ji(t),t!==null&&cc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Vx(e,t,n,r,i){switch(t){case"focusin":return yn=Jr(yn,e,t,n,r,i),!0;case"dragenter":return vn=Jr(vn,e,t,n,r,i),!0;case"mouseover":return bn=Jr(bn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ni.set(o,Jr(Ni.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ei.set(o,Jr(Ei.get(o)||null,e,t,n,r,i)),!0}return!1}function Ff(e){var t=$n(e.target);if(t!==null){var n=er(t);if(n!==null){if(t=n.tag,t===13){if(t=Ef(n),t!==null){e.blockedOn=t,$f(e.priority,function(){Of(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Eo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ts(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Qa=r,n.target.dispatchEvent(r),Qa=null}else return t=Ji(n),t!==null&&cc(t),e.blockedOn=n,!1;t.shift()}return!0}function Lu(e,t,n){Eo(e)&&n.delete(t)}function Wx(){es=!1,yn!==null&&Eo(yn)&&(yn=null),vn!==null&&Eo(vn)&&(vn=null),bn!==null&&Eo(bn)&&(bn=null),Ni.forEach(Lu),Ei.forEach(Lu)}function Yr(e,t){e.blockedOn===t&&(e.blockedOn=null,es||(es=!0,gt.unstable_scheduleCallback(gt.unstable_NormalPriority,Wx)))}function zi(e){function t(i){return Yr(i,e)}if(0<co.length){Yr(co[0],e);for(var n=1;n<co.length;n++){var r=co[n];r.blockedOn===e&&(r.blockedOn=null)}}for(yn!==null&&Yr(yn,e),vn!==null&&Yr(vn,e),bn!==null&&Yr(bn,e),Ni.forEach(t),Ei.forEach(t),n=0;n<pn.length;n++)r=pn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<pn.length&&(n=pn[0],n.blockedOn===null);)Ff(n),n.blockedOn===null&&pn.shift()}var _r=an.ReactCurrentBatchConfig,Ko=!0;function Hx(e,t,n,r){var i=ge,o=_r.transition;_r.transition=null;try{ge=1,uc(e,t,n,r)}finally{ge=i,_r.transition=o}}function qx(e,t,n,r){var i=ge,o=_r.transition;_r.transition=null;try{ge=4,uc(e,t,n,r)}finally{ge=i,_r.transition=o}}function uc(e,t,n,r){if(Ko){var i=ts(e,t,n,r);if(i===null)ra(e,t,r,Go,n),Pu(e,r);else if(Vx(i,e,t,n,r))r.stopPropagation();else if(Pu(e,r),t&4&&-1<Ux.indexOf(e)){for(;i!==null;){var o=Ji(i);if(o!==null&&Mf(o),o=ts(e,t,n,r),o===null&&ra(e,t,r,Go,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ra(e,t,r,null,n)}}var Go=null;function ts(e,t,n,r){if(Go=null,e=lc(r),e=$n(e),e!==null)if(t=er(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ef(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Go=e,null}function Bf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ax()){case ac:return 1;case Lf:return 4;case Ho:case Ix:return 16;case Af:return 536870912;default:return 16}default:return 16}}var mn=null,dc=null,zo=null;function Uf(){if(zo)return zo;var e,t=dc,n=t.length,r,i="value"in mn?mn.value:mn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return zo=i.slice(e,1<r?1-r:void 0)}function To(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function uo(){return!0}function Au(){return!1}function yt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?uo:Au,this.isPropagationStopped=Au,this}return Ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=uo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=uo)},persist:function(){},isPersistent:uo}),t}var Br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pc=yt(Br),Qi=Ne({},Br,{view:0,detail:0}),Kx=yt(Qi),Gl,Ql,Xr,bl=Ne({},Qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xr&&(Xr&&e.type==="mousemove"?(Gl=e.screenX-Xr.screenX,Ql=e.screenY-Xr.screenY):Ql=Gl=0,Xr=e),Gl)},movementY:function(e){return"movementY"in e?e.movementY:Ql}}),Iu=yt(bl),Gx=Ne({},bl,{dataTransfer:0}),Qx=yt(Gx),Jx=Ne({},Qi,{relatedTarget:0}),Jl=yt(Jx),Yx=Ne({},Br,{animationName:0,elapsedTime:0,pseudoElement:0}),Xx=yt(Yx),Zx=Ne({},Br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ey=yt(Zx),ty=Ne({},Br,{data:0}),Ru=yt(ty),ny={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ry={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=iy[e])?!!t[e]:!1}function fc(){return oy}var ly=Ne({},Qi,{key:function(e){if(e.key){var t=ny[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=To(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ry[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fc,charCode:function(e){return e.type==="keypress"?To(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?To(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ay=yt(ly),sy=Ne({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mu=yt(sy),cy=Ne({},Qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fc}),uy=yt(cy),dy=Ne({},Br,{propertyName:0,elapsedTime:0,pseudoElement:0}),py=yt(dy),fy=Ne({},bl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),my=yt(fy),hy=[9,13,27,32],mc=nn&&"CompositionEvent"in window,fi=null;nn&&"documentMode"in document&&(fi=document.documentMode);var gy=nn&&"TextEvent"in window&&!fi,Vf=nn&&(!mc||fi&&8<fi&&11>=fi),Ou=" ",Du=!1;function Wf(e,t){switch(e){case"keyup":return hy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dr=!1;function xy(e,t){switch(e){case"compositionend":return Hf(t);case"keypress":return t.which!==32?null:(Du=!0,Ou);case"textInput":return e=t.data,e===Ou&&Du?null:e;default:return null}}function yy(e,t){if(dr)return e==="compositionend"||!mc&&Wf(e,t)?(e=Uf(),zo=dc=mn=null,dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vf&&t.locale!=="ko"?null:t.data;default:return null}}var vy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vy[e.type]:t==="textarea"}function qf(e,t,n,r){jf(r),t=Qo(t,"onChange"),0<t.length&&(n=new pc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var mi=null,Ti=null;function by(e){rm(e,0)}function kl(e){var t=mr(e);if(gf(t))return e}function ky(e,t){if(e==="change")return t}var Kf=!1;if(nn){var Yl;if(nn){var Xl="oninput"in document;if(!Xl){var Fu=document.createElement("div");Fu.setAttribute("oninput","return;"),Xl=typeof Fu.oninput=="function"}Yl=Xl}else Yl=!1;Kf=Yl&&(!document.documentMode||9<document.documentMode)}function Bu(){mi&&(mi.detachEvent("onpropertychange",Gf),Ti=mi=null)}function Gf(e){if(e.propertyName==="value"&&kl(Ti)){var t=[];qf(t,Ti,e,lc(e)),Nf(by,t)}}function wy(e,t,n){e==="focusin"?(Bu(),mi=t,Ti=n,mi.attachEvent("onpropertychange",Gf)):e==="focusout"&&Bu()}function jy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return kl(Ti)}function Sy(e,t){if(e==="click")return kl(t)}function _y(e,t){if(e==="input"||e==="change")return kl(t)}function Cy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dt=typeof Object.is=="function"?Object.is:Cy;function Pi(e,t){if(Dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oa.call(t,i)||!Dt(e[i],t[i]))return!1}return!0}function Uu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vu(e,t){var n=Uu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uu(n)}}function Qf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jf(){for(var e=window,t=Uo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Uo(e.document)}return t}function hc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ny(e){var t=Jf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Qf(n.ownerDocument.documentElement,n)){if(r!==null&&hc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Vu(n,o);var a=Vu(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ey=nn&&"documentMode"in document&&11>=document.documentMode,pr=null,ns=null,hi=null,rs=!1;function Wu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rs||pr==null||pr!==Uo(r)||(r=pr,"selectionStart"in r&&hc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hi&&Pi(hi,r)||(hi=r,r=Qo(ns,"onSelect"),0<r.length&&(t=new pc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=pr)))}function po(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fr={animationend:po("Animation","AnimationEnd"),animationiteration:po("Animation","AnimationIteration"),animationstart:po("Animation","AnimationStart"),transitionend:po("Transition","TransitionEnd")},Zl={},Yf={};nn&&(Yf=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function wl(e){if(Zl[e])return Zl[e];if(!fr[e])return e;var t=fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Yf)return Zl[e]=t[n];return e}var Xf=wl("animationend"),Zf=wl("animationiteration"),em=wl("animationstart"),tm=wl("transitionend"),nm=new Map,Hu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(e,t){nm.set(e,t),Zn(t,[e])}for(var ea=0;ea<Hu.length;ea++){var ta=Hu[ea],zy=ta.toLowerCase(),Ty=ta[0].toUpperCase()+ta.slice(1);Tn(zy,"on"+Ty)}Tn(Xf,"onAnimationEnd");Tn(Zf,"onAnimationIteration");Tn(em,"onAnimationStart");Tn("dblclick","onDoubleClick");Tn("focusin","onFocus");Tn("focusout","onBlur");Tn(tm,"onTransitionEnd");Tr("onMouseEnter",["mouseout","mouseover"]);Tr("onMouseLeave",["mouseout","mouseover"]);Tr("onPointerEnter",["pointerout","pointerover"]);Tr("onPointerLeave",["pointerout","pointerover"]);Zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Py=new Set("cancel close invalid load scroll toggle".split(" ").concat(ci));function qu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,zx(r,t,void 0,e),e.currentTarget=null}function rm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],c=s.instance,u=s.currentTarget;if(s=s.listener,c!==o&&i.isPropagationStopped())break e;qu(i,s,u),o=c}else for(a=0;a<r.length;a++){if(s=r[a],c=s.instance,u=s.currentTarget,s=s.listener,c!==o&&i.isPropagationStopped())break e;qu(i,s,u),o=c}}}if(Wo)throw e=Xa,Wo=!1,Xa=null,e}function ke(e,t){var n=t[ss];n===void 0&&(n=t[ss]=new Set);var r=e+"__bubble";n.has(r)||(im(t,e,2,!1),n.add(r))}function na(e,t,n){var r=0;t&&(r|=4),im(n,e,r,t)}var fo="_reactListening"+Math.random().toString(36).slice(2);function Li(e){if(!e[fo]){e[fo]=!0,df.forEach(function(n){n!=="selectionchange"&&(Py.has(n)||na(n,!1,e),na(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fo]||(t[fo]=!0,na("selectionchange",!1,t))}}function im(e,t,n,r){switch(Bf(t)){case 1:var i=Hx;break;case 4:i=qx;break;default:i=uc}n=i.bind(null,t,n,e),i=void 0,!Ya||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ra(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;s!==null;){if(a=$n(s),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Nf(function(){var u=o,d=lc(n),p=[];e:{var f=nm.get(e);if(f!==void 0){var m=pc,w=e;switch(e){case"keypress":if(To(n)===0)break e;case"keydown":case"keyup":m=ay;break;case"focusin":w="focus",m=Jl;break;case"focusout":w="blur",m=Jl;break;case"beforeblur":case"afterblur":m=Jl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Iu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Qx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=uy;break;case Xf:case Zf:case em:m=Xx;break;case tm:m=py;break;case"scroll":m=Kx;break;case"wheel":m=my;break;case"copy":case"cut":case"paste":m=ey;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Mu}var j=(t&4)!==0,z=!j&&e==="scroll",h=j?f!==null?f+"Capture":null:f;j=[];for(var x=u,b;x!==null;){b=x;var P=b.stateNode;if(b.tag===5&&P!==null&&(b=P,h!==null&&(P=Ci(x,h),P!=null&&j.push(Ai(x,P,b)))),z)break;x=x.return}0<j.length&&(f=new m(f,w,null,n,d),p.push({event:f,listeners:j}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==Qa&&(w=n.relatedTarget||n.fromElement)&&($n(w)||w[rn]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(w=n.relatedTarget||n.toElement,m=u,w=w?$n(w):null,w!==null&&(z=er(w),w!==z||w.tag!==5&&w.tag!==6)&&(w=null)):(m=null,w=u),m!==w)){if(j=Iu,P="onMouseLeave",h="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(j=Mu,P="onPointerLeave",h="onPointerEnter",x="pointer"),z=m==null?f:mr(m),b=w==null?f:mr(w),f=new j(P,x+"leave",m,n,d),f.target=z,f.relatedTarget=b,P=null,$n(d)===u&&(j=new j(h,x+"enter",w,n,d),j.target=b,j.relatedTarget=z,P=j),z=P,m&&w)t:{for(j=m,h=w,x=0,b=j;b;b=ir(b))x++;for(b=0,P=h;P;P=ir(P))b++;for(;0<x-b;)j=ir(j),x--;for(;0<b-x;)h=ir(h),b--;for(;x--;){if(j===h||h!==null&&j===h.alternate)break t;j=ir(j),h=ir(h)}j=null}else j=null;m!==null&&Ku(p,f,m,j,!1),w!==null&&z!==null&&Ku(p,z,w,j,!0)}}e:{if(f=u?mr(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var k=ky;else if($u(f))if(Kf)k=_y;else{k=jy;var y=wy}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=Sy);if(k&&(k=k(e,u))){qf(p,k,n,d);break e}y&&y(e,f,u),e==="focusout"&&(y=f._wrapperState)&&y.controlled&&f.type==="number"&&Wa(f,"number",f.value)}switch(y=u?mr(u):window,e){case"focusin":($u(y)||y.contentEditable==="true")&&(pr=y,ns=u,hi=null);break;case"focusout":hi=ns=pr=null;break;case"mousedown":rs=!0;break;case"contextmenu":case"mouseup":case"dragend":rs=!1,Wu(p,n,d);break;case"selectionchange":if(Ey)break;case"keydown":case"keyup":Wu(p,n,d)}var L;if(mc)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else dr?Wf(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Vf&&n.locale!=="ko"&&(dr||O!=="onCompositionStart"?O==="onCompositionEnd"&&dr&&(L=Uf()):(mn=d,dc="value"in mn?mn.value:mn.textContent,dr=!0)),y=Qo(u,O),0<y.length&&(O=new Ru(O,e,null,n,d),p.push({event:O,listeners:y}),L?O.data=L:(L=Hf(n),L!==null&&(O.data=L)))),(L=gy?xy(e,n):yy(e,n))&&(u=Qo(u,"onBeforeInput"),0<u.length&&(d=new Ru("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=L))}rm(p,t)})}function Ai(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ci(e,n),o!=null&&r.unshift(Ai(e,o,i)),o=Ci(e,t),o!=null&&r.push(Ai(e,o,i))),e=e.return}return r}function ir(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ku(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,c=s.alternate,u=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&u!==null&&(s=u,i?(c=Ci(n,o),c!=null&&a.unshift(Ai(n,c,s))):i||(c=Ci(n,o),c!=null&&a.push(Ai(n,c,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Ly=/\r\n?/g,Ay=/\u0000|\uFFFD/g;function Gu(e){return(typeof e=="string"?e:""+e).replace(Ly,`
`).replace(Ay,"")}function mo(e,t,n){if(t=Gu(t),Gu(e)!==t&&n)throw Error(q(425))}function Jo(){}var is=null,os=null;function ls(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var as=typeof setTimeout=="function"?setTimeout:void 0,Iy=typeof clearTimeout=="function"?clearTimeout:void 0,Qu=typeof Promise=="function"?Promise:void 0,Ry=typeof queueMicrotask=="function"?queueMicrotask:typeof Qu<"u"?function(e){return Qu.resolve(null).then(e).catch(My)}:as;function My(e){setTimeout(function(){throw e})}function ia(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),zi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zi(t)}function kn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ju(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ur=Math.random().toString(36).slice(2),Vt="__reactFiber$"+Ur,Ii="__reactProps$"+Ur,rn="__reactContainer$"+Ur,ss="__reactEvents$"+Ur,Oy="__reactListeners$"+Ur,Dy="__reactHandles$"+Ur;function $n(e){var t=e[Vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rn]||n[Vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ju(e);e!==null;){if(n=e[Vt])return n;e=Ju(e)}return t}e=n,n=e.parentNode}return null}function Ji(e){return e=e[Vt]||e[rn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(q(33))}function jl(e){return e[Ii]||null}var cs=[],hr=-1;function Pn(e){return{current:e}}function we(e){0>hr||(e.current=cs[hr],cs[hr]=null,hr--)}function ve(e,t){hr++,cs[hr]=e.current,e.current=t}var En={},Ke=Pn(En),rt=Pn(!1),Gn=En;function Pr(e,t){var n=e.type.contextTypes;if(!n)return En;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function it(e){return e=e.childContextTypes,e!=null}function Yo(){we(rt),we(Ke)}function Yu(e,t,n){if(Ke.current!==En)throw Error(q(168));ve(Ke,t),ve(rt,n)}function om(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(q(108,wx(e)||"Unknown",i));return Ne({},n,r)}function Xo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||En,Gn=Ke.current,ve(Ke,e),ve(rt,rt.current),!0}function Xu(e,t,n){var r=e.stateNode;if(!r)throw Error(q(169));n?(e=om(e,t,Gn),r.__reactInternalMemoizedMergedChildContext=e,we(rt),we(Ke),ve(Ke,e)):we(rt),ve(rt,n)}var Xt=null,Sl=!1,oa=!1;function lm(e){Xt===null?Xt=[e]:Xt.push(e)}function $y(e){Sl=!0,lm(e)}function Ln(){if(!oa&&Xt!==null){oa=!0;var e=0,t=ge;try{var n=Xt;for(ge=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xt=null,Sl=!1}catch(i){throw Xt!==null&&(Xt=Xt.slice(e+1)),Pf(ac,Ln),i}finally{ge=t,oa=!1}}return null}var gr=[],xr=0,Zo=null,el=0,bt=[],kt=0,Qn=null,Zt=1,en="";function Mn(e,t){gr[xr++]=el,gr[xr++]=Zo,Zo=e,el=t}function am(e,t,n){bt[kt++]=Zt,bt[kt++]=en,bt[kt++]=Qn,Qn=e;var r=Zt;e=en;var i=32-Mt(r)-1;r&=~(1<<i),n+=1;var o=32-Mt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Zt=1<<32-Mt(t)+i|n<<i|r,en=o+e}else Zt=1<<o|n<<i|r,en=e}function gc(e){e.return!==null&&(Mn(e,1),am(e,1,0))}function xc(e){for(;e===Zo;)Zo=gr[--xr],gr[xr]=null,el=gr[--xr],gr[xr]=null;for(;e===Qn;)Qn=bt[--kt],bt[kt]=null,en=bt[--kt],bt[kt]=null,Zt=bt[--kt],bt[kt]=null}var ht=null,ft=null,je=!1,It=null;function sm(e,t){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Zu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,ft=kn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qn!==null?{id:Zt,overflow:en}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ht=e,ft=null,!0):!1;default:return!1}}function us(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ds(e){if(je){var t=ft;if(t){var n=t;if(!Zu(e,t)){if(us(e))throw Error(q(418));t=kn(n.nextSibling);var r=ht;t&&Zu(e,t)?sm(r,n):(e.flags=e.flags&-4097|2,je=!1,ht=e)}}else{if(us(e))throw Error(q(418));e.flags=e.flags&-4097|2,je=!1,ht=e}}}function ed(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function ho(e){if(e!==ht)return!1;if(!je)return ed(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ls(e.type,e.memoizedProps)),t&&(t=ft)){if(us(e))throw cm(),Error(q(418));for(;t;)sm(e,t),t=kn(t.nextSibling)}if(ed(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ft=kn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=ht?kn(e.stateNode.nextSibling):null;return!0}function cm(){for(var e=ft;e;)e=kn(e.nextSibling)}function Lr(){ft=ht=null,je=!1}function yc(e){It===null?It=[e]:It.push(e)}var Fy=an.ReactCurrentBatchConfig;function Zr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(q(309));var r=n.stateNode}if(!r)throw Error(q(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(q(284));if(!n._owner)throw Error(q(290,e))}return e}function go(e,t){throw e=Object.prototype.toString.call(t),Error(q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function td(e){var t=e._init;return t(e._payload)}function um(e){function t(h,x){if(e){var b=h.deletions;b===null?(h.deletions=[x],h.flags|=16):b.push(x)}}function n(h,x){if(!e)return null;for(;x!==null;)t(h,x),x=x.sibling;return null}function r(h,x){for(h=new Map;x!==null;)x.key!==null?h.set(x.key,x):h.set(x.index,x),x=x.sibling;return h}function i(h,x){return h=_n(h,x),h.index=0,h.sibling=null,h}function o(h,x,b){return h.index=b,e?(b=h.alternate,b!==null?(b=b.index,b<x?(h.flags|=2,x):b):(h.flags|=2,x)):(h.flags|=1048576,x)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,x,b,P){return x===null||x.tag!==6?(x=pa(b,h.mode,P),x.return=h,x):(x=i(x,b),x.return=h,x)}function c(h,x,b,P){var k=b.type;return k===ur?d(h,x,b.props.children,P,b.key):x!==null&&(x.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===un&&td(k)===x.type)?(P=i(x,b.props),P.ref=Zr(h,x,b),P.return=h,P):(P=Oo(b.type,b.key,b.props,null,h.mode,P),P.ref=Zr(h,x,b),P.return=h,P)}function u(h,x,b,P){return x===null||x.tag!==4||x.stateNode.containerInfo!==b.containerInfo||x.stateNode.implementation!==b.implementation?(x=fa(b,h.mode,P),x.return=h,x):(x=i(x,b.children||[]),x.return=h,x)}function d(h,x,b,P,k){return x===null||x.tag!==7?(x=Wn(b,h.mode,P,k),x.return=h,x):(x=i(x,b),x.return=h,x)}function p(h,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return x=pa(""+x,h.mode,b),x.return=h,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case io:return b=Oo(x.type,x.key,x.props,null,h.mode,b),b.ref=Zr(h,null,x),b.return=h,b;case cr:return x=fa(x,h.mode,b),x.return=h,x;case un:var P=x._init;return p(h,P(x._payload),b)}if(ai(x)||Gr(x))return x=Wn(x,h.mode,b,null),x.return=h,x;go(h,x)}return null}function f(h,x,b,P){var k=x!==null?x.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return k!==null?null:s(h,x,""+b,P);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case io:return b.key===k?c(h,x,b,P):null;case cr:return b.key===k?u(h,x,b,P):null;case un:return k=b._init,f(h,x,k(b._payload),P)}if(ai(b)||Gr(b))return k!==null?null:d(h,x,b,P,null);go(h,b)}return null}function m(h,x,b,P,k){if(typeof P=="string"&&P!==""||typeof P=="number")return h=h.get(b)||null,s(x,h,""+P,k);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case io:return h=h.get(P.key===null?b:P.key)||null,c(x,h,P,k);case cr:return h=h.get(P.key===null?b:P.key)||null,u(x,h,P,k);case un:var y=P._init;return m(h,x,b,y(P._payload),k)}if(ai(P)||Gr(P))return h=h.get(b)||null,d(x,h,P,k,null);go(x,P)}return null}function w(h,x,b,P){for(var k=null,y=null,L=x,O=x=0,$=null;L!==null&&O<b.length;O++){L.index>O?($=L,L=null):$=L.sibling;var _=f(h,L,b[O],P);if(_===null){L===null&&(L=$);break}e&&L&&_.alternate===null&&t(h,L),x=o(_,x,O),y===null?k=_:y.sibling=_,y=_,L=$}if(O===b.length)return n(h,L),je&&Mn(h,O),k;if(L===null){for(;O<b.length;O++)L=p(h,b[O],P),L!==null&&(x=o(L,x,O),y===null?k=L:y.sibling=L,y=L);return je&&Mn(h,O),k}for(L=r(h,L);O<b.length;O++)$=m(L,h,O,b[O],P),$!==null&&(e&&$.alternate!==null&&L.delete($.key===null?O:$.key),x=o($,x,O),y===null?k=$:y.sibling=$,y=$);return e&&L.forEach(function(v){return t(h,v)}),je&&Mn(h,O),k}function j(h,x,b,P){var k=Gr(b);if(typeof k!="function")throw Error(q(150));if(b=k.call(b),b==null)throw Error(q(151));for(var y=k=null,L=x,O=x=0,$=null,_=b.next();L!==null&&!_.done;O++,_=b.next()){L.index>O?($=L,L=null):$=L.sibling;var v=f(h,L,_.value,P);if(v===null){L===null&&(L=$);break}e&&L&&v.alternate===null&&t(h,L),x=o(v,x,O),y===null?k=v:y.sibling=v,y=v,L=$}if(_.done)return n(h,L),je&&Mn(h,O),k;if(L===null){for(;!_.done;O++,_=b.next())_=p(h,_.value,P),_!==null&&(x=o(_,x,O),y===null?k=_:y.sibling=_,y=_);return je&&Mn(h,O),k}for(L=r(h,L);!_.done;O++,_=b.next())_=m(L,h,O,_.value,P),_!==null&&(e&&_.alternate!==null&&L.delete(_.key===null?O:_.key),x=o(_,x,O),y===null?k=_:y.sibling=_,y=_);return e&&L.forEach(function(g){return t(h,g)}),je&&Mn(h,O),k}function z(h,x,b,P){if(typeof b=="object"&&b!==null&&b.type===ur&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case io:e:{for(var k=b.key,y=x;y!==null;){if(y.key===k){if(k=b.type,k===ur){if(y.tag===7){n(h,y.sibling),x=i(y,b.props.children),x.return=h,h=x;break e}}else if(y.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===un&&td(k)===y.type){n(h,y.sibling),x=i(y,b.props),x.ref=Zr(h,y,b),x.return=h,h=x;break e}n(h,y);break}else t(h,y);y=y.sibling}b.type===ur?(x=Wn(b.props.children,h.mode,P,b.key),x.return=h,h=x):(P=Oo(b.type,b.key,b.props,null,h.mode,P),P.ref=Zr(h,x,b),P.return=h,h=P)}return a(h);case cr:e:{for(y=b.key;x!==null;){if(x.key===y)if(x.tag===4&&x.stateNode.containerInfo===b.containerInfo&&x.stateNode.implementation===b.implementation){n(h,x.sibling),x=i(x,b.children||[]),x.return=h,h=x;break e}else{n(h,x);break}else t(h,x);x=x.sibling}x=fa(b,h.mode,P),x.return=h,h=x}return a(h);case un:return y=b._init,z(h,x,y(b._payload),P)}if(ai(b))return w(h,x,b,P);if(Gr(b))return j(h,x,b,P);go(h,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,x!==null&&x.tag===6?(n(h,x.sibling),x=i(x,b),x.return=h,h=x):(n(h,x),x=pa(b,h.mode,P),x.return=h,h=x),a(h)):n(h,x)}return z}var Ar=um(!0),dm=um(!1),tl=Pn(null),nl=null,yr=null,vc=null;function bc(){vc=yr=nl=null}function kc(e){var t=tl.current;we(tl),e._currentValue=t}function ps(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Cr(e,t){nl=e,vc=yr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(nt=!0),e.firstContext=null)}function _t(e){var t=e._currentValue;if(vc!==e)if(e={context:e,memoizedValue:t,next:null},yr===null){if(nl===null)throw Error(q(308));yr=e,nl.dependencies={lanes:0,firstContext:e}}else yr=yr.next=e;return t}var Fn=null;function wc(e){Fn===null?Fn=[e]:Fn.push(e)}function pm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,wc(t)):(n.next=i.next,i.next=n),t.interleaved=n,on(e,r)}function on(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dn=!1;function jc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,on(e,n)}return i=r.interleaved,i===null?(t.next=t,wc(r)):(t.next=i.next,i.next=t),r.interleaved=t,on(e,n)}function Po(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sc(e,n)}}function nd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function rl(e,t,n,r){var i=e.updateQueue;dn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==a&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=c))}if(o!==null){var p=i.baseState;a=0,d=u=c=null,s=o;do{var f=s.lane,m=s.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,j=s;switch(f=t,m=n,j.tag){case 1:if(w=j.payload,typeof w=="function"){p=w.call(m,p,f);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=j.payload,f=typeof w=="function"?w.call(m,p,f):w,f==null)break e;p=Ne({},p,f);break e;case 2:dn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else m={eventTime:m,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=m,c=p):d=d.next=m,a|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Yn|=a,e.lanes=a,e.memoizedState=p}}function rd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(q(191,i));i.call(r)}}}var Yi={},qt=Pn(Yi),Ri=Pn(Yi),Mi=Pn(Yi);function Bn(e){if(e===Yi)throw Error(q(174));return e}function Sc(e,t){switch(ve(Mi,t),ve(Ri,e),ve(qt,Yi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:qa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=qa(t,e)}we(qt),ve(qt,t)}function Ir(){we(qt),we(Ri),we(Mi)}function mm(e){Bn(Mi.current);var t=Bn(qt.current),n=qa(t,e.type);t!==n&&(ve(Ri,e),ve(qt,n))}function _c(e){Ri.current===e&&(we(qt),we(Ri))}var _e=Pn(0);function il(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var la=[];function Cc(){for(var e=0;e<la.length;e++)la[e]._workInProgressVersionPrimary=null;la.length=0}var Lo=an.ReactCurrentDispatcher,aa=an.ReactCurrentBatchConfig,Jn=0,Ce=null,Ie=null,Me=null,ol=!1,gi=!1,Oi=0,By=0;function We(){throw Error(q(321))}function Nc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dt(e[n],t[n]))return!1;return!0}function Ec(e,t,n,r,i,o){if(Jn=o,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Lo.current=e===null||e.memoizedState===null?Hy:qy,e=n(r,i),gi){o=0;do{if(gi=!1,Oi=0,25<=o)throw Error(q(301));o+=1,Me=Ie=null,t.updateQueue=null,Lo.current=Ky,e=n(r,i)}while(gi)}if(Lo.current=ll,t=Ie!==null&&Ie.next!==null,Jn=0,Me=Ie=Ce=null,ol=!1,t)throw Error(q(300));return e}function zc(){var e=Oi!==0;return Oi=0,e}function Bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?Ce.memoizedState=Me=e:Me=Me.next=e,Me}function Ct(){if(Ie===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var t=Me===null?Ce.memoizedState:Me.next;if(t!==null)Me=t,Ie=e;else{if(e===null)throw Error(q(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Me===null?Ce.memoizedState=Me=e:Me=Me.next=e}return Me}function Di(e,t){return typeof t=="function"?t(e):t}function sa(e){var t=Ct(),n=t.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=e;var r=Ie,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,c=null,u=o;do{var d=u.lane;if((Jn&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(s=c=p,a=r):c=c.next=p,Ce.lanes|=d,Yn|=d}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=s,Dt(r,t.memoizedState)||(nt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ce.lanes|=o,Yn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ca(e){var t=Ct(),n=t.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Dt(o,t.memoizedState)||(nt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function hm(){}function gm(e,t){var n=Ce,r=Ct(),i=t(),o=!Dt(r.memoizedState,i);if(o&&(r.memoizedState=i,nt=!0),r=r.queue,Tc(vm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,$i(9,ym.bind(null,n,r,i,t),void 0,null),De===null)throw Error(q(349));Jn&30||xm(n,t,i)}return i}function xm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ym(e,t,n,r){t.value=n,t.getSnapshot=r,bm(t)&&km(e)}function vm(e,t,n){return n(function(){bm(t)&&km(e)})}function bm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dt(e,n)}catch{return!0}}function km(e){var t=on(e,1);t!==null&&Ot(t,e,1,-1)}function id(e){var t=Bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Di,lastRenderedState:e},t.queue=e,e=e.dispatch=Wy.bind(null,Ce,e),[t.memoizedState,e]}function $i(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function wm(){return Ct().memoizedState}function Ao(e,t,n,r){var i=Bt();Ce.flags|=e,i.memoizedState=$i(1|t,n,void 0,r===void 0?null:r)}function _l(e,t,n,r){var i=Ct();r=r===void 0?null:r;var o=void 0;if(Ie!==null){var a=Ie.memoizedState;if(o=a.destroy,r!==null&&Nc(r,a.deps)){i.memoizedState=$i(t,n,o,r);return}}Ce.flags|=e,i.memoizedState=$i(1|t,n,o,r)}function od(e,t){return Ao(8390656,8,e,t)}function Tc(e,t){return _l(2048,8,e,t)}function jm(e,t){return _l(4,2,e,t)}function Sm(e,t){return _l(4,4,e,t)}function _m(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cm(e,t,n){return n=n!=null?n.concat([e]):null,_l(4,4,_m.bind(null,t,e),n)}function Pc(){}function Nm(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Em(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function zm(e,t,n){return Jn&21?(Dt(n,t)||(n=If(),Ce.lanes|=n,Yn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,nt=!0),e.memoizedState=n)}function Uy(e,t){var n=ge;ge=n!==0&&4>n?n:4,e(!0);var r=aa.transition;aa.transition={};try{e(!1),t()}finally{ge=n,aa.transition=r}}function Tm(){return Ct().memoizedState}function Vy(e,t,n){var r=Sn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Pm(e))Lm(t,n);else if(n=pm(e,t,n,r),n!==null){var i=Je();Ot(n,e,r,i),Am(n,t,r)}}function Wy(e,t,n){var r=Sn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pm(e))Lm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Dt(s,a)){var c=t.interleaved;c===null?(i.next=i,wc(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=pm(e,t,i,r),n!==null&&(i=Je(),Ot(n,e,r,i),Am(n,t,r))}}function Pm(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function Lm(e,t){gi=ol=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Am(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sc(e,n)}}var ll={readContext:_t,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},Hy={readContext:_t,useCallback:function(e,t){return Bt().memoizedState=[e,t===void 0?null:t],e},useContext:_t,useEffect:od,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ao(4194308,4,_m.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ao(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ao(4,2,e,t)},useMemo:function(e,t){var n=Bt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Bt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Vy.bind(null,Ce,e),[r.memoizedState,e]},useRef:function(e){var t=Bt();return e={current:e},t.memoizedState=e},useState:id,useDebugValue:Pc,useDeferredValue:function(e){return Bt().memoizedState=e},useTransition:function(){var e=id(!1),t=e[0];return e=Uy.bind(null,e[1]),Bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ce,i=Bt();if(je){if(n===void 0)throw Error(q(407));n=n()}else{if(n=t(),De===null)throw Error(q(349));Jn&30||xm(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,od(vm.bind(null,r,o,e),[e]),r.flags|=2048,$i(9,ym.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Bt(),t=De.identifierPrefix;if(je){var n=en,r=Zt;n=(r&~(1<<32-Mt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Oi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=By++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},qy={readContext:_t,useCallback:Nm,useContext:_t,useEffect:Tc,useImperativeHandle:Cm,useInsertionEffect:jm,useLayoutEffect:Sm,useMemo:Em,useReducer:sa,useRef:wm,useState:function(){return sa(Di)},useDebugValue:Pc,useDeferredValue:function(e){var t=Ct();return zm(t,Ie.memoizedState,e)},useTransition:function(){var e=sa(Di)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:hm,useSyncExternalStore:gm,useId:Tm,unstable_isNewReconciler:!1},Ky={readContext:_t,useCallback:Nm,useContext:_t,useEffect:Tc,useImperativeHandle:Cm,useInsertionEffect:jm,useLayoutEffect:Sm,useMemo:Em,useReducer:ca,useRef:wm,useState:function(){return ca(Di)},useDebugValue:Pc,useDeferredValue:function(e){var t=Ct();return Ie===null?t.memoizedState=e:zm(t,Ie.memoizedState,e)},useTransition:function(){var e=ca(Di)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:hm,useSyncExternalStore:gm,useId:Tm,unstable_isNewReconciler:!1};function Tt(e,t){if(e&&e.defaultProps){t=Ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function fs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Cl={isMounted:function(e){return(e=e._reactInternals)?er(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Je(),i=Sn(e),o=tn(r,i);o.payload=t,n!=null&&(o.callback=n),t=wn(e,o,i),t!==null&&(Ot(t,e,i,r),Po(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Je(),i=Sn(e),o=tn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=wn(e,o,i),t!==null&&(Ot(t,e,i,r),Po(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Je(),r=Sn(e),i=tn(n,r);i.tag=2,t!=null&&(i.callback=t),t=wn(e,i,r),t!==null&&(Ot(t,e,r,n),Po(t,e,r))}};function ld(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Pi(n,r)||!Pi(i,o):!0}function Im(e,t,n){var r=!1,i=En,o=t.contextType;return typeof o=="object"&&o!==null?o=_t(o):(i=it(t)?Gn:Ke.current,r=t.contextTypes,o=(r=r!=null)?Pr(e,i):En),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Cl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ad(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Cl.enqueueReplaceState(t,t.state,null)}function ms(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},jc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=_t(o):(o=it(t)?Gn:Ke.current,i.context=Pr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(fs(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Cl.enqueueReplaceState(i,i.state,null),rl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Rr(e,t){try{var n="",r=t;do n+=kx(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ua(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function hs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Gy=typeof WeakMap=="function"?WeakMap:Map;function Rm(e,t,n){n=tn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){sl||(sl=!0,_s=r),hs(e,t)},n}function Mm(e,t,n){n=tn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){hs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){hs(e,t),typeof r!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function sd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Gy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=sv.bind(null,e,t,n),t.then(e,e))}function cd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ud(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=tn(-1,1),t.tag=2,wn(n,t,1))),n.lanes|=1),e)}var Qy=an.ReactCurrentOwner,nt=!1;function Qe(e,t,n,r){t.child=e===null?dm(t,null,n,r):Ar(t,e.child,n,r)}function dd(e,t,n,r,i){n=n.render;var o=t.ref;return Cr(t,i),r=Ec(e,t,n,r,o,i),n=zc(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ln(e,t,i)):(je&&n&&gc(t),t.flags|=1,Qe(e,t,r,i),t.child)}function pd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!$c(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Om(e,t,o,r,i)):(e=Oo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Pi,n(a,r)&&e.ref===t.ref)return ln(e,t,i)}return t.flags|=1,e=_n(o,r),e.ref=t.ref,e.return=t,t.child=e}function Om(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Pi(o,r)&&e.ref===t.ref)if(nt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(nt=!0);else return t.lanes=e.lanes,ln(e,t,i)}return gs(e,t,n,r,i)}function Dm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(br,dt),dt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ve(br,dt),dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ve(br,dt),dt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ve(br,dt),dt|=r;return Qe(e,t,i,n),t.child}function $m(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function gs(e,t,n,r,i){var o=it(n)?Gn:Ke.current;return o=Pr(t,o),Cr(t,i),n=Ec(e,t,n,r,o,i),r=zc(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ln(e,t,i)):(je&&r&&gc(t),t.flags|=1,Qe(e,t,n,i),t.child)}function fd(e,t,n,r,i){if(it(n)){var o=!0;Xo(t)}else o=!1;if(Cr(t,i),t.stateNode===null)Io(e,t),Im(t,n,r),ms(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=_t(u):(u=it(n)?Gn:Ke.current,u=Pr(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||c!==u)&&ad(t,a,r,u),dn=!1;var f=t.memoizedState;a.state=f,rl(t,r,a,i),c=t.memoizedState,s!==r||f!==c||rt.current||dn?(typeof d=="function"&&(fs(t,n,d,r),c=t.memoizedState),(s=dn||ld(t,n,s,r,f,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,fm(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Tt(t.type,s),a.props=u,p=t.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=_t(c):(c=it(n)?Gn:Ke.current,c=Pr(t,c));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==p||f!==c)&&ad(t,a,r,c),dn=!1,f=t.memoizedState,a.state=f,rl(t,r,a,i);var w=t.memoizedState;s!==p||f!==w||rt.current||dn?(typeof m=="function"&&(fs(t,n,m,r),w=t.memoizedState),(u=dn||ld(t,n,u,r,f,w,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),a.props=r,a.state=w,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return xs(e,t,n,r,o,i)}function xs(e,t,n,r,i,o){$m(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Xu(t,n,!1),ln(e,t,o);r=t.stateNode,Qy.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Ar(t,e.child,null,o),t.child=Ar(t,null,s,o)):Qe(e,t,s,o),t.memoizedState=r.state,i&&Xu(t,n,!0),t.child}function Fm(e){var t=e.stateNode;t.pendingContext?Yu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Yu(e,t.context,!1),Sc(e,t.containerInfo)}function md(e,t,n,r,i){return Lr(),yc(i),t.flags|=256,Qe(e,t,n,r),t.child}var ys={dehydrated:null,treeContext:null,retryLane:0};function vs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bm(e,t,n){var r=t.pendingProps,i=_e.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ve(_e,i&1),e===null)return ds(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=zl(a,r,0,null),e=Wn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=vs(n),t.memoizedState=ys,e):Lc(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Jy(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=_n(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=_n(s,o):(o=Wn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?vs(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=ys,r}return o=e.child,e=o.sibling,r=_n(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Lc(e,t){return t=zl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xo(e,t,n,r){return r!==null&&yc(r),Ar(t,e.child,null,n),e=Lc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Jy(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=ua(Error(q(422))),xo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=zl({mode:"visible",children:r.children},i,0,null),o=Wn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ar(t,e.child,null,a),t.child.memoizedState=vs(a),t.memoizedState=ys,o);if(!(t.mode&1))return xo(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(q(419)),r=ua(o,r,void 0),xo(e,t,a,r)}if(s=(a&e.childLanes)!==0,nt||s){if(r=De,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,on(e,i),Ot(r,e,i,-1))}return Dc(),r=ua(Error(q(421))),xo(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=cv.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ft=kn(i.nextSibling),ht=t,je=!0,It=null,e!==null&&(bt[kt++]=Zt,bt[kt++]=en,bt[kt++]=Qn,Zt=e.id,en=e.overflow,Qn=t),t=Lc(t,r.children),t.flags|=4096,t)}function hd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ps(e.return,t,n)}function da(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Um(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Qe(e,t,r.children,n),r=_e.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hd(e,n,t);else if(e.tag===19)hd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ve(_e,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&il(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),da(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&il(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}da(t,!0,n,null,o);break;case"together":da(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Io(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(q(153));if(t.child!==null){for(e=t.child,n=_n(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_n(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Yy(e,t,n){switch(t.tag){case 3:Fm(t),Lr();break;case 5:mm(t);break;case 1:it(t.type)&&Xo(t);break;case 4:Sc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ve(tl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ve(_e,_e.current&1),t.flags|=128,null):n&t.child.childLanes?Bm(e,t,n):(ve(_e,_e.current&1),e=ln(e,t,n),e!==null?e.sibling:null);ve(_e,_e.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Um(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(_e,_e.current),r)break;return null;case 22:case 23:return t.lanes=0,Dm(e,t,n)}return ln(e,t,n)}var Vm,bs,Wm,Hm;Vm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bs=function(){};Wm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Bn(qt.current);var o=null;switch(n){case"input":i=Ua(e,i),r=Ua(e,r),o=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),o=[];break;case"textarea":i=Ha(e,i),r=Ha(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Jo)}Ka(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Si.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(c!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&s[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Si.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ke("scroll",e),o||s===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Hm=function(e,t,n,r){n!==r&&(t.flags|=4)};function ei(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Xy(e,t,n){var r=t.pendingProps;switch(xc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return it(t.type)&&Yo(),He(t),null;case 3:return r=t.stateNode,Ir(),we(rt),we(Ke),Cc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ho(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,It!==null&&(Es(It),It=null))),bs(e,t),He(t),null;case 5:_c(t);var i=Bn(Mi.current);if(n=t.type,e!==null&&t.stateNode!=null)Wm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(q(166));return He(t),null}if(e=Bn(qt.current),ho(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Vt]=t,r[Ii]=o,e=(t.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(i=0;i<ci.length;i++)ke(ci[i],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":Su(r,o),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ke("invalid",r);break;case"textarea":Cu(r,o),ke("invalid",r)}Ka(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&mo(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&mo(r.textContent,s,e),i=["children",""+s]):Si.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ke("scroll",r)}switch(n){case"input":oo(r),_u(r,o,!0);break;case"textarea":oo(r),Nu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Jo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Vt]=t,e[Ii]=r,Vm(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ga(n,r),n){case"dialog":ke("cancel",e),ke("close",e),i=r;break;case"iframe":case"object":case"embed":ke("load",e),i=r;break;case"video":case"audio":for(i=0;i<ci.length;i++)ke(ci[i],e);i=r;break;case"source":ke("error",e),i=r;break;case"img":case"image":case"link":ke("error",e),ke("load",e),i=r;break;case"details":ke("toggle",e),i=r;break;case"input":Su(e,r),i=Ua(e,r),ke("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),ke("invalid",e);break;case"textarea":Cu(e,r),i=Ha(e,r),ke("invalid",e);break;default:i=r}Ka(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var c=s[o];o==="style"?wf(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&bf(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&_i(e,c):typeof c=="number"&&_i(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Si.hasOwnProperty(o)?c!=null&&o==="onScroll"&&ke("scroll",e):c!=null&&nc(e,o,c,a))}switch(n){case"input":oo(e),_u(e,r,!1);break;case"textarea":oo(e),Nu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Nn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?wr(e,!!r.multiple,o,!1):r.defaultValue!=null&&wr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Jo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return He(t),null;case 6:if(e&&t.stateNode!=null)Hm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(q(166));if(n=Bn(Mi.current),Bn(qt.current),ho(t)){if(r=t.stateNode,n=t.memoizedProps,r[Vt]=t,(o=r.nodeValue!==n)&&(e=ht,e!==null))switch(e.tag){case 3:mo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Vt]=t,t.stateNode=r}return He(t),null;case 13:if(we(_e),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&ft!==null&&t.mode&1&&!(t.flags&128))cm(),Lr(),t.flags|=98560,o=!1;else if(o=ho(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(q(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(q(317));o[Vt]=t}else Lr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;He(t),o=!1}else It!==null&&(Es(It),It=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||_e.current&1?Re===0&&(Re=3):Dc())),t.updateQueue!==null&&(t.flags|=4),He(t),null);case 4:return Ir(),bs(e,t),e===null&&Li(t.stateNode.containerInfo),He(t),null;case 10:return kc(t.type._context),He(t),null;case 17:return it(t.type)&&Yo(),He(t),null;case 19:if(we(_e),o=t.memoizedState,o===null)return He(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)ei(o,!1);else{if(Re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=il(e),a!==null){for(t.flags|=128,ei(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ve(_e,_e.current&1|2),t.child}e=e.sibling}o.tail!==null&&Te()>Mr&&(t.flags|=128,r=!0,ei(o,!1),t.lanes=4194304)}else{if(!r)if(e=il(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ei(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!je)return He(t),null}else 2*Te()-o.renderingStartTime>Mr&&n!==1073741824&&(t.flags|=128,r=!0,ei(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Te(),t.sibling=null,n=_e.current,ve(_e,r?n&1|2:n&1),t):(He(t),null);case 22:case 23:return Oc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?dt&1073741824&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),null;case 24:return null;case 25:return null}throw Error(q(156,t.tag))}function Zy(e,t){switch(xc(t),t.tag){case 1:return it(t.type)&&Yo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ir(),we(rt),we(Ke),Cc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return _c(t),null;case 13:if(we(_e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(q(340));Lr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(_e),null;case 4:return Ir(),null;case 10:return kc(t.type._context),null;case 22:case 23:return Oc(),null;case 24:return null;default:return null}}var yo=!1,qe=!1,ev=typeof WeakSet=="function"?WeakSet:Set,Q=null;function vr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(e,t,r)}else n.current=null}function ks(e,t,n){try{n()}catch(r){Ee(e,t,r)}}var gd=!1;function tv(e,t){if(is=Ko,e=Jf(),hc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var m;p!==n||i!==0&&p.nodeType!==3||(s=a+i),p!==o||r!==0&&p.nodeType!==3||(c=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===e)break t;if(f===n&&++u===i&&(s=a),f===o&&++d===r&&(c=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(os={focusedElem:e,selectionRange:n},Ko=!1,Q=t;Q!==null;)if(t=Q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Q=e;else for(;Q!==null;){t=Q;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var j=w.memoizedProps,z=w.memoizedState,h=t.stateNode,x=h.getSnapshotBeforeUpdate(t.elementType===t.type?j:Tt(t.type,j),z);h.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(P){Ee(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,Q=e;break}Q=t.return}return w=gd,gd=!1,w}function xi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ks(t,n,o)}i=i.next}while(i!==r)}}function Nl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ws(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function qm(e){var t=e.alternate;t!==null&&(e.alternate=null,qm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Vt],delete t[Ii],delete t[ss],delete t[Oy],delete t[Dy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Km(e){return e.tag===5||e.tag===3||e.tag===4}function xd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Km(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function js(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Jo));else if(r!==4&&(e=e.child,e!==null))for(js(e,t,n),e=e.sibling;e!==null;)js(e,t,n),e=e.sibling}function Ss(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ss(e,t,n),e=e.sibling;e!==null;)Ss(e,t,n),e=e.sibling}var $e=null,Pt=!1;function sn(e,t,n){for(n=n.child;n!==null;)Gm(e,t,n),n=n.sibling}function Gm(e,t,n){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(vl,n)}catch{}switch(n.tag){case 5:qe||vr(n,t);case 6:var r=$e,i=Pt;$e=null,sn(e,t,n),$e=r,Pt=i,$e!==null&&(Pt?(e=$e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(Pt?(e=$e,n=n.stateNode,e.nodeType===8?ia(e.parentNode,n):e.nodeType===1&&ia(e,n),zi(e)):ia($e,n.stateNode));break;case 4:r=$e,i=Pt,$e=n.stateNode.containerInfo,Pt=!0,sn(e,t,n),$e=r,Pt=i;break;case 0:case 11:case 14:case 15:if(!qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&ks(n,t,a),i=i.next}while(i!==r)}sn(e,t,n);break;case 1:if(!qe&&(vr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Ee(n,t,s)}sn(e,t,n);break;case 21:sn(e,t,n);break;case 22:n.mode&1?(qe=(r=qe)||n.memoizedState!==null,sn(e,t,n),qe=r):sn(e,t,n);break;default:sn(e,t,n)}}function yd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ev),t.forEach(function(r){var i=uv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function zt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:$e=s.stateNode,Pt=!1;break e;case 3:$e=s.stateNode.containerInfo,Pt=!0;break e;case 4:$e=s.stateNode.containerInfo,Pt=!0;break e}s=s.return}if($e===null)throw Error(q(160));Gm(o,a,i),$e=null,Pt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Ee(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qm(t,e),t=t.sibling}function Qm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(zt(t,e),Ft(e),r&4){try{xi(3,e,e.return),Nl(3,e)}catch(j){Ee(e,e.return,j)}try{xi(5,e,e.return)}catch(j){Ee(e,e.return,j)}}break;case 1:zt(t,e),Ft(e),r&512&&n!==null&&vr(n,n.return);break;case 5:if(zt(t,e),Ft(e),r&512&&n!==null&&vr(n,n.return),e.flags&32){var i=e.stateNode;try{_i(i,"")}catch(j){Ee(e,e.return,j)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&xf(i,o),Ga(s,a);var u=Ga(s,o);for(a=0;a<c.length;a+=2){var d=c[a],p=c[a+1];d==="style"?wf(i,p):d==="dangerouslySetInnerHTML"?bf(i,p):d==="children"?_i(i,p):nc(i,d,p,u)}switch(s){case"input":Va(i,o);break;case"textarea":yf(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?wr(i,!!o.multiple,m,!1):f!==!!o.multiple&&(o.defaultValue!=null?wr(i,!!o.multiple,o.defaultValue,!0):wr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ii]=o}catch(j){Ee(e,e.return,j)}}break;case 6:if(zt(t,e),Ft(e),r&4){if(e.stateNode===null)throw Error(q(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(j){Ee(e,e.return,j)}}break;case 3:if(zt(t,e),Ft(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zi(t.containerInfo)}catch(j){Ee(e,e.return,j)}break;case 4:zt(t,e),Ft(e);break;case 13:zt(t,e),Ft(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Rc=Te())),r&4&&yd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(qe=(u=qe)||d,zt(t,e),qe=u):zt(t,e),Ft(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(Q=e,d=e.child;d!==null;){for(p=Q=d;Q!==null;){switch(f=Q,m=f.child,f.tag){case 0:case 11:case 14:case 15:xi(4,f,f.return);break;case 1:vr(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(j){Ee(r,n,j)}}break;case 5:vr(f,f.return);break;case 22:if(f.memoizedState!==null){bd(p);continue}}m!==null?(m.return=f,Q=m):bd(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=kf("display",a))}catch(j){Ee(e,e.return,j)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(j){Ee(e,e.return,j)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:zt(t,e),Ft(e),r&4&&yd(e);break;case 21:break;default:zt(t,e),Ft(e)}}function Ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Km(n)){var r=n;break e}n=n.return}throw Error(q(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(_i(i,""),r.flags&=-33);var o=xd(e);Ss(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=xd(e);js(e,s,a);break;default:throw Error(q(161))}}catch(c){Ee(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function nv(e,t,n){Q=e,Jm(e)}function Jm(e,t,n){for(var r=(e.mode&1)!==0;Q!==null;){var i=Q,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||yo;if(!a){var s=i.alternate,c=s!==null&&s.memoizedState!==null||qe;s=yo;var u=qe;if(yo=a,(qe=c)&&!u)for(Q=i;Q!==null;)a=Q,c=a.child,a.tag===22&&a.memoizedState!==null?kd(i):c!==null?(c.return=a,Q=c):kd(i);for(;o!==null;)Q=o,Jm(o),o=o.sibling;Q=i,yo=s,qe=u}vd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,Q=o):vd(e)}}function vd(e){for(;Q!==null;){var t=Q;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:qe||Nl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!qe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Tt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&rd(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}rd(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&zi(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(q(163))}qe||t.flags&512&&ws(t)}catch(f){Ee(t,t.return,f)}}if(t===e){Q=null;break}if(n=t.sibling,n!==null){n.return=t.return,Q=n;break}Q=t.return}}function bd(e){for(;Q!==null;){var t=Q;if(t===e){Q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Q=n;break}Q=t.return}}function kd(e){for(;Q!==null;){var t=Q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Nl(4,t)}catch(c){Ee(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Ee(t,i,c)}}var o=t.return;try{ws(t)}catch(c){Ee(t,o,c)}break;case 5:var a=t.return;try{ws(t)}catch(c){Ee(t,a,c)}}}catch(c){Ee(t,t.return,c)}if(t===e){Q=null;break}var s=t.sibling;if(s!==null){s.return=t.return,Q=s;break}Q=t.return}}var rv=Math.ceil,al=an.ReactCurrentDispatcher,Ac=an.ReactCurrentOwner,St=an.ReactCurrentBatchConfig,pe=0,De=null,Le=null,Be=0,dt=0,br=Pn(0),Re=0,Fi=null,Yn=0,El=0,Ic=0,yi=null,tt=null,Rc=0,Mr=1/0,Yt=null,sl=!1,_s=null,jn=null,vo=!1,hn=null,cl=0,vi=0,Cs=null,Ro=-1,Mo=0;function Je(){return pe&6?Te():Ro!==-1?Ro:Ro=Te()}function Sn(e){return e.mode&1?pe&2&&Be!==0?Be&-Be:Fy.transition!==null?(Mo===0&&(Mo=If()),Mo):(e=ge,e!==0||(e=window.event,e=e===void 0?16:Bf(e.type)),e):1}function Ot(e,t,n,r){if(50<vi)throw vi=0,Cs=null,Error(q(185));Gi(e,n,r),(!(pe&2)||e!==De)&&(e===De&&(!(pe&2)&&(El|=n),Re===4&&fn(e,Be)),ot(e,r),n===1&&pe===0&&!(t.mode&1)&&(Mr=Te()+500,Sl&&Ln()))}function ot(e,t){var n=e.callbackNode;Fx(e,t);var r=qo(e,e===De?Be:0);if(r===0)n!==null&&Tu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Tu(n),t===1)e.tag===0?$y(wd.bind(null,e)):lm(wd.bind(null,e)),Ry(function(){!(pe&6)&&Ln()}),n=null;else{switch(Rf(r)){case 1:n=ac;break;case 4:n=Lf;break;case 16:n=Ho;break;case 536870912:n=Af;break;default:n=Ho}n=ih(n,Ym.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ym(e,t){if(Ro=-1,Mo=0,pe&6)throw Error(q(327));var n=e.callbackNode;if(Nr()&&e.callbackNode!==n)return null;var r=qo(e,e===De?Be:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ul(e,r);else{t=r;var i=pe;pe|=2;var o=Zm();(De!==e||Be!==t)&&(Yt=null,Mr=Te()+500,Vn(e,t));do try{lv();break}catch(s){Xm(e,s)}while(!0);bc(),al.current=o,pe=i,Le!==null?t=0:(De=null,Be=0,t=Re)}if(t!==0){if(t===2&&(i=Za(e),i!==0&&(r=i,t=Ns(e,i))),t===1)throw n=Fi,Vn(e,0),fn(e,r),ot(e,Te()),n;if(t===6)fn(e,r);else{if(i=e.current.alternate,!(r&30)&&!iv(i)&&(t=ul(e,r),t===2&&(o=Za(e),o!==0&&(r=o,t=Ns(e,o))),t===1))throw n=Fi,Vn(e,0),fn(e,r),ot(e,Te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(q(345));case 2:On(e,tt,Yt);break;case 3:if(fn(e,r),(r&130023424)===r&&(t=Rc+500-Te(),10<t)){if(qo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=as(On.bind(null,e,tt,Yt),t);break}On(e,tt,Yt);break;case 4:if(fn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Mt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rv(r/1960))-r,10<r){e.timeoutHandle=as(On.bind(null,e,tt,Yt),r);break}On(e,tt,Yt);break;case 5:On(e,tt,Yt);break;default:throw Error(q(329))}}}return ot(e,Te()),e.callbackNode===n?Ym.bind(null,e):null}function Ns(e,t){var n=yi;return e.current.memoizedState.isDehydrated&&(Vn(e,t).flags|=256),e=ul(e,t),e!==2&&(t=tt,tt=n,t!==null&&Es(t)),e}function Es(e){tt===null?tt=e:tt.push.apply(tt,e)}function iv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Dt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fn(e,t){for(t&=~Ic,t&=~El,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Mt(t),r=1<<n;e[n]=-1,t&=~r}}function wd(e){if(pe&6)throw Error(q(327));Nr();var t=qo(e,0);if(!(t&1))return ot(e,Te()),null;var n=ul(e,t);if(e.tag!==0&&n===2){var r=Za(e);r!==0&&(t=r,n=Ns(e,r))}if(n===1)throw n=Fi,Vn(e,0),fn(e,t),ot(e,Te()),n;if(n===6)throw Error(q(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,On(e,tt,Yt),ot(e,Te()),null}function Mc(e,t){var n=pe;pe|=1;try{return e(t)}finally{pe=n,pe===0&&(Mr=Te()+500,Sl&&Ln())}}function Xn(e){hn!==null&&hn.tag===0&&!(pe&6)&&Nr();var t=pe;pe|=1;var n=St.transition,r=ge;try{if(St.transition=null,ge=1,e)return e()}finally{ge=r,St.transition=n,pe=t,!(pe&6)&&Ln()}}function Oc(){dt=br.current,we(br)}function Vn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Iy(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(xc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yo();break;case 3:Ir(),we(rt),we(Ke),Cc();break;case 5:_c(r);break;case 4:Ir();break;case 13:we(_e);break;case 19:we(_e);break;case 10:kc(r.type._context);break;case 22:case 23:Oc()}n=n.return}if(De=e,Le=e=_n(e.current,null),Be=dt=t,Re=0,Fi=null,Ic=El=Yn=0,tt=yi=null,Fn!==null){for(t=0;t<Fn.length;t++)if(n=Fn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Fn=null}return e}function Xm(e,t){do{var n=Le;try{if(bc(),Lo.current=ll,ol){for(var r=Ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ol=!1}if(Jn=0,Me=Ie=Ce=null,gi=!1,Oi=0,Ac.current=null,n===null||n.return===null){Re=1,Fi=t,Le=null;break}e:{var o=e,a=n.return,s=n,c=t;if(t=Be,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=s,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=cd(a);if(m!==null){m.flags&=-257,ud(m,a,s,o,t),m.mode&1&&sd(o,u,t),t=m,c=u;var w=t.updateQueue;if(w===null){var j=new Set;j.add(c),t.updateQueue=j}else w.add(c);break e}else{if(!(t&1)){sd(o,u,t),Dc();break e}c=Error(q(426))}}else if(je&&s.mode&1){var z=cd(a);if(z!==null){!(z.flags&65536)&&(z.flags|=256),ud(z,a,s,o,t),yc(Rr(c,s));break e}}o=c=Rr(c,s),Re!==4&&(Re=2),yi===null?yi=[o]:yi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Rm(o,c,t);nd(o,h);break e;case 1:s=c;var x=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof x.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(jn===null||!jn.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var P=Mm(o,s,t);nd(o,P);break e}}o=o.return}while(o!==null)}th(n)}catch(k){t=k,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function Zm(){var e=al.current;return al.current=ll,e===null?ll:e}function Dc(){(Re===0||Re===3||Re===2)&&(Re=4),De===null||!(Yn&268435455)&&!(El&268435455)||fn(De,Be)}function ul(e,t){var n=pe;pe|=2;var r=Zm();(De!==e||Be!==t)&&(Yt=null,Vn(e,t));do try{ov();break}catch(i){Xm(e,i)}while(!0);if(bc(),pe=n,al.current=r,Le!==null)throw Error(q(261));return De=null,Be=0,Re}function ov(){for(;Le!==null;)eh(Le)}function lv(){for(;Le!==null&&!Px();)eh(Le)}function eh(e){var t=rh(e.alternate,e,dt);e.memoizedProps=e.pendingProps,t===null?th(e):Le=t,Ac.current=null}function th(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Zy(n,t),n!==null){n.flags&=32767,Le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,Le=null;return}}else if(n=Xy(n,t,dt),n!==null){Le=n;return}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);Re===0&&(Re=5)}function On(e,t,n){var r=ge,i=St.transition;try{St.transition=null,ge=1,av(e,t,n,r)}finally{St.transition=i,ge=r}return null}function av(e,t,n,r){do Nr();while(hn!==null);if(pe&6)throw Error(q(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(q(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Bx(e,o),e===De&&(Le=De=null,Be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vo||(vo=!0,ih(Ho,function(){return Nr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=St.transition,St.transition=null;var a=ge;ge=1;var s=pe;pe|=4,Ac.current=null,tv(e,n),Qm(n,e),Ny(os),Ko=!!is,os=is=null,e.current=n,nv(n),Lx(),pe=s,ge=a,St.transition=o}else e.current=n;if(vo&&(vo=!1,hn=e,cl=i),o=e.pendingLanes,o===0&&(jn=null),Rx(n.stateNode),ot(e,Te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(sl)throw sl=!1,e=_s,_s=null,e;return cl&1&&e.tag!==0&&Nr(),o=e.pendingLanes,o&1?e===Cs?vi++:(vi=0,Cs=e):vi=0,Ln(),null}function Nr(){if(hn!==null){var e=Rf(cl),t=St.transition,n=ge;try{if(St.transition=null,ge=16>e?16:e,hn===null)var r=!1;else{if(e=hn,hn=null,cl=0,pe&6)throw Error(q(331));var i=pe;for(pe|=4,Q=e.current;Q!==null;){var o=Q,a=o.child;if(Q.flags&16){var s=o.deletions;if(s!==null){for(var c=0;c<s.length;c++){var u=s[c];for(Q=u;Q!==null;){var d=Q;switch(d.tag){case 0:case 11:case 15:xi(8,d,o)}var p=d.child;if(p!==null)p.return=d,Q=p;else for(;Q!==null;){d=Q;var f=d.sibling,m=d.return;if(qm(d),d===u){Q=null;break}if(f!==null){f.return=m,Q=f;break}Q=m}}}var w=o.alternate;if(w!==null){var j=w.child;if(j!==null){w.child=null;do{var z=j.sibling;j.sibling=null,j=z}while(j!==null)}}Q=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,Q=a;else e:for(;Q!==null;){if(o=Q,o.flags&2048)switch(o.tag){case 0:case 11:case 15:xi(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,Q=h;break e}Q=o.return}}var x=e.current;for(Q=x;Q!==null;){a=Q;var b=a.child;if(a.subtreeFlags&2064&&b!==null)b.return=a,Q=b;else e:for(a=x;Q!==null;){if(s=Q,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Nl(9,s)}}catch(k){Ee(s,s.return,k)}if(s===a){Q=null;break e}var P=s.sibling;if(P!==null){P.return=s.return,Q=P;break e}Q=s.return}}if(pe=i,Ln(),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(vl,e)}catch{}r=!0}return r}finally{ge=n,St.transition=t}}return!1}function jd(e,t,n){t=Rr(n,t),t=Rm(e,t,1),e=wn(e,t,1),t=Je(),e!==null&&(Gi(e,1,t),ot(e,t))}function Ee(e,t,n){if(e.tag===3)jd(e,e,n);else for(;t!==null;){if(t.tag===3){jd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jn===null||!jn.has(r))){e=Rr(n,e),e=Mm(t,e,1),t=wn(t,e,1),e=Je(),t!==null&&(Gi(t,1,e),ot(t,e));break}}t=t.return}}function sv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&n,De===e&&(Be&n)===n&&(Re===4||Re===3&&(Be&130023424)===Be&&500>Te()-Rc?Vn(e,0):Ic|=n),ot(e,t)}function nh(e,t){t===0&&(e.mode&1?(t=so,so<<=1,!(so&130023424)&&(so=4194304)):t=1);var n=Je();e=on(e,t),e!==null&&(Gi(e,t,n),ot(e,n))}function cv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),nh(e,n)}function uv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(q(314))}r!==null&&r.delete(t),nh(e,n)}var rh;rh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||rt.current)nt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return nt=!1,Yy(e,t,n);nt=!!(e.flags&131072)}else nt=!1,je&&t.flags&1048576&&am(t,el,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Io(e,t),e=t.pendingProps;var i=Pr(t,Ke.current);Cr(t,n),i=Ec(null,t,r,e,i,n);var o=zc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,it(r)?(o=!0,Xo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,jc(t),i.updater=Cl,t.stateNode=i,i._reactInternals=t,ms(t,r,e,n),t=xs(null,t,r,!0,o,n)):(t.tag=0,je&&o&&gc(t),Qe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Io(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=pv(r),e=Tt(r,e),i){case 0:t=gs(null,t,r,e,n);break e;case 1:t=fd(null,t,r,e,n);break e;case 11:t=dd(null,t,r,e,n);break e;case 14:t=pd(null,t,r,Tt(r.type,e),n);break e}throw Error(q(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tt(r,i),gs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tt(r,i),fd(e,t,r,i,n);case 3:e:{if(Fm(t),e===null)throw Error(q(387));r=t.pendingProps,o=t.memoizedState,i=o.element,fm(e,t),rl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Rr(Error(q(423)),t),t=md(e,t,r,n,i);break e}else if(r!==i){i=Rr(Error(q(424)),t),t=md(e,t,r,n,i);break e}else for(ft=kn(t.stateNode.containerInfo.firstChild),ht=t,je=!0,It=null,n=dm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Lr(),r===i){t=ln(e,t,n);break e}Qe(e,t,r,n)}t=t.child}return t;case 5:return mm(t),e===null&&ds(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ls(r,i)?a=null:o!==null&&ls(r,o)&&(t.flags|=32),$m(e,t),Qe(e,t,a,n),t.child;case 6:return e===null&&ds(t),null;case 13:return Bm(e,t,n);case 4:return Sc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ar(t,null,r,n):Qe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tt(r,i),dd(e,t,r,i,n);case 7:return Qe(e,t,t.pendingProps,n),t.child;case 8:return Qe(e,t,t.pendingProps.children,n),t.child;case 12:return Qe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ve(tl,r._currentValue),r._currentValue=a,o!==null)if(Dt(o.value,a)){if(o.children===i.children&&!rt.current){t=ln(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=tn(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ps(o.return,n,t),s.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(q(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),ps(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Qe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Cr(t,n),i=_t(i),r=r(i),t.flags|=1,Qe(e,t,r,n),t.child;case 14:return r=t.type,i=Tt(r,t.pendingProps),i=Tt(r.type,i),pd(e,t,r,i,n);case 15:return Om(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tt(r,i),Io(e,t),t.tag=1,it(r)?(e=!0,Xo(t)):e=!1,Cr(t,n),Im(t,r,i),ms(t,r,i,n),xs(null,t,r,!0,e,n);case 19:return Um(e,t,n);case 22:return Dm(e,t,n)}throw Error(q(156,t.tag))};function ih(e,t){return Pf(e,t)}function dv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,n,r){return new dv(e,t,n,r)}function $c(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pv(e){if(typeof e=="function")return $c(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ic)return 11;if(e===oc)return 14}return 2}function _n(e,t){var n=e.alternate;return n===null?(n=jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Oo(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")$c(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ur:return Wn(n.children,i,o,t);case rc:a=8,i|=8;break;case Da:return e=jt(12,n,t,i|2),e.elementType=Da,e.lanes=o,e;case $a:return e=jt(13,n,t,i),e.elementType=$a,e.lanes=o,e;case Fa:return e=jt(19,n,t,i),e.elementType=Fa,e.lanes=o,e;case mf:return zl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pf:a=10;break e;case ff:a=9;break e;case ic:a=11;break e;case oc:a=14;break e;case un:a=16,r=null;break e}throw Error(q(130,e==null?e:typeof e,""))}return t=jt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Wn(e,t,n,r){return e=jt(7,e,r,t),e.lanes=n,e}function zl(e,t,n,r){return e=jt(22,e,r,t),e.elementType=mf,e.lanes=n,e.stateNode={isHidden:!1},e}function pa(e,t,n){return e=jt(6,e,null,t),e.lanes=n,e}function fa(e,t,n){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function fv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kl(0),this.expirationTimes=Kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fc(e,t,n,r,i,o,a,s,c){return e=new fv(e,t,n,s,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=jt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jc(o),e}function mv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function oh(e){if(!e)return En;e=e._reactInternals;e:{if(er(e)!==e||e.tag!==1)throw Error(q(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(it(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(q(171))}if(e.tag===1){var n=e.type;if(it(n))return om(e,n,t)}return t}function lh(e,t,n,r,i,o,a,s,c){return e=Fc(n,r,!0,e,i,o,a,s,c),e.context=oh(null),n=e.current,r=Je(),i=Sn(n),o=tn(r,i),o.callback=t??null,wn(n,o,i),e.current.lanes=i,Gi(e,i,r),ot(e,r),e}function Tl(e,t,n,r){var i=t.current,o=Je(),a=Sn(i);return n=oh(n),t.context===null?t.context=n:t.pendingContext=n,t=tn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=wn(i,t,a),e!==null&&(Ot(e,i,a,o),Po(e,i,a)),a}function dl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bc(e,t){Sd(e,t),(e=e.alternate)&&Sd(e,t)}function hv(){return null}var ah=typeof reportError=="function"?reportError:function(e){console.error(e)};function Uc(e){this._internalRoot=e}Pl.prototype.render=Uc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(q(409));Tl(e,t,null,null)};Pl.prototype.unmount=Uc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xn(function(){Tl(null,e,null,null)}),t[rn]=null}};function Pl(e){this._internalRoot=e}Pl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Df();e={blockedOn:null,target:e,priority:t};for(var n=0;n<pn.length&&t!==0&&t<pn[n].priority;n++);pn.splice(n,0,e),n===0&&Ff(e)}};function Vc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _d(){}function gv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=dl(a);o.call(u)}}var a=lh(t,r,e,0,null,!1,!1,"",_d);return e._reactRootContainer=a,e[rn]=a.current,Li(e.nodeType===8?e.parentNode:e),Xn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=dl(c);s.call(u)}}var c=Fc(e,0,!1,null,null,!1,!1,"",_d);return e._reactRootContainer=c,e[rn]=c.current,Li(e.nodeType===8?e.parentNode:e),Xn(function(){Tl(t,c,n,r)}),c}function Al(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var c=dl(a);s.call(c)}}Tl(t,a,e,i)}else a=gv(n,t,e,i,r);return dl(a)}Mf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=si(t.pendingLanes);n!==0&&(sc(t,n|1),ot(t,Te()),!(pe&6)&&(Mr=Te()+500,Ln()))}break;case 13:Xn(function(){var r=on(e,1);if(r!==null){var i=Je();Ot(r,e,1,i)}}),Bc(e,1)}};cc=function(e){if(e.tag===13){var t=on(e,134217728);if(t!==null){var n=Je();Ot(t,e,134217728,n)}Bc(e,134217728)}};Of=function(e){if(e.tag===13){var t=Sn(e),n=on(e,t);if(n!==null){var r=Je();Ot(n,e,t,r)}Bc(e,t)}};Df=function(){return ge};$f=function(e,t){var n=ge;try{return ge=e,t()}finally{ge=n}};Ja=function(e,t,n){switch(t){case"input":if(Va(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=jl(r);if(!i)throw Error(q(90));gf(r),Va(r,i)}}}break;case"textarea":yf(e,n);break;case"select":t=n.value,t!=null&&wr(e,!!n.multiple,t,!1)}};_f=Mc;Cf=Xn;var xv={usingClientEntryPoint:!1,Events:[Ji,mr,jl,jf,Sf,Mc]},ti={findFiberByHostInstance:$n,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yv={bundleType:ti.bundleType,version:ti.version,rendererPackageName:ti.rendererPackageName,rendererConfig:ti.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:an.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zf(e),e===null?null:e.stateNode},findFiberByHostInstance:ti.findFiberByHostInstance||hv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bo.isDisabled&&bo.supportsFiber)try{vl=bo.inject(yv),Ht=bo}catch{}}xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xv;xt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vc(t))throw Error(q(200));return mv(e,t,null,n)};xt.createRoot=function(e,t){if(!Vc(e))throw Error(q(299));var n=!1,r="",i=ah;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Fc(e,1,!1,null,null,n,!1,r,i),e[rn]=t.current,Li(e.nodeType===8?e.parentNode:e),new Uc(t)};xt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(q(188)):(e=Object.keys(e).join(","),Error(q(268,e)));return e=zf(t),e=e===null?null:e.stateNode,e};xt.flushSync=function(e){return Xn(e)};xt.hydrate=function(e,t,n){if(!Ll(t))throw Error(q(200));return Al(null,e,t,!0,n)};xt.hydrateRoot=function(e,t,n){if(!Vc(e))throw Error(q(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=ah;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=lh(t,null,e,1,n??null,i,!1,o,a),e[rn]=t.current,Li(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Pl(t)};xt.render=function(e,t,n){if(!Ll(t))throw Error(q(200));return Al(null,e,t,!1,n)};xt.unmountComponentAtNode=function(e){if(!Ll(e))throw Error(q(40));return e._reactRootContainer?(Xn(function(){Al(null,null,e,!1,function(){e._reactRootContainer=null,e[rn]=null})}),!0):!1};xt.unstable_batchedUpdates=Mc;xt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ll(n))throw Error(q(200));if(e==null||e._reactInternals===void 0)throw Error(q(38));return Al(e,t,n,!1,r)};xt.version="18.3.1-next-f1338f8080-20240426";function sh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sh)}catch(e){console.error(e)}}sh(),sf.exports=xt;var vv=sf.exports,Cd=vv;Ma.createRoot=Cd.createRoot,Ma.hydrateRoot=Cd.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bi(){return Bi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bi.apply(this,arguments)}var gn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(gn||(gn={}));const Nd="popstate";function bv(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:s}=r.location;return zs("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ch(i)}return wv(t,n,null,e)}function Ae(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Wc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function kv(){return Math.random().toString(36).substr(2,8)}function Ed(e,t){return{usr:e.state,key:e.key,idx:t}}function zs(e,t,n,r){return n===void 0&&(n=null),Bi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Vr(t):t,{state:n,key:t&&t.key||r||kv()})}function ch(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Vr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function wv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=gn.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(Bi({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function p(){s=gn.Pop;let z=d(),h=z==null?null:z-u;u=z,c&&c({action:s,location:j.location,delta:h})}function f(z,h){s=gn.Push;let x=zs(j.location,z,h);u=d()+1;let b=Ed(x,u),P=j.createHref(x);try{a.pushState(b,"",P)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(P)}o&&c&&c({action:s,location:j.location,delta:1})}function m(z,h){s=gn.Replace;let x=zs(j.location,z,h);u=d();let b=Ed(x,u),P=j.createHref(x);a.replaceState(b,"",P),o&&c&&c({action:s,location:j.location,delta:0})}function w(z){let h=i.location.origin!=="null"?i.location.origin:i.location.href,x=typeof z=="string"?z:ch(z);return x=x.replace(/ $/,"%20"),Ae(h,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,h)}let j={get action(){return s},get location(){return e(i,a)},listen(z){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Nd,p),c=z,()=>{i.removeEventListener(Nd,p),c=null}},createHref(z){return t(i,z)},createURL:w,encodeLocation(z){let h=w(z);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:m,go(z){return a.go(z)}};return j}var zd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(zd||(zd={}));function jv(e,t,n){return n===void 0&&(n="/"),Sv(e,t,n)}function Sv(e,t,n,r){let i=typeof t=="string"?Vr(t):t,o=ph(i.pathname||"/",n);if(o==null)return null;let a=uh(e);_v(a);let s=null;for(let c=0;s==null&&c<a.length;++c){let u=Ov(o);s=Iv(a[c],u)}return s}function uh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let c={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(Ae(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Hn([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(Ae(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),uh(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Lv(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let c of dh(o.path))i(o,a,c)}),t}function dh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=dh(r.join("/")),s=[];return s.push(...a.map(c=>c===""?o:[o,c].join("/"))),i&&s.push(...a),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function _v(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Av(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Cv=/^:[\w-]+$/,Nv=3,Ev=2,zv=1,Tv=10,Pv=-2,Td=e=>e==="*";function Lv(e,t){let n=e.split("/"),r=n.length;return n.some(Td)&&(r+=Pv),t&&(r+=Ev),n.filter(i=>!Td(i)).reduce((i,o)=>i+(Cv.test(o)?Nv:o===""?zv:Tv),r)}function Av(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Iv(e,t,n){let{routesMeta:r}=e,i={},o="/",a=[];for(let s=0;s<r.length;++s){let c=r[s],u=s===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",p=Rv({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),f=c.route;if(!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:Hn([o,p.pathname]),pathnameBase:Uv(Hn([o,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(o=Hn([o,p.pathnameBase]))}return a}function Rv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Mv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:f,isOptional:m}=d;if(f==="*"){let j=s[p]||"";a=o.slice(0,o.length-j.length).replace(/(.)\/+$/,"$1")}const w=s[p];return m&&!w?u[f]=void 0:u[f]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function Mv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Wc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,c)=>(r.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Ov(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Wc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ph(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Dv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$v=e=>Dv.test(e);function Fv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Vr(e):e,o;if(n)if($v(n))o=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),Wc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?o=Pd(n.substring(1),"/"):o=Pd(n,t)}else o=t;return{pathname:o,search:Vv(r),hash:Wv(i)}}function Pd(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ma(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Bv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function fh(e,t){let n=Bv(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function mh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Vr(e):(i=Bi({},e),Ae(!i.pathname||!i.pathname.includes("?"),ma("?","pathname","search",i)),Ae(!i.pathname||!i.pathname.includes("#"),ma("#","pathname","hash",i)),Ae(!i.search||!i.search.includes("#"),ma("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(a==null)s=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}s=p>=0?t[p]:"/"}let c=Fv(i,s),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Hn=e=>e.join("/").replace(/\/\/+/g,"/"),Uv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Vv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Wv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Hv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const hh=["post","put","patch","delete"];new Set(hh);const qv=["get",...hh];new Set(qv);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ui(){return Ui=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ui.apply(this,arguments)}const Hc=C.createContext(null),Kv=C.createContext(null),Xi=C.createContext(null),Il=C.createContext(null),An=C.createContext({outlet:null,matches:[],isDataRoute:!1}),gh=C.createContext(null);function Zi(){return C.useContext(Il)!=null}function qc(){return Zi()||Ae(!1),C.useContext(Il).location}function xh(e){C.useContext(Xi).static||C.useLayoutEffect(e)}function Kc(){let{isDataRoute:e}=C.useContext(An);return e?a1():Gv()}function Gv(){Zi()||Ae(!1);let e=C.useContext(Hc),{basename:t,future:n,navigator:r}=C.useContext(Xi),{matches:i}=C.useContext(An),{pathname:o}=qc(),a=JSON.stringify(fh(i,n.v7_relativeSplatPath)),s=C.useRef(!1);return xh(()=>{s.current=!0}),C.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let p=mh(u,JSON.parse(a),o,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Hn([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,a,o,e])}function Qv(){let{matches:e}=C.useContext(An),t=e[e.length-1];return t?t.params:{}}function Jv(e,t){return Yv(e,t)}function Yv(e,t,n,r){Zi()||Ae(!1);let{navigator:i}=C.useContext(Xi),{matches:o}=C.useContext(An),a=o[o.length-1],s=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=qc(),d;if(t){var p;let z=typeof t=="string"?Vr(t):t;c==="/"||(p=z.pathname)!=null&&p.startsWith(c)||Ae(!1),d=z}else d=u;let f=d.pathname||"/",m=f;if(c!=="/"){let z=c.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(z.length).join("/")}let w=jv(e,{pathname:m}),j=n1(w&&w.map(z=>Object.assign({},z,{params:Object.assign({},s,z.params),pathname:Hn([c,i.encodeLocation?i.encodeLocation(z.pathname).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?c:Hn([c,i.encodeLocation?i.encodeLocation(z.pathnameBase).pathname:z.pathnameBase])})),o,n,r);return t&&j?C.createElement(Il.Provider,{value:{location:Ui({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:gn.Pop}},j):j}function Xv(){let e=l1(),t=Hv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,null)}const Zv=C.createElement(Xv,null);class e1 extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(An.Provider,{value:this.props.routeContext},C.createElement(gh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function t1(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(Hc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(An.Provider,{value:t},r)}function n1(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let d=a.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);d>=0||Ae(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:m}=n,w=p.route.loader&&f[p.route.id]===void 0&&(!m||m[p.route.id]===void 0);if(p.route.lazy||w){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,p,f)=>{let m,w=!1,j=null,z=null;n&&(m=s&&p.route.id?s[p.route.id]:void 0,j=p.route.errorElement||Zv,c&&(u<0&&f===0?(s1("route-fallback"),w=!0,z=null):u===f&&(w=!0,z=p.route.hydrateFallbackElement||null)));let h=t.concat(a.slice(0,f+1)),x=()=>{let b;return m?b=j:w?b=z:p.route.Component?b=C.createElement(p.route.Component,null):p.route.element?b=p.route.element:b=d,C.createElement(t1,{match:p,routeContext:{outlet:d,matches:h,isDataRoute:n!=null},children:b})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?C.createElement(e1,{location:n.location,revalidation:n.revalidation,component:j,error:m,children:x(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):x()},null)}var yh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(yh||{}),vh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(vh||{});function r1(e){let t=C.useContext(Hc);return t||Ae(!1),t}function i1(e){let t=C.useContext(Kv);return t||Ae(!1),t}function o1(e){let t=C.useContext(An);return t||Ae(!1),t}function bh(e){let t=o1(),n=t.matches[t.matches.length-1];return n.route.id||Ae(!1),n.route.id}function l1(){var e;let t=C.useContext(gh),n=i1(),r=bh();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function a1(){let{router:e}=r1(yh.UseNavigateStable),t=bh(vh.UseNavigateStable),n=C.useRef(!1);return xh(()=>{n.current=!0}),C.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ui({fromRouteId:t},o)))},[e,t])}const Ld={};function s1(e,t,n){Ld[e]||(Ld[e]=!0)}function c1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function u1(e){let{to:t,replace:n,state:r,relative:i}=e;Zi()||Ae(!1);let{future:o,static:a}=C.useContext(Xi),{matches:s}=C.useContext(An),{pathname:c}=qc(),u=Kc(),d=mh(t,fh(s,o.v7_relativeSplatPath),c,i==="path"),p=JSON.stringify(d);return C.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:i}),[u,p,i,n,r]),null}function sr(e){Ae(!1)}function d1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=gn.Pop,navigator:o,static:a=!1,future:s}=e;Zi()&&Ae(!1);let c=t.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:c,navigator:o,static:a,future:Ui({v7_relativeSplatPath:!1},s)}),[c,s,o,a]);typeof r=="string"&&(r=Vr(r));let{pathname:d="/",search:p="",hash:f="",state:m=null,key:w="default"}=r,j=C.useMemo(()=>{let z=ph(d,c);return z==null?null:{location:{pathname:z,search:p,hash:f,state:m,key:w},navigationType:i}},[c,d,p,f,m,w,i]);return j==null?null:C.createElement(Xi.Provider,{value:u},C.createElement(Il.Provider,{children:n,value:j}))}function p1(e){let{children:t,location:n}=e;return Jv(Ts(t),n)}new Promise(()=>{});function Ts(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let o=[...t,i];if(r.type===C.Fragment){n.push.apply(n,Ts(r.props.children,o));return}r.type!==sr&&Ae(!1),!r.props.index||!r.props.children||Ae(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Ts(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const f1="6";try{window.__reactRouterVersion=f1}catch{}const m1="startTransition",Ad=sx[m1];function h1(e){let{basename:t,children:n,future:r,window:i}=e,o=C.useRef();o.current==null&&(o.current=bv({window:i,v5Compat:!0}));let a=o.current,[s,c]=C.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=C.useCallback(p=>{u&&Ad?Ad(()=>c(p)):c(p)},[c,u]);return C.useLayoutEffect(()=>a.listen(d),[a,d]),C.useEffect(()=>c1(r),[r]),C.createElement(d1,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}var Id;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Id||(Id={}));var Rd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Rd||(Rd={}));const g1={},Md=e=>{let t;const n=new Set,r=(d,p)=>{const f=typeof d=="function"?d(t):d;if(!Object.is(f,t)){const m=t;t=p??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(w=>w(t,m))}},i=()=>t,c={setState:r,getState:i,getInitialState:()=>u,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(g1?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,c);return c},x1=e=>e?Md(e):Md;var kh={exports:{}},wh={},jh={exports:{}},Sh={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Or=C;function y1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var v1=typeof Object.is=="function"?Object.is:y1,b1=Or.useState,k1=Or.useEffect,w1=Or.useLayoutEffect,j1=Or.useDebugValue;function S1(e,t){var n=t(),r=b1({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return w1(function(){i.value=n,i.getSnapshot=t,ha(i)&&o({inst:i})},[e,n,t]),k1(function(){return ha(i)&&o({inst:i}),e(function(){ha(i)&&o({inst:i})})},[e]),j1(n),n}function ha(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!v1(e,n)}catch{return!0}}function _1(e,t){return t()}var C1=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?_1:S1;Sh.useSyncExternalStore=Or.useSyncExternalStore!==void 0?Or.useSyncExternalStore:C1;jh.exports=Sh;var N1=jh.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rl=C,E1=N1;function z1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var T1=typeof Object.is=="function"?Object.is:z1,P1=E1.useSyncExternalStore,L1=Rl.useRef,A1=Rl.useEffect,I1=Rl.useMemo,R1=Rl.useDebugValue;wh.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=L1(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=I1(function(){function c(m){if(!u){if(u=!0,d=m,m=r(m),i!==void 0&&a.hasValue){var w=a.value;if(i(w,m))return p=w}return p=m}if(w=p,T1(d,m))return w;var j=r(m);return i!==void 0&&i(w,j)?(d=m,w):(d=m,p=j)}var u=!1,d,p,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,r,i]);var s=P1(e,o[0],o[1]);return A1(function(){a.hasValue=!0,a.value=s},[s]),R1(s),s};kh.exports=wh;var M1=kh.exports;const O1=xl(M1),_h={},{useDebugValue:D1}=Rt,{useSyncExternalStoreWithSelector:$1}=O1;let Od=!1;const F1=e=>e;function B1(e,t=F1,n){(_h?"production":void 0)!=="production"&&n&&!Od&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Od=!0);const r=$1(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return D1(r),r}const Dd=e=>{(_h?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?x1(e):e,n=(r,i)=>B1(t,r,i);return Object.assign(n,t),n},U1=e=>e?Dd(e):Dd,Nt=U1((e,t)=>({project:null,selectedAgentId:null,selectedToolId:null,mcpServers:[],builtinTools:[],isRunning:!1,runEvents:[],watches:[],activeTab:"app",sidebarOpen:!0,hasUnsavedChanges:!1,runAgentId:null,currentSessionId:null,setProject:n=>{var i;const r=((i=n==null?void 0:n.watches)==null?void 0:i.map(o=>({...o,result:void 0,error:void 0,isLoading:!1,lastRun:void 0,history:[]})))||[];e({project:n,watches:r})},setSelectedAgentId:n=>e({selectedAgentId:n}),setSelectedToolId:n=>e({selectedToolId:n}),setMcpServers:n=>e({mcpServers:n}),setBuiltinTools:n=>e({builtinTools:n}),setIsRunning:n=>e({isRunning:n}),addRunEvent:n=>e(r=>({runEvents:[...r.runEvents,n]})),clearRunEvents:()=>e({runEvents:[]}),setWatches:n=>e({watches:n}),updateWatch:(n,r)=>e(i=>{const o=i.watches.map(s=>s.id===n?{...s,...r}:s);if(("serverName"in r||"toolName"in r||"args"in r||"transform"in r)&&i.project){const s=o.map(({id:c,serverName:u,toolName:d,args:p,transform:f})=>({id:c,serverName:u,toolName:d,args:p,transform:f}));return{watches:o,project:{...i.project,watches:s},hasUnsavedChanges:!0}}return{watches:o}}),addWatch:n=>e(r=>{const i=[...r.watches,n],{project:o}=r;if(o){const a=i.map(({id:s,serverName:c,toolName:u,args:d,transform:p})=>({id:s,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...o,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),removeWatch:n=>e(r=>{const i=r.watches.filter(a=>a.id!==n),{project:o}=r;if(o){const a=i.map(({id:s,serverName:c,toolName:u,args:d,transform:p})=>({id:s,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...o,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),clearWatchHistories:()=>e(n=>({watches:n.watches.map(r=>({...r,history:[],result:void 0,error:void 0}))})),setActiveTab:n=>e({activeTab:n}),setSidebarOpen:n=>e({sidebarOpen:n}),setHasUnsavedChanges:n=>e({hasUnsavedChanges:n}),setRunAgentId:n=>e({runAgentId:n}),setCurrentSessionId:n=>e({currentSessionId:n}),updateProject:n=>{const{project:r}=t();r&&e({project:{...r,...n}})},addAgent:n=>{const{project:r}=t();r&&e({project:{...r,agents:[...r.agents,n]}})},updateAgent:(n,r)=>{const{project:i}=t();i&&e({project:{...i,agents:i.agents.map(o=>o.id===n?{...o,...r}:o)}})},removeAgent:n=>{const{project:r,selectedAgentId:i}=t();r&&e({project:{...r,agents:r.agents.filter(o=>o.id!==n)},selectedAgentId:i===n?null:i})},addCustomTool:n=>{const{project:r}=t();r&&e({project:{...r,custom_tools:[...r.custom_tools,n]}})},updateCustomTool:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_tools:i.custom_tools.map(o=>o.id===n?{...o,...r}:o)}})},removeCustomTool:n=>{const{project:r,selectedToolId:i}=t();r&&e({project:{...r,custom_tools:r.custom_tools.filter(o=>o.id!==n)},selectedToolId:i===n?null:i})},addCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:[...r.custom_callbacks||[],n]}})},updateCustomCallback:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_callbacks:(i.custom_callbacks||[]).map(o=>o.id===n?{...o,...r}:o)}})},removeCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:(r.custom_callbacks||[]).filter(i=>i.id!==n)}})}})),V1="/api";async function ze(e,t){const n=await fetch(`${V1}${e}`,{...t,headers:{"Content-Type":"application/json",...t==null?void 0:t.headers}});if(!n.ok){const r=await n.json().catch(()=>({detail:"Unknown error"}));throw new Error(r.detail||`HTTP ${n.status}`)}return n.json()}async function Ch(){return(await ze("/projects")).projects}async function Nh(e){return(await ze(`/projects/${e}`)).project}async function Eh(e,t=""){return(await ze("/projects",{method:"POST",body:JSON.stringify({name:e,description:t})})).project}async function Ps(e,t){return(await ze(`/projects/${e}`,{method:"PUT",body:JSON.stringify(t)})).project}async function zh(e){await ze(`/projects/${e}`,{method:"DELETE"})}async function Th(e){return ze(`/sessions/${e}/save-to-memory`,{method:"POST"})}async function Ls(e){return(await ze(`/projects/${e}/sessions`)).sessions}async function Ph(e,t){return(await ze(`/projects/${e}/sessions/${t}/load`)).session}async function Lh(e){return(await ze(`/projects/${e}/yaml`)).yaml}async function Ah(e,t){return(await ze(`/projects/${e}/yaml`,{method:"PUT",body:JSON.stringify({yaml:t})})).project}async function Gc(){return(await ze("/mcp-servers")).servers}async function Ih(){return(await ze("/builtin-tools")).tools}function Rh(e){const t=window.location.protocol==="https:"?"wss:":"ws:",n=window.location.host;return new WebSocket(`${t}//${n}/ws/run/${e}`)}async function Do(e,t,n,r){return await ze(`/projects/${e}/generate-prompt`,{method:"POST",body:JSON.stringify({agent_id:t,context:n,agent_config:r||void 0})})}async function Mh(e,t){return await ze(`/projects/${e}/generate-agent-config`,{method:"POST",body:JSON.stringify({description:t})})}async function Oh(e,t,n,r=[],i){return await ze(`/projects/${e}/generate-tool-code`,{method:"POST",body:JSON.stringify({tool_name:t,tool_description:n,state_keys_used:r,context:i})})}async function Dh(e,t,n,r,i=[],o){return await ze(`/projects/${e}/generate-callback-code`,{method:"POST",body:JSON.stringify({callback_name:t,callback_description:n,callback_type:r,state_keys_used:i,context:o})})}async function $h(e){return await ze("/test-mcp-server",{method:"POST",body:JSON.stringify(e)})}const W1=Object.freeze(Object.defineProperty({__proto__:null,createProject:Eh,createRunWebSocket:Rh,deleteProject:zh,fetchJSON:ze,generateAgentConfig:Mh,generateCallbackCode:Dh,generatePrompt:Do,generateToolCode:Oh,getBuiltinTools:Ih,getMcpServers:Gc,getProject:Nh,getProjectYaml:Lh,listProjectSessions:Ls,listProjects:Ch,loadSession:Ph,saveSessionToMemory:Th,testMcpServer:$h,updateProject:Ps,updateProjectFromYaml:Ah},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var H1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),J=(e,t)=>{const n=C.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:s="",children:c,...u},d)=>C.createElement("svg",{ref:d,...H1,width:i,height:i,stroke:r,strokeWidth:a?Number(o)*24/Number(i):o,className:["lucide",`lucide-${q1(e)}`,s].join(" "),...u},[...t.map(([p,f])=>C.createElement(p,f)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=J("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=J("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=J("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=J("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=J("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=J("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=J("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=J("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=J("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=J("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=J("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=J("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=J("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=J("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=J("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=J("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=J("FileCheck",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=J("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=J("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=J("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=J("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=J("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=J("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=J("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=J("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=J("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=J("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=J("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=J("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=J("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=J("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=J("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=J("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=J("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=J("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=J("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=J("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=J("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=J("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=J("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=J("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=J("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=J("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=J("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=J("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=J("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=J("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=J("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=J("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=J("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=J("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=J("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=J("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=J("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function a0(){const e=Kc(),[t,n]=C.useState([]),[r,i]=C.useState(!0),[o,a]=C.useState(!1),[s,c]=C.useState("");C.useEffect(()=>{u()},[]);async function u(){try{const f=await Ch();n(f)}catch(f){console.error("Failed to load projects:",f)}finally{i(!1)}}async function d(){if(s.trim())try{const f=await Eh(s.trim());e(`/project/${f.id}`)}catch(f){console.error("Failed to create project:",f)}}async function p(f,m){if(m.stopPropagation(),!!confirm("Delete this project?"))try{await zh(f),n(t.filter(w=>w.id!==f))}catch(w){console.error("Failed to delete project:",w)}}return l.jsxs("div",{className:"project-list",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("header",{className:"header",children:[l.jsxs("div",{className:"logo",children:[l.jsx(Wi,{size:40,className:"logo-icon"}),l.jsx("h1",{className:"title",children:"ADK Playground"})]}),l.jsx("p",{className:"subtitle",children:"Build, test, and deploy AI agents visually"})]}),l.jsxs("div",{className:"content",children:[o?l.jsxs("div",{className:"create-form",children:[l.jsx("input",{type:"text",placeholder:"Project name...",value:s,onChange:f=>c(f.target.value),onKeyDown:f=>f.key==="Enter"&&d(),autoFocus:!0}),l.jsxs("button",{className:"btn btn-primary",onClick:d,children:[l.jsx(Fe,{size:18}),"Create"]}),l.jsx("button",{className:"btn btn-secondary",onClick:()=>a(!1),children:"Cancel"})]}):l.jsx("div",{className:"create-form",children:l.jsxs("button",{className:"btn btn-primary",onClick:()=>a(!0),children:[l.jsx(Fe,{size:18}),"New Project"]})}),r?l.jsx("div",{className:"loading",children:"Loading projects..."}):t.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx(Bd,{size:48,style:{marginBottom:16,opacity:.3}}),l.jsx("p",{children:"No projects yet. Create one to get started!"})]}):l.jsx("div",{className:"projects-grid",children:t.map(f=>l.jsxs("div",{className:"project-card",onClick:()=>e(`/project/${f.id}`),children:[l.jsxs("h3",{children:[l.jsx(Bd,{size:18}),f.name]}),l.jsx("p",{children:f.description||"No description"}),l.jsx("button",{className:"delete-btn",onClick:m=>p(f.id,m),children:l.jsx(Oe,{size:16})})]},f.id))})]})]})}const s0=[{key:"GOOGLE_API_KEY",description:"API key for Gemini models"},{key:"OPENAI_API_KEY",description:"API key for OpenAI models (via LiteLLM)"},{key:"ANTHROPIC_API_KEY",description:"API key for Anthropic Claude models"},{key:"GOOGLE_GENAI_USE_VERTEXAI",description:'Set to "1" to use Vertex AI instead of API key'},{key:"GOOGLE_CLOUD_PROJECT",description:"Google Cloud project ID for Vertex AI"},{key:"GOOGLE_CLOUD_REGION",description:"Google Cloud region for Vertex AI (e.g., us-central1)"}];function c0(e){return/^[a-zA-Z0-9_]+$/.test(e)}function u0(){const{project:e,updateProject:t}=Nt(),[n,r]=C.useState(null);if(!e)return null;const{app:i}=e;function o(v){t({app:{...i,...v}})}function a(v){if(v===""){r(null),o({name:v});return}c0(v)?r(null):r("Name can only contain letters, numbers, and underscores"),o({name:v})}function s(){const v={name:`state_key_${i.state_keys.length+1}`,description:"",type:"string",scope:"session"};o({state_keys:[...i.state_keys,v]})}function c(v,g){const E=[...i.state_keys];E[v]={...E[v],...g},o({state_keys:E})}function u(v){o({state_keys:i.state_keys.filter((g,E)=>E!==v)})}function d(v="ReflectAndRetryToolPlugin"){let g;switch(v){case"ReflectAndRetryToolPlugin":g={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1};break;case"ContextFilterPlugin":g={type:"ContextFilterPlugin",name:"context_filter",num_invocations_to_keep:5};break;case"LoggingPlugin":g={type:"LoggingPlugin",name:"logging"};break;case"GlobalInstructionPlugin":g={type:"GlobalInstructionPlugin",name:"global_instruction",global_instruction:""};break;case"SaveFilesAsArtifactsPlugin":g={type:"SaveFilesAsArtifactsPlugin",name:"save_files"};break;case"MultimodalToolResultsPlugin":g={type:"MultimodalToolResultsPlugin",name:"multimodal_tools"};break;default:g={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1}}o({plugins:[...i.plugins,g]})}function p(v,g){const E=[...i.plugins];E[v]={...E[v],...g},o({plugins:E})}function f(v){o({plugins:i.plugins.filter((g,E)=>E!==v)})}const m=i.models||[];function w(){const v=`model_${Date.now().toString(36)}`,g={id:v,name:"New Model",provider:"gemini",model_name:"gemini-2.0-flash",is_default:m.length===0};o({models:[...m,g],default_model_id:m.length===0?v:i.default_model_id})}function j(v,g){const E=m.map(D=>D.id===v?{...D,...g}:D);o({models:E})}function z(v){var D;const g=m.filter(R=>R.id!==v),E=i.default_model_id===v?((D=g[0])==null?void 0:D.id)||void 0:i.default_model_id;o({models:g,default_model_id:E})}function h(v){o({default_model_id:v})}const x=i.env_vars||{},[b,P]=C.useState({}),[k,y]=C.useState("");function L(v=""){const g=v||k.trim();!g||x[g]!==void 0||(o({env_vars:{...x,[g]:""}}),y(""))}function O(v,g){o({env_vars:{...x,[v]:g}})}function $(v){const g={...x};delete g[v],o({env_vars:g})}function _(v){P(g=>({...g,[v]:!g[v]}))}return l.jsxs("div",{className:"app-config",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("section",{className:"section",children:[l.jsx("div",{className:"section-header",children:l.jsxs("h2",{className:"section-title",children:[l.jsx(e0,{size:20}),"Basic Information"]})}),l.jsxs("div",{className:"form-grid",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"App Name"}),l.jsx("input",{type:"text",value:i.name,onChange:v=>a(v.target.value),style:{borderColor:n?"var(--error)":void 0}}),n&&l.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:4},children:n})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Root Agent"}),l.jsxs("select",{value:i.root_agent_id||"",onChange:v=>o({root_agent_id:v.target.value||void 0}),children:[l.jsx("option",{value:"",children:"Select an agent..."}),e.agents.map(v=>l.jsx("option",{value:v.id,children:v.name},v.id))]})]}),l.jsxs("div",{className:"form-group full-width",children:[l.jsx("label",{children:"Description"}),l.jsx("textarea",{value:i.description,onChange:v=>o({description:v.target.value}),rows:2})]})]})]}),l.jsxs("section",{className:"section",children:[l.jsx("div",{className:"section-header",children:l.jsxs("h2",{className:"section-title",children:[l.jsx(Kn,{size:20}),"Services"]})}),l.jsxs("div",{className:"form-grid",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Session Service"}),l.jsxs("select",{value:i.session_service_uri.split("://")[0],onChange:v=>{const g=v.target.value;o(g==="memory"?{session_service_uri:"memory://"}:g==="file"?{session_service_uri:"file://./sessions"}:g==="sqlite"?{session_service_uri:"sqlite://./sessions.db"}:{session_service_uri:g+"://"})},children:[l.jsx("option",{value:"memory",children:"In-Memory"}),l.jsx("option",{value:"file",children:"File System (JSON)"}),l.jsx("option",{value:"sqlite",children:"SQLite"}),l.jsx("option",{value:"postgresql",children:"PostgreSQL"})]}),i.session_service_uri.startsWith("file://")&&l.jsx("input",{type:"text",value:i.session_service_uri.replace("file://",""),onChange:v=>o({session_service_uri:"file://"+v.target.value}),placeholder:"./sessions",style:{marginTop:8}}),i.session_service_uri.startsWith("sqlite://")&&l.jsx("input",{type:"text",value:i.session_service_uri.replace("sqlite://",""),onChange:v=>o({session_service_uri:"sqlite://"+v.target.value}),placeholder:"./sessions.db",style:{marginTop:8}})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Memory Service"}),l.jsxs("select",{value:i.memory_service_uri.split("://")[0],onChange:v=>{const g=v.target.value;o(g==="memory"?{memory_service_uri:"memory://"}:g==="file"?{memory_service_uri:"file://./memory"}:{memory_service_uri:g+"://"})},children:[l.jsx("option",{value:"memory",children:"In-Memory"}),l.jsx("option",{value:"file",children:"File System (JSON)"})]}),i.memory_service_uri.startsWith("file://")&&l.jsx("input",{type:"text",value:i.memory_service_uri.replace("file://",""),onChange:v=>o({memory_service_uri:"file://"+v.target.value}),placeholder:"./memory",style:{marginTop:8}})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Artifact Service"}),l.jsxs("select",{value:i.artifact_service_uri.split("://")[0],onChange:v=>{const g=v.target.value;o(g==="memory"?{artifact_service_uri:"memory://"}:g==="file"?{artifact_service_uri:"file://./artifacts"}:g==="gcs"?{artifact_service_uri:"gcs://your-bucket-name"}:{artifact_service_uri:g+"://"})},children:[l.jsx("option",{value:"memory",children:"In-Memory"}),l.jsx("option",{value:"file",children:"File System"}),l.jsx("option",{value:"gcs",children:"Google Cloud Storage"})]}),i.artifact_service_uri.startsWith("file://")&&l.jsx("input",{type:"text",value:i.artifact_service_uri.replace("file://",""),onChange:v=>o({artifact_service_uri:"file://"+v.target.value}),placeholder:"./artifacts",style:{marginTop:8}}),i.artifact_service_uri.startsWith("gcs://")&&l.jsx("input",{type:"text",value:i.artifact_service_uri.replace("gcs://",""),onChange:v=>o({artifact_service_uri:"gcs://"+v.target.value}),placeholder:"your-bucket-name",style:{marginTop:8}})]})]})]}),l.jsxs("section",{className:"section",children:[l.jsx("div",{className:"section-header",children:l.jsxs("h2",{className:"section-title",children:[l.jsx(Is,{size:20}),"Environment Variables"]})}),l.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginBottom:16},children:"Set API keys and other environment variables. These are passed to the agent runtime."}),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16},children:s0.filter(v=>x[v.key]===void 0).map(v=>l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>L(v.key),title:v.description,children:[l.jsx(Fe,{size:12}),v.key]},v.key))}),Object.keys(x).length===0?l.jsx("p",{className:"empty-message",children:"No environment variables set. Click a button above to add common variables, or add a custom one below."}):Object.entries(x).map(([v,g])=>l.jsxs("div",{className:"list-item",style:{alignItems:"center"},children:[l.jsxs("div",{style:{flex:1,display:"flex",gap:12,alignItems:"center"},children:[l.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:13,minWidth:200},children:v}),l.jsxs("div",{style:{flex:1,display:"flex",gap:8,alignItems:"center"},children:[l.jsx("input",{type:b[v]?"text":"password",value:g,onChange:E=>O(v,E.target.value),placeholder:"Enter value...",style:{flex:1}}),l.jsx("button",{className:"delete-item",onClick:()=>_(v),title:b[v]?"Hide value":"Show value",children:b[v]?l.jsx(Q1,{size:16}):l.jsx(Vi,{size:16})})]})]}),l.jsx("button",{className:"delete-item",onClick:()=>$(v),children:l.jsx(Oe,{size:16})})]},v)),l.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[l.jsx("input",{type:"text",value:k,onChange:v=>y(v.target.value.toUpperCase().replace(/[^A-Z0-9_]/g,"")),placeholder:"CUSTOM_VAR_NAME",style:{flex:1,fontFamily:"var(--font-mono)"},onKeyDown:v=>v.key==="Enter"&&L()}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>L(),disabled:!k.trim(),children:[l.jsx(Fe,{size:14}),"Add Variable"]})]})]}),l.jsxs("section",{className:"section",children:[l.jsxs("div",{className:"section-header",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx(Qc,{size:20}),"Models"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:w,children:[l.jsx(Fe,{size:14}),"Add Model"]})]}),m.length===0?l.jsx("p",{className:"empty-message",children:"No models configured. Add models that agents can use."}):m.map(v=>l.jsxs("div",{className:"model-card",children:[l.jsxs("div",{className:"model-card-header",children:[l.jsx("input",{type:"text",value:v.name,onChange:g=>j(v.id,{name:g.target.value}),placeholder:"Model name",className:"model-name-input"}),l.jsx("button",{className:`default-model-btn ${i.default_model_id===v.id?"is-default":""}`,onClick:()=>h(v.id),title:i.default_model_id===v.id?"Default model":"Set as default",children:l.jsx(Hh,{size:14,fill:i.default_model_id===v.id?"currentColor":"none"})}),l.jsx("button",{className:"delete-item",onClick:()=>z(v.id),children:l.jsx(Oe,{size:16})})]}),l.jsxs("div",{className:"model-card-body",children:[l.jsxs("div",{className:"model-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Provider"}),l.jsxs("select",{value:v.provider,onChange:g=>j(v.id,{provider:g.target.value}),children:[l.jsx("option",{value:"gemini",children:"Gemini"}),l.jsx("option",{value:"litellm",children:"LiteLLM"}),l.jsx("option",{value:"anthropic",children:"Anthropic"})]})]}),l.jsxs("div",{className:"form-group",style:{flex:2},children:[l.jsx("label",{children:"Model Name"}),l.jsx("input",{type:"text",value:v.model_name,onChange:g=>j(v.id,{model_name:g.target.value}),placeholder:"e.g., gemini-2.0-flash"})]}),v.provider==="litellm"&&l.jsxs("div",{className:"form-group",style:{flex:2},children:[l.jsx("label",{children:"API Base URL"}),l.jsx("input",{type:"text",value:v.api_base||"",onChange:g=>j(v.id,{api_base:g.target.value||void 0}),placeholder:"http://localhost:11434"})]})]}),l.jsxs("div",{className:"model-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Temperature"}),l.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:v.temperature??"",onChange:g=>j(v.id,{temperature:g.target.value?parseFloat(g.target.value):void 0}),placeholder:"Default"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Max Tokens"}),l.jsx("input",{type:"number",min:"1",value:v.max_output_tokens??"",onChange:g=>j(v.id,{max_output_tokens:g.target.value?parseInt(g.target.value):void 0}),placeholder:"Default"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Top P"}),l.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:v.top_p??"",onChange:g=>j(v.id,{top_p:g.target.value?parseFloat(g.target.value):void 0}),placeholder:"Default"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Top K"}),l.jsx("input",{type:"number",min:"1",value:v.top_k??"",onChange:g=>j(v.id,{top_k:g.target.value?parseInt(g.target.value):void 0}),placeholder:"Default"})]})]})]})]},v.id))]}),l.jsxs("section",{className:"section",children:[l.jsx("div",{className:"section-header",children:l.jsxs("h2",{className:"section-title",children:[l.jsx(Kh,{size:20}),"Advanced Options"]})}),l.jsxs("div",{className:"toggle-group",children:[l.jsx("div",{className:`toggle ${i.compaction.enabled?"active":""}`,onClick:()=>o({compaction:{...i.compaction,enabled:!i.compaction.enabled}})}),l.jsxs("div",{className:"toggle-label",children:[l.jsx("strong",{children:"Event Compaction"}),l.jsx("span",{children:"Automatically summarize old events to reduce context size"})]}),i.compaction.enabled&&l.jsx("input",{type:"number",value:i.compaction.max_events,onChange:v=>o({compaction:{...i.compaction,max_events:parseInt(v.target.value)||100}}),style:{width:80},placeholder:"Max events"})]}),l.jsxs("div",{className:"toggle-group",style:{marginTop:12},children:[l.jsx("div",{className:`toggle ${i.context_cache.enabled?"active":""}`,onClick:()=>o({context_cache:{...i.context_cache,enabled:!i.context_cache.enabled}})}),l.jsxs("div",{className:"toggle-label",children:[l.jsx("strong",{children:"Context Caching"}),l.jsx("span",{children:"Cache static instructions for better performance"})]}),i.context_cache.enabled&&l.jsx("input",{type:"number",value:i.context_cache.ttl_seconds,onChange:v=>o({context_cache:{...i.context_cache,ttl_seconds:parseInt(v.target.value)||3600}}),style:{width:100},placeholder:"TTL (seconds)"})]}),l.jsxs("div",{className:"toggle-group",style:{marginTop:12},children:[l.jsx("div",{className:`toggle ${i.resumability.enabled?"active":""}`,onClick:()=>o({resumability:{...i.resumability,enabled:!i.resumability.enabled}})}),l.jsxs("div",{className:"toggle-label",children:[l.jsx("strong",{children:"Resumability"}),l.jsx("span",{children:"Allow pausing and resuming agent execution"})]})]})]}),l.jsxs("section",{className:"section",children:[l.jsxs("div",{className:"section-header",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx(Yc,{size:20}),"Session State Keys"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:s,children:[l.jsx(Fe,{size:14}),"Add Key"]})]}),i.state_keys.length===0?l.jsx("p",{className:"empty-message",children:"No state keys defined. Add keys to declare what data agents can share."}):i.state_keys.map((v,g)=>l.jsxs("div",{className:"list-item",children:[l.jsxs("div",{className:"list-item-content",children:[l.jsx("input",{type:"text",value:v.name,onChange:E=>c(g,{name:E.target.value}),placeholder:"Key name"}),l.jsxs("select",{value:v.type,onChange:E=>c(g,{type:E.target.value}),children:[l.jsx("option",{value:"string",children:"String"}),l.jsx("option",{value:"number",children:"Number"}),l.jsx("option",{value:"boolean",children:"Boolean"}),l.jsx("option",{value:"object",children:"Object"}),l.jsx("option",{value:"array",children:"Array"})]}),l.jsxs("select",{value:v.scope,onChange:E=>c(g,{scope:E.target.value}),children:[l.jsx("option",{value:"session",children:"Session"}),l.jsx("option",{value:"user",children:"User"}),l.jsx("option",{value:"app",children:"App"}),l.jsx("option",{value:"temp",children:"Temporary"})]}),l.jsx("input",{type:"text",value:v.description,onChange:E=>c(g,{description:E.target.value}),placeholder:"Description",style:{gridColumn:"span 2"}})]}),l.jsx("button",{className:"delete-item",onClick:()=>u(g),children:l.jsx(Oe,{size:16})})]},g))]}),l.jsxs("section",{className:"section",children:[l.jsxs("div",{className:"section-header",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx(xn,{size:20}),"Plugins"]}),l.jsx("div",{className:"plugin-add-dropdown",children:l.jsxs("select",{className:"btn btn-secondary btn-sm",value:"",onChange:v=>{v.target.value&&(d(v.target.value),v.target.value="")},style:{paddingRight:8},children:[l.jsx("option",{value:"",children:"+ Add Plugin..."}),l.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),l.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),l.jsx("option",{value:"LoggingPlugin",children:"Logging"}),l.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),l.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),l.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]})})]}),i.plugins.length===0?l.jsx("p",{className:"empty-message",children:"No plugins configured. Add plugins to extend agent functionality."}):i.plugins.map((v,g)=>l.jsxs("div",{className:"list-item",style:{flexDirection:"column",gap:12},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",gap:12},children:[l.jsxs("select",{value:v.type,onChange:E=>p(g,{type:E.target.value}),style:{flex:1},children:[l.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),l.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),l.jsx("option",{value:"LoggingPlugin",children:"Logging"}),l.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),l.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),l.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]}),l.jsx("button",{className:"delete-item",onClick:()=>f(g),children:l.jsx(Oe,{size:16})})]}),v.type==="ReflectAndRetryToolPlugin"&&l.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[l.jsxs("div",{className:"form-group",style:{flex:0},children:[l.jsx("label",{style:{fontSize:12},children:"Max Retries"}),l.jsx("input",{type:"number",min:"0",max:"10",value:v.max_retries??3,onChange:E=>p(g,{max_retries:parseInt(E.target.value)||0}),style:{width:70}})]}),l.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[l.jsx("input",{type:"checkbox",checked:v.throw_exception_if_retry_exceeded??!1,onChange:E=>p(g,{throw_exception_if_retry_exceeded:E.target.checked})}),"Throw exception if retry exceeded"]})]}),v.type==="ContextFilterPlugin"&&l.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[l.jsxs("div",{className:"form-group",style:{flex:0},children:[l.jsx("label",{style:{fontSize:12},children:"Invocations to Keep"}),l.jsx("input",{type:"number",min:"1",max:"100",value:v.num_invocations_to_keep??5,onChange:E=>p(g,{num_invocations_to_keep:parseInt(E.target.value)||1}),style:{width:70}})]}),l.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Keeps only the last N conversation turns to reduce context size"})]}),v.type==="LoggingPlugin"&&l.jsx("div",{style:{paddingLeft:8},children:l.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Logs all agent events (messages, tool calls, responses) to the console"})}),v.type==="GlobalInstructionPlugin"&&l.jsxs("div",{style:{width:"100%",paddingLeft:8},children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{style:{fontSize:12},children:"Global Instruction"}),l.jsx("textarea",{value:v.global_instruction??"",onChange:E=>p(g,{global_instruction:E.target.value}),placeholder:"Instructions that apply to all agents in the app...",rows:3,style:{width:"100%"}})]}),l.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"This instruction is prepended to every agent's system prompt"})]}),v.type==="SaveFilesAsArtifactsPlugin"&&l.jsx("div",{style:{paddingLeft:8},children:l.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Automatically saves files uploaded in user messages as artifacts for later retrieval"})}),v.type==="MultimodalToolResultsPlugin"&&l.jsx("div",{style:{paddingLeft:8},children:l.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Allows tools to return multimodal content (images, files) directly to the LLM"})})]},g))]})]})}const d0="modulepreload",p0=function(e){return"/"+e},qd={},Gh=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=p0(c),c in qd)return;qd[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":d0,u||(p.as="script"),p.crossOrigin="",p.href=c,s&&p.setAttribute("nonce",s),document.head.appendChild(p),u)return new Promise((f,m)=>{p.addEventListener("load",f),p.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return i.then(a=>{for(const s of a||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})};function Kd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function f0(e){if(Array.isArray(e))return e}function m0(e,t,n){return(t=k0(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h0(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,s=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(c=(r=o.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(d){u=!0,i=d}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return s}}function g0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Qd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Gd(Object(n),!0).forEach(function(r){m0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function x0(e,t){if(e==null)return{};var n,r,i=y0(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function y0(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function v0(e,t){return f0(e)||h0(e,t)||w0(e,t)||g0()}function b0(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function k0(e){var t=b0(e,"string");return typeof t=="symbol"?t:t+""}function w0(e,t){if(e){if(typeof e=="string")return Kd(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Kd(e,t):void 0}}function j0(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Yd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jd(Object(n),!0).forEach(function(r){j0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function S0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,o){return o(i)},r)}}function ui(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return t.apply(n,[].concat(i,s))}}}function fl(e){return{}.toString.call(e).includes("Object")}function _0(e){return!Object.keys(e).length}function Hi(e){return typeof e=="function"}function C0(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function N0(e,t){return fl(t)||Cn("changeType"),Object.keys(t).some(function(n){return!C0(e,n)})&&Cn("changeField"),t}function E0(e){Hi(e)||Cn("selectorType")}function z0(e){Hi(e)||fl(e)||Cn("handlerType"),fl(e)&&Object.values(e).some(function(t){return!Hi(t)})&&Cn("handlersType")}function T0(e){e||Cn("initialIsRequired"),fl(e)||Cn("initialType"),_0(e)&&Cn("initialContent")}function P0(e,t){throw new Error(e[t]||e.default)}var L0={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Cn=ui(P0)(L0),ko={changes:N0,selector:E0,handler:z0,initial:T0};function A0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};ko.initial(e),ko.handler(t);var n={current:e},r=ui(M0)(n,t),i=ui(R0)(n),o=ui(ko.changes)(e),a=ui(I0)(n);function s(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return ko.selector(u),u(n.current)}function c(u){S0(r,i,o,a)(u)}return[s,c]}function I0(e,t){return Hi(t)?t(e.current):t}function R0(e,t){return e.current=Yd(Yd({},e.current),t),t}function M0(e,t,n){return Hi(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var O0={create:A0},D0={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function $0(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return t.apply(n,[].concat(i,s))}}}function F0(e){return{}.toString.call(e).includes("Object")}function B0(e){return e||Xd("configIsRequired"),F0(e)||Xd("configType"),e.urls?(U0(),{paths:{vs:e.urls.monacoBase}}):e}function U0(){console.warn(Qh.deprecation)}function V0(e,t){throw new Error(e[t]||e.default)}var Qh={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Xd=$0(V0)(Qh),W0={config:B0},H0=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(o,a){return a(o)},i)}};function Jh(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],Jh(e[n],t[n]))}),Qd(Qd({},e),t)}var q0={type:"cancelation",msg:"operation is manually canceled"};function va(e){var t=!1,n=new Promise(function(r,i){e.then(function(o){return t?i(q0):r(o)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var K0=["monaco"],G0=O0.create({config:D0,isInitialized:!1,resolve:null,reject:null,monaco:null}),Yh=v0(G0,2),eo=Yh[0],Ml=Yh[1];function Q0(e){var t=W0.config(e),n=t.monaco,r=x0(t,K0);Ml(function(i){return{config:Jh(i.config,r),monaco:n}})}function J0(){var e=eo(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(Ml({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),va(ba);if(window.monaco&&window.monaco.editor)return Xh(window.monaco),e.resolve(window.monaco),va(ba);H0(Y0,Z0)(eb)}return va(ba)}function Y0(e){return document.body.appendChild(e)}function X0(e){var t=document.createElement("script");return e&&(t.src=e),t}function Z0(e){var t=eo(function(r){var i=r.config,o=r.reject;return{config:i,reject:o}}),n=X0("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function eb(){var e=eo(function(n){var r=n.config,i=n.resolve,o=n.reject;return{config:r,resolve:i,reject:o}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;Xh(r),e.resolve(r)},function(n){e.reject(n)})}function Xh(e){eo().monaco||Ml({monaco:e})}function tb(){return eo(function(e){var t=e.monaco;return t})}var ba=new Promise(function(e,t){return Ml({resolve:e,reject:t})}),Zh={config:Q0,init:J0,__getMonacoInstance:tb},nb={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},ka=nb,rb={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},ib=rb;function ob({children:e}){return Rt.createElement("div",{style:ib.container},e)}var lb=ob,ab=lb;function sb({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:o,wrapperProps:a}){return Rt.createElement("section",{style:{...ka.wrapper,width:e,height:t},...a},!n&&Rt.createElement(ab,null,r),Rt.createElement("div",{ref:i,style:{...ka.fullWidth,...!n&&ka.hide},className:o}))}var cb=sb,eg=C.memo(cb);function ub(e){C.useEffect(e,[])}var tg=ub;function db(e,t,n=!0){let r=C.useRef(!0);C.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var pt=db;function bi(){}function kr(e,t,n,r){return pb(e,r)||fb(e,t,n,r)}function pb(e,t){return e.editor.getModel(ng(e,t))}function fb(e,t,n,r){return e.editor.createModel(t,n,r?ng(e,r):void 0)}function ng(e,t){return e.Uri.parse(t)}function mb({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:o,modifiedModelPath:a,keepCurrentOriginalModel:s=!1,keepCurrentModifiedModel:c=!1,theme:u="light",loading:d="Loading...",options:p={},height:f="100%",width:m="100%",className:w,wrapperProps:j={},beforeMount:z=bi,onMount:h=bi}){let[x,b]=C.useState(!1),[P,k]=C.useState(!0),y=C.useRef(null),L=C.useRef(null),O=C.useRef(null),$=C.useRef(h),_=C.useRef(z),v=C.useRef(!1);tg(()=>{let R=Zh.init();return R.then(A=>(L.current=A)&&k(!1)).catch(A=>(A==null?void 0:A.type)!=="cancelation"&&console.error("Monaco initialization: error:",A)),()=>y.current?D():R.cancel()}),pt(()=>{if(y.current&&L.current){let R=y.current.getOriginalEditor(),A=kr(L.current,e||"",r||n||"text",o||"");A!==R.getModel()&&R.setModel(A)}},[o],x),pt(()=>{if(y.current&&L.current){let R=y.current.getModifiedEditor(),A=kr(L.current,t||"",i||n||"text",a||"");A!==R.getModel()&&R.setModel(A)}},[a],x),pt(()=>{let R=y.current.getModifiedEditor();R.getOption(L.current.editor.EditorOption.readOnly)?R.setValue(t||""):t!==R.getValue()&&(R.executeEdits("",[{range:R.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),R.pushUndoStop())},[t],x),pt(()=>{var R,A;(A=(R=y.current)==null?void 0:R.getModel())==null||A.original.setValue(e||"")},[e],x),pt(()=>{let{original:R,modified:A}=y.current.getModel();L.current.editor.setModelLanguage(R,r||n||"text"),L.current.editor.setModelLanguage(A,i||n||"text")},[n,r,i],x),pt(()=>{var R;(R=L.current)==null||R.editor.setTheme(u)},[u],x),pt(()=>{var R;(R=y.current)==null||R.updateOptions(p)},[p],x);let g=C.useCallback(()=>{var T;if(!L.current)return;_.current(L.current);let R=kr(L.current,e||"",r||n||"text",o||""),A=kr(L.current,t||"",i||n||"text",a||"");(T=y.current)==null||T.setModel({original:R,modified:A})},[n,t,i,e,r,o,a]),E=C.useCallback(()=>{var R;!v.current&&O.current&&(y.current=L.current.editor.createDiffEditor(O.current,{automaticLayout:!0,...p}),g(),(R=L.current)==null||R.editor.setTheme(u),b(!0),v.current=!0)},[p,u,g]);C.useEffect(()=>{x&&$.current(y.current,L.current)},[x]),C.useEffect(()=>{!P&&!x&&E()},[P,x,E]);function D(){var A,T,I,V;let R=(A=y.current)==null?void 0:A.getModel();s||((T=R==null?void 0:R.original)==null||T.dispose()),c||((I=R==null?void 0:R.modified)==null||I.dispose()),(V=y.current)==null||V.dispose()}return Rt.createElement(eg,{width:m,height:f,isEditorReady:x,loading:d,_ref:O,className:w,wrapperProps:j})}var hb=mb;C.memo(hb);function gb(e){let t=C.useRef();return C.useEffect(()=>{t.current=e},[e]),t.current}var xb=gb,wo=new Map;function yb({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:o,theme:a="light",line:s,loading:c="Loading...",options:u={},overrideServices:d={},saveViewState:p=!0,keepCurrentModel:f=!1,width:m="100%",height:w="100%",className:j,wrapperProps:z={},beforeMount:h=bi,onMount:x=bi,onChange:b,onValidate:P=bi}){let[k,y]=C.useState(!1),[L,O]=C.useState(!0),$=C.useRef(null),_=C.useRef(null),v=C.useRef(null),g=C.useRef(x),E=C.useRef(h),D=C.useRef(),R=C.useRef(r),A=xb(o),T=C.useRef(!1),I=C.useRef(!1);tg(()=>{let W=Zh.init();return W.then(G=>($.current=G)&&O(!1)).catch(G=>(G==null?void 0:G.type)!=="cancelation"&&console.error("Monaco initialization: error:",G)),()=>_.current?S():W.cancel()}),pt(()=>{var G,N,ne,ie;let W=kr($.current,e||r||"",t||i||"",o||n||"");W!==((G=_.current)==null?void 0:G.getModel())&&(p&&wo.set(A,(N=_.current)==null?void 0:N.saveViewState()),(ne=_.current)==null||ne.setModel(W),p&&((ie=_.current)==null||ie.restoreViewState(wo.get(o))))},[o],k),pt(()=>{var W;(W=_.current)==null||W.updateOptions(u)},[u],k),pt(()=>{!_.current||r===void 0||(_.current.getOption($.current.editor.EditorOption.readOnly)?_.current.setValue(r):r!==_.current.getValue()&&(I.current=!0,_.current.executeEdits("",[{range:_.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),_.current.pushUndoStop(),I.current=!1))},[r],k),pt(()=>{var G,N;let W=(G=_.current)==null?void 0:G.getModel();W&&i&&((N=$.current)==null||N.editor.setModelLanguage(W,i))},[i],k),pt(()=>{var W;s!==void 0&&((W=_.current)==null||W.revealLine(s))},[s],k),pt(()=>{var W;(W=$.current)==null||W.editor.setTheme(a)},[a],k);let V=C.useCallback(()=>{var W;if(!(!v.current||!$.current)&&!T.current){E.current($.current);let G=o||n,N=kr($.current,r||e||"",t||i||"",G||"");_.current=(W=$.current)==null?void 0:W.editor.create(v.current,{model:N,automaticLayout:!0,...u},d),p&&_.current.restoreViewState(wo.get(G)),$.current.editor.setTheme(a),s!==void 0&&_.current.revealLine(s),y(!0),T.current=!0}},[e,t,n,r,i,o,u,d,p,a,s]);C.useEffect(()=>{k&&g.current(_.current,$.current)},[k]),C.useEffect(()=>{!L&&!k&&V()},[L,k,V]),R.current=r,C.useEffect(()=>{var W,G;k&&b&&((W=D.current)==null||W.dispose(),D.current=(G=_.current)==null?void 0:G.onDidChangeModelContent(N=>{I.current||b(_.current.getValue(),N)}))},[k,b]),C.useEffect(()=>{if(k){let W=$.current.editor.onDidChangeMarkers(G=>{var ne;let N=(ne=_.current.getModel())==null?void 0:ne.uri;if(N&&G.find(ie=>ie.path===N.path)){let ie=$.current.editor.getModelMarkers({resource:N});P==null||P(ie)}});return()=>{W==null||W.dispose()}}return()=>{}},[k,P]);function S(){var W,G;(W=D.current)==null||W.dispose(),f?p&&wo.set(o,_.current.saveViewState()):(G=_.current.getModel())==null||G.dispose(),_.current.dispose()}return Rt.createElement(eg,{width:m,height:w,isEditorReady:k,loading:c,_ref:v,className:j,wrapperProps:z})}var vb=yb,bb=C.memo(vb),$r=bb;function kb(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const wb=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,jb=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Sb={};function Zd(e,t){return(Sb.jsx?jb:wb).test(e)}const _b=/[ \t\n\f\r]/g;function Cb(e){return typeof e=="object"?e.type==="text"?ep(e.value):!1:ep(e)}function ep(e){return e.replace(_b,"")===""}class to{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}to.prototype.normal={};to.prototype.property={};to.prototype.space=void 0;function rg(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new to(n,r,t)}function Ms(e){return e.toLowerCase()}class at{constructor(t,n){this.attribute=n,this.property=t}}at.prototype.attribute="";at.prototype.booleanish=!1;at.prototype.boolean=!1;at.prototype.commaOrSpaceSeparated=!1;at.prototype.commaSeparated=!1;at.prototype.defined=!1;at.prototype.mustUseProperty=!1;at.prototype.number=!1;at.prototype.overloadedBoolean=!1;at.prototype.property="";at.prototype.spaceSeparated=!1;at.prototype.space=void 0;let Nb=0;const re=tr(),Pe=tr(),Os=tr(),K=tr(),ye=tr(),Er=tr(),ut=tr();function tr(){return 2**++Nb}const Ds=Object.freeze(Object.defineProperty({__proto__:null,boolean:re,booleanish:Pe,commaOrSpaceSeparated:ut,commaSeparated:Er,number:K,overloadedBoolean:Os,spaceSeparated:ye},Symbol.toStringTag,{value:"Module"})),wa=Object.keys(Ds);class Zc extends at{constructor(t,n,r,i){let o=-1;if(super(t,n),tp(this,"space",i),typeof r=="number")for(;++o<wa.length;){const a=wa[o];tp(this,wa[o],(r&Ds[a])===Ds[a])}}}Zc.prototype.defined=!0;function tp(e,t,n){n&&(e[t]=n)}function Wr(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const o=new Zc(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[Ms(r)]=r,n[Ms(o.attribute)]=r}return new to(t,n,e.space)}const ig=Wr({properties:{ariaActiveDescendant:null,ariaAtomic:Pe,ariaAutoComplete:null,ariaBusy:Pe,ariaChecked:Pe,ariaColCount:K,ariaColIndex:K,ariaColSpan:K,ariaControls:ye,ariaCurrent:null,ariaDescribedBy:ye,ariaDetails:null,ariaDisabled:Pe,ariaDropEffect:ye,ariaErrorMessage:null,ariaExpanded:Pe,ariaFlowTo:ye,ariaGrabbed:Pe,ariaHasPopup:null,ariaHidden:Pe,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ye,ariaLevel:K,ariaLive:null,ariaModal:Pe,ariaMultiLine:Pe,ariaMultiSelectable:Pe,ariaOrientation:null,ariaOwns:ye,ariaPlaceholder:null,ariaPosInSet:K,ariaPressed:Pe,ariaReadOnly:Pe,ariaRelevant:null,ariaRequired:Pe,ariaRoleDescription:ye,ariaRowCount:K,ariaRowIndex:K,ariaRowSpan:K,ariaSelected:Pe,ariaSetSize:K,ariaSort:null,ariaValueMax:K,ariaValueMin:K,ariaValueNow:K,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function og(e,t){return t in e?e[t]:t}function lg(e,t){return og(e,t.toLowerCase())}const Eb=Wr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Er,acceptCharset:ye,accessKey:ye,action:null,allow:null,allowFullScreen:re,allowPaymentRequest:re,allowUserMedia:re,alt:null,as:null,async:re,autoCapitalize:null,autoComplete:ye,autoFocus:re,autoPlay:re,blocking:ye,capture:null,charSet:null,checked:re,cite:null,className:ye,cols:K,colSpan:null,content:null,contentEditable:Pe,controls:re,controlsList:ye,coords:K|Er,crossOrigin:null,data:null,dateTime:null,decoding:null,default:re,defer:re,dir:null,dirName:null,disabled:re,download:Os,draggable:Pe,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:re,formTarget:null,headers:ye,height:K,hidden:Os,high:K,href:null,hrefLang:null,htmlFor:ye,httpEquiv:ye,id:null,imageSizes:null,imageSrcSet:null,inert:re,inputMode:null,integrity:null,is:null,isMap:re,itemId:null,itemProp:ye,itemRef:ye,itemScope:re,itemType:ye,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:re,low:K,manifest:null,max:null,maxLength:K,media:null,method:null,min:null,minLength:K,multiple:re,muted:re,name:null,nonce:null,noModule:re,noValidate:re,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:re,optimum:K,pattern:null,ping:ye,placeholder:null,playsInline:re,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:re,referrerPolicy:null,rel:ye,required:re,reversed:re,rows:K,rowSpan:K,sandbox:ye,scope:null,scoped:re,seamless:re,selected:re,shadowRootClonable:re,shadowRootDelegatesFocus:re,shadowRootMode:null,shape:null,size:K,sizes:null,slot:null,span:K,spellCheck:Pe,src:null,srcDoc:null,srcLang:null,srcSet:null,start:K,step:null,style:null,tabIndex:K,target:null,title:null,translate:null,type:null,typeMustMatch:re,useMap:null,value:Pe,width:K,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ye,axis:null,background:null,bgColor:null,border:K,borderColor:null,bottomMargin:K,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:re,declare:re,event:null,face:null,frame:null,frameBorder:null,hSpace:K,leftMargin:K,link:null,longDesc:null,lowSrc:null,marginHeight:K,marginWidth:K,noResize:re,noHref:re,noShade:re,noWrap:re,object:null,profile:null,prompt:null,rev:null,rightMargin:K,rules:null,scheme:null,scrolling:Pe,standby:null,summary:null,text:null,topMargin:K,valueType:null,version:null,vAlign:null,vLink:null,vSpace:K,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:re,disableRemotePlayback:re,prefix:null,property:null,results:K,security:null,unselectable:null},space:"html",transform:lg}),zb=Wr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:ut,accentHeight:K,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:K,amplitude:K,arabicForm:null,ascent:K,attributeName:null,attributeType:null,azimuth:K,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:K,by:null,calcMode:null,capHeight:K,className:ye,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:K,diffuseConstant:K,direction:null,display:null,dur:null,divisor:K,dominantBaseline:null,download:re,dx:null,dy:null,edgeMode:null,editable:null,elevation:K,enableBackground:null,end:null,event:null,exponent:K,externalResourcesRequired:null,fill:null,fillOpacity:K,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Er,g2:Er,glyphName:Er,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:K,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:K,horizOriginX:K,horizOriginY:K,id:null,ideographic:K,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:K,k:K,k1:K,k2:K,k3:K,k4:K,kernelMatrix:ut,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:K,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:K,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:K,overlineThickness:K,paintOrder:null,panose1:null,path:null,pathLength:K,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ye,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:K,pointsAtY:K,pointsAtZ:K,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:ut,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:ut,rev:ut,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:ut,requiredFeatures:ut,requiredFonts:ut,requiredFormats:ut,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:K,specularExponent:K,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:K,strikethroughThickness:K,string:null,stroke:null,strokeDashArray:ut,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:K,strokeOpacity:K,strokeWidth:null,style:null,surfaceScale:K,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:ut,tabIndex:K,tableValues:null,target:null,targetX:K,targetY:K,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:ut,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:K,underlineThickness:K,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:K,values:null,vAlphabetic:K,vMathematical:K,vectorEffect:null,vHanging:K,vIdeographic:K,version:null,vertAdvY:K,vertOriginX:K,vertOriginY:K,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:K,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:og}),ag=Wr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),sg=Wr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:lg}),cg=Wr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),Tb={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Pb=/[A-Z]/g,np=/-[a-z]/g,Lb=/^data[-\w.:]+$/i;function Ab(e,t){const n=Ms(t);let r=t,i=at;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Lb.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(np,Rb);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!np.test(o)){let a=o.replace(Pb,Ib);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a}}i=Zc}return new i(r,t)}function Ib(e){return"-"+e.toLowerCase()}function Rb(e){return e.charAt(1).toUpperCase()}const Mb=rg([ig,Eb,ag,sg,cg],"html"),eu=rg([ig,zb,ag,sg,cg],"svg");function Ob(e){return e.join(" ").trim()}var tu={},rp=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Db=/\n/g,$b=/^\s*/,Fb=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Bb=/^:\s*/,Ub=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Vb=/^[;\s]*/,Wb=/^\s+|\s+$/g,Hb=`
`,ip="/",op="*",Dn="",qb="comment",Kb="declaration";function Gb(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(w){var j=w.match(Db);j&&(n+=j.length);var z=w.lastIndexOf(Hb);r=~z?w.length-z:r+w.length}function o(){var w={line:n,column:r};return function(j){return j.position=new a(w),u(),j}}function a(w){this.start=w,this.end={line:n,column:r},this.source=t.source}a.prototype.content=e;function s(w){var j=new Error(t.source+":"+n+":"+r+": "+w);if(j.reason=w,j.filename=t.source,j.line=n,j.column=r,j.source=e,!t.silent)throw j}function c(w){var j=w.exec(e);if(j){var z=j[0];return i(z),e=e.slice(z.length),j}}function u(){c($b)}function d(w){var j;for(w=w||[];j=p();)j!==!1&&w.push(j);return w}function p(){var w=o();if(!(ip!=e.charAt(0)||op!=e.charAt(1))){for(var j=2;Dn!=e.charAt(j)&&(op!=e.charAt(j)||ip!=e.charAt(j+1));)++j;if(j+=2,Dn===e.charAt(j-1))return s("End of comment missing");var z=e.slice(2,j-2);return r+=2,i(z),e=e.slice(j),r+=2,w({type:qb,comment:z})}}function f(){var w=o(),j=c(Fb);if(j){if(p(),!c(Bb))return s("property missing ':'");var z=c(Ub),h=w({type:Kb,property:lp(j[0].replace(rp,Dn)),value:z?lp(z[0].replace(rp,Dn)):Dn});return c(Vb),h}}function m(){var w=[];d(w);for(var j;j=f();)j!==!1&&(w.push(j),d(w));return w}return u(),m()}function lp(e){return e?e.replace(Wb,Dn):Dn}var Qb=Gb,Jb=Bo&&Bo.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(tu,"__esModule",{value:!0});tu.default=Xb;const Yb=Jb(Qb);function Xb(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,Yb.default)(e),i=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:a,value:s}=o;i?t(a,s,o):s&&(n=n||{},n[a]=s)}),n}var Ol={};Object.defineProperty(Ol,"__esModule",{value:!0});Ol.camelCase=void 0;var Zb=/^--[a-zA-Z0-9_-]+$/,ek=/-([a-z])/g,tk=/^[^-]+$/,nk=/^-(webkit|moz|ms|o|khtml)-/,rk=/^-(ms)-/,ik=function(e){return!e||tk.test(e)||Zb.test(e)},ok=function(e,t){return t.toUpperCase()},ap=function(e,t){return"".concat(t,"-")},lk=function(e,t){return t===void 0&&(t={}),ik(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(rk,ap):e=e.replace(nk,ap),e.replace(ek,ok))};Ol.camelCase=lk;var ak=Bo&&Bo.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},sk=ak(tu),ck=Ol;function $s(e,t){var n={};return!e||typeof e!="string"||(0,sk.default)(e,function(r,i){r&&i&&(n[(0,ck.camelCase)(r,t)]=i)}),n}$s.default=$s;var uk=$s;const dk=xl(uk),ug=dg("end"),nu=dg("start");function dg(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function pk(e){const t=nu(e),n=ug(e);if(t&&n)return{start:t,end:n}}function ki(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?sp(e.position):"start"in e||"end"in e?sp(e):"line"in e||"column"in e?Fs(e):""}function Fs(e){return cp(e&&e.line)+":"+cp(e&&e.column)}function sp(e){return Fs(e&&e.start)+"-"+Fs(e&&e.end)}function cp(e){return e&&typeof e=="number"?e:1}class Ge extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},a=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(a=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?o.ruleId=r:(o.source=r.slice(0,c),o.ruleId=r.slice(c+1))}if(!o.place&&o.ancestors&&o.ancestors){const c=o.ancestors[o.ancestors.length-1];c&&(o.place=c.position)}const s=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=s?s.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=s?s.line:void 0,this.name=ki(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=a&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Ge.prototype.file="";Ge.prototype.name="";Ge.prototype.reason="";Ge.prototype.message="";Ge.prototype.stack="";Ge.prototype.column=void 0;Ge.prototype.line=void 0;Ge.prototype.ancestors=void 0;Ge.prototype.cause=void 0;Ge.prototype.fatal=void 0;Ge.prototype.place=void 0;Ge.prototype.ruleId=void 0;Ge.prototype.source=void 0;const ru={}.hasOwnProperty,fk=new Map,mk=/[A-Z]/g,hk=new Set(["table","tbody","thead","tfoot","tr"]),gk=new Set(["td","th"]),pg="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function xk(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=_k(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Sk(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?eu:Mb,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=fg(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function fg(e,t,n){if(t.type==="element")return yk(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return vk(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return kk(e,t,n);if(t.type==="mdxjsEsm")return bk(e,t);if(t.type==="root")return wk(e,t,n);if(t.type==="text")return jk(e,t)}function yk(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=eu,e.schema=i),e.ancestors.push(t);const o=hg(e,t.tagName,!1),a=Ck(e,t);let s=ou(e,t);return hk.has(t.tagName)&&(s=s.filter(function(c){return typeof c=="string"?!Cb(c):!0})),mg(e,a,o,t),iu(a,s),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function vk(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}qi(e,t.position)}function bk(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);qi(e,t.position)}function kk(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=eu,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:hg(e,t.name,!0),a=Nk(e,t),s=ou(e,t);return mg(e,a,o,t),iu(a,s),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function wk(e,t,n){const r={};return iu(r,ou(e,t)),e.create(t,e.Fragment,r,n)}function jk(e,t){return t.value}function mg(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function iu(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function Sk(e,t,n){return r;function r(i,o,a,s){const u=Array.isArray(a.children)?n:t;return s?u(o,a,s):u(o,a)}}function _k(e,t){return n;function n(r,i,o,a){const s=Array.isArray(o.children),c=nu(r);return t(i,o,a,s,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function Ck(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&ru.call(t.properties,i)){const o=Ek(e,i,t.properties[i]);if(o){const[a,s]=o;e.tableCellAlignToStyle&&a==="align"&&typeof s=="string"&&gk.has(t.tagName)?r=s:n[a]=s}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function Nk(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const a=o.expression;a.type;const s=a.properties[0];s.type,Object.assign(n,e.evaluater.evaluateExpression(s.argument))}else qi(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const s=r.value.data.estree.body[0];s.type,o=e.evaluater.evaluateExpression(s.expression)}else qi(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function ou(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:fk;for(;++r<t.children.length;){const o=t.children[r];let a;if(e.passKeys){const c=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(c){const u=i.get(c)||0;a=c+"-"+u,i.set(c,u+1)}}const s=fg(e,o,a);s!==void 0&&n.push(s)}return n}function Ek(e,t,n){const r=Ab(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?kb(n):Ob(n)),r.property==="style"){let i=typeof n=="object"?n:zk(e,String(n));return e.stylePropertyNameCase==="css"&&(i=Tk(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?Tb[r.property]||r.property:r.attribute,n]}}function zk(e,t){try{return dk(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new Ge("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=pg+"#cannot-parse-style-attribute",i}}function hg(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,a;for(;++o<i.length;){const s=Zd(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};a=a?{type:"MemberExpression",object:a,property:s,computed:!!(o&&s.type==="Literal"),optional:!1}:s}r=a}else r=Zd(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return ru.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);qi(e)}function qi(e,t){const n=new Ge("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=pg+"#cannot-handle-mdx-estrees-without-createevaluater",n}function Tk(e){const t={};let n;for(n in e)ru.call(e,n)&&(t[Pk(n)]=e[n]);return t}function Pk(e){let t=e.replace(mk,Lk);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function Lk(e){return"-"+e.toLowerCase()}const ja={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Ak={};function Ik(e,t){const n=Ak,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return gg(e,r,i)}function gg(e,t,n){if(Rk(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return up(e.children,t,n)}return Array.isArray(e)?up(e,t,n):""}function up(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=gg(e[i],t,n);return r.join("")}function Rk(e){return!!(e&&typeof e=="object")}const dp=document.createElement("i");function lu(e){const t="&"+e+";";dp.innerHTML=t;const n=dp.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Gt(e,t,n,r){const i=e.length;let o=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);o<r.length;)a=r.slice(o,o+1e4),a.unshift(t,0),e.splice(...a),o+=1e4,t+=1e4}function wt(e,t){return e.length>0?(Gt(e,e.length,0,t),e):t}const pp={}.hasOwnProperty;function Mk(e){const t={};let n=-1;for(;++n<e.length;)Ok(t,e[n]);return t}function Ok(e,t){let n;for(n in t){const i=(pp.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let a;if(o)for(a in o){pp.call(i,a)||(i[a]=[]);const s=o[a];Dk(i[a],Array.isArray(s)?s:s?[s]:[])}}}function Dk(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Gt(e,0,0,r)}function xg(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function zr(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Wt=In(/[A-Za-z]/),mt=In(/[\dA-Za-z]/),$k=In(/[#-'*+\--9=?A-Z^-~]/);function Bs(e){return e!==null&&(e<32||e===127)}const Us=In(/\d/),Fk=In(/[\dA-Fa-f]/),Bk=In(/[!-/:-@[-`{-~]/);function te(e){return e!==null&&e<-2}function lt(e){return e!==null&&(e<0||e===32)}function me(e){return e===-2||e===-1||e===32}const Uk=In(new RegExp("\\p{P}|\\p{S}","u")),Vk=In(/\s/);function In(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Hr(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let a="";if(o===37&&mt(e.charCodeAt(n+1))&&mt(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(a=String.fromCharCode(o));else if(o>55295&&o<57344){const s=e.charCodeAt(n+1);o<56320&&s>56319&&s<57344?(a=String.fromCharCode(o,s),i=1):a="�"}else a=String.fromCharCode(o);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function be(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return a;function a(c){return me(c)?(e.enter(n),s(c)):t(c)}function s(c){return me(c)&&o++<i?(e.consume(c),s):(e.exit(n),t(c))}}const Wk={tokenize:Hk};function Hk(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),be(e,t,"linePrefix")}function i(s){return e.enter("paragraph"),o(s)}function o(s){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,a(s)}function a(s){if(s===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(s);return}return te(s)?(e.consume(s),e.exit("chunkText"),o):(e.consume(s),a)}}const qk={tokenize:Kk},fp={tokenize:Gk};function Kk(e){const t=this,n=[];let r=0,i,o,a;return s;function s(b){if(r<n.length){const P=n[r];return t.containerState=P[1],e.attempt(P[0].continuation,c,u)(b)}return u(b)}function c(b){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&x();const P=t.events.length;let k=P,y;for(;k--;)if(t.events[k][0]==="exit"&&t.events[k][1].type==="chunkFlow"){y=t.events[k][1].end;break}h(r);let L=P;for(;L<t.events.length;)t.events[L][1].end={...y},L++;return Gt(t.events,k+1,0,t.events.slice(P)),t.events.length=L,u(b)}return s(b)}function u(b){if(r===n.length){if(!i)return f(b);if(i.currentConstruct&&i.currentConstruct.concrete)return w(b);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(fp,d,p)(b)}function d(b){return i&&x(),h(r),f(b)}function p(b){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,w(b)}function f(b){return t.containerState={},e.attempt(fp,m,w)(b)}function m(b){return r++,n.push([t.currentConstruct,t.containerState]),f(b)}function w(b){if(b===null){i&&x(),h(0),e.consume(b);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),j(b)}function j(b){if(b===null){z(e.exit("chunkFlow"),!0),h(0),e.consume(b);return}return te(b)?(e.consume(b),z(e.exit("chunkFlow")),r=0,t.interrupt=void 0,s):(e.consume(b),j)}function z(b,P){const k=t.sliceStream(b);if(P&&k.push(null),b.previous=o,o&&(o.next=b),o=b,i.defineSkip(b.start),i.write(k),t.parser.lazy[b.start.line]){let y=i.events.length;for(;y--;)if(i.events[y][1].start.offset<a&&(!i.events[y][1].end||i.events[y][1].end.offset>a))return;const L=t.events.length;let O=L,$,_;for(;O--;)if(t.events[O][0]==="exit"&&t.events[O][1].type==="chunkFlow"){if($){_=t.events[O][1].end;break}$=!0}for(h(r),y=L;y<t.events.length;)t.events[y][1].end={..._},y++;Gt(t.events,O+1,0,t.events.slice(L)),t.events.length=y}}function h(b){let P=n.length;for(;P-- >b;){const k=n[P];t.containerState=k[1],k[0].exit.call(t,e)}n.length=b}function x(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function Gk(e,t,n){return be(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function mp(e){if(e===null||lt(e)||Vk(e))return 1;if(Uk(e))return 2}function au(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const Vs={name:"attention",resolveAll:Qk,tokenize:Jk};function Qk(e,t){let n=-1,r,i,o,a,s,c,u,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p={...e[r][1].end},f={...e[n][1].start};hp(p,-c),hp(f,c),a={type:c>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},s={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},o={type:c>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?"strong":"emphasis",start:{...a.start},end:{...s.end}},e[r][1].end={...a.start},e[n][1].start={...s.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=wt(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=wt(u,[["enter",i,t],["enter",a,t],["exit",a,t],["enter",o,t]]),u=wt(u,au(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=wt(u,[["exit",o,t],["enter",s,t],["exit",s,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,u=wt(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,Gt(e,r-1,n-r+3,u),n=r+u.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function Jk(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=mp(r);let o;return a;function a(c){return o=c,e.enter("attentionSequence"),s(c)}function s(c){if(c===o)return e.consume(c),s;const u=e.exit("attentionSequence"),d=mp(c),p=!d||d===2&&i||n.includes(c),f=!i||i===2&&d||n.includes(r);return u._open=!!(o===42?p:p&&(i||!f)),u._close=!!(o===42?f:f&&(d||!p)),t(c)}}function hp(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Yk={name:"autolink",tokenize:Xk};function Xk(e,t,n){let r=0;return i;function i(m){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(m){return Wt(m)?(e.consume(m),a):m===64?n(m):u(m)}function a(m){return m===43||m===45||m===46||mt(m)?(r=1,s(m)):u(m)}function s(m){return m===58?(e.consume(m),r=0,c):(m===43||m===45||m===46||mt(m))&&r++<32?(e.consume(m),s):(r=0,u(m))}function c(m){return m===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):m===null||m===32||m===60||Bs(m)?n(m):(e.consume(m),c)}function u(m){return m===64?(e.consume(m),d):$k(m)?(e.consume(m),u):n(m)}function d(m){return mt(m)?p(m):n(m)}function p(m){return m===46?(e.consume(m),r=0,d):m===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):f(m)}function f(m){if((m===45||mt(m))&&r++<63){const w=m===45?f:p;return e.consume(m),w}return n(m)}}const Dl={partial:!0,tokenize:Zk};function Zk(e,t,n){return r;function r(o){return me(o)?be(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||te(o)?t(o):n(o)}}const yg={continuation:{tokenize:tw},exit:nw,name:"blockQuote",tokenize:ew};function ew(e,t,n){const r=this;return i;function i(a){if(a===62){const s=r.containerState;return s.open||(e.enter("blockQuote",{_container:!0}),s.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),o}return n(a)}function o(a){return me(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function tw(e,t,n){const r=this;return i;function i(a){return me(a)?be(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):o(a)}function o(a){return e.attempt(yg,t,n)(a)}}function nw(e){e.exit("blockQuote")}const vg={name:"characterEscape",tokenize:rw};function rw(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return Bk(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const bg={name:"characterReference",tokenize:iw};function iw(e,t,n){const r=this;let i=0,o,a;return s;function s(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),c}function c(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,a=mt,d(p))}function u(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,a=Fk,d):(e.enter("characterReferenceValue"),o=7,a=Us,d(p))}function d(p){if(p===59&&i){const f=e.exit("characterReferenceValue");return a===mt&&!lu(r.sliceSerialize(f))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(p)&&i++<o?(e.consume(p),d):n(p)}}const gp={partial:!0,tokenize:lw},xp={concrete:!0,name:"codeFenced",tokenize:ow};function ow(e,t,n){const r=this,i={partial:!0,tokenize:k};let o=0,a=0,s;return c;function c(y){return u(y)}function u(y){const L=r.events[r.events.length-1];return o=L&&L[1].type==="linePrefix"?L[2].sliceSerialize(L[1],!0).length:0,s=y,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(y)}function d(y){return y===s?(a++,e.consume(y),d):a<3?n(y):(e.exit("codeFencedFenceSequence"),me(y)?be(e,p,"whitespace")(y):p(y))}function p(y){return y===null||te(y)?(e.exit("codeFencedFence"),r.interrupt?t(y):e.check(gp,j,P)(y)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(y))}function f(y){return y===null||te(y)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(y)):me(y)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),be(e,m,"whitespace")(y)):y===96&&y===s?n(y):(e.consume(y),f)}function m(y){return y===null||te(y)?p(y):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),w(y))}function w(y){return y===null||te(y)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(y)):y===96&&y===s?n(y):(e.consume(y),w)}function j(y){return e.attempt(i,P,z)(y)}function z(y){return e.enter("lineEnding"),e.consume(y),e.exit("lineEnding"),h}function h(y){return o>0&&me(y)?be(e,x,"linePrefix",o+1)(y):x(y)}function x(y){return y===null||te(y)?e.check(gp,j,P)(y):(e.enter("codeFlowValue"),b(y))}function b(y){return y===null||te(y)?(e.exit("codeFlowValue"),x(y)):(e.consume(y),b)}function P(y){return e.exit("codeFenced"),t(y)}function k(y,L,O){let $=0;return _;function _(R){return y.enter("lineEnding"),y.consume(R),y.exit("lineEnding"),v}function v(R){return y.enter("codeFencedFence"),me(R)?be(y,g,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(R):g(R)}function g(R){return R===s?(y.enter("codeFencedFenceSequence"),E(R)):O(R)}function E(R){return R===s?($++,y.consume(R),E):$>=a?(y.exit("codeFencedFenceSequence"),me(R)?be(y,D,"whitespace")(R):D(R)):O(R)}function D(R){return R===null||te(R)?(y.exit("codeFencedFence"),L(R)):O(R)}}}function lw(e,t,n){const r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}const Sa={name:"codeIndented",tokenize:sw},aw={partial:!0,tokenize:cw};function sw(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),be(e,o,"linePrefix",5)(u)}function o(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?a(u):n(u)}function a(u){return u===null?c(u):te(u)?e.attempt(aw,a,c)(u):(e.enter("codeFlowValue"),s(u))}function s(u){return u===null||te(u)?(e.exit("codeFlowValue"),a(u)):(e.consume(u),s)}function c(u){return e.exit("codeIndented"),t(u)}}function cw(e,t,n){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):te(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):be(e,o,"linePrefix",5)(a)}function o(a){const s=r.events[r.events.length-1];return s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(a):te(a)?i(a):n(a)}}const uw={name:"codeText",previous:pw,resolve:dw,tokenize:fw};function dw(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function pw(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function fw(e,t,n){let r=0,i,o;return a;function a(p){return e.enter("codeText"),e.enter("codeTextSequence"),s(p)}function s(p){return p===96?(e.consume(p),r++,s):(e.exit("codeTextSequence"),c(p))}function c(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),c):p===96?(o=e.enter("codeTextSequence"),i=0,d(p)):te(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),c):(e.enter("codeTextData"),u(p))}function u(p){return p===null||p===32||p===96||te(p)?(e.exit("codeTextData"),c(p)):(e.consume(p),u)}function d(p){return p===96?(e.consume(p),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(o.type="codeTextData",u(p))}}class mw{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&ni(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),ni(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),ni(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);ni(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);ni(this.left,n.reverse())}}}function ni(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function kg(e){const t={};let n=-1,r,i,o,a,s,c,u;const d=new mw(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,o=0,o<c.length&&c[o][1].type==="lineEndingBlank"&&(o+=2),o<c.length&&c[o][1].type==="content"))for(;++o<c.length&&c[o][1].type!=="content";)c[o][1].type==="chunkText"&&(c[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,hw(d,n)),n=t[n],u=!0);else if(r[1]._container){for(o=n,i=void 0;o--;)if(a=d.get(o),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=o);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},s=d.slice(i,n),s.unshift(r),d.splice(i,n-i+1,s))}}return Gt(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function hw(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const o=[];let a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const s=a.events,c=[],u={};let d,p,f=-1,m=n,w=0,j=0;const z=[j];for(;m;){for(;e.get(++i)[1]!==m;);o.push(i),m._tokenizer||(d=r.sliceStream(m),m.next||d.push(null),p&&a.defineSkip(m.start),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),p=m,m=m.next}for(m=n;++f<s.length;)s[f][0]==="exit"&&s[f-1][0]==="enter"&&s[f][1].type===s[f-1][1].type&&s[f][1].start.line!==s[f][1].end.line&&(j=f+1,z.push(j),m._tokenizer=void 0,m.previous=void 0,m=m.next);for(a.events=[],m?(m._tokenizer=void 0,m.previous=void 0):z.pop(),f=z.length;f--;){const h=s.slice(z[f],z[f+1]),x=o.pop();c.push([x,x+h.length-1]),e.splice(x,2,h)}for(c.reverse(),f=-1;++f<c.length;)u[w+c[f][0]]=w+c[f][1],w+=c[f][1]-c[f][0]-1;return u}const gw={resolve:yw,tokenize:vw},xw={partial:!0,tokenize:bw};function yw(e){return kg(e),e}function vw(e,t){let n;return r;function r(s){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(s)}function i(s){return s===null?o(s):te(s)?e.check(xw,a,o)(s):(e.consume(s),i)}function o(s){return e.exit("chunkContent"),e.exit("content"),t(s)}function a(s){return e.consume(s),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function bw(e,t,n){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),be(e,o,"linePrefix")}function o(a){if(a===null||te(a))return n(a);const s=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function wg(e,t,n,r,i,o,a,s,c){const u=c||Number.POSITIVE_INFINITY;let d=0;return p;function p(h){return h===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(h),e.exit(o),f):h===null||h===32||h===41||Bs(h)?n(h):(e.enter(r),e.enter(a),e.enter(s),e.enter("chunkString",{contentType:"string"}),j(h))}function f(h){return h===62?(e.enter(o),e.consume(h),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(s),e.enter("chunkString",{contentType:"string"}),m(h))}function m(h){return h===62?(e.exit("chunkString"),e.exit(s),f(h)):h===null||h===60||te(h)?n(h):(e.consume(h),h===92?w:m)}function w(h){return h===60||h===62||h===92?(e.consume(h),m):m(h)}function j(h){return!d&&(h===null||h===41||lt(h))?(e.exit("chunkString"),e.exit(s),e.exit(a),e.exit(r),t(h)):d<u&&h===40?(e.consume(h),d++,j):h===41?(e.consume(h),d--,j):h===null||h===32||h===40||Bs(h)?n(h):(e.consume(h),h===92?z:j)}function z(h){return h===40||h===41||h===92?(e.consume(h),j):j(h)}}function jg(e,t,n,r,i,o){const a=this;let s=0,c;return u;function u(m){return e.enter(r),e.enter(i),e.consume(m),e.exit(i),e.enter(o),d}function d(m){return s>999||m===null||m===91||m===93&&!c||m===94&&!s&&"_hiddenFootnoteSupport"in a.parser.constructs?n(m):m===93?(e.exit(o),e.enter(i),e.consume(m),e.exit(i),e.exit(r),t):te(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),p(m))}function p(m){return m===null||m===91||m===93||te(m)||s++>999?(e.exit("chunkString"),d(m)):(e.consume(m),c||(c=!me(m)),m===92?f:p)}function f(m){return m===91||m===92||m===93?(e.consume(m),s++,p):p(m)}}function Sg(e,t,n,r,i,o){let a;return s;function s(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),a=f===40?41:f,c):n(f)}function c(f){return f===a?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(o),u(f))}function u(f){return f===a?(e.exit(o),c(a)):f===null?n(f):te(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),be(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===a||f===null||te(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?p:d)}function p(f){return f===a||f===92?(e.consume(f),d):d(f)}}function wi(e,t){let n;return r;function r(i){return te(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):me(i)?be(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const kw={name:"definition",tokenize:jw},ww={partial:!0,tokenize:Sw};function jw(e,t,n){const r=this;let i;return o;function o(m){return e.enter("definition"),a(m)}function a(m){return jg.call(r,e,s,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(m)}function s(m){return i=zr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),m===58?(e.enter("definitionMarker"),e.consume(m),e.exit("definitionMarker"),c):n(m)}function c(m){return lt(m)?wi(e,u)(m):u(m)}function u(m){return wg(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(m)}function d(m){return e.attempt(ww,p,p)(m)}function p(m){return me(m)?be(e,f,"whitespace")(m):f(m)}function f(m){return m===null||te(m)?(e.exit("definition"),r.parser.defined.push(i),t(m)):n(m)}}function Sw(e,t,n){return r;function r(s){return lt(s)?wi(e,i)(s):n(s)}function i(s){return Sg(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(s)}function o(s){return me(s)?be(e,a,"whitespace")(s):a(s)}function a(s){return s===null||te(s)?t(s):n(s)}}const _w={name:"hardBreakEscape",tokenize:Cw};function Cw(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return te(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const Nw={name:"headingAtx",resolve:Ew,tokenize:zw};function Ew(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Gt(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function zw(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),o(d)}function o(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&r++<6?(e.consume(d),a):d===null||lt(d)?(e.exit("atxHeadingSequence"),s(d)):n(d)}function s(d){return d===35?(e.enter("atxHeadingSequence"),c(d)):d===null||te(d)?(e.exit("atxHeading"),t(d)):me(d)?be(e,s,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function c(d){return d===35?(e.consume(d),c):(e.exit("atxHeadingSequence"),s(d))}function u(d){return d===null||d===35||lt(d)?(e.exit("atxHeadingText"),s(d)):(e.consume(d),u)}}const Tw=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],yp=["pre","script","style","textarea"],Pw={concrete:!0,name:"htmlFlow",resolveTo:Iw,tokenize:Rw},Lw={partial:!0,tokenize:Ow},Aw={partial:!0,tokenize:Mw};function Iw(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Rw(e,t,n){const r=this;let i,o,a,s,c;return u;function u(N){return d(N)}function d(N){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(N),p}function p(N){return N===33?(e.consume(N),f):N===47?(e.consume(N),o=!0,j):N===63?(e.consume(N),i=3,r.interrupt?t:S):Wt(N)?(e.consume(N),a=String.fromCharCode(N),z):n(N)}function f(N){return N===45?(e.consume(N),i=2,m):N===91?(e.consume(N),i=5,s=0,w):Wt(N)?(e.consume(N),i=4,r.interrupt?t:S):n(N)}function m(N){return N===45?(e.consume(N),r.interrupt?t:S):n(N)}function w(N){const ne="CDATA[";return N===ne.charCodeAt(s++)?(e.consume(N),s===ne.length?r.interrupt?t:g:w):n(N)}function j(N){return Wt(N)?(e.consume(N),a=String.fromCharCode(N),z):n(N)}function z(N){if(N===null||N===47||N===62||lt(N)){const ne=N===47,ie=a.toLowerCase();return!ne&&!o&&yp.includes(ie)?(i=1,r.interrupt?t(N):g(N)):Tw.includes(a.toLowerCase())?(i=6,ne?(e.consume(N),h):r.interrupt?t(N):g(N)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(N):o?x(N):b(N))}return N===45||mt(N)?(e.consume(N),a+=String.fromCharCode(N),z):n(N)}function h(N){return N===62?(e.consume(N),r.interrupt?t:g):n(N)}function x(N){return me(N)?(e.consume(N),x):_(N)}function b(N){return N===47?(e.consume(N),_):N===58||N===95||Wt(N)?(e.consume(N),P):me(N)?(e.consume(N),b):_(N)}function P(N){return N===45||N===46||N===58||N===95||mt(N)?(e.consume(N),P):k(N)}function k(N){return N===61?(e.consume(N),y):me(N)?(e.consume(N),k):b(N)}function y(N){return N===null||N===60||N===61||N===62||N===96?n(N):N===34||N===39?(e.consume(N),c=N,L):me(N)?(e.consume(N),y):O(N)}function L(N){return N===c?(e.consume(N),c=null,$):N===null||te(N)?n(N):(e.consume(N),L)}function O(N){return N===null||N===34||N===39||N===47||N===60||N===61||N===62||N===96||lt(N)?k(N):(e.consume(N),O)}function $(N){return N===47||N===62||me(N)?b(N):n(N)}function _(N){return N===62?(e.consume(N),v):n(N)}function v(N){return N===null||te(N)?g(N):me(N)?(e.consume(N),v):n(N)}function g(N){return N===45&&i===2?(e.consume(N),A):N===60&&i===1?(e.consume(N),T):N===62&&i===4?(e.consume(N),W):N===63&&i===3?(e.consume(N),S):N===93&&i===5?(e.consume(N),V):te(N)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(Lw,G,E)(N)):N===null||te(N)?(e.exit("htmlFlowData"),E(N)):(e.consume(N),g)}function E(N){return e.check(Aw,D,G)(N)}function D(N){return e.enter("lineEnding"),e.consume(N),e.exit("lineEnding"),R}function R(N){return N===null||te(N)?E(N):(e.enter("htmlFlowData"),g(N))}function A(N){return N===45?(e.consume(N),S):g(N)}function T(N){return N===47?(e.consume(N),a="",I):g(N)}function I(N){if(N===62){const ne=a.toLowerCase();return yp.includes(ne)?(e.consume(N),W):g(N)}return Wt(N)&&a.length<8?(e.consume(N),a+=String.fromCharCode(N),I):g(N)}function V(N){return N===93?(e.consume(N),S):g(N)}function S(N){return N===62?(e.consume(N),W):N===45&&i===2?(e.consume(N),S):g(N)}function W(N){return N===null||te(N)?(e.exit("htmlFlowData"),G(N)):(e.consume(N),W)}function G(N){return e.exit("htmlFlow"),t(N)}}function Mw(e,t,n){const r=this;return i;function i(a){return te(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o):n(a)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function Ow(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Dl,t,n)}}const Dw={name:"htmlText",tokenize:$w};function $w(e,t,n){const r=this;let i,o,a;return s;function s(S){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(S),c}function c(S){return S===33?(e.consume(S),u):S===47?(e.consume(S),k):S===63?(e.consume(S),b):Wt(S)?(e.consume(S),O):n(S)}function u(S){return S===45?(e.consume(S),d):S===91?(e.consume(S),o=0,w):Wt(S)?(e.consume(S),x):n(S)}function d(S){return S===45?(e.consume(S),m):n(S)}function p(S){return S===null?n(S):S===45?(e.consume(S),f):te(S)?(a=p,T(S)):(e.consume(S),p)}function f(S){return S===45?(e.consume(S),m):p(S)}function m(S){return S===62?A(S):S===45?f(S):p(S)}function w(S){const W="CDATA[";return S===W.charCodeAt(o++)?(e.consume(S),o===W.length?j:w):n(S)}function j(S){return S===null?n(S):S===93?(e.consume(S),z):te(S)?(a=j,T(S)):(e.consume(S),j)}function z(S){return S===93?(e.consume(S),h):j(S)}function h(S){return S===62?A(S):S===93?(e.consume(S),h):j(S)}function x(S){return S===null||S===62?A(S):te(S)?(a=x,T(S)):(e.consume(S),x)}function b(S){return S===null?n(S):S===63?(e.consume(S),P):te(S)?(a=b,T(S)):(e.consume(S),b)}function P(S){return S===62?A(S):b(S)}function k(S){return Wt(S)?(e.consume(S),y):n(S)}function y(S){return S===45||mt(S)?(e.consume(S),y):L(S)}function L(S){return te(S)?(a=L,T(S)):me(S)?(e.consume(S),L):A(S)}function O(S){return S===45||mt(S)?(e.consume(S),O):S===47||S===62||lt(S)?$(S):n(S)}function $(S){return S===47?(e.consume(S),A):S===58||S===95||Wt(S)?(e.consume(S),_):te(S)?(a=$,T(S)):me(S)?(e.consume(S),$):A(S)}function _(S){return S===45||S===46||S===58||S===95||mt(S)?(e.consume(S),_):v(S)}function v(S){return S===61?(e.consume(S),g):te(S)?(a=v,T(S)):me(S)?(e.consume(S),v):$(S)}function g(S){return S===null||S===60||S===61||S===62||S===96?n(S):S===34||S===39?(e.consume(S),i=S,E):te(S)?(a=g,T(S)):me(S)?(e.consume(S),g):(e.consume(S),D)}function E(S){return S===i?(e.consume(S),i=void 0,R):S===null?n(S):te(S)?(a=E,T(S)):(e.consume(S),E)}function D(S){return S===null||S===34||S===39||S===60||S===61||S===96?n(S):S===47||S===62||lt(S)?$(S):(e.consume(S),D)}function R(S){return S===47||S===62||lt(S)?$(S):n(S)}function A(S){return S===62?(e.consume(S),e.exit("htmlTextData"),e.exit("htmlText"),t):n(S)}function T(S){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),I}function I(S){return me(S)?be(e,V,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(S):V(S)}function V(S){return e.enter("htmlTextData"),a(S)}}const su={name:"labelEnd",resolveAll:Vw,resolveTo:Ww,tokenize:Hw},Fw={tokenize:qw},Bw={tokenize:Kw},Uw={tokenize:Gw};function Vw(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&Gt(e,0,e.length,n),e}function Ww(e,t){let n=e.length,r=0,i,o,a,s;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(a){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=n);const c={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[o][1].start},end:{...e[a][1].end}},d={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[a-2][1].start}};return s=[["enter",c,t],["enter",u,t]],s=wt(s,e.slice(o+1,o+r+3)),s=wt(s,[["enter",d,t]]),s=wt(s,au(t.parser.constructs.insideSpan.null,e.slice(o+r+4,a-3),t)),s=wt(s,[["exit",d,t],e[a-2],e[a-1],["exit",u,t]]),s=wt(s,e.slice(a+1)),s=wt(s,[["exit",c,t]]),Gt(e,o,e.length,s),e}function Hw(e,t,n){const r=this;let i=r.events.length,o,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return s;function s(f){return o?o._inactive?p(f):(a=r.parser.defined.includes(zr(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),c):n(f)}function c(f){return f===40?e.attempt(Fw,d,a?d:p)(f):f===91?e.attempt(Bw,d,a?u:p)(f):a?d(f):p(f)}function u(f){return e.attempt(Uw,d,p)(f)}function d(f){return t(f)}function p(f){return o._balanced=!0,n(f)}}function qw(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),i}function i(p){return lt(p)?wi(e,o)(p):o(p)}function o(p){return p===41?d(p):wg(e,a,s,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function a(p){return lt(p)?wi(e,c)(p):d(p)}function s(p){return n(p)}function c(p){return p===34||p===39||p===40?Sg(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function u(p){return lt(p)?wi(e,d)(p):d(p)}function d(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function Kw(e,t,n){const r=this;return i;function i(s){return jg.call(r,e,o,a,"reference","referenceMarker","referenceString")(s)}function o(s){return r.parser.defined.includes(zr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(s):n(s)}function a(s){return n(s)}}function Gw(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const Qw={name:"labelStartImage",resolveAll:su.resolveAll,tokenize:Jw};function Jw(e,t,n){const r=this;return i;function i(s){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(s),e.exit("labelImageMarker"),o}function o(s){return s===91?(e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelImage"),a):n(s)}function a(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(s):t(s)}}const Yw={name:"labelStartLink",resolveAll:su.resolveAll,tokenize:Xw};function Xw(e,t,n){const r=this;return i;function i(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),o}function o(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const _a={name:"lineEnding",tokenize:Zw};function Zw(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),be(e,t,"linePrefix")}}const $o={name:"thematicBreak",tokenize:ej};function ej(e,t,n){let r=0,i;return o;function o(u){return e.enter("thematicBreak"),a(u)}function a(u){return i=u,s(u)}function s(u){return u===i?(e.enter("thematicBreakSequence"),c(u)):r>=3&&(u===null||te(u))?(e.exit("thematicBreak"),t(u)):n(u)}function c(u){return u===i?(e.consume(u),r++,c):(e.exit("thematicBreakSequence"),me(u)?be(e,s,"whitespace")(u):s(u))}}const et={continuation:{tokenize:ij},exit:lj,name:"list",tokenize:rj},tj={partial:!0,tokenize:aj},nj={partial:!0,tokenize:oj};function rj(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return s;function s(m){const w=r.containerState.type||(m===42||m===43||m===45?"listUnordered":"listOrdered");if(w==="listUnordered"?!r.containerState.marker||m===r.containerState.marker:Us(m)){if(r.containerState.type||(r.containerState.type=w,e.enter(w,{_container:!0})),w==="listUnordered")return e.enter("listItemPrefix"),m===42||m===45?e.check($o,n,u)(m):u(m);if(!r.interrupt||m===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(m)}return n(m)}function c(m){return Us(m)&&++a<10?(e.consume(m),c):(!r.interrupt||a<2)&&(r.containerState.marker?m===r.containerState.marker:m===41||m===46)?(e.exit("listItemValue"),u(m)):n(m)}function u(m){return e.enter("listItemMarker"),e.consume(m),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||m,e.check(Dl,r.interrupt?n:d,e.attempt(tj,f,p))}function d(m){return r.containerState.initialBlankLine=!0,o++,f(m)}function p(m){return me(m)?(e.enter("listItemPrefixWhitespace"),e.consume(m),e.exit("listItemPrefixWhitespace"),f):n(m)}function f(m){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(m)}}function ij(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Dl,i,o);function i(s){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,be(e,t,"listItemIndent",r.containerState.size+1)(s)}function o(s){return r.containerState.furtherBlankLines||!me(s)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(s)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(nj,t,a)(s))}function a(s){return r.containerState._closeFlow=!0,r.interrupt=void 0,be(e,e.attempt(et,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s)}}function oj(e,t,n){const r=this;return be(e,i,"listItemIndent",r.containerState.size+1);function i(o){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(o):n(o)}}function lj(e){e.exit(this.containerState.type)}function aj(e,t,n){const r=this;return be(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const a=r.events[r.events.length-1];return!me(o)&&a&&a[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const vp={name:"setextUnderline",resolveTo:sj,tokenize:cj};function sj(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",a,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=a,e.push(["exit",a,t]),e}function cj(e,t,n){const r=this;let i;return o;function o(u){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),i=u,a(u)):n(u)}function a(u){return e.enter("setextHeadingLineSequence"),s(u)}function s(u){return u===i?(e.consume(u),s):(e.exit("setextHeadingLineSequence"),me(u)?be(e,c,"lineSuffix")(u):c(u))}function c(u){return u===null||te(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const uj={tokenize:dj};function dj(e){const t=this,n=e.attempt(Dl,r,e.attempt(this.parser.constructs.flowInitial,i,be(e,e.attempt(this.parser.constructs.flow,i,e.attempt(gw,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const pj={resolveAll:Cg()},fj=_g("string"),mj=_g("text");function _g(e){return{resolveAll:Cg(e==="text"?hj:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,a,s);return a;function a(d){return u(d)?o(d):s(d)}function s(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),c}function c(d){return u(d)?(n.exit("data"),o(d)):(n.consume(d),c)}function u(d){if(d===null)return!0;const p=i[d];let f=-1;if(p)for(;++f<p.length;){const m=p[f];if(!m.previous||m.previous.call(r,r.previous))return!0}return!1}}}function Cg(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function hj(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,a=-1,s=0,c;for(;o--;){const u=i[o];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)s++,a--;if(a)break;a=-1}else if(u===-2)c=!0,s++;else if(u!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(s=0),s){const u={type:n===e.length||c||s<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?a:r.start._bufferIndex+a,_index:r.start._index+o,line:r.end.line,column:r.end.column-s,offset:r.end.offset-s},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const gj={42:et,43:et,45:et,48:et,49:et,50:et,51:et,52:et,53:et,54:et,55:et,56:et,57:et,62:yg},xj={91:kw},yj={[-2]:Sa,[-1]:Sa,32:Sa},vj={35:Nw,42:$o,45:[vp,$o],60:Pw,61:vp,95:$o,96:xp,126:xp},bj={38:bg,92:vg},kj={[-5]:_a,[-4]:_a,[-3]:_a,33:Qw,38:bg,42:Vs,60:[Yk,Dw],91:Yw,92:[_w,vg],93:su,95:Vs,96:uw},wj={null:[Vs,pj]},jj={null:[42,95]},Sj={null:[]},_j=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:jj,contentInitial:xj,disable:Sj,document:gj,flow:vj,flowInitial:yj,insideSpan:wj,string:bj,text:kj},Symbol.toStringTag,{value:"Module"}));function Cj(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},o=[];let a=[],s=[];const c={attempt:L(k),check:L(y),consume:x,enter:b,exit:P,interrupt:L(y,{interrupt:!0})},u={code:null,containerState:{},defineSkip:j,events:[],now:w,parser:e,previous:null,sliceSerialize:f,sliceStream:m,write:p};let d=t.tokenize.call(u,c);return t.resolveAll&&o.push(t),u;function p(v){return a=wt(a,v),z(),a[a.length-1]!==null?[]:(O(t,0),u.events=au(o,u.events,u),u.events)}function f(v,g){return Ej(m(v),g)}function m(v){return Nj(a,v)}function w(){const{_bufferIndex:v,_index:g,line:E,column:D,offset:R}=r;return{_bufferIndex:v,_index:g,line:E,column:D,offset:R}}function j(v){i[v.line]=v.column,_()}function z(){let v;for(;r._index<a.length;){const g=a[r._index];if(typeof g=="string")for(v=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===v&&r._bufferIndex<g.length;)h(g.charCodeAt(r._bufferIndex));else h(g)}}function h(v){d=d(v)}function x(v){te(v)?(r.line++,r.column=1,r.offset+=v===-3?2:1,_()):v!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=v}function b(v,g){const E=g||{};return E.type=v,E.start=w(),u.events.push(["enter",E,u]),s.push(E),E}function P(v){const g=s.pop();return g.end=w(),u.events.push(["exit",g,u]),g}function k(v,g){O(v,g.from)}function y(v,g){g.restore()}function L(v,g){return E;function E(D,R,A){let T,I,V,S;return Array.isArray(D)?G(D):"tokenize"in D?G([D]):W(D);function W(de){return U;function U(X){const oe=X!==null&&de[X],he=X!==null&&de.null,xe=[...Array.isArray(oe)?oe:oe?[oe]:[],...Array.isArray(he)?he:he?[he]:[]];return G(xe)(X)}}function G(de){return T=de,I=0,de.length===0?A:N(de[I])}function N(de){return U;function U(X){return S=$(),V=de,de.partial||(u.currentConstruct=de),de.name&&u.parser.constructs.disable.null.includes(de.name)?ie():de.tokenize.call(g?Object.assign(Object.create(u),g):u,c,ne,ie)(X)}}function ne(de){return v(V,S),R}function ie(de){return S.restore(),++I<T.length?N(T[I]):A}}}function O(v,g){v.resolveAll&&!o.includes(v)&&o.push(v),v.resolve&&Gt(u.events,g,u.events.length-g,v.resolve(u.events.slice(g),u)),v.resolveTo&&(u.events=v.resolveTo(u.events,u))}function $(){const v=w(),g=u.previous,E=u.currentConstruct,D=u.events.length,R=Array.from(s);return{from:D,restore:A};function A(){r=v,u.previous=g,u.currentConstruct=E,u.events.length=D,s=R,_()}}function _(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function Nj(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let a;if(n===i)a=[e[n].slice(r,o)];else{if(a=e.slice(n,i),r>-1){const s=a[0];typeof s=="string"?a[0]=s.slice(r):a.shift()}o>0&&a.push(e[i].slice(0,o))}return a}function Ej(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let a;if(typeof o=="string")a=o;else switch(o){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(o)}i=o===-2,r.push(a)}return r.join("")}function zj(e){const r={constructs:Mk([_j,...(e||{}).extensions||[]]),content:i(Wk),defined:[],document:i(qk),flow:i(uj),lazy:{},string:i(fj),text:i(mj)};return r;function i(o){return a;function a(s){return Cj(r,o,s)}}}function Tj(e){for(;!kg(e););return e}const bp=/[\0\t\n\r]/g;function Pj(){let e=1,t="",n=!0,r;return i;function i(o,a,s){const c=[];let u,d,p,f,m;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(a||void 0).decode(o)),p=0,t="",n&&(o.charCodeAt(0)===65279&&p++,n=void 0);p<o.length;){if(bp.lastIndex=p,u=bp.exec(o),f=u&&u.index!==void 0?u.index:o.length,m=o.charCodeAt(f),!u){t=o.slice(p);break}if(m===10&&p===f&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),p<f&&(c.push(o.slice(p,f)),e+=f-p),m){case 0:{c.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,c.push(-2);e++<d;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}p=f+1}return s&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const Lj=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Aj(e){return e.replace(Lj,Ij)}function Ij(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return xg(n.slice(o?2:1),o?16:10)}return lu(n)||e}const Ng={}.hasOwnProperty;function Rj(e,t,n){return typeof t!="string"&&(n=t,t=void 0),Mj(n)(Tj(zj(n).document().write(Pj()(e,t,!0))))}function Mj(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(Se),autolinkProtocol:$,autolinkEmail:$,atxHeading:o(Ve),blockQuote:o(he),characterEscape:$,characterReference:$,codeFenced:o(xe),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:o(xe,a),codeText:o(ce,a),codeTextData:$,data:$,codeFlowValue:$,definition:o(Ze),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:o(vt),hardBreakEscape:o($t),hardBreakTrailing:o($t),htmlFlow:o(F,a),htmlFlowData:$,htmlText:o(F,a),htmlTextData:$,image:o(ue),label:a,link:o(Se),listItem:o(nr),listItemValue:f,listOrdered:o(st,p),listUnordered:o(st),paragraph:o(B),reference:N,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:o(Ve),strong:o(Y),thematicBreak:o(le)},exit:{atxHeading:c(),atxHeadingSequence:k,autolink:c(),autolinkEmail:oe,autolinkProtocol:X,blockQuote:c(),characterEscapeValue:_,characterReferenceMarkerHexadecimal:ie,characterReferenceMarkerNumeric:ie,characterReferenceValue:de,characterReference:U,codeFenced:c(z),codeFencedFence:j,codeFencedFenceInfo:m,codeFencedFenceMeta:w,codeFlowValue:_,codeIndented:c(h),codeText:c(R),codeTextData:_,data:_,definition:c(),definitionDestinationString:P,definitionLabelString:x,definitionTitleString:b,emphasis:c(),hardBreakEscape:c(g),hardBreakTrailing:c(g),htmlFlow:c(E),htmlFlowData:_,htmlText:c(D),htmlTextData:_,image:c(T),label:V,labelText:I,lineEnding:v,link:c(A),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:ne,resourceDestinationString:S,resourceTitleString:W,resource:G,setextHeading:c(O),setextHeadingLineSequence:L,setextHeadingText:y,strong:c(),thematicBreak:c()}};Eg(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(M){let H={type:"root",children:[]};const Z={stack:[H],tokenStack:[],config:t,enter:s,exit:u,buffer:a,resume:d,data:n},ae=[];let fe=-1;for(;++fe<M.length;)if(M[fe][1].type==="listOrdered"||M[fe][1].type==="listUnordered")if(M[fe][0]==="enter")ae.push(fe);else{const Et=ae.pop();fe=i(M,Et,fe)}for(fe=-1;++fe<M.length;){const Et=t[M[fe][0]];Ng.call(Et,M[fe][1].type)&&Et[M[fe][1].type].call(Object.assign({sliceSerialize:M[fe][2].sliceSerialize},Z),M[fe][1])}if(Z.tokenStack.length>0){const Et=Z.tokenStack[Z.tokenStack.length-1];(Et[1]||kp).call(Z,void 0,Et[0])}for(H.position={start:cn(M.length>0?M[0][1].start:{line:1,column:1,offset:0}),end:cn(M.length>0?M[M.length-2][1].end:{line:1,column:1,offset:0})},fe=-1;++fe<t.transforms.length;)H=t.transforms[fe](H)||H;return H}function i(M,H,Z){let ae=H-1,fe=-1,Et=!1,Rn,Qt,qr,Kr;for(;++ae<=Z;){const ct=M[ae];switch(ct[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{ct[0]==="enter"?fe++:fe--,Kr=void 0;break}case"lineEndingBlank":{ct[0]==="enter"&&(Rn&&!Kr&&!fe&&!qr&&(qr=ae),Kr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Kr=void 0}if(!fe&&ct[0]==="enter"&&ct[1].type==="listItemPrefix"||fe===-1&&ct[0]==="exit"&&(ct[1].type==="listUnordered"||ct[1].type==="listOrdered")){if(Rn){let rr=ae;for(Qt=void 0;rr--;){const Jt=M[rr];if(Jt[1].type==="lineEnding"||Jt[1].type==="lineEndingBlank"){if(Jt[0]==="exit")continue;Qt&&(M[Qt][1].type="lineEndingBlank",Et=!0),Jt[1].type="lineEnding",Qt=rr}else if(!(Jt[1].type==="linePrefix"||Jt[1].type==="blockQuotePrefix"||Jt[1].type==="blockQuotePrefixWhitespace"||Jt[1].type==="blockQuoteMarker"||Jt[1].type==="listItemIndent"))break}qr&&(!Qt||qr<Qt)&&(Rn._spread=!0),Rn.end=Object.assign({},Qt?M[Qt][1].start:ct[1].end),M.splice(Qt||ae,0,["exit",Rn,ct[2]]),ae++,Z++}if(ct[1].type==="listItemPrefix"){const rr={type:"listItem",_spread:!1,start:Object.assign({},ct[1].start),end:void 0};Rn=rr,M.splice(ae,0,["enter",rr,ct[2]]),ae++,Z++,qr=void 0,Kr=!0}}}return M[H][1]._spread=Et,Z}function o(M,H){return Z;function Z(ae){s.call(this,M(ae),ae),H&&H.call(this,ae)}}function a(){this.stack.push({type:"fragment",children:[]})}function s(M,H,Z){this.stack[this.stack.length-1].children.push(M),this.stack.push(M),this.tokenStack.push([H,Z||void 0]),M.position={start:cn(H.start),end:void 0}}function c(M){return H;function H(Z){M&&M.call(this,Z),u.call(this,Z)}}function u(M,H){const Z=this.stack.pop(),ae=this.tokenStack.pop();if(ae)ae[0].type!==M.type&&(H?H.call(this,M,ae[0]):(ae[1]||kp).call(this,M,ae[0]));else throw new Error("Cannot close `"+M.type+"` ("+ki({start:M.start,end:M.end})+"): it’s not open");Z.position.end=cn(M.end)}function d(){return Ik(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function f(M){if(this.data.expectingFirstListItemValue){const H=this.stack[this.stack.length-2];H.start=Number.parseInt(this.sliceSerialize(M),10),this.data.expectingFirstListItemValue=void 0}}function m(){const M=this.resume(),H=this.stack[this.stack.length-1];H.lang=M}function w(){const M=this.resume(),H=this.stack[this.stack.length-1];H.meta=M}function j(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function z(){const M=this.resume(),H=this.stack[this.stack.length-1];H.value=M.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function h(){const M=this.resume(),H=this.stack[this.stack.length-1];H.value=M.replace(/(\r?\n|\r)$/g,"")}function x(M){const H=this.resume(),Z=this.stack[this.stack.length-1];Z.label=H,Z.identifier=zr(this.sliceSerialize(M)).toLowerCase()}function b(){const M=this.resume(),H=this.stack[this.stack.length-1];H.title=M}function P(){const M=this.resume(),H=this.stack[this.stack.length-1];H.url=M}function k(M){const H=this.stack[this.stack.length-1];if(!H.depth){const Z=this.sliceSerialize(M).length;H.depth=Z}}function y(){this.data.setextHeadingSlurpLineEnding=!0}function L(M){const H=this.stack[this.stack.length-1];H.depth=this.sliceSerialize(M).codePointAt(0)===61?1:2}function O(){this.data.setextHeadingSlurpLineEnding=void 0}function $(M){const Z=this.stack[this.stack.length-1].children;let ae=Z[Z.length-1];(!ae||ae.type!=="text")&&(ae=ee(),ae.position={start:cn(M.start),end:void 0},Z.push(ae)),this.stack.push(ae)}function _(M){const H=this.stack.pop();H.value+=this.sliceSerialize(M),H.position.end=cn(M.end)}function v(M){const H=this.stack[this.stack.length-1];if(this.data.atHardBreak){const Z=H.children[H.children.length-1];Z.position.end=cn(M.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(H.type)&&($.call(this,M),_.call(this,M))}function g(){this.data.atHardBreak=!0}function E(){const M=this.resume(),H=this.stack[this.stack.length-1];H.value=M}function D(){const M=this.resume(),H=this.stack[this.stack.length-1];H.value=M}function R(){const M=this.resume(),H=this.stack[this.stack.length-1];H.value=M}function A(){const M=this.stack[this.stack.length-1];if(this.data.inReference){const H=this.data.referenceType||"shortcut";M.type+="Reference",M.referenceType=H,delete M.url,delete M.title}else delete M.identifier,delete M.label;this.data.referenceType=void 0}function T(){const M=this.stack[this.stack.length-1];if(this.data.inReference){const H=this.data.referenceType||"shortcut";M.type+="Reference",M.referenceType=H,delete M.url,delete M.title}else delete M.identifier,delete M.label;this.data.referenceType=void 0}function I(M){const H=this.sliceSerialize(M),Z=this.stack[this.stack.length-2];Z.label=Aj(H),Z.identifier=zr(H).toLowerCase()}function V(){const M=this.stack[this.stack.length-1],H=this.resume(),Z=this.stack[this.stack.length-1];if(this.data.inReference=!0,Z.type==="link"){const ae=M.children;Z.children=ae}else Z.alt=H}function S(){const M=this.resume(),H=this.stack[this.stack.length-1];H.url=M}function W(){const M=this.resume(),H=this.stack[this.stack.length-1];H.title=M}function G(){this.data.inReference=void 0}function N(){this.data.referenceType="collapsed"}function ne(M){const H=this.resume(),Z=this.stack[this.stack.length-1];Z.label=H,Z.identifier=zr(this.sliceSerialize(M)).toLowerCase(),this.data.referenceType="full"}function ie(M){this.data.characterReferenceType=M.type}function de(M){const H=this.sliceSerialize(M),Z=this.data.characterReferenceType;let ae;Z?(ae=xg(H,Z==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):ae=lu(H);const fe=this.stack[this.stack.length-1];fe.value+=ae}function U(M){const H=this.stack.pop();H.position.end=cn(M.end)}function X(M){_.call(this,M);const H=this.stack[this.stack.length-1];H.url=this.sliceSerialize(M)}function oe(M){_.call(this,M);const H=this.stack[this.stack.length-1];H.url="mailto:"+this.sliceSerialize(M)}function he(){return{type:"blockquote",children:[]}}function xe(){return{type:"code",lang:null,meta:null,value:""}}function ce(){return{type:"inlineCode",value:""}}function Ze(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function vt(){return{type:"emphasis",children:[]}}function Ve(){return{type:"heading",depth:0,children:[]}}function $t(){return{type:"break"}}function F(){return{type:"html",value:""}}function ue(){return{type:"image",title:null,url:"",alt:null}}function Se(){return{type:"link",title:null,url:"",children:[]}}function st(M){return{type:"list",ordered:M.type==="listOrdered",start:null,spread:M._spread,children:[]}}function nr(M){return{type:"listItem",spread:M._spread,checked:null,children:[]}}function B(){return{type:"paragraph",children:[]}}function Y(){return{type:"strong",children:[]}}function ee(){return{type:"text",value:""}}function le(){return{type:"thematicBreak"}}}function cn(e){return{line:e.line,column:e.column,offset:e.offset}}function Eg(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?Eg(e,r):Oj(e,r)}}function Oj(e,t){let n;for(n in t)if(Ng.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function kp(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+ki({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+ki({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+ki({start:t.start,end:t.end})+") is still open")}function Dj(e){const t=this;t.parser=n;function n(r){return Rj(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function $j(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function Fj(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function Bj(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function Uj(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Vj(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Wj(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Hr(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let a,s=e.footnoteCounts.get(r);s===void 0?(s=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=o+1,s+=1,e.footnoteCounts.set(r,s);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(s>1?"-"+s:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,c);const u={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,u),e.applyData(t,u)}function Hj(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function qj(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function zg(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function Kj(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return zg(e,t);const i={src:Hr(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function Gj(e,t){const n={src:Hr(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function Qj(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Jj(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return zg(e,t);const i={href:Hr(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function Yj(e,t){const n={href:Hr(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Xj(e,t,n){const r=e.all(t),i=n?Zj(n):Tg(t),o={},a=[];if(typeof t.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let s=-1;for(;++s<r.length;){const d=r[s];(i||s!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?a.push(...d.children):a.push(d)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:a};return e.patch(t,u),e.applyData(t,u)}function Zj(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Tg(n[r])}return t}function Tg(e){const t=e.spread;return t??e.children.length>1}function e2(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function t2(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function n2(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function r2(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function i2(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),i.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},s=nu(t.children[1]),c=ug(t.children[t.children.length-1]);s&&c&&(a.position={start:s,end:c}),i.push(a)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function o2(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,s=a?a.length:t.children.length;let c=-1;const u=[];for(;++c<s;){const p=t.children[c],f={},m=a?a[c]:void 0;m&&(f.align=m);let w={type:"element",tagName:o,properties:f,children:[]};p&&(w.children=e.all(p),e.patch(p,w),w=e.applyData(p,w)),u.push(w)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function l2(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const wp=9,jp=32;function a2(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(Sp(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(Sp(t.slice(i),i>0,!1)),o.join("")}function Sp(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===wp||o===jp;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===wp||o===jp;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function s2(e,t){const n={type:"text",value:a2(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function c2(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const u2={blockquote:$j,break:Fj,code:Bj,delete:Uj,emphasis:Vj,footnoteReference:Wj,heading:Hj,html:qj,imageReference:Kj,image:Gj,inlineCode:Qj,linkReference:Jj,link:Yj,listItem:Xj,list:e2,paragraph:t2,root:n2,strong:r2,table:i2,tableCell:l2,tableRow:o2,text:s2,thematicBreak:c2,toml:jo,yaml:jo,definition:jo,footnoteDefinition:jo};function jo(){}const Pg=-1,$l=0,ji=1,ml=2,cu=3,uu=4,du=5,pu=6,Lg=7,Ag=8,_p=typeof self=="object"?self:globalThis,d2=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,a]=t[i];switch(o){case $l:case Pg:return n(a,i);case ji:{const s=n([],i);for(const c of a)s.push(r(c));return s}case ml:{const s=n({},i);for(const[c,u]of a)s[r(c)]=r(u);return s}case cu:return n(new Date(a),i);case uu:{const{source:s,flags:c}=a;return n(new RegExp(s,c),i)}case du:{const s=n(new Map,i);for(const[c,u]of a)s.set(r(c),r(u));return s}case pu:{const s=n(new Set,i);for(const c of a)s.add(r(c));return s}case Lg:{const{name:s,message:c}=a;return n(new _p[s](c),i)}case Ag:return n(BigInt(a),i);case"BigInt":return n(Object(BigInt(a)),i);case"ArrayBuffer":return n(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:s}=new Uint8Array(a);return n(new DataView(s),a)}}return n(new _p[o](a),i)};return r},Cp=e=>d2(new Map,e)(0),lr="",{toString:p2}={},{keys:f2}=Object,ri=e=>{const t=typeof e;if(t!=="object"||!e)return[$l,t];const n=p2.call(e).slice(8,-1);switch(n){case"Array":return[ji,lr];case"Object":return[ml,lr];case"Date":return[cu,lr];case"RegExp":return[uu,lr];case"Map":return[du,lr];case"Set":return[pu,lr];case"DataView":return[ji,n]}return n.includes("Array")?[ji,n]:n.includes("Error")?[Lg,n]:[ml,n]},So=([e,t])=>e===$l&&(t==="function"||t==="symbol"),m2=(e,t,n,r)=>{const i=(a,s)=>{const c=r.push(a)-1;return n.set(s,c),c},o=a=>{if(n.has(a))return n.get(a);let[s,c]=ri(a);switch(s){case $l:{let d=a;switch(c){case"bigint":s=Ag,d=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);d=null;break;case"undefined":return i([Pg],a)}return i([s,d],a)}case ji:{if(c){let f=a;return c==="DataView"?f=new Uint8Array(a.buffer):c==="ArrayBuffer"&&(f=new Uint8Array(a)),i([c,[...f]],a)}const d=[],p=i([s,d],a);for(const f of a)d.push(o(f));return p}case ml:{if(c)switch(c){case"BigInt":return i([c,a.toString()],a);case"Boolean":case"Number":case"String":return i([c,a.valueOf()],a)}if(t&&"toJSON"in a)return o(a.toJSON());const d=[],p=i([s,d],a);for(const f of f2(a))(e||!So(ri(a[f])))&&d.push([o(f),o(a[f])]);return p}case cu:return i([s,a.toISOString()],a);case uu:{const{source:d,flags:p}=a;return i([s,{source:d,flags:p}],a)}case du:{const d=[],p=i([s,d],a);for(const[f,m]of a)(e||!(So(ri(f))||So(ri(m))))&&d.push([o(f),o(m)]);return p}case pu:{const d=[],p=i([s,d],a);for(const f of a)(e||!So(ri(f)))&&d.push(o(f));return p}}const{message:u}=a;return i([s,{name:c,message:u}],a)};return o},Np=(e,{json:t,lossy:n}={})=>{const r=[];return m2(!(t||n),!!t,new Map,r)(e),r},hl=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Cp(Np(e,t)):structuredClone(e):(e,t)=>Cp(Np(e,t));function h2(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function g2(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function x2(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||h2,r=e.options.footnoteBackLabel||g2,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},s=[];let c=-1;for(;++c<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[c]);if(!u)continue;const d=e.all(u),p=String(u.identifier).toUpperCase(),f=Hr(p.toLowerCase());let m=0;const w=[],j=e.footnoteCounts.get(p);for(;j!==void 0&&++m<=j;){w.length>0&&w.push({type:"text",value:" "});let x=typeof n=="string"?n:n(c,m);typeof x=="string"&&(x={type:"text",value:x}),w.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(m>1?"-"+m:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,m),className:["data-footnote-backref"]},children:Array.isArray(x)?x:[x]})}const z=d[d.length-1];if(z&&z.type==="element"&&z.tagName==="p"){const x=z.children[z.children.length-1];x&&x.type==="text"?x.value+=" ":z.children.push({type:"text",value:" "}),z.children.push(...w)}else d.push(...w);const h={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(u,h),s.push(h)}if(s.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...hl(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(s,!0)},{type:"text",value:`
`}]}}const Ig=function(e){if(e==null)return k2;if(typeof e=="function")return Fl(e);if(typeof e=="object")return Array.isArray(e)?y2(e):v2(e);if(typeof e=="string")return b2(e);throw new Error("Expected function, string, or object as test")};function y2(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Ig(e[n]);return Fl(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function v2(e){const t=e;return Fl(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function b2(e){return Fl(t);function t(n){return n&&n.type===e}}function Fl(e){return t;function t(n,r,i){return!!(w2(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function k2(){return!0}function w2(e){return e!==null&&typeof e=="object"&&"type"in e}const Rg=[],j2=!0,Ep=!1,S2="skip";function _2(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=Ig(i),a=r?-1:1;s(e,void 0,[])();function s(c,u,d){const p=c&&typeof c=="object"?c:{};if(typeof p.type=="string"){const m=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(c.type+(m?"<"+m+">":""))+")"})}return f;function f(){let m=Rg,w,j,z;if((!t||o(c,u,d[d.length-1]||void 0))&&(m=C2(n(c,d)),m[0]===Ep))return m;if("children"in c&&c.children){const h=c;if(h.children&&m[0]!==S2)for(j=(r?h.children.length:-1)+a,z=d.concat(h);j>-1&&j<h.children.length;){const x=h.children[j];if(w=s(x,j,z)(),w[0]===Ep)return w;j=typeof w[1]=="number"?w[1]:j+a}}return m}}}function C2(e){return Array.isArray(e)?e:typeof e=="number"?[j2,e]:e==null?Rg:[e]}function Mg(e,t,n,r){let i,o,a;typeof t=="function"&&typeof n!="function"?(o=void 0,a=t,i=n):(o=t,a=n,i=r),_2(e,o,s,i);function s(c,u){const d=u[u.length-1],p=d?d.children.indexOf(c):void 0;return a(c,p,d)}}const Ws={}.hasOwnProperty,N2={};function E2(e,t){const n=t||N2,r=new Map,i=new Map,o=new Map,a={...u2,...n.handlers},s={all:u,applyData:T2,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:a,one:c,options:n,patch:z2,wrap:L2};return Mg(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:i,f=String(d.identifier).toUpperCase();p.has(f)||p.set(f,d)}}),s;function c(d,p){const f=d.type,m=s.handlers[f];if(Ws.call(s.handlers,f)&&m)return m(s,d,p);if(s.options.passThrough&&s.options.passThrough.includes(f)){if("children"in d){const{children:j,...z}=d,h=hl(z);return h.children=s.all(d),h}return hl(d)}return(s.options.unknownHandler||P2)(s,d,p)}function u(d){const p=[];if("children"in d){const f=d.children;let m=-1;for(;++m<f.length;){const w=s.one(f[m],d);if(w){if(m&&f[m-1].type==="break"&&(!Array.isArray(w)&&w.type==="text"&&(w.value=zp(w.value)),!Array.isArray(w)&&w.type==="element")){const j=w.children[0];j&&j.type==="text"&&(j.value=zp(j.value))}Array.isArray(w)?p.push(...w):p.push(w)}}}return p}}function z2(e,t){e.position&&(t.position=pk(e))}function T2(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&o&&Object.assign(n.properties,hl(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function P2(e,t){const n=t.data||{},r="value"in t&&!(Ws.call(n,"hProperties")||Ws.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function L2(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function zp(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Tp(e,t){const n=E2(e,t),r=n.one(e,void 0),i=x2(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function A2(e,t){return e&&"run"in e?async function(n,r){const i=Tp(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Tp(n,{file:r,...e||t})}}function Pp(e){if(e)throw e}var Fo=Object.prototype.hasOwnProperty,Og=Object.prototype.toString,Lp=Object.defineProperty,Ap=Object.getOwnPropertyDescriptor,Ip=function(t){return typeof Array.isArray=="function"?Array.isArray(t):Og.call(t)==="[object Array]"},Rp=function(t){if(!t||Og.call(t)!=="[object Object]")return!1;var n=Fo.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Fo.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||Fo.call(t,i)},Mp=function(t,n){Lp&&n.name==="__proto__"?Lp(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Op=function(t,n){if(n==="__proto__")if(Fo.call(t,n)){if(Ap)return Ap(t,n).value}else return;return t[n]},I2=function e(){var t,n,r,i,o,a,s=arguments[0],c=1,u=arguments.length,d=!1;for(typeof s=="boolean"&&(d=s,s=arguments[1]||{},c=2),(s==null||typeof s!="object"&&typeof s!="function")&&(s={});c<u;++c)if(t=arguments[c],t!=null)for(n in t)r=Op(s,n),i=Op(t,n),s!==i&&(d&&i&&(Rp(i)||(o=Ip(i)))?(o?(o=!1,a=r&&Ip(r)?r:[]):a=r&&Rp(r)?r:{},Mp(s,{name:n,newValue:e(d,a,i)})):typeof i<"u"&&Mp(s,{name:n,newValue:i}));return s};const Ca=xl(I2);function Hs(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function R2(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);s(null,...i);function s(c,...u){const d=e[++o];let p=-1;if(c){a(c);return}for(;++p<i.length;)(u[p]===null||u[p]===void 0)&&(u[p]=i[p]);i=u,d?M2(d,s)(...u):a(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function M2(e,t){let n;return r;function r(...a){const s=e.length>a.length;let c;s&&a.push(i);try{c=e.apply(this,a)}catch(u){const d=u;if(s&&n)throw d;return i(d)}s||(c&&c.then&&typeof c.then=="function"?c.then(o,i):c instanceof Error?i(c):o(c))}function i(a,...s){n||(n=!0,t(a,...s))}function o(a){i(null,a)}}const Ut={basename:O2,dirname:D2,extname:$2,join:F2,sep:"/"};function O2(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');no(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let a=-1,s=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else a<0&&(o=!0,a=i+1),s>-1&&(e.codePointAt(i)===t.codePointAt(s--)?s<0&&(r=i):(s=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function D2(e){if(no(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function $2(e){no(e);let t=e.length,n=-1,r=0,i=-1,o=0,a;for(;t--;){const s=e.codePointAt(t);if(s===47){if(a){r=t+1;break}continue}n<0&&(a=!0,n=t+1),s===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function F2(...e){let t=-1,n;for(;++t<e.length;)no(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":B2(n)}function B2(e){no(e);const t=e.codePointAt(0)===47;let n=U2(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function U2(e,t){let n="",r=0,i=-1,o=0,a=-1,s,c;for(;++a<=e.length;){if(a<e.length)s=e.codePointAt(a);else{if(s===47)break;s=47}if(s===47){if(!(i===a-1||o===1))if(i!==a-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),i=a,o=0;continue}}else if(n.length>0){n="",r=0,i=a,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,o=0}else s===46&&o>-1?o++:o=-1}return n}function no(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const V2={cwd:W2};function W2(){return"/"}function qs(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function H2(e){if(typeof e=="string")e=new URL(e);else if(!qs(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return q2(e)}function q2(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const Na=["history","path","basename","stem","extname","dirname"];class Dg{constructor(t){let n;t?qs(t)?n={path:t}:typeof t=="string"||K2(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":V2.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Na.length;){const o=Na[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)Na.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?Ut.basename(this.path):void 0}set basename(t){za(t,"basename"),Ea(t,"basename"),this.path=Ut.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?Ut.dirname(this.path):void 0}set dirname(t){Dp(this.basename,"dirname"),this.path=Ut.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?Ut.extname(this.path):void 0}set extname(t){if(Ea(t,"extname"),Dp(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Ut.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){qs(t)&&(t=H2(t)),za(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?Ut.basename(this.path,this.extname):void 0}set stem(t){za(t,"stem"),Ea(t,"stem"),this.path=Ut.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new Ge(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Ea(e,t){if(e&&e.includes(Ut.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Ut.sep+"`")}function za(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Dp(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function K2(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const G2=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},Q2={}.hasOwnProperty;class fu extends G2{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=R2()}copy(){const t=new fu;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Ca(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(La("data",this.frozen),this.namespace[t]=n,this):Q2.call(this.namespace,t)&&this.namespace[t]||void 0:t?(La("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=_o(t),r=this.parser||this.Parser;return Ta("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Ta("process",this.parser||this.Parser),Pa("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,a){const s=_o(t),c=r.parse(s);r.run(c,s,function(d,p,f){if(d||!p||!f)return u(d);const m=p,w=r.stringify(m,f);X2(w)?f.value=w:f.result=w,u(d,f)});function u(d,p){d||!p?a(d):o?o(p):n(void 0,p)}}}processSync(t){let n=!1,r;return this.freeze(),Ta("processSync",this.parser||this.Parser),Pa("processSync",this.compiler||this.Compiler),this.process(t,i),Fp("processSync","process",n),r;function i(o,a){n=!0,Pp(o),r=a}}run(t,n,r){$p(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(a,s){const c=_o(n);i.run(t,c,u);function u(d,p,f){const m=p||t;d?s(d):a?a(m):r(void 0,m,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),Fp("runSync","run",r),i;function o(a,s){Pp(a),i=s,r=!0}}stringify(t,n){this.freeze();const r=_o(n),i=this.compiler||this.Compiler;return Pa("stringify",i),$p(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(La("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?s(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(u){if(typeof u=="function")c(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...p]=u;c(d,p)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");s(u.plugins),u.settings&&(i.settings=Ca(!0,i.settings,u.settings))}function s(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const p=u[d];o(p)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function c(u,d){let p=-1,f=-1;for(;++p<r.length;)if(r[p][0]===u){f=p;break}if(f===-1)r.push([u,...d]);else if(d.length>0){let[m,...w]=d;const j=r[f][1];Hs(j)&&Hs(m)&&(m=Ca(!0,j,m)),r[f]=[u,m,...w]}}}}const J2=new fu().freeze();function Ta(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Pa(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function La(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function $p(e){if(!Hs(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Fp(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function _o(e){return Y2(e)?e:new Dg(e)}function Y2(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function X2(e){return typeof e=="string"||Z2(e)}function Z2(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const eS="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Bp=[],Up={allowDangerousHtml:!0},tS=/^(https?|ircs?|mailto|xmpp)$/i,nS=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function $g(e){const t=rS(e),n=iS(e);return oS(t.runSync(t.parse(n),n),e)}function rS(e){const t=e.rehypePlugins||Bp,n=e.remarkPlugins||Bp,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Up}:Up;return J2().use(Dj).use(n).use(A2,r).use(t)}function iS(e){const t=e.children||"",n=new Dg;return typeof t=="string"&&(n.value=t),n}function oS(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,a=t.skipHtml,s=t.unwrapDisallowed,c=t.urlTransform||lS;for(const d of nS)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+eS+d.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),Mg(e,u),xk(e,{Fragment:l.Fragment,components:i,ignoreInvalidStyle:!0,jsx:l.jsx,jsxs:l.jsxs,passKeys:!0,passNode:!0});function u(d,p,f){if(d.type==="raw"&&f&&typeof p=="number")return a?f.children.splice(p,1):f.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let m;for(m in ja)if(Object.hasOwn(ja,m)&&Object.hasOwn(d.properties,m)){const w=d.properties[m],j=ja[m];(j===null||j.includes(d.tagName))&&(d.properties[m]=c(String(w||""),m,d))}}if(d.type==="element"){let m=n?!n.includes(d.tagName):o?o.includes(d.tagName):!1;if(!m&&r&&typeof p=="number"&&(m=!r(d,p,f)),m&&f&&typeof p=="number")return s&&d.children?f.children.splice(p,1,...d.children):f.children.splice(p,1),p}}}function lS(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||tS.test(e.slice(0,t))?e:""}function aS({value:e,onChange:t,placeholder:n="Write your content here...",minHeight:r=200}){const[i,o]=C.useState(!1),[a,s]=C.useState(r),c=C.useRef(null),u=C.useRef(null);C.useEffect(()=>{if(e){const f=e.split(`
`).length,m=Math.max(r,Math.min(f*20+40,500));s(m)}},[e,r]),C.useEffect(()=>{i&&u.current&&u.current.focus()},[i]);function d(f){u.current=f,f.focus()}function p(f){c.current&&!c.current.contains(f.target)&&o(!1)}return C.useEffect(()=>{if(i)return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[i]),l.jsxs("div",{ref:c,className:"markdown-editor",children:[l.jsx("style",{children:`
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
      `}),i?l.jsx("div",{className:"monaco-wrapper",children:l.jsx($r,{height:"100%",language:"markdown",theme:"vs-dark",value:e,onChange:f=>t(f||""),onMount:d,options:{minimap:{enabled:!1},fontSize:14,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"off",scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",padding:{top:12,bottom:12},lineDecorationsWidth:8,folding:!1,glyphMargin:!1,renderLineHighlight:"none",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,scrollbar:{vertical:"auto",horizontal:"hidden"}}})}):l.jsxs("div",{className:"markdown-preview",onClick:()=>o(!0),children:[l.jsxs("span",{className:"edit-hint",children:[l.jsx(X1,{size:12}),"Click to edit"]}),e?l.jsx("div",{className:"markdown-content",children:l.jsx($g,{children:e})}):l.jsx("div",{className:"markdown-placeholder",children:n})]})]})}function sS(e){return/^[a-zA-Z0-9_]+$/.test(e)}function cS({agent:e}){const{project:t,updateAgent:n,mcpServers:r,builtinTools:i,setActiveTab:o,setRunAgentId:a}=Nt(),[s,c]=C.useState(new Set(["basic","model","tools","subagents"])),[u,d]=C.useState(!1),[p,f]=C.useState(!1),[m,w]=C.useState(!1),[j,z]=C.useState(""),[h,x]=C.useState(null);if(!t)return null;function b(T){n(e.id,T)}function P(T){if(T===""){x(null),b({name:T});return}sS(T)?x(null):x("Name can only contain letters, numbers, and underscores"),b({name:T})}function k(T){const I=new Set(s);I.has(T)?I.delete(T):I.add(T),c(I)}const y=e.type==="LlmAgent",L=e;function O(T){y&&b({tools:[...L.tools,T]})}function $(T){y&&b({tools:L.tools.filter((I,V)=>V!==T)})}function _(T,I){if(!y)return;const V=[...L.tools];V[T]=I,b({tools:V})}function v(T){"sub_agents"in e&&b({sub_agents:[...e.sub_agents,T]})}function g(T){"sub_agents"in e&&b({sub_agents:e.sub_agents.filter(I=>I!==T)})}const E=t.agents.filter(T=>T.id!==e.id);async function D(){if(!(!t||!y)){d(!0);try{const T=L.instruction||"",I=T?`Current instruction to improve:

${T}

Please improve and expand this instruction while preserving its core intent.`:void 0,S=t.agents.some(G=>G.id===e.id)?void 0:e,W=await Do(t.id,e.id,I,S);W.success&&W.prompt?b({instruction:W.prompt}):alert("Failed to generate prompt: "+(W.error||"Unknown error"))}catch(T){alert("Error generating prompt: "+T.message)}finally{d(!1)}}}async function R(){if(!(!t||!y||!j.trim())){d(!0);try{const I=`Current instruction:

${L.instruction||""}

---

Requested changes:
${j}

Please apply the requested changes to the instruction above. Output only the updated instruction, nothing else.`,S=t.agents.some(G=>G.id===e.id)?void 0:e,W=await Do(t.id,e.id,I,S);W.success&&W.prompt?(b({instruction:W.prompt}),w(!1),z("")):alert("Failed to apply changes: "+(W.error||"Unknown error"))}catch(T){alert("Error applying changes: "+T.message)}finally{d(!1)}}}async function A(){if(!t||!y)return;const T=L.instruction;if(!T){alert("Please write an instruction first");return}f(!0);try{const I=`Write a 5-10 word description of what this agent does.

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

Your response (5-10 words only):`,V=await Do(t.id,e.id,I);if(V.success&&V.prompt){let S=V.prompt.trim();S=S.replace(/^["']|["']$/g,"").trim();const W=S.split(/[.!?\n]/)[0].trim(),G=W.length>80?W.slice(0,77)+"...":W;b({description:G})}else alert("Failed to generate description: "+(V.error||"Unknown error"))}catch(I){alert("Error generating description: "+I.message)}finally{f(!1)}}return l.jsxs("div",{className:"agent-editor",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("div",{className:"editor-header",children:[l.jsx(qn,{size:24,style:{color:"var(--accent-primary)"}}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx("input",{type:"text",value:e.name,onChange:T=>P(T.target.value),placeholder:"Agent name",style:{borderColor:h?"var(--error)":void 0}}),h&&l.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:h})]}),l.jsx("span",{className:"badge badge-info",children:e.type}),l.jsxs("button",{className:"btn btn-primary btn-sm run-agent-btn",onClick:()=>{a(e.id),o("run")},title:"Test this agent",children:[l.jsx(Un,{size:14}),"Run"]})]}),l.jsxs("div",{className:"editor-content",children:[l.jsxs(ii,{id:"basic",title:"Basic Info",icon:l.jsx(qn,{size:16}),expanded:s.has("basic"),onToggle:()=>k("basic"),children:[l.jsx("div",{className:"form-row",children:l.jsxs("div",{className:"form-group full-width",children:[l.jsxs("div",{className:"label-with-action",children:[l.jsx("label",{children:"Description"}),y&&L.instruction&&l.jsx("button",{className:"btn btn-secondary btn-sm generate-btn",onClick:A,disabled:p,title:"Generate description from instruction",children:p?l.jsxs(l.Fragment,{children:[l.jsx(Dr,{size:14,className:"spin"}),"Summarizing..."]}):"Summarize"})]}),l.jsx("input",{type:"text",value:e.description,onChange:T=>b({description:T.target.value}),placeholder:"e.g., Reviews code for bugs and suggests fixes"})]})}),y&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"form-row",children:l.jsxs("div",{className:"form-group full-width",children:[l.jsxs("div",{className:"label-with-action",children:[l.jsx("label",{children:"Instruction"}),l.jsxs("div",{className:"action-buttons",children:[l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>w(!m),disabled:u||!L.instruction,title:"Request specific changes to the instruction",children:"Request Changes"}),l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:D,disabled:u,title:"Uses AI to improve and expand the current instruction",children:u?l.jsxs(l.Fragment,{children:[l.jsx(Dr,{size:14,className:"spin"}),"Working..."]}):"Auto-Improve"})]})]}),m&&l.jsxs("div",{className:"request-changes-box",children:[l.jsx("input",{type:"text",value:j,onChange:T=>z(T.target.value),placeholder:"Describe what changes you want...",onKeyDown:T=>{T.key==="Enter"&&j.trim()?R():T.key==="Escape"&&(w(!1),z(""))},autoFocus:!0}),l.jsx("button",{className:"btn btn-primary btn-sm",onClick:R,disabled:u||!j.trim(),children:"Apply"})]}),l.jsx(aS,{value:L.instruction,onChange:T=>b({instruction:T}),placeholder:"Write your agent's instruction here... (Markdown supported)",minHeight:200})]})}),l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Output Key"}),l.jsxs("select",{value:L.output_key||"",onChange:T=>b({output_key:T.target.value||void 0}),children:[l.jsx("option",{value:"",children:"None"}),t.app.state_keys.map(T=>l.jsx("option",{value:T.name,children:T.name},T.name))]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Include Contents"}),l.jsxs("select",{value:L.include_contents,onChange:T=>b({include_contents:T.target.value}),children:[l.jsx("option",{value:"default",children:"Default"}),l.jsx("option",{value:"none",children:"None"})]})]})]}),l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"checkbox-group",children:[l.jsx("input",{type:"checkbox",id:"disallow-parent",checked:L.disallow_transfer_to_parent,onChange:T=>b({disallow_transfer_to_parent:T.target.checked})}),l.jsx("label",{htmlFor:"disallow-parent",children:"Disallow transfer to parent"})]}),l.jsxs("div",{className:"checkbox-group",children:[l.jsx("input",{type:"checkbox",id:"disallow-peers",checked:L.disallow_transfer_to_peers,onChange:T=>b({disallow_transfer_to_peers:T.target.checked})}),l.jsx("label",{htmlFor:"disallow-peers",children:"Disallow transfer to peers"})]})]})]}),e.type==="LoopAgent"&&l.jsx("div",{className:"form-row",children:l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Max Iterations"}),l.jsx("input",{type:"number",value:e.max_iterations||"",onChange:T=>b({max_iterations:parseInt(T.target.value)||void 0}),placeholder:"No limit"})]})})]}),y&&l.jsx(ii,{id:"model",title:"Model",icon:l.jsx(Qc,{size:16}),expanded:s.has("model"),onToggle:()=>k("model"),children:l.jsx(dS,{agent:L,appModels:t.app.models||[],defaultModelId:t.app.default_model_id,onUpdate:T=>b({model:T})})}),y&&l.jsx(ii,{id:"tools",title:`Tools (${L.tools.length})`,icon:l.jsx(Kt,{size:16}),expanded:s.has("tools"),onToggle:()=>k("tools"),children:l.jsx(uS,{tools:L.tools,onAdd:O,onRemove:$,onUpdate:_,builtinTools:i,mcpServers:r,projectMcpServers:t.mcp_servers,customTools:t.custom_tools,agents:E})}),y&&l.jsx(ii,{id:"callbacks",title:"Callbacks",icon:l.jsx(zn,{size:16}),expanded:s.has("callbacks"),onToggle:()=>k("callbacks"),children:l.jsx(pS,{agent:L,onUpdate:b,customCallbacks:t.custom_callbacks||[]})}),"sub_agents"in e&&l.jsx(ii,{id:"subagents",title:`Sub-Agents (${e.sub_agents.length})`,icon:l.jsx(i0,{size:16}),expanded:s.has("subagents"),onToggle:()=>k("subagents"),children:l.jsxs("div",{className:"sub-agent-list",children:[e.sub_agents.map(T=>{const I=t.agents.find(V=>V.id===T);return I?l.jsxs("div",{className:"sub-agent-chip",children:[I.name,l.jsx("button",{onClick:()=>g(T),children:l.jsx(Oe,{size:12})})]},T):null}),l.jsxs("select",{value:"",onChange:T=>{T.target.value&&v(T.target.value)},style:{width:150,padding:"6px 10px",fontSize:13},children:[l.jsx("option",{value:"",children:"Add agent..."}),E.filter(T=>!e.sub_agents.includes(T.id)).map(T=>l.jsx("option",{value:T.id,children:T.name},T.id))]})]})})]})]})}function ii({id:e,title:t,icon:n,expanded:r,onToggle:i,children:o}){return l.jsxs("div",{className:"section",children:[l.jsxs("div",{className:"section-header",onClick:i,children:[r?l.jsx(Lt,{size:16}):l.jsx(At,{size:16}),l.jsxs("h4",{children:[n," ",t]})]}),r&&l.jsx("div",{className:"section-content",children:o})]})}function uS({tools:e,onAdd:t,onRemove:n,onUpdate:r,builtinTools:i,mcpServers:o,projectMcpServers:a,customTools:s,agents:c}){const[u,d]=C.useState(!1),[p,f]=C.useState({}),m=Rt.useRef(null),[w,j]=C.useState(null),[z,h]=C.useState(new Set);function x(){if(m.current){const g=m.current.getBoundingClientRect(),E=window.innerHeight,D=350,R=E-g.bottom-16,A=g.top-16;if(R>=200||R>=A){const T=Math.min(D,R);f({top:g.bottom+4,left:g.left,maxHeight:T})}else{const T=Math.min(D,A);f({top:g.top-T-4,left:g.left,maxHeight:T})}}d(!0)}function b(g){t({type:"builtin",name:g}),d(!1)}async function P(g){d(!1);const E=g.tool_filter||[];if(j({server:g,enabledTools:new Set(E),availableTools:E.map(D=>({name:D,description:""})),isLoading:E.length===0,error:void 0}),E.length===0)try{const{testMcpServer:D}=await Gh(async()=>{const{testMcpServer:A}=await Promise.resolve().then(()=>W1);return{testMcpServer:A}},void 0),R=await D({connection_type:g.connection_type,command:g.command,args:g.args,env:g.env,url:g.url,headers:g.headers,timeout:g.timeout||30});R.success?j(A=>A?{...A,availableTools:R.tools,enabledTools:new Set(R.tools.map(T=>T.name)),isLoading:!1}:null):j(A=>A?{...A,isLoading:!1,error:R.error||"Failed to connect to MCP server"}:null)}catch(D){j(R=>R?{...R,isLoading:!1,error:D.message}:null)}}function k(g){if(!w)return;const E=new Set(w.enabledTools);E.has(g)?E.delete(g):E.add(g),j({...w,enabledTools:E})}function y(){if(!w)return;const g=Array.from(w.enabledTools);t({type:"mcp",server:{...w.server,tool_filter:g}}),j(null)}function L(g){const E=new Set(z);E.has(g)?E.delete(g):E.add(g),h(E)}function O(g,E){const D=e[g];if(D.type!=="mcp"||!D.server)return;const R=D.server.tool_filter||[];let A;R.includes(E)?A=R.filter(T=>T!==E):A=[...R,E],r(g,{...D,server:{...D.server,tool_filter:A}})}function $(g){t({type:"function",name:g.name,module_path:g.module_path}),d(!1)}function _(g){const E=c.find(D=>D.id===g);t({type:"agent",agent_id:g,name:E==null?void 0:E.name}),d(!1)}function v(g){return o.find(E=>E.name===g)}return l.jsxs("div",{children:[l.jsx("style",{children:`
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
      `}),l.jsx("div",{className:"tool-list",children:e.map((g,E)=>g.type==="mcp"&&g.server?l.jsxs("div",{className:"mcp-tool-item",children:[l.jsxs("div",{className:"mcp-tool-header",onClick:()=>L(E),children:[z.has(E)?l.jsx(Lt,{size:14}):l.jsx(At,{size:14}),l.jsx(Kt,{size:14,style:{color:"var(--accent-primary)"}}),l.jsxs("div",{className:"mcp-tool-info",children:[l.jsx("div",{className:"mcp-tool-name",children:g.server.name}),l.jsx("div",{className:"mcp-tool-count",children:g.server.tool_filter===null||g.server.tool_filter===void 0?"all tools":`${g.server.tool_filter.length} tools enabled`})]}),l.jsx("button",{className:"delete-btn",onClick:D=>{D.stopPropagation(),n(E)},children:l.jsx(Oe,{size:14})})]}),z.has(E)&&l.jsx("div",{className:"mcp-tool-body",children:l.jsx("div",{className:"mcp-tool-list",children:(()=>{const D=v(g.server.name),R=(D==null?void 0:D.tool_filter)||g.server.tool_filter||[],A=new Set(g.server.tool_filter||[]);return R.map(T=>l.jsxs("label",{className:`mcp-tool-chip ${A.has(T)?"enabled":"disabled"}`,onClick:()=>O(E,T),children:[l.jsx("input",{type:"checkbox",checked:A.has(T),onChange:()=>{},style:{display:"none"}}),T]},T))})()})})]},E):l.jsxs("div",{className:"tool-item",children:[l.jsx(Kt,{size:14,style:{color:"var(--accent-primary)"}}),l.jsxs("div",{className:"tool-item-info",children:[l.jsx("div",{className:"tool-item-name",children:g.name||g.agent_id}),l.jsx("div",{className:"tool-item-type",children:g.type})]}),l.jsx("button",{className:"delete-btn",onClick:()=>n(E),children:l.jsx(Oe,{size:14})})]},E))}),l.jsxs("div",{className:"add-tool-dropdown",style:{marginTop:12},children:[l.jsxs("button",{ref:m,className:"btn btn-secondary btn-sm",onClick:()=>u?d(!1):x(),children:[l.jsx(Fe,{size:14}),"Add Tool"]}),u&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"dropdown-backdrop",onClick:()=>d(!1)}),l.jsxs("div",{className:"dropdown-content dropdown-fixed",style:p,children:[l.jsxs("div",{className:"dropdown-section",children:[l.jsx("h5",{children:"Built-in Tools"}),i.map(g=>l.jsxs("button",{className:"dropdown-item",onClick:()=>b(g.name),children:[l.jsx("div",{className:"dropdown-item-name",children:g.name}),l.jsx("div",{className:"dropdown-item-desc",children:g.description})]},g.name))]}),o.length>0&&l.jsxs("div",{className:"dropdown-section",children:[l.jsxs("h5",{children:["Known MCP Servers (",o.length,")"]}),o.map(g=>l.jsxs("button",{className:"dropdown-item",onClick:()=>P(g),children:[l.jsxs("div",{className:"dropdown-item-name",children:[g.name,l.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:g.tool_filter===null||g.tool_filter===void 0?"all tools":`${g.tool_filter.length} tools`})]}),l.jsx("div",{className:"dropdown-item-desc",children:g.description})]},`known-${g.name}`))]}),a.length>0&&l.jsxs("div",{className:"dropdown-section",children:[l.jsxs("h5",{children:["Project MCP Servers (",a.length,")"]}),a.map(g=>l.jsxs("button",{className:"dropdown-item",onClick:()=>P(g),children:[l.jsxs("div",{className:"dropdown-item-name",children:[g.name,l.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:g.tool_filter===null||g.tool_filter===void 0?"all tools":`${g.tool_filter.length} tools`})]}),l.jsx("div",{className:"dropdown-item-desc",children:g.description||"Custom MCP server"})]},`project-${g.id||g.name}`))]}),s.length>0&&l.jsxs("div",{className:"dropdown-section",children:[l.jsx("h5",{children:"Custom Tools"}),s.map(g=>l.jsxs("button",{className:"dropdown-item",onClick:()=>$(g),children:[l.jsx("div",{className:"dropdown-item-name",children:g.name}),l.jsx("div",{className:"dropdown-item-desc",children:g.description})]},g.id))]}),c.length>0&&l.jsxs("div",{className:"dropdown-section",children:[l.jsx("h5",{children:"Agents as Tools"}),c.map(g=>l.jsxs("button",{className:"dropdown-item",onClick:()=>_(g.id),children:[l.jsx("div",{className:"dropdown-item-name",children:g.name}),l.jsx("div",{className:"dropdown-item-desc",children:g.type})]},g.id))]})]})]})]}),w&&l.jsx("div",{className:"mcp-config-dialog",children:l.jsxs("div",{className:"mcp-config-content",children:[l.jsxs("h3",{children:["Configure ",w.server.name]}),l.jsx("p",{children:w.server.description}),w.isLoading?l.jsxs("div",{className:"mcp-loading",children:[l.jsx("div",{className:"spinner"}),l.jsx("p",{children:"Connecting to MCP server and discovering tools..."})]}):w.error?l.jsxs("div",{className:"mcp-error",children:[l.jsxs("p",{children:["⚠️ Failed to discover tools: ",w.error]}),l.jsx("p",{className:"hint",children:"You can still add the server, but you won't be able to select specific tools."})]}):l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"mcp-select-actions",children:[l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>j({...w,enabledTools:new Set(w.availableTools.map(g=>g.name))}),children:["Select All (",w.availableTools.length,")"]}),l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>j({...w,enabledTools:new Set}),children:"Select None"})]}),l.jsx("div",{className:"mcp-tools-grid",children:w.availableTools.map(g=>l.jsxs("label",{className:`mcp-tool-toggle ${w.enabledTools.has(g.name)?"enabled":""}`,onClick:()=>k(g.name),title:g.description||g.name,children:[l.jsx("input",{type:"checkbox",checked:w.enabledTools.has(g.name),onChange:()=>{}}),g.name]},g.name))})]}),l.jsxs("div",{className:"dialog-actions",children:[l.jsx("button",{className:"btn btn-secondary",onClick:()=>j(null),children:"Cancel"}),l.jsxs("button",{className:"btn btn-primary",onClick:y,disabled:w.enabledTools.size===0,children:["Add ",w.enabledTools.size," Tools"]})]})]})})]})}function dS({agent:e,appModels:t,defaultModelId:n,onUpdate:r}){var p,f,m,w,j,z,h,x,b,P;const i=(p=e.model)==null?void 0:p._appModelId,o=e.model!==null&&e.model!==void 0&&!i,s=i||(()=>{if(!e.model)return n;const k=t.find(y=>{var L,O,$;return y.provider===((L=e.model)==null?void 0:L.provider)&&y.model_name===((O=e.model)==null?void 0:O.model_name)&&y.api_base===(($=e.model)==null?void 0:$.api_base)});return k==null?void 0:k.id})()||n||((f=t[0])==null?void 0:f.id);Rt.useEffect(()=>{var k,y,L,O,$;if(i){const _=t.find(v=>v.id===i);_&&(((k=e.model)==null?void 0:k.provider)!==_.provider||((y=e.model)==null?void 0:y.model_name)!==_.model_name||((L=e.model)==null?void 0:L.api_base)!==_.api_base||((O=e.model)==null?void 0:O.temperature)!==_.temperature||(($=e.model)==null?void 0:$.max_output_tokens)!==_.max_output_tokens)&&r({provider:_.provider,model_name:_.model_name,api_base:_.api_base,temperature:_.temperature,max_output_tokens:_.max_output_tokens,top_p:_.top_p,top_k:_.top_k,fallbacks:[],_appModelId:i})}},[i,t,e.model,r]);function c(k){const y=t.find(L=>L.id===k);y&&r({provider:y.provider,model_name:y.model_name,api_base:y.api_base,temperature:y.temperature,max_output_tokens:y.max_output_tokens,top_p:y.top_p,top_k:y.top_k,fallbacks:[],_appModelId:k})}function u(){var k;if(o){const y=n||((k=t[0])==null?void 0:k.id);y&&c(y)}else{const y=e.model;if(y){const{_appModelId:L,...O}=y;r(O)}else r({provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]})}}function d(k){const{_appModelId:y,...L}=e.model||{};r({...L,...k})}return t.find(k=>k.id===s),t.find(k=>k.id===n),l.jsxs("div",{className:"model-selector",children:[l.jsx("style",{children:`
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
      `}),t.length>0&&l.jsxs("div",{className:"model-choice",children:[l.jsxs("div",{className:`model-option ${o?"":"selected"}`,onClick:()=>!o||u(),children:[l.jsx("div",{className:"model-option-label",children:"Use App Model"}),l.jsx("div",{className:"model-option-desc",children:"Select from configured models"})]}),l.jsxs("div",{className:`model-option ${o?"selected":""}`,onClick:()=>o||u(),children:[l.jsx("div",{className:"model-option-label",children:"Custom"}),l.jsx("div",{className:"model-option-desc",children:"Configure model manually"})]})]}),!o&&t.length>0?l.jsx("div",{className:"app-model-select",children:t.map(k=>l.jsx("div",{className:`app-model-item ${s===k.id?"selected":""}`,onClick:()=>c(k.id),children:l.jsxs("div",{className:"app-model-item-info",children:[l.jsxs("div",{className:"app-model-item-name",children:[k.name,k.id===n&&l.jsxs("span",{className:"default-badge",children:[l.jsx(Hh,{size:10,fill:"currentColor"}),"Default"]})]}),l.jsxs("div",{className:"app-model-item-details",children:[k.provider," / ",k.model_name,k.api_base&&` • ${k.api_base}`]})]})},k.id))}):t.length===0?l.jsx("div",{className:"no-models-message",children:"No models configured in App Config. Configure models there first, or use custom settings below."}):null,(o||t.length===0)&&l.jsxs("div",{className:"custom-model-form",children:[l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Provider"}),l.jsxs("select",{value:((m=e.model)==null?void 0:m.provider)||"gemini",onChange:k=>d({provider:k.target.value}),children:[l.jsx("option",{value:"gemini",children:"Gemini"}),l.jsx("option",{value:"litellm",children:"LiteLLM"}),l.jsx("option",{value:"anthropic",children:"Anthropic"})]})]}),l.jsxs("div",{className:"form-group",style:{flex:2},children:[l.jsx("label",{children:"Model Name"}),l.jsx("input",{type:"text",value:((w=e.model)==null?void 0:w.model_name)||"",onChange:k=>d({model_name:k.target.value}),placeholder:"e.g., gemini-2.0-flash"})]}),((j=e.model)==null?void 0:j.provider)==="litellm"&&l.jsxs("div",{className:"form-group",style:{flex:2},children:[l.jsx("label",{children:"API Base"}),l.jsx("input",{type:"text",value:((z=e.model)==null?void 0:z.api_base)||"",onChange:k=>d({api_base:k.target.value||void 0}),placeholder:"http://localhost:11434"})]})]}),l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Temperature"}),l.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:((h=e.model)==null?void 0:h.temperature)??"",onChange:k=>d({temperature:k.target.value?parseFloat(k.target.value):void 0}),placeholder:"Default"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Max Tokens"}),l.jsx("input",{type:"number",value:((x=e.model)==null?void 0:x.max_output_tokens)??"",onChange:k=>d({max_output_tokens:k.target.value?parseInt(k.target.value):void 0}),placeholder:"Default"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Top P"}),l.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:((b=e.model)==null?void 0:b.top_p)??"",onChange:k=>d({top_p:k.target.value?parseFloat(k.target.value):void 0}),placeholder:"Default"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Top K"}),l.jsx("input",{type:"number",min:"1",value:((P=e.model)==null?void 0:P.top_k)??"",onChange:k=>d({top_k:k.target.value?parseInt(k.target.value):void 0}),placeholder:"Default"})]})]})]})]})}function pS({agent:e,onUpdate:t,customCallbacks:n}){const r=[{key:"before_agent_callbacks",label:"Before Agent"},{key:"after_agent_callbacks",label:"After Agent"},{key:"before_model_callbacks",label:"Before Model"},{key:"after_model_callbacks",label:"After Model"},{key:"before_tool_callbacks",label:"Before Tool"},{key:"after_tool_callbacks",label:"After Tool"}];function i(a,s){const c=e[a]||[],u=n.find(d=>d.id===s);u&&t({[a]:[...c,{module_path:u.module_path}]})}function o(a,s){const c=e[a]||[];t({[a]:c.filter((u,d)=>d!==s)})}return l.jsx("div",{className:"callbacks-editor",children:r.map(({key:a,label:s})=>{const c=e[a]||[],u=n;return l.jsxs("div",{className:"callback-type-group",style:{marginBottom:"20px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[l.jsx("label",{style:{fontWeight:500,fontSize:"13px"},children:s}),u.length>0&&l.jsxs("select",{value:"",onChange:d=>{d.target.value&&(i(a,d.target.value),d.target.value="")},style:{padding:"4px 8px",fontSize:"12px",width:"200px"},children:[l.jsx("option",{value:"",children:"Add callback..."}),u.filter(d=>{const p=d.module_path;return!c.some(f=>f.module_path===p)}).map(d=>l.jsx("option",{value:d.id,children:d.name},d.id))]})]}),c.length===0?l.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",fontStyle:"italic",padding:"8px"},children:"No callbacks"}):l.jsx("div",{className:"callback-list",children:c.map((d,p)=>{const f=n.find(m=>m.module_path===d.module_path);return l.jsxs("div",{className:"callback-chip",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 10px",background:"var(--bg-secondary)",borderRadius:"4px",marginBottom:"4px"},children:[l.jsx("span",{style:{fontSize:"12px"},children:(f==null?void 0:f.name)||d.module_path}),l.jsx("button",{onClick:()=>o(a,p),style:{background:"none",border:"none",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},title:"Remove callback",children:l.jsx(Oe,{size:12})})]},p)})})]},a)})})}const Aa=[{type:"LlmAgent",label:"LLM Agent",icon:qn,color:"#00f5d4",description:"AI-powered agent with model reasoning"},{type:"SequentialAgent",label:"Sequential",icon:o0,color:"#7b2cbf",description:"Run sub-agents in order"},{type:"LoopAgent",label:"Loop",icon:Z1,color:"#ffd93d",description:"Repeat sub-agents until exit"},{type:"ParallelAgent",label:"Parallel",icon:As,color:"#ff6b6b",description:"Run sub-agents simultaneously"}];function fS(){return`agent_${Date.now().toString(36)}`}function mS(e){return{provider:e.provider,model_name:e.model_name,api_base:e.api_base,temperature:e.temperature,max_output_tokens:e.max_output_tokens,top_p:e.top_p,top_k:e.top_k,fallbacks:[]}}function hS(e,t){const r={id:fS(),name:`New ${e}`,description:""},i=t?mS(t):{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]};switch(e){case"LlmAgent":return{...r,type:"LlmAgent",model:i,instruction:"",include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:[],sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};case"SequentialAgent":return{...r,type:"SequentialAgent",sub_agents:[]};case"LoopAgent":return{...r,type:"LoopAgent",sub_agents:[],max_iterations:10};case"ParallelAgent":return{...r,type:"ParallelAgent",sub_agents:[]};default:throw new Error(`Unknown agent type: ${e}`)}}function gS({onSelectAgent:e}){const{project:t,addAgent:n,removeAgent:r,updateAgent:i,selectedAgentId:o,setSelectedAgentId:a,mcpServers:s}=Nt(),[c,u]=C.useState(!1),[d,p]=C.useState(new Set),[f,m]=C.useState(!1),[w,j]=C.useState(""),[z,h]=C.useState(!1);if(C.useEffect(()=>{if(t){const E=t.agents.filter(D=>"sub_agents"in D&&D.sub_agents.length>0).map(D=>D.id);p(new Set(E))}},[t==null?void 0:t.id,t==null?void 0:t.agents.length]),!t)return null;async function x(){var E,D,R,A;if(!(!w.trim()||!t)){h(!0);try{const T=await Mh(t.id,w);if(T.success&&T.config){const I=T.config,V=[];if((E=I.tools)!=null&&E.builtin)for(const N of I.tools.builtin)V.push({type:"builtin",name:N});if((D=I.tools)!=null&&D.mcp)for(const N of I.tools.mcp){const ne=s.find(ie=>ie.name===N.server);ne&&V.push({type:"mcp",server:{...ne,tool_filter:N.tools}})}if((R=I.tools)!=null&&R.custom)for(const N of I.tools.custom){const ne=t.custom_tools.find(ie=>ie.name===N);ne&&V.push({type:"function",name:N,module_path:ne.module_path})}if((A=I.tools)!=null&&A.agents)for(const N of I.tools.agents){const ne=t.agents.find(ie=>ie.id===N);ne&&V.push({type:"agent",agent_id:N,name:ne.name})}const S=t.app.models||[],W=S.find(N=>N.id===t.app.default_model_id)||S[0],G={id:`agent_${Date.now().toString(36)}`,type:"LlmAgent",name:I.name||"new_agent",description:I.description||"",instruction:I.instruction||"",model:W?{provider:W.provider,model_name:W.model_name,api_base:W.api_base,temperature:W.temperature,max_output_tokens:W.max_output_tokens,top_p:W.top_p,top_k:W.top_k,fallbacks:[]}:{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]},include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:V,sub_agents:I.sub_agents||[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};n(G),a(G.id),e==null||e(G.id),m(!1),j("")}else alert("Failed to generate agent: "+(T.error||"Unknown error"))}catch(T){alert("Error generating agent: "+T.message)}finally{h(!1)}}}const b=t.agents.find(E=>E.id===o);function P(E){a(E),e==null||e(E)}function k(E){const D=t.app.models||[],R=D.find(T=>T.id===t.app.default_model_id)||D[0],A=hS(E,R);n(A),P(A.id),u(!1)}function y(E,D){D.stopPropagation(),confirm("Delete this agent?")&&(r(E),o===E&&(e==null||e(null)))}function L(E){const D=new Set(d);D.has(E)?D.delete(E):D.add(E),p(D)}function O(E){const D=Aa.find(R=>R.type===E);return D?D.icon:qn}function $(E){const D=Aa.find(R=>R.type===E);return D?D.color:"#888"}function _(E,D=0){return E.map(R=>{const A=O(R.type),T=$(R.type),I="sub_agents"in R&&R.sub_agents.length>0,V=d.has(R.id),S=I?R.sub_agents.map(W=>t.agents.find(G=>G.id===W)).filter(W=>W!==void 0):[];return l.jsxs("div",{className:"agent-tree-item",children:[l.jsxs("div",{className:`agent-item ${o===R.id?"selected":""}`,onClick:()=>P(R.id),style:{paddingLeft:12+D*20},children:[I?l.jsx("button",{className:"expand-btn",onClick:W=>{W.stopPropagation(),L(R.id)},children:V?l.jsx(Lt,{size:16}):l.jsx(At,{size:16})}):l.jsx("span",{style:{width:20}}),l.jsx("div",{className:"agent-icon",style:{background:T},children:l.jsx(A,{size:14})}),l.jsx("span",{className:"agent-name",children:R.name}),l.jsx("span",{className:"agent-type",children:R.type}),l.jsx("button",{className:"delete-btn",onClick:W=>y(R.id,W),children:l.jsx(Oe,{size:14})})]}),I&&V&&l.jsx("div",{className:"sub-agents",children:_(S,D+1)})]},R.id)})}const v=new Set(t.agents.flatMap(E=>"sub_agents"in E?E.sub_agents:[])),g=t.agents.filter(E=>!v.has(E.id));return l.jsxs("div",{className:"agents-panel",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("aside",{className:"agents-sidebar",children:[l.jsxs("div",{className:"sidebar-header",children:[l.jsxs("h3",{children:["Agents (",t.agents.length,")"]}),l.jsxs("div",{className:"header-buttons",children:[l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>m(!0),title:"AI-powered agent setup",children:[l.jsx(ya,{size:14}),"Quick"]}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>u(!0),children:[l.jsx(Fe,{size:14}),"Add"]})]})]}),l.jsx("div",{className:"agents-list",children:t.agents.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx(qn,{size:32}),l.jsx("p",{children:"No agents yet"})]}):_(g)})]}),l.jsx("div",{className:"agent-editor-area",children:b?l.jsx(cS,{agent:b}):l.jsxs("div",{className:"empty-state card",children:[l.jsx(qn,{size:48}),l.jsxs("p",{children:["Select an agent to edit",l.jsx("br",{}),"or create a new one"]})]})}),c&&l.jsx("div",{className:"type-selector",onClick:()=>u(!1),children:l.jsxs("div",{className:"type-selector-content",onClick:E=>E.stopPropagation(),children:[l.jsx("h2",{children:"Add Agent"}),l.jsx("div",{className:"type-options",children:Aa.map(({type:E,label:D,icon:R,color:A,description:T})=>l.jsxs("button",{className:"type-option",onClick:()=>k(E),children:[l.jsx("div",{className:"type-option-icon",style:{background:A},children:l.jsx(R,{size:20})}),l.jsxs("div",{className:"type-option-info",children:[l.jsx("h4",{children:D}),l.jsx("p",{children:T})]})]},E))})]})}),f&&l.jsx("div",{className:"type-selector",onClick:()=>!z&&m(!1),children:l.jsxs("div",{className:"quick-setup-content",onClick:E=>E.stopPropagation(),children:[l.jsxs("h2",{children:[l.jsx(ya,{size:20})," Quick Agent Setup"]}),l.jsx("p",{className:"quick-setup-desc",children:"Describe what you want this agent to do, and AI will configure everything: name, description, instruction, tools, and sub-agents."}),l.jsxs("div",{className:"quick-setup-form",children:[l.jsx("textarea",{value:w,onChange:E=>j(E.target.value),placeholder:"Example: An agent that searches the web for information and summarizes the results. It should be able to search Google and handle multiple queries in parallel.",rows:5,disabled:z,autoFocus:!0}),l.jsxs("div",{className:"quick-setup-info",children:[l.jsx("strong",{children:"Available resources:"}),l.jsxs("ul",{children:[l.jsxs("li",{children:[t.app.state_keys.length," state keys"]}),l.jsxs("li",{children:[s.length," MCP servers"]}),l.jsxs("li",{children:[t.custom_tools.length," custom tools"]}),l.jsxs("li",{children:[t.agents.length," existing agents"]})]})]}),l.jsxs("div",{className:"quick-setup-actions",children:[l.jsx("button",{className:"btn btn-secondary",onClick:()=>m(!1),disabled:z,children:"Cancel"}),l.jsx("button",{className:"btn btn-primary",onClick:x,disabled:z||!w.trim(),children:z?l.jsxs(l.Fragment,{children:[l.jsx(Dr,{size:14,className:"spin"}),"Generating..."]}):l.jsxs(l.Fragment,{children:[l.jsx(ya,{size:14}),"Create Agent"]})})]})]})]})})]})}var mu="\x1B[0m",hu="\x1B[1m",Fg=e=>e instanceof Error?e.message:typeof e=="string"?e:"An unknown error occurred",xS=e=>{let t=Fg(e),n=`${hu}[MONACOPILOT ERROR] ${t}${mu}`;return console.error(n),{message:t}},yS=(e,t)=>{console.warn(`${hu}[MONACOPILOT WARN] ${e}${t?`
${Fg(t)}`:""}${mu}`)},vS=(e,t,n)=>console.warn(`${hu}[MONACOPILOT DEPRECATED] "${e}" is deprecated${n?` in ${n}`:""}. Please use "${t}" instead. It will be removed in a future version.${mu}`),gl={report:xS,warn:yS,warnDeprecated:vS},Vp=(e,t,n={})=>{if(t<=0)return"";let r=e.split(`
`),i=r.length;if(t>=i)return e;if(n.truncateDirection==="keepEnd"){let a=r.slice(-t);return a.every(s=>s==="")?`
`.repeat(t):a.join(`
`)}let o=r.slice(0,t);return o.every(a=>a==="")?`
`.repeat(t):o.join(`
`)},bS=100,kS=!0,Bg="onIdle",wS=!0,jS=120,SS=400,_S=0,gu=(e,t)=>t.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:e.lineNumber,endColumn:e.column}),CS=(e,t)=>t.getValueInRange({startLineNumber:e.lineNumber,startColumn:e.column,endLineNumber:t.getLineCount(),endColumn:t.getLineMaxColumn(t.getLineCount())}),NS=e=>e.getValue(),ES=class{constructor(e){this.capacity=e,this.head=0,this.tail=0,this.size=0,this.buffer=new Array(e)}enqueue(e){let t;return this.size===this.capacity&&(t=this.dequeue()),this.buffer[this.tail]=e,this.tail=(this.tail+1)%this.capacity,this.size++,t}dequeue(){if(this.size===0)return;let e=this.buffer[this.head];return this.buffer[this.head]=void 0,this.head=(this.head+1)%this.capacity,this.size--,e}getAll(){return this.buffer.filter(e=>e!==void 0)}clear(){this.buffer=new Array(this.capacity),this.head=0,this.tail=0,this.size=0}getSize(){return this.size}isEmpty(){return this.size===0}isFull(){return this.size===this.capacity}},Ug=class Vg{constructor(){this.cache=new ES(Vg.MAX_CACHE_SIZE)}get(t,n){return this.cache.getAll().filter(r=>this.isValidCacheItem(r,t,n))}add(t){t.completion.trim()&&this.cache.enqueue(t)}clear(){this.cache.clear()}isValidCacheItem(t,n,r){let i=t.textBeforeCursor.trim(),o=gu(n,r),a=o,s=r.getLineContent(n.lineNumber);if(n.column===s.length+1&&n.lineNumber<r.getLineCount()){let u=r.getLineContent(n.lineNumber+1);a=`${o}
${u}`}if(!(a.trim().includes(i)||i.includes(a.trim())))return!1;let c=r.getValueInRange(t.range);return this.isPartialMatch(c,t.completion)?this.isPositionValid(t,n):!1}isPartialMatch(t,n){let r=t.trim(),i=n.trim();return i.startsWith(r)||r.startsWith(i)}isPositionValid(t,n){let{range:r}=t,{startLineNumber:i,startColumn:o,endLineNumber:a,endColumn:s}=r,{lineNumber:c,column:u}=n;return c<i||c>a?!1:i===a?u>=o-1&&u<=s+1:c===i?u>=o-1:c===a?u<=s+1:!0}};Ug.MAX_CACHE_SIZE=20;var zS=Ug,TS=class{constructor(e){this.formattedCompletion="",this.formattedCompletion=e}setCompletion(e){return this.formattedCompletion=e,this}removeInvalidLineBreaks(){return this.formattedCompletion=this.formattedCompletion.trimEnd(),this}removeMarkdownCodeSyntax(){return this.formattedCompletion=this.removeMarkdownCodeBlocks(this.formattedCompletion),this}removeMarkdownCodeBlocks(e){let t=e.split(`
`),n=[],r=!1;for(let i=0;i<t.length;i++){let o=t[i],a=o.trim().startsWith("```");if(a&&!r){r=!0;continue}if(a&&r){r=!1;continue}n.push(o)}return n.join(`
`)}removeExcessiveNewlines(){return this.formattedCompletion=this.formattedCompletion.replace(/\n{3,}/g,`

`),this}build(){return this.formattedCompletion}},PS=class{findOverlaps(e,t,n){if(!e)return{startOverlapLength:0,maxOverlapLength:0};let r=e.length,i=t.length,o=n.length,a=0,s=0,c=0,u=Math.min(r,i);for(let f=1;f<=u;f++){let m=e.substring(0,f),w=t.slice(-f);m===w&&(c=f)}let d=Math.min(r,o);for(let f=0;f<d&&e[f]===n[f];f++)a++;for(let f=1;f<=d;f++)e.slice(-f)===n.slice(0,f)&&(s=f);let p=Math.max(a,s);if(p===0){for(let f=1;f<r;f++)if(n.startsWith(e.substring(f))){p=r-f;break}}return{startOverlapLength:c,maxOverlapLength:p}}},LS=class{constructor(e){this.monaco=e,this.textOverlapCalculator=new PS}computeInsertionRange(e,t,n){if(!t)return this.createEmptyRange(e);let r=n.getOffsetAt(e),i=n.getValue().substring(0,r),o=n.getValue().substring(r);if(r>=n.getValue().length)return this.createEmptyRange(e);if(o.length===0)return this.createEmptyRange(e);let{startOverlapLength:a,maxOverlapLength:s}=this.textOverlapCalculator.findOverlaps(t,i,o),c=a>0?n.getPositionAt(r-a):e,u=r+s,d=n.getPositionAt(u);return new this.monaco.Range(c.lineNumber,c.column,d.lineNumber,d.column)}computeCacheRange(e,t){let n=e.lineNumber,r=e.column,i=t.split(`
`),o=i.length-1,a=n+o,s=o===0?r+i[0].length:i[o].length+1;return new this.monaco.Range(n,r,a,s)}createEmptyRange(e){return new this.monaco.Range(e.lineNumber,e.column,e.lineNumber,e.column)}},AS=async e=>{let{endpoint:t,body:n}=e,r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok)throw new Error(`Error while fetching completion item: ${r.statusText}`);let{completion:i,error:o}=await r.json();return{completion:i,error:o}},IS=({pos:e,mdl:t,options:n})=>{let{filename:r,language:i,technologies:o,relatedFiles:a,maxContextLines:s=bS}=n,c=a&&a.length>0?3:2,u=s?Math.floor(s/c):void 0,d=(j,z,h)=>{let x=j(e,t);return z?Vp(x,z,h):x},p=(j,z)=>!j||!z?j:j.map(({content:h,...x})=>({...x,content:Vp(h,z)})),f=d(gu,u,{truncateDirection:"keepEnd"}),m=d(CS,u,{truncateDirection:"keepStart"}),w=p(a,u);return{filename:r,language:i,technologies:o,relatedFiles:w,textBeforeCursor:f,textAfterCursor:m,cursorPosition:e}},RS=(e,t=300)=>{let n=null,r=null,i=(...o)=>{if(r)return r.args=o,r.promise;let a,s,c=new Promise((u,d)=>{a=u,s=d});return r={args:o,promise:c,resolve:a,reject:s},n&&(clearTimeout(n),n=null),n=setTimeout(async()=>{let u=r;if(u){r=null,n=null;try{let d=await e(...u.args);u.resolve(d)}catch(d){u.reject(d)}}},t),c};return i.cancel=()=>{n&&(clearTimeout(n),n=null),r&&(r.reject(new Error("Cancelled")),r=null)},i},MS=e=>typeof e=="string"?e==="Cancelled"||e==="AbortError":e instanceof Error?e.message==="Cancelled"||e.name==="AbortError":!1,oi=e=>({items:e,enableForwardStability:!0}),Ks=new zS,OS=async({monaco:e,mdl:t,pos:n,token:r,isCompletionAccepted:i,options:o})=>{let{trigger:a=Bg,enableCaching:s=kS,allowFollowUpCompletions:c=wS,onError:u,requestHandler:d}=o;if(s&&!i){let p=Ks.get(n,t).map(f=>({insertText:f.completion,range:f.range}));if(p.length>0)return oi(p)}if(r.isCancellationRequested||!c&&i)return oi([]);try{let p=RS(async w=>{var z,h;(z=o.onCompletionRequested)==null||z.call(o,w);let j;if(d)j=await d(w);else if(o.endpoint)j=await AS({endpoint:o.endpoint,...w});else throw new Error('No endpoint specified for completion request. Please set the "endpoint" option in registerCompletion, or provide a custom requestHandler.');if(j.error)throw new Error(j.error);return(h=o.onCompletionRequestFinished)==null||h.call(o,w,j),j},{onTyping:jS,onIdle:SS,onDemand:_S}[a]);r.onCancellationRequested(()=>{p.cancel()});let f=IS({pos:n,mdl:t,options:o}),{completion:m}=await p({body:{completionMetadata:f}});if(m){let w=new TS(m).removeMarkdownCodeSyntax().removeExcessiveNewlines().removeInvalidLineBreaks().build(),j=new LS(e);return s&&Ks.add({completion:w,range:j.computeCacheRange(n,w),textBeforeCursor:gu(n,t)}),oi([{insertText:w,range:j.computeInsertionRange(n,w,t)}])}}catch(p){if(MS(p))return oi([]);u?u(p):gl.warn("Cannot provide completion",p)}return oi([])},xu=new WeakMap,Bl=e=>xu.get(e),DS=(e,t)=>{xu.set(e,t)},Wp=e=>{xu.delete(e)},$S=e=>({isCompletionAccepted:!1,isCompletionVisible:!1,isExplicitlyTriggered:!1,hasRejectedCurrentCompletion:!1,options:e}),FS=(e,t)=>{let n=Bl(e);!n||!n.options||(n.options={...n.options,...t})},BS=(e,t,n)=>{let r=Bl(t);return r?e.languages.registerInlineCompletionsProvider(n.language,{provideInlineCompletions:(i,o,a,s)=>{if(i!==t.getModel())return{items:[]};let c=r.options||n;if(!(c.trigger==="onDemand"&&!r.isExplicitlyTriggered||c.triggerIf&&!c.triggerIf({text:NS(t),position:o,triggerType:c.trigger??Bg})))return OS({monaco:e,mdl:i,pos:o,token:s,isCompletionAccepted:r.isCompletionAccepted,options:c})},handleItemDidShow:(i,o,a)=>{var s,c;r.isExplicitlyTriggered=!1,r.hasRejectedCurrentCompletion=!1,!r.isCompletionAccepted&&(r.isCompletionVisible=!0,(c=(s=r.options||n).onCompletionShown)==null||c.call(s,a,o.range))},freeInlineCompletions:()=>{}}):null},US={TAB:(e,t)=>t.keyCode===e.KeyCode.Tab,CMD_RIGHT_ARROW:(e,t)=>t.keyCode===e.KeyCode.RightArrow&&t.metaKey},VS=class{constructor(e,t,n){this.monaco=e,this.state=t,this.initialOptions=n}handleKeyEvent(e){let t=this.state.options||this.initialOptions,n={monaco:this.monaco,event:e,state:this.state,options:t};this.handleCompletionAcceptance(n),this.handleCompletionRejection(n)}handleCompletionAcceptance(e){var t,n;return e.state.isCompletionVisible&&this.isAcceptanceKey(e.event)?((n=(t=e.options).onCompletionAccepted)==null||n.call(t),e.state.isCompletionAccepted=!0,e.state.isCompletionVisible=!1,!0):(e.state.isCompletionAccepted=!1,!1)}handleCompletionRejection(e){var t,n;return this.shouldRejectCompletion(e)?((n=(t=e.options).onCompletionRejected)==null||n.call(t),e.state.hasRejectedCurrentCompletion=!0,!0):!1}shouldRejectCompletion(e){return e.state.isCompletionVisible&&!e.state.hasRejectedCurrentCompletion&&!e.state.isCompletionAccepted&&!this.isAcceptanceKey(e.event)}isAcceptanceKey(e){return Object.values(US).some(t=>t(this.monaco,e))}},WS=(e,t,n,r)=>{let i=new VS(e,n,r);return t.onKeyDown(o=>i.handleKeyEvent(o))},Wg=(e,t,n)=>{let r=[];DS(t,$S(n)),t.updateOptions({inlineSuggest:{enabled:!0}});try{let i=Bl(t);if(!i)return gl.warn("Completion is not registered properly. State not found."),qS();let o=BS(e,t,n);o&&r.push(o);let a=WS(e,t,i,n);return r.push(a),{deregister:()=>{for(let s of r)s.dispose();Ks.clear(),Wp(t)},trigger:()=>HS(t),updateOptions:s=>{FS(t,s(i.options||n))}}}catch(i){return n.onError?n.onError(i):gl.report(i),{deregister:()=>{for(let o of r)o.dispose();Wp(t)},trigger:()=>{},updateOptions:()=>{}}}},HS=e=>{let t=Bl(e);if(!t){gl.warn("Completion is not registered. Use `registerCompletion` to register completion first.");return}t.isExplicitlyTriggered=!0,e.trigger("keyboard","editor.action.inlineSuggest.trigger",{})},qS=()=>({deregister:()=>{},trigger:()=>{},updateOptions:()=>{}});function KS(){return`tool_${Date.now().toString(36)}`}function GS(e){return/^[a-zA-Z0-9_]+$/.test(e)}const QS=`def my_tool(tool_context: ToolContext, param1: str) -> dict:
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
`;function JS({onSelectTool:e}){var $t;const{project:t,updateProject:n,addCustomTool:r,updateCustomTool:i,removeCustomTool:o,selectedToolId:a,setSelectedToolId:s,builtinTools:c,mcpServers:u}=Nt(),[d,p]=C.useState(""),[f,m]=C.useState(null),[w,j]=C.useState("tools"),[z,h]=C.useState(null),[x,b]=C.useState(""),[P,k]=C.useState(!1),[y,L]=C.useState(null),[O,$]=C.useState(!1),[_,v]=C.useState(!1),[g,E]=C.useState(null),[D,R]=C.useState(null);if(!t)return null;const A=t.mcp_servers||[],T=t.custom_tools.find(F=>F.id===a),I=A.find(F=>F.name===z),V=new Set(A.map(F=>F.name)),S=u.filter(F=>!V.has(F.name));function W(F){s(F),e==null||e(F)}C.useEffect(()=>{T&&(p(T.code),R(null))},[a]),C.useEffect(()=>{I&&(b(JSON.stringify(I,null,2)),k(!1))},[z]);function G(){const F=KS();r({id:F,name:"new_tool",description:"",module_path:"tools.custom",code:QS,state_keys_used:[]}),W(F)}function N(F,ue){ue.stopPropagation(),confirm("Delete this tool?")&&(o(F),a===F&&(e==null||e(null)))}function ne(F){T&&(F.name!==void 0&&(F.name===""||GS(F.name)?R(null):R("Name can only contain letters, numbers, and underscores")),i(T.id,F))}function ie(F){F!==void 0&&T&&(p(F),ne({code:F}))}async function de(){if(T){$(!0);try{const F=await Oh(t.id,T.name,T.description,T.state_keys_used);F.success&&F.code?(p(F.code),ne({code:F.code})):(console.error("Failed to generate tool code:",F.error),alert("Failed to generate tool code: "+(F.error||"Unknown error")))}catch(F){console.error("Error generating tool code:",F),alert("Error generating tool code: "+F.message)}finally{$(!1)}}}const U=C.useRef(null),X=C.useCallback((F,ue)=>{if(U.current&&typeof U.current=="function")try{U.current()}catch{}try{const Se=Wg(ue,F,{language:"python",endpoint:"/api/code-completion",trigger:"onTyping"});typeof Se=="function"?U.current=Se:U.current=null}catch{U.current=null}},[]);C.useEffect(()=>()=>{if(U.current&&typeof U.current=="function")try{U.current()}catch{}},[]);function oe(){const F={name:`mcp_server_${Date.now().toString(36)}`,description:"New MCP Server",connection_type:"stdio",command:"npx",args:["-y","@modelcontextprotocol/server-example"],env:{},headers:{},timeout:10};n({mcp_servers:[...A,F]}),h(F.name),L(null)}function he(F){const ue={...F};n({mcp_servers:[...A,ue]}),h(ue.name),L(null)}function xe(F,ue){ue.stopPropagation(),confirm("Delete this MCP server?")&&(n({mcp_servers:A.filter(Se=>Se.name!==F)}),z===F&&h(null))}function ce(F){F!==void 0&&(b(F),k(F!==JSON.stringify(I,null,2)))}function Ze(){if(I)try{const F=JSON.parse(x),ue=I.name,Se=A.map(st=>st.name===ue?F:st);n({mcp_servers:Se}),h(F.name),k(!1)}catch(F){alert("Invalid JSON: "+F.message)}}async function vt(){v(!0),E(null);try{const F=JSON.parse(x),ue=await $h({connection_type:F.connection_type,command:F.command,args:F.args,env:F.env,url:F.url,headers:F.headers,timeout:F.timeout||30});if(E(ue),ue.success&&ue.tools.length>0){const Se={...F,tool_filter:ue.tools.map(st=>st.name)};b(JSON.stringify(Se,null,2)),k(!0)}}catch(F){E({success:!1,tools:[],error:F.message})}finally{v(!1)}}const Ve={};return t.custom_tools.forEach(F=>{const ue=F.module_path||"tools";Ve[ue]||(Ve[ue]=[]),Ve[ue].push(F)}),l.jsxs("div",{className:"tools-panel",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("aside",{className:"tools-sidebar",children:[l.jsxs("div",{className:"sidebar-tabs",children:[l.jsxs("button",{className:`sidebar-tab ${w==="tools"?"active":""}`,onClick:()=>j("tools"),children:[l.jsx(Kt,{size:14}),"Tools"]}),l.jsxs("button",{className:`sidebar-tab ${w==="mcp"?"active":""}`,onClick:()=>j("mcp"),children:[l.jsx(or,{size:14}),"MCP"]})]}),w==="tools"?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"sidebar-header",children:[l.jsxs("h3",{children:["Custom Tools (",t.custom_tools.length,")"]}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:G,children:[l.jsx(Fe,{size:14}),"New"]})]}),l.jsxs("div",{className:"tools-tree",children:[c.length>0&&l.jsxs("div",{className:"module-group",children:[l.jsxs("div",{className:"module-header",children:[l.jsx(Vd,{size:14}),"Built-in Tools"]}),c.map(F=>l.jsxs("div",{className:`tool-item builtin ${(f==null?void 0:f.name)===F.name?"selected":""}`,onClick:()=>{m(F),W(null),h(null)},children:[l.jsx(Is,{size:14}),l.jsx("span",{className:"tool-name",children:F.name})]},F.name))]}),t.custom_tools.length===0&&c.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx(zn,{size:32}),l.jsx("p",{children:"No tools defined yet"})]}):t.custom_tools.length>0&&Object.entries(Ve).map(([F,ue])=>l.jsxs("div",{className:"module-group",children:[l.jsxs("div",{className:"module-header",children:[l.jsx(Y1,{size:14}),F]}),ue.map(Se=>l.jsxs("div",{className:`tool-item ${a===Se.id?"selected":""}`,onClick:()=>{W(Se.id),m(null),h(null)},children:[l.jsx(Kt,{size:14}),l.jsx("span",{className:"tool-name",children:Se.name}),l.jsx("button",{className:"delete-btn",onClick:st=>N(Se.id,st),children:l.jsx(Oe,{size:14})})]},Se.id))]},F))]})]}):l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"sidebar-header",children:[l.jsxs("h3",{children:["MCP Servers (",A.length,")"]}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:oe,children:[l.jsx(Fe,{size:14}),"Custom"]})]}),l.jsxs("div",{className:"tools-tree",children:[A.length>0&&l.jsxs("div",{className:"module-group",children:[l.jsxs("div",{className:"module-header",children:[l.jsx(Ud,{size:14}),"Configured (",A.length,")"]}),A.map(F=>l.jsxs("div",{className:`tool-item ${z===F.name?"selected":""}`,onClick:()=>{h(F.name),L(null),W(null),m(null)},children:[l.jsx(or,{size:14}),l.jsx("span",{className:"tool-name",children:F.name}),l.jsx("span",{className:"tool-type-badge",children:F.connection_type}),l.jsx("button",{className:"delete-btn",onClick:ue=>xe(F.name,ue),children:l.jsx(Oe,{size:14})})]},F.name))]}),S.length>0&&l.jsxs("div",{className:"module-group",children:[l.jsxs("div",{className:"module-header",children:[l.jsx(Vd,{size:14}),"Available Templates (",S.length,")"]}),S.map(F=>l.jsxs("div",{className:`tool-item known-server ${(y==null?void 0:y.name)===F.name?"selected":""}`,onClick:()=>{L(F),h(null),W(null),m(null)},children:[l.jsx(or,{size:14}),l.jsx("span",{className:"tool-name",children:F.name}),l.jsx("span",{className:"tool-type-badge",children:F.connection_type})]},F.name))]}),A.length===0&&S.length===0&&l.jsxs("div",{className:"empty-state",children:[l.jsx(or,{size:32}),l.jsx("p",{children:"No MCP servers available"})]})]})]})]}),l.jsx("div",{className:"tool-editor",children:f?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"editor-header",children:[l.jsx(Is,{size:20,style:{color:"var(--accent-secondary)"}}),l.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:f.name}),l.jsx("span",{className:"badge badge-muted",children:"Built-in"})]}),l.jsxs("div",{className:"builtin-tool-info",children:[l.jsxs("div",{className:"info-section",children:[l.jsx("h4",{children:"Description"}),l.jsx("p",{children:f.description||"No description available."})]}),l.jsxs("div",{className:"info-section",children:[l.jsx("h4",{children:"Usage"}),l.jsx("p",{children:"This is a built-in tool provided by ADK. Add it to any LLM agent's tools list to enable it."}),l.jsxs("code",{children:['tools: ["',f.name,'"]']})]}),l.jsxs("div",{className:"info-section",children:[l.jsx("h4",{children:"Note"}),l.jsx("p",{children:"Built-in tools are read-only and cannot be modified. Create a custom tool if you need different behavior."})]})]})]}):T?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"editor-header",children:[l.jsx(Kt,{size:20,style:{color:"var(--accent-primary)"}}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx("input",{type:"text",value:T.name,onChange:F=>ne({name:F.target.value}),placeholder:"Tool name",style:{borderColor:D?"var(--error)":void 0}}),D&&l.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:D})]})]}),l.jsxs("div",{className:"editor-meta",children:[l.jsxs("div",{className:"meta-field grow",children:[l.jsx("label",{children:"Description"}),l.jsx("input",{type:"text",value:T.description,onChange:F=>ne({description:F.target.value}),placeholder:"What does this tool do?"})]}),l.jsxs("div",{className:"meta-field",children:[l.jsx("label",{children:"Module Path"}),l.jsx("input",{type:"text",value:T.module_path,onChange:F=>ne({module_path:F.target.value}),placeholder:"tools.custom",style:{width:180}})]})]}),l.jsxs("div",{className:"code-actions",children:[l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:de,disabled:O||!T.name||!T.description,title:!T.name||!T.description?"Add a name and description first":"Generate code using AI",children:O?l.jsxs(l.Fragment,{children:[l.jsx(Dr,{size:14,className:"spinning"}),"Generating..."]}):l.jsxs(l.Fragment,{children:[l.jsx(Wi,{size:14}),"Write Tool"]})}),l.jsx("span",{className:"action-hint",children:"AI will generate code based on the tool name, description, and selected state keys"})]}),l.jsx("div",{className:"code-editor",children:l.jsx($r,{height:"100%",language:"python",theme:"vs-dark",value:d,onChange:ie,onMount:X,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12}}})}),l.jsxs("div",{className:"state-keys-panel",children:[l.jsxs("h4",{children:[l.jsx(Yc,{size:14})," State Keys Used"]}),l.jsx("div",{className:"state-key-chips",children:t.app.state_keys.length===0?l.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"No state keys defined. Add them in App Config."}):t.app.state_keys.map(F=>{const ue=T.state_keys_used.includes(F.name);return l.jsxs("label",{className:`state-key-chip ${ue?"selected":""}`,title:F.description,children:[l.jsx("input",{type:"checkbox",checked:ue,onChange:Se=>{const st=Se.target.checked?[...T.state_keys_used,F.name]:T.state_keys_used.filter(nr=>nr!==F.name);ne({state_keys_used:st})}}),F.name,l.jsxs("span",{style:{color:"var(--text-muted)",fontSize:11},children:["(",F.type,")"]})]},F.name)})})]})]}):y?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"editor-header",children:[l.jsx(or,{size:20,style:{color:"var(--accent-secondary)"}}),l.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:y.name}),l.jsx("span",{className:"badge badge-info",children:y.connection_type}),l.jsx("span",{className:"badge badge-muted",children:"Template"}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>he(y),children:[l.jsx(Fe,{size:14}),"Add to Project"]})]}),l.jsxs("div",{className:"known-server-preview",children:[l.jsxs("div",{className:"preview-section",children:[l.jsx("h4",{children:"Description"}),l.jsx("p",{children:y.description})]}),l.jsxs("div",{className:"preview-section",children:[l.jsx("h4",{children:"Command"}),l.jsxs("code",{children:[y.command," ",($t=y.args)==null?void 0:$t.join(" ")]})]}),y.env&&Object.keys(y.env).length>0&&l.jsxs("div",{className:"preview-section",children:[l.jsx("h4",{children:"Required Environment Variables"}),l.jsx("div",{className:"env-vars",children:Object.entries(y.env).map(([F,ue])=>l.jsxs("div",{className:"env-var",children:[l.jsx("code",{children:F}),ue?l.jsx("span",{className:"env-value",children:ue}):l.jsx("span",{className:"env-required",children:"Required"})]},F))})]}),y.tool_filter&&y.tool_filter.length>0&&l.jsxs("div",{className:"preview-section",children:[l.jsxs("h4",{children:["Available Tools (",y.tool_filter.length,")"]}),l.jsx("div",{className:"tool-badges",children:y.tool_filter.map(F=>l.jsx("span",{className:"tool-badge",children:F},F))})]}),l.jsxs("div",{className:"preview-section",children:[l.jsx("h4",{children:"Configuration Preview"}),l.jsx("pre",{className:"config-preview",children:JSON.stringify(y,null,2)})]})]})]}):I?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"editor-header",children:[l.jsx(or,{size:20,style:{color:"var(--accent-primary)"}}),l.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:I.name}),l.jsx("span",{className:"badge badge-info",children:I.connection_type}),P&&l.jsx("span",{className:"unsaved-badge",children:"Unsaved"}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:vt,disabled:_,title:"Test connection and discover available tools",children:[_?l.jsx(Dr,{size:14,className:"spin"}):l.jsx(Ud,{size:14}),_?"Testing...":"Test Connection"]}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:Ze,disabled:!P,children:[l.jsx(Xc,{size:14}),"Save"]})]}),g&&l.jsx("div",{className:`mcp-test-result ${g.success?"success":"error"}`,children:g.success?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"test-result-header",children:["✓ Connected! Found ",g.tools.length," tools"]}),g.tools.length>0&&l.jsxs("div",{className:"test-result-tools",children:[l.jsx("strong",{children:"Available tools:"}),l.jsx("ul",{children:g.tools.map(F=>l.jsxs("li",{children:[l.jsx("code",{children:F.name}),F.description&&l.jsxs("span",{children:[" — ",F.description]})]},F.name))}),l.jsx("p",{className:"hint",children:'The tool_filter has been updated with these tools. Click "Save" to apply.'})]})]}):l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"test-result-header",children:"✗ Connection failed"}),l.jsx("div",{className:"test-result-error",children:g.error})]})}),l.jsx("div",{className:"mcp-info",children:l.jsx("p",{children:'Configure your MCP server using JSON. Click "Test Connection" to verify and discover available tools.'})}),l.jsx("div",{className:"code-editor",children:l.jsx($r,{height:"100%",language:"json",theme:"vs-dark",value:x,onChange:ce,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},formatOnPaste:!0}})}),l.jsxs("div",{className:"mcp-help",children:[l.jsx("h4",{children:"Schema Reference"}),l.jsxs("div",{className:"schema-fields",children:[l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"name"}),l.jsx("span",{children:"Unique identifier for this server"})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"description"}),l.jsx("span",{children:"Human-readable description"})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"connection_type"}),l.jsx("span",{children:'"stdio" | "sse" | "http"'})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"command"}),l.jsx("span",{children:"Command to run (for stdio)"})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"args"}),l.jsx("span",{children:"Array of command arguments"})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"env"}),l.jsx("span",{children:"Environment variables object"})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"url"}),l.jsx("span",{children:"Server URL (for sse/http)"})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"tool_filter"}),l.jsx("span",{children:"Array of tool names to include (null/omit = all tools, [] = no tools)"})]})]})]})]}):l.jsxs("div",{className:"empty-state",children:[l.jsx(zn,{size:48}),l.jsxs("p",{children:["Select a tool to view",l.jsx("br",{}),"or create a new custom tool"]})]})})]})}function YS(){return`callback_${Date.now().toString(36)}`}function Hp(e){return/^[a-zA-Z0-9_]+$/.test(e)}function Hg(e){switch(e){case"before_agent":case"after_agent":return`from google.adk.agents.callback_context import CallbackContext
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
`;default:return Hg("before_agent")}}function XS({onSelectCallback:e}){var O,$;const{project:t,updateProject:n,addCustomCallback:r,updateCustomCallback:i,removeCustomCallback:o}=Nt(),[a,s]=C.useState(""),[c,u]=C.useState(null),[d,p]=C.useState(null),[f,m]=C.useState(!1),w=C.useRef(null);if(!t)return null;const j=t.custom_callbacks||[],z=j.find(_=>_.id===c);function h(_){u(_),e==null||e(_)}C.useEffect(()=>{z?(s(z.code),p(null)):s("")},[c,z]);function x(){const _=YS(),v={id:_,name:"new_callback",description:"",module_path:"callbacks.custom",code:Hg("before_agent"),state_keys_used:[]};r(v),h(_)}function b(_,v){v.stopPropagation(),confirm("Delete this callback?")&&(o(_),c===_&&(e==null||e(null),u(null),s("")))}function P(){if(!c)return;const _=j.find(E=>E.id===c);if(!_)return;const v=_.name.trim();if(!v){alert("Please enter a name");return}if(!Hp(v)){p("Name must contain only alphanumeric characters and underscores");return}if(j.find(E=>E.name===v&&E.id!==_.id)){p("A callback with this name already exists");return}i(_.id,{code:a,name:v,description:_.description,module_path:_.module_path,state_keys_used:_.state_keys_used}),p(null)}function k(_,v){w.current=v;try{Wg(v,{endpoint:"/api/code-completion",language:"python"})}catch(g){console.warn("Failed to register Monacopilot completion:",g)}}async function y(){if(z){m(!0);try{let _="before_agent";const v=z.name.toLowerCase(),g=z.description.toLowerCase();v.includes("after_agent")||g.includes("after agent")?_="after_agent":v.includes("before_model")||g.includes("before model")?_="before_model":v.includes("after_model")||g.includes("after model")?_="after_model":v.includes("before_tool")||g.includes("before tool")?_="before_tool":v.includes("after_tool")||g.includes("after tool")?_="after_tool":(v.includes("before_agent")||g.includes("before agent"))&&(_="before_agent");const E=await Dh(t.id,z.name,z.description,_,z.state_keys_used);E.success&&E.code?(s(E.code),i(z.id,{code:E.code})):(console.error("Failed to generate callback code:",E.error),alert("Failed to generate callback code: "+(E.error||"Unknown error")))}catch(_){console.error("Error generating callback code:",_),alert("Error generating callback code: "+_.message)}finally{m(!1)}}}const L=(($=(O=t.app)==null?void 0:O.state_keys)==null?void 0:$.map(_=>_.name))||[];return l.jsxs("div",{className:"tools-panel",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("div",{className:"tools-sidebar",children:[l.jsxs("div",{className:"tools-sidebar-header",children:[l.jsx("h3",{children:"Callbacks"}),l.jsx("button",{className:"btn btn-primary btn-sm",onClick:x,title:"Add Callback",children:l.jsx(Fe,{size:16})})]}),l.jsx("div",{className:"tools-list",children:j.length===0?l.jsx("div",{style:{padding:"16px",color:"var(--text-secondary)",fontSize:"14px"},children:"No callbacks yet. Click + to add one."}):j.map(_=>l.jsxs("div",{className:`tool-item ${c===_.id?"selected":""}`,onClick:()=>h(_.id),children:[l.jsxs("div",{style:{flex:1},children:[l.jsx("div",{className:"tool-item-name",children:_.name}),_.description&&l.jsx("div",{className:"tool-item-type",style:{fontSize:"11px",color:"var(--text-secondary)",marginTop:"2px"},children:_.description})]}),l.jsx("div",{className:"tool-item-actions",children:l.jsx("button",{className:"btn btn-icon btn-sm",onClick:v=>b(_.id,v),title:"Delete",children:l.jsx(Oe,{size:14})})})]},_.id))})]}),l.jsx("div",{className:"tools-editor",children:z?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"tools-editor-header",children:[l.jsx("h3",{children:"Edit Callback"}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:P,children:[l.jsx(Xc,{size:16,style:{marginRight:"6px"}}),"Save"]})]}),l.jsxs("div",{className:"tools-editor-content",style:{padding:"16px",overflowY:"auto"},children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Name"}),l.jsx("input",{type:"text",value:z.name,onChange:_=>{const v=_.target.value;i(z.id,{name:v}),d&&Hp(v)&&p(null)},className:d?"error":""}),d&&l.jsx("div",{className:"error-message",children:d})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Description"}),l.jsx("textarea",{value:z.description,onChange:_=>i(z.id,{description:_.target.value}),rows:2,placeholder:"Describe what this callback does..."})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Module Path"}),l.jsx("input",{type:"text",value:z.module_path,onChange:_=>i(z.id,{module_path:_.target.value}),placeholder:"callbacks.custom"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"State Keys Used"}),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"8px"},children:L.map(_=>{const v=z.state_keys_used.includes(_);return l.jsxs("button",{type:"button",className:`btn btn-sm ${v?"btn-primary":"btn-secondary"}`,onClick:()=>{const g=v?z.state_keys_used.filter(E=>E!==_):[...z.state_keys_used,_];i(z.id,{state_keys_used:g})},children:[l.jsx(Yc,{size:12,style:{marginRight:"4px"}}),_]},_)})}),L.length===0&&l.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"12px",marginTop:"4px"},children:"No state keys defined in App Config"})]}),l.jsxs("div",{className:"form-group",children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[l.jsx("label",{children:"Code"}),l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:y,disabled:f||!z.name,title:z.name?"Generate code using AI":"Add a name first",children:f?l.jsxs(l.Fragment,{children:[l.jsx(Dr,{size:14,className:"spinning"}),"Generating..."]}):l.jsxs(l.Fragment,{children:[l.jsx(Wi,{size:14}),"Generate"]})})]}),l.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"8px"},children:"AI will generate code based on the callback name, description, and selected state keys"}),l.jsx("div",{className:"code-editor-container",children:l.jsx($r,{height:"100%",language:"python",theme:"vs-dark",value:a,onChange:_=>s(_||""),onMount:k,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0}})})]})]})]}):l.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)"},children:"Select a callback to edit, or create a new one"})})]})}const qp={agent_start:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},agent_end:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},tool_call:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},tool_result:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},model_call:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},model_response:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},state_change:{bg:"#3d0d1f",fg:"#fda4af",border:"#f43f5e"},transfer:{bg:"#0d2d3d",fg:"#7dd3fc",border:"#0ea5e9"},callback_start:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},callback_end:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"}},ZS={agent_start:As,agent_end:As,tool_call:Kt,tool_result:Kt,model_call:Qc,model_response:Wh,state_change:Kn,transfer:Kh,callback_start:zn,callback_end:zn};function e_(e){var t,n,r,i,o,a,s,c,u,d,p,f,m,w,j,z,h,x,b,P,k;switch(e.event_type){case"agent_start":return`START ${e.agent_name}`;case"agent_end":return(t=e.data)!=null&&t.error?`END ${e.agent_name} [ERROR]`:`END ${e.agent_name}`;case"tool_call":const L=Object.entries(((n=e.data)==null?void 0:n.args)||{}).map(([V,S])=>{const W=S!=null?JSON.stringify(S):"null";return`${V}=${W.slice(0,20)}`}).join(", ")||"";return`CALL ${((r=e.data)==null?void 0:r.tool_name)||"unknown"}(${L.slice(0,60)}${L.length>60?"...":""})`;case"tool_result":const O=(i=e.data)==null?void 0:i.result;let $="";if((a=(o=O==null?void 0:O.content)==null?void 0:o[0])!=null&&a.text)$=String(O.content[0].text).slice(0,60);else if(typeof O=="string")$=O.slice(0,60);else if(O!=null){const V=JSON.stringify(O);$=V?V.slice(0,60):""}else $="";return`RESULT ${((s=e.data)==null?void 0:s.tool_name)||"unknown"} → ${$}${$.length>=60?"...":""}`;case"model_call":return`LLM_REQ ${((u=(c=e.data)==null?void 0:c.contents)==null?void 0:u.length)||0} msgs, ${((d=e.data)==null?void 0:d.tool_count)||0} tools`;case"model_response":const _=((f=(p=e.data)==null?void 0:p.response_content)==null?void 0:f.parts)||((m=e.data)==null?void 0:m.parts)||[],v=_.find(V=>(V==null?void 0:V.type)==="function_call");if(v)return`LLM_RSP → ${v.name||"unknown"}()`;const g=_.find(V=>(V==null?void 0:V.type)==="text");if(g!=null&&g.text){const V=String(g.text);return`LLM_RSP "${V.slice(0,50)}${V.length>50?"...":""}"`}return`LLM_RSP (${((w=e.data)==null?void 0:w.finish_reason)||"complete"})`;case"state_change":return`STATE ${Object.keys(((j=e.data)==null?void 0:j.state_delta)||{}).join(", ")}`;case"transfer":return`TRANSFER → ${((z=e.data)==null?void 0:z.target)||"unknown"}`;case"callback_start":const D=((h=e.data)==null?void 0:h.callback_name)||"unknown",R=((x=e.data)==null?void 0:x.callback_type)||"";return`CALLBACK START ${R?`[${R}]`:""} ${D}`;case"callback_end":const A=((b=e.data)==null?void 0:b.callback_name)||"unknown",T=((P=e.data)==null?void 0:P.callback_type)||"",I=(k=e.data)!=null&&k.error?" [ERROR]":"";return`CALLBACK END ${T?`[${T}]`:""} ${A}${I}`;default:return e.event_type.toUpperCase()}}function t_(e,t){const n=e-t;return n<1?`+${(n*1e3).toFixed(0)}ms`:n<60?`+${n.toFixed(2)}s`:`+${Math.floor(n/60)}m${(n%60).toFixed(0)}s`}function n_({event:e}){var o,a,s,c,u,d,p,f,m,w,j,z,h,x,b,P;const[t,n]=C.useState(new Set(["instruction","messages","result","response","state_delta","data"])),r=k=>{const y=new Set(t);y.has(k)?y.delete(k):y.add(k),n(y)},i=(k,y=0,L=!1)=>{const O="  ".repeat(y),$="  ".repeat(y+1);if(k===null)return l.jsx("span",{className:"json-null",children:"null"});if(k===void 0)return l.jsx("span",{className:"json-undefined",children:"undefined"});if(typeof k=="boolean")return l.jsx("span",{className:"json-boolean",children:k.toString()});if(typeof k=="number")return l.jsx("span",{className:"json-number",children:k});if(typeof k=="string"){const _=k.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\t/g,"\\t");return _.length>300&&y>0?l.jsxs("span",{className:"json-string",children:['"',_.slice(0,300),'..." ',l.jsxs("span",{className:"json-truncated",children:["(",k.length," chars)"]})]}):l.jsxs("span",{className:"json-string",children:['"',_,'"']})}if(Array.isArray(k))return k.length===0?l.jsx("span",{className:"json-bracket",children:"[]"}):k.every(v=>v===null||typeof v!="object")&&k.length<=3?l.jsxs("span",{className:"json-inline",children:[l.jsx("span",{className:"json-bracket",children:"["}),k.map((v,g)=>l.jsxs("span",{children:[i(v,y+1,!0),g<k.length-1&&l.jsx("span",{className:"json-comma",children:", "})]},g)),l.jsx("span",{className:"json-bracket",children:"]"})]}):l.jsxs("span",{className:"json-block",children:[l.jsx("span",{className:"json-bracket",children:"["}),k.map((v,g)=>l.jsxs("span",{children:[`
`+$,i(v,y+1),g<k.length-1&&l.jsx("span",{className:"json-comma",children:","})]},g)),`
`+O,l.jsx("span",{className:"json-bracket",children:"]"})]});if(typeof k=="object"){const _=Object.entries(k);return _.length===0?l.jsx("span",{className:"json-bracket",children:"{}"}):_.length<=2&&_.every(([,g])=>g===null||typeof g!="object")&&L?l.jsxs("span",{className:"json-inline",children:[l.jsx("span",{className:"json-bracket",children:"{"}),_.map(([g,E],D)=>l.jsxs("span",{children:[l.jsxs("span",{className:"json-key",children:['"',g,'"']}),l.jsx("span",{className:"json-colon",children:": "}),i(E,y+1,!0),D<_.length-1&&l.jsx("span",{className:"json-comma",children:", "})]},g)),l.jsx("span",{className:"json-bracket",children:"}"})]}):l.jsxs("span",{className:"json-block",children:[l.jsx("span",{className:"json-bracket",children:"{"}),_.map(([g,E],D)=>l.jsxs("span",{children:[`
`+$,l.jsxs("span",{className:"json-key",children:['"',g,'"']}),l.jsx("span",{className:"json-colon",children:": "}),i(E,y+1),D<_.length-1&&l.jsx("span",{className:"json-comma",children:","})]},g)),`
`+O,l.jsx("span",{className:"json-bracket",children:"}"})]})}return String(k)};return l.jsxs("div",{className:"event-detail",children:[l.jsxs("div",{className:"detail-header",children:[l.jsx("span",{className:"detail-type",children:e.event_type}),l.jsx("span",{className:"detail-agent",children:e.agent_name}),l.jsx("span",{className:"detail-time",children:new Date(e.timestamp*1e3).toISOString()})]}),l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("data"),children:[t.has("data")?l.jsx(Lt,{size:12}):l.jsx(At,{size:12}),l.jsx("span",{children:"Event Data"})]}),t.has("data")&&l.jsx("div",{className:"section-content json-viewer",children:i(e.data)})]}),e.event_type==="agent_start"&&((o=e.data)==null?void 0:o.instruction)&&l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("instruction"),children:[t.has("instruction")?l.jsx(Lt,{size:12}):l.jsx(At,{size:12}),l.jsx("span",{children:"Instruction"}),l.jsxs("span",{className:"char-count",children:[e.data.instruction.length," chars"]})]}),t.has("instruction")&&l.jsx("div",{className:"section-content",children:l.jsx("pre",{className:"instruction-text",children:e.data.instruction})})]}),e.event_type==="model_call"&&((a=e.data)==null?void 0:a.contents)&&l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("messages"),children:[t.has("messages")?l.jsx(Lt,{size:12}):l.jsx(At,{size:12}),l.jsxs("span",{children:["Messages (",e.data.contents.length,")"]})]}),t.has("messages")&&l.jsx("div",{className:"section-content",children:e.data.contents.map((k,y)=>{var L;return l.jsxs("div",{className:"message-item",children:[l.jsx("span",{className:`message-role ${k.role}`,children:k.role}),l.jsx("div",{className:"message-parts",children:(L=k.parts)==null?void 0:L.map((O,$)=>l.jsxs("div",{className:"message-part",children:[O.text&&l.jsx("pre",{children:O.text}),O.function_call&&l.jsxs("div",{className:"function-call",children:[l.jsx("strong",{children:O.function_call.name}),l.jsx("pre",{children:JSON.stringify(O.function_call.args,null,2)})]}),O.function_response&&l.jsxs("div",{className:"function-response",children:[l.jsx("strong",{children:O.function_response.name}),l.jsx("pre",{children:JSON.stringify(O.function_response.response,null,2)})]})]},$))})]},y)})})]}),e.event_type==="tool_result"&&l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("result"),children:[t.has("result")?l.jsx(Lt,{size:12}):l.jsx(At,{size:12}),l.jsx("span",{children:"Tool Result"})]}),t.has("result")&&l.jsx("div",{className:"section-content",children:l.jsx("pre",{className:"result-content",children:((d=(u=(c=(s=e.data)==null?void 0:s.result)==null?void 0:c.content)==null?void 0:u[0])==null?void 0:d.text)||(typeof((p=e.data)==null?void 0:p.result)=="string"?e.data.result:JSON.stringify((f=e.data)==null?void 0:f.result,null,2))})})]}),e.event_type==="model_response"&&((m=e.data)==null?void 0:m.parts)&&l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("response"),children:[t.has("response")?l.jsx(Lt,{size:12}):l.jsx(At,{size:12}),l.jsxs("span",{children:["Response (",e.data.parts.length," part",e.data.parts.length!==1?"s":"",")"]}),e.data.token_counts&&l.jsxs("span",{className:"token-badge",children:[e.data.token_counts.input,"↑ ",e.data.token_counts.output,"↓"]})]}),t.has("response")&&l.jsx("div",{className:"section-content",children:e.data.parts.map((k,y)=>l.jsxs("div",{className:"response-part",children:[k.type==="text"&&k.text&&l.jsx("pre",{className:"response-text",children:k.text}),k.type==="function_call"&&l.jsxs("div",{className:"function-call",children:[l.jsxs("strong",{children:["→ ",k.name,"()"]}),k.args&&Object.keys(k.args).length>0&&l.jsx("pre",{children:JSON.stringify(k.args,null,2)})]}),k.thought&&l.jsx("div",{className:"thought-indicator",children:"💭 Thinking"})]},y))})]}),(e.event_type==="callback_start"||e.event_type==="callback_end")&&l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("callback_info"),children:[t.has("callback_info")?l.jsx(Lt,{size:12}):l.jsx(At,{size:12}),l.jsx("span",{children:"Callback Information"})]}),t.has("callback_info")&&l.jsxs("div",{className:"section-content",children:[l.jsxs("div",{children:[l.jsx("strong",{children:"Name:"})," ",((w=e.data)==null?void 0:w.callback_name)||"unknown"]}),l.jsxs("div",{children:[l.jsx("strong",{children:"Type:"})," ",((j=e.data)==null?void 0:j.callback_type)||"unknown"]}),l.jsxs("div",{children:[l.jsx("strong",{children:"Module Path:"})," ",((z=e.data)==null?void 0:z.module_path)||"unknown"]}),((h=e.data)==null?void 0:h.error)&&l.jsxs("div",{style:{color:"#ef4444",marginTop:"8px"},children:[l.jsxs("div",{children:[l.jsx("strong",{children:"Error:"})," ",e.data.error]}),((x=e.data)==null?void 0:x.error_type)&&l.jsxs("div",{style:{marginTop:"4px",fontSize:"0.9em",opacity:.8},children:[l.jsx("strong",{children:"Type:"})," ",e.data.error_type]}),((b=e.data)==null?void 0:b.stack_trace)&&l.jsxs("div",{style:{marginTop:"8px"},children:[l.jsx("strong",{children:"Stack Trace:"}),l.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"300px",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:e.data.stack_trace})]})]})]})]}),e.event_type==="state_change"&&((P=e.data)==null?void 0:P.state_delta)&&l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("state_delta"),children:[t.has("state_delta")?l.jsx(Lt,{size:12}):l.jsx(At,{size:12}),l.jsxs("span",{children:["State Changes (",Object.keys(e.data.state_delta).length,")"]})]}),t.has("state_delta")&&l.jsx("div",{className:"section-content",children:Object.entries(e.data.state_delta).map(([k,y])=>l.jsxs("div",{className:"state-delta-item",children:[l.jsx("div",{className:"state-delta-key",children:k}),l.jsx("pre",{className:"state-delta-value",children:typeof y=="string"?y:JSON.stringify(y,null,2)})]},k))})]})]})}function r_({content:e,title:t,onClose:n}){return l.jsxs("div",{className:"modal-overlay",onClick:n,children:[l.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[l.jsxs("div",{className:"modal-header",children:[l.jsx("h3",{children:t}),l.jsx("button",{className:"modal-close",onClick:n,children:"×"})]}),l.jsx("div",{className:"modal-body markdown-content",children:l.jsx($g,{children:e})})]}),l.jsx("style",{children:`
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
      `})]})}function i_({events:e,selectedEventIndex:t,project:n}){const[r,i]=C.useState(null),o=C.useMemo(()=>{var u;const s={};return(u=n==null?void 0:n.app)!=null&&u.state_keys&&n.app.state_keys.forEach(d=>{s[d.name]={value:void 0,timestamp:null,defined:!0,description:d.description,type:d.type}}),n!=null&&n.agents&&n.agents.forEach(d=>{if(d.type==="LlmAgent"&&d.output_key){const p=d.output_key;s[p]||(s[p]={value:void 0,timestamp:null,defined:!0,description:`Output from ${d.name}`,type:"string"})}}),(t!==null?e.slice(0,t+1):e).filter(d=>d.event_type==="state_change").forEach(d=>{var p;(p=d.data)!=null&&p.state_delta&&Object.entries(d.data.state_delta).forEach(([f,m])=>{var w;s[f]={...s[f],value:m,timestamp:d.timestamp,defined:((w=s[f])==null?void 0:w.defined)??!1}})}),s},[e,t,n]),a=Object.entries(o);return l.jsxs(l.Fragment,{children:[r&&l.jsx(r_,{content:r.content,title:r.title,onClose:()=>i(null)}),l.jsxs("div",{className:"state-snapshot",children:[l.jsx("style",{children:`
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
      `}),l.jsx("div",{className:"state-header",children:t!==null?`State after event #${t}`:e.length>0?"State at end of run":"Defined State Keys"}),a.length===0?l.jsx("div",{className:"state-empty",children:"No state keys defined"}):a.map(([s,{value:c,timestamp:u,defined:d,description:p,type:f}])=>l.jsxs("div",{className:`state-entry ${c===void 0?"unset":""}`,children:[l.jsxs("div",{className:"state-key",children:[s,f&&l.jsxs("span",{className:"state-type",children:["(",f,")"]})]}),l.jsx("div",{className:"state-value",onClick:()=>{if(c!==void 0){const m=typeof c=="string"?c:JSON.stringify(c,null,2);i({content:m,title:s})}},style:{cursor:c!==void 0?"pointer":"default"},title:c!==void 0?"Click to view in markdown viewer":void 0,children:c===void 0?"(not set)":typeof c=="string"?c:JSON.stringify(c,null,2)}),p&&l.jsx("div",{className:"state-desc",children:p}),u&&l.jsx("div",{className:"state-time",children:new Date(u*1e3).toLocaleTimeString()})]},s))]})]})}let Gs=null,Qs=null;(async()=>{try{Gs=(await Gh(()=>import("./jq-CLdsJBBn.js").then(t=>t.j),[])).default}catch(e){console.warn("jq-web failed to load:",e.message),Qs=e.message}})();function Ia(e){if(!e)return{text:"",isError:!1};if(e.success===!1)return{text:e.error||"Unknown error",isError:!0};let t=e.result||e;if(typeof t=="string")try{const n=t.replace(/'/g,'"').replace(/True/g,"true").replace(/False/g,"false").replace(/None/g,"null");t=JSON.parse(n)}catch{return{text:t,isError:!1}}return t.content&&Array.isArray(t.content)?{text:t.content.filter(r=>r.type==="text").map(r=>r.text).join(`
`),isError:t.isError===!0}:{text:typeof t=="string"?t:JSON.stringify(t,null,2),isError:!1}}function Kp(e,t){if(!t||!t.trim())return e;const n=t.trim();let r=e;try{r=JSON.parse(e)}catch{}if(n.startsWith("js:")){const i=n.slice(3).trim();try{const a=new Function("value","data",`return ${i}`)(e,r);return typeof a=="string"?a:JSON.stringify(a,null,2)}catch(o){return`[JS error: ${o}]`}}if(Gs)try{const i=Gs.json(r,n);return i==null?"[No match]":typeof i=="string"?i:JSON.stringify(i,null,2)}catch(i){if(!n.startsWith("."))try{const a=new Function("value","data",`return ${n}`)(e,r);return typeof a=="string"?a:JSON.stringify(a,null,2)}catch{}return`[jq error: ${i.message||i}]`}else{if(Qs){if(n.startsWith(".")&&!n.includes("|"))try{const i=n.slice(1).split(".").filter(Boolean);let o=r;for(const a of i){const s=a.match(/^(\w+)?\[(\d+)\]$/);s?(s[1]&&(o=o[s[1]]),o=o[parseInt(s[2])]):o=o[a]}return typeof o=="string"?o:JSON.stringify(o,null,2)}catch{}try{const o=new Function("value","data",`return ${n}`)(e,r);return typeof o=="string"?o:JSON.stringify(o,null,2)}catch(i){return`[jq not loaded: ${Qs}. JS fallback failed: ${i.message}]`}}return"[jq loading...]"}}function o_({project:e,selectedEventIndex:t}){var de;const{watches:n,updateWatch:r,addWatch:i,removeWatch:o,runEvents:a}=Nt(),[s,c]=C.useState(!1),[u,d]=C.useState(null),[p,f]=C.useState({}),[m,w]=C.useState(new Set),[j,z]=C.useState(""),[h,x]=C.useState(""),[b,P]=C.useState({}),[k,y]=C.useState(""),[L,O]=C.useState([]),[$,_]=C.useState(null),[v,g]=C.useState(null),[E,D]=C.useState(!1);C.useEffect(()=>{Gc().then(O).catch(console.error)},[]);const R=C.useMemo(()=>{const U=e.mcp_servers||[],X=new Set(U.map(he=>he.name)),oe=L.filter(he=>!X.has(he.name));return[...U,...oe]},[e.mcp_servers,L]),A=C.useCallback(async U=>{if(!(p[U]||m.has(U))){w(X=>new Set([...X,U]));try{const X=await ze(`/projects/${e.id}/mcp-servers/${encodeURIComponent(U)}/test-connection`,{method:"POST"});X.success&&f(oe=>({...oe,[U]:X.tools}))}catch(X){console.error("Failed to load tools:",X)}finally{w(X=>{const oe=new Set(X);return oe.delete(U),oe})}}},[e.id,p,m]);C.useEffect(()=>{var he;if(u)return;if(!j||!h){P({});return}const X=(p[j]||[]).find(xe=>xe.name===h);if(!((he=X==null?void 0:X.parameters)!=null&&he.properties)){P({});return}const oe={};Object.entries(X.parameters.properties).forEach(([xe,ce])=>{ce.type==="string"?oe[xe]=ce.default||"":ce.type==="number"||ce.type==="integer"?oe[xe]=ce.default||0:ce.type==="boolean"?oe[xe]=ce.default||!1:oe[xe]=ce.default||null}),P(oe)},[j,h,p,u]);const T=()=>{d(null),z(""),x(""),P({}),y(""),_(null),g(null),c(!0)},I=U=>{if(d(U.id),z(U.serverName),x(U.toolName),P({...U.args}),y(U.transform||""),U.result){const{text:X}=Ia(U.result);_(X),g(null)}else _(null),g(null);p[U.serverName]||A(U.serverName),c(!0)},V=async()=>{if(!(!j||!h)){D(!0),g(null);try{const U=await ze(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:j,tool_name:h,arguments:b})}),{text:X,isError:oe}=Ia(U);oe?(g(X),_(null)):(_(X),g(null))}catch(U){g(String(U)),_(null)}finally{D(!1)}}},S=C.useMemo(()=>$?!k||!k.trim()?$:Kp($,k):null,[$,k]),W=()=>{if(!(!j||!h)){if(u){r(u,{serverName:j,toolName:h,args:{...b},transform:k||void 0});const U=n.find(X=>X.id===u);U&&N({...U,serverName:j,toolName:h,args:b,transform:k||void 0,history:U.history||[]})}else{const U={id:`watch-${Date.now()}`,serverName:j,toolName:h,args:{...b},transform:k||void 0,history:[]};i(U),N(U)}c(!1)}},G=U=>{o(U)},N=C.useCallback(async(U,X)=>{r(U.id,{isLoading:!0,error:void 0});const oe=X??a.length-1,he=Date.now();try{const xe=await ze(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:U.serverName,tool_name:U.toolName,arguments:U.args})}),ce={eventIndex:oe,timestamp:he,result:xe},Ze=[...U.history||[],ce];r(U.id,{result:xe,isLoading:!1,lastRun:he,history:Ze})}catch(xe){const ce={eventIndex:oe,timestamp:he,error:String(xe)},Ze=[...U.history||[],ce];r(U.id,{error:String(xe),isLoading:!1,lastRun:he,history:Ze})}},[e.id,r,a.length]),ne=()=>{n.forEach(U=>N(U))},ie=C.useMemo(()=>!j||!h?null:(p[j]||[]).find(X=>X.name===h),[j,h,p]);return l.jsxs("div",{className:"tool-watch-panel",children:[l.jsxs("div",{className:"watch-header",children:[l.jsx(Vi,{size:14}),l.jsx("span",{children:"Tool Watch"}),l.jsx("span",{className:"watch-auto-badge",title:"Watches auto-refresh on every event",children:"⚡ Auto"}),l.jsxs("div",{className:"watch-actions",children:[l.jsx("button",{className:"watch-btn",onClick:ne,title:"Refresh all",children:l.jsx(xn,{size:12})}),l.jsx("button",{className:"watch-btn",onClick:T,title:"Add watch",children:l.jsx(Fe,{size:12})})]})]}),n.length===0?l.jsxs("div",{className:"watch-empty",children:[l.jsx(Vi,{size:20,style:{opacity:.3}}),l.jsx("span",{children:"No watch expressions"}),l.jsxs("button",{className:"add-watch-btn",onClick:T,children:[l.jsx(Fe,{size:12})," Add Tool Watch"]})]}):l.jsx("div",{className:"watch-list",children:n.map(U=>{let X=U.result,oe=U.error;if(t!==null&&U.history&&U.history.length>0){const vt=U.history.filter(Ve=>Ve.eventIndex<=t);if(vt.length>0){const Ve=vt[vt.length-1];X=Ve.result,oe=Ve.error}else X=void 0,oe=void 0}const{text:he,isError:xe}=X?Ia(X):{text:"",isError:!1},ce=X?Kp(he,U.transform):"",Ze=oe||xe;return l.jsxs("div",{className:`watch-item ${Ze?"error":""}`,children:[l.jsxs("div",{className:"watch-item-header",children:[l.jsxs("span",{className:"watch-expr",children:[l.jsx("span",{className:"watch-server",children:U.serverName}),l.jsx("span",{className:"watch-tool",children:U.toolName}),Object.keys(U.args).length>0&&l.jsxs("span",{className:"watch-args",children:["(",Object.entries(U.args).map(([vt,Ve])=>`${vt}=${JSON.stringify(Ve)}`).join(", "),")"]}),t!==null&&l.jsxs("span",{className:"watch-time-indicator",children:["@",t]})]}),l.jsxs("div",{className:"watch-item-actions",children:[l.jsx("button",{onClick:()=>I(U),title:"Edit watch",children:l.jsx(Kt,{size:10})}),l.jsx("button",{onClick:()=>N(U),title:"Refresh",children:U.isLoading?l.jsx(xn,{size:10,className:"spin"}):l.jsx(xn,{size:10})}),l.jsx("button",{onClick:()=>G(U.id),title:"Remove",children:l.jsx(Oe,{size:10})})]})]}),l.jsx("div",{className:"watch-result",children:U.isLoading?l.jsx("span",{className:"loading",children:"Loading..."}):oe?l.jsx("span",{className:"error",children:oe}):X?l.jsx("pre",{className:xe?"error-text":"",children:ce}):l.jsx("span",{className:"no-result",children:t!==null?"No data at this event":"Not yet run"})})]},U.id)})}),s&&l.jsx("div",{className:"watch-dialog-overlay",onClick:()=>c(!1),children:l.jsxs("div",{className:"watch-dialog",onClick:U=>U.stopPropagation(),children:[l.jsxs("div",{className:"dialog-header",children:[l.jsx("span",{children:u?"Edit Watch":"Add Tool Watch"}),l.jsx("button",{onClick:()=>c(!1),children:l.jsx(l0,{size:14})})]}),l.jsxs("div",{className:"dialog-body",children:[l.jsxs("div",{className:"form-row",children:[l.jsx("label",{children:"MCP Server"}),l.jsxs("select",{value:j,onChange:U=>{z(U.target.value),u||x(""),U.target.value&&A(U.target.value)},children:[l.jsx("option",{value:"",children:"Select server..."}),R.map(U=>l.jsx("option",{value:U.name,children:U.name},U.name))]})]}),l.jsxs("div",{className:"form-row",children:[l.jsx("label",{children:"Tool"}),l.jsxs("select",{value:h,onChange:U=>x(U.target.value),disabled:!j||m.has(j),children:[l.jsx("option",{value:"",children:m.has(j)?"Loading tools...":"Select tool..."}),(p[j]||[]).map(U=>l.jsx("option",{value:U.name,children:U.name},U.name))]})]}),(ie==null?void 0:ie.description)&&l.jsx("div",{className:"tool-desc",children:ie.description}),((de=ie==null?void 0:ie.parameters)==null?void 0:de.properties)&&Object.keys(ie.parameters.properties).length>0&&l.jsxs("div",{className:"tool-args",children:[l.jsx("label",{children:"Arguments"}),Object.entries(ie.parameters.properties).map(([U,X])=>{var oe,he;return l.jsxs("div",{className:"arg-row",children:[l.jsxs("span",{className:"arg-name",children:[U,((oe=ie.parameters.required)==null?void 0:oe.includes(U))&&l.jsx("span",{className:"required",children:"*"})]}),l.jsx("input",{type:X.type==="number"||X.type==="integer"?"number":"text",value:typeof b[U]=="object"?JSON.stringify(b[U]):b[U]??"",onChange:xe=>P(ce=>({...ce,[U]:xe.target.value})),placeholder:((he=X.description)==null?void 0:he.slice(0,40))||U})]},U)})]}),j&&h&&l.jsxs("div",{className:"test-section",children:[l.jsxs("div",{className:"test-header",children:[l.jsx("label",{children:"Test & Preview"}),l.jsxs("button",{className:"test-btn",onClick:V,disabled:E,children:[E?l.jsx(xn,{size:12,className:"spin"}):l.jsx(Un,{size:12}),E?"Running...":"Test Run"]})]}),v&&l.jsxs("div",{className:"test-result error",children:[l.jsx("span",{className:"test-label",children:"Error:"}),l.jsx("pre",{children:v})]}),$&&l.jsxs("div",{className:"test-result",children:[l.jsx("span",{className:"test-label",children:"Raw Result:"}),l.jsx("pre",{children:$})]})]}),l.jsxs("div",{className:"form-row transform-row",children:[l.jsx("label",{children:"Transform (optional)"}),l.jsx("input",{type:"text",value:k,onChange:U=>y(U.target.value),placeholder:"e.g., .items[0].name or .content[].text"}),l.jsxs("div",{className:"transform-hints",children:[l.jsx("span",{className:"hint-title",children:"jq:"}),l.jsx("code",{onClick:()=>y(".items[0].name"),children:".items[0].name"}),l.jsx("code",{onClick:()=>y(".content[].text"),children:".content[].text"}),l.jsx("code",{onClick:()=>y(".result.content[0].text"),children:".result.content[0].text"}),l.jsx("code",{onClick:()=>y('.[] | select(.status == "active")'),children:".[] | select()"}),l.jsx("span",{className:"hint-title",children:"JS:"}),l.jsx("code",{onClick:()=>y("js:value.split('\\n')[0]"),children:"js:value.split('\\n')[0]"}),l.jsx("code",{onClick:()=>y("js:data.length"),children:"js:data.length"})]})]}),$&&k&&l.jsxs("div",{className:"transform-preview",children:[l.jsx("span",{className:"test-label",children:"Transform Preview:"}),l.jsx("pre",{className:S!=null&&S.startsWith("[Transform error")?"error":"",children:S})]})]}),l.jsxs("div",{className:"dialog-footer",children:[l.jsx("button",{className:"cancel-btn",onClick:()=>c(!1),children:"Cancel"}),l.jsx("button",{className:"add-btn",onClick:W,disabled:!j||!h,children:u?"Save Changes":"Add Watch"})]})]})})]})}function l_(){var nr;const{project:e,isRunning:t,setIsRunning:n,runEvents:r,addRunEvent:i,clearRunEvents:o,clearWatchHistories:a,runAgentId:s,setRunAgentId:c,watches:u,updateWatch:d,currentSessionId:p,setCurrentSessionId:f}=Nt(),[m,w]=C.useState(""),[j,z]=C.useState(null),[h,x]=C.useState(null),[b,P]=C.useState(null),[k,y]=C.useState(""),[L,O]=C.useState(new Set(["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_start","callback_end"])),[$,_]=C.useState(!0),[v,g]=C.useState(!0),[E,D]=C.useState(!1),[R,A]=C.useState(360),[T,I]=C.useState(!1),[V,S]=C.useState([]),[W,G]=C.useState(null),[N,ne]=C.useState(!1),ie=C.useRef(0),de=C.useCallback(async(B,Y)=>{if(!e)return;d(B.id,{isLoading:!0,error:void 0});const ee=Y??r.length-1,le=Date.now();try{const M=await ze(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:B.serverName,tool_name:B.toolName,arguments:B.args})}),H={eventIndex:ee,timestamp:le,result:M},Z=[...B.history||[],H];d(B.id,{result:M,isLoading:!1,lastRun:le,history:Z})}catch(M){const H={eventIndex:ee,timestamp:le,error:String(M)},Z=[...B.history||[],H];d(B.id,{error:String(M),isLoading:!1,lastRun:le,history:Z})}},[e==null?void 0:e.id,d,r.length]);C.useEffect(()=>{if(r.length>ie.current&&u.length>0){const B=r.length-1;u.forEach(Y=>{Y.isLoading||de(Y,B)})}ie.current=r.length},[r.length,u,de]),C.useEffect(()=>{s!==null&&(X(s),c(null))},[s,c]);const[U,X]=C.useState(null),oe=C.useRef(null),he=C.useRef(null);C.useEffect(()=>{if(!T)return;const B=ee=>{if(!he.current)return;const M=he.current.getBoundingClientRect().right-ee.clientX;A(Math.min(600,Math.max(200,M)))},Y=()=>{I(!1)};return document.addEventListener("mousemove",B),document.addEventListener("mouseup",Y),()=>{document.removeEventListener("mousemove",B),document.removeEventListener("mouseup",Y)}},[T]);const xe=C.useMemo(()=>r.length===0?{min:0,max:0}:{min:r[0].timestamp,max:r[r.length-1].timestamp},[r]),ce=C.useMemo(()=>r.filter((B,Y)=>{var ee,le,M;if(b&&(B.timestamp<b[0]||B.timestamp>b[1])||L.size>0&&!L.has(B.event_type))return!1;if($&&B.event_type==="model_response"){const H=((le=(ee=B.data)==null?void 0:ee.response_content)==null?void 0:le.parts)||((M=B.data)==null?void 0:M.parts)||[],Z=H.some(fe=>fe.type==="function_call"),ae=H.some(fe=>fe.type==="text");if(!Z&&!ae)return!1}return!(k&&!JSON.stringify(B).toLowerCase().includes(k.toLowerCase()))}),[r,b,L,k,$]),Ze=C.useMemo(()=>{var le;let B=0,Y=0;const ee=h!==null?h+1:r.length;for(let M=0;M<ee;M++){const H=r[M];H.event_type==="model_response"&&((le=H.data)!=null&&le.token_counts)&&(B+=H.data.token_counts.input||0,Y+=H.data.token_counts.output||0)}return{input:B,output:Y,total:B+Y}},[r,h]),vt=h!==null?r[h]:null;C.useEffect(()=>{if(!e){S([]);return}(async()=>{ne(!0);try{const Y=await Ls(e.id);S(Y)}catch(Y){console.error("Failed to load sessions:",Y),S([])}finally{ne(!1)}})()},[e]);const Ve=C.useCallback(async B=>{if(!e){G(null);return}if(!B){o(),a(),f(null),G(null),x(null),P(null);return}try{const Y=await Ph(e.id,B);o(),a(),f(Y.id),G(B),x(null),P(null);for(const ee of Y.events)i(ee)}catch(Y){alert(`Failed to load session: ${Y.message||"Unknown error"}`)}},[e,o,a,f,i]);C.useEffect(()=>{t&&oe.current&&(oe.current.scrollTop=oe.current.scrollHeight)},[r.length,t]);const $t=C.useCallback(()=>{if(!e||!m.trim()||t)return;j&&(j.close(),z(null)),p||(o(),a(),G(null)),n(!0),x(null),P(null);const B=Rh(e.id);z(B),B.onopen=()=>{B.send(JSON.stringify({message:m,agent_id:U||void 0,session_id:p||void 0}))},B.onmessage=Y=>{var le;const ee=JSON.parse(Y.data);if(ee.event_type==="agent_start"&&((le=ee.data)!=null&&le.session_id)){const M=ee.data.session_id;ee.data.session_reused,f(M),M&&V.some(H=>H.id===M)&&G(M)}else ee.type==="session_started"?(f(ee.session_id),ee.session_id&&V.some(M=>M.id===ee.session_id)&&G(ee.session_id)):ee.type==="completed"?(n(!1),B.close()):ee.type==="error"?(n(!1),i({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:ee.error}})):i(ee)},B.onerror=()=>{n(!1),i({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:"WebSocket connection error"}})},B.onclose=()=>{n(!1)}},[e,m,t,j,o,n,i,U,p]),F=C.useCallback(()=>{j==null||j.close(),n(!1)},[j,n]);C.useEffect(()=>{const B=Y=>{if((Y.metaKey||Y.ctrlKey)&&Y.key==="Enter"){Y.preventDefault(),$t();return}if(Y.key==="ArrowDown"||Y.key==="ArrowUp"){if(Y.target instanceof HTMLInputElement||Y.target instanceof HTMLTextAreaElement||(Y.preventDefault(),ce.length===0))return;if(Y.key==="ArrowDown")if(h===null){const ee=r.indexOf(ce[0]);x(ee)}else{const ee=ce.findIndex(le=>r.indexOf(le)===h);if(ee<ce.length-1){const le=r.indexOf(ce[ee+1]);x(le)}}else if(Y.key==="ArrowUp")if(h===null){const ee=r.indexOf(ce[ce.length-1]);x(ee)}else{const ee=ce.findIndex(le=>r.indexOf(le)===h);if(ee>0){const le=r.indexOf(ce[ee-1]);x(le)}}}};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[$t,ce,h,r]);const ue=C.useCallback(()=>{var M;if(r.length===0)return;const B={version:1,exportedAt:new Date().toISOString(),projectId:e==null?void 0:e.id,projectName:e==null?void 0:e.name,agentId:U||((M=e==null?void 0:e.app)==null?void 0:M.root_agent_id),events:r},Y=new Blob([JSON.stringify(B,null,2)],{type:"application/json"}),ee=URL.createObjectURL(Y),le=document.createElement("a");le.href=ee,le.download=`run-${(e==null?void 0:e.name)||"export"}-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,document.body.appendChild(le),le.click(),document.body.removeChild(le),URL.revokeObjectURL(ee)},[r,e,U]),Se=C.useCallback(async()=>{if(!p||!e){alert("No active session to save");return}try{const B=await Th(p);if(B.success){alert(B.message||"Session saved to memory successfully");try{const Y=await Ls(e.id);S(Y)}catch{}}else alert(`Failed to save to memory: ${B.error||"Unknown error"}`)}catch(B){alert(`Error saving to memory: ${B.message||"Unknown error"}`)}},[p,e]),st=C.useCallback(()=>{const B=document.createElement("input");B.type="file",B.accept=".json",B.onchange=async Y=>{var le;const ee=(le=Y.target.files)==null?void 0:le[0];if(ee)try{const M=await ee.text(),H=JSON.parse(M);if(!H.events||!Array.isArray(H.events)){alert("Invalid run file: missing events array");return}o(),a(),x(null),P(null),H.events.forEach(Z=>{i(Z)})}catch(M){alert(`Failed to load run file: ${M}`)}},B.click()},[o,a,i]);return C.useEffect(()=>{if(h!==null){const B=document.querySelector(".event-row.selected");B==null||B.scrollIntoView({behavior:"smooth",block:"nearest"})}},[h]),e?l.jsxs("div",{className:`run-panel ${T?"resizing":""}`,children:[l.jsx("style",{children:`
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
      `}),l.jsxs("div",{className:"input-area",children:[l.jsxs("select",{className:"agent-selector",value:U||"",onChange:B=>X(B.target.value||null),disabled:t,title:"Select which agent to run",children:[l.jsx("option",{value:"",children:e.app.root_agent_id?`Root: ${((nr=e.agents.find(B=>B.id===e.app.root_agent_id))==null?void 0:nr.name)||e.app.root_agent_id}`:"No root agent"}),e.agents.filter(B=>B.id!==e.app.root_agent_id).map(B=>l.jsxs("option",{value:B.id,children:[B.name," (",B.type.replace("Agent",""),")"]},B.id))]}),l.jsxs("select",{className:"agent-selector",value:W||"",onChange:B=>Ve(B.target.value||null),disabled:t||N,style:{minWidth:180},title:"Load a saved session",children:[l.jsx("option",{value:"",children:N?"Loading...":"Load Session..."}),V.map(B=>{const Y=new Date(B.started_at*1e3),ee=B.duration?`${B.duration.toFixed(1)}s`:"?";return l.jsxs("option",{value:B.id,children:[Y.toLocaleString()," (",B.event_count," events, ",ee,")"]},B.id)})]}),l.jsx("input",{type:"text",placeholder:"Enter your query...",value:m,onChange:B=>w(B.target.value),onKeyDown:B=>B.key==="Enter"&&!B.shiftKey&&$t(),disabled:t}),t?l.jsxs("button",{className:"stop",onClick:F,children:[l.jsx(n0,{size:14}),"Stop"]}):l.jsxs("button",{onClick:$t,disabled:!m.trim(),children:[l.jsx(Un,{size:14}),"Run"]})]}),l.jsxs("div",{className:"toolbar",children:[l.jsxs("div",{className:"toolbar-section",children:[l.jsx(Rs,{size:12,style:{color:"#71717a"}}),l.jsx("input",{type:"text",placeholder:"Filter events...",value:k,onChange:B=>y(B.target.value)})]}),l.jsx("div",{className:"toolbar-divider"}),l.jsxs("div",{className:"toolbar-section",children:[["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change"].map(B=>l.jsx("button",{className:`filter-chip ${L.has(B)?"active":""}`,onClick:()=>{const Y=new Set(L);Y.has(B)?Y.delete(B):Y.add(B),O(Y)},children:B.replace("_"," ")},B)),l.jsx("button",{className:`filter-chip ${L.has("callback_start")&&L.has("callback_end")?"active":""}`,onClick:()=>{const B=new Set(L);B.has("callback_start")&&B.has("callback_end")?(B.delete("callback_start"),B.delete("callback_end")):(B.add("callback_start"),B.add("callback_end")),O(B)},title:"Show/hide callback events",children:"callback"}),l.jsx("button",{className:`filter-chip ${$?"active":""}`,onClick:()=>_(!$),title:"Hide LLM_RESP (complete) events",children:"hide (complete)"})]}),l.jsx("div",{className:"toolbar-divider"}),l.jsxs("div",{className:"toolbar-section",children:[l.jsxs("button",{className:`toolbar-btn ${v?"active":""}`,onClick:()=>g(!v),children:[l.jsx(Kn,{size:12}),"State"]}),l.jsxs("button",{className:`toolbar-btn ${E?"active":""}`,onClick:()=>D(!E),children:[l.jsx(Wd,{size:12}),"Tools"]})]}),l.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:[l.jsxs("span",{style:{fontSize:10,color:"#71717a"},children:[ce.length," / ",r.length," events"]}),b&&l.jsx("button",{className:"toolbar-btn",onClick:()=>P(null),children:"Clear Range"})]})]}),l.jsxs("div",{className:"main-content",ref:he,children:[l.jsxs("div",{className:"event-list-container",children:[l.jsxs("div",{className:"event-list-header",children:[l.jsx("div",{children:"#"}),l.jsx("div",{children:"Time"}),l.jsx("div",{children:"Agent"}),l.jsx("div",{children:"Type"}),l.jsx("div",{children:"Info"})]}),l.jsx("div",{className:"event-list",ref:oe,children:ce.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx(Vh,{size:24}),l.jsx("span",{children:r.length===0?"No events yet":"No matching events"})]}):ce.map((B,Y)=>{const ee=r.indexOf(B),le=qp[B.event_type]||qp.error,M=ZS[B.event_type]||Wh;return l.jsxs("div",{className:`event-row ${h===ee?"selected":""}`,style:{background:le.bg},onClick:()=>x(ee),onDoubleClick:()=>{g(!1),D(!1)},children:[l.jsx("div",{className:"index",children:ee}),l.jsx("div",{className:"time",style:{color:le.fg},children:t_(B.timestamp,xe.min)}),l.jsx("div",{className:"agent",style:{color:le.fg},children:B.agent_name}),l.jsxs("div",{className:"type",style:{color:le.fg},children:[l.jsx(M,{size:10}),B.event_type.split("_")[0]]}),l.jsx("div",{className:"summary",children:e_(B)})]},ee)})})]}),l.jsxs("div",{className:"side-panel-container",style:{width:R},children:[l.jsx("div",{className:`resize-handle ${T?"active":""}`,onMouseDown:()=>I(!0)}),l.jsxs("div",{className:"side-panel",style:{width:R-4},children:[l.jsxs("div",{className:"side-panel-tabs",children:[l.jsxs("button",{className:`side-panel-tab ${!v&&!E?"active":""}`,onClick:()=>{g(!1),D(!1)},children:[l.jsx(Vi,{size:12,style:{marginRight:4}}),"Details"]}),l.jsxs("button",{className:`side-panel-tab ${v?"active":""}`,onClick:()=>{g(!0),D(!1)},children:[l.jsx(Kn,{size:12,style:{marginRight:4}}),"State"]}),l.jsxs("button",{className:`side-panel-tab ${E?"active":""}`,onClick:()=>{D(!0),g(!1)},children:[l.jsx(Wd,{size:12,style:{marginRight:4}}),"Tools"]})]}),l.jsx("div",{className:"side-panel-content",children:E?l.jsx(o_,{project:e,selectedEventIndex:h}):v?l.jsx(i_,{events:r,selectedEventIndex:h,project:e}):vt?l.jsx(n_,{event:vt}):l.jsxs("div",{className:"empty-state",children:[l.jsx(Vi,{size:24}),l.jsx("span",{children:"Select an event to view details"})]})})]})]})]}),l.jsxs("div",{className:"stats-bar",children:[l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{children:"Events:"}),l.jsx("span",{className:"stat-value",children:r.length})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{children:"Tool Calls:"}),l.jsx("span",{className:"stat-value",children:r.filter(B=>B.event_type==="tool_call").length})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{children:"Model Calls:"}),l.jsx("span",{className:"stat-value",children:r.filter(B=>B.event_type==="model_call").length})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{children:"Callbacks:"}),l.jsx("span",{className:"stat-value",children:r.filter(B=>B.event_type==="callback_start").length})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{children:"State Changes:"}),l.jsx("span",{className:"stat-value",children:r.filter(B=>B.event_type==="state_change").length})]}),r.length>0&&l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{children:"Duration:"}),l.jsxs("span",{className:"stat-value",children:[((r[r.length-1].timestamp-r[0].timestamp)*1e3).toFixed(0),"ms"]})]}),Ze.total>0&&l.jsx("div",{className:"stat-item token-stats",children:l.jsxs("span",{className:"stat-value token-value",children:[l.jsxs("span",{className:"token-in",title:"Input tokens",children:[Ze.input.toLocaleString(),"↑"]}),l.jsxs("span",{className:"token-out",title:"Output tokens",children:[Ze.output.toLocaleString(),"↓"]}),l.jsx("span",{className:"token-total",title:"Total tokens",children:Ze.total.toLocaleString()})]})}),l.jsx("div",{className:"stats-bar-spacer"}),l.jsxs("button",{className:"stats-bar-btn",onClick:st,title:"Load a saved run",children:[l.jsx(qh,{size:12}),"Load"]}),l.jsxs("button",{className:"stats-bar-btn",onClick:ue,disabled:r.length===0,title:"Save current run to file",children:[l.jsx(Jc,{size:12}),"Save"]}),l.jsxs("button",{className:"stats-bar-btn",onClick:Se,disabled:!p||r.length===0,title:"Save current session to memory",children:[l.jsx(Kn,{size:12}),"Save to Memory"]})]})]}):l.jsx("div",{className:"run-panel empty",children:"No project loaded"})}const ar="/api";function a_(){const[e,t]=C.useState([]),[n,r]=C.useState(null),[i,o]=C.useState(!0),[a,s]=C.useState(null),[c,u]=C.useState(""),[d,p]=C.useState("manual"),[f,m]=C.useState(!1),[w,j]=C.useState(""),[z,h]=C.useState(null),[x,b]=C.useState(!1),[P,k]=C.useState("list"),[y,L]=C.useState(null),O=C.useCallback(async()=>{try{const T=await(await fetch(`${ar}/knowledge`)).json();t(T.entries||[])}catch(A){s("Failed to load knowledge entries"),console.error(A)}},[]),$=C.useCallback(async()=>{try{const T=await(await fetch(`${ar}/knowledge/stats`)).json();r(T)}catch(A){console.error("Failed to load stats:",A)}},[]);C.useEffect(()=>{(async()=>{o(!0),await Promise.all([O(),$()]),o(!1)})()},[O,$]);const _=async()=>{if(c.trim()){m(!0),s(null);try{if(!(await fetch(`${ar}/knowledge`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:c.trim(),source:d})})).ok)throw new Error("Failed to add entry");u(""),await Promise.all([O(),$()])}catch(A){s("Failed to add knowledge entry"),console.error(A)}finally{m(!1)}}},v=async A=>{if(confirm("Delete this knowledge entry?"))try{await fetch(`${ar}/knowledge/${A}`,{method:"DELETE"}),await Promise.all([O(),$()]),(y==null?void 0:y.id)===A&&L(null)}catch(T){s("Failed to delete entry"),console.error(T)}},g=async()=>{if(!w.trim()){h(null);return}b(!0),s(null);try{const T=await(await fetch(`${ar}/knowledge/search`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:w.trim(),top_k:10,min_score:0})})).json();h(T.results||[]),k("search")}catch(A){s("Search failed"),console.error(A)}finally{b(!1)}},E=async()=>{if(confirm("Delete ALL knowledge entries? This cannot be undone."))try{await fetch(`${ar}/knowledge`,{method:"DELETE"}),await Promise.all([O(),$()]),L(null)}catch(A){s("Failed to clear knowledge base"),console.error(A)}},D=A=>new Date(A*1e3).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),R=A=>A>=.8?"var(--success)":A>=.6?"var(--accent-primary)":A>=.4?"var(--warning)":"var(--text-muted)";return i?l.jsxs("div",{className:"knowledge-loading",children:[l.jsx(xn,{className:"spin",size:24}),l.jsx("span",{children:"Loading knowledge base..."}),l.jsx("style",{children:`
          .knowledge-loading {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 12px;
            padding: 60px;
            color: var(--text-muted);
          }
          .spin {
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `})]}):l.jsxs("div",{className:"knowledge-panel",children:[l.jsx("style",{children:`
        .knowledge-panel {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 1400px;
        }
        
        .knowledge-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        
        .knowledge-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.5rem;
          font-weight: 600;
        }
        
        .knowledge-title svg {
          color: var(--accent-primary);
        }
        
        .stats-bar {
          display: flex;
          gap: 20px;
          padding: 12px 16px;
          background: var(--bg-secondary);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
        }
        
        .stat-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
        }
        
        .stat-value {
          font-weight: 600;
          color: var(--accent-primary);
        }
        
        .stat-label {
          color: var(--text-muted);
        }
        
        .embedding-status {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          font-size: 12px;
          font-weight: 500;
        }
        
        .embedding-status.enabled {
          background: rgba(46, 204, 113, 0.15);
          color: var(--success);
        }
        
        .embedding-status.disabled {
          background: rgba(231, 76, 60, 0.15);
          color: var(--error);
        }
        
        .main-layout {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 20px;
        }
        
        @media (max-width: 1200px) {
          .main-layout {
            grid-template-columns: 1fr;
          }
        }
        
        .entries-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        
        .search-bar {
          display: flex;
          gap: 8px;
          flex: 1;
          max-width: 500px;
        }
        
        .search-bar input {
          flex: 1;
        }
        
        .view-toggle {
          display: flex;
          gap: 4px;
        }
        
        .view-toggle button {
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          font-size: 13px;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }
        
        .view-toggle button:hover {
          background: var(--bg-hover);
        }
        
        .view-toggle button.active {
          background: var(--accent-primary);
          color: var(--bg-primary);
        }
        
        .entries-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .entry-card {
          padding: 12px 16px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .entry-card:hover {
          border-color: var(--accent-primary);
          background: var(--bg-tertiary);
        }
        
        .entry-card.selected {
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 1px var(--accent-primary);
        }
        
        .entry-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 8px;
        }
        
        .entry-source {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: var(--text-muted);
        }
        
        .entry-score {
          padding: 2px 8px;
          border-radius: var(--radius-sm);
          font-size: 12px;
          font-weight: 600;
          background: var(--bg-tertiary);
        }
        
        .entry-text {
          font-size: 14px;
          line-height: 1.5;
          color: var(--text-primary);
          white-space: pre-wrap;
          word-break: break-word;
        }
        
        .entry-text.truncated {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .entry-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 8px;
          padding-top: 8px;
          border-top: 1px solid var(--border-color);
        }
        
        .entry-date {
          font-size: 11px;
          color: var(--text-muted);
        }
        
        .entry-actions {
          display: flex;
          gap: 4px;
        }
        
        .entry-actions button {
          padding: 4px;
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          transition: all 0.2s ease;
        }
        
        .entry-actions button:hover {
          color: var(--error);
          background: rgba(231, 76, 60, 0.1);
        }
        
        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .add-section {
          padding: 16px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
        }
        
        .add-section h3 {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          font-size: 14px;
          font-weight: 600;
        }
        
        .add-section h3 svg {
          color: var(--accent-secondary);
        }
        
        .add-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .add-form textarea {
          min-height: 120px;
          resize: vertical;
        }
        
        .add-form-row {
          display: flex;
          gap: 8px;
        }
        
        .detail-section {
          padding: 16px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
        }
        
        .detail-section h3 {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          font-size: 14px;
          font-weight: 600;
        }
        
        .detail-content {
          font-size: 14px;
          line-height: 1.6;
          white-space: pre-wrap;
          word-break: break-word;
          max-height: 400px;
          overflow-y: auto;
        }
        
        .detail-meta {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid var(--border-color);
          font-size: 12px;
          color: var(--text-muted);
        }
        
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 40px;
          text-align: center;
          color: var(--text-muted);
        }
        
        .empty-state svg {
          opacity: 0.5;
        }
        
        .error-banner {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          background: rgba(231, 76, 60, 0.1);
          border: 1px solid var(--error);
          border-radius: var(--radius-md);
          color: var(--error);
          font-size: 14px;
        }
        
        .actions-row {
          display: flex;
          gap: 8px;
        }
      `}),l.jsxs("div",{className:"knowledge-header",children:[l.jsxs("h1",{className:"knowledge-title",children:[l.jsx(Fh,{size:28}),"Knowledge Base"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>Promise.all([O(),$()]),children:[l.jsx(xn,{size:14}),"Refresh"]})]}),n&&l.jsxs("div",{className:"stats-bar",children:[l.jsxs("div",{className:"stat-item",children:[l.jsx(Kn,{size:16}),l.jsx("span",{className:"stat-value",children:n.total_entries}),l.jsx("span",{className:"stat-label",children:"entries"})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"stat-label",children:"Model:"}),l.jsx("span",{className:"stat-value",children:n.model_name})]}),l.jsx("div",{className:`embedding-status ${n.has_embeddings?"enabled":"disabled"}`,children:n.has_embeddings?l.jsxs(l.Fragment,{children:[l.jsx(Wi,{size:14}),"Vector embeddings enabled"]}):l.jsxs(l.Fragment,{children:[l.jsx(pl,{size:14}),"Embeddings unavailable"]})}),Object.keys(n.sources).length>0&&l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"stat-label",children:"Sources:"}),l.jsx("span",{className:"stat-value",children:Object.entries(n.sources).map(([A,T])=>`${A} (${T})`).join(", ")})]})]}),a&&l.jsxs("div",{className:"error-banner",children:[l.jsx(pl,{size:18}),a,l.jsx("button",{onClick:()=>s(null),style:{marginLeft:"auto"},children:"×"})]}),l.jsxs("div",{className:"main-layout",children:[l.jsxs("div",{className:"entries-section",children:[l.jsxs("div",{className:"section-header",children:[l.jsxs("div",{className:"search-bar",children:[l.jsx("input",{type:"text",value:w,onChange:A=>j(A.target.value),onKeyDown:A=>A.key==="Enter"&&g(),placeholder:"Search knowledge base..."}),l.jsxs("button",{className:"btn btn-primary",onClick:g,disabled:x,children:[l.jsx(Rs,{size:16}),x?"Searching...":"Search"]})]}),l.jsxs("div",{className:"view-toggle",children:[l.jsx("button",{className:P==="list"?"active":"",onClick:()=>{k("list"),h(null)},children:"All Entries"}),z&&l.jsxs("button",{className:P==="search"?"active":"",onClick:()=>k("search"),children:["Results (",z.length,")"]})]})]}),l.jsx("div",{className:"entries-list",children:P==="search"&&z?z.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx(Rs,{size:48}),l.jsxs("div",{children:['No results found for "',w,'"']})]}):z.map(A=>l.jsxs("div",{className:`entry-card ${(y==null?void 0:y.id)===A.id?"selected":""}`,onClick:()=>{const T=e.find(I=>I.id===A.id);T&&L(T)},children:[l.jsxs("div",{className:"entry-header",children:[l.jsxs("div",{className:"entry-source",children:[l.jsx(xa,{size:14}),A.source||"unknown"]}),l.jsxs("div",{className:"entry-score",style:{color:R(A.score)},children:[(A.score*100).toFixed(1),"% match"]})]}),l.jsx("div",{className:"entry-text truncated",children:A.text}),l.jsx("div",{className:"entry-footer",children:l.jsx("span",{className:"entry-date",children:D(A.created_at)})})]},A.id)):e.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx(Kn,{size:48}),l.jsx("div",{children:"No knowledge entries yet"}),l.jsx("div",{style:{fontSize:13},children:"Add some knowledge to get started"})]}):e.map(A=>l.jsxs("div",{className:`entry-card ${(y==null?void 0:y.id)===A.id?"selected":""}`,onClick:()=>L(A),children:[l.jsxs("div",{className:"entry-header",children:[l.jsxs("div",{className:"entry-source",children:[l.jsx(xa,{size:14}),A.source||"unknown"]}),A.has_embedding&&l.jsxs("div",{className:"entry-score",style:{color:"var(--success)"},children:[l.jsx(Wi,{size:12})," embedded"]})]}),l.jsx("div",{className:"entry-text truncated",children:A.text}),l.jsxs("div",{className:"entry-footer",children:[l.jsx("span",{className:"entry-date",children:D(A.created_at)}),l.jsx("div",{className:"entry-actions",children:l.jsx("button",{onClick:T=>{T.stopPropagation(),v(A.id)},title:"Delete entry",children:l.jsx(Oe,{size:14})})})]})]},A.id))}),e.length>0&&l.jsx("div",{className:"actions-row",children:l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:E,style:{color:"var(--error)"},children:[l.jsx(Oe,{size:14}),"Clear All"]})})]}),l.jsxs("div",{className:"sidebar",children:[l.jsxs("div",{className:"add-section",children:[l.jsxs("h3",{children:[l.jsx(Fe,{size:18}),"Add Knowledge"]}),l.jsxs("div",{className:"add-form",children:[l.jsx("textarea",{value:c,onChange:A=>u(A.target.value),placeholder:`Enter knowledge text to add...

You can add facts, documentation, context, or any information you want agents to be able to reference.`}),l.jsxs("div",{className:"add-form-row",children:[l.jsx("input",{type:"text",value:d,onChange:A=>p(A.target.value),placeholder:"Source (e.g., docs, manual)",style:{flex:1}}),l.jsxs("button",{className:"btn btn-primary",onClick:_,disabled:f||!c.trim(),children:[l.jsx(Fe,{size:16}),f?"Adding...":"Add"]})]})]})]}),y&&l.jsxs("div",{className:"detail-section",children:[l.jsxs("h3",{children:[l.jsx(xa,{size:18}),"Entry Details"]}),l.jsx("div",{className:"detail-content",children:y.full_text||y.text}),l.jsxs("div",{className:"detail-meta",children:[l.jsxs("div",{children:[l.jsx("strong",{children:"ID:"})," ",y.id]}),l.jsxs("div",{children:[l.jsx("strong",{children:"Source:"})," ",y.source||"unknown"]}),l.jsxs("div",{children:[l.jsx("strong",{children:"Created:"})," ",D(y.created_at)]}),l.jsxs("div",{children:[l.jsx("strong",{children:"Has embedding:"})," ",y.has_embedding?"Yes":"No"]}),Object.keys(y.metadata||{}).length>0&&l.jsxs("div",{children:[l.jsx("strong",{children:"Metadata:"}),l.jsx("pre",{style:{fontSize:11,marginTop:4},children:JSON.stringify(y.metadata,null,2)})]})]}),l.jsx("div",{className:"actions-row",style:{marginTop:12},children:l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>v(y.id),style:{color:"var(--error)"},children:[l.jsx(Oe,{size:14}),"Delete"]})})]})]})]})]})}function Gp(){return`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`}function s_(){const{project:e}=Nt(),[t,n]=C.useState([{id:"root",name:"All Tests",description:"Root test group",tests:[],children:[]}]),[r,i]=C.useState("root"),[o,a]=C.useState(null),[s,c]=C.useState(new Map),[u,d]=C.useState(new Set),[p,f]=C.useState(new Set(["root"]));if(!e)return null;function m(_,v){for(const g of _){if(g.id===v)return g;const E=m(g.children,v);if(E)return E}return null}function w(_,v,g){return _.map(E=>E.id===v?{...E,...g}:{...E,children:w(E.children,v,g)})}const j=m(t,r),z=j==null?void 0:j.tests.find(_=>_.id===o);function h(_){const v=new Set(p);v.has(_)?v.delete(_):v.add(_),f(v)}function x(_){const v={id:Gp(),name:"New Group",description:"",tests:[],children:[]};n(g=>{var E,D;return _==="root"&&((E=g[0])==null?void 0:E.id)==="root"?[{...g[0],children:[...g[0].children,v]}]:w(g,_,{children:[...((D=m(g,_))==null?void 0:D.children)||[],v]})}),i(v.id),f(g=>new Set([...g,_]))}function b(_){const v={id:Gp(),name:"New Test",description:"",input_message:"",expected_tool_calls:[],expected_state:{}};n(g=>{const E=m(g,_);return E?w(g,_,{tests:[...E.tests,v]}):g}),a(v.id)}function P(_,v,g){n(E=>{const D=m(E,_);return D?w(E,_,{tests:D.tests.map(R=>R.id===v?{...R,...g}:R)}):E})}function k(_,v){n(g=>{const E=m(g,_);return E?w(g,_,{tests:E.tests.filter(D=>D.id!==v)}):g}),o===v&&a(null)}async function y(_){d(D=>new Set([...D,_.id]));const v=Date.now();await new Promise(D=>setTimeout(D,1e3+Math.random()*2e3));const g=Math.random()>.3,E={test_id:_.id,passed:g,duration_ms:Date.now()-v,error:g?void 0:"Expected output did not match"};c(D=>new Map(D).set(_.id,E)),d(D=>{const R=new Set(D);return R.delete(_.id),R})}async function L(_){for(const v of _.tests)await y(v);for(const v of _.children)await L(v)}function O(_){let v=0,g=0,E=0;function D(R){for(const A of R.tests){v++;const T=s.get(A.id);T&&(T.passed?g++:E++)}for(const A of R.children)D(A)}return D(_),{total:v,passed:g,failed:E,pending:v-g-E}}function $(_,v=0){return _.map(g=>{const E=p.has(g.id),D=O(g),R=g.tests.length>0||g.children.length>0;return l.jsxs("div",{className:"test-tree-item",children:[l.jsxs("div",{className:`tree-group ${r===g.id?"selected":""}`,style:{paddingLeft:8+v*16},onClick:()=>i(g.id),children:[l.jsx("button",{className:"expand-btn",onClick:A=>{A.stopPropagation(),h(g.id)},children:R?E?l.jsx(Lt,{size:14}):l.jsx(At,{size:14}):l.jsx("span",{style:{width:14}})}),l.jsx(Fd,{size:14,style:{color:"var(--accent-secondary)"}}),l.jsx("span",{className:"group-name",children:g.name}),D.total>0&&l.jsxs("span",{className:"group-stats",children:[D.passed>0&&l.jsx("span",{className:"stat-passed",children:D.passed}),D.failed>0&&l.jsx("span",{className:"stat-failed",children:D.failed}),D.pending>0&&l.jsx("span",{className:"stat-pending",children:D.pending})]}),l.jsx("button",{className:"run-btn",onClick:A=>{A.stopPropagation(),L(g)},title:"Run all tests in this group",children:l.jsx(Un,{size:12})})]}),E&&l.jsxs("div",{className:"tree-children",children:[g.tests.map(A=>{const T=s.get(A.id),I=u.has(A.id);return l.jsxs("div",{className:`tree-test ${o===A.id?"selected":""}`,style:{paddingLeft:24+v*16},onClick:()=>{i(g.id),a(A.id)},children:[I?l.jsx(G1,{size:14,className:"spinning",style:{color:"var(--warning)"}}):T?T.passed?l.jsx($d,{size:14,style:{color:"var(--success)"}}):l.jsx(Hd,{size:14,style:{color:"var(--error)"}}):l.jsx(ga,{size:14,style:{color:"var(--text-muted)"}}),l.jsx("span",{className:"test-name",children:A.name}),l.jsx("button",{className:"run-btn",onClick:V=>{V.stopPropagation(),y(A)},disabled:I,children:l.jsx(Un,{size:12})})]},A.id)}),$(g.children,v+1)]})]},g.id)})}return l.jsxs("div",{className:"eval-panel",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("aside",{className:"eval-sidebar",children:[l.jsxs("div",{className:"sidebar-header",children:[l.jsx("h3",{children:"Evaluation Tests"}),l.jsxs("div",{className:"header-actions",children:[l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>x(r),title:"Add test group",children:l.jsx(Fd,{size:14})}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>b(r),title:"Add test",children:[l.jsx(Fe,{size:14}),"Test"]})]})]}),l.jsx("div",{className:"test-tree",children:$(t)})]}),l.jsx("div",{className:"test-editor",children:z?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"editor-header",children:[l.jsx(ga,{size:20,style:{color:"var(--accent-primary)"}}),l.jsx("input",{type:"text",value:z.name,onChange:_=>P(r,z.id,{name:_.target.value}),placeholder:"Test name"}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>y(z),disabled:u.has(z.id),children:[l.jsx(Un,{size:14}),"Run"]}),l.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>k(r,z.id),children:l.jsx(Oe,{size:14})})]}),l.jsxs("div",{className:"editor-content",children:[l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Description"}),l.jsx("textarea",{value:z.description,onChange:_=>P(r,z.id,{description:_.target.value}),placeholder:"What does this test verify?",style:{minHeight:40}})]}),l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Input Message"}),l.jsx("textarea",{value:z.input_message,onChange:_=>P(r,z.id,{input_message:_.target.value}),placeholder:"The message to send to the agent..."})]}),l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Expected Output (optional)"}),l.jsx("textarea",{value:z.expected_output||"",onChange:_=>P(r,z.id,{expected_output:_.target.value||void 0}),placeholder:"Expected text in the response (partial match)..."})]}),l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Expected Tool Calls"}),l.jsx("textarea",{value:z.expected_tool_calls.join(`
`),onChange:_=>P(r,z.id,{expected_tool_calls:_.target.value.split(`
`).filter(Boolean)}),placeholder:"Tool names (one per line)...",style:{minHeight:60}})]}),l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Expected State (JSON)"}),l.jsx("textarea",{value:JSON.stringify(z.expected_state,null,2),onChange:_=>{try{const v=JSON.parse(_.target.value);P(r,z.id,{expected_state:v})}catch{}},placeholder:'{"key": "value"}'})]})]}),s.has(z.id)&&l.jsxs("div",{className:"result-panel",children:[l.jsxs("div",{className:`result-header ${s.get(z.id).passed?"passed":"failed"}`,children:[s.get(z.id).passed?l.jsxs(l.Fragment,{children:[l.jsx($d,{size:18}),l.jsx("strong",{children:"Passed"})]}):l.jsxs(l.Fragment,{children:[l.jsx(Hd,{size:18}),l.jsx("strong",{children:"Failed"})]}),l.jsxs("span",{style:{marginLeft:"auto",color:"var(--text-muted)",fontSize:12},children:[s.get(z.id).duration_ms,"ms"]})]}),s.get(z.id).error&&l.jsx("div",{className:"result-error",children:s.get(z.id).error})]})]}):j?l.jsxs("div",{className:"editor-content",children:[l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Group Name"}),l.jsx("input",{type:"text",value:j.name,onChange:_=>n(v=>w(v,j.id,{name:_.target.value}))})]}),l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Description"}),l.jsx("textarea",{value:j.description,onChange:_=>n(v=>w(v,j.id,{description:_.target.value})),placeholder:"Description of this test group..."})]}),l.jsx("div",{style:{marginTop:20},children:l.jsxs("button",{className:"btn btn-primary",onClick:()=>L(j),children:[l.jsx(Un,{size:16}),"Run All Tests in Group"]})})]}):l.jsxs("div",{className:"empty-state",children:[l.jsx(ga,{size:48}),l.jsxs("p",{children:["Select a test to edit",l.jsx("br",{}),"or create a new one"]})]})})]})}function c_(){const{project:e,setProject:t}=Nt(),[n,r]=C.useState(""),[i,o]=C.useState(!0),[a,s]=C.useState(!1),[c,u]=C.useState(null),[d,p]=C.useState(!1);if(!e)return null;C.useEffect(()=>{f()},[e.id]);async function f(){o(!0),u(null);try{const x=await Lh(e.id);r(x),s(!1)}catch(x){u(x.message)}finally{o(!1)}}function m(x){x!==void 0&&(r(x),s(!0),u(null))}async function w(){o(!0),u(null);try{const x=await Ah(e.id,n);t(x),s(!1)}catch(x){u(x.message)}finally{o(!1)}}function j(){navigator.clipboard.writeText(n),p(!0),setTimeout(()=>p(!1),2e3)}function z(){const x=new Blob([n],{type:"text/yaml"}),b=URL.createObjectURL(x),P=document.createElement("a");P.href=b,P.download=`${e.name}.yaml`,P.click(),URL.revokeObjectURL(b)}function h(){const x=document.createElement("input");x.type="file",x.accept=".yaml,.yml",x.onchange=async b=>{var y;const P=(y=b.target.files)==null?void 0:y[0];if(!P)return;const k=await P.text();r(k),s(!0)},x.click()}return l.jsxs("div",{className:"yaml-panel",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("div",{className:"yaml-header",children:[l.jsxs("div",{className:"yaml-title",children:[l.jsx("h3",{children:"Project Configuration"}),a&&l.jsxs("span",{className:"status-badge warning",children:[l.jsx(pl,{size:12}),"Unsaved changes"]}),c&&l.jsxs("span",{className:"status-badge error",children:[l.jsx(pl,{size:12}),c]}),d&&l.jsxs("span",{className:"status-badge success",children:[l.jsx(Bh,{size:12}),"Copied!"]})]}),l.jsxs("div",{className:"yaml-actions",children:[l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:j,title:"Copy to clipboard",children:[l.jsx(Uh,{size:14}),"Copy"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:z,title:"Download YAML",children:[l.jsx(Jc,{size:14}),"Download"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:h,title:"Upload YAML",children:[l.jsx(qh,{size:14}),"Upload"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:f,title:"Reload from server",children:[l.jsx(xn,{size:14}),"Reload"]}),l.jsx("button",{className:"btn btn-primary btn-sm",onClick:w,disabled:!a||i,children:"Apply Changes"})]})]}),l.jsx("div",{className:"yaml-editor",children:l.jsx($r,{height:"100%",language:"yaml",theme:"vs-dark",value:n,onChange:m,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),l.jsxs("div",{className:"yaml-info",children:[l.jsx("p",{children:"This YAML represents your entire project configuration including the app, agents, tools, and state keys."}),l.jsxs("p",{children:["You can edit the YAML directly, then click ",l.jsx("code",{children:"Apply Changes"})," to update the project. Use ",l.jsx("code",{children:"Download"})," to save a backup or ",l.jsx("code",{children:"Upload"})," to import a configuration."]})]})]})}function Qp(e){return e.replace(/\\/g,"\\\\").replace(/"""/g,'\\"\\"\\"')}function u_(e,t="model"){if(!e)return"";const n=[`model="${e.model_name}"`];return e.api_base&&n.push(`api_base="${e.api_base}"`),e.temperature!=null&&n.push(`temperature=${e.temperature}`),e.max_output_tokens!=null&&n.push(`max_output_tokens=${e.max_output_tokens}`),e.top_p!=null&&n.push(`top_p=${e.top_p}`),e.top_k!=null&&n.push(`top_k=${e.top_k}`),e.provider==="litellm"?`${t} = LiteLlm(
    ${n.join(`,
    `)}
)`:e.provider==="anthropic"?`${t} = Claude(
    ${n.join(`,
    `)}
)`:`${t} = "${e.model_name}"  # Gemini model`}function d_(e,t){var n;if(e.type==="builtin")return e.name||"";if(e.type==="function")return e.name||"custom_tool";if(e.type==="agent"){const r=t.agents.find(i=>i.id===e.agent_id);return r?`AgentTool(agent=${r.name}_agent)`:"AgentTool(agent=sub_agent)"}else if(e.type==="mcp")return(n=e.server)!=null&&n.name?`${e.server.name}_tools`:"";return""}function p_(e,t,n){const r=n.get(e.id)||`${e.name}_agent`;if(e.type==="LlmAgent"){const i=e,o=[`name="${e.name}"`];i.model&&o.push(`model=${e.name}_model`),i.instruction&&o.push(`instruction="""${Qp(i.instruction)}"""`),i.description&&o.push(`description="${Qp(i.description)}"`),i.output_key&&o.push(`output_key="${i.output_key}"`);const a=i.tools.map(c=>d_(c,t)).filter(c=>c&&!c.startsWith("#"));if(a.length>0&&o.push(`tools=[${a.join(", ")}]`),i.sub_agents&&i.sub_agents.length>0){const c=i.sub_agents.map(u=>n.get(u)||"sub_agent").join(", ");o.push(`sub_agents=[${c}]`)}i.include_contents==="none"&&o.push('include_contents="none"'),i.disallow_transfer_to_parent&&o.push("disallow_transfer_to_parent=True"),i.disallow_transfer_to_peers&&o.push("disallow_transfer_to_peers=True");const s={before_agent_callbacks:"before_agent_callback",after_agent_callbacks:"after_agent_callback",before_model_callbacks:"before_model_callback",after_model_callbacks:"after_model_callback",before_tool_callbacks:"before_tool_callback",after_tool_callbacks:"after_tool_callback"};for(const[c,u]of Object.entries(s)){const d=i[c]||[];if(d.length>0){const p=d.map(f=>{const m=t.custom_callbacks.find(w=>w.module_path===f.module_path);return m?`"${f.module_path}.${m.name}"`:`"${f.module_path}"`}).join(", ");if(d.length===1){const f=t.custom_callbacks.find(w=>w.module_path===d[0].module_path),m=f?`${d[0].module_path}.${f.name}`:d[0].module_path;o.push(`${u}="${m}"`)}else o.push(`${u}=[${p}]`)}}return`${r} = Agent(
    ${o.join(`,
    `)}
)`}else if(e.type==="SequentialAgent"){const i=e.sub_agents.map(o=>n.get(o)||"sub_agent").join(", ");return`${r} = SequentialAgent(
    name="${e.name}",
    sub_agents=[${i}]
)`}else if(e.type==="LoopAgent"){const i=e,o=[`name="${e.name}"`],a=e.sub_agents.map(s=>n.get(s)||"sub_agent").join(", ");return o.push(`sub_agents=[${a}]`),i.max_iterations&&o.push(`max_iterations=${i.max_iterations}`),`${r} = LoopAgent(
    ${o.join(`,
    `)}
)`}else if(e.type==="ParallelAgent"){const i=e.sub_agents.map(o=>n.get(o)||"sub_agent").join(", ");return`${r} = ParallelAgent(
    name="${e.name}",
    sub_agents=[${i}]
)`}return`# Unknown agent type: ${e.type}`}function f_(e){const t=[];return e.connection_type==="stdio"?(t.push(`${e.name}_tools = MCPToolset(`),t.push("    connection_params=StdioConnectionParams("),t.push("        server_params=StdioServerParameters("),e.command&&t.push(`            command="${e.command}",`),e.args.length>0&&t.push(`            args=${JSON.stringify(e.args)},`),Object.keys(e.env).length>0&&t.push(`            env=${JSON.stringify(e.env)},`),t.push("        )"),t.push("    )"),t.push(")")):e.connection_type==="sse"&&(t.push(`${e.name}_tools = MCPToolset(`),t.push("    connection_params=SseConnectionParams("),e.url&&t.push(`        url="${e.url}",`),t.push("    )"),t.push(")")),t.join(`
`)}function m_(e){const t=[];t.push('"""'),t.push(`${e.name} - Generated by ADK Playground`),e.description&&(t.push(""),t.push(e.description)),t.push('"""'),t.push("");const n=e.app.env_vars||{},r=Object.keys(n);r.length>0&&(t.push("import os"),t.push(""),t.push("# Environment Variables"),t.push("# Set these before running, or uncomment and add values:"),r.forEach(k=>{const y=n[k];if(y){const O=k.toLowerCase().includes("key")||k.toLowerCase().includes("secret")?"***":y;t.push(`os.environ["${k}"] = "${O}"  # Set your ${k}`)}else t.push(`# os.environ["${k}"] = ""  # TODO: Set your ${k}`)}),t.push(""));const i=new Set;i.add("from google.adk.agents import Agent");const o=e.agents.some(k=>k.type==="SequentialAgent"),a=e.agents.some(k=>k.type==="LoopAgent"),s=e.agents.some(k=>k.type==="ParallelAgent");o&&i.add("from google.adk.agents import SequentialAgent"),a&&i.add("from google.adk.agents import LoopAgent"),s&&i.add("from google.adk.agents import ParallelAgent"),e.agents.some(k=>{var y;return k.type==="LlmAgent"&&((y=k.model)==null?void 0:y.provider)==="litellm"})&&i.add("from google.adk.models.lite_llm import LiteLlm"),e.agents.some(k=>k.type==="LlmAgent"&&k.tools.some(y=>y.type==="agent"))&&i.add("from google.adk.tools import AgentTool");const d=new Set;e.agents.forEach(k=>{k.type==="LlmAgent"&&k.tools.forEach(y=>{y.type==="builtin"&&y.name&&d.add(y.name)})}),d.has("exit_loop")&&i.add("from google.adk.tools import exit_loop"),d.has("google_search")&&i.add("from google.adk.tools import google_search"),e.mcp_servers.length>0&&(i.add("from google.adk.tools.mcp_tool.mcp_toolset import MCPToolset"),i.add("from google.adk.tools.mcp_tool.mcp_toolset import StdioConnectionParams"),i.add("from google.adk.tools.mcp_tool.mcp_toolset import StdioServerParameters")),i.add("from google.adk.apps import App");const f=e.app.plugins.length>0;f&&e.app.plugins.forEach(k=>{k.type==="ReflectAndRetryToolPlugin"&&i.add("from google.adk.plugins import ReflectAndRetryToolPlugin")});const m=Array.from(i).sort();t.push(...m),t.push(""),t.push("");const w=new Map;e.agents.forEach(k=>{const y=k.name.endsWith("_agent")?k.name:`${k.name}_agent`;w.set(k.id,y)});const j=[],z=new Set;function h(k){if(z.has(k))return;const y=e.agents.find(L=>L.id===k);y&&(y.sub_agents.forEach(L=>h(L)),z.add(k),j.push(y))}e.agents.forEach(k=>h(k.id));const x=new Map;j.forEach(k=>{k.type==="LlmAgent"&&k.tools.forEach(y=>{y.type==="mcp"&&y.server&&x.set(y.server.name,y.server)})}),x.size>0&&(t.push("# MCP Server Toolsets"),x.forEach(k=>{t.push(f_(k)),t.push("")}),t.push("")),e.custom_tools.length>0&&(t.push("# Custom Tools"),e.custom_tools.forEach(k=>{t.push(k.code),t.push("")}),t.push("")),e.custom_callbacks&&e.custom_callbacks.length>0&&(t.push("# Custom Callbacks"),e.custom_callbacks.forEach(k=>{t.push(k.code),t.push("")}),t.push("")),t.push("# Models"),j.forEach(k=>{k.type==="LlmAgent"&&k.model&&(t.push(u_(k.model,`${k.name}_model`)),t.push(""))}),t.push(""),t.push("# Agents"),j.forEach(k=>{t.push(p_(k,e,w)),t.push("")});const b=e.agents.find(k=>k.id===e.app.root_agent_id),P=b?w.get(b.id):"root_agent";if(t.push(""),t.push(""),t.push("# App Configuration"),t.push("app = App("),t.push(`    name="${e.app.name}",`),t.push(`    root_agent=${P},`),f){const k=e.app.plugins.map(y=>y.type==="ReflectAndRetryToolPlugin"?`        ReflectAndRetryToolPlugin(max_retries=${y.max_retries||3})`:`        # ${y.type}()`);t.push("    plugins=["),t.push(k.join(`,
`)),t.push("    ],")}return t.push(")"),t.join(`
`)}function h_(){const{project:e}=Nt(),[t,n]=C.useState(!1);if(!e)return null;const r=C.useMemo(()=>m_(e),[e]);function i(){navigator.clipboard.writeText(r),n(!0),setTimeout(()=>n(!1),2e3)}function o(){const a=new Blob([r],{type:"text/x-python"}),s=URL.createObjectURL(a),c=document.createElement("a");c.href=s,c.download=`${e.name}_agent.py`,c.click(),URL.revokeObjectURL(s)}return l.jsxs("div",{className:"code-panel",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("div",{className:"code-header",children:[l.jsxs("div",{className:"code-title",children:[l.jsx(zn,{size:16}),l.jsx("h3",{children:"Python Code"}),l.jsx("span",{className:"badge",children:"Generated"}),t&&l.jsxs("span",{className:"status-badge success",children:[l.jsx(Bh,{size:12}),"Copied!"]})]}),l.jsxs("div",{className:"code-actions",children:[l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:i,title:"Copy to clipboard",children:[l.jsx(Uh,{size:14}),"Copy"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:o,title:"Download Python file",children:[l.jsx(Jc,{size:14}),"Download"]})]})]}),l.jsx("div",{className:"code-editor",children:l.jsx($r,{height:"100%",language:"python",theme:"vs-dark",value:r,options:{readOnly:!0,minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),l.jsxs("div",{className:"code-info",children:[l.jsx("p",{children:"This is the Python code equivalent of your project configuration. You can use this code directly with ADK."}),l.jsxs("p",{children:["Place this in a file named ",l.jsx("code",{children:"agent.py"})," inside your agent directory, then run with ",l.jsx("code",{children:"adk web ."})," or ",l.jsx("code",{children:"adk run your_agent"}),"."]})]})]})}const g_=[{id:"app",label:"App",icon:t0},{id:"agents",label:"Agents",icon:qn},{id:"tools",label:"Tools",icon:Kt},{id:"callbacks",label:"Callbacks",icon:zn},{id:"run",label:"Run",icon:Vh},{id:"knowledge",label:"Knowledge",icon:Fh},{id:"eval",label:"Evaluate",icon:r0},{id:"yaml",label:"YAML",icon:J1},{id:"code",label:"Code",icon:zn}],x_=["app","agents","tools","callbacks","run","knowledge","eval","yaml","code"];function Ra(){const{projectId:e,tab:t,itemId:n}=Qv(),r=Kc(),{project:i,setProject:o,activeTab:a,setActiveTab:s,hasUnsavedChanges:c,setHasUnsavedChanges:u,selectedAgentId:d,setSelectedAgentId:p,selectedToolId:f,setSelectedToolId:m}=Nt(),[w,j]=C.useState(!0),[z,h]=C.useState(!1),x=C.useRef(!0),b=C.useRef(null);C.useEffect(()=>{t&&x_.includes(t)?s(t):!t&&e&&r(`/project/${e}/${a}`,{replace:!0})},[t,e]),C.useEffect(()=>{t==="agents"&&n?p(n):t==="tools"&&n&&m(n)},[t,n]);function P(_){s(_),_==="agents"&&d?r(`/project/${e}/${_}/${d}`,{replace:!0}):_==="tools"&&f?r(`/project/${e}/${_}/${f}`,{replace:!0}):r(`/project/${e}/${_}`,{replace:!0})}function k(_){_?r(`/project/${e}/${a}/${_}`,{replace:!0}):r(`/project/${e}/${a}`,{replace:!0})}C.useEffect(()=>(e&&y(e),()=>{o(null),u(!1)}),[e]);async function y(_){x.current=!0;try{const v=await Nh(_);o(v),b.current=JSON.stringify(v),u(!1)}catch(v){console.error("Failed to load project:",v),r("/")}finally{j(!1),setTimeout(()=>{x.current=!1},100)}}async function L(){if(i){h(!0);try{await Ps(i.id,i),b.current=JSON.stringify(i),u(!1)}catch(_){console.error("Failed to save project:",_)}finally{h(!1)}}}const O=C.useRef(null);C.useEffect(()=>{if(i&&!x.current&&O.current){const _=i.app.models||[],v=O.current||[];if(_.some((E,D)=>{const R=v.find(A=>A.id===E.id);return R?R.provider!==E.provider||R.model_name!==E.model_name||R.api_base!==E.api_base||R.temperature!==E.temperature||R.max_output_tokens!==E.max_output_tokens||R.top_p!==E.top_p||R.top_k!==E.top_k:!1})){const E=i.app.default_model_id,D=i.agents.map(A=>{if(A.type==="LlmAgent"&&A.model){const T=A.model._appModelId;if(T){const I=_.find(V=>V.id===T);if(I)return{...A,model:{provider:I.provider,model_name:I.model_name,api_base:I.api_base,temperature:I.temperature,max_output_tokens:I.max_output_tokens,top_p:I.top_p,top_k:I.top_k,fallbacks:[],_appModelId:T}}}else if(E){const I=_.find(V=>V.id===E);if(I&&A.model.provider===I.provider&&A.model.model_name===I.model_name&&A.model.api_base===I.api_base)return{...A,model:{provider:I.provider,model_name:I.model_name,api_base:I.api_base,temperature:I.temperature,max_output_tokens:I.max_output_tokens,top_p:I.top_p,top_k:I.top_k,fallbacks:[],_appModelId:E}}}}return A});D.some((A,T)=>JSON.stringify(A)!==JSON.stringify(i.agents[T]))&&o({...i,agents:D})}}i&&(O.current=i.app.models||[])},[i==null?void 0:i.app.models,i,o]);const $=C.useRef(null);return C.useEffect(()=>(i&&!x.current&&b.current&&JSON.stringify(i)!==b.current&&(u(!0),$.current&&clearTimeout($.current),$.current=setTimeout(async()=>{try{await Ps(i.id,i),b.current=JSON.stringify(i),u(!1)}catch(v){console.error("Auto-save failed:",v)}},500)),()=>{$.current&&clearTimeout($.current)}),[i]),w?l.jsxs("div",{className:"loading-screen",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("header",{className:"top-bar",children:[l.jsxs("div",{className:"top-bar-left",children:[l.jsxs("button",{className:"back-btn",onClick:()=>r("/"),children:[l.jsx(K1,{size:18}),"Project"]}),l.jsx("h1",{className:"project-name",children:i.name})]}),l.jsx("nav",{className:"tabs-bar",children:g_.map(_=>l.jsxs("button",{className:`tab-btn ${a===_.id?"active":""}`,onClick:()=>P(_.id),children:[l.jsx(_.icon,{size:14}),_.label]},_.id))}),l.jsx("div",{className:"top-bar-right",children:l.jsxs("button",{className:"btn btn-primary",onClick:L,disabled:z,children:[l.jsx(Xc,{size:16}),z?"Saving...":"Save"]})})]}),l.jsxs("main",{className:"main-content",children:[a==="app"&&l.jsx(u0,{}),a==="agents"&&l.jsx(gS,{onSelectAgent:k}),a==="tools"&&l.jsx(JS,{onSelectTool:k}),a==="callbacks"&&l.jsx(XS,{onSelectCallback:k}),a==="run"&&l.jsx(l_,{}),a==="knowledge"&&l.jsx(a_,{}),a==="eval"&&l.jsx(s_,{}),a==="yaml"&&l.jsx(c_,{}),a==="code"&&l.jsx(h_,{})]})]}):null}function y_(){const{setMcpServers:e,setBuiltinTools:t}=Nt();return C.useEffect(()=>{Gc().then(e).catch(console.error),Ih().then(t).catch(console.error)},[e,t]),l.jsxs(p1,{children:[l.jsx(sr,{path:"/",element:l.jsx(a0,{})}),l.jsx(sr,{path:"/project/:projectId",element:l.jsx(Ra,{})}),l.jsx(sr,{path:"/project/:projectId/:tab",element:l.jsx(Ra,{})}),l.jsx(sr,{path:"/project/:projectId/:tab/:itemId",element:l.jsx(Ra,{})}),l.jsx(sr,{path:"*",element:l.jsx(u1,{to:"/",replace:!0})})]})}Ma.createRoot(document.getElementById("root")).render(l.jsx(Rt.StrictMode,{children:l.jsx(h1,{children:l.jsx(y_,{})})}));export{xl as a,v_ as g};
