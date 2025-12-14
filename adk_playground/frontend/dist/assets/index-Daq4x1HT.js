function Zx(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var to=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Mo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vf={exports:{}},Io={},Wf={exports:{}},_e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ai=Symbol.for("react.element"),ey=Symbol.for("react.portal"),ty=Symbol.for("react.fragment"),ny=Symbol.for("react.strict_mode"),ry=Symbol.for("react.profiler"),sy=Symbol.for("react.provider"),iy=Symbol.for("react.context"),oy=Symbol.for("react.forward_ref"),ay=Symbol.for("react.suspense"),ly=Symbol.for("react.memo"),cy=Symbol.for("react.lazy"),hd=Symbol.iterator;function uy(e){return e===null||typeof e!="object"?null:(e=hd&&e[hd]||e["@@iterator"],typeof e=="function"?e:null)}var Hf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qf=Object.assign,Jf={};function Zr(e,t,n){this.props=e,this.context=t,this.refs=Jf,this.updater=n||Hf}Zr.prototype.isReactComponent={};Zr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kf(){}Kf.prototype=Zr.prototype;function gc(e,t,n){this.props=e,this.context=t,this.refs=Jf,this.updater=n||Hf}var xc=gc.prototype=new Kf;xc.constructor=gc;qf(xc,Zr.prototype);xc.isPureReactComponent=!0;var gd=Array.isArray,Gf=Object.prototype.hasOwnProperty,yc={current:null},Qf={key:!0,ref:!0,__self:!0,__source:!0};function Yf(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Gf.call(t,r)&&!Qf.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ai,type:e,key:o,ref:a,props:i,_owner:yc.current}}function dy(e,t){return{$$typeof:ai,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vc(e){return typeof e=="object"&&e!==null&&e.$$typeof===ai}function py(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var xd=/\/+/g;function da(e,t){return typeof e=="object"&&e!==null&&e.key!=null?py(""+e.key):t.toString(36)}function Fi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ai:case ey:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+da(a,0):r,gd(i)?(n="",e!=null&&(n=e.replace(xd,"$&/")+"/"),Fi(i,t,n,"",function(u){return u})):i!=null&&(vc(i)&&(i=dy(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(xd,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",gd(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+da(o,l);a+=Fi(o,t,n,c,i)}else if(c=uy(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+da(o,l++),a+=Fi(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function yi(e,t,n){if(e==null)return e;var r=[],i=0;return Fi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function fy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ft={current:null},Bi={transition:null},my={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:Bi,ReactCurrentOwner:yc};function Xf(){throw Error("act(...) is not supported in production builds of React.")}_e.Children={map:yi,forEach:function(e,t,n){yi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return yi(e,function(){t++}),t},toArray:function(e){return yi(e,function(t){return t})||[]},only:function(e){if(!vc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_e.Component=Zr;_e.Fragment=ty;_e.Profiler=ry;_e.PureComponent=gc;_e.StrictMode=ny;_e.Suspense=ay;_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=my;_e.act=Xf;_e.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=qf({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=yc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Gf.call(t,c)&&!Qf.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ai,type:e.type,key:i,ref:o,props:r,_owner:a}};_e.createContext=function(e){return e={$$typeof:iy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:sy,_context:e},e.Consumer=e};_e.createElement=Yf;_e.createFactory=function(e){var t=Yf.bind(null,e);return t.type=e,t};_e.createRef=function(){return{current:null}};_e.forwardRef=function(e){return{$$typeof:oy,render:e}};_e.isValidElement=vc;_e.lazy=function(e){return{$$typeof:cy,_payload:{_status:-1,_result:e},_init:fy}};_e.memo=function(e,t){return{$$typeof:ly,type:e,compare:t===void 0?null:t}};_e.startTransition=function(e){var t=Bi.transition;Bi.transition={};try{e()}finally{Bi.transition=t}};_e.unstable_act=Xf;_e.useCallback=function(e,t){return ft.current.useCallback(e,t)};_e.useContext=function(e){return ft.current.useContext(e)};_e.useDebugValue=function(){};_e.useDeferredValue=function(e){return ft.current.useDeferredValue(e)};_e.useEffect=function(e,t){return ft.current.useEffect(e,t)};_e.useId=function(){return ft.current.useId()};_e.useImperativeHandle=function(e,t,n){return ft.current.useImperativeHandle(e,t,n)};_e.useInsertionEffect=function(e,t){return ft.current.useInsertionEffect(e,t)};_e.useLayoutEffect=function(e,t){return ft.current.useLayoutEffect(e,t)};_e.useMemo=function(e,t){return ft.current.useMemo(e,t)};_e.useReducer=function(e,t,n){return ft.current.useReducer(e,t,n)};_e.useRef=function(e){return ft.current.useRef(e)};_e.useState=function(e){return ft.current.useState(e)};_e.useSyncExternalStore=function(e,t,n){return ft.current.useSyncExternalStore(e,t,n)};_e.useTransition=function(){return ft.current.useTransition()};_e.version="18.3.1";Wf.exports=_e;var k=Wf.exports;const zt=Mo(k),hy=Zx({__proto__:null,default:zt},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gy=k,xy=Symbol.for("react.element"),yy=Symbol.for("react.fragment"),vy=Object.prototype.hasOwnProperty,by=gy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ky={key:!0,ref:!0,__self:!0,__source:!0};function Zf(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)vy.call(t,r)&&!ky.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:xy,type:e,key:o,ref:a,props:i,_owner:by.current}}Io.Fragment=yy;Io.jsx=Zf;Io.jsxs=Zf;Vf.exports=Io;var s=Vf.exports,rl={},em={exports:{}},Lt={},tm={exports:{}},nm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,R){var j=$.length;$.push(R);e:for(;0<j;){var W=j-1>>>1,G=$[W];if(0<i(G,R))$[W]=R,$[j]=G,j=W;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var R=$[0],j=$.pop();if(j!==R){$[0]=j;e:for(var W=0,G=$.length,h=G>>>1;W<h;){var F=2*(W+1)-1,E=$[F],Q=F+1,V=$[Q];if(0>i(E,j))Q<G&&0>i(V,E)?($[W]=V,$[Q]=j,W=Q):($[W]=E,$[F]=j,W=F);else if(Q<G&&0>i(V,j))$[W]=V,$[Q]=j,W=Q;else break e}}return R}function i($,R){var j=$.sortIndex-R.sortIndex;return j!==0?j:$.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,p=null,f=3,m=!1,y=!1,w=!1,z=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g($){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=$)r(u),R.sortIndex=R.expirationTime,t(c,R);else break;R=n(u)}}function P($){if(w=!1,g($),!y)if(n(c)!==null)y=!0,ne(N);else{var R=n(u);R!==null&&T(P,R.startTime-$)}}function N($,R){y=!1,w&&(w=!1,v(b),b=-1),m=!0;var j=f;try{for(g(R),p=n(c);p!==null&&(!(p.expirationTime>R)||$&&!A());){var W=p.callback;if(typeof W=="function"){p.callback=null,f=p.priorityLevel;var G=W(p.expirationTime<=R);R=e.unstable_now(),typeof G=="function"?p.callback=G:p===n(c)&&r(c),g(R)}else r(c);p=n(c)}if(p!==null)var h=!0;else{var F=n(u);F!==null&&T(P,F.startTime-R),h=!1}return h}finally{p=null,f=j,m=!1}}var _=!1,C=null,b=-1,L=5,S=-1;function A(){return!(e.unstable_now()-S<L)}function M(){if(C!==null){var $=e.unstable_now();S=$;var R=!0;try{R=C(!0,$)}finally{R?q():(_=!1,C=null)}}else _=!1}var q;if(typeof x=="function")q=function(){x(M)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,B=U.port2;U.port1.onmessage=M,q=function(){B.postMessage(null)}}else q=function(){z(M,0)};function ne($){C=$,_||(_=!0,q())}function T($,R){b=z(function(){$(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){y||m||(y=!0,ne(N))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function($){switch(f){case 1:case 2:case 3:var R=3;break;default:R=f}var j=f;f=R;try{return $()}finally{f=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,R){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var j=f;f=$;try{return R()}finally{f=j}},e.unstable_scheduleCallback=function($,R,j){var W=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?W+j:W):j=W,$){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=j+G,$={id:d++,callback:R,priorityLevel:$,startTime:j,expirationTime:G,sortIndex:-1},j>W?($.sortIndex=j,t(u,$),n(c)===null&&$===n(u)&&(w?(v(b),b=-1):w=!0,T(P,j-W))):($.sortIndex=G,t(c,$),y||m||(y=!0,ne(N))),$},e.unstable_shouldYield=A,e.unstable_wrapCallback=function($){var R=f;return function(){var j=f;f=R;try{return $.apply(this,arguments)}finally{f=j}}}})(nm);tm.exports=nm;var wy=tm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jy=k,Pt=wy;function te(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rm=new Set,Os={};function gr(e,t){Wr(e,t),Wr(e+"Capture",t)}function Wr(e,t){for(Os[e]=t,e=0;e<t.length;e++)rm.add(t[e])}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sl=Object.prototype.hasOwnProperty,_y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yd={},vd={};function Sy(e){return sl.call(vd,e)?!0:sl.call(yd,e)?!1:_y.test(e)?vd[e]=!0:(yd[e]=!0,!1)}function Cy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ny(e,t,n,r){if(t===null||typeof t>"u"||Cy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function mt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var st={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){st[e]=new mt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];st[t]=new mt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){st[e]=new mt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){st[e]=new mt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){st[e]=new mt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){st[e]=new mt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){st[e]=new mt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){st[e]=new mt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){st[e]=new mt(e,5,!1,e.toLowerCase(),null,!1,!1)});var bc=/[\-:]([a-z])/g;function kc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(bc,kc);st[t]=new mt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(bc,kc);st[t]=new mt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(bc,kc);st[t]=new mt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){st[e]=new mt(e,1,!1,e.toLowerCase(),null,!1,!1)});st.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){st[e]=new mt(e,1,!1,e.toLowerCase(),null,!0,!0)});function wc(e,t,n,r){var i=st.hasOwnProperty(t)?st[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ny(t,n,i,r)&&(n=null),r||i===null?Sy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var jn=jy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vi=Symbol.for("react.element"),jr=Symbol.for("react.portal"),_r=Symbol.for("react.fragment"),jc=Symbol.for("react.strict_mode"),il=Symbol.for("react.profiler"),sm=Symbol.for("react.provider"),im=Symbol.for("react.context"),_c=Symbol.for("react.forward_ref"),ol=Symbol.for("react.suspense"),al=Symbol.for("react.suspense_list"),Sc=Symbol.for("react.memo"),Nn=Symbol.for("react.lazy"),om=Symbol.for("react.offscreen"),bd=Symbol.iterator;function os(e){return e===null||typeof e!="object"?null:(e=bd&&e[bd]||e["@@iterator"],typeof e=="function"?e:null)}var Ue=Object.assign,pa;function vs(e){if(pa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);pa=t&&t[1]||""}return`
`+pa+e}var fa=!1;function ma(e,t){if(!e||fa)return"";fa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{fa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?vs(e):""}function Ey(e){switch(e.tag){case 5:return vs(e.type);case 16:return vs("Lazy");case 13:return vs("Suspense");case 19:return vs("SuspenseList");case 0:case 2:case 15:return e=ma(e.type,!1),e;case 11:return e=ma(e.type.render,!1),e;case 1:return e=ma(e.type,!0),e;default:return""}}function ll(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _r:return"Fragment";case jr:return"Portal";case il:return"Profiler";case jc:return"StrictMode";case ol:return"Suspense";case al:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case im:return(e.displayName||"Context")+".Consumer";case sm:return(e._context.displayName||"Context")+".Provider";case _c:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Sc:return t=e.displayName||null,t!==null?t:ll(e.type)||"Memo";case Nn:t=e._payload,e=e._init;try{return ll(e(t))}catch{}}return null}function zy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ll(t);case 8:return t===jc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function am(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ty(e){var t=am(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bi(e){e._valueTracker||(e._valueTracker=Ty(e))}function lm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=am(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function no(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cl(e,t){var n=t.checked;return Ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function kd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cm(e,t){t=t.checked,t!=null&&wc(e,"checked",t,!1)}function ul(e,t){cm(e,t);var n=Wn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?dl(e,t.type,n):t.hasOwnProperty("defaultValue")&&dl(e,t.type,Wn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function dl(e,t,n){(t!=="number"||no(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var bs=Array.isArray;function Ir(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function pl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(te(91));return Ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function jd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(te(92));if(bs(n)){if(1<n.length)throw Error(te(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wn(n)}}function um(e,t){var n=Wn(t.value),r=Wn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function _d(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function dm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?dm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ki,pm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ki=ki||document.createElement("div"),ki.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ki.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $s(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _s={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Py=["Webkit","ms","Moz","O"];Object.keys(_s).forEach(function(e){Py.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_s[t]=_s[e]})});function fm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_s.hasOwnProperty(e)&&_s[e]?(""+t).trim():t+"px"}function mm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=fm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Ly=Ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ml(e,t){if(t){if(Ly[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(te(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(te(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(te(61))}if(t.style!=null&&typeof t.style!="object")throw Error(te(62))}}function hl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gl=null;function Cc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xl=null,Or=null,$r=null;function Sd(e){if(e=ui(e)){if(typeof xl!="function")throw Error(te(280));var t=e.stateNode;t&&(t=Bo(t),xl(e.stateNode,e.type,t))}}function hm(e){Or?$r?$r.push(e):$r=[e]:Or=e}function gm(){if(Or){var e=Or,t=$r;if($r=Or=null,Sd(e),t)for(e=0;e<t.length;e++)Sd(t[e])}}function xm(e,t){return e(t)}function ym(){}var ha=!1;function vm(e,t,n){if(ha)return e(t,n);ha=!0;try{return xm(e,t,n)}finally{ha=!1,(Or!==null||$r!==null)&&(ym(),gm())}}function Ds(e,t){var n=e.stateNode;if(n===null)return null;var r=Bo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(te(231,t,typeof n));return n}var yl=!1;if(vn)try{var as={};Object.defineProperty(as,"passive",{get:function(){yl=!0}}),window.addEventListener("test",as,as),window.removeEventListener("test",as,as)}catch{yl=!1}function Ay(e,t,n,r,i,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Ss=!1,ro=null,so=!1,vl=null,Ry={onError:function(e){Ss=!0,ro=e}};function My(e,t,n,r,i,o,a,l,c){Ss=!1,ro=null,Ay.apply(Ry,arguments)}function Iy(e,t,n,r,i,o,a,l,c){if(My.apply(this,arguments),Ss){if(Ss){var u=ro;Ss=!1,ro=null}else throw Error(te(198));so||(so=!0,vl=u)}}function xr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cd(e){if(xr(e)!==e)throw Error(te(188))}function Oy(e){var t=e.alternate;if(!t){if(t=xr(e),t===null)throw Error(te(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Cd(i),e;if(o===r)return Cd(i),t;o=o.sibling}throw Error(te(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(te(189))}}if(n.alternate!==r)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?e:t}function km(e){return e=Oy(e),e!==null?wm(e):null}function wm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wm(e);if(t!==null)return t;e=e.sibling}return null}var jm=Pt.unstable_scheduleCallback,Nd=Pt.unstable_cancelCallback,$y=Pt.unstable_shouldYield,Dy=Pt.unstable_requestPaint,We=Pt.unstable_now,Fy=Pt.unstable_getCurrentPriorityLevel,Nc=Pt.unstable_ImmediatePriority,_m=Pt.unstable_UserBlockingPriority,io=Pt.unstable_NormalPriority,By=Pt.unstable_LowPriority,Sm=Pt.unstable_IdlePriority,Oo=null,ln=null;function Uy(e){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(Oo,e,void 0,(e.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:Hy,Vy=Math.log,Wy=Math.LN2;function Hy(e){return e>>>=0,e===0?32:31-(Vy(e)/Wy|0)|0}var wi=64,ji=4194304;function ks(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function oo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=ks(l):(o&=a,o!==0&&(r=ks(o)))}else a=n&~i,a!==0?r=ks(a):o!==0&&(r=ks(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Qt(t),i=1<<n,r|=e[n],t&=~i;return r}function qy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Qt(o),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=qy(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function bl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cm(){var e=wi;return wi<<=1,!(wi&4194240)&&(wi=64),e}function ga(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function li(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qt(t),e[t]=n}function Ky(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Qt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ec(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Qt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Te=0;function Nm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Em,zc,zm,Tm,Pm,kl=!1,_i=[],Mn=null,In=null,On=null,Fs=new Map,Bs=new Map,zn=[],Gy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ed(e,t){switch(e){case"focusin":case"focusout":Mn=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":Fs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bs.delete(t.pointerId)}}function ls(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ui(t),t!==null&&zc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Qy(e,t,n,r,i){switch(t){case"focusin":return Mn=ls(Mn,e,t,n,r,i),!0;case"dragenter":return In=ls(In,e,t,n,r,i),!0;case"mouseover":return On=ls(On,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Fs.set(o,ls(Fs.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Bs.set(o,ls(Bs.get(o)||null,e,t,n,r,i)),!0}return!1}function Lm(e){var t=rr(e.target);if(t!==null){var n=xr(t);if(n!==null){if(t=n.tag,t===13){if(t=bm(n),t!==null){e.blockedOn=t,Pm(e.priority,function(){zm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ui(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);gl=r,n.target.dispatchEvent(r),gl=null}else return t=ui(n),t!==null&&zc(t),e.blockedOn=n,!1;t.shift()}return!0}function zd(e,t,n){Ui(e)&&n.delete(t)}function Yy(){kl=!1,Mn!==null&&Ui(Mn)&&(Mn=null),In!==null&&Ui(In)&&(In=null),On!==null&&Ui(On)&&(On=null),Fs.forEach(zd),Bs.forEach(zd)}function cs(e,t){e.blockedOn===t&&(e.blockedOn=null,kl||(kl=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,Yy)))}function Us(e){function t(i){return cs(i,e)}if(0<_i.length){cs(_i[0],e);for(var n=1;n<_i.length;n++){var r=_i[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Mn!==null&&cs(Mn,e),In!==null&&cs(In,e),On!==null&&cs(On,e),Fs.forEach(t),Bs.forEach(t),n=0;n<zn.length;n++)r=zn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<zn.length&&(n=zn[0],n.blockedOn===null);)Lm(n),n.blockedOn===null&&zn.shift()}var Dr=jn.ReactCurrentBatchConfig,ao=!0;function Xy(e,t,n,r){var i=Te,o=Dr.transition;Dr.transition=null;try{Te=1,Tc(e,t,n,r)}finally{Te=i,Dr.transition=o}}function Zy(e,t,n,r){var i=Te,o=Dr.transition;Dr.transition=null;try{Te=4,Tc(e,t,n,r)}finally{Te=i,Dr.transition=o}}function Tc(e,t,n,r){if(ao){var i=wl(e,t,n,r);if(i===null)Ca(e,t,r,lo,n),Ed(e,r);else if(Qy(i,e,t,n,r))r.stopPropagation();else if(Ed(e,r),t&4&&-1<Gy.indexOf(e)){for(;i!==null;){var o=ui(i);if(o!==null&&Em(o),o=wl(e,t,n,r),o===null&&Ca(e,t,r,lo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ca(e,t,r,null,n)}}var lo=null;function wl(e,t,n,r){if(lo=null,e=Cc(r),e=rr(e),e!==null)if(t=xr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return lo=e,null}function Am(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fy()){case Nc:return 1;case _m:return 4;case io:case By:return 16;case Sm:return 536870912;default:return 16}default:return 16}}var Pn=null,Pc=null,Vi=null;function Rm(){if(Vi)return Vi;var e,t=Pc,n=t.length,r,i="value"in Pn?Pn.value:Pn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Vi=i.slice(e,1<r?1-r:void 0)}function Wi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Si(){return!0}function Td(){return!1}function At(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Si:Td,this.isPropagationStopped=Td,this}return Ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Si)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Si)},persist:function(){},isPersistent:Si}),t}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lc=At(es),ci=Ue({},es,{view:0,detail:0}),ev=At(ci),xa,ya,us,$o=Ue({},ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ac,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==us&&(us&&e.type==="mousemove"?(xa=e.screenX-us.screenX,ya=e.screenY-us.screenY):ya=xa=0,us=e),xa)},movementY:function(e){return"movementY"in e?e.movementY:ya}}),Pd=At($o),tv=Ue({},$o,{dataTransfer:0}),nv=At(tv),rv=Ue({},ci,{relatedTarget:0}),va=At(rv),sv=Ue({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),iv=At(sv),ov=Ue({},es,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),av=At(ov),lv=Ue({},es,{data:0}),Ld=At(lv),cv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=dv[e])?!!t[e]:!1}function Ac(){return pv}var fv=Ue({},ci,{key:function(e){if(e.key){var t=cv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ac,charCode:function(e){return e.type==="keypress"?Wi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mv=At(fv),hv=Ue({},$o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ad=At(hv),gv=Ue({},ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ac}),xv=At(gv),yv=Ue({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),vv=At(yv),bv=Ue({},$o,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kv=At(bv),wv=[9,13,27,32],Rc=vn&&"CompositionEvent"in window,Cs=null;vn&&"documentMode"in document&&(Cs=document.documentMode);var jv=vn&&"TextEvent"in window&&!Cs,Mm=vn&&(!Rc||Cs&&8<Cs&&11>=Cs),Rd=" ",Md=!1;function Im(e,t){switch(e){case"keyup":return wv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Om(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sr=!1;function _v(e,t){switch(e){case"compositionend":return Om(t);case"keypress":return t.which!==32?null:(Md=!0,Rd);case"textInput":return e=t.data,e===Rd&&Md?null:e;default:return null}}function Sv(e,t){if(Sr)return e==="compositionend"||!Rc&&Im(e,t)?(e=Rm(),Vi=Pc=Pn=null,Sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mm&&t.locale!=="ko"?null:t.data;default:return null}}var Cv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Id(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cv[e.type]:t==="textarea"}function $m(e,t,n,r){hm(r),t=co(t,"onChange"),0<t.length&&(n=new Lc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ns=null,Vs=null;function Nv(e){Gm(e,0)}function Do(e){var t=Er(e);if(lm(t))return e}function Ev(e,t){if(e==="change")return t}var Dm=!1;if(vn){var ba;if(vn){var ka="oninput"in document;if(!ka){var Od=document.createElement("div");Od.setAttribute("oninput","return;"),ka=typeof Od.oninput=="function"}ba=ka}else ba=!1;Dm=ba&&(!document.documentMode||9<document.documentMode)}function $d(){Ns&&(Ns.detachEvent("onpropertychange",Fm),Vs=Ns=null)}function Fm(e){if(e.propertyName==="value"&&Do(Vs)){var t=[];$m(t,Vs,e,Cc(e)),vm(Nv,t)}}function zv(e,t,n){e==="focusin"?($d(),Ns=t,Vs=n,Ns.attachEvent("onpropertychange",Fm)):e==="focusout"&&$d()}function Tv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Do(Vs)}function Pv(e,t){if(e==="click")return Do(t)}function Lv(e,t){if(e==="input"||e==="change")return Do(t)}function Av(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Zt=typeof Object.is=="function"?Object.is:Av;function Ws(e,t){if(Zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!sl.call(t,i)||!Zt(e[i],t[i]))return!1}return!0}function Dd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fd(e,t){var n=Dd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dd(n)}}function Bm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Um(){for(var e=window,t=no();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=no(e.document)}return t}function Mc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Rv(e){var t=Um(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bm(n.ownerDocument.documentElement,n)){if(r!==null&&Mc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Fd(n,o);var a=Fd(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Mv=vn&&"documentMode"in document&&11>=document.documentMode,Cr=null,jl=null,Es=null,_l=!1;function Bd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_l||Cr==null||Cr!==no(r)||(r=Cr,"selectionStart"in r&&Mc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Es&&Ws(Es,r)||(Es=r,r=co(jl,"onSelect"),0<r.length&&(t=new Lc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cr)))}function Ci(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Nr={animationend:Ci("Animation","AnimationEnd"),animationiteration:Ci("Animation","AnimationIteration"),animationstart:Ci("Animation","AnimationStart"),transitionend:Ci("Transition","TransitionEnd")},wa={},Vm={};vn&&(Vm=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function Fo(e){if(wa[e])return wa[e];if(!Nr[e])return e;var t=Nr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vm)return wa[e]=t[n];return e}var Wm=Fo("animationend"),Hm=Fo("animationiteration"),qm=Fo("animationstart"),Jm=Fo("transitionend"),Km=new Map,Ud="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jn(e,t){Km.set(e,t),gr(t,[e])}for(var ja=0;ja<Ud.length;ja++){var _a=Ud[ja],Iv=_a.toLowerCase(),Ov=_a[0].toUpperCase()+_a.slice(1);Jn(Iv,"on"+Ov)}Jn(Wm,"onAnimationEnd");Jn(Hm,"onAnimationIteration");Jn(qm,"onAnimationStart");Jn("dblclick","onDoubleClick");Jn("focusin","onFocus");Jn("focusout","onBlur");Jn(Jm,"onTransitionEnd");Wr("onMouseEnter",["mouseout","mouseover"]);Wr("onMouseLeave",["mouseout","mouseover"]);Wr("onPointerEnter",["pointerout","pointerover"]);Wr("onPointerLeave",["pointerout","pointerover"]);gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ws="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$v=new Set("cancel close invalid load scroll toggle".split(" ").concat(ws));function Vd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Iy(r,t,void 0,e),e.currentTarget=null}function Gm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Vd(i,l,u),o=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Vd(i,l,u),o=c}}}if(so)throw e=vl,so=!1,vl=null,e}function Me(e,t){var n=t[zl];n===void 0&&(n=t[zl]=new Set);var r=e+"__bubble";n.has(r)||(Qm(t,e,2,!1),n.add(r))}function Sa(e,t,n){var r=0;t&&(r|=4),Qm(n,e,r,t)}var Ni="_reactListening"+Math.random().toString(36).slice(2);function Hs(e){if(!e[Ni]){e[Ni]=!0,rm.forEach(function(n){n!=="selectionchange"&&($v.has(n)||Sa(n,!1,e),Sa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ni]||(t[Ni]=!0,Sa("selectionchange",!1,t))}}function Qm(e,t,n,r){switch(Am(t)){case 1:var i=Xy;break;case 4:i=Zy;break;default:i=Tc}n=i.bind(null,t,n,e),i=void 0,!yl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ca(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=rr(l),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}l=l.parentNode}}r=r.return}vm(function(){var u=o,d=Cc(n),p=[];e:{var f=Km.get(e);if(f!==void 0){var m=Lc,y=e;switch(e){case"keypress":if(Wi(n)===0)break e;case"keydown":case"keyup":m=mv;break;case"focusin":y="focus",m=va;break;case"focusout":y="blur",m=va;break;case"beforeblur":case"afterblur":m=va;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Pd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=nv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=xv;break;case Wm:case Hm:case qm:m=iv;break;case Jm:m=vv;break;case"scroll":m=ev;break;case"wheel":m=kv;break;case"copy":case"cut":case"paste":m=av;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Ad}var w=(t&4)!==0,z=!w&&e==="scroll",v=w?f!==null?f+"Capture":null:f;w=[];for(var x=u,g;x!==null;){g=x;var P=g.stateNode;if(g.tag===5&&P!==null&&(g=P,v!==null&&(P=Ds(x,v),P!=null&&w.push(qs(x,P,g)))),z)break;x=x.return}0<w.length&&(f=new m(f,y,null,n,d),p.push({event:f,listeners:w}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==gl&&(y=n.relatedTarget||n.fromElement)&&(rr(y)||y[bn]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?rr(y):null,y!==null&&(z=xr(y),y!==z||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(w=Pd,P="onMouseLeave",v="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(w=Ad,P="onPointerLeave",v="onPointerEnter",x="pointer"),z=m==null?f:Er(m),g=y==null?f:Er(y),f=new w(P,x+"leave",m,n,d),f.target=z,f.relatedTarget=g,P=null,rr(d)===u&&(w=new w(v,x+"enter",y,n,d),w.target=g,w.relatedTarget=z,P=w),z=P,m&&y)t:{for(w=m,v=y,x=0,g=w;g;g=br(g))x++;for(g=0,P=v;P;P=br(P))g++;for(;0<x-g;)w=br(w),x--;for(;0<g-x;)v=br(v),g--;for(;x--;){if(w===v||v!==null&&w===v.alternate)break t;w=br(w),v=br(v)}w=null}else w=null;m!==null&&Wd(p,f,m,w,!1),y!==null&&z!==null&&Wd(p,z,y,w,!0)}}e:{if(f=u?Er(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var N=Ev;else if(Id(f))if(Dm)N=Lv;else{N=Tv;var _=zv}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=Pv);if(N&&(N=N(e,u))){$m(p,N,n,d);break e}_&&_(e,f,u),e==="focusout"&&(_=f._wrapperState)&&_.controlled&&f.type==="number"&&dl(f,"number",f.value)}switch(_=u?Er(u):window,e){case"focusin":(Id(_)||_.contentEditable==="true")&&(Cr=_,jl=u,Es=null);break;case"focusout":Es=jl=Cr=null;break;case"mousedown":_l=!0;break;case"contextmenu":case"mouseup":case"dragend":_l=!1,Bd(p,n,d);break;case"selectionchange":if(Mv)break;case"keydown":case"keyup":Bd(p,n,d)}var C;if(Rc)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Sr?Im(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Mm&&n.locale!=="ko"&&(Sr||b!=="onCompositionStart"?b==="onCompositionEnd"&&Sr&&(C=Rm()):(Pn=d,Pc="value"in Pn?Pn.value:Pn.textContent,Sr=!0)),_=co(u,b),0<_.length&&(b=new Ld(b,e,null,n,d),p.push({event:b,listeners:_}),C?b.data=C:(C=Om(n),C!==null&&(b.data=C)))),(C=jv?_v(e,n):Sv(e,n))&&(u=co(u,"onBeforeInput"),0<u.length&&(d=new Ld("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=C))}Gm(p,t)})}function qs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function co(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ds(e,n),o!=null&&r.unshift(qs(e,o,i)),o=Ds(e,t),o!=null&&r.push(qs(e,o,i))),e=e.return}return r}function br(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wd(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Ds(n,o),c!=null&&a.unshift(qs(n,c,l))):i||(c=Ds(n,o),c!=null&&a.push(qs(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Dv=/\r\n?/g,Fv=/\u0000|\uFFFD/g;function Hd(e){return(typeof e=="string"?e:""+e).replace(Dv,`
`).replace(Fv,"")}function Ei(e,t,n){if(t=Hd(t),Hd(e)!==t&&n)throw Error(te(425))}function uo(){}var Sl=null,Cl=null;function Nl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var El=typeof setTimeout=="function"?setTimeout:void 0,Bv=typeof clearTimeout=="function"?clearTimeout:void 0,qd=typeof Promise=="function"?Promise:void 0,Uv=typeof queueMicrotask=="function"?queueMicrotask:typeof qd<"u"?function(e){return qd.resolve(null).then(e).catch(Vv)}:El;function Vv(e){setTimeout(function(){throw e})}function Na(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Us(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Us(t)}function $n(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Jd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ts=Math.random().toString(36).slice(2),rn="__reactFiber$"+ts,Js="__reactProps$"+ts,bn="__reactContainer$"+ts,zl="__reactEvents$"+ts,Wv="__reactListeners$"+ts,Hv="__reactHandles$"+ts;function rr(e){var t=e[rn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[bn]||n[rn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Jd(e);e!==null;){if(n=e[rn])return n;e=Jd(e)}return t}e=n,n=e.parentNode}return null}function ui(e){return e=e[rn]||e[bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(te(33))}function Bo(e){return e[Js]||null}var Tl=[],zr=-1;function Kn(e){return{current:e}}function Ie(e){0>zr||(e.current=Tl[zr],Tl[zr]=null,zr--)}function Ae(e,t){zr++,Tl[zr]=e.current,e.current=t}var Hn={},lt=Kn(Hn),yt=Kn(!1),ur=Hn;function Hr(e,t){var n=e.type.contextTypes;if(!n)return Hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function vt(e){return e=e.childContextTypes,e!=null}function po(){Ie(yt),Ie(lt)}function Kd(e,t,n){if(lt.current!==Hn)throw Error(te(168));Ae(lt,t),Ae(yt,n)}function Ym(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(te(108,zy(e)||"Unknown",i));return Ue({},n,r)}function fo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hn,ur=lt.current,Ae(lt,e),Ae(yt,yt.current),!0}function Gd(e,t,n){var r=e.stateNode;if(!r)throw Error(te(169));n?(e=Ym(e,t,ur),r.__reactInternalMemoizedMergedChildContext=e,Ie(yt),Ie(lt),Ae(lt,e)):Ie(yt),Ae(yt,n)}var mn=null,Uo=!1,Ea=!1;function Xm(e){mn===null?mn=[e]:mn.push(e)}function qv(e){Uo=!0,Xm(e)}function Gn(){if(!Ea&&mn!==null){Ea=!0;var e=0,t=Te;try{var n=mn;for(Te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}mn=null,Uo=!1}catch(i){throw mn!==null&&(mn=mn.slice(e+1)),jm(Nc,Gn),i}finally{Te=t,Ea=!1}}return null}var Tr=[],Pr=0,mo=null,ho=0,It=[],Ot=0,dr=null,hn=1,gn="";function er(e,t){Tr[Pr++]=ho,Tr[Pr++]=mo,mo=e,ho=t}function Zm(e,t,n){It[Ot++]=hn,It[Ot++]=gn,It[Ot++]=dr,dr=e;var r=hn;e=gn;var i=32-Qt(r)-1;r&=~(1<<i),n+=1;var o=32-Qt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,hn=1<<32-Qt(t)+i|n<<i|r,gn=o+e}else hn=1<<o|n<<i|r,gn=e}function Ic(e){e.return!==null&&(er(e,1),Zm(e,1,0))}function Oc(e){for(;e===mo;)mo=Tr[--Pr],Tr[Pr]=null,ho=Tr[--Pr],Tr[Pr]=null;for(;e===dr;)dr=It[--Ot],It[Ot]=null,gn=It[--Ot],It[Ot]=null,hn=It[--Ot],It[Ot]=null}var Tt=null,Nt=null,$e=!1,Gt=null;function eh(e,t){var n=Dt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Qd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Tt=e,Nt=$n(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Tt=e,Nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dr!==null?{id:hn,overflow:gn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Dt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Tt=e,Nt=null,!0):!1;default:return!1}}function Pl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ll(e){if($e){var t=Nt;if(t){var n=t;if(!Qd(e,t)){if(Pl(e))throw Error(te(418));t=$n(n.nextSibling);var r=Tt;t&&Qd(e,t)?eh(r,n):(e.flags=e.flags&-4097|2,$e=!1,Tt=e)}}else{if(Pl(e))throw Error(te(418));e.flags=e.flags&-4097|2,$e=!1,Tt=e}}}function Yd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Tt=e}function zi(e){if(e!==Tt)return!1;if(!$e)return Yd(e),$e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Nl(e.type,e.memoizedProps)),t&&(t=Nt)){if(Pl(e))throw th(),Error(te(418));for(;t;)eh(e,t),t=$n(t.nextSibling)}if(Yd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(te(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Nt=$n(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Nt=null}}else Nt=Tt?$n(e.stateNode.nextSibling):null;return!0}function th(){for(var e=Nt;e;)e=$n(e.nextSibling)}function qr(){Nt=Tt=null,$e=!1}function $c(e){Gt===null?Gt=[e]:Gt.push(e)}var Jv=jn.ReactCurrentBatchConfig;function ds(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var r=n.stateNode}if(!r)throw Error(te(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,e))}return e}function Ti(e,t){throw e=Object.prototype.toString.call(t),Error(te(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Xd(e){var t=e._init;return t(e._payload)}function nh(e){function t(v,x){if(e){var g=v.deletions;g===null?(v.deletions=[x],v.flags|=16):g.push(x)}}function n(v,x){if(!e)return null;for(;x!==null;)t(v,x),x=x.sibling;return null}function r(v,x){for(v=new Map;x!==null;)x.key!==null?v.set(x.key,x):v.set(x.index,x),x=x.sibling;return v}function i(v,x){return v=Un(v,x),v.index=0,v.sibling=null,v}function o(v,x,g){return v.index=g,e?(g=v.alternate,g!==null?(g=g.index,g<x?(v.flags|=2,x):g):(v.flags|=2,x)):(v.flags|=1048576,x)}function a(v){return e&&v.alternate===null&&(v.flags|=2),v}function l(v,x,g,P){return x===null||x.tag!==6?(x=Ma(g,v.mode,P),x.return=v,x):(x=i(x,g),x.return=v,x)}function c(v,x,g,P){var N=g.type;return N===_r?d(v,x,g.props.children,P,g.key):x!==null&&(x.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Nn&&Xd(N)===x.type)?(P=i(x,g.props),P.ref=ds(v,x,g),P.return=v,P):(P=Yi(g.type,g.key,g.props,null,v.mode,P),P.ref=ds(v,x,g),P.return=v,P)}function u(v,x,g,P){return x===null||x.tag!==4||x.stateNode.containerInfo!==g.containerInfo||x.stateNode.implementation!==g.implementation?(x=Ia(g,v.mode,P),x.return=v,x):(x=i(x,g.children||[]),x.return=v,x)}function d(v,x,g,P,N){return x===null||x.tag!==7?(x=ar(g,v.mode,P,N),x.return=v,x):(x=i(x,g),x.return=v,x)}function p(v,x,g){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Ma(""+x,v.mode,g),x.return=v,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case vi:return g=Yi(x.type,x.key,x.props,null,v.mode,g),g.ref=ds(v,null,x),g.return=v,g;case jr:return x=Ia(x,v.mode,g),x.return=v,x;case Nn:var P=x._init;return p(v,P(x._payload),g)}if(bs(x)||os(x))return x=ar(x,v.mode,g,null),x.return=v,x;Ti(v,x)}return null}function f(v,x,g,P){var N=x!==null?x.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return N!==null?null:l(v,x,""+g,P);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case vi:return g.key===N?c(v,x,g,P):null;case jr:return g.key===N?u(v,x,g,P):null;case Nn:return N=g._init,f(v,x,N(g._payload),P)}if(bs(g)||os(g))return N!==null?null:d(v,x,g,P,null);Ti(v,g)}return null}function m(v,x,g,P,N){if(typeof P=="string"&&P!==""||typeof P=="number")return v=v.get(g)||null,l(x,v,""+P,N);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case vi:return v=v.get(P.key===null?g:P.key)||null,c(x,v,P,N);case jr:return v=v.get(P.key===null?g:P.key)||null,u(x,v,P,N);case Nn:var _=P._init;return m(v,x,g,_(P._payload),N)}if(bs(P)||os(P))return v=v.get(g)||null,d(x,v,P,N,null);Ti(x,P)}return null}function y(v,x,g,P){for(var N=null,_=null,C=x,b=x=0,L=null;C!==null&&b<g.length;b++){C.index>b?(L=C,C=null):L=C.sibling;var S=f(v,C,g[b],P);if(S===null){C===null&&(C=L);break}e&&C&&S.alternate===null&&t(v,C),x=o(S,x,b),_===null?N=S:_.sibling=S,_=S,C=L}if(b===g.length)return n(v,C),$e&&er(v,b),N;if(C===null){for(;b<g.length;b++)C=p(v,g[b],P),C!==null&&(x=o(C,x,b),_===null?N=C:_.sibling=C,_=C);return $e&&er(v,b),N}for(C=r(v,C);b<g.length;b++)L=m(C,v,b,g[b],P),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?b:L.key),x=o(L,x,b),_===null?N=L:_.sibling=L,_=L);return e&&C.forEach(function(A){return t(v,A)}),$e&&er(v,b),N}function w(v,x,g,P){var N=os(g);if(typeof N!="function")throw Error(te(150));if(g=N.call(g),g==null)throw Error(te(151));for(var _=N=null,C=x,b=x=0,L=null,S=g.next();C!==null&&!S.done;b++,S=g.next()){C.index>b?(L=C,C=null):L=C.sibling;var A=f(v,C,S.value,P);if(A===null){C===null&&(C=L);break}e&&C&&A.alternate===null&&t(v,C),x=o(A,x,b),_===null?N=A:_.sibling=A,_=A,C=L}if(S.done)return n(v,C),$e&&er(v,b),N;if(C===null){for(;!S.done;b++,S=g.next())S=p(v,S.value,P),S!==null&&(x=o(S,x,b),_===null?N=S:_.sibling=S,_=S);return $e&&er(v,b),N}for(C=r(v,C);!S.done;b++,S=g.next())S=m(C,v,b,S.value,P),S!==null&&(e&&S.alternate!==null&&C.delete(S.key===null?b:S.key),x=o(S,x,b),_===null?N=S:_.sibling=S,_=S);return e&&C.forEach(function(M){return t(v,M)}),$e&&er(v,b),N}function z(v,x,g,P){if(typeof g=="object"&&g!==null&&g.type===_r&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case vi:e:{for(var N=g.key,_=x;_!==null;){if(_.key===N){if(N=g.type,N===_r){if(_.tag===7){n(v,_.sibling),x=i(_,g.props.children),x.return=v,v=x;break e}}else if(_.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Nn&&Xd(N)===_.type){n(v,_.sibling),x=i(_,g.props),x.ref=ds(v,_,g),x.return=v,v=x;break e}n(v,_);break}else t(v,_);_=_.sibling}g.type===_r?(x=ar(g.props.children,v.mode,P,g.key),x.return=v,v=x):(P=Yi(g.type,g.key,g.props,null,v.mode,P),P.ref=ds(v,x,g),P.return=v,v=P)}return a(v);case jr:e:{for(_=g.key;x!==null;){if(x.key===_)if(x.tag===4&&x.stateNode.containerInfo===g.containerInfo&&x.stateNode.implementation===g.implementation){n(v,x.sibling),x=i(x,g.children||[]),x.return=v,v=x;break e}else{n(v,x);break}else t(v,x);x=x.sibling}x=Ia(g,v.mode,P),x.return=v,v=x}return a(v);case Nn:return _=g._init,z(v,x,_(g._payload),P)}if(bs(g))return y(v,x,g,P);if(os(g))return w(v,x,g,P);Ti(v,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,x!==null&&x.tag===6?(n(v,x.sibling),x=i(x,g),x.return=v,v=x):(n(v,x),x=Ma(g,v.mode,P),x.return=v,v=x),a(v)):n(v,x)}return z}var Jr=nh(!0),rh=nh(!1),go=Kn(null),xo=null,Lr=null,Dc=null;function Fc(){Dc=Lr=xo=null}function Bc(e){var t=go.current;Ie(go),e._currentValue=t}function Al(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fr(e,t){xo=e,Dc=Lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xt=!0),e.firstContext=null)}function Ut(e){var t=e._currentValue;if(Dc!==e)if(e={context:e,memoizedValue:t,next:null},Lr===null){if(xo===null)throw Error(te(308));Lr=e,xo.dependencies={lanes:0,firstContext:e}}else Lr=Lr.next=e;return t}var sr=null;function Uc(e){sr===null?sr=[e]:sr.push(e)}function sh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Uc(t)):(n.next=i.next,i.next=n),t.interleaved=n,kn(e,r)}function kn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var En=!1;function Vc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ih(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function xn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ne&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,kn(e,n)}return i=r.interleaved,i===null?(t.next=t,Uc(r)):(t.next=i.next,i.next=t),r.interleaved=t,kn(e,n)}function Hi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ec(e,n)}}function Zd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function yo(e,t,n,r){var i=e.updateQueue;En=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(o!==null){var p=i.baseState;a=0,d=u=c=null,l=o;do{var f=l.lane,m=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,w=l;switch(f=t,m=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){p=y.call(m,p,f);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,f=typeof y=="function"?y.call(m,p,f):y,f==null)break e;p=Ue({},p,f);break e;case 2:En=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else m={eventTime:m,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=m,c=p):d=d.next=m,a|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);fr|=a,e.lanes=a,e.memoizedState=p}}function ep(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(te(191,i));i.call(r)}}}var di={},cn=Kn(di),Ks=Kn(di),Gs=Kn(di);function ir(e){if(e===di)throw Error(te(174));return e}function Wc(e,t){switch(Ae(Gs,t),Ae(Ks,e),Ae(cn,di),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fl(t,e)}Ie(cn),Ae(cn,t)}function Kr(){Ie(cn),Ie(Ks),Ie(Gs)}function oh(e){ir(Gs.current);var t=ir(cn.current),n=fl(t,e.type);t!==n&&(Ae(Ks,e),Ae(cn,n))}function Hc(e){Ks.current===e&&(Ie(cn),Ie(Ks))}var Fe=Kn(0);function vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var za=[];function qc(){for(var e=0;e<za.length;e++)za[e]._workInProgressVersionPrimary=null;za.length=0}var qi=jn.ReactCurrentDispatcher,Ta=jn.ReactCurrentBatchConfig,pr=0,Be=null,Qe=null,Ze=null,bo=!1,zs=!1,Qs=0,Kv=0;function it(){throw Error(te(321))}function Jc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Zt(e[n],t[n]))return!1;return!0}function Kc(e,t,n,r,i,o){if(pr=o,Be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qi.current=e===null||e.memoizedState===null?Xv:Zv,e=n(r,i),zs){o=0;do{if(zs=!1,Qs=0,25<=o)throw Error(te(301));o+=1,Ze=Qe=null,t.updateQueue=null,qi.current=e1,e=n(r,i)}while(zs)}if(qi.current=ko,t=Qe!==null&&Qe.next!==null,pr=0,Ze=Qe=Be=null,bo=!1,t)throw Error(te(300));return e}function Gc(){var e=Qs!==0;return Qs=0,e}function tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Be.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function Vt(){if(Qe===null){var e=Be.alternate;e=e!==null?e.memoizedState:null}else e=Qe.next;var t=Ze===null?Be.memoizedState:Ze.next;if(t!==null)Ze=t,Qe=e;else{if(e===null)throw Error(te(310));Qe=e,e={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},Ze===null?Be.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function Ys(e,t){return typeof t=="function"?t(e):t}function Pa(e){var t=Vt(),n=t.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=e;var r=Qe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,c=null,u=o;do{var d=u.lane;if((pr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,a=r):c=c.next=p,Be.lanes|=d,fr|=d}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=l,Zt(r,t.memoizedState)||(xt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Be.lanes|=o,fr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function La(e){var t=Vt(),n=t.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Zt(o,t.memoizedState)||(xt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ah(){}function lh(e,t){var n=Be,r=Vt(),i=t(),o=!Zt(r.memoizedState,i);if(o&&(r.memoizedState=i,xt=!0),r=r.queue,Qc(dh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,Xs(9,uh.bind(null,n,r,i,t),void 0,null),et===null)throw Error(te(349));pr&30||ch(n,t,i)}return i}function ch(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Be.updateQueue,t===null?(t={lastEffect:null,stores:null},Be.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function uh(e,t,n,r){t.value=n,t.getSnapshot=r,ph(t)&&fh(e)}function dh(e,t,n){return n(function(){ph(t)&&fh(e)})}function ph(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Zt(e,n)}catch{return!0}}function fh(e){var t=kn(e,1);t!==null&&Yt(t,e,1,-1)}function tp(e){var t=tn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ys,lastRenderedState:e},t.queue=e,e=e.dispatch=Yv.bind(null,Be,e),[t.memoizedState,e]}function Xs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Be.updateQueue,t===null?(t={lastEffect:null,stores:null},Be.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function mh(){return Vt().memoizedState}function Ji(e,t,n,r){var i=tn();Be.flags|=e,i.memoizedState=Xs(1|t,n,void 0,r===void 0?null:r)}function Vo(e,t,n,r){var i=Vt();r=r===void 0?null:r;var o=void 0;if(Qe!==null){var a=Qe.memoizedState;if(o=a.destroy,r!==null&&Jc(r,a.deps)){i.memoizedState=Xs(t,n,o,r);return}}Be.flags|=e,i.memoizedState=Xs(1|t,n,o,r)}function np(e,t){return Ji(8390656,8,e,t)}function Qc(e,t){return Vo(2048,8,e,t)}function hh(e,t){return Vo(4,2,e,t)}function gh(e,t){return Vo(4,4,e,t)}function xh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yh(e,t,n){return n=n!=null?n.concat([e]):null,Vo(4,4,xh.bind(null,t,e),n)}function Yc(){}function vh(e,t){var n=Vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Jc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bh(e,t){var n=Vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Jc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function kh(e,t,n){return pr&21?(Zt(n,t)||(n=Cm(),Be.lanes|=n,fr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xt=!0),e.memoizedState=n)}function Gv(e,t){var n=Te;Te=n!==0&&4>n?n:4,e(!0);var r=Ta.transition;Ta.transition={};try{e(!1),t()}finally{Te=n,Ta.transition=r}}function wh(){return Vt().memoizedState}function Qv(e,t,n){var r=Bn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jh(e))_h(t,n);else if(n=sh(e,t,n,r),n!==null){var i=pt();Yt(n,e,r,i),Sh(n,t,r)}}function Yv(e,t,n){var r=Bn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jh(e))_h(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Zt(l,a)){var c=t.interleaved;c===null?(i.next=i,Uc(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=sh(e,t,i,r),n!==null&&(i=pt(),Yt(n,e,r,i),Sh(n,t,r))}}function jh(e){var t=e.alternate;return e===Be||t!==null&&t===Be}function _h(e,t){zs=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Sh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ec(e,n)}}var ko={readContext:Ut,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},Xv={readContext:Ut,useCallback:function(e,t){return tn().memoizedState=[e,t===void 0?null:t],e},useContext:Ut,useEffect:np,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ji(4194308,4,xh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ji(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ji(4,2,e,t)},useMemo:function(e,t){var n=tn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Qv.bind(null,Be,e),[r.memoizedState,e]},useRef:function(e){var t=tn();return e={current:e},t.memoizedState=e},useState:tp,useDebugValue:Yc,useDeferredValue:function(e){return tn().memoizedState=e},useTransition:function(){var e=tp(!1),t=e[0];return e=Gv.bind(null,e[1]),tn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Be,i=tn();if($e){if(n===void 0)throw Error(te(407));n=n()}else{if(n=t(),et===null)throw Error(te(349));pr&30||ch(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,np(dh.bind(null,r,o,e),[e]),r.flags|=2048,Xs(9,uh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=tn(),t=et.identifierPrefix;if($e){var n=gn,r=hn;n=(r&~(1<<32-Qt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Kv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zv={readContext:Ut,useCallback:vh,useContext:Ut,useEffect:Qc,useImperativeHandle:yh,useInsertionEffect:hh,useLayoutEffect:gh,useMemo:bh,useReducer:Pa,useRef:mh,useState:function(){return Pa(Ys)},useDebugValue:Yc,useDeferredValue:function(e){var t=Vt();return kh(t,Qe.memoizedState,e)},useTransition:function(){var e=Pa(Ys)[0],t=Vt().memoizedState;return[e,t]},useMutableSource:ah,useSyncExternalStore:lh,useId:wh,unstable_isNewReconciler:!1},e1={readContext:Ut,useCallback:vh,useContext:Ut,useEffect:Qc,useImperativeHandle:yh,useInsertionEffect:hh,useLayoutEffect:gh,useMemo:bh,useReducer:La,useRef:mh,useState:function(){return La(Ys)},useDebugValue:Yc,useDeferredValue:function(e){var t=Vt();return Qe===null?t.memoizedState=e:kh(t,Qe.memoizedState,e)},useTransition:function(){var e=La(Ys)[0],t=Vt().memoizedState;return[e,t]},useMutableSource:ah,useSyncExternalStore:lh,useId:wh,unstable_isNewReconciler:!1};function Jt(e,t){if(e&&e.defaultProps){t=Ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Rl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Wo={isMounted:function(e){return(e=e._reactInternals)?xr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pt(),i=Bn(e),o=xn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Dn(e,o,i),t!==null&&(Yt(t,e,i,r),Hi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pt(),i=Bn(e),o=xn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Dn(e,o,i),t!==null&&(Yt(t,e,i,r),Hi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pt(),r=Bn(e),i=xn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Dn(e,i,r),t!==null&&(Yt(t,e,r,n),Hi(t,e,r))}};function rp(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Ws(n,r)||!Ws(i,o):!0}function Ch(e,t,n){var r=!1,i=Hn,o=t.contextType;return typeof o=="object"&&o!==null?o=Ut(o):(i=vt(t)?ur:lt.current,r=t.contextTypes,o=(r=r!=null)?Hr(e,i):Hn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Wo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function sp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Wo.enqueueReplaceState(t,t.state,null)}function Ml(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Vc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ut(o):(o=vt(t)?ur:lt.current,i.context=Hr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Rl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Wo.enqueueReplaceState(i,i.state,null),yo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Gr(e,t){try{var n="",r=t;do n+=Ey(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Aa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Il(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var t1=typeof WeakMap=="function"?WeakMap:Map;function Nh(e,t,n){n=xn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){jo||(jo=!0,ql=r),Il(e,t)},n}function Eh(e,t,n){n=xn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Il(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Il(e,t),typeof r!="function"&&(Fn===null?Fn=new Set([this]):Fn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function ip(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new t1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=h1.bind(null,e,t,n),t.then(e,e))}function op(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ap(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=xn(-1,1),t.tag=2,Dn(n,t,1))),n.lanes|=1),e)}var n1=jn.ReactCurrentOwner,xt=!1;function dt(e,t,n,r){t.child=e===null?rh(t,null,n,r):Jr(t,e.child,n,r)}function lp(e,t,n,r,i){n=n.render;var o=t.ref;return Fr(t,i),r=Kc(e,t,n,r,o,i),n=Gc(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,wn(e,t,i)):($e&&n&&Ic(t),t.flags|=1,dt(e,t,r,i),t.child)}function cp(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!iu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,zh(e,t,o,r,i)):(e=Yi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ws,n(a,r)&&e.ref===t.ref)return wn(e,t,i)}return t.flags|=1,e=Un(o,r),e.ref=t.ref,e.return=t,t.child=e}function zh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ws(o,r)&&e.ref===t.ref)if(xt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(xt=!0);else return t.lanes=e.lanes,wn(e,t,i)}return Ol(e,t,n,r,i)}function Th(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ae(Rr,St),St|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ae(Rr,St),St|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ae(Rr,St),St|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ae(Rr,St),St|=r;return dt(e,t,i,n),t.child}function Ph(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ol(e,t,n,r,i){var o=vt(n)?ur:lt.current;return o=Hr(t,o),Fr(t,i),n=Kc(e,t,n,r,o,i),r=Gc(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,wn(e,t,i)):($e&&r&&Ic(t),t.flags|=1,dt(e,t,n,i),t.child)}function up(e,t,n,r,i){if(vt(n)){var o=!0;fo(t)}else o=!1;if(Fr(t,i),t.stateNode===null)Ki(e,t),Ch(t,n,r),Ml(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ut(u):(u=vt(n)?ur:lt.current,u=Hr(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&sp(t,a,r,u),En=!1;var f=t.memoizedState;a.state=f,yo(t,r,a,i),c=t.memoizedState,l!==r||f!==c||yt.current||En?(typeof d=="function"&&(Rl(t,n,d,r),c=t.memoizedState),(l=En||rp(t,n,l,r,f,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ih(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Jt(t.type,l),a.props=u,p=t.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ut(c):(c=vt(n)?ur:lt.current,c=Hr(t,c));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||f!==c)&&sp(t,a,r,c),En=!1,f=t.memoizedState,a.state=f,yo(t,r,a,i);var y=t.memoizedState;l!==p||f!==y||yt.current||En?(typeof m=="function"&&(Rl(t,n,m,r),y=t.memoizedState),(u=En||rp(t,n,u,r,f,y,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return $l(e,t,n,r,o,i)}function $l(e,t,n,r,i,o){Ph(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Gd(t,n,!1),wn(e,t,o);r=t.stateNode,n1.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Jr(t,e.child,null,o),t.child=Jr(t,null,l,o)):dt(e,t,l,o),t.memoizedState=r.state,i&&Gd(t,n,!0),t.child}function Lh(e){var t=e.stateNode;t.pendingContext?Kd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Kd(e,t.context,!1),Wc(e,t.containerInfo)}function dp(e,t,n,r,i){return qr(),$c(i),t.flags|=256,dt(e,t,n,r),t.child}var Dl={dehydrated:null,treeContext:null,retryLane:0};function Fl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ah(e,t,n){var r=t.pendingProps,i=Fe.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ae(Fe,i&1),e===null)return Ll(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Jo(a,r,0,null),e=ar(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Fl(n),t.memoizedState=Dl,e):Xc(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return r1(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Un(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Un(l,o):(o=ar(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Fl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Dl,r}return o=e.child,e=o.sibling,r=Un(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xc(e,t){return t=Jo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Pi(e,t,n,r){return r!==null&&$c(r),Jr(t,e.child,null,n),e=Xc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function r1(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Aa(Error(te(422))),Pi(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Jo({mode:"visible",children:r.children},i,0,null),o=ar(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Jr(t,e.child,null,a),t.child.memoizedState=Fl(a),t.memoizedState=Dl,o);if(!(t.mode&1))return Pi(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(te(419)),r=Aa(o,r,void 0),Pi(e,t,a,r)}if(l=(a&e.childLanes)!==0,xt||l){if(r=et,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,kn(e,i),Yt(r,e,i,-1))}return su(),r=Aa(Error(te(421))),Pi(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=g1.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Nt=$n(i.nextSibling),Tt=t,$e=!0,Gt=null,e!==null&&(It[Ot++]=hn,It[Ot++]=gn,It[Ot++]=dr,hn=e.id,gn=e.overflow,dr=t),t=Xc(t,r.children),t.flags|=4096,t)}function pp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Al(e.return,t,n)}function Ra(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Rh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(dt(e,t,r.children,n),r=Fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pp(e,n,t);else if(e.tag===19)pp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ae(Fe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ra(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ra(t,!0,n,null,o);break;case"together":Ra(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ki(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(te(153));if(t.child!==null){for(e=t.child,n=Un(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Un(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function s1(e,t,n){switch(t.tag){case 3:Lh(t),qr();break;case 5:oh(t);break;case 1:vt(t.type)&&fo(t);break;case 4:Wc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ae(go,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ae(Fe,Fe.current&1),t.flags|=128,null):n&t.child.childLanes?Ah(e,t,n):(Ae(Fe,Fe.current&1),e=wn(e,t,n),e!==null?e.sibling:null);Ae(Fe,Fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Rh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ae(Fe,Fe.current),r)break;return null;case 22:case 23:return t.lanes=0,Th(e,t,n)}return wn(e,t,n)}var Mh,Bl,Ih,Oh;Mh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bl=function(){};Ih=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ir(cn.current);var o=null;switch(n){case"input":i=cl(e,i),r=cl(e,r),o=[];break;case"select":i=Ue({},i,{value:void 0}),r=Ue({},r,{value:void 0}),o=[];break;case"textarea":i=pl(e,i),r=pl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=uo)}ml(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Os.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Os.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Me("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Oh=function(e,t,n,r){n!==r&&(t.flags|=4)};function ps(e,t){if(!$e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ot(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function i1(e,t,n){var r=t.pendingProps;switch(Oc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(t),null;case 1:return vt(t.type)&&po(),ot(t),null;case 3:return r=t.stateNode,Kr(),Ie(yt),Ie(lt),qc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Gt!==null&&(Gl(Gt),Gt=null))),Bl(e,t),ot(t),null;case 5:Hc(t);var i=ir(Gs.current);if(n=t.type,e!==null&&t.stateNode!=null)Ih(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(te(166));return ot(t),null}if(e=ir(cn.current),zi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[rn]=t,r[Js]=o,e=(t.mode&1)!==0,n){case"dialog":Me("cancel",r),Me("close",r);break;case"iframe":case"object":case"embed":Me("load",r);break;case"video":case"audio":for(i=0;i<ws.length;i++)Me(ws[i],r);break;case"source":Me("error",r);break;case"img":case"image":case"link":Me("error",r),Me("load",r);break;case"details":Me("toggle",r);break;case"input":kd(r,o),Me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Me("invalid",r);break;case"textarea":jd(r,o),Me("invalid",r)}ml(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Ei(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Ei(r.textContent,l,e),i=["children",""+l]):Os.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Me("scroll",r)}switch(n){case"input":bi(r),wd(r,o,!0);break;case"textarea":bi(r),_d(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=uo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=dm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[rn]=t,e[Js]=r,Mh(e,t,!1,!1),t.stateNode=e;e:{switch(a=hl(n,r),n){case"dialog":Me("cancel",e),Me("close",e),i=r;break;case"iframe":case"object":case"embed":Me("load",e),i=r;break;case"video":case"audio":for(i=0;i<ws.length;i++)Me(ws[i],e);i=r;break;case"source":Me("error",e),i=r;break;case"img":case"image":case"link":Me("error",e),Me("load",e),i=r;break;case"details":Me("toggle",e),i=r;break;case"input":kd(e,r),i=cl(e,r),Me("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ue({},r,{value:void 0}),Me("invalid",e);break;case"textarea":jd(e,r),i=pl(e,r),Me("invalid",e);break;default:i=r}ml(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?mm(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&pm(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&$s(e,c):typeof c=="number"&&$s(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Os.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Me("scroll",e):c!=null&&wc(e,o,c,a))}switch(n){case"input":bi(e),wd(e,r,!1);break;case"textarea":bi(e),_d(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ir(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ir(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=uo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ot(t),null;case 6:if(e&&t.stateNode!=null)Oh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(te(166));if(n=ir(Gs.current),ir(cn.current),zi(t)){if(r=t.stateNode,n=t.memoizedProps,r[rn]=t,(o=r.nodeValue!==n)&&(e=Tt,e!==null))switch(e.tag){case 3:Ei(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ei(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rn]=t,t.stateNode=r}return ot(t),null;case 13:if(Ie(Fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($e&&Nt!==null&&t.mode&1&&!(t.flags&128))th(),qr(),t.flags|=98560,o=!1;else if(o=zi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(te(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(te(317));o[rn]=t}else qr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ot(t),o=!1}else Gt!==null&&(Gl(Gt),Gt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Fe.current&1?Ye===0&&(Ye=3):su())),t.updateQueue!==null&&(t.flags|=4),ot(t),null);case 4:return Kr(),Bl(e,t),e===null&&Hs(t.stateNode.containerInfo),ot(t),null;case 10:return Bc(t.type._context),ot(t),null;case 17:return vt(t.type)&&po(),ot(t),null;case 19:if(Ie(Fe),o=t.memoizedState,o===null)return ot(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)ps(o,!1);else{if(Ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=vo(e),a!==null){for(t.flags|=128,ps(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ae(Fe,Fe.current&1|2),t.child}e=e.sibling}o.tail!==null&&We()>Qr&&(t.flags|=128,r=!0,ps(o,!1),t.lanes=4194304)}else{if(!r)if(e=vo(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ps(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!$e)return ot(t),null}else 2*We()-o.renderingStartTime>Qr&&n!==1073741824&&(t.flags|=128,r=!0,ps(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=We(),t.sibling=null,n=Fe.current,Ae(Fe,r?n&1|2:n&1),t):(ot(t),null);case 22:case 23:return ru(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?St&1073741824&&(ot(t),t.subtreeFlags&6&&(t.flags|=8192)):ot(t),null;case 24:return null;case 25:return null}throw Error(te(156,t.tag))}function o1(e,t){switch(Oc(t),t.tag){case 1:return vt(t.type)&&po(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kr(),Ie(yt),Ie(lt),qc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Hc(t),null;case 13:if(Ie(Fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(te(340));qr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ie(Fe),null;case 4:return Kr(),null;case 10:return Bc(t.type._context),null;case 22:case 23:return ru(),null;case 24:return null;default:return null}}var Li=!1,at=!1,a1=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Ar(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(e,t,r)}else n.current=null}function Ul(e,t,n){try{n()}catch(r){Ve(e,t,r)}}var fp=!1;function l1(e,t){if(Sl=ao,e=Um(),Mc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var m;p!==n||i!==0&&p.nodeType!==3||(l=a+i),p!==o||r!==0&&p.nodeType!==3||(c=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===e)break t;if(f===n&&++u===i&&(l=a),f===o&&++d===r&&(c=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cl={focusedElem:e,selectionRange:n},ao=!1,pe=t;pe!==null;)if(t=pe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,pe=e;else for(;pe!==null;){t=pe;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,z=y.memoizedState,v=t.stateNode,x=v.getSnapshotBeforeUpdate(t.elementType===t.type?w:Jt(t.type,w),z);v.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(P){Ve(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,pe=e;break}pe=t.return}return y=fp,fp=!1,y}function Ts(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ul(t,n,o)}i=i.next}while(i!==r)}}function Ho(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Vl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $h(e){var t=e.alternate;t!==null&&(e.alternate=null,$h(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[rn],delete t[Js],delete t[zl],delete t[Wv],delete t[Hv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dh(e){return e.tag===5||e.tag===3||e.tag===4}function mp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=uo));else if(r!==4&&(e=e.child,e!==null))for(Wl(e,t,n),e=e.sibling;e!==null;)Wl(e,t,n),e=e.sibling}function Hl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Hl(e,t,n),e=e.sibling;e!==null;)Hl(e,t,n),e=e.sibling}var nt=null,Kt=!1;function Sn(e,t,n){for(n=n.child;n!==null;)Fh(e,t,n),n=n.sibling}function Fh(e,t,n){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(Oo,n)}catch{}switch(n.tag){case 5:at||Ar(n,t);case 6:var r=nt,i=Kt;nt=null,Sn(e,t,n),nt=r,Kt=i,nt!==null&&(Kt?(e=nt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(Kt?(e=nt,n=n.stateNode,e.nodeType===8?Na(e.parentNode,n):e.nodeType===1&&Na(e,n),Us(e)):Na(nt,n.stateNode));break;case 4:r=nt,i=Kt,nt=n.stateNode.containerInfo,Kt=!0,Sn(e,t,n),nt=r,Kt=i;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Ul(n,t,a),i=i.next}while(i!==r)}Sn(e,t,n);break;case 1:if(!at&&(Ar(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ve(n,t,l)}Sn(e,t,n);break;case 21:Sn(e,t,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,Sn(e,t,n),at=r):Sn(e,t,n);break;default:Sn(e,t,n)}}function hp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new a1),t.forEach(function(r){var i=x1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:nt=l.stateNode,Kt=!1;break e;case 3:nt=l.stateNode.containerInfo,Kt=!0;break e;case 4:nt=l.stateNode.containerInfo,Kt=!0;break e}l=l.return}if(nt===null)throw Error(te(160));Fh(o,a,i),nt=null,Kt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Ve(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bh(t,e),t=t.sibling}function Bh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qt(t,e),en(e),r&4){try{Ts(3,e,e.return),Ho(3,e)}catch(w){Ve(e,e.return,w)}try{Ts(5,e,e.return)}catch(w){Ve(e,e.return,w)}}break;case 1:qt(t,e),en(e),r&512&&n!==null&&Ar(n,n.return);break;case 5:if(qt(t,e),en(e),r&512&&n!==null&&Ar(n,n.return),e.flags&32){var i=e.stateNode;try{$s(i,"")}catch(w){Ve(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&cm(i,o),hl(l,a);var u=hl(l,o);for(a=0;a<c.length;a+=2){var d=c[a],p=c[a+1];d==="style"?mm(i,p):d==="dangerouslySetInnerHTML"?pm(i,p):d==="children"?$s(i,p):wc(i,d,p,u)}switch(l){case"input":ul(i,o);break;case"textarea":um(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Ir(i,!!o.multiple,m,!1):f!==!!o.multiple&&(o.defaultValue!=null?Ir(i,!!o.multiple,o.defaultValue,!0):Ir(i,!!o.multiple,o.multiple?[]:"",!1))}i[Js]=o}catch(w){Ve(e,e.return,w)}}break;case 6:if(qt(t,e),en(e),r&4){if(e.stateNode===null)throw Error(te(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){Ve(e,e.return,w)}}break;case 3:if(qt(t,e),en(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Us(t.containerInfo)}catch(w){Ve(e,e.return,w)}break;case 4:qt(t,e),en(e);break;case 13:qt(t,e),en(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(tu=We())),r&4&&hp(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(at=(u=at)||d,qt(t,e),at=u):qt(t,e),en(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(pe=e,d=e.child;d!==null;){for(p=pe=d;pe!==null;){switch(f=pe,m=f.child,f.tag){case 0:case 11:case 14:case 15:Ts(4,f,f.return);break;case 1:Ar(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){Ve(r,n,w)}}break;case 5:Ar(f,f.return);break;case 22:if(f.memoizedState!==null){xp(p);continue}}m!==null?(m.return=f,pe=m):xp(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=fm("display",a))}catch(w){Ve(e,e.return,w)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(w){Ve(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:qt(t,e),en(e),r&4&&hp(e);break;case 21:break;default:qt(t,e),en(e)}}function en(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Dh(n)){var r=n;break e}n=n.return}throw Error(te(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($s(i,""),r.flags&=-33);var o=mp(e);Hl(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=mp(e);Wl(e,l,a);break;default:throw Error(te(161))}}catch(c){Ve(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function c1(e,t,n){pe=e,Uh(e)}function Uh(e,t,n){for(var r=(e.mode&1)!==0;pe!==null;){var i=pe,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Li;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||at;l=Li;var u=at;if(Li=a,(at=c)&&!u)for(pe=i;pe!==null;)a=pe,c=a.child,a.tag===22&&a.memoizedState!==null?yp(i):c!==null?(c.return=a,pe=c):yp(i);for(;o!==null;)pe=o,Uh(o),o=o.sibling;pe=i,Li=l,at=u}gp(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,pe=o):gp(e)}}function gp(e){for(;pe!==null;){var t=pe;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:at||Ho(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!at)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Jt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ep(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ep(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Us(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}at||t.flags&512&&Vl(t)}catch(f){Ve(t,t.return,f)}}if(t===e){pe=null;break}if(n=t.sibling,n!==null){n.return=t.return,pe=n;break}pe=t.return}}function xp(e){for(;pe!==null;){var t=pe;if(t===e){pe=null;break}var n=t.sibling;if(n!==null){n.return=t.return,pe=n;break}pe=t.return}}function yp(e){for(;pe!==null;){var t=pe;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ho(4,t)}catch(c){Ve(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Ve(t,i,c)}}var o=t.return;try{Vl(t)}catch(c){Ve(t,o,c)}break;case 5:var a=t.return;try{Vl(t)}catch(c){Ve(t,a,c)}}}catch(c){Ve(t,t.return,c)}if(t===e){pe=null;break}var l=t.sibling;if(l!==null){l.return=t.return,pe=l;break}pe=t.return}}var u1=Math.ceil,wo=jn.ReactCurrentDispatcher,Zc=jn.ReactCurrentOwner,Bt=jn.ReactCurrentBatchConfig,Ne=0,et=null,Ke=null,rt=0,St=0,Rr=Kn(0),Ye=0,Zs=null,fr=0,qo=0,eu=0,Ps=null,gt=null,tu=0,Qr=1/0,fn=null,jo=!1,ql=null,Fn=null,Ai=!1,Ln=null,_o=0,Ls=0,Jl=null,Gi=-1,Qi=0;function pt(){return Ne&6?We():Gi!==-1?Gi:Gi=We()}function Bn(e){return e.mode&1?Ne&2&&rt!==0?rt&-rt:Jv.transition!==null?(Qi===0&&(Qi=Cm()),Qi):(e=Te,e!==0||(e=window.event,e=e===void 0?16:Am(e.type)),e):1}function Yt(e,t,n,r){if(50<Ls)throw Ls=0,Jl=null,Error(te(185));li(e,n,r),(!(Ne&2)||e!==et)&&(e===et&&(!(Ne&2)&&(qo|=n),Ye===4&&Tn(e,rt)),bt(e,r),n===1&&Ne===0&&!(t.mode&1)&&(Qr=We()+500,Uo&&Gn()))}function bt(e,t){var n=e.callbackNode;Jy(e,t);var r=oo(e,e===et?rt:0);if(r===0)n!==null&&Nd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Nd(n),t===1)e.tag===0?qv(vp.bind(null,e)):Xm(vp.bind(null,e)),Uv(function(){!(Ne&6)&&Gn()}),n=null;else{switch(Nm(r)){case 1:n=Nc;break;case 4:n=_m;break;case 16:n=io;break;case 536870912:n=Sm;break;default:n=io}n=Qh(n,Vh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Vh(e,t){if(Gi=-1,Qi=0,Ne&6)throw Error(te(327));var n=e.callbackNode;if(Br()&&e.callbackNode!==n)return null;var r=oo(e,e===et?rt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=So(e,r);else{t=r;var i=Ne;Ne|=2;var o=Hh();(et!==e||rt!==t)&&(fn=null,Qr=We()+500,or(e,t));do try{f1();break}catch(l){Wh(e,l)}while(!0);Fc(),wo.current=o,Ne=i,Ke!==null?t=0:(et=null,rt=0,t=Ye)}if(t!==0){if(t===2&&(i=bl(e),i!==0&&(r=i,t=Kl(e,i))),t===1)throw n=Zs,or(e,0),Tn(e,r),bt(e,We()),n;if(t===6)Tn(e,r);else{if(i=e.current.alternate,!(r&30)&&!d1(i)&&(t=So(e,r),t===2&&(o=bl(e),o!==0&&(r=o,t=Kl(e,o))),t===1))throw n=Zs,or(e,0),Tn(e,r),bt(e,We()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(te(345));case 2:tr(e,gt,fn);break;case 3:if(Tn(e,r),(r&130023424)===r&&(t=tu+500-We(),10<t)){if(oo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){pt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=El(tr.bind(null,e,gt,fn),t);break}tr(e,gt,fn);break;case 4:if(Tn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Qt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=We()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*u1(r/1960))-r,10<r){e.timeoutHandle=El(tr.bind(null,e,gt,fn),r);break}tr(e,gt,fn);break;case 5:tr(e,gt,fn);break;default:throw Error(te(329))}}}return bt(e,We()),e.callbackNode===n?Vh.bind(null,e):null}function Kl(e,t){var n=Ps;return e.current.memoizedState.isDehydrated&&(or(e,t).flags|=256),e=So(e,t),e!==2&&(t=gt,gt=n,t!==null&&Gl(t)),e}function Gl(e){gt===null?gt=e:gt.push.apply(gt,e)}function d1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Zt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tn(e,t){for(t&=~eu,t&=~qo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Qt(t),r=1<<n;e[n]=-1,t&=~r}}function vp(e){if(Ne&6)throw Error(te(327));Br();var t=oo(e,0);if(!(t&1))return bt(e,We()),null;var n=So(e,t);if(e.tag!==0&&n===2){var r=bl(e);r!==0&&(t=r,n=Kl(e,r))}if(n===1)throw n=Zs,or(e,0),Tn(e,t),bt(e,We()),n;if(n===6)throw Error(te(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tr(e,gt,fn),bt(e,We()),null}function nu(e,t){var n=Ne;Ne|=1;try{return e(t)}finally{Ne=n,Ne===0&&(Qr=We()+500,Uo&&Gn())}}function mr(e){Ln!==null&&Ln.tag===0&&!(Ne&6)&&Br();var t=Ne;Ne|=1;var n=Bt.transition,r=Te;try{if(Bt.transition=null,Te=1,e)return e()}finally{Te=r,Bt.transition=n,Ne=t,!(Ne&6)&&Gn()}}function ru(){St=Rr.current,Ie(Rr)}function or(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bv(n)),Ke!==null)for(n=Ke.return;n!==null;){var r=n;switch(Oc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&po();break;case 3:Kr(),Ie(yt),Ie(lt),qc();break;case 5:Hc(r);break;case 4:Kr();break;case 13:Ie(Fe);break;case 19:Ie(Fe);break;case 10:Bc(r.type._context);break;case 22:case 23:ru()}n=n.return}if(et=e,Ke=e=Un(e.current,null),rt=St=t,Ye=0,Zs=null,eu=qo=fr=0,gt=Ps=null,sr!==null){for(t=0;t<sr.length;t++)if(n=sr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}sr=null}return e}function Wh(e,t){do{var n=Ke;try{if(Fc(),qi.current=ko,bo){for(var r=Be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}bo=!1}if(pr=0,Ze=Qe=Be=null,zs=!1,Qs=0,Zc.current=null,n===null||n.return===null){Ye=1,Zs=t,Ke=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=rt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=op(a);if(m!==null){m.flags&=-257,ap(m,a,l,o,t),m.mode&1&&ip(o,u,t),t=m,c=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(c),t.updateQueue=w}else y.add(c);break e}else{if(!(t&1)){ip(o,u,t),su();break e}c=Error(te(426))}}else if($e&&l.mode&1){var z=op(a);if(z!==null){!(z.flags&65536)&&(z.flags|=256),ap(z,a,l,o,t),$c(Gr(c,l));break e}}o=c=Gr(c,l),Ye!==4&&(Ye=2),Ps===null?Ps=[o]:Ps.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Nh(o,c,t);Zd(o,v);break e;case 1:l=c;var x=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof x.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Fn===null||!Fn.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var P=Eh(o,l,t);Zd(o,P);break e}}o=o.return}while(o!==null)}Jh(n)}catch(N){t=N,Ke===n&&n!==null&&(Ke=n=n.return);continue}break}while(!0)}function Hh(){var e=wo.current;return wo.current=ko,e===null?ko:e}function su(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),et===null||!(fr&268435455)&&!(qo&268435455)||Tn(et,rt)}function So(e,t){var n=Ne;Ne|=2;var r=Hh();(et!==e||rt!==t)&&(fn=null,or(e,t));do try{p1();break}catch(i){Wh(e,i)}while(!0);if(Fc(),Ne=n,wo.current=r,Ke!==null)throw Error(te(261));return et=null,rt=0,Ye}function p1(){for(;Ke!==null;)qh(Ke)}function f1(){for(;Ke!==null&&!$y();)qh(Ke)}function qh(e){var t=Gh(e.alternate,e,St);e.memoizedProps=e.pendingProps,t===null?Jh(e):Ke=t,Zc.current=null}function Jh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=o1(n,t),n!==null){n.flags&=32767,Ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ye=6,Ke=null;return}}else if(n=i1(n,t,St),n!==null){Ke=n;return}if(t=t.sibling,t!==null){Ke=t;return}Ke=t=e}while(t!==null);Ye===0&&(Ye=5)}function tr(e,t,n){var r=Te,i=Bt.transition;try{Bt.transition=null,Te=1,m1(e,t,n,r)}finally{Bt.transition=i,Te=r}return null}function m1(e,t,n,r){do Br();while(Ln!==null);if(Ne&6)throw Error(te(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(te(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ky(e,o),e===et&&(Ke=et=null,rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ai||(Ai=!0,Qh(io,function(){return Br(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Bt.transition,Bt.transition=null;var a=Te;Te=1;var l=Ne;Ne|=4,Zc.current=null,l1(e,n),Bh(n,e),Rv(Cl),ao=!!Sl,Cl=Sl=null,e.current=n,c1(n),Dy(),Ne=l,Te=a,Bt.transition=o}else e.current=n;if(Ai&&(Ai=!1,Ln=e,_o=i),o=e.pendingLanes,o===0&&(Fn=null),Uy(n.stateNode),bt(e,We()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(jo)throw jo=!1,e=ql,ql=null,e;return _o&1&&e.tag!==0&&Br(),o=e.pendingLanes,o&1?e===Jl?Ls++:(Ls=0,Jl=e):Ls=0,Gn(),null}function Br(){if(Ln!==null){var e=Nm(_o),t=Bt.transition,n=Te;try{if(Bt.transition=null,Te=16>e?16:e,Ln===null)var r=!1;else{if(e=Ln,Ln=null,_o=0,Ne&6)throw Error(te(331));var i=Ne;for(Ne|=4,pe=e.current;pe!==null;){var o=pe,a=o.child;if(pe.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(pe=u;pe!==null;){var d=pe;switch(d.tag){case 0:case 11:case 15:Ts(8,d,o)}var p=d.child;if(p!==null)p.return=d,pe=p;else for(;pe!==null;){d=pe;var f=d.sibling,m=d.return;if($h(d),d===u){pe=null;break}if(f!==null){f.return=m,pe=f;break}pe=m}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var z=w.sibling;w.sibling=null,w=z}while(w!==null)}}pe=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,pe=a;else e:for(;pe!==null;){if(o=pe,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ts(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,pe=v;break e}pe=o.return}}var x=e.current;for(pe=x;pe!==null;){a=pe;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,pe=g;else e:for(a=x;pe!==null;){if(l=pe,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ho(9,l)}}catch(N){Ve(l,l.return,N)}if(l===a){pe=null;break e}var P=l.sibling;if(P!==null){P.return=l.return,pe=P;break e}pe=l.return}}if(Ne=i,Gn(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(Oo,e)}catch{}r=!0}return r}finally{Te=n,Bt.transition=t}}return!1}function bp(e,t,n){t=Gr(n,t),t=Nh(e,t,1),e=Dn(e,t,1),t=pt(),e!==null&&(li(e,1,t),bt(e,t))}function Ve(e,t,n){if(e.tag===3)bp(e,e,n);else for(;t!==null;){if(t.tag===3){bp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fn===null||!Fn.has(r))){e=Gr(n,e),e=Eh(t,e,1),t=Dn(t,e,1),e=pt(),t!==null&&(li(t,1,e),bt(t,e));break}}t=t.return}}function h1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pt(),e.pingedLanes|=e.suspendedLanes&n,et===e&&(rt&n)===n&&(Ye===4||Ye===3&&(rt&130023424)===rt&&500>We()-tu?or(e,0):eu|=n),bt(e,t)}function Kh(e,t){t===0&&(e.mode&1?(t=ji,ji<<=1,!(ji&130023424)&&(ji=4194304)):t=1);var n=pt();e=kn(e,t),e!==null&&(li(e,t,n),bt(e,n))}function g1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Kh(e,n)}function x1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(te(314))}r!==null&&r.delete(t),Kh(e,n)}var Gh;Gh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||yt.current)xt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xt=!1,s1(e,t,n);xt=!!(e.flags&131072)}else xt=!1,$e&&t.flags&1048576&&Zm(t,ho,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ki(e,t),e=t.pendingProps;var i=Hr(t,lt.current);Fr(t,n),i=Kc(null,t,r,e,i,n);var o=Gc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,vt(r)?(o=!0,fo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vc(t),i.updater=Wo,t.stateNode=i,i._reactInternals=t,Ml(t,r,e,n),t=$l(null,t,r,!0,o,n)):(t.tag=0,$e&&o&&Ic(t),dt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ki(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=v1(r),e=Jt(r,e),i){case 0:t=Ol(null,t,r,e,n);break e;case 1:t=up(null,t,r,e,n);break e;case 11:t=lp(null,t,r,e,n);break e;case 14:t=cp(null,t,r,Jt(r.type,e),n);break e}throw Error(te(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),Ol(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),up(e,t,r,i,n);case 3:e:{if(Lh(t),e===null)throw Error(te(387));r=t.pendingProps,o=t.memoizedState,i=o.element,ih(e,t),yo(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Gr(Error(te(423)),t),t=dp(e,t,r,n,i);break e}else if(r!==i){i=Gr(Error(te(424)),t),t=dp(e,t,r,n,i);break e}else for(Nt=$n(t.stateNode.containerInfo.firstChild),Tt=t,$e=!0,Gt=null,n=rh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qr(),r===i){t=wn(e,t,n);break e}dt(e,t,r,n)}t=t.child}return t;case 5:return oh(t),e===null&&Ll(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Nl(r,i)?a=null:o!==null&&Nl(r,o)&&(t.flags|=32),Ph(e,t),dt(e,t,a,n),t.child;case 6:return e===null&&Ll(t),null;case 13:return Ah(e,t,n);case 4:return Wc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Jr(t,null,r,n):dt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),lp(e,t,r,i,n);case 7:return dt(e,t,t.pendingProps,n),t.child;case 8:return dt(e,t,t.pendingProps.children,n),t.child;case 12:return dt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Ae(go,r._currentValue),r._currentValue=a,o!==null)if(Zt(o.value,a)){if(o.children===i.children&&!yt.current){t=wn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=xn(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Al(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(te(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Al(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}dt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Fr(t,n),i=Ut(i),r=r(i),t.flags|=1,dt(e,t,r,n),t.child;case 14:return r=t.type,i=Jt(r,t.pendingProps),i=Jt(r.type,i),cp(e,t,r,i,n);case 15:return zh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),Ki(e,t),t.tag=1,vt(r)?(e=!0,fo(t)):e=!1,Fr(t,n),Ch(t,r,i),Ml(t,r,i,n),$l(null,t,r,!0,e,n);case 19:return Rh(e,t,n);case 22:return Th(e,t,n)}throw Error(te(156,t.tag))};function Qh(e,t){return jm(e,t)}function y1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,t,n,r){return new y1(e,t,n,r)}function iu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function v1(e){if(typeof e=="function")return iu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_c)return 11;if(e===Sc)return 14}return 2}function Un(e,t){var n=e.alternate;return n===null?(n=Dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yi(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")iu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case _r:return ar(n.children,i,o,t);case jc:a=8,i|=8;break;case il:return e=Dt(12,n,t,i|2),e.elementType=il,e.lanes=o,e;case ol:return e=Dt(13,n,t,i),e.elementType=ol,e.lanes=o,e;case al:return e=Dt(19,n,t,i),e.elementType=al,e.lanes=o,e;case om:return Jo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case sm:a=10;break e;case im:a=9;break e;case _c:a=11;break e;case Sc:a=14;break e;case Nn:a=16,r=null;break e}throw Error(te(130,e==null?e:typeof e,""))}return t=Dt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function ar(e,t,n,r){return e=Dt(7,e,r,t),e.lanes=n,e}function Jo(e,t,n,r){return e=Dt(22,e,r,t),e.elementType=om,e.lanes=n,e.stateNode={isHidden:!1},e}function Ma(e,t,n){return e=Dt(6,e,null,t),e.lanes=n,e}function Ia(e,t,n){return t=Dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function b1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ga(0),this.expirationTimes=ga(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ga(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ou(e,t,n,r,i,o,a,l,c){return e=new b1(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Dt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vc(o),e}function k1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Yh(e){if(!e)return Hn;e=e._reactInternals;e:{if(xr(e)!==e||e.tag!==1)throw Error(te(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(vt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(te(171))}if(e.tag===1){var n=e.type;if(vt(n))return Ym(e,n,t)}return t}function Xh(e,t,n,r,i,o,a,l,c){return e=ou(n,r,!0,e,i,o,a,l,c),e.context=Yh(null),n=e.current,r=pt(),i=Bn(n),o=xn(r,i),o.callback=t??null,Dn(n,o,i),e.current.lanes=i,li(e,i,r),bt(e,r),e}function Ko(e,t,n,r){var i=t.current,o=pt(),a=Bn(i);return n=Yh(n),t.context===null?t.context=n:t.pendingContext=n,t=xn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Dn(i,t,a),e!==null&&(Yt(e,i,a,o),Hi(e,i,a)),a}function Co(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function kp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function au(e,t){kp(e,t),(e=e.alternate)&&kp(e,t)}function w1(){return null}var Zh=typeof reportError=="function"?reportError:function(e){console.error(e)};function lu(e){this._internalRoot=e}Go.prototype.render=lu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(te(409));Ko(e,t,null,null)};Go.prototype.unmount=lu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mr(function(){Ko(null,e,null,null)}),t[bn]=null}};function Go(e){this._internalRoot=e}Go.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zn.length&&t!==0&&t<zn[n].priority;n++);zn.splice(n,0,e),n===0&&Lm(e)}};function cu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wp(){}function j1(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Co(a);o.call(u)}}var a=Xh(t,r,e,0,null,!1,!1,"",wp);return e._reactRootContainer=a,e[bn]=a.current,Hs(e.nodeType===8?e.parentNode:e),mr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Co(c);l.call(u)}}var c=ou(e,0,!1,null,null,!1,!1,"",wp);return e._reactRootContainer=c,e[bn]=c.current,Hs(e.nodeType===8?e.parentNode:e),mr(function(){Ko(t,c,n,r)}),c}function Yo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=Co(a);l.call(c)}}Ko(t,a,e,i)}else a=j1(n,t,e,i,r);return Co(a)}Em=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ks(t.pendingLanes);n!==0&&(Ec(t,n|1),bt(t,We()),!(Ne&6)&&(Qr=We()+500,Gn()))}break;case 13:mr(function(){var r=kn(e,1);if(r!==null){var i=pt();Yt(r,e,1,i)}}),au(e,1)}};zc=function(e){if(e.tag===13){var t=kn(e,134217728);if(t!==null){var n=pt();Yt(t,e,134217728,n)}au(e,134217728)}};zm=function(e){if(e.tag===13){var t=Bn(e),n=kn(e,t);if(n!==null){var r=pt();Yt(n,e,t,r)}au(e,t)}};Tm=function(){return Te};Pm=function(e,t){var n=Te;try{return Te=e,t()}finally{Te=n}};xl=function(e,t,n){switch(t){case"input":if(ul(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Bo(r);if(!i)throw Error(te(90));lm(r),ul(r,i)}}}break;case"textarea":um(e,n);break;case"select":t=n.value,t!=null&&Ir(e,!!n.multiple,t,!1)}};xm=nu;ym=mr;var _1={usingClientEntryPoint:!1,Events:[ui,Er,Bo,hm,gm,nu]},fs={findFiberByHostInstance:rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},S1={bundleType:fs.bundleType,version:fs.version,rendererPackageName:fs.rendererPackageName,rendererConfig:fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=km(e),e===null?null:e.stateNode},findFiberByHostInstance:fs.findFiberByHostInstance||w1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ri=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ri.isDisabled&&Ri.supportsFiber)try{Oo=Ri.inject(S1),ln=Ri}catch{}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_1;Lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cu(t))throw Error(te(200));return k1(e,t,null,n)};Lt.createRoot=function(e,t){if(!cu(e))throw Error(te(299));var n=!1,r="",i=Zh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ou(e,1,!1,null,null,n,!1,r,i),e[bn]=t.current,Hs(e.nodeType===8?e.parentNode:e),new lu(t)};Lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(te(188)):(e=Object.keys(e).join(","),Error(te(268,e)));return e=km(t),e=e===null?null:e.stateNode,e};Lt.flushSync=function(e){return mr(e)};Lt.hydrate=function(e,t,n){if(!Qo(t))throw Error(te(200));return Yo(null,e,t,!0,n)};Lt.hydrateRoot=function(e,t,n){if(!cu(e))throw Error(te(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Zh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Xh(t,null,e,1,n??null,i,!1,o,a),e[bn]=t.current,Hs(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Go(t)};Lt.render=function(e,t,n){if(!Qo(t))throw Error(te(200));return Yo(null,e,t,!1,n)};Lt.unmountComponentAtNode=function(e){if(!Qo(e))throw Error(te(40));return e._reactRootContainer?(mr(function(){Yo(null,null,e,!1,function(){e._reactRootContainer=null,e[bn]=null})}),!0):!1};Lt.unstable_batchedUpdates=nu;Lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qo(n))throw Error(te(200));if(e==null||e._reactInternals===void 0)throw Error(te(38));return Yo(e,t,n,!1,r)};Lt.version="18.3.1-next-f1338f8080-20240426";function eg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eg)}catch(e){console.error(e)}}eg(),em.exports=Lt;var tg=em.exports,jp=tg;rl.createRoot=jp.createRoot,rl.hydrateRoot=jp.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ei(){return ei=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ei.apply(this,arguments)}var An;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(An||(An={}));const _p="popstate";function C1(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Ql("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ng(i)}return E1(t,n,null,e)}function Ge(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function uu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function N1(){return Math.random().toString(36).substr(2,8)}function Sp(e,t){return{usr:e.state,key:e.key,idx:t}}function Ql(e,t,n,r){return n===void 0&&(n=null),ei({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ns(t):t,{state:n,key:t&&t.key||r||N1()})}function ng(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ns(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function E1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=An.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(ei({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function p(){l=An.Pop;let z=d(),v=z==null?null:z-u;u=z,c&&c({action:l,location:w.location,delta:v})}function f(z,v){l=An.Push;let x=Ql(w.location,z,v);u=d()+1;let g=Sp(x,u),P=w.createHref(x);try{a.pushState(g,"",P)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;i.location.assign(P)}o&&c&&c({action:l,location:w.location,delta:1})}function m(z,v){l=An.Replace;let x=Ql(w.location,z,v);u=d();let g=Sp(x,u),P=w.createHref(x);a.replaceState(g,"",P),o&&c&&c({action:l,location:w.location,delta:0})}function y(z){let v=i.location.origin!=="null"?i.location.origin:i.location.href,x=typeof z=="string"?z:ng(z);return x=x.replace(/ $/,"%20"),Ge(v,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,v)}let w={get action(){return l},get location(){return e(i,a)},listen(z){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(_p,p),c=z,()=>{i.removeEventListener(_p,p),c=null}},createHref(z){return t(i,z)},createURL:y,encodeLocation(z){let v=y(z);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:m,go(z){return a.go(z)}};return w}var Cp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Cp||(Cp={}));function z1(e,t,n){return n===void 0&&(n="/"),T1(e,t,n)}function T1(e,t,n,r){let i=typeof t=="string"?ns(t):t,o=ig(i.pathname||"/",n);if(o==null)return null;let a=rg(e);P1(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=V1(o);l=F1(a[c],u)}return l}function rg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(Ge(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=lr([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(Ge(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),rg(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:$1(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let c of sg(o.path))i(o,a,c)}),t}function sg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=sg(r.join("/")),l=[];return l.push(...a.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function P1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:D1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const L1=/^:[\w-]+$/,A1=3,R1=2,M1=1,I1=10,O1=-2,Np=e=>e==="*";function $1(e,t){let n=e.split("/"),r=n.length;return n.some(Np)&&(r+=O1),t&&(r+=R1),n.filter(i=>!Np(i)).reduce((i,o)=>i+(L1.test(o)?A1:o===""?M1:I1),r)}function D1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function F1(e,t,n){let{routesMeta:r}=e,i={},o="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",p=B1({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),f=c.route;if(!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:lr([o,p.pathname]),pathnameBase:K1(lr([o,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(o=lr([o,p.pathnameBase]))}return a}function B1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=U1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:f,isOptional:m}=d;if(f==="*"){let w=l[p]||"";a=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const y=l[p];return m&&!y?u[f]=void 0:u[f]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function U1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),uu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function V1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return uu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ig(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const W1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,H1=e=>W1.test(e);function q1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ns(e):e,o;if(n)if(H1(n))o=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),uu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?o=Ep(n.substring(1),"/"):o=Ep(n,t)}else o=t;return{pathname:o,search:G1(r),hash:Q1(i)}}function Ep(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Oa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function J1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function og(e,t){let n=J1(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ag(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ns(e):(i=ei({},e),Ge(!i.pathname||!i.pathname.includes("?"),Oa("?","pathname","search",i)),Ge(!i.pathname||!i.pathname.includes("#"),Oa("#","pathname","hash",i)),Ge(!i.search||!i.search.includes("#"),Oa("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}l=p>=0?t[p]:"/"}let c=q1(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const lr=e=>e.join("/").replace(/\/\/+/g,"/"),K1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),G1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Q1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Y1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const lg=["post","put","patch","delete"];new Set(lg);const X1=["get",...lg];new Set(X1);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ti(){return ti=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ti.apply(this,arguments)}const du=k.createContext(null),Z1=k.createContext(null),pi=k.createContext(null),Xo=k.createContext(null),Qn=k.createContext({outlet:null,matches:[],isDataRoute:!1}),cg=k.createContext(null);function fi(){return k.useContext(Xo)!=null}function pu(){return fi()||Ge(!1),k.useContext(Xo).location}function ug(e){k.useContext(pi).static||k.useLayoutEffect(e)}function fu(){let{isDataRoute:e}=k.useContext(Qn);return e?f0():e0()}function e0(){fi()||Ge(!1);let e=k.useContext(du),{basename:t,future:n,navigator:r}=k.useContext(pi),{matches:i}=k.useContext(Qn),{pathname:o}=pu(),a=JSON.stringify(og(i,n.v7_relativeSplatPath)),l=k.useRef(!1);return ug(()=>{l.current=!0}),k.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=ag(u,JSON.parse(a),o,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:lr([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,a,o,e])}function t0(){let{matches:e}=k.useContext(Qn),t=e[e.length-1];return t?t.params:{}}function n0(e,t){return r0(e,t)}function r0(e,t,n,r){fi()||Ge(!1);let{navigator:i}=k.useContext(pi),{matches:o}=k.useContext(Qn),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=pu(),d;if(t){var p;let z=typeof t=="string"?ns(t):t;c==="/"||(p=z.pathname)!=null&&p.startsWith(c)||Ge(!1),d=z}else d=u;let f=d.pathname||"/",m=f;if(c!=="/"){let z=c.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(z.length).join("/")}let y=z1(e,{pathname:m}),w=l0(y&&y.map(z=>Object.assign({},z,{params:Object.assign({},l,z.params),pathname:lr([c,i.encodeLocation?i.encodeLocation(z.pathname).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?c:lr([c,i.encodeLocation?i.encodeLocation(z.pathnameBase).pathname:z.pathnameBase])})),o,n,r);return t&&w?k.createElement(Xo.Provider,{value:{location:ti({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:An.Pop}},w):w}function s0(){let e=p0(),t=Y1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,null)}const i0=k.createElement(s0,null);class o0 extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(Qn.Provider,{value:this.props.routeContext},k.createElement(cg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function a0(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext(du);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Qn.Provider,{value:t},r)}function l0(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Ge(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:m}=n,y=p.route.loader&&f[p.route.id]===void 0&&(!m||m[p.route.id]===void 0);if(p.route.lazy||y){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,p,f)=>{let m,y=!1,w=null,z=null;n&&(m=l&&p.route.id?l[p.route.id]:void 0,w=p.route.errorElement||i0,c&&(u<0&&f===0?(m0("route-fallback"),y=!0,z=null):u===f&&(y=!0,z=p.route.hydrateFallbackElement||null)));let v=t.concat(a.slice(0,f+1)),x=()=>{let g;return m?g=w:y?g=z:p.route.Component?g=k.createElement(p.route.Component,null):p.route.element?g=p.route.element:g=d,k.createElement(a0,{match:p,routeContext:{outlet:d,matches:v,isDataRoute:n!=null},children:g})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?k.createElement(o0,{location:n.location,revalidation:n.revalidation,component:w,error:m,children:x(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):x()},null)}var dg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(dg||{}),pg=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(pg||{});function c0(e){let t=k.useContext(du);return t||Ge(!1),t}function u0(e){let t=k.useContext(Z1);return t||Ge(!1),t}function d0(e){let t=k.useContext(Qn);return t||Ge(!1),t}function fg(e){let t=d0(),n=t.matches[t.matches.length-1];return n.route.id||Ge(!1),n.route.id}function p0(){var e;let t=k.useContext(cg),n=u0(),r=fg();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function f0(){let{router:e}=c0(dg.UseNavigateStable),t=fg(pg.UseNavigateStable),n=k.useRef(!1);return ug(()=>{n.current=!0}),k.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ti({fromRouteId:t},o)))},[e,t])}const zp={};function m0(e,t,n){zp[e]||(zp[e]=!0)}function h0(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function g0(e){let{to:t,replace:n,state:r,relative:i}=e;fi()||Ge(!1);let{future:o,static:a}=k.useContext(pi),{matches:l}=k.useContext(Qn),{pathname:c}=pu(),u=fu(),d=ag(t,og(l,o.v7_relativeSplatPath),c,i==="path"),p=JSON.stringify(d);return k.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:i}),[u,p,i,n,r]),null}function wr(e){Ge(!1)}function x0(e){let{basename:t="/",children:n=null,location:r,navigationType:i=An.Pop,navigator:o,static:a=!1,future:l}=e;fi()&&Ge(!1);let c=t.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:c,navigator:o,static:a,future:ti({v7_relativeSplatPath:!1},l)}),[c,l,o,a]);typeof r=="string"&&(r=ns(r));let{pathname:d="/",search:p="",hash:f="",state:m=null,key:y="default"}=r,w=k.useMemo(()=>{let z=ig(d,c);return z==null?null:{location:{pathname:z,search:p,hash:f,state:m,key:y},navigationType:i}},[c,d,p,f,m,y,i]);return w==null?null:k.createElement(pi.Provider,{value:u},k.createElement(Xo.Provider,{children:n,value:w}))}function y0(e){let{children:t,location:n}=e;return n0(Yl(t),n)}new Promise(()=>{});function Yl(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,i)=>{if(!k.isValidElement(r))return;let o=[...t,i];if(r.type===k.Fragment){n.push.apply(n,Yl(r.props.children,o));return}r.type!==wr&&Ge(!1),!r.props.index||!r.props.children||Ge(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Yl(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const v0="6";try{window.__reactRouterVersion=v0}catch{}const b0="startTransition",Tp=hy[b0];function k0(e){let{basename:t,children:n,future:r,window:i}=e,o=k.useRef();o.current==null&&(o.current=C1({window:i,v5Compat:!0}));let a=o.current,[l,c]=k.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=k.useCallback(p=>{u&&Tp?Tp(()=>c(p)):c(p)},[c,u]);return k.useLayoutEffect(()=>a.listen(d),[a,d]),k.useEffect(()=>h0(r),[r]),k.createElement(x0,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}var Pp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Pp||(Pp={}));var Lp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Lp||(Lp={}));const w0={},Ap=e=>{let t;const n=new Set,r=(d,p)=>{const f=typeof d=="function"?d(t):d;if(!Object.is(f,t)){const m=t;t=p??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(y=>y(t,m))}},i=()=>t,c={setState:r,getState:i,getInitialState:()=>u,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(w0?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,c);return c},j0=e=>e?Ap(e):Ap;var mg={exports:{}},hg={},gg={exports:{}},xg={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yr=k;function _0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var S0=typeof Object.is=="function"?Object.is:_0,C0=Yr.useState,N0=Yr.useEffect,E0=Yr.useLayoutEffect,z0=Yr.useDebugValue;function T0(e,t){var n=t(),r=C0({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return E0(function(){i.value=n,i.getSnapshot=t,$a(i)&&o({inst:i})},[e,n,t]),N0(function(){return $a(i)&&o({inst:i}),e(function(){$a(i)&&o({inst:i})})},[e]),z0(n),n}function $a(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!S0(e,n)}catch{return!0}}function P0(e,t){return t()}var L0=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?P0:T0;xg.useSyncExternalStore=Yr.useSyncExternalStore!==void 0?Yr.useSyncExternalStore:L0;gg.exports=xg;var A0=gg.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zo=k,R0=A0;function M0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var I0=typeof Object.is=="function"?Object.is:M0,O0=R0.useSyncExternalStore,$0=Zo.useRef,D0=Zo.useEffect,F0=Zo.useMemo,B0=Zo.useDebugValue;hg.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=$0(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=F0(function(){function c(m){if(!u){if(u=!0,d=m,m=r(m),i!==void 0&&a.hasValue){var y=a.value;if(i(y,m))return p=y}return p=m}if(y=p,I0(d,m))return y;var w=r(m);return i!==void 0&&i(y,w)?(d=m,y):(d=m,p=w)}var u=!1,d,p,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,r,i]);var l=O0(e,o[0],o[1]);return D0(function(){a.hasValue=!0,a.value=l},[l]),B0(l),l};mg.exports=hg;var U0=mg.exports;const V0=Mo(U0),yg={},{useDebugValue:W0}=zt,{useSyncExternalStoreWithSelector:H0}=V0;let Rp=!1;const q0=e=>e;function J0(e,t=q0,n){(yg?"production":void 0)!=="production"&&n&&!Rp&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Rp=!0);const r=H0(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return W0(r),r}const Mp=e=>{(yg?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?j0(e):e,n=(r,i)=>J0(t,r,i);return Object.assign(n,t),n},K0=e=>e?Mp(e):Mp,ct=K0((e,t)=>({project:null,selectedAgentId:null,selectedToolId:null,mcpServers:[],builtinTools:[],isRunning:!1,runEvents:[],watches:[],activeTab:"app",sidebarOpen:!0,hasUnsavedChanges:!1,runAgentId:null,currentSessionId:null,setProject:n=>{var i;const r=((i=n==null?void 0:n.watches)==null?void 0:i.map(o=>({...o,result:void 0,error:void 0,isLoading:!1,lastRun:void 0,history:[]})))||[];e({project:n,watches:r})},setSelectedAgentId:n=>e({selectedAgentId:n}),setSelectedToolId:n=>e({selectedToolId:n}),setMcpServers:n=>e({mcpServers:n}),setBuiltinTools:n=>e({builtinTools:n}),setIsRunning:n=>e({isRunning:n}),addRunEvent:n=>e(r=>({runEvents:[...r.runEvents,n]})),clearRunEvents:()=>e({runEvents:[]}),setWatches:n=>e({watches:n}),updateWatch:(n,r)=>e(i=>{const o=i.watches.map(l=>l.id===n?{...l,...r}:l);if(("serverName"in r||"toolName"in r||"args"in r||"transform"in r)&&i.project){const l=o.map(({id:c,serverName:u,toolName:d,args:p,transform:f})=>({id:c,serverName:u,toolName:d,args:p,transform:f}));return{watches:o,project:{...i.project,watches:l},hasUnsavedChanges:!0}}return{watches:o}}),addWatch:n=>e(r=>{const i=[...r.watches,n],{project:o}=r;if(o){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...o,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),removeWatch:n=>e(r=>{const i=r.watches.filter(a=>a.id!==n),{project:o}=r;if(o){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...o,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),clearWatchHistories:()=>e(n=>({watches:n.watches.map(r=>({...r,history:[],result:void 0,error:void 0}))})),setActiveTab:n=>e({activeTab:n}),setSidebarOpen:n=>e({sidebarOpen:n}),setHasUnsavedChanges:n=>e({hasUnsavedChanges:n}),setRunAgentId:n=>e({runAgentId:n}),setCurrentSessionId:n=>e({currentSessionId:n}),updateProject:n=>{const{project:r}=t();r&&e({project:{...r,...n}})},addAgent:n=>{const{project:r}=t();r&&e({project:{...r,agents:[...r.agents,n]}})},updateAgent:(n,r)=>{const{project:i}=t();i&&e({project:{...i,agents:i.agents.map(o=>o.id===n?{...o,...r}:o)}})},removeAgent:n=>{const{project:r,selectedAgentId:i}=t();r&&e({project:{...r,agents:r.agents.filter(o=>o.id!==n)},selectedAgentId:i===n?null:i})},addCustomTool:n=>{const{project:r}=t();r&&e({project:{...r,custom_tools:[...r.custom_tools,n]}})},updateCustomTool:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_tools:i.custom_tools.map(o=>o.id===n?{...o,...r}:o)}})},removeCustomTool:n=>{const{project:r,selectedToolId:i}=t();r&&e({project:{...r,custom_tools:r.custom_tools.filter(o=>o.id!==n)},selectedToolId:i===n?null:i})},addCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:[...r.custom_callbacks||[],n]}})},updateCustomCallback:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_callbacks:(i.custom_callbacks||[]).map(o=>o.id===n?{...o,...r}:o)}})},removeCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:(r.custom_callbacks||[]).filter(i=>i.id!==n)}})}})),vg="/api";async function Ce(e,t){const n=await fetch(`${vg}${e}`,{...t,headers:{"Content-Type":"application/json",...t==null?void 0:t.headers}});if(!n.ok){const r=await n.json().catch(()=>({detail:"Unknown error"}));throw new Error(r.detail||`HTTP ${n.status}`)}return n.json()}async function bg(){return(await Ce("/projects")).projects}async function kg(e){return(await Ce(`/projects/${e}`)).project}async function wg(e,t=""){return(await Ce("/projects",{method:"POST",body:JSON.stringify({name:e,description:t})})).project}async function Xl(e,t){return(await Ce(`/projects/${e}`,{method:"PUT",body:JSON.stringify(t)})).project}async function jg(e){await Ce(`/projects/${e}`,{method:"DELETE"})}async function _g(e){return Ce(`/sessions/${e}/save-to-memory`,{method:"POST"})}async function Zl(e){return(await Ce(`/projects/${e}/sessions`)).sessions}async function Sg(e,t){return(await Ce(`/projects/${e}/sessions/${t}/load`)).session}async function Cg(e){return(await Ce(`/projects/${e}/yaml`)).yaml}async function Ng(e,t){return(await Ce(`/projects/${e}/yaml`,{method:"PUT",body:JSON.stringify({yaml:t})})).project}async function mu(){return(await Ce("/mcp-servers")).servers}async function Eg(){return(await Ce("/builtin-tools")).tools}function zg(e){const t=window.location.protocol==="https:"?"wss:":"ws:",n=window.location.host;return new WebSocket(`${t}//${n}/ws/run/${e}`)}async function Xi(e,t,n,r){return await Ce(`/projects/${e}/generate-prompt`,{method:"POST",body:JSON.stringify({agent_id:t,context:n,agent_config:r||void 0})})}async function Tg(e,t){return await Ce(`/projects/${e}/generate-agent-config`,{method:"POST",body:JSON.stringify({description:t})})}async function Pg(e,t,n,r=[],i){return await Ce(`/projects/${e}/generate-tool-code`,{method:"POST",body:JSON.stringify({tool_name:t,tool_description:n,state_keys_used:r,context:i})})}async function Lg(e,t,n,r,i=[],o){return await Ce(`/projects/${e}/generate-callback-code`,{method:"POST",body:JSON.stringify({callback_name:t,callback_description:n,callback_type:r,state_keys_used:i,context:o})})}async function ec(e){return await Ce("/test-mcp-server",{method:"POST",body:JSON.stringify(e)})}async function Ag(e,t){return Ce(`/projects/${e}/skillsets/${t}/stats`)}async function Rg(e,t,n,r,i=500,o=50){return Ce(`/projects/${e}/skillsets/${t}/url`,{method:"POST",body:JSON.stringify({url:n,source_name:r,chunk_size:i,chunk_overlap:o})})}async function Mg(e,t,n,r=500,i=50){const o=new FormData;o.append("file",n),o.append("chunk_size",String(r)),o.append("chunk_overlap",String(i));const a=await fetch(`${vg}/projects/${e}/skillsets/${t}/file`,{method:"POST",body:o});if(!a.ok)throw new Error(`Upload failed: ${a.statusText}`);return a.json()}async function Ig(e,t,n,r=10,i=0){return Ce(`/projects/${e}/skillsets/${t}/search`,{method:"POST",body:JSON.stringify({query:n,top_k:r,min_score:i})})}async function Og(e,t){return Ce(`/projects/${e}/skillsets/${t}/entries`,{method:"DELETE"})}async function $g(){return Ce("/skillsets/embeddings-available")}const He={async get(e){return Ce(e)},async post(e,t){return Ce(e,{method:"POST",body:t?JSON.stringify(t):void 0})},async put(e,t){return Ce(e,{method:"PUT",body:t?JSON.stringify(t):void 0})},async delete(e){return Ce(e,{method:"DELETE"})}},G0=Object.freeze(Object.defineProperty({__proto__:null,addSkillSetUrl:Rg,api:He,checkEmbeddingsAvailable:$g,clearSkillSet:Og,createProject:wg,createRunWebSocket:zg,deleteProject:jg,fetchJSON:Ce,generateAgentConfig:Tg,generateCallbackCode:Lg,generatePrompt:Xi,generateToolCode:Pg,getBuiltinTools:Eg,getMcpServers:mu,getProject:kg,getProjectYaml:Cg,getSkillSetStats:Ag,listProjectSessions:Zl,listProjects:bg,loadSession:Sg,saveSessionToMemory:_g,searchSkillSet:Ig,testMcpServer:ec,updateProject:Xl,updateProjectFromYaml:Ng,uploadSkillSetFile:Mg},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Q0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),fe=(e,t)=>{const n=k.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:l="",children:c,...u},d)=>k.createElement("svg",{ref:d,...Q0,width:i,height:i,stroke:r,strokeWidth:a?Number(o)*24/Number(i):o,className:["lucide",`lucide-${Y0(e)}`,l].join(" "),...u},[...t.map(([p,f])=>k.createElement(p,f)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=fe("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=fe("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=fe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=fe("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=fe("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=fe("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=fe("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=fe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=fe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=fe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=fe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=fe("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=fe("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=fe("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=fe("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=fe("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=fe("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=fe("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=fe("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=fe("FileCheck",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=fe("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=fe("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=fe("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=fe("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=fe("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=fe("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=fe("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=fe("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=fe("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=fe("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=fe("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=fe("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=fe("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=fe("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=fe("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=fe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=fe("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=fe("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=fe("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=fe("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=fe("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=fe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=fe("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=fe("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=fe("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=fe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=fe("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=fe("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=fe("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=fe("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=fe("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=fe("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=fe("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=fe("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=fe("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=fe("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=fe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=fe("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=fe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=fe("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=fe("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=fe("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=fe("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=fe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=fe("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function gb(){const e=fu(),[t,n]=k.useState([]),[r,i]=k.useState(!0),[o,a]=k.useState(!1),[l,c]=k.useState("");k.useEffect(()=>{u()},[]);async function u(){try{const f=await bg();n(f)}catch(f){console.error("Failed to load projects:",f)}finally{i(!1)}}async function d(){if(l.trim())try{const f=await wg(l.trim());e(`/project/${f.id}`)}catch(f){console.error("Failed to create project:",f)}}async function p(f,m){if(m.stopPropagation(),!!confirm("Delete this project?"))try{await jg(f),n(t.filter(y=>y.id!==f))}catch(y){console.error("Failed to delete project:",y)}}return s.jsxs("div",{className:"project-list",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("header",{className:"header",children:[s.jsxs("div",{className:"logo",children:[s.jsx(bu,{size:40,className:"logo-icon"}),s.jsx("h1",{className:"title",children:"ADK Playground"})]}),s.jsx("p",{className:"subtitle",children:"Build, test, and deploy AI agents visually"})]}),s.jsxs("div",{className:"content",children:[o?s.jsxs("div",{className:"create-form",children:[s.jsx("input",{type:"text",placeholder:"Project name...",value:l,onChange:f=>c(f.target.value),onKeyDown:f=>f.key==="Enter"&&d(),autoFocus:!0}),s.jsxs("button",{className:"btn btn-primary",onClick:d,children:[s.jsx(Je,{size:18}),"Create"]}),s.jsx("button",{className:"btn btn-secondary",onClick:()=>a(!1),children:"Cancel"})]}):s.jsx("div",{className:"create-form",children:s.jsxs("button",{className:"btn btn-primary",onClick:()=>a(!0),children:[s.jsx(Je,{size:18}),"New Project"]})}),r?s.jsx("div",{className:"loading",children:"Loading projects..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(Ip,{size:48,style:{marginBottom:16,opacity:.3}}),s.jsx("p",{children:"No projects yet. Create one to get started!"})]}):s.jsx("div",{className:"projects-grid",children:t.map(f=>s.jsxs("div",{className:"project-card",onClick:()=>e(`/project/${f.id}`),children:[s.jsxs("h3",{children:[s.jsx(Ip,{size:18}),f.name]}),s.jsx("p",{children:f.description||"No description"}),s.jsx("button",{className:"delete-btn",onClick:m=>p(f.id,m),children:s.jsx(De,{size:16})})]},f.id))})]})]})}const $p={},xb=5*60*1e3;function yb({projectId:e,value:t,provider:n,apiBase:r,onChange:i,placeholder:o="Search models..."}){const a=`${e}:${n||""}:${r||""}`,[l,c]=k.useState(t||""),[u,d]=k.useState(!1),[p,f]=k.useState([]),[m,y]=k.useState(!1),[w,z]=k.useState(null),[v,x]=k.useState(-1),[g,P]=k.useState({top:0,left:0,width:0}),N=k.useRef(null),_=k.useRef(null);k.useEffect(()=>{if(u&&N.current){const U=N.current.getBoundingClientRect();P({top:U.bottom+window.scrollY+4,left:U.left+window.scrollX,width:U.width})}},[u]);const C=k.useCallback(async()=>{const U=$p[a];if(U&&Date.now()-U.timestamp<xb){const B=[];Object.values(U.providers).forEach(ne=>{B.push(...ne.models)}),f(B);return}y(!0),z(null);try{const B=new URLSearchParams;n&&B.append("provider",n),r&&B.append("api_base",r);const ne=`/models/${e}${B.toString()?"?"+B.toString():""}`,T=await He.get(ne);$p[a]={providers:T.providers,timestamp:Date.now()};const $=[];Object.values(T.providers).forEach(R=>{R.models&&R.models.length>0&&$.push(...R.models)}),f($)}catch(B){z(B.message||"Failed to fetch models")}finally{y(!1)}},[e,a,r,n]);k.useEffect(()=>{C()},[C]),k.useEffect(()=>{c(t||"")},[t]);const b=p.filter(U=>{const B=l.toLowerCase();return U.id.toLowerCase().includes(B)||U.name.toLowerCase().includes(B)||U.provider.toLowerCase().includes(B)});k.useEffect(()=>{const U=B=>{_.current&&!_.current.contains(B.target)&&N.current&&!N.current.contains(B.target)&&d(!1)};return document.addEventListener("mousedown",U),()=>document.removeEventListener("mousedown",U)},[]);const L=U=>{if(!u){(U.key==="ArrowDown"||U.key==="Enter")&&(d(!0),U.preventDefault());return}switch(U.key){case"ArrowDown":x(B=>Math.min(B+1,b.length-1)),U.preventDefault();break;case"ArrowUp":x(B=>Math.max(B-1,0)),U.preventDefault();break;case"Enter":v>=0&&v<b.length&&S(b[v]),U.preventDefault();break;case"Escape":d(!1);break}},S=U=>{c(U.id),i(U.id,U.provider),d(!1)},A=U=>{c(U.target.value),d(!0),x(-1),i(U.target.value,n||"gemini")},M=U=>{switch(U.toLowerCase()){case"gemini":return"provider-gemini";case"anthropic":return"provider-anthropic";case"openai":return"provider-openai";case"groq":return"provider-groq";case"ollama":return"provider-ollama";default:return"provider-other"}},q=u?s.jsxs("div",{ref:_,className:"model-autocomplete-dropdown model-autocomplete-dropdown-portal",style:{position:"fixed",top:g.top,left:g.left,width:g.width},children:[m&&s.jsx("div",{className:"model-autocomplete-loading",children:"Loading models..."}),w&&s.jsx("div",{className:"model-autocomplete-error",children:w}),!m&&!w&&b.length===0&&s.jsx("div",{className:"model-autocomplete-empty",children:l?"No matching models":"No models available"}),!m&&b.length>0&&s.jsxs("div",{className:"model-autocomplete-list",children:[b.slice(0,50).map((U,B)=>s.jsxs("div",{className:`model-autocomplete-item ${B===v?"highlighted":""}`,onClick:()=>S(U),onMouseEnter:()=>x(B),children:[s.jsx("span",{className:`provider-badge ${M(U.provider)}`,children:U.provider}),s.jsx("span",{className:"model-id",children:U.id}),U.context_window&&s.jsxs("span",{className:"model-context",title:`${U.context_window.toLocaleString()} token context`,children:[Math.round(U.context_window/1e3),"K"]}),U.supports_tools&&s.jsx("span",{className:"model-feature",title:"Supports function calling / tools",children:"🔧"}),U.supports_vision&&s.jsx("span",{className:"model-feature",title:"Supports image/vision input",children:"👁️"}),U.supports_json_mode&&s.jsx("span",{className:"model-feature",title:"Supports structured JSON output",children:"📋"})]},`${U.provider}-${U.id}`)),b.length>50&&s.jsxs("div",{className:"model-autocomplete-more",children:["+",b.length-50," more..."]})]})]}):null;return s.jsxs("div",{className:"model-autocomplete",children:[s.jsx("input",{ref:N,type:"text",value:l,onChange:A,onFocus:()=>d(!0),onKeyDown:L,placeholder:o,className:"model-autocomplete-input"}),q&&tg.createPortal(q,document.body)]})}const vb=[{value:"gemini",label:"Gemini"},{value:"anthropic",label:"Anthropic"},{value:"openai",label:"OpenAI"},{value:"groq",label:"Groq"},{value:"litellm",label:"LiteLLM / Other"}];function bb(e,t){return e.startsWith("openai/")?"openai":e.startsWith("groq/")?"groq":e.startsWith("ollama/")?"litellm":e.startsWith("claude-")?"anthropic":e.startsWith("gemini-")?"gemini":e.includes("/")?"litellm":t||"gemini"}function Gg({projectId:e,values:t,onChange:n,className:r=""}){return s.jsxs("div",{className:`model-config-form ${r}`,children:[s.jsxs("div",{className:"model-config-row",children:[s.jsxs("div",{className:"model-config-field",style:{flex:1},children:[s.jsx("label",{children:"Provider"}),s.jsx("select",{value:t.provider||"gemini",onChange:i=>n({provider:i.target.value}),children:vb.map(i=>s.jsx("option",{value:i.value,children:i.label},i.value))})]}),s.jsxs("div",{className:"model-config-field",style:{flex:3},children:[s.jsx("label",{children:"Model"}),s.jsx(yb,{projectId:e,value:t.model_name||"",provider:t.provider,apiBase:t.api_base,onChange:(i,o)=>{const a=bb(i,o);n({model_name:i,provider:a})},placeholder:"Search models..."})]}),t.provider==="litellm"&&s.jsxs("div",{className:"model-config-field",style:{flex:2},children:[s.jsx("label",{children:"API Base"}),s.jsx("input",{type:"text",value:t.api_base||"",onChange:i=>n({api_base:i.target.value||void 0}),placeholder:"http://localhost:11434"})]})]}),s.jsxs("div",{className:"model-config-row",children:[s.jsxs("div",{className:"model-config-field",children:[s.jsx("label",{children:"Temperature"}),s.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:t.temperature??"",onChange:i=>n({temperature:i.target.value?parseFloat(i.target.value):void 0}),placeholder:"Default"})]}),s.jsxs("div",{className:"model-config-field",children:[s.jsx("label",{children:"Max Tokens"}),s.jsx("input",{type:"number",min:"1",value:t.max_output_tokens??"",onChange:i=>n({max_output_tokens:i.target.value?parseInt(i.target.value):void 0}),placeholder:"Default"})]}),s.jsxs("div",{className:"model-config-field",children:[s.jsx("label",{children:"Top P"}),s.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:t.top_p??"",onChange:i=>n({top_p:i.target.value?parseFloat(i.target.value):void 0}),placeholder:"Default"})]}),s.jsxs("div",{className:"model-config-field",children:[s.jsx("label",{children:"Top K"}),s.jsx("input",{type:"number",min:"1",value:t.top_k??"",onChange:i=>n({top_k:i.target.value?parseInt(i.target.value):void 0}),placeholder:"Default"})]})]})]})}const kb=[{key:"GOOGLE_API_KEY",description:"API key for Gemini models"},{key:"OPENAI_API_KEY",description:"API key for OpenAI models (via LiteLLM)"},{key:"ANTHROPIC_API_KEY",description:"API key for Anthropic Claude models"},{key:"AZURE_API_KEY",description:"API key for Azure OpenAI Service"},{key:"AZURE_API_BASE",description:"Base URL for Azure OpenAI endpoint (e.g., https://your-resource.openai.azure.com)"},{key:"AZURE_API_VERSION",description:"API version for Azure OpenAI (e.g., 2024-02-15-preview)"},{key:"GOOGLE_GENAI_USE_VERTEXAI",description:'Set to "1" to use Vertex AI instead of API key'},{key:"GOOGLE_CLOUD_PROJECT",description:"Google Cloud project ID for Vertex AI"},{key:"GOOGLE_CLOUD_REGION",description:"Google Cloud region for Vertex AI (e.g., us-central1)"}];function wb(e){return/^[a-zA-Z0-9_]+$/.test(e)}function jb(){var G;const{project:e,updateProject:t}=ct(),[n,r]=k.useState(null);if(!e)return null;const{app:i}=e;function o(h){t({app:{...i,...h}})}function a(h){if(h===""){r(null),o({name:h});return}wb(h)?r(null):r("Name can only contain letters, numbers, and underscores"),o({name:h})}function l(){const h={name:`state_key_${i.state_keys.length+1}`,description:"",type:"string",scope:"session"};o({state_keys:[...i.state_keys,h]})}function c(h,F){const E=[...i.state_keys];E[h]={...E[h],...F},o({state_keys:E})}function u(h){o({state_keys:i.state_keys.filter((F,E)=>E!==h)})}function d(h="ReflectAndRetryToolPlugin"){let F;switch(h){case"ReflectAndRetryToolPlugin":F={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1};break;case"ContextFilterPlugin":F={type:"ContextFilterPlugin",name:"context_filter",num_invocations_to_keep:5};break;case"LoggingPlugin":F={type:"LoggingPlugin",name:"logging"};break;case"GlobalInstructionPlugin":F={type:"GlobalInstructionPlugin",name:"global_instruction",global_instruction:""};break;case"SaveFilesAsArtifactsPlugin":F={type:"SaveFilesAsArtifactsPlugin",name:"save_files"};break;case"MultimodalToolResultsPlugin":F={type:"MultimodalToolResultsPlugin",name:"multimodal_tools"};break;default:F={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1}}o({plugins:[...i.plugins,F]})}function p(h,F){const E=[...i.plugins];E[h]={...E[h],...F},o({plugins:E})}function f(h){o({plugins:i.plugins.filter((F,E)=>E!==h)})}const m=i.sandbox||{enabled:!1,allowlist:{auto:[],user:[]},unknown_action:"ask",approval_timeout:30,agent_memory_limit_mb:512,agent_cpu_limit:1,mcp_memory_limit_mb:256,mcp_cpu_limit:.5,run_timeout:300,volume_mounts:[]},y=((G=m.allowlist)==null?void 0:G.user)||[],w=m.volume_mounts||[];function z(h){o({sandbox:{...m,...h}})}async function v(h){const F=i.id;try{await fetch(`/api/sandbox/${F}/allowlist/sync`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({patterns:h.map(E=>({pattern:E.pattern,pattern_type:E.pattern_type})).filter(E=>E.pattern)})})}catch(E){console.debug("Could not sync allowlist to gateway:",E)}}function x(){const h={id:`pattern_${Date.now().toString(36)}`,pattern:"",pattern_type:"exact",source:"user",added_at:new Date().toISOString()},F={...m.allowlist,user:[...y,h]};z({allowlist:F})}function g(h,F){const E=[...y];E[h]={...E[h],...F};const Q=E;z({allowlist:{...m.allowlist,user:Q}}),F.pattern&&v(Q)}function P(h){const F=y.filter((E,Q)=>Q!==h);z({allowlist:{...m.allowlist,user:F}})}function N(){const h={host_path:"",container_path:"/mnt/data",mode:"ro"};z({volume_mounts:[...w,h]})}function _(h,F){const E=[...w];E[h]={...E[h],...F},z({volume_mounts:E})}function C(h){const F=w.filter((E,Q)=>Q!==h);z({volume_mounts:F})}const b=i.models||[];function L(){const h=`model_${Date.now().toString(36)}`,F={id:h,name:"New Model",provider:"gemini",model_name:"gemini-2.0-flash",is_default:b.length===0};o({models:[...b,F],default_model_id:b.length===0?h:i.default_model_id})}function S(h,F){const E=b.map(Q=>Q.id===h?{...Q,...F}:Q);o({models:E})}function A(h){var Q;const F=b.filter(V=>V.id!==h),E=i.default_model_id===h?((Q=F[0])==null?void 0:Q.id)||void 0:i.default_model_id;o({models:F,default_model_id:E})}function M(h){o({default_model_id:h})}const q=i.env_vars||{},[U,B]=k.useState({}),[ne,T]=k.useState("");function $(h=""){const F=h||ne.trim();!F||q[F]!==void 0||(o({env_vars:{...q,[F]:""}}),T(""))}function R(h,F){o({env_vars:{...q,[h]:F}})}function j(h){const F={...q};delete F[h],o({env_vars:F})}function W(h){B(F=>({...F,[h]:!F[h]}))}return s.jsxs("div",{className:"app-config",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("section",{className:"section",children:[s.jsx("div",{className:"section-header",children:s.jsxs("h2",{className:"section-title",children:[s.jsx(fb,{size:20}),"Basic Information"]})}),s.jsxs("div",{className:"form-grid",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"App Name"}),s.jsx("input",{type:"text",value:i.name,onChange:h=>a(h.target.value),style:{borderColor:n?"var(--error)":void 0}}),n&&s.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:4},children:n})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Root Agent"}),s.jsxs("select",{value:i.root_agent_id||"",onChange:h=>o({root_agent_id:h.target.value||void 0}),children:[s.jsx("option",{value:"",children:"Select an agent..."}),e.agents.map(h=>s.jsx("option",{value:h.id,children:h.name},h.id))]})]}),s.jsxs("div",{className:"form-group full-width",children:[s.jsx("label",{children:"Description"}),s.jsx("textarea",{value:i.description,onChange:h=>o({description:h.target.value}),rows:2})]})]})]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(yn,{size:20}),"Services"]}),s.jsx("span",{className:"section-hint",children:"Configure session, memory, and artifact storage backends"})]}),s.jsxs("div",{className:"form-grid",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Session Service"}),s.jsxs("select",{value:i.session_service_uri.split("://")[0],onChange:h=>{const F=h.target.value;o({session_service_uri:{memory:"memory://",file:"file://~/.adk-playground/sessions",sqlite:"sqlite://~/.adk-playground/sessions.db",postgresql:"postgresql://user:pass@localhost:5432/adk_sessions",mysql:"mysql://user:pass@localhost:3306/adk_sessions",agentengine:"agentengine://project/us-central1/engine-id"}[F]||F+"://"})},children:[s.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),s.jsx("option",{value:"file",children:"File System (JSON)"}),s.jsx("option",{value:"sqlite",children:"SQLite (local)"}),s.jsx("option",{value:"postgresql",children:"PostgreSQL"}),s.jsx("option",{value:"mysql",children:"MySQL"}),s.jsx("option",{value:"agentengine",children:"Vertex AI Agent Engine"})]}),i.session_service_uri.startsWith("file://")&&s.jsx("input",{type:"text",value:i.session_service_uri.replace("file://",""),onChange:h=>o({session_service_uri:"file://"+h.target.value}),placeholder:"~/.adk-playground/sessions",style:{marginTop:8}}),i.session_service_uri.startsWith("sqlite://")&&s.jsx("input",{type:"text",value:i.session_service_uri.replace("sqlite://",""),onChange:h=>o({session_service_uri:"sqlite://"+h.target.value}),placeholder:"~/.adk-playground/sessions.db",style:{marginTop:8}}),(i.session_service_uri.startsWith("postgresql://")||i.session_service_uri.startsWith("mysql://"))&&s.jsx("input",{type:"text",value:i.session_service_uri,onChange:h=>o({session_service_uri:h.target.value}),placeholder:"postgresql://user:pass@localhost:5432/db",style:{marginTop:8}}),i.session_service_uri.startsWith("agentengine://")&&s.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[s.jsx("input",{type:"text",value:i.session_service_uri.split("/")[2]||"",onChange:h=>{const F=i.session_service_uri.split("/");F[2]=h.target.value,o({session_service_uri:F.join("/")})},placeholder:"project-id"}),s.jsx("input",{type:"text",value:i.session_service_uri.split("/")[3]||"",onChange:h=>{const F=i.session_service_uri.split("/");F[3]=h.target.value,o({session_service_uri:F.join("/")})},placeholder:"location (e.g., us-central1)"}),s.jsx("input",{type:"text",value:i.session_service_uri.split("/")[4]||"",onChange:h=>{const F=i.session_service_uri.split("/");F[4]=h.target.value,o({session_service_uri:F.join("/")})},placeholder:"agent-engine-id"})]}),s.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.session_service_uri.startsWith("memory://")&&"Sessions stored in memory, lost on restart",i.session_service_uri.startsWith("file://")&&"Sessions stored as JSON files, preserves UI events",i.session_service_uri.startsWith("sqlite://")&&"Persists to local SQLite file",i.session_service_uri.startsWith("postgresql://")&&"Production-ready PostgreSQL backend",i.session_service_uri.startsWith("mysql://")&&"Production-ready MySQL backend",i.session_service_uri.startsWith("agentengine://")&&"Vertex AI Agent Engine managed sessions"]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Memory Service"}),s.jsxs("select",{value:i.memory_service_uri.split("://")[0],onChange:h=>{const F=h.target.value;o({memory_service_uri:{memory:"memory://",file:"file://~/.adk-playground/memory",rag:"rag://rag-corpus-id",agentengine:"agentengine://project/us-central1/engine-id"}[F]||F+"://"})},children:[s.jsx("option",{value:"memory",children:"In-Memory (keyword matching)"}),s.jsx("option",{value:"file",children:"File System (keyword matching)"}),s.jsx("option",{value:"rag",children:"Vertex AI RAG"}),s.jsx("option",{value:"agentengine",children:"Vertex AI Memory Bank"})]}),i.memory_service_uri.startsWith("file://")&&s.jsx("input",{type:"text",value:i.memory_service_uri.replace("file://",""),onChange:h=>o({memory_service_uri:"file://"+h.target.value}),placeholder:"~/.adk-playground/memory",style:{marginTop:8}}),i.memory_service_uri.startsWith("rag://")&&s.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[s.jsx("input",{type:"text",value:i.memory_service_uri.replace("rag://",""),onChange:h=>o({memory_service_uri:"rag://"+h.target.value}),placeholder:"rag-corpus-id or full resource path"}),s.jsx("span",{className:"help-text",style:{fontSize:11,color:"var(--text-dim)"},children:"Format: projects/PROJECT/locations/LOCATION/ragCorpora/CORPUS_ID"})]}),i.memory_service_uri.startsWith("agentengine://")&&s.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[s.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[2]||"",onChange:h=>{const F=i.memory_service_uri.split("/");F[2]=h.target.value,o({memory_service_uri:F.join("/")})},placeholder:"project-id"}),s.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[3]||"",onChange:h=>{const F=i.memory_service_uri.split("/");F[3]=h.target.value,o({memory_service_uri:F.join("/")})},placeholder:"location (e.g., us-central1)"}),s.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[4]||"",onChange:h=>{const F=i.memory_service_uri.split("/");F[4]=h.target.value,o({memory_service_uri:F.join("/")})},placeholder:"agent-engine-id"})]}),s.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.memory_service_uri.startsWith("memory://")&&"Simple keyword matching, good for prototyping",i.memory_service_uri.startsWith("file://")&&"Persists memories as JSON files",i.memory_service_uri.startsWith("rag://")&&"Semantic search using Vertex AI RAG corpus",i.memory_service_uri.startsWith("agentengine://")&&"Managed memory via Agent Engine Memory Bank"]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Artifact Service"}),s.jsxs("select",{value:i.artifact_service_uri.split("://")[0]==="gs"?"gs":i.artifact_service_uri.split("://")[0],onChange:h=>{const F=h.target.value;o({artifact_service_uri:{memory:"memory://",file:"file://~/.adk-playground/artifacts",gs:"gs://your-bucket-name"}[F]||F+"://"})},children:[s.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),s.jsx("option",{value:"file",children:"File System"}),s.jsx("option",{value:"gs",children:"Google Cloud Storage"})]}),i.artifact_service_uri.startsWith("file://")&&s.jsx("input",{type:"text",value:i.artifact_service_uri.replace("file://",""),onChange:h=>o({artifact_service_uri:"file://"+h.target.value}),placeholder:"~/.adk-playground/artifacts",style:{marginTop:8}}),i.artifact_service_uri.startsWith("gs://")&&s.jsx("input",{type:"text",value:i.artifact_service_uri.replace("gs://",""),onChange:h=>o({artifact_service_uri:"gs://"+h.target.value}),placeholder:"bucket-name/optional-prefix",style:{marginTop:8}}),s.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.artifact_service_uri.startsWith("memory://")&&"Artifacts stored in memory, lost on restart",i.artifact_service_uri.startsWith("file://")&&"Persists to local filesystem",i.artifact_service_uri.startsWith("gs://")&&"Production-ready Google Cloud Storage backend"]})]})]})]}),s.jsxs("section",{className:"section",children:[s.jsx("div",{className:"section-header",children:s.jsxs("h2",{className:"section-title",children:[s.jsx(nc,{size:20}),"Environment Variables"]})}),s.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginBottom:16},children:"Set API keys and other environment variables. These are passed to the agent runtime."}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16},children:kb.filter(h=>q[h.key]===void 0).map(h=>s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>$(h.key),title:h.description,children:[s.jsx(Je,{size:12}),h.key]},h.key))}),Object.keys(q).length===0?s.jsx("p",{className:"empty-message",children:"No environment variables set. Click a button above to add common variables, or add a custom one below."}):Object.entries(q).map(([h,F])=>s.jsxs("div",{className:"list-item",style:{alignItems:"center"},children:[s.jsxs("div",{style:{flex:1,display:"flex",gap:12,alignItems:"center"},children:[s.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:13,minWidth:200},children:h}),s.jsxs("div",{style:{flex:1,display:"flex",gap:8,alignItems:"center"},children:[s.jsx("input",{type:U[h]?"text":"password",value:F,onChange:E=>R(h,E.target.value),placeholder:"Enter value...",style:{flex:1}}),s.jsx("button",{className:"delete-item",onClick:()=>W(h),title:U[h]?"Hide value":"Show value",children:U[h]?s.jsx(nb,{size:16}):s.jsx(ri,{size:16})})]})]}),s.jsx("button",{className:"delete-item",onClick:()=>j(h),children:s.jsx(De,{size:16})})]},h)),s.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[s.jsx("input",{type:"text",value:ne,onChange:h=>T(h.target.value.toUpperCase().replace(/[^A-Z0-9_]/g,"")),placeholder:"CUSTOM_VAR_NAME",style:{flex:1,fontFamily:"var(--font-mono)"},onKeyDown:h=>h.key==="Enter"&&$()}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>$(),disabled:!ne.trim(),children:[s.jsx(Je,{size:14}),"Add Variable"]})]})]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(gu,{size:20}),"Models"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:L,children:[s.jsx(Je,{size:14}),"Add Model"]})]}),b.length===0?s.jsx("p",{className:"empty-message",children:"No models configured. Add models that agents can use."}):b.map(h=>s.jsxs("div",{className:"model-card",children:[s.jsxs("div",{className:"model-card-header",children:[s.jsx("input",{type:"text",value:h.name,onChange:F=>S(h.id,{name:F.target.value}),placeholder:"Model name",className:"model-name-input"}),s.jsx("button",{className:`default-model-btn ${i.default_model_id===h.id?"is-default":""}`,onClick:()=>M(h.id),title:i.default_model_id===h.id?"Default model":"Set as default",children:s.jsx(qg,{size:14,fill:i.default_model_id===h.id?"currentColor":"none"})}),s.jsx("button",{className:"delete-item",onClick:()=>A(h.id),children:s.jsx(De,{size:16})})]}),s.jsx("div",{className:"model-card-body",children:s.jsx(Gg,{projectId:e.id,values:h,onChange:F=>S(h.id,F)})})]},h.id))]}),s.jsxs("section",{className:"section",children:[s.jsx("div",{className:"section-header",children:s.jsxs("h2",{className:"section-title",children:[s.jsx(Kg,{size:20}),"Advanced Options"]})}),s.jsxs("div",{className:"toggle-group",children:[s.jsx("div",{className:`toggle ${i.compaction.enabled?"active":""}`,onClick:()=>o({compaction:{...i.compaction,enabled:!i.compaction.enabled}})}),s.jsxs("div",{className:"toggle-label",children:[s.jsx("strong",{children:"Event Compaction"}),s.jsx("span",{children:"Automatically summarize old events to reduce context size"})]}),i.compaction.enabled&&s.jsx("input",{type:"number",value:i.compaction.max_events,onChange:h=>o({compaction:{...i.compaction,max_events:parseInt(h.target.value)||100}}),style:{width:80},placeholder:"Max events"})]}),s.jsxs("div",{className:"toggle-group",style:{marginTop:12},children:[s.jsx("div",{className:`toggle ${i.context_cache.enabled?"active":""}`,onClick:()=>o({context_cache:{...i.context_cache,enabled:!i.context_cache.enabled}})}),s.jsxs("div",{className:"toggle-label",children:[s.jsx("strong",{children:"Context Caching"}),s.jsx("span",{children:"Cache static instructions for better performance"})]}),i.context_cache.enabled&&s.jsx("input",{type:"number",value:i.context_cache.ttl_seconds,onChange:h=>o({context_cache:{...i.context_cache,ttl_seconds:parseInt(h.target.value)||3600}}),style:{width:100},placeholder:"TTL (seconds)"})]}),s.jsxs("div",{className:"toggle-group",style:{marginTop:12},children:[s.jsx("div",{className:`toggle ${i.resumability.enabled?"active":""}`,onClick:()=>o({resumability:{...i.resumability,enabled:!i.resumability.enabled}})}),s.jsxs("div",{className:"toggle-label",children:[s.jsx("strong",{children:"Resumability"}),s.jsx("span",{children:"Allow pausing and resuming agent execution"})]})]})]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(yu,{size:20}),"Session State Keys"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:l,children:[s.jsx(Je,{size:14}),"Add Key"]})]}),i.state_keys.length===0?s.jsx("p",{className:"empty-message",children:"No state keys defined. Add keys to declare what data agents can share."}):i.state_keys.map((h,F)=>s.jsxs("div",{className:"list-item",children:[s.jsxs("div",{className:"list-item-content",children:[s.jsx("input",{type:"text",value:h.name,onChange:E=>c(F,{name:E.target.value}),placeholder:"Key name"}),s.jsxs("select",{value:h.type,onChange:E=>c(F,{type:E.target.value}),children:[s.jsx("option",{value:"string",children:"String"}),s.jsx("option",{value:"number",children:"Number"}),s.jsx("option",{value:"boolean",children:"Boolean"}),s.jsx("option",{value:"object",children:"Object"}),s.jsx("option",{value:"array",children:"Array"})]}),s.jsxs("select",{value:h.scope,onChange:E=>c(F,{scope:E.target.value}),children:[s.jsx("option",{value:"session",children:"Session"}),s.jsx("option",{value:"user",children:"User"}),s.jsx("option",{value:"app",children:"App"}),s.jsx("option",{value:"temp",children:"Temporary"})]}),s.jsx("input",{type:"text",value:h.description,onChange:E=>c(F,{description:E.target.value}),placeholder:"Description",style:{gridColumn:"span 2"}})]}),s.jsx("button",{className:"delete-item",onClick:()=>u(F),children:s.jsx(De,{size:16})})]},F))]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(an,{size:20}),"Plugins"]}),s.jsx("div",{className:"plugin-add-dropdown",children:s.jsxs("select",{className:"btn btn-secondary btn-sm",value:"",onChange:h=>{h.target.value&&(d(h.target.value),h.target.value="")},style:{paddingRight:8},children:[s.jsx("option",{value:"",children:"+ Add Plugin..."}),s.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),s.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),s.jsx("option",{value:"LoggingPlugin",children:"Logging"}),s.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),s.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),s.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]})})]}),i.plugins.length===0?s.jsx("p",{className:"empty-message",children:"No plugins configured. Add plugins to extend agent functionality."}):i.plugins.map((h,F)=>s.jsxs("div",{className:"list-item",style:{flexDirection:"column",gap:12},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",gap:12},children:[s.jsxs("select",{value:h.type,onChange:E=>p(F,{type:E.target.value}),style:{flex:1},children:[s.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),s.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),s.jsx("option",{value:"LoggingPlugin",children:"Logging"}),s.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),s.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),s.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]}),s.jsx("button",{className:"delete-item",onClick:()=>f(F),children:s.jsx(De,{size:16})})]}),h.type==="ReflectAndRetryToolPlugin"&&s.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[s.jsxs("div",{className:"form-group",style:{flex:0},children:[s.jsx("label",{style:{fontSize:12},children:"Max Retries"}),s.jsx("input",{type:"number",min:"0",max:"10",value:h.max_retries??3,onChange:E=>p(F,{max_retries:parseInt(E.target.value)||0}),style:{width:70}})]}),s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[s.jsxs("span",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:h.throw_exception_if_retry_exceeded??!1,onChange:E=>p(F,{throw_exception_if_retry_exceeded:E.target.checked})}),s.jsx("span",{className:"toggle-slider"})]}),"Throw exception if retry exceeded"]})]}),h.type==="ContextFilterPlugin"&&s.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[s.jsxs("div",{className:"form-group",style:{flex:0},children:[s.jsx("label",{style:{fontSize:12},children:"Invocations to Keep"}),s.jsx("input",{type:"number",min:"1",max:"100",value:h.num_invocations_to_keep??5,onChange:E=>p(F,{num_invocations_to_keep:parseInt(E.target.value)||1}),style:{width:70}})]}),s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Keeps only the last N conversation turns to reduce context size"})]}),h.type==="LoggingPlugin"&&s.jsx("div",{style:{paddingLeft:8},children:s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Logs all agent events (messages, tool calls, responses) to the console"})}),h.type==="GlobalInstructionPlugin"&&s.jsxs("div",{style:{width:"100%",paddingLeft:8},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{style:{fontSize:12},children:"Global Instruction"}),s.jsx("textarea",{value:h.global_instruction??"",onChange:E=>p(F,{global_instruction:E.target.value}),placeholder:"Instructions that apply to all agents in the app...",rows:3,style:{width:"100%"}})]}),s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"This instruction is prepended to every agent's system prompt"})]}),h.type==="SaveFilesAsArtifactsPlugin"&&s.jsx("div",{style:{paddingLeft:8},children:s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Automatically saves files uploaded in user messages as artifacts for later retrieval"})}),h.type==="MultimodalToolResultsPlugin"&&s.jsx("div",{style:{paddingLeft:8},children:s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Allows tools to return multimodal content (images, files) directly to the LLM"})})]},F))]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(Hg,{size:20}),"Network Allowlist"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:x,children:[s.jsx(Je,{size:14}),"Add Pattern"]})]}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:12},children:"Patterns that are automatically allowed when running in sandbox mode. Requests to other domains will prompt for approval."}),y.length===0?s.jsx("p",{className:"empty-message",children:"No custom allowlist patterns. LLM API providers are allowed by default."}):y.map((h,F)=>s.jsxs("div",{className:"list-item",children:[s.jsxs("div",{className:"list-item-content",style:{display:"flex",gap:8,alignItems:"center"},children:[s.jsx(xu,{size:16,style:{color:"var(--text-muted)",flexShrink:0}}),s.jsx("input",{type:"text",value:h.pattern,onChange:E=>g(F,{pattern:E.target.value}),placeholder:"example.com or *.example.com",style:{flex:1}}),s.jsxs("select",{value:h.pattern_type,onChange:E=>g(F,{pattern_type:E.target.value}),style:{width:100},children:[s.jsx("option",{value:"exact",children:"Exact"}),s.jsx("option",{value:"wildcard",children:"Wildcard"}),s.jsx("option",{value:"regex",children:"Regex"})]}),s.jsx("span",{style:{fontSize:10,padding:"2px 6px",backgroundColor:h.source==="approved"?"rgba(34, 197, 94, 0.2)":"rgba(107, 114, 128, 0.2)",color:h.source==="approved"?"#4ade80":"var(--text-muted)",borderRadius:4,flexShrink:0},children:h.source})]}),s.jsx("button",{className:"delete-item",onClick:()=>P(F),children:s.jsx(De,{size:16})})]},h.id||F)),s.jsxs("div",{style:{marginTop:16,padding:12,backgroundColor:"var(--bg-tertiary)",borderRadius:6,fontSize:12},children:[s.jsx("div",{style:{fontWeight:500,marginBottom:6,color:"var(--text-secondary)"},children:"Default Allowed Domains:"}),s.jsx("div",{style:{color:"var(--text-muted)",lineHeight:1.6},children:"generativelanguage.googleapis.com, api.openai.com, api.anthropic.com, api.together.xyz, api.groq.com, api.mistral.ai"})]})]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(ob,{size:20}),"Volume Mounts"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:N,children:[s.jsx(Je,{size:14}),"Add Mount"]})]}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:12},children:"Mount local directories into the Docker sandbox so MCP servers and tools can access files."}),w.length===0?s.jsx("p",{className:"empty-message",children:"No volume mounts configured. Add mounts to allow MCP servers to access local files."}):w.map((h,F)=>s.jsxs("div",{className:"list-item",children:[s.jsxs("div",{className:"list-item-content",style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[s.jsx(Fg,{size:16,style:{color:"var(--text-muted)",flexShrink:0}}),s.jsx("input",{type:"text",value:h.host_path,onChange:E=>_(F,{host_path:E.target.value}),placeholder:"~/Documents or /path/to/folder",style:{flex:1,minWidth:150},title:"Host path (local directory)"}),s.jsx("span",{style:{color:"var(--text-muted)",fontSize:12},children:"→"}),s.jsx("input",{type:"text",value:h.container_path,onChange:E=>_(F,{container_path:E.target.value}),placeholder:"/mnt/data",style:{width:140},title:"Container path (where it appears in sandbox)"}),s.jsxs("select",{value:h.mode,onChange:E=>_(F,{mode:E.target.value}),style:{width:100},title:"Access mode",children:[s.jsx("option",{value:"ro",children:"Read Only"}),s.jsx("option",{value:"rw",children:"Read/Write"})]})]}),s.jsx("button",{className:"delete-item",onClick:()=>C(F),children:s.jsx(De,{size:16})})]},F)),s.jsxs("div",{style:{marginTop:16,padding:12,backgroundColor:"var(--bg-tertiary)",borderRadius:6,fontSize:12},children:[s.jsx("div",{style:{fontWeight:500,marginBottom:6,color:"var(--text-secondary)"},children:"Usage Tips:"}),s.jsxs("div",{style:{color:"var(--text-muted)",lineHeight:1.6},children:["• Use ",s.jsx("code",{style:{background:"var(--bg-primary)",padding:"1px 4px",borderRadius:3},children:"~/Documents"})," to mount your Documents folder",s.jsx("br",{}),"• MCP filesystem server needs access to directories it should manage",s.jsx("br",{}),'• Use "Read Only" mode for safety unless write access is needed']})]})]})]})}const _b="modulepreload",Sb=function(e){return"/"+e},Dp={},Cb=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=Sb(c),c in Dp)return;Dp[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":_b,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((f,m)=>{p.addEventListener("load",f),p.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})};function Fp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Nb(e){if(Array.isArray(e))return e}function Eb(e,t,n){return(t=Mb(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zb(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(d){u=!0,i=d}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function Tb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Up(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Bp(Object(n),!0).forEach(function(r){Eb(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Pb(e,t){if(e==null)return{};var n,r,i=Lb(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Lb(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Ab(e,t){return Nb(e)||zb(e,t)||Ib(e,t)||Tb()}function Rb(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Mb(e){var t=Rb(e,"string");return typeof t=="symbol"?t:t+""}function Ib(e,t){if(e){if(typeof e=="string")return Fp(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Fp(e,t):void 0}}function Ob(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Wp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vp(Object(n),!0).forEach(function(r){Ob(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $b(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,o){return o(i)},r)}}function js(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function Po(e){return{}.toString.call(e).includes("Object")}function Db(e){return!Object.keys(e).length}function si(e){return typeof e=="function"}function Fb(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Bb(e,t){return Po(t)||Vn("changeType"),Object.keys(t).some(function(n){return!Fb(e,n)})&&Vn("changeField"),t}function Ub(e){si(e)||Vn("selectorType")}function Vb(e){si(e)||Po(e)||Vn("handlerType"),Po(e)&&Object.values(e).some(function(t){return!si(t)})&&Vn("handlersType")}function Wb(e){e||Vn("initialIsRequired"),Po(e)||Vn("initialType"),Db(e)&&Vn("initialContent")}function Hb(e,t){throw new Error(e[t]||e.default)}var qb={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Vn=js(Hb)(qb),Mi={changes:Bb,selector:Ub,handler:Vb,initial:Wb};function Jb(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Mi.initial(e),Mi.handler(t);var n={current:e},r=js(Qb)(n,t),i=js(Gb)(n),o=js(Mi.changes)(e),a=js(Kb)(n);function l(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return Mi.selector(u),u(n.current)}function c(u){$b(r,i,o,a)(u)}return[l,c]}function Kb(e,t){return si(t)?t(e.current):t}function Gb(e,t){return e.current=Wp(Wp({},e.current),t),t}function Qb(e,t,n){return si(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var Yb={create:Jb},Xb={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function Zb(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function ek(e){return{}.toString.call(e).includes("Object")}function tk(e){return e||Hp("configIsRequired"),ek(e)||Hp("configType"),e.urls?(nk(),{paths:{vs:e.urls.monacoBase}}):e}function nk(){console.warn(Qg.deprecation)}function rk(e,t){throw new Error(e[t]||e.default)}var Qg={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Hp=Zb(rk)(Qg),sk={config:tk},ik=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(o,a){return a(o)},i)}};function Yg(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],Yg(e[n],t[n]))}),Up(Up({},e),t)}var ok={type:"cancelation",msg:"operation is manually canceled"};function Fa(e){var t=!1,n=new Promise(function(r,i){e.then(function(o){return t?i(ok):r(o)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var ak=["monaco"],lk=Yb.create({config:Xb,isInitialized:!1,resolve:null,reject:null,monaco:null}),Xg=Ab(lk,2),hi=Xg[0],na=Xg[1];function ck(e){var t=sk.config(e),n=t.monaco,r=Pb(t,ak);na(function(i){return{config:Yg(i.config,r),monaco:n}})}function uk(){var e=hi(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(na({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),Fa(Ba);if(window.monaco&&window.monaco.editor)return Zg(window.monaco),e.resolve(window.monaco),Fa(Ba);ik(dk,fk)(mk)}return Fa(Ba)}function dk(e){return document.body.appendChild(e)}function pk(e){var t=document.createElement("script");return e&&(t.src=e),t}function fk(e){var t=hi(function(r){var i=r.config,o=r.reject;return{config:i,reject:o}}),n=pk("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function mk(){var e=hi(function(n){var r=n.config,i=n.resolve,o=n.reject;return{config:r,resolve:i,reject:o}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;Zg(r),e.resolve(r)},function(n){e.reject(n)})}function Zg(e){hi().monaco||na({monaco:e})}function hk(){return hi(function(e){var t=e.monaco;return t})}var Ba=new Promise(function(e,t){return na({resolve:e,reject:t})}),ex={config:ck,init:uk,__getMonacoInstance:hk},gk={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Ua=gk,xk={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},yk=xk;function vk({children:e}){return zt.createElement("div",{style:yk.container},e)}var bk=vk,kk=bk;function wk({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:o,wrapperProps:a}){return zt.createElement("section",{style:{...Ua.wrapper,width:e,height:t},...a},!n&&zt.createElement(kk,null,r),zt.createElement("div",{ref:i,style:{...Ua.fullWidth,...!n&&Ua.hide},className:o}))}var jk=wk,tx=k.memo(jk);function _k(e){k.useEffect(e,[])}var nx=_k;function Sk(e,t,n=!0){let r=k.useRef(!0);k.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var Ct=Sk;function As(){}function Mr(e,t,n,r){return Ck(e,r)||Nk(e,t,n,r)}function Ck(e,t){return e.editor.getModel(rx(e,t))}function Nk(e,t,n,r){return e.editor.createModel(t,n,r?rx(e,r):void 0)}function rx(e,t){return e.Uri.parse(t)}function Ek({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:o,modifiedModelPath:a,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:c=!1,theme:u="light",loading:d="Loading...",options:p={},height:f="100%",width:m="100%",className:y,wrapperProps:w={},beforeMount:z=As,onMount:v=As}){let[x,g]=k.useState(!1),[P,N]=k.useState(!0),_=k.useRef(null),C=k.useRef(null),b=k.useRef(null),L=k.useRef(v),S=k.useRef(z),A=k.useRef(!1);nx(()=>{let B=ex.init();return B.then(ne=>(C.current=ne)&&N(!1)).catch(ne=>(ne==null?void 0:ne.type)!=="cancelation"&&console.error("Monaco initialization: error:",ne)),()=>_.current?U():B.cancel()}),Ct(()=>{if(_.current&&C.current){let B=_.current.getOriginalEditor(),ne=Mr(C.current,e||"",r||n||"text",o||"");ne!==B.getModel()&&B.setModel(ne)}},[o],x),Ct(()=>{if(_.current&&C.current){let B=_.current.getModifiedEditor(),ne=Mr(C.current,t||"",i||n||"text",a||"");ne!==B.getModel()&&B.setModel(ne)}},[a],x),Ct(()=>{let B=_.current.getModifiedEditor();B.getOption(C.current.editor.EditorOption.readOnly)?B.setValue(t||""):t!==B.getValue()&&(B.executeEdits("",[{range:B.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),B.pushUndoStop())},[t],x),Ct(()=>{var B,ne;(ne=(B=_.current)==null?void 0:B.getModel())==null||ne.original.setValue(e||"")},[e],x),Ct(()=>{let{original:B,modified:ne}=_.current.getModel();C.current.editor.setModelLanguage(B,r||n||"text"),C.current.editor.setModelLanguage(ne,i||n||"text")},[n,r,i],x),Ct(()=>{var B;(B=C.current)==null||B.editor.setTheme(u)},[u],x),Ct(()=>{var B;(B=_.current)==null||B.updateOptions(p)},[p],x);let M=k.useCallback(()=>{var T;if(!C.current)return;S.current(C.current);let B=Mr(C.current,e||"",r||n||"text",o||""),ne=Mr(C.current,t||"",i||n||"text",a||"");(T=_.current)==null||T.setModel({original:B,modified:ne})},[n,t,i,e,r,o,a]),q=k.useCallback(()=>{var B;!A.current&&b.current&&(_.current=C.current.editor.createDiffEditor(b.current,{automaticLayout:!0,...p}),M(),(B=C.current)==null||B.editor.setTheme(u),g(!0),A.current=!0)},[p,u,M]);k.useEffect(()=>{x&&L.current(_.current,C.current)},[x]),k.useEffect(()=>{!P&&!x&&q()},[P,x,q]);function U(){var ne,T,$,R;let B=(ne=_.current)==null?void 0:ne.getModel();l||((T=B==null?void 0:B.original)==null||T.dispose()),c||(($=B==null?void 0:B.modified)==null||$.dispose()),(R=_.current)==null||R.dispose()}return zt.createElement(tx,{width:m,height:f,isEditorReady:x,loading:d,_ref:b,className:y,wrapperProps:w})}var zk=Ek;k.memo(zk);function Tk(e){let t=k.useRef();return k.useEffect(()=>{t.current=e},[e]),t.current}var Pk=Tk,Ii=new Map;function Lk({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:o,theme:a="light",line:l,loading:c="Loading...",options:u={},overrideServices:d={},saveViewState:p=!0,keepCurrentModel:f=!1,width:m="100%",height:y="100%",className:w,wrapperProps:z={},beforeMount:v=As,onMount:x=As,onChange:g,onValidate:P=As}){let[N,_]=k.useState(!1),[C,b]=k.useState(!0),L=k.useRef(null),S=k.useRef(null),A=k.useRef(null),M=k.useRef(x),q=k.useRef(v),U=k.useRef(),B=k.useRef(r),ne=Pk(o),T=k.useRef(!1),$=k.useRef(!1);nx(()=>{let W=ex.init();return W.then(G=>(L.current=G)&&b(!1)).catch(G=>(G==null?void 0:G.type)!=="cancelation"&&console.error("Monaco initialization: error:",G)),()=>S.current?j():W.cancel()}),Ct(()=>{var G,h,F,E;let W=Mr(L.current,e||r||"",t||i||"",o||n||"");W!==((G=S.current)==null?void 0:G.getModel())&&(p&&Ii.set(ne,(h=S.current)==null?void 0:h.saveViewState()),(F=S.current)==null||F.setModel(W),p&&((E=S.current)==null||E.restoreViewState(Ii.get(o))))},[o],N),Ct(()=>{var W;(W=S.current)==null||W.updateOptions(u)},[u],N),Ct(()=>{!S.current||r===void 0||(S.current.getOption(L.current.editor.EditorOption.readOnly)?S.current.setValue(r):r!==S.current.getValue()&&($.current=!0,S.current.executeEdits("",[{range:S.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),S.current.pushUndoStop(),$.current=!1))},[r],N),Ct(()=>{var G,h;let W=(G=S.current)==null?void 0:G.getModel();W&&i&&((h=L.current)==null||h.editor.setModelLanguage(W,i))},[i],N),Ct(()=>{var W;l!==void 0&&((W=S.current)==null||W.revealLine(l))},[l],N),Ct(()=>{var W;(W=L.current)==null||W.editor.setTheme(a)},[a],N);let R=k.useCallback(()=>{var W;if(!(!A.current||!L.current)&&!T.current){q.current(L.current);let G=o||n,h=Mr(L.current,r||e||"",t||i||"",G||"");S.current=(W=L.current)==null?void 0:W.editor.create(A.current,{model:h,automaticLayout:!0,...u},d),p&&S.current.restoreViewState(Ii.get(G)),L.current.editor.setTheme(a),l!==void 0&&S.current.revealLine(l),_(!0),T.current=!0}},[e,t,n,r,i,o,u,d,p,a,l]);k.useEffect(()=>{N&&M.current(S.current,L.current)},[N]),k.useEffect(()=>{!C&&!N&&R()},[C,N,R]),B.current=r,k.useEffect(()=>{var W,G;N&&g&&((W=U.current)==null||W.dispose(),U.current=(G=S.current)==null?void 0:G.onDidChangeModelContent(h=>{$.current||g(S.current.getValue(),h)}))},[N,g]),k.useEffect(()=>{if(N){let W=L.current.editor.onDidChangeMarkers(G=>{var F;let h=(F=S.current.getModel())==null?void 0:F.uri;if(h&&G.find(E=>E.path===h.path)){let E=L.current.editor.getModelMarkers({resource:h});P==null||P(E)}});return()=>{W==null||W.dispose()}}return()=>{}},[N,P]);function j(){var W,G;(W=U.current)==null||W.dispose(),f?p&&Ii.set(o,S.current.saveViewState()):(G=S.current.getModel())==null||G.dispose(),S.current.dispose()}return zt.createElement(tx,{width:m,height:y,isEditorReady:N,loading:c,_ref:A,className:w,wrapperProps:z})}var Ak=Lk,Rk=k.memo(Ak),Ft=Rk;function Mk(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const Ik=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Ok=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,$k={};function qp(e,t){return($k.jsx?Ok:Ik).test(e)}const Dk=/[ \t\n\f\r]/g;function Fk(e){return typeof e=="object"?e.type==="text"?Jp(e.value):!1:Jp(e)}function Jp(e){return e.replace(Dk,"")===""}class gi{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}gi.prototype.normal={};gi.prototype.property={};gi.prototype.space=void 0;function sx(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new gi(n,r,t)}function sc(e){return e.toLowerCase()}class wt{constructor(t,n){this.attribute=n,this.property=t}}wt.prototype.attribute="";wt.prototype.booleanish=!1;wt.prototype.boolean=!1;wt.prototype.commaOrSpaceSeparated=!1;wt.prototype.commaSeparated=!1;wt.prototype.defined=!1;wt.prototype.mustUseProperty=!1;wt.prototype.number=!1;wt.prototype.overloadedBoolean=!1;wt.prototype.property="";wt.prototype.spaceSeparated=!1;wt.prototype.space=void 0;let Bk=0;const ke=yr(),qe=yr(),ic=yr(),re=yr(),Le=yr(),Ur=yr(),_t=yr();function yr(){return 2**++Bk}const oc=Object.freeze(Object.defineProperty({__proto__:null,boolean:ke,booleanish:qe,commaOrSpaceSeparated:_t,commaSeparated:Ur,number:re,overloadedBoolean:ic,spaceSeparated:Le},Symbol.toStringTag,{value:"Module"})),Va=Object.keys(oc);class ju extends wt{constructor(t,n,r,i){let o=-1;if(super(t,n),Kp(this,"space",i),typeof r=="number")for(;++o<Va.length;){const a=Va[o];Kp(this,Va[o],(r&oc[a])===oc[a])}}}ju.prototype.defined=!0;function Kp(e,t,n){n&&(e[t]=n)}function rs(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const o=new ju(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[sc(r)]=r,n[sc(o.attribute)]=r}return new gi(t,n,e.space)}const ix=rs({properties:{ariaActiveDescendant:null,ariaAtomic:qe,ariaAutoComplete:null,ariaBusy:qe,ariaChecked:qe,ariaColCount:re,ariaColIndex:re,ariaColSpan:re,ariaControls:Le,ariaCurrent:null,ariaDescribedBy:Le,ariaDetails:null,ariaDisabled:qe,ariaDropEffect:Le,ariaErrorMessage:null,ariaExpanded:qe,ariaFlowTo:Le,ariaGrabbed:qe,ariaHasPopup:null,ariaHidden:qe,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Le,ariaLevel:re,ariaLive:null,ariaModal:qe,ariaMultiLine:qe,ariaMultiSelectable:qe,ariaOrientation:null,ariaOwns:Le,ariaPlaceholder:null,ariaPosInSet:re,ariaPressed:qe,ariaReadOnly:qe,ariaRelevant:null,ariaRequired:qe,ariaRoleDescription:Le,ariaRowCount:re,ariaRowIndex:re,ariaRowSpan:re,ariaSelected:qe,ariaSetSize:re,ariaSort:null,ariaValueMax:re,ariaValueMin:re,ariaValueNow:re,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function ox(e,t){return t in e?e[t]:t}function ax(e,t){return ox(e,t.toLowerCase())}const Uk=rs({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Ur,acceptCharset:Le,accessKey:Le,action:null,allow:null,allowFullScreen:ke,allowPaymentRequest:ke,allowUserMedia:ke,alt:null,as:null,async:ke,autoCapitalize:null,autoComplete:Le,autoFocus:ke,autoPlay:ke,blocking:Le,capture:null,charSet:null,checked:ke,cite:null,className:Le,cols:re,colSpan:null,content:null,contentEditable:qe,controls:ke,controlsList:Le,coords:re|Ur,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ke,defer:ke,dir:null,dirName:null,disabled:ke,download:ic,draggable:qe,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ke,formTarget:null,headers:Le,height:re,hidden:ic,high:re,href:null,hrefLang:null,htmlFor:Le,httpEquiv:Le,id:null,imageSizes:null,imageSrcSet:null,inert:ke,inputMode:null,integrity:null,is:null,isMap:ke,itemId:null,itemProp:Le,itemRef:Le,itemScope:ke,itemType:Le,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ke,low:re,manifest:null,max:null,maxLength:re,media:null,method:null,min:null,minLength:re,multiple:ke,muted:ke,name:null,nonce:null,noModule:ke,noValidate:ke,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ke,optimum:re,pattern:null,ping:Le,placeholder:null,playsInline:ke,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ke,referrerPolicy:null,rel:Le,required:ke,reversed:ke,rows:re,rowSpan:re,sandbox:Le,scope:null,scoped:ke,seamless:ke,selected:ke,shadowRootClonable:ke,shadowRootDelegatesFocus:ke,shadowRootMode:null,shape:null,size:re,sizes:null,slot:null,span:re,spellCheck:qe,src:null,srcDoc:null,srcLang:null,srcSet:null,start:re,step:null,style:null,tabIndex:re,target:null,title:null,translate:null,type:null,typeMustMatch:ke,useMap:null,value:qe,width:re,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Le,axis:null,background:null,bgColor:null,border:re,borderColor:null,bottomMargin:re,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ke,declare:ke,event:null,face:null,frame:null,frameBorder:null,hSpace:re,leftMargin:re,link:null,longDesc:null,lowSrc:null,marginHeight:re,marginWidth:re,noResize:ke,noHref:ke,noShade:ke,noWrap:ke,object:null,profile:null,prompt:null,rev:null,rightMargin:re,rules:null,scheme:null,scrolling:qe,standby:null,summary:null,text:null,topMargin:re,valueType:null,version:null,vAlign:null,vLink:null,vSpace:re,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ke,disableRemotePlayback:ke,prefix:null,property:null,results:re,security:null,unselectable:null},space:"html",transform:ax}),Vk=rs({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:_t,accentHeight:re,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:re,amplitude:re,arabicForm:null,ascent:re,attributeName:null,attributeType:null,azimuth:re,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:re,by:null,calcMode:null,capHeight:re,className:Le,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:re,diffuseConstant:re,direction:null,display:null,dur:null,divisor:re,dominantBaseline:null,download:ke,dx:null,dy:null,edgeMode:null,editable:null,elevation:re,enableBackground:null,end:null,event:null,exponent:re,externalResourcesRequired:null,fill:null,fillOpacity:re,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Ur,g2:Ur,glyphName:Ur,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:re,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:re,horizOriginX:re,horizOriginY:re,id:null,ideographic:re,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:re,k:re,k1:re,k2:re,k3:re,k4:re,kernelMatrix:_t,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:re,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:re,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:re,overlineThickness:re,paintOrder:null,panose1:null,path:null,pathLength:re,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Le,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:re,pointsAtY:re,pointsAtZ:re,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:_t,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:_t,rev:_t,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:_t,requiredFeatures:_t,requiredFonts:_t,requiredFormats:_t,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:re,specularExponent:re,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:re,strikethroughThickness:re,string:null,stroke:null,strokeDashArray:_t,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:re,strokeOpacity:re,strokeWidth:null,style:null,surfaceScale:re,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:_t,tabIndex:re,tableValues:null,target:null,targetX:re,targetY:re,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:_t,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:re,underlineThickness:re,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:re,values:null,vAlphabetic:re,vMathematical:re,vectorEffect:null,vHanging:re,vIdeographic:re,version:null,vertAdvY:re,vertOriginX:re,vertOriginY:re,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:re,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:ox}),lx=rs({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),cx=rs({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:ax}),ux=rs({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),Wk={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Hk=/[A-Z]/g,Gp=/-[a-z]/g,qk=/^data[-\w.:]+$/i;function Jk(e,t){const n=sc(t);let r=t,i=wt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&qk.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(Gp,Gk);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!Gp.test(o)){let a=o.replace(Hk,Kk);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a}}i=ju}return new i(r,t)}function Kk(e){return"-"+e.toLowerCase()}function Gk(e){return e.charAt(1).toUpperCase()}const Qk=sx([ix,Uk,lx,cx,ux],"html"),_u=sx([ix,Vk,lx,cx,ux],"svg");function Yk(e){return e.join(" ").trim()}var Su={},Qp=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Xk=/\n/g,Zk=/^\s*/,ew=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,tw=/^:\s*/,nw=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,rw=/^[;\s]*/,sw=/^\s+|\s+$/g,iw=`
`,Yp="/",Xp="*",nr="",ow="comment",aw="declaration";function lw(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(y){var w=y.match(Xk);w&&(n+=w.length);var z=y.lastIndexOf(iw);r=~z?y.length-z:r+y.length}function o(){var y={line:n,column:r};return function(w){return w.position=new a(y),u(),w}}function a(y){this.start=y,this.end={line:n,column:r},this.source=t.source}a.prototype.content=e;function l(y){var w=new Error(t.source+":"+n+":"+r+": "+y);if(w.reason=y,w.filename=t.source,w.line=n,w.column=r,w.source=e,!t.silent)throw w}function c(y){var w=y.exec(e);if(w){var z=w[0];return i(z),e=e.slice(z.length),w}}function u(){c(Zk)}function d(y){var w;for(y=y||[];w=p();)w!==!1&&y.push(w);return y}function p(){var y=o();if(!(Yp!=e.charAt(0)||Xp!=e.charAt(1))){for(var w=2;nr!=e.charAt(w)&&(Xp!=e.charAt(w)||Yp!=e.charAt(w+1));)++w;if(w+=2,nr===e.charAt(w-1))return l("End of comment missing");var z=e.slice(2,w-2);return r+=2,i(z),e=e.slice(w),r+=2,y({type:ow,comment:z})}}function f(){var y=o(),w=c(ew);if(w){if(p(),!c(tw))return l("property missing ':'");var z=c(nw),v=y({type:aw,property:Zp(w[0].replace(Qp,nr)),value:z?Zp(z[0].replace(Qp,nr)):nr});return c(rw),v}}function m(){var y=[];d(y);for(var w;w=f();)w!==!1&&(y.push(w),d(y));return y}return u(),m()}function Zp(e){return e?e.replace(sw,nr):nr}var cw=lw,uw=to&&to.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Su,"__esModule",{value:!0});Su.default=pw;const dw=uw(cw);function pw(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,dw.default)(e),i=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:a,value:l}=o;i?t(a,l,o):l&&(n=n||{},n[a]=l)}),n}var ra={};Object.defineProperty(ra,"__esModule",{value:!0});ra.camelCase=void 0;var fw=/^--[a-zA-Z0-9_-]+$/,mw=/-([a-z])/g,hw=/^[^-]+$/,gw=/^-(webkit|moz|ms|o|khtml)-/,xw=/^-(ms)-/,yw=function(e){return!e||hw.test(e)||fw.test(e)},vw=function(e,t){return t.toUpperCase()},ef=function(e,t){return"".concat(t,"-")},bw=function(e,t){return t===void 0&&(t={}),yw(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(xw,ef):e=e.replace(gw,ef),e.replace(mw,vw))};ra.camelCase=bw;var kw=to&&to.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},ww=kw(Su),jw=ra;function ac(e,t){var n={};return!e||typeof e!="string"||(0,ww.default)(e,function(r,i){r&&i&&(n[(0,jw.camelCase)(r,t)]=i)}),n}ac.default=ac;var _w=ac;const Sw=Mo(_w),dx=px("end"),Cu=px("start");function px(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Cw(e){const t=Cu(e),n=dx(e);if(t&&n)return{start:t,end:n}}function Rs(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?tf(e.position):"start"in e||"end"in e?tf(e):"line"in e||"column"in e?lc(e):""}function lc(e){return nf(e&&e.line)+":"+nf(e&&e.column)}function tf(e){return lc(e&&e.start)+"-"+lc(e&&e.end)}function nf(e){return e&&typeof e=="number"?e:1}class ut extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},a=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(a=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?o.ruleId=r:(o.source=r.slice(0,c),o.ruleId=r.slice(c+1))}if(!o.place&&o.ancestors&&o.ancestors){const c=o.ancestors[o.ancestors.length-1];c&&(o.place=c.position)}const l=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=Rs(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=a&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}ut.prototype.file="";ut.prototype.name="";ut.prototype.reason="";ut.prototype.message="";ut.prototype.stack="";ut.prototype.column=void 0;ut.prototype.line=void 0;ut.prototype.ancestors=void 0;ut.prototype.cause=void 0;ut.prototype.fatal=void 0;ut.prototype.place=void 0;ut.prototype.ruleId=void 0;ut.prototype.source=void 0;const Nu={}.hasOwnProperty,Nw=new Map,Ew=/[A-Z]/g,zw=new Set(["table","tbody","thead","tfoot","tr"]),Tw=new Set(["td","th"]),fx="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Pw(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=Dw(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=$w(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?_u:Qk,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=mx(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function mx(e,t,n){if(t.type==="element")return Lw(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return Aw(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return Mw(e,t,n);if(t.type==="mdxjsEsm")return Rw(e,t);if(t.type==="root")return Iw(e,t,n);if(t.type==="text")return Ow(e,t)}function Lw(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=_u,e.schema=i),e.ancestors.push(t);const o=gx(e,t.tagName,!1),a=Fw(e,t);let l=zu(e,t);return zw.has(t.tagName)&&(l=l.filter(function(c){return typeof c=="string"?!Fk(c):!0})),hx(e,a,o,t),Eu(a,l),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function Aw(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}ii(e,t.position)}function Rw(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);ii(e,t.position)}function Mw(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=_u,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:gx(e,t.name,!0),a=Bw(e,t),l=zu(e,t);return hx(e,a,o,t),Eu(a,l),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function Iw(e,t,n){const r={};return Eu(r,zu(e,t)),e.create(t,e.Fragment,r,n)}function Ow(e,t){return t.value}function hx(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Eu(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function $w(e,t,n){return r;function r(i,o,a,l){const u=Array.isArray(a.children)?n:t;return l?u(o,a,l):u(o,a)}}function Dw(e,t){return n;function n(r,i,o,a){const l=Array.isArray(o.children),c=Cu(r);return t(i,o,a,l,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function Fw(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Nu.call(t.properties,i)){const o=Uw(e,i,t.properties[i]);if(o){const[a,l]=o;e.tableCellAlignToStyle&&a==="align"&&typeof l=="string"&&Tw.has(t.tagName)?r=l:n[a]=l}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function Bw(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const a=o.expression;a.type;const l=a.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument))}else ii(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const l=r.value.data.estree.body[0];l.type,o=e.evaluater.evaluateExpression(l.expression)}else ii(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function zu(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:Nw;for(;++r<t.children.length;){const o=t.children[r];let a;if(e.passKeys){const c=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(c){const u=i.get(c)||0;a=c+"-"+u,i.set(c,u+1)}}const l=mx(e,o,a);l!==void 0&&n.push(l)}return n}function Uw(e,t,n){const r=Jk(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Mk(n):Yk(n)),r.property==="style"){let i=typeof n=="object"?n:Vw(e,String(n));return e.stylePropertyNameCase==="css"&&(i=Ww(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?Wk[r.property]||r.property:r.attribute,n]}}function Vw(e,t){try{return Sw(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new ut("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=fx+"#cannot-parse-style-attribute",i}}function gx(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,a;for(;++o<i.length;){const l=qp(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};a=a?{type:"MemberExpression",object:a,property:l,computed:!!(o&&l.type==="Literal"),optional:!1}:l}r=a}else r=qp(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Nu.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);ii(e)}function ii(e,t){const n=new ut("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=fx+"#cannot-handle-mdx-estrees-without-createevaluater",n}function Ww(e){const t={};let n;for(n in e)Nu.call(e,n)&&(t[Hw(n)]=e[n]);return t}function Hw(e){let t=e.replace(Ew,qw);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function qw(e){return"-"+e.toLowerCase()}const Wa={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Jw={};function Kw(e,t){const n=Jw,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return xx(e,r,i)}function xx(e,t,n){if(Gw(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return rf(e.children,t,n)}return Array.isArray(e)?rf(e,t,n):""}function rf(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=xx(e[i],t,n);return r.join("")}function Gw(e){return!!(e&&typeof e=="object")}const sf=document.createElement("i");function Tu(e){const t="&"+e+";";sf.innerHTML=t;const n=sf.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function dn(e,t,n,r){const i=e.length;let o=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);o<r.length;)a=r.slice(o,o+1e4),a.unshift(t,0),e.splice(...a),o+=1e4,t+=1e4}function $t(e,t){return e.length>0?(dn(e,e.length,0,t),e):t}const of={}.hasOwnProperty;function Qw(e){const t={};let n=-1;for(;++n<e.length;)Yw(t,e[n]);return t}function Yw(e,t){let n;for(n in t){const i=(of.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let a;if(o)for(a in o){of.call(i,a)||(i[a]=[]);const l=o[a];Xw(i[a],Array.isArray(l)?l:l?[l]:[])}}}function Xw(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);dn(e,0,0,r)}function yx(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Vr(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const sn=Yn(/[A-Za-z]/),Et=Yn(/[\dA-Za-z]/),Zw=Yn(/[#-'*+\--9=?A-Z^-~]/);function cc(e){return e!==null&&(e<32||e===127)}const uc=Yn(/\d/),ej=Yn(/[\dA-Fa-f]/),tj=Yn(/[!-/:-@[-`{-~]/);function ye(e){return e!==null&&e<-2}function kt(e){return e!==null&&(e<0||e===32)}function Ee(e){return e===-2||e===-1||e===32}const nj=Yn(new RegExp("\\p{P}|\\p{S}","u")),rj=Yn(/\s/);function Yn(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function ss(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let a="";if(o===37&&Et(e.charCodeAt(n+1))&&Et(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(a=String.fromCharCode(o));else if(o>55295&&o<57344){const l=e.charCodeAt(n+1);o<56320&&l>56319&&l<57344?(a=String.fromCharCode(o,l),i=1):a="�"}else a=String.fromCharCode(o);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function Re(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return a;function a(c){return Ee(c)?(e.enter(n),l(c)):t(c)}function l(c){return Ee(c)&&o++<i?(e.consume(c),l):(e.exit(n),t(c))}}const sj={tokenize:ij};function ij(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),Re(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),o(l)}function o(l){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,a(l)}function a(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return ye(l)?(e.consume(l),e.exit("chunkText"),o):(e.consume(l),a)}}const oj={tokenize:aj},af={tokenize:lj};function aj(e){const t=this,n=[];let r=0,i,o,a;return l;function l(g){if(r<n.length){const P=n[r];return t.containerState=P[1],e.attempt(P[0].continuation,c,u)(g)}return u(g)}function c(g){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&x();const P=t.events.length;let N=P,_;for(;N--;)if(t.events[N][0]==="exit"&&t.events[N][1].type==="chunkFlow"){_=t.events[N][1].end;break}v(r);let C=P;for(;C<t.events.length;)t.events[C][1].end={..._},C++;return dn(t.events,N+1,0,t.events.slice(P)),t.events.length=C,u(g)}return l(g)}function u(g){if(r===n.length){if(!i)return f(g);if(i.currentConstruct&&i.currentConstruct.concrete)return y(g);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(af,d,p)(g)}function d(g){return i&&x(),v(r),f(g)}function p(g){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,y(g)}function f(g){return t.containerState={},e.attempt(af,m,y)(g)}function m(g){return r++,n.push([t.currentConstruct,t.containerState]),f(g)}function y(g){if(g===null){i&&x(),v(0),e.consume(g);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),w(g)}function w(g){if(g===null){z(e.exit("chunkFlow"),!0),v(0),e.consume(g);return}return ye(g)?(e.consume(g),z(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(g),w)}function z(g,P){const N=t.sliceStream(g);if(P&&N.push(null),g.previous=o,o&&(o.next=g),o=g,i.defineSkip(g.start),i.write(N),t.parser.lazy[g.start.line]){let _=i.events.length;for(;_--;)if(i.events[_][1].start.offset<a&&(!i.events[_][1].end||i.events[_][1].end.offset>a))return;const C=t.events.length;let b=C,L,S;for(;b--;)if(t.events[b][0]==="exit"&&t.events[b][1].type==="chunkFlow"){if(L){S=t.events[b][1].end;break}L=!0}for(v(r),_=C;_<t.events.length;)t.events[_][1].end={...S},_++;dn(t.events,b+1,0,t.events.slice(C)),t.events.length=_}}function v(g){let P=n.length;for(;P-- >g;){const N=n[P];t.containerState=N[1],N[0].exit.call(t,e)}n.length=g}function x(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function lj(e,t,n){return Re(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function lf(e){if(e===null||kt(e)||rj(e))return 1;if(nj(e))return 2}function Pu(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const dc={name:"attention",resolveAll:cj,tokenize:uj};function cj(e,t){let n=-1,r,i,o,a,l,c,u,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p={...e[r][1].end},f={...e[n][1].start};cf(p,-c),cf(f,c),a={type:c>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},l={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},o={type:c>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?"strong":"emphasis",start:{...a.start},end:{...l.end}},e[r][1].end={...a.start},e[n][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=$t(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=$t(u,[["enter",i,t],["enter",a,t],["exit",a,t],["enter",o,t]]),u=$t(u,Pu(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=$t(u,[["exit",o,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,u=$t(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,dn(e,r-1,n-r+3,u),n=r+u.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function uj(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=lf(r);let o;return a;function a(c){return o=c,e.enter("attentionSequence"),l(c)}function l(c){if(c===o)return e.consume(c),l;const u=e.exit("attentionSequence"),d=lf(c),p=!d||d===2&&i||n.includes(c),f=!i||i===2&&d||n.includes(r);return u._open=!!(o===42?p:p&&(i||!f)),u._close=!!(o===42?f:f&&(d||!p)),t(c)}}function cf(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const dj={name:"autolink",tokenize:pj};function pj(e,t,n){let r=0;return i;function i(m){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(m){return sn(m)?(e.consume(m),a):m===64?n(m):u(m)}function a(m){return m===43||m===45||m===46||Et(m)?(r=1,l(m)):u(m)}function l(m){return m===58?(e.consume(m),r=0,c):(m===43||m===45||m===46||Et(m))&&r++<32?(e.consume(m),l):(r=0,u(m))}function c(m){return m===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):m===null||m===32||m===60||cc(m)?n(m):(e.consume(m),c)}function u(m){return m===64?(e.consume(m),d):Zw(m)?(e.consume(m),u):n(m)}function d(m){return Et(m)?p(m):n(m)}function p(m){return m===46?(e.consume(m),r=0,d):m===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):f(m)}function f(m){if((m===45||Et(m))&&r++<63){const y=m===45?f:p;return e.consume(m),y}return n(m)}}const sa={partial:!0,tokenize:fj};function fj(e,t,n){return r;function r(o){return Ee(o)?Re(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||ye(o)?t(o):n(o)}}const vx={continuation:{tokenize:hj},exit:gj,name:"blockQuote",tokenize:mj};function mj(e,t,n){const r=this;return i;function i(a){if(a===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),o}return n(a)}function o(a){return Ee(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function hj(e,t,n){const r=this;return i;function i(a){return Ee(a)?Re(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):o(a)}function o(a){return e.attempt(vx,t,n)(a)}}function gj(e){e.exit("blockQuote")}const bx={name:"characterEscape",tokenize:xj};function xj(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return tj(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const kx={name:"characterReference",tokenize:yj};function yj(e,t,n){const r=this;let i=0,o,a;return l;function l(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),c}function c(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,a=Et,d(p))}function u(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,a=ej,d):(e.enter("characterReferenceValue"),o=7,a=uc,d(p))}function d(p){if(p===59&&i){const f=e.exit("characterReferenceValue");return a===Et&&!Tu(r.sliceSerialize(f))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(p)&&i++<o?(e.consume(p),d):n(p)}}const uf={partial:!0,tokenize:bj},df={concrete:!0,name:"codeFenced",tokenize:vj};function vj(e,t,n){const r=this,i={partial:!0,tokenize:N};let o=0,a=0,l;return c;function c(_){return u(_)}function u(_){const C=r.events[r.events.length-1];return o=C&&C[1].type==="linePrefix"?C[2].sliceSerialize(C[1],!0).length:0,l=_,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(_)}function d(_){return _===l?(a++,e.consume(_),d):a<3?n(_):(e.exit("codeFencedFenceSequence"),Ee(_)?Re(e,p,"whitespace")(_):p(_))}function p(_){return _===null||ye(_)?(e.exit("codeFencedFence"),r.interrupt?t(_):e.check(uf,w,P)(_)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(_))}function f(_){return _===null||ye(_)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(_)):Ee(_)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Re(e,m,"whitespace")(_)):_===96&&_===l?n(_):(e.consume(_),f)}function m(_){return _===null||ye(_)?p(_):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),y(_))}function y(_){return _===null||ye(_)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(_)):_===96&&_===l?n(_):(e.consume(_),y)}function w(_){return e.attempt(i,P,z)(_)}function z(_){return e.enter("lineEnding"),e.consume(_),e.exit("lineEnding"),v}function v(_){return o>0&&Ee(_)?Re(e,x,"linePrefix",o+1)(_):x(_)}function x(_){return _===null||ye(_)?e.check(uf,w,P)(_):(e.enter("codeFlowValue"),g(_))}function g(_){return _===null||ye(_)?(e.exit("codeFlowValue"),x(_)):(e.consume(_),g)}function P(_){return e.exit("codeFenced"),t(_)}function N(_,C,b){let L=0;return S;function S(B){return _.enter("lineEnding"),_.consume(B),_.exit("lineEnding"),A}function A(B){return _.enter("codeFencedFence"),Ee(B)?Re(_,M,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(B):M(B)}function M(B){return B===l?(_.enter("codeFencedFenceSequence"),q(B)):b(B)}function q(B){return B===l?(L++,_.consume(B),q):L>=a?(_.exit("codeFencedFenceSequence"),Ee(B)?Re(_,U,"whitespace")(B):U(B)):b(B)}function U(B){return B===null||ye(B)?(_.exit("codeFencedFence"),C(B)):b(B)}}}function bj(e,t,n){const r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}const Ha={name:"codeIndented",tokenize:wj},kj={partial:!0,tokenize:jj};function wj(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),Re(e,o,"linePrefix",5)(u)}function o(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?a(u):n(u)}function a(u){return u===null?c(u):ye(u)?e.attempt(kj,a,c)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||ye(u)?(e.exit("codeFlowValue"),a(u)):(e.consume(u),l)}function c(u){return e.exit("codeIndented"),t(u)}}function jj(e,t,n){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):ye(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):Re(e,o,"linePrefix",5)(a)}function o(a){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):ye(a)?i(a):n(a)}}const _j={name:"codeText",previous:Cj,resolve:Sj,tokenize:Nj};function Sj(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Cj(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Nj(e,t,n){let r=0,i,o;return a;function a(p){return e.enter("codeText"),e.enter("codeTextSequence"),l(p)}function l(p){return p===96?(e.consume(p),r++,l):(e.exit("codeTextSequence"),c(p))}function c(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),c):p===96?(o=e.enter("codeTextSequence"),i=0,d(p)):ye(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),c):(e.enter("codeTextData"),u(p))}function u(p){return p===null||p===32||p===96||ye(p)?(e.exit("codeTextData"),c(p)):(e.consume(p),u)}function d(p){return p===96?(e.consume(p),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(o.type="codeTextData",u(p))}}class Ej{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&hs(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),hs(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),hs(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);hs(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);hs(this.left,n.reverse())}}}function hs(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function wx(e){const t={};let n=-1,r,i,o,a,l,c,u;const d=new Ej(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,o=0,o<c.length&&c[o][1].type==="lineEndingBlank"&&(o+=2),o<c.length&&c[o][1].type==="content"))for(;++o<c.length&&c[o][1].type!=="content";)c[o][1].type==="chunkText"&&(c[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,zj(d,n)),n=t[n],u=!0);else if(r[1]._container){for(o=n,i=void 0;o--;)if(a=d.get(o),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=o);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},l=d.slice(i,n),l.unshift(r),d.splice(i,n-i+1,l))}}return dn(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function zj(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const o=[];let a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const l=a.events,c=[],u={};let d,p,f=-1,m=n,y=0,w=0;const z=[w];for(;m;){for(;e.get(++i)[1]!==m;);o.push(i),m._tokenizer||(d=r.sliceStream(m),m.next||d.push(null),p&&a.defineSkip(m.start),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),p=m,m=m.next}for(m=n;++f<l.length;)l[f][0]==="exit"&&l[f-1][0]==="enter"&&l[f][1].type===l[f-1][1].type&&l[f][1].start.line!==l[f][1].end.line&&(w=f+1,z.push(w),m._tokenizer=void 0,m.previous=void 0,m=m.next);for(a.events=[],m?(m._tokenizer=void 0,m.previous=void 0):z.pop(),f=z.length;f--;){const v=l.slice(z[f],z[f+1]),x=o.pop();c.push([x,x+v.length-1]),e.splice(x,2,v)}for(c.reverse(),f=-1;++f<c.length;)u[y+c[f][0]]=y+c[f][1],y+=c[f][1]-c[f][0]-1;return u}const Tj={resolve:Lj,tokenize:Aj},Pj={partial:!0,tokenize:Rj};function Lj(e){return wx(e),e}function Aj(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?o(l):ye(l)?e.check(Pj,a,o)(l):(e.consume(l),i)}function o(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function a(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function Rj(e,t,n){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),Re(e,o,"linePrefix")}function o(a){if(a===null||ye(a))return n(a);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function jx(e,t,n,r,i,o,a,l,c){const u=c||Number.POSITIVE_INFINITY;let d=0;return p;function p(v){return v===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(v),e.exit(o),f):v===null||v===32||v===41||cc(v)?n(v):(e.enter(r),e.enter(a),e.enter(l),e.enter("chunkString",{contentType:"string"}),w(v))}function f(v){return v===62?(e.enter(o),e.consume(v),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),m(v))}function m(v){return v===62?(e.exit("chunkString"),e.exit(l),f(v)):v===null||v===60||ye(v)?n(v):(e.consume(v),v===92?y:m)}function y(v){return v===60||v===62||v===92?(e.consume(v),m):m(v)}function w(v){return!d&&(v===null||v===41||kt(v))?(e.exit("chunkString"),e.exit(l),e.exit(a),e.exit(r),t(v)):d<u&&v===40?(e.consume(v),d++,w):v===41?(e.consume(v),d--,w):v===null||v===32||v===40||cc(v)?n(v):(e.consume(v),v===92?z:w)}function z(v){return v===40||v===41||v===92?(e.consume(v),w):w(v)}}function _x(e,t,n,r,i,o){const a=this;let l=0,c;return u;function u(m){return e.enter(r),e.enter(i),e.consume(m),e.exit(i),e.enter(o),d}function d(m){return l>999||m===null||m===91||m===93&&!c||m===94&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?n(m):m===93?(e.exit(o),e.enter(i),e.consume(m),e.exit(i),e.exit(r),t):ye(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),p(m))}function p(m){return m===null||m===91||m===93||ye(m)||l++>999?(e.exit("chunkString"),d(m)):(e.consume(m),c||(c=!Ee(m)),m===92?f:p)}function f(m){return m===91||m===92||m===93?(e.consume(m),l++,p):p(m)}}function Sx(e,t,n,r,i,o){let a;return l;function l(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),a=f===40?41:f,c):n(f)}function c(f){return f===a?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(o),u(f))}function u(f){return f===a?(e.exit(o),c(a)):f===null?n(f):ye(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),Re(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===a||f===null||ye(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?p:d)}function p(f){return f===a||f===92?(e.consume(f),d):d(f)}}function Ms(e,t){let n;return r;function r(i){return ye(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):Ee(i)?Re(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const Mj={name:"definition",tokenize:Oj},Ij={partial:!0,tokenize:$j};function Oj(e,t,n){const r=this;let i;return o;function o(m){return e.enter("definition"),a(m)}function a(m){return _x.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(m)}function l(m){return i=Vr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),m===58?(e.enter("definitionMarker"),e.consume(m),e.exit("definitionMarker"),c):n(m)}function c(m){return kt(m)?Ms(e,u)(m):u(m)}function u(m){return jx(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(m)}function d(m){return e.attempt(Ij,p,p)(m)}function p(m){return Ee(m)?Re(e,f,"whitespace")(m):f(m)}function f(m){return m===null||ye(m)?(e.exit("definition"),r.parser.defined.push(i),t(m)):n(m)}}function $j(e,t,n){return r;function r(l){return kt(l)?Ms(e,i)(l):n(l)}function i(l){return Sx(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function o(l){return Ee(l)?Re(e,a,"whitespace")(l):a(l)}function a(l){return l===null||ye(l)?t(l):n(l)}}const Dj={name:"hardBreakEscape",tokenize:Fj};function Fj(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return ye(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const Bj={name:"headingAtx",resolve:Uj,tokenize:Vj};function Uj(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},dn(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function Vj(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),o(d)}function o(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&r++<6?(e.consume(d),a):d===null||kt(d)?(e.exit("atxHeadingSequence"),l(d)):n(d)}function l(d){return d===35?(e.enter("atxHeadingSequence"),c(d)):d===null||ye(d)?(e.exit("atxHeading"),t(d)):Ee(d)?Re(e,l,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function c(d){return d===35?(e.consume(d),c):(e.exit("atxHeadingSequence"),l(d))}function u(d){return d===null||d===35||kt(d)?(e.exit("atxHeadingText"),l(d)):(e.consume(d),u)}}const Wj=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],pf=["pre","script","style","textarea"],Hj={concrete:!0,name:"htmlFlow",resolveTo:Kj,tokenize:Gj},qj={partial:!0,tokenize:Yj},Jj={partial:!0,tokenize:Qj};function Kj(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Gj(e,t,n){const r=this;let i,o,a,l,c;return u;function u(h){return d(h)}function d(h){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(h),p}function p(h){return h===33?(e.consume(h),f):h===47?(e.consume(h),o=!0,w):h===63?(e.consume(h),i=3,r.interrupt?t:j):sn(h)?(e.consume(h),a=String.fromCharCode(h),z):n(h)}function f(h){return h===45?(e.consume(h),i=2,m):h===91?(e.consume(h),i=5,l=0,y):sn(h)?(e.consume(h),i=4,r.interrupt?t:j):n(h)}function m(h){return h===45?(e.consume(h),r.interrupt?t:j):n(h)}function y(h){const F="CDATA[";return h===F.charCodeAt(l++)?(e.consume(h),l===F.length?r.interrupt?t:M:y):n(h)}function w(h){return sn(h)?(e.consume(h),a=String.fromCharCode(h),z):n(h)}function z(h){if(h===null||h===47||h===62||kt(h)){const F=h===47,E=a.toLowerCase();return!F&&!o&&pf.includes(E)?(i=1,r.interrupt?t(h):M(h)):Wj.includes(a.toLowerCase())?(i=6,F?(e.consume(h),v):r.interrupt?t(h):M(h)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(h):o?x(h):g(h))}return h===45||Et(h)?(e.consume(h),a+=String.fromCharCode(h),z):n(h)}function v(h){return h===62?(e.consume(h),r.interrupt?t:M):n(h)}function x(h){return Ee(h)?(e.consume(h),x):S(h)}function g(h){return h===47?(e.consume(h),S):h===58||h===95||sn(h)?(e.consume(h),P):Ee(h)?(e.consume(h),g):S(h)}function P(h){return h===45||h===46||h===58||h===95||Et(h)?(e.consume(h),P):N(h)}function N(h){return h===61?(e.consume(h),_):Ee(h)?(e.consume(h),N):g(h)}function _(h){return h===null||h===60||h===61||h===62||h===96?n(h):h===34||h===39?(e.consume(h),c=h,C):Ee(h)?(e.consume(h),_):b(h)}function C(h){return h===c?(e.consume(h),c=null,L):h===null||ye(h)?n(h):(e.consume(h),C)}function b(h){return h===null||h===34||h===39||h===47||h===60||h===61||h===62||h===96||kt(h)?N(h):(e.consume(h),b)}function L(h){return h===47||h===62||Ee(h)?g(h):n(h)}function S(h){return h===62?(e.consume(h),A):n(h)}function A(h){return h===null||ye(h)?M(h):Ee(h)?(e.consume(h),A):n(h)}function M(h){return h===45&&i===2?(e.consume(h),ne):h===60&&i===1?(e.consume(h),T):h===62&&i===4?(e.consume(h),W):h===63&&i===3?(e.consume(h),j):h===93&&i===5?(e.consume(h),R):ye(h)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(qj,G,q)(h)):h===null||ye(h)?(e.exit("htmlFlowData"),q(h)):(e.consume(h),M)}function q(h){return e.check(Jj,U,G)(h)}function U(h){return e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),B}function B(h){return h===null||ye(h)?q(h):(e.enter("htmlFlowData"),M(h))}function ne(h){return h===45?(e.consume(h),j):M(h)}function T(h){return h===47?(e.consume(h),a="",$):M(h)}function $(h){if(h===62){const F=a.toLowerCase();return pf.includes(F)?(e.consume(h),W):M(h)}return sn(h)&&a.length<8?(e.consume(h),a+=String.fromCharCode(h),$):M(h)}function R(h){return h===93?(e.consume(h),j):M(h)}function j(h){return h===62?(e.consume(h),W):h===45&&i===2?(e.consume(h),j):M(h)}function W(h){return h===null||ye(h)?(e.exit("htmlFlowData"),G(h)):(e.consume(h),W)}function G(h){return e.exit("htmlFlow"),t(h)}}function Qj(e,t,n){const r=this;return i;function i(a){return ye(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o):n(a)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function Yj(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(sa,t,n)}}const Xj={name:"htmlText",tokenize:Zj};function Zj(e,t,n){const r=this;let i,o,a;return l;function l(j){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(j),c}function c(j){return j===33?(e.consume(j),u):j===47?(e.consume(j),N):j===63?(e.consume(j),g):sn(j)?(e.consume(j),b):n(j)}function u(j){return j===45?(e.consume(j),d):j===91?(e.consume(j),o=0,y):sn(j)?(e.consume(j),x):n(j)}function d(j){return j===45?(e.consume(j),m):n(j)}function p(j){return j===null?n(j):j===45?(e.consume(j),f):ye(j)?(a=p,T(j)):(e.consume(j),p)}function f(j){return j===45?(e.consume(j),m):p(j)}function m(j){return j===62?ne(j):j===45?f(j):p(j)}function y(j){const W="CDATA[";return j===W.charCodeAt(o++)?(e.consume(j),o===W.length?w:y):n(j)}function w(j){return j===null?n(j):j===93?(e.consume(j),z):ye(j)?(a=w,T(j)):(e.consume(j),w)}function z(j){return j===93?(e.consume(j),v):w(j)}function v(j){return j===62?ne(j):j===93?(e.consume(j),v):w(j)}function x(j){return j===null||j===62?ne(j):ye(j)?(a=x,T(j)):(e.consume(j),x)}function g(j){return j===null?n(j):j===63?(e.consume(j),P):ye(j)?(a=g,T(j)):(e.consume(j),g)}function P(j){return j===62?ne(j):g(j)}function N(j){return sn(j)?(e.consume(j),_):n(j)}function _(j){return j===45||Et(j)?(e.consume(j),_):C(j)}function C(j){return ye(j)?(a=C,T(j)):Ee(j)?(e.consume(j),C):ne(j)}function b(j){return j===45||Et(j)?(e.consume(j),b):j===47||j===62||kt(j)?L(j):n(j)}function L(j){return j===47?(e.consume(j),ne):j===58||j===95||sn(j)?(e.consume(j),S):ye(j)?(a=L,T(j)):Ee(j)?(e.consume(j),L):ne(j)}function S(j){return j===45||j===46||j===58||j===95||Et(j)?(e.consume(j),S):A(j)}function A(j){return j===61?(e.consume(j),M):ye(j)?(a=A,T(j)):Ee(j)?(e.consume(j),A):L(j)}function M(j){return j===null||j===60||j===61||j===62||j===96?n(j):j===34||j===39?(e.consume(j),i=j,q):ye(j)?(a=M,T(j)):Ee(j)?(e.consume(j),M):(e.consume(j),U)}function q(j){return j===i?(e.consume(j),i=void 0,B):j===null?n(j):ye(j)?(a=q,T(j)):(e.consume(j),q)}function U(j){return j===null||j===34||j===39||j===60||j===61||j===96?n(j):j===47||j===62||kt(j)?L(j):(e.consume(j),U)}function B(j){return j===47||j===62||kt(j)?L(j):n(j)}function ne(j){return j===62?(e.consume(j),e.exit("htmlTextData"),e.exit("htmlText"),t):n(j)}function T(j){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(j),e.exit("lineEnding"),$}function $(j){return Ee(j)?Re(e,R,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(j):R(j)}function R(j){return e.enter("htmlTextData"),a(j)}}const Lu={name:"labelEnd",resolveAll:r_,resolveTo:s_,tokenize:i_},e_={tokenize:o_},t_={tokenize:a_},n_={tokenize:l_};function r_(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&dn(e,0,e.length,n),e}function s_(e,t){let n=e.length,r=0,i,o,a,l;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(a){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=n);const c={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[o][1].start},end:{...e[a][1].end}},d={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[a-2][1].start}};return l=[["enter",c,t],["enter",u,t]],l=$t(l,e.slice(o+1,o+r+3)),l=$t(l,[["enter",d,t]]),l=$t(l,Pu(t.parser.constructs.insideSpan.null,e.slice(o+r+4,a-3),t)),l=$t(l,[["exit",d,t],e[a-2],e[a-1],["exit",u,t]]),l=$t(l,e.slice(a+1)),l=$t(l,[["exit",c,t]]),dn(e,o,e.length,l),e}function i_(e,t,n){const r=this;let i=r.events.length,o,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return l;function l(f){return o?o._inactive?p(f):(a=r.parser.defined.includes(Vr(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),c):n(f)}function c(f){return f===40?e.attempt(e_,d,a?d:p)(f):f===91?e.attempt(t_,d,a?u:p)(f):a?d(f):p(f)}function u(f){return e.attempt(n_,d,p)(f)}function d(f){return t(f)}function p(f){return o._balanced=!0,n(f)}}function o_(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),i}function i(p){return kt(p)?Ms(e,o)(p):o(p)}function o(p){return p===41?d(p):jx(e,a,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function a(p){return kt(p)?Ms(e,c)(p):d(p)}function l(p){return n(p)}function c(p){return p===34||p===39||p===40?Sx(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function u(p){return kt(p)?Ms(e,d)(p):d(p)}function d(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function a_(e,t,n){const r=this;return i;function i(l){return _x.call(r,e,o,a,"reference","referenceMarker","referenceString")(l)}function o(l){return r.parser.defined.includes(Vr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function a(l){return n(l)}}function l_(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const c_={name:"labelStartImage",resolveAll:Lu.resolveAll,tokenize:u_};function u_(e,t,n){const r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),o}function o(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),a):n(l)}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const d_={name:"labelStartLink",resolveAll:Lu.resolveAll,tokenize:p_};function p_(e,t,n){const r=this;return i;function i(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),o}function o(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const qa={name:"lineEnding",tokenize:f_};function f_(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Re(e,t,"linePrefix")}}const Zi={name:"thematicBreak",tokenize:m_};function m_(e,t,n){let r=0,i;return o;function o(u){return e.enter("thematicBreak"),a(u)}function a(u){return i=u,l(u)}function l(u){return u===i?(e.enter("thematicBreakSequence"),c(u)):r>=3&&(u===null||ye(u))?(e.exit("thematicBreak"),t(u)):n(u)}function c(u){return u===i?(e.consume(u),r++,c):(e.exit("thematicBreakSequence"),Ee(u)?Re(e,l,"whitespace")(u):l(u))}}const ht={continuation:{tokenize:y_},exit:b_,name:"list",tokenize:x_},h_={partial:!0,tokenize:k_},g_={partial:!0,tokenize:v_};function x_(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return l;function l(m){const y=r.containerState.type||(m===42||m===43||m===45?"listUnordered":"listOrdered");if(y==="listUnordered"?!r.containerState.marker||m===r.containerState.marker:uc(m)){if(r.containerState.type||(r.containerState.type=y,e.enter(y,{_container:!0})),y==="listUnordered")return e.enter("listItemPrefix"),m===42||m===45?e.check(Zi,n,u)(m):u(m);if(!r.interrupt||m===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(m)}return n(m)}function c(m){return uc(m)&&++a<10?(e.consume(m),c):(!r.interrupt||a<2)&&(r.containerState.marker?m===r.containerState.marker:m===41||m===46)?(e.exit("listItemValue"),u(m)):n(m)}function u(m){return e.enter("listItemMarker"),e.consume(m),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||m,e.check(sa,r.interrupt?n:d,e.attempt(h_,f,p))}function d(m){return r.containerState.initialBlankLine=!0,o++,f(m)}function p(m){return Ee(m)?(e.enter("listItemPrefixWhitespace"),e.consume(m),e.exit("listItemPrefixWhitespace"),f):n(m)}function f(m){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(m)}}function y_(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(sa,i,o);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Re(e,t,"listItemIndent",r.containerState.size+1)(l)}function o(l){return r.containerState.furtherBlankLines||!Ee(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(g_,t,a)(l))}function a(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,Re(e,e.attempt(ht,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function v_(e,t,n){const r=this;return Re(e,i,"listItemIndent",r.containerState.size+1);function i(o){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(o):n(o)}}function b_(e){e.exit(this.containerState.type)}function k_(e,t,n){const r=this;return Re(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const a=r.events[r.events.length-1];return!Ee(o)&&a&&a[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const ff={name:"setextUnderline",resolveTo:w_,tokenize:j_};function w_(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",a,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=a,e.push(["exit",a,t]),e}function j_(e,t,n){const r=this;let i;return o;function o(u){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),i=u,a(u)):n(u)}function a(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===i?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),Ee(u)?Re(e,c,"lineSuffix")(u):c(u))}function c(u){return u===null||ye(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const __={tokenize:S_};function S_(e){const t=this,n=e.attempt(sa,r,e.attempt(this.parser.constructs.flowInitial,i,Re(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Tj,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const C_={resolveAll:Nx()},N_=Cx("string"),E_=Cx("text");function Cx(e){return{resolveAll:Nx(e==="text"?z_:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,a,l);return a;function a(d){return u(d)?o(d):l(d)}function l(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),c}function c(d){return u(d)?(n.exit("data"),o(d)):(n.consume(d),c)}function u(d){if(d===null)return!0;const p=i[d];let f=-1;if(p)for(;++f<p.length;){const m=p[f];if(!m.previous||m.previous.call(r,r.previous))return!0}return!1}}}function Nx(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function z_(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,a=-1,l=0,c;for(;o--;){const u=i[o];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)l++,a--;if(a)break;a=-1}else if(u===-2)c=!0,l++;else if(u!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){const u={type:n===e.length||c||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?a:r.start._bufferIndex+a,_index:r.start._index+o,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const T_={42:ht,43:ht,45:ht,48:ht,49:ht,50:ht,51:ht,52:ht,53:ht,54:ht,55:ht,56:ht,57:ht,62:vx},P_={91:Mj},L_={[-2]:Ha,[-1]:Ha,32:Ha},A_={35:Bj,42:Zi,45:[ff,Zi],60:Hj,61:ff,95:Zi,96:df,126:df},R_={38:kx,92:bx},M_={[-5]:qa,[-4]:qa,[-3]:qa,33:c_,38:kx,42:dc,60:[dj,Xj],91:d_,92:[Dj,bx],93:Lu,95:dc,96:_j},I_={null:[dc,C_]},O_={null:[42,95]},$_={null:[]},D_=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:O_,contentInitial:P_,disable:$_,document:T_,flow:A_,flowInitial:L_,insideSpan:I_,string:R_,text:M_},Symbol.toStringTag,{value:"Module"}));function F_(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},o=[];let a=[],l=[];const c={attempt:C(N),check:C(_),consume:x,enter:g,exit:P,interrupt:C(_,{interrupt:!0})},u={code:null,containerState:{},defineSkip:w,events:[],now:y,parser:e,previous:null,sliceSerialize:f,sliceStream:m,write:p};let d=t.tokenize.call(u,c);return t.resolveAll&&o.push(t),u;function p(A){return a=$t(a,A),z(),a[a.length-1]!==null?[]:(b(t,0),u.events=Pu(o,u.events,u),u.events)}function f(A,M){return U_(m(A),M)}function m(A){return B_(a,A)}function y(){const{_bufferIndex:A,_index:M,line:q,column:U,offset:B}=r;return{_bufferIndex:A,_index:M,line:q,column:U,offset:B}}function w(A){i[A.line]=A.column,S()}function z(){let A;for(;r._index<a.length;){const M=a[r._index];if(typeof M=="string")for(A=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===A&&r._bufferIndex<M.length;)v(M.charCodeAt(r._bufferIndex));else v(M)}}function v(A){d=d(A)}function x(A){ye(A)?(r.line++,r.column=1,r.offset+=A===-3?2:1,S()):A!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=A}function g(A,M){const q=M||{};return q.type=A,q.start=y(),u.events.push(["enter",q,u]),l.push(q),q}function P(A){const M=l.pop();return M.end=y(),u.events.push(["exit",M,u]),M}function N(A,M){b(A,M.from)}function _(A,M){M.restore()}function C(A,M){return q;function q(U,B,ne){let T,$,R,j;return Array.isArray(U)?G(U):"tokenize"in U?G([U]):W(U);function W(Q){return V;function V(ie){const he=ie!==null&&Q[ie],I=ie!==null&&Q.null,K=[...Array.isArray(he)?he:he?[he]:[],...Array.isArray(I)?I:I?[I]:[]];return G(K)(ie)}}function G(Q){return T=Q,$=0,Q.length===0?ne:h(Q[$])}function h(Q){return V;function V(ie){return j=L(),R=Q,Q.partial||(u.currentConstruct=Q),Q.name&&u.parser.constructs.disable.null.includes(Q.name)?E():Q.tokenize.call(M?Object.assign(Object.create(u),M):u,c,F,E)(ie)}}function F(Q){return A(R,j),B}function E(Q){return j.restore(),++$<T.length?h(T[$]):ne}}}function b(A,M){A.resolveAll&&!o.includes(A)&&o.push(A),A.resolve&&dn(u.events,M,u.events.length-M,A.resolve(u.events.slice(M),u)),A.resolveTo&&(u.events=A.resolveTo(u.events,u))}function L(){const A=y(),M=u.previous,q=u.currentConstruct,U=u.events.length,B=Array.from(l);return{from:U,restore:ne};function ne(){r=A,u.previous=M,u.currentConstruct=q,u.events.length=U,l=B,S()}}function S(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function B_(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let a;if(n===i)a=[e[n].slice(r,o)];else{if(a=e.slice(n,i),r>-1){const l=a[0];typeof l=="string"?a[0]=l.slice(r):a.shift()}o>0&&a.push(e[i].slice(0,o))}return a}function U_(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let a;if(typeof o=="string")a=o;else switch(o){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(o)}i=o===-2,r.push(a)}return r.join("")}function V_(e){const r={constructs:Qw([D_,...(e||{}).extensions||[]]),content:i(sj),defined:[],document:i(oj),flow:i(__),lazy:{},string:i(N_),text:i(E_)};return r;function i(o){return a;function a(l){return F_(r,o,l)}}}function W_(e){for(;!wx(e););return e}const mf=/[\0\t\n\r]/g;function H_(){let e=1,t="",n=!0,r;return i;function i(o,a,l){const c=[];let u,d,p,f,m;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(a||void 0).decode(o)),p=0,t="",n&&(o.charCodeAt(0)===65279&&p++,n=void 0);p<o.length;){if(mf.lastIndex=p,u=mf.exec(o),f=u&&u.index!==void 0?u.index:o.length,m=o.charCodeAt(f),!u){t=o.slice(p);break}if(m===10&&p===f&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),p<f&&(c.push(o.slice(p,f)),e+=f-p),m){case 0:{c.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,c.push(-2);e++<d;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}p=f+1}return l&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const q_=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function J_(e){return e.replace(q_,K_)}function K_(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return yx(n.slice(o?2:1),o?16:10)}return Tu(n)||e}const Ex={}.hasOwnProperty;function G_(e,t,n){return typeof t!="string"&&(n=t,t=void 0),Q_(n)(W_(V_(n).document().write(H_()(e,t,!0))))}function Q_(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(we),autolinkProtocol:L,autolinkEmail:L,atxHeading:o(J),blockQuote:o(I),characterEscape:L,characterReference:L,codeFenced:o(K),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:o(K,a),codeText:o(X,a),codeTextData:L,data:L,codeFlowValue:L,definition:o(Y),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:o(le),hardBreakEscape:o(ee),hardBreakTrailing:o(ee),htmlFlow:o(oe,a),htmlFlowData:L,htmlText:o(oe,a),htmlTextData:L,image:o(xe),label:a,link:o(we),listItem:o(be),listItemValue:f,listOrdered:o(ze,p),listUnordered:o(ze),paragraph:o(D),reference:h,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:o(J),strong:o(se),thematicBreak:o(de)},exit:{atxHeading:c(),atxHeadingSequence:N,autolink:c(),autolinkEmail:he,autolinkProtocol:ie,blockQuote:c(),characterEscapeValue:S,characterReferenceMarkerHexadecimal:E,characterReferenceMarkerNumeric:E,characterReferenceValue:Q,characterReference:V,codeFenced:c(z),codeFencedFence:w,codeFencedFenceInfo:m,codeFencedFenceMeta:y,codeFlowValue:S,codeIndented:c(v),codeText:c(B),codeTextData:S,data:S,definition:c(),definitionDestinationString:P,definitionLabelString:x,definitionTitleString:g,emphasis:c(),hardBreakEscape:c(M),hardBreakTrailing:c(M),htmlFlow:c(q),htmlFlowData:S,htmlText:c(U),htmlTextData:S,image:c(T),label:R,labelText:$,lineEnding:A,link:c(ne),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:F,resourceDestinationString:j,resourceTitleString:W,resource:G,setextHeading:c(b),setextHeadingLineSequence:C,setextHeadingText:_,strong:c(),thematicBreak:c()}};zx(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(H){let Z={type:"root",children:[]};const ge={stack:[Z],tokenStack:[],config:t,enter:l,exit:u,buffer:a,resume:d,data:n},ae=[];let Se=-1;for(;++Se<H.length;)if(H[Se][1].type==="listOrdered"||H[Se][1].type==="listUnordered")if(H[Se][0]==="enter")ae.push(Se);else{const tt=ae.pop();Se=i(H,tt,Se)}for(Se=-1;++Se<H.length;){const tt=t[H[Se][0]];Ex.call(tt,H[Se][1].type)&&tt[H[Se][1].type].call(Object.assign({sliceSerialize:H[Se][2].sliceSerialize},ge),H[Se][1])}if(ge.tokenStack.length>0){const tt=ge.tokenStack[ge.tokenStack.length-1];(tt[1]||hf).call(ge,void 0,tt[0])}for(Z.position={start:Cn(H.length>0?H[0][1].start:{line:1,column:1,offset:0}),end:Cn(H.length>0?H[H.length-2][1].end:{line:1,column:1,offset:0})},Se=-1;++Se<t.transforms.length;)Z=t.transforms[Se](Z)||Z;return Z}function i(H,Z,ge){let ae=Z-1,Se=-1,tt=!1,pn,Wt,Xn,Zn;for(;++ae<=ge;){const Xe=H[ae];switch(Xe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Xe[0]==="enter"?Se++:Se--,Zn=void 0;break}case"lineEndingBlank":{Xe[0]==="enter"&&(pn&&!Zn&&!Se&&!Xn&&(Xn=ae),Zn=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Zn=void 0}if(!Se&&Xe[0]==="enter"&&Xe[1].type==="listItemPrefix"||Se===-1&&Xe[0]==="exit"&&(Xe[1].type==="listUnordered"||Xe[1].type==="listOrdered")){if(pn){let _n=ae;for(Wt=void 0;_n--;){const Ht=H[_n];if(Ht[1].type==="lineEnding"||Ht[1].type==="lineEndingBlank"){if(Ht[0]==="exit")continue;Wt&&(H[Wt][1].type="lineEndingBlank",tt=!0),Ht[1].type="lineEnding",Wt=_n}else if(!(Ht[1].type==="linePrefix"||Ht[1].type==="blockQuotePrefix"||Ht[1].type==="blockQuotePrefixWhitespace"||Ht[1].type==="blockQuoteMarker"||Ht[1].type==="listItemIndent"))break}Xn&&(!Wt||Xn<Wt)&&(pn._spread=!0),pn.end=Object.assign({},Wt?H[Wt][1].start:Xe[1].end),H.splice(Wt||ae,0,["exit",pn,Xe[2]]),ae++,ge++}if(Xe[1].type==="listItemPrefix"){const _n={type:"listItem",_spread:!1,start:Object.assign({},Xe[1].start),end:void 0};pn=_n,H.splice(ae,0,["enter",_n,Xe[2]]),ae++,ge++,Xn=void 0,Zn=!0}}}return H[Z][1]._spread=tt,ge}function o(H,Z){return ge;function ge(ae){l.call(this,H(ae),ae),Z&&Z.call(this,ae)}}function a(){this.stack.push({type:"fragment",children:[]})}function l(H,Z,ge){this.stack[this.stack.length-1].children.push(H),this.stack.push(H),this.tokenStack.push([Z,ge||void 0]),H.position={start:Cn(Z.start),end:void 0}}function c(H){return Z;function Z(ge){H&&H.call(this,ge),u.call(this,ge)}}function u(H,Z){const ge=this.stack.pop(),ae=this.tokenStack.pop();if(ae)ae[0].type!==H.type&&(Z?Z.call(this,H,ae[0]):(ae[1]||hf).call(this,H,ae[0]));else throw new Error("Cannot close `"+H.type+"` ("+Rs({start:H.start,end:H.end})+"): it’s not open");ge.position.end=Cn(H.end)}function d(){return Kw(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function f(H){if(this.data.expectingFirstListItemValue){const Z=this.stack[this.stack.length-2];Z.start=Number.parseInt(this.sliceSerialize(H),10),this.data.expectingFirstListItemValue=void 0}}function m(){const H=this.resume(),Z=this.stack[this.stack.length-1];Z.lang=H}function y(){const H=this.resume(),Z=this.stack[this.stack.length-1];Z.meta=H}function w(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function z(){const H=this.resume(),Z=this.stack[this.stack.length-1];Z.value=H.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function v(){const H=this.resume(),Z=this.stack[this.stack.length-1];Z.value=H.replace(/(\r?\n|\r)$/g,"")}function x(H){const Z=this.resume(),ge=this.stack[this.stack.length-1];ge.label=Z,ge.identifier=Vr(this.sliceSerialize(H)).toLowerCase()}function g(){const H=this.resume(),Z=this.stack[this.stack.length-1];Z.title=H}function P(){const H=this.resume(),Z=this.stack[this.stack.length-1];Z.url=H}function N(H){const Z=this.stack[this.stack.length-1];if(!Z.depth){const ge=this.sliceSerialize(H).length;Z.depth=ge}}function _(){this.data.setextHeadingSlurpLineEnding=!0}function C(H){const Z=this.stack[this.stack.length-1];Z.depth=this.sliceSerialize(H).codePointAt(0)===61?1:2}function b(){this.data.setextHeadingSlurpLineEnding=void 0}function L(H){const ge=this.stack[this.stack.length-1].children;let ae=ge[ge.length-1];(!ae||ae.type!=="text")&&(ae=me(),ae.position={start:Cn(H.start),end:void 0},ge.push(ae)),this.stack.push(ae)}function S(H){const Z=this.stack.pop();Z.value+=this.sliceSerialize(H),Z.position.end=Cn(H.end)}function A(H){const Z=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ge=Z.children[Z.children.length-1];ge.position.end=Cn(H.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(Z.type)&&(L.call(this,H),S.call(this,H))}function M(){this.data.atHardBreak=!0}function q(){const H=this.resume(),Z=this.stack[this.stack.length-1];Z.value=H}function U(){const H=this.resume(),Z=this.stack[this.stack.length-1];Z.value=H}function B(){const H=this.resume(),Z=this.stack[this.stack.length-1];Z.value=H}function ne(){const H=this.stack[this.stack.length-1];if(this.data.inReference){const Z=this.data.referenceType||"shortcut";H.type+="Reference",H.referenceType=Z,delete H.url,delete H.title}else delete H.identifier,delete H.label;this.data.referenceType=void 0}function T(){const H=this.stack[this.stack.length-1];if(this.data.inReference){const Z=this.data.referenceType||"shortcut";H.type+="Reference",H.referenceType=Z,delete H.url,delete H.title}else delete H.identifier,delete H.label;this.data.referenceType=void 0}function $(H){const Z=this.sliceSerialize(H),ge=this.stack[this.stack.length-2];ge.label=J_(Z),ge.identifier=Vr(Z).toLowerCase()}function R(){const H=this.stack[this.stack.length-1],Z=this.resume(),ge=this.stack[this.stack.length-1];if(this.data.inReference=!0,ge.type==="link"){const ae=H.children;ge.children=ae}else ge.alt=Z}function j(){const H=this.resume(),Z=this.stack[this.stack.length-1];Z.url=H}function W(){const H=this.resume(),Z=this.stack[this.stack.length-1];Z.title=H}function G(){this.data.inReference=void 0}function h(){this.data.referenceType="collapsed"}function F(H){const Z=this.resume(),ge=this.stack[this.stack.length-1];ge.label=Z,ge.identifier=Vr(this.sliceSerialize(H)).toLowerCase(),this.data.referenceType="full"}function E(H){this.data.characterReferenceType=H.type}function Q(H){const Z=this.sliceSerialize(H),ge=this.data.characterReferenceType;let ae;ge?(ae=yx(Z,ge==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):ae=Tu(Z);const Se=this.stack[this.stack.length-1];Se.value+=ae}function V(H){const Z=this.stack.pop();Z.position.end=Cn(H.end)}function ie(H){S.call(this,H);const Z=this.stack[this.stack.length-1];Z.url=this.sliceSerialize(H)}function he(H){S.call(this,H);const Z=this.stack[this.stack.length-1];Z.url="mailto:"+this.sliceSerialize(H)}function I(){return{type:"blockquote",children:[]}}function K(){return{type:"code",lang:null,meta:null,value:""}}function X(){return{type:"inlineCode",value:""}}function Y(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function le(){return{type:"emphasis",children:[]}}function J(){return{type:"heading",depth:0,children:[]}}function ee(){return{type:"break"}}function oe(){return{type:"html",value:""}}function xe(){return{type:"image",title:null,url:"",alt:null}}function we(){return{type:"link",title:null,url:"",children:[]}}function ze(H){return{type:"list",ordered:H.type==="listOrdered",start:null,spread:H._spread,children:[]}}function be(H){return{type:"listItem",spread:H._spread,checked:null,children:[]}}function D(){return{type:"paragraph",children:[]}}function se(){return{type:"strong",children:[]}}function me(){return{type:"text",value:""}}function de(){return{type:"thematicBreak"}}}function Cn(e){return{line:e.line,column:e.column,offset:e.offset}}function zx(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?zx(e,r):Y_(e,r)}}function Y_(e,t){let n;for(n in t)if(Ex.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function hf(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Rs({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Rs({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Rs({start:t.start,end:t.end})+") is still open")}function X_(e){const t=this;t.parser=n;function n(r){return G_(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function Z_(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function e2(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function t2(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function n2(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function r2(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function s2(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=ss(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let a,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=o+1,l+=1,e.footnoteCounts.set(r,l);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,c);const u={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,u),e.applyData(t,u)}function i2(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function o2(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Tx(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function a2(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Tx(e,t);const i={src:ss(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function l2(e,t){const n={src:ss(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function c2(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function u2(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Tx(e,t);const i={href:ss(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function d2(e,t){const n={href:ss(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function p2(e,t,n){const r=e.all(t),i=n?f2(n):Px(t),o={},a=[];if(typeof t.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const d=r[l];(i||l!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?a.push(...d.children):a.push(d)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:a};return e.patch(t,u),e.applyData(t,u)}function f2(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Px(n[r])}return t}function Px(e){const t=e.spread;return t??e.children.length>1}function m2(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function h2(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function g2(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function x2(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function y2(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),i.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},l=Cu(t.children[1]),c=dx(t.children[t.children.length-1]);l&&c&&(a.position={start:l,end:c}),i.push(a)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function v2(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,l=a?a.length:t.children.length;let c=-1;const u=[];for(;++c<l;){const p=t.children[c],f={},m=a?a[c]:void 0;m&&(f.align=m);let y={type:"element",tagName:o,properties:f,children:[]};p&&(y.children=e.all(p),e.patch(p,y),y=e.applyData(p,y)),u.push(y)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function b2(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const gf=9,xf=32;function k2(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(yf(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(yf(t.slice(i),i>0,!1)),o.join("")}function yf(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===gf||o===xf;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===gf||o===xf;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function w2(e,t){const n={type:"text",value:k2(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function j2(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const _2={blockquote:Z_,break:e2,code:t2,delete:n2,emphasis:r2,footnoteReference:s2,heading:i2,html:o2,imageReference:a2,image:l2,inlineCode:c2,linkReference:u2,link:d2,listItem:p2,list:m2,paragraph:h2,root:g2,strong:x2,table:y2,tableCell:b2,tableRow:v2,text:w2,thematicBreak:j2,toml:Oi,yaml:Oi,definition:Oi,footnoteDefinition:Oi};function Oi(){}const Lx=-1,ia=0,Is=1,Lo=2,Au=3,Ru=4,Mu=5,Iu=6,Ax=7,Rx=8,vf=typeof self=="object"?self:globalThis,S2=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,a]=t[i];switch(o){case ia:case Lx:return n(a,i);case Is:{const l=n([],i);for(const c of a)l.push(r(c));return l}case Lo:{const l=n({},i);for(const[c,u]of a)l[r(c)]=r(u);return l}case Au:return n(new Date(a),i);case Ru:{const{source:l,flags:c}=a;return n(new RegExp(l,c),i)}case Mu:{const l=n(new Map,i);for(const[c,u]of a)l.set(r(c),r(u));return l}case Iu:{const l=n(new Set,i);for(const c of a)l.add(r(c));return l}case Ax:{const{name:l,message:c}=a;return n(new vf[l](c),i)}case Rx:return n(BigInt(a),i);case"BigInt":return n(Object(BigInt(a)),i);case"ArrayBuffer":return n(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:l}=new Uint8Array(a);return n(new DataView(l),a)}}return n(new vf[o](a),i)};return r},bf=e=>S2(new Map,e)(0),kr="",{toString:C2}={},{keys:N2}=Object,gs=e=>{const t=typeof e;if(t!=="object"||!e)return[ia,t];const n=C2.call(e).slice(8,-1);switch(n){case"Array":return[Is,kr];case"Object":return[Lo,kr];case"Date":return[Au,kr];case"RegExp":return[Ru,kr];case"Map":return[Mu,kr];case"Set":return[Iu,kr];case"DataView":return[Is,n]}return n.includes("Array")?[Is,n]:n.includes("Error")?[Ax,n]:[Lo,n]},$i=([e,t])=>e===ia&&(t==="function"||t==="symbol"),E2=(e,t,n,r)=>{const i=(a,l)=>{const c=r.push(a)-1;return n.set(l,c),c},o=a=>{if(n.has(a))return n.get(a);let[l,c]=gs(a);switch(l){case ia:{let d=a;switch(c){case"bigint":l=Rx,d=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);d=null;break;case"undefined":return i([Lx],a)}return i([l,d],a)}case Is:{if(c){let f=a;return c==="DataView"?f=new Uint8Array(a.buffer):c==="ArrayBuffer"&&(f=new Uint8Array(a)),i([c,[...f]],a)}const d=[],p=i([l,d],a);for(const f of a)d.push(o(f));return p}case Lo:{if(c)switch(c){case"BigInt":return i([c,a.toString()],a);case"Boolean":case"Number":case"String":return i([c,a.valueOf()],a)}if(t&&"toJSON"in a)return o(a.toJSON());const d=[],p=i([l,d],a);for(const f of N2(a))(e||!$i(gs(a[f])))&&d.push([o(f),o(a[f])]);return p}case Au:return i([l,a.toISOString()],a);case Ru:{const{source:d,flags:p}=a;return i([l,{source:d,flags:p}],a)}case Mu:{const d=[],p=i([l,d],a);for(const[f,m]of a)(e||!($i(gs(f))||$i(gs(m))))&&d.push([o(f),o(m)]);return p}case Iu:{const d=[],p=i([l,d],a);for(const f of a)(e||!$i(gs(f)))&&d.push(o(f));return p}}const{message:u}=a;return i([l,{name:c,message:u}],a)};return o},kf=(e,{json:t,lossy:n}={})=>{const r=[];return E2(!(t||n),!!t,new Map,r)(e),r},Ao=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?bf(kf(e,t)):structuredClone(e):(e,t)=>bf(kf(e,t));function z2(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function T2(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function P2(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||z2,r=e.options.footnoteBackLabel||T2,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let c=-1;for(;++c<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[c]);if(!u)continue;const d=e.all(u),p=String(u.identifier).toUpperCase(),f=ss(p.toLowerCase());let m=0;const y=[],w=e.footnoteCounts.get(p);for(;w!==void 0&&++m<=w;){y.length>0&&y.push({type:"text",value:" "});let x=typeof n=="string"?n:n(c,m);typeof x=="string"&&(x={type:"text",value:x}),y.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(m>1?"-"+m:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,m),className:["data-footnote-backref"]},children:Array.isArray(x)?x:[x]})}const z=d[d.length-1];if(z&&z.type==="element"&&z.tagName==="p"){const x=z.children[z.children.length-1];x&&x.type==="text"?x.value+=" ":z.children.push({type:"text",value:" "}),z.children.push(...y)}else d.push(...y);const v={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(u,v),l.push(v)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...Ao(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const Mx=function(e){if(e==null)return M2;if(typeof e=="function")return oa(e);if(typeof e=="object")return Array.isArray(e)?L2(e):A2(e);if(typeof e=="string")return R2(e);throw new Error("Expected function, string, or object as test")};function L2(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Mx(e[n]);return oa(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function A2(e){const t=e;return oa(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function R2(e){return oa(t);function t(n){return n&&n.type===e}}function oa(e){return t;function t(n,r,i){return!!(I2(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function M2(){return!0}function I2(e){return e!==null&&typeof e=="object"&&"type"in e}const Ix=[],O2=!0,wf=!1,$2="skip";function D2(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=Mx(i),a=r?-1:1;l(e,void 0,[])();function l(c,u,d){const p=c&&typeof c=="object"?c:{};if(typeof p.type=="string"){const m=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(c.type+(m?"<"+m+">":""))+")"})}return f;function f(){let m=Ix,y,w,z;if((!t||o(c,u,d[d.length-1]||void 0))&&(m=F2(n(c,d)),m[0]===wf))return m;if("children"in c&&c.children){const v=c;if(v.children&&m[0]!==$2)for(w=(r?v.children.length:-1)+a,z=d.concat(v);w>-1&&w<v.children.length;){const x=v.children[w];if(y=l(x,w,z)(),y[0]===wf)return y;w=typeof y[1]=="number"?y[1]:w+a}}return m}}}function F2(e){return Array.isArray(e)?e:typeof e=="number"?[O2,e]:e==null?Ix:[e]}function Ox(e,t,n,r){let i,o,a;typeof t=="function"&&typeof n!="function"?(o=void 0,a=t,i=n):(o=t,a=n,i=r),D2(e,o,l,i);function l(c,u){const d=u[u.length-1],p=d?d.children.indexOf(c):void 0;return a(c,p,d)}}const pc={}.hasOwnProperty,B2={};function U2(e,t){const n=t||B2,r=new Map,i=new Map,o=new Map,a={..._2,...n.handlers},l={all:u,applyData:W2,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:a,one:c,options:n,patch:V2,wrap:q2};return Ox(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:i,f=String(d.identifier).toUpperCase();p.has(f)||p.set(f,d)}}),l;function c(d,p){const f=d.type,m=l.handlers[f];if(pc.call(l.handlers,f)&&m)return m(l,d,p);if(l.options.passThrough&&l.options.passThrough.includes(f)){if("children"in d){const{children:w,...z}=d,v=Ao(z);return v.children=l.all(d),v}return Ao(d)}return(l.options.unknownHandler||H2)(l,d,p)}function u(d){const p=[];if("children"in d){const f=d.children;let m=-1;for(;++m<f.length;){const y=l.one(f[m],d);if(y){if(m&&f[m-1].type==="break"&&(!Array.isArray(y)&&y.type==="text"&&(y.value=jf(y.value)),!Array.isArray(y)&&y.type==="element")){const w=y.children[0];w&&w.type==="text"&&(w.value=jf(w.value))}Array.isArray(y)?p.push(...y):p.push(y)}}}return p}}function V2(e,t){e.position&&(t.position=Cw(e))}function W2(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&o&&Object.assign(n.properties,Ao(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function H2(e,t){const n=t.data||{},r="value"in t&&!(pc.call(n,"hProperties")||pc.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function q2(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function jf(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function _f(e,t){const n=U2(e,t),r=n.one(e,void 0),i=P2(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function J2(e,t){return e&&"run"in e?async function(n,r){const i=_f(n,{file:r,...t});await e.run(i,r)}:function(n,r){return _f(n,{file:r,...e||t})}}function Sf(e){if(e)throw e}var eo=Object.prototype.hasOwnProperty,$x=Object.prototype.toString,Cf=Object.defineProperty,Nf=Object.getOwnPropertyDescriptor,Ef=function(t){return typeof Array.isArray=="function"?Array.isArray(t):$x.call(t)==="[object Array]"},zf=function(t){if(!t||$x.call(t)!=="[object Object]")return!1;var n=eo.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&eo.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||eo.call(t,i)},Tf=function(t,n){Cf&&n.name==="__proto__"?Cf(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Pf=function(t,n){if(n==="__proto__")if(eo.call(t,n)){if(Nf)return Nf(t,n).value}else return;return t[n]},K2=function e(){var t,n,r,i,o,a,l=arguments[0],c=1,u=arguments.length,d=!1;for(typeof l=="boolean"&&(d=l,l=arguments[1]||{},c=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});c<u;++c)if(t=arguments[c],t!=null)for(n in t)r=Pf(l,n),i=Pf(t,n),l!==i&&(d&&i&&(zf(i)||(o=Ef(i)))?(o?(o=!1,a=r&&Ef(r)?r:[]):a=r&&zf(r)?r:{},Tf(l,{name:n,newValue:e(d,a,i)})):typeof i<"u"&&Tf(l,{name:n,newValue:i}));return l};const Ja=Mo(K2);function fc(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function G2(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);l(null,...i);function l(c,...u){const d=e[++o];let p=-1;if(c){a(c);return}for(;++p<i.length;)(u[p]===null||u[p]===void 0)&&(u[p]=i[p]);i=u,d?Q2(d,l)(...u):a(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function Q2(e,t){let n;return r;function r(...a){const l=e.length>a.length;let c;l&&a.push(i);try{c=e.apply(this,a)}catch(u){const d=u;if(l&&n)throw d;return i(d)}l||(c&&c.then&&typeof c.then=="function"?c.then(o,i):c instanceof Error?i(c):o(c))}function i(a,...l){n||(n=!0,t(a,...l))}function o(a){i(null,a)}}const nn={basename:Y2,dirname:X2,extname:Z2,join:eS,sep:"/"};function Y2(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');xi(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let a=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else a<0&&(o=!0,a=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(r=i):(l=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function X2(e){if(xi(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function Z2(e){xi(e);let t=e.length,n=-1,r=0,i=-1,o=0,a;for(;t--;){const l=e.codePointAt(t);if(l===47){if(a){r=t+1;break}continue}n<0&&(a=!0,n=t+1),l===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function eS(...e){let t=-1,n;for(;++t<e.length;)xi(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":tS(n)}function tS(e){xi(e);const t=e.codePointAt(0)===47;let n=nS(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function nS(e,t){let n="",r=0,i=-1,o=0,a=-1,l,c;for(;++a<=e.length;){if(a<e.length)l=e.codePointAt(a);else{if(l===47)break;l=47}if(l===47){if(!(i===a-1||o===1))if(i!==a-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),i=a,o=0;continue}}else if(n.length>0){n="",r=0,i=a,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,o=0}else l===46&&o>-1?o++:o=-1}return n}function xi(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const rS={cwd:sS};function sS(){return"/"}function mc(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function iS(e){if(typeof e=="string")e=new URL(e);else if(!mc(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return oS(e)}function oS(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const Ka=["history","path","basename","stem","extname","dirname"];class Dx{constructor(t){let n;t?mc(t)?n={path:t}:typeof t=="string"||aS(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":rS.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Ka.length;){const o=Ka[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)Ka.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?nn.basename(this.path):void 0}set basename(t){Qa(t,"basename"),Ga(t,"basename"),this.path=nn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?nn.dirname(this.path):void 0}set dirname(t){Lf(this.basename,"dirname"),this.path=nn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?nn.extname(this.path):void 0}set extname(t){if(Ga(t,"extname"),Lf(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=nn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){mc(t)&&(t=iS(t)),Qa(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?nn.basename(this.path,this.extname):void 0}set stem(t){Qa(t,"stem"),Ga(t,"stem"),this.path=nn.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new ut(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Ga(e,t){if(e&&e.includes(nn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+nn.sep+"`")}function Qa(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Lf(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function aS(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const lS=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},cS={}.hasOwnProperty;class Ou extends lS{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=G2()}copy(){const t=new Ou;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Ja(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Za("data",this.frozen),this.namespace[t]=n,this):cS.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Za("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Di(t),r=this.parser||this.Parser;return Ya("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Ya("process",this.parser||this.Parser),Xa("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,a){const l=Di(t),c=r.parse(l);r.run(c,l,function(d,p,f){if(d||!p||!f)return u(d);const m=p,y=r.stringify(m,f);pS(y)?f.value=y:f.result=y,u(d,f)});function u(d,p){d||!p?a(d):o?o(p):n(void 0,p)}}}processSync(t){let n=!1,r;return this.freeze(),Ya("processSync",this.parser||this.Parser),Xa("processSync",this.compiler||this.Compiler),this.process(t,i),Rf("processSync","process",n),r;function i(o,a){n=!0,Sf(o),r=a}}run(t,n,r){Af(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(a,l){const c=Di(n);i.run(t,c,u);function u(d,p,f){const m=p||t;d?l(d):a?a(m):r(void 0,m,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),Rf("runSync","run",r),i;function o(a,l){Sf(a),i=l,r=!0}}stringify(t,n){this.freeze();const r=Di(n),i=this.compiler||this.Compiler;return Xa("stringify",i),Af(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(Za("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(u){if(typeof u=="function")c(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...p]=u;c(d,p)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(i.settings=Ja(!0,i.settings,u.settings))}function l(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const p=u[d];o(p)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function c(u,d){let p=-1,f=-1;for(;++p<r.length;)if(r[p][0]===u){f=p;break}if(f===-1)r.push([u,...d]);else if(d.length>0){let[m,...y]=d;const w=r[f][1];fc(w)&&fc(m)&&(m=Ja(!0,w,m)),r[f]=[u,m,...y]}}}}const uS=new Ou().freeze();function Ya(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Xa(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Za(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Af(e){if(!fc(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Rf(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Di(e){return dS(e)?e:new Dx(e)}function dS(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function pS(e){return typeof e=="string"||fS(e)}function fS(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const mS="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Mf=[],If={allowDangerousHtml:!0},hS=/^(https?|ircs?|mailto|xmpp)$/i,gS=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Fx(e){const t=xS(e),n=yS(e);return vS(t.runSync(t.parse(n),n),e)}function xS(e){const t=e.rehypePlugins||Mf,n=e.remarkPlugins||Mf,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...If}:If;return uS().use(X_).use(n).use(J2,r).use(t)}function yS(e){const t=e.children||"",n=new Dx;return typeof t=="string"&&(n.value=t),n}function vS(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,a=t.skipHtml,l=t.unwrapDisallowed,c=t.urlTransform||bS;for(const d of gS)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+mS+d.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),Ox(e,u),Pw(e,{Fragment:s.Fragment,components:i,ignoreInvalidStyle:!0,jsx:s.jsx,jsxs:s.jsxs,passKeys:!0,passNode:!0});function u(d,p,f){if(d.type==="raw"&&f&&typeof p=="number")return a?f.children.splice(p,1):f.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let m;for(m in Wa)if(Object.hasOwn(Wa,m)&&Object.hasOwn(d.properties,m)){const y=d.properties[m],w=Wa[m];(w===null||w.includes(d.tagName))&&(d.properties[m]=c(String(y||""),m,d))}}if(d.type==="element"){let m=n?!n.includes(d.tagName):o?o.includes(d.tagName):!1;if(!m&&r&&typeof p=="number"&&(m=!r(d,p,f)),m&&f&&typeof p=="number")return l&&d.children?f.children.splice(p,1,...d.children):f.children.splice(p,1),p}}}function bS(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||hS.test(e.slice(0,t))?e:""}function kS({value:e,onChange:t,placeholder:n="Write your content here...",minHeight:r=200}){const[i,o]=k.useState(!1),[a,l]=k.useState(r),c=k.useRef(null),u=k.useRef(null);k.useEffect(()=>{if(e){const f=e.split(`
`).length,m=Math.max(r,Math.min(f*20+40,500));l(m)}},[e,r]),k.useEffect(()=>{i&&u.current&&u.current.focus()},[i]);function d(f){u.current=f,f.focus()}function p(f){c.current&&!c.current.contains(f.target)&&o(!1)}return k.useEffect(()=>{if(i)return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[i]),s.jsxs("div",{ref:c,className:"markdown-editor",children:[s.jsx("style",{children:`
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
      `}),i?s.jsx("div",{className:"monaco-wrapper",children:s.jsx(Ft,{height:"100%",language:"markdown",theme:"vs-dark",value:e,onChange:f=>t(f||""),onMount:d,options:{minimap:{enabled:!1},fontSize:14,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"off",scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",padding:{top:12,bottom:12},lineDecorationsWidth:8,folding:!1,glyphMargin:!1,renderLineHighlight:"none",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,scrollbar:{vertical:"auto",horizontal:"hidden"}}})}):s.jsxs("div",{className:"markdown-preview",onClick:()=>o(!0),children:[s.jsxs("span",{className:"edit-hint",children:[s.jsx(ub,{size:12}),"Click to edit"]}),e?s.jsx("div",{className:"markdown-content",children:s.jsx(Fx,{children:e})}):s.jsx("div",{className:"markdown-placeholder",children:n})]})]})}function wS(e){return/^[a-zA-Z0-9_]+$/.test(e)}function jS({agent:e}){const{project:t,updateAgent:n,mcpServers:r,builtinTools:i,setActiveTab:o,setRunAgentId:a}=ct(),[l,c]=k.useState(new Set(["basic","model","tools","subagents"])),[u,d]=k.useState(!1),[p,f]=k.useState(!1),[m,y]=k.useState(!1),[w,z]=k.useState(""),[v,x]=k.useState(null);if(!t)return null;function g(T){n(e.id,T)}function P(T){if(T===""){x(null),g({name:T});return}wS(T)?x(null):x("Name can only contain letters, numbers, and underscores"),g({name:T})}function N(T){const $=new Set(l);$.has(T)?$.delete(T):$.add(T),c($)}const _=e.type==="LlmAgent",C=e;function b(T){_&&g({tools:[...C.tools,T]})}function L(T){_&&g({tools:C.tools.filter(($,R)=>R!==T)})}function S(T,$){if(!_)return;const R=[...C.tools];R[T]=$,g({tools:R})}function A(T){"sub_agents"in e&&g({sub_agents:[...e.sub_agents,T]})}function M(T){"sub_agents"in e&&g({sub_agents:e.sub_agents.filter($=>$!==T)})}const q=t.agents.filter(T=>T.id!==e.id);async function U(){if(!(!t||!_)){d(!0);try{const T=C.instruction||"",$=T?`Current instruction to improve:

${T}

Please improve and expand this instruction while preserving its core intent.`:void 0,j=t.agents.some(G=>G.id===e.id)?void 0:e,W=await Xi(t.id,e.id,$,j);W.success&&W.prompt?g({instruction:W.prompt}):alert("Failed to generate prompt: "+(W.error||"Unknown error"))}catch(T){alert("Error generating prompt: "+T.message)}finally{d(!1)}}}async function B(){if(!(!t||!_||!w.trim())){d(!0);try{const $=`Current instruction:

${C.instruction||""}

---

Requested changes:
${w}

Please apply the requested changes to the instruction above. Output only the updated instruction, nothing else.`,j=t.agents.some(G=>G.id===e.id)?void 0:e,W=await Xi(t.id,e.id,$,j);W.success&&W.prompt?(g({instruction:W.prompt}),y(!1),z("")):alert("Failed to apply changes: "+(W.error||"Unknown error"))}catch(T){alert("Error applying changes: "+T.message)}finally{d(!1)}}}async function ne(){if(!t||!_)return;const T=C.instruction;if(!T){alert("Please write an instruction first");return}f(!0);try{const $=`Write a 5-10 word description of what this agent does.

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

Your response (5-10 words only):`,R=await Xi(t.id,e.id,$);if(R.success&&R.prompt){let j=R.prompt.trim();j=j.replace(/^["']|["']$/g,"").trim();const W=j.split(/[.!?\n]/)[0].trim(),G=W.length>80?W.slice(0,77)+"...":W;g({description:G})}else alert("Failed to generate description: "+(R.error||"Unknown error"))}catch($){alert("Error generating description: "+$.message)}finally{f(!1)}}return s.jsxs("div",{className:"agent-editor",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"editor-header",children:[s.jsx(cr,{size:24,style:{color:"var(--accent-primary)"}}),s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[s.jsx("input",{type:"text",value:e.name,onChange:T=>P(T.target.value),placeholder:"Agent name",style:{borderColor:v?"var(--error)":void 0}}),v&&s.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:v})]}),s.jsx("span",{className:"badge badge-info",children:e.type}),s.jsxs("button",{className:"btn btn-primary btn-sm run-agent-btn",onClick:()=>{a(e.id),o("run")},title:"Test this agent",children:[s.jsx(qn,{size:14}),"Run"]})]}),s.jsxs("div",{className:"editor-content",children:[s.jsxs(xs,{id:"basic",title:"Basic Info",icon:s.jsx(cr,{size:16}),expanded:l.has("basic"),onToggle:()=>N("basic"),children:[s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group full-width",children:[s.jsxs("div",{className:"label-with-action",children:[s.jsx("label",{children:"Description"}),_&&C.instruction&&s.jsx("button",{className:"btn btn-secondary btn-sm generate-btn",onClick:ne,disabled:p,title:"Generate description from instruction",children:p?s.jsxs(s.Fragment,{children:[s.jsx(Rn,{size:14,className:"spin"}),"Summarizing..."]}):"Summarize"})]}),s.jsx("input",{type:"text",value:e.description,onChange:T=>g({description:T.target.value}),placeholder:"e.g., Reviews code for bugs and suggests fixes"})]})}),_&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group full-width",children:[s.jsxs("div",{className:"label-with-action",children:[s.jsx("label",{children:"Instruction"}),s.jsxs("div",{className:"action-buttons",children:[s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>y(!m),disabled:u||!C.instruction,title:"Request specific changes to the instruction",children:"Request Changes"}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:U,disabled:u,title:"Uses AI to improve and expand the current instruction",children:u?s.jsxs(s.Fragment,{children:[s.jsx(Rn,{size:14,className:"spin"}),"Working..."]}):"Auto-Improve"})]})]}),m&&s.jsxs("div",{className:"request-changes-box",children:[s.jsx("input",{type:"text",value:w,onChange:T=>z(T.target.value),placeholder:"Describe what changes you want...",onKeyDown:T=>{T.key==="Enter"&&w.trim()?B():T.key==="Escape"&&(y(!1),z(""))},autoFocus:!0}),s.jsx("button",{className:"btn btn-primary btn-sm",onClick:B,disabled:u||!w.trim(),children:"Apply"})]}),s.jsx(kS,{value:C.instruction,onChange:T=>g({instruction:T}),placeholder:"Write your agent's instruction here... (Markdown supported)",minHeight:200})]})}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Output Key"}),s.jsxs("select",{value:C.output_key||"",onChange:T=>g({output_key:T.target.value||void 0}),children:[s.jsx("option",{value:"",children:"None"}),t.app.state_keys.map(T=>s.jsx("option",{value:T.name,children:T.name},T.name))]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Include Contents"}),s.jsxs("select",{value:C.include_contents,onChange:T=>g({include_contents:T.target.value}),children:[s.jsx("option",{value:"default",children:"Default"}),s.jsx("option",{value:"none",children:"None"})]})]})]}),s.jsxs("div",{className:"form-row",style:{gap:24},children:[s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[s.jsxs("span",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:C.disallow_transfer_to_parent,onChange:T=>g({disallow_transfer_to_parent:T.target.checked})}),s.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to parent"]}),s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[s.jsxs("span",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:C.disallow_transfer_to_peers,onChange:T=>g({disallow_transfer_to_peers:T.target.checked})}),s.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to peers"]})]})]}),e.type==="LoopAgent"&&s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Max Iterations"}),s.jsx("input",{type:"number",value:e.max_iterations||"",onChange:T=>g({max_iterations:parseInt(T.target.value)||void 0}),placeholder:"No limit"})]})})]}),_&&s.jsx(xs,{id:"model",title:"Model",icon:s.jsx(gu,{size:16}),expanded:l.has("model"),onToggle:()=>N("model"),children:s.jsx(SS,{agent:C,appModels:t.app.models||[],defaultModelId:t.app.default_model_id,projectId:t.id,onUpdate:T=>g({model:T})})}),_&&s.jsx(xs,{id:"tools",title:`Tools (${C.tools.length})`,icon:s.jsx(Xt,{size:16}),expanded:l.has("tools"),onToggle:()=>N("tools"),children:s.jsx(_S,{tools:C.tools,onAdd:b,onRemove:L,onUpdate:S,builtinTools:i,mcpServers:r,projectMcpServers:t.mcp_servers,customTools:t.custom_tools,agents:q,skillsets:t.skillsets||[]})}),"sub_agents"in e&&s.jsx(xs,{id:"subagents",title:`Sub-Agents (${e.sub_agents.length})`,icon:s.jsx(Jg,{size:16}),expanded:l.has("subagents"),onToggle:()=>N("subagents"),children:s.jsxs("div",{className:"sub-agent-list",children:[e.sub_agents.map(T=>{const $=t.agents.find(R=>R.id===T);return $?s.jsxs("div",{className:"sub-agent-chip",children:[$.name,s.jsx("button",{onClick:()=>M(T),children:s.jsx(De,{size:12})})]},T):null}),s.jsxs("select",{value:"",onChange:T=>{T.target.value&&A(T.target.value)},style:{width:150,padding:"6px 10px",fontSize:13},children:[s.jsx("option",{value:"",children:"Add agent..."}),q.filter(T=>!e.sub_agents.includes(T.id)).map(T=>s.jsx("option",{value:T.id,children:T.name},T.id))]})]})}),s.jsx(xs,{id:"callbacks",title:"Callbacks",icon:s.jsx(un,{size:16}),expanded:l.has("callbacks"),onToggle:()=>N("callbacks"),children:s.jsx(CS,{agent:e,onUpdate:g,customCallbacks:t.custom_callbacks||[],isLlmAgent:_})})]})]})}function xs({id:e,title:t,icon:n,expanded:r,onToggle:i,children:o}){return s.jsxs("div",{className:"section",children:[s.jsxs("div",{className:"section-header",onClick:i,children:[r?s.jsx(Rt,{size:16}):s.jsx(Mt,{size:16}),s.jsxs("h4",{children:[n," ",t]})]}),r&&s.jsx("div",{className:"section-content",children:o})]})}function _S({tools:e,onAdd:t,onRemove:n,onUpdate:r,builtinTools:i,mcpServers:o,projectMcpServers:a,customTools:l,agents:c,skillsets:u}){const[d,p]=k.useState(!1),[f,m]=k.useState({}),[y,w]=k.useState(""),z=zt.useRef(null),v=zt.useRef(null),[x,g]=k.useState(null),[P,N]=k.useState(new Set),_=(E,Q)=>{if(!y.trim())return!0;const V=y.toLowerCase();return E.toLowerCase().includes(V)||((Q==null?void 0:Q.toLowerCase().includes(V))??!1)},C=i.filter(E=>_(E.name,E.description)),b=o.filter(E=>_(E.name,E.description)),L=a.filter(E=>_(E.name,E.description)),S=l.filter(E=>_(E.name,E.description)),A=c.filter(E=>_(E.name,E.description)),M=u.filter(E=>_(E.name,E.description));function q(){if(z.current){const E=z.current.getBoundingClientRect(),Q=window.innerHeight,V=350,ie=Q-E.bottom-16,he=E.top-16;if(ie>=200||ie>=he){const I=Math.min(V,ie);m({top:E.bottom+4,left:E.left,maxHeight:I})}else{const I=Math.min(V,he);m({top:E.top-I-4,left:E.left,maxHeight:I})}}p(!0),w(""),setTimeout(()=>{var E;return(E=v.current)==null?void 0:E.focus()},50)}function U(){p(!1),w("")}function B(E){t({type:"builtin",name:E}),U()}async function ne(E){U();const Q=E.tool_filter||[];if(g({server:E,enabledTools:new Set(Q),availableTools:Q.map(V=>({name:V,description:""})),isLoading:Q.length===0,error:void 0}),Q.length===0)try{const{testMcpServer:V}=await Cb(async()=>{const{testMcpServer:he}=await Promise.resolve().then(()=>G0);return{testMcpServer:he}},void 0),ie=await V({connection_type:E.connection_type,command:E.command,args:E.args,env:E.env,url:E.url,headers:E.headers,timeout:E.timeout||30});ie.success?g(he=>he?{...he,availableTools:ie.tools,enabledTools:new Set(ie.tools.map(I=>I.name)),isLoading:!1}:null):g(he=>he?{...he,isLoading:!1,error:ie.error||"Failed to connect to MCP server"}:null)}catch(V){g(ie=>ie?{...ie,isLoading:!1,error:V.message}:null)}}function T(E){if(!x)return;const Q=new Set(x.enabledTools);Q.has(E)?Q.delete(E):Q.add(E),g({...x,enabledTools:Q})}function $(){if(!x)return;const E=Array.from(x.enabledTools);t({type:"mcp",server:{...x.server,tool_filter:E}}),g(null)}function R(E){const Q=new Set(P);Q.has(E)?Q.delete(E):Q.add(E),N(Q)}function j(E,Q){const V=e[E];if(V.type!=="mcp"||!V.server)return;const ie=V.server.tool_filter||[];let he;ie.includes(Q)?he=ie.filter(I=>I!==Q):he=[...ie,Q],r(E,{...V,server:{...V.server,tool_filter:he}})}function W(E){t({type:"function",name:E.name,module_path:E.module_path}),U()}function G(E){const Q=c.find(V=>V.id===E);t({type:"agent",agent_id:E,name:Q==null?void 0:Q.name}),U()}function h(E){const Q=u.find(V=>V.id===E);t({type:"skillset",skillset_id:E,name:Q==null?void 0:Q.name}),U()}function F(E){return o.find(Q=>Q.name===E)}return s.jsxs("div",{children:[s.jsx("style",{children:`
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
      `}),s.jsx("div",{className:"tool-list",children:e.map((E,Q)=>{var V;return E.type==="mcp"&&E.server?s.jsxs("div",{className:"mcp-tool-item",children:[s.jsxs("div",{className:"mcp-tool-header",onClick:()=>R(Q),children:[P.has(Q)?s.jsx(Rt,{size:14}):s.jsx(Mt,{size:14}),s.jsx(Xt,{size:14,style:{color:"var(--accent-primary)"}}),s.jsxs("div",{className:"mcp-tool-info",children:[s.jsx("div",{className:"mcp-tool-name",children:E.server.name}),s.jsx("div",{className:"mcp-tool-count",children:E.server.tool_filter===null||E.server.tool_filter===void 0?"all tools":`${E.server.tool_filter.length} tools enabled`})]}),s.jsx("button",{className:"delete-btn",onClick:ie=>{ie.stopPropagation(),n(Q)},children:s.jsx(De,{size:14})})]}),P.has(Q)&&s.jsx("div",{className:"mcp-tool-body",children:s.jsx("div",{className:"mcp-tool-list",children:(()=>{const ie=F(E.server.name),he=(ie==null?void 0:ie.tool_filter)||E.server.tool_filter||[],I=new Set(E.server.tool_filter||[]);return he.map(K=>s.jsxs("label",{className:`mcp-tool-chip ${I.has(K)?"enabled":"disabled"}`,onClick:()=>j(Q,K),children:[s.jsx("input",{type:"checkbox",checked:I.has(K),onChange:()=>{},style:{display:"none"}}),K]},K))})()})})]},Q):E.type==="skillset"?s.jsxs("div",{className:"tool-item",children:[s.jsx(yn,{size:14,style:{color:"var(--accent)"}}),s.jsxs("div",{className:"tool-item-info",children:[s.jsx("div",{className:"tool-item-name",children:E.name||((V=u.find(ie=>ie.id===E.skillset_id))==null?void 0:V.name)||"SkillSet"}),s.jsx("div",{className:"tool-item-type",children:"skillset"})]}),s.jsx("button",{className:"delete-btn",onClick:()=>n(Q),children:s.jsx(De,{size:14})})]},Q):s.jsxs("div",{className:"tool-item",children:[s.jsx(Xt,{size:14,style:{color:"var(--accent-primary)"}}),s.jsxs("div",{className:"tool-item-info",children:[s.jsx("div",{className:"tool-item-name",children:E.name||E.agent_id}),s.jsx("div",{className:"tool-item-type",children:E.type})]}),s.jsx("button",{className:"delete-btn",onClick:()=>n(Q),children:s.jsx(De,{size:14})})]},Q)})}),s.jsxs("div",{className:"add-tool-dropdown",style:{marginTop:12},children:[s.jsxs("button",{ref:z,className:"btn btn-secondary btn-sm",onClick:()=>d?U():q(),children:[s.jsx(Je,{size:14}),"Add Tool"]}),d&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"dropdown-backdrop",onClick:U}),s.jsxs("div",{className:"dropdown-content dropdown-fixed",style:f,children:[s.jsx("div",{className:"dropdown-search",children:s.jsx("input",{ref:v,type:"text",placeholder:"Search tools...",value:y,onChange:E=>w(E.target.value),onKeyDown:E=>E.key==="Escape"&&U()})}),C.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsx("h5",{children:"Built-in Tools"}),C.map(E=>s.jsxs("button",{className:"dropdown-item",onClick:()=>B(E.name),children:[s.jsx("div",{className:"dropdown-item-name",children:E.name}),s.jsx("div",{className:"dropdown-item-desc",children:E.description})]},E.name))]}),b.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsxs("h5",{children:["Known MCP Servers (",b.length,")"]}),b.map(E=>s.jsxs("button",{className:"dropdown-item",onClick:()=>ne(E),children:[s.jsxs("div",{className:"dropdown-item-name",children:[E.name,s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:E.tool_filter===null||E.tool_filter===void 0?"all tools":`${E.tool_filter.length} tools`})]}),s.jsx("div",{className:"dropdown-item-desc",children:E.description})]},`known-${E.name}`))]}),L.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsxs("h5",{children:["Project MCP Servers (",L.length,")"]}),L.map(E=>s.jsxs("button",{className:"dropdown-item",onClick:()=>ne(E),children:[s.jsxs("div",{className:"dropdown-item-name",children:[E.name,s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:E.tool_filter===null||E.tool_filter===void 0?"all tools":`${E.tool_filter.length} tools`})]}),s.jsx("div",{className:"dropdown-item-desc",children:E.description||"Custom MCP server"})]},`project-${E.id||E.name}`))]}),S.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsx("h5",{children:"Custom Tools"}),S.map(E=>s.jsxs("button",{className:"dropdown-item",onClick:()=>W(E),children:[s.jsx("div",{className:"dropdown-item-name",children:E.name}),s.jsx("div",{className:"dropdown-item-desc",children:E.description})]},E.id))]}),A.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsx("h5",{children:"Agents as Tools"}),A.map(E=>s.jsxs("button",{className:"dropdown-item",onClick:()=>G(E.id),children:[s.jsx("div",{className:"dropdown-item-name",children:E.name}),s.jsx("div",{className:"dropdown-item-desc",children:E.type})]},E.id))]}),M.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsxs("h5",{children:["SkillSets (",M.length,")"]}),M.map(E=>s.jsxs("button",{className:"dropdown-item",onClick:()=>h(E.id),children:[s.jsxs("div",{className:"dropdown-item-name",children:[E.name,s.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:[E.entry_count||0," entries"]})]}),s.jsx("div",{className:"dropdown-item-desc",children:E.description||"Vector knowledge base"})]},E.id))]}),y.trim()&&C.length===0&&b.length===0&&L.length===0&&S.length===0&&A.length===0&&M.length===0&&s.jsxs("div",{className:"dropdown-section",style:{textAlign:"center",padding:"20px",color:"var(--text-muted)"},children:['No tools matching "',y,'"']})]})]})]}),x&&s.jsx("div",{className:"mcp-config-dialog",children:s.jsxs("div",{className:"mcp-config-content",children:[s.jsxs("h3",{children:["Configure ",x.server.name]}),s.jsx("p",{children:x.server.description}),x.isLoading?s.jsxs("div",{className:"mcp-loading",children:[s.jsx("div",{className:"spinner"}),s.jsx("p",{children:"Connecting to MCP server and discovering tools..."})]}):x.error?s.jsxs("div",{className:"mcp-error",children:[s.jsxs("p",{children:["⚠️ Failed to discover tools: ",x.error]}),s.jsx("p",{className:"hint",children:"You can still add the server, but you won't be able to select specific tools."})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"mcp-select-actions",children:[s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>g({...x,enabledTools:new Set(x.availableTools.map(E=>E.name))}),children:["Select All (",x.availableTools.length,")"]}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>g({...x,enabledTools:new Set}),children:"Select None"})]}),s.jsx("div",{className:"mcp-tools-grid",children:x.availableTools.map(E=>s.jsxs("div",{className:"mcp-tool-row",title:E.description||E.name,style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[s.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[s.jsx("input",{type:"checkbox",checked:x.enabledTools.has(E.name),onChange:()=>T(E.name)}),s.jsx("span",{className:"toggle-slider"})]}),s.jsx("span",{style:{fontSize:13,opacity:x.enabledTools.has(E.name)?1:.5,cursor:"pointer"},onClick:()=>T(E.name),children:E.name})]},E.name))})]}),s.jsxs("div",{className:"dialog-actions",children:[s.jsx("button",{className:"btn btn-secondary",onClick:()=>g(null),children:"Cancel"}),s.jsxs("button",{className:"btn btn-primary",onClick:$,disabled:x.enabledTools.size===0,children:["Add ",x.enabledTools.size," Tools"]})]})]})})]})}function SS({agent:e,appModels:t,defaultModelId:n,projectId:r,onUpdate:i}){var f,m;const o=(f=e.model)==null?void 0:f._appModelId,a=e.model!==null&&e.model!==void 0&&!o,c=o||(()=>{if(!e.model)return n;const y=t.find(w=>{var z,v,x;return w.provider===((z=e.model)==null?void 0:z.provider)&&w.model_name===((v=e.model)==null?void 0:v.model_name)&&w.api_base===((x=e.model)==null?void 0:x.api_base)});return y==null?void 0:y.id})()||n||((m=t[0])==null?void 0:m.id);zt.useEffect(()=>{var y,w,z,v,x;if(o){const g=t.find(P=>P.id===o);g&&(((y=e.model)==null?void 0:y.provider)!==g.provider||((w=e.model)==null?void 0:w.model_name)!==g.model_name||((z=e.model)==null?void 0:z.api_base)!==g.api_base||((v=e.model)==null?void 0:v.temperature)!==g.temperature||((x=e.model)==null?void 0:x.max_output_tokens)!==g.max_output_tokens)&&i({provider:g.provider,model_name:g.model_name,api_base:g.api_base,temperature:g.temperature,max_output_tokens:g.max_output_tokens,top_p:g.top_p,top_k:g.top_k,fallbacks:[],_appModelId:o})}},[o,t,e.model,i]);function u(y){const w=t.find(z=>z.id===y);w&&i({provider:w.provider,model_name:w.model_name,api_base:w.api_base,temperature:w.temperature,max_output_tokens:w.max_output_tokens,top_p:w.top_p,top_k:w.top_k,fallbacks:[],_appModelId:y})}function d(){var y;if(a){const w=n||((y=t[0])==null?void 0:y.id);w&&u(w)}else{const w=e.model;if(w){const{_appModelId:z,...v}=w;i(v)}else i({provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]})}}function p(y){const{_appModelId:w,...z}=e.model||{};i({...z,...y})}return t.find(y=>y.id===c),t.find(y=>y.id===n),s.jsxs("div",{className:"model-selector",children:[s.jsx("style",{children:`
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
      `}),t.length>0&&s.jsxs("div",{className:"model-choice",children:[s.jsxs("div",{className:`model-option ${a?"":"selected"}`,onClick:()=>!a||d(),children:[s.jsx("div",{className:"model-option-label",children:"Use App Model"}),s.jsx("div",{className:"model-option-desc",children:"Select from configured models"})]}),s.jsxs("div",{className:`model-option ${a?"selected":""}`,onClick:()=>a||d(),children:[s.jsx("div",{className:"model-option-label",children:"Custom"}),s.jsx("div",{className:"model-option-desc",children:"Configure model manually"})]})]}),!a&&t.length>0?s.jsx("div",{className:"app-model-select",children:t.map(y=>s.jsx("div",{className:`app-model-item ${c===y.id?"selected":""}`,onClick:()=>u(y.id),children:s.jsxs("div",{className:"app-model-item-info",children:[s.jsxs("div",{className:"app-model-item-name",children:[y.name,y.id===n&&s.jsxs("span",{className:"default-badge",children:[s.jsx(qg,{size:10,fill:"currentColor"}),"Default"]})]}),s.jsxs("div",{className:"app-model-item-details",children:[y.provider," / ",y.model_name,y.api_base&&` • ${y.api_base}`]})]})},y.id))}):t.length===0?s.jsx("div",{className:"no-models-message",children:"No models configured in App Config. Configure models there first, or use custom settings below."}):null,(a||t.length===0)&&s.jsx("div",{className:"custom-model-form",children:s.jsx(Gg,{projectId:r,values:e.model||{},onChange:p})})]})}function CS({agent:e,onUpdate:t,customCallbacks:n,isLlmAgent:r}){const i=[{key:"before_agent_callbacks",label:"Before Agent"},{key:"after_agent_callbacks",label:"After Agent"}],o=[{key:"before_model_callbacks",label:"Before Model"},{key:"after_model_callbacks",label:"After Model"},{key:"before_tool_callbacks",label:"Before Tool"},{key:"after_tool_callbacks",label:"After Tool"}],a=r?[...i,...o]:i;function l(u,d){const p=e[u]||[],f=n.find(m=>m.id===d);f&&t({[u]:[...p,{module_path:f.module_path}]})}function c(u,d){const p=e[u]||[];t({[u]:p.filter((f,m)=>m!==d)})}return s.jsx("div",{className:"callbacks-editor",children:a.map(({key:u,label:d})=>{const p=e[u]||[],f=n;return s.jsxs("div",{className:"callback-type-group",style:{marginBottom:"20px"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[s.jsx("label",{style:{fontWeight:500,fontSize:"13px"},children:d}),f.length>0&&s.jsxs("select",{value:"",onChange:m=>{m.target.value&&(l(u,m.target.value),m.target.value="")},style:{padding:"4px 8px",fontSize:"12px",width:"200px"},children:[s.jsx("option",{value:"",children:"Add callback..."}),f.filter(m=>{const y=m.module_path;return!p.some(w=>w.module_path===y)}).map(m=>s.jsx("option",{value:m.id,children:m.name},m.id))]})]}),p.length===0?s.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",fontStyle:"italic",padding:"8px"},children:"No callbacks"}):s.jsx("div",{className:"callback-list",children:p.map((m,y)=>{const w=n.find(z=>z.module_path===m.module_path);return s.jsxs("div",{className:"callback-chip",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 10px",background:"var(--bg-secondary)",borderRadius:"4px",marginBottom:"4px"},children:[s.jsx("span",{style:{fontSize:"12px"},children:(w==null?void 0:w.name)||m.module_path}),s.jsx("button",{onClick:()=>c(u,y),style:{background:"none",border:"none",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},title:"Remove callback",children:s.jsx(De,{size:12})})]},y)})})]},u)})})}const el=[{type:"LlmAgent",label:"LLM Agent",icon:cr,color:"#00f5d4",description:"AI-powered agent with model reasoning"},{type:"SequentialAgent",label:"Sequential",icon:hb,color:"#7b2cbf",description:"Run sub-agents in order"},{type:"LoopAgent",label:"Loop",icon:pb,color:"#ffd93d",description:"Repeat sub-agents until exit"},{type:"ParallelAgent",label:"Parallel",icon:tc,color:"#ff6b6b",description:"Run sub-agents simultaneously"}];function NS(){return`agent_${Date.now().toString(36)}`}function ES(e){return{provider:e.provider,model_name:e.model_name,api_base:e.api_base,temperature:e.temperature,max_output_tokens:e.max_output_tokens,top_p:e.top_p,top_k:e.top_k,fallbacks:[]}}function zS(e,t){const r={id:NS(),name:`New ${e}`,description:""},i=t?ES(t):{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]};switch(e){case"LlmAgent":return{...r,type:"LlmAgent",model:i,instruction:"",include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:[],sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};case"SequentialAgent":return{...r,type:"SequentialAgent",sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[]};case"LoopAgent":return{...r,type:"LoopAgent",sub_agents:[],max_iterations:10,before_agent_callbacks:[],after_agent_callbacks:[]};case"ParallelAgent":return{...r,type:"ParallelAgent",sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[]};default:throw new Error(`Unknown agent type: ${e}`)}}function TS({onSelectAgent:e}){const{project:t,addAgent:n,removeAgent:r,updateAgent:i,selectedAgentId:o,setSelectedAgentId:a,mcpServers:l}=ct(),[c,u]=k.useState(new Set),[d,p]=k.useState(!1),[f,m]=k.useState(""),[y,w]=k.useState(new Map),[z,v]=k.useState(380),[x,g]=k.useState(!1),P=k.useRef(null),[N,_]=k.useState(null),C=k.useRef(null),[b,L]=k.useState(null),[S,A]=k.useState(null),M=k.useRef(null),q=k.useRef(null),U=k.useCallback(J=>{J.preventDefault(),g(!0)},[]);if(k.useEffect(()=>{const J=oe=>{if(!x)return;const xe=Math.min(Math.max(200,oe.clientX),600);v(xe)},ee=()=>{g(!1)};return x&&(document.addEventListener("mousemove",J),document.addEventListener("mouseup",ee),document.body.style.cursor="col-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",J),document.removeEventListener("mouseup",ee),document.body.style.cursor="",document.body.style.userSelect=""}},[x]),k.useEffect(()=>{if(t){const J=t.agents.filter(ee=>"sub_agents"in ee&&ee.sub_agents.length>0).map(ee=>ee.id);u(new Set(J))}},[t==null?void 0:t.id,t==null?void 0:t.agents.length]),!t)return null;function B(){if(!f.trim()||!t)return;const J=`generating_${Date.now()}`,ee=f;w(oe=>new Map(oe).set(J,ee)),p(!1),m(""),Tg(t.id,ee).then(oe=>{var xe,we,ze,be;if(oe.success&&oe.config){const D=oe.config,se=[];if((xe=D.tools)!=null&&xe.builtin)for(const Z of D.tools.builtin)se.push({type:"builtin",name:Z});if((we=D.tools)!=null&&we.mcp)for(const Z of D.tools.mcp){const ge=l.find(ae=>ae.name===Z.server);ge&&se.push({type:"mcp",server:{...ge,tool_filter:Z.tools}})}if((ze=D.tools)!=null&&ze.custom)for(const Z of D.tools.custom){const ge=t.custom_tools.find(ae=>ae.name===Z);ge&&se.push({type:"function",name:Z,module_path:ge.module_path})}if((be=D.tools)!=null&&be.agents)for(const Z of D.tools.agents){const ge=t.agents.find(ae=>ae.id===Z);ge&&se.push({type:"agent",agent_id:Z,name:ge.name})}const me=t.app.models||[],de=me.find(Z=>Z.id===t.app.default_model_id)||me[0],H={id:`agent_${Date.now().toString(36)}`,type:"LlmAgent",name:D.name||"new_agent",description:D.description||"",instruction:D.instruction||"",model:de?{provider:de.provider,model_name:de.model_name,api_base:de.api_base,temperature:de.temperature,max_output_tokens:de.max_output_tokens,top_p:de.top_p,top_k:de.top_k,fallbacks:[]}:{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]},include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:se,sub_agents:D.sub_agents||[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};n(H),a(H.id),e==null||e(H.id)}else console.error("Failed to generate agent:",oe.error)}).catch(oe=>{console.error("Error generating agent:",oe)}).finally(()=>{w(oe=>{const xe=new Map(oe);return xe.delete(J),xe})})}const ne=t.agents.find(J=>J.id===o);function T(J){a(J),e==null||e(J)}function $(J){if(!t)return;const ee=t.app.models||[],oe=ee.find(we=>we.id===t.app.default_model_id)||ee[0],xe=zS(J,oe);n(xe),T(xe.id)}function R(J,ee){ee.stopPropagation(),confirm("Delete this agent?")&&(r(J),o===J&&(e==null||e(null)))}function j(J){const ee=new Set(c);ee.has(J)?ee.delete(J):ee.add(J),u(ee)}function W(J){if(!M.current||!C.current)return;const ee=M.current.getBoundingClientRect(),oe=J.clientY-ee.top,xe=60,we=8;if(oe<xe){const ze=Math.max(1,we*(1-oe/xe));M.current.scrollTop-=ze}else if(oe>ee.height-xe){const ze=Math.max(1,we*(1-(ee.height-oe)/xe));M.current.scrollTop+=ze}}function G(J,ee){J.dataTransfer.setData("text/plain",ee),J.dataTransfer.effectAllowed="move",C.current=ee,requestAnimationFrame(()=>_(ee))}function h(){C.current=null,_(null),L(null),A(null),q.current&&(cancelAnimationFrame(q.current),q.current=null)}function F(J,ee,oe){if(!t||(J.preventDefault(),J.stopPropagation(),!C.current))return;const we=t.agents.find(ze=>ze.id===ee);!we||!("sub_agents"in we)||(J.dataTransfer.dropEffect="move",A({parentId:ee,index:oe}),L(null))}function E(J,ee,oe){if(!t)return;J.preventDefault(),J.stopPropagation();const xe=J.dataTransfer.getData("text/plain");if(!xe)return;const we=t.agents.find(be=>be.id===ee);if(!we||!("sub_agents"in we))return;t.agents.forEach(be=>{"sub_agents"in be&&be.sub_agents.includes(xe)&&i(be.id,{sub_agents:be.sub_agents.filter(D=>D!==xe)})});const ze=[...we.sub_agents.filter(be=>be!==xe)];ze.splice(oe,0,xe),i(ee,{sub_agents:ze}),u(be=>new Set([...be,ee])),_(null),A(null)}function Q(J,ee,oe){if(!t)return;const xe=C.current;if(J.preventDefault(),J.stopPropagation(),xe===ee)return;const we=t.agents.find(ze=>ze.id===xe);we&&"sub_agents"in we&&he(we,ee)||(J.dataTransfer.dropEffect="move",L({agentId:ee,type:oe}),A(null))}function V(J){const ee=J.relatedTarget;(!ee||!J.currentTarget.contains(ee))&&L(null)}function ie(J,ee,oe){if(!t)return;J.preventDefault(),J.stopPropagation();const xe=J.dataTransfer.getData("text/plain");if(!xe||xe===ee)return;const we=t.agents.find(be=>be.id===ee),ze=t.agents.find(be=>be.id===xe);if(!(!we||!ze)){if(oe==="sub_agent")"sub_agents"in we&&(t.agents.forEach(be=>{"sub_agents"in be&&be.sub_agents.includes(xe)&&i(be.id,{sub_agents:be.sub_agents.filter(D=>D!==xe)})}),we.sub_agents.includes(xe)||(i(ee,{sub_agents:[...we.sub_agents,xe]}),u(be=>new Set([...be,ee]))));else if(oe==="tool"&&"tools"in we){const be=we;be.tools.some(se=>se.type==="agent"&&se.agent_id===xe)||i(ee,{tools:[...be.tools,{type:"agent",agent_id:xe,name:ze.name}]})}_(null),L(null)}}function he(J,ee){if(!t||!("sub_agents"in J))return!1;if(J.sub_agents.includes(ee))return!0;for(const oe of J.sub_agents){const xe=t.agents.find(we=>we.id===oe);if(xe&&he(xe,ee))return!0}return!1}function I(J){const ee=el.find(oe=>oe.type===J);return ee?ee.icon:cr}function K(J){const ee=el.find(oe=>oe.type===J);return ee?ee.color:"#888"}function X(J,ee=0){return J.map(oe=>{const xe=I(oe.type),we=K(oe.type),ze="sub_agents"in oe&&oe.sub_agents.length>0,be="sub_agents"in oe,D=oe.type==="LlmAgent",se=c.has(oe.id),me=N===oe.id,de=(b==null?void 0:b.agentId)===oe.id&&(b==null?void 0:b.type)==="sub_agent",H=(b==null?void 0:b.agentId)===oe.id&&(b==null?void 0:b.type)==="tool",Z=ze&&t?oe.sub_agents.map(ae=>t.agents.find(Se=>Se.id===ae)).filter(ae=>ae!==void 0):[],ge=N&&N!==oe.id&&(be||D);return s.jsxs("div",{className:"agent-tree-item",children:[s.jsxs("div",{className:`agent-item ${o===oe.id?"selected":""} ${me?"dragging":""} ${ge?"drop-target":""}`,onClick:()=>T(oe.id),style:{paddingLeft:12+ee*20},draggable:!0,onDragStart:ae=>G(ae,oe.id),onDragEnd:h,onDragOver:ae=>{ge&&(ae.preventDefault(),ae.stopPropagation())},children:[s.jsx("div",{className:"drag-handle",children:s.jsx(ib,{size:12})}),ze?s.jsx("button",{className:"expand-btn",onClick:ae=>{ae.stopPropagation(),j(oe.id)},children:se?s.jsx(Rt,{size:16}):s.jsx(Mt,{size:16})}):s.jsx("span",{style:{width:20}}),s.jsx("div",{className:"agent-icon",style:{background:we},children:s.jsx(xe,{size:14})}),s.jsx("span",{className:"agent-name",children:oe.name}),s.jsx("button",{className:"delete-btn",onClick:ae=>R(oe.id,ae),children:s.jsx(De,{size:14})}),ge&&s.jsxs("div",{className:"drop-overlay",children:[be&&s.jsxs("div",{className:`drop-zone-overlay ${de?"active":""}`,onDragOver:ae=>Q(ae,oe.id,"sub_agent"),onDragLeave:V,onDrop:ae=>ie(ae,oe.id,"sub_agent"),children:[s.jsx(Jg,{size:12}),s.jsx("span",{children:"Sub-agent"})]}),D&&s.jsxs("div",{className:`drop-zone-overlay ${H?"active":""}`,onDragOver:ae=>Q(ae,oe.id,"tool"),onDragLeave:V,onDrop:ae=>ie(ae,oe.id,"tool"),children:[s.jsx(Xt,{size:12}),s.jsx("span",{children:"Tool"})]})]})]}),ze&&se&&s.jsxs("div",{className:"sub-agents",children:[N&&N!==oe.id&&s.jsx("div",{className:`insert-indicator ${(S==null?void 0:S.parentId)===oe.id&&(S==null?void 0:S.index)===0?"active":""}`,style:{marginLeft:12+(ee+1)*20},onDragOver:ae=>F(ae,oe.id,0),onDragLeave:()=>A(null),onDrop:ae=>E(ae,oe.id,0)}),Z.map((ae,Se)=>s.jsxs(zt.Fragment,{children:[X([ae],ee+1),N&&N!==oe.id&&N!==ae.id&&s.jsx("div",{className:`insert-indicator ${(S==null?void 0:S.parentId)===oe.id&&(S==null?void 0:S.index)===Se+1?"active":""}`,style:{marginLeft:12+(ee+1)*20},onDragOver:tt=>F(tt,oe.id,Se+1),onDragLeave:()=>A(null),onDrop:tt=>E(tt,oe.id,Se+1)})]},ae.id))]})]},oe.id)})}const Y=new Set(t.agents.flatMap(J=>"sub_agents"in J?J.sub_agents:[])),le=t.agents.filter(J=>!Y.has(J.id));return s.jsxs("div",{className:"agents-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("aside",{className:"agents-sidebar",style:{width:z},children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsxs("h3",{children:["Agents (",t.agents.length,")",y.size>0&&s.jsxs("span",{className:"generating-badge",children:[s.jsx(Rn,{size:12,className:"spin"})," ",y.size]})]}),s.jsxs("div",{className:"header-buttons",children:[el.map(({type:J,icon:ee,color:oe})=>s.jsx("button",{className:"quick-add-btn",style:{background:oe},onClick:()=>$(J),title:`Add ${J}`,children:s.jsx(ee,{size:14})},J)),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>p(!0),title:"AI-powered agent setup",children:s.jsx(Da,{size:14})})]})]}),s.jsx("div",{className:"agents-list",ref:M,onDragOver:W,children:t.agents.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(cr,{size:32}),s.jsx("p",{children:"No agents yet"})]}):X(le)})]}),s.jsx("div",{ref:P,className:`sidebar-resizer ${x?"resizing":""}`,onMouseDown:U}),s.jsx("div",{className:"agent-editor-area",children:ne?s.jsx(jS,{agent:ne}):s.jsxs("div",{className:"empty-state card",children:[s.jsx(cr,{size:48}),s.jsxs("p",{children:["Select an agent to edit",s.jsx("br",{}),"or create a new one"]})]})}),d&&s.jsx("div",{className:"type-selector",onClick:()=>p(!1),children:s.jsxs("div",{className:"quick-setup-content",onClick:J=>J.stopPropagation(),children:[s.jsxs("h2",{children:[s.jsx(Da,{size:20})," Quick Agent Setup"]}),s.jsx("p",{className:"quick-setup-desc",children:"Describe what you want this agent to do. Runs in the background - you can start multiple!"}),s.jsxs("div",{className:"quick-setup-form",children:[s.jsx("textarea",{value:f,onChange:J=>m(J.target.value),placeholder:"Example: An agent that searches the web for information and summarizes the results. It should be able to search Google and handle multiple queries in parallel.",rows:5,autoFocus:!0,onKeyDown:J=>{J.key==="Enter"&&(J.metaKey||J.ctrlKey)&&f.trim()&&B()}}),s.jsxs("div",{className:"quick-setup-info",children:[s.jsx("strong",{children:"Available resources:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[t.app.state_keys.length," state keys"]}),s.jsxs("li",{children:[l.length," MCP servers"]}),s.jsxs("li",{children:[t.custom_tools.length," custom tools"]}),s.jsxs("li",{children:[t.agents.length," existing agents"]})]})]}),s.jsxs("div",{className:"quick-setup-actions",children:[s.jsx("button",{className:"btn btn-secondary",onClick:()=>p(!1),children:"Cancel"}),s.jsxs("button",{className:"btn btn-primary",onClick:B,disabled:!f.trim(),children:[s.jsx(Da,{size:14}),"Generate (⌘↵)"]})]})]})]})})]})}var $u="\x1B[0m",Du="\x1B[1m",Bx=e=>e instanceof Error?e.message:typeof e=="string"?e:"An unknown error occurred",PS=e=>{let t=Bx(e),n=`${Du}[MONACOPILOT ERROR] ${t}${$u}`;return console.error(n),{message:t}},LS=(e,t)=>{console.warn(`${Du}[MONACOPILOT WARN] ${e}${t?`
${Bx(t)}`:""}${$u}`)},AS=(e,t,n)=>console.warn(`${Du}[MONACOPILOT DEPRECATED] "${e}" is deprecated${n?` in ${n}`:""}. Please use "${t}" instead. It will be removed in a future version.${$u}`),Ro={report:PS,warn:LS,warnDeprecated:AS},Of=(e,t,n={})=>{if(t<=0)return"";let r=e.split(`
`),i=r.length;if(t>=i)return e;if(n.truncateDirection==="keepEnd"){let a=r.slice(-t);return a.every(l=>l==="")?`
`.repeat(t):a.join(`
`)}let o=r.slice(0,t);return o.every(a=>a==="")?`
`.repeat(t):o.join(`
`)},RS=100,MS=!0,Ux="onIdle",IS=!0,OS=120,$S=400,DS=0,Fu=(e,t)=>t.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:e.lineNumber,endColumn:e.column}),FS=(e,t)=>t.getValueInRange({startLineNumber:e.lineNumber,startColumn:e.column,endLineNumber:t.getLineCount(),endColumn:t.getLineMaxColumn(t.getLineCount())}),BS=e=>e.getValue(),US=class{constructor(e){this.capacity=e,this.head=0,this.tail=0,this.size=0,this.buffer=new Array(e)}enqueue(e){let t;return this.size===this.capacity&&(t=this.dequeue()),this.buffer[this.tail]=e,this.tail=(this.tail+1)%this.capacity,this.size++,t}dequeue(){if(this.size===0)return;let e=this.buffer[this.head];return this.buffer[this.head]=void 0,this.head=(this.head+1)%this.capacity,this.size--,e}getAll(){return this.buffer.filter(e=>e!==void 0)}clear(){this.buffer=new Array(this.capacity),this.head=0,this.tail=0,this.size=0}getSize(){return this.size}isEmpty(){return this.size===0}isFull(){return this.size===this.capacity}},Vx=class Wx{constructor(){this.cache=new US(Wx.MAX_CACHE_SIZE)}get(t,n){return this.cache.getAll().filter(r=>this.isValidCacheItem(r,t,n))}add(t){t.completion.trim()&&this.cache.enqueue(t)}clear(){this.cache.clear()}isValidCacheItem(t,n,r){let i=t.textBeforeCursor.trim(),o=Fu(n,r),a=o,l=r.getLineContent(n.lineNumber);if(n.column===l.length+1&&n.lineNumber<r.getLineCount()){let u=r.getLineContent(n.lineNumber+1);a=`${o}
${u}`}if(!(a.trim().includes(i)||i.includes(a.trim())))return!1;let c=r.getValueInRange(t.range);return this.isPartialMatch(c,t.completion)?this.isPositionValid(t,n):!1}isPartialMatch(t,n){let r=t.trim(),i=n.trim();return i.startsWith(r)||r.startsWith(i)}isPositionValid(t,n){let{range:r}=t,{startLineNumber:i,startColumn:o,endLineNumber:a,endColumn:l}=r,{lineNumber:c,column:u}=n;return c<i||c>a?!1:i===a?u>=o-1&&u<=l+1:c===i?u>=o-1:c===a?u<=l+1:!0}};Vx.MAX_CACHE_SIZE=20;var VS=Vx,WS=class{constructor(e){this.formattedCompletion="",this.formattedCompletion=e}setCompletion(e){return this.formattedCompletion=e,this}removeInvalidLineBreaks(){return this.formattedCompletion=this.formattedCompletion.trimEnd(),this}removeMarkdownCodeSyntax(){return this.formattedCompletion=this.removeMarkdownCodeBlocks(this.formattedCompletion),this}removeMarkdownCodeBlocks(e){let t=e.split(`
`),n=[],r=!1;for(let i=0;i<t.length;i++){let o=t[i],a=o.trim().startsWith("```");if(a&&!r){r=!0;continue}if(a&&r){r=!1;continue}n.push(o)}return n.join(`
`)}removeExcessiveNewlines(){return this.formattedCompletion=this.formattedCompletion.replace(/\n{3,}/g,`

`),this}build(){return this.formattedCompletion}},HS=class{findOverlaps(e,t,n){if(!e)return{startOverlapLength:0,maxOverlapLength:0};let r=e.length,i=t.length,o=n.length,a=0,l=0,c=0,u=Math.min(r,i);for(let f=1;f<=u;f++){let m=e.substring(0,f),y=t.slice(-f);m===y&&(c=f)}let d=Math.min(r,o);for(let f=0;f<d&&e[f]===n[f];f++)a++;for(let f=1;f<=d;f++)e.slice(-f)===n.slice(0,f)&&(l=f);let p=Math.max(a,l);if(p===0){for(let f=1;f<r;f++)if(n.startsWith(e.substring(f))){p=r-f;break}}return{startOverlapLength:c,maxOverlapLength:p}}},qS=class{constructor(e){this.monaco=e,this.textOverlapCalculator=new HS}computeInsertionRange(e,t,n){if(!t)return this.createEmptyRange(e);let r=n.getOffsetAt(e),i=n.getValue().substring(0,r),o=n.getValue().substring(r);if(r>=n.getValue().length)return this.createEmptyRange(e);if(o.length===0)return this.createEmptyRange(e);let{startOverlapLength:a,maxOverlapLength:l}=this.textOverlapCalculator.findOverlaps(t,i,o),c=a>0?n.getPositionAt(r-a):e,u=r+l,d=n.getPositionAt(u);return new this.monaco.Range(c.lineNumber,c.column,d.lineNumber,d.column)}computeCacheRange(e,t){let n=e.lineNumber,r=e.column,i=t.split(`
`),o=i.length-1,a=n+o,l=o===0?r+i[0].length:i[o].length+1;return new this.monaco.Range(n,r,a,l)}createEmptyRange(e){return new this.monaco.Range(e.lineNumber,e.column,e.lineNumber,e.column)}},JS=async e=>{let{endpoint:t,body:n}=e,r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok)throw new Error(`Error while fetching completion item: ${r.statusText}`);let{completion:i,error:o}=await r.json();return{completion:i,error:o}},KS=({pos:e,mdl:t,options:n})=>{let{filename:r,language:i,technologies:o,relatedFiles:a,maxContextLines:l=RS}=n,c=a&&a.length>0?3:2,u=l?Math.floor(l/c):void 0,d=(w,z,v)=>{let x=w(e,t);return z?Of(x,z,v):x},p=(w,z)=>!w||!z?w:w.map(({content:v,...x})=>({...x,content:Of(v,z)})),f=d(Fu,u,{truncateDirection:"keepEnd"}),m=d(FS,u,{truncateDirection:"keepStart"}),y=p(a,u);return{filename:r,language:i,technologies:o,relatedFiles:y,textBeforeCursor:f,textAfterCursor:m,cursorPosition:e}},GS=(e,t=300)=>{let n=null,r=null,i=(...o)=>{if(r)return r.args=o,r.promise;let a,l,c=new Promise((u,d)=>{a=u,l=d});return r={args:o,promise:c,resolve:a,reject:l},n&&(clearTimeout(n),n=null),n=setTimeout(async()=>{let u=r;if(u){r=null,n=null;try{let d=await e(...u.args);u.resolve(d)}catch(d){u.reject(d)}}},t),c};return i.cancel=()=>{n&&(clearTimeout(n),n=null),r&&(r.reject(new Error("Cancelled")),r=null)},i},QS=e=>typeof e=="string"?e==="Cancelled"||e==="AbortError":e instanceof Error?e.message==="Cancelled"||e.name==="AbortError":!1,ys=e=>({items:e,enableForwardStability:!0}),hc=new VS,YS=async({monaco:e,mdl:t,pos:n,token:r,isCompletionAccepted:i,options:o})=>{let{trigger:a=Ux,enableCaching:l=MS,allowFollowUpCompletions:c=IS,onError:u,requestHandler:d}=o;if(l&&!i){let p=hc.get(n,t).map(f=>({insertText:f.completion,range:f.range}));if(p.length>0)return ys(p)}if(r.isCancellationRequested||!c&&i)return ys([]);try{let p=GS(async y=>{var z,v;(z=o.onCompletionRequested)==null||z.call(o,y);let w;if(d)w=await d(y);else if(o.endpoint)w=await JS({endpoint:o.endpoint,...y});else throw new Error('No endpoint specified for completion request. Please set the "endpoint" option in registerCompletion, or provide a custom requestHandler.');if(w.error)throw new Error(w.error);return(v=o.onCompletionRequestFinished)==null||v.call(o,y,w),w},{onTyping:OS,onIdle:$S,onDemand:DS}[a]);r.onCancellationRequested(()=>{p.cancel()});let f=KS({pos:n,mdl:t,options:o}),{completion:m}=await p({body:{completionMetadata:f}});if(m){let y=new WS(m).removeMarkdownCodeSyntax().removeExcessiveNewlines().removeInvalidLineBreaks().build(),w=new qS(e);return l&&hc.add({completion:y,range:w.computeCacheRange(n,y),textBeforeCursor:Fu(n,t)}),ys([{insertText:y,range:w.computeInsertionRange(n,y,t)}])}}catch(p){if(QS(p))return ys([]);u?u(p):Ro.warn("Cannot provide completion",p)}return ys([])},Bu=new WeakMap,aa=e=>Bu.get(e),XS=(e,t)=>{Bu.set(e,t)},$f=e=>{Bu.delete(e)},ZS=e=>({isCompletionAccepted:!1,isCompletionVisible:!1,isExplicitlyTriggered:!1,hasRejectedCurrentCompletion:!1,options:e}),eC=(e,t)=>{let n=aa(e);!n||!n.options||(n.options={...n.options,...t})},tC=(e,t,n)=>{let r=aa(t);return r?e.languages.registerInlineCompletionsProvider(n.language,{provideInlineCompletions:(i,o,a,l)=>{if(i!==t.getModel())return{items:[]};let c=r.options||n;if(!(c.trigger==="onDemand"&&!r.isExplicitlyTriggered||c.triggerIf&&!c.triggerIf({text:BS(t),position:o,triggerType:c.trigger??Ux})))return YS({monaco:e,mdl:i,pos:o,token:l,isCompletionAccepted:r.isCompletionAccepted,options:c})},handleItemDidShow:(i,o,a)=>{var l,c;r.isExplicitlyTriggered=!1,r.hasRejectedCurrentCompletion=!1,!r.isCompletionAccepted&&(r.isCompletionVisible=!0,(c=(l=r.options||n).onCompletionShown)==null||c.call(l,a,o.range))},freeInlineCompletions:()=>{}}):null},nC={TAB:(e,t)=>t.keyCode===e.KeyCode.Tab,CMD_RIGHT_ARROW:(e,t)=>t.keyCode===e.KeyCode.RightArrow&&t.metaKey},rC=class{constructor(e,t,n){this.monaco=e,this.state=t,this.initialOptions=n}handleKeyEvent(e){let t=this.state.options||this.initialOptions,n={monaco:this.monaco,event:e,state:this.state,options:t};this.handleCompletionAcceptance(n),this.handleCompletionRejection(n)}handleCompletionAcceptance(e){var t,n;return e.state.isCompletionVisible&&this.isAcceptanceKey(e.event)?((n=(t=e.options).onCompletionAccepted)==null||n.call(t),e.state.isCompletionAccepted=!0,e.state.isCompletionVisible=!1,!0):(e.state.isCompletionAccepted=!1,!1)}handleCompletionRejection(e){var t,n;return this.shouldRejectCompletion(e)?((n=(t=e.options).onCompletionRejected)==null||n.call(t),e.state.hasRejectedCurrentCompletion=!0,!0):!1}shouldRejectCompletion(e){return e.state.isCompletionVisible&&!e.state.hasRejectedCurrentCompletion&&!e.state.isCompletionAccepted&&!this.isAcceptanceKey(e.event)}isAcceptanceKey(e){return Object.values(nC).some(t=>t(this.monaco,e))}},sC=(e,t,n,r)=>{let i=new rC(e,n,r);return t.onKeyDown(o=>i.handleKeyEvent(o))},Hx=(e,t,n)=>{let r=[];XS(t,ZS(n)),t.updateOptions({inlineSuggest:{enabled:!0}});try{let i=aa(t);if(!i)return Ro.warn("Completion is not registered properly. State not found."),oC();let o=tC(e,t,n);o&&r.push(o);let a=sC(e,t,i,n);return r.push(a),{deregister:()=>{for(let l of r)l.dispose();hc.clear(),$f(t)},trigger:()=>iC(t),updateOptions:l=>{eC(t,l(i.options||n))}}}catch(i){return n.onError?n.onError(i):Ro.report(i),{deregister:()=>{for(let o of r)o.dispose();$f(t)},trigger:()=>{},updateOptions:()=>{}}}},iC=e=>{let t=aa(e);if(!t){Ro.warn("Completion is not registered. Use `registerCompletion` to register completion first.");return}t.isExplicitlyTriggered=!0,e.trigger("keyboard","editor.action.inlineSuggest.trigger",{})},oC=()=>({deregister:()=>{},trigger:()=>{},updateOptions:()=>{}});function aC(){return`tool_${Date.now().toString(36)}`}function lC(e){return/^[a-zA-Z0-9_]+$/.test(e)}const cC=`def my_tool(tool_context: ToolContext, param1: str) -> dict:
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
`;function uC({onSelectTool:e}){const{project:t,updateProject:n,addCustomTool:r,updateCustomTool:i,removeCustomTool:o,selectedToolId:a,setSelectedToolId:l,builtinTools:c,mcpServers:u}=ct(),[d,p]=k.useState(""),[f,m]=k.useState(null),[y,w]=k.useState("tools"),[z,v]=k.useState(null),[x,g]=k.useState(""),[P,N]=k.useState(!1),[_,C]=k.useState(!1),[b,L]=k.useState(!1),[S,A]=k.useState(null),[M,q]=k.useState(null),[U,B]=k.useState({}),[ne,T]=k.useState({}),[$,R]=k.useState("");if(!t)return null;const j=t.mcp_servers||[],W=t.custom_tools.find(D=>D.id===a),G=j.find(D=>D.name===z);function h(D){l(D),e==null||e(D)}k.useEffect(()=>{W&&(p(W.code),q(null))},[a]),k.useEffect(()=>{G&&(g(JSON.stringify(G,null,2)),N(!1))},[z]),k.useEffect(()=>{if(!t)return;const D=F(t.mcp_servers||[]);R(JSON.stringify(D,null,2))},[t==null?void 0:t.mcp_servers]),k.useEffect(()=>{if(y==="mcp"&&j.length>0){const D=j.filter(se=>!U[se.name]||U[se.name]==="unknown");D.length>0&&D.forEach(se=>{ie(se.name)})}},[y,j.length]);function F(D){const se={};for(const me of D){const de={};me.connection_type==="stdio"?(de.command=me.command||"",de.args=me.args||[],Object.keys(me.env||{}).length>0&&(de.env=me.env)):me.connection_type==="sse"&&(de.url=me.url||"",Object.keys(me.headers||{}).length>0&&(de.headers=me.headers)),me.timeout&&me.timeout!==30&&(de.timeout=me.timeout),me.tool_filter&&(de.tool_filter=me.tool_filter),me.tool_name_prefix&&(de.tool_name_prefix=me.tool_name_prefix),se[me.name]=de}return{mcpServers:se}}function E(D){const se=[];for(const[me,de]of Object.entries(D.mcpServers||{})){const H={name:me,description:de.description||"",connection_type:de.url?"sse":"stdio",command:de.command,args:de.args||[],env:de.env||{},url:de.url,headers:de.headers||{},timeout:de.timeout||30,tool_filter:de.tool_filter||null,tool_name_prefix:de.tool_name_prefix};se.push(H)}return se}function Q(D){D!==void 0&&R(D)}function V(){try{const D=JSON.parse($),se=E(D);n({mcp_servers:se})}catch(D){alert("Invalid JSON: "+D.message)}}async function ie(D){const se=j.find(me=>me.name===D);if(se){B(me=>({...me,[D]:"testing"})),T(me=>({...me,[D]:""}));try{const me=await ec({connection_type:se.connection_type,command:se.command,args:se.args,env:se.env,url:se.url,headers:se.headers,timeout:se.timeout});B(de=>({...de,[D]:me.success?"connected":"error"})),!me.success&&me.error&&T(de=>({...de,[D]:me.error||"Unknown error"}))}catch(me){B(de=>({...de,[D]:"error"})),T(de=>({...de,[D]:me.message}))}}}function he(D){const se=u.find(de=>de.name===D);if(!se)return;if(j.some(de=>de.name===D)){alert(`Server "${D}" is already configured`);return}const me={name:se.name,description:se.description||"",connection_type:se.connection_type,command:se.command,args:se.args||[],env:se.env||{},url:se.url,headers:se.headers||{},timeout:se.timeout||30,tool_filter:se.tool_filter||null,tool_name_prefix:se.tool_name_prefix};n({mcp_servers:[...j,me]})}async function I(){for(const D of j)await ie(D.name)}function K(){const D=aC();r({id:D,name:"new_tool",description:"",module_path:"tools.custom",code:cC,state_keys_used:[]}),h(D)}function X(D,se){se.stopPropagation(),confirm("Delete this tool?")&&(o(D),a===D&&(e==null||e(null)))}function Y(D){W&&(D.name!==void 0&&(D.name===""||lC(D.name)?q(null):q("Name can only contain letters, numbers, and underscores")),i(W.id,D))}function le(D){D!==void 0&&W&&(p(D),Y({code:D}))}async function J(){if(W){C(!0);try{const D=await Pg(t.id,W.name,W.description,W.state_keys_used);D.success&&D.code?(p(D.code),Y({code:D.code})):(console.error("Failed to generate tool code:",D.error),alert("Failed to generate tool code: "+(D.error||"Unknown error")))}catch(D){console.error("Error generating tool code:",D),alert("Error generating tool code: "+D.message)}finally{C(!1)}}}const ee=k.useRef(null),oe=k.useCallback((D,se)=>{if(ee.current&&typeof ee.current=="function")try{ee.current()}catch{}try{const me=Hx(se,D,{language:"python",endpoint:"/api/code-completion",trigger:"onTyping"});typeof me=="function"?ee.current=me:ee.current=null}catch{ee.current=null}},[]);k.useEffect(()=>()=>{if(ee.current&&typeof ee.current=="function")try{ee.current()}catch{}},[]);function xe(D){D!==void 0&&(g(D),N(D!==JSON.stringify(G,null,2)))}function we(){if(G)try{const D=JSON.parse(x),se=G.name,me=j.map(de=>de.name===se?D:de);n({mcp_servers:me}),v(D.name),N(!1)}catch(D){alert("Invalid JSON: "+D.message)}}async function ze(){L(!0),A(null);try{const D=JSON.parse(x),se=await ec({connection_type:D.connection_type,command:D.command,args:D.args,env:D.env,url:D.url,headers:D.headers,timeout:D.timeout||30});if(A(se),se.success&&se.tools.length>0){const me={...D,tool_filter:se.tools.map(de=>de.name)};g(JSON.stringify(me,null,2)),N(!0)}}catch(D){A({success:!1,tools:[],error:D.message})}finally{L(!1)}}const be={};return t.custom_tools.forEach(D=>{const se=D.module_path||"tools";be[se]||(be[se]=[]),be[se].push(D)}),s.jsxs("div",{className:"tools-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("aside",{className:"tools-sidebar",children:[s.jsxs("div",{className:"sidebar-tabs",children:[s.jsxs("button",{className:`sidebar-tab ${y==="tools"?"active":""}`,onClick:()=>{w("tools"),v(null)},children:[s.jsx(Xt,{size:14}),"Tools"]}),s.jsxs("button",{className:`sidebar-tab ${y==="mcp"?"active":""}`,onClick:()=>{w("mcp"),l(null),m(null),v(null)},children:[s.jsx(ms,{size:14}),"MCP"]})]}),y==="tools"?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsxs("h3",{children:["Custom Tools (",t.custom_tools.length,")"]}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:K,children:[s.jsx(Je,{size:14}),"New"]})]}),s.jsxs("div",{className:"tools-tree",children:[c.length>0&&s.jsxs("div",{className:"module-group",children:[s.jsxs("div",{className:"module-header",children:[s.jsx(cb,{size:14}),"Built-in Tools"]}),c.map(D=>s.jsxs("div",{className:`tool-item builtin ${(f==null?void 0:f.name)===D.name?"selected":""}`,onClick:()=>{m(D),h(null),v(null)},children:[s.jsx(nc,{size:14}),s.jsx("span",{className:"tool-name",children:D.name})]},D.name))]}),t.custom_tools.length===0&&c.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(un,{size:32}),s.jsx("p",{children:"No tools defined yet"})]}):t.custom_tools.length>0&&Object.entries(be).map(([D,se])=>s.jsxs("div",{className:"module-group",children:[s.jsxs("div",{className:"module-header",children:[s.jsx(Fg,{size:14}),D]}),se.map(me=>s.jsxs("div",{className:`tool-item ${a===me.id?"selected":""}`,onClick:()=>{h(me.id),m(null),v(null)},children:[s.jsx(Xt,{size:14}),s.jsx("span",{className:"tool-name",children:me.name}),s.jsx("button",{className:"delete-btn",onClick:de=>X(me.id,de),children:s.jsx(De,{size:14})})]},me.id))]},D))]})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsxs("h3",{children:["MCP Servers (",j.length,")"]}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:I,title:"Test all server connections",children:s.jsx(an,{size:14})})]}),s.jsx("div",{className:"mcp-servers-list",children:j.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(ms,{size:32}),s.jsx("p",{children:"No MCP servers configured"}),s.jsx("p",{style:{fontSize:"12px",color:"var(--text-muted)"},children:"Edit the JSON to add servers"})]}):j.map(D=>{const se=U[D.name]||"unknown",me=ne[D.name];return s.jsxs("div",{className:"mcp-server-item-wrapper",children:[s.jsxs("div",{className:"mcp-server-item",children:[s.jsxs("div",{className:"mcp-server-info",children:[s.jsx(ms,{size:14}),s.jsx("span",{className:"mcp-server-name",children:D.name}),s.jsxs("span",{className:`mcp-status-badge ${se}`,children:[se==="testing"?s.jsx(Rn,{size:10,className:"spin"}):null,se==="unknown"&&"●",se==="connected"&&"●",se==="error"&&"●"]})]}),s.jsxs("div",{className:"mcp-server-actions",children:[s.jsx("span",{className:"mcp-server-type",children:D.connection_type}),s.jsxs("button",{className:"btn btn-sm",onClick:()=>ie(D.name),disabled:se==="testing",title:"Test server connection",style:{display:"flex",alignItems:"center",gap:4},children:[se==="testing"?s.jsx(Rn,{size:12,className:"spin"}):s.jsx(an,{size:12}),s.jsx("span",{style:{fontSize:11},children:"Test"})]})]})]}),se==="error"&&me&&s.jsxs("div",{className:"mcp-server-error",children:[s.jsx("span",{style:{fontWeight:500,color:"var(--error)"},children:"Error:"})," ",me]})]},D.name)})})]})]}),s.jsx("div",{className:"tool-editor",children:f?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(nc,{size:20,style:{color:"var(--accent-secondary)"}}),s.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:f.name}),s.jsx("span",{className:"badge badge-muted",children:"Built-in"})]}),s.jsxs("div",{className:"builtin-tool-info",children:[s.jsxs("div",{className:"info-section",children:[s.jsx("h4",{children:"Description"}),s.jsx("p",{children:f.description||"No description available."})]}),s.jsxs("div",{className:"info-section",children:[s.jsx("h4",{children:"Usage"}),s.jsx("p",{children:"This is a built-in tool provided by ADK. Add it to any LLM agent's tools list to enable it."}),s.jsxs("code",{children:['tools: ["',f.name,'"]']})]}),s.jsxs("div",{className:"info-section",children:[s.jsx("h4",{children:"Note"}),s.jsx("p",{children:"Built-in tools are read-only and cannot be modified. Create a custom tool if you need different behavior."})]})]})]}):W?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(Xt,{size:20,style:{color:"var(--accent-primary)"}}),s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[s.jsx("input",{type:"text",value:W.name,onChange:D=>Y({name:D.target.value}),placeholder:"Tool name",style:{borderColor:M?"var(--error)":void 0}}),M&&s.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:M})]})]}),s.jsxs("div",{className:"editor-meta",children:[s.jsxs("div",{className:"meta-field grow",children:[s.jsx("label",{children:"Description"}),s.jsx("input",{type:"text",value:W.description,onChange:D=>Y({description:D.target.value}),placeholder:"What does this tool do?"})]}),s.jsxs("div",{className:"meta-field",children:[s.jsx("label",{children:"Module Path"}),s.jsx("input",{type:"text",value:W.module_path,onChange:D=>Y({module_path:D.target.value}),placeholder:"tools.custom",style:{width:180}})]})]}),s.jsxs("div",{className:"code-actions",children:[s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:J,disabled:_||!W.name||!W.description,title:!W.name||!W.description?"Add a name and description first":"Generate code using AI",children:_?s.jsxs(s.Fragment,{children:[s.jsx(Rn,{size:14,className:"spinning"}),"Generating..."]}):s.jsxs(s.Fragment,{children:[s.jsx(bu,{size:14}),"Write Tool"]})}),s.jsx("span",{className:"action-hint",children:"AI will generate code based on the tool name, description, and selected state keys"})]}),s.jsx("div",{className:"code-editor",children:s.jsx(Ft,{height:"100%",language:"python",theme:"vs-dark",value:d,onChange:le,onMount:oe,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12}}})}),s.jsxs("div",{className:"state-keys-panel",children:[s.jsxs("h4",{children:[s.jsx(yu,{size:14})," State Keys Used"]}),s.jsx("div",{className:"state-key-chips",children:t.app.state_keys.length===0?s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"No state keys defined. Add them in App Config."}):t.app.state_keys.map(D=>{const se=W.state_keys_used.includes(D.name);return s.jsxs("label",{className:`state-key-chip ${se?"selected":""}`,title:D.description,children:[s.jsx("input",{type:"checkbox",checked:se,onChange:me=>{const de=me.target.checked?[...W.state_keys_used,D.name]:W.state_keys_used.filter(H=>H!==D.name);Y({state_keys_used:de})}}),D.name,s.jsxs("span",{style:{color:"var(--text-muted)",fontSize:11},children:["(",D.type,")"]})]},D.name)})})]})]}):G?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(ms,{size:20,style:{color:"var(--accent-primary)"}}),s.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:G.name}),s.jsx("span",{className:"badge badge-info",children:G.connection_type}),P&&s.jsx("span",{className:"unsaved-badge",children:"Unsaved"}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:ze,disabled:b,title:"Test connection and discover available tools",children:[b?s.jsx(Rn,{size:14,className:"spin"}):s.jsx(xu,{size:14}),b?"Testing...":"Test Connection"]}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:we,disabled:!P,children:[s.jsx(To,{size:14}),"Save"]})]}),S&&s.jsx("div",{className:`mcp-test-result ${S.success?"success":"error"}`,children:S.success?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"test-result-header",children:["✓ Connected! Found ",S.tools.length," tools"]}),S.tools.length>0&&s.jsxs("div",{className:"test-result-tools",children:[s.jsx("strong",{children:"Available tools:"}),s.jsx("ul",{children:S.tools.map(D=>s.jsxs("li",{children:[s.jsx("code",{children:D.name}),D.description&&s.jsxs("span",{children:[" — ",D.description]})]},D.name))}),s.jsx("p",{className:"hint",children:'The tool_filter has been updated with these tools. Click "Save" to apply.'})]})]}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"test-result-header",children:"✗ Connection failed"}),s.jsx("div",{className:"test-result-error",children:S.error})]})}),s.jsx("div",{className:"mcp-info",children:s.jsx("p",{children:'Configure your MCP server using JSON. Click "Test Connection" to verify and discover available tools.'})}),s.jsx("div",{className:"code-editor",children:s.jsx(Ft,{height:"100%",language:"json",theme:"vs-dark",value:x,onChange:xe,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},formatOnPaste:!0}})}),s.jsxs("div",{className:"mcp-help",children:[s.jsx("h4",{children:"Schema Reference"}),s.jsxs("div",{className:"schema-fields",children:[s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"name"}),s.jsx("span",{children:"Unique identifier for this server"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"description"}),s.jsx("span",{children:"Human-readable description"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"connection_type"}),s.jsx("span",{children:'"stdio" | "sse" | "http"'})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"command"}),s.jsx("span",{children:"Command to run (for stdio)"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"args"}),s.jsx("span",{children:"Array of command arguments"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"env"}),s.jsx("span",{children:"Environment variables object"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"url"}),s.jsx("span",{children:"Server URL (for sse/http)"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"tool_filter"}),s.jsx("span",{children:"Array of tool names to include (null/omit = all tools, [] = no tools)"})]})]})]})]}):y==="mcp"?s.jsxs("div",{className:"mcp-json-editor",children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(ms,{size:20,style:{color:"var(--accent-primary)"}}),s.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:"mcp.json"}),s.jsx("span",{className:"badge badge-muted",children:"Model Context Protocol"}),s.jsxs("select",{value:"",onChange:D=>{D.target.value&&he(D.target.value)},style:{padding:"6px 10px",fontSize:"12px",borderRadius:"6px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",color:"var(--text-primary)"},children:[s.jsx("option",{value:"",children:"+ Add known server..."}),u.filter(D=>!j.some(se=>se.name===D.name)).map(D=>s.jsxs("option",{value:D.name,children:[D.name," - ",D.description||"No description"]},D.name))]}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:V,children:[s.jsx(To,{size:14}),"Apply Changes"]})]}),s.jsx("div",{className:"mcp-json-info",children:s.jsxs("p",{children:["Configure your MCP servers using the standard ",s.jsx("code",{children:"mcp.json"})," format. Select a known server from the dropdown to add its configuration."]})}),s.jsx("div",{className:"editor-content",style:{flex:1},children:s.jsx(Ft,{height:"100%",defaultLanguage:"json",value:$,onChange:Q,theme:"vs-dark",options:{minimap:{enabled:!1},fontSize:14,lineNumbers:"on",scrollBeyondLastLine:!1,wordWrap:"on",tabSize:2,formatOnPaste:!0,formatOnType:!0}})})]}):s.jsxs("div",{className:"empty-state",children:[s.jsx(un,{size:48}),s.jsxs("p",{children:["Select a tool to view",s.jsx("br",{}),"or create a new custom tool"]})]})})]})}function dC(){return`callback_${Date.now().toString(36)}`}function Df(e){return/^[a-zA-Z0-9_]+$/.test(e)}function qx(e){switch(e){case"before_agent":case"after_agent":return`from google.adk.agents.callback_context import CallbackContext
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
`;default:return qx("before_agent")}}function pC({onSelectCallback:e}){var b,L;const{project:t,updateProject:n,addCustomCallback:r,updateCustomCallback:i,removeCustomCallback:o}=ct(),[a,l]=k.useState(""),[c,u]=k.useState(null),[d,p]=k.useState(null),[f,m]=k.useState(!1),y=k.useRef(null);if(!t)return null;const w=t.custom_callbacks||[],z=w.find(S=>S.id===c);function v(S){u(S),e==null||e(S)}k.useEffect(()=>{z?(l(z.code),p(null)):l("")},[c,z]);function x(){const S=dC(),A={id:S,name:"new_callback",description:"",module_path:"callbacks.custom",code:qx("before_agent"),state_keys_used:[]};r(A),v(S)}function g(S,A){A.stopPropagation(),confirm("Delete this callback?")&&(o(S),c===S&&(e==null||e(null),u(null),l("")))}function P(){if(!c)return;const S=w.find(q=>q.id===c);if(!S)return;const A=S.name.trim();if(!A){alert("Please enter a name");return}if(!Df(A)){p("Name must contain only alphanumeric characters and underscores");return}if(w.find(q=>q.name===A&&q.id!==S.id)){p("A callback with this name already exists");return}i(S.id,{code:a,name:A,description:S.description,module_path:S.module_path,state_keys_used:S.state_keys_used}),p(null)}function N(S,A){y.current=A;try{Hx(A,{endpoint:"/api/code-completion",language:"python"})}catch(M){console.warn("Failed to register Monacopilot completion:",M)}}async function _(){if(z){m(!0);try{let S="before_agent";const A=z.name.toLowerCase(),M=z.description.toLowerCase();A.includes("after_agent")||M.includes("after agent")?S="after_agent":A.includes("before_model")||M.includes("before model")?S="before_model":A.includes("after_model")||M.includes("after model")?S="after_model":A.includes("before_tool")||M.includes("before tool")?S="before_tool":A.includes("after_tool")||M.includes("after tool")?S="after_tool":(A.includes("before_agent")||M.includes("before agent"))&&(S="before_agent");const q=await Lg(t.id,z.name,z.description,S,z.state_keys_used);q.success&&q.code?(l(q.code),i(z.id,{code:q.code})):(console.error("Failed to generate callback code:",q.error),alert("Failed to generate callback code: "+(q.error||"Unknown error")))}catch(S){console.error("Error generating callback code:",S),alert("Error generating callback code: "+S.message)}finally{m(!1)}}}const C=((L=(b=t.app)==null?void 0:b.state_keys)==null?void 0:L.map(S=>S.name))||[];return s.jsxs("div",{className:"tools-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"tools-sidebar",children:[s.jsxs("div",{className:"tools-sidebar-header",children:[s.jsx("h3",{children:"Callbacks"}),s.jsx("button",{className:"btn btn-primary btn-sm",onClick:x,title:"Add Callback",children:s.jsx(Je,{size:16})})]}),s.jsx("div",{className:"tools-list",children:w.length===0?s.jsx("div",{style:{padding:"16px",color:"var(--text-secondary)",fontSize:"14px"},children:"No callbacks yet. Click + to add one."}):w.map(S=>s.jsxs("div",{className:`tool-item ${c===S.id?"selected":""}`,onClick:()=>v(S.id),children:[s.jsxs("div",{style:{flex:1},children:[s.jsx("div",{className:"tool-item-name",children:S.name}),S.description&&s.jsx("div",{className:"tool-item-type",style:{fontSize:"11px",color:"var(--text-secondary)",marginTop:"2px"},children:S.description})]}),s.jsx("div",{className:"tool-item-actions",children:s.jsx("button",{className:"btn btn-icon btn-sm",onClick:A=>g(S.id,A),title:"Delete",children:s.jsx(De,{size:14})})})]},S.id))})]}),s.jsx("div",{className:"tools-editor",children:z?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"tools-editor-header",children:[s.jsx("h3",{children:"Edit Callback"}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:P,children:[s.jsx(To,{size:16,style:{marginRight:"6px"}}),"Save"]})]}),s.jsxs("div",{className:"tools-editor-content",style:{padding:"16px",overflowY:"auto"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Name"}),s.jsx("input",{type:"text",value:z.name,onChange:S=>{const A=S.target.value;i(z.id,{name:A}),d&&Df(A)&&p(null)},className:d?"error":""}),d&&s.jsx("div",{className:"error-message",children:d})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Description"}),s.jsx("textarea",{value:z.description,onChange:S=>i(z.id,{description:S.target.value}),rows:2,placeholder:"Describe what this callback does..."})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Module Path"}),s.jsx("input",{type:"text",value:z.module_path,onChange:S=>i(z.id,{module_path:S.target.value}),placeholder:"callbacks.custom"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"State Keys Used"}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"8px"},children:C.map(S=>{const A=z.state_keys_used.includes(S);return s.jsxs("button",{type:"button",className:`btn btn-sm ${A?"btn-primary":"btn-secondary"}`,onClick:()=>{const M=A?z.state_keys_used.filter(q=>q!==S):[...z.state_keys_used,S];i(z.id,{state_keys_used:M})},children:[s.jsx(yu,{size:12,style:{marginRight:"4px"}}),S]},S)})}),C.length===0&&s.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"12px",marginTop:"4px"},children:"No state keys defined in App Config"})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[s.jsx("label",{children:"Code"}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:_,disabled:f||!z.name,title:z.name?"Generate code using AI":"Add a name first",children:f?s.jsxs(s.Fragment,{children:[s.jsx(Rn,{size:14,className:"spinning"}),"Generating..."]}):s.jsxs(s.Fragment,{children:[s.jsx(bu,{size:14}),"Generate"]})})]}),s.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"8px"},children:"AI will generate code based on the callback name, description, and selected state keys"}),s.jsx("div",{className:"code-editor-container",children:s.jsx(Ft,{height:"100%",language:"python",theme:"vs-dark",value:a,onChange:S=>l(S||""),onMount:N,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0}})})]})]})]}):s.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)"},children:"Select a callback to edit, or create a new one"})})]})}function fC(e){try{const t=new URL(e),n=t.host,r=t.pathname,i=[{pattern:n,label:`${n} (exact domain)`},{pattern:`${n}/*`,label:`${n}/* (domain + any path)`}],o=n.split(".");if(o.length>2){const a=o.slice(-2).join(".");i.push({pattern:`*.${a}`,label:`*.${a} (all subdomains)`})}if(r&&r!=="/"){const a=r.split("/").filter(Boolean);a.length>0&&i.push({pattern:`${n}/${a[0]}/*`,label:`${n}/${a[0]}/* (specific path)`})}return i}catch{return[{pattern:e,label:e}]}}const Pe={overlay:{position:"fixed",inset:0,backgroundColor:"rgba(0, 0, 0, 0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999},dialog:{backgroundColor:"#12121a",border:"1px solid rgba(245, 158, 11, 0.5)",borderRadius:8,boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.5)",width:500,maxWidth:"90vw",overflow:"hidden"},header:{display:"flex",alignItems:"center",gap:8,padding:12,borderBottom:"1px solid #374151",backgroundColor:"rgba(120, 53, 15, 0.2)"},headerIcon:{color:"#fbbf24"},headerTitle:{fontWeight:600,color:"#fcd34d",fontSize:14},closeButton:{marginLeft:"auto",background:"none",border:"none",color:"#6b7280",cursor:"pointer",padding:4,display:"flex",alignItems:"center"},content:{padding:16,display:"flex",flexDirection:"column",gap:16},sourceText:{fontSize:13,color:"#9ca3af"},requestBox:{backgroundColor:"#0a0a0f",borderRadius:6,border:"1px solid #374151",padding:12,fontFamily:"'SF Mono', 'Consolas', monospace",fontSize:13},methodBadge:e=>({fontWeight:700,color:e==="POST"?"#4ade80":e==="GET"?"#60a5fa":"#9ca3af",marginRight:8}),urlText:{color:"#d1d5db",wordBreak:"break-all"},headersText:{marginTop:8,fontSize:11,color:"#6b7280"},label:{fontSize:13,color:"#9ca3af",marginBottom:6},select:{width:"100%",padding:"10px 12px",backgroundColor:"#1a1a24",border:"1px solid #4b5563",borderRadius:6,fontSize:13,color:"#e5e7eb",cursor:"pointer",appearance:"none",backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 12px center",paddingRight:36},customInput:{width:"100%",padding:"10px 12px",backgroundColor:"#1a1a24",border:"1px solid #4b5563",borderRadius:6,fontSize:13,color:"#e5e7eb",fontFamily:"'SF Mono', 'Consolas', monospace"},radioGroup:{display:"flex",gap:16,marginTop:8},radioLabel:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"#9ca3af",cursor:"pointer"},backLink:{marginLeft:"auto",fontSize:12,color:"#6b7280",background:"none",border:"none",cursor:"pointer"},checkboxLabel:{display:"flex",alignItems:"center",gap:8,fontSize:13,color:"#9ca3af",cursor:"pointer"},footer:{display:"flex",alignItems:"center",gap:8,padding:12,borderTop:"1px solid #374151",backgroundColor:"#0a0a0f"},button:e=>{const t={display:"flex",alignItems:"center",gap:6,padding:"8px 16px",borderRadius:6,fontSize:13,fontWeight:500,cursor:"pointer",border:"1px solid",transition:"all 0.15s ease"};switch(e){case"deny":return{...t,backgroundColor:"rgba(220, 38, 38, 0.2)",borderColor:"rgba(239, 68, 68, 0.5)",color:"#f87171"};case"once":return{...t,backgroundColor:"rgba(75, 85, 99, 0.2)",borderColor:"rgba(107, 114, 128, 0.5)",color:"#d1d5db"};case"pattern":return{...t,backgroundColor:"rgba(22, 163, 74, 0.2)",borderColor:"rgba(34, 197, 94, 0.5)",color:"#4ade80"}}},timerContainer:{marginLeft:"auto",display:"flex",alignItems:"center",gap:6,color:"#6b7280",fontSize:13},progressBar:{height:3,backgroundColor:"#1f2937"},progressFill:e=>({height:"100%",backgroundColor:"#f59e0b",transition:"width 1s linear",width:`${e}%`})};function mC({request:e,timeout:t,onApprove:n,onDeny:r,onClose:i}){const[o,a]=k.useState(""),[l,c]=k.useState("exact"),[u,d]=k.useState(!1),[p,f]=k.useState(""),[m,y]=k.useState(!1),[w,z]=k.useState(t),v=fC(e.url);k.useEffect(()=>{v.length>0&&!o&&a(v[0].pattern)},[v,o]),k.useEffect(()=>{const C=setInterval(()=>{z(b=>b<=1?(r(),0):b-1)},1e3);return()=>clearInterval(C)},[r]);const x=k.useCallback(()=>{n()},[n]),g=k.useCallback(()=>{n(m?p:o,l,u)},[n,m,p,o,l,u]),P=w/t*100,N=e.source.startsWith("mcp:"),_=N?e.source.substring(4):"agent";return s.jsx("div",{style:Pe.overlay,children:s.jsxs("div",{style:Pe.dialog,children:[s.jsxs("div",{style:Pe.header,children:[s.jsx(X0,{size:18,style:Pe.headerIcon}),s.jsx("span",{style:Pe.headerTitle,children:"Network Request Approval"}),s.jsx("button",{style:Pe.closeButton,onClick:i,children:s.jsx(wu,{size:16})})]}),s.jsxs("div",{style:Pe.content,children:[s.jsx("div",{style:Pe.sourceText,children:N?s.jsxs(s.Fragment,{children:['MCP server "',s.jsx("span",{style:{color:"#22d3ee"},children:_}),'" wants to connect to:']}):s.jsx(s.Fragment,{children:"Agent wants to connect to:"})}),s.jsxs("div",{style:Pe.requestBox,children:[s.jsxs("div",{children:[s.jsx("span",{style:Pe.methodBadge(e.method),children:e.method}),s.jsx("span",{style:Pe.urlText,children:e.url})]}),e.headers&&Object.keys(e.headers).length>0&&s.jsxs("div",{style:Pe.headersText,children:["Headers: ",Object.keys(e.headers).join(", ")]})]}),s.jsxs("div",{children:[s.jsx("div",{style:Pe.label,children:"Allow pattern:"}),m?s.jsxs("div",{children:[s.jsx("input",{type:"text",value:p,onChange:C=>f(C.target.value),placeholder:"e.g., *.example.com/*",style:Pe.customInput}),s.jsxs("div",{style:Pe.radioGroup,children:[s.jsxs("label",{style:Pe.radioLabel,children:[s.jsx("input",{type:"radio",checked:l==="wildcard",onChange:()=>c("wildcard")}),"Wildcard"]}),s.jsxs("label",{style:Pe.radioLabel,children:[s.jsx("input",{type:"radio",checked:l==="regex",onChange:()=>c("regex")}),"Regex"]}),s.jsx("button",{onClick:()=>y(!1),style:Pe.backLink,children:"← Back to suggestions"})]})]}):s.jsxs("select",{value:o,onChange:C=>{C.target.value==="__custom__"?(y(!0),f(o)):a(C.target.value)},style:Pe.select,children:[v.map(C=>s.jsx("option",{value:C.pattern,children:C.label},C.pattern)),s.jsx("option",{value:"__custom__",children:"Custom pattern..."})]})]}),s.jsxs("label",{style:Pe.checkboxLabel,children:[s.jsxs("span",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:u,onChange:C=>d(C.target.checked)}),s.jsx("span",{className:"toggle-slider"})]}),"Save to project (persists across sessions)"]})]}),s.jsxs("div",{style:Pe.footer,children:[s.jsxs("button",{onClick:r,style:Pe.button("deny"),children:[s.jsx(eb,{size:14}),"Deny"]}),s.jsxs("button",{onClick:x,style:Pe.button("once"),children:[s.jsx(hu,{size:14}),"Allow Once"]}),s.jsxs("button",{onClick:g,style:Pe.button("pattern"),children:[s.jsx(Hg,{size:14}),"Allow Pattern"]}),s.jsxs("div",{style:Pe.timerContainer,children:[s.jsx(ni,{size:14}),s.jsxs("span",{children:[w,"s"]})]})]}),s.jsx("div",{style:Pe.progressBar,children:s.jsx("div",{style:Pe.progressFill(P)})})]})})}const Ff={agent_start:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},agent_end:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},tool_call:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},tool_result:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},model_call:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},model_response:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},state_change:{bg:"#3d0d1f",fg:"#fda4af",border:"#f43f5e"},transfer:{bg:"#0d2d3d",fg:"#7dd3fc",border:"#0ea5e9"},callback_start:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},callback_end:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"}},hC={agent_start:tc,agent_end:tc,tool_call:Xt,tool_result:Xt,model_call:gu,model_response:zo,state_change:yn,transfer:Kg,callback_start:un,callback_end:un};function gC(e){var t,n,r,i,o,a,l,c,u,d,p,f,m,y,w,z,v,x,g,P,N;switch(e.event_type){case"agent_start":return`START ${e.agent_name}`;case"agent_end":return(t=e.data)!=null&&t.error?`END ${e.agent_name} [ERROR]`:`END ${e.agent_name}`;case"tool_call":const C=Object.entries(((n=e.data)==null?void 0:n.args)||{}).map(([R,j])=>{const W=j!=null?JSON.stringify(j):"null";return`${R}=${W.slice(0,20)}`}).join(", ")||"";return`CALL ${((r=e.data)==null?void 0:r.tool_name)||"unknown"}(${C.slice(0,60)}${C.length>60?"...":""})`;case"tool_result":const b=(i=e.data)==null?void 0:i.result;let L="";if((a=(o=b==null?void 0:b.content)==null?void 0:o[0])!=null&&a.text)L=String(b.content[0].text).slice(0,60);else if(typeof b=="string")L=b.slice(0,60);else if(b!=null){const R=JSON.stringify(b);L=R?R.slice(0,60):""}else L="";return`RESULT ${((l=e.data)==null?void 0:l.tool_name)||"unknown"} → ${L}${L.length>=60?"...":""}`;case"model_call":return`LLM_REQ ${((u=(c=e.data)==null?void 0:c.contents)==null?void 0:u.length)||0} msgs, ${((d=e.data)==null?void 0:d.tool_count)||0} tools`;case"model_response":const S=((f=(p=e.data)==null?void 0:p.response_content)==null?void 0:f.parts)||((m=e.data)==null?void 0:m.parts)||[],A=S.find(R=>(R==null?void 0:R.type)==="function_call");if(A)return`LLM_RSP → ${A.name||"unknown"}()`;const M=S.find(R=>(R==null?void 0:R.type)==="text");if(M!=null&&M.text){const R=String(M.text);return`LLM_RSP "${R.slice(0,50)}${R.length>50?"...":""}"`}return`LLM_RSP (${((y=e.data)==null?void 0:y.finish_reason)||"complete"})`;case"state_change":return`STATE ${Object.keys(((w=e.data)==null?void 0:w.state_delta)||{}).join(", ")}`;case"transfer":return`TRANSFER → ${((z=e.data)==null?void 0:z.target)||"unknown"}`;case"callback_start":const U=((v=e.data)==null?void 0:v.callback_name)||"unknown",B=((x=e.data)==null?void 0:x.callback_type)||"";return`CALLBACK START ${B?`[${B}]`:""} ${U}`;case"callback_end":const ne=((g=e.data)==null?void 0:g.callback_name)||"unknown",T=((P=e.data)==null?void 0:P.callback_type)||"",$=(N=e.data)!=null&&N.error?" [ERROR]":"";return`CALLBACK END ${T?`[${T}]`:""} ${ne}${$}`;default:return e.event_type.toUpperCase()}}function xC(e,t){const n=e-t;return n<1?`+${(n*1e3).toFixed(0)}ms`:n<60?`+${n.toFixed(2)}s`:`+${Math.floor(n/60)}m${(n%60).toFixed(0)}s`}function yC({event:e}){var o,a,l,c,u,d,p,f,m,y,w,z,v,x,g,P;const[t,n]=k.useState(new Set(["instruction","messages","result","response","state_delta","data"])),r=N=>{const _=new Set(t);_.has(N)?_.delete(N):_.add(N),n(_)},i=(N,_=0,C=!1)=>{const b="  ".repeat(_),L="  ".repeat(_+1);if(N===null)return s.jsx("span",{className:"json-null",children:"null"});if(N===void 0)return s.jsx("span",{className:"json-undefined",children:"undefined"});if(typeof N=="boolean")return s.jsx("span",{className:"json-boolean",children:N.toString()});if(typeof N=="number")return s.jsx("span",{className:"json-number",children:N});if(typeof N=="string"){const S=N.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\t/g,"\\t");return S.length>300&&_>0?s.jsxs("span",{className:"json-string",children:['"',S.slice(0,300),'..." ',s.jsxs("span",{className:"json-truncated",children:["(",N.length," chars)"]})]}):s.jsxs("span",{className:"json-string",children:['"',S,'"']})}if(Array.isArray(N))return N.length===0?s.jsx("span",{className:"json-bracket",children:"[]"}):N.every(A=>A===null||typeof A!="object")&&N.length<=3?s.jsxs("span",{className:"json-inline",children:[s.jsx("span",{className:"json-bracket",children:"["}),N.map((A,M)=>s.jsxs("span",{children:[i(A,_+1,!0),M<N.length-1&&s.jsx("span",{className:"json-comma",children:", "})]},M)),s.jsx("span",{className:"json-bracket",children:"]"})]}):s.jsxs("span",{className:"json-block",children:[s.jsx("span",{className:"json-bracket",children:"["}),N.map((A,M)=>s.jsxs("span",{children:[`
`+L,i(A,_+1),M<N.length-1&&s.jsx("span",{className:"json-comma",children:","})]},M)),`
`+b,s.jsx("span",{className:"json-bracket",children:"]"})]});if(typeof N=="object"){const S=Object.entries(N);return S.length===0?s.jsx("span",{className:"json-bracket",children:"{}"}):S.length<=2&&S.every(([,M])=>M===null||typeof M!="object")&&C?s.jsxs("span",{className:"json-inline",children:[s.jsx("span",{className:"json-bracket",children:"{"}),S.map(([M,q],U)=>s.jsxs("span",{children:[s.jsxs("span",{className:"json-key",children:['"',M,'"']}),s.jsx("span",{className:"json-colon",children:": "}),i(q,_+1,!0),U<S.length-1&&s.jsx("span",{className:"json-comma",children:", "})]},M)),s.jsx("span",{className:"json-bracket",children:"}"})]}):s.jsxs("span",{className:"json-block",children:[s.jsx("span",{className:"json-bracket",children:"{"}),S.map(([M,q],U)=>s.jsxs("span",{children:[`
`+L,s.jsxs("span",{className:"json-key",children:['"',M,'"']}),s.jsx("span",{className:"json-colon",children:": "}),i(q,_+1),U<S.length-1&&s.jsx("span",{className:"json-comma",children:","})]},M)),`
`+b,s.jsx("span",{className:"json-bracket",children:"}"})]})}return String(N)};return s.jsxs("div",{className:"event-detail",children:[s.jsxs("div",{className:"detail-header",children:[s.jsx("span",{className:"detail-type",children:e.event_type}),s.jsx("span",{className:"detail-agent",children:e.agent_name}),s.jsx("span",{className:"detail-time",children:new Date(e.timestamp*1e3).toISOString()})]}),s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("data"),children:[t.has("data")?s.jsx(Rt,{size:12}):s.jsx(Mt,{size:12}),s.jsx("span",{children:"Event Data"})]}),t.has("data")&&s.jsx("div",{className:"section-content json-viewer",children:i(e.data)})]}),e.event_type==="agent_start"&&((o=e.data)==null?void 0:o.instruction)&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("instruction"),children:[t.has("instruction")?s.jsx(Rt,{size:12}):s.jsx(Mt,{size:12}),s.jsx("span",{children:"Instruction"}),s.jsxs("span",{className:"char-count",children:[e.data.instruction.length," chars"]})]}),t.has("instruction")&&s.jsx("div",{className:"section-content",children:s.jsx("pre",{className:"instruction-text",children:e.data.instruction})})]}),e.event_type==="model_call"&&((a=e.data)==null?void 0:a.contents)&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("messages"),children:[t.has("messages")?s.jsx(Rt,{size:12}):s.jsx(Mt,{size:12}),s.jsxs("span",{children:["Messages (",e.data.contents.length,")"]})]}),t.has("messages")&&s.jsx("div",{className:"section-content",children:e.data.contents.map((N,_)=>{var C;return s.jsxs("div",{className:"message-item",children:[s.jsx("span",{className:`message-role ${N.role}`,children:N.role}),s.jsx("div",{className:"message-parts",children:(C=N.parts)==null?void 0:C.map((b,L)=>s.jsxs("div",{className:"message-part",children:[b.text&&s.jsx("pre",{children:b.text}),b.function_call&&s.jsxs("div",{className:"function-call",children:[s.jsx("strong",{children:b.function_call.name}),s.jsx("pre",{children:JSON.stringify(b.function_call.args,null,2)})]}),b.function_response&&s.jsxs("div",{className:"function-response",children:[s.jsx("strong",{children:b.function_response.name}),s.jsx("pre",{children:JSON.stringify(b.function_response.response,null,2)})]})]},L))})]},_)})})]}),e.event_type==="tool_result"&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("result"),children:[t.has("result")?s.jsx(Rt,{size:12}):s.jsx(Mt,{size:12}),s.jsx("span",{children:"Tool Result"})]}),t.has("result")&&s.jsx("div",{className:"section-content",children:s.jsx("pre",{className:"result-content",children:((d=(u=(c=(l=e.data)==null?void 0:l.result)==null?void 0:c.content)==null?void 0:u[0])==null?void 0:d.text)||(typeof((p=e.data)==null?void 0:p.result)=="string"?e.data.result:JSON.stringify((f=e.data)==null?void 0:f.result,null,2))})})]}),e.event_type==="model_response"&&((m=e.data)==null?void 0:m.parts)&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("response"),children:[t.has("response")?s.jsx(Rt,{size:12}):s.jsx(Mt,{size:12}),s.jsxs("span",{children:["Response (",e.data.parts.length," part",e.data.parts.length!==1?"s":"",")"]}),e.data.token_counts&&s.jsxs("span",{className:"token-badge",children:[e.data.token_counts.input,"↑ ",e.data.token_counts.output,"↓"]})]}),t.has("response")&&s.jsx("div",{className:"section-content",children:e.data.parts.map((N,_)=>s.jsxs("div",{className:"response-part",children:[N.type==="text"&&N.text&&s.jsx("pre",{className:"response-text",children:N.text}),N.type==="function_call"&&s.jsxs("div",{className:"function-call",children:[s.jsxs("strong",{children:["→ ",N.name,"()"]}),N.args&&Object.keys(N.args).length>0&&s.jsx("pre",{children:JSON.stringify(N.args,null,2)})]}),N.thought&&s.jsx("div",{className:"thought-indicator",children:"💭 Thinking"})]},_))})]}),(e.event_type==="callback_start"||e.event_type==="callback_end")&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("callback_info"),children:[t.has("callback_info")?s.jsx(Rt,{size:12}):s.jsx(Mt,{size:12}),s.jsx("span",{children:"Callback Information"})]}),t.has("callback_info")&&s.jsxs("div",{className:"section-content",children:[s.jsxs("div",{children:[s.jsx("strong",{children:"Name:"})," ",((y=e.data)==null?void 0:y.callback_name)||"unknown"]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Type:"})," ",((w=e.data)==null?void 0:w.callback_type)||"unknown"]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Module Path:"})," ",((z=e.data)==null?void 0:z.module_path)||"unknown"]}),((v=e.data)==null?void 0:v.error)&&s.jsxs("div",{style:{color:"#ef4444",marginTop:"8px"},children:[s.jsxs("div",{children:[s.jsx("strong",{children:"Error:"})," ",e.data.error]}),((x=e.data)==null?void 0:x.error_type)&&s.jsxs("div",{style:{marginTop:"4px",fontSize:"0.9em",opacity:.8},children:[s.jsx("strong",{children:"Type:"})," ",e.data.error_type]}),((g=e.data)==null?void 0:g.stack_trace)&&s.jsxs("div",{style:{marginTop:"8px"},children:[s.jsx("strong",{children:"Stack Trace:"}),s.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"300px",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:e.data.stack_trace})]})]})]})]}),e.event_type==="state_change"&&((P=e.data)==null?void 0:P.state_delta)&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("state_delta"),children:[t.has("state_delta")?s.jsx(Rt,{size:12}):s.jsx(Mt,{size:12}),s.jsxs("span",{children:["State Changes (",Object.keys(e.data.state_delta).length,")"]})]}),t.has("state_delta")&&s.jsx("div",{className:"section-content",children:Object.entries(e.data.state_delta).map(([N,_])=>s.jsxs("div",{className:"state-delta-item",children:[s.jsx("div",{className:"state-delta-key",children:N}),s.jsx("pre",{className:"state-delta-value",children:typeof _=="string"?_:JSON.stringify(_,null,2)})]},N))})]})]})}function vC({content:e,title:t,onClose:n}){return s.jsxs("div",{className:"modal-overlay",onClick:n,children:[s.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h3",{children:t}),s.jsx("button",{className:"modal-close",onClick:n,children:"×"})]}),s.jsx("div",{className:"modal-body markdown-content",children:s.jsx(Fx,{children:e})})]}),s.jsx("style",{children:`
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
      `})]})}function bC({events:e,selectedEventIndex:t,project:n}){const[r,i]=k.useState(null),o=k.useMemo(()=>{var u;const l={};return(u=n==null?void 0:n.app)!=null&&u.state_keys&&n.app.state_keys.forEach(d=>{l[d.name]={value:void 0,timestamp:null,defined:!0,description:d.description,type:d.type}}),n!=null&&n.agents&&n.agents.forEach(d=>{if(d.type==="LlmAgent"&&d.output_key){const p=d.output_key;l[p]||(l[p]={value:void 0,timestamp:null,defined:!0,description:`Output from ${d.name}`,type:"string"})}}),(t!==null?e.slice(0,t+1):e).filter(d=>d.event_type==="state_change").forEach(d=>{var p;(p=d.data)!=null&&p.state_delta&&Object.entries(d.data.state_delta).forEach(([f,m])=>{var y;l[f]={...l[f],value:m,timestamp:d.timestamp,defined:((y=l[f])==null?void 0:y.defined)??!1}})}),l},[e,t,n]),a=Object.entries(o);return s.jsxs(s.Fragment,{children:[r&&s.jsx(vC,{content:r.content,title:r.title,onClose:()=>i(null)}),s.jsxs("div",{className:"state-snapshot",children:[s.jsx("style",{children:`
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
      `}),s.jsx("div",{className:"state-header",children:t!==null?`State after event #${t}`:e.length>0?"State at end of run":"Defined State Keys"}),a.length===0?s.jsx("div",{className:"state-empty",children:"No state keys defined"}):a.map(([l,{value:c,timestamp:u,defined:d,description:p,type:f}])=>s.jsxs("div",{className:`state-entry ${c===void 0?"unset":""}`,children:[s.jsxs("div",{className:"state-key",children:[l,f&&s.jsxs("span",{className:"state-type",children:["(",f,")"]})]}),s.jsx("div",{className:"state-value",onClick:()=>{if(c!==void 0){const m=typeof c=="string"?c:JSON.stringify(c,null,2);i({content:m,title:l})}},style:{cursor:c!==void 0?"pointer":"default"},title:c!==void 0?"Click to view in markdown viewer":void 0,children:c===void 0?"(not set)":typeof c=="string"?c:JSON.stringify(c,null,2)}),p&&s.jsx("div",{className:"state-desc",children:p}),u&&s.jsx("div",{className:"state-time",children:new Date(u*1e3).toLocaleTimeString()})]},l))]})]})}function tl(e){if(!e)return{text:"",isError:!1};if(e.success===!1)return{text:e.error||"Unknown error",isError:!0};let t=e.result||e;if(typeof t=="string")try{const n=t.replace(/'/g,'"').replace(/True/g,"true").replace(/False/g,"false").replace(/None/g,"null");t=JSON.parse(n)}catch{return{text:t,isError:!1}}return t.content&&Array.isArray(t.content)?{text:t.content.filter(r=>r.type==="text").map(r=>r.text).join(`
`),isError:t.isError===!0}:{text:typeof t=="string"?t:JSON.stringify(t,null,2),isError:!1}}function Bf(e,t){if(!t||!t.trim())return e;const n=t.trim();let r=e;try{r=JSON.parse(e)}catch{}if(n.startsWith("js:")){const i=n.slice(3).trim();try{const a=new Function("value","data",`return ${i}`)(e,r);return typeof a=="string"?a:JSON.stringify(a,null,2)}catch(o){return`[JS error: ${o}]`}}if(n.startsWith("."))try{const i=n.slice(1).split(".").filter(Boolean);let o=r;for(const a of i){const l=a.match(/^(\w+)?\[(\d+)\]$/);l?(l[1]&&(o=o[l[1]]),o=o[parseInt(l[2])]):o=o[a]}return o==null?"[No match]":typeof o=="string"?o:JSON.stringify(o,null,2)}catch(i){return`[Path error: ${i.message}]`}try{const o=new Function("value","data",`return ${n}`)(e,r);return typeof o=="string"?o:JSON.stringify(o,null,2)}catch(i){return`[Transform error: ${i.message}]`}}function kC({project:e,selectedEventIndex:t}){var Q;const{watches:n,updateWatch:r,addWatch:i,removeWatch:o,runEvents:a}=ct(),[l,c]=k.useState(!1),[u,d]=k.useState(null),[p,f]=k.useState({}),[m,y]=k.useState(new Set),[w,z]=k.useState(""),[v,x]=k.useState(""),[g,P]=k.useState({}),[N,_]=k.useState(""),[C,b]=k.useState([]),[L,S]=k.useState(null),[A,M]=k.useState(null),[q,U]=k.useState(!1);k.useEffect(()=>{mu().then(b).catch(console.error)},[]);const B=k.useMemo(()=>{const V=e.mcp_servers||[],ie=new Set(V.map(I=>I.name)),he=C.filter(I=>!ie.has(I.name));return[...V,...he]},[e.mcp_servers,C]),ne=k.useCallback(async V=>{if(!(p[V]||m.has(V))){y(ie=>new Set([...ie,V]));try{const ie=await Ce(`/projects/${e.id}/mcp-servers/${encodeURIComponent(V)}/test-connection`,{method:"POST"});ie.success&&f(he=>({...he,[V]:ie.tools}))}catch(ie){console.error("Failed to load tools:",ie)}finally{y(ie=>{const he=new Set(ie);return he.delete(V),he})}}},[e.id,p,m]);k.useEffect(()=>{var I;if(u)return;if(!w||!v){P({});return}const ie=(p[w]||[]).find(K=>K.name===v);if(!((I=ie==null?void 0:ie.parameters)!=null&&I.properties)){P({});return}const he={};Object.entries(ie.parameters.properties).forEach(([K,X])=>{X.type==="string"?he[K]=X.default||"":X.type==="number"||X.type==="integer"?he[K]=X.default||0:X.type==="boolean"?he[K]=X.default||!1:he[K]=X.default||null}),P(he)},[w,v,p,u]);const T=()=>{d(null),z(""),x(""),P({}),_(""),S(null),M(null),c(!0)},$=V=>{if(d(V.id),z(V.serverName),x(V.toolName),P({...V.args}),_(V.transform||""),V.result){const{text:ie}=tl(V.result);S(ie),M(null)}else S(null),M(null);p[V.serverName]||ne(V.serverName),c(!0)},R=async()=>{if(!(!w||!v)){U(!0),M(null);try{const V=await Ce(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:w,tool_name:v,arguments:g})}),{text:ie,isError:he}=tl(V);he?(M(ie),S(null)):(S(ie),M(null))}catch(V){M(String(V)),S(null)}finally{U(!1)}}},j=k.useMemo(()=>L?!N||!N.trim()?L:Bf(L,N):null,[L,N]),W=()=>{if(!(!w||!v)){if(u){r(u,{serverName:w,toolName:v,args:{...g},transform:N||void 0});const V=n.find(ie=>ie.id===u);V&&h({...V,serverName:w,toolName:v,args:g,transform:N||void 0,history:V.history||[]})}else{const V={id:`watch-${Date.now()}`,serverName:w,toolName:v,args:{...g},transform:N||void 0,history:[]};i(V),h(V)}c(!1)}},G=V=>{o(V)},h=k.useCallback(async(V,ie)=>{r(V.id,{isLoading:!0,error:void 0});const he=ie??a.length-1,I=Date.now();try{const K=await Ce(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:V.serverName,tool_name:V.toolName,arguments:V.args})}),X={eventIndex:he,timestamp:I,result:K},Y=[...V.history||[],X];r(V.id,{result:K,isLoading:!1,lastRun:I,history:Y})}catch(K){const X={eventIndex:he,timestamp:I,error:String(K)},Y=[...V.history||[],X];r(V.id,{error:String(K),isLoading:!1,lastRun:I,history:Y})}},[e.id,r,a.length]),F=()=>{n.forEach(V=>h(V))},E=k.useMemo(()=>!w||!v?null:(p[w]||[]).find(ie=>ie.name===v),[w,v,p]);return s.jsxs("div",{className:"tool-watch-panel",children:[s.jsxs("div",{className:"watch-header",children:[s.jsx(ri,{size:14}),s.jsx("span",{children:"Tool Watch"}),s.jsx("span",{className:"watch-auto-badge",title:"Watches auto-refresh on every event",children:"⚡ Auto"}),s.jsxs("div",{className:"watch-actions",children:[s.jsx("button",{className:"watch-btn",onClick:F,title:"Refresh all",children:s.jsx(an,{size:12})}),s.jsx("button",{className:"watch-btn",onClick:T,title:"Add watch",children:s.jsx(Je,{size:12})})]})]}),n.length===0?s.jsxs("div",{className:"watch-empty",children:[s.jsx(ri,{size:20,style:{opacity:.3}}),s.jsx("span",{children:"No watch expressions"}),s.jsxs("button",{className:"add-watch-btn",onClick:T,children:[s.jsx(Je,{size:12})," Add Tool Watch"]})]}):s.jsx("div",{className:"watch-list",children:n.map(V=>{let ie=V.result,he=V.error;if(t!==null&&V.history&&V.history.length>0){const le=V.history.filter(J=>J.eventIndex<=t);if(le.length>0){const J=le[le.length-1];ie=J.result,he=J.error}else ie=void 0,he=void 0}const{text:I,isError:K}=ie?tl(ie):{text:"",isError:!1},X=ie?Bf(I,V.transform):"",Y=he||K;return s.jsxs("div",{className:`watch-item ${Y?"error":""}`,children:[s.jsxs("div",{className:"watch-item-header",children:[s.jsxs("span",{className:"watch-expr",children:[s.jsx("span",{className:"watch-server",children:V.serverName}),s.jsx("span",{className:"watch-tool",children:V.toolName}),Object.keys(V.args).length>0&&s.jsxs("span",{className:"watch-args",children:["(",Object.entries(V.args).map(([le,J])=>`${le}=${JSON.stringify(J)}`).join(", "),")"]}),t!==null&&s.jsxs("span",{className:"watch-time-indicator",children:["@",t]})]}),s.jsxs("div",{className:"watch-item-actions",children:[s.jsx("button",{onClick:()=>$(V),title:"Edit watch",children:s.jsx(Xt,{size:10})}),s.jsx("button",{onClick:()=>h(V),title:"Refresh",children:V.isLoading?s.jsx(an,{size:10,className:"spin"}):s.jsx(an,{size:10})}),s.jsx("button",{onClick:()=>G(V.id),title:"Remove",children:s.jsx(De,{size:10})})]})]}),s.jsx("div",{className:"watch-result",children:V.isLoading?s.jsx("span",{className:"loading",children:"Loading..."}):he?s.jsx("span",{className:"error",children:he}):ie?s.jsx("pre",{className:K?"error-text":"",children:X}):s.jsx("span",{className:"no-result",children:t!==null?"No data at this event":"Not yet run"})})]},V.id)})}),l&&s.jsx("div",{className:"watch-dialog-overlay",onClick:()=>c(!1),children:s.jsxs("div",{className:"watch-dialog",onClick:V=>V.stopPropagation(),children:[s.jsxs("div",{className:"dialog-header",children:[s.jsx("span",{children:u?"Edit Watch":"Add Tool Watch"}),s.jsx("button",{onClick:()=>c(!1),children:s.jsx(wu,{size:14})})]}),s.jsxs("div",{className:"dialog-body",children:[s.jsxs("div",{className:"form-row",children:[s.jsx("label",{children:"MCP Server"}),s.jsxs("select",{value:w,onChange:V=>{z(V.target.value),u||x(""),V.target.value&&ne(V.target.value)},children:[s.jsx("option",{value:"",children:"Select server..."}),B.map(V=>s.jsx("option",{value:V.name,children:V.name},V.name))]})]}),s.jsxs("div",{className:"form-row",children:[s.jsx("label",{children:"Tool"}),s.jsxs("select",{value:v,onChange:V=>x(V.target.value),disabled:!w||m.has(w),children:[s.jsx("option",{value:"",children:m.has(w)?"Loading tools...":"Select tool..."}),(p[w]||[]).map(V=>s.jsx("option",{value:V.name,children:V.name},V.name))]})]}),(E==null?void 0:E.description)&&s.jsx("div",{className:"tool-desc",children:E.description}),((Q=E==null?void 0:E.parameters)==null?void 0:Q.properties)&&Object.keys(E.parameters.properties).length>0&&s.jsxs("div",{className:"tool-args",children:[s.jsx("label",{children:"Arguments"}),Object.entries(E.parameters.properties).map(([V,ie])=>{var he,I;return s.jsxs("div",{className:"arg-row",children:[s.jsxs("span",{className:"arg-name",children:[V,((he=E.parameters.required)==null?void 0:he.includes(V))&&s.jsx("span",{className:"required",children:"*"})]}),s.jsx("input",{type:ie.type==="number"||ie.type==="integer"?"number":"text",value:typeof g[V]=="object"?JSON.stringify(g[V]):g[V]??"",onChange:K=>P(X=>({...X,[V]:K.target.value})),placeholder:((I=ie.description)==null?void 0:I.slice(0,40))||V})]},V)})]}),w&&v&&s.jsxs("div",{className:"test-section",children:[s.jsxs("div",{className:"test-header",children:[s.jsx("label",{children:"Test & Preview"}),s.jsxs("button",{className:"test-btn",onClick:R,disabled:q,children:[q?s.jsx(an,{size:12,className:"spin"}):s.jsx(qn,{size:12}),q?"Running...":"Test Run"]})]}),A&&s.jsxs("div",{className:"test-result error",children:[s.jsx("span",{className:"test-label",children:"Error:"}),s.jsx("pre",{children:A})]}),L&&s.jsxs("div",{className:"test-result",children:[s.jsx("span",{className:"test-label",children:"Raw Result:"}),s.jsx("pre",{children:L})]})]}),s.jsxs("div",{className:"form-row transform-row",children:[s.jsx("label",{children:"Transform (optional)"}),s.jsx("input",{type:"text",value:N,onChange:V=>_(V.target.value),placeholder:"e.g., .items[0].name or .content[].text"}),s.jsxs("div",{className:"transform-hints",children:[s.jsx("span",{className:"hint-title",children:"Path:"}),s.jsx("code",{onClick:()=>_(".items[0].name"),children:".items[0].name"}),s.jsx("code",{onClick:()=>_(".content[0].text"),children:".content[0].text"}),s.jsx("code",{onClick:()=>_(".result.data"),children:".result.data"}),s.jsx("span",{className:"hint-title",children:"JS:"}),s.jsx("code",{onClick:()=>_("js:value.split('\\n')[0]"),children:"js:value.split('\\n')[0]"}),s.jsx("code",{onClick:()=>_("js:data.items?.length"),children:"js:data.items?.length"})]})]}),L&&N&&s.jsxs("div",{className:"transform-preview",children:[s.jsx("span",{className:"test-label",children:"Transform Preview:"}),s.jsx("pre",{className:j!=null&&j.startsWith("[Transform error")?"error":"",children:j})]})]}),s.jsxs("div",{className:"dialog-footer",children:[s.jsx("button",{className:"cancel-btn",onClick:()=>c(!1),children:"Cancel"}),s.jsx("button",{className:"add-btn",onClick:W,disabled:!w||!v,children:u?"Save Changes":"Add Watch"})]})]})})]})}function wC(){var Hu;const{project:e,updateProject:t,isRunning:n,setIsRunning:r,runEvents:i,addRunEvent:o,clearRunEvents:a,clearWatchHistories:l,runAgentId:c,setRunAgentId:u,watches:d,updateWatch:p,currentSessionId:f,setCurrentSessionId:m}=ct(),[y,w]=k.useState(""),[z,v]=k.useState(null),[x,g]=k.useState(null),[P,N]=k.useState(null),[_,C]=k.useState(""),[b,L]=k.useState(new Set(["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_start","callback_end"])),[S,A]=k.useState(!0),[M,q]=k.useState(null),[U,B]=k.useState(!0),[ne,T]=k.useState(!0),[$,R]=k.useState(!1),[j,W]=k.useState(360),[G,h]=k.useState(!1),[F,E]=k.useState([60,80,100,80,1]),[Q,V]=k.useState(null),ie=k.useRef(0),he=k.useRef(0),[I,K]=k.useState([]),[X,Y]=k.useState(null),[le,J]=k.useState(!1),ee=k.useRef(0),oe=k.useCallback(async(O,ue)=>{if(!e)return;p(O.id,{isLoading:!0,error:void 0});const ce=ue??i.length-1,ve=Date.now();try{const je=await Ce(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:O.serverName,tool_name:O.toolName,arguments:O.args})}),Oe={eventIndex:ce,timestamp:ve,result:je},jt=[...O.history||[],Oe];p(O.id,{result:je,isLoading:!1,lastRun:ve,history:jt})}catch(je){const Oe={eventIndex:ce,timestamp:ve,error:String(je)},jt=[...O.history||[],Oe];p(O.id,{error:String(je),isLoading:!1,lastRun:ve,history:jt})}},[e==null?void 0:e.id,p,i.length]);k.useEffect(()=>{if(i.length>ee.current&&d.length>0){const O=i.length-1;d.forEach(ue=>{ue.isLoading||oe(ue,O)})}ee.current=i.length},[i.length,d,oe]),k.useEffect(()=>{c!==null&&(we(c),u(null))},[c,u]);const[xe,we]=k.useState(null),ze=k.useRef(null),be=k.useRef(null);k.useEffect(()=>{if(!G)return;const O=ce=>{if(!be.current)return;const je=be.current.getBoundingClientRect().right-ce.clientX;W(Math.min(600,Math.max(200,je)))},ue=()=>{h(!1)};return document.addEventListener("mousemove",O),document.addEventListener("mouseup",ue),()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",ue)}},[G]),k.useEffect(()=>{if(Q===null)return;const O=ce=>{const ve=ce.clientX-ie.current,je=Math.max(40,he.current+ve);E(Oe=>{const jt=[...Oe];return jt[Q]=je,jt})},ue=()=>{V(null)};return document.addEventListener("mousemove",O),document.addEventListener("mouseup",ue),document.body.style.cursor="col-resize",document.body.style.userSelect="none",()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",ue),document.body.style.cursor="",document.body.style.userSelect=""}},[Q]);const D=(O,ue)=>{ue.preventDefault(),ie.current=ue.clientX,he.current=F[O],V(O)},se=F.map((O,ue)=>ue===F.length-1?`minmax(${O}px, 1fr)`:`${O}px`).join(" "),me=k.useMemo(()=>i.length===0?{min:0,max:0}:{min:i[0].timestamp,max:i[i.length-1].timestamp},[i]),de=k.useMemo(()=>i.filter((O,ue)=>{var ce,ve,je;if(P&&(O.timestamp<P[0]||O.timestamp>P[1])||b.size>0&&!b.has(O.event_type))return!1;if(U&&O.event_type==="model_response"){const Oe=((ve=(ce=O.data)==null?void 0:ce.response_content)==null?void 0:ve.parts)||((je=O.data)==null?void 0:je.parts)||[],jt=Oe.some(vr=>vr.type==="function_call"),ca=Oe.some(vr=>vr.type==="text");if(!jt&&!ca)return!1}return!(_&&!JSON.stringify(O).toLowerCase().includes(_.toLowerCase()))}),[i,P,b,_,U]),H=k.useMemo(()=>{var ve;let O=0,ue=0;const ce=x!==null?x+1:i.length;for(let je=0;je<ce;je++){const Oe=i[je];Oe.event_type==="model_response"&&((ve=Oe.data)!=null&&ve.token_counts)&&(O+=Oe.data.token_counts.input||0,ue+=Oe.data.token_counts.output||0)}return{input:O,output:ue,total:O+ue}},[i,x]),Z=x!==null?i[x]:null;k.useEffect(()=>{if(!e){K([]);return}(async()=>{J(!0);try{const ue=await Zl(e.id);K(ue)}catch(ue){console.error("Failed to load sessions:",ue),K([])}finally{J(!1)}})()},[e]);const ge=k.useCallback(async O=>{if(!e){Y(null);return}if(!O){a(),l(),m(null),Y(null),g(null),N(null);return}try{const ue=await Sg(e.id,O);a(),l(),m(ue.id),Y(O),g(null),N(null);for(const ce of ue.events)o(ce)}catch(ue){alert(`Failed to load session: ${ue.message||"Unknown error"}`)}},[e,a,l,m,o]);k.useEffect(()=>{if(!e||I.length===0||le)return;const ue=new URLSearchParams(window.location.search).get("session");if(ue)if(I.some(ve=>ve.id===ue)){ge(ue);const ve=window.location.pathname;window.history.replaceState({},"",ve)}else console.warn(`Session ${ue} not found in available sessions`)},[e,I,le,ge]),k.useEffect(()=>{n&&ze.current&&(ze.current.scrollTop=ze.current.scrollHeight)},[i.length,n]);const ae=k.useCallback(()=>{if(!e||!y.trim()||n)return;z&&(z.close(),v(null)),f||(a(),l(),Y(null)),r(!0),g(null),N(null);const O=zg(e.id);v(O),O.onopen=()=>{O.send(JSON.stringify({message:y,agent_id:xe||void 0,session_id:f||void 0,sandbox_mode:S}))},O.onmessage=ue=>{var ve;const ce=JSON.parse(ue.data);if(ce.event_type==="agent_start"&&((ve=ce.data)!=null&&ve.session_id)){const je=ce.data.session_id;ce.data.session_reused,m(je),je&&I.some(Oe=>Oe.id===je)&&Y(je)}else if(ce.type==="session_started")m(ce.session_id),ce.session_id&&I.some(je=>je.id===ce.session_id)&&Y(ce.session_id);else if(ce.type==="sandbox_starting")o({timestamp:Date.now()/1e3,event_type:"agent_start",agent_name:"sandbox",data:{message:"Starting Docker sandbox..."}});else if(ce.type==="sandbox_started")o({timestamp:Date.now()/1e3,event_type:"agent_start",agent_name:"sandbox",data:{message:`Sandbox started (ID: ${ce.sandbox_id})`}});else if(ce.type==="sandbox_response")o({timestamp:Date.now()/1e3,event_type:"model_response",agent_name:"sandbox",data:ce.data});else if(ce.event_type==="approval_required"||ce.type==="network_request"&&ce.event_type==="approval_required"){const je={id:ce.id,method:ce.method||"GET",url:ce.url,host:ce.host,source:ce.source||"agent",headers:ce.headers||{},timeout:ce.timeout||30};q(je),o({timestamp:Date.now()/1e3,event_type:"callback_start",agent_name:"sandbox",data:{message:`⚠️ Network request to ${ce.host} requires approval`}})}else ce.type==="completed"?(r(!1),O.close()):ce.type==="error"?(r(!1),o({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:ce.error}})):o(ce)},O.onerror=()=>{r(!1),o({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:"WebSocket connection error"}})},O.onclose=()=>{r(!1)}},[e,y,n,z,a,r,o,xe,f,S]),Se=k.useCallback(()=>{z==null||z.close(),r(!1)},[z,r]),tt=k.useCallback(async(O,ue,ce)=>{var vr,qu,Ju,Ku,Gu,Qu,Yu,Xu,Zu,ed,td,nd,rd,sd,id,od,ad,ld,cd,ud,dd,pd,fd,md;if(!M||!e)return;const ve=((vr=e.app)==null?void 0:vr.id)||e.id,je=O?"allow_pattern":"allow_once",Oe=O||M.host,jt=ue||"exact",ca=ce?`/sandbox/${ve}/approval?project_id=${e.id}`:`/sandbox/${ve}/approval`;try{if(await Ce(ca,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:M.id,action:je,pattern:Oe,pattern_type:jt,persist:ce||!1})}),ce&&je==="allow_pattern"){const ua=((Ku=(Ju=(qu=e.app)==null?void 0:qu.sandbox)==null?void 0:Ju.allowlist)==null?void 0:Ku.user)||[],Xx={id:`pattern_${Date.now().toString(36)}`,pattern:Oe,pattern_type:jt,source:"approved",added_at:new Date().toISOString()};t({app:{...e.app,sandbox:{...(Gu=e.app)==null?void 0:Gu.sandbox,enabled:((Yu=(Qu=e.app)==null?void 0:Qu.sandbox)==null?void 0:Yu.enabled)??!1,allowlist:{auto:((ed=(Zu=(Xu=e.app)==null?void 0:Xu.sandbox)==null?void 0:Zu.allowlist)==null?void 0:ed.auto)||[],user:[...ua,Xx]},unknown_action:((nd=(td=e.app)==null?void 0:td.sandbox)==null?void 0:nd.unknown_action)??"ask",approval_timeout:((sd=(rd=e.app)==null?void 0:rd.sandbox)==null?void 0:sd.approval_timeout)??30,agent_memory_limit_mb:((od=(id=e.app)==null?void 0:id.sandbox)==null?void 0:od.agent_memory_limit_mb)??512,agent_cpu_limit:((ld=(ad=e.app)==null?void 0:ad.sandbox)==null?void 0:ld.agent_cpu_limit)??1,mcp_memory_limit_mb:((ud=(cd=e.app)==null?void 0:cd.sandbox)==null?void 0:ud.mcp_memory_limit_mb)??256,mcp_cpu_limit:((pd=(dd=e.app)==null?void 0:dd.sandbox)==null?void 0:pd.mcp_cpu_limit)??.5,run_timeout:((md=(fd=e.app)==null?void 0:fd.sandbox)==null?void 0:md.run_timeout)??300}}})}o({timestamp:Date.now()/1e3,event_type:"callback_end",agent_name:"sandbox",data:{message:`✅ Approved: ${Oe}`}})}catch(ua){console.error("Failed to approve:",ua)}q(null)},[M,e,o,t]),pn=k.useCallback(async()=>{var ue;if(!M||!e)return;const O=((ue=e.app)==null?void 0:ue.id)||e.id;try{await Ce(`/sandbox/${O}/approval`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:M.id,action:"deny"})}),o({timestamp:Date.now()/1e3,event_type:"callback_end",agent_name:"sandbox",data:{message:`❌ Denied: ${M.host}`}})}catch(ce){console.error("Failed to deny:",ce)}q(null)},[M,e,o]);k.useEffect(()=>{const O=ue=>{if((ue.metaKey||ue.ctrlKey)&&ue.key==="Enter"){ue.preventDefault(),ae();return}if(ue.key==="ArrowDown"||ue.key==="ArrowUp"){if(ue.target instanceof HTMLInputElement||ue.target instanceof HTMLTextAreaElement||(ue.preventDefault(),de.length===0))return;if(ue.key==="ArrowDown")if(x===null){const ce=i.indexOf(de[0]);g(ce)}else{const ce=de.findIndex(ve=>i.indexOf(ve)===x);if(ce<de.length-1){const ve=i.indexOf(de[ce+1]);g(ve)}}else if(ue.key==="ArrowUp")if(x===null){const ce=i.indexOf(de[de.length-1]);g(ce)}else{const ce=de.findIndex(ve=>i.indexOf(ve)===x);if(ce>0){const ve=i.indexOf(de[ce-1]);g(ve)}}}};return window.addEventListener("keydown",O),()=>window.removeEventListener("keydown",O)},[ae,de,x,i]);const Wt=k.useCallback(()=>{var je;if(i.length===0)return;const O={version:1,exportedAt:new Date().toISOString(),projectId:e==null?void 0:e.id,projectName:e==null?void 0:e.name,agentId:xe||((je=e==null?void 0:e.app)==null?void 0:je.root_agent_id),events:i},ue=new Blob([JSON.stringify(O,null,2)],{type:"application/json"}),ce=URL.createObjectURL(ue),ve=document.createElement("a");ve.href=ce,ve.download=`run-${(e==null?void 0:e.name)||"export"}-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,document.body.appendChild(ve),ve.click(),document.body.removeChild(ve),URL.revokeObjectURL(ce)},[i,e,xe]),Xn=k.useCallback(async()=>{if(!f||!e){alert("No active session to save");return}try{const O=await _g(f);if(O.success){alert(O.message||"Session saved to memory successfully");try{const ue=await Zl(e.id);K(ue)}catch{}}else alert(`Failed to save to memory: ${O.error||"Unknown error"}`)}catch(O){alert(`Error saving to memory: ${O.message||"Unknown error"}`)}},[f,e]),[Zn,Xe]=k.useState(!1),[_n,Ht]=k.useState([]),[is,Uu]=k.useState(""),[la,Kx]=k.useState("Test Case from Session"),[Vu,Wu]=k.useState(!1),Gx=k.useCallback(async()=>{if(!f||!e){alert("No active session to create test case from");return}try{const O=await Ce(`/projects/${e.id}/eval-sets`);if(Ht(O.eval_sets||[]),!O.eval_sets||O.eval_sets.length===0){confirm(`No evaluation sets found. Would you like to create one first?

Go to the Evals tab to create an evaluation set.`)&&(window.location.href=`/project/${e.id}/evals`);return}Uu(O.eval_sets[0].id),Xe(!0)}catch(O){alert(`Error loading eval sets: ${O.message||"Unknown error"}`)}},[f,e]),Qx=k.useCallback(async()=>{if(!f||!e||!is){alert("Please select an evaluation set");return}Wu(!0);try{const O=await Ce(`/projects/${e.id}/session-to-eval-case`,{method:"POST",body:JSON.stringify({session_id:f,eval_set_id:is,case_name:la})});Xe(!1),alert(`Test case "${O.eval_case.name}" created successfully!

Token count: ${O.session_token_count.toLocaleString()} tokens

Go to the Evals tab to view and edit the test case.`)}catch(O){alert(`Error creating test case: ${O.message||"Unknown error"}`)}finally{Wu(!1)}},[f,e,is,la]),Yx=k.useCallback(()=>{const O=document.createElement("input");O.type="file",O.accept=".json",O.onchange=async ue=>{var ve;const ce=(ve=ue.target.files)==null?void 0:ve[0];if(ce)try{const je=await ce.text(),Oe=JSON.parse(je);if(!Oe.events||!Array.isArray(Oe.events)){alert("Invalid run file: missing events array");return}a(),l(),g(null),N(null),Oe.events.forEach(jt=>{o(jt)})}catch(je){alert(`Failed to load run file: ${je}`)}},O.click()},[a,l,o]);return k.useEffect(()=>{if(x!==null){const O=document.querySelector(".event-row.selected");O==null||O.scrollIntoView({behavior:"smooth",block:"nearest"})}},[x]),e?s.jsxs("div",{className:`run-panel ${G?"resizing":""}`,children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"input-area",children:[s.jsxs("select",{className:"agent-selector",value:xe||"",onChange:O=>we(O.target.value||null),disabled:n,title:"Select which agent to run",children:[s.jsx("option",{value:"",children:e.app.root_agent_id?`Root: ${((Hu=e.agents.find(O=>O.id===e.app.root_agent_id))==null?void 0:Hu.name)||e.app.root_agent_id}`:"No root agent"}),e.agents.filter(O=>O.id!==e.app.root_agent_id).map(O=>s.jsxs("option",{value:O.id,children:[O.name," (",O.type.replace("Agent",""),")"]},O.id))]}),s.jsxs("select",{className:"agent-selector",value:X||"",onChange:O=>ge(O.target.value||null),disabled:n||le,style:{minWidth:180},title:"Load a saved session",children:[s.jsx("option",{value:"",children:le?"Loading...":"Load Session..."}),I.map(O=>{const ue=new Date(O.started_at*1e3),ce=O.duration?`${O.duration.toFixed(1)}s`:"?";return s.jsxs("option",{value:O.id,children:[ue.toLocaleString()," (",O.event_count," events, ",ce,")"]},O.id)})]}),s.jsx("input",{type:"text",placeholder:"Enter your query...",value:y,onChange:O=>w(O.target.value),onKeyDown:O=>O.key==="Enter"&&!O.shiftKey&&ae(),disabled:n}),n?s.jsxs("button",{className:"stop",onClick:Se,children:[s.jsx(mb,{size:14}),"Stop"]}):s.jsxs("button",{onClick:ae,disabled:!y.trim(),children:[s.jsx(qn,{size:14}),"Run"]}),s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"4px",marginLeft:"12px",fontSize:"11px",color:S?"#22d3ee":"#71717a",cursor:"pointer"},title:"Run in isolated Docker container",children:[s.jsx("input",{type:"checkbox",checked:S,onChange:O=>A(O.target.checked),disabled:n,style:{accentColor:"#22d3ee"}}),"🐳 Sandbox"]})]}),s.jsxs("div",{className:"toolbar",children:[s.jsxs("div",{className:"toolbar-section",children:[s.jsx(Vg,{size:12,style:{color:"#71717a"}}),s.jsx("input",{type:"text",placeholder:"Filter events...",value:_,onChange:O=>C(O.target.value)})]}),s.jsx("div",{className:"toolbar-divider"}),s.jsxs("div",{className:"toolbar-section",children:[["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change"].map(O=>s.jsx("button",{className:`filter-chip ${b.has(O)?"active":""}`,onClick:()=>{const ue=new Set(b);ue.has(O)?ue.delete(O):ue.add(O),L(ue)},children:O.replace("_"," ")},O)),s.jsx("button",{className:`filter-chip ${b.has("callback_start")&&b.has("callback_end")?"active":""}`,onClick:()=>{const O=new Set(b);O.has("callback_start")&&O.has("callback_end")?(O.delete("callback_start"),O.delete("callback_end")):(O.add("callback_start"),O.add("callback_end")),L(O)},title:"Show/hide callback events",children:"callback"}),s.jsx("button",{className:`filter-chip ${U?"active":""}`,onClick:()=>B(!U),title:"Hide LLM_RESP (complete) events",children:"hide (complete)"})]}),s.jsx("div",{className:"toolbar-divider"}),s.jsxs("div",{className:"toolbar-section",children:[s.jsxs("button",{className:`toolbar-btn ${ne?"active":""}`,onClick:()=>T(!ne),children:[s.jsx(yn,{size:12}),"State"]}),s.jsxs("button",{className:`toolbar-btn ${$?"active":""}`,onClick:()=>R(!$),children:[s.jsx(Op,{size:12}),"Tools"]})]}),s.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:[s.jsxs("span",{style:{fontSize:10,color:"#71717a"},children:[de.length," / ",i.length," events"]}),P&&s.jsx("button",{className:"toolbar-btn",onClick:()=>N(null),children:"Clear Range"})]})]}),s.jsxs("div",{className:"main-content",ref:be,children:[s.jsxs("div",{className:"event-list-container",children:[s.jsxs("div",{className:"event-list-header",style:{gridTemplateColumns:se},children:[s.jsxs("div",{className:"header-cell",children:[s.jsx("span",{children:"#"}),s.jsx("div",{className:`column-resize-handle ${Q===0?"active":""}`,onMouseDown:O=>D(0,O)})]}),s.jsxs("div",{className:"header-cell",children:[s.jsx("span",{children:"Time"}),s.jsx("div",{className:`column-resize-handle ${Q===1?"active":""}`,onMouseDown:O=>D(1,O)})]}),s.jsxs("div",{className:"header-cell",children:[s.jsx("span",{children:"Agent"}),s.jsx("div",{className:`column-resize-handle ${Q===2?"active":""}`,onMouseDown:O=>D(2,O)})]}),s.jsxs("div",{className:"header-cell",children:[s.jsx("span",{children:"Type"}),s.jsx("div",{className:`column-resize-handle ${Q===3?"active":""}`,onMouseDown:O=>D(3,O)})]}),s.jsx("div",{className:"header-cell",children:s.jsx("span",{children:"Info"})})]}),s.jsx("div",{className:"event-list",ref:ze,children:de.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(Ug,{size:24}),s.jsx("span",{children:i.length===0?"No events yet":"No matching events"})]}):de.map((O,ue)=>{const ce=i.indexOf(O),ve=Ff[O.event_type]||Ff.error,je=hC[O.event_type]||zo;return s.jsxs("div",{className:`event-row ${x===ce?"selected":""}`,style:{background:ve.bg,gridTemplateColumns:se},onClick:()=>g(ce),onDoubleClick:()=>{T(!1),R(!1)},children:[s.jsx("div",{className:"index",children:ce}),s.jsx("div",{className:"time",style:{color:ve.fg},children:xC(O.timestamp,me.min)}),s.jsx("div",{className:"agent",style:{color:ve.fg},children:O.agent_name}),s.jsxs("div",{className:"type",style:{color:ve.fg},children:[s.jsx(je,{size:10}),O.event_type.split("_")[0]]}),s.jsx("div",{className:"summary",children:gC(O)})]},ce)})})]}),s.jsxs("div",{className:"side-panel-container",style:{width:j},children:[s.jsx("div",{className:`resize-handle ${G?"active":""}`,onMouseDown:()=>h(!0)}),s.jsxs("div",{className:"side-panel",style:{width:j-4},children:[s.jsxs("div",{className:"side-panel-tabs",children:[s.jsxs("button",{className:`side-panel-tab ${!ne&&!$?"active":""}`,onClick:()=>{T(!1),R(!1)},children:[s.jsx(ri,{size:12,style:{marginRight:4}}),"Details"]}),s.jsxs("button",{className:`side-panel-tab ${ne?"active":""}`,onClick:()=>{T(!0),R(!1)},children:[s.jsx(yn,{size:12,style:{marginRight:4}}),"State"]}),s.jsxs("button",{className:`side-panel-tab ${$?"active":""}`,onClick:()=>{R(!0),T(!1)},children:[s.jsx(Op,{size:12,style:{marginRight:4}}),"Tools"]})]}),s.jsx("div",{className:"side-panel-content",children:$?s.jsx(kC,{project:e,selectedEventIndex:x}):ne?s.jsx(bC,{events:i,selectedEventIndex:x,project:e}):Z?s.jsx(yC,{event:Z}):s.jsxs("div",{className:"empty-state",children:[s.jsx(ri,{size:24}),s.jsx("span",{children:"Select an event to view details"})]})})]})]})]}),s.jsxs("div",{className:"stats-bar",children:[s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Events:"}),s.jsx("span",{className:"stat-value",children:i.length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Tool Calls:"}),s.jsx("span",{className:"stat-value",children:i.filter(O=>O.event_type==="tool_call").length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Model Calls:"}),s.jsx("span",{className:"stat-value",children:i.filter(O=>O.event_type==="model_call").length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Callbacks:"}),s.jsx("span",{className:"stat-value",children:i.filter(O=>O.event_type==="callback_start").length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"State Changes:"}),s.jsx("span",{className:"stat-value",children:i.filter(O=>O.event_type==="state_change").length})]}),i.length>0&&s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Duration:"}),s.jsxs("span",{className:"stat-value",children:[((i[i.length-1].timestamp-i[0].timestamp)*1e3).toFixed(0),"ms"]})]}),H.total>0&&s.jsx("div",{className:"stat-item token-stats",children:s.jsxs("span",{className:"stat-value token-value",children:[s.jsxs("span",{className:"token-in",title:"Input tokens",children:[H.input.toLocaleString(),"↑"]}),s.jsxs("span",{className:"token-out",title:"Output tokens",children:[H.output.toLocaleString(),"↓"]}),s.jsx("span",{className:"token-total",title:"Total tokens",children:H.total.toLocaleString()})]})}),s.jsx("div",{className:"stats-bar-spacer"}),s.jsxs("button",{className:"stats-bar-btn",onClick:Yx,title:"Load a saved run",children:[s.jsx(ta,{size:12}),"Load"]}),s.jsxs("button",{className:"stats-bar-btn",onClick:Wt,disabled:i.length===0,title:"Save current run to file",children:[s.jsx(mi,{size:12}),"Save"]}),s.jsxs("button",{className:"stats-bar-btn",onClick:Xn,disabled:!f||i.length===0,title:"Save current session to memory",children:[s.jsx(yn,{size:12}),"Save to Memory"]}),s.jsxs("button",{className:"stats-bar-btn",onClick:Gx,disabled:!f||i.length===0,title:"Create evaluation test case from this session",style:{background:"rgba(var(--accent-primary-rgb), 0.15)"},children:[s.jsx(rc,{size:12}),"Create Test Case"]})]}),Zn&&s.jsx("div",{className:"dialog-overlay",style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>Xe(!1),children:s.jsxs("div",{className:"dialog-content",style:{background:"var(--bg-secondary)",borderRadius:"var(--radius-md)",padding:24,width:400,maxWidth:"90vw",border:"1px solid var(--border-color)"},onClick:O=>O.stopPropagation(),children:[s.jsxs("h3",{style:{marginBottom:16,display:"flex",alignItems:"center",gap:8},children:[s.jsx(rc,{size:18}),"Create Test Case from Session"]}),s.jsxs("div",{style:{marginBottom:16},children:[s.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Test Case Name"}),s.jsx("input",{type:"text",value:la,onChange:O=>Kx(O.target.value),placeholder:"Enter test case name",style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"}})]}),s.jsxs("div",{style:{marginBottom:20},children:[s.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Add to Evaluation Set"}),s.jsx("select",{value:is,onChange:O=>Uu(O.target.value),style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"},children:_n.map(O=>s.jsx("option",{value:O.id,children:O.name},O.id))})]}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:16},children:"This will extract user messages and tool calls from the current session to create a replayable test case. You can edit the expected responses and tool calls in the Evals tab after creation."}),s.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[s.jsx("button",{className:"btn btn-secondary",onClick:()=>Xe(!1),children:"Cancel"}),s.jsx("button",{className:"btn btn-primary",onClick:Qx,disabled:Vu||!is,children:Vu?"Creating...":"Create Test Case"})]})]})}),M&&s.jsx(mC,{request:M,timeout:M.timeout||30,onApprove:tt,onDeny:pn,onClose:()=>q(null)})]}):s.jsx("div",{className:"run-panel empty",children:"No project loaded"})}const jC=()=>Math.random().toString(36).substring(2,10),_C=()=>({id:jC(),name:"New SkillSet",description:"",embedding_model:void 0,app_model_id:void 0,external_store_type:void 0,external_store_config:{},search_enabled:!0,preload_enabled:!0,preload_top_k:3,preload_min_score:.4,sources:[],entry_count:0});function SC(){const{project:e,setProject:t}=ct(),[n,r]=k.useState(null),[i,o]=k.useState(null),[a,l]=k.useState(""),[c,u]=k.useState([]),[d,p]=k.useState(!1),[f,m]=k.useState(!1),[y,w]=k.useState(""),[z,v]=k.useState(!1),[x,g]=k.useState(null),[P,N]=k.useState(null),_=k.useRef(null),C=(e==null?void 0:e.skillsets)||[],b=C.find(R=>R.id===n);k.useEffect(()=>{$g().then(R=>N(R.available)).catch(()=>N(!1))},[]),k.useEffect(()=>{C.length>0&&!n&&r(C[0].id)},[C,n]),k.useEffect(()=>{!e||!n||L()},[e==null?void 0:e.id,n]);const L=k.useCallback(async()=>{if(!(!e||!n))try{const R=await Ag(e.id,n);o(R),A(n,{entry_count:R.entry_count})}catch(R){console.error("Failed to load stats:",R)}},[e==null?void 0:e.id,n]),S=R=>{e&&t({...e,...R})},A=(R,j)=>{e&&t({...e,skillsets:e.skillsets.map(W=>W.id===R?{...W,...j}:W)})},M=()=>{if(!e)return;const R=_C();S({skillsets:[...C,R]}),r(R.id)},q=R=>{e&&confirm("Delete this SkillSet and all its data?")&&(S({skillsets:C.filter(j=>j.id!==R)}),n===R&&r(C.length>1?C[0].id:null),o(null),u([]))},U=async()=>{if(!(!e||!n||!a.trim())){p(!0),g(null);try{const R=await Ig(e.id,n,a.trim(),10,0);u(R.results)}catch(R){g("Search failed"),console.error(R)}finally{p(!1)}}},B=async()=>{if(!(!e||!n||!y.trim())){v(!0),g(null);try{const R=await Rg(e.id,n,y.trim());w(""),await L(),alert(`Added ${R.chunks_added} chunks from ${R.source_name}`)}catch(R){g(R.message||"Failed to fetch URL")}finally{v(!1)}}},ne=async R=>{var W;const j=(W=R.target.files)==null?void 0:W[0];if(!(!j||!e||!n)){g(null);try{const G=await Mg(e.id,n,j);await L(),alert(`Added ${G.chunks_added} chunks from ${G.source_name}`)}catch(G){g(G.message||"Upload failed")}_.current&&(_.current.value="")}},T=async()=>{if(!(!e||!n)&&confirm("Delete all entries in this SkillSet?"))try{await Og(e.id,n),await L(),u([])}catch{g("Clear failed")}},$=R=>{const j=Math.round(R*100),W=160,G=70,h=20+(1-R)*15,F=.15+R*.25;return`linear-gradient(90deg, hsla(${W}, ${G}%, ${h}%, ${F}) 0%, transparent ${j}%)`};return e?s.jsxs("div",{className:"skillsets-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"skillset-list",children:[s.jsxs("div",{className:"skillset-list-header",children:[s.jsx("h3",{children:"SkillSets"}),s.jsx("button",{className:"btn-icon",onClick:M,title:"Add SkillSet",children:s.jsx(Je,{size:16})})]}),C.length===0?s.jsxs("div",{className:"empty-state",style:{padding:"40px 0"},children:[s.jsx(yn,{size:32}),s.jsx("span",{children:"No SkillSets"}),s.jsxs("button",{className:"btn-primary",onClick:M,children:[s.jsx(Je,{size:14})," Create SkillSet"]})]}):C.map(R=>s.jsxs("div",{className:`skillset-item ${n===R.id?"selected":""}`,onClick:()=>r(R.id),children:[s.jsx(yn,{size:16,style:{color:"var(--accent)",flexShrink:0}}),s.jsxs("div",{className:"skillset-item-info",children:[s.jsx("div",{className:"skillset-item-name",children:R.name}),s.jsxs("div",{className:"skillset-item-count",children:[R.entry_count||0," entries"]})]}),s.jsx("button",{className:"skillset-item-delete",onClick:j=>{j.stopPropagation(),q(R.id)},children:s.jsx(De,{size:14})})]},R.id))]}),b?s.jsxs("div",{className:"skillset-detail",children:[s.jsxs("div",{className:"skillset-header",children:[s.jsxs("div",{className:"skillset-header-info",children:[s.jsx("input",{className:"skillset-name-input",value:b.name,onChange:R=>A(b.id,{name:R.target.value}),placeholder:"SkillSet Name"}),s.jsx("textarea",{className:"skillset-desc-input",value:b.description,onChange:R=>A(b.id,{description:R.target.value}),placeholder:"Description (optional)",rows:1}),s.jsxs("div",{className:"skillset-model",children:[s.jsx("label",{style:{fontSize:"12px",color:"var(--text-secondary)",marginRight:"8px"},children:"Embedding Model:"}),s.jsxs("select",{style:{flex:1,padding:"4px 8px",fontSize:"12px",background:"var(--bg-secondary)",border:"1px solid var(--border)",borderRadius:"4px",color:"var(--text-primary)"},value:b.embedding_model||"text-embedding-004",onChange:R=>A(b.id,{embedding_model:R.target.value}),children:[s.jsxs("optgroup",{label:"Google Gemini",children:[s.jsx("option",{value:"text-embedding-004",children:"text-embedding-004 (768d)"}),s.jsx("option",{value:"text-embedding-005",children:"text-embedding-005"})]}),s.jsxs("optgroup",{label:"OpenAI",children:[s.jsx("option",{value:"text-embedding-3-small",children:"text-embedding-3-small (1536d)"}),s.jsx("option",{value:"text-embedding-3-large",children:"text-embedding-3-large (3072d)"})]}),s.jsxs("optgroup",{label:"Cohere",children:[s.jsx("option",{value:"embed-english-v3.0",children:"embed-english-v3.0 (1024d)"}),s.jsx("option",{value:"embed-multilingual-v3.0",children:"embed-multilingual-v3.0 (1024d)"})]})]})]}),s.jsxs("div",{className:"skillset-stats",children:[s.jsxs("span",{className:"skillset-stat",children:[s.jsx("strong",{children:(i==null?void 0:i.entry_count)||0})," entries"]}),s.jsxs("span",{className:"skillset-stat",children:[s.jsx("strong",{children:Object.keys((i==null?void 0:i.sources)||{}).length})," sources"]}),P===!1&&s.jsx("span",{className:"skillset-stat",style:{color:"var(--warning)"},children:"⚠ No embeddings"})]})]}),s.jsx("button",{className:"btn-icon",onClick:L,title:"Refresh",children:s.jsx(an,{size:16})})]}),x&&s.jsxs("div",{className:"error-banner",children:[x,s.jsx("button",{onClick:()=>g(null),children:s.jsx(wu,{size:14})})]}),s.jsxs("div",{className:"search-section",children:[s.jsx("div",{className:"search-input-wrapper",children:s.jsx("input",{className:"search-input",value:a,onChange:R=>l(R.target.value),onKeyDown:R=>R.key==="Enter"&&U(),placeholder:"Search this SkillSet..."})}),s.jsxs("button",{className:"btn-primary",onClick:U,disabled:d||!a.trim(),children:[s.jsx(Vg,{size:14}),d?"Searching...":"Search"]})]}),s.jsxs("div",{className:"search-results",children:[c.length===0&&!d&&a&&s.jsx("div",{className:"empty-state",children:s.jsx("span",{children:"No results found"})}),c.map(R=>s.jsxs("div",{className:"search-result",style:{background:$(R.score)},children:[s.jsxs("span",{className:"search-result-score",children:[(R.score*100).toFixed(0),"%"]}),s.jsx("div",{className:"search-result-text",children:R.text}),s.jsx("div",{className:"search-result-source",children:R.source_name})]},R.id))]}),s.jsxs("div",{className:"add-sources-section",children:[s.jsxs("div",{className:"add-sources-header",onClick:()=>m(!f),children:[f?s.jsx(Rt,{size:16}):s.jsx(Mt,{size:16}),s.jsx("h4",{children:"Add Sources"})]}),f&&s.jsxs("div",{className:"add-sources-content",children:[s.jsxs("div",{className:"source-row",children:[s.jsx(xu,{size:16,style:{color:"var(--text-tertiary)"}}),s.jsx("input",{className:"source-input",value:y,onChange:R=>w(R.target.value),onKeyDown:R=>R.key==="Enter"&&B(),placeholder:"Enter URL (e.g., llms.txt file)"}),s.jsxs("button",{className:"btn-primary",onClick:B,disabled:z||!y.trim(),children:[s.jsx(ab,{size:14}),z?"Loading...":"Add"]})]}),s.jsxs("div",{className:"source-row",children:[s.jsx(sb,{size:16,style:{color:"var(--text-tertiary)"}}),s.jsx("input",{ref:_,type:"file",accept:".txt,.md,.json,.csv,.html",onChange:ne}),s.jsxs("button",{className:"btn-primary",onClick:()=>{var R;return(R=_.current)==null?void 0:R.click()},children:[s.jsx(ta,{size:14}),"Upload File"]}),s.jsx("span",{style:{fontSize:"12px",color:"var(--text-tertiary)"},children:".txt, .md, .json, .csv"})]}),((i==null?void 0:i.entry_count)||0)>0&&s.jsx("div",{className:"source-row",style:{marginTop:"8px"},children:s.jsxs("button",{className:"clear-button",onClick:T,children:[s.jsx(De,{size:12}),"Clear All Entries (",(i==null?void 0:i.entry_count)||0,")"]})})]})]})]}):C.length>0?s.jsx("div",{className:"skillset-detail",children:s.jsxs("div",{className:"empty-state",children:[s.jsx(yn,{size:48}),s.jsx("span",{children:"Select a SkillSet"})]})}):null]}):null}const on={tool_trajectory_avg_score:{name:"Tool Trajectory",description:"Did the agent call the right tools in the expected order?",requiresJudge:!1,scale:[0,1]},response_match_score:{name:"Response Match (ROUGE-1)",description:"Does the response contain expected text? (fuzzy word matching)",requiresJudge:!1,scale:[0,1]},response_evaluation_score:{name:"Response Evaluation (LLM)",description:"LLM-judged semantic match of final response",requiresJudge:!0,scale:[1,5]},final_response_match_v2:{name:"Response Quality v2 (LLM)",description:"Enhanced LLM-judged response quality check",requiresJudge:!0,scale:[0,1]},safety_v1:{name:"Safety",description:"Is the response safe and harmless? (Vertex AI)",requiresJudge:!0,scale:[0,1]},hallucinations_v1:{name:"Hallucination Detection",description:"Are all claims supported by context? No false information?",requiresJudge:!0,scale:[0,1]},rubric_based_final_response_quality_v1:{name:"Rubric: Response Quality",description:"Custom rubric-based quality assessment of responses",requiresJudge:!0,scale:[0,1]},rubric_based_tool_use_quality_v1:{name:"Rubric: Tool Use Quality",description:"Custom rubric-based assessment of tool usage",requiresJudge:!0,scale:[0,1]}},oi=(e,t,n)=>{if(t==null)return{value:"-",comparison:""};const r=on[e],i=(r==null?void 0:r.scale)||[0,1];if(i[0]===1&&i[1]===5){const o=n??3.5;return{value:t.toFixed(1),comparison:`${o.toFixed(1)} / ${i[1].toFixed(1)}`}}else{const o=n??.7;return{value:`${Math.round(t*100)}%`,comparison:`${Math.round(o*100)}% min`}}},CC={metrics:[{metric:"tool_trajectory_avg_score",enabled:!0,criterion:{threshold:1}},{metric:"response_match_score",enabled:!0,criterion:{threshold:.7}}],default_trajectory_match_type:"in_order",num_runs:1};function Jx(){return`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`}function NC(){const{project:e}=ct(),[t,n]=k.useState([]),[r,i]=k.useState(null),[o,a]=k.useState(null),[l,c]=k.useState(new Set),[u,d]=k.useState(new Map),[p,f]=k.useState(new Map),[m,y]=k.useState(new Set),[w,z]=k.useState(!1),[v,x]=k.useState(null),[g,P]=k.useState([]),[N,_]=k.useState(null),C=async()=>{if(e)try{const I=await He.get(`/projects/${e.id}/eval-history`);P(I.runs||[])}catch(I){console.warn("Failed to load eval history:",I)}},b=async(I,K=!0)=>{if(e)try{const Y=(await He.get(`/projects/${e.id}/eval-history/${I}`)).run;if(_(Y),Y!=null&&Y.case_results){const le=new Map;for(const J of Y.case_results)le.set(J.eval_case_id,J);d(le)}if((Y==null?void 0:Y.eval_set_id)==="batch")c(new Set(t.map(le=>le.id))),i(null);else if(Y!=null&&Y.eval_set_id){const le=new Map;le.set(Y.eval_set_id,Y),f(le),i(Y.eval_set_id),c(J=>new Set([...J,Y.eval_set_id]))}a(null),K&&window.history.pushState({run:I},"",`?run=${I}`)}catch(X){console.warn("Failed to load history run:",X)}},L=(I,K=!0)=>{i(I),a(null),_(null),K&&I?window.history.pushState({set:I},"",`?set=${I}`):K&&window.history.pushState({},"",window.location.pathname)},S=(I,K,X=!0)=>{i(I),a(K),_(null),X&&K?window.history.pushState({set:I,case:K},"",`?set=${I}&case=${K}`):X&&I&&window.history.pushState({set:I},"",`?set=${I}`)},A=()=>{_(null),d(new Map),f(new Map),window.history.pushState({},"",window.location.pathname)},M=async I=>{if(e)try{await He.delete(`/projects/${e.id}/eval-history/${I}`),P(K=>K.filter(X=>X.id!==I)),(N==null?void 0:N.id)===I&&_(null)}catch(K){console.warn("Failed to delete history run:",K)}};k.useEffect(()=>{e!=null&&e.id&&(q(),C())},[e==null?void 0:e.id]),k.useEffect(()=>{const I=()=>{y(new Set(t.map(X=>X.id)))},K=()=>{y(new Set),C()};return window.addEventListener("eval-tests-started",I),window.addEventListener("eval-tests-completed",K),()=>{window.removeEventListener("eval-tests-started",I),window.removeEventListener("eval-tests-completed",K)}},[t]),k.useEffect(()=>{if(!(e!=null&&e.id)||w)return;const I=()=>{const X=new URLSearchParams(window.location.search),Y=X.get("set"),le=X.get("case"),J=X.get("run");if(J){b(J,!1);return}if(Y)i(Y),a(le),_(null),c(ee=>new Set([...ee,Y]));else{if(!r&&!o&&!N)return;i(null),a(null),_(null)}};I();const K=()=>{I()};return window.addEventListener("popstate",K),()=>window.removeEventListener("popstate",K)},[e==null?void 0:e.id,w,t.length]);const q=async()=>{var I,K;if(e!=null&&e.id){z(!0),x(null);try{const X=await He.get(`/projects/${e.id}/eval-sets`);if(n(X.eval_sets||[]),((I=X.eval_sets)==null?void 0:I.length)>0){const Y=new URLSearchParams(window.location.search),le=Y.get("set"),J=Y.get("case"),ee=le||(J?(K=X.eval_sets.find(oe=>oe.eval_cases.some(xe=>xe.id===J)))==null?void 0:K.id:null)||X.eval_sets[0].id;c(new Set([ee]))}}catch(X){x(X.message||"Failed to load eval sets")}finally{z(!1)}}},U=t.find(I=>I.id===r),B=U==null?void 0:U.eval_cases.find(I=>I.id===o),ne=async()=>{if(e!=null&&e.id)try{const I=await He.post(`/projects/${e.id}/eval-sets`,{name:"New Eval Set",description:"",eval_config:CC});n(K=>[...K,I.eval_set]),i(I.eval_set.id),c(K=>new Set([...K,I.eval_set.id]))}catch(I){x(I.message||"Failed to create eval set")}},T=async I=>{if(e!=null&&e.id)try{const K=await He.post(`/projects/${e.id}/eval-sets/${I}/cases`,{name:"New Test Case",description:"",invocations:[{id:Jx(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]}],initial_state:{},rubrics:[],enabled_metrics:[],tags:[]});n(X=>X.map(Y=>Y.id===I?{...Y,eval_cases:[...Y.eval_cases,K.eval_case]}:Y)),i(I),a(K.eval_case.id)}catch(K){x(K.message||"Failed to create eval case")}},$=async(I,K,X)=>{if(e!=null&&e.id)try{const Y=await He.put(`/projects/${e.id}/eval-sets/${I}/cases/${K}`,X);n(le=>le.map(J=>J.id===I?{...J,eval_cases:J.eval_cases.map(ee=>ee.id===K?Y.eval_case:ee)}:J))}catch(Y){x(Y.message||"Failed to update eval case")}},R=async(I,K)=>{if(e!=null&&e.id)try{await He.delete(`/projects/${e.id}/eval-sets/${I}/cases/${K}`),n(X=>X.map(Y=>Y.id===I?{...Y,eval_cases:Y.eval_cases.filter(le=>le.id!==K)}:Y)),o===K&&a(null)}catch(X){x(X.message||"Failed to delete eval case")}},j=async I=>{if(e!=null&&e.id)try{await He.delete(`/projects/${e.id}/eval-sets/${I}`),n(K=>K.filter(X=>X.id!==I)),r===I&&(i(null),a(null))}catch(K){x(K.message||"Failed to delete eval set")}},W=async I=>{if(e!=null&&e.id)try{const K=await He.get(`/projects/${e.id}/eval-sets/${I}/export`),X=new Blob([JSON.stringify(K,null,2)],{type:"application/json"}),Y=URL.createObjectURL(X),le=document.createElement("a");le.href=Y;const J=t.find(ee=>ee.id===I);le.download=`${(J==null?void 0:J.name)||"eval-set"}.json`,document.body.appendChild(le),le.click(),document.body.removeChild(le),URL.revokeObjectURL(Y)}catch(K){x(K.message||"Failed to export eval set")}},G=async I=>{if(e!=null&&e.id)try{const K=await I.text(),X=JSON.parse(K),Y=await He.post(`/projects/${e.id}/eval-sets/import`,X);n(le=>[...le,Y.eval_set]),i(Y.eval_set.id),c(le=>new Set([...le,Y.eval_set.id]))}catch(K){x(K.message||"Failed to import eval set")}},h=k.useRef(null),F=async()=>{if(!(!(e!=null&&e.id)||t.length===0))try{const I=await Promise.all(t.map(async le=>{try{return await He.get(`/projects/${e.id}/eval-sets/${le.id}/export`)}catch{return le}})),K=new Blob([JSON.stringify(I,null,2)],{type:"application/json"}),X=URL.createObjectURL(K),Y=document.createElement("a");Y.href=X,Y.download=`${e.name||"project"}-eval-sets.json`,document.body.appendChild(Y),Y.click(),document.body.removeChild(Y),URL.revokeObjectURL(X)}catch(I){x(I.message||"Failed to export all eval sets")}},E=async(I,K)=>{if(e!=null&&e.id){y(X=>new Set([...X,K]));try{const X=await He.post(`/projects/${e.id}/eval-sets/${I}/cases/${K}/run`,{});d(Y=>new Map(Y).set(K,X.result))}catch(X){x(X.message||"Failed to run eval case")}finally{y(X=>{const Y=new Set(X);return Y.delete(K),Y})}}},Q=async I=>{if(!(e!=null&&e.id))return;const K=t.find(Y=>Y.id===I);if(!K)return;const X=K.eval_cases.map(Y=>Y.id);y(Y=>new Set([...Y,I,...X]));try{const Y=await He.post(`/projects/${e.id}/eval-sets/${I}/run`,{});f(le=>new Map(le).set(I,Y.result));for(const le of Y.result.case_results)d(J=>new Map(J).set(le.eval_case_id,le));try{await He.post(`/projects/${e.id}/eval-history`,Y.result),C()}catch(le){console.warn("Failed to save eval run to history:",le)}}catch(Y){x(Y.message||"Failed to run eval set")}finally{y(Y=>{const le=new Set(Y);return le.delete(I),X.forEach(J=>le.delete(J)),le})}},V=I=>{c(K=>{const X=new Set(K);return X.has(I)?X.delete(I):X.add(I),X})},ie=I=>{let K=I.eval_cases.length,X=0,Y=0,le=0;for(const J of I.eval_cases){const ee=u.get(J.id);ee?ee.passed?X++:Y++:le++}return{total:K,passed:X,failed:Y,pending:le}},he=I=>I==null?"-":`${Math.round(I*100)}%`;return e?s.jsxs("div",{className:"eval-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("aside",{className:"eval-sidebar",children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsx("h3",{children:"Evaluation Tests"}),s.jsxs("div",{className:"header-actions",children:[s.jsx("input",{type:"file",ref:h,accept:".json",style:{display:"none"},onChange:I=>{var X;const K=(X=I.target.files)==null?void 0:X[0];K&&(G(K),I.target.value="")}}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var I;return(I=h.current)==null?void 0:I.click()},title:"Import eval set from JSON",children:s.jsx(ta,{size:14})}),t.length>0&&s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:F,title:"Download all eval sets as JSON",children:s.jsx(mi,{size:14})}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:q,title:"Refresh",children:s.jsx(an,{size:14})}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:ne,title:"New eval set",children:[s.jsx(Je,{size:14}),"Set"]})]})]}),s.jsxs("div",{className:"eval-tree",children:[w&&s.jsx("p",{style:{color:"var(--text-muted)",padding:"16px"},children:"Loading..."}),v&&s.jsx("div",{style:{color:"var(--error)",padding:"16px",fontSize:"13px"},children:v}),!w&&t.length===0&&s.jsxs("div",{className:"empty-state",style:{padding:"32px"},children:[s.jsx(ku,{size:32}),s.jsxs("p",{children:["No evaluation sets yet.",s.jsx("br",{}),"Create one to get started."]})]}),t.map(I=>{const K=l.has(I.id),X=ie(I),Y=m.has(I.id);return s.jsxs("div",{className:"tree-item",children:[s.jsxs("div",{className:`tree-set ${r===I.id&&!o?"selected":""}`,onClick:()=>L(I.id),children:[s.jsx("button",{className:"expand-btn",onClick:le=>{le.stopPropagation(),V(I.id)},children:I.eval_cases.length>0?K?s.jsx(Rt,{size:14}):s.jsx(Mt,{size:14}):s.jsx("span",{style:{width:14}})}),s.jsx(Bg,{size:14,style:{color:"var(--accent-secondary)"}}),s.jsx("span",{className:"set-name",children:I.name}),s.jsx("button",{className:"add-case-btn",onClick:le=>{le.stopPropagation(),T(I.id)},title:"Add test case",style:{padding:"2px 4px",marginLeft:4,background:"transparent",border:"none",cursor:"pointer",opacity:.6,display:"flex",alignItems:"center"},children:s.jsx(Je,{size:12})}),X.total>0&&s.jsxs("span",{className:"set-stats",children:[X.passed>0&&s.jsx("span",{className:"stat-passed",children:X.passed}),X.failed>0&&s.jsx("span",{className:"stat-failed",children:X.failed}),X.pending>0&&s.jsx("span",{className:"stat-pending",children:X.pending})]}),s.jsx("button",{className:"run-btn",onClick:le=>{le.stopPropagation(),Q(I.id)},title:"Run all tests in this set",disabled:Y,children:Y?s.jsx(ni,{size:12,className:"spinning"}):s.jsx(qn,{size:12})})]}),K&&s.jsx("div",{className:"tree-children",style:{paddingLeft:16},children:I.eval_cases.map(le=>{var oe;const J=u.get(le.id),ee=m.has(le.id);return s.jsxs("div",{className:`tree-case ${o===le.id?"selected":""}`,onClick:()=>S(I.id,le.id),children:[ee?s.jsx(ni,{size:14,className:"spinning",style:{color:"var(--warning)"}}):J?J.passed?s.jsx(hr,{size:14,style:{color:"var(--success)"}}):s.jsx(Xr,{size:14,style:{color:"var(--error)"}}):s.jsx(Eo,{size:14,style:{color:"var(--text-muted)"}}),s.jsx("span",{className:"case-name",children:le.name}),J&&J.metric_results.length>0&&s.jsx("span",{style:{fontSize:11,color:J.passed?"var(--success)":"var(--error)"},children:he((oe=J.metric_results[0])==null?void 0:oe.score)}),s.jsx("button",{className:"run-btn",onClick:xe=>{xe.stopPropagation(),E(I.id,le.id)},disabled:ee,children:s.jsx(qn,{size:12})})]},le.id)})})]},I.id)})]}),s.jsxs("div",{className:"history-section",children:[s.jsx("div",{className:"history-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 12px",borderTop:"1px solid var(--border-color)",background:"var(--bg-secondary)"},children:s.jsxs("span",{style:{fontWeight:500,fontSize:13},children:["Previous Runs (",g.length,")"]})}),s.jsx("div",{className:"history-list",style:{maxHeight:200,overflowY:"auto"},children:g.length===0?s.jsx("div",{style:{padding:"12px",color:"var(--text-secondary)",fontSize:12,textAlign:"center"},children:"No previous runs"}):[...g].sort((I,K)=>(K.started_at||0)-(I.started_at||0)).map(I=>{const K=I.passed_cases===I.total_cases;return s.jsx("div",{className:`history-item ${(N==null?void 0:N.id)===I.id?"selected":""}`,onClick:()=>b(I.id),style:{padding:"8px 12px",borderBottom:"1px solid var(--border-color)",cursor:"pointer",background:(N==null?void 0:N.id)===I.id?"var(--bg-tertiary)":"transparent",fontSize:12},children:s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[K?s.jsx(hr,{size:14,style:{color:"var(--success)",flexShrink:0}}):s.jsx(Xr,{size:14,style:{color:"var(--error)",flexShrink:0}}),s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:500},children:I.eval_set_name||"Unnamed"}),s.jsx("div",{style:{color:"var(--text-secondary)",fontSize:11},children:new Date(I.started_at*1e3).toLocaleString()})]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsxs("span",{style:{color:K?"var(--success)":"var(--error)",fontWeight:500,fontSize:11},children:[I.passed_cases,"/",I.total_cases]}),s.jsx("button",{className:"btn btn-icon",onClick:X=>{X.stopPropagation(),M(I.id)},title:"Delete run",style:{padding:2},children:s.jsx(De,{size:12})})]})]})},I.id)})})]})]}),s.jsx("div",{className:"eval-editor",children:N?s.jsx(zC,{run:N,onClose:A}):B?s.jsx(TC,{evalCase:B,evalSetId:r,projectId:e.id,result:u.get(B.id),isRunning:m.has(B.id),onUpdate:I=>$(r,B.id,I),onDelete:()=>R(r,B.id),onRun:()=>E(r,B.id),onClearResult:()=>d(I=>{const K=new Map(I);return K.delete(B.id),K})}):U?s.jsx(PC,{evalSet:U,projectId:e.id,result:p.get(U.id),isRunning:m.has(U.id),caseResults:u,onUpdate:async I=>{try{const K=await He.put(`/projects/${e.id}/eval-sets/${U.id}`,I);n(X=>X.map(Y=>Y.id===U.id?K.eval_set:Y))}catch(K){x(K.message)}},onDelete:()=>j(U.id),onRun:()=>Q(U.id),onExport:()=>W(U.id)}):s.jsx("div",{className:"editor-content",children:s.jsxs("div",{className:"empty-state",children:[s.jsx(Eo,{size:48}),s.jsxs("p",{children:["Select a test case to edit",s.jsx("br",{}),"or create a new one"]})]})})})]}):null}function EC({value:e,onChange:t}){var a,l;const{project:n}=ct(),r=((a=n==null?void 0:n.app)==null?void 0:a.models)||[],i=(l=n==null?void 0:n.app)==null?void 0:l.default_model_id,o=r.find(c=>c.id===i);return s.jsxs("select",{value:e,onChange:c=>t(c.target.value),style:{width:"100%",maxWidth:400},children:[s.jsx("option",{value:"",children:o?`App Default (${o.model_name})`:"App Default"}),r.map(c=>s.jsx("option",{value:c.model_name,children:c.model_name},c.id)),s.jsx("option",{value:"gemini-2.0-flash",children:"gemini-2.0-flash"}),s.jsx("option",{value:"gemini-2.5-flash",children:"gemini-2.5-flash"}),s.jsx("option",{value:"gemini-2.5-pro",children:"gemini-2.5-pro"})]})}function zC({run:e,onClose:t}){var m;const{project:n}=ct(),[r,i]=k.useState(!0),[o,a]=k.useState(new Set),l=e.case_results||[],c=l.filter(y=>y.passed).length,u=l.filter(y=>!y.passed).length,d=r?l.filter(y=>!y.passed):l,p=y=>{a(w=>{const z=new Set(w);return z.has(y)?z.delete(y):z.add(y),z})},f=y=>{y&&n&&(window.location.href=`/project/${n.id}/run?session=${y}`)};return s.jsxs("div",{className:"test-result-viewer",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"result-header",children:[s.jsx("h2",{children:e.eval_set_name||"Test Run Results"}),s.jsx("div",{style:{display:"flex",gap:8},children:s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{if(n){const y=`${window.location.origin}/project/${n.id}/evaluate?run=${e.id}`;navigator.clipboard.writeText(y)}},title:"Copy link to this run",children:s.jsx(vu,{size:14})})})]}),s.jsxs("div",{className:"result-summary",children:[s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Status"}),s.jsx("span",{className:`value ${c===l.length?"passed":"failed"}`,children:c===l.length?"PASSED":"FAILED"})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Passed"}),s.jsx("span",{className:"value passed",children:c})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Failed"}),s.jsx("span",{className:"value failed",children:u})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Total Cases"}),s.jsx("span",{className:"value",children:l.length})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Duration"}),s.jsx("span",{className:"value",children:e.duration_ms?`${(e.duration_ms/1e3).toFixed(1)}s`:"-"})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Tokens"}),s.jsx("span",{className:"value",children:((m=e.total_tokens)==null?void 0:m.toLocaleString())||"-"})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Run Time"}),s.jsx("span",{className:"value",style:{fontSize:13},children:e.started_at?new Date(e.started_at*1e3).toLocaleString():"-"})]})]}),s.jsxs("div",{style:{padding:"8px 20px",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",gap:10,background:"var(--bg-secondary)"},children:[s.jsxs("label",{className:"toggle-switch",style:{transform:"scale(0.85)"},children:[s.jsx("input",{type:"checkbox",checked:r,onChange:y=>i(y.target.checked)}),s.jsx("span",{className:"toggle-slider"})]}),s.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:"Hide passing results"})]}),s.jsxs("div",{className:"result-cases",children:[d.map((y,w)=>{var A,M,q,U,B,ne;const z=y.case_id||`case-${w}`,v=o.has(z),x=((A=y.metric_results)==null?void 0:A.filter(T=>!T.passed||T.error))||[],g=((M=y.metric_results)==null?void 0:M.filter(T=>T.passed&&!T.error))||[],P=((q=y.rubric_results)==null?void 0:q.filter(T=>!T.passed||T.error))||[],N=((U=y.rubric_results)==null?void 0:U.filter(T=>T.passed&&!T.error))||[],_=v?y.metric_results:x,C=v?y.rubric_results:P,b=v?y.invocation_results:(B=y.invocation_results)==null?void 0:B.filter(T=>{var $;return(($=T.metric_results)==null?void 0:$.some(R=>!R.passed))||T.error}),L=g.length+N.length,S=x.length+P.length;return s.jsxs("div",{className:"result-case",children:[s.jsxs("div",{className:"result-case-header",onClick:()=>p(z),style:{cursor:"pointer"},children:[s.jsxs("div",{className:"result-case-name",children:[s.jsx("span",{style:{marginRight:6,fontSize:12,color:"var(--text-muted)"},children:v?"▼":"▶"}),y.passed?s.jsx(hr,{size:16,style:{color:"var(--success)"}}):s.jsx(Xr,{size:16,style:{color:"var(--error)"}}),y.eval_set_name&&(e==null?void 0:e.eval_set_id)==="batch"&&s.jsx("span",{style:{fontSize:10,color:"var(--text-muted)",background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4,marginRight:6},children:y.eval_set_name}),y.case_name||`Case ${w+1}`,s.jsxs("span",{style:{marginLeft:10,fontSize:11,color:"var(--text-muted)",fontWeight:400},children:[S>0&&s.jsxs("span",{style:{color:"var(--error)"},children:[S," failed"]}),S>0&&L>0&&" · ",L>0&&s.jsxs("span",{style:{color:"var(--success)"},children:[L," passed"]})]})]}),s.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[y.session_id&&s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:T=>{T.stopPropagation(),f(y.session_id)},title:"View session in Run panel",children:[s.jsx(Dg,{size:12})," View Session"]}),s.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:y.duration_ms?`${(y.duration_ms/1e3).toFixed(2)}s`:""})]})]}),s.jsxs("div",{className:"result-case-details",children:[(_==null?void 0:_.length)>0&&s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:8},children:[_.map((T,$)=>{const R=oi(T.metric,T.score,T.threshold);return s.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:T.error?"rgba(255, 193, 7, 0.1)":T.passed?"rgba(var(--success-rgb), 0.05)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${T.error?"var(--warning)":T.passed?"var(--border-color)":"var(--error)"}`,display:"flex",flexDirection:"column",alignItems:"center",minWidth:80},children:[s.jsx("span",{style:{fontSize:10,color:"var(--text-secondary)",textAlign:"center",marginBottom:2},children:T.metric.replace(/_/g," ").replace("v1","").replace("v2","").trim()}),T.error?s.jsx("span",{style:{fontSize:10,color:"var(--warning)"},children:"Error"}):s.jsxs(s.Fragment,{children:[s.jsx("span",{style:{fontSize:14,fontWeight:600,color:T.passed?"var(--success)":"var(--error)"},children:R.value}),s.jsx("span",{style:{fontSize:9,color:"var(--text-muted)"},children:R.comparison})]})]},$)}),!v&&g.length>0&&s.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"var(--bg-tertiary)",border:"1px dashed var(--border-color)",display:"flex",alignItems:"center",fontSize:11,color:"var(--text-muted)"},children:["+",g.length," passed"]})]}),_==null?void 0:_.filter(T=>!T.passed&&T.rationale).map((T,$)=>s.jsxs("div",{style:{marginTop:8,padding:"8px 12px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:12},children:[s.jsxs("div",{style:{fontWeight:500,marginBottom:4,color:"var(--error)",fontSize:11},children:[T.metric.replace(/_/g," ")," - Why it failed:"]}),s.jsx("div",{style:{whiteSpace:"pre-wrap",color:"var(--text-secondary)",lineHeight:1.4},children:T.rationale})]},`rationale-${$}`)),(C==null?void 0:C.length)>0&&s.jsxs("div",{style:{marginTop:8},children:[s.jsx("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:4},children:"Custom Rubrics"}),C.map((T,$)=>s.jsxs("div",{style:{marginBottom:T.rationale&&!T.passed?8:4},children:[s.jsxs("div",{className:"metric-row",children:[s.jsx("span",{className:"metric-name",style:{flex:1},children:T.rubric}),s.jsx("span",{className:`metric-value ${T.passed?"passed":"failed"}`,children:T.passed?"✓ Pass":"✗ Fail"})]}),!T.passed&&T.rationale&&s.jsxs("div",{style:{marginTop:4,marginLeft:8,padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:11,color:"var(--text-secondary)"},children:[s.jsx("strong",{style:{color:"var(--error)"},children:"Why:"})," ",T.rationale]}),T.error&&s.jsxs("div",{style:{marginTop:4,marginLeft:8,fontSize:11,color:"var(--warning)"},children:["Error: ",T.error]})]},$)),!v&&N.length>0&&s.jsxs("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:["+",N.length," passed rubric",N.length>1?"s":""]})]}),(b==null?void 0:b.length)>0&&s.jsxs("div",{className:"invocation-summary",children:[s.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:8},children:["Invocations (",b.length,!v&&((ne=y.invocation_results)==null?void 0:ne.length)>b.length?` of ${y.invocation_results.length}`:"",")"]}),b.map((T,$)=>s.jsxs("div",{className:"invocation-item",children:[s.jsxs("div",{className:"invocation-query",children:["Turn ",T.invocation_id||$+1,": ",T.user_message||"(no message)"]}),T.actual_response&&s.jsxs("div",{className:"invocation-response",children:["Response: ",T.actual_response.substring(0,200),T.actual_response.length>200?"...":""]})]},$))]}),y.error&&s.jsx("div",{style:{marginTop:12,padding:12,background:"rgba(255, 107, 107, 0.1)",borderRadius:"var(--radius-sm)",color:"var(--error)",fontSize:12,whiteSpace:"pre-wrap"},children:y.error})]})]},z)}),l.length===0&&s.jsx("div",{style:{textAlign:"center",padding:32,color:"var(--text-secondary)"},children:"No test cases in this run"})]})]})}function TC({evalCase:e,evalSetId:t,projectId:n,result:r,isRunning:i,onUpdate:o,onDelete:a,onRun:l,onClearResult:c}){var N,_,C;const{project:u}=ct(),[d,p]=k.useState(e),[f,m]=k.useState("assertions");k.useEffect(()=>{p(e)},[e.id]);const y=k.useCallback(b=>{p(L=>({...L,...b})),o(b)},[o]),w=()=>{const b={id:Jx(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]};y({invocations:[...d.invocations,b]})},z=(b,L)=>{const S=[...d.invocations];S[b]={...S[b],...L},y({invocations:S})},v=b=>{y({invocations:d.invocations.filter((L,S)=>S!==b)})},x=b=>{const L=[...d.invocations];L[b]={...L[b],expected_tool_calls:[...L[b].expected_tool_calls,{name:"",args:{},args_match_mode:"subset"}]},y({invocations:L})},g=(b,L,S)=>{const A=[...d.invocations],M=[...A[b].expected_tool_calls];M[L]={...M[L],...S},A[b]={...A[b],expected_tool_calls:M},y({invocations:A})},P=(b,L)=>{const S=[...d.invocations];S[b]={...S[b],expected_tool_calls:S[b].expected_tool_calls.filter((A,M)=>M!==L)},y({invocations:S})};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(Eo,{size:20,style:{color:"var(--accent-primary)"}}),s.jsx("input",{type:"text",value:d.name,onChange:b=>y({name:b.target.value}),placeholder:"Test case name"}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const b=`${window.location.origin}/project/${n}/evaluate?set=${t}&case=${e.id}`;navigator.clipboard.writeText(b)},title:"Copy link to this test case",children:s.jsx(vu,{size:14})}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:i,children:[i?s.jsx(ni,{size:14,className:"spinning"}):s.jsx(qn,{size:14}),"Run"]}),s.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:s.jsx(De,{size:14})})]}),s.jsxs("div",{className:"tabs",children:[s.jsxs("div",{className:`tab ${f==="assertions"?"active":""}`,onClick:()=>m("assertions"),children:[s.jsx(zo,{size:14,style:{marginRight:6}}),"Assertions (",d.invocations.length,")"]}),s.jsxs("div",{className:`tab ${f==="rubrics"?"active":""}`,onClick:()=>m("rubrics"),children:[s.jsx(ku,{size:14,style:{marginRight:6}}),"LLM Judges"]}),s.jsxs("div",{className:`tab ${f==="docs"?"active":""}`,onClick:()=>m("docs"),children:[s.jsx(No,{size:14,style:{marginRight:6}}),"Docs"]}),s.jsxs("div",{className:`tab ${f==="json"?"active":""}`,onClick:()=>m("json"),children:[s.jsx(un,{size:14,style:{marginRight:6}}),"JSON"]})]}),s.jsxs("div",{className:"editor-content",children:[f==="assertions"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{style:{display:"flex",gap:12,marginBottom:12},children:[s.jsxs("div",{style:{flex:1},children:[s.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"target_agent"}),s.jsxs("select",{value:d.target_agent||"",onChange:b=>y({target_agent:b.target.value||void 0}),style:{width:"100%"},children:[s.jsx("option",{value:"",children:"root_agent"}),(N=u==null?void 0:u.agents)==null?void 0:N.map(b=>s.jsx("option",{value:b.name,children:b.name},b.name))]})]}),s.jsxs("div",{style:{flex:1},children:[s.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"tags"}),s.jsx("input",{type:"text",value:d.tags.join(", "),onChange:b=>y({tags:b.target.value.split(",").map(L=>L.trim()).filter(Boolean)}),placeholder:"smoke, regression",style:{width:"100%"}})]})]}),s.jsxs("div",{className:"form-section",children:[s.jsx("h4",{children:"Description"}),s.jsx("textarea",{value:d.description,onChange:b=>y({description:b.target.value}),placeholder:"What does this test verify?",style:{minHeight:40}})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:["session_input ",s.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(initial state)"})]}),s.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:s.jsx(Ft,{height:"100%",defaultLanguage:"json",value:(()=>{var L;if((!d.initial_state||Object.keys(d.initial_state).length===0)&&((L=u==null?void 0:u.app)!=null&&L.state_keys)&&u.app.state_keys.length>0){const S={};return u.app.state_keys.forEach(A=>{A.default_value!==void 0?S[A.name]=A.default_value:S[A.name]=A.type==="string"?"":A.type==="number"?0:A.type==="boolean"?!1:A.type==="array"?[]:{}}),JSON.stringify(S,null,2)}return JSON.stringify(d.initial_state,null,2)})(),onChange:b=>{try{b&&y({initial_state:JSON.parse(b)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:[s.jsx(zo,{size:14}),"Conversation Turns"]}),d.invocations.map((b,L)=>s.jsxs("div",{className:"invocation-card",children:[s.jsxs("div",{className:"invocation-number",children:[s.jsx("span",{children:L+1}),d.invocations.length>1&&s.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>v(L),style:{padding:4},children:s.jsx(De,{size:10})})]}),s.jsxs("div",{className:"invocation-content",children:[s.jsxs("div",{className:"invocation-row",children:[s.jsxs("div",{className:"form-section",children:[s.jsx("label",{children:"User Query"}),s.jsx("textarea",{value:b.user_message,onChange:S=>z(L,{user_message:S.target.value}),placeholder:"The message to send to the agent..."})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("label",{children:["Expected Response ",s.jsx("span",{style:{color:"var(--text-muted)",fontWeight:400},children:"(ROUGE-1)"})]}),s.jsx("textarea",{value:b.expected_response||"",onChange:S=>z(L,{expected_response:S.target.value||void 0}),placeholder:"Expected text (partial match)..."})]})]}),b.expected_tool_calls.map((S,A)=>s.jsxs("div",{className:"tool-call-compact",children:[s.jsx("input",{type:"text",value:S.name,onChange:M=>g(L,A,{name:M.target.value}),placeholder:"tool_name",className:"tool-name-input"}),s.jsxs("div",{className:"pillbox-toggle",children:[s.jsx("button",{className:`pill ${S.args_match_mode==="subset"?"active":""}`,onClick:()=>g(L,A,{args_match_mode:"subset"}),children:"Partial"}),s.jsx("button",{className:`pill ${S.args_match_mode==="exact"?"active":""}`,onClick:()=>g(L,A,{args_match_mode:"exact"}),children:"Exact"})]}),s.jsx("div",{className:"tool-args-editor",children:s.jsx(Ft,{height:"22px",defaultLanguage:"json",value:JSON.stringify(S.args||{}),onChange:M=>{try{M&&g(L,A,{args:JSON.parse(M)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,wordWrap:"off",scrollbar:{vertical:"hidden",horizontal:"hidden"},overviewRulerLanes:0,hideCursorInOverviewRuler:!0,overviewRulerBorder:!1,renderLineHighlight:"none",fontSize:11,padding:{top:3,bottom:3},automaticLayout:!0}})}),s.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>P(L,A),style:{padding:"4px 6px"},children:s.jsx(De,{size:10})})]},A)),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>x(L),style:{marginTop:4},children:[s.jsx(Je,{size:12})," Assert Tool Call"]})]})]},b.id)),s.jsxs("button",{className:"btn btn-secondary",onClick:w,children:[s.jsx(Je,{size:14})," Add Turn"]})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:[s.jsx(hr,{size:14,style:{marginRight:6}}),"final_session_state ",s.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(optional)"})]}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Assert that session state contains these key-value pairs after all turns complete."}),s.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:s.jsx(Ft,{height:"100%",defaultLanguage:"json",value:d.expected_final_state?JSON.stringify(d.expected_final_state,null,2):"{}",onChange:b=>{if(!b||b==="{}")y({expected_final_state:void 0});else try{y({expected_final_state:JSON.parse(b)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]})]}),f==="rubrics"&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"form-section",style:{marginBottom:16},children:[{metric:"safety_v1",label:"safety_v1",default:.8,max:1},{metric:"hallucinations_v1",label:"hallucinations_v1",default:.8,max:1},{metric:"response_evaluation_score",label:"response_evaluation_score",default:3.5,max:5},{metric:"final_response_match_v2",label:"final_response_match_v2",default:.7,max:1}].map(({metric:b,label:L,default:S,max:A})=>{const M=(d.enabled_metrics||[]).find(U=>U.metric===b),q=(M==null?void 0:M.threshold)??S;return s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[s.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[s.jsx("input",{type:"checkbox",checked:!!M,onChange:U=>{const B=[...d.enabled_metrics||[]];if(U.target.checked)B.push({metric:b,threshold:S});else{const ne=B.findIndex(T=>T.metric===b);ne!==-1&&B.splice(ne,1)}y({enabled_metrics:B})}}),s.jsx("span",{className:"toggle-slider"})]}),s.jsx("span",{style:{fontSize:12,opacity:M?1:.5,minWidth:100},children:L}),s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:M?1:.4},children:"≥"}),s.jsx("input",{type:"number",min:A===5?1:0,max:A,step:.1,value:q,disabled:!M,onChange:U=>{const B=[...d.enabled_metrics||[]],ne=B.findIndex(T=>T.metric===b);ne!==-1&&(B[ne]={...B[ne],threshold:parseFloat(U.target.value)||0},y({enabled_metrics:B}))},style:{width:60,textAlign:"center",opacity:M?1:.3,padding:"2px 4px",fontSize:11}})]},b)})}),s.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--border-color)",margin:"16px 0"}}),s.jsxs("div",{className:"form-section",children:[s.jsx("h4",{children:"Custom Rubrics"}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Natural language criteria evaluated by an LLM judge. Returns pass/fail per rubric."}),d.rubrics.map((b,L)=>s.jsxs("div",{className:"tool-call-row",style:{marginBottom:8},children:[s.jsx("input",{type:"text",value:b.rubric,onChange:S=>{const A=[...d.rubrics];A[L]={rubric:S.target.value},y({rubrics:A})},placeholder:"e.g., The response mentions the return policy",style:{flex:1}}),s.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>y({rubrics:d.rubrics.filter((S,A)=>A!==L)}),children:s.jsx(De,{size:12})})]},L)),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>y({rubrics:[...d.rubrics,{rubric:""}]}),children:[s.jsx(Je,{size:12})," Add Rubric"]})]})]}),f==="docs"&&s.jsxs("div",{style:{fontSize:13,lineHeight:1.6,color:"var(--text-secondary)",overflowY:"auto",maxHeight:"100%"},children:[s.jsx("h3",{style:{marginBottom:16,color:"var(--text-primary)"},children:"Evaluation Test Case Guide"}),s.jsxs("section",{style:{marginBottom:24,padding:12,background:"rgba(var(--accent-primary-rgb), 0.1)",borderRadius:"var(--radius-md)",border:"1px solid var(--accent-primary)"},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Quick Overview"}),s.jsxs("p",{children:["Each test case simulates a ",s.jsx("strong",{children:"multi-turn conversation"})," with an agent. For each turn (invocation), you provide a user message and define what you expect the agent to do."]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Invocations"})," = conversation turns (user messages)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Expected Response"})," = the agent's ",s.jsx("em",{children:"final text reply"})," for that turn"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Expected Tool Calls"})," = tools the agent should invoke during that turn"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Session State"})," = test the ",s.jsx("em",{children:"final state"})," after ALL turns complete"]})]})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:'📝 What is "Expected Response"?'}),s.jsxs("p",{children:["The ",s.jsx("strong",{children:"Expected Response"})," is matched against the agent's ",s.jsx("strong",{children:"final response"})," for that specific turn — NOT every message."]}),s.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[s.jsx("p",{style:{marginBottom:8},children:s.jsx("strong",{children:"During one turn, an agent may:"})}),s.jsxs("ul",{style:{marginLeft:20,marginBottom:12},children:[s.jsx("li",{children:"Send intermediate thinking/reasoning messages"}),s.jsx("li",{children:"Call multiple tools"}),s.jsx("li",{children:"Transfer to sub-agents (who may respond)"}),s.jsxs("li",{children:["Finally send a ",s.jsx("em",{children:"concluding response"})]})]}),s.jsxs("p",{children:["Only the ",s.jsx("strong",{children:"last text response"})," from the agent for that turn is compared against your Expected Response."]})]}),s.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Tip: If you need to verify intermediate steps, use Tool Trajectory matching or custom Rubrics."})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🔄 Response Matching (ROUGE-1)"}),s.jsxs("p",{children:["The ",s.jsx("code",{children:"response_match_score"})," uses ",s.jsx("strong",{children:"ROUGE-1 F1 scoring"})," — fuzzy word-level matching:"]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsx("li",{children:"Tokenizes both expected and actual responses into words"}),s.jsx("li",{children:"Calculates word overlap (not exact string match)"}),s.jsx("li",{children:"Returns a score from 0.0 to 1.0"})]}),s.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[s.jsx("p",{children:s.jsx("strong",{children:"Example:"})}),s.jsxs("p",{children:["Expected: ",s.jsx("code",{children:'"The weather in Paris is sunny today"'})]}),s.jsxs("p",{children:["Actual: ",s.jsx("code",{children:'"Today in Paris, expect sunny weather"'})]}),s.jsx("p",{style:{marginTop:8,color:"var(--success)"},children:"✓ High ROUGE-1 score (same words, different order)"})]}),s.jsxs("p",{style:{marginTop:8},children:["A threshold of ",s.jsx("strong",{children:"0.7"})," means 70% word overlap is required to pass."]})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🛠️ Tool Trajectory Matching"}),s.jsxs("p",{children:["The ",s.jsx("code",{children:"tool_trajectory_avg_score"})," verifies the agent called expected tools. Match types:"]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Exact"})," — Same tools in same order, no extras allowed"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"In Order"})," — Expected tools appear in order, extras allowed between"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Any Order"})," — All expected tools present, any order, extras allowed"]})]}),s.jsx("p",{style:{marginTop:8},children:"For each tool, you can match by:"}),s.jsxs("ul",{style:{marginLeft:20,marginTop:4},children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Name Only"})," — Just check the tool was called"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Exact Args"})," — Arguments must match exactly (provide JSON)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Args Subset"})," — Your expected args must be present in actual args"]})]})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💾 Session State Testing"}),s.jsxs("p",{children:[s.jsx("strong",{children:"Initial State"})," (Settings tab) — Pre-populate session state before running the test:"]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsx("li",{children:"Set user preferences or context"}),s.jsx("li",{children:"Simulate a specific scenario"}),s.jsx("li",{children:"Test state-dependent behavior"})]}),s.jsxs("p",{style:{marginTop:12},children:[s.jsx("strong",{children:"Expected Final State"})," — Verified at the ",s.jsx("em",{children:"very end"})," of the test case, ",s.jsx("strong",{children:"after ALL invocations complete"}),"."]}),s.jsx("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8,borderLeft:"3px solid var(--warning)"},children:s.jsxs("p",{style:{margin:0},children:[s.jsx("strong",{children:"Important:"})," State is tested once after the entire conversation, NOT after each turn. To test state changes per-turn, use separate test cases."]})})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Target Agent (Settings tab)"}),s.jsxs("p",{children:["By default, tests run against the ",s.jsx("strong",{children:"root_agent"})," of your App. You can select a specific sub-agent to test in isolation:"]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsxs("li",{children:[s.jsx("strong",{children:"root_agent"})," — Test the full agent hierarchy (default)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Specific agent"})," — Unit test individual agents"]})]}),s.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Useful for testing sub-agents independently before integrating into the full system."})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📋 Custom Rubrics"}),s.jsx("p",{children:"Rubrics are custom yes/no criteria evaluated by an LLM judge. Examples:"}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsx("li",{children:'"Does the response mention the product price?"'}),s.jsx("li",{children:'"Is the tone professional and helpful?"'}),s.jsx("li",{children:'"Does the response avoid mentioning competitors?"'})]}),s.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Note: Rubric evaluation requires LLM-judged metrics to be enabled in the Eval Set."})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📊 Available Metrics"}),s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12},children:[s.jsx("thead",{children:s.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[s.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Metric"}),s.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Type"}),s.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Description"})]})}),s.jsx("tbody",{children:Object.keys(on).map(b=>s.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[s.jsx("td",{style:{padding:"8px 4px",fontFamily:"var(--font-mono)",fontSize:11},children:b}),s.jsx("td",{style:{padding:"8px 4px"},children:on[b].requiresJudge?s.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--accent-primary)",color:"white",borderRadius:4},children:"LLM Judge"}):s.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--bg-tertiary)",borderRadius:4},children:"Built-in"})}),s.jsx("td",{style:{padding:"8px 4px",color:"var(--text-muted)"},children:on[b].description})]},b))})]})]}),s.jsxs("section",{children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💡 Tips"}),s.jsxs("ul",{style:{marginLeft:20},children:[s.jsx("li",{children:"Start with simple single-turn tests, then add complexity"}),s.jsx("li",{children:'Use "In Order" matching for most tool trajectory tests'}),s.jsx("li",{children:"Lower ROUGE thresholds (0.5-0.6) for creative/varied responses"}),s.jsx("li",{children:"Higher thresholds (0.8-0.9) for factual/precise responses"}),s.jsx("li",{children:"Use tags to organize tests by feature or priority"}),s.jsx("li",{children:"Test sub-agents individually using Target Agent selector"})]})]})]}),f==="json"&&s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[s.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:s.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this test case. You can use this with ",s.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval"}),"."]})}),s.jsx("div",{style:{flex:1,minHeight:300,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:s.jsx(Ft,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify({name:d.name,description:d.description||void 0,tags:(_=d.tags)!=null&&_.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(b=>{var L;return{user_message:b.user_message,expected_response:b.expected_response||void 0,expected_tool_calls:(L=b.expected_tool_calls)!=null&&L.length?b.expected_tool_calls.map(S=>({tool_name:S.tool_name,args:S.match_type!=="name_only"&&Object.keys(S.args||{}).length?S.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(C=d.rubrics)!=null&&C.length?d.rubrics.map(b=>b.rubric):void 0},null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),s.jsx("div",{style:{display:"flex",gap:8},children:s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var L,S;const b=JSON.stringify({name:d.name,description:d.description||void 0,tags:(L=d.tags)!=null&&L.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(A=>{var M;return{user_message:A.user_message,expected_response:A.expected_response||void 0,expected_tool_calls:(M=A.expected_tool_calls)!=null&&M.length?A.expected_tool_calls.map(q=>({tool_name:q.tool_name,args:q.match_type!=="name_only"&&Object.keys(q.args||{}).length?q.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(S=d.rubrics)!=null&&S.length?d.rubrics.map(A=>A.rubric):void 0},null,2);navigator.clipboard.writeText(b)},children:[s.jsx(ea,{size:14})," Copy JSON"]})})]})]}),r&&s.jsxs("div",{className:"result-panel",children:[s.jsxs("div",{className:`result-header ${r.passed?"passed":"failed"}`,children:[r.passed?s.jsxs(s.Fragment,{children:[s.jsx(hr,{size:18})," ",s.jsx("strong",{children:"Passed"})]}):s.jsxs(s.Fragment,{children:[s.jsx(Xr,{size:18})," ",s.jsx("strong",{children:"Failed"})]}),s.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:12},children:[r.total_tokens?s.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},title:"Total tokens used",children:[r.total_tokens.toLocaleString()," tokens"]}):null,s.jsxs("span",{style:{color:"var(--text-muted)",fontSize:12},children:[r.duration_ms.toFixed(0),"ms"]}),r.session_id&&s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{window.location.href=`/project/${u==null?void 0:u.id}/run?session=${r.session_id}`},title:"View this session in the Run panel",style:{fontSize:11},children:[s.jsx(Dg,{size:12}),"View Session"]}),c&&s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Close test results",style:{fontSize:11,padding:"4px 8px"},children:"✕"})]})]}),s.jsx("div",{className:"result-scores",children:r.metric_results.map((b,L)=>{var A;const S=oi(b.metric,b.score,b.threshold);return s.jsxs("div",{className:"score-card",children:[s.jsx("div",{className:`score-value ${b.passed?"passed":"failed"}`,children:S.value}),s.jsx("div",{className:"score-label",children:((A=on[b.metric])==null?void 0:A.name)||b.metric}),s.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",marginTop:2},children:S.comparison}),b.error&&s.jsx("div",{style:{fontSize:10,color:"var(--error)",marginTop:4},children:b.error})]},L)})}),r.rubric_results&&r.rubric_results.length>0&&s.jsxs("div",{style:{marginTop:16},children:[s.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Custom Rubrics"}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:r.rubric_results.map((b,L)=>s.jsxs("div",{style:{padding:"8px 12px",borderRadius:"var(--radius-sm)",background:b.passed?"rgba(var(--success-rgb), 0.1)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${b.passed?"var(--success)":"var(--error)"}`,display:"flex",alignItems:"center",gap:10},children:[s.jsx("span",{style:{fontSize:16,color:b.passed?"var(--success)":"var(--error)",fontWeight:"bold"},children:b.passed?"✓":"✗"}),s.jsxs("div",{style:{flex:1},children:[s.jsx("div",{style:{fontSize:12,color:"var(--text-primary)"},children:b.rubric}),b.error&&s.jsxs("div",{style:{fontSize:10,color:"var(--error)",marginTop:2},children:["Error: ",b.error]})]})]},L))})]}),r.invocation_results.map((b,L)=>s.jsxs("div",{className:"result-details",children:[s.jsxs("h5",{children:["Turn ",L+1,": ",b.user_message.length>50?b.user_message.slice(0,50)+"…":b.user_message]}),b.metric_results.length>0&&s.jsx("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:b.metric_results.map((S,A)=>{var q;const M=oi(S.metric,S.score,S.threshold);return s.jsxs("span",{style:{fontSize:11,padding:"2px 6px",borderRadius:"var(--radius-sm)",background:S.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:S.passed?"var(--success)":"var(--error)"},children:[((q=on[S.metric])==null?void 0:q.name)||S.metric,": ",M.value]},A)})}),s.jsxs("div",{className:"detail-box",children:[s.jsx("strong",{children:"Actual Response:"}),`
`,b.actual_response||"(no response)",`

`,b.actual_tool_calls.length>0&&s.jsxs(s.Fragment,{children:[s.jsx("strong",{children:"Tool Calls:"}),`
`,b.actual_tool_calls.map((S,A)=>`  ${A+1}. ${S.name}(${JSON.stringify(S.args)})
`).join("")]})]})]},L)),r.error&&s.jsxs("div",{className:"result-details",children:[s.jsx("h5",{style:{color:"var(--error)"},children:"Error"}),s.jsx("div",{className:"detail-box",style:{color:"var(--error)"},children:r.error})]})]})]})}function PC({evalSet:e,projectId:t,result:n,isRunning:r,caseResults:i,onUpdate:o,onDelete:a,onRun:l,onExport:c}){var w,z,v,x;const[u,d]=k.useState(e.name),[p,f]=k.useState(!1);k.useEffect(()=>{d(e.name)},[e.id]);const m=k.useCallback(()=>{u!==e.name&&o({name:u})},[u,e.name,o]),y=g=>g==null?"-":`${Math.round(g*100)}%`;return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(Bg,{size:20,style:{color:"var(--accent-secondary)"}}),s.jsx("input",{type:"text",value:u,onChange:g=>d(g.target.value),onBlur:m,placeholder:"Eval set name"}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const g=`${window.location.origin}/project/${t}/evaluate?set=${e.id}`;navigator.clipboard.writeText(g)},title:"Copy link to this eval set",children:s.jsx(vu,{size:14})}),s.jsxs("button",{className:`btn btn-sm ${p?"btn-primary":"btn-secondary"}`,onClick:()=>f(!p),title:"View/Hide JSON",children:[s.jsx(un,{size:14}),"JSON"]}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Export as JSON (compatible with adk eval)",children:s.jsx(mi,{size:14})}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:r,children:[r?s.jsx(ni,{size:14,className:"spinning"}):s.jsx(qn,{size:14}),"Run All"]}),s.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:s.jsx(De,{size:14})})]}),s.jsx("div",{className:"editor-content",children:p?s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[s.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:s.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this evaluation set. Save this file and use with ",s.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval <agent_path> <eval_file.json>"})]})}),s.jsx("div",{style:{flex:1,minHeight:400,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:s.jsx(Ft,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(g=>{var P,N;return{name:g.name,description:g.description||void 0,tags:(P=g.tags)!=null&&P.length?g.tags:void 0,target_agent:g.target_agent!=="root_agent"?g.target_agent:void 0,invocations:g.invocations.map(_=>{var C;return{user_message:_.user_message,expected_response:_.expected_response||void 0,expected_tool_calls:(C=_.expected_tool_calls)!=null&&C.length?_.expected_tool_calls.map(b=>({tool_name:b.tool_name,args:b.match_type!=="name_only"&&Object.keys(b.args||{}).length?b.args:void 0})):void 0}}),session_input:Object.keys(g.session_input||{}).length?{state:g.session_input}:void 0,final_session_state:Object.keys(g.final_session_state||{}).length?g.final_session_state:void 0,rubrics:(N=g.rubrics)!=null&&N.length?g.rubrics.map(_=>_.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((w=e.eval_config.metrics)==null?void 0:w.filter(g=>g.enabled))||void 0}:void 0}],null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),s.jsx("div",{style:{display:"flex",gap:8},children:s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var P;const g=JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(N=>{var _,C;return{name:N.name,description:N.description||void 0,tags:(_=N.tags)!=null&&_.length?N.tags:void 0,target_agent:N.target_agent!=="root_agent"?N.target_agent:void 0,invocations:N.invocations.map(b=>{var L;return{user_message:b.user_message,expected_response:b.expected_response||void 0,expected_tool_calls:(L=b.expected_tool_calls)!=null&&L.length?b.expected_tool_calls.map(S=>({tool_name:S.tool_name,args:S.match_type!=="name_only"&&Object.keys(S.args||{}).length?S.args:void 0})):void 0}}),session_input:Object.keys(N.session_input||{}).length?{state:N.session_input}:void 0,final_session_state:Object.keys(N.final_session_state||{}).length?N.final_session_state:void 0,rubrics:(C=N.rubrics)!=null&&C.length?N.rubrics.map(b=>b.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((P=e.eval_config.metrics)==null?void 0:P.filter(N=>N.enabled))||void 0}:void 0}],null,2);navigator.clipboard.writeText(g)},children:[s.jsx(ea,{size:14})," Copy JSON"]})})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"form-section",children:[s.jsx("h4",{children:"Description"}),s.jsx("textarea",{value:e.description,onChange:g=>o({description:g.target.value}),placeholder:"Description of this evaluation set...",style:{minHeight:40}})]}),s.jsxs("div",{className:"form-section",children:[s.jsx("h4",{children:"LLM Judge Model"}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Model used for LLM-judged metrics (safety, hallucinations, etc.)."}),s.jsx(EC,{value:((z=e.eval_config)==null?void 0:z.judge_model)||"",onChange:g=>o({eval_config:{...e.eval_config,judge_model:g}})})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:[s.jsx(Wg,{size:14})," Evaluation Metrics"]}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Configure which metrics to use and their pass thresholds."}),Object.keys(on).map(g=>{var b,L,S;const P=on[g],N=(L=(b=e.eval_config)==null?void 0:b.metrics)==null?void 0:L.find(A=>A.metric===g),_=(N==null?void 0:N.enabled)??!1,C=((S=N==null?void 0:N.criterion)==null?void 0:S.threshold)??.7;return s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[s.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[s.jsx("input",{type:"checkbox",checked:_,onChange:A=>{var U;const M=[...((U=e.eval_config)==null?void 0:U.metrics)||[]],q=M.findIndex(B=>B.metric===g);A.target.checked?q===-1?M.push({metric:g,enabled:!0,criterion:{threshold:.7}}):M[q]={...M[q],enabled:!0}:q!==-1&&(M[q]={...M[q],enabled:!1}),o({eval_config:{...e.eval_config,metrics:M}})}}),s.jsx("span",{className:"toggle-slider"})]}),s.jsxs("span",{style:{fontSize:12,opacity:_?1:.5,minWidth:140,fontWeight:_?500:400},children:[P.name,P.requiresJudge&&s.jsx("span",{style:{fontSize:9,marginLeft:4,color:"var(--accent-primary)"},children:"LLM"})]}),s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:_?1:.4},children:"≥"}),s.jsx("input",{type:"number",min:0,max:1,step:.1,value:C,disabled:!_,onChange:A=>{var U;const M=[...((U=e.eval_config)==null?void 0:U.metrics)||[]],q=M.findIndex(B=>B.metric===g);q!==-1&&(M[q]={...M[q],criterion:{...M[q].criterion,threshold:parseFloat(A.target.value)||.7}},o({eval_config:{...e.eval_config,metrics:M}}))},style:{width:60,textAlign:"center",opacity:_?1:.3,padding:"2px 4px",fontSize:11}})]},g)}),s.jsxs("div",{className:"form-row",style:{marginTop:16},children:[s.jsxs("div",{className:"form-field",children:[s.jsx("label",{children:"Default Trajectory Match Type"}),s.jsxs("select",{value:((v=e.eval_config)==null?void 0:v.default_trajectory_match_type)||"in_order",onChange:g=>o({eval_config:{...e.eval_config,default_trajectory_match_type:g.target.value}}),children:[s.jsx("option",{value:"exact",children:"Exact (same order, no extras)"}),s.jsx("option",{value:"in_order",children:"In Order (extras allowed between)"}),s.jsx("option",{value:"any_order",children:"Any Order (all present, any order)"})]})]}),s.jsxs("div",{className:"form-field",children:[s.jsx("label",{children:"Number of Runs"}),s.jsx("input",{type:"number",min:1,max:10,value:((x=e.eval_config)==null?void 0:x.num_runs)||1,onChange:g=>o({eval_config:{...e.eval_config,num_runs:parseInt(g.target.value)||1}})}),s.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:"Run each test multiple times for statistical reliability."})]})]})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:[s.jsx(db,{size:14})," Coverage Summary"]}),n?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"result-scores",children:[s.jsxs("div",{className:"score-card",children:[s.jsxs("div",{className:"score-value",style:{color:"var(--accent-primary)"},children:[n.passed_cases,"/",n.total_cases]}),s.jsx("div",{className:"score-label",children:"Cases Passed"})]}),s.jsxs("div",{className:"score-card",children:[s.jsx("div",{className:`score-value ${n.overall_pass_rate>=.8?"passed":"failed"}`,children:y(n.overall_pass_rate)}),s.jsx("div",{className:"score-label",children:"Pass Rate"})]}),Object.entries(n.metric_avg_scores||{}).map(([g,P])=>{var _;const N=oi(g,P);return s.jsxs("div",{className:"score-card",children:[s.jsx("div",{className:"score-value",children:N.value}),s.jsxs("div",{className:"score-label",children:["Avg ",((_=on[g])==null?void 0:_.name)||g]})]},g)})]}),s.jsxs("div",{style:{marginTop:16},children:[s.jsx("div",{style:{marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Overall Pass Rate"}),s.jsx("div",{className:"coverage-bar",children:s.jsx("div",{className:`coverage-fill ${n.overall_pass_rate>=.8?"passed":"failed"}`,style:{width:`${n.overall_pass_rate*100}%`}})})]}),Object.entries(n.metric_pass_rates||{}).length>0&&s.jsxs("div",{style:{marginTop:16},children:[s.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Metric Pass Rates"}),Object.entries(n.metric_pass_rates).map(([g,P])=>{var N;return s.jsxs("div",{style:{marginBottom:8},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4},children:[s.jsx("span",{children:((N=on[g])==null?void 0:N.name)||g}),s.jsx("span",{children:y(P)})]}),s.jsx("div",{className:"coverage-bar",children:s.jsx("div",{className:`coverage-fill ${P>=.8?"passed":"failed"}`,style:{width:`${P*100}%`}})})]},g)})]}),s.jsxs("div",{style:{marginTop:16},children:[s.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Individual Results"}),s.jsxs("table",{style:{width:"100%",fontSize:12,borderCollapse:"collapse"},children:[s.jsx("thead",{children:s.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[s.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Test Case"}),s.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Metrics"}),s.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Status"})]})}),s.jsx("tbody",{children:n.case_results.map(g=>s.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[s.jsx("td",{style:{padding:"8px 4px"},children:g.eval_case_name}),s.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:g.metric_results.map((P,N)=>{const _=oi(P.metric,P.score,P.threshold);return s.jsx("span",{style:{fontSize:10,padding:"2px 4px",marginRight:4,borderRadius:"var(--radius-sm)",background:P.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:P.passed?"var(--success)":"var(--error)"},children:_.value},N)})}),s.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:g.passed?s.jsx(hr,{size:14,style:{color:"var(--success)"}}):g.error?s.jsx(No,{size:14,style:{color:"var(--warning)"}}):s.jsx(Xr,{size:14,style:{color:"var(--error)"}})})]},g.eval_case_id))})]})]})]}):s.jsxs("div",{style:{textAlign:"center",padding:"32px",color:"var(--text-muted)",background:"var(--bg-tertiary)",borderRadius:"var(--radius-md)"},children:[s.jsx(ku,{size:32,style:{marginBottom:8,opacity:.3}}),s.jsx("p",{children:"Run the evaluation set to see coverage metrics"})]})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:["Test Cases (",e.eval_cases.length,")"]}),e.eval_cases.length===0?s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"No test cases yet. Add cases to this eval set to start testing."}):s.jsx("ul",{style:{listStyle:"none",padding:0},children:e.eval_cases.map(g=>{const P=i.get(g.id);return s.jsxs("li",{style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",background:"var(--bg-tertiary)",borderRadius:"var(--radius-sm)",marginBottom:8},children:[P?P.passed?s.jsx(hr,{size:14,style:{color:"var(--success)"}}):s.jsx(Xr,{size:14,style:{color:"var(--error)"}}):s.jsx(Eo,{size:14,style:{color:"var(--text-muted)"}}),s.jsx("span",{style:{flex:1},children:g.name}),s.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},children:[g.invocations.length," turn(s)"]})]},g.id)})})]})]})})]})}function LC(){const{project:e,setProject:t}=ct(),[n,r]=k.useState(""),[i,o]=k.useState(!0),[a,l]=k.useState(!1),[c,u]=k.useState(null),[d,p]=k.useState(!1);if(!e)return null;k.useEffect(()=>{f()},[e.id]);async function f(){o(!0),u(null);try{const x=await Cg(e.id);r(x),l(!1)}catch(x){u(x.message)}finally{o(!1)}}function m(x){x!==void 0&&(r(x),l(!0),u(null))}async function y(){o(!0),u(null);try{const x=await Ng(e.id,n);t(x),l(!1)}catch(x){u(x.message)}finally{o(!1)}}function w(){navigator.clipboard.writeText(n),p(!0),setTimeout(()=>p(!1),2e3)}function z(){const x=new Blob([n],{type:"text/yaml"}),g=URL.createObjectURL(x),P=document.createElement("a");P.href=g,P.download=`${e.name}.yaml`,P.click(),URL.revokeObjectURL(g)}function v(){const x=document.createElement("input");x.type="file",x.accept=".yaml,.yml",x.onchange=async g=>{var _;const P=(_=g.target.files)==null?void 0:_[0];if(!P)return;const N=await P.text();r(N),l(!0)},x.click()}return s.jsxs("div",{className:"yaml-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"yaml-header",children:[s.jsxs("div",{className:"yaml-title",children:[s.jsx("h3",{children:"Project Configuration"}),a&&s.jsxs("span",{className:"status-badge warning",children:[s.jsx(No,{size:12}),"Unsaved changes"]}),c&&s.jsxs("span",{className:"status-badge error",children:[s.jsx(No,{size:12}),c]}),d&&s.jsxs("span",{className:"status-badge success",children:[s.jsx(hu,{size:12}),"Copied!"]})]}),s.jsxs("div",{className:"yaml-actions",children:[s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:w,title:"Copy to clipboard",children:[s.jsx(ea,{size:14}),"Copy"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:z,title:"Download YAML",children:[s.jsx(mi,{size:14}),"Download"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:v,title:"Upload YAML",children:[s.jsx(ta,{size:14}),"Upload"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:f,title:"Reload from server",children:[s.jsx(an,{size:14}),"Reload"]}),s.jsx("button",{className:"btn btn-primary btn-sm",onClick:y,disabled:!a||i,children:"Apply Changes"})]})]}),s.jsx("div",{className:"yaml-editor",children:s.jsx(Ft,{height:"100%",language:"yaml",theme:"vs-dark",value:n,onChange:m,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),s.jsxs("div",{className:"yaml-info",children:[s.jsx("p",{children:"This YAML represents your entire project configuration including the app, agents, tools, and state keys."}),s.jsxs("p",{children:["You can edit the YAML directly, then click ",s.jsx("code",{children:"Apply Changes"})," to update the project. Use ",s.jsx("code",{children:"Download"})," to save a backup or ",s.jsx("code",{children:"Upload"})," to import a configuration."]})]})]})}function Uf(e){return e.replace(/\\/g,"\\\\").replace(/"""/g,'\\"\\"\\"')}function AC(e,t="model"){if(!e)return"";const n=[`model="${e.model_name}"`];return e.api_base&&n.push(`api_base="${e.api_base}"`),e.temperature!=null&&n.push(`temperature=${e.temperature}`),e.max_output_tokens!=null&&n.push(`max_output_tokens=${e.max_output_tokens}`),e.top_p!=null&&n.push(`top_p=${e.top_p}`),e.top_k!=null&&n.push(`top_k=${e.top_k}`),e.provider==="litellm"?`${t} = LiteLlm(
    ${n.join(`,
    `)}
)`:e.provider==="anthropic"?`${t} = Claude(
    ${n.join(`,
    `)}
)`:`${t} = "${e.model_name}"  # Gemini model`}function RC(e,t){var n,r;if(e.type==="builtin")return e.name||"";if(e.type==="function")return e.name||"custom_tool";if(e.type==="agent"){const i=t.agents.find(o=>o.id===e.agent_id);return i?`AgentTool(agent=${i.name}_agent)`:"AgentTool(agent=sub_agent)"}else{if(e.type==="mcp")return(n=e.server)!=null&&n.name?`${e.server.name}_tools`:"";if(e.type==="skillset"){const i=e.skillset_id,o=(r=t.skillsets)==null?void 0:r.find(a=>a.id===i);return o?`${o.name.replace(/[^a-zA-Z0-9_]/g,"_")}_skillset`:""}}return""}function MC(e,t,n){const r=n.get(e.id)||`${e.name}_agent`;if(e.type==="LlmAgent"){const i=e,o=[`name="${e.name}"`];i.model&&o.push(`model=${e.name}_model`),i.instruction&&o.push(`instruction="""${Uf(i.instruction)}"""`),i.description&&o.push(`description="${Uf(i.description)}"`),i.output_key&&o.push(`output_key="${i.output_key}"`);const a=i.tools.map(c=>RC(c,t)).filter(c=>c&&!c.startsWith("#"));if(a.length>0&&o.push(`tools=[${a.join(", ")}]`),i.sub_agents&&i.sub_agents.length>0){const c=i.sub_agents.map(u=>n.get(u)||"sub_agent").join(", ");o.push(`sub_agents=[${c}]`)}i.include_contents==="none"&&o.push('include_contents="none"'),i.disallow_transfer_to_parent&&o.push("disallow_transfer_to_parent=True"),i.disallow_transfer_to_peers&&o.push("disallow_transfer_to_peers=True");const l={before_agent_callbacks:"before_agent_callback",after_agent_callbacks:"after_agent_callback",before_model_callbacks:"before_model_callback",after_model_callbacks:"after_model_callback",before_tool_callbacks:"before_tool_callback",after_tool_callbacks:"after_tool_callback"};for(const[c,u]of Object.entries(l)){const d=i[c]||[];if(d.length>0){const p=d.map(f=>{const m=t.custom_callbacks.find(y=>y.module_path===f.module_path);return m?`"${f.module_path}.${m.name}"`:`"${f.module_path}"`}).join(", ");if(d.length===1){const f=t.custom_callbacks.find(y=>y.module_path===d[0].module_path),m=f?`${d[0].module_path}.${f.name}`:d[0].module_path;o.push(`${u}="${m}"`)}else o.push(`${u}=[${p}]`)}}return`${r} = Agent(
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
)`}return`# Unknown agent type: ${e.type}`}function IC(e){const t=[];return e.connection_type==="stdio"?(t.push(`${e.name}_tools = McpToolset(`),t.push("    connection_params=StdioConnectionParams("),t.push("        server_params=StdioServerParameters("),e.command&&t.push(`            command="${e.command}",`),e.args.length>0&&t.push(`            args=${JSON.stringify(e.args)},`),Object.keys(e.env).length>0&&t.push(`            env=${JSON.stringify(e.env)},`),t.push("        ),"),e.timeout&&t.push(`        timeout=${e.timeout},`),t.push("    ),"),t.push(")")):e.connection_type==="sse"&&(t.push(`${e.name}_tools = McpToolset(`),t.push("    connection_params=SseConnectionParams("),e.url&&t.push(`        url="${e.url}",`),e.timeout&&t.push(`        timeout=${e.timeout},`),t.push("    ),"),t.push(")")),t.join(`
`)}function OC(e,t){const n=[];return n.push(`# SkillSet: ${e.name}`),n.push(`${e.name.replace(/[^a-zA-Z0-9_]/g,"_")}_manager = KnowledgeServiceManager()`),n.push(`${e.name.replace(/[^a-zA-Z0-9_]/g,"_")}_skillset = SkillSet(`),n.push(`    skillset_id="${e.id}",`),n.push(`    project_id="${t.id}",`),n.push(`    manager=${e.name.replace(/[^a-zA-Z0-9_]/g,"_")}_manager,`),e.embedding_model?n.push(`    model_name="${e.embedding_model}",`):n.push('    model_name="text-embedding-004",'),n.push(`    search_enabled=${e.search_enabled?"True":"False"},`),n.push(`    preload_enabled=${e.preload_enabled?"True":"False"},`),e.preload_top_k&&n.push(`    preload_top_k=${e.preload_top_k},`),e.preload_min_score&&n.push(`    preload_min_score=${e.preload_min_score},`),n.push(")"),n.join(`
`)}function $C(e){const t=[];t.push('"""'),t.push(`${e.name} - Generated by ADK Playground`),e.description&&(t.push(""),t.push(e.description)),t.push('"""'),t.push("");const n=e.app.env_vars||{},r=Object.keys(n);r.length>0&&(t.push("import os"),t.push(""),t.push("# Environment Variables"),t.push("# Set these before running, or uncomment and add values:"),r.forEach(C=>{const b=n[C];if(b){const S=C.toLowerCase().includes("key")||C.toLowerCase().includes("secret")?"***":b;t.push(`os.environ["${C}"] = "${S}"  # Set your ${C}`)}else t.push(`# os.environ["${C}"] = ""  # TODO: Set your ${C}`)}),t.push(""));const i=new Set;i.add("from google.adk.agents import Agent");const o=e.agents.some(C=>C.type==="SequentialAgent"),a=e.agents.some(C=>C.type==="LoopAgent"),l=e.agents.some(C=>C.type==="ParallelAgent");o&&i.add("from google.adk.agents import SequentialAgent"),a&&i.add("from google.adk.agents import LoopAgent"),l&&i.add("from google.adk.agents import ParallelAgent"),e.agents.some(C=>{var b;return C.type==="LlmAgent"&&((b=C.model)==null?void 0:b.provider)==="litellm"})&&i.add("from google.adk.models.lite_llm import LiteLlm"),e.agents.some(C=>C.type==="LlmAgent"&&C.tools.some(b=>b.type==="agent"))&&i.add("from google.adk.tools import AgentTool");const d=new Set;if(e.agents.forEach(C=>{C.type==="LlmAgent"&&C.tools.forEach(b=>{b.type==="builtin"&&b.name&&d.add(b.name)})}),d.has("exit_loop")&&i.add("from google.adk.tools import exit_loop"),d.has("google_search")&&i.add("from google.adk.tools import google_search"),e.mcp_servers.length>0){i.add("from google.adk.tools.mcp_tool.mcp_toolset import McpToolset");const C=e.mcp_servers.some(L=>L.connection_type==="stdio"),b=e.mcp_servers.some(L=>L.connection_type==="sse");C&&(i.add("from google.adk.tools.mcp_tool.mcp_session_manager import StdioConnectionParams"),i.add("from mcp import StdioServerParameters")),b&&i.add("from google.adk.tools.mcp_tool.mcp_session_manager import SseConnectionParams")}e.skillsets&&e.skillsets.length>0;const f=new Set;e.agents.forEach(C=>{"tools"in C&&C.tools&&C.tools.forEach(b=>{b.type==="skillset"&&f.add(b.skillset_id)})}),f.size>0&&(i.add("from skillset import SkillSet"),i.add("from knowledge_service import KnowledgeServiceManager")),i.add("from google.adk.apps import App");const m=e.app.plugins.length>0;m&&e.app.plugins.forEach(C=>{C.type==="ReflectAndRetryToolPlugin"&&i.add("from google.adk.plugins import ReflectAndRetryToolPlugin")});const y=Array.from(i).sort();t.push(...y),t.push(""),t.push("");const w=new Map;e.agents.forEach(C=>{const b=C.name.endsWith("_agent")?C.name:`${C.name}_agent`;w.set(C.id,b)});const z=[],v=new Set;function x(C){if(v.has(C))return;const b=e.agents.find(L=>L.id===C);b&&(b.sub_agents.forEach(L=>x(L)),v.add(C),z.push(b))}e.agents.forEach(C=>x(C.id));const g=new Map;z.forEach(C=>{C.type==="LlmAgent"&&C.tools.forEach(b=>{b.type==="mcp"&&b.server&&g.set(b.server.name,b.server)})}),g.size>0&&(t.push("# MCP Server Toolsets"),g.forEach(C=>{t.push(IC(C)),t.push("")}),t.push(""));const P=new Set;z.forEach(C=>{C.type==="LlmAgent"&&C.tools.forEach(b=>{b.type==="skillset"&&P.add(b.skillset_id)})}),P.size>0&&e.skillsets&&(t.push("# SkillSet Toolsets"),t.push("# Note: SkillSets store knowledge in ~/.adk-playground/skillsets/{project_id}/"),P.forEach(C=>{var L;const b=(L=e.skillsets)==null?void 0:L.find(S=>S.id===C);b&&(t.push(OC(b,e)),t.push(""))}),t.push("")),e.custom_tools.length>0&&(t.push("# Custom Tools"),e.custom_tools.forEach(C=>{t.push(C.code),t.push("")}),t.push("")),e.custom_callbacks&&e.custom_callbacks.length>0&&(t.push("# Custom Callbacks"),e.custom_callbacks.forEach(C=>{t.push(C.code),t.push("")}),t.push("")),t.push("# Models"),z.forEach(C=>{C.type==="LlmAgent"&&C.model&&(t.push(AC(C.model,`${C.name}_model`)),t.push(""))}),t.push(""),t.push("# Agents"),z.forEach(C=>{t.push(MC(C,e,w)),t.push("")});const N=e.agents.find(C=>C.id===e.app.root_agent_id),_=N?w.get(N.id):"root_agent";if(t.push(""),t.push(""),t.push("# App Configuration"),t.push("app = App("),t.push(`    name="${e.app.name}",`),t.push(`    root_agent=${_},`),m){const C=e.app.plugins.map(b=>b.type==="ReflectAndRetryToolPlugin"?`        ReflectAndRetryToolPlugin(max_retries=${b.max_retries||3})`:`        # ${b.type}()`);t.push("    plugins=["),t.push(C.join(`,
`)),t.push("    ],")}return t.push(")"),t.join(`
`)}function DC(){const{project:e}=ct(),[t,n]=k.useState(!1);if(!e)return null;const r=k.useMemo(()=>$C(e),[e]);function i(){navigator.clipboard.writeText(r),n(!0),setTimeout(()=>n(!1),2e3)}function o(){const a=new Blob([r],{type:"text/x-python"}),l=URL.createObjectURL(a),c=document.createElement("a");c.href=l,c.download=`${e.name}_agent.py`,c.click(),URL.revokeObjectURL(l)}return s.jsxs("div",{className:"code-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"code-header",children:[s.jsxs("div",{className:"code-title",children:[s.jsx(un,{size:16}),s.jsx("h3",{children:"Python Code"}),s.jsx("span",{className:"badge",children:"Generated"}),t&&s.jsxs("span",{className:"status-badge success",children:[s.jsx(hu,{size:12}),"Copied!"]})]}),s.jsxs("div",{className:"code-actions",children:[s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:i,title:"Copy to clipboard",children:[s.jsx(ea,{size:14}),"Copy"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:o,title:"Download Python file",children:[s.jsx(mi,{size:14}),"Download"]})]})]}),s.jsx("div",{className:"code-editor",children:s.jsx(Ft,{height:"100%",language:"python",theme:"vs-dark",value:r,options:{readOnly:!0,minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),s.jsxs("div",{className:"code-info",children:[s.jsx("p",{children:"This is the Python code equivalent of your project configuration. You can use this code directly with ADK."}),s.jsxs("p",{children:["Place this in a file named ",s.jsx("code",{children:"agent.py"})," inside your agent directory, then run with ",s.jsx("code",{children:"adk web ."})," or ",s.jsx("code",{children:"adk run your_agent"}),"."]})]})]})}const FC=[{id:"app",label:"App",icon:Wg},{id:"agents",label:"Agents",icon:cr},{id:"tools",label:"Tools",icon:Xt},{id:"callbacks",label:"Callbacks",icon:un},{id:"run",label:"Run",icon:Ug},{id:"skillsets",label:"SkillSets",icon:tb},{id:"eval",label:"Evaluate",icon:rc},{id:"yaml",label:"YAML",icon:rb},{id:"code",label:"Code",icon:un}],BC=["app","agents","tools","callbacks","run","skillsets","eval","yaml","code"];function nl(){var B,ne;const{projectId:e,tab:t,itemId:n}=t0(),r=fu(),{project:i,setProject:o,activeTab:a,setActiveTab:l,hasUnsavedChanges:c,setHasUnsavedChanges:u,selectedAgentId:d,setSelectedAgentId:p,selectedToolId:f,setSelectedToolId:m}=ct(),[y,w]=k.useState(!0),[z,v]=k.useState(!1),[x,g]=k.useState(!1),[P,N]=k.useState(null),_=k.useRef(!0),C=k.useRef(null);k.useEffect(()=>{t&&BC.includes(t)?l(t):!t&&e&&r(`/project/${e}/${a}`,{replace:!0})},[t,e]),k.useEffect(()=>{t==="agents"&&n?p(n):t==="tools"&&n&&m(n)},[t,n]);function b(T){l(T),T==="agents"&&d?r(`/project/${e}/${T}/${d}`,{replace:!0}):T==="tools"&&f?r(`/project/${e}/${T}/${f}`,{replace:!0}):r(`/project/${e}/${T}`,{replace:!0})}function L(T){T?r(`/project/${e}/${a}/${T}`,{replace:!0}):r(`/project/${e}/${a}`,{replace:!0})}k.useEffect(()=>(e&&S(e),()=>{o(null),u(!1)}),[e]);async function S(T){_.current=!0;try{const $=await kg(T);o($),C.current=JSON.stringify($),u(!1)}catch($){console.error("Failed to load project:",$),r("/")}finally{w(!1),setTimeout(()=>{_.current=!1},100)}}async function A(){if(i){v(!0);try{const{eval_sets:T,...$}=i;await Xl(i.id,$),C.current=JSON.stringify(i),u(!1)}catch(T){console.error("Failed to save project:",T)}finally{v(!1)}}}async function M(){if(i){g(!0),N(null),window.dispatchEvent(new CustomEvent("eval-tests-started"));try{let T=0,$=0;const R=[],j=[];for(const W of i.eval_sets||[]){if(W.eval_cases.length===0)continue;const G=await He.post(`/projects/${i.id}/eval-sets/${W.id}/run`,{});G.result&&(T+=G.result.passed_cases||0,$+=G.result.total_cases||0,G.result.case_results&&R.push(...G.result.case_results),j.push(G.result.eval_set_name||W.name||W.id))}if(R.length>0){const W={id:Date.now().toString(36)+Math.random().toString(36).substr(2,5),eval_set_id:"batch",eval_set_name:j.length>1?`All Tests (${j.length} sets)`:j[0]||"All Tests",started_at:Date.now()/1e3,completed_at:Date.now()/1e3,total_cases:$,passed_cases:T,failed_cases:$-T,case_results:R};try{await He.post(`/projects/${i.id}/eval-history`,W)}catch(G){console.warn("Failed to save batch eval run to history:",G)}}N({passed:T,total:$}),window.dispatchEvent(new CustomEvent("eval-tests-completed")),setTimeout(()=>N(null),5e3)}catch(T){console.error("Failed to run tests:",T),N({passed:0,total:-1}),setTimeout(()=>N(null),5e3)}finally{g(!1)}}}const q=k.useRef(null);k.useEffect(()=>{if(i&&!_.current&&q.current){const T=i.app.models||[],$=q.current||[];if(T.some((j,W)=>{const G=$.find(h=>h.id===j.id);return G?G.provider!==j.provider||G.model_name!==j.model_name||G.api_base!==j.api_base||G.temperature!==j.temperature||G.max_output_tokens!==j.max_output_tokens||G.top_p!==j.top_p||G.top_k!==j.top_k:!1})){const j=i.app.default_model_id,W=i.agents.map(h=>{if(h.type==="LlmAgent"&&h.model){const F=h.model._appModelId;if(F){const E=T.find(Q=>Q.id===F);if(E)return{...h,model:{provider:E.provider,model_name:E.model_name,api_base:E.api_base,temperature:E.temperature,max_output_tokens:E.max_output_tokens,top_p:E.top_p,top_k:E.top_k,fallbacks:[],_appModelId:F}}}else if(j){const E=T.find(Q=>Q.id===j);if(E&&h.model.provider===E.provider&&h.model.model_name===E.model_name&&h.model.api_base===E.api_base)return{...h,model:{provider:E.provider,model_name:E.model_name,api_base:E.api_base,temperature:E.temperature,max_output_tokens:E.max_output_tokens,top_p:E.top_p,top_k:E.top_k,fallbacks:[],_appModelId:j}}}}return h});W.some((h,F)=>JSON.stringify(h)!==JSON.stringify(i.agents[F]))&&o({...i,agents:W})}}i&&(q.current=i.app.models||[])},[i==null?void 0:i.app.models,i,o]);const U=k.useRef(null);return k.useEffect(()=>(i&&!_.current&&C.current&&JSON.stringify(i)!==C.current&&(u(!0),U.current&&clearTimeout(U.current),U.current=setTimeout(async()=>{try{const{eval_sets:$,...R}=i;await Xl(i.id,R),C.current=JSON.stringify(i),u(!1)}catch($){console.error("Auto-save failed:",$)}},500)),()=>{U.current&&clearTimeout(U.current)}),[i]),y?s.jsxs("div",{className:"loading-screen",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("header",{className:"top-bar",children:[s.jsxs("div",{className:"top-bar-left",children:[s.jsxs("button",{className:"back-btn",onClick:()=>r("/"),children:[s.jsx(Z0,{size:18}),"Project"]}),s.jsx("h1",{className:"project-name",children:i.name})]}),s.jsx("nav",{className:"tabs-bar",children:FC.map(T=>s.jsxs("button",{className:`tab-btn ${a===T.id?"active":""}`,onClick:()=>b(T.id),children:[s.jsx(T.icon,{size:14}),T.label]},T.id))}),s.jsxs("div",{className:"top-bar-right",children:[s.jsxs("button",{className:`btn ${P?P.total===-1?"btn-error":P.passed===P.total?"btn-success":"btn-warning":"btn-secondary"}`,onClick:M,disabled:x||!((B=i==null?void 0:i.eval_sets)!=null&&B.some(T=>T.eval_cases.length>0)),title:(ne=i==null?void 0:i.eval_sets)!=null&&ne.some(T=>T.eval_cases.length>0)?"Run all evaluation tests":"No test cases defined",style:{marginRight:8},children:[x?s.jsx(lb,{size:16,className:"spin"}):s.jsx(qn,{size:16}),x?"Testing...":P?P.total===-1?"Error":`${P.passed}/${P.total}`:"Test"]}),s.jsxs("button",{className:"btn btn-primary",onClick:A,disabled:z,children:[s.jsx(To,{size:16}),z?"Saving...":"Save"]})]})]}),s.jsxs("main",{className:"main-content",children:[a==="app"&&s.jsx(jb,{}),a==="agents"&&s.jsx(TS,{onSelectAgent:L}),a==="tools"&&s.jsx(uC,{onSelectTool:L}),a==="callbacks"&&s.jsx(pC,{onSelectCallback:L}),a==="run"&&s.jsx(wC,{}),a==="skillsets"&&s.jsx(SC,{}),a==="eval"&&s.jsx(NC,{}),a==="yaml"&&s.jsx(LC,{}),a==="code"&&s.jsx(DC,{})]})]}):null}function UC(){const{setMcpServers:e,setBuiltinTools:t}=ct();return k.useEffect(()=>{mu().then(e).catch(console.error),Eg().then(t).catch(console.error)},[e,t]),s.jsxs(y0,{children:[s.jsx(wr,{path:"/",element:s.jsx(gb,{})}),s.jsx(wr,{path:"/project/:projectId",element:s.jsx(nl,{})}),s.jsx(wr,{path:"/project/:projectId/:tab",element:s.jsx(nl,{})}),s.jsx(wr,{path:"/project/:projectId/:tab/:itemId",element:s.jsx(nl,{})}),s.jsx(wr,{path:"*",element:s.jsx(g0,{to:"/",replace:!0})})]})}rl.createRoot(document.getElementById("root")).render(s.jsx(zt.StrictMode,{children:s.jsx(k0,{children:s.jsx(UC,{})})}));
