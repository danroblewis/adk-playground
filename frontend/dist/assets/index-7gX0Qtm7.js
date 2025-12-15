function jy(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in e)){const o=Object.getOwnPropertyDescriptor(r,s);o&&Object.defineProperty(e,s,o.get?o:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();var uo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Vo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var tm={exports:{}},Ho={},nm={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ps=Symbol.for("react.element"),wy=Symbol.for("react.portal"),_y=Symbol.for("react.fragment"),Sy=Symbol.for("react.strict_mode"),Cy=Symbol.for("react.profiler"),Ny=Symbol.for("react.provider"),Ey=Symbol.for("react.context"),zy=Symbol.for("react.forward_ref"),Ty=Symbol.for("react.suspense"),Py=Symbol.for("react.memo"),Ly=Symbol.for("react.lazy"),Nd=Symbol.iterator;function Ry(e){return e===null||typeof e!="object"?null:(e=Nd&&e[Nd]||e["@@iterator"],typeof e=="function"?e:null)}var rm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},im=Object.assign,sm={};function ri(e,t,n){this.props=e,this.context=t,this.refs=sm,this.updater=n||rm}ri.prototype.isReactComponent={};ri.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ri.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function om(){}om.prototype=ri.prototype;function Cc(e,t,n){this.props=e,this.context=t,this.refs=sm,this.updater=n||rm}var Nc=Cc.prototype=new om;Nc.constructor=Cc;im(Nc,ri.prototype);Nc.isPureReactComponent=!0;var Ed=Array.isArray,am=Object.prototype.hasOwnProperty,Ec={current:null},lm={key:!0,ref:!0,__self:!0,__source:!0};function cm(e,t,n){var r,s={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)am.call(t,r)&&!lm.hasOwnProperty(r)&&(s[r]=t[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];s.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:ps,type:e,key:o,ref:a,props:s,_owner:Ec.current}}function Ay(e,t){return{$$typeof:ps,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function zc(e){return typeof e=="object"&&e!==null&&e.$$typeof===ps}function Iy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var zd=/\/+/g;function va(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Iy(""+e.key):t.toString(36)}function Gs(e,t,n,r,s){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ps:case wy:a=!0}}if(a)return a=e,s=s(a),e=r===""?"."+va(a,0):r,Ed(s)?(n="",e!=null&&(n=e.replace(zd,"$&/")+"/"),Gs(s,t,n,"",function(u){return u})):s!=null&&(zc(s)&&(s=Ay(s,n+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(zd,"$&/")+"/")+e)),t.push(s)),1;if(a=0,r=r===""?".":r+":",Ed(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+va(o,l);a+=Gs(o,t,n,c,s)}else if(c=Ry(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+va(o,l++),a+=Gs(o,t,n,c,s);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ns(e,t,n){if(e==null)return e;var r=[],s=0;return Gs(e,r,"","",function(o){return t.call(n,o,s++)}),r}function My(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var mt={current:null},Qs={transition:null},Oy={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:Qs,ReactCurrentOwner:Ec};function um(){throw Error("act(...) is not supported in production builds of React.")}Ce.Children={map:Ns,forEach:function(e,t,n){Ns(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ns(e,function(){t++}),t},toArray:function(e){return Ns(e,function(t){return t})||[]},only:function(e){if(!zc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ce.Component=ri;Ce.Fragment=_y;Ce.Profiler=Cy;Ce.PureComponent=Cc;Ce.StrictMode=Sy;Ce.Suspense=Ty;Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Oy;Ce.act=um;Ce.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=im({},e.props),s=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Ec.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)am.call(t,c)&&!lm.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ps,type:e.type,key:s,ref:o,props:r,_owner:a}};Ce.createContext=function(e){return e={$$typeof:Ey,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ny,_context:e},e.Consumer=e};Ce.createElement=cm;Ce.createFactory=function(e){var t=cm.bind(null,e);return t.type=e,t};Ce.createRef=function(){return{current:null}};Ce.forwardRef=function(e){return{$$typeof:zy,render:e}};Ce.isValidElement=zc;Ce.lazy=function(e){return{$$typeof:Ly,_payload:{_status:-1,_result:e},_init:My}};Ce.memo=function(e,t){return{$$typeof:Py,type:e,compare:t===void 0?null:t}};Ce.startTransition=function(e){var t=Qs.transition;Qs.transition={};try{e()}finally{Qs.transition=t}};Ce.unstable_act=um;Ce.useCallback=function(e,t){return mt.current.useCallback(e,t)};Ce.useContext=function(e){return mt.current.useContext(e)};Ce.useDebugValue=function(){};Ce.useDeferredValue=function(e){return mt.current.useDeferredValue(e)};Ce.useEffect=function(e,t){return mt.current.useEffect(e,t)};Ce.useId=function(){return mt.current.useId()};Ce.useImperativeHandle=function(e,t,n){return mt.current.useImperativeHandle(e,t,n)};Ce.useInsertionEffect=function(e,t){return mt.current.useInsertionEffect(e,t)};Ce.useLayoutEffect=function(e,t){return mt.current.useLayoutEffect(e,t)};Ce.useMemo=function(e,t){return mt.current.useMemo(e,t)};Ce.useReducer=function(e,t,n){return mt.current.useReducer(e,t,n)};Ce.useRef=function(e){return mt.current.useRef(e)};Ce.useState=function(e){return mt.current.useState(e)};Ce.useSyncExternalStore=function(e,t,n){return mt.current.useSyncExternalStore(e,t,n)};Ce.useTransition=function(){return mt.current.useTransition()};Ce.version="18.3.1";nm.exports=Ce;var b=nm.exports;const Rt=Vo(b),Dy=jy({__proto__:null,default:Rt},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $y=b,Fy=Symbol.for("react.element"),By=Symbol.for("react.fragment"),Uy=Object.prototype.hasOwnProperty,Wy=$y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vy={key:!0,ref:!0,__self:!0,__source:!0};function dm(e,t,n){var r,s={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Uy.call(t,r)&&!Vy.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:Fy,type:e,key:o,ref:a,props:s,_owner:Wy.current}}Ho.Fragment=By;Ho.jsx=dm;Ho.jsxs=dm;tm.exports=Ho;var i=tm.exports,fl={},pm={exports:{}},Mt={},fm={exports:{}},mm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,I){var k=O.length;O.push(I);e:for(;0<k;){var V=k-1>>>1,Q=O[V];if(0<s(Q,I))O[V]=I,O[k]=Q,k=V;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var I=O[0],k=O.pop();if(k!==I){O[0]=k;e:for(var V=0,Q=O.length,h=Q>>>1;V<h;){var B=2*(V+1)-1,C=O[B],G=B+1,xe=O[G];if(0>s(C,k))G<Q&&0>s(xe,C)?(O[V]=xe,O[G]=k,V=G):(O[V]=C,O[B]=k,V=B);else if(G<Q&&0>s(xe,k))O[V]=xe,O[G]=k,V=G;else break e}}return I}function s(O,I){var k=O.sortIndex-I.sortIndex;return k!==0?k:O.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,p=null,f=3,m=!1,y=!1,j=!1,N=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(O){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=O)r(u),I.sortIndex=I.expirationTime,t(c,I);else break;I=n(u)}}function T(O){if(j=!1,x(O),!y)if(n(c)!==null)y=!0,Z(z);else{var I=n(u);I!==null&&E(T,I.startTime-O)}}function z(O,I){y=!1,j&&(j=!1,v(_),_=-1),m=!0;var k=f;try{for(x(I),p=n(c);p!==null&&(!(p.expirationTime>I)||O&&!R());){var V=p.callback;if(typeof V=="function"){p.callback=null,f=p.priorityLevel;var Q=V(p.expirationTime<=I);I=e.unstable_now(),typeof Q=="function"?p.callback=Q:p===n(c)&&r(c),x(I)}else r(c);p=n(c)}if(p!==null)var h=!0;else{var B=n(u);B!==null&&E(T,B.startTime-I),h=!1}return h}finally{p=null,f=k,m=!1}}var w=!1,P=null,_=-1,D=5,S=-1;function R(){return!(e.unstable_now()-S<D)}function L(){if(P!==null){var O=e.unstable_now();S=O;var I=!0;try{I=P(!0,O)}finally{I?W():(w=!1,P=null)}}else w=!1}var W;if(typeof g=="function")W=function(){g(L)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,$=U.port2;U.port1.onmessage=L,W=function(){$.postMessage(null)}}else W=function(){N(L,0)};function Z(O){P=O,w||(w=!0,W())}function E(O,I){_=N(function(){O(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){y||m||(y=!0,Z(z))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(O){switch(f){case 1:case 2:case 3:var I=3;break;default:I=f}var k=f;f=I;try{return O()}finally{f=k}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,I){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var k=f;f=O;try{return I()}finally{f=k}},e.unstable_scheduleCallback=function(O,I,k){var V=e.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?V+k:V):k=V,O){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=k+Q,O={id:d++,callback:I,priorityLevel:O,startTime:k,expirationTime:Q,sortIndex:-1},k>V?(O.sortIndex=k,t(u,O),n(c)===null&&O===n(u)&&(j?(v(_),_=-1):j=!0,E(T,k-V))):(O.sortIndex=Q,t(c,O),y||m||(y=!0,Z(z))),O},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(O){var I=f;return function(){var k=f;f=I;try{return O.apply(this,arguments)}finally{f=k}}}})(mm);fm.exports=mm;var Hy=fm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qy=b,It=Hy;function ne(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hm=new Set,Wi={};function vr(e,t){qr(e,t),qr(e+"Capture",t)}function qr(e,t){for(Wi[e]=t,e=0;e<t.length;e++)hm.add(t[e])}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ml=Object.prototype.hasOwnProperty,Jy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Td={},Pd={};function Ky(e){return ml.call(Pd,e)?!0:ml.call(Td,e)?!1:Jy.test(e)?Pd[e]=!0:(Td[e]=!0,!1)}function Gy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qy(e,t,n,r){if(t===null||typeof t>"u"||Gy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ht(e,t,n,r,s,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var st={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){st[e]=new ht(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];st[t]=new ht(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){st[e]=new ht(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){st[e]=new ht(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){st[e]=new ht(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){st[e]=new ht(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){st[e]=new ht(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){st[e]=new ht(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){st[e]=new ht(e,5,!1,e.toLowerCase(),null,!1,!1)});var Tc=/[\-:]([a-z])/g;function Pc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Tc,Pc);st[t]=new ht(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Tc,Pc);st[t]=new ht(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Tc,Pc);st[t]=new ht(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){st[e]=new ht(e,1,!1,e.toLowerCase(),null,!1,!1)});st.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){st[e]=new ht(e,1,!1,e.toLowerCase(),null,!0,!0)});function Lc(e,t,n,r){var s=st.hasOwnProperty(t)?st[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qy(t,n,s,r)&&(n=null),r||s===null?Ky(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var En=qy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Es=Symbol.for("react.element"),Sr=Symbol.for("react.portal"),Cr=Symbol.for("react.fragment"),Rc=Symbol.for("react.strict_mode"),hl=Symbol.for("react.profiler"),gm=Symbol.for("react.provider"),xm=Symbol.for("react.context"),Ac=Symbol.for("react.forward_ref"),gl=Symbol.for("react.suspense"),xl=Symbol.for("react.suspense_list"),Ic=Symbol.for("react.memo"),Ln=Symbol.for("react.lazy"),ym=Symbol.for("react.offscreen"),Ld=Symbol.iterator;function pi(e){return e===null||typeof e!="object"?null:(e=Ld&&e[Ld]||e["@@iterator"],typeof e=="function"?e:null)}var We=Object.assign,ba;function Si(e){if(ba===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ba=t&&t[1]||""}return`
`+ba+e}var ka=!1;function ja(e,t){if(!e||ka)return"";ka=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),o=r.stack.split(`
`),a=s.length-1,l=o.length-1;1<=a&&0<=l&&s[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(s[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||s[a]!==o[l]){var c=`
`+s[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{ka=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Si(e):""}function Yy(e){switch(e.tag){case 5:return Si(e.type);case 16:return Si("Lazy");case 13:return Si("Suspense");case 19:return Si("SuspenseList");case 0:case 2:case 15:return e=ja(e.type,!1),e;case 11:return e=ja(e.type.render,!1),e;case 1:return e=ja(e.type,!0),e;default:return""}}function yl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Cr:return"Fragment";case Sr:return"Portal";case hl:return"Profiler";case Rc:return"StrictMode";case gl:return"Suspense";case xl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xm:return(e.displayName||"Context")+".Consumer";case gm:return(e._context.displayName||"Context")+".Provider";case Ac:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ic:return t=e.displayName||null,t!==null?t:yl(e.type)||"Memo";case Ln:t=e._payload,e=e._init;try{return yl(e(t))}catch{}}return null}function Xy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yl(t);case 8:return t===Rc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Gn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zy(e){var t=vm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zs(e){e._valueTracker||(e._valueTracker=Zy(e))}function bm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=vm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function po(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vl(e,t){var n=t.checked;return We({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Rd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Gn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function km(e,t){t=t.checked,t!=null&&Lc(e,"checked",t,!1)}function bl(e,t){km(e,t);var n=Gn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?kl(e,t.type,n):t.hasOwnProperty("defaultValue")&&kl(e,t.type,Gn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ad(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function kl(e,t,n){(t!=="number"||po(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ci=Array.isArray;function Dr(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Gn(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function jl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(ne(91));return We({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Id(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(ne(92));if(Ci(n)){if(1<n.length)throw Error(ne(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Gn(n)}}function jm(e,t){var n=Gn(t.value),r=Gn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Md(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ts,_m=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ts=Ts||document.createElement("div"),Ts.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ts.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ev=["Webkit","ms","Moz","O"];Object.keys(Ti).forEach(function(e){ev.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ti[t]=Ti[e]})});function Sm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ti.hasOwnProperty(e)&&Ti[e]?(""+t).trim():t+"px"}function Cm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Sm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var tv=We({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _l(e,t){if(t){if(tv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(ne(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(ne(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(ne(61))}if(t.style!=null&&typeof t.style!="object")throw Error(ne(62))}}function Sl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cl=null;function Mc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nl=null,$r=null,Fr=null;function Od(e){if(e=hs(e)){if(typeof Nl!="function")throw Error(ne(280));var t=e.stateNode;t&&(t=Qo(t),Nl(e.stateNode,e.type,t))}}function Nm(e){$r?Fr?Fr.push(e):Fr=[e]:$r=e}function Em(){if($r){var e=$r,t=Fr;if(Fr=$r=null,Od(e),t)for(e=0;e<t.length;e++)Od(t[e])}}function zm(e,t){return e(t)}function Tm(){}var wa=!1;function Pm(e,t,n){if(wa)return e(t,n);wa=!0;try{return zm(e,t,n)}finally{wa=!1,($r!==null||Fr!==null)&&(Tm(),Em())}}function Hi(e,t){var n=e.stateNode;if(n===null)return null;var r=Qo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(ne(231,t,typeof n));return n}var El=!1;if(_n)try{var fi={};Object.defineProperty(fi,"passive",{get:function(){El=!0}}),window.addEventListener("test",fi,fi),window.removeEventListener("test",fi,fi)}catch{El=!1}function nv(e,t,n,r,s,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Pi=!1,fo=null,mo=!1,zl=null,rv={onError:function(e){Pi=!0,fo=e}};function iv(e,t,n,r,s,o,a,l,c){Pi=!1,fo=null,nv.apply(rv,arguments)}function sv(e,t,n,r,s,o,a,l,c){if(iv.apply(this,arguments),Pi){if(Pi){var u=fo;Pi=!1,fo=null}else throw Error(ne(198));mo||(mo=!0,zl=u)}}function br(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Lm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Dd(e){if(br(e)!==e)throw Error(ne(188))}function ov(e){var t=e.alternate;if(!t){if(t=br(e),t===null)throw Error(ne(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var o=s.alternate;if(o===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===n)return Dd(s),e;if(o===r)return Dd(s),t;o=o.sibling}throw Error(ne(188))}if(n.return!==r.return)n=s,r=o;else{for(var a=!1,l=s.child;l;){if(l===n){a=!0,n=s,r=o;break}if(l===r){a=!0,r=s,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=s;break}if(l===r){a=!0,r=o,n=s;break}l=l.sibling}if(!a)throw Error(ne(189))}}if(n.alternate!==r)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?e:t}function Rm(e){return e=ov(e),e!==null?Am(e):null}function Am(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Am(e);if(t!==null)return t;e=e.sibling}return null}var Im=It.unstable_scheduleCallback,$d=It.unstable_cancelCallback,av=It.unstable_shouldYield,lv=It.unstable_requestPaint,He=It.unstable_now,cv=It.unstable_getCurrentPriorityLevel,Oc=It.unstable_ImmediatePriority,Mm=It.unstable_UserBlockingPriority,ho=It.unstable_NormalPriority,uv=It.unstable_LowPriority,Om=It.unstable_IdlePriority,qo=null,fn=null;function dv(e){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(qo,e,void 0,(e.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:mv,pv=Math.log,fv=Math.LN2;function mv(e){return e>>>=0,e===0?32:31-(pv(e)/fv|0)|0}var Ps=64,Ls=4194304;function Ni(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function go(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~s;l!==0?r=Ni(l):(o&=a,o!==0&&(r=Ni(o)))}else a=n&~s,a!==0?r=Ni(a):o!==0&&(r=Ni(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,o=t&-t,s>=o||s===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Zt(t),s=1<<n,r|=e[n],t&=~s;return r}function hv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Zt(o),l=1<<a,c=s[a];c===-1?(!(l&n)||l&r)&&(s[a]=hv(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function Tl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Dm(){var e=Ps;return Ps<<=1,!(Ps&4194240)&&(Ps=64),e}function _a(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Zt(t),e[t]=n}function xv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Zt(n),o=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~o}}function Dc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Zt(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var Pe=0;function $m(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fm,$c,Bm,Um,Wm,Pl=!1,Rs=[],Fn=null,Bn=null,Un=null,qi=new Map,Ji=new Map,An=[],yv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fd(e,t){switch(e){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":qi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ji.delete(t.pointerId)}}function mi(e,t,n,r,s,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[s]},t!==null&&(t=hs(t),t!==null&&$c(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function vv(e,t,n,r,s){switch(t){case"focusin":return Fn=mi(Fn,e,t,n,r,s),!0;case"dragenter":return Bn=mi(Bn,e,t,n,r,s),!0;case"mouseover":return Un=mi(Un,e,t,n,r,s),!0;case"pointerover":var o=s.pointerId;return qi.set(o,mi(qi.get(o)||null,e,t,n,r,s)),!0;case"gotpointercapture":return o=s.pointerId,Ji.set(o,mi(Ji.get(o)||null,e,t,n,r,s)),!0}return!1}function Vm(e){var t=or(e.target);if(t!==null){var n=br(t);if(n!==null){if(t=n.tag,t===13){if(t=Lm(n),t!==null){e.blockedOn=t,Wm(e.priority,function(){Bm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ys(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ll(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Cl=r,n.target.dispatchEvent(r),Cl=null}else return t=hs(n),t!==null&&$c(t),e.blockedOn=n,!1;t.shift()}return!0}function Bd(e,t,n){Ys(e)&&n.delete(t)}function bv(){Pl=!1,Fn!==null&&Ys(Fn)&&(Fn=null),Bn!==null&&Ys(Bn)&&(Bn=null),Un!==null&&Ys(Un)&&(Un=null),qi.forEach(Bd),Ji.forEach(Bd)}function hi(e,t){e.blockedOn===t&&(e.blockedOn=null,Pl||(Pl=!0,It.unstable_scheduleCallback(It.unstable_NormalPriority,bv)))}function Ki(e){function t(s){return hi(s,e)}if(0<Rs.length){hi(Rs[0],e);for(var n=1;n<Rs.length;n++){var r=Rs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Fn!==null&&hi(Fn,e),Bn!==null&&hi(Bn,e),Un!==null&&hi(Un,e),qi.forEach(t),Ji.forEach(t),n=0;n<An.length;n++)r=An[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<An.length&&(n=An[0],n.blockedOn===null);)Vm(n),n.blockedOn===null&&An.shift()}var Br=En.ReactCurrentBatchConfig,xo=!0;function kv(e,t,n,r){var s=Pe,o=Br.transition;Br.transition=null;try{Pe=1,Fc(e,t,n,r)}finally{Pe=s,Br.transition=o}}function jv(e,t,n,r){var s=Pe,o=Br.transition;Br.transition=null;try{Pe=4,Fc(e,t,n,r)}finally{Pe=s,Br.transition=o}}function Fc(e,t,n,r){if(xo){var s=Ll(e,t,n,r);if(s===null)Aa(e,t,r,yo,n),Fd(e,r);else if(vv(s,e,t,n,r))r.stopPropagation();else if(Fd(e,r),t&4&&-1<yv.indexOf(e)){for(;s!==null;){var o=hs(s);if(o!==null&&Fm(o),o=Ll(e,t,n,r),o===null&&Aa(e,t,r,yo,n),o===s)break;s=o}s!==null&&r.stopPropagation()}else Aa(e,t,r,null,n)}}var yo=null;function Ll(e,t,n,r){if(yo=null,e=Mc(r),e=or(e),e!==null)if(t=br(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Lm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return yo=e,null}function Hm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cv()){case Oc:return 1;case Mm:return 4;case ho:case uv:return 16;case Om:return 536870912;default:return 16}default:return 16}}var Mn=null,Bc=null,Xs=null;function qm(){if(Xs)return Xs;var e,t=Bc,n=t.length,r,s="value"in Mn?Mn.value:Mn.textContent,o=s.length;for(e=0;e<n&&t[e]===s[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===s[o-r];r++);return Xs=s.slice(e,1<r?1-r:void 0)}function Zs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function As(){return!0}function Ud(){return!1}function Ot(e){function t(n,r,s,o,a){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?As:Ud,this.isPropagationStopped=Ud,this}return We(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=As)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=As)},persist:function(){},isPersistent:As}),t}var ii={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uc=Ot(ii),ms=We({},ii,{view:0,detail:0}),wv=Ot(ms),Sa,Ca,gi,Jo=We({},ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gi&&(gi&&e.type==="mousemove"?(Sa=e.screenX-gi.screenX,Ca=e.screenY-gi.screenY):Ca=Sa=0,gi=e),Sa)},movementY:function(e){return"movementY"in e?e.movementY:Ca}}),Wd=Ot(Jo),_v=We({},Jo,{dataTransfer:0}),Sv=Ot(_v),Cv=We({},ms,{relatedTarget:0}),Na=Ot(Cv),Nv=We({},ii,{animationName:0,elapsedTime:0,pseudoElement:0}),Ev=Ot(Nv),zv=We({},ii,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Tv=Ot(zv),Pv=We({},ii,{data:0}),Vd=Ot(Pv),Lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Av={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Iv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Av[e])?!!t[e]:!1}function Wc(){return Iv}var Mv=We({},ms,{key:function(e){if(e.key){var t=Lv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wc,charCode:function(e){return e.type==="keypress"?Zs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ov=Ot(Mv),Dv=We({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hd=Ot(Dv),$v=We({},ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wc}),Fv=Ot($v),Bv=We({},ii,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uv=Ot(Bv),Wv=We({},Jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vv=Ot(Wv),Hv=[9,13,27,32],Vc=_n&&"CompositionEvent"in window,Li=null;_n&&"documentMode"in document&&(Li=document.documentMode);var qv=_n&&"TextEvent"in window&&!Li,Jm=_n&&(!Vc||Li&&8<Li&&11>=Li),qd=" ",Jd=!1;function Km(e,t){switch(e){case"keyup":return Hv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nr=!1;function Jv(e,t){switch(e){case"compositionend":return Gm(t);case"keypress":return t.which!==32?null:(Jd=!0,qd);case"textInput":return e=t.data,e===qd&&Jd?null:e;default:return null}}function Kv(e,t){if(Nr)return e==="compositionend"||!Vc&&Km(e,t)?(e=qm(),Xs=Bc=Mn=null,Nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jm&&t.locale!=="ko"?null:t.data;default:return null}}var Gv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gv[e.type]:t==="textarea"}function Qm(e,t,n,r){Nm(r),t=vo(t,"onChange"),0<t.length&&(n=new Uc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ri=null,Gi=null;function Qv(e){ah(e,0)}function Ko(e){var t=Tr(e);if(bm(t))return e}function Yv(e,t){if(e==="change")return t}var Ym=!1;if(_n){var Ea;if(_n){var za="oninput"in document;if(!za){var Gd=document.createElement("div");Gd.setAttribute("oninput","return;"),za=typeof Gd.oninput=="function"}Ea=za}else Ea=!1;Ym=Ea&&(!document.documentMode||9<document.documentMode)}function Qd(){Ri&&(Ri.detachEvent("onpropertychange",Xm),Gi=Ri=null)}function Xm(e){if(e.propertyName==="value"&&Ko(Gi)){var t=[];Qm(t,Gi,e,Mc(e)),Pm(Qv,t)}}function Xv(e,t,n){e==="focusin"?(Qd(),Ri=t,Gi=n,Ri.attachEvent("onpropertychange",Xm)):e==="focusout"&&Qd()}function Zv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ko(Gi)}function e1(e,t){if(e==="click")return Ko(t)}function t1(e,t){if(e==="input"||e==="change")return Ko(t)}function n1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nn=typeof Object.is=="function"?Object.is:n1;function Qi(e,t){if(nn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!ml.call(t,s)||!nn(e[s],t[s]))return!1}return!0}function Yd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xd(e,t){var n=Yd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yd(n)}}function Zm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function eh(){for(var e=window,t=po();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=po(e.document)}return t}function Hc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function r1(e){var t=eh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zm(n.ownerDocument.documentElement,n)){if(r!==null&&Hc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,o=Math.min(r.start,s);r=r.end===void 0?o:Math.min(r.end,s),!e.extend&&o>r&&(s=r,r=o,o=s),s=Xd(n,o);var a=Xd(n,r);s&&a&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var i1=_n&&"documentMode"in document&&11>=document.documentMode,Er=null,Rl=null,Ai=null,Al=!1;function Zd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Al||Er==null||Er!==po(r)||(r=Er,"selectionStart"in r&&Hc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ai&&Qi(Ai,r)||(Ai=r,r=vo(Rl,"onSelect"),0<r.length&&(t=new Uc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Er)))}function Is(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var zr={animationend:Is("Animation","AnimationEnd"),animationiteration:Is("Animation","AnimationIteration"),animationstart:Is("Animation","AnimationStart"),transitionend:Is("Transition","TransitionEnd")},Ta={},th={};_n&&(th=document.createElement("div").style,"AnimationEvent"in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),"TransitionEvent"in window||delete zr.transitionend.transition);function Go(e){if(Ta[e])return Ta[e];if(!zr[e])return e;var t=zr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in th)return Ta[e]=t[n];return e}var nh=Go("animationend"),rh=Go("animationiteration"),ih=Go("animationstart"),sh=Go("transitionend"),oh=new Map,ep="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xn(e,t){oh.set(e,t),vr(t,[e])}for(var Pa=0;Pa<ep.length;Pa++){var La=ep[Pa],s1=La.toLowerCase(),o1=La[0].toUpperCase()+La.slice(1);Xn(s1,"on"+o1)}Xn(nh,"onAnimationEnd");Xn(rh,"onAnimationIteration");Xn(ih,"onAnimationStart");Xn("dblclick","onDoubleClick");Xn("focusin","onFocus");Xn("focusout","onBlur");Xn(sh,"onTransitionEnd");qr("onMouseEnter",["mouseout","mouseover"]);qr("onMouseLeave",["mouseout","mouseover"]);qr("onPointerEnter",["pointerout","pointerover"]);qr("onPointerLeave",["pointerout","pointerover"]);vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ei));function tp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,sv(r,t,void 0,e),e.currentTarget=null}function ah(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&s.isPropagationStopped())break e;tp(s,l,u),o=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&s.isPropagationStopped())break e;tp(s,l,u),o=c}}}if(mo)throw e=zl,mo=!1,zl=null,e}function Oe(e,t){var n=t[$l];n===void 0&&(n=t[$l]=new Set);var r=e+"__bubble";n.has(r)||(lh(t,e,2,!1),n.add(r))}function Ra(e,t,n){var r=0;t&&(r|=4),lh(n,e,r,t)}var Ms="_reactListening"+Math.random().toString(36).slice(2);function Yi(e){if(!e[Ms]){e[Ms]=!0,hm.forEach(function(n){n!=="selectionchange"&&(a1.has(n)||Ra(n,!1,e),Ra(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ms]||(t[Ms]=!0,Ra("selectionchange",!1,t))}}function lh(e,t,n,r){switch(Hm(t)){case 1:var s=kv;break;case 4:s=jv;break;default:s=Fc}n=s.bind(null,t,n,e),s=void 0,!El||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Aa(e,t,n,r,s){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;a=a.return}for(;l!==null;){if(a=or(l),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Pm(function(){var u=o,d=Mc(n),p=[];e:{var f=oh.get(e);if(f!==void 0){var m=Uc,y=e;switch(e){case"keypress":if(Zs(n)===0)break e;case"keydown":case"keyup":m=Ov;break;case"focusin":y="focus",m=Na;break;case"focusout":y="blur",m=Na;break;case"beforeblur":case"afterblur":m=Na;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Sv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Fv;break;case nh:case rh:case ih:m=Ev;break;case sh:m=Uv;break;case"scroll":m=wv;break;case"wheel":m=Vv;break;case"copy":case"cut":case"paste":m=Tv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Hd}var j=(t&4)!==0,N=!j&&e==="scroll",v=j?f!==null?f+"Capture":null:f;j=[];for(var g=u,x;g!==null;){x=g;var T=x.stateNode;if(x.tag===5&&T!==null&&(x=T,v!==null&&(T=Hi(g,v),T!=null&&j.push(Xi(g,T,x)))),N)break;g=g.return}0<j.length&&(f=new m(f,y,null,n,d),p.push({event:f,listeners:j}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==Cl&&(y=n.relatedTarget||n.fromElement)&&(or(y)||y[Sn]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?or(y):null,y!==null&&(N=br(y),y!==N||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(j=Wd,T="onMouseLeave",v="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(j=Hd,T="onPointerLeave",v="onPointerEnter",g="pointer"),N=m==null?f:Tr(m),x=y==null?f:Tr(y),f=new j(T,g+"leave",m,n,d),f.target=N,f.relatedTarget=x,T=null,or(d)===u&&(j=new j(v,g+"enter",y,n,d),j.target=x,j.relatedTarget=N,T=j),N=T,m&&y)t:{for(j=m,v=y,g=0,x=j;x;x=jr(x))g++;for(x=0,T=v;T;T=jr(T))x++;for(;0<g-x;)j=jr(j),g--;for(;0<x-g;)v=jr(v),x--;for(;g--;){if(j===v||v!==null&&j===v.alternate)break t;j=jr(j),v=jr(v)}j=null}else j=null;m!==null&&np(p,f,m,j,!1),y!==null&&N!==null&&np(p,N,y,j,!0)}}e:{if(f=u?Tr(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var z=Yv;else if(Kd(f))if(Ym)z=t1;else{z=Zv;var w=Xv}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(z=e1);if(z&&(z=z(e,u))){Qm(p,z,n,d);break e}w&&w(e,f,u),e==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&kl(f,"number",f.value)}switch(w=u?Tr(u):window,e){case"focusin":(Kd(w)||w.contentEditable==="true")&&(Er=w,Rl=u,Ai=null);break;case"focusout":Ai=Rl=Er=null;break;case"mousedown":Al=!0;break;case"contextmenu":case"mouseup":case"dragend":Al=!1,Zd(p,n,d);break;case"selectionchange":if(i1)break;case"keydown":case"keyup":Zd(p,n,d)}var P;if(Vc)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Nr?Km(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Jm&&n.locale!=="ko"&&(Nr||_!=="onCompositionStart"?_==="onCompositionEnd"&&Nr&&(P=qm()):(Mn=d,Bc="value"in Mn?Mn.value:Mn.textContent,Nr=!0)),w=vo(u,_),0<w.length&&(_=new Vd(_,e,null,n,d),p.push({event:_,listeners:w}),P?_.data=P:(P=Gm(n),P!==null&&(_.data=P)))),(P=qv?Jv(e,n):Kv(e,n))&&(u=vo(u,"onBeforeInput"),0<u.length&&(d=new Vd("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=P))}ah(p,t)})}function Xi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vo(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=Hi(e,n),o!=null&&r.unshift(Xi(e,o,s)),o=Hi(e,t),o!=null&&r.push(Xi(e,o,s))),e=e.return}return r}function jr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function np(e,t,n,r,s){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,s?(c=Hi(n,o),c!=null&&a.unshift(Xi(n,c,l))):s||(c=Hi(n,o),c!=null&&a.push(Xi(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var l1=/\r\n?/g,c1=/\u0000|\uFFFD/g;function rp(e){return(typeof e=="string"?e:""+e).replace(l1,`
`).replace(c1,"")}function Os(e,t,n){if(t=rp(t),rp(e)!==t&&n)throw Error(ne(425))}function bo(){}var Il=null,Ml=null;function Ol(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Dl=typeof setTimeout=="function"?setTimeout:void 0,u1=typeof clearTimeout=="function"?clearTimeout:void 0,ip=typeof Promise=="function"?Promise:void 0,d1=typeof queueMicrotask=="function"?queueMicrotask:typeof ip<"u"?function(e){return ip.resolve(null).then(e).catch(p1)}:Dl;function p1(e){setTimeout(function(){throw e})}function Ia(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),Ki(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Ki(t)}function Wn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function sp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var si=Math.random().toString(36).slice(2),un="__reactFiber$"+si,Zi="__reactProps$"+si,Sn="__reactContainer$"+si,$l="__reactEvents$"+si,f1="__reactListeners$"+si,m1="__reactHandles$"+si;function or(e){var t=e[un];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Sn]||n[un]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sp(e);e!==null;){if(n=e[un])return n;e=sp(e)}return t}e=n,n=e.parentNode}return null}function hs(e){return e=e[un]||e[Sn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(ne(33))}function Qo(e){return e[Zi]||null}var Fl=[],Pr=-1;function Zn(e){return{current:e}}function De(e){0>Pr||(e.current=Fl[Pr],Fl[Pr]=null,Pr--)}function Ie(e,t){Pr++,Fl[Pr]=e.current,e.current=t}var Qn={},ct=Zn(Qn),bt=Zn(!1),fr=Qn;function Jr(e,t){var n=e.type.contextTypes;if(!n)return Qn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in n)s[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function kt(e){return e=e.childContextTypes,e!=null}function ko(){De(bt),De(ct)}function op(e,t,n){if(ct.current!==Qn)throw Error(ne(168));Ie(ct,t),Ie(bt,n)}function ch(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(ne(108,Xy(e)||"Unknown",s));return We({},n,r)}function jo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qn,fr=ct.current,Ie(ct,e),Ie(bt,bt.current),!0}function ap(e,t,n){var r=e.stateNode;if(!r)throw Error(ne(169));n?(e=ch(e,t,fr),r.__reactInternalMemoizedMergedChildContext=e,De(bt),De(ct),Ie(ct,e)):De(bt),Ie(bt,n)}var vn=null,Yo=!1,Ma=!1;function uh(e){vn===null?vn=[e]:vn.push(e)}function h1(e){Yo=!0,uh(e)}function er(){if(!Ma&&vn!==null){Ma=!0;var e=0,t=Pe;try{var n=vn;for(Pe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}vn=null,Yo=!1}catch(s){throw vn!==null&&(vn=vn.slice(e+1)),Im(Oc,er),s}finally{Pe=t,Ma=!1}}return null}var Lr=[],Rr=0,wo=null,_o=0,$t=[],Ft=0,mr=null,bn=1,kn="";function rr(e,t){Lr[Rr++]=_o,Lr[Rr++]=wo,wo=e,_o=t}function dh(e,t,n){$t[Ft++]=bn,$t[Ft++]=kn,$t[Ft++]=mr,mr=e;var r=bn;e=kn;var s=32-Zt(r)-1;r&=~(1<<s),n+=1;var o=32-Zt(t)+s;if(30<o){var a=s-s%5;o=(r&(1<<a)-1).toString(32),r>>=a,s-=a,bn=1<<32-Zt(t)+s|n<<s|r,kn=o+e}else bn=1<<o|n<<s|r,kn=e}function qc(e){e.return!==null&&(rr(e,1),dh(e,1,0))}function Jc(e){for(;e===wo;)wo=Lr[--Rr],Lr[Rr]=null,_o=Lr[--Rr],Lr[Rr]=null;for(;e===mr;)mr=$t[--Ft],$t[Ft]=null,kn=$t[--Ft],$t[Ft]=null,bn=$t[--Ft],$t[Ft]=null}var At=null,Pt=null,$e=!1,Yt=null;function ph(e,t){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function lp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,At=e,Pt=Wn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,At=e,Pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=mr!==null?{id:bn,overflow:kn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,At=e,Pt=null,!0):!1;default:return!1}}function Bl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ul(e){if($e){var t=Pt;if(t){var n=t;if(!lp(e,t)){if(Bl(e))throw Error(ne(418));t=Wn(n.nextSibling);var r=At;t&&lp(e,t)?ph(r,n):(e.flags=e.flags&-4097|2,$e=!1,At=e)}}else{if(Bl(e))throw Error(ne(418));e.flags=e.flags&-4097|2,$e=!1,At=e}}}function cp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;At=e}function Ds(e){if(e!==At)return!1;if(!$e)return cp(e),$e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ol(e.type,e.memoizedProps)),t&&(t=Pt)){if(Bl(e))throw fh(),Error(ne(418));for(;t;)ph(e,t),t=Wn(t.nextSibling)}if(cp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(ne(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pt=Wn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pt=null}}else Pt=At?Wn(e.stateNode.nextSibling):null;return!0}function fh(){for(var e=Pt;e;)e=Wn(e.nextSibling)}function Kr(){Pt=At=null,$e=!1}function Kc(e){Yt===null?Yt=[e]:Yt.push(e)}var g1=En.ReactCurrentBatchConfig;function xi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var r=n.stateNode}if(!r)throw Error(ne(147,e));var s=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=s.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,e))}return e}function $s(e,t){throw e=Object.prototype.toString.call(t),Error(ne(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function up(e){var t=e._init;return t(e._payload)}function mh(e){function t(v,g){if(e){var x=v.deletions;x===null?(v.deletions=[g],v.flags|=16):x.push(g)}}function n(v,g){if(!e)return null;for(;g!==null;)t(v,g),g=g.sibling;return null}function r(v,g){for(v=new Map;g!==null;)g.key!==null?v.set(g.key,g):v.set(g.index,g),g=g.sibling;return v}function s(v,g){return v=Jn(v,g),v.index=0,v.sibling=null,v}function o(v,g,x){return v.index=x,e?(x=v.alternate,x!==null?(x=x.index,x<g?(v.flags|=2,g):x):(v.flags|=2,g)):(v.flags|=1048576,g)}function a(v){return e&&v.alternate===null&&(v.flags|=2),v}function l(v,g,x,T){return g===null||g.tag!==6?(g=Wa(x,v.mode,T),g.return=v,g):(g=s(g,x),g.return=v,g)}function c(v,g,x,T){var z=x.type;return z===Cr?d(v,g,x.props.children,T,x.key):g!==null&&(g.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Ln&&up(z)===g.type)?(T=s(g,x.props),T.ref=xi(v,g,x),T.return=v,T):(T=oo(x.type,x.key,x.props,null,v.mode,T),T.ref=xi(v,g,x),T.return=v,T)}function u(v,g,x,T){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=Va(x,v.mode,T),g.return=v,g):(g=s(g,x.children||[]),g.return=v,g)}function d(v,g,x,T,z){return g===null||g.tag!==7?(g=ur(x,v.mode,T,z),g.return=v,g):(g=s(g,x),g.return=v,g)}function p(v,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Wa(""+g,v.mode,x),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Es:return x=oo(g.type,g.key,g.props,null,v.mode,x),x.ref=xi(v,null,g),x.return=v,x;case Sr:return g=Va(g,v.mode,x),g.return=v,g;case Ln:var T=g._init;return p(v,T(g._payload),x)}if(Ci(g)||pi(g))return g=ur(g,v.mode,x,null),g.return=v,g;$s(v,g)}return null}function f(v,g,x,T){var z=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return z!==null?null:l(v,g,""+x,T);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Es:return x.key===z?c(v,g,x,T):null;case Sr:return x.key===z?u(v,g,x,T):null;case Ln:return z=x._init,f(v,g,z(x._payload),T)}if(Ci(x)||pi(x))return z!==null?null:d(v,g,x,T,null);$s(v,x)}return null}function m(v,g,x,T,z){if(typeof T=="string"&&T!==""||typeof T=="number")return v=v.get(x)||null,l(g,v,""+T,z);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Es:return v=v.get(T.key===null?x:T.key)||null,c(g,v,T,z);case Sr:return v=v.get(T.key===null?x:T.key)||null,u(g,v,T,z);case Ln:var w=T._init;return m(v,g,x,w(T._payload),z)}if(Ci(T)||pi(T))return v=v.get(x)||null,d(g,v,T,z,null);$s(g,T)}return null}function y(v,g,x,T){for(var z=null,w=null,P=g,_=g=0,D=null;P!==null&&_<x.length;_++){P.index>_?(D=P,P=null):D=P.sibling;var S=f(v,P,x[_],T);if(S===null){P===null&&(P=D);break}e&&P&&S.alternate===null&&t(v,P),g=o(S,g,_),w===null?z=S:w.sibling=S,w=S,P=D}if(_===x.length)return n(v,P),$e&&rr(v,_),z;if(P===null){for(;_<x.length;_++)P=p(v,x[_],T),P!==null&&(g=o(P,g,_),w===null?z=P:w.sibling=P,w=P);return $e&&rr(v,_),z}for(P=r(v,P);_<x.length;_++)D=m(P,v,_,x[_],T),D!==null&&(e&&D.alternate!==null&&P.delete(D.key===null?_:D.key),g=o(D,g,_),w===null?z=D:w.sibling=D,w=D);return e&&P.forEach(function(R){return t(v,R)}),$e&&rr(v,_),z}function j(v,g,x,T){var z=pi(x);if(typeof z!="function")throw Error(ne(150));if(x=z.call(x),x==null)throw Error(ne(151));for(var w=z=null,P=g,_=g=0,D=null,S=x.next();P!==null&&!S.done;_++,S=x.next()){P.index>_?(D=P,P=null):D=P.sibling;var R=f(v,P,S.value,T);if(R===null){P===null&&(P=D);break}e&&P&&R.alternate===null&&t(v,P),g=o(R,g,_),w===null?z=R:w.sibling=R,w=R,P=D}if(S.done)return n(v,P),$e&&rr(v,_),z;if(P===null){for(;!S.done;_++,S=x.next())S=p(v,S.value,T),S!==null&&(g=o(S,g,_),w===null?z=S:w.sibling=S,w=S);return $e&&rr(v,_),z}for(P=r(v,P);!S.done;_++,S=x.next())S=m(P,v,_,S.value,T),S!==null&&(e&&S.alternate!==null&&P.delete(S.key===null?_:S.key),g=o(S,g,_),w===null?z=S:w.sibling=S,w=S);return e&&P.forEach(function(L){return t(v,L)}),$e&&rr(v,_),z}function N(v,g,x,T){if(typeof x=="object"&&x!==null&&x.type===Cr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Es:e:{for(var z=x.key,w=g;w!==null;){if(w.key===z){if(z=x.type,z===Cr){if(w.tag===7){n(v,w.sibling),g=s(w,x.props.children),g.return=v,v=g;break e}}else if(w.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Ln&&up(z)===w.type){n(v,w.sibling),g=s(w,x.props),g.ref=xi(v,w,x),g.return=v,v=g;break e}n(v,w);break}else t(v,w);w=w.sibling}x.type===Cr?(g=ur(x.props.children,v.mode,T,x.key),g.return=v,v=g):(T=oo(x.type,x.key,x.props,null,v.mode,T),T.ref=xi(v,g,x),T.return=v,v=T)}return a(v);case Sr:e:{for(w=x.key;g!==null;){if(g.key===w)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(v,g.sibling),g=s(g,x.children||[]),g.return=v,v=g;break e}else{n(v,g);break}else t(v,g);g=g.sibling}g=Va(x,v.mode,T),g.return=v,v=g}return a(v);case Ln:return w=x._init,N(v,g,w(x._payload),T)}if(Ci(x))return y(v,g,x,T);if(pi(x))return j(v,g,x,T);$s(v,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(v,g.sibling),g=s(g,x),g.return=v,v=g):(n(v,g),g=Wa(x,v.mode,T),g.return=v,v=g),a(v)):n(v,g)}return N}var Gr=mh(!0),hh=mh(!1),So=Zn(null),Co=null,Ar=null,Gc=null;function Qc(){Gc=Ar=Co=null}function Yc(e){var t=So.current;De(So),e._currentValue=t}function Wl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ur(e,t){Co=e,Gc=Ar=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(vt=!0),e.firstContext=null)}function Ht(e){var t=e._currentValue;if(Gc!==e)if(e={context:e,memoizedValue:t,next:null},Ar===null){if(Co===null)throw Error(ne(308));Ar=e,Co.dependencies={lanes:0,firstContext:e}}else Ar=Ar.next=e;return t}var ar=null;function Xc(e){ar===null?ar=[e]:ar.push(e)}function gh(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,Xc(t)):(n.next=s.next,s.next=n),t.interleaved=n,Cn(e,r)}function Cn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Rn=!1;function Zc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ne&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,Cn(e,n)}return s=r.interleaved,s===null?(t.next=t,Xc(r)):(t.next=s.next,s.next=t),r.interleaved=t,Cn(e,n)}function eo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Dc(e,n)}}function dp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?s=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?s=o=t:o=o.next=t}else s=o=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function No(e,t,n,r){var s=e.updateQueue;Rn=!1;var o=s.firstBaseUpdate,a=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(o!==null){var p=s.baseState;a=0,d=u=c=null,l=o;do{var f=l.lane,m=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,j=l;switch(f=t,m=n,j.tag){case 1:if(y=j.payload,typeof y=="function"){p=y.call(m,p,f);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=j.payload,f=typeof y=="function"?y.call(m,p,f):y,f==null)break e;p=We({},p,f);break e;case 2:Rn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=s.effects,f===null?s.effects=[l]:f.push(l))}else m={eventTime:m,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=m,c=p):d=d.next=m,a|=f;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;f=l,l=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(d===null&&(c=p),s.baseState=c,s.firstBaseUpdate=u,s.lastBaseUpdate=d,t=s.shared.interleaved,t!==null){s=t;do a|=s.lane,s=s.next;while(s!==t)}else o===null&&(s.shared.lanes=0);gr|=a,e.lanes=a,e.memoizedState=p}}function pp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(ne(191,s));s.call(r)}}}var gs={},mn=Zn(gs),es=Zn(gs),ts=Zn(gs);function lr(e){if(e===gs)throw Error(ne(174));return e}function eu(e,t){switch(Ie(ts,t),Ie(es,e),Ie(mn,gs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wl(t,e)}De(mn),Ie(mn,t)}function Qr(){De(mn),De(es),De(ts)}function yh(e){lr(ts.current);var t=lr(mn.current),n=wl(t,e.type);t!==n&&(Ie(es,e),Ie(mn,n))}function tu(e){es.current===e&&(De(mn),De(es))}var Be=Zn(0);function Eo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Oa=[];function nu(){for(var e=0;e<Oa.length;e++)Oa[e]._workInProgressVersionPrimary=null;Oa.length=0}var to=En.ReactCurrentDispatcher,Da=En.ReactCurrentBatchConfig,hr=0,Ue=null,Ye=null,tt=null,zo=!1,Ii=!1,ns=0,x1=0;function ot(){throw Error(ne(321))}function ru(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nn(e[n],t[n]))return!1;return!0}function iu(e,t,n,r,s,o){if(hr=o,Ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,to.current=e===null||e.memoizedState===null?k1:j1,e=n(r,s),Ii){o=0;do{if(Ii=!1,ns=0,25<=o)throw Error(ne(301));o+=1,tt=Ye=null,t.updateQueue=null,to.current=w1,e=n(r,s)}while(Ii)}if(to.current=To,t=Ye!==null&&Ye.next!==null,hr=0,tt=Ye=Ue=null,zo=!1,t)throw Error(ne(300));return e}function su(){var e=ns!==0;return ns=0,e}function ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?Ue.memoizedState=tt=e:tt=tt.next=e,tt}function qt(){if(Ye===null){var e=Ue.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var t=tt===null?Ue.memoizedState:tt.next;if(t!==null)tt=t,Ye=e;else{if(e===null)throw Error(ne(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},tt===null?Ue.memoizedState=tt=e:tt=tt.next=e}return tt}function rs(e,t){return typeof t=="function"?t(e):t}function $a(e){var t=qt(),n=t.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=e;var r=Ye,s=r.baseQueue,o=n.pending;if(o!==null){if(s!==null){var a=s.next;s.next=o.next,o.next=a}r.baseQueue=s=o,n.pending=null}if(s!==null){o=s.next,r=r.baseState;var l=a=null,c=null,u=o;do{var d=u.lane;if((hr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,a=r):c=c.next=p,Ue.lanes|=d,gr|=d}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=l,nn(r,t.memoizedState)||(vt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do o=s.lane,Ue.lanes|=o,gr|=o,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Fa(e){var t=qt(),n=t.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,o=t.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do o=e(o,a.action),a=a.next;while(a!==s);nn(o,t.memoizedState)||(vt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function vh(){}function bh(e,t){var n=Ue,r=qt(),s=t(),o=!nn(r.memoizedState,s);if(o&&(r.memoizedState=s,vt=!0),r=r.queue,ou(wh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||tt!==null&&tt.memoizedState.tag&1){if(n.flags|=2048,is(9,jh.bind(null,n,r,s,t),void 0,null),nt===null)throw Error(ne(349));hr&30||kh(n,t,s)}return s}function kh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ue.updateQueue,t===null?(t={lastEffect:null,stores:null},Ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function jh(e,t,n,r){t.value=n,t.getSnapshot=r,_h(t)&&Sh(e)}function wh(e,t,n){return n(function(){_h(t)&&Sh(e)})}function _h(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nn(e,n)}catch{return!0}}function Sh(e){var t=Cn(e,1);t!==null&&en(t,e,1,-1)}function fp(e){var t=ln();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:e},t.queue=e,e=e.dispatch=b1.bind(null,Ue,e),[t.memoizedState,e]}function is(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ue.updateQueue,t===null?(t={lastEffect:null,stores:null},Ue.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ch(){return qt().memoizedState}function no(e,t,n,r){var s=ln();Ue.flags|=e,s.memoizedState=is(1|t,n,void 0,r===void 0?null:r)}function Xo(e,t,n,r){var s=qt();r=r===void 0?null:r;var o=void 0;if(Ye!==null){var a=Ye.memoizedState;if(o=a.destroy,r!==null&&ru(r,a.deps)){s.memoizedState=is(t,n,o,r);return}}Ue.flags|=e,s.memoizedState=is(1|t,n,o,r)}function mp(e,t){return no(8390656,8,e,t)}function ou(e,t){return Xo(2048,8,e,t)}function Nh(e,t){return Xo(4,2,e,t)}function Eh(e,t){return Xo(4,4,e,t)}function zh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Th(e,t,n){return n=n!=null?n.concat([e]):null,Xo(4,4,zh.bind(null,t,e),n)}function au(){}function Ph(e,t){var n=qt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ru(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Lh(e,t){var n=qt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ru(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Rh(e,t,n){return hr&21?(nn(n,t)||(n=Dm(),Ue.lanes|=n,gr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,vt=!0),e.memoizedState=n)}function y1(e,t){var n=Pe;Pe=n!==0&&4>n?n:4,e(!0);var r=Da.transition;Da.transition={};try{e(!1),t()}finally{Pe=n,Da.transition=r}}function Ah(){return qt().memoizedState}function v1(e,t,n){var r=qn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ih(e))Mh(t,n);else if(n=gh(e,t,n,r),n!==null){var s=ft();en(n,e,r,s),Oh(n,t,r)}}function b1(e,t,n){var r=qn(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ih(e))Mh(t,s);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(s.hasEagerState=!0,s.eagerState=l,nn(l,a)){var c=t.interleaved;c===null?(s.next=s,Xc(t)):(s.next=c.next,c.next=s),t.interleaved=s;return}}catch{}finally{}n=gh(e,t,s,r),n!==null&&(s=ft(),en(n,e,r,s),Oh(n,t,r))}}function Ih(e){var t=e.alternate;return e===Ue||t!==null&&t===Ue}function Mh(e,t){Ii=zo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Oh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Dc(e,n)}}var To={readContext:Ht,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},k1={readContext:Ht,useCallback:function(e,t){return ln().memoizedState=[e,t===void 0?null:t],e},useContext:Ht,useEffect:mp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,no(4194308,4,zh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return no(4194308,4,e,t)},useInsertionEffect:function(e,t){return no(4,2,e,t)},useMemo:function(e,t){var n=ln();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ln();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=v1.bind(null,Ue,e),[r.memoizedState,e]},useRef:function(e){var t=ln();return e={current:e},t.memoizedState=e},useState:fp,useDebugValue:au,useDeferredValue:function(e){return ln().memoizedState=e},useTransition:function(){var e=fp(!1),t=e[0];return e=y1.bind(null,e[1]),ln().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ue,s=ln();if($e){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=t(),nt===null)throw Error(ne(349));hr&30||kh(r,t,n)}s.memoizedState=n;var o={value:n,getSnapshot:t};return s.queue=o,mp(wh.bind(null,r,o,e),[e]),r.flags|=2048,is(9,jh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ln(),t=nt.identifierPrefix;if($e){var n=kn,r=bn;n=(r&~(1<<32-Zt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ns++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=x1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},j1={readContext:Ht,useCallback:Ph,useContext:Ht,useEffect:ou,useImperativeHandle:Th,useInsertionEffect:Nh,useLayoutEffect:Eh,useMemo:Lh,useReducer:$a,useRef:Ch,useState:function(){return $a(rs)},useDebugValue:au,useDeferredValue:function(e){var t=qt();return Rh(t,Ye.memoizedState,e)},useTransition:function(){var e=$a(rs)[0],t=qt().memoizedState;return[e,t]},useMutableSource:vh,useSyncExternalStore:bh,useId:Ah,unstable_isNewReconciler:!1},w1={readContext:Ht,useCallback:Ph,useContext:Ht,useEffect:ou,useImperativeHandle:Th,useInsertionEffect:Nh,useLayoutEffect:Eh,useMemo:Lh,useReducer:Fa,useRef:Ch,useState:function(){return Fa(rs)},useDebugValue:au,useDeferredValue:function(e){var t=qt();return Ye===null?t.memoizedState=e:Rh(t,Ye.memoizedState,e)},useTransition:function(){var e=Fa(rs)[0],t=qt().memoizedState;return[e,t]},useMutableSource:vh,useSyncExternalStore:bh,useId:Ah,unstable_isNewReconciler:!1};function Gt(e,t){if(e&&e.defaultProps){t=We({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Vl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:We({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Zo={isMounted:function(e){return(e=e._reactInternals)?br(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ft(),s=qn(e),o=jn(r,s);o.payload=t,n!=null&&(o.callback=n),t=Vn(e,o,s),t!==null&&(en(t,e,s,r),eo(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ft(),s=qn(e),o=jn(r,s);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Vn(e,o,s),t!==null&&(en(t,e,s,r),eo(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ft(),r=qn(e),s=jn(n,r);s.tag=2,t!=null&&(s.callback=t),t=Vn(e,s,r),t!==null&&(en(t,e,r,n),eo(t,e,r))}};function hp(e,t,n,r,s,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Qi(n,r)||!Qi(s,o):!0}function Dh(e,t,n){var r=!1,s=Qn,o=t.contextType;return typeof o=="object"&&o!==null?o=Ht(o):(s=kt(t)?fr:ct.current,r=t.contextTypes,o=(r=r!=null)?Jr(e,s):Qn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Zo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=o),t}function gp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Zo.enqueueReplaceState(t,t.state,null)}function Hl(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Zc(e);var o=t.contextType;typeof o=="object"&&o!==null?s.context=Ht(o):(o=kt(t)?fr:ct.current,s.context=Jr(e,o)),s.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Vl(e,t,o,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Zo.enqueueReplaceState(s,s.state,null),No(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Yr(e,t){try{var n="",r=t;do n+=Yy(r),r=r.return;while(r);var s=n}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:s,digest:null}}function Ba(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ql(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _1=typeof WeakMap=="function"?WeakMap:Map;function $h(e,t,n){n=jn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Lo||(Lo=!0,nc=r),ql(e,t)},n}function Fh(e,t,n){n=jn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){ql(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ql(e,t),typeof r!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function xp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _1;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=D1.bind(null,e,t,n),t.then(e,e))}function yp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vp(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=jn(-1,1),t.tag=2,Vn(n,t,1))),n.lanes|=1),e)}var S1=En.ReactCurrentOwner,vt=!1;function pt(e,t,n,r){t.child=e===null?hh(t,null,n,r):Gr(t,e.child,n,r)}function bp(e,t,n,r,s){n=n.render;var o=t.ref;return Ur(t,s),r=iu(e,t,n,r,o,s),n=su(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Nn(e,t,s)):($e&&n&&qc(t),t.flags|=1,pt(e,t,r,s),t.child)}function kp(e,t,n,r,s){if(e===null){var o=n.type;return typeof o=="function"&&!hu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Bh(e,t,o,r,s)):(e=oo(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&s)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Qi,n(a,r)&&e.ref===t.ref)return Nn(e,t,s)}return t.flags|=1,e=Jn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Bh(e,t,n,r,s){if(e!==null){var o=e.memoizedProps;if(Qi(o,r)&&e.ref===t.ref)if(vt=!1,t.pendingProps=r=o,(e.lanes&s)!==0)e.flags&131072&&(vt=!0);else return t.lanes=e.lanes,Nn(e,t,s)}return Jl(e,t,n,r,s)}function Uh(e,t,n){var r=t.pendingProps,s=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(Mr,Nt),Nt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ie(Mr,Nt),Nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ie(Mr,Nt),Nt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ie(Mr,Nt),Nt|=r;return pt(e,t,s,n),t.child}function Wh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Jl(e,t,n,r,s){var o=kt(n)?fr:ct.current;return o=Jr(t,o),Ur(t,s),n=iu(e,t,n,r,o,s),r=su(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Nn(e,t,s)):($e&&r&&qc(t),t.flags|=1,pt(e,t,n,s),t.child)}function jp(e,t,n,r,s){if(kt(n)){var o=!0;jo(t)}else o=!1;if(Ur(t,s),t.stateNode===null)ro(e,t),Dh(t,n,r),Hl(t,n,r,s),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ht(u):(u=kt(n)?fr:ct.current,u=Jr(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&gp(t,a,r,u),Rn=!1;var f=t.memoizedState;a.state=f,No(t,r,a,s),c=t.memoizedState,l!==r||f!==c||bt.current||Rn?(typeof d=="function"&&(Vl(t,n,d,r),c=t.memoizedState),(l=Rn||hp(t,n,l,r,f,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,xh(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Gt(t.type,l),a.props=u,p=t.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ht(c):(c=kt(n)?fr:ct.current,c=Jr(t,c));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||f!==c)&&gp(t,a,r,c),Rn=!1,f=t.memoizedState,a.state=f,No(t,r,a,s);var y=t.memoizedState;l!==p||f!==y||bt.current||Rn?(typeof m=="function"&&(Vl(t,n,m,r),y=t.memoizedState),(u=Rn||hp(t,n,u,r,f,y,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Kl(e,t,n,r,o,s)}function Kl(e,t,n,r,s,o){Wh(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return s&&ap(t,n,!1),Nn(e,t,o);r=t.stateNode,S1.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Gr(t,e.child,null,o),t.child=Gr(t,null,l,o)):pt(e,t,l,o),t.memoizedState=r.state,s&&ap(t,n,!0),t.child}function Vh(e){var t=e.stateNode;t.pendingContext?op(e,t.pendingContext,t.pendingContext!==t.context):t.context&&op(e,t.context,!1),eu(e,t.containerInfo)}function wp(e,t,n,r,s){return Kr(),Kc(s),t.flags|=256,pt(e,t,n,r),t.child}var Gl={dehydrated:null,treeContext:null,retryLane:0};function Ql(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hh(e,t,n){var r=t.pendingProps,s=Be.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(s&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Ie(Be,s&1),e===null)return Ul(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=na(a,r,0,null),e=ur(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ql(n),t.memoizedState=Gl,e):lu(t,a));if(s=e.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return C1(e,t,a,r,l,s,n);if(o){o=r.fallback,a=t.mode,s=e.child,l=s.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Jn(s,c),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?o=Jn(l,o):(o=ur(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Ql(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Gl,r}return o=e.child,e=o.sibling,r=Jn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function lu(e,t){return t=na({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fs(e,t,n,r){return r!==null&&Kc(r),Gr(t,e.child,null,n),e=lu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function C1(e,t,n,r,s,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Ba(Error(ne(422))),Fs(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,s=t.mode,r=na({mode:"visible",children:r.children},s,0,null),o=ur(o,s,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Gr(t,e.child,null,a),t.child.memoizedState=Ql(a),t.memoizedState=Gl,o);if(!(t.mode&1))return Fs(e,t,a,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(ne(419)),r=Ba(o,r,void 0),Fs(e,t,a,r)}if(l=(a&e.childLanes)!==0,vt||l){if(r=nt,r!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|a)?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,Cn(e,s),en(r,e,s,-1))}return mu(),r=Ba(Error(ne(421))),Fs(e,t,a,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=$1.bind(null,e),s._reactRetry=t,null):(e=o.treeContext,Pt=Wn(s.nextSibling),At=t,$e=!0,Yt=null,e!==null&&($t[Ft++]=bn,$t[Ft++]=kn,$t[Ft++]=mr,bn=e.id,kn=e.overflow,mr=t),t=lu(t,r.children),t.flags|=4096,t)}function _p(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Wl(e.return,t,n)}function Ua(e,t,n,r,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=s)}function qh(e,t,n){var r=t.pendingProps,s=r.revealOrder,o=r.tail;if(pt(e,t,r.children,n),r=Be.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_p(e,n,t);else if(e.tag===19)_p(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ie(Be,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Eo(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Ua(t,!1,s,n,o);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Eo(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Ua(t,!0,n,null,o);break;case"together":Ua(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ro(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),gr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(ne(153));if(t.child!==null){for(e=t.child,n=Jn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function N1(e,t,n){switch(t.tag){case 3:Vh(t),Kr();break;case 5:yh(t);break;case 1:kt(t.type)&&jo(t);break;case 4:eu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;Ie(So,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ie(Be,Be.current&1),t.flags|=128,null):n&t.child.childLanes?Hh(e,t,n):(Ie(Be,Be.current&1),e=Nn(e,t,n),e!==null?e.sibling:null);Ie(Be,Be.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return qh(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ie(Be,Be.current),r)break;return null;case 22:case 23:return t.lanes=0,Uh(e,t,n)}return Nn(e,t,n)}var Jh,Yl,Kh,Gh;Jh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yl=function(){};Kh=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,lr(mn.current);var o=null;switch(n){case"input":s=vl(e,s),r=vl(e,r),o=[];break;case"select":s=We({},s,{value:void 0}),r=We({},r,{value:void 0}),o=[];break;case"textarea":s=jl(e,s),r=jl(e,r),o=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=bo)}_l(n,r);var a;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var l=s[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Wi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Wi.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Oe("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Gh=function(e,t,n,r){n!==r&&(t.flags|=4)};function yi(e,t){if(!$e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function at(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function E1(e,t,n){var r=t.pendingProps;switch(Jc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(t),null;case 1:return kt(t.type)&&ko(),at(t),null;case 3:return r=t.stateNode,Qr(),De(bt),De(ct),nu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ds(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Yt!==null&&(sc(Yt),Yt=null))),Yl(e,t),at(t),null;case 5:tu(t);var s=lr(ts.current);if(n=t.type,e!==null&&t.stateNode!=null)Kh(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(ne(166));return at(t),null}if(e=lr(mn.current),Ds(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[un]=t,r[Zi]=o,e=(t.mode&1)!==0,n){case"dialog":Oe("cancel",r),Oe("close",r);break;case"iframe":case"object":case"embed":Oe("load",r);break;case"video":case"audio":for(s=0;s<Ei.length;s++)Oe(Ei[s],r);break;case"source":Oe("error",r);break;case"img":case"image":case"link":Oe("error",r),Oe("load",r);break;case"details":Oe("toggle",r);break;case"input":Rd(r,o),Oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Oe("invalid",r);break;case"textarea":Id(r,o),Oe("invalid",r)}_l(n,o),s=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Os(r.textContent,l,e),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Os(r.textContent,l,e),s=["children",""+l]):Wi.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Oe("scroll",r)}switch(n){case"input":zs(r),Ad(r,o,!0);break;case"textarea":zs(r),Md(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=bo)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[un]=t,e[Zi]=r,Jh(e,t,!1,!1),t.stateNode=e;e:{switch(a=Sl(n,r),n){case"dialog":Oe("cancel",e),Oe("close",e),s=r;break;case"iframe":case"object":case"embed":Oe("load",e),s=r;break;case"video":case"audio":for(s=0;s<Ei.length;s++)Oe(Ei[s],e);s=r;break;case"source":Oe("error",e),s=r;break;case"img":case"image":case"link":Oe("error",e),Oe("load",e),s=r;break;case"details":Oe("toggle",e),s=r;break;case"input":Rd(e,r),s=vl(e,r),Oe("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=We({},r,{value:void 0}),Oe("invalid",e);break;case"textarea":Id(e,r),s=jl(e,r),Oe("invalid",e);break;default:s=r}_l(n,s),l=s;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Cm(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&_m(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Vi(e,c):typeof c=="number"&&Vi(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Wi.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Oe("scroll",e):c!=null&&Lc(e,o,c,a))}switch(n){case"input":zs(e),Ad(e,r,!1);break;case"textarea":zs(e),Md(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Gn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Dr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Dr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=bo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return at(t),null;case 6:if(e&&t.stateNode!=null)Gh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(ne(166));if(n=lr(ts.current),lr(mn.current),Ds(t)){if(r=t.stateNode,n=t.memoizedProps,r[un]=t,(o=r.nodeValue!==n)&&(e=At,e!==null))switch(e.tag){case 3:Os(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Os(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[un]=t,t.stateNode=r}return at(t),null;case 13:if(De(Be),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($e&&Pt!==null&&t.mode&1&&!(t.flags&128))fh(),Kr(),t.flags|=98560,o=!1;else if(o=Ds(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(ne(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(ne(317));o[un]=t}else Kr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;at(t),o=!1}else Yt!==null&&(sc(Yt),Yt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Be.current&1?Xe===0&&(Xe=3):mu())),t.updateQueue!==null&&(t.flags|=4),at(t),null);case 4:return Qr(),Yl(e,t),e===null&&Yi(t.stateNode.containerInfo),at(t),null;case 10:return Yc(t.type._context),at(t),null;case 17:return kt(t.type)&&ko(),at(t),null;case 19:if(De(Be),o=t.memoizedState,o===null)return at(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)yi(o,!1);else{if(Xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Eo(e),a!==null){for(t.flags|=128,yi(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ie(Be,Be.current&1|2),t.child}e=e.sibling}o.tail!==null&&He()>Xr&&(t.flags|=128,r=!0,yi(o,!1),t.lanes=4194304)}else{if(!r)if(e=Eo(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!$e)return at(t),null}else 2*He()-o.renderingStartTime>Xr&&n!==1073741824&&(t.flags|=128,r=!0,yi(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=He(),t.sibling=null,n=Be.current,Ie(Be,r?n&1|2:n&1),t):(at(t),null);case 22:case 23:return fu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Nt&1073741824&&(at(t),t.subtreeFlags&6&&(t.flags|=8192)):at(t),null;case 24:return null;case 25:return null}throw Error(ne(156,t.tag))}function z1(e,t){switch(Jc(t),t.tag){case 1:return kt(t.type)&&ko(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qr(),De(bt),De(ct),nu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return tu(t),null;case 13:if(De(Be),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(ne(340));Kr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return De(Be),null;case 4:return Qr(),null;case 10:return Yc(t.type._context),null;case 22:case 23:return fu(),null;case 24:return null;default:return null}}var Bs=!1,lt=!1,T1=typeof WeakSet=="function"?WeakSet:Set,ue=null;function Ir(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(e,t,r)}else n.current=null}function Xl(e,t,n){try{n()}catch(r){Ve(e,t,r)}}var Sp=!1;function P1(e,t){if(Il=xo,e=eh(),Hc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var m;p!==n||s!==0&&p.nodeType!==3||(l=a+s),p!==o||r!==0&&p.nodeType!==3||(c=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===e)break t;if(f===n&&++u===s&&(l=a),f===o&&++d===r&&(c=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ml={focusedElem:e,selectionRange:n},xo=!1,ue=t;ue!==null;)if(t=ue,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ue=e;else for(;ue!==null;){t=ue;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var j=y.memoizedProps,N=y.memoizedState,v=t.stateNode,g=v.getSnapshotBeforeUpdate(t.elementType===t.type?j:Gt(t.type,j),N);v.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(T){Ve(t,t.return,T)}if(e=t.sibling,e!==null){e.return=t.return,ue=e;break}ue=t.return}return y=Sp,Sp=!1,y}function Mi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var o=s.destroy;s.destroy=void 0,o!==void 0&&Xl(t,n,o)}s=s.next}while(s!==r)}}function ea(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Zl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Qh(e){var t=e.alternate;t!==null&&(e.alternate=null,Qh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[un],delete t[Zi],delete t[$l],delete t[f1],delete t[m1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Yh(e){return e.tag===5||e.tag===3||e.tag===4}function Cp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ec(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=bo));else if(r!==4&&(e=e.child,e!==null))for(ec(e,t,n),e=e.sibling;e!==null;)ec(e,t,n),e=e.sibling}function tc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(tc(e,t,n),e=e.sibling;e!==null;)tc(e,t,n),e=e.sibling}var rt=null,Qt=!1;function Tn(e,t,n){for(n=n.child;n!==null;)Xh(e,t,n),n=n.sibling}function Xh(e,t,n){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(qo,n)}catch{}switch(n.tag){case 5:lt||Ir(n,t);case 6:var r=rt,s=Qt;rt=null,Tn(e,t,n),rt=r,Qt=s,rt!==null&&(Qt?(e=rt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):rt.removeChild(n.stateNode));break;case 18:rt!==null&&(Qt?(e=rt,n=n.stateNode,e.nodeType===8?Ia(e.parentNode,n):e.nodeType===1&&Ia(e,n),Ki(e)):Ia(rt,n.stateNode));break;case 4:r=rt,s=Qt,rt=n.stateNode.containerInfo,Qt=!0,Tn(e,t,n),rt=r,Qt=s;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var o=s,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Xl(n,t,a),s=s.next}while(s!==r)}Tn(e,t,n);break;case 1:if(!lt&&(Ir(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ve(n,t,l)}Tn(e,t,n);break;case 21:Tn(e,t,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,Tn(e,t,n),lt=r):Tn(e,t,n);break;default:Tn(e,t,n)}}function Np(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new T1),t.forEach(function(r){var s=F1.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:rt=l.stateNode,Qt=!1;break e;case 3:rt=l.stateNode.containerInfo,Qt=!0;break e;case 4:rt=l.stateNode.containerInfo,Qt=!0;break e}l=l.return}if(rt===null)throw Error(ne(160));Xh(o,a,s),rt=null,Qt=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(u){Ve(s,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Zh(t,e),t=t.sibling}function Zh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Kt(t,e),an(e),r&4){try{Mi(3,e,e.return),ea(3,e)}catch(j){Ve(e,e.return,j)}try{Mi(5,e,e.return)}catch(j){Ve(e,e.return,j)}}break;case 1:Kt(t,e),an(e),r&512&&n!==null&&Ir(n,n.return);break;case 5:if(Kt(t,e),an(e),r&512&&n!==null&&Ir(n,n.return),e.flags&32){var s=e.stateNode;try{Vi(s,"")}catch(j){Ve(e,e.return,j)}}if(r&4&&(s=e.stateNode,s!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&km(s,o),Sl(l,a);var u=Sl(l,o);for(a=0;a<c.length;a+=2){var d=c[a],p=c[a+1];d==="style"?Cm(s,p):d==="dangerouslySetInnerHTML"?_m(s,p):d==="children"?Vi(s,p):Lc(s,d,p,u)}switch(l){case"input":bl(s,o);break;case"textarea":jm(s,o);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Dr(s,!!o.multiple,m,!1):f!==!!o.multiple&&(o.defaultValue!=null?Dr(s,!!o.multiple,o.defaultValue,!0):Dr(s,!!o.multiple,o.multiple?[]:"",!1))}s[Zi]=o}catch(j){Ve(e,e.return,j)}}break;case 6:if(Kt(t,e),an(e),r&4){if(e.stateNode===null)throw Error(ne(162));s=e.stateNode,o=e.memoizedProps;try{s.nodeValue=o}catch(j){Ve(e,e.return,j)}}break;case 3:if(Kt(t,e),an(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ki(t.containerInfo)}catch(j){Ve(e,e.return,j)}break;case 4:Kt(t,e),an(e);break;case 13:Kt(t,e),an(e),s=e.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(du=He())),r&4&&Np(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(lt=(u=lt)||d,Kt(t,e),lt=u):Kt(t,e),an(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(ue=e,d=e.child;d!==null;){for(p=ue=d;ue!==null;){switch(f=ue,m=f.child,f.tag){case 0:case 11:case 14:case 15:Mi(4,f,f.return);break;case 1:Ir(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(j){Ve(r,n,j)}}break;case 5:Ir(f,f.return);break;case 22:if(f.memoizedState!==null){zp(p);continue}}m!==null?(m.return=f,ue=m):zp(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{s=p.stateNode,u?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Sm("display",a))}catch(j){Ve(e,e.return,j)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(j){Ve(e,e.return,j)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Kt(t,e),an(e),r&4&&Np(e);break;case 21:break;default:Kt(t,e),an(e)}}function an(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Yh(n)){var r=n;break e}n=n.return}throw Error(ne(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Vi(s,""),r.flags&=-33);var o=Cp(e);tc(e,o,s);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Cp(e);ec(e,l,a);break;default:throw Error(ne(161))}}catch(c){Ve(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function L1(e,t,n){ue=e,eg(e)}function eg(e,t,n){for(var r=(e.mode&1)!==0;ue!==null;){var s=ue,o=s.child;if(s.tag===22&&r){var a=s.memoizedState!==null||Bs;if(!a){var l=s.alternate,c=l!==null&&l.memoizedState!==null||lt;l=Bs;var u=lt;if(Bs=a,(lt=c)&&!u)for(ue=s;ue!==null;)a=ue,c=a.child,a.tag===22&&a.memoizedState!==null?Tp(s):c!==null?(c.return=a,ue=c):Tp(s);for(;o!==null;)ue=o,eg(o),o=o.sibling;ue=s,Bs=l,lt=u}Ep(e)}else s.subtreeFlags&8772&&o!==null?(o.return=s,ue=o):Ep(e)}}function Ep(e){for(;ue!==null;){var t=ue;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:lt||ea(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!lt)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Gt(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&pp(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}pp(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Ki(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}lt||t.flags&512&&Zl(t)}catch(f){Ve(t,t.return,f)}}if(t===e){ue=null;break}if(n=t.sibling,n!==null){n.return=t.return,ue=n;break}ue=t.return}}function zp(e){for(;ue!==null;){var t=ue;if(t===e){ue=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ue=n;break}ue=t.return}}function Tp(e){for(;ue!==null;){var t=ue;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ea(4,t)}catch(c){Ve(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(c){Ve(t,s,c)}}var o=t.return;try{Zl(t)}catch(c){Ve(t,o,c)}break;case 5:var a=t.return;try{Zl(t)}catch(c){Ve(t,a,c)}}}catch(c){Ve(t,t.return,c)}if(t===e){ue=null;break}var l=t.sibling;if(l!==null){l.return=t.return,ue=l;break}ue=t.return}}var R1=Math.ceil,Po=En.ReactCurrentDispatcher,cu=En.ReactCurrentOwner,Vt=En.ReactCurrentBatchConfig,Ne=0,nt=null,Ge=null,it=0,Nt=0,Mr=Zn(0),Xe=0,ss=null,gr=0,ta=0,uu=0,Oi=null,yt=null,du=0,Xr=1/0,yn=null,Lo=!1,nc=null,Hn=null,Us=!1,On=null,Ro=0,Di=0,rc=null,io=-1,so=0;function ft(){return Ne&6?He():io!==-1?io:io=He()}function qn(e){return e.mode&1?Ne&2&&it!==0?it&-it:g1.transition!==null?(so===0&&(so=Dm()),so):(e=Pe,e!==0||(e=window.event,e=e===void 0?16:Hm(e.type)),e):1}function en(e,t,n,r){if(50<Di)throw Di=0,rc=null,Error(ne(185));fs(e,n,r),(!(Ne&2)||e!==nt)&&(e===nt&&(!(Ne&2)&&(ta|=n),Xe===4&&In(e,it)),jt(e,r),n===1&&Ne===0&&!(t.mode&1)&&(Xr=He()+500,Yo&&er()))}function jt(e,t){var n=e.callbackNode;gv(e,t);var r=go(e,e===nt?it:0);if(r===0)n!==null&&$d(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&$d(n),t===1)e.tag===0?h1(Pp.bind(null,e)):uh(Pp.bind(null,e)),d1(function(){!(Ne&6)&&er()}),n=null;else{switch($m(r)){case 1:n=Oc;break;case 4:n=Mm;break;case 16:n=ho;break;case 536870912:n=Om;break;default:n=ho}n=lg(n,tg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function tg(e,t){if(io=-1,so=0,Ne&6)throw Error(ne(327));var n=e.callbackNode;if(Wr()&&e.callbackNode!==n)return null;var r=go(e,e===nt?it:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ao(e,r);else{t=r;var s=Ne;Ne|=2;var o=rg();(nt!==e||it!==t)&&(yn=null,Xr=He()+500,cr(e,t));do try{M1();break}catch(l){ng(e,l)}while(!0);Qc(),Po.current=o,Ne=s,Ge!==null?t=0:(nt=null,it=0,t=Xe)}if(t!==0){if(t===2&&(s=Tl(e),s!==0&&(r=s,t=ic(e,s))),t===1)throw n=ss,cr(e,0),In(e,r),jt(e,He()),n;if(t===6)In(e,r);else{if(s=e.current.alternate,!(r&30)&&!A1(s)&&(t=Ao(e,r),t===2&&(o=Tl(e),o!==0&&(r=o,t=ic(e,o))),t===1))throw n=ss,cr(e,0),In(e,r),jt(e,He()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(ne(345));case 2:ir(e,yt,yn);break;case 3:if(In(e,r),(r&130023424)===r&&(t=du+500-He(),10<t)){if(go(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){ft(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Dl(ir.bind(null,e,yt,yn),t);break}ir(e,yt,yn);break;case 4:if(In(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var a=31-Zt(r);o=1<<a,a=t[a],a>s&&(s=a),r&=~o}if(r=s,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*R1(r/1960))-r,10<r){e.timeoutHandle=Dl(ir.bind(null,e,yt,yn),r);break}ir(e,yt,yn);break;case 5:ir(e,yt,yn);break;default:throw Error(ne(329))}}}return jt(e,He()),e.callbackNode===n?tg.bind(null,e):null}function ic(e,t){var n=Oi;return e.current.memoizedState.isDehydrated&&(cr(e,t).flags|=256),e=Ao(e,t),e!==2&&(t=yt,yt=n,t!==null&&sc(t)),e}function sc(e){yt===null?yt=e:yt.push.apply(yt,e)}function A1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],o=s.getSnapshot;s=s.value;try{if(!nn(o(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function In(e,t){for(t&=~uu,t&=~ta,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Zt(t),r=1<<n;e[n]=-1,t&=~r}}function Pp(e){if(Ne&6)throw Error(ne(327));Wr();var t=go(e,0);if(!(t&1))return jt(e,He()),null;var n=Ao(e,t);if(e.tag!==0&&n===2){var r=Tl(e);r!==0&&(t=r,n=ic(e,r))}if(n===1)throw n=ss,cr(e,0),In(e,t),jt(e,He()),n;if(n===6)throw Error(ne(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ir(e,yt,yn),jt(e,He()),null}function pu(e,t){var n=Ne;Ne|=1;try{return e(t)}finally{Ne=n,Ne===0&&(Xr=He()+500,Yo&&er())}}function xr(e){On!==null&&On.tag===0&&!(Ne&6)&&Wr();var t=Ne;Ne|=1;var n=Vt.transition,r=Pe;try{if(Vt.transition=null,Pe=1,e)return e()}finally{Pe=r,Vt.transition=n,Ne=t,!(Ne&6)&&er()}}function fu(){Nt=Mr.current,De(Mr)}function cr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,u1(n)),Ge!==null)for(n=Ge.return;n!==null;){var r=n;switch(Jc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ko();break;case 3:Qr(),De(bt),De(ct),nu();break;case 5:tu(r);break;case 4:Qr();break;case 13:De(Be);break;case 19:De(Be);break;case 10:Yc(r.type._context);break;case 22:case 23:fu()}n=n.return}if(nt=e,Ge=e=Jn(e.current,null),it=Nt=t,Xe=0,ss=null,uu=ta=gr=0,yt=Oi=null,ar!==null){for(t=0;t<ar.length;t++)if(n=ar[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=s,r.next=a}n.pending=r}ar=null}return e}function ng(e,t){do{var n=Ge;try{if(Qc(),to.current=To,zo){for(var r=Ue.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}zo=!1}if(hr=0,tt=Ye=Ue=null,Ii=!1,ns=0,cu.current=null,n===null||n.return===null){Xe=1,ss=t,Ge=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=it,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=yp(a);if(m!==null){m.flags&=-257,vp(m,a,l,o,t),m.mode&1&&xp(o,u,t),t=m,c=u;var y=t.updateQueue;if(y===null){var j=new Set;j.add(c),t.updateQueue=j}else y.add(c);break e}else{if(!(t&1)){xp(o,u,t),mu();break e}c=Error(ne(426))}}else if($e&&l.mode&1){var N=yp(a);if(N!==null){!(N.flags&65536)&&(N.flags|=256),vp(N,a,l,o,t),Kc(Yr(c,l));break e}}o=c=Yr(c,l),Xe!==4&&(Xe=2),Oi===null?Oi=[o]:Oi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=$h(o,c,t);dp(o,v);break e;case 1:l=c;var g=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Hn===null||!Hn.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var T=Fh(o,l,t);dp(o,T);break e}}o=o.return}while(o!==null)}sg(n)}catch(z){t=z,Ge===n&&n!==null&&(Ge=n=n.return);continue}break}while(!0)}function rg(){var e=Po.current;return Po.current=To,e===null?To:e}function mu(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),nt===null||!(gr&268435455)&&!(ta&268435455)||In(nt,it)}function Ao(e,t){var n=Ne;Ne|=2;var r=rg();(nt!==e||it!==t)&&(yn=null,cr(e,t));do try{I1();break}catch(s){ng(e,s)}while(!0);if(Qc(),Ne=n,Po.current=r,Ge!==null)throw Error(ne(261));return nt=null,it=0,Xe}function I1(){for(;Ge!==null;)ig(Ge)}function M1(){for(;Ge!==null&&!av();)ig(Ge)}function ig(e){var t=ag(e.alternate,e,Nt);e.memoizedProps=e.pendingProps,t===null?sg(e):Ge=t,cu.current=null}function sg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=z1(n,t),n!==null){n.flags&=32767,Ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Xe=6,Ge=null;return}}else if(n=E1(n,t,Nt),n!==null){Ge=n;return}if(t=t.sibling,t!==null){Ge=t;return}Ge=t=e}while(t!==null);Xe===0&&(Xe=5)}function ir(e,t,n){var r=Pe,s=Vt.transition;try{Vt.transition=null,Pe=1,O1(e,t,n,r)}finally{Vt.transition=s,Pe=r}return null}function O1(e,t,n,r){do Wr();while(On!==null);if(Ne&6)throw Error(ne(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(ne(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(xv(e,o),e===nt&&(Ge=nt=null,it=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Us||(Us=!0,lg(ho,function(){return Wr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Vt.transition,Vt.transition=null;var a=Pe;Pe=1;var l=Ne;Ne|=4,cu.current=null,P1(e,n),Zh(n,e),r1(Ml),xo=!!Il,Ml=Il=null,e.current=n,L1(n),lv(),Ne=l,Pe=a,Vt.transition=o}else e.current=n;if(Us&&(Us=!1,On=e,Ro=s),o=e.pendingLanes,o===0&&(Hn=null),dv(n.stateNode),jt(e,He()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Lo)throw Lo=!1,e=nc,nc=null,e;return Ro&1&&e.tag!==0&&Wr(),o=e.pendingLanes,o&1?e===rc?Di++:(Di=0,rc=e):Di=0,er(),null}function Wr(){if(On!==null){var e=$m(Ro),t=Vt.transition,n=Pe;try{if(Vt.transition=null,Pe=16>e?16:e,On===null)var r=!1;else{if(e=On,On=null,Ro=0,Ne&6)throw Error(ne(331));var s=Ne;for(Ne|=4,ue=e.current;ue!==null;){var o=ue,a=o.child;if(ue.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(ue=u;ue!==null;){var d=ue;switch(d.tag){case 0:case 11:case 15:Mi(8,d,o)}var p=d.child;if(p!==null)p.return=d,ue=p;else for(;ue!==null;){d=ue;var f=d.sibling,m=d.return;if(Qh(d),d===u){ue=null;break}if(f!==null){f.return=m,ue=f;break}ue=m}}}var y=o.alternate;if(y!==null){var j=y.child;if(j!==null){y.child=null;do{var N=j.sibling;j.sibling=null,j=N}while(j!==null)}}ue=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,ue=a;else e:for(;ue!==null;){if(o=ue,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Mi(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,ue=v;break e}ue=o.return}}var g=e.current;for(ue=g;ue!==null;){a=ue;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,ue=x;else e:for(a=g;ue!==null;){if(l=ue,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ea(9,l)}}catch(z){Ve(l,l.return,z)}if(l===a){ue=null;break e}var T=l.sibling;if(T!==null){T.return=l.return,ue=T;break e}ue=l.return}}if(Ne=s,er(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(qo,e)}catch{}r=!0}return r}finally{Pe=n,Vt.transition=t}}return!1}function Lp(e,t,n){t=Yr(n,t),t=$h(e,t,1),e=Vn(e,t,1),t=ft(),e!==null&&(fs(e,1,t),jt(e,t))}function Ve(e,t,n){if(e.tag===3)Lp(e,e,n);else for(;t!==null;){if(t.tag===3){Lp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hn===null||!Hn.has(r))){e=Yr(n,e),e=Fh(t,e,1),t=Vn(t,e,1),e=ft(),t!==null&&(fs(t,1,e),jt(t,e));break}}t=t.return}}function D1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ft(),e.pingedLanes|=e.suspendedLanes&n,nt===e&&(it&n)===n&&(Xe===4||Xe===3&&(it&130023424)===it&&500>He()-du?cr(e,0):uu|=n),jt(e,t)}function og(e,t){t===0&&(e.mode&1?(t=Ls,Ls<<=1,!(Ls&130023424)&&(Ls=4194304)):t=1);var n=ft();e=Cn(e,t),e!==null&&(fs(e,t,n),jt(e,n))}function $1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),og(e,n)}function F1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(ne(314))}r!==null&&r.delete(t),og(e,n)}var ag;ag=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||bt.current)vt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return vt=!1,N1(e,t,n);vt=!!(e.flags&131072)}else vt=!1,$e&&t.flags&1048576&&dh(t,_o,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ro(e,t),e=t.pendingProps;var s=Jr(t,ct.current);Ur(t,n),s=iu(null,t,r,e,s,n);var o=su();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,kt(r)?(o=!0,jo(t)):o=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Zc(t),s.updater=Zo,t.stateNode=s,s._reactInternals=t,Hl(t,r,e,n),t=Kl(null,t,r,!0,o,n)):(t.tag=0,$e&&o&&qc(t),pt(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ro(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=U1(r),e=Gt(r,e),s){case 0:t=Jl(null,t,r,e,n);break e;case 1:t=jp(null,t,r,e,n);break e;case 11:t=bp(null,t,r,e,n);break e;case 14:t=kp(null,t,r,Gt(r.type,e),n);break e}throw Error(ne(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Gt(r,s),Jl(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Gt(r,s),jp(e,t,r,s,n);case 3:e:{if(Vh(t),e===null)throw Error(ne(387));r=t.pendingProps,o=t.memoizedState,s=o.element,xh(e,t),No(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){s=Yr(Error(ne(423)),t),t=wp(e,t,r,n,s);break e}else if(r!==s){s=Yr(Error(ne(424)),t),t=wp(e,t,r,n,s);break e}else for(Pt=Wn(t.stateNode.containerInfo.firstChild),At=t,$e=!0,Yt=null,n=hh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Kr(),r===s){t=Nn(e,t,n);break e}pt(e,t,r,n)}t=t.child}return t;case 5:return yh(t),e===null&&Ul(t),r=t.type,s=t.pendingProps,o=e!==null?e.memoizedProps:null,a=s.children,Ol(r,s)?a=null:o!==null&&Ol(r,o)&&(t.flags|=32),Wh(e,t),pt(e,t,a,n),t.child;case 6:return e===null&&Ul(t),null;case 13:return Hh(e,t,n);case 4:return eu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Gr(t,null,r,n):pt(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Gt(r,s),bp(e,t,r,s,n);case 7:return pt(e,t,t.pendingProps,n),t.child;case 8:return pt(e,t,t.pendingProps.children,n),t.child;case 12:return pt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,o=t.memoizedProps,a=s.value,Ie(So,r._currentValue),r._currentValue=a,o!==null)if(nn(o.value,a)){if(o.children===s.children&&!bt.current){t=Nn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=jn(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Wl(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(ne(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Wl(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}pt(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,Ur(t,n),s=Ht(s),r=r(s),t.flags|=1,pt(e,t,r,n),t.child;case 14:return r=t.type,s=Gt(r,t.pendingProps),s=Gt(r.type,s),kp(e,t,r,s,n);case 15:return Bh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Gt(r,s),ro(e,t),t.tag=1,kt(r)?(e=!0,jo(t)):e=!1,Ur(t,n),Dh(t,r,s),Hl(t,r,s,n),Kl(null,t,r,!0,e,n);case 19:return qh(e,t,n);case 22:return Uh(e,t,n)}throw Error(ne(156,t.tag))};function lg(e,t){return Im(e,t)}function B1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(e,t,n,r){return new B1(e,t,n,r)}function hu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function U1(e){if(typeof e=="function")return hu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ac)return 11;if(e===Ic)return 14}return 2}function Jn(e,t){var n=e.alternate;return n===null?(n=Ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function oo(e,t,n,r,s,o){var a=2;if(r=e,typeof e=="function")hu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Cr:return ur(n.children,s,o,t);case Rc:a=8,s|=8;break;case hl:return e=Ut(12,n,t,s|2),e.elementType=hl,e.lanes=o,e;case gl:return e=Ut(13,n,t,s),e.elementType=gl,e.lanes=o,e;case xl:return e=Ut(19,n,t,s),e.elementType=xl,e.lanes=o,e;case ym:return na(n,s,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gm:a=10;break e;case xm:a=9;break e;case Ac:a=11;break e;case Ic:a=14;break e;case Ln:a=16,r=null;break e}throw Error(ne(130,e==null?e:typeof e,""))}return t=Ut(a,n,t,s),t.elementType=e,t.type=r,t.lanes=o,t}function ur(e,t,n,r){return e=Ut(7,e,r,t),e.lanes=n,e}function na(e,t,n,r){return e=Ut(22,e,r,t),e.elementType=ym,e.lanes=n,e.stateNode={isHidden:!1},e}function Wa(e,t,n){return e=Ut(6,e,null,t),e.lanes=n,e}function Va(e,t,n){return t=Ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function W1(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_a(0),this.expirationTimes=_a(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_a(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function gu(e,t,n,r,s,o,a,l,c){return e=new W1(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ut(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zc(o),e}function V1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function cg(e){if(!e)return Qn;e=e._reactInternals;e:{if(br(e)!==e||e.tag!==1)throw Error(ne(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(kt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(ne(171))}if(e.tag===1){var n=e.type;if(kt(n))return ch(e,n,t)}return t}function ug(e,t,n,r,s,o,a,l,c){return e=gu(n,r,!0,e,s,o,a,l,c),e.context=cg(null),n=e.current,r=ft(),s=qn(n),o=jn(r,s),o.callback=t??null,Vn(n,o,s),e.current.lanes=s,fs(e,s,r),jt(e,r),e}function ra(e,t,n,r){var s=t.current,o=ft(),a=qn(s);return n=cg(n),t.context===null?t.context=n:t.pendingContext=n,t=jn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Vn(s,t,a),e!==null&&(en(e,s,a,o),eo(e,s,a)),a}function Io(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xu(e,t){Rp(e,t),(e=e.alternate)&&Rp(e,t)}function H1(){return null}var dg=typeof reportError=="function"?reportError:function(e){console.error(e)};function yu(e){this._internalRoot=e}ia.prototype.render=yu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(ne(409));ra(e,t,null,null)};ia.prototype.unmount=yu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xr(function(){ra(null,e,null,null)}),t[Sn]=null}};function ia(e){this._internalRoot=e}ia.prototype.unstable_scheduleHydration=function(e){if(e){var t=Um();e={blockedOn:null,target:e,priority:t};for(var n=0;n<An.length&&t!==0&&t<An[n].priority;n++);An.splice(n,0,e),n===0&&Vm(e)}};function vu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function sa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ap(){}function q1(e,t,n,r,s){if(s){if(typeof r=="function"){var o=r;r=function(){var u=Io(a);o.call(u)}}var a=ug(t,r,e,0,null,!1,!1,"",Ap);return e._reactRootContainer=a,e[Sn]=a.current,Yi(e.nodeType===8?e.parentNode:e),xr(),a}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var u=Io(c);l.call(u)}}var c=gu(e,0,!1,null,null,!1,!1,"",Ap);return e._reactRootContainer=c,e[Sn]=c.current,Yi(e.nodeType===8?e.parentNode:e),xr(function(){ra(t,c,n,r)}),c}function oa(e,t,n,r,s){var o=n._reactRootContainer;if(o){var a=o;if(typeof s=="function"){var l=s;s=function(){var c=Io(a);l.call(c)}}ra(t,a,e,s)}else a=q1(n,t,e,s,r);return Io(a)}Fm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ni(t.pendingLanes);n!==0&&(Dc(t,n|1),jt(t,He()),!(Ne&6)&&(Xr=He()+500,er()))}break;case 13:xr(function(){var r=Cn(e,1);if(r!==null){var s=ft();en(r,e,1,s)}}),xu(e,1)}};$c=function(e){if(e.tag===13){var t=Cn(e,134217728);if(t!==null){var n=ft();en(t,e,134217728,n)}xu(e,134217728)}};Bm=function(e){if(e.tag===13){var t=qn(e),n=Cn(e,t);if(n!==null){var r=ft();en(n,e,t,r)}xu(e,t)}};Um=function(){return Pe};Wm=function(e,t){var n=Pe;try{return Pe=e,t()}finally{Pe=n}};Nl=function(e,t,n){switch(t){case"input":if(bl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Qo(r);if(!s)throw Error(ne(90));bm(r),bl(r,s)}}}break;case"textarea":jm(e,n);break;case"select":t=n.value,t!=null&&Dr(e,!!n.multiple,t,!1)}};zm=pu;Tm=xr;var J1={usingClientEntryPoint:!1,Events:[hs,Tr,Qo,Nm,Em,pu]},vi={findFiberByHostInstance:or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},K1={bundleType:vi.bundleType,version:vi.version,rendererPackageName:vi.rendererPackageName,rendererConfig:vi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:En.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rm(e),e===null?null:e.stateNode},findFiberByHostInstance:vi.findFiberByHostInstance||H1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ws=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ws.isDisabled&&Ws.supportsFiber)try{qo=Ws.inject(K1),fn=Ws}catch{}}Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J1;Mt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vu(t))throw Error(ne(200));return V1(e,t,null,n)};Mt.createRoot=function(e,t){if(!vu(e))throw Error(ne(299));var n=!1,r="",s=dg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=gu(e,1,!1,null,null,n,!1,r,s),e[Sn]=t.current,Yi(e.nodeType===8?e.parentNode:e),new yu(t)};Mt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(ne(188)):(e=Object.keys(e).join(","),Error(ne(268,e)));return e=Rm(t),e=e===null?null:e.stateNode,e};Mt.flushSync=function(e){return xr(e)};Mt.hydrate=function(e,t,n){if(!sa(t))throw Error(ne(200));return oa(null,e,t,!0,n)};Mt.hydrateRoot=function(e,t,n){if(!vu(e))throw Error(ne(405));var r=n!=null&&n.hydratedSources||null,s=!1,o="",a=dg;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=ug(t,null,e,1,n??null,s,!1,o,a),e[Sn]=t.current,Yi(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new ia(t)};Mt.render=function(e,t,n){if(!sa(t))throw Error(ne(200));return oa(null,e,t,!1,n)};Mt.unmountComponentAtNode=function(e){if(!sa(e))throw Error(ne(40));return e._reactRootContainer?(xr(function(){oa(null,null,e,!1,function(){e._reactRootContainer=null,e[Sn]=null})}),!0):!1};Mt.unstable_batchedUpdates=pu;Mt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!sa(n))throw Error(ne(200));if(e==null||e._reactInternals===void 0)throw Error(ne(38));return oa(e,t,n,!1,r)};Mt.version="18.3.1-next-f1338f8080-20240426";function pg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pg)}catch(e){console.error(e)}}pg(),pm.exports=Mt;var fg=pm.exports,Ip=fg;fl.createRoot=Ip.createRoot,fl.hydrateRoot=Ip.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function os(){return os=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},os.apply(this,arguments)}var Dn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Dn||(Dn={}));const Mp="popstate";function G1(e){e===void 0&&(e={});function t(r,s){let{pathname:o,search:a,hash:l}=r.location;return oc("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:mg(s)}return Y1(t,n,null,e)}function Qe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function bu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Q1(){return Math.random().toString(36).substr(2,8)}function Op(e,t){return{usr:e.state,key:e.key,idx:t}}function oc(e,t,n,r){return n===void 0&&(n=null),os({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?oi(t):t,{state:n,key:t&&t.key||r||Q1()})}function mg(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function oi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Y1(e,t,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:o=!1}=r,a=s.history,l=Dn.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(os({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function p(){l=Dn.Pop;let N=d(),v=N==null?null:N-u;u=N,c&&c({action:l,location:j.location,delta:v})}function f(N,v){l=Dn.Push;let g=oc(j.location,N,v);u=d()+1;let x=Op(g,u),T=j.createHref(g);try{a.pushState(x,"",T)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;s.location.assign(T)}o&&c&&c({action:l,location:j.location,delta:1})}function m(N,v){l=Dn.Replace;let g=oc(j.location,N,v);u=d();let x=Op(g,u),T=j.createHref(g);a.replaceState(x,"",T),o&&c&&c({action:l,location:j.location,delta:0})}function y(N){let v=s.location.origin!=="null"?s.location.origin:s.location.href,g=typeof N=="string"?N:mg(N);return g=g.replace(/ $/,"%20"),Qe(v,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,v)}let j={get action(){return l},get location(){return e(s,a)},listen(N){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(Mp,p),c=N,()=>{s.removeEventListener(Mp,p),c=null}},createHref(N){return t(s,N)},createURL:y,encodeLocation(N){let v=y(N);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:m,go(N){return a.go(N)}};return j}var Dp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Dp||(Dp={}));function X1(e,t,n){return n===void 0&&(n="/"),Z1(e,t,n)}function Z1(e,t,n,r){let s=typeof t=="string"?oi(t):t,o=xg(s.pathname||"/",n);if(o==null)return null;let a=hg(e);eb(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=pb(o);l=cb(a[c],u)}return l}function hg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(o,a,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(Qe(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=dr([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(Qe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),hg(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:ab(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))s(o,a);else for(let c of gg(o.path))s(o,a,c)}),t}function gg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,s=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return s?[o,""]:[o];let a=gg(r.join("/")),l=[];return l.push(...a.map(c=>c===""?o:[o,c].join("/"))),s&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function eb(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:lb(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const tb=/^:[\w-]+$/,nb=3,rb=2,ib=1,sb=10,ob=-2,$p=e=>e==="*";function ab(e,t){let n=e.split("/"),r=n.length;return n.some($p)&&(r+=ob),t&&(r+=rb),n.filter(s=>!$p(s)).reduce((s,o)=>s+(tb.test(o)?nb:o===""?ib:sb),r)}function lb(e,t){return e.length===t.length&&e.slice(0,-1).every((r,s)=>r===t[s])?e[e.length-1]-t[t.length-1]:0}function cb(e,t,n){let{routesMeta:r}=e,s={},o="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",p=ub({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),f=c.route;if(!p)return null;Object.assign(s,p.params),a.push({params:s,pathname:dr([o,p.pathname]),pathnameBase:xb(dr([o,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(o=dr([o,p.pathnameBase]))}return a}function ub(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=db(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let o=s[0],a=o.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:f,isOptional:m}=d;if(f==="*"){let j=l[p]||"";a=o.slice(0,o.length-j.length).replace(/(.)\/+$/,"$1")}const y=l[p];return m&&!y?u[f]=void 0:u[f]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function db(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),bu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),r]}function pb(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return bu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function xg(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const fb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mb=e=>fb.test(e);function hb(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:s=""}=typeof e=="string"?oi(e):e,o;if(n)if(mb(n))o=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),bu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?o=Fp(n.substring(1),"/"):o=Fp(n,t)}else o=t;return{pathname:o,search:yb(r),hash:vb(s)}}function Fp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Ha(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function gb(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function yg(e,t){let n=gb(e);return t?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function vg(e,t,n,r){r===void 0&&(r=!1);let s;typeof e=="string"?s=oi(e):(s=os({},e),Qe(!s.pathname||!s.pathname.includes("?"),Ha("?","pathname","search",s)),Qe(!s.pathname||!s.pathname.includes("#"),Ha("#","pathname","hash",s)),Qe(!s.search||!s.search.includes("#"),Ha("#","search","hash",s)));let o=e===""||s.pathname==="",a=o?"/":s.pathname,l;if(a==null)l=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;s.pathname=f.join("/")}l=p>=0?t[p]:"/"}let c=hb(s,l),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const dr=e=>e.join("/").replace(/\/\/+/g,"/"),xb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),yb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,vb=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function bb(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const bg=["post","put","patch","delete"];new Set(bg);const kb=["get",...bg];new Set(kb);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function as(){return as=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},as.apply(this,arguments)}const ku=b.createContext(null),jb=b.createContext(null),xs=b.createContext(null),aa=b.createContext(null),tr=b.createContext({outlet:null,matches:[],isDataRoute:!1}),kg=b.createContext(null);function ys(){return b.useContext(aa)!=null}function ju(){return ys()||Qe(!1),b.useContext(aa).location}function jg(e){b.useContext(xs).static||b.useLayoutEffect(e)}function wu(){let{isDataRoute:e}=b.useContext(tr);return e?Mb():wb()}function wb(){ys()||Qe(!1);let e=b.useContext(ku),{basename:t,future:n,navigator:r}=b.useContext(xs),{matches:s}=b.useContext(tr),{pathname:o}=ju(),a=JSON.stringify(yg(s,n.v7_relativeSplatPath)),l=b.useRef(!1);return jg(()=>{l.current=!0}),b.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=vg(u,JSON.parse(a),o,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:dr([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,a,o,e])}function _b(){let{matches:e}=b.useContext(tr),t=e[e.length-1];return t?t.params:{}}function Sb(e,t){return Cb(e,t)}function Cb(e,t,n,r){ys()||Qe(!1);let{navigator:s}=b.useContext(xs),{matches:o}=b.useContext(tr),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=ju(),d;if(t){var p;let N=typeof t=="string"?oi(t):t;c==="/"||(p=N.pathname)!=null&&p.startsWith(c)||Qe(!1),d=N}else d=u;let f=d.pathname||"/",m=f;if(c!=="/"){let N=c.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(N.length).join("/")}let y=X1(e,{pathname:m}),j=Pb(y&&y.map(N=>Object.assign({},N,{params:Object.assign({},l,N.params),pathname:dr([c,s.encodeLocation?s.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?c:dr([c,s.encodeLocation?s.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),o,n,r);return t&&j?b.createElement(aa.Provider,{value:{location:as({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Dn.Pop}},j):j}function Nb(){let e=Ib(),t=bb(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:s},n):null,null)}const Eb=b.createElement(Nb,null);class zb extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(tr.Provider,{value:this.props.routeContext},b.createElement(kg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Tb(e){let{routeContext:t,match:n,children:r}=e,s=b.useContext(ku);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(tr.Provider,{value:t},r)}function Pb(e,t,n,r){var s;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(s=n)==null?void 0:s.errors;if(l!=null){let d=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Qe(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:m}=n,y=p.route.loader&&f[p.route.id]===void 0&&(!m||m[p.route.id]===void 0);if(p.route.lazy||y){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,p,f)=>{let m,y=!1,j=null,N=null;n&&(m=l&&p.route.id?l[p.route.id]:void 0,j=p.route.errorElement||Eb,c&&(u<0&&f===0?(Ob("route-fallback"),y=!0,N=null):u===f&&(y=!0,N=p.route.hydrateFallbackElement||null)));let v=t.concat(a.slice(0,f+1)),g=()=>{let x;return m?x=j:y?x=N:p.route.Component?x=b.createElement(p.route.Component,null):p.route.element?x=p.route.element:x=d,b.createElement(Tb,{match:p,routeContext:{outlet:d,matches:v,isDataRoute:n!=null},children:x})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?b.createElement(zb,{location:n.location,revalidation:n.revalidation,component:j,error:m,children:g(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):g()},null)}var wg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(wg||{}),_g=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(_g||{});function Lb(e){let t=b.useContext(ku);return t||Qe(!1),t}function Rb(e){let t=b.useContext(jb);return t||Qe(!1),t}function Ab(e){let t=b.useContext(tr);return t||Qe(!1),t}function Sg(e){let t=Ab(),n=t.matches[t.matches.length-1];return n.route.id||Qe(!1),n.route.id}function Ib(){var e;let t=b.useContext(kg),n=Rb(),r=Sg();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Mb(){let{router:e}=Lb(wg.UseNavigateStable),t=Sg(_g.UseNavigateStable),n=b.useRef(!1);return jg(()=>{n.current=!0}),b.useCallback(function(s,o){o===void 0&&(o={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,as({fromRouteId:t},o)))},[e,t])}const Bp={};function Ob(e,t,n){Bp[e]||(Bp[e]=!0)}function Db(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function $b(e){let{to:t,replace:n,state:r,relative:s}=e;ys()||Qe(!1);let{future:o,static:a}=b.useContext(xs),{matches:l}=b.useContext(tr),{pathname:c}=ju(),u=wu(),d=vg(t,yg(l,o.v7_relativeSplatPath),c,s==="path"),p=JSON.stringify(d);return b.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:s}),[u,p,s,n,r]),null}function _r(e){Qe(!1)}function Fb(e){let{basename:t="/",children:n=null,location:r,navigationType:s=Dn.Pop,navigator:o,static:a=!1,future:l}=e;ys()&&Qe(!1);let c=t.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:c,navigator:o,static:a,future:as({v7_relativeSplatPath:!1},l)}),[c,l,o,a]);typeof r=="string"&&(r=oi(r));let{pathname:d="/",search:p="",hash:f="",state:m=null,key:y="default"}=r,j=b.useMemo(()=>{let N=xg(d,c);return N==null?null:{location:{pathname:N,search:p,hash:f,state:m,key:y},navigationType:s}},[c,d,p,f,m,y,s]);return j==null?null:b.createElement(xs.Provider,{value:u},b.createElement(aa.Provider,{children:n,value:j}))}function Bb(e){let{children:t,location:n}=e;return Sb(ac(t),n)}new Promise(()=>{});function ac(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,s)=>{if(!b.isValidElement(r))return;let o=[...t,s];if(r.type===b.Fragment){n.push.apply(n,ac(r.props.children,o));return}r.type!==_r&&Qe(!1),!r.props.index||!r.props.children||Qe(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=ac(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Ub="6";try{window.__reactRouterVersion=Ub}catch{}const Wb="startTransition",Up=Dy[Wb];function Vb(e){let{basename:t,children:n,future:r,window:s}=e,o=b.useRef();o.current==null&&(o.current=G1({window:s,v5Compat:!0}));let a=o.current,[l,c]=b.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=b.useCallback(p=>{u&&Up?Up(()=>c(p)):c(p)},[c,u]);return b.useLayoutEffect(()=>a.listen(d),[a,d]),b.useEffect(()=>Db(r),[r]),b.createElement(Fb,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}var Wp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Wp||(Wp={}));var Vp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Vp||(Vp={}));const Hb={},Hp=e=>{let t;const n=new Set,r=(d,p)=>{const f=typeof d=="function"?d(t):d;if(!Object.is(f,t)){const m=t;t=p??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(y=>y(t,m))}},s=()=>t,c={setState:r,getState:s,getInitialState:()=>u,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(Hb?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,s,c);return c},qb=e=>e?Hp(e):Hp;var Cg={exports:{}},Ng={},Eg={exports:{}},zg={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zr=b;function Jb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Kb=typeof Object.is=="function"?Object.is:Jb,Gb=Zr.useState,Qb=Zr.useEffect,Yb=Zr.useLayoutEffect,Xb=Zr.useDebugValue;function Zb(e,t){var n=t(),r=Gb({inst:{value:n,getSnapshot:t}}),s=r[0].inst,o=r[1];return Yb(function(){s.value=n,s.getSnapshot=t,qa(s)&&o({inst:s})},[e,n,t]),Qb(function(){return qa(s)&&o({inst:s}),e(function(){qa(s)&&o({inst:s})})},[e]),Xb(n),n}function qa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Kb(e,n)}catch{return!0}}function e0(e,t){return t()}var t0=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?e0:Zb;zg.useSyncExternalStore=Zr.useSyncExternalStore!==void 0?Zr.useSyncExternalStore:t0;Eg.exports=zg;var n0=Eg.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var la=b,r0=n0;function i0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var s0=typeof Object.is=="function"?Object.is:i0,o0=r0.useSyncExternalStore,a0=la.useRef,l0=la.useEffect,c0=la.useMemo,u0=la.useDebugValue;Ng.useSyncExternalStoreWithSelector=function(e,t,n,r,s){var o=a0(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=c0(function(){function c(m){if(!u){if(u=!0,d=m,m=r(m),s!==void 0&&a.hasValue){var y=a.value;if(s(y,m))return p=y}return p=m}if(y=p,s0(d,m))return y;var j=r(m);return s!==void 0&&s(y,j)?(d=m,y):(d=m,p=j)}var u=!1,d,p,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,r,s]);var l=o0(e,o[0],o[1]);return l0(function(){a.hasValue=!0,a.value=l},[l]),u0(l),l};Cg.exports=Ng;var d0=Cg.exports;const p0=Vo(d0),Tg={},{useDebugValue:f0}=Rt,{useSyncExternalStoreWithSelector:m0}=p0;let qp=!1;const h0=e=>e;function g0(e,t=h0,n){(Tg?"production":void 0)!=="production"&&n&&!qp&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),qp=!0);const r=m0(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return f0(r),r}const Jp=e=>{(Tg?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?qb(e):e,n=(r,s)=>g0(t,r,s);return Object.assign(n,t),n},x0=e=>e?Jp(e):Jp,ut=x0((e,t)=>({project:null,selectedAgentId:null,selectedToolId:null,mcpServers:[],builtinTools:[],isRunning:!1,runEvents:[],watches:[],activeTab:"app",sidebarOpen:!0,hasUnsavedChanges:!1,runAgentId:null,currentSessionId:null,setProject:n=>{var s;const r=((s=n==null?void 0:n.watches)==null?void 0:s.map(o=>({...o,result:void 0,error:void 0,isLoading:!1,lastRun:void 0,history:[]})))||[];e({project:n,watches:r})},setSelectedAgentId:n=>e({selectedAgentId:n}),setSelectedToolId:n=>e({selectedToolId:n}),setMcpServers:n=>e({mcpServers:n}),setBuiltinTools:n=>e({builtinTools:n}),setIsRunning:n=>e({isRunning:n}),addRunEvent:n=>e(r=>({runEvents:[...r.runEvents,n]})),clearRunEvents:()=>e({runEvents:[]}),setWatches:n=>e({watches:n}),updateWatch:(n,r)=>e(s=>{const o=s.watches.map(l=>l.id===n?{...l,...r}:l);if(("serverName"in r||"toolName"in r||"args"in r||"transform"in r)&&s.project){const l=o.map(({id:c,serverName:u,toolName:d,args:p,transform:f})=>({id:c,serverName:u,toolName:d,args:p,transform:f}));return{watches:o,project:{...s.project,watches:l},hasUnsavedChanges:!0}}return{watches:o}}),addWatch:n=>e(r=>{const s=[...r.watches,n],{project:o}=r;if(o){const a=s.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:s,project:{...o,watches:a},hasUnsavedChanges:!0}}return{watches:s}}),removeWatch:n=>e(r=>{const s=r.watches.filter(a=>a.id!==n),{project:o}=r;if(o){const a=s.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:s,project:{...o,watches:a},hasUnsavedChanges:!0}}return{watches:s}}),clearWatchHistories:()=>e(n=>({watches:n.watches.map(r=>({...r,history:[],result:void 0,error:void 0}))})),setActiveTab:n=>e({activeTab:n}),setSidebarOpen:n=>e({sidebarOpen:n}),setHasUnsavedChanges:n=>e({hasUnsavedChanges:n}),setRunAgentId:n=>e({runAgentId:n}),setCurrentSessionId:n=>e({currentSessionId:n}),updateProject:n=>{const{project:r}=t();r&&e({project:{...r,...n}})},addAgent:n=>{const{project:r}=t();if(r){let s=r.app;if(n.type==="LlmAgent"&&n.output_key){const o=n.output_key;r.app.state_keys.find(l=>l.name===o)||(s={...r.app,state_keys:[...r.app.state_keys,{name:o,description:`Output from ${n.name} agent`,type:"string",scope:"session"}]})}e({project:{...r,app:s,agents:[...r.agents,n]}})}},updateAgent:(n,r)=>{const{project:s}=t();if(s){const o=s.agents.find(l=>l.id===n);let a=s.app;if(o&&o.type==="LlmAgent"&&r.output_key){const l=o.output_key,c=r.output_key;if(l!==c){const u=s.app.state_keys.filter(p=>p.name!==l);u.find(p=>p.name===c)?a={...s.app,state_keys:u}:a={...s.app,state_keys:[...u,{name:c,description:`Output from ${r.name||o.name} agent`,type:"string",scope:"session"}]}}}e({project:{...s,app:a,agents:s.agents.map(l=>l.id===n?{...l,...r}:l)}})}},removeAgent:n=>{const{project:r,selectedAgentId:s}=t();r&&e({project:{...r,agents:r.agents.filter(o=>o.id!==n)},selectedAgentId:s===n?null:s})},addCustomTool:n=>{const{project:r}=t();r&&e({project:{...r,custom_tools:[...r.custom_tools,n]}})},updateCustomTool:(n,r)=>{const{project:s}=t();s&&e({project:{...s,custom_tools:s.custom_tools.map(o=>o.id===n?{...o,...r}:o)}})},removeCustomTool:n=>{const{project:r,selectedToolId:s}=t();r&&e({project:{...r,custom_tools:r.custom_tools.filter(o=>o.id!==n)},selectedToolId:s===n?null:s})},addCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:[...r.custom_callbacks||[],n]}})},updateCustomCallback:(n,r)=>{const{project:s}=t();s&&e({project:{...s,custom_callbacks:(s.custom_callbacks||[]).map(o=>o.id===n?{...o,...r}:o)}})},removeCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:(r.custom_callbacks||[]).filter(s=>s.id!==n)}})}})),Pg="/api";async function Se(e,t){const n=await fetch(`${Pg}${e}`,{...t,headers:{"Content-Type":"application/json",...t==null?void 0:t.headers}});if(!n.ok){const r=await n.json().catch(()=>({detail:"Unknown error"}));throw new Error(r.detail||`HTTP ${n.status}`)}return n.json()}async function Lg(){return(await Se("/projects")).projects}async function Rg(e){return(await Se(`/projects/${e}`)).project}async function Ag(e,t=""){return(await Se("/projects",{method:"POST",body:JSON.stringify({name:e,description:t})})).project}async function lc(e,t){return(await Se(`/projects/${e}`,{method:"PUT",body:JSON.stringify(t)})).project}async function Ig(e){await Se(`/projects/${e}`,{method:"DELETE"})}async function Mg(e){return Se(`/sessions/${e}/save-to-memory`,{method:"POST"})}async function cc(e){return(await Se(`/projects/${e}/sessions`)).sessions}async function Og(e,t){return(await Se(`/projects/${e}/sessions/${t}/load`)).session}async function Dg(e){return(await Se(`/projects/${e}/yaml`)).yaml}async function $g(e,t){return(await Se(`/projects/${e}/yaml`,{method:"PUT",body:JSON.stringify({yaml:t})})).project}async function _u(){return(await Se("/mcp-servers")).servers}async function Fg(){return(await Se("/builtin-tools")).tools}function Bg(e){const t=window.location.protocol==="https:"?"wss:":"ws:",n=window.location.host;return new WebSocket(`${t}//${n}/ws/run/${e}`)}async function ao(e,t,n,r){return await Se(`/projects/${e}/generate-prompt`,{method:"POST",body:JSON.stringify({agent_id:t,context:n,agent_config:r||void 0})})}async function Ug(e,t){return await Se(`/projects/${e}/generate-agent-config`,{method:"POST",body:JSON.stringify({description:t})})}async function Wg(e,t,n,r=[],s){return await Se(`/projects/${e}/generate-tool-code`,{method:"POST",body:JSON.stringify({tool_name:t,tool_description:n,state_keys_used:r,context:s})})}async function Vg(e,t,n,r,s=[],o){return await Se(`/projects/${e}/generate-callback-code`,{method:"POST",body:JSON.stringify({callback_name:t,callback_description:n,callback_type:r,state_keys_used:s,context:o})})}async function uc(e){return await Se("/test-mcp-server",{method:"POST",body:JSON.stringify(e)})}async function Hg(e,t){return Se(`/projects/${e}/skillsets/${t}/stats`)}async function qg(e,t,n,r,s=500,o=50){return Se(`/projects/${e}/skillsets/${t}/url`,{method:"POST",body:JSON.stringify({url:n,source_name:r,chunk_size:s,chunk_overlap:o})})}async function Jg(e,t,n,r=500,s=50){const o=new FormData;o.append("file",n),o.append("chunk_size",String(r)),o.append("chunk_overlap",String(s));const a=await fetch(`${Pg}/projects/${e}/skillsets/${t}/file`,{method:"POST",body:o});if(!a.ok)throw new Error(`Upload failed: ${a.statusText}`);return a.json()}async function Kg(e,t,n,r=10,s=0){return Se(`/projects/${e}/skillsets/${t}/search`,{method:"POST",body:JSON.stringify({query:n,top_k:r,min_score:s})})}async function Gg(e,t){return Se(`/projects/${e}/skillsets/${t}/entries`,{method:"DELETE"})}async function Qg(){return Se("/skillsets/embeddings-available")}const qe={async get(e){return Se(e)},async post(e,t){return Se(e,{method:"POST",body:t?JSON.stringify(t):void 0})},async put(e,t){return Se(e,{method:"PUT",body:t?JSON.stringify(t):void 0})},async delete(e){return Se(e,{method:"DELETE"})}},y0=Object.freeze(Object.defineProperty({__proto__:null,addSkillSetUrl:qg,api:qe,checkEmbeddingsAvailable:Qg,clearSkillSet:Gg,createProject:Ag,createRunWebSocket:Bg,deleteProject:Ig,fetchJSON:Se,generateAgentConfig:Ug,generateCallbackCode:Vg,generatePrompt:ao,generateToolCode:Wg,getBuiltinTools:Fg,getMcpServers:_u,getProject:Rg,getProjectYaml:Dg,getSkillSetStats:Hg,listProjectSessions:cc,listProjects:Lg,loadSession:Og,saveSessionToMemory:Mg,searchSkillSet:Kg,testMcpServer:uc,updateProject:lc,updateProjectFromYaml:$g,uploadSkillSetFile:Jg},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var v0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),pe=(e,t)=>{const n=b.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:l="",children:c,...u},d)=>b.createElement("svg",{ref:d,...v0,width:s,height:s,stroke:r,strokeWidth:a?Number(o)*24/Number(s):o,className:["lucide",`lucide-${b0(e)}`,l].join(" "),...u},[...t.map(([p,f])=>b.createElement(p,f)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ei=pe("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=pe("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=pe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=pe("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=pe("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=pe("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=pe("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=pe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=pe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=pe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=pe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=pe("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=pe("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=pe("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=pe("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=pe("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=pe("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=pe("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=pe("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=pe("FileCheck",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=pe("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=pe("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=pe("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=pe("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=pe("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=pe("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=pe("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=pe("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=pe("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=pe("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=pe("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=pe("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=pe("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=pe("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=pe("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=pe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=pe("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=pe("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=pe("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=pe("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=pe("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=pe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=pe("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=pe("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=pe("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=pe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=pe("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=pe("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=pe("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=pe("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=pe("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=pe("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=pe("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=pe("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=pe("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=pe("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=pe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=pe("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=pe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=pe("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=pe("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=pe("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=pe("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=pe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=pe("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function D0(){const e=wu(),[t,n]=b.useState([]),[r,s]=b.useState(!0),[o,a]=b.useState(!1),[l,c]=b.useState("");b.useEffect(()=>{u()},[]);async function u(){try{const f=await Lg();n(f)}catch(f){console.error("Failed to load projects:",f)}finally{s(!1)}}async function d(){if(l.trim())try{const f=await Ag(l.trim());e(`/project/${f.id}`)}catch(f){console.error("Failed to create project:",f)}}async function p(f,m){if(m.stopPropagation(),!!confirm("Delete this project?"))try{await Ig(f),n(t.filter(y=>y.id!==f))}catch(y){console.error("Failed to delete project:",y)}}return i.jsxs("div",{className:"project-list",children:[i.jsx("style",{children:`
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
      `}),i.jsxs("header",{className:"header",children:[i.jsxs("div",{className:"logo",children:[i.jsx(Tu,{size:40,className:"logo-icon"}),i.jsx("h1",{className:"title",children:"ADK Playground"})]}),i.jsx("p",{className:"subtitle",children:"Build, test, and deploy AI agents visually"})]}),i.jsxs("div",{className:"content",children:[o?i.jsxs("div",{className:"create-form",children:[i.jsx("input",{type:"text",placeholder:"Project name...",value:l,onChange:f=>c(f.target.value),onKeyDown:f=>f.key==="Enter"&&d(),autoFocus:!0}),i.jsxs("button",{className:"btn btn-primary",onClick:d,children:[i.jsx(Ke,{size:18}),"Create"]}),i.jsx("button",{className:"btn btn-secondary",onClick:()=>a(!1),children:"Cancel"})]}):i.jsx("div",{className:"create-form",children:i.jsxs("button",{className:"btn btn-primary",onClick:()=>a(!0),children:[i.jsx(Ke,{size:18}),"New Project"]})}),r?i.jsx("div",{className:"loading",children:"Loading projects..."}):t.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx(Kp,{size:48,style:{marginBottom:16,opacity:.3}}),i.jsx("p",{children:"No projects yet. Create one to get started!"})]}):i.jsx("div",{className:"projects-grid",children:t.map(f=>i.jsxs("div",{className:"project-card",onClick:()=>e(`/project/${f.id}`),children:[i.jsxs("h3",{children:[i.jsx(Kp,{size:18}),f.name]}),i.jsx("p",{children:f.description||"No description"}),i.jsx("button",{className:"delete-btn",onClick:m=>p(f.id,m),children:i.jsx(Fe,{size:16})})]},f.id))})]})]})}const Gp={},$0=5*60*1e3;function F0({projectId:e,value:t,provider:n,apiBase:r,onChange:s,placeholder:o="Search models..."}){const a=`${e}:${n||""}:${r||""}`,[l,c]=b.useState(t||""),[u,d]=b.useState(!1),[p,f]=b.useState([]),[m,y]=b.useState(!1),[j,N]=b.useState(null),[v,g]=b.useState(-1),[x,T]=b.useState({top:0,left:0,width:0}),z=b.useRef(null),w=b.useRef(null);b.useEffect(()=>{if(u&&z.current){const U=z.current.getBoundingClientRect();T({top:U.bottom+window.scrollY+4,left:U.left+window.scrollX,width:U.width})}},[u]);const P=b.useCallback(async()=>{const U=Gp[a];if(U&&Date.now()-U.timestamp<$0){const $=[];Object.values(U.providers).forEach(Z=>{$.push(...Z.models)}),f($);return}y(!0),N(null);try{const $=new URLSearchParams;n&&$.append("provider",n),r&&$.append("api_base",r);const Z=`/models/${e}${$.toString()?"?"+$.toString():""}`,E=await qe.get(Z);Gp[a]={providers:E.providers,timestamp:Date.now()};const O=[];Object.values(E.providers).forEach(I=>{I.models&&I.models.length>0&&O.push(...I.models)}),f(O)}catch($){N($.message||"Failed to fetch models")}finally{y(!1)}},[e,a,r,n]);b.useEffect(()=>{P()},[P]),b.useEffect(()=>{c(t||"")},[t]);const _=p.filter(U=>{const $=l.toLowerCase();return U.id.toLowerCase().includes($)||U.name.toLowerCase().includes($)||U.provider.toLowerCase().includes($)});b.useEffect(()=>{const U=$=>{w.current&&!w.current.contains($.target)&&z.current&&!z.current.contains($.target)&&d(!1)};return document.addEventListener("mousedown",U),()=>document.removeEventListener("mousedown",U)},[]);const D=U=>{if(!u){(U.key==="ArrowDown"||U.key==="Enter")&&(d(!0),U.preventDefault());return}switch(U.key){case"ArrowDown":g($=>Math.min($+1,_.length-1)),U.preventDefault();break;case"ArrowUp":g($=>Math.max($-1,0)),U.preventDefault();break;case"Enter":v>=0&&v<_.length&&S(_[v]),U.preventDefault();break;case"Escape":d(!1);break}},S=U=>{c(U.id),s(U.id,U.provider),d(!1)},R=U=>{c(U.target.value),d(!0),g(-1),s(U.target.value,n||"gemini")},L=U=>{switch(U.toLowerCase()){case"gemini":return"provider-gemini";case"anthropic":return"provider-anthropic";case"openai":return"provider-openai";case"groq":return"provider-groq";case"ollama":return"provider-ollama";default:return"provider-other"}},W=u?i.jsxs("div",{ref:w,className:"model-autocomplete-dropdown model-autocomplete-dropdown-portal",style:{position:"fixed",top:x.top,left:x.left,width:x.width},children:[m&&i.jsx("div",{className:"model-autocomplete-loading",children:"Loading models..."}),j&&i.jsx("div",{className:"model-autocomplete-error",children:j}),!m&&!j&&_.length===0&&i.jsx("div",{className:"model-autocomplete-empty",children:l?"No matching models":"No models available"}),!m&&_.length>0&&i.jsxs("div",{className:"model-autocomplete-list",children:[_.slice(0,50).map((U,$)=>i.jsxs("div",{className:`model-autocomplete-item ${$===v?"highlighted":""}`,onClick:()=>S(U),onMouseEnter:()=>g($),children:[i.jsx("span",{className:`provider-badge ${L(U.provider)}`,children:U.provider}),i.jsx("span",{className:"model-id",children:U.id}),U.context_window&&i.jsxs("span",{className:"model-context",title:`${U.context_window.toLocaleString()} token context`,children:[Math.round(U.context_window/1e3),"K"]}),U.supports_tools&&i.jsx("span",{className:"model-feature",title:"Supports function calling / tools",children:"🔧"}),U.supports_vision&&i.jsx("span",{className:"model-feature",title:"Supports image/vision input",children:"👁️"}),U.supports_json_mode&&i.jsx("span",{className:"model-feature",title:"Supports structured JSON output",children:"📋"})]},`${U.provider}-${U.id}`)),_.length>50&&i.jsxs("div",{className:"model-autocomplete-more",children:["+",_.length-50," more..."]})]})]}):null;return i.jsxs("div",{className:"model-autocomplete",children:[i.jsx("input",{ref:z,type:"text",value:l,onChange:R,onFocus:()=>d(!0),onKeyDown:D,placeholder:o,className:"model-autocomplete-input"}),W&&fg.createPortal(W,document.body)]})}const B0=[{value:"gemini",label:"Gemini"},{value:"anthropic",label:"Anthropic"},{value:"openai",label:"OpenAI"},{value:"groq",label:"Groq"},{value:"litellm",label:"LiteLLM / Other"}];function U0(e,t){return e.startsWith("openai/")?"openai":e.startsWith("groq/")?"groq":e.startsWith("ollama/")?"litellm":e.startsWith("claude-")?"anthropic":e.startsWith("gemini-")?"gemini":e.includes("/")?"litellm":t||"gemini"}function lx({projectId:e,values:t,onChange:n,className:r=""}){return i.jsxs("div",{className:`model-config-form ${r}`,children:[i.jsxs("div",{className:"model-config-row",children:[i.jsxs("div",{className:"model-config-field",style:{flex:1},children:[i.jsx("label",{children:"Provider"}),i.jsx("select",{value:t.provider||"gemini",onChange:s=>n({provider:s.target.value}),children:B0.map(s=>i.jsx("option",{value:s.value,children:s.label},s.value))})]}),i.jsxs("div",{className:"model-config-field",style:{flex:3},children:[i.jsx("label",{children:"Model"}),i.jsx(F0,{projectId:e,value:t.model_name||"",provider:t.provider,apiBase:t.api_base,onChange:(s,o)=>{const a=U0(s,o);n({model_name:s,provider:a})},placeholder:"Search models..."})]}),i.jsxs("div",{className:"model-config-field",style:{flex:2},children:[i.jsx("label",{children:"API Base (optional)"}),i.jsx("input",{type:"text",value:t.api_base||"",onChange:s=>n({api_base:s.target.value||void 0}),placeholder:t.provider==="gemini"?"https://generativelanguage.googleapis.com":t.provider==="anthropic"?"https://api.anthropic.com":t.provider==="openai"?"https://api.openai.com/v1":t.provider==="groq"?"https://api.groq.com/openai/v1":"http://localhost:11434"})]})]}),i.jsxs("div",{className:"model-config-row",children:[i.jsxs("div",{className:"model-config-field",children:[i.jsx("label",{children:"Temperature"}),i.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:t.temperature??"",onChange:s=>n({temperature:s.target.value?parseFloat(s.target.value):void 0}),placeholder:"Default"})]}),i.jsxs("div",{className:"model-config-field",children:[i.jsx("label",{children:"Max Tokens"}),i.jsx("input",{type:"number",min:"1",value:t.max_output_tokens??"",onChange:s=>n({max_output_tokens:s.target.value?parseInt(s.target.value):void 0}),placeholder:"Default"})]}),i.jsxs("div",{className:"model-config-field",children:[i.jsx("label",{children:"Top P"}),i.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:t.top_p??"",onChange:s=>n({top_p:s.target.value?parseFloat(s.target.value):void 0}),placeholder:"Default"})]}),i.jsxs("div",{className:"model-config-field",children:[i.jsx("label",{children:"Top K"}),i.jsx("input",{type:"number",min:"1",value:t.top_k??"",onChange:s=>n({top_k:s.target.value?parseInt(s.target.value):void 0}),placeholder:"Default"})]})]})]})}const W0=[{key:"GOOGLE_API_KEY",description:"API key for Gemini models"},{key:"OPENAI_API_KEY",description:"API key for OpenAI models (via LiteLLM)"},{key:"ANTHROPIC_API_KEY",description:"API key for Anthropic Claude models"},{key:"AZURE_API_KEY",description:"API key for Azure OpenAI Service"},{key:"AZURE_API_BASE",description:"Base URL for Azure OpenAI endpoint (e.g., https://your-resource.openai.azure.com)"},{key:"AZURE_API_VERSION",description:"API version for Azure OpenAI (e.g., 2024-02-15-preview)"},{key:"GOOGLE_GENAI_USE_VERTEXAI",description:'Set to "1" to use Vertex AI instead of API key'},{key:"GOOGLE_CLOUD_PROJECT",description:"Google Cloud project ID for Vertex AI"},{key:"GOOGLE_CLOUD_REGION",description:"Google Cloud region for Vertex AI (e.g., us-central1)"}];function V0(e){return/^[a-zA-Z0-9_]+$/.test(e)}function H0(){var Q;const{project:e,updateProject:t}=ut(),[n,r]=b.useState(null);if(!e)return null;const{app:s}=e;function o(h){t({app:{...s,...h}})}function a(h){if(h===""){r(null),o({name:h});return}V0(h)?r(null):r("Name can only contain letters, numbers, and underscores"),o({name:h})}function l(){const h={name:`state_key_${s.state_keys.length+1}`,description:"",type:"string",scope:"session"};o({state_keys:[...s.state_keys,h]})}function c(h,B){const C=[...s.state_keys];C[h]={...C[h],...B},o({state_keys:C})}function u(h){o({state_keys:s.state_keys.filter((B,C)=>C!==h)})}function d(h="ReflectAndRetryToolPlugin"){let B;switch(h){case"ReflectAndRetryToolPlugin":B={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1};break;case"ContextFilterPlugin":B={type:"ContextFilterPlugin",name:"context_filter",num_invocations_to_keep:5};break;case"LoggingPlugin":B={type:"LoggingPlugin",name:"logging"};break;case"GlobalInstructionPlugin":B={type:"GlobalInstructionPlugin",name:"global_instruction",global_instruction:""};break;case"SaveFilesAsArtifactsPlugin":B={type:"SaveFilesAsArtifactsPlugin",name:"save_files"};break;case"MultimodalToolResultsPlugin":B={type:"MultimodalToolResultsPlugin",name:"multimodal_tools"};break;default:B={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1}}o({plugins:[...s.plugins,B]})}function p(h,B){const C=[...s.plugins];C[h]={...C[h],...B},o({plugins:C})}function f(h){o({plugins:s.plugins.filter((B,C)=>C!==h)})}const m=s.sandbox||{enabled:!1,allowlist:{auto:[],user:[]},unknown_action:"ask",approval_timeout:30,agent_memory_limit_mb:512,agent_cpu_limit:1,mcp_memory_limit_mb:256,mcp_cpu_limit:.5,run_timeout:300,volume_mounts:[]},y=((Q=m.allowlist)==null?void 0:Q.user)||[],j=m.volume_mounts||[];function N(h){o({sandbox:{...m,...h}})}async function v(h){const B=s.id;try{await fetch(`/api/sandbox/${B}/allowlist/sync`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({patterns:h.map(C=>({pattern:C.pattern,pattern_type:C.pattern_type})).filter(C=>C.pattern)})})}catch(C){console.debug("Could not sync allowlist to gateway:",C)}}function g(){const h={id:`pattern_${Date.now().toString(36)}`,pattern:"",pattern_type:"exact",source:"user",added_at:new Date().toISOString()},B={...m.allowlist,user:[...y,h]};N({allowlist:B})}function x(h,B){const C=[...y];C[h]={...C[h],...B};const G=C;N({allowlist:{...m.allowlist,user:G}}),B.pattern&&v(G)}function T(h){const B=y.filter((C,G)=>G!==h);N({allowlist:{...m.allowlist,user:B}})}function z(){const h={host_path:"",container_path:"/mnt/data",mode:"ro"};N({volume_mounts:[...j,h]})}function w(h,B){const C=[...j];C[h]={...C[h],...B},N({volume_mounts:C})}function P(h){const B=j.filter((C,G)=>G!==h);N({volume_mounts:B})}const _=s.models||[];function D(){const h=`model_${Date.now().toString(36)}`,B={id:h,name:"New Model",provider:"gemini",model_name:"gemini-2.0-flash",is_default:_.length===0};o({models:[..._,B],default_model_id:_.length===0?h:s.default_model_id})}function S(h,B){const C=_.map(G=>G.id===h?{...G,...B}:G);o({models:C})}function R(h){var G;const B=_.filter(xe=>xe.id!==h),C=s.default_model_id===h?((G=B[0])==null?void 0:G.id)||void 0:s.default_model_id;o({models:B,default_model_id:C})}function L(h){o({default_model_id:h})}const W=s.env_vars||{},[U,$]=b.useState({}),[Z,E]=b.useState("");function O(h=""){const B=h||Z.trim();!B||W[B]!==void 0||(o({env_vars:{...W,[B]:""}}),E(""))}function I(h,B){o({env_vars:{...W,[h]:B}})}function k(h){const B={...W};delete B[h],o({env_vars:B})}function V(h){$(B=>({...B,[h]:!B[h]}))}return i.jsxs("div",{className:"app-config",children:[i.jsx("style",{children:`
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
      `}),i.jsxs("section",{className:"section",children:[i.jsx("div",{className:"section-header",children:i.jsxs("h2",{className:"section-title",children:[i.jsx(I0,{size:20}),"Basic Information"]})}),i.jsxs("div",{className:"form-grid",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"App Name"}),i.jsx("input",{type:"text",value:s.name,onChange:h=>a(h.target.value),style:{borderColor:n?"var(--error)":void 0}}),n&&i.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:4},children:n})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Root Agent"}),i.jsxs("select",{value:s.root_agent_id||"",onChange:h=>o({root_agent_id:h.target.value||void 0}),children:[i.jsx("option",{value:"",children:"Select an agent..."}),e.agents.map(h=>i.jsx("option",{value:h.id,children:h.name},h.id))]})]})]})]}),i.jsxs("section",{className:"section",children:[i.jsxs("div",{className:"section-header",children:[i.jsxs("h2",{className:"section-title",children:[i.jsx(wn,{size:20}),"Services"]}),i.jsx("span",{className:"section-hint",children:"Configure session, memory, and artifact storage backends"})]}),i.jsxs("div",{className:"form-grid",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Session Service"}),i.jsxs("select",{value:s.session_service_uri.split("://")[0],onChange:h=>{const B=h.target.value;o({session_service_uri:{memory:"memory://",file:"file://~/.adk-playground/sessions",sqlite:"sqlite://~/.adk-playground/sessions.db",postgresql:"postgresql://user:pass@localhost:5432/adk_sessions",mysql:"mysql://user:pass@localhost:3306/adk_sessions",agentengine:"agentengine://project/us-central1/engine-id"}[B]||B+"://"})},children:[i.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),i.jsx("option",{value:"file",children:"File System (JSON)"}),i.jsx("option",{value:"sqlite",children:"SQLite (local)"}),i.jsx("option",{value:"postgresql",children:"PostgreSQL"}),i.jsx("option",{value:"mysql",children:"MySQL"}),i.jsx("option",{value:"agentengine",children:"Vertex AI Agent Engine"})]}),s.session_service_uri.startsWith("file://")&&i.jsx("input",{type:"text",value:s.session_service_uri.replace("file://",""),onChange:h=>o({session_service_uri:"file://"+h.target.value}),placeholder:"~/.adk-playground/sessions",style:{marginTop:8}}),s.session_service_uri.startsWith("sqlite://")&&i.jsx("input",{type:"text",value:s.session_service_uri.replace("sqlite://",""),onChange:h=>o({session_service_uri:"sqlite://"+h.target.value}),placeholder:"~/.adk-playground/sessions.db",style:{marginTop:8}}),(s.session_service_uri.startsWith("postgresql://")||s.session_service_uri.startsWith("mysql://"))&&i.jsx("input",{type:"text",value:s.session_service_uri,onChange:h=>o({session_service_uri:h.target.value}),placeholder:"postgresql://user:pass@localhost:5432/db",style:{marginTop:8}}),s.session_service_uri.startsWith("agentengine://")&&i.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[i.jsx("input",{type:"text",value:s.session_service_uri.split("/")[2]||"",onChange:h=>{const B=s.session_service_uri.split("/");B[2]=h.target.value,o({session_service_uri:B.join("/")})},placeholder:"project-id"}),i.jsx("input",{type:"text",value:s.session_service_uri.split("/")[3]||"",onChange:h=>{const B=s.session_service_uri.split("/");B[3]=h.target.value,o({session_service_uri:B.join("/")})},placeholder:"location (e.g., us-central1)"}),i.jsx("input",{type:"text",value:s.session_service_uri.split("/")[4]||"",onChange:h=>{const B=s.session_service_uri.split("/");B[4]=h.target.value,o({session_service_uri:B.join("/")})},placeholder:"agent-engine-id"})]}),i.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[s.session_service_uri.startsWith("memory://")&&"Sessions stored in memory, lost on restart",s.session_service_uri.startsWith("file://")&&"Sessions stored as JSON files, preserves UI events",s.session_service_uri.startsWith("sqlite://")&&"Persists to local SQLite file",s.session_service_uri.startsWith("postgresql://")&&"Production-ready PostgreSQL backend",s.session_service_uri.startsWith("mysql://")&&"Production-ready MySQL backend",s.session_service_uri.startsWith("agentengine://")&&"Vertex AI Agent Engine managed sessions"]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Memory Service"}),i.jsxs("select",{value:s.memory_service_uri.split("://")[0],onChange:h=>{const B=h.target.value;o({memory_service_uri:{memory:"memory://",file:"file://~/.adk-playground/memory",rag:"rag://rag-corpus-id",agentengine:"agentengine://project/us-central1/engine-id"}[B]||B+"://"})},children:[i.jsx("option",{value:"memory",children:"In-Memory (keyword matching)"}),i.jsx("option",{value:"file",children:"File System (keyword matching)"}),i.jsx("option",{value:"rag",children:"Vertex AI RAG"}),i.jsx("option",{value:"agentengine",children:"Vertex AI Memory Bank"})]}),s.memory_service_uri.startsWith("file://")&&i.jsx("input",{type:"text",value:s.memory_service_uri.replace("file://",""),onChange:h=>o({memory_service_uri:"file://"+h.target.value}),placeholder:"~/.adk-playground/memory",style:{marginTop:8}}),s.memory_service_uri.startsWith("rag://")&&i.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[i.jsx("input",{type:"text",value:s.memory_service_uri.replace("rag://",""),onChange:h=>o({memory_service_uri:"rag://"+h.target.value}),placeholder:"rag-corpus-id or full resource path"}),i.jsx("span",{className:"help-text",style:{fontSize:11,color:"var(--text-dim)"},children:"Format: projects/PROJECT/locations/LOCATION/ragCorpora/CORPUS_ID"})]}),s.memory_service_uri.startsWith("agentengine://")&&i.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[i.jsx("input",{type:"text",value:s.memory_service_uri.split("/")[2]||"",onChange:h=>{const B=s.memory_service_uri.split("/");B[2]=h.target.value,o({memory_service_uri:B.join("/")})},placeholder:"project-id"}),i.jsx("input",{type:"text",value:s.memory_service_uri.split("/")[3]||"",onChange:h=>{const B=s.memory_service_uri.split("/");B[3]=h.target.value,o({memory_service_uri:B.join("/")})},placeholder:"location (e.g., us-central1)"}),i.jsx("input",{type:"text",value:s.memory_service_uri.split("/")[4]||"",onChange:h=>{const B=s.memory_service_uri.split("/");B[4]=h.target.value,o({memory_service_uri:B.join("/")})},placeholder:"agent-engine-id"})]}),i.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[s.memory_service_uri.startsWith("memory://")&&"Simple keyword matching, good for prototyping",s.memory_service_uri.startsWith("file://")&&"Persists memories as JSON files",s.memory_service_uri.startsWith("rag://")&&"Semantic search using Vertex AI RAG corpus",s.memory_service_uri.startsWith("agentengine://")&&"Managed memory via Agent Engine Memory Bank"]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Artifact Service"}),i.jsxs("select",{value:s.artifact_service_uri.split("://")[0]==="gs"?"gs":s.artifact_service_uri.split("://")[0],onChange:h=>{const B=h.target.value;o({artifact_service_uri:{memory:"memory://",file:"file://~/.adk-playground/artifacts",gs:"gs://your-bucket-name"}[B]||B+"://"})},children:[i.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),i.jsx("option",{value:"file",children:"File System"}),i.jsx("option",{value:"gs",children:"Google Cloud Storage"})]}),s.artifact_service_uri.startsWith("file://")&&i.jsx("input",{type:"text",value:s.artifact_service_uri.replace("file://",""),onChange:h=>o({artifact_service_uri:"file://"+h.target.value}),placeholder:"~/.adk-playground/artifacts",style:{marginTop:8}}),s.artifact_service_uri.startsWith("gs://")&&i.jsx("input",{type:"text",value:s.artifact_service_uri.replace("gs://",""),onChange:h=>o({artifact_service_uri:"gs://"+h.target.value}),placeholder:"bucket-name/optional-prefix",style:{marginTop:8}}),i.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[s.artifact_service_uri.startsWith("memory://")&&"Artifacts stored in memory, lost on restart",s.artifact_service_uri.startsWith("file://")&&"Persists to local filesystem",s.artifact_service_uri.startsWith("gs://")&&"Production-ready Google Cloud Storage backend"]})]})]})]}),i.jsxs("section",{className:"section",children:[i.jsx("div",{className:"section-header",children:i.jsxs("h2",{className:"section-title",children:[i.jsx(pc,{size:20}),"Environment Variables"]})}),i.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginBottom:16},children:"Set API keys and other environment variables. These are passed to the agent runtime."}),i.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16},children:W0.filter(h=>W[h.key]===void 0).map(h=>i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>O(h.key),title:h.description,children:[i.jsx(Ke,{size:12}),h.key]},h.key))}),Object.keys(W).length===0?i.jsx("p",{className:"empty-message",children:"No environment variables set. Click a button above to add common variables, or add a custom one below."}):Object.entries(W).map(([h,B])=>i.jsxs("div",{className:"list-item",style:{alignItems:"center"},children:[i.jsxs("div",{style:{flex:1,display:"flex",gap:12,alignItems:"center"},children:[i.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:13,minWidth:200},children:h}),i.jsxs("div",{style:{flex:1,display:"flex",gap:8,alignItems:"center"},children:[i.jsx("input",{type:U[h]?"text":"password",value:B,onChange:C=>I(h,C.target.value),placeholder:"Enter value...",style:{flex:1}}),i.jsx("button",{className:"delete-item",onClick:()=>V(h),title:U[h]?"Hide value":"Show value",children:U[h]?i.jsx(_0,{size:16}):i.jsx(ti,{size:16})})]})]}),i.jsx("button",{className:"delete-item",onClick:()=>k(h),children:i.jsx(Fe,{size:16})})]},h)),i.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[i.jsx("input",{type:"text",value:Z,onChange:h=>E(h.target.value.toUpperCase().replace(/[^A-Z0-9_]/g,"")),placeholder:"CUSTOM_VAR_NAME",style:{flex:1,fontFamily:"var(--font-mono)"},onKeyDown:h=>h.key==="Enter"&&O()}),i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>O(),disabled:!Z.trim(),children:[i.jsx(Ke,{size:14}),"Add Variable"]})]})]}),i.jsxs("section",{className:"section",children:[i.jsxs("div",{className:"section-header",children:[i.jsxs("h2",{className:"section-title",children:[i.jsx(Cu,{size:20}),"Models"]}),i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:D,children:[i.jsx(Ke,{size:14}),"Add Model"]})]}),_.length===0?i.jsx("p",{className:"empty-message",children:"No models configured. Add models that agents can use."}):_.map(h=>i.jsxs("div",{className:"model-card",children:[i.jsxs("div",{className:"model-card-header",children:[i.jsx("input",{type:"text",value:h.name,onChange:B=>S(h.id,{name:B.target.value}),placeholder:"Model name",className:"model-name-input"}),i.jsx("button",{className:`default-model-btn ${s.default_model_id===h.id?"is-default":""}`,onClick:()=>L(h.id),title:s.default_model_id===h.id?"Default model":"Set as default",children:i.jsx(sx,{size:14,fill:s.default_model_id===h.id?"currentColor":"none"})}),i.jsx("button",{className:"delete-item",onClick:()=>R(h.id),children:i.jsx(Fe,{size:16})})]}),i.jsx("div",{className:"model-card-body",children:i.jsx(lx,{projectId:e.id,values:h,onChange:B=>S(h.id,B)})})]},h.id))]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20},children:[i.jsxs("section",{className:"section",style:{margin:0},children:[i.jsxs("div",{className:"section-header",children:[i.jsxs("h2",{className:"section-title",children:[i.jsx(Eu,{size:20}),"State Keys"]}),i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:l,children:[i.jsx(Ke,{size:14}),"Add"]})]}),s.state_keys.length===0?i.jsx("p",{className:"empty-message",children:"No state keys. Auto-created when you add LlmAgents."}):i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:s.state_keys.map((h,B)=>i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"6px 8px",background:"var(--bg-secondary)",borderRadius:4},children:[i.jsx("input",{type:"text",value:h.name,onChange:C=>c(B,{name:C.target.value}),placeholder:"Key name",style:{flex:1,padding:"4px 8px",fontSize:12}}),i.jsxs("select",{value:h.type,onChange:C=>c(B,{type:C.target.value}),style:{padding:"4px 6px",fontSize:11},children:[i.jsx("option",{value:"string",children:"str"}),i.jsx("option",{value:"number",children:"num"}),i.jsx("option",{value:"boolean",children:"bool"}),i.jsx("option",{value:"object",children:"obj"}),i.jsx("option",{value:"array",children:"arr"})]}),i.jsx("button",{className:"delete-item",onClick:()=>u(B),style:{padding:4},children:i.jsx(Fe,{size:12})})]},B))})]}),i.jsxs("section",{className:"section",style:{margin:0},children:[i.jsx("div",{className:"section-header",children:i.jsxs("h2",{className:"section-title",children:[i.jsx(ax,{size:20}),"Advanced Options"]})}),i.jsxs("div",{className:"toggle-group",children:[i.jsx("div",{className:`toggle ${s.compaction.enabled?"active":""}`,onClick:()=>o({compaction:{...s.compaction,enabled:!s.compaction.enabled}})}),i.jsxs("div",{className:"toggle-label",children:[i.jsx("strong",{children:"Event Compaction"}),i.jsx("span",{children:"Summarize old events"})]}),s.compaction.enabled&&i.jsx("input",{type:"number",value:s.compaction.max_events,onChange:h=>o({compaction:{...s.compaction,max_events:parseInt(h.target.value)||100}}),style:{width:60,padding:"4px 6px",fontSize:12},placeholder:"Max"})]}),i.jsxs("div",{className:"toggle-group",style:{marginTop:10},children:[i.jsx("div",{className:`toggle ${s.context_cache.enabled?"active":""}`,onClick:()=>o({context_cache:{...s.context_cache,enabled:!s.context_cache.enabled}})}),i.jsxs("div",{className:"toggle-label",children:[i.jsx("strong",{children:"Context Caching"}),i.jsx("span",{children:"Cache static instructions"})]}),s.context_cache.enabled&&i.jsx("input",{type:"number",value:s.context_cache.ttl_seconds,onChange:h=>o({context_cache:{...s.context_cache,ttl_seconds:parseInt(h.target.value)||3600}}),style:{width:70,padding:"4px 6px",fontSize:12},placeholder:"TTL"})]}),i.jsxs("div",{className:"toggle-group",style:{marginTop:10},children:[i.jsx("div",{className:`toggle ${s.resumability.enabled?"active":""}`,onClick:()=>o({resumability:{...s.resumability,enabled:!s.resumability.enabled}})}),i.jsxs("div",{className:"toggle-label",children:[i.jsx("strong",{children:"Resumability"}),i.jsx("span",{children:"Pause/resume execution"})]})]})]})]}),i.jsxs("section",{className:"section",children:[i.jsxs("div",{className:"section-header",children:[i.jsxs("h2",{className:"section-title",children:[i.jsx(Xt,{size:20}),"Plugins"]}),i.jsx("div",{className:"plugin-add-dropdown",children:i.jsxs("select",{className:"btn btn-secondary btn-sm",value:"",onChange:h=>{h.target.value&&(d(h.target.value),h.target.value="")},style:{paddingRight:8},children:[i.jsx("option",{value:"",children:"+ Add Plugin..."}),i.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),i.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),i.jsx("option",{value:"LoggingPlugin",children:"Logging"}),i.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),i.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),i.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]})})]}),s.plugins.length===0?i.jsx("p",{className:"empty-message",children:"No plugins configured. Add plugins to extend agent functionality."}):s.plugins.map((h,B)=>i.jsxs("div",{className:"list-item",style:{flexDirection:"column",gap:12},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",gap:12},children:[i.jsxs("select",{value:h.type,onChange:C=>p(B,{type:C.target.value}),style:{flex:1},children:[i.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),i.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),i.jsx("option",{value:"LoggingPlugin",children:"Logging"}),i.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),i.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),i.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]}),i.jsx("button",{className:"delete-item",onClick:()=>f(B),children:i.jsx(Fe,{size:16})})]}),h.type==="ReflectAndRetryToolPlugin"&&i.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[i.jsxs("div",{className:"form-group",style:{flex:0},children:[i.jsx("label",{style:{fontSize:12},children:"Max Retries"}),i.jsx("input",{type:"number",min:"0",max:"10",value:h.max_retries??3,onChange:C=>p(B,{max_retries:parseInt(C.target.value)||0}),style:{width:70}})]}),i.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[i.jsxs("span",{className:"toggle-switch",children:[i.jsx("input",{type:"checkbox",checked:h.throw_exception_if_retry_exceeded??!1,onChange:C=>p(B,{throw_exception_if_retry_exceeded:C.target.checked})}),i.jsx("span",{className:"toggle-slider"})]}),"Throw exception if retry exceeded"]})]}),h.type==="ContextFilterPlugin"&&i.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[i.jsxs("div",{className:"form-group",style:{flex:0},children:[i.jsx("label",{style:{fontSize:12},children:"Invocations to Keep"}),i.jsx("input",{type:"number",min:"1",max:"100",value:h.num_invocations_to_keep??5,onChange:C=>p(B,{num_invocations_to_keep:parseInt(C.target.value)||1}),style:{width:70}})]}),i.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Keeps only the last N conversation turns to reduce context size"})]}),h.type==="LoggingPlugin"&&i.jsx("div",{style:{paddingLeft:8},children:i.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Logs all agent events (messages, tool calls, responses) to the console"})}),h.type==="GlobalInstructionPlugin"&&i.jsxs("div",{style:{width:"100%",paddingLeft:8},children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{style:{fontSize:12},children:"Global Instruction"}),i.jsx("textarea",{value:h.global_instruction??"",onChange:C=>p(B,{global_instruction:C.target.value}),placeholder:"Instructions that apply to all agents in the app...",rows:3,style:{width:"100%"}})]}),i.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"This instruction is prepended to every agent's system prompt"})]}),h.type==="SaveFilesAsArtifactsPlugin"&&i.jsx("div",{style:{paddingLeft:8},children:i.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Automatically saves files uploaded in user messages as artifacts for later retrieval"})}),h.type==="MultimodalToolResultsPlugin"&&i.jsx("div",{style:{paddingLeft:8},children:i.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Allows tools to return multimodal content (images, files) directly to the LLM"})})]},B))]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20},children:[i.jsxs("section",{className:"section",style:{margin:0},children:[i.jsxs("div",{className:"section-header",children:[i.jsxs("h2",{className:"section-title",children:[i.jsx(ix,{size:20}),"Network Allowlist"]}),i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:g,children:[i.jsx(Ke,{size:14}),"Add"]})]}),y.length===0?i.jsx("p",{className:"empty-message",style:{fontSize:11},children:"No custom patterns. LLM APIs allowed by default."}):i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:y.map((h,B)=>i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"6px 8px",background:"var(--bg-secondary)",borderRadius:4},children:[i.jsx(Nu,{size:14,style:{color:"var(--text-muted)",flexShrink:0}}),i.jsx("input",{type:"text",value:h.pattern,onChange:C=>x(B,{pattern:C.target.value}),placeholder:"*.example.com",style:{flex:1,padding:"4px 6px",fontSize:11}}),i.jsxs("select",{value:h.pattern_type,onChange:C=>x(B,{pattern_type:C.target.value}),style:{padding:"4px",fontSize:10,width:70},children:[i.jsx("option",{value:"exact",children:"exact"}),i.jsx("option",{value:"wildcard",children:"wild"}),i.jsx("option",{value:"regex",children:"regex"})]}),i.jsx("button",{className:"delete-item",onClick:()=>T(B),style:{padding:4},children:i.jsx(Fe,{size:12})})]},h.id||B))})]}),i.jsxs("section",{className:"section",style:{margin:0},children:[i.jsxs("div",{className:"section-header",children:[i.jsxs("h2",{className:"section-title",children:[i.jsx(E0,{size:20}),"Volume Mounts"]}),i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:z,children:[i.jsx(Ke,{size:14}),"Add"]})]}),j.length===0?i.jsx("p",{className:"empty-message",style:{fontSize:11},children:"No mounts. Add to give sandbox file access."}):i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:j.map((h,B)=>i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"6px 8px",background:"var(--bg-secondary)",borderRadius:4},children:[i.jsx(Zg,{size:14,style:{color:"var(--text-muted)",flexShrink:0}}),i.jsx("input",{type:"text",value:h.host_path,onChange:C=>w(B,{host_path:C.target.value}),placeholder:"~/path",style:{flex:1,padding:"4px 6px",fontSize:11},title:"Host path"}),i.jsx("span",{style:{color:"var(--text-muted)",fontSize:10},children:"→"}),i.jsx("input",{type:"text",value:h.container_path,onChange:C=>w(B,{container_path:C.target.value}),placeholder:"/mnt",style:{width:70,padding:"4px 6px",fontSize:11},title:"Container path"}),i.jsxs("select",{value:h.mode,onChange:C=>w(B,{mode:C.target.value}),style:{padding:"4px",fontSize:10,width:50},children:[i.jsx("option",{value:"ro",children:"ro"}),i.jsx("option",{value:"rw",children:"rw"})]}),i.jsx("button",{className:"delete-item",onClick:()=>P(B),style:{padding:4},children:i.jsx(Fe,{size:12})})]},B))})]})]})]})}const q0="modulepreload",J0=function(e){return"/"+e},Qp={},K0=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=J0(c),c in Qp)return;Qp[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":q0,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((f,m)=>{p.addEventListener("load",f),p.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})};function Yp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function G0(e){if(Array.isArray(e))return e}function Q0(e,t,n){return(t=rk(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Y0(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,s,o,a,l=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(d){u=!0,s=d}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw s}}return l}}function X0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function Zp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xp(Object(n),!0).forEach(function(r){Q0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Z0(e,t){if(e==null)return{};var n,r,s=ek(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}function ek(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function tk(e,t){return G0(e)||Y0(e,t)||ik(e,t)||X0()}function nk(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function rk(e){var t=nk(e,"string");return typeof t=="symbol"?t:t+""}function ik(e,t){if(e){if(typeof e=="string")return Yp(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Yp(e,t):void 0}}function sk(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ef(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function tf(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ef(Object(n),!0).forEach(function(r){sk(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ef(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ok(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(s,o){return o(s)},r)}}function zi(e){return function t(){for(var n=this,r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return s.length>=e.length?e.apply(this,s):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(s,l))}}}function $o(e){return{}.toString.call(e).includes("Object")}function ak(e){return!Object.keys(e).length}function cs(e){return typeof e=="function"}function lk(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ck(e,t){return $o(t)||Kn("changeType"),Object.keys(t).some(function(n){return!lk(e,n)})&&Kn("changeField"),t}function uk(e){cs(e)||Kn("selectorType")}function dk(e){cs(e)||$o(e)||Kn("handlerType"),$o(e)&&Object.values(e).some(function(t){return!cs(t)})&&Kn("handlersType")}function pk(e){e||Kn("initialIsRequired"),$o(e)||Kn("initialType"),ak(e)&&Kn("initialContent")}function fk(e,t){throw new Error(e[t]||e.default)}var mk={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Kn=zi(fk)(mk),Vs={changes:ck,selector:uk,handler:dk,initial:pk};function hk(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Vs.initial(e),Vs.handler(t);var n={current:e},r=zi(yk)(n,t),s=zi(xk)(n),o=zi(Vs.changes)(e),a=zi(gk)(n);function l(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return Vs.selector(u),u(n.current)}function c(u){ok(r,s,o,a)(u)}return[l,c]}function gk(e,t){return cs(t)?t(e.current):t}function xk(e,t){return e.current=tf(tf({},e.current),t),t}function yk(e,t,n){return cs(t)?t(e.current):Object.keys(n).forEach(function(r){var s;return(s=t[r])===null||s===void 0?void 0:s.call(t,e.current[r])}),n}var vk={create:hk},bk={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function kk(e){return function t(){for(var n=this,r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return s.length>=e.length?e.apply(this,s):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(s,l))}}}function jk(e){return{}.toString.call(e).includes("Object")}function wk(e){return e||nf("configIsRequired"),jk(e)||nf("configType"),e.urls?(_k(),{paths:{vs:e.urls.monacoBase}}):e}function _k(){console.warn(cx.deprecation)}function Sk(e,t){throw new Error(e[t]||e.default)}var cx={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},nf=kk(Sk)(cx),Ck={config:wk},Nk=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(s){return n.reduceRight(function(o,a){return a(o)},s)}};function ux(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],ux(e[n],t[n]))}),Zp(Zp({},e),t)}var Ek={type:"cancelation",msg:"operation is manually canceled"};function Ga(e){var t=!1,n=new Promise(function(r,s){e.then(function(o){return t?s(Ek):r(o)}),e.catch(s)});return n.cancel=function(){return t=!0},n}var zk=["monaco"],Tk=vk.create({config:bk,isInitialized:!1,resolve:null,reject:null,monaco:null}),dx=tk(Tk,2),js=dx[0],ua=dx[1];function Pk(e){var t=Ck.config(e),n=t.monaco,r=Z0(t,zk);ua(function(s){return{config:ux(s.config,r),monaco:n}})}function Lk(){var e=js(function(t){var n=t.monaco,r=t.isInitialized,s=t.resolve;return{monaco:n,isInitialized:r,resolve:s}});if(!e.isInitialized){if(ua({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),Ga(Qa);if(window.monaco&&window.monaco.editor)return px(window.monaco),e.resolve(window.monaco),Ga(Qa);Nk(Rk,Ik)(Mk)}return Ga(Qa)}function Rk(e){return document.body.appendChild(e)}function Ak(e){var t=document.createElement("script");return e&&(t.src=e),t}function Ik(e){var t=js(function(r){var s=r.config,o=r.reject;return{config:s,reject:o}}),n=Ak("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function Mk(){var e=js(function(n){var r=n.config,s=n.resolve,o=n.reject;return{config:r,resolve:s,reject:o}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;px(r),e.resolve(r)},function(n){e.reject(n)})}function px(e){js().monaco||ua({monaco:e})}function Ok(){return js(function(e){var t=e.monaco;return t})}var Qa=new Promise(function(e,t){return ua({resolve:e,reject:t})}),fx={config:Pk,init:Lk,__getMonacoInstance:Ok},Dk={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Ya=Dk,$k={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Fk=$k;function Bk({children:e}){return Rt.createElement("div",{style:Fk.container},e)}var Uk=Bk,Wk=Uk;function Vk({width:e,height:t,isEditorReady:n,loading:r,_ref:s,className:o,wrapperProps:a}){return Rt.createElement("section",{style:{...Ya.wrapper,width:e,height:t},...a},!n&&Rt.createElement(Wk,null,r),Rt.createElement("div",{ref:s,style:{...Ya.fullWidth,...!n&&Ya.hide},className:o}))}var Hk=Vk,mx=b.memo(Hk);function qk(e){b.useEffect(e,[])}var hx=qk;function Jk(e,t,n=!0){let r=b.useRef(!0);b.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var Tt=Jk;function $i(){}function Or(e,t,n,r){return Kk(e,r)||Gk(e,t,n,r)}function Kk(e,t){return e.editor.getModel(gx(e,t))}function Gk(e,t,n,r){return e.editor.createModel(t,n,r?gx(e,r):void 0)}function gx(e,t){return e.Uri.parse(t)}function Qk({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:s,originalModelPath:o,modifiedModelPath:a,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:c=!1,theme:u="light",loading:d="Loading...",options:p={},height:f="100%",width:m="100%",className:y,wrapperProps:j={},beforeMount:N=$i,onMount:v=$i}){let[g,x]=b.useState(!1),[T,z]=b.useState(!0),w=b.useRef(null),P=b.useRef(null),_=b.useRef(null),D=b.useRef(v),S=b.useRef(N),R=b.useRef(!1);hx(()=>{let $=fx.init();return $.then(Z=>(P.current=Z)&&z(!1)).catch(Z=>(Z==null?void 0:Z.type)!=="cancelation"&&console.error("Monaco initialization: error:",Z)),()=>w.current?U():$.cancel()}),Tt(()=>{if(w.current&&P.current){let $=w.current.getOriginalEditor(),Z=Or(P.current,e||"",r||n||"text",o||"");Z!==$.getModel()&&$.setModel(Z)}},[o],g),Tt(()=>{if(w.current&&P.current){let $=w.current.getModifiedEditor(),Z=Or(P.current,t||"",s||n||"text",a||"");Z!==$.getModel()&&$.setModel(Z)}},[a],g),Tt(()=>{let $=w.current.getModifiedEditor();$.getOption(P.current.editor.EditorOption.readOnly)?$.setValue(t||""):t!==$.getValue()&&($.executeEdits("",[{range:$.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),$.pushUndoStop())},[t],g),Tt(()=>{var $,Z;(Z=($=w.current)==null?void 0:$.getModel())==null||Z.original.setValue(e||"")},[e],g),Tt(()=>{let{original:$,modified:Z}=w.current.getModel();P.current.editor.setModelLanguage($,r||n||"text"),P.current.editor.setModelLanguage(Z,s||n||"text")},[n,r,s],g),Tt(()=>{var $;($=P.current)==null||$.editor.setTheme(u)},[u],g),Tt(()=>{var $;($=w.current)==null||$.updateOptions(p)},[p],g);let L=b.useCallback(()=>{var E;if(!P.current)return;S.current(P.current);let $=Or(P.current,e||"",r||n||"text",o||""),Z=Or(P.current,t||"",s||n||"text",a||"");(E=w.current)==null||E.setModel({original:$,modified:Z})},[n,t,s,e,r,o,a]),W=b.useCallback(()=>{var $;!R.current&&_.current&&(w.current=P.current.editor.createDiffEditor(_.current,{automaticLayout:!0,...p}),L(),($=P.current)==null||$.editor.setTheme(u),x(!0),R.current=!0)},[p,u,L]);b.useEffect(()=>{g&&D.current(w.current,P.current)},[g]),b.useEffect(()=>{!T&&!g&&W()},[T,g,W]);function U(){var Z,E,O,I;let $=(Z=w.current)==null?void 0:Z.getModel();l||((E=$==null?void 0:$.original)==null||E.dispose()),c||((O=$==null?void 0:$.modified)==null||O.dispose()),(I=w.current)==null||I.dispose()}return Rt.createElement(mx,{width:m,height:f,isEditorReady:g,loading:d,_ref:_,className:y,wrapperProps:j})}var Yk=Qk;b.memo(Yk);function Xk(e){let t=b.useRef();return b.useEffect(()=>{t.current=e},[e]),t.current}var Zk=Xk,Hs=new Map;function ej({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:s,path:o,theme:a="light",line:l,loading:c="Loading...",options:u={},overrideServices:d={},saveViewState:p=!0,keepCurrentModel:f=!1,width:m="100%",height:y="100%",className:j,wrapperProps:N={},beforeMount:v=$i,onMount:g=$i,onChange:x,onValidate:T=$i}){let[z,w]=b.useState(!1),[P,_]=b.useState(!0),D=b.useRef(null),S=b.useRef(null),R=b.useRef(null),L=b.useRef(g),W=b.useRef(v),U=b.useRef(),$=b.useRef(r),Z=Zk(o),E=b.useRef(!1),O=b.useRef(!1);hx(()=>{let V=fx.init();return V.then(Q=>(D.current=Q)&&_(!1)).catch(Q=>(Q==null?void 0:Q.type)!=="cancelation"&&console.error("Monaco initialization: error:",Q)),()=>S.current?k():V.cancel()}),Tt(()=>{var Q,h,B,C;let V=Or(D.current,e||r||"",t||s||"",o||n||"");V!==((Q=S.current)==null?void 0:Q.getModel())&&(p&&Hs.set(Z,(h=S.current)==null?void 0:h.saveViewState()),(B=S.current)==null||B.setModel(V),p&&((C=S.current)==null||C.restoreViewState(Hs.get(o))))},[o],z),Tt(()=>{var V;(V=S.current)==null||V.updateOptions(u)},[u],z),Tt(()=>{!S.current||r===void 0||(S.current.getOption(D.current.editor.EditorOption.readOnly)?S.current.setValue(r):r!==S.current.getValue()&&(O.current=!0,S.current.executeEdits("",[{range:S.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),S.current.pushUndoStop(),O.current=!1))},[r],z),Tt(()=>{var Q,h;let V=(Q=S.current)==null?void 0:Q.getModel();V&&s&&((h=D.current)==null||h.editor.setModelLanguage(V,s))},[s],z),Tt(()=>{var V;l!==void 0&&((V=S.current)==null||V.revealLine(l))},[l],z),Tt(()=>{var V;(V=D.current)==null||V.editor.setTheme(a)},[a],z);let I=b.useCallback(()=>{var V;if(!(!R.current||!D.current)&&!E.current){W.current(D.current);let Q=o||n,h=Or(D.current,r||e||"",t||s||"",Q||"");S.current=(V=D.current)==null?void 0:V.editor.create(R.current,{model:h,automaticLayout:!0,...u},d),p&&S.current.restoreViewState(Hs.get(Q)),D.current.editor.setTheme(a),l!==void 0&&S.current.revealLine(l),w(!0),E.current=!0}},[e,t,n,r,s,o,u,d,p,a,l]);b.useEffect(()=>{z&&L.current(S.current,D.current)},[z]),b.useEffect(()=>{!P&&!z&&I()},[P,z,I]),$.current=r,b.useEffect(()=>{var V,Q;z&&x&&((V=U.current)==null||V.dispose(),U.current=(Q=S.current)==null?void 0:Q.onDidChangeModelContent(h=>{O.current||x(S.current.getValue(),h)}))},[z,x]),b.useEffect(()=>{if(z){let V=D.current.editor.onDidChangeMarkers(Q=>{var B;let h=(B=S.current.getModel())==null?void 0:B.uri;if(h&&Q.find(C=>C.path===h.path)){let C=D.current.editor.getModelMarkers({resource:h});T==null||T(C)}});return()=>{V==null||V.dispose()}}return()=>{}},[z,T]);function k(){var V,Q;(V=U.current)==null||V.dispose(),f?p&&Hs.set(o,S.current.saveViewState()):(Q=S.current.getModel())==null||Q.dispose(),S.current.dispose()}return Rt.createElement(mx,{width:m,height:y,isEditorReady:z,loading:c,_ref:R,className:j,wrapperProps:N})}var tj=ej,nj=b.memo(tj),Wt=nj;function rj(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const ij=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,sj=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,oj={};function rf(e,t){return(oj.jsx?sj:ij).test(e)}const aj=/[ \t\n\f\r]/g;function lj(e){return typeof e=="object"?e.type==="text"?sf(e.value):!1:sf(e)}function sf(e){return e.replace(aj,"")===""}class ws{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}ws.prototype.normal={};ws.prototype.property={};ws.prototype.space=void 0;function xx(e,t){const n={},r={};for(const s of e)Object.assign(n,s.property),Object.assign(r,s.normal);return new ws(n,r,t)}function mc(e){return e.toLowerCase()}class _t{constructor(t,n){this.attribute=n,this.property=t}}_t.prototype.attribute="";_t.prototype.booleanish=!1;_t.prototype.boolean=!1;_t.prototype.commaOrSpaceSeparated=!1;_t.prototype.commaSeparated=!1;_t.prototype.defined=!1;_t.prototype.mustUseProperty=!1;_t.prototype.number=!1;_t.prototype.overloadedBoolean=!1;_t.prototype.property="";_t.prototype.spaceSeparated=!1;_t.prototype.space=void 0;let cj=0;const ke=kr(),Je=kr(),hc=kr(),ie=kr(),Ae=kr(),Vr=kr(),Ct=kr();function kr(){return 2**++cj}const gc=Object.freeze(Object.defineProperty({__proto__:null,boolean:ke,booleanish:Je,commaOrSpaceSeparated:Ct,commaSeparated:Vr,number:ie,overloadedBoolean:hc,spaceSeparated:Ae},Symbol.toStringTag,{value:"Module"})),Xa=Object.keys(gc);class Lu extends _t{constructor(t,n,r,s){let o=-1;if(super(t,n),of(this,"space",s),typeof r=="number")for(;++o<Xa.length;){const a=Xa[o];of(this,Xa[o],(r&gc[a])===gc[a])}}}Lu.prototype.defined=!0;function of(e,t,n){n&&(e[t]=n)}function ai(e){const t={},n={};for(const[r,s]of Object.entries(e.properties)){const o=new Lu(r,e.transform(e.attributes||{},r),s,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[mc(r)]=r,n[mc(o.attribute)]=r}return new ws(t,n,e.space)}const yx=ai({properties:{ariaActiveDescendant:null,ariaAtomic:Je,ariaAutoComplete:null,ariaBusy:Je,ariaChecked:Je,ariaColCount:ie,ariaColIndex:ie,ariaColSpan:ie,ariaControls:Ae,ariaCurrent:null,ariaDescribedBy:Ae,ariaDetails:null,ariaDisabled:Je,ariaDropEffect:Ae,ariaErrorMessage:null,ariaExpanded:Je,ariaFlowTo:Ae,ariaGrabbed:Je,ariaHasPopup:null,ariaHidden:Je,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ae,ariaLevel:ie,ariaLive:null,ariaModal:Je,ariaMultiLine:Je,ariaMultiSelectable:Je,ariaOrientation:null,ariaOwns:Ae,ariaPlaceholder:null,ariaPosInSet:ie,ariaPressed:Je,ariaReadOnly:Je,ariaRelevant:null,ariaRequired:Je,ariaRoleDescription:Ae,ariaRowCount:ie,ariaRowIndex:ie,ariaRowSpan:ie,ariaSelected:Je,ariaSetSize:ie,ariaSort:null,ariaValueMax:ie,ariaValueMin:ie,ariaValueNow:ie,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function vx(e,t){return t in e?e[t]:t}function bx(e,t){return vx(e,t.toLowerCase())}const uj=ai({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Vr,acceptCharset:Ae,accessKey:Ae,action:null,allow:null,allowFullScreen:ke,allowPaymentRequest:ke,allowUserMedia:ke,alt:null,as:null,async:ke,autoCapitalize:null,autoComplete:Ae,autoFocus:ke,autoPlay:ke,blocking:Ae,capture:null,charSet:null,checked:ke,cite:null,className:Ae,cols:ie,colSpan:null,content:null,contentEditable:Je,controls:ke,controlsList:Ae,coords:ie|Vr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ke,defer:ke,dir:null,dirName:null,disabled:ke,download:hc,draggable:Je,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ke,formTarget:null,headers:Ae,height:ie,hidden:hc,high:ie,href:null,hrefLang:null,htmlFor:Ae,httpEquiv:Ae,id:null,imageSizes:null,imageSrcSet:null,inert:ke,inputMode:null,integrity:null,is:null,isMap:ke,itemId:null,itemProp:Ae,itemRef:Ae,itemScope:ke,itemType:Ae,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ke,low:ie,manifest:null,max:null,maxLength:ie,media:null,method:null,min:null,minLength:ie,multiple:ke,muted:ke,name:null,nonce:null,noModule:ke,noValidate:ke,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ke,optimum:ie,pattern:null,ping:Ae,placeholder:null,playsInline:ke,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ke,referrerPolicy:null,rel:Ae,required:ke,reversed:ke,rows:ie,rowSpan:ie,sandbox:Ae,scope:null,scoped:ke,seamless:ke,selected:ke,shadowRootClonable:ke,shadowRootDelegatesFocus:ke,shadowRootMode:null,shape:null,size:ie,sizes:null,slot:null,span:ie,spellCheck:Je,src:null,srcDoc:null,srcLang:null,srcSet:null,start:ie,step:null,style:null,tabIndex:ie,target:null,title:null,translate:null,type:null,typeMustMatch:ke,useMap:null,value:Je,width:ie,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Ae,axis:null,background:null,bgColor:null,border:ie,borderColor:null,bottomMargin:ie,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ke,declare:ke,event:null,face:null,frame:null,frameBorder:null,hSpace:ie,leftMargin:ie,link:null,longDesc:null,lowSrc:null,marginHeight:ie,marginWidth:ie,noResize:ke,noHref:ke,noShade:ke,noWrap:ke,object:null,profile:null,prompt:null,rev:null,rightMargin:ie,rules:null,scheme:null,scrolling:Je,standby:null,summary:null,text:null,topMargin:ie,valueType:null,version:null,vAlign:null,vLink:null,vSpace:ie,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ke,disableRemotePlayback:ke,prefix:null,property:null,results:ie,security:null,unselectable:null},space:"html",transform:bx}),dj=ai({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Ct,accentHeight:ie,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:ie,amplitude:ie,arabicForm:null,ascent:ie,attributeName:null,attributeType:null,azimuth:ie,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:ie,by:null,calcMode:null,capHeight:ie,className:Ae,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:ie,diffuseConstant:ie,direction:null,display:null,dur:null,divisor:ie,dominantBaseline:null,download:ke,dx:null,dy:null,edgeMode:null,editable:null,elevation:ie,enableBackground:null,end:null,event:null,exponent:ie,externalResourcesRequired:null,fill:null,fillOpacity:ie,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Vr,g2:Vr,glyphName:Vr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:ie,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:ie,horizOriginX:ie,horizOriginY:ie,id:null,ideographic:ie,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:ie,k:ie,k1:ie,k2:ie,k3:ie,k4:ie,kernelMatrix:Ct,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:ie,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:ie,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:ie,overlineThickness:ie,paintOrder:null,panose1:null,path:null,pathLength:ie,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Ae,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:ie,pointsAtY:ie,pointsAtZ:ie,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Ct,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Ct,rev:Ct,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Ct,requiredFeatures:Ct,requiredFonts:Ct,requiredFormats:Ct,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:ie,specularExponent:ie,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:ie,strikethroughThickness:ie,string:null,stroke:null,strokeDashArray:Ct,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:ie,strokeOpacity:ie,strokeWidth:null,style:null,surfaceScale:ie,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Ct,tabIndex:ie,tableValues:null,target:null,targetX:ie,targetY:ie,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Ct,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:ie,underlineThickness:ie,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:ie,values:null,vAlphabetic:ie,vMathematical:ie,vectorEffect:null,vHanging:ie,vIdeographic:ie,version:null,vertAdvY:ie,vertOriginX:ie,vertOriginY:ie,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:ie,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:vx}),kx=ai({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),jx=ai({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:bx}),wx=ai({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),pj={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},fj=/[A-Z]/g,af=/-[a-z]/g,mj=/^data[-\w.:]+$/i;function hj(e,t){const n=mc(t);let r=t,s=_t;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&mj.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(af,xj);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!af.test(o)){let a=o.replace(fj,gj);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a}}s=Lu}return new s(r,t)}function gj(e){return"-"+e.toLowerCase()}function xj(e){return e.charAt(1).toUpperCase()}const yj=xx([yx,uj,kx,jx,wx],"html"),Ru=xx([yx,dj,kx,jx,wx],"svg");function vj(e){return e.join(" ").trim()}var Au={},lf=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,bj=/\n/g,kj=/^\s*/,jj=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,wj=/^:\s*/,_j=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Sj=/^[;\s]*/,Cj=/^\s+|\s+$/g,Nj=`
`,cf="/",uf="*",sr="",Ej="comment",zj="declaration";function Tj(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function s(y){var j=y.match(bj);j&&(n+=j.length);var N=y.lastIndexOf(Nj);r=~N?y.length-N:r+y.length}function o(){var y={line:n,column:r};return function(j){return j.position=new a(y),u(),j}}function a(y){this.start=y,this.end={line:n,column:r},this.source=t.source}a.prototype.content=e;function l(y){var j=new Error(t.source+":"+n+":"+r+": "+y);if(j.reason=y,j.filename=t.source,j.line=n,j.column=r,j.source=e,!t.silent)throw j}function c(y){var j=y.exec(e);if(j){var N=j[0];return s(N),e=e.slice(N.length),j}}function u(){c(kj)}function d(y){var j;for(y=y||[];j=p();)j!==!1&&y.push(j);return y}function p(){var y=o();if(!(cf!=e.charAt(0)||uf!=e.charAt(1))){for(var j=2;sr!=e.charAt(j)&&(uf!=e.charAt(j)||cf!=e.charAt(j+1));)++j;if(j+=2,sr===e.charAt(j-1))return l("End of comment missing");var N=e.slice(2,j-2);return r+=2,s(N),e=e.slice(j),r+=2,y({type:Ej,comment:N})}}function f(){var y=o(),j=c(jj);if(j){if(p(),!c(wj))return l("property missing ':'");var N=c(_j),v=y({type:zj,property:df(j[0].replace(lf,sr)),value:N?df(N[0].replace(lf,sr)):sr});return c(Sj),v}}function m(){var y=[];d(y);for(var j;j=f();)j!==!1&&(y.push(j),d(y));return y}return u(),m()}function df(e){return e?e.replace(Cj,sr):sr}var Pj=Tj,Lj=uo&&uo.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Au,"__esModule",{value:!0});Au.default=Aj;const Rj=Lj(Pj);function Aj(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,Rj.default)(e),s=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:a,value:l}=o;s?t(a,l,o):l&&(n=n||{},n[a]=l)}),n}var da={};Object.defineProperty(da,"__esModule",{value:!0});da.camelCase=void 0;var Ij=/^--[a-zA-Z0-9_-]+$/,Mj=/-([a-z])/g,Oj=/^[^-]+$/,Dj=/^-(webkit|moz|ms|o|khtml)-/,$j=/^-(ms)-/,Fj=function(e){return!e||Oj.test(e)||Ij.test(e)},Bj=function(e,t){return t.toUpperCase()},pf=function(e,t){return"".concat(t,"-")},Uj=function(e,t){return t===void 0&&(t={}),Fj(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace($j,pf):e=e.replace(Dj,pf),e.replace(Mj,Bj))};da.camelCase=Uj;var Wj=uo&&uo.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Vj=Wj(Au),Hj=da;function xc(e,t){var n={};return!e||typeof e!="string"||(0,Vj.default)(e,function(r,s){r&&s&&(n[(0,Hj.camelCase)(r,t)]=s)}),n}xc.default=xc;var qj=xc;const Jj=Vo(qj),_x=Sx("end"),Iu=Sx("start");function Sx(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Kj(e){const t=Iu(e),n=_x(e);if(t&&n)return{start:t,end:n}}function Fi(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?ff(e.position):"start"in e||"end"in e?ff(e):"line"in e||"column"in e?yc(e):""}function yc(e){return mf(e&&e.line)+":"+mf(e&&e.column)}function ff(e){return yc(e&&e.start)+"-"+yc(e&&e.end)}function mf(e){return e&&typeof e=="number"?e:1}class dt extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let s="",o={},a=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?s=t:!o.cause&&t&&(a=!0,s=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?o.ruleId=r:(o.source=r.slice(0,c),o.ruleId=r.slice(c+1))}if(!o.place&&o.ancestors&&o.ancestors){const c=o.ancestors[o.ancestors.length-1];c&&(o.place=c.position)}const l=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=s,this.line=l?l.line:void 0,this.name=Fi(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=a&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}dt.prototype.file="";dt.prototype.name="";dt.prototype.reason="";dt.prototype.message="";dt.prototype.stack="";dt.prototype.column=void 0;dt.prototype.line=void 0;dt.prototype.ancestors=void 0;dt.prototype.cause=void 0;dt.prototype.fatal=void 0;dt.prototype.place=void 0;dt.prototype.ruleId=void 0;dt.prototype.source=void 0;const Mu={}.hasOwnProperty,Gj=new Map,Qj=/[A-Z]/g,Yj=new Set(["table","tbody","thead","tfoot","tr"]),Xj=new Set(["td","th"]),Cx="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Zj(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=aw(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=ow(n,t.jsx,t.jsxs)}const s={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Ru:yj,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=Nx(s,e,void 0);return o&&typeof o!="string"?o:s.create(e,s.Fragment,{children:o||void 0},void 0)}function Nx(e,t,n){if(t.type==="element")return ew(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return tw(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return rw(e,t,n);if(t.type==="mdxjsEsm")return nw(e,t);if(t.type==="root")return iw(e,t,n);if(t.type==="text")return sw(e,t)}function ew(e,t,n){const r=e.schema;let s=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(s=Ru,e.schema=s),e.ancestors.push(t);const o=zx(e,t.tagName,!1),a=lw(e,t);let l=Du(e,t);return Yj.has(t.tagName)&&(l=l.filter(function(c){return typeof c=="string"?!lj(c):!0})),Ex(e,a,o,t),Ou(a,l),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function tw(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}us(e,t.position)}function nw(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);us(e,t.position)}function rw(e,t,n){const r=e.schema;let s=r;t.name==="svg"&&r.space==="html"&&(s=Ru,e.schema=s),e.ancestors.push(t);const o=t.name===null?e.Fragment:zx(e,t.name,!0),a=cw(e,t),l=Du(e,t);return Ex(e,a,o,t),Ou(a,l),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function iw(e,t,n){const r={};return Ou(r,Du(e,t)),e.create(t,e.Fragment,r,n)}function sw(e,t){return t.value}function Ex(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Ou(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function ow(e,t,n){return r;function r(s,o,a,l){const u=Array.isArray(a.children)?n:t;return l?u(o,a,l):u(o,a)}}function aw(e,t){return n;function n(r,s,o,a){const l=Array.isArray(o.children),c=Iu(r);return t(s,o,a,l,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function lw(e,t){const n={};let r,s;for(s in t.properties)if(s!=="children"&&Mu.call(t.properties,s)){const o=uw(e,s,t.properties[s]);if(o){const[a,l]=o;e.tableCellAlignToStyle&&a==="align"&&typeof l=="string"&&Xj.has(t.tagName)?r=l:n[a]=l}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function cw(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const a=o.expression;a.type;const l=a.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument))}else us(e,t.position);else{const s=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const l=r.value.data.estree.body[0];l.type,o=e.evaluater.evaluateExpression(l.expression)}else us(e,t.position);else o=r.value===null?!0:r.value;n[s]=o}return n}function Du(e,t){const n=[];let r=-1;const s=e.passKeys?new Map:Gj;for(;++r<t.children.length;){const o=t.children[r];let a;if(e.passKeys){const c=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(c){const u=s.get(c)||0;a=c+"-"+u,s.set(c,u+1)}}const l=Nx(e,o,a);l!==void 0&&n.push(l)}return n}function uw(e,t,n){const r=hj(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?rj(n):vj(n)),r.property==="style"){let s=typeof n=="object"?n:dw(e,String(n));return e.stylePropertyNameCase==="css"&&(s=pw(s)),["style",s]}return[e.elementAttributeNameCase==="react"&&r.space?pj[r.property]||r.property:r.attribute,n]}}function dw(e,t){try{return Jj(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,s=new dt("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw s.file=e.filePath||void 0,s.url=Cx+"#cannot-parse-style-attribute",s}}function zx(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const s=t.split(".");let o=-1,a;for(;++o<s.length;){const l=rf(s[o])?{type:"Identifier",name:s[o]}:{type:"Literal",value:s[o]};a=a?{type:"MemberExpression",object:a,property:l,computed:!!(o&&l.type==="Literal"),optional:!1}:l}r=a}else r=rf(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const s=r.value;return Mu.call(e.components,s)?e.components[s]:s}if(e.evaluater)return e.evaluater.evaluateExpression(r);us(e)}function us(e,t){const n=new dt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Cx+"#cannot-handle-mdx-estrees-without-createevaluater",n}function pw(e){const t={};let n;for(n in e)Mu.call(e,n)&&(t[fw(n)]=e[n]);return t}function fw(e){let t=e.replace(Qj,mw);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function mw(e){return"-"+e.toLowerCase()}const Za={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},hw={};function gw(e,t){const n=hw,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,s=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Tx(e,r,s)}function Tx(e,t,n){if(xw(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return hf(e.children,t,n)}return Array.isArray(e)?hf(e,t,n):""}function hf(e,t,n){const r=[];let s=-1;for(;++s<e.length;)r[s]=Tx(e[s],t,n);return r.join("")}function xw(e){return!!(e&&typeof e=="object")}const gf=document.createElement("i");function $u(e){const t="&"+e+";";gf.innerHTML=t;const n=gf.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function gn(e,t,n,r){const s=e.length;let o=0,a;if(t<0?t=-t>s?0:s+t:t=t>s?s:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);o<r.length;)a=r.slice(o,o+1e4),a.unshift(t,0),e.splice(...a),o+=1e4,t+=1e4}function Bt(e,t){return e.length>0?(gn(e,e.length,0,t),e):t}const xf={}.hasOwnProperty;function yw(e){const t={};let n=-1;for(;++n<e.length;)vw(t,e[n]);return t}function vw(e,t){let n;for(n in t){const s=(xf.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let a;if(o)for(a in o){xf.call(s,a)||(s[a]=[]);const l=o[a];bw(s[a],Array.isArray(l)?l:l?[l]:[])}}}function bw(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);gn(e,0,0,r)}function Px(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Hr(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const dn=nr(/[A-Za-z]/),Lt=nr(/[\dA-Za-z]/),kw=nr(/[#-'*+\--9=?A-Z^-~]/);function vc(e){return e!==null&&(e<32||e===127)}const bc=nr(/\d/),jw=nr(/[\dA-Fa-f]/),ww=nr(/[!-/:-@[-`{-~]/);function be(e){return e!==null&&e<-2}function wt(e){return e!==null&&(e<0||e===32)}function Ee(e){return e===-2||e===-1||e===32}const _w=nr(new RegExp("\\p{P}|\\p{S}","u")),Sw=nr(/\s/);function nr(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function li(e){const t=[];let n=-1,r=0,s=0;for(;++n<e.length;){const o=e.charCodeAt(n);let a="";if(o===37&&Lt(e.charCodeAt(n+1))&&Lt(e.charCodeAt(n+2)))s=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(a=String.fromCharCode(o));else if(o>55295&&o<57344){const l=e.charCodeAt(n+1);o<56320&&l>56319&&l<57344?(a=String.fromCharCode(o,l),s=1):a="�"}else a=String.fromCharCode(o);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+s+1,a=""),s&&(n+=s,s=0)}return t.join("")+e.slice(r)}function Me(e,t,n,r){const s=r?r-1:Number.POSITIVE_INFINITY;let o=0;return a;function a(c){return Ee(c)?(e.enter(n),l(c)):t(c)}function l(c){return Ee(c)&&o++<s?(e.consume(c),l):(e.exit(n),t(c))}}const Cw={tokenize:Nw};function Nw(e){const t=e.attempt(this.parser.constructs.contentInitial,r,s);let n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),Me(e,t,"linePrefix")}function s(l){return e.enter("paragraph"),o(l)}function o(l){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,a(l)}function a(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return be(l)?(e.consume(l),e.exit("chunkText"),o):(e.consume(l),a)}}const Ew={tokenize:zw},yf={tokenize:Tw};function zw(e){const t=this,n=[];let r=0,s,o,a;return l;function l(x){if(r<n.length){const T=n[r];return t.containerState=T[1],e.attempt(T[0].continuation,c,u)(x)}return u(x)}function c(x){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,s&&g();const T=t.events.length;let z=T,w;for(;z--;)if(t.events[z][0]==="exit"&&t.events[z][1].type==="chunkFlow"){w=t.events[z][1].end;break}v(r);let P=T;for(;P<t.events.length;)t.events[P][1].end={...w},P++;return gn(t.events,z+1,0,t.events.slice(T)),t.events.length=P,u(x)}return l(x)}function u(x){if(r===n.length){if(!s)return f(x);if(s.currentConstruct&&s.currentConstruct.concrete)return y(x);t.interrupt=!!(s.currentConstruct&&!s._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(yf,d,p)(x)}function d(x){return s&&g(),v(r),f(x)}function p(x){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,y(x)}function f(x){return t.containerState={},e.attempt(yf,m,y)(x)}function m(x){return r++,n.push([t.currentConstruct,t.containerState]),f(x)}function y(x){if(x===null){s&&g(),v(0),e.consume(x);return}return s=s||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:s,contentType:"flow",previous:o}),j(x)}function j(x){if(x===null){N(e.exit("chunkFlow"),!0),v(0),e.consume(x);return}return be(x)?(e.consume(x),N(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(x),j)}function N(x,T){const z=t.sliceStream(x);if(T&&z.push(null),x.previous=o,o&&(o.next=x),o=x,s.defineSkip(x.start),s.write(z),t.parser.lazy[x.start.line]){let w=s.events.length;for(;w--;)if(s.events[w][1].start.offset<a&&(!s.events[w][1].end||s.events[w][1].end.offset>a))return;const P=t.events.length;let _=P,D,S;for(;_--;)if(t.events[_][0]==="exit"&&t.events[_][1].type==="chunkFlow"){if(D){S=t.events[_][1].end;break}D=!0}for(v(r),w=P;w<t.events.length;)t.events[w][1].end={...S},w++;gn(t.events,_+1,0,t.events.slice(P)),t.events.length=w}}function v(x){let T=n.length;for(;T-- >x;){const z=n[T];t.containerState=z[1],z[0].exit.call(t,e)}n.length=x}function g(){s.write([null]),o=void 0,s=void 0,t.containerState._closeFlow=void 0}}function Tw(e,t,n){return Me(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function vf(e){if(e===null||wt(e)||Sw(e))return 1;if(_w(e))return 2}function Fu(e,t,n){const r=[];let s=-1;for(;++s<e.length;){const o=e[s].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const kc={name:"attention",resolveAll:Pw,tokenize:Lw};function Pw(e,t){let n=-1,r,s,o,a,l,c,u,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p={...e[r][1].end},f={...e[n][1].start};bf(p,-c),bf(f,c),a={type:c>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},l={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},o={type:c>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},s={type:c>1?"strong":"emphasis",start:{...a.start},end:{...l.end}},e[r][1].end={...a.start},e[n][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=Bt(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=Bt(u,[["enter",s,t],["enter",a,t],["exit",a,t],["enter",o,t]]),u=Bt(u,Fu(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=Bt(u,[["exit",o,t],["enter",l,t],["exit",l,t],["exit",s,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,u=Bt(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,gn(e,r-1,n-r+3,u),n=r+u.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function Lw(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,s=vf(r);let o;return a;function a(c){return o=c,e.enter("attentionSequence"),l(c)}function l(c){if(c===o)return e.consume(c),l;const u=e.exit("attentionSequence"),d=vf(c),p=!d||d===2&&s||n.includes(c),f=!s||s===2&&d||n.includes(r);return u._open=!!(o===42?p:p&&(s||!f)),u._close=!!(o===42?f:f&&(d||!p)),t(c)}}function bf(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Rw={name:"autolink",tokenize:Aw};function Aw(e,t,n){let r=0;return s;function s(m){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(m){return dn(m)?(e.consume(m),a):m===64?n(m):u(m)}function a(m){return m===43||m===45||m===46||Lt(m)?(r=1,l(m)):u(m)}function l(m){return m===58?(e.consume(m),r=0,c):(m===43||m===45||m===46||Lt(m))&&r++<32?(e.consume(m),l):(r=0,u(m))}function c(m){return m===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):m===null||m===32||m===60||vc(m)?n(m):(e.consume(m),c)}function u(m){return m===64?(e.consume(m),d):kw(m)?(e.consume(m),u):n(m)}function d(m){return Lt(m)?p(m):n(m)}function p(m){return m===46?(e.consume(m),r=0,d):m===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):f(m)}function f(m){if((m===45||Lt(m))&&r++<63){const y=m===45?f:p;return e.consume(m),y}return n(m)}}const pa={partial:!0,tokenize:Iw};function Iw(e,t,n){return r;function r(o){return Ee(o)?Me(e,s,"linePrefix")(o):s(o)}function s(o){return o===null||be(o)?t(o):n(o)}}const Lx={continuation:{tokenize:Ow},exit:Dw,name:"blockQuote",tokenize:Mw};function Mw(e,t,n){const r=this;return s;function s(a){if(a===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),o}return n(a)}function o(a){return Ee(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function Ow(e,t,n){const r=this;return s;function s(a){return Ee(a)?Me(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):o(a)}function o(a){return e.attempt(Lx,t,n)(a)}}function Dw(e){e.exit("blockQuote")}const Rx={name:"characterEscape",tokenize:$w};function $w(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),s}function s(o){return ww(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const Ax={name:"characterReference",tokenize:Fw};function Fw(e,t,n){const r=this;let s=0,o,a;return l;function l(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),c}function c(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,a=Lt,d(p))}function u(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,a=jw,d):(e.enter("characterReferenceValue"),o=7,a=bc,d(p))}function d(p){if(p===59&&s){const f=e.exit("characterReferenceValue");return a===Lt&&!$u(r.sliceSerialize(f))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(p)&&s++<o?(e.consume(p),d):n(p)}}const kf={partial:!0,tokenize:Uw},jf={concrete:!0,name:"codeFenced",tokenize:Bw};function Bw(e,t,n){const r=this,s={partial:!0,tokenize:z};let o=0,a=0,l;return c;function c(w){return u(w)}function u(w){const P=r.events[r.events.length-1];return o=P&&P[1].type==="linePrefix"?P[2].sliceSerialize(P[1],!0).length:0,l=w,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(w)}function d(w){return w===l?(a++,e.consume(w),d):a<3?n(w):(e.exit("codeFencedFenceSequence"),Ee(w)?Me(e,p,"whitespace")(w):p(w))}function p(w){return w===null||be(w)?(e.exit("codeFencedFence"),r.interrupt?t(w):e.check(kf,j,T)(w)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(w))}function f(w){return w===null||be(w)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(w)):Ee(w)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Me(e,m,"whitespace")(w)):w===96&&w===l?n(w):(e.consume(w),f)}function m(w){return w===null||be(w)?p(w):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),y(w))}function y(w){return w===null||be(w)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(w)):w===96&&w===l?n(w):(e.consume(w),y)}function j(w){return e.attempt(s,T,N)(w)}function N(w){return e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),v}function v(w){return o>0&&Ee(w)?Me(e,g,"linePrefix",o+1)(w):g(w)}function g(w){return w===null||be(w)?e.check(kf,j,T)(w):(e.enter("codeFlowValue"),x(w))}function x(w){return w===null||be(w)?(e.exit("codeFlowValue"),g(w)):(e.consume(w),x)}function T(w){return e.exit("codeFenced"),t(w)}function z(w,P,_){let D=0;return S;function S($){return w.enter("lineEnding"),w.consume($),w.exit("lineEnding"),R}function R($){return w.enter("codeFencedFence"),Ee($)?Me(w,L,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)($):L($)}function L($){return $===l?(w.enter("codeFencedFenceSequence"),W($)):_($)}function W($){return $===l?(D++,w.consume($),W):D>=a?(w.exit("codeFencedFenceSequence"),Ee($)?Me(w,U,"whitespace")($):U($)):_($)}function U($){return $===null||be($)?(w.exit("codeFencedFence"),P($)):_($)}}}function Uw(e,t,n){const r=this;return s;function s(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}const el={name:"codeIndented",tokenize:Vw},Ww={partial:!0,tokenize:Hw};function Vw(e,t,n){const r=this;return s;function s(u){return e.enter("codeIndented"),Me(e,o,"linePrefix",5)(u)}function o(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?a(u):n(u)}function a(u){return u===null?c(u):be(u)?e.attempt(Ww,a,c)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||be(u)?(e.exit("codeFlowValue"),a(u)):(e.consume(u),l)}function c(u){return e.exit("codeIndented"),t(u)}}function Hw(e,t,n){const r=this;return s;function s(a){return r.parser.lazy[r.now().line]?n(a):be(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),s):Me(e,o,"linePrefix",5)(a)}function o(a){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):be(a)?s(a):n(a)}}const qw={name:"codeText",previous:Kw,resolve:Jw,tokenize:Gw};function Jw(e){let t=e.length-4,n=3,r,s;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)s===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(s=r):(r===t||e[r][1].type==="lineEnding")&&(e[s][1].type="codeTextData",r!==s+2&&(e[s][1].end=e[r-1][1].end,e.splice(s+2,r-s-2),t-=r-s-2,r=s+2),s=void 0);return e}function Kw(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Gw(e,t,n){let r=0,s,o;return a;function a(p){return e.enter("codeText"),e.enter("codeTextSequence"),l(p)}function l(p){return p===96?(e.consume(p),r++,l):(e.exit("codeTextSequence"),c(p))}function c(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),c):p===96?(o=e.enter("codeTextSequence"),s=0,d(p)):be(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),c):(e.enter("codeTextData"),u(p))}function u(p){return p===null||p===32||p===96||be(p)?(e.exit("codeTextData"),c(p)):(e.consume(p),u)}function d(p){return p===96?(e.consume(p),s++,d):s===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(o.type="codeTextData",u(p))}}class Qw{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const s=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-s,Number.POSITIVE_INFINITY);return r&&ki(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),ki(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),ki(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);ki(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);ki(this.left,n.reverse())}}}function ki(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Ix(e){const t={};let n=-1,r,s,o,a,l,c,u;const d=new Qw(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,o=0,o<c.length&&c[o][1].type==="lineEndingBlank"&&(o+=2),o<c.length&&c[o][1].type==="content"))for(;++o<c.length&&c[o][1].type!=="content";)c[o][1].type==="chunkText"&&(c[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Yw(d,n)),n=t[n],u=!0);else if(r[1]._container){for(o=n,s=void 0;o--;)if(a=d.get(o),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(s&&(d.get(s)[1].type="lineEndingBlank"),a[1].type="lineEnding",s=o);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;s&&(r[1].end={...d.get(s)[1].start},l=d.slice(s,n),l.unshift(r),d.splice(s,n-s+1,l))}}return gn(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function Yw(e,t){const n=e.get(t)[1],r=e.get(t)[2];let s=t-1;const o=[];let a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const l=a.events,c=[],u={};let d,p,f=-1,m=n,y=0,j=0;const N=[j];for(;m;){for(;e.get(++s)[1]!==m;);o.push(s),m._tokenizer||(d=r.sliceStream(m),m.next||d.push(null),p&&a.defineSkip(m.start),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),p=m,m=m.next}for(m=n;++f<l.length;)l[f][0]==="exit"&&l[f-1][0]==="enter"&&l[f][1].type===l[f-1][1].type&&l[f][1].start.line!==l[f][1].end.line&&(j=f+1,N.push(j),m._tokenizer=void 0,m.previous=void 0,m=m.next);for(a.events=[],m?(m._tokenizer=void 0,m.previous=void 0):N.pop(),f=N.length;f--;){const v=l.slice(N[f],N[f+1]),g=o.pop();c.push([g,g+v.length-1]),e.splice(g,2,v)}for(c.reverse(),f=-1;++f<c.length;)u[y+c[f][0]]=y+c[f][1],y+=c[f][1]-c[f][0]-1;return u}const Xw={resolve:e2,tokenize:t2},Zw={partial:!0,tokenize:n2};function e2(e){return Ix(e),e}function t2(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),s(l)}function s(l){return l===null?o(l):be(l)?e.check(Zw,a,o)(l):(e.consume(l),s)}function o(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function a(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,s}}function n2(e,t,n){const r=this;return s;function s(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),Me(e,o,"linePrefix")}function o(a){if(a===null||be(a))return n(a);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function Mx(e,t,n,r,s,o,a,l,c){const u=c||Number.POSITIVE_INFINITY;let d=0;return p;function p(v){return v===60?(e.enter(r),e.enter(s),e.enter(o),e.consume(v),e.exit(o),f):v===null||v===32||v===41||vc(v)?n(v):(e.enter(r),e.enter(a),e.enter(l),e.enter("chunkString",{contentType:"string"}),j(v))}function f(v){return v===62?(e.enter(o),e.consume(v),e.exit(o),e.exit(s),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),m(v))}function m(v){return v===62?(e.exit("chunkString"),e.exit(l),f(v)):v===null||v===60||be(v)?n(v):(e.consume(v),v===92?y:m)}function y(v){return v===60||v===62||v===92?(e.consume(v),m):m(v)}function j(v){return!d&&(v===null||v===41||wt(v))?(e.exit("chunkString"),e.exit(l),e.exit(a),e.exit(r),t(v)):d<u&&v===40?(e.consume(v),d++,j):v===41?(e.consume(v),d--,j):v===null||v===32||v===40||vc(v)?n(v):(e.consume(v),v===92?N:j)}function N(v){return v===40||v===41||v===92?(e.consume(v),j):j(v)}}function Ox(e,t,n,r,s,o){const a=this;let l=0,c;return u;function u(m){return e.enter(r),e.enter(s),e.consume(m),e.exit(s),e.enter(o),d}function d(m){return l>999||m===null||m===91||m===93&&!c||m===94&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?n(m):m===93?(e.exit(o),e.enter(s),e.consume(m),e.exit(s),e.exit(r),t):be(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),p(m))}function p(m){return m===null||m===91||m===93||be(m)||l++>999?(e.exit("chunkString"),d(m)):(e.consume(m),c||(c=!Ee(m)),m===92?f:p)}function f(m){return m===91||m===92||m===93?(e.consume(m),l++,p):p(m)}}function Dx(e,t,n,r,s,o){let a;return l;function l(f){return f===34||f===39||f===40?(e.enter(r),e.enter(s),e.consume(f),e.exit(s),a=f===40?41:f,c):n(f)}function c(f){return f===a?(e.enter(s),e.consume(f),e.exit(s),e.exit(r),t):(e.enter(o),u(f))}function u(f){return f===a?(e.exit(o),c(a)):f===null?n(f):be(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),Me(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===a||f===null||be(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?p:d)}function p(f){return f===a||f===92?(e.consume(f),d):d(f)}}function Bi(e,t){let n;return r;function r(s){return be(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),n=!0,r):Ee(s)?Me(e,r,n?"linePrefix":"lineSuffix")(s):t(s)}}const r2={name:"definition",tokenize:s2},i2={partial:!0,tokenize:o2};function s2(e,t,n){const r=this;let s;return o;function o(m){return e.enter("definition"),a(m)}function a(m){return Ox.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(m)}function l(m){return s=Hr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),m===58?(e.enter("definitionMarker"),e.consume(m),e.exit("definitionMarker"),c):n(m)}function c(m){return wt(m)?Bi(e,u)(m):u(m)}function u(m){return Mx(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(m)}function d(m){return e.attempt(i2,p,p)(m)}function p(m){return Ee(m)?Me(e,f,"whitespace")(m):f(m)}function f(m){return m===null||be(m)?(e.exit("definition"),r.parser.defined.push(s),t(m)):n(m)}}function o2(e,t,n){return r;function r(l){return wt(l)?Bi(e,s)(l):n(l)}function s(l){return Dx(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function o(l){return Ee(l)?Me(e,a,"whitespace")(l):a(l)}function a(l){return l===null||be(l)?t(l):n(l)}}const a2={name:"hardBreakEscape",tokenize:l2};function l2(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),s}function s(o){return be(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const c2={name:"headingAtx",resolve:u2,tokenize:d2};function u2(e,t){let n=e.length-2,r=3,s,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(s={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},gn(e,r,n-r+1,[["enter",s,t],["enter",o,t],["exit",o,t],["exit",s,t]])),e}function d2(e,t,n){let r=0;return s;function s(d){return e.enter("atxHeading"),o(d)}function o(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&r++<6?(e.consume(d),a):d===null||wt(d)?(e.exit("atxHeadingSequence"),l(d)):n(d)}function l(d){return d===35?(e.enter("atxHeadingSequence"),c(d)):d===null||be(d)?(e.exit("atxHeading"),t(d)):Ee(d)?Me(e,l,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function c(d){return d===35?(e.consume(d),c):(e.exit("atxHeadingSequence"),l(d))}function u(d){return d===null||d===35||wt(d)?(e.exit("atxHeadingText"),l(d)):(e.consume(d),u)}}const p2=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],wf=["pre","script","style","textarea"],f2={concrete:!0,name:"htmlFlow",resolveTo:g2,tokenize:x2},m2={partial:!0,tokenize:v2},h2={partial:!0,tokenize:y2};function g2(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function x2(e,t,n){const r=this;let s,o,a,l,c;return u;function u(h){return d(h)}function d(h){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(h),p}function p(h){return h===33?(e.consume(h),f):h===47?(e.consume(h),o=!0,j):h===63?(e.consume(h),s=3,r.interrupt?t:k):dn(h)?(e.consume(h),a=String.fromCharCode(h),N):n(h)}function f(h){return h===45?(e.consume(h),s=2,m):h===91?(e.consume(h),s=5,l=0,y):dn(h)?(e.consume(h),s=4,r.interrupt?t:k):n(h)}function m(h){return h===45?(e.consume(h),r.interrupt?t:k):n(h)}function y(h){const B="CDATA[";return h===B.charCodeAt(l++)?(e.consume(h),l===B.length?r.interrupt?t:L:y):n(h)}function j(h){return dn(h)?(e.consume(h),a=String.fromCharCode(h),N):n(h)}function N(h){if(h===null||h===47||h===62||wt(h)){const B=h===47,C=a.toLowerCase();return!B&&!o&&wf.includes(C)?(s=1,r.interrupt?t(h):L(h)):p2.includes(a.toLowerCase())?(s=6,B?(e.consume(h),v):r.interrupt?t(h):L(h)):(s=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(h):o?g(h):x(h))}return h===45||Lt(h)?(e.consume(h),a+=String.fromCharCode(h),N):n(h)}function v(h){return h===62?(e.consume(h),r.interrupt?t:L):n(h)}function g(h){return Ee(h)?(e.consume(h),g):S(h)}function x(h){return h===47?(e.consume(h),S):h===58||h===95||dn(h)?(e.consume(h),T):Ee(h)?(e.consume(h),x):S(h)}function T(h){return h===45||h===46||h===58||h===95||Lt(h)?(e.consume(h),T):z(h)}function z(h){return h===61?(e.consume(h),w):Ee(h)?(e.consume(h),z):x(h)}function w(h){return h===null||h===60||h===61||h===62||h===96?n(h):h===34||h===39?(e.consume(h),c=h,P):Ee(h)?(e.consume(h),w):_(h)}function P(h){return h===c?(e.consume(h),c=null,D):h===null||be(h)?n(h):(e.consume(h),P)}function _(h){return h===null||h===34||h===39||h===47||h===60||h===61||h===62||h===96||wt(h)?z(h):(e.consume(h),_)}function D(h){return h===47||h===62||Ee(h)?x(h):n(h)}function S(h){return h===62?(e.consume(h),R):n(h)}function R(h){return h===null||be(h)?L(h):Ee(h)?(e.consume(h),R):n(h)}function L(h){return h===45&&s===2?(e.consume(h),Z):h===60&&s===1?(e.consume(h),E):h===62&&s===4?(e.consume(h),V):h===63&&s===3?(e.consume(h),k):h===93&&s===5?(e.consume(h),I):be(h)&&(s===6||s===7)?(e.exit("htmlFlowData"),e.check(m2,Q,W)(h)):h===null||be(h)?(e.exit("htmlFlowData"),W(h)):(e.consume(h),L)}function W(h){return e.check(h2,U,Q)(h)}function U(h){return e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),$}function $(h){return h===null||be(h)?W(h):(e.enter("htmlFlowData"),L(h))}function Z(h){return h===45?(e.consume(h),k):L(h)}function E(h){return h===47?(e.consume(h),a="",O):L(h)}function O(h){if(h===62){const B=a.toLowerCase();return wf.includes(B)?(e.consume(h),V):L(h)}return dn(h)&&a.length<8?(e.consume(h),a+=String.fromCharCode(h),O):L(h)}function I(h){return h===93?(e.consume(h),k):L(h)}function k(h){return h===62?(e.consume(h),V):h===45&&s===2?(e.consume(h),k):L(h)}function V(h){return h===null||be(h)?(e.exit("htmlFlowData"),Q(h)):(e.consume(h),V)}function Q(h){return e.exit("htmlFlow"),t(h)}}function y2(e,t,n){const r=this;return s;function s(a){return be(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o):n(a)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function v2(e,t,n){return r;function r(s){return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),e.attempt(pa,t,n)}}const b2={name:"htmlText",tokenize:k2};function k2(e,t,n){const r=this;let s,o,a;return l;function l(k){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(k),c}function c(k){return k===33?(e.consume(k),u):k===47?(e.consume(k),z):k===63?(e.consume(k),x):dn(k)?(e.consume(k),_):n(k)}function u(k){return k===45?(e.consume(k),d):k===91?(e.consume(k),o=0,y):dn(k)?(e.consume(k),g):n(k)}function d(k){return k===45?(e.consume(k),m):n(k)}function p(k){return k===null?n(k):k===45?(e.consume(k),f):be(k)?(a=p,E(k)):(e.consume(k),p)}function f(k){return k===45?(e.consume(k),m):p(k)}function m(k){return k===62?Z(k):k===45?f(k):p(k)}function y(k){const V="CDATA[";return k===V.charCodeAt(o++)?(e.consume(k),o===V.length?j:y):n(k)}function j(k){return k===null?n(k):k===93?(e.consume(k),N):be(k)?(a=j,E(k)):(e.consume(k),j)}function N(k){return k===93?(e.consume(k),v):j(k)}function v(k){return k===62?Z(k):k===93?(e.consume(k),v):j(k)}function g(k){return k===null||k===62?Z(k):be(k)?(a=g,E(k)):(e.consume(k),g)}function x(k){return k===null?n(k):k===63?(e.consume(k),T):be(k)?(a=x,E(k)):(e.consume(k),x)}function T(k){return k===62?Z(k):x(k)}function z(k){return dn(k)?(e.consume(k),w):n(k)}function w(k){return k===45||Lt(k)?(e.consume(k),w):P(k)}function P(k){return be(k)?(a=P,E(k)):Ee(k)?(e.consume(k),P):Z(k)}function _(k){return k===45||Lt(k)?(e.consume(k),_):k===47||k===62||wt(k)?D(k):n(k)}function D(k){return k===47?(e.consume(k),Z):k===58||k===95||dn(k)?(e.consume(k),S):be(k)?(a=D,E(k)):Ee(k)?(e.consume(k),D):Z(k)}function S(k){return k===45||k===46||k===58||k===95||Lt(k)?(e.consume(k),S):R(k)}function R(k){return k===61?(e.consume(k),L):be(k)?(a=R,E(k)):Ee(k)?(e.consume(k),R):D(k)}function L(k){return k===null||k===60||k===61||k===62||k===96?n(k):k===34||k===39?(e.consume(k),s=k,W):be(k)?(a=L,E(k)):Ee(k)?(e.consume(k),L):(e.consume(k),U)}function W(k){return k===s?(e.consume(k),s=void 0,$):k===null?n(k):be(k)?(a=W,E(k)):(e.consume(k),W)}function U(k){return k===null||k===34||k===39||k===60||k===61||k===96?n(k):k===47||k===62||wt(k)?D(k):(e.consume(k),U)}function $(k){return k===47||k===62||wt(k)?D(k):n(k)}function Z(k){return k===62?(e.consume(k),e.exit("htmlTextData"),e.exit("htmlText"),t):n(k)}function E(k){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),O}function O(k){return Ee(k)?Me(e,I,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(k):I(k)}function I(k){return e.enter("htmlTextData"),a(k)}}const Bu={name:"labelEnd",resolveAll:S2,resolveTo:C2,tokenize:N2},j2={tokenize:E2},w2={tokenize:z2},_2={tokenize:T2};function S2(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const s=r.type==="labelImage"?4:2;r.type="data",t+=s}}return e.length!==n.length&&gn(e,0,e.length,n),e}function C2(e,t){let n=e.length,r=0,s,o,a,l;for(;n--;)if(s=e[n][1],o){if(s.type==="link"||s.type==="labelLink"&&s._inactive)break;e[n][0]==="enter"&&s.type==="labelLink"&&(s._inactive=!0)}else if(a){if(e[n][0]==="enter"&&(s.type==="labelImage"||s.type==="labelLink")&&!s._balanced&&(o=n,s.type!=="labelLink")){r=2;break}}else s.type==="labelEnd"&&(a=n);const c={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[o][1].start},end:{...e[a][1].end}},d={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[a-2][1].start}};return l=[["enter",c,t],["enter",u,t]],l=Bt(l,e.slice(o+1,o+r+3)),l=Bt(l,[["enter",d,t]]),l=Bt(l,Fu(t.parser.constructs.insideSpan.null,e.slice(o+r+4,a-3),t)),l=Bt(l,[["exit",d,t],e[a-2],e[a-1],["exit",u,t]]),l=Bt(l,e.slice(a+1)),l=Bt(l,[["exit",c,t]]),gn(e,o,e.length,l),e}function N2(e,t,n){const r=this;let s=r.events.length,o,a;for(;s--;)if((r.events[s][1].type==="labelImage"||r.events[s][1].type==="labelLink")&&!r.events[s][1]._balanced){o=r.events[s][1];break}return l;function l(f){return o?o._inactive?p(f):(a=r.parser.defined.includes(Hr(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),c):n(f)}function c(f){return f===40?e.attempt(j2,d,a?d:p)(f):f===91?e.attempt(w2,d,a?u:p)(f):a?d(f):p(f)}function u(f){return e.attempt(_2,d,p)(f)}function d(f){return t(f)}function p(f){return o._balanced=!0,n(f)}}function E2(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),s}function s(p){return wt(p)?Bi(e,o)(p):o(p)}function o(p){return p===41?d(p):Mx(e,a,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function a(p){return wt(p)?Bi(e,c)(p):d(p)}function l(p){return n(p)}function c(p){return p===34||p===39||p===40?Dx(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function u(p){return wt(p)?Bi(e,d)(p):d(p)}function d(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function z2(e,t,n){const r=this;return s;function s(l){return Ox.call(r,e,o,a,"reference","referenceMarker","referenceString")(l)}function o(l){return r.parser.defined.includes(Hr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function a(l){return n(l)}}function T2(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),s}function s(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const P2={name:"labelStartImage",resolveAll:Bu.resolveAll,tokenize:L2};function L2(e,t,n){const r=this;return s;function s(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),o}function o(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),a):n(l)}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const R2={name:"labelStartLink",resolveAll:Bu.resolveAll,tokenize:A2};function A2(e,t,n){const r=this;return s;function s(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),o}function o(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const tl={name:"lineEnding",tokenize:I2};function I2(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Me(e,t,"linePrefix")}}const lo={name:"thematicBreak",tokenize:M2};function M2(e,t,n){let r=0,s;return o;function o(u){return e.enter("thematicBreak"),a(u)}function a(u){return s=u,l(u)}function l(u){return u===s?(e.enter("thematicBreakSequence"),c(u)):r>=3&&(u===null||be(u))?(e.exit("thematicBreak"),t(u)):n(u)}function c(u){return u===s?(e.consume(u),r++,c):(e.exit("thematicBreakSequence"),Ee(u)?Me(e,l,"whitespace")(u):l(u))}}const xt={continuation:{tokenize:F2},exit:U2,name:"list",tokenize:$2},O2={partial:!0,tokenize:W2},D2={partial:!0,tokenize:B2};function $2(e,t,n){const r=this,s=r.events[r.events.length-1];let o=s&&s[1].type==="linePrefix"?s[2].sliceSerialize(s[1],!0).length:0,a=0;return l;function l(m){const y=r.containerState.type||(m===42||m===43||m===45?"listUnordered":"listOrdered");if(y==="listUnordered"?!r.containerState.marker||m===r.containerState.marker:bc(m)){if(r.containerState.type||(r.containerState.type=y,e.enter(y,{_container:!0})),y==="listUnordered")return e.enter("listItemPrefix"),m===42||m===45?e.check(lo,n,u)(m):u(m);if(!r.interrupt||m===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(m)}return n(m)}function c(m){return bc(m)&&++a<10?(e.consume(m),c):(!r.interrupt||a<2)&&(r.containerState.marker?m===r.containerState.marker:m===41||m===46)?(e.exit("listItemValue"),u(m)):n(m)}function u(m){return e.enter("listItemMarker"),e.consume(m),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||m,e.check(pa,r.interrupt?n:d,e.attempt(O2,f,p))}function d(m){return r.containerState.initialBlankLine=!0,o++,f(m)}function p(m){return Ee(m)?(e.enter("listItemPrefixWhitespace"),e.consume(m),e.exit("listItemPrefixWhitespace"),f):n(m)}function f(m){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(m)}}function F2(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(pa,s,o);function s(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Me(e,t,"listItemIndent",r.containerState.size+1)(l)}function o(l){return r.containerState.furtherBlankLines||!Ee(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(D2,t,a)(l))}function a(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,Me(e,e.attempt(xt,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function B2(e,t,n){const r=this;return Me(e,s,"listItemIndent",r.containerState.size+1);function s(o){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(o):n(o)}}function U2(e){e.exit(this.containerState.type)}function W2(e,t,n){const r=this;return Me(e,s,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function s(o){const a=r.events[r.events.length-1];return!Ee(o)&&a&&a[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const _f={name:"setextUnderline",resolveTo:V2,tokenize:H2};function V2(e,t){let n=e.length,r,s,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(s=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[s][1].type="setextHeadingText",o?(e.splice(s,0,["enter",a,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=a,e.push(["exit",a,t]),e}function H2(e,t,n){const r=this;let s;return o;function o(u){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),s=u,a(u)):n(u)}function a(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===s?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),Ee(u)?Me(e,c,"lineSuffix")(u):c(u))}function c(u){return u===null||be(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const q2={tokenize:J2};function J2(e){const t=this,n=e.attempt(pa,r,e.attempt(this.parser.constructs.flowInitial,s,Me(e,e.attempt(this.parser.constructs.flow,s,e.attempt(Xw,s)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function s(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const K2={resolveAll:Fx()},G2=$x("string"),Q2=$x("text");function $x(e){return{resolveAll:Fx(e==="text"?Y2:void 0),tokenize:t};function t(n){const r=this,s=this.parser.constructs[e],o=n.attempt(s,a,l);return a;function a(d){return u(d)?o(d):l(d)}function l(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),c}function c(d){return u(d)?(n.exit("data"),o(d)):(n.consume(d),c)}function u(d){if(d===null)return!0;const p=s[d];let f=-1;if(p)for(;++f<p.length;){const m=p[f];if(!m.previous||m.previous.call(r,r.previous))return!0}return!1}}}function Fx(e){return t;function t(n,r){let s=-1,o;for(;++s<=n.length;)o===void 0?n[s]&&n[s][1].type==="data"&&(o=s,s++):(!n[s]||n[s][1].type!=="data")&&(s!==o+2&&(n[o][1].end=n[s-1][1].end,n.splice(o+2,s-o-2),s=o+2),o=void 0);return e?e(n,r):n}}function Y2(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],s=t.sliceStream(r);let o=s.length,a=-1,l=0,c;for(;o--;){const u=s[o];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)l++,a--;if(a)break;a=-1}else if(u===-2)c=!0,l++;else if(u!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){const u={type:n===e.length||c||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?a:r.start._bufferIndex+a,_index:r.start._index+o,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const X2={42:xt,43:xt,45:xt,48:xt,49:xt,50:xt,51:xt,52:xt,53:xt,54:xt,55:xt,56:xt,57:xt,62:Lx},Z2={91:r2},e_={[-2]:el,[-1]:el,32:el},t_={35:c2,42:lo,45:[_f,lo],60:f2,61:_f,95:lo,96:jf,126:jf},n_={38:Ax,92:Rx},r_={[-5]:tl,[-4]:tl,[-3]:tl,33:P2,38:Ax,42:kc,60:[Rw,b2],91:R2,92:[a2,Rx],93:Bu,95:kc,96:qw},i_={null:[kc,K2]},s_={null:[42,95]},o_={null:[]},a_=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:s_,contentInitial:Z2,disable:o_,document:X2,flow:t_,flowInitial:e_,insideSpan:i_,string:n_,text:r_},Symbol.toStringTag,{value:"Module"}));function l_(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const s={},o=[];let a=[],l=[];const c={attempt:P(z),check:P(w),consume:g,enter:x,exit:T,interrupt:P(w,{interrupt:!0})},u={code:null,containerState:{},defineSkip:j,events:[],now:y,parser:e,previous:null,sliceSerialize:f,sliceStream:m,write:p};let d=t.tokenize.call(u,c);return t.resolveAll&&o.push(t),u;function p(R){return a=Bt(a,R),N(),a[a.length-1]!==null?[]:(_(t,0),u.events=Fu(o,u.events,u),u.events)}function f(R,L){return u_(m(R),L)}function m(R){return c_(a,R)}function y(){const{_bufferIndex:R,_index:L,line:W,column:U,offset:$}=r;return{_bufferIndex:R,_index:L,line:W,column:U,offset:$}}function j(R){s[R.line]=R.column,S()}function N(){let R;for(;r._index<a.length;){const L=a[r._index];if(typeof L=="string")for(R=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===R&&r._bufferIndex<L.length;)v(L.charCodeAt(r._bufferIndex));else v(L)}}function v(R){d=d(R)}function g(R){be(R)?(r.line++,r.column=1,r.offset+=R===-3?2:1,S()):R!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=R}function x(R,L){const W=L||{};return W.type=R,W.start=y(),u.events.push(["enter",W,u]),l.push(W),W}function T(R){const L=l.pop();return L.end=y(),u.events.push(["exit",L,u]),L}function z(R,L){_(R,L.from)}function w(R,L){L.restore()}function P(R,L){return W;function W(U,$,Z){let E,O,I,k;return Array.isArray(U)?Q(U):"tokenize"in U?Q([U]):V(U);function V(G){return xe;function xe(ye){const H=ye!==null&&G[ye],A=ye!==null&&G.null,q=[...Array.isArray(H)?H:H?[H]:[],...Array.isArray(A)?A:A?[A]:[]];return Q(q)(ye)}}function Q(G){return E=G,O=0,G.length===0?Z:h(G[O])}function h(G){return xe;function xe(ye){return k=D(),I=G,G.partial||(u.currentConstruct=G),G.name&&u.parser.constructs.disable.null.includes(G.name)?C():G.tokenize.call(L?Object.assign(Object.create(u),L):u,c,B,C)(ye)}}function B(G){return R(I,k),$}function C(G){return k.restore(),++O<E.length?h(E[O]):Z}}}function _(R,L){R.resolveAll&&!o.includes(R)&&o.push(R),R.resolve&&gn(u.events,L,u.events.length-L,R.resolve(u.events.slice(L),u)),R.resolveTo&&(u.events=R.resolveTo(u.events,u))}function D(){const R=y(),L=u.previous,W=u.currentConstruct,U=u.events.length,$=Array.from(l);return{from:U,restore:Z};function Z(){r=R,u.previous=L,u.currentConstruct=W,u.events.length=U,l=$,S()}}function S(){r.line in s&&r.column<2&&(r.column=s[r.line],r.offset+=s[r.line]-1)}}function c_(e,t){const n=t.start._index,r=t.start._bufferIndex,s=t.end._index,o=t.end._bufferIndex;let a;if(n===s)a=[e[n].slice(r,o)];else{if(a=e.slice(n,s),r>-1){const l=a[0];typeof l=="string"?a[0]=l.slice(r):a.shift()}o>0&&a.push(e[s].slice(0,o))}return a}function u_(e,t){let n=-1;const r=[];let s;for(;++n<e.length;){const o=e[n];let a;if(typeof o=="string")a=o;else switch(o){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&s)continue;a=" ";break}default:a=String.fromCharCode(o)}s=o===-2,r.push(a)}return r.join("")}function d_(e){const r={constructs:yw([a_,...(e||{}).extensions||[]]),content:s(Cw),defined:[],document:s(Ew),flow:s(q2),lazy:{},string:s(G2),text:s(Q2)};return r;function s(o){return a;function a(l){return l_(r,o,l)}}}function p_(e){for(;!Ix(e););return e}const Sf=/[\0\t\n\r]/g;function f_(){let e=1,t="",n=!0,r;return s;function s(o,a,l){const c=[];let u,d,p,f,m;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(a||void 0).decode(o)),p=0,t="",n&&(o.charCodeAt(0)===65279&&p++,n=void 0);p<o.length;){if(Sf.lastIndex=p,u=Sf.exec(o),f=u&&u.index!==void 0?u.index:o.length,m=o.charCodeAt(f),!u){t=o.slice(p);break}if(m===10&&p===f&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),p<f&&(c.push(o.slice(p,f)),e+=f-p),m){case 0:{c.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,c.push(-2);e++<d;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}p=f+1}return l&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const m_=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function h_(e){return e.replace(m_,g_)}function g_(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const s=n.charCodeAt(1),o=s===120||s===88;return Px(n.slice(o?2:1),o?16:10)}return $u(n)||e}const Bx={}.hasOwnProperty;function x_(e,t,n){return typeof t!="string"&&(n=t,t=void 0),y_(n)(p_(d_(n).document().write(f_()(e,t,!0))))}function y_(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(we),autolinkProtocol:D,autolinkEmail:D,atxHeading:o(K),blockQuote:o(A),characterEscape:D,characterReference:D,codeFenced:o(q),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:o(q,a),codeText:o(ee,a),codeTextData:D,data:D,codeFlowValue:D,definition:o(Y),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:o(oe),hardBreakEscape:o(X),hardBreakTrailing:o(X),htmlFlow:o(re,a),htmlFlowData:D,htmlText:o(re,a),htmlTextData:D,image:o(ve),label:a,link:o(we),listItem:o(je),listItemValue:f,listOrdered:o(ze,p),listUnordered:o(ze),paragraph:o(F),reference:h,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:o(K),strong:o(ae),thematicBreak:o(ge)},exit:{atxHeading:c(),atxHeadingSequence:z,autolink:c(),autolinkEmail:H,autolinkProtocol:ye,blockQuote:c(),characterEscapeValue:S,characterReferenceMarkerHexadecimal:C,characterReferenceMarkerNumeric:C,characterReferenceValue:G,characterReference:xe,codeFenced:c(N),codeFencedFence:j,codeFencedFenceInfo:m,codeFencedFenceMeta:y,codeFlowValue:S,codeIndented:c(v),codeText:c($),codeTextData:S,data:S,definition:c(),definitionDestinationString:T,definitionLabelString:g,definitionTitleString:x,emphasis:c(),hardBreakEscape:c(L),hardBreakTrailing:c(L),htmlFlow:c(W),htmlFlowData:S,htmlText:c(U),htmlTextData:S,image:c(E),label:I,labelText:O,lineEnding:R,link:c(Z),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:B,resourceDestinationString:k,resourceTitleString:V,resource:Q,setextHeading:c(_),setextHeadingLineSequence:P,setextHeadingText:w,strong:c(),thematicBreak:c()}};Ux(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(J){let te={type:"root",children:[]};const he={stack:[te],tokenStack:[],config:t,enter:l,exit:u,buffer:a,resume:d,data:n},le=[];let _e=-1;for(;++_e<J.length;)if(J[_e][1].type==="listOrdered"||J[_e][1].type==="listUnordered")if(J[_e][0]==="enter")le.push(_e);else{const Ze=le.pop();_e=s(J,Ze,_e)}for(_e=-1;++_e<J.length;){const Ze=t[J[_e][0]];Bx.call(Ze,J[_e][1].type)&&Ze[J[_e][1].type].call(Object.assign({sliceSerialize:J[_e][2].sliceSerialize},he),J[_e][1])}if(he.tokenStack.length>0){const Ze=he.tokenStack[he.tokenStack.length-1];(Ze[1]||Cf).call(he,void 0,Ze[0])}for(te.position={start:Pn(J.length>0?J[0][1].start:{line:1,column:1,offset:0}),end:Pn(J.length>0?J[J.length-2][1].end:{line:1,column:1,offset:0})},_e=-1;++_e<t.transforms.length;)te=t.transforms[_e](te)||te;return te}function s(J,te,he){let le=te-1,_e=-1,Ze=!1,rn,Dt,Jt,zn;for(;++le<=he;){const et=J[le];switch(et[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{et[0]==="enter"?_e++:_e--,zn=void 0;break}case"lineEndingBlank":{et[0]==="enter"&&(rn&&!zn&&!_e&&!Jt&&(Jt=le),zn=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:zn=void 0}if(!_e&&et[0]==="enter"&&et[1].type==="listItemPrefix"||_e===-1&&et[0]==="exit"&&(et[1].type==="listUnordered"||et[1].type==="listOrdered")){if(rn){let sn=le;for(Dt=void 0;sn--;){const gt=J[sn];if(gt[1].type==="lineEnding"||gt[1].type==="lineEndingBlank"){if(gt[0]==="exit")continue;Dt&&(J[Dt][1].type="lineEndingBlank",Ze=!0),gt[1].type="lineEnding",Dt=sn}else if(!(gt[1].type==="linePrefix"||gt[1].type==="blockQuotePrefix"||gt[1].type==="blockQuotePrefixWhitespace"||gt[1].type==="blockQuoteMarker"||gt[1].type==="listItemIndent"))break}Jt&&(!Dt||Jt<Dt)&&(rn._spread=!0),rn.end=Object.assign({},Dt?J[Dt][1].start:et[1].end),J.splice(Dt||le,0,["exit",rn,et[2]]),le++,he++}if(et[1].type==="listItemPrefix"){const sn={type:"listItem",_spread:!1,start:Object.assign({},et[1].start),end:void 0};rn=sn,J.splice(le,0,["enter",sn,et[2]]),le++,he++,Jt=void 0,zn=!0}}}return J[te][1]._spread=Ze,he}function o(J,te){return he;function he(le){l.call(this,J(le),le),te&&te.call(this,le)}}function a(){this.stack.push({type:"fragment",children:[]})}function l(J,te,he){this.stack[this.stack.length-1].children.push(J),this.stack.push(J),this.tokenStack.push([te,he||void 0]),J.position={start:Pn(te.start),end:void 0}}function c(J){return te;function te(he){J&&J.call(this,he),u.call(this,he)}}function u(J,te){const he=this.stack.pop(),le=this.tokenStack.pop();if(le)le[0].type!==J.type&&(te?te.call(this,J,le[0]):(le[1]||Cf).call(this,J,le[0]));else throw new Error("Cannot close `"+J.type+"` ("+Fi({start:J.start,end:J.end})+"): it’s not open");he.position.end=Pn(J.end)}function d(){return gw(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function f(J){if(this.data.expectingFirstListItemValue){const te=this.stack[this.stack.length-2];te.start=Number.parseInt(this.sliceSerialize(J),10),this.data.expectingFirstListItemValue=void 0}}function m(){const J=this.resume(),te=this.stack[this.stack.length-1];te.lang=J}function y(){const J=this.resume(),te=this.stack[this.stack.length-1];te.meta=J}function j(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function N(){const J=this.resume(),te=this.stack[this.stack.length-1];te.value=J.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function v(){const J=this.resume(),te=this.stack[this.stack.length-1];te.value=J.replace(/(\r?\n|\r)$/g,"")}function g(J){const te=this.resume(),he=this.stack[this.stack.length-1];he.label=te,he.identifier=Hr(this.sliceSerialize(J)).toLowerCase()}function x(){const J=this.resume(),te=this.stack[this.stack.length-1];te.title=J}function T(){const J=this.resume(),te=this.stack[this.stack.length-1];te.url=J}function z(J){const te=this.stack[this.stack.length-1];if(!te.depth){const he=this.sliceSerialize(J).length;te.depth=he}}function w(){this.data.setextHeadingSlurpLineEnding=!0}function P(J){const te=this.stack[this.stack.length-1];te.depth=this.sliceSerialize(J).codePointAt(0)===61?1:2}function _(){this.data.setextHeadingSlurpLineEnding=void 0}function D(J){const he=this.stack[this.stack.length-1].children;let le=he[he.length-1];(!le||le.type!=="text")&&(le=fe(),le.position={start:Pn(J.start),end:void 0},he.push(le)),this.stack.push(le)}function S(J){const te=this.stack.pop();te.value+=this.sliceSerialize(J),te.position.end=Pn(J.end)}function R(J){const te=this.stack[this.stack.length-1];if(this.data.atHardBreak){const he=te.children[te.children.length-1];he.position.end=Pn(J.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(te.type)&&(D.call(this,J),S.call(this,J))}function L(){this.data.atHardBreak=!0}function W(){const J=this.resume(),te=this.stack[this.stack.length-1];te.value=J}function U(){const J=this.resume(),te=this.stack[this.stack.length-1];te.value=J}function $(){const J=this.resume(),te=this.stack[this.stack.length-1];te.value=J}function Z(){const J=this.stack[this.stack.length-1];if(this.data.inReference){const te=this.data.referenceType||"shortcut";J.type+="Reference",J.referenceType=te,delete J.url,delete J.title}else delete J.identifier,delete J.label;this.data.referenceType=void 0}function E(){const J=this.stack[this.stack.length-1];if(this.data.inReference){const te=this.data.referenceType||"shortcut";J.type+="Reference",J.referenceType=te,delete J.url,delete J.title}else delete J.identifier,delete J.label;this.data.referenceType=void 0}function O(J){const te=this.sliceSerialize(J),he=this.stack[this.stack.length-2];he.label=h_(te),he.identifier=Hr(te).toLowerCase()}function I(){const J=this.stack[this.stack.length-1],te=this.resume(),he=this.stack[this.stack.length-1];if(this.data.inReference=!0,he.type==="link"){const le=J.children;he.children=le}else he.alt=te}function k(){const J=this.resume(),te=this.stack[this.stack.length-1];te.url=J}function V(){const J=this.resume(),te=this.stack[this.stack.length-1];te.title=J}function Q(){this.data.inReference=void 0}function h(){this.data.referenceType="collapsed"}function B(J){const te=this.resume(),he=this.stack[this.stack.length-1];he.label=te,he.identifier=Hr(this.sliceSerialize(J)).toLowerCase(),this.data.referenceType="full"}function C(J){this.data.characterReferenceType=J.type}function G(J){const te=this.sliceSerialize(J),he=this.data.characterReferenceType;let le;he?(le=Px(te,he==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):le=$u(te);const _e=this.stack[this.stack.length-1];_e.value+=le}function xe(J){const te=this.stack.pop();te.position.end=Pn(J.end)}function ye(J){S.call(this,J);const te=this.stack[this.stack.length-1];te.url=this.sliceSerialize(J)}function H(J){S.call(this,J);const te=this.stack[this.stack.length-1];te.url="mailto:"+this.sliceSerialize(J)}function A(){return{type:"blockquote",children:[]}}function q(){return{type:"code",lang:null,meta:null,value:""}}function ee(){return{type:"inlineCode",value:""}}function Y(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function oe(){return{type:"emphasis",children:[]}}function K(){return{type:"heading",depth:0,children:[]}}function X(){return{type:"break"}}function re(){return{type:"html",value:""}}function ve(){return{type:"image",title:null,url:"",alt:null}}function we(){return{type:"link",title:null,url:"",children:[]}}function ze(J){return{type:"list",ordered:J.type==="listOrdered",start:null,spread:J._spread,children:[]}}function je(J){return{type:"listItem",spread:J._spread,checked:null,children:[]}}function F(){return{type:"paragraph",children:[]}}function ae(){return{type:"strong",children:[]}}function fe(){return{type:"text",value:""}}function ge(){return{type:"thematicBreak"}}}function Pn(e){return{line:e.line,column:e.column,offset:e.offset}}function Ux(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?Ux(e,r):v_(e,r)}}function v_(e,t){let n;for(n in t)if(Bx.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Cf(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Fi({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Fi({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Fi({start:t.start,end:t.end})+") is still open")}function b_(e){const t=this;t.parser=n;function n(r){return x_(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function k_(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function j_(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function w_(e,t){const n=t.value?t.value+`
`:"",r={},s=t.lang?t.lang.split(/\s+/):[];s.length>0&&(r.className=["language-"+s[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function __(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function S_(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function C_(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),s=li(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let a,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=o+1,l+=1,e.footnoteCounts.set(r,l);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+s,id:n+"fnref-"+s+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,c);const u={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,u),e.applyData(t,u)}function N_(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function E_(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Wx(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const s=e.all(t),o=s[0];o&&o.type==="text"?o.value="["+o.value:s.unshift({type:"text",value:"["});const a=s[s.length-1];return a&&a.type==="text"?a.value+=r:s.push({type:"text",value:r}),s}function z_(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Wx(e,t);const s={src:li(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(s.title=r.title);const o={type:"element",tagName:"img",properties:s,children:[]};return e.patch(t,o),e.applyData(t,o)}function T_(e,t){const n={src:li(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function P_(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function L_(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Wx(e,t);const s={href:li(r.url||"")};r.title!==null&&r.title!==void 0&&(s.title=r.title);const o={type:"element",tagName:"a",properties:s,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function R_(e,t){const n={href:li(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function A_(e,t,n){const r=e.all(t),s=n?I_(n):Vx(t),o={},a=[];if(typeof t.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const d=r[l];(s||l!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!s?a.push(...d.children):a.push(d)}const c=r[r.length-1];c&&(s||c.type!=="element"||c.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:a};return e.patch(t,u),e.applyData(t,u)}function I_(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Vx(n[r])}return t}function Vx(e){const t=e.spread;return t??e.children.length>1}function M_(e,t){const n={},r=e.all(t);let s=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++s<r.length;){const a=r[s];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function O_(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function D_(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function $_(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function F_(e,t){const n=e.all(t),r=n.shift(),s=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),s.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},l=Iu(t.children[1]),c=_x(t.children[t.children.length-1]);l&&c&&(a.position={start:l,end:c}),s.push(a)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(s,!0)};return e.patch(t,o),e.applyData(t,o)}function B_(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,l=a?a.length:t.children.length;let c=-1;const u=[];for(;++c<l;){const p=t.children[c],f={},m=a?a[c]:void 0;m&&(f.align=m);let y={type:"element",tagName:o,properties:f,children:[]};p&&(y.children=e.all(p),e.patch(p,y),y=e.applyData(p,y)),u.push(y)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function U_(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const Nf=9,Ef=32;function W_(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),s=0;const o=[];for(;r;)o.push(zf(t.slice(s,r.index),s>0,!0),r[0]),s=r.index+r[0].length,r=n.exec(t);return o.push(zf(t.slice(s),s>0,!1)),o.join("")}function zf(e,t,n){let r=0,s=e.length;if(t){let o=e.codePointAt(r);for(;o===Nf||o===Ef;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(s-1);for(;o===Nf||o===Ef;)s--,o=e.codePointAt(s-1)}return s>r?e.slice(r,s):""}function V_(e,t){const n={type:"text",value:W_(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function H_(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const q_={blockquote:k_,break:j_,code:w_,delete:__,emphasis:S_,footnoteReference:C_,heading:N_,html:E_,imageReference:z_,image:T_,inlineCode:P_,linkReference:L_,link:R_,listItem:A_,list:M_,paragraph:O_,root:D_,strong:$_,table:F_,tableCell:U_,tableRow:B_,text:V_,thematicBreak:H_,toml:qs,yaml:qs,definition:qs,footnoteDefinition:qs};function qs(){}const Hx=-1,fa=0,Ui=1,Fo=2,Uu=3,Wu=4,Vu=5,Hu=6,qx=7,Jx=8,Tf=typeof self=="object"?self:globalThis,J_=(e,t)=>{const n=(s,o)=>(e.set(o,s),s),r=s=>{if(e.has(s))return e.get(s);const[o,a]=t[s];switch(o){case fa:case Hx:return n(a,s);case Ui:{const l=n([],s);for(const c of a)l.push(r(c));return l}case Fo:{const l=n({},s);for(const[c,u]of a)l[r(c)]=r(u);return l}case Uu:return n(new Date(a),s);case Wu:{const{source:l,flags:c}=a;return n(new RegExp(l,c),s)}case Vu:{const l=n(new Map,s);for(const[c,u]of a)l.set(r(c),r(u));return l}case Hu:{const l=n(new Set,s);for(const c of a)l.add(r(c));return l}case qx:{const{name:l,message:c}=a;return n(new Tf[l](c),s)}case Jx:return n(BigInt(a),s);case"BigInt":return n(Object(BigInt(a)),s);case"ArrayBuffer":return n(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:l}=new Uint8Array(a);return n(new DataView(l),a)}}return n(new Tf[o](a),s)};return r},Pf=e=>J_(new Map,e)(0),wr="",{toString:K_}={},{keys:G_}=Object,ji=e=>{const t=typeof e;if(t!=="object"||!e)return[fa,t];const n=K_.call(e).slice(8,-1);switch(n){case"Array":return[Ui,wr];case"Object":return[Fo,wr];case"Date":return[Uu,wr];case"RegExp":return[Wu,wr];case"Map":return[Vu,wr];case"Set":return[Hu,wr];case"DataView":return[Ui,n]}return n.includes("Array")?[Ui,n]:n.includes("Error")?[qx,n]:[Fo,n]},Js=([e,t])=>e===fa&&(t==="function"||t==="symbol"),Q_=(e,t,n,r)=>{const s=(a,l)=>{const c=r.push(a)-1;return n.set(l,c),c},o=a=>{if(n.has(a))return n.get(a);let[l,c]=ji(a);switch(l){case fa:{let d=a;switch(c){case"bigint":l=Jx,d=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);d=null;break;case"undefined":return s([Hx],a)}return s([l,d],a)}case Ui:{if(c){let f=a;return c==="DataView"?f=new Uint8Array(a.buffer):c==="ArrayBuffer"&&(f=new Uint8Array(a)),s([c,[...f]],a)}const d=[],p=s([l,d],a);for(const f of a)d.push(o(f));return p}case Fo:{if(c)switch(c){case"BigInt":return s([c,a.toString()],a);case"Boolean":case"Number":case"String":return s([c,a.valueOf()],a)}if(t&&"toJSON"in a)return o(a.toJSON());const d=[],p=s([l,d],a);for(const f of G_(a))(e||!Js(ji(a[f])))&&d.push([o(f),o(a[f])]);return p}case Uu:return s([l,a.toISOString()],a);case Wu:{const{source:d,flags:p}=a;return s([l,{source:d,flags:p}],a)}case Vu:{const d=[],p=s([l,d],a);for(const[f,m]of a)(e||!(Js(ji(f))||Js(ji(m))))&&d.push([o(f),o(m)]);return p}case Hu:{const d=[],p=s([l,d],a);for(const f of a)(e||!Js(ji(f)))&&d.push(o(f));return p}}const{message:u}=a;return s([l,{name:c,message:u}],a)};return o},Lf=(e,{json:t,lossy:n}={})=>{const r=[];return Q_(!(t||n),!!t,new Map,r)(e),r},Bo=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Pf(Lf(e,t)):structuredClone(e):(e,t)=>Pf(Lf(e,t));function Y_(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function X_(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function Z_(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||Y_,r=e.options.footnoteBackLabel||X_,s=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let c=-1;for(;++c<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[c]);if(!u)continue;const d=e.all(u),p=String(u.identifier).toUpperCase(),f=li(p.toLowerCase());let m=0;const y=[],j=e.footnoteCounts.get(p);for(;j!==void 0&&++m<=j;){y.length>0&&y.push({type:"text",value:" "});let g=typeof n=="string"?n:n(c,m);typeof g=="string"&&(g={type:"text",value:g}),y.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(m>1?"-"+m:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,m),className:["data-footnote-backref"]},children:Array.isArray(g)?g:[g]})}const N=d[d.length-1];if(N&&N.type==="element"&&N.tagName==="p"){const g=N.children[N.children.length-1];g&&g.type==="text"?g.value+=" ":N.children.push({type:"text",value:" "}),N.children.push(...y)}else d.push(...y);const v={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(u,v),l.push(v)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...Bo(a),id:"footnote-label"},children:[{type:"text",value:s}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const Kx=function(e){if(e==null)return rS;if(typeof e=="function")return ma(e);if(typeof e=="object")return Array.isArray(e)?eS(e):tS(e);if(typeof e=="string")return nS(e);throw new Error("Expected function, string, or object as test")};function eS(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Kx(e[n]);return ma(r);function r(...s){let o=-1;for(;++o<t.length;)if(t[o].apply(this,s))return!0;return!1}}function tS(e){const t=e;return ma(n);function n(r){const s=r;let o;for(o in e)if(s[o]!==t[o])return!1;return!0}}function nS(e){return ma(t);function t(n){return n&&n.type===e}}function ma(e){return t;function t(n,r,s){return!!(iS(n)&&e.call(this,n,typeof r=="number"?r:void 0,s||void 0))}}function rS(){return!0}function iS(e){return e!==null&&typeof e=="object"&&"type"in e}const Gx=[],sS=!0,Rf=!1,oS="skip";function aS(e,t,n,r){let s;typeof t=="function"&&typeof n!="function"?(r=n,n=t):s=t;const o=Kx(s),a=r?-1:1;l(e,void 0,[])();function l(c,u,d){const p=c&&typeof c=="object"?c:{};if(typeof p.type=="string"){const m=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(c.type+(m?"<"+m+">":""))+")"})}return f;function f(){let m=Gx,y,j,N;if((!t||o(c,u,d[d.length-1]||void 0))&&(m=lS(n(c,d)),m[0]===Rf))return m;if("children"in c&&c.children){const v=c;if(v.children&&m[0]!==oS)for(j=(r?v.children.length:-1)+a,N=d.concat(v);j>-1&&j<v.children.length;){const g=v.children[j];if(y=l(g,j,N)(),y[0]===Rf)return y;j=typeof y[1]=="number"?y[1]:j+a}}return m}}}function lS(e){return Array.isArray(e)?e:typeof e=="number"?[sS,e]:e==null?Gx:[e]}function Qx(e,t,n,r){let s,o,a;typeof t=="function"&&typeof n!="function"?(o=void 0,a=t,s=n):(o=t,a=n,s=r),aS(e,o,l,s);function l(c,u){const d=u[u.length-1],p=d?d.children.indexOf(c):void 0;return a(c,p,d)}}const jc={}.hasOwnProperty,cS={};function uS(e,t){const n=t||cS,r=new Map,s=new Map,o=new Map,a={...q_,...n.handlers},l={all:u,applyData:pS,definitionById:r,footnoteById:s,footnoteCounts:o,footnoteOrder:[],handlers:a,one:c,options:n,patch:dS,wrap:mS};return Qx(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:s,f=String(d.identifier).toUpperCase();p.has(f)||p.set(f,d)}}),l;function c(d,p){const f=d.type,m=l.handlers[f];if(jc.call(l.handlers,f)&&m)return m(l,d,p);if(l.options.passThrough&&l.options.passThrough.includes(f)){if("children"in d){const{children:j,...N}=d,v=Bo(N);return v.children=l.all(d),v}return Bo(d)}return(l.options.unknownHandler||fS)(l,d,p)}function u(d){const p=[];if("children"in d){const f=d.children;let m=-1;for(;++m<f.length;){const y=l.one(f[m],d);if(y){if(m&&f[m-1].type==="break"&&(!Array.isArray(y)&&y.type==="text"&&(y.value=Af(y.value)),!Array.isArray(y)&&y.type==="element")){const j=y.children[0];j&&j.type==="text"&&(j.value=Af(j.value))}Array.isArray(y)?p.push(...y):p.push(y)}}}return p}}function dS(e,t){e.position&&(t.position=Kj(e))}function pS(e,t){let n=t;if(e&&e.data){const r=e.data.hName,s=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&o&&Object.assign(n.properties,Bo(o)),"children"in n&&n.children&&s!==null&&s!==void 0&&(n.children=s)}return n}function fS(e,t){const n=t.data||{},r="value"in t&&!(jc.call(n,"hProperties")||jc.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function mS(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Af(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function If(e,t){const n=uS(e,t),r=n.one(e,void 0),s=Z_(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return s&&o.children.push({type:"text",value:`
`},s),o}function hS(e,t){return e&&"run"in e?async function(n,r){const s=If(n,{file:r,...t});await e.run(s,r)}:function(n,r){return If(n,{file:r,...e||t})}}function Mf(e){if(e)throw e}var co=Object.prototype.hasOwnProperty,Yx=Object.prototype.toString,Of=Object.defineProperty,Df=Object.getOwnPropertyDescriptor,$f=function(t){return typeof Array.isArray=="function"?Array.isArray(t):Yx.call(t)==="[object Array]"},Ff=function(t){if(!t||Yx.call(t)!=="[object Object]")return!1;var n=co.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&co.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var s;for(s in t);return typeof s>"u"||co.call(t,s)},Bf=function(t,n){Of&&n.name==="__proto__"?Of(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Uf=function(t,n){if(n==="__proto__")if(co.call(t,n)){if(Df)return Df(t,n).value}else return;return t[n]},gS=function e(){var t,n,r,s,o,a,l=arguments[0],c=1,u=arguments.length,d=!1;for(typeof l=="boolean"&&(d=l,l=arguments[1]||{},c=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});c<u;++c)if(t=arguments[c],t!=null)for(n in t)r=Uf(l,n),s=Uf(t,n),l!==s&&(d&&s&&(Ff(s)||(o=$f(s)))?(o?(o=!1,a=r&&$f(r)?r:[]):a=r&&Ff(r)?r:{},Bf(l,{name:n,newValue:e(d,a,s)})):typeof s<"u"&&Bf(l,{name:n,newValue:s}));return l};const nl=Vo(gS);function wc(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function xS(){const e=[],t={run:n,use:r};return t;function n(...s){let o=-1;const a=s.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);l(null,...s);function l(c,...u){const d=e[++o];let p=-1;if(c){a(c);return}for(;++p<s.length;)(u[p]===null||u[p]===void 0)&&(u[p]=s[p]);s=u,d?yS(d,l)(...u):a(null,...u)}}function r(s){if(typeof s!="function")throw new TypeError("Expected `middelware` to be a function, not "+s);return e.push(s),t}}function yS(e,t){let n;return r;function r(...a){const l=e.length>a.length;let c;l&&a.push(s);try{c=e.apply(this,a)}catch(u){const d=u;if(l&&n)throw d;return s(d)}l||(c&&c.then&&typeof c.then=="function"?c.then(o,s):c instanceof Error?s(c):o(c))}function s(a,...l){n||(n=!0,t(a,...l))}function o(a){s(null,a)}}const cn={basename:vS,dirname:bS,extname:kS,join:jS,sep:"/"};function vS(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');_s(e);let n=0,r=-1,s=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;s--;)if(e.codePointAt(s)===47){if(o){n=s+1;break}}else r<0&&(o=!0,r=s+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let a=-1,l=t.length-1;for(;s--;)if(e.codePointAt(s)===47){if(o){n=s+1;break}}else a<0&&(o=!0,a=s+1),l>-1&&(e.codePointAt(s)===t.codePointAt(l--)?l<0&&(r=s):(l=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function bS(e){if(_s(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function kS(e){_s(e);let t=e.length,n=-1,r=0,s=-1,o=0,a;for(;t--;){const l=e.codePointAt(t);if(l===47){if(a){r=t+1;break}continue}n<0&&(a=!0,n=t+1),l===46?s<0?s=t:o!==1&&(o=1):s>-1&&(o=-1)}return s<0||n<0||o===0||o===1&&s===n-1&&s===r+1?"":e.slice(s,n)}function jS(...e){let t=-1,n;for(;++t<e.length;)_s(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":wS(n)}function wS(e){_s(e);const t=e.codePointAt(0)===47;let n=_S(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function _S(e,t){let n="",r=0,s=-1,o=0,a=-1,l,c;for(;++a<=e.length;){if(a<e.length)l=e.codePointAt(a);else{if(l===47)break;l=47}if(l===47){if(!(s===a-1||o===1))if(s!==a-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),s=a,o=0;continue}}else if(n.length>0){n="",r=0,s=a,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(s+1,a):n=e.slice(s+1,a),r=a-s-1;s=a,o=0}else l===46&&o>-1?o++:o=-1}return n}function _s(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const SS={cwd:CS};function CS(){return"/"}function _c(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function NS(e){if(typeof e=="string")e=new URL(e);else if(!_c(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return ES(e)}function ES(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const s=new TypeError("File URL path must not include encoded / characters");throw s.code="ERR_INVALID_FILE_URL_PATH",s}}return decodeURIComponent(t)}const rl=["history","path","basename","stem","extname","dirname"];class Xx{constructor(t){let n;t?_c(t)?n={path:t}:typeof t=="string"||zS(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":SS.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<rl.length;){const o=rl[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let s;for(s in n)rl.includes(s)||(this[s]=n[s])}get basename(){return typeof this.path=="string"?cn.basename(this.path):void 0}set basename(t){sl(t,"basename"),il(t,"basename"),this.path=cn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?cn.dirname(this.path):void 0}set dirname(t){Wf(this.basename,"dirname"),this.path=cn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?cn.extname(this.path):void 0}set extname(t){if(il(t,"extname"),Wf(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=cn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){_c(t)&&(t=NS(t)),sl(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?cn.basename(this.path,this.extname):void 0}set stem(t){sl(t,"stem"),il(t,"stem"),this.path=cn.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const s=this.message(t,n,r);throw s.fatal=!0,s}info(t,n,r){const s=this.message(t,n,r);return s.fatal=void 0,s}message(t,n,r){const s=new dt(t,n,r);return this.path&&(s.name=this.path+":"+s.name,s.file=this.path),s.fatal=!1,this.messages.push(s),s}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function il(e,t){if(e&&e.includes(cn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+cn.sep+"`")}function sl(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Wf(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function zS(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const TS=function(e){const r=this.constructor.prototype,s=r[e],o=function(){return s.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},PS={}.hasOwnProperty;class qu extends TS{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=xS()}copy(){const t=new qu;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(nl(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(ll("data",this.frozen),this.namespace[t]=n,this):PS.call(this.namespace,t)&&this.namespace[t]||void 0:t?(ll("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const s=n.call(t,...r);typeof s=="function"&&this.transformers.use(s)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Ks(t),r=this.parser||this.Parser;return ol("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),ol("process",this.parser||this.Parser),al("process",this.compiler||this.Compiler),n?s(void 0,n):new Promise(s);function s(o,a){const l=Ks(t),c=r.parse(l);r.run(c,l,function(d,p,f){if(d||!p||!f)return u(d);const m=p,y=r.stringify(m,f);AS(y)?f.value=y:f.result=y,u(d,f)});function u(d,p){d||!p?a(d):o?o(p):n(void 0,p)}}}processSync(t){let n=!1,r;return this.freeze(),ol("processSync",this.parser||this.Parser),al("processSync",this.compiler||this.Compiler),this.process(t,s),Hf("processSync","process",n),r;function s(o,a){n=!0,Mf(o),r=a}}run(t,n,r){Vf(t),this.freeze();const s=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(a,l){const c=Ks(n);s.run(t,c,u);function u(d,p,f){const m=p||t;d?l(d):a?a(m):r(void 0,m,f)}}}runSync(t,n){let r=!1,s;return this.run(t,n,o),Hf("runSync","run",r),s;function o(a,l){Mf(a),s=l,r=!0}}stringify(t,n){this.freeze();const r=Ks(n),s=this.compiler||this.Compiler;return al("stringify",s),Vf(t),s(t,r)}use(t,...n){const r=this.attachers,s=this.namespace;if(ll("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(u){if(typeof u=="function")c(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...p]=u;c(d,p)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(s.settings=nl(!0,s.settings,u.settings))}function l(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const p=u[d];o(p)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function c(u,d){let p=-1,f=-1;for(;++p<r.length;)if(r[p][0]===u){f=p;break}if(f===-1)r.push([u,...d]);else if(d.length>0){let[m,...y]=d;const j=r[f][1];wc(j)&&wc(m)&&(m=nl(!0,j,m)),r[f]=[u,m,...y]}}}}const LS=new qu().freeze();function ol(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function al(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function ll(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Vf(e){if(!wc(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Hf(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Ks(e){return RS(e)?e:new Xx(e)}function RS(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function AS(e){return typeof e=="string"||IS(e)}function IS(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const MS="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",qf=[],Jf={allowDangerousHtml:!0},OS=/^(https?|ircs?|mailto|xmpp)$/i,DS=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Zx(e){const t=$S(e),n=FS(e);return BS(t.runSync(t.parse(n),n),e)}function $S(e){const t=e.rehypePlugins||qf,n=e.remarkPlugins||qf,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Jf}:Jf;return LS().use(b_).use(n).use(hS,r).use(t)}function FS(e){const t=e.children||"",n=new Xx;return typeof t=="string"&&(n.value=t),n}function BS(e,t){const n=t.allowedElements,r=t.allowElement,s=t.components,o=t.disallowedElements,a=t.skipHtml,l=t.unwrapDisallowed,c=t.urlTransform||US;for(const d of DS)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+MS+d.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),Qx(e,u),Zj(e,{Fragment:i.Fragment,components:s,ignoreInvalidStyle:!0,jsx:i.jsx,jsxs:i.jsxs,passKeys:!0,passNode:!0});function u(d,p,f){if(d.type==="raw"&&f&&typeof p=="number")return a?f.children.splice(p,1):f.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let m;for(m in Za)if(Object.hasOwn(Za,m)&&Object.hasOwn(d.properties,m)){const y=d.properties[m],j=Za[m];(j===null||j.includes(d.tagName))&&(d.properties[m]=c(String(y||""),m,d))}}if(d.type==="element"){let m=n?!n.includes(d.tagName):o?o.includes(d.tagName):!1;if(!m&&r&&typeof p=="number"&&(m=!r(d,p,f)),m&&f&&typeof p=="number")return l&&d.children?f.children.splice(p,1,...d.children):f.children.splice(p,1),p}}}function US(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),s=e.indexOf("/");return t===-1||s!==-1&&t>s||n!==-1&&t>n||r!==-1&&t>r||OS.test(e.slice(0,t))?e:""}function WS({value:e,onChange:t,placeholder:n="Write your content here...",minHeight:r=200}){const[s,o]=b.useState(!1),[a,l]=b.useState(r),c=b.useRef(null),u=b.useRef(null);b.useEffect(()=>{if(e){const f=e.split(`
`).length,m=Math.max(r,Math.min(f*20+40,500));l(m)}},[e,r]),b.useEffect(()=>{s&&u.current&&u.current.focus()},[s]);function d(f){u.current=f,f.focus()}function p(f){c.current&&!c.current.contains(f.target)&&o(!1)}return b.useEffect(()=>{if(s)return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[s]),i.jsxs("div",{ref:c,className:"markdown-editor",children:[i.jsx("style",{children:`
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
      `}),s?i.jsx("div",{className:"monaco-wrapper",children:i.jsx(Wt,{height:"100%",language:"markdown",theme:"vs-dark",value:e,onChange:f=>t(f||""),onMount:d,options:{minimap:{enabled:!1},fontSize:14,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"off",scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",padding:{top:12,bottom:12},lineDecorationsWidth:8,folding:!1,glyphMargin:!1,renderLineHighlight:"none",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,scrollbar:{vertical:"auto",horizontal:"hidden"}}})}):i.jsxs("div",{className:"markdown-preview",onClick:()=>o(!0),children:[i.jsxs("span",{className:"edit-hint",children:[i.jsx(L0,{size:12}),"Click to edit"]}),e?i.jsx("div",{className:"markdown-content",children:i.jsx(Zx,{children:e})}):i.jsx("div",{className:"markdown-placeholder",children:n})]})]})}function VS(e){return/^[a-zA-Z0-9_]+$/.test(e)}function HS({agent:e}){const{project:t,updateAgent:n,mcpServers:r,builtinTools:s,setActiveTab:o,setRunAgentId:a}=ut(),[l,c]=b.useState(new Set(["basic","model","tools","subagents"])),[u,d]=b.useState(!1),[p,f]=b.useState(!1),[m,y]=b.useState(!1),[j,N]=b.useState(""),[v,g]=b.useState(null);if(!t)return null;function x(E){n(e.id,E)}function T(E){if(E===""){g(null),x({name:E});return}VS(E)?g(null):g("Name can only contain letters, numbers, and underscores"),e.type==="LlmAgent"?x({name:E,output_key:E}):x({name:E})}function z(E){const O=new Set(l);O.has(E)?O.delete(E):O.add(E),c(O)}const w=e.type==="LlmAgent",P=e;function _(E){w&&x({tools:[...P.tools,E]})}function D(E){w&&x({tools:P.tools.filter((O,I)=>I!==E)})}function S(E,O){if(!w)return;const I=[...P.tools];I[E]=O,x({tools:I})}function R(E){"sub_agents"in e&&x({sub_agents:[...e.sub_agents,E]})}function L(E){"sub_agents"in e&&x({sub_agents:e.sub_agents.filter(O=>O!==E)})}const W=t.agents.filter(E=>E.id!==e.id);async function U(){if(!(!t||!w)){d(!0);try{const E=P.instruction||"",O=E?`Current instruction to improve:

${E}

Please improve and expand this instruction while preserving its core intent.`:void 0,k=t.agents.some(Q=>Q.id===e.id)?void 0:e,V=await ao(t.id,e.id,O,k);V.success&&V.prompt?x({instruction:V.prompt}):alert("Failed to generate prompt: "+(V.error||"Unknown error"))}catch(E){alert("Error generating prompt: "+E.message)}finally{d(!1)}}}async function $(){if(!(!t||!w||!j.trim())){d(!0);try{const O=`Current instruction:

${P.instruction||""}

---

Requested changes:
${j}

Please apply the requested changes to the instruction above. Output only the updated instruction, nothing else.`,k=t.agents.some(Q=>Q.id===e.id)?void 0:e,V=await ao(t.id,e.id,O,k);V.success&&V.prompt?(x({instruction:V.prompt}),y(!1),N("")):alert("Failed to apply changes: "+(V.error||"Unknown error"))}catch(E){alert("Error applying changes: "+E.message)}finally{d(!1)}}}async function Z(){if(!t||!w)return;const E=P.instruction;if(!E){alert("Please write an instruction first");return}f(!0);try{const O=`Write a 5-10 word description of what this agent does.

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
${E.slice(0,500)}

Your response (5-10 words only):`,I=await ao(t.id,e.id,O);if(I.success&&I.prompt){let k=I.prompt.trim();k=k.replace(/^["']|["']$/g,"").trim();const V=k.split(/[.!?\n]/)[0].trim(),Q=V.length>80?V.slice(0,77)+"...":V;x({description:Q})}else alert("Failed to generate description: "+(I.error||"Unknown error"))}catch(O){alert("Error generating description: "+O.message)}finally{f(!1)}}return i.jsxs("div",{className:"agent-editor",children:[i.jsx("style",{children:`
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
      `}),i.jsxs("div",{className:"editor-header",children:[i.jsx(pr,{size:24,style:{color:"var(--accent-primary)"}}),i.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[i.jsx("input",{type:"text",value:e.name,onChange:E=>T(E.target.value),placeholder:"Agent name",style:{borderColor:v?"var(--error)":void 0}}),v&&i.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:v})]}),i.jsx("span",{className:"badge badge-info",children:e.type}),i.jsxs("button",{className:"btn btn-primary btn-sm run-agent-btn",onClick:()=>{a(e.id),o("run")},title:"Test this agent",children:[i.jsx(Yn,{size:14}),"Run"]})]}),i.jsxs("div",{className:"editor-content",children:[i.jsxs(wi,{id:"basic",title:"Basic Info",icon:i.jsx(pr,{size:16}),expanded:l.has("basic"),onToggle:()=>z("basic"),children:[i.jsx("div",{className:"form-row",children:i.jsxs("div",{className:"form-group full-width",children:[i.jsxs("div",{className:"label-with-action",children:[i.jsx("label",{children:"Description"}),w&&P.instruction&&i.jsx("button",{className:"btn btn-secondary btn-sm generate-btn",onClick:Z,disabled:p,title:"Generate description from instruction",children:p?i.jsxs(i.Fragment,{children:[i.jsx($n,{size:14,className:"spin"}),"Summarizing..."]}):"Summarize"})]}),i.jsx("input",{type:"text",value:e.description,onChange:E=>x({description:E.target.value}),placeholder:"e.g., Reviews code for bugs and suggests fixes"})]})}),w&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"form-row",children:i.jsxs("div",{className:"form-group full-width",children:[i.jsxs("div",{className:"label-with-action",children:[i.jsx("label",{children:"Instruction"}),i.jsxs("div",{className:"action-buttons",children:[i.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>y(!m),disabled:u||!P.instruction,title:"Request specific changes to the instruction",children:"Request Changes"}),i.jsx("button",{className:"btn btn-secondary btn-sm",onClick:U,disabled:u,title:"Uses AI to improve and expand the current instruction",children:u?i.jsxs(i.Fragment,{children:[i.jsx($n,{size:14,className:"spin"}),"Working..."]}):"Auto-Improve"})]})]}),m&&i.jsxs("div",{className:"request-changes-box",children:[i.jsx("input",{type:"text",value:j,onChange:E=>N(E.target.value),placeholder:"Describe what changes you want...",onKeyDown:E=>{E.key==="Enter"&&j.trim()?$():E.key==="Escape"&&(y(!1),N(""))},autoFocus:!0}),i.jsx("button",{className:"btn btn-primary btn-sm",onClick:$,disabled:u||!j.trim(),children:"Apply"})]}),i.jsx(WS,{value:P.instruction,onChange:E=>x({instruction:E}),placeholder:"Write your agent's instruction here... (Markdown supported)",minHeight:200})]})}),i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Output Key"}),i.jsxs("select",{value:P.output_key||"",onChange:E=>x({output_key:E.target.value||void 0}),children:[i.jsx("option",{value:"",children:"None"}),t.app.state_keys.map(E=>i.jsx("option",{value:E.name,children:E.name},E.name))]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Include Contents"}),i.jsxs("select",{value:P.include_contents,onChange:E=>x({include_contents:E.target.value}),children:[i.jsx("option",{value:"default",children:"Default"}),i.jsx("option",{value:"none",children:"None"})]})]})]}),i.jsxs("div",{className:"form-row",style:{gap:24},children:[i.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[i.jsxs("span",{className:"toggle-switch",children:[i.jsx("input",{type:"checkbox",checked:P.disallow_transfer_to_parent,onChange:E=>x({disallow_transfer_to_parent:E.target.checked})}),i.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to parent"]}),i.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[i.jsxs("span",{className:"toggle-switch",children:[i.jsx("input",{type:"checkbox",checked:P.disallow_transfer_to_peers,onChange:E=>x({disallow_transfer_to_peers:E.target.checked})}),i.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to peers"]})]})]}),e.type==="LoopAgent"&&i.jsx("div",{className:"form-row",children:i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Max Iterations"}),i.jsx("input",{type:"number",value:e.max_iterations||"",onChange:E=>x({max_iterations:parseInt(E.target.value)||void 0}),placeholder:"No limit"})]})})]}),w&&i.jsx(wi,{id:"model",title:"Model",icon:i.jsx(Cu,{size:16}),expanded:l.has("model"),onToggle:()=>z("model"),children:i.jsx(JS,{agent:P,appModels:t.app.models||[],defaultModelId:t.app.default_model_id,projectId:t.id,onUpdate:E=>x({model:E})})}),w&&i.jsx(wi,{id:"tools",title:`Tools (${P.tools.length})`,icon:i.jsx(tn,{size:16}),expanded:l.has("tools"),onToggle:()=>z("tools"),children:i.jsx(qS,{tools:P.tools,onAdd:_,onRemove:D,onUpdate:S,builtinTools:s,mcpServers:r,projectMcpServers:t.mcp_servers,customTools:t.custom_tools,agents:W,skillsets:t.skillsets||[]})}),"sub_agents"in e&&i.jsx(wi,{id:"subagents",title:`Sub-Agents (${e.sub_agents.length})`,icon:i.jsx(ox,{size:16}),expanded:l.has("subagents"),onToggle:()=>z("subagents"),children:i.jsxs("div",{className:"sub-agent-list",children:[e.sub_agents.map(E=>{const O=t.agents.find(I=>I.id===E);return O?i.jsxs("div",{className:"sub-agent-chip",children:[O.name,i.jsx("button",{onClick:()=>L(E),children:i.jsx(Fe,{size:12})})]},E):null}),i.jsxs("select",{value:"",onChange:E=>{E.target.value&&R(E.target.value)},style:{width:150,padding:"6px 10px",fontSize:13},children:[i.jsx("option",{value:"",children:"Add agent..."}),W.filter(E=>!e.sub_agents.includes(E.id)).map(E=>i.jsx("option",{value:E.id,children:E.name},E.id))]})]})}),i.jsx(wi,{id:"callbacks",title:"Callbacks",icon:i.jsx(hn,{size:16}),expanded:l.has("callbacks"),onToggle:()=>z("callbacks"),children:i.jsx(KS,{agent:e,onUpdate:x,customCallbacks:t.custom_callbacks||[],isLlmAgent:w})})]})]})}function wi({id:e,title:t,icon:n,expanded:r,onToggle:s,children:o}){return i.jsxs("div",{className:"section",children:[i.jsxs("div",{className:"section-header",onClick:s,children:[r?i.jsx(Et,{size:16}):i.jsx(zt,{size:16}),i.jsxs("h4",{children:[n," ",t]})]}),r&&i.jsx("div",{className:"section-content",children:o})]})}function qS({tools:e,onAdd:t,onRemove:n,onUpdate:r,builtinTools:s,mcpServers:o,projectMcpServers:a,customTools:l,agents:c,skillsets:u}){const[d,p]=b.useState(!1),[f,m]=b.useState({}),[y,j]=b.useState(""),N=Rt.useRef(null),v=Rt.useRef(null),[g,x]=b.useState(null),[T,z]=b.useState(new Set),w=(C,G)=>{if(!y.trim())return!0;const xe=y.toLowerCase();return C.toLowerCase().includes(xe)||((G==null?void 0:G.toLowerCase().includes(xe))??!1)},P=s.filter(C=>w(C.name,C.description)),_=o.filter(C=>w(C.name,C.description)),D=a.filter(C=>w(C.name,C.description)),S=l.filter(C=>w(C.name,C.description)),R=c.filter(C=>w(C.name,C.description)),L=u.filter(C=>w(C.name,C.description));function W(){if(N.current){const C=N.current.getBoundingClientRect(),G=window.innerHeight,xe=350,ye=G-C.bottom-16,H=C.top-16;if(ye>=200||ye>=H){const A=Math.min(xe,ye);m({top:C.bottom+4,left:C.left,maxHeight:A})}else{const A=Math.min(xe,H);m({top:C.top-A-4,left:C.left,maxHeight:A})}}p(!0),j(""),setTimeout(()=>{var C;return(C=v.current)==null?void 0:C.focus()},50)}function U(){p(!1),j("")}function $(C){t({type:"builtin",name:C}),U()}async function Z(C){U();const G=C.tool_filter||[];if(x({server:C,enabledTools:new Set(G),availableTools:G.map(xe=>({name:xe,description:""})),isLoading:G.length===0,error:void 0}),G.length===0)try{const{testMcpServer:xe}=await K0(async()=>{const{testMcpServer:H}=await Promise.resolve().then(()=>y0);return{testMcpServer:H}},void 0),ye=await xe({connection_type:C.connection_type,command:C.command,args:C.args,env:C.env,url:C.url,headers:C.headers,timeout:C.timeout||30});ye.success?x(H=>H?{...H,availableTools:ye.tools,enabledTools:new Set(ye.tools.map(A=>A.name)),isLoading:!1}:null):x(H=>H?{...H,isLoading:!1,error:ye.error||"Failed to connect to MCP server"}:null)}catch(xe){x(ye=>ye?{...ye,isLoading:!1,error:xe.message}:null)}}function E(C){if(!g)return;const G=new Set(g.enabledTools);G.has(C)?G.delete(C):G.add(C),x({...g,enabledTools:G})}function O(){if(!g)return;const C=Array.from(g.enabledTools);t({type:"mcp",server:{...g.server,tool_filter:C}}),x(null)}function I(C){const G=new Set(T);G.has(C)?G.delete(C):G.add(C),z(G)}function k(C,G){const xe=e[C];if(xe.type!=="mcp"||!xe.server)return;const ye=xe.server.tool_filter||[];let H;ye.includes(G)?H=ye.filter(A=>A!==G):H=[...ye,G],r(C,{...xe,server:{...xe.server,tool_filter:H}})}function V(C){t({type:"function",name:C.name,module_path:C.module_path}),U()}function Q(C){const G=c.find(xe=>xe.id===C);t({type:"agent",agent_id:C,name:G==null?void 0:G.name}),U()}function h(C){const G=u.find(xe=>xe.id===C);t({type:"skillset",skillset_id:C,name:G==null?void 0:G.name}),U()}function B(C){return o.find(G=>G.name===C)}return i.jsxs("div",{children:[i.jsx("style",{children:`
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
      `}),i.jsx("div",{className:"tool-list",children:e.map((C,G)=>{var xe;return C.type==="mcp"&&C.server?i.jsxs("div",{className:"mcp-tool-item",children:[i.jsxs("div",{className:"mcp-tool-header",onClick:()=>I(G),children:[T.has(G)?i.jsx(Et,{size:14}):i.jsx(zt,{size:14}),i.jsx(tn,{size:14,style:{color:"var(--accent-primary)"}}),i.jsxs("div",{className:"mcp-tool-info",children:[i.jsx("div",{className:"mcp-tool-name",children:C.server.name}),i.jsx("div",{className:"mcp-tool-count",children:C.server.tool_filter===null||C.server.tool_filter===void 0?"all tools":`${C.server.tool_filter.length} tools enabled`})]}),i.jsx("button",{className:"delete-btn",onClick:ye=>{ye.stopPropagation(),n(G)},children:i.jsx(Fe,{size:14})})]}),T.has(G)&&i.jsx("div",{className:"mcp-tool-body",children:i.jsx("div",{className:"mcp-tool-list",children:(()=>{const ye=B(C.server.name),H=(ye==null?void 0:ye.tool_filter)||C.server.tool_filter||[],A=new Set(C.server.tool_filter||[]);return H.map(q=>i.jsxs("label",{className:`mcp-tool-chip ${A.has(q)?"enabled":"disabled"}`,onClick:()=>k(G,q),children:[i.jsx("input",{type:"checkbox",checked:A.has(q),onChange:()=>{},style:{display:"none"}}),q]},q))})()})})]},G):C.type==="skillset"?i.jsxs("div",{className:"tool-item",children:[i.jsx(wn,{size:14,style:{color:"var(--accent)"}}),i.jsxs("div",{className:"tool-item-info",children:[i.jsx("div",{className:"tool-item-name",children:C.name||((xe=u.find(ye=>ye.id===C.skillset_id))==null?void 0:xe.name)||"SkillSet"}),i.jsx("div",{className:"tool-item-type",children:"skillset"})]}),i.jsx("button",{className:"delete-btn",onClick:()=>n(G),children:i.jsx(Fe,{size:14})})]},G):i.jsxs("div",{className:"tool-item",children:[i.jsx(tn,{size:14,style:{color:"var(--accent-primary)"}}),i.jsxs("div",{className:"tool-item-info",children:[i.jsx("div",{className:"tool-item-name",children:C.name||C.agent_id}),i.jsx("div",{className:"tool-item-type",children:C.type})]}),i.jsx("button",{className:"delete-btn",onClick:()=>n(G),children:i.jsx(Fe,{size:14})})]},G)})}),i.jsxs("div",{className:"add-tool-dropdown",style:{marginTop:12},children:[i.jsxs("button",{ref:N,className:"btn btn-secondary btn-sm",onClick:()=>d?U():W(),children:[i.jsx(Ke,{size:14}),"Add Tool"]}),d&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"dropdown-backdrop",onClick:U}),i.jsxs("div",{className:"dropdown-content dropdown-fixed",style:f,children:[i.jsx("div",{className:"dropdown-search",children:i.jsx("input",{ref:v,type:"text",placeholder:"Search tools...",value:y,onChange:C=>j(C.target.value),onKeyDown:C=>C.key==="Escape"&&U()})}),P.length>0&&i.jsxs("div",{className:"dropdown-section",children:[i.jsx("h5",{children:"Built-in Tools"}),P.map(C=>i.jsxs("button",{className:"dropdown-item",onClick:()=>$(C.name),children:[i.jsx("div",{className:"dropdown-item-name",children:C.name}),i.jsx("div",{className:"dropdown-item-desc",children:C.description})]},C.name))]}),_.length>0&&i.jsxs("div",{className:"dropdown-section",children:[i.jsxs("h5",{children:["Known MCP Servers (",_.length,")"]}),_.map(C=>i.jsxs("button",{className:"dropdown-item",onClick:()=>Z(C),children:[i.jsxs("div",{className:"dropdown-item-name",children:[C.name,i.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:C.tool_filter===null||C.tool_filter===void 0?"all tools":`${C.tool_filter.length} tools`})]}),i.jsx("div",{className:"dropdown-item-desc",children:C.description})]},`known-${C.name}`))]}),D.length>0&&i.jsxs("div",{className:"dropdown-section",children:[i.jsxs("h5",{children:["Project MCP Servers (",D.length,")"]}),D.map(C=>i.jsxs("button",{className:"dropdown-item",onClick:()=>Z(C),children:[i.jsxs("div",{className:"dropdown-item-name",children:[C.name,i.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:C.tool_filter===null||C.tool_filter===void 0?"all tools":`${C.tool_filter.length} tools`})]}),i.jsx("div",{className:"dropdown-item-desc",children:C.description||"Custom MCP server"})]},`project-${C.id||C.name}`))]}),S.length>0&&i.jsxs("div",{className:"dropdown-section",children:[i.jsx("h5",{children:"Custom Tools"}),S.map(C=>i.jsxs("button",{className:"dropdown-item",onClick:()=>V(C),children:[i.jsx("div",{className:"dropdown-item-name",children:C.name}),i.jsx("div",{className:"dropdown-item-desc",children:C.description})]},C.id))]}),R.length>0&&i.jsxs("div",{className:"dropdown-section",children:[i.jsx("h5",{children:"Agents as Tools"}),R.map(C=>i.jsxs("button",{className:"dropdown-item",onClick:()=>Q(C.id),children:[i.jsx("div",{className:"dropdown-item-name",children:C.name}),i.jsx("div",{className:"dropdown-item-desc",children:C.type})]},C.id))]}),L.length>0&&i.jsxs("div",{className:"dropdown-section",children:[i.jsxs("h5",{children:["SkillSets (",L.length,")"]}),L.map(C=>i.jsxs("button",{className:"dropdown-item",onClick:()=>h(C.id),children:[i.jsxs("div",{className:"dropdown-item-name",children:[C.name,i.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:[C.entry_count||0," entries"]})]}),i.jsx("div",{className:"dropdown-item-desc",children:C.description||"Vector knowledge base"})]},C.id))]}),y.trim()&&P.length===0&&_.length===0&&D.length===0&&S.length===0&&R.length===0&&L.length===0&&i.jsxs("div",{className:"dropdown-section",style:{textAlign:"center",padding:"20px",color:"var(--text-muted)"},children:['No tools matching "',y,'"']})]})]})]}),g&&i.jsx("div",{className:"mcp-config-dialog",children:i.jsxs("div",{className:"mcp-config-content",children:[i.jsxs("h3",{children:["Configure ",g.server.name]}),i.jsx("p",{children:g.server.description}),g.isLoading?i.jsxs("div",{className:"mcp-loading",children:[i.jsx("div",{className:"spinner"}),i.jsx("p",{children:"Connecting to MCP server and discovering tools..."})]}):g.error?i.jsxs("div",{className:"mcp-error",children:[i.jsxs("p",{children:["⚠️ Failed to discover tools: ",g.error]}),i.jsx("p",{className:"hint",children:"You can still add the server, but you won't be able to select specific tools."})]}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"mcp-select-actions",children:[i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>x({...g,enabledTools:new Set(g.availableTools.map(C=>C.name))}),children:["Select All (",g.availableTools.length,")"]}),i.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>x({...g,enabledTools:new Set}),children:"Select None"})]}),i.jsx("div",{className:"mcp-tools-grid",children:g.availableTools.map(C=>i.jsxs("div",{className:"mcp-tool-row",title:C.description||C.name,style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[i.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[i.jsx("input",{type:"checkbox",checked:g.enabledTools.has(C.name),onChange:()=>E(C.name)}),i.jsx("span",{className:"toggle-slider"})]}),i.jsx("span",{style:{fontSize:13,opacity:g.enabledTools.has(C.name)?1:.5,cursor:"pointer"},onClick:()=>E(C.name),children:C.name})]},C.name))})]}),i.jsxs("div",{className:"dialog-actions",children:[i.jsx("button",{className:"btn btn-secondary",onClick:()=>x(null),children:"Cancel"}),i.jsxs("button",{className:"btn btn-primary",onClick:O,disabled:g.enabledTools.size===0,children:["Add ",g.enabledTools.size," Tools"]})]})]})})]})}function JS({agent:e,appModels:t,defaultModelId:n,projectId:r,onUpdate:s}){var f,m;const o=(f=e.model)==null?void 0:f._appModelId,a=e.model!==null&&e.model!==void 0&&!o,c=o||(()=>{if(!e.model)return n;const y=t.find(j=>{var N,v,g;return j.provider===((N=e.model)==null?void 0:N.provider)&&j.model_name===((v=e.model)==null?void 0:v.model_name)&&j.api_base===((g=e.model)==null?void 0:g.api_base)});return y==null?void 0:y.id})()||n||((m=t[0])==null?void 0:m.id);Rt.useEffect(()=>{var y,j,N,v,g;if(o){const x=t.find(T=>T.id===o);x&&(((y=e.model)==null?void 0:y.provider)!==x.provider||((j=e.model)==null?void 0:j.model_name)!==x.model_name||((N=e.model)==null?void 0:N.api_base)!==x.api_base||((v=e.model)==null?void 0:v.temperature)!==x.temperature||((g=e.model)==null?void 0:g.max_output_tokens)!==x.max_output_tokens)&&s({provider:x.provider,model_name:x.model_name,api_base:x.api_base,temperature:x.temperature,max_output_tokens:x.max_output_tokens,top_p:x.top_p,top_k:x.top_k,fallbacks:[],_appModelId:o})}},[o,t,e.model,s]);function u(y){const j=t.find(N=>N.id===y);j&&s({provider:j.provider,model_name:j.model_name,api_base:j.api_base,temperature:j.temperature,max_output_tokens:j.max_output_tokens,top_p:j.top_p,top_k:j.top_k,fallbacks:[],_appModelId:y})}function d(){var y;if(a){const j=n||((y=t[0])==null?void 0:y.id);j&&u(j)}else{const j=e.model;if(j){const{_appModelId:N,...v}=j;s(v)}else s({provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]})}}function p(y){const{_appModelId:j,...N}=e.model||{};s({...N,...y})}return t.find(y=>y.id===c),t.find(y=>y.id===n),i.jsxs("div",{className:"model-selector",children:[i.jsx("style",{children:`
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
      `}),t.length>0&&i.jsxs("div",{className:"model-choice",children:[i.jsxs("div",{className:`model-option ${a?"":"selected"}`,onClick:()=>!a||d(),children:[i.jsx("div",{className:"model-option-label",children:"Use App Model"}),i.jsx("div",{className:"model-option-desc",children:"Select from configured models"})]}),i.jsxs("div",{className:`model-option ${a?"selected":""}`,onClick:()=>a||d(),children:[i.jsx("div",{className:"model-option-label",children:"Custom"}),i.jsx("div",{className:"model-option-desc",children:"Configure model manually"})]})]}),!a&&t.length>0?i.jsx("div",{className:"app-model-select",children:t.map(y=>i.jsx("div",{className:`app-model-item ${c===y.id?"selected":""}`,onClick:()=>u(y.id),children:i.jsxs("div",{className:"app-model-item-info",children:[i.jsxs("div",{className:"app-model-item-name",children:[y.name,y.id===n&&i.jsxs("span",{className:"default-badge",children:[i.jsx(sx,{size:10,fill:"currentColor"}),"Default"]})]}),i.jsxs("div",{className:"app-model-item-details",children:[y.provider," / ",y.model_name,y.api_base&&` • ${y.api_base}`]})]})},y.id))}):t.length===0?i.jsx("div",{className:"no-models-message",children:"No models configured in App Config. Configure models there first, or use custom settings below."}):null,(a||t.length===0)&&i.jsx("div",{className:"custom-model-form",children:i.jsx(lx,{projectId:r,values:e.model||{},onChange:p})})]})}const cl=[{id:"builtin_exit_loop",name:"exit_on_EXIT_LOOP_NOW",description:'Exits LoopAgent when model says "EXIT LOOP NOW". Use as after_model_callback.',module_path:"exit_on_EXIT_LOOP_NOW",code:"",state_keys_used:[]}];function KS({agent:e,onUpdate:t,customCallbacks:n,isLlmAgent:r}){const s=[...cl,...n],o=[{key:"before_agent_callbacks",label:"Before Agent"},{key:"after_agent_callbacks",label:"After Agent"}],a=[{key:"before_model_callbacks",label:"Before Model"},{key:"after_model_callbacks",label:"After Model"},{key:"before_tool_callbacks",label:"Before Tool"},{key:"after_tool_callbacks",label:"After Tool"}],l=r?[...o,...a]:o;function c(d,p){const f=e[d]||[],m=s.find(y=>y.id===p);m&&t({[d]:[...f,{module_path:m.module_path}]})}function u(d,p){const f=e[d]||[];t({[d]:f.filter((m,y)=>y!==p)})}return i.jsx("div",{className:"callbacks-editor",children:l.map(({key:d,label:p})=>{const f=e[d]||[],m=s;return i.jsxs("div",{className:"callback-type-group",style:{marginBottom:"20px"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[i.jsx("label",{style:{fontWeight:500,fontSize:"13px"},children:p}),m.length>0&&i.jsxs("select",{value:"",onChange:y=>{y.target.value&&(c(d,y.target.value),y.target.value="")},style:{padding:"4px 8px",fontSize:"12px",width:"200px"},children:[i.jsx("option",{value:"",children:"Add callback..."}),i.jsx("optgroup",{label:"Built-in",children:cl.filter(y=>!f.some(j=>j.module_path===y.module_path)).map(y=>i.jsx("option",{value:y.id,children:y.name},y.id))}),i.jsx("optgroup",{label:"Custom",children:n.filter(y=>!f.some(j=>j.module_path===y.module_path)).map(y=>i.jsx("option",{value:y.id,children:y.name},y.id))})]})]}),f.length===0?i.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",fontStyle:"italic",padding:"8px"},children:"No callbacks"}):i.jsx("div",{className:"callback-list",children:f.map((y,j)=>{const N=s.find(g=>g.module_path===y.module_path),v=cl.some(g=>g.module_path===y.module_path);return i.jsxs("div",{className:"callback-chip",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 10px",background:v?"var(--accent-bg, #1a365d)":"var(--bg-secondary)",borderRadius:"4px",marginBottom:"4px"},title:(N==null?void 0:N.description)||"",children:[i.jsxs("span",{style:{fontSize:"12px",display:"flex",alignItems:"center",gap:"6px"},children:[v&&i.jsx("span",{style:{fontSize:"9px",padding:"1px 4px",background:"var(--accent-color, #3182ce)",borderRadius:"3px",textTransform:"uppercase",fontWeight:600},children:"built-in"}),(N==null?void 0:N.name)||y.module_path]}),i.jsx("button",{onClick:()=>u(d,j),style:{background:"none",border:"none",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},title:"Remove callback",children:i.jsx(Fe,{size:12})})]},j)})})]},d)})})}const ul=[{type:"LlmAgent",label:"LLM Agent",icon:pr,color:"#00f5d4",description:"AI-powered agent with model reasoning"},{type:"SequentialAgent",label:"Sequential",icon:O0,color:"#7b2cbf",description:"Run sub-agents in order"},{type:"LoopAgent",label:"Loop",icon:A0,color:"#ffd93d",description:"Repeat sub-agents until exit"},{type:"ParallelAgent",label:"Parallel",icon:dc,color:"#ff6b6b",description:"Run sub-agents simultaneously"}];function GS(){return`agent_${Date.now().toString(36)}`}function QS(e){return{provider:e.provider,model_name:e.model_name,api_base:e.api_base,temperature:e.temperature,max_output_tokens:e.max_output_tokens,top_p:e.top_p,top_k:e.top_k,fallbacks:[]}}function YS(e,t){const n=GS(),r={LlmAgent:"new_agent",SequentialAgent:"new_sequence",LoopAgent:"new_loop",ParallelAgent:"new_parallel"},s={id:n,name:r[e]||"new_agent",description:""},o=t?QS(t):{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]};switch(e){case"LlmAgent":return{...s,type:"LlmAgent",model:o,instruction:"",include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:[],sub_agents:[],output_key:r[e]||"new_agent",before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};case"SequentialAgent":return{...s,type:"SequentialAgent",sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[]};case"LoopAgent":return{...s,type:"LoopAgent",sub_agents:[],max_iterations:10,before_agent_callbacks:[],after_agent_callbacks:[]};case"ParallelAgent":return{...s,type:"ParallelAgent",sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[]};default:throw new Error(`Unknown agent type: ${e}`)}}function XS({onSelectAgent:e}){const{project:t,addAgent:n,removeAgent:r,updateAgent:s,selectedAgentId:o,setSelectedAgentId:a,mcpServers:l}=ut(),[c,u]=b.useState(new Set),[d,p]=b.useState(!1),[f,m]=b.useState(""),[y,j]=b.useState(new Map),[N,v]=b.useState(380),[g,x]=b.useState(!1),T=b.useRef(null),[z,w]=b.useState(null),P=b.useRef(null),[_,D]=b.useState(null),[S,R]=b.useState(null),L=b.useRef(null),W=b.useRef(null),U=b.useCallback(K=>{K.preventDefault(),x(!0)},[]);if(b.useEffect(()=>{const K=re=>{if(!g)return;const ve=Math.min(Math.max(200,re.clientX),600);v(ve)},X=()=>{x(!1)};return g&&(document.addEventListener("mousemove",K),document.addEventListener("mouseup",X),document.body.style.cursor="col-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",K),document.removeEventListener("mouseup",X),document.body.style.cursor="",document.body.style.userSelect=""}},[g]),b.useEffect(()=>{if(t){const K=t.agents.filter(X=>"sub_agents"in X&&X.sub_agents.length>0).map(X=>X.id);u(new Set(K))}},[t==null?void 0:t.id,t==null?void 0:t.agents.length]),!t)return null;function $(){if(!f.trim()||!t)return;const K=`generating_${Date.now()}`,X=f;j(re=>new Map(re).set(K,X)),p(!1),m(""),Ug(t.id,X).then(re=>{var ve,we,ze,je;if(re.success&&re.config){const F=re.config,ae=[];if((ve=F.tools)!=null&&ve.builtin)for(const te of F.tools.builtin)ae.push({type:"builtin",name:te});if((we=F.tools)!=null&&we.mcp)for(const te of F.tools.mcp){const he=l.find(le=>le.name===te.server);he&&ae.push({type:"mcp",server:{...he,tool_filter:te.tools}})}if((ze=F.tools)!=null&&ze.custom)for(const te of F.tools.custom){const he=t.custom_tools.find(le=>le.name===te);he&&ae.push({type:"function",name:te,module_path:he.module_path})}if((je=F.tools)!=null&&je.agents)for(const te of F.tools.agents){const he=t.agents.find(le=>le.id===te);he&&ae.push({type:"agent",agent_id:te,name:he.name})}const fe=t.app.models||[],ge=fe.find(te=>te.id===t.app.default_model_id)||fe[0],J={id:`agent_${Date.now().toString(36)}`,type:"LlmAgent",name:F.name||"new_agent",description:F.description||"",instruction:F.instruction||"",model:ge?{provider:ge.provider,model_name:ge.model_name,api_base:ge.api_base,temperature:ge.temperature,max_output_tokens:ge.max_output_tokens,top_p:ge.top_p,top_k:ge.top_k,fallbacks:[]}:{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]},include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:ae,sub_agents:F.sub_agents||[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};n(J),a(J.id),e==null||e(J.id)}else console.error("Failed to generate agent:",re.error)}).catch(re=>{console.error("Error generating agent:",re)}).finally(()=>{j(re=>{const ve=new Map(re);return ve.delete(K),ve})})}const Z=t.agents.find(K=>K.id===o);function E(K){a(K),e==null||e(K)}function O(K){if(!t)return;const X=t.app.models||[],re=X.find(we=>we.id===t.app.default_model_id)||X[0],ve=YS(K,re);n(ve),E(ve.id)}function I(K,X){X.stopPropagation(),confirm("Delete this agent?")&&(r(K),o===K&&(e==null||e(null)))}function k(K){const X=new Set(c);X.has(K)?X.delete(K):X.add(K),u(X)}function V(K){if(!L.current||!P.current)return;const X=L.current.getBoundingClientRect(),re=K.clientY-X.top,ve=60,we=8;if(re<ve){const ze=Math.max(1,we*(1-re/ve));L.current.scrollTop-=ze}else if(re>X.height-ve){const ze=Math.max(1,we*(1-(X.height-re)/ve));L.current.scrollTop+=ze}}function Q(K,X){K.dataTransfer.setData("text/plain",X),K.dataTransfer.effectAllowed="move",P.current=X,requestAnimationFrame(()=>w(X))}function h(){P.current=null,w(null),D(null),R(null),W.current&&(cancelAnimationFrame(W.current),W.current=null)}function B(K,X,re){if(!t||(K.preventDefault(),K.stopPropagation(),!P.current))return;const we=t.agents.find(ze=>ze.id===X);!we||!("sub_agents"in we)||(K.dataTransfer.dropEffect="move",R({parentId:X,index:re}),D(null))}function C(K,X,re){if(!t)return;K.preventDefault(),K.stopPropagation();const ve=K.dataTransfer.getData("text/plain");if(!ve)return;const we=t.agents.find(je=>je.id===X);if(!we||!("sub_agents"in we))return;t.agents.forEach(je=>{"sub_agents"in je&&je.sub_agents.includes(ve)&&s(je.id,{sub_agents:je.sub_agents.filter(F=>F!==ve)})});const ze=[...we.sub_agents.filter(je=>je!==ve)];ze.splice(re,0,ve),s(X,{sub_agents:ze}),u(je=>new Set([...je,X])),w(null),R(null)}function G(K,X,re){if(!t)return;const ve=P.current;if(K.preventDefault(),K.stopPropagation(),ve===X)return;const we=t.agents.find(ze=>ze.id===ve);we&&"sub_agents"in we&&H(we,X)||(K.dataTransfer.dropEffect="move",D({agentId:X,type:re}),R(null))}function xe(K){const X=K.relatedTarget;(!X||!K.currentTarget.contains(X))&&D(null)}function ye(K,X,re){if(!t)return;K.preventDefault(),K.stopPropagation();const ve=K.dataTransfer.getData("text/plain");if(!ve||ve===X)return;const we=t.agents.find(je=>je.id===X),ze=t.agents.find(je=>je.id===ve);if(!(!we||!ze)){if(re==="sub_agent")"sub_agents"in we&&(t.agents.forEach(je=>{"sub_agents"in je&&je.sub_agents.includes(ve)&&s(je.id,{sub_agents:je.sub_agents.filter(F=>F!==ve)})}),we.sub_agents.includes(ve)||(s(X,{sub_agents:[...we.sub_agents,ve]}),u(je=>new Set([...je,X]))));else if(re==="tool"&&"tools"in we){const je=we;je.tools.some(ae=>ae.type==="agent"&&ae.agent_id===ve)||s(X,{tools:[...je.tools,{type:"agent",agent_id:ve,name:ze.name}]})}w(null),D(null)}}function H(K,X){if(!t||!("sub_agents"in K))return!1;if(K.sub_agents.includes(X))return!0;for(const re of K.sub_agents){const ve=t.agents.find(we=>we.id===re);if(ve&&H(ve,X))return!0}return!1}function A(K){const X=ul.find(re=>re.type===K);return X?X.icon:pr}function q(K){const X=ul.find(re=>re.type===K);return X?X.color:"#888"}function ee(K,X=0){return K.map(re=>{const ve=A(re.type),we=q(re.type),ze="sub_agents"in re&&re.sub_agents.length>0,je="sub_agents"in re,F=re.type==="LlmAgent",ae=c.has(re.id),fe=z===re.id,ge=(_==null?void 0:_.agentId)===re.id&&(_==null?void 0:_.type)==="sub_agent",J=(_==null?void 0:_.agentId)===re.id&&(_==null?void 0:_.type)==="tool",te=ze&&t?re.sub_agents.map(le=>t.agents.find(_e=>_e.id===le)).filter(le=>le!==void 0):[],he=z&&z!==re.id&&(je||F);return i.jsxs("div",{className:"agent-tree-item",children:[i.jsxs("div",{className:`agent-item ${o===re.id?"selected":""} ${fe?"dragging":""} ${he?"drop-target":""}`,onClick:()=>E(re.id),style:{paddingLeft:12+X*20},draggable:!0,onDragStart:le=>Q(le,re.id),onDragEnd:h,onDragOver:le=>{he&&(le.preventDefault(),le.stopPropagation())},children:[i.jsx("div",{className:"drag-handle",children:i.jsx(N0,{size:12})}),ze?i.jsx("button",{className:"expand-btn",onClick:le=>{le.stopPropagation(),k(re.id)},children:ae?i.jsx(Et,{size:16}):i.jsx(zt,{size:16})}):i.jsx("span",{style:{width:20}}),i.jsx("div",{className:"agent-icon",style:{background:we},children:i.jsx(ve,{size:14})}),i.jsx("span",{className:"agent-name",children:re.name}),i.jsx("button",{className:"delete-btn",onClick:le=>I(re.id,le),children:i.jsx(Fe,{size:14})}),he&&i.jsxs("div",{className:"drop-overlay",children:[je&&i.jsxs("div",{className:`drop-zone-overlay ${ge?"active":""}`,onDragOver:le=>G(le,re.id,"sub_agent"),onDragLeave:xe,onDrop:le=>ye(le,re.id,"sub_agent"),children:[i.jsx(ox,{size:12}),i.jsx("span",{children:"Sub-agent"})]}),F&&i.jsxs("div",{className:`drop-zone-overlay ${J?"active":""}`,onDragOver:le=>G(le,re.id,"tool"),onDragLeave:xe,onDrop:le=>ye(le,re.id,"tool"),children:[i.jsx(tn,{size:12}),i.jsx("span",{children:"Tool"})]})]})]}),ze&&ae&&i.jsxs("div",{className:"sub-agents",children:[z&&z!==re.id&&i.jsx("div",{className:`insert-indicator ${(S==null?void 0:S.parentId)===re.id&&(S==null?void 0:S.index)===0?"active":""}`,style:{marginLeft:12+(X+1)*20},onDragOver:le=>B(le,re.id,0),onDragLeave:()=>R(null),onDrop:le=>C(le,re.id,0)}),te.map((le,_e)=>i.jsxs(Rt.Fragment,{children:[ee([le],X+1),z&&z!==re.id&&z!==le.id&&i.jsx("div",{className:`insert-indicator ${(S==null?void 0:S.parentId)===re.id&&(S==null?void 0:S.index)===_e+1?"active":""}`,style:{marginLeft:12+(X+1)*20},onDragOver:Ze=>B(Ze,re.id,_e+1),onDragLeave:()=>R(null),onDrop:Ze=>C(Ze,re.id,_e+1)})]},le.id))]})]},re.id)})}const Y=new Set(t.agents.flatMap(K=>"sub_agents"in K?K.sub_agents:[])),oe=t.agents.filter(K=>!Y.has(K.id));return i.jsxs("div",{className:"agents-panel",children:[i.jsx("style",{children:`
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
      `}),i.jsxs("aside",{className:"agents-sidebar",style:{width:N},children:[i.jsxs("div",{className:"sidebar-header",children:[i.jsxs("h3",{children:["Agents (",t.agents.length,")",y.size>0&&i.jsxs("span",{className:"generating-badge",children:[i.jsx($n,{size:12,className:"spin"})," ",y.size]})]}),i.jsxs("div",{className:"header-buttons",children:[ul.map(({type:K,icon:X,color:re})=>i.jsx("button",{className:"quick-add-btn",style:{background:re},onClick:()=>O(K),title:`Add ${K}`,children:i.jsx(X,{size:14})},K)),i.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>p(!0),title:"AI-powered agent setup",children:i.jsx(Ka,{size:14})})]})]}),i.jsx("div",{className:"agents-list",ref:L,onDragOver:V,children:t.agents.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx(pr,{size:32}),i.jsx("p",{children:"No agents yet"})]}):ee(oe)})]}),i.jsx("div",{ref:T,className:`sidebar-resizer ${g?"resizing":""}`,onMouseDown:U}),i.jsx("div",{className:"agent-editor-area",children:Z?i.jsx(HS,{agent:Z}):i.jsxs("div",{className:"empty-state card",children:[i.jsx(pr,{size:48}),i.jsxs("p",{children:["Select an agent to edit",i.jsx("br",{}),"or create a new one"]})]})}),d&&i.jsx("div",{className:"type-selector",onClick:()=>p(!1),children:i.jsxs("div",{className:"quick-setup-content",onClick:K=>K.stopPropagation(),children:[i.jsxs("h2",{children:[i.jsx(Ka,{size:20})," Quick Agent Setup"]}),i.jsx("p",{className:"quick-setup-desc",children:"Describe what you want this agent to do. Runs in the background - you can start multiple!"}),i.jsxs("div",{className:"quick-setup-form",children:[i.jsx("textarea",{value:f,onChange:K=>m(K.target.value),placeholder:"Example: An agent that searches the web for information and summarizes the results. It should be able to search Google and handle multiple queries in parallel.",rows:5,autoFocus:!0,onKeyDown:K=>{K.key==="Enter"&&(K.metaKey||K.ctrlKey)&&f.trim()&&$()}}),i.jsxs("div",{className:"quick-setup-info",children:[i.jsx("strong",{children:"Available resources:"}),i.jsxs("ul",{children:[i.jsxs("li",{children:[t.app.state_keys.length," state keys"]}),i.jsxs("li",{children:[l.length," MCP servers"]}),i.jsxs("li",{children:[t.custom_tools.length," custom tools"]}),i.jsxs("li",{children:[t.agents.length," existing agents"]})]})]}),i.jsxs("div",{className:"quick-setup-actions",children:[i.jsx("button",{className:"btn btn-secondary",onClick:()=>p(!1),children:"Cancel"}),i.jsxs("button",{className:"btn btn-primary",onClick:$,disabled:!f.trim(),children:[i.jsx(Ka,{size:14}),"Generate (⌘↵)"]})]})]})]})})]})}var Ju="\x1B[0m",Ku="\x1B[1m",ey=e=>e instanceof Error?e.message:typeof e=="string"?e:"An unknown error occurred",ZS=e=>{let t=ey(e),n=`${Ku}[MONACOPILOT ERROR] ${t}${Ju}`;return console.error(n),{message:t}},eC=(e,t)=>{console.warn(`${Ku}[MONACOPILOT WARN] ${e}${t?`
${ey(t)}`:""}${Ju}`)},tC=(e,t,n)=>console.warn(`${Ku}[MONACOPILOT DEPRECATED] "${e}" is deprecated${n?` in ${n}`:""}. Please use "${t}" instead. It will be removed in a future version.${Ju}`),Uo={report:ZS,warn:eC,warnDeprecated:tC},Kf=(e,t,n={})=>{if(t<=0)return"";let r=e.split(`
`),s=r.length;if(t>=s)return e;if(n.truncateDirection==="keepEnd"){let a=r.slice(-t);return a.every(l=>l==="")?`
`.repeat(t):a.join(`
`)}let o=r.slice(0,t);return o.every(a=>a==="")?`
`.repeat(t):o.join(`
`)},nC=100,rC=!0,ty="onIdle",iC=!0,sC=120,oC=400,aC=0,Gu=(e,t)=>t.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:e.lineNumber,endColumn:e.column}),lC=(e,t)=>t.getValueInRange({startLineNumber:e.lineNumber,startColumn:e.column,endLineNumber:t.getLineCount(),endColumn:t.getLineMaxColumn(t.getLineCount())}),cC=e=>e.getValue(),uC=class{constructor(e){this.capacity=e,this.head=0,this.tail=0,this.size=0,this.buffer=new Array(e)}enqueue(e){let t;return this.size===this.capacity&&(t=this.dequeue()),this.buffer[this.tail]=e,this.tail=(this.tail+1)%this.capacity,this.size++,t}dequeue(){if(this.size===0)return;let e=this.buffer[this.head];return this.buffer[this.head]=void 0,this.head=(this.head+1)%this.capacity,this.size--,e}getAll(){return this.buffer.filter(e=>e!==void 0)}clear(){this.buffer=new Array(this.capacity),this.head=0,this.tail=0,this.size=0}getSize(){return this.size}isEmpty(){return this.size===0}isFull(){return this.size===this.capacity}},ny=class ry{constructor(){this.cache=new uC(ry.MAX_CACHE_SIZE)}get(t,n){return this.cache.getAll().filter(r=>this.isValidCacheItem(r,t,n))}add(t){t.completion.trim()&&this.cache.enqueue(t)}clear(){this.cache.clear()}isValidCacheItem(t,n,r){let s=t.textBeforeCursor.trim(),o=Gu(n,r),a=o,l=r.getLineContent(n.lineNumber);if(n.column===l.length+1&&n.lineNumber<r.getLineCount()){let u=r.getLineContent(n.lineNumber+1);a=`${o}
${u}`}if(!(a.trim().includes(s)||s.includes(a.trim())))return!1;let c=r.getValueInRange(t.range);return this.isPartialMatch(c,t.completion)?this.isPositionValid(t,n):!1}isPartialMatch(t,n){let r=t.trim(),s=n.trim();return s.startsWith(r)||r.startsWith(s)}isPositionValid(t,n){let{range:r}=t,{startLineNumber:s,startColumn:o,endLineNumber:a,endColumn:l}=r,{lineNumber:c,column:u}=n;return c<s||c>a?!1:s===a?u>=o-1&&u<=l+1:c===s?u>=o-1:c===a?u<=l+1:!0}};ny.MAX_CACHE_SIZE=20;var dC=ny,pC=class{constructor(e){this.formattedCompletion="",this.formattedCompletion=e}setCompletion(e){return this.formattedCompletion=e,this}removeInvalidLineBreaks(){return this.formattedCompletion=this.formattedCompletion.trimEnd(),this}removeMarkdownCodeSyntax(){return this.formattedCompletion=this.removeMarkdownCodeBlocks(this.formattedCompletion),this}removeMarkdownCodeBlocks(e){let t=e.split(`
`),n=[],r=!1;for(let s=0;s<t.length;s++){let o=t[s],a=o.trim().startsWith("```");if(a&&!r){r=!0;continue}if(a&&r){r=!1;continue}n.push(o)}return n.join(`
`)}removeExcessiveNewlines(){return this.formattedCompletion=this.formattedCompletion.replace(/\n{3,}/g,`

`),this}build(){return this.formattedCompletion}},fC=class{findOverlaps(e,t,n){if(!e)return{startOverlapLength:0,maxOverlapLength:0};let r=e.length,s=t.length,o=n.length,a=0,l=0,c=0,u=Math.min(r,s);for(let f=1;f<=u;f++){let m=e.substring(0,f),y=t.slice(-f);m===y&&(c=f)}let d=Math.min(r,o);for(let f=0;f<d&&e[f]===n[f];f++)a++;for(let f=1;f<=d;f++)e.slice(-f)===n.slice(0,f)&&(l=f);let p=Math.max(a,l);if(p===0){for(let f=1;f<r;f++)if(n.startsWith(e.substring(f))){p=r-f;break}}return{startOverlapLength:c,maxOverlapLength:p}}},mC=class{constructor(e){this.monaco=e,this.textOverlapCalculator=new fC}computeInsertionRange(e,t,n){if(!t)return this.createEmptyRange(e);let r=n.getOffsetAt(e),s=n.getValue().substring(0,r),o=n.getValue().substring(r);if(r>=n.getValue().length)return this.createEmptyRange(e);if(o.length===0)return this.createEmptyRange(e);let{startOverlapLength:a,maxOverlapLength:l}=this.textOverlapCalculator.findOverlaps(t,s,o),c=a>0?n.getPositionAt(r-a):e,u=r+l,d=n.getPositionAt(u);return new this.monaco.Range(c.lineNumber,c.column,d.lineNumber,d.column)}computeCacheRange(e,t){let n=e.lineNumber,r=e.column,s=t.split(`
`),o=s.length-1,a=n+o,l=o===0?r+s[0].length:s[o].length+1;return new this.monaco.Range(n,r,a,l)}createEmptyRange(e){return new this.monaco.Range(e.lineNumber,e.column,e.lineNumber,e.column)}},hC=async e=>{let{endpoint:t,body:n}=e,r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok)throw new Error(`Error while fetching completion item: ${r.statusText}`);let{completion:s,error:o}=await r.json();return{completion:s,error:o}},gC=({pos:e,mdl:t,options:n})=>{let{filename:r,language:s,technologies:o,relatedFiles:a,maxContextLines:l=nC}=n,c=a&&a.length>0?3:2,u=l?Math.floor(l/c):void 0,d=(j,N,v)=>{let g=j(e,t);return N?Kf(g,N,v):g},p=(j,N)=>!j||!N?j:j.map(({content:v,...g})=>({...g,content:Kf(v,N)})),f=d(Gu,u,{truncateDirection:"keepEnd"}),m=d(lC,u,{truncateDirection:"keepStart"}),y=p(a,u);return{filename:r,language:s,technologies:o,relatedFiles:y,textBeforeCursor:f,textAfterCursor:m,cursorPosition:e}},xC=(e,t=300)=>{let n=null,r=null,s=(...o)=>{if(r)return r.args=o,r.promise;let a,l,c=new Promise((u,d)=>{a=u,l=d});return r={args:o,promise:c,resolve:a,reject:l},n&&(clearTimeout(n),n=null),n=setTimeout(async()=>{let u=r;if(u){r=null,n=null;try{let d=await e(...u.args);u.resolve(d)}catch(d){u.reject(d)}}},t),c};return s.cancel=()=>{n&&(clearTimeout(n),n=null),r&&(r.reject(new Error("Cancelled")),r=null)},s},yC=e=>typeof e=="string"?e==="Cancelled"||e==="AbortError":e instanceof Error?e.message==="Cancelled"||e.name==="AbortError":!1,_i=e=>({items:e,enableForwardStability:!0}),Sc=new dC,vC=async({monaco:e,mdl:t,pos:n,token:r,isCompletionAccepted:s,options:o})=>{let{trigger:a=ty,enableCaching:l=rC,allowFollowUpCompletions:c=iC,onError:u,requestHandler:d}=o;if(l&&!s){let p=Sc.get(n,t).map(f=>({insertText:f.completion,range:f.range}));if(p.length>0)return _i(p)}if(r.isCancellationRequested||!c&&s)return _i([]);try{let p=xC(async y=>{var N,v;(N=o.onCompletionRequested)==null||N.call(o,y);let j;if(d)j=await d(y);else if(o.endpoint)j=await hC({endpoint:o.endpoint,...y});else throw new Error('No endpoint specified for completion request. Please set the "endpoint" option in registerCompletion, or provide a custom requestHandler.');if(j.error)throw new Error(j.error);return(v=o.onCompletionRequestFinished)==null||v.call(o,y,j),j},{onTyping:sC,onIdle:oC,onDemand:aC}[a]);r.onCancellationRequested(()=>{p.cancel()});let f=gC({pos:n,mdl:t,options:o}),{completion:m}=await p({body:{completionMetadata:f}});if(m){let y=new pC(m).removeMarkdownCodeSyntax().removeExcessiveNewlines().removeInvalidLineBreaks().build(),j=new mC(e);return l&&Sc.add({completion:y,range:j.computeCacheRange(n,y),textBeforeCursor:Gu(n,t)}),_i([{insertText:y,range:j.computeInsertionRange(n,y,t)}])}}catch(p){if(yC(p))return _i([]);u?u(p):Uo.warn("Cannot provide completion",p)}return _i([])},Qu=new WeakMap,ha=e=>Qu.get(e),bC=(e,t)=>{Qu.set(e,t)},Gf=e=>{Qu.delete(e)},kC=e=>({isCompletionAccepted:!1,isCompletionVisible:!1,isExplicitlyTriggered:!1,hasRejectedCurrentCompletion:!1,options:e}),jC=(e,t)=>{let n=ha(e);!n||!n.options||(n.options={...n.options,...t})},wC=(e,t,n)=>{let r=ha(t);return r?e.languages.registerInlineCompletionsProvider(n.language,{provideInlineCompletions:(s,o,a,l)=>{if(s!==t.getModel())return{items:[]};let c=r.options||n;if(!(c.trigger==="onDemand"&&!r.isExplicitlyTriggered||c.triggerIf&&!c.triggerIf({text:cC(t),position:o,triggerType:c.trigger??ty})))return vC({monaco:e,mdl:s,pos:o,token:l,isCompletionAccepted:r.isCompletionAccepted,options:c})},handleItemDidShow:(s,o,a)=>{var l,c;r.isExplicitlyTriggered=!1,r.hasRejectedCurrentCompletion=!1,!r.isCompletionAccepted&&(r.isCompletionVisible=!0,(c=(l=r.options||n).onCompletionShown)==null||c.call(l,a,o.range))},freeInlineCompletions:()=>{}}):null},_C={TAB:(e,t)=>t.keyCode===e.KeyCode.Tab,CMD_RIGHT_ARROW:(e,t)=>t.keyCode===e.KeyCode.RightArrow&&t.metaKey},SC=class{constructor(e,t,n){this.monaco=e,this.state=t,this.initialOptions=n}handleKeyEvent(e){let t=this.state.options||this.initialOptions,n={monaco:this.monaco,event:e,state:this.state,options:t};this.handleCompletionAcceptance(n),this.handleCompletionRejection(n)}handleCompletionAcceptance(e){var t,n;return e.state.isCompletionVisible&&this.isAcceptanceKey(e.event)?((n=(t=e.options).onCompletionAccepted)==null||n.call(t),e.state.isCompletionAccepted=!0,e.state.isCompletionVisible=!1,!0):(e.state.isCompletionAccepted=!1,!1)}handleCompletionRejection(e){var t,n;return this.shouldRejectCompletion(e)?((n=(t=e.options).onCompletionRejected)==null||n.call(t),e.state.hasRejectedCurrentCompletion=!0,!0):!1}shouldRejectCompletion(e){return e.state.isCompletionVisible&&!e.state.hasRejectedCurrentCompletion&&!e.state.isCompletionAccepted&&!this.isAcceptanceKey(e.event)}isAcceptanceKey(e){return Object.values(_C).some(t=>t(this.monaco,e))}},CC=(e,t,n,r)=>{let s=new SC(e,n,r);return t.onKeyDown(o=>s.handleKeyEvent(o))},iy=(e,t,n)=>{let r=[];bC(t,kC(n)),t.updateOptions({inlineSuggest:{enabled:!0}});try{let s=ha(t);if(!s)return Uo.warn("Completion is not registered properly. State not found."),EC();let o=wC(e,t,n);o&&r.push(o);let a=CC(e,t,s,n);return r.push(a),{deregister:()=>{for(let l of r)l.dispose();Sc.clear(),Gf(t)},trigger:()=>NC(t),updateOptions:l=>{jC(t,l(s.options||n))}}}catch(s){return n.onError?n.onError(s):Uo.report(s),{deregister:()=>{for(let o of r)o.dispose();Gf(t)},trigger:()=>{},updateOptions:()=>{}}}},NC=e=>{let t=ha(e);if(!t){Uo.warn("Completion is not registered. Use `registerCompletion` to register completion first.");return}t.isExplicitlyTriggered=!0,e.trigger("keyboard","editor.action.inlineSuggest.trigger",{})},EC=()=>({deregister:()=>{},trigger:()=>{},updateOptions:()=>{}});function zC(){return`tool_${Date.now().toString(36)}`}function TC(e){return/^[a-zA-Z0-9_]+$/.test(e)}const PC=`def my_tool(tool_context: ToolContext, param1: str) -> dict:
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
`;function LC({onSelectTool:e}){const{project:t,updateProject:n,addCustomTool:r,updateCustomTool:s,removeCustomTool:o,selectedToolId:a,setSelectedToolId:l,builtinTools:c,mcpServers:u}=ut(),[d,p]=b.useState(""),[f,m]=b.useState(null),[y,j]=b.useState("tools"),[N,v]=b.useState(null),[g,x]=b.useState(""),[T,z]=b.useState(!1),[w,P]=b.useState(!1),[_,D]=b.useState(!1),[S,R]=b.useState(null),[L,W]=b.useState(null),[U,$]=b.useState({}),[Z,E]=b.useState({}),[O,I]=b.useState("");if(!t)return null;const k=t.mcp_servers||[],V=t.custom_tools.find(F=>F.id===a),Q=k.find(F=>F.name===N);function h(F){l(F),e==null||e(F)}b.useEffect(()=>{V&&(p(V.code),W(null))},[a]),b.useEffect(()=>{Q&&(x(JSON.stringify(Q,null,2)),z(!1))},[N]),b.useEffect(()=>{if(!t)return;const F=B(t.mcp_servers||[]);I(JSON.stringify(F,null,2))},[t==null?void 0:t.mcp_servers]),b.useEffect(()=>{if(y==="mcp"&&k.length>0){const F=k.filter(ae=>!U[ae.name]||U[ae.name]==="unknown");F.length>0&&F.forEach(ae=>{ye(ae.name)})}},[y,k.length]);function B(F){const ae={};for(const fe of F){const ge={};fe.connection_type==="stdio"?(ge.command=fe.command||"",ge.args=fe.args||[],Object.keys(fe.env||{}).length>0&&(ge.env=fe.env)):fe.connection_type==="sse"&&(ge.url=fe.url||"",Object.keys(fe.headers||{}).length>0&&(ge.headers=fe.headers)),fe.timeout&&fe.timeout!==30&&(ge.timeout=fe.timeout),fe.tool_filter&&(ge.tool_filter=fe.tool_filter),fe.tool_name_prefix&&(ge.tool_name_prefix=fe.tool_name_prefix),ae[fe.name]=ge}return{mcpServers:ae}}function C(F){const ae=[];for(const[fe,ge]of Object.entries(F.mcpServers||{})){const J={name:fe,description:ge.description||"",connection_type:ge.url?"sse":"stdio",command:ge.command,args:ge.args||[],env:ge.env||{},url:ge.url,headers:ge.headers||{},timeout:ge.timeout||30,tool_filter:ge.tool_filter||null,tool_name_prefix:ge.tool_name_prefix};ae.push(J)}return ae}function G(F){F!==void 0&&I(F)}function xe(){try{const F=JSON.parse(O),ae=C(F);n({mcp_servers:ae})}catch(F){alert("Invalid JSON: "+F.message)}}async function ye(F){const ae=k.find(fe=>fe.name===F);if(ae){$(fe=>({...fe,[F]:"testing"})),E(fe=>({...fe,[F]:""}));try{const fe=await uc({connection_type:ae.connection_type,command:ae.command,args:ae.args,env:ae.env,url:ae.url,headers:ae.headers,timeout:ae.timeout});$(ge=>({...ge,[F]:fe.success?"connected":"error"})),!fe.success&&fe.error&&E(ge=>({...ge,[F]:fe.error||"Unknown error"}))}catch(fe){$(ge=>({...ge,[F]:"error"})),E(ge=>({...ge,[F]:fe.message}))}}}function H(F){const ae=u.find(ge=>ge.name===F);if(!ae)return;if(k.some(ge=>ge.name===F)){alert(`Server "${F}" is already configured`);return}const fe={name:ae.name,description:ae.description||"",connection_type:ae.connection_type,command:ae.command,args:ae.args||[],env:ae.env||{},url:ae.url,headers:ae.headers||{},timeout:ae.timeout||30,tool_filter:ae.tool_filter||null,tool_name_prefix:ae.tool_name_prefix};n({mcp_servers:[...k,fe]})}async function A(){for(const F of k)await ye(F.name)}function q(){const F=zC();r({id:F,name:"new_tool",description:"",module_path:"tools.custom",code:PC,state_keys_used:[]}),h(F)}function ee(F,ae){ae.stopPropagation(),confirm("Delete this tool?")&&(o(F),a===F&&(e==null||e(null)))}function Y(F){V&&(F.name!==void 0&&(F.name===""||TC(F.name)?W(null):W("Name can only contain letters, numbers, and underscores")),s(V.id,F))}function oe(F){F!==void 0&&V&&(p(F),Y({code:F}))}async function K(){if(V){P(!0);try{const F=await Wg(t.id,V.name,V.description,V.state_keys_used);F.success&&F.code?(p(F.code),Y({code:F.code})):(console.error("Failed to generate tool code:",F.error),alert("Failed to generate tool code: "+(F.error||"Unknown error")))}catch(F){console.error("Error generating tool code:",F),alert("Error generating tool code: "+F.message)}finally{P(!1)}}}const X=b.useRef(null),re=b.useCallback((F,ae)=>{if(X.current&&typeof X.current=="function")try{X.current()}catch{}try{const fe=iy(ae,F,{language:"python",endpoint:"/api/code-completion",trigger:"onTyping"});typeof fe=="function"?X.current=fe:X.current=null}catch{X.current=null}},[]);b.useEffect(()=>()=>{if(X.current&&typeof X.current=="function")try{X.current()}catch{}},[]);function ve(F){F!==void 0&&(x(F),z(F!==JSON.stringify(Q,null,2)))}function we(){if(Q)try{const F=JSON.parse(g),ae=Q.name,fe=k.map(ge=>ge.name===ae?F:ge);n({mcp_servers:fe}),v(F.name),z(!1)}catch(F){alert("Invalid JSON: "+F.message)}}async function ze(){D(!0),R(null);try{const F=JSON.parse(g),ae=await uc({connection_type:F.connection_type,command:F.command,args:F.args,env:F.env,url:F.url,headers:F.headers,timeout:F.timeout||30});if(R(ae),ae.success&&ae.tools.length>0){const fe={...F,tool_filter:ae.tools.map(ge=>ge.name)};x(JSON.stringify(fe,null,2)),z(!0)}}catch(F){R({success:!1,tools:[],error:F.message})}finally{D(!1)}}const je={};return t.custom_tools.forEach(F=>{const ae=F.module_path||"tools";je[ae]||(je[ae]=[]),je[ae].push(F)}),i.jsxs("div",{className:"tools-panel",children:[i.jsx("style",{children:`
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
      `}),i.jsxs("aside",{className:"tools-sidebar",children:[i.jsxs("div",{className:"sidebar-tabs",children:[i.jsxs("button",{className:`sidebar-tab ${y==="tools"?"active":""}`,onClick:()=>{j("tools"),v(null)},children:[i.jsx(tn,{size:14}),"Tools"]}),i.jsxs("button",{className:`sidebar-tab ${y==="mcp"?"active":""}`,onClick:()=>{j("mcp"),l(null),m(null),v(null)},children:[i.jsx(bi,{size:14}),"MCP"]})]}),y==="tools"?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"sidebar-header",children:[i.jsxs("h3",{children:["Custom Tools (",t.custom_tools.length,")"]}),i.jsxs("button",{className:"btn btn-primary btn-sm",onClick:q,children:[i.jsx(Ke,{size:14}),"New"]})]}),i.jsxs("div",{className:"tools-tree",children:[c.length>0&&i.jsxs("div",{className:"module-group",children:[i.jsxs("div",{className:"module-header",children:[i.jsx(P0,{size:14}),"Built-in Tools"]}),c.map(F=>i.jsxs("div",{className:`tool-item builtin ${(f==null?void 0:f.name)===F.name?"selected":""}`,onClick:()=>{m(F),h(null),v(null)},children:[i.jsx(pc,{size:14}),i.jsx("span",{className:"tool-name",children:F.name})]},F.name))]}),t.custom_tools.length===0&&c.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx(hn,{size:32}),i.jsx("p",{children:"No tools defined yet"})]}):t.custom_tools.length>0&&Object.entries(je).map(([F,ae])=>i.jsxs("div",{className:"module-group",children:[i.jsxs("div",{className:"module-header",children:[i.jsx(Zg,{size:14}),F]}),ae.map(fe=>i.jsxs("div",{className:`tool-item ${a===fe.id?"selected":""}`,onClick:()=>{h(fe.id),m(null),v(null)},children:[i.jsx(tn,{size:14}),i.jsx("span",{className:"tool-name",children:fe.name}),i.jsx("button",{className:"delete-btn",onClick:ge=>ee(fe.id,ge),children:i.jsx(Fe,{size:14})})]},fe.id))]},F))]})]}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"sidebar-header",children:[i.jsxs("h3",{children:["MCP Servers (",k.length,")"]}),i.jsx("button",{className:"btn btn-secondary btn-sm",onClick:A,title:"Test all server connections",children:i.jsx(Xt,{size:14})})]}),i.jsx("div",{className:"mcp-servers-list",children:k.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx(bi,{size:32}),i.jsx("p",{children:"No MCP servers configured"}),i.jsx("p",{style:{fontSize:"12px",color:"var(--text-muted)"},children:"Edit the JSON to add servers"})]}):k.map(F=>{const ae=U[F.name]||"unknown",fe=Z[F.name];return i.jsxs("div",{className:"mcp-server-item-wrapper",children:[i.jsxs("div",{className:"mcp-server-item",children:[i.jsxs("div",{className:"mcp-server-info",children:[i.jsx(bi,{size:14}),i.jsx("span",{className:"mcp-server-name",children:F.name}),i.jsxs("span",{className:`mcp-status-badge ${ae}`,children:[ae==="testing"?i.jsx($n,{size:10,className:"spin"}):null,ae==="unknown"&&"●",ae==="connected"&&"●",ae==="error"&&"●"]})]}),i.jsxs("div",{className:"mcp-server-actions",children:[i.jsx("span",{className:"mcp-server-type",children:F.connection_type}),i.jsxs("button",{className:"btn btn-sm",onClick:()=>ye(F.name),disabled:ae==="testing",title:"Test server connection",style:{display:"flex",alignItems:"center",gap:4},children:[ae==="testing"?i.jsx($n,{size:12,className:"spin"}):i.jsx(Xt,{size:12}),i.jsx("span",{style:{fontSize:11},children:"Test"})]})]})]}),ae==="error"&&fe&&i.jsxs("div",{className:"mcp-server-error",children:[i.jsx("span",{style:{fontWeight:500,color:"var(--error)"},children:"Error:"})," ",fe]})]},F.name)})})]})]}),i.jsx("div",{className:"tool-editor",children:f?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"editor-header",children:[i.jsx(pc,{size:20,style:{color:"var(--accent-secondary)"}}),i.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:f.name}),i.jsx("span",{className:"badge badge-muted",children:"Built-in"})]}),i.jsxs("div",{className:"builtin-tool-info",children:[i.jsxs("div",{className:"info-section",children:[i.jsx("h4",{children:"Description"}),i.jsx("p",{children:f.description||"No description available."})]}),i.jsxs("div",{className:"info-section",children:[i.jsx("h4",{children:"Usage"}),i.jsx("p",{children:"This is a built-in tool provided by ADK. Add it to any LLM agent's tools list to enable it."}),i.jsxs("code",{children:['tools: ["',f.name,'"]']})]}),i.jsxs("div",{className:"info-section",children:[i.jsx("h4",{children:"Note"}),i.jsx("p",{children:"Built-in tools are read-only and cannot be modified. Create a custom tool if you need different behavior."})]})]})]}):V?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"editor-header",children:[i.jsx(tn,{size:20,style:{color:"var(--accent-primary)"}}),i.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[i.jsx("input",{type:"text",value:V.name,onChange:F=>Y({name:F.target.value}),placeholder:"Tool name",style:{borderColor:L?"var(--error)":void 0}}),L&&i.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:L})]})]}),i.jsxs("div",{className:"editor-meta",children:[i.jsxs("div",{className:"meta-field grow",children:[i.jsx("label",{children:"Description"}),i.jsx("input",{type:"text",value:V.description,onChange:F=>Y({description:F.target.value}),placeholder:"What does this tool do?"})]}),i.jsxs("div",{className:"meta-field",children:[i.jsx("label",{children:"Module Path"}),i.jsx("input",{type:"text",value:V.module_path,onChange:F=>Y({module_path:F.target.value}),placeholder:"tools.custom",style:{width:180}})]})]}),i.jsxs("div",{className:"code-actions",children:[i.jsx("button",{className:"btn btn-secondary btn-sm",onClick:K,disabled:w||!V.name||!V.description,title:!V.name||!V.description?"Add a name and description first":"Generate code using AI",children:w?i.jsxs(i.Fragment,{children:[i.jsx($n,{size:14,className:"spinning"}),"Generating..."]}):i.jsxs(i.Fragment,{children:[i.jsx(Tu,{size:14}),"Write Tool"]})}),i.jsx("span",{className:"action-hint",children:"AI will generate code based on the tool name, description, and selected state keys"})]}),i.jsx("div",{className:"code-editor",children:i.jsx(Wt,{height:"100%",language:"python",theme:"vs-dark",value:d,onChange:oe,onMount:re,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12}}})}),i.jsxs("div",{className:"state-keys-panel",children:[i.jsxs("h4",{children:[i.jsx(Eu,{size:14})," State Keys Used"]}),i.jsx("div",{className:"state-key-chips",children:t.app.state_keys.length===0?i.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"No state keys defined. Add them in App Config."}):t.app.state_keys.map(F=>{const ae=V.state_keys_used.includes(F.name);return i.jsxs("label",{className:`state-key-chip ${ae?"selected":""}`,title:F.description,children:[i.jsx("input",{type:"checkbox",checked:ae,onChange:fe=>{const ge=fe.target.checked?[...V.state_keys_used,F.name]:V.state_keys_used.filter(J=>J!==F.name);Y({state_keys_used:ge})}}),F.name,i.jsxs("span",{style:{color:"var(--text-muted)",fontSize:11},children:["(",F.type,")"]})]},F.name)})})]})]}):Q?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"editor-header",children:[i.jsx(bi,{size:20,style:{color:"var(--accent-primary)"}}),i.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:Q.name}),i.jsx("span",{className:"badge badge-info",children:Q.connection_type}),T&&i.jsx("span",{className:"unsaved-badge",children:"Unsaved"}),i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:ze,disabled:_,title:"Test connection and discover available tools",children:[_?i.jsx($n,{size:14,className:"spin"}):i.jsx(Nu,{size:14}),_?"Testing...":"Test Connection"]}),i.jsxs("button",{className:"btn btn-primary btn-sm",onClick:we,disabled:!T,children:[i.jsx(Do,{size:14}),"Save"]})]}),S&&i.jsx("div",{className:`mcp-test-result ${S.success?"success":"error"}`,children:S.success?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"test-result-header",children:["✓ Connected! Found ",S.tools.length," tools"]}),S.tools.length>0&&i.jsxs("div",{className:"test-result-tools",children:[i.jsx("strong",{children:"Available tools:"}),i.jsx("ul",{children:S.tools.map(F=>i.jsxs("li",{children:[i.jsx("code",{children:F.name}),F.description&&i.jsxs("span",{children:[" — ",F.description]})]},F.name))}),i.jsx("p",{className:"hint",children:'The tool_filter has been updated with these tools. Click "Save" to apply.'})]})]}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"test-result-header",children:"✗ Connection failed"}),i.jsx("div",{className:"test-result-error",children:S.error})]})}),i.jsx("div",{className:"mcp-info",children:i.jsx("p",{children:'Configure your MCP server using JSON. Click "Test Connection" to verify and discover available tools.'})}),i.jsx("div",{className:"code-editor",children:i.jsx(Wt,{height:"100%",language:"json",theme:"vs-dark",value:g,onChange:ve,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},formatOnPaste:!0}})}),i.jsxs("div",{className:"mcp-help",children:[i.jsx("h4",{children:"Schema Reference"}),i.jsxs("div",{className:"schema-fields",children:[i.jsxs("div",{className:"schema-field",children:[i.jsx("code",{children:"name"}),i.jsx("span",{children:"Unique identifier for this server"})]}),i.jsxs("div",{className:"schema-field",children:[i.jsx("code",{children:"description"}),i.jsx("span",{children:"Human-readable description"})]}),i.jsxs("div",{className:"schema-field",children:[i.jsx("code",{children:"connection_type"}),i.jsx("span",{children:'"stdio" | "sse" | "http"'})]}),i.jsxs("div",{className:"schema-field",children:[i.jsx("code",{children:"command"}),i.jsx("span",{children:"Command to run (for stdio)"})]}),i.jsxs("div",{className:"schema-field",children:[i.jsx("code",{children:"args"}),i.jsx("span",{children:"Array of command arguments"})]}),i.jsxs("div",{className:"schema-field",children:[i.jsx("code",{children:"env"}),i.jsx("span",{children:"Environment variables object"})]}),i.jsxs("div",{className:"schema-field",children:[i.jsx("code",{children:"url"}),i.jsx("span",{children:"Server URL (for sse/http)"})]}),i.jsxs("div",{className:"schema-field",children:[i.jsx("code",{children:"tool_filter"}),i.jsx("span",{children:"Array of tool names to include (null/omit = all tools, [] = no tools)"})]})]})]})]}):y==="mcp"?i.jsxs("div",{className:"mcp-json-editor",children:[i.jsxs("div",{className:"editor-header",children:[i.jsx(bi,{size:20,style:{color:"var(--accent-primary)"}}),i.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:"mcp.json"}),i.jsx("span",{className:"badge badge-muted",children:"Model Context Protocol"}),i.jsxs("select",{value:"",onChange:F=>{F.target.value&&H(F.target.value)},style:{padding:"6px 10px",fontSize:"12px",borderRadius:"6px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",color:"var(--text-primary)"},children:[i.jsx("option",{value:"",children:"+ Add known server..."}),u.filter(F=>!k.some(ae=>ae.name===F.name)).map(F=>i.jsxs("option",{value:F.name,children:[F.name," - ",F.description||"No description"]},F.name))]}),i.jsxs("button",{className:"btn btn-primary btn-sm",onClick:xe,children:[i.jsx(Do,{size:14}),"Apply Changes"]})]}),i.jsx("div",{className:"mcp-json-info",children:i.jsxs("p",{children:["Configure your MCP servers using the standard ",i.jsx("code",{children:"mcp.json"})," format. Select a known server from the dropdown to add its configuration."]})}),i.jsx("div",{className:"editor-content",style:{flex:1},children:i.jsx(Wt,{height:"100%",defaultLanguage:"json",value:O,onChange:G,theme:"vs-dark",options:{minimap:{enabled:!1},fontSize:14,lineNumbers:"on",scrollBeyondLastLine:!1,wordWrap:"on",tabSize:2,formatOnPaste:!0,formatOnType:!0}})})]}):i.jsxs("div",{className:"empty-state",children:[i.jsx(hn,{size:48}),i.jsxs("p",{children:["Select a tool to view",i.jsx("br",{}),"or create a new custom tool"]})]})})]})}function RC(){return`callback_${Date.now().toString(36)}`}function Qf(e){return/^[a-zA-Z0-9_]+$/.test(e)}function sy(e){switch(e){case"before_agent":case"after_agent":return`from google.adk.agents.callback_context import CallbackContext
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
`;default:return sy("before_agent")}}function AC({onSelectCallback:e}){var _,D;const{project:t,updateProject:n,addCustomCallback:r,updateCustomCallback:s,removeCustomCallback:o}=ut(),[a,l]=b.useState(""),[c,u]=b.useState(null),[d,p]=b.useState(null),[f,m]=b.useState(!1),y=b.useRef(null);if(!t)return null;const j=t.custom_callbacks||[],N=j.find(S=>S.id===c);function v(S){u(S),e==null||e(S)}b.useEffect(()=>{N?(l(N.code),p(null)):l("")},[c,N]);function g(){const S=RC(),R="new_callback",L={id:S,name:R,description:"",module_path:`callbacks.${R}`,code:sy("before_agent"),state_keys_used:[]};r(L),v(S)}function x(S,R){R.stopPropagation(),confirm("Delete this callback?")&&(o(S),c===S&&(e==null||e(null),u(null),l("")))}function T(){if(!c)return;const S=j.find(W=>W.id===c);if(!S)return;const R=S.name.trim();if(!R){alert("Please enter a name");return}if(!Qf(R)){p("Name must contain only alphanumeric characters and underscores");return}if(j.find(W=>W.name===R&&W.id!==S.id)){p("A callback with this name already exists");return}s(S.id,{code:a,name:R,description:S.description,module_path:`callbacks.${R}`,state_keys_used:S.state_keys_used}),p(null)}function z(S,R){y.current=R;try{iy(R,{endpoint:"/api/code-completion",language:"python"})}catch(L){console.warn("Failed to register Monacopilot completion:",L)}}async function w(){if(N){m(!0);try{let S="before_agent";const R=N.name.toLowerCase(),L=N.description.toLowerCase();R.includes("after_agent")||L.includes("after agent")?S="after_agent":R.includes("before_model")||L.includes("before model")?S="before_model":R.includes("after_model")||L.includes("after model")?S="after_model":R.includes("before_tool")||L.includes("before tool")?S="before_tool":R.includes("after_tool")||L.includes("after tool")?S="after_tool":(R.includes("before_agent")||L.includes("before agent"))&&(S="before_agent");const W=await Vg(t.id,N.name,N.description,S,N.state_keys_used);W.success&&W.code?(l(W.code),s(N.id,{code:W.code})):(console.error("Failed to generate callback code:",W.error),alert("Failed to generate callback code: "+(W.error||"Unknown error")))}catch(S){console.error("Error generating callback code:",S),alert("Error generating callback code: "+S.message)}finally{m(!1)}}}const P=((D=(_=t.app)==null?void 0:_.state_keys)==null?void 0:D.map(S=>S.name))||[];return i.jsxs("div",{className:"tools-panel",children:[i.jsx("style",{children:`
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
      `}),i.jsxs("div",{className:"tools-sidebar",children:[i.jsxs("div",{className:"tools-sidebar-header",children:[i.jsx("h3",{children:"Callbacks"}),i.jsx("button",{className:"btn btn-primary btn-sm",onClick:g,title:"Add Callback",children:i.jsx(Ke,{size:16})})]}),i.jsx("div",{className:"tools-list",children:j.length===0?i.jsx("div",{style:{padding:"16px",color:"var(--text-secondary)",fontSize:"14px"},children:"No callbacks yet. Click + to add one."}):j.map(S=>i.jsxs("div",{className:`tool-item ${c===S.id?"selected":""}`,onClick:()=>v(S.id),children:[i.jsxs("div",{style:{flex:1},children:[i.jsx("div",{className:"tool-item-name",children:S.name}),S.description&&i.jsx("div",{className:"tool-item-type",style:{fontSize:"11px",color:"var(--text-secondary)",marginTop:"2px"},children:S.description})]}),i.jsx("div",{className:"tool-item-actions",children:i.jsx("button",{className:"btn btn-icon btn-sm",onClick:R=>x(S.id,R),title:"Delete",children:i.jsx(Fe,{size:14})})})]},S.id))})]}),i.jsx("div",{className:"tools-editor",children:N?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"tools-editor-header",children:[i.jsx("h3",{children:"Edit Callback"}),i.jsxs("button",{className:"btn btn-primary btn-sm",onClick:T,children:[i.jsx(Do,{size:16,style:{marginRight:"6px"}}),"Save"]})]}),i.jsxs("div",{className:"tools-editor-content",style:{padding:"16px",overflowY:"auto"},children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Name"}),i.jsx("input",{type:"text",value:N.name,onChange:S=>{const R=S.target.value;s(N.id,{name:R,module_path:`callbacks.${R.trim()||"callback"}`}),d&&Qf(R)&&p(null)},className:d?"error":""}),d&&i.jsx("div",{className:"error-message",children:d})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Description"}),i.jsx("textarea",{value:N.description,onChange:S=>s(N.id,{description:S.target.value}),rows:2,placeholder:"Describe what this callback does..."})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Module Path"}),i.jsx("input",{type:"text",value:N.module_path,onChange:S=>s(N.id,{module_path:S.target.value}),placeholder:"callbacks.custom"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"State Keys Used"}),i.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"8px"},children:P.map(S=>{const R=N.state_keys_used.includes(S);return i.jsxs("button",{type:"button",className:`btn btn-sm ${R?"btn-primary":"btn-secondary"}`,onClick:()=>{const L=R?N.state_keys_used.filter(W=>W!==S):[...N.state_keys_used,S];s(N.id,{state_keys_used:L})},children:[i.jsx(Eu,{size:12,style:{marginRight:"4px"}}),S]},S)})}),P.length===0&&i.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"12px",marginTop:"4px"},children:"No state keys defined in App Config"})]}),i.jsxs("div",{className:"form-group",children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[i.jsx("label",{children:"Code"}),i.jsx("button",{className:"btn btn-secondary btn-sm",onClick:w,disabled:f||!N.name,title:N.name?"Generate code using AI":"Add a name first",children:f?i.jsxs(i.Fragment,{children:[i.jsx($n,{size:14,className:"spinning"}),"Generating..."]}):i.jsxs(i.Fragment,{children:[i.jsx(Tu,{size:14}),"Generate"]})})]}),i.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"8px"},children:"AI will generate code based on the callback name, description, and selected state keys"}),i.jsx("div",{className:"code-editor-container",children:i.jsx(Wt,{height:"100%",language:"python",theme:"vs-dark",value:a,onChange:S=>l(S||""),onMount:z,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0}})})]})]})]}):i.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)"},children:"Select a callback to edit, or create a new one"})})]})}function IC(e){try{const t=new URL(e),n=t.host,r=t.pathname,s=[{pattern:n,label:`${n} (exact domain)`},{pattern:`${n}/*`,label:`${n}/* (domain + any path)`}],o=n.split(".");if(o.length>2){const a=o.slice(-2).join(".");s.push({pattern:`*.${a}`,label:`*.${a} (all subdomains)`})}if(r&&r!=="/"){const a=r.split("/").filter(Boolean);a.length>0&&s.push({pattern:`${n}/${a[0]}/*`,label:`${n}/${a[0]}/* (specific path)`})}return s}catch{return[{pattern:e,label:e}]}}const Re={overlay:{position:"fixed",inset:0,backgroundColor:"rgba(0, 0, 0, 0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999},dialog:{backgroundColor:"#12121a",border:"1px solid rgba(245, 158, 11, 0.5)",borderRadius:8,boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.5)",width:500,maxWidth:"90vw",overflow:"hidden"},header:{display:"flex",alignItems:"center",gap:8,padding:12,borderBottom:"1px solid #374151",backgroundColor:"rgba(120, 53, 15, 0.2)"},headerIcon:{color:"#fbbf24"},headerTitle:{fontWeight:600,color:"#fcd34d",fontSize:14},closeButton:{marginLeft:"auto",background:"none",border:"none",color:"#6b7280",cursor:"pointer",padding:4,display:"flex",alignItems:"center"},content:{padding:16,display:"flex",flexDirection:"column",gap:16},sourceText:{fontSize:13,color:"#9ca3af"},requestBox:{backgroundColor:"#0a0a0f",borderRadius:6,border:"1px solid #374151",padding:12,fontFamily:"'SF Mono', 'Consolas', monospace",fontSize:13},methodBadge:e=>({fontWeight:700,color:e==="POST"?"#4ade80":e==="GET"?"#60a5fa":"#9ca3af",marginRight:8}),urlText:{color:"#d1d5db",wordBreak:"break-all"},headersText:{marginTop:8,fontSize:11,color:"#6b7280"},label:{fontSize:13,color:"#9ca3af",marginBottom:6},select:{width:"100%",padding:"10px 12px",backgroundColor:"#1a1a24",border:"1px solid #4b5563",borderRadius:6,fontSize:13,color:"#e5e7eb",cursor:"pointer",appearance:"none",backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 12px center",paddingRight:36},customInput:{width:"100%",padding:"10px 12px",backgroundColor:"#1a1a24",border:"1px solid #4b5563",borderRadius:6,fontSize:13,color:"#e5e7eb",fontFamily:"'SF Mono', 'Consolas', monospace"},radioGroup:{display:"flex",gap:16,marginTop:8},radioLabel:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"#9ca3af",cursor:"pointer"},backLink:{marginLeft:"auto",fontSize:12,color:"#6b7280",background:"none",border:"none",cursor:"pointer"},checkboxLabel:{display:"flex",alignItems:"center",gap:8,fontSize:13,color:"#9ca3af",cursor:"pointer"},footer:{display:"flex",alignItems:"center",gap:8,padding:12,borderTop:"1px solid #374151",backgroundColor:"#0a0a0f"},button:e=>{const t={display:"flex",alignItems:"center",gap:6,padding:"8px 16px",borderRadius:6,fontSize:13,fontWeight:500,cursor:"pointer",border:"1px solid",transition:"all 0.15s ease"};switch(e){case"deny":return{...t,backgroundColor:"rgba(220, 38, 38, 0.2)",borderColor:"rgba(239, 68, 68, 0.5)",color:"#f87171"};case"once":return{...t,backgroundColor:"rgba(75, 85, 99, 0.2)",borderColor:"rgba(107, 114, 128, 0.5)",color:"#d1d5db"};case"pattern":return{...t,backgroundColor:"rgba(22, 163, 74, 0.2)",borderColor:"rgba(34, 197, 94, 0.5)",color:"#4ade80"}}},timerContainer:{marginLeft:"auto",display:"flex",alignItems:"center",gap:6,color:"#6b7280",fontSize:13},progressBar:{height:3,backgroundColor:"#1f2937"},progressFill:e=>({height:"100%",backgroundColor:"#f59e0b",transition:"width 1s linear",width:`${e}%`})};function MC({request:e,timeout:t,onApprove:n,onDeny:r,onClose:s}){const[o,a]=b.useState(""),[l,c]=b.useState("exact"),[u,d]=b.useState(!1),[p,f]=b.useState(""),[m,y]=b.useState(!1),[j,N]=b.useState(t),v=IC(e.url);b.useEffect(()=>{v.length>0&&!o&&a(v[0].pattern)},[v,o]),b.useEffect(()=>{const P=setInterval(()=>{N(_=>_<=1?(r(),0):_-1)},1e3);return()=>clearInterval(P)},[r]);const g=b.useCallback(()=>{n()},[n]),x=b.useCallback(()=>{n(m?p:o,l,u)},[n,m,p,o,l,u]),T=j/t*100,z=e.source.startsWith("mcp:"),w=z?e.source.substring(4):"agent";return i.jsx("div",{style:Re.overlay,children:i.jsxs("div",{style:Re.dialog,children:[i.jsxs("div",{style:Re.header,children:[i.jsx(Yg,{size:18,style:Re.headerIcon}),i.jsx("span",{style:Re.headerTitle,children:"Network Request Approval"}),i.jsx("button",{style:Re.closeButton,onClick:s,children:i.jsx(ks,{size:16})})]}),i.jsxs("div",{style:Re.content,children:[i.jsx("div",{style:Re.sourceText,children:z?i.jsxs(i.Fragment,{children:['MCP server "',i.jsx("span",{style:{color:"#22d3ee"},children:w}),'" wants to connect to:']}):i.jsx(i.Fragment,{children:"Agent wants to connect to:"})}),i.jsxs("div",{style:Re.requestBox,children:[i.jsxs("div",{children:[i.jsx("span",{style:Re.methodBadge(e.method),children:e.method}),i.jsx("span",{style:Re.urlText,children:e.url})]}),e.headers&&Object.keys(e.headers).length>0&&i.jsxs("div",{style:Re.headersText,children:["Headers: ",Object.keys(e.headers).join(", ")]})]}),i.jsxs("div",{children:[i.jsx("div",{style:Re.label,children:"Allow pattern:"}),m?i.jsxs("div",{children:[i.jsx("input",{type:"text",value:p,onChange:P=>f(P.target.value),placeholder:"e.g., *.example.com/*",style:Re.customInput}),i.jsxs("div",{style:Re.radioGroup,children:[i.jsxs("label",{style:Re.radioLabel,children:[i.jsx("input",{type:"radio",checked:l==="wildcard",onChange:()=>c("wildcard")}),"Wildcard"]}),i.jsxs("label",{style:Re.radioLabel,children:[i.jsx("input",{type:"radio",checked:l==="regex",onChange:()=>c("regex")}),"Regex"]}),i.jsx("button",{onClick:()=>y(!1),style:Re.backLink,children:"← Back to suggestions"})]})]}):i.jsxs("select",{value:o,onChange:P=>{P.target.value==="__custom__"?(y(!0),f(o)):a(P.target.value)},style:Re.select,children:[v.map(P=>i.jsx("option",{value:P.pattern,children:P.label},P.pattern)),i.jsx("option",{value:"__custom__",children:"Custom pattern..."})]})]}),i.jsxs("label",{style:Re.checkboxLabel,children:[i.jsxs("span",{className:"toggle-switch",children:[i.jsx("input",{type:"checkbox",checked:u,onChange:P=>d(P.target.checked)}),i.jsx("span",{className:"toggle-slider"})]}),"Save to project (persists across sessions)"]})]}),i.jsxs("div",{style:Re.footer,children:[i.jsxs("button",{onClick:r,style:Re.button("deny"),children:[i.jsx(j0,{size:14}),"Deny"]}),i.jsxs("button",{onClick:g,style:Re.button("once"),children:[i.jsx(Su,{size:14}),"Allow Once"]}),i.jsxs("button",{onClick:x,style:Re.button("pattern"),children:[i.jsx(ix,{size:14}),"Allow Pattern"]}),i.jsxs("div",{style:Re.timerContainer,children:[i.jsx(ls,{size:14}),i.jsxs("span",{children:[j,"s"]})]})]}),i.jsx("div",{style:Re.progressBar,children:i.jsx("div",{style:Re.progressFill(T)})})]})})}const Yf={agent_start:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},agent_end:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},tool_call:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},tool_result:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},model_call:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},model_response:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},callback_error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"},state_change:{bg:"#3d0d1f",fg:"#fda4af",border:"#f43f5e"},transfer:{bg:"#0d2d3d",fg:"#7dd3fc",border:"#0ea5e9"},callback_start:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},callback_end:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"}},OC={agent_start:dc,agent_end:dc,tool_call:tn,tool_result:tn,model_call:Cu,model_response:Oo,state_change:wn,transfer:ax,callback_start:hn,callback_end:hn,callback_error:Yg},Xf=[{bg:"#0e7490",fg:"#e0f2fe"},{bg:"#6d28d9",fg:"#ede9fe"},{bg:"#047857",fg:"#d1fae5"},{bg:"#b91c1c",fg:"#fee2e2"},{bg:"#b45309",fg:"#fef3c7"},{bg:"#1d4ed8",fg:"#dbeafe"},{bg:"#be185d",fg:"#fce7f3"},{bg:"#4d7c0f",fg:"#ecfccb"},{bg:"#7c3aed",fg:"#ede9fe"},{bg:"#0f766e",fg:"#ccfbf1"},{bg:"#c2410c",fg:"#ffedd5"},{bg:"#4338ca",fg:"#e0e7ff"}],Zf=new Map;function Wo(e){if(e==="sandbox"||e==="system")return{bg:"#374151",fg:"#9ca3af"};let t=Zf.get(e);if(t===void 0){let n=0;for(let r=0;r<e.length;r++)n=(n<<5)-n+e.charCodeAt(r),n=n&n;t=Math.abs(n)%Xf.length,Zf.set(e,t)}return Xf[t]}function DC(e){var t,n,r,s,o,a,l,c,u,d,p,f,m,y,j,N,v,g,x,T,z,w,P,_,D,S,R,L,W;switch(e.event_type){case"agent_start":return`START ${e.agent_name}`;case"agent_end":return(t=e.data)!=null&&t.error?`END ${e.agent_name} [ERROR]`:`END ${e.agent_name}`;case"tool_call":const $=Object.entries(((n=e.data)==null?void 0:n.args)||{}).map(([H,A])=>{const q=A!=null?JSON.stringify(A):"null";return`${H}=${q.slice(0,500)}${q.length>500?"...":""}`}).join(", ")||"";return`CALL ${((r=e.data)==null?void 0:r.tool_name)||"unknown"}(${$.slice(0,1e3)}${$.length>1e3?"...":""})`;case"tool_result":const Z=(s=e.data)==null?void 0:s.result;let E="";if((a=(o=Z==null?void 0:Z.content)==null?void 0:o[0])!=null&&a.text)E=String(Z.content[0].text).slice(0,500);else if(typeof Z=="string")E=Z.slice(0,500);else if(Z!=null){const H=JSON.stringify(Z);E=H?H.slice(0,500):""}else E="";return`RESULT ${((l=e.data)==null?void 0:l.tool_name)||"unknown"} → ${E}${E.length>=500?"...":""}`;case"model_call":return`LLM_REQ ${((u=(c=e.data)==null?void 0:c.contents)==null?void 0:u.length)||0} msgs, ${((d=e.data)==null?void 0:d.tool_count)||0} tools`;case"model_response":const O=((f=(p=e.data)==null?void 0:p.response_content)==null?void 0:f.parts)||((m=e.data)==null?void 0:m.parts)||[],I=O.find(H=>(H==null?void 0:H.type)==="function_call");if(I)return`LLM_RSP → ${I.name||"unknown"}()`;const k=O.find(H=>(H==null?void 0:H.type)==="text");if(k!=null&&k.text){const H=String(k.text);return`LLM_RSP "${H.slice(0,50)}${H.length>50?"...":""}"`}return`LLM_RSP (${((y=e.data)==null?void 0:y.finish_reason)||"complete"})`;case"state_change":return`STATE ${Object.keys(((j=e.data)==null?void 0:j.state_delta)||{}).join(", ")}`;case"transfer":return`TRANSFER → ${((N=e.data)==null?void 0:N.target)||"unknown"}`;case"callback_start":const Q=((v=e.data)==null?void 0:v.callback_name)||"unknown",h=((g=e.data)==null?void 0:g.callback_type)||"";return Q==="network_approval"?`⏳ AWAITING APPROVAL ${((x=e.data)==null?void 0:x.host)||((T=e.data)==null?void 0:T.url)||""}`:`CALLBACK START ${h?`[${h}]`:""} ${Q}`;case"callback_end":const B=((z=e.data)==null?void 0:z.callback_name)||"unknown",C=((w=e.data)==null?void 0:w.callback_type)||"",G=(P=e.data)!=null&&P.error?" [ERROR]":"";return B==="network_approval"?((_=e.data)==null?void 0:_.action)==="deny"?`🚫 DENIED ${((D=e.data)==null?void 0:D.host)||""}`:`✅ APPROVED ${((S=e.data)==null?void 0:S.pattern)||((R=e.data)==null?void 0:R.host)||""}`:`CALLBACK END ${C?`[${C}]`:""} ${B}${G}`;case"callback_error":const xe=((L=e.data)==null?void 0:L.source)||"unknown",ye=((W=e.data)==null?void 0:W.error)||"Unknown error";return`⚠️ ERROR in ${xe}: ${ye.slice(0,50)}${ye.length>50?"...":""}`;default:return e.event_type.toUpperCase()}}function $C(e,t){const n=e-t;return n<1?`+${(n*1e3).toFixed(0)}ms`:n<60?`+${n.toFixed(2)}s`:`+${Math.floor(n/60)}m${(n%60).toFixed(0)}s`}function FC(e){const t={timestamp:"#71717a",bracket:"#a78bfa",ip:"#22d3ee",domain:"#34d399",url:"#60a5fa",method:"#f472b6",status:"#4ade80",statusError:"#f87171",number:"#fbbf24",keyword:"#c084fc",info:"#22d3ee",warning:"#fbbf24",error:"#f87171",debug:"#71717a"},n=[];let r=e,s=0;const o=(l,c)=>{l&&n.push(c?i.jsx("span",{style:{color:c},children:l},s++):i.jsx("span",{children:l},s++))},a=[{regex:/^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+Z?\s*)/,color:t.timestamp},{regex:/(\[[^\]]+\])/,color:t.bracket},{regex:/\b(GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS|CONNECT)\b/,color:t.method},{regex:/\b([23]\d{2})\s+(OK|Created|Accepted|No Content|Moved|Found|Not Modified)\b/,color:t.status},{regex:/\b([45]\d{2})\s+\w+/,color:t.statusError},{regex:/(<< \d{3} \w+)/,color:t.status},{regex:/(https?:\/\/[^\s]+)/,color:t.url},{regex:/(\s)(\/[a-zA-Z0-9_\-./]+)/,color:t.url,group:2},{regex:/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d+)/,color:t.ip},{regex:/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/,color:t.ip},{regex:/(sandbox-agent-[a-zA-Z0-9_-]+:\d+)/,color:t.domain},{regex:/(host\.docker\.internal:\d+)/,color:t.domain},{regex:/([a-zA-Z][a-zA-Z0-9-]*\.(?:com|org|net|io|dev|local|internal)(?::\d+)?)/,color:t.domain},{regex:/\b(\d+(?:\.\d+)?[kmgb])\b/i,color:t.number},{regex:/\b(INFO)\b/,color:t.info},{regex:/\b(WARNING|WARN)\b/,color:t.warning},{regex:/\b(ERROR|CRITICAL|FATAL)\b/,color:t.error},{regex:/\b(DEBUG)\b/,color:t.debug},{regex:/([a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*){2,})/,color:t.domain},{regex:/\b(client|server|connect|disconnect|completion|model|provider)\b/i,color:t.keyword}];for(;r.length>0;){let l=null;for(const{regex:c,color:u,group:d}of a){const p=r.match(c);if(p&&p.index!==void 0){const f=d?r.indexOf(p[d],p.index):p.index,m=d?p[d]:p[0];(!l||f<l.index)&&(l={index:f,length:m.length,text:m,color:u})}}if(l)l.index>0&&o(r.slice(0,l.index)),o(l.text,l.color),r=r.slice(l.index+l.length);else{o(r);break}}return i.jsx(i.Fragment,{children:n})}function BC({content:e}){const t=e.split(`
`);return i.jsx(i.Fragment,{children:t.map((n,r)=>i.jsx("div",{children:FC(n)},r))})}function UC({event:e}){var l,c,u,d,p,f,m,y,j,N,v,g,x,T,z,w,P,_,D,S,R;const[t,n]=b.useState(new Set(["instruction","messages","result","response","state_delta","data"])),[r,s]=b.useState(null),o=L=>{const W=new Set(t);W.has(L)?W.delete(L):W.add(L),n(W)},a=(L,W=0,U=!1)=>{const $="  ".repeat(W),Z="  ".repeat(W+1);if(L===null)return i.jsx("span",{className:"json-null",children:"null"});if(L===void 0)return i.jsx("span",{className:"json-undefined",children:"undefined"});if(typeof L=="boolean")return i.jsx("span",{className:"json-boolean",children:L.toString()});if(typeof L=="number")return i.jsx("span",{className:"json-number",children:L});if(typeof L=="string"){const E=L.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\t/g,"\\t"),O=()=>s(L);return E.length>300&&W>0?i.jsxs("span",{className:"json-string json-string-clickable",onClick:O,title:"Click to view as Markdown",children:['"',E.slice(0,300),'..." ',i.jsxs("span",{className:"json-truncated",children:["(",L.length," chars)"]})]}):i.jsxs("span",{className:"json-string json-string-clickable",onClick:O,title:"Click to view as Markdown",children:['"',E,'"']})}if(Array.isArray(L))return L.length===0?i.jsx("span",{className:"json-bracket",children:"[]"}):L.every(O=>O===null||typeof O!="object")&&L.length<=3?i.jsxs("span",{className:"json-inline",children:[i.jsx("span",{className:"json-bracket",children:"["}),L.map((O,I)=>i.jsxs("span",{children:[a(O,W+1,!0),I<L.length-1&&i.jsx("span",{className:"json-comma",children:", "})]},I)),i.jsx("span",{className:"json-bracket",children:"]"})]}):i.jsxs("span",{className:"json-block",children:[i.jsx("span",{className:"json-bracket",children:"["}),L.map((O,I)=>i.jsxs("span",{children:[`
`+Z,a(O,W+1),I<L.length-1&&i.jsx("span",{className:"json-comma",children:","})]},I)),`
`+$,i.jsx("span",{className:"json-bracket",children:"]"})]});if(typeof L=="object"){const E=Object.entries(L);return E.length===0?i.jsx("span",{className:"json-bracket",children:"{}"}):E.length<=2&&E.every(([,I])=>I===null||typeof I!="object")&&U?i.jsxs("span",{className:"json-inline",children:[i.jsx("span",{className:"json-bracket",children:"{"}),E.map(([I,k],V)=>i.jsxs("span",{children:[i.jsxs("span",{className:"json-key",children:['"',I,'"']}),i.jsx("span",{className:"json-colon",children:": "}),a(k,W+1,!0),V<E.length-1&&i.jsx("span",{className:"json-comma",children:", "})]},I)),i.jsx("span",{className:"json-bracket",children:"}"})]}):i.jsxs("span",{className:"json-block",children:[i.jsx("span",{className:"json-bracket",children:"{"}),E.map(([I,k],V)=>i.jsxs("span",{children:[`
`+Z,i.jsxs("span",{className:"json-key",children:['"',I,'"']}),i.jsx("span",{className:"json-colon",children:": "}),a(k,W+1),V<E.length-1&&i.jsx("span",{className:"json-comma",children:","})]},I)),`
`+$,i.jsx("span",{className:"json-bracket",children:"}"})]})}return String(L)};return i.jsxs("div",{className:"event-detail",children:[i.jsxs("div",{className:"detail-header",children:[i.jsx("span",{className:"detail-type",children:e.event_type}),i.jsx("span",{className:"detail-agent",style:{backgroundColor:Wo(e.agent_name).bg,color:Wo(e.agent_name).fg,padding:"2px 8px",borderRadius:"4px",fontWeight:600},children:e.agent_name}),i.jsx("span",{className:"detail-time",children:new Date(e.timestamp*1e3).toISOString()})]}),i.jsxs("div",{className:"detail-section",children:[i.jsxs("div",{className:"section-header",onClick:()=>o("data"),children:[t.has("data")?i.jsx(Et,{size:12}):i.jsx(zt,{size:12}),i.jsx("span",{children:"Event Data"})]}),t.has("data")&&i.jsx("div",{className:"section-content json-viewer",children:a(e.data)})]}),e.event_type==="agent_start"&&((l=e.data)==null?void 0:l.instruction)&&i.jsxs("div",{className:"detail-section",children:[i.jsxs("div",{className:"section-header",onClick:()=>o("instruction"),children:[t.has("instruction")?i.jsx(Et,{size:12}):i.jsx(zt,{size:12}),i.jsx("span",{children:"Instruction"}),i.jsxs("span",{className:"char-count",children:[e.data.instruction.length," chars"]})]}),t.has("instruction")&&i.jsx("div",{className:"section-content",children:i.jsx("pre",{className:"instruction-text",children:e.data.instruction})})]}),e.event_type==="model_call"&&((c=e.data)==null?void 0:c.contents)&&i.jsxs("div",{className:"detail-section",children:[i.jsxs("div",{className:"section-header",onClick:()=>o("messages"),children:[t.has("messages")?i.jsx(Et,{size:12}):i.jsx(zt,{size:12}),i.jsxs("span",{children:["Messages (",e.data.contents.length,")"]})]}),t.has("messages")&&i.jsx("div",{className:"section-content",children:e.data.contents.map((L,W)=>{var U;return i.jsxs("div",{className:"message-item",children:[i.jsx("span",{className:`message-role ${L.role}`,children:L.role}),i.jsx("div",{className:"message-parts",children:(U=L.parts)==null?void 0:U.map(($,Z)=>i.jsxs("div",{className:"message-part",children:[$.text&&i.jsx("pre",{children:$.text}),$.function_call&&i.jsxs("div",{className:"function-call",children:[i.jsx("strong",{children:$.function_call.name}),i.jsx("pre",{children:JSON.stringify($.function_call.args,null,2)})]}),$.function_response&&i.jsxs("div",{className:"function-response",children:[i.jsx("strong",{children:$.function_response.name}),i.jsx("pre",{children:JSON.stringify($.function_response.response,null,2)})]})]},Z))})]},W)})})]}),e.event_type==="tool_result"&&i.jsxs("div",{className:"detail-section",children:[i.jsxs("div",{className:"section-header",onClick:()=>o("result"),children:[t.has("result")?i.jsx(Et,{size:12}):i.jsx(zt,{size:12}),i.jsx("span",{children:"Tool Result"})]}),t.has("result")&&i.jsx("div",{className:"section-content",children:i.jsx("pre",{className:"result-content",children:((f=(p=(d=(u=e.data)==null?void 0:u.result)==null?void 0:d.content)==null?void 0:p[0])==null?void 0:f.text)||(typeof((m=e.data)==null?void 0:m.result)=="string"?e.data.result:JSON.stringify((y=e.data)==null?void 0:y.result,null,2))})})]}),e.event_type==="model_response"&&((j=e.data)==null?void 0:j.parts)&&i.jsxs("div",{className:"detail-section",children:[i.jsxs("div",{className:"section-header",onClick:()=>o("response"),children:[t.has("response")?i.jsx(Et,{size:12}):i.jsx(zt,{size:12}),i.jsxs("span",{children:["Response (",e.data.parts.length," part",e.data.parts.length!==1?"s":"",")"]}),e.data.token_counts&&i.jsxs("span",{className:"token-badge",children:[e.data.token_counts.input,"↑ ",e.data.token_counts.output,"↓"]})]}),t.has("response")&&i.jsx("div",{className:"section-content",children:e.data.parts.map((L,W)=>i.jsxs("div",{className:"response-part",children:[L.type==="text"&&L.text&&i.jsx("pre",{className:"response-text",children:L.text}),L.type==="function_call"&&i.jsxs("div",{className:"function-call",children:[i.jsxs("strong",{children:["→ ",L.name,"()"]}),L.args&&Object.keys(L.args).length>0&&i.jsx("pre",{children:JSON.stringify(L.args,null,2)})]}),L.thought&&i.jsx("div",{className:"thought-indicator",children:"💭 Thinking"})]},W))})]}),(e.event_type==="callback_start"||e.event_type==="callback_end")&&i.jsxs("div",{className:"detail-section",children:[i.jsxs("div",{className:"section-header",onClick:()=>o("callback_info"),children:[t.has("callback_info")?i.jsx(Et,{size:12}):i.jsx(zt,{size:12}),i.jsx("span",{children:"Callback Information"})]}),t.has("callback_info")&&i.jsxs("div",{className:"section-content",children:[i.jsxs("div",{children:[i.jsx("strong",{children:"Name:"})," ",((N=e.data)==null?void 0:N.callback_name)||"unknown"]}),i.jsxs("div",{children:[i.jsx("strong",{children:"Type:"})," ",((v=e.data)==null?void 0:v.callback_type)||"unknown"]}),i.jsxs("div",{children:[i.jsx("strong",{children:"Module Path:"})," ",((g=e.data)==null?void 0:g.module_path)||"unknown"]}),((x=e.data)==null?void 0:x.error)&&i.jsxs("div",{style:{color:"#ef4444",marginTop:"8px"},children:[i.jsxs("div",{children:[i.jsx("strong",{children:"Error:"})," ",e.data.error]}),((T=e.data)==null?void 0:T.error_type)&&i.jsxs("div",{style:{marginTop:"4px",fontSize:"0.9em",opacity:.8},children:[i.jsx("strong",{children:"Type:"})," ",e.data.error_type]}),((z=e.data)==null?void 0:z.stack_trace)&&i.jsxs("div",{style:{marginTop:"8px"},children:[i.jsx("strong",{children:"Stack Trace:"}),i.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"300px",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:e.data.stack_trace})]})]})]})]}),e.event_type==="callback_error"&&i.jsxs("div",{className:"detail-section",style:{borderColor:"#dc2626"},children:[i.jsxs("div",{className:"section-header",onClick:()=>o("error_info"),style:{color:"#fca5a5"},children:[t.has("error_info")?i.jsx(Et,{size:12}):i.jsx(zt,{size:12}),i.jsx("span",{children:"⚠️ Error Details"})]}),t.has("error_info")&&i.jsxs("div",{className:"section-content",style:{color:"#fca5a5"},children:[i.jsxs("div",{children:[i.jsx("strong",{children:"Source:"})," ",((w=e.data)==null?void 0:w.source)||"unknown"]}),i.jsxs("div",{children:[i.jsx("strong",{children:"Error Type:"})," ",((P=e.data)==null?void 0:P.error_type)||"unknown"]}),i.jsxs("div",{style:{marginTop:"8px"},children:[i.jsx("strong",{children:"Message:"})," ",((_=e.data)==null?void 0:_.error)||"No error message"]}),((D=e.data)==null?void 0:D.context)&&i.jsxs("div",{style:{marginTop:"8px"},children:[i.jsx("strong",{children:"Context:"})," ",e.data.context]}),((S=e.data)==null?void 0:S.traceback)&&i.jsxs("div",{style:{marginTop:"8px"},children:[i.jsx("strong",{children:"Stack Trace:"}),i.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"400px",whiteSpace:"pre-wrap",wordBreak:"break-word",color:"#fca5a5"},children:e.data.traceback})]})]})]}),e.event_type==="state_change"&&((R=e.data)==null?void 0:R.state_delta)&&i.jsxs("div",{className:"detail-section",children:[i.jsxs("div",{className:"section-header",onClick:()=>o("state_delta"),children:[t.has("state_delta")?i.jsx(Et,{size:12}):i.jsx(zt,{size:12}),i.jsxs("span",{children:["State Changes (",Object.keys(e.data.state_delta).length,")"]})]}),t.has("state_delta")&&i.jsx("div",{className:"section-content",children:Object.entries(e.data.state_delta).map(([L,W])=>i.jsxs("div",{className:"state-delta-item",children:[i.jsx("div",{className:"state-delta-key",children:L}),i.jsx("pre",{className:"state-delta-value",children:typeof W=="string"?W:JSON.stringify(W,null,2)})]},L))})]}),r&&i.jsx(WC,{content:r,onClose:()=>s(null)})]})}function WC({content:e,onClose:t}){return i.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.8)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2e3},onClick:t,children:i.jsxs("div",{style:{backgroundColor:"#1a1a1e",borderRadius:"8px",border:"1px solid #3f3f46",width:"90%",maxWidth:"1200px",height:"85%",display:"flex",flexDirection:"column",overflow:"hidden"},onClick:n=>n.stopPropagation(),children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[i.jsx(ti,{size:16}),i.jsx("span",{style:{fontWeight:600},children:"String Content"}),i.jsxs("span",{style:{color:"#71717a",fontSize:"12px"},children:["(",e.length," chars)"]})]}),i.jsx("button",{onClick:t,style:{background:"none",border:"none",color:"#a1a1aa",cursor:"pointer",padding:"4px",display:"flex",alignItems:"center"},children:i.jsx(ks,{size:18})})]}),i.jsx("div",{style:{flex:1,overflow:"auto",padding:"20px"},children:i.jsx("pre",{style:{fontSize:"12px",lineHeight:"1.5",color:"#e4e4e7",whiteSpace:"pre-wrap",wordBreak:"break-word",fontFamily:'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',margin:0},children:e})}),i.jsx("div",{style:{padding:"8px 16px",borderTop:"1px solid #3f3f46",backgroundColor:"#27272a",display:"flex",justifyContent:"flex-end",gap:"8px"},children:i.jsxs("button",{onClick:()=>navigator.clipboard.writeText(e),style:{background:"#3f3f46",border:"none",borderRadius:"4px",padding:"6px 12px",color:"#e4e4e7",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",fontSize:"12px"},children:[i.jsx(vs,{size:12}),"Copy"]})})]})})}function VC({content:e,title:t,onClose:n}){return i.jsxs("div",{className:"modal-overlay",onClick:n,children:[i.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[i.jsxs("div",{className:"modal-header",children:[i.jsx("h3",{children:t}),i.jsx("button",{className:"modal-close",onClick:n,children:"×"})]}),i.jsx("div",{className:"modal-body markdown-content",children:i.jsx(Zx,{children:e})})]}),i.jsx("style",{children:`
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
      `})]})}function HC({events:e,selectedEventIndex:t,project:n}){const[r,s]=b.useState(null),o=b.useMemo(()=>{var u;const l={};return(u=n==null?void 0:n.app)!=null&&u.state_keys&&n.app.state_keys.forEach(d=>{l[d.name]={value:void 0,timestamp:null,defined:!0,description:d.description,type:d.type}}),n!=null&&n.agents&&n.agents.forEach(d=>{if(d.type==="LlmAgent"&&d.output_key){const p=d.output_key;l[p]||(l[p]={value:void 0,timestamp:null,defined:!0,description:`Output from ${d.name}`,type:"string"})}}),(t!==null?e.slice(0,t+1):e).filter(d=>d.event_type==="state_change").forEach(d=>{var p;(p=d.data)!=null&&p.state_delta&&Object.entries(d.data.state_delta).forEach(([f,m])=>{var y;l[f]={...l[f],value:m,timestamp:d.timestamp,defined:((y=l[f])==null?void 0:y.defined)??!1}})}),l},[e,t,n]),a=Object.entries(o);return i.jsxs(i.Fragment,{children:[r&&i.jsx(VC,{content:r.content,title:r.title,onClose:()=>s(null)}),i.jsxs("div",{className:"state-snapshot",children:[i.jsx("style",{children:`
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
      `}),i.jsx("div",{className:"state-header",children:t!==null?`State after event #${t}`:e.length>0?"State at end of run":"Defined State Keys"}),a.length===0?i.jsx("div",{className:"state-empty",children:"No state keys defined"}):a.map(([l,{value:c,timestamp:u,defined:d,description:p,type:f}])=>i.jsxs("div",{className:`state-entry ${c===void 0?"unset":""}`,children:[i.jsxs("div",{className:"state-key",children:[l,f&&i.jsxs("span",{className:"state-type",children:["(",f,")"]})]}),i.jsx("div",{className:"state-value",onClick:()=>{if(c!==void 0){const m=typeof c=="string"?c:JSON.stringify(c,null,2);s({content:m,title:l})}},style:{cursor:c!==void 0?"pointer":"default"},title:c!==void 0?"Click to view in markdown viewer":void 0,children:c===void 0?"(not set)":typeof c=="string"?c:JSON.stringify(c,null,2)}),p&&i.jsx("div",{className:"state-desc",children:p}),u&&i.jsx("div",{className:"state-time",children:new Date(u*1e3).toLocaleTimeString()})]},l))]})]})}function dl(e){if(!e)return{text:"",isError:!1};if(e.success===!1)return{text:e.error||"Unknown error",isError:!0};let t=e.result||e;if(typeof t=="string")try{const n=t.replace(/'/g,'"').replace(/True/g,"true").replace(/False/g,"false").replace(/None/g,"null");t=JSON.parse(n)}catch{return{text:t,isError:!1}}return t.content&&Array.isArray(t.content)?{text:t.content.filter(r=>r.type==="text").map(r=>r.text).join(`
`),isError:t.isError===!0}:{text:typeof t=="string"?t:JSON.stringify(t,null,2),isError:!1}}function em(e,t){if(!t||!t.trim())return e;const n=t.trim();let r=e;try{r=JSON.parse(e)}catch{}if(n.startsWith("js:")){const s=n.slice(3).trim();try{const a=new Function("value","data",`return ${s}`)(e,r);return typeof a=="string"?a:JSON.stringify(a,null,2)}catch(o){return`[JS error: ${o}]`}}if(n.startsWith("."))try{const s=n.slice(1).split(".").filter(Boolean);let o=r;for(const a of s){const l=a.match(/^(\w+)?\[(\d+)\]$/);l?(l[1]&&(o=o[l[1]]),o=o[parseInt(l[2])]):o=o[a]}return o==null?"[No match]":typeof o=="string"?o:JSON.stringify(o,null,2)}catch(s){return`[Path error: ${s.message}]`}try{const o=new Function("value","data",`return ${n}`)(e,r);return typeof o=="string"?o:JSON.stringify(o,null,2)}catch(s){return`[Transform error: ${s.message}]`}}function qC({project:e,selectedEventIndex:t,sandboxMode:n}){var xe,ye;const{watches:r,updateWatch:s,addWatch:o,removeWatch:a,runEvents:l}=ut(),[c,u]=b.useState(!1),[d,p]=b.useState(null),[f,m]=b.useState({}),[y,j]=b.useState(new Set),[N,v]=b.useState(""),[g,x]=b.useState(""),[T,z]=b.useState({}),[w,P]=b.useState(""),[_,D]=b.useState([]),[S,R]=b.useState(null),[L,W]=b.useState(null),[U,$]=b.useState(!1);b.useEffect(()=>{_u().then(D).catch(console.error)},[]);const Z=b.useMemo(()=>{const H=e.mcp_servers||[],A=new Set(H.map(ee=>ee.name)),q=_.filter(ee=>!A.has(ee.name));return[...H,...q]},[e.mcp_servers,_]),E=b.useCallback(async H=>{if(!(f[H]||y.has(H))){j(A=>new Set([...A,H]));try{const A=await Se(`/projects/${e.id}/mcp-servers/${encodeURIComponent(H)}/test-connection`,{method:"POST"});A.success&&m(q=>({...q,[H]:A.tools}))}catch(A){console.error("Failed to load tools:",A)}finally{j(A=>{const q=new Set(A);return q.delete(H),q})}}},[e.id,f,y]);b.useEffect(()=>{var ee;if(d)return;if(!N||!g){z({});return}const A=(f[N]||[]).find(Y=>Y.name===g);if(!((ee=A==null?void 0:A.parameters)!=null&&ee.properties)){z({});return}const q={};Object.entries(A.parameters.properties).forEach(([Y,oe])=>{oe.type==="string"?q[Y]=oe.default||"":oe.type==="number"||oe.type==="integer"?q[Y]=oe.default||0:oe.type==="boolean"?q[Y]=oe.default||!1:q[Y]=oe.default||null}),z(q)},[N,g,f,d]);const O=()=>{p(null),v(""),x(""),z({}),P(""),R(null),W(null),u(!0)},I=H=>{if(p(H.id),v(H.serverName),x(H.toolName),z({...H.args}),P(H.transform||""),H.result){const{text:A}=dl(H.result);R(A),W(null)}else R(null),W(null);f[H.serverName]||E(H.serverName),u(!0)},k=async()=>{var A;if(!N||!g)return;$(!0),W(null);const H=((A=e.app)==null?void 0:A.id)||`app_${e.id}`;try{const q=await Se(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:N,tool_name:g,arguments:T,sandbox_mode:n,app_id:n?H:void 0})}),{text:ee,isError:Y}=dl(q);Y?(W(ee),R(null)):(R(ee),W(null))}catch(q){W(String(q)),R(null)}finally{$(!1)}},V=b.useMemo(()=>S?!w||!w.trim()?S:em(S,w):null,[S,w]),Q=()=>{if(!(!N||!g)){if(d){s(d,{serverName:N,toolName:g,args:{...T},transform:w||void 0});const H=r.find(A=>A.id===d);H&&B({...H,serverName:N,toolName:g,args:T,transform:w||void 0,history:H.history||[]})}else{const H={id:`watch-${Date.now()}`,serverName:N,toolName:g,args:{...T},transform:w||void 0,history:[]};o(H),B(H)}u(!1)}},h=H=>{a(H)},B=b.useCallback(async(H,A)=>{var oe;s(H.id,{isLoading:!0,error:void 0});const q=A??l.length-1,ee=Date.now(),Y=((oe=e.app)==null?void 0:oe.id)||`app_${e.id}`;try{const K=await Se(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:H.serverName,tool_name:H.toolName,arguments:H.args,sandbox_mode:n,app_id:n?Y:void 0})}),X={eventIndex:q,timestamp:ee,result:K},re=[...H.history||[],X];s(H.id,{result:K,isLoading:!1,lastRun:ee,history:re})}catch(K){const X={eventIndex:q,timestamp:ee,error:String(K)},re=[...H.history||[],X];s(H.id,{error:String(K),isLoading:!1,lastRun:ee,history:re})}},[e.id,(xe=e.app)==null?void 0:xe.id,s,l.length,n]),C=()=>{r.forEach(H=>B(H))},G=b.useMemo(()=>!N||!g?null:(f[N]||[]).find(A=>A.name===g),[N,g,f]);return i.jsxs("div",{className:"tool-watch-panel",children:[i.jsxs("div",{className:"watch-header",children:[i.jsx(ti,{size:14}),i.jsx("span",{children:"Tool Watch"}),i.jsx("span",{className:"watch-auto-badge",title:"Watches auto-refresh on every event",children:"⚡ Auto"}),i.jsxs("div",{className:"watch-actions",children:[i.jsx("button",{className:"watch-btn",onClick:C,title:"Refresh all",children:i.jsx(Xt,{size:12})}),i.jsx("button",{className:"watch-btn",onClick:O,title:"Add watch",children:i.jsx(Ke,{size:12})})]})]}),r.length===0?i.jsxs("div",{className:"watch-empty",children:[i.jsx(ti,{size:20,style:{opacity:.3}}),i.jsx("span",{children:"No watch expressions"}),i.jsxs("button",{className:"add-watch-btn",onClick:O,children:[i.jsx(Ke,{size:12})," Add Tool Watch"]})]}):i.jsx("div",{className:"watch-list",children:r.map(H=>{let A=H.result,q=H.error;if(t!==null&&H.history&&H.history.length>0){const X=H.history.filter(re=>re.eventIndex<=t);if(X.length>0){const re=X[X.length-1];A=re.result,q=re.error}else A=void 0,q=void 0}const{text:ee,isError:Y}=A?dl(A):{text:"",isError:!1},oe=A?em(ee,H.transform):"",K=q||Y;return i.jsxs("div",{className:`watch-item ${K?"error":""}`,children:[i.jsxs("div",{className:"watch-item-header",children:[i.jsxs("span",{className:"watch-expr",children:[i.jsx("span",{className:"watch-server",children:H.serverName}),i.jsx("span",{className:"watch-tool",children:H.toolName}),Object.keys(H.args).length>0&&i.jsxs("span",{className:"watch-args",children:["(",Object.entries(H.args).map(([X,re])=>`${X}=${JSON.stringify(re)}`).join(", "),")"]}),t!==null&&i.jsxs("span",{className:"watch-time-indicator",children:["@",t]})]}),i.jsxs("div",{className:"watch-item-actions",children:[i.jsx("button",{onClick:()=>I(H),title:"Edit watch",children:i.jsx(tn,{size:10})}),i.jsx("button",{onClick:()=>B(H),title:"Refresh",children:H.isLoading?i.jsx(Xt,{size:10,className:"spin"}):i.jsx(Xt,{size:10})}),i.jsx("button",{onClick:()=>h(H.id),title:"Remove",children:i.jsx(Fe,{size:10})})]})]}),i.jsx("div",{className:"watch-result",children:H.isLoading?i.jsx("span",{className:"loading",children:"Loading..."}):q?i.jsx("span",{className:"error",children:q}):A?i.jsx("pre",{className:Y?"error-text":"",children:oe}):i.jsx("span",{className:"no-result",children:t!==null?"No data at this event":"Not yet run"})})]},H.id)})}),c&&i.jsx("div",{className:"watch-dialog-overlay",onClick:()=>u(!1),children:i.jsxs("div",{className:"watch-dialog",onClick:H=>H.stopPropagation(),children:[i.jsxs("div",{className:"dialog-header",children:[i.jsx("span",{children:d?"Edit Watch":"Add Tool Watch"}),i.jsx("button",{onClick:()=>u(!1),children:i.jsx(ks,{size:14})})]}),i.jsxs("div",{className:"dialog-body",children:[i.jsxs("div",{className:"form-row",children:[i.jsx("label",{children:"MCP Server"}),i.jsxs("select",{value:N,onChange:H=>{v(H.target.value),d||x(""),H.target.value&&E(H.target.value)},children:[i.jsx("option",{value:"",children:"Select server..."}),Z.map(H=>i.jsx("option",{value:H.name,children:H.name},H.name))]})]}),i.jsxs("div",{className:"form-row",children:[i.jsx("label",{children:"Tool"}),i.jsxs("select",{value:g,onChange:H=>x(H.target.value),disabled:!N||y.has(N),children:[i.jsx("option",{value:"",children:y.has(N)?"Loading tools...":"Select tool..."}),(f[N]||[]).map(H=>i.jsx("option",{value:H.name,children:H.name},H.name))]})]}),(G==null?void 0:G.description)&&i.jsx("div",{className:"tool-desc",children:G.description}),((ye=G==null?void 0:G.parameters)==null?void 0:ye.properties)&&Object.keys(G.parameters.properties).length>0&&i.jsxs("div",{className:"tool-args",children:[i.jsx("label",{children:"Arguments"}),Object.entries(G.parameters.properties).map(([H,A])=>{var q,ee;return i.jsxs("div",{className:"arg-row",children:[i.jsxs("span",{className:"arg-name",children:[H,((q=G.parameters.required)==null?void 0:q.includes(H))&&i.jsx("span",{className:"required",children:"*"})]}),i.jsx("input",{type:A.type==="number"||A.type==="integer"?"number":"text",value:typeof T[H]=="object"?JSON.stringify(T[H]):T[H]??"",onChange:Y=>z(oe=>({...oe,[H]:Y.target.value})),placeholder:((ee=A.description)==null?void 0:ee.slice(0,40))||H})]},H)})]}),N&&g&&i.jsxs("div",{className:"test-section",children:[i.jsxs("div",{className:"test-header",children:[i.jsx("label",{children:"Test & Preview"}),i.jsxs("button",{className:"test-btn",onClick:k,disabled:U,children:[U?i.jsx(Xt,{size:12,className:"spin"}):i.jsx(Yn,{size:12}),U?"Running...":"Test Run"]})]}),L&&i.jsxs("div",{className:"test-result error",children:[i.jsx("span",{className:"test-label",children:"Error:"}),i.jsx("pre",{children:L})]}),S&&i.jsxs("div",{className:"test-result",children:[i.jsx("span",{className:"test-label",children:"Raw Result:"}),i.jsx("pre",{children:S})]})]}),i.jsxs("div",{className:"form-row transform-row",children:[i.jsx("label",{children:"Transform (optional)"}),i.jsx("input",{type:"text",value:w,onChange:H=>P(H.target.value),placeholder:"e.g., .items[0].name or .content[].text"}),i.jsxs("div",{className:"transform-hints",children:[i.jsx("span",{className:"hint-title",children:"Path:"}),i.jsx("code",{onClick:()=>P(".items[0].name"),children:".items[0].name"}),i.jsx("code",{onClick:()=>P(".content[0].text"),children:".content[0].text"}),i.jsx("code",{onClick:()=>P(".result.data"),children:".result.data"}),i.jsx("span",{className:"hint-title",children:"JS:"}),i.jsx("code",{onClick:()=>P("js:value.split('\\n')[0]"),children:"js:value.split('\\n')[0]"}),i.jsx("code",{onClick:()=>P("js:data.items?.length"),children:"js:data.items?.length"})]})]}),S&&w&&i.jsxs("div",{className:"transform-preview",children:[i.jsx("span",{className:"test-label",children:"Transform Preview:"}),i.jsx("pre",{className:V!=null&&V.startsWith("[Transform error")?"error":"",children:V})]})]}),i.jsxs("div",{className:"dialog-footer",children:[i.jsx("button",{className:"cancel-btn",onClick:()=>u(!1),children:"Cancel"}),i.jsx("button",{className:"add-btn",onClick:Q,disabled:!N||!g,children:d?"Save Changes":"Add Watch"})]})]})})]})}function JC(){var nd,rd;const{project:e,updateProject:t,isRunning:n,setIsRunning:r,runEvents:s,addRunEvent:o,clearRunEvents:a,clearWatchHistories:l,runAgentId:c,setRunAgentId:u,watches:d,updateWatch:p,currentSessionId:f,setCurrentSessionId:m}=ut(),[y,j]=b.useState(""),[N,v]=b.useState(null),[g,x]=b.useState(null),[T,z]=b.useState(null),[w,P]=b.useState(""),[_,D]=b.useState(new Set(["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_start","callback_end","callback_error"])),[S,R]=b.useState(()=>{const M=localStorage.getItem("sandboxMode");return M!==null?M==="true":!0});b.useEffect(()=>{localStorage.setItem("sandboxMode",String(S))},[S]);const[L,W]=b.useState(null),[U,$]=b.useState(!1),[Z,E]=b.useState({}),[O,I]=b.useState(!1),[k,V]=b.useState("agent"),Q=b.useRef(null),[h,B]=b.useState(!0),[C,G]=b.useState(!0),[xe,ye]=b.useState(!1),[H,A]=b.useState(360),[q,ee]=b.useState(!1),[Y,oe]=b.useState(!1),[K,X]=b.useState([]),re=b.useRef(null);b.useEffect(()=>{const M=localStorage.getItem("promptHistory");if(M)try{const se=JSON.parse(M),de=Object.entries(se).map(([me,ce])=>({prompt:me,count:ce})).sort((me,ce)=>ce.count-me.count);X(de)}catch(se){console.error("Failed to parse prompt history:",se)}},[]);const ve=b.useCallback(M=>{const se=M.trim();if(!se)return;const de=localStorage.getItem("promptHistory"),me=de?JSON.parse(de):{};me[se]=(me[se]||0)+1,localStorage.setItem("promptHistory",JSON.stringify(me));const ce=Object.entries(me).map(([Te,Le])=>({prompt:Te,count:Le})).sort((Te,Le)=>Le.count-Te.count);X(ce)},[]),we=b.useMemo(()=>{const M=y.toLowerCase().trim();return K.filter(se=>!M||se.prompt.toLowerCase().includes(M)).slice(0,10)},[K,y]),[ze,je]=b.useState([60,80,100,80,1]),[F,ae]=b.useState(null),fe=b.useRef(0),ge=b.useRef(0),[J,te]=b.useState([]),[he,le]=b.useState(null),[_e,Ze]=b.useState(!1),rn=b.useRef(0),Dt=b.useCallback(async(M,se)=>{var Te;if(!e)return;p(M.id,{isLoading:!0,error:void 0});const de=se??s.length-1,me=Date.now(),ce=((Te=e.app)==null?void 0:Te.id)||`app_${e.id}`;try{const Le=await Se(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:M.serverName,tool_name:M.toolName,arguments:M.args,sandbox_mode:S,app_id:S?ce:void 0})}),xn={eventIndex:de,timestamp:me,result:Le},on=[...M.history||[],xn];p(M.id,{result:Le,isLoading:!1,lastRun:me,history:on})}catch(Le){const xn={eventIndex:de,timestamp:me,error:String(Le)},on=[...M.history||[],xn];p(M.id,{error:String(Le),isLoading:!1,lastRun:me,history:on})}},[e==null?void 0:e.id,(nd=e==null?void 0:e.app)==null?void 0:nd.id,p,s.length,S]);b.useEffect(()=>{if(s.length>rn.current&&d.length>0){const M=s.length-1;d.forEach(se=>{se.isLoading||Dt(se,M)})}rn.current=s.length},[s.length,d,Dt]),b.useEffect(()=>{c!==null&&(zn(c),u(null))},[c,u]);const[Jt,zn]=b.useState(null),et=b.useRef(null),sn=b.useRef(null);b.useEffect(()=>{if(!q)return;const M=de=>{if(!sn.current)return;const ce=sn.current.getBoundingClientRect().right-de.clientX;A(Math.min(600,Math.max(200,ce)))},se=()=>{ee(!1)};return document.addEventListener("mousemove",M),document.addEventListener("mouseup",se),()=>{document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",se)}},[q]),b.useEffect(()=>{if(F===null)return;const M=de=>{const me=de.clientX-fe.current,ce=Math.max(40,ge.current+me);je(Te=>{const Le=[...Te];return Le[F]=ce,Le})},se=()=>{ae(null)};return document.addEventListener("mousemove",M),document.addEventListener("mouseup",se),document.body.style.cursor="col-resize",document.body.style.userSelect="none",()=>{document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",se),document.body.style.cursor="",document.body.style.userSelect=""}},[F]);const gt=(M,se)=>{se.preventDefault(),fe.current=se.clientX,ge.current=ze[M],ae(M)},Yu=ze.map((M,se)=>se===ze.length-1?`minmax(${M}px, 1fr)`:`${M}px`).join(" "),ay=b.useMemo(()=>s.length===0?{min:0,max:0}:{min:s[0].timestamp,max:s[s.length-1].timestamp},[s]),St=b.useMemo(()=>s.filter((M,se)=>{var de,me,ce;if(T&&(M.timestamp<T[0]||M.timestamp>T[1])||_.size>0&&!_.has(M.event_type))return!1;if(h&&M.event_type==="model_response"){const Te=((me=(de=M.data)==null?void 0:de.response_content)==null?void 0:me.parts)||((ce=M.data)==null?void 0:ce.parts)||[],Le=Te.some(on=>on.type==="function_call"),xn=Te.some(on=>on.type==="text");if(!Le&&!xn)return!1}return!(w&&!JSON.stringify(M).toLowerCase().includes(w.toLowerCase()))}),[s,T,_,w,h]),Ss=b.useMemo(()=>{var me;let M=0,se=0;const de=g!==null?g+1:s.length;for(let ce=0;ce<de;ce++){const Te=s[ce];Te.event_type==="model_response"&&((me=Te.data)!=null&&me.token_counts)&&(M+=Te.data.token_counts.input||0,se+=Te.data.token_counts.output||0)}return{input:M,output:se,total:M+se}},[s,g]),Xu=g!==null?s[g]:null;b.useEffect(()=>{if(!e){te([]);return}(async()=>{Ze(!0);try{const se=await cc(e.id);te(se)}catch(se){console.error("Failed to load sessions:",se),te([])}finally{Ze(!1)}})()},[e]);const ga=b.useCallback(async M=>{if(!e){le(null);return}if(!M){a(),l(),m(null),le(null),x(null),z(null);return}try{const se=await Og(e.id,M);a(),l(),m(se.id),le(M),x(null),z(null);for(const de of se.events)o(de)}catch(se){alert(`Failed to load session: ${se.message||"Unknown error"}`)}},[e,a,l,m,o]);b.useEffect(()=>{if(!e||J.length===0||_e)return;const se=new URLSearchParams(window.location.search).get("session");if(se)if(J.some(me=>me.id===se)){ga(se);const me=window.location.pathname;window.history.replaceState({},"",me)}else console.warn(`Session ${se} not found in available sessions`)},[e,J,_e,ga]),b.useEffect(()=>{n&&et.current&&(et.current.scrollTop=et.current.scrollHeight)},[s.length,n]);const ci=b.useCallback(M=>{const se=M??y;if(!e||!se.trim()||n)return;ve(se),oe(!1),j(se),N&&(N.close(),v(null)),f||(a(),l(),le(null)),r(!0),x(null),z(null);const de=Bg(e.id);v(de),de.onopen=()=>{de.send(JSON.stringify({message:se,agent_id:Jt||void 0,session_id:f||void 0,sandbox_mode:S}))},de.onmessage=me=>{var Te;const ce=JSON.parse(me.data);if(ce.event_type==="agent_start"&&((Te=ce.data)!=null&&Te.session_id)){const Le=ce.data.session_id;ce.data.session_reused,m(Le),Le&&J.some(xn=>xn.id===Le)&&le(Le)}else if(ce.type==="session_started")m(ce.session_id),ce.session_id&&J.some(Le=>Le.id===ce.session_id)&&le(ce.session_id);else if(ce.type==="sandbox_starting")o({timestamp:Date.now()/1e3,event_type:"agent_start",agent_name:"sandbox",data:{message:"Starting Docker sandbox..."}});else if(ce.type==="sandbox_started")o({timestamp:Date.now()/1e3,event_type:"agent_start",agent_name:"sandbox",data:{message:`Sandbox started (ID: ${ce.sandbox_id})`}});else if(ce.type==="sandbox_response")o({timestamp:Date.now()/1e3,event_type:"model_response",agent_name:"sandbox",data:ce.data});else if(ce.event_type==="approval_required"||ce.type==="network_request"&&ce.event_type==="approval_required"){const Le={id:ce.id,method:ce.method||"GET",url:ce.url,host:ce.host,source:ce.source||"agent",headers:ce.headers||{},timeout:ce.timeout||30};W(Le),o({timestamp:Date.now()/1e3,event_type:"callback_start",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`⚠️ Network request to ${ce.host} requires approval`,host:ce.host,url:ce.url}})}else ce.type==="completed"?(r(!1),de.close()):ce.type==="error"?(r(!1),o({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:ce.error}})):o(ce)},de.onerror=()=>{r(!1),o({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:"WebSocket connection error"}})},de.onclose=()=>{r(!1)}},[e,y,n,N,a,r,o,Jt,f,S,ve]),ly=b.useCallback(()=>{N==null||N.close(),r(!1)},[N,r]),cy=b.useCallback(async(M,se,de)=>{var on,id,sd,od,ad,ld,cd,ud,dd,pd,fd,md,hd,gd,xd,yd,vd,bd,kd,jd,wd,_d,Sd,Cd;if(!L||!e)return;const me=((on=e.app)==null?void 0:on.id)||e.id,ce=M?"allow_pattern":"allow_once",Te=M||L.host,Le=se||"exact",xn=de?`/sandbox/${me}/approval?project_id=${e.id}`:`/sandbox/${me}/approval`;try{if(await Se(xn,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:L.id,action:ce,pattern:Te,pattern_type:Le,persist:de||!1})}),de&&ce==="allow_pattern"){const ya=((od=(sd=(id=e.app)==null?void 0:id.sandbox)==null?void 0:sd.allowlist)==null?void 0:od.user)||[],ky={id:`pattern_${Date.now().toString(36)}`,pattern:Te,pattern_type:Le,source:"approved",added_at:new Date().toISOString()};t({app:{...e.app,sandbox:{...(ad=e.app)==null?void 0:ad.sandbox,enabled:((cd=(ld=e.app)==null?void 0:ld.sandbox)==null?void 0:cd.enabled)??!1,allowlist:{auto:((pd=(dd=(ud=e.app)==null?void 0:ud.sandbox)==null?void 0:dd.allowlist)==null?void 0:pd.auto)||[],user:[...ya,ky]},unknown_action:((md=(fd=e.app)==null?void 0:fd.sandbox)==null?void 0:md.unknown_action)??"ask",approval_timeout:((gd=(hd=e.app)==null?void 0:hd.sandbox)==null?void 0:gd.approval_timeout)??30,agent_memory_limit_mb:((yd=(xd=e.app)==null?void 0:xd.sandbox)==null?void 0:yd.agent_memory_limit_mb)??512,agent_cpu_limit:((bd=(vd=e.app)==null?void 0:vd.sandbox)==null?void 0:bd.agent_cpu_limit)??1,mcp_memory_limit_mb:((jd=(kd=e.app)==null?void 0:kd.sandbox)==null?void 0:jd.mcp_memory_limit_mb)??256,mcp_cpu_limit:((_d=(wd=e.app)==null?void 0:wd.sandbox)==null?void 0:_d.mcp_cpu_limit)??.5,run_timeout:((Cd=(Sd=e.app)==null?void 0:Sd.sandbox)==null?void 0:Cd.run_timeout)??300}}})}o({timestamp:Date.now()/1e3,event_type:"callback_end",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`✅ Approved: ${Te}`,pattern:Te,action:ce}})}catch(ya){console.error("Failed to approve:",ya)}W(null)},[L,e,o,t]),uy=b.useCallback(async()=>{var se;if(!L||!e)return;const M=((se=e.app)==null?void 0:se.id)||e.id;try{await Se(`/sandbox/${M}/approval`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:L.id,action:"deny"})}),o({timestamp:Date.now()/1e3,event_type:"callback_end",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`❌ Denied: ${L.host}`,host:L.host,action:"deny"}})}catch(de){console.error("Failed to deny:",de)}W(null)},[L,e,o]),ui=b.useCallback(async(M=!0)=>{var de;if(!e)return;const se=((de=e.app)==null?void 0:de.id)||`app_${e.id}`;M&&I(!0);try{const[me,ce]=await Promise.all([Se(`/sandbox/${se}/logs?container=agent&tail=500`).catch(()=>null),Se(`/sandbox/${se}/logs?container=gateway&tail=500`).catch(()=>null)]);E({agent:(me==null?void 0:me.logs)||(me==null?void 0:me.error)||"No logs available",gateway:(ce==null?void 0:ce.logs)||(ce==null?void 0:ce.error)||"No logs available"})}catch(me){console.error("Failed to fetch logs:",me),E({agent:`Error fetching logs: ${me}`,gateway:`Error fetching logs: ${me}`})}finally{M&&I(!1)}},[e]),dy=b.useCallback(()=>{$(!0),ui()},[ui]);b.useEffect(()=>{U&&Q.current&&!O&&setTimeout(()=>{Q.current&&(Q.current.scrollTop=Q.current.scrollHeight)},50)},[U,k,Z,O]),b.useEffect(()=>{if(!U)return;const M=setInterval(()=>{ui(!1)},3e3);return()=>clearInterval(M)},[U,ui]),b.useEffect(()=>{const M=se=>{if((se.metaKey||se.ctrlKey)&&se.key==="Enter"){se.preventDefault(),ci();return}if(se.key==="ArrowDown"||se.key==="ArrowUp"){if(se.target instanceof HTMLInputElement||se.target instanceof HTMLTextAreaElement||(se.preventDefault(),St.length===0))return;if(se.key==="ArrowDown")if(g===null){const de=s.indexOf(St[0]);x(de)}else{const de=St.findIndex(me=>s.indexOf(me)===g);if(de<St.length-1){const me=s.indexOf(St[de+1]);x(me)}}else if(se.key==="ArrowUp")if(g===null){const de=s.indexOf(St[St.length-1]);x(de)}else{const de=St.findIndex(me=>s.indexOf(me)===g);if(de>0){const me=s.indexOf(St[de-1]);x(me)}}}};return window.addEventListener("keydown",M),()=>window.removeEventListener("keydown",M)},[ci,St,g,s]);const py=b.useCallback(()=>{var ce;if(s.length===0)return;const M={version:1,exportedAt:new Date().toISOString(),projectId:e==null?void 0:e.id,projectName:e==null?void 0:e.name,agentId:Jt||((ce=e==null?void 0:e.app)==null?void 0:ce.root_agent_id),events:s},se=new Blob([JSON.stringify(M,null,2)],{type:"application/json"}),de=URL.createObjectURL(se),me=document.createElement("a");me.href=de,me.download=`run-${(e==null?void 0:e.name)||"export"}-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,document.body.appendChild(me),me.click(),document.body.removeChild(me),URL.revokeObjectURL(de)},[s,e,Jt]),fy=b.useCallback(async()=>{if(!f||!e){alert("No active session to save");return}try{const M=await Mg(f);if(M.success){alert(M.message||"Session saved to memory successfully");try{const se=await cc(e.id);te(se)}catch{}}else alert(`Failed to save to memory: ${M.error||"Unknown error"}`)}catch(M){alert(`Error saving to memory: ${M.message||"Unknown error"}`)}},[f,e]),[my,Cs]=b.useState(!1),[hy,gy]=b.useState([]),[di,Zu]=b.useState(""),[xa,xy]=b.useState("Test Case from Session"),[ed,td]=b.useState(!1),yy=b.useCallback(async()=>{if(!f||!e){alert("No active session to create test case from");return}try{const M=await Se(`/projects/${e.id}/eval-sets`);if(gy(M.eval_sets||[]),!M.eval_sets||M.eval_sets.length===0){confirm(`No evaluation sets found. Would you like to create one first?

Go to the Evals tab to create an evaluation set.`)&&(window.location.href=`/project/${e.id}/evals`);return}Zu(M.eval_sets[0].id),Cs(!0)}catch(M){alert(`Error loading eval sets: ${M.message||"Unknown error"}`)}},[f,e]),vy=b.useCallback(async()=>{if(!f||!e||!di){alert("Please select an evaluation set");return}td(!0);try{const M=await Se(`/projects/${e.id}/session-to-eval-case`,{method:"POST",body:JSON.stringify({session_id:f,eval_set_id:di,case_name:xa})});Cs(!1),alert(`Test case "${M.eval_case.name}" created successfully!

Token count: ${M.session_token_count.toLocaleString()} tokens

Go to the Evals tab to view and edit the test case.`)}catch(M){alert(`Error creating test case: ${M.message||"Unknown error"}`)}finally{td(!1)}},[f,e,di,xa]),by=b.useCallback(()=>{const M=document.createElement("input");M.type="file",M.accept=".json",M.onchange=async se=>{var me;const de=(me=se.target.files)==null?void 0:me[0];if(de)try{const ce=await de.text(),Te=JSON.parse(ce);if(!Te.events||!Array.isArray(Te.events)){alert("Invalid run file: missing events array");return}a(),l(),x(null),z(null),Te.events.forEach(Le=>{o(Le)})}catch(ce){alert(`Failed to load run file: ${ce}`)}},M.click()},[a,l,o]);return b.useEffect(()=>{if(g!==null){const M=document.querySelector(".event-row.selected");M==null||M.scrollIntoView({behavior:"smooth",block:"nearest"})}},[g]),e?i.jsxs("div",{className:`run-panel ${q?"resizing":""}`,children:[i.jsx("style",{children:`
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
      `}),i.jsxs("div",{className:"input-area",children:[i.jsxs("select",{className:"agent-selector",value:Jt||"",onChange:M=>zn(M.target.value||null),disabled:n,title:"Select which agent to run",children:[i.jsx("option",{value:"",children:e.app.root_agent_id?`Root: ${((rd=e.agents.find(M=>M.id===e.app.root_agent_id))==null?void 0:rd.name)||e.app.root_agent_id}`:"No root agent"}),e.agents.filter(M=>M.id!==e.app.root_agent_id).map(M=>i.jsxs("option",{value:M.id,children:[M.name," (",M.type.replace("Agent",""),")"]},M.id))]}),i.jsxs("select",{className:"agent-selector",value:he||"",onChange:M=>ga(M.target.value||null),disabled:n||_e,style:{minWidth:180},title:"Load a saved session",children:[i.jsx("option",{value:"",children:_e?"Loading...":"Load Session..."}),J.map(M=>{const se=new Date(M.started_at*1e3),de=M.duration?`${M.duration.toFixed(1)}s`:"?";return i.jsxs("option",{value:M.id,children:[se.toLocaleString()," (",M.event_count," events, ",de,")"]},M.id)})]}),i.jsxs("div",{style:{position:"relative",flex:1,display:"flex"},children:[i.jsx("input",{ref:re,type:"text",placeholder:"Enter your query...",value:y,onChange:M=>j(M.target.value),onFocus:()=>oe(!0),onBlur:()=>setTimeout(()=>oe(!1),150),onKeyDown:M=>{M.key==="Enter"&&!M.shiftKey?ci():M.key==="Escape"&&oe(!1)},disabled:n,style:{flex:1}}),Y&&we.length>0&&i.jsx("div",{style:{position:"absolute",top:"100%",left:0,right:0,background:"#18181b",border:"1px solid #3f3f46",borderRadius:"6px",marginTop:"4px",maxHeight:"240px",overflowY:"auto",zIndex:100,boxShadow:"0 4px 12px rgba(0,0,0,0.4)"},children:we.map((M,se)=>i.jsxs("div",{style:{padding:"8px 12px",fontSize:"12px",color:"#e4e4e7",cursor:"pointer",borderBottom:se<we.length-1?"1px solid #27272a":"none",display:"flex",justifyContent:"space-between",alignItems:"center"},onMouseDown:de=>{de.preventDefault(),ci(M.prompt)},onMouseEnter:de=>{de.currentTarget.style.background="#27272a"},onMouseLeave:de=>{de.currentTarget.style.background="transparent"},children:[i.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1,marginRight:"8px"},children:M.prompt}),i.jsxs("span",{style:{fontSize:"10px",color:"#71717a",flexShrink:0},children:["×",M.count]})]},se))})]}),n?i.jsxs("button",{className:"stop",onClick:ly,children:[i.jsx(M0,{size:14}),"Stop"]}):i.jsxs("button",{onClick:ci,disabled:!y.trim(),children:[i.jsx(Yn,{size:14}),"Run"]}),i.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"4px",marginLeft:"12px",fontSize:"11px",color:S?"#22d3ee":"#71717a",cursor:"pointer"},title:"Run in isolated Docker container",children:[i.jsx("input",{type:"checkbox",checked:S,onChange:M=>R(M.target.checked),disabled:n,style:{accentColor:"#22d3ee"}}),"🐳 Sandbox"]}),S&&i.jsx("button",{onClick:dy,style:{background:"transparent",border:"1px solid #3f3f46",borderRadius:"4px",padding:"2px 8px",marginLeft:"8px",fontSize:"11px",color:"#a1a1aa",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"},title:"View container logs",children:"📋 Logs"})]}),i.jsxs("div",{className:"toolbar",children:[i.jsxs("div",{className:"toolbar-section",children:[i.jsx(nx,{size:12,style:{color:"#71717a"}}),i.jsx("input",{type:"text",placeholder:"Filter events...",value:w,onChange:M=>P(M.target.value)})]}),i.jsx("div",{className:"toolbar-divider"}),i.jsxs("div",{className:"toolbar-section",children:[["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_error"].map(M=>i.jsx("button",{className:`filter-chip ${_.has(M)?"active":""}`,onClick:()=>{const se=new Set(_);se.has(M)?se.delete(M):se.add(M),D(se)},children:M.replace("_"," ")},M)),i.jsx("button",{className:`filter-chip ${_.has("callback_start")&&_.has("callback_end")?"active":""}`,onClick:()=>{const M=new Set(_);M.has("callback_start")&&M.has("callback_end")?(M.delete("callback_start"),M.delete("callback_end")):(M.add("callback_start"),M.add("callback_end")),D(M)},title:"Show/hide callback events",children:"callback"}),i.jsx("button",{className:`filter-chip ${h?"active":""}`,onClick:()=>B(!h),title:"Hide LLM_RESP (complete) events",children:"hide (complete)"})]}),i.jsx("div",{className:"toolbar-divider"}),i.jsxs("div",{className:"toolbar-section",children:[i.jsxs("button",{className:`toolbar-btn ${C?"active":""}`,onClick:()=>G(!C),children:[i.jsx(wn,{size:12}),"State"]}),i.jsxs("button",{className:`toolbar-btn ${xe?"active":""}`,onClick:()=>ye(!xe),children:[i.jsx(Ja,{size:12}),"Tools"]})]}),i.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:[i.jsxs("span",{style:{fontSize:10,color:"#71717a"},children:[St.length," / ",s.length," events"]}),T&&i.jsx("button",{className:"toolbar-btn",onClick:()=>z(null),children:"Clear Range"})]})]}),i.jsxs("div",{className:"main-content",ref:sn,children:[i.jsxs("div",{className:"event-list-container",children:[i.jsxs("div",{className:"event-list-header",style:{gridTemplateColumns:Yu},children:[i.jsxs("div",{className:"header-cell",children:[i.jsx("span",{children:"#"}),i.jsx("div",{className:`column-resize-handle ${F===0?"active":""}`,onMouseDown:M=>gt(0,M)})]}),i.jsxs("div",{className:"header-cell",children:[i.jsx("span",{children:"Time"}),i.jsx("div",{className:`column-resize-handle ${F===1?"active":""}`,onMouseDown:M=>gt(1,M)})]}),i.jsxs("div",{className:"header-cell",children:[i.jsx("span",{children:"Agent"}),i.jsx("div",{className:`column-resize-handle ${F===2?"active":""}`,onMouseDown:M=>gt(2,M)})]}),i.jsxs("div",{className:"header-cell",children:[i.jsx("span",{children:"Type"}),i.jsx("div",{className:`column-resize-handle ${F===3?"active":""}`,onMouseDown:M=>gt(3,M)})]}),i.jsx("div",{className:"header-cell",children:i.jsx("span",{children:"Info"})})]}),i.jsx("div",{className:"event-list",ref:et,children:St.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx(tx,{size:24}),i.jsx("span",{children:s.length===0?"No events yet":"No matching events"})]}):St.map((M,se)=>{const de=s.indexOf(M),me=Yf[M.event_type]||Yf.error,ce=OC[M.event_type]||Oo;return i.jsxs("div",{className:`event-row ${g===de?"selected":""}`,style:{background:me.bg,gridTemplateColumns:Yu},onClick:()=>x(de),onDoubleClick:()=>{G(!1),ye(!1)},children:[i.jsx("div",{className:"index",children:de}),i.jsx("div",{className:"time",style:{color:me.fg},children:$C(M.timestamp,ay.min)}),i.jsx("div",{className:"agent",children:i.jsx("span",{className:"agent-badge",style:{backgroundColor:Wo(M.agent_name).bg,color:Wo(M.agent_name).fg},children:M.agent_name})}),i.jsxs("div",{className:"type",style:{color:me.fg},children:[i.jsx(ce,{size:10}),M.event_type.split("_")[0]]}),i.jsx("div",{className:"summary",children:DC(M)})]},de)})})]}),i.jsxs("div",{className:"side-panel-container",style:{width:H},children:[i.jsx("div",{className:`resize-handle ${q?"active":""}`,onMouseDown:()=>ee(!0)}),i.jsxs("div",{className:"side-panel",style:{width:H-4},children:[i.jsxs("div",{className:"side-panel-tabs",children:[i.jsxs("button",{className:`side-panel-tab ${!C&&!xe?"active":""}`,onClick:()=>{G(!1),ye(!1)},children:[i.jsx(ti,{size:12,style:{marginRight:4}}),"Details"]}),i.jsxs("button",{className:`side-panel-tab ${C?"active":""}`,onClick:()=>{G(!0),ye(!1)},children:[i.jsx(wn,{size:12,style:{marginRight:4}}),"State"]}),i.jsxs("button",{className:`side-panel-tab ${xe?"active":""}`,onClick:()=>{ye(!0),G(!1)},children:[i.jsx(Ja,{size:12,style:{marginRight:4}}),"Tools"]})]}),i.jsx("div",{className:"side-panel-content",children:xe?i.jsx(qC,{project:e,selectedEventIndex:g,sandboxMode:S}):C?i.jsx(HC,{events:s,selectedEventIndex:g,project:e}):Xu?i.jsx(UC,{event:Xu}):i.jsxs("div",{className:"empty-state",children:[i.jsx(ti,{size:24}),i.jsx("span",{children:"Select an event to view details"})]})})]})]})]}),i.jsxs("div",{className:"stats-bar",children:[i.jsxs("div",{className:"stat-item",children:[i.jsx("span",{children:"Events:"}),i.jsx("span",{className:"stat-value",children:s.length})]}),i.jsxs("div",{className:"stat-item",children:[i.jsx("span",{children:"Tool Calls:"}),i.jsx("span",{className:"stat-value",children:s.filter(M=>M.event_type==="tool_call").length})]}),i.jsxs("div",{className:"stat-item",children:[i.jsx("span",{children:"Model Calls:"}),i.jsx("span",{className:"stat-value",children:s.filter(M=>M.event_type==="model_call").length})]}),i.jsxs("div",{className:"stat-item",children:[i.jsx("span",{children:"Callbacks:"}),i.jsx("span",{className:"stat-value",children:s.filter(M=>M.event_type==="callback_start").length})]}),i.jsxs("div",{className:"stat-item",children:[i.jsx("span",{children:"State Changes:"}),i.jsx("span",{className:"stat-value",children:s.filter(M=>M.event_type==="state_change").length})]}),s.length>0&&i.jsxs("div",{className:"stat-item",children:[i.jsx("span",{children:"Duration:"}),i.jsxs("span",{className:"stat-value",children:[((s[s.length-1].timestamp-s[0].timestamp)*1e3).toFixed(0),"ms"]})]}),Ss.total>0&&i.jsx("div",{className:"stat-item token-stats",children:i.jsxs("span",{className:"stat-value token-value",children:[i.jsxs("span",{className:"token-in",title:"Input tokens",children:[Ss.input.toLocaleString(),"↑"]}),i.jsxs("span",{className:"token-out",title:"Output tokens",children:[Ss.output.toLocaleString(),"↓"]}),i.jsx("span",{className:"token-total",title:"Total tokens",children:Ss.total.toLocaleString()})]})}),i.jsx("div",{className:"stats-bar-spacer"}),i.jsxs("button",{className:"stats-bar-btn",onClick:by,title:"Load a saved run",children:[i.jsx(ca,{size:12}),"Load"]}),i.jsxs("button",{className:"stats-bar-btn",onClick:py,disabled:s.length===0,title:"Save current run to file",children:[i.jsx(bs,{size:12}),"Save"]}),i.jsxs("button",{className:"stats-bar-btn",onClick:fy,disabled:!f||s.length===0,title:"Save current session to memory",children:[i.jsx(wn,{size:12}),"Save to Memory"]}),i.jsxs("button",{className:"stats-bar-btn",onClick:yy,disabled:!f||s.length===0,title:"Create evaluation test case from this session",style:{background:"rgba(var(--accent-primary-rgb), 0.15)"},children:[i.jsx(fc,{size:12}),"Create Test Case"]})]}),my&&i.jsx("div",{className:"dialog-overlay",style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>Cs(!1),children:i.jsxs("div",{className:"dialog-content",style:{background:"var(--bg-secondary)",borderRadius:"var(--radius-md)",padding:24,width:400,maxWidth:"90vw",border:"1px solid var(--border-color)"},onClick:M=>M.stopPropagation(),children:[i.jsxs("h3",{style:{marginBottom:16,display:"flex",alignItems:"center",gap:8},children:[i.jsx(fc,{size:18}),"Create Test Case from Session"]}),i.jsxs("div",{style:{marginBottom:16},children:[i.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Test Case Name"}),i.jsx("input",{type:"text",value:xa,onChange:M=>xy(M.target.value),placeholder:"Enter test case name",style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"}})]}),i.jsxs("div",{style:{marginBottom:20},children:[i.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Add to Evaluation Set"}),i.jsx("select",{value:di,onChange:M=>Zu(M.target.value),style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"},children:hy.map(M=>i.jsx("option",{value:M.id,children:M.name},M.id))})]}),i.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:16},children:"This will extract user messages and tool calls from the current session to create a replayable test case. You can edit the expected responses and tool calls in the Evals tab after creation."}),i.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[i.jsx("button",{className:"btn btn-secondary",onClick:()=>Cs(!1),children:"Cancel"}),i.jsx("button",{className:"btn btn-primary",onClick:vy,disabled:ed||!di,children:ed?"Creating...":"Create Test Case"})]})]})}),L&&i.jsx(MC,{request:L,timeout:L.timeout||30,onApprove:cy,onDeny:uy,onClose:()=>W(null)}),U&&i.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>$(!1),children:i.jsxs("div",{style:{backgroundColor:"#18181b",borderRadius:"8px",border:"1px solid #3f3f46",width:"90%",maxWidth:"1400px",height:"80%",display:"flex",flexDirection:"column",overflow:"hidden"},onClick:M=>M.stopPropagation(),children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[i.jsx(Ja,{size:16}),i.jsx("span",{style:{fontWeight:600},children:"Container Logs"})]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[i.jsxs("button",{onClick:ui,disabled:O,style:{background:"#3f3f46",border:"none",borderRadius:"4px",padding:"4px 8px",color:"#e4e4e7",cursor:O?"wait":"pointer",display:"flex",alignItems:"center",gap:"4px",fontSize:"12px"},children:[i.jsx(Xt,{size:12,className:O?"animate-spin":""}),"Refresh"]}),i.jsx("button",{onClick:()=>$(!1),style:{background:"transparent",border:"none",color:"#71717a",cursor:"pointer",padding:"4px"},children:i.jsx(ks,{size:16})})]})]}),i.jsxs("div",{style:{display:"flex",gap:"0",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[i.jsx("button",{onClick:()=>V("agent"),style:{padding:"8px 16px",background:k==="agent"?"#18181b":"transparent",border:"none",borderBottom:k==="agent"?"2px solid #22d3ee":"2px solid transparent",color:k==="agent"?"#22d3ee":"#a1a1aa",cursor:"pointer",fontSize:"13px"},children:"🤖 Agent"}),i.jsx("button",{onClick:()=>V("gateway"),style:{padding:"8px 16px",background:k==="gateway"?"#18181b":"transparent",border:"none",borderBottom:k==="gateway"?"2px solid #22d3ee":"2px solid transparent",color:k==="gateway"?"#22d3ee":"#a1a1aa",cursor:"pointer",fontSize:"13px"},children:"🌐 Gateway"})]}),i.jsx("div",{ref:Q,style:{flex:1,overflow:"auto",padding:"12px",fontFamily:"ui-monospace, monospace",fontSize:"11px",lineHeight:"1.5",whiteSpace:"pre-wrap",wordBreak:"break-all",color:"#d4d4d8",backgroundColor:"#09090b"},children:O?i.jsx("div",{style:{color:"#71717a",textAlign:"center",padding:"20px"},children:"Loading logs..."}):Z[k]?i.jsx(BC,{content:Z[k]}):i.jsx("div",{style:{color:"#71717a"},children:"No logs available"})})]})})]}):i.jsx("div",{className:"run-panel empty",children:"No project loaded"})}const KC=()=>Math.random().toString(36).substring(2,10),GC=()=>({id:KC(),name:"New SkillSet",description:"",embedding_model:void 0,app_model_id:void 0,external_store_type:void 0,external_store_config:{},search_enabled:!0,preload_enabled:!0,preload_top_k:3,preload_min_score:.4,sources:[],entry_count:0});function QC(){const{project:e,setProject:t}=ut(),[n,r]=b.useState(null),[s,o]=b.useState(null),[a,l]=b.useState(""),[c,u]=b.useState([]),[d,p]=b.useState(!1),[f,m]=b.useState(!1),[y,j]=b.useState(""),[N,v]=b.useState(!1),[g,x]=b.useState(null),[T,z]=b.useState(null),w=b.useRef(null),P=(e==null?void 0:e.skillsets)||[],_=P.find(I=>I.id===n);b.useEffect(()=>{Qg().then(I=>z(I.available)).catch(()=>z(!1))},[]),b.useEffect(()=>{P.length>0&&!n&&r(P[0].id)},[P,n]),b.useEffect(()=>{!e||!n||D()},[e==null?void 0:e.id,n]);const D=b.useCallback(async()=>{if(!(!e||!n))try{const I=await Hg(e.id,n);o(I),R(n,{entry_count:I.entry_count})}catch(I){console.error("Failed to load stats:",I)}},[e==null?void 0:e.id,n]),S=I=>{e&&t({...e,...I})},R=(I,k)=>{e&&t({...e,skillsets:e.skillsets.map(V=>V.id===I?{...V,...k}:V)})},L=()=>{if(!e)return;const I=GC();S({skillsets:[...P,I]}),r(I.id)},W=I=>{e&&confirm("Delete this SkillSet and all its data?")&&(S({skillsets:P.filter(k=>k.id!==I)}),n===I&&r(P.length>1?P[0].id:null),o(null),u([]))},U=async()=>{if(!(!e||!n||!a.trim())){p(!0),x(null);try{const I=await Kg(e.id,n,a.trim(),10,0);u(I.results)}catch(I){x("Search failed"),console.error(I)}finally{p(!1)}}},$=async()=>{if(!(!e||!n||!y.trim())){v(!0),x(null);try{const I=await qg(e.id,n,y.trim());j(""),await D(),alert(`Added ${I.chunks_added} chunks from ${I.source_name}`)}catch(I){x(I.message||"Failed to fetch URL")}finally{v(!1)}}},Z=async I=>{var V;const k=(V=I.target.files)==null?void 0:V[0];if(!(!k||!e||!n)){x(null);try{const Q=await Jg(e.id,n,k);await D(),alert(`Added ${Q.chunks_added} chunks from ${Q.source_name}`)}catch(Q){x(Q.message||"Upload failed")}w.current&&(w.current.value="")}},E=async()=>{if(!(!e||!n)&&confirm("Delete all entries in this SkillSet?"))try{await Gg(e.id,n),await D(),u([])}catch{x("Clear failed")}},O=I=>{const k=Math.round(I*100),V=160,Q=70,h=20+(1-I)*15,B=.15+I*.25;return`linear-gradient(90deg, hsla(${V}, ${Q}%, ${h}%, ${B}) 0%, transparent ${k}%)`};return e?i.jsxs("div",{className:"skillsets-panel",children:[i.jsx("style",{children:`
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
      `}),i.jsxs("div",{className:"skillset-list",children:[i.jsxs("div",{className:"skillset-list-header",children:[i.jsx("h3",{children:"SkillSets"}),i.jsx("button",{className:"btn-icon",onClick:L,title:"Add SkillSet",children:i.jsx(Ke,{size:16})})]}),P.length===0?i.jsxs("div",{className:"empty-state",style:{padding:"40px 0"},children:[i.jsx(wn,{size:32}),i.jsx("span",{children:"No SkillSets"}),i.jsxs("button",{className:"btn-primary",onClick:L,children:[i.jsx(Ke,{size:14})," Create SkillSet"]})]}):P.map(I=>i.jsxs("div",{className:`skillset-item ${n===I.id?"selected":""}`,onClick:()=>r(I.id),children:[i.jsx(wn,{size:16,style:{color:"var(--accent)",flexShrink:0}}),i.jsxs("div",{className:"skillset-item-info",children:[i.jsx("div",{className:"skillset-item-name",children:I.name}),i.jsxs("div",{className:"skillset-item-count",children:[I.entry_count||0," entries"]})]}),i.jsx("button",{className:"skillset-item-delete",onClick:k=>{k.stopPropagation(),W(I.id)},children:i.jsx(Fe,{size:14})})]},I.id))]}),_?i.jsxs("div",{className:"skillset-detail",children:[i.jsxs("div",{className:"skillset-header",children:[i.jsxs("div",{className:"skillset-header-info",children:[i.jsx("input",{className:"skillset-name-input",value:_.name,onChange:I=>R(_.id,{name:I.target.value}),placeholder:"SkillSet Name"}),i.jsx("textarea",{className:"skillset-desc-input",value:_.description,onChange:I=>R(_.id,{description:I.target.value}),placeholder:"Description (optional)",rows:1}),i.jsxs("div",{className:"skillset-model",children:[i.jsx("label",{style:{fontSize:"12px",color:"var(--text-secondary)",marginRight:"8px"},children:"Embedding Model:"}),i.jsxs("select",{style:{flex:1,padding:"4px 8px",fontSize:"12px",background:"var(--bg-secondary)",border:"1px solid var(--border)",borderRadius:"4px",color:"var(--text-primary)"},value:_.embedding_model||"text-embedding-004",onChange:I=>R(_.id,{embedding_model:I.target.value}),children:[i.jsxs("optgroup",{label:"Google Gemini",children:[i.jsx("option",{value:"text-embedding-004",children:"text-embedding-004 (768d)"}),i.jsx("option",{value:"text-embedding-005",children:"text-embedding-005"})]}),i.jsxs("optgroup",{label:"OpenAI",children:[i.jsx("option",{value:"text-embedding-3-small",children:"text-embedding-3-small (1536d)"}),i.jsx("option",{value:"text-embedding-3-large",children:"text-embedding-3-large (3072d)"})]}),i.jsxs("optgroup",{label:"Cohere",children:[i.jsx("option",{value:"embed-english-v3.0",children:"embed-english-v3.0 (1024d)"}),i.jsx("option",{value:"embed-multilingual-v3.0",children:"embed-multilingual-v3.0 (1024d)"})]})]})]}),i.jsxs("div",{className:"skillset-stats",children:[i.jsxs("span",{className:"skillset-stat",children:[i.jsx("strong",{children:(s==null?void 0:s.entry_count)||0})," entries"]}),i.jsxs("span",{className:"skillset-stat",children:[i.jsx("strong",{children:Object.keys((s==null?void 0:s.sources)||{}).length})," sources"]}),T===!1&&i.jsx("span",{className:"skillset-stat",style:{color:"var(--warning)"},children:"⚠ No embeddings"})]})]}),i.jsx("button",{className:"btn-icon",onClick:D,title:"Refresh",children:i.jsx(Xt,{size:16})})]}),g&&i.jsxs("div",{className:"error-banner",children:[g,i.jsx("button",{onClick:()=>x(null),children:i.jsx(ks,{size:14})})]}),i.jsxs("div",{className:"search-section",children:[i.jsx("div",{className:"search-input-wrapper",children:i.jsx("input",{className:"search-input",value:a,onChange:I=>l(I.target.value),onKeyDown:I=>I.key==="Enter"&&U(),placeholder:"Search this SkillSet..."})}),i.jsxs("button",{className:"btn-primary",onClick:U,disabled:d||!a.trim(),children:[i.jsx(nx,{size:14}),d?"Searching...":"Search"]})]}),i.jsxs("div",{className:"search-results",children:[c.length===0&&!d&&a&&i.jsx("div",{className:"empty-state",children:i.jsx("span",{children:"No results found"})}),c.map(I=>i.jsxs("div",{className:"search-result",style:{background:O(I.score)},children:[i.jsxs("span",{className:"search-result-score",children:[(I.score*100).toFixed(0),"%"]}),i.jsx("div",{className:"search-result-text",children:I.text}),i.jsx("div",{className:"search-result-source",children:I.source_name})]},I.id))]}),i.jsxs("div",{className:"add-sources-section",children:[i.jsxs("div",{className:"add-sources-header",onClick:()=>m(!f),children:[f?i.jsx(Et,{size:16}):i.jsx(zt,{size:16}),i.jsx("h4",{children:"Add Sources"})]}),f&&i.jsxs("div",{className:"add-sources-content",children:[i.jsxs("div",{className:"source-row",children:[i.jsx(Nu,{size:16,style:{color:"var(--text-tertiary)"}}),i.jsx("input",{className:"source-input",value:y,onChange:I=>j(I.target.value),onKeyDown:I=>I.key==="Enter"&&$(),placeholder:"Enter URL (e.g., llms.txt file)"}),i.jsxs("button",{className:"btn-primary",onClick:$,disabled:N||!y.trim(),children:[i.jsx(z0,{size:14}),N?"Loading...":"Add"]})]}),i.jsxs("div",{className:"source-row",children:[i.jsx(C0,{size:16,style:{color:"var(--text-tertiary)"}}),i.jsx("input",{ref:w,type:"file",accept:".txt,.md,.json,.csv,.html",onChange:Z}),i.jsxs("button",{className:"btn-primary",onClick:()=>{var I;return(I=w.current)==null?void 0:I.click()},children:[i.jsx(ca,{size:14}),"Upload File"]}),i.jsx("span",{style:{fontSize:"12px",color:"var(--text-tertiary)"},children:".txt, .md, .json, .csv"})]}),((s==null?void 0:s.entry_count)||0)>0&&i.jsx("div",{className:"source-row",style:{marginTop:"8px"},children:i.jsxs("button",{className:"clear-button",onClick:E,children:[i.jsx(Fe,{size:12}),"Clear All Entries (",(s==null?void 0:s.entry_count)||0,")"]})})]})]})]}):P.length>0?i.jsx("div",{className:"skillset-detail",children:i.jsxs("div",{className:"empty-state",children:[i.jsx(wn,{size:48}),i.jsx("span",{children:"Select a SkillSet"})]})}):null]}):null}const pn={tool_trajectory_avg_score:{name:"Tool Trajectory",description:"Did the agent call the right tools in the expected order?",requiresJudge:!1,scale:[0,1]},response_match_score:{name:"Response Match (ROUGE-1)",description:"Does the response contain expected text? (fuzzy word matching)",requiresJudge:!1,scale:[0,1]},response_evaluation_score:{name:"Response Evaluation (LLM)",description:"LLM-judged semantic match of final response",requiresJudge:!0,scale:[1,5]},final_response_match_v2:{name:"Response Quality v2 (LLM)",description:"Enhanced LLM-judged response quality check",requiresJudge:!0,scale:[0,1]},safety_v1:{name:"Safety",description:"Is the response safe and harmless? (Vertex AI)",requiresJudge:!0,scale:[0,1]},hallucinations_v1:{name:"Hallucination Detection",description:"Are all claims supported by context? No false information?",requiresJudge:!0,scale:[0,1]},rubric_based_final_response_quality_v1:{name:"Rubric: Response Quality",description:"Custom rubric-based quality assessment of responses",requiresJudge:!0,scale:[0,1]},rubric_based_tool_use_quality_v1:{name:"Rubric: Tool Use Quality",description:"Custom rubric-based assessment of tool usage",requiresJudge:!0,scale:[0,1]}},ds=(e,t,n)=>{if(t==null)return{value:"-",comparison:""};const r=pn[e],s=(r==null?void 0:r.scale)||[0,1];if(s[0]===1&&s[1]===5){const o=n??3.5;return{value:t.toFixed(1),comparison:`${o.toFixed(1)} / ${s[1].toFixed(1)}`}}else{const o=n??.7;return{value:`${Math.round(t*100)}%`,comparison:`${Math.round(o*100)}% min`}}},YC={metrics:[{metric:"tool_trajectory_avg_score",enabled:!0,criterion:{threshold:1}},{metric:"response_match_score",enabled:!0,criterion:{threshold:.7}}],default_trajectory_match_type:"in_order",num_runs:1};function oy(){return`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`}function XC(){const{project:e}=ut(),[t,n]=b.useState([]),[r,s]=b.useState(null),[o,a]=b.useState(null),[l,c]=b.useState(new Set),[u,d]=b.useState(new Map),[p,f]=b.useState(new Map),[m,y]=b.useState(new Set),[j,N]=b.useState(!1),[v,g]=b.useState(null),[x,T]=b.useState([]),[z,w]=b.useState(null),P=async()=>{if(e)try{const A=await qe.get(`/projects/${e.id}/eval-history`);T(A.runs||[])}catch(A){console.warn("Failed to load eval history:",A)}},_=async(A,q=!0)=>{if(e)try{const Y=(await qe.get(`/projects/${e.id}/eval-history/${A}`)).run;if(w(Y),Y!=null&&Y.case_results){const oe=new Map;for(const K of Y.case_results)oe.set(K.eval_case_id,K);d(oe)}if((Y==null?void 0:Y.eval_set_id)==="batch")c(new Set(t.map(oe=>oe.id))),s(null);else if(Y!=null&&Y.eval_set_id){const oe=new Map;oe.set(Y.eval_set_id,Y),f(oe),s(Y.eval_set_id),c(K=>new Set([...K,Y.eval_set_id]))}a(null),q&&window.history.pushState({run:A},"",`?run=${A}`)}catch(ee){console.warn("Failed to load history run:",ee)}},D=(A,q=!0)=>{s(A),a(null),w(null),q&&A?window.history.pushState({set:A},"",`?set=${A}`):q&&window.history.pushState({},"",window.location.pathname)},S=(A,q,ee=!0)=>{s(A),a(q),w(null),ee&&q?window.history.pushState({set:A,case:q},"",`?set=${A}&case=${q}`):ee&&A&&window.history.pushState({set:A},"",`?set=${A}`)},R=()=>{w(null),d(new Map),f(new Map),window.history.pushState({},"",window.location.pathname)},L=async A=>{if(e)try{await qe.delete(`/projects/${e.id}/eval-history/${A}`),T(q=>q.filter(ee=>ee.id!==A)),(z==null?void 0:z.id)===A&&w(null)}catch(q){console.warn("Failed to delete history run:",q)}};b.useEffect(()=>{e!=null&&e.id&&(W(),P())},[e==null?void 0:e.id]),b.useEffect(()=>{const A=()=>{y(new Set(t.map(ee=>ee.id)))},q=()=>{y(new Set),P()};return window.addEventListener("eval-tests-started",A),window.addEventListener("eval-tests-completed",q),()=>{window.removeEventListener("eval-tests-started",A),window.removeEventListener("eval-tests-completed",q)}},[t]),b.useEffect(()=>{if(!(e!=null&&e.id)||j)return;const A=()=>{const ee=new URLSearchParams(window.location.search),Y=ee.get("set"),oe=ee.get("case"),K=ee.get("run");if(K){_(K,!1);return}if(Y)s(Y),a(oe),w(null),c(X=>new Set([...X,Y]));else{if(!r&&!o&&!z)return;s(null),a(null),w(null)}};A();const q=()=>{A()};return window.addEventListener("popstate",q),()=>window.removeEventListener("popstate",q)},[e==null?void 0:e.id,j,t.length]);const W=async()=>{var A,q;if(e!=null&&e.id){N(!0),g(null);try{const ee=await qe.get(`/projects/${e.id}/eval-sets`);if(n(ee.eval_sets||[]),((A=ee.eval_sets)==null?void 0:A.length)>0){const Y=new URLSearchParams(window.location.search),oe=Y.get("set"),K=Y.get("case"),X=oe||(K?(q=ee.eval_sets.find(re=>re.eval_cases.some(ve=>ve.id===K)))==null?void 0:q.id:null)||ee.eval_sets[0].id;c(new Set([X]))}}catch(ee){g(ee.message||"Failed to load eval sets")}finally{N(!1)}}},U=t.find(A=>A.id===r),$=U==null?void 0:U.eval_cases.find(A=>A.id===o),Z=async()=>{if(e!=null&&e.id)try{const A=await qe.post(`/projects/${e.id}/eval-sets`,{name:"New Eval Set",description:"",eval_config:YC});n(q=>[...q,A.eval_set]),s(A.eval_set.id),c(q=>new Set([...q,A.eval_set.id]))}catch(A){g(A.message||"Failed to create eval set")}},E=async A=>{if(e!=null&&e.id)try{const q=await qe.post(`/projects/${e.id}/eval-sets/${A}/cases`,{name:"New Test Case",description:"",invocations:[{id:oy(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]}],initial_state:{},rubrics:[],enabled_metrics:[],tags:[]});n(ee=>ee.map(Y=>Y.id===A?{...Y,eval_cases:[...Y.eval_cases,q.eval_case]}:Y)),s(A),a(q.eval_case.id)}catch(q){g(q.message||"Failed to create eval case")}},O=async(A,q,ee)=>{if(e!=null&&e.id)try{const Y=await qe.put(`/projects/${e.id}/eval-sets/${A}/cases/${q}`,ee);n(oe=>oe.map(K=>K.id===A?{...K,eval_cases:K.eval_cases.map(X=>X.id===q?Y.eval_case:X)}:K))}catch(Y){g(Y.message||"Failed to update eval case")}},I=async(A,q)=>{if(e!=null&&e.id)try{await qe.delete(`/projects/${e.id}/eval-sets/${A}/cases/${q}`),n(ee=>ee.map(Y=>Y.id===A?{...Y,eval_cases:Y.eval_cases.filter(oe=>oe.id!==q)}:Y)),o===q&&a(null)}catch(ee){g(ee.message||"Failed to delete eval case")}},k=async A=>{if(e!=null&&e.id)try{await qe.delete(`/projects/${e.id}/eval-sets/${A}`),n(q=>q.filter(ee=>ee.id!==A)),r===A&&(s(null),a(null))}catch(q){g(q.message||"Failed to delete eval set")}},V=async A=>{if(e!=null&&e.id)try{const q=await qe.get(`/projects/${e.id}/eval-sets/${A}/export`),ee=new Blob([JSON.stringify(q,null,2)],{type:"application/json"}),Y=URL.createObjectURL(ee),oe=document.createElement("a");oe.href=Y;const K=t.find(X=>X.id===A);oe.download=`${(K==null?void 0:K.name)||"eval-set"}.json`,document.body.appendChild(oe),oe.click(),document.body.removeChild(oe),URL.revokeObjectURL(Y)}catch(q){g(q.message||"Failed to export eval set")}},Q=async A=>{if(e!=null&&e.id)try{const q=await A.text(),ee=JSON.parse(q),Y=await qe.post(`/projects/${e.id}/eval-sets/import`,ee);n(oe=>[...oe,Y.eval_set]),s(Y.eval_set.id),c(oe=>new Set([...oe,Y.eval_set.id]))}catch(q){g(q.message||"Failed to import eval set")}},h=b.useRef(null),B=async()=>{if(!(!(e!=null&&e.id)||t.length===0))try{const A=await Promise.all(t.map(async oe=>{try{return await qe.get(`/projects/${e.id}/eval-sets/${oe.id}/export`)}catch{return oe}})),q=new Blob([JSON.stringify(A,null,2)],{type:"application/json"}),ee=URL.createObjectURL(q),Y=document.createElement("a");Y.href=ee,Y.download=`${e.name||"project"}-eval-sets.json`,document.body.appendChild(Y),Y.click(),document.body.removeChild(Y),URL.revokeObjectURL(ee)}catch(A){g(A.message||"Failed to export all eval sets")}},C=async(A,q)=>{if(e!=null&&e.id){y(ee=>new Set([...ee,q]));try{const ee=await qe.post(`/projects/${e.id}/eval-sets/${A}/cases/${q}/run`,{});d(Y=>new Map(Y).set(q,ee.result))}catch(ee){g(ee.message||"Failed to run eval case")}finally{y(ee=>{const Y=new Set(ee);return Y.delete(q),Y})}}},G=async A=>{if(!(e!=null&&e.id))return;const q=t.find(Y=>Y.id===A);if(!q)return;const ee=q.eval_cases.map(Y=>Y.id);y(Y=>new Set([...Y,A,...ee]));try{const Y=await qe.post(`/projects/${e.id}/eval-sets/${A}/run`,{});f(oe=>new Map(oe).set(A,Y.result));for(const oe of Y.result.case_results)d(K=>new Map(K).set(oe.eval_case_id,oe));try{await qe.post(`/projects/${e.id}/eval-history`,Y.result),P()}catch(oe){console.warn("Failed to save eval run to history:",oe)}}catch(Y){g(Y.message||"Failed to run eval set")}finally{y(Y=>{const oe=new Set(Y);return oe.delete(A),ee.forEach(K=>oe.delete(K)),oe})}},xe=A=>{c(q=>{const ee=new Set(q);return ee.has(A)?ee.delete(A):ee.add(A),ee})},ye=A=>{let q=A.eval_cases.length,ee=0,Y=0,oe=0;for(const K of A.eval_cases){const X=u.get(K.id);X?X.passed?ee++:Y++:oe++}return{total:q,passed:ee,failed:Y,pending:oe}},H=A=>A==null?"-":`${Math.round(A*100)}%`;return e?i.jsxs("div",{className:"eval-panel",children:[i.jsx("style",{children:`
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
      `}),i.jsxs("aside",{className:"eval-sidebar",children:[i.jsxs("div",{className:"sidebar-header",children:[i.jsx("h3",{children:"Evaluation Tests"}),i.jsxs("div",{className:"header-actions",children:[i.jsx("input",{type:"file",ref:h,accept:".json",style:{display:"none"},onChange:A=>{var ee;const q=(ee=A.target.files)==null?void 0:ee[0];q&&(Q(q),A.target.value="")}}),i.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var A;return(A=h.current)==null?void 0:A.click()},title:"Import eval set from JSON",children:i.jsx(ca,{size:14})}),t.length>0&&i.jsx("button",{className:"btn btn-secondary btn-sm",onClick:B,title:"Download all eval sets as JSON",children:i.jsx(bs,{size:14})}),i.jsx("button",{className:"btn btn-secondary btn-sm",onClick:W,title:"Refresh",children:i.jsx(Xt,{size:14})}),i.jsxs("button",{className:"btn btn-primary btn-sm",onClick:Z,title:"New eval set",children:[i.jsx(Ke,{size:14}),"Set"]})]})]}),i.jsxs("div",{className:"eval-tree",children:[j&&i.jsx("p",{style:{color:"var(--text-muted)",padding:"16px"},children:"Loading..."}),v&&i.jsx("div",{style:{color:"var(--error)",padding:"16px",fontSize:"13px"},children:v}),!j&&t.length===0&&i.jsxs("div",{className:"empty-state",style:{padding:"32px"},children:[i.jsx(Pu,{size:32}),i.jsxs("p",{children:["No evaluation sets yet.",i.jsx("br",{}),"Create one to get started."]})]}),t.map(A=>{const q=l.has(A.id),ee=ye(A),Y=m.has(A.id);return i.jsxs("div",{className:"tree-item",children:[i.jsxs("div",{className:`tree-set ${r===A.id&&!o?"selected":""}`,onClick:()=>D(A.id),children:[i.jsx("button",{className:"expand-btn",onClick:oe=>{oe.stopPropagation(),xe(A.id)},children:A.eval_cases.length>0?q?i.jsx(Et,{size:14}):i.jsx(zt,{size:14}):i.jsx("span",{style:{width:14}})}),i.jsx(ex,{size:14,style:{color:"var(--accent-secondary)"}}),i.jsx("span",{className:"set-name",children:A.name}),i.jsx("button",{className:"add-case-btn",onClick:oe=>{oe.stopPropagation(),E(A.id)},title:"Add test case",style:{padding:"2px 4px",marginLeft:4,background:"transparent",border:"none",cursor:"pointer",opacity:.6,display:"flex",alignItems:"center"},children:i.jsx(Ke,{size:12})}),ee.total>0&&i.jsxs("span",{className:"set-stats",children:[ee.passed>0&&i.jsx("span",{className:"stat-passed",children:ee.passed}),ee.failed>0&&i.jsx("span",{className:"stat-failed",children:ee.failed}),ee.pending>0&&i.jsx("span",{className:"stat-pending",children:ee.pending})]}),i.jsx("button",{className:"run-btn",onClick:oe=>{oe.stopPropagation(),G(A.id)},title:"Run all tests in this set",disabled:Y,children:Y?i.jsx(ls,{size:12,className:"spinning"}):i.jsx(Yn,{size:12})})]}),q&&i.jsx("div",{className:"tree-children",style:{paddingLeft:16},children:A.eval_cases.map(oe=>{var re;const K=u.get(oe.id),X=m.has(oe.id);return i.jsxs("div",{className:`tree-case ${o===oe.id?"selected":""}`,onClick:()=>S(A.id,oe.id),children:[X?i.jsx(ls,{size:14,className:"spinning",style:{color:"var(--warning)"}}):K?K.passed?i.jsx(yr,{size:14,style:{color:"var(--success)"}}):i.jsx(ni,{size:14,style:{color:"var(--error)"}}):i.jsx(Mo,{size:14,style:{color:"var(--text-muted)"}}),i.jsx("span",{className:"case-name",children:oe.name}),K&&K.metric_results.length>0&&i.jsx("span",{style:{fontSize:11,color:K.passed?"var(--success)":"var(--error)"},children:H((re=K.metric_results[0])==null?void 0:re.score)}),i.jsx("button",{className:"run-btn",onClick:ve=>{ve.stopPropagation(),C(A.id,oe.id)},disabled:X,children:i.jsx(Yn,{size:12})})]},oe.id)})})]},A.id)})]}),i.jsxs("div",{className:"history-section",children:[i.jsx("div",{className:"history-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 12px",borderTop:"1px solid var(--border-color)",background:"var(--bg-secondary)"},children:i.jsxs("span",{style:{fontWeight:500,fontSize:13},children:["Previous Runs (",x.length,")"]})}),i.jsx("div",{className:"history-list",style:{maxHeight:200,overflowY:"auto"},children:x.length===0?i.jsx("div",{style:{padding:"12px",color:"var(--text-secondary)",fontSize:12,textAlign:"center"},children:"No previous runs"}):[...x].sort((A,q)=>(q.started_at||0)-(A.started_at||0)).map(A=>{const q=A.passed_cases===A.total_cases;return i.jsx("div",{className:`history-item ${(z==null?void 0:z.id)===A.id?"selected":""}`,onClick:()=>_(A.id),style:{padding:"8px 12px",borderBottom:"1px solid var(--border-color)",cursor:"pointer",background:(z==null?void 0:z.id)===A.id?"var(--bg-tertiary)":"transparent",fontSize:12},children:i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[q?i.jsx(yr,{size:14,style:{color:"var(--success)",flexShrink:0}}):i.jsx(ni,{size:14,style:{color:"var(--error)",flexShrink:0}}),i.jsxs("div",{children:[i.jsx("div",{style:{fontWeight:500},children:A.eval_set_name||"Unnamed"}),i.jsx("div",{style:{color:"var(--text-secondary)",fontSize:11},children:new Date(A.started_at*1e3).toLocaleString()})]})]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[i.jsxs("span",{style:{color:q?"var(--success)":"var(--error)",fontWeight:500,fontSize:11},children:[A.passed_cases,"/",A.total_cases]}),i.jsx("button",{className:"btn btn-icon",onClick:ee=>{ee.stopPropagation(),L(A.id)},title:"Delete run",style:{padding:2},children:i.jsx(Fe,{size:12})})]})]})},A.id)})})]})]}),i.jsx("div",{className:"eval-editor",children:z?i.jsx(eN,{run:z,onClose:R}):$?i.jsx(tN,{evalCase:$,evalSetId:r,projectId:e.id,result:u.get($.id),isRunning:m.has($.id),onUpdate:A=>O(r,$.id,A),onDelete:()=>I(r,$.id),onRun:()=>C(r,$.id),onClearResult:()=>d(A=>{const q=new Map(A);return q.delete($.id),q})}):U?i.jsx(nN,{evalSet:U,projectId:e.id,result:p.get(U.id),isRunning:m.has(U.id),caseResults:u,onUpdate:async A=>{try{const q=await qe.put(`/projects/${e.id}/eval-sets/${U.id}`,A);n(ee=>ee.map(Y=>Y.id===U.id?q.eval_set:Y))}catch(q){g(q.message)}},onDelete:()=>k(U.id),onRun:()=>G(U.id),onExport:()=>V(U.id)}):i.jsx("div",{className:"editor-content",children:i.jsxs("div",{className:"empty-state",children:[i.jsx(Mo,{size:48}),i.jsxs("p",{children:["Select a test case to edit",i.jsx("br",{}),"or create a new one"]})]})})})]}):null}function ZC({value:e,onChange:t}){var a,l;const{project:n}=ut(),r=((a=n==null?void 0:n.app)==null?void 0:a.models)||[],s=(l=n==null?void 0:n.app)==null?void 0:l.default_model_id,o=r.find(c=>c.id===s);return i.jsxs("select",{value:e,onChange:c=>t(c.target.value),style:{width:"100%",maxWidth:400},children:[i.jsx("option",{value:"",children:o?`App Default (${o.model_name})`:"App Default"}),r.map(c=>i.jsx("option",{value:c.model_name,children:c.model_name},c.id)),i.jsx("option",{value:"gemini-2.0-flash",children:"gemini-2.0-flash"}),i.jsx("option",{value:"gemini-2.5-flash",children:"gemini-2.5-flash"}),i.jsx("option",{value:"gemini-2.5-pro",children:"gemini-2.5-pro"})]})}function eN({run:e,onClose:t}){var m;const{project:n}=ut(),[r,s]=b.useState(!0),[o,a]=b.useState(new Set),l=e.case_results||[],c=l.filter(y=>y.passed).length,u=l.filter(y=>!y.passed).length,d=r?l.filter(y=>!y.passed):l,p=y=>{a(j=>{const N=new Set(j);return N.has(y)?N.delete(y):N.add(y),N})},f=y=>{y&&n&&(window.location.href=`/project/${n.id}/run?session=${y}`)};return i.jsxs("div",{className:"test-result-viewer",children:[i.jsx("style",{children:`
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
      `}),i.jsxs("div",{className:"result-header",children:[i.jsx("h2",{children:e.eval_set_name||"Test Run Results"}),i.jsx("div",{style:{display:"flex",gap:8},children:i.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{if(n){const y=`${window.location.origin}/project/${n.id}/evaluate?run=${e.id}`;navigator.clipboard.writeText(y)}},title:"Copy link to this run",children:i.jsx(zu,{size:14})})})]}),i.jsxs("div",{className:"result-summary",children:[i.jsxs("div",{className:"summary-stat",children:[i.jsx("span",{className:"label",children:"Status"}),i.jsx("span",{className:`value ${c===l.length?"passed":"failed"}`,children:c===l.length?"PASSED":"FAILED"})]}),i.jsxs("div",{className:"summary-stat",children:[i.jsx("span",{className:"label",children:"Passed"}),i.jsx("span",{className:"value passed",children:c})]}),i.jsxs("div",{className:"summary-stat",children:[i.jsx("span",{className:"label",children:"Failed"}),i.jsx("span",{className:"value failed",children:u})]}),i.jsxs("div",{className:"summary-stat",children:[i.jsx("span",{className:"label",children:"Total Cases"}),i.jsx("span",{className:"value",children:l.length})]}),i.jsxs("div",{className:"summary-stat",children:[i.jsx("span",{className:"label",children:"Duration"}),i.jsx("span",{className:"value",children:e.duration_ms?`${(e.duration_ms/1e3).toFixed(1)}s`:"-"})]}),i.jsxs("div",{className:"summary-stat",children:[i.jsx("span",{className:"label",children:"Tokens"}),i.jsx("span",{className:"value",children:((m=e.total_tokens)==null?void 0:m.toLocaleString())||"-"})]}),i.jsxs("div",{className:"summary-stat",children:[i.jsx("span",{className:"label",children:"Run Time"}),i.jsx("span",{className:"value",style:{fontSize:13},children:e.started_at?new Date(e.started_at*1e3).toLocaleString():"-"})]})]}),i.jsxs("div",{style:{padding:"8px 20px",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",gap:10,background:"var(--bg-secondary)"},children:[i.jsxs("label",{className:"toggle-switch",style:{transform:"scale(0.85)"},children:[i.jsx("input",{type:"checkbox",checked:r,onChange:y=>s(y.target.checked)}),i.jsx("span",{className:"toggle-slider"})]}),i.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:"Hide passing results"})]}),i.jsxs("div",{className:"result-cases",children:[d.map((y,j)=>{var R,L,W,U,$,Z;const N=y.case_id||`case-${j}`,v=o.has(N),g=((R=y.metric_results)==null?void 0:R.filter(E=>!E.passed||E.error))||[],x=((L=y.metric_results)==null?void 0:L.filter(E=>E.passed&&!E.error))||[],T=((W=y.rubric_results)==null?void 0:W.filter(E=>!E.passed||E.error))||[],z=((U=y.rubric_results)==null?void 0:U.filter(E=>E.passed&&!E.error))||[],w=v?y.metric_results:g,P=v?y.rubric_results:T,_=v?y.invocation_results:($=y.invocation_results)==null?void 0:$.filter(E=>{var O;return((O=E.metric_results)==null?void 0:O.some(I=>!I.passed))||E.error}),D=x.length+z.length,S=g.length+T.length;return i.jsxs("div",{className:"result-case",children:[i.jsxs("div",{className:"result-case-header",onClick:()=>p(N),style:{cursor:"pointer"},children:[i.jsxs("div",{className:"result-case-name",children:[i.jsx("span",{style:{marginRight:6,fontSize:12,color:"var(--text-muted)"},children:v?"▼":"▶"}),y.passed?i.jsx(yr,{size:16,style:{color:"var(--success)"}}):i.jsx(ni,{size:16,style:{color:"var(--error)"}}),y.eval_set_name&&(e==null?void 0:e.eval_set_id)==="batch"&&i.jsx("span",{style:{fontSize:10,color:"var(--text-muted)",background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4,marginRight:6},children:y.eval_set_name}),y.case_name||`Case ${j+1}`,i.jsxs("span",{style:{marginLeft:10,fontSize:11,color:"var(--text-muted)",fontWeight:400},children:[S>0&&i.jsxs("span",{style:{color:"var(--error)"},children:[S," failed"]}),S>0&&D>0&&" · ",D>0&&i.jsxs("span",{style:{color:"var(--success)"},children:[D," passed"]})]})]}),i.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[y.session_id&&i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:E=>{E.stopPropagation(),f(y.session_id)},title:"View session in Run panel",children:[i.jsx(Xg,{size:12})," View Session"]}),i.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:y.duration_ms?`${(y.duration_ms/1e3).toFixed(2)}s`:""})]})]}),i.jsxs("div",{className:"result-case-details",children:[(w==null?void 0:w.length)>0&&i.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:8},children:[w.map((E,O)=>{const I=ds(E.metric,E.score,E.threshold);return i.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:E.error?"rgba(255, 193, 7, 0.1)":E.passed?"rgba(var(--success-rgb), 0.05)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${E.error?"var(--warning)":E.passed?"var(--border-color)":"var(--error)"}`,display:"flex",flexDirection:"column",alignItems:"center",minWidth:80},children:[i.jsx("span",{style:{fontSize:10,color:"var(--text-secondary)",textAlign:"center",marginBottom:2},children:E.metric.replace(/_/g," ").replace("v1","").replace("v2","").trim()}),E.error?i.jsx("span",{style:{fontSize:10,color:"var(--warning)"},children:"Error"}):i.jsxs(i.Fragment,{children:[i.jsx("span",{style:{fontSize:14,fontWeight:600,color:E.passed?"var(--success)":"var(--error)"},children:I.value}),i.jsx("span",{style:{fontSize:9,color:"var(--text-muted)"},children:I.comparison})]})]},O)}),!v&&x.length>0&&i.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"var(--bg-tertiary)",border:"1px dashed var(--border-color)",display:"flex",alignItems:"center",fontSize:11,color:"var(--text-muted)"},children:["+",x.length," passed"]})]}),w==null?void 0:w.filter(E=>!E.passed&&E.rationale).map((E,O)=>i.jsxs("div",{style:{marginTop:8,padding:"8px 12px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:12},children:[i.jsxs("div",{style:{fontWeight:500,marginBottom:4,color:"var(--error)",fontSize:11},children:[E.metric.replace(/_/g," ")," - Why it failed:"]}),i.jsx("div",{style:{whiteSpace:"pre-wrap",color:"var(--text-secondary)",lineHeight:1.4},children:E.rationale})]},`rationale-${O}`)),(P==null?void 0:P.length)>0&&i.jsxs("div",{style:{marginTop:8},children:[i.jsx("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:4},children:"Custom Rubrics"}),P.map((E,O)=>i.jsxs("div",{style:{marginBottom:E.rationale&&!E.passed?8:4},children:[i.jsxs("div",{className:"metric-row",children:[i.jsx("span",{className:"metric-name",style:{flex:1},children:E.rubric}),i.jsx("span",{className:`metric-value ${E.passed?"passed":"failed"}`,children:E.passed?"✓ Pass":"✗ Fail"})]}),!E.passed&&E.rationale&&i.jsxs("div",{style:{marginTop:4,marginLeft:8,padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:11,color:"var(--text-secondary)"},children:[i.jsx("strong",{style:{color:"var(--error)"},children:"Why:"})," ",E.rationale]}),E.error&&i.jsxs("div",{style:{marginTop:4,marginLeft:8,fontSize:11,color:"var(--warning)"},children:["Error: ",E.error]})]},O)),!v&&z.length>0&&i.jsxs("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:["+",z.length," passed rubric",z.length>1?"s":""]})]}),(_==null?void 0:_.length)>0&&i.jsxs("div",{className:"invocation-summary",children:[i.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:8},children:["Invocations (",_.length,!v&&((Z=y.invocation_results)==null?void 0:Z.length)>_.length?` of ${y.invocation_results.length}`:"",")"]}),_.map((E,O)=>i.jsxs("div",{className:"invocation-item",children:[i.jsxs("div",{className:"invocation-query",children:["Turn ",E.invocation_id||O+1,": ",E.user_message||"(no message)"]}),E.actual_response&&i.jsxs("div",{className:"invocation-response",children:["Response: ",E.actual_response.substring(0,200),E.actual_response.length>200?"...":""]})]},O))]}),y.error&&i.jsx("div",{style:{marginTop:12,padding:12,background:"rgba(255, 107, 107, 0.1)",borderRadius:"var(--radius-sm)",color:"var(--error)",fontSize:12,whiteSpace:"pre-wrap"},children:y.error})]})]},N)}),l.length===0&&i.jsx("div",{style:{textAlign:"center",padding:32,color:"var(--text-secondary)"},children:"No test cases in this run"})]})]})}function tN({evalCase:e,evalSetId:t,projectId:n,result:r,isRunning:s,onUpdate:o,onDelete:a,onRun:l,onClearResult:c}){var z,w,P;const{project:u}=ut(),[d,p]=b.useState(e),[f,m]=b.useState("assertions");b.useEffect(()=>{p(e)},[e.id]);const y=b.useCallback(_=>{p(D=>({...D,..._})),o(_)},[o]),j=()=>{const _={id:oy(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]};y({invocations:[...d.invocations,_]})},N=(_,D)=>{const S=[...d.invocations];S[_]={...S[_],...D},y({invocations:S})},v=_=>{y({invocations:d.invocations.filter((D,S)=>S!==_)})},g=_=>{const D=[...d.invocations];D[_]={...D[_],expected_tool_calls:[...D[_].expected_tool_calls,{name:"",args:{},args_match_mode:"subset"}]},y({invocations:D})},x=(_,D,S)=>{const R=[...d.invocations],L=[...R[_].expected_tool_calls];L[D]={...L[D],...S},R[_]={...R[_],expected_tool_calls:L},y({invocations:R})},T=(_,D)=>{const S=[...d.invocations];S[_]={...S[_],expected_tool_calls:S[_].expected_tool_calls.filter((R,L)=>L!==D)},y({invocations:S})};return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"editor-header",children:[i.jsx(Mo,{size:20,style:{color:"var(--accent-primary)"}}),i.jsx("input",{type:"text",value:d.name,onChange:_=>y({name:_.target.value}),placeholder:"Test case name"}),i.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const _=`${window.location.origin}/project/${n}/evaluate?set=${t}&case=${e.id}`;navigator.clipboard.writeText(_)},title:"Copy link to this test case",children:i.jsx(zu,{size:14})}),i.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:s,children:[s?i.jsx(ls,{size:14,className:"spinning"}):i.jsx(Yn,{size:14}),"Run"]}),i.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:i.jsx(Fe,{size:14})})]}),i.jsxs("div",{className:"tabs",children:[i.jsxs("div",{className:`tab ${f==="assertions"?"active":""}`,onClick:()=>m("assertions"),children:[i.jsx(Oo,{size:14,style:{marginRight:6}}),"Assertions (",d.invocations.length,")"]}),i.jsxs("div",{className:`tab ${f==="rubrics"?"active":""}`,onClick:()=>m("rubrics"),children:[i.jsx(Pu,{size:14,style:{marginRight:6}}),"LLM Judges"]}),i.jsxs("div",{className:`tab ${f==="docs"?"active":""}`,onClick:()=>m("docs"),children:[i.jsx(ei,{size:14,style:{marginRight:6}}),"Docs"]}),i.jsxs("div",{className:`tab ${f==="json"?"active":""}`,onClick:()=>m("json"),children:[i.jsx(hn,{size:14,style:{marginRight:6}}),"JSON"]})]}),i.jsxs("div",{className:"editor-content",children:[f==="assertions"&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{style:{display:"flex",gap:12,marginBottom:12},children:[i.jsxs("div",{style:{flex:1},children:[i.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"target_agent"}),i.jsxs("select",{value:d.target_agent||"",onChange:_=>y({target_agent:_.target.value||void 0}),style:{width:"100%"},children:[i.jsx("option",{value:"",children:"root_agent"}),(z=u==null?void 0:u.agents)==null?void 0:z.map(_=>i.jsx("option",{value:_.name,children:_.name},_.name))]})]}),i.jsxs("div",{style:{flex:1},children:[i.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"tags"}),i.jsx("input",{type:"text",value:d.tags.join(", "),onChange:_=>y({tags:_.target.value.split(",").map(D=>D.trim()).filter(Boolean)}),placeholder:"smoke, regression",style:{width:"100%"}})]})]}),i.jsxs("div",{className:"form-section",children:[i.jsx("h4",{children:"Description"}),i.jsx("textarea",{value:d.description,onChange:_=>y({description:_.target.value}),placeholder:"What does this test verify?",style:{minHeight:40}})]}),i.jsxs("div",{className:"form-section",children:[i.jsxs("h4",{children:["session_input ",i.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(initial state)"})]}),i.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:i.jsx(Wt,{height:"100%",defaultLanguage:"json",value:(()=>{var D;if((!d.initial_state||Object.keys(d.initial_state).length===0)&&((D=u==null?void 0:u.app)!=null&&D.state_keys)&&u.app.state_keys.length>0){const S={};return u.app.state_keys.forEach(R=>{R.default_value!==void 0?S[R.name]=R.default_value:S[R.name]=R.type==="string"?"":R.type==="number"?0:R.type==="boolean"?!1:R.type==="array"?[]:{}}),JSON.stringify(S,null,2)}return JSON.stringify(d.initial_state,null,2)})(),onChange:_=>{try{_&&y({initial_state:JSON.parse(_)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]}),i.jsxs("div",{className:"form-section",children:[i.jsxs("h4",{children:[i.jsx(Oo,{size:14}),"Conversation Turns"]}),d.invocations.map((_,D)=>i.jsxs("div",{className:"invocation-card",children:[i.jsxs("div",{className:"invocation-number",children:[i.jsx("span",{children:D+1}),d.invocations.length>1&&i.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>v(D),style:{padding:4},children:i.jsx(Fe,{size:10})})]}),i.jsxs("div",{className:"invocation-content",children:[i.jsxs("div",{className:"invocation-row",children:[i.jsxs("div",{className:"form-section",children:[i.jsx("label",{children:"User Query"}),i.jsx("textarea",{value:_.user_message,onChange:S=>N(D,{user_message:S.target.value}),placeholder:"The message to send to the agent..."})]}),i.jsxs("div",{className:"form-section",children:[i.jsxs("label",{children:["Expected Response ",i.jsx("span",{style:{color:"var(--text-muted)",fontWeight:400},children:"(ROUGE-1)"})]}),i.jsx("textarea",{value:_.expected_response||"",onChange:S=>N(D,{expected_response:S.target.value||void 0}),placeholder:"Expected text (partial match)..."})]})]}),_.expected_tool_calls.map((S,R)=>i.jsxs("div",{className:"tool-call-compact",children:[i.jsx("input",{type:"text",value:S.name,onChange:L=>x(D,R,{name:L.target.value}),placeholder:"tool_name",className:"tool-name-input"}),i.jsxs("div",{className:"pillbox-toggle",children:[i.jsx("button",{className:`pill ${S.args_match_mode==="subset"?"active":""}`,onClick:()=>x(D,R,{args_match_mode:"subset"}),children:"Partial"}),i.jsx("button",{className:`pill ${S.args_match_mode==="exact"?"active":""}`,onClick:()=>x(D,R,{args_match_mode:"exact"}),children:"Exact"})]}),i.jsx("div",{className:"tool-args-editor",children:i.jsx(Wt,{height:"22px",defaultLanguage:"json",value:JSON.stringify(S.args||{}),onChange:L=>{try{L&&x(D,R,{args:JSON.parse(L)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,wordWrap:"off",scrollbar:{vertical:"hidden",horizontal:"hidden"},overviewRulerLanes:0,hideCursorInOverviewRuler:!0,overviewRulerBorder:!1,renderLineHighlight:"none",fontSize:11,padding:{top:3,bottom:3},automaticLayout:!0}})}),i.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>T(D,R),style:{padding:"4px 6px"},children:i.jsx(Fe,{size:10})})]},R)),i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>g(D),style:{marginTop:4},children:[i.jsx(Ke,{size:12})," Assert Tool Call"]})]})]},_.id)),i.jsxs("button",{className:"btn btn-secondary",onClick:j,children:[i.jsx(Ke,{size:14})," Add Turn"]})]}),i.jsxs("div",{className:"form-section",children:[i.jsxs("h4",{children:[i.jsx(yr,{size:14,style:{marginRight:6}}),"final_session_state ",i.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(optional)"})]}),i.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Assert that session state contains these key-value pairs after all turns complete."}),i.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:i.jsx(Wt,{height:"100%",defaultLanguage:"json",value:d.expected_final_state?JSON.stringify(d.expected_final_state,null,2):"{}",onChange:_=>{if(!_||_==="{}")y({expected_final_state:void 0});else try{y({expected_final_state:JSON.parse(_)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]})]}),f==="rubrics"&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"form-section",style:{marginBottom:16},children:[{metric:"safety_v1",label:"safety_v1",default:.8,max:1},{metric:"hallucinations_v1",label:"hallucinations_v1",default:.8,max:1},{metric:"response_evaluation_score",label:"response_evaluation_score",default:3.5,max:5},{metric:"final_response_match_v2",label:"final_response_match_v2",default:.7,max:1}].map(({metric:_,label:D,default:S,max:R})=>{const L=(d.enabled_metrics||[]).find(U=>U.metric===_),W=(L==null?void 0:L.threshold)??S;return i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[i.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[i.jsx("input",{type:"checkbox",checked:!!L,onChange:U=>{const $=[...d.enabled_metrics||[]];if(U.target.checked)$.push({metric:_,threshold:S});else{const Z=$.findIndex(E=>E.metric===_);Z!==-1&&$.splice(Z,1)}y({enabled_metrics:$})}}),i.jsx("span",{className:"toggle-slider"})]}),i.jsx("span",{style:{fontSize:12,opacity:L?1:.5,minWidth:100},children:D}),i.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:L?1:.4},children:"≥"}),i.jsx("input",{type:"number",min:R===5?1:0,max:R,step:.1,value:W,disabled:!L,onChange:U=>{const $=[...d.enabled_metrics||[]],Z=$.findIndex(E=>E.metric===_);Z!==-1&&($[Z]={...$[Z],threshold:parseFloat(U.target.value)||0},y({enabled_metrics:$}))},style:{width:60,textAlign:"center",opacity:L?1:.3,padding:"2px 4px",fontSize:11}})]},_)})}),i.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--border-color)",margin:"16px 0"}}),i.jsxs("div",{className:"form-section",children:[i.jsx("h4",{children:"Custom Rubrics"}),i.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Natural language criteria evaluated by an LLM judge. Returns pass/fail per rubric."}),d.rubrics.map((_,D)=>i.jsxs("div",{className:"tool-call-row",style:{marginBottom:8},children:[i.jsx("input",{type:"text",value:_.rubric,onChange:S=>{const R=[...d.rubrics];R[D]={rubric:S.target.value},y({rubrics:R})},placeholder:"e.g., The response mentions the return policy",style:{flex:1}}),i.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>y({rubrics:d.rubrics.filter((S,R)=>R!==D)}),children:i.jsx(Fe,{size:12})})]},D)),i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>y({rubrics:[...d.rubrics,{rubric:""}]}),children:[i.jsx(Ke,{size:12})," Add Rubric"]})]})]}),f==="docs"&&i.jsxs("div",{style:{fontSize:13,lineHeight:1.6,color:"var(--text-secondary)",overflowY:"auto",maxHeight:"100%"},children:[i.jsx("h3",{style:{marginBottom:16,color:"var(--text-primary)"},children:"Evaluation Test Case Guide"}),i.jsxs("section",{style:{marginBottom:24,padding:12,background:"rgba(var(--accent-primary-rgb), 0.1)",borderRadius:"var(--radius-md)",border:"1px solid var(--accent-primary)"},children:[i.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Quick Overview"}),i.jsxs("p",{children:["Each test case simulates a ",i.jsx("strong",{children:"multi-turn conversation"})," with an agent. For each turn (invocation), you provide a user message and define what you expect the agent to do."]}),i.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Invocations"})," = conversation turns (user messages)"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Expected Response"})," = the agent's ",i.jsx("em",{children:"final text reply"})," for that turn"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Expected Tool Calls"})," = tools the agent should invoke during that turn"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Session State"})," = test the ",i.jsx("em",{children:"final state"})," after ALL turns complete"]})]})]}),i.jsxs("section",{style:{marginBottom:24},children:[i.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:'📝 What is "Expected Response"?'}),i.jsxs("p",{children:["The ",i.jsx("strong",{children:"Expected Response"})," is matched against the agent's ",i.jsx("strong",{children:"final response"})," for that specific turn — NOT every message."]}),i.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[i.jsx("p",{style:{marginBottom:8},children:i.jsx("strong",{children:"During one turn, an agent may:"})}),i.jsxs("ul",{style:{marginLeft:20,marginBottom:12},children:[i.jsx("li",{children:"Send intermediate thinking/reasoning messages"}),i.jsx("li",{children:"Call multiple tools"}),i.jsx("li",{children:"Transfer to sub-agents (who may respond)"}),i.jsxs("li",{children:["Finally send a ",i.jsx("em",{children:"concluding response"})]})]}),i.jsxs("p",{children:["Only the ",i.jsx("strong",{children:"last text response"})," from the agent for that turn is compared against your Expected Response."]})]}),i.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Tip: If you need to verify intermediate steps, use Tool Trajectory matching or custom Rubrics."})]}),i.jsxs("section",{style:{marginBottom:24},children:[i.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🔄 Response Matching (ROUGE-1)"}),i.jsxs("p",{children:["The ",i.jsx("code",{children:"response_match_score"})," uses ",i.jsx("strong",{children:"ROUGE-1 F1 scoring"})," — fuzzy word-level matching:"]}),i.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[i.jsx("li",{children:"Tokenizes both expected and actual responses into words"}),i.jsx("li",{children:"Calculates word overlap (not exact string match)"}),i.jsx("li",{children:"Returns a score from 0.0 to 1.0"})]}),i.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[i.jsx("p",{children:i.jsx("strong",{children:"Example:"})}),i.jsxs("p",{children:["Expected: ",i.jsx("code",{children:'"The weather in Paris is sunny today"'})]}),i.jsxs("p",{children:["Actual: ",i.jsx("code",{children:'"Today in Paris, expect sunny weather"'})]}),i.jsx("p",{style:{marginTop:8,color:"var(--success)"},children:"✓ High ROUGE-1 score (same words, different order)"})]}),i.jsxs("p",{style:{marginTop:8},children:["A threshold of ",i.jsx("strong",{children:"0.7"})," means 70% word overlap is required to pass."]})]}),i.jsxs("section",{style:{marginBottom:24},children:[i.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🛠️ Tool Trajectory Matching"}),i.jsxs("p",{children:["The ",i.jsx("code",{children:"tool_trajectory_avg_score"})," verifies the agent called expected tools. Match types:"]}),i.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Exact"})," — Same tools in same order, no extras allowed"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"In Order"})," — Expected tools appear in order, extras allowed between"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Any Order"})," — All expected tools present, any order, extras allowed"]})]}),i.jsx("p",{style:{marginTop:8},children:"For each tool, you can match by:"}),i.jsxs("ul",{style:{marginLeft:20,marginTop:4},children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Name Only"})," — Just check the tool was called"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Exact Args"})," — Arguments must match exactly (provide JSON)"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Args Subset"})," — Your expected args must be present in actual args"]})]})]}),i.jsxs("section",{style:{marginBottom:24},children:[i.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💾 Session State Testing"}),i.jsxs("p",{children:[i.jsx("strong",{children:"Initial State"})," (Settings tab) — Pre-populate session state before running the test:"]}),i.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[i.jsx("li",{children:"Set user preferences or context"}),i.jsx("li",{children:"Simulate a specific scenario"}),i.jsx("li",{children:"Test state-dependent behavior"})]}),i.jsxs("p",{style:{marginTop:12},children:[i.jsx("strong",{children:"Expected Final State"})," — Verified at the ",i.jsx("em",{children:"very end"})," of the test case, ",i.jsx("strong",{children:"after ALL invocations complete"}),"."]}),i.jsx("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8,borderLeft:"3px solid var(--warning)"},children:i.jsxs("p",{style:{margin:0},children:[i.jsx("strong",{children:"Important:"})," State is tested once after the entire conversation, NOT after each turn. To test state changes per-turn, use separate test cases."]})})]}),i.jsxs("section",{style:{marginBottom:24},children:[i.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Target Agent (Settings tab)"}),i.jsxs("p",{children:["By default, tests run against the ",i.jsx("strong",{children:"root_agent"})," of your App. You can select a specific sub-agent to test in isolation:"]}),i.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[i.jsxs("li",{children:[i.jsx("strong",{children:"root_agent"})," — Test the full agent hierarchy (default)"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Specific agent"})," — Unit test individual agents"]})]}),i.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Useful for testing sub-agents independently before integrating into the full system."})]}),i.jsxs("section",{style:{marginBottom:24},children:[i.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📋 Custom Rubrics"}),i.jsx("p",{children:"Rubrics are custom yes/no criteria evaluated by an LLM judge. Examples:"}),i.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[i.jsx("li",{children:'"Does the response mention the product price?"'}),i.jsx("li",{children:'"Is the tone professional and helpful?"'}),i.jsx("li",{children:'"Does the response avoid mentioning competitors?"'})]}),i.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Note: Rubric evaluation requires LLM-judged metrics to be enabled in the Eval Set."})]}),i.jsxs("section",{style:{marginBottom:24},children:[i.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📊 Available Metrics"}),i.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12},children:[i.jsx("thead",{children:i.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[i.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Metric"}),i.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Type"}),i.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Description"})]})}),i.jsx("tbody",{children:Object.keys(pn).map(_=>i.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[i.jsx("td",{style:{padding:"8px 4px",fontFamily:"var(--font-mono)",fontSize:11},children:_}),i.jsx("td",{style:{padding:"8px 4px"},children:pn[_].requiresJudge?i.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--accent-primary)",color:"white",borderRadius:4},children:"LLM Judge"}):i.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--bg-tertiary)",borderRadius:4},children:"Built-in"})}),i.jsx("td",{style:{padding:"8px 4px",color:"var(--text-muted)"},children:pn[_].description})]},_))})]})]}),i.jsxs("section",{children:[i.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💡 Tips"}),i.jsxs("ul",{style:{marginLeft:20},children:[i.jsx("li",{children:"Start with simple single-turn tests, then add complexity"}),i.jsx("li",{children:'Use "In Order" matching for most tool trajectory tests'}),i.jsx("li",{children:"Lower ROUGE thresholds (0.5-0.6) for creative/varied responses"}),i.jsx("li",{children:"Higher thresholds (0.8-0.9) for factual/precise responses"}),i.jsx("li",{children:"Use tags to organize tests by feature or priority"}),i.jsx("li",{children:"Test sub-agents individually using Target Agent selector"})]})]})]}),f==="json"&&i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[i.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:i.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this test case. You can use this with ",i.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval"}),"."]})}),i.jsx("div",{style:{flex:1,minHeight:300,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:i.jsx(Wt,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify({name:d.name,description:d.description||void 0,tags:(w=d.tags)!=null&&w.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(_=>{var D;return{user_message:_.user_message,expected_response:_.expected_response||void 0,expected_tool_calls:(D=_.expected_tool_calls)!=null&&D.length?_.expected_tool_calls.map(S=>({tool_name:S.tool_name,args:S.match_type!=="name_only"&&Object.keys(S.args||{}).length?S.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(P=d.rubrics)!=null&&P.length?d.rubrics.map(_=>_.rubric):void 0},null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),i.jsx("div",{style:{display:"flex",gap:8},children:i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var D,S;const _=JSON.stringify({name:d.name,description:d.description||void 0,tags:(D=d.tags)!=null&&D.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(R=>{var L;return{user_message:R.user_message,expected_response:R.expected_response||void 0,expected_tool_calls:(L=R.expected_tool_calls)!=null&&L.length?R.expected_tool_calls.map(W=>({tool_name:W.tool_name,args:W.match_type!=="name_only"&&Object.keys(W.args||{}).length?W.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(S=d.rubrics)!=null&&S.length?d.rubrics.map(R=>R.rubric):void 0},null,2);navigator.clipboard.writeText(_)},children:[i.jsx(vs,{size:14})," Copy JSON"]})})]})]}),r&&i.jsxs("div",{className:"result-panel",children:[i.jsxs("div",{className:`result-header ${r.passed?"passed":"failed"}`,children:[r.passed?i.jsxs(i.Fragment,{children:[i.jsx(yr,{size:18})," ",i.jsx("strong",{children:"Passed"})]}):i.jsxs(i.Fragment,{children:[i.jsx(ni,{size:18})," ",i.jsx("strong",{children:"Failed"})]}),i.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:12},children:[r.total_tokens?i.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},title:"Total tokens used",children:[r.total_tokens.toLocaleString()," tokens"]}):null,i.jsxs("span",{style:{color:"var(--text-muted)",fontSize:12},children:[r.duration_ms.toFixed(0),"ms"]}),r.session_id&&i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{window.location.href=`/project/${u==null?void 0:u.id}/run?session=${r.session_id}`},title:"View this session in the Run panel",style:{fontSize:11},children:[i.jsx(Xg,{size:12}),"View Session"]}),c&&i.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Close test results",style:{fontSize:11,padding:"4px 8px"},children:"✕"})]})]}),i.jsx("div",{className:"result-scores",children:r.metric_results.map((_,D)=>{var R;const S=ds(_.metric,_.score,_.threshold);return i.jsxs("div",{className:"score-card",children:[i.jsx("div",{className:`score-value ${_.passed?"passed":"failed"}`,children:S.value}),i.jsx("div",{className:"score-label",children:((R=pn[_.metric])==null?void 0:R.name)||_.metric}),i.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",marginTop:2},children:S.comparison}),_.error&&i.jsx("div",{style:{fontSize:10,color:"var(--error)",marginTop:4},children:_.error})]},D)})}),r.rubric_results&&r.rubric_results.length>0&&i.jsxs("div",{style:{marginTop:16},children:[i.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Custom Rubrics"}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:r.rubric_results.map((_,D)=>i.jsxs("div",{style:{padding:"8px 12px",borderRadius:"var(--radius-sm)",background:_.passed?"rgba(var(--success-rgb), 0.1)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${_.passed?"var(--success)":"var(--error)"}`,display:"flex",alignItems:"center",gap:10},children:[i.jsx("span",{style:{fontSize:16,color:_.passed?"var(--success)":"var(--error)",fontWeight:"bold"},children:_.passed?"✓":"✗"}),i.jsxs("div",{style:{flex:1},children:[i.jsx("div",{style:{fontSize:12,color:"var(--text-primary)"},children:_.rubric}),_.error&&i.jsxs("div",{style:{fontSize:10,color:"var(--error)",marginTop:2},children:["Error: ",_.error]})]})]},D))})]}),r.invocation_results.map((_,D)=>i.jsxs("div",{className:"result-details",children:[i.jsxs("h5",{children:["Turn ",D+1,": ",_.user_message.length>50?_.user_message.slice(0,50)+"…":_.user_message]}),_.metric_results.length>0&&i.jsx("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:_.metric_results.map((S,R)=>{var W;const L=ds(S.metric,S.score,S.threshold);return i.jsxs("span",{style:{fontSize:11,padding:"2px 6px",borderRadius:"var(--radius-sm)",background:S.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:S.passed?"var(--success)":"var(--error)"},children:[((W=pn[S.metric])==null?void 0:W.name)||S.metric,": ",L.value]},R)})}),i.jsxs("div",{className:"detail-box",children:[i.jsx("strong",{children:"Actual Response:"}),`
`,_.actual_response||"(no response)",`

`,_.actual_tool_calls.length>0&&i.jsxs(i.Fragment,{children:[i.jsx("strong",{children:"Tool Calls:"}),`
`,_.actual_tool_calls.map((S,R)=>`  ${R+1}. ${S.name}(${JSON.stringify(S.args)})
`).join("")]})]})]},D)),r.error&&i.jsxs("div",{className:"result-details",children:[i.jsx("h5",{style:{color:"var(--error)"},children:"Error"}),i.jsx("div",{className:"detail-box",style:{color:"var(--error)"},children:r.error})]})]})]})}function nN({evalSet:e,projectId:t,result:n,isRunning:r,caseResults:s,onUpdate:o,onDelete:a,onRun:l,onExport:c}){var j,N,v,g;const[u,d]=b.useState(e.name),[p,f]=b.useState(!1);b.useEffect(()=>{d(e.name)},[e.id]);const m=b.useCallback(()=>{u!==e.name&&o({name:u})},[u,e.name,o]),y=x=>x==null?"-":`${Math.round(x*100)}%`;return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"editor-header",children:[i.jsx(ex,{size:20,style:{color:"var(--accent-secondary)"}}),i.jsx("input",{type:"text",value:u,onChange:x=>d(x.target.value),onBlur:m,placeholder:"Eval set name"}),i.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const x=`${window.location.origin}/project/${t}/evaluate?set=${e.id}`;navigator.clipboard.writeText(x)},title:"Copy link to this eval set",children:i.jsx(zu,{size:14})}),i.jsxs("button",{className:`btn btn-sm ${p?"btn-primary":"btn-secondary"}`,onClick:()=>f(!p),title:"View/Hide JSON",children:[i.jsx(hn,{size:14}),"JSON"]}),i.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Export as JSON (compatible with adk eval)",children:i.jsx(bs,{size:14})}),i.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:r,children:[r?i.jsx(ls,{size:14,className:"spinning"}):i.jsx(Yn,{size:14}),"Run All"]}),i.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:i.jsx(Fe,{size:14})})]}),i.jsx("div",{className:"editor-content",children:p?i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[i.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:i.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this evaluation set. Save this file and use with ",i.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval <agent_path> <eval_file.json>"})]})}),i.jsx("div",{style:{flex:1,minHeight:400,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:i.jsx(Wt,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(x=>{var T,z;return{name:x.name,description:x.description||void 0,tags:(T=x.tags)!=null&&T.length?x.tags:void 0,target_agent:x.target_agent!=="root_agent"?x.target_agent:void 0,invocations:x.invocations.map(w=>{var P;return{user_message:w.user_message,expected_response:w.expected_response||void 0,expected_tool_calls:(P=w.expected_tool_calls)!=null&&P.length?w.expected_tool_calls.map(_=>({tool_name:_.tool_name,args:_.match_type!=="name_only"&&Object.keys(_.args||{}).length?_.args:void 0})):void 0}}),session_input:Object.keys(x.session_input||{}).length?{state:x.session_input}:void 0,final_session_state:Object.keys(x.final_session_state||{}).length?x.final_session_state:void 0,rubrics:(z=x.rubrics)!=null&&z.length?x.rubrics.map(w=>w.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((j=e.eval_config.metrics)==null?void 0:j.filter(x=>x.enabled))||void 0}:void 0}],null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),i.jsx("div",{style:{display:"flex",gap:8},children:i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var T;const x=JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(z=>{var w,P;return{name:z.name,description:z.description||void 0,tags:(w=z.tags)!=null&&w.length?z.tags:void 0,target_agent:z.target_agent!=="root_agent"?z.target_agent:void 0,invocations:z.invocations.map(_=>{var D;return{user_message:_.user_message,expected_response:_.expected_response||void 0,expected_tool_calls:(D=_.expected_tool_calls)!=null&&D.length?_.expected_tool_calls.map(S=>({tool_name:S.tool_name,args:S.match_type!=="name_only"&&Object.keys(S.args||{}).length?S.args:void 0})):void 0}}),session_input:Object.keys(z.session_input||{}).length?{state:z.session_input}:void 0,final_session_state:Object.keys(z.final_session_state||{}).length?z.final_session_state:void 0,rubrics:(P=z.rubrics)!=null&&P.length?z.rubrics.map(_=>_.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((T=e.eval_config.metrics)==null?void 0:T.filter(z=>z.enabled))||void 0}:void 0}],null,2);navigator.clipboard.writeText(x)},children:[i.jsx(vs,{size:14})," Copy JSON"]})})]}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"form-section",children:[i.jsx("h4",{children:"Description"}),i.jsx("textarea",{value:e.description,onChange:x=>o({description:x.target.value}),placeholder:"Description of this evaluation set...",style:{minHeight:40}})]}),i.jsxs("div",{className:"form-section",children:[i.jsx("h4",{children:"LLM Judge Model"}),i.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Model used for LLM-judged metrics (safety, hallucinations, etc.)."}),i.jsx(ZC,{value:((N=e.eval_config)==null?void 0:N.judge_model)||"",onChange:x=>o({eval_config:{...e.eval_config,judge_model:x}})})]}),i.jsxs("div",{className:"form-section",children:[i.jsxs("h4",{children:[i.jsx(rx,{size:14})," Evaluation Metrics"]}),i.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Configure which metrics to use and their pass thresholds."}),Object.keys(pn).map(x=>{var _,D,S;const T=pn[x],z=(D=(_=e.eval_config)==null?void 0:_.metrics)==null?void 0:D.find(R=>R.metric===x),w=(z==null?void 0:z.enabled)??!1,P=((S=z==null?void 0:z.criterion)==null?void 0:S.threshold)??.7;return i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[i.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[i.jsx("input",{type:"checkbox",checked:w,onChange:R=>{var U;const L=[...((U=e.eval_config)==null?void 0:U.metrics)||[]],W=L.findIndex($=>$.metric===x);R.target.checked?W===-1?L.push({metric:x,enabled:!0,criterion:{threshold:.7}}):L[W]={...L[W],enabled:!0}:W!==-1&&(L[W]={...L[W],enabled:!1}),o({eval_config:{...e.eval_config,metrics:L}})}}),i.jsx("span",{className:"toggle-slider"})]}),i.jsxs("span",{style:{fontSize:12,opacity:w?1:.5,minWidth:140,fontWeight:w?500:400},children:[T.name,T.requiresJudge&&i.jsx("span",{style:{fontSize:9,marginLeft:4,color:"var(--accent-primary)"},children:"LLM"})]}),i.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:w?1:.4},children:"≥"}),i.jsx("input",{type:"number",min:0,max:1,step:.1,value:P,disabled:!w,onChange:R=>{var U;const L=[...((U=e.eval_config)==null?void 0:U.metrics)||[]],W=L.findIndex($=>$.metric===x);W!==-1&&(L[W]={...L[W],criterion:{...L[W].criterion,threshold:parseFloat(R.target.value)||.7}},o({eval_config:{...e.eval_config,metrics:L}}))},style:{width:60,textAlign:"center",opacity:w?1:.3,padding:"2px 4px",fontSize:11}})]},x)}),i.jsxs("div",{className:"form-row",style:{marginTop:16},children:[i.jsxs("div",{className:"form-field",children:[i.jsx("label",{children:"Default Trajectory Match Type"}),i.jsxs("select",{value:((v=e.eval_config)==null?void 0:v.default_trajectory_match_type)||"in_order",onChange:x=>o({eval_config:{...e.eval_config,default_trajectory_match_type:x.target.value}}),children:[i.jsx("option",{value:"exact",children:"Exact (same order, no extras)"}),i.jsx("option",{value:"in_order",children:"In Order (extras allowed between)"}),i.jsx("option",{value:"any_order",children:"Any Order (all present, any order)"})]})]}),i.jsxs("div",{className:"form-field",children:[i.jsx("label",{children:"Number of Runs"}),i.jsx("input",{type:"number",min:1,max:10,value:((g=e.eval_config)==null?void 0:g.num_runs)||1,onChange:x=>o({eval_config:{...e.eval_config,num_runs:parseInt(x.target.value)||1}})}),i.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:"Run each test multiple times for statistical reliability."})]})]})]}),i.jsxs("div",{className:"form-section",children:[i.jsxs("h4",{children:[i.jsx(R0,{size:14})," Coverage Summary"]}),n?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"result-scores",children:[i.jsxs("div",{className:"score-card",children:[i.jsxs("div",{className:"score-value",style:{color:"var(--accent-primary)"},children:[n.passed_cases,"/",n.total_cases]}),i.jsx("div",{className:"score-label",children:"Cases Passed"})]}),i.jsxs("div",{className:"score-card",children:[i.jsx("div",{className:`score-value ${n.overall_pass_rate>=.8?"passed":"failed"}`,children:y(n.overall_pass_rate)}),i.jsx("div",{className:"score-label",children:"Pass Rate"})]}),Object.entries(n.metric_avg_scores||{}).map(([x,T])=>{var w;const z=ds(x,T);return i.jsxs("div",{className:"score-card",children:[i.jsx("div",{className:"score-value",children:z.value}),i.jsxs("div",{className:"score-label",children:["Avg ",((w=pn[x])==null?void 0:w.name)||x]})]},x)})]}),i.jsxs("div",{style:{marginTop:16},children:[i.jsx("div",{style:{marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Overall Pass Rate"}),i.jsx("div",{className:"coverage-bar",children:i.jsx("div",{className:`coverage-fill ${n.overall_pass_rate>=.8?"passed":"failed"}`,style:{width:`${n.overall_pass_rate*100}%`}})})]}),Object.entries(n.metric_pass_rates||{}).length>0&&i.jsxs("div",{style:{marginTop:16},children:[i.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Metric Pass Rates"}),Object.entries(n.metric_pass_rates).map(([x,T])=>{var z;return i.jsxs("div",{style:{marginBottom:8},children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4},children:[i.jsx("span",{children:((z=pn[x])==null?void 0:z.name)||x}),i.jsx("span",{children:y(T)})]}),i.jsx("div",{className:"coverage-bar",children:i.jsx("div",{className:`coverage-fill ${T>=.8?"passed":"failed"}`,style:{width:`${T*100}%`}})})]},x)})]}),i.jsxs("div",{style:{marginTop:16},children:[i.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Individual Results"}),i.jsxs("table",{style:{width:"100%",fontSize:12,borderCollapse:"collapse"},children:[i.jsx("thead",{children:i.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[i.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Test Case"}),i.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Metrics"}),i.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Status"})]})}),i.jsx("tbody",{children:n.case_results.map(x=>i.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[i.jsx("td",{style:{padding:"8px 4px"},children:x.eval_case_name}),i.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:x.metric_results.map((T,z)=>{const w=ds(T.metric,T.score,T.threshold);return i.jsx("span",{style:{fontSize:10,padding:"2px 4px",marginRight:4,borderRadius:"var(--radius-sm)",background:T.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:T.passed?"var(--success)":"var(--error)"},children:w.value},z)})}),i.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:x.passed?i.jsx(yr,{size:14,style:{color:"var(--success)"}}):x.error?i.jsx(ei,{size:14,style:{color:"var(--warning)"}}):i.jsx(ni,{size:14,style:{color:"var(--error)"}})})]},x.eval_case_id))})]})]})]}):i.jsxs("div",{style:{textAlign:"center",padding:"32px",color:"var(--text-muted)",background:"var(--bg-tertiary)",borderRadius:"var(--radius-md)"},children:[i.jsx(Pu,{size:32,style:{marginBottom:8,opacity:.3}}),i.jsx("p",{children:"Run the evaluation set to see coverage metrics"})]})]}),i.jsxs("div",{className:"form-section",children:[i.jsxs("h4",{children:["Test Cases (",e.eval_cases.length,")"]}),e.eval_cases.length===0?i.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"No test cases yet. Add cases to this eval set to start testing."}):i.jsx("ul",{style:{listStyle:"none",padding:0},children:e.eval_cases.map(x=>{const T=s.get(x.id);return i.jsxs("li",{style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",background:"var(--bg-tertiary)",borderRadius:"var(--radius-sm)",marginBottom:8},children:[T?T.passed?i.jsx(yr,{size:14,style:{color:"var(--success)"}}):i.jsx(ni,{size:14,style:{color:"var(--error)"}}):i.jsx(Mo,{size:14,style:{color:"var(--text-muted)"}}),i.jsx("span",{style:{flex:1},children:x.name}),i.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},children:[x.invocations.length," turn(s)"]})]},x.id)})})]})]})})]})}function rN(){const{project:e,setProject:t}=ut(),[n,r]=b.useState(""),[s,o]=b.useState(!0),[a,l]=b.useState(!1),[c,u]=b.useState(null),[d,p]=b.useState(!1);if(!e)return null;b.useEffect(()=>{f()},[e.id]);async function f(){o(!0),u(null);try{const g=await Dg(e.id);r(g),l(!1)}catch(g){u(g.message)}finally{o(!1)}}function m(g){g!==void 0&&(r(g),l(!0),u(null))}async function y(){o(!0),u(null);try{const g=await $g(e.id,n);t(g),l(!1)}catch(g){u(g.message)}finally{o(!1)}}function j(){navigator.clipboard.writeText(n),p(!0),setTimeout(()=>p(!1),2e3)}function N(){const g=new Blob([n],{type:"text/yaml"}),x=URL.createObjectURL(g),T=document.createElement("a");T.href=x,T.download=`${e.name}.yaml`,T.click(),URL.revokeObjectURL(x)}function v(){const g=document.createElement("input");g.type="file",g.accept=".yaml,.yml",g.onchange=async x=>{var w;const T=(w=x.target.files)==null?void 0:w[0];if(!T)return;const z=await T.text();r(z),l(!0)},g.click()}return i.jsxs("div",{className:"yaml-panel",children:[i.jsx("style",{children:`
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
      `}),i.jsxs("div",{className:"yaml-header",children:[i.jsxs("div",{className:"yaml-title",children:[i.jsx("h3",{children:"Project Configuration"}),a&&i.jsxs("span",{className:"status-badge warning",children:[i.jsx(ei,{size:12}),"Unsaved changes"]}),c&&i.jsxs("span",{className:"status-badge error",children:[i.jsx(ei,{size:12}),c]}),d&&i.jsxs("span",{className:"status-badge success",children:[i.jsx(Su,{size:12}),"Copied!"]})]}),i.jsxs("div",{className:"yaml-actions",children:[i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:j,title:"Copy to clipboard",children:[i.jsx(vs,{size:14}),"Copy"]}),i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:N,title:"Download YAML",children:[i.jsx(bs,{size:14}),"Download"]}),i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:v,title:"Upload YAML",children:[i.jsx(ca,{size:14}),"Upload"]}),i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:f,title:"Reload from server",children:[i.jsx(Xt,{size:14}),"Reload"]}),i.jsx("button",{className:"btn btn-primary btn-sm",onClick:y,disabled:!a||s,children:"Apply Changes"})]})]}),i.jsx("div",{className:"yaml-editor",children:i.jsx(Wt,{height:"100%",language:"yaml",theme:"vs-dark",value:n,onChange:m,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),i.jsxs("div",{className:"yaml-info",children:[i.jsx("p",{children:"This YAML represents your entire project configuration including the app, agents, tools, and state keys."}),i.jsxs("p",{children:["You can edit the YAML directly, then click ",i.jsx("code",{children:"Apply Changes"})," to update the project. Use ",i.jsx("code",{children:"Download"})," to save a backup or ",i.jsx("code",{children:"Upload"})," to import a configuration."]})]})]})}function iN(){const{project:e}=ut(),[t,n]=b.useState(!1),[r,s]=b.useState(""),[o,a]=b.useState(!1),[l,c]=b.useState(null);if(b.useEffect(()=>{e&&(a(!0),c(null),fetch(`/api/projects/${e.id}/code`).then(p=>{if(!p.ok)throw new Error("Failed to fetch code");return p.json()}).then(p=>{let f=p.code||"";f=f.replace(/\n# --- Callback instrumentation \(for event tracking\) ---[\s\S]*?# --- End callback instrumentation ---\n/g,""),f=f.replace(/_wrap_callback\("[^"]+",\s*"[^"]+",\s*(\w+)\)/g,"$1"),s(f),a(!1)}).catch(p=>{c(p.message),a(!1),s("# Failed to generate code. Please check the backend logs.")}))},[e]),!e)return null;function u(){navigator.clipboard.writeText(r),n(!0),setTimeout(()=>n(!1),2e3)}function d(){if(!e)return;const p=new Blob([r],{type:"text/x-python"}),f=URL.createObjectURL(p),m=document.createElement("a");m.href=f,m.download=`${e.name}_agent.py`,m.click(),URL.revokeObjectURL(f)}return i.jsxs("div",{className:"code-panel",children:[i.jsx("style",{children:`
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
      `}),i.jsxs("div",{className:"code-header",children:[i.jsxs("div",{className:"code-title",children:[i.jsx(hn,{size:16}),i.jsx("h3",{children:"Python Code"}),i.jsx("span",{className:"badge",children:o?"Loading...":"Generated"}),t&&i.jsxs("span",{className:"status-badge success",children:[i.jsx(Su,{size:12}),"Copied!"]}),l&&i.jsxs("span",{className:"status-badge error",children:[i.jsx(ei,{size:12}),"Error"]})]}),i.jsxs("div",{className:"code-actions",children:[i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:u,title:"Copy to clipboard",disabled:o||!!l,children:[i.jsx(vs,{size:14}),"Copy"]}),i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:d,title:"Download Python file",disabled:o||!!l,children:[i.jsx(bs,{size:14}),"Download"]})]})]}),i.jsx("div",{className:"code-editor",children:o?i.jsx("div",{className:"code-loading",children:i.jsx("div",{children:"Loading generated code..."})}):l?i.jsxs("div",{className:"code-error",children:[i.jsx(ei,{size:24}),i.jsx("div",{children:l})]}):i.jsx(Wt,{height:"100%",language:"python",theme:"vs-dark",value:r,options:{readOnly:!0,minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),i.jsxs("div",{className:"code-info",children:[i.jsx("p",{children:"This is the Python code equivalent of your project configuration. You can use this code directly with ADK."}),i.jsxs("p",{children:["Place this in a file named ",i.jsx("code",{children:"agent.py"})," inside your agent directory, then run with ",i.jsx("code",{children:"adk web ."})," or ",i.jsx("code",{children:"adk run your_agent"}),"."]})]})]})}const sN=[{id:"app",label:"App",icon:rx},{id:"agents",label:"Agents",icon:pr},{id:"tools",label:"Tools",icon:tn},{id:"callbacks",label:"Callbacks",icon:hn},{id:"run",label:"Run",icon:tx},{id:"skillsets",label:"SkillSets",icon:w0},{id:"eval",label:"Evaluate",icon:fc},{id:"yaml",label:"YAML",icon:S0},{id:"code",label:"Code",icon:hn}],oN=["app","agents","tools","callbacks","run","skillsets","eval","yaml","code"];function pl(){var $,Z;const{projectId:e,tab:t,itemId:n}=_b(),r=wu(),{project:s,setProject:o,activeTab:a,setActiveTab:l,hasUnsavedChanges:c,setHasUnsavedChanges:u,selectedAgentId:d,setSelectedAgentId:p,selectedToolId:f,setSelectedToolId:m}=ut(),[y,j]=b.useState(!0),[N,v]=b.useState(!1),[g,x]=b.useState(!1),[T,z]=b.useState(null),w=b.useRef(!0),P=b.useRef(null);b.useEffect(()=>{t&&oN.includes(t)?l(t):!t&&e&&r(`/project/${e}/${a}`,{replace:!0})},[t,e]),b.useEffect(()=>{t==="agents"&&n?p(n):t==="tools"&&n&&m(n)},[t,n]);function _(E){l(E),E==="agents"&&d?r(`/project/${e}/${E}/${d}`,{replace:!0}):E==="tools"&&f?r(`/project/${e}/${E}/${f}`,{replace:!0}):r(`/project/${e}/${E}`,{replace:!0})}function D(E){E?r(`/project/${e}/${a}/${E}`,{replace:!0}):r(`/project/${e}/${a}`,{replace:!0})}b.useEffect(()=>(e&&S(e),()=>{o(null),u(!1)}),[e]);async function S(E){w.current=!0;try{const O=await Rg(E);o(O),P.current=JSON.stringify(O),u(!1)}catch(O){console.error("Failed to load project:",O),r("/")}finally{j(!1),setTimeout(()=>{w.current=!1},100)}}async function R(){if(s){v(!0);try{const{eval_sets:E,...O}=s;await lc(s.id,O),P.current=JSON.stringify(s),u(!1)}catch(E){console.error("Failed to save project:",E)}finally{v(!1)}}}async function L(){if(s){x(!0),z(null),window.dispatchEvent(new CustomEvent("eval-tests-started"));try{let E=0,O=0;const I=[],k=[];for(const V of s.eval_sets||[]){if(V.eval_cases.length===0)continue;const Q=await qe.post(`/projects/${s.id}/eval-sets/${V.id}/run`,{});Q.result&&(E+=Q.result.passed_cases||0,O+=Q.result.total_cases||0,Q.result.case_results&&I.push(...Q.result.case_results),k.push(Q.result.eval_set_name||V.name||V.id))}if(I.length>0){const V={id:Date.now().toString(36)+Math.random().toString(36).substr(2,5),eval_set_id:"batch",eval_set_name:k.length>1?`All Tests (${k.length} sets)`:k[0]||"All Tests",started_at:Date.now()/1e3,completed_at:Date.now()/1e3,total_cases:O,passed_cases:E,failed_cases:O-E,case_results:I};try{await qe.post(`/projects/${s.id}/eval-history`,V)}catch(Q){console.warn("Failed to save batch eval run to history:",Q)}}z({passed:E,total:O}),window.dispatchEvent(new CustomEvent("eval-tests-completed")),setTimeout(()=>z(null),5e3)}catch(E){console.error("Failed to run tests:",E),z({passed:0,total:-1}),setTimeout(()=>z(null),5e3)}finally{x(!1)}}}const W=b.useRef(null);b.useEffect(()=>{if(s&&!w.current&&W.current){const E=s.app.models||[],O=W.current||[];if(E.some((k,V)=>{const Q=O.find(h=>h.id===k.id);return Q?Q.provider!==k.provider||Q.model_name!==k.model_name||Q.api_base!==k.api_base||Q.temperature!==k.temperature||Q.max_output_tokens!==k.max_output_tokens||Q.top_p!==k.top_p||Q.top_k!==k.top_k:!1})){const k=s.app.default_model_id,V=s.agents.map(h=>{if(h.type==="LlmAgent"&&h.model){const B=h.model._appModelId;if(B){const C=E.find(G=>G.id===B);if(C)return{...h,model:{provider:C.provider,model_name:C.model_name,api_base:C.api_base,temperature:C.temperature,max_output_tokens:C.max_output_tokens,top_p:C.top_p,top_k:C.top_k,fallbacks:[],_appModelId:B}}}else if(k){const C=E.find(G=>G.id===k);if(C&&h.model.provider===C.provider&&h.model.model_name===C.model_name&&h.model.api_base===C.api_base)return{...h,model:{provider:C.provider,model_name:C.model_name,api_base:C.api_base,temperature:C.temperature,max_output_tokens:C.max_output_tokens,top_p:C.top_p,top_k:C.top_k,fallbacks:[],_appModelId:k}}}}return h});V.some((h,B)=>JSON.stringify(h)!==JSON.stringify(s.agents[B]))&&o({...s,agents:V})}}s&&(W.current=s.app.models||[])},[s==null?void 0:s.app.models,s,o]);const U=b.useRef(null);return b.useEffect(()=>(s&&!w.current&&P.current&&JSON.stringify(s)!==P.current&&(u(!0),U.current&&clearTimeout(U.current),U.current=setTimeout(async()=>{try{const{eval_sets:O,...I}=s;await lc(s.id,I),P.current=JSON.stringify(s),u(!1)}catch(O){console.error("Auto-save failed:",O)}},500)),()=>{U.current&&clearTimeout(U.current)}),[s]),y?i.jsxs("div",{className:"loading-screen",children:[i.jsx("style",{children:`
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
      `}),i.jsxs("header",{className:"top-bar",children:[i.jsxs("div",{className:"top-bar-left",children:[i.jsxs("button",{className:"back-btn",onClick:()=>r("/"),children:[i.jsx(k0,{size:18}),"Project"]}),i.jsx("h1",{className:"project-name",children:s.name})]}),i.jsx("nav",{className:"tabs-bar",children:sN.map(E=>i.jsxs("button",{className:`tab-btn ${a===E.id?"active":""}`,onClick:()=>_(E.id),children:[i.jsx(E.icon,{size:14}),E.label]},E.id))}),i.jsxs("div",{className:"top-bar-right",children:[i.jsxs("button",{className:`btn ${T?T.total===-1?"btn-error":T.passed===T.total?"btn-success":"btn-warning":"btn-secondary"}`,onClick:L,disabled:g||!(($=s==null?void 0:s.eval_sets)!=null&&$.some(E=>E.eval_cases.length>0)),title:(Z=s==null?void 0:s.eval_sets)!=null&&Z.some(E=>E.eval_cases.length>0)?"Run all evaluation tests":"No test cases defined",style:{marginRight:8},children:[g?i.jsx(T0,{size:16,className:"spin"}):i.jsx(Yn,{size:16}),g?"Testing...":T?T.total===-1?"Error":`${T.passed}/${T.total}`:"Test"]}),i.jsxs("button",{className:"btn btn-primary",onClick:R,disabled:N,children:[i.jsx(Do,{size:16}),N?"Saving...":"Save"]})]})]}),i.jsxs("main",{className:"main-content",children:[a==="app"&&i.jsx(H0,{}),a==="agents"&&i.jsx(XS,{onSelectAgent:D}),a==="tools"&&i.jsx(LC,{onSelectTool:D}),a==="callbacks"&&i.jsx(AC,{onSelectCallback:D}),a==="run"&&i.jsx(JC,{}),a==="skillsets"&&i.jsx(QC,{}),a==="eval"&&i.jsx(XC,{}),a==="yaml"&&i.jsx(rN,{}),a==="code"&&i.jsx(iN,{})]})]}):null}function aN(){const{setMcpServers:e,setBuiltinTools:t}=ut();return b.useEffect(()=>{_u().then(e).catch(console.error),Fg().then(t).catch(console.error)},[e,t]),i.jsxs(Bb,{children:[i.jsx(_r,{path:"/",element:i.jsx(D0,{})}),i.jsx(_r,{path:"/project/:projectId",element:i.jsx(pl,{})}),i.jsx(_r,{path:"/project/:projectId/:tab",element:i.jsx(pl,{})}),i.jsx(_r,{path:"/project/:projectId/:tab/:itemId",element:i.jsx(pl,{})}),i.jsx(_r,{path:"*",element:i.jsx($b,{to:"/",replace:!0})})]})}fl.createRoot(document.getElementById("root")).render(i.jsx(Rt.StrictMode,{children:i.jsx(Vb,{children:i.jsx(aN,{})})}));
