function tx(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();var Vo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function bl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function LS(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Yp={exports:{}},kl={},Xp={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gi=Symbol.for("react.element"),nx=Symbol.for("react.portal"),rx=Symbol.for("react.fragment"),ix=Symbol.for("react.strict_mode"),ox=Symbol.for("react.profiler"),lx=Symbol.for("react.provider"),sx=Symbol.for("react.context"),ax=Symbol.for("react.forward_ref"),cx=Symbol.for("react.suspense"),ux=Symbol.for("react.memo"),dx=Symbol.for("react.lazy"),_u=Symbol.iterator;function px(e){return e===null||typeof e!="object"?null:(e=_u&&e[_u]||e["@@iterator"],typeof e=="function"?e:null)}var Zp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ef=Object.assign,tf={};function Fr(e,t,n){this.props=e,this.context=t,this.refs=tf,this.updater=n||Zp}Fr.prototype.isReactComponent={};Fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nf(){}nf.prototype=Fr.prototype;function Za(e,t,n){this.props=e,this.context=t,this.refs=tf,this.updater=n||Zp}var ec=Za.prototype=new nf;ec.constructor=Za;ef(ec,Fr.prototype);ec.isPureReactComponent=!0;var Su=Array.isArray,rf=Object.prototype.hasOwnProperty,tc={current:null},of={key:!0,ref:!0,__self:!0,__source:!0};function lf(e,t,n){var r,i={},l=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(l=""+t.key),t)rf.call(t,r)&&!of.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Gi,type:e,key:l,ref:s,props:i,_owner:tc.current}}function fx(e,t){return{$$typeof:Gi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function nc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gi}function mx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Cu=/\/+/g;function Hl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?mx(""+e.key):t.toString(36)}function Eo(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Gi:case nx:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Hl(s,0):r,Su(i)?(n="",e!=null&&(n=e.replace(Cu,"$&/")+"/"),Eo(i,t,n,"",function(u){return u})):i!=null&&(nc(i)&&(i=fx(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Cu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Su(e))for(var a=0;a<e.length;a++){l=e[a];var c=r+Hl(l,a);s+=Eo(l,t,n,c,i)}else if(c=px(e),typeof c=="function")for(e=c.call(e),a=0;!(l=e.next()).done;)l=l.value,c=r+Hl(l,a++),s+=Eo(l,t,n,c,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function oo(e,t,n){if(e==null)return e;var r=[],i=0;return Eo(e,r,"","",function(l){return t.call(n,l,i++)}),r}function hx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ye={current:null},zo={transition:null},gx={ReactCurrentDispatcher:Ye,ReactCurrentBatchConfig:zo,ReactCurrentOwner:tc};function sf(){throw Error("act(...) is not supported in production builds of React.")}de.Children={map:oo,forEach:function(e,t,n){oo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oo(e,function(){t++}),t},toArray:function(e){return oo(e,function(t){return t})||[]},only:function(e){if(!nc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};de.Component=Fr;de.Fragment=rx;de.Profiler=ox;de.PureComponent=Za;de.StrictMode=ix;de.Suspense=cx;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gx;de.act=sf;de.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ef({},e.props),i=e.key,l=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,s=tc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)rf.call(t,c)&&!of.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Gi,type:e.type,key:i,ref:l,props:r,_owner:s}};de.createContext=function(e){return e={$$typeof:sx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:lx,_context:e},e.Consumer=e};de.createElement=lf;de.createFactory=function(e){var t=lf.bind(null,e);return t.type=e,t};de.createRef=function(){return{current:null}};de.forwardRef=function(e){return{$$typeof:ax,render:e}};de.isValidElement=nc;de.lazy=function(e){return{$$typeof:dx,_payload:{_status:-1,_result:e},_init:hx}};de.memo=function(e,t){return{$$typeof:ux,type:e,compare:t===void 0?null:t}};de.startTransition=function(e){var t=zo.transition;zo.transition={};try{e()}finally{zo.transition=t}};de.unstable_act=sf;de.useCallback=function(e,t){return Ye.current.useCallback(e,t)};de.useContext=function(e){return Ye.current.useContext(e)};de.useDebugValue=function(){};de.useDeferredValue=function(e){return Ye.current.useDeferredValue(e)};de.useEffect=function(e,t){return Ye.current.useEffect(e,t)};de.useId=function(){return Ye.current.useId()};de.useImperativeHandle=function(e,t,n){return Ye.current.useImperativeHandle(e,t,n)};de.useInsertionEffect=function(e,t){return Ye.current.useInsertionEffect(e,t)};de.useLayoutEffect=function(e,t){return Ye.current.useLayoutEffect(e,t)};de.useMemo=function(e,t){return Ye.current.useMemo(e,t)};de.useReducer=function(e,t,n){return Ye.current.useReducer(e,t,n)};de.useRef=function(e){return Ye.current.useRef(e)};de.useState=function(e){return Ye.current.useState(e)};de.useSyncExternalStore=function(e,t,n){return Ye.current.useSyncExternalStore(e,t,n)};de.useTransition=function(){return Ye.current.useTransition()};de.version="18.3.1";Xp.exports=de;var S=Xp.exports;const Nt=bl(S),xx=tx({__proto__:null,default:Nt},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yx=S,vx=Symbol.for("react.element"),bx=Symbol.for("react.fragment"),kx=Object.prototype.hasOwnProperty,wx=yx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jx={key:!0,ref:!0,__self:!0,__source:!0};function af(e,t,n){var r,i={},l=null,s=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)kx.call(t,r)&&!jx.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:vx,type:e,key:l,ref:s,props:i,_owner:wx.current}}kl.Fragment=bx;kl.jsx=af;kl.jsxs=af;Yp.exports=kl;var o=Yp.exports,Os={},cf={exports:{}},xt={},uf={exports:{}},df={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,R){var b=M.length;M.push(R);e:for(;0<b;){var U=b-1>>>1,Y=M[U];if(0<i(Y,R))M[U]=R,M[b]=Y,b=U;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var R=M[0],b=M.pop();if(b!==R){M[0]=b;e:for(var U=0,Y=M.length,N=Y>>>1;U<N;){var ne=2*(U+1)-1,C=M[ne],B=ne+1,L=M[B];if(0>i(C,b))B<Y&&0>i(L,C)?(M[U]=L,M[B]=b,U=B):(M[U]=C,M[ne]=b,U=ne);else if(B<Y&&0>i(L,b))M[U]=L,M[B]=b,U=B;else break e}}return R}function i(M,R){var b=M.sortIndex-R.sortIndex;return b!==0?b:M.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var c=[],u=[],d=1,p=null,f=3,m=!1,k=!1,w=!1,P=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(M){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=M)r(u),R.sortIndex=R.expirationTime,t(c,R);else break;R=n(u)}}function z(M){if(w=!1,x(M),!k)if(n(c)!==null)k=!0,Q(j);else{var R=n(u);R!==null&&O(z,R.startTime-M)}}function j(M,R){k=!1,w&&(w=!1,g(A),A=-1),m=!0;var b=f;try{for(x(R),p=n(c);p!==null&&(!(p.expirationTime>R)||M&&!v());){var U=p.callback;if(typeof U=="function"){p.callback=null,f=p.priorityLevel;var Y=U(p.expirationTime<=R);R=e.unstable_now(),typeof Y=="function"?p.callback=Y:p===n(c)&&r(c),x(R)}else r(c);p=n(c)}if(p!==null)var N=!0;else{var ne=n(u);ne!==null&&O(z,ne.startTime-R),N=!1}return N}finally{p=null,f=b,m=!1}}var y=!1,_=null,A=-1,D=5,T=-1;function v(){return!(e.unstable_now()-T<D)}function E(){if(_!==null){var M=e.unstable_now();T=M;var R=!0;try{R=_(!0,M)}finally{R?I():(y=!1,_=null)}}else y=!1}var I;if(typeof h=="function")I=function(){h(E)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,F=q.port2;q.port1.onmessage=E,I=function(){F.postMessage(null)}}else I=function(){P(E,0)};function Q(M){_=M,y||(y=!0,I())}function O(M,R){A=P(function(){M(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){k||m||(k=!0,Q(j))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(M){switch(f){case 1:case 2:case 3:var R=3;break;default:R=f}var b=f;f=R;try{return M()}finally{f=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,R){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var b=f;f=M;try{return R()}finally{f=b}},e.unstable_scheduleCallback=function(M,R,b){var U=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?U+b:U):b=U,M){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=b+Y,M={id:d++,callback:R,priorityLevel:M,startTime:b,expirationTime:Y,sortIndex:-1},b>U?(M.sortIndex=b,t(u,M),n(c)===null&&M===n(u)&&(w?(g(A),A=-1):w=!0,O(z,b-U))):(M.sortIndex=Y,t(c,M),k||m||(k=!0,Q(j))),M},e.unstable_shouldYield=v,e.unstable_wrapCallback=function(M){var R=f;return function(){var b=f;f=R;try{return M.apply(this,arguments)}finally{f=b}}}})(df);uf.exports=df;var _x=uf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sx=S,gt=_x;function G(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pf=new Set,Si={};function er(e,t){Tr(e,t),Tr(e+"Capture",t)}function Tr(e,t){for(Si[e]=t,e=0;e<t.length;e++)pf.add(t[e])}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$s=Object.prototype.hasOwnProperty,Cx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nu={},Eu={};function Nx(e){return $s.call(Eu,e)?!0:$s.call(Nu,e)?!1:Cx.test(e)?Eu[e]=!0:(Nu[e]=!0,!1)}function Ex(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zx(e,t,n,r){if(t===null||typeof t>"u"||Ex(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Xe(e,t,n,r,i,l,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=s}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ue[e]=new Xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ue[t]=new Xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ue[e]=new Xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ue[e]=new Xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ue[e]=new Xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ue[e]=new Xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ue[e]=new Xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ue[e]=new Xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ue[e]=new Xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var rc=/[\-:]([a-z])/g;function ic(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(rc,ic);Ue[t]=new Xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(rc,ic);Ue[t]=new Xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(rc,ic);Ue[t]=new Xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ue[e]=new Xe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ue[e]=new Xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function oc(e,t,n,r){var i=Ue.hasOwnProperty(t)?Ue[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(zx(t,n,i,r)&&(n=null),r||i===null?Nx(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var cn=Sx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lo=Symbol.for("react.element"),cr=Symbol.for("react.portal"),ur=Symbol.for("react.fragment"),lc=Symbol.for("react.strict_mode"),Ds=Symbol.for("react.profiler"),ff=Symbol.for("react.provider"),mf=Symbol.for("react.context"),sc=Symbol.for("react.forward_ref"),Fs=Symbol.for("react.suspense"),Bs=Symbol.for("react.suspense_list"),ac=Symbol.for("react.memo"),pn=Symbol.for("react.lazy"),hf=Symbol.for("react.offscreen"),zu=Symbol.iterator;function Qr(e){return e===null||typeof e!="object"?null:(e=zu&&e[zu]||e["@@iterator"],typeof e=="function"?e:null)}var Ee=Object.assign,ql;function li(e){if(ql===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ql=t&&t[1]||""}return`
`+ql+e}var Kl=!1;function Ql(e,t){if(!e||Kl)return"";Kl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),l=r.stack.split(`
`),s=i.length-1,a=l.length-1;1<=s&&0<=a&&i[s]!==l[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==l[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==l[a]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=a);break}}}finally{Kl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?li(e):""}function Tx(e){switch(e.tag){case 5:return li(e.type);case 16:return li("Lazy");case 13:return li("Suspense");case 19:return li("SuspenseList");case 0:case 2:case 15:return e=Ql(e.type,!1),e;case 11:return e=Ql(e.type.render,!1),e;case 1:return e=Ql(e.type,!0),e;default:return""}}function Us(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ur:return"Fragment";case cr:return"Portal";case Ds:return"Profiler";case lc:return"StrictMode";case Fs:return"Suspense";case Bs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case mf:return(e.displayName||"Context")+".Consumer";case ff:return(e._context.displayName||"Context")+".Provider";case sc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ac:return t=e.displayName||null,t!==null?t:Us(e.type)||"Memo";case pn:t=e._payload,e=e._init;try{return Us(e(t))}catch{}}return null}function Px(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Us(t);case 8:return t===lc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Tn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ax(e){var t=gf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function so(e){e._valueTracker||(e._valueTracker=Ax(e))}function xf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=gf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Wo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vs(e,t){var n=t.checked;return Ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Tu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Tn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yf(e,t){t=t.checked,t!=null&&oc(e,"checked",t,!1)}function Ws(e,t){yf(e,t);var n=Tn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Hs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Hs(e,t.type,Tn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Pu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Hs(e,t,n){(t!=="number"||Wo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var si=Array.isArray;function wr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Tn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function qs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(G(91));return Ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Au(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(G(92));if(si(n)){if(1<n.length)throw Error(G(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Tn(n)}}function vf(e,t){var n=Tn(t.value),r=Tn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Lu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ks(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ao,kf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ao=ao||document.createElement("div"),ao.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ao.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ci(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var di={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lx=["Webkit","ms","Moz","O"];Object.keys(di).forEach(function(e){Lx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),di[t]=di[e]})});function wf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||di.hasOwnProperty(e)&&di[e]?(""+t).trim():t+"px"}function jf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=wf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Rx=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qs(e,t){if(t){if(Rx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(G(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(G(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(G(61))}if(t.style!=null&&typeof t.style!="object")throw Error(G(62))}}function Gs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Js=null;function cc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ys=null,jr=null,_r=null;function Ru(e){if(e=Xi(e)){if(typeof Ys!="function")throw Error(G(280));var t=e.stateNode;t&&(t=Cl(t),Ys(e.stateNode,e.type,t))}}function _f(e){jr?_r?_r.push(e):_r=[e]:jr=e}function Sf(){if(jr){var e=jr,t=_r;if(_r=jr=null,Ru(e),t)for(e=0;e<t.length;e++)Ru(t[e])}}function Cf(e,t){return e(t)}function Nf(){}var Gl=!1;function Ef(e,t,n){if(Gl)return e(t,n);Gl=!0;try{return Cf(e,t,n)}finally{Gl=!1,(jr!==null||_r!==null)&&(Nf(),Sf())}}function Ni(e,t){var n=e.stateNode;if(n===null)return null;var r=Cl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(G(231,t,typeof n));return n}var Xs=!1;if(on)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){Xs=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{Xs=!1}function Ix(e,t,n,r,i,l,s,a,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var pi=!1,Ho=null,qo=!1,Zs=null,Mx={onError:function(e){pi=!0,Ho=e}};function Ox(e,t,n,r,i,l,s,a,c){pi=!1,Ho=null,Ix.apply(Mx,arguments)}function $x(e,t,n,r,i,l,s,a,c){if(Ox.apply(this,arguments),pi){if(pi){var u=Ho;pi=!1,Ho=null}else throw Error(G(198));qo||(qo=!0,Zs=u)}}function tr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function zf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Iu(e){if(tr(e)!==e)throw Error(G(188))}function Dx(e){var t=e.alternate;if(!t){if(t=tr(e),t===null)throw Error(G(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Iu(i),e;if(l===r)return Iu(i),t;l=l.sibling}throw Error(G(188))}if(n.return!==r.return)n=i,r=l;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=l;break}if(a===r){s=!0,r=i,n=l;break}a=a.sibling}if(!s){for(a=l.child;a;){if(a===n){s=!0,n=l,r=i;break}if(a===r){s=!0,r=l,n=i;break}a=a.sibling}if(!s)throw Error(G(189))}}if(n.alternate!==r)throw Error(G(190))}if(n.tag!==3)throw Error(G(188));return n.stateNode.current===n?e:t}function Tf(e){return e=Dx(e),e!==null?Pf(e):null}function Pf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Pf(e);if(t!==null)return t;e=e.sibling}return null}var Af=gt.unstable_scheduleCallback,Mu=gt.unstable_cancelCallback,Fx=gt.unstable_shouldYield,Bx=gt.unstable_requestPaint,Te=gt.unstable_now,Ux=gt.unstable_getCurrentPriorityLevel,uc=gt.unstable_ImmediatePriority,Lf=gt.unstable_UserBlockingPriority,Ko=gt.unstable_NormalPriority,Vx=gt.unstable_LowPriority,Rf=gt.unstable_IdlePriority,wl=null,Kt=null;function Wx(e){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(wl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:Kx,Hx=Math.log,qx=Math.LN2;function Kx(e){return e>>>=0,e===0?32:31-(Hx(e)/qx|0)|0}var co=64,uo=4194304;function ai(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=ai(a):(l&=s,l!==0&&(r=ai(l)))}else s=n&~i,s!==0?r=ai(s):l!==0&&(r=ai(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ot(t),i=1<<n,r|=e[n],t&=~i;return r}function Qx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gx(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-Ot(l),a=1<<s,c=i[s];c===-1?(!(a&n)||a&r)&&(i[s]=Qx(a,t)):c<=t&&(e.expiredLanes|=a),l&=~a}}function ea(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function If(){var e=co;return co<<=1,!(co&4194240)&&(co=64),e}function Jl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ji(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=n}function Jx(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ot(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function dc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ye=0;function Mf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Of,pc,$f,Df,Ff,ta=!1,po=[],bn=null,kn=null,wn=null,Ei=new Map,zi=new Map,mn=[],Yx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ou(e,t){switch(e){case"focusin":case"focusout":bn=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":Ei.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zi.delete(t.pointerId)}}function Jr(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Xi(t),t!==null&&pc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Xx(e,t,n,r,i){switch(t){case"focusin":return bn=Jr(bn,e,t,n,r,i),!0;case"dragenter":return kn=Jr(kn,e,t,n,r,i),!0;case"mouseover":return wn=Jr(wn,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Ei.set(l,Jr(Ei.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,zi.set(l,Jr(zi.get(l)||null,e,t,n,r,i)),!0}return!1}function Bf(e){var t=Un(e.target);if(t!==null){var n=tr(t);if(n!==null){if(t=n.tag,t===13){if(t=zf(n),t!==null){e.blockedOn=t,Ff(e.priority,function(){$f(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function To(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=na(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Js=r,n.target.dispatchEvent(r),Js=null}else return t=Xi(n),t!==null&&pc(t),e.blockedOn=n,!1;t.shift()}return!0}function $u(e,t,n){To(e)&&n.delete(t)}function Zx(){ta=!1,bn!==null&&To(bn)&&(bn=null),kn!==null&&To(kn)&&(kn=null),wn!==null&&To(wn)&&(wn=null),Ei.forEach($u),zi.forEach($u)}function Yr(e,t){e.blockedOn===t&&(e.blockedOn=null,ta||(ta=!0,gt.unstable_scheduleCallback(gt.unstable_NormalPriority,Zx)))}function Ti(e){function t(i){return Yr(i,e)}if(0<po.length){Yr(po[0],e);for(var n=1;n<po.length;n++){var r=po[n];r.blockedOn===e&&(r.blockedOn=null)}}for(bn!==null&&Yr(bn,e),kn!==null&&Yr(kn,e),wn!==null&&Yr(wn,e),Ei.forEach(t),zi.forEach(t),n=0;n<mn.length;n++)r=mn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<mn.length&&(n=mn[0],n.blockedOn===null);)Bf(n),n.blockedOn===null&&mn.shift()}var Sr=cn.ReactCurrentBatchConfig,Go=!0;function ey(e,t,n,r){var i=ye,l=Sr.transition;Sr.transition=null;try{ye=1,fc(e,t,n,r)}finally{ye=i,Sr.transition=l}}function ty(e,t,n,r){var i=ye,l=Sr.transition;Sr.transition=null;try{ye=4,fc(e,t,n,r)}finally{ye=i,Sr.transition=l}}function fc(e,t,n,r){if(Go){var i=na(e,t,n,r);if(i===null)ls(e,t,r,Jo,n),Ou(e,r);else if(Xx(i,e,t,n,r))r.stopPropagation();else if(Ou(e,r),t&4&&-1<Yx.indexOf(e)){for(;i!==null;){var l=Xi(i);if(l!==null&&Of(l),l=na(e,t,n,r),l===null&&ls(e,t,r,Jo,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else ls(e,t,r,null,n)}}var Jo=null;function na(e,t,n,r){if(Jo=null,e=cc(r),e=Un(e),e!==null)if(t=tr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=zf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jo=e,null}function Uf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ux()){case uc:return 1;case Lf:return 4;case Ko:case Vx:return 16;case Rf:return 536870912;default:return 16}default:return 16}}var gn=null,mc=null,Po=null;function Vf(){if(Po)return Po;var e,t=mc,n=t.length,r,i="value"in gn?gn.value:gn.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[l-r];r++);return Po=i.slice(e,1<r?1-r:void 0)}function Ao(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fo(){return!0}function Du(){return!1}function yt(e){function t(n,r,i,l,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?fo:Du,this.isPropagationStopped=Du,this}return Ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fo)},persist:function(){},isPersistent:fo}),t}var Br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hc=yt(Br),Yi=Ee({},Br,{view:0,detail:0}),ny=yt(Yi),Yl,Xl,Xr,jl=Ee({},Yi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xr&&(Xr&&e.type==="mousemove"?(Yl=e.screenX-Xr.screenX,Xl=e.screenY-Xr.screenY):Xl=Yl=0,Xr=e),Yl)},movementY:function(e){return"movementY"in e?e.movementY:Xl}}),Fu=yt(jl),ry=Ee({},jl,{dataTransfer:0}),iy=yt(ry),oy=Ee({},Yi,{relatedTarget:0}),Zl=yt(oy),ly=Ee({},Br,{animationName:0,elapsedTime:0,pseudoElement:0}),sy=yt(ly),ay=Ee({},Br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cy=yt(ay),uy=Ee({},Br,{data:0}),Bu=yt(uy),dy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},py={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function my(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fy[e])?!!t[e]:!1}function gc(){return my}var hy=Ee({},Yi,{key:function(e){if(e.key){var t=dy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ao(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?py[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gc,charCode:function(e){return e.type==="keypress"?Ao(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ao(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gy=yt(hy),xy=Ee({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uu=yt(xy),yy=Ee({},Yi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gc}),vy=yt(yy),by=Ee({},Br,{propertyName:0,elapsedTime:0,pseudoElement:0}),ky=yt(by),wy=Ee({},jl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jy=yt(wy),_y=[9,13,27,32],xc=on&&"CompositionEvent"in window,fi=null;on&&"documentMode"in document&&(fi=document.documentMode);var Sy=on&&"TextEvent"in window&&!fi,Wf=on&&(!xc||fi&&8<fi&&11>=fi),Vu=" ",Wu=!1;function Hf(e,t){switch(e){case"keyup":return _y.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dr=!1;function Cy(e,t){switch(e){case"compositionend":return qf(t);case"keypress":return t.which!==32?null:(Wu=!0,Vu);case"textInput":return e=t.data,e===Vu&&Wu?null:e;default:return null}}function Ny(e,t){if(dr)return e==="compositionend"||!xc&&Hf(e,t)?(e=Vf(),Po=mc=gn=null,dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wf&&t.locale!=="ko"?null:t.data;default:return null}}var Ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ey[e.type]:t==="textarea"}function Kf(e,t,n,r){_f(r),t=Yo(t,"onChange"),0<t.length&&(n=new hc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var mi=null,Pi=null;function zy(e){im(e,0)}function _l(e){var t=mr(e);if(xf(t))return e}function Ty(e,t){if(e==="change")return t}var Qf=!1;if(on){var es;if(on){var ts="oninput"in document;if(!ts){var qu=document.createElement("div");qu.setAttribute("oninput","return;"),ts=typeof qu.oninput=="function"}es=ts}else es=!1;Qf=es&&(!document.documentMode||9<document.documentMode)}function Ku(){mi&&(mi.detachEvent("onpropertychange",Gf),Pi=mi=null)}function Gf(e){if(e.propertyName==="value"&&_l(Pi)){var t=[];Kf(t,Pi,e,cc(e)),Ef(zy,t)}}function Py(e,t,n){e==="focusin"?(Ku(),mi=t,Pi=n,mi.attachEvent("onpropertychange",Gf)):e==="focusout"&&Ku()}function Ay(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _l(Pi)}function Ly(e,t){if(e==="click")return _l(t)}function Ry(e,t){if(e==="input"||e==="change")return _l(t)}function Iy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ft=typeof Object.is=="function"?Object.is:Iy;function Ai(e,t){if(Ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$s.call(t,i)||!Ft(e[i],t[i]))return!1}return!0}function Qu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gu(e,t){var n=Qu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qu(n)}}function Jf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Jf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yf(){for(var e=window,t=Wo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wo(e.document)}return t}function yc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function My(e){var t=Yf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Jf(n.ownerDocument.documentElement,n)){if(r!==null&&yc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Gu(n,l);var s=Gu(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Oy=on&&"documentMode"in document&&11>=document.documentMode,pr=null,ra=null,hi=null,ia=!1;function Ju(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ia||pr==null||pr!==Wo(r)||(r=pr,"selectionStart"in r&&yc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hi&&Ai(hi,r)||(hi=r,r=Yo(ra,"onSelect"),0<r.length&&(t=new hc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=pr)))}function mo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fr={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionend:mo("Transition","TransitionEnd")},ns={},Xf={};on&&(Xf=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function Sl(e){if(ns[e])return ns[e];if(!fr[e])return e;var t=fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xf)return ns[e]=t[n];return e}var Zf=Sl("animationend"),em=Sl("animationiteration"),tm=Sl("animationstart"),nm=Sl("transitionend"),rm=new Map,Yu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ln(e,t){rm.set(e,t),er(t,[e])}for(var rs=0;rs<Yu.length;rs++){var is=Yu[rs],$y=is.toLowerCase(),Dy=is[0].toUpperCase()+is.slice(1);Ln($y,"on"+Dy)}Ln(Zf,"onAnimationEnd");Ln(em,"onAnimationIteration");Ln(tm,"onAnimationStart");Ln("dblclick","onDoubleClick");Ln("focusin","onFocus");Ln("focusout","onBlur");Ln(nm,"onTransitionEnd");Tr("onMouseEnter",["mouseout","mouseover"]);Tr("onMouseLeave",["mouseout","mouseover"]);Tr("onPointerEnter",["pointerout","pointerover"]);Tr("onPointerLeave",["pointerout","pointerover"]);er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));er("onBeforeInput",["compositionend","keypress","textInput","paste"]);er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fy=new Set("cancel close invalid load scroll toggle".split(" ").concat(ci));function Xu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$x(r,t,void 0,e),e.currentTarget=null}function im(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==l&&i.isPropagationStopped())break e;Xu(i,a,u),l=c}else for(s=0;s<r.length;s++){if(a=r[s],c=a.instance,u=a.currentTarget,a=a.listener,c!==l&&i.isPropagationStopped())break e;Xu(i,a,u),l=c}}}if(qo)throw e=Zs,qo=!1,Zs=null,e}function we(e,t){var n=t[ca];n===void 0&&(n=t[ca]=new Set);var r=e+"__bubble";n.has(r)||(om(t,e,2,!1),n.add(r))}function os(e,t,n){var r=0;t&&(r|=4),om(n,e,r,t)}var ho="_reactListening"+Math.random().toString(36).slice(2);function Li(e){if(!e[ho]){e[ho]=!0,pf.forEach(function(n){n!=="selectionchange"&&(Fy.has(n)||os(n,!1,e),os(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ho]||(t[ho]=!0,os("selectionchange",!1,t))}}function om(e,t,n,r){switch(Uf(t)){case 1:var i=ey;break;case 4:i=ty;break;default:i=fc}n=i.bind(null,t,n,e),i=void 0,!Xs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ls(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Un(a),s===null)return;if(c=s.tag,c===5||c===6){r=l=s;continue e}a=a.parentNode}}r=r.return}Ef(function(){var u=l,d=cc(n),p=[];e:{var f=rm.get(e);if(f!==void 0){var m=hc,k=e;switch(e){case"keypress":if(Ao(n)===0)break e;case"keydown":case"keyup":m=gy;break;case"focusin":k="focus",m=Zl;break;case"focusout":k="blur",m=Zl;break;case"beforeblur":case"afterblur":m=Zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Fu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=iy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=vy;break;case Zf:case em:case tm:m=sy;break;case nm:m=ky;break;case"scroll":m=ny;break;case"wheel":m=jy;break;case"copy":case"cut":case"paste":m=cy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Uu}var w=(t&4)!==0,P=!w&&e==="scroll",g=w?f!==null?f+"Capture":null:f;w=[];for(var h=u,x;h!==null;){x=h;var z=x.stateNode;if(x.tag===5&&z!==null&&(x=z,g!==null&&(z=Ni(h,g),z!=null&&w.push(Ri(h,z,x)))),P)break;h=h.return}0<w.length&&(f=new m(f,k,null,n,d),p.push({event:f,listeners:w}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==Js&&(k=n.relatedTarget||n.fromElement)&&(Un(k)||k[ln]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(k=n.relatedTarget||n.toElement,m=u,k=k?Un(k):null,k!==null&&(P=tr(k),k!==P||k.tag!==5&&k.tag!==6)&&(k=null)):(m=null,k=u),m!==k)){if(w=Fu,z="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(w=Uu,z="onPointerLeave",g="onPointerEnter",h="pointer"),P=m==null?f:mr(m),x=k==null?f:mr(k),f=new w(z,h+"leave",m,n,d),f.target=P,f.relatedTarget=x,z=null,Un(d)===u&&(w=new w(g,h+"enter",k,n,d),w.target=x,w.relatedTarget=P,z=w),P=z,m&&k)t:{for(w=m,g=k,h=0,x=w;x;x=or(x))h++;for(x=0,z=g;z;z=or(z))x++;for(;0<h-x;)w=or(w),h--;for(;0<x-h;)g=or(g),x--;for(;h--;){if(w===g||g!==null&&w===g.alternate)break t;w=or(w),g=or(g)}w=null}else w=null;m!==null&&Zu(p,f,m,w,!1),k!==null&&P!==null&&Zu(p,P,k,w,!0)}}e:{if(f=u?mr(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var j=Ty;else if(Hu(f))if(Qf)j=Ry;else{j=Ay;var y=Py}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(j=Ly);if(j&&(j=j(e,u))){Kf(p,j,n,d);break e}y&&y(e,f,u),e==="focusout"&&(y=f._wrapperState)&&y.controlled&&f.type==="number"&&Hs(f,"number",f.value)}switch(y=u?mr(u):window,e){case"focusin":(Hu(y)||y.contentEditable==="true")&&(pr=y,ra=u,hi=null);break;case"focusout":hi=ra=pr=null;break;case"mousedown":ia=!0;break;case"contextmenu":case"mouseup":case"dragend":ia=!1,Ju(p,n,d);break;case"selectionchange":if(Oy)break;case"keydown":case"keyup":Ju(p,n,d)}var _;if(xc)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else dr?Hf(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Wf&&n.locale!=="ko"&&(dr||A!=="onCompositionStart"?A==="onCompositionEnd"&&dr&&(_=Vf()):(gn=d,mc="value"in gn?gn.value:gn.textContent,dr=!0)),y=Yo(u,A),0<y.length&&(A=new Bu(A,e,null,n,d),p.push({event:A,listeners:y}),_?A.data=_:(_=qf(n),_!==null&&(A.data=_)))),(_=Sy?Cy(e,n):Ny(e,n))&&(u=Yo(u,"onBeforeInput"),0<u.length&&(d=new Bu("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=_))}im(p,t)})}function Ri(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Ni(e,n),l!=null&&r.unshift(Ri(e,l,i)),l=Ni(e,t),l!=null&&r.push(Ri(e,l,i))),e=e.return}return r}function or(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Zu(e,t,n,r,i){for(var l=t._reactName,s=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,i?(c=Ni(n,l),c!=null&&s.unshift(Ri(n,c,a))):i||(c=Ni(n,l),c!=null&&s.push(Ri(n,c,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var By=/\r\n?/g,Uy=/\u0000|\uFFFD/g;function ed(e){return(typeof e=="string"?e:""+e).replace(By,`
`).replace(Uy,"")}function go(e,t,n){if(t=ed(t),ed(e)!==t&&n)throw Error(G(425))}function Xo(){}var oa=null,la=null;function sa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var aa=typeof setTimeout=="function"?setTimeout:void 0,Vy=typeof clearTimeout=="function"?clearTimeout:void 0,td=typeof Promise=="function"?Promise:void 0,Wy=typeof queueMicrotask=="function"?queueMicrotask:typeof td<"u"?function(e){return td.resolve(null).then(e).catch(Hy)}:aa;function Hy(e){setTimeout(function(){throw e})}function ss(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ti(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ti(t)}function jn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ur=Math.random().toString(36).slice(2),Ht="__reactFiber$"+Ur,Ii="__reactProps$"+Ur,ln="__reactContainer$"+Ur,ca="__reactEvents$"+Ur,qy="__reactListeners$"+Ur,Ky="__reactHandles$"+Ur;function Un(e){var t=e[Ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ln]||n[Ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=nd(e);e!==null;){if(n=e[Ht])return n;e=nd(e)}return t}e=n,n=e.parentNode}return null}function Xi(e){return e=e[Ht]||e[ln],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(G(33))}function Cl(e){return e[Ii]||null}var ua=[],hr=-1;function Rn(e){return{current:e}}function je(e){0>hr||(e.current=ua[hr],ua[hr]=null,hr--)}function be(e,t){hr++,ua[hr]=e.current,e.current=t}var Pn={},Ke=Rn(Pn),rt=Rn(!1),Gn=Pn;function Pr(e,t){var n=e.type.contextTypes;if(!n)return Pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function it(e){return e=e.childContextTypes,e!=null}function Zo(){je(rt),je(Ke)}function rd(e,t,n){if(Ke.current!==Pn)throw Error(G(168));be(Ke,t),be(rt,n)}function lm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(G(108,Px(e)||"Unknown",i));return Ee({},n,r)}function el(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pn,Gn=Ke.current,be(Ke,e),be(rt,rt.current),!0}function id(e,t,n){var r=e.stateNode;if(!r)throw Error(G(169));n?(e=lm(e,t,Gn),r.__reactInternalMemoizedMergedChildContext=e,je(rt),je(Ke),be(Ke,e)):je(rt),be(rt,n)}var Zt=null,Nl=!1,as=!1;function sm(e){Zt===null?Zt=[e]:Zt.push(e)}function Qy(e){Nl=!0,sm(e)}function In(){if(!as&&Zt!==null){as=!0;var e=0,t=ye;try{var n=Zt;for(ye=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Zt=null,Nl=!1}catch(i){throw Zt!==null&&(Zt=Zt.slice(e+1)),Af(uc,In),i}finally{ye=t,as=!1}}return null}var gr=[],xr=0,tl=null,nl=0,jt=[],_t=0,Jn=null,en=1,tn="";function Dn(e,t){gr[xr++]=nl,gr[xr++]=tl,tl=e,nl=t}function am(e,t,n){jt[_t++]=en,jt[_t++]=tn,jt[_t++]=Jn,Jn=e;var r=en;e=tn;var i=32-Ot(r)-1;r&=~(1<<i),n+=1;var l=32-Ot(t)+i;if(30<l){var s=i-i%5;l=(r&(1<<s)-1).toString(32),r>>=s,i-=s,en=1<<32-Ot(t)+i|n<<i|r,tn=l+e}else en=1<<l|n<<i|r,tn=e}function vc(e){e.return!==null&&(Dn(e,1),am(e,1,0))}function bc(e){for(;e===tl;)tl=gr[--xr],gr[xr]=null,nl=gr[--xr],gr[xr]=null;for(;e===Jn;)Jn=jt[--_t],jt[_t]=null,tn=jt[--_t],jt[_t]=null,en=jt[--_t],jt[_t]=null}var ht=null,ft=null,_e=!1,Mt=null;function cm(e,t){var n=Ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function od(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,ft=jn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jn!==null?{id:en,overflow:tn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ht=e,ft=null,!0):!1;default:return!1}}function da(e){return(e.mode&1)!==0&&(e.flags&128)===0}function pa(e){if(_e){var t=ft;if(t){var n=t;if(!od(e,t)){if(da(e))throw Error(G(418));t=jn(n.nextSibling);var r=ht;t&&od(e,t)?cm(r,n):(e.flags=e.flags&-4097|2,_e=!1,ht=e)}}else{if(da(e))throw Error(G(418));e.flags=e.flags&-4097|2,_e=!1,ht=e}}}function ld(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function xo(e){if(e!==ht)return!1;if(!_e)return ld(e),_e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!sa(e.type,e.memoizedProps)),t&&(t=ft)){if(da(e))throw um(),Error(G(418));for(;t;)cm(e,t),t=jn(t.nextSibling)}if(ld(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ft=jn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=ht?jn(e.stateNode.nextSibling):null;return!0}function um(){for(var e=ft;e;)e=jn(e.nextSibling)}function Ar(){ft=ht=null,_e=!1}function kc(e){Mt===null?Mt=[e]:Mt.push(e)}var Gy=cn.ReactCurrentBatchConfig;function Zr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(G(309));var r=n.stateNode}if(!r)throw Error(G(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(s){var a=i.refs;s===null?delete a[l]:a[l]=s},t._stringRef=l,t)}if(typeof e!="string")throw Error(G(284));if(!n._owner)throw Error(G(290,e))}return e}function yo(e,t){throw e=Object.prototype.toString.call(t),Error(G(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function sd(e){var t=e._init;return t(e._payload)}function dm(e){function t(g,h){if(e){var x=g.deletions;x===null?(g.deletions=[h],g.flags|=16):x.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=Nn(g,h),g.index=0,g.sibling=null,g}function l(g,h,x){return g.index=x,e?(x=g.alternate,x!==null?(x=x.index,x<h?(g.flags|=2,h):x):(g.flags|=2,h)):(g.flags|=1048576,h)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,h,x,z){return h===null||h.tag!==6?(h=hs(x,g.mode,z),h.return=g,h):(h=i(h,x),h.return=g,h)}function c(g,h,x,z){var j=x.type;return j===ur?d(g,h,x.props.children,z,x.key):h!==null&&(h.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===pn&&sd(j)===h.type)?(z=i(h,x.props),z.ref=Zr(g,h,x),z.return=g,z):(z=Do(x.type,x.key,x.props,null,g.mode,z),z.ref=Zr(g,h,x),z.return=g,z)}function u(g,h,x,z){return h===null||h.tag!==4||h.stateNode.containerInfo!==x.containerInfo||h.stateNode.implementation!==x.implementation?(h=gs(x,g.mode,z),h.return=g,h):(h=i(h,x.children||[]),h.return=g,h)}function d(g,h,x,z,j){return h===null||h.tag!==7?(h=qn(x,g.mode,z,j),h.return=g,h):(h=i(h,x),h.return=g,h)}function p(g,h,x){if(typeof h=="string"&&h!==""||typeof h=="number")return h=hs(""+h,g.mode,x),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case lo:return x=Do(h.type,h.key,h.props,null,g.mode,x),x.ref=Zr(g,null,h),x.return=g,x;case cr:return h=gs(h,g.mode,x),h.return=g,h;case pn:var z=h._init;return p(g,z(h._payload),x)}if(si(h)||Qr(h))return h=qn(h,g.mode,x,null),h.return=g,h;yo(g,h)}return null}function f(g,h,x,z){var j=h!==null?h.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return j!==null?null:a(g,h,""+x,z);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case lo:return x.key===j?c(g,h,x,z):null;case cr:return x.key===j?u(g,h,x,z):null;case pn:return j=x._init,f(g,h,j(x._payload),z)}if(si(x)||Qr(x))return j!==null?null:d(g,h,x,z,null);yo(g,x)}return null}function m(g,h,x,z,j){if(typeof z=="string"&&z!==""||typeof z=="number")return g=g.get(x)||null,a(h,g,""+z,j);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case lo:return g=g.get(z.key===null?x:z.key)||null,c(h,g,z,j);case cr:return g=g.get(z.key===null?x:z.key)||null,u(h,g,z,j);case pn:var y=z._init;return m(g,h,x,y(z._payload),j)}if(si(z)||Qr(z))return g=g.get(x)||null,d(h,g,z,j,null);yo(h,z)}return null}function k(g,h,x,z){for(var j=null,y=null,_=h,A=h=0,D=null;_!==null&&A<x.length;A++){_.index>A?(D=_,_=null):D=_.sibling;var T=f(g,_,x[A],z);if(T===null){_===null&&(_=D);break}e&&_&&T.alternate===null&&t(g,_),h=l(T,h,A),y===null?j=T:y.sibling=T,y=T,_=D}if(A===x.length)return n(g,_),_e&&Dn(g,A),j;if(_===null){for(;A<x.length;A++)_=p(g,x[A],z),_!==null&&(h=l(_,h,A),y===null?j=_:y.sibling=_,y=_);return _e&&Dn(g,A),j}for(_=r(g,_);A<x.length;A++)D=m(_,g,A,x[A],z),D!==null&&(e&&D.alternate!==null&&_.delete(D.key===null?A:D.key),h=l(D,h,A),y===null?j=D:y.sibling=D,y=D);return e&&_.forEach(function(v){return t(g,v)}),_e&&Dn(g,A),j}function w(g,h,x,z){var j=Qr(x);if(typeof j!="function")throw Error(G(150));if(x=j.call(x),x==null)throw Error(G(151));for(var y=j=null,_=h,A=h=0,D=null,T=x.next();_!==null&&!T.done;A++,T=x.next()){_.index>A?(D=_,_=null):D=_.sibling;var v=f(g,_,T.value,z);if(v===null){_===null&&(_=D);break}e&&_&&v.alternate===null&&t(g,_),h=l(v,h,A),y===null?j=v:y.sibling=v,y=v,_=D}if(T.done)return n(g,_),_e&&Dn(g,A),j;if(_===null){for(;!T.done;A++,T=x.next())T=p(g,T.value,z),T!==null&&(h=l(T,h,A),y===null?j=T:y.sibling=T,y=T);return _e&&Dn(g,A),j}for(_=r(g,_);!T.done;A++,T=x.next())T=m(_,g,A,T.value,z),T!==null&&(e&&T.alternate!==null&&_.delete(T.key===null?A:T.key),h=l(T,h,A),y===null?j=T:y.sibling=T,y=T);return e&&_.forEach(function(E){return t(g,E)}),_e&&Dn(g,A),j}function P(g,h,x,z){if(typeof x=="object"&&x!==null&&x.type===ur&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case lo:e:{for(var j=x.key,y=h;y!==null;){if(y.key===j){if(j=x.type,j===ur){if(y.tag===7){n(g,y.sibling),h=i(y,x.props.children),h.return=g,g=h;break e}}else if(y.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===pn&&sd(j)===y.type){n(g,y.sibling),h=i(y,x.props),h.ref=Zr(g,y,x),h.return=g,g=h;break e}n(g,y);break}else t(g,y);y=y.sibling}x.type===ur?(h=qn(x.props.children,g.mode,z,x.key),h.return=g,g=h):(z=Do(x.type,x.key,x.props,null,g.mode,z),z.ref=Zr(g,h,x),z.return=g,g=z)}return s(g);case cr:e:{for(y=x.key;h!==null;){if(h.key===y)if(h.tag===4&&h.stateNode.containerInfo===x.containerInfo&&h.stateNode.implementation===x.implementation){n(g,h.sibling),h=i(h,x.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=gs(x,g.mode,z),h.return=g,g=h}return s(g);case pn:return y=x._init,P(g,h,y(x._payload),z)}if(si(x))return k(g,h,x,z);if(Qr(x))return w(g,h,x,z);yo(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,x),h.return=g,g=h):(n(g,h),h=hs(x,g.mode,z),h.return=g,g=h),s(g)):n(g,h)}return P}var Lr=dm(!0),pm=dm(!1),rl=Rn(null),il=null,yr=null,wc=null;function jc(){wc=yr=il=null}function _c(e){var t=rl.current;je(rl),e._currentValue=t}function fa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Cr(e,t){il=e,wc=yr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(nt=!0),e.firstContext=null)}function zt(e){var t=e._currentValue;if(wc!==e)if(e={context:e,memoizedValue:t,next:null},yr===null){if(il===null)throw Error(G(308));yr=e,il.dependencies={lanes:0,firstContext:e}}else yr=yr.next=e;return t}var Vn=null;function Sc(e){Vn===null?Vn=[e]:Vn.push(e)}function fm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Sc(t)):(n.next=i.next,i.next=n),t.interleaved=n,sn(e,r)}function sn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var fn=!1;function Cc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _n(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,sn(e,n)}return i=r.interleaved,i===null?(t.next=t,Sc(r)):(t.next=i.next,i.next=t),r.interleaved=t,sn(e,n)}function Lo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,dc(e,n)}}function ad(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ol(e,t,n,r){var i=e.updateQueue;fn=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,u=c.next;c.next=null,s===null?l=u:s.next=u,s=c;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=c))}if(l!==null){var p=i.baseState;s=0,d=u=c=null,a=l;do{var f=a.lane,m=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=e,w=a;switch(f=t,m=n,w.tag){case 1:if(k=w.payload,typeof k=="function"){p=k.call(m,p,f);break e}p=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=w.payload,f=typeof k=="function"?k.call(m,p,f):k,f==null)break e;p=Ee({},p,f);break e;case 2:fn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=m,c=p):d=d.next=m,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Xn|=s,e.lanes=s,e.memoizedState=p}}function cd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(G(191,i));i.call(r)}}}var Zi={},Qt=Rn(Zi),Mi=Rn(Zi),Oi=Rn(Zi);function Wn(e){if(e===Zi)throw Error(G(174));return e}function Nc(e,t){switch(be(Oi,t),be(Mi,e),be(Qt,Zi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ks(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ks(t,e)}je(Qt),be(Qt,t)}function Rr(){je(Qt),je(Mi),je(Oi)}function hm(e){Wn(Oi.current);var t=Wn(Qt.current),n=Ks(t,e.type);t!==n&&(be(Mi,e),be(Qt,n))}function Ec(e){Mi.current===e&&(je(Qt),je(Mi))}var Ce=Rn(0);function ll(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cs=[];function zc(){for(var e=0;e<cs.length;e++)cs[e]._workInProgressVersionPrimary=null;cs.length=0}var Ro=cn.ReactCurrentDispatcher,us=cn.ReactCurrentBatchConfig,Yn=0,Ne=null,Me=null,$e=null,sl=!1,gi=!1,$i=0,Jy=0;function We(){throw Error(G(321))}function Tc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ft(e[n],t[n]))return!1;return!0}function Pc(e,t,n,r,i,l){if(Yn=l,Ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ro.current=e===null||e.memoizedState===null?ev:tv,e=n(r,i),gi){l=0;do{if(gi=!1,$i=0,25<=l)throw Error(G(301));l+=1,$e=Me=null,t.updateQueue=null,Ro.current=nv,e=n(r,i)}while(gi)}if(Ro.current=al,t=Me!==null&&Me.next!==null,Yn=0,$e=Me=Ne=null,sl=!1,t)throw Error(G(300));return e}function Ac(){var e=$i!==0;return $i=0,e}function Vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Ne.memoizedState=$e=e:$e=$e.next=e,$e}function Tt(){if(Me===null){var e=Ne.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=$e===null?Ne.memoizedState:$e.next;if(t!==null)$e=t,Me=e;else{if(e===null)throw Error(G(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},$e===null?Ne.memoizedState=$e=e:$e=$e.next=e}return $e}function Di(e,t){return typeof t=="function"?t(e):t}function ds(e){var t=Tt(),n=t.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=e;var r=Me,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=s=null,c=null,u=l;do{var d=u.lane;if((Yn&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=p,s=r):c=c.next=p,Ne.lanes|=d,Xn|=d}u=u.next}while(u!==null&&u!==l);c===null?s=r:c.next=a,Ft(r,t.memoizedState)||(nt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,Ne.lanes|=l,Xn|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ps(e){var t=Tt(),n=t.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do l=e(l,s.action),s=s.next;while(s!==i);Ft(l,t.memoizedState)||(nt=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function gm(){}function xm(e,t){var n=Ne,r=Tt(),i=t(),l=!Ft(r.memoizedState,i);if(l&&(r.memoizedState=i,nt=!0),r=r.queue,Lc(bm.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,Fi(9,vm.bind(null,n,r,i,t),void 0,null),De===null)throw Error(G(349));Yn&30||ym(n,t,i)}return i}function ym(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vm(e,t,n,r){t.value=n,t.getSnapshot=r,km(t)&&wm(e)}function bm(e,t,n){return n(function(){km(t)&&wm(e)})}function km(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ft(e,n)}catch{return!0}}function wm(e){var t=sn(e,1);t!==null&&$t(t,e,1,-1)}function ud(e){var t=Vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Di,lastRenderedState:e},t.queue=e,e=e.dispatch=Zy.bind(null,Ne,e),[t.memoizedState,e]}function Fi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function jm(){return Tt().memoizedState}function Io(e,t,n,r){var i=Vt();Ne.flags|=e,i.memoizedState=Fi(1|t,n,void 0,r===void 0?null:r)}function El(e,t,n,r){var i=Tt();r=r===void 0?null:r;var l=void 0;if(Me!==null){var s=Me.memoizedState;if(l=s.destroy,r!==null&&Tc(r,s.deps)){i.memoizedState=Fi(t,n,l,r);return}}Ne.flags|=e,i.memoizedState=Fi(1|t,n,l,r)}function dd(e,t){return Io(8390656,8,e,t)}function Lc(e,t){return El(2048,8,e,t)}function _m(e,t){return El(4,2,e,t)}function Sm(e,t){return El(4,4,e,t)}function Cm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nm(e,t,n){return n=n!=null?n.concat([e]):null,El(4,4,Cm.bind(null,t,e),n)}function Rc(){}function Em(e,t){var n=Tt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Tc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zm(e,t){var n=Tt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Tc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Tm(e,t,n){return Yn&21?(Ft(n,t)||(n=If(),Ne.lanes|=n,Xn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,nt=!0),e.memoizedState=n)}function Yy(e,t){var n=ye;ye=n!==0&&4>n?n:4,e(!0);var r=us.transition;us.transition={};try{e(!1),t()}finally{ye=n,us.transition=r}}function Pm(){return Tt().memoizedState}function Xy(e,t,n){var r=Cn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Am(e))Lm(t,n);else if(n=fm(e,t,n,r),n!==null){var i=Je();$t(n,e,r,i),Rm(n,t,r)}}function Zy(e,t,n){var r=Cn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Am(e))Lm(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,a=l(s,n);if(i.hasEagerState=!0,i.eagerState=a,Ft(a,s)){var c=t.interleaved;c===null?(i.next=i,Sc(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=fm(e,t,i,r),n!==null&&(i=Je(),$t(n,e,r,i),Rm(n,t,r))}}function Am(e){var t=e.alternate;return e===Ne||t!==null&&t===Ne}function Lm(e,t){gi=sl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,dc(e,n)}}var al={readContext:zt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},ev={readContext:zt,useCallback:function(e,t){return Vt().memoizedState=[e,t===void 0?null:t],e},useContext:zt,useEffect:dd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Io(4194308,4,Cm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Io(4194308,4,e,t)},useInsertionEffect:function(e,t){return Io(4,2,e,t)},useMemo:function(e,t){var n=Vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Vt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Xy.bind(null,Ne,e),[r.memoizedState,e]},useRef:function(e){var t=Vt();return e={current:e},t.memoizedState=e},useState:ud,useDebugValue:Rc,useDeferredValue:function(e){return Vt().memoizedState=e},useTransition:function(){var e=ud(!1),t=e[0];return e=Yy.bind(null,e[1]),Vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ne,i=Vt();if(_e){if(n===void 0)throw Error(G(407));n=n()}else{if(n=t(),De===null)throw Error(G(349));Yn&30||ym(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,dd(bm.bind(null,r,l,e),[e]),r.flags|=2048,Fi(9,vm.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Vt(),t=De.identifierPrefix;if(_e){var n=tn,r=en;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$i++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Jy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},tv={readContext:zt,useCallback:Em,useContext:zt,useEffect:Lc,useImperativeHandle:Nm,useInsertionEffect:_m,useLayoutEffect:Sm,useMemo:zm,useReducer:ds,useRef:jm,useState:function(){return ds(Di)},useDebugValue:Rc,useDeferredValue:function(e){var t=Tt();return Tm(t,Me.memoizedState,e)},useTransition:function(){var e=ds(Di)[0],t=Tt().memoizedState;return[e,t]},useMutableSource:gm,useSyncExternalStore:xm,useId:Pm,unstable_isNewReconciler:!1},nv={readContext:zt,useCallback:Em,useContext:zt,useEffect:Lc,useImperativeHandle:Nm,useInsertionEffect:_m,useLayoutEffect:Sm,useMemo:zm,useReducer:ps,useRef:jm,useState:function(){return ps(Di)},useDebugValue:Rc,useDeferredValue:function(e){var t=Tt();return Me===null?t.memoizedState=e:Tm(t,Me.memoizedState,e)},useTransition:function(){var e=ps(Di)[0],t=Tt().memoizedState;return[e,t]},useMutableSource:gm,useSyncExternalStore:xm,useId:Pm,unstable_isNewReconciler:!1};function Rt(e,t){if(e&&e.defaultProps){t=Ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ma(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zl={isMounted:function(e){return(e=e._reactInternals)?tr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Je(),i=Cn(e),l=nn(r,i);l.payload=t,n!=null&&(l.callback=n),t=_n(e,l,i),t!==null&&($t(t,e,i,r),Lo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Je(),i=Cn(e),l=nn(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=_n(e,l,i),t!==null&&($t(t,e,i,r),Lo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Je(),r=Cn(e),i=nn(n,r);i.tag=2,t!=null&&(i.callback=t),t=_n(e,i,r),t!==null&&($t(t,e,r,n),Lo(t,e,r))}};function pd(e,t,n,r,i,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,s):t.prototype&&t.prototype.isPureReactComponent?!Ai(n,r)||!Ai(i,l):!0}function Im(e,t,n){var r=!1,i=Pn,l=t.contextType;return typeof l=="object"&&l!==null?l=zt(l):(i=it(t)?Gn:Ke.current,r=t.contextTypes,l=(r=r!=null)?Pr(e,i):Pn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function fd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&zl.enqueueReplaceState(t,t.state,null)}function ha(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Cc(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=zt(l):(l=it(t)?Gn:Ke.current,i.context=Pr(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ma(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&zl.enqueueReplaceState(i,i.state,null),ol(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ir(e,t){try{var n="",r=t;do n+=Tx(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function fs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ga(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rv=typeof WeakMap=="function"?WeakMap:Map;function Mm(e,t,n){n=nn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ul||(ul=!0,Ca=r),ga(e,t)},n}function Om(e,t,n){n=nn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ga(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){ga(e,t),typeof r!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function md(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new rv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=xv.bind(null,e,t,n),t.then(e,e))}function hd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=nn(-1,1),t.tag=2,_n(n,t,1))),n.lanes|=1),e)}var iv=cn.ReactCurrentOwner,nt=!1;function Ge(e,t,n,r){t.child=e===null?pm(t,null,n,r):Lr(t,e.child,n,r)}function xd(e,t,n,r,i){n=n.render;var l=t.ref;return Cr(t,i),r=Pc(e,t,n,r,l,i),n=Ac(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,an(e,t,i)):(_e&&n&&vc(t),t.flags|=1,Ge(e,t,r,i),t.child)}function yd(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!Uc(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,$m(e,t,l,r,i)):(e=Do(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:Ai,n(s,r)&&e.ref===t.ref)return an(e,t,i)}return t.flags|=1,e=Nn(l,r),e.ref=t.ref,e.return=t,t.child=e}function $m(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Ai(l,r)&&e.ref===t.ref)if(nt=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(nt=!0);else return t.lanes=e.lanes,an(e,t,i)}return xa(e,t,n,r,i)}function Dm(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(br,dt),dt|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,be(br,dt),dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,be(br,dt),dt|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,be(br,dt),dt|=r;return Ge(e,t,i,n),t.child}function Fm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function xa(e,t,n,r,i){var l=it(n)?Gn:Ke.current;return l=Pr(t,l),Cr(t,i),n=Pc(e,t,n,r,l,i),r=Ac(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,an(e,t,i)):(_e&&r&&vc(t),t.flags|=1,Ge(e,t,n,i),t.child)}function vd(e,t,n,r,i){if(it(n)){var l=!0;el(t)}else l=!1;if(Cr(t,i),t.stateNode===null)Mo(e,t),Im(t,n,r),ha(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=zt(u):(u=it(n)?Gn:Ke.current,u=Pr(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||c!==u)&&fd(t,s,r,u),fn=!1;var f=t.memoizedState;s.state=f,ol(t,r,s,i),c=t.memoizedState,a!==r||f!==c||rt.current||fn?(typeof d=="function"&&(ma(t,n,d,r),c=t.memoizedState),(a=fn||pd(t,n,a,r,f,c,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,mm(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Rt(t.type,a),s.props=u,p=t.pendingProps,f=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=zt(c):(c=it(n)?Gn:Ke.current,c=Pr(t,c));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||f!==c)&&fd(t,s,r,c),fn=!1,f=t.memoizedState,s.state=f,ol(t,r,s,i);var k=t.memoizedState;a!==p||f!==k||rt.current||fn?(typeof m=="function"&&(ma(t,n,m,r),k=t.memoizedState),(u=fn||pd(t,n,u,r,f,k,c)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,k,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,k,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),s.props=r,s.state=k,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return ya(e,t,n,r,l,i)}function ya(e,t,n,r,i,l){Fm(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&id(t,n,!1),an(e,t,l);r=t.stateNode,iv.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Lr(t,e.child,null,l),t.child=Lr(t,null,a,l)):Ge(e,t,a,l),t.memoizedState=r.state,i&&id(t,n,!0),t.child}function Bm(e){var t=e.stateNode;t.pendingContext?rd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rd(e,t.context,!1),Nc(e,t.containerInfo)}function bd(e,t,n,r,i){return Ar(),kc(i),t.flags|=256,Ge(e,t,n,r),t.child}var va={dehydrated:null,treeContext:null,retryLane:0};function ba(e){return{baseLanes:e,cachePool:null,transitions:null}}function Um(e,t,n){var r=t.pendingProps,i=Ce.current,l=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),be(Ce,i&1),e===null)return pa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,l?(r=t.mode,l=t.child,s={mode:"hidden",children:s},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=s):l=Al(s,r,0,null),e=qn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ba(n),t.memoizedState=va,e):Ic(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ov(e,t,s,r,a,i,n);if(l){l=r.fallback,s=t.mode,i=e.child,a=i.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Nn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=Nn(a,l):(l=qn(l,s,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,s=e.child.memoizedState,s=s===null?ba(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=va,r}return l=e.child,e=l.sibling,r=Nn(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ic(e,t){return t=Al({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vo(e,t,n,r){return r!==null&&kc(r),Lr(t,e.child,null,n),e=Ic(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ov(e,t,n,r,i,l,s){if(n)return t.flags&256?(t.flags&=-257,r=fs(Error(G(422))),vo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Al({mode:"visible",children:r.children},i,0,null),l=qn(l,i,s,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Lr(t,e.child,null,s),t.child.memoizedState=ba(s),t.memoizedState=va,l);if(!(t.mode&1))return vo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(G(419)),r=fs(l,r,void 0),vo(e,t,s,r)}if(a=(s&e.childLanes)!==0,nt||a){if(r=De,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,sn(e,i),$t(r,e,i,-1))}return Bc(),r=fs(Error(G(421))),vo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=yv.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,ft=jn(i.nextSibling),ht=t,_e=!0,Mt=null,e!==null&&(jt[_t++]=en,jt[_t++]=tn,jt[_t++]=Jn,en=e.id,tn=e.overflow,Jn=t),t=Ic(t,r.children),t.flags|=4096,t)}function kd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),fa(e.return,t,n)}function ms(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function Vm(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(Ge(e,t,r.children,n),r=Ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kd(e,n,t);else if(e.tag===19)kd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(be(Ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ll(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ms(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ll(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ms(t,!0,n,null,l);break;case"together":ms(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Mo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function an(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(G(153));if(t.child!==null){for(e=t.child,n=Nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function lv(e,t,n){switch(t.tag){case 3:Bm(t),Ar();break;case 5:hm(t);break;case 1:it(t.type)&&el(t);break;case 4:Nc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;be(rl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(be(Ce,Ce.current&1),t.flags|=128,null):n&t.child.childLanes?Um(e,t,n):(be(Ce,Ce.current&1),e=an(e,t,n),e!==null?e.sibling:null);be(Ce,Ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Vm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),be(Ce,Ce.current),r)break;return null;case 22:case 23:return t.lanes=0,Dm(e,t,n)}return an(e,t,n)}var Wm,ka,Hm,qm;Wm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ka=function(){};Hm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Wn(Qt.current);var l=null;switch(n){case"input":i=Vs(e,i),r=Vs(e,r),l=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),l=[];break;case"textarea":i=qs(e,i),r=qs(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xo)}Qs(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Si.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var c=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&a[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(l||(l=[]),l.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(l=l||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Si.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&we("scroll",e),l||a===c||(l=[])):(l=l||[]).push(u,c))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};qm=function(e,t,n,r){n!==r&&(t.flags|=4)};function ei(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sv(e,t,n){var r=t.pendingProps;switch(bc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return it(t.type)&&Zo(),He(t),null;case 3:return r=t.stateNode,Rr(),je(rt),je(Ke),zc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Mt!==null&&(za(Mt),Mt=null))),ka(e,t),He(t),null;case 5:Ec(t);var i=Wn(Oi.current);if(n=t.type,e!==null&&t.stateNode!=null)Hm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(G(166));return He(t),null}if(e=Wn(Qt.current),xo(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ht]=t,r[Ii]=l,e=(t.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<ci.length;i++)we(ci[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Tu(r,l),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},we("invalid",r);break;case"textarea":Au(r,l),we("invalid",r)}Qs(n,l),i=null;for(var s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&go(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&go(r.textContent,a,e),i=["children",""+a]):Si.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&we("scroll",r)}switch(n){case"input":so(r),Pu(r,l,!0);break;case"textarea":so(r),Lu(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Xo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ht]=t,e[Ii]=r,Wm(e,t,!1,!1),t.stateNode=e;e:{switch(s=Gs(n,r),n){case"dialog":we("cancel",e),we("close",e),i=r;break;case"iframe":case"object":case"embed":we("load",e),i=r;break;case"video":case"audio":for(i=0;i<ci.length;i++)we(ci[i],e);i=r;break;case"source":we("error",e),i=r;break;case"img":case"image":case"link":we("error",e),we("load",e),i=r;break;case"details":we("toggle",e),i=r;break;case"input":Tu(e,r),i=Vs(e,r),we("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),we("invalid",e);break;case"textarea":Au(e,r),i=qs(e,r),we("invalid",e);break;default:i=r}Qs(n,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var c=a[l];l==="style"?jf(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&kf(e,c)):l==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ci(e,c):typeof c=="number"&&Ci(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Si.hasOwnProperty(l)?c!=null&&l==="onScroll"&&we("scroll",e):c!=null&&oc(e,l,c,s))}switch(n){case"input":so(e),Pu(e,r,!1);break;case"textarea":so(e),Lu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Tn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?wr(e,!!r.multiple,l,!1):r.defaultValue!=null&&wr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Xo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return He(t),null;case 6:if(e&&t.stateNode!=null)qm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(G(166));if(n=Wn(Oi.current),Wn(Qt.current),xo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ht]=t,(l=r.nodeValue!==n)&&(e=ht,e!==null))switch(e.tag){case 3:go(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&go(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ht]=t,t.stateNode=r}return He(t),null;case 13:if(je(Ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_e&&ft!==null&&t.mode&1&&!(t.flags&128))um(),Ar(),t.flags|=98560,l=!1;else if(l=xo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(G(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(G(317));l[Ht]=t}else Ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;He(t),l=!1}else Mt!==null&&(za(Mt),Mt=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ce.current&1?Oe===0&&(Oe=3):Bc())),t.updateQueue!==null&&(t.flags|=4),He(t),null);case 4:return Rr(),ka(e,t),e===null&&Li(t.stateNode.containerInfo),He(t),null;case 10:return _c(t.type._context),He(t),null;case 17:return it(t.type)&&Zo(),He(t),null;case 19:if(je(Ce),l=t.memoizedState,l===null)return He(t),null;if(r=(t.flags&128)!==0,s=l.rendering,s===null)if(r)ei(l,!1);else{if(Oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ll(e),s!==null){for(t.flags|=128,ei(l,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return be(Ce,Ce.current&1|2),t.child}e=e.sibling}l.tail!==null&&Te()>Mr&&(t.flags|=128,r=!0,ei(l,!1),t.lanes=4194304)}else{if(!r)if(e=ll(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ei(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!_e)return He(t),null}else 2*Te()-l.renderingStartTime>Mr&&n!==1073741824&&(t.flags|=128,r=!0,ei(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(n=l.last,n!==null?n.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Te(),t.sibling=null,n=Ce.current,be(Ce,r?n&1|2:n&1),t):(He(t),null);case 22:case 23:return Fc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?dt&1073741824&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),null;case 24:return null;case 25:return null}throw Error(G(156,t.tag))}function av(e,t){switch(bc(t),t.tag){case 1:return it(t.type)&&Zo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rr(),je(rt),je(Ke),zc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ec(t),null;case 13:if(je(Ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(G(340));Ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return je(Ce),null;case 4:return Rr(),null;case 10:return _c(t.type._context),null;case 22:case 23:return Fc(),null;case 24:return null;default:return null}}var bo=!1,qe=!1,cv=typeof WeakSet=="function"?WeakSet:Set,Z=null;function vr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(e,t,r)}else n.current=null}function wa(e,t,n){try{n()}catch(r){ze(e,t,r)}}var wd=!1;function uv(e,t){if(oa=Go,e=Yf(),yc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var s=0,a=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var m;p!==n||i!==0&&p.nodeType!==3||(a=s+i),p!==l||r!==0&&p.nodeType!==3||(c=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===e)break t;if(f===n&&++u===i&&(a=s),f===l&&++d===r&&(c=s),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(la={focusedElem:e,selectionRange:n},Go=!1,Z=t;Z!==null;)if(t=Z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Z=e;else for(;Z!==null;){t=Z;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var w=k.memoizedProps,P=k.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?w:Rt(t.type,w),P);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(G(163))}}catch(z){ze(t,t.return,z)}if(e=t.sibling,e!==null){e.return=t.return,Z=e;break}Z=t.return}return k=wd,wd=!1,k}function xi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&wa(t,n,l)}i=i.next}while(i!==r)}}function Tl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ja(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Km(e){var t=e.alternate;t!==null&&(e.alternate=null,Km(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ht],delete t[Ii],delete t[ca],delete t[qy],delete t[Ky])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qm(e){return e.tag===5||e.tag===3||e.tag===4}function jd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _a(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xo));else if(r!==4&&(e=e.child,e!==null))for(_a(e,t,n),e=e.sibling;e!==null;)_a(e,t,n),e=e.sibling}function Sa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Sa(e,t,n),e=e.sibling;e!==null;)Sa(e,t,n),e=e.sibling}var Fe=null,It=!1;function un(e,t,n){for(n=n.child;n!==null;)Gm(e,t,n),n=n.sibling}function Gm(e,t,n){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(wl,n)}catch{}switch(n.tag){case 5:qe||vr(n,t);case 6:var r=Fe,i=It;Fe=null,un(e,t,n),Fe=r,It=i,Fe!==null&&(It?(e=Fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(It?(e=Fe,n=n.stateNode,e.nodeType===8?ss(e.parentNode,n):e.nodeType===1&&ss(e,n),Ti(e)):ss(Fe,n.stateNode));break;case 4:r=Fe,i=It,Fe=n.stateNode.containerInfo,It=!0,un(e,t,n),Fe=r,It=i;break;case 0:case 11:case 14:case 15:if(!qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,s=l.destroy;l=l.tag,s!==void 0&&(l&2||l&4)&&wa(n,t,s),i=i.next}while(i!==r)}un(e,t,n);break;case 1:if(!qe&&(vr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ze(n,t,a)}un(e,t,n);break;case 21:un(e,t,n);break;case 22:n.mode&1?(qe=(r=qe)||n.memoizedState!==null,un(e,t,n),qe=r):un(e,t,n);break;default:un(e,t,n)}}function _d(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new cv),t.forEach(function(r){var i=vv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function At(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Fe=a.stateNode,It=!1;break e;case 3:Fe=a.stateNode.containerInfo,It=!0;break e;case 4:Fe=a.stateNode.containerInfo,It=!0;break e}a=a.return}if(Fe===null)throw Error(G(160));Gm(l,s,i),Fe=null,It=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){ze(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Jm(t,e),t=t.sibling}function Jm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(At(t,e),Ut(e),r&4){try{xi(3,e,e.return),Tl(3,e)}catch(w){ze(e,e.return,w)}try{xi(5,e,e.return)}catch(w){ze(e,e.return,w)}}break;case 1:At(t,e),Ut(e),r&512&&n!==null&&vr(n,n.return);break;case 5:if(At(t,e),Ut(e),r&512&&n!==null&&vr(n,n.return),e.flags&32){var i=e.stateNode;try{Ci(i,"")}catch(w){ze(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,s=n!==null?n.memoizedProps:l,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&yf(i,l),Gs(a,s);var u=Gs(a,l);for(s=0;s<c.length;s+=2){var d=c[s],p=c[s+1];d==="style"?jf(i,p):d==="dangerouslySetInnerHTML"?kf(i,p):d==="children"?Ci(i,p):oc(i,d,p,u)}switch(a){case"input":Ws(i,l);break;case"textarea":vf(i,l);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var m=l.value;m!=null?wr(i,!!l.multiple,m,!1):f!==!!l.multiple&&(l.defaultValue!=null?wr(i,!!l.multiple,l.defaultValue,!0):wr(i,!!l.multiple,l.multiple?[]:"",!1))}i[Ii]=l}catch(w){ze(e,e.return,w)}}break;case 6:if(At(t,e),Ut(e),r&4){if(e.stateNode===null)throw Error(G(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(w){ze(e,e.return,w)}}break;case 3:if(At(t,e),Ut(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ti(t.containerInfo)}catch(w){ze(e,e.return,w)}break;case 4:At(t,e),Ut(e);break;case 13:At(t,e),Ut(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||($c=Te())),r&4&&_d(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(qe=(u=qe)||d,At(t,e),qe=u):At(t,e),Ut(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(Z=e,d=e.child;d!==null;){for(p=Z=d;Z!==null;){switch(f=Z,m=f.child,f.tag){case 0:case 11:case 14:case 15:xi(4,f,f.return);break;case 1:vr(f,f.return);var k=f.stateNode;if(typeof k.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(w){ze(r,n,w)}}break;case 5:vr(f,f.return);break;case 22:if(f.memoizedState!==null){Cd(p);continue}}m!==null?(m.return=f,Z=m):Cd(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=p.stateNode,c=p.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=wf("display",s))}catch(w){ze(e,e.return,w)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(w){ze(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:At(t,e),Ut(e),r&4&&_d(e);break;case 21:break;default:At(t,e),Ut(e)}}function Ut(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Qm(n)){var r=n;break e}n=n.return}throw Error(G(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ci(i,""),r.flags&=-33);var l=jd(e);Sa(e,l,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=jd(e);_a(e,a,s);break;default:throw Error(G(161))}}catch(c){ze(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dv(e,t,n){Z=e,Ym(e)}function Ym(e,t,n){for(var r=(e.mode&1)!==0;Z!==null;){var i=Z,l=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||bo;if(!s){var a=i.alternate,c=a!==null&&a.memoizedState!==null||qe;a=bo;var u=qe;if(bo=s,(qe=c)&&!u)for(Z=i;Z!==null;)s=Z,c=s.child,s.tag===22&&s.memoizedState!==null?Nd(i):c!==null?(c.return=s,Z=c):Nd(i);for(;l!==null;)Z=l,Ym(l),l=l.sibling;Z=i,bo=a,qe=u}Sd(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,Z=l):Sd(e)}}function Sd(e){for(;Z!==null;){var t=Z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:qe||Tl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!qe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Rt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&cd(t,l,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}cd(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Ti(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(G(163))}qe||t.flags&512&&ja(t)}catch(f){ze(t,t.return,f)}}if(t===e){Z=null;break}if(n=t.sibling,n!==null){n.return=t.return,Z=n;break}Z=t.return}}function Cd(e){for(;Z!==null;){var t=Z;if(t===e){Z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Z=n;break}Z=t.return}}function Nd(e){for(;Z!==null;){var t=Z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Tl(4,t)}catch(c){ze(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){ze(t,i,c)}}var l=t.return;try{ja(t)}catch(c){ze(t,l,c)}break;case 5:var s=t.return;try{ja(t)}catch(c){ze(t,s,c)}}}catch(c){ze(t,t.return,c)}if(t===e){Z=null;break}var a=t.sibling;if(a!==null){a.return=t.return,Z=a;break}Z=t.return}}var pv=Math.ceil,cl=cn.ReactCurrentDispatcher,Mc=cn.ReactCurrentOwner,Et=cn.ReactCurrentBatchConfig,me=0,De=null,Le=null,Be=0,dt=0,br=Rn(0),Oe=0,Bi=null,Xn=0,Pl=0,Oc=0,yi=null,tt=null,$c=0,Mr=1/0,Xt=null,ul=!1,Ca=null,Sn=null,ko=!1,xn=null,dl=0,vi=0,Na=null,Oo=-1,$o=0;function Je(){return me&6?Te():Oo!==-1?Oo:Oo=Te()}function Cn(e){return e.mode&1?me&2&&Be!==0?Be&-Be:Gy.transition!==null?($o===0&&($o=If()),$o):(e=ye,e!==0||(e=window.event,e=e===void 0?16:Uf(e.type)),e):1}function $t(e,t,n,r){if(50<vi)throw vi=0,Na=null,Error(G(185));Ji(e,n,r),(!(me&2)||e!==De)&&(e===De&&(!(me&2)&&(Pl|=n),Oe===4&&hn(e,Be)),ot(e,r),n===1&&me===0&&!(t.mode&1)&&(Mr=Te()+500,Nl&&In()))}function ot(e,t){var n=e.callbackNode;Gx(e,t);var r=Qo(e,e===De?Be:0);if(r===0)n!==null&&Mu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Mu(n),t===1)e.tag===0?Qy(Ed.bind(null,e)):sm(Ed.bind(null,e)),Wy(function(){!(me&6)&&In()}),n=null;else{switch(Mf(r)){case 1:n=uc;break;case 4:n=Lf;break;case 16:n=Ko;break;case 536870912:n=Rf;break;default:n=Ko}n=oh(n,Xm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Xm(e,t){if(Oo=-1,$o=0,me&6)throw Error(G(327));var n=e.callbackNode;if(Nr()&&e.callbackNode!==n)return null;var r=Qo(e,e===De?Be:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=pl(e,r);else{t=r;var i=me;me|=2;var l=eh();(De!==e||Be!==t)&&(Xt=null,Mr=Te()+500,Hn(e,t));do try{hv();break}catch(a){Zm(e,a)}while(!0);jc(),cl.current=l,me=i,Le!==null?t=0:(De=null,Be=0,t=Oe)}if(t!==0){if(t===2&&(i=ea(e),i!==0&&(r=i,t=Ea(e,i))),t===1)throw n=Bi,Hn(e,0),hn(e,r),ot(e,Te()),n;if(t===6)hn(e,r);else{if(i=e.current.alternate,!(r&30)&&!fv(i)&&(t=pl(e,r),t===2&&(l=ea(e),l!==0&&(r=l,t=Ea(e,l))),t===1))throw n=Bi,Hn(e,0),hn(e,r),ot(e,Te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(G(345));case 2:Fn(e,tt,Xt);break;case 3:if(hn(e,r),(r&130023424)===r&&(t=$c+500-Te(),10<t)){if(Qo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=aa(Fn.bind(null,e,tt,Xt),t);break}Fn(e,tt,Xt);break;case 4:if(hn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Ot(r);l=1<<s,s=t[s],s>i&&(i=s),r&=~l}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pv(r/1960))-r,10<r){e.timeoutHandle=aa(Fn.bind(null,e,tt,Xt),r);break}Fn(e,tt,Xt);break;case 5:Fn(e,tt,Xt);break;default:throw Error(G(329))}}}return ot(e,Te()),e.callbackNode===n?Xm.bind(null,e):null}function Ea(e,t){var n=yi;return e.current.memoizedState.isDehydrated&&(Hn(e,t).flags|=256),e=pl(e,t),e!==2&&(t=tt,tt=n,t!==null&&za(t)),e}function za(e){tt===null?tt=e:tt.push.apply(tt,e)}function fv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!Ft(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function hn(e,t){for(t&=~Oc,t&=~Pl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ot(t),r=1<<n;e[n]=-1,t&=~r}}function Ed(e){if(me&6)throw Error(G(327));Nr();var t=Qo(e,0);if(!(t&1))return ot(e,Te()),null;var n=pl(e,t);if(e.tag!==0&&n===2){var r=ea(e);r!==0&&(t=r,n=Ea(e,r))}if(n===1)throw n=Bi,Hn(e,0),hn(e,t),ot(e,Te()),n;if(n===6)throw Error(G(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fn(e,tt,Xt),ot(e,Te()),null}function Dc(e,t){var n=me;me|=1;try{return e(t)}finally{me=n,me===0&&(Mr=Te()+500,Nl&&In())}}function Zn(e){xn!==null&&xn.tag===0&&!(me&6)&&Nr();var t=me;me|=1;var n=Et.transition,r=ye;try{if(Et.transition=null,ye=1,e)return e()}finally{ye=r,Et.transition=n,me=t,!(me&6)&&In()}}function Fc(){dt=br.current,je(br)}function Hn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Vy(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(bc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zo();break;case 3:Rr(),je(rt),je(Ke),zc();break;case 5:Ec(r);break;case 4:Rr();break;case 13:je(Ce);break;case 19:je(Ce);break;case 10:_c(r.type._context);break;case 22:case 23:Fc()}n=n.return}if(De=e,Le=e=Nn(e.current,null),Be=dt=t,Oe=0,Bi=null,Oc=Pl=Xn=0,tt=yi=null,Vn!==null){for(t=0;t<Vn.length;t++)if(n=Vn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var s=l.next;l.next=i,r.next=s}n.pending=r}Vn=null}return e}function Zm(e,t){do{var n=Le;try{if(jc(),Ro.current=al,sl){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}sl=!1}if(Yn=0,$e=Me=Ne=null,gi=!1,$i=0,Mc.current=null,n===null||n.return===null){Oe=1,Bi=t,Le=null;break}e:{var l=e,s=n.return,a=n,c=t;if(t=Be,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=hd(s);if(m!==null){m.flags&=-257,gd(m,s,a,l,t),m.mode&1&&md(l,u,t),t=m,c=u;var k=t.updateQueue;if(k===null){var w=new Set;w.add(c),t.updateQueue=w}else k.add(c);break e}else{if(!(t&1)){md(l,u,t),Bc();break e}c=Error(G(426))}}else if(_e&&a.mode&1){var P=hd(s);if(P!==null){!(P.flags&65536)&&(P.flags|=256),gd(P,s,a,l,t),kc(Ir(c,a));break e}}l=c=Ir(c,a),Oe!==4&&(Oe=2),yi===null?yi=[l]:yi.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var g=Mm(l,c,t);ad(l,g);break e;case 1:a=c;var h=l.type,x=l.stateNode;if(!(l.flags&128)&&(typeof h.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Sn===null||!Sn.has(x)))){l.flags|=65536,t&=-t,l.lanes|=t;var z=Om(l,a,t);ad(l,z);break e}}l=l.return}while(l!==null)}nh(n)}catch(j){t=j,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function eh(){var e=cl.current;return cl.current=al,e===null?al:e}function Bc(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),De===null||!(Xn&268435455)&&!(Pl&268435455)||hn(De,Be)}function pl(e,t){var n=me;me|=2;var r=eh();(De!==e||Be!==t)&&(Xt=null,Hn(e,t));do try{mv();break}catch(i){Zm(e,i)}while(!0);if(jc(),me=n,cl.current=r,Le!==null)throw Error(G(261));return De=null,Be=0,Oe}function mv(){for(;Le!==null;)th(Le)}function hv(){for(;Le!==null&&!Fx();)th(Le)}function th(e){var t=ih(e.alternate,e,dt);e.memoizedProps=e.pendingProps,t===null?nh(e):Le=t,Mc.current=null}function nh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=av(n,t),n!==null){n.flags&=32767,Le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Oe=6,Le=null;return}}else if(n=sv(n,t,dt),n!==null){Le=n;return}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);Oe===0&&(Oe=5)}function Fn(e,t,n){var r=ye,i=Et.transition;try{Et.transition=null,ye=1,gv(e,t,n,r)}finally{Et.transition=i,ye=r}return null}function gv(e,t,n,r){do Nr();while(xn!==null);if(me&6)throw Error(G(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(G(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Jx(e,l),e===De&&(Le=De=null,Be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ko||(ko=!0,oh(Ko,function(){return Nr(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Et.transition,Et.transition=null;var s=ye;ye=1;var a=me;me|=4,Mc.current=null,uv(e,n),Jm(n,e),My(la),Go=!!oa,la=oa=null,e.current=n,dv(n),Bx(),me=a,ye=s,Et.transition=l}else e.current=n;if(ko&&(ko=!1,xn=e,dl=i),l=e.pendingLanes,l===0&&(Sn=null),Wx(n.stateNode),ot(e,Te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ul)throw ul=!1,e=Ca,Ca=null,e;return dl&1&&e.tag!==0&&Nr(),l=e.pendingLanes,l&1?e===Na?vi++:(vi=0,Na=e):vi=0,In(),null}function Nr(){if(xn!==null){var e=Mf(dl),t=Et.transition,n=ye;try{if(Et.transition=null,ye=16>e?16:e,xn===null)var r=!1;else{if(e=xn,xn=null,dl=0,me&6)throw Error(G(331));var i=me;for(me|=4,Z=e.current;Z!==null;){var l=Z,s=l.child;if(Z.flags&16){var a=l.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(Z=u;Z!==null;){var d=Z;switch(d.tag){case 0:case 11:case 15:xi(8,d,l)}var p=d.child;if(p!==null)p.return=d,Z=p;else for(;Z!==null;){d=Z;var f=d.sibling,m=d.return;if(Km(d),d===u){Z=null;break}if(f!==null){f.return=m,Z=f;break}Z=m}}}var k=l.alternate;if(k!==null){var w=k.child;if(w!==null){k.child=null;do{var P=w.sibling;w.sibling=null,w=P}while(w!==null)}}Z=l}}if(l.subtreeFlags&2064&&s!==null)s.return=l,Z=s;else e:for(;Z!==null;){if(l=Z,l.flags&2048)switch(l.tag){case 0:case 11:case 15:xi(9,l,l.return)}var g=l.sibling;if(g!==null){g.return=l.return,Z=g;break e}Z=l.return}}var h=e.current;for(Z=h;Z!==null;){s=Z;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,Z=x;else e:for(s=h;Z!==null;){if(a=Z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Tl(9,a)}}catch(j){ze(a,a.return,j)}if(a===s){Z=null;break e}var z=a.sibling;if(z!==null){z.return=a.return,Z=z;break e}Z=a.return}}if(me=i,In(),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(wl,e)}catch{}r=!0}return r}finally{ye=n,Et.transition=t}}return!1}function zd(e,t,n){t=Ir(n,t),t=Mm(e,t,1),e=_n(e,t,1),t=Je(),e!==null&&(Ji(e,1,t),ot(e,t))}function ze(e,t,n){if(e.tag===3)zd(e,e,n);else for(;t!==null;){if(t.tag===3){zd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sn===null||!Sn.has(r))){e=Ir(n,e),e=Om(t,e,1),t=_n(t,e,1),e=Je(),t!==null&&(Ji(t,1,e),ot(t,e));break}}t=t.return}}function xv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&n,De===e&&(Be&n)===n&&(Oe===4||Oe===3&&(Be&130023424)===Be&&500>Te()-$c?Hn(e,0):Oc|=n),ot(e,t)}function rh(e,t){t===0&&(e.mode&1?(t=uo,uo<<=1,!(uo&130023424)&&(uo=4194304)):t=1);var n=Je();e=sn(e,t),e!==null&&(Ji(e,t,n),ot(e,n))}function yv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rh(e,n)}function vv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(G(314))}r!==null&&r.delete(t),rh(e,n)}var ih;ih=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||rt.current)nt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return nt=!1,lv(e,t,n);nt=!!(e.flags&131072)}else nt=!1,_e&&t.flags&1048576&&am(t,nl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Mo(e,t),e=t.pendingProps;var i=Pr(t,Ke.current);Cr(t,n),i=Pc(null,t,r,e,i,n);var l=Ac();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,it(r)?(l=!0,el(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Cc(t),i.updater=zl,t.stateNode=i,i._reactInternals=t,ha(t,r,e,n),t=ya(null,t,r,!0,l,n)):(t.tag=0,_e&&l&&vc(t),Ge(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Mo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=kv(r),e=Rt(r,e),i){case 0:t=xa(null,t,r,e,n);break e;case 1:t=vd(null,t,r,e,n);break e;case 11:t=xd(null,t,r,e,n);break e;case 14:t=yd(null,t,r,Rt(r.type,e),n);break e}throw Error(G(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),xa(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),vd(e,t,r,i,n);case 3:e:{if(Bm(t),e===null)throw Error(G(387));r=t.pendingProps,l=t.memoizedState,i=l.element,mm(e,t),ol(t,r,null,n);var s=t.memoizedState;if(r=s.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=Ir(Error(G(423)),t),t=bd(e,t,r,n,i);break e}else if(r!==i){i=Ir(Error(G(424)),t),t=bd(e,t,r,n,i);break e}else for(ft=jn(t.stateNode.containerInfo.firstChild),ht=t,_e=!0,Mt=null,n=pm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ar(),r===i){t=an(e,t,n);break e}Ge(e,t,r,n)}t=t.child}return t;case 5:return hm(t),e===null&&pa(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,s=i.children,sa(r,i)?s=null:l!==null&&sa(r,l)&&(t.flags|=32),Fm(e,t),Ge(e,t,s,n),t.child;case 6:return e===null&&pa(t),null;case 13:return Um(e,t,n);case 4:return Nc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Lr(t,null,r,n):Ge(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),xd(e,t,r,i,n);case 7:return Ge(e,t,t.pendingProps,n),t.child;case 8:return Ge(e,t,t.pendingProps.children,n),t.child;case 12:return Ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,s=i.value,be(rl,r._currentValue),r._currentValue=s,l!==null)if(Ft(l.value,s)){if(l.children===i.children&&!rt.current){t=an(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){s=l.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(l.tag===1){c=nn(-1,n&-n),c.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),fa(l.return,n,t),a.lanes|=n;break}c=c.next}}else if(l.tag===10)s=l.type===t.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(G(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),fa(s,n,t),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}Ge(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Cr(t,n),i=zt(i),r=r(i),t.flags|=1,Ge(e,t,r,n),t.child;case 14:return r=t.type,i=Rt(r,t.pendingProps),i=Rt(r.type,i),yd(e,t,r,i,n);case 15:return $m(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),Mo(e,t),t.tag=1,it(r)?(e=!0,el(t)):e=!1,Cr(t,n),Im(t,r,i),ha(t,r,i,n),ya(null,t,r,!0,e,n);case 19:return Vm(e,t,n);case 22:return Dm(e,t,n)}throw Error(G(156,t.tag))};function oh(e,t){return Af(e,t)}function bv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,t,n,r){return new bv(e,t,n,r)}function Uc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kv(e){if(typeof e=="function")return Uc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===sc)return 11;if(e===ac)return 14}return 2}function Nn(e,t){var n=e.alternate;return n===null?(n=Ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Do(e,t,n,r,i,l){var s=2;if(r=e,typeof e=="function")Uc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case ur:return qn(n.children,i,l,t);case lc:s=8,i|=8;break;case Ds:return e=Ct(12,n,t,i|2),e.elementType=Ds,e.lanes=l,e;case Fs:return e=Ct(13,n,t,i),e.elementType=Fs,e.lanes=l,e;case Bs:return e=Ct(19,n,t,i),e.elementType=Bs,e.lanes=l,e;case hf:return Al(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ff:s=10;break e;case mf:s=9;break e;case sc:s=11;break e;case ac:s=14;break e;case pn:s=16,r=null;break e}throw Error(G(130,e==null?e:typeof e,""))}return t=Ct(s,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function qn(e,t,n,r){return e=Ct(7,e,r,t),e.lanes=n,e}function Al(e,t,n,r){return e=Ct(22,e,r,t),e.elementType=hf,e.lanes=n,e.stateNode={isHidden:!1},e}function hs(e,t,n){return e=Ct(6,e,null,t),e.lanes=n,e}function gs(e,t,n){return t=Ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function wv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jl(0),this.expirationTimes=Jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vc(e,t,n,r,i,l,s,a,c){return e=new wv(e,t,n,a,c),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ct(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cc(l),e}function jv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function lh(e){if(!e)return Pn;e=e._reactInternals;e:{if(tr(e)!==e||e.tag!==1)throw Error(G(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(it(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(G(171))}if(e.tag===1){var n=e.type;if(it(n))return lm(e,n,t)}return t}function sh(e,t,n,r,i,l,s,a,c){return e=Vc(n,r,!0,e,i,l,s,a,c),e.context=lh(null),n=e.current,r=Je(),i=Cn(n),l=nn(r,i),l.callback=t??null,_n(n,l,i),e.current.lanes=i,Ji(e,i,r),ot(e,r),e}function Ll(e,t,n,r){var i=t.current,l=Je(),s=Cn(i);return n=lh(n),t.context===null?t.context=n:t.pendingContext=n,t=nn(l,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=_n(i,t,s),e!==null&&($t(e,i,s,l),Lo(e,i,s)),s}function fl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Td(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Wc(e,t){Td(e,t),(e=e.alternate)&&Td(e,t)}function _v(){return null}var ah=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hc(e){this._internalRoot=e}Rl.prototype.render=Hc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(G(409));Ll(e,t,null,null)};Rl.prototype.unmount=Hc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zn(function(){Ll(null,e,null,null)}),t[ln]=null}};function Rl(e){this._internalRoot=e}Rl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Df();e={blockedOn:null,target:e,priority:t};for(var n=0;n<mn.length&&t!==0&&t<mn[n].priority;n++);mn.splice(n,0,e),n===0&&Bf(e)}};function qc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Il(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pd(){}function Sv(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var u=fl(s);l.call(u)}}var s=sh(t,r,e,0,null,!1,!1,"",Pd);return e._reactRootContainer=s,e[ln]=s.current,Li(e.nodeType===8?e.parentNode:e),Zn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=fl(c);a.call(u)}}var c=Vc(e,0,!1,null,null,!1,!1,"",Pd);return e._reactRootContainer=c,e[ln]=c.current,Li(e.nodeType===8?e.parentNode:e),Zn(function(){Ll(t,c,n,r)}),c}function Ml(e,t,n,r,i){var l=n._reactRootContainer;if(l){var s=l;if(typeof i=="function"){var a=i;i=function(){var c=fl(s);a.call(c)}}Ll(t,s,e,i)}else s=Sv(n,t,e,i,r);return fl(s)}Of=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ai(t.pendingLanes);n!==0&&(dc(t,n|1),ot(t,Te()),!(me&6)&&(Mr=Te()+500,In()))}break;case 13:Zn(function(){var r=sn(e,1);if(r!==null){var i=Je();$t(r,e,1,i)}}),Wc(e,1)}};pc=function(e){if(e.tag===13){var t=sn(e,134217728);if(t!==null){var n=Je();$t(t,e,134217728,n)}Wc(e,134217728)}};$f=function(e){if(e.tag===13){var t=Cn(e),n=sn(e,t);if(n!==null){var r=Je();$t(n,e,t,r)}Wc(e,t)}};Df=function(){return ye};Ff=function(e,t){var n=ye;try{return ye=e,t()}finally{ye=n}};Ys=function(e,t,n){switch(t){case"input":if(Ws(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Cl(r);if(!i)throw Error(G(90));xf(r),Ws(r,i)}}}break;case"textarea":vf(e,n);break;case"select":t=n.value,t!=null&&wr(e,!!n.multiple,t,!1)}};Cf=Dc;Nf=Zn;var Cv={usingClientEntryPoint:!1,Events:[Xi,mr,Cl,_f,Sf,Dc]},ti={findFiberByHostInstance:Un,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Nv={bundleType:ti.bundleType,version:ti.version,rendererPackageName:ti.rendererPackageName,rendererConfig:ti.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tf(e),e===null?null:e.stateNode},findFiberByHostInstance:ti.findFiberByHostInstance||_v,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wo.isDisabled&&wo.supportsFiber)try{wl=wo.inject(Nv),Kt=wo}catch{}}xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cv;xt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qc(t))throw Error(G(200));return jv(e,t,null,n)};xt.createRoot=function(e,t){if(!qc(e))throw Error(G(299));var n=!1,r="",i=ah;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Vc(e,1,!1,null,null,n,!1,r,i),e[ln]=t.current,Li(e.nodeType===8?e.parentNode:e),new Hc(t)};xt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(G(188)):(e=Object.keys(e).join(","),Error(G(268,e)));return e=Tf(t),e=e===null?null:e.stateNode,e};xt.flushSync=function(e){return Zn(e)};xt.hydrate=function(e,t,n){if(!Il(t))throw Error(G(200));return Ml(null,e,t,!0,n)};xt.hydrateRoot=function(e,t,n){if(!qc(e))throw Error(G(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",s=ah;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=sh(t,null,e,1,n??null,i,!1,l,s),e[ln]=t.current,Li(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Rl(t)};xt.render=function(e,t,n){if(!Il(t))throw Error(G(200));return Ml(null,e,t,!1,n)};xt.unmountComponentAtNode=function(e){if(!Il(e))throw Error(G(40));return e._reactRootContainer?(Zn(function(){Ml(null,null,e,!1,function(){e._reactRootContainer=null,e[ln]=null})}),!0):!1};xt.unstable_batchedUpdates=Dc;xt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Il(n))throw Error(G(200));if(e==null||e._reactInternals===void 0)throw Error(G(38));return Ml(e,t,n,!1,r)};xt.version="18.3.1-next-f1338f8080-20240426";function ch(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ch)}catch(e){console.error(e)}}ch(),cf.exports=xt;var Ev=cf.exports,Ad=Ev;Os.createRoot=Ad.createRoot,Os.hydrateRoot=Ad.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ui(){return Ui=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ui.apply(this,arguments)}var yn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(yn||(yn={}));const Ld="popstate";function zv(e){e===void 0&&(e={});function t(r,i){let{pathname:l,search:s,hash:a}=r.location;return Ta("",{pathname:l,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:uh(i)}return Pv(t,n,null,e)}function Ie(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Kc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Tv(){return Math.random().toString(36).substr(2,8)}function Rd(e,t){return{usr:e.state,key:e.key,idx:t}}function Ta(e,t,n,r){return n===void 0&&(n=null),Ui({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Vr(t):t,{state:n,key:t&&t.key||r||Tv()})}function uh(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Vr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Pv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,s=i.history,a=yn.Pop,c=null,u=d();u==null&&(u=0,s.replaceState(Ui({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function p(){a=yn.Pop;let P=d(),g=P==null?null:P-u;u=P,c&&c({action:a,location:w.location,delta:g})}function f(P,g){a=yn.Push;let h=Ta(w.location,P,g);u=d()+1;let x=Rd(h,u),z=w.createHref(h);try{s.pushState(x,"",z)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(z)}l&&c&&c({action:a,location:w.location,delta:1})}function m(P,g){a=yn.Replace;let h=Ta(w.location,P,g);u=d();let x=Rd(h,u),z=w.createHref(h);s.replaceState(x,"",z),l&&c&&c({action:a,location:w.location,delta:0})}function k(P){let g=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof P=="string"?P:uh(P);return h=h.replace(/ $/,"%20"),Ie(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let w={get action(){return a},get location(){return e(i,s)},listen(P){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Ld,p),c=P,()=>{i.removeEventListener(Ld,p),c=null}},createHref(P){return t(i,P)},createURL:k,encodeLocation(P){let g=k(P);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:m,go(P){return s.go(P)}};return w}var Id;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Id||(Id={}));function Av(e,t,n){return n===void 0&&(n="/"),Lv(e,t,n)}function Lv(e,t,n,r){let i=typeof t=="string"?Vr(t):t,l=fh(i.pathname||"/",n);if(l==null)return null;let s=dh(e);Rv(s);let a=null;for(let c=0;a==null&&c<s.length;++c){let u=qv(l);a=Vv(s[c],u)}return a}function dh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(l,s,a)=>{let c={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:s,route:l};c.relativePath.startsWith("/")&&(Ie(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Kn([r,c.relativePath]),d=n.concat(c);l.children&&l.children.length>0&&(Ie(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),dh(l.children,t,d,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:Bv(u,l.index),routesMeta:d})};return e.forEach((l,s)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))i(l,s);else for(let c of ph(l.path))i(l,s,c)}),t}function ph(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let s=ph(r.join("/")),a=[];return a.push(...s.map(c=>c===""?l:[l,c].join("/"))),i&&a.push(...s),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function Rv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Uv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Iv=/^:[\w-]+$/,Mv=3,Ov=2,$v=1,Dv=10,Fv=-2,Md=e=>e==="*";function Bv(e,t){let n=e.split("/"),r=n.length;return n.some(Md)&&(r+=Fv),t&&(r+=Ov),n.filter(i=>!Md(i)).reduce((i,l)=>i+(Iv.test(l)?Mv:l===""?$v:Dv),r)}function Uv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Vv(e,t,n){let{routesMeta:r}=e,i={},l="/",s=[];for(let a=0;a<r.length;++a){let c=r[a],u=a===r.length-1,d=l==="/"?t:t.slice(l.length)||"/",p=Wv({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),f=c.route;if(!p)return null;Object.assign(i,p.params),s.push({params:i,pathname:Kn([l,p.pathname]),pathnameBase:Yv(Kn([l,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(l=Kn([l,p.pathnameBase]))}return s}function Wv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Hv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let l=i[0],s=l.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:f,isOptional:m}=d;if(f==="*"){let w=a[p]||"";s=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const k=a[p];return m&&!k?u[f]=void 0:u[f]=(k||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:s,pattern:e}}function Hv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Kc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function qv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Kc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function fh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Kv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qv=e=>Kv.test(e);function Gv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Vr(e):e,l;if(n)if(Qv(n))l=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),Kc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?l=Od(n.substring(1),"/"):l=Od(n,t)}else l=t;return{pathname:l,search:Xv(r),hash:Zv(i)}}function Od(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function xs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Jv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function mh(e,t){let n=Jv(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function hh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Vr(e):(i=Ui({},e),Ie(!i.pathname||!i.pathname.includes("?"),xs("?","pathname","search",i)),Ie(!i.pathname||!i.pathname.includes("#"),xs("#","pathname","hash",i)),Ie(!i.search||!i.search.includes("#"),xs("#","search","hash",i)));let l=e===""||i.pathname==="",s=l?"/":i.pathname,a;if(s==null)a=n;else{let p=t.length-1;if(!r&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}a=p>=0?t[p]:"/"}let c=Gv(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(l||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Kn=e=>e.join("/").replace(/\/\/+/g,"/"),Yv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Xv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Zv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function e1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const gh=["post","put","patch","delete"];new Set(gh);const t1=["get",...gh];new Set(t1);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vi(){return Vi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vi.apply(this,arguments)}const Qc=S.createContext(null),n1=S.createContext(null),eo=S.createContext(null),Ol=S.createContext(null),Mn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),xh=S.createContext(null);function to(){return S.useContext(Ol)!=null}function Gc(){return to()||Ie(!1),S.useContext(Ol).location}function yh(e){S.useContext(eo).static||S.useLayoutEffect(e)}function Jc(){let{isDataRoute:e}=S.useContext(Mn);return e?g1():r1()}function r1(){to()||Ie(!1);let e=S.useContext(Qc),{basename:t,future:n,navigator:r}=S.useContext(eo),{matches:i}=S.useContext(Mn),{pathname:l}=Gc(),s=JSON.stringify(mh(i,n.v7_relativeSplatPath)),a=S.useRef(!1);return yh(()=>{a.current=!0}),S.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let p=hh(u,JSON.parse(s),l,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Kn([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,s,l,e])}function i1(){let{matches:e}=S.useContext(Mn),t=e[e.length-1];return t?t.params:{}}function o1(e,t){return l1(e,t)}function l1(e,t,n,r){to()||Ie(!1);let{navigator:i}=S.useContext(eo),{matches:l}=S.useContext(Mn),s=l[l.length-1],a=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let u=Gc(),d;if(t){var p;let P=typeof t=="string"?Vr(t):t;c==="/"||(p=P.pathname)!=null&&p.startsWith(c)||Ie(!1),d=P}else d=u;let f=d.pathname||"/",m=f;if(c!=="/"){let P=c.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(P.length).join("/")}let k=Av(e,{pathname:m}),w=d1(k&&k.map(P=>Object.assign({},P,{params:Object.assign({},a,P.params),pathname:Kn([c,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?c:Kn([c,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),l,n,r);return t&&w?S.createElement(Ol.Provider,{value:{location:Vi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:yn.Pop}},w):w}function s1(){let e=h1(),t=e1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,null)}const a1=S.createElement(s1,null);class c1 extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(Mn.Provider,{value:this.props.routeContext},S.createElement(xh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function u1(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(Qc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Mn.Provider,{value:t},r)}function d1(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=s.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);d>=0||Ie(!1),s=s.slice(0,Math.min(s.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let p=s[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:m}=n,k=p.route.loader&&f[p.route.id]===void 0&&(!m||m[p.route.id]===void 0);if(p.route.lazy||k){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,p,f)=>{let m,k=!1,w=null,P=null;n&&(m=a&&p.route.id?a[p.route.id]:void 0,w=p.route.errorElement||a1,c&&(u<0&&f===0?(x1("route-fallback"),k=!0,P=null):u===f&&(k=!0,P=p.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,f+1)),h=()=>{let x;return m?x=w:k?x=P:p.route.Component?x=S.createElement(p.route.Component,null):p.route.element?x=p.route.element:x=d,S.createElement(u1,{match:p,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:x})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?S.createElement(c1,{location:n.location,revalidation:n.revalidation,component:w,error:m,children:h(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):h()},null)}var vh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(vh||{}),bh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(bh||{});function p1(e){let t=S.useContext(Qc);return t||Ie(!1),t}function f1(e){let t=S.useContext(n1);return t||Ie(!1),t}function m1(e){let t=S.useContext(Mn);return t||Ie(!1),t}function kh(e){let t=m1(),n=t.matches[t.matches.length-1];return n.route.id||Ie(!1),n.route.id}function h1(){var e;let t=S.useContext(xh),n=f1(),r=kh();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function g1(){let{router:e}=p1(vh.UseNavigateStable),t=kh(bh.UseNavigateStable),n=S.useRef(!1);return yh(()=>{n.current=!0}),S.useCallback(function(i,l){l===void 0&&(l={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Vi({fromRouteId:t},l)))},[e,t])}const $d={};function x1(e,t,n){$d[e]||($d[e]=!0)}function y1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function v1(e){let{to:t,replace:n,state:r,relative:i}=e;to()||Ie(!1);let{future:l,static:s}=S.useContext(eo),{matches:a}=S.useContext(Mn),{pathname:c}=Gc(),u=Jc(),d=hh(t,mh(a,l.v7_relativeSplatPath),c,i==="path"),p=JSON.stringify(d);return S.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:i}),[u,p,i,n,r]),null}function ar(e){Ie(!1)}function b1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=yn.Pop,navigator:l,static:s=!1,future:a}=e;to()&&Ie(!1);let c=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:c,navigator:l,static:s,future:Vi({v7_relativeSplatPath:!1},a)}),[c,a,l,s]);typeof r=="string"&&(r=Vr(r));let{pathname:d="/",search:p="",hash:f="",state:m=null,key:k="default"}=r,w=S.useMemo(()=>{let P=fh(d,c);return P==null?null:{location:{pathname:P,search:p,hash:f,state:m,key:k},navigationType:i}},[c,d,p,f,m,k,i]);return w==null?null:S.createElement(eo.Provider,{value:u},S.createElement(Ol.Provider,{children:n,value:w}))}function k1(e){let{children:t,location:n}=e;return o1(Pa(t),n)}new Promise(()=>{});function Pa(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let l=[...t,i];if(r.type===S.Fragment){n.push.apply(n,Pa(r.props.children,l));return}r.type!==ar&&Ie(!1),!r.props.index||!r.props.children||Ie(!1);let s={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Pa(r.props.children,l)),n.push(s)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const w1="6";try{window.__reactRouterVersion=w1}catch{}const j1="startTransition",Dd=xx[j1];function _1(e){let{basename:t,children:n,future:r,window:i}=e,l=S.useRef();l.current==null&&(l.current=zv({window:i,v5Compat:!0}));let s=l.current,[a,c]=S.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=S.useCallback(p=>{u&&Dd?Dd(()=>c(p)):c(p)},[c,u]);return S.useLayoutEffect(()=>s.listen(d),[s,d]),S.useEffect(()=>y1(r),[r]),S.createElement(b1,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}var Fd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Fd||(Fd={}));var Bd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Bd||(Bd={}));const S1={},Ud=e=>{let t;const n=new Set,r=(d,p)=>{const f=typeof d=="function"?d(t):d;if(!Object.is(f,t)){const m=t;t=p??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(k=>k(t,m))}},i=()=>t,c={setState:r,getState:i,getInitialState:()=>u,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(S1?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,c);return c},C1=e=>e?Ud(e):Ud;var wh={exports:{}},jh={},_h={exports:{}},Sh={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Or=S;function N1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var E1=typeof Object.is=="function"?Object.is:N1,z1=Or.useState,T1=Or.useEffect,P1=Or.useLayoutEffect,A1=Or.useDebugValue;function L1(e,t){var n=t(),r=z1({inst:{value:n,getSnapshot:t}}),i=r[0].inst,l=r[1];return P1(function(){i.value=n,i.getSnapshot=t,ys(i)&&l({inst:i})},[e,n,t]),T1(function(){return ys(i)&&l({inst:i}),e(function(){ys(i)&&l({inst:i})})},[e]),A1(n),n}function ys(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!E1(e,n)}catch{return!0}}function R1(e,t){return t()}var I1=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?R1:L1;Sh.useSyncExternalStore=Or.useSyncExternalStore!==void 0?Or.useSyncExternalStore:I1;_h.exports=Sh;var M1=_h.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $l=S,O1=M1;function $1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var D1=typeof Object.is=="function"?Object.is:$1,F1=O1.useSyncExternalStore,B1=$l.useRef,U1=$l.useEffect,V1=$l.useMemo,W1=$l.useDebugValue;jh.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var l=B1(null);if(l.current===null){var s={hasValue:!1,value:null};l.current=s}else s=l.current;l=V1(function(){function c(m){if(!u){if(u=!0,d=m,m=r(m),i!==void 0&&s.hasValue){var k=s.value;if(i(k,m))return p=k}return p=m}if(k=p,D1(d,m))return k;var w=r(m);return i!==void 0&&i(k,w)?(d=m,k):(d=m,p=w)}var u=!1,d,p,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,r,i]);var a=F1(e,l[0],l[1]);return U1(function(){s.hasValue=!0,s.value=a},[a]),W1(a),a};wh.exports=jh;var H1=wh.exports;const q1=bl(H1),Ch={},{useDebugValue:K1}=Nt,{useSyncExternalStoreWithSelector:Q1}=q1;let Vd=!1;const G1=e=>e;function J1(e,t=G1,n){(Ch?"production":void 0)!=="production"&&n&&!Vd&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Vd=!0);const r=Q1(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return K1(r),r}const Wd=e=>{(Ch?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?C1(e):e,n=(r,i)=>J1(t,r,i);return Object.assign(n,t),n},Y1=e=>e?Wd(e):Wd,vt=Y1((e,t)=>({project:null,selectedAgentId:null,selectedToolId:null,mcpServers:[],builtinTools:[],isRunning:!1,runEvents:[],watches:[],activeTab:"app",sidebarOpen:!0,hasUnsavedChanges:!1,runAgentId:null,currentSessionId:null,setProject:n=>{var i;const r=((i=n==null?void 0:n.watches)==null?void 0:i.map(l=>({...l,result:void 0,error:void 0,isLoading:!1,lastRun:void 0,history:[]})))||[];e({project:n,watches:r})},setSelectedAgentId:n=>e({selectedAgentId:n}),setSelectedToolId:n=>e({selectedToolId:n}),setMcpServers:n=>e({mcpServers:n}),setBuiltinTools:n=>e({builtinTools:n}),setIsRunning:n=>e({isRunning:n}),addRunEvent:n=>e(r=>({runEvents:[...r.runEvents,n]})),clearRunEvents:()=>e({runEvents:[]}),setWatches:n=>e({watches:n}),updateWatch:(n,r)=>e(i=>{const l=i.watches.map(a=>a.id===n?{...a,...r}:a);if(("serverName"in r||"toolName"in r||"args"in r||"transform"in r)&&i.project){const a=l.map(({id:c,serverName:u,toolName:d,args:p,transform:f})=>({id:c,serverName:u,toolName:d,args:p,transform:f}));return{watches:l,project:{...i.project,watches:a},hasUnsavedChanges:!0}}return{watches:l}}),addWatch:n=>e(r=>{const i=[...r.watches,n],{project:l}=r;if(l){const s=i.map(({id:a,serverName:c,toolName:u,args:d,transform:p})=>({id:a,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...l,watches:s},hasUnsavedChanges:!0}}return{watches:i}}),removeWatch:n=>e(r=>{const i=r.watches.filter(s=>s.id!==n),{project:l}=r;if(l){const s=i.map(({id:a,serverName:c,toolName:u,args:d,transform:p})=>({id:a,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...l,watches:s},hasUnsavedChanges:!0}}return{watches:i}}),clearWatchHistories:()=>e(n=>({watches:n.watches.map(r=>({...r,history:[],result:void 0,error:void 0}))})),setActiveTab:n=>e({activeTab:n}),setSidebarOpen:n=>e({sidebarOpen:n}),setHasUnsavedChanges:n=>e({hasUnsavedChanges:n}),setRunAgentId:n=>e({runAgentId:n}),setCurrentSessionId:n=>e({currentSessionId:n}),updateProject:n=>{const{project:r}=t();r&&e({project:{...r,...n}})},addAgent:n=>{const{project:r}=t();r&&e({project:{...r,agents:[...r.agents,n]}})},updateAgent:(n,r)=>{const{project:i}=t();i&&e({project:{...i,agents:i.agents.map(l=>l.id===n?{...l,...r}:l)}})},removeAgent:n=>{const{project:r,selectedAgentId:i}=t();r&&e({project:{...r,agents:r.agents.filter(l=>l.id!==n)},selectedAgentId:i===n?null:i})},addCustomTool:n=>{const{project:r}=t();r&&e({project:{...r,custom_tools:[...r.custom_tools,n]}})},updateCustomTool:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_tools:i.custom_tools.map(l=>l.id===n?{...l,...r}:l)}})},removeCustomTool:n=>{const{project:r,selectedToolId:i}=t();r&&e({project:{...r,custom_tools:r.custom_tools.filter(l=>l.id!==n)},selectedToolId:i===n?null:i})},addCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:[...r.custom_callbacks||[],n]}})},updateCustomCallback:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_callbacks:(i.custom_callbacks||[]).map(l=>l.id===n?{...l,...r}:l)}})},removeCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:(r.custom_callbacks||[]).filter(i=>i.id!==n)}})}})),Nh="/api";async function xe(e,t){const n=await fetch(`${Nh}${e}`,{...t,headers:{"Content-Type":"application/json",...t==null?void 0:t.headers}});if(!n.ok){const r=await n.json().catch(()=>({detail:"Unknown error"}));throw new Error(r.detail||`HTTP ${n.status}`)}return n.json()}async function Eh(){return(await xe("/projects")).projects}async function zh(e){return(await xe(`/projects/${e}`)).project}async function Th(e,t=""){return(await xe("/projects",{method:"POST",body:JSON.stringify({name:e,description:t})})).project}async function Aa(e,t){return(await xe(`/projects/${e}`,{method:"PUT",body:JSON.stringify(t)})).project}async function Ph(e){await xe(`/projects/${e}`,{method:"DELETE"})}async function Ah(e){return xe(`/sessions/${e}/save-to-memory`,{method:"POST"})}async function La(e){return(await xe(`/projects/${e}/sessions`)).sessions}async function Lh(e,t){return(await xe(`/projects/${e}/sessions/${t}/load`)).session}async function Rh(e){return(await xe(`/projects/${e}/yaml`)).yaml}async function Ih(e,t){return(await xe(`/projects/${e}/yaml`,{method:"PUT",body:JSON.stringify({yaml:t})})).project}async function Yc(){return(await xe("/mcp-servers")).servers}async function Mh(){return(await xe("/builtin-tools")).tools}function Oh(e){const t=window.location.protocol==="https:"?"wss:":"ws:",n=window.location.host;return new WebSocket(`${t}//${n}/ws/run/${e}`)}async function Fo(e,t,n,r){return await xe(`/projects/${e}/generate-prompt`,{method:"POST",body:JSON.stringify({agent_id:t,context:n,agent_config:r||void 0})})}async function $h(e,t){return await xe(`/projects/${e}/generate-agent-config`,{method:"POST",body:JSON.stringify({description:t})})}async function Dh(e,t,n,r=[],i){return await xe(`/projects/${e}/generate-tool-code`,{method:"POST",body:JSON.stringify({tool_name:t,tool_description:n,state_keys_used:r,context:i})})}async function Fh(e,t,n,r,i=[],l){return await xe(`/projects/${e}/generate-callback-code`,{method:"POST",body:JSON.stringify({callback_name:t,callback_description:n,callback_type:r,state_keys_used:i,context:l})})}async function Bh(e){return await xe("/test-mcp-server",{method:"POST",body:JSON.stringify(e)})}async function Uh(e,t){return xe(`/projects/${e}/skillsets/${t}/stats`)}async function Vh(e,t,n,r,i=500,l=50){return xe(`/projects/${e}/skillsets/${t}/url`,{method:"POST",body:JSON.stringify({url:n,source_name:r,chunk_size:i,chunk_overlap:l})})}async function Wh(e,t,n,r=500,i=50){const l=new FormData;l.append("file",n),l.append("chunk_size",String(r)),l.append("chunk_overlap",String(i));const s=await fetch(`${Nh}/projects/${e}/skillsets/${t}/file`,{method:"POST",body:l});if(!s.ok)throw new Error(`Upload failed: ${s.statusText}`);return s.json()}async function Hh(e,t,n,r=10,i=0){return xe(`/projects/${e}/skillsets/${t}/search`,{method:"POST",body:JSON.stringify({query:n,top_k:r,min_score:i})})}async function qh(e,t){return xe(`/projects/${e}/skillsets/${t}/entries`,{method:"DELETE"})}async function Kh(){return xe("/skillsets/embeddings-available")}const Lt={async get(e){return xe(e)},async post(e,t){return xe(e,{method:"POST",body:t?JSON.stringify(t):void 0})},async put(e,t){return xe(e,{method:"PUT",body:t?JSON.stringify(t):void 0})},async delete(e){return xe(e,{method:"DELETE"})}},X1=Object.freeze(Object.defineProperty({__proto__:null,addSkillSetUrl:Vh,api:Lt,checkEmbeddingsAvailable:Kh,clearSkillSet:qh,createProject:Th,createRunWebSocket:Oh,deleteProject:Ph,fetchJSON:xe,generateAgentConfig:$h,generateCallbackCode:Fh,generatePrompt:Fo,generateToolCode:Dh,getBuiltinTools:Mh,getMcpServers:Yc,getProject:zh,getProjectYaml:Rh,getSkillSetStats:Uh,listProjectSessions:La,listProjects:Eh,loadSession:Lh,saveSessionToMemory:Ah,searchSkillSet:Hh,testMcpServer:Bh,updateProject:Aa,updateProjectFromYaml:Ih,uploadSkillSetFile:Wh},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Z1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),te=(e,t)=>{const n=S.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:l=2,absoluteStrokeWidth:s,className:a="",children:c,...u},d)=>S.createElement("svg",{ref:d,...Z1,width:i,height:i,stroke:r,strokeWidth:s?Number(l)*24/Number(i):l,className:["lucide",`lucide-${e0(e)}`,a].join(" "),...u},[...t.map(([p,f])=>S.createElement(p,f)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=te("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=te("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=te("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=te("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=te("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=te("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=te("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=te("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=te("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=te("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=te("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=te("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=te("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=te("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=te("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=te("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=te("FileCheck",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=te("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=te("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=te("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=te("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=te("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ia=te("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=te("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=te("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=te("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=te("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=te("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=te("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=te("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=te("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=te("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=te("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=te("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=te("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=te("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=te("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=te("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=te("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=te("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=te("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=te("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=te("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=te("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=te("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=te("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=te("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=te("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=te("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=te("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=te("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=te("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=te("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=te("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=te("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=te("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=te("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function g0(){const e=Jc(),[t,n]=S.useState([]),[r,i]=S.useState(!0),[l,s]=S.useState(!1),[a,c]=S.useState("");S.useEffect(()=>{u()},[]);async function u(){try{const f=await Eh();n(f)}catch(f){console.error("Failed to load projects:",f)}finally{i(!1)}}async function d(){if(a.trim())try{const f=await Th(a.trim());e(`/project/${f.id}`)}catch(f){console.error("Failed to create project:",f)}}async function p(f,m){if(m.stopPropagation(),!!confirm("Delete this project?"))try{await Ph(f),n(t.filter(k=>k.id!==f))}catch(k){console.error("Failed to delete project:",k)}}return o.jsxs("div",{className:"project-list",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("header",{className:"header",children:[o.jsxs("div",{className:"logo",children:[o.jsx(ru,{size:40,className:"logo-icon"}),o.jsx("h1",{className:"title",children:"ADK Playground"})]}),o.jsx("p",{className:"subtitle",children:"Build, test, and deploy AI agents visually"})]}),o.jsxs("div",{className:"content",children:[l?o.jsxs("div",{className:"create-form",children:[o.jsx("input",{type:"text",placeholder:"Project name...",value:a,onChange:f=>c(f.target.value),onKeyDown:f=>f.key==="Enter"&&d(),autoFocus:!0}),o.jsxs("button",{className:"btn btn-primary",onClick:d,children:[o.jsx(Re,{size:18}),"Create"]}),o.jsx("button",{className:"btn btn-secondary",onClick:()=>s(!1),children:"Cancel"})]}):o.jsx("div",{className:"create-form",children:o.jsxs("button",{className:"btn btn-primary",onClick:()=>s(!0),children:[o.jsx(Re,{size:18}),"New Project"]})}),r?o.jsx("div",{className:"loading",children:"Loading projects..."}):t.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Hd,{size:48,style:{marginBottom:16,opacity:.3}}),o.jsx("p",{children:"No projects yet. Create one to get started!"})]}):o.jsx("div",{className:"projects-grid",children:t.map(f=>o.jsxs("div",{className:"project-card",onClick:()=>e(`/project/${f.id}`),children:[o.jsxs("h3",{children:[o.jsx(Hd,{size:18}),f.name]}),o.jsx("p",{children:f.description||"No description"}),o.jsx("button",{className:"delete-btn",onClick:m=>p(f.id,m),children:o.jsx(Pe,{size:16})})]},f.id))})]})]})}const x0=[{key:"GOOGLE_API_KEY",description:"API key for Gemini models"},{key:"OPENAI_API_KEY",description:"API key for OpenAI models (via LiteLLM)"},{key:"ANTHROPIC_API_KEY",description:"API key for Anthropic Claude models"},{key:"AZURE_API_KEY",description:"API key for Azure OpenAI Service"},{key:"AZURE_API_BASE",description:"Base URL for Azure OpenAI endpoint (e.g., https://your-resource.openai.azure.com)"},{key:"AZURE_API_VERSION",description:"API version for Azure OpenAI (e.g., 2024-02-15-preview)"},{key:"GOOGLE_GENAI_USE_VERTEXAI",description:'Set to "1" to use Vertex AI instead of API key'},{key:"GOOGLE_CLOUD_PROJECT",description:"Google Cloud project ID for Vertex AI"},{key:"GOOGLE_CLOUD_REGION",description:"Google Cloud region for Vertex AI (e.g., us-central1)"}];function y0(e){return/^[a-zA-Z0-9_]+$/.test(e)}function v0(){const{project:e,updateProject:t}=vt(),[n,r]=S.useState(null);if(!e)return null;const{app:i}=e;function l(v){t({app:{...i,...v}})}function s(v){if(v===""){r(null),l({name:v});return}y0(v)?r(null):r("Name can only contain letters, numbers, and underscores"),l({name:v})}function a(){const v={name:`state_key_${i.state_keys.length+1}`,description:"",type:"string",scope:"session"};l({state_keys:[...i.state_keys,v]})}function c(v,E){const I=[...i.state_keys];I[v]={...I[v],...E},l({state_keys:I})}function u(v){l({state_keys:i.state_keys.filter((E,I)=>I!==v)})}function d(v="ReflectAndRetryToolPlugin"){let E;switch(v){case"ReflectAndRetryToolPlugin":E={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1};break;case"ContextFilterPlugin":E={type:"ContextFilterPlugin",name:"context_filter",num_invocations_to_keep:5};break;case"LoggingPlugin":E={type:"LoggingPlugin",name:"logging"};break;case"GlobalInstructionPlugin":E={type:"GlobalInstructionPlugin",name:"global_instruction",global_instruction:""};break;case"SaveFilesAsArtifactsPlugin":E={type:"SaveFilesAsArtifactsPlugin",name:"save_files"};break;case"MultimodalToolResultsPlugin":E={type:"MultimodalToolResultsPlugin",name:"multimodal_tools"};break;default:E={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1}}l({plugins:[...i.plugins,E]})}function p(v,E){const I=[...i.plugins];I[v]={...I[v],...E},l({plugins:I})}function f(v){l({plugins:i.plugins.filter((E,I)=>I!==v)})}const m=i.models||[];function k(){const v=`model_${Date.now().toString(36)}`,E={id:v,name:"New Model",provider:"gemini",model_name:"gemini-2.0-flash",is_default:m.length===0};l({models:[...m,E],default_model_id:m.length===0?v:i.default_model_id})}function w(v,E){const I=m.map(q=>q.id===v?{...q,...E}:q);l({models:I})}function P(v){var q;const E=m.filter(F=>F.id!==v),I=i.default_model_id===v?((q=E[0])==null?void 0:q.id)||void 0:i.default_model_id;l({models:E,default_model_id:I})}function g(v){l({default_model_id:v})}const h=i.env_vars||{},[x,z]=S.useState({}),[j,y]=S.useState("");function _(v=""){const E=v||j.trim();!E||h[E]!==void 0||(l({env_vars:{...h,[E]:""}}),y(""))}function A(v,E){l({env_vars:{...h,[v]:E}})}function D(v){const E={...h};delete E[v],l({env_vars:E})}function T(v){z(E=>({...E,[v]:!E[v]}))}return o.jsxs("div",{className:"app-config",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("section",{className:"section",children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(d0,{size:20}),"Basic Information"]})}),o.jsxs("div",{className:"form-grid",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"App Name"}),o.jsx("input",{type:"text",value:i.name,onChange:v=>s(v.target.value),style:{borderColor:n?"var(--error)":void 0}}),n&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:4},children:n})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Root Agent"}),o.jsxs("select",{value:i.root_agent_id||"",onChange:v=>l({root_agent_id:v.target.value||void 0}),children:[o.jsx("option",{value:"",children:"Select an agent..."}),e.agents.map(v=>o.jsx("option",{value:v.id,children:v.name},v.id))]})]}),o.jsxs("div",{className:"form-group full-width",children:[o.jsx("label",{children:"Description"}),o.jsx("textarea",{value:i.description,onChange:v=>l({description:v.target.value}),rows:2})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(rn,{size:20}),"Services"]}),o.jsx("span",{className:"section-hint",children:"Configure session, memory, and artifact storage backends"})]}),o.jsxs("div",{className:"form-grid",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Session Service"}),o.jsxs("select",{value:i.session_service_uri.split("://")[0],onChange:v=>{const E=v.target.value;l({session_service_uri:{memory:"memory://",sqlite:"sqlite://./sessions.db",postgresql:"postgresql://user:pass@localhost:5432/adk_sessions",mysql:"mysql://user:pass@localhost:3306/adk_sessions",agentengine:"agentengine://project/us-central1/engine-id"}[E]||E+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),o.jsx("option",{value:"sqlite",children:"SQLite (local)"}),o.jsx("option",{value:"postgresql",children:"PostgreSQL"}),o.jsx("option",{value:"mysql",children:"MySQL"}),o.jsx("option",{value:"agentengine",children:"Vertex AI Agent Engine"})]}),i.session_service_uri.startsWith("sqlite://")&&o.jsx("input",{type:"text",value:i.session_service_uri.replace("sqlite://",""),onChange:v=>l({session_service_uri:"sqlite://"+v.target.value}),placeholder:"./sessions.db",style:{marginTop:8}}),(i.session_service_uri.startsWith("postgresql://")||i.session_service_uri.startsWith("mysql://"))&&o.jsx("input",{type:"text",value:i.session_service_uri,onChange:v=>l({session_service_uri:v.target.value}),placeholder:"postgresql://user:pass@localhost:5432/db",style:{marginTop:8}}),i.session_service_uri.startsWith("agentengine://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[2]||"",onChange:v=>{const E=i.session_service_uri.split("/");E[2]=v.target.value,l({session_service_uri:E.join("/")})},placeholder:"project-id"}),o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[3]||"",onChange:v=>{const E=i.session_service_uri.split("/");E[3]=v.target.value,l({session_service_uri:E.join("/")})},placeholder:"location (e.g., us-central1)"}),o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[4]||"",onChange:v=>{const E=i.session_service_uri.split("/");E[4]=v.target.value,l({session_service_uri:E.join("/")})},placeholder:"agent-engine-id"})]}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.session_service_uri.startsWith("memory://")&&"Sessions stored in memory, lost on restart",i.session_service_uri.startsWith("sqlite://")&&"Persists to local SQLite file",i.session_service_uri.startsWith("postgresql://")&&"Production-ready PostgreSQL backend",i.session_service_uri.startsWith("mysql://")&&"Production-ready MySQL backend",i.session_service_uri.startsWith("agentengine://")&&"Vertex AI Agent Engine managed sessions"]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Memory Service"}),o.jsxs("select",{value:i.memory_service_uri.split("://")[0],onChange:v=>{const E=v.target.value;l({memory_service_uri:{memory:"memory://",rag:"rag://rag-corpus-id",agentengine:"agentengine://project/us-central1/engine-id"}[E]||E+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (keyword matching)"}),o.jsx("option",{value:"rag",children:"Vertex AI RAG"}),o.jsx("option",{value:"agentengine",children:"Vertex AI Memory Bank"})]}),i.memory_service_uri.startsWith("rag://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.memory_service_uri.replace("rag://",""),onChange:v=>l({memory_service_uri:"rag://"+v.target.value}),placeholder:"rag-corpus-id or full resource path"}),o.jsx("span",{className:"help-text",style:{fontSize:11,color:"var(--text-dim)"},children:"Format: projects/PROJECT/locations/LOCATION/ragCorpora/CORPUS_ID"})]}),i.memory_service_uri.startsWith("agentengine://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[2]||"",onChange:v=>{const E=i.memory_service_uri.split("/");E[2]=v.target.value,l({memory_service_uri:E.join("/")})},placeholder:"project-id"}),o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[3]||"",onChange:v=>{const E=i.memory_service_uri.split("/");E[3]=v.target.value,l({memory_service_uri:E.join("/")})},placeholder:"location (e.g., us-central1)"}),o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[4]||"",onChange:v=>{const E=i.memory_service_uri.split("/");E[4]=v.target.value,l({memory_service_uri:E.join("/")})},placeholder:"agent-engine-id"})]}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.memory_service_uri.startsWith("memory://")&&"Simple keyword matching, good for prototyping",i.memory_service_uri.startsWith("rag://")&&"Semantic search using Vertex AI RAG corpus",i.memory_service_uri.startsWith("agentengine://")&&"Managed memory via Agent Engine Memory Bank"]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Artifact Service"}),o.jsxs("select",{value:i.artifact_service_uri.split("://")[0]==="gs"?"gs":i.artifact_service_uri.split("://")[0],onChange:v=>{const E=v.target.value;l({artifact_service_uri:{memory:"memory://",file:"file://./artifacts",gs:"gs://your-bucket-name"}[E]||E+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),o.jsx("option",{value:"file",children:"File System"}),o.jsx("option",{value:"gs",children:"Google Cloud Storage"})]}),i.artifact_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.artifact_service_uri.replace("file://",""),onChange:v=>l({artifact_service_uri:"file://"+v.target.value}),placeholder:"./artifacts",style:{marginTop:8}}),i.artifact_service_uri.startsWith("gs://")&&o.jsx("input",{type:"text",value:i.artifact_service_uri.replace("gs://",""),onChange:v=>l({artifact_service_uri:"gs://"+v.target.value}),placeholder:"bucket-name/optional-prefix",style:{marginTop:8}}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.artifact_service_uri.startsWith("memory://")&&"Artifacts stored in memory, lost on restart",i.artifact_service_uri.startsWith("file://")&&"Persists to local filesystem",i.artifact_service_uri.startsWith("gs://")&&"Production-ready Google Cloud Storage backend"]})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(Oa,{size:20}),"Environment Variables"]})}),o.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginBottom:16},children:"Set API keys and other environment variables. These are passed to the agent runtime."}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16},children:x0.filter(v=>h[v.key]===void 0).map(v=>o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>_(v.key),title:v.description,children:[o.jsx(Re,{size:12}),v.key]},v.key))}),Object.keys(h).length===0?o.jsx("p",{className:"empty-message",children:"No environment variables set. Click a button above to add common variables, or add a custom one below."}):Object.entries(h).map(([v,E])=>o.jsxs("div",{className:"list-item",style:{alignItems:"center"},children:[o.jsxs("div",{style:{flex:1,display:"flex",gap:12,alignItems:"center"},children:[o.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:13,minWidth:200},children:v}),o.jsxs("div",{style:{flex:1,display:"flex",gap:8,alignItems:"center"},children:[o.jsx("input",{type:x[v]?"text":"password",value:E,onChange:I=>A(v,I.target.value),placeholder:"Enter value...",style:{flex:1}}),o.jsx("button",{className:"delete-item",onClick:()=>T(v),title:x[v]?"Hide value":"Show value",children:x[v]?o.jsx(r0,{size:16}):o.jsx(Hi,{size:16})})]})]}),o.jsx("button",{className:"delete-item",onClick:()=>D(v),children:o.jsx(Pe,{size:16})})]},v)),o.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[o.jsx("input",{type:"text",value:j,onChange:v=>y(v.target.value.toUpperCase().replace(/[^A-Z0-9_]/g,"")),placeholder:"CUSTOM_VAR_NAME",style:{flex:1,fontFamily:"var(--font-mono)"},onKeyDown:v=>v.key==="Enter"&&_()}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>_(),disabled:!j.trim(),children:[o.jsx(Re,{size:14}),"Add Variable"]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(Xc,{size:20}),"Models"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:k,children:[o.jsx(Re,{size:14}),"Add Model"]})]}),m.length===0?o.jsx("p",{className:"empty-message",children:"No models configured. Add models that agents can use."}):m.map(v=>o.jsxs("div",{className:"model-card",children:[o.jsxs("div",{className:"model-card-header",children:[o.jsx("input",{type:"text",value:v.name,onChange:E=>w(v.id,{name:E.target.value}),placeholder:"Model name",className:"model-name-input"}),o.jsx("button",{className:`default-model-btn ${i.default_model_id===v.id?"is-default":""}`,onClick:()=>g(v.id),title:i.default_model_id===v.id?"Default model":"Set as default",children:o.jsx(Zh,{size:14,fill:i.default_model_id===v.id?"currentColor":"none"})}),o.jsx("button",{className:"delete-item",onClick:()=>P(v.id),children:o.jsx(Pe,{size:16})})]}),o.jsxs("div",{className:"model-card-body",children:[o.jsxs("div",{className:"model-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Provider"}),o.jsxs("select",{value:v.provider,onChange:E=>w(v.id,{provider:E.target.value}),children:[o.jsx("option",{value:"gemini",children:"Gemini"}),o.jsx("option",{value:"litellm",children:"LiteLLM"}),o.jsx("option",{value:"anthropic",children:"Anthropic"})]})]}),o.jsxs("div",{className:"form-group",style:{flex:2},children:[o.jsx("label",{children:"Model Name"}),o.jsx("input",{type:"text",value:v.model_name,onChange:E=>w(v.id,{model_name:E.target.value}),placeholder:"e.g., gemini-2.0-flash"})]}),v.provider==="litellm"&&o.jsxs("div",{className:"form-group",style:{flex:2},children:[o.jsx("label",{children:"API Base URL"}),o.jsx("input",{type:"text",value:v.api_base||"",onChange:E=>w(v.id,{api_base:E.target.value||void 0}),placeholder:"http://localhost:11434"})]})]}),o.jsxs("div",{className:"model-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Temperature"}),o.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:v.temperature??"",onChange:E=>w(v.id,{temperature:E.target.value?parseFloat(E.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Max Tokens"}),o.jsx("input",{type:"number",min:"1",value:v.max_output_tokens??"",onChange:E=>w(v.id,{max_output_tokens:E.target.value?parseInt(E.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Top P"}),o.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:v.top_p??"",onChange:E=>w(v.id,{top_p:E.target.value?parseFloat(E.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Top K"}),o.jsx("input",{type:"number",min:"1",value:v.top_k??"",onChange:E=>w(v.id,{top_k:E.target.value?parseInt(E.target.value):void 0}),placeholder:"Default"})]})]})]})]},v.id))]}),o.jsxs("section",{className:"section",children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(tg,{size:20}),"Advanced Options"]})}),o.jsxs("div",{className:"toggle-group",children:[o.jsx("div",{className:`toggle ${i.compaction.enabled?"active":""}`,onClick:()=>l({compaction:{...i.compaction,enabled:!i.compaction.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Event Compaction"}),o.jsx("span",{children:"Automatically summarize old events to reduce context size"})]}),i.compaction.enabled&&o.jsx("input",{type:"number",value:i.compaction.max_events,onChange:v=>l({compaction:{...i.compaction,max_events:parseInt(v.target.value)||100}}),style:{width:80},placeholder:"Max events"})]}),o.jsxs("div",{className:"toggle-group",style:{marginTop:12},children:[o.jsx("div",{className:`toggle ${i.context_cache.enabled?"active":""}`,onClick:()=>l({context_cache:{...i.context_cache,enabled:!i.context_cache.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Context Caching"}),o.jsx("span",{children:"Cache static instructions for better performance"})]}),i.context_cache.enabled&&o.jsx("input",{type:"number",value:i.context_cache.ttl_seconds,onChange:v=>l({context_cache:{...i.context_cache,ttl_seconds:parseInt(v.target.value)||3600}}),style:{width:100},placeholder:"TTL (seconds)"})]}),o.jsxs("div",{className:"toggle-group",style:{marginTop:12},children:[o.jsx("div",{className:`toggle ${i.resumability.enabled?"active":""}`,onClick:()=>l({resumability:{...i.resumability,enabled:!i.resumability.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Resumability"}),o.jsx("span",{children:"Allow pausing and resuming agent execution"})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(eu,{size:20}),"Session State Keys"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:a,children:[o.jsx(Re,{size:14}),"Add Key"]})]}),i.state_keys.length===0?o.jsx("p",{className:"empty-message",children:"No state keys defined. Add keys to declare what data agents can share."}):i.state_keys.map((v,E)=>o.jsxs("div",{className:"list-item",children:[o.jsxs("div",{className:"list-item-content",children:[o.jsx("input",{type:"text",value:v.name,onChange:I=>c(E,{name:I.target.value}),placeholder:"Key name"}),o.jsxs("select",{value:v.type,onChange:I=>c(E,{type:I.target.value}),children:[o.jsx("option",{value:"string",children:"String"}),o.jsx("option",{value:"number",children:"Number"}),o.jsx("option",{value:"boolean",children:"Boolean"}),o.jsx("option",{value:"object",children:"Object"}),o.jsx("option",{value:"array",children:"Array"})]}),o.jsxs("select",{value:v.scope,onChange:I=>c(E,{scope:I.target.value}),children:[o.jsx("option",{value:"session",children:"Session"}),o.jsx("option",{value:"user",children:"User"}),o.jsx("option",{value:"app",children:"App"}),o.jsx("option",{value:"temp",children:"Temporary"})]}),o.jsx("input",{type:"text",value:v.description,onChange:I=>c(E,{description:I.target.value}),placeholder:"Description",style:{gridColumn:"span 2"}})]}),o.jsx("button",{className:"delete-item",onClick:()=>u(E),children:o.jsx(Pe,{size:16})})]},E))]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(vn,{size:20}),"Plugins"]}),o.jsx("div",{className:"plugin-add-dropdown",children:o.jsxs("select",{className:"btn btn-secondary btn-sm",value:"",onChange:v=>{v.target.value&&(d(v.target.value),v.target.value="")},style:{paddingRight:8},children:[o.jsx("option",{value:"",children:"+ Add Plugin..."}),o.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),o.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),o.jsx("option",{value:"LoggingPlugin",children:"Logging"}),o.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),o.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),o.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]})})]}),i.plugins.length===0?o.jsx("p",{className:"empty-message",children:"No plugins configured. Add plugins to extend agent functionality."}):i.plugins.map((v,E)=>o.jsxs("div",{className:"list-item",style:{flexDirection:"column",gap:12},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",gap:12},children:[o.jsxs("select",{value:v.type,onChange:I=>p(E,{type:I.target.value}),style:{flex:1},children:[o.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),o.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),o.jsx("option",{value:"LoggingPlugin",children:"Logging"}),o.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),o.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),o.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]}),o.jsx("button",{className:"delete-item",onClick:()=>f(E),children:o.jsx(Pe,{size:16})})]}),v.type==="ReflectAndRetryToolPlugin"&&o.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",style:{flex:0},children:[o.jsx("label",{style:{fontSize:12},children:"Max Retries"}),o.jsx("input",{type:"number",min:"0",max:"10",value:v.max_retries??3,onChange:I=>p(E,{max_retries:parseInt(I.target.value)||0}),style:{width:70}})]}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsx("input",{type:"checkbox",checked:v.throw_exception_if_retry_exceeded??!1,onChange:I=>p(E,{throw_exception_if_retry_exceeded:I.target.checked})}),"Throw exception if retry exceeded"]})]}),v.type==="ContextFilterPlugin"&&o.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",style:{flex:0},children:[o.jsx("label",{style:{fontSize:12},children:"Invocations to Keep"}),o.jsx("input",{type:"number",min:"1",max:"100",value:v.num_invocations_to_keep??5,onChange:I=>p(E,{num_invocations_to_keep:parseInt(I.target.value)||1}),style:{width:70}})]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Keeps only the last N conversation turns to reduce context size"})]}),v.type==="LoggingPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Logs all agent events (messages, tool calls, responses) to the console"})}),v.type==="GlobalInstructionPlugin"&&o.jsxs("div",{style:{width:"100%",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{style:{fontSize:12},children:"Global Instruction"}),o.jsx("textarea",{value:v.global_instruction??"",onChange:I=>p(E,{global_instruction:I.target.value}),placeholder:"Instructions that apply to all agents in the app...",rows:3,style:{width:"100%"}})]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"This instruction is prepended to every agent's system prompt"})]}),v.type==="SaveFilesAsArtifactsPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Automatically saves files uploaded in user messages as artifacts for later retrieval"})}),v.type==="MultimodalToolResultsPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Allows tools to return multimodal content (images, files) directly to the LLM"})})]},E))]})]})}const b0="modulepreload",k0=function(e){return"/"+e},Qd={},ng=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=k0(c),c in Qd)return;Qd[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":b0,u||(p.as="script"),p.crossOrigin="",p.href=c,a&&p.setAttribute("nonce",a),document.head.appendChild(p),u)return new Promise((f,m)=>{p.addEventListener("load",f),p.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function l(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return i.then(s=>{for(const a of s||[])a.status==="rejected"&&l(a.reason);return t().catch(l)})};function Gd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function w0(e){if(Array.isArray(e))return e}function j0(e,t,n){return(t=T0(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _0(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,l,s,a=[],c=!0,u=!1;try{if(l=(n=n.call(e)).next,t!==0)for(;!(c=(r=l.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(d){u=!0,i=d}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(u)throw i}}return a}}function S0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Yd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jd(Object(n),!0).forEach(function(r){j0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function C0(e,t){if(e==null)return{};var n,r,i=N0(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function N0(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function E0(e,t){return w0(e)||_0(e,t)||P0(e,t)||S0()}function z0(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function T0(e){var t=z0(e,"string");return typeof t=="symbol"?t:t+""}function P0(e,t){if(e){if(typeof e=="string")return Gd(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Gd(e,t):void 0}}function A0(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Zd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xd(Object(n),!0).forEach(function(r){A0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function L0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,l){return l(i)},r)}}function ui(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return i.length>=e.length?e.apply(this,i):function(){for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return t.apply(n,[].concat(i,a))}}}function gl(e){return{}.toString.call(e).includes("Object")}function R0(e){return!Object.keys(e).length}function Ki(e){return typeof e=="function"}function I0(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function M0(e,t){return gl(t)||zn("changeType"),Object.keys(t).some(function(n){return!I0(e,n)})&&zn("changeField"),t}function O0(e){Ki(e)||zn("selectorType")}function $0(e){Ki(e)||gl(e)||zn("handlerType"),gl(e)&&Object.values(e).some(function(t){return!Ki(t)})&&zn("handlersType")}function D0(e){e||zn("initialIsRequired"),gl(e)||zn("initialType"),R0(e)&&zn("initialContent")}function F0(e,t){throw new Error(e[t]||e.default)}var B0={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},zn=ui(F0)(B0),jo={changes:M0,selector:O0,handler:$0,initial:D0};function U0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};jo.initial(e),jo.handler(t);var n={current:e},r=ui(H0)(n,t),i=ui(W0)(n),l=ui(jo.changes)(e),s=ui(V0)(n);function a(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return jo.selector(u),u(n.current)}function c(u){L0(r,i,l,s)(u)}return[a,c]}function V0(e,t){return Ki(t)?t(e.current):t}function W0(e,t){return e.current=Zd(Zd({},e.current),t),t}function H0(e,t,n){return Ki(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var q0={create:U0},K0={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function Q0(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return i.length>=e.length?e.apply(this,i):function(){for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return t.apply(n,[].concat(i,a))}}}function G0(e){return{}.toString.call(e).includes("Object")}function J0(e){return e||ep("configIsRequired"),G0(e)||ep("configType"),e.urls?(Y0(),{paths:{vs:e.urls.monacoBase}}):e}function Y0(){console.warn(rg.deprecation)}function X0(e,t){throw new Error(e[t]||e.default)}var rg={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},ep=Q0(X0)(rg),Z0={config:J0},eb=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(l,s){return s(l)},i)}};function ig(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],ig(e[n],t[n]))}),Yd(Yd({},e),t)}var tb={type:"cancelation",msg:"operation is manually canceled"};function bs(e){var t=!1,n=new Promise(function(r,i){e.then(function(l){return t?i(tb):r(l)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var nb=["monaco"],rb=q0.create({config:K0,isInitialized:!1,resolve:null,reject:null,monaco:null}),og=E0(rb,2),no=og[0],Dl=og[1];function ib(e){var t=Z0.config(e),n=t.monaco,r=C0(t,nb);Dl(function(i){return{config:ig(i.config,r),monaco:n}})}function ob(){var e=no(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(Dl({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),bs(ks);if(window.monaco&&window.monaco.editor)return lg(window.monaco),e.resolve(window.monaco),bs(ks);eb(lb,ab)(cb)}return bs(ks)}function lb(e){return document.body.appendChild(e)}function sb(e){var t=document.createElement("script");return e&&(t.src=e),t}function ab(e){var t=no(function(r){var i=r.config,l=r.reject;return{config:i,reject:l}}),n=sb("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function cb(){var e=no(function(n){var r=n.config,i=n.resolve,l=n.reject;return{config:r,resolve:i,reject:l}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;lg(r),e.resolve(r)},function(n){e.reject(n)})}function lg(e){no().monaco||Dl({monaco:e})}function ub(){return no(function(e){var t=e.monaco;return t})}var ks=new Promise(function(e,t){return Dl({resolve:e,reject:t})}),sg={config:ib,init:ob,__getMonacoInstance:ub},db={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},ws=db,pb={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},fb=pb;function mb({children:e}){return Nt.createElement("div",{style:fb.container},e)}var hb=mb,gb=hb;function xb({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:l,wrapperProps:s}){return Nt.createElement("section",{style:{...ws.wrapper,width:e,height:t},...s},!n&&Nt.createElement(gb,null,r),Nt.createElement("div",{ref:i,style:{...ws.fullWidth,...!n&&ws.hide},className:l}))}var yb=xb,ag=S.memo(yb);function vb(e){S.useEffect(e,[])}var cg=vb;function bb(e,t,n=!0){let r=S.useRef(!0);S.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var pt=bb;function ki(){}function kr(e,t,n,r){return kb(e,r)||wb(e,t,n,r)}function kb(e,t){return e.editor.getModel(ug(e,t))}function wb(e,t,n,r){return e.editor.createModel(t,n,r?ug(e,r):void 0)}function ug(e,t){return e.Uri.parse(t)}function jb({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:l,modifiedModelPath:s,keepCurrentOriginalModel:a=!1,keepCurrentModifiedModel:c=!1,theme:u="light",loading:d="Loading...",options:p={},height:f="100%",width:m="100%",className:k,wrapperProps:w={},beforeMount:P=ki,onMount:g=ki}){let[h,x]=S.useState(!1),[z,j]=S.useState(!0),y=S.useRef(null),_=S.useRef(null),A=S.useRef(null),D=S.useRef(g),T=S.useRef(P),v=S.useRef(!1);cg(()=>{let F=sg.init();return F.then(Q=>(_.current=Q)&&j(!1)).catch(Q=>(Q==null?void 0:Q.type)!=="cancelation"&&console.error("Monaco initialization: error:",Q)),()=>y.current?q():F.cancel()}),pt(()=>{if(y.current&&_.current){let F=y.current.getOriginalEditor(),Q=kr(_.current,e||"",r||n||"text",l||"");Q!==F.getModel()&&F.setModel(Q)}},[l],h),pt(()=>{if(y.current&&_.current){let F=y.current.getModifiedEditor(),Q=kr(_.current,t||"",i||n||"text",s||"");Q!==F.getModel()&&F.setModel(Q)}},[s],h),pt(()=>{let F=y.current.getModifiedEditor();F.getOption(_.current.editor.EditorOption.readOnly)?F.setValue(t||""):t!==F.getValue()&&(F.executeEdits("",[{range:F.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),F.pushUndoStop())},[t],h),pt(()=>{var F,Q;(Q=(F=y.current)==null?void 0:F.getModel())==null||Q.original.setValue(e||"")},[e],h),pt(()=>{let{original:F,modified:Q}=y.current.getModel();_.current.editor.setModelLanguage(F,r||n||"text"),_.current.editor.setModelLanguage(Q,i||n||"text")},[n,r,i],h),pt(()=>{var F;(F=_.current)==null||F.editor.setTheme(u)},[u],h),pt(()=>{var F;(F=y.current)==null||F.updateOptions(p)},[p],h);let E=S.useCallback(()=>{var O;if(!_.current)return;T.current(_.current);let F=kr(_.current,e||"",r||n||"text",l||""),Q=kr(_.current,t||"",i||n||"text",s||"");(O=y.current)==null||O.setModel({original:F,modified:Q})},[n,t,i,e,r,l,s]),I=S.useCallback(()=>{var F;!v.current&&A.current&&(y.current=_.current.editor.createDiffEditor(A.current,{automaticLayout:!0,...p}),E(),(F=_.current)==null||F.editor.setTheme(u),x(!0),v.current=!0)},[p,u,E]);S.useEffect(()=>{h&&D.current(y.current,_.current)},[h]),S.useEffect(()=>{!z&&!h&&I()},[z,h,I]);function q(){var Q,O,M,R;let F=(Q=y.current)==null?void 0:Q.getModel();a||((O=F==null?void 0:F.original)==null||O.dispose()),c||((M=F==null?void 0:F.modified)==null||M.dispose()),(R=y.current)==null||R.dispose()}return Nt.createElement(ag,{width:m,height:f,isEditorReady:h,loading:d,_ref:A,className:k,wrapperProps:w})}var _b=jb;S.memo(_b);function Sb(e){let t=S.useRef();return S.useEffect(()=>{t.current=e},[e]),t.current}var Cb=Sb,_o=new Map;function Nb({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:l,theme:s="light",line:a,loading:c="Loading...",options:u={},overrideServices:d={},saveViewState:p=!0,keepCurrentModel:f=!1,width:m="100%",height:k="100%",className:w,wrapperProps:P={},beforeMount:g=ki,onMount:h=ki,onChange:x,onValidate:z=ki}){let[j,y]=S.useState(!1),[_,A]=S.useState(!0),D=S.useRef(null),T=S.useRef(null),v=S.useRef(null),E=S.useRef(h),I=S.useRef(g),q=S.useRef(),F=S.useRef(r),Q=Cb(l),O=S.useRef(!1),M=S.useRef(!1);cg(()=>{let U=sg.init();return U.then(Y=>(D.current=Y)&&A(!1)).catch(Y=>(Y==null?void 0:Y.type)!=="cancelation"&&console.error("Monaco initialization: error:",Y)),()=>T.current?b():U.cancel()}),pt(()=>{var Y,N,ne,C;let U=kr(D.current,e||r||"",t||i||"",l||n||"");U!==((Y=T.current)==null?void 0:Y.getModel())&&(p&&_o.set(Q,(N=T.current)==null?void 0:N.saveViewState()),(ne=T.current)==null||ne.setModel(U),p&&((C=T.current)==null||C.restoreViewState(_o.get(l))))},[l],j),pt(()=>{var U;(U=T.current)==null||U.updateOptions(u)},[u],j),pt(()=>{!T.current||r===void 0||(T.current.getOption(D.current.editor.EditorOption.readOnly)?T.current.setValue(r):r!==T.current.getValue()&&(M.current=!0,T.current.executeEdits("",[{range:T.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),T.current.pushUndoStop(),M.current=!1))},[r],j),pt(()=>{var Y,N;let U=(Y=T.current)==null?void 0:Y.getModel();U&&i&&((N=D.current)==null||N.editor.setModelLanguage(U,i))},[i],j),pt(()=>{var U;a!==void 0&&((U=T.current)==null||U.revealLine(a))},[a],j),pt(()=>{var U;(U=D.current)==null||U.editor.setTheme(s)},[s],j);let R=S.useCallback(()=>{var U;if(!(!v.current||!D.current)&&!O.current){I.current(D.current);let Y=l||n,N=kr(D.current,r||e||"",t||i||"",Y||"");T.current=(U=D.current)==null?void 0:U.editor.create(v.current,{model:N,automaticLayout:!0,...u},d),p&&T.current.restoreViewState(_o.get(Y)),D.current.editor.setTheme(s),a!==void 0&&T.current.revealLine(a),y(!0),O.current=!0}},[e,t,n,r,i,l,u,d,p,s,a]);S.useEffect(()=>{j&&E.current(T.current,D.current)},[j]),S.useEffect(()=>{!_&&!j&&R()},[_,j,R]),F.current=r,S.useEffect(()=>{var U,Y;j&&x&&((U=q.current)==null||U.dispose(),q.current=(Y=T.current)==null?void 0:Y.onDidChangeModelContent(N=>{M.current||x(T.current.getValue(),N)}))},[j,x]),S.useEffect(()=>{if(j){let U=D.current.editor.onDidChangeMarkers(Y=>{var ne;let N=(ne=T.current.getModel())==null?void 0:ne.uri;if(N&&Y.find(C=>C.path===N.path)){let C=D.current.editor.getModelMarkers({resource:N});z==null||z(C)}});return()=>{U==null||U.dispose()}}return()=>{}},[j,z]);function b(){var U,Y;(U=q.current)==null||U.dispose(),f?p&&_o.set(l,T.current.saveViewState()):(Y=T.current.getModel())==null||Y.dispose(),T.current.dispose()}return Nt.createElement(ag,{width:m,height:k,isEditorReady:j,loading:c,_ref:v,className:w,wrapperProps:P})}var Eb=Nb,zb=S.memo(Eb),Dr=zb;function Tb(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const Pb=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Ab=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Lb={};function tp(e,t){return(Lb.jsx?Ab:Pb).test(e)}const Rb=/[ \t\n\f\r]/g;function Ib(e){return typeof e=="object"?e.type==="text"?np(e.value):!1:np(e)}function np(e){return e.replace(Rb,"")===""}class ro{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}ro.prototype.normal={};ro.prototype.property={};ro.prototype.space=void 0;function dg(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new ro(n,r,t)}function Da(e){return e.toLowerCase()}class st{constructor(t,n){this.attribute=n,this.property=t}}st.prototype.attribute="";st.prototype.booleanish=!1;st.prototype.boolean=!1;st.prototype.commaOrSpaceSeparated=!1;st.prototype.commaSeparated=!1;st.prototype.defined=!1;st.prototype.mustUseProperty=!1;st.prototype.number=!1;st.prototype.overloadedBoolean=!1;st.prototype.property="";st.prototype.spaceSeparated=!1;st.prototype.space=void 0;let Mb=0;const ae=nr(),Ae=nr(),Fa=nr(),J=nr(),ve=nr(),Er=nr(),ut=nr();function nr(){return 2**++Mb}const Ba=Object.freeze(Object.defineProperty({__proto__:null,boolean:ae,booleanish:Ae,commaOrSpaceSeparated:ut,commaSeparated:Er,number:J,overloadedBoolean:Fa,spaceSeparated:ve},Symbol.toStringTag,{value:"Module"})),js=Object.keys(Ba);class ou extends st{constructor(t,n,r,i){let l=-1;if(super(t,n),rp(this,"space",i),typeof r=="number")for(;++l<js.length;){const s=js[l];rp(this,js[l],(r&Ba[s])===Ba[s])}}}ou.prototype.defined=!0;function rp(e,t,n){n&&(e[t]=n)}function Wr(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const l=new ou(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(l.mustUseProperty=!0),t[r]=l,n[Da(r)]=r,n[Da(l.attribute)]=r}return new ro(t,n,e.space)}const pg=Wr({properties:{ariaActiveDescendant:null,ariaAtomic:Ae,ariaAutoComplete:null,ariaBusy:Ae,ariaChecked:Ae,ariaColCount:J,ariaColIndex:J,ariaColSpan:J,ariaControls:ve,ariaCurrent:null,ariaDescribedBy:ve,ariaDetails:null,ariaDisabled:Ae,ariaDropEffect:ve,ariaErrorMessage:null,ariaExpanded:Ae,ariaFlowTo:ve,ariaGrabbed:Ae,ariaHasPopup:null,ariaHidden:Ae,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ve,ariaLevel:J,ariaLive:null,ariaModal:Ae,ariaMultiLine:Ae,ariaMultiSelectable:Ae,ariaOrientation:null,ariaOwns:ve,ariaPlaceholder:null,ariaPosInSet:J,ariaPressed:Ae,ariaReadOnly:Ae,ariaRelevant:null,ariaRequired:Ae,ariaRoleDescription:ve,ariaRowCount:J,ariaRowIndex:J,ariaRowSpan:J,ariaSelected:Ae,ariaSetSize:J,ariaSort:null,ariaValueMax:J,ariaValueMin:J,ariaValueNow:J,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function fg(e,t){return t in e?e[t]:t}function mg(e,t){return fg(e,t.toLowerCase())}const Ob=Wr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Er,acceptCharset:ve,accessKey:ve,action:null,allow:null,allowFullScreen:ae,allowPaymentRequest:ae,allowUserMedia:ae,alt:null,as:null,async:ae,autoCapitalize:null,autoComplete:ve,autoFocus:ae,autoPlay:ae,blocking:ve,capture:null,charSet:null,checked:ae,cite:null,className:ve,cols:J,colSpan:null,content:null,contentEditable:Ae,controls:ae,controlsList:ve,coords:J|Er,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ae,defer:ae,dir:null,dirName:null,disabled:ae,download:Fa,draggable:Ae,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ae,formTarget:null,headers:ve,height:J,hidden:Fa,high:J,href:null,hrefLang:null,htmlFor:ve,httpEquiv:ve,id:null,imageSizes:null,imageSrcSet:null,inert:ae,inputMode:null,integrity:null,is:null,isMap:ae,itemId:null,itemProp:ve,itemRef:ve,itemScope:ae,itemType:ve,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ae,low:J,manifest:null,max:null,maxLength:J,media:null,method:null,min:null,minLength:J,multiple:ae,muted:ae,name:null,nonce:null,noModule:ae,noValidate:ae,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ae,optimum:J,pattern:null,ping:ve,placeholder:null,playsInline:ae,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ae,referrerPolicy:null,rel:ve,required:ae,reversed:ae,rows:J,rowSpan:J,sandbox:ve,scope:null,scoped:ae,seamless:ae,selected:ae,shadowRootClonable:ae,shadowRootDelegatesFocus:ae,shadowRootMode:null,shape:null,size:J,sizes:null,slot:null,span:J,spellCheck:Ae,src:null,srcDoc:null,srcLang:null,srcSet:null,start:J,step:null,style:null,tabIndex:J,target:null,title:null,translate:null,type:null,typeMustMatch:ae,useMap:null,value:Ae,width:J,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ve,axis:null,background:null,bgColor:null,border:J,borderColor:null,bottomMargin:J,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ae,declare:ae,event:null,face:null,frame:null,frameBorder:null,hSpace:J,leftMargin:J,link:null,longDesc:null,lowSrc:null,marginHeight:J,marginWidth:J,noResize:ae,noHref:ae,noShade:ae,noWrap:ae,object:null,profile:null,prompt:null,rev:null,rightMargin:J,rules:null,scheme:null,scrolling:Ae,standby:null,summary:null,text:null,topMargin:J,valueType:null,version:null,vAlign:null,vLink:null,vSpace:J,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ae,disableRemotePlayback:ae,prefix:null,property:null,results:J,security:null,unselectable:null},space:"html",transform:mg}),$b=Wr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:ut,accentHeight:J,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:J,amplitude:J,arabicForm:null,ascent:J,attributeName:null,attributeType:null,azimuth:J,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:J,by:null,calcMode:null,capHeight:J,className:ve,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:J,diffuseConstant:J,direction:null,display:null,dur:null,divisor:J,dominantBaseline:null,download:ae,dx:null,dy:null,edgeMode:null,editable:null,elevation:J,enableBackground:null,end:null,event:null,exponent:J,externalResourcesRequired:null,fill:null,fillOpacity:J,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Er,g2:Er,glyphName:Er,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:J,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:J,horizOriginX:J,horizOriginY:J,id:null,ideographic:J,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:J,k:J,k1:J,k2:J,k3:J,k4:J,kernelMatrix:ut,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:J,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:J,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:J,overlineThickness:J,paintOrder:null,panose1:null,path:null,pathLength:J,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ve,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:J,pointsAtY:J,pointsAtZ:J,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:ut,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:ut,rev:ut,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:ut,requiredFeatures:ut,requiredFonts:ut,requiredFormats:ut,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:J,specularExponent:J,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:J,strikethroughThickness:J,string:null,stroke:null,strokeDashArray:ut,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:J,strokeOpacity:J,strokeWidth:null,style:null,surfaceScale:J,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:ut,tabIndex:J,tableValues:null,target:null,targetX:J,targetY:J,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:ut,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:J,underlineThickness:J,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:J,values:null,vAlphabetic:J,vMathematical:J,vectorEffect:null,vHanging:J,vIdeographic:J,version:null,vertAdvY:J,vertOriginX:J,vertOriginY:J,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:J,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:fg}),hg=Wr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),gg=Wr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:mg}),xg=Wr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),Db={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Fb=/[A-Z]/g,ip=/-[a-z]/g,Bb=/^data[-\w.:]+$/i;function Ub(e,t){const n=Da(t);let r=t,i=st;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Bb.test(t)){if(t.charAt(4)==="-"){const l=t.slice(5).replace(ip,Wb);r="data"+l.charAt(0).toUpperCase()+l.slice(1)}else{const l=t.slice(4);if(!ip.test(l)){let s=l.replace(Fb,Vb);s.charAt(0)!=="-"&&(s="-"+s),t="data"+s}}i=ou}return new i(r,t)}function Vb(e){return"-"+e.toLowerCase()}function Wb(e){return e.charAt(1).toUpperCase()}const Hb=dg([pg,Ob,hg,gg,xg],"html"),lu=dg([pg,$b,hg,gg,xg],"svg");function qb(e){return e.join(" ").trim()}var su={},op=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Kb=/\n/g,Qb=/^\s*/,Gb=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Jb=/^:\s*/,Yb=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Xb=/^[;\s]*/,Zb=/^\s+|\s+$/g,ek=`
`,lp="/",sp="*",Bn="",tk="comment",nk="declaration";function rk(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(k){var w=k.match(Kb);w&&(n+=w.length);var P=k.lastIndexOf(ek);r=~P?k.length-P:r+k.length}function l(){var k={line:n,column:r};return function(w){return w.position=new s(k),u(),w}}function s(k){this.start=k,this.end={line:n,column:r},this.source=t.source}s.prototype.content=e;function a(k){var w=new Error(t.source+":"+n+":"+r+": "+k);if(w.reason=k,w.filename=t.source,w.line=n,w.column=r,w.source=e,!t.silent)throw w}function c(k){var w=k.exec(e);if(w){var P=w[0];return i(P),e=e.slice(P.length),w}}function u(){c(Qb)}function d(k){var w;for(k=k||[];w=p();)w!==!1&&k.push(w);return k}function p(){var k=l();if(!(lp!=e.charAt(0)||sp!=e.charAt(1))){for(var w=2;Bn!=e.charAt(w)&&(sp!=e.charAt(w)||lp!=e.charAt(w+1));)++w;if(w+=2,Bn===e.charAt(w-1))return a("End of comment missing");var P=e.slice(2,w-2);return r+=2,i(P),e=e.slice(w),r+=2,k({type:tk,comment:P})}}function f(){var k=l(),w=c(Gb);if(w){if(p(),!c(Jb))return a("property missing ':'");var P=c(Yb),g=k({type:nk,property:ap(w[0].replace(op,Bn)),value:P?ap(P[0].replace(op,Bn)):Bn});return c(Xb),g}}function m(){var k=[];d(k);for(var w;w=f();)w!==!1&&(k.push(w),d(k));return k}return u(),m()}function ap(e){return e?e.replace(Zb,Bn):Bn}var ik=rk,ok=Vo&&Vo.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(su,"__esModule",{value:!0});su.default=sk;const lk=ok(ik);function sk(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,lk.default)(e),i=typeof t=="function";return r.forEach(l=>{if(l.type!=="declaration")return;const{property:s,value:a}=l;i?t(s,a,l):a&&(n=n||{},n[s]=a)}),n}var Fl={};Object.defineProperty(Fl,"__esModule",{value:!0});Fl.camelCase=void 0;var ak=/^--[a-zA-Z0-9_-]+$/,ck=/-([a-z])/g,uk=/^[^-]+$/,dk=/^-(webkit|moz|ms|o|khtml)-/,pk=/^-(ms)-/,fk=function(e){return!e||uk.test(e)||ak.test(e)},mk=function(e,t){return t.toUpperCase()},cp=function(e,t){return"".concat(t,"-")},hk=function(e,t){return t===void 0&&(t={}),fk(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(pk,cp):e=e.replace(dk,cp),e.replace(ck,mk))};Fl.camelCase=hk;var gk=Vo&&Vo.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},xk=gk(su),yk=Fl;function Ua(e,t){var n={};return!e||typeof e!="string"||(0,xk.default)(e,function(r,i){r&&i&&(n[(0,yk.camelCase)(r,t)]=i)}),n}Ua.default=Ua;var vk=Ua;const bk=bl(vk),yg=vg("end"),au=vg("start");function vg(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function kk(e){const t=au(e),n=yg(e);if(t&&n)return{start:t,end:n}}function wi(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?up(e.position):"start"in e||"end"in e?up(e):"line"in e||"column"in e?Va(e):""}function Va(e){return dp(e&&e.line)+":"+dp(e&&e.column)}function up(e){return Va(e&&e.start)+"-"+Va(e&&e.end)}function dp(e){return e&&typeof e=="number"?e:1}class Qe extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",l={},s=!1;if(n&&("line"in n&&"column"in n?l={place:n}:"start"in n&&"end"in n?l={place:n}:"type"in n?l={ancestors:[n],place:n.position}:l={...n}),typeof t=="string"?i=t:!l.cause&&t&&(s=!0,i=t.message,l.cause=t),!l.ruleId&&!l.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?l.ruleId=r:(l.source=r.slice(0,c),l.ruleId=r.slice(c+1))}if(!l.place&&l.ancestors&&l.ancestors){const c=l.ancestors[l.ancestors.length-1];c&&(l.place=c.position)}const a=l.place&&"start"in l.place?l.place.start:l.place;this.ancestors=l.ancestors||void 0,this.cause=l.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=a?a.line:void 0,this.name=wi(l.place)||"1:1",this.place=l.place||void 0,this.reason=this.message,this.ruleId=l.ruleId||void 0,this.source=l.source||void 0,this.stack=s&&l.cause&&typeof l.cause.stack=="string"?l.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Qe.prototype.file="";Qe.prototype.name="";Qe.prototype.reason="";Qe.prototype.message="";Qe.prototype.stack="";Qe.prototype.column=void 0;Qe.prototype.line=void 0;Qe.prototype.ancestors=void 0;Qe.prototype.cause=void 0;Qe.prototype.fatal=void 0;Qe.prototype.place=void 0;Qe.prototype.ruleId=void 0;Qe.prototype.source=void 0;const cu={}.hasOwnProperty,wk=new Map,jk=/[A-Z]/g,_k=new Set(["table","tbody","thead","tfoot","tr"]),Sk=new Set(["td","th"]),bg="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Ck(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=Rk(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Lk(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?lu:Hb,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},l=kg(i,e,void 0);return l&&typeof l!="string"?l:i.create(e,i.Fragment,{children:l||void 0},void 0)}function kg(e,t,n){if(t.type==="element")return Nk(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return Ek(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return Tk(e,t,n);if(t.type==="mdxjsEsm")return zk(e,t);if(t.type==="root")return Pk(e,t,n);if(t.type==="text")return Ak(e,t)}function Nk(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=lu,e.schema=i),e.ancestors.push(t);const l=jg(e,t.tagName,!1),s=Ik(e,t);let a=du(e,t);return _k.has(t.tagName)&&(a=a.filter(function(c){return typeof c=="string"?!Ib(c):!0})),wg(e,s,l,t),uu(s,a),e.ancestors.pop(),e.schema=r,e.create(t,l,s,n)}function Ek(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Qi(e,t.position)}function zk(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Qi(e,t.position)}function Tk(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=lu,e.schema=i),e.ancestors.push(t);const l=t.name===null?e.Fragment:jg(e,t.name,!0),s=Mk(e,t),a=du(e,t);return wg(e,s,l,t),uu(s,a),e.ancestors.pop(),e.schema=r,e.create(t,l,s,n)}function Pk(e,t,n){const r={};return uu(r,du(e,t)),e.create(t,e.Fragment,r,n)}function Ak(e,t){return t.value}function wg(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function uu(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function Lk(e,t,n){return r;function r(i,l,s,a){const u=Array.isArray(s.children)?n:t;return a?u(l,s,a):u(l,s)}}function Rk(e,t){return n;function n(r,i,l,s){const a=Array.isArray(l.children),c=au(r);return t(i,l,s,a,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function Ik(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&cu.call(t.properties,i)){const l=Ok(e,i,t.properties[i]);if(l){const[s,a]=l;e.tableCellAlignToStyle&&s==="align"&&typeof a=="string"&&Sk.has(t.tagName)?r=a:n[s]=a}}if(r){const l=n.style||(n.style={});l[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function Mk(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const l=r.data.estree.body[0];l.type;const s=l.expression;s.type;const a=s.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else Qi(e,t.position);else{const i=r.name;let l;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const a=r.value.data.estree.body[0];a.type,l=e.evaluater.evaluateExpression(a.expression)}else Qi(e,t.position);else l=r.value===null?!0:r.value;n[i]=l}return n}function du(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:wk;for(;++r<t.children.length;){const l=t.children[r];let s;if(e.passKeys){const c=l.type==="element"?l.tagName:l.type==="mdxJsxFlowElement"||l.type==="mdxJsxTextElement"?l.name:void 0;if(c){const u=i.get(c)||0;s=c+"-"+u,i.set(c,u+1)}}const a=kg(e,l,s);a!==void 0&&n.push(a)}return n}function Ok(e,t,n){const r=Ub(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Tb(n):qb(n)),r.property==="style"){let i=typeof n=="object"?n:$k(e,String(n));return e.stylePropertyNameCase==="css"&&(i=Dk(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?Db[r.property]||r.property:r.attribute,n]}}function $k(e,t){try{return bk(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new Qe("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=bg+"#cannot-parse-style-attribute",i}}function jg(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let l=-1,s;for(;++l<i.length;){const a=tp(i[l])?{type:"Identifier",name:i[l]}:{type:"Literal",value:i[l]};s=s?{type:"MemberExpression",object:s,property:a,computed:!!(l&&a.type==="Literal"),optional:!1}:a}r=s}else r=tp(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return cu.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Qi(e)}function Qi(e,t){const n=new Qe("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=bg+"#cannot-handle-mdx-estrees-without-createevaluater",n}function Dk(e){const t={};let n;for(n in e)cu.call(e,n)&&(t[Fk(n)]=e[n]);return t}function Fk(e){let t=e.replace(jk,Bk);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function Bk(e){return"-"+e.toLowerCase()}const _s={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Uk={};function Vk(e,t){const n=Uk,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return _g(e,r,i)}function _g(e,t,n){if(Wk(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return pp(e.children,t,n)}return Array.isArray(e)?pp(e,t,n):""}function pp(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=_g(e[i],t,n);return r.join("")}function Wk(e){return!!(e&&typeof e=="object")}const fp=document.createElement("i");function pu(e){const t="&"+e+";";fp.innerHTML=t;const n=fp.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Gt(e,t,n,r){const i=e.length;let l=0,s;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)s=Array.from(r),s.unshift(t,n),e.splice(...s);else for(n&&e.splice(t,n);l<r.length;)s=r.slice(l,l+1e4),s.unshift(t,0),e.splice(...s),l+=1e4,t+=1e4}function St(e,t){return e.length>0?(Gt(e,e.length,0,t),e):t}const mp={}.hasOwnProperty;function Hk(e){const t={};let n=-1;for(;++n<e.length;)qk(t,e[n]);return t}function qk(e,t){let n;for(n in t){const i=(mp.call(e,n)?e[n]:void 0)||(e[n]={}),l=t[n];let s;if(l)for(s in l){mp.call(i,s)||(i[s]=[]);const a=l[s];Kk(i[s],Array.isArray(a)?a:a?[a]:[])}}}function Kk(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Gt(e,0,0,r)}function Sg(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function zr(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const qt=On(/[A-Za-z]/),mt=On(/[\dA-Za-z]/),Qk=On(/[#-'*+\--9=?A-Z^-~]/);function Wa(e){return e!==null&&(e<32||e===127)}const Ha=On(/\d/),Gk=On(/[\dA-Fa-f]/),Jk=On(/[!-/:-@[-`{-~]/);function le(e){return e!==null&&e<-2}function lt(e){return e!==null&&(e<0||e===32)}function ge(e){return e===-2||e===-1||e===32}const Yk=On(new RegExp("\\p{P}|\\p{S}","u")),Xk=On(/\s/);function On(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Hr(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const l=e.charCodeAt(n);let s="";if(l===37&&mt(e.charCodeAt(n+1))&&mt(e.charCodeAt(n+2)))i=2;else if(l<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l))||(s=String.fromCharCode(l));else if(l>55295&&l<57344){const a=e.charCodeAt(n+1);l<56320&&a>56319&&a<57344?(s=String.fromCharCode(l,a),i=1):s="�"}else s=String.fromCharCode(l);s&&(t.push(e.slice(r,n),encodeURIComponent(s)),r=n+i+1,s=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function ke(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let l=0;return s;function s(c){return ge(c)?(e.enter(n),a(c)):t(c)}function a(c){return ge(c)&&l++<i?(e.consume(c),a):(e.exit(n),t(c))}}const Zk={tokenize:ew};function ew(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),ke(e,t,"linePrefix")}function i(a){return e.enter("paragraph"),l(a)}function l(a){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,s(a)}function s(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return le(a)?(e.consume(a),e.exit("chunkText"),l):(e.consume(a),s)}}const tw={tokenize:nw},hp={tokenize:rw};function nw(e){const t=this,n=[];let r=0,i,l,s;return a;function a(x){if(r<n.length){const z=n[r];return t.containerState=z[1],e.attempt(z[0].continuation,c,u)(x)}return u(x)}function c(x){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&h();const z=t.events.length;let j=z,y;for(;j--;)if(t.events[j][0]==="exit"&&t.events[j][1].type==="chunkFlow"){y=t.events[j][1].end;break}g(r);let _=z;for(;_<t.events.length;)t.events[_][1].end={...y},_++;return Gt(t.events,j+1,0,t.events.slice(z)),t.events.length=_,u(x)}return a(x)}function u(x){if(r===n.length){if(!i)return f(x);if(i.currentConstruct&&i.currentConstruct.concrete)return k(x);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(hp,d,p)(x)}function d(x){return i&&h(),g(r),f(x)}function p(x){return t.parser.lazy[t.now().line]=r!==n.length,s=t.now().offset,k(x)}function f(x){return t.containerState={},e.attempt(hp,m,k)(x)}function m(x){return r++,n.push([t.currentConstruct,t.containerState]),f(x)}function k(x){if(x===null){i&&h(),g(0),e.consume(x);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:l}),w(x)}function w(x){if(x===null){P(e.exit("chunkFlow"),!0),g(0),e.consume(x);return}return le(x)?(e.consume(x),P(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(x),w)}function P(x,z){const j=t.sliceStream(x);if(z&&j.push(null),x.previous=l,l&&(l.next=x),l=x,i.defineSkip(x.start),i.write(j),t.parser.lazy[x.start.line]){let y=i.events.length;for(;y--;)if(i.events[y][1].start.offset<s&&(!i.events[y][1].end||i.events[y][1].end.offset>s))return;const _=t.events.length;let A=_,D,T;for(;A--;)if(t.events[A][0]==="exit"&&t.events[A][1].type==="chunkFlow"){if(D){T=t.events[A][1].end;break}D=!0}for(g(r),y=_;y<t.events.length;)t.events[y][1].end={...T},y++;Gt(t.events,A+1,0,t.events.slice(_)),t.events.length=y}}function g(x){let z=n.length;for(;z-- >x;){const j=n[z];t.containerState=j[1],j[0].exit.call(t,e)}n.length=x}function h(){i.write([null]),l=void 0,i=void 0,t.containerState._closeFlow=void 0}}function rw(e,t,n){return ke(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function gp(e){if(e===null||lt(e)||Xk(e))return 1;if(Yk(e))return 2}function fu(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const l=e[i].resolveAll;l&&!r.includes(l)&&(t=l(t,n),r.push(l))}return t}const qa={name:"attention",resolveAll:iw,tokenize:ow};function iw(e,t){let n=-1,r,i,l,s,a,c,u,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p={...e[r][1].end},f={...e[n][1].start};xp(p,-c),xp(f,c),s={type:c>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},a={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},l={type:c>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?"strong":"emphasis",start:{...s.start},end:{...a.end}},e[r][1].end={...s.start},e[n][1].start={...a.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=St(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=St(u,[["enter",i,t],["enter",s,t],["exit",s,t],["enter",l,t]]),u=St(u,fu(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=St(u,[["exit",l,t],["enter",a,t],["exit",a,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,u=St(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,Gt(e,r-1,n-r+3,u),n=r+u.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function ow(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=gp(r);let l;return s;function s(c){return l=c,e.enter("attentionSequence"),a(c)}function a(c){if(c===l)return e.consume(c),a;const u=e.exit("attentionSequence"),d=gp(c),p=!d||d===2&&i||n.includes(c),f=!i||i===2&&d||n.includes(r);return u._open=!!(l===42?p:p&&(i||!f)),u._close=!!(l===42?f:f&&(d||!p)),t(c)}}function xp(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const lw={name:"autolink",tokenize:sw};function sw(e,t,n){let r=0;return i;function i(m){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),l}function l(m){return qt(m)?(e.consume(m),s):m===64?n(m):u(m)}function s(m){return m===43||m===45||m===46||mt(m)?(r=1,a(m)):u(m)}function a(m){return m===58?(e.consume(m),r=0,c):(m===43||m===45||m===46||mt(m))&&r++<32?(e.consume(m),a):(r=0,u(m))}function c(m){return m===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):m===null||m===32||m===60||Wa(m)?n(m):(e.consume(m),c)}function u(m){return m===64?(e.consume(m),d):Qk(m)?(e.consume(m),u):n(m)}function d(m){return mt(m)?p(m):n(m)}function p(m){return m===46?(e.consume(m),r=0,d):m===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):f(m)}function f(m){if((m===45||mt(m))&&r++<63){const k=m===45?f:p;return e.consume(m),k}return n(m)}}const Bl={partial:!0,tokenize:aw};function aw(e,t,n){return r;function r(l){return ge(l)?ke(e,i,"linePrefix")(l):i(l)}function i(l){return l===null||le(l)?t(l):n(l)}}const Cg={continuation:{tokenize:uw},exit:dw,name:"blockQuote",tokenize:cw};function cw(e,t,n){const r=this;return i;function i(s){if(s===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(s),e.exit("blockQuoteMarker"),l}return n(s)}function l(s){return ge(s)?(e.enter("blockQuotePrefixWhitespace"),e.consume(s),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(s))}}function uw(e,t,n){const r=this;return i;function i(s){return ge(s)?ke(e,l,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s):l(s)}function l(s){return e.attempt(Cg,t,n)(s)}}function dw(e){e.exit("blockQuote")}const Ng={name:"characterEscape",tokenize:pw};function pw(e,t,n){return r;function r(l){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(l),e.exit("escapeMarker"),i}function i(l){return Jk(l)?(e.enter("characterEscapeValue"),e.consume(l),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(l)}}const Eg={name:"characterReference",tokenize:fw};function fw(e,t,n){const r=this;let i=0,l,s;return a;function a(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),c}function c(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),l=31,s=mt,d(p))}function u(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),l=6,s=Gk,d):(e.enter("characterReferenceValue"),l=7,s=Ha,d(p))}function d(p){if(p===59&&i){const f=e.exit("characterReferenceValue");return s===mt&&!pu(r.sliceSerialize(f))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return s(p)&&i++<l?(e.consume(p),d):n(p)}}const yp={partial:!0,tokenize:hw},vp={concrete:!0,name:"codeFenced",tokenize:mw};function mw(e,t,n){const r=this,i={partial:!0,tokenize:j};let l=0,s=0,a;return c;function c(y){return u(y)}function u(y){const _=r.events[r.events.length-1];return l=_&&_[1].type==="linePrefix"?_[2].sliceSerialize(_[1],!0).length:0,a=y,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(y)}function d(y){return y===a?(s++,e.consume(y),d):s<3?n(y):(e.exit("codeFencedFenceSequence"),ge(y)?ke(e,p,"whitespace")(y):p(y))}function p(y){return y===null||le(y)?(e.exit("codeFencedFence"),r.interrupt?t(y):e.check(yp,w,z)(y)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(y))}function f(y){return y===null||le(y)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(y)):ge(y)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),ke(e,m,"whitespace")(y)):y===96&&y===a?n(y):(e.consume(y),f)}function m(y){return y===null||le(y)?p(y):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),k(y))}function k(y){return y===null||le(y)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(y)):y===96&&y===a?n(y):(e.consume(y),k)}function w(y){return e.attempt(i,z,P)(y)}function P(y){return e.enter("lineEnding"),e.consume(y),e.exit("lineEnding"),g}function g(y){return l>0&&ge(y)?ke(e,h,"linePrefix",l+1)(y):h(y)}function h(y){return y===null||le(y)?e.check(yp,w,z)(y):(e.enter("codeFlowValue"),x(y))}function x(y){return y===null||le(y)?(e.exit("codeFlowValue"),h(y)):(e.consume(y),x)}function z(y){return e.exit("codeFenced"),t(y)}function j(y,_,A){let D=0;return T;function T(F){return y.enter("lineEnding"),y.consume(F),y.exit("lineEnding"),v}function v(F){return y.enter("codeFencedFence"),ge(F)?ke(y,E,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(F):E(F)}function E(F){return F===a?(y.enter("codeFencedFenceSequence"),I(F)):A(F)}function I(F){return F===a?(D++,y.consume(F),I):D>=s?(y.exit("codeFencedFenceSequence"),ge(F)?ke(y,q,"whitespace")(F):q(F)):A(F)}function q(F){return F===null||le(F)?(y.exit("codeFencedFence"),_(F)):A(F)}}}function hw(e,t,n){const r=this;return i;function i(s){return s===null?n(s):(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),l)}function l(s){return r.parser.lazy[r.now().line]?n(s):t(s)}}const Ss={name:"codeIndented",tokenize:xw},gw={partial:!0,tokenize:yw};function xw(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),ke(e,l,"linePrefix",5)(u)}function l(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?s(u):n(u)}function s(u){return u===null?c(u):le(u)?e.attempt(gw,s,c)(u):(e.enter("codeFlowValue"),a(u))}function a(u){return u===null||le(u)?(e.exit("codeFlowValue"),s(u)):(e.consume(u),a)}function c(u){return e.exit("codeIndented"),t(u)}}function yw(e,t,n){const r=this;return i;function i(s){return r.parser.lazy[r.now().line]?n(s):le(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),i):ke(e,l,"linePrefix",5)(s)}function l(s){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(s):le(s)?i(s):n(s)}}const vw={name:"codeText",previous:kw,resolve:bw,tokenize:ww};function bw(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function kw(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function ww(e,t,n){let r=0,i,l;return s;function s(p){return e.enter("codeText"),e.enter("codeTextSequence"),a(p)}function a(p){return p===96?(e.consume(p),r++,a):(e.exit("codeTextSequence"),c(p))}function c(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),c):p===96?(l=e.enter("codeTextSequence"),i=0,d(p)):le(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),c):(e.enter("codeTextData"),u(p))}function u(p){return p===null||p===32||p===96||le(p)?(e.exit("codeTextData"),c(p)):(e.consume(p),u)}function d(p){return p===96?(e.consume(p),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(l.type="codeTextData",u(p))}}class jw{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const l=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&ni(this.left,r),l.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),ni(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),ni(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);ni(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);ni(this.left,n.reverse())}}}function ni(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function zg(e){const t={};let n=-1,r,i,l,s,a,c,u;const d=new jw(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,l=0,l<c.length&&c[l][1].type==="lineEndingBlank"&&(l+=2),l<c.length&&c[l][1].type==="content"))for(;++l<c.length&&c[l][1].type!=="content";)c[l][1].type==="chunkText"&&(c[l][1]._isInFirstContentOfListItem=!0,l++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,_w(d,n)),n=t[n],u=!0);else if(r[1]._container){for(l=n,i=void 0;l--;)if(s=d.get(l),s[1].type==="lineEnding"||s[1].type==="lineEndingBlank")s[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),s[1].type="lineEnding",i=l);else if(!(s[1].type==="linePrefix"||s[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},a=d.slice(i,n),a.unshift(r),d.splice(i,n-i+1,a))}}return Gt(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function _w(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const l=[];let s=n._tokenizer;s||(s=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(s._contentTypeTextTrailing=!0));const a=s.events,c=[],u={};let d,p,f=-1,m=n,k=0,w=0;const P=[w];for(;m;){for(;e.get(++i)[1]!==m;);l.push(i),m._tokenizer||(d=r.sliceStream(m),m.next||d.push(null),p&&s.defineSkip(m.start),m._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=!0),s.write(d),m._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=void 0)),p=m,m=m.next}for(m=n;++f<a.length;)a[f][0]==="exit"&&a[f-1][0]==="enter"&&a[f][1].type===a[f-1][1].type&&a[f][1].start.line!==a[f][1].end.line&&(w=f+1,P.push(w),m._tokenizer=void 0,m.previous=void 0,m=m.next);for(s.events=[],m?(m._tokenizer=void 0,m.previous=void 0):P.pop(),f=P.length;f--;){const g=a.slice(P[f],P[f+1]),h=l.pop();c.push([h,h+g.length-1]),e.splice(h,2,g)}for(c.reverse(),f=-1;++f<c.length;)u[k+c[f][0]]=k+c[f][1],k+=c[f][1]-c[f][0]-1;return u}const Sw={resolve:Nw,tokenize:Ew},Cw={partial:!0,tokenize:zw};function Nw(e){return zg(e),e}function Ew(e,t){let n;return r;function r(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?l(a):le(a)?e.check(Cw,s,l)(a):(e.consume(a),i)}function l(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function s(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function zw(e,t,n){const r=this;return i;function i(s){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),ke(e,l,"linePrefix")}function l(s){if(s===null||le(s))return n(s);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(s):e.interrupt(r.parser.constructs.flow,n,t)(s)}}function Tg(e,t,n,r,i,l,s,a,c){const u=c||Number.POSITIVE_INFINITY;let d=0;return p;function p(g){return g===60?(e.enter(r),e.enter(i),e.enter(l),e.consume(g),e.exit(l),f):g===null||g===32||g===41||Wa(g)?n(g):(e.enter(r),e.enter(s),e.enter(a),e.enter("chunkString",{contentType:"string"}),w(g))}function f(g){return g===62?(e.enter(l),e.consume(g),e.exit(l),e.exit(i),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),m(g))}function m(g){return g===62?(e.exit("chunkString"),e.exit(a),f(g)):g===null||g===60||le(g)?n(g):(e.consume(g),g===92?k:m)}function k(g){return g===60||g===62||g===92?(e.consume(g),m):m(g)}function w(g){return!d&&(g===null||g===41||lt(g))?(e.exit("chunkString"),e.exit(a),e.exit(s),e.exit(r),t(g)):d<u&&g===40?(e.consume(g),d++,w):g===41?(e.consume(g),d--,w):g===null||g===32||g===40||Wa(g)?n(g):(e.consume(g),g===92?P:w)}function P(g){return g===40||g===41||g===92?(e.consume(g),w):w(g)}}function Pg(e,t,n,r,i,l){const s=this;let a=0,c;return u;function u(m){return e.enter(r),e.enter(i),e.consume(m),e.exit(i),e.enter(l),d}function d(m){return a>999||m===null||m===91||m===93&&!c||m===94&&!a&&"_hiddenFootnoteSupport"in s.parser.constructs?n(m):m===93?(e.exit(l),e.enter(i),e.consume(m),e.exit(i),e.exit(r),t):le(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),p(m))}function p(m){return m===null||m===91||m===93||le(m)||a++>999?(e.exit("chunkString"),d(m)):(e.consume(m),c||(c=!ge(m)),m===92?f:p)}function f(m){return m===91||m===92||m===93?(e.consume(m),a++,p):p(m)}}function Ag(e,t,n,r,i,l){let s;return a;function a(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),s=f===40?41:f,c):n(f)}function c(f){return f===s?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(l),u(f))}function u(f){return f===s?(e.exit(l),c(s)):f===null?n(f):le(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),ke(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===s||f===null||le(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?p:d)}function p(f){return f===s||f===92?(e.consume(f),d):d(f)}}function ji(e,t){let n;return r;function r(i){return le(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):ge(i)?ke(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const Tw={name:"definition",tokenize:Aw},Pw={partial:!0,tokenize:Lw};function Aw(e,t,n){const r=this;let i;return l;function l(m){return e.enter("definition"),s(m)}function s(m){return Pg.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(m)}function a(m){return i=zr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),m===58?(e.enter("definitionMarker"),e.consume(m),e.exit("definitionMarker"),c):n(m)}function c(m){return lt(m)?ji(e,u)(m):u(m)}function u(m){return Tg(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(m)}function d(m){return e.attempt(Pw,p,p)(m)}function p(m){return ge(m)?ke(e,f,"whitespace")(m):f(m)}function f(m){return m===null||le(m)?(e.exit("definition"),r.parser.defined.push(i),t(m)):n(m)}}function Lw(e,t,n){return r;function r(a){return lt(a)?ji(e,i)(a):n(a)}function i(a){return Ag(e,l,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function l(a){return ge(a)?ke(e,s,"whitespace")(a):s(a)}function s(a){return a===null||le(a)?t(a):n(a)}}const Rw={name:"hardBreakEscape",tokenize:Iw};function Iw(e,t,n){return r;function r(l){return e.enter("hardBreakEscape"),e.consume(l),i}function i(l){return le(l)?(e.exit("hardBreakEscape"),t(l)):n(l)}}const Mw={name:"headingAtx",resolve:Ow,tokenize:$w};function Ow(e,t){let n=e.length-2,r=3,i,l;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},l={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Gt(e,r,n-r+1,[["enter",i,t],["enter",l,t],["exit",l,t],["exit",i,t]])),e}function $w(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),l(d)}function l(d){return e.enter("atxHeadingSequence"),s(d)}function s(d){return d===35&&r++<6?(e.consume(d),s):d===null||lt(d)?(e.exit("atxHeadingSequence"),a(d)):n(d)}function a(d){return d===35?(e.enter("atxHeadingSequence"),c(d)):d===null||le(d)?(e.exit("atxHeading"),t(d)):ge(d)?ke(e,a,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function c(d){return d===35?(e.consume(d),c):(e.exit("atxHeadingSequence"),a(d))}function u(d){return d===null||d===35||lt(d)?(e.exit("atxHeadingText"),a(d)):(e.consume(d),u)}}const Dw=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],bp=["pre","script","style","textarea"],Fw={concrete:!0,name:"htmlFlow",resolveTo:Vw,tokenize:Ww},Bw={partial:!0,tokenize:qw},Uw={partial:!0,tokenize:Hw};function Vw(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Ww(e,t,n){const r=this;let i,l,s,a,c;return u;function u(N){return d(N)}function d(N){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(N),p}function p(N){return N===33?(e.consume(N),f):N===47?(e.consume(N),l=!0,w):N===63?(e.consume(N),i=3,r.interrupt?t:b):qt(N)?(e.consume(N),s=String.fromCharCode(N),P):n(N)}function f(N){return N===45?(e.consume(N),i=2,m):N===91?(e.consume(N),i=5,a=0,k):qt(N)?(e.consume(N),i=4,r.interrupt?t:b):n(N)}function m(N){return N===45?(e.consume(N),r.interrupt?t:b):n(N)}function k(N){const ne="CDATA[";return N===ne.charCodeAt(a++)?(e.consume(N),a===ne.length?r.interrupt?t:E:k):n(N)}function w(N){return qt(N)?(e.consume(N),s=String.fromCharCode(N),P):n(N)}function P(N){if(N===null||N===47||N===62||lt(N)){const ne=N===47,C=s.toLowerCase();return!ne&&!l&&bp.includes(C)?(i=1,r.interrupt?t(N):E(N)):Dw.includes(s.toLowerCase())?(i=6,ne?(e.consume(N),g):r.interrupt?t(N):E(N)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(N):l?h(N):x(N))}return N===45||mt(N)?(e.consume(N),s+=String.fromCharCode(N),P):n(N)}function g(N){return N===62?(e.consume(N),r.interrupt?t:E):n(N)}function h(N){return ge(N)?(e.consume(N),h):T(N)}function x(N){return N===47?(e.consume(N),T):N===58||N===95||qt(N)?(e.consume(N),z):ge(N)?(e.consume(N),x):T(N)}function z(N){return N===45||N===46||N===58||N===95||mt(N)?(e.consume(N),z):j(N)}function j(N){return N===61?(e.consume(N),y):ge(N)?(e.consume(N),j):x(N)}function y(N){return N===null||N===60||N===61||N===62||N===96?n(N):N===34||N===39?(e.consume(N),c=N,_):ge(N)?(e.consume(N),y):A(N)}function _(N){return N===c?(e.consume(N),c=null,D):N===null||le(N)?n(N):(e.consume(N),_)}function A(N){return N===null||N===34||N===39||N===47||N===60||N===61||N===62||N===96||lt(N)?j(N):(e.consume(N),A)}function D(N){return N===47||N===62||ge(N)?x(N):n(N)}function T(N){return N===62?(e.consume(N),v):n(N)}function v(N){return N===null||le(N)?E(N):ge(N)?(e.consume(N),v):n(N)}function E(N){return N===45&&i===2?(e.consume(N),Q):N===60&&i===1?(e.consume(N),O):N===62&&i===4?(e.consume(N),U):N===63&&i===3?(e.consume(N),b):N===93&&i===5?(e.consume(N),R):le(N)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(Bw,Y,I)(N)):N===null||le(N)?(e.exit("htmlFlowData"),I(N)):(e.consume(N),E)}function I(N){return e.check(Uw,q,Y)(N)}function q(N){return e.enter("lineEnding"),e.consume(N),e.exit("lineEnding"),F}function F(N){return N===null||le(N)?I(N):(e.enter("htmlFlowData"),E(N))}function Q(N){return N===45?(e.consume(N),b):E(N)}function O(N){return N===47?(e.consume(N),s="",M):E(N)}function M(N){if(N===62){const ne=s.toLowerCase();return bp.includes(ne)?(e.consume(N),U):E(N)}return qt(N)&&s.length<8?(e.consume(N),s+=String.fromCharCode(N),M):E(N)}function R(N){return N===93?(e.consume(N),b):E(N)}function b(N){return N===62?(e.consume(N),U):N===45&&i===2?(e.consume(N),b):E(N)}function U(N){return N===null||le(N)?(e.exit("htmlFlowData"),Y(N)):(e.consume(N),U)}function Y(N){return e.exit("htmlFlow"),t(N)}}function Hw(e,t,n){const r=this;return i;function i(s){return le(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),l):n(s)}function l(s){return r.parser.lazy[r.now().line]?n(s):t(s)}}function qw(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Bl,t,n)}}const Kw={name:"htmlText",tokenize:Qw};function Qw(e,t,n){const r=this;let i,l,s;return a;function a(b){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(b),c}function c(b){return b===33?(e.consume(b),u):b===47?(e.consume(b),j):b===63?(e.consume(b),x):qt(b)?(e.consume(b),A):n(b)}function u(b){return b===45?(e.consume(b),d):b===91?(e.consume(b),l=0,k):qt(b)?(e.consume(b),h):n(b)}function d(b){return b===45?(e.consume(b),m):n(b)}function p(b){return b===null?n(b):b===45?(e.consume(b),f):le(b)?(s=p,O(b)):(e.consume(b),p)}function f(b){return b===45?(e.consume(b),m):p(b)}function m(b){return b===62?Q(b):b===45?f(b):p(b)}function k(b){const U="CDATA[";return b===U.charCodeAt(l++)?(e.consume(b),l===U.length?w:k):n(b)}function w(b){return b===null?n(b):b===93?(e.consume(b),P):le(b)?(s=w,O(b)):(e.consume(b),w)}function P(b){return b===93?(e.consume(b),g):w(b)}function g(b){return b===62?Q(b):b===93?(e.consume(b),g):w(b)}function h(b){return b===null||b===62?Q(b):le(b)?(s=h,O(b)):(e.consume(b),h)}function x(b){return b===null?n(b):b===63?(e.consume(b),z):le(b)?(s=x,O(b)):(e.consume(b),x)}function z(b){return b===62?Q(b):x(b)}function j(b){return qt(b)?(e.consume(b),y):n(b)}function y(b){return b===45||mt(b)?(e.consume(b),y):_(b)}function _(b){return le(b)?(s=_,O(b)):ge(b)?(e.consume(b),_):Q(b)}function A(b){return b===45||mt(b)?(e.consume(b),A):b===47||b===62||lt(b)?D(b):n(b)}function D(b){return b===47?(e.consume(b),Q):b===58||b===95||qt(b)?(e.consume(b),T):le(b)?(s=D,O(b)):ge(b)?(e.consume(b),D):Q(b)}function T(b){return b===45||b===46||b===58||b===95||mt(b)?(e.consume(b),T):v(b)}function v(b){return b===61?(e.consume(b),E):le(b)?(s=v,O(b)):ge(b)?(e.consume(b),v):D(b)}function E(b){return b===null||b===60||b===61||b===62||b===96?n(b):b===34||b===39?(e.consume(b),i=b,I):le(b)?(s=E,O(b)):ge(b)?(e.consume(b),E):(e.consume(b),q)}function I(b){return b===i?(e.consume(b),i=void 0,F):b===null?n(b):le(b)?(s=I,O(b)):(e.consume(b),I)}function q(b){return b===null||b===34||b===39||b===60||b===61||b===96?n(b):b===47||b===62||lt(b)?D(b):(e.consume(b),q)}function F(b){return b===47||b===62||lt(b)?D(b):n(b)}function Q(b){return b===62?(e.consume(b),e.exit("htmlTextData"),e.exit("htmlText"),t):n(b)}function O(b){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),M}function M(b){return ge(b)?ke(e,R,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(b):R(b)}function R(b){return e.enter("htmlTextData"),s(b)}}const mu={name:"labelEnd",resolveAll:Xw,resolveTo:Zw,tokenize:ej},Gw={tokenize:tj},Jw={tokenize:nj},Yw={tokenize:rj};function Xw(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&Gt(e,0,e.length,n),e}function Zw(e,t){let n=e.length,r=0,i,l,s,a;for(;n--;)if(i=e[n][1],l){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(s){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(l=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(s=n);const c={type:e[l][1].type==="labelLink"?"link":"image",start:{...e[l][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[l][1].start},end:{...e[s][1].end}},d={type:"labelText",start:{...e[l+r+2][1].end},end:{...e[s-2][1].start}};return a=[["enter",c,t],["enter",u,t]],a=St(a,e.slice(l+1,l+r+3)),a=St(a,[["enter",d,t]]),a=St(a,fu(t.parser.constructs.insideSpan.null,e.slice(l+r+4,s-3),t)),a=St(a,[["exit",d,t],e[s-2],e[s-1],["exit",u,t]]),a=St(a,e.slice(s+1)),a=St(a,[["exit",c,t]]),Gt(e,l,e.length,a),e}function ej(e,t,n){const r=this;let i=r.events.length,l,s;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){l=r.events[i][1];break}return a;function a(f){return l?l._inactive?p(f):(s=r.parser.defined.includes(zr(r.sliceSerialize({start:l.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),c):n(f)}function c(f){return f===40?e.attempt(Gw,d,s?d:p)(f):f===91?e.attempt(Jw,d,s?u:p)(f):s?d(f):p(f)}function u(f){return e.attempt(Yw,d,p)(f)}function d(f){return t(f)}function p(f){return l._balanced=!0,n(f)}}function tj(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),i}function i(p){return lt(p)?ji(e,l)(p):l(p)}function l(p){return p===41?d(p):Tg(e,s,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function s(p){return lt(p)?ji(e,c)(p):d(p)}function a(p){return n(p)}function c(p){return p===34||p===39||p===40?Ag(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function u(p){return lt(p)?ji(e,d)(p):d(p)}function d(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function nj(e,t,n){const r=this;return i;function i(a){return Pg.call(r,e,l,s,"reference","referenceMarker","referenceString")(a)}function l(a){return r.parser.defined.includes(zr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function s(a){return n(a)}}function rj(e,t,n){return r;function r(l){return e.enter("reference"),e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),i}function i(l){return l===93?(e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),e.exit("reference"),t):n(l)}}const ij={name:"labelStartImage",resolveAll:mu.resolveAll,tokenize:oj};function oj(e,t,n){const r=this;return i;function i(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),l}function l(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),s):n(a)}function s(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const lj={name:"labelStartLink",resolveAll:mu.resolveAll,tokenize:sj};function sj(e,t,n){const r=this;return i;function i(s){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelLink"),l}function l(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(s):t(s)}}const Cs={name:"lineEnding",tokenize:aj};function aj(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),ke(e,t,"linePrefix")}}const Bo={name:"thematicBreak",tokenize:cj};function cj(e,t,n){let r=0,i;return l;function l(u){return e.enter("thematicBreak"),s(u)}function s(u){return i=u,a(u)}function a(u){return u===i?(e.enter("thematicBreakSequence"),c(u)):r>=3&&(u===null||le(u))?(e.exit("thematicBreak"),t(u)):n(u)}function c(u){return u===i?(e.consume(u),r++,c):(e.exit("thematicBreakSequence"),ge(u)?ke(e,a,"whitespace")(u):a(u))}}const et={continuation:{tokenize:fj},exit:hj,name:"list",tokenize:pj},uj={partial:!0,tokenize:gj},dj={partial:!0,tokenize:mj};function pj(e,t,n){const r=this,i=r.events[r.events.length-1];let l=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,s=0;return a;function a(m){const k=r.containerState.type||(m===42||m===43||m===45?"listUnordered":"listOrdered");if(k==="listUnordered"?!r.containerState.marker||m===r.containerState.marker:Ha(m)){if(r.containerState.type||(r.containerState.type=k,e.enter(k,{_container:!0})),k==="listUnordered")return e.enter("listItemPrefix"),m===42||m===45?e.check(Bo,n,u)(m):u(m);if(!r.interrupt||m===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(m)}return n(m)}function c(m){return Ha(m)&&++s<10?(e.consume(m),c):(!r.interrupt||s<2)&&(r.containerState.marker?m===r.containerState.marker:m===41||m===46)?(e.exit("listItemValue"),u(m)):n(m)}function u(m){return e.enter("listItemMarker"),e.consume(m),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||m,e.check(Bl,r.interrupt?n:d,e.attempt(uj,f,p))}function d(m){return r.containerState.initialBlankLine=!0,l++,f(m)}function p(m){return ge(m)?(e.enter("listItemPrefixWhitespace"),e.consume(m),e.exit("listItemPrefixWhitespace"),f):n(m)}function f(m){return r.containerState.size=l+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(m)}}function fj(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Bl,i,l);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,ke(e,t,"listItemIndent",r.containerState.size+1)(a)}function l(a){return r.containerState.furtherBlankLines||!ge(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,s(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(dj,t,s)(a))}function s(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,ke(e,e.attempt(et,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function mj(e,t,n){const r=this;return ke(e,i,"listItemIndent",r.containerState.size+1);function i(l){const s=r.events[r.events.length-1];return s&&s[1].type==="listItemIndent"&&s[2].sliceSerialize(s[1],!0).length===r.containerState.size?t(l):n(l)}}function hj(e){e.exit(this.containerState.type)}function gj(e,t,n){const r=this;return ke(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(l){const s=r.events[r.events.length-1];return!ge(l)&&s&&s[1].type==="listItemPrefixWhitespace"?t(l):n(l)}}const kp={name:"setextUnderline",resolveTo:xj,tokenize:yj};function xj(e,t){let n=e.length,r,i,l;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!l&&e[n][1].type==="definition"&&(l=n);const s={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",l?(e.splice(i,0,["enter",s,t]),e.splice(l+1,0,["exit",e[r][1],t]),e[r][1].end={...e[l][1].end}):e[r][1]=s,e.push(["exit",s,t]),e}function yj(e,t,n){const r=this;let i;return l;function l(u){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),i=u,s(u)):n(u)}function s(u){return e.enter("setextHeadingLineSequence"),a(u)}function a(u){return u===i?(e.consume(u),a):(e.exit("setextHeadingLineSequence"),ge(u)?ke(e,c,"lineSuffix")(u):c(u))}function c(u){return u===null||le(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const vj={tokenize:bj};function bj(e){const t=this,n=e.attempt(Bl,r,e.attempt(this.parser.constructs.flowInitial,i,ke(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Sw,i)),"linePrefix")));return n;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEndingBlank"),e.consume(l),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const kj={resolveAll:Rg()},wj=Lg("string"),jj=Lg("text");function Lg(e){return{resolveAll:Rg(e==="text"?_j:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],l=n.attempt(i,s,a);return s;function s(d){return u(d)?l(d):a(d)}function a(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),c}function c(d){return u(d)?(n.exit("data"),l(d)):(n.consume(d),c)}function u(d){if(d===null)return!0;const p=i[d];let f=-1;if(p)for(;++f<p.length;){const m=p[f];if(!m.previous||m.previous.call(r,r.previous))return!0}return!1}}}function Rg(e){return t;function t(n,r){let i=-1,l;for(;++i<=n.length;)l===void 0?n[i]&&n[i][1].type==="data"&&(l=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==l+2&&(n[l][1].end=n[i-1][1].end,n.splice(l+2,i-l-2),i=l+2),l=void 0);return e?e(n,r):n}}function _j(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let l=i.length,s=-1,a=0,c;for(;l--;){const u=i[l];if(typeof u=="string"){for(s=u.length;u.charCodeAt(s-1)===32;)a++,s--;if(s)break;s=-1}else if(u===-2)c=!0,a++;else if(u!==-1){l++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(a=0),a){const u={type:n===e.length||c||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:l?s:r.start._bufferIndex+s,_index:r.start._index+l,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const Sj={42:et,43:et,45:et,48:et,49:et,50:et,51:et,52:et,53:et,54:et,55:et,56:et,57:et,62:Cg},Cj={91:Tw},Nj={[-2]:Ss,[-1]:Ss,32:Ss},Ej={35:Mw,42:Bo,45:[kp,Bo],60:Fw,61:kp,95:Bo,96:vp,126:vp},zj={38:Eg,92:Ng},Tj={[-5]:Cs,[-4]:Cs,[-3]:Cs,33:ij,38:Eg,42:qa,60:[lw,Kw],91:lj,92:[Rw,Ng],93:mu,95:qa,96:vw},Pj={null:[qa,kj]},Aj={null:[42,95]},Lj={null:[]},Rj=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Aj,contentInitial:Cj,disable:Lj,document:Sj,flow:Ej,flowInitial:Nj,insideSpan:Pj,string:zj,text:Tj},Symbol.toStringTag,{value:"Module"}));function Ij(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},l=[];let s=[],a=[];const c={attempt:_(j),check:_(y),consume:h,enter:x,exit:z,interrupt:_(y,{interrupt:!0})},u={code:null,containerState:{},defineSkip:w,events:[],now:k,parser:e,previous:null,sliceSerialize:f,sliceStream:m,write:p};let d=t.tokenize.call(u,c);return t.resolveAll&&l.push(t),u;function p(v){return s=St(s,v),P(),s[s.length-1]!==null?[]:(A(t,0),u.events=fu(l,u.events,u),u.events)}function f(v,E){return Oj(m(v),E)}function m(v){return Mj(s,v)}function k(){const{_bufferIndex:v,_index:E,line:I,column:q,offset:F}=r;return{_bufferIndex:v,_index:E,line:I,column:q,offset:F}}function w(v){i[v.line]=v.column,T()}function P(){let v;for(;r._index<s.length;){const E=s[r._index];if(typeof E=="string")for(v=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===v&&r._bufferIndex<E.length;)g(E.charCodeAt(r._bufferIndex));else g(E)}}function g(v){d=d(v)}function h(v){le(v)?(r.line++,r.column=1,r.offset+=v===-3?2:1,T()):v!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===s[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=v}function x(v,E){const I=E||{};return I.type=v,I.start=k(),u.events.push(["enter",I,u]),a.push(I),I}function z(v){const E=a.pop();return E.end=k(),u.events.push(["exit",E,u]),E}function j(v,E){A(v,E.from)}function y(v,E){E.restore()}function _(v,E){return I;function I(q,F,Q){let O,M,R,b;return Array.isArray(q)?Y(q):"tokenize"in q?Y([q]):U(q);function U(B){return L;function L(H){const X=H!==null&&B[H],ee=H!==null&&B.null,se=[...Array.isArray(X)?X:X?[X]:[],...Array.isArray(ee)?ee:ee?[ee]:[]];return Y(se)(H)}}function Y(B){return O=B,M=0,B.length===0?Q:N(B[M])}function N(B){return L;function L(H){return b=D(),R=B,B.partial||(u.currentConstruct=B),B.name&&u.parser.constructs.disable.null.includes(B.name)?C():B.tokenize.call(E?Object.assign(Object.create(u),E):u,c,ne,C)(H)}}function ne(B){return v(R,b),F}function C(B){return b.restore(),++M<O.length?N(O[M]):Q}}}function A(v,E){v.resolveAll&&!l.includes(v)&&l.push(v),v.resolve&&Gt(u.events,E,u.events.length-E,v.resolve(u.events.slice(E),u)),v.resolveTo&&(u.events=v.resolveTo(u.events,u))}function D(){const v=k(),E=u.previous,I=u.currentConstruct,q=u.events.length,F=Array.from(a);return{from:q,restore:Q};function Q(){r=v,u.previous=E,u.currentConstruct=I,u.events.length=q,a=F,T()}}function T(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function Mj(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,l=t.end._bufferIndex;let s;if(n===i)s=[e[n].slice(r,l)];else{if(s=e.slice(n,i),r>-1){const a=s[0];typeof a=="string"?s[0]=a.slice(r):s.shift()}l>0&&s.push(e[i].slice(0,l))}return s}function Oj(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const l=e[n];let s;if(typeof l=="string")s=l;else switch(l){case-5:{s="\r";break}case-4:{s=`
`;break}case-3:{s=`\r
`;break}case-2:{s=t?" ":"	";break}case-1:{if(!t&&i)continue;s=" ";break}default:s=String.fromCharCode(l)}i=l===-2,r.push(s)}return r.join("")}function $j(e){const r={constructs:Hk([Rj,...(e||{}).extensions||[]]),content:i(Zk),defined:[],document:i(tw),flow:i(vj),lazy:{},string:i(wj),text:i(jj)};return r;function i(l){return s;function s(a){return Ij(r,l,a)}}}function Dj(e){for(;!zg(e););return e}const wp=/[\0\t\n\r]/g;function Fj(){let e=1,t="",n=!0,r;return i;function i(l,s,a){const c=[];let u,d,p,f,m;for(l=t+(typeof l=="string"?l.toString():new TextDecoder(s||void 0).decode(l)),p=0,t="",n&&(l.charCodeAt(0)===65279&&p++,n=void 0);p<l.length;){if(wp.lastIndex=p,u=wp.exec(l),f=u&&u.index!==void 0?u.index:l.length,m=l.charCodeAt(f),!u){t=l.slice(p);break}if(m===10&&p===f&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),p<f&&(c.push(l.slice(p,f)),e+=f-p),m){case 0:{c.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,c.push(-2);e++<d;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}p=f+1}return a&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const Bj=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Uj(e){return e.replace(Bj,Vj)}function Vj(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),l=i===120||i===88;return Sg(n.slice(l?2:1),l?16:10)}return pu(n)||e}const Ig={}.hasOwnProperty;function Wj(e,t,n){return typeof t!="string"&&(n=t,t=void 0),Hj(n)(Dj($j(n).document().write(Fj()(e,t,!0))))}function Hj(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:l(Se),autolinkProtocol:D,autolinkEmail:D,atxHeading:l(Ve),blockQuote:l(ee),characterEscape:D,characterReference:D,codeFenced:l(se),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:l(se,s),codeText:l(pe,s),codeTextData:D,data:D,codeFlowValue:D,definition:l(Ze),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:l(bt),hardBreakEscape:l(Bt),hardBreakTrailing:l(Bt),htmlFlow:l(V,s),htmlFlowData:D,htmlText:l(V,s),htmlTextData:D,image:l(fe),label:s,link:l(Se),listItem:l(rr),listItemValue:f,listOrdered:l(at,p),listUnordered:l(at),paragraph:l(W),reference:N,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:l(Ve),strong:l(re),thematicBreak:l(ce)},exit:{atxHeading:c(),atxHeadingSequence:j,autolink:c(),autolinkEmail:X,autolinkProtocol:H,blockQuote:c(),characterEscapeValue:T,characterReferenceMarkerHexadecimal:C,characterReferenceMarkerNumeric:C,characterReferenceValue:B,characterReference:L,codeFenced:c(P),codeFencedFence:w,codeFencedFenceInfo:m,codeFencedFenceMeta:k,codeFlowValue:T,codeIndented:c(g),codeText:c(F),codeTextData:T,data:T,definition:c(),definitionDestinationString:z,definitionLabelString:h,definitionTitleString:x,emphasis:c(),hardBreakEscape:c(E),hardBreakTrailing:c(E),htmlFlow:c(I),htmlFlowData:T,htmlText:c(q),htmlTextData:T,image:c(O),label:R,labelText:M,lineEnding:v,link:c(Q),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:ne,resourceDestinationString:b,resourceTitleString:U,resource:Y,setextHeading:c(A),setextHeadingLineSequence:_,setextHeadingText:y,strong:c(),thematicBreak:c()}};Mg(t,(e||{}).mdastExtensions||[]);const n={};return r;function r($){let K={type:"root",children:[]};const ie={stack:[K],tokenStack:[],config:t,enter:a,exit:u,buffer:s,resume:d,data:n},ue=[];let he=-1;for(;++he<$.length;)if($[he][1].type==="listOrdered"||$[he][1].type==="listUnordered")if($[he][0]==="enter")ue.push(he);else{const Pt=ue.pop();he=i($,Pt,he)}for(he=-1;++he<$.length;){const Pt=t[$[he][0]];Ig.call(Pt,$[he][1].type)&&Pt[$[he][1].type].call(Object.assign({sliceSerialize:$[he][2].sliceSerialize},ie),$[he][1])}if(ie.tokenStack.length>0){const Pt=ie.tokenStack[ie.tokenStack.length-1];(Pt[1]||jp).call(ie,void 0,Pt[0])}for(K.position={start:dn($.length>0?$[0][1].start:{line:1,column:1,offset:0}),end:dn($.length>0?$[$.length-2][1].end:{line:1,column:1,offset:0})},he=-1;++he<t.transforms.length;)K=t.transforms[he](K)||K;return K}function i($,K,ie){let ue=K-1,he=-1,Pt=!1,$n,Jt,qr,Kr;for(;++ue<=ie;){const ct=$[ue];switch(ct[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{ct[0]==="enter"?he++:he--,Kr=void 0;break}case"lineEndingBlank":{ct[0]==="enter"&&($n&&!Kr&&!he&&!qr&&(qr=ue),Kr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Kr=void 0}if(!he&&ct[0]==="enter"&&ct[1].type==="listItemPrefix"||he===-1&&ct[0]==="exit"&&(ct[1].type==="listUnordered"||ct[1].type==="listOrdered")){if($n){let ir=ue;for(Jt=void 0;ir--;){const Yt=$[ir];if(Yt[1].type==="lineEnding"||Yt[1].type==="lineEndingBlank"){if(Yt[0]==="exit")continue;Jt&&($[Jt][1].type="lineEndingBlank",Pt=!0),Yt[1].type="lineEnding",Jt=ir}else if(!(Yt[1].type==="linePrefix"||Yt[1].type==="blockQuotePrefix"||Yt[1].type==="blockQuotePrefixWhitespace"||Yt[1].type==="blockQuoteMarker"||Yt[1].type==="listItemIndent"))break}qr&&(!Jt||qr<Jt)&&($n._spread=!0),$n.end=Object.assign({},Jt?$[Jt][1].start:ct[1].end),$.splice(Jt||ue,0,["exit",$n,ct[2]]),ue++,ie++}if(ct[1].type==="listItemPrefix"){const ir={type:"listItem",_spread:!1,start:Object.assign({},ct[1].start),end:void 0};$n=ir,$.splice(ue,0,["enter",ir,ct[2]]),ue++,ie++,qr=void 0,Kr=!0}}}return $[K][1]._spread=Pt,ie}function l($,K){return ie;function ie(ue){a.call(this,$(ue),ue),K&&K.call(this,ue)}}function s(){this.stack.push({type:"fragment",children:[]})}function a($,K,ie){this.stack[this.stack.length-1].children.push($),this.stack.push($),this.tokenStack.push([K,ie||void 0]),$.position={start:dn(K.start),end:void 0}}function c($){return K;function K(ie){$&&$.call(this,ie),u.call(this,ie)}}function u($,K){const ie=this.stack.pop(),ue=this.tokenStack.pop();if(ue)ue[0].type!==$.type&&(K?K.call(this,$,ue[0]):(ue[1]||jp).call(this,$,ue[0]));else throw new Error("Cannot close `"+$.type+"` ("+wi({start:$.start,end:$.end})+"): it’s not open");ie.position.end=dn($.end)}function d(){return Vk(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function f($){if(this.data.expectingFirstListItemValue){const K=this.stack[this.stack.length-2];K.start=Number.parseInt(this.sliceSerialize($),10),this.data.expectingFirstListItemValue=void 0}}function m(){const $=this.resume(),K=this.stack[this.stack.length-1];K.lang=$}function k(){const $=this.resume(),K=this.stack[this.stack.length-1];K.meta=$}function w(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function P(){const $=this.resume(),K=this.stack[this.stack.length-1];K.value=$.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function g(){const $=this.resume(),K=this.stack[this.stack.length-1];K.value=$.replace(/(\r?\n|\r)$/g,"")}function h($){const K=this.resume(),ie=this.stack[this.stack.length-1];ie.label=K,ie.identifier=zr(this.sliceSerialize($)).toLowerCase()}function x(){const $=this.resume(),K=this.stack[this.stack.length-1];K.title=$}function z(){const $=this.resume(),K=this.stack[this.stack.length-1];K.url=$}function j($){const K=this.stack[this.stack.length-1];if(!K.depth){const ie=this.sliceSerialize($).length;K.depth=ie}}function y(){this.data.setextHeadingSlurpLineEnding=!0}function _($){const K=this.stack[this.stack.length-1];K.depth=this.sliceSerialize($).codePointAt(0)===61?1:2}function A(){this.data.setextHeadingSlurpLineEnding=void 0}function D($){const ie=this.stack[this.stack.length-1].children;let ue=ie[ie.length-1];(!ue||ue.type!=="text")&&(ue=oe(),ue.position={start:dn($.start),end:void 0},ie.push(ue)),this.stack.push(ue)}function T($){const K=this.stack.pop();K.value+=this.sliceSerialize($),K.position.end=dn($.end)}function v($){const K=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ie=K.children[K.children.length-1];ie.position.end=dn($.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(K.type)&&(D.call(this,$),T.call(this,$))}function E(){this.data.atHardBreak=!0}function I(){const $=this.resume(),K=this.stack[this.stack.length-1];K.value=$}function q(){const $=this.resume(),K=this.stack[this.stack.length-1];K.value=$}function F(){const $=this.resume(),K=this.stack[this.stack.length-1];K.value=$}function Q(){const $=this.stack[this.stack.length-1];if(this.data.inReference){const K=this.data.referenceType||"shortcut";$.type+="Reference",$.referenceType=K,delete $.url,delete $.title}else delete $.identifier,delete $.label;this.data.referenceType=void 0}function O(){const $=this.stack[this.stack.length-1];if(this.data.inReference){const K=this.data.referenceType||"shortcut";$.type+="Reference",$.referenceType=K,delete $.url,delete $.title}else delete $.identifier,delete $.label;this.data.referenceType=void 0}function M($){const K=this.sliceSerialize($),ie=this.stack[this.stack.length-2];ie.label=Uj(K),ie.identifier=zr(K).toLowerCase()}function R(){const $=this.stack[this.stack.length-1],K=this.resume(),ie=this.stack[this.stack.length-1];if(this.data.inReference=!0,ie.type==="link"){const ue=$.children;ie.children=ue}else ie.alt=K}function b(){const $=this.resume(),K=this.stack[this.stack.length-1];K.url=$}function U(){const $=this.resume(),K=this.stack[this.stack.length-1];K.title=$}function Y(){this.data.inReference=void 0}function N(){this.data.referenceType="collapsed"}function ne($){const K=this.resume(),ie=this.stack[this.stack.length-1];ie.label=K,ie.identifier=zr(this.sliceSerialize($)).toLowerCase(),this.data.referenceType="full"}function C($){this.data.characterReferenceType=$.type}function B($){const K=this.sliceSerialize($),ie=this.data.characterReferenceType;let ue;ie?(ue=Sg(K,ie==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):ue=pu(K);const he=this.stack[this.stack.length-1];he.value+=ue}function L($){const K=this.stack.pop();K.position.end=dn($.end)}function H($){T.call(this,$);const K=this.stack[this.stack.length-1];K.url=this.sliceSerialize($)}function X($){T.call(this,$);const K=this.stack[this.stack.length-1];K.url="mailto:"+this.sliceSerialize($)}function ee(){return{type:"blockquote",children:[]}}function se(){return{type:"code",lang:null,meta:null,value:""}}function pe(){return{type:"inlineCode",value:""}}function Ze(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function bt(){return{type:"emphasis",children:[]}}function Ve(){return{type:"heading",depth:0,children:[]}}function Bt(){return{type:"break"}}function V(){return{type:"html",value:""}}function fe(){return{type:"image",title:null,url:"",alt:null}}function Se(){return{type:"link",title:null,url:"",children:[]}}function at($){return{type:"list",ordered:$.type==="listOrdered",start:null,spread:$._spread,children:[]}}function rr($){return{type:"listItem",spread:$._spread,checked:null,children:[]}}function W(){return{type:"paragraph",children:[]}}function re(){return{type:"strong",children:[]}}function oe(){return{type:"text",value:""}}function ce(){return{type:"thematicBreak"}}}function dn(e){return{line:e.line,column:e.column,offset:e.offset}}function Mg(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?Mg(e,r):qj(e,r)}}function qj(e,t){let n;for(n in t)if(Ig.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function jp(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+wi({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+wi({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+wi({start:t.start,end:t.end})+") is still open")}function Kj(e){const t=this;t.parser=n;function n(r){return Wj(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function Qj(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function Gj(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function Jj(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let l={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(l.data={meta:t.meta}),e.patch(t,l),l=e.applyData(t,l),l={type:"element",tagName:"pre",properties:{},children:[l]},e.patch(t,l),l}function Yj(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Xj(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Zj(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Hr(r.toLowerCase()),l=e.footnoteOrder.indexOf(r);let s,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),s=e.footnoteOrder.length):s=l+1,a+=1,e.footnoteCounts.set(r,a);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(s)}]};e.patch(t,c);const u={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,u),e.applyData(t,u)}function e2(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function t2(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Og(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),l=i[0];l&&l.type==="text"?l.value="["+l.value:i.unshift({type:"text",value:"["});const s=i[i.length-1];return s&&s.type==="text"?s.value+=r:i.push({type:"text",value:r}),i}function n2(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Og(e,t);const i={src:Hr(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const l={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,l),e.applyData(t,l)}function r2(e,t){const n={src:Hr(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function i2(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function o2(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Og(e,t);const i={href:Hr(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const l={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,l),e.applyData(t,l)}function l2(e,t){const n={href:Hr(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function s2(e,t,n){const r=e.all(t),i=n?a2(n):$g(t),l={},s=[];if(typeof t.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),l.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const d=r[a];(i||a!==0||d.type!=="element"||d.tagName!=="p")&&s.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?s.push(...d.children):s.push(d)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&s.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:l,children:s};return e.patch(t,u),e.applyData(t,u)}function a2(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=$g(n[r])}return t}function $g(e){const t=e.spread;return t??e.children.length>1}function c2(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const s=r[i];if(s.type==="element"&&s.tagName==="li"&&s.properties&&Array.isArray(s.properties.className)&&s.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const l={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,l),e.applyData(t,l)}function u2(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function d2(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function p2(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function f2(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const s={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],s),i.push(s)}if(n.length>0){const s={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=au(t.children[1]),c=yg(t.children[t.children.length-1]);a&&c&&(s.position={start:a,end:c}),i.push(s)}const l={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,l),e.applyData(t,l)}function m2(e,t,n){const r=n?n.children:void 0,l=(r?r.indexOf(t):1)===0?"th":"td",s=n&&n.type==="table"?n.align:void 0,a=s?s.length:t.children.length;let c=-1;const u=[];for(;++c<a;){const p=t.children[c],f={},m=s?s[c]:void 0;m&&(f.align=m);let k={type:"element",tagName:l,properties:f,children:[]};p&&(k.children=e.all(p),e.patch(p,k),k=e.applyData(p,k)),u.push(k)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function h2(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const _p=9,Sp=32;function g2(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const l=[];for(;r;)l.push(Cp(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return l.push(Cp(t.slice(i),i>0,!1)),l.join("")}function Cp(e,t,n){let r=0,i=e.length;if(t){let l=e.codePointAt(r);for(;l===_p||l===Sp;)r++,l=e.codePointAt(r)}if(n){let l=e.codePointAt(i-1);for(;l===_p||l===Sp;)i--,l=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function x2(e,t){const n={type:"text",value:g2(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function y2(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const v2={blockquote:Qj,break:Gj,code:Jj,delete:Yj,emphasis:Xj,footnoteReference:Zj,heading:e2,html:t2,imageReference:n2,image:r2,inlineCode:i2,linkReference:o2,link:l2,listItem:s2,list:c2,paragraph:u2,root:d2,strong:p2,table:f2,tableCell:h2,tableRow:m2,text:x2,thematicBreak:y2,toml:So,yaml:So,definition:So,footnoteDefinition:So};function So(){}const Dg=-1,Ul=0,_i=1,xl=2,hu=3,gu=4,xu=5,yu=6,Fg=7,Bg=8,Np=typeof self=="object"?self:globalThis,b2=(e,t)=>{const n=(i,l)=>(e.set(l,i),i),r=i=>{if(e.has(i))return e.get(i);const[l,s]=t[i];switch(l){case Ul:case Dg:return n(s,i);case _i:{const a=n([],i);for(const c of s)a.push(r(c));return a}case xl:{const a=n({},i);for(const[c,u]of s)a[r(c)]=r(u);return a}case hu:return n(new Date(s),i);case gu:{const{source:a,flags:c}=s;return n(new RegExp(a,c),i)}case xu:{const a=n(new Map,i);for(const[c,u]of s)a.set(r(c),r(u));return a}case yu:{const a=n(new Set,i);for(const c of s)a.add(r(c));return a}case Fg:{const{name:a,message:c}=s;return n(new Np[a](c),i)}case Bg:return n(BigInt(s),i);case"BigInt":return n(Object(BigInt(s)),i);case"ArrayBuffer":return n(new Uint8Array(s).buffer,s);case"DataView":{const{buffer:a}=new Uint8Array(s);return n(new DataView(a),s)}}return n(new Np[l](s),i)};return r},Ep=e=>b2(new Map,e)(0),sr="",{toString:k2}={},{keys:w2}=Object,ri=e=>{const t=typeof e;if(t!=="object"||!e)return[Ul,t];const n=k2.call(e).slice(8,-1);switch(n){case"Array":return[_i,sr];case"Object":return[xl,sr];case"Date":return[hu,sr];case"RegExp":return[gu,sr];case"Map":return[xu,sr];case"Set":return[yu,sr];case"DataView":return[_i,n]}return n.includes("Array")?[_i,n]:n.includes("Error")?[Fg,n]:[xl,n]},Co=([e,t])=>e===Ul&&(t==="function"||t==="symbol"),j2=(e,t,n,r)=>{const i=(s,a)=>{const c=r.push(s)-1;return n.set(a,c),c},l=s=>{if(n.has(s))return n.get(s);let[a,c]=ri(s);switch(a){case Ul:{let d=s;switch(c){case"bigint":a=Bg,d=s.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);d=null;break;case"undefined":return i([Dg],s)}return i([a,d],s)}case _i:{if(c){let f=s;return c==="DataView"?f=new Uint8Array(s.buffer):c==="ArrayBuffer"&&(f=new Uint8Array(s)),i([c,[...f]],s)}const d=[],p=i([a,d],s);for(const f of s)d.push(l(f));return p}case xl:{if(c)switch(c){case"BigInt":return i([c,s.toString()],s);case"Boolean":case"Number":case"String":return i([c,s.valueOf()],s)}if(t&&"toJSON"in s)return l(s.toJSON());const d=[],p=i([a,d],s);for(const f of w2(s))(e||!Co(ri(s[f])))&&d.push([l(f),l(s[f])]);return p}case hu:return i([a,s.toISOString()],s);case gu:{const{source:d,flags:p}=s;return i([a,{source:d,flags:p}],s)}case xu:{const d=[],p=i([a,d],s);for(const[f,m]of s)(e||!(Co(ri(f))||Co(ri(m))))&&d.push([l(f),l(m)]);return p}case yu:{const d=[],p=i([a,d],s);for(const f of s)(e||!Co(ri(f)))&&d.push(l(f));return p}}const{message:u}=s;return i([a,{name:c,message:u}],s)};return l},zp=(e,{json:t,lossy:n}={})=>{const r=[];return j2(!(t||n),!!t,new Map,r)(e),r},yl=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Ep(zp(e,t)):structuredClone(e):(e,t)=>Ep(zp(e,t));function _2(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function S2(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function C2(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||_2,r=e.options.footnoteBackLabel||S2,i=e.options.footnoteLabel||"Footnotes",l=e.options.footnoteLabelTagName||"h2",s=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let c=-1;for(;++c<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[c]);if(!u)continue;const d=e.all(u),p=String(u.identifier).toUpperCase(),f=Hr(p.toLowerCase());let m=0;const k=[],w=e.footnoteCounts.get(p);for(;w!==void 0&&++m<=w;){k.length>0&&k.push({type:"text",value:" "});let h=typeof n=="string"?n:n(c,m);typeof h=="string"&&(h={type:"text",value:h}),k.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(m>1?"-"+m:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,m),className:["data-footnote-backref"]},children:Array.isArray(h)?h:[h]})}const P=d[d.length-1];if(P&&P.type==="element"&&P.tagName==="p"){const h=P.children[P.children.length-1];h&&h.type==="text"?h.value+=" ":P.children.push({type:"text",value:" "}),P.children.push(...k)}else d.push(...k);const g={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(u,g),a.push(g)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:l,properties:{...yl(s),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const Ug=function(e){if(e==null)return T2;if(typeof e=="function")return Vl(e);if(typeof e=="object")return Array.isArray(e)?N2(e):E2(e);if(typeof e=="string")return z2(e);throw new Error("Expected function, string, or object as test")};function N2(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Ug(e[n]);return Vl(r);function r(...i){let l=-1;for(;++l<t.length;)if(t[l].apply(this,i))return!0;return!1}}function E2(e){const t=e;return Vl(n);function n(r){const i=r;let l;for(l in e)if(i[l]!==t[l])return!1;return!0}}function z2(e){return Vl(t);function t(n){return n&&n.type===e}}function Vl(e){return t;function t(n,r,i){return!!(P2(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function T2(){return!0}function P2(e){return e!==null&&typeof e=="object"&&"type"in e}const Vg=[],A2=!0,Tp=!1,L2="skip";function R2(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const l=Ug(i),s=r?-1:1;a(e,void 0,[])();function a(c,u,d){const p=c&&typeof c=="object"?c:{};if(typeof p.type=="string"){const m=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(c.type+(m?"<"+m+">":""))+")"})}return f;function f(){let m=Vg,k,w,P;if((!t||l(c,u,d[d.length-1]||void 0))&&(m=I2(n(c,d)),m[0]===Tp))return m;if("children"in c&&c.children){const g=c;if(g.children&&m[0]!==L2)for(w=(r?g.children.length:-1)+s,P=d.concat(g);w>-1&&w<g.children.length;){const h=g.children[w];if(k=a(h,w,P)(),k[0]===Tp)return k;w=typeof k[1]=="number"?k[1]:w+s}}return m}}}function I2(e){return Array.isArray(e)?e:typeof e=="number"?[A2,e]:e==null?Vg:[e]}function Wg(e,t,n,r){let i,l,s;typeof t=="function"&&typeof n!="function"?(l=void 0,s=t,i=n):(l=t,s=n,i=r),R2(e,l,a,i);function a(c,u){const d=u[u.length-1],p=d?d.children.indexOf(c):void 0;return s(c,p,d)}}const Ka={}.hasOwnProperty,M2={};function O2(e,t){const n=t||M2,r=new Map,i=new Map,l=new Map,s={...v2,...n.handlers},a={all:u,applyData:D2,definitionById:r,footnoteById:i,footnoteCounts:l,footnoteOrder:[],handlers:s,one:c,options:n,patch:$2,wrap:B2};return Wg(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:i,f=String(d.identifier).toUpperCase();p.has(f)||p.set(f,d)}}),a;function c(d,p){const f=d.type,m=a.handlers[f];if(Ka.call(a.handlers,f)&&m)return m(a,d,p);if(a.options.passThrough&&a.options.passThrough.includes(f)){if("children"in d){const{children:w,...P}=d,g=yl(P);return g.children=a.all(d),g}return yl(d)}return(a.options.unknownHandler||F2)(a,d,p)}function u(d){const p=[];if("children"in d){const f=d.children;let m=-1;for(;++m<f.length;){const k=a.one(f[m],d);if(k){if(m&&f[m-1].type==="break"&&(!Array.isArray(k)&&k.type==="text"&&(k.value=Pp(k.value)),!Array.isArray(k)&&k.type==="element")){const w=k.children[0];w&&w.type==="text"&&(w.value=Pp(w.value))}Array.isArray(k)?p.push(...k):p.push(k)}}}return p}}function $2(e,t){e.position&&(t.position=kk(e))}function D2(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,l=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const s="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:s}}n.type==="element"&&l&&Object.assign(n.properties,yl(l)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function F2(e,t){const n=t.data||{},r="value"in t&&!(Ka.call(n,"hProperties")||Ka.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function B2(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Pp(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Ap(e,t){const n=O2(e,t),r=n.one(e,void 0),i=C2(n),l=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&l.children.push({type:"text",value:`
`},i),l}function U2(e,t){return e&&"run"in e?async function(n,r){const i=Ap(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Ap(n,{file:r,...e||t})}}function Lp(e){if(e)throw e}var Uo=Object.prototype.hasOwnProperty,Hg=Object.prototype.toString,Rp=Object.defineProperty,Ip=Object.getOwnPropertyDescriptor,Mp=function(t){return typeof Array.isArray=="function"?Array.isArray(t):Hg.call(t)==="[object Array]"},Op=function(t){if(!t||Hg.call(t)!=="[object Object]")return!1;var n=Uo.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Uo.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||Uo.call(t,i)},$p=function(t,n){Rp&&n.name==="__proto__"?Rp(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Dp=function(t,n){if(n==="__proto__")if(Uo.call(t,n)){if(Ip)return Ip(t,n).value}else return;return t[n]},V2=function e(){var t,n,r,i,l,s,a=arguments[0],c=1,u=arguments.length,d=!1;for(typeof a=="boolean"&&(d=a,a=arguments[1]||{},c=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});c<u;++c)if(t=arguments[c],t!=null)for(n in t)r=Dp(a,n),i=Dp(t,n),a!==i&&(d&&i&&(Op(i)||(l=Mp(i)))?(l?(l=!1,s=r&&Mp(r)?r:[]):s=r&&Op(r)?r:{},$p(a,{name:n,newValue:e(d,s,i)})):typeof i<"u"&&$p(a,{name:n,newValue:i}));return a};const Ns=bl(V2);function Qa(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function W2(){const e=[],t={run:n,use:r};return t;function n(...i){let l=-1;const s=i.pop();if(typeof s!="function")throw new TypeError("Expected function as last argument, not "+s);a(null,...i);function a(c,...u){const d=e[++l];let p=-1;if(c){s(c);return}for(;++p<i.length;)(u[p]===null||u[p]===void 0)&&(u[p]=i[p]);i=u,d?H2(d,a)(...u):s(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function H2(e,t){let n;return r;function r(...s){const a=e.length>s.length;let c;a&&s.push(i);try{c=e.apply(this,s)}catch(u){const d=u;if(a&&n)throw d;return i(d)}a||(c&&c.then&&typeof c.then=="function"?c.then(l,i):c instanceof Error?i(c):l(c))}function i(s,...a){n||(n=!0,t(s,...a))}function l(s){i(null,s)}}const Wt={basename:q2,dirname:K2,extname:Q2,join:G2,sep:"/"};function q2(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');io(e);let n=0,r=-1,i=e.length,l;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(l){n=i+1;break}}else r<0&&(l=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let s=-1,a=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(l){n=i+1;break}}else s<0&&(l=!0,s=i+1),a>-1&&(e.codePointAt(i)===t.codePointAt(a--)?a<0&&(r=i):(a=-1,r=s));return n===r?r=s:r<0&&(r=e.length),e.slice(n,r)}function K2(e){if(io(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function Q2(e){io(e);let t=e.length,n=-1,r=0,i=-1,l=0,s;for(;t--;){const a=e.codePointAt(t);if(a===47){if(s){r=t+1;break}continue}n<0&&(s=!0,n=t+1),a===46?i<0?i=t:l!==1&&(l=1):i>-1&&(l=-1)}return i<0||n<0||l===0||l===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function G2(...e){let t=-1,n;for(;++t<e.length;)io(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":J2(n)}function J2(e){io(e);const t=e.codePointAt(0)===47;let n=Y2(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function Y2(e,t){let n="",r=0,i=-1,l=0,s=-1,a,c;for(;++s<=e.length;){if(s<e.length)a=e.codePointAt(s);else{if(a===47)break;a=47}if(a===47){if(!(i===s-1||l===1))if(i!==s-1&&l===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),i=s,l=0;continue}}else if(n.length>0){n="",r=0,i=s,l=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,s):n=e.slice(i+1,s),r=s-i-1;i=s,l=0}else a===46&&l>-1?l++:l=-1}return n}function io(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const X2={cwd:Z2};function Z2(){return"/"}function Ga(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function e_(e){if(typeof e=="string")e=new URL(e);else if(!Ga(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return t_(e)}function t_(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const Es=["history","path","basename","stem","extname","dirname"];class qg{constructor(t){let n;t?Ga(t)?n={path:t}:typeof t=="string"||n_(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":X2.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Es.length;){const l=Es[r];l in n&&n[l]!==void 0&&n[l]!==null&&(this[l]=l==="history"?[...n[l]]:n[l])}let i;for(i in n)Es.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?Wt.basename(this.path):void 0}set basename(t){Ts(t,"basename"),zs(t,"basename"),this.path=Wt.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?Wt.dirname(this.path):void 0}set dirname(t){Fp(this.basename,"dirname"),this.path=Wt.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?Wt.extname(this.path):void 0}set extname(t){if(zs(t,"extname"),Fp(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Wt.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Ga(t)&&(t=e_(t)),Ts(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?Wt.basename(this.path,this.extname):void 0}set stem(t){Ts(t,"stem"),zs(t,"stem"),this.path=Wt.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new Qe(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function zs(e,t){if(e&&e.includes(Wt.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Wt.sep+"`")}function Ts(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Fp(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function n_(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const r_=function(e){const r=this.constructor.prototype,i=r[e],l=function(){return i.apply(l,arguments)};return Object.setPrototypeOf(l,r),l},i_={}.hasOwnProperty;class vu extends r_{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=W2()}copy(){const t=new vu;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Ns(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Ls("data",this.frozen),this.namespace[t]=n,this):i_.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Ls("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=No(t),r=this.parser||this.Parser;return Ps("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Ps("process",this.parser||this.Parser),As("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(l,s){const a=No(t),c=r.parse(a);r.run(c,a,function(d,p,f){if(d||!p||!f)return u(d);const m=p,k=r.stringify(m,f);s_(k)?f.value=k:f.result=k,u(d,f)});function u(d,p){d||!p?s(d):l?l(p):n(void 0,p)}}}processSync(t){let n=!1,r;return this.freeze(),Ps("processSync",this.parser||this.Parser),As("processSync",this.compiler||this.Compiler),this.process(t,i),Up("processSync","process",n),r;function i(l,s){n=!0,Lp(l),r=s}}run(t,n,r){Bp(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?l(void 0,r):new Promise(l);function l(s,a){const c=No(n);i.run(t,c,u);function u(d,p,f){const m=p||t;d?a(d):s?s(m):r(void 0,m,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,l),Up("runSync","run",r),i;function l(s,a){Lp(s),i=a,r=!0}}stringify(t,n){this.freeze();const r=No(n),i=this.compiler||this.Compiler;return As("stringify",i),Bp(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(Ls("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):s(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function l(u){if(typeof u=="function")c(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...p]=u;c(d,p)}else s(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function s(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(u.plugins),u.settings&&(i.settings=Ns(!0,i.settings,u.settings))}function a(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const p=u[d];l(p)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function c(u,d){let p=-1,f=-1;for(;++p<r.length;)if(r[p][0]===u){f=p;break}if(f===-1)r.push([u,...d]);else if(d.length>0){let[m,...k]=d;const w=r[f][1];Qa(w)&&Qa(m)&&(m=Ns(!0,w,m)),r[f]=[u,m,...k]}}}}const o_=new vu().freeze();function Ps(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function As(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Ls(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Bp(e){if(!Qa(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Up(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function No(e){return l_(e)?e:new qg(e)}function l_(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function s_(e){return typeof e=="string"||a_(e)}function a_(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const c_="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Vp=[],Wp={allowDangerousHtml:!0},u_=/^(https?|ircs?|mailto|xmpp)$/i,d_=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Kg(e){const t=p_(e),n=f_(e);return m_(t.runSync(t.parse(n),n),e)}function p_(e){const t=e.rehypePlugins||Vp,n=e.remarkPlugins||Vp,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Wp}:Wp;return o_().use(Kj).use(n).use(U2,r).use(t)}function f_(e){const t=e.children||"",n=new qg;return typeof t=="string"&&(n.value=t),n}function m_(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,l=t.disallowedElements,s=t.skipHtml,a=t.unwrapDisallowed,c=t.urlTransform||h_;for(const d of d_)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+c_+d.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),Wg(e,u),Ck(e,{Fragment:o.Fragment,components:i,ignoreInvalidStyle:!0,jsx:o.jsx,jsxs:o.jsxs,passKeys:!0,passNode:!0});function u(d,p,f){if(d.type==="raw"&&f&&typeof p=="number")return s?f.children.splice(p,1):f.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let m;for(m in _s)if(Object.hasOwn(_s,m)&&Object.hasOwn(d.properties,m)){const k=d.properties[m],w=_s[m];(w===null||w.includes(d.tagName))&&(d.properties[m]=c(String(k||""),m,d))}}if(d.type==="element"){let m=n?!n.includes(d.tagName):l?l.includes(d.tagName):!1;if(!m&&r&&typeof p=="number"&&(m=!r(d,p,f)),m&&f&&typeof p=="number")return a&&d.children?f.children.splice(p,1,...d.children):f.children.splice(p,1),p}}}function h_(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||u_.test(e.slice(0,t))?e:""}function g_({value:e,onChange:t,placeholder:n="Write your content here...",minHeight:r=200}){const[i,l]=S.useState(!1),[s,a]=S.useState(r),c=S.useRef(null),u=S.useRef(null);S.useEffect(()=>{if(e){const f=e.split(`
`).length,m=Math.max(r,Math.min(f*20+40,500));a(m)}},[e,r]),S.useEffect(()=>{i&&u.current&&u.current.focus()},[i]);function d(f){u.current=f,f.focus()}function p(f){c.current&&!c.current.contains(f.target)&&l(!1)}return S.useEffect(()=>{if(i)return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[i]),o.jsxs("div",{ref:c,className:"markdown-editor",children:[o.jsx("style",{children:`
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
          height: ${s}px;
        }
      `}),i?o.jsx("div",{className:"monaco-wrapper",children:o.jsx(Dr,{height:"100%",language:"markdown",theme:"vs-dark",value:e,onChange:f=>t(f||""),onMount:d,options:{minimap:{enabled:!1},fontSize:14,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"off",scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",padding:{top:12,bottom:12},lineDecorationsWidth:8,folding:!1,glyphMargin:!1,renderLineHighlight:"none",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,scrollbar:{vertical:"auto",horizontal:"hidden"}}})}):o.jsxs("div",{className:"markdown-preview",onClick:()=>l(!0),children:[o.jsxs("span",{className:"edit-hint",children:[o.jsx(a0,{size:12}),"Click to edit"]}),e?o.jsx("div",{className:"markdown-content",children:o.jsx(Kg,{children:e})}):o.jsx("div",{className:"markdown-placeholder",children:n})]})]})}function x_(e){return/^[a-zA-Z0-9_]+$/.test(e)}function y_({agent:e}){const{project:t,updateAgent:n,mcpServers:r,builtinTools:i,setActiveTab:l,setRunAgentId:s}=vt(),[a,c]=S.useState(new Set(["basic","model","tools","subagents"])),[u,d]=S.useState(!1),[p,f]=S.useState(!1),[m,k]=S.useState(!1),[w,P]=S.useState(""),[g,h]=S.useState(null);if(!t)return null;function x(O){n(e.id,O)}function z(O){if(O===""){h(null),x({name:O});return}x_(O)?h(null):h("Name can only contain letters, numbers, and underscores"),x({name:O})}function j(O){const M=new Set(a);M.has(O)?M.delete(O):M.add(O),c(M)}const y=e.type==="LlmAgent",_=e;function A(O){y&&x({tools:[..._.tools,O]})}function D(O){y&&x({tools:_.tools.filter((M,R)=>R!==O)})}function T(O,M){if(!y)return;const R=[..._.tools];R[O]=M,x({tools:R})}function v(O){"sub_agents"in e&&x({sub_agents:[...e.sub_agents,O]})}function E(O){"sub_agents"in e&&x({sub_agents:e.sub_agents.filter(M=>M!==O)})}const I=t.agents.filter(O=>O.id!==e.id);async function q(){if(!(!t||!y)){d(!0);try{const O=_.instruction||"",M=O?`Current instruction to improve:

${O}

Please improve and expand this instruction while preserving its core intent.`:void 0,b=t.agents.some(Y=>Y.id===e.id)?void 0:e,U=await Fo(t.id,e.id,M,b);U.success&&U.prompt?x({instruction:U.prompt}):alert("Failed to generate prompt: "+(U.error||"Unknown error"))}catch(O){alert("Error generating prompt: "+O.message)}finally{d(!1)}}}async function F(){if(!(!t||!y||!w.trim())){d(!0);try{const M=`Current instruction:

${_.instruction||""}

---

Requested changes:
${w}

Please apply the requested changes to the instruction above. Output only the updated instruction, nothing else.`,b=t.agents.some(Y=>Y.id===e.id)?void 0:e,U=await Fo(t.id,e.id,M,b);U.success&&U.prompt?(x({instruction:U.prompt}),k(!1),P("")):alert("Failed to apply changes: "+(U.error||"Unknown error"))}catch(O){alert("Error applying changes: "+O.message)}finally{d(!1)}}}async function Q(){if(!t||!y)return;const O=_.instruction;if(!O){alert("Please write an instruction first");return}f(!0);try{const M=`Write a 5-10 word description of what this agent does.

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
${O.slice(0,500)}

Your response (5-10 words only):`,R=await Fo(t.id,e.id,M);if(R.success&&R.prompt){let b=R.prompt.trim();b=b.replace(/^["']|["']$/g,"").trim();const U=b.split(/[.!?\n]/)[0].trim(),Y=U.length>80?U.slice(0,77)+"...":U;x({description:Y})}else alert("Failed to generate description: "+(R.error||"Unknown error"))}catch(M){alert("Error generating description: "+M.message)}finally{f(!1)}}return o.jsxs("div",{className:"agent-editor",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"editor-header",children:[o.jsx(Qn,{size:24,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o.jsx("input",{type:"text",value:e.name,onChange:O=>z(O.target.value),placeholder:"Agent name",style:{borderColor:g?"var(--error)":void 0}}),g&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:g})]}),o.jsx("span",{className:"badge badge-info",children:e.type}),o.jsxs("button",{className:"btn btn-primary btn-sm run-agent-btn",onClick:()=>{s(e.id),l("run")},title:"Test this agent",children:[o.jsx(En,{size:14}),"Run"]})]}),o.jsxs("div",{className:"editor-content",children:[o.jsxs(ii,{id:"basic",title:"Basic Info",icon:o.jsx(Qn,{size:16}),expanded:a.has("basic"),onToggle:()=>j("basic"),children:[o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group full-width",children:[o.jsxs("div",{className:"label-with-action",children:[o.jsx("label",{children:"Description"}),y&&_.instruction&&o.jsx("button",{className:"btn btn-secondary btn-sm generate-btn",onClick:Q,disabled:p,title:"Generate description from instruction",children:p?o.jsxs(o.Fragment,{children:[o.jsx($r,{size:14,className:"spin"}),"Summarizing..."]}):"Summarize"})]}),o.jsx("input",{type:"text",value:e.description,onChange:O=>x({description:O.target.value}),placeholder:"e.g., Reviews code for bugs and suggests fixes"})]})}),y&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group full-width",children:[o.jsxs("div",{className:"label-with-action",children:[o.jsx("label",{children:"Instruction"}),o.jsxs("div",{className:"action-buttons",children:[o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>k(!m),disabled:u||!_.instruction,title:"Request specific changes to the instruction",children:"Request Changes"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:q,disabled:u,title:"Uses AI to improve and expand the current instruction",children:u?o.jsxs(o.Fragment,{children:[o.jsx($r,{size:14,className:"spin"}),"Working..."]}):"Auto-Improve"})]})]}),m&&o.jsxs("div",{className:"request-changes-box",children:[o.jsx("input",{type:"text",value:w,onChange:O=>P(O.target.value),placeholder:"Describe what changes you want...",onKeyDown:O=>{O.key==="Enter"&&w.trim()?F():O.key==="Escape"&&(k(!1),P(""))},autoFocus:!0}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:F,disabled:u||!w.trim(),children:"Apply"})]}),o.jsx(g_,{value:_.instruction,onChange:O=>x({instruction:O}),placeholder:"Write your agent's instruction here... (Markdown supported)",minHeight:200})]})}),o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Output Key"}),o.jsxs("select",{value:_.output_key||"",onChange:O=>x({output_key:O.target.value||void 0}),children:[o.jsx("option",{value:"",children:"None"}),t.app.state_keys.map(O=>o.jsx("option",{value:O.name,children:O.name},O.name))]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Include Contents"}),o.jsxs("select",{value:_.include_contents,onChange:O=>x({include_contents:O.target.value}),children:[o.jsx("option",{value:"default",children:"Default"}),o.jsx("option",{value:"none",children:"None"})]})]})]}),o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"checkbox-group",children:[o.jsx("input",{type:"checkbox",id:"disallow-parent",checked:_.disallow_transfer_to_parent,onChange:O=>x({disallow_transfer_to_parent:O.target.checked})}),o.jsx("label",{htmlFor:"disallow-parent",children:"Disallow transfer to parent"})]}),o.jsxs("div",{className:"checkbox-group",children:[o.jsx("input",{type:"checkbox",id:"disallow-peers",checked:_.disallow_transfer_to_peers,onChange:O=>x({disallow_transfer_to_peers:O.target.checked})}),o.jsx("label",{htmlFor:"disallow-peers",children:"Disallow transfer to peers"})]})]})]}),e.type==="LoopAgent"&&o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Max Iterations"}),o.jsx("input",{type:"number",value:e.max_iterations||"",onChange:O=>x({max_iterations:parseInt(O.target.value)||void 0}),placeholder:"No limit"})]})})]}),y&&o.jsx(ii,{id:"model",title:"Model",icon:o.jsx(Xc,{size:16}),expanded:a.has("model"),onToggle:()=>j("model"),children:o.jsx(b_,{agent:_,appModels:t.app.models||[],defaultModelId:t.app.default_model_id,onUpdate:O=>x({model:O})})}),y&&o.jsx(ii,{id:"tools",title:`Tools (${_.tools.length})`,icon:o.jsx(Dt,{size:16}),expanded:a.has("tools"),onToggle:()=>j("tools"),children:o.jsx(v_,{tools:_.tools,onAdd:A,onRemove:D,onUpdate:T,builtinTools:i,mcpServers:r,projectMcpServers:t.mcp_servers,customTools:t.custom_tools,agents:I,skillsets:t.skillsets||[]})}),y&&o.jsx(ii,{id:"callbacks",title:"Callbacks",icon:o.jsx(An,{size:16}),expanded:a.has("callbacks"),onToggle:()=>j("callbacks"),children:o.jsx(k_,{agent:_,onUpdate:x,customCallbacks:t.custom_callbacks||[]})}),"sub_agents"in e&&o.jsx(ii,{id:"subagents",title:`Sub-Agents (${e.sub_agents.length})`,icon:o.jsx(m0,{size:16}),expanded:a.has("subagents"),onToggle:()=>j("subagents"),children:o.jsxs("div",{className:"sub-agent-list",children:[e.sub_agents.map(O=>{const M=t.agents.find(R=>R.id===O);return M?o.jsxs("div",{className:"sub-agent-chip",children:[M.name,o.jsx("button",{onClick:()=>E(O),children:o.jsx(Pe,{size:12})})]},O):null}),o.jsxs("select",{value:"",onChange:O=>{O.target.value&&v(O.target.value)},style:{width:150,padding:"6px 10px",fontSize:13},children:[o.jsx("option",{value:"",children:"Add agent..."}),I.filter(O=>!e.sub_agents.includes(O.id)).map(O=>o.jsx("option",{value:O.id,children:O.name},O.id))]})]})})]})]})}function ii({id:e,title:t,icon:n,expanded:r,onToggle:i,children:l}){return o.jsxs("div",{className:"section",children:[o.jsxs("div",{className:"section-header",onClick:i,children:[r?o.jsx(kt,{size:16}):o.jsx(wt,{size:16}),o.jsxs("h4",{children:[n," ",t]})]}),r&&o.jsx("div",{className:"section-content",children:l})]})}function v_({tools:e,onAdd:t,onRemove:n,onUpdate:r,builtinTools:i,mcpServers:l,projectMcpServers:s,customTools:a,agents:c,skillsets:u}){const[d,p]=S.useState(!1),[f,m]=S.useState({}),[k,w]=S.useState(""),P=Nt.useRef(null),g=Nt.useRef(null),[h,x]=S.useState(null),[z,j]=S.useState(new Set),y=(C,B)=>{if(!k.trim())return!0;const L=k.toLowerCase();return C.toLowerCase().includes(L)||((B==null?void 0:B.toLowerCase().includes(L))??!1)},_=i.filter(C=>y(C.name,C.description)),A=l.filter(C=>y(C.name,C.description)),D=s.filter(C=>y(C.name,C.description)),T=a.filter(C=>y(C.name,C.description)),v=c.filter(C=>y(C.name,C.description)),E=u.filter(C=>y(C.name,C.description));function I(){if(P.current){const C=P.current.getBoundingClientRect(),B=window.innerHeight,L=350,H=B-C.bottom-16,X=C.top-16;if(H>=200||H>=X){const ee=Math.min(L,H);m({top:C.bottom+4,left:C.left,maxHeight:ee})}else{const ee=Math.min(L,X);m({top:C.top-ee-4,left:C.left,maxHeight:ee})}}p(!0),w(""),setTimeout(()=>{var C;return(C=g.current)==null?void 0:C.focus()},50)}function q(){p(!1),w("")}function F(C){t({type:"builtin",name:C}),q()}async function Q(C){q();const B=C.tool_filter||[];if(x({server:C,enabledTools:new Set(B),availableTools:B.map(L=>({name:L,description:""})),isLoading:B.length===0,error:void 0}),B.length===0)try{const{testMcpServer:L}=await ng(async()=>{const{testMcpServer:X}=await Promise.resolve().then(()=>X1);return{testMcpServer:X}},void 0),H=await L({connection_type:C.connection_type,command:C.command,args:C.args,env:C.env,url:C.url,headers:C.headers,timeout:C.timeout||30});H.success?x(X=>X?{...X,availableTools:H.tools,enabledTools:new Set(H.tools.map(ee=>ee.name)),isLoading:!1}:null):x(X=>X?{...X,isLoading:!1,error:H.error||"Failed to connect to MCP server"}:null)}catch(L){x(H=>H?{...H,isLoading:!1,error:L.message}:null)}}function O(C){if(!h)return;const B=new Set(h.enabledTools);B.has(C)?B.delete(C):B.add(C),x({...h,enabledTools:B})}function M(){if(!h)return;const C=Array.from(h.enabledTools);t({type:"mcp",server:{...h.server,tool_filter:C}}),x(null)}function R(C){const B=new Set(z);B.has(C)?B.delete(C):B.add(C),j(B)}function b(C,B){const L=e[C];if(L.type!=="mcp"||!L.server)return;const H=L.server.tool_filter||[];let X;H.includes(B)?X=H.filter(ee=>ee!==B):X=[...H,B],r(C,{...L,server:{...L.server,tool_filter:X}})}function U(C){t({type:"function",name:C.name,module_path:C.module_path}),q()}function Y(C){const B=c.find(L=>L.id===C);t({type:"agent",agent_id:C,name:B==null?void 0:B.name}),q()}function N(C){const B=u.find(L=>L.id===C);t({type:"skillset",skillset_id:C,name:B==null?void 0:B.name}),q()}function ne(C){return l.find(B=>B.name===C)}return o.jsxs("div",{children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"tool-list",children:e.map((C,B)=>{var L;return C.type==="mcp"&&C.server?o.jsxs("div",{className:"mcp-tool-item",children:[o.jsxs("div",{className:"mcp-tool-header",onClick:()=>R(B),children:[z.has(B)?o.jsx(kt,{size:14}):o.jsx(wt,{size:14}),o.jsx(Dt,{size:14,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{className:"mcp-tool-info",children:[o.jsx("div",{className:"mcp-tool-name",children:C.server.name}),o.jsx("div",{className:"mcp-tool-count",children:C.server.tool_filter===null||C.server.tool_filter===void 0?"all tools":`${C.server.tool_filter.length} tools enabled`})]}),o.jsx("button",{className:"delete-btn",onClick:H=>{H.stopPropagation(),n(B)},children:o.jsx(Pe,{size:14})})]}),z.has(B)&&o.jsx("div",{className:"mcp-tool-body",children:o.jsx("div",{className:"mcp-tool-list",children:(()=>{const H=ne(C.server.name),X=(H==null?void 0:H.tool_filter)||C.server.tool_filter||[],ee=new Set(C.server.tool_filter||[]);return X.map(se=>o.jsxs("label",{className:`mcp-tool-chip ${ee.has(se)?"enabled":"disabled"}`,onClick:()=>b(B,se),children:[o.jsx("input",{type:"checkbox",checked:ee.has(se),onChange:()=>{},style:{display:"none"}}),se]},se))})()})})]},B):C.type==="skillset"?o.jsxs("div",{className:"tool-item",children:[o.jsx(rn,{size:14,style:{color:"var(--accent)"}}),o.jsxs("div",{className:"tool-item-info",children:[o.jsx("div",{className:"tool-item-name",children:C.name||((L=u.find(H=>H.id===C.skillset_id))==null?void 0:L.name)||"SkillSet"}),o.jsx("div",{className:"tool-item-type",children:"skillset"})]}),o.jsx("button",{className:"delete-btn",onClick:()=>n(B),children:o.jsx(Pe,{size:14})})]},B):o.jsxs("div",{className:"tool-item",children:[o.jsx(Dt,{size:14,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{className:"tool-item-info",children:[o.jsx("div",{className:"tool-item-name",children:C.name||C.agent_id}),o.jsx("div",{className:"tool-item-type",children:C.type})]}),o.jsx("button",{className:"delete-btn",onClick:()=>n(B),children:o.jsx(Pe,{size:14})})]},B)})}),o.jsxs("div",{className:"add-tool-dropdown",style:{marginTop:12},children:[o.jsxs("button",{ref:P,className:"btn btn-secondary btn-sm",onClick:()=>d?q():I(),children:[o.jsx(Re,{size:14}),"Add Tool"]}),d&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"dropdown-backdrop",onClick:q}),o.jsxs("div",{className:"dropdown-content dropdown-fixed",style:f,children:[o.jsx("div",{className:"dropdown-search",children:o.jsx("input",{ref:g,type:"text",placeholder:"Search tools...",value:k,onChange:C=>w(C.target.value),onKeyDown:C=>C.key==="Escape"&&q()})}),_.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Built-in Tools"}),_.map(C=>o.jsxs("button",{className:"dropdown-item",onClick:()=>F(C.name),children:[o.jsx("div",{className:"dropdown-item-name",children:C.name}),o.jsx("div",{className:"dropdown-item-desc",children:C.description})]},C.name))]}),A.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsxs("h5",{children:["Known MCP Servers (",A.length,")"]}),A.map(C=>o.jsxs("button",{className:"dropdown-item",onClick:()=>Q(C),children:[o.jsxs("div",{className:"dropdown-item-name",children:[C.name,o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:C.tool_filter===null||C.tool_filter===void 0?"all tools":`${C.tool_filter.length} tools`})]}),o.jsx("div",{className:"dropdown-item-desc",children:C.description})]},`known-${C.name}`))]}),D.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsxs("h5",{children:["Project MCP Servers (",D.length,")"]}),D.map(C=>o.jsxs("button",{className:"dropdown-item",onClick:()=>Q(C),children:[o.jsxs("div",{className:"dropdown-item-name",children:[C.name,o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:C.tool_filter===null||C.tool_filter===void 0?"all tools":`${C.tool_filter.length} tools`})]}),o.jsx("div",{className:"dropdown-item-desc",children:C.description||"Custom MCP server"})]},`project-${C.id||C.name}`))]}),T.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Custom Tools"}),T.map(C=>o.jsxs("button",{className:"dropdown-item",onClick:()=>U(C),children:[o.jsx("div",{className:"dropdown-item-name",children:C.name}),o.jsx("div",{className:"dropdown-item-desc",children:C.description})]},C.id))]}),v.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Agents as Tools"}),v.map(C=>o.jsxs("button",{className:"dropdown-item",onClick:()=>Y(C.id),children:[o.jsx("div",{className:"dropdown-item-name",children:C.name}),o.jsx("div",{className:"dropdown-item-desc",children:C.type})]},C.id))]}),E.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsxs("h5",{children:["SkillSets (",E.length,")"]}),E.map(C=>o.jsxs("button",{className:"dropdown-item",onClick:()=>N(C.id),children:[o.jsxs("div",{className:"dropdown-item-name",children:[C.name,o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:[C.entry_count||0," entries"]})]}),o.jsx("div",{className:"dropdown-item-desc",children:C.description||"Vector knowledge base"})]},C.id))]}),k.trim()&&_.length===0&&A.length===0&&D.length===0&&T.length===0&&v.length===0&&E.length===0&&o.jsxs("div",{className:"dropdown-section",style:{textAlign:"center",padding:"20px",color:"var(--text-muted)"},children:['No tools matching "',k,'"']})]})]})]}),h&&o.jsx("div",{className:"mcp-config-dialog",children:o.jsxs("div",{className:"mcp-config-content",children:[o.jsxs("h3",{children:["Configure ",h.server.name]}),o.jsx("p",{children:h.server.description}),h.isLoading?o.jsxs("div",{className:"mcp-loading",children:[o.jsx("div",{className:"spinner"}),o.jsx("p",{children:"Connecting to MCP server and discovering tools..."})]}):h.error?o.jsxs("div",{className:"mcp-error",children:[o.jsxs("p",{children:["⚠️ Failed to discover tools: ",h.error]}),o.jsx("p",{className:"hint",children:"You can still add the server, but you won't be able to select specific tools."})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"mcp-select-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>x({...h,enabledTools:new Set(h.availableTools.map(C=>C.name))}),children:["Select All (",h.availableTools.length,")"]}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>x({...h,enabledTools:new Set}),children:"Select None"})]}),o.jsx("div",{className:"mcp-tools-grid",children:h.availableTools.map(C=>o.jsxs("label",{className:`mcp-tool-toggle ${h.enabledTools.has(C.name)?"enabled":""}`,onClick:()=>O(C.name),title:C.description||C.name,children:[o.jsx("input",{type:"checkbox",checked:h.enabledTools.has(C.name),onChange:()=>{}}),C.name]},C.name))})]}),o.jsxs("div",{className:"dialog-actions",children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>x(null),children:"Cancel"}),o.jsxs("button",{className:"btn btn-primary",onClick:M,disabled:h.enabledTools.size===0,children:["Add ",h.enabledTools.size," Tools"]})]})]})})]})}function b_({agent:e,appModels:t,defaultModelId:n,onUpdate:r}){var p,f,m,k,w,P,g,h,x,z;const i=(p=e.model)==null?void 0:p._appModelId,l=e.model!==null&&e.model!==void 0&&!i,a=i||(()=>{if(!e.model)return n;const j=t.find(y=>{var _,A,D;return y.provider===((_=e.model)==null?void 0:_.provider)&&y.model_name===((A=e.model)==null?void 0:A.model_name)&&y.api_base===((D=e.model)==null?void 0:D.api_base)});return j==null?void 0:j.id})()||n||((f=t[0])==null?void 0:f.id);Nt.useEffect(()=>{var j,y,_,A,D;if(i){const T=t.find(v=>v.id===i);T&&(((j=e.model)==null?void 0:j.provider)!==T.provider||((y=e.model)==null?void 0:y.model_name)!==T.model_name||((_=e.model)==null?void 0:_.api_base)!==T.api_base||((A=e.model)==null?void 0:A.temperature)!==T.temperature||((D=e.model)==null?void 0:D.max_output_tokens)!==T.max_output_tokens)&&r({provider:T.provider,model_name:T.model_name,api_base:T.api_base,temperature:T.temperature,max_output_tokens:T.max_output_tokens,top_p:T.top_p,top_k:T.top_k,fallbacks:[],_appModelId:i})}},[i,t,e.model,r]);function c(j){const y=t.find(_=>_.id===j);y&&r({provider:y.provider,model_name:y.model_name,api_base:y.api_base,temperature:y.temperature,max_output_tokens:y.max_output_tokens,top_p:y.top_p,top_k:y.top_k,fallbacks:[],_appModelId:j})}function u(){var j;if(l){const y=n||((j=t[0])==null?void 0:j.id);y&&c(y)}else{const y=e.model;if(y){const{_appModelId:_,...A}=y;r(A)}else r({provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]})}}function d(j){const{_appModelId:y,..._}=e.model||{};r({..._,...j})}return t.find(j=>j.id===a),t.find(j=>j.id===n),o.jsxs("div",{className:"model-selector",children:[o.jsx("style",{children:`
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
      `}),t.length>0&&o.jsxs("div",{className:"model-choice",children:[o.jsxs("div",{className:`model-option ${l?"":"selected"}`,onClick:()=>!l||u(),children:[o.jsx("div",{className:"model-option-label",children:"Use App Model"}),o.jsx("div",{className:"model-option-desc",children:"Select from configured models"})]}),o.jsxs("div",{className:`model-option ${l?"selected":""}`,onClick:()=>l||u(),children:[o.jsx("div",{className:"model-option-label",children:"Custom"}),o.jsx("div",{className:"model-option-desc",children:"Configure model manually"})]})]}),!l&&t.length>0?o.jsx("div",{className:"app-model-select",children:t.map(j=>o.jsx("div",{className:`app-model-item ${a===j.id?"selected":""}`,onClick:()=>c(j.id),children:o.jsxs("div",{className:"app-model-item-info",children:[o.jsxs("div",{className:"app-model-item-name",children:[j.name,j.id===n&&o.jsxs("span",{className:"default-badge",children:[o.jsx(Zh,{size:10,fill:"currentColor"}),"Default"]})]}),o.jsxs("div",{className:"app-model-item-details",children:[j.provider," / ",j.model_name,j.api_base&&` • ${j.api_base}`]})]})},j.id))}):t.length===0?o.jsx("div",{className:"no-models-message",children:"No models configured in App Config. Configure models there first, or use custom settings below."}):null,(l||t.length===0)&&o.jsxs("div",{className:"custom-model-form",children:[o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Provider"}),o.jsxs("select",{value:((m=e.model)==null?void 0:m.provider)||"gemini",onChange:j=>d({provider:j.target.value}),children:[o.jsx("option",{value:"gemini",children:"Gemini"}),o.jsx("option",{value:"litellm",children:"LiteLLM"}),o.jsx("option",{value:"anthropic",children:"Anthropic"})]})]}),o.jsxs("div",{className:"form-group",style:{flex:2},children:[o.jsx("label",{children:"Model Name"}),o.jsx("input",{type:"text",value:((k=e.model)==null?void 0:k.model_name)||"",onChange:j=>d({model_name:j.target.value}),placeholder:"e.g., gemini-2.0-flash"})]}),((w=e.model)==null?void 0:w.provider)==="litellm"&&o.jsxs("div",{className:"form-group",style:{flex:2},children:[o.jsx("label",{children:"API Base"}),o.jsx("input",{type:"text",value:((P=e.model)==null?void 0:P.api_base)||"",onChange:j=>d({api_base:j.target.value||void 0}),placeholder:"http://localhost:11434"})]})]}),o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Temperature"}),o.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:((g=e.model)==null?void 0:g.temperature)??"",onChange:j=>d({temperature:j.target.value?parseFloat(j.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Max Tokens"}),o.jsx("input",{type:"number",value:((h=e.model)==null?void 0:h.max_output_tokens)??"",onChange:j=>d({max_output_tokens:j.target.value?parseInt(j.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Top P"}),o.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:((x=e.model)==null?void 0:x.top_p)??"",onChange:j=>d({top_p:j.target.value?parseFloat(j.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Top K"}),o.jsx("input",{type:"number",min:"1",value:((z=e.model)==null?void 0:z.top_k)??"",onChange:j=>d({top_k:j.target.value?parseInt(j.target.value):void 0}),placeholder:"Default"})]})]})]})]})}function k_({agent:e,onUpdate:t,customCallbacks:n}){const r=[{key:"before_agent_callbacks",label:"Before Agent"},{key:"after_agent_callbacks",label:"After Agent"},{key:"before_model_callbacks",label:"Before Model"},{key:"after_model_callbacks",label:"After Model"},{key:"before_tool_callbacks",label:"Before Tool"},{key:"after_tool_callbacks",label:"After Tool"}];function i(s,a){const c=e[s]||[],u=n.find(d=>d.id===a);u&&t({[s]:[...c,{module_path:u.module_path}]})}function l(s,a){const c=e[s]||[];t({[s]:c.filter((u,d)=>d!==a)})}return o.jsx("div",{className:"callbacks-editor",children:r.map(({key:s,label:a})=>{const c=e[s]||[],u=n;return o.jsxs("div",{className:"callback-type-group",style:{marginBottom:"20px"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[o.jsx("label",{style:{fontWeight:500,fontSize:"13px"},children:a}),u.length>0&&o.jsxs("select",{value:"",onChange:d=>{d.target.value&&(i(s,d.target.value),d.target.value="")},style:{padding:"4px 8px",fontSize:"12px",width:"200px"},children:[o.jsx("option",{value:"",children:"Add callback..."}),u.filter(d=>{const p=d.module_path;return!c.some(f=>f.module_path===p)}).map(d=>o.jsx("option",{value:d.id,children:d.name},d.id))]})]}),c.length===0?o.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",fontStyle:"italic",padding:"8px"},children:"No callbacks"}):o.jsx("div",{className:"callback-list",children:c.map((d,p)=>{const f=n.find(m=>m.module_path===d.module_path);return o.jsxs("div",{className:"callback-chip",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 10px",background:"var(--bg-secondary)",borderRadius:"4px",marginBottom:"4px"},children:[o.jsx("span",{style:{fontSize:"12px"},children:(f==null?void 0:f.name)||d.module_path}),o.jsx("button",{onClick:()=>l(s,p),style:{background:"none",border:"none",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},title:"Remove callback",children:o.jsx(Pe,{size:12})})]},p)})})]},s)})})}const Rs=[{type:"LlmAgent",label:"LLM Agent",icon:Qn,color:"#00f5d4",description:"AI-powered agent with model reasoning"},{type:"SequentialAgent",label:"Sequential",icon:h0,color:"#7b2cbf",description:"Run sub-agents in order"},{type:"LoopAgent",label:"Loop",icon:u0,color:"#ffd93d",description:"Repeat sub-agents until exit"},{type:"ParallelAgent",label:"Parallel",icon:Ia,color:"#ff6b6b",description:"Run sub-agents simultaneously"}];function w_(){return`agent_${Date.now().toString(36)}`}function j_(e){return{provider:e.provider,model_name:e.model_name,api_base:e.api_base,temperature:e.temperature,max_output_tokens:e.max_output_tokens,top_p:e.top_p,top_k:e.top_k,fallbacks:[]}}function __(e,t){const r={id:w_(),name:`New ${e}`,description:""},i=t?j_(t):{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]};switch(e){case"LlmAgent":return{...r,type:"LlmAgent",model:i,instruction:"",include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:[],sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};case"SequentialAgent":return{...r,type:"SequentialAgent",sub_agents:[]};case"LoopAgent":return{...r,type:"LoopAgent",sub_agents:[],max_iterations:10};case"ParallelAgent":return{...r,type:"ParallelAgent",sub_agents:[]};default:throw new Error(`Unknown agent type: ${e}`)}}function S_({onSelectAgent:e}){const{project:t,addAgent:n,removeAgent:r,updateAgent:i,selectedAgentId:l,setSelectedAgentId:s,mcpServers:a}=vt(),[c,u]=S.useState(!1),[d,p]=S.useState(new Set),[f,m]=S.useState(!1),[k,w]=S.useState(""),[P,g]=S.useState(!1);if(S.useEffect(()=>{if(t){const I=t.agents.filter(q=>"sub_agents"in q&&q.sub_agents.length>0).map(q=>q.id);p(new Set(I))}},[t==null?void 0:t.id,t==null?void 0:t.agents.length]),!t)return null;async function h(){var I,q,F,Q;if(!(!k.trim()||!t)){g(!0);try{const O=await $h(t.id,k);if(O.success&&O.config){const M=O.config,R=[];if((I=M.tools)!=null&&I.builtin)for(const N of M.tools.builtin)R.push({type:"builtin",name:N});if((q=M.tools)!=null&&q.mcp)for(const N of M.tools.mcp){const ne=a.find(C=>C.name===N.server);ne&&R.push({type:"mcp",server:{...ne,tool_filter:N.tools}})}if((F=M.tools)!=null&&F.custom)for(const N of M.tools.custom){const ne=t.custom_tools.find(C=>C.name===N);ne&&R.push({type:"function",name:N,module_path:ne.module_path})}if((Q=M.tools)!=null&&Q.agents)for(const N of M.tools.agents){const ne=t.agents.find(C=>C.id===N);ne&&R.push({type:"agent",agent_id:N,name:ne.name})}const b=t.app.models||[],U=b.find(N=>N.id===t.app.default_model_id)||b[0],Y={id:`agent_${Date.now().toString(36)}`,type:"LlmAgent",name:M.name||"new_agent",description:M.description||"",instruction:M.instruction||"",model:U?{provider:U.provider,model_name:U.model_name,api_base:U.api_base,temperature:U.temperature,max_output_tokens:U.max_output_tokens,top_p:U.top_p,top_k:U.top_k,fallbacks:[]}:{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]},include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:R,sub_agents:M.sub_agents||[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};n(Y),s(Y.id),e==null||e(Y.id),m(!1),w("")}else alert("Failed to generate agent: "+(O.error||"Unknown error"))}catch(O){alert("Error generating agent: "+O.message)}finally{g(!1)}}}const x=t.agents.find(I=>I.id===l);function z(I){s(I),e==null||e(I)}function j(I){const q=t.app.models||[],F=q.find(O=>O.id===t.app.default_model_id)||q[0],Q=__(I,F);n(Q),z(Q.id),u(!1)}function y(I,q){q.stopPropagation(),confirm("Delete this agent?")&&(r(I),l===I&&(e==null||e(null)))}function _(I){const q=new Set(d);q.has(I)?q.delete(I):q.add(I),p(q)}function A(I){const q=Rs.find(F=>F.type===I);return q?q.icon:Qn}function D(I){const q=Rs.find(F=>F.type===I);return q?q.color:"#888"}function T(I,q=0){return I.map(F=>{const Q=A(F.type),O=D(F.type),M="sub_agents"in F&&F.sub_agents.length>0,R=d.has(F.id),b=M?F.sub_agents.map(U=>t.agents.find(Y=>Y.id===U)).filter(U=>U!==void 0):[];return o.jsxs("div",{className:"agent-tree-item",children:[o.jsxs("div",{className:`agent-item ${l===F.id?"selected":""}`,onClick:()=>z(F.id),style:{paddingLeft:12+q*20},children:[M?o.jsx("button",{className:"expand-btn",onClick:U=>{U.stopPropagation(),_(F.id)},children:R?o.jsx(kt,{size:16}):o.jsx(wt,{size:16})}):o.jsx("span",{style:{width:20}}),o.jsx("div",{className:"agent-icon",style:{background:O},children:o.jsx(Q,{size:14})}),o.jsx("span",{className:"agent-name",children:F.name}),o.jsx("span",{className:"agent-type",children:F.type}),o.jsx("button",{className:"delete-btn",onClick:U=>y(F.id,U),children:o.jsx(Pe,{size:14})})]}),M&&R&&o.jsx("div",{className:"sub-agents",children:T(b,q+1)})]},F.id)})}const v=new Set(t.agents.flatMap(I=>"sub_agents"in I?I.sub_agents:[])),E=t.agents.filter(I=>!v.has(I.id));return o.jsxs("div",{className:"agents-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("aside",{className:"agents-sidebar",children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["Agents (",t.agents.length,")"]}),o.jsxs("div",{className:"header-buttons",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>m(!0),title:"AI-powered agent setup",children:[o.jsx(vs,{size:14}),"Quick"]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>u(!0),children:[o.jsx(Re,{size:14}),"Add"]})]})]}),o.jsx("div",{className:"agents-list",children:t.agents.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Qn,{size:32}),o.jsx("p",{children:"No agents yet"})]}):T(E)})]}),o.jsx("div",{className:"agent-editor-area",children:x?o.jsx(y_,{agent:x}):o.jsxs("div",{className:"empty-state card",children:[o.jsx(Qn,{size:48}),o.jsxs("p",{children:["Select an agent to edit",o.jsx("br",{}),"or create a new one"]})]})}),c&&o.jsx("div",{className:"type-selector",onClick:()=>u(!1),children:o.jsxs("div",{className:"type-selector-content",onClick:I=>I.stopPropagation(),children:[o.jsx("h2",{children:"Add Agent"}),o.jsx("div",{className:"type-options",children:Rs.map(({type:I,label:q,icon:F,color:Q,description:O})=>o.jsxs("button",{className:"type-option",onClick:()=>j(I),children:[o.jsx("div",{className:"type-option-icon",style:{background:Q},children:o.jsx(F,{size:20})}),o.jsxs("div",{className:"type-option-info",children:[o.jsx("h4",{children:q}),o.jsx("p",{children:O})]})]},I))})]})}),f&&o.jsx("div",{className:"type-selector",onClick:()=>!P&&m(!1),children:o.jsxs("div",{className:"quick-setup-content",onClick:I=>I.stopPropagation(),children:[o.jsxs("h2",{children:[o.jsx(vs,{size:20})," Quick Agent Setup"]}),o.jsx("p",{className:"quick-setup-desc",children:"Describe what you want this agent to do, and AI will configure everything: name, description, instruction, tools, and sub-agents."}),o.jsxs("div",{className:"quick-setup-form",children:[o.jsx("textarea",{value:k,onChange:I=>w(I.target.value),placeholder:"Example: An agent that searches the web for information and summarizes the results. It should be able to search Google and handle multiple queries in parallel.",rows:5,disabled:P,autoFocus:!0}),o.jsxs("div",{className:"quick-setup-info",children:[o.jsx("strong",{children:"Available resources:"}),o.jsxs("ul",{children:[o.jsxs("li",{children:[t.app.state_keys.length," state keys"]}),o.jsxs("li",{children:[a.length," MCP servers"]}),o.jsxs("li",{children:[t.custom_tools.length," custom tools"]}),o.jsxs("li",{children:[t.agents.length," existing agents"]})]})]}),o.jsxs("div",{className:"quick-setup-actions",children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>m(!1),disabled:P,children:"Cancel"}),o.jsx("button",{className:"btn btn-primary",onClick:h,disabled:P||!k.trim(),children:P?o.jsxs(o.Fragment,{children:[o.jsx($r,{size:14,className:"spin"}),"Generating..."]}):o.jsxs(o.Fragment,{children:[o.jsx(vs,{size:14}),"Create Agent"]})})]})]})]})})]})}var bu="\x1B[0m",ku="\x1B[1m",Qg=e=>e instanceof Error?e.message:typeof e=="string"?e:"An unknown error occurred",C_=e=>{let t=Qg(e),n=`${ku}[MONACOPILOT ERROR] ${t}${bu}`;return console.error(n),{message:t}},N_=(e,t)=>{console.warn(`${ku}[MONACOPILOT WARN] ${e}${t?`
${Qg(t)}`:""}${bu}`)},E_=(e,t,n)=>console.warn(`${ku}[MONACOPILOT DEPRECATED] "${e}" is deprecated${n?` in ${n}`:""}. Please use "${t}" instead. It will be removed in a future version.${bu}`),vl={report:C_,warn:N_,warnDeprecated:E_},Hp=(e,t,n={})=>{if(t<=0)return"";let r=e.split(`
`),i=r.length;if(t>=i)return e;if(n.truncateDirection==="keepEnd"){let s=r.slice(-t);return s.every(a=>a==="")?`
`.repeat(t):s.join(`
`)}let l=r.slice(0,t);return l.every(s=>s==="")?`
`.repeat(t):l.join(`
`)},z_=100,T_=!0,Gg="onIdle",P_=!0,A_=120,L_=400,R_=0,wu=(e,t)=>t.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:e.lineNumber,endColumn:e.column}),I_=(e,t)=>t.getValueInRange({startLineNumber:e.lineNumber,startColumn:e.column,endLineNumber:t.getLineCount(),endColumn:t.getLineMaxColumn(t.getLineCount())}),M_=e=>e.getValue(),O_=class{constructor(e){this.capacity=e,this.head=0,this.tail=0,this.size=0,this.buffer=new Array(e)}enqueue(e){let t;return this.size===this.capacity&&(t=this.dequeue()),this.buffer[this.tail]=e,this.tail=(this.tail+1)%this.capacity,this.size++,t}dequeue(){if(this.size===0)return;let e=this.buffer[this.head];return this.buffer[this.head]=void 0,this.head=(this.head+1)%this.capacity,this.size--,e}getAll(){return this.buffer.filter(e=>e!==void 0)}clear(){this.buffer=new Array(this.capacity),this.head=0,this.tail=0,this.size=0}getSize(){return this.size}isEmpty(){return this.size===0}isFull(){return this.size===this.capacity}},Jg=class Yg{constructor(){this.cache=new O_(Yg.MAX_CACHE_SIZE)}get(t,n){return this.cache.getAll().filter(r=>this.isValidCacheItem(r,t,n))}add(t){t.completion.trim()&&this.cache.enqueue(t)}clear(){this.cache.clear()}isValidCacheItem(t,n,r){let i=t.textBeforeCursor.trim(),l=wu(n,r),s=l,a=r.getLineContent(n.lineNumber);if(n.column===a.length+1&&n.lineNumber<r.getLineCount()){let u=r.getLineContent(n.lineNumber+1);s=`${l}
${u}`}if(!(s.trim().includes(i)||i.includes(s.trim())))return!1;let c=r.getValueInRange(t.range);return this.isPartialMatch(c,t.completion)?this.isPositionValid(t,n):!1}isPartialMatch(t,n){let r=t.trim(),i=n.trim();return i.startsWith(r)||r.startsWith(i)}isPositionValid(t,n){let{range:r}=t,{startLineNumber:i,startColumn:l,endLineNumber:s,endColumn:a}=r,{lineNumber:c,column:u}=n;return c<i||c>s?!1:i===s?u>=l-1&&u<=a+1:c===i?u>=l-1:c===s?u<=a+1:!0}};Jg.MAX_CACHE_SIZE=20;var $_=Jg,D_=class{constructor(e){this.formattedCompletion="",this.formattedCompletion=e}setCompletion(e){return this.formattedCompletion=e,this}removeInvalidLineBreaks(){return this.formattedCompletion=this.formattedCompletion.trimEnd(),this}removeMarkdownCodeSyntax(){return this.formattedCompletion=this.removeMarkdownCodeBlocks(this.formattedCompletion),this}removeMarkdownCodeBlocks(e){let t=e.split(`
`),n=[],r=!1;for(let i=0;i<t.length;i++){let l=t[i],s=l.trim().startsWith("```");if(s&&!r){r=!0;continue}if(s&&r){r=!1;continue}n.push(l)}return n.join(`
`)}removeExcessiveNewlines(){return this.formattedCompletion=this.formattedCompletion.replace(/\n{3,}/g,`

`),this}build(){return this.formattedCompletion}},F_=class{findOverlaps(e,t,n){if(!e)return{startOverlapLength:0,maxOverlapLength:0};let r=e.length,i=t.length,l=n.length,s=0,a=0,c=0,u=Math.min(r,i);for(let f=1;f<=u;f++){let m=e.substring(0,f),k=t.slice(-f);m===k&&(c=f)}let d=Math.min(r,l);for(let f=0;f<d&&e[f]===n[f];f++)s++;for(let f=1;f<=d;f++)e.slice(-f)===n.slice(0,f)&&(a=f);let p=Math.max(s,a);if(p===0){for(let f=1;f<r;f++)if(n.startsWith(e.substring(f))){p=r-f;break}}return{startOverlapLength:c,maxOverlapLength:p}}},B_=class{constructor(e){this.monaco=e,this.textOverlapCalculator=new F_}computeInsertionRange(e,t,n){if(!t)return this.createEmptyRange(e);let r=n.getOffsetAt(e),i=n.getValue().substring(0,r),l=n.getValue().substring(r);if(r>=n.getValue().length)return this.createEmptyRange(e);if(l.length===0)return this.createEmptyRange(e);let{startOverlapLength:s,maxOverlapLength:a}=this.textOverlapCalculator.findOverlaps(t,i,l),c=s>0?n.getPositionAt(r-s):e,u=r+a,d=n.getPositionAt(u);return new this.monaco.Range(c.lineNumber,c.column,d.lineNumber,d.column)}computeCacheRange(e,t){let n=e.lineNumber,r=e.column,i=t.split(`
`),l=i.length-1,s=n+l,a=l===0?r+i[0].length:i[l].length+1;return new this.monaco.Range(n,r,s,a)}createEmptyRange(e){return new this.monaco.Range(e.lineNumber,e.column,e.lineNumber,e.column)}},U_=async e=>{let{endpoint:t,body:n}=e,r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok)throw new Error(`Error while fetching completion item: ${r.statusText}`);let{completion:i,error:l}=await r.json();return{completion:i,error:l}},V_=({pos:e,mdl:t,options:n})=>{let{filename:r,language:i,technologies:l,relatedFiles:s,maxContextLines:a=z_}=n,c=s&&s.length>0?3:2,u=a?Math.floor(a/c):void 0,d=(w,P,g)=>{let h=w(e,t);return P?Hp(h,P,g):h},p=(w,P)=>!w||!P?w:w.map(({content:g,...h})=>({...h,content:Hp(g,P)})),f=d(wu,u,{truncateDirection:"keepEnd"}),m=d(I_,u,{truncateDirection:"keepStart"}),k=p(s,u);return{filename:r,language:i,technologies:l,relatedFiles:k,textBeforeCursor:f,textAfterCursor:m,cursorPosition:e}},W_=(e,t=300)=>{let n=null,r=null,i=(...l)=>{if(r)return r.args=l,r.promise;let s,a,c=new Promise((u,d)=>{s=u,a=d});return r={args:l,promise:c,resolve:s,reject:a},n&&(clearTimeout(n),n=null),n=setTimeout(async()=>{let u=r;if(u){r=null,n=null;try{let d=await e(...u.args);u.resolve(d)}catch(d){u.reject(d)}}},t),c};return i.cancel=()=>{n&&(clearTimeout(n),n=null),r&&(r.reject(new Error("Cancelled")),r=null)},i},H_=e=>typeof e=="string"?e==="Cancelled"||e==="AbortError":e instanceof Error?e.message==="Cancelled"||e.name==="AbortError":!1,oi=e=>({items:e,enableForwardStability:!0}),Ja=new $_,q_=async({monaco:e,mdl:t,pos:n,token:r,isCompletionAccepted:i,options:l})=>{let{trigger:s=Gg,enableCaching:a=T_,allowFollowUpCompletions:c=P_,onError:u,requestHandler:d}=l;if(a&&!i){let p=Ja.get(n,t).map(f=>({insertText:f.completion,range:f.range}));if(p.length>0)return oi(p)}if(r.isCancellationRequested||!c&&i)return oi([]);try{let p=W_(async k=>{var P,g;(P=l.onCompletionRequested)==null||P.call(l,k);let w;if(d)w=await d(k);else if(l.endpoint)w=await U_({endpoint:l.endpoint,...k});else throw new Error('No endpoint specified for completion request. Please set the "endpoint" option in registerCompletion, or provide a custom requestHandler.');if(w.error)throw new Error(w.error);return(g=l.onCompletionRequestFinished)==null||g.call(l,k,w),w},{onTyping:A_,onIdle:L_,onDemand:R_}[s]);r.onCancellationRequested(()=>{p.cancel()});let f=V_({pos:n,mdl:t,options:l}),{completion:m}=await p({body:{completionMetadata:f}});if(m){let k=new D_(m).removeMarkdownCodeSyntax().removeExcessiveNewlines().removeInvalidLineBreaks().build(),w=new B_(e);return a&&Ja.add({completion:k,range:w.computeCacheRange(n,k),textBeforeCursor:wu(n,t)}),oi([{insertText:k,range:w.computeInsertionRange(n,k,t)}])}}catch(p){if(H_(p))return oi([]);u?u(p):vl.warn("Cannot provide completion",p)}return oi([])},ju=new WeakMap,Wl=e=>ju.get(e),K_=(e,t)=>{ju.set(e,t)},qp=e=>{ju.delete(e)},Q_=e=>({isCompletionAccepted:!1,isCompletionVisible:!1,isExplicitlyTriggered:!1,hasRejectedCurrentCompletion:!1,options:e}),G_=(e,t)=>{let n=Wl(e);!n||!n.options||(n.options={...n.options,...t})},J_=(e,t,n)=>{let r=Wl(t);return r?e.languages.registerInlineCompletionsProvider(n.language,{provideInlineCompletions:(i,l,s,a)=>{if(i!==t.getModel())return{items:[]};let c=r.options||n;if(!(c.trigger==="onDemand"&&!r.isExplicitlyTriggered||c.triggerIf&&!c.triggerIf({text:M_(t),position:l,triggerType:c.trigger??Gg})))return q_({monaco:e,mdl:i,pos:l,token:a,isCompletionAccepted:r.isCompletionAccepted,options:c})},handleItemDidShow:(i,l,s)=>{var a,c;r.isExplicitlyTriggered=!1,r.hasRejectedCurrentCompletion=!1,!r.isCompletionAccepted&&(r.isCompletionVisible=!0,(c=(a=r.options||n).onCompletionShown)==null||c.call(a,s,l.range))},freeInlineCompletions:()=>{}}):null},Y_={TAB:(e,t)=>t.keyCode===e.KeyCode.Tab,CMD_RIGHT_ARROW:(e,t)=>t.keyCode===e.KeyCode.RightArrow&&t.metaKey},X_=class{constructor(e,t,n){this.monaco=e,this.state=t,this.initialOptions=n}handleKeyEvent(e){let t=this.state.options||this.initialOptions,n={monaco:this.monaco,event:e,state:this.state,options:t};this.handleCompletionAcceptance(n),this.handleCompletionRejection(n)}handleCompletionAcceptance(e){var t,n;return e.state.isCompletionVisible&&this.isAcceptanceKey(e.event)?((n=(t=e.options).onCompletionAccepted)==null||n.call(t),e.state.isCompletionAccepted=!0,e.state.isCompletionVisible=!1,!0):(e.state.isCompletionAccepted=!1,!1)}handleCompletionRejection(e){var t,n;return this.shouldRejectCompletion(e)?((n=(t=e.options).onCompletionRejected)==null||n.call(t),e.state.hasRejectedCurrentCompletion=!0,!0):!1}shouldRejectCompletion(e){return e.state.isCompletionVisible&&!e.state.hasRejectedCurrentCompletion&&!e.state.isCompletionAccepted&&!this.isAcceptanceKey(e.event)}isAcceptanceKey(e){return Object.values(Y_).some(t=>t(this.monaco,e))}},Z_=(e,t,n,r)=>{let i=new X_(e,n,r);return t.onKeyDown(l=>i.handleKeyEvent(l))},Xg=(e,t,n)=>{let r=[];K_(t,Q_(n)),t.updateOptions({inlineSuggest:{enabled:!0}});try{let i=Wl(t);if(!i)return vl.warn("Completion is not registered properly. State not found."),tS();let l=J_(e,t,n);l&&r.push(l);let s=Z_(e,t,i,n);return r.push(s),{deregister:()=>{for(let a of r)a.dispose();Ja.clear(),qp(t)},trigger:()=>eS(t),updateOptions:a=>{G_(t,a(i.options||n))}}}catch(i){return n.onError?n.onError(i):vl.report(i),{deregister:()=>{for(let l of r)l.dispose();qp(t)},trigger:()=>{},updateOptions:()=>{}}}},eS=e=>{let t=Wl(e);if(!t){vl.warn("Completion is not registered. Use `registerCompletion` to register completion first.");return}t.isExplicitlyTriggered=!0,e.trigger("keyboard","editor.action.inlineSuggest.trigger",{})},tS=()=>({deregister:()=>{},trigger:()=>{},updateOptions:()=>{}});function nS(){return`tool_${Date.now().toString(36)}`}function rS(e){return/^[a-zA-Z0-9_]+$/.test(e)}const iS=`def my_tool(tool_context: ToolContext, param1: str) -> dict:
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
`;function oS({onSelectTool:e}){var Bt;const{project:t,updateProject:n,addCustomTool:r,updateCustomTool:i,removeCustomTool:l,selectedToolId:s,setSelectedToolId:a,builtinTools:c,mcpServers:u}=vt(),[d,p]=S.useState(""),[f,m]=S.useState(null),[k,w]=S.useState("tools"),[P,g]=S.useState(null),[h,x]=S.useState(""),[z,j]=S.useState(!1),[y,_]=S.useState(null),[A,D]=S.useState(!1),[T,v]=S.useState(!1),[E,I]=S.useState(null),[q,F]=S.useState(null);if(!t)return null;const Q=t.mcp_servers||[],O=t.custom_tools.find(V=>V.id===s),M=Q.find(V=>V.name===P),R=new Set(Q.map(V=>V.name)),b=u.filter(V=>!R.has(V.name));function U(V){a(V),e==null||e(V)}S.useEffect(()=>{O&&(p(O.code),F(null))},[s]),S.useEffect(()=>{M&&(x(JSON.stringify(M,null,2)),j(!1))},[P]);function Y(){const V=nS();r({id:V,name:"new_tool",description:"",module_path:"tools.custom",code:iS,state_keys_used:[]}),U(V)}function N(V,fe){fe.stopPropagation(),confirm("Delete this tool?")&&(l(V),s===V&&(e==null||e(null)))}function ne(V){O&&(V.name!==void 0&&(V.name===""||rS(V.name)?F(null):F("Name can only contain letters, numbers, and underscores")),i(O.id,V))}function C(V){V!==void 0&&O&&(p(V),ne({code:V}))}async function B(){if(O){D(!0);try{const V=await Dh(t.id,O.name,O.description,O.state_keys_used);V.success&&V.code?(p(V.code),ne({code:V.code})):(console.error("Failed to generate tool code:",V.error),alert("Failed to generate tool code: "+(V.error||"Unknown error")))}catch(V){console.error("Error generating tool code:",V),alert("Error generating tool code: "+V.message)}finally{D(!1)}}}const L=S.useRef(null),H=S.useCallback((V,fe)=>{if(L.current&&typeof L.current=="function")try{L.current()}catch{}try{const Se=Xg(fe,V,{language:"python",endpoint:"/api/code-completion",trigger:"onTyping"});typeof Se=="function"?L.current=Se:L.current=null}catch{L.current=null}},[]);S.useEffect(()=>()=>{if(L.current&&typeof L.current=="function")try{L.current()}catch{}},[]);function X(){const V={name:`mcp_server_${Date.now().toString(36)}`,description:"New MCP Server",connection_type:"stdio",command:"npx",args:["-y","@modelcontextprotocol/server-example"],env:{},headers:{},timeout:10};n({mcp_servers:[...Q,V]}),g(V.name),_(null)}function ee(V){const fe={...V};n({mcp_servers:[...Q,fe]}),g(fe.name),_(null)}function se(V,fe){fe.stopPropagation(),confirm("Delete this MCP server?")&&(n({mcp_servers:Q.filter(Se=>Se.name!==V)}),P===V&&g(null))}function pe(V){V!==void 0&&(x(V),j(V!==JSON.stringify(M,null,2)))}function Ze(){if(M)try{const V=JSON.parse(h),fe=M.name,Se=Q.map(at=>at.name===fe?V:at);n({mcp_servers:Se}),g(V.name),j(!1)}catch(V){alert("Invalid JSON: "+V.message)}}async function bt(){v(!0),I(null);try{const V=JSON.parse(h),fe=await Bh({connection_type:V.connection_type,command:V.command,args:V.args,env:V.env,url:V.url,headers:V.headers,timeout:V.timeout||30});if(I(fe),fe.success&&fe.tools.length>0){const Se={...V,tool_filter:fe.tools.map(at=>at.name)};x(JSON.stringify(Se,null,2)),j(!0)}}catch(V){I({success:!1,tools:[],error:V.message})}finally{v(!1)}}const Ve={};return t.custom_tools.forEach(V=>{const fe=V.module_path||"tools";Ve[fe]||(Ve[fe]=[]),Ve[fe].push(V)}),o.jsxs("div",{className:"tools-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("aside",{className:"tools-sidebar",children:[o.jsxs("div",{className:"sidebar-tabs",children:[o.jsxs("button",{className:`sidebar-tab ${k==="tools"?"active":""}`,onClick:()=>w("tools"),children:[o.jsx(Dt,{size:14}),"Tools"]}),o.jsxs("button",{className:`sidebar-tab ${k==="mcp"?"active":""}`,onClick:()=>w("mcp"),children:[o.jsx(lr,{size:14}),"MCP"]})]}),k==="tools"?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["Custom Tools (",t.custom_tools.length,")"]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:Y,children:[o.jsx(Re,{size:14}),"New"]})]}),o.jsxs("div",{className:"tools-tree",children:[c.length>0&&o.jsxs("div",{className:"module-group",children:[o.jsxs("div",{className:"module-header",children:[o.jsx(qd,{size:14}),"Built-in Tools"]}),c.map(V=>o.jsxs("div",{className:`tool-item builtin ${(f==null?void 0:f.name)===V.name?"selected":""}`,onClick:()=>{m(V),U(null),g(null)},children:[o.jsx(Oa,{size:14}),o.jsx("span",{className:"tool-name",children:V.name})]},V.name))]}),t.custom_tools.length===0&&c.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(An,{size:32}),o.jsx("p",{children:"No tools defined yet"})]}):t.custom_tools.length>0&&Object.entries(Ve).map(([V,fe])=>o.jsxs("div",{className:"module-group",children:[o.jsxs("div",{className:"module-header",children:[o.jsx(l0,{size:14}),V]}),fe.map(Se=>o.jsxs("div",{className:`tool-item ${s===Se.id?"selected":""}`,onClick:()=>{U(Se.id),m(null),g(null)},children:[o.jsx(Dt,{size:14}),o.jsx("span",{className:"tool-name",children:Se.name}),o.jsx("button",{className:"delete-btn",onClick:at=>N(Se.id,at),children:o.jsx(Pe,{size:14})})]},Se.id))]},V))]})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["MCP Servers (",Q.length,")"]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:X,children:[o.jsx(Re,{size:14}),"Custom"]})]}),o.jsxs("div",{className:"tools-tree",children:[Q.length>0&&o.jsxs("div",{className:"module-group",children:[o.jsxs("div",{className:"module-header",children:[o.jsx(Ma,{size:14}),"Configured (",Q.length,")"]}),Q.map(V=>o.jsxs("div",{className:`tool-item ${P===V.name?"selected":""}`,onClick:()=>{g(V.name),_(null),U(null),m(null)},children:[o.jsx(lr,{size:14}),o.jsx("span",{className:"tool-name",children:V.name}),o.jsx("span",{className:"tool-type-badge",children:V.connection_type}),o.jsx("button",{className:"delete-btn",onClick:fe=>se(V.name,fe),children:o.jsx(Pe,{size:14})})]},V.name))]}),b.length>0&&o.jsxs("div",{className:"module-group",children:[o.jsxs("div",{className:"module-header",children:[o.jsx(qd,{size:14}),"Available Templates (",b.length,")"]}),b.map(V=>o.jsxs("div",{className:`tool-item known-server ${(y==null?void 0:y.name)===V.name?"selected":""}`,onClick:()=>{_(V),g(null),U(null),m(null)},children:[o.jsx(lr,{size:14}),o.jsx("span",{className:"tool-name",children:V.name}),o.jsx("span",{className:"tool-type-badge",children:V.connection_type})]},V.name))]}),Q.length===0&&b.length===0&&o.jsxs("div",{className:"empty-state",children:[o.jsx(lr,{size:32}),o.jsx("p",{children:"No MCP servers available"})]})]})]})]}),o.jsx("div",{className:"tool-editor",children:f?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(Oa,{size:20,style:{color:"var(--accent-secondary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:f.name}),o.jsx("span",{className:"badge badge-muted",children:"Built-in"})]}),o.jsxs("div",{className:"builtin-tool-info",children:[o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("p",{children:f.description||"No description available."})]}),o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Usage"}),o.jsx("p",{children:"This is a built-in tool provided by ADK. Add it to any LLM agent's tools list to enable it."}),o.jsxs("code",{children:['tools: ["',f.name,'"]']})]}),o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Note"}),o.jsx("p",{children:"Built-in tools are read-only and cannot be modified. Create a custom tool if you need different behavior."})]})]})]}):O?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(Dt,{size:20,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o.jsx("input",{type:"text",value:O.name,onChange:V=>ne({name:V.target.value}),placeholder:"Tool name",style:{borderColor:q?"var(--error)":void 0}}),q&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:q})]})]}),o.jsxs("div",{className:"editor-meta",children:[o.jsxs("div",{className:"meta-field grow",children:[o.jsx("label",{children:"Description"}),o.jsx("input",{type:"text",value:O.description,onChange:V=>ne({description:V.target.value}),placeholder:"What does this tool do?"})]}),o.jsxs("div",{className:"meta-field",children:[o.jsx("label",{children:"Module Path"}),o.jsx("input",{type:"text",value:O.module_path,onChange:V=>ne({module_path:V.target.value}),placeholder:"tools.custom",style:{width:180}})]})]}),o.jsxs("div",{className:"code-actions",children:[o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:B,disabled:A||!O.name||!O.description,title:!O.name||!O.description?"Add a name and description first":"Generate code using AI",children:A?o.jsxs(o.Fragment,{children:[o.jsx($r,{size:14,className:"spinning"}),"Generating..."]}):o.jsxs(o.Fragment,{children:[o.jsx(ru,{size:14}),"Write Tool"]})}),o.jsx("span",{className:"action-hint",children:"AI will generate code based on the tool name, description, and selected state keys"})]}),o.jsx("div",{className:"code-editor",children:o.jsx(Dr,{height:"100%",language:"python",theme:"vs-dark",value:d,onChange:C,onMount:H,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12}}})}),o.jsxs("div",{className:"state-keys-panel",children:[o.jsxs("h4",{children:[o.jsx(eu,{size:14})," State Keys Used"]}),o.jsx("div",{className:"state-key-chips",children:t.app.state_keys.length===0?o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"No state keys defined. Add them in App Config."}):t.app.state_keys.map(V=>{const fe=O.state_keys_used.includes(V.name);return o.jsxs("label",{className:`state-key-chip ${fe?"selected":""}`,title:V.description,children:[o.jsx("input",{type:"checkbox",checked:fe,onChange:Se=>{const at=Se.target.checked?[...O.state_keys_used,V.name]:O.state_keys_used.filter(rr=>rr!==V.name);ne({state_keys_used:at})}}),V.name,o.jsxs("span",{style:{color:"var(--text-muted)",fontSize:11},children:["(",V.type,")"]})]},V.name)})})]})]}):y?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(lr,{size:20,style:{color:"var(--accent-secondary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:y.name}),o.jsx("span",{className:"badge badge-info",children:y.connection_type}),o.jsx("span",{className:"badge badge-muted",children:"Template"}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>ee(y),children:[o.jsx(Re,{size:14}),"Add to Project"]})]}),o.jsxs("div",{className:"known-server-preview",children:[o.jsxs("div",{className:"preview-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("p",{children:y.description})]}),o.jsxs("div",{className:"preview-section",children:[o.jsx("h4",{children:"Command"}),o.jsxs("code",{children:[y.command," ",(Bt=y.args)==null?void 0:Bt.join(" ")]})]}),y.env&&Object.keys(y.env).length>0&&o.jsxs("div",{className:"preview-section",children:[o.jsx("h4",{children:"Required Environment Variables"}),o.jsx("div",{className:"env-vars",children:Object.entries(y.env).map(([V,fe])=>o.jsxs("div",{className:"env-var",children:[o.jsx("code",{children:V}),fe?o.jsx("span",{className:"env-value",children:fe}):o.jsx("span",{className:"env-required",children:"Required"})]},V))})]}),y.tool_filter&&y.tool_filter.length>0&&o.jsxs("div",{className:"preview-section",children:[o.jsxs("h4",{children:["Available Tools (",y.tool_filter.length,")"]}),o.jsx("div",{className:"tool-badges",children:y.tool_filter.map(V=>o.jsx("span",{className:"tool-badge",children:V},V))})]}),o.jsxs("div",{className:"preview-section",children:[o.jsx("h4",{children:"Configuration Preview"}),o.jsx("pre",{className:"config-preview",children:JSON.stringify(y,null,2)})]})]})]}):M?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(lr,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:M.name}),o.jsx("span",{className:"badge badge-info",children:M.connection_type}),z&&o.jsx("span",{className:"unsaved-badge",children:"Unsaved"}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:bt,disabled:T,title:"Test connection and discover available tools",children:[T?o.jsx($r,{size:14,className:"spin"}):o.jsx(Ma,{size:14}),T?"Testing...":"Test Connection"]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:Ze,disabled:!z,children:[o.jsx(tu,{size:14}),"Save"]})]}),E&&o.jsx("div",{className:`mcp-test-result ${E.success?"success":"error"}`,children:E.success?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"test-result-header",children:["✓ Connected! Found ",E.tools.length," tools"]}),E.tools.length>0&&o.jsxs("div",{className:"test-result-tools",children:[o.jsx("strong",{children:"Available tools:"}),o.jsx("ul",{children:E.tools.map(V=>o.jsxs("li",{children:[o.jsx("code",{children:V.name}),V.description&&o.jsxs("span",{children:[" — ",V.description]})]},V.name))}),o.jsx("p",{className:"hint",children:'The tool_filter has been updated with these tools. Click "Save" to apply.'})]})]}):o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"test-result-header",children:"✗ Connection failed"}),o.jsx("div",{className:"test-result-error",children:E.error})]})}),o.jsx("div",{className:"mcp-info",children:o.jsx("p",{children:'Configure your MCP server using JSON. Click "Test Connection" to verify and discover available tools.'})}),o.jsx("div",{className:"code-editor",children:o.jsx(Dr,{height:"100%",language:"json",theme:"vs-dark",value:h,onChange:pe,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},formatOnPaste:!0}})}),o.jsxs("div",{className:"mcp-help",children:[o.jsx("h4",{children:"Schema Reference"}),o.jsxs("div",{className:"schema-fields",children:[o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"name"}),o.jsx("span",{children:"Unique identifier for this server"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"description"}),o.jsx("span",{children:"Human-readable description"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"connection_type"}),o.jsx("span",{children:'"stdio" | "sse" | "http"'})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"command"}),o.jsx("span",{children:"Command to run (for stdio)"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"args"}),o.jsx("span",{children:"Array of command arguments"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"env"}),o.jsx("span",{children:"Environment variables object"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"url"}),o.jsx("span",{children:"Server URL (for sse/http)"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"tool_filter"}),o.jsx("span",{children:"Array of tool names to include (null/omit = all tools, [] = no tools)"})]})]})]})]}):o.jsxs("div",{className:"empty-state",children:[o.jsx(An,{size:48}),o.jsxs("p",{children:["Select a tool to view",o.jsx("br",{}),"or create a new custom tool"]})]})})]})}function lS(){return`callback_${Date.now().toString(36)}`}function Kp(e){return/^[a-zA-Z0-9_]+$/.test(e)}function Zg(e){switch(e){case"before_agent":case"after_agent":return`from google.adk.agents.callback_context import CallbackContext
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
`;default:return Zg("before_agent")}}function sS({onSelectCallback:e}){var A,D;const{project:t,updateProject:n,addCustomCallback:r,updateCustomCallback:i,removeCustomCallback:l}=vt(),[s,a]=S.useState(""),[c,u]=S.useState(null),[d,p]=S.useState(null),[f,m]=S.useState(!1),k=S.useRef(null);if(!t)return null;const w=t.custom_callbacks||[],P=w.find(T=>T.id===c);function g(T){u(T),e==null||e(T)}S.useEffect(()=>{P?(a(P.code),p(null)):a("")},[c,P]);function h(){const T=lS(),v={id:T,name:"new_callback",description:"",module_path:"callbacks.custom",code:Zg("before_agent"),state_keys_used:[]};r(v),g(T)}function x(T,v){v.stopPropagation(),confirm("Delete this callback?")&&(l(T),c===T&&(e==null||e(null),u(null),a("")))}function z(){if(!c)return;const T=w.find(I=>I.id===c);if(!T)return;const v=T.name.trim();if(!v){alert("Please enter a name");return}if(!Kp(v)){p("Name must contain only alphanumeric characters and underscores");return}if(w.find(I=>I.name===v&&I.id!==T.id)){p("A callback with this name already exists");return}i(T.id,{code:s,name:v,description:T.description,module_path:T.module_path,state_keys_used:T.state_keys_used}),p(null)}function j(T,v){k.current=v;try{Xg(v,{endpoint:"/api/code-completion",language:"python"})}catch(E){console.warn("Failed to register Monacopilot completion:",E)}}async function y(){if(P){m(!0);try{let T="before_agent";const v=P.name.toLowerCase(),E=P.description.toLowerCase();v.includes("after_agent")||E.includes("after agent")?T="after_agent":v.includes("before_model")||E.includes("before model")?T="before_model":v.includes("after_model")||E.includes("after model")?T="after_model":v.includes("before_tool")||E.includes("before tool")?T="before_tool":v.includes("after_tool")||E.includes("after tool")?T="after_tool":(v.includes("before_agent")||E.includes("before agent"))&&(T="before_agent");const I=await Fh(t.id,P.name,P.description,T,P.state_keys_used);I.success&&I.code?(a(I.code),i(P.id,{code:I.code})):(console.error("Failed to generate callback code:",I.error),alert("Failed to generate callback code: "+(I.error||"Unknown error")))}catch(T){console.error("Error generating callback code:",T),alert("Error generating callback code: "+T.message)}finally{m(!1)}}}const _=((D=(A=t.app)==null?void 0:A.state_keys)==null?void 0:D.map(T=>T.name))||[];return o.jsxs("div",{className:"tools-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"tools-sidebar",children:[o.jsxs("div",{className:"tools-sidebar-header",children:[o.jsx("h3",{children:"Callbacks"}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:h,title:"Add Callback",children:o.jsx(Re,{size:16})})]}),o.jsx("div",{className:"tools-list",children:w.length===0?o.jsx("div",{style:{padding:"16px",color:"var(--text-secondary)",fontSize:"14px"},children:"No callbacks yet. Click + to add one."}):w.map(T=>o.jsxs("div",{className:`tool-item ${c===T.id?"selected":""}`,onClick:()=>g(T.id),children:[o.jsxs("div",{style:{flex:1},children:[o.jsx("div",{className:"tool-item-name",children:T.name}),T.description&&o.jsx("div",{className:"tool-item-type",style:{fontSize:"11px",color:"var(--text-secondary)",marginTop:"2px"},children:T.description})]}),o.jsx("div",{className:"tool-item-actions",children:o.jsx("button",{className:"btn btn-icon btn-sm",onClick:v=>x(T.id,v),title:"Delete",children:o.jsx(Pe,{size:14})})})]},T.id))})]}),o.jsx("div",{className:"tools-editor",children:P?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"tools-editor-header",children:[o.jsx("h3",{children:"Edit Callback"}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:z,children:[o.jsx(tu,{size:16,style:{marginRight:"6px"}}),"Save"]})]}),o.jsxs("div",{className:"tools-editor-content",style:{padding:"16px",overflowY:"auto"},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Name"}),o.jsx("input",{type:"text",value:P.name,onChange:T=>{const v=T.target.value;i(P.id,{name:v}),d&&Kp(v)&&p(null)},className:d?"error":""}),d&&o.jsx("div",{className:"error-message",children:d})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Description"}),o.jsx("textarea",{value:P.description,onChange:T=>i(P.id,{description:T.target.value}),rows:2,placeholder:"Describe what this callback does..."})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Module Path"}),o.jsx("input",{type:"text",value:P.module_path,onChange:T=>i(P.id,{module_path:T.target.value}),placeholder:"callbacks.custom"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"State Keys Used"}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"8px"},children:_.map(T=>{const v=P.state_keys_used.includes(T);return o.jsxs("button",{type:"button",className:`btn btn-sm ${v?"btn-primary":"btn-secondary"}`,onClick:()=>{const E=v?P.state_keys_used.filter(I=>I!==T):[...P.state_keys_used,T];i(P.id,{state_keys_used:E})},children:[o.jsx(eu,{size:12,style:{marginRight:"4px"}}),T]},T)})}),_.length===0&&o.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"12px",marginTop:"4px"},children:"No state keys defined in App Config"})]}),o.jsxs("div",{className:"form-group",children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[o.jsx("label",{children:"Code"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:y,disabled:f||!P.name,title:P.name?"Generate code using AI":"Add a name first",children:f?o.jsxs(o.Fragment,{children:[o.jsx($r,{size:14,className:"spinning"}),"Generating..."]}):o.jsxs(o.Fragment,{children:[o.jsx(ru,{size:14}),"Generate"]})})]}),o.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"8px"},children:"AI will generate code based on the callback name, description, and selected state keys"}),o.jsx("div",{className:"code-editor-container",children:o.jsx(Dr,{height:"100%",language:"python",theme:"vs-dark",value:s,onChange:T=>a(T||""),onMount:j,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0}})})]})]})]}):o.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)"},children:"Select a callback to edit, or create a new one"})})]})}const Qp={agent_start:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},agent_end:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},tool_call:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},tool_result:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},model_call:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},model_response:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},state_change:{bg:"#3d0d1f",fg:"#fda4af",border:"#f43f5e"},transfer:{bg:"#0d2d3d",fg:"#7dd3fc",border:"#0ea5e9"},callback_start:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},callback_end:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"}},aS={agent_start:Ia,agent_end:Ia,tool_call:Dt,tool_result:Dt,model_call:Xc,model_response:hl,state_change:rn,transfer:tg,callback_start:An,callback_end:An};function cS(e){var t,n,r,i,l,s,a,c,u,d,p,f,m,k,w,P,g,h,x,z,j;switch(e.event_type){case"agent_start":return`START ${e.agent_name}`;case"agent_end":return(t=e.data)!=null&&t.error?`END ${e.agent_name} [ERROR]`:`END ${e.agent_name}`;case"tool_call":const _=Object.entries(((n=e.data)==null?void 0:n.args)||{}).map(([R,b])=>{const U=b!=null?JSON.stringify(b):"null";return`${R}=${U.slice(0,20)}`}).join(", ")||"";return`CALL ${((r=e.data)==null?void 0:r.tool_name)||"unknown"}(${_.slice(0,60)}${_.length>60?"...":""})`;case"tool_result":const A=(i=e.data)==null?void 0:i.result;let D="";if((s=(l=A==null?void 0:A.content)==null?void 0:l[0])!=null&&s.text)D=String(A.content[0].text).slice(0,60);else if(typeof A=="string")D=A.slice(0,60);else if(A!=null){const R=JSON.stringify(A);D=R?R.slice(0,60):""}else D="";return`RESULT ${((a=e.data)==null?void 0:a.tool_name)||"unknown"} → ${D}${D.length>=60?"...":""}`;case"model_call":return`LLM_REQ ${((u=(c=e.data)==null?void 0:c.contents)==null?void 0:u.length)||0} msgs, ${((d=e.data)==null?void 0:d.tool_count)||0} tools`;case"model_response":const T=((f=(p=e.data)==null?void 0:p.response_content)==null?void 0:f.parts)||((m=e.data)==null?void 0:m.parts)||[],v=T.find(R=>(R==null?void 0:R.type)==="function_call");if(v)return`LLM_RSP → ${v.name||"unknown"}()`;const E=T.find(R=>(R==null?void 0:R.type)==="text");if(E!=null&&E.text){const R=String(E.text);return`LLM_RSP "${R.slice(0,50)}${R.length>50?"...":""}"`}return`LLM_RSP (${((k=e.data)==null?void 0:k.finish_reason)||"complete"})`;case"state_change":return`STATE ${Object.keys(((w=e.data)==null?void 0:w.state_delta)||{}).join(", ")}`;case"transfer":return`TRANSFER → ${((P=e.data)==null?void 0:P.target)||"unknown"}`;case"callback_start":const q=((g=e.data)==null?void 0:g.callback_name)||"unknown",F=((h=e.data)==null?void 0:h.callback_type)||"";return`CALLBACK START ${F?`[${F}]`:""} ${q}`;case"callback_end":const Q=((x=e.data)==null?void 0:x.callback_name)||"unknown",O=((z=e.data)==null?void 0:z.callback_type)||"",M=(j=e.data)!=null&&j.error?" [ERROR]":"";return`CALLBACK END ${O?`[${O}]`:""} ${Q}${M}`;default:return e.event_type.toUpperCase()}}function uS(e,t){const n=e-t;return n<1?`+${(n*1e3).toFixed(0)}ms`:n<60?`+${n.toFixed(2)}s`:`+${Math.floor(n/60)}m${(n%60).toFixed(0)}s`}function dS({event:e}){var l,s,a,c,u,d,p,f,m,k,w,P,g,h,x,z;const[t,n]=S.useState(new Set(["instruction","messages","result","response","state_delta","data"])),r=j=>{const y=new Set(t);y.has(j)?y.delete(j):y.add(j),n(y)},i=(j,y=0,_=!1)=>{const A="  ".repeat(y),D="  ".repeat(y+1);if(j===null)return o.jsx("span",{className:"json-null",children:"null"});if(j===void 0)return o.jsx("span",{className:"json-undefined",children:"undefined"});if(typeof j=="boolean")return o.jsx("span",{className:"json-boolean",children:j.toString()});if(typeof j=="number")return o.jsx("span",{className:"json-number",children:j});if(typeof j=="string"){const T=j.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\t/g,"\\t");return T.length>300&&y>0?o.jsxs("span",{className:"json-string",children:['"',T.slice(0,300),'..." ',o.jsxs("span",{className:"json-truncated",children:["(",j.length," chars)"]})]}):o.jsxs("span",{className:"json-string",children:['"',T,'"']})}if(Array.isArray(j))return j.length===0?o.jsx("span",{className:"json-bracket",children:"[]"}):j.every(v=>v===null||typeof v!="object")&&j.length<=3?o.jsxs("span",{className:"json-inline",children:[o.jsx("span",{className:"json-bracket",children:"["}),j.map((v,E)=>o.jsxs("span",{children:[i(v,y+1,!0),E<j.length-1&&o.jsx("span",{className:"json-comma",children:", "})]},E)),o.jsx("span",{className:"json-bracket",children:"]"})]}):o.jsxs("span",{className:"json-block",children:[o.jsx("span",{className:"json-bracket",children:"["}),j.map((v,E)=>o.jsxs("span",{children:[`
`+D,i(v,y+1),E<j.length-1&&o.jsx("span",{className:"json-comma",children:","})]},E)),`
`+A,o.jsx("span",{className:"json-bracket",children:"]"})]});if(typeof j=="object"){const T=Object.entries(j);return T.length===0?o.jsx("span",{className:"json-bracket",children:"{}"}):T.length<=2&&T.every(([,E])=>E===null||typeof E!="object")&&_?o.jsxs("span",{className:"json-inline",children:[o.jsx("span",{className:"json-bracket",children:"{"}),T.map(([E,I],q)=>o.jsxs("span",{children:[o.jsxs("span",{className:"json-key",children:['"',E,'"']}),o.jsx("span",{className:"json-colon",children:": "}),i(I,y+1,!0),q<T.length-1&&o.jsx("span",{className:"json-comma",children:", "})]},E)),o.jsx("span",{className:"json-bracket",children:"}"})]}):o.jsxs("span",{className:"json-block",children:[o.jsx("span",{className:"json-bracket",children:"{"}),T.map(([E,I],q)=>o.jsxs("span",{children:[`
`+D,o.jsxs("span",{className:"json-key",children:['"',E,'"']}),o.jsx("span",{className:"json-colon",children:": "}),i(I,y+1),q<T.length-1&&o.jsx("span",{className:"json-comma",children:","})]},E)),`
`+A,o.jsx("span",{className:"json-bracket",children:"}"})]})}return String(j)};return o.jsxs("div",{className:"event-detail",children:[o.jsxs("div",{className:"detail-header",children:[o.jsx("span",{className:"detail-type",children:e.event_type}),o.jsx("span",{className:"detail-agent",children:e.agent_name}),o.jsx("span",{className:"detail-time",children:new Date(e.timestamp*1e3).toISOString()})]}),o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>r("data"),children:[t.has("data")?o.jsx(kt,{size:12}):o.jsx(wt,{size:12}),o.jsx("span",{children:"Event Data"})]}),t.has("data")&&o.jsx("div",{className:"section-content json-viewer",children:i(e.data)})]}),e.event_type==="agent_start"&&((l=e.data)==null?void 0:l.instruction)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>r("instruction"),children:[t.has("instruction")?o.jsx(kt,{size:12}):o.jsx(wt,{size:12}),o.jsx("span",{children:"Instruction"}),o.jsxs("span",{className:"char-count",children:[e.data.instruction.length," chars"]})]}),t.has("instruction")&&o.jsx("div",{className:"section-content",children:o.jsx("pre",{className:"instruction-text",children:e.data.instruction})})]}),e.event_type==="model_call"&&((s=e.data)==null?void 0:s.contents)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>r("messages"),children:[t.has("messages")?o.jsx(kt,{size:12}):o.jsx(wt,{size:12}),o.jsxs("span",{children:["Messages (",e.data.contents.length,")"]})]}),t.has("messages")&&o.jsx("div",{className:"section-content",children:e.data.contents.map((j,y)=>{var _;return o.jsxs("div",{className:"message-item",children:[o.jsx("span",{className:`message-role ${j.role}`,children:j.role}),o.jsx("div",{className:"message-parts",children:(_=j.parts)==null?void 0:_.map((A,D)=>o.jsxs("div",{className:"message-part",children:[A.text&&o.jsx("pre",{children:A.text}),A.function_call&&o.jsxs("div",{className:"function-call",children:[o.jsx("strong",{children:A.function_call.name}),o.jsx("pre",{children:JSON.stringify(A.function_call.args,null,2)})]}),A.function_response&&o.jsxs("div",{className:"function-response",children:[o.jsx("strong",{children:A.function_response.name}),o.jsx("pre",{children:JSON.stringify(A.function_response.response,null,2)})]})]},D))})]},y)})})]}),e.event_type==="tool_result"&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>r("result"),children:[t.has("result")?o.jsx(kt,{size:12}):o.jsx(wt,{size:12}),o.jsx("span",{children:"Tool Result"})]}),t.has("result")&&o.jsx("div",{className:"section-content",children:o.jsx("pre",{className:"result-content",children:((d=(u=(c=(a=e.data)==null?void 0:a.result)==null?void 0:c.content)==null?void 0:u[0])==null?void 0:d.text)||(typeof((p=e.data)==null?void 0:p.result)=="string"?e.data.result:JSON.stringify((f=e.data)==null?void 0:f.result,null,2))})})]}),e.event_type==="model_response"&&((m=e.data)==null?void 0:m.parts)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>r("response"),children:[t.has("response")?o.jsx(kt,{size:12}):o.jsx(wt,{size:12}),o.jsxs("span",{children:["Response (",e.data.parts.length," part",e.data.parts.length!==1?"s":"",")"]}),e.data.token_counts&&o.jsxs("span",{className:"token-badge",children:[e.data.token_counts.input,"↑ ",e.data.token_counts.output,"↓"]})]}),t.has("response")&&o.jsx("div",{className:"section-content",children:e.data.parts.map((j,y)=>o.jsxs("div",{className:"response-part",children:[j.type==="text"&&j.text&&o.jsx("pre",{className:"response-text",children:j.text}),j.type==="function_call"&&o.jsxs("div",{className:"function-call",children:[o.jsxs("strong",{children:["→ ",j.name,"()"]}),j.args&&Object.keys(j.args).length>0&&o.jsx("pre",{children:JSON.stringify(j.args,null,2)})]}),j.thought&&o.jsx("div",{className:"thought-indicator",children:"💭 Thinking"})]},y))})]}),(e.event_type==="callback_start"||e.event_type==="callback_end")&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>r("callback_info"),children:[t.has("callback_info")?o.jsx(kt,{size:12}):o.jsx(wt,{size:12}),o.jsx("span",{children:"Callback Information"})]}),t.has("callback_info")&&o.jsxs("div",{className:"section-content",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Name:"})," ",((k=e.data)==null?void 0:k.callback_name)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Type:"})," ",((w=e.data)==null?void 0:w.callback_type)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Module Path:"})," ",((P=e.data)==null?void 0:P.module_path)||"unknown"]}),((g=e.data)==null?void 0:g.error)&&o.jsxs("div",{style:{color:"#ef4444",marginTop:"8px"},children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Error:"})," ",e.data.error]}),((h=e.data)==null?void 0:h.error_type)&&o.jsxs("div",{style:{marginTop:"4px",fontSize:"0.9em",opacity:.8},children:[o.jsx("strong",{children:"Type:"})," ",e.data.error_type]}),((x=e.data)==null?void 0:x.stack_trace)&&o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Stack Trace:"}),o.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"300px",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:e.data.stack_trace})]})]})]})]}),e.event_type==="state_change"&&((z=e.data)==null?void 0:z.state_delta)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>r("state_delta"),children:[t.has("state_delta")?o.jsx(kt,{size:12}):o.jsx(wt,{size:12}),o.jsxs("span",{children:["State Changes (",Object.keys(e.data.state_delta).length,")"]})]}),t.has("state_delta")&&o.jsx("div",{className:"section-content",children:Object.entries(e.data.state_delta).map(([j,y])=>o.jsxs("div",{className:"state-delta-item",children:[o.jsx("div",{className:"state-delta-key",children:j}),o.jsx("pre",{className:"state-delta-value",children:typeof y=="string"?y:JSON.stringify(y,null,2)})]},j))})]})]})}function pS({content:e,title:t,onClose:n}){return o.jsxs("div",{className:"modal-overlay",onClick:n,children:[o.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[o.jsxs("div",{className:"modal-header",children:[o.jsx("h3",{children:t}),o.jsx("button",{className:"modal-close",onClick:n,children:"×"})]}),o.jsx("div",{className:"modal-body markdown-content",children:o.jsx(Kg,{children:e})})]}),o.jsx("style",{children:`
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
      `})]})}function fS({events:e,selectedEventIndex:t,project:n}){const[r,i]=S.useState(null),l=S.useMemo(()=>{var u;const a={};return(u=n==null?void 0:n.app)!=null&&u.state_keys&&n.app.state_keys.forEach(d=>{a[d.name]={value:void 0,timestamp:null,defined:!0,description:d.description,type:d.type}}),n!=null&&n.agents&&n.agents.forEach(d=>{if(d.type==="LlmAgent"&&d.output_key){const p=d.output_key;a[p]||(a[p]={value:void 0,timestamp:null,defined:!0,description:`Output from ${d.name}`,type:"string"})}}),(t!==null?e.slice(0,t+1):e).filter(d=>d.event_type==="state_change").forEach(d=>{var p;(p=d.data)!=null&&p.state_delta&&Object.entries(d.data.state_delta).forEach(([f,m])=>{var k;a[f]={...a[f],value:m,timestamp:d.timestamp,defined:((k=a[f])==null?void 0:k.defined)??!1}})}),a},[e,t,n]),s=Object.entries(l);return o.jsxs(o.Fragment,{children:[r&&o.jsx(pS,{content:r.content,title:r.title,onClose:()=>i(null)}),o.jsxs("div",{className:"state-snapshot",children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"state-header",children:t!==null?`State after event #${t}`:e.length>0?"State at end of run":"Defined State Keys"}),s.length===0?o.jsx("div",{className:"state-empty",children:"No state keys defined"}):s.map(([a,{value:c,timestamp:u,defined:d,description:p,type:f}])=>o.jsxs("div",{className:`state-entry ${c===void 0?"unset":""}`,children:[o.jsxs("div",{className:"state-key",children:[a,f&&o.jsxs("span",{className:"state-type",children:["(",f,")"]})]}),o.jsx("div",{className:"state-value",onClick:()=>{if(c!==void 0){const m=typeof c=="string"?c:JSON.stringify(c,null,2);i({content:m,title:a})}},style:{cursor:c!==void 0?"pointer":"default"},title:c!==void 0?"Click to view in markdown viewer":void 0,children:c===void 0?"(not set)":typeof c=="string"?c:JSON.stringify(c,null,2)}),p&&o.jsx("div",{className:"state-desc",children:p}),u&&o.jsx("div",{className:"state-time",children:new Date(u*1e3).toLocaleTimeString()})]},a))]})]})}let Ya=null,Xa=null;(async()=>{try{Ya=(await ng(()=>import("./jq-D3X35J15.js").then(t=>t.j),[])).default}catch(e){console.warn("jq-web failed to load:",e.message),Xa=e.message}})();function Is(e){if(!e)return{text:"",isError:!1};if(e.success===!1)return{text:e.error||"Unknown error",isError:!0};let t=e.result||e;if(typeof t=="string")try{const n=t.replace(/'/g,'"').replace(/True/g,"true").replace(/False/g,"false").replace(/None/g,"null");t=JSON.parse(n)}catch{return{text:t,isError:!1}}return t.content&&Array.isArray(t.content)?{text:t.content.filter(r=>r.type==="text").map(r=>r.text).join(`
`),isError:t.isError===!0}:{text:typeof t=="string"?t:JSON.stringify(t,null,2),isError:!1}}function Gp(e,t){if(!t||!t.trim())return e;const n=t.trim();let r=e;try{r=JSON.parse(e)}catch{}if(n.startsWith("js:")){const i=n.slice(3).trim();try{const s=new Function("value","data",`return ${i}`)(e,r);return typeof s=="string"?s:JSON.stringify(s,null,2)}catch(l){return`[JS error: ${l}]`}}if(Ya)try{const i=Ya.json(r,n);return i==null?"[No match]":typeof i=="string"?i:JSON.stringify(i,null,2)}catch(i){if(!n.startsWith("."))try{const s=new Function("value","data",`return ${n}`)(e,r);return typeof s=="string"?s:JSON.stringify(s,null,2)}catch{}return`[jq error: ${i.message||i}]`}else{if(Xa){if(n.startsWith(".")&&!n.includes("|"))try{const i=n.slice(1).split(".").filter(Boolean);let l=r;for(const s of i){const a=s.match(/^(\w+)?\[(\d+)\]$/);a?(a[1]&&(l=l[a[1]]),l=l[parseInt(a[2])]):l=l[s]}return typeof l=="string"?l:JSON.stringify(l,null,2)}catch{}try{const l=new Function("value","data",`return ${n}`)(e,r);return typeof l=="string"?l:JSON.stringify(l,null,2)}catch(i){return`[jq not loaded: ${Xa}. JS fallback failed: ${i.message}]`}}return"[jq loading...]"}}function mS({project:e,selectedEventIndex:t}){var B;const{watches:n,updateWatch:r,addWatch:i,removeWatch:l,runEvents:s}=vt(),[a,c]=S.useState(!1),[u,d]=S.useState(null),[p,f]=S.useState({}),[m,k]=S.useState(new Set),[w,P]=S.useState(""),[g,h]=S.useState(""),[x,z]=S.useState({}),[j,y]=S.useState(""),[_,A]=S.useState([]),[D,T]=S.useState(null),[v,E]=S.useState(null),[I,q]=S.useState(!1);S.useEffect(()=>{Yc().then(A).catch(console.error)},[]);const F=S.useMemo(()=>{const L=e.mcp_servers||[],H=new Set(L.map(ee=>ee.name)),X=_.filter(ee=>!H.has(ee.name));return[...L,...X]},[e.mcp_servers,_]),Q=S.useCallback(async L=>{if(!(p[L]||m.has(L))){k(H=>new Set([...H,L]));try{const H=await xe(`/projects/${e.id}/mcp-servers/${encodeURIComponent(L)}/test-connection`,{method:"POST"});H.success&&f(X=>({...X,[L]:H.tools}))}catch(H){console.error("Failed to load tools:",H)}finally{k(H=>{const X=new Set(H);return X.delete(L),X})}}},[e.id,p,m]);S.useEffect(()=>{var ee;if(u)return;if(!w||!g){z({});return}const H=(p[w]||[]).find(se=>se.name===g);if(!((ee=H==null?void 0:H.parameters)!=null&&ee.properties)){z({});return}const X={};Object.entries(H.parameters.properties).forEach(([se,pe])=>{pe.type==="string"?X[se]=pe.default||"":pe.type==="number"||pe.type==="integer"?X[se]=pe.default||0:pe.type==="boolean"?X[se]=pe.default||!1:X[se]=pe.default||null}),z(X)},[w,g,p,u]);const O=()=>{d(null),P(""),h(""),z({}),y(""),T(null),E(null),c(!0)},M=L=>{if(d(L.id),P(L.serverName),h(L.toolName),z({...L.args}),y(L.transform||""),L.result){const{text:H}=Is(L.result);T(H),E(null)}else T(null),E(null);p[L.serverName]||Q(L.serverName),c(!0)},R=async()=>{if(!(!w||!g)){q(!0),E(null);try{const L=await xe(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:w,tool_name:g,arguments:x})}),{text:H,isError:X}=Is(L);X?(E(H),T(null)):(T(H),E(null))}catch(L){E(String(L)),T(null)}finally{q(!1)}}},b=S.useMemo(()=>D?!j||!j.trim()?D:Gp(D,j):null,[D,j]),U=()=>{if(!(!w||!g)){if(u){r(u,{serverName:w,toolName:g,args:{...x},transform:j||void 0});const L=n.find(H=>H.id===u);L&&N({...L,serverName:w,toolName:g,args:x,transform:j||void 0,history:L.history||[]})}else{const L={id:`watch-${Date.now()}`,serverName:w,toolName:g,args:{...x},transform:j||void 0,history:[]};i(L),N(L)}c(!1)}},Y=L=>{l(L)},N=S.useCallback(async(L,H)=>{r(L.id,{isLoading:!0,error:void 0});const X=H??s.length-1,ee=Date.now();try{const se=await xe(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:L.serverName,tool_name:L.toolName,arguments:L.args})}),pe={eventIndex:X,timestamp:ee,result:se},Ze=[...L.history||[],pe];r(L.id,{result:se,isLoading:!1,lastRun:ee,history:Ze})}catch(se){const pe={eventIndex:X,timestamp:ee,error:String(se)},Ze=[...L.history||[],pe];r(L.id,{error:String(se),isLoading:!1,lastRun:ee,history:Ze})}},[e.id,r,s.length]),ne=()=>{n.forEach(L=>N(L))},C=S.useMemo(()=>!w||!g?null:(p[w]||[]).find(H=>H.name===g),[w,g,p]);return o.jsxs("div",{className:"tool-watch-panel",children:[o.jsxs("div",{className:"watch-header",children:[o.jsx(Hi,{size:14}),o.jsx("span",{children:"Tool Watch"}),o.jsx("span",{className:"watch-auto-badge",title:"Watches auto-refresh on every event",children:"⚡ Auto"}),o.jsxs("div",{className:"watch-actions",children:[o.jsx("button",{className:"watch-btn",onClick:ne,title:"Refresh all",children:o.jsx(vn,{size:12})}),o.jsx("button",{className:"watch-btn",onClick:O,title:"Add watch",children:o.jsx(Re,{size:12})})]})]}),n.length===0?o.jsxs("div",{className:"watch-empty",children:[o.jsx(Hi,{size:20,style:{opacity:.3}}),o.jsx("span",{children:"No watch expressions"}),o.jsxs("button",{className:"add-watch-btn",onClick:O,children:[o.jsx(Re,{size:12})," Add Tool Watch"]})]}):o.jsx("div",{className:"watch-list",children:n.map(L=>{let H=L.result,X=L.error;if(t!==null&&L.history&&L.history.length>0){const bt=L.history.filter(Ve=>Ve.eventIndex<=t);if(bt.length>0){const Ve=bt[bt.length-1];H=Ve.result,X=Ve.error}else H=void 0,X=void 0}const{text:ee,isError:se}=H?Is(H):{text:"",isError:!1},pe=H?Gp(ee,L.transform):"",Ze=X||se;return o.jsxs("div",{className:`watch-item ${Ze?"error":""}`,children:[o.jsxs("div",{className:"watch-item-header",children:[o.jsxs("span",{className:"watch-expr",children:[o.jsx("span",{className:"watch-server",children:L.serverName}),o.jsx("span",{className:"watch-tool",children:L.toolName}),Object.keys(L.args).length>0&&o.jsxs("span",{className:"watch-args",children:["(",Object.entries(L.args).map(([bt,Ve])=>`${bt}=${JSON.stringify(Ve)}`).join(", "),")"]}),t!==null&&o.jsxs("span",{className:"watch-time-indicator",children:["@",t]})]}),o.jsxs("div",{className:"watch-item-actions",children:[o.jsx("button",{onClick:()=>M(L),title:"Edit watch",children:o.jsx(Dt,{size:10})}),o.jsx("button",{onClick:()=>N(L),title:"Refresh",children:L.isLoading?o.jsx(vn,{size:10,className:"spin"}):o.jsx(vn,{size:10})}),o.jsx("button",{onClick:()=>Y(L.id),title:"Remove",children:o.jsx(Pe,{size:10})})]})]}),o.jsx("div",{className:"watch-result",children:L.isLoading?o.jsx("span",{className:"loading",children:"Loading..."}):X?o.jsx("span",{className:"error",children:X}):H?o.jsx("pre",{className:se?"error-text":"",children:pe}):o.jsx("span",{className:"no-result",children:t!==null?"No data at this event":"Not yet run"})})]},L.id)})}),a&&o.jsx("div",{className:"watch-dialog-overlay",onClick:()=>c(!1),children:o.jsxs("div",{className:"watch-dialog",onClick:L=>L.stopPropagation(),children:[o.jsxs("div",{className:"dialog-header",children:[o.jsx("span",{children:u?"Edit Watch":"Add Tool Watch"}),o.jsx("button",{onClick:()=>c(!1),children:o.jsx(eg,{size:14})})]}),o.jsxs("div",{className:"dialog-body",children:[o.jsxs("div",{className:"form-row",children:[o.jsx("label",{children:"MCP Server"}),o.jsxs("select",{value:w,onChange:L=>{P(L.target.value),u||h(""),L.target.value&&Q(L.target.value)},children:[o.jsx("option",{value:"",children:"Select server..."}),F.map(L=>o.jsx("option",{value:L.name,children:L.name},L.name))]})]}),o.jsxs("div",{className:"form-row",children:[o.jsx("label",{children:"Tool"}),o.jsxs("select",{value:g,onChange:L=>h(L.target.value),disabled:!w||m.has(w),children:[o.jsx("option",{value:"",children:m.has(w)?"Loading tools...":"Select tool..."}),(p[w]||[]).map(L=>o.jsx("option",{value:L.name,children:L.name},L.name))]})]}),(C==null?void 0:C.description)&&o.jsx("div",{className:"tool-desc",children:C.description}),((B=C==null?void 0:C.parameters)==null?void 0:B.properties)&&Object.keys(C.parameters.properties).length>0&&o.jsxs("div",{className:"tool-args",children:[o.jsx("label",{children:"Arguments"}),Object.entries(C.parameters.properties).map(([L,H])=>{var X,ee;return o.jsxs("div",{className:"arg-row",children:[o.jsxs("span",{className:"arg-name",children:[L,((X=C.parameters.required)==null?void 0:X.includes(L))&&o.jsx("span",{className:"required",children:"*"})]}),o.jsx("input",{type:H.type==="number"||H.type==="integer"?"number":"text",value:typeof x[L]=="object"?JSON.stringify(x[L]):x[L]??"",onChange:se=>z(pe=>({...pe,[L]:se.target.value})),placeholder:((ee=H.description)==null?void 0:ee.slice(0,40))||L})]},L)})]}),w&&g&&o.jsxs("div",{className:"test-section",children:[o.jsxs("div",{className:"test-header",children:[o.jsx("label",{children:"Test & Preview"}),o.jsxs("button",{className:"test-btn",onClick:R,disabled:I,children:[I?o.jsx(vn,{size:12,className:"spin"}):o.jsx(En,{size:12}),I?"Running...":"Test Run"]})]}),v&&o.jsxs("div",{className:"test-result error",children:[o.jsx("span",{className:"test-label",children:"Error:"}),o.jsx("pre",{children:v})]}),D&&o.jsxs("div",{className:"test-result",children:[o.jsx("span",{className:"test-label",children:"Raw Result:"}),o.jsx("pre",{children:D})]})]}),o.jsxs("div",{className:"form-row transform-row",children:[o.jsx("label",{children:"Transform (optional)"}),o.jsx("input",{type:"text",value:j,onChange:L=>y(L.target.value),placeholder:"e.g., .items[0].name or .content[].text"}),o.jsxs("div",{className:"transform-hints",children:[o.jsx("span",{className:"hint-title",children:"jq:"}),o.jsx("code",{onClick:()=>y(".items[0].name"),children:".items[0].name"}),o.jsx("code",{onClick:()=>y(".content[].text"),children:".content[].text"}),o.jsx("code",{onClick:()=>y(".result.content[0].text"),children:".result.content[0].text"}),o.jsx("code",{onClick:()=>y('.[] | select(.status == "active")'),children:".[] | select()"}),o.jsx("span",{className:"hint-title",children:"JS:"}),o.jsx("code",{onClick:()=>y("js:value.split('\\n')[0]"),children:"js:value.split('\\n')[0]"}),o.jsx("code",{onClick:()=>y("js:data.length"),children:"js:data.length"})]})]}),D&&j&&o.jsxs("div",{className:"transform-preview",children:[o.jsx("span",{className:"test-label",children:"Transform Preview:"}),o.jsx("pre",{className:b!=null&&b.startsWith("[Transform error")?"error":"",children:b})]})]}),o.jsxs("div",{className:"dialog-footer",children:[o.jsx("button",{className:"cancel-btn",onClick:()=>c(!1),children:"Cancel"}),o.jsx("button",{className:"add-btn",onClick:U,disabled:!w||!g,children:u?"Save Changes":"Add Watch"})]})]})})]})}function hS(){var rr;const{project:e,isRunning:t,setIsRunning:n,runEvents:r,addRunEvent:i,clearRunEvents:l,clearWatchHistories:s,runAgentId:a,setRunAgentId:c,watches:u,updateWatch:d,currentSessionId:p,setCurrentSessionId:f}=vt(),[m,k]=S.useState(""),[w,P]=S.useState(null),[g,h]=S.useState(null),[x,z]=S.useState(null),[j,y]=S.useState(""),[_,A]=S.useState(new Set(["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_start","callback_end"])),[D,T]=S.useState(!0),[v,E]=S.useState(!0),[I,q]=S.useState(!1),[F,Q]=S.useState(360),[O,M]=S.useState(!1),[R,b]=S.useState([]),[U,Y]=S.useState(null),[N,ne]=S.useState(!1),C=S.useRef(0),B=S.useCallback(async(W,re)=>{if(!e)return;d(W.id,{isLoading:!0,error:void 0});const oe=re??r.length-1,ce=Date.now();try{const $=await xe(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:W.serverName,tool_name:W.toolName,arguments:W.args})}),K={eventIndex:oe,timestamp:ce,result:$},ie=[...W.history||[],K];d(W.id,{result:$,isLoading:!1,lastRun:ce,history:ie})}catch($){const K={eventIndex:oe,timestamp:ce,error:String($)},ie=[...W.history||[],K];d(W.id,{error:String($),isLoading:!1,lastRun:ce,history:ie})}},[e==null?void 0:e.id,d,r.length]);S.useEffect(()=>{if(r.length>C.current&&u.length>0){const W=r.length-1;u.forEach(re=>{re.isLoading||B(re,W)})}C.current=r.length},[r.length,u,B]),S.useEffect(()=>{a!==null&&(H(a),c(null))},[a,c]);const[L,H]=S.useState(null),X=S.useRef(null),ee=S.useRef(null);S.useEffect(()=>{if(!O)return;const W=oe=>{if(!ee.current)return;const $=ee.current.getBoundingClientRect().right-oe.clientX;Q(Math.min(600,Math.max(200,$)))},re=()=>{M(!1)};return document.addEventListener("mousemove",W),document.addEventListener("mouseup",re),()=>{document.removeEventListener("mousemove",W),document.removeEventListener("mouseup",re)}},[O]);const se=S.useMemo(()=>r.length===0?{min:0,max:0}:{min:r[0].timestamp,max:r[r.length-1].timestamp},[r]),pe=S.useMemo(()=>r.filter((W,re)=>{var oe,ce,$;if(x&&(W.timestamp<x[0]||W.timestamp>x[1])||_.size>0&&!_.has(W.event_type))return!1;if(D&&W.event_type==="model_response"){const K=((ce=(oe=W.data)==null?void 0:oe.response_content)==null?void 0:ce.parts)||(($=W.data)==null?void 0:$.parts)||[],ie=K.some(he=>he.type==="function_call"),ue=K.some(he=>he.type==="text");if(!ie&&!ue)return!1}return!(j&&!JSON.stringify(W).toLowerCase().includes(j.toLowerCase()))}),[r,x,_,j,D]),Ze=S.useMemo(()=>{var ce;let W=0,re=0;const oe=g!==null?g+1:r.length;for(let $=0;$<oe;$++){const K=r[$];K.event_type==="model_response"&&((ce=K.data)!=null&&ce.token_counts)&&(W+=K.data.token_counts.input||0,re+=K.data.token_counts.output||0)}return{input:W,output:re,total:W+re}},[r,g]),bt=g!==null?r[g]:null;S.useEffect(()=>{if(!e){b([]);return}(async()=>{ne(!0);try{const re=await La(e.id);b(re)}catch(re){console.error("Failed to load sessions:",re),b([])}finally{ne(!1)}})()},[e]);const Ve=S.useCallback(async W=>{if(!e){Y(null);return}if(!W){l(),s(),f(null),Y(null),h(null),z(null);return}try{const re=await Lh(e.id,W);l(),s(),f(re.id),Y(W),h(null),z(null);for(const oe of re.events)i(oe)}catch(re){alert(`Failed to load session: ${re.message||"Unknown error"}`)}},[e,l,s,f,i]);S.useEffect(()=>{t&&X.current&&(X.current.scrollTop=X.current.scrollHeight)},[r.length,t]);const Bt=S.useCallback(()=>{if(!e||!m.trim()||t)return;w&&(w.close(),P(null)),p||(l(),s(),Y(null)),n(!0),h(null),z(null);const W=Oh(e.id);P(W),W.onopen=()=>{W.send(JSON.stringify({message:m,agent_id:L||void 0,session_id:p||void 0}))},W.onmessage=re=>{var ce;const oe=JSON.parse(re.data);if(oe.event_type==="agent_start"&&((ce=oe.data)!=null&&ce.session_id)){const $=oe.data.session_id;oe.data.session_reused,f($),$&&R.some(K=>K.id===$)&&Y($)}else oe.type==="session_started"?(f(oe.session_id),oe.session_id&&R.some($=>$.id===oe.session_id)&&Y(oe.session_id)):oe.type==="completed"?(n(!1),W.close()):oe.type==="error"?(n(!1),i({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:oe.error}})):i(oe)},W.onerror=()=>{n(!1),i({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:"WebSocket connection error"}})},W.onclose=()=>{n(!1)}},[e,m,t,w,l,n,i,L,p]),V=S.useCallback(()=>{w==null||w.close(),n(!1)},[w,n]);S.useEffect(()=>{const W=re=>{if((re.metaKey||re.ctrlKey)&&re.key==="Enter"){re.preventDefault(),Bt();return}if(re.key==="ArrowDown"||re.key==="ArrowUp"){if(re.target instanceof HTMLInputElement||re.target instanceof HTMLTextAreaElement||(re.preventDefault(),pe.length===0))return;if(re.key==="ArrowDown")if(g===null){const oe=r.indexOf(pe[0]);h(oe)}else{const oe=pe.findIndex(ce=>r.indexOf(ce)===g);if(oe<pe.length-1){const ce=r.indexOf(pe[oe+1]);h(ce)}}else if(re.key==="ArrowUp")if(g===null){const oe=r.indexOf(pe[pe.length-1]);h(oe)}else{const oe=pe.findIndex(ce=>r.indexOf(ce)===g);if(oe>0){const ce=r.indexOf(pe[oe-1]);h(ce)}}}};return window.addEventListener("keydown",W),()=>window.removeEventListener("keydown",W)},[Bt,pe,g,r]);const fe=S.useCallback(()=>{var $;if(r.length===0)return;const W={version:1,exportedAt:new Date().toISOString(),projectId:e==null?void 0:e.id,projectName:e==null?void 0:e.name,agentId:L||(($=e==null?void 0:e.app)==null?void 0:$.root_agent_id),events:r},re=new Blob([JSON.stringify(W,null,2)],{type:"application/json"}),oe=URL.createObjectURL(re),ce=document.createElement("a");ce.href=oe,ce.download=`run-${(e==null?void 0:e.name)||"export"}-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,document.body.appendChild(ce),ce.click(),document.body.removeChild(ce),URL.revokeObjectURL(oe)},[r,e,L]),Se=S.useCallback(async()=>{if(!p||!e){alert("No active session to save");return}try{const W=await Ah(p);if(W.success){alert(W.message||"Session saved to memory successfully");try{const re=await La(e.id);b(re)}catch{}}else alert(`Failed to save to memory: ${W.error||"Unknown error"}`)}catch(W){alert(`Error saving to memory: ${W.message||"Unknown error"}`)}},[p,e]),at=S.useCallback(()=>{const W=document.createElement("input");W.type="file",W.accept=".json",W.onchange=async re=>{var ce;const oe=(ce=re.target.files)==null?void 0:ce[0];if(oe)try{const $=await oe.text(),K=JSON.parse($);if(!K.events||!Array.isArray(K.events)){alert("Invalid run file: missing events array");return}l(),s(),h(null),z(null),K.events.forEach(ie=>{i(ie)})}catch($){alert(`Failed to load run file: ${$}`)}},W.click()},[l,s,i]);return S.useEffect(()=>{if(g!==null){const W=document.querySelector(".event-row.selected");W==null||W.scrollIntoView({behavior:"smooth",block:"nearest"})}},[g]),e?o.jsxs("div",{className:`run-panel ${O?"resizing":""}`,children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"input-area",children:[o.jsxs("select",{className:"agent-selector",value:L||"",onChange:W=>H(W.target.value||null),disabled:t,title:"Select which agent to run",children:[o.jsx("option",{value:"",children:e.app.root_agent_id?`Root: ${((rr=e.agents.find(W=>W.id===e.app.root_agent_id))==null?void 0:rr.name)||e.app.root_agent_id}`:"No root agent"}),e.agents.filter(W=>W.id!==e.app.root_agent_id).map(W=>o.jsxs("option",{value:W.id,children:[W.name," (",W.type.replace("Agent",""),")"]},W.id))]}),o.jsxs("select",{className:"agent-selector",value:U||"",onChange:W=>Ve(W.target.value||null),disabled:t||N,style:{minWidth:180},title:"Load a saved session",children:[o.jsx("option",{value:"",children:N?"Loading...":"Load Session..."}),R.map(W=>{const re=new Date(W.started_at*1e3),oe=W.duration?`${W.duration.toFixed(1)}s`:"?";return o.jsxs("option",{value:W.id,children:[re.toLocaleString()," (",W.event_count," events, ",oe,")"]},W.id)})]}),o.jsx("input",{type:"text",placeholder:"Enter your query...",value:m,onChange:W=>k(W.target.value),onKeyDown:W=>W.key==="Enter"&&!W.shiftKey&&Bt(),disabled:t}),t?o.jsxs("button",{className:"stop",onClick:V,children:[o.jsx(p0,{size:14}),"Stop"]}):o.jsxs("button",{onClick:Bt,disabled:!m.trim(),children:[o.jsx(En,{size:14}),"Run"]})]}),o.jsxs("div",{className:"toolbar",children:[o.jsxs("div",{className:"toolbar-section",children:[o.jsx(Xh,{size:12,style:{color:"#71717a"}}),o.jsx("input",{type:"text",placeholder:"Filter events...",value:j,onChange:W=>y(W.target.value)})]}),o.jsx("div",{className:"toolbar-divider"}),o.jsxs("div",{className:"toolbar-section",children:[["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change"].map(W=>o.jsx("button",{className:`filter-chip ${_.has(W)?"active":""}`,onClick:()=>{const re=new Set(_);re.has(W)?re.delete(W):re.add(W),A(re)},children:W.replace("_"," ")},W)),o.jsx("button",{className:`filter-chip ${_.has("callback_start")&&_.has("callback_end")?"active":""}`,onClick:()=>{const W=new Set(_);W.has("callback_start")&&W.has("callback_end")?(W.delete("callback_start"),W.delete("callback_end")):(W.add("callback_start"),W.add("callback_end")),A(W)},title:"Show/hide callback events",children:"callback"}),o.jsx("button",{className:`filter-chip ${D?"active":""}`,onClick:()=>T(!D),title:"Hide LLM_RESP (complete) events",children:"hide (complete)"})]}),o.jsx("div",{className:"toolbar-divider"}),o.jsxs("div",{className:"toolbar-section",children:[o.jsxs("button",{className:`toolbar-btn ${v?"active":""}`,onClick:()=>E(!v),children:[o.jsx(rn,{size:12}),"State"]}),o.jsxs("button",{className:`toolbar-btn ${I?"active":""}`,onClick:()=>q(!I),children:[o.jsx(Kd,{size:12}),"Tools"]})]}),o.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:[o.jsxs("span",{style:{fontSize:10,color:"#71717a"},children:[pe.length," / ",r.length," events"]}),x&&o.jsx("button",{className:"toolbar-btn",onClick:()=>z(null),children:"Clear Range"})]})]}),o.jsxs("div",{className:"main-content",ref:ee,children:[o.jsxs("div",{className:"event-list-container",children:[o.jsxs("div",{className:"event-list-header",children:[o.jsx("div",{children:"#"}),o.jsx("div",{children:"Time"}),o.jsx("div",{children:"Agent"}),o.jsx("div",{children:"Type"}),o.jsx("div",{children:"Info"})]}),o.jsx("div",{className:"event-list",ref:X,children:pe.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Yh,{size:24}),o.jsx("span",{children:r.length===0?"No events yet":"No matching events"})]}):pe.map((W,re)=>{const oe=r.indexOf(W),ce=Qp[W.event_type]||Qp.error,$=aS[W.event_type]||hl;return o.jsxs("div",{className:`event-row ${g===oe?"selected":""}`,style:{background:ce.bg},onClick:()=>h(oe),onDoubleClick:()=>{E(!1),q(!1)},children:[o.jsx("div",{className:"index",children:oe}),o.jsx("div",{className:"time",style:{color:ce.fg},children:uS(W.timestamp,se.min)}),o.jsx("div",{className:"agent",style:{color:ce.fg},children:W.agent_name}),o.jsxs("div",{className:"type",style:{color:ce.fg},children:[o.jsx($,{size:10}),W.event_type.split("_")[0]]}),o.jsx("div",{className:"summary",children:cS(W)})]},oe)})})]}),o.jsxs("div",{className:"side-panel-container",style:{width:F},children:[o.jsx("div",{className:`resize-handle ${O?"active":""}`,onMouseDown:()=>M(!0)}),o.jsxs("div",{className:"side-panel",style:{width:F-4},children:[o.jsxs("div",{className:"side-panel-tabs",children:[o.jsxs("button",{className:`side-panel-tab ${!v&&!I?"active":""}`,onClick:()=>{E(!1),q(!1)},children:[o.jsx(Hi,{size:12,style:{marginRight:4}}),"Details"]}),o.jsxs("button",{className:`side-panel-tab ${v?"active":""}`,onClick:()=>{E(!0),q(!1)},children:[o.jsx(rn,{size:12,style:{marginRight:4}}),"State"]}),o.jsxs("button",{className:`side-panel-tab ${I?"active":""}`,onClick:()=>{q(!0),E(!1)},children:[o.jsx(Kd,{size:12,style:{marginRight:4}}),"Tools"]})]}),o.jsx("div",{className:"side-panel-content",children:I?o.jsx(mS,{project:e,selectedEventIndex:g}):v?o.jsx(fS,{events:r,selectedEventIndex:g,project:e}):bt?o.jsx(dS,{event:bt}):o.jsxs("div",{className:"empty-state",children:[o.jsx(Hi,{size:24}),o.jsx("span",{children:"Select an event to view details"})]})})]})]})]}),o.jsxs("div",{className:"stats-bar",children:[o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Events:"}),o.jsx("span",{className:"stat-value",children:r.length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Tool Calls:"}),o.jsx("span",{className:"stat-value",children:r.filter(W=>W.event_type==="tool_call").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Model Calls:"}),o.jsx("span",{className:"stat-value",children:r.filter(W=>W.event_type==="model_call").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Callbacks:"}),o.jsx("span",{className:"stat-value",children:r.filter(W=>W.event_type==="callback_start").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"State Changes:"}),o.jsx("span",{className:"stat-value",children:r.filter(W=>W.event_type==="state_change").length})]}),r.length>0&&o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Duration:"}),o.jsxs("span",{className:"stat-value",children:[((r[r.length-1].timestamp-r[0].timestamp)*1e3).toFixed(0),"ms"]})]}),Ze.total>0&&o.jsx("div",{className:"stat-item token-stats",children:o.jsxs("span",{className:"stat-value token-value",children:[o.jsxs("span",{className:"token-in",title:"Input tokens",children:[Ze.input.toLocaleString(),"↑"]}),o.jsxs("span",{className:"token-out",title:"Output tokens",children:[Ze.output.toLocaleString(),"↓"]}),o.jsx("span",{className:"token-total",title:"Total tokens",children:Ze.total.toLocaleString()})]})}),o.jsx("div",{className:"stats-bar-spacer"}),o.jsxs("button",{className:"stats-bar-btn",onClick:at,title:"Load a saved run",children:[o.jsx(iu,{size:12}),"Load"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:fe,disabled:r.length===0,title:"Save current run to file",children:[o.jsx(Zc,{size:12}),"Save"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:Se,disabled:!p||r.length===0,title:"Save current session to memory",children:[o.jsx(rn,{size:12}),"Save to Memory"]})]})]}):o.jsx("div",{className:"run-panel empty",children:"No project loaded"})}const gS=()=>Math.random().toString(36).substring(2,10),xS=()=>({id:gS(),name:"New SkillSet",description:"",embedding_model:void 0,app_model_id:void 0,external_store_type:void 0,external_store_config:{},search_enabled:!0,preload_enabled:!0,preload_top_k:3,preload_min_score:.4,sources:[],entry_count:0});function yS(){const{project:e,setProject:t}=vt(),[n,r]=S.useState(null),[i,l]=S.useState(null),[s,a]=S.useState(""),[c,u]=S.useState([]),[d,p]=S.useState(!1),[f,m]=S.useState(!1),[k,w]=S.useState(""),[P,g]=S.useState(!1),[h,x]=S.useState(null),[z,j]=S.useState(null),y=S.useRef(null),_=(e==null?void 0:e.skillsets)||[],A=_.find(R=>R.id===n);S.useEffect(()=>{Kh().then(R=>j(R.available)).catch(()=>j(!1))},[]),S.useEffect(()=>{_.length>0&&!n&&r(_[0].id)},[_,n]),S.useEffect(()=>{!e||!n||D()},[e==null?void 0:e.id,n]);const D=S.useCallback(async()=>{if(!(!e||!n))try{const R=await Uh(e.id,n);l(R),v(n,{entry_count:R.entry_count})}catch(R){console.error("Failed to load stats:",R)}},[e==null?void 0:e.id,n]),T=R=>{e&&t({...e,...R})},v=(R,b)=>{e&&t({...e,skillsets:e.skillsets.map(U=>U.id===R?{...U,...b}:U)})},E=()=>{if(!e)return;const R=xS();T({skillsets:[..._,R]}),r(R.id)},I=R=>{e&&confirm("Delete this SkillSet and all its data?")&&(T({skillsets:_.filter(b=>b.id!==R)}),n===R&&r(_.length>1?_[0].id:null),l(null),u([]))},q=async()=>{if(!(!e||!n||!s.trim())){p(!0),x(null);try{const R=await Hh(e.id,n,s.trim(),10,0);u(R.results)}catch(R){x("Search failed"),console.error(R)}finally{p(!1)}}},F=async()=>{if(!(!e||!n||!k.trim())){g(!0),x(null);try{const R=await Vh(e.id,n,k.trim());w(""),await D(),alert(`Added ${R.chunks_added} chunks from ${R.source_name}`)}catch(R){x(R.message||"Failed to fetch URL")}finally{g(!1)}}},Q=async R=>{var U;const b=(U=R.target.files)==null?void 0:U[0];if(!(!b||!e||!n)){x(null);try{const Y=await Wh(e.id,n,b);await D(),alert(`Added ${Y.chunks_added} chunks from ${Y.source_name}`)}catch(Y){x(Y.message||"Upload failed")}y.current&&(y.current.value="")}},O=async()=>{if(!(!e||!n)&&confirm("Delete all entries in this SkillSet?"))try{await qh(e.id,n),await D(),u([])}catch{x("Clear failed")}},M=R=>{const b=Math.round(R*100),U=160,Y=70,N=20+(1-R)*15,ne=.15+R*.25;return`linear-gradient(90deg, hsla(${U}, ${Y}%, ${N}%, ${ne}) 0%, transparent ${b}%)`};return e?o.jsxs("div",{className:"skillsets-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"skillset-list",children:[o.jsxs("div",{className:"skillset-list-header",children:[o.jsx("h3",{children:"SkillSets"}),o.jsx("button",{className:"btn-icon",onClick:E,title:"Add SkillSet",children:o.jsx(Re,{size:16})})]}),_.length===0?o.jsxs("div",{className:"empty-state",style:{padding:"40px 0"},children:[o.jsx(rn,{size:32}),o.jsx("span",{children:"No SkillSets"}),o.jsxs("button",{className:"btn-primary",onClick:E,children:[o.jsx(Re,{size:14})," Create SkillSet"]})]}):_.map(R=>o.jsxs("div",{className:`skillset-item ${n===R.id?"selected":""}`,onClick:()=>r(R.id),children:[o.jsx(rn,{size:16,style:{color:"var(--accent)",flexShrink:0}}),o.jsxs("div",{className:"skillset-item-info",children:[o.jsx("div",{className:"skillset-item-name",children:R.name}),o.jsxs("div",{className:"skillset-item-count",children:[R.entry_count||0," entries"]})]}),o.jsx("button",{className:"skillset-item-delete",onClick:b=>{b.stopPropagation(),I(R.id)},children:o.jsx(Pe,{size:14})})]},R.id))]}),A?o.jsxs("div",{className:"skillset-detail",children:[o.jsxs("div",{className:"skillset-header",children:[o.jsxs("div",{className:"skillset-header-info",children:[o.jsx("input",{className:"skillset-name-input",value:A.name,onChange:R=>v(A.id,{name:R.target.value}),placeholder:"SkillSet Name"}),o.jsx("textarea",{className:"skillset-desc-input",value:A.description,onChange:R=>v(A.id,{description:R.target.value}),placeholder:"Description (optional)",rows:1}),o.jsxs("div",{className:"skillset-model",children:[o.jsx("label",{style:{fontSize:"12px",color:"var(--text-secondary)",marginRight:"8px"},children:"Embedding Model:"}),o.jsxs("select",{style:{flex:1,padding:"4px 8px",fontSize:"12px",background:"var(--bg-secondary)",border:"1px solid var(--border)",borderRadius:"4px",color:"var(--text-primary)"},value:A.embedding_model||"text-embedding-004",onChange:R=>v(A.id,{embedding_model:R.target.value}),children:[o.jsxs("optgroup",{label:"Google Gemini",children:[o.jsx("option",{value:"text-embedding-004",children:"text-embedding-004 (768d)"}),o.jsx("option",{value:"text-embedding-005",children:"text-embedding-005"})]}),o.jsxs("optgroup",{label:"OpenAI",children:[o.jsx("option",{value:"text-embedding-3-small",children:"text-embedding-3-small (1536d)"}),o.jsx("option",{value:"text-embedding-3-large",children:"text-embedding-3-large (3072d)"})]}),o.jsxs("optgroup",{label:"Cohere",children:[o.jsx("option",{value:"embed-english-v3.0",children:"embed-english-v3.0 (1024d)"}),o.jsx("option",{value:"embed-multilingual-v3.0",children:"embed-multilingual-v3.0 (1024d)"})]})]})]}),o.jsxs("div",{className:"skillset-stats",children:[o.jsxs("span",{className:"skillset-stat",children:[o.jsx("strong",{children:(i==null?void 0:i.entry_count)||0})," entries"]}),o.jsxs("span",{className:"skillset-stat",children:[o.jsx("strong",{children:Object.keys((i==null?void 0:i.sources)||{}).length})," sources"]}),z===!1&&o.jsx("span",{className:"skillset-stat",style:{color:"var(--warning)"},children:"⚠ No embeddings"})]})]}),o.jsx("button",{className:"btn-icon",onClick:D,title:"Refresh",children:o.jsx(vn,{size:16})})]}),h&&o.jsxs("div",{className:"error-banner",children:[h,o.jsx("button",{onClick:()=>x(null),children:o.jsx(eg,{size:14})})]}),o.jsxs("div",{className:"search-section",children:[o.jsx("div",{className:"search-input-wrapper",children:o.jsx("input",{className:"search-input",value:s,onChange:R=>a(R.target.value),onKeyDown:R=>R.key==="Enter"&&q(),placeholder:"Search this SkillSet..."})}),o.jsxs("button",{className:"btn-primary",onClick:q,disabled:d||!s.trim(),children:[o.jsx(Xh,{size:14}),d?"Searching...":"Search"]})]}),o.jsxs("div",{className:"search-results",children:[c.length===0&&!d&&s&&o.jsx("div",{className:"empty-state",children:o.jsx("span",{children:"No results found"})}),c.map(R=>o.jsxs("div",{className:"search-result",style:{background:M(R.score)},children:[o.jsxs("span",{className:"search-result-score",children:[(R.score*100).toFixed(0),"%"]}),o.jsx("div",{className:"search-result-text",children:R.text}),o.jsx("div",{className:"search-result-source",children:R.source_name})]},R.id))]}),o.jsxs("div",{className:"add-sources-section",children:[o.jsxs("div",{className:"add-sources-header",onClick:()=>m(!f),children:[f?o.jsx(kt,{size:16}):o.jsx(wt,{size:16}),o.jsx("h4",{children:"Add Sources"})]}),f&&o.jsxs("div",{className:"add-sources-content",children:[o.jsxs("div",{className:"source-row",children:[o.jsx(Ma,{size:16,style:{color:"var(--text-tertiary)"}}),o.jsx("input",{className:"source-input",value:k,onChange:R=>w(R.target.value),onKeyDown:R=>R.key==="Enter"&&F(),placeholder:"Enter URL (e.g., llms.txt file)"}),o.jsxs("button",{className:"btn-primary",onClick:F,disabled:P||!k.trim(),children:[o.jsx(s0,{size:14}),P?"Loading...":"Add"]})]}),o.jsxs("div",{className:"source-row",children:[o.jsx(o0,{size:16,style:{color:"var(--text-tertiary)"}}),o.jsx("input",{ref:y,type:"file",accept:".txt,.md,.json,.csv,.html",onChange:Q}),o.jsxs("button",{className:"btn-primary",onClick:()=>{var R;return(R=y.current)==null?void 0:R.click()},children:[o.jsx(iu,{size:14}),"Upload File"]}),o.jsx("span",{style:{fontSize:"12px",color:"var(--text-tertiary)"},children:".txt, .md, .json, .csv"})]}),((i==null?void 0:i.entry_count)||0)>0&&o.jsx("div",{className:"source-row",style:{marginTop:"8px"},children:o.jsxs("button",{className:"clear-button",onClick:O,children:[o.jsx(Pe,{size:12}),"Clear All Entries (",(i==null?void 0:i.entry_count)||0,")"]})})]})]})]}):_.length>0?o.jsx("div",{className:"skillset-detail",children:o.jsxs("div",{className:"empty-state",children:[o.jsx(rn,{size:48}),o.jsx("span",{children:"Select a SkillSet"})]})}):null]}):null}function ex(){return`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`}function vS(){const{project:e}=vt(),[t,n]=S.useState([]),[r,i]=S.useState(null),[l,s]=S.useState(null),[a,c]=S.useState(new Set),[u,d]=S.useState(new Map),[p,f]=S.useState(new Map),[m,k]=S.useState(new Set),[w,P]=S.useState(!1),[g,h]=S.useState(null),[x,z]=S.useState(""),[j,y]=S.useState(""),[_,A]=S.useState(.7),[D,T]=S.useState(null);S.useEffect(()=>{e!=null&&e.id&&v()},[e==null?void 0:e.id]);const v=async()=>{var C;if(e!=null&&e.id){P(!0),h(null);try{const B=await Lt.get(`/api/projects/${e.id}/eval-sets`);n(B.eval_sets||[]),((C=B.eval_sets)==null?void 0:C.length)>0&&c(new Set([B.eval_sets[0].id]))}catch(B){h(B.message||"Failed to load eval sets")}finally{P(!1)}}},E=t.find(C=>C.id===r),I=E==null?void 0:E.eval_cases.find(C=>C.id===l),q=async()=>{if(e!=null&&e.id)try{const C=await Lt.post(`/api/projects/${e.id}/eval-sets`,{name:"New Eval Set",description:"",default_response_threshold:.7,default_trajectory_match_type:"in_order"});n(B=>[...B,C.eval_set]),i(C.eval_set.id),c(B=>new Set([...B,C.eval_set.id]))}catch(C){h(C.message||"Failed to create eval set")}},F=async C=>{if(e!=null&&e.id)try{const B=await Lt.post(`/api/projects/${e.id}/eval-sets/${C}/cases`,{name:"New Test Case",description:"",invocations:[{id:ex(),user_message:"",expected_response:"",expected_tool_calls:[]}],response_match_threshold:.7,trajectory_match_type:"in_order"});n(L=>L.map(H=>H.id===C?{...H,eval_cases:[...H.eval_cases,B.eval_case]}:H)),i(C),s(B.eval_case.id)}catch(B){h(B.message||"Failed to create eval case")}},Q=async(C,B,L)=>{if(e!=null&&e.id)try{const H=await Lt.put(`/api/projects/${e.id}/eval-sets/${C}/cases/${B}`,L);n(X=>X.map(ee=>ee.id===C?{...ee,eval_cases:ee.eval_cases.map(se=>se.id===B?H.eval_case:se)}:ee))}catch(H){h(H.message||"Failed to update eval case")}},O=async(C,B)=>{if(e!=null&&e.id)try{await Lt.delete(`/api/projects/${e.id}/eval-sets/${C}/cases/${B}`),n(L=>L.map(H=>H.id===C?{...H,eval_cases:H.eval_cases.filter(X=>X.id!==B)}:H)),l===B&&s(null)}catch(L){h(L.message||"Failed to delete eval case")}},M=async C=>{if(e!=null&&e.id)try{await Lt.delete(`/api/projects/${e.id}/eval-sets/${C}`),n(B=>B.filter(L=>L.id!==C)),r===C&&(i(null),s(null))}catch(B){h(B.message||"Failed to delete eval set")}},R=async(C,B)=>{if(e!=null&&e.id){k(L=>new Set([...L,B]));try{const L=await Lt.post(`/api/projects/${e.id}/eval-sets/${C}/cases/${B}/run`,{});d(H=>new Map(H).set(B,L.result))}catch(L){h(L.message||"Failed to run eval case")}finally{k(L=>{const H=new Set(L);return H.delete(B),H})}}},b=async C=>{if(!(e!=null&&e.id))return;const B=t.find(H=>H.id===C);if(!B)return;const L=B.eval_cases.map(H=>H.id);k(H=>new Set([...H,C,...L]));try{const H=await Lt.post(`/api/projects/${e.id}/eval-sets/${C}/run`,{});f(X=>new Map(X).set(C,H.result));for(const X of H.result.case_results)d(ee=>new Map(ee).set(X.eval_case_id,X))}catch(H){h(H.message||"Failed to run eval set")}finally{k(H=>{const X=new Set(H);return X.delete(C),L.forEach(ee=>X.delete(ee)),X})}},U=async()=>{if(!(!(e!=null&&e.id)||!x)){k(C=>new Set([...C,"quick_eval"])),T(null);try{const C=await Lt.post(`/api/projects/${e.id}/quick-eval`,{user_message:x,expected_response:j||void 0,expected_tool_calls:[],response_threshold:_,trajectory_match_type:"in_order"});T(C.result)}catch(C){h(C.message||"Failed to run quick eval")}finally{k(C=>{const B=new Set(C);return B.delete("quick_eval"),B})}}},Y=C=>{c(B=>{const L=new Set(B);return L.has(C)?L.delete(C):L.add(C),L})},N=C=>{let B=C.eval_cases.length,L=0,H=0,X=0;for(const ee of C.eval_cases){const se=u.get(ee.id);se?se.overall_passed?L++:H++:X++}return{total:B,passed:L,failed:H,pending:X}},ne=C=>C==null?"-":`${Math.round(C*100)}%`;return e?o.jsxs("div",{className:"eval-panel",children:[o.jsx("style",{children:`
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
          margin-bottom: 20px;
        }
        
        .form-section h4 {
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 8px;
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
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 12px;
          margin-bottom: 12px;
        }
        
        .invocation-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }
        
        .invocation-header h5 {
          flex: 1;
          font-size: 13px;
          font-weight: 600;
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
          color: var(--accent-primary);
          border-bottom-color: var(--accent-primary);
        }
      `}),o.jsxs("aside",{className:"eval-sidebar",children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsx("h3",{children:"Evaluation Tests"}),o.jsxs("div",{className:"header-actions",children:[o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:v,title:"Refresh",children:o.jsx(vn,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:q,title:"New eval set",children:[o.jsx(Re,{size:14}),"Set"]})]})]}),o.jsxs("div",{className:"eval-tree",children:[w&&o.jsx("p",{style:{color:"var(--text-muted)",padding:"16px"},children:"Loading..."}),g&&o.jsx("div",{style:{color:"var(--error)",padding:"16px",fontSize:"13px"},children:g}),!w&&t.length===0&&o.jsxs("div",{className:"empty-state",style:{padding:"32px"},children:[o.jsx($a,{size:32}),o.jsxs("p",{children:["No evaluation sets yet.",o.jsx("br",{}),"Create one to get started."]})]}),t.map(C=>{const B=a.has(C.id),L=N(C),H=m.has(C.id);return o.jsxs("div",{className:"tree-item",children:[o.jsxs("div",{className:`tree-set ${r===C.id&&!l?"selected":""}`,onClick:()=>{i(C.id),s(null)},children:[o.jsx("button",{className:"expand-btn",onClick:X=>{X.stopPropagation(),Y(C.id)},children:C.eval_cases.length>0?B?o.jsx(kt,{size:14}):o.jsx(wt,{size:14}):o.jsx("span",{style:{width:14}})}),o.jsx(Jh,{size:14,style:{color:"var(--accent-secondary)"}}),o.jsx("span",{className:"set-name",children:C.name}),L.total>0&&o.jsxs("span",{className:"set-stats",children:[L.passed>0&&o.jsx("span",{className:"stat-passed",children:L.passed}),L.failed>0&&o.jsx("span",{className:"stat-failed",children:L.failed}),L.pending>0&&o.jsx("span",{className:"stat-pending",children:L.pending})]}),o.jsx("button",{className:"run-btn",onClick:X=>{X.stopPropagation(),b(C.id)},title:"Run all tests in this set",disabled:H,children:H?o.jsx(bi,{size:12,className:"spinning"}):o.jsx(En,{size:12})})]}),B&&o.jsxs("div",{className:"tree-children",style:{paddingLeft:16},children:[C.eval_cases.map(X=>{const ee=u.get(X.id),se=m.has(X.id);return o.jsxs("div",{className:`tree-case ${l===X.id?"selected":""}`,onClick:()=>{i(C.id),s(X.id)},children:[se?o.jsx(bi,{size:14,className:"spinning",style:{color:"var(--warning)"}}):ee?ee.overall_passed?o.jsx(Wi,{size:14,style:{color:"var(--success)"}}):o.jsx(qi,{size:14,style:{color:"var(--error)"}}):o.jsx(ml,{size:14,style:{color:"var(--text-muted)"}}),o.jsx("span",{className:"case-name",children:X.name}),ee&&o.jsx("span",{style:{fontSize:11,color:ee.overall_passed?"var(--success)":"var(--error)"},children:ne(ee.overall_response_score)}),o.jsx("button",{className:"run-btn",onClick:pe=>{pe.stopPropagation(),R(C.id,X.id)},disabled:se,children:o.jsx(En,{size:12})})]},X.id)}),o.jsxs("button",{className:"btn btn-secondary btn-sm",style:{marginTop:8,marginLeft:20},onClick:()=>F(C.id),children:[o.jsx(Re,{size:12}),"Add Test Case"]})]})]},C.id)})]})]}),o.jsx("div",{className:"eval-editor",children:I?o.jsx(bS,{evalCase:I,evalSetId:r,projectId:e.id,result:u.get(I.id),isRunning:m.has(I.id),onUpdate:C=>Q(r,I.id,C),onDelete:()=>O(r,I.id),onRun:()=>R(r,I.id)}):E?o.jsx(kS,{evalSet:E,projectId:e.id,result:p.get(E.id),isRunning:m.has(E.id),caseResults:u,onUpdate:async C=>{try{const B=await Lt.put(`/api/projects/${e.id}/eval-sets/${E.id}`,C);n(L=>L.map(H=>H.id===E.id?B.eval_set:H))}catch(B){h(B.message)}},onDelete:()=>M(E.id),onRun:()=>b(E.id)}):o.jsxs("div",{className:"editor-content",children:[o.jsxs("div",{className:"quick-eval",children:[o.jsxs("h4",{children:[o.jsx($a,{size:16})," Quick Evaluation"]}),o.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginBottom:12},children:"Test a single message without creating a full test case."}),o.jsxs("div",{className:"form-section",children:[o.jsx("label",{children:"User Message"}),o.jsx("textarea",{value:x,onChange:C=>z(C.target.value),placeholder:"Enter a message to send to the agent...",style:{minHeight:60}})]}),o.jsxs("div",{className:"form-section",children:[o.jsx("label",{children:"Expected Response (for fuzzy matching)"}),o.jsx("textarea",{value:j,onChange:C=>y(C.target.value),placeholder:"Expected text in the response (uses ROUGE-1 fuzzy matching)...",style:{minHeight:60}})]}),o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Response Threshold"}),o.jsx("input",{type:"number",min:0,max:1,step:.1,value:_,onChange:C=>A(parseFloat(C.target.value)||.7)})]}),o.jsx("div",{className:"form-field",style:{display:"flex",alignItems:"flex-end"},children:o.jsx("button",{className:"btn btn-primary",onClick:U,disabled:!x||m.has("quick_eval"),children:m.has("quick_eval")?o.jsxs(o.Fragment,{children:[o.jsx(bi,{size:14,className:"spinning"})," Running..."]}):o.jsxs(o.Fragment,{children:[o.jsx(En,{size:14})," Run Quick Eval"]})})})]}),D&&o.jsxs("div",{className:"result-panel",style:{marginTop:16,borderRadius:"var(--radius-md)"},children:[o.jsxs("div",{className:`result-header ${D.overall_passed?"passed":"failed"}`,children:[D.overall_passed?o.jsxs(o.Fragment,{children:[o.jsx(Wi,{size:18})," ",o.jsx("strong",{children:"Passed"})]}):o.jsxs(o.Fragment,{children:[o.jsx(qi,{size:18})," ",o.jsx("strong",{children:"Failed"})]}),o.jsxs("span",{style:{marginLeft:"auto",color:"var(--text-muted)",fontSize:12},children:[D.duration_ms.toFixed(0),"ms"]})]}),D.invocation_results[0]&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"result-scores",children:o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:`score-value ${D.invocation_results[0].response_passed?"passed":"failed"}`,children:ne(D.invocation_results[0].response_score)}),o.jsx("div",{className:"score-label",children:"Response Match (ROUGE-1)"})]})}),o.jsxs("div",{className:"result-details",children:[o.jsx("h5",{children:"Actual Response"}),o.jsx("div",{className:"detail-box",children:D.invocation_results[0].actual_response||"(no response)"})]})]})]})]}),o.jsxs("div",{className:"empty-state",children:[o.jsx(ml,{size:48}),o.jsxs("p",{children:["Select a test case to edit",o.jsx("br",{}),"or create a new one"]})]})]})})]}):null}function bS({evalCase:e,evalSetId:t,projectId:n,result:r,isRunning:i,onUpdate:l,onDelete:s,onRun:a}){const[c,u]=S.useState(e),[d,p]=S.useState("invocations");S.useEffect(()=>{u(e)},[e]);const f=S.useCallback(z=>{const j={...c,...z};u(j),l(z)},[c,l]),m=()=>{const z={id:ex(),user_message:"",expected_response:"",expected_tool_calls:[]};f({invocations:[...c.invocations,z]})},k=(z,j)=>{const y=[...c.invocations];y[z]={...y[z],...j},f({invocations:y})},w=z=>{f({invocations:c.invocations.filter((j,y)=>y!==z)})},P=z=>{const j=[...c.invocations];j[z]={...j[z],expected_tool_calls:[...j[z].expected_tool_calls,{name:"",args:{},args_match_mode:"exact"}]},f({invocations:j})},g=(z,j,y)=>{const _=[...c.invocations],A=[..._[z].expected_tool_calls];A[j]={...A[j],...y},_[z]={..._[z],expected_tool_calls:A},f({invocations:_})},h=(z,j)=>{const y=[...c.invocations];y[z]={...y[z],expected_tool_calls:y[z].expected_tool_calls.filter((_,A)=>A!==j)},f({invocations:y})},x=z=>z==null?"-":`${Math.round(z*100)}%`;return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(ml,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("input",{type:"text",value:c.name,onChange:z=>f({name:z.target.value}),placeholder:"Test case name"}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:a,disabled:i,children:[i?o.jsx(bi,{size:14,className:"spinning"}):o.jsx(En,{size:14}),"Run"]}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:s,children:o.jsx(Pe,{size:14})})]}),o.jsxs("div",{className:"tabs",children:[o.jsxs("div",{className:`tab ${d==="invocations"?"active":""}`,onClick:()=>p("invocations"),children:[o.jsx(hl,{size:14,style:{marginRight:6}}),"Invocations (",c.invocations.length,")"]}),o.jsxs("div",{className:`tab ${d==="settings"?"active":""}`,onClick:()=>p("settings"),children:[o.jsx(nu,{size:14,style:{marginRight:6}}),"Settings"]})]}),o.jsxs("div",{className:"editor-content",children:[d==="invocations"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("textarea",{value:c.description,onChange:z=>f({description:z.target.value}),placeholder:"What does this test verify?",style:{minHeight:40}})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(hl,{size:14}),"Conversation Turns"]}),c.invocations.map((z,j)=>o.jsxs("div",{className:"invocation-card",children:[o.jsxs("div",{className:"invocation-header",children:[o.jsxs("h5",{children:["Turn ",j+1]}),c.invocations.length>1&&o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>w(j),children:o.jsx(Pe,{size:12})})]}),o.jsxs("div",{className:"form-section",children:[o.jsx("label",{children:"User Message"}),o.jsx("textarea",{value:z.user_message,onChange:y=>k(j,{user_message:y.target.value}),placeholder:"The message to send to the agent..."})]}),o.jsxs("div",{className:"form-section",children:[o.jsx("label",{children:"Expected Response (fuzzy match via ROUGE-1)"}),o.jsx("textarea",{value:z.expected_response||"",onChange:y=>k(j,{expected_response:y.target.value||void 0}),placeholder:"Expected text in the response (partial match)..."})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("label",{children:[o.jsx(Dt,{size:12,style:{marginRight:4}}),"Expected Tool Calls"]}),z.expected_tool_calls.map((y,_)=>o.jsxs("div",{className:"tool-call-row",children:[o.jsx("input",{type:"text",value:y.name,onChange:A=>g(j,_,{name:A.target.value}),placeholder:"Tool name",style:{flex:2}}),o.jsxs("select",{value:y.args_match_mode,onChange:A=>g(j,_,{args_match_mode:A.target.value}),style:{flex:1},children:[o.jsx("option",{value:"ignore",children:"Name only"}),o.jsx("option",{value:"exact",children:"Exact args"}),o.jsx("option",{value:"subset",children:"Args subset"})]}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>h(j,_),children:o.jsx(Pe,{size:12})})]},_)),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>P(j),children:[o.jsx(Re,{size:12})," Add Tool Call"]})]})]},z.id)),o.jsxs("button",{className:"btn btn-secondary",onClick:m,children:[o.jsx(Re,{size:14})," Add Turn"]})]})]}),d==="settings"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Response Match Threshold (0.0 - 1.0)"}),o.jsx("input",{type:"number",min:0,max:1,step:.1,value:c.response_match_threshold,onChange:z=>f({response_match_threshold:parseFloat(z.target.value)||.7})}),o.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:"ROUGE-1 F1 score threshold. 0.7 means 70% word overlap."})]}),o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Tool Trajectory Match Type"}),o.jsxs("select",{value:c.trajectory_match_type,onChange:z=>f({trajectory_match_type:z.target.value}),children:[o.jsx("option",{value:"exact",children:"Exact (same order, no extras)"}),o.jsx("option",{value:"in_order",children:"In Order (extras allowed between)"}),o.jsx("option",{value:"any_order",children:"Any Order (all present, any order)"})]})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Initial Session State (JSON)"}),o.jsx("textarea",{value:JSON.stringify(c.initial_state,null,2),onChange:z=>{try{f({initial_state:JSON.parse(z.target.value)})}catch{}},placeholder:'{"key": "value"}'})]}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Expected Final State (JSON, optional)"}),o.jsx("textarea",{value:c.expected_final_state?JSON.stringify(c.expected_final_state,null,2):"",onChange:z=>{if(!z.target.value)f({expected_final_state:void 0});else try{f({expected_final_state:JSON.parse(z.target.value)})}catch{}},placeholder:'{"key": "expected_value"}'})]})]})]}),r&&o.jsxs("div",{className:"result-panel",children:[o.jsxs("div",{className:`result-header ${r.overall_passed?"passed":"failed"}`,children:[r.overall_passed?o.jsxs(o.Fragment,{children:[o.jsx(Wi,{size:18})," ",o.jsx("strong",{children:"Passed"})]}):o.jsxs(o.Fragment,{children:[o.jsx(qi,{size:18})," ",o.jsx("strong",{children:"Failed"})]}),o.jsxs("span",{style:{marginLeft:"auto",color:"var(--text-muted)",fontSize:12},children:[r.duration_ms.toFixed(0),"ms"]})]}),o.jsxs("div",{className:"result-scores",children:[o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:`score-value ${r.response_passed?"passed":"failed"}`,children:x(r.overall_response_score)}),o.jsx("div",{className:"score-label",children:"Response Match"})]}),o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:`score-value ${r.trajectory_passed?"passed":"failed"}`,children:x(r.overall_trajectory_score)}),o.jsx("div",{className:"score-label",children:"Tool Trajectory"})]})]}),r.invocation_results.map((z,j)=>o.jsxs("div",{className:"result-details",children:[o.jsxs("h5",{children:["Turn ",j+1,": ",z.user_message.slice(0,50),"..."]}),o.jsxs("div",{className:"detail-box",children:[o.jsx("strong",{children:"Actual Response:"}),`
`,z.actual_response||"(no response)",`

`,z.actual_tool_calls.length>0&&o.jsxs(o.Fragment,{children:[o.jsx("strong",{children:"Tool Calls:"}),`
`,z.actual_tool_calls.map((y,_)=>`  ${_+1}. ${y.name}(${JSON.stringify(y.args)})
`).join("")]})]})]},j)),r.error&&o.jsxs("div",{className:"result-details",children:[o.jsx("h5",{style:{color:"var(--error)"},children:"Error"}),o.jsx("div",{className:"detail-box",style:{color:"var(--error)"},children:r.error})]})]})]})}function kS({evalSet:e,projectId:t,result:n,isRunning:r,caseResults:i,onUpdate:l,onDelete:s,onRun:a}){const c=u=>u==null?"-":`${Math.round(u*100)}%`;return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(Jh,{size:20,style:{color:"var(--accent-secondary)"}}),o.jsx("input",{type:"text",value:e.name,onChange:u=>l({name:u.target.value}),placeholder:"Eval set name"}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:a,disabled:r,children:[r?o.jsx(bi,{size:14,className:"spinning"}):o.jsx(En,{size:14}),"Run All"]}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:s,children:o.jsx(Pe,{size:14})})]}),o.jsxs("div",{className:"editor-content",children:[o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("textarea",{value:e.description,onChange:u=>l({description:u.target.value}),placeholder:"Description of this evaluation set...",style:{minHeight:40}})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(nu,{size:14})," Default Settings"]}),o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Default Response Threshold"}),o.jsx("input",{type:"number",min:0,max:1,step:.1,value:e.default_response_threshold,onChange:u=>l({default_response_threshold:parseFloat(u.target.value)||.7})})]}),o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Default Trajectory Match Type"}),o.jsxs("select",{value:e.default_trajectory_match_type,onChange:u=>l({default_trajectory_match_type:u.target.value}),children:[o.jsx("option",{value:"exact",children:"Exact"}),o.jsx("option",{value:"in_order",children:"In Order"}),o.jsx("option",{value:"any_order",children:"Any Order"})]})]})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(c0,{size:14})," Coverage Summary"]}),n?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"result-scores",children:[o.jsxs("div",{className:"score-card",children:[o.jsxs("div",{className:"score-value",style:{color:"var(--accent-primary)"},children:[n.passed_cases,"/",n.total_cases]}),o.jsx("div",{className:"score-label",children:"Cases Passed"})]}),o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:`score-value ${n.overall_pass_rate>=.8?"passed":"failed"}`,children:c(n.overall_pass_rate)}),o.jsx("div",{className:"score-label",children:"Pass Rate"})]}),o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:"score-value",children:c(n.avg_response_score)}),o.jsx("div",{className:"score-label",children:"Avg Response Score"})]}),o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:"score-value",children:c(n.avg_trajectory_score)}),o.jsx("div",{className:"score-label",children:"Avg Trajectory Score"})]})]}),o.jsxs("div",{style:{marginTop:16},children:[o.jsx("div",{style:{marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Overall Pass Rate"}),o.jsx("div",{className:"coverage-bar",children:o.jsx("div",{className:`coverage-fill ${n.overall_pass_rate>=.8?"passed":"failed"}`,style:{width:`${n.overall_pass_rate*100}%`}})})]}),o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Individual Results"}),o.jsxs("table",{style:{width:"100%",fontSize:12,borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Test Case"}),o.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Response"}),o.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Trajectory"}),o.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Status"})]})}),o.jsx("tbody",{children:n.case_results.map(u=>o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("td",{style:{padding:"8px 4px"},children:u.eval_case_name}),o.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:c(u.overall_response_score)}),o.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:c(u.overall_trajectory_score)}),o.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:u.overall_passed?o.jsx(Wi,{size:14,style:{color:"var(--success)"}}):u.error?o.jsx(Ra,{size:14,style:{color:"var(--warning)"}}):o.jsx(qi,{size:14,style:{color:"var(--error)"}})})]},u.eval_case_id))})]})]})]}):o.jsxs("div",{style:{textAlign:"center",padding:"32px",color:"var(--text-muted)",background:"var(--bg-tertiary)",borderRadius:"var(--radius-md)"},children:[o.jsx($a,{size:32,style:{marginBottom:8,opacity:.3}}),o.jsx("p",{children:"Run the evaluation set to see coverage metrics"})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:["Test Cases (",e.eval_cases.length,")"]}),e.eval_cases.length===0?o.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"No test cases yet. Add cases to this eval set to start testing."}):o.jsx("ul",{style:{listStyle:"none",padding:0},children:e.eval_cases.map(u=>{const d=i.get(u.id);return o.jsxs("li",{style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",background:"var(--bg-tertiary)",borderRadius:"var(--radius-sm)",marginBottom:8},children:[d?d.overall_passed?o.jsx(Wi,{size:14,style:{color:"var(--success)"}}):o.jsx(qi,{size:14,style:{color:"var(--error)"}}):o.jsx(ml,{size:14,style:{color:"var(--text-muted)"}}),o.jsx("span",{style:{flex:1},children:u.name}),o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},children:[u.invocations.length," turn(s)"]})]},u.id)})})]})]})]})}function wS(){const{project:e,setProject:t}=vt(),[n,r]=S.useState(""),[i,l]=S.useState(!0),[s,a]=S.useState(!1),[c,u]=S.useState(null),[d,p]=S.useState(!1);if(!e)return null;S.useEffect(()=>{f()},[e.id]);async function f(){l(!0),u(null);try{const h=await Rh(e.id);r(h),a(!1)}catch(h){u(h.message)}finally{l(!1)}}function m(h){h!==void 0&&(r(h),a(!0),u(null))}async function k(){l(!0),u(null);try{const h=await Ih(e.id,n);t(h),a(!1)}catch(h){u(h.message)}finally{l(!1)}}function w(){navigator.clipboard.writeText(n),p(!0),setTimeout(()=>p(!1),2e3)}function P(){const h=new Blob([n],{type:"text/yaml"}),x=URL.createObjectURL(h),z=document.createElement("a");z.href=x,z.download=`${e.name}.yaml`,z.click(),URL.revokeObjectURL(x)}function g(){const h=document.createElement("input");h.type="file",h.accept=".yaml,.yml",h.onchange=async x=>{var y;const z=(y=x.target.files)==null?void 0:y[0];if(!z)return;const j=await z.text();r(j),a(!0)},h.click()}return o.jsxs("div",{className:"yaml-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"yaml-header",children:[o.jsxs("div",{className:"yaml-title",children:[o.jsx("h3",{children:"Project Configuration"}),s&&o.jsxs("span",{className:"status-badge warning",children:[o.jsx(Ra,{size:12}),"Unsaved changes"]}),c&&o.jsxs("span",{className:"status-badge error",children:[o.jsx(Ra,{size:12}),c]}),d&&o.jsxs("span",{className:"status-badge success",children:[o.jsx(Qh,{size:12}),"Copied!"]})]}),o.jsxs("div",{className:"yaml-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:w,title:"Copy to clipboard",children:[o.jsx(Gh,{size:14}),"Copy"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:P,title:"Download YAML",children:[o.jsx(Zc,{size:14}),"Download"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:g,title:"Upload YAML",children:[o.jsx(iu,{size:14}),"Upload"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:f,title:"Reload from server",children:[o.jsx(vn,{size:14}),"Reload"]}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:k,disabled:!s||i,children:"Apply Changes"})]})]}),o.jsx("div",{className:"yaml-editor",children:o.jsx(Dr,{height:"100%",language:"yaml",theme:"vs-dark",value:n,onChange:m,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),o.jsxs("div",{className:"yaml-info",children:[o.jsx("p",{children:"This YAML represents your entire project configuration including the app, agents, tools, and state keys."}),o.jsxs("p",{children:["You can edit the YAML directly, then click ",o.jsx("code",{children:"Apply Changes"})," to update the project. Use ",o.jsx("code",{children:"Download"})," to save a backup or ",o.jsx("code",{children:"Upload"})," to import a configuration."]})]})]})}function Jp(e){return e.replace(/\\/g,"\\\\").replace(/"""/g,'\\"\\"\\"')}function jS(e,t="model"){if(!e)return"";const n=[`model="${e.model_name}"`];return e.api_base&&n.push(`api_base="${e.api_base}"`),e.temperature!=null&&n.push(`temperature=${e.temperature}`),e.max_output_tokens!=null&&n.push(`max_output_tokens=${e.max_output_tokens}`),e.top_p!=null&&n.push(`top_p=${e.top_p}`),e.top_k!=null&&n.push(`top_k=${e.top_k}`),e.provider==="litellm"?`${t} = LiteLlm(
    ${n.join(`,
    `)}
)`:e.provider==="anthropic"?`${t} = Claude(
    ${n.join(`,
    `)}
)`:`${t} = "${e.model_name}"  # Gemini model`}function _S(e,t){var n,r;if(e.type==="builtin")return e.name||"";if(e.type==="function")return e.name||"custom_tool";if(e.type==="agent"){const i=t.agents.find(l=>l.id===e.agent_id);return i?`AgentTool(agent=${i.name}_agent)`:"AgentTool(agent=sub_agent)"}else{if(e.type==="mcp")return(n=e.server)!=null&&n.name?`${e.server.name}_tools`:"";if(e.type==="skillset"){const i=e.skillset_id,l=(r=t.skillsets)==null?void 0:r.find(s=>s.id===i);return l?`${l.name.replace(/[^a-zA-Z0-9_]/g,"_")}_skillset`:""}}return""}function SS(e,t,n){const r=n.get(e.id)||`${e.name}_agent`;if(e.type==="LlmAgent"){const i=e,l=[`name="${e.name}"`];i.model&&l.push(`model=${e.name}_model`),i.instruction&&l.push(`instruction="""${Jp(i.instruction)}"""`),i.description&&l.push(`description="${Jp(i.description)}"`),i.output_key&&l.push(`output_key="${i.output_key}"`);const s=i.tools.map(c=>_S(c,t)).filter(c=>c&&!c.startsWith("#"));if(s.length>0&&l.push(`tools=[${s.join(", ")}]`),i.sub_agents&&i.sub_agents.length>0){const c=i.sub_agents.map(u=>n.get(u)||"sub_agent").join(", ");l.push(`sub_agents=[${c}]`)}i.include_contents==="none"&&l.push('include_contents="none"'),i.disallow_transfer_to_parent&&l.push("disallow_transfer_to_parent=True"),i.disallow_transfer_to_peers&&l.push("disallow_transfer_to_peers=True");const a={before_agent_callbacks:"before_agent_callback",after_agent_callbacks:"after_agent_callback",before_model_callbacks:"before_model_callback",after_model_callbacks:"after_model_callback",before_tool_callbacks:"before_tool_callback",after_tool_callbacks:"after_tool_callback"};for(const[c,u]of Object.entries(a)){const d=i[c]||[];if(d.length>0){const p=d.map(f=>{const m=t.custom_callbacks.find(k=>k.module_path===f.module_path);return m?`"${f.module_path}.${m.name}"`:`"${f.module_path}"`}).join(", ");if(d.length===1){const f=t.custom_callbacks.find(k=>k.module_path===d[0].module_path),m=f?`${d[0].module_path}.${f.name}`:d[0].module_path;l.push(`${u}="${m}"`)}else l.push(`${u}=[${p}]`)}}return`${r} = Agent(
    ${l.join(`,
    `)}
)`}else if(e.type==="SequentialAgent"){const i=e.sub_agents.map(l=>n.get(l)||"sub_agent").join(", ");return`${r} = SequentialAgent(
    name="${e.name}",
    sub_agents=[${i}]
)`}else if(e.type==="LoopAgent"){const i=e,l=[`name="${e.name}"`],s=e.sub_agents.map(a=>n.get(a)||"sub_agent").join(", ");return l.push(`sub_agents=[${s}]`),i.max_iterations&&l.push(`max_iterations=${i.max_iterations}`),`${r} = LoopAgent(
    ${l.join(`,
    `)}
)`}else if(e.type==="ParallelAgent"){const i=e.sub_agents.map(l=>n.get(l)||"sub_agent").join(", ");return`${r} = ParallelAgent(
    name="${e.name}",
    sub_agents=[${i}]
)`}return`# Unknown agent type: ${e.type}`}function CS(e){const t=[];return e.connection_type==="stdio"?(t.push(`${e.name}_tools = McpToolset(`),t.push("    connection_params=StdioConnectionParams("),t.push("        server_params=StdioServerParameters("),e.command&&t.push(`            command="${e.command}",`),e.args.length>0&&t.push(`            args=${JSON.stringify(e.args)},`),Object.keys(e.env).length>0&&t.push(`            env=${JSON.stringify(e.env)},`),t.push("        ),"),e.timeout&&t.push(`        timeout=${e.timeout},`),t.push("    ),"),t.push(")")):e.connection_type==="sse"&&(t.push(`${e.name}_tools = McpToolset(`),t.push("    connection_params=SseConnectionParams("),e.url&&t.push(`        url="${e.url}",`),e.timeout&&t.push(`        timeout=${e.timeout},`),t.push("    ),"),t.push(")")),t.join(`
`)}function NS(e,t){const n=[];return n.push(`# SkillSet: ${e.name}`),n.push(`${e.name.replace(/[^a-zA-Z0-9_]/g,"_")}_manager = KnowledgeServiceManager()`),n.push(`${e.name.replace(/[^a-zA-Z0-9_]/g,"_")}_skillset = SkillSet(`),n.push(`    skillset_id="${e.id}",`),n.push(`    project_id="${t.id}",`),n.push(`    manager=${e.name.replace(/[^a-zA-Z0-9_]/g,"_")}_manager,`),e.embedding_model?n.push(`    model_name="${e.embedding_model}",`):n.push('    model_name="text-embedding-004",'),n.push(`    search_enabled=${e.search_enabled?"True":"False"},`),n.push(`    preload_enabled=${e.preload_enabled?"True":"False"},`),e.preload_top_k&&n.push(`    preload_top_k=${e.preload_top_k},`),e.preload_min_score&&n.push(`    preload_min_score=${e.preload_min_score},`),n.push(")"),n.join(`
`)}function ES(e){const t=[];t.push('"""'),t.push(`${e.name} - Generated by ADK Playground`),e.description&&(t.push(""),t.push(e.description)),t.push('"""'),t.push("");const n=e.app.env_vars||{},r=Object.keys(n);r.length>0&&(t.push("import os"),t.push(""),t.push("# Environment Variables"),t.push("# Set these before running, or uncomment and add values:"),r.forEach(_=>{const A=n[_];if(A){const T=_.toLowerCase().includes("key")||_.toLowerCase().includes("secret")?"***":A;t.push(`os.environ["${_}"] = "${T}"  # Set your ${_}`)}else t.push(`# os.environ["${_}"] = ""  # TODO: Set your ${_}`)}),t.push(""));const i=new Set;i.add("from google.adk.agents import Agent");const l=e.agents.some(_=>_.type==="SequentialAgent"),s=e.agents.some(_=>_.type==="LoopAgent"),a=e.agents.some(_=>_.type==="ParallelAgent");l&&i.add("from google.adk.agents import SequentialAgent"),s&&i.add("from google.adk.agents import LoopAgent"),a&&i.add("from google.adk.agents import ParallelAgent"),e.agents.some(_=>{var A;return _.type==="LlmAgent"&&((A=_.model)==null?void 0:A.provider)==="litellm"})&&i.add("from google.adk.models.lite_llm import LiteLlm"),e.agents.some(_=>_.type==="LlmAgent"&&_.tools.some(A=>A.type==="agent"))&&i.add("from google.adk.tools import AgentTool");const d=new Set;if(e.agents.forEach(_=>{_.type==="LlmAgent"&&_.tools.forEach(A=>{A.type==="builtin"&&A.name&&d.add(A.name)})}),d.has("exit_loop")&&i.add("from google.adk.tools import exit_loop"),d.has("google_search")&&i.add("from google.adk.tools import google_search"),e.mcp_servers.length>0){i.add("from google.adk.tools.mcp_tool.mcp_toolset import McpToolset");const _=e.mcp_servers.some(D=>D.connection_type==="stdio"),A=e.mcp_servers.some(D=>D.connection_type==="sse");_&&(i.add("from google.adk.tools.mcp_tool.mcp_session_manager import StdioConnectionParams"),i.add("from mcp import StdioServerParameters")),A&&i.add("from google.adk.tools.mcp_tool.mcp_session_manager import SseConnectionParams")}e.skillsets&&e.skillsets.length>0;const f=new Set;e.agents.forEach(_=>{"tools"in _&&_.tools&&_.tools.forEach(A=>{A.type==="skillset"&&f.add(A.skillset_id)})}),f.size>0&&(i.add("from skillset import SkillSet"),i.add("from knowledge_service import KnowledgeServiceManager")),i.add("from google.adk.apps import App");const m=e.app.plugins.length>0;m&&e.app.plugins.forEach(_=>{_.type==="ReflectAndRetryToolPlugin"&&i.add("from google.adk.plugins import ReflectAndRetryToolPlugin")});const k=Array.from(i).sort();t.push(...k),t.push(""),t.push("");const w=new Map;e.agents.forEach(_=>{const A=_.name.endsWith("_agent")?_.name:`${_.name}_agent`;w.set(_.id,A)});const P=[],g=new Set;function h(_){if(g.has(_))return;const A=e.agents.find(D=>D.id===_);A&&(A.sub_agents.forEach(D=>h(D)),g.add(_),P.push(A))}e.agents.forEach(_=>h(_.id));const x=new Map;P.forEach(_=>{_.type==="LlmAgent"&&_.tools.forEach(A=>{A.type==="mcp"&&A.server&&x.set(A.server.name,A.server)})}),x.size>0&&(t.push("# MCP Server Toolsets"),x.forEach(_=>{t.push(CS(_)),t.push("")}),t.push(""));const z=new Set;P.forEach(_=>{_.type==="LlmAgent"&&_.tools.forEach(A=>{A.type==="skillset"&&z.add(A.skillset_id)})}),z.size>0&&e.skillsets&&(t.push("# SkillSet Toolsets"),t.push("# Note: SkillSets store knowledge in ~/.adk-playground/skillsets/{project_id}/"),z.forEach(_=>{var D;const A=(D=e.skillsets)==null?void 0:D.find(T=>T.id===_);A&&(t.push(NS(A,e)),t.push(""))}),t.push("")),e.custom_tools.length>0&&(t.push("# Custom Tools"),e.custom_tools.forEach(_=>{t.push(_.code),t.push("")}),t.push("")),e.custom_callbacks&&e.custom_callbacks.length>0&&(t.push("# Custom Callbacks"),e.custom_callbacks.forEach(_=>{t.push(_.code),t.push("")}),t.push("")),t.push("# Models"),P.forEach(_=>{_.type==="LlmAgent"&&_.model&&(t.push(jS(_.model,`${_.name}_model`)),t.push(""))}),t.push(""),t.push("# Agents"),P.forEach(_=>{t.push(SS(_,e,w)),t.push("")});const j=e.agents.find(_=>_.id===e.app.root_agent_id),y=j?w.get(j.id):"root_agent";if(t.push(""),t.push(""),t.push("# App Configuration"),t.push("app = App("),t.push(`    name="${e.app.name}",`),t.push(`    root_agent=${y},`),m){const _=e.app.plugins.map(A=>A.type==="ReflectAndRetryToolPlugin"?`        ReflectAndRetryToolPlugin(max_retries=${A.max_retries||3})`:`        # ${A.type}()`);t.push("    plugins=["),t.push(_.join(`,
`)),t.push("    ],")}return t.push(")"),t.join(`
`)}function zS(){const{project:e}=vt(),[t,n]=S.useState(!1);if(!e)return null;const r=S.useMemo(()=>ES(e),[e]);function i(){navigator.clipboard.writeText(r),n(!0),setTimeout(()=>n(!1),2e3)}function l(){const s=new Blob([r],{type:"text/x-python"}),a=URL.createObjectURL(s),c=document.createElement("a");c.href=a,c.download=`${e.name}_agent.py`,c.click(),URL.revokeObjectURL(a)}return o.jsxs("div",{className:"code-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"code-header",children:[o.jsxs("div",{className:"code-title",children:[o.jsx(An,{size:16}),o.jsx("h3",{children:"Python Code"}),o.jsx("span",{className:"badge",children:"Generated"}),t&&o.jsxs("span",{className:"status-badge success",children:[o.jsx(Qh,{size:12}),"Copied!"]})]}),o.jsxs("div",{className:"code-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:i,title:"Copy to clipboard",children:[o.jsx(Gh,{size:14}),"Copy"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:l,title:"Download Python file",children:[o.jsx(Zc,{size:14}),"Download"]})]})]}),o.jsx("div",{className:"code-editor",children:o.jsx(Dr,{height:"100%",language:"python",theme:"vs-dark",value:r,options:{readOnly:!0,minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),o.jsxs("div",{className:"code-info",children:[o.jsx("p",{children:"This is the Python code equivalent of your project configuration. You can use this code directly with ADK."}),o.jsxs("p",{children:["Place this in a file named ",o.jsx("code",{children:"agent.py"})," inside your agent directory, then run with ",o.jsx("code",{children:"adk web ."})," or ",o.jsx("code",{children:"adk run your_agent"}),"."]})]})]})}const TS=[{id:"app",label:"App",icon:nu},{id:"agents",label:"Agents",icon:Qn},{id:"tools",label:"Tools",icon:Dt},{id:"callbacks",label:"Callbacks",icon:An},{id:"run",label:"Run",icon:Yh},{id:"skillsets",label:"SkillSets",icon:n0},{id:"eval",label:"Evaluate",icon:f0},{id:"yaml",label:"YAML",icon:i0},{id:"code",label:"Code",icon:An}],PS=["app","agents","tools","callbacks","run","skillsets","eval","yaml","code"];function Ms(){const{projectId:e,tab:t,itemId:n}=i1(),r=Jc(),{project:i,setProject:l,activeTab:s,setActiveTab:a,hasUnsavedChanges:c,setHasUnsavedChanges:u,selectedAgentId:d,setSelectedAgentId:p,selectedToolId:f,setSelectedToolId:m}=vt(),[k,w]=S.useState(!0),[P,g]=S.useState(!1),h=S.useRef(!0),x=S.useRef(null);S.useEffect(()=>{t&&PS.includes(t)?a(t):!t&&e&&r(`/project/${e}/${s}`,{replace:!0})},[t,e]),S.useEffect(()=>{t==="agents"&&n?p(n):t==="tools"&&n&&m(n)},[t,n]);function z(T){a(T),T==="agents"&&d?r(`/project/${e}/${T}/${d}`,{replace:!0}):T==="tools"&&f?r(`/project/${e}/${T}/${f}`,{replace:!0}):r(`/project/${e}/${T}`,{replace:!0})}function j(T){T?r(`/project/${e}/${s}/${T}`,{replace:!0}):r(`/project/${e}/${s}`,{replace:!0})}S.useEffect(()=>(e&&y(e),()=>{l(null),u(!1)}),[e]);async function y(T){h.current=!0;try{const v=await zh(T);l(v),x.current=JSON.stringify(v),u(!1)}catch(v){console.error("Failed to load project:",v),r("/")}finally{w(!1),setTimeout(()=>{h.current=!1},100)}}async function _(){if(i){g(!0);try{await Aa(i.id,i),x.current=JSON.stringify(i),u(!1)}catch(T){console.error("Failed to save project:",T)}finally{g(!1)}}}const A=S.useRef(null);S.useEffect(()=>{if(i&&!h.current&&A.current){const T=i.app.models||[],v=A.current||[];if(T.some((I,q)=>{const F=v.find(Q=>Q.id===I.id);return F?F.provider!==I.provider||F.model_name!==I.model_name||F.api_base!==I.api_base||F.temperature!==I.temperature||F.max_output_tokens!==I.max_output_tokens||F.top_p!==I.top_p||F.top_k!==I.top_k:!1})){const I=i.app.default_model_id,q=i.agents.map(Q=>{if(Q.type==="LlmAgent"&&Q.model){const O=Q.model._appModelId;if(O){const M=T.find(R=>R.id===O);if(M)return{...Q,model:{provider:M.provider,model_name:M.model_name,api_base:M.api_base,temperature:M.temperature,max_output_tokens:M.max_output_tokens,top_p:M.top_p,top_k:M.top_k,fallbacks:[],_appModelId:O}}}else if(I){const M=T.find(R=>R.id===I);if(M&&Q.model.provider===M.provider&&Q.model.model_name===M.model_name&&Q.model.api_base===M.api_base)return{...Q,model:{provider:M.provider,model_name:M.model_name,api_base:M.api_base,temperature:M.temperature,max_output_tokens:M.max_output_tokens,top_p:M.top_p,top_k:M.top_k,fallbacks:[],_appModelId:I}}}}return Q});q.some((Q,O)=>JSON.stringify(Q)!==JSON.stringify(i.agents[O]))&&l({...i,agents:q})}}i&&(A.current=i.app.models||[])},[i==null?void 0:i.app.models,i,l]);const D=S.useRef(null);return S.useEffect(()=>(i&&!h.current&&x.current&&JSON.stringify(i)!==x.current&&(u(!0),D.current&&clearTimeout(D.current),D.current=setTimeout(async()=>{try{await Aa(i.id,i),x.current=JSON.stringify(i),u(!1)}catch(v){console.error("Auto-save failed:",v)}},500)),()=>{D.current&&clearTimeout(D.current)}),[i]),k?o.jsxs("div",{className:"loading-screen",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("header",{className:"top-bar",children:[o.jsxs("div",{className:"top-bar-left",children:[o.jsxs("button",{className:"back-btn",onClick:()=>r("/"),children:[o.jsx(t0,{size:18}),"Project"]}),o.jsx("h1",{className:"project-name",children:i.name})]}),o.jsx("nav",{className:"tabs-bar",children:TS.map(T=>o.jsxs("button",{className:`tab-btn ${s===T.id?"active":""}`,onClick:()=>z(T.id),children:[o.jsx(T.icon,{size:14}),T.label]},T.id))}),o.jsx("div",{className:"top-bar-right",children:o.jsxs("button",{className:"btn btn-primary",onClick:_,disabled:P,children:[o.jsx(tu,{size:16}),P?"Saving...":"Save"]})})]}),o.jsxs("main",{className:"main-content",children:[s==="app"&&o.jsx(v0,{}),s==="agents"&&o.jsx(S_,{onSelectAgent:j}),s==="tools"&&o.jsx(oS,{onSelectTool:j}),s==="callbacks"&&o.jsx(sS,{onSelectCallback:j}),s==="run"&&o.jsx(hS,{}),s==="skillsets"&&o.jsx(yS,{}),s==="eval"&&o.jsx(vS,{}),s==="yaml"&&o.jsx(wS,{}),s==="code"&&o.jsx(zS,{})]})]}):null}function AS(){const{setMcpServers:e,setBuiltinTools:t}=vt();return S.useEffect(()=>{Yc().then(e).catch(console.error),Mh().then(t).catch(console.error)},[e,t]),o.jsxs(k1,{children:[o.jsx(ar,{path:"/",element:o.jsx(g0,{})}),o.jsx(ar,{path:"/project/:projectId",element:o.jsx(Ms,{})}),o.jsx(ar,{path:"/project/:projectId/:tab",element:o.jsx(Ms,{})}),o.jsx(ar,{path:"/project/:projectId/:tab/:itemId",element:o.jsx(Ms,{})}),o.jsx(ar,{path:"*",element:o.jsx(v1,{to:"/",replace:!0})})]})}Os.createRoot(document.getElementById("root")).render(o.jsx(Nt.StrictMode,{children:o.jsx(_1,{children:o.jsx(AS,{})})}));export{bl as a,LS as g};
