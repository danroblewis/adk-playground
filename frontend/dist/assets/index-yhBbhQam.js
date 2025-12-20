function _w(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Ja=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ul(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ry={exports:{}},Wl={},iy={exports:{}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zs=Symbol.for("react.element"),jw=Symbol.for("react.portal"),Sw=Symbol.for("react.fragment"),Cw=Symbol.for("react.strict_mode"),Nw=Symbol.for("react.profiler"),Ew=Symbol.for("react.provider"),zw=Symbol.for("react.context"),Tw=Symbol.for("react.forward_ref"),Mw=Symbol.for("react.suspense"),Aw=Symbol.for("react.memo"),Lw=Symbol.for("react.lazy"),Ah=Symbol.iterator;function Pw(e){return e===null||typeof e!="object"?null:(e=Ah&&e[Ah]||e["@@iterator"],typeof e=="function"?e:null)}var oy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sy=Object.assign,ay={};function oo(e,t,n){this.props=e,this.context=t,this.refs=ay,this.updater=n||oy}oo.prototype.isReactComponent={};oo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};oo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ly(){}ly.prototype=oo.prototype;function Zd(e,t,n){this.props=e,this.context=t,this.refs=ay,this.updater=n||oy}var ep=Zd.prototype=new ly;ep.constructor=Zd;sy(ep,oo.prototype);ep.isPureReactComponent=!0;var Lh=Array.isArray,cy=Object.prototype.hasOwnProperty,tp={current:null},uy={key:!0,ref:!0,__self:!0,__source:!0};function dy(e,t,n){var r,i={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)cy.call(t,r)&&!uy.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:zs,type:e,key:s,ref:a,props:i,_owner:tp.current}}function Rw(e,t){return{$$typeof:zs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function np(e){return typeof e=="object"&&e!==null&&e.$$typeof===zs}function Iw(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ph=/\/+/g;function _c(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Iw(""+e.key):t.toString(36)}function Na(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case zs:case jw:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+_c(a,0):r,Lh(i)?(n="",e!=null&&(n=e.replace(Ph,"$&/")+"/"),Na(i,t,n,"",function(u){return u})):i!=null&&(np(i)&&(i=Rw(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Ph,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Lh(e))for(var l=0;l<e.length;l++){s=e[l];var c=r+_c(s,l);a+=Na(s,t,n,c,i)}else if(c=Pw(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=r+_c(s,l++),a+=Na(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ks(e,t,n){if(e==null)return e;var r=[],i=0;return Na(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Ow(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var At={current:null},Ea={transition:null},$w={ReactCurrentDispatcher:At,ReactCurrentBatchConfig:Ea,ReactCurrentOwner:tp};function py(){throw Error("act(...) is not supported in production builds of React.")}Le.Children={map:Ks,forEach:function(e,t,n){Ks(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ks(e,function(){t++}),t},toArray:function(e){return Ks(e,function(t){return t})||[]},only:function(e){if(!np(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Le.Component=oo;Le.Fragment=Sw;Le.Profiler=Nw;Le.PureComponent=Zd;Le.StrictMode=Cw;Le.Suspense=Mw;Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$w;Le.act=py;Le.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=sy({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=tp.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)cy.call(t,c)&&!uy.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:zs,type:e.type,key:i,ref:s,props:r,_owner:a}};Le.createContext=function(e){return e={$$typeof:zw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ew,_context:e},e.Consumer=e};Le.createElement=dy;Le.createFactory=function(e){var t=dy.bind(null,e);return t.type=e,t};Le.createRef=function(){return{current:null}};Le.forwardRef=function(e){return{$$typeof:Tw,render:e}};Le.isValidElement=np;Le.lazy=function(e){return{$$typeof:Lw,_payload:{_status:-1,_result:e},_init:Ow}};Le.memo=function(e,t){return{$$typeof:Aw,type:e,compare:t===void 0?null:t}};Le.startTransition=function(e){var t=Ea.transition;Ea.transition={};try{e()}finally{Ea.transition=t}};Le.unstable_act=py;Le.useCallback=function(e,t){return At.current.useCallback(e,t)};Le.useContext=function(e){return At.current.useContext(e)};Le.useDebugValue=function(){};Le.useDeferredValue=function(e){return At.current.useDeferredValue(e)};Le.useEffect=function(e,t){return At.current.useEffect(e,t)};Le.useId=function(){return At.current.useId()};Le.useImperativeHandle=function(e,t,n){return At.current.useImperativeHandle(e,t,n)};Le.useInsertionEffect=function(e,t){return At.current.useInsertionEffect(e,t)};Le.useLayoutEffect=function(e,t){return At.current.useLayoutEffect(e,t)};Le.useMemo=function(e,t){return At.current.useMemo(e,t)};Le.useReducer=function(e,t,n){return At.current.useReducer(e,t,n)};Le.useRef=function(e){return At.current.useRef(e)};Le.useState=function(e){return At.current.useState(e)};Le.useSyncExternalStore=function(e,t,n){return At.current.useSyncExternalStore(e,t,n)};Le.useTransition=function(){return At.current.useTransition()};Le.version="18.3.1";iy.exports=Le;var w=iy.exports;const Xt=Ul(w),Dw=_w({__proto__:null,default:Xt},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fw=w,Bw=Symbol.for("react.element"),Uw=Symbol.for("react.fragment"),Ww=Object.prototype.hasOwnProperty,Hw=Fw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vw={key:!0,ref:!0,__self:!0,__source:!0};function fy(e,t,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Ww.call(t,r)&&!Vw.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Bw,type:e,key:s,ref:a,props:i,_owner:Hw.current}}Wl.Fragment=Uw;Wl.jsx=fy;Wl.jsxs=fy;ry.exports=Wl;var o=ry.exports,Nu={},hy={exports:{}},nn={},my={exports:{}},gy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(B,$){var g=B.length;B.push($);e:for(;0<g;){var P=g-1>>>1,z=B[P];if(0<i(z,$))B[P]=$,B[g]=z,g=P;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var $=B[0],g=B.pop();if(g!==$){B[0]=g;e:for(var P=0,z=B.length,S=z>>>1;P<S;){var D=2*(P+1)-1,Z=B[D],ne=D+1,ue=B[ne];if(0>i(Z,g))ne<z&&0>i(ue,Z)?(B[P]=ue,B[ne]=g,P=ne):(B[P]=Z,B[D]=g,P=D);else if(ne<z&&0>i(ue,g))B[P]=ue,B[ne]=g,P=ne;else break e}}return $}function i(B,$){var g=B.sortIndex-$.sortIndex;return g!==0?g:B.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,p=null,f=3,h=!1,m=!1,b=!1,k=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(B){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=B)r(u),$.sortIndex=$.expirationTime,t(c,$);else break;$=n(u)}}function j(B){if(b=!1,v(B),!m)if(n(c)!==null)m=!0,O(T);else{var $=n(u);$!==null&&L(j,$.startTime-B)}}function T(B,$){m=!1,b&&(b=!1,x(E),E=-1),h=!0;var g=f;try{for(v($),p=n(c);p!==null&&(!(p.expirationTime>$)||B&&!R());){var P=p.callback;if(typeof P=="function"){p.callback=null,f=p.priorityLevel;var z=P(p.expirationTime<=$);$=e.unstable_now(),typeof z=="function"?p.callback=z:p===n(c)&&r(c),v($)}else r(c);p=n(c)}if(p!==null)var S=!0;else{var D=n(u);D!==null&&L(j,D.startTime-$),S=!1}return S}finally{p=null,f=g,h=!1}}var _=!1,A=null,E=-1,W=5,C=-1;function R(){return!(e.unstable_now()-C<W)}function H(){if(A!==null){var B=e.unstable_now();C=B;var $=!0;try{$=A(!0,B)}finally{$?Q():(_=!1,A=null)}}else _=!1}var Q;if(typeof y=="function")Q=function(){y(H)};else if(typeof MessageChannel<"u"){var M=new MessageChannel,F=M.port2;M.port1.onmessage=H,Q=function(){F.postMessage(null)}}else Q=function(){k(H,0)};function O(B){A=B,_||(_=!0,Q())}function L(B,$){E=k(function(){B(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(B){B.callback=null},e.unstable_continueExecution=function(){m||h||(m=!0,O(T))},e.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<B?Math.floor(1e3/B):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(B){switch(f){case 1:case 2:case 3:var $=3;break;default:$=f}var g=f;f=$;try{return B()}finally{f=g}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(B,$){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var g=f;f=B;try{return $()}finally{f=g}},e.unstable_scheduleCallback=function(B,$,g){var P=e.unstable_now();switch(typeof g=="object"&&g!==null?(g=g.delay,g=typeof g=="number"&&0<g?P+g:P):g=P,B){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=g+z,B={id:d++,callback:$,priorityLevel:B,startTime:g,expirationTime:z,sortIndex:-1},g>P?(B.sortIndex=g,t(u,B),n(c)===null&&B===n(u)&&(b?(x(E),E=-1):b=!0,L(j,g-P))):(B.sortIndex=z,t(c,B),m||h||(m=!0,O(T))),B},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(B){var $=f;return function(){var g=f;f=$;try{return B.apply(this,arguments)}finally{f=g}}}})(gy);my.exports=gy;var qw=my.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yw=w,en=qw;function ce(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xy=new Set,rs={};function ni(e,t){Hi(e,t),Hi(e+"Capture",t)}function Hi(e,t){for(rs[e]=t,e=0;e<t.length;e++)xy.add(t[e])}var Kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eu=Object.prototype.hasOwnProperty,Jw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rh={},Ih={};function Gw(e){return Eu.call(Ih,e)?!0:Eu.call(Rh,e)?!1:Jw.test(e)?Ih[e]=!0:(Rh[e]=!0,!1)}function Kw(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qw(e,t,n,r){if(t===null||typeof t>"u"||Kw(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Lt(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){yt[e]=new Lt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];yt[t]=new Lt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){yt[e]=new Lt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){yt[e]=new Lt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){yt[e]=new Lt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){yt[e]=new Lt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){yt[e]=new Lt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){yt[e]=new Lt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){yt[e]=new Lt(e,5,!1,e.toLowerCase(),null,!1,!1)});var rp=/[\-:]([a-z])/g;function ip(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(rp,ip);yt[t]=new Lt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(rp,ip);yt[t]=new Lt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(rp,ip);yt[t]=new Lt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){yt[e]=new Lt(e,1,!1,e.toLowerCase(),null,!1,!1)});yt.xlinkHref=new Lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){yt[e]=new Lt(e,1,!1,e.toLowerCase(),null,!0,!0)});function op(e,t,n,r){var i=yt.hasOwnProperty(t)?yt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qw(t,n,i,r)&&(n=null),r||i===null?Gw(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rr=Yw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qs=Symbol.for("react.element"),yi=Symbol.for("react.portal"),vi=Symbol.for("react.fragment"),sp=Symbol.for("react.strict_mode"),zu=Symbol.for("react.profiler"),yy=Symbol.for("react.provider"),vy=Symbol.for("react.context"),ap=Symbol.for("react.forward_ref"),Tu=Symbol.for("react.suspense"),Mu=Symbol.for("react.suspense_list"),lp=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),by=Symbol.for("react.offscreen"),Oh=Symbol.iterator;function yo(e){return e===null||typeof e!="object"?null:(e=Oh&&e[Oh]||e["@@iterator"],typeof e=="function"?e:null)}var Qe=Object.assign,jc;function Ro(e){if(jc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);jc=t&&t[1]||""}return`
`+jc+e}var Sc=!1;function Cc(e,t){if(!e||Sc)return"";Sc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{Sc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ro(e):""}function Xw(e){switch(e.tag){case 5:return Ro(e.type);case 16:return Ro("Lazy");case 13:return Ro("Suspense");case 19:return Ro("SuspenseList");case 0:case 2:case 15:return e=Cc(e.type,!1),e;case 11:return e=Cc(e.type.render,!1),e;case 1:return e=Cc(e.type,!0),e;default:return""}}function Au(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vi:return"Fragment";case yi:return"Portal";case zu:return"Profiler";case sp:return"StrictMode";case Tu:return"Suspense";case Mu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vy:return(e.displayName||"Context")+".Consumer";case yy:return(e._context.displayName||"Context")+".Provider";case ap:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case lp:return t=e.displayName||null,t!==null?t:Au(e.type)||"Memo";case sr:t=e._payload,e=e._init;try{return Au(e(t))}catch{}}return null}function Zw(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Au(t);case 8:return t===sp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function jr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ek(e){var t=wy(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xs(e){e._valueTracker||(e._valueTracker=ek(e))}function ky(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=wy(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ga(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Lu(e,t){var n=t.checked;return Qe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $h(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=jr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _y(e,t){t=t.checked,t!=null&&op(e,"checked",t,!1)}function Pu(e,t){_y(e,t);var n=jr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ru(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ru(e,t.type,jr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Dh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ru(e,t,n){(t!=="number"||Ga(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Io=Array.isArray;function Li(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+jr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Iu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(ce(91));return Qe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(ce(92));if(Io(n)){if(1<n.length)throw Error(ce(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:jr(n)}}function jy(e,t){var n=jr(t.value),r=jr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Sy(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ou(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Sy(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zs,Cy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zs=Zs||document.createElement("div"),Zs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function is(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tk=["Webkit","ms","Moz","O"];Object.keys(Wo).forEach(function(e){tk.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wo[t]=Wo[e]})});function Ny(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Wo.hasOwnProperty(e)&&Wo[e]?(""+t).trim():t+"px"}function Ey(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ny(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var nk=Qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $u(e,t){if(t){if(nk[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(ce(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(ce(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(ce(61))}if(t.style!=null&&typeof t.style!="object")throw Error(ce(62))}}function Du(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fu=null;function cp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bu=null,Pi=null,Ri=null;function Uh(e){if(e=As(e)){if(typeof Bu!="function")throw Error(ce(280));var t=e.stateNode;t&&(t=Jl(t),Bu(e.stateNode,e.type,t))}}function zy(e){Pi?Ri?Ri.push(e):Ri=[e]:Pi=e}function Ty(){if(Pi){var e=Pi,t=Ri;if(Ri=Pi=null,Uh(e),t)for(e=0;e<t.length;e++)Uh(t[e])}}function My(e,t){return e(t)}function Ay(){}var Nc=!1;function Ly(e,t,n){if(Nc)return e(t,n);Nc=!0;try{return My(e,t,n)}finally{Nc=!1,(Pi!==null||Ri!==null)&&(Ay(),Ty())}}function os(e,t){var n=e.stateNode;if(n===null)return null;var r=Jl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(ce(231,t,typeof n));return n}var Uu=!1;if(Kn)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){Uu=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{Uu=!1}function rk(e,t,n,r,i,s,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Ho=!1,Ka=null,Qa=!1,Wu=null,ik={onError:function(e){Ho=!0,Ka=e}};function ok(e,t,n,r,i,s,a,l,c){Ho=!1,Ka=null,rk.apply(ik,arguments)}function sk(e,t,n,r,i,s,a,l,c){if(ok.apply(this,arguments),Ho){if(Ho){var u=Ka;Ho=!1,Ka=null}else throw Error(ce(198));Qa||(Qa=!0,Wu=u)}}function ri(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Py(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Wh(e){if(ri(e)!==e)throw Error(ce(188))}function ak(e){var t=e.alternate;if(!t){if(t=ri(e),t===null)throw Error(ce(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Wh(i),e;if(s===r)return Wh(i),t;s=s.sibling}throw Error(ce(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(ce(189))}}if(n.alternate!==r)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?e:t}function Ry(e){return e=ak(e),e!==null?Iy(e):null}function Iy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Iy(e);if(t!==null)return t;e=e.sibling}return null}var Oy=en.unstable_scheduleCallback,Hh=en.unstable_cancelCallback,lk=en.unstable_shouldYield,ck=en.unstable_requestPaint,Ze=en.unstable_now,uk=en.unstable_getCurrentPriorityLevel,up=en.unstable_ImmediatePriority,$y=en.unstable_UserBlockingPriority,Xa=en.unstable_NormalPriority,dk=en.unstable_LowPriority,Dy=en.unstable_IdlePriority,Hl=null,An=null;function pk(e){if(An&&typeof An.onCommitFiberRoot=="function")try{An.onCommitFiberRoot(Hl,e,void 0,(e.current.flags&128)===128)}catch{}}var bn=Math.clz32?Math.clz32:mk,fk=Math.log,hk=Math.LN2;function mk(e){return e>>>=0,e===0?32:31-(fk(e)/hk|0)|0}var ea=64,ta=4194304;function Oo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Za(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Oo(l):(s&=a,s!==0&&(r=Oo(s)))}else a=n&~i,a!==0?r=Oo(a):s!==0&&(r=Oo(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-bn(t),i=1<<n,r|=e[n],t&=~i;return r}function gk(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xk(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-bn(s),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=gk(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function Hu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fy(){var e=ea;return ea<<=1,!(ea&4194240)&&(ea=64),e}function Ec(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ts(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-bn(t),e[t]=n}function yk(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-bn(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function dp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Fe=0;function By(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Uy,pp,Wy,Hy,Vy,Vu=!1,na=[],mr=null,gr=null,xr=null,ss=new Map,as=new Map,lr=[],vk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vh(e,t){switch(e){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":ss.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":as.delete(t.pointerId)}}function bo(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=As(t),t!==null&&pp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function bk(e,t,n,r,i){switch(t){case"focusin":return mr=bo(mr,e,t,n,r,i),!0;case"dragenter":return gr=bo(gr,e,t,n,r,i),!0;case"mouseover":return xr=bo(xr,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return ss.set(s,bo(ss.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,as.set(s,bo(as.get(s)||null,e,t,n,r,i)),!0}return!1}function qy(e){var t=Or(e.target);if(t!==null){var n=ri(t);if(n!==null){if(t=n.tag,t===13){if(t=Py(n),t!==null){e.blockedOn=t,Vy(e.priority,function(){Wy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function za(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=qu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Fu=r,n.target.dispatchEvent(r),Fu=null}else return t=As(n),t!==null&&pp(t),e.blockedOn=n,!1;t.shift()}return!0}function qh(e,t,n){za(e)&&n.delete(t)}function wk(){Vu=!1,mr!==null&&za(mr)&&(mr=null),gr!==null&&za(gr)&&(gr=null),xr!==null&&za(xr)&&(xr=null),ss.forEach(qh),as.forEach(qh)}function wo(e,t){e.blockedOn===t&&(e.blockedOn=null,Vu||(Vu=!0,en.unstable_scheduleCallback(en.unstable_NormalPriority,wk)))}function ls(e){function t(i){return wo(i,e)}if(0<na.length){wo(na[0],e);for(var n=1;n<na.length;n++){var r=na[n];r.blockedOn===e&&(r.blockedOn=null)}}for(mr!==null&&wo(mr,e),gr!==null&&wo(gr,e),xr!==null&&wo(xr,e),ss.forEach(t),as.forEach(t),n=0;n<lr.length;n++)r=lr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<lr.length&&(n=lr[0],n.blockedOn===null);)qy(n),n.blockedOn===null&&lr.shift()}var Ii=rr.ReactCurrentBatchConfig,el=!0;function kk(e,t,n,r){var i=Fe,s=Ii.transition;Ii.transition=null;try{Fe=1,fp(e,t,n,r)}finally{Fe=i,Ii.transition=s}}function _k(e,t,n,r){var i=Fe,s=Ii.transition;Ii.transition=null;try{Fe=4,fp(e,t,n,r)}finally{Fe=i,Ii.transition=s}}function fp(e,t,n,r){if(el){var i=qu(e,t,n,r);if(i===null)$c(e,t,r,tl,n),Vh(e,r);else if(bk(i,e,t,n,r))r.stopPropagation();else if(Vh(e,r),t&4&&-1<vk.indexOf(e)){for(;i!==null;){var s=As(i);if(s!==null&&Uy(s),s=qu(e,t,n,r),s===null&&$c(e,t,r,tl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else $c(e,t,r,null,n)}}var tl=null;function qu(e,t,n,r){if(tl=null,e=cp(r),e=Or(e),e!==null)if(t=ri(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Py(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return tl=e,null}function Yy(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uk()){case up:return 1;case $y:return 4;case Xa:case dk:return 16;case Dy:return 536870912;default:return 16}default:return 16}}var ur=null,hp=null,Ta=null;function Jy(){if(Ta)return Ta;var e,t=hp,n=t.length,r,i="value"in ur?ur.value:ur.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return Ta=i.slice(e,1<r?1-r:void 0)}function Ma(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ra(){return!0}function Yh(){return!1}function rn(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ra:Yh,this.isPropagationStopped=Yh,this}return Qe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ra)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ra)},persist:function(){},isPersistent:ra}),t}var so={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mp=rn(so),Ms=Qe({},so,{view:0,detail:0}),jk=rn(Ms),zc,Tc,ko,Vl=Qe({},Ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ko&&(ko&&e.type==="mousemove"?(zc=e.screenX-ko.screenX,Tc=e.screenY-ko.screenY):Tc=zc=0,ko=e),zc)},movementY:function(e){return"movementY"in e?e.movementY:Tc}}),Jh=rn(Vl),Sk=Qe({},Vl,{dataTransfer:0}),Ck=rn(Sk),Nk=Qe({},Ms,{relatedTarget:0}),Mc=rn(Nk),Ek=Qe({},so,{animationName:0,elapsedTime:0,pseudoElement:0}),zk=rn(Ek),Tk=Qe({},so,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mk=rn(Tk),Ak=Qe({},so,{data:0}),Gh=rn(Ak),Lk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ik(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rk[e])?!!t[e]:!1}function gp(){return Ik}var Ok=Qe({},Ms,{key:function(e){if(e.key){var t=Lk[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ma(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pk[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gp,charCode:function(e){return e.type==="keypress"?Ma(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ma(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$k=rn(Ok),Dk=Qe({},Vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kh=rn(Dk),Fk=Qe({},Ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gp}),Bk=rn(Fk),Uk=Qe({},so,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wk=rn(Uk),Hk=Qe({},Vl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vk=rn(Hk),qk=[9,13,27,32],xp=Kn&&"CompositionEvent"in window,Vo=null;Kn&&"documentMode"in document&&(Vo=document.documentMode);var Yk=Kn&&"TextEvent"in window&&!Vo,Gy=Kn&&(!xp||Vo&&8<Vo&&11>=Vo),Qh=" ",Xh=!1;function Ky(e,t){switch(e){case"keyup":return qk.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bi=!1;function Jk(e,t){switch(e){case"compositionend":return Qy(t);case"keypress":return t.which!==32?null:(Xh=!0,Qh);case"textInput":return e=t.data,e===Qh&&Xh?null:e;default:return null}}function Gk(e,t){if(bi)return e==="compositionend"||!xp&&Ky(e,t)?(e=Jy(),Ta=hp=ur=null,bi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gy&&t.locale!=="ko"?null:t.data;default:return null}}var Kk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kk[e.type]:t==="textarea"}function Xy(e,t,n,r){zy(r),t=nl(t,"onChange"),0<t.length&&(n=new mp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qo=null,cs=null;function Qk(e){cv(e,0)}function ql(e){var t=_i(e);if(ky(t))return e}function Xk(e,t){if(e==="change")return t}var Zy=!1;if(Kn){var Ac;if(Kn){var Lc="oninput"in document;if(!Lc){var em=document.createElement("div");em.setAttribute("oninput","return;"),Lc=typeof em.oninput=="function"}Ac=Lc}else Ac=!1;Zy=Ac&&(!document.documentMode||9<document.documentMode)}function tm(){qo&&(qo.detachEvent("onpropertychange",ev),cs=qo=null)}function ev(e){if(e.propertyName==="value"&&ql(cs)){var t=[];Xy(t,cs,e,cp(e)),Ly(Qk,t)}}function Zk(e,t,n){e==="focusin"?(tm(),qo=t,cs=n,qo.attachEvent("onpropertychange",ev)):e==="focusout"&&tm()}function e2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ql(cs)}function t2(e,t){if(e==="click")return ql(t)}function n2(e,t){if(e==="input"||e==="change")return ql(t)}function r2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _n=typeof Object.is=="function"?Object.is:r2;function us(e,t){if(_n(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Eu.call(t,i)||!_n(e[i],t[i]))return!1}return!0}function nm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rm(e,t){var n=nm(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nm(n)}}function tv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nv(){for(var e=window,t=Ga();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ga(e.document)}return t}function yp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function i2(e){var t=nv(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&tv(n.ownerDocument.documentElement,n)){if(r!==null&&yp(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=rm(n,s);var a=rm(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var o2=Kn&&"documentMode"in document&&11>=document.documentMode,wi=null,Yu=null,Yo=null,Ju=!1;function im(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ju||wi==null||wi!==Ga(r)||(r=wi,"selectionStart"in r&&yp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yo&&us(Yo,r)||(Yo=r,r=nl(Yu,"onSelect"),0<r.length&&(t=new mp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=wi)))}function ia(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ki={animationend:ia("Animation","AnimationEnd"),animationiteration:ia("Animation","AnimationIteration"),animationstart:ia("Animation","AnimationStart"),transitionend:ia("Transition","TransitionEnd")},Pc={},rv={};Kn&&(rv=document.createElement("div").style,"AnimationEvent"in window||(delete ki.animationend.animation,delete ki.animationiteration.animation,delete ki.animationstart.animation),"TransitionEvent"in window||delete ki.transitionend.transition);function Yl(e){if(Pc[e])return Pc[e];if(!ki[e])return e;var t=ki[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in rv)return Pc[e]=t[n];return e}var iv=Yl("animationend"),ov=Yl("animationiteration"),sv=Yl("animationstart"),av=Yl("transitionend"),lv=new Map,om="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(e,t){lv.set(e,t),ni(t,[e])}for(var Rc=0;Rc<om.length;Rc++){var Ic=om[Rc],s2=Ic.toLowerCase(),a2=Ic[0].toUpperCase()+Ic.slice(1);Er(s2,"on"+a2)}Er(iv,"onAnimationEnd");Er(ov,"onAnimationIteration");Er(sv,"onAnimationStart");Er("dblclick","onDoubleClick");Er("focusin","onFocus");Er("focusout","onBlur");Er(av,"onTransitionEnd");Hi("onMouseEnter",["mouseout","mouseover"]);Hi("onMouseLeave",["mouseout","mouseover"]);Hi("onPointerEnter",["pointerout","pointerover"]);Hi("onPointerLeave",["pointerout","pointerover"]);ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ni("onBeforeInput",["compositionend","keypress","textInput","paste"]);ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),l2=new Set("cancel close invalid load scroll toggle".split(" ").concat($o));function sm(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,sk(r,t,void 0,e),e.currentTarget=null}function cv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;sm(i,l,u),s=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;sm(i,l,u),s=c}}}if(Qa)throw e=Wu,Qa=!1,Wu=null,e}function Ve(e,t){var n=t[Zu];n===void 0&&(n=t[Zu]=new Set);var r=e+"__bubble";n.has(r)||(uv(t,e,2,!1),n.add(r))}function Oc(e,t,n){var r=0;t&&(r|=4),uv(n,e,r,t)}var oa="_reactListening"+Math.random().toString(36).slice(2);function ds(e){if(!e[oa]){e[oa]=!0,xy.forEach(function(n){n!=="selectionchange"&&(l2.has(n)||Oc(n,!1,e),Oc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[oa]||(t[oa]=!0,Oc("selectionchange",!1,t))}}function uv(e,t,n,r){switch(Yy(t)){case 1:var i=kk;break;case 4:i=_k;break;default:i=fp}n=i.bind(null,t,n,e),i=void 0,!Uu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function $c(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Or(l),a===null)return;if(c=a.tag,c===5||c===6){r=s=a;continue e}l=l.parentNode}}r=r.return}Ly(function(){var u=s,d=cp(n),p=[];e:{var f=lv.get(e);if(f!==void 0){var h=mp,m=e;switch(e){case"keypress":if(Ma(n)===0)break e;case"keydown":case"keyup":h=$k;break;case"focusin":m="focus",h=Mc;break;case"focusout":m="blur",h=Mc;break;case"beforeblur":case"afterblur":h=Mc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Jh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Ck;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Bk;break;case iv:case ov:case sv:h=zk;break;case av:h=Wk;break;case"scroll":h=jk;break;case"wheel":h=Vk;break;case"copy":case"cut":case"paste":h=Mk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Kh}var b=(t&4)!==0,k=!b&&e==="scroll",x=b?f!==null?f+"Capture":null:f;b=[];for(var y=u,v;y!==null;){v=y;var j=v.stateNode;if(v.tag===5&&j!==null&&(v=j,x!==null&&(j=os(y,x),j!=null&&b.push(ps(y,j,v)))),k)break;y=y.return}0<b.length&&(f=new h(f,m,null,n,d),p.push({event:f,listeners:b}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==Fu&&(m=n.relatedTarget||n.fromElement)&&(Or(m)||m[Qn]))break e;if((h||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=u,m=m?Or(m):null,m!==null&&(k=ri(m),m!==k||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=u),h!==m)){if(b=Jh,j="onMouseLeave",x="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(b=Kh,j="onPointerLeave",x="onPointerEnter",y="pointer"),k=h==null?f:_i(h),v=m==null?f:_i(m),f=new b(j,y+"leave",h,n,d),f.target=k,f.relatedTarget=v,j=null,Or(d)===u&&(b=new b(x,y+"enter",m,n,d),b.target=v,b.relatedTarget=k,j=b),k=j,h&&m)t:{for(b=h,x=m,y=0,v=b;v;v=pi(v))y++;for(v=0,j=x;j;j=pi(j))v++;for(;0<y-v;)b=pi(b),y--;for(;0<v-y;)x=pi(x),v--;for(;y--;){if(b===x||x!==null&&b===x.alternate)break t;b=pi(b),x=pi(x)}b=null}else b=null;h!==null&&am(p,f,h,b,!1),m!==null&&k!==null&&am(p,k,m,b,!0)}}e:{if(f=u?_i(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var T=Xk;else if(Zh(f))if(Zy)T=n2;else{T=e2;var _=Zk}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=t2);if(T&&(T=T(e,u))){Xy(p,T,n,d);break e}_&&_(e,f,u),e==="focusout"&&(_=f._wrapperState)&&_.controlled&&f.type==="number"&&Ru(f,"number",f.value)}switch(_=u?_i(u):window,e){case"focusin":(Zh(_)||_.contentEditable==="true")&&(wi=_,Yu=u,Yo=null);break;case"focusout":Yo=Yu=wi=null;break;case"mousedown":Ju=!0;break;case"contextmenu":case"mouseup":case"dragend":Ju=!1,im(p,n,d);break;case"selectionchange":if(o2)break;case"keydown":case"keyup":im(p,n,d)}var A;if(xp)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else bi?Ky(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Gy&&n.locale!=="ko"&&(bi||E!=="onCompositionStart"?E==="onCompositionEnd"&&bi&&(A=Jy()):(ur=d,hp="value"in ur?ur.value:ur.textContent,bi=!0)),_=nl(u,E),0<_.length&&(E=new Gh(E,e,null,n,d),p.push({event:E,listeners:_}),A?E.data=A:(A=Qy(n),A!==null&&(E.data=A)))),(A=Yk?Jk(e,n):Gk(e,n))&&(u=nl(u,"onBeforeInput"),0<u.length&&(d=new Gh("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=A))}cv(p,t)})}function ps(e,t,n){return{instance:e,listener:t,currentTarget:n}}function nl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=os(e,n),s!=null&&r.unshift(ps(e,s,i)),s=os(e,t),s!=null&&r.push(ps(e,s,i))),e=e.return}return r}function pi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function am(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=os(n,s),c!=null&&a.unshift(ps(n,c,l))):i||(c=os(n,s),c!=null&&a.push(ps(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var c2=/\r\n?/g,u2=/\u0000|\uFFFD/g;function lm(e){return(typeof e=="string"?e:""+e).replace(c2,`
`).replace(u2,"")}function sa(e,t,n){if(t=lm(t),lm(e)!==t&&n)throw Error(ce(425))}function rl(){}var Gu=null,Ku=null;function Qu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xu=typeof setTimeout=="function"?setTimeout:void 0,d2=typeof clearTimeout=="function"?clearTimeout:void 0,cm=typeof Promise=="function"?Promise:void 0,p2=typeof queueMicrotask=="function"?queueMicrotask:typeof cm<"u"?function(e){return cm.resolve(null).then(e).catch(f2)}:Xu;function f2(e){setTimeout(function(){throw e})}function Dc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ls(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ls(t)}function yr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function um(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ao=Math.random().toString(36).slice(2),zn="__reactFiber$"+ao,fs="__reactProps$"+ao,Qn="__reactContainer$"+ao,Zu="__reactEvents$"+ao,h2="__reactListeners$"+ao,m2="__reactHandles$"+ao;function Or(e){var t=e[zn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qn]||n[zn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=um(e);e!==null;){if(n=e[zn])return n;e=um(e)}return t}e=n,n=e.parentNode}return null}function As(e){return e=e[zn]||e[Qn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _i(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(ce(33))}function Jl(e){return e[fs]||null}var ed=[],ji=-1;function zr(e){return{current:e}}function qe(e){0>ji||(e.current=ed[ji],ed[ji]=null,ji--)}function We(e,t){ji++,ed[ji]=e.current,e.current=t}var Sr={},jt=zr(Sr),Ft=zr(!1),Yr=Sr;function Vi(e,t){var n=e.type.contextTypes;if(!n)return Sr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Bt(e){return e=e.childContextTypes,e!=null}function il(){qe(Ft),qe(jt)}function dm(e,t,n){if(jt.current!==Sr)throw Error(ce(168));We(jt,t),We(Ft,n)}function dv(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(ce(108,Zw(e)||"Unknown",i));return Qe({},n,r)}function ol(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sr,Yr=jt.current,We(jt,e),We(Ft,Ft.current),!0}function pm(e,t,n){var r=e.stateNode;if(!r)throw Error(ce(169));n?(e=dv(e,t,Yr),r.__reactInternalMemoizedMergedChildContext=e,qe(Ft),qe(jt),We(jt,e)):qe(Ft),We(Ft,n)}var Un=null,Gl=!1,Fc=!1;function pv(e){Un===null?Un=[e]:Un.push(e)}function g2(e){Gl=!0,pv(e)}function Tr(){if(!Fc&&Un!==null){Fc=!0;var e=0,t=Fe;try{var n=Un;for(Fe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Un=null,Gl=!1}catch(i){throw Un!==null&&(Un=Un.slice(e+1)),Oy(up,Tr),i}finally{Fe=t,Fc=!1}}return null}var Si=[],Ci=0,sl=null,al=0,on=[],sn=0,Jr=null,Wn=1,Hn="";function Lr(e,t){Si[Ci++]=al,Si[Ci++]=sl,sl=e,al=t}function fv(e,t,n){on[sn++]=Wn,on[sn++]=Hn,on[sn++]=Jr,Jr=e;var r=Wn;e=Hn;var i=32-bn(r)-1;r&=~(1<<i),n+=1;var s=32-bn(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Wn=1<<32-bn(t)+i|n<<i|r,Hn=s+e}else Wn=1<<s|n<<i|r,Hn=e}function vp(e){e.return!==null&&(Lr(e,1),fv(e,1,0))}function bp(e){for(;e===sl;)sl=Si[--Ci],Si[Ci]=null,al=Si[--Ci],Si[Ci]=null;for(;e===Jr;)Jr=on[--sn],on[sn]=null,Hn=on[--sn],on[sn]=null,Wn=on[--sn],on[sn]=null}var Zt=null,Kt=null,Ye=!1,xn=null;function hv(e,t){var n=ln(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function fm(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Zt=e,Kt=yr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Zt=e,Kt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jr!==null?{id:Wn,overflow:Hn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ln(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Zt=e,Kt=null,!0):!1;default:return!1}}function td(e){return(e.mode&1)!==0&&(e.flags&128)===0}function nd(e){if(Ye){var t=Kt;if(t){var n=t;if(!fm(e,t)){if(td(e))throw Error(ce(418));t=yr(n.nextSibling);var r=Zt;t&&fm(e,t)?hv(r,n):(e.flags=e.flags&-4097|2,Ye=!1,Zt=e)}}else{if(td(e))throw Error(ce(418));e.flags=e.flags&-4097|2,Ye=!1,Zt=e}}}function hm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Zt=e}function aa(e){if(e!==Zt)return!1;if(!Ye)return hm(e),Ye=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Qu(e.type,e.memoizedProps)),t&&(t=Kt)){if(td(e))throw mv(),Error(ce(418));for(;t;)hv(e,t),t=yr(t.nextSibling)}if(hm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(ce(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Kt=yr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Kt=null}}else Kt=Zt?yr(e.stateNode.nextSibling):null;return!0}function mv(){for(var e=Kt;e;)e=yr(e.nextSibling)}function qi(){Kt=Zt=null,Ye=!1}function wp(e){xn===null?xn=[e]:xn.push(e)}var x2=rr.ReactCurrentBatchConfig;function _o(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var r=n.stateNode}if(!r)throw Error(ce(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,e))}return e}function la(e,t){throw e=Object.prototype.toString.call(t),Error(ce(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mm(e){var t=e._init;return t(e._payload)}function gv(e){function t(x,y){if(e){var v=x.deletions;v===null?(x.deletions=[y],x.flags|=16):v.push(y)}}function n(x,y){if(!e)return null;for(;y!==null;)t(x,y),y=y.sibling;return null}function r(x,y){for(x=new Map;y!==null;)y.key!==null?x.set(y.key,y):x.set(y.index,y),y=y.sibling;return x}function i(x,y){return x=kr(x,y),x.index=0,x.sibling=null,x}function s(x,y,v){return x.index=v,e?(v=x.alternate,v!==null?(v=v.index,v<y?(x.flags|=2,y):v):(x.flags|=2,y)):(x.flags|=1048576,y)}function a(x){return e&&x.alternate===null&&(x.flags|=2),x}function l(x,y,v,j){return y===null||y.tag!==6?(y=Yc(v,x.mode,j),y.return=x,y):(y=i(y,v),y.return=x,y)}function c(x,y,v,j){var T=v.type;return T===vi?d(x,y,v.props.children,j,v.key):y!==null&&(y.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===sr&&mm(T)===y.type)?(j=i(y,v.props),j.ref=_o(x,y,v),j.return=x,j):(j=$a(v.type,v.key,v.props,null,x.mode,j),j.ref=_o(x,y,v),j.return=x,j)}function u(x,y,v,j){return y===null||y.tag!==4||y.stateNode.containerInfo!==v.containerInfo||y.stateNode.implementation!==v.implementation?(y=Jc(v,x.mode,j),y.return=x,y):(y=i(y,v.children||[]),y.return=x,y)}function d(x,y,v,j,T){return y===null||y.tag!==7?(y=Ur(v,x.mode,j,T),y.return=x,y):(y=i(y,v),y.return=x,y)}function p(x,y,v){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Yc(""+y,x.mode,v),y.return=x,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Qs:return v=$a(y.type,y.key,y.props,null,x.mode,v),v.ref=_o(x,null,y),v.return=x,v;case yi:return y=Jc(y,x.mode,v),y.return=x,y;case sr:var j=y._init;return p(x,j(y._payload),v)}if(Io(y)||yo(y))return y=Ur(y,x.mode,v,null),y.return=x,y;la(x,y)}return null}function f(x,y,v,j){var T=y!==null?y.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:l(x,y,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Qs:return v.key===T?c(x,y,v,j):null;case yi:return v.key===T?u(x,y,v,j):null;case sr:return T=v._init,f(x,y,T(v._payload),j)}if(Io(v)||yo(v))return T!==null?null:d(x,y,v,j,null);la(x,v)}return null}function h(x,y,v,j,T){if(typeof j=="string"&&j!==""||typeof j=="number")return x=x.get(v)||null,l(y,x,""+j,T);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Qs:return x=x.get(j.key===null?v:j.key)||null,c(y,x,j,T);case yi:return x=x.get(j.key===null?v:j.key)||null,u(y,x,j,T);case sr:var _=j._init;return h(x,y,v,_(j._payload),T)}if(Io(j)||yo(j))return x=x.get(v)||null,d(y,x,j,T,null);la(y,j)}return null}function m(x,y,v,j){for(var T=null,_=null,A=y,E=y=0,W=null;A!==null&&E<v.length;E++){A.index>E?(W=A,A=null):W=A.sibling;var C=f(x,A,v[E],j);if(C===null){A===null&&(A=W);break}e&&A&&C.alternate===null&&t(x,A),y=s(C,y,E),_===null?T=C:_.sibling=C,_=C,A=W}if(E===v.length)return n(x,A),Ye&&Lr(x,E),T;if(A===null){for(;E<v.length;E++)A=p(x,v[E],j),A!==null&&(y=s(A,y,E),_===null?T=A:_.sibling=A,_=A);return Ye&&Lr(x,E),T}for(A=r(x,A);E<v.length;E++)W=h(A,x,E,v[E],j),W!==null&&(e&&W.alternate!==null&&A.delete(W.key===null?E:W.key),y=s(W,y,E),_===null?T=W:_.sibling=W,_=W);return e&&A.forEach(function(R){return t(x,R)}),Ye&&Lr(x,E),T}function b(x,y,v,j){var T=yo(v);if(typeof T!="function")throw Error(ce(150));if(v=T.call(v),v==null)throw Error(ce(151));for(var _=T=null,A=y,E=y=0,W=null,C=v.next();A!==null&&!C.done;E++,C=v.next()){A.index>E?(W=A,A=null):W=A.sibling;var R=f(x,A,C.value,j);if(R===null){A===null&&(A=W);break}e&&A&&R.alternate===null&&t(x,A),y=s(R,y,E),_===null?T=R:_.sibling=R,_=R,A=W}if(C.done)return n(x,A),Ye&&Lr(x,E),T;if(A===null){for(;!C.done;E++,C=v.next())C=p(x,C.value,j),C!==null&&(y=s(C,y,E),_===null?T=C:_.sibling=C,_=C);return Ye&&Lr(x,E),T}for(A=r(x,A);!C.done;E++,C=v.next())C=h(A,x,E,C.value,j),C!==null&&(e&&C.alternate!==null&&A.delete(C.key===null?E:C.key),y=s(C,y,E),_===null?T=C:_.sibling=C,_=C);return e&&A.forEach(function(H){return t(x,H)}),Ye&&Lr(x,E),T}function k(x,y,v,j){if(typeof v=="object"&&v!==null&&v.type===vi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Qs:e:{for(var T=v.key,_=y;_!==null;){if(_.key===T){if(T=v.type,T===vi){if(_.tag===7){n(x,_.sibling),y=i(_,v.props.children),y.return=x,x=y;break e}}else if(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===sr&&mm(T)===_.type){n(x,_.sibling),y=i(_,v.props),y.ref=_o(x,_,v),y.return=x,x=y;break e}n(x,_);break}else t(x,_);_=_.sibling}v.type===vi?(y=Ur(v.props.children,x.mode,j,v.key),y.return=x,x=y):(j=$a(v.type,v.key,v.props,null,x.mode,j),j.ref=_o(x,y,v),j.return=x,x=j)}return a(x);case yi:e:{for(_=v.key;y!==null;){if(y.key===_)if(y.tag===4&&y.stateNode.containerInfo===v.containerInfo&&y.stateNode.implementation===v.implementation){n(x,y.sibling),y=i(y,v.children||[]),y.return=x,x=y;break e}else{n(x,y);break}else t(x,y);y=y.sibling}y=Jc(v,x.mode,j),y.return=x,x=y}return a(x);case sr:return _=v._init,k(x,y,_(v._payload),j)}if(Io(v))return m(x,y,v,j);if(yo(v))return b(x,y,v,j);la(x,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,y!==null&&y.tag===6?(n(x,y.sibling),y=i(y,v),y.return=x,x=y):(n(x,y),y=Yc(v,x.mode,j),y.return=x,x=y),a(x)):n(x,y)}return k}var Yi=gv(!0),xv=gv(!1),ll=zr(null),cl=null,Ni=null,kp=null;function _p(){kp=Ni=cl=null}function jp(e){var t=ll.current;qe(ll),e._currentValue=t}function rd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Oi(e,t){cl=e,kp=Ni=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ot=!0),e.firstContext=null)}function pn(e){var t=e._currentValue;if(kp!==e)if(e={context:e,memoizedValue:t,next:null},Ni===null){if(cl===null)throw Error(ce(308));Ni=e,cl.dependencies={lanes:0,firstContext:e}}else Ni=Ni.next=e;return t}var $r=null;function Sp(e){$r===null?$r=[e]:$r.push(e)}function yv(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Sp(t)):(n.next=i.next,i.next=n),t.interleaved=n,Xn(e,r)}function Xn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ar=!1;function Cp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Re&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Xn(e,n)}return i=r.interleaved,i===null?(t.next=t,Sp(r)):(t.next=i.next,i.next=t),r.interleaved=t,Xn(e,n)}function Aa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,dp(e,n)}}function gm(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ul(e,t,n,r){var i=e.updateQueue;ar=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(s!==null){var p=i.baseState;a=0,d=u=c=null,l=s;do{var f=l.lane,h=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,b=l;switch(f=t,h=n,b.tag){case 1:if(m=b.payload,typeof m=="function"){p=m.call(h,p,f);break e}p=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=b.payload,f=typeof m=="function"?m.call(h,p,f):m,f==null)break e;p=Qe({},p,f);break e;case 2:ar=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else h={eventTime:h,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=h,c=p):d=d.next=h,a|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Kr|=a,e.lanes=a,e.memoizedState=p}}function xm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(ce(191,i));i.call(r)}}}var Ls={},Ln=zr(Ls),hs=zr(Ls),ms=zr(Ls);function Dr(e){if(e===Ls)throw Error(ce(174));return e}function Np(e,t){switch(We(ms,t),We(hs,e),We(Ln,Ls),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ou(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ou(t,e)}qe(Ln),We(Ln,t)}function Ji(){qe(Ln),qe(hs),qe(ms)}function bv(e){Dr(ms.current);var t=Dr(Ln.current),n=Ou(t,e.type);t!==n&&(We(hs,e),We(Ln,n))}function Ep(e){hs.current===e&&(qe(Ln),qe(hs))}var Ge=zr(0);function dl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bc=[];function zp(){for(var e=0;e<Bc.length;e++)Bc[e]._workInProgressVersionPrimary=null;Bc.length=0}var La=rr.ReactCurrentDispatcher,Uc=rr.ReactCurrentBatchConfig,Gr=0,Ke=null,st=null,dt=null,pl=!1,Jo=!1,gs=0,y2=0;function bt(){throw Error(ce(321))}function Tp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_n(e[n],t[n]))return!1;return!0}function Mp(e,t,n,r,i,s){if(Gr=s,Ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,La.current=e===null||e.memoizedState===null?k2:_2,e=n(r,i),Jo){s=0;do{if(Jo=!1,gs=0,25<=s)throw Error(ce(301));s+=1,dt=st=null,t.updateQueue=null,La.current=j2,e=n(r,i)}while(Jo)}if(La.current=fl,t=st!==null&&st.next!==null,Gr=0,dt=st=Ke=null,pl=!1,t)throw Error(ce(300));return e}function Ap(){var e=gs!==0;return gs=0,e}function Nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?Ke.memoizedState=dt=e:dt=dt.next=e,dt}function fn(){if(st===null){var e=Ke.alternate;e=e!==null?e.memoizedState:null}else e=st.next;var t=dt===null?Ke.memoizedState:dt.next;if(t!==null)dt=t,st=e;else{if(e===null)throw Error(ce(310));st=e,e={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},dt===null?Ke.memoizedState=dt=e:dt=dt.next=e}return dt}function xs(e,t){return typeof t=="function"?t(e):t}function Wc(e){var t=fn(),n=t.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=e;var r=st,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,c=null,u=s;do{var d=u.lane;if((Gr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,a=r):c=c.next=p,Ke.lanes|=d,Kr|=d}u=u.next}while(u!==null&&u!==s);c===null?a=r:c.next=l,_n(r,t.memoizedState)||(Ot=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Ke.lanes|=s,Kr|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hc(e){var t=fn(),n=t.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);_n(s,t.memoizedState)||(Ot=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function wv(){}function kv(e,t){var n=Ke,r=fn(),i=t(),s=!_n(r.memoizedState,i);if(s&&(r.memoizedState=i,Ot=!0),r=r.queue,Lp(Sv.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||dt!==null&&dt.memoizedState.tag&1){if(n.flags|=2048,ys(9,jv.bind(null,n,r,i,t),void 0,null),pt===null)throw Error(ce(349));Gr&30||_v(n,t,i)}return i}function _v(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ke.updateQueue,t===null?(t={lastEffect:null,stores:null},Ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function jv(e,t,n,r){t.value=n,t.getSnapshot=r,Cv(t)&&Nv(e)}function Sv(e,t,n){return n(function(){Cv(t)&&Nv(e)})}function Cv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_n(e,n)}catch{return!0}}function Nv(e){var t=Xn(e,1);t!==null&&wn(t,e,1,-1)}function ym(e){var t=Nn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xs,lastRenderedState:e},t.queue=e,e=e.dispatch=w2.bind(null,Ke,e),[t.memoizedState,e]}function ys(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ke.updateQueue,t===null?(t={lastEffect:null,stores:null},Ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ev(){return fn().memoizedState}function Pa(e,t,n,r){var i=Nn();Ke.flags|=e,i.memoizedState=ys(1|t,n,void 0,r===void 0?null:r)}function Kl(e,t,n,r){var i=fn();r=r===void 0?null:r;var s=void 0;if(st!==null){var a=st.memoizedState;if(s=a.destroy,r!==null&&Tp(r,a.deps)){i.memoizedState=ys(t,n,s,r);return}}Ke.flags|=e,i.memoizedState=ys(1|t,n,s,r)}function vm(e,t){return Pa(8390656,8,e,t)}function Lp(e,t){return Kl(2048,8,e,t)}function zv(e,t){return Kl(4,2,e,t)}function Tv(e,t){return Kl(4,4,e,t)}function Mv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Av(e,t,n){return n=n!=null?n.concat([e]):null,Kl(4,4,Mv.bind(null,t,e),n)}function Pp(){}function Lv(e,t){var n=fn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Tp(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Pv(e,t){var n=fn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Tp(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Rv(e,t,n){return Gr&21?(_n(n,t)||(n=Fy(),Ke.lanes|=n,Kr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ot=!0),e.memoizedState=n)}function v2(e,t){var n=Fe;Fe=n!==0&&4>n?n:4,e(!0);var r=Uc.transition;Uc.transition={};try{e(!1),t()}finally{Fe=n,Uc.transition=r}}function Iv(){return fn().memoizedState}function b2(e,t,n){var r=wr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ov(e))$v(t,n);else if(n=yv(e,t,n,r),n!==null){var i=Mt();wn(n,e,r,i),Dv(n,t,r)}}function w2(e,t,n){var r=wr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ov(e))$v(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,_n(l,a)){var c=t.interleaved;c===null?(i.next=i,Sp(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=yv(e,t,i,r),n!==null&&(i=Mt(),wn(n,e,r,i),Dv(n,t,r))}}function Ov(e){var t=e.alternate;return e===Ke||t!==null&&t===Ke}function $v(e,t){Jo=pl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Dv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,dp(e,n)}}var fl={readContext:pn,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useInsertionEffect:bt,useLayoutEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useMutableSource:bt,useSyncExternalStore:bt,useId:bt,unstable_isNewReconciler:!1},k2={readContext:pn,useCallback:function(e,t){return Nn().memoizedState=[e,t===void 0?null:t],e},useContext:pn,useEffect:vm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Pa(4194308,4,Mv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Pa(4,2,e,t)},useMemo:function(e,t){var n=Nn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Nn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=b2.bind(null,Ke,e),[r.memoizedState,e]},useRef:function(e){var t=Nn();return e={current:e},t.memoizedState=e},useState:ym,useDebugValue:Pp,useDeferredValue:function(e){return Nn().memoizedState=e},useTransition:function(){var e=ym(!1),t=e[0];return e=v2.bind(null,e[1]),Nn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ke,i=Nn();if(Ye){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=t(),pt===null)throw Error(ce(349));Gr&30||_v(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,vm(Sv.bind(null,r,s,e),[e]),r.flags|=2048,ys(9,jv.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Nn(),t=pt.identifierPrefix;if(Ye){var n=Hn,r=Wn;n=(r&~(1<<32-bn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=gs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=y2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_2={readContext:pn,useCallback:Lv,useContext:pn,useEffect:Lp,useImperativeHandle:Av,useInsertionEffect:zv,useLayoutEffect:Tv,useMemo:Pv,useReducer:Wc,useRef:Ev,useState:function(){return Wc(xs)},useDebugValue:Pp,useDeferredValue:function(e){var t=fn();return Rv(t,st.memoizedState,e)},useTransition:function(){var e=Wc(xs)[0],t=fn().memoizedState;return[e,t]},useMutableSource:wv,useSyncExternalStore:kv,useId:Iv,unstable_isNewReconciler:!1},j2={readContext:pn,useCallback:Lv,useContext:pn,useEffect:Lp,useImperativeHandle:Av,useInsertionEffect:zv,useLayoutEffect:Tv,useMemo:Pv,useReducer:Hc,useRef:Ev,useState:function(){return Hc(xs)},useDebugValue:Pp,useDeferredValue:function(e){var t=fn();return st===null?t.memoizedState=e:Rv(t,st.memoizedState,e)},useTransition:function(){var e=Hc(xs)[0],t=fn().memoizedState;return[e,t]},useMutableSource:wv,useSyncExternalStore:kv,useId:Iv,unstable_isNewReconciler:!1};function mn(e,t){if(e&&e.defaultProps){t=Qe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function id(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Qe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ql={isMounted:function(e){return(e=e._reactInternals)?ri(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Mt(),i=wr(e),s=Jn(r,i);s.payload=t,n!=null&&(s.callback=n),t=vr(e,s,i),t!==null&&(wn(t,e,i,r),Aa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Mt(),i=wr(e),s=Jn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=vr(e,s,i),t!==null&&(wn(t,e,i,r),Aa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Mt(),r=wr(e),i=Jn(n,r);i.tag=2,t!=null&&(i.callback=t),t=vr(e,i,r),t!==null&&(wn(t,e,r,n),Aa(t,e,r))}};function bm(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!us(n,r)||!us(i,s):!0}function Fv(e,t,n){var r=!1,i=Sr,s=t.contextType;return typeof s=="object"&&s!==null?s=pn(s):(i=Bt(t)?Yr:jt.current,r=t.contextTypes,s=(r=r!=null)?Vi(e,i):Sr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ql,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function wm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ql.enqueueReplaceState(t,t.state,null)}function od(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Cp(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=pn(s):(s=Bt(t)?Yr:jt.current,i.context=Vi(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(id(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ql.enqueueReplaceState(i,i.state,null),ul(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Gi(e,t){try{var n="",r=t;do n+=Xw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Vc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function sd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var S2=typeof WeakMap=="function"?WeakMap:Map;function Bv(e,t,n){n=Jn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ml||(ml=!0,gd=r),sd(e,t)},n}function Uv(e,t,n){n=Jn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){sd(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){sd(e,t),typeof r!="function"&&(br===null?br=new Set([this]):br.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function km(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new S2;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=D2.bind(null,e,t,n),t.then(e,e))}function _m(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function jm(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Jn(-1,1),t.tag=2,vr(n,t,1))),n.lanes|=1),e)}var C2=rr.ReactCurrentOwner,Ot=!1;function Nt(e,t,n,r){t.child=e===null?xv(t,null,n,r):Yi(t,e.child,n,r)}function Sm(e,t,n,r,i){n=n.render;var s=t.ref;return Oi(t,i),r=Mp(e,t,n,r,s,i),n=Ap(),e!==null&&!Ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zn(e,t,i)):(Ye&&n&&vp(t),t.flags|=1,Nt(e,t,r,i),t.child)}function Cm(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Up(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Wv(e,t,s,r,i)):(e=$a(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:us,n(a,r)&&e.ref===t.ref)return Zn(e,t,i)}return t.flags|=1,e=kr(s,r),e.ref=t.ref,e.return=t,t.child=e}function Wv(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(us(s,r)&&e.ref===t.ref)if(Ot=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Ot=!0);else return t.lanes=e.lanes,Zn(e,t,i)}return ad(e,t,n,r,i)}function Hv(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(zi,Jt),Jt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,We(zi,Jt),Jt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,We(zi,Jt),Jt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,We(zi,Jt),Jt|=r;return Nt(e,t,i,n),t.child}function Vv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ad(e,t,n,r,i){var s=Bt(n)?Yr:jt.current;return s=Vi(t,s),Oi(t,i),n=Mp(e,t,n,r,s,i),r=Ap(),e!==null&&!Ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zn(e,t,i)):(Ye&&r&&vp(t),t.flags|=1,Nt(e,t,n,i),t.child)}function Nm(e,t,n,r,i){if(Bt(n)){var s=!0;ol(t)}else s=!1;if(Oi(t,i),t.stateNode===null)Ra(e,t),Fv(t,n,r),od(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=pn(u):(u=Bt(n)?Yr:jt.current,u=Vi(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&wm(t,a,r,u),ar=!1;var f=t.memoizedState;a.state=f,ul(t,r,a,i),c=t.memoizedState,l!==r||f!==c||Ft.current||ar?(typeof d=="function"&&(id(t,n,d,r),c=t.memoizedState),(l=ar||bm(t,n,l,r,f,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,vv(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:mn(t.type,l),a.props=u,p=t.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=pn(c):(c=Bt(n)?Yr:jt.current,c=Vi(t,c));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||f!==c)&&wm(t,a,r,c),ar=!1,f=t.memoizedState,a.state=f,ul(t,r,a,i);var m=t.memoizedState;l!==p||f!==m||Ft.current||ar?(typeof h=="function"&&(id(t,n,h,r),m=t.memoizedState),(u=ar||bm(t,n,u,r,f,m,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,m,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,m,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return ld(e,t,n,r,s,i)}function ld(e,t,n,r,i,s){Vv(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&pm(t,n,!1),Zn(e,t,s);r=t.stateNode,C2.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Yi(t,e.child,null,s),t.child=Yi(t,null,l,s)):Nt(e,t,l,s),t.memoizedState=r.state,i&&pm(t,n,!0),t.child}function qv(e){var t=e.stateNode;t.pendingContext?dm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&dm(e,t.context,!1),Np(e,t.containerInfo)}function Em(e,t,n,r,i){return qi(),wp(i),t.flags|=256,Nt(e,t,n,r),t.child}var cd={dehydrated:null,treeContext:null,retryLane:0};function ud(e){return{baseLanes:e,cachePool:null,transitions:null}}function Yv(e,t,n){var r=t.pendingProps,i=Ge.current,s=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),We(Ge,i&1),e===null)return nd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ec(a,r,0,null),e=Ur(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=ud(n),t.memoizedState=cd,e):Rp(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return N2(e,t,a,r,l,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=kr(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=kr(l,s):(s=Ur(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?ud(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=cd,r}return s=e.child,e=s.sibling,r=kr(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Rp(e,t){return t=ec({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ca(e,t,n,r){return r!==null&&wp(r),Yi(t,e.child,null,n),e=Rp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function N2(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=Vc(Error(ce(422))),ca(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=ec({mode:"visible",children:r.children},i,0,null),s=Ur(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Yi(t,e.child,null,a),t.child.memoizedState=ud(a),t.memoizedState=cd,s);if(!(t.mode&1))return ca(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(ce(419)),r=Vc(s,r,void 0),ca(e,t,a,r)}if(l=(a&e.childLanes)!==0,Ot||l){if(r=pt,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Xn(e,i),wn(r,e,i,-1))}return Bp(),r=Vc(Error(ce(421))),ca(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=F2.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Kt=yr(i.nextSibling),Zt=t,Ye=!0,xn=null,e!==null&&(on[sn++]=Wn,on[sn++]=Hn,on[sn++]=Jr,Wn=e.id,Hn=e.overflow,Jr=t),t=Rp(t,r.children),t.flags|=4096,t)}function zm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),rd(e.return,t,n)}function qc(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Jv(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Nt(e,t,r.children,n),r=Ge.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zm(e,n,t);else if(e.tag===19)zm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(We(Ge,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&dl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),qc(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&dl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}qc(t,!0,n,null,s);break;case"together":qc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ra(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Zn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(ce(153));if(t.child!==null){for(e=t.child,n=kr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function E2(e,t,n){switch(t.tag){case 3:qv(t),qi();break;case 5:bv(t);break;case 1:Bt(t.type)&&ol(t);break;case 4:Np(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;We(ll,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(We(Ge,Ge.current&1),t.flags|=128,null):n&t.child.childLanes?Yv(e,t,n):(We(Ge,Ge.current&1),e=Zn(e,t,n),e!==null?e.sibling:null);We(Ge,Ge.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Jv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),We(Ge,Ge.current),r)break;return null;case 22:case 23:return t.lanes=0,Hv(e,t,n)}return Zn(e,t,n)}var Gv,dd,Kv,Qv;Gv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dd=function(){};Kv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Dr(Ln.current);var s=null;switch(n){case"input":i=Lu(e,i),r=Lu(e,r),s=[];break;case"select":i=Qe({},i,{value:void 0}),r=Qe({},r,{value:void 0}),s=[];break;case"textarea":i=Iu(e,i),r=Iu(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=rl)}$u(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(rs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(rs.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Ve("scroll",e),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Qv=function(e,t,n,r){n!==r&&(t.flags|=4)};function jo(e,t){if(!Ye)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function wt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function z2(e,t,n){var r=t.pendingProps;switch(bp(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(t),null;case 1:return Bt(t.type)&&il(),wt(t),null;case 3:return r=t.stateNode,Ji(),qe(Ft),qe(jt),zp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(aa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xn!==null&&(vd(xn),xn=null))),dd(e,t),wt(t),null;case 5:Ep(t);var i=Dr(ms.current);if(n=t.type,e!==null&&t.stateNode!=null)Kv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(ce(166));return wt(t),null}if(e=Dr(Ln.current),aa(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[zn]=t,r[fs]=s,e=(t.mode&1)!==0,n){case"dialog":Ve("cancel",r),Ve("close",r);break;case"iframe":case"object":case"embed":Ve("load",r);break;case"video":case"audio":for(i=0;i<$o.length;i++)Ve($o[i],r);break;case"source":Ve("error",r);break;case"img":case"image":case"link":Ve("error",r),Ve("load",r);break;case"details":Ve("toggle",r);break;case"input":$h(r,s),Ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ve("invalid",r);break;case"textarea":Fh(r,s),Ve("invalid",r)}$u(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&sa(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&sa(r.textContent,l,e),i=["children",""+l]):rs.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Ve("scroll",r)}switch(n){case"input":Xs(r),Dh(r,s,!0);break;case"textarea":Xs(r),Bh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=rl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Sy(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[zn]=t,e[fs]=r,Gv(e,t,!1,!1),t.stateNode=e;e:{switch(a=Du(n,r),n){case"dialog":Ve("cancel",e),Ve("close",e),i=r;break;case"iframe":case"object":case"embed":Ve("load",e),i=r;break;case"video":case"audio":for(i=0;i<$o.length;i++)Ve($o[i],e);i=r;break;case"source":Ve("error",e),i=r;break;case"img":case"image":case"link":Ve("error",e),Ve("load",e),i=r;break;case"details":Ve("toggle",e),i=r;break;case"input":$h(e,r),i=Lu(e,r),Ve("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Qe({},r,{value:void 0}),Ve("invalid",e);break;case"textarea":Fh(e,r),i=Iu(e,r),Ve("invalid",e);break;default:i=r}$u(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?Ey(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Cy(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&is(e,c):typeof c=="number"&&is(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(rs.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Ve("scroll",e):c!=null&&op(e,s,c,a))}switch(n){case"input":Xs(e),Dh(e,r,!1);break;case"textarea":Xs(e),Bh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+jr(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Li(e,!!r.multiple,s,!1):r.defaultValue!=null&&Li(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=rl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return wt(t),null;case 6:if(e&&t.stateNode!=null)Qv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(ce(166));if(n=Dr(ms.current),Dr(Ln.current),aa(t)){if(r=t.stateNode,n=t.memoizedProps,r[zn]=t,(s=r.nodeValue!==n)&&(e=Zt,e!==null))switch(e.tag){case 3:sa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&sa(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zn]=t,t.stateNode=r}return wt(t),null;case 13:if(qe(Ge),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ye&&Kt!==null&&t.mode&1&&!(t.flags&128))mv(),qi(),t.flags|=98560,s=!1;else if(s=aa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(ce(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[zn]=t}else qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;wt(t),s=!1}else xn!==null&&(vd(xn),xn=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ge.current&1?at===0&&(at=3):Bp())),t.updateQueue!==null&&(t.flags|=4),wt(t),null);case 4:return Ji(),dd(e,t),e===null&&ds(t.stateNode.containerInfo),wt(t),null;case 10:return jp(t.type._context),wt(t),null;case 17:return Bt(t.type)&&il(),wt(t),null;case 19:if(qe(Ge),s=t.memoizedState,s===null)return wt(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)jo(s,!1);else{if(at!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=dl(e),a!==null){for(t.flags|=128,jo(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return We(Ge,Ge.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ze()>Ki&&(t.flags|=128,r=!0,jo(s,!1),t.lanes=4194304)}else{if(!r)if(e=dl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),jo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Ye)return wt(t),null}else 2*Ze()-s.renderingStartTime>Ki&&n!==1073741824&&(t.flags|=128,r=!0,jo(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ze(),t.sibling=null,n=Ge.current,We(Ge,r?n&1|2:n&1),t):(wt(t),null);case 22:case 23:return Fp(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Jt&1073741824&&(wt(t),t.subtreeFlags&6&&(t.flags|=8192)):wt(t),null;case 24:return null;case 25:return null}throw Error(ce(156,t.tag))}function T2(e,t){switch(bp(t),t.tag){case 1:return Bt(t.type)&&il(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ji(),qe(Ft),qe(jt),zp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ep(t),null;case 13:if(qe(Ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(ce(340));qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return qe(Ge),null;case 4:return Ji(),null;case 10:return jp(t.type._context),null;case 22:case 23:return Fp(),null;case 24:return null;default:return null}}var ua=!1,kt=!1,M2=typeof WeakSet=="function"?WeakSet:Set,je=null;function Ei(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Xe(e,t,r)}else n.current=null}function pd(e,t,n){try{n()}catch(r){Xe(e,t,r)}}var Tm=!1;function A2(e,t){if(Gu=el,e=nv(),yp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==n||i!==0&&p.nodeType!==3||(l=a+i),p!==s||r!==0&&p.nodeType!==3||(c=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(h=p.firstChild)!==null;)f=p,p=h;for(;;){if(p===e)break t;if(f===n&&++u===i&&(l=a),f===s&&++d===r&&(c=a),(h=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=h}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ku={focusedElem:e,selectionRange:n},el=!1,je=t;je!==null;)if(t=je,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,je=e;else for(;je!==null;){t=je;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var b=m.memoizedProps,k=m.memoizedState,x=t.stateNode,y=x.getSnapshotBeforeUpdate(t.elementType===t.type?b:mn(t.type,b),k);x.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(j){Xe(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,je=e;break}je=t.return}return m=Tm,Tm=!1,m}function Go(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&pd(t,n,s)}i=i.next}while(i!==r)}}function Xl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function fd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xv(e){var t=e.alternate;t!==null&&(e.alternate=null,Xv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zn],delete t[fs],delete t[Zu],delete t[h2],delete t[m2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Zv(e){return e.tag===5||e.tag===3||e.tag===4}function Mm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=rl));else if(r!==4&&(e=e.child,e!==null))for(hd(e,t,n),e=e.sibling;e!==null;)hd(e,t,n),e=e.sibling}function md(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(md(e,t,n),e=e.sibling;e!==null;)md(e,t,n),e=e.sibling}var gt=null,gn=!1;function ir(e,t,n){for(n=n.child;n!==null;)e0(e,t,n),n=n.sibling}function e0(e,t,n){if(An&&typeof An.onCommitFiberUnmount=="function")try{An.onCommitFiberUnmount(Hl,n)}catch{}switch(n.tag){case 5:kt||Ei(n,t);case 6:var r=gt,i=gn;gt=null,ir(e,t,n),gt=r,gn=i,gt!==null&&(gn?(e=gt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):gt.removeChild(n.stateNode));break;case 18:gt!==null&&(gn?(e=gt,n=n.stateNode,e.nodeType===8?Dc(e.parentNode,n):e.nodeType===1&&Dc(e,n),ls(e)):Dc(gt,n.stateNode));break;case 4:r=gt,i=gn,gt=n.stateNode.containerInfo,gn=!0,ir(e,t,n),gt=r,gn=i;break;case 0:case 11:case 14:case 15:if(!kt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&pd(n,t,a),i=i.next}while(i!==r)}ir(e,t,n);break;case 1:if(!kt&&(Ei(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Xe(n,t,l)}ir(e,t,n);break;case 21:ir(e,t,n);break;case 22:n.mode&1?(kt=(r=kt)||n.memoizedState!==null,ir(e,t,n),kt=r):ir(e,t,n);break;default:ir(e,t,n)}}function Am(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new M2),t.forEach(function(r){var i=B2.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function hn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:gt=l.stateNode,gn=!1;break e;case 3:gt=l.stateNode.containerInfo,gn=!0;break e;case 4:gt=l.stateNode.containerInfo,gn=!0;break e}l=l.return}if(gt===null)throw Error(ce(160));e0(s,a,i),gt=null,gn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Xe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)t0(t,e),t=t.sibling}function t0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(hn(t,e),Cn(e),r&4){try{Go(3,e,e.return),Xl(3,e)}catch(b){Xe(e,e.return,b)}try{Go(5,e,e.return)}catch(b){Xe(e,e.return,b)}}break;case 1:hn(t,e),Cn(e),r&512&&n!==null&&Ei(n,n.return);break;case 5:if(hn(t,e),Cn(e),r&512&&n!==null&&Ei(n,n.return),e.flags&32){var i=e.stateNode;try{is(i,"")}catch(b){Xe(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&_y(i,s),Du(l,a);var u=Du(l,s);for(a=0;a<c.length;a+=2){var d=c[a],p=c[a+1];d==="style"?Ey(i,p):d==="dangerouslySetInnerHTML"?Cy(i,p):d==="children"?is(i,p):op(i,d,p,u)}switch(l){case"input":Pu(i,s);break;case"textarea":jy(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?Li(i,!!s.multiple,h,!1):f!==!!s.multiple&&(s.defaultValue!=null?Li(i,!!s.multiple,s.defaultValue,!0):Li(i,!!s.multiple,s.multiple?[]:"",!1))}i[fs]=s}catch(b){Xe(e,e.return,b)}}break;case 6:if(hn(t,e),Cn(e),r&4){if(e.stateNode===null)throw Error(ce(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(b){Xe(e,e.return,b)}}break;case 3:if(hn(t,e),Cn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ls(t.containerInfo)}catch(b){Xe(e,e.return,b)}break;case 4:hn(t,e),Cn(e);break;case 13:hn(t,e),Cn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||($p=Ze())),r&4&&Am(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(kt=(u=kt)||d,hn(t,e),kt=u):hn(t,e),Cn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(je=e,d=e.child;d!==null;){for(p=je=d;je!==null;){switch(f=je,h=f.child,f.tag){case 0:case 11:case 14:case 15:Go(4,f,f.return);break;case 1:Ei(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(b){Xe(r,n,b)}}break;case 5:Ei(f,f.return);break;case 22:if(f.memoizedState!==null){Pm(p);continue}}h!==null?(h.return=f,je=h):Pm(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Ny("display",a))}catch(b){Xe(e,e.return,b)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(b){Xe(e,e.return,b)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:hn(t,e),Cn(e),r&4&&Am(e);break;case 21:break;default:hn(t,e),Cn(e)}}function Cn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Zv(n)){var r=n;break e}n=n.return}throw Error(ce(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(is(i,""),r.flags&=-33);var s=Mm(e);md(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Mm(e);hd(e,l,a);break;default:throw Error(ce(161))}}catch(c){Xe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function L2(e,t,n){je=e,n0(e)}function n0(e,t,n){for(var r=(e.mode&1)!==0;je!==null;){var i=je,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||ua;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||kt;l=ua;var u=kt;if(ua=a,(kt=c)&&!u)for(je=i;je!==null;)a=je,c=a.child,a.tag===22&&a.memoizedState!==null?Rm(i):c!==null?(c.return=a,je=c):Rm(i);for(;s!==null;)je=s,n0(s),s=s.sibling;je=i,ua=l,kt=u}Lm(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,je=s):Lm(e)}}function Lm(e){for(;je!==null;){var t=je;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:kt||Xl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!kt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:mn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&xm(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xm(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&ls(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}kt||t.flags&512&&fd(t)}catch(f){Xe(t,t.return,f)}}if(t===e){je=null;break}if(n=t.sibling,n!==null){n.return=t.return,je=n;break}je=t.return}}function Pm(e){for(;je!==null;){var t=je;if(t===e){je=null;break}var n=t.sibling;if(n!==null){n.return=t.return,je=n;break}je=t.return}}function Rm(e){for(;je!==null;){var t=je;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Xl(4,t)}catch(c){Xe(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Xe(t,i,c)}}var s=t.return;try{fd(t)}catch(c){Xe(t,s,c)}break;case 5:var a=t.return;try{fd(t)}catch(c){Xe(t,a,c)}}}catch(c){Xe(t,t.return,c)}if(t===e){je=null;break}var l=t.sibling;if(l!==null){l.return=t.return,je=l;break}je=t.return}}var P2=Math.ceil,hl=rr.ReactCurrentDispatcher,Ip=rr.ReactCurrentOwner,dn=rr.ReactCurrentBatchConfig,Re=0,pt=null,rt=null,xt=0,Jt=0,zi=zr(0),at=0,vs=null,Kr=0,Zl=0,Op=0,Ko=null,It=null,$p=0,Ki=1/0,Fn=null,ml=!1,gd=null,br=null,da=!1,dr=null,gl=0,Qo=0,xd=null,Ia=-1,Oa=0;function Mt(){return Re&6?Ze():Ia!==-1?Ia:Ia=Ze()}function wr(e){return e.mode&1?Re&2&&xt!==0?xt&-xt:x2.transition!==null?(Oa===0&&(Oa=Fy()),Oa):(e=Fe,e!==0||(e=window.event,e=e===void 0?16:Yy(e.type)),e):1}function wn(e,t,n,r){if(50<Qo)throw Qo=0,xd=null,Error(ce(185));Ts(e,n,r),(!(Re&2)||e!==pt)&&(e===pt&&(!(Re&2)&&(Zl|=n),at===4&&cr(e,xt)),Ut(e,r),n===1&&Re===0&&!(t.mode&1)&&(Ki=Ze()+500,Gl&&Tr()))}function Ut(e,t){var n=e.callbackNode;xk(e,t);var r=Za(e,e===pt?xt:0);if(r===0)n!==null&&Hh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Hh(n),t===1)e.tag===0?g2(Im.bind(null,e)):pv(Im.bind(null,e)),p2(function(){!(Re&6)&&Tr()}),n=null;else{switch(By(r)){case 1:n=up;break;case 4:n=$y;break;case 16:n=Xa;break;case 536870912:n=Dy;break;default:n=Xa}n=u0(n,r0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function r0(e,t){if(Ia=-1,Oa=0,Re&6)throw Error(ce(327));var n=e.callbackNode;if($i()&&e.callbackNode!==n)return null;var r=Za(e,e===pt?xt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=xl(e,r);else{t=r;var i=Re;Re|=2;var s=o0();(pt!==e||xt!==t)&&(Fn=null,Ki=Ze()+500,Br(e,t));do try{O2();break}catch(l){i0(e,l)}while(!0);_p(),hl.current=s,Re=i,rt!==null?t=0:(pt=null,xt=0,t=at)}if(t!==0){if(t===2&&(i=Hu(e),i!==0&&(r=i,t=yd(e,i))),t===1)throw n=vs,Br(e,0),cr(e,r),Ut(e,Ze()),n;if(t===6)cr(e,r);else{if(i=e.current.alternate,!(r&30)&&!R2(i)&&(t=xl(e,r),t===2&&(s=Hu(e),s!==0&&(r=s,t=yd(e,s))),t===1))throw n=vs,Br(e,0),cr(e,r),Ut(e,Ze()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(ce(345));case 2:Pr(e,It,Fn);break;case 3:if(cr(e,r),(r&130023424)===r&&(t=$p+500-Ze(),10<t)){if(Za(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Mt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Xu(Pr.bind(null,e,It,Fn),t);break}Pr(e,It,Fn);break;case 4:if(cr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-bn(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=Ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*P2(r/1960))-r,10<r){e.timeoutHandle=Xu(Pr.bind(null,e,It,Fn),r);break}Pr(e,It,Fn);break;case 5:Pr(e,It,Fn);break;default:throw Error(ce(329))}}}return Ut(e,Ze()),e.callbackNode===n?r0.bind(null,e):null}function yd(e,t){var n=Ko;return e.current.memoizedState.isDehydrated&&(Br(e,t).flags|=256),e=xl(e,t),e!==2&&(t=It,It=n,t!==null&&vd(t)),e}function vd(e){It===null?It=e:It.push.apply(It,e)}function R2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!_n(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function cr(e,t){for(t&=~Op,t&=~Zl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bn(t),r=1<<n;e[n]=-1,t&=~r}}function Im(e){if(Re&6)throw Error(ce(327));$i();var t=Za(e,0);if(!(t&1))return Ut(e,Ze()),null;var n=xl(e,t);if(e.tag!==0&&n===2){var r=Hu(e);r!==0&&(t=r,n=yd(e,r))}if(n===1)throw n=vs,Br(e,0),cr(e,t),Ut(e,Ze()),n;if(n===6)throw Error(ce(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pr(e,It,Fn),Ut(e,Ze()),null}function Dp(e,t){var n=Re;Re|=1;try{return e(t)}finally{Re=n,Re===0&&(Ki=Ze()+500,Gl&&Tr())}}function Qr(e){dr!==null&&dr.tag===0&&!(Re&6)&&$i();var t=Re;Re|=1;var n=dn.transition,r=Fe;try{if(dn.transition=null,Fe=1,e)return e()}finally{Fe=r,dn.transition=n,Re=t,!(Re&6)&&Tr()}}function Fp(){Jt=zi.current,qe(zi)}function Br(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,d2(n)),rt!==null)for(n=rt.return;n!==null;){var r=n;switch(bp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&il();break;case 3:Ji(),qe(Ft),qe(jt),zp();break;case 5:Ep(r);break;case 4:Ji();break;case 13:qe(Ge);break;case 19:qe(Ge);break;case 10:jp(r.type._context);break;case 22:case 23:Fp()}n=n.return}if(pt=e,rt=e=kr(e.current,null),xt=Jt=t,at=0,vs=null,Op=Zl=Kr=0,It=Ko=null,$r!==null){for(t=0;t<$r.length;t++)if(n=$r[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}$r=null}return e}function i0(e,t){do{var n=rt;try{if(_p(),La.current=fl,pl){for(var r=Ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}pl=!1}if(Gr=0,dt=st=Ke=null,Jo=!1,gs=0,Ip.current=null,n===null||n.return===null){at=1,vs=t,rt=null;break}e:{var s=e,a=n.return,l=n,c=t;if(t=xt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=_m(a);if(h!==null){h.flags&=-257,jm(h,a,l,s,t),h.mode&1&&km(s,u,t),t=h,c=u;var m=t.updateQueue;if(m===null){var b=new Set;b.add(c),t.updateQueue=b}else m.add(c);break e}else{if(!(t&1)){km(s,u,t),Bp();break e}c=Error(ce(426))}}else if(Ye&&l.mode&1){var k=_m(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),jm(k,a,l,s,t),wp(Gi(c,l));break e}}s=c=Gi(c,l),at!==4&&(at=2),Ko===null?Ko=[s]:Ko.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var x=Bv(s,c,t);gm(s,x);break e;case 1:l=c;var y=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(br===null||!br.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t;var j=Uv(s,l,t);gm(s,j);break e}}s=s.return}while(s!==null)}a0(n)}catch(T){t=T,rt===n&&n!==null&&(rt=n=n.return);continue}break}while(!0)}function o0(){var e=hl.current;return hl.current=fl,e===null?fl:e}function Bp(){(at===0||at===3||at===2)&&(at=4),pt===null||!(Kr&268435455)&&!(Zl&268435455)||cr(pt,xt)}function xl(e,t){var n=Re;Re|=2;var r=o0();(pt!==e||xt!==t)&&(Fn=null,Br(e,t));do try{I2();break}catch(i){i0(e,i)}while(!0);if(_p(),Re=n,hl.current=r,rt!==null)throw Error(ce(261));return pt=null,xt=0,at}function I2(){for(;rt!==null;)s0(rt)}function O2(){for(;rt!==null&&!lk();)s0(rt)}function s0(e){var t=c0(e.alternate,e,Jt);e.memoizedProps=e.pendingProps,t===null?a0(e):rt=t,Ip.current=null}function a0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=T2(n,t),n!==null){n.flags&=32767,rt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{at=6,rt=null;return}}else if(n=z2(n,t,Jt),n!==null){rt=n;return}if(t=t.sibling,t!==null){rt=t;return}rt=t=e}while(t!==null);at===0&&(at=5)}function Pr(e,t,n){var r=Fe,i=dn.transition;try{dn.transition=null,Fe=1,$2(e,t,n,r)}finally{dn.transition=i,Fe=r}return null}function $2(e,t,n,r){do $i();while(dr!==null);if(Re&6)throw Error(ce(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(ce(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(yk(e,s),e===pt&&(rt=pt=null,xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||da||(da=!0,u0(Xa,function(){return $i(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=dn.transition,dn.transition=null;var a=Fe;Fe=1;var l=Re;Re|=4,Ip.current=null,A2(e,n),t0(n,e),i2(Ku),el=!!Gu,Ku=Gu=null,e.current=n,L2(n),ck(),Re=l,Fe=a,dn.transition=s}else e.current=n;if(da&&(da=!1,dr=e,gl=i),s=e.pendingLanes,s===0&&(br=null),pk(n.stateNode),Ut(e,Ze()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ml)throw ml=!1,e=gd,gd=null,e;return gl&1&&e.tag!==0&&$i(),s=e.pendingLanes,s&1?e===xd?Qo++:(Qo=0,xd=e):Qo=0,Tr(),null}function $i(){if(dr!==null){var e=By(gl),t=dn.transition,n=Fe;try{if(dn.transition=null,Fe=16>e?16:e,dr===null)var r=!1;else{if(e=dr,dr=null,gl=0,Re&6)throw Error(ce(331));var i=Re;for(Re|=4,je=e.current;je!==null;){var s=je,a=s.child;if(je.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(je=u;je!==null;){var d=je;switch(d.tag){case 0:case 11:case 15:Go(8,d,s)}var p=d.child;if(p!==null)p.return=d,je=p;else for(;je!==null;){d=je;var f=d.sibling,h=d.return;if(Xv(d),d===u){je=null;break}if(f!==null){f.return=h,je=f;break}je=h}}}var m=s.alternate;if(m!==null){var b=m.child;if(b!==null){m.child=null;do{var k=b.sibling;b.sibling=null,b=k}while(b!==null)}}je=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,je=a;else e:for(;je!==null;){if(s=je,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Go(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,je=x;break e}je=s.return}}var y=e.current;for(je=y;je!==null;){a=je;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,je=v;else e:for(a=y;je!==null;){if(l=je,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Xl(9,l)}}catch(T){Xe(l,l.return,T)}if(l===a){je=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,je=j;break e}je=l.return}}if(Re=i,Tr(),An&&typeof An.onPostCommitFiberRoot=="function")try{An.onPostCommitFiberRoot(Hl,e)}catch{}r=!0}return r}finally{Fe=n,dn.transition=t}}return!1}function Om(e,t,n){t=Gi(n,t),t=Bv(e,t,1),e=vr(e,t,1),t=Mt(),e!==null&&(Ts(e,1,t),Ut(e,t))}function Xe(e,t,n){if(e.tag===3)Om(e,e,n);else for(;t!==null;){if(t.tag===3){Om(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(br===null||!br.has(r))){e=Gi(n,e),e=Uv(t,e,1),t=vr(t,e,1),e=Mt(),t!==null&&(Ts(t,1,e),Ut(t,e));break}}t=t.return}}function D2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Mt(),e.pingedLanes|=e.suspendedLanes&n,pt===e&&(xt&n)===n&&(at===4||at===3&&(xt&130023424)===xt&&500>Ze()-$p?Br(e,0):Op|=n),Ut(e,t)}function l0(e,t){t===0&&(e.mode&1?(t=ta,ta<<=1,!(ta&130023424)&&(ta=4194304)):t=1);var n=Mt();e=Xn(e,t),e!==null&&(Ts(e,t,n),Ut(e,n))}function F2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),l0(e,n)}function B2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(ce(314))}r!==null&&r.delete(t),l0(e,n)}var c0;c0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ft.current)Ot=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ot=!1,E2(e,t,n);Ot=!!(e.flags&131072)}else Ot=!1,Ye&&t.flags&1048576&&fv(t,al,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ra(e,t),e=t.pendingProps;var i=Vi(t,jt.current);Oi(t,n),i=Mp(null,t,r,e,i,n);var s=Ap();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Bt(r)?(s=!0,ol(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Cp(t),i.updater=Ql,t.stateNode=i,i._reactInternals=t,od(t,r,e,n),t=ld(null,t,r,!0,s,n)):(t.tag=0,Ye&&s&&vp(t),Nt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ra(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=W2(r),e=mn(r,e),i){case 0:t=ad(null,t,r,e,n);break e;case 1:t=Nm(null,t,r,e,n);break e;case 11:t=Sm(null,t,r,e,n);break e;case 14:t=Cm(null,t,r,mn(r.type,e),n);break e}throw Error(ce(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mn(r,i),ad(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mn(r,i),Nm(e,t,r,i,n);case 3:e:{if(qv(t),e===null)throw Error(ce(387));r=t.pendingProps,s=t.memoizedState,i=s.element,vv(e,t),ul(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Gi(Error(ce(423)),t),t=Em(e,t,r,n,i);break e}else if(r!==i){i=Gi(Error(ce(424)),t),t=Em(e,t,r,n,i);break e}else for(Kt=yr(t.stateNode.containerInfo.firstChild),Zt=t,Ye=!0,xn=null,n=xv(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qi(),r===i){t=Zn(e,t,n);break e}Nt(e,t,r,n)}t=t.child}return t;case 5:return bv(t),e===null&&nd(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,Qu(r,i)?a=null:s!==null&&Qu(r,s)&&(t.flags|=32),Vv(e,t),Nt(e,t,a,n),t.child;case 6:return e===null&&nd(t),null;case 13:return Yv(e,t,n);case 4:return Np(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Yi(t,null,r,n):Nt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mn(r,i),Sm(e,t,r,i,n);case 7:return Nt(e,t,t.pendingProps,n),t.child;case 8:return Nt(e,t,t.pendingProps.children,n),t.child;case 12:return Nt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,We(ll,r._currentValue),r._currentValue=a,s!==null)if(_n(s.value,a)){if(s.children===i.children&&!Ft.current){t=Zn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Jn(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),rd(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ce(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),rd(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Nt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Oi(t,n),i=pn(i),r=r(i),t.flags|=1,Nt(e,t,r,n),t.child;case 14:return r=t.type,i=mn(r,t.pendingProps),i=mn(r.type,i),Cm(e,t,r,i,n);case 15:return Wv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mn(r,i),Ra(e,t),t.tag=1,Bt(r)?(e=!0,ol(t)):e=!1,Oi(t,n),Fv(t,r,i),od(t,r,i,n),ld(null,t,r,!0,e,n);case 19:return Jv(e,t,n);case 22:return Hv(e,t,n)}throw Error(ce(156,t.tag))};function u0(e,t){return Oy(e,t)}function U2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ln(e,t,n,r){return new U2(e,t,n,r)}function Up(e){return e=e.prototype,!(!e||!e.isReactComponent)}function W2(e){if(typeof e=="function")return Up(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ap)return 11;if(e===lp)return 14}return 2}function kr(e,t){var n=e.alternate;return n===null?(n=ln(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $a(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")Up(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case vi:return Ur(n.children,i,s,t);case sp:a=8,i|=8;break;case zu:return e=ln(12,n,t,i|2),e.elementType=zu,e.lanes=s,e;case Tu:return e=ln(13,n,t,i),e.elementType=Tu,e.lanes=s,e;case Mu:return e=ln(19,n,t,i),e.elementType=Mu,e.lanes=s,e;case by:return ec(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yy:a=10;break e;case vy:a=9;break e;case ap:a=11;break e;case lp:a=14;break e;case sr:a=16,r=null;break e}throw Error(ce(130,e==null?e:typeof e,""))}return t=ln(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Ur(e,t,n,r){return e=ln(7,e,r,t),e.lanes=n,e}function ec(e,t,n,r){return e=ln(22,e,r,t),e.elementType=by,e.lanes=n,e.stateNode={isHidden:!1},e}function Yc(e,t,n){return e=ln(6,e,null,t),e.lanes=n,e}function Jc(e,t,n){return t=ln(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function H2(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ec(0),this.expirationTimes=Ec(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ec(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wp(e,t,n,r,i,s,a,l,c){return e=new H2(e,t,n,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=ln(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cp(s),e}function V2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function d0(e){if(!e)return Sr;e=e._reactInternals;e:{if(ri(e)!==e||e.tag!==1)throw Error(ce(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Bt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(ce(171))}if(e.tag===1){var n=e.type;if(Bt(n))return dv(e,n,t)}return t}function p0(e,t,n,r,i,s,a,l,c){return e=Wp(n,r,!0,e,i,s,a,l,c),e.context=d0(null),n=e.current,r=Mt(),i=wr(n),s=Jn(r,i),s.callback=t??null,vr(n,s,i),e.current.lanes=i,Ts(e,i,r),Ut(e,r),e}function tc(e,t,n,r){var i=t.current,s=Mt(),a=wr(i);return n=d0(n),t.context===null?t.context=n:t.pendingContext=n,t=Jn(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vr(i,t,a),e!==null&&(wn(e,i,a,s),Aa(e,i,a)),a}function yl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $m(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Hp(e,t){$m(e,t),(e=e.alternate)&&$m(e,t)}function q2(){return null}var f0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vp(e){this._internalRoot=e}nc.prototype.render=Vp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(ce(409));tc(e,t,null,null)};nc.prototype.unmount=Vp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qr(function(){tc(null,e,null,null)}),t[Qn]=null}};function nc(e){this._internalRoot=e}nc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<lr.length&&t!==0&&t<lr[n].priority;n++);lr.splice(n,0,e),n===0&&qy(e)}};function qp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function rc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Dm(){}function Y2(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=yl(a);s.call(u)}}var a=p0(t,r,e,0,null,!1,!1,"",Dm);return e._reactRootContainer=a,e[Qn]=a.current,ds(e.nodeType===8?e.parentNode:e),Qr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=yl(c);l.call(u)}}var c=Wp(e,0,!1,null,null,!1,!1,"",Dm);return e._reactRootContainer=c,e[Qn]=c.current,ds(e.nodeType===8?e.parentNode:e),Qr(function(){tc(t,c,n,r)}),c}function ic(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var c=yl(a);l.call(c)}}tc(t,a,e,i)}else a=Y2(n,t,e,i,r);return yl(a)}Uy=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Oo(t.pendingLanes);n!==0&&(dp(t,n|1),Ut(t,Ze()),!(Re&6)&&(Ki=Ze()+500,Tr()))}break;case 13:Qr(function(){var r=Xn(e,1);if(r!==null){var i=Mt();wn(r,e,1,i)}}),Hp(e,1)}};pp=function(e){if(e.tag===13){var t=Xn(e,134217728);if(t!==null){var n=Mt();wn(t,e,134217728,n)}Hp(e,134217728)}};Wy=function(e){if(e.tag===13){var t=wr(e),n=Xn(e,t);if(n!==null){var r=Mt();wn(n,e,t,r)}Hp(e,t)}};Hy=function(){return Fe};Vy=function(e,t){var n=Fe;try{return Fe=e,t()}finally{Fe=n}};Bu=function(e,t,n){switch(t){case"input":if(Pu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Jl(r);if(!i)throw Error(ce(90));ky(r),Pu(r,i)}}}break;case"textarea":jy(e,n);break;case"select":t=n.value,t!=null&&Li(e,!!n.multiple,t,!1)}};My=Dp;Ay=Qr;var J2={usingClientEntryPoint:!1,Events:[As,_i,Jl,zy,Ty,Dp]},So={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},G2={bundleType:So.bundleType,version:So.version,rendererPackageName:So.rendererPackageName,rendererConfig:So.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ry(e),e===null?null:e.stateNode},findFiberByHostInstance:So.findFiberByHostInstance||q2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pa.isDisabled&&pa.supportsFiber)try{Hl=pa.inject(G2),An=pa}catch{}}nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J2;nn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qp(t))throw Error(ce(200));return V2(e,t,null,n)};nn.createRoot=function(e,t){if(!qp(e))throw Error(ce(299));var n=!1,r="",i=f0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Wp(e,1,!1,null,null,n,!1,r,i),e[Qn]=t.current,ds(e.nodeType===8?e.parentNode:e),new Vp(t)};nn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(ce(188)):(e=Object.keys(e).join(","),Error(ce(268,e)));return e=Ry(t),e=e===null?null:e.stateNode,e};nn.flushSync=function(e){return Qr(e)};nn.hydrate=function(e,t,n){if(!rc(t))throw Error(ce(200));return ic(null,e,t,!0,n)};nn.hydrateRoot=function(e,t,n){if(!qp(e))throw Error(ce(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=f0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=p0(t,null,e,1,n??null,i,!1,s,a),e[Qn]=t.current,ds(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new nc(t)};nn.render=function(e,t,n){if(!rc(t))throw Error(ce(200));return ic(null,e,t,!1,n)};nn.unmountComponentAtNode=function(e){if(!rc(e))throw Error(ce(40));return e._reactRootContainer?(Qr(function(){ic(null,null,e,!1,function(){e._reactRootContainer=null,e[Qn]=null})}),!0):!1};nn.unstable_batchedUpdates=Dp;nn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!rc(n))throw Error(ce(200));if(e==null||e._reactInternals===void 0)throw Error(ce(38));return ic(e,t,n,!1,r)};nn.version="18.3.1-next-f1338f8080-20240426";function h0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h0)}catch(e){console.error(e)}}h0(),hy.exports=nn;var Yp=hy.exports,Fm=Yp;Nu.createRoot=Fm.createRoot,Nu.hydrateRoot=Fm.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bs(){return bs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bs.apply(this,arguments)}var pr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(pr||(pr={}));const Bm="popstate";function K2(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:a,hash:l}=r.location;return bd("",{pathname:s,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:m0(i)}return X2(t,n,null,e)}function ot(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Jp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Q2(){return Math.random().toString(36).substr(2,8)}function Um(e,t){return{usr:e.state,key:e.key,idx:t}}function bd(e,t,n,r){return n===void 0&&(n=null),bs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?lo(t):t,{state:n,key:t&&t.key||r||Q2()})}function m0(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function lo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function X2(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,l=pr.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(bs({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function p(){l=pr.Pop;let k=d(),x=k==null?null:k-u;u=k,c&&c({action:l,location:b.location,delta:x})}function f(k,x){l=pr.Push;let y=bd(b.location,k,x);u=d()+1;let v=Um(y,u),j=b.createHref(y);try{a.pushState(v,"",j)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(j)}s&&c&&c({action:l,location:b.location,delta:1})}function h(k,x){l=pr.Replace;let y=bd(b.location,k,x);u=d();let v=Um(y,u),j=b.createHref(y);a.replaceState(v,"",j),s&&c&&c({action:l,location:b.location,delta:0})}function m(k){let x=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof k=="string"?k:m0(k);return y=y.replace(/ $/,"%20"),ot(x,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,x)}let b={get action(){return l},get location(){return e(i,a)},listen(k){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Bm,p),c=k,()=>{i.removeEventListener(Bm,p),c=null}},createHref(k){return t(i,k)},createURL:m,encodeLocation(k){let x=m(k);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:f,replace:h,go(k){return a.go(k)}};return b}var Wm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Wm||(Wm={}));function Z2(e,t,n){return n===void 0&&(n="/"),e_(e,t,n)}function e_(e,t,n,r){let i=typeof t=="string"?lo(t):t,s=y0(i.pathname||"/",n);if(s==null)return null;let a=g0(e);t_(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=f_(s);l=u_(a[c],u)}return l}function g0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,a,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};c.relativePath.startsWith("/")&&(ot(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Wr([r,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(ot(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),g0(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:l_(u,s.index),routesMeta:d})};return e.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,a);else for(let c of x0(s.path))i(s,a,c)}),t}function x0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=x0(r.join("/")),l=[];return l.push(...a.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function t_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:c_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const n_=/^:[\w-]+$/,r_=3,i_=2,o_=1,s_=10,a_=-2,Hm=e=>e==="*";function l_(e,t){let n=e.split("/"),r=n.length;return n.some(Hm)&&(r+=a_),t&&(r+=i_),n.filter(i=>!Hm(i)).reduce((i,s)=>i+(n_.test(s)?r_:s===""?o_:s_),r)}function c_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function u_(e,t,n){let{routesMeta:r}=e,i={},s="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",p=d_({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),f=c.route;if(!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:Wr([s,p.pathname]),pathnameBase:y_(Wr([s,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(s=Wr([s,p.pathnameBase]))}return a}function d_(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=p_(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:f,isOptional:h}=d;if(f==="*"){let b=l[p]||"";a=s.slice(0,s.length-b.length).replace(/(.)\/+$/,"$1")}const m=l[p];return h&&!m?u[f]=void 0:u[f]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:e}}function p_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Jp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function f_(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Jp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function y0(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const h_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,m_=e=>h_.test(e);function g_(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?lo(e):e,s;if(n)if(m_(n))s=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),Jp(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=Vm(n.substring(1),"/"):s=Vm(n,t)}else s=t;return{pathname:s,search:v_(r),hash:b_(i)}}function Vm(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Gc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function x_(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function v0(e,t){let n=x_(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function b0(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=lo(e):(i=bs({},e),ot(!i.pathname||!i.pathname.includes("?"),Gc("?","pathname","search",i)),ot(!i.pathname||!i.pathname.includes("#"),Gc("#","pathname","hash",i)),ot(!i.search||!i.search.includes("#"),Gc("#","search","hash",i)));let s=e===""||i.pathname==="",a=s?"/":i.pathname,l;if(a==null)l=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}l=p>=0?t[p]:"/"}let c=g_(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Wr=e=>e.join("/").replace(/\/\/+/g,"/"),y_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),v_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,b_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function w_(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const w0=["post","put","patch","delete"];new Set(w0);const k_=["get",...w0];new Set(k_);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ws(){return ws=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ws.apply(this,arguments)}const Gp=w.createContext(null),__=w.createContext(null),Ps=w.createContext(null),oc=w.createContext(null),Mr=w.createContext({outlet:null,matches:[],isDataRoute:!1}),k0=w.createContext(null);function Rs(){return w.useContext(oc)!=null}function Kp(){return Rs()||ot(!1),w.useContext(oc).location}function _0(e){w.useContext(Ps).static||w.useLayoutEffect(e)}function Qp(){let{isDataRoute:e}=w.useContext(Mr);return e?O_():j_()}function j_(){Rs()||ot(!1);let e=w.useContext(Gp),{basename:t,future:n,navigator:r}=w.useContext(Ps),{matches:i}=w.useContext(Mr),{pathname:s}=Kp(),a=JSON.stringify(v0(i,n.v7_relativeSplatPath)),l=w.useRef(!1);return _0(()=>{l.current=!0}),w.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=b0(u,JSON.parse(a),s,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Wr([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,a,s,e])}function S_(){let{matches:e}=w.useContext(Mr),t=e[e.length-1];return t?t.params:{}}function C_(e,t){return N_(e,t)}function N_(e,t,n,r){Rs()||ot(!1);let{navigator:i}=w.useContext(Ps),{matches:s}=w.useContext(Mr),a=s[s.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=Kp(),d;if(t){var p;let k=typeof t=="string"?lo(t):t;c==="/"||(p=k.pathname)!=null&&p.startsWith(c)||ot(!1),d=k}else d=u;let f=d.pathname||"/",h=f;if(c!=="/"){let k=c.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(k.length).join("/")}let m=Z2(e,{pathname:h}),b=A_(m&&m.map(k=>Object.assign({},k,{params:Object.assign({},l,k.params),pathname:Wr([c,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?c:Wr([c,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,r);return t&&b?w.createElement(oc.Provider,{value:{location:ws({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:pr.Pop}},b):b}function E_(){let e=I_(),t=w_(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,null)}const z_=w.createElement(E_,null);class T_ extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(Mr.Provider,{value:this.props.routeContext},w.createElement(k0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function M_(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(Gp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Mr.Provider,{value:t},r)}function A_(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||ot(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:h}=n,m=p.route.loader&&f[p.route.id]===void 0&&(!h||h[p.route.id]===void 0);if(p.route.lazy||m){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,p,f)=>{let h,m=!1,b=null,k=null;n&&(h=l&&p.route.id?l[p.route.id]:void 0,b=p.route.errorElement||z_,c&&(u<0&&f===0?($_("route-fallback"),m=!0,k=null):u===f&&(m=!0,k=p.route.hydrateFallbackElement||null)));let x=t.concat(a.slice(0,f+1)),y=()=>{let v;return h?v=b:m?v=k:p.route.Component?v=w.createElement(p.route.Component,null):p.route.element?v=p.route.element:v=d,w.createElement(M_,{match:p,routeContext:{outlet:d,matches:x,isDataRoute:n!=null},children:v})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?w.createElement(T_,{location:n.location,revalidation:n.revalidation,component:b,error:h,children:y(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):y()},null)}var j0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(j0||{}),S0=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(S0||{});function L_(e){let t=w.useContext(Gp);return t||ot(!1),t}function P_(e){let t=w.useContext(__);return t||ot(!1),t}function R_(e){let t=w.useContext(Mr);return t||ot(!1),t}function C0(e){let t=R_(),n=t.matches[t.matches.length-1];return n.route.id||ot(!1),n.route.id}function I_(){var e;let t=w.useContext(k0),n=P_(),r=C0();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function O_(){let{router:e}=L_(j0.UseNavigateStable),t=C0(S0.UseNavigateStable),n=w.useRef(!1);return _0(()=>{n.current=!0}),w.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ws({fromRouteId:t},s)))},[e,t])}const qm={};function $_(e,t,n){qm[e]||(qm[e]=!0)}function D_(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function F_(e){let{to:t,replace:n,state:r,relative:i}=e;Rs()||ot(!1);let{future:s,static:a}=w.useContext(Ps),{matches:l}=w.useContext(Mr),{pathname:c}=Kp(),u=Qp(),d=b0(t,v0(l,s.v7_relativeSplatPath),c,i==="path"),p=JSON.stringify(d);return w.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:i}),[u,p,i,n,r]),null}function xi(e){ot(!1)}function B_(e){let{basename:t="/",children:n=null,location:r,navigationType:i=pr.Pop,navigator:s,static:a=!1,future:l}=e;Rs()&&ot(!1);let c=t.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:c,navigator:s,static:a,future:ws({v7_relativeSplatPath:!1},l)}),[c,l,s,a]);typeof r=="string"&&(r=lo(r));let{pathname:d="/",search:p="",hash:f="",state:h=null,key:m="default"}=r,b=w.useMemo(()=>{let k=y0(d,c);return k==null?null:{location:{pathname:k,search:p,hash:f,state:h,key:m},navigationType:i}},[c,d,p,f,h,m,i]);return b==null?null:w.createElement(Ps.Provider,{value:u},w.createElement(oc.Provider,{children:n,value:b}))}function U_(e){let{children:t,location:n}=e;return C_(wd(t),n)}new Promise(()=>{});function wd(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let s=[...t,i];if(r.type===w.Fragment){n.push.apply(n,wd(r.props.children,s));return}r.type!==xi&&ot(!1),!r.props.index||!r.props.children||ot(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=wd(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const W_="6";try{window.__reactRouterVersion=W_}catch{}const H_="startTransition",Ym=Dw[H_];function V_(e){let{basename:t,children:n,future:r,window:i}=e,s=w.useRef();s.current==null&&(s.current=K2({window:i,v5Compat:!0}));let a=s.current,[l,c]=w.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=w.useCallback(p=>{u&&Ym?Ym(()=>c(p)):c(p)},[c,u]);return w.useLayoutEffect(()=>a.listen(d),[a,d]),w.useEffect(()=>D_(r),[r]),w.createElement(B_,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}var Jm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Jm||(Jm={}));var Gm;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Gm||(Gm={}));const q_={},Km=e=>{let t;const n=new Set,r=(d,p)=>{const f=typeof d=="function"?d(t):d;if(!Object.is(f,t)){const h=t;t=p??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(m=>m(t,h))}},i=()=>t,c={setState:r,getState:i,getInitialState:()=>u,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(q_?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,c);return c},Y_=e=>e?Km(e):Km;var N0={exports:{}},E0={},z0={exports:{}},T0={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qi=w;function J_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var G_=typeof Object.is=="function"?Object.is:J_,K_=Qi.useState,Q_=Qi.useEffect,X_=Qi.useLayoutEffect,Z_=Qi.useDebugValue;function ej(e,t){var n=t(),r=K_({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return X_(function(){i.value=n,i.getSnapshot=t,Kc(i)&&s({inst:i})},[e,n,t]),Q_(function(){return Kc(i)&&s({inst:i}),e(function(){Kc(i)&&s({inst:i})})},[e]),Z_(n),n}function Kc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!G_(e,n)}catch{return!0}}function tj(e,t){return t()}var nj=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?tj:ej;T0.useSyncExternalStore=Qi.useSyncExternalStore!==void 0?Qi.useSyncExternalStore:nj;z0.exports=T0;var rj=z0.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sc=w,ij=rj;function oj(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var sj=typeof Object.is=="function"?Object.is:oj,aj=ij.useSyncExternalStore,lj=sc.useRef,cj=sc.useEffect,uj=sc.useMemo,dj=sc.useDebugValue;E0.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=lj(null);if(s.current===null){var a={hasValue:!1,value:null};s.current=a}else a=s.current;s=uj(function(){function c(h){if(!u){if(u=!0,d=h,h=r(h),i!==void 0&&a.hasValue){var m=a.value;if(i(m,h))return p=m}return p=h}if(m=p,sj(d,h))return m;var b=r(h);return i!==void 0&&i(m,b)?(d=h,m):(d=h,p=b)}var u=!1,d,p,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,r,i]);var l=aj(e,s[0],s[1]);return cj(function(){a.hasValue=!0,a.value=l},[l]),dj(l),l};N0.exports=E0;var pj=N0.exports;const fj=Ul(pj),M0={},{useDebugValue:hj}=Xt,{useSyncExternalStoreWithSelector:mj}=fj;let Qm=!1;const gj=e=>e;function xj(e,t=gj,n){(M0?"production":void 0)!=="production"&&n&&!Qm&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Qm=!0);const r=mj(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return hj(r),r}const Xm=e=>{(M0?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?Y_(e):e,n=(r,i)=>xj(t,r,i);return Object.assign(n,t),n},yj=e=>e?Xm(e):Xm,St=yj((e,t)=>({project:null,selectedAgentId:null,selectedToolId:null,mcpServers:[],builtinTools:[],isRunning:!1,runEvents:[],watches:[],activeTab:"app",sidebarOpen:!0,hasUnsavedChanges:!1,runAgentId:null,currentSessionId:null,setProject:n=>{var i;const r=((i=n==null?void 0:n.watches)==null?void 0:i.map(s=>({...s,result:void 0,error:void 0,isLoading:!1,lastRun:void 0,history:[]})))||[];e({project:n,watches:r})},setSelectedAgentId:n=>e({selectedAgentId:n}),setSelectedToolId:n=>e({selectedToolId:n}),setMcpServers:n=>e({mcpServers:n}),setBuiltinTools:n=>e({builtinTools:n}),setIsRunning:n=>e({isRunning:n}),addRunEvent:n=>e(r=>({runEvents:[...r.runEvents,n]})),clearRunEvents:()=>e({runEvents:[]}),setWatches:n=>e({watches:n}),updateWatch:(n,r)=>e(i=>{const s=i.watches.map(l=>l.id===n?{...l,...r}:l);if(("serverName"in r||"toolName"in r||"args"in r||"transform"in r)&&i.project){const l=s.map(({id:c,serverName:u,toolName:d,args:p,transform:f})=>({id:c,serverName:u,toolName:d,args:p,transform:f}));return{watches:s,project:{...i.project,watches:l},hasUnsavedChanges:!0}}return{watches:s}}),addWatch:n=>e(r=>{const i=[...r.watches,n],{project:s}=r;if(s){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...s,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),removeWatch:n=>e(r=>{const i=r.watches.filter(a=>a.id!==n),{project:s}=r;if(s){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...s,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),clearWatchHistories:()=>e(n=>({watches:n.watches.map(r=>({...r,history:[],result:void 0,error:void 0}))})),setActiveTab:n=>e({activeTab:n}),setSidebarOpen:n=>e({sidebarOpen:n}),setHasUnsavedChanges:n=>e({hasUnsavedChanges:n}),setRunAgentId:n=>e({runAgentId:n}),setCurrentSessionId:n=>e({currentSessionId:n}),updateProject:n=>{const{project:r}=t();r&&e({project:{...r,...n}})},addAgent:n=>{const{project:r}=t();if(r){let i=r.app;if(n.type==="LlmAgent"&&n.output_key){const s=n.output_key;r.app.state_keys.find(l=>l.name===s)||(i={...r.app,state_keys:[...r.app.state_keys,{name:s,description:`Output from ${n.name} agent`,type:"string",scope:"session"}]})}e({project:{...r,app:i,agents:[...r.agents,n]}})}},updateAgent:(n,r)=>{const{project:i}=t();if(i){const s=i.agents.find(l=>l.id===n);let a=i.app;if(s&&s.type==="LlmAgent"&&r.output_key){const l=r.output_key;i.app.state_keys.find(u=>u.name===l)||(a={...i.app,state_keys:[...i.app.state_keys,{name:l,description:`Output from ${r.name||s.name} agent`,type:"string",scope:"session"}]})}e({project:{...i,app:a,agents:i.agents.map(l=>l.id===n?{...l,...r}:l)}})}},removeAgent:n=>{const{project:r,selectedAgentId:i}=t();r&&e({project:{...r,agents:r.agents.filter(s=>s.id!==n)},selectedAgentId:i===n?null:i})},addCustomTool:n=>{const{project:r}=t();r&&e({project:{...r,custom_tools:[...r.custom_tools,n]}})},updateCustomTool:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_tools:i.custom_tools.map(s=>s.id===n?{...s,...r}:s)}})},removeCustomTool:n=>{const{project:r,selectedToolId:i}=t();r&&e({project:{...r,custom_tools:r.custom_tools.filter(s=>s.id!==n)},selectedToolId:i===n?null:i})},addCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:[...r.custom_callbacks||[],n]}})},updateCustomCallback:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_callbacks:(i.custom_callbacks||[]).map(s=>s.id===n?{...s,...r}:s)}})},removeCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:(r.custom_callbacks||[]).filter(i=>i.id!==n)}})}})),Xp="/api";async function Me(e,t){const n=await fetch(`${Xp}${e}`,{...t,headers:{"Content-Type":"application/json",...t==null?void 0:t.headers}});if(!n.ok){const r=await n.json().catch(()=>({detail:"Unknown error"}));throw new Error(r.detail||`HTTP ${n.status}`)}return n.json()}async function A0(){return(await Me("/projects")).projects}async function L0(e){return(await Me(`/projects/${e}`)).project}async function P0(e,t=""){return(await Me("/projects",{method:"POST",body:JSON.stringify({name:e,description:t})})).project}async function kd(e,t){return(await Me(`/projects/${e}`,{method:"PUT",body:JSON.stringify(t)})).project}async function R0(e){await Me(`/projects/${e}`,{method:"DELETE"})}async function I0(e){return Me(`/sessions/${e}/save-to-memory`,{method:"POST"})}async function _d(e){return(await Me(`/projects/${e}/sessions`)).sessions}async function O0(e,t){return(await Me(`/projects/${e}/sessions/${t}/load`)).session}async function $0(e,t){return(await Me(`/projects/${e}/sessions/${t}/artifacts`)).artifacts||[]}function Da(e,t,n){return`${Xp}/projects/${e}/sessions/${t}/artifacts/${encodeURIComponent(n)}`}async function D0(e){return(await Me(`/projects/${e}/yaml`)).yaml}async function F0(e,t){return(await Me(`/projects/${e}/yaml`,{method:"PUT",body:JSON.stringify({yaml:t})})).project}async function Zp(){return(await Me("/mcp-servers")).servers}async function B0(){return(await Me("/builtin-tools")).tools}function U0(e){const t=window.location.protocol==="https:"?"wss:":"ws:",n=window.location.host;return new WebSocket(`${t}//${n}/ws/run/${e}`)}async function Fa(e,t,n,r){return await Me(`/projects/${e}/generate-prompt`,{method:"POST",body:JSON.stringify({agent_id:t,context:n,agent_config:r||void 0})})}async function W0(e,t){return await Me(`/projects/${e}/generate-agent-config`,{method:"POST",body:JSON.stringify({description:t})})}async function H0(e,t,n,r=[],i){return await Me(`/projects/${e}/generate-tool-code`,{method:"POST",body:JSON.stringify({tool_name:t,tool_description:n,state_keys_used:r,context:i})})}async function V0(e,t,n,r,i=[],s){return await Me(`/projects/${e}/generate-callback-code`,{method:"POST",body:JSON.stringify({callback_name:t,callback_description:n,callback_type:r,state_keys_used:i,context:s})})}async function jd(e){return await Me("/test-mcp-server",{method:"POST",body:JSON.stringify(e)})}async function q0(e,t){return Me(`/projects/${e}/test-model`,{method:"POST",body:JSON.stringify(t)})}async function Y0(e,t){return Me(`/projects/${e}/skillsets/${t}/stats`)}async function J0(e,t,n,r,i=500,s=50){return Me(`/projects/${e}/skillsets/${t}/url`,{method:"POST",body:JSON.stringify({url:n,source_name:r,chunk_size:i,chunk_overlap:s})})}async function G0(e,t,n,r=500,i=50){const s=new FormData;s.append("file",n),s.append("chunk_size",String(r)),s.append("chunk_overlap",String(i));const a=await fetch(`${Xp}/projects/${e}/skillsets/${t}/file`,{method:"POST",body:s});if(!a.ok)throw new Error(`Upload failed: ${a.statusText}`);return a.json()}async function K0(e,t,n,r=10,i=0){return Me(`/projects/${e}/skillsets/${t}/search`,{method:"POST",body:JSON.stringify({query:n,top_k:r,min_score:i})})}async function Q0(e,t){return Me(`/projects/${e}/skillsets/${t}/entries`,{method:"DELETE"})}async function X0(){return Me("/skillsets/embeddings-available")}async function Z0(e,t={}){return Me(`/projects/${e}/generate-eval-set`,{method:"POST",body:JSON.stringify(t)})}const tt={async get(e){return Me(e)},async post(e,t){return Me(e,{method:"POST",body:t?JSON.stringify(t):void 0})},async put(e,t){return Me(e,{method:"PUT",body:t?JSON.stringify(t):void 0})},async delete(e){return Me(e,{method:"DELETE"})}};async function e1(){return Me("/system/metrics")}const vj=Object.freeze(Object.defineProperty({__proto__:null,addSkillSetUrl:J0,api:tt,checkEmbeddingsAvailable:X0,clearSkillSet:Q0,createProject:P0,createRunWebSocket:U0,deleteProject:R0,fetchJSON:Me,generateAgentConfig:W0,generateCallbackCode:V0,generateEvalSet:Z0,generatePrompt:Fa,generateToolCode:H0,getArtifactUrl:Da,getBuiltinTools:B0,getMcpServers:Zp,getProject:L0,getProjectYaml:D0,getSkillSetStats:Y0,getSystemMetrics:e1,listArtifacts:$0,listProjectSessions:_d,listProjects:A0,loadSession:O0,saveSessionToMemory:I0,searchSkillSet:K0,testMcpServer:jd,testModelConfig:q0,updateProject:kd,updateProjectFromYaml:F0,uploadSkillSetFile:G0},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var bj={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wj=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ke=(e,t)=>{const n=w.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:l="",children:c,...u},d)=>w.createElement("svg",{ref:d,...bj,width:i,height:i,stroke:r,strokeWidth:a?Number(s)*24/Number(i):s,className:["lucide",`lucide-${wj(e)}`,l].join(" "),...u},[...t.map(([p,f])=>w.createElement(p,f)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kj=ke("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=ke("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=ke("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _j=ke("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jj=ke("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=ke("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=ke("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=ke("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=ke("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=ke("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=ke("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=ke("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=ke("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=ke("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=ke("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=ke("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=ke("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sj=ke("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=ke("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=ke("FileBox",[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",key:"h7jej2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M2.97 13.12c-.6.36-.97 1.02-.97 1.74v3.28c0 .72.37 1.38.97 1.74l3 1.83c.63.39 1.43.39 2.06 0l3-1.83c.6-.36.97-1.02.97-1.74v-3.28c0-.72-.37-1.38-.97-1.74l-3-1.83a1.97 1.97 0 0 0-2.06 0l-3 1.83Z",key:"f4a3oc"}],["path",{d:"m7 17-4.74-2.85",key:"etm6su"}],["path",{d:"m7 17 4.74-2.85",key:"5xuooz"}],["path",{d:"M7 17v5",key:"1yj1jh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=ke("FileCheck",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cj=ke("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=ke("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nj=ke("File",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=ke("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=ke("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=ke("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=ke("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=ke("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ej=ke("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zj=ke("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tj=ke("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=ke("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=ke("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=ke("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mj=ke("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=ke("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=ke("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=ke("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=ke("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aj=ke("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lj=ke("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pj=ke("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=ke("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=ke("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=ke("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rj=ke("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=ke("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=ke("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=ke("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ij=ke("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=ke("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=ke("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=ke("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oj=ke("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=ke("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=ke("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=ke("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=ke("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=ke("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=ke("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=ke("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=ke("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $j=ke("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=ke("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=ke("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=ke("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=ke("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function Dj(){const e=Qp(),[t,n]=w.useState([]),[r,i]=w.useState(!0),[s,a]=w.useState(!1),[l,c]=w.useState("");w.useEffect(()=>{u()},[]);async function u(){try{const f=await A0();n(f)}catch(f){console.error("Failed to load projects:",f)}finally{i(!1)}}async function d(){if(l.trim())try{const f=await P0(l.trim());e(`/project/${f.id}`)}catch(f){console.error("Failed to create project:",f)}}async function p(f,h){if(h.stopPropagation(),!!confirm("Delete this project?"))try{await R0(f),n(t.filter(m=>m.id!==f))}catch(m){console.error("Failed to delete project:",m)}}return o.jsxs("div",{className:"project-list",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("header",{className:"header",children:[o.jsxs("div",{className:"logo",children:[o.jsx(Di,{size:40,className:"logo-icon"}),o.jsx("h1",{className:"title",children:"ADK Playground"})]}),o.jsx("p",{className:"subtitle",children:"Build, test, and deploy AI agents visually"})]}),o.jsxs("div",{className:"content",children:[s?o.jsxs("div",{className:"create-form",children:[o.jsx("input",{type:"text",placeholder:"Project name...",value:l,onChange:f=>c(f.target.value),onKeyDown:f=>f.key==="Enter"&&d(),autoFocus:!0}),o.jsxs("button",{className:"btn btn-primary",onClick:d,children:[o.jsx(it,{size:18}),"Create"]}),o.jsx("button",{className:"btn btn-secondary",onClick:()=>a(!1),children:"Cancel"})]}):o.jsx("div",{className:"create-form",children:o.jsxs("button",{className:"btn btn-primary",onClick:()=>a(!0),children:[o.jsx(it,{size:18}),"New Project"]})}),r?o.jsx("div",{className:"loading",children:"Loading projects..."}):t.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Zm,{size:48,style:{marginBottom:16,opacity:.3}}),o.jsx("p",{children:"No projects yet. Create one to get started!"})]}):o.jsx("div",{className:"projects-grid",children:t.map(f=>o.jsxs("div",{className:"project-card",onClick:()=>e(`/project/${f.id}`),children:[o.jsxs("h3",{children:[o.jsx(Zm,{size:18}),f.name]}),o.jsx("p",{children:f.description||"No description"}),o.jsx("button",{className:"delete-btn",onClick:h=>p(f.id,h),children:o.jsx(Je,{size:16})})]},f.id))})]}),o.jsxs("div",{style:{position:"fixed",bottom:"8px",right:"12px",fontSize:"10px",color:"#52525b",fontFamily:"monospace"},children:["v","0.1.0"," (","d932031",")"]})]})}const eg={},Fj=5*60*1e3;function Bj({projectId:e,value:t,provider:n,apiBase:r,onChange:i,placeholder:s="Search models..."}){const a=`${e}:${n||""}:${r||""}`,[l,c]=w.useState(t||""),[u,d]=w.useState(!1),[p,f]=w.useState([]),[h,m]=w.useState(!1),[b,k]=w.useState(null),[x,y]=w.useState(-1),[v,j]=w.useState({top:0,left:0,width:0}),T=w.useRef(null),_=w.useRef(null);w.useEffect(()=>{if(u&&T.current){const M=T.current.getBoundingClientRect();j({top:M.bottom+window.scrollY+4,left:M.left+window.scrollX,width:M.width})}},[u]);const A=w.useCallback(async()=>{const M=eg[a];if(M&&Date.now()-M.timestamp<Fj){const F=[];Object.values(M.providers).forEach(O=>{F.push(...O.models)}),f(F);return}m(!0),k(null);try{const F=new URLSearchParams;n&&F.append("provider",n),r&&F.append("api_base",r);const O=`/models/${e}${F.toString()?"?"+F.toString():""}`,L=await tt.get(O);eg[a]={providers:L.providers,timestamp:Date.now()};const B=[];Object.values(L.providers).forEach($=>{$.models&&$.models.length>0&&B.push(...$.models)}),f(B)}catch(F){k(F.message||"Failed to fetch models")}finally{m(!1)}},[e,a,r,n]);w.useEffect(()=>{A()},[A]),w.useEffect(()=>{c(t||"")},[t]);const E=p.filter(M=>{const F=l.toLowerCase();return M.id.toLowerCase().includes(F)||M.name.toLowerCase().includes(F)||M.provider.toLowerCase().includes(F)});w.useEffect(()=>{const M=F=>{_.current&&!_.current.contains(F.target)&&T.current&&!T.current.contains(F.target)&&d(!1)};return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[]);const W=M=>{if(!u){(M.key==="ArrowDown"||M.key==="Enter")&&(d(!0),M.preventDefault());return}switch(M.key){case"ArrowDown":y(F=>Math.min(F+1,E.length-1)),M.preventDefault();break;case"ArrowUp":y(F=>Math.max(F-1,0)),M.preventDefault();break;case"Enter":x>=0&&x<E.length&&C(E[x]),M.preventDefault();break;case"Escape":d(!1);break}},C=M=>{c(M.id),i(M.id,M.provider),d(!1)},R=M=>{c(M.target.value),d(!0),y(-1),i(M.target.value,n||"gemini")},H=M=>{switch(M.toLowerCase()){case"gemini":return"provider-gemini";case"anthropic":return"provider-anthropic";case"openai":return"provider-openai";case"groq":return"provider-groq";case"together":return"provider-together";case"ollama":return"provider-ollama";default:return"provider-other"}},Q=u?o.jsxs("div",{ref:_,className:"model-autocomplete-dropdown model-autocomplete-dropdown-portal",style:{position:"fixed",top:v.top,left:v.left,width:v.width},children:[h&&o.jsx("div",{className:"model-autocomplete-loading",children:"Loading models..."}),b&&o.jsx("div",{className:"model-autocomplete-error",children:b}),!h&&!b&&E.length===0&&o.jsx("div",{className:"model-autocomplete-empty",children:l?"No matching models":"No models available"}),!h&&E.length>0&&o.jsxs("div",{className:"model-autocomplete-list",children:[E.slice(0,50).map((M,F)=>o.jsxs("div",{className:`model-autocomplete-item ${F===x?"highlighted":""}`,onClick:()=>C(M),onMouseEnter:()=>y(F),children:[o.jsx("span",{className:`provider-badge ${H(M.provider)}`,children:M.provider}),o.jsx("span",{className:"model-id",children:M.id}),M.context_window&&o.jsxs("span",{className:"model-context",title:`${M.context_window.toLocaleString()} token context`,children:[Math.round(M.context_window/1e3),"K"]}),M.supports_tools&&o.jsx("span",{className:"model-feature",title:"Supports function calling / tools",children:"🔧"}),M.supports_vision&&o.jsx("span",{className:"model-feature",title:"Supports image/vision input",children:"👁️"}),M.supports_json_mode&&o.jsx("span",{className:"model-feature",title:"Supports structured JSON output",children:"📋"})]},`${M.provider}-${M.id}`)),E.length>50&&o.jsxs("div",{className:"model-autocomplete-more",children:["+",E.length-50," more..."]})]})]}):null;return o.jsxs("div",{className:"model-autocomplete",children:[o.jsx("input",{ref:T,type:"text",value:l,onChange:R,onFocus:()=>d(!0),onKeyDown:W,placeholder:s,className:"model-autocomplete-input"}),Q&&Yp.createPortal(Q,document.body)]})}const Uj=[{value:"gemini",label:"Gemini"},{value:"anthropic",label:"Anthropic"},{value:"openai",label:"OpenAI"},{value:"groq",label:"Groq"},{value:"together",label:"Together (via LiteLLM)"},{value:"litellm",label:"LiteLLM / Other"}];function Wj(e,t){return e.startsWith("openai/")?"openai":e.startsWith("groq/")?"groq":e.startsWith("together_ai/")||e.startsWith("together/")?"together":e.startsWith("ollama/")?"litellm":e.startsWith("claude-")?"anthropic":e.startsWith("gemini-")?"gemini":e.includes("/")?"litellm":t||"gemini"}function p1({projectId:e,values:t,onChange:n,className:r=""}){const[i,s]=w.useState(!1),[a,l]=w.useState(null),c=async()=>{var u;if(!t.model_name||!t.provider){l({success:!1,message:"Please select a model first"});return}s(!0),l(null);try{const d=await q0(e,{provider:t.provider,model_name:t.model_name,api_base:t.api_base});d.success?l({success:!0,message:((u=d.response)==null?void 0:u.slice(0,100))||"Model responded successfully!"}):l({success:!1,message:d.error||"Test failed"})}catch(d){l({success:!1,message:d.message||"Connection failed"})}finally{s(!1)}};return o.jsxs("div",{className:`model-config-form ${r}`,children:[o.jsxs("div",{className:"model-config-row",children:[o.jsxs("div",{className:"model-config-field",style:{flex:1},children:[o.jsx("label",{children:"Provider"}),o.jsx("select",{value:t.provider||"gemini",onChange:u=>{n({provider:u.target.value}),l(null)},children:Uj.map(u=>o.jsx("option",{value:u.value,children:u.label},u.value))})]}),o.jsxs("div",{className:"model-config-field",style:{flex:3},children:[o.jsx("label",{children:"Model"}),o.jsx(Bj,{projectId:e,value:t.model_name||"",provider:t.provider,apiBase:t.api_base,onChange:(u,d)=>{const p=Wj(u,d);n({model_name:u,provider:p}),l(null)},placeholder:"Search models..."})]}),o.jsxs("div",{className:"model-config-field",style:{flex:2},children:[o.jsx("label",{children:"API Base (optional)"}),o.jsx("input",{type:"text",value:t.api_base||"",onChange:u=>{n({api_base:u.target.value||void 0}),l(null)},placeholder:t.provider==="gemini"?"https://generativelanguage.googleapis.com":t.provider==="anthropic"?"https://api.anthropic.com":t.provider==="openai"?"https://api.openai.com/v1":t.provider==="groq"?"https://api.groq.com/openai/v1":t.provider==="together"?"https://api.together.xyz/v1":"http://localhost:11434"})]}),o.jsxs("div",{className:"model-config-field model-test-field",children:[o.jsx("label",{children:" "}),o.jsxs("button",{type:"button",className:`model-test-btn ${(a==null?void 0:a.success)===!0?"success":(a==null?void 0:a.success)===!1?"error":""}`,onClick:c,disabled:i||!t.model_name,title:(a==null?void 0:a.message)||"Test model connection",children:[i?o.jsx(s1,{size:14,className:"spinning"}):(a==null?void 0:a.success)===!0?o.jsx(jn,{size:14}):(a==null?void 0:a.success)===!1?o.jsx(Nr,{size:14}):o.jsx(af,{size:14}),i?"Testing...":"Test"]})]})]}),o.jsxs("div",{className:"model-config-row",children:[o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Temperature"}),o.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:t.temperature??"",onChange:u=>n({temperature:u.target.value?parseFloat(u.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Max Tokens"}),o.jsx("input",{type:"number",min:"1",value:t.max_output_tokens??"",onChange:u=>n({max_output_tokens:u.target.value?parseInt(u.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Top P"}),o.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:t.top_p??"",onChange:u=>n({top_p:u.target.value?parseFloat(u.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Top K"}),o.jsx("input",{type:"number",min:"1",value:t.top_k??"",onChange:u=>n({top_k:u.target.value?parseInt(u.target.value):void 0}),placeholder:"Default"})]})]}),o.jsxs("div",{className:"model-config-row",children:[o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{title:"Number of times to retry on connection failure",children:"Retries"}),o.jsx("input",{type:"number",min:"0",max:"10",value:t.num_retries??"",onChange:u=>n({num_retries:u.target.value?parseInt(u.target.value):void 0}),placeholder:"3"})]}),o.jsxs("div",{className:"model-config-field",style:{flex:2},children:[o.jsx("label",{title:"Maximum time to wait for a response (in seconds)",children:"Timeout (seconds)"}),o.jsx("input",{type:"number",min:"10",max:"7200",step:"10",value:t.request_timeout??"",onChange:u=>n({request_timeout:u.target.value?parseInt(u.target.value):void 0}),placeholder:"1800 (30 min)"})]}),o.jsxs("div",{className:"model-config-field",style:{flex:3},children:[o.jsx("label",{children:" "}),o.jsx("span",{className:"model-config-hint",style:{fontSize:"11px",color:"#666",marginTop:"4px"},children:"Increase timeout for slow models like local Ollama"})]})]})]})}const Hj=[{key:"GOOGLE_API_KEY",description:"API key for Gemini models"},{key:"OPENAI_API_KEY",description:"API key for OpenAI models (via LiteLLM)"},{key:"GROQ_API_KEY",description:"API key for Groq models"},{key:"ANTHROPIC_API_KEY",description:"API key for Anthropic Claude models"},{key:"TOGETHER_API_KEY",description:"API key for Together (via LiteLLM, e.g. together_ai/* models)"},{key:"AZURE_OPENAI_API_KEY",description:"API key for Azure OpenAI Service"},{key:"AZURE_API_BASE",description:"Base URL for Azure OpenAI endpoint (e.g., https://your-resource.openai.azure.com)"},{key:"AZURE_API_VERSION",description:"API version for Azure OpenAI (e.g., 2024-02-15-preview)"},{key:"GOOGLE_GENAI_USE_VERTEXAI",description:'Set to "1" to use Vertex AI instead of API key'},{key:"GOOGLE_CLOUD_PROJECT",description:"Google Cloud project ID for Vertex AI"},{key:"GOOGLE_CLOUD_REGION",description:"Google Cloud region for Vertex AI (e.g., us-central1)"}];function Vj(e){return/^[a-zA-Z0-9_]+$/.test(e)}function qj(){var $;const{project:e,updateProject:t}=St(),[n,r]=w.useState(null);if(!e)return null;const{app:i}=e;function s(g){t({app:{...i,...g}})}function a(g){if(g===""){r(null),s({name:g});return}Vj(g)?r(null):r("Name can only contain letters, numbers, and underscores"),s({name:g})}function l(g="ReflectAndRetryToolPlugin"){let P;switch(g){case"ReflectAndRetryToolPlugin":P={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1};break;case"ContextFilterPlugin":P={type:"ContextFilterPlugin",name:"context_filter",num_invocations_to_keep:5};break;case"LoggingPlugin":P={type:"LoggingPlugin",name:"logging"};break;case"GlobalInstructionPlugin":P={type:"GlobalInstructionPlugin",name:"global_instruction",global_instruction:""};break;case"SaveFilesAsArtifactsPlugin":P={type:"SaveFilesAsArtifactsPlugin",name:"save_files"};break;case"MultimodalToolResultsPlugin":P={type:"MultimodalToolResultsPlugin",name:"multimodal_tools"};break;default:P={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1}}s({plugins:[...i.plugins,P]})}function c(g,P){const z=[...i.plugins];z[g]={...z[g],...P},s({plugins:z})}function u(g){s({plugins:i.plugins.filter((P,z)=>z!==g)})}const d=i.sandbox||{enabled:!1,allow_all_network:!1,allowlist:{auto:[],user:[]},unknown_action:"ask",approval_timeout:30,agent_memory_limit_mb:512,agent_cpu_limit:1,mcp_memory_limit_mb:256,mcp_cpu_limit:.5,run_timeout:3600,volume_mounts:[]},p=(($=d.allowlist)==null?void 0:$.user)||[],f=d.volume_mounts||[];function h(g){s({sandbox:{...d,...g}})}async function m(g){const P=i.id;try{await fetch(`/api/sandbox/${P}/allowlist/sync`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({patterns:g.map(z=>({pattern:z.pattern,pattern_type:z.pattern_type})).filter(z=>z.pattern)})})}catch(z){console.debug("Could not sync allowlist to gateway:",z)}}function b(){const g={id:`pattern_${Date.now().toString(36)}`,pattern:"",pattern_type:"exact",source:"user",added_at:new Date().toISOString()},P={...d.allowlist,user:[...p,g]};h({allowlist:P})}function k(g,P){const z=[...p];z[g]={...z[g],...P};const S=z;h({allowlist:{...d.allowlist,user:S}}),P.pattern&&m(S)}function x(g){const P=p.filter((z,S)=>S!==g);h({allowlist:{...d.allowlist,user:P}})}function y(){const g={host_path:"",container_path:"",mode:"ro"};h({volume_mounts:[...f,g]})}function v(g,P){const z=[...f];z[g]={...z[g],...P},h({volume_mounts:z})}function j(g){const P=f.filter((z,S)=>S!==g);h({volume_mounts:P})}const T=i.models||[];function _(){const g=`model_${Date.now().toString(36)}`,P={id:g,name:"New Model",provider:"gemini",model_name:"gemini-2.0-flash",is_default:T.length===0};s({models:[...T,P],default_model_id:T.length===0?g:i.default_model_id})}function A(g,P){const z=T.map(S=>S.id===g?{...S,...P}:S);s({models:z})}function E(g){var S;const P=T.filter(D=>D.id!==g),z=i.default_model_id===g?((S=P[0])==null?void 0:S.id)||void 0:i.default_model_id;s({models:P,default_model_id:z})}function W(g){s({default_model_id:g})}const C=i.env_vars||{},[R,H]=w.useState({}),[Q,M]=w.useState("");function F(g=""){const P=g||Q.trim();!P||C[P]!==void 0||(s({env_vars:{...C,[P]:""}}),M(""))}function O(g,P){s({env_vars:{...C,[g]:P}})}function L(g){const P={...C};delete P[g],s({env_vars:P})}function B(g){H(P=>({...P,[g]:!P[g]}))}return o.jsxs("div",{className:"app-config",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("section",{className:"section",children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(Ij,{size:20}),"Basic Information"]})}),o.jsxs("div",{className:"form-grid",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"App Name"}),o.jsx("input",{type:"text",value:i.name,onChange:g=>a(g.target.value),style:{borderColor:n?"var(--error)":void 0}}),n&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:4},children:n})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Root Agent"}),o.jsxs("select",{value:i.root_agent_id||"",onChange:g=>s({root_agent_id:g.target.value||void 0}),children:[o.jsx("option",{value:"",children:"Select an agent..."}),e.agents.map(g=>o.jsx("option",{value:g.id,children:g.name},g.id))]})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(Gn,{size:20}),"Services"]}),o.jsx("span",{className:"section-hint",children:"Configure session, memory, and artifact storage backends"})]}),o.jsxs("div",{className:"form-grid",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Session Service"}),o.jsxs("select",{value:i.session_service_uri.split("://")[0],onChange:g=>{const P=g.target.value;s({session_service_uri:{memory:"memory://",file:"file://~/.adk-playground/sessions",sqlite:"sqlite://~/.adk-playground/sessions.db",postgresql:"postgresql://user:pass@localhost:5432/adk_sessions",mysql:"mysql://user:pass@localhost:3306/adk_sessions",agentengine:"agentengine://project/us-central1/engine-id"}[P]||P+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),o.jsx("option",{value:"file",children:"File System (JSON)"}),o.jsx("option",{value:"sqlite",children:"SQLite (local)"}),o.jsx("option",{value:"postgresql",children:"PostgreSQL"}),o.jsx("option",{value:"mysql",children:"MySQL"}),o.jsx("option",{value:"agentengine",children:"Vertex AI Agent Engine"})]}),i.session_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.session_service_uri.replace("file://",""),onChange:g=>s({session_service_uri:"file://"+g.target.value}),placeholder:"~/.adk-playground/sessions",style:{marginTop:8}}),i.session_service_uri.startsWith("sqlite://")&&o.jsx("input",{type:"text",value:i.session_service_uri.replace("sqlite://",""),onChange:g=>s({session_service_uri:"sqlite://"+g.target.value}),placeholder:"~/.adk-playground/sessions.db",style:{marginTop:8}}),(i.session_service_uri.startsWith("postgresql://")||i.session_service_uri.startsWith("mysql://"))&&o.jsx("input",{type:"text",value:i.session_service_uri,onChange:g=>s({session_service_uri:g.target.value}),placeholder:"postgresql://user:pass@localhost:5432/db",style:{marginTop:8}}),i.session_service_uri.startsWith("agentengine://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[2]||"",onChange:g=>{const P=i.session_service_uri.split("/");P[2]=g.target.value,s({session_service_uri:P.join("/")})},placeholder:"project-id"}),o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[3]||"",onChange:g=>{const P=i.session_service_uri.split("/");P[3]=g.target.value,s({session_service_uri:P.join("/")})},placeholder:"location (e.g., us-central1)"}),o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[4]||"",onChange:g=>{const P=i.session_service_uri.split("/");P[4]=g.target.value,s({session_service_uri:P.join("/")})},placeholder:"agent-engine-id"})]}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.session_service_uri.startsWith("memory://")&&"Sessions stored in memory, lost on restart",i.session_service_uri.startsWith("file://")&&"Sessions stored as JSON files, preserves UI events",i.session_service_uri.startsWith("sqlite://")&&"Persists to local SQLite file",i.session_service_uri.startsWith("postgresql://")&&"Production-ready PostgreSQL backend",i.session_service_uri.startsWith("mysql://")&&"Production-ready MySQL backend",i.session_service_uri.startsWith("agentengine://")&&"Vertex AI Agent Engine managed sessions"]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Memory Service"}),o.jsxs("select",{value:i.memory_service_uri.split("://")[0],onChange:g=>{const P=g.target.value;s({memory_service_uri:{memory:"memory://",file:"file://~/.adk-playground/memory",rag:"rag://rag-corpus-id",agentengine:"agentengine://project/us-central1/engine-id"}[P]||P+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (keyword matching)"}),o.jsx("option",{value:"file",children:"File System (keyword matching)"}),o.jsx("option",{value:"rag",children:"Vertex AI RAG"}),o.jsx("option",{value:"agentengine",children:"Vertex AI Memory Bank"})]}),i.memory_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.memory_service_uri.replace("file://",""),onChange:g=>s({memory_service_uri:"file://"+g.target.value}),placeholder:"~/.adk-playground/memory",style:{marginTop:8}}),i.memory_service_uri.startsWith("rag://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.memory_service_uri.replace("rag://",""),onChange:g=>s({memory_service_uri:"rag://"+g.target.value}),placeholder:"rag-corpus-id or full resource path"}),o.jsx("span",{className:"help-text",style:{fontSize:11,color:"var(--text-dim)"},children:"Format: projects/PROJECT/locations/LOCATION/ragCorpora/CORPUS_ID"})]}),i.memory_service_uri.startsWith("agentengine://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[2]||"",onChange:g=>{const P=i.memory_service_uri.split("/");P[2]=g.target.value,s({memory_service_uri:P.join("/")})},placeholder:"project-id"}),o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[3]||"",onChange:g=>{const P=i.memory_service_uri.split("/");P[3]=g.target.value,s({memory_service_uri:P.join("/")})},placeholder:"location (e.g., us-central1)"}),o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[4]||"",onChange:g=>{const P=i.memory_service_uri.split("/");P[4]=g.target.value,s({memory_service_uri:P.join("/")})},placeholder:"agent-engine-id"})]}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.memory_service_uri.startsWith("memory://")&&"Simple keyword matching, good for prototyping",i.memory_service_uri.startsWith("file://")&&"Persists memories as JSON files",i.memory_service_uri.startsWith("rag://")&&"Semantic search using Vertex AI RAG corpus",i.memory_service_uri.startsWith("agentengine://")&&"Managed memory via Agent Engine Memory Bank"]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Artifact Service"}),o.jsxs("select",{value:i.artifact_service_uri.split("://")[0]==="gs"?"gs":i.artifact_service_uri.split("://")[0],onChange:g=>{const P=g.target.value;s({artifact_service_uri:{memory:"memory://",file:"file://~/.adk-playground/artifacts",gs:"gs://your-bucket-name"}[P]||P+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),o.jsx("option",{value:"file",children:"File System"}),o.jsx("option",{value:"gs",children:"Google Cloud Storage"})]}),i.artifact_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.artifact_service_uri.replace("file://",""),onChange:g=>s({artifact_service_uri:"file://"+g.target.value}),placeholder:"~/.adk-playground/artifacts",style:{marginTop:8}}),i.artifact_service_uri.startsWith("gs://")&&o.jsx("input",{type:"text",value:i.artifact_service_uri.replace("gs://",""),onChange:g=>s({artifact_service_uri:"gs://"+g.target.value}),placeholder:"bucket-name/optional-prefix",style:{marginTop:8}}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.artifact_service_uri.startsWith("memory://")&&"Artifacts stored in memory, lost on restart",i.artifact_service_uri.startsWith("file://")&&"Persists to local filesystem",i.artifact_service_uri.startsWith("gs://")&&"Production-ready Google Cloud Storage backend"]})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(Cd,{size:20}),"Environment Variables"]})}),o.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginBottom:16},children:"Set API keys and other environment variables. These are passed to the agent runtime."}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16},children:Hj.filter(g=>C[g.key]===void 0).map(g=>o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>F(g.key),title:g.description,children:[o.jsx(it,{size:12}),g.key]},g.key))}),Object.keys(C).length===0?o.jsx("p",{className:"empty-message",children:"No environment variables set. Click a button above to add common variables, or add a custom one below."}):Object.entries(C).map(([g,P])=>o.jsxs("div",{className:"list-item",style:{alignItems:"center"},children:[o.jsxs("div",{style:{flex:1,display:"flex",gap:12,alignItems:"center"},children:[o.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:13,minWidth:200},children:g}),o.jsxs("div",{style:{flex:1,display:"flex",gap:8,alignItems:"center"},children:[o.jsx("input",{type:R[g]?"text":"password",value:P,onChange:z=>O(g,z.target.value),placeholder:"Enter value...",style:{flex:1}}),o.jsx("button",{className:"delete-item",onClick:()=>B(g),title:R[g]?"Hide value":"Show value",children:R[g]?o.jsx(Sj,{size:16}):o.jsx(Xr,{size:16})})]})]}),o.jsx("button",{className:"delete-item",onClick:()=>L(g),children:o.jsx(Je,{size:16})})]},g)),o.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[o.jsx("input",{type:"text",value:Q,onChange:g=>M(g.target.value.toUpperCase().replace(/[^A-Z0-9_]/g,"")),placeholder:"CUSTOM_VAR_NAME",style:{flex:1,fontFamily:"var(--font-mono)"},onKeyDown:g=>g.key==="Enter"&&F()}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>F(),disabled:!Q.trim(),children:[o.jsx(it,{size:14}),"Add Variable"]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(tf,{size:20}),"Models"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:_,children:[o.jsx(it,{size:14}),"Add Model"]})]}),T.length===0?o.jsx("p",{className:"empty-message",children:"No models configured. Add models that agents can use."}):T.map(g=>o.jsxs("div",{className:"model-card",children:[o.jsxs("div",{className:"model-card-header",children:[o.jsx("input",{type:"text",value:g.name,onChange:P=>A(g.id,{name:P.target.value}),placeholder:"Model name",className:"model-name-input"}),o.jsx("button",{className:`default-model-btn ${i.default_model_id===g.id?"is-default":""}`,onClick:()=>W(g.id),title:i.default_model_id===g.id?"Default model":"Set as default",children:o.jsx(u1,{size:14,fill:i.default_model_id===g.id?"currentColor":"none"})}),o.jsx("button",{className:"delete-item",onClick:()=>E(g.id),children:o.jsx(Je,{size:16})})]}),o.jsx("div",{className:"model-card-body",children:o.jsx(p1,{projectId:e.id,values:g,onChange:P=>A(g.id,P)})})]},g.id))]}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20},children:[o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(af,{size:20}),"Advanced Options"]})}),o.jsxs("div",{className:"toggle-group",children:[o.jsx("div",{className:`toggle ${i.compaction.enabled?"active":""}`,onClick:()=>s({compaction:{...i.compaction,enabled:!i.compaction.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Event Compaction"}),o.jsx("span",{children:"Summarize old events"})]}),i.compaction.enabled&&o.jsx("input",{type:"number",value:i.compaction.max_events,onChange:g=>s({compaction:{...i.compaction,max_events:parseInt(g.target.value)||100}}),style:{width:60,padding:"4px 6px",fontSize:12},placeholder:"Max"})]}),o.jsxs("div",{className:"toggle-group",style:{marginTop:10},children:[o.jsx("div",{className:`toggle ${i.context_cache.enabled?"active":""}`,onClick:()=>s({context_cache:{...i.context_cache,enabled:!i.context_cache.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Context Caching"}),o.jsx("span",{children:"Cache static instructions"})]}),i.context_cache.enabled&&o.jsx("input",{type:"number",value:i.context_cache.ttl_seconds,onChange:g=>s({context_cache:{...i.context_cache,ttl_seconds:parseInt(g.target.value)||3600}}),style:{width:70,padding:"4px 6px",fontSize:12},placeholder:"TTL"})]}),o.jsxs("div",{className:"toggle-group",style:{marginTop:10},children:[o.jsx("div",{className:`toggle ${i.resumability.enabled?"active":""}`,onClick:()=>s({resumability:{...i.resumability,enabled:!i.resumability.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Resumability"}),o.jsx("span",{children:"Pause/resume execution"})]})]})]}),o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx($t,{size:20}),"Plugins"]}),o.jsx("div",{className:"plugin-add-dropdown",children:o.jsxs("select",{className:"btn btn-secondary btn-sm",value:"",onChange:g=>{g.target.value&&(l(g.target.value),g.target.value="")},style:{paddingRight:8},children:[o.jsx("option",{value:"",children:"+ Add..."}),o.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),o.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),o.jsx("option",{value:"LoggingPlugin",children:"Logging"}),o.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),o.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),o.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]})})]}),i.plugins.length===0?o.jsx("p",{className:"empty-message",children:"No plugins configured."}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:i.plugins.map((g,P)=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,padding:"8px",background:"var(--bg-secondary)",borderRadius:4},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsxs("select",{value:g.type,onChange:z=>c(P,{type:z.target.value}),style:{flex:1,fontSize:12},children:[o.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),o.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),o.jsx("option",{value:"LoggingPlugin",children:"Logging"}),o.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),o.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),o.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]}),o.jsx("button",{className:"delete-item",onClick:()=>u(P),style:{padding:4,flexShrink:0},children:o.jsx(Je,{size:12})})]}),g.type==="ReflectAndRetryToolPlugin"&&o.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",fontSize:11},children:[o.jsx("span",{children:"Retries:"}),o.jsx("input",{type:"number",min:"0",max:"10",value:g.max_retries??3,onChange:z=>c(P,{max_retries:parseInt(z.target.value)||0}),style:{width:50,padding:"2px 4px",fontSize:11}})]}),g.type==="ContextFilterPlugin"&&o.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",fontSize:11},children:[o.jsx("span",{children:"Keep:"}),o.jsx("input",{type:"number",min:"1",max:"100",value:g.num_invocations_to_keep??5,onChange:z=>c(P,{num_invocations_to_keep:parseInt(z.target.value)||1}),style:{width:50,padding:"2px 4px",fontSize:11}}),o.jsx("span",{style:{color:"var(--text-muted)"},children:"invocations"})]}),g.type==="GlobalInstructionPlugin"&&o.jsx("textarea",{value:g.global_instruction??"",onChange:z=>c(P,{global_instruction:z.target.value}),placeholder:"Global instruction for all agents...",rows:2,style:{width:"100%",fontSize:11}})]},P))})]})]}),o.jsxs("section",{className:"section",children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(Zi,{size:20}),"Sandbox Limits"]})}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:12},children:[o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Run Timeout"}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("input",{type:"number",value:d.run_timeout,onChange:g=>h({run_timeout:parseInt(g.target.value)||3600}),min:60,max:86400,step:60,style:{width:100}}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)"},children:d.run_timeout>=3600?`${Math.floor(d.run_timeout/3600)}h ${Math.floor(d.run_timeout%3600/60)}m`:`${Math.floor(d.run_timeout/60)}m`})]}),o.jsx("p",{className:"field-hint",children:"Max time for agent run (seconds)"})]}),o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Agent Memory"}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("input",{type:"number",value:d.agent_memory_limit_mb,onChange:g=>h({agent_memory_limit_mb:parseInt(g.target.value)||512}),min:128,max:8192,step:128,style:{width:100}}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)"},children:"MB"})]}),o.jsx("p",{className:"field-hint",children:"Memory limit for agent container"})]}),o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Agent CPU"}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("input",{type:"number",value:d.agent_cpu_limit,onChange:g=>h({agent_cpu_limit:parseFloat(g.target.value)||1}),min:.25,max:8,step:.25,style:{width:100}}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)"},children:"cores"})]}),o.jsx("p",{className:"field-hint",children:"CPU limit for agent container"})]})]})]}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20},children:[o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(c1,{size:20}),"Network Allowlist"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:b,children:[o.jsx(it,{size:14}),"Add"]})]}),o.jsxs("div",{className:"toggle-group",style:{marginBottom:10},children:[o.jsx("div",{className:`toggle ${d.allow_all_network?"active":""}`,onClick:()=>h({allow_all_network:!d.allow_all_network,unknown_action:d.allow_all_network?d.unknown_action:"allow"})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Allow all network connections"}),o.jsx("span",{children:"Disables approval/deny; still routes through the sandbox proxy"})]})]}),p.length===0?o.jsx("p",{className:"empty-message",style:{fontSize:11},children:"No custom patterns. LLM APIs allowed by default."}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:p.map((g,P)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"6px 8px",background:"var(--bg-secondary)",borderRadius:4},children:[o.jsx(nf,{size:14,style:{color:"var(--text-muted)",flexShrink:0}}),o.jsx("input",{type:"text",value:g.pattern,onChange:z=>k(P,{pattern:z.target.value}),placeholder:"*.example.com",style:{flex:1,padding:"4px 6px",fontSize:11}}),o.jsxs("select",{value:g.pattern_type,onChange:z=>k(P,{pattern_type:z.target.value}),style:{padding:"4px",fontSize:10,width:70},children:[o.jsx("option",{value:"exact",children:"exact"}),o.jsx("option",{value:"wildcard",children:"wild"}),o.jsx("option",{value:"regex",children:"regex"})]}),o.jsx("button",{className:"delete-item",onClick:()=>x(P),style:{padding:4},children:o.jsx(Je,{size:12})})]},g.id||P))})]}),o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(zj,{size:20}),"File & Volume Mounts"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:y,children:[o.jsx(it,{size:14}),"Add"]})]}),o.jsx("p",{className:"field-hint",style:{fontSize:10,marginBottom:8},children:"Mount files or directories from host into the sandbox container."}),f.length===0?o.jsxs("p",{className:"empty-message",style:{fontSize:11},children:["No mounts. Example: ",o.jsx("code",{children:"~/.mcp.conf.yml"})," → ",o.jsx("code",{children:"/root/.mcp.conf.yml"})]}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:f.map((g,P)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"6px 8px",background:"var(--bg-secondary)",borderRadius:4},children:[o.jsx(r1,{size:14,style:{color:"var(--text-muted)",flexShrink:0}}),o.jsx("input",{type:"text",value:g.host_path,onChange:z=>v(P,{host_path:z.target.value}),placeholder:"~/.mcp.conf.yml",style:{flex:1,padding:"4px 6px",fontSize:11},title:"Host path (file or directory)"}),o.jsx("span",{style:{color:"var(--text-muted)",fontSize:10},children:"→"}),o.jsx("input",{type:"text",value:g.container_path,onChange:z=>v(P,{container_path:z.target.value}),placeholder:"/root/.mcp.conf.yml",style:{width:120,padding:"4px 6px",fontSize:11},title:"Container path"}),o.jsxs("select",{value:g.mode,onChange:z=>v(P,{mode:z.target.value}),style:{padding:"4px",fontSize:10,width:50},children:[o.jsx("option",{value:"ro",children:"ro"}),o.jsx("option",{value:"rw",children:"rw"})]}),o.jsx("button",{className:"delete-item",onClick:()=>j(P),style:{padding:4},children:o.jsx(Je,{size:12})})]},P))})]})]})]})}const Yj="modulepreload",Jj=function(e){return"/"+e},tg={},Gj=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=Jj(c),c in tg)return;tg[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":Yj,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((f,h)=>{p.addEventListener("load",f),p.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})};function ng(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Kj(e){if(Array.isArray(e))return e}function Qj(e,t,n){return(t=iS(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xj(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,s,a,l=[],c=!0,u=!1;try{if(s=(n=n.call(e)).next,t!==0)for(;!(c=(r=s.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(d){u=!0,i=d}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function Zj(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ig(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rg(Object(n),!0).forEach(function(r){Qj(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function eS(e,t){if(e==null)return{};var n,r,i=tS(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function tS(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function nS(e,t){return Kj(e)||Xj(e,t)||oS(e,t)||Zj()}function rS(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function iS(e){var t=rS(e,"string");return typeof t=="symbol"?t:t+""}function oS(e,t){if(e){if(typeof e=="string")return ng(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ng(e,t):void 0}}function sS(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function og(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function sg(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?og(Object(n),!0).forEach(function(r){sS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):og(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function aS(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,s){return s(i)},r)}}function Do(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function _l(e){return{}.toString.call(e).includes("Object")}function lS(e){return!Object.keys(e).length}function ks(e){return typeof e=="function"}function cS(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function uS(e,t){return _l(t)||_r("changeType"),Object.keys(t).some(function(n){return!cS(e,n)})&&_r("changeField"),t}function dS(e){ks(e)||_r("selectorType")}function pS(e){ks(e)||_l(e)||_r("handlerType"),_l(e)&&Object.values(e).some(function(t){return!ks(t)})&&_r("handlersType")}function fS(e){e||_r("initialIsRequired"),_l(e)||_r("initialType"),lS(e)&&_r("initialContent")}function hS(e,t){throw new Error(e[t]||e.default)}var mS={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},_r=Do(hS)(mS),fa={changes:uS,selector:dS,handler:pS,initial:fS};function gS(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};fa.initial(e),fa.handler(t);var n={current:e},r=Do(vS)(n,t),i=Do(yS)(n),s=Do(fa.changes)(e),a=Do(xS)(n);function l(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return fa.selector(u),u(n.current)}function c(u){aS(r,i,s,a)(u)}return[l,c]}function xS(e,t){return ks(t)?t(e.current):t}function yS(e,t){return e.current=sg(sg({},e.current),t),t}function vS(e,t,n){return ks(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var bS={create:gS},wS={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function kS(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function _S(e){return{}.toString.call(e).includes("Object")}function jS(e){return e||ag("configIsRequired"),_S(e)||ag("configType"),e.urls?(SS(),{paths:{vs:e.urls.monacoBase}}):e}function SS(){console.warn(f1.deprecation)}function CS(e,t){throw new Error(e[t]||e.default)}var f1={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},ag=kS(CS)(f1),NS={config:jS},ES=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(s,a){return a(s)},i)}};function h1(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],h1(e[n],t[n]))}),ig(ig({},e),t)}var zS={type:"cancelation",msg:"operation is manually canceled"};function Zc(e){var t=!1,n=new Promise(function(r,i){e.then(function(s){return t?i(zS):r(s)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var TS=["monaco"],MS=bS.create({config:wS,isInitialized:!1,resolve:null,reject:null,monaco:null}),m1=nS(MS,2),Os=m1[0],lc=m1[1];function AS(e){var t=NS.config(e),n=t.monaco,r=eS(t,TS);lc(function(i){return{config:h1(i.config,r),monaco:n}})}function LS(){var e=Os(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(lc({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),Zc(eu);if(window.monaco&&window.monaco.editor)return g1(window.monaco),e.resolve(window.monaco),Zc(eu);ES(PS,IS)(OS)}return Zc(eu)}function PS(e){return document.body.appendChild(e)}function RS(e){var t=document.createElement("script");return e&&(t.src=e),t}function IS(e){var t=Os(function(r){var i=r.config,s=r.reject;return{config:i,reject:s}}),n=RS("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function OS(){var e=Os(function(n){var r=n.config,i=n.resolve,s=n.reject;return{config:r,resolve:i,reject:s}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;g1(r),e.resolve(r)},function(n){e.reject(n)})}function g1(e){Os().monaco||lc({monaco:e})}function $S(){return Os(function(e){var t=e.monaco;return t})}var eu=new Promise(function(e,t){return lc({resolve:e,reject:t})}),x1={config:AS,init:LS,__getMonacoInstance:$S},DS={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},tu=DS,FS={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},BS=FS;function US({children:e}){return Xt.createElement("div",{style:BS.container},e)}var WS=US,HS=WS;function VS({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:s,wrapperProps:a}){return Xt.createElement("section",{style:{...tu.wrapper,width:e,height:t},...a},!n&&Xt.createElement(HS,null,r),Xt.createElement("div",{ref:i,style:{...tu.fullWidth,...!n&&tu.hide},className:s}))}var qS=VS,y1=w.memo(qS);function YS(e){w.useEffect(e,[])}var v1=YS;function JS(e,t,n=!0){let r=w.useRef(!0);w.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var Gt=JS;function Xo(){}function Ti(e,t,n,r){return GS(e,r)||KS(e,t,n,r)}function GS(e,t){return e.editor.getModel(b1(e,t))}function KS(e,t,n,r){return e.editor.createModel(t,n,r?b1(e,r):void 0)}function b1(e,t){return e.Uri.parse(t)}function QS({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:s,modifiedModelPath:a,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:c=!1,theme:u="light",loading:d="Loading...",options:p={},height:f="100%",width:h="100%",className:m,wrapperProps:b={},beforeMount:k=Xo,onMount:x=Xo}){let[y,v]=w.useState(!1),[j,T]=w.useState(!0),_=w.useRef(null),A=w.useRef(null),E=w.useRef(null),W=w.useRef(x),C=w.useRef(k),R=w.useRef(!1);v1(()=>{let F=x1.init();return F.then(O=>(A.current=O)&&T(!1)).catch(O=>(O==null?void 0:O.type)!=="cancelation"&&console.error("Monaco initialization: error:",O)),()=>_.current?M():F.cancel()}),Gt(()=>{if(_.current&&A.current){let F=_.current.getOriginalEditor(),O=Ti(A.current,e||"",r||n||"text",s||"");O!==F.getModel()&&F.setModel(O)}},[s],y),Gt(()=>{if(_.current&&A.current){let F=_.current.getModifiedEditor(),O=Ti(A.current,t||"",i||n||"text",a||"");O!==F.getModel()&&F.setModel(O)}},[a],y),Gt(()=>{let F=_.current.getModifiedEditor();F.getOption(A.current.editor.EditorOption.readOnly)?F.setValue(t||""):t!==F.getValue()&&(F.executeEdits("",[{range:F.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),F.pushUndoStop())},[t],y),Gt(()=>{var F,O;(O=(F=_.current)==null?void 0:F.getModel())==null||O.original.setValue(e||"")},[e],y),Gt(()=>{let{original:F,modified:O}=_.current.getModel();A.current.editor.setModelLanguage(F,r||n||"text"),A.current.editor.setModelLanguage(O,i||n||"text")},[n,r,i],y),Gt(()=>{var F;(F=A.current)==null||F.editor.setTheme(u)},[u],y),Gt(()=>{var F;(F=_.current)==null||F.updateOptions(p)},[p],y);let H=w.useCallback(()=>{var L;if(!A.current)return;C.current(A.current);let F=Ti(A.current,e||"",r||n||"text",s||""),O=Ti(A.current,t||"",i||n||"text",a||"");(L=_.current)==null||L.setModel({original:F,modified:O})},[n,t,i,e,r,s,a]),Q=w.useCallback(()=>{var F;!R.current&&E.current&&(_.current=A.current.editor.createDiffEditor(E.current,{automaticLayout:!0,...p}),H(),(F=A.current)==null||F.editor.setTheme(u),v(!0),R.current=!0)},[p,u,H]);w.useEffect(()=>{y&&W.current(_.current,A.current)},[y]),w.useEffect(()=>{!j&&!y&&Q()},[j,y,Q]);function M(){var O,L,B,$;let F=(O=_.current)==null?void 0:O.getModel();l||((L=F==null?void 0:F.original)==null||L.dispose()),c||((B=F==null?void 0:F.modified)==null||B.dispose()),($=_.current)==null||$.dispose()}return Xt.createElement(y1,{width:h,height:f,isEditorReady:y,loading:d,_ref:E,className:m,wrapperProps:b})}var XS=QS;w.memo(XS);function ZS(e){let t=w.useRef();return w.useEffect(()=>{t.current=e},[e]),t.current}var eC=ZS,ha=new Map;function tC({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:s,theme:a="light",line:l,loading:c="Loading...",options:u={},overrideServices:d={},saveViewState:p=!0,keepCurrentModel:f=!1,width:h="100%",height:m="100%",className:b,wrapperProps:k={},beforeMount:x=Xo,onMount:y=Xo,onChange:v,onValidate:j=Xo}){let[T,_]=w.useState(!1),[A,E]=w.useState(!0),W=w.useRef(null),C=w.useRef(null),R=w.useRef(null),H=w.useRef(y),Q=w.useRef(x),M=w.useRef(),F=w.useRef(r),O=eC(s),L=w.useRef(!1),B=w.useRef(!1);v1(()=>{let P=x1.init();return P.then(z=>(W.current=z)&&E(!1)).catch(z=>(z==null?void 0:z.type)!=="cancelation"&&console.error("Monaco initialization: error:",z)),()=>C.current?g():P.cancel()}),Gt(()=>{var z,S,D,Z;let P=Ti(W.current,e||r||"",t||i||"",s||n||"");P!==((z=C.current)==null?void 0:z.getModel())&&(p&&ha.set(O,(S=C.current)==null?void 0:S.saveViewState()),(D=C.current)==null||D.setModel(P),p&&((Z=C.current)==null||Z.restoreViewState(ha.get(s))))},[s],T),Gt(()=>{var P;(P=C.current)==null||P.updateOptions(u)},[u],T),Gt(()=>{!C.current||r===void 0||(C.current.getOption(W.current.editor.EditorOption.readOnly)?C.current.setValue(r):r!==C.current.getValue()&&(B.current=!0,C.current.executeEdits("",[{range:C.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),C.current.pushUndoStop(),B.current=!1))},[r],T),Gt(()=>{var z,S;let P=(z=C.current)==null?void 0:z.getModel();P&&i&&((S=W.current)==null||S.editor.setModelLanguage(P,i))},[i],T),Gt(()=>{var P;l!==void 0&&((P=C.current)==null||P.revealLine(l))},[l],T),Gt(()=>{var P;(P=W.current)==null||P.editor.setTheme(a)},[a],T);let $=w.useCallback(()=>{var P;if(!(!R.current||!W.current)&&!L.current){Q.current(W.current);let z=s||n,S=Ti(W.current,r||e||"",t||i||"",z||"");C.current=(P=W.current)==null?void 0:P.editor.create(R.current,{model:S,automaticLayout:!0,...u},d),p&&C.current.restoreViewState(ha.get(z)),W.current.editor.setTheme(a),l!==void 0&&C.current.revealLine(l),_(!0),L.current=!0}},[e,t,n,r,i,s,u,d,p,a,l]);w.useEffect(()=>{T&&H.current(C.current,W.current)},[T]),w.useEffect(()=>{!A&&!T&&$()},[A,T,$]),F.current=r,w.useEffect(()=>{var P,z;T&&v&&((P=M.current)==null||P.dispose(),M.current=(z=C.current)==null?void 0:z.onDidChangeModelContent(S=>{B.current||v(C.current.getValue(),S)}))},[T,v]),w.useEffect(()=>{if(T){let P=W.current.editor.onDidChangeMarkers(z=>{var D;let S=(D=C.current.getModel())==null?void 0:D.uri;if(S&&z.find(Z=>Z.path===S.path)){let Z=W.current.editor.getModelMarkers({resource:S});j==null||j(Z)}});return()=>{P==null||P.dispose()}}return()=>{}},[T,j]);function g(){var P,z;(P=M.current)==null||P.dispose(),f?p&&ha.set(s,C.current.saveViewState()):(z=C.current.getModel())==null||z.dispose(),C.current.dispose()}return Xt.createElement(y1,{width:h,height:m,isEditorReady:T,loading:c,_ref:R,className:b,wrapperProps:k})}var nC=tC,rC=w.memo(nC),cn=rC;function iC(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const oC=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,sC=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,aC={};function lg(e,t){return(aC.jsx?sC:oC).test(e)}const lC=/[ \t\n\f\r]/g;function cC(e){return typeof e=="object"?e.type==="text"?cg(e.value):!1:cg(e)}function cg(e){return e.replace(lC,"")===""}class $s{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}$s.prototype.normal={};$s.prototype.property={};$s.prototype.space=void 0;function w1(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new $s(n,r,t)}function Ed(e){return e.toLowerCase()}class Ht{constructor(t,n){this.attribute=n,this.property=t}}Ht.prototype.attribute="";Ht.prototype.booleanish=!1;Ht.prototype.boolean=!1;Ht.prototype.commaOrSpaceSeparated=!1;Ht.prototype.commaSeparated=!1;Ht.prototype.defined=!1;Ht.prototype.mustUseProperty=!1;Ht.prototype.number=!1;Ht.prototype.overloadedBoolean=!1;Ht.prototype.property="";Ht.prototype.spaceSeparated=!1;Ht.prototype.space=void 0;let uC=0;const Te=oi(),nt=oi(),zd=oi(),de=oi(),Ue=oi(),Fi=oi(),Yt=oi();function oi(){return 2**++uC}const Td=Object.freeze(Object.defineProperty({__proto__:null,boolean:Te,booleanish:nt,commaOrSpaceSeparated:Yt,commaSeparated:Fi,number:de,overloadedBoolean:zd,spaceSeparated:Ue},Symbol.toStringTag,{value:"Module"})),nu=Object.keys(Td);class lf extends Ht{constructor(t,n,r,i){let s=-1;if(super(t,n),ug(this,"space",i),typeof r=="number")for(;++s<nu.length;){const a=nu[s];ug(this,nu[s],(r&Td[a])===Td[a])}}}lf.prototype.defined=!0;function ug(e,t,n){n&&(e[t]=n)}function po(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const s=new lf(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(s.mustUseProperty=!0),t[r]=s,n[Ed(r)]=r,n[Ed(s.attribute)]=r}return new $s(t,n,e.space)}const k1=po({properties:{ariaActiveDescendant:null,ariaAtomic:nt,ariaAutoComplete:null,ariaBusy:nt,ariaChecked:nt,ariaColCount:de,ariaColIndex:de,ariaColSpan:de,ariaControls:Ue,ariaCurrent:null,ariaDescribedBy:Ue,ariaDetails:null,ariaDisabled:nt,ariaDropEffect:Ue,ariaErrorMessage:null,ariaExpanded:nt,ariaFlowTo:Ue,ariaGrabbed:nt,ariaHasPopup:null,ariaHidden:nt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ue,ariaLevel:de,ariaLive:null,ariaModal:nt,ariaMultiLine:nt,ariaMultiSelectable:nt,ariaOrientation:null,ariaOwns:Ue,ariaPlaceholder:null,ariaPosInSet:de,ariaPressed:nt,ariaReadOnly:nt,ariaRelevant:null,ariaRequired:nt,ariaRoleDescription:Ue,ariaRowCount:de,ariaRowIndex:de,ariaRowSpan:de,ariaSelected:nt,ariaSetSize:de,ariaSort:null,ariaValueMax:de,ariaValueMin:de,ariaValueNow:de,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function _1(e,t){return t in e?e[t]:t}function j1(e,t){return _1(e,t.toLowerCase())}const dC=po({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Fi,acceptCharset:Ue,accessKey:Ue,action:null,allow:null,allowFullScreen:Te,allowPaymentRequest:Te,allowUserMedia:Te,alt:null,as:null,async:Te,autoCapitalize:null,autoComplete:Ue,autoFocus:Te,autoPlay:Te,blocking:Ue,capture:null,charSet:null,checked:Te,cite:null,className:Ue,cols:de,colSpan:null,content:null,contentEditable:nt,controls:Te,controlsList:Ue,coords:de|Fi,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Te,defer:Te,dir:null,dirName:null,disabled:Te,download:zd,draggable:nt,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Te,formTarget:null,headers:Ue,height:de,hidden:zd,high:de,href:null,hrefLang:null,htmlFor:Ue,httpEquiv:Ue,id:null,imageSizes:null,imageSrcSet:null,inert:Te,inputMode:null,integrity:null,is:null,isMap:Te,itemId:null,itemProp:Ue,itemRef:Ue,itemScope:Te,itemType:Ue,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Te,low:de,manifest:null,max:null,maxLength:de,media:null,method:null,min:null,minLength:de,multiple:Te,muted:Te,name:null,nonce:null,noModule:Te,noValidate:Te,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Te,optimum:de,pattern:null,ping:Ue,placeholder:null,playsInline:Te,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Te,referrerPolicy:null,rel:Ue,required:Te,reversed:Te,rows:de,rowSpan:de,sandbox:Ue,scope:null,scoped:Te,seamless:Te,selected:Te,shadowRootClonable:Te,shadowRootDelegatesFocus:Te,shadowRootMode:null,shape:null,size:de,sizes:null,slot:null,span:de,spellCheck:nt,src:null,srcDoc:null,srcLang:null,srcSet:null,start:de,step:null,style:null,tabIndex:de,target:null,title:null,translate:null,type:null,typeMustMatch:Te,useMap:null,value:nt,width:de,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Ue,axis:null,background:null,bgColor:null,border:de,borderColor:null,bottomMargin:de,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Te,declare:Te,event:null,face:null,frame:null,frameBorder:null,hSpace:de,leftMargin:de,link:null,longDesc:null,lowSrc:null,marginHeight:de,marginWidth:de,noResize:Te,noHref:Te,noShade:Te,noWrap:Te,object:null,profile:null,prompt:null,rev:null,rightMargin:de,rules:null,scheme:null,scrolling:nt,standby:null,summary:null,text:null,topMargin:de,valueType:null,version:null,vAlign:null,vLink:null,vSpace:de,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Te,disableRemotePlayback:Te,prefix:null,property:null,results:de,security:null,unselectable:null},space:"html",transform:j1}),pC=po({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Yt,accentHeight:de,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:de,amplitude:de,arabicForm:null,ascent:de,attributeName:null,attributeType:null,azimuth:de,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:de,by:null,calcMode:null,capHeight:de,className:Ue,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:de,diffuseConstant:de,direction:null,display:null,dur:null,divisor:de,dominantBaseline:null,download:Te,dx:null,dy:null,edgeMode:null,editable:null,elevation:de,enableBackground:null,end:null,event:null,exponent:de,externalResourcesRequired:null,fill:null,fillOpacity:de,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Fi,g2:Fi,glyphName:Fi,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:de,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:de,horizOriginX:de,horizOriginY:de,id:null,ideographic:de,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:de,k:de,k1:de,k2:de,k3:de,k4:de,kernelMatrix:Yt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:de,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:de,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:de,overlineThickness:de,paintOrder:null,panose1:null,path:null,pathLength:de,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Ue,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:de,pointsAtY:de,pointsAtZ:de,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Yt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Yt,rev:Yt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Yt,requiredFeatures:Yt,requiredFonts:Yt,requiredFormats:Yt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:de,specularExponent:de,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:de,strikethroughThickness:de,string:null,stroke:null,strokeDashArray:Yt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:de,strokeOpacity:de,strokeWidth:null,style:null,surfaceScale:de,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Yt,tabIndex:de,tableValues:null,target:null,targetX:de,targetY:de,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Yt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:de,underlineThickness:de,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:de,values:null,vAlphabetic:de,vMathematical:de,vectorEffect:null,vHanging:de,vIdeographic:de,version:null,vertAdvY:de,vertOriginX:de,vertOriginY:de,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:de,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:_1}),S1=po({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),C1=po({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:j1}),N1=po({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),fC={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},hC=/[A-Z]/g,dg=/-[a-z]/g,mC=/^data[-\w.:]+$/i;function gC(e,t){const n=Ed(t);let r=t,i=Ht;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&mC.test(t)){if(t.charAt(4)==="-"){const s=t.slice(5).replace(dg,yC);r="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=t.slice(4);if(!dg.test(s)){let a=s.replace(hC,xC);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a}}i=lf}return new i(r,t)}function xC(e){return"-"+e.toLowerCase()}function yC(e){return e.charAt(1).toUpperCase()}const vC=w1([k1,dC,S1,C1,N1],"html"),cf=w1([k1,pC,S1,C1,N1],"svg");function bC(e){return e.join(" ").trim()}var uf={},pg=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,wC=/\n/g,kC=/^\s*/,_C=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,jC=/^:\s*/,SC=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,CC=/^[;\s]*/,NC=/^\s+|\s+$/g,EC=`
`,fg="/",hg="*",Ir="",zC="comment",TC="declaration";function MC(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(m){var b=m.match(wC);b&&(n+=b.length);var k=m.lastIndexOf(EC);r=~k?m.length-k:r+m.length}function s(){var m={line:n,column:r};return function(b){return b.position=new a(m),u(),b}}function a(m){this.start=m,this.end={line:n,column:r},this.source=t.source}a.prototype.content=e;function l(m){var b=new Error(t.source+":"+n+":"+r+": "+m);if(b.reason=m,b.filename=t.source,b.line=n,b.column=r,b.source=e,!t.silent)throw b}function c(m){var b=m.exec(e);if(b){var k=b[0];return i(k),e=e.slice(k.length),b}}function u(){c(kC)}function d(m){var b;for(m=m||[];b=p();)b!==!1&&m.push(b);return m}function p(){var m=s();if(!(fg!=e.charAt(0)||hg!=e.charAt(1))){for(var b=2;Ir!=e.charAt(b)&&(hg!=e.charAt(b)||fg!=e.charAt(b+1));)++b;if(b+=2,Ir===e.charAt(b-1))return l("End of comment missing");var k=e.slice(2,b-2);return r+=2,i(k),e=e.slice(b),r+=2,m({type:zC,comment:k})}}function f(){var m=s(),b=c(_C);if(b){if(p(),!c(jC))return l("property missing ':'");var k=c(SC),x=m({type:TC,property:mg(b[0].replace(pg,Ir)),value:k?mg(k[0].replace(pg,Ir)):Ir});return c(CC),x}}function h(){var m=[];d(m);for(var b;b=f();)b!==!1&&(m.push(b),d(m));return m}return u(),h()}function mg(e){return e?e.replace(NC,Ir):Ir}var AC=MC,LC=Ja&&Ja.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(uf,"__esModule",{value:!0});uf.default=RC;const PC=LC(AC);function RC(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,PC.default)(e),i=typeof t=="function";return r.forEach(s=>{if(s.type!=="declaration")return;const{property:a,value:l}=s;i?t(a,l,s):l&&(n=n||{},n[a]=l)}),n}var cc={};Object.defineProperty(cc,"__esModule",{value:!0});cc.camelCase=void 0;var IC=/^--[a-zA-Z0-9_-]+$/,OC=/-([a-z])/g,$C=/^[^-]+$/,DC=/^-(webkit|moz|ms|o|khtml)-/,FC=/^-(ms)-/,BC=function(e){return!e||$C.test(e)||IC.test(e)},UC=function(e,t){return t.toUpperCase()},gg=function(e,t){return"".concat(t,"-")},WC=function(e,t){return t===void 0&&(t={}),BC(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(FC,gg):e=e.replace(DC,gg),e.replace(OC,UC))};cc.camelCase=WC;var HC=Ja&&Ja.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},VC=HC(uf),qC=cc;function Md(e,t){var n={};return!e||typeof e!="string"||(0,VC.default)(e,function(r,i){r&&i&&(n[(0,qC.camelCase)(r,t)]=i)}),n}Md.default=Md;var YC=Md;const JC=Ul(YC),E1=z1("end"),df=z1("start");function z1(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function GC(e){const t=df(e),n=E1(e);if(t&&n)return{start:t,end:n}}function Zo(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?xg(e.position):"start"in e||"end"in e?xg(e):"line"in e||"column"in e?Ad(e):""}function Ad(e){return yg(e&&e.line)+":"+yg(e&&e.column)}function xg(e){return Ad(e&&e.start)+"-"+Ad(e&&e.end)}function yg(e){return e&&typeof e=="number"?e:1}class Ct extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",s={},a=!1;if(n&&("line"in n&&"column"in n?s={place:n}:"start"in n&&"end"in n?s={place:n}:"type"in n?s={ancestors:[n],place:n.position}:s={...n}),typeof t=="string"?i=t:!s.cause&&t&&(a=!0,i=t.message,s.cause=t),!s.ruleId&&!s.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?s.ruleId=r:(s.source=r.slice(0,c),s.ruleId=r.slice(c+1))}if(!s.place&&s.ancestors&&s.ancestors){const c=s.ancestors[s.ancestors.length-1];c&&(s.place=c.position)}const l=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=Zo(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=a&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Ct.prototype.file="";Ct.prototype.name="";Ct.prototype.reason="";Ct.prototype.message="";Ct.prototype.stack="";Ct.prototype.column=void 0;Ct.prototype.line=void 0;Ct.prototype.ancestors=void 0;Ct.prototype.cause=void 0;Ct.prototype.fatal=void 0;Ct.prototype.place=void 0;Ct.prototype.ruleId=void 0;Ct.prototype.source=void 0;const pf={}.hasOwnProperty,KC=new Map,QC=/[A-Z]/g,XC=new Set(["table","tbody","thead","tfoot","tr"]),ZC=new Set(["td","th"]),T1="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function eN(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=lN(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=aN(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?cf:vC,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},s=M1(i,e,void 0);return s&&typeof s!="string"?s:i.create(e,i.Fragment,{children:s||void 0},void 0)}function M1(e,t,n){if(t.type==="element")return tN(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return nN(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return iN(e,t,n);if(t.type==="mdxjsEsm")return rN(e,t);if(t.type==="root")return oN(e,t,n);if(t.type==="text")return sN(e,t)}function tN(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=cf,e.schema=i),e.ancestors.push(t);const s=L1(e,t.tagName,!1),a=cN(e,t);let l=hf(e,t);return XC.has(t.tagName)&&(l=l.filter(function(c){return typeof c=="string"?!cC(c):!0})),A1(e,a,s,t),ff(a,l),e.ancestors.pop(),e.schema=r,e.create(t,s,a,n)}function nN(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}_s(e,t.position)}function rN(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);_s(e,t.position)}function iN(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=cf,e.schema=i),e.ancestors.push(t);const s=t.name===null?e.Fragment:L1(e,t.name,!0),a=uN(e,t),l=hf(e,t);return A1(e,a,s,t),ff(a,l),e.ancestors.pop(),e.schema=r,e.create(t,s,a,n)}function oN(e,t,n){const r={};return ff(r,hf(e,t)),e.create(t,e.Fragment,r,n)}function sN(e,t){return t.value}function A1(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function ff(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function aN(e,t,n){return r;function r(i,s,a,l){const u=Array.isArray(a.children)?n:t;return l?u(s,a,l):u(s,a)}}function lN(e,t){return n;function n(r,i,s,a){const l=Array.isArray(s.children),c=df(r);return t(i,s,a,l,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function cN(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&pf.call(t.properties,i)){const s=dN(e,i,t.properties[i]);if(s){const[a,l]=s;e.tableCellAlignToStyle&&a==="align"&&typeof l=="string"&&ZC.has(t.tagName)?r=l:n[a]=l}}if(r){const s=n.style||(n.style={});s[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function uN(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const s=r.data.estree.body[0];s.type;const a=s.expression;a.type;const l=a.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument))}else _s(e,t.position);else{const i=r.name;let s;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const l=r.value.data.estree.body[0];l.type,s=e.evaluater.evaluateExpression(l.expression)}else _s(e,t.position);else s=r.value===null?!0:r.value;n[i]=s}return n}function hf(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:KC;for(;++r<t.children.length;){const s=t.children[r];let a;if(e.passKeys){const c=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(c){const u=i.get(c)||0;a=c+"-"+u,i.set(c,u+1)}}const l=M1(e,s,a);l!==void 0&&n.push(l)}return n}function dN(e,t,n){const r=gC(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?iC(n):bC(n)),r.property==="style"){let i=typeof n=="object"?n:pN(e,String(n));return e.stylePropertyNameCase==="css"&&(i=fN(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?fC[r.property]||r.property:r.attribute,n]}}function pN(e,t){try{return JC(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new Ct("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=T1+"#cannot-parse-style-attribute",i}}function L1(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let s=-1,a;for(;++s<i.length;){const l=lg(i[s])?{type:"Identifier",name:i[s]}:{type:"Literal",value:i[s]};a=a?{type:"MemberExpression",object:a,property:l,computed:!!(s&&l.type==="Literal"),optional:!1}:l}r=a}else r=lg(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return pf.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);_s(e)}function _s(e,t){const n=new Ct("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=T1+"#cannot-handle-mdx-estrees-without-createevaluater",n}function fN(e){const t={};let n;for(n in e)pf.call(e,n)&&(t[hN(n)]=e[n]);return t}function hN(e){let t=e.replace(QC,mN);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function mN(e){return"-"+e.toLowerCase()}const ru={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},gN={};function xN(e,t){const n=gN,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return P1(e,r,i)}function P1(e,t,n){if(yN(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return vg(e.children,t,n)}return Array.isArray(e)?vg(e,t,n):""}function vg(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=P1(e[i],t,n);return r.join("")}function yN(e){return!!(e&&typeof e=="object")}const bg=document.createElement("i");function mf(e){const t="&"+e+";";bg.innerHTML=t;const n=bg.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function In(e,t,n,r){const i=e.length;let s=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);s<r.length;)a=r.slice(s,s+1e4),a.unshift(t,0),e.splice(...a),s+=1e4,t+=1e4}function an(e,t){return e.length>0?(In(e,e.length,0,t),e):t}const wg={}.hasOwnProperty;function vN(e){const t={};let n=-1;for(;++n<e.length;)bN(t,e[n]);return t}function bN(e,t){let n;for(n in t){const i=(wg.call(e,n)?e[n]:void 0)||(e[n]={}),s=t[n];let a;if(s)for(a in s){wg.call(i,a)||(i[a]=[]);const l=s[a];wN(i[a],Array.isArray(l)?l:l?[l]:[])}}}function wN(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);In(e,0,0,r)}function R1(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Bi(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Tn=Ar(/[A-Za-z]/),Qt=Ar(/[\dA-Za-z]/),kN=Ar(/[#-'*+\--9=?A-Z^-~]/);function Ld(e){return e!==null&&(e<32||e===127)}const Pd=Ar(/\d/),_N=Ar(/[\dA-Fa-f]/),jN=Ar(/[!-/:-@[-`{-~]/);function Ce(e){return e!==null&&e<-2}function Wt(e){return e!==null&&(e<0||e===32)}function $e(e){return e===-2||e===-1||e===32}const SN=Ar(new RegExp("\\p{P}|\\p{S}","u")),CN=Ar(/\s/);function Ar(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function fo(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const s=e.charCodeAt(n);let a="";if(s===37&&Qt(e.charCodeAt(n+1))&&Qt(e.charCodeAt(n+2)))i=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(a=String.fromCharCode(s));else if(s>55295&&s<57344){const l=e.charCodeAt(n+1);s<56320&&l>56319&&l<57344?(a=String.fromCharCode(s,l),i=1):a="�"}else a=String.fromCharCode(s);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function He(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let s=0;return a;function a(c){return $e(c)?(e.enter(n),l(c)):t(c)}function l(c){return $e(c)&&s++<i?(e.consume(c),l):(e.exit(n),t(c))}}const NN={tokenize:EN};function EN(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),He(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),s(l)}function s(l){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,a(l)}function a(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return Ce(l)?(e.consume(l),e.exit("chunkText"),s):(e.consume(l),a)}}const zN={tokenize:TN},kg={tokenize:MN};function TN(e){const t=this,n=[];let r=0,i,s,a;return l;function l(v){if(r<n.length){const j=n[r];return t.containerState=j[1],e.attempt(j[0].continuation,c,u)(v)}return u(v)}function c(v){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&y();const j=t.events.length;let T=j,_;for(;T--;)if(t.events[T][0]==="exit"&&t.events[T][1].type==="chunkFlow"){_=t.events[T][1].end;break}x(r);let A=j;for(;A<t.events.length;)t.events[A][1].end={..._},A++;return In(t.events,T+1,0,t.events.slice(j)),t.events.length=A,u(v)}return l(v)}function u(v){if(r===n.length){if(!i)return f(v);if(i.currentConstruct&&i.currentConstruct.concrete)return m(v);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(kg,d,p)(v)}function d(v){return i&&y(),x(r),f(v)}function p(v){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,m(v)}function f(v){return t.containerState={},e.attempt(kg,h,m)(v)}function h(v){return r++,n.push([t.currentConstruct,t.containerState]),f(v)}function m(v){if(v===null){i&&y(),x(0),e.consume(v);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:s}),b(v)}function b(v){if(v===null){k(e.exit("chunkFlow"),!0),x(0),e.consume(v);return}return Ce(v)?(e.consume(v),k(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(v),b)}function k(v,j){const T=t.sliceStream(v);if(j&&T.push(null),v.previous=s,s&&(s.next=v),s=v,i.defineSkip(v.start),i.write(T),t.parser.lazy[v.start.line]){let _=i.events.length;for(;_--;)if(i.events[_][1].start.offset<a&&(!i.events[_][1].end||i.events[_][1].end.offset>a))return;const A=t.events.length;let E=A,W,C;for(;E--;)if(t.events[E][0]==="exit"&&t.events[E][1].type==="chunkFlow"){if(W){C=t.events[E][1].end;break}W=!0}for(x(r),_=A;_<t.events.length;)t.events[_][1].end={...C},_++;In(t.events,E+1,0,t.events.slice(A)),t.events.length=_}}function x(v){let j=n.length;for(;j-- >v;){const T=n[j];t.containerState=T[1],T[0].exit.call(t,e)}n.length=v}function y(){i.write([null]),s=void 0,i=void 0,t.containerState._closeFlow=void 0}}function MN(e,t,n){return He(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function _g(e){if(e===null||Wt(e)||CN(e))return 1;if(SN(e))return 2}function gf(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const s=e[i].resolveAll;s&&!r.includes(s)&&(t=s(t,n),r.push(s))}return t}const Rd={name:"attention",resolveAll:AN,tokenize:LN};function AN(e,t){let n=-1,r,i,s,a,l,c,u,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p={...e[r][1].end},f={...e[n][1].start};jg(p,-c),jg(f,c),a={type:c>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},l={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},s={type:c>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?"strong":"emphasis",start:{...a.start},end:{...l.end}},e[r][1].end={...a.start},e[n][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=an(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=an(u,[["enter",i,t],["enter",a,t],["exit",a,t],["enter",s,t]]),u=an(u,gf(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=an(u,[["exit",s,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,u=an(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,In(e,r-1,n-r+3,u),n=r+u.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function LN(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=_g(r);let s;return a;function a(c){return s=c,e.enter("attentionSequence"),l(c)}function l(c){if(c===s)return e.consume(c),l;const u=e.exit("attentionSequence"),d=_g(c),p=!d||d===2&&i||n.includes(c),f=!i||i===2&&d||n.includes(r);return u._open=!!(s===42?p:p&&(i||!f)),u._close=!!(s===42?f:f&&(d||!p)),t(c)}}function jg(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const PN={name:"autolink",tokenize:RN};function RN(e,t,n){let r=0;return i;function i(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),s}function s(h){return Tn(h)?(e.consume(h),a):h===64?n(h):u(h)}function a(h){return h===43||h===45||h===46||Qt(h)?(r=1,l(h)):u(h)}function l(h){return h===58?(e.consume(h),r=0,c):(h===43||h===45||h===46||Qt(h))&&r++<32?(e.consume(h),l):(r=0,u(h))}function c(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):h===null||h===32||h===60||Ld(h)?n(h):(e.consume(h),c)}function u(h){return h===64?(e.consume(h),d):kN(h)?(e.consume(h),u):n(h)}function d(h){return Qt(h)?p(h):n(h)}function p(h){return h===46?(e.consume(h),r=0,d):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):f(h)}function f(h){if((h===45||Qt(h))&&r++<63){const m=h===45?f:p;return e.consume(h),m}return n(h)}}const uc={partial:!0,tokenize:IN};function IN(e,t,n){return r;function r(s){return $e(s)?He(e,i,"linePrefix")(s):i(s)}function i(s){return s===null||Ce(s)?t(s):n(s)}}const I1={continuation:{tokenize:$N},exit:DN,name:"blockQuote",tokenize:ON};function ON(e,t,n){const r=this;return i;function i(a){if(a===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),s}return n(a)}function s(a){return $e(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function $N(e,t,n){const r=this;return i;function i(a){return $e(a)?He(e,s,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):s(a)}function s(a){return e.attempt(I1,t,n)(a)}}function DN(e){e.exit("blockQuote")}const O1={name:"characterEscape",tokenize:FN};function FN(e,t,n){return r;function r(s){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(s),e.exit("escapeMarker"),i}function i(s){return jN(s)?(e.enter("characterEscapeValue"),e.consume(s),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(s)}}const $1={name:"characterReference",tokenize:BN};function BN(e,t,n){const r=this;let i=0,s,a;return l;function l(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),c}function c(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),s=31,a=Qt,d(p))}function u(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),s=6,a=_N,d):(e.enter("characterReferenceValue"),s=7,a=Pd,d(p))}function d(p){if(p===59&&i){const f=e.exit("characterReferenceValue");return a===Qt&&!mf(r.sliceSerialize(f))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(p)&&i++<s?(e.consume(p),d):n(p)}}const Sg={partial:!0,tokenize:WN},Cg={concrete:!0,name:"codeFenced",tokenize:UN};function UN(e,t,n){const r=this,i={partial:!0,tokenize:T};let s=0,a=0,l;return c;function c(_){return u(_)}function u(_){const A=r.events[r.events.length-1];return s=A&&A[1].type==="linePrefix"?A[2].sliceSerialize(A[1],!0).length:0,l=_,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(_)}function d(_){return _===l?(a++,e.consume(_),d):a<3?n(_):(e.exit("codeFencedFenceSequence"),$e(_)?He(e,p,"whitespace")(_):p(_))}function p(_){return _===null||Ce(_)?(e.exit("codeFencedFence"),r.interrupt?t(_):e.check(Sg,b,j)(_)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(_))}function f(_){return _===null||Ce(_)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(_)):$e(_)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),He(e,h,"whitespace")(_)):_===96&&_===l?n(_):(e.consume(_),f)}function h(_){return _===null||Ce(_)?p(_):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),m(_))}function m(_){return _===null||Ce(_)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(_)):_===96&&_===l?n(_):(e.consume(_),m)}function b(_){return e.attempt(i,j,k)(_)}function k(_){return e.enter("lineEnding"),e.consume(_),e.exit("lineEnding"),x}function x(_){return s>0&&$e(_)?He(e,y,"linePrefix",s+1)(_):y(_)}function y(_){return _===null||Ce(_)?e.check(Sg,b,j)(_):(e.enter("codeFlowValue"),v(_))}function v(_){return _===null||Ce(_)?(e.exit("codeFlowValue"),y(_)):(e.consume(_),v)}function j(_){return e.exit("codeFenced"),t(_)}function T(_,A,E){let W=0;return C;function C(F){return _.enter("lineEnding"),_.consume(F),_.exit("lineEnding"),R}function R(F){return _.enter("codeFencedFence"),$e(F)?He(_,H,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(F):H(F)}function H(F){return F===l?(_.enter("codeFencedFenceSequence"),Q(F)):E(F)}function Q(F){return F===l?(W++,_.consume(F),Q):W>=a?(_.exit("codeFencedFenceSequence"),$e(F)?He(_,M,"whitespace")(F):M(F)):E(F)}function M(F){return F===null||Ce(F)?(_.exit("codeFencedFence"),A(F)):E(F)}}}function WN(e,t,n){const r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),s)}function s(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}const iu={name:"codeIndented",tokenize:VN},HN={partial:!0,tokenize:qN};function VN(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),He(e,s,"linePrefix",5)(u)}function s(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?a(u):n(u)}function a(u){return u===null?c(u):Ce(u)?e.attempt(HN,a,c)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||Ce(u)?(e.exit("codeFlowValue"),a(u)):(e.consume(u),l)}function c(u){return e.exit("codeIndented"),t(u)}}function qN(e,t,n){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):Ce(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):He(e,s,"linePrefix",5)(a)}function s(a){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):Ce(a)?i(a):n(a)}}const YN={name:"codeText",previous:GN,resolve:JN,tokenize:KN};function JN(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function GN(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function KN(e,t,n){let r=0,i,s;return a;function a(p){return e.enter("codeText"),e.enter("codeTextSequence"),l(p)}function l(p){return p===96?(e.consume(p),r++,l):(e.exit("codeTextSequence"),c(p))}function c(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),c):p===96?(s=e.enter("codeTextSequence"),i=0,d(p)):Ce(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),c):(e.enter("codeTextData"),u(p))}function u(p){return p===null||p===32||p===96||Ce(p)?(e.exit("codeTextData"),c(p)):(e.consume(p),u)}function d(p){return p===96?(e.consume(p),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(s.type="codeTextData",u(p))}}class QN{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const s=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&No(this.left,r),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),No(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),No(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);No(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);No(this.left,n.reverse())}}}function No(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function D1(e){const t={};let n=-1,r,i,s,a,l,c,u;const d=new QN(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,s=0,s<c.length&&c[s][1].type==="lineEndingBlank"&&(s+=2),s<c.length&&c[s][1].type==="content"))for(;++s<c.length&&c[s][1].type!=="content";)c[s][1].type==="chunkText"&&(c[s][1]._isInFirstContentOfListItem=!0,s++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,XN(d,n)),n=t[n],u=!0);else if(r[1]._container){for(s=n,i=void 0;s--;)if(a=d.get(s),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=s);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},l=d.slice(i,n),l.unshift(r),d.splice(i,n-i+1,l))}}return In(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function XN(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const s=[];let a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const l=a.events,c=[],u={};let d,p,f=-1,h=n,m=0,b=0;const k=[b];for(;h;){for(;e.get(++i)[1]!==h;);s.push(i),h._tokenizer||(d=r.sliceStream(h),h.next||d.push(null),p&&a.defineSkip(h.start),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),p=h,h=h.next}for(h=n;++f<l.length;)l[f][0]==="exit"&&l[f-1][0]==="enter"&&l[f][1].type===l[f-1][1].type&&l[f][1].start.line!==l[f][1].end.line&&(b=f+1,k.push(b),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(a.events=[],h?(h._tokenizer=void 0,h.previous=void 0):k.pop(),f=k.length;f--;){const x=l.slice(k[f],k[f+1]),y=s.pop();c.push([y,y+x.length-1]),e.splice(y,2,x)}for(c.reverse(),f=-1;++f<c.length;)u[m+c[f][0]]=m+c[f][1],m+=c[f][1]-c[f][0]-1;return u}const ZN={resolve:t4,tokenize:n4},e4={partial:!0,tokenize:r4};function t4(e){return D1(e),e}function n4(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?s(l):Ce(l)?e.check(e4,a,s)(l):(e.consume(l),i)}function s(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function a(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function r4(e,t,n){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),He(e,s,"linePrefix")}function s(a){if(a===null||Ce(a))return n(a);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function F1(e,t,n,r,i,s,a,l,c){const u=c||Number.POSITIVE_INFINITY;let d=0;return p;function p(x){return x===60?(e.enter(r),e.enter(i),e.enter(s),e.consume(x),e.exit(s),f):x===null||x===32||x===41||Ld(x)?n(x):(e.enter(r),e.enter(a),e.enter(l),e.enter("chunkString",{contentType:"string"}),b(x))}function f(x){return x===62?(e.enter(s),e.consume(x),e.exit(s),e.exit(i),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),h(x))}function h(x){return x===62?(e.exit("chunkString"),e.exit(l),f(x)):x===null||x===60||Ce(x)?n(x):(e.consume(x),x===92?m:h)}function m(x){return x===60||x===62||x===92?(e.consume(x),h):h(x)}function b(x){return!d&&(x===null||x===41||Wt(x))?(e.exit("chunkString"),e.exit(l),e.exit(a),e.exit(r),t(x)):d<u&&x===40?(e.consume(x),d++,b):x===41?(e.consume(x),d--,b):x===null||x===32||x===40||Ld(x)?n(x):(e.consume(x),x===92?k:b)}function k(x){return x===40||x===41||x===92?(e.consume(x),b):b(x)}}function B1(e,t,n,r,i,s){const a=this;let l=0,c;return u;function u(h){return e.enter(r),e.enter(i),e.consume(h),e.exit(i),e.enter(s),d}function d(h){return l>999||h===null||h===91||h===93&&!c||h===94&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?n(h):h===93?(e.exit(s),e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):Ce(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),p(h))}function p(h){return h===null||h===91||h===93||Ce(h)||l++>999?(e.exit("chunkString"),d(h)):(e.consume(h),c||(c=!$e(h)),h===92?f:p)}function f(h){return h===91||h===92||h===93?(e.consume(h),l++,p):p(h)}}function U1(e,t,n,r,i,s){let a;return l;function l(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),a=f===40?41:f,c):n(f)}function c(f){return f===a?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(s),u(f))}function u(f){return f===a?(e.exit(s),c(a)):f===null?n(f):Ce(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),He(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===a||f===null||Ce(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?p:d)}function p(f){return f===a||f===92?(e.consume(f),d):d(f)}}function es(e,t){let n;return r;function r(i){return Ce(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):$e(i)?He(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const i4={name:"definition",tokenize:s4},o4={partial:!0,tokenize:a4};function s4(e,t,n){const r=this;let i;return s;function s(h){return e.enter("definition"),a(h)}function a(h){return B1.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function l(h){return i=Bi(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),c):n(h)}function c(h){return Wt(h)?es(e,u)(h):u(h)}function u(h){return F1(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function d(h){return e.attempt(o4,p,p)(h)}function p(h){return $e(h)?He(e,f,"whitespace")(h):f(h)}function f(h){return h===null||Ce(h)?(e.exit("definition"),r.parser.defined.push(i),t(h)):n(h)}}function a4(e,t,n){return r;function r(l){return Wt(l)?es(e,i)(l):n(l)}function i(l){return U1(e,s,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function s(l){return $e(l)?He(e,a,"whitespace")(l):a(l)}function a(l){return l===null||Ce(l)?t(l):n(l)}}const l4={name:"hardBreakEscape",tokenize:c4};function c4(e,t,n){return r;function r(s){return e.enter("hardBreakEscape"),e.consume(s),i}function i(s){return Ce(s)?(e.exit("hardBreakEscape"),t(s)):n(s)}}const u4={name:"headingAtx",resolve:d4,tokenize:p4};function d4(e,t){let n=e.length-2,r=3,i,s;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},s={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},In(e,r,n-r+1,[["enter",i,t],["enter",s,t],["exit",s,t],["exit",i,t]])),e}function p4(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),s(d)}function s(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&r++<6?(e.consume(d),a):d===null||Wt(d)?(e.exit("atxHeadingSequence"),l(d)):n(d)}function l(d){return d===35?(e.enter("atxHeadingSequence"),c(d)):d===null||Ce(d)?(e.exit("atxHeading"),t(d)):$e(d)?He(e,l,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function c(d){return d===35?(e.consume(d),c):(e.exit("atxHeadingSequence"),l(d))}function u(d){return d===null||d===35||Wt(d)?(e.exit("atxHeadingText"),l(d)):(e.consume(d),u)}}const f4=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Ng=["pre","script","style","textarea"],h4={concrete:!0,name:"htmlFlow",resolveTo:x4,tokenize:y4},m4={partial:!0,tokenize:b4},g4={partial:!0,tokenize:v4};function x4(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function y4(e,t,n){const r=this;let i,s,a,l,c;return u;function u(S){return d(S)}function d(S){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(S),p}function p(S){return S===33?(e.consume(S),f):S===47?(e.consume(S),s=!0,b):S===63?(e.consume(S),i=3,r.interrupt?t:g):Tn(S)?(e.consume(S),a=String.fromCharCode(S),k):n(S)}function f(S){return S===45?(e.consume(S),i=2,h):S===91?(e.consume(S),i=5,l=0,m):Tn(S)?(e.consume(S),i=4,r.interrupt?t:g):n(S)}function h(S){return S===45?(e.consume(S),r.interrupt?t:g):n(S)}function m(S){const D="CDATA[";return S===D.charCodeAt(l++)?(e.consume(S),l===D.length?r.interrupt?t:H:m):n(S)}function b(S){return Tn(S)?(e.consume(S),a=String.fromCharCode(S),k):n(S)}function k(S){if(S===null||S===47||S===62||Wt(S)){const D=S===47,Z=a.toLowerCase();return!D&&!s&&Ng.includes(Z)?(i=1,r.interrupt?t(S):H(S)):f4.includes(a.toLowerCase())?(i=6,D?(e.consume(S),x):r.interrupt?t(S):H(S)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(S):s?y(S):v(S))}return S===45||Qt(S)?(e.consume(S),a+=String.fromCharCode(S),k):n(S)}function x(S){return S===62?(e.consume(S),r.interrupt?t:H):n(S)}function y(S){return $e(S)?(e.consume(S),y):C(S)}function v(S){return S===47?(e.consume(S),C):S===58||S===95||Tn(S)?(e.consume(S),j):$e(S)?(e.consume(S),v):C(S)}function j(S){return S===45||S===46||S===58||S===95||Qt(S)?(e.consume(S),j):T(S)}function T(S){return S===61?(e.consume(S),_):$e(S)?(e.consume(S),T):v(S)}function _(S){return S===null||S===60||S===61||S===62||S===96?n(S):S===34||S===39?(e.consume(S),c=S,A):$e(S)?(e.consume(S),_):E(S)}function A(S){return S===c?(e.consume(S),c=null,W):S===null||Ce(S)?n(S):(e.consume(S),A)}function E(S){return S===null||S===34||S===39||S===47||S===60||S===61||S===62||S===96||Wt(S)?T(S):(e.consume(S),E)}function W(S){return S===47||S===62||$e(S)?v(S):n(S)}function C(S){return S===62?(e.consume(S),R):n(S)}function R(S){return S===null||Ce(S)?H(S):$e(S)?(e.consume(S),R):n(S)}function H(S){return S===45&&i===2?(e.consume(S),O):S===60&&i===1?(e.consume(S),L):S===62&&i===4?(e.consume(S),P):S===63&&i===3?(e.consume(S),g):S===93&&i===5?(e.consume(S),$):Ce(S)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(m4,z,Q)(S)):S===null||Ce(S)?(e.exit("htmlFlowData"),Q(S)):(e.consume(S),H)}function Q(S){return e.check(g4,M,z)(S)}function M(S){return e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),F}function F(S){return S===null||Ce(S)?Q(S):(e.enter("htmlFlowData"),H(S))}function O(S){return S===45?(e.consume(S),g):H(S)}function L(S){return S===47?(e.consume(S),a="",B):H(S)}function B(S){if(S===62){const D=a.toLowerCase();return Ng.includes(D)?(e.consume(S),P):H(S)}return Tn(S)&&a.length<8?(e.consume(S),a+=String.fromCharCode(S),B):H(S)}function $(S){return S===93?(e.consume(S),g):H(S)}function g(S){return S===62?(e.consume(S),P):S===45&&i===2?(e.consume(S),g):H(S)}function P(S){return S===null||Ce(S)?(e.exit("htmlFlowData"),z(S)):(e.consume(S),P)}function z(S){return e.exit("htmlFlow"),t(S)}}function v4(e,t,n){const r=this;return i;function i(a){return Ce(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),s):n(a)}function s(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function b4(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(uc,t,n)}}const w4={name:"htmlText",tokenize:k4};function k4(e,t,n){const r=this;let i,s,a;return l;function l(g){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(g),c}function c(g){return g===33?(e.consume(g),u):g===47?(e.consume(g),T):g===63?(e.consume(g),v):Tn(g)?(e.consume(g),E):n(g)}function u(g){return g===45?(e.consume(g),d):g===91?(e.consume(g),s=0,m):Tn(g)?(e.consume(g),y):n(g)}function d(g){return g===45?(e.consume(g),h):n(g)}function p(g){return g===null?n(g):g===45?(e.consume(g),f):Ce(g)?(a=p,L(g)):(e.consume(g),p)}function f(g){return g===45?(e.consume(g),h):p(g)}function h(g){return g===62?O(g):g===45?f(g):p(g)}function m(g){const P="CDATA[";return g===P.charCodeAt(s++)?(e.consume(g),s===P.length?b:m):n(g)}function b(g){return g===null?n(g):g===93?(e.consume(g),k):Ce(g)?(a=b,L(g)):(e.consume(g),b)}function k(g){return g===93?(e.consume(g),x):b(g)}function x(g){return g===62?O(g):g===93?(e.consume(g),x):b(g)}function y(g){return g===null||g===62?O(g):Ce(g)?(a=y,L(g)):(e.consume(g),y)}function v(g){return g===null?n(g):g===63?(e.consume(g),j):Ce(g)?(a=v,L(g)):(e.consume(g),v)}function j(g){return g===62?O(g):v(g)}function T(g){return Tn(g)?(e.consume(g),_):n(g)}function _(g){return g===45||Qt(g)?(e.consume(g),_):A(g)}function A(g){return Ce(g)?(a=A,L(g)):$e(g)?(e.consume(g),A):O(g)}function E(g){return g===45||Qt(g)?(e.consume(g),E):g===47||g===62||Wt(g)?W(g):n(g)}function W(g){return g===47?(e.consume(g),O):g===58||g===95||Tn(g)?(e.consume(g),C):Ce(g)?(a=W,L(g)):$e(g)?(e.consume(g),W):O(g)}function C(g){return g===45||g===46||g===58||g===95||Qt(g)?(e.consume(g),C):R(g)}function R(g){return g===61?(e.consume(g),H):Ce(g)?(a=R,L(g)):$e(g)?(e.consume(g),R):W(g)}function H(g){return g===null||g===60||g===61||g===62||g===96?n(g):g===34||g===39?(e.consume(g),i=g,Q):Ce(g)?(a=H,L(g)):$e(g)?(e.consume(g),H):(e.consume(g),M)}function Q(g){return g===i?(e.consume(g),i=void 0,F):g===null?n(g):Ce(g)?(a=Q,L(g)):(e.consume(g),Q)}function M(g){return g===null||g===34||g===39||g===60||g===61||g===96?n(g):g===47||g===62||Wt(g)?W(g):(e.consume(g),M)}function F(g){return g===47||g===62||Wt(g)?W(g):n(g)}function O(g){return g===62?(e.consume(g),e.exit("htmlTextData"),e.exit("htmlText"),t):n(g)}function L(g){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),B}function B(g){return $e(g)?He(e,$,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(g):$(g)}function $(g){return e.enter("htmlTextData"),a(g)}}const xf={name:"labelEnd",resolveAll:C4,resolveTo:N4,tokenize:E4},_4={tokenize:z4},j4={tokenize:T4},S4={tokenize:M4};function C4(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&In(e,0,e.length,n),e}function N4(e,t){let n=e.length,r=0,i,s,a,l;for(;n--;)if(i=e[n][1],s){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(a){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(s=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=n);const c={type:e[s][1].type==="labelLink"?"link":"image",start:{...e[s][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[s][1].start},end:{...e[a][1].end}},d={type:"labelText",start:{...e[s+r+2][1].end},end:{...e[a-2][1].start}};return l=[["enter",c,t],["enter",u,t]],l=an(l,e.slice(s+1,s+r+3)),l=an(l,[["enter",d,t]]),l=an(l,gf(t.parser.constructs.insideSpan.null,e.slice(s+r+4,a-3),t)),l=an(l,[["exit",d,t],e[a-2],e[a-1],["exit",u,t]]),l=an(l,e.slice(a+1)),l=an(l,[["exit",c,t]]),In(e,s,e.length,l),e}function E4(e,t,n){const r=this;let i=r.events.length,s,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){s=r.events[i][1];break}return l;function l(f){return s?s._inactive?p(f):(a=r.parser.defined.includes(Bi(r.sliceSerialize({start:s.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),c):n(f)}function c(f){return f===40?e.attempt(_4,d,a?d:p)(f):f===91?e.attempt(j4,d,a?u:p)(f):a?d(f):p(f)}function u(f){return e.attempt(S4,d,p)(f)}function d(f){return t(f)}function p(f){return s._balanced=!0,n(f)}}function z4(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),i}function i(p){return Wt(p)?es(e,s)(p):s(p)}function s(p){return p===41?d(p):F1(e,a,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function a(p){return Wt(p)?es(e,c)(p):d(p)}function l(p){return n(p)}function c(p){return p===34||p===39||p===40?U1(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function u(p){return Wt(p)?es(e,d)(p):d(p)}function d(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function T4(e,t,n){const r=this;return i;function i(l){return B1.call(r,e,s,a,"reference","referenceMarker","referenceString")(l)}function s(l){return r.parser.defined.includes(Bi(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function a(l){return n(l)}}function M4(e,t,n){return r;function r(s){return e.enter("reference"),e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),i}function i(s){return s===93?(e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),e.exit("reference"),t):n(s)}}const A4={name:"labelStartImage",resolveAll:xf.resolveAll,tokenize:L4};function L4(e,t,n){const r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),s}function s(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),a):n(l)}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const P4={name:"labelStartLink",resolveAll:xf.resolveAll,tokenize:R4};function R4(e,t,n){const r=this;return i;function i(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),s}function s(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const ou={name:"lineEnding",tokenize:I4};function I4(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),He(e,t,"linePrefix")}}const Ba={name:"thematicBreak",tokenize:O4};function O4(e,t,n){let r=0,i;return s;function s(u){return e.enter("thematicBreak"),a(u)}function a(u){return i=u,l(u)}function l(u){return u===i?(e.enter("thematicBreakSequence"),c(u)):r>=3&&(u===null||Ce(u))?(e.exit("thematicBreak"),t(u)):n(u)}function c(u){return u===i?(e.consume(u),r++,c):(e.exit("thematicBreakSequence"),$e(u)?He(e,l,"whitespace")(u):l(u))}}const Rt={continuation:{tokenize:B4},exit:W4,name:"list",tokenize:F4},$4={partial:!0,tokenize:H4},D4={partial:!0,tokenize:U4};function F4(e,t,n){const r=this,i=r.events[r.events.length-1];let s=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return l;function l(h){const m=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(m==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:Pd(h)){if(r.containerState.type||(r.containerState.type=m,e.enter(m,{_container:!0})),m==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(Ba,n,u)(h):u(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(h)}return n(h)}function c(h){return Pd(h)&&++a<10?(e.consume(h),c):(!r.interrupt||a<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),u(h)):n(h)}function u(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(uc,r.interrupt?n:d,e.attempt($4,f,p))}function d(h){return r.containerState.initialBlankLine=!0,s++,f(h)}function p(h){return $e(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),f):n(h)}function f(h){return r.containerState.size=s+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function B4(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(uc,i,s);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,He(e,t,"listItemIndent",r.containerState.size+1)(l)}function s(l){return r.containerState.furtherBlankLines||!$e(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(D4,t,a)(l))}function a(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,He(e,e.attempt(Rt,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function U4(e,t,n){const r=this;return He(e,i,"listItemIndent",r.containerState.size+1);function i(s){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(s):n(s)}}function W4(e){e.exit(this.containerState.type)}function H4(e,t,n){const r=this;return He(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(s){const a=r.events[r.events.length-1];return!$e(s)&&a&&a[1].type==="listItemPrefixWhitespace"?t(s):n(s)}}const Eg={name:"setextUnderline",resolveTo:V4,tokenize:q4};function V4(e,t){let n=e.length,r,i,s;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!s&&e[n][1].type==="definition"&&(s=n);const a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",s?(e.splice(i,0,["enter",a,t]),e.splice(s+1,0,["exit",e[r][1],t]),e[r][1].end={...e[s][1].end}):e[r][1]=a,e.push(["exit",a,t]),e}function q4(e,t,n){const r=this;let i;return s;function s(u){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),i=u,a(u)):n(u)}function a(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===i?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),$e(u)?He(e,c,"lineSuffix")(u):c(u))}function c(u){return u===null||Ce(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const Y4={tokenize:J4};function J4(e){const t=this,n=e.attempt(uc,r,e.attempt(this.parser.constructs.flowInitial,i,He(e,e.attempt(this.parser.constructs.flow,i,e.attempt(ZN,i)),"linePrefix")));return n;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEndingBlank"),e.consume(s),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const G4={resolveAll:H1()},K4=W1("string"),Q4=W1("text");function W1(e){return{resolveAll:H1(e==="text"?X4:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],s=n.attempt(i,a,l);return a;function a(d){return u(d)?s(d):l(d)}function l(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),c}function c(d){return u(d)?(n.exit("data"),s(d)):(n.consume(d),c)}function u(d){if(d===null)return!0;const p=i[d];let f=-1;if(p)for(;++f<p.length;){const h=p[f];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function H1(e){return t;function t(n,r){let i=-1,s;for(;++i<=n.length;)s===void 0?n[i]&&n[i][1].type==="data"&&(s=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==s+2&&(n[s][1].end=n[i-1][1].end,n.splice(s+2,i-s-2),i=s+2),s=void 0);return e?e(n,r):n}}function X4(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let s=i.length,a=-1,l=0,c;for(;s--;){const u=i[s];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)l++,a--;if(a)break;a=-1}else if(u===-2)c=!0,l++;else if(u!==-1){s++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){const u={type:n===e.length||c||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?a:r.start._bufferIndex+a,_index:r.start._index+s,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const Z4={42:Rt,43:Rt,45:Rt,48:Rt,49:Rt,50:Rt,51:Rt,52:Rt,53:Rt,54:Rt,55:Rt,56:Rt,57:Rt,62:I1},eE={91:i4},tE={[-2]:iu,[-1]:iu,32:iu},nE={35:u4,42:Ba,45:[Eg,Ba],60:h4,61:Eg,95:Ba,96:Cg,126:Cg},rE={38:$1,92:O1},iE={[-5]:ou,[-4]:ou,[-3]:ou,33:A4,38:$1,42:Rd,60:[PN,w4],91:P4,92:[l4,O1],93:xf,95:Rd,96:YN},oE={null:[Rd,G4]},sE={null:[42,95]},aE={null:[]},lE=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:sE,contentInitial:eE,disable:aE,document:Z4,flow:nE,flowInitial:tE,insideSpan:oE,string:rE,text:iE},Symbol.toStringTag,{value:"Module"}));function cE(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},s=[];let a=[],l=[];const c={attempt:A(T),check:A(_),consume:y,enter:v,exit:j,interrupt:A(_,{interrupt:!0})},u={code:null,containerState:{},defineSkip:b,events:[],now:m,parser:e,previous:null,sliceSerialize:f,sliceStream:h,write:p};let d=t.tokenize.call(u,c);return t.resolveAll&&s.push(t),u;function p(R){return a=an(a,R),k(),a[a.length-1]!==null?[]:(E(t,0),u.events=gf(s,u.events,u),u.events)}function f(R,H){return dE(h(R),H)}function h(R){return uE(a,R)}function m(){const{_bufferIndex:R,_index:H,line:Q,column:M,offset:F}=r;return{_bufferIndex:R,_index:H,line:Q,column:M,offset:F}}function b(R){i[R.line]=R.column,C()}function k(){let R;for(;r._index<a.length;){const H=a[r._index];if(typeof H=="string")for(R=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===R&&r._bufferIndex<H.length;)x(H.charCodeAt(r._bufferIndex));else x(H)}}function x(R){d=d(R)}function y(R){Ce(R)?(r.line++,r.column=1,r.offset+=R===-3?2:1,C()):R!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=R}function v(R,H){const Q=H||{};return Q.type=R,Q.start=m(),u.events.push(["enter",Q,u]),l.push(Q),Q}function j(R){const H=l.pop();return H.end=m(),u.events.push(["exit",H,u]),H}function T(R,H){E(R,H.from)}function _(R,H){H.restore()}function A(R,H){return Q;function Q(M,F,O){let L,B,$,g;return Array.isArray(M)?z(M):"tokenize"in M?z([M]):P(M);function P(ne){return ue;function ue(_e){const Y=_e!==null&&ne[_e],re=_e!==null&&ne.null,le=[...Array.isArray(Y)?Y:Y?[Y]:[],...Array.isArray(re)?re:re?[re]:[]];return z(le)(_e)}}function z(ne){return L=ne,B=0,ne.length===0?O:S(ne[B])}function S(ne){return ue;function ue(_e){return g=W(),$=ne,ne.partial||(u.currentConstruct=ne),ne.name&&u.parser.constructs.disable.null.includes(ne.name)?Z():ne.tokenize.call(H?Object.assign(Object.create(u),H):u,c,D,Z)(_e)}}function D(ne){return R($,g),F}function Z(ne){return g.restore(),++B<L.length?S(L[B]):O}}}function E(R,H){R.resolveAll&&!s.includes(R)&&s.push(R),R.resolve&&In(u.events,H,u.events.length-H,R.resolve(u.events.slice(H),u)),R.resolveTo&&(u.events=R.resolveTo(u.events,u))}function W(){const R=m(),H=u.previous,Q=u.currentConstruct,M=u.events.length,F=Array.from(l);return{from:M,restore:O};function O(){r=R,u.previous=H,u.currentConstruct=Q,u.events.length=M,l=F,C()}}function C(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function uE(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,s=t.end._bufferIndex;let a;if(n===i)a=[e[n].slice(r,s)];else{if(a=e.slice(n,i),r>-1){const l=a[0];typeof l=="string"?a[0]=l.slice(r):a.shift()}s>0&&a.push(e[i].slice(0,s))}return a}function dE(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const s=e[n];let a;if(typeof s=="string")a=s;else switch(s){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(s)}i=s===-2,r.push(a)}return r.join("")}function pE(e){const r={constructs:vN([lE,...(e||{}).extensions||[]]),content:i(NN),defined:[],document:i(zN),flow:i(Y4),lazy:{},string:i(K4),text:i(Q4)};return r;function i(s){return a;function a(l){return cE(r,s,l)}}}function fE(e){for(;!D1(e););return e}const zg=/[\0\t\n\r]/g;function hE(){let e=1,t="",n=!0,r;return i;function i(s,a,l){const c=[];let u,d,p,f,h;for(s=t+(typeof s=="string"?s.toString():new TextDecoder(a||void 0).decode(s)),p=0,t="",n&&(s.charCodeAt(0)===65279&&p++,n=void 0);p<s.length;){if(zg.lastIndex=p,u=zg.exec(s),f=u&&u.index!==void 0?u.index:s.length,h=s.charCodeAt(f),!u){t=s.slice(p);break}if(h===10&&p===f&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),p<f&&(c.push(s.slice(p,f)),e+=f-p),h){case 0:{c.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,c.push(-2);e++<d;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}p=f+1}return l&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const mE=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function gE(e){return e.replace(mE,xE)}function xE(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),s=i===120||i===88;return R1(n.slice(s?2:1),s?16:10)}return mf(n)||e}const V1={}.hasOwnProperty;function yE(e,t,n){return typeof t!="string"&&(n=t,t=void 0),vE(n)(fE(pE(n).document().write(hE()(e,t,!0))))}function vE(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(ie),autolinkProtocol:W,autolinkEmail:W,atxHeading:s(X),blockQuote:s(re),characterEscape:W,characterReference:W,codeFenced:s(le),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:s(le,a),codeText:s(ee,a),codeTextData:W,data:W,codeFlowValue:W,definition:s(fe),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:s(ye),hardBreakEscape:s(he),hardBreakTrailing:s(he),htmlFlow:s(we,a),htmlFlowData:W,htmlText:s(we,a),htmlTextData:W,image:s(G),label:a,link:s(ie),listItem:s(I),listItemValue:f,listOrdered:s(q,p),listUnordered:s(q),paragraph:s(N),reference:S,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:s(X),strong:s(U),thematicBreak:s(se)},exit:{atxHeading:c(),atxHeadingSequence:T,autolink:c(),autolinkEmail:Y,autolinkProtocol:_e,blockQuote:c(),characterEscapeValue:C,characterReferenceMarkerHexadecimal:Z,characterReferenceMarkerNumeric:Z,characterReferenceValue:ne,characterReference:ue,codeFenced:c(k),codeFencedFence:b,codeFencedFenceInfo:h,codeFencedFenceMeta:m,codeFlowValue:C,codeIndented:c(x),codeText:c(F),codeTextData:C,data:C,definition:c(),definitionDestinationString:j,definitionLabelString:y,definitionTitleString:v,emphasis:c(),hardBreakEscape:c(H),hardBreakTrailing:c(H),htmlFlow:c(Q),htmlFlowData:C,htmlText:c(M),htmlTextData:C,image:c(L),label:$,labelText:B,lineEnding:R,link:c(O),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:D,resourceDestinationString:g,resourceTitleString:P,resource:z,setextHeading:c(E),setextHeadingLineSequence:A,setextHeadingText:_,strong:c(),thematicBreak:c()}};q1(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(K){let te={type:"root",children:[]};const ve={stack:[te],tokenStack:[],config:t,enter:l,exit:u,buffer:a,resume:d,data:n},Se=[];let Ee=-1;for(;++Ee<K.length;)if(K[Ee][1].type==="listOrdered"||K[Ee][1].type==="listUnordered")if(K[Ee][0]==="enter")Se.push(Ee);else{const De=Se.pop();Ee=i(K,De,Ee)}for(Ee=-1;++Ee<K.length;){const De=t[K[Ee][0]];V1.call(De,K[Ee][1].type)&&De[K[Ee][1].type].call(Object.assign({sliceSerialize:K[Ee][2].sliceSerialize},ve),K[Ee][1])}if(ve.tokenStack.length>0){const De=ve.tokenStack[ve.tokenStack.length-1];(De[1]||Tg).call(ve,void 0,De[0])}for(te.position={start:or(K.length>0?K[0][1].start:{line:1,column:1,offset:0}),end:or(K.length>0?K[K.length-2][1].end:{line:1,column:1,offset:0})},Ee=-1;++Ee<t.transforms.length;)te=t.transforms[Ee](te)||te;return te}function i(K,te,ve){let Se=te-1,Ee=-1,De=!1,ht,et,be,ze;for(;++Se<=ve;){const pe=K[Se];switch(pe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{pe[0]==="enter"?Ee++:Ee--,ze=void 0;break}case"lineEndingBlank":{pe[0]==="enter"&&(ht&&!ze&&!Ee&&!be&&(be=Se),ze=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:ze=void 0}if(!Ee&&pe[0]==="enter"&&pe[1].type==="listItemPrefix"||Ee===-1&&pe[0]==="exit"&&(pe[1].type==="listUnordered"||pe[1].type==="listOrdered")){if(ht){let Ne=Se;for(et=void 0;Ne--;){const ge=K[Ne];if(ge[1].type==="lineEnding"||ge[1].type==="lineEndingBlank"){if(ge[0]==="exit")continue;et&&(K[et][1].type="lineEndingBlank",De=!0),ge[1].type="lineEnding",et=Ne}else if(!(ge[1].type==="linePrefix"||ge[1].type==="blockQuotePrefix"||ge[1].type==="blockQuotePrefixWhitespace"||ge[1].type==="blockQuoteMarker"||ge[1].type==="listItemIndent"))break}be&&(!et||be<et)&&(ht._spread=!0),ht.end=Object.assign({},et?K[et][1].start:pe[1].end),K.splice(et||Se,0,["exit",ht,pe[2]]),Se++,ve++}if(pe[1].type==="listItemPrefix"){const Ne={type:"listItem",_spread:!1,start:Object.assign({},pe[1].start),end:void 0};ht=Ne,K.splice(Se,0,["enter",Ne,pe[2]]),Se++,ve++,be=void 0,ze=!0}}}return K[te][1]._spread=De,ve}function s(K,te){return ve;function ve(Se){l.call(this,K(Se),Se),te&&te.call(this,Se)}}function a(){this.stack.push({type:"fragment",children:[]})}function l(K,te,ve){this.stack[this.stack.length-1].children.push(K),this.stack.push(K),this.tokenStack.push([te,ve||void 0]),K.position={start:or(te.start),end:void 0}}function c(K){return te;function te(ve){K&&K.call(this,ve),u.call(this,ve)}}function u(K,te){const ve=this.stack.pop(),Se=this.tokenStack.pop();if(Se)Se[0].type!==K.type&&(te?te.call(this,K,Se[0]):(Se[1]||Tg).call(this,K,Se[0]));else throw new Error("Cannot close `"+K.type+"` ("+Zo({start:K.start,end:K.end})+"): it’s not open");ve.position.end=or(K.end)}function d(){return xN(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function f(K){if(this.data.expectingFirstListItemValue){const te=this.stack[this.stack.length-2];te.start=Number.parseInt(this.sliceSerialize(K),10),this.data.expectingFirstListItemValue=void 0}}function h(){const K=this.resume(),te=this.stack[this.stack.length-1];te.lang=K}function m(){const K=this.resume(),te=this.stack[this.stack.length-1];te.meta=K}function b(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function k(){const K=this.resume(),te=this.stack[this.stack.length-1];te.value=K.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function x(){const K=this.resume(),te=this.stack[this.stack.length-1];te.value=K.replace(/(\r?\n|\r)$/g,"")}function y(K){const te=this.resume(),ve=this.stack[this.stack.length-1];ve.label=te,ve.identifier=Bi(this.sliceSerialize(K)).toLowerCase()}function v(){const K=this.resume(),te=this.stack[this.stack.length-1];te.title=K}function j(){const K=this.resume(),te=this.stack[this.stack.length-1];te.url=K}function T(K){const te=this.stack[this.stack.length-1];if(!te.depth){const ve=this.sliceSerialize(K).length;te.depth=ve}}function _(){this.data.setextHeadingSlurpLineEnding=!0}function A(K){const te=this.stack[this.stack.length-1];te.depth=this.sliceSerialize(K).codePointAt(0)===61?1:2}function E(){this.data.setextHeadingSlurpLineEnding=void 0}function W(K){const ve=this.stack[this.stack.length-1].children;let Se=ve[ve.length-1];(!Se||Se.type!=="text")&&(Se=J(),Se.position={start:or(K.start),end:void 0},ve.push(Se)),this.stack.push(Se)}function C(K){const te=this.stack.pop();te.value+=this.sliceSerialize(K),te.position.end=or(K.end)}function R(K){const te=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ve=te.children[te.children.length-1];ve.position.end=or(K.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(te.type)&&(W.call(this,K),C.call(this,K))}function H(){this.data.atHardBreak=!0}function Q(){const K=this.resume(),te=this.stack[this.stack.length-1];te.value=K}function M(){const K=this.resume(),te=this.stack[this.stack.length-1];te.value=K}function F(){const K=this.resume(),te=this.stack[this.stack.length-1];te.value=K}function O(){const K=this.stack[this.stack.length-1];if(this.data.inReference){const te=this.data.referenceType||"shortcut";K.type+="Reference",K.referenceType=te,delete K.url,delete K.title}else delete K.identifier,delete K.label;this.data.referenceType=void 0}function L(){const K=this.stack[this.stack.length-1];if(this.data.inReference){const te=this.data.referenceType||"shortcut";K.type+="Reference",K.referenceType=te,delete K.url,delete K.title}else delete K.identifier,delete K.label;this.data.referenceType=void 0}function B(K){const te=this.sliceSerialize(K),ve=this.stack[this.stack.length-2];ve.label=gE(te),ve.identifier=Bi(te).toLowerCase()}function $(){const K=this.stack[this.stack.length-1],te=this.resume(),ve=this.stack[this.stack.length-1];if(this.data.inReference=!0,ve.type==="link"){const Se=K.children;ve.children=Se}else ve.alt=te}function g(){const K=this.resume(),te=this.stack[this.stack.length-1];te.url=K}function P(){const K=this.resume(),te=this.stack[this.stack.length-1];te.title=K}function z(){this.data.inReference=void 0}function S(){this.data.referenceType="collapsed"}function D(K){const te=this.resume(),ve=this.stack[this.stack.length-1];ve.label=te,ve.identifier=Bi(this.sliceSerialize(K)).toLowerCase(),this.data.referenceType="full"}function Z(K){this.data.characterReferenceType=K.type}function ne(K){const te=this.sliceSerialize(K),ve=this.data.characterReferenceType;let Se;ve?(Se=R1(te,ve==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Se=mf(te);const Ee=this.stack[this.stack.length-1];Ee.value+=Se}function ue(K){const te=this.stack.pop();te.position.end=or(K.end)}function _e(K){C.call(this,K);const te=this.stack[this.stack.length-1];te.url=this.sliceSerialize(K)}function Y(K){C.call(this,K);const te=this.stack[this.stack.length-1];te.url="mailto:"+this.sliceSerialize(K)}function re(){return{type:"blockquote",children:[]}}function le(){return{type:"code",lang:null,meta:null,value:""}}function ee(){return{type:"inlineCode",value:""}}function fe(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function ye(){return{type:"emphasis",children:[]}}function X(){return{type:"heading",depth:0,children:[]}}function he(){return{type:"break"}}function we(){return{type:"html",value:""}}function G(){return{type:"image",title:null,url:"",alt:null}}function ie(){return{type:"link",title:null,url:"",children:[]}}function q(K){return{type:"list",ordered:K.type==="listOrdered",start:null,spread:K._spread,children:[]}}function I(K){return{type:"listItem",spread:K._spread,checked:null,children:[]}}function N(){return{type:"paragraph",children:[]}}function U(){return{type:"strong",children:[]}}function J(){return{type:"text",value:""}}function se(){return{type:"thematicBreak"}}}function or(e){return{line:e.line,column:e.column,offset:e.offset}}function q1(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?q1(e,r):bE(e,r)}}function bE(e,t){let n;for(n in t)if(V1.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Tg(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Zo({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Zo({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Zo({start:t.start,end:t.end})+") is still open")}function wE(e){const t=this;t.parser=n;function n(r){return yE(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function kE(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function _E(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function jE(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let s={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(s.data={meta:t.meta}),e.patch(t,s),s=e.applyData(t,s),s={type:"element",tagName:"pre",properties:{},children:[s]},e.patch(t,s),s}function SE(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function CE(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function NE(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=fo(r.toLowerCase()),s=e.footnoteOrder.indexOf(r);let a,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=s+1,l+=1,e.footnoteCounts.set(r,l);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,c);const u={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,u),e.applyData(t,u)}function EE(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function zE(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Y1(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),s=i[0];s&&s.type==="text"?s.value="["+s.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function TE(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Y1(e,t);const i={src:fo(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,s),e.applyData(t,s)}function ME(e,t){const n={src:fo(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function AE(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function LE(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Y1(e,t);const i={href:fo(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,s),e.applyData(t,s)}function PE(e,t){const n={href:fo(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function RE(e,t,n){const r=e.all(t),i=n?IE(n):J1(t),s={},a=[];if(typeof t.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const d=r[l];(i||l!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?a.push(...d.children):a.push(d)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:s,children:a};return e.patch(t,u),e.applyData(t,u)}function IE(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=J1(n[r])}return t}function J1(e){const t=e.spread;return t??e.children.length>1}function OE(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const s={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,s),e.applyData(t,s)}function $E(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function DE(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function FE(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function BE(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),i.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},l=df(t.children[1]),c=E1(t.children[t.children.length-1]);l&&c&&(a.position={start:l,end:c}),i.push(a)}const s={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,s),e.applyData(t,s)}function UE(e,t,n){const r=n?n.children:void 0,s=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,l=a?a.length:t.children.length;let c=-1;const u=[];for(;++c<l;){const p=t.children[c],f={},h=a?a[c]:void 0;h&&(f.align=h);let m={type:"element",tagName:s,properties:f,children:[]};p&&(m.children=e.all(p),e.patch(p,m),m=e.applyData(p,m)),u.push(m)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function WE(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const Mg=9,Ag=32;function HE(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const s=[];for(;r;)s.push(Lg(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return s.push(Lg(t.slice(i),i>0,!1)),s.join("")}function Lg(e,t,n){let r=0,i=e.length;if(t){let s=e.codePointAt(r);for(;s===Mg||s===Ag;)r++,s=e.codePointAt(r)}if(n){let s=e.codePointAt(i-1);for(;s===Mg||s===Ag;)i--,s=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function VE(e,t){const n={type:"text",value:HE(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function qE(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const YE={blockquote:kE,break:_E,code:jE,delete:SE,emphasis:CE,footnoteReference:NE,heading:EE,html:zE,imageReference:TE,image:ME,inlineCode:AE,linkReference:LE,link:PE,listItem:RE,list:OE,paragraph:$E,root:DE,strong:FE,table:BE,tableCell:WE,tableRow:UE,text:VE,thematicBreak:qE,toml:ma,yaml:ma,definition:ma,footnoteDefinition:ma};function ma(){}const G1=-1,dc=0,ts=1,jl=2,yf=3,vf=4,bf=5,wf=6,K1=7,Q1=8,Pg=typeof self=="object"?self:globalThis,JE=(e,t)=>{const n=(i,s)=>(e.set(s,i),i),r=i=>{if(e.has(i))return e.get(i);const[s,a]=t[i];switch(s){case dc:case G1:return n(a,i);case ts:{const l=n([],i);for(const c of a)l.push(r(c));return l}case jl:{const l=n({},i);for(const[c,u]of a)l[r(c)]=r(u);return l}case yf:return n(new Date(a),i);case vf:{const{source:l,flags:c}=a;return n(new RegExp(l,c),i)}case bf:{const l=n(new Map,i);for(const[c,u]of a)l.set(r(c),r(u));return l}case wf:{const l=n(new Set,i);for(const c of a)l.add(r(c));return l}case K1:{const{name:l,message:c}=a;return n(new Pg[l](c),i)}case Q1:return n(BigInt(a),i);case"BigInt":return n(Object(BigInt(a)),i);case"ArrayBuffer":return n(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:l}=new Uint8Array(a);return n(new DataView(l),a)}}return n(new Pg[s](a),i)};return r},Rg=e=>JE(new Map,e)(0),fi="",{toString:GE}={},{keys:KE}=Object,Eo=e=>{const t=typeof e;if(t!=="object"||!e)return[dc,t];const n=GE.call(e).slice(8,-1);switch(n){case"Array":return[ts,fi];case"Object":return[jl,fi];case"Date":return[yf,fi];case"RegExp":return[vf,fi];case"Map":return[bf,fi];case"Set":return[wf,fi];case"DataView":return[ts,n]}return n.includes("Array")?[ts,n]:n.includes("Error")?[K1,n]:[jl,n]},ga=([e,t])=>e===dc&&(t==="function"||t==="symbol"),QE=(e,t,n,r)=>{const i=(a,l)=>{const c=r.push(a)-1;return n.set(l,c),c},s=a=>{if(n.has(a))return n.get(a);let[l,c]=Eo(a);switch(l){case dc:{let d=a;switch(c){case"bigint":l=Q1,d=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);d=null;break;case"undefined":return i([G1],a)}return i([l,d],a)}case ts:{if(c){let f=a;return c==="DataView"?f=new Uint8Array(a.buffer):c==="ArrayBuffer"&&(f=new Uint8Array(a)),i([c,[...f]],a)}const d=[],p=i([l,d],a);for(const f of a)d.push(s(f));return p}case jl:{if(c)switch(c){case"BigInt":return i([c,a.toString()],a);case"Boolean":case"Number":case"String":return i([c,a.valueOf()],a)}if(t&&"toJSON"in a)return s(a.toJSON());const d=[],p=i([l,d],a);for(const f of KE(a))(e||!ga(Eo(a[f])))&&d.push([s(f),s(a[f])]);return p}case yf:return i([l,a.toISOString()],a);case vf:{const{source:d,flags:p}=a;return i([l,{source:d,flags:p}],a)}case bf:{const d=[],p=i([l,d],a);for(const[f,h]of a)(e||!(ga(Eo(f))||ga(Eo(h))))&&d.push([s(f),s(h)]);return p}case wf:{const d=[],p=i([l,d],a);for(const f of a)(e||!ga(Eo(f)))&&d.push(s(f));return p}}const{message:u}=a;return i([l,{name:c,message:u}],a)};return s},Ig=(e,{json:t,lossy:n}={})=>{const r=[];return QE(!(t||n),!!t,new Map,r)(e),r},Sl=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Rg(Ig(e,t)):structuredClone(e):(e,t)=>Rg(Ig(e,t));function XE(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function ZE(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function ez(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||XE,r=e.options.footnoteBackLabel||ZE,i=e.options.footnoteLabel||"Footnotes",s=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let c=-1;for(;++c<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[c]);if(!u)continue;const d=e.all(u),p=String(u.identifier).toUpperCase(),f=fo(p.toLowerCase());let h=0;const m=[],b=e.footnoteCounts.get(p);for(;b!==void 0&&++h<=b;){m.length>0&&m.push({type:"text",value:" "});let y=typeof n=="string"?n:n(c,h);typeof y=="string"&&(y={type:"text",value:y}),m.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,h),className:["data-footnote-backref"]},children:Array.isArray(y)?y:[y]})}const k=d[d.length-1];if(k&&k.type==="element"&&k.tagName==="p"){const y=k.children[k.children.length-1];y&&y.type==="text"?y.value+=" ":k.children.push({type:"text",value:" "}),k.children.push(...m)}else d.push(...m);const x={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(u,x),l.push(x)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...Sl(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const X1=function(e){if(e==null)return iz;if(typeof e=="function")return pc(e);if(typeof e=="object")return Array.isArray(e)?tz(e):nz(e);if(typeof e=="string")return rz(e);throw new Error("Expected function, string, or object as test")};function tz(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=X1(e[n]);return pc(r);function r(...i){let s=-1;for(;++s<t.length;)if(t[s].apply(this,i))return!0;return!1}}function nz(e){const t=e;return pc(n);function n(r){const i=r;let s;for(s in e)if(i[s]!==t[s])return!1;return!0}}function rz(e){return pc(t);function t(n){return n&&n.type===e}}function pc(e){return t;function t(n,r,i){return!!(oz(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function iz(){return!0}function oz(e){return e!==null&&typeof e=="object"&&"type"in e}const Z1=[],sz=!0,Og=!1,az="skip";function lz(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const s=X1(i),a=r?-1:1;l(e,void 0,[])();function l(c,u,d){const p=c&&typeof c=="object"?c:{};if(typeof p.type=="string"){const h=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(c.type+(h?"<"+h+">":""))+")"})}return f;function f(){let h=Z1,m,b,k;if((!t||s(c,u,d[d.length-1]||void 0))&&(h=cz(n(c,d)),h[0]===Og))return h;if("children"in c&&c.children){const x=c;if(x.children&&h[0]!==az)for(b=(r?x.children.length:-1)+a,k=d.concat(x);b>-1&&b<x.children.length;){const y=x.children[b];if(m=l(y,b,k)(),m[0]===Og)return m;b=typeof m[1]=="number"?m[1]:b+a}}return h}}}function cz(e){return Array.isArray(e)?e:typeof e=="number"?[sz,e]:e==null?Z1:[e]}function eb(e,t,n,r){let i,s,a;typeof t=="function"&&typeof n!="function"?(s=void 0,a=t,i=n):(s=t,a=n,i=r),lz(e,s,l,i);function l(c,u){const d=u[u.length-1],p=d?d.children.indexOf(c):void 0;return a(c,p,d)}}const Id={}.hasOwnProperty,uz={};function dz(e,t){const n=t||uz,r=new Map,i=new Map,s=new Map,a={...YE,...n.handlers},l={all:u,applyData:fz,definitionById:r,footnoteById:i,footnoteCounts:s,footnoteOrder:[],handlers:a,one:c,options:n,patch:pz,wrap:mz};return eb(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:i,f=String(d.identifier).toUpperCase();p.has(f)||p.set(f,d)}}),l;function c(d,p){const f=d.type,h=l.handlers[f];if(Id.call(l.handlers,f)&&h)return h(l,d,p);if(l.options.passThrough&&l.options.passThrough.includes(f)){if("children"in d){const{children:b,...k}=d,x=Sl(k);return x.children=l.all(d),x}return Sl(d)}return(l.options.unknownHandler||hz)(l,d,p)}function u(d){const p=[];if("children"in d){const f=d.children;let h=-1;for(;++h<f.length;){const m=l.one(f[h],d);if(m){if(h&&f[h-1].type==="break"&&(!Array.isArray(m)&&m.type==="text"&&(m.value=$g(m.value)),!Array.isArray(m)&&m.type==="element")){const b=m.children[0];b&&b.type==="text"&&(b.value=$g(b.value))}Array.isArray(m)?p.push(...m):p.push(m)}}}return p}}function pz(e,t){e.position&&(t.position=GC(e))}function fz(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,s=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&s&&Object.assign(n.properties,Sl(s)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function hz(e,t){const n=t.data||{},r="value"in t&&!(Id.call(n,"hProperties")||Id.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function mz(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function $g(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Dg(e,t){const n=dz(e,t),r=n.one(e,void 0),i=ez(n),s=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&s.children.push({type:"text",value:`
`},i),s}function gz(e,t){return e&&"run"in e?async function(n,r){const i=Dg(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Dg(n,{file:r,...e||t})}}function Fg(e){if(e)throw e}var Ua=Object.prototype.hasOwnProperty,tb=Object.prototype.toString,Bg=Object.defineProperty,Ug=Object.getOwnPropertyDescriptor,Wg=function(t){return typeof Array.isArray=="function"?Array.isArray(t):tb.call(t)==="[object Array]"},Hg=function(t){if(!t||tb.call(t)!=="[object Object]")return!1;var n=Ua.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Ua.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||Ua.call(t,i)},Vg=function(t,n){Bg&&n.name==="__proto__"?Bg(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},qg=function(t,n){if(n==="__proto__")if(Ua.call(t,n)){if(Ug)return Ug(t,n).value}else return;return t[n]},xz=function e(){var t,n,r,i,s,a,l=arguments[0],c=1,u=arguments.length,d=!1;for(typeof l=="boolean"&&(d=l,l=arguments[1]||{},c=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});c<u;++c)if(t=arguments[c],t!=null)for(n in t)r=qg(l,n),i=qg(t,n),l!==i&&(d&&i&&(Hg(i)||(s=Wg(i)))?(s?(s=!1,a=r&&Wg(r)?r:[]):a=r&&Hg(r)?r:{},Vg(l,{name:n,newValue:e(d,a,i)})):typeof i<"u"&&Vg(l,{name:n,newValue:i}));return l};const su=Ul(xz);function Od(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function yz(){const e=[],t={run:n,use:r};return t;function n(...i){let s=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);l(null,...i);function l(c,...u){const d=e[++s];let p=-1;if(c){a(c);return}for(;++p<i.length;)(u[p]===null||u[p]===void 0)&&(u[p]=i[p]);i=u,d?vz(d,l)(...u):a(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function vz(e,t){let n;return r;function r(...a){const l=e.length>a.length;let c;l&&a.push(i);try{c=e.apply(this,a)}catch(u){const d=u;if(l&&n)throw d;return i(d)}l||(c&&c.then&&typeof c.then=="function"?c.then(s,i):c instanceof Error?i(c):s(c))}function i(a,...l){n||(n=!0,t(a,...l))}function s(a){i(null,a)}}const En={basename:bz,dirname:wz,extname:kz,join:_z,sep:"/"};function bz(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Ds(e);let n=0,r=-1,i=e.length,s;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else r<0&&(s=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let a=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else a<0&&(s=!0,a=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(r=i):(l=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function wz(e){if(Ds(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function kz(e){Ds(e);let t=e.length,n=-1,r=0,i=-1,s=0,a;for(;t--;){const l=e.codePointAt(t);if(l===47){if(a){r=t+1;break}continue}n<0&&(a=!0,n=t+1),l===46?i<0?i=t:s!==1&&(s=1):i>-1&&(s=-1)}return i<0||n<0||s===0||s===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function _z(...e){let t=-1,n;for(;++t<e.length;)Ds(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":jz(n)}function jz(e){Ds(e);const t=e.codePointAt(0)===47;let n=Sz(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function Sz(e,t){let n="",r=0,i=-1,s=0,a=-1,l,c;for(;++a<=e.length;){if(a<e.length)l=e.codePointAt(a);else{if(l===47)break;l=47}if(l===47){if(!(i===a-1||s===1))if(i!==a-1&&s===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),i=a,s=0;continue}}else if(n.length>0){n="",r=0,i=a,s=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,s=0}else l===46&&s>-1?s++:s=-1}return n}function Ds(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const Cz={cwd:Nz};function Nz(){return"/"}function $d(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function Ez(e){if(typeof e=="string")e=new URL(e);else if(!$d(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return zz(e)}function zz(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const au=["history","path","basename","stem","extname","dirname"];class nb{constructor(t){let n;t?$d(t)?n={path:t}:typeof t=="string"||Tz(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":Cz.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<au.length;){const s=au[r];s in n&&n[s]!==void 0&&n[s]!==null&&(this[s]=s==="history"?[...n[s]]:n[s])}let i;for(i in n)au.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?En.basename(this.path):void 0}set basename(t){cu(t,"basename"),lu(t,"basename"),this.path=En.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?En.dirname(this.path):void 0}set dirname(t){Yg(this.basename,"dirname"),this.path=En.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?En.extname(this.path):void 0}set extname(t){if(lu(t,"extname"),Yg(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=En.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){$d(t)&&(t=Ez(t)),cu(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?En.basename(this.path,this.extname):void 0}set stem(t){cu(t,"stem"),lu(t,"stem"),this.path=En.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new Ct(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function lu(e,t){if(e&&e.includes(En.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+En.sep+"`")}function cu(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Yg(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function Tz(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Mz=function(e){const r=this.constructor.prototype,i=r[e],s=function(){return i.apply(s,arguments)};return Object.setPrototypeOf(s,r),s},Az={}.hasOwnProperty;class kf extends Mz{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=yz()}copy(){const t=new kf;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(su(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(pu("data",this.frozen),this.namespace[t]=n,this):Az.call(this.namespace,t)&&this.namespace[t]||void 0:t?(pu("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=xa(t),r=this.parser||this.Parser;return uu("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),uu("process",this.parser||this.Parser),du("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(s,a){const l=xa(t),c=r.parse(l);r.run(c,l,function(d,p,f){if(d||!p||!f)return u(d);const h=p,m=r.stringify(h,f);Rz(m)?f.value=m:f.result=m,u(d,f)});function u(d,p){d||!p?a(d):s?s(p):n(void 0,p)}}}processSync(t){let n=!1,r;return this.freeze(),uu("processSync",this.parser||this.Parser),du("processSync",this.compiler||this.Compiler),this.process(t,i),Gg("processSync","process",n),r;function i(s,a){n=!0,Fg(s),r=a}}run(t,n,r){Jg(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?s(void 0,r):new Promise(s);function s(a,l){const c=xa(n);i.run(t,c,u);function u(d,p,f){const h=p||t;d?l(d):a?a(h):r(void 0,h,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,s),Gg("runSync","run",r),i;function s(a,l){Fg(a),i=l,r=!0}}stringify(t,n){this.freeze();const r=xa(n),i=this.compiler||this.Compiler;return du("stringify",i),Jg(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(pu("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function s(u){if(typeof u=="function")c(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...p]=u;c(d,p)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(i.settings=su(!0,i.settings,u.settings))}function l(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const p=u[d];s(p)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function c(u,d){let p=-1,f=-1;for(;++p<r.length;)if(r[p][0]===u){f=p;break}if(f===-1)r.push([u,...d]);else if(d.length>0){let[h,...m]=d;const b=r[f][1];Od(b)&&Od(h)&&(h=su(!0,b,h)),r[f]=[u,h,...m]}}}}const Lz=new kf().freeze();function uu(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function du(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function pu(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Jg(e){if(!Od(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Gg(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function xa(e){return Pz(e)?e:new nb(e)}function Pz(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Rz(e){return typeof e=="string"||Iz(e)}function Iz(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Oz="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Kg=[],Qg={allowDangerousHtml:!0},$z=/^(https?|ircs?|mailto|xmpp)$/i,Dz=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function rb(e){const t=Fz(e),n=Bz(e);return Uz(t.runSync(t.parse(n),n),e)}function Fz(e){const t=e.rehypePlugins||Kg,n=e.remarkPlugins||Kg,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Qg}:Qg;return Lz().use(wE).use(n).use(gz,r).use(t)}function Bz(e){const t=e.children||"",n=new nb;return typeof t=="string"&&(n.value=t),n}function Uz(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,s=t.disallowedElements,a=t.skipHtml,l=t.unwrapDisallowed,c=t.urlTransform||Wz;for(const d of Dz)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+Oz+d.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),eb(e,u),eN(e,{Fragment:o.Fragment,components:i,ignoreInvalidStyle:!0,jsx:o.jsx,jsxs:o.jsxs,passKeys:!0,passNode:!0});function u(d,p,f){if(d.type==="raw"&&f&&typeof p=="number")return a?f.children.splice(p,1):f.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let h;for(h in ru)if(Object.hasOwn(ru,h)&&Object.hasOwn(d.properties,h)){const m=d.properties[h],b=ru[h];(b===null||b.includes(d.tagName))&&(d.properties[h]=c(String(m||""),h,d))}}if(d.type==="element"){let h=n?!n.includes(d.tagName):s?s.includes(d.tagName):!1;if(!h&&r&&typeof p=="number"&&(h=!r(d,p,f)),h&&f&&typeof p=="number")return l&&d.children?f.children.splice(p,1,...d.children):f.children.splice(p,1),p}}}function Wz(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||$z.test(e.slice(0,t))?e:""}function Hz({value:e,onChange:t,placeholder:n="Write your content here...",minHeight:r=200}){const[i,s]=w.useState(!1),[a,l]=w.useState(r),c=w.useRef(null),u=w.useRef(null);w.useEffect(()=>{if(e){const f=e.split(`
`).length,h=Math.max(r,Math.min(f*20+40,500));l(h)}},[e,r]),w.useEffect(()=>{i&&u.current&&u.current.focus()},[i]);function d(f){u.current=f,f.focus()}function p(f){c.current&&!c.current.contains(f.target)&&s(!1)}return w.useEffect(()=>{if(i)return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[i]),o.jsxs("div",{ref:c,className:"markdown-editor",children:[o.jsx("style",{children:`
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
      `}),i?o.jsx("div",{className:"monaco-wrapper",children:o.jsx(cn,{height:"100%",language:"markdown",theme:"vs-dark",value:e,onChange:f=>t(f||""),onMount:d,options:{minimap:{enabled:!1},fontSize:14,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"off",scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",padding:{top:12,bottom:12},lineDecorationsWidth:8,folding:!1,glyphMargin:!1,renderLineHighlight:"none",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,scrollbar:{vertical:"auto",horizontal:"hidden"}}})}):o.jsxs("div",{className:"markdown-preview",onClick:()=>s(!0),children:[o.jsxs("span",{className:"edit-hint",children:[o.jsx(Lj,{size:12}),"Click to edit"]}),e?o.jsx("div",{className:"markdown-content",children:o.jsx(rb,{children:e})}):o.jsx("div",{className:"markdown-placeholder",children:n})]})]})}function Xg(e){return/^[a-zA-Z0-9_]+$/.test(e)}function Vz({agent:e}){const{project:t,updateAgent:n,mcpServers:r,builtinTools:i,setActiveTab:s,setRunAgentId:a}=St(),[l,c]=w.useState(new Set(["basic","tools","subagents","instruction"])),[u,d]=w.useState(!1),[p,f]=w.useState(!1),[h,m]=w.useState(!1),[b,k]=w.useState(""),[x,y]=w.useState(null),[v,j]=w.useState(e.name),[T,_]=w.useState(e.output_key||"");if(w.useEffect(()=>{j(e.name),_(e.output_key||"")},[e.id]),!t)return null;function A(z){n(e.id,z)}function E(z){if(j(z),z===""){y(null),A({name:z});return}Xg(z)?y(null):y("Name can only contain letters, numbers, and underscores"),A({name:z})}function W(){e.type==="LlmAgent"&&v&&Xg(v)&&A({output_key:v})}function C(z){const S=new Set(l);S.has(z)?S.delete(z):S.add(z),c(S)}const R=e.type==="LlmAgent",H=e;function Q(z){R&&A({tools:[...H.tools,z]})}function M(z){R&&A({tools:H.tools.filter((S,D)=>D!==z)})}function F(z,S){if(!R)return;const D=[...H.tools];D[z]=S,A({tools:D})}function O(z){"sub_agents"in e&&A({sub_agents:[...e.sub_agents,z]})}function L(z){"sub_agents"in e&&A({sub_agents:e.sub_agents.filter(S=>S!==z)})}const B=t.agents.filter(z=>z.id!==e.id);async function $(){if(!(!t||!R)){d(!0);try{const z=H.instruction||"",S=z?`Current instruction to improve:

${z}

Please improve and expand this instruction while preserving its core intent.`:void 0,Z=t.agents.some(ue=>ue.id===e.id)?void 0:e,ne=await Fa(t.id,e.id,S,Z);ne.success&&ne.prompt?A({instruction:ne.prompt}):alert("Failed to generate prompt: "+(ne.error||"Unknown error"))}catch(z){alert("Error generating prompt: "+z.message)}finally{d(!1)}}}async function g(){if(!(!t||!R||!b.trim())){d(!0);try{const S=`Current instruction:

${H.instruction||""}

---

Requested changes:
${b}

Please apply the requested changes to the instruction above. Output only the updated instruction, nothing else.`,Z=t.agents.some(ue=>ue.id===e.id)?void 0:e,ne=await Fa(t.id,e.id,S,Z);ne.success&&ne.prompt?(A({instruction:ne.prompt}),m(!1),k("")):alert("Failed to apply changes: "+(ne.error||"Unknown error"))}catch(z){alert("Error applying changes: "+z.message)}finally{d(!1)}}}async function P(){if(!t||!R)return;const z=H.instruction;if(!z){alert("Please write an instruction first");return}f(!0);try{const S=`Write a 5-10 word description of what this agent does.

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

Your response (5-10 words only):`,D=await Fa(t.id,e.id,S);if(D.success&&D.prompt){let Z=D.prompt.trim();Z=Z.replace(/^["']|["']$/g,"").trim();const ne=Z.split(/[.!?\n]/)[0].trim(),ue=ne.length>80?ne.slice(0,77)+"...":ne;A({description:ue})}else alert("Failed to generate description: "+(D.error||"Unknown error"))}catch(S){alert("Error generating description: "+S.message)}finally{f(!1)}}return o.jsxs("div",{className:"agent-editor",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"editor-header",children:[o.jsx(Hr,{size:24,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o.jsx("input",{type:"text",value:v,onChange:z=>E(z.target.value),onBlur:W,placeholder:"Agent name",style:{borderColor:x?"var(--error)":void 0}}),x&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:x})]}),o.jsx("span",{className:"badge badge-info",children:e.type}),o.jsxs("button",{className:"btn btn-primary btn-sm run-agent-btn",onClick:()=>{a(e.id),s("run")},title:"Test this agent",children:[o.jsx(Cr,{size:14}),"Run"]})]}),o.jsxs("div",{className:"editor-content",children:[o.jsxs(hi,{id:"basic",title:"Basic Info",icon:o.jsx(Hr,{size:16}),expanded:l.has("basic"),onToggle:()=>C("basic"),children:[o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group full-width",children:[o.jsxs("div",{className:"label-with-action",children:[o.jsx("label",{children:"Description"}),R&&H.instruction&&o.jsx("button",{className:"btn btn-secondary btn-sm generate-btn",onClick:P,disabled:p,title:"Generate description from instruction",children:p?o.jsxs(o.Fragment,{children:[o.jsx(fr,{size:14,className:"spin"}),"Summarizing..."]}):"Summarize"})]}),o.jsx("input",{type:"text",value:e.description,onChange:z=>A({description:z.target.value}),placeholder:"e.g., Reviews code for bugs and suggests fixes"})]})}),R&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Output Key"}),o.jsx("input",{type:"text",list:`output-key-suggestions-${e.id}`,value:T,onChange:z=>_(z.target.value),onBlur:z=>{const S=z.target.value.trim();S!==(H.output_key||"")&&A({output_key:S||void 0})},placeholder:"Enter key name or select existing"}),o.jsx("datalist",{id:`output-key-suggestions-${e.id}`,children:t.app.state_keys.map(z=>o.jsx("option",{value:z.name},z.name))})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Include Contents"}),o.jsxs("select",{value:H.include_contents,onChange:z=>A({include_contents:z.target.value}),children:[o.jsx("option",{value:"default",children:"Default"}),o.jsx("option",{value:"none",children:"None"})]})]})]}),o.jsxs("div",{className:"form-row",style:{gap:24},children:[o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:H.disallow_transfer_to_parent,onChange:z=>A({disallow_transfer_to_parent:z.target.checked})}),o.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to parent"]}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:H.disallow_transfer_to_peers,onChange:z=>A({disallow_transfer_to_peers:z.target.checked})}),o.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to peers"]})]})]}),e.type==="LoopAgent"&&o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Max Iterations"}),o.jsx("input",{type:"number",value:e.max_iterations||"",onChange:z=>A({max_iterations:parseInt(z.target.value)||void 0}),placeholder:"No limit"})]})})]}),R&&o.jsx(hi,{id:"model",title:"Model",icon:o.jsx(tf,{size:16}),expanded:l.has("model"),onToggle:()=>C("model"),children:o.jsx(Yz,{agent:H,appModels:t.app.models||[],defaultModelId:t.app.default_model_id,projectId:t.id,onUpdate:z=>A({model:z})})}),o.jsxs("div",{style:{display:"flex",gap:16},children:["sub_agents"in e&&o.jsx("div",{style:{flex:1},children:o.jsx(hi,{id:"subagents",title:`Sub-Agents (${e.sub_agents.length})`,icon:o.jsx(d1,{size:16}),expanded:l.has("subagents"),onToggle:()=>C("subagents"),children:o.jsxs("div",{className:"sub-agent-list",children:[e.sub_agents.map(z=>{const S=t.agents.find(D=>D.id===z);return S?o.jsxs("div",{className:"sub-agent-chip",children:[S.name,o.jsx("button",{onClick:()=>L(z),children:o.jsx(Je,{size:12})})]},z):null}),o.jsxs("select",{value:"",onChange:z=>{z.target.value&&O(z.target.value)},style:{width:150,padding:"6px 10px",fontSize:13},children:[o.jsx("option",{value:"",children:"Add agent..."}),B.filter(z=>!e.sub_agents.includes(z.id)).map(z=>o.jsx("option",{value:z.id,children:z.name},z.id))]})]})})}),R&&o.jsx("div",{style:{flex:1},children:o.jsx(hi,{id:"tools",title:`Tools (${H.tools.length})`,icon:o.jsx(kn,{size:16}),expanded:l.has("tools"),onToggle:()=>C("tools"),children:o.jsx(qz,{tools:H.tools,onAdd:Q,onRemove:M,onUpdate:F,builtinTools:i,mcpServers:r,projectMcpServers:t.mcp_servers,customTools:t.custom_tools,agents:B,skillsets:t.skillsets||[]})})})]}),o.jsx(hi,{id:"callbacks",title:"Callbacks",icon:o.jsx(Rn,{size:16}),expanded:l.has("callbacks"),onToggle:()=>C("callbacks"),children:o.jsx(Jz,{agent:e,onUpdate:A,customCallbacks:t.custom_callbacks||[],isLlmAgent:R})}),R&&o.jsx(hi,{id:"instruction",title:"Instruction",icon:o.jsx(n1,{size:16}),expanded:l.has("instruction"),onToggle:()=>C("instruction"),children:o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group full-width",children:[o.jsx("div",{className:"label-with-action",children:o.jsxs("div",{className:"action-buttons",children:[o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>m(!h),disabled:u||!H.instruction,title:"Request specific changes to the instruction",children:"Request Changes"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:$,disabled:u,title:"Uses AI to improve and expand the current instruction",children:u?o.jsxs(o.Fragment,{children:[o.jsx(fr,{size:14,className:"spin"}),"Working..."]}):"Auto-Improve"})]})}),h&&o.jsxs("div",{className:"request-changes-box",children:[o.jsx("input",{type:"text",value:b,onChange:z=>k(z.target.value),placeholder:"Describe what changes you want...",onKeyDown:z=>{z.key==="Enter"&&b.trim()?g():z.key==="Escape"&&(m(!1),k(""))},autoFocus:!0}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:g,disabled:u||!b.trim(),children:"Apply"})]}),o.jsx(Hz,{value:H.instruction,onChange:z=>A({instruction:z}),placeholder:"Write your agent's instruction here... (Markdown supported)",minHeight:200})]})})})]})]})}function hi({id:e,title:t,icon:n,expanded:r,onToggle:i,children:s}){return o.jsxs("div",{className:"section",children:[o.jsxs("div",{className:"section-header",onClick:i,children:[r?o.jsx(Et,{size:16}):o.jsx(zt,{size:16}),o.jsxs("h4",{children:[n," ",t]})]}),r&&o.jsx("div",{className:"section-content",children:s})]})}function qz({tools:e,onAdd:t,onRemove:n,onUpdate:r,builtinTools:i,mcpServers:s,projectMcpServers:a,customTools:l,agents:c,skillsets:u}){const[d,p]=w.useState(!1),[f,h]=w.useState({}),[m,b]=w.useState(""),k=Xt.useRef(null),x=Xt.useRef(null),[y,v]=w.useState(null),[j,T]=w.useState(new Set),_=(D,Z)=>{if(!m.trim())return!0;const ne=m.toLowerCase();return D.toLowerCase().includes(ne)||((Z==null?void 0:Z.toLowerCase().includes(ne))??!1)},A=i.filter(D=>_(D.name,D.description)),E=a.filter(D=>_(D.name,D.description)),W=l.filter(D=>_(D.name,D.description)),C=c.filter(D=>_(D.name,D.description)),R=u.filter(D=>_(D.name,D.description));function H(){if(k.current){const D=k.current.getBoundingClientRect(),Z=window.innerHeight,ne=350,ue=Z-D.bottom-16,_e=D.top-16;if(ue>=200||ue>=_e){const Y=Math.min(ne,ue);h({top:D.bottom+4,left:D.left,maxHeight:Y})}else{const Y=Math.min(ne,_e);h({top:D.top-Y-4,left:D.left,maxHeight:Y})}}p(!0),b(""),setTimeout(()=>{var D;return(D=x.current)==null?void 0:D.focus()},50)}function Q(){p(!1),b("")}function M(D){t({type:"builtin",name:D}),Q()}async function F(D){Q();const Z=D.tool_filter||[];if(v({server:D,enabledTools:new Set(Z),availableTools:Z.map(ne=>({name:ne,description:""})),isLoading:Z.length===0,error:void 0}),Z.length===0)try{const{testMcpServer:ne}=await Gj(async()=>{const{testMcpServer:_e}=await Promise.resolve().then(()=>vj);return{testMcpServer:_e}},void 0),ue=await ne({connection_type:D.connection_type,command:D.command,args:D.args,env:D.env,url:D.url,headers:D.headers,timeout:D.timeout||30});ue.success?v(_e=>_e?{..._e,availableTools:ue.tools,enabledTools:new Set(ue.tools.map(Y=>Y.name)),isLoading:!1}:null):v(_e=>_e?{..._e,isLoading:!1,error:ue.error||"Failed to connect to MCP server"}:null)}catch(ne){v(ue=>ue?{...ue,isLoading:!1,error:ne.message}:null)}}function O(D){if(!y)return;const Z=new Set(y.enabledTools);Z.has(D)?Z.delete(D):Z.add(D),v({...y,enabledTools:Z})}function L(){if(!y)return;const D=Array.from(y.enabledTools);t({type:"mcp",server:{...y.server,tool_filter:D}}),v(null)}function B(D){const Z=new Set(j);Z.has(D)?Z.delete(D):Z.add(D),T(Z)}function $(D,Z){const ne=e[D];if(ne.type!=="mcp"||!ne.server)return;const ue=ne.server.tool_filter||[];let _e;ue.includes(Z)?_e=ue.filter(Y=>Y!==Z):_e=[...ue,Z],r(D,{...ne,server:{...ne.server,tool_filter:_e}})}function g(D){t({type:"function",name:D.name,module_path:D.module_path}),Q()}function P(D){const Z=c.find(ne=>ne.id===D);t({type:"agent",agent_id:D,name:Z==null?void 0:Z.name}),Q()}function z(D){const Z=u.find(ne=>ne.id===D);t({type:"skillset",skillset_id:D,name:Z==null?void 0:Z.name}),Q()}function S(D){return s.find(Z=>Z.name===D)}return o.jsxs("div",{children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"tool-list",children:e.map((D,Z)=>{var ne;return D.type==="mcp"&&D.server?o.jsxs("div",{className:"mcp-tool-item",children:[o.jsxs("div",{className:"mcp-tool-header",onClick:()=>B(Z),children:[j.has(Z)?o.jsx(Et,{size:14}):o.jsx(zt,{size:14}),o.jsx(kn,{size:14,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{className:"mcp-tool-info",children:[o.jsx("div",{className:"mcp-tool-name",children:D.server.name}),o.jsx("div",{className:"mcp-tool-count",children:D.server.tool_filter===null||D.server.tool_filter===void 0?"all tools":`${D.server.tool_filter.length} tools enabled`})]}),o.jsx("button",{className:"delete-btn",onClick:ue=>{ue.stopPropagation(),n(Z)},children:o.jsx(Je,{size:14})})]}),j.has(Z)&&o.jsx("div",{className:"mcp-tool-body",children:o.jsx("div",{className:"mcp-tool-list",children:(()=>{const ue=S(D.server.name),_e=(ue==null?void 0:ue.tool_filter)||D.server.tool_filter||[],Y=new Set(D.server.tool_filter||[]);return _e.map(re=>o.jsxs("label",{className:`mcp-tool-chip ${Y.has(re)?"enabled":"disabled"}`,onClick:()=>$(Z,re),children:[o.jsx("input",{type:"checkbox",checked:Y.has(re),onChange:()=>{},style:{display:"none"}}),re]},re))})()})})]},Z):D.type==="skillset"?o.jsxs("div",{className:"tool-item",children:[o.jsx(Gn,{size:14,style:{color:"var(--accent)"}}),o.jsxs("div",{className:"tool-item-info",children:[o.jsx("div",{className:"tool-item-name",children:D.name||((ne=u.find(ue=>ue.id===D.skillset_id))==null?void 0:ne.name)||"SkillSet"}),o.jsx("div",{className:"tool-item-type",children:"skillset"})]}),o.jsx("button",{className:"delete-btn",onClick:()=>n(Z),children:o.jsx(Je,{size:14})})]},Z):o.jsxs("div",{className:"tool-item",children:[o.jsx(kn,{size:14,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{className:"tool-item-info",children:[o.jsx("div",{className:"tool-item-name",children:D.name||D.agent_id}),o.jsx("div",{className:"tool-item-type",children:D.type})]}),o.jsx("button",{className:"delete-btn",onClick:()=>n(Z),children:o.jsx(Je,{size:14})})]},Z)})}),o.jsxs("div",{className:"add-tool-dropdown",style:{marginTop:12},children:[o.jsxs("button",{ref:k,className:"btn btn-secondary btn-sm",onClick:()=>d?Q():H(),children:[o.jsx(it,{size:14}),"Add Tool"]}),d&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"dropdown-backdrop",onClick:Q}),o.jsxs("div",{className:"dropdown-content dropdown-fixed",style:f,children:[o.jsx("div",{className:"dropdown-search",children:o.jsx("input",{ref:x,type:"text",placeholder:"Search tools...",value:m,onChange:D=>b(D.target.value),onKeyDown:D=>D.key==="Escape"&&Q()})}),A.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Built-in Tools"}),A.map(D=>o.jsxs("button",{className:"dropdown-item",onClick:()=>M(D.name),children:[o.jsx("div",{className:"dropdown-item-name",children:D.name}),o.jsx("div",{className:"dropdown-item-desc",children:D.description})]},D.name))]}),E.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsxs("h5",{children:["Project MCP Servers (",E.length,")"]}),E.map(D=>o.jsxs("button",{className:"dropdown-item",onClick:()=>F(D),children:[o.jsxs("div",{className:"dropdown-item-name",children:[D.name,o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:D.tool_filter===null||D.tool_filter===void 0?"all tools":`${D.tool_filter.length} tools`})]}),o.jsx("div",{className:"dropdown-item-desc",children:D.description||"Custom MCP server"})]},`project-${D.id||D.name}`))]}),W.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Custom Tools"}),W.map(D=>o.jsxs("button",{className:"dropdown-item",onClick:()=>g(D),children:[o.jsx("div",{className:"dropdown-item-name",children:D.name}),o.jsx("div",{className:"dropdown-item-desc",children:D.description})]},D.id))]}),C.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Agents as Tools"}),C.map(D=>o.jsxs("button",{className:"dropdown-item",onClick:()=>P(D.id),children:[o.jsx("div",{className:"dropdown-item-name",children:D.name}),o.jsx("div",{className:"dropdown-item-desc",children:D.type})]},D.id))]}),R.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsxs("h5",{children:["SkillSets (",R.length,")"]}),R.map(D=>o.jsxs("button",{className:"dropdown-item",onClick:()=>z(D.id),children:[o.jsxs("div",{className:"dropdown-item-name",children:[D.name,o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:[D.entry_count||0," entries"]})]}),o.jsx("div",{className:"dropdown-item-desc",children:D.description||"Vector knowledge base"})]},D.id))]}),m.trim()&&A.length===0&&E.length===0&&W.length===0&&C.length===0&&R.length===0&&o.jsxs("div",{className:"dropdown-section",style:{textAlign:"center",padding:"20px",color:"var(--text-muted)"},children:['No tools matching "',m,'"']})]})]})]}),y&&o.jsx("div",{className:"mcp-config-dialog",children:o.jsxs("div",{className:"mcp-config-content",children:[o.jsxs("h3",{children:["Configure ",y.server.name]}),o.jsx("p",{children:y.server.description}),y.isLoading?o.jsxs("div",{className:"mcp-loading",children:[o.jsx("div",{className:"spinner"}),o.jsx("p",{children:"Connecting to MCP server and discovering tools..."})]}):y.error?o.jsxs("div",{className:"mcp-error",children:[o.jsxs("p",{children:["⚠️ Failed to discover tools: ",y.error]}),o.jsx("p",{className:"hint",children:"You can still add the server, but you won't be able to select specific tools."})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"mcp-select-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>v({...y,enabledTools:new Set(y.availableTools.map(D=>D.name))}),children:["Select All (",y.availableTools.length,")"]}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>v({...y,enabledTools:new Set}),children:"Select None"})]}),o.jsx("div",{className:"mcp-tools-grid",children:y.availableTools.map(D=>o.jsxs("div",{className:"mcp-tool-row",title:D.description||D.name,style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:y.enabledTools.has(D.name),onChange:()=>O(D.name)}),o.jsx("span",{className:"toggle-slider"})]}),o.jsx("span",{style:{fontSize:13,opacity:y.enabledTools.has(D.name)?1:.5,cursor:"pointer"},onClick:()=>O(D.name),children:D.name})]},D.name))})]}),o.jsxs("div",{className:"dialog-actions",children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>v(null),children:"Cancel"}),o.jsxs("button",{className:"btn btn-primary",onClick:L,disabled:y.enabledTools.size===0,children:["Add ",y.enabledTools.size," Tools"]})]})]})})]})}function Yz({agent:e,appModels:t,defaultModelId:n,projectId:r,onUpdate:i}){var f,h;const s=(f=e.model)==null?void 0:f._appModelId,a=e.model!==null&&e.model!==void 0&&!s,c=s||(()=>{if(!e.model)return n;const m=t.find(b=>{var k,x,y;return b.provider===((k=e.model)==null?void 0:k.provider)&&b.model_name===((x=e.model)==null?void 0:x.model_name)&&b.api_base===((y=e.model)==null?void 0:y.api_base)});return m==null?void 0:m.id})()||n||((h=t[0])==null?void 0:h.id);Xt.useEffect(()=>{var m,b,k,x,y;if(s){const v=t.find(j=>j.id===s);v&&(((m=e.model)==null?void 0:m.provider)!==v.provider||((b=e.model)==null?void 0:b.model_name)!==v.model_name||((k=e.model)==null?void 0:k.api_base)!==v.api_base||((x=e.model)==null?void 0:x.temperature)!==v.temperature||((y=e.model)==null?void 0:y.max_output_tokens)!==v.max_output_tokens)&&i({provider:v.provider,model_name:v.model_name,api_base:v.api_base,temperature:v.temperature,max_output_tokens:v.max_output_tokens,top_p:v.top_p,top_k:v.top_k,fallbacks:[],_appModelId:s})}},[s,t,e.model,i]);function u(m){const b=t.find(k=>k.id===m);b&&i({provider:b.provider,model_name:b.model_name,api_base:b.api_base,temperature:b.temperature,max_output_tokens:b.max_output_tokens,top_p:b.top_p,top_k:b.top_k,fallbacks:[],_appModelId:m})}function d(){var m;if(a){const b=n||((m=t[0])==null?void 0:m.id);b&&u(b)}else{const b=e.model;if(b){const{_appModelId:k,...x}=b;i(x)}else i({provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]})}}function p(m){const{_appModelId:b,...k}=e.model||{};i({...k,...m})}return t.find(m=>m.id===c),t.find(m=>m.id===n),o.jsxs("div",{className:"model-selector",children:[o.jsx("style",{children:`
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
      `}),t.length>0&&o.jsxs("div",{className:"model-choice",children:[o.jsxs("div",{className:`model-option ${a?"":"selected"}`,onClick:()=>!a||d(),children:[o.jsx("div",{className:"model-option-label",children:"Use App Model"}),o.jsx("div",{className:"model-option-desc",children:"Select from configured models"})]}),o.jsxs("div",{className:`model-option ${a?"selected":""}`,onClick:()=>a||d(),children:[o.jsx("div",{className:"model-option-label",children:"Custom"}),o.jsx("div",{className:"model-option-desc",children:"Configure model manually"})]})]}),!a&&t.length>0?o.jsx("div",{className:"app-model-select",children:t.map(m=>o.jsx("div",{className:`app-model-item ${c===m.id?"selected":""}`,onClick:()=>u(m.id),children:o.jsxs("div",{className:"app-model-item-info",children:[o.jsxs("div",{className:"app-model-item-name",children:[m.name,m.id===n&&o.jsxs("span",{className:"default-badge",children:[o.jsx(u1,{size:10,fill:"currentColor"}),"Default"]})]}),o.jsxs("div",{className:"app-model-item-details",children:[m.provider," / ",m.model_name,m.api_base&&` • ${m.api_base}`]})]})},m.id))}):t.length===0?o.jsx("div",{className:"no-models-message",children:"No models configured in App Config. Configure models there first, or use custom settings below."}):null,(a||t.length===0)&&o.jsx("div",{className:"custom-model-form",children:o.jsx(p1,{projectId:r,values:e.model||{},onChange:p})})]})}const fu=[{id:"builtin_exit_loop",name:"exit_on_EXIT_LOOP_NOW",description:'Exits LoopAgent when model says "EXIT LOOP NOW". Use as after_model_callback.',module_path:"exit_on_EXIT_LOOP_NOW",code:"",state_keys_used:[]}];function Jz({agent:e,onUpdate:t,customCallbacks:n,isLlmAgent:r}){const i=[...fu,...n],s=[{key:"before_agent_callbacks",label:"Before Agent"},{key:"after_agent_callbacks",label:"After Agent"}],a=[{key:"before_model_callbacks",label:"Before Model"},{key:"after_model_callbacks",label:"After Model"},{key:"before_tool_callbacks",label:"Before Tool"},{key:"after_tool_callbacks",label:"After Tool"}],l=r?[...s,...a]:s;function c(d,p){const f=e[d]||[],h=i.find(m=>m.id===p);h&&t({[d]:[...f,{module_path:h.module_path}]})}function u(d,p){const f=e[d]||[];t({[d]:f.filter((h,m)=>m!==p)})}return o.jsx("div",{className:"callbacks-editor",children:l.map(({key:d,label:p})=>{const f=e[d]||[],h=i;return o.jsxs("div",{className:"callback-type-group",style:{marginBottom:"20px"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[o.jsx("label",{style:{fontWeight:500,fontSize:"13px"},children:p}),h.length>0&&o.jsxs("select",{value:"",onChange:m=>{m.target.value&&(c(d,m.target.value),m.target.value="")},style:{padding:"4px 8px",fontSize:"12px",width:"200px"},children:[o.jsx("option",{value:"",children:"Add callback..."}),o.jsx("optgroup",{label:"Built-in",children:fu.filter(m=>!f.some(b=>b.module_path===m.module_path)).map(m=>o.jsx("option",{value:m.id,children:m.name},m.id))}),o.jsx("optgroup",{label:"Custom",children:n.filter(m=>!f.some(b=>b.module_path===m.module_path)).map(m=>o.jsx("option",{value:m.id,children:m.name},m.id))})]})]}),f.length===0?o.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",fontStyle:"italic",padding:"8px"},children:"No callbacks"}):o.jsx("div",{className:"callback-list",children:f.map((m,b)=>{const k=i.find(y=>y.module_path===m.module_path),x=fu.some(y=>y.module_path===m.module_path);return o.jsxs("div",{className:"callback-chip",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 10px",background:x?"var(--accent-bg, #1a365d)":"var(--bg-secondary)",borderRadius:"4px",marginBottom:"4px"},title:(k==null?void 0:k.description)||"",children:[o.jsxs("span",{style:{fontSize:"12px",display:"flex",alignItems:"center",gap:"6px"},children:[x&&o.jsx("span",{style:{fontSize:"9px",padding:"1px 4px",background:"var(--accent-color, #3182ce)",borderRadius:"3px",textTransform:"uppercase",fontWeight:600},children:"built-in"}),(k==null?void 0:k.name)||m.module_path]}),o.jsx("button",{onClick:()=>u(d,b),style:{background:"none",border:"none",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},title:"Remove callback",children:o.jsx(Je,{size:12})})]},b)})})]},d)})})}const hu=[{type:"LlmAgent",label:"LLM Agent",icon:Hr,color:"#00f5d4",description:"AI-powered agent with model reasoning"},{type:"SequentialAgent",label:"Sequential",icon:$j,color:"#7b2cbf",description:"Run sub-agents in order"},{type:"LoopAgent",label:"Loop",icon:Rj,color:"#ffd93d",description:"Repeat sub-agents until exit"},{type:"ParallelAgent",label:"Parallel",icon:Sd,color:"#ff6b6b",description:"Run sub-agents simultaneously"}];function Gz(){return`agent_${Date.now().toString(36)}`}function Kz(e){return{provider:e.provider,model_name:e.model_name,api_base:e.api_base,temperature:e.temperature,max_output_tokens:e.max_output_tokens,top_p:e.top_p,top_k:e.top_k,fallbacks:[]}}function Qz(e,t){const n=Gz(),r={LlmAgent:"new_agent",SequentialAgent:"new_sequence",LoopAgent:"new_loop",ParallelAgent:"new_parallel"},i={id:n,name:r[e]||"new_agent",description:""},s=t?Kz(t):{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]};switch(e){case"LlmAgent":return{...i,type:"LlmAgent",model:s,instruction:"",include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:[],sub_agents:[],output_key:r[e]||"new_agent",before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};case"SequentialAgent":return{...i,type:"SequentialAgent",sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[]};case"LoopAgent":return{...i,type:"LoopAgent",sub_agents:[],max_iterations:10,before_agent_callbacks:[],after_agent_callbacks:[]};case"ParallelAgent":return{...i,type:"ParallelAgent",sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[]};default:throw new Error(`Unknown agent type: ${e}`)}}function Xz({onSelectAgent:e}){const{project:t,addAgent:n,removeAgent:r,updateAgent:i,updateProject:s,selectedAgentId:a,setSelectedAgentId:l,mcpServers:c}=St(),[u,d]=w.useState(new Set),[p,f]=w.useState(!1),[h,m]=w.useState(""),[b,k]=w.useState(new Map),[x,y]=w.useState(380),[v,j]=w.useState(!1),T=w.useRef(null),[_,A]=w.useState(null),E=w.useRef(null),[W,C]=w.useState(null),[R,H]=w.useState(null),Q=w.useRef(null),M=w.useRef(null),F=w.useCallback(I=>{I.preventDefault(),j(!0)},[]);if(w.useEffect(()=>{const I=U=>{if(!v)return;const J=Math.min(Math.max(200,U.clientX),600);y(J)},N=()=>{j(!1)};return v&&(document.addEventListener("mousemove",I),document.addEventListener("mouseup",N),document.body.style.cursor="col-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",N),document.body.style.cursor="",document.body.style.userSelect=""}},[v]),w.useEffect(()=>{if(t){const I=t.agents.filter(N=>"sub_agents"in N&&N.sub_agents.length>0).map(N=>N.id);d(new Set(I))}},[t==null?void 0:t.id,t==null?void 0:t.agents.length]),!t)return null;const O=w.useMemo(()=>new Map(t.agents.map(I=>[I.id,I])),[t.agents]);function L(){if(!h.trim()||!t)return;const I=`generating_${Date.now()}`,N=h;k(U=>new Map(U).set(I,N)),f(!1),m(""),W0(t.id,N).then(U=>{var J,se,K,te;if(U.success&&U.config){const ve=U.config,Se=[];if((J=ve.tools)!=null&&J.builtin)for(const be of ve.tools.builtin)Se.push({type:"builtin",name:be});if((se=ve.tools)!=null&&se.mcp)for(const be of ve.tools.mcp){const ze=c.find(pe=>pe.name===be.server);ze&&Se.push({type:"mcp",server:{...ze,tool_filter:be.tools}})}if((K=ve.tools)!=null&&K.custom)for(const be of ve.tools.custom){const ze=t.custom_tools.find(pe=>pe.name===be);ze&&Se.push({type:"function",name:be,module_path:ze.module_path})}if((te=ve.tools)!=null&&te.agents)for(const be of ve.tools.agents){const ze=t.agents.find(pe=>pe.id===be);ze&&Se.push({type:"agent",agent_id:be,name:ze.name})}const Ee=t.app.models||[],De=Ee.find(be=>be.id===t.app.default_model_id)||Ee[0],ht=ve.name||"new_agent",et={id:`agent_${Date.now().toString(36)}`,type:"LlmAgent",name:ht,description:ve.description||"",instruction:ve.instruction||"",output_key:ve.output_key||ht,model:De?{provider:De.provider,model_name:De.model_name,api_base:De.api_base,temperature:De.temperature,max_output_tokens:De.max_output_tokens,top_p:De.top_p,top_k:De.top_k,fallbacks:[]}:{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]},include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:Se,sub_agents:ve.sub_agents||[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};n(et),l(et.id),e==null||e(et.id)}else console.error("Failed to generate agent:",U.error)}).catch(U=>{console.error("Error generating agent:",U)}).finally(()=>{k(U=>{const J=new Map(U);return J.delete(I),J})})}const B=t.agents.find(I=>I.id===a);function $(I){l(I),e==null||e(I)}function g(I){if(!t)return;const N=t.app.models||[],U=N.find(se=>se.id===t.app.default_model_id)||N[0],J=Qz(I,U);n(J),$(J.id)}function P(I,N){N.stopPropagation(),confirm("Delete this agent?")&&(r(I),a===I&&(e==null||e(null)))}function z(I){const N=new Set(u);N.has(I)?N.delete(I):N.add(I),d(N)}function S(){if(!t)return;const I={name:`state_key_${t.app.state_keys.length+1}`,description:"",type:"string",scope:"session"};s({app:{...t.app,state_keys:[...t.app.state_keys,I]}})}function D(I,N){if(!t)return;const U=[...t.app.state_keys];U[I]={...U[I],...N},s({app:{...t.app,state_keys:U}})}function Z(I){t&&s({app:{...t.app,state_keys:t.app.state_keys.filter((N,U)=>U!==I)}})}function ne(I){if(!Q.current||!E.current)return;const N=Q.current.getBoundingClientRect(),U=I.clientY-N.top,J=60,se=8;if(U<J){const K=Math.max(1,se*(1-U/J));Q.current.scrollTop-=K}else if(U>N.height-J){const K=Math.max(1,se*(1-(N.height-U)/J));Q.current.scrollTop+=K}}function ue(I,N){I.dataTransfer.setData("text/plain",N),I.dataTransfer.effectAllowed="move",E.current=N,requestAnimationFrame(()=>A(N))}function _e(){E.current=null,A(null),C(null),H(null),M.current&&(cancelAnimationFrame(M.current),M.current=null)}function Y(I,N,U){if(!t)return;I.preventDefault(),I.stopPropagation();const J=E.current;if(!J)return;const se=t.agents.find(K=>K.id===N);!se||!("sub_agents"in se)||ye(J,N)||(I.dataTransfer.dropEffect="move",H({parentId:N,index:U}),C(null))}function re(I,N,U){if(!t)return;I.preventDefault(),I.stopPropagation();const J=I.dataTransfer.getData("text/plain");if(!J)return;if(J===N||ye(J,N)){H(null);return}const se=t.agents.find(te=>te.id===N);if(!se||!("sub_agents"in se))return;t.agents.forEach(te=>{"sub_agents"in te&&te.sub_agents.includes(J)&&i(te.id,{sub_agents:te.sub_agents.filter(ve=>ve!==J)})});const K=[...se.sub_agents.filter(te=>te!==J)];K.splice(U,0,J),i(N,{sub_agents:K}),d(te=>new Set([...te,N])),A(null),H(null)}function le(I,N,U){if(!t)return;const J=E.current;I.preventDefault(),I.stopPropagation(),J!==N&&(J&&ye(J,N)||(I.dataTransfer.dropEffect="move",C({agentId:N,type:U}),H(null)))}function ee(I){const N=I.relatedTarget;(!N||!I.currentTarget.contains(N))&&C(null)}function fe(I,N,U){if(!t)return;I.preventDefault(),I.stopPropagation();const J=I.dataTransfer.getData("text/plain");if(!J||J===N)return;if(U==="sub_agent"&&ye(J,N)){A(null),C(null),H(null);return}const se=t.agents.find(te=>te.id===N),K=t.agents.find(te=>te.id===J);if(!(!se||!K)){if(U==="sub_agent")"sub_agents"in se&&(t.agents.forEach(te=>{"sub_agents"in te&&te.sub_agents.includes(J)&&i(te.id,{sub_agents:te.sub_agents.filter(ve=>ve!==J)})}),se.sub_agents.includes(J)||(i(N,{sub_agents:[...se.sub_agents,J]}),d(te=>new Set([...te,N]))));else if(U==="tool"&&"tools"in se){const te=se;te.tools.some(Se=>Se.type==="agent"&&Se.agent_id===J)||i(N,{tools:[...te.tools,{type:"agent",agent_id:J,name:K.name}]})}A(null),C(null)}}function ye(I,N){if(I===N)return!0;const U=[I],J=new Set;for(;U.length;){const se=U.pop();if(J.has(se))continue;J.add(se);const K=O.get(se);if(!(!K||!("sub_agents"in K)))for(const te of K.sub_agents){if(te===N)return!0;U.push(te)}}return!1}function X(I){const N=hu.find(U=>U.type===I);return N?N.icon:Hr}function he(I){const N=hu.find(U=>U.type===I);return N?N.color:"#888"}function we(I,N=0,U=new Set){return I.map(J=>{const se=X(J.type),K=he(J.type),te="sub_agents"in J&&J.sub_agents.length>0,ve="sub_agents"in J,Se=J.type==="LlmAgent",Ee=u.has(J.id),De=_===J.id,ht=(W==null?void 0:W.agentId)===J.id&&(W==null?void 0:W.type)==="sub_agent",et=(W==null?void 0:W.agentId)===J.id&&(W==null?void 0:W.type)==="tool",be=U.has(J.id),ze=te&&Ee&&!be,pe=ze&&t?J.sub_agents.map(ge=>t.agents.find(Ie=>Ie.id===ge)).filter(ge=>ge!==void 0):[],Ne=_&&_!==J.id&&(ve||Se);return o.jsxs("div",{className:"agent-tree-item",children:[o.jsxs("div",{className:`agent-item ${a===J.id?"selected":""} ${De?"dragging":""} ${Ne?"drop-target":""}`,onClick:()=>$(J.id),style:{paddingLeft:12+N*20},draggable:!0,onDragStart:ge=>ue(ge,J.id),onDragEnd:_e,onDragOver:ge=>{Ne&&(ge.preventDefault(),ge.stopPropagation())},children:[o.jsx("div",{className:"drag-handle",children:o.jsx(Ej,{size:12})}),te?o.jsx("button",{className:"expand-btn",onClick:ge=>{ge.stopPropagation(),z(J.id)},children:Ee?o.jsx(Et,{size:16}):o.jsx(zt,{size:16})}):o.jsx("span",{style:{width:20}}),o.jsx("div",{className:"agent-icon",style:{background:K},children:o.jsx(se,{size:14})}),o.jsx("span",{className:"agent-name",children:J.name}),o.jsx("button",{className:"delete-btn",onClick:ge=>P(J.id,ge),children:o.jsx(Je,{size:14})}),Ne&&o.jsxs("div",{className:"drop-overlay",children:[ve&&o.jsxs("div",{className:`drop-zone-overlay ${ht?"active":""}`,onDragOver:ge=>le(ge,J.id,"sub_agent"),onDragLeave:ee,onDrop:ge=>fe(ge,J.id,"sub_agent"),children:[o.jsx(d1,{size:12}),o.jsx("span",{children:"Sub-agent"})]}),Se&&o.jsxs("div",{className:`drop-zone-overlay ${et?"active":""}`,onDragOver:ge=>le(ge,J.id,"tool"),onDragLeave:ee,onDrop:ge=>fe(ge,J.id,"tool"),children:[o.jsx(kn,{size:12}),o.jsx("span",{children:"Tool"})]})]})]}),ze&&o.jsxs("div",{className:"sub-agents",children:[_&&_!==J.id&&o.jsx("div",{className:`insert-indicator ${(R==null?void 0:R.parentId)===J.id&&(R==null?void 0:R.index)===0?"active":""}`,style:{marginLeft:12+(N+1)*20},onDragOver:ge=>Y(ge,J.id,0),onDragLeave:()=>H(null),onDrop:ge=>re(ge,J.id,0)}),pe.map((ge,Ie)=>o.jsxs(Xt.Fragment,{children:[we([ge],N+1,new Set([...U,J.id])),_&&_!==J.id&&_!==ge.id&&o.jsx("div",{className:`insert-indicator ${(R==null?void 0:R.parentId)===J.id&&(R==null?void 0:R.index)===Ie+1?"active":""}`,style:{marginLeft:12+(N+1)*20},onDragOver:ct=>Y(ct,J.id,Ie+1),onDragLeave:()=>H(null),onDrop:ct=>re(ct,J.id,Ie+1)})]},ge.id))]})]},J.id)})}const G=new Set(t.agents.flatMap(I=>"sub_agents"in I?I.sub_agents:[])),ie=t.agents.filter(I=>!G.has(I.id)),q=ie.length>0?ie:t.agents;return o.jsxs("div",{className:"agents-panel",children:[o.jsx("style",{children:`
        .agents-panel {
          display: flex;
          gap: 20px;
          height: calc(100vh - 120px);
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
        
        .state-keys-section {
          border-top: 1px solid var(--border-color);
          padding: 12px;
          background: var(--bg-tertiary);
        }
        
        .state-keys-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        
        .state-keys-header h4 {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin: 0;
        }
        
        .state-keys-header .btn-icon {
          padding: 4px;
          color: var(--text-muted);
          border-radius: var(--radius-sm);
          transition: all 0.15s ease;
        }
        
        .state-keys-header .btn-icon:hover {
          color: var(--text-primary);
          background: var(--bg-secondary);
        }
        
        .state-keys-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
          max-height: 150px;
          overflow-y: auto;
        }
        
        .state-keys-list .empty-hint {
          font-size: 11px;
          color: var(--text-muted);
          margin: 0;
        }
        
        .state-key-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .state-key-item input {
          flex: 1;
          min-width: 0;
          padding: 4px 6px;
          font-size: 11px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
        }
        
        .state-key-item select {
          width: 50px;
          flex-shrink: 0;
          padding: 4px 2px;
          font-size: 10px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
        }
        
        .state-key-item .btn-icon {
          padding: 4px;
          color: var(--text-muted);
          flex-shrink: 0;
          opacity: 0;
          transition: all 0.15s ease;
        }
        
        .state-key-item:hover .btn-icon {
          opacity: 1;
        }
        
        .state-key-item .btn-icon.delete:hover {
          color: var(--error);
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
      `}),o.jsxs("aside",{className:"agents-sidebar",style:{width:x},children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["Agents (",t.agents.length,")",b.size>0&&o.jsxs("span",{className:"generating-badge",children:[o.jsx(fr,{size:12,className:"spin"})," ",b.size]})]}),o.jsxs("div",{className:"header-buttons",children:[hu.map(({type:I,icon:N,color:U})=>o.jsx("button",{className:"quick-add-btn",style:{background:U},onClick:()=>g(I),title:`Add ${I}`,children:o.jsx(N,{size:14})},I)),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>f(!0),title:"AI-powered agent setup",children:o.jsx(Xc,{size:14})})]})]}),o.jsx("div",{className:"agents-list",ref:Q,onDragOver:ne,children:t.agents.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Hr,{size:32}),o.jsx("p",{children:"No agents yet"})]}):we(q)}),o.jsxs("div",{className:"state-keys-section",children:[o.jsxs("div",{className:"state-keys-header",children:[o.jsxs("h4",{children:[o.jsx(rf,{size:14})," State Keys"]}),o.jsx("button",{className:"btn-icon",onClick:S,title:"Add state key",children:o.jsx(it,{size:14})})]}),o.jsx("div",{className:"state-keys-list",children:t.app.state_keys.length===0?o.jsx("p",{className:"empty-hint",children:"Auto-created when you set output_key"}):t.app.state_keys.map((I,N)=>o.jsxs("div",{className:"state-key-item",children:[o.jsx("input",{type:"text",value:I.name,onChange:U=>D(N,{name:U.target.value}),placeholder:"Key name"}),o.jsxs("select",{value:I.type,onChange:U=>D(N,{type:U.target.value}),children:[o.jsx("option",{value:"string",children:"str"}),o.jsx("option",{value:"number",children:"num"}),o.jsx("option",{value:"boolean",children:"bool"}),o.jsx("option",{value:"object",children:"obj"}),o.jsx("option",{value:"array",children:"arr"})]}),o.jsx("button",{className:"btn-icon delete",onClick:()=>Z(N),title:"Remove state key",children:o.jsx(Je,{size:12})})]},N))})]})]}),o.jsx("div",{ref:T,className:`sidebar-resizer ${v?"resizing":""}`,onMouseDown:F}),o.jsx("div",{className:"agent-editor-area",children:B?o.jsx(Vz,{agent:B}):o.jsxs("div",{className:"empty-state card",children:[o.jsx(Hr,{size:48}),o.jsxs("p",{children:["Select an agent to edit",o.jsx("br",{}),"or create a new one"]})]})}),p&&o.jsx("div",{className:"type-selector",onClick:()=>f(!1),children:o.jsxs("div",{className:"quick-setup-content",onClick:I=>I.stopPropagation(),children:[o.jsxs("h2",{children:[o.jsx(Xc,{size:20})," Quick Agent Setup"]}),o.jsx("p",{className:"quick-setup-desc",children:"Describe what you want this agent to do. Runs in the background - you can start multiple!"}),o.jsxs("div",{className:"quick-setup-form",children:[o.jsx("textarea",{value:h,onChange:I=>m(I.target.value),placeholder:"Example: An agent that searches the web for information and summarizes the results. It should be able to search Google and handle multiple queries in parallel.",rows:5,autoFocus:!0,onKeyDown:I=>{I.key==="Enter"&&(I.metaKey||I.ctrlKey)&&h.trim()&&L()}}),o.jsxs("div",{className:"quick-setup-info",children:[o.jsx("strong",{children:"Available resources:"}),o.jsxs("ul",{children:[o.jsxs("li",{children:[t.app.state_keys.length," state keys"]}),o.jsxs("li",{children:[c.length," MCP servers"]}),o.jsxs("li",{children:[t.custom_tools.length," custom tools"]}),o.jsxs("li",{children:[t.agents.length," existing agents"]})]})]}),o.jsxs("div",{className:"quick-setup-actions",children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>f(!1),children:"Cancel"}),o.jsxs("button",{className:"btn btn-primary",onClick:L,disabled:!h.trim(),children:[o.jsx(Xc,{size:14}),"Generate (⌘↵)"]})]})]})]})})]})}var _f="\x1B[0m",jf="\x1B[1m",ib=e=>e instanceof Error?e.message:typeof e=="string"?e:"An unknown error occurred",Zz=e=>{let t=ib(e),n=`${jf}[MONACOPILOT ERROR] ${t}${_f}`;return console.error(n),{message:t}},eT=(e,t)=>{console.warn(`${jf}[MONACOPILOT WARN] ${e}${t?`
${ib(t)}`:""}${_f}`)},tT=(e,t,n)=>console.warn(`${jf}[MONACOPILOT DEPRECATED] "${e}" is deprecated${n?` in ${n}`:""}. Please use "${t}" instead. It will be removed in a future version.${_f}`),Cl={report:Zz,warn:eT,warnDeprecated:tT},Zg=(e,t,n={})=>{if(t<=0)return"";let r=e.split(`
`),i=r.length;if(t>=i)return e;if(n.truncateDirection==="keepEnd"){let a=r.slice(-t);return a.every(l=>l==="")?`
`.repeat(t):a.join(`
`)}let s=r.slice(0,t);return s.every(a=>a==="")?`
`.repeat(t):s.join(`
`)},nT=100,rT=!0,ob="onIdle",iT=!0,oT=120,sT=400,aT=0,Sf=(e,t)=>t.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:e.lineNumber,endColumn:e.column}),lT=(e,t)=>t.getValueInRange({startLineNumber:e.lineNumber,startColumn:e.column,endLineNumber:t.getLineCount(),endColumn:t.getLineMaxColumn(t.getLineCount())}),cT=e=>e.getValue(),uT=class{constructor(e){this.capacity=e,this.head=0,this.tail=0,this.size=0,this.buffer=new Array(e)}enqueue(e){let t;return this.size===this.capacity&&(t=this.dequeue()),this.buffer[this.tail]=e,this.tail=(this.tail+1)%this.capacity,this.size++,t}dequeue(){if(this.size===0)return;let e=this.buffer[this.head];return this.buffer[this.head]=void 0,this.head=(this.head+1)%this.capacity,this.size--,e}getAll(){return this.buffer.filter(e=>e!==void 0)}clear(){this.buffer=new Array(this.capacity),this.head=0,this.tail=0,this.size=0}getSize(){return this.size}isEmpty(){return this.size===0}isFull(){return this.size===this.capacity}},sb=class ab{constructor(){this.cache=new uT(ab.MAX_CACHE_SIZE)}get(t,n){return this.cache.getAll().filter(r=>this.isValidCacheItem(r,t,n))}add(t){t.completion.trim()&&this.cache.enqueue(t)}clear(){this.cache.clear()}isValidCacheItem(t,n,r){let i=t.textBeforeCursor.trim(),s=Sf(n,r),a=s,l=r.getLineContent(n.lineNumber);if(n.column===l.length+1&&n.lineNumber<r.getLineCount()){let u=r.getLineContent(n.lineNumber+1);a=`${s}
${u}`}if(!(a.trim().includes(i)||i.includes(a.trim())))return!1;let c=r.getValueInRange(t.range);return this.isPartialMatch(c,t.completion)?this.isPositionValid(t,n):!1}isPartialMatch(t,n){let r=t.trim(),i=n.trim();return i.startsWith(r)||r.startsWith(i)}isPositionValid(t,n){let{range:r}=t,{startLineNumber:i,startColumn:s,endLineNumber:a,endColumn:l}=r,{lineNumber:c,column:u}=n;return c<i||c>a?!1:i===a?u>=s-1&&u<=l+1:c===i?u>=s-1:c===a?u<=l+1:!0}};sb.MAX_CACHE_SIZE=20;var dT=sb,pT=class{constructor(e){this.formattedCompletion="",this.formattedCompletion=e}setCompletion(e){return this.formattedCompletion=e,this}removeInvalidLineBreaks(){return this.formattedCompletion=this.formattedCompletion.trimEnd(),this}removeMarkdownCodeSyntax(){return this.formattedCompletion=this.removeMarkdownCodeBlocks(this.formattedCompletion),this}removeMarkdownCodeBlocks(e){let t=e.split(`
`),n=[],r=!1;for(let i=0;i<t.length;i++){let s=t[i],a=s.trim().startsWith("```");if(a&&!r){r=!0;continue}if(a&&r){r=!1;continue}n.push(s)}return n.join(`
`)}removeExcessiveNewlines(){return this.formattedCompletion=this.formattedCompletion.replace(/\n{3,}/g,`

`),this}build(){return this.formattedCompletion}},fT=class{findOverlaps(e,t,n){if(!e)return{startOverlapLength:0,maxOverlapLength:0};let r=e.length,i=t.length,s=n.length,a=0,l=0,c=0,u=Math.min(r,i);for(let f=1;f<=u;f++){let h=e.substring(0,f),m=t.slice(-f);h===m&&(c=f)}let d=Math.min(r,s);for(let f=0;f<d&&e[f]===n[f];f++)a++;for(let f=1;f<=d;f++)e.slice(-f)===n.slice(0,f)&&(l=f);let p=Math.max(a,l);if(p===0){for(let f=1;f<r;f++)if(n.startsWith(e.substring(f))){p=r-f;break}}return{startOverlapLength:c,maxOverlapLength:p}}},hT=class{constructor(e){this.monaco=e,this.textOverlapCalculator=new fT}computeInsertionRange(e,t,n){if(!t)return this.createEmptyRange(e);let r=n.getOffsetAt(e),i=n.getValue().substring(0,r),s=n.getValue().substring(r);if(r>=n.getValue().length)return this.createEmptyRange(e);if(s.length===0)return this.createEmptyRange(e);let{startOverlapLength:a,maxOverlapLength:l}=this.textOverlapCalculator.findOverlaps(t,i,s),c=a>0?n.getPositionAt(r-a):e,u=r+l,d=n.getPositionAt(u);return new this.monaco.Range(c.lineNumber,c.column,d.lineNumber,d.column)}computeCacheRange(e,t){let n=e.lineNumber,r=e.column,i=t.split(`
`),s=i.length-1,a=n+s,l=s===0?r+i[0].length:i[s].length+1;return new this.monaco.Range(n,r,a,l)}createEmptyRange(e){return new this.monaco.Range(e.lineNumber,e.column,e.lineNumber,e.column)}},mT=async e=>{let{endpoint:t,body:n}=e,r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok)throw new Error(`Error while fetching completion item: ${r.statusText}`);let{completion:i,error:s}=await r.json();return{completion:i,error:s}},gT=({pos:e,mdl:t,options:n})=>{let{filename:r,language:i,technologies:s,relatedFiles:a,maxContextLines:l=nT}=n,c=a&&a.length>0?3:2,u=l?Math.floor(l/c):void 0,d=(b,k,x)=>{let y=b(e,t);return k?Zg(y,k,x):y},p=(b,k)=>!b||!k?b:b.map(({content:x,...y})=>({...y,content:Zg(x,k)})),f=d(Sf,u,{truncateDirection:"keepEnd"}),h=d(lT,u,{truncateDirection:"keepStart"}),m=p(a,u);return{filename:r,language:i,technologies:s,relatedFiles:m,textBeforeCursor:f,textAfterCursor:h,cursorPosition:e}},xT=(e,t=300)=>{let n=null,r=null,i=(...s)=>{if(r)return r.args=s,r.promise;let a,l,c=new Promise((u,d)=>{a=u,l=d});return r={args:s,promise:c,resolve:a,reject:l},n&&(clearTimeout(n),n=null),n=setTimeout(async()=>{let u=r;if(u){r=null,n=null;try{let d=await e(...u.args);u.resolve(d)}catch(d){u.reject(d)}}},t),c};return i.cancel=()=>{n&&(clearTimeout(n),n=null),r&&(r.reject(new Error("Cancelled")),r=null)},i},yT=e=>typeof e=="string"?e==="Cancelled"||e==="AbortError":e instanceof Error?e.message==="Cancelled"||e.name==="AbortError":!1,zo=e=>({items:e,enableForwardStability:!0}),Dd=new dT,vT=async({monaco:e,mdl:t,pos:n,token:r,isCompletionAccepted:i,options:s})=>{let{trigger:a=ob,enableCaching:l=rT,allowFollowUpCompletions:c=iT,onError:u,requestHandler:d}=s;if(l&&!i){let p=Dd.get(n,t).map(f=>({insertText:f.completion,range:f.range}));if(p.length>0)return zo(p)}if(r.isCancellationRequested||!c&&i)return zo([]);try{let p=xT(async m=>{var k,x;(k=s.onCompletionRequested)==null||k.call(s,m);let b;if(d)b=await d(m);else if(s.endpoint)b=await mT({endpoint:s.endpoint,...m});else throw new Error('No endpoint specified for completion request. Please set the "endpoint" option in registerCompletion, or provide a custom requestHandler.');if(b.error)throw new Error(b.error);return(x=s.onCompletionRequestFinished)==null||x.call(s,m,b),b},{onTyping:oT,onIdle:sT,onDemand:aT}[a]);r.onCancellationRequested(()=>{p.cancel()});let f=gT({pos:n,mdl:t,options:s}),{completion:h}=await p({body:{completionMetadata:f}});if(h){let m=new pT(h).removeMarkdownCodeSyntax().removeExcessiveNewlines().removeInvalidLineBreaks().build(),b=new hT(e);return l&&Dd.add({completion:m,range:b.computeCacheRange(n,m),textBeforeCursor:Sf(n,t)}),zo([{insertText:m,range:b.computeInsertionRange(n,m,t)}])}}catch(p){if(yT(p))return zo([]);u?u(p):Cl.warn("Cannot provide completion",p)}return zo([])},Cf=new WeakMap,fc=e=>Cf.get(e),bT=(e,t)=>{Cf.set(e,t)},ex=e=>{Cf.delete(e)},wT=e=>({isCompletionAccepted:!1,isCompletionVisible:!1,isExplicitlyTriggered:!1,hasRejectedCurrentCompletion:!1,options:e}),kT=(e,t)=>{let n=fc(e);!n||!n.options||(n.options={...n.options,...t})},_T=(e,t,n)=>{let r=fc(t);return r?e.languages.registerInlineCompletionsProvider(n.language,{provideInlineCompletions:(i,s,a,l)=>{if(i!==t.getModel())return{items:[]};let c=r.options||n;if(!(c.trigger==="onDemand"&&!r.isExplicitlyTriggered||c.triggerIf&&!c.triggerIf({text:cT(t),position:s,triggerType:c.trigger??ob})))return vT({monaco:e,mdl:i,pos:s,token:l,isCompletionAccepted:r.isCompletionAccepted,options:c})},handleItemDidShow:(i,s,a)=>{var l,c;r.isExplicitlyTriggered=!1,r.hasRejectedCurrentCompletion=!1,!r.isCompletionAccepted&&(r.isCompletionVisible=!0,(c=(l=r.options||n).onCompletionShown)==null||c.call(l,a,s.range))},freeInlineCompletions:()=>{}}):null},jT={TAB:(e,t)=>t.keyCode===e.KeyCode.Tab,CMD_RIGHT_ARROW:(e,t)=>t.keyCode===e.KeyCode.RightArrow&&t.metaKey},ST=class{constructor(e,t,n){this.monaco=e,this.state=t,this.initialOptions=n}handleKeyEvent(e){let t=this.state.options||this.initialOptions,n={monaco:this.monaco,event:e,state:this.state,options:t};this.handleCompletionAcceptance(n),this.handleCompletionRejection(n)}handleCompletionAcceptance(e){var t,n;return e.state.isCompletionVisible&&this.isAcceptanceKey(e.event)?((n=(t=e.options).onCompletionAccepted)==null||n.call(t),e.state.isCompletionAccepted=!0,e.state.isCompletionVisible=!1,!0):(e.state.isCompletionAccepted=!1,!1)}handleCompletionRejection(e){var t,n;return this.shouldRejectCompletion(e)?((n=(t=e.options).onCompletionRejected)==null||n.call(t),e.state.hasRejectedCurrentCompletion=!0,!0):!1}shouldRejectCompletion(e){return e.state.isCompletionVisible&&!e.state.hasRejectedCurrentCompletion&&!e.state.isCompletionAccepted&&!this.isAcceptanceKey(e.event)}isAcceptanceKey(e){return Object.values(jT).some(t=>t(this.monaco,e))}},CT=(e,t,n,r)=>{let i=new ST(e,n,r);return t.onKeyDown(s=>i.handleKeyEvent(s))},lb=(e,t,n)=>{let r=[];bT(t,wT(n)),t.updateOptions({inlineSuggest:{enabled:!0}});try{let i=fc(t);if(!i)return Cl.warn("Completion is not registered properly. State not found."),ET();let s=_T(e,t,n);s&&r.push(s);let a=CT(e,t,i,n);return r.push(a),{deregister:()=>{for(let l of r)l.dispose();Dd.clear(),ex(t)},trigger:()=>NT(t),updateOptions:l=>{kT(t,l(i.options||n))}}}catch(i){return n.onError?n.onError(i):Cl.report(i),{deregister:()=>{for(let s of r)s.dispose();ex(t)},trigger:()=>{},updateOptions:()=>{}}}},NT=e=>{let t=fc(e);if(!t){Cl.warn("Completion is not registered. Use `registerCompletion` to register completion first.");return}t.isExplicitlyTriggered=!0,e.trigger("keyboard","editor.action.inlineSuggest.trigger",{})},ET=()=>({deregister:()=>{},trigger:()=>{},updateOptions:()=>{}});function zT(){return`tool_${Date.now().toString(36)}`}function TT(e){return/^[a-zA-Z0-9_]+$/.test(e)}const MT=`def my_tool(tool_context: ToolContext, param1: str) -> dict:
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
`;function AT({onSelectTool:e}){const{project:t,updateProject:n,addCustomTool:r,updateCustomTool:i,removeCustomTool:s,selectedToolId:a,setSelectedToolId:l,builtinTools:c,mcpServers:u}=St(),[d,p]=w.useState(""),[f,h]=w.useState(null),[m,b]=w.useState("tools"),[k,x]=w.useState(null),[y,v]=w.useState(""),[j,T]=w.useState(!1),[_,A]=w.useState(!1),[E,W]=w.useState(!1),[C,R]=w.useState(null),[H,Q]=w.useState(null),[M,F]=w.useState({}),[O,L]=w.useState({}),[B,$]=w.useState("");if(!t)return null;const g=t.mcp_servers||[],P=t.custom_tools.find(N=>N.id===a),z=g.find(N=>N.name===k);function S(N){l(N),e==null||e(N)}w.useEffect(()=>{P&&(p(P.code),Q(null))},[a]),w.useEffect(()=>{z&&(v(JSON.stringify(z,null,2)),T(!1))},[k]),w.useEffect(()=>{if(!t)return;const N=D(t.mcp_servers||[]);$(JSON.stringify(N,null,2))},[t==null?void 0:t.mcp_servers]),w.useEffect(()=>{if(m==="mcp"&&g.length>0){const N=g.filter(U=>!M[U.name]||M[U.name]==="unknown");N.length>0&&N.forEach(U=>{_e(U.name)})}},[m,g.length]);function D(N){const U={};for(const J of N){const se={};J.connection_type==="stdio"?(se.command=J.command||"",se.args=J.args||[],Object.keys(J.env||{}).length>0&&(se.env=J.env)):J.connection_type==="sse"&&(se.url=J.url||"",Object.keys(J.headers||{}).length>0&&(se.headers=J.headers)),se.timeout=J.timeout||60,J.tool_filter&&(se.tool_filter=J.tool_filter),J.tool_name_prefix&&(se.tool_name_prefix=J.tool_name_prefix),U[J.name]=se}return{mcpServers:U}}function Z(N){const U=[];for(const[J,se]of Object.entries(N.mcpServers||{})){const K={name:J,description:se.description||"",connection_type:se.url?"sse":"stdio",command:se.command,args:se.args||[],env:se.env||{},url:se.url,headers:se.headers||{},timeout:se.timeout||30,tool_filter:se.tool_filter||null,tool_name_prefix:se.tool_name_prefix};U.push(K)}return U}function ne(N){N!==void 0&&$(N)}function ue(){try{const N=JSON.parse(B),U=Z(N);n({mcp_servers:U})}catch(N){alert("Invalid JSON: "+N.message)}}async function _e(N){const U=g.find(J=>J.name===N);if(U){F(J=>({...J,[N]:"testing"})),L(J=>({...J,[N]:""}));try{const J=await jd({connection_type:U.connection_type,command:U.command,args:U.args,env:U.env,url:U.url,headers:U.headers,timeout:U.timeout});F(se=>({...se,[N]:J.success?"connected":"error"})),!J.success&&J.error&&L(se=>({...se,[N]:J.error||"Unknown error"}))}catch(J){F(se=>({...se,[N]:"error"})),L(se=>({...se,[N]:J.message}))}}}function Y(N){const U=u.find(se=>se.name===N);if(!U)return;if(g.some(se=>se.name===N)){alert(`Server "${N}" is already configured`);return}const J={name:U.name,description:U.description||"",connection_type:U.connection_type,command:U.command,args:U.args||[],env:U.env||{},url:U.url,headers:U.headers||{},timeout:U.timeout||30,tool_filter:U.tool_filter||null,tool_name_prefix:U.tool_name_prefix};n({mcp_servers:[...g,J]})}async function re(){for(const N of g)await _e(N.name)}function le(){const N=zT();r({id:N,name:"new_tool",description:"",module_path:"tools.custom",code:MT,state_keys_used:[]}),S(N)}function ee(N,U){U.stopPropagation(),confirm("Delete this tool?")&&(s(N),a===N&&(e==null||e(null)))}function fe(N){P&&(N.name!==void 0&&(N.name===""||TT(N.name)?Q(null):Q("Name can only contain letters, numbers, and underscores")),i(P.id,N))}function ye(N){N!==void 0&&P&&(p(N),fe({code:N}))}async function X(){if(P){A(!0);try{const N=await H0(t.id,P.name,P.description,P.state_keys_used);N.success&&N.code?(p(N.code),fe({code:N.code})):(console.error("Failed to generate tool code:",N.error),alert("Failed to generate tool code: "+(N.error||"Unknown error")))}catch(N){console.error("Error generating tool code:",N),alert("Error generating tool code: "+N.message)}finally{A(!1)}}}const he=w.useRef(null),we=w.useCallback((N,U)=>{if(he.current&&typeof he.current=="function")try{he.current()}catch{}try{const J=lb(U,N,{language:"python",endpoint:"/api/code-completion",trigger:"onTyping"});typeof J=="function"?he.current=J:he.current=null}catch{he.current=null}},[]);w.useEffect(()=>()=>{if(he.current&&typeof he.current=="function")try{he.current()}catch{}},[]);function G(N){N!==void 0&&(v(N),T(N!==JSON.stringify(z,null,2)))}function ie(){if(z)try{const N=JSON.parse(y),U=z.name,J=g.map(se=>se.name===U?N:se);n({mcp_servers:J}),x(N.name),T(!1)}catch(N){alert("Invalid JSON: "+N.message)}}async function q(){W(!0),R(null);try{const N=JSON.parse(y),U=await jd({connection_type:N.connection_type,command:N.command,args:N.args,env:N.env,url:N.url,headers:N.headers,timeout:N.timeout||30});if(R(U),U.success&&U.tools.length>0){const J={...N,tool_filter:U.tools.map(se=>se.name)};v(JSON.stringify(J,null,2)),T(!0)}}catch(N){R({success:!1,tools:[],error:N.message})}finally{W(!1)}}const I={};return t.custom_tools.forEach(N=>{const U=N.module_path||"tools";I[U]||(I[U]=[]),I[U].push(N)}),o.jsxs("div",{className:"tools-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("aside",{className:"tools-sidebar",children:[o.jsxs("div",{className:"sidebar-tabs",children:[o.jsxs("button",{className:`sidebar-tab ${m==="tools"?"active":""}`,onClick:()=>{b("tools"),x(null)},children:[o.jsx(kn,{size:14}),"Tools"]}),o.jsxs("button",{className:`sidebar-tab ${m==="mcp"?"active":""}`,onClick:()=>{b("mcp"),l(null),h(null),x(null)},children:[o.jsx(Co,{size:14}),"MCP"]})]}),m==="tools"?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["Custom Tools (",t.custom_tools.length,")"]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:le,children:[o.jsx(it,{size:14}),"New"]})]}),o.jsxs("div",{className:"tools-tree",children:[c.length>0&&o.jsxs("div",{className:"module-group",children:[o.jsxs("div",{className:"module-header",children:[o.jsx(Aj,{size:14}),"Built-in Tools"]}),c.map(N=>o.jsxs("div",{className:`tool-item builtin ${(f==null?void 0:f.name)===N.name?"selected":""}`,onClick:()=>{h(N),S(null),x(null)},children:[o.jsx(Cd,{size:14}),o.jsx("span",{className:"tool-name",children:N.name})]},N.name))]}),t.custom_tools.length===0&&c.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Rn,{size:32}),o.jsx("p",{children:"No tools defined yet"})]}):t.custom_tools.length>0&&Object.entries(I).map(([N,U])=>o.jsxs("div",{className:"module-group",children:[o.jsxs("div",{className:"module-header",children:[o.jsx(r1,{size:14}),N]}),U.map(J=>o.jsxs("div",{className:`tool-item ${a===J.id?"selected":""}`,onClick:()=>{S(J.id),h(null),x(null)},children:[o.jsx(kn,{size:14}),o.jsx("span",{className:"tool-name",children:J.name}),o.jsx("button",{className:"delete-btn",onClick:se=>ee(J.id,se),children:o.jsx(Je,{size:14})})]},J.id))]},N))]})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["MCP Servers (",g.length,")"]}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:re,title:"Test all server connections",children:o.jsx($t,{size:14})})]}),o.jsx("div",{className:"mcp-servers-list",children:g.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Co,{size:32}),o.jsx("p",{children:"No MCP servers configured"}),o.jsx("p",{style:{fontSize:"12px",color:"var(--text-muted)"},children:"Edit the JSON to add servers"})]}):g.map(N=>{const U=M[N.name]||"unknown",J=O[N.name];return o.jsxs("div",{className:"mcp-server-item-wrapper",children:[o.jsxs("div",{className:"mcp-server-item",children:[o.jsxs("div",{className:"mcp-server-info",children:[o.jsx(Co,{size:14}),o.jsx("span",{className:"mcp-server-name",children:N.name}),o.jsxs("span",{className:`mcp-status-badge ${U}`,children:[U==="testing"?o.jsx(fr,{size:10,className:"spin"}):null,U==="unknown"&&"●",U==="connected"&&"●",U==="error"&&"●"]})]}),o.jsxs("div",{className:"mcp-server-actions",children:[o.jsx("span",{className:"mcp-server-type",children:N.connection_type}),o.jsxs("button",{className:"btn btn-sm",onClick:()=>_e(N.name),disabled:U==="testing",title:"Test server connection",style:{display:"flex",alignItems:"center",gap:4},children:[U==="testing"?o.jsx(fr,{size:12,className:"spin"}):o.jsx($t,{size:12}),o.jsx("span",{style:{fontSize:11},children:"Test"})]})]})]}),U==="error"&&J&&o.jsxs("div",{className:"mcp-server-error",children:[o.jsx("span",{style:{fontWeight:500,color:"var(--error)"},children:"Error:"})," ",J]})]},N.name)})})]})]}),o.jsx("div",{className:"tool-editor",children:f?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(Cd,{size:20,style:{color:"var(--accent-secondary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:f.name}),o.jsx("span",{className:"badge badge-muted",children:"Built-in"})]}),o.jsxs("div",{className:"builtin-tool-info",children:[o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("p",{children:f.description||"No description available."})]}),o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Usage"}),o.jsx("p",{children:"This is a built-in tool provided by ADK. Add it to any LLM agent's tools list to enable it."}),o.jsxs("code",{children:['tools: ["',f.name,'"]']})]}),o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Note"}),o.jsx("p",{children:"Built-in tools are read-only and cannot be modified. Create a custom tool if you need different behavior."})]})]})]}):P?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(kn,{size:20,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o.jsx("input",{type:"text",value:P.name,onChange:N=>fe({name:N.target.value}),placeholder:"Tool name",style:{borderColor:H?"var(--error)":void 0}}),H&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:H})]})]}),o.jsxs("div",{className:"editor-meta",children:[o.jsxs("div",{className:"meta-field grow",children:[o.jsx("label",{children:"Description"}),o.jsx("input",{type:"text",value:P.description,onChange:N=>fe({description:N.target.value}),placeholder:"What does this tool do?"})]}),o.jsxs("div",{className:"meta-field",children:[o.jsx("label",{children:"Module Path"}),o.jsx("input",{type:"text",value:P.module_path,onChange:N=>fe({module_path:N.target.value}),placeholder:"tools.custom",style:{width:180}})]})]}),o.jsxs("div",{className:"code-actions",children:[o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:X,disabled:_||!P.name||!P.description,title:!P.name||!P.description?"Add a name and description first":"Generate code using AI",children:_?o.jsxs(o.Fragment,{children:[o.jsx(fr,{size:14,className:"spinning"}),"Generating..."]}):o.jsxs(o.Fragment,{children:[o.jsx(Di,{size:14}),"Write Tool"]})}),o.jsx("span",{className:"action-hint",children:"AI will generate code based on the tool name, description, and selected state keys"})]}),o.jsx("div",{className:"code-editor",children:o.jsx(cn,{height:"100%",language:"python",theme:"vs-dark",value:d,onChange:ye,onMount:we,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12}}})}),o.jsxs("div",{className:"state-keys-panel",children:[o.jsxs("h4",{children:[o.jsx(rf,{size:14})," State Keys Used"]}),o.jsx("div",{className:"state-key-chips",children:t.app.state_keys.length===0?o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"No state keys defined. Add them in App Config."}):t.app.state_keys.map(N=>{const U=P.state_keys_used.includes(N.name);return o.jsxs("label",{className:`state-key-chip ${U?"selected":""}`,title:N.description,children:[o.jsx("input",{type:"checkbox",checked:U,onChange:J=>{const se=J.target.checked?[...P.state_keys_used,N.name]:P.state_keys_used.filter(K=>K!==N.name);fe({state_keys_used:se})}}),N.name,o.jsxs("span",{style:{color:"var(--text-muted)",fontSize:11},children:["(",N.type,")"]})]},N.name)})})]})]}):z?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(Co,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:z.name}),o.jsx("span",{className:"badge badge-info",children:z.connection_type}),j&&o.jsx("span",{className:"unsaved-badge",children:"Unsaved"}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:q,disabled:E,title:"Test connection and discover available tools",children:[E?o.jsx(fr,{size:14,className:"spin"}):o.jsx(nf,{size:14}),E?"Testing...":"Test Connection"]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:ie,disabled:!j,children:[o.jsx(kl,{size:14}),"Save"]})]}),C&&o.jsx("div",{className:`mcp-test-result ${C.success?"success":"error"}`,children:C.success?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"test-result-header",children:["✓ Connected! Found ",C.tools.length," tools"]}),C.tools.length>0&&o.jsxs("div",{className:"test-result-tools",children:[o.jsx("strong",{children:"Available tools:"}),o.jsx("ul",{children:C.tools.map(N=>o.jsxs("li",{children:[o.jsx("code",{children:N.name}),N.description&&o.jsxs("span",{children:[" — ",N.description]})]},N.name))}),o.jsx("p",{className:"hint",children:'The tool_filter has been updated with these tools. Click "Save" to apply.'})]})]}):o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"test-result-header",children:"✗ Connection failed"}),o.jsx("div",{className:"test-result-error",children:C.error})]})}),o.jsx("div",{className:"mcp-info",children:o.jsx("p",{children:'Configure your MCP server using JSON. Click "Test Connection" to verify and discover available tools.'})}),o.jsx("div",{className:"code-editor",children:o.jsx(cn,{height:"100%",language:"json",theme:"vs-dark",value:y,onChange:G,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},formatOnPaste:!0}})}),o.jsxs("div",{className:"mcp-help",children:[o.jsx("h4",{children:"Schema Reference"}),o.jsxs("div",{className:"schema-fields",children:[o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"name"}),o.jsx("span",{children:"Unique identifier for this server"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"description"}),o.jsx("span",{children:"Human-readable description"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"connection_type"}),o.jsx("span",{children:'"stdio" | "sse" | "http"'})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"command"}),o.jsx("span",{children:"Command to run (for stdio)"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"args"}),o.jsx("span",{children:"Array of command arguments"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"env"}),o.jsx("span",{children:"Environment variables object"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"url"}),o.jsx("span",{children:"Server URL (for sse/http)"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"tool_filter"}),o.jsx("span",{children:"Array of tool names to include (null/omit = all tools, [] = no tools)"})]})]})]})]}):m==="mcp"?o.jsxs("div",{className:"mcp-json-editor",children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(Co,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:"mcp.json"}),o.jsx("span",{className:"badge badge-muted",children:"Model Context Protocol"}),o.jsxs("select",{value:"",onChange:N=>{N.target.value&&Y(N.target.value)},style:{padding:"6px 10px",fontSize:"12px",borderRadius:"6px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",color:"var(--text-primary)"},children:[o.jsx("option",{value:"",children:"+ Add known server..."}),u.filter(N=>!g.some(U=>U.name===N.name)).map(N=>o.jsxs("option",{value:N.name,children:[N.name," - ",N.description||"No description"]},N.name))]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:ue,children:[o.jsx(kl,{size:14}),"Apply Changes"]})]}),o.jsx("div",{className:"mcp-json-info",children:o.jsxs("p",{children:["Configure your MCP servers using the standard ",o.jsx("code",{children:"mcp.json"})," format. Select a known server from the dropdown to add its configuration.",o.jsx("br",{}),o.jsxs("small",{style:{color:"var(--text-muted)"},children:["💡 Tip: Increase ",o.jsx("code",{children:"timeout"})," (in seconds) for slow-starting servers like npm-based ones."]})]})}),o.jsx("div",{className:"editor-content",style:{flex:1},children:o.jsx(cn,{height:"100%",defaultLanguage:"json",value:B,onChange:ne,theme:"vs-dark",options:{minimap:{enabled:!1},fontSize:14,lineNumbers:"on",scrollBeyondLastLine:!1,wordWrap:"on",tabSize:2,formatOnPaste:!0,formatOnType:!0}})})]}):o.jsxs("div",{className:"empty-state",children:[o.jsx(Rn,{size:48}),o.jsxs("p",{children:["Select a tool to view",o.jsx("br",{}),"or create a new custom tool"]})]})})]})}function LT(){return`callback_${Date.now().toString(36)}`}function tx(e){return/^[a-zA-Z0-9_]+$/.test(e)}function cb(e){switch(e){case"before_agent":case"after_agent":return`from google.adk.agents.callback_context import CallbackContext
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
`;default:return cb("before_agent")}}function PT({onSelectCallback:e}){var E,W;const{project:t,updateProject:n,addCustomCallback:r,updateCustomCallback:i,removeCustomCallback:s}=St(),[a,l]=w.useState(""),[c,u]=w.useState(null),[d,p]=w.useState(null),[f,h]=w.useState(!1),m=w.useRef(null);if(!t)return null;const b=t.custom_callbacks||[],k=b.find(C=>C.id===c);function x(C){u(C),e==null||e(C)}w.useEffect(()=>{k?(l(k.code),p(null)):l("")},[c,k]);function y(){const C=LT(),R="new_callback",H={id:C,name:R,description:"",module_path:`callbacks.${R}`,code:cb("before_agent"),state_keys_used:[]};r(H),x(C)}function v(C,R){R.stopPropagation(),confirm("Delete this callback?")&&(s(C),c===C&&(e==null||e(null),u(null),l("")))}function j(){if(!c)return;const C=b.find(Q=>Q.id===c);if(!C)return;const R=C.name.trim();if(!R){alert("Please enter a name");return}if(!tx(R)){p("Name must contain only alphanumeric characters and underscores");return}if(b.find(Q=>Q.name===R&&Q.id!==C.id)){p("A callback with this name already exists");return}i(C.id,{code:a,name:R,description:C.description,module_path:`callbacks.${R}`,state_keys_used:C.state_keys_used}),p(null)}function T(C,R){m.current=R;try{lb(R,{endpoint:"/api/code-completion",language:"python"})}catch(H){console.warn("Failed to register Monacopilot completion:",H)}}async function _(){if(k){h(!0);try{let C="before_agent";const R=k.name.toLowerCase(),H=k.description.toLowerCase();R.includes("after_agent")||H.includes("after agent")?C="after_agent":R.includes("before_model")||H.includes("before model")?C="before_model":R.includes("after_model")||H.includes("after model")?C="after_model":R.includes("before_tool")||H.includes("before tool")?C="before_tool":R.includes("after_tool")||H.includes("after tool")?C="after_tool":(R.includes("before_agent")||H.includes("before agent"))&&(C="before_agent");const Q=await V0(t.id,k.name,k.description,C,k.state_keys_used);Q.success&&Q.code?(l(Q.code),i(k.id,{code:Q.code})):(console.error("Failed to generate callback code:",Q.error),alert("Failed to generate callback code: "+(Q.error||"Unknown error")))}catch(C){console.error("Error generating callback code:",C),alert("Error generating callback code: "+C.message)}finally{h(!1)}}}const A=((W=(E=t.app)==null?void 0:E.state_keys)==null?void 0:W.map(C=>C.name))||[];return o.jsxs("div",{className:"tools-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"tools-sidebar",children:[o.jsxs("div",{className:"tools-sidebar-header",children:[o.jsx("h3",{children:"Callbacks"}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:y,title:"Add Callback",children:o.jsx(it,{size:16})})]}),o.jsx("div",{className:"tools-list",children:b.length===0?o.jsx("div",{style:{padding:"16px",color:"var(--text-secondary)",fontSize:"14px"},children:"No callbacks yet. Click + to add one."}):b.map(C=>o.jsxs("div",{className:`tool-item ${c===C.id?"selected":""}`,onClick:()=>x(C.id),children:[o.jsxs("div",{style:{flex:1},children:[o.jsx("div",{className:"tool-item-name",children:C.name}),C.description&&o.jsx("div",{className:"tool-item-type",style:{fontSize:"11px",color:"var(--text-secondary)",marginTop:"2px"},children:C.description})]}),o.jsx("div",{className:"tool-item-actions",children:o.jsx("button",{className:"btn btn-icon btn-sm",onClick:R=>v(C.id,R),title:"Delete",children:o.jsx(Je,{size:14})})})]},C.id))})]}),o.jsx("div",{className:"tools-editor",children:k?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"tools-editor-header",children:[o.jsx("h3",{children:"Edit Callback"}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:j,children:[o.jsx(kl,{size:16,style:{marginRight:"6px"}}),"Save"]})]}),o.jsxs("div",{className:"tools-editor-content",style:{padding:"16px",overflowY:"auto"},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Name"}),o.jsx("input",{type:"text",value:k.name,onChange:C=>{const R=C.target.value;i(k.id,{name:R,module_path:`callbacks.${R.trim()||"callback"}`}),d&&tx(R)&&p(null)},className:d?"error":""}),d&&o.jsx("div",{className:"error-message",children:d})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Description"}),o.jsx("textarea",{value:k.description,onChange:C=>i(k.id,{description:C.target.value}),rows:2,placeholder:"Describe what this callback does..."})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Module Path"}),o.jsx("input",{type:"text",value:k.module_path,onChange:C=>i(k.id,{module_path:C.target.value}),placeholder:"callbacks.custom"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"State Keys Used"}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"8px"},children:A.map(C=>{const R=k.state_keys_used.includes(C);return o.jsxs("button",{type:"button",className:`btn btn-sm ${R?"btn-primary":"btn-secondary"}`,onClick:()=>{const H=R?k.state_keys_used.filter(Q=>Q!==C):[...k.state_keys_used,C];i(k.id,{state_keys_used:H})},children:[o.jsx(rf,{size:12,style:{marginRight:"4px"}}),C]},C)})}),A.length===0&&o.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"12px",marginTop:"4px"},children:"No state keys defined in App Config"})]}),o.jsxs("div",{className:"form-group",children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[o.jsx("label",{children:"Code"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:_,disabled:f||!k.name,title:k.name?"Generate code using AI":"Add a name first",children:f?o.jsxs(o.Fragment,{children:[o.jsx(fr,{size:14,className:"spinning"}),"Generating..."]}):o.jsxs(o.Fragment,{children:[o.jsx(Di,{size:14}),"Generate"]})})]}),o.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"8px"},children:"AI will generate code based on the callback name, description, and selected state keys"}),o.jsx("div",{className:"code-editor-container",children:o.jsx(cn,{height:"100%",language:"python",theme:"vs-dark",value:a,onChange:C=>l(C||""),onMount:T,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0}})})]})]})]}):o.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)"},children:"Select a callback to edit, or create a new one"})})]})}function Wa(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function RT(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function Nf(e){let t,n,r;e.length!==2?(t=Wa,n=(l,c)=>Wa(e(l),c),r=(l,c)=>e(l)-c):(t=e===Wa||e===RT?e:IT,n=e,r=e);function i(l,c,u=0,d=l.length){if(u<d){if(t(c,c)!==0)return d;do{const p=u+d>>>1;n(l[p],c)<0?u=p+1:d=p}while(u<d)}return u}function s(l,c,u=0,d=l.length){if(u<d){if(t(c,c)!==0)return d;do{const p=u+d>>>1;n(l[p],c)<=0?u=p+1:d=p}while(u<d)}return u}function a(l,c,u=0,d=l.length){const p=i(l,c,u,d-1);return p>u&&r(l[p-1],c)>-r(l[p],c)?p-1:p}return{left:i,center:a,right:s}}function IT(){return 0}function OT(e){return e===null?NaN:+e}const $T=Nf(Wa),DT=$T.right;Nf(OT).center;function FT(e,t){let n,r;if(t===void 0)for(const i of e)i!=null&&(n===void 0?i>=i&&(n=r=i):(n>i&&(n=i),r<i&&(r=i)));else{let i=-1;for(let s of e)(s=t(s,++i,e))!=null&&(n===void 0?s>=s&&(n=r=s):(n>s&&(n=s),r<s&&(r=s)))}return[n,r]}const BT=Math.sqrt(50),UT=Math.sqrt(10),WT=Math.sqrt(2);function Nl(e,t,n){const r=(t-e)/Math.max(0,n),i=Math.floor(Math.log10(r)),s=r/Math.pow(10,i),a=s>=BT?10:s>=UT?5:s>=WT?2:1;let l,c,u;return i<0?(u=Math.pow(10,-i)/a,l=Math.round(e*u),c=Math.round(t*u),l/u<e&&++l,c/u>t&&--c,u=-u):(u=Math.pow(10,i)*a,l=Math.round(e/u),c=Math.round(t/u),l*u<e&&++l,c*u>t&&--c),c<l&&.5<=n&&n<2?Nl(e,t,n*2):[l,c,u]}function HT(e,t,n){if(t=+t,e=+e,n=+n,!(n>0))return[];if(e===t)return[e];const r=t<e,[i,s,a]=r?Nl(t,e,n):Nl(e,t,n);if(!(s>=i))return[];const l=s-i+1,c=new Array(l);if(r)if(a<0)for(let u=0;u<l;++u)c[u]=(s-u)/-a;else for(let u=0;u<l;++u)c[u]=(s-u)*a;else if(a<0)for(let u=0;u<l;++u)c[u]=(i+u)/-a;else for(let u=0;u<l;++u)c[u]=(i+u)*a;return c}function Fd(e,t,n){return t=+t,e=+e,n=+n,Nl(e,t,n)[2]}function Bd(e,t,n){t=+t,e=+e,n=+n;const r=t<e,i=r?Fd(t,e,n):Fd(e,t,n);return(r?-1:1)*(i<0?1/-i:i)}var VT={value:()=>{}};function Fs(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new Ha(n)}function Ha(e){this._=e}function qT(e,t){return e.trim().split(/^|\s+/).map(function(n){var r="",i=n.indexOf(".");if(i>=0&&(r=n.slice(i+1),n=n.slice(0,i)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}Ha.prototype=Fs.prototype={constructor:Ha,on:function(e,t){var n=this._,r=qT(e+"",n),i,s=-1,a=r.length;if(arguments.length<2){for(;++s<a;)if((i=(e=r[s]).type)&&(i=YT(n[i],e.name)))return i;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++s<a;)if(i=(e=r[s]).type)n[i]=nx(n[i],e.name,t);else if(t==null)for(i in n)n[i]=nx(n[i],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Ha(e)},call:function(e,t){if((i=arguments.length-2)>0)for(var n=new Array(i),r=0,i,s;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(s=this._[e],r=0,i=s.length;r<i;++r)s[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],i=0,s=r.length;i<s;++i)r[i].value.apply(t,n)}};function YT(e,t){for(var n=0,r=e.length,i;n<r;++n)if((i=e[n]).name===t)return i.value}function nx(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=VT,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var Ud="http://www.w3.org/1999/xhtml";const rx={svg:"http://www.w3.org/2000/svg",xhtml:Ud,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function hc(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),rx.hasOwnProperty(t)?{space:rx[t],local:e}:e}function JT(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===Ud&&t.documentElement.namespaceURI===Ud?t.createElement(e):t.createElementNS(n,e)}}function GT(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function ub(e){var t=hc(e);return(t.local?GT:JT)(t)}function KT(){}function Ef(e){return e==null?KT:function(){return this.querySelector(e)}}function QT(e){typeof e!="function"&&(e=Ef(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var s=t[i],a=s.length,l=r[i]=new Array(a),c,u,d=0;d<a;++d)(c=s[d])&&(u=e.call(c,c.__data__,d,s))&&("__data__"in c&&(u.__data__=c.__data__),l[d]=u);return new tn(r,this._parents)}function XT(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function ZT(){return[]}function db(e){return e==null?ZT:function(){return this.querySelectorAll(e)}}function e3(e){return function(){return XT(e.apply(this,arguments))}}function t3(e){typeof e=="function"?e=e3(e):e=db(e);for(var t=this._groups,n=t.length,r=[],i=[],s=0;s<n;++s)for(var a=t[s],l=a.length,c,u=0;u<l;++u)(c=a[u])&&(r.push(e.call(c,c.__data__,u,a)),i.push(c));return new tn(r,i)}function pb(e){return function(){return this.matches(e)}}function fb(e){return function(t){return t.matches(e)}}var n3=Array.prototype.find;function r3(e){return function(){return n3.call(this.children,e)}}function i3(){return this.firstElementChild}function o3(e){return this.select(e==null?i3:r3(typeof e=="function"?e:fb(e)))}var s3=Array.prototype.filter;function a3(){return Array.from(this.children)}function l3(e){return function(){return s3.call(this.children,e)}}function c3(e){return this.selectAll(e==null?a3:l3(typeof e=="function"?e:fb(e)))}function u3(e){typeof e!="function"&&(e=pb(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var s=t[i],a=s.length,l=r[i]=[],c,u=0;u<a;++u)(c=s[u])&&e.call(c,c.__data__,u,s)&&l.push(c);return new tn(r,this._parents)}function hb(e){return new Array(e.length)}function d3(){return new tn(this._enter||this._groups.map(hb),this._parents)}function El(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}El.prototype={constructor:El,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function p3(e){return function(){return e}}function f3(e,t,n,r,i,s){for(var a=0,l,c=t.length,u=s.length;a<u;++a)(l=t[a])?(l.__data__=s[a],r[a]=l):n[a]=new El(e,s[a]);for(;a<c;++a)(l=t[a])&&(i[a]=l)}function h3(e,t,n,r,i,s,a){var l,c,u=new Map,d=t.length,p=s.length,f=new Array(d),h;for(l=0;l<d;++l)(c=t[l])&&(f[l]=h=a.call(c,c.__data__,l,t)+"",u.has(h)?i[l]=c:u.set(h,c));for(l=0;l<p;++l)h=a.call(e,s[l],l,s)+"",(c=u.get(h))?(r[l]=c,c.__data__=s[l],u.delete(h)):n[l]=new El(e,s[l]);for(l=0;l<d;++l)(c=t[l])&&u.get(f[l])===c&&(i[l]=c)}function m3(e){return e.__data__}function g3(e,t){if(!arguments.length)return Array.from(this,m3);var n=t?h3:f3,r=this._parents,i=this._groups;typeof e!="function"&&(e=p3(e));for(var s=i.length,a=new Array(s),l=new Array(s),c=new Array(s),u=0;u<s;++u){var d=r[u],p=i[u],f=p.length,h=x3(e.call(d,d&&d.__data__,u,r)),m=h.length,b=l[u]=new Array(m),k=a[u]=new Array(m),x=c[u]=new Array(f);n(d,p,b,k,x,h,t);for(var y=0,v=0,j,T;y<m;++y)if(j=b[y]){for(y>=v&&(v=y+1);!(T=k[v])&&++v<m;);j._next=T||null}}return a=new tn(a,r),a._enter=l,a._exit=c,a}function x3(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function y3(){return new tn(this._exit||this._groups.map(hb),this._parents)}function v3(e,t,n){var r=this.enter(),i=this,s=this.exit();return typeof e=="function"?(r=e(r),r&&(r=r.selection())):r=r.append(e+""),t!=null&&(i=t(i),i&&(i=i.selection())),n==null?s.remove():n(s),r&&i?r.merge(i).order():i}function b3(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,i=n.length,s=r.length,a=Math.min(i,s),l=new Array(i),c=0;c<a;++c)for(var u=n[c],d=r[c],p=u.length,f=l[c]=new Array(p),h,m=0;m<p;++m)(h=u[m]||d[m])&&(f[m]=h);for(;c<i;++c)l[c]=n[c];return new tn(l,this._parents)}function w3(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],i=r.length-1,s=r[i],a;--i>=0;)(a=r[i])&&(s&&a.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(a,s),s=a);return this}function k3(e){e||(e=_3);function t(p,f){return p&&f?e(p.__data__,f.__data__):!p-!f}for(var n=this._groups,r=n.length,i=new Array(r),s=0;s<r;++s){for(var a=n[s],l=a.length,c=i[s]=new Array(l),u,d=0;d<l;++d)(u=a[d])&&(c[d]=u);c.sort(t)}return new tn(i,this._parents).order()}function _3(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function j3(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function S3(){return Array.from(this)}function C3(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,s=r.length;i<s;++i){var a=r[i];if(a)return a}return null}function N3(){let e=0;for(const t of this)++e;return e}function E3(){return!this.node()}function z3(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var i=t[n],s=0,a=i.length,l;s<a;++s)(l=i[s])&&e.call(l,l.__data__,s,i);return this}function T3(e){return function(){this.removeAttribute(e)}}function M3(e){return function(){this.removeAttributeNS(e.space,e.local)}}function A3(e,t){return function(){this.setAttribute(e,t)}}function L3(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function P3(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function R3(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function I3(e,t){var n=hc(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?M3:T3:typeof t=="function"?n.local?R3:P3:n.local?L3:A3)(n,t))}function mb(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function O3(e){return function(){this.style.removeProperty(e)}}function $3(e,t,n){return function(){this.style.setProperty(e,t,n)}}function D3(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function F3(e,t,n){return arguments.length>1?this.each((t==null?O3:typeof t=="function"?D3:$3)(e,t,n??"")):eo(this.node(),e)}function eo(e,t){return e.style.getPropertyValue(t)||mb(e).getComputedStyle(e,null).getPropertyValue(t)}function B3(e){return function(){delete this[e]}}function U3(e,t){return function(){this[e]=t}}function W3(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function H3(e,t){return arguments.length>1?this.each((t==null?B3:typeof t=="function"?W3:U3)(e,t)):this.node()[e]}function gb(e){return e.trim().split(/^|\s+/)}function zf(e){return e.classList||new xb(e)}function xb(e){this._node=e,this._names=gb(e.getAttribute("class")||"")}xb.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function yb(e,t){for(var n=zf(e),r=-1,i=t.length;++r<i;)n.add(t[r])}function vb(e,t){for(var n=zf(e),r=-1,i=t.length;++r<i;)n.remove(t[r])}function V3(e){return function(){yb(this,e)}}function q3(e){return function(){vb(this,e)}}function Y3(e,t){return function(){(t.apply(this,arguments)?yb:vb)(this,e)}}function J3(e,t){var n=gb(e+"");if(arguments.length<2){for(var r=zf(this.node()),i=-1,s=n.length;++i<s;)if(!r.contains(n[i]))return!1;return!0}return this.each((typeof t=="function"?Y3:t?V3:q3)(n,t))}function G3(){this.textContent=""}function K3(e){return function(){this.textContent=e}}function Q3(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function X3(e){return arguments.length?this.each(e==null?G3:(typeof e=="function"?Q3:K3)(e)):this.node().textContent}function Z3(){this.innerHTML=""}function eM(e){return function(){this.innerHTML=e}}function tM(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function nM(e){return arguments.length?this.each(e==null?Z3:(typeof e=="function"?tM:eM)(e)):this.node().innerHTML}function rM(){this.nextSibling&&this.parentNode.appendChild(this)}function iM(){return this.each(rM)}function oM(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function sM(){return this.each(oM)}function aM(e){var t=typeof e=="function"?e:ub(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function lM(){return null}function cM(e,t){var n=typeof e=="function"?e:ub(e),r=t==null?lM:typeof t=="function"?t:Ef(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function uM(){var e=this.parentNode;e&&e.removeChild(this)}function dM(){return this.each(uM)}function pM(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function fM(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function hM(e){return this.select(e?fM:pM)}function mM(e){return arguments.length?this.property("__data__",e):this.node().__data__}function gM(e){return function(t){e.call(this,t,this.__data__)}}function xM(e){return e.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{type:t,name:n}})}function yM(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,i=t.length,s;n<i;++n)s=t[n],(!e.type||s.type===e.type)&&s.name===e.name?this.removeEventListener(s.type,s.listener,s.options):t[++r]=s;++r?t.length=r:delete this.__on}}}function vM(e,t,n){return function(){var r=this.__on,i,s=gM(t);if(r){for(var a=0,l=r.length;a<l;++a)if((i=r[a]).type===e.type&&i.name===e.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=s,i.options=n),i.value=t;return}}this.addEventListener(e.type,s,n),i={type:e.type,name:e.name,value:t,listener:s,options:n},r?r.push(i):this.__on=[i]}}function bM(e,t,n){var r=xM(e+""),i,s=r.length,a;if(arguments.length<2){var l=this.node().__on;if(l){for(var c=0,u=l.length,d;c<u;++c)for(i=0,d=l[c];i<s;++i)if((a=r[i]).type===d.type&&a.name===d.name)return d.value}return}for(l=t?vM:yM,i=0;i<s;++i)this.each(l(r[i],t,n));return this}function bb(e,t,n){var r=mb(e),i=r.CustomEvent;typeof i=="function"?i=new i(t,n):(i=r.document.createEvent("Event"),n?(i.initEvent(t,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(t,!1,!1)),e.dispatchEvent(i)}function wM(e,t){return function(){return bb(this,e,t)}}function kM(e,t){return function(){return bb(this,e,t.apply(this,arguments))}}function _M(e,t){return this.each((typeof t=="function"?kM:wM)(e,t))}function*jM(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,s=r.length,a;i<s;++i)(a=r[i])&&(yield a)}var wb=[null];function tn(e,t){this._groups=e,this._parents=t}function Bs(){return new tn([[document.documentElement]],wb)}function SM(){return this}tn.prototype=Bs.prototype={constructor:tn,select:QT,selectAll:t3,selectChild:o3,selectChildren:c3,filter:u3,data:g3,enter:d3,exit:y3,join:v3,merge:b3,selection:SM,order:w3,sort:k3,call:j3,nodes:S3,node:C3,size:N3,empty:E3,each:z3,attr:I3,style:F3,property:H3,classed:J3,text:X3,html:nM,raise:iM,lower:sM,append:aM,insert:cM,remove:dM,clone:hM,datum:mM,on:bM,dispatch:_M,[Symbol.iterator]:jM};function _t(e){return typeof e=="string"?new tn([[document.querySelector(e)]],[document.documentElement]):new tn([[e]],wb)}function CM(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Bn(e,t){if(e=CM(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}if(t.getBoundingClientRect){var i=t.getBoundingClientRect();return[e.clientX-i.left-t.clientLeft,e.clientY-i.top-t.clientTop]}}return[e.pageX,e.pageY]}const NM={passive:!1},js={capture:!0,passive:!1};function mu(e){e.stopImmediatePropagation()}function Ui(e){e.preventDefault(),e.stopImmediatePropagation()}function kb(e){var t=e.document.documentElement,n=_t(e).on("dragstart.drag",Ui,js);"onselectstart"in t?n.on("selectstart.drag",Ui,js):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function _b(e,t){var n=e.document.documentElement,r=_t(e).on("dragstart.drag",null);t&&(r.on("click.drag",Ui,js),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in n?r.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}const ya=e=>()=>e;function Wd(e,{sourceEvent:t,subject:n,target:r,identifier:i,active:s,x:a,y:l,dx:c,dy:u,dispatch:d}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},identifier:{value:i,enumerable:!0,configurable:!0},active:{value:s,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:l,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:d}})}Wd.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function EM(e){return!e.ctrlKey&&!e.button}function zM(){return this.parentNode}function TM(e,t){return t??{x:e.x,y:e.y}}function MM(){return navigator.maxTouchPoints||"ontouchstart"in this}function ix(){var e=EM,t=zM,n=TM,r=MM,i={},s=Fs("start","drag","end"),a=0,l,c,u,d,p=0;function f(j){j.on("mousedown.drag",h).filter(r).on("touchstart.drag",k).on("touchmove.drag",x,NM).on("touchend.drag touchcancel.drag",y).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(j,T){if(!(d||!e.call(this,j,T))){var _=v(this,t.call(this,j,T),j,T,"mouse");_&&(_t(j.view).on("mousemove.drag",m,js).on("mouseup.drag",b,js),kb(j.view),mu(j),u=!1,l=j.clientX,c=j.clientY,_("start",j))}}function m(j){if(Ui(j),!u){var T=j.clientX-l,_=j.clientY-c;u=T*T+_*_>p}i.mouse("drag",j)}function b(j){_t(j.view).on("mousemove.drag mouseup.drag",null),_b(j.view,u),Ui(j),i.mouse("end",j)}function k(j,T){if(e.call(this,j,T)){var _=j.changedTouches,A=t.call(this,j,T),E=_.length,W,C;for(W=0;W<E;++W)(C=v(this,A,j,T,_[W].identifier,_[W]))&&(mu(j),C("start",j,_[W]))}}function x(j){var T=j.changedTouches,_=T.length,A,E;for(A=0;A<_;++A)(E=i[T[A].identifier])&&(Ui(j),E("drag",j,T[A]))}function y(j){var T=j.changedTouches,_=T.length,A,E;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),A=0;A<_;++A)(E=i[T[A].identifier])&&(mu(j),E("end",j,T[A]))}function v(j,T,_,A,E,W){var C=s.copy(),R=Bn(W||_,T),H,Q,M;if((M=n.call(j,new Wd("beforestart",{sourceEvent:_,target:f,identifier:E,active:a,x:R[0],y:R[1],dx:0,dy:0,dispatch:C}),A))!=null)return H=M.x-R[0]||0,Q=M.y-R[1]||0,function F(O,L,B){var $=R,g;switch(O){case"start":i[E]=F,g=a++;break;case"end":delete i[E],--a;case"drag":R=Bn(B||L,T),g=a;break}C.call(O,j,new Wd(O,{sourceEvent:L,subject:M,target:f,identifier:E,active:g,x:R[0]+H,y:R[1]+Q,dx:R[0]-$[0],dy:R[1]-$[1],dispatch:C}),A)}}return f.filter=function(j){return arguments.length?(e=typeof j=="function"?j:ya(!!j),f):e},f.container=function(j){return arguments.length?(t=typeof j=="function"?j:ya(j),f):t},f.subject=function(j){return arguments.length?(n=typeof j=="function"?j:ya(j),f):n},f.touchable=function(j){return arguments.length?(r=typeof j=="function"?j:ya(!!j),f):r},f.on=function(){var j=s.on.apply(s,arguments);return j===s?f:j},f.clickDistance=function(j){return arguments.length?(p=(j=+j)*j,f):Math.sqrt(p)},f}function Tf(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function jb(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function Us(){}var Ss=.7,zl=1/Ss,Wi="\\s*([+-]?\\d+)\\s*",Cs="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Pn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",AM=/^#([0-9a-f]{3,8})$/,LM=new RegExp(`^rgb\\(${Wi},${Wi},${Wi}\\)$`),PM=new RegExp(`^rgb\\(${Pn},${Pn},${Pn}\\)$`),RM=new RegExp(`^rgba\\(${Wi},${Wi},${Wi},${Cs}\\)$`),IM=new RegExp(`^rgba\\(${Pn},${Pn},${Pn},${Cs}\\)$`),OM=new RegExp(`^hsl\\(${Cs},${Pn},${Pn}\\)$`),$M=new RegExp(`^hsla\\(${Cs},${Pn},${Pn},${Cs}\\)$`),ox={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Tf(Us,Zr,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:sx,formatHex:sx,formatHex8:DM,formatHsl:FM,formatRgb:ax,toString:ax});function sx(){return this.rgb().formatHex()}function DM(){return this.rgb().formatHex8()}function FM(){return Sb(this).formatHsl()}function ax(){return this.rgb().formatRgb()}function Zr(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=AM.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?lx(t):n===3?new Dt(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?va(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?va(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=LM.exec(e))?new Dt(t[1],t[2],t[3],1):(t=PM.exec(e))?new Dt(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=RM.exec(e))?va(t[1],t[2],t[3],t[4]):(t=IM.exec(e))?va(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=OM.exec(e))?dx(t[1],t[2]/100,t[3]/100,1):(t=$M.exec(e))?dx(t[1],t[2]/100,t[3]/100,t[4]):ox.hasOwnProperty(e)?lx(ox[e]):e==="transparent"?new Dt(NaN,NaN,NaN,0):null}function lx(e){return new Dt(e>>16&255,e>>8&255,e&255,1)}function va(e,t,n,r){return r<=0&&(e=t=n=NaN),new Dt(e,t,n,r)}function BM(e){return e instanceof Us||(e=Zr(e)),e?(e=e.rgb(),new Dt(e.r,e.g,e.b,e.opacity)):new Dt}function Hd(e,t,n,r){return arguments.length===1?BM(e):new Dt(e,t,n,r??1)}function Dt(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}Tf(Dt,Hd,jb(Us,{brighter(e){return e=e==null?zl:Math.pow(zl,e),new Dt(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Ss:Math.pow(Ss,e),new Dt(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Dt(Vr(this.r),Vr(this.g),Vr(this.b),Tl(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:cx,formatHex:cx,formatHex8:UM,formatRgb:ux,toString:ux}));function cx(){return`#${Fr(this.r)}${Fr(this.g)}${Fr(this.b)}`}function UM(){return`#${Fr(this.r)}${Fr(this.g)}${Fr(this.b)}${Fr((isNaN(this.opacity)?1:this.opacity)*255)}`}function ux(){const e=Tl(this.opacity);return`${e===1?"rgb(":"rgba("}${Vr(this.r)}, ${Vr(this.g)}, ${Vr(this.b)}${e===1?")":`, ${e})`}`}function Tl(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Vr(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Fr(e){return e=Vr(e),(e<16?"0":"")+e.toString(16)}function dx(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new vn(e,t,n,r)}function Sb(e){if(e instanceof vn)return new vn(e.h,e.s,e.l,e.opacity);if(e instanceof Us||(e=Zr(e)),!e)return new vn;if(e instanceof vn)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),s=Math.max(t,n,r),a=NaN,l=s-i,c=(s+i)/2;return l?(t===s?a=(n-r)/l+(n<r)*6:n===s?a=(r-t)/l+2:a=(t-n)/l+4,l/=c<.5?s+i:2-s-i,a*=60):l=c>0&&c<1?0:a,new vn(a,l,c,e.opacity)}function WM(e,t,n,r){return arguments.length===1?Sb(e):new vn(e,t,n,r??1)}function vn(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}Tf(vn,WM,jb(Us,{brighter(e){return e=e==null?zl:Math.pow(zl,e),new vn(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Ss:Math.pow(Ss,e),new vn(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new Dt(gu(e>=240?e-240:e+120,i,r),gu(e,i,r),gu(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new vn(px(this.h),ba(this.s),ba(this.l),Tl(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Tl(this.opacity);return`${e===1?"hsl(":"hsla("}${px(this.h)}, ${ba(this.s)*100}%, ${ba(this.l)*100}%${e===1?")":`, ${e})`}`}}));function px(e){return e=(e||0)%360,e<0?e+360:e}function ba(e){return Math.max(0,Math.min(1,e||0))}function gu(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const Mf=e=>()=>e;function HM(e,t){return function(n){return e+n*t}}function VM(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function qM(e){return(e=+e)==1?Cb:function(t,n){return n-t?VM(t,n,e):Mf(isNaN(t)?n:t)}}function Cb(e,t){var n=t-e;return n?HM(e,n):Mf(isNaN(e)?t:e)}const Ml=function e(t){var n=qM(t);function r(i,s){var a=n((i=Hd(i)).r,(s=Hd(s)).r),l=n(i.g,s.g),c=n(i.b,s.b),u=Cb(i.opacity,s.opacity);return function(d){return i.r=a(d),i.g=l(d),i.b=c(d),i.opacity=u(d),i+""}}return r.gamma=e,r}(1);function YM(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,r=t.slice(),i;return function(s){for(i=0;i<n;++i)r[i]=e[i]*(1-s)+t[i]*s;return r}}function JM(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function GM(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,i=new Array(r),s=new Array(n),a;for(a=0;a<r;++a)i[a]=Af(e[a],t[a]);for(;a<n;++a)s[a]=t[a];return function(l){for(a=0;a<r;++a)s[a]=i[a](l);return s}}function KM(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function yn(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function QM(e,t){var n={},r={},i;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(i in t)i in e?n[i]=Af(e[i],t[i]):r[i]=t[i];return function(s){for(i in n)r[i]=n[i](s);return r}}var Vd=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,xu=new RegExp(Vd.source,"g");function XM(e){return function(){return e}}function ZM(e){return function(t){return e(t)+""}}function Nb(e,t){var n=Vd.lastIndex=xu.lastIndex=0,r,i,s,a=-1,l=[],c=[];for(e=e+"",t=t+"";(r=Vd.exec(e))&&(i=xu.exec(t));)(s=i.index)>n&&(s=t.slice(n,s),l[a]?l[a]+=s:l[++a]=s),(r=r[0])===(i=i[0])?l[a]?l[a]+=i:l[++a]=i:(l[++a]=null,c.push({i:a,x:yn(r,i)})),n=xu.lastIndex;return n<t.length&&(s=t.slice(n),l[a]?l[a]+=s:l[++a]=s),l.length<2?c[0]?ZM(c[0].x):XM(t):(t=c.length,function(u){for(var d=0,p;d<t;++d)l[(p=c[d]).i]=p.x(u);return l.join("")})}function Af(e,t){var n=typeof t,r;return t==null||n==="boolean"?Mf(t):(n==="number"?yn:n==="string"?(r=Zr(t))?(t=r,Ml):Nb:t instanceof Zr?Ml:t instanceof Date?KM:JM(t)?YM:Array.isArray(t)?GM:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?QM:yn)(e,t)}function e6(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}var fx=180/Math.PI,qd={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Eb(e,t,n,r,i,s){var a,l,c;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(c=e*n+t*r)&&(n-=e*c,r-=t*c),(l=Math.sqrt(n*n+r*r))&&(n/=l,r/=l,c/=l),e*r<t*n&&(e=-e,t=-t,c=-c,a=-a),{translateX:i,translateY:s,rotate:Math.atan2(t,e)*fx,skewX:Math.atan(c)*fx,scaleX:a,scaleY:l}}var wa;function t6(e){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?qd:Eb(t.a,t.b,t.c,t.d,t.e,t.f)}function n6(e){return e==null||(wa||(wa=document.createElementNS("http://www.w3.org/2000/svg","g")),wa.setAttribute("transform",e),!(e=wa.transform.baseVal.consolidate()))?qd:(e=e.matrix,Eb(e.a,e.b,e.c,e.d,e.e,e.f))}function zb(e,t,n,r){function i(u){return u.length?u.pop()+" ":""}function s(u,d,p,f,h,m){if(u!==p||d!==f){var b=h.push("translate(",null,t,null,n);m.push({i:b-4,x:yn(u,p)},{i:b-2,x:yn(d,f)})}else(p||f)&&h.push("translate("+p+t+f+n)}function a(u,d,p,f){u!==d?(u-d>180?d+=360:d-u>180&&(u+=360),f.push({i:p.push(i(p)+"rotate(",null,r)-2,x:yn(u,d)})):d&&p.push(i(p)+"rotate("+d+r)}function l(u,d,p,f){u!==d?f.push({i:p.push(i(p)+"skewX(",null,r)-2,x:yn(u,d)}):d&&p.push(i(p)+"skewX("+d+r)}function c(u,d,p,f,h,m){if(u!==p||d!==f){var b=h.push(i(h)+"scale(",null,",",null,")");m.push({i:b-4,x:yn(u,p)},{i:b-2,x:yn(d,f)})}else(p!==1||f!==1)&&h.push(i(h)+"scale("+p+","+f+")")}return function(u,d){var p=[],f=[];return u=e(u),d=e(d),s(u.translateX,u.translateY,d.translateX,d.translateY,p,f),a(u.rotate,d.rotate,p,f),l(u.skewX,d.skewX,p,f),c(u.scaleX,u.scaleY,d.scaleX,d.scaleY,p,f),u=d=null,function(h){for(var m=-1,b=f.length,k;++m<b;)p[(k=f[m]).i]=k.x(h);return p.join("")}}}var r6=zb(t6,"px, ","px)","deg)"),i6=zb(n6,", ",")",")"),o6=1e-12;function hx(e){return((e=Math.exp(e))+1/e)/2}function s6(e){return((e=Math.exp(e))-1/e)/2}function a6(e){return((e=Math.exp(2*e))-1)/(e+1)}const l6=function e(t,n,r){function i(s,a){var l=s[0],c=s[1],u=s[2],d=a[0],p=a[1],f=a[2],h=d-l,m=p-c,b=h*h+m*m,k,x;if(b<o6)x=Math.log(f/u)/t,k=function(A){return[l+A*h,c+A*m,u*Math.exp(t*A*x)]};else{var y=Math.sqrt(b),v=(f*f-u*u+r*b)/(2*u*n*y),j=(f*f-u*u-r*b)/(2*f*n*y),T=Math.log(Math.sqrt(v*v+1)-v),_=Math.log(Math.sqrt(j*j+1)-j);x=(_-T)/t,k=function(A){var E=A*x,W=hx(T),C=u/(n*y)*(W*a6(t*E+T)-s6(T));return[l+C*h,c+C*m,u*W/hx(t*E+T)]}}return k.duration=x*1e3*t/Math.SQRT2,k}return i.rho=function(s){var a=Math.max(.001,+s),l=a*a,c=l*l;return e(a,l,c)},i}(Math.SQRT2,2,4);var to=0,Fo=0,To=0,Tb=1e3,Al,Bo,Ll=0,ei=0,mc=0,Ns=typeof performance=="object"&&performance.now?performance:Date,Mb=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Lf(){return ei||(Mb(c6),ei=Ns.now()+mc)}function c6(){ei=0}function Pl(){this._call=this._time=this._next=null}Pl.prototype=Pf.prototype={constructor:Pl,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?Lf():+n)+(t==null?0:+t),!this._next&&Bo!==this&&(Bo?Bo._next=this:Al=this,Bo=this),this._call=e,this._time=n,Yd()},stop:function(){this._call&&(this._call=null,this._time=1/0,Yd())}};function Pf(e,t,n){var r=new Pl;return r.restart(e,t,n),r}function u6(){Lf(),++to;for(var e=Al,t;e;)(t=ei-e._time)>=0&&e._call.call(void 0,t),e=e._next;--to}function mx(){ei=(Ll=Ns.now())+mc,to=Fo=0;try{u6()}finally{to=0,p6(),ei=0}}function d6(){var e=Ns.now(),t=e-Ll;t>Tb&&(mc-=t,Ll=e)}function p6(){for(var e,t=Al,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:Al=n);Bo=e,Yd(r)}function Yd(e){if(!to){Fo&&(Fo=clearTimeout(Fo));var t=e-ei;t>24?(e<1/0&&(Fo=setTimeout(mx,e-Ns.now()-mc)),To&&(To=clearInterval(To))):(To||(Ll=Ns.now(),To=setInterval(d6,Tb)),to=1,Mb(mx))}}function gx(e,t,n){var r=new Pl;return t=t==null?0:+t,r.restart(i=>{r.stop(),e(i+t)},t,n),r}var f6=Fs("start","end","cancel","interrupt"),h6=[],Ab=0,xx=1,Jd=2,Va=3,yx=4,Gd=5,qa=6;function gc(e,t,n,r,i,s){var a=e.__transition;if(!a)e.__transition={};else if(n in a)return;m6(e,n,{name:t,index:r,group:i,on:f6,tween:h6,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:Ab})}function Rf(e,t){var n=Sn(e,t);if(n.state>Ab)throw new Error("too late; already scheduled");return n}function On(e,t){var n=Sn(e,t);if(n.state>Va)throw new Error("too late; already running");return n}function Sn(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function m6(e,t,n){var r=e.__transition,i;r[t]=n,n.timer=Pf(s,0,n.time);function s(u){n.state=xx,n.timer.restart(a,n.delay,n.time),n.delay<=u&&a(u-n.delay)}function a(u){var d,p,f,h;if(n.state!==xx)return c();for(d in r)if(h=r[d],h.name===n.name){if(h.state===Va)return gx(a);h.state===yx?(h.state=qa,h.timer.stop(),h.on.call("interrupt",e,e.__data__,h.index,h.group),delete r[d]):+d<t&&(h.state=qa,h.timer.stop(),h.on.call("cancel",e,e.__data__,h.index,h.group),delete r[d])}if(gx(function(){n.state===Va&&(n.state=yx,n.timer.restart(l,n.delay,n.time),l(u))}),n.state=Jd,n.on.call("start",e,e.__data__,n.index,n.group),n.state===Jd){for(n.state=Va,i=new Array(f=n.tween.length),d=0,p=-1;d<f;++d)(h=n.tween[d].value.call(e,e.__data__,n.index,n.group))&&(i[++p]=h);i.length=p+1}}function l(u){for(var d=u<n.duration?n.ease.call(null,u/n.duration):(n.timer.restart(c),n.state=Gd,1),p=-1,f=i.length;++p<f;)i[p].call(e,d);n.state===Gd&&(n.on.call("end",e,e.__data__,n.index,n.group),c())}function c(){n.state=qa,n.timer.stop(),delete r[t];for(var u in r)return;delete e.__transition}}function Ya(e,t){var n=e.__transition,r,i,s=!0,a;if(n){t=t==null?null:t+"";for(a in n){if((r=n[a]).name!==t){s=!1;continue}i=r.state>Jd&&r.state<Gd,r.state=qa,r.timer.stop(),r.on.call(i?"interrupt":"cancel",e,e.__data__,r.index,r.group),delete n[a]}s&&delete e.__transition}}function g6(e){return this.each(function(){Ya(this,e)})}function x6(e,t){var n,r;return function(){var i=On(this,e),s=i.tween;if(s!==n){r=n=s;for(var a=0,l=r.length;a<l;++a)if(r[a].name===t){r=r.slice(),r.splice(a,1);break}}i.tween=r}}function y6(e,t,n){var r,i;if(typeof n!="function")throw new Error;return function(){var s=On(this,e),a=s.tween;if(a!==r){i=(r=a).slice();for(var l={name:t,value:n},c=0,u=i.length;c<u;++c)if(i[c].name===t){i[c]=l;break}c===u&&i.push(l)}s.tween=i}}function v6(e,t){var n=this._id;if(e+="",arguments.length<2){for(var r=Sn(this.node(),n).tween,i=0,s=r.length,a;i<s;++i)if((a=r[i]).name===e)return a.value;return null}return this.each((t==null?x6:y6)(n,e,t))}function If(e,t,n){var r=e._id;return e.each(function(){var i=On(this,r);(i.value||(i.value={}))[t]=n.apply(this,arguments)}),function(i){return Sn(i,r).value[t]}}function Lb(e,t){var n;return(typeof t=="number"?yn:t instanceof Zr?Ml:(n=Zr(t))?(t=n,Ml):Nb)(e,t)}function b6(e){return function(){this.removeAttribute(e)}}function w6(e){return function(){this.removeAttributeNS(e.space,e.local)}}function k6(e,t,n){var r,i=n+"",s;return function(){var a=this.getAttribute(e);return a===i?null:a===r?s:s=t(r=a,n)}}function _6(e,t,n){var r,i=n+"",s;return function(){var a=this.getAttributeNS(e.space,e.local);return a===i?null:a===r?s:s=t(r=a,n)}}function j6(e,t,n){var r,i,s;return function(){var a,l=n(this),c;return l==null?void this.removeAttribute(e):(a=this.getAttribute(e),c=l+"",a===c?null:a===r&&c===i?s:(i=c,s=t(r=a,l)))}}function S6(e,t,n){var r,i,s;return function(){var a,l=n(this),c;return l==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),c=l+"",a===c?null:a===r&&c===i?s:(i=c,s=t(r=a,l)))}}function C6(e,t){var n=hc(e),r=n==="transform"?i6:Lb;return this.attrTween(e,typeof t=="function"?(n.local?S6:j6)(n,r,If(this,"attr."+e,t)):t==null?(n.local?w6:b6)(n):(n.local?_6:k6)(n,r,t))}function N6(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function E6(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function z6(e,t){var n,r;function i(){var s=t.apply(this,arguments);return s!==r&&(n=(r=s)&&E6(e,s)),n}return i._value=t,i}function T6(e,t){var n,r;function i(){var s=t.apply(this,arguments);return s!==r&&(n=(r=s)&&N6(e,s)),n}return i._value=t,i}function M6(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var r=hc(e);return this.tween(n,(r.local?z6:T6)(r,t))}function A6(e,t){return function(){Rf(this,e).delay=+t.apply(this,arguments)}}function L6(e,t){return t=+t,function(){Rf(this,e).delay=t}}function P6(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?A6:L6)(t,e)):Sn(this.node(),t).delay}function R6(e,t){return function(){On(this,e).duration=+t.apply(this,arguments)}}function I6(e,t){return t=+t,function(){On(this,e).duration=t}}function O6(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?R6:I6)(t,e)):Sn(this.node(),t).duration}function $6(e,t){if(typeof t!="function")throw new Error;return function(){On(this,e).ease=t}}function D6(e){var t=this._id;return arguments.length?this.each($6(t,e)):Sn(this.node(),t).ease}function F6(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;On(this,e).ease=n}}function B6(e){if(typeof e!="function")throw new Error;return this.each(F6(this._id,e))}function U6(e){typeof e!="function"&&(e=pb(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var s=t[i],a=s.length,l=r[i]=[],c,u=0;u<a;++u)(c=s[u])&&e.call(c,c.__data__,u,s)&&l.push(c);return new er(r,this._parents,this._name,this._id)}function W6(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,r=t.length,i=n.length,s=Math.min(r,i),a=new Array(r),l=0;l<s;++l)for(var c=t[l],u=n[l],d=c.length,p=a[l]=new Array(d),f,h=0;h<d;++h)(f=c[h]||u[h])&&(p[h]=f);for(;l<r;++l)a[l]=t[l];return new er(a,this._parents,this._name,this._id)}function H6(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function V6(e,t,n){var r,i,s=H6(t)?Rf:On;return function(){var a=s(this,e),l=a.on;l!==r&&(i=(r=l).copy()).on(t,n),a.on=i}}function q6(e,t){var n=this._id;return arguments.length<2?Sn(this.node(),n).on.on(e):this.each(V6(n,e,t))}function Y6(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function J6(){return this.on("end.remove",Y6(this._id))}function G6(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Ef(e));for(var r=this._groups,i=r.length,s=new Array(i),a=0;a<i;++a)for(var l=r[a],c=l.length,u=s[a]=new Array(c),d,p,f=0;f<c;++f)(d=l[f])&&(p=e.call(d,d.__data__,f,l))&&("__data__"in d&&(p.__data__=d.__data__),u[f]=p,gc(u[f],t,n,f,u,Sn(d,n)));return new er(s,this._parents,t,n)}function K6(e){var t=this._name,n=this._id;typeof e!="function"&&(e=db(e));for(var r=this._groups,i=r.length,s=[],a=[],l=0;l<i;++l)for(var c=r[l],u=c.length,d,p=0;p<u;++p)if(d=c[p]){for(var f=e.call(d,d.__data__,p,c),h,m=Sn(d,n),b=0,k=f.length;b<k;++b)(h=f[b])&&gc(h,t,n,b,f,m);s.push(f),a.push(d)}return new er(s,a,t,n)}var Q6=Bs.prototype.constructor;function X6(){return new Q6(this._groups,this._parents)}function Z6(e,t){var n,r,i;return function(){var s=eo(this,e),a=(this.style.removeProperty(e),eo(this,e));return s===a?null:s===n&&a===r?i:i=t(n=s,r=a)}}function Pb(e){return function(){this.style.removeProperty(e)}}function e8(e,t,n){var r,i=n+"",s;return function(){var a=eo(this,e);return a===i?null:a===r?s:s=t(r=a,n)}}function t8(e,t,n){var r,i,s;return function(){var a=eo(this,e),l=n(this),c=l+"";return l==null&&(c=l=(this.style.removeProperty(e),eo(this,e))),a===c?null:a===r&&c===i?s:(i=c,s=t(r=a,l))}}function n8(e,t){var n,r,i,s="style."+t,a="end."+s,l;return function(){var c=On(this,e),u=c.on,d=c.value[s]==null?l||(l=Pb(t)):void 0;(u!==n||i!==d)&&(r=(n=u).copy()).on(a,i=d),c.on=r}}function r8(e,t,n){var r=(e+="")=="transform"?r6:Lb;return t==null?this.styleTween(e,Z6(e,r)).on("end.style."+e,Pb(e)):typeof t=="function"?this.styleTween(e,t8(e,r,If(this,"style."+e,t))).each(n8(this._id,e)):this.styleTween(e,e8(e,r,t),n).on("end.style."+e,null)}function i8(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function o8(e,t,n){var r,i;function s(){var a=t.apply(this,arguments);return a!==i&&(r=(i=a)&&i8(e,a,n)),r}return s._value=t,s}function s8(e,t,n){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,o8(e,t,n??""))}function a8(e){return function(){this.textContent=e}}function l8(e){return function(){var t=e(this);this.textContent=t??""}}function c8(e){return this.tween("text",typeof e=="function"?l8(If(this,"text",e)):a8(e==null?"":e+""))}function u8(e){return function(t){this.textContent=e.call(this,t)}}function d8(e){var t,n;function r(){var i=e.apply(this,arguments);return i!==n&&(t=(n=i)&&u8(i)),t}return r._value=e,r}function p8(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,d8(e))}function f8(){for(var e=this._name,t=this._id,n=Rb(),r=this._groups,i=r.length,s=0;s<i;++s)for(var a=r[s],l=a.length,c,u=0;u<l;++u)if(c=a[u]){var d=Sn(c,t);gc(c,e,n,u,a,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new er(r,this._parents,e,n)}function h8(){var e,t,n=this,r=n._id,i=n.size();return new Promise(function(s,a){var l={value:a},c={value:function(){--i===0&&s()}};n.each(function(){var u=On(this,r),d=u.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(l),t._.interrupt.push(l),t._.end.push(c)),u.on=t}),i===0&&s()})}var m8=0;function er(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function Rb(){return++m8}var Dn=Bs.prototype;er.prototype={constructor:er,select:G6,selectAll:K6,selectChild:Dn.selectChild,selectChildren:Dn.selectChildren,filter:U6,merge:W6,selection:X6,transition:f8,call:Dn.call,nodes:Dn.nodes,node:Dn.node,size:Dn.size,empty:Dn.empty,each:Dn.each,on:q6,attr:C6,attrTween:M6,style:r8,styleTween:s8,text:c8,textTween:p8,remove:J6,tween:v6,delay:P6,duration:O6,ease:D6,easeVarying:B6,end:h8,[Symbol.iterator]:Dn[Symbol.iterator]};function g8(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var x8={time:null,delay:0,duration:250,ease:g8};function y8(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function v8(e){var t,n;e instanceof er?(t=e._id,e=e._name):(t=Rb(),(n=x8).time=Lf(),e=e==null?null:e+"");for(var r=this._groups,i=r.length,s=0;s<i;++s)for(var a=r[s],l=a.length,c,u=0;u<l;++u)(c=a[u])&&gc(c,e,t,u,a,n||y8(c,t));return new er(r,this._parents,e,t)}Bs.prototype.interrupt=g6;Bs.prototype.transition=v8;const Kd=Math.PI,Qd=2*Kd,Rr=1e-6,b8=Qd-Rr;function Ib(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}function w8(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return Ib;const n=10**t;return function(r){this._+=r[0];for(let i=1,s=r.length;i<s;++i)this._+=Math.round(arguments[i]*n)/n+r[i]}}class k8{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?Ib:w8(t)}moveTo(t,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,n){this._append`L${this._x1=+t},${this._y1=+n}`}quadraticCurveTo(t,n,r,i){this._append`Q${+t},${+n},${this._x1=+r},${this._y1=+i}`}bezierCurveTo(t,n,r,i,s,a){this._append`C${+t},${+n},${+r},${+i},${this._x1=+s},${this._y1=+a}`}arcTo(t,n,r,i,s){if(t=+t,n=+n,r=+r,i=+i,s=+s,s<0)throw new Error(`negative radius: ${s}`);let a=this._x1,l=this._y1,c=r-t,u=i-n,d=a-t,p=l-n,f=d*d+p*p;if(this._x1===null)this._append`M${this._x1=t},${this._y1=n}`;else if(f>Rr)if(!(Math.abs(p*c-u*d)>Rr)||!s)this._append`L${this._x1=t},${this._y1=n}`;else{let h=r-a,m=i-l,b=c*c+u*u,k=h*h+m*m,x=Math.sqrt(b),y=Math.sqrt(f),v=s*Math.tan((Kd-Math.acos((b+f-k)/(2*x*y)))/2),j=v/y,T=v/x;Math.abs(j-1)>Rr&&this._append`L${t+j*d},${n+j*p}`,this._append`A${s},${s},0,0,${+(p*h>d*m)},${this._x1=t+T*c},${this._y1=n+T*u}`}}arc(t,n,r,i,s,a){if(t=+t,n=+n,r=+r,a=!!a,r<0)throw new Error(`negative radius: ${r}`);let l=r*Math.cos(i),c=r*Math.sin(i),u=t+l,d=n+c,p=1^a,f=a?i-s:s-i;this._x1===null?this._append`M${u},${d}`:(Math.abs(this._x1-u)>Rr||Math.abs(this._y1-d)>Rr)&&this._append`L${u},${d}`,r&&(f<0&&(f=f%Qd+Qd),f>b8?this._append`A${r},${r},0,1,${p},${t-l},${n-c}A${r},${r},0,1,${p},${this._x1=u},${this._y1=d}`:f>Rr&&this._append`A${r},${r},0,${+(f>=Kd)},${p},${this._x1=t+r*Math.cos(s)},${this._y1=n+r*Math.sin(s)}`)}rect(t,n,r,i){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${r=+r}v${+i}h${-r}Z`}toString(){return this._}}function vx(e,t){var n,r=1;e==null&&(e=0),t==null&&(t=0);function i(){var s,a=n.length,l,c=0,u=0;for(s=0;s<a;++s)l=n[s],c+=l.x,u+=l.y;for(c=(c/a-e)*r,u=(u/a-t)*r,s=0;s<a;++s)l=n[s],l.x-=c,l.y-=u}return i.initialize=function(s){n=s},i.x=function(s){return arguments.length?(e=+s,i):e},i.y=function(s){return arguments.length?(t=+s,i):t},i.strength=function(s){return arguments.length?(r=+s,i):r},i}function _8(e){const t=+this._x.call(null,e),n=+this._y.call(null,e);return Ob(this.cover(t,n),t,n,e)}function Ob(e,t,n,r){if(isNaN(t)||isNaN(n))return e;var i,s=e._root,a={data:r},l=e._x0,c=e._y0,u=e._x1,d=e._y1,p,f,h,m,b,k,x,y;if(!s)return e._root=a,e;for(;s.length;)if((b=t>=(p=(l+u)/2))?l=p:u=p,(k=n>=(f=(c+d)/2))?c=f:d=f,i=s,!(s=s[x=k<<1|b]))return i[x]=a,e;if(h=+e._x.call(null,s.data),m=+e._y.call(null,s.data),t===h&&n===m)return a.next=s,i?i[x]=a:e._root=a,e;do i=i?i[x]=new Array(4):e._root=new Array(4),(b=t>=(p=(l+u)/2))?l=p:u=p,(k=n>=(f=(c+d)/2))?c=f:d=f;while((x=k<<1|b)===(y=(m>=f)<<1|h>=p));return i[y]=s,i[x]=a,e}function j8(e){var t,n,r=e.length,i,s,a=new Array(r),l=new Array(r),c=1/0,u=1/0,d=-1/0,p=-1/0;for(n=0;n<r;++n)isNaN(i=+this._x.call(null,t=e[n]))||isNaN(s=+this._y.call(null,t))||(a[n]=i,l[n]=s,i<c&&(c=i),i>d&&(d=i),s<u&&(u=s),s>p&&(p=s));if(c>d||u>p)return this;for(this.cover(c,u).cover(d,p),n=0;n<r;++n)Ob(this,a[n],l[n],e[n]);return this}function S8(e,t){if(isNaN(e=+e)||isNaN(t=+t))return this;var n=this._x0,r=this._y0,i=this._x1,s=this._y1;if(isNaN(n))i=(n=Math.floor(e))+1,s=(r=Math.floor(t))+1;else{for(var a=i-n||1,l=this._root,c,u;n>e||e>=i||r>t||t>=s;)switch(u=(t<r)<<1|e<n,c=new Array(4),c[u]=l,l=c,a*=2,u){case 0:i=n+a,s=r+a;break;case 1:n=i-a,s=r+a;break;case 2:i=n+a,r=s-a;break;case 3:n=i-a,r=s-a;break}this._root&&this._root.length&&(this._root=l)}return this._x0=n,this._y0=r,this._x1=i,this._y1=s,this}function C8(){var e=[];return this.visit(function(t){if(!t.length)do e.push(t.data);while(t=t.next)}),e}function N8(e){return arguments.length?this.cover(+e[0][0],+e[0][1]).cover(+e[1][0],+e[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function Tt(e,t,n,r,i){this.node=e,this.x0=t,this.y0=n,this.x1=r,this.y1=i}function E8(e,t,n){var r,i=this._x0,s=this._y0,a,l,c,u,d=this._x1,p=this._y1,f=[],h=this._root,m,b;for(h&&f.push(new Tt(h,i,s,d,p)),n==null?n=1/0:(i=e-n,s=t-n,d=e+n,p=t+n,n*=n);m=f.pop();)if(!(!(h=m.node)||(a=m.x0)>d||(l=m.y0)>p||(c=m.x1)<i||(u=m.y1)<s))if(h.length){var k=(a+c)/2,x=(l+u)/2;f.push(new Tt(h[3],k,x,c,u),new Tt(h[2],a,x,k,u),new Tt(h[1],k,l,c,x),new Tt(h[0],a,l,k,x)),(b=(t>=x)<<1|e>=k)&&(m=f[f.length-1],f[f.length-1]=f[f.length-1-b],f[f.length-1-b]=m)}else{var y=e-+this._x.call(null,h.data),v=t-+this._y.call(null,h.data),j=y*y+v*v;if(j<n){var T=Math.sqrt(n=j);i=e-T,s=t-T,d=e+T,p=t+T,r=h.data}}return r}function z8(e){if(isNaN(d=+this._x.call(null,e))||isNaN(p=+this._y.call(null,e)))return this;var t,n=this._root,r,i,s,a=this._x0,l=this._y0,c=this._x1,u=this._y1,d,p,f,h,m,b,k,x;if(!n)return this;if(n.length)for(;;){if((m=d>=(f=(a+c)/2))?a=f:c=f,(b=p>=(h=(l+u)/2))?l=h:u=h,t=n,!(n=n[k=b<<1|m]))return this;if(!n.length)break;(t[k+1&3]||t[k+2&3]||t[k+3&3])&&(r=t,x=k)}for(;n.data!==e;)if(i=n,!(n=n.next))return this;return(s=n.next)&&delete n.next,i?(s?i.next=s:delete i.next,this):t?(s?t[k]=s:delete t[k],(n=t[0]||t[1]||t[2]||t[3])&&n===(t[3]||t[2]||t[1]||t[0])&&!n.length&&(r?r[x]=n:this._root=n),this):(this._root=s,this)}function T8(e){for(var t=0,n=e.length;t<n;++t)this.remove(e[t]);return this}function M8(){return this._root}function A8(){var e=0;return this.visit(function(t){if(!t.length)do++e;while(t=t.next)}),e}function L8(e){var t=[],n,r=this._root,i,s,a,l,c;for(r&&t.push(new Tt(r,this._x0,this._y0,this._x1,this._y1));n=t.pop();)if(!e(r=n.node,s=n.x0,a=n.y0,l=n.x1,c=n.y1)&&r.length){var u=(s+l)/2,d=(a+c)/2;(i=r[3])&&t.push(new Tt(i,u,d,l,c)),(i=r[2])&&t.push(new Tt(i,s,d,u,c)),(i=r[1])&&t.push(new Tt(i,u,a,l,d)),(i=r[0])&&t.push(new Tt(i,s,a,u,d))}return this}function P8(e){var t=[],n=[],r;for(this._root&&t.push(new Tt(this._root,this._x0,this._y0,this._x1,this._y1));r=t.pop();){var i=r.node;if(i.length){var s,a=r.x0,l=r.y0,c=r.x1,u=r.y1,d=(a+c)/2,p=(l+u)/2;(s=i[0])&&t.push(new Tt(s,a,l,d,p)),(s=i[1])&&t.push(new Tt(s,d,l,c,p)),(s=i[2])&&t.push(new Tt(s,a,p,d,u)),(s=i[3])&&t.push(new Tt(s,d,p,c,u))}n.push(r)}for(;r=n.pop();)e(r.node,r.x0,r.y0,r.x1,r.y1);return this}function R8(e){return e[0]}function I8(e){return arguments.length?(this._x=e,this):this._x}function O8(e){return e[1]}function $8(e){return arguments.length?(this._y=e,this):this._y}function Of(e,t,n){var r=new $f(t??R8,n??O8,NaN,NaN,NaN,NaN);return e==null?r:r.addAll(e)}function $f(e,t,n,r,i,s){this._x=e,this._y=t,this._x0=n,this._y0=r,this._x1=i,this._y1=s,this._root=void 0}function bx(e){for(var t={data:e.data},n=t;e=e.next;)n=n.next={data:e.data};return t}var Pt=Of.prototype=$f.prototype;Pt.copy=function(){var e=new $f(this._x,this._y,this._x0,this._y0,this._x1,this._y1),t=this._root,n,r;if(!t)return e;if(!t.length)return e._root=bx(t),e;for(n=[{source:t,target:e._root=new Array(4)}];t=n.pop();)for(var i=0;i<4;++i)(r=t.source[i])&&(r.length?n.push({source:r,target:t.target[i]=new Array(4)}):t.target[i]=bx(r));return e};Pt.add=_8;Pt.addAll=j8;Pt.cover=S8;Pt.data=C8;Pt.extent=N8;Pt.find=E8;Pt.remove=z8;Pt.removeAll=T8;Pt.root=M8;Pt.size=A8;Pt.visit=L8;Pt.visitAfter=P8;Pt.x=I8;Pt.y=$8;function qr(e){return function(){return e}}function hr(e){return(e()-.5)*1e-6}function D8(e){return e.x+e.vx}function F8(e){return e.y+e.vy}function wx(e){var t,n,r,i=1,s=1;typeof e!="function"&&(e=qr(e==null?1:+e));function a(){for(var u,d=t.length,p,f,h,m,b,k,x=0;x<s;++x)for(p=Of(t,D8,F8).visitAfter(l),u=0;u<d;++u)f=t[u],b=n[f.index],k=b*b,h=f.x+f.vx,m=f.y+f.vy,p.visit(y);function y(v,j,T,_,A){var E=v.data,W=v.r,C=b+W;if(E){if(E.index>f.index){var R=h-E.x-E.vx,H=m-E.y-E.vy,Q=R*R+H*H;Q<C*C&&(R===0&&(R=hr(r),Q+=R*R),H===0&&(H=hr(r),Q+=H*H),Q=(C-(Q=Math.sqrt(Q)))/Q*i,f.vx+=(R*=Q)*(C=(W*=W)/(k+W)),f.vy+=(H*=Q)*C,E.vx-=R*(C=1-C),E.vy-=H*C)}return}return j>h+C||_<h-C||T>m+C||A<m-C}}function l(u){if(u.data)return u.r=n[u.data.index];for(var d=u.r=0;d<4;++d)u[d]&&u[d].r>u.r&&(u.r=u[d].r)}function c(){if(t){var u,d=t.length,p;for(n=new Array(d),u=0;u<d;++u)p=t[u],n[p.index]=+e(p,u,t)}}return a.initialize=function(u,d){t=u,r=d,c()},a.iterations=function(u){return arguments.length?(s=+u,a):s},a.strength=function(u){return arguments.length?(i=+u,a):i},a.radius=function(u){return arguments.length?(e=typeof u=="function"?u:qr(+u),c(),a):e},a}function B8(e){return e.index}function kx(e,t){var n=e.get(t);if(!n)throw new Error("node not found: "+t);return n}function _x(e){var t=B8,n=p,r,i=qr(30),s,a,l,c,u,d=1;e==null&&(e=[]);function p(k){return 1/Math.min(l[k.source.index],l[k.target.index])}function f(k){for(var x=0,y=e.length;x<d;++x)for(var v=0,j,T,_,A,E,W,C;v<y;++v)j=e[v],T=j.source,_=j.target,A=_.x+_.vx-T.x-T.vx||hr(u),E=_.y+_.vy-T.y-T.vy||hr(u),W=Math.sqrt(A*A+E*E),W=(W-s[v])/W*k*r[v],A*=W,E*=W,_.vx-=A*(C=c[v]),_.vy-=E*C,T.vx+=A*(C=1-C),T.vy+=E*C}function h(){if(a){var k,x=a.length,y=e.length,v=new Map(a.map((T,_)=>[t(T,_,a),T])),j;for(k=0,l=new Array(x);k<y;++k)j=e[k],j.index=k,typeof j.source!="object"&&(j.source=kx(v,j.source)),typeof j.target!="object"&&(j.target=kx(v,j.target)),l[j.source.index]=(l[j.source.index]||0)+1,l[j.target.index]=(l[j.target.index]||0)+1;for(k=0,c=new Array(y);k<y;++k)j=e[k],c[k]=l[j.source.index]/(l[j.source.index]+l[j.target.index]);r=new Array(y),m(),s=new Array(y),b()}}function m(){if(a)for(var k=0,x=e.length;k<x;++k)r[k]=+n(e[k],k,e)}function b(){if(a)for(var k=0,x=e.length;k<x;++k)s[k]=+i(e[k],k,e)}return f.initialize=function(k,x){a=k,u=x,h()},f.links=function(k){return arguments.length?(e=k,h(),f):e},f.id=function(k){return arguments.length?(t=k,f):t},f.iterations=function(k){return arguments.length?(d=+k,f):d},f.strength=function(k){return arguments.length?(n=typeof k=="function"?k:qr(+k),m(),f):n},f.distance=function(k){return arguments.length?(i=typeof k=="function"?k:qr(+k),b(),f):i},f}const U8=1664525,W8=1013904223,jx=4294967296;function H8(){let e=1;return()=>(e=(U8*e+W8)%jx)/jx}function V8(e){return e.x}function q8(e){return e.y}var Y8=10,J8=Math.PI*(3-Math.sqrt(5));function Sx(e){var t,n=1,r=.001,i=1-Math.pow(r,1/300),s=0,a=.6,l=new Map,c=Pf(p),u=Fs("tick","end"),d=H8();e==null&&(e=[]);function p(){f(),u.call("tick",t),n<r&&(c.stop(),u.call("end",t))}function f(b){var k,x=e.length,y;b===void 0&&(b=1);for(var v=0;v<b;++v)for(n+=(s-n)*i,l.forEach(function(j){j(n)}),k=0;k<x;++k)y=e[k],y.fx==null?y.x+=y.vx*=a:(y.x=y.fx,y.vx=0),y.fy==null?y.y+=y.vy*=a:(y.y=y.fy,y.vy=0);return t}function h(){for(var b=0,k=e.length,x;b<k;++b){if(x=e[b],x.index=b,x.fx!=null&&(x.x=x.fx),x.fy!=null&&(x.y=x.fy),isNaN(x.x)||isNaN(x.y)){var y=Y8*Math.sqrt(.5+b),v=b*J8;x.x=y*Math.cos(v),x.y=y*Math.sin(v)}(isNaN(x.vx)||isNaN(x.vy))&&(x.vx=x.vy=0)}}function m(b){return b.initialize&&b.initialize(e,d),b}return h(),t={tick:f,restart:function(){return c.restart(p),t},stop:function(){return c.stop(),t},nodes:function(b){return arguments.length?(e=b,h(),l.forEach(m),t):e},alpha:function(b){return arguments.length?(n=+b,t):n},alphaMin:function(b){return arguments.length?(r=+b,t):r},alphaDecay:function(b){return arguments.length?(i=+b,t):+i},alphaTarget:function(b){return arguments.length?(s=+b,t):s},velocityDecay:function(b){return arguments.length?(a=1-b,t):1-a},randomSource:function(b){return arguments.length?(d=b,l.forEach(m),t):d},force:function(b,k){return arguments.length>1?(k==null?l.delete(b):l.set(b,m(k)),t):l.get(b)},find:function(b,k,x){var y=0,v=e.length,j,T,_,A,E;for(x==null?x=1/0:x*=x,y=0;y<v;++y)A=e[y],j=b-A.x,T=k-A.y,_=j*j+T*T,_<x&&(E=A,x=_);return E},on:function(b,k){return arguments.length>1?(u.on(b,k),t):u.on(b)}}}function Cx(){var e,t,n,r,i=qr(-30),s,a=1,l=1/0,c=.81;function u(h){var m,b=e.length,k=Of(e,V8,q8).visitAfter(p);for(r=h,m=0;m<b;++m)t=e[m],k.visit(f)}function d(){if(e){var h,m=e.length,b;for(s=new Array(m),h=0;h<m;++h)b=e[h],s[b.index]=+i(b,h,e)}}function p(h){var m=0,b,k,x=0,y,v,j;if(h.length){for(y=v=j=0;j<4;++j)(b=h[j])&&(k=Math.abs(b.value))&&(m+=b.value,x+=k,y+=k*b.x,v+=k*b.y);h.x=y/x,h.y=v/x}else{b=h,b.x=b.data.x,b.y=b.data.y;do m+=s[b.data.index];while(b=b.next)}h.value=m}function f(h,m,b,k){if(!h.value)return!0;var x=h.x-t.x,y=h.y-t.y,v=k-m,j=x*x+y*y;if(v*v/c<j)return j<l&&(x===0&&(x=hr(n),j+=x*x),y===0&&(y=hr(n),j+=y*y),j<a&&(j=Math.sqrt(a*j)),t.vx+=x*h.value*r/j,t.vy+=y*h.value*r/j),!0;if(h.length||j>=l)return;(h.data!==t||h.next)&&(x===0&&(x=hr(n),j+=x*x),y===0&&(y=hr(n),j+=y*y),j<a&&(j=Math.sqrt(a*j)));do h.data!==t&&(v=s[h.data.index]*r/j,t.vx+=x*v,t.vy+=y*v);while(h=h.next)}return u.initialize=function(h,m){e=h,n=m,d()},u.strength=function(h){return arguments.length?(i=typeof h=="function"?h:qr(+h),d(),u):i},u.distanceMin=function(h){return arguments.length?(a=h*h,u):Math.sqrt(a)},u.distanceMax=function(h){return arguments.length?(l=h*h,u):Math.sqrt(l)},u.theta=function(h){return arguments.length?(c=h*h,u):Math.sqrt(c)},u}function G8(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function Rl(e,t){if((n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;var n,r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function no(e){return e=Rl(Math.abs(e)),e?e[1]:NaN}function K8(e,t){return function(n,r){for(var i=n.length,s=[],a=0,l=e[0],c=0;i>0&&l>0&&(c+l+1>r&&(l=Math.max(1,r-c)),s.push(n.substring(i-=l,i+l)),!((c+=l+1)>r));)l=e[a=(a+1)%e.length];return s.reverse().join(t)}}function Q8(e){return function(t){return t.replace(/[0-9]/g,function(n){return e[+n]})}}var X8=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Il(e){if(!(t=X8.exec(e)))throw new Error("invalid format: "+e);var t;return new Df({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}Il.prototype=Df.prototype;function Df(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}Df.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Z8(e){e:for(var t=e.length,n=1,r=-1,i;n<t;++n)switch(e[n]){case".":r=i=n;break;case"0":r===0&&(r=n),i=n;break;default:if(!+e[n])break e;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(i+1):e}var $b;function e5(e,t){var n=Rl(e,t);if(!n)return e+"";var r=n[0],i=n[1],s=i-($b=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,a=r.length;return s===a?r:s>a?r+new Array(s-a+1).join("0"):s>0?r.slice(0,s)+"."+r.slice(s):"0."+new Array(1-s).join("0")+Rl(e,Math.max(0,t+s-1))[0]}function Nx(e,t){var n=Rl(e,t);if(!n)return e+"";var r=n[0],i=n[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}const Ex={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:G8,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>Nx(e*100,t),r:Nx,s:e5,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function zx(e){return e}var Tx=Array.prototype.map,Mx=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function t5(e){var t=e.grouping===void 0||e.thousands===void 0?zx:K8(Tx.call(e.grouping,Number),e.thousands+""),n=e.currency===void 0?"":e.currency[0]+"",r=e.currency===void 0?"":e.currency[1]+"",i=e.decimal===void 0?".":e.decimal+"",s=e.numerals===void 0?zx:Q8(Tx.call(e.numerals,String)),a=e.percent===void 0?"%":e.percent+"",l=e.minus===void 0?"−":e.minus+"",c=e.nan===void 0?"NaN":e.nan+"";function u(p){p=Il(p);var f=p.fill,h=p.align,m=p.sign,b=p.symbol,k=p.zero,x=p.width,y=p.comma,v=p.precision,j=p.trim,T=p.type;T==="n"?(y=!0,T="g"):Ex[T]||(v===void 0&&(v=12),j=!0,T="g"),(k||f==="0"&&h==="=")&&(k=!0,f="0",h="=");var _=b==="$"?n:b==="#"&&/[boxX]/.test(T)?"0"+T.toLowerCase():"",A=b==="$"?r:/[%p]/.test(T)?a:"",E=Ex[T],W=/[defgprs%]/.test(T);v=v===void 0?6:/[gprs]/.test(T)?Math.max(1,Math.min(21,v)):Math.max(0,Math.min(20,v));function C(R){var H=_,Q=A,M,F,O;if(T==="c")Q=E(R)+Q,R="";else{R=+R;var L=R<0||1/R<0;if(R=isNaN(R)?c:E(Math.abs(R),v),j&&(R=Z8(R)),L&&+R==0&&m!=="+"&&(L=!1),H=(L?m==="("?m:l:m==="-"||m==="("?"":m)+H,Q=(T==="s"?Mx[8+$b/3]:"")+Q+(L&&m==="("?")":""),W){for(M=-1,F=R.length;++M<F;)if(O=R.charCodeAt(M),48>O||O>57){Q=(O===46?i+R.slice(M+1):R.slice(M))+Q,R=R.slice(0,M);break}}}y&&!k&&(R=t(R,1/0));var B=H.length+R.length+Q.length,$=B<x?new Array(x-B+1).join(f):"";switch(y&&k&&(R=t($+R,$.length?x-Q.length:1/0),$=""),h){case"<":R=H+R+Q+$;break;case"=":R=H+$+R+Q;break;case"^":R=$.slice(0,B=$.length>>1)+H+R+Q+$.slice(B);break;default:R=$+H+R+Q;break}return s(R)}return C.toString=function(){return p+""},C}function d(p,f){var h=u((p=Il(p),p.type="f",p)),m=Math.max(-8,Math.min(8,Math.floor(no(f)/3)))*3,b=Math.pow(10,-m),k=Mx[8+m/3];return function(x){return h(b*x)+k}}return{format:u,formatPrefix:d}}var ka,Db,Fb;n5({thousands:",",grouping:[3],currency:["$",""]});function n5(e){return ka=t5(e),Db=ka.format,Fb=ka.formatPrefix,ka}function r5(e){return Math.max(0,-no(Math.abs(e)))}function i5(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(no(t)/3)))*3-no(Math.abs(e)))}function o5(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,no(t)-no(e))+1}function Bb(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function s5(e){return function(){return e}}function a5(e){return+e}var Ax=[0,1];function Mi(e){return e}function Xd(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:s5(isNaN(t)?NaN:.5)}function l5(e,t){var n;return e>t&&(n=e,e=t,t=n),function(r){return Math.max(e,Math.min(t,r))}}function c5(e,t,n){var r=e[0],i=e[1],s=t[0],a=t[1];return i<r?(r=Xd(i,r),s=n(a,s)):(r=Xd(r,i),s=n(s,a)),function(l){return s(r(l))}}function u5(e,t,n){var r=Math.min(e.length,t.length)-1,i=new Array(r),s=new Array(r),a=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++a<r;)i[a]=Xd(e[a],e[a+1]),s[a]=n(t[a],t[a+1]);return function(l){var c=DT(e,l,1,r)-1;return s[c](i[c](l))}}function Ub(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function d5(){var e=Ax,t=Ax,n=Af,r,i,s,a=Mi,l,c,u;function d(){var f=Math.min(e.length,t.length);return a!==Mi&&(a=l5(e[0],e[f-1])),l=f>2?u5:c5,c=u=null,p}function p(f){return f==null||isNaN(f=+f)?s:(c||(c=l(e.map(r),t,n)))(r(a(f)))}return p.invert=function(f){return a(i((u||(u=l(t,e.map(r),yn)))(f)))},p.domain=function(f){return arguments.length?(e=Array.from(f,a5),d()):e.slice()},p.range=function(f){return arguments.length?(t=Array.from(f),d()):t.slice()},p.rangeRound=function(f){return t=Array.from(f),n=e6,d()},p.clamp=function(f){return arguments.length?(a=f?!0:Mi,d()):a!==Mi},p.interpolate=function(f){return arguments.length?(n=f,d()):n},p.unknown=function(f){return arguments.length?(s=f,p):s},function(f,h){return r=f,i=h,d()}}function Wb(){return d5()(Mi,Mi)}function p5(e,t,n,r){var i=Bd(e,t,n),s;switch(r=Il(r??",f"),r.type){case"s":{var a=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(s=i5(i,a))&&(r.precision=s),Fb(r,a)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(s=o5(i,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=s-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(s=r5(i))&&(r.precision=s-(r.type==="%")*2);break}}return Db(r)}function f5(e){var t=e.domain;return e.ticks=function(n){var r=t();return HT(r[0],r[r.length-1],n??10)},e.tickFormat=function(n,r){var i=t();return p5(i[0],i[i.length-1],n??10,r)},e.nice=function(n){n==null&&(n=10);var r=t(),i=0,s=r.length-1,a=r[i],l=r[s],c,u,d=10;for(l<a&&(u=a,a=l,l=u,u=i,i=s,s=u);d-- >0;){if(u=Fd(a,l,n),u===c)return r[i]=a,r[s]=l,t(r);if(u>0)a=Math.floor(a/u)*u,l=Math.ceil(l/u)*u;else if(u<0)a=Math.ceil(a*u)/u,l=Math.floor(l*u)/u;else break;c=u}return e},e}function Hb(){var e=Wb();return e.copy=function(){return Ub(e,Hb())},Bb.apply(e,arguments),f5(e)}function h5(e,t){e=e.slice();var n=0,r=e.length-1,i=e[n],s=e[r],a;return s<i&&(a=n,n=r,r=a,a=i,i=s,s=a),e[n]=t.floor(i),e[r]=t.ceil(s),e}const yu=new Date,vu=new Date;function lt(e,t,n,r){function i(s){return e(s=arguments.length===0?new Date:new Date(+s)),s}return i.floor=s=>(e(s=new Date(+s)),s),i.ceil=s=>(e(s=new Date(s-1)),t(s,1),e(s),s),i.round=s=>{const a=i(s),l=i.ceil(s);return s-a<l-s?a:l},i.offset=(s,a)=>(t(s=new Date(+s),a==null?1:Math.floor(a)),s),i.range=(s,a,l)=>{const c=[];if(s=i.ceil(s),l=l==null?1:Math.floor(l),!(s<a)||!(l>0))return c;let u;do c.push(u=new Date(+s)),t(s,l),e(s);while(u<s&&s<a);return c},i.filter=s=>lt(a=>{if(a>=a)for(;e(a),!s(a);)a.setTime(a-1)},(a,l)=>{if(a>=a)if(l<0)for(;++l<=0;)for(;t(a,-1),!s(a););else for(;--l>=0;)for(;t(a,1),!s(a););}),n&&(i.count=(s,a)=>(yu.setTime(+s),vu.setTime(+a),e(yu),e(vu),Math.floor(n(yu,vu))),i.every=s=>(s=Math.floor(s),!isFinite(s)||!(s>0)?null:s>1?i.filter(r?a=>r(a)%s===0:a=>i.count(0,a)%s===0):i)),i}const Ol=lt(()=>{},(e,t)=>{e.setTime(+e+t)},(e,t)=>t-e);Ol.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?lt(t=>{t.setTime(Math.floor(t/e)*e)},(t,n)=>{t.setTime(+t+n*e)},(t,n)=>(n-t)/e):Ol);Ol.range;const Vn=1e3,un=Vn*60,qn=un*60,tr=qn*24,Ff=tr*7,Lx=tr*30,bu=tr*365,Ai=lt(e=>{e.setTime(e-e.getMilliseconds())},(e,t)=>{e.setTime(+e+t*Vn)},(e,t)=>(t-e)/Vn,e=>e.getUTCSeconds());Ai.range;const Bf=lt(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*Vn)},(e,t)=>{e.setTime(+e+t*un)},(e,t)=>(t-e)/un,e=>e.getMinutes());Bf.range;const m5=lt(e=>{e.setUTCSeconds(0,0)},(e,t)=>{e.setTime(+e+t*un)},(e,t)=>(t-e)/un,e=>e.getUTCMinutes());m5.range;const Uf=lt(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*Vn-e.getMinutes()*un)},(e,t)=>{e.setTime(+e+t*qn)},(e,t)=>(t-e)/qn,e=>e.getHours());Uf.range;const g5=lt(e=>{e.setUTCMinutes(0,0,0)},(e,t)=>{e.setTime(+e+t*qn)},(e,t)=>(t-e)/qn,e=>e.getUTCHours());g5.range;const Ws=lt(e=>e.setHours(0,0,0,0),(e,t)=>e.setDate(e.getDate()+t),(e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*un)/tr,e=>e.getDate()-1);Ws.range;const Wf=lt(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/tr,e=>e.getUTCDate()-1);Wf.range;const x5=lt(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/tr,e=>Math.floor(e/tr));x5.range;function si(e){return lt(t=>{t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},(t,n)=>{t.setDate(t.getDate()+n*7)},(t,n)=>(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*un)/Ff)}const xc=si(0),$l=si(1),y5=si(2),v5=si(3),ro=si(4),b5=si(5),w5=si(6);xc.range;$l.range;y5.range;v5.range;ro.range;b5.range;w5.range;function ai(e){return lt(t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCDate(t.getUTCDate()+n*7)},(t,n)=>(n-t)/Ff)}const Vb=ai(0),Dl=ai(1),k5=ai(2),_5=ai(3),io=ai(4),j5=ai(5),S5=ai(6);Vb.range;Dl.range;k5.range;_5.range;io.range;j5.range;S5.range;const Hf=lt(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,t)=>{e.setMonth(e.getMonth()+t)},(e,t)=>t.getMonth()-e.getMonth()+(t.getFullYear()-e.getFullYear())*12,e=>e.getMonth());Hf.range;const C5=lt(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCMonth(e.getUTCMonth()+t)},(e,t)=>t.getUTCMonth()-e.getUTCMonth()+(t.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());C5.range;const nr=lt(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,t)=>{e.setFullYear(e.getFullYear()+t)},(e,t)=>t.getFullYear()-e.getFullYear(),e=>e.getFullYear());nr.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:lt(t=>{t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},(t,n)=>{t.setFullYear(t.getFullYear()+n*e)});nr.range;const ti=lt(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCFullYear(e.getUTCFullYear()+t)},(e,t)=>t.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());ti.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:lt(t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCFullYear(t.getUTCFullYear()+n*e)});ti.range;function N5(e,t,n,r,i,s){const a=[[Ai,1,Vn],[Ai,5,5*Vn],[Ai,15,15*Vn],[Ai,30,30*Vn],[s,1,un],[s,5,5*un],[s,15,15*un],[s,30,30*un],[i,1,qn],[i,3,3*qn],[i,6,6*qn],[i,12,12*qn],[r,1,tr],[r,2,2*tr],[n,1,Ff],[t,1,Lx],[t,3,3*Lx],[e,1,bu]];function l(u,d,p){const f=d<u;f&&([u,d]=[d,u]);const h=p&&typeof p.range=="function"?p:c(u,d,p),m=h?h.range(u,+d+1):[];return f?m.reverse():m}function c(u,d,p){const f=Math.abs(d-u)/p,h=Nf(([,,k])=>k).right(a,f);if(h===a.length)return e.every(Bd(u/bu,d/bu,p));if(h===0)return Ol.every(Math.max(Bd(u,d,p),1));const[m,b]=a[f/a[h-1][2]<a[h][2]/f?h-1:h];return m.every(b)}return[l,c]}const[E5,z5]=N5(nr,Hf,xc,Ws,Uf,Bf);function wu(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function ku(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function Mo(e,t,n){return{y:e,m:t,d:n,H:0,M:0,S:0,L:0}}function T5(e){var t=e.dateTime,n=e.date,r=e.time,i=e.periods,s=e.days,a=e.shortDays,l=e.months,c=e.shortMonths,u=Ao(i),d=Lo(i),p=Ao(s),f=Lo(s),h=Ao(a),m=Lo(a),b=Ao(l),k=Lo(l),x=Ao(c),y=Lo(c),v={a:L,A:B,b:$,B:g,c:null,d:Dx,e:Dx,f:Z5,g:cA,G:dA,H:K5,I:Q5,j:X5,L:qb,m:eA,M:tA,p:P,q:z,Q:Ux,s:Wx,S:nA,u:rA,U:iA,V:oA,w:sA,W:aA,x:null,X:null,y:lA,Y:uA,Z:pA,"%":Bx},j={a:S,A:D,b:Z,B:ne,c:null,d:Fx,e:Fx,f:gA,g:CA,G:EA,H:fA,I:hA,j:mA,L:Jb,m:xA,M:yA,p:ue,q:_e,Q:Ux,s:Wx,S:vA,u:bA,U:wA,V:kA,w:_A,W:jA,x:null,X:null,y:SA,Y:NA,Z:zA,"%":Bx},T={a:C,A:R,b:H,B:Q,c:M,d:Ox,e:Ox,f:q5,g:Ix,G:Rx,H:$x,I:$x,j:U5,L:V5,m:B5,M:W5,p:W,q:F5,Q:J5,s:G5,S:H5,u:R5,U:I5,V:O5,w:P5,W:$5,x:F,X:O,y:Ix,Y:Rx,Z:D5,"%":Y5};v.x=_(n,v),v.X=_(r,v),v.c=_(t,v),j.x=_(n,j),j.X=_(r,j),j.c=_(t,j);function _(Y,re){return function(le){var ee=[],fe=-1,ye=0,X=Y.length,he,we,G;for(le instanceof Date||(le=new Date(+le));++fe<X;)Y.charCodeAt(fe)===37&&(ee.push(Y.slice(ye,fe)),(we=Px[he=Y.charAt(++fe)])!=null?he=Y.charAt(++fe):we=he==="e"?" ":"0",(G=re[he])&&(he=G(le,we)),ee.push(he),ye=fe+1);return ee.push(Y.slice(ye,fe)),ee.join("")}}function A(Y,re){return function(le){var ee=Mo(1900,void 0,1),fe=E(ee,Y,le+="",0),ye,X;if(fe!=le.length)return null;if("Q"in ee)return new Date(ee.Q);if("s"in ee)return new Date(ee.s*1e3+("L"in ee?ee.L:0));if(re&&!("Z"in ee)&&(ee.Z=0),"p"in ee&&(ee.H=ee.H%12+ee.p*12),ee.m===void 0&&(ee.m="q"in ee?ee.q:0),"V"in ee){if(ee.V<1||ee.V>53)return null;"w"in ee||(ee.w=1),"Z"in ee?(ye=ku(Mo(ee.y,0,1)),X=ye.getUTCDay(),ye=X>4||X===0?Dl.ceil(ye):Dl(ye),ye=Wf.offset(ye,(ee.V-1)*7),ee.y=ye.getUTCFullYear(),ee.m=ye.getUTCMonth(),ee.d=ye.getUTCDate()+(ee.w+6)%7):(ye=wu(Mo(ee.y,0,1)),X=ye.getDay(),ye=X>4||X===0?$l.ceil(ye):$l(ye),ye=Ws.offset(ye,(ee.V-1)*7),ee.y=ye.getFullYear(),ee.m=ye.getMonth(),ee.d=ye.getDate()+(ee.w+6)%7)}else("W"in ee||"U"in ee)&&("w"in ee||(ee.w="u"in ee?ee.u%7:"W"in ee?1:0),X="Z"in ee?ku(Mo(ee.y,0,1)).getUTCDay():wu(Mo(ee.y,0,1)).getDay(),ee.m=0,ee.d="W"in ee?(ee.w+6)%7+ee.W*7-(X+5)%7:ee.w+ee.U*7-(X+6)%7);return"Z"in ee?(ee.H+=ee.Z/100|0,ee.M+=ee.Z%100,ku(ee)):wu(ee)}}function E(Y,re,le,ee){for(var fe=0,ye=re.length,X=le.length,he,we;fe<ye;){if(ee>=X)return-1;if(he=re.charCodeAt(fe++),he===37){if(he=re.charAt(fe++),we=T[he in Px?re.charAt(fe++):he],!we||(ee=we(Y,le,ee))<0)return-1}else if(he!=le.charCodeAt(ee++))return-1}return ee}function W(Y,re,le){var ee=u.exec(re.slice(le));return ee?(Y.p=d.get(ee[0].toLowerCase()),le+ee[0].length):-1}function C(Y,re,le){var ee=h.exec(re.slice(le));return ee?(Y.w=m.get(ee[0].toLowerCase()),le+ee[0].length):-1}function R(Y,re,le){var ee=p.exec(re.slice(le));return ee?(Y.w=f.get(ee[0].toLowerCase()),le+ee[0].length):-1}function H(Y,re,le){var ee=x.exec(re.slice(le));return ee?(Y.m=y.get(ee[0].toLowerCase()),le+ee[0].length):-1}function Q(Y,re,le){var ee=b.exec(re.slice(le));return ee?(Y.m=k.get(ee[0].toLowerCase()),le+ee[0].length):-1}function M(Y,re,le){return E(Y,t,re,le)}function F(Y,re,le){return E(Y,n,re,le)}function O(Y,re,le){return E(Y,r,re,le)}function L(Y){return a[Y.getDay()]}function B(Y){return s[Y.getDay()]}function $(Y){return c[Y.getMonth()]}function g(Y){return l[Y.getMonth()]}function P(Y){return i[+(Y.getHours()>=12)]}function z(Y){return 1+~~(Y.getMonth()/3)}function S(Y){return a[Y.getUTCDay()]}function D(Y){return s[Y.getUTCDay()]}function Z(Y){return c[Y.getUTCMonth()]}function ne(Y){return l[Y.getUTCMonth()]}function ue(Y){return i[+(Y.getUTCHours()>=12)]}function _e(Y){return 1+~~(Y.getUTCMonth()/3)}return{format:function(Y){var re=_(Y+="",v);return re.toString=function(){return Y},re},parse:function(Y){var re=A(Y+="",!1);return re.toString=function(){return Y},re},utcFormat:function(Y){var re=_(Y+="",j);return re.toString=function(){return Y},re},utcParse:function(Y){var re=A(Y+="",!0);return re.toString=function(){return Y},re}}}var Px={"-":"",_:" ",0:"0"},ft=/^\s*\d+/,M5=/^%/,A5=/[\\^$*+?|[\]().{}]/g;function Oe(e,t,n){var r=e<0?"-":"",i=(r?-e:e)+"",s=i.length;return r+(s<n?new Array(n-s+1).join(t)+i:i)}function L5(e){return e.replace(A5,"\\$&")}function Ao(e){return new RegExp("^(?:"+e.map(L5).join("|")+")","i")}function Lo(e){return new Map(e.map((t,n)=>[t.toLowerCase(),n]))}function P5(e,t,n){var r=ft.exec(t.slice(n,n+1));return r?(e.w=+r[0],n+r[0].length):-1}function R5(e,t,n){var r=ft.exec(t.slice(n,n+1));return r?(e.u=+r[0],n+r[0].length):-1}function I5(e,t,n){var r=ft.exec(t.slice(n,n+2));return r?(e.U=+r[0],n+r[0].length):-1}function O5(e,t,n){var r=ft.exec(t.slice(n,n+2));return r?(e.V=+r[0],n+r[0].length):-1}function $5(e,t,n){var r=ft.exec(t.slice(n,n+2));return r?(e.W=+r[0],n+r[0].length):-1}function Rx(e,t,n){var r=ft.exec(t.slice(n,n+4));return r?(e.y=+r[0],n+r[0].length):-1}function Ix(e,t,n){var r=ft.exec(t.slice(n,n+2));return r?(e.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function D5(e,t,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n,n+6));return r?(e.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function F5(e,t,n){var r=ft.exec(t.slice(n,n+1));return r?(e.q=r[0]*3-3,n+r[0].length):-1}function B5(e,t,n){var r=ft.exec(t.slice(n,n+2));return r?(e.m=r[0]-1,n+r[0].length):-1}function Ox(e,t,n){var r=ft.exec(t.slice(n,n+2));return r?(e.d=+r[0],n+r[0].length):-1}function U5(e,t,n){var r=ft.exec(t.slice(n,n+3));return r?(e.m=0,e.d=+r[0],n+r[0].length):-1}function $x(e,t,n){var r=ft.exec(t.slice(n,n+2));return r?(e.H=+r[0],n+r[0].length):-1}function W5(e,t,n){var r=ft.exec(t.slice(n,n+2));return r?(e.M=+r[0],n+r[0].length):-1}function H5(e,t,n){var r=ft.exec(t.slice(n,n+2));return r?(e.S=+r[0],n+r[0].length):-1}function V5(e,t,n){var r=ft.exec(t.slice(n,n+3));return r?(e.L=+r[0],n+r[0].length):-1}function q5(e,t,n){var r=ft.exec(t.slice(n,n+6));return r?(e.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function Y5(e,t,n){var r=M5.exec(t.slice(n,n+1));return r?n+r[0].length:-1}function J5(e,t,n){var r=ft.exec(t.slice(n));return r?(e.Q=+r[0],n+r[0].length):-1}function G5(e,t,n){var r=ft.exec(t.slice(n));return r?(e.s=+r[0],n+r[0].length):-1}function Dx(e,t){return Oe(e.getDate(),t,2)}function K5(e,t){return Oe(e.getHours(),t,2)}function Q5(e,t){return Oe(e.getHours()%12||12,t,2)}function X5(e,t){return Oe(1+Ws.count(nr(e),e),t,3)}function qb(e,t){return Oe(e.getMilliseconds(),t,3)}function Z5(e,t){return qb(e,t)+"000"}function eA(e,t){return Oe(e.getMonth()+1,t,2)}function tA(e,t){return Oe(e.getMinutes(),t,2)}function nA(e,t){return Oe(e.getSeconds(),t,2)}function rA(e){var t=e.getDay();return t===0?7:t}function iA(e,t){return Oe(xc.count(nr(e)-1,e),t,2)}function Yb(e){var t=e.getDay();return t>=4||t===0?ro(e):ro.ceil(e)}function oA(e,t){return e=Yb(e),Oe(ro.count(nr(e),e)+(nr(e).getDay()===4),t,2)}function sA(e){return e.getDay()}function aA(e,t){return Oe($l.count(nr(e)-1,e),t,2)}function lA(e,t){return Oe(e.getFullYear()%100,t,2)}function cA(e,t){return e=Yb(e),Oe(e.getFullYear()%100,t,2)}function uA(e,t){return Oe(e.getFullYear()%1e4,t,4)}function dA(e,t){var n=e.getDay();return e=n>=4||n===0?ro(e):ro.ceil(e),Oe(e.getFullYear()%1e4,t,4)}function pA(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+Oe(t/60|0,"0",2)+Oe(t%60,"0",2)}function Fx(e,t){return Oe(e.getUTCDate(),t,2)}function fA(e,t){return Oe(e.getUTCHours(),t,2)}function hA(e,t){return Oe(e.getUTCHours()%12||12,t,2)}function mA(e,t){return Oe(1+Wf.count(ti(e),e),t,3)}function Jb(e,t){return Oe(e.getUTCMilliseconds(),t,3)}function gA(e,t){return Jb(e,t)+"000"}function xA(e,t){return Oe(e.getUTCMonth()+1,t,2)}function yA(e,t){return Oe(e.getUTCMinutes(),t,2)}function vA(e,t){return Oe(e.getUTCSeconds(),t,2)}function bA(e){var t=e.getUTCDay();return t===0?7:t}function wA(e,t){return Oe(Vb.count(ti(e)-1,e),t,2)}function Gb(e){var t=e.getUTCDay();return t>=4||t===0?io(e):io.ceil(e)}function kA(e,t){return e=Gb(e),Oe(io.count(ti(e),e)+(ti(e).getUTCDay()===4),t,2)}function _A(e){return e.getUTCDay()}function jA(e,t){return Oe(Dl.count(ti(e)-1,e),t,2)}function SA(e,t){return Oe(e.getUTCFullYear()%100,t,2)}function CA(e,t){return e=Gb(e),Oe(e.getUTCFullYear()%100,t,2)}function NA(e,t){return Oe(e.getUTCFullYear()%1e4,t,4)}function EA(e,t){var n=e.getUTCDay();return e=n>=4||n===0?io(e):io.ceil(e),Oe(e.getUTCFullYear()%1e4,t,4)}function zA(){return"+0000"}function Bx(){return"%"}function Ux(e){return+e}function Wx(e){return Math.floor(+e/1e3)}var mi,Kb;TA({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function TA(e){return mi=T5(e),Kb=mi.format,mi.parse,mi.utcFormat,mi.utcParse,mi}function MA(e){return new Date(e)}function AA(e){return e instanceof Date?+e:+new Date(+e)}function Qb(e,t,n,r,i,s,a,l,c,u){var d=Wb(),p=d.invert,f=d.domain,h=u(".%L"),m=u(":%S"),b=u("%I:%M"),k=u("%I %p"),x=u("%a %d"),y=u("%b %d"),v=u("%B"),j=u("%Y");function T(_){return(c(_)<_?h:l(_)<_?m:a(_)<_?b:s(_)<_?k:r(_)<_?i(_)<_?x:y:n(_)<_?v:j)(_)}return d.invert=function(_){return new Date(p(_))},d.domain=function(_){return arguments.length?f(Array.from(_,AA)):f().map(MA)},d.ticks=function(_){var A=f();return e(A[0],A[A.length-1],_??10)},d.tickFormat=function(_,A){return A==null?T:u(A)},d.nice=function(_){var A=f();return(!_||typeof _.range!="function")&&(_=t(A[0],A[A.length-1],_??10)),_?f(h5(A,_)):d},d.copy=function(){return Ub(d,Qb(e,t,n,r,i,s,a,l,c,u))},d}function LA(){return Bb.apply(Qb(E5,z5,nr,Hf,xc,Ws,Uf,Bf,Ai,Kb).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function ut(e){return function(){return e}}function Xb(e){let t=3;return e.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{const r=Math.floor(n);if(!(r>=0))throw new RangeError(`invalid digits: ${n}`);t=r}return e},()=>new k8(t)}function Zb(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function ew(e){this._context=e}ew.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function tw(e){return new ew(e)}function nw(e){return e[0]}function rw(e){return e[1]}function iw(e,t){var n=ut(!0),r=null,i=tw,s=null,a=Xb(l);e=typeof e=="function"?e:e===void 0?nw:ut(e),t=typeof t=="function"?t:t===void 0?rw:ut(t);function l(c){var u,d=(c=Zb(c)).length,p,f=!1,h;for(r==null&&(s=i(h=a())),u=0;u<=d;++u)!(u<d&&n(p=c[u],u,c))===f&&((f=!f)?s.lineStart():s.lineEnd()),f&&s.point(+e(p,u,c),+t(p,u,c));if(h)return s=null,h+""||null}return l.x=function(c){return arguments.length?(e=typeof c=="function"?c:ut(+c),l):e},l.y=function(c){return arguments.length?(t=typeof c=="function"?c:ut(+c),l):t},l.defined=function(c){return arguments.length?(n=typeof c=="function"?c:ut(!!c),l):n},l.curve=function(c){return arguments.length?(i=c,r!=null&&(s=i(r)),l):i},l.context=function(c){return arguments.length?(c==null?r=s=null:s=i(r=c),l):r},l}function PA(e,t,n){var r=null,i=ut(!0),s=null,a=tw,l=null,c=Xb(u);e=typeof e=="function"?e:e===void 0?nw:ut(+e),t=typeof t=="function"?t:ut(t===void 0?0:+t),n=typeof n=="function"?n:n===void 0?rw:ut(+n);function u(p){var f,h,m,b=(p=Zb(p)).length,k,x=!1,y,v=new Array(b),j=new Array(b);for(s==null&&(l=a(y=c())),f=0;f<=b;++f){if(!(f<b&&i(k=p[f],f,p))===x)if(x=!x)h=f,l.areaStart(),l.lineStart();else{for(l.lineEnd(),l.lineStart(),m=f-1;m>=h;--m)l.point(v[m],j[m]);l.lineEnd(),l.areaEnd()}x&&(v[f]=+e(k,f,p),j[f]=+t(k,f,p),l.point(r?+r(k,f,p):v[f],n?+n(k,f,p):j[f]))}if(y)return l=null,y+""||null}function d(){return iw().defined(i).curve(a).context(s)}return u.x=function(p){return arguments.length?(e=typeof p=="function"?p:ut(+p),r=null,u):e},u.x0=function(p){return arguments.length?(e=typeof p=="function"?p:ut(+p),u):e},u.x1=function(p){return arguments.length?(r=p==null?null:typeof p=="function"?p:ut(+p),u):r},u.y=function(p){return arguments.length?(t=typeof p=="function"?p:ut(+p),n=null,u):t},u.y0=function(p){return arguments.length?(t=typeof p=="function"?p:ut(+p),u):t},u.y1=function(p){return arguments.length?(n=p==null?null:typeof p=="function"?p:ut(+p),u):n},u.lineX0=u.lineY0=function(){return d().x(e).y(t)},u.lineY1=function(){return d().x(e).y(n)},u.lineX1=function(){return d().x(r).y(t)},u.defined=function(p){return arguments.length?(i=typeof p=="function"?p:ut(!!p),u):i},u.curve=function(p){return arguments.length?(a=p,s!=null&&(l=a(s)),u):a},u.context=function(p){return arguments.length?(p==null?s=l=null:l=a(s=p),u):s},u}function Hx(e){return e<0?-1:1}function Vx(e,t,n){var r=e._x1-e._x0,i=t-e._x1,s=(e._y1-e._y0)/(r||i<0&&-0),a=(n-e._y1)/(i||r<0&&-0),l=(s*i+a*r)/(r+i);return(Hx(s)+Hx(a))*Math.min(Math.abs(s),Math.abs(a),.5*Math.abs(l))||0}function qx(e,t){var n=e._x1-e._x0;return n?(3*(e._y1-e._y0)/n-t)/2:t}function _u(e,t,n){var r=e._x0,i=e._y0,s=e._x1,a=e._y1,l=(s-r)/3;e._context.bezierCurveTo(r+l,i+l*t,s-l,a-l*n,s,a)}function Fl(e){this._context=e}Fl.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:_u(this,this._t0,qx(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){var n=NaN;if(e=+e,t=+t,!(e===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,_u(this,qx(this,n=Vx(this,e,t)),n);break;default:_u(this,this._t0,n=Vx(this,e,t));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t,this._t0=n}}};Object.create(Fl.prototype).point=function(e,t){Fl.prototype.point.call(this,t,e)};function Yx(e){return new Fl(e)}const _a=e=>()=>e;function RA(e,{sourceEvent:t,target:n,transform:r,dispatch:i}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:r,enumerable:!0,configurable:!0},_:{value:i}})}function Yn(e,t,n){this.k=e,this.x=t,this.y=n}Yn.prototype={constructor:Yn,scale:function(e){return e===1?this:new Yn(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Yn(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var ns=new Yn(1,0,0);Yn.prototype;function ju(e){e.stopImmediatePropagation()}function Po(e){e.preventDefault(),e.stopImmediatePropagation()}function IA(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function OA(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function Jx(){return this.__zoom||ns}function $A(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function DA(){return navigator.maxTouchPoints||"ontouchstart"in this}function FA(e,t,n){var r=e.invertX(t[0][0])-n[0][0],i=e.invertX(t[1][0])-n[1][0],s=e.invertY(t[0][1])-n[0][1],a=e.invertY(t[1][1])-n[1][1];return e.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),a>s?(s+a)/2:Math.min(0,s)||Math.max(0,a))}function Gx(){var e=IA,t=OA,n=FA,r=$A,i=DA,s=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],l=250,c=l6,u=Fs("start","zoom","end"),d,p,f,h=500,m=150,b=0,k=10;function x(M){M.property("__zoom",Jx).on("wheel.zoom",E,{passive:!1}).on("mousedown.zoom",W).on("dblclick.zoom",C).filter(i).on("touchstart.zoom",R).on("touchmove.zoom",H).on("touchend.zoom touchcancel.zoom",Q).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}x.transform=function(M,F,O,L){var B=M.selection?M.selection():M;B.property("__zoom",Jx),M!==B?T(M,F,O,L):B.interrupt().each(function(){_(this,arguments).event(L).start().zoom(null,typeof F=="function"?F.apply(this,arguments):F).end()})},x.scaleBy=function(M,F,O,L){x.scaleTo(M,function(){var B=this.__zoom.k,$=typeof F=="function"?F.apply(this,arguments):F;return B*$},O,L)},x.scaleTo=function(M,F,O,L){x.transform(M,function(){var B=t.apply(this,arguments),$=this.__zoom,g=O==null?j(B):typeof O=="function"?O.apply(this,arguments):O,P=$.invert(g),z=typeof F=="function"?F.apply(this,arguments):F;return n(v(y($,z),g,P),B,a)},O,L)},x.translateBy=function(M,F,O,L){x.transform(M,function(){return n(this.__zoom.translate(typeof F=="function"?F.apply(this,arguments):F,typeof O=="function"?O.apply(this,arguments):O),t.apply(this,arguments),a)},null,L)},x.translateTo=function(M,F,O,L,B){x.transform(M,function(){var $=t.apply(this,arguments),g=this.__zoom,P=L==null?j($):typeof L=="function"?L.apply(this,arguments):L;return n(ns.translate(P[0],P[1]).scale(g.k).translate(typeof F=="function"?-F.apply(this,arguments):-F,typeof O=="function"?-O.apply(this,arguments):-O),$,a)},L,B)};function y(M,F){return F=Math.max(s[0],Math.min(s[1],F)),F===M.k?M:new Yn(F,M.x,M.y)}function v(M,F,O){var L=F[0]-O[0]*M.k,B=F[1]-O[1]*M.k;return L===M.x&&B===M.y?M:new Yn(M.k,L,B)}function j(M){return[(+M[0][0]+ +M[1][0])/2,(+M[0][1]+ +M[1][1])/2]}function T(M,F,O,L){M.on("start.zoom",function(){_(this,arguments).event(L).start()}).on("interrupt.zoom end.zoom",function(){_(this,arguments).event(L).end()}).tween("zoom",function(){var B=this,$=arguments,g=_(B,$).event(L),P=t.apply(B,$),z=O==null?j(P):typeof O=="function"?O.apply(B,$):O,S=Math.max(P[1][0]-P[0][0],P[1][1]-P[0][1]),D=B.__zoom,Z=typeof F=="function"?F.apply(B,$):F,ne=c(D.invert(z).concat(S/D.k),Z.invert(z).concat(S/Z.k));return function(ue){if(ue===1)ue=Z;else{var _e=ne(ue),Y=S/_e[2];ue=new Yn(Y,z[0]-_e[0]*Y,z[1]-_e[1]*Y)}g.zoom(null,ue)}})}function _(M,F,O){return!O&&M.__zooming||new A(M,F)}function A(M,F){this.that=M,this.args=F,this.active=0,this.sourceEvent=null,this.extent=t.apply(M,F),this.taps=0}A.prototype={event:function(M){return M&&(this.sourceEvent=M),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(M,F){return this.mouse&&M!=="mouse"&&(this.mouse[1]=F.invert(this.mouse[0])),this.touch0&&M!=="touch"&&(this.touch0[1]=F.invert(this.touch0[0])),this.touch1&&M!=="touch"&&(this.touch1[1]=F.invert(this.touch1[0])),this.that.__zoom=F,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(M){var F=_t(this.that).datum();u.call(M,this.that,new RA(M,{sourceEvent:this.sourceEvent,target:x,transform:this.that.__zoom,dispatch:u}),F)}};function E(M,...F){if(!e.apply(this,arguments))return;var O=_(this,F).event(M),L=this.__zoom,B=Math.max(s[0],Math.min(s[1],L.k*Math.pow(2,r.apply(this,arguments)))),$=Bn(M);if(O.wheel)(O.mouse[0][0]!==$[0]||O.mouse[0][1]!==$[1])&&(O.mouse[1]=L.invert(O.mouse[0]=$)),clearTimeout(O.wheel);else{if(L.k===B)return;O.mouse=[$,L.invert($)],Ya(this),O.start()}Po(M),O.wheel=setTimeout(g,m),O.zoom("mouse",n(v(y(L,B),O.mouse[0],O.mouse[1]),O.extent,a));function g(){O.wheel=null,O.end()}}function W(M,...F){if(f||!e.apply(this,arguments))return;var O=M.currentTarget,L=_(this,F,!0).event(M),B=_t(M.view).on("mousemove.zoom",z,!0).on("mouseup.zoom",S,!0),$=Bn(M,O),g=M.clientX,P=M.clientY;kb(M.view),ju(M),L.mouse=[$,this.__zoom.invert($)],Ya(this),L.start();function z(D){if(Po(D),!L.moved){var Z=D.clientX-g,ne=D.clientY-P;L.moved=Z*Z+ne*ne>b}L.event(D).zoom("mouse",n(v(L.that.__zoom,L.mouse[0]=Bn(D,O),L.mouse[1]),L.extent,a))}function S(D){B.on("mousemove.zoom mouseup.zoom",null),_b(D.view,L.moved),Po(D),L.event(D).end()}}function C(M,...F){if(e.apply(this,arguments)){var O=this.__zoom,L=Bn(M.changedTouches?M.changedTouches[0]:M,this),B=O.invert(L),$=O.k*(M.shiftKey?.5:2),g=n(v(y(O,$),L,B),t.apply(this,F),a);Po(M),l>0?_t(this).transition().duration(l).call(T,g,L,M):_t(this).call(x.transform,g,L,M)}}function R(M,...F){if(e.apply(this,arguments)){var O=M.touches,L=O.length,B=_(this,F,M.changedTouches.length===L).event(M),$,g,P,z;for(ju(M),g=0;g<L;++g)P=O[g],z=Bn(P,this),z=[z,this.__zoom.invert(z),P.identifier],B.touch0?!B.touch1&&B.touch0[2]!==z[2]&&(B.touch1=z,B.taps=0):(B.touch0=z,$=!0,B.taps=1+!!d);d&&(d=clearTimeout(d)),$&&(B.taps<2&&(p=z[0],d=setTimeout(function(){d=null},h)),Ya(this),B.start())}}function H(M,...F){if(this.__zooming){var O=_(this,F).event(M),L=M.changedTouches,B=L.length,$,g,P,z;for(Po(M),$=0;$<B;++$)g=L[$],P=Bn(g,this),O.touch0&&O.touch0[2]===g.identifier?O.touch0[0]=P:O.touch1&&O.touch1[2]===g.identifier&&(O.touch1[0]=P);if(g=O.that.__zoom,O.touch1){var S=O.touch0[0],D=O.touch0[1],Z=O.touch1[0],ne=O.touch1[1],ue=(ue=Z[0]-S[0])*ue+(ue=Z[1]-S[1])*ue,_e=(_e=ne[0]-D[0])*_e+(_e=ne[1]-D[1])*_e;g=y(g,Math.sqrt(ue/_e)),P=[(S[0]+Z[0])/2,(S[1]+Z[1])/2],z=[(D[0]+ne[0])/2,(D[1]+ne[1])/2]}else if(O.touch0)P=O.touch0[0],z=O.touch0[1];else return;O.zoom("touch",n(v(g,P,z),O.extent,a))}}function Q(M,...F){if(this.__zooming){var O=_(this,F).event(M),L=M.changedTouches,B=L.length,$,g;for(ju(M),f&&clearTimeout(f),f=setTimeout(function(){f=null},h),$=0;$<B;++$)g=L[$],O.touch0&&O.touch0[2]===g.identifier?delete O.touch0:O.touch1&&O.touch1[2]===g.identifier&&delete O.touch1;if(O.touch1&&!O.touch0&&(O.touch0=O.touch1,delete O.touch1),O.touch0)O.touch0[1]=this.__zoom.invert(O.touch0[0]);else if(O.end(),O.taps===2&&(g=Bn(g,this),Math.hypot(p[0]-g[0],p[1]-g[1])<k)){var P=_t(this).on("dblclick.zoom");P&&P.apply(this,arguments)}}}return x.wheelDelta=function(M){return arguments.length?(r=typeof M=="function"?M:_a(+M),x):r},x.filter=function(M){return arguments.length?(e=typeof M=="function"?M:_a(!!M),x):e},x.touchable=function(M){return arguments.length?(i=typeof M=="function"?M:_a(!!M),x):i},x.extent=function(M){return arguments.length?(t=typeof M=="function"?M:_a([[+M[0][0],+M[0][1]],[+M[1][0],+M[1][1]]]),x):t},x.scaleExtent=function(M){return arguments.length?(s[0]=+M[0],s[1]=+M[1],x):[s[0],s[1]]},x.translateExtent=function(M){return arguments.length?(a[0][0]=+M[0][0],a[1][0]=+M[1][0],a[0][1]=+M[0][1],a[1][1]=+M[1][1],x):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},x.constrain=function(M){return arguments.length?(n=M,x):n},x.duration=function(M){return arguments.length?(l=+M,x):l},x.interpolate=function(M){return arguments.length?(c=M,x):c},x.on=function(){var M=u.on.apply(u,arguments);return M===u?x:M},x.clickDistance=function(M){return arguments.length?(b=(M=+M)*M,x):Math.sqrt(b)},x.tapDistance=function(M){return arguments.length?(k=+M,x):k},x}function BA(e){try{const t=new URL(e),n=t.host,r=t.pathname,i=[{pattern:n,label:`${n} (exact domain)`},{pattern:`${n}/*`,label:`${n}/* (domain + any path)`}],s=n.split(".");if(s.length>2){const a=s.slice(-2).join(".");i.push({pattern:`*.${a}`,label:`*.${a} (all subdomains)`})}if(r&&r!=="/"){const a=r.split("/").filter(Boolean);a.length>0&&i.push({pattern:`${n}/${a[0]}/*`,label:`${n}/${a[0]}/* (specific path)`})}return i}catch{return[{pattern:e,label:e}]}}const Be={overlay:{position:"fixed",inset:0,backgroundColor:"rgba(0, 0, 0, 0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999},dialog:{backgroundColor:"#12121a",border:"1px solid rgba(245, 158, 11, 0.5)",borderRadius:8,boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.5)",width:500,maxWidth:"90vw",overflow:"hidden"},header:{display:"flex",alignItems:"center",gap:8,padding:12,borderBottom:"1px solid #374151",backgroundColor:"rgba(120, 53, 15, 0.2)"},headerIcon:{color:"#fbbf24"},headerTitle:{fontWeight:600,color:"#fcd34d",fontSize:14},closeButton:{marginLeft:"auto",background:"none",border:"none",color:"#6b7280",cursor:"pointer",padding:4,display:"flex",alignItems:"center"},content:{padding:16,display:"flex",flexDirection:"column",gap:16},sourceText:{fontSize:13,color:"#9ca3af"},requestBox:{backgroundColor:"#0a0a0f",borderRadius:6,border:"1px solid #374151",padding:12,fontFamily:"'SF Mono', 'Consolas', monospace",fontSize:13},methodBadge:e=>({fontWeight:700,color:e==="POST"?"#4ade80":e==="GET"?"#60a5fa":"#9ca3af",marginRight:8}),urlText:{color:"#d1d5db",wordBreak:"break-all"},headersText:{marginTop:8,fontSize:11,color:"#6b7280"},label:{fontSize:13,color:"#9ca3af",marginBottom:6},select:{width:"100%",padding:"10px 12px",backgroundColor:"#1a1a24",border:"1px solid #4b5563",borderRadius:6,fontSize:13,color:"#e5e7eb",cursor:"pointer",appearance:"none",backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 12px center",paddingRight:36},customInput:{width:"100%",padding:"10px 12px",backgroundColor:"#1a1a24",border:"1px solid #4b5563",borderRadius:6,fontSize:13,color:"#e5e7eb",fontFamily:"'SF Mono', 'Consolas', monospace"},radioGroup:{display:"flex",gap:16,marginTop:8},radioLabel:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"#9ca3af",cursor:"pointer"},backLink:{marginLeft:"auto",fontSize:12,color:"#6b7280",background:"none",border:"none",cursor:"pointer"},checkboxLabel:{display:"flex",alignItems:"center",gap:8,fontSize:13,color:"#9ca3af",cursor:"pointer"},footer:{display:"flex",alignItems:"center",gap:8,padding:12,borderTop:"1px solid #374151",backgroundColor:"#0a0a0f"},button:e=>{const t={display:"flex",alignItems:"center",gap:6,padding:"8px 16px",borderRadius:6,fontSize:13,fontWeight:500,cursor:"pointer",border:"1px solid",transition:"all 0.15s ease"};switch(e){case"deny":return{...t,backgroundColor:"rgba(220, 38, 38, 0.2)",borderColor:"rgba(239, 68, 68, 0.5)",color:"#f87171"};case"once":return{...t,backgroundColor:"rgba(75, 85, 99, 0.2)",borderColor:"rgba(107, 114, 128, 0.5)",color:"#d1d5db"};case"pattern":return{...t,backgroundColor:"rgba(22, 163, 74, 0.2)",borderColor:"rgba(34, 197, 94, 0.5)",color:"#4ade80"}}},timerContainer:{marginLeft:"auto",display:"flex",alignItems:"center",gap:6,color:"#6b7280",fontSize:13},progressBar:{height:3,backgroundColor:"#1f2937"},progressFill:e=>({height:"100%",backgroundColor:"#f59e0b",transition:"width 1s linear",width:`${e}%`})};function UA({request:e,timeout:t,onApprove:n,onDeny:r,onClose:i}){const[s,a]=w.useState(""),[l,c]=w.useState("exact"),[u,d]=w.useState(!1),[p,f]=w.useState(""),[h,m]=w.useState(!1),[b,k]=w.useState(t),x=BA(e.url);w.useEffect(()=>{x.length>0&&!s&&a(x[0].pattern)},[x,s]),w.useEffect(()=>{const A=setInterval(()=>{k(E=>E<=1?(r(),0):E-1)},1e3);return()=>clearInterval(A)},[r]);const y=w.useCallback(()=>{n()},[n]),v=w.useCallback(()=>{n(h?p:s,l,u)},[n,h,p,s,l,u]),j=b/t*100,T=e.source.startsWith("mcp:"),_=T?e.source.substring(4):"agent";return o.jsx("div",{style:Be.overlay,children:o.jsxs("div",{style:Be.dialog,children:[o.jsxs("div",{style:Be.header,children:[o.jsx(Is,{size:18,style:Be.headerIcon}),o.jsx("span",{style:Be.headerTitle,children:"Network Request Approval"}),o.jsx("button",{style:Be.closeButton,onClick:i,children:o.jsx(uo,{size:16})})]}),o.jsxs("div",{style:Be.content,children:[o.jsx("div",{style:Be.sourceText,children:T?o.jsxs(o.Fragment,{children:['MCP server "',o.jsx("span",{style:{color:"#22d3ee"},children:_}),'" wants to connect to:']}):o.jsx(o.Fragment,{children:"Agent wants to connect to:"})}),o.jsxs("div",{style:Be.requestBox,children:[o.jsxs("div",{children:[o.jsx("span",{style:Be.methodBadge(e.method),children:e.method}),o.jsx("span",{style:Be.urlText,children:e.url})]}),e.headers&&Object.keys(e.headers).length>0&&o.jsxs("div",{style:Be.headersText,children:["Headers: ",Object.keys(e.headers).join(", ")]})]}),o.jsxs("div",{children:[o.jsx("div",{style:Be.label,children:"Allow pattern:"}),h?o.jsxs("div",{children:[o.jsx("input",{type:"text",value:p,onChange:A=>f(A.target.value),placeholder:"e.g., *.example.com/*",style:Be.customInput}),o.jsxs("div",{style:Be.radioGroup,children:[o.jsxs("label",{style:Be.radioLabel,children:[o.jsx("input",{type:"radio",checked:l==="wildcard",onChange:()=>c("wildcard")}),"Wildcard"]}),o.jsxs("label",{style:Be.radioLabel,children:[o.jsx("input",{type:"radio",checked:l==="regex",onChange:()=>c("regex")}),"Regex"]}),o.jsx("button",{onClick:()=>m(!1),style:Be.backLink,children:"← Back to suggestions"})]})]}):o.jsxs("select",{value:s,onChange:A=>{A.target.value==="__custom__"?(m(!0),f(s)):a(A.target.value)},style:Be.select,children:[x.map(A=>o.jsx("option",{value:A.pattern,children:A.label},A.pattern)),o.jsx("option",{value:"__custom__",children:"Custom pattern..."})]})]}),o.jsxs("label",{style:Be.checkboxLabel,children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:u,onChange:A=>d(A.target.checked)}),o.jsx("span",{className:"toggle-slider"})]}),"Save to project (persists across sessions)"]})]}),o.jsxs("div",{style:Be.footer,children:[o.jsxs("button",{onClick:r,style:Be.button("deny"),children:[o.jsx(jj,{size:14}),"Deny"]}),o.jsxs("button",{onClick:y,style:Be.button("once"),children:[o.jsx(ef,{size:14}),"Allow Once"]}),o.jsxs("button",{onClick:v,style:Be.button("pattern"),children:[o.jsx(c1,{size:14}),"Allow Pattern"]}),o.jsxs("div",{style:Be.timerContainer,children:[o.jsx(Zi,{size:14}),o.jsxs("span",{children:[b,"s"]})]})]}),o.jsx("div",{style:Be.progressBar,children:o.jsx("div",{style:Be.progressFill(j)})})]})})}const Kx=[{bg:"#0e7490",fg:"#e0f2fe"},{bg:"#6d28d9",fg:"#ede9fe"},{bg:"#047857",fg:"#d1fae5"},{bg:"#b91c1c",fg:"#fee2e2"},{bg:"#b45309",fg:"#fef3c7"},{bg:"#1d4ed8",fg:"#dbeafe"},{bg:"#be185d",fg:"#fce7f3"},{bg:"#4d7c0f",fg:"#ecfccb"},{bg:"#7c3aed",fg:"#ede9fe"},{bg:"#0f766e",fg:"#ccfbf1"},{bg:"#c2410c",fg:"#ffedd5"},{bg:"#4338ca",fg:"#e0e7ff"}],Qx=new Map;function ja(e){if(e==="sandbox"||e==="system")return{bg:"#374151",fg:"#9ca3af"};const t=Qx.get(e);if(t)return t;let n=0;for(let s=0;s<e.length;s++)n=(n<<5)-n+e.charCodeAt(s),n=n&n;const r=Math.abs(n)%Kx.length,i=Kx[r];return Qx.set(e,i),i}const Sa={bg:"#14b8a6"},Uo={LlmAgent:"#00f5d4",SequentialAgent:"#7b2cbf",LoopAgent:"#ffd93d",ParallelAgent:"#ff6b6b",Tool:"#14b8a6",System:"#6b7280"};function gi(e){return Uo[e]||"#6b7280"}function WA({agents:e,events:t,selectedEventIndex:n,isOpen:r,onOpenChange:i,runState:s="idle"}){const[a,l]=w.useState(!1),[c,u]=w.useState(!1),d=r!==void 0?r:a,p=L=>{i?i(L):l(L)},[f,h]=w.useState(null),[m,b]=w.useState(null),k=w.useRef(null),x=w.useRef(null),y=w.useRef(null),v=w.useRef(null),j=w.useRef(null),T=w.useRef(null),_=w.useRef(new Map),A=w.useRef(null),{activeAgents:E,activeTools:W,transitions:C,visitedAgents:R,toolCalls:H,activeBranches:Q,lastMessages:M,toolLastCalls:F}=w.useMemo(()=>{var I,N,U,J,se,K,te,ve,Se,Ee,De,ht,et;const L=n!==null?n:t.length-1;if(L<0||t.length===0)return{activeAgents:new Set,activeTools:new Set,transitions:new Map,visitedAgents:new Set,toolCalls:new Map,activeBranches:new Set,lastMessages:new Map,toolLastCalls:new Map};const B=new Map(e.map(be=>[be.name,be.type])),$=new Map(e.map(be=>[be.id,be])),g=be=>{const ze=B.get(be);if(!ze)return!1;const pe=ze.toLowerCase();return pe==="sequentialagent"||pe==="sequential"},P=new Map,z=new Map;for(const be of e)if(g(be.name)&&"sub_agents"in be){const pe=be.sub_agents.map(Ne=>{var ge;return(ge=$.get(Ne))==null?void 0:ge.name}).filter(Ne=>Ne!==void 0);z.set(be.name,pe);for(const Ne of pe)P.set(Ne,be.name)}const S=(be,ze)=>{const pe=z.get(ze);if(!pe)return null;const Ne=pe.indexOf(be);return Ne>0?pe[Ne-1]:null},D=t.slice(0,L+1),Z=new Map,ne=new Map,ue=new Set,_e=new Set,Y=new Map,re=new Map;ue.add("system");const le=new Map;le.set("",["system"]);let ee=null;const fe=new Map,ye=new Map,X=new Map,he=be=>{const ze=be||"";return le.has(ze)||le.set(ze,["system"]),le.get(ze)},we=(be,ze)=>{if(!be)return null;const pe=be.split("."),Ne=pe.indexOf(ze);return Ne>0?pe[Ne-1]:pe.length>=1&&pe[pe.length-1]===ze&&pe.length>=2?pe[pe.length-2]:null};for(const be of D){const ze=be.branch||"";if(be.event_type==="agent_start"){const pe=be.agent_name;ue.add(pe);const Ne=he(ze);let ge=null;const Ie=we(ze,pe);Ie&&Ie!==pe?(ge=Ie,Ne.includes(Ie)||(Ne.push(Ie),ue.add(Ie))):Ne.length>0&&(ge=Ne[Ne.length-1]);let ct=ge;const li=P.get(pe);if(li){const mt=S(pe,li);mt?ct=mt:ct=li,X.set(pe,li)}else if(ge&&g(ge)){X.set(pe,ge);const mt=ye.get(ge);mt&&mt!==pe&&(ct=mt)}if(ct&&ct!==pe){const mt=`${ct}->${pe}`;Z.set(mt,(Z.get(mt)||0)+1),ct==="system"&&ze===""&&!ee&&(ee=pe)}Ne[Ne.length-1]!==pe&&Ne.push(pe)}else if(be.event_type==="agent_end"){const pe=be.agent_name,Ne=X.get(pe);if(Ne&&ye.set(Ne,pe),g(pe)){const ge=z.get(pe),Ie=ge&&ge.length>0?ge[ge.length-1]:ye.get(pe);if(Ie){const ct=`${Ie}->${pe}`;Z.set(ct,(Z.get(ct)||0)+1)}ye.delete(pe)}if(pe===ee){const ge=`${pe}->system`;Z.set(ge,(Z.get(ge)||0)+1)}for(const[,ge]of le){const Ie=ge.lastIndexOf(pe);Ie>0&&ge.splice(Ie,1)}}else if(be.event_type==="tool_call"){const pe=(I=be.data)==null?void 0:I.tool_name,Ne=he(ze);if(pe&&Ne.length>0){const ge=Ne[Ne.length-1];_e.add(pe);const Ie=`${ge}->tool:${pe}`;ne.set(Ie,(ne.get(Ie)||0)+1),fe.set(ze,pe),re.set(pe,{args:((N=be.data)==null?void 0:N.args)||((U=be.data)==null?void 0:U.arguments)})}}else if(be.event_type==="tool_result"){const pe=(J=be.data)==null?void 0:J.tool_name;if(pe){const Ne=re.get(pe),ge=((ve=(te=(K=(se=be.data)==null?void 0:se.result)==null?void 0:K.content)==null?void 0:te[0])==null?void 0:ve.text)||((Se=be.data)==null?void 0:Se.result)||((Ee=be.data)==null?void 0:Ee.output);Ne?Ne.result=typeof ge=="string"?ge:JSON.stringify(ge):re.set(pe,{args:null,result:typeof ge=="string"?ge:JSON.stringify(ge)})}fe.set(ze,null)}else if(be.event_type==="model_response"){const pe=be.agent_name;if(pe&&pe!=="system"){const ge=(((ht=(De=be.data)==null?void 0:De.response_content)==null?void 0:ht.parts)||((et=be.data)==null?void 0:et.parts)||[]).find(Ie=>(Ie==null?void 0:Ie.type)==="text"&&(Ie==null?void 0:Ie.text));ge!=null&&ge.text&&Y.set(pe,ge.text)}}}_e.forEach(be=>ue.add(`tool:${be}`));const G=new Set,ie=new Set,q=new Set;for(const[be,ze]of le){if(ze.length>1){const Ne=ze[ze.length-1];G.add(Ne),be&&q.add(be)}const pe=fe.get(be);pe&&ie.add(pe)}return{activeAgents:G,activeTools:ie,transitions:Z,visitedAgents:ue,toolCalls:ne,activeBranches:q,lastMessages:Y,toolLastCalls:re}},[t,n,e]),O=w.useMemo(()=>{const L=new Map(e.map(z=>[z.name,z])),B=[],$=new Map;for(const z of R){if(z.startsWith("tool:"))continue;const S=L.get(z),D=(S==null?void 0:S.id)||z,Z=_.current.get(D);B.push({id:D,name:z,type:z==="system"?"System":(S==null?void 0:S.type)||"LlmAgent",isActive:E.has(z),wasActive:!0,lastMessage:M.get(z),x:Z==null?void 0:Z.x,y:Z==null?void 0:Z.y}),$.set(z,D)}for(const z of R){if(!z.startsWith("tool:"))continue;const S=z.slice(5),D=`tool:${S}`,Z=_.current.get(D);B.push({id:D,name:S,type:"Tool",isActive:W.has(S),wasActive:!0,lastToolCall:F.get(S),x:Z==null?void 0:Z.x,y:Z==null?void 0:Z.y}),$.set(z,D)}const g=new Set(B.map(z=>z.id)),P=[];for(const[z,S]of C){const[D,Z]=z.split("->"),ne=$.get(D),ue=$.get(Z);ne&&ue&&g.has(ne)&&g.has(ue)&&P.push({source:ne,target:ue,type:"transition",count:S})}for(const[z,S]of H){const[D,Z]=z.split("->"),ne=$.get(D),ue=$.get(Z);ne&&ue&&g.has(ne)&&g.has(ue)&&P.push({source:ne,target:ue,type:"tool",count:S})}return{nodes:B,links:P}},[e,E,W,R,C,H,M,F]);return w.useEffect(()=>{var ie;if(!k.current||!d)return;const L=_t(k.current),B=300,$=400;L.selectAll("*").remove();const g=L.append("g"),P={current:((ie=A.current)==null?void 0:ie.k)||1},z=Gx().scaleExtent([.3,3]).on("zoom",q=>{g.attr("transform",q.transform),A.current=q.transform,P.current=q.transform.k});L.call(z),A.current&&(L.call(z.transform,A.current),P.current=A.current.k);const S=()=>{if(O.nodes.length===0)return null;let q=1/0,I=-1/0,N=1/0,U=-1/0;if(O.nodes.forEach(Ee=>{Ee.x!==void 0&&Ee.y!==void 0&&(q=Math.min(q,Ee.x),I=Math.max(I,Ee.x),N=Math.min(N,Ee.y),U=Math.max(U,Ee.y))}),q===1/0)return null;const J=60,se=I-q+J*2,K=U-N+J*2,te=Math.min(B/se,$/K,1.5)*.85,ve=(q+I)/2,Se=(N+U)/2;return ns.translate(B/2,$/2).scale(te).translate(-ve,-Se)},D=(q,I,N)=>q+(I-q)*N,Z=q=>{const I=A.current;if(!I){A.current=q,P.current=q.k,L.call(z.transform,q);return}const N=.15,U=D(I.x,q.x,N),J=D(I.y,q.y,N),se=D(I.k,q.k,N),K=ns.translate(U,J).scale(se);A.current=K,P.current=K.k,L.call(z.transform,K)},ne=O.nodes.every(q=>q.x!==void 0&&q.y!==void 0);if(!ne){const q=new Map;for(const I of O.nodes)I.x!==void 0&&I.y!==void 0&&q.set(I.id,{x:I.x,y:I.y});for(const I of O.nodes)if(I.x===void 0||I.y===void 0){const N=O.links.find(U=>(typeof U.target=="string"?U.target:U.target.id)===I.id);if(N){const U=typeof N.source=="string"?N.source:N.source.id,J=q.get(U);if(J){const se=Math.random()*Math.PI*2,K=50+Math.random()*30;I.x=J.x+Math.cos(se)*K,I.y=J.y+Math.sin(se)*K,q.set(I.id,{x:I.x,y:I.y})}}(I.x===void 0||I.y===void 0)&&(I.x=(Math.random()-.5)*50,I.y=(Math.random()-.5)*50)}}const ue=140,_e=()=>{const q=ue/P.current;for(const I of O.nodes){if(I.x===void 0||I.y===void 0)continue;const N=Math.sqrt(I.x*I.x+I.y*I.y);if(N>q){const U=q/N;I.x*=U,I.y*=U}}},Y=()=>{for(const q of O.nodes)if(q.name==="system"&&q.x!==void 0&&q.y!==void 0){const N=ue/P.current*.75,U=225*Math.PI/180,J=N*Math.cos(U),se=-N*Math.sin(U),K=.3;q.vx=(q.vx||0)+(J-q.x)*K,q.vy=(q.vy||0)+(se-q.y)*K}},re=new Set;for(const q of O.links){const I=typeof q.source=="string"?q.source:q.source.id;re.add(I)}const le=new Set(O.nodes.filter(q=>!re.has(q.id)&&q.name!=="system").map(q=>q.id)),ee=()=>{const I=ue/P.current*.65,N=.15;for(const U of O.nodes)if(le.has(U.id)&&U.x!==void 0&&U.y!==void 0){const J=Math.sqrt(U.x*U.x+U.y*U.y)||1;if(J<I){const se=U.x/J,K=U.y/J,te=(I-J)*N;U.vx=(U.vx||0)+se*te,U.vy=(U.vy||0)+K*te}}},fe=Sx(O.nodes).force("link",_x(O.links).id(q=>q.id).distance(100)).force("charge",Cx().strength(-400)).force("center",vx(0,0)).force("collision",wx().radius(40)).force("boundary",_e).force("systemPull",Y).force("leafOutward",ee).alphaDecay(.01);ne?fe.alpha(.3):fe.alpha(1),T.current=fe;const ye=L.append("defs");O.links.forEach((q,I)=>{const N=ye.append("linearGradient").attr("id",`link-gradient-${I}`).attr("gradientUnits","userSpaceOnUse");if(q.type==="transition")N.append("stop").attr("offset","0%").attr("stop-color","#166534").attr("stop-opacity",.1),N.append("stop").attr("offset","25%").attr("stop-color","#166534").attr("stop-opacity",.4),N.append("stop").attr("offset","50%").attr("stop-color","#22c55e").attr("stop-opacity",.7),N.append("stop").attr("offset","75%").attr("stop-color","#4ade80").attr("stop-opacity",.9),N.append("stop").attr("offset","100%").attr("stop-color","#86efac").attr("stop-opacity",1);else{const U=q.type==="sub_agent"?{start:"#3730a3",end:"#a5b4fc"}:{start:"#92400e",end:"#fcd34d"};N.append("stop").attr("offset","0%").attr("stop-color",U.start),N.append("stop").attr("offset","100%").attr("stop-color",U.end)}});const X=g.append("g").attr("class","links").selectAll("path").data(O.links).join("path").attr("stroke",(q,I)=>`url(#link-gradient-${I})`).attr("stroke-width",q=>{const I=q.type==="transition"?2:1.5;return Math.min(I+(q.count-1)*1.5,18)}).attr("stroke-opacity",q=>q.type==="transition"?.8:.5).attr("stroke-dasharray",q=>q.type==="tool"?"4,2":"none").attr("fill","none"),he=g.append("g").selectAll("g").data(O.nodes).join("g").call(ix().on("start",(q,I)=>{q.active||fe.alphaTarget(.3).restart(),I.fx=I.x,I.fy=I.y}).on("drag",(q,I)=>{I.fx=q.x,I.fy=q.y}).on("end",(q,I)=>{q.active||fe.alphaTarget(0),I.fx=null,I.fy=null})),we=q=>q.type==="System"?14:q.type==="Tool"?12:18;he.filter(q=>q.type!=="Tool"&&q.type!=="System").append("circle").attr("r",q=>we(q)+5).attr("fill","none").attr("stroke",q=>gi(q.type)).attr("stroke-width",3).attr("stroke-opacity",q=>q.wasActive?.9:.4).attr("stroke-dasharray",q=>q.type==="SequentialAgent"?"8,4":q.type==="LoopAgent"?"6,3":q.type==="ParallelAgent"?"3,3":"none"),he.append("circle").attr("r",q=>we(q)).attr("fill",q=>q.type==="Tool"?Sa.bg:ja(q.name).bg).attr("stroke",q=>q.isActive?"#fff":q.wasActive?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.2)").attr("stroke-width",q=>q.isActive?3:1.5).attr("opacity",q=>q.wasActive?1:.5).attr("class",q=>q.isActive?"active-node":"").style("cursor","pointer").on("mouseenter",function(q,I){var se;const N=(se=y.current)==null?void 0:se.getBoundingClientRect();if(!N)return;const U=q.clientX-N.left,J=q.clientY-N.top;h({x:U,y:J,node:I}),_t(this).transition().duration(150).attr("r",we(I)+6)}).on("mouseleave",function(q,I){h(null),_t(this).transition().duration(150).attr("r",we(I))}),he.append("text").text(q=>q.name.length>10?q.name.slice(0,8)+"…":q.name).attr("text-anchor","middle").attr("dy",32).attr("font-size",10).attr("fill","#e4e4e7").attr("font-weight",q=>q.isActive?600:400),fe.on("tick",()=>{X.attr("d",I=>{const N=I.target.x-I.source.x,U=I.target.y-I.source.y,J=Math.sqrt(N*N+U*U)*1.5;return`M${I.source.x},${I.source.y}A${J},${J} 0 0,1 ${I.target.x},${I.target.y}`}),O.links.forEach((I,N)=>{ye.select(`#link-gradient-${N}`).attr("x1",I.source.x).attr("y1",I.source.y).attr("x2",I.target.x).attr("y2",I.target.y)}),he.attr("transform",I=>`translate(${I.x},${I.y})`),O.nodes.forEach(I=>{I.x!==void 0&&I.y!==void 0&&_.current.set(I.id,{x:I.x,y:I.y})});const q=S();q&&Z(q)});const G=S();return G&&Z(G),()=>{fe.stop()}},[O,d]),w.useEffect(()=>{if(!x.current||!c)return;const L=_t(x.current),B=v.current;if(!B)return;const $=Math.min(B.clientWidth,B.clientHeight),g=$,P=$;L.selectAll("*").remove();const z=L.append("g"),S=Gx().scaleExtent([.3,3]).on("zoom",X=>{z.attr("transform",X.transform),j.current=X.transform});if(L.call(S),j.current)L.call(S.transform,j.current);else{const X=ns.translate(g/2,P/2).scale(.9);L.call(S.transform,X),j.current=X}const D=$*.35,Z=()=>{for(const X of O.nodes){if(X.x===void 0||X.y===void 0)continue;const he=Math.sqrt(X.x*X.x+X.y*X.y);if(he>D){const we=D/he;X.x*=we,X.y*=we}}},ne=new Set;for(const X of O.links){const he=typeof X.source=="string"?X.source:X.source.id;ne.add(he)}const ue=new Set(O.nodes.filter(X=>!ne.has(X.id)&&X.name!=="system").map(X=>X.id)),_e=()=>{const X=D*.75,he=.12;for(const we of O.nodes)if(ue.has(we.id)&&we.x!==void 0&&we.y!==void 0){const G=Math.sqrt(we.x*we.x+we.y*we.y)||1;if(G<X){const ie=we.x/G,q=we.y/G,I=(X-G)*he;we.vx=(we.vx||0)+ie*I,we.vy=(we.vy||0)+q*I}}},Y=O.nodes.every(X=>X.x!==void 0&&X.y!==void 0),re=Sx(O.nodes).force("link",_x(O.links).id(X=>X.id).distance(120)).force("charge",Cx().strength(-500)).force("center",vx(0,0)).force("collision",wx().radius(50)).force("boundary",Z).force("leafOutward",_e).alpha(Y?.1:.8).alphaDecay(.02),le=L.append("defs");O.links.forEach((X,he)=>{const we=le.append("linearGradient").attr("id",`exp-link-gradient-${he}`).attr("gradientUnits","userSpaceOnUse");if(X.type==="transition")we.append("stop").attr("offset","0%").attr("stop-color","#166534").attr("stop-opacity",.1),we.append("stop").attr("offset","25%").attr("stop-color","#166534").attr("stop-opacity",.4),we.append("stop").attr("offset","50%").attr("stop-color","#22c55e").attr("stop-opacity",.7),we.append("stop").attr("offset","75%").attr("stop-color","#4ade80").attr("stop-opacity",.9),we.append("stop").attr("offset","100%").attr("stop-color","#86efac").attr("stop-opacity",1);else{const G=X.type==="sub_agent"?{start:"#3730a3",end:"#a5b4fc"}:{start:"#92400e",end:"#fcd34d"};we.append("stop").attr("offset","0%").attr("stop-color",G.start),we.append("stop").attr("offset","100%").attr("stop-color",G.end)}});const ee=z.append("g").attr("class","links").selectAll("path").data(O.links).join("path").attr("stroke",(X,he)=>`url(#exp-link-gradient-${he})`).attr("stroke-width",X=>{const he=X.type==="transition"?3:2;return Math.min(he+(X.count-1)*2.5,28)}).attr("stroke-opacity",X=>X.type==="transition"?.8:.5).attr("stroke-dasharray",X=>X.type==="tool"?"6,3":"none").attr("fill","none"),fe=X=>X.type==="System"?20:X.type==="Tool"?18:28,ye=z.append("g").selectAll("g").data(O.nodes).join("g").call(ix().on("start",(X,he)=>{X.active||re.alphaTarget(.3).restart(),he.fx=he.x,he.fy=he.y}).on("drag",(X,he)=>{he.fx=X.x,he.fy=X.y}).on("end",(X,he)=>{X.active||re.alphaTarget(0),he.fx=null,he.fy=null}));return ye.filter(X=>X.type!=="Tool"&&X.type!=="System").append("circle").attr("r",X=>fe(X)+6).attr("fill","none").attr("stroke",X=>gi(X.type)).attr("stroke-width",4).attr("stroke-opacity",X=>X.wasActive?.9:.4).attr("stroke-dasharray",X=>X.type==="SequentialAgent"?"10,5":X.type==="LoopAgent"?"8,4":X.type==="ParallelAgent"?"4,4":"none"),ye.append("circle").attr("r",X=>fe(X)).attr("fill",X=>X.type==="Tool"?Sa.bg:ja(X.name).bg).attr("stroke",X=>X.isActive?"#fff":X.wasActive?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.2)").attr("stroke-width",X=>X.isActive?4:2).attr("opacity",X=>X.wasActive?1:.5).attr("class",X=>X.isActive?"active-node":"").style("cursor","grab").on("mouseenter",function(X,he){var q;const we=(q=v.current)==null?void 0:q.getBoundingClientRect();if(!we)return;const G=X.clientX-we.left,ie=X.clientY-we.top;b({x:G,y:ie,node:he}),_t(this).transition().duration(150).attr("r",fe(he)+8)}).on("mouseleave",function(X,he){b(null),_t(this).transition().duration(150).attr("r",fe(he))}),ye.append("text").text(X=>X.name.length>15?X.name.slice(0,13)+"…":X.name).attr("text-anchor","middle").attr("dy",X=>fe(X)+18).attr("font-size",14).attr("fill","#e4e4e7").attr("font-weight",X=>X.isActive?600:400),re.on("tick",()=>{ee.attr("d",X=>{const he=X.target.x-X.source.x,we=X.target.y-X.source.y,G=Math.sqrt(he*he+we*we)*1.5;return`M${X.source.x},${X.source.y}A${G},${G} 0 0,1 ${X.target.x},${X.target.y}`}),O.links.forEach((X,he)=>{le.select(`#exp-link-gradient-${he}`).attr("x1",X.source.x).attr("y1",X.source.y).attr("x2",X.target.x).attr("y2",X.target.y)}),ye.attr("transform",X=>`translate(${X.x},${X.y})`),O.nodes.forEach(X=>{X.x!==void 0&&X.y!==void 0&&_.current.set(X.id,{x:X.x,y:X.y})})}),()=>{re.stop()}},[O,c]),o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:`agent-graph-container ${d?"":"closed"}`,children:o.jsxs("div",{className:"agent-graph-panel",children:[o.jsxs("div",{className:`agent-graph-content clickable state-${s}`,ref:y,onClick:()=>u(!0),title:"Click to expand",children:[o.jsx("svg",{ref:k,className:"agent-graph-svg"}),o.jsxs("div",{className:"agent-graph-legend",children:[o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{className:"legend-line",style:{background:"#22c55e"}}),o.jsx("span",{children:"agent flow"})]}),o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{className:"legend-line",style:{background:"#f59e0b",borderStyle:"dashed"}}),o.jsx("span",{children:"tool call"})]}),o.jsxs("div",{style:{marginTop:4,borderTop:"1px solid #333",paddingTop:4},children:[o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{style:{width:10,height:10,borderRadius:"50%",border:`2px solid ${Uo.LlmAgent}`}}),o.jsx("span",{children:"LLM"})]}),o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{style:{width:10,height:10,borderRadius:"50%",border:`2px dashed ${Uo.SequentialAgent}`}}),o.jsx("span",{children:"Sequential"})]}),o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{style:{width:10,height:10,borderRadius:"50%",border:`2px dashed ${Uo.LoopAgent}`}}),o.jsx("span",{children:"Loop"})]}),o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{style:{width:10,height:10,borderRadius:"50%",border:`2px dotted ${Uo.ParallelAgent}`}}),o.jsx("span",{children:"Parallel"})]})]})]}),f&&o.jsxs("div",{className:"agent-graph-tooltip",style:{left:Math.min(f.x+15,180),top:Math.max(f.y-20,10)},children:[o.jsx("div",{className:"agent-graph-tooltip-name",children:f.node.name}),o.jsxs("div",{className:"agent-graph-tooltip-type",children:[o.jsx("div",{className:"agent-graph-tooltip-dot",style:{background:f.node.type==="Tool"?Sa.bg:ja(f.node.name).bg,border:f.node.type!=="Tool"&&f.node.type!=="System"?`2px solid ${gi(f.node.type)}`:"none",width:12,height:12}}),o.jsx("span",{style:{color:gi(f.node.type)},children:f.node.type==="LlmAgent"?"LLM Agent":f.node.type==="SequentialAgent"?"Sequential":f.node.type==="LoopAgent"?"Loop":f.node.type==="ParallelAgent"?"Parallel":f.node.type})]}),f.node.isActive&&o.jsx("div",{className:"agent-graph-tooltip-active",children:"● Currently executing"}),f.node.lastMessage&&o.jsxs("div",{className:"agent-graph-tooltip-message",children:['"',f.node.lastMessage.slice(0,80),f.node.lastMessage.length>80?"...":"",'"']}),f.node.type==="Tool"&&f.node.lastToolCall&&o.jsxs("div",{className:"agent-graph-tooltip-tool",children:[f.node.lastToolCall.args&&o.jsxs("div",{className:"tooltip-tool-args",children:[o.jsx("span",{className:"tooltip-tool-label",children:"Args:"})," ",(()=>{const L=JSON.stringify(f.node.lastToolCall.args);return L.slice(0,60)+(L.length>60?"...":"")})()]}),f.node.lastToolCall.result&&o.jsxs("div",{className:"tooltip-tool-result",children:[o.jsx("span",{className:"tooltip-tool-label",children:"Result:"})," ",f.node.lastToolCall.result.slice(0,60),f.node.lastToolCall.result.length>60?"...":""]})]})]})]}),o.jsx("button",{className:`agent-graph-toggle state-${s}`,onClick:()=>p(!d),children:o.jsx(zt,{size:20})})]})}),c&&o.jsx("div",{className:"agent-graph-modal-overlay",onClick:()=>{u(!1),j.current=null},children:o.jsxs("div",{className:`agent-graph-modal state-${s}`,ref:v,onClick:L=>L.stopPropagation(),children:[o.jsx("svg",{ref:x,className:"agent-graph-modal-svg"}),m&&o.jsxs("div",{className:"agent-graph-tooltip expanded-tooltip",style:{left:Math.min(m.x+20,window.innerWidth-200),top:Math.max(m.y-20,20)},children:[o.jsx("div",{className:"agent-graph-tooltip-name",children:m.node.name}),o.jsxs("div",{className:"agent-graph-tooltip-type",children:[o.jsx("div",{className:"agent-graph-tooltip-dot",style:{background:m.node.type==="Tool"?Sa.bg:ja(m.node.name).bg,border:m.node.type!=="Tool"&&m.node.type!=="System"?`2px solid ${gi(m.node.type)}`:"none",width:12,height:12}}),o.jsx("span",{style:{color:gi(m.node.type)},children:m.node.type==="LlmAgent"?"LLM Agent":m.node.type==="SequentialAgent"?"Sequential":m.node.type==="LoopAgent"?"Loop":m.node.type==="ParallelAgent"?"Parallel":m.node.type})]}),m.node.isActive&&o.jsx("div",{className:"agent-graph-tooltip-active",children:"● Currently executing"}),m.node.lastMessage&&o.jsxs("div",{className:"agent-graph-tooltip-message",children:['"',m.node.lastMessage.slice(0,120),m.node.lastMessage.length>120?"...":"",'"']}),m.node.type==="Tool"&&m.node.lastToolCall&&o.jsxs("div",{className:"agent-graph-tooltip-tool",children:[m.node.lastToolCall.args&&o.jsxs("div",{className:"tooltip-tool-args",children:[o.jsx("span",{className:"tooltip-tool-label",children:"Args:"})," ",(()=>{const L=JSON.stringify(m.node.lastToolCall.args);return L.slice(0,100)+(L.length>100?"...":"")})()]}),m.node.lastToolCall.result&&o.jsxs("div",{className:"tooltip-tool-result",children:[o.jsx("span",{className:"tooltip-tool-label",children:"Result:"})," ",m.node.lastToolCall.result.slice(0,100),m.node.lastToolCall.result.length>100?"...":""]})]})]})]})})]})}const Xx={agent_start:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},agent_end:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},tool_call:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},tool_result:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},model_call:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},model_response:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},callback_error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"},state_change:{bg:"#3d0d1f",fg:"#fda4af",border:"#f43f5e"},transfer:{bg:"#0d2d3d",fg:"#7dd3fc",border:"#0ea5e9"},callback_start:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},callback_end:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"}},HA={agent_start:Sd,agent_end:Sd,tool_call:kn,tool_result:kn,model_call:tf,model_response:wl,state_change:Gn,transfer:af,callback_start:Rn,callback_end:Rn,callback_error:Is},Zx=[{bg:"#0e7490",fg:"#e0f2fe"},{bg:"#6d28d9",fg:"#ede9fe"},{bg:"#047857",fg:"#d1fae5"},{bg:"#b91c1c",fg:"#fee2e2"},{bg:"#b45309",fg:"#fef3c7"},{bg:"#1d4ed8",fg:"#dbeafe"},{bg:"#be185d",fg:"#fce7f3"},{bg:"#4d7c0f",fg:"#ecfccb"},{bg:"#7c3aed",fg:"#ede9fe"},{bg:"#0f766e",fg:"#ccfbf1"},{bg:"#c2410c",fg:"#ffedd5"},{bg:"#4338ca",fg:"#e0e7ff"}],ey=new Map;function Bl(e){if(e==="sandbox"||e==="system")return{bg:"#374151",fg:"#9ca3af"};let t=ey.get(e);if(t===void 0){let n=0;for(let r=0;r<e.length;r++)n=(n<<5)-n+e.charCodeAt(r),n=n&n;t=Math.abs(n)%Zx.length,ey.set(e,t)}return Zx[t]}function ty(e){var t,n,r,i,s,a,l,c,u,d,p,f,h,m,b,k,x,y,v,j,T,_,A,E,W,C,R,H,Q,M,F,O;switch(e.event_type){case"agent_start":return`START ${e.agent_name}`;case"agent_end":if((t=e.data)!=null&&t.error){const fe=(n=e.data)!=null&&n.hint?` 💡 ${e.data.hint.slice(0,100)}`:"";return`END ${e.agent_name} [ERROR] ${e.data.error}${fe}`}return`END ${e.agent_name}`;case"tool_call":const B=Object.entries(((r=e.data)==null?void 0:r.args)||{}).map(([fe,ye])=>{const X=ye!=null?JSON.stringify(ye):"null";return`${fe}=${X.slice(0,500)}${X.length>500?"...":""}`}).join(", ")||"";return`CALL ${((i=e.data)==null?void 0:i.tool_name)||"unknown"}(${B.slice(0,1e3)}${B.length>1e3?"...":""})`;case"tool_result":const $=(s=e.data)==null?void 0:s.result;let g="";if((l=(a=$==null?void 0:$.content)==null?void 0:a[0])!=null&&l.text)g=String($.content[0].text).slice(0,500);else if(typeof $=="string")g=$.slice(0,500);else if($!=null){const fe=JSON.stringify($);g=fe?fe.slice(0,500):""}else g="";return`RESULT ${((c=e.data)==null?void 0:c.tool_name)||"unknown"} → ${g}${g.length>=500?"...":""}`;case"model_call":return`LLM_REQ ${((d=(u=e.data)==null?void 0:u.contents)==null?void 0:d.length)||0} msgs, ${((p=e.data)==null?void 0:p.tool_count)||0} tools`;case"model_response":const P=((h=(f=e.data)==null?void 0:f.response_content)==null?void 0:h.parts)||((m=e.data)==null?void 0:m.parts)||[],z=P.find(fe=>(fe==null?void 0:fe.type)==="function_call");if(z)return`LLM_RSP → ${z.name||"unknown"}()`;const S=P.find(fe=>(fe==null?void 0:fe.type)==="text");if(S!=null&&S.text){const fe=String(S.text);return`LLM_RSP "${fe.slice(0,50)}${fe.length>50?"...":""}"`}return`LLM_RSP (${((b=e.data)==null?void 0:b.finish_reason)||"complete"})`;case"state_change":return`STATE ${Object.keys(((k=e.data)==null?void 0:k.state_delta)||{}).join(", ")}`;case"transfer":return`TRANSFER → ${((x=e.data)==null?void 0:x.target)||"unknown"}`;case"callback_start":const Z=((y=e.data)==null?void 0:y.callback_name)||"unknown",ne=((v=e.data)==null?void 0:v.callback_type)||"";return Z==="network_approval"?`⏳ AWAITING APPROVAL ${((j=e.data)==null?void 0:j.host)||((T=e.data)==null?void 0:T.url)||""}`:`CALLBACK START ${ne?`[${ne}]`:""} ${Z}`;case"callback_end":const ue=((_=e.data)==null?void 0:_.callback_name)||"unknown",_e=((A=e.data)==null?void 0:A.callback_type)||"",Y=(E=e.data)!=null&&E.error?" [ERROR]":"";return ue==="network_approval"?((W=e.data)==null?void 0:W.action)==="deny"?`🚫 DENIED ${((C=e.data)==null?void 0:C.host)||""}`:`✅ APPROVED ${((R=e.data)==null?void 0:R.pattern)||((H=e.data)==null?void 0:H.host)||""}`:`CALLBACK END ${_e?`[${_e}]`:""} ${ue}${Y}`;case"callback_error":const re=((Q=e.data)==null?void 0:Q.source)||"unknown",le=((M=e.data)==null?void 0:M.error)||"Unknown error";return`⚠️ ERROR in ${re}: ${le.slice(0,50)}${le.length>50?"...":""}`;case"compaction":const ee=((F=e.data)==null?void 0:F.summary_preview)||"";return`📦 COMPACTION "${ee.slice(0,80)}${ee.length>80?"...":""}"`;default:return((O=e.event_type)==null?void 0:O.toUpperCase())||"UNKNOWN"}}function VA(e,t){const n=e-t;return n<1?`+${(n*1e3).toFixed(0)}ms`:n<60?`+${n.toFixed(2)}s`:`+${Math.floor(n/60)}m${(n%60).toFixed(0)}s`}function qA(e){const t={timestamp:"#71717a",bracket:"#a78bfa",ip:"#22d3ee",domain:"#34d399",url:"#60a5fa",method:"#f472b6",status:"#4ade80",statusError:"#f87171",number:"#fbbf24",keyword:"#c084fc",info:"#22d3ee",warning:"#fbbf24",error:"#f87171",debug:"#71717a"},n=[];let r=e,i=0;const s=(l,c)=>{l&&n.push(c?o.jsx("span",{style:{color:c},children:l},i++):o.jsx("span",{children:l},i++))},a=[{regex:/^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+Z?\s*)/,color:t.timestamp},{regex:/(\[[^\]]+\])/,color:t.bracket},{regex:/\b(GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS|CONNECT)\b/,color:t.method},{regex:/\b([23]\d{2})\s+(OK|Created|Accepted|No Content|Moved|Found|Not Modified)\b/,color:t.status},{regex:/\b([45]\d{2})\s+\w+/,color:t.statusError},{regex:/(<< \d{3} \w+)/,color:t.status},{regex:/(https?:\/\/[^\s]+)/,color:t.url},{regex:/(\s)(\/[a-zA-Z0-9_\-./]+)/,color:t.url,group:2},{regex:/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d+)/,color:t.ip},{regex:/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/,color:t.ip},{regex:/(sandbox-agent-[a-zA-Z0-9_-]+:\d+)/,color:t.domain},{regex:/(host\.docker\.internal:\d+)/,color:t.domain},{regex:/([a-zA-Z][a-zA-Z0-9-]*\.(?:com|org|net|io|dev|local|internal)(?::\d+)?)/,color:t.domain},{regex:/\b(\d+(?:\.\d+)?[kmgb])\b/i,color:t.number},{regex:/\b(INFO)\b/,color:t.info},{regex:/\b(WARNING|WARN)\b/,color:t.warning},{regex:/\b(ERROR|CRITICAL|FATAL)\b/,color:t.error},{regex:/\b(DEBUG)\b/,color:t.debug},{regex:/([a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*){2,})/,color:t.domain},{regex:/\b(client|server|connect|disconnect|completion|model|provider)\b/i,color:t.keyword}];for(;r.length>0;){let l=null;for(const{regex:c,color:u,group:d}of a){const p=r.match(c);if(p&&p.index!==void 0){const f=d?r.indexOf(p[d],p.index):p.index,h=d?p[d]:p[0];(!l||f<l.index)&&(l={index:f,length:h.length,text:h,color:u})}}if(l)l.index>0&&s(r.slice(0,l.index)),s(l.text,l.color),r=r.slice(l.index+l.length);else{s(r);break}}return o.jsx(o.Fragment,{children:n})}function YA({content:e}){const t=e.split(`
`);return o.jsx(o.Fragment,{children:t.map((n,r)=>o.jsx("div",{children:qA(n)},r))})}function JA({event:e}){var l,c,u,d,p,f,h,m,b,k,x,y,v,j,T,_,A,E,W,C,R,H,Q,M,F;const[t,n]=w.useState(new Set(["instruction","messages","result","response","state_delta","data"])),[r,i]=w.useState(null),s=O=>{const L=new Set(t);L.has(O)?L.delete(O):L.add(O),n(L)},a=(O,L=0,B=!1)=>{const $="  ".repeat(L),g="  ".repeat(L+1);if(O===null)return o.jsx("span",{className:"json-null",children:"null"});if(O===void 0)return o.jsx("span",{className:"json-undefined",children:"undefined"});if(typeof O=="boolean")return o.jsx("span",{className:"json-boolean",children:O.toString()});if(typeof O=="number")return o.jsx("span",{className:"json-number",children:O});if(typeof O=="string"){const P=O.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\t/g,"\\t"),z=()=>i(O);return P.length>300&&L>0?o.jsxs("span",{className:"json-string json-string-clickable",onClick:z,title:"Click to view as Markdown",children:['"',P.slice(0,300),'..." ',o.jsxs("span",{className:"json-truncated",children:["(",O.length," chars)"]})]}):o.jsxs("span",{className:"json-string json-string-clickable",onClick:z,title:"Click to view as Markdown",children:['"',P,'"']})}if(Array.isArray(O))return O.length===0?o.jsx("span",{className:"json-bracket",children:"[]"}):O.every(z=>z===null||typeof z!="object")&&O.length<=3?o.jsxs("span",{className:"json-inline",children:[o.jsx("span",{className:"json-bracket",children:"["}),O.map((z,S)=>o.jsxs("span",{children:[a(z,L+1,!0),S<O.length-1&&o.jsx("span",{className:"json-comma",children:", "})]},S)),o.jsx("span",{className:"json-bracket",children:"]"})]}):o.jsxs("span",{className:"json-block",children:[o.jsx("span",{className:"json-bracket",children:"["}),O.map((z,S)=>o.jsxs("span",{children:[`
`+g,a(z,L+1),S<O.length-1&&o.jsx("span",{className:"json-comma",children:","})]},S)),`
`+$,o.jsx("span",{className:"json-bracket",children:"]"})]});if(typeof O=="object"){const P=Object.entries(O);return P.length===0?o.jsx("span",{className:"json-bracket",children:"{}"}):P.length<=2&&P.every(([,S])=>S===null||typeof S!="object")&&B?o.jsxs("span",{className:"json-inline",children:[o.jsx("span",{className:"json-bracket",children:"{"}),P.map(([S,D],Z)=>o.jsxs("span",{children:[o.jsxs("span",{className:"json-key",children:['"',S,'"']}),o.jsx("span",{className:"json-colon",children:": "}),a(D,L+1,!0),Z<P.length-1&&o.jsx("span",{className:"json-comma",children:", "})]},S)),o.jsx("span",{className:"json-bracket",children:"}"})]}):o.jsxs("span",{className:"json-block",children:[o.jsx("span",{className:"json-bracket",children:"{"}),P.map(([S,D],Z)=>o.jsxs("span",{children:[`
`+g,o.jsxs("span",{className:"json-key",children:['"',S,'"']}),o.jsx("span",{className:"json-colon",children:": "}),a(D,L+1),Z<P.length-1&&o.jsx("span",{className:"json-comma",children:","})]},S)),`
`+$,o.jsx("span",{className:"json-bracket",children:"}"})]})}return String(O)};return o.jsxs("div",{className:"event-detail",children:[o.jsxs("div",{className:"detail-header",children:[o.jsx("span",{className:"detail-type",children:e.event_type}),o.jsx("span",{className:"detail-agent",style:{backgroundColor:Bl(e.agent_name).bg,color:Bl(e.agent_name).fg,padding:"2px 8px",borderRadius:"4px",fontWeight:600},children:e.agent_name}),o.jsx("span",{className:"detail-time",children:new Date(e.timestamp*1e3).toISOString()})]}),((l=e.data)==null?void 0:l.error)&&o.jsxs("div",{className:"detail-section",style:{borderColor:"#dc2626"},children:[o.jsxs("div",{className:"section-header",style:{color:"#fca5a5"},children:[o.jsx(Is,{size:12,style:{color:"#ef4444"}}),o.jsx("span",{children:"⚠️ Error"})]}),o.jsxs("div",{className:"section-content",style:{color:"#fca5a5"},children:[o.jsxs("div",{style:{marginBottom:"8px"},children:[o.jsx("strong",{children:"Message:"})," ",e.data.error]}),e.data.hint&&o.jsxs("div",{style:{marginBottom:"8px",padding:"8px 12px",backgroundColor:"rgba(34, 197, 94, 0.1)",borderRadius:"6px",borderLeft:"3px solid #22c55e"},children:[o.jsx("strong",{style:{color:"#22c55e"},children:"💡 Hint:"})," ",o.jsx("span",{style:{color:"#86efac"},children:e.data.hint})]}),e.data.error_type&&e.data.error_type!=="unknown"&&o.jsxs("div",{style:{fontSize:"0.9em",opacity:.8},children:[o.jsx("strong",{children:"Type:"})," ",e.data.error_type]}),e.data.sub_errors&&e.data.sub_errors.length>0&&o.jsxs("div",{style:{marginTop:"12px"},children:[o.jsxs("strong",{children:["Sub-errors (",e.data.sub_errors.length,"):"]}),e.data.sub_errors.map((O,L)=>o.jsxs("div",{style:{marginTop:"8px",marginLeft:"12px",padding:"8px",backgroundColor:"rgba(220, 38, 38, 0.1)",borderRadius:"4px"},children:[o.jsxs("div",{children:[o.jsxs("strong",{children:[O.exception_type,":"]})," ",O.message]}),O.hint&&o.jsxs("div",{style:{marginTop:"4px",color:"#86efac",fontSize:"0.9em"},children:["💡 ",O.hint]}),O.stack_trace&&o.jsxs("details",{style:{marginTop:"6px"},children:[o.jsx("summary",{style:{cursor:"pointer",opacity:.7,fontSize:"0.9em"},children:"Stack trace"}),o.jsx("pre",{style:{marginTop:"4px",padding:"6px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.75em",overflow:"auto",maxHeight:"200px",whiteSpace:"pre-wrap",wordBreak:"break-word",fontFamily:'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'},children:O.stack_trace})]})]},L))]}),e.data.stack_trace&&o.jsxs("details",{style:{marginTop:"12px"},children:[o.jsx("summary",{style:{cursor:"pointer",opacity:.8,fontWeight:500},children:"📋 Stack Trace"}),o.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.8em",overflow:"auto",maxHeight:"400px",whiteSpace:"pre-wrap",wordBreak:"break-word",fontFamily:'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',lineHeight:"1.4"},children:e.data.stack_trace})]}),e.data.raw_error&&e.data.raw_error!==e.data.error&&!e.data.stack_trace&&o.jsxs("details",{style:{marginTop:"8px"},children:[o.jsx("summary",{style:{cursor:"pointer",opacity:.7},children:"Raw error"}),o.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"200px",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:e.data.raw_error})]})]})]}),o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("data"),children:[t.has("data")?o.jsx(Et,{size:12}):o.jsx(zt,{size:12}),o.jsx("span",{children:"Event Data"})]}),t.has("data")&&o.jsx("div",{className:"section-content json-viewer",children:a(e.data)})]}),e.event_type==="agent_start"&&((c=e.data)==null?void 0:c.instruction)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("instruction"),children:[t.has("instruction")?o.jsx(Et,{size:12}):o.jsx(zt,{size:12}),o.jsx("span",{children:"Instruction"}),o.jsxs("span",{className:"char-count",children:[e.data.instruction.length," chars"]})]}),t.has("instruction")&&o.jsx("div",{className:"section-content",children:o.jsx("pre",{className:"instruction-text",children:e.data.instruction})})]}),e.event_type==="model_call"&&((u=e.data)==null?void 0:u.contents)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("messages"),children:[t.has("messages")?o.jsx(Et,{size:12}):o.jsx(zt,{size:12}),o.jsxs("span",{children:["Messages (",e.data.contents.length,")"]})]}),t.has("messages")&&o.jsx("div",{className:"section-content",children:e.data.contents.map((O,L)=>{var B;return o.jsxs("div",{className:"message-item",children:[o.jsx("span",{className:`message-role ${O.role}`,children:O.role}),o.jsx("div",{className:"message-parts",children:(B=O.parts)==null?void 0:B.map(($,g)=>o.jsxs("div",{className:"message-part",children:[$.text&&o.jsx("pre",{children:$.text}),$.function_call&&o.jsxs("div",{className:"function-call",children:[o.jsx("strong",{children:$.function_call.name}),o.jsx("pre",{children:JSON.stringify($.function_call.args,null,2)})]}),$.function_response&&o.jsxs("div",{className:"function-response",children:[o.jsx("strong",{children:$.function_response.name}),o.jsx("pre",{children:JSON.stringify($.function_response.response,null,2)})]})]},g))})]},L)})})]}),e.event_type==="tool_result"&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("result"),children:[t.has("result")?o.jsx(Et,{size:12}):o.jsx(zt,{size:12}),o.jsx("span",{children:"Tool Result"})]}),t.has("result")&&o.jsx("div",{className:"section-content",children:o.jsx("pre",{className:"result-content",children:((h=(f=(p=(d=e.data)==null?void 0:d.result)==null?void 0:p.content)==null?void 0:f[0])==null?void 0:h.text)||(typeof((m=e.data)==null?void 0:m.result)=="string"?e.data.result:JSON.stringify((b=e.data)==null?void 0:b.result,null,2))})})]}),e.event_type==="model_response"&&((k=e.data)==null?void 0:k.parts)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("response"),children:[t.has("response")?o.jsx(Et,{size:12}):o.jsx(zt,{size:12}),o.jsxs("span",{children:["Response (",e.data.parts.length," part",e.data.parts.length!==1?"s":"",")"]}),e.data.token_counts&&o.jsxs("span",{className:"token-badge",children:[e.data.token_counts.input,"↑ ",e.data.token_counts.output,"↓"]})]}),t.has("response")&&o.jsx("div",{className:"section-content",children:e.data.parts.map((O,L)=>o.jsxs("div",{className:"response-part",children:[O.type==="text"&&O.text&&o.jsx("pre",{className:"response-text",children:O.text}),O.type==="function_call"&&o.jsxs("div",{className:"function-call",children:[o.jsxs("strong",{children:["→ ",O.name,"()"]}),O.args&&Object.keys(O.args).length>0&&o.jsx("pre",{children:JSON.stringify(O.args,null,2)})]}),O.thought&&o.jsx("div",{className:"thought-indicator",children:"💭 Thinking"})]},L))})]}),(e.event_type==="callback_start"||e.event_type==="callback_end")&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("callback_info"),children:[t.has("callback_info")?o.jsx(Et,{size:12}):o.jsx(zt,{size:12}),o.jsx("span",{children:"Callback Information"})]}),t.has("callback_info")&&o.jsxs("div",{className:"section-content",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Name:"})," ",((x=e.data)==null?void 0:x.callback_name)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Type:"})," ",((y=e.data)==null?void 0:y.callback_type)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Module Path:"})," ",((v=e.data)==null?void 0:v.module_path)||"unknown"]}),((j=e.data)==null?void 0:j.error)&&o.jsxs("div",{style:{color:"#ef4444",marginTop:"8px"},children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Error:"})," ",e.data.error]}),((T=e.data)==null?void 0:T.error_type)&&o.jsxs("div",{style:{marginTop:"4px",fontSize:"0.9em",opacity:.8},children:[o.jsx("strong",{children:"Type:"})," ",e.data.error_type]}),((_=e.data)==null?void 0:_.stack_trace)&&o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Stack Trace:"}),o.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"300px",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:e.data.stack_trace})]})]})]})]}),e.event_type==="callback_error"&&o.jsxs("div",{className:"detail-section",style:{borderColor:"#dc2626"},children:[o.jsxs("div",{className:"section-header",onClick:()=>s("error_info"),style:{color:"#fca5a5"},children:[t.has("error_info")?o.jsx(Et,{size:12}):o.jsx(zt,{size:12}),o.jsx("span",{children:"⚠️ Error Details"})]}),t.has("error_info")&&o.jsxs("div",{className:"section-content",style:{color:"#fca5a5"},children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Source:"})," ",((A=e.data)==null?void 0:A.source)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Error Type:"})," ",((E=e.data)==null?void 0:E.error_type)||"unknown"]}),o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Message:"})," ",((W=e.data)==null?void 0:W.error)||"No error message"]}),((C=e.data)==null?void 0:C.context)&&o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Context:"})," ",e.data.context]}),((R=e.data)==null?void 0:R.traceback)&&o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Stack Trace:"}),o.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"400px",whiteSpace:"pre-wrap",wordBreak:"break-word",color:"#fca5a5"},children:e.data.traceback})]})]})]}),e.event_type==="state_change"&&((H=e.data)==null?void 0:H.state_delta)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("state_delta"),children:[t.has("state_delta")?o.jsx(Et,{size:12}):o.jsx(zt,{size:12}),o.jsxs("span",{children:["State Changes (",Object.keys(e.data.state_delta).length,")"]})]}),t.has("state_delta")&&o.jsx("div",{className:"section-content",children:Object.entries(e.data.state_delta).map(([O,L])=>o.jsxs("div",{className:"state-delta-item",children:[o.jsx("div",{className:"state-delta-key",children:O}),o.jsx("pre",{className:"state-delta-value",children:typeof L=="string"?L:JSON.stringify(L,null,2)})]},O))})]}),e.event_type==="compaction"&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("compaction_info"),children:[t.has("compaction_info")?o.jsx(Et,{size:12}):o.jsx(zt,{size:12}),o.jsx("span",{children:"📦 Compaction Details"})]}),t.has("compaction_info")&&o.jsxs("div",{className:"section-content",children:[o.jsxs("div",{style:{marginBottom:"12px",padding:"8px",background:"rgba(147, 51, 234, 0.1)",borderRadius:"4px",border:"1px solid rgba(147, 51, 234, 0.3)"},children:[o.jsx("div",{style:{fontSize:"11px",color:"#a855f7",marginBottom:"4px",fontWeight:600},children:"Event Compaction Occurred"}),o.jsx("div",{style:{fontSize:"12px",color:"#e4e4e7"},children:"ADK has summarized older events to manage context window limits."})]}),((Q=e.data)==null?void 0:Q.start_timestamp)&&((M=e.data)==null?void 0:M.end_timestamp)&&o.jsxs("div",{style:{marginBottom:"8px"},children:[o.jsx("strong",{children:"Time Range Compacted:"})," ",new Date(e.data.start_timestamp*1e3).toLocaleTimeString()," - ",new Date(e.data.end_timestamp*1e3).toLocaleTimeString()]}),((F=e.data)==null?void 0:F.summary_preview)&&o.jsxs("div",{children:[o.jsx("strong",{children:"Summary Preview:"}),o.jsx("pre",{style:{marginTop:"8px",padding:"12px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"11px",overflow:"auto",maxHeight:"300px",whiteSpace:"pre-wrap",wordBreak:"break-word",border:"1px solid #27272a"},children:e.data.summary_preview})]})]})]}),r&&o.jsx(GA,{content:r,onClose:()=>i(null)})]})}function GA({content:e,onClose:t}){return o.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.8)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2e3},onClick:t,children:o.jsxs("div",{style:{backgroundColor:"#1a1a1e",borderRadius:"8px",border:"1px solid #3f3f46",width:"90%",maxWidth:"1200px",height:"85%",display:"flex",flexDirection:"column",overflow:"hidden"},onClick:n=>n.stopPropagation(),children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx(Xr,{size:16}),o.jsx("span",{style:{fontWeight:600},children:"String Content"}),o.jsxs("span",{style:{color:"#71717a",fontSize:"12px"},children:["(",e.length," chars)"]})]}),o.jsx("button",{onClick:t,style:{background:"none",border:"none",color:"#a1a1aa",cursor:"pointer",padding:"4px",display:"flex",alignItems:"center"},children:o.jsx(uo,{size:18})})]}),o.jsx("div",{style:{flex:1,overflow:"auto",padding:"20px"},children:o.jsx("pre",{style:{fontSize:"12px",lineHeight:"1.5",color:"#e4e4e7",whiteSpace:"pre-wrap",wordBreak:"break-word",fontFamily:'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',margin:0},children:e})}),o.jsx("div",{style:{padding:"8px 16px",borderTop:"1px solid #3f3f46",backgroundColor:"#27272a",display:"flex",justifyContent:"flex-end",gap:"8px"},children:o.jsxs("button",{onClick:()=>navigator.clipboard.writeText(e),style:{background:"#3f3f46",border:"none",borderRadius:"4px",padding:"6px 12px",color:"#e4e4e7",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",fontSize:"12px"},children:[o.jsx(ii,{size:12}),"Copy"]})})]})})}function KA({title:e,versions:t,initialVersionIndex:n,onClose:r}){const[i,s]=w.useState(n);w.useEffect(()=>{const p=f=>{f.key==="ArrowUp"||f.key==="ArrowLeft"?(f.preventDefault(),s(h=>Math.max(0,h-1))):f.key==="ArrowDown"||f.key==="ArrowRight"?(f.preventDefault(),s(h=>Math.min(t.length-1,h+1))):f.key==="Escape"&&r()};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[t.length,r]);const[a,l]=w.useState(!1),c=t[i],u=typeof c.value=="string"?c.value:JSON.stringify(c.value,null,2),d=async()=>{try{await navigator.clipboard.writeText(u),l(!0),setTimeout(()=>l(!1),2e3)}catch(p){console.error("Failed to copy:",p)}};return Yp.createPortal(o.jsxs("div",{className:"modal-overlay",onClick:r,children:[o.jsxs("div",{className:"modal-content",onClick:p=>p.stopPropagation(),children:[o.jsxs("div",{className:"modal-header",children:[o.jsx("h3",{children:e}),t.length>1&&o.jsxs("div",{className:"version-nav",children:[o.jsx("button",{className:"version-btn",onClick:()=>s(p=>Math.max(0,p-1)),disabled:i===0,title:"Previous version (↑)",children:"▲"}),o.jsxs("span",{className:"version-info",children:["v",i+1,"/",t.length,o.jsxs("span",{className:"version-event",children:[" (event #",c.eventIndex,")"]})]}),o.jsx("button",{className:"version-btn",onClick:()=>s(p=>Math.min(t.length-1,p+1)),disabled:i===t.length-1,title:"Next version (↓)",children:"▼"})]}),o.jsxs("button",{className:"modal-copy-btn",onClick:d,title:"Copy to clipboard",children:[a?o.jsx(jn,{size:16}):o.jsx(ii,{size:16}),a?"Copied!":"Copy"]}),o.jsx("button",{className:"modal-close",onClick:r,children:"×"})]}),o.jsx("div",{className:"modal-body markdown-content",children:o.jsx(rb,{children:u})}),t.length>1&&o.jsx("div",{className:"modal-footer",children:o.jsxs("span",{className:"version-hint",children:["Use ↑↓ arrow keys to navigate versions • Set at ",new Date(c.timestamp*1e3).toLocaleTimeString()]})})]}),o.jsx("style",{children:`
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
          background: var(--bg-primary, #1a1a1f);
          border-radius: var(--radius-lg, 12px);
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
          border-bottom: 1px solid var(--border-color, #333);
        }
        .modal-header h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary, #fff);
        }
        .modal-close {
          background: none;
          border: none;
          font-size: 24px;
          color: var(--text-secondary, #888);
          cursor: pointer;
          padding: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm, 4px);
        }
        .modal-close:hover {
          background: var(--bg-hover, #333);
          color: var(--text-primary, #fff);
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
          color: var(--text-primary, #fff);
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
          background: var(--bg-tertiary, #2a2a2f);
          padding: 2px 6px;
          border-radius: var(--radius-sm, 4px);
          font-family: var(--font-mono, monospace);
          font-size: 0.9em;
        }
        .markdown-content pre {
          background: var(--bg-tertiary, #2a2a2f);
          padding: 12px;
          border-radius: var(--radius-md, 8px);
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
          border-left: 3px solid var(--accent-primary, #3b82f6);
          padding-left: 1em;
          margin: 1em 0;
          color: var(--text-secondary, #888);
        }
        .markdown-content strong {
          font-weight: 700;
          color: var(--text-primary, #fff);
        }
        .markdown-content em {
          font-style: italic;
          color: var(--text-secondary, #888);
        }
        .markdown-content a {
          color: var(--accent-primary, #3b82f6);
          text-decoration: underline;
        }
        .markdown-content li {
          margin: 0.25em 0;
        }
        .version-nav {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-right: auto;
          margin-left: 16px;
        }
        .version-btn {
          background: var(--bg-tertiary, #2a2a2f);
          border: 1px solid var(--border-color, #333);
          color: var(--text-secondary, #888);
          cursor: pointer;
          padding: 4px 8px;
          border-radius: var(--radius-sm, 4px);
          font-size: 12px;
        }
        .version-btn:hover:not(:disabled) {
          background: var(--bg-hover, #333);
          color: var(--text-primary, #fff);
        }
        .version-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .version-info {
          font-size: 12px;
          color: var(--text-secondary, #888);
          font-weight: 500;
        }
        .version-event {
          color: var(--text-muted, #666);
          font-weight: normal;
        }
        .modal-footer {
          padding: 8px 20px;
          border-top: 1px solid var(--border-color, #333);
          background: var(--bg-secondary, #222);
        }
        .version-hint {
          font-size: 11px;
          color: var(--text-muted, #666);
        }
        .modal-copy-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: var(--bg-tertiary, #2a2a2f);
          border: 1px solid var(--border-color, #333);
          color: var(--text-secondary, #888);
          cursor: pointer;
          padding: 6px 12px;
          border-radius: var(--radius-sm, 4px);
          font-size: 12px;
          margin-left: auto;
        }
        .modal-copy-btn:hover {
          background: var(--bg-hover, #333);
          color: var(--text-primary, #fff);
        }
      `})]}),document.body)}function QA({events:e,selectedEventIndex:t,project:n}){const[r,i]=w.useState(null),{state:s,stateVersions:a}=w.useMemo(()=>{var f;const u={},d={};return(f=n==null?void 0:n.app)!=null&&f.state_keys&&n.app.state_keys.forEach(h=>{u[h.name]={value:void 0,timestamp:null,defined:!0,description:h.description,type:h.type},d[h.name]=[]}),n!=null&&n.agents&&n.agents.forEach(h=>{if(h.type==="LlmAgent"&&h.output_key){const m=h.output_key;u[m]||(u[m]={value:void 0,timestamp:null,defined:!0,description:`Output from ${h.name}`,type:"string"},d[m]=[])}}),e.filter(h=>h.event_type==="state_change").forEach((h,m)=>{var b;if((b=h.data)!=null&&b.state_delta){const k=e.indexOf(h);Object.entries(h.data.state_delta).forEach(([x,y])=>{d[x]||(d[x]=[]),d[x].push({value:y,eventIndex:k,timestamp:h.timestamp})})}}),(t!==null?e.slice(0,t+1):e).filter(h=>h.event_type==="state_change").forEach(h=>{var m;(m=h.data)!=null&&m.state_delta&&Object.entries(h.data.state_delta).forEach(([b,k])=>{var x;u[b]={...u[b],value:k,timestamp:h.timestamp,defined:((x=u[b])==null?void 0:x.defined)??!1}})}),{state:u,stateVersions:d}},[e,t,n]),l=u=>{const d=a[u]||[];if(d.length===0)return 0;if(t===null)return d.length-1;let p=0;for(let f=0;f<d.length&&d[f].eventIndex<=t;f++)p=f;return p},c=Object.entries(s);return o.jsxs(o.Fragment,{children:[r&&o.jsx(KA,{title:r.key,versions:r.versions,initialVersionIndex:r.initialVersionIndex,onClose:()=>i(null)}),o.jsxs("div",{className:"state-snapshot",children:[o.jsx("style",{children:`
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
        .state-version-count {
          font-size: 10px;
          color: #666;
          margin-left: 4px;
        }
        .state-desc {
          font-size: 11px;
          color: #666;
          margin-top: 2px;
        }
        .state-value-row {
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }
        .state-value-row .state-value {
          flex: 1;
        }
        .state-copy-btn {
          flex-shrink: 0;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          cursor: pointer;
          padding: 4px 8px;
          border-radius: var(--radius-sm);
          font-size: 10px;
          display: flex;
          align-items: center;
          gap: 4px;
          opacity: 0.6;
          transition: opacity 0.15s;
        }
        .state-entry:hover .state-copy-btn {
          opacity: 1;
        }
        .state-copy-btn:hover {
          background: var(--bg-hover);
          color: var(--text-primary);
        }
      `}),o.jsx("div",{className:"state-header",children:t!==null?`State after event #${t}`:e.length>0?"State at end of run":"Defined State Keys"}),c.length===0?o.jsx("div",{className:"state-empty",children:"No state keys defined"}):c.map(([u,{value:d,timestamp:p,defined:f,description:h,type:m}])=>{const b=a[u]||[],k=d===void 0?"(not set)":typeof d=="string"?d:JSON.stringify(d,null,2);return o.jsxs("div",{className:`state-entry ${d===void 0?"unset":""}`,children:[o.jsxs("div",{className:"state-key",children:[u,m&&o.jsxs("span",{className:"state-type",children:["(",m,")"]}),b.length>1&&o.jsxs("span",{className:"state-version-count",title:"Number of versions",children:["[",b.length," versions]"]})]}),o.jsxs("div",{className:"state-value-row",children:[o.jsx("div",{className:"state-value",onClick:()=>{d!==void 0&&b.length>0&&i({key:u,versions:b,initialVersionIndex:l(u)})},style:{cursor:d!==void 0?"pointer":"default"},title:d!==void 0?b.length>1?`Click to view (${b.length} versions, use ↑↓ to navigate)`:"Click to view in markdown viewer":void 0,children:k}),d!==void 0&&o.jsx(XA,{value:k})]}),h&&o.jsx("div",{className:"state-desc",children:h}),p&&o.jsx("div",{className:"state-time",children:new Date(p*1e3).toLocaleTimeString()})]},u)})]})]})}function XA({value:e}){const[t,n]=w.useState(!1),r=async i=>{i.stopPropagation();try{await navigator.clipboard.writeText(e),n(!0),setTimeout(()=>n(!1),1500)}catch(s){console.error("Failed to copy:",s)}};return o.jsx("button",{className:"state-copy-btn",onClick:r,title:"Copy to clipboard",children:t?o.jsx(jn,{size:12}):o.jsx(ii,{size:12})})}function ZA({project:e,sessionId:t}){const[n,r]=w.useState([]),[i,s]=w.useState(!1),[a,l]=w.useState(null),[c,u]=w.useState(null),[d,p]=w.useState(null);w.useEffect(()=>{if(!(e!=null&&e.id)||!t){r([]);return}(async()=>{s(!0),l(null);try{const k=await $0(e.id,t);r(k)}catch(k){l(k.message||"Failed to load artifacts"),r([])}finally{s(!1)}})()},[e==null?void 0:e.id,t]);const f=b=>b===null?"":b<1024?`${b} B`:b<1024*1024?`${(b/1024).toFixed(1)} KB`:`${(b/(1024*1024)).toFixed(1)} MB`,h=b=>{if(!(e!=null&&e.id)||!t)return;const k=Da(e.id,t,b),x=document.createElement("a");x.href=k,x.download=b,document.body.appendChild(x),x.click(),document.body.removeChild(x)},m=b=>{if(!(!(e!=null&&e.id)||!t)&&b.is_image){const k=Da(e.id,t,b.filename);p(k)}};return o.jsxs(o.Fragment,{children:[d&&o.jsx("div",{className:"artifact-image-modal",onClick:()=>p(null),style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e4,cursor:"pointer"},children:o.jsxs("div",{onClick:b=>b.stopPropagation(),style:{maxWidth:"90vw",maxHeight:"90vh",position:"relative"},children:[o.jsx("button",{onClick:()=>p(null),style:{position:"absolute",top:-40,right:0,background:"transparent",border:"none",color:"#fff",cursor:"pointer",padding:8},children:o.jsx(uo,{size:24})}),o.jsx("img",{src:d,alt:"Artifact preview",style:{maxWidth:"90vw",maxHeight:"85vh",objectFit:"contain",borderRadius:8}})]})}),o.jsxs("div",{className:"artifacts-panel",children:[o.jsx("style",{children:`
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
        `}),o.jsx("div",{className:"artifacts-header",children:t?"Session Artifacts":"No Session Selected"}),i?o.jsxs("div",{className:"artifacts-loading",children:[o.jsx($t,{size:16,className:"spin",style:{marginBottom:8}}),o.jsx("div",{children:"Loading artifacts..."})]}):a?o.jsx("div",{className:"artifacts-error",children:a}):t?n.length===0?o.jsxs("div",{className:"artifacts-empty",children:[o.jsx(vl,{size:24,style:{marginBottom:8,opacity:.5}}),o.jsx("div",{children:"No artifacts in this session"}),o.jsx("div",{style:{fontSize:10,marginTop:4,color:"#52525b"},children:"Use tool_context.save_artifact() to save artifacts"})]}):n.map(b=>o.jsxs("div",{className:"artifact-item",children:[o.jsx("div",{className:`artifact-icon ${b.is_image?"image":""}`,children:b.is_image?o.jsx(Tj,{size:16}):o.jsx(Nj,{size:16})}),o.jsxs("div",{className:"artifact-info",children:[o.jsx("div",{className:"artifact-name",title:b.filename,children:b.filename}),o.jsxs("div",{className:"artifact-meta",children:[b.mime_type||"unknown type",b.size!==null&&` • ${f(b.size)}`]})]}),o.jsxs("div",{className:"artifact-actions",children:[b.is_image&&o.jsx("button",{className:"artifact-btn",title:"Preview",onClick:()=>m(b),children:o.jsx(Xr,{size:14})}),o.jsx("button",{className:"artifact-btn",title:"Download",onClick:()=>h(b.filename),children:o.jsx(co,{size:14})})]}),b.is_image&&c===b.filename&&(e==null?void 0:e.id)&&t&&o.jsx("div",{className:"artifact-preview",children:o.jsx("img",{src:Da(e.id,t,b.filename),alt:b.filename})})]},b.filename)):o.jsxs("div",{className:"artifacts-empty",children:[o.jsx(vl,{size:24,style:{marginBottom:8,opacity:.5}}),o.jsx("div",{children:"Start a session to see artifacts"})]})]})]})}function Su(e){if(!e)return{text:"",isError:!1};if(e.success===!1)return{text:e.error||"Unknown error",isError:!0};let t=e.result||e;if(typeof t=="string")try{const n=t.replace(/'/g,'"').replace(/True/g,"true").replace(/False/g,"false").replace(/None/g,"null");t=JSON.parse(n)}catch{return{text:t,isError:!1}}return t.content&&Array.isArray(t.content)?{text:t.content.filter(r=>r.type==="text").map(r=>r.text).join(`
`),isError:t.isError===!0}:{text:typeof t=="string"?t:JSON.stringify(t,null,2),isError:!1}}function ny(e,t){if(!t||!t.trim())return e;const n=t.trim();let r=e;try{r=JSON.parse(e)}catch{}if(n.startsWith("js:")){const i=n.slice(3).trim();try{const a=new Function("value","data",`return ${i}`)(e,r);return typeof a=="string"?a:JSON.stringify(a,null,2)}catch(s){return`[JS error: ${s}]`}}if(n.startsWith("."))try{const i=n.slice(1).split(".").filter(Boolean);let s=r;for(const a of i){const l=a.match(/^(\w+)?\[(\d+)\]$/);l?(l[1]&&(s=s[l[1]]),s=s[parseInt(l[2])]):s=s[a]}return s==null?"[No match]":typeof s=="string"?s:JSON.stringify(s,null,2)}catch(i){return`[Path error: ${i.message}]`}try{const s=new Function("value","data",`return ${n}`)(e,r);return typeof s=="string"?s:JSON.stringify(s,null,2)}catch(i){return`[Transform error: ${i.message}]`}}function eL({project:e,selectedEventIndex:t,sandboxMode:n}){var ue,_e;const{watches:r,updateWatch:i,addWatch:s,removeWatch:a,runEvents:l}=St(),[c,u]=w.useState(!1),[d,p]=w.useState(null),[f,h]=w.useState({}),[m,b]=w.useState(new Set),[k,x]=w.useState(""),[y,v]=w.useState(""),[j,T]=w.useState({}),[_,A]=w.useState(""),[E,W]=w.useState([]),[C,R]=w.useState(null),[H,Q]=w.useState(null),[M,F]=w.useState(!1);w.useEffect(()=>{Zp().then(W).catch(console.error)},[]);const O=w.useMemo(()=>{const Y=e.mcp_servers||[],re=new Set(Y.map(ee=>ee.name)),le=E.filter(ee=>!re.has(ee.name));return[...Y,...le]},[e.mcp_servers,E]),L=w.useCallback(async Y=>{if(!(f[Y]||m.has(Y))){b(re=>new Set([...re,Y]));try{const re=await Me(`/projects/${e.id}/mcp-servers/${encodeURIComponent(Y)}/test-connection`,{method:"POST"});re.success&&h(le=>({...le,[Y]:re.tools}))}catch(re){console.error("Failed to load tools:",re)}finally{b(re=>{const le=new Set(re);return le.delete(Y),le})}}},[e.id,f,m]);w.useEffect(()=>{var ee;if(d)return;if(!k||!y){T({});return}const re=(f[k]||[]).find(fe=>fe.name===y);if(!((ee=re==null?void 0:re.parameters)!=null&&ee.properties)){T({});return}const le={};Object.entries(re.parameters.properties).forEach(([fe,ye])=>{ye.type==="string"?le[fe]=ye.default||"":ye.type==="number"||ye.type==="integer"?le[fe]=ye.default||0:ye.type==="boolean"?le[fe]=ye.default||!1:le[fe]=ye.default||null}),T(le)},[k,y,f,d]);const B=()=>{p(null),x(""),v(""),T({}),A(""),R(null),Q(null),u(!0)},$=Y=>{if(p(Y.id),x(Y.serverName),v(Y.toolName),T({...Y.args}),A(Y.transform||""),Y.result){const{text:re}=Su(Y.result);R(re),Q(null)}else R(null),Q(null);f[Y.serverName]||L(Y.serverName),u(!0)},g=async()=>{var re;if(!k||!y)return;F(!0),Q(null);const Y=((re=e.app)==null?void 0:re.id)||`app_${e.id}`;try{const le=await Me(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:k,tool_name:y,arguments:j,sandbox_mode:n,app_id:n?Y:void 0})}),{text:ee,isError:fe}=Su(le);fe?(Q(ee),R(null)):(R(ee),Q(null))}catch(le){Q(String(le)),R(null)}finally{F(!1)}},P=w.useMemo(()=>C?!_||!_.trim()?C:ny(C,_):null,[C,_]),z=()=>{if(!(!k||!y)){if(d){i(d,{serverName:k,toolName:y,args:{...j},transform:_||void 0});const Y=r.find(re=>re.id===d);Y&&D({...Y,serverName:k,toolName:y,args:j,transform:_||void 0,history:Y.history||[]})}else{const Y={id:`watch-${Date.now()}`,serverName:k,toolName:y,args:{...j},transform:_||void 0,history:[]};s(Y),D(Y)}u(!1)}},S=Y=>{a(Y)},D=w.useCallback(async(Y,re)=>{var ye;i(Y.id,{isLoading:!0,error:void 0});const le=re??l.length-1,ee=Date.now(),fe=((ye=e.app)==null?void 0:ye.id)||`app_${e.id}`;try{const X=await Me(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:Y.serverName,tool_name:Y.toolName,arguments:Y.args,sandbox_mode:n,app_id:n?fe:void 0})}),he={eventIndex:le,timestamp:ee,result:X},we=[...Y.history||[],he];i(Y.id,{result:X,isLoading:!1,lastRun:ee,history:we})}catch(X){const he={eventIndex:le,timestamp:ee,error:String(X)},we=[...Y.history||[],he];i(Y.id,{error:String(X),isLoading:!1,lastRun:ee,history:we})}},[e.id,(ue=e.app)==null?void 0:ue.id,i,l.length,n]),Z=()=>{r.forEach(Y=>D(Y))},ne=w.useMemo(()=>!k||!y?null:(f[k]||[]).find(re=>re.name===y),[k,y,f]);return o.jsxs("div",{className:"tool-watch-panel",children:[o.jsxs("div",{className:"watch-header",children:[o.jsx(Xr,{size:14}),o.jsx("span",{children:"Tool Watch"}),o.jsx("span",{className:"watch-auto-badge",title:"Watches auto-refresh on every event",children:"⚡ Auto"}),o.jsxs("div",{className:"watch-actions",children:[o.jsx("button",{className:"watch-btn",onClick:Z,title:"Refresh all",children:o.jsx($t,{size:12})}),o.jsx("button",{className:"watch-btn",onClick:B,title:"Add watch",children:o.jsx(it,{size:12})})]})]}),r.length===0?o.jsxs("div",{className:"watch-empty",children:[o.jsx(Xr,{size:20,style:{opacity:.3}}),o.jsx("span",{children:"No watch expressions"}),o.jsxs("button",{className:"add-watch-btn",onClick:B,children:[o.jsx(it,{size:12})," Add Tool Watch"]})]}):o.jsx("div",{className:"watch-list",children:r.map(Y=>{let re=Y.result,le=Y.error;if(t!==null&&Y.history&&Y.history.length>0){const he=Y.history.filter(we=>we.eventIndex<=t);if(he.length>0){const we=he[he.length-1];re=we.result,le=we.error}else re=void 0,le=void 0}const{text:ee,isError:fe}=re?Su(re):{text:"",isError:!1},ye=re?ny(ee,Y.transform):"",X=le||fe;return o.jsxs("div",{className:`watch-item ${X?"error":""}`,children:[o.jsxs("div",{className:"watch-item-header",children:[o.jsxs("span",{className:"watch-expr",children:[o.jsx("span",{className:"watch-server",children:Y.serverName}),o.jsx("span",{className:"watch-tool",children:Y.toolName}),Object.keys(Y.args).length>0&&o.jsxs("span",{className:"watch-args",children:["(",Object.entries(Y.args).map(([he,we])=>`${he}=${JSON.stringify(we)}`).join(", "),")"]}),t!==null&&o.jsxs("span",{className:"watch-time-indicator",children:["@",t]})]}),o.jsxs("div",{className:"watch-item-actions",children:[o.jsx("button",{onClick:()=>$(Y),title:"Edit watch",children:o.jsx(kn,{size:10})}),o.jsx("button",{onClick:()=>D(Y),title:"Refresh",children:Y.isLoading?o.jsx($t,{size:10,className:"spin"}):o.jsx($t,{size:10})}),o.jsx("button",{onClick:()=>S(Y.id),title:"Remove",children:o.jsx(Je,{size:10})})]})]}),o.jsx("div",{className:"watch-result",children:Y.isLoading?o.jsx("span",{className:"loading",children:"Loading..."}):le?o.jsx("span",{className:"error",children:le}):re?o.jsx("pre",{className:fe?"error-text":"",children:ye}):o.jsx("span",{className:"no-result",children:t!==null?"No data at this event":"Not yet run"})})]},Y.id)})}),c&&o.jsx("div",{className:"watch-dialog-overlay",onClick:()=>u(!1),children:o.jsxs("div",{className:"watch-dialog",onClick:Y=>Y.stopPropagation(),children:[o.jsxs("div",{className:"dialog-header",children:[o.jsx("span",{children:d?"Edit Watch":"Add Tool Watch"}),o.jsx("button",{onClick:()=>u(!1),children:o.jsx(uo,{size:14})})]}),o.jsxs("div",{className:"dialog-body",children:[o.jsxs("div",{className:"form-row",children:[o.jsx("label",{children:"MCP Server"}),o.jsxs("select",{value:k,onChange:Y=>{x(Y.target.value),d||v(""),Y.target.value&&L(Y.target.value)},children:[o.jsx("option",{value:"",children:"Select server..."}),O.map(Y=>o.jsx("option",{value:Y.name,children:Y.name},Y.name))]})]}),o.jsxs("div",{className:"form-row",children:[o.jsx("label",{children:"Tool"}),o.jsxs("select",{value:y,onChange:Y=>v(Y.target.value),disabled:!k||m.has(k),children:[o.jsx("option",{value:"",children:m.has(k)?"Loading tools...":"Select tool..."}),(f[k]||[]).map(Y=>o.jsx("option",{value:Y.name,children:Y.name},Y.name))]})]}),(ne==null?void 0:ne.description)&&o.jsx("div",{className:"tool-desc",children:ne.description}),((_e=ne==null?void 0:ne.parameters)==null?void 0:_e.properties)&&Object.keys(ne.parameters.properties).length>0&&o.jsxs("div",{className:"tool-args",children:[o.jsx("label",{children:"Arguments"}),Object.entries(ne.parameters.properties).map(([Y,re])=>{var le,ee;return o.jsxs("div",{className:"arg-row",children:[o.jsxs("span",{className:"arg-name",children:[Y,((le=ne.parameters.required)==null?void 0:le.includes(Y))&&o.jsx("span",{className:"required",children:"*"})]}),o.jsx("input",{type:re.type==="number"||re.type==="integer"?"number":"text",value:typeof j[Y]=="object"?JSON.stringify(j[Y]):j[Y]??"",onChange:fe=>T(ye=>({...ye,[Y]:fe.target.value})),placeholder:((ee=re.description)==null?void 0:ee.slice(0,40))||Y})]},Y)})]}),k&&y&&o.jsxs("div",{className:"test-section",children:[o.jsxs("div",{className:"test-header",children:[o.jsx("label",{children:"Test & Preview"}),o.jsxs("button",{className:"test-btn",onClick:g,disabled:M,children:[M?o.jsx($t,{size:12,className:"spin"}):o.jsx(Cr,{size:12}),M?"Running...":"Test Run"]})]}),H&&o.jsxs("div",{className:"test-result error",children:[o.jsx("span",{className:"test-label",children:"Error:"}),o.jsx("pre",{children:H})]}),C&&o.jsxs("div",{className:"test-result",children:[o.jsx("span",{className:"test-label",children:"Raw Result:"}),o.jsx("pre",{children:C})]})]}),o.jsxs("div",{className:"form-row transform-row",children:[o.jsx("label",{children:"Transform (optional)"}),o.jsx("input",{type:"text",value:_,onChange:Y=>A(Y.target.value),placeholder:"e.g., .items[0].name or .content[].text"}),o.jsxs("div",{className:"transform-hints",children:[o.jsx("span",{className:"hint-title",children:"Path:"}),o.jsx("code",{onClick:()=>A(".items[0].name"),children:".items[0].name"}),o.jsx("code",{onClick:()=>A(".content[0].text"),children:".content[0].text"}),o.jsx("code",{onClick:()=>A(".result.data"),children:".result.data"}),o.jsx("span",{className:"hint-title",children:"JS:"}),o.jsx("code",{onClick:()=>A("js:value.split('\\n')[0]"),children:"js:value.split('\\n')[0]"}),o.jsx("code",{onClick:()=>A("js:data.items?.length"),children:"js:data.items?.length"})]})]}),C&&_&&o.jsxs("div",{className:"transform-preview",children:[o.jsx("span",{className:"test-label",children:"Transform Preview:"}),o.jsx("pre",{className:P!=null&&P.startsWith("[Transform error")?"error":"",children:P})]})]}),o.jsxs("div",{className:"dialog-footer",children:[o.jsx("button",{className:"cancel-btn",onClick:()=>u(!1),children:"Cancel"}),o.jsx("button",{className:"add-btn",onClick:z,disabled:!k||!y,children:d?"Save Changes":"Add Watch"})]})]})})]})}function Ca({data:e,color:t,label:n,currentValue:r,unit:i="%",height:s=80}){const a=w.useRef(null),l=w.useRef(null),[c,u]=w.useState({width:200,height:s});return w.useEffect(()=>{if(!l.current)return;const d=new ResizeObserver(p=>{for(const f of p)u({width:f.contentRect.width,height:s})});return d.observe(l.current),()=>d.disconnect()},[s]),w.useEffect(()=>{if(!a.current||e.length<2)return;const d=_t(a.current);d.selectAll("*").remove();const p={top:8,right:8,bottom:4,left:8},f=c.width-p.left-p.right,h=c.height-p.top-p.bottom;if(f<=0||h<=0)return;const m=d.append("g").attr("transform",`translate(${p.left},${p.top})`),b=LA().domain(FT(e,_=>_.timestamp)).range([0,f]),k=Hb().domain([0,100]).range([h,0]),x=`gradient-${n.replace(/[^a-zA-Z0-9]/g,"-")}`,v=d.append("defs").append("linearGradient").attr("id",x).attr("x1","0%").attr("y1","0%").attr("x2","0%").attr("y2","100%");v.append("stop").attr("offset","0%").attr("stop-color",t).attr("stop-opacity",.3),v.append("stop").attr("offset","100%").attr("stop-color",t).attr("stop-opacity",.05);const j=PA().x(_=>b(_.timestamp)).y0(h).y1(_=>k(_.value)).curve(Yx),T=iw().x(_=>b(_.timestamp)).y(_=>k(_.value)).curve(Yx);if(m.append("path").datum(e).attr("fill",`url(#${x})`).attr("d",j),m.append("path").datum(e).attr("fill","none").attr("stroke",t).attr("stroke-width",2).attr("d",T),e.length>0){const _=e[e.length-1];m.append("circle").attr("cx",b(_.timestamp)).attr("cy",k(_.value)).attr("r",4).attr("fill",t).attr("stroke","#18181b").attr("stroke-width",2)}},[e,c,t,n]),o.jsxs("div",{ref:l,className:"metrics-chart-container",children:[o.jsxs("div",{className:"metrics-chart-header",children:[o.jsx("span",{className:"metrics-chart-label",children:n}),o.jsxs("span",{className:"metrics-chart-value",style:{color:t},children:[r.toFixed(1),i]})]}),o.jsx("svg",{ref:a,width:c.width,height:c.height,style:{display:"block"}})]})}function tL(){var rh,ih,oh,sh,ah,lh,ch;const{project:e,updateProject:t,isRunning:n,setIsRunning:r,runEvents:i,addRunEvent:s,clearRunEvents:a,clearWatchHistories:l,runAgentId:c,setRunAgentId:u,watches:d,updateWatch:p,currentSessionId:f,setCurrentSessionId:h}=St(),[m,b]=w.useState(""),[k,x]=w.useState(null),[y,v]=w.useState(null),[j,T]=w.useState(null),[_,A]=w.useState(""),[E,W]=w.useState(new Set(["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_start","callback_end","callback_error"])),[C,R]=w.useState(()=>{const V=localStorage.getItem("sandboxMode");return V!==null?V==="true":!0});w.useEffect(()=>{localStorage.setItem("sandboxMode",String(C))},[C]);const[H,Q]=w.useState(null),[M,F]=w.useState(!1),[O,L]=w.useState({}),[B,$]=w.useState(!1),[g,P]=w.useState("agent"),z=w.useRef(null),S=w.useRef(!0),D=w.useRef(0),[Z,ne]=w.useState(!0),[ue,_e]=w.useState(!0),[Y,re]=w.useState(!1),[le,ee]=w.useState(!1),[fe,ye]=w.useState(360),[X,he]=w.useState(!1),[we,G]=w.useState(!1),[ie,q]=w.useState(!1),[I,N]=w.useState(!1),[U,J]=w.useState(null),[se,K]=w.useState([]),[te,ve]=w.useState(null),Se=w.useRef(null),Ee=60,De=w.useMemo(()=>{if(!e)return!1;const V=ae=>{if(!ae)return!1;const me=ae.toLowerCase();return me.includes("localhost")||me.includes("127.0.0.1")||me.includes("0.0.0.0")||me.includes("host.docker.internal")},oe=(ae,me)=>!!(V(me)||ae==="litellm"&&!me);for(const ae of e.app.models||[])if(oe(ae.provider,ae.api_base))return!0;for(const ae of e.agents||[])if(ae.type==="LlmAgent"&&ae.model&&oe(ae.model.provider,ae.model.api_base))return!0;return!1},[e]);w.useEffect(()=>{!De&&I&&N(!1)},[De,I]);const ht=w.useMemo(()=>n?"running":i.length===0?"idle":ie?"cancelled":i.slice(-5).some(ae=>{var xe,Ae,Pe,vt,qt;if(!ae||!ae.event_type)return!1;if((xe=ae.data)!=null&&xe.error||ae.event_type==="callback_error"||ae.event_type==="agent_end"&&((Ae=ae.data)!=null&&Ae.error)||ty(ae).includes("[ERROR]"))return!0;if(ae.event_type==="model_response"){const $n=(((vt=(Pe=ae.data)==null?void 0:Pe.response_content)==null?void 0:vt.parts)||((qt=ae.data)==null?void 0:qt.parts)||[]).find(di=>(di==null?void 0:di.type)==="text");if($n!=null&&$n.text&&($n.text.includes("[ERROR]")||$n.text.toLowerCase().includes("error:")||$n.text.toLowerCase().includes("exception:")))return!0}return!1})?"failed":"completed",[n,i,ie]),[et,be]=w.useState(!1),[ze,pe]=w.useState([]),Ne=w.useRef(null);w.useEffect(()=>{if(!e)return;const V=`promptHistory_${e.id}`,oe=localStorage.getItem(V);if(oe)try{const ae=JSON.parse(oe),me=Object.entries(ae).map(([xe,Ae])=>({prompt:xe,count:Ae})).sort((xe,Ae)=>Ae.count-xe.count);pe(me)}catch(ae){console.error("Failed to parse prompt history:",ae)}else pe([])},[e==null?void 0:e.id]);const ge=w.useCallback(V=>{const oe=V.trim();if(!oe||!e)return;const ae=`promptHistory_${e.id}`,me=localStorage.getItem(ae),xe=me?JSON.parse(me):{};xe[oe]=(xe[oe]||0)+1,localStorage.setItem(ae,JSON.stringify(xe));const Ae=Object.entries(xe).map(([Pe,vt])=>({prompt:Pe,count:vt})).sort((Pe,vt)=>vt.count-Pe.count);pe(Ae)},[e]),Ie=w.useMemo(()=>{const V=m.toLowerCase().trim();return ze.filter(oe=>!V||oe.prompt.toLowerCase().includes(V)).slice(0,10)},[ze,m]),[ct,li]=w.useState([60,80,100,80,1]),[mt,Vf]=w.useState(null),qf=w.useRef(0),Yf=w.useRef(0),[ci,Hs]=w.useState([]),[sw,ui]=w.useState(null),[Vs,Jf]=w.useState(!1),Gf=w.useRef(0),Kf=w.useCallback(async(V,oe)=>{var Ae;if(!e)return;p(V.id,{isLoading:!0,error:void 0});const ae=oe??i.length-1,me=Date.now(),xe=((Ae=e.app)==null?void 0:Ae.id)||`app_${e.id}`;try{const Pe=await Me(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:V.serverName,tool_name:V.toolName,arguments:V.args,sandbox_mode:C,app_id:C?xe:void 0})}),vt={eventIndex:ae,timestamp:me,result:Pe},qt=[...V.history||[],vt];p(V.id,{result:Pe,isLoading:!1,lastRun:me,history:qt})}catch(Pe){const vt={eventIndex:ae,timestamp:me,error:String(Pe)},qt=[...V.history||[],vt];p(V.id,{error:String(Pe),isLoading:!1,lastRun:me,history:qt})}},[e==null?void 0:e.id,(rh=e==null?void 0:e.app)==null?void 0:rh.id,p,i.length,C]);w.useEffect(()=>{if(i.length>Gf.current&&d.length>0){const V=i.length-1;d.forEach(oe=>{oe.isLoading||Kf(oe,V)})}Gf.current=i.length},[i.length,d,Kf]),w.useEffect(()=>{c!==null&&(Qf(c),u(null))},[c,u]);const[ho,Qf]=w.useState(null),qs=w.useRef(null),yc=w.useRef(null);w.useEffect(()=>{if(!I){Se.current&&(clearInterval(Se.current),Se.current=null);return}const V=async()=>{try{const oe=await e1();J(oe),ve(null),K(ae=>{var Ae,Pe;const me={timestamp:Date.now(),cpu:oe.cpu.percent||0,memory:oe.memory.percent||0,gpu:((Ae=oe.gpu[0])==null?void 0:Ae.utilization_percent)??void 0,gpuMemory:((Pe=oe.gpu[0])==null?void 0:Pe.memory_percent)??void 0};return[...ae,me].slice(-Ee)})}catch(oe){ve(oe instanceof Error?oe.message:"Failed to fetch metrics")}};return V(),Se.current=setInterval(V,1e3),()=>{Se.current&&(clearInterval(Se.current),Se.current=null)}},[I]),w.useEffect(()=>{if(!X)return;const V=ae=>{if(!yc.current)return;const xe=yc.current.getBoundingClientRect().right-ae.clientX;ye(Math.min(600,Math.max(200,xe)))},oe=()=>{he(!1)};return document.addEventListener("mousemove",V),document.addEventListener("mouseup",oe),()=>{document.removeEventListener("mousemove",V),document.removeEventListener("mouseup",oe)}},[X]),w.useEffect(()=>{if(mt===null)return;const V=ae=>{const me=ae.clientX-qf.current,xe=Math.max(40,Yf.current+me);li(Ae=>{const Pe=[...Ae];return Pe[mt]=xe,Pe})},oe=()=>{Vf(null)};return document.addEventListener("mousemove",V),document.addEventListener("mouseup",oe),document.body.style.cursor="col-resize",document.body.style.userSelect="none",()=>{document.removeEventListener("mousemove",V),document.removeEventListener("mouseup",oe),document.body.style.cursor="",document.body.style.userSelect=""}},[mt]);const Ys=(V,oe)=>{oe.preventDefault(),qf.current=oe.clientX,Yf.current=ct[V],Vf(V)},Xf=ct.map((V,oe)=>oe===ct.length-1?`minmax(${V}px, 1fr)`:`${V}px`).join(" "),aw=w.useMemo(()=>i.length===0?{min:0,max:0}:{min:i[0].timestamp,max:i[i.length-1].timestamp},[i]),Vt=w.useMemo(()=>i.filter((V,oe)=>{var ae,me,xe;if(j&&(V.timestamp<j[0]||V.timestamp>j[1])||E.size>0&&!E.has(V.event_type))return!1;if(Z&&V.event_type==="model_response"){const Ae=((me=(ae=V.data)==null?void 0:ae.response_content)==null?void 0:me.parts)||((xe=V.data)==null?void 0:xe.parts)||[],Pe=Ae.some(qt=>qt.type==="function_call"),vt=Ae.some(qt=>qt.type==="text");if(!Pe&&!vt)return!1}return!(_&&!JSON.stringify(V).toLowerCase().includes(_.toLowerCase()))}),[i,j,E,_,Z]),Js=w.useMemo(()=>{var me;let V=0,oe=0;const ae=y!==null?y+1:i.length;for(let xe=0;xe<ae;xe++){const Ae=i[xe];Ae.event_type==="model_response"&&((me=Ae.data)!=null&&me.token_counts)&&(V+=Ae.data.token_counts.input||0,oe+=Ae.data.token_counts.output||0)}return{input:V,output:oe,total:V+oe}},[i,y]),Zf=y!==null?i[y]:null;w.useEffect(()=>{if(!e){Hs([]);return}(async()=>{Jf(!0);try{const oe=await _d(e.id);Hs(oe)}catch(oe){console.error("Failed to load sessions:",oe),Hs([])}finally{Jf(!1)}})()},[e]);const vc=w.useCallback(async V=>{if(!e){ui(null);return}if(!V){a(),l(),h(null),ui(null),v(null),T(null);return}try{const oe=await O0(e.id,V);a(),l(),h(oe.id),ui(V),v(null),T(null);for(const ae of oe.events)s(ae)}catch(oe){alert(`Failed to load session: ${oe.message||"Unknown error"}`)}},[e,a,l,h,s]);w.useEffect(()=>{if(!e||ci.length===0||Vs)return;const oe=new URLSearchParams(window.location.search).get("session");if(oe)if(ci.some(me=>me.id===oe)){vc(oe);const me=window.location.pathname;window.history.replaceState({},"",me)}else console.warn(`Session ${oe} not found in available sessions`)},[e,ci,Vs,vc]),w.useEffect(()=>{n&&qs.current&&(qs.current.scrollTop=qs.current.scrollHeight)},[i.length,n]);const mo=w.useCallback(V=>{const oe=V??m;if(!e||!oe.trim()||n)return;G(!0),ge(oe),be(!1),b(oe),k&&(k.close(),x(null)),a(),l(),ui(null),h(null),r(!0),q(!1),v(null),T(null);const ae=U0(e.id);x(ae),ae.onopen=()=>{ae.send(JSON.stringify({message:oe,agent_id:ho||void 0,sandbox_mode:C}))},ae.onmessage=me=>{var Ae;const xe=JSON.parse(me.data);if(xe.event_type==="agent_start"&&((Ae=xe.data)!=null&&Ae.session_id)){const Pe=xe.data.session_id;xe.data.session_reused,h(Pe),Pe&&ci.some(vt=>vt.id===Pe)&&ui(Pe)}else if(xe.type==="session_started")h(xe.session_id),xe.session_id&&ci.some(Pe=>Pe.id===xe.session_id)&&ui(xe.session_id);else if(xe.type==="sandbox_starting")s({timestamp:Date.now()/1e3,event_type:"agent_start",agent_name:"sandbox",data:{message:"Starting Docker sandbox..."}});else if(xe.type==="sandbox_started")s({timestamp:Date.now()/1e3,event_type:"agent_start",agent_name:"sandbox",data:{message:`Sandbox started (ID: ${xe.sandbox_id})`}});else if(xe.type==="sandbox_response")s({timestamp:Date.now()/1e3,event_type:"model_response",agent_name:"sandbox",data:xe.data});else if(xe.event_type==="approval_required"||xe.type==="network_request"&&xe.event_type==="approval_required"){const Pe={id:xe.id,method:xe.method||"GET",url:xe.url,host:xe.host,source:xe.source||"agent",headers:xe.headers||{},timeout:xe.timeout||30};Q(Pe),s({timestamp:Date.now()/1e3,event_type:"callback_start",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`⚠️ Network request to ${xe.host} requires approval`,host:xe.host,url:xe.url}})}else xe.type==="completed"?(r(!1),ae.close()):xe.type==="error"?(r(!1),s({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:xe.error}})):s(xe)},ae.onerror=me=>{console.error("WebSocket error:",me),r(!1),s({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:"Connection error. The server may have timed out or the LLM request failed. Try again or check if your model server is running.",retryable:!0}})},ae.onclose=me=>{n&&(r(!1),me.code!==1e3&&me.code!==1005&&s({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:`Connection closed unexpectedly (code: ${me.code}). This may be due to a timeout or server error. Try increasing the request timeout in your model configuration.`,retryable:!0}}))}},[e,m,n,k,a,l,r,s,ho,h,C,ge]),lw=w.useCallback(()=>{k==null||k.close(),r(!1),q(!0)},[k,r]),cw=w.useCallback(async(V,oe,ae)=>{var qt,wc,$n,di,uh,dh,ph,fh,hh,mh,gh,xh,yh,vh,bh,wh,kh,_h,jh,Sh,Ch,Nh,Eh,zh,Th,Mh;if(!H||!e)return;const me=((qt=e.app)==null?void 0:qt.id)||e.id,xe=V?"allow_pattern":"allow_once",Ae=V||H.host,Pe=oe||"exact",vt=ae?`/sandbox/${me}/approval?project_id=${e.id}`:`/sandbox/${me}/approval`;try{if(await Me(vt,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:H.id,action:xe,pattern:Ae,pattern_type:Pe,persist:ae||!1})}),ae&&xe==="allow_pattern"){const kc=((di=($n=(wc=e.app)==null?void 0:wc.sandbox)==null?void 0:$n.allowlist)==null?void 0:di.user)||[],kw={id:`pattern_${Date.now().toString(36)}`,pattern:Ae,pattern_type:Pe,source:"approved",added_at:new Date().toISOString()};t({app:{...e.app,sandbox:{...(uh=e.app)==null?void 0:uh.sandbox,enabled:((ph=(dh=e.app)==null?void 0:dh.sandbox)==null?void 0:ph.enabled)??!1,allow_all_network:((hh=(fh=e.app)==null?void 0:fh.sandbox)==null?void 0:hh.allow_all_network)??!1,allowlist:{auto:((xh=(gh=(mh=e.app)==null?void 0:mh.sandbox)==null?void 0:gh.allowlist)==null?void 0:xh.auto)||[],user:[...kc,kw]},unknown_action:((vh=(yh=e.app)==null?void 0:yh.sandbox)==null?void 0:vh.unknown_action)??"ask",approval_timeout:((wh=(bh=e.app)==null?void 0:bh.sandbox)==null?void 0:wh.approval_timeout)??30,agent_memory_limit_mb:((_h=(kh=e.app)==null?void 0:kh.sandbox)==null?void 0:_h.agent_memory_limit_mb)??512,agent_cpu_limit:((Sh=(jh=e.app)==null?void 0:jh.sandbox)==null?void 0:Sh.agent_cpu_limit)??1,mcp_memory_limit_mb:((Nh=(Ch=e.app)==null?void 0:Ch.sandbox)==null?void 0:Nh.mcp_memory_limit_mb)??256,mcp_cpu_limit:((zh=(Eh=e.app)==null?void 0:Eh.sandbox)==null?void 0:zh.mcp_cpu_limit)??.5,run_timeout:((Mh=(Th=e.app)==null?void 0:Th.sandbox)==null?void 0:Mh.run_timeout)??3600}}})}s({timestamp:Date.now()/1e3,event_type:"callback_end",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`✅ Approved: ${Ae}`,pattern:Ae,action:xe}})}catch(kc){console.error("Failed to approve:",kc)}Q(null)},[H,e,s,t]),uw=w.useCallback(async()=>{var oe;if(!H||!e)return;const V=((oe=e.app)==null?void 0:oe.id)||e.id;try{await Me(`/sandbox/${V}/approval`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:H.id,action:"deny"})}),s({timestamp:Date.now()/1e3,event_type:"callback_end",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`❌ Denied: ${H.host}`,host:H.host,action:"deny"}})}catch(ae){console.error("Failed to deny:",ae)}Q(null)},[H,e,s]),go=w.useCallback(async(V=!0)=>{var ae;if(!e)return;const oe=((ae=e.app)==null?void 0:ae.id)||`app_${e.id}`;V&&$(!0);try{const[me,xe]=await Promise.all([Me(`/sandbox/${oe}/logs?container=agent&tail=500`).catch(()=>null),Me(`/sandbox/${oe}/logs?container=gateway&tail=500`).catch(()=>null)]);L({agent:(me==null?void 0:me.logs)||(me==null?void 0:me.error)||"No logs available",gateway:(xe==null?void 0:xe.logs)||(xe==null?void 0:xe.error)||"No logs available"})}catch(me){console.error("Failed to fetch logs:",me),L({agent:`Error fetching logs: ${me}`,gateway:`Error fetching logs: ${me}`})}finally{V&&$(!1)}},[e]),dw=w.useCallback(()=>{F(!0),go()},[go]);w.useEffect(()=>{if(!M||!z.current||B)return;const V=z.current,oe=D.current,ae=V.scrollHeight;setTimeout(()=>{if(z.current){if(S.current)z.current.scrollTop=z.current.scrollHeight;else if(oe>0&&ae>oe){const me=ae-oe;z.current.scrollTop+=me}D.current=z.current.scrollHeight}},50)},[M,g,O,B]),w.useEffect(()=>{M&&(S.current=!0,D.current=0)},[M,g]);const pw=w.useCallback(()=>{if(!z.current)return;const V=z.current,ae=V.scrollHeight-V.scrollTop-V.clientHeight<50;S.current=ae},[]);w.useEffect(()=>{if(!M)return;const V=setInterval(()=>{go(!1)},3e3);return()=>clearInterval(V)},[M,go]),w.useEffect(()=>{const V=oe=>{if((oe.metaKey||oe.ctrlKey)&&oe.key==="Enter"){oe.preventDefault(),mo();return}if(oe.key==="ArrowDown"||oe.key==="ArrowUp"){if(oe.target instanceof HTMLInputElement||oe.target instanceof HTMLTextAreaElement||(oe.preventDefault(),Vt.length===0))return;if(oe.key==="ArrowDown")if(y===null){const ae=i.indexOf(Vt[0]);v(ae)}else{const ae=Vt.findIndex(me=>i.indexOf(me)===y);if(ae<Vt.length-1){const me=i.indexOf(Vt[ae+1]);v(me)}}else if(oe.key==="ArrowUp")if(y===null){const ae=i.indexOf(Vt[Vt.length-1]);v(ae)}else{const ae=Vt.findIndex(me=>i.indexOf(me)===y);if(ae>0){const me=i.indexOf(Vt[ae-1]);v(me)}}}};return window.addEventListener("keydown",V),()=>window.removeEventListener("keydown",V)},[mo,Vt,y,i]);const fw=w.useCallback(()=>{var xe;if(i.length===0)return;const V={version:1,exportedAt:new Date().toISOString(),projectId:e==null?void 0:e.id,projectName:e==null?void 0:e.name,agentId:ho||((xe=e==null?void 0:e.app)==null?void 0:xe.root_agent_id),events:i},oe=new Blob([JSON.stringify(V,null,2)],{type:"application/json"}),ae=URL.createObjectURL(oe),me=document.createElement("a");me.href=ae,me.download=`run-${(e==null?void 0:e.name)||"export"}-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,document.body.appendChild(me),me.click(),document.body.removeChild(me),URL.revokeObjectURL(ae)},[i,e,ho]),hw=w.useCallback(async()=>{if(!f||!e){alert("No active session to save");return}try{const V=await I0(f);if(V.success){alert(V.message||"Session saved to memory successfully");try{const oe=await _d(e.id);Hs(oe)}catch{}}else alert(`Failed to save to memory: ${V.error||"Unknown error"}`)}catch(V){alert(`Error saving to memory: ${V.message||"Unknown error"}`)}},[f,e]),[mw,Gs]=w.useState(!1),[gw,xw]=w.useState([]),[xo,eh]=w.useState(""),[bc,yw]=w.useState("Test Case from Session"),[th,nh]=w.useState(!1),vw=w.useCallback(async()=>{if(!f||!e){alert("No active session to create test case from");return}try{const V=await Me(`/projects/${e.id}/eval-sets`);if(xw(V.eval_sets||[]),!V.eval_sets||V.eval_sets.length===0){confirm(`No evaluation sets found. Would you like to create one first?

Go to the Evals tab to create an evaluation set.`)&&(window.location.href=`/project/${e.id}/evals`);return}eh(V.eval_sets[0].id),Gs(!0)}catch(V){alert(`Error loading eval sets: ${V.message||"Unknown error"}`)}},[f,e]),bw=w.useCallback(async()=>{if(!f||!e||!xo){alert("Please select an evaluation set");return}nh(!0);try{const V=await Me(`/projects/${e.id}/session-to-eval-case`,{method:"POST",body:JSON.stringify({session_id:f,eval_set_id:xo,case_name:bc})});Gs(!1),alert(`Test case "${V.eval_case.name}" created successfully!

Token count: ${V.session_token_count.toLocaleString()} tokens

Go to the Evals tab to view and edit the test case.`)}catch(V){alert(`Error creating test case: ${V.message||"Unknown error"}`)}finally{nh(!1)}},[f,e,xo,bc]),ww=w.useCallback(()=>{const V=document.createElement("input");V.type="file",V.accept=".json",V.onchange=async oe=>{var me;const ae=(me=oe.target.files)==null?void 0:me[0];if(ae)try{const xe=await ae.text(),Ae=JSON.parse(xe);if(!Ae.events||!Array.isArray(Ae.events)){alert("Invalid run file: missing events array");return}a(),l(),v(null),T(null),Ae.events.forEach(Pe=>{s(Pe)})}catch(xe){alert(`Failed to load run file: ${xe}`)}},V.click()},[a,l,s]);return w.useEffect(()=>{if(y!==null){const V=document.querySelector(".event-row.selected");V==null||V.scrollIntoView({behavior:"smooth",block:"nearest"})}},[y]),e?o.jsxs("div",{className:`run-panel ${X?"resizing":""}`,children:[o.jsx("style",{children:`
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
        
        /* Metrics Bottom Drawer */
        .metrics-toggle-button {
          position: fixed;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          background: #27272a;
          border: 1px solid #3f3f46;
          border-bottom: none;
          border-radius: 12px 12px 0 0;
          padding: 6px 16px;
          color: #a1a1aa;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 500;
          z-index: 1001;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
        }
        
        .metrics-toggle-button:hover {
          background: #3f3f46;
          color: #e4e4e7;
        }
        
        .metrics-toggle-button.open {
          bottom: 140px;
          background: #22d3ee22;
          border-color: #22d3ee;
          color: #22d3ee;
        }
        
        .metrics-bottom-drawer {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: 140px;
          background: linear-gradient(180deg, #1a1a1f 0%, #18181b 100%);
          border-top: 1px solid #3f3f46;
          border-radius: 20px 20px 0 0;
          transform: translateY(100%);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1000;
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.4);
        }
        
        .metrics-bottom-drawer.open {
          transform: translateY(0);
        }
        
        .metrics-bottom-drawer .metrics-drawer-content {
          height: 100%;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .metrics-charts-row {
          display: flex;
          gap: 20px;
          width: 100%;
          height: 100%;
          max-width: 1400px;
        }
        
        .metrics-chart-container {
          flex: 1;
          min-width: 200px;
          max-width: 400px;
          display: flex;
          flex-direction: column;
          background: #27272a;
          border-radius: 12px;
          padding: 8px 12px;
          overflow: hidden;
        }
        
        .metrics-chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4px;
        }
        
        .metrics-chart-label {
          font-size: 10px;
          font-weight: 600;
          color: #a1a1aa;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .metrics-chart-value {
          font-size: 14px;
          font-weight: 700;
          font-family: 'SF Mono', 'Consolas', monospace;
        }
        
        .metrics-error {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 16px;
          background: #450a0a;
          border: 1px solid #dc2626;
          border-radius: 6px;
          color: #fca5a5;
          font-size: 12px;
        }
        
        .metrics-loading {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #71717a;
          font-size: 12px;
        }
        
        .metrics-notice {
          font-size: 11px;
          color: #71717a;
          padding: 12px 16px;
          background: #27272a;
          border-radius: 8px;
        }
        
        .metrics-notice code {
          background: #3f3f46;
          padding: 1px 4px;
          border-radius: 3px;
          color: #22d3ee;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .spin {
          animation: spin 1s linear infinite;
        }
      `}),o.jsx(WA,{agents:e.agents,events:i,selectedEventIndex:y,isOpen:we,onOpenChange:G,runState:ht}),o.jsxs("div",{className:"input-area",children:[o.jsxs("select",{className:"agent-selector",value:ho||"",onChange:V=>Qf(V.target.value||null),disabled:n,title:"Select which agent to run",children:[o.jsx("option",{value:"",children:e.app.root_agent_id?`Root: ${((ih=e.agents.find(V=>V.id===e.app.root_agent_id))==null?void 0:ih.name)||e.app.root_agent_id}`:"No root agent"}),e.agents.filter(V=>V.id!==e.app.root_agent_id).map(V=>o.jsxs("option",{value:V.id,children:[V.name," (",V.type.replace("Agent",""),")"]},V.id))]}),o.jsxs("select",{className:"agent-selector",value:sw||"",onChange:V=>vc(V.target.value||null),disabled:n||Vs,style:{minWidth:180},title:"Load a saved session",children:[o.jsx("option",{value:"",children:Vs?"Loading...":"Load Session..."}),ci.map(V=>{const oe=new Date(V.started_at*1e3),ae=V.duration?`${V.duration.toFixed(1)}s`:"?";return o.jsxs("option",{value:V.id,children:[oe.toLocaleString()," (",V.event_count," events, ",ae,")"]},V.id)})]}),o.jsxs("div",{style:{position:"relative",flex:1,display:"flex"},children:[o.jsx("input",{ref:Ne,type:"text",placeholder:"Enter your query...",value:m,onChange:V=>b(V.target.value),onFocus:()=>be(!0),onBlur:()=>setTimeout(()=>be(!1),150),onKeyDown:V=>{V.key==="Enter"&&!V.shiftKey?mo():V.key==="Escape"&&be(!1)},disabled:n,style:{flex:1}}),et&&Ie.length>0&&o.jsx("div",{style:{position:"absolute",top:"100%",left:0,right:0,background:"#18181b",border:"1px solid #3f3f46",borderRadius:"6px",marginTop:"4px",maxHeight:"240px",overflowY:"auto",zIndex:100,boxShadow:"0 4px 12px rgba(0,0,0,0.4)"},children:Ie.map((V,oe)=>o.jsxs("div",{style:{padding:"8px 12px",fontSize:"12px",color:"#e4e4e7",cursor:"pointer",borderBottom:oe<Ie.length-1?"1px solid #27272a":"none",display:"flex",justifyContent:"space-between",alignItems:"center"},onMouseDown:ae=>{ae.preventDefault(),mo(V.prompt)},onMouseEnter:ae=>{ae.currentTarget.style.background="#27272a"},onMouseLeave:ae=>{ae.currentTarget.style.background="transparent"},children:[o.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1,marginRight:"8px"},children:V.prompt}),o.jsxs("span",{style:{fontSize:"10px",color:"#71717a",flexShrink:0},children:["×",V.count]})]},oe))})]}),n?o.jsxs("button",{className:"stop",onClick:lw,children:[o.jsx(Oj,{size:14}),"Stop"]}):o.jsxs("button",{onClick:()=>mo(),disabled:!m.trim(),children:[o.jsx(Cr,{size:14}),"Run"]}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"4px",marginLeft:"12px",fontSize:"11px",color:C?"#22d3ee":"#71717a",cursor:"pointer"},title:"Run in isolated Docker container",children:[o.jsx("input",{type:"checkbox",checked:C,onChange:V=>R(V.target.checked),disabled:n,style:{accentColor:"#22d3ee"}}),"🐳 Sandbox"]}),C&&o.jsx("button",{onClick:dw,style:{background:"transparent",border:"1px solid #3f3f46",borderRadius:"4px",padding:"2px 8px",marginLeft:"8px",fontSize:"11px",color:"#a1a1aa",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"},title:"View container logs",children:"📋 Logs"})]}),o.jsxs("div",{className:"toolbar",children:[o.jsxs("div",{className:"toolbar-section",children:[o.jsx(a1,{size:12,style:{color:"#71717a"}}),o.jsx("input",{type:"text",placeholder:"Filter events...",value:_,onChange:V=>A(V.target.value)})]}),o.jsx("div",{className:"toolbar-divider"}),o.jsxs("div",{className:"toolbar-section",children:[["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_error"].map(V=>o.jsx("button",{className:`filter-chip ${E.has(V)?"active":""}`,onClick:()=>{const oe=new Set(E);oe.has(V)?oe.delete(V):oe.add(V),W(oe)},children:V.replace("_"," ")},V)),o.jsx("button",{className:`filter-chip ${E.has("callback_start")&&E.has("callback_end")?"active":""}`,onClick:()=>{const V=new Set(E);V.has("callback_start")&&V.has("callback_end")?(V.delete("callback_start"),V.delete("callback_end")):(V.add("callback_start"),V.add("callback_end")),W(V)},title:"Show/hide callback events",children:"callback"}),o.jsx("button",{className:`filter-chip ${Z?"active":""}`,onClick:()=>ne(!Z),title:"Hide LLM_RESP (complete) events",children:"hide (complete)"})]}),o.jsx("div",{className:"toolbar-divider"}),o.jsxs("div",{className:"toolbar-section",children:[o.jsxs("button",{className:`toolbar-btn ${ue?"active":""}`,onClick:()=>{_e(!ue),re(!1),ee(!1)},children:[o.jsx(Gn,{size:12}),"State"]}),o.jsxs("button",{className:`toolbar-btn ${le?"active":""}`,onClick:()=>{ee(!le),_e(!1),re(!1)},children:[o.jsx(vl,{size:12}),"Artifacts"]}),o.jsxs("button",{className:`toolbar-btn ${Y?"active":""}`,onClick:()=>{re(!Y),_e(!1),ee(!1)},children:[o.jsx(Qc,{size:12}),"Tools"]})]}),o.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:[o.jsxs("span",{style:{fontSize:10,color:"#71717a"},children:[Vt.length," / ",i.length," events"]}),j&&o.jsx("button",{className:"toolbar-btn",onClick:()=>T(null),children:"Clear Range"})]})]}),o.jsxs("div",{className:"main-content",ref:yc,children:[o.jsxs("div",{className:"event-list-container",children:[o.jsxs("div",{className:"event-list-header",style:{gridTemplateColumns:Xf},children:[o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"#"}),o.jsx("div",{className:`column-resize-handle ${mt===0?"active":""}`,onMouseDown:V=>Ys(0,V)})]}),o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"Time"}),o.jsx("div",{className:`column-resize-handle ${mt===1?"active":""}`,onMouseDown:V=>Ys(1,V)})]}),o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"Agent"}),o.jsx("div",{className:`column-resize-handle ${mt===2?"active":""}`,onMouseDown:V=>Ys(2,V)})]}),o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"Type"}),o.jsx("div",{className:`column-resize-handle ${mt===3?"active":""}`,onMouseDown:V=>Ys(3,V)})]}),o.jsx("div",{className:"header-cell",children:o.jsx("span",{children:"Info"})})]}),o.jsx("div",{className:"event-list",ref:qs,children:Vt.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(o1,{size:24}),o.jsx("span",{children:i.length===0?"No events yet":"No matching events"})]}):Vt.map((V,oe)=>{const ae=i.indexOf(V),me=Xx[V.event_type]||Xx.error,xe=HA[V.event_type]||wl;return o.jsxs("div",{className:`event-row ${y===ae?"selected":""}`,style:{background:me.bg,gridTemplateColumns:Xf},onClick:()=>v(ae),onDoubleClick:()=>{_e(!1),re(!1),ee(!1)},children:[o.jsx("div",{className:"index",children:ae}),o.jsx("div",{className:"time",style:{color:me.fg},children:VA(V.timestamp,aw.min)}),o.jsx("div",{className:"agent",children:o.jsx("span",{className:"agent-badge",style:{backgroundColor:Bl(V.agent_name).bg,color:Bl(V.agent_name).fg},children:V.agent_name})}),o.jsxs("div",{className:"type",style:{color:me.fg},children:[o.jsx(xe,{size:10}),V.event_type.split("_")[0]]}),o.jsx("div",{className:"summary",children:ty(V)})]},ae)})})]}),o.jsxs("div",{className:"side-panel-container",style:{width:fe},children:[o.jsx("div",{className:`resize-handle ${X?"active":""}`,onMouseDown:()=>he(!0)}),o.jsxs("div",{className:"side-panel",style:{width:fe-4},children:[o.jsxs("div",{className:"side-panel-tabs",children:[o.jsxs("button",{className:`side-panel-tab ${!ue&&!Y&&!le?"active":""}`,onClick:()=>{_e(!1),re(!1),ee(!1)},children:[o.jsx(Xr,{size:12,style:{marginRight:4}}),"Details"]}),o.jsxs("button",{className:`side-panel-tab ${ue?"active":""}`,onClick:()=>{_e(!0),re(!1),ee(!1)},children:[o.jsx(Gn,{size:12,style:{marginRight:4}}),"State"]}),o.jsxs("button",{className:`side-panel-tab ${le?"active":""}`,onClick:()=>{ee(!0),_e(!1),re(!1)},children:[o.jsx(vl,{size:12,style:{marginRight:4}}),"Artifacts"]}),o.jsxs("button",{className:`side-panel-tab ${Y?"active":""}`,onClick:()=>{re(!0),_e(!1),ee(!1)},children:[o.jsx(Qc,{size:12,style:{marginRight:4}}),"Tools"]})]}),o.jsx("div",{className:"side-panel-content",children:Y?o.jsx(eL,{project:e,selectedEventIndex:y,sandboxMode:C}):le?o.jsx(ZA,{project:e,sessionId:f}):ue?o.jsx(QA,{events:i,selectedEventIndex:y,project:e}):Zf?o.jsx(JA,{event:Zf}):o.jsxs("div",{className:"empty-state",children:[o.jsx(Xr,{size:24}),o.jsx("span",{children:"Select an event to view details"})]})})]})]})]}),o.jsxs("div",{className:"stats-bar",children:[o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Events:"}),o.jsx("span",{className:"stat-value",children:i.length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Tool Calls:"}),o.jsx("span",{className:"stat-value",children:i.filter(V=>V.event_type==="tool_call").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Model Calls:"}),o.jsx("span",{className:"stat-value",children:i.filter(V=>V.event_type==="model_call").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Callbacks:"}),o.jsx("span",{className:"stat-value",children:i.filter(V=>V.event_type==="callback_start").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"State Changes:"}),o.jsx("span",{className:"stat-value",children:i.filter(V=>V.event_type==="state_change").length})]}),i.length>0&&o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Duration:"}),o.jsxs("span",{className:"stat-value",children:[((i[i.length-1].timestamp-i[0].timestamp)*1e3).toFixed(0),"ms"]})]}),Js.total>0&&o.jsx("div",{className:"stat-item token-stats",children:o.jsxs("span",{className:"stat-value token-value",children:[o.jsxs("span",{className:"token-in",title:"Input tokens",children:[Js.input.toLocaleString(),"↑"]}),o.jsxs("span",{className:"token-out",title:"Output tokens",children:[Js.output.toLocaleString(),"↓"]}),o.jsx("span",{className:"token-total",title:"Total tokens",children:Js.total.toLocaleString()})]})}),o.jsx("div",{className:"stats-bar-spacer"}),o.jsxs("button",{className:"stats-bar-btn",onClick:ww,title:"Load a saved run",children:[o.jsx(ac,{size:12}),"Load"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:fw,disabled:i.length===0,title:"Save current run to file",children:[o.jsx(co,{size:12}),"Save"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:hw,disabled:!f||i.length===0,title:"Save current session to memory",children:[o.jsx(Gn,{size:12}),"Save to Memory"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:vw,disabled:!f||i.length===0,title:"Create evaluation test case from this session",style:{background:"rgba(var(--accent-primary-rgb), 0.15)"},children:[o.jsx(Nd,{size:12}),"Create Test Case"]})]}),mw&&o.jsx("div",{className:"dialog-overlay",style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>Gs(!1),children:o.jsxs("div",{className:"dialog-content",style:{background:"var(--bg-secondary)",borderRadius:"var(--radius-md)",padding:24,width:400,maxWidth:"90vw",border:"1px solid var(--border-color)"},onClick:V=>V.stopPropagation(),children:[o.jsxs("h3",{style:{marginBottom:16,display:"flex",alignItems:"center",gap:8},children:[o.jsx(Nd,{size:18}),"Create Test Case from Session"]}),o.jsxs("div",{style:{marginBottom:16},children:[o.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Test Case Name"}),o.jsx("input",{type:"text",value:bc,onChange:V=>yw(V.target.value),placeholder:"Enter test case name",style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"}})]}),o.jsxs("div",{style:{marginBottom:20},children:[o.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Add to Evaluation Set"}),o.jsx("select",{value:xo,onChange:V=>eh(V.target.value),style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"},children:gw.map(V=>o.jsx("option",{value:V.id,children:V.name},V.id))})]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:16},children:"This will extract user messages and tool calls from the current session to create a replayable test case. You can edit the expected responses and tool calls in the Evals tab after creation."}),o.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>Gs(!1),children:"Cancel"}),o.jsx("button",{className:"btn btn-primary",onClick:bw,disabled:th||!xo,children:th?"Creating...":"Create Test Case"})]})]})}),H&&o.jsx(UA,{request:H,timeout:H.timeout||30,onApprove:cw,onDeny:uw,onClose:()=>Q(null)}),M&&o.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>F(!1),children:o.jsxs("div",{style:{backgroundColor:"#18181b",borderRadius:"8px",border:"1px solid #3f3f46",width:"90%",maxWidth:"1400px",height:"80%",display:"flex",flexDirection:"column",overflow:"hidden"},onClick:V=>V.stopPropagation(),children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx(Qc,{size:16}),o.jsx("span",{style:{fontWeight:600},children:"Container Logs"})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsxs("button",{onClick:go,disabled:B,style:{background:"#3f3f46",border:"none",borderRadius:"4px",padding:"4px 8px",color:"#e4e4e7",cursor:B?"wait":"pointer",display:"flex",alignItems:"center",gap:"4px",fontSize:"12px"},children:[o.jsx($t,{size:12,className:B?"animate-spin":""}),"Refresh"]}),o.jsx("button",{onClick:()=>F(!1),style:{background:"transparent",border:"none",color:"#71717a",cursor:"pointer",padding:"4px"},children:o.jsx(uo,{size:16})})]})]}),o.jsxs("div",{style:{display:"flex",gap:"0",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[o.jsx("button",{onClick:()=>P("agent"),style:{padding:"8px 16px",background:g==="agent"?"#18181b":"transparent",border:"none",borderBottom:g==="agent"?"2px solid #22d3ee":"2px solid transparent",color:g==="agent"?"#22d3ee":"#a1a1aa",cursor:"pointer",fontSize:"13px"},children:"🤖 Agent"}),o.jsx("button",{onClick:()=>P("gateway"),style:{padding:"8px 16px",background:g==="gateway"?"#18181b":"transparent",border:"none",borderBottom:g==="gateway"?"2px solid #22d3ee":"2px solid transparent",color:g==="gateway"?"#22d3ee":"#a1a1aa",cursor:"pointer",fontSize:"13px"},children:"🌐 Gateway"})]}),o.jsx("div",{ref:z,onScroll:pw,style:{flex:1,overflow:"auto",padding:"12px",fontFamily:"ui-monospace, monospace",fontSize:"11px",lineHeight:"1.5",whiteSpace:"pre-wrap",wordBreak:"break-all",color:"#d4d4d8",backgroundColor:"#09090b"},children:B?o.jsx("div",{style:{color:"#71717a",textAlign:"center",padding:"20px"},children:"Loading logs..."}):O[g]?o.jsx(YA,{content:O[g]}):o.jsx("div",{style:{color:"#71717a"},children:"No logs available"})})]})}),De&&o.jsxs(o.Fragment,{children:[o.jsxs("button",{className:`metrics-toggle-button ${I?"open":""}`,onClick:()=>N(!I),title:"Toggle system metrics",children:[o.jsx(kj,{size:14}),o.jsx(Et,{size:14,style:{transform:I?"rotate(0deg)":"rotate(180deg)",transition:"transform 0.3s ease"}})]}),o.jsx("div",{className:`metrics-bottom-drawer ${I?"open":""}`,children:o.jsx("div",{className:"metrics-drawer-content",children:te?o.jsxs("div",{className:"metrics-error",children:[o.jsx(Is,{size:16}),o.jsx("span",{children:te})]}):U?U.available.psutil?o.jsxs("div",{className:"metrics-charts-row",children:[o.jsx(Ca,{data:se.map(V=>({timestamp:V.timestamp,value:V.cpu})),color:"#22d3ee",label:"CPU",currentValue:U.cpu.percent||0}),o.jsx(Ca,{data:se.map(V=>({timestamp:V.timestamp,value:V.memory})),color:"#a78bfa",label:"Memory",currentValue:U.memory.percent||0}),U.available.gpu&&((oh=U.gpu[0])==null?void 0:oh.utilization_percent)!==void 0&&o.jsx(Ca,{data:se.filter(V=>V.gpu!==void 0).map(V=>({timestamp:V.timestamp,value:V.gpu})),color:"#fb923c",label:`GPU${(sh=U.gpu[0])!=null&&sh.name?` (${U.gpu[0].name.slice(0,20)})`:""}`,currentValue:((ah=U.gpu[0])==null?void 0:ah.utilization_percent)||0}),U.available.gpu&&((lh=U.gpu[0])==null?void 0:lh.memory_percent)!==void 0&&o.jsx(Ca,{data:se.filter(V=>V.gpuMemory!==void 0).map(V=>({timestamp:V.timestamp,value:V.gpuMemory})),color:"#f472b6",label:"GPU VRAM",currentValue:((ch=U.gpu[0])==null?void 0:ch.memory_percent)||0})]}):o.jsxs("div",{className:"metrics-notice",style:{margin:"auto"},children:["Install ",o.jsx("code",{children:"psutil"})," for system metrics"]}):o.jsxs("div",{className:"metrics-loading",children:[o.jsx($t,{size:16,className:"spin"}),o.jsx("span",{children:"Loading metrics..."})]})})})]})]}):o.jsx("div",{className:"run-panel empty",children:"No project loaded"})}const nL=()=>Math.random().toString(36).substring(2,10),rL=()=>({id:nL(),name:"New SkillSet",description:"",embedding_model:void 0,app_model_id:void 0,external_store_type:void 0,external_store_config:{},search_enabled:!0,preload_enabled:!0,preload_top_k:3,preload_min_score:.4,sources:[],entry_count:0});function iL(){const{project:e,setProject:t}=St(),[n,r]=w.useState(null),[i,s]=w.useState(null),[a,l]=w.useState(""),[c,u]=w.useState([]),[d,p]=w.useState(!1),[f,h]=w.useState(!1),[m,b]=w.useState(""),[k,x]=w.useState(!1),[y,v]=w.useState(null),[j,T]=w.useState(null),_=w.useRef(null),A=(e==null?void 0:e.skillsets)||[],E=A.find($=>$.id===n);w.useEffect(()=>{X0().then($=>T($.available)).catch(()=>T(!1))},[]),w.useEffect(()=>{A.length>0&&!n&&r(A[0].id)},[A,n]),w.useEffect(()=>{!e||!n||W()},[e==null?void 0:e.id,n]);const W=w.useCallback(async()=>{if(!(!e||!n))try{const $=await Y0(e.id,n);s($),R(n,{entry_count:$.entry_count})}catch($){console.error("Failed to load stats:",$)}},[e==null?void 0:e.id,n]),C=$=>{e&&t({...e,...$})},R=($,g)=>{e&&t({...e,skillsets:e.skillsets.map(P=>P.id===$?{...P,...g}:P)})},H=()=>{if(!e)return;const $=rL();C({skillsets:[...A,$]}),r($.id)},Q=$=>{e&&confirm("Delete this SkillSet and all its data?")&&(C({skillsets:A.filter(g=>g.id!==$)}),n===$&&r(A.length>1?A[0].id:null),s(null),u([]))},M=async()=>{if(!(!e||!n||!a.trim())){p(!0),v(null);try{const $=await K0(e.id,n,a.trim(),10,0);u($.results)}catch($){v("Search failed"),console.error($)}finally{p(!1)}}},F=async()=>{if(!(!e||!n||!m.trim())){x(!0),v(null);try{const $=await J0(e.id,n,m.trim());b(""),await W(),alert(`Added ${$.chunks_added} chunks from ${$.source_name}`)}catch($){v($.message||"Failed to fetch URL")}finally{x(!1)}}},O=async $=>{var P;const g=(P=$.target.files)==null?void 0:P[0];if(!(!g||!e||!n)){v(null);try{const z=await G0(e.id,n,g);await W(),alert(`Added ${z.chunks_added} chunks from ${z.source_name}`)}catch(z){v(z.message||"Upload failed")}_.current&&(_.current.value="")}},L=async()=>{if(!(!e||!n)&&confirm("Delete all entries in this SkillSet?"))try{await Q0(e.id,n),await W(),u([])}catch{v("Clear failed")}},B=$=>{const g=Math.round($*100),P=160,z=70,S=20+(1-$)*15,D=.15+$*.25;return`linear-gradient(90deg, hsla(${P}, ${z}%, ${S}%, ${D}) 0%, transparent ${g}%)`};return e?o.jsxs("div",{className:"skillsets-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"skillset-list",children:[o.jsxs("div",{className:"skillset-list-header",children:[o.jsx("h3",{children:"SkillSets"}),o.jsx("button",{className:"btn-icon",onClick:H,title:"Add SkillSet",children:o.jsx(it,{size:16})})]}),A.length===0?o.jsxs("div",{className:"empty-state",style:{padding:"40px 0"},children:[o.jsx(Gn,{size:32}),o.jsx("span",{children:"No SkillSets"}),o.jsxs("button",{className:"btn-primary",onClick:H,children:[o.jsx(it,{size:14})," Create SkillSet"]})]}):A.map($=>o.jsxs("div",{className:`skillset-item ${n===$.id?"selected":""}`,onClick:()=>r($.id),children:[o.jsx(Gn,{size:16,style:{color:"var(--accent)",flexShrink:0}}),o.jsxs("div",{className:"skillset-item-info",children:[o.jsx("div",{className:"skillset-item-name",children:$.name}),o.jsxs("div",{className:"skillset-item-count",children:[$.entry_count||0," entries"]})]}),o.jsx("button",{className:"skillset-item-delete",onClick:g=>{g.stopPropagation(),Q($.id)},children:o.jsx(Je,{size:14})})]},$.id))]}),E?o.jsxs("div",{className:"skillset-detail",children:[o.jsxs("div",{className:"skillset-header",children:[o.jsxs("div",{className:"skillset-header-info",children:[o.jsx("input",{className:"skillset-name-input",value:E.name,onChange:$=>R(E.id,{name:$.target.value}),placeholder:"SkillSet Name"}),o.jsx("textarea",{className:"skillset-desc-input",value:E.description,onChange:$=>R(E.id,{description:$.target.value}),placeholder:"Description (optional)",rows:1}),o.jsxs("div",{className:"skillset-model",children:[o.jsx("label",{style:{fontSize:"12px",color:"var(--text-secondary)",marginRight:"8px"},children:"Embedding Model:"}),o.jsxs("select",{style:{flex:1,padding:"4px 8px",fontSize:"12px",background:"var(--bg-secondary)",border:"1px solid var(--border)",borderRadius:"4px",color:"var(--text-primary)"},value:E.embedding_model||"text-embedding-004",onChange:$=>R(E.id,{embedding_model:$.target.value}),children:[o.jsxs("optgroup",{label:"Google Gemini",children:[o.jsx("option",{value:"text-embedding-004",children:"text-embedding-004 (768d)"}),o.jsx("option",{value:"text-embedding-005",children:"text-embedding-005"})]}),o.jsxs("optgroup",{label:"OpenAI",children:[o.jsx("option",{value:"text-embedding-3-small",children:"text-embedding-3-small (1536d)"}),o.jsx("option",{value:"text-embedding-3-large",children:"text-embedding-3-large (3072d)"})]}),o.jsxs("optgroup",{label:"Cohere",children:[o.jsx("option",{value:"embed-english-v3.0",children:"embed-english-v3.0 (1024d)"}),o.jsx("option",{value:"embed-multilingual-v3.0",children:"embed-multilingual-v3.0 (1024d)"})]})]})]}),o.jsxs("div",{className:"skillset-stats",children:[o.jsxs("span",{className:"skillset-stat",children:[o.jsx("strong",{children:(i==null?void 0:i.entry_count)||0})," entries"]}),o.jsxs("span",{className:"skillset-stat",children:[o.jsx("strong",{children:Object.keys((i==null?void 0:i.sources)||{}).length})," sources"]}),j===!1&&o.jsx("span",{className:"skillset-stat",style:{color:"var(--warning)"},children:"⚠ No embeddings"})]})]}),o.jsx("button",{className:"btn-icon",onClick:W,title:"Refresh",children:o.jsx($t,{size:16})})]}),y&&o.jsxs("div",{className:"error-banner",children:[y,o.jsx("button",{onClick:()=>v(null),children:o.jsx(uo,{size:14})})]}),o.jsxs("div",{className:"search-section",children:[o.jsx("div",{className:"search-input-wrapper",children:o.jsx("input",{className:"search-input",value:a,onChange:$=>l($.target.value),onKeyDown:$=>$.key==="Enter"&&M(),placeholder:"Search this SkillSet..."})}),o.jsxs("button",{className:"btn-primary",onClick:M,disabled:d||!a.trim(),children:[o.jsx(a1,{size:14}),d?"Searching...":"Search"]})]}),o.jsxs("div",{className:"search-results",children:[c.length===0&&!d&&a&&o.jsx("div",{className:"empty-state",children:o.jsx("span",{children:"No results found"})}),c.map($=>o.jsxs("div",{className:"search-result",style:{background:B($.score)},children:[o.jsxs("span",{className:"search-result-score",children:[($.score*100).toFixed(0),"%"]}),o.jsx("div",{className:"search-result-text",children:$.text}),o.jsx("div",{className:"search-result-source",children:$.source_name})]},$.id))]}),o.jsxs("div",{className:"add-sources-section",children:[o.jsxs("div",{className:"add-sources-header",onClick:()=>h(!f),children:[f?o.jsx(Et,{size:16}):o.jsx(zt,{size:16}),o.jsx("h4",{children:"Add Sources"})]}),f&&o.jsxs("div",{className:"add-sources-content",children:[o.jsxs("div",{className:"source-row",children:[o.jsx(nf,{size:16,style:{color:"var(--text-tertiary)"}}),o.jsx("input",{className:"source-input",value:m,onChange:$=>b($.target.value),onKeyDown:$=>$.key==="Enter"&&F(),placeholder:"Enter URL (e.g., llms.txt file)"}),o.jsxs("button",{className:"btn-primary",onClick:F,disabled:k||!m.trim(),children:[o.jsx(Mj,{size:14}),k?"Loading...":"Add"]})]}),o.jsxs("div",{className:"source-row",children:[o.jsx(n1,{size:16,style:{color:"var(--text-tertiary)"}}),o.jsx("input",{ref:_,type:"file",accept:".txt,.md,.json,.csv,.html",onChange:O}),o.jsxs("button",{className:"btn-primary",onClick:()=>{var $;return($=_.current)==null?void 0:$.click()},children:[o.jsx(ac,{size:14}),"Upload File"]}),o.jsx("span",{style:{fontSize:"12px",color:"var(--text-tertiary)"},children:".txt, .md, .json, .csv"})]}),((i==null?void 0:i.entry_count)||0)>0&&o.jsx("div",{className:"source-row",style:{marginTop:"8px"},children:o.jsxs("button",{className:"clear-button",onClick:L,children:[o.jsx(Je,{size:12}),"Clear All Entries (",(i==null?void 0:i.entry_count)||0,")"]})})]})]})]}):A.length>0?o.jsx("div",{className:"skillset-detail",children:o.jsxs("div",{className:"empty-state",children:[o.jsx(Gn,{size:48}),o.jsx("span",{children:"Select a SkillSet"})]})}):null]}):null}const Mn={tool_trajectory_avg_score:{name:"Tool Trajectory",description:"Did the agent call the right tools in the expected order?",requiresJudge:!1,scale:[0,1]},response_match_score:{name:"Response Match (ROUGE-1)",description:"Does the response contain expected text? (fuzzy word matching)",requiresJudge:!1,scale:[0,1]},response_evaluation_score:{name:"Response Evaluation (LLM)",description:"LLM-judged semantic match of final response",requiresJudge:!0,scale:[1,5]},final_response_match_v2:{name:"Response Quality v2 (LLM)",description:"Enhanced LLM-judged response quality check",requiresJudge:!0,scale:[0,1]},safety_v1:{name:"Safety",description:"Is the response safe and harmless? (Vertex AI)",requiresJudge:!0,scale:[0,1]},hallucinations_v1:{name:"Hallucination Detection",description:"Are all claims supported by context? No false information?",requiresJudge:!0,scale:[0,1]},rubric_based_final_response_quality_v1:{name:"Rubric: Response Quality",description:"Custom rubric-based quality assessment of responses",requiresJudge:!0,scale:[0,1]},rubric_based_tool_use_quality_v1:{name:"Rubric: Tool Use Quality",description:"Custom rubric-based assessment of tool usage",requiresJudge:!0,scale:[0,1]}},Es=(e,t,n)=>{if(t==null)return{value:"-",comparison:""};const r=Mn[e],i=(r==null?void 0:r.scale)||[0,1];if(i[0]===1&&i[1]===5){const s=n??3.5;return{value:t.toFixed(1),comparison:`${s.toFixed(1)} / ${i[1].toFixed(1)}`}}else{const s=n??.7;return{value:`${Math.round(t*100)}%`,comparison:`${Math.round(s*100)}% min`}}},oL={metrics:[{metric:"tool_trajectory_avg_score",enabled:!0,criterion:{threshold:1}},{metric:"response_match_score",enabled:!0,criterion:{threshold:.7}}],default_trajectory_match_type:"in_order",num_runs:1};function ow(){return`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`}function sL(){const{project:e}=St(),[t,n]=w.useState([]),[r,i]=w.useState(null),[s,a]=w.useState(null),[l,c]=w.useState(new Set),[u,d]=w.useState(new Map),[p,f]=w.useState(new Map),[h,m]=w.useState(new Set),[b,k]=w.useState(!1),[x,y]=w.useState(null),[v,j]=w.useState([]),[T,_]=w.useState(null),A=async()=>{if(e)try{const G=await tt.get(`/projects/${e.id}/eval-history`);j(G.runs||[])}catch(G){console.warn("Failed to load eval history:",G)}},E=async(G,ie=!0)=>{if(e)try{const I=(await tt.get(`/projects/${e.id}/eval-history/${G}`)).run;if(_(I),I!=null&&I.case_results){const N=new Map;for(const U of I.case_results)N.set(U.eval_case_id,U);d(N)}if((I==null?void 0:I.eval_set_id)==="batch")c(new Set(t.map(N=>N.id))),i(null);else if(I!=null&&I.eval_set_id){const N=new Map;N.set(I.eval_set_id,I),f(N),i(I.eval_set_id),c(U=>new Set([...U,I.eval_set_id]))}a(null),ie&&window.history.pushState({run:G},"",`?run=${G}`)}catch(q){console.warn("Failed to load history run:",q)}},W=(G,ie=!0)=>{i(G),a(null),_(null),ie&&G?window.history.pushState({set:G},"",`?set=${G}`):ie&&window.history.pushState({},"",window.location.pathname)},C=(G,ie,q=!0)=>{i(G),a(ie),_(null),q&&ie?window.history.pushState({set:G,case:ie},"",`?set=${G}&case=${ie}`):q&&G&&window.history.pushState({set:G},"",`?set=${G}`)},R=()=>{_(null),d(new Map),f(new Map),window.history.pushState({},"",window.location.pathname)},H=async G=>{if(e)try{await tt.delete(`/projects/${e.id}/eval-history/${G}`),j(ie=>ie.filter(q=>q.id!==G)),(T==null?void 0:T.id)===G&&_(null)}catch(ie){console.warn("Failed to delete history run:",ie)}};w.useEffect(()=>{e!=null&&e.id&&(Q(),A())},[e==null?void 0:e.id]),w.useEffect(()=>{const G=()=>{m(new Set(t.map(q=>q.id)))},ie=()=>{m(new Set),A()};return window.addEventListener("eval-tests-started",G),window.addEventListener("eval-tests-completed",ie),()=>{window.removeEventListener("eval-tests-started",G),window.removeEventListener("eval-tests-completed",ie)}},[t]),w.useEffect(()=>{if(!(e!=null&&e.id)||b)return;const G=()=>{const q=new URLSearchParams(window.location.search),I=q.get("set"),N=q.get("case"),U=q.get("run");if(U){E(U,!1);return}if(I)i(I),a(N),_(null),c(J=>new Set([...J,I]));else{if(!r&&!s&&!T)return;i(null),a(null),_(null)}};G();const ie=()=>{G()};return window.addEventListener("popstate",ie),()=>window.removeEventListener("popstate",ie)},[e==null?void 0:e.id,b,t.length]);const Q=async()=>{var G,ie;if(e!=null&&e.id){k(!0),y(null);try{const q=await tt.get(`/projects/${e.id}/eval-sets`);if(n(q.eval_sets||[]),((G=q.eval_sets)==null?void 0:G.length)>0){const I=new URLSearchParams(window.location.search),N=I.get("set"),U=I.get("case"),J=N||(U?(ie=q.eval_sets.find(se=>se.eval_cases.some(K=>K.id===U)))==null?void 0:ie.id:null)||q.eval_sets[0].id;c(new Set([J]))}}catch(q){y(q.message||"Failed to load eval sets")}finally{k(!1)}}},M=t.find(G=>G.id===r),F=M==null?void 0:M.eval_cases.find(G=>G.id===s),O=async()=>{if(e!=null&&e.id)try{const G=await tt.post(`/projects/${e.id}/eval-sets`,{name:"New Eval Set",description:"",eval_config:oL});n(ie=>[...ie,G.eval_set]),i(G.eval_set.id),c(ie=>new Set([...ie,G.eval_set.id]))}catch(G){y(G.message||"Failed to create eval set")}},[L,B]=w.useState(!1),[$,g]=w.useState(!1),[P,z]=w.useState(""),S=()=>{z(""),g(!0)},D=async()=>{if(e!=null&&e.id){g(!1),B(!0),y(null);try{const G=await Z0(e.id,{context:P||void 0});G.success&&G.eval_set?(n(ie=>[...ie,G.eval_set]),i(G.eval_set.id),c(ie=>new Set([...ie,G.eval_set.id]))):(y(G.error||"Failed to generate eval set"),console.error("AI generation error:",G.traceback||G.raw_output))}catch(G){y(G.message||"Failed to generate eval set with AI")}finally{B(!1),z("")}}},Z=async G=>{if(e!=null&&e.id)try{const ie=await tt.post(`/projects/${e.id}/eval-sets/${G}/cases`,{name:"New Test Case",description:"",invocations:[{id:ow(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]}],initial_state:{},rubrics:[],enabled_metrics:[],tags:[]});n(q=>q.map(I=>I.id===G?{...I,eval_cases:[...I.eval_cases,ie.eval_case]}:I)),i(G),a(ie.eval_case.id)}catch(ie){y(ie.message||"Failed to create eval case")}},ne=async(G,ie,q)=>{if(e!=null&&e.id)try{const I=await tt.put(`/projects/${e.id}/eval-sets/${G}/cases/${ie}`,q);n(N=>N.map(U=>U.id===G?{...U,eval_cases:U.eval_cases.map(J=>J.id===ie?I.eval_case:J)}:U))}catch(I){y(I.message||"Failed to update eval case")}},ue=async(G,ie)=>{if(e!=null&&e.id)try{await tt.delete(`/projects/${e.id}/eval-sets/${G}/cases/${ie}`),n(q=>q.map(I=>I.id===G?{...I,eval_cases:I.eval_cases.filter(N=>N.id!==ie)}:I)),s===ie&&a(null)}catch(q){y(q.message||"Failed to delete eval case")}},_e=async G=>{if(e!=null&&e.id)try{await tt.delete(`/projects/${e.id}/eval-sets/${G}`),n(ie=>ie.filter(q=>q.id!==G)),r===G&&(i(null),a(null))}catch(ie){y(ie.message||"Failed to delete eval set")}},Y=async G=>{if(e!=null&&e.id)try{const ie=await tt.get(`/projects/${e.id}/eval-sets/${G}/export`),q=new Blob([JSON.stringify(ie,null,2)],{type:"application/json"}),I=URL.createObjectURL(q),N=document.createElement("a");N.href=I;const U=t.find(J=>J.id===G);N.download=`${(U==null?void 0:U.name)||"eval-set"}.json`,document.body.appendChild(N),N.click(),document.body.removeChild(N),URL.revokeObjectURL(I)}catch(ie){y(ie.message||"Failed to export eval set")}},re=async G=>{if(e!=null&&e.id)try{const ie=await G.text(),q=JSON.parse(ie),I=await tt.post(`/projects/${e.id}/eval-sets/import`,q);n(N=>[...N,I.eval_set]),i(I.eval_set.id),c(N=>new Set([...N,I.eval_set.id]))}catch(ie){y(ie.message||"Failed to import eval set")}},le=w.useRef(null),ee=async()=>{if(!(!(e!=null&&e.id)||t.length===0))try{const G=await Promise.all(t.map(async N=>{try{return await tt.get(`/projects/${e.id}/eval-sets/${N.id}/export`)}catch{return N}})),ie=new Blob([JSON.stringify(G,null,2)],{type:"application/json"}),q=URL.createObjectURL(ie),I=document.createElement("a");I.href=q,I.download=`${e.name||"project"}-eval-sets.json`,document.body.appendChild(I),I.click(),document.body.removeChild(I),URL.revokeObjectURL(q)}catch(G){y(G.message||"Failed to export all eval sets")}},fe=async(G,ie)=>{if(e!=null&&e.id){m(q=>new Set([...q,ie]));try{const q=await tt.post(`/projects/${e.id}/eval-sets/${G}/cases/${ie}/run`,{});d(I=>new Map(I).set(ie,q.result))}catch(q){y(q.message||"Failed to run eval case")}finally{m(q=>{const I=new Set(q);return I.delete(ie),I})}}},ye=async G=>{if(!(e!=null&&e.id))return;const ie=t.find(I=>I.id===G);if(!ie)return;const q=ie.eval_cases.map(I=>I.id);m(I=>new Set([...I,G,...q]));try{const I=await tt.post(`/projects/${e.id}/eval-sets/${G}/run`,{});f(N=>new Map(N).set(G,I.result));for(const N of I.result.case_results)d(U=>new Map(U).set(N.eval_case_id,N));try{await tt.post(`/projects/${e.id}/eval-history`,I.result),A()}catch(N){console.warn("Failed to save eval run to history:",N)}}catch(I){y(I.message||"Failed to run eval set")}finally{m(I=>{const N=new Set(I);return N.delete(G),q.forEach(U=>N.delete(U)),N})}},X=G=>{c(ie=>{const q=new Set(ie);return q.has(G)?q.delete(G):q.add(G),q})},he=G=>{let ie=G.eval_cases.length,q=0,I=0,N=0;for(const U of G.eval_cases){const J=u.get(U.id);J?J.passed?q++:I++:N++}return{total:ie,passed:q,failed:I,pending:N}},we=G=>G==null?"-":`${Math.round(G*100)}%`;return e?o.jsxs("div",{className:"eval-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("aside",{className:"eval-sidebar",children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsx("h3",{children:"Evaluation Tests"}),o.jsxs("div",{className:"header-actions",children:[o.jsx("input",{type:"file",ref:le,accept:".json",style:{display:"none"},onChange:G=>{var q;const ie=(q=G.target.files)==null?void 0:q[0];ie&&(re(ie),G.target.value="")}}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var G;return(G=le.current)==null?void 0:G.click()},title:"Import eval set from JSON",children:o.jsx(ac,{size:14})}),t.length>0&&o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:ee,title:"Download all eval sets as JSON",children:o.jsx(co,{size:14})}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:Q,title:"Refresh",children:o.jsx($t,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:O,title:"New eval set",children:[o.jsx(it,{size:14}),"Set"]}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:S,disabled:L,title:"Generate eval set with AI",style:{background:"linear-gradient(135deg, #8b5cf6, #6366f1)"},children:L?o.jsx($t,{size:14,className:"spin"}):o.jsx(Di,{size:14})})]})]}),o.jsxs("div",{className:"eval-tree",children:[b&&o.jsx("p",{style:{color:"var(--text-muted)",padding:"16px"},children:"Loading..."}),x&&o.jsx("div",{style:{color:"var(--error)",padding:"16px",fontSize:"13px"},children:x}),!b&&t.length===0&&o.jsxs("div",{className:"empty-state",style:{padding:"32px"},children:[o.jsx(sf,{size:32}),o.jsxs("p",{children:["No evaluation sets yet.",o.jsx("br",{}),"Create one or use AI to generate tests."]})]}),t.map(G=>{const ie=l.has(G.id),q=he(G),I=h.has(G.id);return o.jsxs("div",{className:"tree-item",children:[o.jsxs("div",{className:`tree-set ${r===G.id&&!s?"selected":""}`,onClick:()=>W(G.id),children:[o.jsx("button",{className:"expand-btn",onClick:N=>{N.stopPropagation(),X(G.id)},children:G.eval_cases.length>0?ie?o.jsx(Et,{size:14}):o.jsx(zt,{size:14}):o.jsx("span",{style:{width:14}})}),o.jsx(i1,{size:14,style:{color:"var(--accent-secondary)"}}),o.jsx("span",{className:"set-name",children:G.name}),o.jsx("button",{className:"add-case-btn",onClick:N=>{N.stopPropagation(),Z(G.id)},title:"Add test case",style:{padding:"2px 4px",marginLeft:4,background:"transparent",border:"none",cursor:"pointer",opacity:.6,display:"flex",alignItems:"center"},children:o.jsx(it,{size:12})}),q.total>0&&o.jsxs("span",{className:"set-stats",children:[q.passed>0&&o.jsx("span",{className:"stat-passed",children:q.passed}),q.failed>0&&o.jsx("span",{className:"stat-failed",children:q.failed}),q.pending>0&&o.jsx("span",{className:"stat-pending",children:q.pending})]}),o.jsx("button",{className:"run-btn",onClick:N=>{N.stopPropagation(),ye(G.id)},title:"Run all tests in this set",disabled:I,children:I?o.jsx(Zi,{size:12,className:"spinning"}):o.jsx(Cr,{size:12})})]}),ie&&o.jsx("div",{className:"tree-children",style:{paddingLeft:16},children:G.eval_cases.map(N=>{var se;const U=u.get(N.id),J=h.has(N.id);return o.jsxs("div",{className:`tree-case ${s===N.id?"selected":""}`,onClick:()=>C(G.id,N.id),children:[J?o.jsx(Zi,{size:14,className:"spinning",style:{color:"var(--warning)"}}):U?U.passed?o.jsx(jn,{size:14,style:{color:"var(--success)"}}):o.jsx(Nr,{size:14,style:{color:"var(--error)"}}):o.jsx(bl,{size:14,style:{color:"var(--text-muted)"}}),o.jsx("span",{className:"case-name",children:N.name}),U&&U.metric_results.length>0&&o.jsx("span",{style:{fontSize:11,color:U.passed?"var(--success)":"var(--error)"},children:we((se=U.metric_results[0])==null?void 0:se.score)}),o.jsx("button",{className:"run-btn",onClick:K=>{K.stopPropagation(),fe(G.id,N.id)},disabled:J,children:o.jsx(Cr,{size:12})})]},N.id)})})]},G.id)})]}),o.jsxs("div",{className:"history-section",children:[o.jsx("div",{className:"history-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 12px",borderTop:"1px solid var(--border-color)",background:"var(--bg-secondary)"},children:o.jsxs("span",{style:{fontWeight:500,fontSize:13},children:["Previous Runs (",v.length,")"]})}),o.jsx("div",{className:"history-list",style:{maxHeight:200,overflowY:"auto"},children:v.length===0?o.jsx("div",{style:{padding:"12px",color:"var(--text-secondary)",fontSize:12,textAlign:"center"},children:"No previous runs"}):[...v].sort((G,ie)=>(ie.started_at||0)-(G.started_at||0)).map(G=>{const ie=G.passed_cases===G.total_cases;return o.jsx("div",{className:`history-item ${(T==null?void 0:T.id)===G.id?"selected":""}`,onClick:()=>E(G.id),style:{padding:"8px 12px",borderBottom:"1px solid var(--border-color)",cursor:"pointer",background:(T==null?void 0:T.id)===G.id?"var(--bg-tertiary)":"transparent",fontSize:12},children:o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[ie?o.jsx(jn,{size:14,style:{color:"var(--success)",flexShrink:0}}):o.jsx(Nr,{size:14,style:{color:"var(--error)",flexShrink:0}}),o.jsxs("div",{children:[o.jsx("div",{style:{fontWeight:500},children:G.eval_set_name||"Unnamed"}),o.jsx("div",{style:{color:"var(--text-secondary)",fontSize:11},children:new Date(G.started_at*1e3).toLocaleString()})]})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsxs("span",{style:{color:ie?"var(--success)":"var(--error)",fontWeight:500,fontSize:11},children:[G.passed_cases,"/",G.total_cases]}),o.jsx("button",{className:"btn btn-icon",onClick:q=>{q.stopPropagation(),H(G.id)},title:"Delete run",style:{padding:2},children:o.jsx(Je,{size:12})})]})]})},G.id)})})]})]}),o.jsx("div",{className:"eval-editor",children:T?o.jsx(lL,{run:T,onClose:R}):F?o.jsx(cL,{evalCase:F,evalSetId:r,projectId:e.id,result:u.get(F.id),isRunning:h.has(F.id),onUpdate:G=>ne(r,F.id,G),onDelete:()=>ue(r,F.id),onRun:()=>fe(r,F.id),onClearResult:()=>d(G=>{const ie=new Map(G);return ie.delete(F.id),ie})}):M?o.jsx(uL,{evalSet:M,projectId:e.id,result:p.get(M.id),isRunning:h.has(M.id),caseResults:u,onUpdate:async G=>{try{const ie=await tt.put(`/projects/${e.id}/eval-sets/${M.id}`,G);n(q=>q.map(I=>I.id===M.id?ie.eval_set:I))}catch(ie){y(ie.message)}},onDelete:()=>_e(M.id),onRun:()=>ye(M.id),onExport:()=>Y(M.id)}):o.jsx("div",{className:"editor-content",children:o.jsxs("div",{className:"empty-state",children:[o.jsx(bl,{size:48}),o.jsxs("p",{children:["Select a test case to edit",o.jsx("br",{}),"or create a new one"]})]})})}),$&&o.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e4},onClick:()=>g(!1),children:o.jsxs("div",{style:{background:"var(--bg-primary)",borderRadius:"var(--radius-lg)",padding:"24px",width:"90%",maxWidth:"500px",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.5)"},onClick:G=>G.stopPropagation(),children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"16px"},children:[o.jsx(Di,{size:24,style:{color:"#8b5cf6"}}),o.jsx("h3",{style:{margin:0,fontSize:"18px"},children:"Generate Test Set with AI"})]}),o.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"14px",marginBottom:"16px"},children:"Describe what you want to test. The AI will generate test cases with expected outcomes, tool calls, and evaluation rubrics."}),o.jsx("textarea",{value:P,onChange:G=>z(G.target.value),placeholder:"e.g., Test error handling when user provides invalid input, edge cases for date parsing, scenarios where the agent should ask clarifying questions...",style:{width:"100%",minHeight:"120px",padding:"12px",fontSize:"14px",background:"var(--bg-secondary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",color:"var(--text-primary)",resize:"vertical"},autoFocus:!0}),o.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"20px",justifyContent:"flex-end"},children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>g(!1),children:"Cancel"}),o.jsxs("button",{className:"btn btn-primary",onClick:D,style:{background:"linear-gradient(135deg, #8b5cf6, #6366f1)",display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx(Di,{size:16}),"Generate"]})]})]})})]}):null}function aL({value:e,onChange:t}){var a,l;const{project:n}=St(),r=((a=n==null?void 0:n.app)==null?void 0:a.models)||[],i=(l=n==null?void 0:n.app)==null?void 0:l.default_model_id,s=r.find(c=>c.id===i);return o.jsxs("select",{value:e,onChange:c=>t(c.target.value),style:{width:"100%",maxWidth:400},children:[o.jsx("option",{value:"",children:s?`App Default (${s.model_name})`:"App Default"}),r.map(c=>o.jsx("option",{value:c.model_name,children:c.model_name},c.id)),o.jsx("option",{value:"gemini-2.0-flash",children:"gemini-2.0-flash"}),o.jsx("option",{value:"gemini-2.5-flash",children:"gemini-2.5-flash"}),o.jsx("option",{value:"gemini-2.5-pro",children:"gemini-2.5-pro"})]})}function lL({run:e,onClose:t}){var h;const{project:n}=St(),[r,i]=w.useState(!0),[s,a]=w.useState(new Set),l=e.case_results||[],c=l.filter(m=>m.passed).length,u=l.filter(m=>!m.passed).length,d=r?l.filter(m=>!m.passed):l,p=m=>{a(b=>{const k=new Set(b);return k.has(m)?k.delete(m):k.add(m),k})},f=m=>{m&&n&&(window.location.href=`/project/${n.id}/run?session=${m}`)};return o.jsxs("div",{className:"test-result-viewer",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"result-header",children:[o.jsx("h2",{children:e.eval_set_name||"Test Run Results"}),o.jsx("div",{style:{display:"flex",gap:8},children:o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{if(n){const m=`${window.location.origin}/project/${n.id}/evaluate?run=${e.id}`;navigator.clipboard.writeText(m)}},title:"Copy link to this run",children:o.jsx(of,{size:14})})})]}),o.jsxs("div",{className:"result-summary",children:[o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Status"}),o.jsx("span",{className:`value ${c===l.length?"passed":"failed"}`,children:c===l.length?"PASSED":"FAILED"})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Passed"}),o.jsx("span",{className:"value passed",children:c})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Failed"}),o.jsx("span",{className:"value failed",children:u})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Total Cases"}),o.jsx("span",{className:"value",children:l.length})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Duration"}),o.jsx("span",{className:"value",children:e.duration_ms?`${(e.duration_ms/1e3).toFixed(1)}s`:"-"})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Tokens"}),o.jsx("span",{className:"value",children:((h=e.total_tokens)==null?void 0:h.toLocaleString())||"-"})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Run Time"}),o.jsx("span",{className:"value",style:{fontSize:13},children:e.started_at?new Date(e.started_at*1e3).toLocaleString():"-"})]})]}),o.jsxs("div",{style:{padding:"8px 20px",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",gap:10,background:"var(--bg-secondary)"},children:[o.jsxs("label",{className:"toggle-switch",style:{transform:"scale(0.85)"},children:[o.jsx("input",{type:"checkbox",checked:r,onChange:m=>i(m.target.checked)}),o.jsx("span",{className:"toggle-slider"})]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:"Hide passing results"})]}),o.jsxs("div",{className:"result-cases",children:[d.map((m,b)=>{var R,H,Q,M,F,O;const k=m.case_id||`case-${b}`,x=s.has(k),y=((R=m.metric_results)==null?void 0:R.filter(L=>!L.passed||L.error))||[],v=((H=m.metric_results)==null?void 0:H.filter(L=>L.passed&&!L.error))||[],j=((Q=m.rubric_results)==null?void 0:Q.filter(L=>!L.passed||L.error))||[],T=((M=m.rubric_results)==null?void 0:M.filter(L=>L.passed&&!L.error))||[],_=x?m.metric_results:y,A=x?m.rubric_results:j,E=x?m.invocation_results:(F=m.invocation_results)==null?void 0:F.filter(L=>{var B;return((B=L.metric_results)==null?void 0:B.some($=>!$.passed))||L.error}),W=v.length+T.length,C=y.length+j.length;return o.jsxs("div",{className:"result-case",children:[o.jsxs("div",{className:"result-case-header",onClick:()=>p(k),style:{cursor:"pointer"},children:[o.jsxs("div",{className:"result-case-name",children:[o.jsx("span",{style:{marginRight:6,fontSize:12,color:"var(--text-muted)"},children:x?"▼":"▶"}),m.passed?o.jsx(jn,{size:16,style:{color:"var(--success)"}}):o.jsx(Nr,{size:16,style:{color:"var(--error)"}}),m.eval_set_name&&(e==null?void 0:e.eval_set_id)==="batch"&&o.jsx("span",{style:{fontSize:10,color:"var(--text-muted)",background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4,marginRight:6},children:m.eval_set_name}),m.case_name||`Case ${b+1}`,o.jsxs("span",{style:{marginLeft:10,fontSize:11,color:"var(--text-muted)",fontWeight:400},children:[(m.num_runs||1)>1&&o.jsxs("span",{style:{marginRight:8,padding:"2px 6px",borderRadius:4,background:(m.pass_rate||0)>=.5?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:(m.pass_rate||0)>=.5?"var(--success)":"var(--error)",fontWeight:500},children:[m.runs_passed,"/",m.runs_completed," runs (",((m.pass_rate||0)*100).toFixed(0),"%)"]}),C>0&&o.jsxs("span",{style:{color:"var(--error)"},children:[C," failed"]}),C>0&&W>0&&" · ",W>0&&o.jsxs("span",{style:{color:"var(--success)"},children:[W," passed"]})]})]}),o.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[m.session_id&&o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:L=>{L.stopPropagation(),f(m.session_id)},title:"View session in Run panel",children:[o.jsx(t1,{size:12})," View Session"]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:m.duration_ms?`${(m.duration_ms/1e3).toFixed(2)}s`:""})]})]}),o.jsxs("div",{className:"result-case-details",children:[(_==null?void 0:_.length)>0&&o.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:8},children:[_.map((L,B)=>{const $=Es(L.metric,L.score,L.threshold);return o.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:L.error?"rgba(255, 193, 7, 0.1)":L.passed?"rgba(var(--success-rgb), 0.05)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${L.error?"var(--warning)":L.passed?"var(--border-color)":"var(--error)"}`,display:"flex",flexDirection:"column",alignItems:"center",minWidth:80},children:[o.jsx("span",{style:{fontSize:10,color:"var(--text-secondary)",textAlign:"center",marginBottom:2},children:L.metric.replace(/_/g," ").replace("v1","").replace("v2","").trim()}),L.error?o.jsx("span",{style:{fontSize:10,color:"var(--warning)"},children:"Error"}):o.jsxs(o.Fragment,{children:[o.jsx("span",{style:{fontSize:14,fontWeight:600,color:L.passed?"var(--success)":"var(--error)"},children:$.value}),o.jsx("span",{style:{fontSize:9,color:"var(--text-muted)"},children:$.comparison})]})]},B)}),!x&&v.length>0&&o.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"var(--bg-tertiary)",border:"1px dashed var(--border-color)",display:"flex",alignItems:"center",fontSize:11,color:"var(--text-muted)"},children:["+",v.length," passed"]})]}),_==null?void 0:_.filter(L=>!L.passed&&L.rationale).map((L,B)=>o.jsxs("div",{style:{marginTop:8,padding:"8px 12px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:12},children:[o.jsxs("div",{style:{fontWeight:500,marginBottom:4,color:"var(--error)",fontSize:11},children:[L.metric.replace(/_/g," ")," - Why it failed:"]}),o.jsx("div",{style:{whiteSpace:"pre-wrap",color:"var(--text-secondary)",lineHeight:1.4},children:L.rationale})]},`rationale-${B}`)),(A==null?void 0:A.length)>0&&o.jsxs("div",{style:{marginTop:8},children:[o.jsx("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:4},children:"Custom Rubrics"}),A.map((L,B)=>o.jsxs("div",{style:{marginBottom:L.rationale&&!L.passed?8:4},children:[o.jsxs("div",{className:"metric-row",children:[o.jsx("span",{className:"metric-name",style:{flex:1},children:L.rubric}),o.jsx("span",{className:`metric-value ${L.passed?"passed":"failed"}`,children:L.passed?"✓ Pass":"✗ Fail"})]}),!L.passed&&L.rationale&&o.jsxs("div",{style:{marginTop:4,marginLeft:8,padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:11,color:"var(--text-secondary)"},children:[o.jsx("strong",{style:{color:"var(--error)"},children:"Why:"})," ",L.rationale]}),L.error&&o.jsxs("div",{style:{marginTop:4,marginLeft:8,fontSize:11,color:"var(--warning)"},children:["Error: ",L.error]})]},B)),!x&&T.length>0&&o.jsxs("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:["+",T.length," passed rubric",T.length>1?"s":""]})]}),x&&(m.num_runs||1)>1&&m.run_results&&m.run_results.length>0&&o.jsxs("div",{style:{marginTop:12,marginBottom:12},children:[o.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:8},children:["Individual Run Results (",m.runs_passed,"/",m.runs_completed," passed)"]}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:m.run_results.map((L,B)=>o.jsxs("div",{style:{padding:"4px 10px",borderRadius:"var(--radius-sm)",background:L.error?"rgba(255, 193, 7, 0.15)":L.passed?"rgba(var(--success-rgb), 0.1)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${L.error?"var(--warning)":L.passed?"var(--success)":"var(--error)"}`,fontSize:11,display:"flex",alignItems:"center",gap:6},title:L.error||`Run ${L.run_number}: ${L.passed?"Passed":"Failed"} (${(L.duration_ms/1e3).toFixed(2)}s)`,children:[L.error?o.jsx(Is,{size:12,style:{color:"var(--warning)"}}):L.passed?o.jsx(jn,{size:12,style:{color:"var(--success)"}}):o.jsx(Nr,{size:12,style:{color:"var(--error)"}}),o.jsxs("span",{style:{color:L.error?"var(--warning)":L.passed?"var(--success)":"var(--error)"},children:["Run ",L.run_number]}),o.jsxs("span",{style:{color:"var(--text-muted)",fontSize:10},children:[(L.duration_ms/1e3).toFixed(1),"s"]})]},B))})]}),(E==null?void 0:E.length)>0&&o.jsxs("div",{className:"invocation-summary",children:[o.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:8},children:["Invocations (",E.length,!x&&((O=m.invocation_results)==null?void 0:O.length)>E.length?` of ${m.invocation_results.length}`:"",")"]}),E.map((L,B)=>o.jsxs("div",{className:"invocation-item",children:[o.jsxs("div",{className:"invocation-query",children:["Turn ",L.invocation_id||B+1,": ",L.user_message||"(no message)"]}),L.actual_response&&o.jsxs("div",{className:"invocation-response",children:["Response: ",L.actual_response.substring(0,200),L.actual_response.length>200?"...":""]})]},B))]}),m.error&&o.jsx("div",{style:{marginTop:12,padding:12,background:"rgba(255, 107, 107, 0.1)",borderRadius:"var(--radius-sm)",color:"var(--error)",fontSize:12,whiteSpace:"pre-wrap"},children:m.error})]})]},k)}),l.length===0&&o.jsx("div",{style:{textAlign:"center",padding:32,color:"var(--text-secondary)"},children:"No test cases in this run"})]})]})}function cL({evalCase:e,evalSetId:t,projectId:n,result:r,isRunning:i,onUpdate:s,onDelete:a,onRun:l,onClearResult:c}){var T,_,A;const{project:u}=St(),[d,p]=w.useState(e),[f,h]=w.useState("assertions");w.useEffect(()=>{p(e)},[e.id]);const m=w.useCallback(E=>{p(W=>({...W,...E})),s(E)},[s]),b=()=>{const E={id:ow(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]};m({invocations:[...d.invocations,E]})},k=(E,W)=>{const C=[...d.invocations];C[E]={...C[E],...W},m({invocations:C})},x=E=>{m({invocations:d.invocations.filter((W,C)=>C!==E)})},y=E=>{const W=[...d.invocations];W[E]={...W[E],expected_tool_calls:[...W[E].expected_tool_calls,{name:"",args:{},args_match_mode:"subset"}]},m({invocations:W})},v=(E,W,C)=>{const R=[...d.invocations],H=[...R[E].expected_tool_calls];H[W]={...H[W],...C},R[E]={...R[E],expected_tool_calls:H},m({invocations:R})},j=(E,W)=>{const C=[...d.invocations];C[E]={...C[E],expected_tool_calls:C[E].expected_tool_calls.filter((R,H)=>H!==W)},m({invocations:C})};return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(bl,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("input",{type:"text",value:d.name,onChange:E=>m({name:E.target.value}),placeholder:"Test case name"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const E=`${window.location.origin}/project/${n}/evaluate?set=${t}&case=${e.id}`;navigator.clipboard.writeText(E)},title:"Copy link to this test case",children:o.jsx(of,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:i,children:[i?o.jsx(Zi,{size:14,className:"spinning"}):o.jsx(Cr,{size:14}),"Run"]}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:o.jsx(Je,{size:14})})]}),o.jsxs("div",{className:"tabs",children:[o.jsxs("div",{className:`tab ${f==="assertions"?"active":""}`,onClick:()=>h("assertions"),children:[o.jsx(wl,{size:14,style:{marginRight:6}}),"Assertions (",d.invocations.length,")"]}),o.jsxs("div",{className:`tab ${f==="rubrics"?"active":""}`,onClick:()=>h("rubrics"),children:[o.jsx(sf,{size:14,style:{marginRight:6}}),"LLM Judges"]}),o.jsxs("div",{className:`tab ${f==="docs"?"active":""}`,onClick:()=>h("docs"),children:[o.jsx(Xi,{size:14,style:{marginRight:6}}),"Docs"]}),o.jsxs("div",{className:`tab ${f==="json"?"active":""}`,onClick:()=>h("json"),children:[o.jsx(Rn,{size:14,style:{marginRight:6}}),"JSON"]})]}),o.jsxs("div",{className:"editor-content",children:[f==="assertions"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:{display:"flex",gap:12,marginBottom:12},children:[o.jsxs("div",{style:{flex:1},children:[o.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"target_agent"}),o.jsxs("select",{value:d.target_agent||"",onChange:E=>m({target_agent:E.target.value||void 0}),style:{width:"100%"},children:[o.jsx("option",{value:"",children:"root_agent"}),(T=u==null?void 0:u.agents)==null?void 0:T.map(E=>o.jsx("option",{value:E.name,children:E.name},E.name))]})]}),o.jsxs("div",{style:{flex:1},children:[o.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"tags"}),o.jsx("input",{type:"text",value:d.tags.join(", "),onChange:E=>m({tags:E.target.value.split(",").map(W=>W.trim()).filter(Boolean)}),placeholder:"smoke, regression",style:{width:"100%"}})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("textarea",{value:d.description,onChange:E=>m({description:E.target.value}),placeholder:"What does this test verify?",style:{minHeight:40}})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:["session_input ",o.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(initial state)"})]}),o.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:o.jsx(cn,{height:"100%",defaultLanguage:"json",value:(()=>{var W;if((!d.initial_state||Object.keys(d.initial_state).length===0)&&((W=u==null?void 0:u.app)!=null&&W.state_keys)&&u.app.state_keys.length>0){const C={};return u.app.state_keys.forEach(R=>{R.default_value!==void 0?C[R.name]=R.default_value:C[R.name]=R.type==="string"?"":R.type==="number"?0:R.type==="boolean"?!1:R.type==="array"?[]:{}}),JSON.stringify(C,null,2)}return JSON.stringify(d.initial_state,null,2)})(),onChange:E=>{try{E&&m({initial_state:JSON.parse(E)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(wl,{size:14}),"Conversation Turns"]}),d.invocations.map((E,W)=>o.jsxs("div",{className:"invocation-card",children:[o.jsxs("div",{className:"invocation-number",children:[o.jsx("span",{children:W+1}),d.invocations.length>1&&o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>x(W),style:{padding:4},children:o.jsx(Je,{size:10})})]}),o.jsxs("div",{className:"invocation-content",children:[o.jsxs("div",{className:"invocation-row",children:[o.jsxs("div",{className:"form-section",children:[o.jsx("label",{children:"User Query"}),o.jsx("textarea",{value:E.user_message,onChange:C=>k(W,{user_message:C.target.value}),placeholder:"The message to send to the agent..."})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("label",{children:["Expected Response ",o.jsx("span",{style:{color:"var(--text-muted)",fontWeight:400},children:"(ROUGE-1)"})]}),o.jsx("textarea",{value:E.expected_response||"",onChange:C=>k(W,{expected_response:C.target.value||void 0}),placeholder:"Expected text (partial match)..."})]})]}),E.expected_tool_calls.map((C,R)=>o.jsxs("div",{className:"tool-call-compact",children:[o.jsx("input",{type:"text",value:C.name,onChange:H=>v(W,R,{name:H.target.value}),placeholder:"tool_name",className:"tool-name-input"}),o.jsxs("div",{className:"pillbox-toggle",children:[o.jsx("button",{className:`pill ${C.args_match_mode==="subset"?"active":""}`,onClick:()=>v(W,R,{args_match_mode:"subset"}),children:"Partial"}),o.jsx("button",{className:`pill ${C.args_match_mode==="exact"?"active":""}`,onClick:()=>v(W,R,{args_match_mode:"exact"}),children:"Exact"})]}),o.jsx("div",{className:"tool-args-editor",children:o.jsx(cn,{height:"22px",defaultLanguage:"json",value:JSON.stringify(C.args||{}),onChange:H=>{try{H&&v(W,R,{args:JSON.parse(H)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,wordWrap:"off",scrollbar:{vertical:"hidden",horizontal:"hidden"},overviewRulerLanes:0,hideCursorInOverviewRuler:!0,overviewRulerBorder:!1,renderLineHighlight:"none",fontSize:11,padding:{top:3,bottom:3},automaticLayout:!0}})}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>j(W,R),style:{padding:"4px 6px"},children:o.jsx(Je,{size:10})})]},R)),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>y(W),style:{marginTop:4},children:[o.jsx(it,{size:12})," Assert Tool Call"]})]})]},E.id)),o.jsxs("button",{className:"btn btn-secondary",onClick:b,children:[o.jsx(it,{size:14})," Add Turn"]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(jn,{size:14,style:{marginRight:6}}),"final_session_state ",o.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(optional)"})]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Assert that session state contains these key-value pairs after all turns complete."}),o.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:o.jsx(cn,{height:"100%",defaultLanguage:"json",value:d.expected_final_state?JSON.stringify(d.expected_final_state,null,2):"{}",onChange:E=>{if(!E||E==="{}")m({expected_final_state:void 0});else try{m({expected_final_state:JSON.parse(E)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]})]}),f==="rubrics"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"form-section",style:{marginBottom:16},children:[{metric:"safety_v1",label:"safety_v1",default:.8,max:1},{metric:"hallucinations_v1",label:"hallucinations_v1",default:.8,max:1},{metric:"response_evaluation_score",label:"response_evaluation_score",default:3.5,max:5},{metric:"final_response_match_v2",label:"final_response_match_v2",default:.7,max:1}].map(({metric:E,label:W,default:C,max:R})=>{const H=(d.enabled_metrics||[]).find(M=>M.metric===E),Q=(H==null?void 0:H.threshold)??C;return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:!!H,onChange:M=>{const F=[...d.enabled_metrics||[]];if(M.target.checked)F.push({metric:E,threshold:C});else{const O=F.findIndex(L=>L.metric===E);O!==-1&&F.splice(O,1)}m({enabled_metrics:F})}}),o.jsx("span",{className:"toggle-slider"})]}),o.jsx("span",{style:{fontSize:12,opacity:H?1:.5,minWidth:100},children:W}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:H?1:.4},children:"≥"}),o.jsx("input",{type:"number",min:R===5?1:0,max:R,step:.1,value:Q,disabled:!H,onChange:M=>{const F=[...d.enabled_metrics||[]],O=F.findIndex(L=>L.metric===E);O!==-1&&(F[O]={...F[O],threshold:parseFloat(M.target.value)||0},m({enabled_metrics:F}))},style:{width:60,textAlign:"center",opacity:H?1:.3,padding:"2px 4px",fontSize:11}})]},E)})}),o.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--border-color)",margin:"16px 0"}}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Custom Rubrics"}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Natural language criteria evaluated by an LLM judge. Returns pass/fail per rubric."}),d.rubrics.map((E,W)=>o.jsxs("div",{className:"tool-call-row",style:{marginBottom:8},children:[o.jsx("input",{type:"text",value:E.rubric,onChange:C=>{const R=[...d.rubrics];R[W]={rubric:C.target.value},m({rubrics:R})},placeholder:"e.g., The response mentions the return policy",style:{flex:1}}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>m({rubrics:d.rubrics.filter((C,R)=>R!==W)}),children:o.jsx(Je,{size:12})})]},W)),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>m({rubrics:[...d.rubrics,{rubric:""}]}),children:[o.jsx(it,{size:12})," Add Rubric"]})]})]}),f==="docs"&&o.jsxs("div",{style:{fontSize:13,lineHeight:1.6,color:"var(--text-secondary)",overflowY:"auto",maxHeight:"100%"},children:[o.jsx("h3",{style:{marginBottom:16,color:"var(--text-primary)"},children:"Evaluation Test Case Guide"}),o.jsxs("section",{style:{marginBottom:24,padding:12,background:"rgba(var(--accent-primary-rgb), 0.1)",borderRadius:"var(--radius-md)",border:"1px solid var(--accent-primary)"},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Quick Overview"}),o.jsxs("p",{children:["Each test case simulates a ",o.jsx("strong",{children:"multi-turn conversation"})," with an agent. For each turn (invocation), you provide a user message and define what you expect the agent to do."]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Invocations"})," = conversation turns (user messages)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Expected Response"})," = the agent's ",o.jsx("em",{children:"final text reply"})," for that turn"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Expected Tool Calls"})," = tools the agent should invoke during that turn"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Session State"})," = test the ",o.jsx("em",{children:"final state"})," after ALL turns complete"]})]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:'📝 What is "Expected Response"?'}),o.jsxs("p",{children:["The ",o.jsx("strong",{children:"Expected Response"})," is matched against the agent's ",o.jsx("strong",{children:"final response"})," for that specific turn — NOT every message."]}),o.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[o.jsx("p",{style:{marginBottom:8},children:o.jsx("strong",{children:"During one turn, an agent may:"})}),o.jsxs("ul",{style:{marginLeft:20,marginBottom:12},children:[o.jsx("li",{children:"Send intermediate thinking/reasoning messages"}),o.jsx("li",{children:"Call multiple tools"}),o.jsx("li",{children:"Transfer to sub-agents (who may respond)"}),o.jsxs("li",{children:["Finally send a ",o.jsx("em",{children:"concluding response"})]})]}),o.jsxs("p",{children:["Only the ",o.jsx("strong",{children:"last text response"})," from the agent for that turn is compared against your Expected Response."]})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Tip: If you need to verify intermediate steps, use Tool Trajectory matching or custom Rubrics."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🔄 Response Matching (ROUGE-1)"}),o.jsxs("p",{children:["The ",o.jsx("code",{children:"response_match_score"})," uses ",o.jsx("strong",{children:"ROUGE-1 F1 scoring"})," — fuzzy word-level matching:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:"Tokenizes both expected and actual responses into words"}),o.jsx("li",{children:"Calculates word overlap (not exact string match)"}),o.jsx("li",{children:"Returns a score from 0.0 to 1.0"})]}),o.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[o.jsx("p",{children:o.jsx("strong",{children:"Example:"})}),o.jsxs("p",{children:["Expected: ",o.jsx("code",{children:'"The weather in Paris is sunny today"'})]}),o.jsxs("p",{children:["Actual: ",o.jsx("code",{children:'"Today in Paris, expect sunny weather"'})]}),o.jsx("p",{style:{marginTop:8,color:"var(--success)"},children:"✓ High ROUGE-1 score (same words, different order)"})]}),o.jsxs("p",{style:{marginTop:8},children:["A threshold of ",o.jsx("strong",{children:"0.7"})," means 70% word overlap is required to pass."]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🛠️ Tool Trajectory Matching"}),o.jsxs("p",{children:["The ",o.jsx("code",{children:"tool_trajectory_avg_score"})," verifies the agent called expected tools. Match types:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Exact"})," — Same tools in same order, no extras allowed"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"In Order"})," — Expected tools appear in order, extras allowed between"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Any Order"})," — All expected tools present, any order, extras allowed"]})]}),o.jsx("p",{style:{marginTop:8},children:"For each tool, you can match by:"}),o.jsxs("ul",{style:{marginLeft:20,marginTop:4},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Name Only"})," — Just check the tool was called"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Exact Args"})," — Arguments must match exactly (provide JSON)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Args Subset"})," — Your expected args must be present in actual args"]})]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💾 Session State Testing"}),o.jsxs("p",{children:[o.jsx("strong",{children:"Initial State"})," (Settings tab) — Pre-populate session state before running the test:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:"Set user preferences or context"}),o.jsx("li",{children:"Simulate a specific scenario"}),o.jsx("li",{children:"Test state-dependent behavior"})]}),o.jsxs("p",{style:{marginTop:12},children:[o.jsx("strong",{children:"Expected Final State"})," — Verified at the ",o.jsx("em",{children:"very end"})," of the test case, ",o.jsx("strong",{children:"after ALL invocations complete"}),"."]}),o.jsx("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8,borderLeft:"3px solid var(--warning)"},children:o.jsxs("p",{style:{margin:0},children:[o.jsx("strong",{children:"Important:"})," State is tested once after the entire conversation, NOT after each turn. To test state changes per-turn, use separate test cases."]})})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Target Agent (Settings tab)"}),o.jsxs("p",{children:["By default, tests run against the ",o.jsx("strong",{children:"root_agent"})," of your App. You can select a specific sub-agent to test in isolation:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"root_agent"})," — Test the full agent hierarchy (default)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Specific agent"})," — Unit test individual agents"]})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Useful for testing sub-agents independently before integrating into the full system."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📋 Custom Rubrics"}),o.jsx("p",{children:"Rubrics are custom yes/no criteria evaluated by an LLM judge. Examples:"}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:'"Does the response mention the product price?"'}),o.jsx("li",{children:'"Is the tone professional and helpful?"'}),o.jsx("li",{children:'"Does the response avoid mentioning competitors?"'})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Note: Rubric evaluation requires LLM-judged metrics to be enabled in the Eval Set."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📊 Available Metrics"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Metric"}),o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Type"}),o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Description"})]})}),o.jsx("tbody",{children:Object.keys(Mn).map(E=>o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("td",{style:{padding:"8px 4px",fontFamily:"var(--font-mono)",fontSize:11},children:E}),o.jsx("td",{style:{padding:"8px 4px"},children:Mn[E].requiresJudge?o.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--accent-primary)",color:"white",borderRadius:4},children:"LLM Judge"}):o.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--bg-tertiary)",borderRadius:4},children:"Built-in"})}),o.jsx("td",{style:{padding:"8px 4px",color:"var(--text-muted)"},children:Mn[E].description})]},E))})]})]}),o.jsxs("section",{children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💡 Tips"}),o.jsxs("ul",{style:{marginLeft:20},children:[o.jsx("li",{children:"Start with simple single-turn tests, then add complexity"}),o.jsx("li",{children:'Use "In Order" matching for most tool trajectory tests'}),o.jsx("li",{children:"Lower ROUGE thresholds (0.5-0.6) for creative/varied responses"}),o.jsx("li",{children:"Higher thresholds (0.8-0.9) for factual/precise responses"}),o.jsx("li",{children:"Use tags to organize tests by feature or priority"}),o.jsx("li",{children:"Test sub-agents individually using Target Agent selector"})]})]})]}),f==="json"&&o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[o.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:o.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this test case. You can use this with ",o.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval"}),"."]})}),o.jsx("div",{style:{flex:1,minHeight:300,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:o.jsx(cn,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify({name:d.name,description:d.description||void 0,tags:(_=d.tags)!=null&&_.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(E=>{var W;return{user_message:E.user_message,expected_response:E.expected_response||void 0,expected_tool_calls:(W=E.expected_tool_calls)!=null&&W.length?E.expected_tool_calls.map(C=>({tool_name:C.tool_name,args:C.match_type!=="name_only"&&Object.keys(C.args||{}).length?C.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(A=d.rubrics)!=null&&A.length?d.rubrics.map(E=>E.rubric):void 0},null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),o.jsx("div",{style:{display:"flex",gap:8},children:o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var W,C;const E=JSON.stringify({name:d.name,description:d.description||void 0,tags:(W=d.tags)!=null&&W.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(R=>{var H;return{user_message:R.user_message,expected_response:R.expected_response||void 0,expected_tool_calls:(H=R.expected_tool_calls)!=null&&H.length?R.expected_tool_calls.map(Q=>({tool_name:Q.tool_name,args:Q.match_type!=="name_only"&&Object.keys(Q.args||{}).length?Q.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(C=d.rubrics)!=null&&C.length?d.rubrics.map(R=>R.rubric):void 0},null,2);navigator.clipboard.writeText(E)},children:[o.jsx(ii,{size:14})," Copy JSON"]})})]})]}),r&&o.jsxs("div",{className:"result-panel",children:[o.jsxs("div",{className:`result-header ${r.passed?"passed":"failed"}`,children:[r.passed?o.jsxs(o.Fragment,{children:[o.jsx(jn,{size:18})," ",o.jsx("strong",{children:"Passed"})]}):o.jsxs(o.Fragment,{children:[o.jsx(Nr,{size:18})," ",o.jsx("strong",{children:"Failed"})]}),o.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:12},children:[r.total_tokens?o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},title:"Total tokens used",children:[r.total_tokens.toLocaleString()," tokens"]}):null,o.jsxs("span",{style:{color:"var(--text-muted)",fontSize:12},children:[r.duration_ms.toFixed(0),"ms"]}),r.session_id&&o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{window.location.href=`/project/${u==null?void 0:u.id}/run?session=${r.session_id}`},title:"View this session in the Run panel",style:{fontSize:11},children:[o.jsx(t1,{size:12}),"View Session"]}),c&&o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Close test results",style:{fontSize:11,padding:"4px 8px"},children:"✕"})]})]}),o.jsx("div",{className:"result-scores",children:r.metric_results.map((E,W)=>{var R;const C=Es(E.metric,E.score,E.threshold);return o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:`score-value ${E.passed?"passed":"failed"}`,children:C.value}),o.jsx("div",{className:"score-label",children:((R=Mn[E.metric])==null?void 0:R.name)||E.metric}),o.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",marginTop:2},children:C.comparison}),E.error&&o.jsx("div",{style:{fontSize:10,color:"var(--error)",marginTop:4},children:E.error})]},W)})}),r.rubric_results&&r.rubric_results.length>0&&o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Custom Rubrics"}),o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:r.rubric_results.map((E,W)=>o.jsxs("div",{style:{padding:"8px 12px",borderRadius:"var(--radius-sm)",background:E.passed?"rgba(var(--success-rgb), 0.1)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${E.passed?"var(--success)":"var(--error)"}`,display:"flex",alignItems:"center",gap:10},children:[o.jsx("span",{style:{fontSize:16,color:E.passed?"var(--success)":"var(--error)",fontWeight:"bold"},children:E.passed?"✓":"✗"}),o.jsxs("div",{style:{flex:1},children:[o.jsx("div",{style:{fontSize:12,color:"var(--text-primary)"},children:E.rubric}),E.error&&o.jsxs("div",{style:{fontSize:10,color:"var(--error)",marginTop:2},children:["Error: ",E.error]})]})]},W))})]}),r.invocation_results.map((E,W)=>o.jsxs("div",{className:"result-details",children:[o.jsxs("h5",{children:["Turn ",W+1,": ",E.user_message.length>50?E.user_message.slice(0,50)+"…":E.user_message]}),E.metric_results.length>0&&o.jsx("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:E.metric_results.map((C,R)=>{var Q;const H=Es(C.metric,C.score,C.threshold);return o.jsxs("span",{style:{fontSize:11,padding:"2px 6px",borderRadius:"var(--radius-sm)",background:C.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:C.passed?"var(--success)":"var(--error)"},children:[((Q=Mn[C.metric])==null?void 0:Q.name)||C.metric,": ",H.value]},R)})}),o.jsxs("div",{className:"detail-box",children:[o.jsx("strong",{children:"Actual Response:"}),`
`,E.actual_response||"(no response)",`

`,E.actual_tool_calls.length>0&&o.jsxs(o.Fragment,{children:[o.jsx("strong",{children:"Tool Calls:"}),`
`,E.actual_tool_calls.map((C,R)=>`  ${R+1}. ${C.name}(${JSON.stringify(C.args)})
`).join("")]})]})]},W)),r.error&&o.jsxs("div",{className:"result-details",children:[o.jsx("h5",{style:{color:"var(--error)"},children:"Error"}),o.jsx("div",{className:"detail-box",style:{color:"var(--error)"},children:r.error})]})]})]})}function uL({evalSet:e,projectId:t,result:n,isRunning:r,caseResults:i,onUpdate:s,onDelete:a,onRun:l,onExport:c}){var b,k,x,y;const[u,d]=w.useState(e.name),[p,f]=w.useState(!1);w.useEffect(()=>{d(e.name)},[e.id]);const h=w.useCallback(()=>{u!==e.name&&s({name:u})},[u,e.name,s]),m=v=>v==null?"-":`${Math.round(v*100)}%`;return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(i1,{size:20,style:{color:"var(--accent-secondary)"}}),o.jsx("input",{type:"text",value:u,onChange:v=>d(v.target.value),onBlur:h,placeholder:"Eval set name"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const v=`${window.location.origin}/project/${t}/evaluate?set=${e.id}`;navigator.clipboard.writeText(v)},title:"Copy link to this eval set",children:o.jsx(of,{size:14})}),o.jsxs("button",{className:`btn btn-sm ${p?"btn-primary":"btn-secondary"}`,onClick:()=>f(!p),title:"View/Hide JSON",children:[o.jsx(Rn,{size:14}),"JSON"]}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Export as JSON (compatible with adk eval)",children:o.jsx(co,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:r,children:[r?o.jsx(Zi,{size:14,className:"spinning"}):o.jsx(Cr,{size:14}),"Run All"]}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:o.jsx(Je,{size:14})})]}),o.jsx("div",{className:"editor-content",children:p?o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[o.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:o.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this evaluation set. Save this file and use with ",o.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval <agent_path> <eval_file.json>"})]})}),o.jsx("div",{style:{flex:1,minHeight:400,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:o.jsx(cn,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(v=>{var j,T;return{name:v.name,description:v.description||void 0,tags:(j=v.tags)!=null&&j.length?v.tags:void 0,target_agent:v.target_agent!=="root_agent"?v.target_agent:void 0,invocations:v.invocations.map(_=>{var A;return{user_message:_.user_message,expected_response:_.expected_response||void 0,expected_tool_calls:(A=_.expected_tool_calls)!=null&&A.length?_.expected_tool_calls.map(E=>({tool_name:E.tool_name,args:E.match_type!=="name_only"&&Object.keys(E.args||{}).length?E.args:void 0})):void 0}}),session_input:Object.keys(v.session_input||{}).length?{state:v.session_input}:void 0,final_session_state:Object.keys(v.final_session_state||{}).length?v.final_session_state:void 0,rubrics:(T=v.rubrics)!=null&&T.length?v.rubrics.map(_=>_.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((b=e.eval_config.metrics)==null?void 0:b.filter(v=>v.enabled))||void 0}:void 0}],null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),o.jsx("div",{style:{display:"flex",gap:8},children:o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var j;const v=JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(T=>{var _,A;return{name:T.name,description:T.description||void 0,tags:(_=T.tags)!=null&&_.length?T.tags:void 0,target_agent:T.target_agent!=="root_agent"?T.target_agent:void 0,invocations:T.invocations.map(E=>{var W;return{user_message:E.user_message,expected_response:E.expected_response||void 0,expected_tool_calls:(W=E.expected_tool_calls)!=null&&W.length?E.expected_tool_calls.map(C=>({tool_name:C.tool_name,args:C.match_type!=="name_only"&&Object.keys(C.args||{}).length?C.args:void 0})):void 0}}),session_input:Object.keys(T.session_input||{}).length?{state:T.session_input}:void 0,final_session_state:Object.keys(T.final_session_state||{}).length?T.final_session_state:void 0,rubrics:(A=T.rubrics)!=null&&A.length?T.rubrics.map(E=>E.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((j=e.eval_config.metrics)==null?void 0:j.filter(T=>T.enabled))||void 0}:void 0}],null,2);navigator.clipboard.writeText(v)},children:[o.jsx(ii,{size:14})," Copy JSON"]})})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("textarea",{value:e.description,onChange:v=>s({description:v.target.value}),placeholder:"Description of this evaluation set...",style:{minHeight:40}})]}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"LLM Judge Model"}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Model used for LLM-judged metrics (safety, hallucinations, etc.)."}),o.jsx(aL,{value:((k=e.eval_config)==null?void 0:k.judge_model)||"",onChange:v=>s({eval_config:{...e.eval_config,judge_model:v}})})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(l1,{size:14})," Evaluation Metrics"]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Configure which metrics to use and their pass thresholds."}),Object.keys(Mn).map(v=>{var E,W,C;const j=Mn[v],T=(W=(E=e.eval_config)==null?void 0:E.metrics)==null?void 0:W.find(R=>R.metric===v),_=(T==null?void 0:T.enabled)??!1,A=((C=T==null?void 0:T.criterion)==null?void 0:C.threshold)??.7;return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:_,onChange:R=>{var M;const H=[...((M=e.eval_config)==null?void 0:M.metrics)||[]],Q=H.findIndex(F=>F.metric===v);R.target.checked?Q===-1?H.push({metric:v,enabled:!0,criterion:{threshold:.7}}):H[Q]={...H[Q],enabled:!0}:Q!==-1&&(H[Q]={...H[Q],enabled:!1}),s({eval_config:{...e.eval_config,metrics:H}})}}),o.jsx("span",{className:"toggle-slider"})]}),o.jsxs("span",{style:{fontSize:12,opacity:_?1:.5,minWidth:140,fontWeight:_?500:400},children:[j.name,j.requiresJudge&&o.jsx("span",{style:{fontSize:9,marginLeft:4,color:"var(--accent-primary)"},children:"LLM"})]}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:_?1:.4},children:"≥"}),o.jsx("input",{type:"number",min:0,max:1,step:.1,value:A,disabled:!_,onChange:R=>{var M;const H=[...((M=e.eval_config)==null?void 0:M.metrics)||[]],Q=H.findIndex(F=>F.metric===v);Q!==-1&&(H[Q]={...H[Q],criterion:{...H[Q].criterion,threshold:parseFloat(R.target.value)||.7}},s({eval_config:{...e.eval_config,metrics:H}}))},style:{width:60,textAlign:"center",opacity:_?1:.3,padding:"2px 4px",fontSize:11}})]},v)}),o.jsxs("div",{className:"form-row",style:{marginTop:16},children:[o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Default Trajectory Match Type"}),o.jsxs("select",{value:((x=e.eval_config)==null?void 0:x.default_trajectory_match_type)||"in_order",onChange:v=>s({eval_config:{...e.eval_config,default_trajectory_match_type:v.target.value}}),children:[o.jsx("option",{value:"exact",children:"Exact (same order, no extras)"}),o.jsx("option",{value:"in_order",children:"In Order (extras allowed between)"}),o.jsx("option",{value:"any_order",children:"Any Order (all present, any order)"})]})]}),o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Number of Runs"}),o.jsx("input",{type:"number",min:1,max:10,value:((y=e.eval_config)==null?void 0:y.num_runs)||1,onChange:v=>s({eval_config:{...e.eval_config,num_runs:parseInt(v.target.value)||1}})}),o.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:"Run each test multiple times for statistical reliability."})]})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(Pj,{size:14})," Coverage Summary"]}),n?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"result-scores",children:[o.jsxs("div",{className:"score-card",children:[o.jsxs("div",{className:"score-value",style:{color:"var(--accent-primary)"},children:[n.passed_cases,"/",n.total_cases]}),o.jsx("div",{className:"score-label",children:"Cases Passed"})]}),o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:`score-value ${n.overall_pass_rate>=.8?"passed":"failed"}`,children:m(n.overall_pass_rate)}),o.jsx("div",{className:"score-label",children:"Pass Rate"})]}),Object.entries(n.metric_avg_scores||{}).map(([v,j])=>{var _;const T=Es(v,j);return o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:"score-value",children:T.value}),o.jsxs("div",{className:"score-label",children:["Avg ",((_=Mn[v])==null?void 0:_.name)||v]})]},v)})]}),o.jsxs("div",{style:{marginTop:16},children:[o.jsx("div",{style:{marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Overall Pass Rate"}),o.jsx("div",{className:"coverage-bar",children:o.jsx("div",{className:`coverage-fill ${n.overall_pass_rate>=.8?"passed":"failed"}`,style:{width:`${n.overall_pass_rate*100}%`}})})]}),Object.entries(n.metric_pass_rates||{}).length>0&&o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Metric Pass Rates"}),Object.entries(n.metric_pass_rates).map(([v,j])=>{var T;return o.jsxs("div",{style:{marginBottom:8},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4},children:[o.jsx("span",{children:((T=Mn[v])==null?void 0:T.name)||v}),o.jsx("span",{children:m(j)})]}),o.jsx("div",{className:"coverage-bar",children:o.jsx("div",{className:`coverage-fill ${j>=.8?"passed":"failed"}`,style:{width:`${j*100}%`}})})]},v)})]}),o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Individual Results"}),o.jsxs("table",{style:{width:"100%",fontSize:12,borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Test Case"}),o.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Metrics"}),o.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Status"})]})}),o.jsx("tbody",{children:n.case_results.map(v=>o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("td",{style:{padding:"8px 4px"},children:v.eval_case_name}),o.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:v.metric_results.map((j,T)=>{const _=Es(j.metric,j.score,j.threshold);return o.jsx("span",{style:{fontSize:10,padding:"2px 4px",marginRight:4,borderRadius:"var(--radius-sm)",background:j.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:j.passed?"var(--success)":"var(--error)"},children:_.value},T)})}),o.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:v.passed?o.jsx(jn,{size:14,style:{color:"var(--success)"}}):v.error?o.jsx(Xi,{size:14,style:{color:"var(--warning)"}}):o.jsx(Nr,{size:14,style:{color:"var(--error)"}})})]},v.eval_case_id))})]})]})]}):o.jsxs("div",{style:{textAlign:"center",padding:"32px",color:"var(--text-muted)",background:"var(--bg-tertiary)",borderRadius:"var(--radius-md)"},children:[o.jsx(sf,{size:32,style:{marginBottom:8,opacity:.3}}),o.jsx("p",{children:"Run the evaluation set to see coverage metrics"})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:["Test Cases (",e.eval_cases.length,")"]}),e.eval_cases.length===0?o.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"No test cases yet. Add cases to this eval set to start testing."}):o.jsx("ul",{style:{listStyle:"none",padding:0},children:e.eval_cases.map(v=>{const j=i.get(v.id);return o.jsxs("li",{style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",background:"var(--bg-tertiary)",borderRadius:"var(--radius-sm)",marginBottom:8},children:[j?j.passed?o.jsx(jn,{size:14,style:{color:"var(--success)"}}):o.jsx(Nr,{size:14,style:{color:"var(--error)"}}):o.jsx(bl,{size:14,style:{color:"var(--text-muted)"}}),o.jsx("span",{style:{flex:1},children:v.name}),o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},children:[v.invocations.length," turn(s)"]})]},v.id)})})]})]})})]})}function dL(){const{project:e,setProject:t}=St(),[n,r]=w.useState(""),[i,s]=w.useState(!0),[a,l]=w.useState(!1),[c,u]=w.useState(null),[d,p]=w.useState(!1);if(!e)return null;w.useEffect(()=>{f()},[e.id]);async function f(){s(!0),u(null);try{const y=await D0(e.id);r(y),l(!1)}catch(y){u(y.message)}finally{s(!1)}}function h(y){y!==void 0&&(r(y),l(!0),u(null))}async function m(){s(!0),u(null);try{const y=await F0(e.id,n);t(y),l(!1)}catch(y){u(y.message)}finally{s(!1)}}function b(){navigator.clipboard.writeText(n),p(!0),setTimeout(()=>p(!1),2e3)}function k(){const y=new Blob([n],{type:"text/yaml"}),v=URL.createObjectURL(y),j=document.createElement("a");j.href=v,j.download=`${e.name}.yaml`,j.click(),URL.revokeObjectURL(v)}function x(){const y=document.createElement("input");y.type="file",y.accept=".yaml,.yml",y.onchange=async v=>{var _;const j=(_=v.target.files)==null?void 0:_[0];if(!j)return;const T=await j.text();r(T),l(!0)},y.click()}return o.jsxs("div",{className:"yaml-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"yaml-header",children:[o.jsxs("div",{className:"yaml-title",children:[o.jsx("h3",{children:"Project Configuration"}),a&&o.jsxs("span",{className:"status-badge warning",children:[o.jsx(Xi,{size:12}),"Unsaved changes"]}),c&&o.jsxs("span",{className:"status-badge error",children:[o.jsx(Xi,{size:12}),c]}),d&&o.jsxs("span",{className:"status-badge success",children:[o.jsx(ef,{size:12}),"Copied!"]})]}),o.jsxs("div",{className:"yaml-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:b,title:"Copy to clipboard",children:[o.jsx(ii,{size:14}),"Copy"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:k,title:"Download YAML",children:[o.jsx(co,{size:14}),"Download"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:x,title:"Upload YAML",children:[o.jsx(ac,{size:14}),"Upload"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:f,title:"Reload from server",children:[o.jsx($t,{size:14}),"Reload"]}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:m,disabled:!a||i,children:"Apply Changes"})]})]}),o.jsx("div",{className:"yaml-editor",children:o.jsx(cn,{height:"100%",language:"yaml",theme:"vs-dark",value:n,onChange:h,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),o.jsxs("div",{className:"yaml-info",children:[o.jsx("p",{children:"This YAML represents your entire project configuration including the app, agents, tools, and state keys."}),o.jsxs("p",{children:["You can edit the YAML directly, then click ",o.jsx("code",{children:"Apply Changes"})," to update the project. Use ",o.jsx("code",{children:"Download"})," to save a backup or ",o.jsx("code",{children:"Upload"})," to import a configuration."]})]})]})}function pL(){const{project:e}=St(),[t,n]=w.useState(!1),[r,i]=w.useState(""),[s,a]=w.useState(!1),[l,c]=w.useState(null);if(w.useEffect(()=>{e&&(a(!0),c(null),fetch(`/api/projects/${e.id}/code`).then(p=>{if(!p.ok)throw new Error("Failed to fetch code");return p.json()}).then(p=>{let f=p.code||"";f=f.replace(/\n# --- Callback instrumentation \(for event tracking\) ---[\s\S]*?# --- End callback instrumentation ---\n/g,""),f=f.replace(/_wrap_callback\("[^"]+",\s*"[^"]+",\s*(\w+)\)/g,"$1"),i(f),a(!1)}).catch(p=>{c(p.message),a(!1),i("# Failed to generate code. Please check the backend logs.")}))},[e]),!e)return null;function u(){navigator.clipboard.writeText(r),n(!0),setTimeout(()=>n(!1),2e3)}function d(){if(!e)return;const p=new Blob([r],{type:"text/x-python"}),f=URL.createObjectURL(p),h=document.createElement("a");h.href=f,h.download=`${e.name}_agent.py`,h.click(),URL.revokeObjectURL(f)}return o.jsxs("div",{className:"code-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"code-header",children:[o.jsxs("div",{className:"code-title",children:[o.jsx(Rn,{size:16}),o.jsx("h3",{children:"Python Code"}),o.jsx("span",{className:"badge",children:s?"Loading...":"Generated"}),t&&o.jsxs("span",{className:"status-badge success",children:[o.jsx(ef,{size:12}),"Copied!"]}),l&&o.jsxs("span",{className:"status-badge error",children:[o.jsx(Xi,{size:12}),"Error"]})]}),o.jsxs("div",{className:"code-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:u,title:"Copy to clipboard",disabled:s||!!l,children:[o.jsx(ii,{size:14}),"Copy"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:d,title:"Download Python file",disabled:s||!!l,children:[o.jsx(co,{size:14}),"Download"]})]})]}),o.jsx("div",{className:"code-editor",children:s?o.jsx("div",{className:"code-loading",children:o.jsx("div",{children:"Loading generated code..."})}):l?o.jsxs("div",{className:"code-error",children:[o.jsx(Xi,{size:24}),o.jsx("div",{children:l})]}):o.jsx(cn,{height:"100%",language:"python",theme:"vs-dark",value:r,options:{readOnly:!0,minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),o.jsxs("div",{className:"code-info",children:[o.jsx("p",{children:"This is the Python code equivalent of your project configuration. You can use this code directly with ADK."}),o.jsxs("p",{children:["Place this in a file named ",o.jsx("code",{children:"agent.py"})," inside your agent directory, then run with ",o.jsx("code",{children:"adk web ."})," or ",o.jsx("code",{children:"adk run your_agent"}),"."]})]})]})}const fL=[{id:"app",label:"App",icon:l1},{id:"agents",label:"Agents",icon:Hr},{id:"tools",label:"Tools",icon:kn},{id:"callbacks",label:"Callbacks",icon:Rn},{id:"run",label:"Run",icon:o1},{id:"eval",label:"Evaluate",icon:Nd},{id:"yaml",label:"YAML",icon:Cj},{id:"code",label:"Code",icon:Rn}],hL=["app","agents","tools","callbacks","run","skillsets","eval","yaml","code"];function Cu(){var F,O;const{projectId:e,tab:t,itemId:n}=S_(),r=Qp(),{project:i,setProject:s,activeTab:a,setActiveTab:l,hasUnsavedChanges:c,setHasUnsavedChanges:u,selectedAgentId:d,setSelectedAgentId:p,selectedToolId:f,setSelectedToolId:h}=St(),[m,b]=w.useState(!0),[k,x]=w.useState(!1),[y,v]=w.useState(!1),[j,T]=w.useState(null),_=w.useRef(!0),A=w.useRef(null);w.useEffect(()=>{t&&hL.includes(t)?l(t):!t&&e&&r(`/project/${e}/${a}`,{replace:!0})},[t,e]),w.useEffect(()=>{t==="agents"&&n?p(n):t==="tools"&&n&&h(n)},[t,n]);function E(L){l(L),L==="agents"&&d?r(`/project/${e}/${L}/${d}`,{replace:!0}):L==="tools"&&f?r(`/project/${e}/${L}/${f}`,{replace:!0}):r(`/project/${e}/${L}`,{replace:!0})}function W(L){L?r(`/project/${e}/${a}/${L}`,{replace:!0}):r(`/project/${e}/${a}`,{replace:!0})}w.useEffect(()=>(e&&C(e),()=>{s(null),u(!1)}),[e]);async function C(L){_.current=!0;try{const B=await L0(L);s(B),A.current=JSON.stringify(B),u(!1)}catch(B){console.error("Failed to load project:",B),r("/")}finally{b(!1),setTimeout(()=>{_.current=!1},100)}}async function R(){if(i){x(!0);try{const{eval_sets:L,...B}=i;await kd(i.id,B),A.current=JSON.stringify(i),u(!1)}catch(L){console.error("Failed to save project:",L)}finally{x(!1)}}}async function H(){if(i){v(!0),T(null),window.dispatchEvent(new CustomEvent("eval-tests-started"));try{let L=0,B=0;const $=[],g=[];for(const P of i.eval_sets||[]){if(P.eval_cases.length===0)continue;const z=await tt.post(`/projects/${i.id}/eval-sets/${P.id}/run`,{});z.result&&(L+=z.result.passed_cases||0,B+=z.result.total_cases||0,z.result.case_results&&$.push(...z.result.case_results),g.push(z.result.eval_set_name||P.name||P.id))}if($.length>0){const P={id:Date.now().toString(36)+Math.random().toString(36).substr(2,5),eval_set_id:"batch",eval_set_name:g.length>1?`All Tests (${g.length} sets)`:g[0]||"All Tests",started_at:Date.now()/1e3,completed_at:Date.now()/1e3,total_cases:B,passed_cases:L,failed_cases:B-L,case_results:$};try{await tt.post(`/projects/${i.id}/eval-history`,P)}catch(z){console.warn("Failed to save batch eval run to history:",z)}}T({passed:L,total:B}),window.dispatchEvent(new CustomEvent("eval-tests-completed")),setTimeout(()=>T(null),5e3)}catch(L){console.error("Failed to run tests:",L),T({passed:0,total:-1}),setTimeout(()=>T(null),5e3)}finally{v(!1)}}}const Q=w.useRef(null);w.useEffect(()=>{if(i&&!_.current&&Q.current){const L=i.app.models||[],B=Q.current||[];if(L.some((g,P)=>{const z=B.find(S=>S.id===g.id);return z?z.provider!==g.provider||z.model_name!==g.model_name||z.api_base!==g.api_base||z.temperature!==g.temperature||z.max_output_tokens!==g.max_output_tokens||z.top_p!==g.top_p||z.top_k!==g.top_k:!1})){const g=i.app.default_model_id,P=i.agents.map(S=>{if(S.type==="LlmAgent"&&S.model){const D=S.model._appModelId;if(D){const Z=L.find(ne=>ne.id===D);if(Z)return{...S,model:{provider:Z.provider,model_name:Z.model_name,api_base:Z.api_base,temperature:Z.temperature,max_output_tokens:Z.max_output_tokens,top_p:Z.top_p,top_k:Z.top_k,fallbacks:[],_appModelId:D}}}else if(g){const Z=L.find(ne=>ne.id===g);if(Z&&S.model.provider===Z.provider&&S.model.model_name===Z.model_name&&S.model.api_base===Z.api_base)return{...S,model:{provider:Z.provider,model_name:Z.model_name,api_base:Z.api_base,temperature:Z.temperature,max_output_tokens:Z.max_output_tokens,top_p:Z.top_p,top_k:Z.top_k,fallbacks:[],_appModelId:g}}}}return S});P.some((S,D)=>JSON.stringify(S)!==JSON.stringify(i.agents[D]))&&s({...i,agents:P})}}i&&(Q.current=i.app.models||[])},[i==null?void 0:i.app.models,i,s]);const M=w.useRef(null);return w.useEffect(()=>(i&&!_.current&&A.current&&JSON.stringify(i)!==A.current&&(u(!0),M.current&&clearTimeout(M.current),M.current=setTimeout(async()=>{try{const{eval_sets:B,...$}=i;await kd(i.id,$),A.current=JSON.stringify(i),u(!1)}catch(B){console.error("Auto-save failed:",B)}},500)),()=>{M.current&&clearTimeout(M.current)}),[i]),m?o.jsxs("div",{className:"loading-screen",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("header",{className:"top-bar",children:[o.jsxs("div",{className:"top-bar-left",children:[o.jsxs("button",{className:"back-btn",onClick:()=>r("/"),children:[o.jsx(_j,{size:18}),"Project"]}),o.jsx("h1",{className:"project-name",children:i.name})]}),o.jsx("nav",{className:"tabs-bar",children:fL.map(L=>o.jsxs("button",{className:`tab-btn ${a===L.id?"active":""}`,onClick:()=>E(L.id),children:[o.jsx(L.icon,{size:14}),L.label]},L.id))}),o.jsxs("div",{className:"top-bar-right",children:[o.jsxs("button",{className:`btn ${j?j.total===-1?"btn-error":j.passed===j.total?"btn-success":"btn-warning":"btn-secondary"}`,onClick:H,disabled:y||!((F=i==null?void 0:i.eval_sets)!=null&&F.some(L=>L.eval_cases.length>0)),title:(O=i==null?void 0:i.eval_sets)!=null&&O.some(L=>L.eval_cases.length>0)?"Run all evaluation tests":"No test cases defined",style:{marginRight:8},children:[y?o.jsx(s1,{size:16,className:"spin"}):o.jsx(Cr,{size:16}),y?"Testing...":j?j.total===-1?"Error":`${j.passed}/${j.total}`:"Test"]}),o.jsxs("button",{className:"btn btn-primary",onClick:R,disabled:k,children:[o.jsx(kl,{size:16}),k?"Saving...":"Save"]})]})]}),o.jsxs("main",{className:"main-content",children:[a==="app"&&o.jsx(qj,{}),a==="agents"&&o.jsx(Xz,{onSelectAgent:W}),a==="tools"&&o.jsx(AT,{onSelectTool:W}),a==="callbacks"&&o.jsx(PT,{onSelectCallback:W}),a==="run"&&o.jsx(tL,{}),a==="skillsets"&&o.jsx(iL,{}),a==="eval"&&o.jsx(sL,{}),a==="yaml"&&o.jsx(dL,{}),a==="code"&&o.jsx(pL,{})]})]}):null}function mL(){const{setMcpServers:e,setBuiltinTools:t}=St();return w.useEffect(()=>{Zp().then(e).catch(console.error),B0().then(t).catch(console.error)},[e,t]),o.jsxs(U_,{children:[o.jsx(xi,{path:"/",element:o.jsx(Dj,{})}),o.jsx(xi,{path:"/project/:projectId",element:o.jsx(Cu,{})}),o.jsx(xi,{path:"/project/:projectId/:tab",element:o.jsx(Cu,{})}),o.jsx(xi,{path:"/project/:projectId/:tab/:itemId",element:o.jsx(Cu,{})}),o.jsx(xi,{path:"*",element:o.jsx(F_,{to:"/",replace:!0})})]})}Nu.createRoot(document.getElementById("root")).render(o.jsx(Xt.StrictMode,{children:o.jsx(V_,{children:o.jsx(mL,{})})}));
