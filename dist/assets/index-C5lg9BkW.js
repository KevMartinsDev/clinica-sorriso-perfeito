var _v=Object.defineProperty;var Bv=(e,t,n)=>t in e?_v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ft=(e,t,n)=>Bv(e,typeof t!="symbol"?t+"":t,n);function Uv(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function di(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var th={exports:{}},fs={},nh={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fi=Symbol.for("react.element"),Hv=Symbol.for("react.portal"),Wv=Symbol.for("react.fragment"),Gv=Symbol.for("react.strict_mode"),qv=Symbol.for("react.profiler"),Yv=Symbol.for("react.provider"),Kv=Symbol.for("react.context"),Qv=Symbol.for("react.forward_ref"),Xv=Symbol.for("react.suspense"),Zv=Symbol.for("react.memo"),Jv=Symbol.for("react.lazy"),Xd=Symbol.iterator;function ey(e){return e===null||typeof e!="object"?null:(e=Xd&&e[Xd]||e["@@iterator"],typeof e=="function"?e:null)}var rh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},oh=Object.assign,ih={};function Zr(e,t,n){this.props=e,this.context=t,this.refs=ih,this.updater=n||rh}Zr.prototype.isReactComponent={};Zr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ah(){}ah.prototype=Zr.prototype;function hu(e,t,n){this.props=e,this.context=t,this.refs=ih,this.updater=n||rh}var gu=hu.prototype=new ah;gu.constructor=hu;oh(gu,Zr.prototype);gu.isPureReactComponent=!0;var Zd=Array.isArray,sh=Object.prototype.hasOwnProperty,vu={current:null},lh={key:!0,ref:!0,__self:!0,__source:!0};function ch(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)sh.call(t,r)&&!lh.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:fi,type:e,key:i,ref:a,props:o,_owner:vu.current}}function ty(e,t){return{$$typeof:fi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function yu(e){return typeof e=="object"&&e!==null&&e.$$typeof===fi}function ny(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Jd=/\/+/g;function Hs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ny(""+e.key):t.toString(36)}function ta(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case fi:case Hv:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Hs(a,0):r,Zd(o)?(n="",e!=null&&(n=e.replace(Jd,"$&/")+"/"),ta(o,t,n,"",function(u){return u})):o!=null&&(yu(o)&&(o=ty(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Jd,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Zd(e))for(var s=0;s<e.length;s++){i=e[s];var l=r+Hs(i,s);a+=ta(i,t,n,l,o)}else if(l=ey(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=r+Hs(i,s++),a+=ta(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ci(e,t,n){if(e==null)return e;var r=[],o=0;return ta(e,r,"","",function(i){return t.call(n,i,o++)}),r}function ry(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},na={transition:null},oy={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:na,ReactCurrentOwner:vu};function uh(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:Ci,forEach:function(e,t,n){Ci(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ci(e,function(){t++}),t},toArray:function(e){return Ci(e,function(t){return t})||[]},only:function(e){if(!yu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=Zr;V.Fragment=Wv;V.Profiler=qv;V.PureComponent=hu;V.StrictMode=Gv;V.Suspense=Xv;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oy;V.act=uh;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=oh({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=vu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)sh.call(t,l)&&!lh.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:fi,type:e.type,key:o,ref:i,props:r,_owner:a}};V.createContext=function(e){return e={$$typeof:Kv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Yv,_context:e},e.Consumer=e};V.createElement=ch;V.createFactory=function(e){var t=ch.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:Qv,render:e}};V.isValidElement=yu;V.lazy=function(e){return{$$typeof:Jv,_payload:{_status:-1,_result:e},_init:ry}};V.memo=function(e,t){return{$$typeof:Zv,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=na.transition;na.transition={};try{e()}finally{na.transition=t}};V.unstable_act=uh;V.useCallback=function(e,t){return $e.current.useCallback(e,t)};V.useContext=function(e){return $e.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};V.useEffect=function(e,t){return $e.current.useEffect(e,t)};V.useId=function(){return $e.current.useId()};V.useImperativeHandle=function(e,t,n){return $e.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return $e.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return $e.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return $e.current.useMemo(e,t)};V.useReducer=function(e,t,n){return $e.current.useReducer(e,t,n)};V.useRef=function(e){return $e.current.useRef(e)};V.useState=function(e){return $e.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return $e.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return $e.current.useTransition()};V.version="18.3.1";nh.exports=V;var b=nh.exports;const G=di(b),iy=Uv({__proto__:null,default:G},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ay=b,sy=Symbol.for("react.element"),ly=Symbol.for("react.fragment"),cy=Object.prototype.hasOwnProperty,uy=ay.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dy={key:!0,ref:!0,__self:!0,__source:!0};function dh(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)cy.call(t,r)&&!dy.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:sy,type:e,key:i,ref:a,props:o,_owner:uy.current}}fs.Fragment=ly;fs.jsx=dh;fs.jsxs=dh;th.exports=fs;var c=th.exports,ql={},fh={exports:{}},Qe={},ph={exports:{}},mh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,$){var I=z.length;z.push($);e:for(;0<I;){var N=I-1>>>1,_=z[N];if(0<o(_,$))z[N]=$,z[I]=_,I=N;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var $=z[0],I=z.pop();if(I!==$){z[0]=I;e:for(var N=0,_=z.length,Ct=_>>>1;N<Ct;){var Le=2*(N+1)-1,ut=z[Le],me=Le+1,Ze=z[me];if(0>o(ut,I))me<_&&0>o(Ze,ut)?(z[N]=Ze,z[me]=I,N=me):(z[N]=ut,z[Le]=I,N=Le);else if(me<_&&0>o(Ze,I))z[N]=Ze,z[me]=I,N=me;else break e}}return $}function o(z,$){var I=z.sortIndex-$.sortIndex;return I!==0?I:z.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],d=1,f=null,p=3,h=!1,y=!1,w=!1,j=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(z){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=z)r(u),$.sortIndex=$.expirationTime,t(l,$);else break;$=n(u)}}function S(z){if(w=!1,g(z),!y)if(n(l)!==null)y=!0,J(P);else{var $=n(u);$!==null&&Ce(S,$.startTime-z)}}function P(z,$){y=!1,w&&(w=!1,v(E),E=-1),h=!0;var I=p;try{for(g($),f=n(l);f!==null&&(!(f.expirationTime>$)||z&&!oe());){var N=f.callback;if(typeof N=="function"){f.callback=null,p=f.priorityLevel;var _=N(f.expirationTime<=$);$=e.unstable_now(),typeof _=="function"?f.callback=_:f===n(l)&&r(l),g($)}else r(l);f=n(l)}if(f!==null)var Ct=!0;else{var Le=n(u);Le!==null&&Ce(S,Le.startTime-$),Ct=!1}return Ct}finally{f=null,p=I,h=!1}}var k=!1,C=null,E=-1,D=5,M=-1;function oe(){return!(e.unstable_now()-M<D)}function pe(){if(C!==null){var z=e.unstable_now();M=z;var $=!0;try{$=C(!0,z)}finally{$?we():(k=!1,C=null)}}else k=!1}var we;if(typeof m=="function")we=function(){m(pe)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,jt=ce.port2;ce.port1.onmessage=pe,we=function(){jt.postMessage(null)}}else we=function(){j(pe,0)};function J(z){C=z,k||(k=!0,we())}function Ce(z,$){E=j(function(){z(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){y||h||(y=!0,J(P))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(z){switch(p){case 1:case 2:case 3:var $=3;break;default:$=p}var I=p;p=$;try{return z()}finally{p=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,$){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var I=p;p=z;try{return $()}finally{p=I}},e.unstable_scheduleCallback=function(z,$,I){var N=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?N+I:N):I=N,z){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=I+_,z={id:d++,callback:$,priorityLevel:z,startTime:I,expirationTime:_,sortIndex:-1},I>N?(z.sortIndex=I,t(u,z),n(l)===null&&z===n(u)&&(w?(v(E),E=-1):w=!0,Ce(S,I-N))):(z.sortIndex=_,t(l,z),y||h||(y=!0,J(P))),z},e.unstable_shouldYield=oe,e.unstable_wrapCallback=function(z){var $=p;return function(){var I=p;p=$;try{return z.apply(this,arguments)}finally{p=I}}}})(mh);ph.exports=mh;var fy=ph.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py=b,Ye=fy;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hh=new Set,Bo={};function rr(e,t){Ir(e,t),Ir(e+"Capture",t)}function Ir(e,t){for(Bo[e]=t,e=0;e<t.length;e++)hh.add(t[e])}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yl=Object.prototype.hasOwnProperty,my=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ef={},tf={};function hy(e){return Yl.call(tf,e)?!0:Yl.call(ef,e)?!1:my.test(e)?tf[e]=!0:(ef[e]=!0,!1)}function gy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function vy(e,t,n,r){if(t===null||typeof t>"u"||gy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ne(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){je[e]=new Ne(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];je[t]=new Ne(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){je[e]=new Ne(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){je[e]=new Ne(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){je[e]=new Ne(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){je[e]=new Ne(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){je[e]=new Ne(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){je[e]=new Ne(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){je[e]=new Ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var xu=/[\-:]([a-z])/g;function wu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(xu,wu);je[t]=new Ne(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(xu,wu);je[t]=new Ne(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(xu,wu);je[t]=new Ne(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){je[e]=new Ne(e,1,!1,e.toLowerCase(),null,!1,!1)});je.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){je[e]=new Ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function bu(e,t,n,r){var o=je.hasOwnProperty(t)?je[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(vy(t,n,o,r)&&(n=null),r||o===null?hy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Qt=py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ki=Symbol.for("react.element"),fr=Symbol.for("react.portal"),pr=Symbol.for("react.fragment"),Su=Symbol.for("react.strict_mode"),Kl=Symbol.for("react.profiler"),gh=Symbol.for("react.provider"),vh=Symbol.for("react.context"),ju=Symbol.for("react.forward_ref"),Ql=Symbol.for("react.suspense"),Xl=Symbol.for("react.suspense_list"),Cu=Symbol.for("react.memo"),nn=Symbol.for("react.lazy"),yh=Symbol.for("react.offscreen"),nf=Symbol.iterator;function ro(e){return e===null||typeof e!="object"?null:(e=nf&&e[nf]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,Ws;function bo(e){if(Ws===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ws=t&&t[1]||""}return`
`+Ws+e}var Gs=!1;function qs(e,t){if(!e||Gs)return"";Gs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var l=`
`+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Gs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?bo(e):""}function yy(e){switch(e.tag){case 5:return bo(e.type);case 16:return bo("Lazy");case 13:return bo("Suspense");case 19:return bo("SuspenseList");case 0:case 2:case 15:return e=qs(e.type,!1),e;case 11:return e=qs(e.type.render,!1),e;case 1:return e=qs(e.type,!0),e;default:return""}}function Zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pr:return"Fragment";case fr:return"Portal";case Kl:return"Profiler";case Su:return"StrictMode";case Ql:return"Suspense";case Xl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vh:return(e.displayName||"Context")+".Consumer";case gh:return(e._context.displayName||"Context")+".Provider";case ju:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cu:return t=e.displayName||null,t!==null?t:Zl(e.type)||"Memo";case nn:t=e._payload,e=e._init;try{return Zl(e(t))}catch{}}return null}function xy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zl(t);case 8:return t===Su?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wy(e){var t=xh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pi(e){e._valueTracker||(e._valueTracker=wy(e))}function wh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=xh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Sa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jl(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function rf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Cn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function bh(e,t){t=t.checked,t!=null&&bu(e,"checked",t,!1)}function ec(e,t){bh(e,t);var n=Cn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?tc(e,t.type,n):t.hasOwnProperty("defaultValue")&&tc(e,t.type,Cn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function of(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function tc(e,t,n){(t!=="number"||Sa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var So=Array.isArray;function zr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Cn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function nc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function af(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(So(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Cn(n)}}function Sh(e,t){var n=Cn(t.value),r=Cn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function sf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function jh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?jh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ei,Ch=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ei=Ei||document.createElement("div"),Ei.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ei.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Uo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var To={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},by=["Webkit","ms","Moz","O"];Object.keys(To).forEach(function(e){by.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),To[t]=To[e]})});function kh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||To.hasOwnProperty(e)&&To[e]?(""+t).trim():t+"px"}function Ph(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=kh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Sy=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oc(e,t){if(t){if(Sy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function ic(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ac=null;function ku(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sc=null,Ar=null,Rr=null;function lf(e){if(e=hi(e)){if(typeof sc!="function")throw Error(T(280));var t=e.stateNode;t&&(t=vs(t),sc(e.stateNode,e.type,t))}}function Eh(e){Ar?Rr?Rr.push(e):Rr=[e]:Ar=e}function Th(){if(Ar){var e=Ar,t=Rr;if(Rr=Ar=null,lf(e),t)for(e=0;e<t.length;e++)lf(t[e])}}function zh(e,t){return e(t)}function Ah(){}var Ys=!1;function Rh(e,t,n){if(Ys)return e(t,n);Ys=!0;try{return zh(e,t,n)}finally{Ys=!1,(Ar!==null||Rr!==null)&&(Ah(),Th())}}function Ho(e,t){var n=e.stateNode;if(n===null)return null;var r=vs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var lc=!1;if(Wt)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){lc=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{lc=!1}function jy(e,t,n,r,o,i,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var zo=!1,ja=null,Ca=!1,cc=null,Cy={onError:function(e){zo=!0,ja=e}};function ky(e,t,n,r,o,i,a,s,l){zo=!1,ja=null,jy.apply(Cy,arguments)}function Py(e,t,n,r,o,i,a,s,l){if(ky.apply(this,arguments),zo){if(zo){var u=ja;zo=!1,ja=null}else throw Error(T(198));Ca||(Ca=!0,cc=u)}}function or(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Dh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cf(e){if(or(e)!==e)throw Error(T(188))}function Ey(e){var t=e.alternate;if(!t){if(t=or(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return cf(o),e;if(i===r)return cf(o),t;i=i.sibling}throw Error(T(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function Mh(e){return e=Ey(e),e!==null?$h(e):null}function $h(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=$h(e);if(t!==null)return t;e=e.sibling}return null}var Nh=Ye.unstable_scheduleCallback,uf=Ye.unstable_cancelCallback,Ty=Ye.unstable_shouldYield,zy=Ye.unstable_requestPaint,ae=Ye.unstable_now,Ay=Ye.unstable_getCurrentPriorityLevel,Pu=Ye.unstable_ImmediatePriority,Lh=Ye.unstable_UserBlockingPriority,ka=Ye.unstable_NormalPriority,Ry=Ye.unstable_LowPriority,Ih=Ye.unstable_IdlePriority,ps=null,At=null;function Dy(e){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(ps,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:Ny,My=Math.log,$y=Math.LN2;function Ny(e){return e>>>=0,e===0?32:31-(My(e)/$y|0)|0}var Ti=64,zi=4194304;function jo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Pa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=jo(s):(i&=a,i!==0&&(r=jo(i)))}else a=n&~o,a!==0?r=jo(a):i!==0&&(r=jo(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),o=1<<n,r|=e[n],t&=~o;return r}function Ly(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Iy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-xt(i),s=1<<a,l=o[a];l===-1?(!(s&n)||s&r)&&(o[a]=Ly(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function uc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Oh(){var e=Ti;return Ti<<=1,!(Ti&4194240)&&(Ti=64),e}function Ks(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function Oy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-xt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Eu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var W=0;function Vh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fh,Tu,_h,Bh,Uh,dc=!1,Ai=[],fn=null,pn=null,mn=null,Wo=new Map,Go=new Map,an=[],Vy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function df(e,t){switch(e){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":mn=null;break;case"pointerover":case"pointerout":Wo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(t.pointerId)}}function io(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=hi(t),t!==null&&Tu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Fy(e,t,n,r,o){switch(t){case"focusin":return fn=io(fn,e,t,n,r,o),!0;case"dragenter":return pn=io(pn,e,t,n,r,o),!0;case"mouseover":return mn=io(mn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Wo.set(i,io(Wo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Go.set(i,io(Go.get(i)||null,e,t,n,r,o)),!0}return!1}function Hh(e){var t=Bn(e.target);if(t!==null){var n=or(t);if(n!==null){if(t=n.tag,t===13){if(t=Dh(n),t!==null){e.blockedOn=t,Uh(e.priority,function(){_h(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ra(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ac=r,n.target.dispatchEvent(r),ac=null}else return t=hi(n),t!==null&&Tu(t),e.blockedOn=n,!1;t.shift()}return!0}function ff(e,t,n){ra(e)&&n.delete(t)}function _y(){dc=!1,fn!==null&&ra(fn)&&(fn=null),pn!==null&&ra(pn)&&(pn=null),mn!==null&&ra(mn)&&(mn=null),Wo.forEach(ff),Go.forEach(ff)}function ao(e,t){e.blockedOn===t&&(e.blockedOn=null,dc||(dc=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,_y)))}function qo(e){function t(o){return ao(o,e)}if(0<Ai.length){ao(Ai[0],e);for(var n=1;n<Ai.length;n++){var r=Ai[n];r.blockedOn===e&&(r.blockedOn=null)}}for(fn!==null&&ao(fn,e),pn!==null&&ao(pn,e),mn!==null&&ao(mn,e),Wo.forEach(t),Go.forEach(t),n=0;n<an.length;n++)r=an[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<an.length&&(n=an[0],n.blockedOn===null);)Hh(n),n.blockedOn===null&&an.shift()}var Dr=Qt.ReactCurrentBatchConfig,Ea=!0;function By(e,t,n,r){var o=W,i=Dr.transition;Dr.transition=null;try{W=1,zu(e,t,n,r)}finally{W=o,Dr.transition=i}}function Uy(e,t,n,r){var o=W,i=Dr.transition;Dr.transition=null;try{W=4,zu(e,t,n,r)}finally{W=o,Dr.transition=i}}function zu(e,t,n,r){if(Ea){var o=fc(e,t,n,r);if(o===null)il(e,t,r,Ta,n),df(e,r);else if(Fy(o,e,t,n,r))r.stopPropagation();else if(df(e,r),t&4&&-1<Vy.indexOf(e)){for(;o!==null;){var i=hi(o);if(i!==null&&Fh(i),i=fc(e,t,n,r),i===null&&il(e,t,r,Ta,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else il(e,t,r,null,n)}}var Ta=null;function fc(e,t,n,r){if(Ta=null,e=ku(r),e=Bn(e),e!==null)if(t=or(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Dh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ta=e,null}function Wh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ay()){case Pu:return 1;case Lh:return 4;case ka:case Ry:return 16;case Ih:return 536870912;default:return 16}default:return 16}}var ln=null,Au=null,oa=null;function Gh(){if(oa)return oa;var e,t=Au,n=t.length,r,o="value"in ln?ln.value:ln.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return oa=o.slice(e,1<r?1-r:void 0)}function ia(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ri(){return!0}function pf(){return!1}function Xe(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ri:pf,this.isPropagationStopped=pf,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ri)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ri)},persist:function(){},isPersistent:Ri}),t}var Jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ru=Xe(Jr),mi=re({},Jr,{view:0,detail:0}),Hy=Xe(mi),Qs,Xs,so,ms=re({},mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Du,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==so&&(so&&e.type==="mousemove"?(Qs=e.screenX-so.screenX,Xs=e.screenY-so.screenY):Xs=Qs=0,so=e),Qs)},movementY:function(e){return"movementY"in e?e.movementY:Xs}}),mf=Xe(ms),Wy=re({},ms,{dataTransfer:0}),Gy=Xe(Wy),qy=re({},mi,{relatedTarget:0}),Zs=Xe(qy),Yy=re({},Jr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ky=Xe(Yy),Qy=re({},Jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xy=Xe(Qy),Zy=re({},Jr,{data:0}),hf=Xe(Zy),Jy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ex={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=tx[e])?!!t[e]:!1}function Du(){return nx}var rx=re({},mi,{key:function(e){if(e.key){var t=Jy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ia(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ex[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Du,charCode:function(e){return e.type==="keypress"?ia(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ia(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ox=Xe(rx),ix=re({},ms,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gf=Xe(ix),ax=re({},mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Du}),sx=Xe(ax),lx=re({},Jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),cx=Xe(lx),ux=re({},ms,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dx=Xe(ux),fx=[9,13,27,32],Mu=Wt&&"CompositionEvent"in window,Ao=null;Wt&&"documentMode"in document&&(Ao=document.documentMode);var px=Wt&&"TextEvent"in window&&!Ao,qh=Wt&&(!Mu||Ao&&8<Ao&&11>=Ao),vf=" ",yf=!1;function Yh(e,t){switch(e){case"keyup":return fx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mr=!1;function mx(e,t){switch(e){case"compositionend":return Kh(t);case"keypress":return t.which!==32?null:(yf=!0,vf);case"textInput":return e=t.data,e===vf&&yf?null:e;default:return null}}function hx(e,t){if(mr)return e==="compositionend"||!Mu&&Yh(e,t)?(e=Gh(),oa=Au=ln=null,mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qh&&t.locale!=="ko"?null:t.data;default:return null}}var gx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gx[e.type]:t==="textarea"}function Qh(e,t,n,r){Eh(r),t=za(t,"onChange"),0<t.length&&(n=new Ru("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ro=null,Yo=null;function vx(e){s0(e,0)}function hs(e){var t=vr(e);if(wh(t))return e}function yx(e,t){if(e==="change")return t}var Xh=!1;if(Wt){var Js;if(Wt){var el="oninput"in document;if(!el){var wf=document.createElement("div");wf.setAttribute("oninput","return;"),el=typeof wf.oninput=="function"}Js=el}else Js=!1;Xh=Js&&(!document.documentMode||9<document.documentMode)}function bf(){Ro&&(Ro.detachEvent("onpropertychange",Zh),Yo=Ro=null)}function Zh(e){if(e.propertyName==="value"&&hs(Yo)){var t=[];Qh(t,Yo,e,ku(e)),Rh(vx,t)}}function xx(e,t,n){e==="focusin"?(bf(),Ro=t,Yo=n,Ro.attachEvent("onpropertychange",Zh)):e==="focusout"&&bf()}function wx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hs(Yo)}function bx(e,t){if(e==="click")return hs(t)}function Sx(e,t){if(e==="input"||e==="change")return hs(t)}function jx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:jx;function Ko(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Yl.call(t,o)||!St(e[o],t[o]))return!1}return!0}function Sf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jf(e,t){var n=Sf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sf(n)}}function Jh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Jh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function e0(){for(var e=window,t=Sa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Sa(e.document)}return t}function $u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Cx(e){var t=e0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Jh(n.ownerDocument.documentElement,n)){if(r!==null&&$u(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=jf(n,i);var a=jf(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var kx=Wt&&"documentMode"in document&&11>=document.documentMode,hr=null,pc=null,Do=null,mc=!1;function Cf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mc||hr==null||hr!==Sa(r)||(r=hr,"selectionStart"in r&&$u(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Do&&Ko(Do,r)||(Do=r,r=za(pc,"onSelect"),0<r.length&&(t=new Ru("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hr)))}function Di(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gr={animationend:Di("Animation","AnimationEnd"),animationiteration:Di("Animation","AnimationIteration"),animationstart:Di("Animation","AnimationStart"),transitionend:Di("Transition","TransitionEnd")},tl={},t0={};Wt&&(t0=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function gs(e){if(tl[e])return tl[e];if(!gr[e])return e;var t=gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in t0)return tl[e]=t[n];return e}var n0=gs("animationend"),r0=gs("animationiteration"),o0=gs("animationstart"),i0=gs("transitionend"),a0=new Map,kf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(e,t){a0.set(e,t),rr(t,[e])}for(var nl=0;nl<kf.length;nl++){var rl=kf[nl],Px=rl.toLowerCase(),Ex=rl[0].toUpperCase()+rl.slice(1);Tn(Px,"on"+Ex)}Tn(n0,"onAnimationEnd");Tn(r0,"onAnimationIteration");Tn(o0,"onAnimationStart");Tn("dblclick","onDoubleClick");Tn("focusin","onFocus");Tn("focusout","onBlur");Tn(i0,"onTransitionEnd");Ir("onMouseEnter",["mouseout","mouseover"]);Ir("onMouseLeave",["mouseout","mouseover"]);Ir("onPointerEnter",["pointerout","pointerover"]);Ir("onPointerLeave",["pointerout","pointerover"]);rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Co));function Pf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Py(r,t,void 0,e),e.currentTarget=null}function s0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;Pf(o,s,u),i=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;Pf(o,s,u),i=l}}}if(Ca)throw e=cc,Ca=!1,cc=null,e}function K(e,t){var n=t[xc];n===void 0&&(n=t[xc]=new Set);var r=e+"__bubble";n.has(r)||(l0(t,e,2,!1),n.add(r))}function ol(e,t,n){var r=0;t&&(r|=4),l0(n,e,r,t)}var Mi="_reactListening"+Math.random().toString(36).slice(2);function Qo(e){if(!e[Mi]){e[Mi]=!0,hh.forEach(function(n){n!=="selectionchange"&&(Tx.has(n)||ol(n,!1,e),ol(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mi]||(t[Mi]=!0,ol("selectionchange",!1,t))}}function l0(e,t,n,r){switch(Wh(t)){case 1:var o=By;break;case 4:o=Uy;break;default:o=zu}n=o.bind(null,t,n,e),o=void 0,!lc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function il(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Bn(s),a===null)return;if(l=a.tag,l===5||l===6){r=i=a;continue e}s=s.parentNode}}r=r.return}Rh(function(){var u=i,d=ku(n),f=[];e:{var p=a0.get(e);if(p!==void 0){var h=Ru,y=e;switch(e){case"keypress":if(ia(n)===0)break e;case"keydown":case"keyup":h=ox;break;case"focusin":y="focus",h=Zs;break;case"focusout":y="blur",h=Zs;break;case"beforeblur":case"afterblur":h=Zs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=mf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Gy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=sx;break;case n0:case r0:case o0:h=Ky;break;case i0:h=cx;break;case"scroll":h=Hy;break;case"wheel":h=dx;break;case"copy":case"cut":case"paste":h=Xy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=gf}var w=(t&4)!==0,j=!w&&e==="scroll",v=w?p!==null?p+"Capture":null:p;w=[];for(var m=u,g;m!==null;){g=m;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,v!==null&&(S=Ho(m,v),S!=null&&w.push(Xo(m,S,g)))),j)break;m=m.return}0<w.length&&(p=new h(p,y,null,n,d),f.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==ac&&(y=n.relatedTarget||n.fromElement)&&(Bn(y)||y[Gt]))break e;if((h||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,h?(y=n.relatedTarget||n.toElement,h=u,y=y?Bn(y):null,y!==null&&(j=or(y),y!==j||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=u),h!==y)){if(w=mf,S="onMouseLeave",v="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(w=gf,S="onPointerLeave",v="onPointerEnter",m="pointer"),j=h==null?p:vr(h),g=y==null?p:vr(y),p=new w(S,m+"leave",h,n,d),p.target=j,p.relatedTarget=g,S=null,Bn(d)===u&&(w=new w(v,m+"enter",y,n,d),w.target=g,w.relatedTarget=j,S=w),j=S,h&&y)t:{for(w=h,v=y,m=0,g=w;g;g=cr(g))m++;for(g=0,S=v;S;S=cr(S))g++;for(;0<m-g;)w=cr(w),m--;for(;0<g-m;)v=cr(v),g--;for(;m--;){if(w===v||v!==null&&w===v.alternate)break t;w=cr(w),v=cr(v)}w=null}else w=null;h!==null&&Ef(f,p,h,w,!1),y!==null&&j!==null&&Ef(f,j,y,w,!0)}}e:{if(p=u?vr(u):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var P=yx;else if(xf(p))if(Xh)P=Sx;else{P=wx;var k=xx}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(P=bx);if(P&&(P=P(e,u))){Qh(f,P,n,d);break e}k&&k(e,p,u),e==="focusout"&&(k=p._wrapperState)&&k.controlled&&p.type==="number"&&tc(p,"number",p.value)}switch(k=u?vr(u):window,e){case"focusin":(xf(k)||k.contentEditable==="true")&&(hr=k,pc=u,Do=null);break;case"focusout":Do=pc=hr=null;break;case"mousedown":mc=!0;break;case"contextmenu":case"mouseup":case"dragend":mc=!1,Cf(f,n,d);break;case"selectionchange":if(kx)break;case"keydown":case"keyup":Cf(f,n,d)}var C;if(Mu)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else mr?Yh(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(qh&&n.locale!=="ko"&&(mr||E!=="onCompositionStart"?E==="onCompositionEnd"&&mr&&(C=Gh()):(ln=d,Au="value"in ln?ln.value:ln.textContent,mr=!0)),k=za(u,E),0<k.length&&(E=new hf(E,e,null,n,d),f.push({event:E,listeners:k}),C?E.data=C:(C=Kh(n),C!==null&&(E.data=C)))),(C=px?mx(e,n):hx(e,n))&&(u=za(u,"onBeforeInput"),0<u.length&&(d=new hf("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=C))}s0(f,t)})}function Xo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function za(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Ho(e,n),i!=null&&r.unshift(Xo(e,i,o)),i=Ho(e,t),i!=null&&r.push(Xo(e,i,o))),e=e.return}return r}function cr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ef(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,o?(l=Ho(n,i),l!=null&&a.unshift(Xo(n,l,s))):o||(l=Ho(n,i),l!=null&&a.push(Xo(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var zx=/\r\n?/g,Ax=/\u0000|\uFFFD/g;function Tf(e){return(typeof e=="string"?e:""+e).replace(zx,`
`).replace(Ax,"")}function $i(e,t,n){if(t=Tf(t),Tf(e)!==t&&n)throw Error(T(425))}function Aa(){}var hc=null,gc=null;function vc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yc=typeof setTimeout=="function"?setTimeout:void 0,Rx=typeof clearTimeout=="function"?clearTimeout:void 0,zf=typeof Promise=="function"?Promise:void 0,Dx=typeof queueMicrotask=="function"?queueMicrotask:typeof zf<"u"?function(e){return zf.resolve(null).then(e).catch(Mx)}:yc;function Mx(e){setTimeout(function(){throw e})}function al(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),qo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);qo(t)}function hn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Af(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var eo=Math.random().toString(36).slice(2),zt="__reactFiber$"+eo,Zo="__reactProps$"+eo,Gt="__reactContainer$"+eo,xc="__reactEvents$"+eo,$x="__reactListeners$"+eo,Nx="__reactHandles$"+eo;function Bn(e){var t=e[zt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Gt]||n[zt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Af(e);e!==null;){if(n=e[zt])return n;e=Af(e)}return t}e=n,n=e.parentNode}return null}function hi(e){return e=e[zt]||e[Gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function vs(e){return e[Zo]||null}var wc=[],yr=-1;function zn(e){return{current:e}}function X(e){0>yr||(e.current=wc[yr],wc[yr]=null,yr--)}function q(e,t){yr++,wc[yr]=e.current,e.current=t}var kn={},Ae=zn(kn),Fe=zn(!1),Zn=kn;function Or(e,t){var n=e.type.contextTypes;if(!n)return kn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function _e(e){return e=e.childContextTypes,e!=null}function Ra(){X(Fe),X(Ae)}function Rf(e,t,n){if(Ae.current!==kn)throw Error(T(168));q(Ae,t),q(Fe,n)}function c0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(T(108,xy(e)||"Unknown",o));return re({},n,r)}function Da(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kn,Zn=Ae.current,q(Ae,e),q(Fe,Fe.current),!0}function Df(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=c0(e,t,Zn),r.__reactInternalMemoizedMergedChildContext=e,X(Fe),X(Ae),q(Ae,e)):X(Fe),q(Fe,n)}var It=null,ys=!1,sl=!1;function u0(e){It===null?It=[e]:It.push(e)}function Lx(e){ys=!0,u0(e)}function An(){if(!sl&&It!==null){sl=!0;var e=0,t=W;try{var n=It;for(W=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}It=null,ys=!1}catch(o){throw It!==null&&(It=It.slice(e+1)),Nh(Pu,An),o}finally{W=t,sl=!1}}return null}var xr=[],wr=0,Ma=null,$a=0,rt=[],ot=0,Jn=null,Ot=1,Vt="";function Ln(e,t){xr[wr++]=$a,xr[wr++]=Ma,Ma=e,$a=t}function d0(e,t,n){rt[ot++]=Ot,rt[ot++]=Vt,rt[ot++]=Jn,Jn=e;var r=Ot;e=Vt;var o=32-xt(r)-1;r&=~(1<<o),n+=1;var i=32-xt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Ot=1<<32-xt(t)+o|n<<o|r,Vt=i+e}else Ot=1<<i|n<<o|r,Vt=e}function Nu(e){e.return!==null&&(Ln(e,1),d0(e,1,0))}function Lu(e){for(;e===Ma;)Ma=xr[--wr],xr[wr]=null,$a=xr[--wr],xr[wr]=null;for(;e===Jn;)Jn=rt[--ot],rt[ot]=null,Vt=rt[--ot],rt[ot]=null,Ot=rt[--ot],rt[ot]=null}var qe=null,Ge=null,Z=!1,vt=null;function f0(e,t){var n=it(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Mf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Ge=hn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jn!==null?{id:Ot,overflow:Vt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=it(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,Ge=null,!0):!1;default:return!1}}function bc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Sc(e){if(Z){var t=Ge;if(t){var n=t;if(!Mf(e,t)){if(bc(e))throw Error(T(418));t=hn(n.nextSibling);var r=qe;t&&Mf(e,t)?f0(r,n):(e.flags=e.flags&-4097|2,Z=!1,qe=e)}}else{if(bc(e))throw Error(T(418));e.flags=e.flags&-4097|2,Z=!1,qe=e}}}function $f(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function Ni(e){if(e!==qe)return!1;if(!Z)return $f(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vc(e.type,e.memoizedProps)),t&&(t=Ge)){if(bc(e))throw p0(),Error(T(418));for(;t;)f0(e,t),t=hn(t.nextSibling)}if($f(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ge=hn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ge=null}}else Ge=qe?hn(e.stateNode.nextSibling):null;return!0}function p0(){for(var e=Ge;e;)e=hn(e.nextSibling)}function Vr(){Ge=qe=null,Z=!1}function Iu(e){vt===null?vt=[e]:vt.push(e)}var Ix=Qt.ReactCurrentBatchConfig;function lo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function Li(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Nf(e){var t=e._init;return t(e._payload)}function m0(e){function t(v,m){if(e){var g=v.deletions;g===null?(v.deletions=[m],v.flags|=16):g.push(m)}}function n(v,m){if(!e)return null;for(;m!==null;)t(v,m),m=m.sibling;return null}function r(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function o(v,m){return v=xn(v,m),v.index=0,v.sibling=null,v}function i(v,m,g){return v.index=g,e?(g=v.alternate,g!==null?(g=g.index,g<m?(v.flags|=2,m):g):(v.flags|=2,m)):(v.flags|=1048576,m)}function a(v){return e&&v.alternate===null&&(v.flags|=2),v}function s(v,m,g,S){return m===null||m.tag!==6?(m=ml(g,v.mode,S),m.return=v,m):(m=o(m,g),m.return=v,m)}function l(v,m,g,S){var P=g.type;return P===pr?d(v,m,g.props.children,S,g.key):m!==null&&(m.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===nn&&Nf(P)===m.type)?(S=o(m,g.props),S.ref=lo(v,m,g),S.return=v,S):(S=fa(g.type,g.key,g.props,null,v.mode,S),S.ref=lo(v,m,g),S.return=v,S)}function u(v,m,g,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=hl(g,v.mode,S),m.return=v,m):(m=o(m,g.children||[]),m.return=v,m)}function d(v,m,g,S,P){return m===null||m.tag!==7?(m=Kn(g,v.mode,S,P),m.return=v,m):(m=o(m,g),m.return=v,m)}function f(v,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ml(""+m,v.mode,g),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ki:return g=fa(m.type,m.key,m.props,null,v.mode,g),g.ref=lo(v,null,m),g.return=v,g;case fr:return m=hl(m,v.mode,g),m.return=v,m;case nn:var S=m._init;return f(v,S(m._payload),g)}if(So(m)||ro(m))return m=Kn(m,v.mode,g,null),m.return=v,m;Li(v,m)}return null}function p(v,m,g,S){var P=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:s(v,m,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ki:return g.key===P?l(v,m,g,S):null;case fr:return g.key===P?u(v,m,g,S):null;case nn:return P=g._init,p(v,m,P(g._payload),S)}if(So(g)||ro(g))return P!==null?null:d(v,m,g,S,null);Li(v,g)}return null}function h(v,m,g,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return v=v.get(g)||null,s(m,v,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ki:return v=v.get(S.key===null?g:S.key)||null,l(m,v,S,P);case fr:return v=v.get(S.key===null?g:S.key)||null,u(m,v,S,P);case nn:var k=S._init;return h(v,m,g,k(S._payload),P)}if(So(S)||ro(S))return v=v.get(g)||null,d(m,v,S,P,null);Li(m,S)}return null}function y(v,m,g,S){for(var P=null,k=null,C=m,E=m=0,D=null;C!==null&&E<g.length;E++){C.index>E?(D=C,C=null):D=C.sibling;var M=p(v,C,g[E],S);if(M===null){C===null&&(C=D);break}e&&C&&M.alternate===null&&t(v,C),m=i(M,m,E),k===null?P=M:k.sibling=M,k=M,C=D}if(E===g.length)return n(v,C),Z&&Ln(v,E),P;if(C===null){for(;E<g.length;E++)C=f(v,g[E],S),C!==null&&(m=i(C,m,E),k===null?P=C:k.sibling=C,k=C);return Z&&Ln(v,E),P}for(C=r(v,C);E<g.length;E++)D=h(C,v,E,g[E],S),D!==null&&(e&&D.alternate!==null&&C.delete(D.key===null?E:D.key),m=i(D,m,E),k===null?P=D:k.sibling=D,k=D);return e&&C.forEach(function(oe){return t(v,oe)}),Z&&Ln(v,E),P}function w(v,m,g,S){var P=ro(g);if(typeof P!="function")throw Error(T(150));if(g=P.call(g),g==null)throw Error(T(151));for(var k=P=null,C=m,E=m=0,D=null,M=g.next();C!==null&&!M.done;E++,M=g.next()){C.index>E?(D=C,C=null):D=C.sibling;var oe=p(v,C,M.value,S);if(oe===null){C===null&&(C=D);break}e&&C&&oe.alternate===null&&t(v,C),m=i(oe,m,E),k===null?P=oe:k.sibling=oe,k=oe,C=D}if(M.done)return n(v,C),Z&&Ln(v,E),P;if(C===null){for(;!M.done;E++,M=g.next())M=f(v,M.value,S),M!==null&&(m=i(M,m,E),k===null?P=M:k.sibling=M,k=M);return Z&&Ln(v,E),P}for(C=r(v,C);!M.done;E++,M=g.next())M=h(C,v,E,M.value,S),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?E:M.key),m=i(M,m,E),k===null?P=M:k.sibling=M,k=M);return e&&C.forEach(function(pe){return t(v,pe)}),Z&&Ln(v,E),P}function j(v,m,g,S){if(typeof g=="object"&&g!==null&&g.type===pr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ki:e:{for(var P=g.key,k=m;k!==null;){if(k.key===P){if(P=g.type,P===pr){if(k.tag===7){n(v,k.sibling),m=o(k,g.props.children),m.return=v,v=m;break e}}else if(k.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===nn&&Nf(P)===k.type){n(v,k.sibling),m=o(k,g.props),m.ref=lo(v,k,g),m.return=v,v=m;break e}n(v,k);break}else t(v,k);k=k.sibling}g.type===pr?(m=Kn(g.props.children,v.mode,S,g.key),m.return=v,v=m):(S=fa(g.type,g.key,g.props,null,v.mode,S),S.ref=lo(v,m,g),S.return=v,v=S)}return a(v);case fr:e:{for(k=g.key;m!==null;){if(m.key===k)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(v,m.sibling),m=o(m,g.children||[]),m.return=v,v=m;break e}else{n(v,m);break}else t(v,m);m=m.sibling}m=hl(g,v.mode,S),m.return=v,v=m}return a(v);case nn:return k=g._init,j(v,m,k(g._payload),S)}if(So(g))return y(v,m,g,S);if(ro(g))return w(v,m,g,S);Li(v,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(n(v,m.sibling),m=o(m,g),m.return=v,v=m):(n(v,m),m=ml(g,v.mode,S),m.return=v,v=m),a(v)):n(v,m)}return j}var Fr=m0(!0),h0=m0(!1),Na=zn(null),La=null,br=null,Ou=null;function Vu(){Ou=br=La=null}function Fu(e){var t=Na.current;X(Na),e._currentValue=t}function jc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Mr(e,t){La=e,Ou=br=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ve=!0),e.firstContext=null)}function st(e){var t=e._currentValue;if(Ou!==e)if(e={context:e,memoizedValue:t,next:null},br===null){if(La===null)throw Error(T(308));br=e,La.dependencies={lanes:0,firstContext:e}}else br=br.next=e;return t}var Un=null;function _u(e){Un===null?Un=[e]:Un.push(e)}function g0(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,_u(t)):(n.next=o.next,o.next=n),t.interleaved=n,qt(e,r)}function qt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rn=!1;function Bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function v0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,qt(e,n)}return o=r.interleaved,o===null?(t.next=t,_u(r)):(t.next=o.next,o.next=t),r.interleaved=t,qt(e,n)}function aa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Eu(e,n)}}function Lf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ia(e,t,n,r){var o=e.updateQueue;rn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?i=u:a.next=u,a=l;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==a&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=l))}if(i!==null){var f=o.baseState;a=0,d=u=l=null,s=i;do{var p=s.lane,h=s.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,w=s;switch(p=t,h=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){f=y.call(h,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,p=typeof y=="function"?y.call(h,f,p):y,p==null)break e;f=re({},f,p);break e;case 2:rn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[s]:p.push(s))}else h={eventTime:h,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=h,l=f):d=d.next=h,a|=p;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;p=s,s=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(d===null&&(l=f),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);tr|=a,e.lanes=a,e.memoizedState=f}}function If(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(T(191,o));o.call(r)}}}var gi={},Rt=zn(gi),Jo=zn(gi),ei=zn(gi);function Hn(e){if(e===gi)throw Error(T(174));return e}function Uu(e,t){switch(q(ei,t),q(Jo,e),q(Rt,gi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:rc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=rc(t,e)}X(Rt),q(Rt,t)}function _r(){X(Rt),X(Jo),X(ei)}function y0(e){Hn(ei.current);var t=Hn(Rt.current),n=rc(t,e.type);t!==n&&(q(Jo,e),q(Rt,n))}function Hu(e){Jo.current===e&&(X(Rt),X(Jo))}var ee=zn(0);function Oa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ll=[];function Wu(){for(var e=0;e<ll.length;e++)ll[e]._workInProgressVersionPrimary=null;ll.length=0}var sa=Qt.ReactCurrentDispatcher,cl=Qt.ReactCurrentBatchConfig,er=0,ne=null,he=null,ve=null,Va=!1,Mo=!1,ti=0,Ox=0;function ke(){throw Error(T(321))}function Gu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!St(e[n],t[n]))return!1;return!0}function qu(e,t,n,r,o,i){if(er=i,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,sa.current=e===null||e.memoizedState===null?Bx:Ux,e=n(r,o),Mo){i=0;do{if(Mo=!1,ti=0,25<=i)throw Error(T(301));i+=1,ve=he=null,t.updateQueue=null,sa.current=Hx,e=n(r,o)}while(Mo)}if(sa.current=Fa,t=he!==null&&he.next!==null,er=0,ve=he=ne=null,Va=!1,t)throw Error(T(300));return e}function Yu(){var e=ti!==0;return ti=0,e}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?ne.memoizedState=ve=e:ve=ve.next=e,ve}function lt(){if(he===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=ve===null?ne.memoizedState:ve.next;if(t!==null)ve=t,he=e;else{if(e===null)throw Error(T(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ve===null?ne.memoizedState=ve=e:ve=ve.next=e}return ve}function ni(e,t){return typeof t=="function"?t(e):t}function ul(e){var t=lt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=he,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,l=null,u=i;do{var d=u.lane;if((er&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,a=r):l=l.next=f,ne.lanes|=d,tr|=d}u=u.next}while(u!==null&&u!==i);l===null?a=r:l.next=s,St(r,t.memoizedState)||(Ve=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ne.lanes|=i,tr|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function dl(e){var t=lt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);St(i,t.memoizedState)||(Ve=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function x0(){}function w0(e,t){var n=ne,r=lt(),o=t(),i=!St(r.memoizedState,o);if(i&&(r.memoizedState=o,Ve=!0),r=r.queue,Ku(j0.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,ri(9,S0.bind(null,n,r,o,t),void 0,null),xe===null)throw Error(T(349));er&30||b0(n,t,o)}return o}function b0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function S0(e,t,n,r){t.value=n,t.getSnapshot=r,C0(t)&&k0(e)}function j0(e,t,n){return n(function(){C0(t)&&k0(e)})}function C0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!St(e,n)}catch{return!0}}function k0(e){var t=qt(e,1);t!==null&&wt(t,e,1,-1)}function Of(e){var t=Et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ni,lastRenderedState:e},t.queue=e,e=e.dispatch=_x.bind(null,ne,e),[t.memoizedState,e]}function ri(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function P0(){return lt().memoizedState}function la(e,t,n,r){var o=Et();ne.flags|=e,o.memoizedState=ri(1|t,n,void 0,r===void 0?null:r)}function xs(e,t,n,r){var o=lt();r=r===void 0?null:r;var i=void 0;if(he!==null){var a=he.memoizedState;if(i=a.destroy,r!==null&&Gu(r,a.deps)){o.memoizedState=ri(t,n,i,r);return}}ne.flags|=e,o.memoizedState=ri(1|t,n,i,r)}function Vf(e,t){return la(8390656,8,e,t)}function Ku(e,t){return xs(2048,8,e,t)}function E0(e,t){return xs(4,2,e,t)}function T0(e,t){return xs(4,4,e,t)}function z0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function A0(e,t,n){return n=n!=null?n.concat([e]):null,xs(4,4,z0.bind(null,t,e),n)}function Qu(){}function R0(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function D0(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function M0(e,t,n){return er&21?(St(n,t)||(n=Oh(),ne.lanes|=n,tr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=n)}function Vx(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var r=cl.transition;cl.transition={};try{e(!1),t()}finally{W=n,cl.transition=r}}function $0(){return lt().memoizedState}function Fx(e,t,n){var r=yn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},N0(e))L0(t,n);else if(n=g0(e,t,n,r),n!==null){var o=Me();wt(n,e,r,o),I0(n,t,r)}}function _x(e,t,n){var r=yn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(N0(e))L0(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,St(s,a)){var l=t.interleaved;l===null?(o.next=o,_u(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=g0(e,t,o,r),n!==null&&(o=Me(),wt(n,e,r,o),I0(n,t,r))}}function N0(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function L0(e,t){Mo=Va=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function I0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Eu(e,n)}}var Fa={readContext:st,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},Bx={readContext:st,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:Vf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,la(4194308,4,z0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return la(4194308,4,e,t)},useInsertionEffect:function(e,t){return la(4,2,e,t)},useMemo:function(e,t){var n=Et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Fx.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:Of,useDebugValue:Qu,useDeferredValue:function(e){return Et().memoizedState=e},useTransition:function(){var e=Of(!1),t=e[0];return e=Vx.bind(null,e[1]),Et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,o=Et();if(Z){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),xe===null)throw Error(T(349));er&30||b0(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Vf(j0.bind(null,r,i,e),[e]),r.flags|=2048,ri(9,S0.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Et(),t=xe.identifierPrefix;if(Z){var n=Vt,r=Ot;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ti++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ox++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ux={readContext:st,useCallback:R0,useContext:st,useEffect:Ku,useImperativeHandle:A0,useInsertionEffect:E0,useLayoutEffect:T0,useMemo:D0,useReducer:ul,useRef:P0,useState:function(){return ul(ni)},useDebugValue:Qu,useDeferredValue:function(e){var t=lt();return M0(t,he.memoizedState,e)},useTransition:function(){var e=ul(ni)[0],t=lt().memoizedState;return[e,t]},useMutableSource:x0,useSyncExternalStore:w0,useId:$0,unstable_isNewReconciler:!1},Hx={readContext:st,useCallback:R0,useContext:st,useEffect:Ku,useImperativeHandle:A0,useInsertionEffect:E0,useLayoutEffect:T0,useMemo:D0,useReducer:dl,useRef:P0,useState:function(){return dl(ni)},useDebugValue:Qu,useDeferredValue:function(e){var t=lt();return he===null?t.memoizedState=e:M0(t,he.memoizedState,e)},useTransition:function(){var e=dl(ni)[0],t=lt().memoizedState;return[e,t]},useMutableSource:x0,useSyncExternalStore:w0,useId:$0,unstable_isNewReconciler:!1};function mt(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Cc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ws={isMounted:function(e){return(e=e._reactInternals)?or(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Me(),o=yn(e),i=_t(r,o);i.payload=t,n!=null&&(i.callback=n),t=gn(e,i,o),t!==null&&(wt(t,e,o,r),aa(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Me(),o=yn(e),i=_t(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=gn(e,i,o),t!==null&&(wt(t,e,o,r),aa(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Me(),r=yn(e),o=_t(n,r);o.tag=2,t!=null&&(o.callback=t),t=gn(e,o,r),t!==null&&(wt(t,e,r,n),aa(t,e,r))}};function Ff(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Ko(n,r)||!Ko(o,i):!0}function O0(e,t,n){var r=!1,o=kn,i=t.contextType;return typeof i=="object"&&i!==null?i=st(i):(o=_e(t)?Zn:Ae.current,r=t.contextTypes,i=(r=r!=null)?Or(e,o):kn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ws,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function _f(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ws.enqueueReplaceState(t,t.state,null)}function kc(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Bu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=st(i):(i=_e(t)?Zn:Ae.current,o.context=Or(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Cc(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ws.enqueueReplaceState(o,o.state,null),Ia(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Br(e,t){try{var n="",r=t;do n+=yy(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function fl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Pc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Wx=typeof WeakMap=="function"?WeakMap:Map;function V0(e,t,n){n=_t(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ba||(Ba=!0,Lc=r),Pc(e,t)},n}function F0(e,t,n){n=_t(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Pc(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Pc(e,t),typeof r!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Bf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Wx;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=i2.bind(null,e,t,n),t.then(e,e))}function Uf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hf(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=_t(-1,1),t.tag=2,gn(n,t,1))),n.lanes|=1),e)}var Gx=Qt.ReactCurrentOwner,Ve=!1;function De(e,t,n,r){t.child=e===null?h0(t,null,n,r):Fr(t,e.child,n,r)}function Wf(e,t,n,r,o){n=n.render;var i=t.ref;return Mr(t,o),r=qu(e,t,n,r,i,o),n=Yu(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Yt(e,t,o)):(Z&&n&&Nu(t),t.flags|=1,De(e,t,r,o),t.child)}function Gf(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!od(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,_0(e,t,i,r,o)):(e=fa(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ko,n(a,r)&&e.ref===t.ref)return Yt(e,t,o)}return t.flags|=1,e=xn(i,r),e.ref=t.ref,e.return=t,t.child=e}function _0(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Ko(i,r)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ve=!0);else return t.lanes=e.lanes,Yt(e,t,o)}return Ec(e,t,n,r,o)}function B0(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(jr,We),We|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(jr,We),We|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,q(jr,We),We|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,q(jr,We),We|=r;return De(e,t,o,n),t.child}function U0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ec(e,t,n,r,o){var i=_e(n)?Zn:Ae.current;return i=Or(t,i),Mr(t,o),n=qu(e,t,n,r,i,o),r=Yu(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Yt(e,t,o)):(Z&&r&&Nu(t),t.flags|=1,De(e,t,n,o),t.child)}function qf(e,t,n,r,o){if(_e(n)){var i=!0;Da(t)}else i=!1;if(Mr(t,o),t.stateNode===null)ca(e,t),O0(t,n,r),kc(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=st(u):(u=_e(n)?Zn:Ae.current,u=Or(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&_f(t,a,r,u),rn=!1;var p=t.memoizedState;a.state=p,Ia(t,r,a,o),l=t.memoizedState,s!==r||p!==l||Fe.current||rn?(typeof d=="function"&&(Cc(t,n,d,r),l=t.memoizedState),(s=rn||Ff(t,n,s,r,p,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,v0(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:mt(t.type,s),a.props=u,f=t.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=st(l):(l=_e(n)?Zn:Ae.current,l=Or(t,l));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||p!==l)&&_f(t,a,r,l),rn=!1,p=t.memoizedState,a.state=p,Ia(t,r,a,o);var y=t.memoizedState;s!==f||p!==y||Fe.current||rn?(typeof h=="function"&&(Cc(t,n,h,r),y=t.memoizedState),(u=rn||Ff(t,n,u,r,p,y,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Tc(e,t,n,r,i,o)}function Tc(e,t,n,r,o,i){U0(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Df(t,n,!1),Yt(e,t,i);r=t.stateNode,Gx.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Fr(t,e.child,null,i),t.child=Fr(t,null,s,i)):De(e,t,s,i),t.memoizedState=r.state,o&&Df(t,n,!0),t.child}function H0(e){var t=e.stateNode;t.pendingContext?Rf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Rf(e,t.context,!1),Uu(e,t.containerInfo)}function Yf(e,t,n,r,o){return Vr(),Iu(o),t.flags|=256,De(e,t,n,r),t.child}var zc={dehydrated:null,treeContext:null,retryLane:0};function Ac(e){return{baseLanes:e,cachePool:null,transitions:null}}function W0(e,t,n){var r=t.pendingProps,o=ee.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),q(ee,o&1),e===null)return Sc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=js(a,r,0,null),e=Kn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ac(n),t.memoizedState=zc,e):Xu(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return qx(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=xn(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=xn(s,i):(i=Kn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Ac(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=zc,r}return i=e.child,e=i.sibling,r=xn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xu(e,t){return t=js({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ii(e,t,n,r){return r!==null&&Iu(r),Fr(t,e.child,null,n),e=Xu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qx(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=fl(Error(T(422))),Ii(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=js({mode:"visible",children:r.children},o,0,null),i=Kn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Fr(t,e.child,null,a),t.child.memoizedState=Ac(a),t.memoizedState=zc,i);if(!(t.mode&1))return Ii(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(T(419)),r=fl(i,r,void 0),Ii(e,t,a,r)}if(s=(a&e.childLanes)!==0,Ve||s){if(r=xe,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,qt(e,o),wt(r,e,o,-1))}return rd(),r=fl(Error(T(421))),Ii(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=a2.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ge=hn(o.nextSibling),qe=t,Z=!0,vt=null,e!==null&&(rt[ot++]=Ot,rt[ot++]=Vt,rt[ot++]=Jn,Ot=e.id,Vt=e.overflow,Jn=t),t=Xu(t,r.children),t.flags|=4096,t)}function Kf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),jc(e.return,t,n)}function pl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function G0(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(De(e,t,r.children,n),r=ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kf(e,n,t);else if(e.tag===19)Kf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(ee,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Oa(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),pl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Oa(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}pl(t,!0,n,null,i);break;case"together":pl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ca(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=xn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Yx(e,t,n){switch(t.tag){case 3:H0(t),Vr();break;case 5:y0(t);break;case 1:_e(t.type)&&Da(t);break;case 4:Uu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;q(Na,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(q(ee,ee.current&1),t.flags|=128,null):n&t.child.childLanes?W0(e,t,n):(q(ee,ee.current&1),e=Yt(e,t,n),e!==null?e.sibling:null);q(ee,ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return G0(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),q(ee,ee.current),r)break;return null;case 22:case 23:return t.lanes=0,B0(e,t,n)}return Yt(e,t,n)}var q0,Rc,Y0,K0;q0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rc=function(){};Y0=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Hn(Rt.current);var i=null;switch(n){case"input":o=Jl(e,o),r=Jl(e,r),i=[];break;case"select":o=re({},o,{value:void 0}),r=re({},r,{value:void 0}),i=[];break;case"textarea":o=nc(e,o),r=nc(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Aa)}oc(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Bo.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Bo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&K("scroll",e),i||s===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};K0=function(e,t,n,r){n!==r&&(t.flags|=4)};function co(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kx(e,t,n){var r=t.pendingProps;switch(Lu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return _e(t.type)&&Ra(),Pe(t),null;case 3:return r=t.stateNode,_r(),X(Fe),X(Ae),Wu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ni(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,vt!==null&&(Vc(vt),vt=null))),Rc(e,t),Pe(t),null;case 5:Hu(t);var o=Hn(ei.current);if(n=t.type,e!==null&&t.stateNode!=null)Y0(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return Pe(t),null}if(e=Hn(Rt.current),Ni(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[zt]=t,r[Zo]=i,e=(t.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(o=0;o<Co.length;o++)K(Co[o],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":rf(r,i),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},K("invalid",r);break;case"textarea":af(r,i),K("invalid",r)}oc(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&$i(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&$i(r.textContent,s,e),o=["children",""+s]):Bo.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&K("scroll",r)}switch(n){case"input":Pi(r),of(r,i,!0);break;case"textarea":Pi(r),sf(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Aa)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[zt]=t,e[Zo]=r,q0(e,t,!1,!1),t.stateNode=e;e:{switch(a=ic(n,r),n){case"dialog":K("cancel",e),K("close",e),o=r;break;case"iframe":case"object":case"embed":K("load",e),o=r;break;case"video":case"audio":for(o=0;o<Co.length;o++)K(Co[o],e);o=r;break;case"source":K("error",e),o=r;break;case"img":case"image":case"link":K("error",e),K("load",e),o=r;break;case"details":K("toggle",e),o=r;break;case"input":rf(e,r),o=Jl(e,r),K("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=re({},r,{value:void 0}),K("invalid",e);break;case"textarea":af(e,r),o=nc(e,r),K("invalid",e);break;default:o=r}oc(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?Ph(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ch(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Uo(e,l):typeof l=="number"&&Uo(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Bo.hasOwnProperty(i)?l!=null&&i==="onScroll"&&K("scroll",e):l!=null&&bu(e,i,l,a))}switch(n){case"input":Pi(e),of(e,r,!1);break;case"textarea":Pi(e),sf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Cn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?zr(e,!!r.multiple,i,!1):r.defaultValue!=null&&zr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Aa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Pe(t),null;case 6:if(e&&t.stateNode!=null)K0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=Hn(ei.current),Hn(Rt.current),Ni(t)){if(r=t.stateNode,n=t.memoizedProps,r[zt]=t,(i=r.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:$i(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$i(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zt]=t,t.stateNode=r}return Pe(t),null;case 13:if(X(ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Ge!==null&&t.mode&1&&!(t.flags&128))p0(),Vr(),t.flags|=98560,i=!1;else if(i=Ni(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(T(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(T(317));i[zt]=t}else Vr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Pe(t),i=!1}else vt!==null&&(Vc(vt),vt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ee.current&1?ge===0&&(ge=3):rd())),t.updateQueue!==null&&(t.flags|=4),Pe(t),null);case 4:return _r(),Rc(e,t),e===null&&Qo(t.stateNode.containerInfo),Pe(t),null;case 10:return Fu(t.type._context),Pe(t),null;case 17:return _e(t.type)&&Ra(),Pe(t),null;case 19:if(X(ee),i=t.memoizedState,i===null)return Pe(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)co(i,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Oa(e),a!==null){for(t.flags|=128,co(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(ee,ee.current&1|2),t.child}e=e.sibling}i.tail!==null&&ae()>Ur&&(t.flags|=128,r=!0,co(i,!1),t.lanes=4194304)}else{if(!r)if(e=Oa(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),co(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Z)return Pe(t),null}else 2*ae()-i.renderingStartTime>Ur&&n!==1073741824&&(t.flags|=128,r=!0,co(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ae(),t.sibling=null,n=ee.current,q(ee,r?n&1|2:n&1),t):(Pe(t),null);case 22:case 23:return nd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?We&1073741824&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function Qx(e,t){switch(Lu(t),t.tag){case 1:return _e(t.type)&&Ra(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _r(),X(Fe),X(Ae),Wu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Hu(t),null;case 13:if(X(ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));Vr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(ee),null;case 4:return _r(),null;case 10:return Fu(t.type._context),null;case 22:case 23:return nd(),null;case 24:return null;default:return null}}var Oi=!1,Te=!1,Xx=typeof WeakSet=="function"?WeakSet:Set,A=null;function Sr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(e,t,r)}else n.current=null}function Dc(e,t,n){try{n()}catch(r){ie(e,t,r)}}var Qf=!1;function Zx(e,t){if(hc=Ea,e=e0(),$u(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||o!==0&&f.nodeType!==3||(s=a+o),f!==i||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(h=f.firstChild)!==null;)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++u===o&&(s=a),p===i&&++d===r&&(l=a),(h=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=h}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(gc={focusedElem:e,selectionRange:n},Ea=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,j=y.memoizedState,v=t.stateNode,m=v.getSnapshotBeforeUpdate(t.elementType===t.type?w:mt(t.type,w),j);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(S){ie(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return y=Qf,Qf=!1,y}function $o(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Dc(t,n,i)}o=o.next}while(o!==r)}}function bs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Mc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Q0(e){var t=e.alternate;t!==null&&(e.alternate=null,Q0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zt],delete t[Zo],delete t[xc],delete t[$x],delete t[Nx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function X0(e){return e.tag===5||e.tag===3||e.tag===4}function Xf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||X0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Aa));else if(r!==4&&(e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function Nc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Nc(e,t,n),e=e.sibling;e!==null;)Nc(e,t,n),e=e.sibling}var be=null,gt=!1;function Jt(e,t,n){for(n=n.child;n!==null;)Z0(e,t,n),n=n.sibling}function Z0(e,t,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(ps,n)}catch{}switch(n.tag){case 5:Te||Sr(n,t);case 6:var r=be,o=gt;be=null,Jt(e,t,n),be=r,gt=o,be!==null&&(gt?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(gt?(e=be,n=n.stateNode,e.nodeType===8?al(e.parentNode,n):e.nodeType===1&&al(e,n),qo(e)):al(be,n.stateNode));break;case 4:r=be,o=gt,be=n.stateNode.containerInfo,gt=!0,Jt(e,t,n),be=r,gt=o;break;case 0:case 11:case 14:case 15:if(!Te&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Dc(n,t,a),o=o.next}while(o!==r)}Jt(e,t,n);break;case 1:if(!Te&&(Sr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ie(n,t,s)}Jt(e,t,n);break;case 21:Jt(e,t,n);break;case 22:n.mode&1?(Te=(r=Te)||n.memoizedState!==null,Jt(e,t,n),Te=r):Jt(e,t,n);break;default:Jt(e,t,n)}}function Zf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Xx),t.forEach(function(r){var o=s2.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:be=s.stateNode,gt=!1;break e;case 3:be=s.stateNode.containerInfo,gt=!0;break e;case 4:be=s.stateNode.containerInfo,gt=!0;break e}s=s.return}if(be===null)throw Error(T(160));Z0(i,a,o),be=null,gt=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){ie(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)J0(t,e),t=t.sibling}function J0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),kt(e),r&4){try{$o(3,e,e.return),bs(3,e)}catch(w){ie(e,e.return,w)}try{$o(5,e,e.return)}catch(w){ie(e,e.return,w)}}break;case 1:pt(t,e),kt(e),r&512&&n!==null&&Sr(n,n.return);break;case 5:if(pt(t,e),kt(e),r&512&&n!==null&&Sr(n,n.return),e.flags&32){var o=e.stateNode;try{Uo(o,"")}catch(w){ie(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&bh(o,i),ic(s,a);var u=ic(s,i);for(a=0;a<l.length;a+=2){var d=l[a],f=l[a+1];d==="style"?Ph(o,f):d==="dangerouslySetInnerHTML"?Ch(o,f):d==="children"?Uo(o,f):bu(o,d,f,u)}switch(s){case"input":ec(o,i);break;case"textarea":Sh(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var h=i.value;h!=null?zr(o,!!i.multiple,h,!1):p!==!!i.multiple&&(i.defaultValue!=null?zr(o,!!i.multiple,i.defaultValue,!0):zr(o,!!i.multiple,i.multiple?[]:"",!1))}o[Zo]=i}catch(w){ie(e,e.return,w)}}break;case 6:if(pt(t,e),kt(e),r&4){if(e.stateNode===null)throw Error(T(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){ie(e,e.return,w)}}break;case 3:if(pt(t,e),kt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qo(t.containerInfo)}catch(w){ie(e,e.return,w)}break;case 4:pt(t,e),kt(e);break;case 13:pt(t,e),kt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ed=ae())),r&4&&Zf(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Te=(u=Te)||d,pt(t,e),Te=u):pt(t,e),kt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(A=e,d=e.child;d!==null;){for(f=A=d;A!==null;){switch(p=A,h=p.child,p.tag){case 0:case 11:case 14:case 15:$o(4,p,p.return);break;case 1:Sr(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){ie(r,n,w)}}break;case 5:Sr(p,p.return);break;case 22:if(p.memoizedState!==null){ep(f);continue}}h!==null?(h.return=p,A=h):ep(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=kh("display",a))}catch(w){ie(e,e.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){ie(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:pt(t,e),kt(e),r&4&&Zf(e);break;case 21:break;default:pt(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(X0(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Uo(o,""),r.flags&=-33);var i=Xf(e);Nc(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Xf(e);$c(e,s,a);break;default:throw Error(T(161))}}catch(l){ie(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Jx(e,t,n){A=e,eg(e)}function eg(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var o=A,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Oi;if(!a){var s=o.alternate,l=s!==null&&s.memoizedState!==null||Te;s=Oi;var u=Te;if(Oi=a,(Te=l)&&!u)for(A=o;A!==null;)a=A,l=a.child,a.tag===22&&a.memoizedState!==null?tp(o):l!==null?(l.return=a,A=l):tp(o);for(;i!==null;)A=i,eg(i),i=i.sibling;A=o,Oi=s,Te=u}Jf(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,A=i):Jf(e)}}function Jf(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Te||bs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Te)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:mt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&If(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}If(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&qo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Te||t.flags&512&&Mc(t)}catch(p){ie(t,t.return,p)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function ep(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function tp(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{bs(4,t)}catch(l){ie(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){ie(t,o,l)}}var i=t.return;try{Mc(t)}catch(l){ie(t,i,l)}break;case 5:var a=t.return;try{Mc(t)}catch(l){ie(t,a,l)}}}catch(l){ie(t,t.return,l)}if(t===e){A=null;break}var s=t.sibling;if(s!==null){s.return=t.return,A=s;break}A=t.return}}var e2=Math.ceil,_a=Qt.ReactCurrentDispatcher,Zu=Qt.ReactCurrentOwner,at=Qt.ReactCurrentBatchConfig,B=0,xe=null,fe=null,Se=0,We=0,jr=zn(0),ge=0,oi=null,tr=0,Ss=0,Ju=0,No=null,Oe=null,ed=0,Ur=1/0,Nt=null,Ba=!1,Lc=null,vn=null,Vi=!1,cn=null,Ua=0,Lo=0,Ic=null,ua=-1,da=0;function Me(){return B&6?ae():ua!==-1?ua:ua=ae()}function yn(e){return e.mode&1?B&2&&Se!==0?Se&-Se:Ix.transition!==null?(da===0&&(da=Oh()),da):(e=W,e!==0||(e=window.event,e=e===void 0?16:Wh(e.type)),e):1}function wt(e,t,n,r){if(50<Lo)throw Lo=0,Ic=null,Error(T(185));pi(e,n,r),(!(B&2)||e!==xe)&&(e===xe&&(!(B&2)&&(Ss|=n),ge===4&&sn(e,Se)),Be(e,r),n===1&&B===0&&!(t.mode&1)&&(Ur=ae()+500,ys&&An()))}function Be(e,t){var n=e.callbackNode;Iy(e,t);var r=Pa(e,e===xe?Se:0);if(r===0)n!==null&&uf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&uf(n),t===1)e.tag===0?Lx(np.bind(null,e)):u0(np.bind(null,e)),Dx(function(){!(B&6)&&An()}),n=null;else{switch(Vh(r)){case 1:n=Pu;break;case 4:n=Lh;break;case 16:n=ka;break;case 536870912:n=Ih;break;default:n=ka}n=lg(n,tg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function tg(e,t){if(ua=-1,da=0,B&6)throw Error(T(327));var n=e.callbackNode;if($r()&&e.callbackNode!==n)return null;var r=Pa(e,e===xe?Se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ha(e,r);else{t=r;var o=B;B|=2;var i=rg();(xe!==e||Se!==t)&&(Nt=null,Ur=ae()+500,Yn(e,t));do try{r2();break}catch(s){ng(e,s)}while(!0);Vu(),_a.current=i,B=o,fe!==null?t=0:(xe=null,Se=0,t=ge)}if(t!==0){if(t===2&&(o=uc(e),o!==0&&(r=o,t=Oc(e,o))),t===1)throw n=oi,Yn(e,0),sn(e,r),Be(e,ae()),n;if(t===6)sn(e,r);else{if(o=e.current.alternate,!(r&30)&&!t2(o)&&(t=Ha(e,r),t===2&&(i=uc(e),i!==0&&(r=i,t=Oc(e,i))),t===1))throw n=oi,Yn(e,0),sn(e,r),Be(e,ae()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:In(e,Oe,Nt);break;case 3:if(sn(e,r),(r&130023424)===r&&(t=ed+500-ae(),10<t)){if(Pa(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Me(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=yc(In.bind(null,e,Oe,Nt),t);break}In(e,Oe,Nt);break;case 4:if(sn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-xt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*e2(r/1960))-r,10<r){e.timeoutHandle=yc(In.bind(null,e,Oe,Nt),r);break}In(e,Oe,Nt);break;case 5:In(e,Oe,Nt);break;default:throw Error(T(329))}}}return Be(e,ae()),e.callbackNode===n?tg.bind(null,e):null}function Oc(e,t){var n=No;return e.current.memoizedState.isDehydrated&&(Yn(e,t).flags|=256),e=Ha(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&Vc(t)),e}function Vc(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function t2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!St(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sn(e,t){for(t&=~Ju,t&=~Ss,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function np(e){if(B&6)throw Error(T(327));$r();var t=Pa(e,0);if(!(t&1))return Be(e,ae()),null;var n=Ha(e,t);if(e.tag!==0&&n===2){var r=uc(e);r!==0&&(t=r,n=Oc(e,r))}if(n===1)throw n=oi,Yn(e,0),sn(e,t),Be(e,ae()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,In(e,Oe,Nt),Be(e,ae()),null}function td(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(Ur=ae()+500,ys&&An())}}function nr(e){cn!==null&&cn.tag===0&&!(B&6)&&$r();var t=B;B|=1;var n=at.transition,r=W;try{if(at.transition=null,W=1,e)return e()}finally{W=r,at.transition=n,B=t,!(B&6)&&An()}}function nd(){We=jr.current,X(jr)}function Yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Rx(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(Lu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ra();break;case 3:_r(),X(Fe),X(Ae),Wu();break;case 5:Hu(r);break;case 4:_r();break;case 13:X(ee);break;case 19:X(ee);break;case 10:Fu(r.type._context);break;case 22:case 23:nd()}n=n.return}if(xe=e,fe=e=xn(e.current,null),Se=We=t,ge=0,oi=null,Ju=Ss=tr=0,Oe=No=null,Un!==null){for(t=0;t<Un.length;t++)if(n=Un[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}Un=null}return e}function ng(e,t){do{var n=fe;try{if(Vu(),sa.current=Fa,Va){for(var r=ne.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Va=!1}if(er=0,ve=he=ne=null,Mo=!1,ti=0,Zu.current=null,n===null||n.return===null){ge=1,oi=t,fe=null;break}e:{var i=e,a=n.return,s=n,l=t;if(t=Se,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=s,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=Uf(a);if(h!==null){h.flags&=-257,Hf(h,a,s,i,t),h.mode&1&&Bf(i,u,t),t=h,l=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(l),t.updateQueue=w}else y.add(l);break e}else{if(!(t&1)){Bf(i,u,t),rd();break e}l=Error(T(426))}}else if(Z&&s.mode&1){var j=Uf(a);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Hf(j,a,s,i,t),Iu(Br(l,s));break e}}i=l=Br(l,s),ge!==4&&(ge=2),No===null?No=[i]:No.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var v=V0(i,l,t);Lf(i,v);break e;case 1:s=l;var m=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(vn===null||!vn.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=F0(i,s,t);Lf(i,S);break e}}i=i.return}while(i!==null)}ig(n)}catch(P){t=P,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(!0)}function rg(){var e=_a.current;return _a.current=Fa,e===null?Fa:e}function rd(){(ge===0||ge===3||ge===2)&&(ge=4),xe===null||!(tr&268435455)&&!(Ss&268435455)||sn(xe,Se)}function Ha(e,t){var n=B;B|=2;var r=rg();(xe!==e||Se!==t)&&(Nt=null,Yn(e,t));do try{n2();break}catch(o){ng(e,o)}while(!0);if(Vu(),B=n,_a.current=r,fe!==null)throw Error(T(261));return xe=null,Se=0,ge}function n2(){for(;fe!==null;)og(fe)}function r2(){for(;fe!==null&&!Ty();)og(fe)}function og(e){var t=sg(e.alternate,e,We);e.memoizedProps=e.pendingProps,t===null?ig(e):fe=t,Zu.current=null}function ig(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Qx(n,t),n!==null){n.flags&=32767,fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,fe=null;return}}else if(n=Kx(n,t,We),n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);ge===0&&(ge=5)}function In(e,t,n){var r=W,o=at.transition;try{at.transition=null,W=1,o2(e,t,n,r)}finally{at.transition=o,W=r}return null}function o2(e,t,n,r){do $r();while(cn!==null);if(B&6)throw Error(T(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Oy(e,i),e===xe&&(fe=xe=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Vi||(Vi=!0,lg(ka,function(){return $r(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=at.transition,at.transition=null;var a=W;W=1;var s=B;B|=4,Zu.current=null,Zx(e,n),J0(n,e),Cx(gc),Ea=!!hc,gc=hc=null,e.current=n,Jx(n),zy(),B=s,W=a,at.transition=i}else e.current=n;if(Vi&&(Vi=!1,cn=e,Ua=o),i=e.pendingLanes,i===0&&(vn=null),Dy(n.stateNode),Be(e,ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ba)throw Ba=!1,e=Lc,Lc=null,e;return Ua&1&&e.tag!==0&&$r(),i=e.pendingLanes,i&1?e===Ic?Lo++:(Lo=0,Ic=e):Lo=0,An(),null}function $r(){if(cn!==null){var e=Vh(Ua),t=at.transition,n=W;try{if(at.transition=null,W=16>e?16:e,cn===null)var r=!1;else{if(e=cn,cn=null,Ua=0,B&6)throw Error(T(331));var o=B;for(B|=4,A=e.current;A!==null;){var i=A,a=i.child;if(A.flags&16){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(A=u;A!==null;){var d=A;switch(d.tag){case 0:case 11:case 15:$o(8,d,i)}var f=d.child;if(f!==null)f.return=d,A=f;else for(;A!==null;){d=A;var p=d.sibling,h=d.return;if(Q0(d),d===u){A=null;break}if(p!==null){p.return=h,A=p;break}A=h}}}var y=i.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var j=w.sibling;w.sibling=null,w=j}while(w!==null)}}A=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,A=a;else e:for(;A!==null;){if(i=A,i.flags&2048)switch(i.tag){case 0:case 11:case 15:$o(9,i,i.return)}var v=i.sibling;if(v!==null){v.return=i.return,A=v;break e}A=i.return}}var m=e.current;for(A=m;A!==null;){a=A;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,A=g;else e:for(a=m;A!==null;){if(s=A,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:bs(9,s)}}catch(P){ie(s,s.return,P)}if(s===a){A=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,A=S;break e}A=s.return}}if(B=o,An(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(ps,e)}catch{}r=!0}return r}finally{W=n,at.transition=t}}return!1}function rp(e,t,n){t=Br(n,t),t=V0(e,t,1),e=gn(e,t,1),t=Me(),e!==null&&(pi(e,1,t),Be(e,t))}function ie(e,t,n){if(e.tag===3)rp(e,e,n);else for(;t!==null;){if(t.tag===3){rp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vn===null||!vn.has(r))){e=Br(n,e),e=F0(t,e,1),t=gn(t,e,1),e=Me(),t!==null&&(pi(t,1,e),Be(t,e));break}}t=t.return}}function i2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&n,xe===e&&(Se&n)===n&&(ge===4||ge===3&&(Se&130023424)===Se&&500>ae()-ed?Yn(e,0):Ju|=n),Be(e,t)}function ag(e,t){t===0&&(e.mode&1?(t=zi,zi<<=1,!(zi&130023424)&&(zi=4194304)):t=1);var n=Me();e=qt(e,t),e!==null&&(pi(e,t,n),Be(e,n))}function a2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ag(e,n)}function s2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),ag(e,n)}var sg;sg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Fe.current)Ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ve=!1,Yx(e,t,n);Ve=!!(e.flags&131072)}else Ve=!1,Z&&t.flags&1048576&&d0(t,$a,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ca(e,t),e=t.pendingProps;var o=Or(t,Ae.current);Mr(t,n),o=qu(null,t,r,e,o,n);var i=Yu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(r)?(i=!0,Da(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Bu(t),o.updater=ws,t.stateNode=o,o._reactInternals=t,kc(t,r,e,n),t=Tc(null,t,r,!0,i,n)):(t.tag=0,Z&&i&&Nu(t),De(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ca(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=c2(r),e=mt(r,e),o){case 0:t=Ec(null,t,r,e,n);break e;case 1:t=qf(null,t,r,e,n);break e;case 11:t=Wf(null,t,r,e,n);break e;case 14:t=Gf(null,t,r,mt(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:mt(r,o),Ec(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:mt(r,o),qf(e,t,r,o,n);case 3:e:{if(H0(t),e===null)throw Error(T(387));r=t.pendingProps,i=t.memoizedState,o=i.element,v0(e,t),Ia(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Br(Error(T(423)),t),t=Yf(e,t,r,n,o);break e}else if(r!==o){o=Br(Error(T(424)),t),t=Yf(e,t,r,n,o);break e}else for(Ge=hn(t.stateNode.containerInfo.firstChild),qe=t,Z=!0,vt=null,n=h0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vr(),r===o){t=Yt(e,t,n);break e}De(e,t,r,n)}t=t.child}return t;case 5:return y0(t),e===null&&Sc(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,vc(r,o)?a=null:i!==null&&vc(r,i)&&(t.flags|=32),U0(e,t),De(e,t,a,n),t.child;case 6:return e===null&&Sc(t),null;case 13:return W0(e,t,n);case 4:return Uu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fr(t,null,r,n):De(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:mt(r,o),Wf(e,t,r,o,n);case 7:return De(e,t,t.pendingProps,n),t.child;case 8:return De(e,t,t.pendingProps.children,n),t.child;case 12:return De(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,q(Na,r._currentValue),r._currentValue=a,i!==null)if(St(i.value,a)){if(i.children===o.children&&!Fe.current){t=Yt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=_t(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),jc(i.return,n,t),s.lanes|=n;break}l=l.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(T(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),jc(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}De(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Mr(t,n),o=st(o),r=r(o),t.flags|=1,De(e,t,r,n),t.child;case 14:return r=t.type,o=mt(r,t.pendingProps),o=mt(r.type,o),Gf(e,t,r,o,n);case 15:return _0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:mt(r,o),ca(e,t),t.tag=1,_e(r)?(e=!0,Da(t)):e=!1,Mr(t,n),O0(t,r,o),kc(t,r,o,n),Tc(null,t,r,!0,e,n);case 19:return G0(e,t,n);case 22:return B0(e,t,n)}throw Error(T(156,t.tag))};function lg(e,t){return Nh(e,t)}function l2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,n,r){return new l2(e,t,n,r)}function od(e){return e=e.prototype,!(!e||!e.isReactComponent)}function c2(e){if(typeof e=="function")return od(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ju)return 11;if(e===Cu)return 14}return 2}function xn(e,t){var n=e.alternate;return n===null?(n=it(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function fa(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")od(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case pr:return Kn(n.children,o,i,t);case Su:a=8,o|=8;break;case Kl:return e=it(12,n,t,o|2),e.elementType=Kl,e.lanes=i,e;case Ql:return e=it(13,n,t,o),e.elementType=Ql,e.lanes=i,e;case Xl:return e=it(19,n,t,o),e.elementType=Xl,e.lanes=i,e;case yh:return js(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gh:a=10;break e;case vh:a=9;break e;case ju:a=11;break e;case Cu:a=14;break e;case nn:a=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=it(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Kn(e,t,n,r){return e=it(7,e,r,t),e.lanes=n,e}function js(e,t,n,r){return e=it(22,e,r,t),e.elementType=yh,e.lanes=n,e.stateNode={isHidden:!1},e}function ml(e,t,n){return e=it(6,e,null,t),e.lanes=n,e}function hl(e,t,n){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function u2(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ks(0),this.expirationTimes=Ks(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ks(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function id(e,t,n,r,o,i,a,s,l){return e=new u2(e,t,n,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=it(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bu(i),e}function d2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function cg(e){if(!e)return kn;e=e._reactInternals;e:{if(or(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(_e(n))return c0(e,n,t)}return t}function ug(e,t,n,r,o,i,a,s,l){return e=id(n,r,!0,e,o,i,a,s,l),e.context=cg(null),n=e.current,r=Me(),o=yn(n),i=_t(r,o),i.callback=t??null,gn(n,i,o),e.current.lanes=o,pi(e,o,r),Be(e,r),e}function Cs(e,t,n,r){var o=t.current,i=Me(),a=yn(o);return n=cg(n),t.context===null?t.context=n:t.pendingContext=n,t=_t(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gn(o,t,a),e!==null&&(wt(e,o,a,i),aa(e,o,a)),a}function Wa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function op(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ad(e,t){op(e,t),(e=e.alternate)&&op(e,t)}function f2(){return null}var dg=typeof reportError=="function"?reportError:function(e){console.error(e)};function sd(e){this._internalRoot=e}ks.prototype.render=sd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));Cs(e,t,null,null)};ks.prototype.unmount=sd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nr(function(){Cs(null,e,null,null)}),t[Gt]=null}};function ks(e){this._internalRoot=e}ks.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<an.length&&t!==0&&t<an[n].priority;n++);an.splice(n,0,e),n===0&&Hh(e)}};function ld(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ps(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ip(){}function p2(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Wa(a);i.call(u)}}var a=ug(t,r,e,0,null,!1,!1,"",ip);return e._reactRootContainer=a,e[Gt]=a.current,Qo(e.nodeType===8?e.parentNode:e),nr(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=Wa(l);s.call(u)}}var l=id(e,0,!1,null,null,!1,!1,"",ip);return e._reactRootContainer=l,e[Gt]=l.current,Qo(e.nodeType===8?e.parentNode:e),nr(function(){Cs(t,l,n,r)}),l}function Es(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var l=Wa(a);s.call(l)}}Cs(t,a,e,o)}else a=p2(n,t,e,o,r);return Wa(a)}Fh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=jo(t.pendingLanes);n!==0&&(Eu(t,n|1),Be(t,ae()),!(B&6)&&(Ur=ae()+500,An()))}break;case 13:nr(function(){var r=qt(e,1);if(r!==null){var o=Me();wt(r,e,1,o)}}),ad(e,1)}};Tu=function(e){if(e.tag===13){var t=qt(e,134217728);if(t!==null){var n=Me();wt(t,e,134217728,n)}ad(e,134217728)}};_h=function(e){if(e.tag===13){var t=yn(e),n=qt(e,t);if(n!==null){var r=Me();wt(n,e,t,r)}ad(e,t)}};Bh=function(){return W};Uh=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};sc=function(e,t,n){switch(t){case"input":if(ec(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=vs(r);if(!o)throw Error(T(90));wh(r),ec(r,o)}}}break;case"textarea":Sh(e,n);break;case"select":t=n.value,t!=null&&zr(e,!!n.multiple,t,!1)}};zh=td;Ah=nr;var m2={usingClientEntryPoint:!1,Events:[hi,vr,vs,Eh,Th,td]},uo={findFiberByHostInstance:Bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},h2={bundleType:uo.bundleType,version:uo.version,rendererPackageName:uo.rendererPackageName,rendererConfig:uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mh(e),e===null?null:e.stateNode},findFiberByHostInstance:uo.findFiberByHostInstance||f2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fi.isDisabled&&Fi.supportsFiber)try{ps=Fi.inject(h2),At=Fi}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m2;Qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ld(t))throw Error(T(200));return d2(e,t,null,n)};Qe.createRoot=function(e,t){if(!ld(e))throw Error(T(299));var n=!1,r="",o=dg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=id(e,1,!1,null,null,n,!1,r,o),e[Gt]=t.current,Qo(e.nodeType===8?e.parentNode:e),new sd(t)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=Mh(t),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return nr(e)};Qe.hydrate=function(e,t,n){if(!Ps(t))throw Error(T(200));return Es(null,e,t,!0,n)};Qe.hydrateRoot=function(e,t,n){if(!ld(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=dg;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=ug(t,null,e,1,n??null,o,!1,i,a),e[Gt]=t.current,Qo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ks(t)};Qe.render=function(e,t,n){if(!Ps(t))throw Error(T(200));return Es(null,e,t,!1,n)};Qe.unmountComponentAtNode=function(e){if(!Ps(e))throw Error(T(40));return e._reactRootContainer?(nr(function(){Es(null,null,e,!1,function(){e._reactRootContainer=null,e[Gt]=null})}),!0):!1};Qe.unstable_batchedUpdates=td;Qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ps(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Es(e,t,n,!1,r)};Qe.version="18.3.1-next-f1338f8080-20240426";function fg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fg)}catch(e){console.error(e)}}fg(),fh.exports=Qe;var g2=fh.exports,ap=g2;ql.createRoot=ap.createRoot,ql.hydrateRoot=ap.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ii.apply(this,arguments)}var un;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(un||(un={}));const sp="popstate";function v2(e){e===void 0&&(e={});function t(o,i){let{pathname:a="/",search:s="",hash:l=""}=ir(o.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),Fc("",{pathname:a,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let a=o.document.querySelector("base"),s="";if(a&&a.getAttribute("href")){let l=o.location.href,u=l.indexOf("#");s=u===-1?l:l.slice(0,u)}return s+"#"+(typeof i=="string"?i:Ga(i))}function r(o,i){cd(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return x2(t,n,r,e)}function le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function cd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function y2(){return Math.random().toString(36).substr(2,8)}function lp(e,t){return{usr:e.state,key:e.key,idx:t}}function Fc(e,t,n,r){return n===void 0&&(n=null),ii({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ir(t):t,{state:n,key:t&&t.key||r||y2()})}function Ga(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ir(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function x2(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s=un.Pop,l=null,u=d();u==null&&(u=0,a.replaceState(ii({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function f(){s=un.Pop;let j=d(),v=j==null?null:j-u;u=j,l&&l({action:s,location:w.location,delta:v})}function p(j,v){s=un.Push;let m=Fc(w.location,j,v);n&&n(m,j),u=d()+1;let g=lp(m,u),S=w.createHref(m);try{a.pushState(g,"",S)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;o.location.assign(S)}i&&l&&l({action:s,location:w.location,delta:1})}function h(j,v){s=un.Replace;let m=Fc(w.location,j,v);n&&n(m,j),u=d();let g=lp(m,u),S=w.createHref(m);a.replaceState(g,"",S),i&&l&&l({action:s,location:w.location,delta:0})}function y(j){let v=o.location.origin!=="null"?o.location.origin:o.location.href,m=typeof j=="string"?j:Ga(j);return m=m.replace(/ $/,"%20"),le(v,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,v)}let w={get action(){return s},get location(){return e(o,a)},listen(j){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(sp,f),l=j,()=>{o.removeEventListener(sp,f),l=null}},createHref(j){return t(o,j)},createURL:y,encodeLocation(j){let v=y(j);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:p,replace:h,go(j){return a.go(j)}};return w}var cp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(cp||(cp={}));function w2(e,t,n){return n===void 0&&(n="/"),b2(e,t,n)}function b2(e,t,n,r){let o=typeof t=="string"?ir(t):t,i=ud(o.pathname||"/",n);if(i==null)return null;let a=pg(e);S2(a);let s=null;for(let l=0;s==null&&l<a.length;++l){let u=$2(i);s=R2(a[l],u)}return s}function pg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,s)=>{let l={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};l.relativePath.startsWith("/")&&(le(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=wn([r,l.relativePath]),d=n.concat(l);i.children&&i.children.length>0&&(le(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),pg(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:z2(u,i.index),routesMeta:d})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,a);else for(let l of mg(i.path))o(i,a,l)}),t}function mg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=mg(r.join("/")),s=[];return s.push(...a.map(l=>l===""?i:[i,l].join("/"))),o&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function S2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:A2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const j2=/^:[\w-]+$/,C2=3,k2=2,P2=1,E2=10,T2=-2,up=e=>e==="*";function z2(e,t){let n=e.split("/"),r=n.length;return n.some(up)&&(r+=T2),t&&(r+=k2),n.filter(o=>!up(o)).reduce((o,i)=>o+(j2.test(i)?C2:i===""?P2:E2),r)}function A2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function R2(e,t,n){let{routesMeta:r}=e,o={},i="/",a=[];for(let s=0;s<r.length;++s){let l=r[s],u=s===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",f=D2({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),p=l.route;if(!f)return null;Object.assign(o,f.params),a.push({params:o,pathname:wn([i,f.pathname]),pathnameBase:O2(wn([i,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(i=wn([i,f.pathnameBase]))}return a}function D2(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=M2(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:p,isOptional:h}=d;if(p==="*"){let w=s[f]||"";a=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const y=s[f];return h&&!y?u[p]=void 0:u[p]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:a,pattern:e}}function M2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),cd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function $2(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return cd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ud(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function N2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?ir(e):e;return{pathname:n?n.startsWith("/")?n:L2(n,t):t,search:V2(r),hash:F2(o)}}function L2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function gl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function I2(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function dd(e,t){let n=I2(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function fd(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=ir(e):(o=ii({},e),le(!o.pathname||!o.pathname.includes("?"),gl("?","pathname","search",o)),le(!o.pathname||!o.pathname.includes("#"),gl("#","pathname","hash",o)),le(!o.search||!o.search.includes("#"),gl("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(a==null)s=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),f-=1;o.pathname=p.join("/")}s=f>=0?t[f]:"/"}let l=N2(o,s),u=a&&a!=="/"&&a.endsWith("/"),d=(i||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const wn=e=>e.join("/").replace(/\/\/+/g,"/"),O2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),V2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,F2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function _2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const hg=["post","put","patch","delete"];new Set(hg);const B2=["get",...hg];new Set(B2);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ai(){return ai=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ai.apply(this,arguments)}const pd=b.createContext(null),U2=b.createContext(null),Rn=b.createContext(null),Ts=b.createContext(null),Xt=b.createContext({outlet:null,matches:[],isDataRoute:!1}),gg=b.createContext(null);function H2(e,t){let{relative:n}=t===void 0?{}:t;to()||le(!1);let{basename:r,navigator:o}=b.useContext(Rn),{hash:i,pathname:a,search:s}=yg(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:wn([r,a])),o.createHref({pathname:l,search:s,hash:i})}function to(){return b.useContext(Ts)!=null}function ar(){return to()||le(!1),b.useContext(Ts).location}function vg(e){b.useContext(Rn).static||b.useLayoutEffect(e)}function md(){let{isDataRoute:e}=b.useContext(Xt);return e?o5():W2()}function W2(){to()||le(!1);let e=b.useContext(pd),{basename:t,future:n,navigator:r}=b.useContext(Rn),{matches:o}=b.useContext(Xt),{pathname:i}=ar(),a=JSON.stringify(dd(o,n.v7_relativeSplatPath)),s=b.useRef(!1);return vg(()=>{s.current=!0}),b.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let f=fd(u,JSON.parse(a),i,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:wn([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,a,i,e])}function G2(){let{matches:e}=b.useContext(Xt),t=e[e.length-1];return t?t.params:{}}function yg(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=b.useContext(Rn),{matches:o}=b.useContext(Xt),{pathname:i}=ar(),a=JSON.stringify(dd(o,r.v7_relativeSplatPath));return b.useMemo(()=>fd(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function q2(e,t){return Y2(e,t)}function Y2(e,t,n,r){to()||le(!1);let{navigator:o}=b.useContext(Rn),{matches:i}=b.useContext(Xt),a=i[i.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=ar(),d;if(t){var f;let j=typeof t=="string"?ir(t):t;l==="/"||(f=j.pathname)!=null&&f.startsWith(l)||le(!1),d=j}else d=u;let p=d.pathname||"/",h=p;if(l!=="/"){let j=l.replace(/^\//,"").split("/");h="/"+p.replace(/^\//,"").split("/").slice(j.length).join("/")}let y=w2(e,{pathname:h}),w=J2(y&&y.map(j=>Object.assign({},j,{params:Object.assign({},s,j.params),pathname:wn([l,o.encodeLocation?o.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?l:wn([l,o.encodeLocation?o.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),i,n,r);return t&&w?b.createElement(Ts.Provider,{value:{location:ai({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:un.Pop}},w):w}function K2(){let e=r5(),t=_2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:o},n):null,null)}const Q2=b.createElement(K2,null);class X2 extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(Xt.Provider,{value:this.props.routeContext},b.createElement(gg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Z2(e){let{routeContext:t,match:n,children:r}=e,o=b.useContext(pd);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Xt.Provider,{value:t},r)}function J2(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,s=(o=n)==null?void 0:o.errors;if(s!=null){let d=a.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);d>=0||le(!1),a=a.slice(0,Math.min(a.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let f=a[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:p,errors:h}=n,y=f.route.loader&&p[f.route.id]===void 0&&(!h||h[f.route.id]===void 0);if(f.route.lazy||y){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,f,p)=>{let h,y=!1,w=null,j=null;n&&(h=s&&f.route.id?s[f.route.id]:void 0,w=f.route.errorElement||Q2,l&&(u<0&&p===0?(i5("route-fallback"),y=!0,j=null):u===p&&(y=!0,j=f.route.hydrateFallbackElement||null)));let v=t.concat(a.slice(0,p+1)),m=()=>{let g;return h?g=w:y?g=j:f.route.Component?g=b.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=d,b.createElement(Z2,{match:f,routeContext:{outlet:d,matches:v,isDataRoute:n!=null},children:g})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?b.createElement(X2,{location:n.location,revalidation:n.revalidation,component:w,error:h,children:m(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):m()},null)}var xg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(xg||{}),wg=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(wg||{});function e5(e){let t=b.useContext(pd);return t||le(!1),t}function t5(e){let t=b.useContext(U2);return t||le(!1),t}function n5(e){let t=b.useContext(Xt);return t||le(!1),t}function bg(e){let t=n5(),n=t.matches[t.matches.length-1];return n.route.id||le(!1),n.route.id}function r5(){var e;let t=b.useContext(gg),n=t5(),r=bg();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function o5(){let{router:e}=e5(xg.UseNavigateStable),t=bg(wg.UseNavigateStable),n=b.useRef(!1);return vg(()=>{n.current=!0}),b.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ai({fromRouteId:t},i)))},[e,t])}const dp={};function i5(e,t,n){dp[e]||(dp[e]=!0)}function a5(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function s5(e){let{to:t,replace:n,state:r,relative:o}=e;to()||le(!1);let{future:i,static:a}=b.useContext(Rn),{matches:s}=b.useContext(Xt),{pathname:l}=ar(),u=md(),d=fd(t,dd(s,i.v7_relativeSplatPath),l,o==="path"),f=JSON.stringify(d);return b.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:o}),[u,f,o,n,r]),null}function Pt(e){le(!1)}function l5(e){let{basename:t="/",children:n=null,location:r,navigationType:o=un.Pop,navigator:i,static:a=!1,future:s}=e;to()&&le(!1);let l=t.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:l,navigator:i,static:a,future:ai({v7_relativeSplatPath:!1},s)}),[l,s,i,a]);typeof r=="string"&&(r=ir(r));let{pathname:d="/",search:f="",hash:p="",state:h=null,key:y="default"}=r,w=b.useMemo(()=>{let j=ud(d,l);return j==null?null:{location:{pathname:j,search:f,hash:p,state:h,key:y},navigationType:o}},[l,d,f,p,h,y,o]);return w==null?null:b.createElement(Rn.Provider,{value:u},b.createElement(Ts.Provider,{children:n,value:w}))}function c5(e){let{children:t,location:n}=e;return q2(_c(t),n)}new Promise(()=>{});function _c(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,o)=>{if(!b.isValidElement(r))return;let i=[...t,o];if(r.type===b.Fragment){n.push.apply(n,_c(r.props.children,i));return}r.type!==Pt&&le(!1),!r.props.index||!r.props.children||le(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=_c(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bc(){return Bc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bc.apply(this,arguments)}function u5(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function d5(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function f5(e,t){return e.button===0&&(!t||t==="_self")&&!d5(e)}const p5=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],m5="6";try{window.__reactRouterVersion=m5}catch{}const h5="startTransition",fp=iy[h5];function g5(e){let{basename:t,children:n,future:r,window:o}=e,i=b.useRef();i.current==null&&(i.current=v2({window:o,v5Compat:!0}));let a=i.current,[s,l]=b.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=b.useCallback(f=>{u&&fp?fp(()=>l(f)):l(f)},[l,u]);return b.useLayoutEffect(()=>a.listen(d),[a,d]),b.useEffect(()=>a5(r),[r]),b.createElement(l5,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}const v5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",y5=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ie=b.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:s,target:l,to:u,preventScrollReset:d,viewTransition:f}=t,p=u5(t,p5),{basename:h}=b.useContext(Rn),y,w=!1;if(typeof u=="string"&&y5.test(u)&&(y=u,v5))try{let g=new URL(window.location.href),S=u.startsWith("//")?new URL(g.protocol+u):new URL(u),P=ud(S.pathname,h);S.origin===g.origin&&P!=null?u=P+S.search+S.hash:w=!0}catch{}let j=H2(u,{relative:o}),v=x5(u,{replace:a,state:s,target:l,preventScrollReset:d,relative:o,viewTransition:f});function m(g){r&&r(g),g.defaultPrevented||v(g)}return b.createElement("a",Bc({},p,{href:y||j,onClick:w||i?r:m,ref:n,target:l}))});var pp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(pp||(pp={}));var mp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(mp||(mp={}));function x5(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,viewTransition:s}=t===void 0?{}:t,l=md(),u=ar(),d=yg(e,{relative:a});return b.useCallback(f=>{if(f5(f,n)){f.preventDefault();let p=r!==void 0?r:Ga(u)===Ga(d);l(e,{replace:p,state:o,preventScrollReset:i,relative:a,viewTransition:s})}},[u,l,d,r,o,n,e,i,a,s])}var w5=typeof Element<"u",b5=typeof Map=="function",S5=typeof Set=="function",j5=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function pa(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,o;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!pa(e[r],t[r]))return!1;return!0}var i;if(b5&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;for(i=e.entries();!(r=i.next()).done;)if(!pa(r.value[1],t.get(r.value[0])))return!1;return!0}if(S5&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(j5&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;if(w5&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&e.$$typeof)&&!pa(e[o[r]],t[o[r]]))return!1;return!0}return e!==e&&t!==t}var C5=function(t,n){try{return pa(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const k5=di(C5);var P5=function(e,t,n,r,o,i,a,s){if(!e){var l;if(t===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,a,s],d=0;l=new Error(t.replace(/%s/g,function(){return u[d++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},E5=P5;const hp=di(E5);var T5=function(t,n,r,o){var i=r?r.call(o,t,n):void 0;if(i!==void 0)return!!i;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),u=0;u<a.length;u++){var d=a[u];if(!l(d))return!1;var f=t[d],p=n[d];if(i=r?r.call(o,f,p,d):void 0,i===!1||i===void 0&&f!==p)return!1}return!0};const z5=di(T5);var Sg=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(Sg||{}),vl={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},gp=Object.values(Sg),hd={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},A5=Object.entries(hd).reduce((e,[t,n])=>(e[n]=t,e),{}),yt="data-rh",Nr={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Lr=(e,t)=>{for(let n=e.length-1;n>=0;n-=1){const r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},R5=e=>{let t=Lr(e,"title");const n=Lr(e,Nr.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,()=>t);const r=Lr(e,Nr.DEFAULT_TITLE);return t||r||void 0},D5=e=>Lr(e,Nr.ON_CHANGE_CLIENT_STATE)||(()=>{}),yl=(e,t)=>t.filter(n=>typeof n[e]<"u").map(n=>n[e]).reduce((n,r)=>({...n,...r}),{}),M5=(e,t)=>t.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const o=Object.keys(r);for(let i=0;i<o.length;i+=1){const s=o[i].toLowerCase();if(e.indexOf(s)!==-1&&r[s])return n.concat(r)}}return n},[]),$5=e=>console&&typeof console.warn=="function"&&console.warn(e),fo=(e,t,n)=>{const r={};return n.filter(o=>Array.isArray(o[e])?!0:(typeof o[e]<"u"&&$5(`Helmet: ${e} should be of type "Array". Instead found type "${typeof o[e]}"`),!1)).map(o=>o[e]).reverse().reduce((o,i)=>{const a={};i.filter(l=>{let u;const d=Object.keys(l);for(let p=0;p<d.length;p+=1){const h=d[p],y=h.toLowerCase();t.indexOf(y)!==-1&&!(u==="rel"&&l[u].toLowerCase()==="canonical")&&!(y==="rel"&&l[y].toLowerCase()==="stylesheet")&&(u=y),t.indexOf(h)!==-1&&(h==="innerHTML"||h==="cssText"||h==="itemprop")&&(u=h)}if(!u||!l[u])return!1;const f=l[u].toLowerCase();return r[u]||(r[u]={}),a[u]||(a[u]={}),r[u][f]?!1:(a[u][f]=!0,!0)}).reverse().forEach(l=>o.push(l));const s=Object.keys(a);for(let l=0;l<s.length;l+=1){const u=s[l],d={...r[u],...a[u]};r[u]=d}return o},[]).reverse()},N5=(e,t)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},L5=e=>({baseTag:M5(["href"],e),bodyAttributes:yl("bodyAttributes",e),defer:Lr(e,Nr.DEFER),encode:Lr(e,Nr.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:yl("htmlAttributes",e),linkTags:fo("link",["rel","href"],e),metaTags:fo("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:fo("noscript",["innerHTML"],e),onChangeClientState:D5(e),scriptTags:fo("script",["src","innerHTML"],e),styleTags:fo("style",["cssText"],e),title:R5(e),titleAttributes:yl("titleAttributes",e),prioritizeSeoTags:N5(e,Nr.PRIORITIZE_SEO_TAGS)}),jg=e=>Array.isArray(e)?e.join(""):e,I5=(e,t)=>{const n=Object.keys(e);for(let r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1},xl=(e,t)=>Array.isArray(e)?e.reduce((n,r)=>(I5(r,t)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:e,priority:[]},vp=(e,t)=>({...e,[t]:void 0}),O5=["noscript","script","style"],Uc=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Cg=e=>Object.keys(e).reduce((t,n)=>{const r=typeof e[n]<"u"?`${n}="${e[n]}"`:`${n}`;return t?`${t} ${r}`:r},""),V5=(e,t,n,r)=>{const o=Cg(n),i=jg(t);return o?`<${e} ${yt}="true" ${o}>${Uc(i,r)}</${e}>`:`<${e} ${yt}="true">${Uc(i,r)}</${e}>`},F5=(e,t,n=!0)=>t.reduce((r,o)=>{const i=o,a=Object.keys(i).filter(u=>!(u==="innerHTML"||u==="cssText")).reduce((u,d)=>{const f=typeof i[d]>"u"?d:`${d}="${Uc(i[d],n)}"`;return u?`${u} ${f}`:f},""),s=i.innerHTML||i.cssText||"",l=O5.indexOf(e)===-1;return`${r}<${e} ${yt}="true" ${a}${l?"/>":`>${s}</${e}>`}`},""),kg=(e,t={})=>Object.keys(e).reduce((n,r)=>{const o=hd[r];return n[o||r]=e[r],n},t),_5=(e,t,n)=>{const r={key:t,[yt]:!0},o=kg(n,r);return[G.createElement("title",o,t)]},ma=(e,t)=>t.map((n,r)=>{const o={key:r,[yt]:!0};return Object.keys(n).forEach(i=>{const s=hd[i]||i;if(s==="innerHTML"||s==="cssText"){const l=n.innerHTML||n.cssText;o.dangerouslySetInnerHTML={__html:l}}else o[s]=n[i]}),G.createElement(e,o)}),nt=(e,t,n=!0)=>{switch(e){case"title":return{toComponent:()=>_5(e,t.title,t.titleAttributes),toString:()=>V5(e,t.title,t.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>kg(t),toString:()=>Cg(t)};default:return{toComponent:()=>ma(e,t),toString:()=>F5(e,t,n)}}},B5=({metaTags:e,linkTags:t,scriptTags:n,encode:r})=>{const o=xl(e,vl.meta),i=xl(t,vl.link),a=xl(n,vl.script);return{priorityMethods:{toComponent:()=>[...ma("meta",o.priority),...ma("link",i.priority),...ma("script",a.priority)],toString:()=>`${nt("meta",o.priority,r)} ${nt("link",i.priority,r)} ${nt("script",a.priority,r)}`},metaTags:o.default,linkTags:i.default,scriptTags:a.default}},U5=e=>{const{baseTag:t,bodyAttributes:n,encode:r=!0,htmlAttributes:o,noscriptTags:i,styleTags:a,title:s="",titleAttributes:l,prioritizeSeoTags:u}=e;let{linkTags:d,metaTags:f,scriptTags:p}=e,h={toComponent:()=>{},toString:()=>""};return u&&({priorityMethods:h,linkTags:d,metaTags:f,scriptTags:p}=B5(e)),{priority:h,base:nt("base",t,r),bodyAttributes:nt("bodyAttributes",n,r),htmlAttributes:nt("htmlAttributes",o,r),link:nt("link",d,r),meta:nt("meta",f,r),noscript:nt("noscript",i,r),script:nt("script",p,r),style:nt("style",a,r),title:nt("title",{title:s,titleAttributes:l},r)}},Hc=U5,_i=[],Pg=!!(typeof window<"u"&&window.document&&window.document.createElement),Wc=class{constructor(e,t){ft(this,"instances",[]);ft(this,"canUseDOM",Pg);ft(this,"context");ft(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?_i:this.instances,add:e=>{(this.canUseDOM?_i:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?_i:this.instances).indexOf(e);(this.canUseDOM?_i:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=Hc({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},H5={},Eg=G.createContext(H5),qn,Tg=(qn=class extends b.Component{constructor(n){super(n);ft(this,"helmetData");this.helmetData=new Wc(this.props.context||{},qn.canUseDOM)}render(){return G.createElement(Eg.Provider,{value:this.helmetData.value},this.props.children)}},ft(qn,"canUseDOM",Pg),qn),ur=(e,t)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${e}[${yt}]`),o=[].slice.call(r),i=[];let a;return t&&t.length&&t.forEach(s=>{const l=document.createElement(e);for(const u in s)if(Object.prototype.hasOwnProperty.call(s,u))if(u==="innerHTML")l.innerHTML=s.innerHTML;else if(u==="cssText")l.styleSheet?l.styleSheet.cssText=s.cssText:l.appendChild(document.createTextNode(s.cssText));else{const d=u,f=typeof s[d]>"u"?"":s[d];l.setAttribute(u,f)}l.setAttribute(yt,"true"),o.some((u,d)=>(a=d,l.isEqualNode(u)))?o.splice(a,1):i.push(l)}),o.forEach(s=>{var l;return(l=s.parentNode)==null?void 0:l.removeChild(s)}),i.forEach(s=>n.appendChild(s)),{oldTags:o,newTags:i}},Gc=(e,t)=>{const n=document.getElementsByTagName(e)[0];if(!n)return;const r=n.getAttribute(yt),o=r?r.split(","):[],i=[...o],a=Object.keys(t);for(const s of a){const l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),o.indexOf(s)===-1&&o.push(s);const u=i.indexOf(s);u!==-1&&i.splice(u,1)}for(let s=i.length-1;s>=0;s-=1)n.removeAttribute(i[s]);o.length===i.length?n.removeAttribute(yt):n.getAttribute(yt)!==a.join(",")&&n.setAttribute(yt,a.join(","))},W5=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=jg(e)),Gc("title",t)},yp=(e,t)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:o,linkTags:i,metaTags:a,noscriptTags:s,onChangeClientState:l,scriptTags:u,styleTags:d,title:f,titleAttributes:p}=e;Gc("body",r),Gc("html",o),W5(f,p);const h={baseTag:ur("base",n),linkTags:ur("link",i),metaTags:ur("meta",a),noscriptTags:ur("noscript",s),scriptTags:ur("script",u),styleTags:ur("style",d)},y={},w={};Object.keys(h).forEach(j=>{const{newTags:v,oldTags:m}=h[j];v.length&&(y[j]=v),m.length&&(w[j]=h[j].oldTags)}),t&&t(),l(e,y,w)},po=null,G5=e=>{po&&cancelAnimationFrame(po),e.defer?po=requestAnimationFrame(()=>{yp(e,()=>{po=null})}):(yp(e),po=null)},q5=G5,xp=class extends b.Component{constructor(){super(...arguments);ft(this,"rendered",!1)}shouldComponentUpdate(t){return!z5(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:n}=this.props.context;let r=null;const o=L5(t.get().map(i=>{const a={...i.props};return delete a.context,a}));Tg.canUseDOM?q5(o):Hc&&(r=Hc(o)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},Gl,gd=(Gl=class extends b.Component{shouldComponentUpdate(e){return!k5(vp(this.props,"helmetData"),vp(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,r){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,r)}]}}mapObjectTypeChildren(e,t,n,r){switch(e.type){case"title":return{...t,[e.type]:r,titleAttributes:{...n}};case"body":return{...t,bodyAttributes:{...n}};case"html":return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach(r=>{n={...n,[r]:e[r]}}),n}warnOnInvalidChildren(e,t){return hp(gp.some(n=>e.type===n),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${gp.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),hp(!t||typeof t=="string"||Array.isArray(t)&&!t.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let n={};return G.Children.forEach(e,r=>{if(!r||!r.props)return;const{children:o,...i}=r.props,a=Object.keys(i).reduce((l,u)=>(l[A5[u]||u]=i[u],l),{});let{type:s}=r;switch(typeof s=="symbol"?s=s.toString():this.warnOnInvalidChildren(r,o),s){case"Symbol(react.fragment)":t=this.mapChildrenToProps(o,t);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,a,o);break;default:t=this.mapObjectTypeChildren(r,t,a,o);break}}),this.mapArrayTypeChildrenToProps(n,t)}render(){const{children:e,...t}=this.props;let n={...t},{helmetData:r}=t;if(e&&(n=this.mapChildrenToProps(e,n)),r&&!(r instanceof Wc)){const o=r;r=new Wc(o.context,!0),delete n.helmetData}return r?G.createElement(xp,{...n,context:r.value}):G.createElement(Eg.Consumer,null,o=>G.createElement(xp,{...n,context:o}))}},ft(Gl,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Gl),ze=function(){return ze=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ze.apply(this,arguments)};function Hr(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Q="-ms-",Io="-moz-",U="-webkit-",zg="comm",zs="rule",vd="decl",Y5="@import",Ag="@keyframes",K5="@layer",Rg=Math.abs,yd=String.fromCharCode,qc=Object.assign;function Q5(e,t){return ye(e,0)^45?(((t<<2^ye(e,0))<<2^ye(e,1))<<2^ye(e,2))<<2^ye(e,3):0}function Dg(e){return e.trim()}function Lt(e,t){return(e=t.exec(e))?e[0]:e}function O(e,t,n){return e.replace(t,n)}function ha(e,t,n){return e.indexOf(t,n)}function ye(e,t){return e.charCodeAt(t)|0}function Wr(e,t,n){return e.slice(t,n)}function Tt(e){return e.length}function Mg(e){return e.length}function ko(e,t){return t.push(e),e}function X5(e,t){return e.map(t).join("")}function wp(e,t){return e.filter(function(n){return!Lt(n,t)})}var As=1,Gr=1,$g=0,ct=0,de=0,no="";function Rs(e,t,n,r,o,i,a,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:As,column:Gr,length:a,return:"",siblings:s}}function en(e,t){return qc(Rs("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function dr(e){for(;e.root;)e=en(e.root,{children:[e]});ko(e,e.siblings)}function Z5(){return de}function J5(){return de=ct>0?ye(no,--ct):0,Gr--,de===10&&(Gr=1,As--),de}function bt(){return de=ct<$g?ye(no,ct++):0,Gr++,de===10&&(Gr=1,As++),de}function Qn(){return ye(no,ct)}function ga(){return ct}function Ds(e,t){return Wr(no,e,t)}function Yc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function e4(e){return As=Gr=1,$g=Tt(no=e),ct=0,[]}function t4(e){return no="",e}function wl(e){return Dg(Ds(ct-1,Kc(e===91?e+2:e===40?e+1:e)))}function n4(e){for(;(de=Qn())&&de<33;)bt();return Yc(e)>2||Yc(de)>3?"":" "}function r4(e,t){for(;--t&&bt()&&!(de<48||de>102||de>57&&de<65||de>70&&de<97););return Ds(e,ga()+(t<6&&Qn()==32&&bt()==32))}function Kc(e){for(;bt();)switch(de){case e:return ct;case 34:case 39:e!==34&&e!==39&&Kc(de);break;case 40:e===41&&Kc(e);break;case 92:bt();break}return ct}function o4(e,t){for(;bt()&&e+de!==57;)if(e+de===84&&Qn()===47)break;return"/*"+Ds(t,ct-1)+"*"+yd(e===47?e:bt())}function i4(e){for(;!Yc(Qn());)bt();return Ds(e,ct)}function a4(e){return t4(va("",null,null,null,[""],e=e4(e),0,[0],e))}function va(e,t,n,r,o,i,a,s,l){for(var u=0,d=0,f=a,p=0,h=0,y=0,w=1,j=1,v=1,m=0,g="",S=o,P=i,k=r,C=g;j;)switch(y=m,m=bt()){case 40:if(y!=108&&ye(C,f-1)==58){ha(C+=O(wl(m),"&","&\f"),"&\f",Rg(u?s[u-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:C+=wl(m);break;case 9:case 10:case 13:case 32:C+=n4(y);break;case 92:C+=r4(ga()-1,7);continue;case 47:switch(Qn()){case 42:case 47:ko(s4(o4(bt(),ga()),t,n,l),l);break;default:C+="/"}break;case 123*w:s[u++]=Tt(C)*v;case 125*w:case 59:case 0:switch(m){case 0:case 125:j=0;case 59+d:v==-1&&(C=O(C,/\f/g,"")),h>0&&Tt(C)-f&&ko(h>32?Sp(C+";",r,n,f-1,l):Sp(O(C," ","")+";",r,n,f-2,l),l);break;case 59:C+=";";default:if(ko(k=bp(C,t,n,u,d,o,s,g,S=[],P=[],f,i),i),m===123)if(d===0)va(C,t,k,k,S,i,f,s,P);else switch(p===99&&ye(C,3)===110?100:p){case 100:case 108:case 109:case 115:va(e,k,k,r&&ko(bp(e,k,k,0,0,o,s,g,o,S=[],f,P),P),o,P,f,s,r?S:P);break;default:va(C,k,k,k,[""],P,0,s,P)}}u=d=h=0,w=v=1,g=C="",f=a;break;case 58:f=1+Tt(C),h=y;default:if(w<1){if(m==123)--w;else if(m==125&&w++==0&&J5()==125)continue}switch(C+=yd(m),m*w){case 38:v=d>0?1:(C+="\f",-1);break;case 44:s[u++]=(Tt(C)-1)*v,v=1;break;case 64:Qn()===45&&(C+=wl(bt())),p=Qn(),d=f=Tt(g=C+=i4(ga())),m++;break;case 45:y===45&&Tt(C)==2&&(w=0)}}return i}function bp(e,t,n,r,o,i,a,s,l,u,d,f){for(var p=o-1,h=o===0?i:[""],y=Mg(h),w=0,j=0,v=0;w<r;++w)for(var m=0,g=Wr(e,p+1,p=Rg(j=a[w])),S=e;m<y;++m)(S=Dg(j>0?h[m]+" "+g:O(g,/&\f/g,h[m])))&&(l[v++]=S);return Rs(e,t,n,o===0?zs:s,l,u,d,f)}function s4(e,t,n,r){return Rs(e,t,n,zg,yd(Z5()),Wr(e,2,-2),0,r)}function Sp(e,t,n,r,o){return Rs(e,t,n,vd,Wr(e,0,r),Wr(e,r+1,-1),r,o)}function Ng(e,t,n){switch(Q5(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 4789:return Io+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+Io+e+Q+e+e;case 5936:switch(ye(e,t+11)){case 114:return U+e+Q+O(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+Q+O(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+Q+O(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return U+e+Q+e+e;case 6165:return U+e+Q+"flex-"+e+e;case 5187:return U+e+O(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+Q+"flex-$1$2")+e;case 5443:return U+e+Q+"flex-item-"+O(e,/flex-|-self/g,"")+(Lt(e,/flex-|baseline/)?"":Q+"grid-row-"+O(e,/flex-|-self/g,""))+e;case 4675:return U+e+Q+"flex-line-pack"+O(e,/align-content|flex-|-self/g,"")+e;case 5548:return U+e+Q+O(e,"shrink","negative")+e;case 5292:return U+e+Q+O(e,"basis","preferred-size")+e;case 6060:return U+"box-"+O(e,"-grow","")+U+e+Q+O(e,"grow","positive")+e;case 4554:return U+O(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return O(O(O(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return O(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return O(O(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+Q+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4200:if(!Lt(e,/flex-|baseline/))return Q+"grid-column-align"+Wr(e,t)+e;break;case 2592:case 3360:return Q+O(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Lt(r.props,/grid-\w+-end/)})?~ha(e+(n=n[t].value),"span",0)?e:Q+O(e,"-start","")+e+Q+"grid-row-span:"+(~ha(n,"span",0)?Lt(n,/\d+/):+Lt(n,/\d+/)-+Lt(e,/\d+/))+";":Q+O(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Lt(r.props,/grid-\w+-start/)})?e:Q+O(O(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return O(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Tt(e)-1-t>6)switch(ye(e,t+1)){case 109:if(ye(e,t+4)!==45)break;case 102:return O(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+Io+(ye(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ha(e,"stretch",0)?Ng(O(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return O(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,a,s,l,u){return Q+o+":"+i+u+(a?Q+o+"-span:"+(s?l:+l-+i)+u:"")+e});case 4949:if(ye(e,t+6)===121)return O(e,":",":"+U)+e;break;case 6444:switch(ye(e,ye(e,14)===45?18:11)){case 120:return O(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+U+(ye(e,14)===45?"inline-":"")+"box$3$1"+U+"$2$3$1"+Q+"$2box$3")+e;case 100:return O(e,":",":"+Q)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return O(e,"scroll-","scroll-snap-")+e}return e}function qa(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function l4(e,t,n,r){switch(e.type){case K5:if(e.children.length)break;case Y5:case vd:return e.return=e.return||e.value;case zg:return"";case Ag:return e.return=e.value+"{"+qa(e.children,r)+"}";case zs:if(!Tt(e.value=e.props.join(",")))return""}return Tt(n=qa(e.children,r))?e.return=e.value+"{"+n+"}":""}function c4(e){var t=Mg(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}function u4(e){return function(t){t.root||(t=t.return)&&e(t)}}function d4(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case vd:e.return=Ng(e.value,e.length,n);return;case Ag:return qa([en(e,{value:O(e.value,"@","@"+U)})],r);case zs:if(e.length)return X5(n=e.props,function(o){switch(Lt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":dr(en(e,{props:[O(o,/:(read-\w+)/,":"+Io+"$1")]})),dr(en(e,{props:[o]})),qc(e,{props:wp(n,r)});break;case"::placeholder":dr(en(e,{props:[O(o,/:(plac\w+)/,":"+U+"input-$1")]})),dr(en(e,{props:[O(o,/:(plac\w+)/,":"+Io+"$1")]})),dr(en(e,{props:[O(o,/:(plac\w+)/,Q+"input-$1")]})),dr(en(e,{props:[o]})),qc(e,{props:wp(n,r)});break}return""})}}var f4={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},He={},qr=typeof process<"u"&&He!==void 0&&(He.REACT_APP_SC_ATTR||He.SC_ATTR)||"data-styled",Lg="active",Ig="data-styled-version",Ms="6.1.19",xd=`/*!sc*/
`,Ya=typeof window<"u"&&typeof document<"u",p4=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&He!==void 0&&He.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&He.REACT_APP_SC_DISABLE_SPEEDY!==""?He.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&He.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&He!==void 0&&He.SC_DISABLE_SPEEDY!==void 0&&He.SC_DISABLE_SPEEDY!==""&&He.SC_DISABLE_SPEEDY!=="false"&&He.SC_DISABLE_SPEEDY),m4={},$s=Object.freeze([]),Yr=Object.freeze({});function Og(e,t,n){return n===void 0&&(n=Yr),e.theme!==n.theme&&e.theme||t||n.theme}var Vg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),h4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,g4=/(^-|-$)/g;function jp(e){return e.replace(h4,"-").replace(g4,"")}var v4=/(a)(d)/gi,Bi=52,Cp=function(e){return String.fromCharCode(e+(e>25?39:97))};function Qc(e){var t,n="";for(t=Math.abs(e);t>Bi;t=t/Bi|0)n=Cp(t%Bi)+n;return(Cp(t%Bi)+n).replace(v4,"$1-$2")}var bl,Fg=5381,Cr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},_g=function(e){return Cr(Fg,e)};function wd(e){return Qc(_g(e)>>>0)}function y4(e){return e.displayName||e.name||"Component"}function Sl(e){return typeof e=="string"&&!0}var Bg=typeof Symbol=="function"&&Symbol.for,Ug=Bg?Symbol.for("react.memo"):60115,x4=Bg?Symbol.for("react.forward_ref"):60112,w4={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},b4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Hg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},S4=((bl={})[x4]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},bl[Ug]=Hg,bl);function kp(e){return("type"in(t=e)&&t.type.$$typeof)===Ug?Hg:"$$typeof"in e?S4[e.$$typeof]:w4;var t}var j4=Object.defineProperty,C4=Object.getOwnPropertyNames,Pp=Object.getOwnPropertySymbols,k4=Object.getOwnPropertyDescriptor,P4=Object.getPrototypeOf,Ep=Object.prototype;function Wg(e,t,n){if(typeof t!="string"){if(Ep){var r=P4(t);r&&r!==Ep&&Wg(e,r,n)}var o=C4(t);Pp&&(o=o.concat(Pp(t)));for(var i=kp(e),a=kp(t),s=0;s<o.length;++s){var l=o[s];if(!(l in b4||n&&n[l]||a&&l in a||i&&l in i)){var u=k4(t,l);try{j4(e,l,u)}catch{}}}}return e}function Kr(e){return typeof e=="function"}function bd(e){return typeof e=="object"&&"styledComponentId"in e}function Wn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ka(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function si(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Xc(e,t,n){if(n===void 0&&(n=!1),!n&&!si(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Xc(e[r],t[r]);else if(si(t))for(var r in t)e[r]=Xc(e[r],t[r]);return e}function Sd(e,t){Object.defineProperty(e,"toString",{value:t})}function vi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var E4=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw vi(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var a=o;a<i;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),l=(a=0,n.length);a<l;a++)this.tag.insertRule(s,n[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,a=o;a<i;a++)n+="".concat(this.tag.getRule(a)).concat(xd);return n},e}(),ya=new Map,Qa=new Map,xa=1,Ui=function(e){if(ya.has(e))return ya.get(e);for(;Qa.has(xa);)xa++;var t=xa++;return ya.set(e,t),Qa.set(t,e),t},T4=function(e,t){xa=t+1,ya.set(e,t),Qa.set(t,e)},z4="style[".concat(qr,"][").concat(Ig,'="').concat(Ms,'"]'),A4=new RegExp("^".concat(qr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),R4=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},D4=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(xd),o=[],i=0,a=r.length;i<a;i++){var s=r[i].trim();if(s){var l=s.match(A4);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(T4(d,u),R4(e,d,l[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(s)}}},Tp=function(e){for(var t=document.querySelectorAll(z4),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(qr)!==Lg&&(D4(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function M4(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Gg=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){var l=Array.from(s.querySelectorAll("style[".concat(qr,"]")));return l[l.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(qr,Lg),r.setAttribute(Ig,Ms);var a=M4();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},$4=function(){function e(t){this.element=Gg(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var a=r[o];if(a.ownerNode===n)return a}throw vi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),N4=function(){function e(t){this.element=Gg(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),L4=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),zp=Ya,I4={isServer:!Ya,useCSSOMInjection:!p4},Xa=function(){function e(t,n,r){t===void 0&&(t=Yr),n===void 0&&(n={});var o=this;this.options=ze(ze({},I4),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ya&&zp&&(zp=!1,Tp(this)),Sd(this,function(){return function(i){for(var a=i.getTag(),s=a.length,l="",u=function(f){var p=function(v){return Qa.get(v)}(f);if(p===void 0)return"continue";var h=i.names.get(p),y=a.getGroup(f);if(h===void 0||!h.size||y.length===0)return"continue";var w="".concat(qr,".g").concat(f,'[id="').concat(p,'"]'),j="";h!==void 0&&h.forEach(function(v){v.length>0&&(j+="".concat(v,","))}),l+="".concat(y).concat(w,'{content:"').concat(j,'"}').concat(xd)},d=0;d<s;d++)u(d);return l}(o)})}return e.registerId=function(t){return Ui(t)},e.prototype.rehydrate=function(){!this.server&&Ya&&Tp(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ze(ze({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new L4(o):r?new $4(o):new N4(o)}(this.options),new E4(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ui(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ui(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ui(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),O4=/&/g,V4=/^\s*\/\/.*$/gm;function qg(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=qg(n.children,t)),n})}function F4(e){var t,n,r,o=Yr,i=o.options,a=i===void 0?Yr:i,s=o.plugins,l=s===void 0?$s:s,u=function(p,h,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):p},d=l.slice();d.push(function(p){p.type===zs&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(O4,n).replace(r,u))}),a.prefix&&d.push(d4),d.push(l4);var f=function(p,h,y,w){h===void 0&&(h=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,n=h,r=new RegExp("\\".concat(n,"\\b"),"g");var j=p.replace(V4,""),v=a4(y||h?"".concat(y," ").concat(h," { ").concat(j," }"):j);a.namespace&&(v=qg(v,a.namespace));var m=[];return qa(v,c4(d.concat(u4(function(g){return m.push(g)})))),m};return f.hash=l.length?l.reduce(function(p,h){return h.name||vi(15),Cr(p,h.name)},Fg).toString():"",f}var _4=new Xa,Zc=F4(),Yg=G.createContext({shouldForwardProp:void 0,styleSheet:_4,stylis:Zc});Yg.Consumer;G.createContext(void 0);function Jc(){return b.useContext(Yg)}var Kg=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Zc);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Sd(this,function(){throw vi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Zc),this.name+t.hash},e}(),B4=function(e){return e>="A"&&e<="Z"};function Ap(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;B4(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Qg=function(e){return e==null||e===!1||e===""},Xg=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Qg(i)&&(Array.isArray(i)&&i.isCss||Kr(i)?r.push("".concat(Ap(o),":"),i,";"):si(i)?r.push.apply(r,Hr(Hr(["".concat(o," {")],Xg(i),!1),["}"],!1)):r.push("".concat(Ap(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in f4||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function bn(e,t,n,r){if(Qg(e))return[];if(bd(e))return[".".concat(e.styledComponentId)];if(Kr(e)){if(!Kr(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return bn(o,t,n,r)}var i;return e instanceof Kg?n?(e.inject(n,r),[e.getName(r)]):[e]:si(e)?Xg(e):Array.isArray(e)?Array.prototype.concat.apply($s,e.map(function(a){return bn(a,t,n,r)})):[e.toString()]}function Zg(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Kr(n)&&!bd(n))return!1}return!0}var U4=_g(Ms),H4=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Zg(t),this.componentId=n,this.baseHash=Cr(U4,n),this.baseStyle=r,Xa.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Wn(o,this.staticRulesId);else{var i=Ka(bn(this.rules,t,n,r)),a=Qc(Cr(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,a)){var s=r(i,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,s)}o=Wn(o,a),this.staticRulesId=a}else{for(var l=Cr(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")u+=f;else if(f){var p=Ka(bn(f,t,n,r));l=Cr(l,p+d),u+=p}}if(u){var h=Qc(l>>>0);n.hasNameForId(this.componentId,h)||n.insertRules(this.componentId,h,r(u,".".concat(h),void 0,this.componentId)),o=Wn(o,h)}}return o},e}(),jd=G.createContext(void 0);jd.Consumer;var jl={};function W4(e,t,n){var r=bd(e),o=e,i=!Sl(e),a=t.attrs,s=a===void 0?$s:a,l=t.componentId,u=l===void 0?function(S,P){var k=typeof S!="string"?"sc":jp(S);jl[k]=(jl[k]||0)+1;var C="".concat(k,"-").concat(wd(Ms+k+jl[k]));return P?"".concat(P,"-").concat(C):C}(t.displayName,t.parentComponentId):l,d=t.displayName,f=d===void 0?function(S){return Sl(S)?"styled.".concat(S):"Styled(".concat(y4(S),")")}(e):d,p=t.displayName&&t.componentId?"".concat(jp(t.displayName),"-").concat(t.componentId):t.componentId||u,h=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s,y=t.shouldForwardProp;if(r&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var j=t.shouldForwardProp;y=function(S,P){return w(S,P)&&j(S,P)}}else y=w}var v=new H4(n,p,r?o.componentStyle:void 0);function m(S,P){return function(k,C,E){var D=k.attrs,M=k.componentStyle,oe=k.defaultProps,pe=k.foldedComponentIds,we=k.styledComponentId,ce=k.target,jt=G.useContext(jd),J=Jc(),Ce=k.shouldForwardProp||J.shouldForwardProp,z=Og(C,jt,oe)||Yr,$=function(ut,me,Ze){for(var $n,dt=ze(ze({},me),{className:void 0,theme:Ze}),Zt=0;Zt<ut.length;Zt+=1){var Je=Kr($n=ut[Zt])?$n(dt):$n;for(var $t in Je)dt[$t]=$t==="className"?Wn(dt[$t],Je[$t]):$t==="style"?ze(ze({},dt[$t]),Je[$t]):Je[$t]}return me.className&&(dt.className=Wn(dt.className,me.className)),dt}(D,C,z),I=$.as||ce,N={};for(var _ in $)$[_]===void 0||_[0]==="$"||_==="as"||_==="theme"&&$.theme===z||(_==="forwardedAs"?N.as=$.forwardedAs:Ce&&!Ce(_,I)||(N[_]=$[_]));var Ct=function(ut,me){var Ze=Jc(),$n=ut.generateAndInjectStyles(me,Ze.styleSheet,Ze.stylis);return $n}(M,$),Le=Wn(pe,we);return Ct&&(Le+=" "+Ct),$.className&&(Le+=" "+$.className),N[Sl(I)&&!Vg.has(I)?"class":"className"]=Le,E&&(N.ref=E),b.createElement(I,N)}(g,S,P)}m.displayName=f;var g=G.forwardRef(m);return g.attrs=h,g.componentStyle=v,g.displayName=f,g.shouldForwardProp=y,g.foldedComponentIds=r?Wn(o.foldedComponentIds,o.styledComponentId):"",g.styledComponentId=p,g.target=r?o.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(P){for(var k=[],C=1;C<arguments.length;C++)k[C-1]=arguments[C];for(var E=0,D=k;E<D.length;E++)Xc(P,D[E],!0);return P}({},o.defaultProps,S):S}}),Sd(g,function(){return".".concat(g.styledComponentId)}),i&&Wg(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function Rp(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Dp=function(e){return Object.assign(e,{isCss:!0})};function ht(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Kr(e)||si(e))return Dp(bn(Rp($s,Hr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?bn(r):Dp(bn(Rp(r,t)))}function eu(e,t,n){if(n===void 0&&(n=Yr),!t)throw vi(1,t);var r=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,ht.apply(void 0,Hr([o],i,!1)))};return r.attrs=function(o){return eu(e,t,ze(ze({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return eu(e,t,ze(ze({},n),o))},r}var Jg=function(e){return eu(W4,e)},x=Jg;Vg.forEach(function(e){x[e]=Jg(e)});var G4=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Zg(t),Xa.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(Ka(bn(this.rules,n,r,o)),""),a=this.componentId+t;r.insertRules(a,a,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Xa.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function q4(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ht.apply(void 0,Hr([e],t,!1)),o="sc-global-".concat(wd(JSON.stringify(r))),i=new G4(r,o),a=function(l){var u=Jc(),d=G.useContext(jd),f=G.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&s(f,l,u.styleSheet,d,u.stylis),G.useLayoutEffect(function(){if(!u.styleSheet.server)return s(f,l,u.styleSheet,d,u.stylis),function(){return i.removeStyles(f,u.styleSheet)}},[f,l,u.styleSheet,d,u.stylis]),null};function s(l,u,d,f,p){if(i.isStatic)i.renderStyles(l,m4,d,p);else{var h=ze(ze({},u),{theme:Og(u,f,a.defaultProps)});i.renderStyles(l,h,d,p)}}return G.memo(a)}function e1(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ka(ht.apply(void 0,Hr([e],t,!1))),o=wd(r);return new Kg(o,r)}const Y4=q4`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary-color: #2E8B57;
    --secondary-color: #87CEEB;  
    --accent-color: #FFD700;
    --text-dark: #333;
    --text-light: #666;
    --white: #fff;
    --light-gray: #f8f9fa;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.6;
    color: var(--text-dark);
    background-color: var(--white);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    line-height: 1.2;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Smooth loading for images */
  img[loading="lazy"] {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  img[loading="lazy"].loaded {
    opacity: 1;
  }

  /* Container */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* Button Styles */
  .btn {
    display: inline-block;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    text-align: center;
    transition: all 0.3s ease;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    border: none;
  }

  .btn-primary {
    background: var(--primary-color);
    color: white;
  }

  .btn-primary:hover {
    background: #246342;
    transform: translateY(-2px);
  }

  .btn-secondary {
    background: var(--primary-color);
    color: white;
    border: 2px solid var(--primary-color);
  }

  .btn-secondary:hover {
    background: #246342;
    color: white;
    transform: translateY(-2px);
  }

  .btn-outline {
    background: transparent;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
  }

  .btn-outline:hover {
    background: var(--primary-color);
    color: white;
  }

  .service-card .btn-outline {
    background: white;
    color: var(--primary-color);
    border: 2px solid white;
    font-weight: 600;
  }

  .service-card .btn-outline:hover {
    background: var(--accent-color);
    color: var(--primary-color);
    border-color: var(--accent-color);
    transform: translateY(-2px);
  }

  .btn-small {
    padding: 8px 16px;
    font-size: 14px;
  }

  .btn-whatsapp {
    background: #25D366;
    color: white;
  }

  .btn-whatsapp:hover {
    background: #1db954;
  }

  .btn-emergency {
    background: #dc3545;
    color: white;
  }

  .btn-emergency:hover {
    background: #c82333;
  }

  /* Section Styles */
  .section-title {
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 3rem;
    color: var(--text-dark);
  }

  /* Hero Sections */
  .hero-section {
    background: linear-gradient(135deg, var(--primary-color) 0%, #3a9d66 100%);
    color: white;
    padding: 120px 0 80px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }

  .hero-content {
    position: relative;
    z-index: 2;
  }

  .hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }

  .hero-subtitle {
    font-size: 1.25rem;
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  /* About Page Styles */
  .about-page {
    min-height: 100vh;
  }

  .our-story {
    padding: 100px 0;
    background: white;
    position: relative;
  }

  .our-story::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
  }

  .story-content {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }

  .story-text {
    margin-top: 3rem;
  }

  .story-text p {
    font-size: 1.25rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    color: var(--text-light);
    font-weight: 400;
  }

  /* Team Section Styles */
  .team-section {
    padding: 100px 0;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 3rem;
    margin-top: 4rem;
  }

  .team-card {
    background: white;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0,0,0,0.08);
    transition: all 0.4s ease;
    position: relative;
  }

  .team-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  }

  .team-card:hover {
    transform: translateY(-12px);
    box-shadow: 0 32px 80px rgba(0,0,0,0.12);
  }

  .team-card-image {
    width: 100%;
    height: 280px;
    overflow: hidden;
    position: relative;
  }

  .team-card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 20%;
    transition: transform 0.4s ease;
  }

  .team-card:hover .team-card-image img {
    transform: scale(1.05);
  }

  .team-card-content {
    padding: 2.5rem 2rem;
  }

  .team-member-name {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 0.75rem;
  }

  .team-member-specialty {
    font-size: 1rem;
    color: var(--text-dark);
    margin-bottom: 1rem;
    font-weight: 500;
  }

  .team-member-specialty strong {
    color: var(--primary-color);
  }

  .team-member-education {
    font-size: 0.95rem;
    color: var(--text-light);
    margin-bottom: 1.25rem;
    font-weight: 400;
  }

  .team-member-education strong {
    color: var(--text-dark);
  }

  .team-member-description {
    font-size: 1rem;
    color: var(--text-light);
    line-height: 1.7;
    font-style: italic;
    padding-top: 1rem;
    border-top: 1px solid #e9ecef;
  }

  .differentials-section {
    margin-top: 5rem;
    text-align: center;
  }

  .differentials-title {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 3rem;
    font-weight: 600;
  }

  .differentials-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    list-style: none;
    max-width: 1000px;
    margin: 0 auto;
  }

  .differential-item {
    background: white;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.06);
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: transform 0.3s ease;
  }

  .differential-item:hover {
    transform: translateY(-4px);
  }

  .differential-icon {
    background: rgba(46, 139, 87, 0.15);
    color: var(--primary-color);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    flex-shrink: 0;
    transition: all 0.3s ease;
  }

  .differential-item:hover .differential-icon {
    background: var(--primary-color);
    color: white;
    transform: scale(1.1);
  }

  .mission-vision {
    padding: 80px 0;
    background: var(--light-gray);
  }

  .mission-vision-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  .mission-card, .vision-card, .values-card {
    background: white;
    padding: 2.5rem 2rem;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .mission-card:hover, .vision-card:hover, .values-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 48px rgba(0,0,0,0.15);
  }

  .card-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    transition: all 0.3s ease;
  }

  .mission-card .card-icon {
    background: rgba(46, 139, 87, 0.15);
    color: var(--primary-color);
  }

  .vision-card .card-icon {
    background: rgba(65, 105, 225, 0.15);
    color: #4169E1;
  }

  .values-card .card-icon {
    background: rgba(255, 107, 53, 0.15);
    color: #FF6B35;
  }

  .mission-card:hover .card-icon {
    background: var(--primary-color);
    color: white;
    transform: scale(1.1);
  }

  .vision-card:hover .card-icon {
    background: #4169E1;
    color: white;
    transform: scale(1.1);
  }

  .values-card:hover .card-icon {
    background: #FF6B35;
    color: white;
    transform: scale(1.1);
  }

  .mission-card h3, .vision-card h3, .values-card h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--primary-color);
  }

  .mission-card p, .vision-card p, .values-card p {
    line-height: 1.7;
    color: var(--text-light);
  }

  .cta-section {
    padding: 80px 0;
    background: linear-gradient(135deg, #4169E1, #2E5DCA);
    color: white;
    text-align: center;
  }

  .cta-section .btn-primary,
  .cta-section .btn-secondary {
    background: white;
    color: #4169E1;
    border: 2px solid white;
  }

  .cta-section .btn-primary:hover,
  .cta-section .btn-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border-color: white;
    transform: translateY(-2px);
  }

  .cta-content h2 {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .cta-content p {
    font-size: 1.125rem;
    opacity: 0.9;
    margin-bottom: 2.5rem;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  /* Services Page Styles */
  .services-page {
    min-height: 100vh;
  }

  .services-section {
    padding: 100px 0 60px 0;
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  }

  .service-category {
    margin-bottom: 5rem;
    position: relative;
  }

  .service-category::before {
    content: '';
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    border-radius: 2px;
  }

  .category-title {
    font-size: 2.25rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 3rem;
    text-align: center;
    position: relative;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .service-card {
    background: linear-gradient(135deg, var(--primary-color) 0%, #3a9d66 100%);
    border: none;
    border-radius: 20px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: all 0.4s ease;
    box-shadow: 0 8px 32px rgba(46, 139, 87, 0.2);
    position: relative;
    overflow: hidden;
    min-height: 200px;
    justify-content: space-between;
    cursor: pointer;
  }

  .service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--primary-color);
    transform: scaleY(0);
    transition: transform 0.3s ease;
  }

  .service-card:hover::before {
    transform: scaleY(1);
  }

  .service-card:hover {
    background: linear-gradient(135deg, var(--secondary-color) 0%, #6BB6E8 100%);
    box-shadow: 0 20px 60px rgba(135, 206, 235, 0.3);
    transform: translateY(-8px);
  }

  .service-card:hover::before {
    transform: scaleY(1);
  }

  .service-info {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .service-info h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: white;
    line-height: 1.4;
    margin: 0;
  }

  .service-price {
    color: var(--accent-color);
    font-weight: 700;
    font-size: 1.375rem;
    margin: 1rem 0;
    text-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }

  .payment-info {
    padding: 60px 0;
    background: var(--light-gray);
    position: relative;
  }

  .payment-info::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
  }

  .payment-info-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-top: 3rem;
  }

  @media (max-width: 1024px) {
    .payment-info-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
  }

  .info-card {
    background: white;
    padding: 2.5rem 2rem;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 12px 48px rgba(0,0,0,0.08);
    transition: transform 0.3s ease;
    position: relative;
  }

  .info-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 4px;
    background: var(--primary-color);
    border-radius: 0 0 4px 4px;
  }

  .info-card:hover {
    transform: translateY(-8px);
  }

  .info-card .info-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: rgba(46, 139, 87, 0.15);
    color: var(--primary-color);
    font-size: 2rem;
    margin-bottom: 1.5rem;
    transition: all 0.3s ease;
    filter: none;
  }

  .info-card:nth-child(1) .info-icon {
    background: rgba(46, 139, 87, 0.15);
    color: var(--primary-color);
  }

  .info-card:nth-child(2) .info-icon {
    background: rgba(65, 105, 225, 0.15);
    color: #4169E1;
  }

  .info-card:nth-child(3) .info-icon {
    background: rgba(255, 107, 53, 0.15);
    color: #FF6B35;
  }

  .info-card:nth-child(4) .info-icon {
    background: rgba(138, 43, 226, 0.15);
    color: #8A2BE2;
  }

  .info-card:hover .info-icon {
    transform: scale(1.1);
  }

  .info-card:nth-child(1):hover .info-icon {
    background: var(--primary-color);
    color: white;
  }

  .info-card:nth-child(2):hover .info-icon {
    background: #4169E1;
    color: white;
  }

  .info-card:nth-child(3):hover .info-icon {
    background: #FF6B35;
    color: white;
  }

  .info-card:nth-child(4):hover .info-icon {
    background: #8A2BE2;
    color: white;
  }

  .info-card h3 {
    font-size: 1.375rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 1.25rem;
  }

  .info-card p {
    color: var(--text-light);
    line-height: 1.6;
    font-size: 1rem;
  }

  .insurance-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
  }

  .insurance-item {
    background: linear-gradient(135deg, var(--primary-color), #3a9d66);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    font-size: 0.875rem;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(46, 139, 87, 0.2);
  }

  .services-cta {
    padding: 100px 0;
    background: linear-gradient(135deg, var(--primary-color) 0%, #2c7a54 100%);
    color: white;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .services-cta::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>');
  }

  .services-cta .cta-content {
    position: relative;
    z-index: 2;
  }

  .testimonials-preview {
    padding: 100px 0;
    background: white;
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2.5rem;
    margin-top: 4rem;
  }

  .testimonial-card {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    padding: 2.5rem;
    border-radius: 20px;
    text-align: center;
    position: relative;
    box-shadow: 0 8px 32px rgba(0,0,0,0.06);
    transition: transform 0.3s ease;
  }

  .testimonial-card:hover {
    transform: translateY(-4px);
  }

  .testimonial-card::before {
    content: '"';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 4rem;
    color: var(--primary-color);
    opacity: 0.3;
    font-family: serif;
  }

  .testimonial-stars {
    color: var(--accent-color);
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    text-shadow: 0 2px 4px rgba(255, 215, 0, 0.3);
  }

  .testimonial-text {
    font-style: italic;
    line-height: 1.7;
    margin-bottom: 2rem;
    color: var(--text-light);
    font-size: 1.125rem;
  }

  .testimonial-author {
    font-weight: 700;
    color: var(--primary-color);
    font-size: 1rem;
    position: relative;
  }

  .testimonial-author::before {
    content: '—';
    margin-right: 0.5rem;
    opacity: 0.6;
  }

  /* Contact Page Styles */
  .contact-page {
    min-height: 100vh;
  }

  .contact-content {
    padding: 100px 0;
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: start;
    margin-top: 2rem;
  }

  .contact-info {
    background: white;
    border-radius: 24px;
    padding: 3rem;
    box-shadow: 0 20px 60px rgba(0,0,0,0.08);
    position: relative;
  }

  .contact-info::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    border-radius: 24px 24px 0 0;
  }

  .contact-info h2 {
    font-size: 2.25rem;
    color: var(--primary-color);
    margin-bottom: 2.5rem;
    font-weight: 700;
    text-align: center;
  }

  .info-section {
    margin-bottom: 3rem;
  }

  .info-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 2.5rem;
    padding: 1.5rem;
    border-radius: 16px;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    transition: transform 0.3s ease;
  }

  .info-item:hover {
    transform: translateX(8px);
  }

  .info-icon {
    font-size: 1.5rem;
    margin-right: 1.5rem;
    margin-top: 0.25rem;
    background: rgba(46, 139, 87, 0.15);
    color: var(--primary-color);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.3s ease;
  }

  .info-item:hover .info-icon {
    background: var(--primary-color);
    color: white;
    transform: scale(1.1);
  }

  .info-details h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 0.75rem;
  }

  .info-details p, .info-details a {
    color: var(--text-light);
    line-height: 1.6;
    font-size: 1rem;
  }

  .whatsapp-link {
    color: #25D366 !important;
    font-weight: 700;
    transition: color 0.3s ease;
  }

  .whatsapp-link:hover {
    color: #1db954 !important;
  }

  .hours-section {
    background: white;
    border-radius: 20px;
    padding: 2.5rem;
    box-shadow: 0 12px 48px rgba(0,0,0,0.06);
  }

  .hours-section h3 {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-bottom: 2rem;
    font-weight: 700;
    text-align: center;
  }

  .hours-list {
    display: grid;
    gap: 0.75rem;
  }

  .hours-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    transition: transform 0.2s ease;
  }

  .hours-item:hover {
    transform: scale(1.02);
  }

  .day {
    font-weight: 600;
    color: var(--text-dark);
  }

  .time {
    color: var(--primary-color);
    font-weight: 600;
  }

  .contact-form-section {
    background: white;
    padding: 3rem;
    border-radius: 24px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.08);
    position: relative;
  }

  .contact-form-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, var(--secondary-color), var(--primary-color));
    border-radius: 24px 24px 0 0;
  }

  .contact-form-section h2 {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    font-weight: 700;
    text-align: center;
  }

  .contact-form-section p {
    color: var(--text-light);
    margin-bottom: 2.5rem;
    text-align: center;
    font-size: 1.125rem;
    line-height: 1.6;
  }

  .map-section {
    padding: 100px 0;
    background: var(--light-gray);
    position: relative;
  }

  .map-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
  }

  .map-container {
    margin-top: 3rem;
  }

  .map-placeholder {
    background: white;
    border-radius: 24px;
    padding: 5rem 3rem;
    text-align: center;
    box-shadow: 0 20px 60px rgba(0,0,0,0.1);
    position: relative;
  }

  .map-placeholder::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 6px;
    background: var(--primary-color);
    border-radius: 0 0 6px 6px;
  }

  .map-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: rgba(46, 139, 87, 0.15);
    color: var(--primary-color);
    font-size: 3rem;
    margin-bottom: 2rem;
    transition: all 0.3s ease;
  }

  .map-placeholder:hover .map-icon {
    background: var(--primary-color);
    color: white;
    transform: scale(1.1);
  }

  .map-placeholder p {
    font-size: 1.25rem;
    color: var(--text-light);
    margin-bottom: 2.5rem;
    line-height: 1.7;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  .emergency-contact {
    padding: 100px 0;
    background: white;
  }

  .emergency-card {
    background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
    color: white;
    padding: 4rem 3rem;
    border-radius: 24px;
    display: flex;
    align-items: center;
    gap: 3rem;
    max-width: 900px;
    margin: 0 auto;
    box-shadow: 0 20px 60px rgba(220, 53, 69, 0.2);
    position: relative;
    overflow: hidden;
  }

  .emergency-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="emergency-pattern" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="15" cy="15" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23emergency-pattern)"/></svg>');
  }

  .emergency-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    font-size: 3rem;
    flex-shrink: 0;
    animation: pulse 2s infinite;
    z-index: 2;
    position: relative;
    transition: all 0.3s ease;
  }

  .emergency-card:hover .emergency-icon {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  .emergency-content {
    z-index: 2;
    position: relative;
  }

  .emergency-content h3 {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
  }

  .emergency-content p {
    margin-bottom: 2rem;
    line-height: 1.7;
    opacity: 0.95;
    font-size: 1.125rem;
  }

  /* Form Styles */
  .input-group {
    margin-bottom: 1.5rem;
    position: relative;
  }

  .input-label {
    display: block;
    font-weight: 600;
    color: var(--text-dark);
    font-size: 0.95rem;
    margin-bottom: 0.75rem;
    transition: all 0.3s ease;
  }

  .required {
    color: #e74c3c;
    margin-left: 0.25rem;
  }

  .input {
    width: 100%;
    padding: 1rem 1.25rem;
    font-size: 1rem;
    border: 2px solid #e1e8ed;
    border-radius: 12px;
    background: white;
    color: var(--text-dark);
    transition: all 0.3s ease;
    font-family: inherit;
    outline: none;
    
    &::placeholder {
      color: #a0a8b0;
      font-size: 0.95rem;
    }
    
    &:focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(46, 139, 87, 0.1);
      transform: translateY(-1px);
    }
    
    &:hover:not(:focus) {
      border-color: #c3d4db;
    }
  }

  .input-error {
    border-color: #e74c3c !important;
    box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1) !important;
  }

  .error-message {
    display: block;
    color: #e74c3c;
    font-size: 0.875rem;
    margin-top: 0.5rem;
    font-weight: 500;
  }

  .select {
    width: 100%;
    padding: 1rem 1.25rem;
    font-size: 1rem;
    border: 2px solid #e1e8ed;
    border-radius: 12px;
    background: white;
    color: var(--text-dark);
    transition: all 0.3s ease;
    font-family: inherit;
    outline: none;
    cursor: pointer;
    
    &:focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(46, 139, 87, 0.1);
      transform: translateY(-1px);
    }
    
    &:hover:not(:focus) {
      border-color: #c3d4db;
    }
  }

  .textarea {
    width: 100%;
    padding: 1rem 1.25rem;
    font-size: 1rem;
    border: 2px solid #e1e8ed;
    border-radius: 12px;
    background: white;
    color: var(--text-dark);
    transition: all 0.3s ease;
    font-family: inherit;
    outline: none;
    resize: vertical;
    min-height: 120px;
    
    &::placeholder {
      color: #a0a8b0;
      font-size: 0.95rem;
    }
    
    &:focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(46, 139, 87, 0.1);
      transform: translateY(-1px);
    }
    
    &:hover:not(:focus) {
      border-color: #c3d4db;
    }
  }

  /* Radio Button Styling */
  input[type="radio"] {
    width: 20px;
    height: 20px;
    border: 2px solid #e1e8ed;
    border-radius: 50%;
    background: white;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;
    
    &:checked {
      border-color: var(--primary-color);
      background: var(--primary-color);
    }
    
    &:checked::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: white;
    }
    
    &:focus {
      box-shadow: 0 0 0 3px rgba(46, 139, 87, 0.1);
    }
  }

  /* Error Alert Animation */
  @keyframes slideInAlert {
    from { 
      transform: translateX(100%); 
      opacity: 0; 
    }
    to { 
      transform: translateX(0); 
      opacity: 1; 
    }
  }

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }

  .input-error {
    animation: shake 0.5s ease-in-out;
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    .hero-title {
      font-size: 3rem;
    }

    .team-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .contact-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .emergency-card {
      gap: 2rem;
      padding: 3rem 2.5rem;
    }

    .services-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 20px;
    }

    .hero-section {
      padding: 100px 0 70px;
    }

    .hero-title {
      font-size: 2.5rem;
      line-height: 1.1;
    }

    .hero-subtitle {
      font-size: 1.125rem;
    }

    .section-title {
      font-size: 2rem;
      margin-bottom: 2.5rem;
    }

    .our-story, .team-section, .services-section, .contact-content, .map-section, .emergency-contact {
      padding: 80px 0;
    }

    .mission-vision-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .mission-card, .vision-card, .values-card {
      padding: 2rem;
    }

    .team-card-image {
      height: 250px;
    }

    .team-card-content {
      padding: 2rem 1.5rem;
    }

    .services-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .service-card {
      padding: 1.5rem;
    }

    .category-title {
      font-size: 2rem;
    }

    .contact-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .contact-info, .contact-form-section {
      padding: 2.5rem;
    }

    .info-item {
      padding: 1.25rem;
    }

    .emergency-card {
      flex-direction: column;
      text-align: center;
      gap: 2rem;
      padding: 3rem 2rem;
    }

    .emergency-icon {
      font-size: 4rem;
    }

    .cta-buttons {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .btn {
      width: 100%;
      max-width: 280px;
    }

    .testimonials-grid, .payment-info-grid, .differentials-list {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .map-placeholder {
      padding: 4rem 2.5rem;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 0 16px;
    }

    .hero-section {
      padding: 80px 0 60px;
    }

    .hero-title {
      font-size: 2rem;
    }

    .hero-subtitle {
      font-size: 1rem;
    }

    .section-title {
      font-size: 1.75rem;
      margin-bottom: 2rem;
    }

    .our-story, .team-section, .services-section, .contact-content, .map-section, .emergency-contact {
      padding: 60px 0;
    }

    .story-text p {
      font-size: 1.125rem;
    }

    .mission-card, .vision-card, .values-card {
      padding: 1.5rem;
    }

    .team-card-image {
      height: 220px;
    }

    .team-card-content {
      padding: 1.5rem;
    }

    .team-member-name {
      font-size: 1.25rem;
    }

    .service-card {
      padding: 1.25rem;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    .service-price {
      margin-left: 0;
      font-size: 1rem;
    }

    .category-title {
      font-size: 1.75rem;
      margin-bottom: 2rem;
    }

    .contact-info, .contact-form-section {
      padding: 2rem 1.5rem;
    }

    .contact-info h2, .contact-form-section h2 {
      font-size: 1.75rem;
    }

    .info-item {
      padding: 1rem;
      flex-direction: column;
      text-align: center;
      gap: 1rem;
    }

    .info-icon {
      margin-right: 0;
      margin-bottom: 0.5rem;
    }

    .hours-section {
      padding: 2rem 1.5rem;
    }

    .hours-item {
      padding: 0.75rem 1rem;
      flex-direction: column;
      text-align: center;
      gap: 0.5rem;
    }

    .emergency-card {
      padding: 2rem 1.5rem;
      gap: 1.5rem;
    }

    .emergency-content h3 {
      font-size: 1.5rem;
    }

    .emergency-content p {
      font-size: 1rem;
    }

    .map-placeholder {
      padding: 3rem 1.5rem;
    }

    .map-icon {
      font-size: 4rem;
    }

    .cta-content h2 {
      font-size: 2rem;
    }

    .cta-content p {
      font-size: 1rem;
    }

    .testimonial-card {
      padding: 2rem 1.5rem;
    }

    .testimonial-text {
      font-size: 1rem;
    }

    .info-card {
      padding: 2rem 1.5rem;
    }

    .differential-item {
      padding: 1.5rem;
      flex-direction: column;
      text-align: center;
      gap: 0.75rem;
    }
  }

  /* Accessibility and UX Improvements */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* Focus states for better accessibility */
  .btn:focus,
  .whatsapp-link:focus,
  .info-details a:focus {
    outline: 3px solid var(--accent-color);
    outline-offset: 2px;
  }

  /* Loading states */
  .loading {
    opacity: 0.7;
    pointer-events: none;
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Print styles */
  @media print {
    .hero-section::before,
    .our-story::before,
    .payment-info::before,
    .map-section::before,
    .emergency-card::before,
    .services-cta::before {
      display: none;
    }

    .emergency-card,
    .service-card,
    .team-card,
    .testimonial-card,
    .info-card {
      box-shadow: none;
      border: 1px solid #ddd;
    }
  }
`,K4=()=>{const{pathname:e}=ar();return b.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[e]),null};var t1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Mp=G.createContext&&G.createContext(t1),Sn=function(){return Sn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Sn.apply(this,arguments)},Q4=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function n1(e){return e&&e.map(function(t,n){return G.createElement(t.tag,Sn({key:n},t.attr),n1(t.child))})}function F(e){return function(t){return G.createElement(X4,Sn({attr:Sn({},e.attr)},t),n1(e.child))}}function X4(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,a=Q4(e,["attr","size","title"]),s=o||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),G.createElement("svg",Sn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:l,style:Sn(Sn({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&G.createElement("title",null,i),e.children)};return Mp!==void 0?G.createElement(Mp.Consumer,null,function(n){return t(n)}):t(t1)}function Z4(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"}}]})(e)}function J4(e){return F({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(e)}function Bt(e){return F({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"}}]})(e)}function e3(e){return F({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm144-248c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48zm176 248c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"}}]})(e)}function t3(e){return F({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"}}]})(e)}function n3(e){return F({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}function r3(e){return F({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 432c-101.69 0-184-82.29-184-184 0-101.69 82.29-184 184-184 101.69 0 184 82.29 184 184 0 101.69-82.29 184-184 184zm0-312c-70.69 0-128 57.31-128 128s57.31 128 128 128 128-57.31 128-128-57.31-128-128-128zm0 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"}}]})(e)}function yi(e){return F({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"}}]})(e)}function o3(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"}}]})(e)}function i3(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}}]})(e)}function a3(e){return F({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"}}]})(e)}function s3(e){return F({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"}}]})(e)}function Za(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"}}]})(e)}function l3(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"}}]})(e)}function c3(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M510.37 254.79l-12.08-76.26a132.493 132.493 0 0 0-37.16-72.95l-54.76-54.75c-19.73-19.72-45.18-32.7-72.71-37.05l-76.7-12.15c-27.51-4.36-55.69.11-80.52 12.76L107.32 49.6a132.25 132.25 0 0 0-57.79 57.8l-35.1 68.88a132.602 132.602 0 0 0-12.82 80.94l12.08 76.27a132.493 132.493 0 0 0 37.16 72.95l54.76 54.75a132.087 132.087 0 0 0 72.71 37.05l76.7 12.14c27.51 4.36 55.69-.11 80.52-12.75l69.12-35.21a132.302 132.302 0 0 0 57.79-57.8l35.1-68.87c12.71-24.96 17.2-53.3 12.82-80.96zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"}}]})(e)}function u3(e){return F({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z"}}]})(e)}function d3(e){return F({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"}}]})(e)}function f3(e){return F({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"}}]})(e)}function p3(e){return F({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M288 256H96v64h192v-64zm89-151L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 64c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm256 304c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16zm0-200v96c0 8.84-7.16 16-16 16H80c-8.84 0-16-7.16-16-16v-96c0-8.84 7.16-16 16-16h224c8.84 0 16 7.16 16 16z"}}]})(e)}function m3(e){return F({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"}}]})(e)}function h3(e){return F({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 492v20H0v-20c0-6.627 5.373-12 12-12h20V120c0-13.255 10.745-24 24-24h88V24c0-13.255 10.745-24 24-24h112c13.255 0 24 10.745 24 24v72h88c13.255 0 24 10.745 24 24v360h20c6.627 0 12 5.373 12 12zM308 192h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zm-168 64h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12zm104 128h-40c-6.627 0-12 5.373-12 12v84h64v-84c0-6.627-5.373-12-12-12zm64-96h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zm-116 12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40zM182 96h26v26a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V96h26a6 6 0 0 0 6-6V70a6 6 0 0 0-6-6h-26V38a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v26h-26a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6z"}}]})(e)}function $p(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"}}]})(e)}function Cd(e){return F({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"}}]})(e)}function g3(e){return F({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 0 0 0 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 0 0 576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z"}}]})(e)}function Ja(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"}}]})(e)}function v3(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"}}]})(e)}function y3(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"}}]})(e)}function x3(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 320h-96c-17.6 0-32-14.4-32-32s14.4-32 32-32h96s96-107 96-160-43-96-96-96-96 43-96 96c0 25.5 22.2 63.4 45.3 96H320c-52.9 0-96 43.1-96 96s43.1 96 96 96h96c17.6 0 32 14.4 32 32s-14.4 32-32 32H185.5c-16 24.8-33.8 47.7-47.3 64H416c52.9 0 96-43.1 96-96s-43.1-96-96-96zm0-256c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM96 256c-53 0-96 43-96 96s96 160 96 160 96-107 96-160-43-96-96-96zm0 128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"}}]})(e)}function w3(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}}]})(e)}function r1(e){return F({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"}}]})(e)}function o1(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"}}]})(e)}function i1(e){return F({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"}}]})(e)}function b3(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M447.1 112c-34.2.5-62.3 28.4-63 62.6-.5 24.3 12.5 45.6 32 56.8V344c0 57.3-50.2 104-112 104-60 0-109.2-44.1-111.9-99.2C265 333.8 320 269.2 320 192V36.6c0-11.4-8.1-21.3-19.3-23.5L237.8.5c-13-2.6-25.6 5.8-28.2 18.8L206.4 35c-2.6 13 5.8 25.6 18.8 28.2l30.7 6.1v121.4c0 52.9-42.2 96.7-95.1 97.2-53.4.5-96.9-42.7-96.9-96V69.4l30.7-6.1c13-2.6 21.4-15.2 18.8-28.2l-3.1-15.7C107.7 6.4 95.1-2 82.1.6L19.3 13C8.1 15.3 0 25.1 0 36.6V192c0 77.3 55.1 142 128.1 156.8C130.7 439.2 208.6 512 304 512c97 0 176-75.4 176-168V231.4c19.1-11.1 32-31.7 32-55.4 0-35.7-29.2-64.5-64.9-64zm.9 80c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"}}]})(e)}function xi(e){return F({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}function Ns(e){return F({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M443.98 96.25c-11.01-45.22-47.11-82.06-92.01-93.72-32.19-8.36-63 5.1-89.14 24.33-3.25 2.39-6.96 3.73-10.5 5.48l28.32 18.21c7.42 4.77 9.58 14.67 4.8 22.11-4.46 6.95-14.27 9.86-22.11 4.8L162.83 12.84c-20.7-10.85-43.38-16.4-66.81-10.31-44.9 11.67-81 48.5-92.01 93.72-10.13 41.62-.42 80.81 21.5 110.43 23.36 31.57 32.68 68.66 36.29 107.35 4.4 47.16 10.33 94.16 20.94 140.32l7.8 33.95c3.19 13.87 15.49 23.7 29.67 23.7 13.97 0 26.15-9.55 29.54-23.16l34.47-138.42c4.56-18.32 20.96-31.16 39.76-31.16s35.2 12.85 39.76 31.16l34.47 138.42c3.39 13.61 15.57 23.16 29.54 23.16 14.18 0 26.48-9.83 29.67-23.7l7.8-33.95c10.61-46.15 16.53-93.16 20.94-140.32 3.61-38.7 12.93-75.78 36.29-107.35 21.95-29.61 31.66-68.8 21.53-110.43z"}}]})(e)}function tu(e){return F({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zM104 424c0 13.3 10.7 24 24 24s24-10.7 24-24-10.7-24-24-24-24 10.7-24 24zm216-135.4v49c36.5 7.4 64 39.8 64 78.4v41.7c0 7.6-5.4 14.2-12.9 15.7l-32.2 6.4c-4.3.9-8.5-1.9-9.4-6.3l-3.1-15.7c-.9-4.3 1.9-8.6 6.3-9.4l19.3-3.9V416c0-62.8-96-65.1-96 1.9v26.7l19.3 3.9c4.3.9 7.1 5.1 6.3 9.4l-3.1 15.7c-.9 4.3-5.1 7.1-9.4 6.3l-31.2-4.2c-7.9-1.1-13.8-7.8-13.8-15.9V416c0-38.6 27.5-70.9 64-78.4v-45.2c-2.2.7-4.4 1.1-6.6 1.9-18 6.3-37.3 9.8-57.4 9.8s-39.4-3.5-57.4-9.8c-7.4-2.6-14.9-4.2-22.6-5.2v81.6c23.1 6.9 40 28.1 40 53.4 0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.3 16.9-46.5 40-53.4v-80.4C48.5 301 0 355.8 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-72-56.8-130.3-128-133.8z"}}]})(e)}function a1(e){return F({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}}]})(e)}const S3=x.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  border-radius: 6px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  position: relative;
  overflow: hidden;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${e=>e.$loading&&ht`
    cursor: wait;
    
    svg:not(.spinner) {
      opacity: 0;
    }
  `}

  ${e=>e.$size==="small"&&ht`
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  `}

  ${e=>e.$size==="medium"&&ht`
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  `}

  ${e=>e.$size==="large"&&ht`
    padding: 1rem 2rem;
    font-size: 1.125rem;
  `}

  ${e=>e.$variant==="primary"&&ht`
    background: var(--primary-color);
    color: var(--white);

    &:hover:not(:disabled) {
      background: #1e5f3f;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(46, 139, 87, 0.3);
    }

    &:active {
      transform: translateY(0);
    }
  `}

  ${e=>e.$variant==="secondary"&&ht`
    background: var(--secondary-color);
    color: var(--white);

    &:hover:not(:disabled) {
      background: #5fa8d3;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(135, 206, 235, 0.3);
    }

    &:active {
      transform: translateY(0);
    }
  `}

  ${e=>e.$variant==="outline"&&ht`
    background: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);

    &:hover:not(:disabled) {
      background: var(--primary-color);
      color: var(--white);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(46, 139, 87, 0.3);
    }

    &:active {
      transform: translateY(0);
    }
  `}

  ${e=>e.$variant==="whatsapp"&&ht`
    background: #25D366;
    color: var(--white);

    &:hover:not(:disabled) {
      background: #128C7E;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
    }

    &:active {
      transform: translateY(0);
    }
  `}
`,j3=x(o1)`
  position: absolute;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,Mt=b.memo(({children:e,variant:t="primary",size:n="medium",loading:r=!1,disabled:o=!1,onClick:i,type:a="button",as:s,to:l,href:u,target:d,...f})=>{const p=b.useCallback(y=>{if(r||o){y.preventDefault();return}i&&i(y)},[r,o,i]),h={$variant:t,$size:n,$loading:r,disabled:o||r,onClick:p,type:a,as:s,to:l,href:u,target:d,...f};return c.jsxs(S3,{...h,children:[r&&c.jsx(j3,{className:"spinner"}),t==="whatsapp"&&!r&&c.jsx(Bt,{}),e]})}),C3=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 2rem;
  text-align: center;
  background: var(--light-bg);
`,k3=x.div`
  font-size: 4rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
`,P3=x.h2`
  font-size: 2rem;
  color: var(--text-color);
  margin-bottom: 1rem;
  font-family: 'Roboto', sans-serif;
`,E3=x.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.6;
`,T3=x.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;class z3 extends b.Component{constructor(n){super(n);ft(this,"handleReload",()=>{window.location.reload()});ft(this,"handleGoHome",()=>{window.location.href="/"});this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(n){return{hasError:!0}}componentDidCatch(n,r){this.setState({error:n,errorInfo:r}),console.error("ErrorBoundary capturou um erro:",n,r)}render(){return this.state.hasError?c.jsxs(C3,{role:"alert",children:[c.jsx(k3,{children:"⚠️"}),c.jsx(P3,{children:"Oops! Algo deu errado"}),c.jsx(E3,{children:"Ocorreu um erro inesperado. Nossa equipe foi notificada e está trabalhando para resolver o problema. Tente recarregar a página ou voltar para o início."}),c.jsxs(T3,{children:[c.jsx(Mt,{variant:"primary",onClick:this.handleReload,children:"Recarregar Página"}),c.jsx(Mt,{variant:"outline",onClick:this.handleGoHome,children:"Ir para Início"})]})]}):this.props.children}}const A3=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
  background: var(--light-bg);
`,R3=x.h1`
  font-size: 8rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0;
  font-family: 'Roboto', sans-serif;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    font-size: 6rem;
  }
`,D3=x.h2`
  font-size: 2.5rem;
  color: var(--text-color);
  margin: 1rem 0;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,M3=x.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,$3=x.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }
`,N3=x.ul`
  list-style: none;
  padding: 0;
  margin: 3rem 0 0 0;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`,mo=x.li`
  a {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover {
      background: var(--primary-color);
      color: var(--white);
    }
  }
`,L3=b.memo(()=>c.jsxs(A3,{role:"main",children:[c.jsx(R3,{"aria-label":"Erro 404",children:"404"}),c.jsx(D3,{children:"Página não encontrada"}),c.jsx(M3,{children:"A página que você está procurando não existe ou foi movida para outro local. Que tal navegar para uma das nossas páginas principais?"}),c.jsxs($3,{children:[c.jsx(Mt,{as:Ie,to:"/",variant:"primary",size:"large",children:"Ir para Início"}),c.jsx(Mt,{as:Ie,to:"/agendamento",variant:"secondary",size:"large",children:"Agendar Consulta"})]}),c.jsx("nav",{"aria-label":"Navegação principal",children:c.jsxs(N3,{children:[c.jsx(mo,{children:c.jsx(Ie,{to:"/sobre",children:"Sobre Nós"})}),c.jsx(mo,{children:c.jsx(Ie,{to:"/servicos",children:"Serviços"})}),c.jsx(mo,{children:c.jsx(Ie,{to:"/galeria",children:"Galeria"})}),c.jsx(mo,{children:c.jsx(Ie,{to:"/blog",children:"Blog"})}),c.jsx(mo,{children:c.jsx(Ie,{to:"/contato",children:"Contato"})})]})})]})),I3=x.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--white);
  border-top: 3px solid var(--primary-color);
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  z-index: 10000;
  transform: translateY(${e=>e.$hidden?"100%":"0"});
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,O3=x.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`,V3=x.div`
  font-size: 2rem;
  color: var(--primary-color);
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,F3=x.div`
  flex: 1;
  color: var(--text-color);
  line-height: 1.5;

  h4 {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
    font-weight: 600;
  }

  p {
    margin: 0;
    font-size: 0.95rem;
    color: var(--text-secondary);
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`,_3=x.div`
  display: flex;
  gap: 1rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,B3=x.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    color: var(--text-color);
    background: var(--light-bg);
  }
`,Cl="cookie-consent",U3=b.memo(()=>{const[e,t]=b.useState(!1);b.useEffect(()=>{if(!localStorage.getItem(Cl)){const a=setTimeout(()=>{t(!0)},2e3);return()=>clearTimeout(a)}},[]);const n=()=>{localStorage.setItem(Cl,"accepted"),t(!1),typeof window<"u"&&window.gtag&&window.gtag("consent","update",{analytics_storage:"granted"})},r=()=>{localStorage.setItem(Cl,"declined"),t(!1),typeof window<"u"&&window.gtag&&window.gtag("consent","update",{analytics_storage:"denied"})},o=()=>{t(!1)};return e?c.jsxs(I3,{$hidden:!e,role:"dialog","aria-labelledby":"cookie-title","aria-describedby":"cookie-description",children:[c.jsx(B3,{onClick:o,"aria-label":"Fechar banner de cookies",children:c.jsx(xi,{})}),c.jsxs(O3,{children:[c.jsx(V3,{children:c.jsx(c3,{})}),c.jsxs(F3,{children:[c.jsx("h4",{id:"cookie-title",children:"Cookies e Privacidade"}),c.jsxs("p",{id:"cookie-description",children:["Utilizamos cookies para melhorar sua experiência e analisar nosso tráfego. Ao continuar navegando, você concorda com nossa"," ",c.jsx("a",{href:"/politica-privacidade",target:"_blank",rel:"noopener noreferrer",children:"Política de Privacidade"}),"."]})]}),c.jsxs(_3,{children:[c.jsx(Mt,{variant:"primary",size:"small",onClick:n,"aria-describedby":"cookie-description",children:"Aceitar"}),c.jsx(Mt,{variant:"outline",size:"small",onClick:r,"aria-describedby":"cookie-description",children:"Recusar"})]})]})]}):null}),H3=x.header`
  background: var(--white);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`,W3=x.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,G3=x(Ie)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--primary-color);
  text-decoration: none;

  svg {
    font-size: 2rem;
  }
`,q3=x.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`,Y3=x(Ie)`
  color: var(--text-dark);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;

  ${e=>e.$active&&`
    color: var(--primary-color);
    background: rgba(46, 139, 87, 0.1);
  `}

  &:hover {
    color: var(--primary-color);
    background: rgba(46, 139, 87, 0.1);
  }
`,K3=x.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;x.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-dark);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.85rem;
  white-space: nowrap;

  &:hover {
    color: var(--primary-color);
  }
`;const Q3=x.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #25D366;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: #128C7E;
    transform: translateY(-2px);
  }
`,X3=x.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--primary-color);
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`,Z3=x.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--white);
  border-top: 1px solid #eee;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  ${e=>e.$isOpen&&`
    @media (max-width: 768px) {
      display: block;
    }
  `}
`,J3=x(Ie)`
  display: block;
  color: var(--text-dark);
  text-decoration: none;
  padding: 1rem 2rem;
  border-bottom: 1px solid #eee;
  font-weight: 500;

  ${e=>e.$active&&`
    color: var(--primary-color);
    background: rgba(46, 139, 87, 0.1);
  `}

  &:hover {
    color: var(--primary-color);
    background: rgba(46, 139, 87, 0.1);
  }
`;x.div`
  padding: 1rem 2rem;
  border-bottom: 1px solid #eee;
`;x.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-dark);
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-weight: 500;

  &:hover {
    color: var(--primary-color);
  }
`;const ew=x.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: #25D366;
  color: white;
  padding: 1rem;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    background: #128C7E;
  }
`,tw=()=>{const[e,t]=b.useState(!1),n=ar(),r=[{path:"/",label:"Início"},{path:"/sobre",label:"Sobre"},{path:"/servicos",label:"Serviços"},{path:"/agendamento",label:"Agendamento"},{path:"/galeria",label:"Galeria"},{path:"/blog",label:"Blog"},{path:"/contato",label:"Contato"}],o=()=>{t(!e)},i=()=>{t(!1)};return c.jsxs(H3,{children:[c.jsxs(W3,{children:[c.jsxs(G3,{to:"/",children:[c.jsx(Ns,{}),"Sorriso Perfeito"]}),c.jsx(q3,{children:r.map(a=>c.jsx(Y3,{to:a.path,$active:n.pathname===a.path,children:a.label},a.path))}),c.jsx(K3,{children:c.jsxs(Q3,{href:"https://wa.me/555591679300",target:"_blank",children:[c.jsx(Bt,{}),"WhatsApp"]})}),c.jsx(X3,{onClick:o,children:e?c.jsx(xi,{}):c.jsx(n3,{})})]}),c.jsxs(Z3,{$isOpen:e,children:[r.map(a=>c.jsx(J3,{to:a.path,$active:n.pathname===a.path,onClick:i,children:a.label},a.path)),c.jsxs(ew,{href:"https://wa.me/555591679300",target:"_blank",children:[c.jsx(Bt,{}),"WhatsApp Contato"]})]})]})},nw=x.footer`
  background: var(--primary-color);
  color: var(--white);
  padding: 3rem 0 1rem 0;
`,rw=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`,kl=x.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,ow=x.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 1rem;

  svg {
    font-size: 2rem;
  }
`,Pl=x.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--accent-color);
`,El=x.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  line-height: 1.5;

  svg {
    margin-top: 0.2rem;
    color: var(--accent-color);
    flex-shrink: 0;
  }
`,iw=x.a`
  color: var(--white);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-color);
  }
`,aw=x.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,sw=x.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,Np=x.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,lw=x(Ie)`
  color: var(--white);
  text-decoration: none;
  padding: 0.25rem 0;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-color);
  }
`,cw=x.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,Lp=x.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  color: var(--white);
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: var(--accent-color);
    color: var(--primary-color);
    transform: translateY(-2px);
  }
`,uw=x.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 2rem;
  padding-top: 1rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
`,dw=()=>{const e=new Date().getFullYear(),t=[{path:"/",label:"Início"},{path:"/sobre",label:"Sobre Nós"},{path:"/servicos",label:"Serviços"},{path:"/agendamento",label:"Agendamento"},{path:"/galeria",label:"Galeria"},{path:"/blog",label:"Blog"},{path:"/contato",label:"Contato"}];return c.jsxs(nw,{children:[c.jsxs(rw,{children:[c.jsxs(kl,{children:[c.jsxs(ow,{children:[c.jsx(Ns,{}),"Sorriso Perfeito"]}),c.jsx("p",{children:"Cuidando do seu sorriso com excelência, tecnologia e carinho. Sua saúde bucal é nossa prioridade."}),c.jsxs(cw,{children:[c.jsx(Lp,{href:"https://www.instagram.com/",target:"_blank",rel:"noopener noreferrer",children:c.jsx(J4,{})}),c.jsx(Lp,{href:"https://www.facebook.com/",target:"_blank",rel:"noopener noreferrer",children:c.jsx(Z4,{})})]})]}),c.jsxs(kl,{children:[c.jsx(Pl,{children:"Contato"}),c.jsxs(El,{children:[c.jsx(Cd,{}),c.jsxs("div",{children:["Av. Brigadeiro Faria Lima, 3477",c.jsx("br",{}),"Itaim Bibi, São Paulo - SP",c.jsx("br",{}),"CEP: 04538-133"]})]}),c.jsxs(El,{children:[c.jsx(Ja,{}),c.jsx(iw,{href:"tel:+555591679300",children:"(55) 55 9167-9300"})]})]}),c.jsx(kl,{children:c.jsxs(sw,{children:[c.jsxs(Np,{children:[c.jsx(Pl,{children:"Horários"}),c.jsxs(El,{children:[c.jsx(Za,{}),c.jsxs("div",{children:[c.jsx("strong",{children:"Segunda à Sexta:"}),c.jsx("br",{}),"08:00 - 18:00",c.jsx("br",{}),c.jsx("br",{}),c.jsx("strong",{children:"Sábado:"}),c.jsx("br",{}),"08:00 - 12:00",c.jsx("br",{}),c.jsx("br",{}),c.jsx("strong",{children:"Domingo:"}),c.jsx("br",{}),"Fechado"]})]})]}),c.jsxs(Np,{children:[c.jsx(Pl,{children:"Links Rápidos"}),c.jsx(aw,{children:t.map(n=>c.jsx(lw,{to:n.path,children:n.label},n.path))})]})]})})]}),c.jsx(uw,{children:c.jsxs("p",{children:["© ",e," Clínica Sorriso Perfeito. Todos os direitos reservados."]})})]})},fw=x.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,pw=x.main`
  flex: 1;
  padding-top: 0;
`,Dn=({children:e})=>c.jsxs(fw,{children:[c.jsx(tw,{}),c.jsx(pw,{children:e}),c.jsx(dw,{})]}),s1=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Ls=b.createContext({}),Is=b.createContext(null),Os=typeof document<"u",kd=Os?b.useLayoutEffect:b.useEffect,l1=b.createContext({strict:!1}),Pd=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),mw="framerAppearId",c1="data-"+Pd(mw);function hw(e,t,n,r){const{visualElement:o}=b.useContext(Ls),i=b.useContext(l1),a=b.useContext(Is),s=b.useContext(s1).reducedMotion,l=b.useRef();r=r||i.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:o,props:n,presenceContext:a,blockInitialAnimation:a?a.initial===!1:!1,reducedMotionConfig:s}));const u=l.current;b.useInsertionEffect(()=>{u&&u.update(n,a)});const d=b.useRef(!!(n[c1]&&!window.HandoffComplete));return kd(()=>{u&&(u.render(),d.current&&u.animationState&&u.animationState.animateChanges())}),b.useEffect(()=>{u&&(u.updateFeatures(),!d.current&&u.animationState&&u.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))}),u}function kr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function gw(e,t,n){return b.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):kr(n)&&(n.current=r))},[t])}function li(e){return typeof e=="string"||Array.isArray(e)}function Vs(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Ed=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Td=["initial",...Ed];function Fs(e){return Vs(e.animate)||Td.some(t=>li(e[t]))}function u1(e){return!!(Fs(e)||e.variants)}function vw(e,t){if(Fs(e)){const{initial:n,animate:r}=e;return{initial:n===!1||li(n)?n:void 0,animate:li(r)?r:void 0}}return e.inherit!==!1?t:{}}function yw(e){const{initial:t,animate:n}=vw(e,b.useContext(Ls));return b.useMemo(()=>({initial:t,animate:n}),[Ip(t),Ip(n)])}function Ip(e){return Array.isArray(e)?e.join(" "):e}const Op={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ci={};for(const e in Op)ci[e]={isEnabled:t=>Op[e].some(n=>!!t[n])};function xw(e){for(const t in e)ci[t]={...ci[t],...e[t]}}const zd=b.createContext({}),d1=b.createContext({}),ww=Symbol.for("motionComponentSymbol");function bw({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:o}){e&&xw(e);function i(s,l){let u;const d={...b.useContext(s1),...s,layoutId:Sw(s)},{isStatic:f}=d,p=yw(s),h=r(s,f);if(!f&&Os){p.visualElement=hw(o,h,d,t);const y=b.useContext(d1),w=b.useContext(l1).strict;p.visualElement&&(u=p.visualElement.loadFeatures(d,w,e,y))}return b.createElement(Ls.Provider,{value:p},u&&p.visualElement?b.createElement(u,{visualElement:p.visualElement,...d}):null,n(o,s,gw(h,p.visualElement,l),h,f,p.visualElement))}const a=b.forwardRef(i);return a[ww]=o,a}function Sw({layoutId:e}){const t=b.useContext(zd).id;return t&&e!==void 0?t+"-"+e:e}function jw(e){function t(r,o={}){return bw(e(r,o))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,o)=>(n.has(o)||n.set(o,t(o)),n.get(o))})}const Cw=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ad(e){return typeof e!="string"||e.includes("-")?!1:!!(Cw.indexOf(e)>-1||/[A-Z]/.test(e))}const es={};function kw(e){Object.assign(es,e)}const wi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],sr=new Set(wi);function f1(e,{layout:t,layoutId:n}){return sr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!es[e]||e==="opacity")}const Ue=e=>!!(e&&e.getVelocity),Pw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Ew=wi.length;function Tw(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,o){let i="";for(let a=0;a<Ew;a++){const s=wi[a];if(e[s]!==void 0){const l=Pw[s]||s;i+=`${l}(${e[s]}) `}}return t&&!e.z&&(i+="translateZ(0)"),i=i.trim(),o?i=o(e,r?"":i):n&&r&&(i="none"),i}const p1=e=>t=>typeof t=="string"&&t.startsWith(e),m1=p1("--"),nu=p1("var(--"),zw=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,Aw=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Pn=(e,t,n)=>Math.min(Math.max(n,e),t),lr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Oo={...lr,transform:e=>Pn(0,1,e)},Hi={...lr,default:1},Vo=e=>Math.round(e*1e5)/1e5,_s=/(-)?([\d]*\.?[\d])+/g,h1=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Rw=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function bi(e){return typeof e=="string"}const Si=e=>({test:t=>bi(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),tn=Si("deg"),Dt=Si("%"),L=Si("px"),Dw=Si("vh"),Mw=Si("vw"),Vp={...Dt,parse:e=>Dt.parse(e)/100,transform:e=>Dt.transform(e*100)},Fp={...lr,transform:Math.round},g1={borderWidth:L,borderTopWidth:L,borderRightWidth:L,borderBottomWidth:L,borderLeftWidth:L,borderRadius:L,radius:L,borderTopLeftRadius:L,borderTopRightRadius:L,borderBottomRightRadius:L,borderBottomLeftRadius:L,width:L,maxWidth:L,height:L,maxHeight:L,size:L,top:L,right:L,bottom:L,left:L,padding:L,paddingTop:L,paddingRight:L,paddingBottom:L,paddingLeft:L,margin:L,marginTop:L,marginRight:L,marginBottom:L,marginLeft:L,rotate:tn,rotateX:tn,rotateY:tn,rotateZ:tn,scale:Hi,scaleX:Hi,scaleY:Hi,scaleZ:Hi,skew:tn,skewX:tn,skewY:tn,distance:L,translateX:L,translateY:L,translateZ:L,x:L,y:L,z:L,perspective:L,transformPerspective:L,opacity:Oo,originX:Vp,originY:Vp,originZ:L,zIndex:Fp,fillOpacity:Oo,strokeOpacity:Oo,numOctaves:Fp};function Rd(e,t,n,r){const{style:o,vars:i,transform:a,transformOrigin:s}=e;let l=!1,u=!1,d=!0;for(const f in t){const p=t[f];if(m1(f)){i[f]=p;continue}const h=g1[f],y=Aw(p,h);if(sr.has(f)){if(l=!0,a[f]=y,!d)continue;p!==(h.default||0)&&(d=!1)}else f.startsWith("origin")?(u=!0,s[f]=y):o[f]=y}if(t.transform||(l||r?o.transform=Tw(e.transform,n,d,r):o.transform&&(o.transform="none")),u){const{originX:f="50%",originY:p="50%",originZ:h=0}=s;o.transformOrigin=`${f} ${p} ${h}`}}const Dd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function v1(e,t,n){for(const r in t)!Ue(t[r])&&!f1(r,n)&&(e[r]=t[r])}function $w({transformTemplate:e},t,n){return b.useMemo(()=>{const r=Dd();return Rd(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function Nw(e,t,n){const r=e.style||{},o={};return v1(o,r,e),Object.assign(o,$w(e,t,n)),e.transformValues?e.transformValues(o):o}function Lw(e,t,n){const r={},o=Nw(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=o,r}const Iw=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ts(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Iw.has(e)}let y1=e=>!ts(e);function Ow(e){e&&(y1=t=>t.startsWith("on")?!ts(t):e(t))}try{Ow(require("@emotion/is-prop-valid").default)}catch{}function Vw(e,t,n){const r={};for(const o in e)o==="values"&&typeof e.values=="object"||(y1(o)||n===!0&&ts(o)||!t&&!ts(o)||e.draggable&&o.startsWith("onDrag"))&&(r[o]=e[o]);return r}function _p(e,t,n){return typeof e=="string"?e:L.transform(t+n*e)}function Fw(e,t,n){const r=_p(t,e.x,e.width),o=_p(n,e.y,e.height);return`${r} ${o}`}const _w={offset:"stroke-dashoffset",array:"stroke-dasharray"},Bw={offset:"strokeDashoffset",array:"strokeDasharray"};function Uw(e,t,n=1,r=0,o=!0){e.pathLength=1;const i=o?_w:Bw;e[i.offset]=L.transform(-r);const a=L.transform(t),s=L.transform(n);e[i.array]=`${a} ${s}`}function Md(e,{attrX:t,attrY:n,attrScale:r,originX:o,originY:i,pathLength:a,pathSpacing:s=1,pathOffset:l=0,...u},d,f,p){if(Rd(e,u,d,p),f){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:h,style:y,dimensions:w}=e;h.transform&&(w&&(y.transform=h.transform),delete h.transform),w&&(o!==void 0||i!==void 0||y.transform)&&(y.transformOrigin=Fw(w,o!==void 0?o:.5,i!==void 0?i:.5)),t!==void 0&&(h.x=t),n!==void 0&&(h.y=n),r!==void 0&&(h.scale=r),a!==void 0&&Uw(h,a,s,l,!1)}const x1=()=>({...Dd(),attrs:{}}),$d=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Hw(e,t,n,r){const o=b.useMemo(()=>{const i=x1();return Md(i,t,{enableHardwareAcceleration:!1},$d(r),e.transformTemplate),{...i.attrs,style:{...i.style}}},[t]);if(e.style){const i={};v1(i,e.style,e),o.style={...i,...o.style}}return o}function Ww(e=!1){return(n,r,o,{latestValues:i},a)=>{const l=(Ad(n)?Hw:Lw)(r,i,a,n),d={...Vw(r,typeof n=="string",e),...l,ref:o},{children:f}=r,p=b.useMemo(()=>Ue(f)?f.get():f,[f]);return b.createElement(n,{...d,children:p})}}function w1(e,{style:t,vars:n},r,o){Object.assign(e.style,t,o&&o.getProjectionStyles(r));for(const i in n)e.style.setProperty(i,n[i])}const b1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function S1(e,t,n,r){w1(e,t,void 0,r);for(const o in t.attrs)e.setAttribute(b1.has(o)?o:Pd(o),t.attrs[o])}function Nd(e,t){const{style:n}=e,r={};for(const o in n)(Ue(n[o])||t.style&&Ue(t.style[o])||f1(o,e))&&(r[o]=n[o]);return r}function j1(e,t){const n=Nd(e,t);for(const r in e)if(Ue(e[r])||Ue(t[r])){const o=wi.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[o]=e[r]}return n}function Ld(e,t,n,r={},o={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),t}function C1(e){const t=b.useRef(null);return t.current===null&&(t.current=e()),t.current}const ns=e=>Array.isArray(e),Gw=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),qw=e=>ns(e)?e[e.length-1]||0:e;function wa(e){const t=Ue(e)?e.get():e;return Gw(t)?t.toValue():t}function Yw({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,o,i){const a={latestValues:Kw(r,o,i,e),renderState:t()};return n&&(a.mount=s=>n(r,s,a)),a}const k1=e=>(t,n)=>{const r=b.useContext(Ls),o=b.useContext(Is),i=()=>Yw(e,t,r,o);return n?i():C1(i)};function Kw(e,t,n,r){const o={},i=r(e,{});for(const p in i)o[p]=wa(i[p]);let{initial:a,animate:s}=e;const l=Fs(e),u=u1(e);t&&u&&!l&&e.inherit!==!1&&(a===void 0&&(a=t.initial),s===void 0&&(s=t.animate));let d=n?n.initial===!1:!1;d=d||a===!1;const f=d?s:a;return f&&typeof f!="boolean"&&!Vs(f)&&(Array.isArray(f)?f:[f]).forEach(h=>{const y=Ld(e,h);if(!y)return;const{transitionEnd:w,transition:j,...v}=y;for(const m in v){let g=v[m];if(Array.isArray(g)){const S=d?g.length-1:0;g=g[S]}g!==null&&(o[m]=g)}for(const m in w)o[m]=w[m]}),o}const se=e=>e;class Bp{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function Qw(e){let t=new Bp,n=new Bp,r=0,o=!1,i=!1;const a=new WeakSet,s={schedule:(l,u=!1,d=!1)=>{const f=d&&o,p=f?t:n;return u&&a.add(l),p.add(l)&&f&&o&&(r=t.order.length),l},cancel:l=>{n.remove(l),a.delete(l)},process:l=>{if(o){i=!0;return}if(o=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let u=0;u<r;u++){const d=t.order[u];d(l),a.has(d)&&(s.schedule(d),e())}o=!1,i&&(i=!1,s.process(l))}};return s}const Wi=["prepare","read","update","preRender","render","postRender"],Xw=40;function Zw(e,t){let n=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},i=Wi.reduce((f,p)=>(f[p]=Qw(()=>n=!0),f),{}),a=f=>i[f].process(o),s=()=>{const f=performance.now();n=!1,o.delta=r?1e3/60:Math.max(Math.min(f-o.timestamp,Xw),1),o.timestamp=f,o.isProcessing=!0,Wi.forEach(a),o.isProcessing=!1,n&&t&&(r=!1,e(s))},l=()=>{n=!0,r=!0,o.isProcessing||e(s)};return{schedule:Wi.reduce((f,p)=>{const h=i[p];return f[p]=(y,w=!1,j=!1)=>(n||l(),h.schedule(y,w,j)),f},{}),cancel:f=>Wi.forEach(p=>i[p].cancel(f)),state:o,steps:i}}const{schedule:Y,cancel:Kt,state:Ee,steps:Tl}=Zw(typeof requestAnimationFrame<"u"?requestAnimationFrame:se,!0),Jw={useVisualState:k1({scrapeMotionValuesFromProps:j1,createRenderState:x1,onMount:(e,t,{renderState:n,latestValues:r})=>{Y.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),Y.render(()=>{Md(n,r,{enableHardwareAcceleration:!1},$d(t.tagName),e.transformTemplate),S1(t,n)})}})},e6={useVisualState:k1({scrapeMotionValuesFromProps:Nd,createRenderState:Dd})};function t6(e,{forwardMotionProps:t=!1},n,r){return{...Ad(e)?Jw:e6,preloadedFeatures:n,useRender:Ww(t),createVisualElement:r,Component:e}}function Ft(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const P1=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Bs(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const n6=e=>t=>P1(t)&&e(t,Bs(t));function Ut(e,t,n,r){return Ft(e,t,n6(n),r)}const r6=(e,t)=>n=>t(e(n)),jn=(...e)=>e.reduce(r6);function E1(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const Up=E1("dragHorizontal"),Hp=E1("dragVertical");function T1(e){let t=!1;if(e==="y")t=Hp();else if(e==="x")t=Up();else{const n=Up(),r=Hp();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function z1(){const e=T1(!0);return e?(e(),!1):!0}class Mn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function Wp(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),o=(i,a)=>{if(i.pointerType==="touch"||z1())return;const s=e.getProps();e.animationState&&s.whileHover&&e.animationState.setActive("whileHover",t),s[r]&&Y.update(()=>s[r](i,a))};return Ut(e.current,n,o,{passive:!e.getProps()[r]})}class o6 extends Mn{mount(){this.unmount=jn(Wp(this.node,!0),Wp(this.node,!1))}unmount(){}}class i6 extends Mn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=jn(Ft(this.node.current,"focus",()=>this.onFocus()),Ft(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const A1=(e,t)=>t?e===t?!0:A1(e,t.parentElement):!1;function zl(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Bs(n))}class a6 extends Mn{constructor(){super(...arguments),this.removeStartListeners=se,this.removeEndListeners=se,this.removeAccessibleListeners=se,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),i=Ut(window,"pointerup",(s,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:d,globalTapTarget:f}=this.node.getProps();Y.update(()=>{!f&&!A1(this.node.current,s.target)?d&&d(s,l):u&&u(s,l)})},{passive:!(r.onTap||r.onPointerUp)}),a=Ut(window,"pointercancel",(s,l)=>this.cancelPress(s,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=jn(i,a),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=i=>{if(i.key!=="Enter"||this.isPressing)return;const a=s=>{s.key!=="Enter"||!this.checkPressEnd()||zl("up",(l,u)=>{const{onTap:d}=this.node.getProps();d&&Y.update(()=>d(l,u))})};this.removeEndListeners(),this.removeEndListeners=Ft(this.node.current,"keyup",a),zl("down",(s,l)=>{this.startPress(s,l)})},n=Ft(this.node.current,"keydown",t),r=()=>{this.isPressing&&zl("cancel",(i,a)=>this.cancelPress(i,a))},o=Ft(this.node.current,"blur",r);this.removeAccessibleListeners=jn(n,o)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:o}=this.node.getProps();o&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&Y.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!z1()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&Y.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=Ut(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=Ft(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=jn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const ru=new WeakMap,Al=new WeakMap,s6=e=>{const t=ru.get(e.target);t&&t(e)},l6=e=>{e.forEach(s6)};function c6({root:e,...t}){const n=e||document;Al.has(n)||Al.set(n,{});const r=Al.get(n),o=JSON.stringify(t);return r[o]||(r[o]=new IntersectionObserver(l6,{root:e,...t})),r[o]}function u6(e,t,n){const r=c6(t);return ru.set(e,n),r.observe(e),()=>{ru.delete(e),r.unobserve(e)}}const d6={some:0,all:1};class f6 extends Mn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:o="some",once:i}=t,a={root:n?n.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:d6[o]},s=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,i&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=u?d:f;p&&p(l)};return u6(this.node.current,a,s)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(p6(t,n))&&this.startObserver()}unmount(){}}function p6({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const m6={inView:{Feature:f6},tap:{Feature:a6},focus:{Feature:i6},hover:{Feature:o6}};function R1(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function h6(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function g6(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function Us(e,t,n){const r=e.getProps();return Ld(r,t,n!==void 0?n:r.custom,h6(e),g6(e))}let Id=se;const Xn=e=>e*1e3,Ht=e=>e/1e3,v6={current:!1},D1=e=>Array.isArray(e)&&typeof e[0]=="number";function M1(e){return!!(!e||typeof e=="string"&&$1[e]||D1(e)||Array.isArray(e)&&e.every(M1))}const Po=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,$1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Po([0,.65,.55,1]),circOut:Po([.55,0,1,.45]),backIn:Po([.31,.01,.66,-.59]),backOut:Po([.33,1.53,.69,.99])};function N1(e){if(e)return D1(e)?Po(e):Array.isArray(e)?e.map(N1):$1[e]}function y6(e,t,n,{delay:r=0,duration:o,repeat:i=0,repeatType:a="loop",ease:s,times:l}={}){const u={[t]:n};l&&(u.offset=l);const d=N1(s);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:o,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:i+1,direction:a==="reverse"?"alternate":"normal"})}function x6(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const L1=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,w6=1e-7,b6=12;function S6(e,t,n,r,o){let i,a,s=0;do a=t+(n-t)/2,i=L1(a,r,o)-e,i>0?n=a:t=a;while(Math.abs(i)>w6&&++s<b6);return a}function ji(e,t,n,r){if(e===t&&n===r)return se;const o=i=>S6(i,0,1,e,n);return i=>i===0||i===1?i:L1(o(i),t,r)}const j6=ji(.42,0,1,1),C6=ji(0,0,.58,1),I1=ji(.42,0,.58,1),k6=e=>Array.isArray(e)&&typeof e[0]!="number",O1=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,V1=e=>t=>1-e(1-t),Od=e=>1-Math.sin(Math.acos(e)),F1=V1(Od),P6=O1(Od),_1=ji(.33,1.53,.69,.99),Vd=V1(_1),E6=O1(Vd),T6=e=>(e*=2)<1?.5*Vd(e):.5*(2-Math.pow(2,-10*(e-1))),z6={linear:se,easeIn:j6,easeInOut:I1,easeOut:C6,circIn:Od,circInOut:P6,circOut:F1,backIn:Vd,backInOut:E6,backOut:_1,anticipate:T6},Gp=e=>{if(Array.isArray(e)){Id(e.length===4);const[t,n,r,o]=e;return ji(t,n,r,o)}else if(typeof e=="string")return z6[e];return e},Fd=(e,t)=>n=>!!(bi(n)&&Rw.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),B1=(e,t,n)=>r=>{if(!bi(r))return r;const[o,i,a,s]=r.match(_s);return{[e]:parseFloat(o),[t]:parseFloat(i),[n]:parseFloat(a),alpha:s!==void 0?parseFloat(s):1}},A6=e=>Pn(0,255,e),Rl={...lr,transform:e=>Math.round(A6(e))},Gn={test:Fd("rgb","red"),parse:B1("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Rl.transform(e)+", "+Rl.transform(t)+", "+Rl.transform(n)+", "+Vo(Oo.transform(r))+")"};function R6(e){let t="",n="",r="",o="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),o=e.substring(4,5),t+=t,n+=n,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const ou={test:Fd("#"),parse:R6,transform:Gn.transform},Pr={test:Fd("hsl","hue"),parse:B1("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Dt.transform(Vo(t))+", "+Dt.transform(Vo(n))+", "+Vo(Oo.transform(r))+")"},Re={test:e=>Gn.test(e)||ou.test(e)||Pr.test(e),parse:e=>Gn.test(e)?Gn.parse(e):Pr.test(e)?Pr.parse(e):ou.parse(e),transform:e=>bi(e)?e:e.hasOwnProperty("red")?Gn.transform(e):Pr.transform(e)},te=(e,t,n)=>-n*e+n*t+e;function Dl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function D6({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let o=0,i=0,a=0;if(!t)o=i=a=n;else{const s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;o=Dl(l,s,e+1/3),i=Dl(l,s,e),a=Dl(l,s,e-1/3)}return{red:Math.round(o*255),green:Math.round(i*255),blue:Math.round(a*255),alpha:r}}const Ml=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},M6=[ou,Gn,Pr],$6=e=>M6.find(t=>t.test(e));function qp(e){const t=$6(e);let n=t.parse(e);return t===Pr&&(n=D6(n)),n}const U1=(e,t)=>{const n=qp(e),r=qp(t),o={...n};return i=>(o.red=Ml(n.red,r.red,i),o.green=Ml(n.green,r.green,i),o.blue=Ml(n.blue,r.blue,i),o.alpha=te(n.alpha,r.alpha,i),Gn.transform(o))};function N6(e){var t,n;return isNaN(e)&&bi(e)&&(((t=e.match(_s))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(h1))===null||n===void 0?void 0:n.length)||0)>0}const H1={regex:zw,countKey:"Vars",token:"${v}",parse:se},W1={regex:h1,countKey:"Colors",token:"${c}",parse:Re.parse},G1={regex:_s,countKey:"Numbers",token:"${n}",parse:lr.parse};function $l(e,{regex:t,countKey:n,token:r,parse:o}){const i=e.tokenised.match(t);i&&(e["num"+n]=i.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...i.map(o)))}function rs(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&$l(n,H1),$l(n,W1),$l(n,G1),n}function q1(e){return rs(e).values}function Y1(e){const{values:t,numColors:n,numVars:r,tokenised:o}=rs(e),i=t.length;return a=>{let s=o;for(let l=0;l<i;l++)l<r?s=s.replace(H1.token,a[l]):l<r+n?s=s.replace(W1.token,Re.transform(a[l])):s=s.replace(G1.token,Vo(a[l]));return s}}const L6=e=>typeof e=="number"?0:e;function I6(e){const t=q1(e);return Y1(e)(t.map(L6))}const En={test:N6,parse:q1,createTransformer:Y1,getAnimatableNone:I6},K1=(e,t)=>n=>`${n>0?t:e}`;function Q1(e,t){return typeof e=="number"?n=>te(e,t,n):Re.test(e)?U1(e,t):e.startsWith("var(")?K1(e,t):Z1(e,t)}const X1=(e,t)=>{const n=[...e],r=n.length,o=e.map((i,a)=>Q1(i,t[a]));return i=>{for(let a=0;a<r;a++)n[a]=o[a](i);return n}},O6=(e,t)=>{const n={...e,...t},r={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(r[o]=Q1(e[o],t[o]));return o=>{for(const i in r)n[i]=r[i](o);return n}},Z1=(e,t)=>{const n=En.createTransformer(t),r=rs(e),o=rs(t);return r.numVars===o.numVars&&r.numColors===o.numColors&&r.numNumbers>=o.numNumbers?jn(X1(r.values,o.values),n):K1(e,t)},ui=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Yp=(e,t)=>n=>te(e,t,n);function V6(e){return typeof e=="number"?Yp:typeof e=="string"?Re.test(e)?U1:Z1:Array.isArray(e)?X1:typeof e=="object"?O6:Yp}function F6(e,t,n){const r=[],o=n||V6(e[0]),i=e.length-1;for(let a=0;a<i;a++){let s=o(e[a],e[a+1]);if(t){const l=Array.isArray(t)?t[a]||se:t;s=jn(l,s)}r.push(s)}return r}function J1(e,t,{clamp:n=!0,ease:r,mixer:o}={}){const i=e.length;if(Id(i===t.length),i===1)return()=>t[0];e[0]>e[i-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=F6(t,r,o),s=a.length,l=u=>{let d=0;if(s>1)for(;d<e.length-2&&!(u<e[d+1]);d++);const f=ui(e[d],e[d+1],u);return a[d](f)};return n?u=>l(Pn(e[0],e[i-1],u)):l}function _6(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const o=ui(0,t,r);e.push(te(n,1,o))}}function B6(e){const t=[0];return _6(t,e.length-1),t}function U6(e,t){return e.map(n=>n*t)}function H6(e,t){return e.map(()=>t||I1).splice(0,e.length-1)}function os({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const o=k6(r)?r.map(Gp):Gp(r),i={done:!1,value:t[0]},a=U6(n&&n.length===t.length?n:B6(t),e),s=J1(a,t,{ease:Array.isArray(o)?o:H6(t,o)});return{calculatedDuration:e,next:l=>(i.value=s(l),i.done=l>=e,i)}}function ev(e,t){return t?e*(1e3/t):0}const W6=5;function tv(e,t,n){const r=Math.max(t-W6,0);return ev(n-e(r),t-r)}const Nl=.001,G6=.01,q6=10,Y6=.05,K6=1;function Q6({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let o,i,a=1-t;a=Pn(Y6,K6,a),e=Pn(G6,q6,Ht(e)),a<1?(o=u=>{const d=u*a,f=d*e,p=d-n,h=iu(u,a),y=Math.exp(-f);return Nl-p/h*y},i=u=>{const f=u*a*e,p=f*n+n,h=Math.pow(a,2)*Math.pow(u,2)*e,y=Math.exp(-f),w=iu(Math.pow(u,2),a);return(-o(u)+Nl>0?-1:1)*((p-h)*y)/w}):(o=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-Nl+d*f},i=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const s=5/e,l=Z6(o,i,s);if(e=Xn(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:a*2*Math.sqrt(r*u),duration:e}}}const X6=12;function Z6(e,t,n){let r=n;for(let o=1;o<X6;o++)r=r-e(r)/t(r);return r}function iu(e,t){return e*Math.sqrt(1-t*t)}const J6=["duration","bounce"],eb=["stiffness","damping","mass"];function Kp(e,t){return t.some(n=>e[n]!==void 0)}function tb(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Kp(e,eb)&&Kp(e,J6)){const n=Q6(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function nv({keyframes:e,restDelta:t,restSpeed:n,...r}){const o=e[0],i=e[e.length-1],a={done:!1,value:o},{stiffness:s,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=tb({...r,velocity:-Ht(r.velocity||0)}),h=f||0,y=l/(2*Math.sqrt(s*u)),w=i-o,j=Ht(Math.sqrt(s/u)),v=Math.abs(w)<5;n||(n=v?.01:2),t||(t=v?.005:.5);let m;if(y<1){const g=iu(j,y);m=S=>{const P=Math.exp(-y*j*S);return i-P*((h+y*j*w)/g*Math.sin(g*S)+w*Math.cos(g*S))}}else if(y===1)m=g=>i-Math.exp(-j*g)*(w+(h+j*w)*g);else{const g=j*Math.sqrt(y*y-1);m=S=>{const P=Math.exp(-y*j*S),k=Math.min(g*S,300);return i-P*((h+y*j*w)*Math.sinh(k)+g*w*Math.cosh(k))/g}}return{calculatedDuration:p&&d||null,next:g=>{const S=m(g);if(p)a.done=g>=d;else{let P=h;g!==0&&(y<1?P=tv(m,g,S):P=0);const k=Math.abs(P)<=n,C=Math.abs(i-S)<=t;a.done=k&&C}return a.value=a.done?i:S,a}}}function Qp({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:i=500,modifyTarget:a,min:s,max:l,restDelta:u=.5,restSpeed:d}){const f=e[0],p={done:!1,value:f},h=E=>s!==void 0&&E<s||l!==void 0&&E>l,y=E=>s===void 0?l:l===void 0||Math.abs(s-E)<Math.abs(l-E)?s:l;let w=n*t;const j=f+w,v=a===void 0?j:a(j);v!==j&&(w=v-f);const m=E=>-w*Math.exp(-E/r),g=E=>v+m(E),S=E=>{const D=m(E),M=g(E);p.done=Math.abs(D)<=u,p.value=p.done?v:M};let P,k;const C=E=>{h(p.value)&&(P=E,k=nv({keyframes:[p.value,y(p.value)],velocity:tv(g,E,p.value),damping:o,stiffness:i,restDelta:u,restSpeed:d}))};return C(0),{calculatedDuration:null,next:E=>{let D=!1;return!k&&P===void 0&&(D=!0,S(E),C(E)),P!==void 0&&E>P?k.next(E-P):(!D&&S(E),p)}}}const nb=e=>{const t=({timestamp:n})=>e(n);return{start:()=>Y.update(t,!0),stop:()=>Kt(t),now:()=>Ee.isProcessing?Ee.timestamp:performance.now()}},Xp=2e4;function Zp(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Xp;)t+=n,r=e.next(t);return t>=Xp?1/0:t}const rb={decay:Qp,inertia:Qp,tween:os,keyframes:os,spring:nv};function is({autoplay:e=!0,delay:t=0,driver:n=nb,keyframes:r,type:o="keyframes",repeat:i=0,repeatDelay:a=0,repeatType:s="loop",onPlay:l,onStop:u,onComplete:d,onUpdate:f,...p}){let h=1,y=!1,w,j;const v=()=>{j=new Promise(N=>{w=N})};v();let m;const g=rb[o]||os;let S;g!==os&&typeof r[0]!="number"&&(S=J1([0,100],r,{clamp:!1}),r=[0,100]);const P=g({...p,keyframes:r});let k;s==="mirror"&&(k=g({...p,keyframes:[...r].reverse(),velocity:-(p.velocity||0)}));let C="idle",E=null,D=null,M=null;P.calculatedDuration===null&&i&&(P.calculatedDuration=Zp(P));const{calculatedDuration:oe}=P;let pe=1/0,we=1/0;oe!==null&&(pe=oe+a,we=pe*(i+1)-a);let ce=0;const jt=N=>{if(D===null)return;h>0&&(D=Math.min(D,N)),h<0&&(D=Math.min(N-we/h,D)),E!==null?ce=E:ce=Math.round(N-D)*h;const _=ce-t*(h>=0?1:-1),Ct=h>=0?_<0:_>we;ce=Math.max(_,0),C==="finished"&&E===null&&(ce=we);let Le=ce,ut=P;if(i){const dt=Math.min(ce,we)/pe;let Zt=Math.floor(dt),Je=dt%1;!Je&&dt>=1&&(Je=1),Je===1&&Zt--,Zt=Math.min(Zt,i+1),!!(Zt%2)&&(s==="reverse"?(Je=1-Je,a&&(Je-=a/pe)):s==="mirror"&&(ut=k)),Le=Pn(0,1,Je)*pe}const me=Ct?{done:!1,value:r[0]}:ut.next(Le);S&&(me.value=S(me.value));let{done:Ze}=me;!Ct&&oe!==null&&(Ze=h>=0?ce>=we:ce<=0);const $n=E===null&&(C==="finished"||C==="running"&&Ze);return f&&f(me.value),$n&&z(),me},J=()=>{m&&m.stop(),m=void 0},Ce=()=>{C="idle",J(),w(),v(),D=M=null},z=()=>{C="finished",d&&d(),J(),w()},$=()=>{if(y)return;m||(m=n(jt));const N=m.now();l&&l(),E!==null?D=N-E:(!D||C==="finished")&&(D=N),C==="finished"&&v(),M=D,E=null,C="running",m.start()};e&&$();const I={then(N,_){return j.then(N,_)},get time(){return Ht(ce)},set time(N){N=Xn(N),ce=N,E!==null||!m||h===0?E=N:D=m.now()-N/h},get duration(){const N=P.calculatedDuration===null?Zp(P):P.calculatedDuration;return Ht(N)},get speed(){return h},set speed(N){N===h||!m||(h=N,I.time=Ht(ce))},get state(){return C},play:$,pause:()=>{C="paused",E=ce},stop:()=>{y=!0,C!=="idle"&&(C="idle",u&&u(),Ce())},cancel:()=>{M!==null&&jt(M),Ce()},complete:()=>{C="finished"},sample:N=>(D=0,jt(N))};return I}function ob(e){let t;return()=>(t===void 0&&(t=e()),t)}const ib=ob(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),ab=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Gi=10,sb=2e4,lb=(e,t)=>t.type==="spring"||e==="backgroundColor"||!M1(t.ease);function cb(e,t,{onUpdate:n,onComplete:r,...o}){if(!(ib()&&ab.has(t)&&!o.repeatDelay&&o.repeatType!=="mirror"&&o.damping!==0&&o.type!=="inertia"))return!1;let a=!1,s,l,u=!1;const d=()=>{l=new Promise(g=>{s=g})};d();let{keyframes:f,duration:p=300,ease:h,times:y}=o;if(lb(t,o)){const g=is({...o,repeat:0,delay:0});let S={done:!1,value:f[0]};const P=[];let k=0;for(;!S.done&&k<sb;)S=g.sample(k),P.push(S.value),k+=Gi;y=void 0,f=P,p=k-Gi,h="linear"}const w=y6(e.owner.current,t,f,{...o,duration:p,ease:h,times:y}),j=()=>{u=!1,w.cancel()},v=()=>{u=!0,Y.update(j),s(),d()};return w.onfinish=()=>{u||(e.set(x6(f,o)),r&&r(),v())},{then(g,S){return l.then(g,S)},attachTimeline(g){return w.timeline=g,w.onfinish=null,se},get time(){return Ht(w.currentTime||0)},set time(g){w.currentTime=Xn(g)},get speed(){return w.playbackRate},set speed(g){w.playbackRate=g},get duration(){return Ht(p)},play:()=>{a||(w.play(),Kt(j))},pause:()=>w.pause(),stop:()=>{if(a=!0,w.playState==="idle")return;const{currentTime:g}=w;if(g){const S=is({...o,autoplay:!1});e.setWithVelocity(S.sample(g-Gi).value,S.sample(g).value,Gi)}v()},complete:()=>{u||w.finish()},cancel:v}}function ub({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const o=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:se,pause:se,stop:se,then:i=>(i(),Promise.resolve()),cancel:se,complete:se});return t?is({keyframes:[0,1],duration:0,delay:t,onComplete:o}):o()}const db={type:"spring",stiffness:500,damping:25,restSpeed:10},fb=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),pb={type:"keyframes",duration:.8},mb={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},hb=(e,{keyframes:t})=>t.length>2?pb:sr.has(e)?e.startsWith("scale")?fb(t[1]):db:mb,au=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(En.test(t)||t==="0")&&!t.startsWith("url(")),gb=new Set(["brightness","contrast","saturate","opacity"]);function vb(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(_s)||[];if(!r)return e;const o=n.replace(r,"");let i=gb.has(t)?1:0;return r!==n&&(i*=100),t+"("+i+o+")"}const yb=/([a-z-]*)\(.*?\)/g,su={...En,getAnimatableNone:e=>{const t=e.match(yb);return t?t.map(vb).join(" "):e}},xb={...g1,color:Re,backgroundColor:Re,outlineColor:Re,fill:Re,stroke:Re,borderColor:Re,borderTopColor:Re,borderRightColor:Re,borderBottomColor:Re,borderLeftColor:Re,filter:su,WebkitFilter:su},_d=e=>xb[e];function rv(e,t){let n=_d(e);return n!==su&&(n=En),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const ov=e=>/^0[^.\s]+$/.test(e);function wb(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||ov(e)}function bb(e,t,n,r){const o=au(t,n);let i;Array.isArray(n)?i=[...n]:i=[null,n];const a=r.from!==void 0?r.from:e.get();let s;const l=[];for(let u=0;u<i.length;u++)i[u]===null&&(i[u]=u===0?a:i[u-1]),wb(i[u])&&l.push(u),typeof i[u]=="string"&&i[u]!=="none"&&i[u]!=="0"&&(s=i[u]);if(o&&l.length&&s)for(let u=0;u<l.length;u++){const d=l[u];i[d]=rv(t,s)}return i}function Sb({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:o,repeat:i,repeatType:a,repeatDelay:s,from:l,elapsed:u,...d}){return!!Object.keys(d).length}function Bd(e,t){return e[t]||e.default||e}const jb={skipAnimations:!1},Ud=(e,t,n,r={})=>o=>{const i=Bd(r,e)||{},a=i.delay||r.delay||0;let{elapsed:s=0}=r;s=s-Xn(a);const l=bb(t,e,n,i),u=l[0],d=l[l.length-1],f=au(e,u),p=au(e,d);let h={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...i,delay:-s,onUpdate:y=>{t.set(y),i.onUpdate&&i.onUpdate(y)},onComplete:()=>{o(),i.onComplete&&i.onComplete()}};if(Sb(i)||(h={...h,...hb(e,h)}),h.duration&&(h.duration=Xn(h.duration)),h.repeatDelay&&(h.repeatDelay=Xn(h.repeatDelay)),!f||!p||v6.current||i.type===!1||jb.skipAnimations)return ub(h);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const y=cb(t,e,h);if(y)return y}return is(h)};function as(e){return!!(Ue(e)&&e.add)}const iv=e=>/^\-?\d*\.?\d+$/.test(e);function Hd(e,t){e.indexOf(t)===-1&&e.push(t)}function Wd(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Gd{constructor(){this.subscriptions=[]}add(t){return Hd(this.subscriptions,t),()=>Wd(this.subscriptions,t)}notify(t,n,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,r);else for(let i=0;i<o;i++){const a=this.subscriptions[i];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Cb=e=>!isNaN(parseFloat(e));class kb{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,o=!0)=>{this.prev=this.current,this.current=r;const{delta:i,timestamp:a}=Ee;this.lastUpdated!==a&&(this.timeDelta=i,this.lastUpdated=a,Y.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>Y.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=Cb(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Gd);const r=this.events[t].add(n);return t==="change"?()=>{r(),Y.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?ev(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Qr(e,t){return new kb(e,t)}const av=e=>t=>t.test(e),Pb={test:e=>e==="auto",parse:e=>e},sv=[lr,L,Dt,tn,Mw,Dw,Pb],ho=e=>sv.find(av(e)),Eb=[...sv,Re,En],Tb=e=>Eb.find(av(e));function zb(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Qr(n))}function Ab(e,t){const n=Us(e,t);let{transitionEnd:r={},transition:o={},...i}=n?e.makeTargetAnimatable(n,!1):{};i={...i,...r};for(const a in i){const s=qw(i[a]);zb(e,a,s)}}function Rb(e,t,n){var r,o;const i=Object.keys(t).filter(s=>!e.hasValue(s)),a=i.length;if(a)for(let s=0;s<a;s++){const l=i[s],u=t[l];let d=null;Array.isArray(u)&&(d=u[0]),d===null&&(d=(o=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&o!==void 0?o:t[l]),d!=null&&(typeof d=="string"&&(iv(d)||ov(d))?d=parseFloat(d):!Tb(d)&&En.test(u)&&(d=rv(l,u)),e.addValue(l,Qr(d,{owner:e})),n[l]===void 0&&(n[l]=d),d!==null&&e.setBaseTarget(l,d))}}function Db(e,t){return t?(t[e]||t.default||t).from:void 0}function Mb(e,t,n){const r={};for(const o in e){const i=Db(o,t);if(i!==void 0)r[o]=i;else{const a=n.getValue(o);a&&(r[o]=a.get())}}return r}function $b({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Nb(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function lv(e,t,{delay:n=0,transitionOverride:r,type:o}={}){let{transition:i=e.getDefaultTransition(),transitionEnd:a,...s}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(i=r);const u=[],d=o&&e.animationState&&e.animationState.getState()[o];for(const f in s){const p=e.getValue(f),h=s[f];if(!p||h===void 0||d&&$b(d,f))continue;const y={delay:n,elapsed:0,...Bd(i||{},f)};if(window.HandoffAppearAnimations){const v=e.getProps()[c1];if(v){const m=window.HandoffAppearAnimations(v,f,p,Y);m!==null&&(y.elapsed=m,y.isHandoff=!0)}}let w=!y.isHandoff&&!Nb(p,h);if(y.type==="spring"&&(p.getVelocity()||y.velocity)&&(w=!1),p.animation&&(w=!1),w)continue;p.start(Ud(f,p,h,e.shouldReduceMotion&&sr.has(f)?{type:!1}:y));const j=p.animation;as(l)&&(l.add(f),j.then(()=>l.remove(f))),u.push(j)}return a&&Promise.all(u).then(()=>{a&&Ab(e,a)}),u}function lu(e,t,n={}){const r=Us(e,t,n.custom);let{transition:o=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(o=n.transitionOverride);const i=r?()=>Promise.all(lv(e,r,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:f}=o;return Lb(e,t,u+l,d,f,n)}:()=>Promise.resolve(),{when:s}=o;if(s){const[l,u]=s==="beforeChildren"?[i,a]:[a,i];return l().then(()=>u())}else return Promise.all([i(),a(n.delay)])}function Lb(e,t,n=0,r=0,o=1,i){const a=[],s=(e.variantChildren.size-1)*r,l=o===1?(u=0)=>u*r:(u=0)=>s-u*r;return Array.from(e.variantChildren).sort(Ib).forEach((u,d)=>{u.notify("AnimationStart",t),a.push(lu(u,t,{...i,delay:n+l(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(a)}function Ib(e,t){return e.sortNodePosition(t)}function Ob(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const o=t.map(i=>lu(e,i,n));r=Promise.all(o)}else if(typeof t=="string")r=lu(e,t,n);else{const o=typeof t=="function"?Us(e,t,n.custom):t;r=Promise.all(lv(e,o,n))}return r.then(()=>e.notify("AnimationComplete",t))}const Vb=[...Ed].reverse(),Fb=Ed.length;function _b(e){return t=>Promise.all(t.map(({animation:n,options:r})=>Ob(e,n,r)))}function Bb(e){let t=_b(e);const n=Hb();let r=!0;const o=(l,u)=>{const d=Us(e,u);if(d){const{transition:f,transitionEnd:p,...h}=d;l={...l,...h,...p}}return l};function i(l){t=l(e)}function a(l,u){const d=e.getProps(),f=e.getVariantContext(!0)||{},p=[],h=new Set;let y={},w=1/0;for(let v=0;v<Fb;v++){const m=Vb[v],g=n[m],S=d[m]!==void 0?d[m]:f[m],P=li(S),k=m===u?g.isActive:null;k===!1&&(w=v);let C=S===f[m]&&S!==d[m]&&P;if(C&&r&&e.manuallyAnimateOnMount&&(C=!1),g.protectedKeys={...y},!g.isActive&&k===null||!S&&!g.prevProp||Vs(S)||typeof S=="boolean")continue;let D=Ub(g.prevProp,S)||m===u&&g.isActive&&!C&&P||v>w&&P,M=!1;const oe=Array.isArray(S)?S:[S];let pe=oe.reduce(o,{});k===!1&&(pe={});const{prevResolvedValues:we={}}=g,ce={...we,...pe},jt=J=>{D=!0,h.has(J)&&(M=!0,h.delete(J)),g.needsAnimating[J]=!0};for(const J in ce){const Ce=pe[J],z=we[J];if(y.hasOwnProperty(J))continue;let $=!1;ns(Ce)&&ns(z)?$=!R1(Ce,z):$=Ce!==z,$?Ce!==void 0?jt(J):h.add(J):Ce!==void 0&&h.has(J)?jt(J):g.protectedKeys[J]=!0}g.prevProp=S,g.prevResolvedValues=pe,g.isActive&&(y={...y,...pe}),r&&e.blockInitialAnimation&&(D=!1),D&&(!C||M)&&p.push(...oe.map(J=>({animation:J,options:{type:m,...l}})))}if(h.size){const v={};h.forEach(m=>{const g=e.getBaseTarget(m);g!==void 0&&(v[m]=g)}),p.push({animation:v})}let j=!!p.length;return r&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(j=!1),r=!1,j?t(p):Promise.resolve()}function s(l,u,d){var f;if(n[l].isActive===u)return Promise.resolve();(f=e.variantChildren)===null||f===void 0||f.forEach(h=>{var y;return(y=h.animationState)===null||y===void 0?void 0:y.setActive(l,u)}),n[l].isActive=u;const p=a(d,l);for(const h in n)n[h].protectedKeys={};return p}return{animateChanges:a,setActive:s,setAnimateFunction:i,getState:()=>n}}function Ub(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!R1(t,e):!1}function Nn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Hb(){return{animate:Nn(!0),whileInView:Nn(),whileHover:Nn(),whileTap:Nn(),whileDrag:Nn(),whileFocus:Nn(),exit:Nn()}}class Wb extends Mn{constructor(t){super(t),t.animationState||(t.animationState=Bb(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),Vs(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let Gb=0;class qb extends Mn{constructor(){super(...arguments),this.id=Gb++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===o)return;const i=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const Yb={animation:{Feature:Wb},exit:{Feature:qb}},Jp=(e,t)=>Math.abs(e-t);function Kb(e,t){const n=Jp(e.x,t.x),r=Jp(e.y,t.y);return Math.sqrt(n**2+r**2)}class cv{constructor(t,n,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:i=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Il(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,h=Kb(f.offset,{x:0,y:0})>=3;if(!p&&!h)return;const{point:y}=f,{timestamp:w}=Ee;this.history.push({...y,timestamp:w});const{onStart:j,onMove:v}=this.handlers;p||(j&&j(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Ll(p,this.transformPagePoint),Y.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:h,onSessionEnd:y,resumeAnimation:w}=this.handlers;if(this.dragSnapToOrigin&&w&&w(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const j=Il(f.type==="pointercancel"?this.lastMoveEventInfo:Ll(p,this.transformPagePoint),this.history);this.startEvent&&h&&h(f,j),y&&y(f,j)},!P1(t))return;this.dragSnapToOrigin=i,this.handlers=n,this.transformPagePoint=r,this.contextWindow=o||window;const a=Bs(t),s=Ll(a,this.transformPagePoint),{point:l}=s,{timestamp:u}=Ee;this.history=[{...l,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,Il(s,this.history)),this.removeListeners=jn(Ut(this.contextWindow,"pointermove",this.handlePointerMove),Ut(this.contextWindow,"pointerup",this.handlePointerUp),Ut(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Kt(this.updatePoint)}}function Ll(e,t){return t?{point:t(e.point)}:e}function em(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Il({point:e},t){return{point:e,delta:em(e,uv(t)),offset:em(e,Qb(t)),velocity:Xb(t,.1)}}function Qb(e){return e[0]}function uv(e){return e[e.length-1]}function Xb(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const o=uv(e);for(;n>=0&&(r=e[n],!(o.timestamp-r.timestamp>Xn(t)));)n--;if(!r)return{x:0,y:0};const i=Ht(o.timestamp-r.timestamp);if(i===0)return{x:0,y:0};const a={x:(o.x-r.x)/i,y:(o.y-r.y)/i};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function Ke(e){return e.max-e.min}function cu(e,t=0,n=.01){return Math.abs(e-t)<=n}function tm(e,t,n,r=.5){e.origin=r,e.originPoint=te(t.min,t.max,e.origin),e.scale=Ke(n)/Ke(t),(cu(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=te(n.min,n.max,e.origin)-e.originPoint,(cu(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Fo(e,t,n,r){tm(e.x,t.x,n.x,r?r.originX:void 0),tm(e.y,t.y,n.y,r?r.originY:void 0)}function nm(e,t,n){e.min=n.min+t.min,e.max=e.min+Ke(t)}function Zb(e,t,n){nm(e.x,t.x,n.x),nm(e.y,t.y,n.y)}function rm(e,t,n){e.min=t.min-n.min,e.max=e.min+Ke(t)}function _o(e,t,n){rm(e.x,t.x,n.x),rm(e.y,t.y,n.y)}function Jb(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?te(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?te(n,e,r.max):Math.min(e,n)),e}function om(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function e8(e,{top:t,left:n,bottom:r,right:o}){return{x:om(e.x,n,o),y:om(e.y,t,r)}}function im(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function t8(e,t){return{x:im(e.x,t.x),y:im(e.y,t.y)}}function n8(e,t){let n=.5;const r=Ke(e),o=Ke(t);return o>r?n=ui(t.min,t.max-r,e.min):r>o&&(n=ui(e.min,e.max-o,t.min)),Pn(0,1,n)}function r8(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const uu=.35;function o8(e=uu){return e===!1?e=0:e===!0&&(e=uu),{x:am(e,"left","right"),y:am(e,"top","bottom")}}function am(e,t,n){return{min:sm(e,t),max:sm(e,n)}}function sm(e,t){return typeof e=="number"?e:e[t]||0}const lm=()=>({translate:0,scale:1,origin:0,originPoint:0}),Er=()=>({x:lm(),y:lm()}),cm=()=>({min:0,max:0}),ue=()=>({x:cm(),y:cm()});function tt(e){return[e("x"),e("y")]}function dv({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function i8({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function a8(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Ol(e){return e===void 0||e===1}function du({scale:e,scaleX:t,scaleY:n}){return!Ol(e)||!Ol(t)||!Ol(n)}function On(e){return du(e)||fv(e)||e.z||e.rotate||e.rotateX||e.rotateY}function fv(e){return um(e.x)||um(e.y)}function um(e){return e&&e!=="0%"}function ss(e,t,n){const r=e-n,o=t*r;return n+o}function dm(e,t,n,r,o){return o!==void 0&&(e=ss(e,o,r)),ss(e,n,r)+t}function fu(e,t=0,n=1,r,o){e.min=dm(e.min,t,n,r,o),e.max=dm(e.max,t,n,r,o)}function pv(e,{x:t,y:n}){fu(e.x,t.translate,t.scale,t.originPoint),fu(e.y,n.translate,n.scale,n.originPoint)}function s8(e,t,n,r=!1){const o=n.length;if(!o)return;t.x=t.y=1;let i,a;for(let s=0;s<o;s++){i=n[s],a=i.projectionDelta;const l=i.instance;l&&l.style&&l.style.display==="contents"||(r&&i.options.layoutScroll&&i.scroll&&i!==i.root&&Tr(e,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,pv(e,a)),r&&On(i.latestValues)&&Tr(e,i.latestValues))}t.x=fm(t.x),t.y=fm(t.y)}function fm(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function on(e,t){e.min=e.min+t,e.max=e.max+t}function pm(e,t,[n,r,o]){const i=t[o]!==void 0?t[o]:.5,a=te(e.min,e.max,i);fu(e,t[n],t[r],a,t.scale)}const l8=["x","scaleX","originX"],c8=["y","scaleY","originY"];function Tr(e,t){pm(e.x,t,l8),pm(e.y,t,c8)}function mv(e,t){return dv(a8(e.getBoundingClientRect(),t))}function u8(e,t,n){const r=mv(e,n),{scroll:o}=t;return o&&(on(r.x,o.offset.x),on(r.y,o.offset.y)),r}const hv=({current:e})=>e?e.ownerDocument.defaultView:null,d8=new WeakMap;class f8{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ue(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Bs(d,"page").point)},i=(d,f)=>{const{drag:p,dragPropagation:h,onDragStart:y}=this.getProps();if(p&&!h&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=T1(p),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),tt(j=>{let v=this.getAxisMotionValue(j).get()||0;if(Dt.test(v)){const{projection:m}=this.visualElement;if(m&&m.layout){const g=m.layout.layoutBox[j];g&&(v=Ke(g)*(parseFloat(v)/100))}}this.originPoint[j]=v}),y&&Y.update(()=>y(d,f),!1,!0);const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},a=(d,f)=>{const{dragPropagation:p,dragDirectionLock:h,onDirectionLock:y,onDrag:w}=this.getProps();if(!p&&!this.openGlobalLock)return;const{offset:j}=f;if(h&&this.currentDirection===null){this.currentDirection=p8(j),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",f.point,j),this.updateAxis("y",f.point,j),this.visualElement.render(),w&&w(d,f)},s=(d,f)=>this.stop(d,f),l=()=>tt(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new cv(t,{onSessionStart:o,onStart:i,onMove:a,onSessionEnd:s,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:hv(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=n;this.startAnimation(o);const{onDragEnd:i}=this.getProps();i&&Y.update(()=>i(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:o}=this.getProps();if(!r||!qi(t,o,this.currentDirection))return;const i=this.getAxisMotionValue(t);let a=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(a=Jb(a,this.constraints[t],this.elastic[t])),i.set(a)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,i=this.constraints;n&&kr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&o?this.constraints=e8(o.layoutBox,n):this.constraints=!1,this.elastic=o8(r),i!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&tt(a=>{this.getAxisMotionValue(a)&&(this.constraints[a]=r8(o.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!kr(t))return!1;const r=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const i=u8(r,o.root,this.visualElement.getTransformPagePoint());let a=t8(o.layout.layoutBox,i);if(n){const s=n(i8(a));this.hasMutatedConstraints=!!s,s&&(a=dv(s))}return a}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:o,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:s}=this.getProps(),l=this.constraints||{},u=tt(d=>{if(!qi(d,n,this.currentDirection))return;let f=l&&l[d]||{};a&&(f={min:0,max:0});const p=o?200:1e6,h=o?40:1e7,y={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:h,timeConstant:750,restDelta:1,restSpeed:10,...i,...f};return this.startAxisValueAnimation(d,y)});return Promise.all(u).then(s)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(Ud(t,r,0,n))}stopAnimation(){tt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){tt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),o=r[n];return o||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){tt(n=>{const{drag:r}=this.getProps();if(!qi(n,r,this.currentDirection))return;const{projection:o}=this.visualElement,i=this.getAxisMotionValue(n);if(o&&o.layout){const{min:a,max:s}=o.layout.layoutBox[n];i.set(t[n]-te(a,s,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!kr(n)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};tt(a=>{const s=this.getAxisMotionValue(a);if(s){const l=s.get();o[a]=n8({min:l,max:l},this.constraints[a])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),tt(a=>{if(!qi(a,t,null))return;const s=this.getAxisMotionValue(a),{min:l,max:u}=this.constraints[a];s.set(te(l,u,o[a]))})}addListeners(){if(!this.visualElement.current)return;d8.set(this.visualElement,this);const t=this.visualElement.current,n=Ut(t,"pointerdown",l=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();kr(l)&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,i=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),r();const a=Ft(window,"resize",()=>this.scalePositionWithinConstraints()),s=o.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(tt(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=l[d].translate,f.set(f.get()+l[d].translate))}),this.visualElement.render())});return()=>{a(),n(),i(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:i=!1,dragElastic:a=uu,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:o,dragConstraints:i,dragElastic:a,dragMomentum:s}}}function qi(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function p8(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class m8 extends Mn{constructor(t){super(t),this.removeGroupControls=se,this.removeListeners=se,this.controls=new f8(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||se}unmount(){this.removeGroupControls(),this.removeListeners()}}const mm=e=>(t,n)=>{e&&Y.update(()=>e(t,n))};class h8 extends Mn{constructor(){super(...arguments),this.removePointerDownListener=se}onPointerDown(t){this.session=new cv(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:hv(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:mm(t),onStart:mm(n),onMove:r,onEnd:(i,a)=>{delete this.session,o&&Y.update(()=>o(i,a))}}}mount(){this.removePointerDownListener=Ut(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function g8(){const e=b.useContext(Is);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,o=b.useId();return b.useEffect(()=>r(o),[]),!t&&n?[!1,()=>n&&n(o)]:[!0]}const ba={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function hm(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const go={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(L.test(e))e=parseFloat(e);else return e;const n=hm(e,t.target.x),r=hm(e,t.target.y);return`${n}% ${r}%`}},v8={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,o=En.parse(e);if(o.length>5)return r;const i=En.createTransformer(e),a=typeof o[0]!="number"?1:0,s=n.x.scale*t.x,l=n.y.scale*t.y;o[0+a]/=s,o[1+a]/=l;const u=te(s,l,.5);return typeof o[2+a]=="number"&&(o[2+a]/=u),typeof o[3+a]=="number"&&(o[3+a]/=u),i(o)}};class y8 extends G.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:o}=this.props,{projection:i}=t;kw(x8),i&&(n.group&&n.group.add(i),r&&r.register&&o&&r.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),ba.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:o,isPresent:i}=this.props,a=r.projection;return a&&(a.isPresent=i,o||t.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),t.isPresent!==i&&(i?a.promote():a.relegate()||Y.postRender(()=>{const s=a.getStack();(!s||!s.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:o}=t;o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function gv(e){const[t,n]=g8(),r=b.useContext(zd);return G.createElement(y8,{...e,layoutGroup:r,switchLayoutGroup:b.useContext(d1),isPresent:t,safeToRemove:n})}const x8={borderRadius:{...go,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:go,borderTopRightRadius:go,borderBottomLeftRadius:go,borderBottomRightRadius:go,boxShadow:v8},vv=["TopLeft","TopRight","BottomLeft","BottomRight"],w8=vv.length,gm=e=>typeof e=="string"?parseFloat(e):e,vm=e=>typeof e=="number"||L.test(e);function b8(e,t,n,r,o,i){o?(e.opacity=te(0,n.opacity!==void 0?n.opacity:1,S8(r)),e.opacityExit=te(t.opacity!==void 0?t.opacity:1,0,j8(r))):i&&(e.opacity=te(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let a=0;a<w8;a++){const s=`border${vv[a]}Radius`;let l=ym(t,s),u=ym(n,s);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||vm(l)===vm(u)?(e[s]=Math.max(te(gm(l),gm(u),r),0),(Dt.test(u)||Dt.test(l))&&(e[s]+="%")):e[s]=u}(t.rotate||n.rotate)&&(e.rotate=te(t.rotate||0,n.rotate||0,r))}function ym(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const S8=yv(0,.5,F1),j8=yv(.5,.95,se);function yv(e,t,n){return r=>r<e?0:r>t?1:n(ui(e,t,r))}function xm(e,t){e.min=t.min,e.max=t.max}function et(e,t){xm(e.x,t.x),xm(e.y,t.y)}function wm(e,t,n,r,o){return e-=t,e=ss(e,1/n,r),o!==void 0&&(e=ss(e,1/o,r)),e}function C8(e,t=0,n=1,r=.5,o,i=e,a=e){if(Dt.test(t)&&(t=parseFloat(t),t=te(a.min,a.max,t/100)-a.min),typeof t!="number")return;let s=te(i.min,i.max,r);e===i&&(s-=t),e.min=wm(e.min,t,n,s,o),e.max=wm(e.max,t,n,s,o)}function bm(e,t,[n,r,o],i,a){C8(e,t[n],t[r],t[o],t.scale,i,a)}const k8=["x","scaleX","originX"],P8=["y","scaleY","originY"];function Sm(e,t,n,r){bm(e.x,t,k8,n?n.x:void 0,r?r.x:void 0),bm(e.y,t,P8,n?n.y:void 0,r?r.y:void 0)}function jm(e){return e.translate===0&&e.scale===1}function xv(e){return jm(e.x)&&jm(e.y)}function E8(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function wv(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Cm(e){return Ke(e.x)/Ke(e.y)}class T8{constructor(){this.members=[]}add(t){Hd(this.members,t),t.scheduleRender()}remove(t){if(Wd(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let r;for(let o=n;o>=0;o--){const i=this.members[o];if(i.isPresent!==!1){r=i;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function km(e,t,n){let r="";const o=e.x.translate/t.x,i=e.y.translate/t.y;if((o||i)&&(r=`translate3d(${o}px, ${i}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:u,rotateY:d}=n;l&&(r+=`rotate(${l}deg) `),u&&(r+=`rotateX(${u}deg) `),d&&(r+=`rotateY(${d}deg) `)}const a=e.x.scale*t.x,s=e.y.scale*t.y;return(a!==1||s!==1)&&(r+=`scale(${a}, ${s})`),r||"none"}const z8=(e,t)=>e.depth-t.depth;class A8{constructor(){this.children=[],this.isDirty=!1}add(t){Hd(this.children,t),this.isDirty=!0}remove(t){Wd(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(z8),this.isDirty=!1,this.children.forEach(t)}}function R8(e,t){const n=performance.now(),r=({timestamp:o})=>{const i=o-n;i>=t&&(Kt(r),e(i-t))};return Y.read(r,!0),()=>Kt(r)}function D8(e){window.MotionDebug&&window.MotionDebug.record(e)}function M8(e){return e instanceof SVGElement&&e.tagName!=="svg"}function $8(e,t,n){const r=Ue(e)?e:Qr(e);return r.start(Ud("",r,t,n)),r.animation}const Pm=["","X","Y","Z"],N8={visibility:"hidden"},Em=1e3;let L8=0;const Vn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function bv({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(a={},s=t==null?void 0:t()){this.id=L8++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Vn.totalNodes=Vn.resolvedTargetDeltas=Vn.recalculatedProjection=0,this.nodes.forEach(V8),this.nodes.forEach(H8),this.nodes.forEach(W8),this.nodes.forEach(F8),D8(Vn)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=s?s.root||s:this,this.path=s?[...s.path,s]:[],this.parent=s,this.depth=s?s.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new A8)}addEventListener(a,s){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new Gd),this.eventHandlers.get(a).add(s)}notifyListeners(a,...s){const l=this.eventHandlers.get(a);l&&l.notify(...s)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,s=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=M8(a),this.instance=a;const{layoutId:l,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),s&&(u||l)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(a,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=R8(p,250),ba.hasAnimatedSinceResize&&(ba.hasAnimatedSinceResize=!1,this.nodes.forEach(zm))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:h,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||d.getDefaultTransition()||Q8,{onLayoutAnimationStart:j,onLayoutAnimationComplete:v}=d.getProps(),m=!this.targetLayout||!wv(this.targetLayout,y)||h,g=!p&&h;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||g||p&&(m||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,g);const S={...Bd(w,"layout"),onPlay:j,onComplete:v};(d.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else p||zm(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Kt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(G8),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:s,layout:l}=this.options;if(s===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Tm);return}this.isUpdating||this.nodes.forEach(B8),this.isUpdating=!1,this.nodes.forEach(U8),this.nodes.forEach(I8),this.nodes.forEach(O8),this.clearAllSnapshots();const s=performance.now();Ee.delta=Pn(0,1e3/60,s-Ee.timestamp),Ee.timestamp=s,Ee.isProcessing=!0,Tl.update.process(Ee),Tl.preRender.process(Ee),Tl.render.process(Ee),Ee.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(_8),this.sharedNodes.forEach(q8)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Y.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Y.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ue(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:s}=this.options;s&&s.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let s=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(s=!1),s&&(this.scroll={animationId:this.root.animationId,phase:a,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!o)return;const a=this.isLayoutDirty||this.shouldResetTransform,s=this.projectionDelta&&!xv(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;a&&(s||On(this.latestValues)||d)&&(o(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const s=this.measurePageBox();let l=this.removeElementScroll(s);return a&&(l=this.removeTransform(l)),X8(l),{animationId:this.root.animationId,measuredBox:s,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:a}=this.options;if(!a)return ue();const s=a.measureViewportBox(),{scroll:l}=this.root;return l&&(on(s.x,l.offset.x),on(s.y,l.offset.y)),s}removeElementScroll(a){const s=ue();et(s,a);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:d,options:f}=u;if(u!==this.root&&d&&f.layoutScroll){if(d.isRoot){et(s,a);const{scroll:p}=this.root;p&&(on(s.x,-p.offset.x),on(s.y,-p.offset.y))}on(s.x,d.offset.x),on(s.y,d.offset.y)}}return s}applyTransform(a,s=!1){const l=ue();et(l,a);for(let u=0;u<this.path.length;u++){const d=this.path[u];!s&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Tr(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),On(d.latestValues)&&Tr(l,d.latestValues)}return On(this.latestValues)&&Tr(l,this.latestValues),l}removeTransform(a){const s=ue();et(s,a);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!On(u.latestValues))continue;du(u.latestValues)&&u.updateSnapshot();const d=ue(),f=u.measurePageBox();et(d,f),Sm(s,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return On(this.latestValues)&&Sm(s,this.latestValues),s}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ee.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var s;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(a||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=Ee.timestamp,!this.targetDelta&&!this.relativeTarget){const h=this.getClosestProjectingParent();h&&h.layout&&this.animationProgress!==1?(this.relativeParent=h,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ue(),this.relativeTargetOrigin=ue(),_o(this.relativeTargetOrigin,this.layout.layoutBox,h.layout.layoutBox),et(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ue(),this.targetWithTransforms=ue()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Zb(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):et(this.target,this.layout.layoutBox),pv(this.target,this.targetDelta)):et(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const h=this.getClosestProjectingParent();h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?(this.relativeParent=h,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ue(),this.relativeTargetOrigin=ue(),_o(this.relativeTargetOrigin,this.target,h.target),et(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Vn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||du(this.parent.latestValues)||fv(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const s=this.getLead(),l=!!this.resumingFrom||this!==s;let u=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Ee.timestamp&&(u=!1),u)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;et(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,h=this.treeScale.y;s8(this.layoutCorrected,this.treeScale,this.path,l),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox);const{target:y}=s;if(!y){this.projectionTransform&&(this.projectionDelta=Er(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Er(),this.projectionDeltaWithTransform=Er());const w=this.projectionTransform;Fo(this.projectionDelta,this.layoutCorrected,y,this.latestValues),this.projectionTransform=km(this.projectionDelta,this.treeScale),(this.projectionTransform!==w||this.treeScale.x!==p||this.treeScale.y!==h)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),Vn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),a){const s=this.getStack();s&&s.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(a,s=!1){const l=this.snapshot,u=l?l.latestValues:{},d={...this.latestValues},f=Er();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!s;const p=ue(),h=l?l.source:void 0,y=this.layout?this.layout.source:void 0,w=h!==y,j=this.getStack(),v=!j||j.members.length<=1,m=!!(w&&!v&&this.options.crossfade===!0&&!this.path.some(K8));this.animationProgress=0;let g;this.mixTargetDelta=S=>{const P=S/1e3;Am(f.x,a.x,P),Am(f.y,a.y,P),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(_o(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Y8(this.relativeTarget,this.relativeTargetOrigin,p,P),g&&E8(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=ue()),et(g,this.relativeTarget)),w&&(this.animationValues=d,b8(d,u,this.latestValues,P,m,v)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Kt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Y.update(()=>{ba.hasAnimatedSinceResize=!0,this.currentAnimation=$8(0,Em,{...a,onUpdate:s=>{this.mixTargetDelta(s),a.onUpdate&&a.onUpdate(s)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Em),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:s,target:l,layout:u,latestValues:d}=a;if(!(!s||!l||!u)){if(this!==a&&this.layout&&u&&Sv(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||ue();const f=Ke(this.layout.layoutBox.x);l.x.min=a.target.x.min,l.x.max=l.x.min+f;const p=Ke(this.layout.layoutBox.y);l.y.min=a.target.y.min,l.y.max=l.y.min+p}et(s,l),Tr(s,d),Fo(this.projectionDeltaWithTransform,this.layoutCorrected,s,d)}}registerSharedNode(a,s){this.sharedNodes.has(a)||this.sharedNodes.set(a,new T8),this.sharedNodes.get(a).add(s);const u=s.options.initialPromotionConfig;s.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(s):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:s}=this.options;return s?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:s}=this.options;return s?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:s,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetRotation(){const{visualElement:a}=this.options;if(!a)return;let s=!1;const{latestValues:l}=a;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(s=!0),!s)return;const u={};for(let d=0;d<Pm.length;d++){const f="rotate"+Pm[d];l[f]&&(u[f]=l[f],a.setStaticValue(f,0))}a.render();for(const d in u)a.setStaticValue(d,u[d]);a.scheduleRender()}getProjectionStyles(a){var s,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return N8;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=wa(a==null?void 0:a.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const w={};return this.options.layoutId&&(w.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,w.pointerEvents=wa(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!On(this.latestValues)&&(w.transform=d?d({},""):"none",this.hasProjected=!1),w}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=km(this.projectionDeltaWithTransform,this.treeScale,p),d&&(u.transform=d(p,u.transform));const{x:h,y}=this.projectionDelta;u.transformOrigin=`${h.origin*100}% ${y.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(s=p.opacity)!==null&&s!==void 0?s:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:u.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const w in es){if(p[w]===void 0)continue;const{correct:j,applyTo:v}=es[w],m=u.transform==="none"?p[w]:j(p[w],f);if(v){const g=v.length;for(let S=0;S<g;S++)u[v[S]]=m}else u[w]=m}return this.options.layoutId&&(u.pointerEvents=f===this?wa(a==null?void 0:a.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var s;return(s=a.currentAnimation)===null||s===void 0?void 0:s.stop()}),this.root.nodes.forEach(Tm),this.root.sharedNodes.clear()}}}function I8(e){e.updateLayout()}function O8(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=e.layout,{animationType:i}=e.options,a=n.source!==e.layout.source;i==="size"?tt(f=>{const p=a?n.measuredBox[f]:n.layoutBox[f],h=Ke(p);p.min=r[f].min,p.max=p.min+h}):Sv(i,n.layoutBox,r)&&tt(f=>{const p=a?n.measuredBox[f]:n.layoutBox[f],h=Ke(r[f]);p.max=p.min+h,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+h)});const s=Er();Fo(s,r,n.layoutBox);const l=Er();a?Fo(l,e.applyTransform(o,!0),n.measuredBox):Fo(l,r,n.layoutBox);const u=!xv(s);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:h}=f;if(p&&h){const y=ue();_o(y,n.layoutBox,p.layoutBox);const w=ue();_o(w,r,h.layoutBox),wv(y,w)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=w,e.relativeTargetOrigin=y,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:s,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function V8(e){Vn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function F8(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function _8(e){e.clearSnapshot()}function Tm(e){e.clearMeasurements()}function B8(e){e.isLayoutDirty=!1}function U8(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function zm(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function H8(e){e.resolveTargetDelta()}function W8(e){e.calcProjection()}function G8(e){e.resetRotation()}function q8(e){e.removeLeadSnapshot()}function Am(e,t,n){e.translate=te(t.translate,0,n),e.scale=te(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Rm(e,t,n,r){e.min=te(t.min,n.min,r),e.max=te(t.max,n.max,r)}function Y8(e,t,n,r){Rm(e.x,t.x,n.x,r),Rm(e.y,t.y,n.y,r)}function K8(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Q8={duration:.45,ease:[.4,0,.1,1]},Dm=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),Mm=Dm("applewebkit/")&&!Dm("chrome/")?Math.round:se;function $m(e){e.min=Mm(e.min),e.max=Mm(e.max)}function X8(e){$m(e.x),$m(e.y)}function Sv(e,t,n){return e==="position"||e==="preserve-aspect"&&!cu(Cm(t),Cm(n),.2)}const Z8=bv({attachResizeListener:(e,t)=>Ft(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Vl={current:void 0},jv=bv({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Vl.current){const e=new Z8({});e.mount(window),e.setOptions({layoutScroll:!0}),Vl.current=e}return Vl.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),J8={pan:{Feature:h8},drag:{Feature:m8,ProjectionNode:jv,MeasureLayout:gv}},eS=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function tS(e){const t=eS.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function pu(e,t,n=1){const[r,o]=tS(e);if(!r)return;const i=window.getComputedStyle(t).getPropertyValue(r);if(i){const a=i.trim();return iv(a)?parseFloat(a):a}else return nu(o)?pu(o,t,n+1):o}function nS(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(o=>{const i=o.get();if(!nu(i))return;const a=pu(i,r);a&&o.set(a)});for(const o in t){const i=t[o];if(!nu(i))continue;const a=pu(i,r);a&&(t[o]=a,n||(n={}),n[o]===void 0&&(n[o]=i))}return{target:t,transitionEnd:n}}const rS=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Cv=e=>rS.has(e),oS=e=>Object.keys(e).some(Cv),Nm=e=>e===lr||e===L,Lm=(e,t)=>parseFloat(e.split(", ")[t]),Im=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/);if(o)return Lm(o[1],t);{const i=r.match(/^matrix\((.+)\)$/);return i?Lm(i[1],e):0}},iS=new Set(["x","y","z"]),aS=wi.filter(e=>!iS.has(e));function sS(e){const t=[];return aS.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const Xr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Im(4,13),y:Im(5,14)};Xr.translateX=Xr.x;Xr.translateY=Xr.y;const lS=(e,t,n)=>{const r=t.measureViewportBox(),o=t.current,i=getComputedStyle(o),{display:a}=i,s={};a==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{s[u]=Xr[u](r,i)}),t.render();const l=t.measureViewportBox();return n.forEach(u=>{const d=t.getValue(u);d&&d.jump(s[u]),e[u]=Xr[u](l,i)}),e},cS=(e,t,n={},r={})=>{t={...t},r={...r};const o=Object.keys(t).filter(Cv);let i=[],a=!1;const s=[];if(o.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let d=n[l],f=ho(d);const p=t[l];let h;if(ns(p)){const y=p.length,w=p[0]===null?1:0;d=p[w],f=ho(d);for(let j=w;j<y&&p[j]!==null;j++)h?Id(ho(p[j])===h):h=ho(p[j])}else h=ho(p);if(f!==h)if(Nm(f)&&Nm(h)){const y=u.get();typeof y=="string"&&u.set(parseFloat(y)),typeof p=="string"?t[l]=parseFloat(p):Array.isArray(p)&&h===L&&(t[l]=p.map(parseFloat))}else f!=null&&f.transform&&(h!=null&&h.transform)&&(d===0||p===0)?d===0?u.set(h.transform(d)):t[l]=f.transform(p):(a||(i=sS(e),a=!0),s.push(l),r[l]=r[l]!==void 0?r[l]:t[l],u.jump(p))}),s.length){const l=s.indexOf("height")>=0?window.pageYOffset:null,u=lS(t,e,s);return i.length&&i.forEach(([d,f])=>{e.getValue(d).set(f)}),e.render(),Os&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function uS(e,t,n,r){return oS(t)?cS(e,t,n,r):{target:t,transitionEnd:r}}const dS=(e,t,n,r)=>{const o=nS(e,t,r);return t=o.target,r=o.transitionEnd,uS(e,t,n,r)},mu={current:null},kv={current:!1};function fS(){if(kv.current=!0,!!Os)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>mu.current=e.matches;e.addListener(t),t()}else mu.current=!1}function pS(e,t,n){const{willChange:r}=t;for(const o in t){const i=t[o],a=n[o];if(Ue(i))e.addValue(o,i),as(r)&&r.add(o);else if(Ue(a))e.addValue(o,Qr(i,{owner:e})),as(r)&&r.remove(o);else if(a!==i)if(e.hasValue(o)){const s=e.getValue(o);!s.hasAnimated&&s.set(i)}else{const s=e.getStaticValue(o);e.addValue(o,Qr(s!==void 0?s:i,{owner:e}))}}for(const o in n)t[o]===void 0&&e.removeValue(o);return t}const Om=new WeakMap,Pv=Object.keys(ci),mS=Pv.length,Vm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],hS=Td.length;class gS{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:o,visualState:i},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>Y.render(this.render,!1,!0);const{latestValues:s,renderState:l}=i;this.latestValues=s,this.baseTarget={...s},this.initialValues=n.initial?{...s}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=a,this.isControllingVariants=Fs(n),this.isVariantNode=u1(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...d}=this.scrapeMotionValuesFromProps(n,{});for(const f in d){const p=d[f];s[f]!==void 0&&Ue(p)&&(p.set(s[f],!1),as(u)&&u.add(f))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,Om.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),kv.current||fS(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:mu.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Om.delete(this.current),this.projection&&this.projection.unmount(),Kt(this.notifyUpdate),Kt(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=sr.has(t),o=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&Y.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),i=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{o(),i()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,o,i){let a,s;for(let l=0;l<mS;l++){const u=Pv[l],{isEnabled:d,Feature:f,ProjectionNode:p,MeasureLayout:h}=ci[u];p&&(a=p),d(n)&&(!this.features[u]&&f&&(this.features[u]=new f(this)),h&&(s=h))}if((this.type==="html"||this.type==="svg")&&!this.projection&&a){this.projection=new a(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:d,dragConstraints:f,layoutScroll:p,layoutRoot:h}=n;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!d||f&&kr(f),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:i,layoutScroll:p,layoutRoot:h})}return s}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ue()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Vm.length;r++){const o=Vm[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const i=t["on"+o];i&&(this.propEventSubscriptions[o]=this.on(o,i))}this.prevMotionValues=pS(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<hS;r++){const o=Td[r],i=this.props[o];(li(i)||i===!1)&&(n[o]=i)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Qr(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,o=typeof r=="string"||typeof r=="object"?(n=Ld(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&o!==void 0)return o;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!Ue(i)?i:this.initialValues[t]!==void 0&&o===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Gd),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Ev extends gS{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:o},i){let a=Mb(r,t||{},this);if(o&&(n&&(n=o(n)),r&&(r=o(r)),a&&(a=o(a))),i){Rb(this,r,a);const s=dS(this,r,a,n);n=s.transitionEnd,r=s.target}return{transition:t,transitionEnd:n,...r}}}function vS(e){return window.getComputedStyle(e)}class yS extends Ev{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(sr.has(n)){const r=_d(n);return r&&r.default||0}else{const r=vS(t),o=(m1(n)?r.getPropertyValue(n):r[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return mv(t,n)}build(t,n,r,o){Rd(t,n,r,o.transformTemplate)}scrapeMotionValuesFromProps(t,n){return Nd(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ue(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,o){w1(t,n,r,o)}}class xS extends Ev{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(sr.has(n)){const r=_d(n);return r&&r.default||0}return n=b1.has(n)?n:Pd(n),t.getAttribute(n)}measureInstanceViewportBox(){return ue()}scrapeMotionValuesFromProps(t,n){return j1(t,n)}build(t,n,r,o){Md(t,n,r,this.isSVGTag,o.transformTemplate)}renderInstance(t,n,r,o){S1(t,n,r,o)}mount(t){this.isSVGTag=$d(t.tagName),super.mount(t)}}const wS=(e,t)=>Ad(e)?new xS(t,{enableHardwareAcceleration:!1}):new yS(t,{enableHardwareAcceleration:!0}),bS={layout:{ProjectionNode:jv,MeasureLayout:gv}},SS={...Yb,...m6,...J8,...bS},R=jw((e,t)=>t6(e,t,SS,wS));function Tv(){const e=b.useRef(!1);return kd(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function jS(){const e=Tv(),[t,n]=b.useState(0),r=b.useCallback(()=>{e.current&&n(t+1)},[t]);return[b.useCallback(()=>Y.postRender(r),[r]),t]}class CS extends b.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function kS({children:e,isPresent:t}){const n=b.useId(),r=b.useRef(null),o=b.useRef({width:0,height:0,top:0,left:0});return b.useInsertionEffect(()=>{const{width:i,height:a,top:s,left:l}=o.current;if(t||!r.current||!i||!a)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${a}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),b.createElement(CS,{isPresent:t,childRef:r,sizeRef:o},b.cloneElement(e,{ref:r}))}const Fl=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:o,presenceAffectsLayout:i,mode:a})=>{const s=C1(PS),l=b.useId(),u=b.useMemo(()=>({id:l,initial:t,isPresent:n,custom:o,onExitComplete:d=>{s.set(d,!0);for(const f of s.values())if(!f)return;r&&r()},register:d=>(s.set(d,!1),()=>s.delete(d))}),i?void 0:[n]);return b.useMemo(()=>{s.forEach((d,f)=>s.set(f,!1))},[n]),b.useEffect(()=>{!n&&!s.size&&r&&r()},[n]),a==="popLayout"&&(e=b.createElement(kS,{isPresent:n},e)),b.createElement(Is.Provider,{value:u},e)};function PS(){return new Map}function ES(e){return b.useEffect(()=>()=>e(),[])}const Fn=e=>e.key||"";function TS(e,t){e.forEach(n=>{const r=Fn(n);t.set(r,n)})}function zS(e){const t=[];return b.Children.forEach(e,n=>{b.isValidElement(n)&&t.push(n)}),t}const qd=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:o,presenceAffectsLayout:i=!0,mode:a="sync"})=>{const s=b.useContext(zd).forceRender||jS()[0],l=Tv(),u=zS(e);let d=u;const f=b.useRef(new Map).current,p=b.useRef(d),h=b.useRef(new Map).current,y=b.useRef(!0);if(kd(()=>{y.current=!1,TS(u,h),p.current=d}),ES(()=>{y.current=!0,h.clear(),f.clear()}),y.current)return b.createElement(b.Fragment,null,d.map(m=>b.createElement(Fl,{key:Fn(m),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:i,mode:a},m)));d=[...d];const w=p.current.map(Fn),j=u.map(Fn),v=w.length;for(let m=0;m<v;m++){const g=w[m];j.indexOf(g)===-1&&!f.has(g)&&f.set(g,void 0)}return a==="wait"&&f.size&&(d=[]),f.forEach((m,g)=>{if(j.indexOf(g)!==-1)return;const S=h.get(g);if(!S)return;const P=w.indexOf(g);let k=m;if(!k){const C=()=>{f.delete(g);const E=Array.from(h.keys()).filter(D=>!j.includes(D));if(E.forEach(D=>h.delete(D)),p.current=u.filter(D=>{const M=Fn(D);return M===g||E.includes(M)}),!f.size){if(l.current===!1)return;s(),r&&r()}};k=b.createElement(Fl,{key:Fn(S),isPresent:!1,onExitComplete:C,custom:t,presenceAffectsLayout:i,mode:a},S),f.set(g,k)}d.splice(P,0,k)}),d=d.map(m=>{const g=m.key;return f.has(g)?m:b.createElement(Fl,{key:Fn(m),isPresent:!0,presenceAffectsLayout:i,mode:a},m)}),b.createElement(b.Fragment,null,f.size?d:d.map(m=>b.cloneElement(m)))},AS=x.section`
  background: linear-gradient(135deg, #f8f9fa 0%, #e8f5e8 100%);
  padding: 4rem 0;
  min-height: 80vh;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
    min-height: 70vh;
  }
`,RS=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;
    text-align: center;
  }
`,DS=x(R.div)`
  @media (max-width: 768px) {
    order: 2;
  }
`,MS=x(R.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`,$S=x(R.p)`
  font-size: 1.25rem;
  color: var(--text-gray);
  margin-bottom: 2rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`,NS=x(R.ul)`
  list-style: none;
  margin: 2rem 0;
  padding: 0;
`,LS=x(R.li)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: var(--text-dark);
  
  @media (max-width: 768px) {
    justify-content: center;
  }
  
  svg {
    color: var(--primary-color);
    background: rgba(46, 139, 87, 0.1);
    padding: 0.25rem;
    border-radius: 50%;
    min-width: 1.5rem;
    height: 1.5rem;
  }
`,IS=x(R.div)`
  margin-top: 2.5rem;
`,OS=x(R.div)`
  background: url('https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop') center/cover;
  min-height: 500px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  
  @media (max-width: 768px) {
    order: 1;
    min-height: 300px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(46, 139, 87, 0.1), rgba(46, 139, 87, 0.05));
    border-radius: 20px;
  }
`,VS=x(R.div)`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  background: var(--white);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  min-width: 200px;
  
  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
    left: 1rem;
    min-width: auto;
  }
`,FS=x.h4`
  color: var(--primary-color);
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
`,_S=x.p`
  color: var(--text-gray);
  margin: 0;
  font-size: 0.9rem;
`,BS=()=>{const e=["Tratamentos sem dor","Tecnologia de ponta","Ambiente acolhedor","Agendamento online 24h"],t={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},n={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6}}},r={hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1,transition:{duration:.8}}},o={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{delay:1,duration:.6}}},i=()=>{const a=encodeURIComponent("Olá! Gostaria de agendar uma consulta.");window.open(`https://wa.me/555591679300?text=${a}`,"_blank")};return c.jsx(AS,{children:c.jsxs(RS,{children:[c.jsxs(DS,{variants:t,initial:"hidden",animate:"visible",children:[c.jsx(MS,{variants:n,children:"Transformamos sorrisos há mais de 10 anos"}),c.jsx($S,{variants:n,children:"Cuidamos da saúde bucal de toda sua família com carinho, tecnologia e profissionalismo."}),c.jsx(NS,{variants:n,children:e.map((a,s)=>c.jsxs(LS,{variants:n,children:[c.jsx(i3,{}),a]},s))}),c.jsx(IS,{variants:n,children:c.jsxs(Mt,{size:"large",onClick:i,"data-testid":"cta-button",children:[c.jsx(yi,{}),"Agende sua consulta"]})})]}),c.jsx(OS,{variants:r,initial:"hidden",animate:"visible",children:c.jsxs(VS,{variants:o,initial:"hidden",animate:"visible",children:[c.jsx(FS,{children:"Atendimento 24h"}),c.jsx(_S,{children:"Emergências atendidas a qualquer hora"})]})})]})})},US=x(R.div)`
  background: var(--white);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  ${e=>e.$variant==="default"&&`
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    
    &:hover {
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      transform: translateY(-4px);
    }
  `}
  
  ${e=>e.$variant==="elevated"&&`
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    
    &:hover {
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
      transform: translateY(-6px);
    }
  `}
  
  ${e=>e.$variant==="outlined"&&`
    border: 2px solid #e1e5e9;
    box-shadow: none;
    
    &:hover {
      border-color: var(--primary-color);
      box-shadow: 0 4px 16px rgba(46, 139, 87, 0.1);
    }
  `}
  
  ${e=>e.$clickable&&`
    cursor: pointer;
  `}
  
  ${e=>e.$fullHeight&&`
    height: 100%;
  `}
`,HS=x.div`
  padding: ${e=>e.$padding||"1.5rem"};
  height: 100%;
  display: flex;
  flex-direction: column;
`,Yd=({children:e,variant:t="default",clickable:n=!1,fullHeight:r=!1,padding:o,onClick:i,className:a,...s})=>{const l={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};return c.jsx(US,{$variant:t,$clickable:n,$fullHeight:r,onClick:i,className:a,variants:l,initial:"hidden",whileInView:"visible",viewport:{once:!0},...s,children:c.jsx(HS,{$padding:o,children:e})})},WS=[{id:1,title:"Clínica Geral",description:"Cuidados essenciais para sua saúde bucal",price:"A partir de R$ 120",icon:Ns,color:"#2E8B57",features:["Limpeza","Restaurações","Tratamento de cáries"]},{id:2,title:"Ortodontia",description:"Alinhamento perfeito do seu sorriso",price:"A partir de R$ 150",icon:r1,color:"#4169E1",features:["Aparelhos fixos","Aparelhos móveis","Invisalign"]},{id:3,title:"Estética Dental",description:"Transforme seu sorriso com naturalidade",price:"A partir de R$ 680",icon:i1,color:"#FF6B35",features:["Clareamento","Facetas","Harmonização"]},{id:4,title:"Implantes",description:"Recupere a função e estética dos dentes",price:"A partir de R$ 200",icon:l3,color:"#8A2BE2",features:["Implante unitário","Prótese total","Carga imediata"]}],GS=x.section`
  padding: 5rem 0;
  background: var(--white);
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`,qS=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,YS=x.div`
  text-align: center;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`,KS=x(R.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,QS=x(R.p)`
  font-size: 1.1rem;
  color: var(--text-gray);
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,XS=x.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,zv=x(Yd)`
  text-align: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-8px);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${e=>e.$color};
  }
`,ZS=x.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${e=>`${e.$color}15`};
  color: ${e=>e.$color};
  font-size: 2rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  
  ${zv}:hover & {
    transform: scale(1.1);
    background: ${e=>e.$color};
    color: white;
  }
`,JS=x.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
`,ej=x.p`
  color: var(--text-gray);
  margin-bottom: 1rem;
  line-height: 1.6;
`,tj=x.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
`,nj=x.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  font-size: 0.9rem;
  color: var(--text-gray);
  
  li {
    padding: 0.25rem 0;
    
    &::before {
      content: '✓';
      color: var(--primary-color);
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }
`,rj=x(R.div)`
  text-align: center;
  margin-top: 3rem;
`,oj=x.button`
  background: none;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--primary-color);
    color: white;
    transform: translateY(-2px);
  }
`,ij=()=>{const e=md(),t={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},n={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6}}},r=i=>{e(`/servicos#${i}`)},o=()=>{e("/servicos")};return c.jsx(GS,{children:c.jsxs(qS,{children:[c.jsxs(YS,{children:[c.jsx(KS,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:"Nossos Serviços"}),c.jsx(QS,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1},children:"Oferecemos tratamentos completos para toda sua família com tecnologia avançada e cuidado personalizado"})]}),c.jsx(R.div,{variants:t,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:c.jsx(XS,{children:WS.map(i=>{const a=i.icon;return c.jsxs(zv,{$color:i.color,variant:"elevated",clickable:!0,onClick:()=>r(i.id),variants:n,"data-testid":`service-card-${i.id}`,children:[c.jsx(ZS,{$color:i.color,children:c.jsx(a,{})}),c.jsx(JS,{children:i.title}),c.jsx(ej,{children:i.description}),c.jsx(tj,{"data-testid":`service-price-${i.id}`,children:i.price}),c.jsx(nj,{children:i.features.map((s,l)=>c.jsx("li",{children:s},l))})]},i.id)})})}),c.jsx(rj,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},children:c.jsx(oj,{onClick:o,children:"Ver todos os serviços"})})]})})},aj=[{id:1,name:"Maria Santos",age:34,text:"Depois de anos com medo de dentista, a Dra. Maria me devolveu a confiança. Tratamento sem dor e resultado incrível!",rating:5,image:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"},{id:2,name:"Roberto Silva",subtitle:"pai do Lucas",text:"Meu filho adorou a consulta. Ambiente super acolhedor e profissionais que sabem lidar com crianças.",rating:5,image:"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"},{id:3,name:"Ana Costa",age:45,text:"Fiz meu implante aqui e o resultado superou expectativas. Equipe técnica excepcional!",rating:5,image:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"}],sj=x.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e8f5e8 100%);
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`,lj=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,cj=x.div`
  text-align: center;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`,uj=x(R.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,dj=x(R.p)`
  font-size: 1.1rem;
  color: var(--text-gray);
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,fj=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,pj=x(Yd)`
  position: relative;
  text-align: left;
  height: 100%;
`,mj=x.div`
  position: absolute;
  top: -10px;
  left: 1.5rem;
  background: var(--primary-color);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`,hj=x.p`
  font-size: 1.1rem;
  color: var(--text-dark);
  line-height: 1.6;
  margin: 1.5rem 0 2rem 0;
  font-style: italic;
  position: relative;
`,gj=x.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
`,vj=x.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), #45a049);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1.2rem;
`,yj=x.div`
  flex: 1;
`,xj=x.h4`
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-dark);
`,wj=x.p`
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-gray);
`,bj=x.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 0.5rem;
`,Sj=x(i1)`
  color: #ffd700;
  font-size: 1rem;
`,jj=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
  text-align: center;
`,Cj=x(R.div)`
  background: var(--white);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`,kj=x.div`
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`,Pj=x.div`
  font-size: 1.1rem;
  color: var(--text-gray);
  font-weight: 500;
`,Ej=()=>{const e={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},t={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6}}},n=i=>i.split(" ").map(a=>a[0]).join("").toUpperCase(),r=i=>Array.from({length:5},(a,s)=>c.jsx(Sj,{"data-testid":`star-${s}`},s)),o=[{number:"10+",label:"Anos de Experiência"},{number:"5.000+",label:"Pacientes Atendidos"},{number:"98%",label:"Satisfação dos Clientes"},{number:"24h",label:"Atendimento Emergencial"}];return c.jsx(sj,{children:c.jsxs(lj,{children:[c.jsxs(cj,{children:[c.jsx(uj,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:"O que nossos pacientes dizem"}),c.jsx(dj,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1},children:"Depoimentos reais de pessoas que transformaram seus sorrisos conosco"})]}),c.jsx(R.div,{variants:e,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:c.jsx(fj,{children:aj.map((i,a)=>c.jsxs(pj,{variant:"elevated",fullHeight:!0,variants:t,"data-testid":`testimonial-${i.id}`,children:[c.jsx(mj,{children:c.jsx(v3,{})}),c.jsxs(hj,{"data-testid":`testimonial-text-${i.id}`,children:['"',i.text,'"']}),c.jsxs(gj,{children:[c.jsx(vj,{children:n(i.name)}),c.jsxs(yj,{children:[c.jsx(xj,{"data-testid":`patient-name-${i.id}`,children:i.name}),c.jsxs(wj,{children:[i.age&&`${i.age} anos`,i.subtitle&&i.subtitle]}),c.jsx(bj,{"data-testid":`rating-${i.id}`,children:r(i.rating)})]})]})]},i.id))})}),c.jsx(jj,{children:o.map((i,a)=>c.jsxs(Cj,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:a*.1},children:[c.jsx(kj,{children:i.number}),c.jsx(Pj,{children:i.label})]},a))})]})})},Tj=x.section`
  padding: 5rem 0;
  background: var(--white);
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`,zj=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,Aj=x.div`
  text-align: center;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`,Rj=x(R.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Dj=x(R.p)`
  font-size: 1.1rem;
  color: var(--text-gray);
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Mj=x.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,Eo=x(Yd)`
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 300px;
  padding: 2rem 1.5rem;
`,Yi=x.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
`,_l=x.div`
  margin-top: auto;
  padding-top: 1rem;
`,Ki=x.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: ${e=>`${e.$color}15`};
  color: ${e=>e.$color};
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  
  ${Eo}:hover & {
    transform: scale(1.1);
    background: ${e=>e.$color};
    color: white;
  }
`,Qi=x.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1rem;
`,Bl=x.p`
  color: var(--text-gray);
  line-height: 1.6;
  margin-bottom: 0;
`,Ul=x.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: ${e=>e.$color};
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  min-width: 140px;
  text-align: center;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${e=>`${e.$color}40`};
  }
`,$j=x.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  
  li {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    border-bottom: 1px solid #f0f0f0;
    
    &:last-child {
      border-bottom: none;
    }
  }
`,Nj=x.span`
  font-weight: 500;
  color: var(--text-dark);
`,Lj=x.span`
  color: var(--text-gray);
`,Ij=x(R.div)`
  background: linear-gradient(135deg, #ff4757, #ff3742);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  margin-top: 3rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    animation: shine 3s infinite;
  }
  
  @keyframes shine {
    0% { left: -100%; }
    100% { left: 100%; }
  }
`,Oj=x.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`,Vj=x.p`
  margin-bottom: 1.5rem;
  opacity: 0.9;
`,Fj=x.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: white;
  color: #ff4757;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
`,_j=()=>{const e={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},t={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6}}},n=()=>{const a=encodeURIComponent("Olá! Gostaria de agendar uma consulta.");window.open(`https://wa.me/555591679300?text=${a}`,"_blank")},r=()=>{const a=encodeURIComponent("Olá! Preciso de atendimento de emergência.");window.open(`https://wa.me/555591679300?text=${a}`,"_blank")},o=()=>{window.open("https://maps.google.com/?q=Av.+Brigadeiro+Faria+Lima+3477+Itaim+Bibi+São+Paulo","_blank")},i=[{day:"Segunda à Sexta",time:"8h às 18h"},{day:"Sábado",time:"8h às 14h"},{day:"Domingo",time:"Fechado"},{day:"Emergências",time:"24h"}];return c.jsx(Tj,{children:c.jsxs(zj,{children:[c.jsxs(Aj,{children:[c.jsx(Rj,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:"Como nos encontrar"}),c.jsx(Dj,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1},children:"Estamos sempre prontos para cuidar do seu sorriso"})]}),c.jsx(R.div,{variants:e,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:c.jsxs(Mj,{children:[c.jsx(Eo,{variants:t,variant:"elevated",children:c.jsxs(Yi,{children:[c.jsxs("div",{children:[c.jsx(Ki,{$color:"#2E8B57",children:c.jsx(Cd,{})}),c.jsx(Qi,{children:"Localização"}),c.jsxs(Bl,{children:["Rua das Flores, 123",c.jsx("br",{}),"Vila Madalena, São Paulo - SP",c.jsx("br",{}),"CEP: 05435-000"]})]}),c.jsx(_l,{children:c.jsxs(Ul,{$color:"#2E8B57",onClick:o,href:"#",children:[c.jsx(x3,{}),"Como chegar"]})})]})}),c.jsx(Eo,{variants:t,variant:"elevated",children:c.jsxs(Yi,{children:[c.jsxs("div",{children:[c.jsx(Ki,{$color:"#4169E1",children:c.jsx(Ja,{})}),c.jsx(Qi,{children:"Telefone"}),c.jsxs(Bl,{children:["Central de Atendimento",c.jsx("br",{}),"(55) 99 9167-9300",c.jsx("br",{}),"Atendimento comercial"]})]}),c.jsx(_l,{children:c.jsxs(Ul,{$color:"#4169E1",href:"tel:+555591679300",children:[c.jsx(Ja,{}),"Ligar agora"]})})]})}),c.jsx(Eo,{variants:t,variant:"elevated",children:c.jsxs(Yi,{children:[c.jsxs("div",{children:[c.jsx(Ki,{$color:"#25D366",children:c.jsx(Bt,{})}),c.jsx(Qi,{children:"WhatsApp"}),c.jsxs(Bl,{children:["Agendamentos e dúvidas",c.jsx("br",{}),"(55) 99 9167-9300",c.jsx("br",{}),"Resposta rápida"]})]}),c.jsx(_l,{children:c.jsxs(Ul,{$color:"#25D366",onClick:n,href:"#",children:[c.jsx(Bt,{}),"WhatsApp"]})})]})}),c.jsx(Eo,{variants:t,variant:"elevated",children:c.jsx(Yi,{children:c.jsxs("div",{children:[c.jsx(Ki,{$color:"#FF6B35",children:c.jsx(Za,{})}),c.jsx(Qi,{children:"Horários"}),c.jsx($j,{children:i.map((a,s)=>c.jsxs("li",{children:[c.jsx(Nj,{children:a.day}),c.jsx(Lj,{children:a.time})]},s))})]})})})]})}),c.jsxs(Ij,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},children:[c.jsx(Oj,{children:"Emergência Dental?"}),c.jsx(Vj,{children:"Atendemos emergências 24 horas por dia, 7 dias por semana"}),c.jsxs(Fj,{onClick:r,href:"#",children:[c.jsx(Bt,{}),"Emergência WhatsApp"]})]})]})})},Av=e1`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
`,Bj=x(R.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  background: #25D366;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 4px 16px rgba(37, 211, 102, 0.3);
  animation: ${Av} 2s infinite;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
    animation: none;
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (max-width: 768px) {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 56px;
    height: 56px;
  }
  
  svg {
    color: white;
    font-size: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
  }
`,Uj=x(R.div)`
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  background: var(--text-dark);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  white-space: nowrap;
  font-size: 0.9rem;
  font-weight: 500;
  margin-right: 1rem;
  opacity: ${e=>e.$show?1:0};
  visibility: ${e=>e.$show?"visible":"hidden"};
  transition: all 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-left-color: var(--text-dark);
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`,Hj=x.div`
  position: absolute;
  top: -2px;
  right: -2px;
  width: 12px;
  height: 12px;
  background: #ff4757;
  border: 2px solid white;
  border-radius: 50%;
  animation: ${Av} 1.5s infinite;
`,Wj=({showTooltip:e=!0,message:t="Olá! Gostaria de agendar uma consulta.",showNotification:n=!1})=>{const r=()=>{const a=encodeURIComponent(t);window.open(`https://wa.me/555591679300?text=${a}`,"_blank")},o={hidden:{opacity:0,scale:0,y:100},visible:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:260,damping:20,delay:1}}},i={hidden:{opacity:0,x:10},visible:{opacity:1,x:0,transition:{delay:2}}};return c.jsxs(Bj,{onClick:r,variants:o,initial:"hidden",animate:"visible",whileHover:{scale:1.1},whileTap:{scale:.95},"data-testid":"whatsapp-float","aria-label":"Contato via WhatsApp",children:[c.jsx(Bt,{}),n&&c.jsx(Hj,{}),e&&c.jsx(Uj,{variants:i,initial:"hidden",animate:"visible",$show:!0,children:"Fale conosco!"})]})},Gj=()=>c.jsxs(Dn,{children:[c.jsx(BS,{}),c.jsx(ij,{}),c.jsx(Ej,{}),c.jsx(_j,{}),c.jsx(Wj,{})]}),qj=e=>`/clinica-sorriso-perfeito${e}`,ls=e=>qj(`/gallery/${e}`),Yj=[{id:1,name:"Dra. Maria Santos",specialty:"Ortodontia e Implantodontia",education:"USP, Especialização em Harmonização Orofacial",image:ls("Dra. Maria.jpg"),description:"Especialista em transformar sorrisos com mais de 15 anos de experiência em tratamentos ortodônticos e implantológicos."},{id:2,name:"Dr. João Silva",specialty:"Endodontia e Estética",education:"UNIFESP, Pós-graduação em Estética Dental",image:ls("Dr. João.jpg"),description:"Dedicado aos tratamentos endodônticos e estéticos, sempre utilizando as mais modernas técnicas da odontologia."}],Kj=["Tecnologia de ponta (scanner intraoral, radiografia digital)","Ambiente climatizado e acolhedor","Equipe especializada e atualizada","Atendimento humanizado","Protocolos de biossegurança rigorosos","Planos de pagamento flexíveis e facilitados"],Qj=()=>c.jsx("section",{className:"team-section",children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"section-title",children:"Nossa Equipe"}),c.jsx("div",{className:"team-grid",children:Yj.map(e=>c.jsxs("div",{className:"team-card",children:[c.jsx("div",{className:"team-card-image",children:c.jsx("img",{src:e.image,alt:e.name,onError:t=>{t.target.src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face"}})}),c.jsxs("div",{className:"team-card-content",children:[c.jsx("h3",{className:"team-member-name",children:e.name}),c.jsxs("p",{className:"team-member-specialty",children:[c.jsx("strong",{children:"Especialista em:"})," ",e.specialty]}),c.jsxs("p",{className:"team-member-education",children:[c.jsx("strong",{children:"Formação:"})," ",e.education]}),c.jsx("p",{className:"team-member-description",children:e.description})]})]},e.id))}),c.jsxs("div",{className:"differentials-section",children:[c.jsx("h3",{className:"differentials-title",children:"Nossos Diferenciais"}),c.jsx("ul",{className:"differentials-list",children:Kj.map((e,t)=>c.jsxs("li",{className:"differential-item",children:[c.jsx("span",{className:"differential-icon",children:"✓"}),e]},t))})]})]})}),Xj=()=>c.jsx(Dn,{children:c.jsxs("div",{className:"about-page",children:[c.jsx("div",{className:"hero-section hero-about",children:c.jsx("div",{className:"container",children:c.jsxs("div",{className:"hero-content",children:[c.jsx("h1",{className:"hero-title",children:"Sobre a Clínica Sorriso Perfeito"}),c.jsx("p",{className:"hero-subtitle",children:"Cuidando do seu sorriso com excelência e humanização desde 2014"})]})})}),c.jsx("section",{className:"our-story",children:c.jsx("div",{className:"container",children:c.jsxs("div",{className:"story-content",children:[c.jsx("h2",{className:"section-title",children:"Nossa História"}),c.jsxs("div",{className:"story-text",children:[c.jsx("p",{children:"A Clínica Sorriso Perfeito nasceu em 2014 do sonho da Dra. Maria de democratizar o acesso aos cuidados odontológicos de qualidade na Vila Madalena."}),c.jsx("p",{children:"Com mais de 15 anos de experiência e centenas de sorrisos transformados, nossa missão é proporcionar tratamentos odontológicos humanizados, utilizando tecnologia de ponta em um ambiente acolhedor."})]})]})})}),c.jsx(Qj,{}),c.jsx("section",{className:"mission-vision",children:c.jsx("div",{className:"container",children:c.jsxs("div",{className:"mission-vision-grid",children:[c.jsxs("div",{className:"mission-card",children:[c.jsx("div",{className:"card-icon",children:c.jsx(r3,{})}),c.jsx("h3",{children:"Nossa Missão"}),c.jsx("p",{children:"Proporcionar tratamentos odontológicos de excelência, com atendimento humanizado e tecnologia de ponta, transformando sorrisos e vidas."})]}),c.jsxs("div",{className:"vision-card",children:[c.jsx("div",{className:"card-icon",children:c.jsx(f3,{})}),c.jsx("h3",{children:"Nossa Visão"}),c.jsx("p",{children:"Ser referência em odontologia na Vila Madalena, reconhecida pela qualidade dos tratamentos e pela satisfação dos nossos pacientes."})]}),c.jsxs("div",{className:"values-card",children:[c.jsx("div",{className:"card-icon",children:c.jsx(m3,{})}),c.jsx("h3",{children:"Nossos Valores"}),c.jsx("p",{children:"Ética, transparência, excelência técnica, atendimento humanizado e compromisso com a saúde bucal dos nossos pacientes."})]})]})})}),c.jsx("section",{className:"cta-section",children:c.jsx("div",{className:"container",children:c.jsxs("div",{className:"cta-content",children:[c.jsx("h2",{children:"Pronto para transformar seu sorriso?"}),c.jsx("p",{children:"Agende sua consulta e descubra como podemos ajudar você a ter o sorriso dos seus sonhos."}),c.jsxs("div",{className:"cta-buttons",children:[c.jsx("a",{href:"/contato",className:"btn btn-primary",children:"Agendar Consulta"}),c.jsx("a",{href:"/servicos",className:"btn btn-secondary",children:"Ver Serviços"})]})]})})})]})}),Zj=x(R.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 2rem;
`,Jj=x(R.div)`
  background: white;
  border-radius: 20px;
  padding: 0;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.2);
`,eC=x.div`
  background: linear-gradient(135deg, var(--primary-color), #3a9d66);
  color: white;
  padding: 2rem;
  border-radius: 20px 20px 0 0;
  position: relative;
`,tC=x.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
`,nC=x.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`,rC=x.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-color);
`,oC=x.div`
  padding: 2rem;
`,iC=x.p`
  color: var(--text-light);
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1.125rem;
`,aC=x.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`,sC=x.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }

  &::before {
    content: '✓';
    color: var(--primary-color);
    font-weight: bold;
    font-size: 1.125rem;
  }
`,lC=x.button`
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    background: #246342;
    transform: translateY(-2px);
  }
`,cC=({isOpen:e,onClose:t,service:n,category:r})=>{b.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e]);const o=s=>{s.target===s.currentTarget&&t()},i=(s,l)=>({"Consulta + Limpeza":{description:"Consulta completa com avaliação detalhada e limpeza profissional dos dentes.",features:["Exame clínico completo","Radiografias se necessário","Limpeza com ultrassom","Orientações de higiene bucal"]},"Restauração (resina)":{description:"Restauração estética com resina composta para tratamento de cáries.",features:["Material estético de alta qualidade","Procedimento indolor","Cor personalizada","Durabilidade garantida"]},"Aplicação de flúor":{description:"Aplicação preventiva de flúor para fortalecimento do esmalte dentário.",features:["Prevenção de cáries","Fortalecimento do esmalte","Procedimento rápido e indolor","Proteção duradoura"]},"Clareamento dental":{description:"Procedimento para clarear os dentes de forma segura e eficaz.",features:["Clareamento com gel profissional","Resultados visíveis na primeira sessão","Acompanhamento pós-tratamento","Kit para manutenção"]},"Gengivoplastia estética":{description:"Cirurgia periodontal para correção estética da gengiva.",features:["Melhora do contorno gengival","Sorriso mais harmônico","Procedimento minimamente invasivo","Recuperação rápida"]},"Aparelho metálico":{description:"Tratamento ortodôntico com aparelho fixo metálico tradicional.",features:["Consultas mensais incluídas","Ajustes e manutenções","Acompanhamento completo","Resultado garantido"]},"Contenção ortodôntica":{description:"Aparelho de contenção para manutenção dos resultados ortodônticos.",features:["Mantém dentes alinhados","Removível ou fixo","Confecção personalizada","Acompanhamento incluído"]},"Implante unitário":{description:"Implante de titânio para substituição de um dente perdido.",features:["Implante de titânio importado","Cirurgia minimamente invasiva","Acompanhamento pós-cirúrgico","Garantia do implante"]},"Levantamento de seio":{description:"Procedimento para aumentar volume ósseo na região posterior superior.",features:["Possibilita implante em casos complexos","Técnica avançada","Material biocompatível","Acompanhamento especializado"]}})[s]||{description:`Serviço profissional de ${l.toLowerCase()} realizado com os mais altos padrões de qualidade.`,features:["Atendimento personalizado","Equipamentos modernos","Profissionais especializados","Acompanhamento completo"]};if(!n)return null;const a=i(n.name,r);return c.jsx(qd,{children:e&&c.jsx(Zj,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:o,children:c.jsxs(Jj,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{type:"spring",stiffness:300,damping:30},children:[c.jsxs(eC,{children:[c.jsx(tC,{onClick:t,children:c.jsx(xi,{})}),c.jsx(nC,{children:n.name}),c.jsx(rC,{children:n.price})]}),c.jsxs(oC,{children:[c.jsx(iC,{children:a.description}),c.jsx(aC,{children:a.features.map((s,l)=>c.jsx(sC,{children:s},l))}),c.jsx(lC,{onClick:()=>{const s=`Olá! Gostaria de saber mais sobre ${n.name} (${n.price}).`;window.open(`https://wa.me/555591679300?text=${encodeURIComponent(s)}`,"_blank")},children:"Agendar pelo WhatsApp"})]})]})})})},uC={clinicaGeral:{title:"Clínica Geral",services:[{name:"Consulta + Limpeza",price:"R$ 180"},{name:"Restauração (resina)",price:"R$ 250"},{name:"Extração simples",price:"R$ 200"},{name:"Canal (por raiz)",price:"R$ 550"},{name:"Tratamento de gengiva",price:"R$ 380"},{name:"Aplicação de flúor",price:"R$ 120"}]},ortodontia:{title:"Ortodontia",services:[{name:"Consulta ortodôntica",price:"R$ 150"},{name:"Aparelho metálico",price:"R$ 3.800"},{name:"Aparelho estético",price:"R$ 4.900"},{name:"Aparelho invisível",price:"R$ 8.500"},{name:"Manutenção mensal",price:"R$ 180"},{name:"Contenção ortodôntica",price:"R$ 650"}]},esteticaDental:{title:"Estética Dental",services:[{name:"Clareamento dental",price:"R$ 680"},{name:"Faceta de resina",price:"R$ 450"},{name:"Faceta de porcelana",price:"R$ 1.800"},{name:"Harmonização orofacial",price:"R$ 1.200"},{name:"Lente de contato dental",price:"R$ 2.200"},{name:"Gengivoplastia estética",price:"R$ 950"}]},implantes:{title:"Implantes",services:[{name:"Implante unitário",price:"R$ 2.800"},{name:"Prótese sobre implante",price:"R$ 1.900"},{name:"Enxerto ósseo",price:"R$ 2.400"},{name:"Consulta especializada",price:"R$ 200"},{name:"Protocolo total",price:"R$ 22.000"},{name:"Levantamento de seio",price:"R$ 3.200"}]}},Xi={validUntil:"dezembro/2024",financing:"Parcelamento em até 12x sem juros",insurance:["Unimed","Bradesco Saúde","SulAmérica"],customQuote:"Orçamento personalizado disponível"},dC=()=>{const[e,t]=b.useState(null),[n,r]=b.useState(""),[o,i]=b.useState(!1),a=(l,u)=>{t(l),r(u),i(!0)},s=()=>{i(!1),t(null),r("")};return c.jsxs(Dn,{children:[c.jsxs("div",{className:"services-page",children:[c.jsx("div",{className:"hero-section hero-services",children:c.jsx("div",{className:"container",children:c.jsxs(R.div,{className:"hero-content",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[c.jsx(R.h1,{className:"hero-title",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:"Nossos Serviços"}),c.jsx(R.p,{className:"hero-subtitle",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:"Tratamentos completos com a mais alta qualidade e tecnologia de ponta"})]})})}),c.jsx("section",{className:"services-section",children:c.jsx("div",{className:"container",children:Object.entries(uC).map(([l,u],d)=>c.jsxs(R.div,{className:"service-category",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.6,delay:d*.2+.6},children:[c.jsx(R.h2,{className:"category-title",initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.5,delay:d*.2+.8},children:u.title}),c.jsx("div",{className:"services-grid",children:u.services.map((f,p)=>c.jsxs(R.div,{className:"service-card",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.4,delay:d*.2+p*.1+1},whileHover:{scale:1.02,transition:{duration:.2}},children:[c.jsx("div",{className:"service-info",children:c.jsx("h3",{className:"service-name",children:f.name})}),c.jsx("span",{className:"service-price",children:f.price}),c.jsx(R.button,{className:"btn btn-outline btn-small",onClick:()=>a(f,u.title),whileHover:{scale:1.05},whileTap:{scale:.95},children:"Saiba mais"})]},p))})]},l))})}),c.jsx(R.section,{className:"payment-info",initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:2},children:c.jsx("div",{className:"container",children:c.jsx(R.div,{className:"payment-info-grid",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:2.2},children:[{icon:u3,title:"Parcelamento",content:Xi.financing},{icon:h3,title:"Convênios",content:Xi.insurance.map((l,u)=>c.jsx("span",{className:"insurance-item",children:l},u))},{icon:p3,title:"Orçamento",content:Xi.customQuote},{icon:yi,title:"Preços válidos",content:`Até ${Xi.validUntil}`}].map((l,u)=>c.jsxs(R.div,{className:"info-card",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.5,delay:2.4+u*.1},whileHover:{scale:1.05,transition:{duration:.2}},children:[c.jsx(R.div,{className:"info-icon",initial:{scale:0},animate:{scale:1},transition:{duration:.3,delay:2.6+u*.1,type:"spring",stiffness:200},children:c.jsx(l.icon,{})}),c.jsx("h3",{children:l.title}),l.title==="Convênios"?c.jsx("div",{className:"insurance-list",children:l.content}):c.jsx("p",{children:l.content})]},u))})})}),c.jsx(R.section,{className:"services-cta",initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:3},children:c.jsx("div",{className:"container",children:c.jsxs(R.div,{className:"cta-content",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:3.2},children:[c.jsx(R.h2,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:3.4},children:"Interessado em algum tratamento?"}),c.jsx(R.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:3.6},children:"Entre em contato conosco para agendar uma consulta e receber um orçamento personalizado."}),c.jsxs(R.div,{className:"cta-buttons",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:3.8},children:[c.jsx(R.a,{href:"/contato",className:"btn btn-primary",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Agendar Consulta"}),c.jsx(R.a,{href:"https://wa.me/555591679300?text=Olá! Gostaria de saber mais sobre os serviços da clínica.",className:"btn btn-whatsapp",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},children:"WhatsApp"})]})]})})}),c.jsx(R.section,{className:"testimonials-preview",initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:4},children:c.jsxs("div",{className:"container",children:[c.jsx(R.h2,{className:"section-title",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:4.2},children:"O que nossos pacientes dizem"}),c.jsx(R.div,{className:"testimonials-grid",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:4.4},children:[{stars:"★★★★★",text:"Excelente atendimento! A Dra. Maria é muito atenciosa e o resultado do meu clareamento ficou perfeito.",author:"- Maria Silva"},{stars:"★★★★★",text:"Profissionais muito qualificados. Fiz um implante com o Dr. João e superou minhas expectativas.",author:"- João Santos"},{stars:"★★★★★",text:"Ambiente muito acolhedor e tecnologia de ponta. Recomendo para toda a família!",author:"- Ana Costa"}].map((l,u)=>c.jsxs(R.div,{className:"testimonial-card",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.5,delay:4.6+u*.2},whileHover:{scale:1.03,transition:{duration:.2}},children:[c.jsx(R.div,{className:"testimonial-stars",initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.3,delay:4.8+u*.2,type:"spring"},children:l.stars}),c.jsxs("p",{className:"testimonial-text",children:['"',l.text,'"']}),c.jsx("div",{className:"testimonial-author",children:l.author})]},u))})]})})]}),c.jsx(cC,{isOpen:o,onClose:s,service:e,category:n})]})},Rv=e=>!e||!e.trim()?"Nome é obrigatório":e.trim().split(/\s+/).length<2?"Nome deve conter pelo menos 2 palavras":e.length<2?"Nome deve ter pelo menos 2 caracteres":"",Dv=e=>!e||!e.trim()?"Email é obrigatório":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)?"":"Email inválido",Mv=e=>!e||!e.trim()?"Telefone é obrigatório":e.replace(/\D/g,"").length!==11?"Telefone deve ter 11 dígitos":"",$v=e=>{if(!e)return"Data é obrigatória";const t=new Date(e),n=new Date;return n.setHours(0,0,0,0),t<n?"Data não pode ser no passado":t.getDay()===0?"Não atendemos aos domingos":""},cs=(e,t)=>!e||typeof e=="string"&&!e.trim()?`${t} é obrigatório`:"",fC=e=>{const t={},n=Rv(e.name);n&&(t.name=n);const r=Dv(e.email);r&&(t.email=r);const o=Mv(e.phone);o&&(t.phone=o);const i=$v(e.date);i&&(t.date=i);const a=cs(e.time,"Horário");a&&(t.time=a);const s=cs(e.service,"Tipo de consulta");return s&&(t.service=s),{errors:t,isValid:Object.keys(t).length===0}},pC=(e={},t={})=>{const[n,r]=b.useState(e),[o,i]=b.useState({}),[a,s]=b.useState({}),[l,u]=b.useState(!1),d=b.useCallback((k,C)=>{if(r(E=>({...E,[k]:C})),a[k]&&o[k]){const E=t[k];if(E){const D=E(C);i(M=>({...M,[k]:D}))}}},[a,o,t]),f=b.useCallback((k,C=!0)=>{s(E=>({...E,[k]:C}))},[]),p=b.useCallback((k,C)=>{i(E=>({...E,[k]:C}))},[]),h=b.useCallback((k,C)=>{const E=t[k];if(E){const D=E(C);return p(k,D),D}return""},[t,p]),y=b.useCallback(()=>{const k=fC(n);return i(k.errors),k},[n]),w=b.useCallback(k=>C=>{d(k,C)},[d]),j=b.useCallback(k=>()=>{f(k,!0),h(k,n[k])},[f,h,n]),v=b.useCallback(k=>{const C=Object.keys(k)[0];if(C){const E=document.querySelector(`[name="${C}"], [data-field="${C}"]`);E&&(E.scrollIntoView({behavior:"smooth",block:"center"}),E.focus())}},[]),m=b.useCallback(k=>{const C=document.querySelector(".form-error-alert");C&&C.remove();const E=document.createElement("div");E.className="form-error-alert",E.style.cssText=`
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #e74c3c, #c0392b);
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(231, 76, 60, 0.3);
      z-index: 10000;
      font-weight: 600;
      max-width: 400px;
      animation: slideInAlert 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      border: 1px solid rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      font-family: inherit;
    `,E.innerHTML=`
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <div style="font-size: 1.25rem;">⚠️</div>
        <div>${k}</div>
      </div>
    `,document.body.appendChild(E),setTimeout(()=>{E.parentNode&&(E.style.animation="slideInAlert 0.3s reverse",setTimeout(()=>E.remove(),300))},4e3)},[]),g=b.useCallback(k=>async C=>{C&&C.preventDefault();const E=Object.keys(n).reduce((M,oe)=>(M[oe]=!0,M),{});s(E);const D=y();if(D.isValid){u(!0);try{await k(n)}catch(M){console.error("Form submission error:",M)}finally{u(!1)}}else{v(D.errors);const M=Object.values(D.errors)[0];m(`Erro no formulário: ${M}`)}},[n,y,v,m]),S=b.useCallback(()=>{r(e),i({}),s({}),u(!1)},[e]),P=Object.keys(o).length===0&&Object.keys(a).length>0;return b.useEffect(()=>{const k=localStorage.getItem("appointmentForm");if(k)try{const C=JSON.parse(k);r(E=>({...E,...C}))}catch(C){console.error("Error parsing stored form data:",C)}},[]),b.useEffect(()=>{Object.keys(n).length>0&&Object.values(n).some(k=>k)&&localStorage.setItem("appointmentForm",JSON.stringify(n))},[n]),{values:n,errors:o,touched:a,isSubmitting:l,isValid:P,setValue:d,setFieldTouched:f,setFieldError:p,handleChange:w,handleBlur:j,handleSubmit:g,resetForm:S,validateField:h,validateAllFields:y}},mC=e=>{if(!e)return"";const t=e.replace(/\D/g,"");return t.length<=2?`(${t}`:t.length<=7?`(${t.slice(0,2)}) ${t.slice(2)}`:t.length<=11?`(${t.slice(0,2)}) ${t.slice(2,7)}-${t.slice(7)}`:`(${t.slice(0,2)}) ${t.slice(2,7)}-${t.slice(7,11)}`},Kd=e=>!e&&e!==0?"R$ 0,00":new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e),hC=(e,t)=>!e||!t?"":`${new Date(e).toLocaleDateString("pt-BR",{weekday:"long",year:"numeric",month:"long",day:"numeric"})} às ${t}`,Nv=e=>e?e.toLowerCase().split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" "):"",vo="555591679300",Lv=()=>{const e=b.useCallback(o=>{const{name:i,phone:a,email:s,service:l,servicePrice:u,date:d,time:f,professional:p,isReturningPatient:h,insurance:y,observations:w,birthDate:j}=o,v=p==="no-preference"?"Sem preferência":p==="maria"?"Dra. Maria":"Dr. João",m=y==="none"?"Não possui":y,g=h?"Sim":"Não",S=`AGENDAMENTO DE CONSULTA

Nome: ${Nv(i)}
Telefone: ${a}
Email: ${s}
${j?`Nascimento: ${new Date(j).toLocaleDateString("pt-BR")}
`:""}
Tipo: ${l}
Data: ${hC(d,f)}
Profissional: ${v}
Valor: ${Kd(u)}
Convenio: ${m}
Ja e paciente: ${g}
${w?`Observacoes: ${w}
`:""}
Aguardo confirmacao!`,P=`https://wa.me/${vo}?text=${encodeURIComponent(S)}`;window.open(P,"_blank")},[]),t=b.useCallback(o=>{const{name:i,phone:a,email:s,subject:l,message:u}=o,d=`Olá! Recebi seu contato através do site.

*Nome:* ${i}
*Email:* ${s}
*Telefone:* ${a}
*Assunto:* ${l}
*Mensagem:* ${u}`,f=`https://wa.me/${vo}?text=${encodeURIComponent(d)}`;window.open(f,"_blank")},[]),n=b.useCallback(()=>{const i=`https://wa.me/${vo}?text=${encodeURIComponent("EMERGÊNCIA - Preciso de atendimento urgente")}`;window.open(i,"_blank")},[]),r=b.useCallback((o="Olá! Gostaria de agendar uma consulta.")=>{const i=`https://wa.me/${vo}?text=${encodeURIComponent(o)}`;window.open(i,"_blank")},[]);return{sendAppointment:e,sendContact:t,sendEmergency:n,sendGeneralInquiry:r,whatsappNumber:vo}};var Iv={exports:{}},gC="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",vC=gC,yC=vC;function Ov(){}function Vv(){}Vv.resetWarningCache=Ov;var xC=function(){function e(r,o,i,a,s,l){if(l!==yC){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Vv,resetWarningCache:Ov};return n.PropTypes=n,n};Iv.exports=xC();var wC=Iv.exports;const H=di(wC),dn=({label:e,type:t="text",placeholder:n,value:r,onChange:o,onBlur:i,error:a,required:s=!1,mask:l,name:u,maxLength:d,...f})=>{const p=b.useId(),[h,y]=b.useState(!1),w=(m,g)=>{if(!g)return m;if(g==="phone"){const P=m.replace(/\D/g,"").substring(0,11).match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);if(P)return P[2]?P[3]?`(${P[1]}) ${P[2]}-${P[3]}`:`(${P[1]}) ${P[2]}`:P[1]}return m},j=m=>{let g=m.target.value;l&&(g=w(g,l)),o(g)},v=m=>{y(!0),i&&i(m)};return c.jsxs("div",{className:"input-group",children:[e&&c.jsxs("label",{htmlFor:p,className:"input-label",children:[e,s&&c.jsx("span",{className:"required",children:"*"})]}),c.jsx("input",{id:p,name:u,type:t,placeholder:n,value:r,onChange:j,onBlur:v,className:`input ${a?"input-error":""}`,required:s,maxLength:d,autoComplete:"off",...f}),a&&c.jsx("span",{className:"error-message",children:a})]})};dn.propTypes={label:H.string,type:H.string,placeholder:H.string,value:H.string.isRequired,onChange:H.func.isRequired,onBlur:H.func,error:H.string,required:H.bool,mask:H.string,name:H.string,maxLength:H.number};const us=({label:e,placeholder:t,value:n,onChange:r,options:o,error:i,required:a=!1,...s})=>{const l=b.useId();return c.jsxs("div",{className:"select-group",children:[e&&c.jsxs("label",{htmlFor:l,className:"select-label",children:[e,a&&c.jsx("span",{className:"required",children:"*"})]}),c.jsxs("select",{id:l,value:n,onChange:u=>r(u.target.value),className:`select ${i?"select-error":""}`,required:a,...s,children:[t&&c.jsx("option",{value:"",disabled:!0,children:t}),o.map(u=>c.jsx("option",{value:u.value,children:u.label},u.value))]}),i&&c.jsx("span",{className:"error-message",children:i})]})};us.propTypes={label:H.string,placeholder:H.string,value:H.string.isRequired,onChange:H.func.isRequired,options:H.arrayOf(H.shape({value:H.string.isRequired,label:H.string.isRequired})).isRequired,error:H.string,required:H.bool};const Qd=({label:e,placeholder:t,value:n,onChange:r,error:o,required:i=!1,rows:a=4,maxLength:s,...l})=>{const u=b.useId(),[d,f]=b.useState(!1),p=()=>{f(!0)};return c.jsxs("div",{className:"textarea-group",children:[e&&c.jsxs("label",{htmlFor:u,className:"textarea-label",children:[e,i&&c.jsx("span",{className:"required",children:"*"})]}),c.jsx("textarea",{id:u,placeholder:t,value:n,onChange:h=>r(h.target.value),onBlur:p,className:`textarea ${o?"textarea-error":""}`,required:i,rows:a,maxLength:s,...l}),s&&c.jsxs("div",{className:"character-count",children:[n.length,"/",s]}),o&&c.jsx("span",{className:"error-message",children:o})]})};Qd.propTypes={label:H.string,placeholder:H.string,value:H.string.isRequired,onChange:H.func.isRequired,error:H.string,required:H.bool,rows:H.number,maxLength:H.number};const bC=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`,SC=x.div`
  border: 2px solid ${e=>e.$selected?"var(--primary-color)":"#e1e5e9"};
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${e=>e.$selected?"linear-gradient(135deg, rgba(46, 139, 87, 0.1), rgba(46, 139, 87, 0.05))":"white"};
  position: relative;
  
  ${e=>e.$selected&&`
    box-shadow: 0 8px 32px rgba(46, 139, 87, 0.2);
    transform: translateY(-3px);
    
    &::before {
      content: '✓';
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: var(--primary-color);
      color: white;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 0.875rem;
      animation: checkmark 0.3s ease;
    }
    
    @keyframes checkmark {
      0% { transform: scale(0); }
      50% { transform: scale(1.2); }
      100% { transform: scale(1); }
    }
  `}
  
  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
`,jC=x.div`
  font-size: 2rem;
  color: ${e=>e.$selected?"white":"#6c757d"};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${e=>e.$selected?"var(--primary-color)":"#f8f9fa"};
  transition: all 0.3s ease;
  transform: ${e=>e.$selected?"scale(1.1)":"scale(1)"};
  box-shadow: ${e=>e.$selected?"0 4px 16px rgba(46, 139, 87, 0.3)":"none"};
`,CC=x.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${e=>e.$selected?"var(--primary-color)":"var(--text-dark)"};
  transition: all 0.3s ease;
`,kC=x.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`,PC=x.p`
  font-size: 0.9rem;
  color: var(--text-gray);
  line-height: 1.4;
  margin: 0;
`,EC=[{id:"consulta-geral",name:"Consulta Geral",price:120,description:"Avaliação completa da saúde bucal e diagnóstico",icon:c.jsx(b3,{})},{id:"ortodontia",name:"Ortodontia",price:100,description:"Consulta ortodôntica e avaliação para aparelho",icon:c.jsx(tu,{})},{id:"estetica-dental",name:"Estética Dental",price:150,description:"Clareamento, facetas e harmonização do sorriso",icon:c.jsx(r1,{})},{id:"implantes",name:"Implantes",price:150,description:"Avaliação para implantes dentários",icon:c.jsx(Ns,{})},{id:"emergencia",name:"Emergência",price:200,description:"Atendimento urgente para dor e traumas",icon:c.jsx(e3,{})},{id:"retorno",name:"Retorno",price:80,description:"Consulta de retorno para acompanhamento",icon:c.jsx(y3,{})}],TC=({selectedService:e,onServiceChange:t,error:n,...r})=>c.jsxs("div",{"data-field":"service",...r,children:[c.jsx(bC,{children:EC.map(o=>c.jsxs(SC,{$selected:e===o.id,onClick:()=>t(o.id,o.name,o.price),role:"button",tabIndex:0,onKeyDown:i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),t(o.id,o.name,o.price))},children:[c.jsx(jC,{$selected:e===o.id,children:o.icon}),c.jsx(CC,{$selected:e===o.id,children:o.name}),c.jsx(kC,{children:Kd(o.price)}),c.jsx(PC,{children:o.description})]},o.id))}),n&&c.jsx("div",{style:{color:"#e74c3c",fontSize:"0.875rem",marginTop:"1rem",fontWeight:"500",padding:"0.75rem 1rem",background:"rgba(231, 76, 60, 0.1)",borderRadius:"8px",border:"1px solid rgba(231, 76, 60, 0.2)"},children:n})]}),zC=e=>new Date(e).getDay()===0,AC=e=>{const t=new Date(e),n=new Date;return n.setHours(0,0,0,0),t<n},RC=()=>["08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30"],DC=()=>["08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30"],MC=e=>{const n=new Date(e).getDay();return n===0?[]:n===6?DC():RC()},$C=e=>{const t=new Date(e).toISOString().split("T")[0];return{"2024-12-26":["09:00","10:30","14:00","15:30"],"2024-12-27":["08:30","11:00","14:30","16:00"],"2024-12-28":["09:30","10:00","15:00","17:00"]}[t]||[]},NC=e=>{const t=MC(e),n=$C(e);return t.filter(r=>!n.includes(r))},LC=()=>{const e=new Date;return e.setDate(e.getDate()+1),e.toISOString().split("T")[0]},IC=()=>{const e=new Date;return e.setMonth(e.getMonth()+3),e.toISOString().split("T")[0]},OC=x.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,VC=x.label`
  font-weight: 600;
  color: var(--text-dark);
  font-size: 0.95rem;
`,FC=x.input`
  padding: 0.75rem;
  border: 2px solid ${e=>e.$hasError?"var(--error-color)":"#e1e5e9"};
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  background: white;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(46, 139, 87, 0.1);
  }
  
  &:disabled {
    background-color: #f8f9fa;
    cursor: not-allowed;
  }
`,_C=x.div`
  color: var(--error-color);
  font-size: 0.875rem;
  margin-top: 0.25rem;
`,BC=x.div`
  font-size: 0.875rem;
  color: var(--text-gray);
  margin-top: 0.25rem;
`,UC=({value:e,onChange:t,onBlur:n,error:r,label:o="Data preferida",disabled:i=!1,required:a=!0})=>{const s=LC(),l=IC(),u=f=>{const p=f.target.value;p&&zC(p)||p&&AC(p)||t(p)},d=()=>{if(!e)return"Selecione uma data disponível";const f=new Date(e),p=f.toLocaleDateString("pt-BR",{weekday:"long"}),h=f.toLocaleDateString("pt-BR",{day:"numeric",month:"long",year:"numeric"});return`${p.charAt(0).toUpperCase()+p.slice(1)}, ${h}`};return c.jsxs(OC,{children:[c.jsxs(VC,{htmlFor:"date-picker",children:[o,a&&c.jsx("span",{style:{color:"var(--error-color)"},children:"*"})]}),c.jsx(FC,{id:"date-picker",type:"date",value:e||"",onChange:u,onBlur:n,min:s,max:l,disabled:i,$hasError:!!r,required:a}),r&&c.jsx(_C,{children:r}),!r&&c.jsx(BC,{children:d()})]})},Hl=x.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Wl=x.label`
  font-weight: 600;
  color: var(--text-dark);
  font-size: 0.95rem;
`,Fm=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 0.75rem;
  margin-top: 0.5rem;
`,_m=x.button`
  padding: 0.75rem 1rem;
  border: 2px solid ${e=>e.$selected?"var(--primary-color)":"#e1e5e9"};
  border-radius: 8px;
  background: ${e=>e.$selected?"var(--primary-color)":"white"};
  color: ${e=>e.$selected?"white":"var(--text-dark)"};
  font-weight: ${e=>e.$selected?"600":"500"};
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  
  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  &:disabled {
    background-color: #f8f9fa;
    color: #6c757d;
    border-color: #e1e5e9;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,Bm=x.div`
  padding: 2rem;
  text-align: center;
  color: var(--text-gray);
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px dashed #dee2e6;
`,HC=x.div`
  color: var(--error-color);
  font-size: 0.875rem;
  margin-top: 0.25rem;
`,Um=x.div`
  margin-bottom: 1.5rem;
`,Hm=x.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '';
    width: 4px;
    height: 20px;
    background: var(--primary-color);
    border-radius: 2px;
  }
`,WC=({selectedDate:e,selectedTime:t,onTimeSelect:n,error:r,disabled:o=!1,required:i=!0})=>{if(!e)return c.jsxs(Hl,{children:[c.jsxs(Wl,{children:["Horário preferido",i&&c.jsx("span",{style:{color:"var(--error-color)"},children:"*"})]}),c.jsx(Bm,{children:"Selecione uma data para ver os horários disponíveis"})]});const a=NC(e);if(a.length===0)return c.jsxs(Hl,{children:[c.jsxs(Wl,{children:["Horário preferido",i&&c.jsx("span",{style:{color:"var(--error-color)"},children:"*"})]}),c.jsx(Bm,{children:"Nenhum horário disponível para esta data"})]});const s=a.filter(p=>parseInt(p.split(":")[0])<12),l=a.filter(p=>parseInt(p.split(":")[0])>=12),f=new Date(e).getDay()===6;return c.jsxs(Hl,{children:[c.jsxs(Wl,{children:["Horário preferido",i&&c.jsx("span",{style:{color:"var(--error-color)"},children:"*"})]}),s.length>0&&c.jsxs(Um,{children:[c.jsx(Hm,{children:"🌅 Manhã"}),c.jsx(Fm,{children:s.map(p=>c.jsx(_m,{type:"button",$selected:t===p,onClick:()=>n(p),disabled:o,children:p},p))})]}),l.length>0&&!f&&c.jsxs(Um,{children:[c.jsx(Hm,{children:"🌇 Tarde"}),c.jsx(Fm,{children:l.map(p=>c.jsx(_m,{type:"button",$selected:t===p,onClick:()=>n(p),disabled:o,children:p},p))})]}),r&&c.jsx(HC,{children:r})]})},Wm=x.div`
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
`,yo=x.div`
  margin-bottom: 2.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,xo=x.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #f1f3f4;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  &::before {
    content: '';
    width: 6px;
    height: 24px;
    background: var(--primary-color);
    border-radius: 3px;
  }
`,Zi=x.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: ${e=>e.$columns||"1fr 1fr"};
  }
`,GC=x.div`
  background: linear-gradient(135deg, var(--primary-color-light), #f8f9fa);
  border: 2px solid var(--primary-color);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`,qC=x.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 1rem;
`,wo=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(46, 139, 87, 0.1);
  
  &:last-child {
    border-bottom: none;
    font-weight: 600;
    font-size: 1.1rem;
    color: var(--primary-color);
  }
`,YC=x(R.div)`
  text-align: center;
  padding: 3rem 2rem;
  
  svg {
    font-size: 4rem;
    color: var(--success-color);
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-dark);
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--text-gray);
    line-height: 1.6;
    max-width: 400px;
    margin: 0 auto 2rem;
  }
`,Gm=[{value:"no-preference",label:"Sem preferência"},{value:"maria",label:"Dra. Maria"},{value:"joao",label:"Dr. João"}],KC=[{value:"none",label:"Não possuo convênio"},{value:"unimed",label:"Unimed"},{value:"bradesco",label:"Bradesco Saúde"},{value:"sulamerica",label:"SulAmérica"}],QC={name:"",email:"",phone:"",birthDate:"",service:"",serviceName:"",servicePrice:0,date:"",time:"",professional:"no-preference",isReturningPatient:!1,insurance:"none",observations:""},XC={name:Rv,email:Dv,phone:Mv,date:$v,time:e=>cs(e,"Horário"),service:e=>cs(e,"Tipo de consulta")},ZC=()=>{var w;const[e,t]=b.useState(!1),{sendAppointment:n}=Lv(),{values:r,errors:o,isSubmitting:i,handleChange:a,handleBlur:s,handleSubmit:l,setValue:u}=pC(QC,XC),d=j=>{const v=mC(j);u("phone",v)},f=(j,v,m)=>{u("service",j),u("serviceName",v),u("servicePrice",m)},p=async j=>{setTimeout(()=>{n(j),t(!0),localStorage.removeItem("appointmentForm")},2e3)},h=()=>{t(!1),window.location.reload()};if(e)return c.jsx(Wm,{children:c.jsxs(YC,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.5},children:[c.jsx(o3,{}),c.jsx("h3",{children:"Agendamento Enviado!"}),c.jsx("p",{children:"Sua solicitação de agendamento foi enviada via WhatsApp. Em breve entraremos em contato para confirmar a consulta."}),c.jsx(Mt,{variant:"primary",onClick:h,children:"Novo Agendamento"})]})});const y=r.serviceName&&r.date&&r.time;return c.jsx(Wm,{children:c.jsxs("form",{onSubmit:l(p),children:[c.jsxs(yo,{children:[c.jsx(xo,{children:"1. Dados Pessoais"}),c.jsxs(Zi,{children:[c.jsx(dn,{name:"name",label:"Nome completo",value:r.name,onChange:a("name"),onBlur:s("name"),error:o.name,placeholder:"Digite seu nome completo",required:!0}),c.jsx(dn,{name:"email",label:"Email",type:"email",value:r.email,onChange:a("email"),onBlur:s("email"),error:o.email,placeholder:"seu@email.com",required:!0}),c.jsx(dn,{name:"phone",label:"Telefone/WhatsApp",value:r.phone,onChange:d,onBlur:s("phone"),error:o.phone,placeholder:"(11) 99999-9999",required:!0}),c.jsx(dn,{name:"birthDate",label:"Data de nascimento",type:"date",value:r.birthDate,onChange:a("birthDate"),placeholder:"Opcional"})]})]}),c.jsxs(yo,{children:[c.jsx(xo,{children:"2. Tipo de Consulta"}),c.jsx(TC,{selectedService:r.service,onServiceChange:f,error:o.service,"data-field":"service"})]}),c.jsxs(yo,{children:[c.jsx(xo,{children:"3. Data e Horário"}),c.jsxs(Zi,{$columns:"1fr",children:[c.jsx(UC,{name:"date",value:r.date,onChange:a("date"),onBlur:s("date"),error:o.date,"data-field":"date"}),c.jsx(WC,{name:"time",selectedDate:r.date,selectedTime:r.time,onTimeSelect:a("time"),error:o.time,"data-field":"time"})]})]}),c.jsxs(yo,{children:[c.jsx(xo,{children:"4. Preferências"}),c.jsxs(Zi,{children:[c.jsx(us,{label:"Profissional preferido",options:Gm,value:r.professional,onChange:a("professional")}),c.jsxs("div",{children:[c.jsx("label",{style:{fontWeight:600,color:"var(--text-dark)",fontSize:"0.95rem"},children:"Já é nosso paciente?"}),c.jsxs(Zi,{style:{marginTop:"0.5rem"},children:[c.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontWeight:"normal"},children:[c.jsx("input",{type:"radio",name:"isReturningPatient",checked:r.isReturningPatient===!0,onChange:()=>u("isReturningPatient",!0)}),"Sim"]}),c.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontWeight:"normal"},children:[c.jsx("input",{type:"radio",name:"isReturningPatient",checked:r.isReturningPatient===!1,onChange:()=>u("isReturningPatient",!1)}),"Não"]})]})]})]}),c.jsx("div",{style:{marginTop:"1.5rem"},children:c.jsx(us,{label:"Convênio",options:KC,value:r.insurance,onChange:a("insurance")})})]}),c.jsxs(yo,{children:[c.jsx(xo,{children:"5. Observações"}),c.jsx(Qd,{label:"Informações adicionais",value:r.observations,onChange:a("observations"),placeholder:"Descreva sintomas, alergias ou outras informações importantes...",rows:4})]}),y&&c.jsxs(GC,{children:[c.jsx(qC,{children:"📋 Resumo do Agendamento"}),c.jsxs(wo,{children:[c.jsx("span",{children:"Paciente:"}),c.jsx("span",{children:Nv(r.name)})]}),c.jsxs(wo,{children:[c.jsx("span",{children:"Tipo de consulta:"}),c.jsx("span",{children:r.serviceName})]}),c.jsxs(wo,{children:[c.jsx("span",{children:"Data e horário:"}),c.jsxs("span",{children:[new Date(r.date).toLocaleDateString("pt-BR")," às ",r.time]})]}),c.jsxs(wo,{children:[c.jsx("span",{children:"Profissional:"}),c.jsx("span",{children:(w=Gm.find(j=>j.value===r.professional))==null?void 0:w.label})]}),c.jsxs(wo,{children:[c.jsx("span",{children:"Valor da consulta:"}),c.jsx("span",{children:Kd(r.servicePrice)})]})]}),c.jsx(Mt,{type:"submit",variant:"primary",size:"large",disabled:i,style:{width:"100%"},children:i?c.jsxs(c.Fragment,{children:[c.jsx(o1,{style:{animation:"spin 1s linear infinite",marginRight:"0.5rem"}}),"Enviando agendamento..."]}):"Agendar Consulta via WhatsApp"})]})})},JC=x.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
`,ek=x.section`
  background: linear-gradient(135deg, var(--primary-color) 0%, #228B22 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="rgba(255,255,255,0.1)"/></svg>');
    background-size: 50px 50px;
    opacity: 0.3;
  }
`,qm=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
`,tk=x(R.h1)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,nk=x(R.p)`
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`,rk=x(R.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`,Ji=x.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  svg {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.9);
  }
  
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 0.9rem;
    opacity: 0.8;
    line-height: 1.4;
  }
`,ok=x.section`
  padding: 4rem 0;
`,ik=x.div`
  text-align: center;
  margin-bottom: 3rem;
`,ak=x.h2`
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1rem;
`,sk=x.p`
  font-size: 1.1rem;
  color: var(--text-gray);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`,lk=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,Ym=x.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-4px);
  }
`,Km=x.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,Qm=x.ul`
  list-style: none;
  padding: 0;
  
  li {
    padding: 0.5rem 0;
    color: var(--text-gray);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    &::before {
      content: '✓';
      color: var(--primary-color);
      font-weight: bold;
    }
  }
`,ck=()=>c.jsx(Dn,{children:c.jsxs(JC,{children:[c.jsx(ek,{children:c.jsxs(qm,{children:[c.jsx(tk,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},children:"Agende sua Consulta Online"}),c.jsx(nk,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:"Sistema rápido e prático para agendar sua consulta odontológica. Escolha o horário ideal e receba confirmação imediata via WhatsApp."}),c.jsxs(rk,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:[c.jsxs(Ji,{children:[c.jsx(yi,{}),c.jsx("h3",{children:"Agendamento Imediato"}),c.jsx("p",{children:"Veja horários disponíveis em tempo real"})]}),c.jsxs(Ji,{children:[c.jsx(Za,{}),c.jsx("h3",{children:"Horários Flexíveis"}),c.jsx("p",{children:"Manhã, tarde e sábado disponíveis"})]}),c.jsxs(Ji,{children:[c.jsx(tu,{}),c.jsx("h3",{children:"Escolha o Profissional"}),c.jsx("p",{children:"Dra. Maria, Dr. João ou sem preferência"})]}),c.jsxs(Ji,{children:[c.jsx(Bt,{}),c.jsx("h3",{children:"Confirmação via WhatsApp"}),c.jsx("p",{children:"Receba todos os detalhes no seu celular"})]})]})]})}),c.jsx(ok,{children:c.jsxs(qm,{children:[c.jsxs(ik,{children:[c.jsx(ak,{children:"Complete os Dados"}),c.jsx(sk,{children:"Preencha o formulário abaixo com suas informações e preferências. Após o envio, entraremos em contato via WhatsApp para confirmar sua consulta."})]}),c.jsxs(lk,{children:[c.jsxs(Ym,{children:[c.jsxs(Km,{children:[c.jsx(Za,{}),"Horários de Atendimento"]}),c.jsxs(Qm,{children:[c.jsx("li",{children:"Segunda a Sexta: 8h às 12h e 14h às 18h"}),c.jsx("li",{children:"Sábado: 8h às 12h"}),c.jsx("li",{children:"Domingo: Fechado"}),c.jsx("li",{children:"Emergências: Consulte disponibilidade"})]})]}),c.jsxs(Ym,{children:[c.jsxs(Km,{children:[c.jsx(tu,{}),"Nossos Profissionais"]}),c.jsxs(Qm,{children:[c.jsx("li",{children:"Dra. Maria - Ortodontia e Implantodontia"}),c.jsx("li",{children:"Dr. João - Endodontia e Estética"}),c.jsx("li",{children:"Equipe especializada e atualizada"}),c.jsx("li",{children:"Atendimento humanizado"})]})]})]}),c.jsx(ZC,{})]})})]})}),_n=[{id:1,filename:"alinhamento.jpg",category:"ortodontia",title:"Alinhamento completo em 18 meses",description:"Transformação completa do sorriso através de tratamento ortodôntico"},{id:2,filename:"aparelho.jpg",category:"ortodontia",title:"Aparelho estético discreto",description:"Resultado natural com aparelho transparente"},{id:3,filename:"correção de mordida.jpg",category:"ortodontia",title:"Correção de mordida cruzada",description:"Problema funcional resolvido com ortodontia"},{id:4,filename:"resultado em adolecente.jpg",category:"ortodontia",title:"Resultado em adolescente",description:"Tratamento ortodôntico preventivo bem-sucedido"},{id:5,filename:"clareamento.jpg",category:"estetica",title:"Clareamento com 8 tons a mais",description:"Resultado impressionante do clareamento profissional"},{id:6,filename:"facetas de porcelana.jpg",category:"estetica",title:"Facetas de porcelana naturais",description:"Transformação sutil e natural com facetas"},{id:7,filename:"harmonização de sorriso.jpg",category:"estetica",title:"Harmonização do sorriso",description:"Equilíbrio perfeito entre forma e função"},{id:8,filename:"transformação.jpg",category:"estetica",title:"Transformação completa",description:"Mudança radical com tratamento estético integrado"},{id:9,filename:"correção de formato.jpg",category:"estetica",title:"Correção de formato",description:"Dentes uniformes através de procedimento estético"},{id:10,filename:"implante unitário.jpg",category:"implantes",title:"Implante unitário anterior",description:"Substituição de dente perdido com implante"},{id:11,filename:"Protocolo superior.jpg",category:"implantes",title:"Protocolo superior completo",description:"Reabilitação total com implantes múltiplos"},{id:12,filename:"exorto ósseo.jpg",category:"implantes",title:"Enxerto ósseo bem-sucedido",description:"Preparação perfeita para implante"},{id:13,filename:"prótese sobre implante.jpg",category:"implantes",title:"Prótese sobre implante",description:"Resultado final com prótese fixa"},{id:14,filename:"restauração.jpg",category:"geral",title:"Restauração em resina",description:"Reparo funcional e estético"},{id:15,filename:"limpeza profunda.jpg",category:"geral",title:"Limpeza profunda",description:"Resultado da profilaxia profissional"},{id:16,filename:"Tratamento de caries.jpg",category:"geral",title:"Tratamento de cárie",description:"Dente salvo com restauração conservadora"},{id:17,filename:"consultório.jpg",category:"instalacoes",title:"Consultório moderno",description:"Ambiente acolhedor e tecnologia avançada"},{id:18,filename:"A imagem sala de espera.jpg",category:"instalacoes",title:"Sala de espera aconchegante",description:"Conforto e tranquilidade para nossos pacientes"}],ea=_n.map(e=>({...e,src:ls(e.filename),thumbnail:ls(e.filename)})),Xm=[{id:"todos",name:"Todos",count:_n.length},{id:"ortodontia",name:"Ortodontia",count:_n.filter(e=>e.category==="ortodontia").length},{id:"estetica",name:"Estética Dental",count:_n.filter(e=>e.category==="estetica").length},{id:"implantes",name:"Implantes",count:_n.filter(e=>e.category==="implantes").length},{id:"geral",name:"Clínica Geral",count:_n.filter(e=>e.category==="geral").length},{id:"instalacoes",name:"Instalações",count:_n.filter(e=>e.category==="instalacoes").length}],uk=x.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  margin-bottom: 2rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    overflow-x: auto;
    flex-wrap: nowrap;
    justify-content: flex-start;
    gap: 1rem;
    padding: 0 1rem 1rem 1rem;
    scrollbar-width: none;
    -ms-overflow-style: none;
    
    &::-webkit-scrollbar {
      display: none;
    }
    
    /* Gradiente nas bordas para indicar scroll */
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 1rem;
      width: 20px;
      background: linear-gradient(to right, rgba(248, 249, 250, 1), transparent);
      pointer-events: none;
      z-index: 1;
    }
    
    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      bottom: 1rem;
      width: 20px;
      background: linear-gradient(to left, rgba(248, 249, 250, 1), transparent);
      pointer-events: none;
      z-index: 1;
    }
  }
`,dk=x(R.button)`
  padding: 0.75rem 1.25rem;
  border: 2px solid ${e=>e.$active?"var(--primary-color)":"#e5e7eb"};
  background: ${e=>e.$active?"var(--primary-color)":"white"};
  color: ${e=>e.$active?"white":"#6b7280"};
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    border-color: var(--primary-color);
    color: ${e=>e.$active?"white":"var(--primary-color)"};
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(46, 139, 87, 0.2);
  }

  @media (max-width: 768px) {
    padding: 0.625rem 1rem;
    font-size: 0.875rem;
    font-weight: 600;
    border-radius: 20px;
    min-width: fit-content;
    flex-shrink: 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    
    &:hover {
      transform: none;
      box-shadow: 0 4px 12px rgba(46, 139, 87, 0.15);
    }
    
    &:active {
      transform: scale(0.98);
    }
  }
`,fk=x.span`
  background: ${e=>e.$active?"rgba(255, 255, 255, 0.25)":"rgba(46, 139, 87, 0.1)"};
  color: ${e=>e.$active?"white":"var(--primary-color)"};
  padding: 0.125rem 0.5rem;
  border-radius: 10px;
  font-size: 0.75rem;
  font-weight: 600;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 0.125rem 0.375rem;
    font-size: 0.7rem;
    border-radius: 8px;
  }
`,pk=x.div`
  position: relative;
  
  @media (max-width: 768px) {
    background: var(--light-gray);
    margin: 0 -1rem;
    padding: 1rem 0;
  }
`,mk=({categories:e,activeFilter:t,onFilterChange:n,imageCounts:r})=>c.jsx(pk,{children:c.jsx(uk,{children:e.map(o=>{const i=t===o.id,a=r[o.id]||0;return c.jsxs(dk,{$active:i,onClick:()=>n(o.id),whileHover:{scale:1.05},whileTap:{scale:.95},initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.3},children:[o.name,c.jsx(fk,{$active:i,children:a})]},o.id)})})}),hk=(e,t=.85,n=500,r=400)=>new Promise((o,i)=>{const a=new Image;a.crossOrigin="anonymous",a.onload=()=>{const s=document.createElement("canvas"),l=s.getContext("2d");let{width:u,height:d}=a;u>d?u>n&&(d*=n/u,u=n):d>r&&(u*=r/d,d=r),s.width=u,s.height=d,l.imageSmoothingEnabled=!0,l.imageSmoothingQuality="high",l.drawImage(a,0,0,u,d);const f=s.toDataURL("image/jpeg",t);o(f)},a.onerror=()=>{o(e)},a.src=e}),gk=e=>new Promise(t=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>{const r=document.createElement("canvas"),o=r.getContext("2d");r.width=20,r.height=15,o.filter="blur(2px)",o.drawImage(n,0,0,20,15);const i=r.toDataURL("image/jpeg",.1);t(i)},n.onerror=()=>{const r=document.createElement("canvas"),o=r.getContext("2d");r.width=20,r.height=15,o.fillStyle="#e0e0e0",o.fillRect(0,0,20,15),t(r.toDataURL())},n.src=e}),vk=x.div`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius: 12px;
  background: #f0f0f0;
`,yk=x(R.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.3s ease;
  image-rendering: optimizeQuality;
  
  /* Enhance image quality for gallery thumbnails */
  filter: contrast(1.08) saturate(1.15) brightness(1.02);

  &:hover {
    transform: scale(1.05);
    filter: contrast(1.12) saturate(1.2) brightness(1.03);
  }
`,xk=x.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${e=>e.$bgImage?`url(${e.$bgImage})`:"none"};
  background-size: cover;
  background-position: center;
  filter: blur(10px);
  transform: scale(1.1);
  opacity: ${e=>e.$show?.7:0};
  transition: opacity 0.3s ease;
`,wk=x.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #ccc;

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`,bk=x.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 0.9rem;
  text-align: center;
  padding: 1rem;
`,Sk=({src:e,alt:t,onClick:n,index:r})=>{const[o,i]=b.useState(!1),[a,s]=b.useState(!1),[l,u]=b.useState(!1),d=b.useRef(),[f,p]=b.useState(null),[h,y]=b.useState(null);b.useEffect(()=>{(async()=>{try{const g=await hk(e,.85,500,400);p(g);const S=await gk(e);y(S)}catch(g){p(e),console.warn("Image optimization failed, using original:",g)}})()},[e]),b.useEffect(()=>{const m=new IntersectionObserver(([g])=>{g.isIntersecting&&(s(!0),m.unobserve(g.target))},{threshold:.1,rootMargin:"100px"});return d.current&&m.observe(d.current),()=>{d.current&&m.unobserve(d.current)}},[]);const w=()=>{i(!0)},j=()=>{u(!0),i(!0)},v=()=>{n&&!l&&n(r)};return c.jsx(R.div,{ref:d,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4,delay:r*.1},children:c.jsxs(vk,{onClick:v,children:[!o&&!l&&c.jsx(wk,{children:c.jsx($p,{})}),l&&c.jsxs(bk,{children:[c.jsx($p,{style:{opacity:.3}}),c.jsx("div",{style:{marginTop:"0.5rem"},children:"Erro ao carregar imagem"})]}),c.jsx(xk,{$bgImage:h,$show:a&&!o&&!l}),a&&!l&&f&&c.jsx(yk,{src:f,alt:t,onLoad:w,onError:j,initial:{opacity:0},animate:{opacity:o?1:0},transition:{duration:.4},style:{display:o?"block":"none"}})]})})},jk=x(R.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,Ck=x(R.div)`
  position: relative;
  width: 700px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    width: 600px;
    height: 450px;
  }

  @media (max-width: 768px) {
    width: 90vw;
    height: 60vh;
    max-width: 500px;
    max-height: 400px;
  }
`;x(R.img)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  background: rgba(255, 255, 255, 0.05);
`;const kk=x.button`
  position: absolute;
  top: -50px;
  right: 0;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1001;

  &:hover {
    background: white;
    transform: scale(1.1);
  }

  svg {
    color: var(--text-dark);
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    top: -60px;
    right: -10px;
  }
`,Zm=x.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1001;

  &:hover {
    background: white;
    transform: translateY(-50%) scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    
    &:hover {
      background: rgba(255, 255, 255, 0.9);
      transform: translateY(-50%) scale(1);
    }
  }

  svg {
    color: var(--text-dark);
    font-size: 1.25rem;
  }

  &.prev {
    left: -70px;
  }

  &.next {
    right: -70px;
  }

  @media (max-width: 768px) {
    display: none; /* Ocultar setas no mobile */
  }
`,Pk=x.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }
`;x.button`
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);

  &:active {
    transform: scale(0.95);
    background: rgba(255, 255, 255, 1);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  svg {
    color: var(--text-dark);
    font-size: 1.1rem;
  }
`;const Ek=x.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,Tk=x.div`
  display: flex;
  gap: 0.5rem;
`,zk=x.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${e=>e.active?"rgba(255, 255, 255, 0.9)":"rgba(255, 255, 255, 0.3)"};
  transition: all 0.2s ease;
`,Ak=x(R.div)`
  position: absolute;
  bottom: -80px;
  left: 0;
  right: 0;
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    bottom: -120px;
  }
`,Rk=x.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Dk=x.p`
  font-size: 0.875rem;
  opacity: 0.8;
  line-height: 1.4;
  max-width: 600px;
  margin: 0 auto;
`,Mk=x.div`
  position: absolute;
  top: -50px;
  left: 0;
  color: white;
  font-size: 0.875rem;
  opacity: 0.7;

  @media (max-width: 768px) {
    top: -60px;
    font-size: 0.75rem;
  }
`,$k=({images:e,currentIndex:t,onClose:n,onNext:r,onPrev:o})=>{const[i,a]=b.useState(!1);b.useEffect(()=>{const f=p=>{switch(p.key){case"Escape":n();break;case"ArrowLeft":o();break;case"ArrowRight":r();break}};return document.addEventListener("keydown",f),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",f),document.body.style.overflow="unset"}},[n,r,o]),b.useEffect(()=>{a(!1)},[t]);const s=(f,p)=>{p.offset.x>50?o():p.offset.x<-50&&r()},l=e[t],u=t===0,d=t===e.length-1;return l?c.jsx(qd,{children:c.jsx(jk,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:n,children:c.jsxs(Ck,{onClick:f=>f.stopPropagation(),initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.3},drag:"x",dragConstraints:{left:0,right:0},onPanEnd:s,dragElastic:.1,children:[c.jsx(kk,{onClick:n,"aria-label":"Fechar lightbox",children:c.jsx(xi,{})}),c.jsxs(Mk,{children:[t+1," de ",e.length]}),c.jsx(Zm,{className:"prev",onClick:o,disabled:u,"aria-label":"Imagem anterior",children:c.jsx(a3,{})}),c.jsx("img",{src:l.src,alt:l.title,loading:"eager",onLoad:()=>a(!0),style:{maxWidth:"100%",maxHeight:"100%",width:"auto",height:"auto",objectFit:"contain",borderRadius:"12px",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.4)"}}),c.jsx(Zm,{className:"next",onClick:r,disabled:d,"aria-label":"Próxima imagem",children:c.jsx(s3,{})}),c.jsx(Pk,{children:c.jsx(Ek,{children:c.jsx(Tk,{children:e.slice(Math.max(0,t-2),Math.min(e.length,t+3)).map((f,p)=>{const h=Math.max(0,t-2)+p;return c.jsx(zk,{active:h===t},h)})})})}),c.jsxs(Ak,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.3},children:[c.jsx(Rk,{children:l.title}),c.jsx(Dk,{children:l.description})]})]})})}):null},Nk=e1`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,Lk=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`,Ik=x.div`
  width: 40px;
  height: 40px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid var(--primary-color);
  border-radius: 50%;
  animation: ${Nk} 1s linear infinite;
`,Ok=x.p`
  margin-left: 1rem;
  color: var(--text-gray);
  font-size: 0.9rem;
`,Vk=({text:e="Carregando mais imagens..."})=>c.jsxs(Lk,{children:[c.jsx(Ik,{}),c.jsx(Ok,{children:e})]}),Fk=(e,t=6)=>{const[n,r]=b.useState([]),[o,i]=b.useState(!0),[a,s]=b.useState(!1),[l,u]=b.useState(1);b.useEffect(()=>{r(e.slice(0,t)),u(1),i(e.length>t),s(!1)},[e,t]);const d=b.useCallback(()=>{a||!o||(s(!0),setTimeout(()=>{const f=l*t,p=f+t,h=e.slice(f,p);h.length>0?(r(y=>[...y,...h]),u(y=>y+1),i(p<e.length)):i(!1),s(!1)},300))},[e,l,t,a,o]);return{displayedItems:n,hasMore:o,loading:a,loadMore:d}},_k=(e,t={})=>{const[n,r]=b.useState(!1);return b.useEffect(()=>{const o=e.current;if(!o)return;const i=new IntersectionObserver(([a])=>{r(a.isIntersecting)},{threshold:.1,rootMargin:"50px",...t});return i.observe(o),()=>{o&&i.unobserve(o)}},[e,t]),n},Bk=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`,Uk=x.div`
  text-align: center;
  margin-bottom: 3rem;
`,Hk=x.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Wk=x.p`
  font-size: 1.125rem;
  color: var(--text-gray);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`,Gk=x(R.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,qk=x(R.div)`
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-gray);
`,Yk=x.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`,Kk=x.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`,Qk=x.p`
  font-size: 1rem;
  opacity: 0.8;
`,Xk=()=>{const[e,t]=b.useState("todos"),[n,r]=b.useState(!1),[o,i]=b.useState(0),a=b.useRef(),s=b.useMemo(()=>e==="todos"?ea:ea.filter(m=>m.category===e),[e]),{displayedItems:l,hasMore:u,loading:d,loadMore:f}=Fk(s,6),p=b.useMemo(()=>{const m={todos:ea.length};return Xm.forEach(g=>{g.id!=="todos"&&(m[g.id]=ea.filter(S=>S.category===g.id).length)}),m},[]),h=m=>{i(m),r(!0)},y=()=>{r(!1)},w=()=>{const m=o<s.length-1?o+1:0;i(m)},j=()=>{const m=o>0?o-1:s.length-1;i(m)},v=_k(a,{threshold:.1,rootMargin:"100px"});return b.useEffect(()=>{v&&u&&!d&&f()},[v,u,d,f]),b.useEffect(()=>{n&&s.length>0&&[o-1>=0?o-1:s.length-1,o+1<s.length?o+1:0].forEach(g=>{const S=new Image;S.src=s[g].src})},[n,o,s]),c.jsxs(Bk,{children:[c.jsxs(Uk,{children:[c.jsx(Hk,{children:"Nossa Galeria"}),c.jsx(Wk,{children:"Conheça alguns dos nossos casos de sucesso e veja as transformações que realizamos com carinho e profissionalismo."})]}),c.jsx(mk,{categories:Xm,activeFilter:e,onFilterChange:t,imageCounts:p}),c.jsx(qd,{mode:"wait",children:s.length>0?c.jsxs(c.Fragment,{children:[c.jsx(Gk,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.4,ease:"easeOut"},children:l.map((m,g)=>c.jsx(Sk,{src:m.thumbnail||m.src,alt:m.title,index:g,onClick:h},m.id))},e),u&&c.jsx("div",{ref:a,children:d&&c.jsx(Vk,{})})]}):c.jsxs(qk,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.4},children:[c.jsx(Yk,{children:"🔍"}),c.jsx(Kk,{children:"Nenhuma imagem encontrada"}),c.jsx(Qk,{children:"Não temos imagens para esta categoria no momento."})]},"empty")}),n&&c.jsx($k,{images:s,currentIndex:o,onClose:y,onNext:w,onPrev:j})]})},Zk=()=>c.jsxs(c.Fragment,{children:[c.jsxs(gd,{children:[c.jsx("title",{children:"Galeria de Casos de Sucesso | Clínica Sorriso Perfeito"}),c.jsx("meta",{name:"description",content:"Veja nossa galeria com casos de sucesso em ortodontia, estética dental, implantes e tratamentos odontológicos. Transformações reais de pacientes."}),c.jsx("meta",{name:"keywords",content:"galeria odontológica, casos de sucesso, antes e depois, ortodontia, estética dental, implantes, clareamento"}),c.jsx("meta",{property:"og:title",content:"Galeria de Casos de Sucesso | Clínica Sorriso Perfeito"}),c.jsx("meta",{property:"og:description",content:"Conheça nossos casos de sucesso e transformações em tratamentos odontológicos."}),c.jsx("meta",{property:"og:type",content:"website"})]}),c.jsx(Dn,{children:c.jsx(Xk,{})})]}),ds=[{id:1,slug:"5-dicas-dentes-saudaveis",title:"5 dicas para manter os dentes saudáveis",excerpt:"Descubra as melhores práticas para manter sua saúde bucal em dia e ter um sorriso sempre saudável.",content:`
Manter uma boa saúde bucal vai muito além de ter um sorriso bonito. Dentes saudáveis são fundamentais para a nossa qualidade de vida e bem-estar geral.

## 1. Escove os dentes corretamente

A escovação deve ser feita pelo menos duas vezes ao dia, com movimentos circulares suaves. Use uma escova de cerdas macias e pasta de dente com flúor. O tempo ideal de escovação é de 2 minutos, garantindo que todas as superfícies dos dentes sejam limpas adequadamente.

## 2. Use fio dental diariamente

O fio dental remove restos de alimentos e placa bacteriana que a escova não consegue alcançar, especialmente entre os dentes. Use-o pelo menos uma vez ao dia, preferencialmente antes de dormir.

## 3. Evite açúcar em excesso

Alimentos açucarados alimentam as bactérias que causam cáries. Prefira frutas, vegetais e água. Quando consumir doces, faça-o durante as refeições e escove os dentes em seguida.

## 4. Visite o dentista regularmente

Consultas preventivas a cada 6 meses permitem detectar problemas precocemente e manter a saúde em dia. A prevenção é sempre mais econômica que o tratamento.

## 5. Não use os dentes como ferramenta

Evite abrir embalagens, quebrar nozes ou morder objetos duros com os dentes. Isso pode causar fraturas e desgaste desnecessário.

**Precisa de uma avaliação profissional? Agende sua consulta conosco!**
    `,image:"https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",publishDate:"2024-10-15",readTime:"3 min",tags:["saúde bucal","prevenção","cuidados diários"],author:"Dra. Maria Santos",seo:{title:"5 Dicas Essenciais para Manter os Dentes Saudáveis | Clínica Sorriso Perfeito",description:"Descubra as 5 dicas fundamentais para manter seus dentes saudáveis e um sorriso perfeito. Guia completo de cuidados bucais.",keywords:"dentes saudáveis, cuidados bucais, saúde dental, prevenção cáries"}},{id:2,slug:"quando-usar-aparelho-ortodontico",title:"Quando é hora de usar aparelho ortodôntico?",excerpt:"Saiba identificar os sinais de que você ou seu filho precisam de tratamento ortodôntico.",content:`
O tratamento ortodôntico não é apenas uma questão estética. Muitas vezes, é fundamental para a saúde bucal e função mastigatória. Mas como saber quando é hora de procurar um ortodontista?

## Sinais que indicam necessidade de aparelho

### Dentes tortos ou apinhados
Quando os dentes estão desalinhados ou não há espaço suficiente na arcada dentária, o aparelho pode corrigir essas irregularidades.

### Mordida incorreta
Problemas como mordida aberta, cruzada ou sobremordida podem causar dificuldades na mastigação e fala.

### Dores na articulação
DTM (disfunção temporomandibular) pode ser causada por má oclusão e ser tratada com ortodontia.

## A idade ideal para começar

### Crianças
A primeira avaliação ortodôntica deve ser feita aos 7 anos de idade, quando ainda há dentes de leite presentes.

### Adolescentes
O período de crescimento é ideal para tratamentos, pois os ossos ainda estão se desenvolvendo.

### Adultos
Nunca é tarde para corrigir a posição dos dentes. Hoje temos opções discretas como alinhadores transparentes.

## Tipos de aparelho disponíveis

### Aparelho fixo metálico
O mais tradicional e eficiente para casos complexos.

### Aparelho estético
Com brackets de porcelana ou safira, menos visível.

### Alinhadores transparentes
Removíveis e praticamente imperceptíveis.

**Quer saber qual o melhor tratamento para seu caso? Agende uma avaliação ortodôntica!**
    `,image:"https://images.pexels.com/photos/6627374/pexels-photo-6627374.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",publishDate:"2024-10-10",readTime:"4 min",tags:["ortodontia","aparelho","tratamento"],author:"Dr. João Silva",seo:{title:"Quando Usar Aparelho Ortodôntico? Guia Completo | Clínica Sorriso Perfeito",description:"Descubra quando é hora de usar aparelho ortodôntico. Sinais, idade ideal e tipos disponíveis. Guia completo sobre ortodontia.",keywords:"aparelho ortodôntico, ortodontia, dentes tortos, tratamento ortodôntico"}},{id:3,slug:"mitos-verdades-clareamento-dental",title:"Mitos e verdades sobre clareamento dental",excerpt:"Esclareça suas dúvidas sobre clareamento dental e descubra o que é mito e o que é verdade.",content:`
O clareamento dental é um dos procedimentos estéticos mais procurados, mas ainda gera muitas dúvidas. Vamos esclarecer os principais mitos e verdades sobre o assunto.

## Mitos sobre clareamento dental

### "O clareamento enfraquece os dentes"
**MITO.** Quando feito corretamente e com acompanhamento profissional, o clareamento não enfraquece o esmalte dentário.

### "Quanto mais forte o gel, melhor o resultado"
**MITO.** A concentração alta pode causar sensibilidade excessiva. O ideal é usar a concentração adequada para cada caso.

### "O resultado dura para sempre"
**MITO.** O clareamento não é permanente. Hábitos alimentares e de higiene influenciam na durabilidade.

## Verdades sobre clareamento dental

### "Pode causar sensibilidade temporária"
**VERDADE.** É normal sentir sensibilidade durante o tratamento, mas ela desaparece após o término.

### "Nem todos os dentes respondem igual"
**VERDADE.** Dentes amarelados clareiam melhor que os acinzentados. Restaurações não mudam de cor.

### "Acompanhamento profissional é essencial"
**VERDADE.** Apenas o dentista pode avaliar se você é candidato ao clareamento e qual técnica usar.

## Tipos de clareamento

### Clareamento caseiro supervisionado
Com moldeiras personalizadas e gel prescrito pelo dentista.

### Clareamento a laser no consultório
Mais rápido, com resultado imediato.

### Associação das técnicas
Combinação para melhor resultado e manutenção.

**Quer um sorriso mais branco e saudável? Consulte nossos especialistas!**
    `,image:"https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",publishDate:"2024-10-05",readTime:"4 min",tags:["clareamento","estética","mitos"],author:"Dra. Ana Costa",seo:{title:"Mitos e Verdades sobre Clareamento Dental | Clínica Sorriso Perfeito",description:"Descubra os principais mitos e verdades sobre clareamento dental. Esclareça suas dúvidas com nosso guia completo.",keywords:"clareamento dental, mitos clareamento, verdades clareamento, estética dental"}},{id:4,slug:"como-escolher-escova-dente-ideal",title:"Como escolher a escova de dente ideal",excerpt:"Guia completo para escolher a escova de dente perfeita para suas necessidades.",content:`
A escolha da escova de dente certa é fundamental para uma higiene bucal eficaz. Com tantas opções no mercado, é importante saber quais critérios considerar.

## Tipos de cerdas

### Cerdas macias
Recomendadas para a maioria das pessoas, especialmente quem tem:
- Gengivas sensíveis
- Retração gengival
- Dentes com desgaste

### Cerdas médias
Indicadas para pessoas sem problemas gengivais e que preferem uma escovação mais vigorosa.

### Cerdas duras
**Não recomendadas** para uso diário, pois podem causar desgaste do esmalte e retração gengival.

## Tamanho da cabeça

### Cabeça pequena
- Melhor acesso aos dentes posteriores
- Ideal para crianças e adultos com boca pequena
- Permite movimentos precisos

### Cabeça média a grande
- Cobre mais superfície de uma vez
- Pode ser menos precisa em áreas de difícil acesso

## Formato das cerdas

### Cerdas niveladas
Limpeza uniforme de toda a superfície dentária.

### Cerdas em diferentes alturas
Algumas marcas oferecem cerdas variadas para melhor adaptação aos dentes.

## Escova elétrica vs manual

### Escova manual
- Mais acessível
- Fácil de transportar
- Permite controle total da pressão

### Escova elétrica
- Remove mais placa bacteriana
- Ideal para pessoas com mobilidade reduzida
- Timer integrado para tempo correto de escovação

## Quando trocar a escova

- A cada 3 meses
- Após doenças infecciosas
- Quando as cerdas estiverem deformadas

**Dúvidas sobre qual escova usar? Consulte nossos profissionais para uma recomendação personalizada!**
    `,image:"https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",publishDate:"2024-09-28",readTime:"3 min",tags:["higiene bucal","escova de dente","cuidados"],author:"Dr. Carlos Mendes",seo:{title:"Como Escolher a Escova de Dente Ideal | Guia Completo | Clínica Sorriso Perfeito",description:"Guia completo para escolher a escova de dente perfeita. Tipos de cerdas, tamanhos e dicas de profissionais.",keywords:"escova de dente, higiene bucal, cerdas macias, escova elétrica"}},{id:5,slug:"alimentacao-saude-bucal",title:"Alimentação e saúde bucal: o que você precisa saber",excerpt:"Descubra como a alimentação influencia diretamente na saúde dos seus dentes e gengivas.",content:`
A relação entre alimentação e saúde bucal é mais estreita do que muitas pessoas imaginam. O que comemos afeta diretamente a saúde dos dentes e gengivas.

## Alimentos que prejudicam os dentes

### Açúcares e carboidratos refinados
- Alimentam as bactérias que causam cáries
- Exemplos: doces, refrigerantes, biscoitos
- Consuma com moderação e sempre escove os dentes depois

### Alimentos ácidos
- Podem causar erosão do esmalte
- Exemplos: refrigerantes, frutas cítricas, vinagre
- Aguarde 30 minutos após consumi-los para escovar os dentes

### Alimentos pegajosos
- Ficam grudados nos dentes por mais tempo
- Exemplos: balas de goma, frutas secas
- Difíceis de remover apenas com saliva

## Alimentos que fazem bem aos dentes

### Ricos em cálcio
- Fortalecem o esmalte dentário
- Exemplos: leite, queijo, iogurte, vegetais verdes folhosos

### Ricos em vitamina C
- Fortalecem as gengivas
- Exemplos: frutas cítricas (com moderação), morango, kiwi

### Alimentos fibrosos
- Estimulam a produção de saliva
- Ajudam na limpeza natural
- Exemplos: maçã, cenoura, aipo

### Água
- Mantém a boca hidratada
- Ajuda a remover restos de alimentos
- Escolha água fluoretada quando possível

## Dicas para uma alimentação amiga dos dentes

### Horários das refeições
- Evite beliscar constantemente
- Concentre o consumo de doces nas refeições principais

### Combinações inteligentes
- Coma queijo após doces para neutralizar ácidos
- Beba água durante as refeições

### Mastigação adequada
- Mastigue bem os alimentos
- Isso estimula a produção de saliva

## Suplementos e saúde bucal

### Vitamina D
- Essencial para absorção de cálcio
- Importante para saúde óssea e dentária

### Probióticos
- Podem ajudar no equilíbrio da flora oral
- Consulte um profissional antes de usar

**Quer uma orientação nutricional personalizada para sua saúde bucal? Agende uma consulta!**
    `,image:"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",publishDate:"2024-09-20",readTime:"5 min",tags:["alimentação","saúde bucal","nutrição","prevenção"],author:"Dra. Patricia Lima",seo:{title:"Alimentação e Saúde Bucal: Guia Completo | Clínica Sorriso Perfeito",description:"Descubra como a alimentação influencia a saúde bucal. Alimentos que fazem bem e mal aos dentes. Dicas de profissionais.",keywords:"alimentação saúde bucal, comida dentes, nutrição dental, cáries prevenção"}},{id:6,slug:"implante-dentario-guia-completo",title:"Implante dentário: tudo o que você precisa saber",excerpt:"Guia completo sobre implantes dentários, desde o procedimento até os cuidados pós-operatórios.",content:`
A perda de dentes pode afetar significativamente a qualidade de vida, influenciando a mastigação, fala e autoestima. O implante dentário surge como a solução mais moderna e eficaz para substituir dentes perdidos.

## O que é um implante dentário

O implante dentário é um pino de titânio que é inserido no osso maxilar ou mandibular, funcionando como a raiz de um dente natural. Sobre este pino, é fixada uma prótese (coroa) que substitui o dente perdido.

### Por que o titânio?
- Biocompatível: não causa rejeição
- Osseointegração: se funde ao osso naturalmente
- Resistente e durável
- Não sofre corrosão

## Vantagens dos implantes

### Funcionais
- Mastigação eficiente como dente natural
- Preservação dos dentes adjacentes
- Manutenção da estrutura óssea
- Fala clara e natural

### Estéticas
- Aparência completamente natural
- Não se move ou solta durante a fala
- Sorriso harmônico e confiante

### Psicológicas
- Maior autoestima e confiança
- Liberdade para sorrir sem constrangimento
- Melhora na qualidade de vida

## Quem pode fazer implantes

### Candidatos ideais
- Adultos com crescimento ósseo completo
- Boa saúde geral e bucal
- Osso suficiente para suportar o implante
- Gengivas saudáveis

### Contraindicações
- Diabetes descontrolado
- Tabagismo excessivo (relativo)
- Problemas de coagulação
- Radioterapia recente na região

## O procedimento passo a passo

### 1. Avaliação e planejamento
- Exame clínico detalhado
- Radiografias e tomografia computadorizada
- Planejamento digital do caso

### 2. Cirurgia de colocação
- Anestesia local
- Inserção do implante no osso
- Sutura da região

### 3. Período de osseointegração
- 3 a 6 meses de cicatrização
- Acompanhamento periódico
- Prótese provisória se necessário

### 4. Colocação da prótese definitiva
- Moldagem da região
- Confecção da coroa
- Fixação da prótese final

## Cuidados pós-operatórios

### Primeiros dias
- Compressas de gelo nas primeiras 24 horas
- Medicação conforme prescrição
- Alimentação líquida/pastosa
- Repouso relativo

### Higienização
- Escovação suave após 24 horas
- Enxaguante bucal prescrito pelo dentista
- Evitar bochechos vigorosos

### A longo prazo
- Higiene rigorosa como dente natural
- Uso de fio dental adequado
- Consultas regulares de manutenção
- Evitar hábitos prejudiciais

## Durabilidade e success rate

### Taxa de sucesso
- Mais de 95% de sucesso a longo prazo
- Tecnologia comprovada há décadas
- Melhoria constante das técnicas

### Durabilidade
- Podem durar toda a vida com cuidados adequados
- Prótese pode necessitar substituição após 10-15 anos
- Implante raramente precisa ser trocado

## Tipos de implantes

### Implante unitário
- Substitui um dente individual
- Mais comum e simples

### Prótese sobre implantes
- Substitui múltiplos dentes
- Protocolo fixo ou removível

### All-on-4 ou All-on-6
- Reabilitação total da arcada
- Apenas 4 ou 6 implantes por arcada

**Quer saber se você é candidato a implante dentário? Agende uma avaliação gratuita!**
    `,image:"https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",publishDate:"2024-11-28",readTime:"6 min",tags:["implante dentário","reabilitação oral","prótese"],author:"Dr. Roberto Oliveira",seo:{title:"Implante Dentário: Guia Completo 2024 | Clínica Sorriso Perfeito",description:"Tudo sobre implante dentário: procedimento, vantagens, cuidados e durabilidade. Guia completo com informações de especialistas.",keywords:"implante dentário, reabilitação oral, prótese dentária, osseointegração"}}],Fv=x(R.article)`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`,Jk=x.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`,e7=x.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Fv}:hover & {
    transform: scale(1.05);
  }
`,t7=x.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.1) 100%
  );
`,n7=x.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,r7=x.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: var(--text-gray);
`,o7=x.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  svg {
    font-size: 0.75rem;
    color: var(--primary-color);
  }
`,i7=x.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,a7=x.p`
  color: var(--text-gray);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex-grow: 1;
`,s7=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
`,l7=x.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--text-gray);

  svg {
    color: var(--primary-color);
    font-size: 0.75rem;
  }
`,c7=x.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,u7=x.span`
  background: var(--primary-color-light);
  color: var(--primary-color);
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
`,d7=x(Ie)`
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.875rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color-dark);
  }
`,f7=e=>new Date(e).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"}),p7=({post:e,index:t})=>c.jsxs(Fv,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.5,delay:t*.1},whileHover:{scale:1.02},children:[c.jsxs(Jk,{children:[c.jsx(e7,{src:e.image,alt:e.title}),c.jsx(t7,{})]}),c.jsxs(n7,{children:[c.jsx(r7,{children:c.jsxs(o7,{children:[c.jsx(yi,{}),c.jsx("span",{children:f7(e.publishDate)})]})}),c.jsx(i7,{children:e.title}),c.jsx(a7,{children:e.excerpt}),c.jsxs(s7,{children:[c.jsxs(l7,{children:[c.jsx(a1,{}),c.jsx("span",{children:e.author})]}),c.jsx(d7,{to:`/blog/${e.slug}`,children:"Ler mais →"})]}),c.jsx(c7,{children:e.tags.slice(0,2).map((n,r)=>c.jsx(u7,{children:n},r))})]})]}),m7=x.div`
  max-width: 500px;
  margin: 0 auto 2rem;
  position: relative;
`,h7=x.input`
  width: 100%;
  padding: 1rem 3rem 1rem 3rem;
  border: 2px solid var(--border-color);
  border-radius: 25px;
  font-size: 1rem;
  background: white;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(46, 139, 87, 0.1);
  }

  &::placeholder {
    color: var(--text-light);
  }
`,g7=x.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-gray);
  pointer-events: none;

  svg {
    font-size: 1rem;
  }
`,v7=x.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--text-gray);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  display: ${e=>e.$visible?"flex":"none"};
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--primary-color);
    background: rgba(46, 139, 87, 0.1);
  }

  svg {
    font-size: 0.875rem;
  }
`,y7=({value:e,onChange:t,placeholder:n="Buscar artigos..."})=>{const[r,o]=b.useState(!1),i=()=>{t("")};return c.jsxs(m7,{children:[c.jsx(g7,{children:c.jsx(w3,{})}),c.jsx(h7,{type:"text",value:e,onChange:a=>t(a.target.value),onFocus:()=>o(!0),onBlur:()=>o(!1),placeholder:n,"aria-label":"Buscar artigos"}),c.jsx(v7,{$visible:e.length>0,onClick:i,"aria-label":"Limpar busca",children:c.jsx(xi,{})})]})},x7=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`,w7=x.div`
  text-align: center;
  margin-bottom: 3rem;
`,b7=x.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,S7=x.p`
  font-size: 1.125rem;
  color: var(--text-gray);
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`,j7=x(R.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,C7=x.div`
  text-align: center;
  margin-bottom: 1rem;
  color: var(--text-gray);
  font-size: 0.875rem;
`,k7=x(R.div)`
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-gray);
`,P7=x.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`,E7=x.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`,T7=x.p`
  font-size: 1rem;
  opacity: 0.8;
`,z7=()=>{const[e,t]=b.useState(""),n=b.useMemo(()=>{if(!e.trim())return ds;const r=e.toLowerCase();return ds.filter(o=>{const i=o.title.toLowerCase().includes(r),a=o.excerpt.toLowerCase().includes(r),s=o.content.toLowerCase().includes(r),l=o.tags.some(u=>u.toLowerCase().includes(r));return i||a||s||l})},[e]);return c.jsxs(x7,{children:[c.jsxs(w7,{children:[c.jsx(b7,{children:"Blog Odontológico"}),c.jsx(S7,{children:"Informações valiosas sobre saúde bucal, dicas de cuidados e as últimas novidades da odontologia moderna."})]}),c.jsx(y7,{value:e,onChange:t,placeholder:"Buscar por título, conteúdo ou tags..."}),e&&c.jsxs(C7,{children:[n.length===0?"Nenhum artigo encontrado":`${n.length} artigo${n.length!==1?"s":""} encontrado${n.length!==1?"s":""}`,e&&` para "${e}"`]}),n.length>0?c.jsx(j7,{layout:!0,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:n.map((r,o)=>c.jsx(p7,{post:r,index:o},r.id))}):c.jsxs(k7,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[c.jsx(P7,{children:"📝"}),c.jsx(E7,{children:e?"Nenhum artigo encontrado":"Nenhum artigo disponível"}),c.jsx(T7,{children:e?"Tente buscar com outros termos ou limpe o filtro para ver todos os artigos.":"Nossos especialistas estão preparando conteúdo incrível para você."})]})]})},A7=()=>c.jsxs(c.Fragment,{children:[c.jsxs(gd,{children:[c.jsx("title",{children:"Blog Odontológico | Clínica Sorriso Perfeito"}),c.jsx("meta",{name:"description",content:"Blog com dicas de saúde bucal, cuidados dentários e informações sobre tratamentos odontológicos. Conteúdo atualizado por especialistas."}),c.jsx("meta",{name:"keywords",content:"blog odontológico, saúde bucal, dicas dentárias, cuidados orais, ortodontia, implantes, clareamento dental"}),c.jsx("meta",{property:"og:title",content:"Blog Odontológico | Clínica Sorriso Perfeito"}),c.jsx("meta",{property:"og:description",content:"Informações valiosas sobre saúde bucal e cuidados dentários por especialistas."}),c.jsx("meta",{property:"og:type",content:"website"})]}),c.jsx(Dn,{children:c.jsx(z7,{})})]}),R7=x.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
`,D7=x(Ie)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 2rem;
  padding: 0.5rem 0;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color-dark);
  }

  svg {
    font-size: 0.875rem;
  }
`,M7=x(R.header)`
  margin-bottom: 2rem;
`,$7=x.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 2rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 250px;
  }
`,N7=x.h1`
  font-size: 2.75rem;
  font-weight: 800;
  color: var(--text-dark);
  line-height: 1.2;
  margin-bottom: 1.5rem;
  font-family: 'Inter', 'Roboto', sans-serif;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.25rem;
    text-align: left;
  }
`,L7=x.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  color: var(--text-gray);
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-color);
`,Jm=x.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;

  svg {
    font-size: 0.75rem;
    color: var(--primary-color);
  }
`,I7=x(R.div)`
  line-height: 1.8;
  font-size: 1.125rem;
  color: var(--text-dark);
  font-family: 'Inter', 'Roboto', sans-serif;

  p {
    margin-bottom: 1.75rem;
    text-align: justify;
    text-justify: inter-word;
  }

  h2 {
    font-size: 1.875rem;
    font-weight: 700;
    margin: 3rem 0 1.5rem;
    color: var(--text-dark);
    position: relative;
    padding-left: 1.25rem;
    font-family: 'Inter', 'Roboto', sans-serif;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      background: linear-gradient(135deg, var(--primary-color), #45a049);
      border-radius: 2px;
    }
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 2.5rem 0 1.25rem;
    color: var(--text-dark);
    font-family: 'Inter', 'Roboto', sans-serif;
  }

  ul, ol {
    margin-bottom: 2rem;
    padding-left: 2rem;
  }

  li {
    margin-bottom: 0.75rem;
    line-height: 1.7;
  }

  strong {
    font-weight: 700;
    color: var(--primary-color);
  }

  blockquote {
    background: linear-gradient(135deg, var(--primary-color-light), #f0f8f0);
    border-left: 5px solid var(--primary-color);
    padding: 2rem;
    margin: 2.5rem 0;
    border-radius: 0 12px 12px 0;
    font-style: italic;
    font-size: 1.1rem;
    box-shadow: 0 2px 10px rgba(46, 139, 87, 0.1);
  }

  @media (max-width: 768px) {
    font-size: 1.0625rem;
    padding: 0 0.5rem;

    p {
      margin-bottom: 1.5rem;
    }

    h2 {
      font-size: 1.625rem;
      margin: 2.5rem 0 1.25rem;
      padding-left: 1rem;
    }

    h3 {
      font-size: 1.375rem;
      margin: 2rem 0 1rem;
    }

    blockquote {
      padding: 1.5rem;
      margin: 2rem 0;
      font-size: 1.05rem;
    }
  }
`,O7=x.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
`,V7=x.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`,F7=x.span`
  background: var(--primary-color-light);
  color: var(--primary-color);
  padding: 0.375rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
  font-weight: 500;
`,_7=x.div`
  background: linear-gradient(135deg, var(--primary-color-light), #f8f9fa);
  border: 2px solid var(--primary-color);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  margin: 2rem 0;
`,B7=x.h3`
  font-size: 1.375rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 1rem;
`,U7=x.p`
  color: var(--text-gray);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`,H7=x.div`
  margin-top: 3rem;
`,W7=x.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
`,G7=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`,q7=x(Ie)`
  display: block;
  padding: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(46, 139, 87, 0.1);
  }
`,Y7=x.h4`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
  line-height: 1.4;
`,K7=x.div`
  font-size: 0.75rem;
  color: var(--text-gray);
`,eh=e=>new Date(e).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"}),Q7=()=>{const{slug:e}=G2(),t=ds.find(i=>i.slug===e),{sendGeneralInquiry:n}=Lv();if(!t)return c.jsx(s5,{to:"/blog",replace:!0});const r=ds.filter(i=>i.id!==t.id&&i.tags.some(a=>t.tags.includes(a))).slice(0,2),o=i=>i.split(`

`).map((a,s)=>a.startsWith("## ")?`<h2>${a.replace("## ","")}</h2>`:a.startsWith("### ")?`<h3>${a.replace("### ","")}</h3>`:a.startsWith("**")&&a.endsWith("**")?`<blockquote>${a.replace(/\*\*/g,"")}</blockquote>`:`<p>${a}</p>`).join("");return c.jsxs(c.Fragment,{children:[c.jsxs(gd,{children:[c.jsx("title",{children:t.seo.title}),c.jsx("meta",{name:"description",content:t.seo.description}),c.jsx("meta",{name:"keywords",content:t.seo.keywords}),c.jsx("meta",{property:"og:title",content:t.title}),c.jsx("meta",{property:"og:description",content:t.excerpt}),c.jsx("meta",{property:"og:image",content:t.image}),c.jsx("meta",{property:"og:type",content:"article"}),c.jsx("meta",{name:"article:published_time",content:t.publishDate}),c.jsx("meta",{name:"article:author",content:t.author}),c.jsx("meta",{name:"article:tag",content:t.tags.join(", ")})]}),c.jsxs(R7,{children:[c.jsxs(D7,{to:"/blog",children:[c.jsx(t3,{}),"Voltar para o blog"]}),c.jsxs(M7,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},children:[c.jsx($7,{src:t.image,alt:t.title}),c.jsx(N7,{children:t.title}),c.jsxs(L7,{children:[c.jsxs(Jm,{children:[c.jsx(yi,{}),c.jsx("span",{children:eh(t.publishDate)})]}),c.jsxs(Jm,{children:[c.jsx(a1,{}),c.jsx("span",{children:t.author})]})]})]}),c.jsx(I7,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},dangerouslySetInnerHTML:{__html:o(t.content)}}),c.jsxs(_7,{children:[c.jsx(B7,{children:"Precisa de cuidados odontológicos?"}),c.jsx(U7,{children:"Nossa equipe de especialistas está pronta para cuidar do seu sorriso. Agende uma consulta e receba o melhor atendimento."}),c.jsx(Mt,{variant:"whatsapp",size:"large",onClick:()=>n('Olá! Li o artigo sobre "'+t.title+'" e gostaria de agendar uma consulta.'),children:"Agendar Consulta"})]}),c.jsxs(O7,{children:[c.jsx(V7,{children:t.tags.map((i,a)=>c.jsx(F7,{children:i},a))}),r.length>0&&c.jsxs(H7,{children:[c.jsx(W7,{children:"Artigos relacionados"}),c.jsx(G7,{children:r.map(i=>c.jsxs(q7,{to:`/blog/${i.slug}`,children:[c.jsx(Y7,{children:i.title}),c.jsx(K7,{children:eh(i.publishDate)})]},i.id))})]})]})]})]})},X7=()=>c.jsx(Dn,{children:c.jsx(Q7,{})}),Z7=()=>{const[e,t]=b.useState({name:"",email:"",phone:"",subject:"",message:""}),[n,r]=b.useState({}),[o,i]=b.useState(!1),[a,s]=b.useState(!1),l=[{value:"informacoes",label:"Informações"},{value:"orcamento",label:"Orçamento"},{value:"reclamacao",label:"Reclamação"},{value:"elogio",label:"Elogio"}],u=(h,y)=>{let w="";switch(h){case"name":!y||!y.trim()?w="Nome é obrigatório":y.trim().length<2?w="Nome deve ter pelo menos 2 caracteres":y.trim().length>50?w="Nome deve ter no máximo 50 caracteres":/^[a-zA-ZÀ-ſ\s]+$/.test(y.trim())||(w="Nome deve conter apenas letras e espaços");break;case"email":!y||!y.trim()?w="Email é obrigatório":/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(y.trim())?y.length>100&&(w="Email deve ter no máximo 100 caracteres"):w="Por favor, insira um email válido";break;case"phone":if(!y||!y.trim())w="Telefone é obrigatório";else{const j=y.replace(/\D/g,"");j.length<10?w="Telefone deve ter pelo menos 10 dígitos":j.length>11?w="Telefone deve ter no máximo 11 dígitos":j.length===10&&!["11","12","13","14","15","16","17","18","19","21","22","24","27","28","31","32","33","34","35","37","38","41","42","43","44","45","46","47","48","49","51","53","54","55","61","62","63","64","65","66","67","68","69","71","73","74","75","77","79","81","87","82","83","84","85","86","88","89","91","93","94","95","96","97","98","99"].includes(j.substring(0,2))&&(w="Código de área inválido")}break;case"subject":(!y||y==="")&&(w="Assunto é obrigatório");break;case"message":!y||!y.trim()?w="Mensagem é obrigatória":y.trim().length<10?w="Mensagem deve ter pelo menos 10 caracteres":y.trim().length>1e3&&(w="Mensagem deve ter no máximo 1000 caracteres");break}return w},d=(h,y)=>{let w=y;h==="name"&&(w=y.replace(/\s+/g," ")),t(v=>({...v,[h]:w}));const j=u(h,w);r(v=>({...v,[h]:j}))},f=()=>{const h={};return Object.keys(e).forEach(y=>{const w=u(y,e[y]);w&&(h[y]=w)}),r(h),Object.keys(h).length===0},p=async h=>{var y;if(h.preventDefault(),!!f()){i(!0);try{await new Promise(v=>setTimeout(v,2e3)),s(!0),t({name:"",email:"",phone:"",subject:"",message:""});const w=`Olá! Recebi seu contato através do site.

*Nome:* ${e.name}
*Email:* ${e.email}
*Telefone:* ${e.phone}
*Assunto:* ${(y=l.find(v=>v.value===e.subject))==null?void 0:y.label}
*Mensagem:* ${e.message}`,j=`https://wa.me/555591679300?text=${encodeURIComponent(w)}`;setTimeout(()=>{window.open(j,"_blank")},1e3)}catch(w){console.error("Erro ao enviar formulário:",w)}finally{i(!1)}}};return a?c.jsxs("div",{className:"contact-success",children:[c.jsx("div",{className:"success-icon",children:"✓"}),c.jsx("h3",{children:"Mensagem enviada com sucesso!"}),c.jsx("p",{children:"Obrigado pelo seu contato. Em breve você será redirecionado para o WhatsApp para darmos continuidade ao atendimento."}),c.jsx("button",{className:"btn btn-primary",onClick:()=>s(!1),children:"Enviar nova mensagem"})]}):c.jsxs("form",{className:"contact-form",onSubmit:p,children:[c.jsxs("div",{className:"form-grid",children:[c.jsx("div",{className:"form-row",children:c.jsx(dn,{label:"Nome Completo",placeholder:"Digite seu nome completo",value:e.name,onChange:h=>d("name",h),error:n.name,maxLength:50,required:!0})}),c.jsxs("div",{className:"form-row-double",children:[c.jsx(dn,{label:"Email",type:"email",placeholder:"seu@email.com",value:e.email,onChange:h=>d("email",h),error:n.email,maxLength:100,required:!0}),c.jsx(dn,{label:"Telefone",placeholder:"(11) 99999-9999",value:e.phone,onChange:h=>d("phone",h),error:n.phone,mask:"phone",required:!0})]}),c.jsx("div",{className:"form-row",children:c.jsx(us,{label:"Assunto",placeholder:"Selecione o assunto",value:e.subject,onChange:h=>d("subject",h),options:l,error:n.subject,required:!0})}),c.jsx("div",{className:"form-row",children:c.jsx(Qd,{label:"Mensagem",placeholder:"Digite sua mensagem... (mínimo 10 caracteres)",value:e.message,onChange:h=>d("message",h),error:n.message,rows:5,maxLength:1e3,required:!0})})]}),c.jsx("button",{type:"submit",className:"btn btn-primary btn-large",disabled:o,children:o?"Enviando...":"Enviar Mensagem"})]})},J7=()=>c.jsx(Dn,{children:c.jsxs("div",{className:"contact-page",children:[c.jsx("div",{className:"hero-section hero-contact",children:c.jsx("div",{className:"container",children:c.jsxs("div",{className:"hero-content",children:[c.jsx("h1",{className:"hero-title",children:"Entre em Contato"}),c.jsx("p",{className:"hero-subtitle",children:"Estamos prontos para cuidar do seu sorriso. Fale conosco!"})]})})}),c.jsx("section",{className:"contact-content",children:c.jsx("div",{className:"container",children:c.jsxs("div",{className:"contact-grid",children:[c.jsxs("div",{className:"contact-info",children:[c.jsxs("div",{className:"info-section",children:[c.jsx("h2",{children:"Informações de Contato"}),c.jsxs("div",{className:"info-item",children:[c.jsx("div",{className:"info-icon",children:c.jsx(Cd,{})}),c.jsxs("div",{className:"info-details",children:[c.jsx("h3",{children:"Endereço"}),c.jsxs("p",{children:["Rua das Flores, 123",c.jsx("br",{}),"Vila Madalena, São Paulo - SP",c.jsx("br",{}),"CEP: 05462-000"]})]})]}),c.jsxs("div",{className:"info-item",children:[c.jsx("div",{className:"info-icon",children:c.jsx(Ja,{})}),c.jsxs("div",{className:"info-details",children:[c.jsx("h3",{children:"Telefone"}),c.jsx("p",{children:"(55) 99 9167-9300"})]})]}),c.jsxs("div",{className:"info-item",children:[c.jsx("div",{className:"info-icon",children:c.jsx(Bt,{})}),c.jsxs("div",{className:"info-details",children:[c.jsx("h3",{children:"WhatsApp"}),c.jsx("p",{children:c.jsx("a",{href:"https://wa.me/555591679300",target:"_blank",rel:"noopener noreferrer",className:"whatsapp-link",children:"(55) 55 9167-9300"})})]})]})]}),c.jsxs("div",{className:"hours-section",children:[c.jsx("h3",{children:"Horários de Funcionamento"}),c.jsxs("div",{className:"hours-list",children:[c.jsxs("div",{className:"hours-item",children:[c.jsx("span",{className:"day",children:"Segunda a Sexta"}),c.jsx("span",{className:"time",children:"8h às 18h"})]}),c.jsxs("div",{className:"hours-item",children:[c.jsx("span",{className:"day",children:"Sábado"}),c.jsx("span",{className:"time",children:"8h às 12h"})]}),c.jsxs("div",{className:"hours-item",children:[c.jsx("span",{className:"day",children:"Domingo"}),c.jsx("span",{className:"time",children:"Fechado"})]})]})]})]}),c.jsxs("div",{className:"contact-form-section",children:[c.jsx("h2",{children:"Envie sua mensagem"}),c.jsx("p",{children:"Preencha o formulário abaixo e entraremos em contato o mais breve possível."}),c.jsx(Z7,{})]})]})})}),c.jsx("section",{className:"map-section",children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"section-title",children:"Nossa Localização"}),c.jsx("div",{className:"map-container",children:c.jsxs("div",{className:"map-placeholder",children:[c.jsx("div",{className:"map-icon",children:c.jsx(g3,{})}),c.jsxs("p",{children:["Av. Brigadeiro Faria Lima, 3477 - Itaim Bibi",c.jsx("br",{}),"São Paulo - SP, 04538-133"]}),c.jsx("a",{href:"https://maps.google.com/?q=Av.+Brigadeiro+Faria+Lima,+3477+Itaim+Bibi+São+Paulo",target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",children:"Ver no Google Maps"})]})})]})}),c.jsx("section",{className:"emergency-contact",children:c.jsx("div",{className:"container",children:c.jsxs("div",{className:"emergency-card",children:[c.jsx("div",{className:"emergency-icon",children:c.jsx(d3,{})}),c.jsxs("div",{className:"emergency-content",children:[c.jsx("h3",{children:"Emergências Odontológicas"}),c.jsx("p",{children:"Para urgências fora do horário comercial, entre em contato pelo WhatsApp ou deixe uma mensagem no formulário informando que é uma emergência."}),c.jsx("a",{href:"https://wa.me/555591679300?text=EMERGÊNCIA - Preciso de atendimento urgente",className:"btn btn-emergency",target:"_blank",rel:"noopener noreferrer",children:"WhatsApp Emergência"})]})]})})})]})});function e9(){return c.jsx(z3,{children:c.jsxs(Tg,{children:[c.jsx(Y4,{}),c.jsxs(g5,{children:[c.jsx(K4,{}),c.jsxs(c5,{children:[c.jsx(Pt,{path:"/",element:c.jsx(Gj,{})}),c.jsx(Pt,{path:"/sobre",element:c.jsx(Xj,{})}),c.jsx(Pt,{path:"/servicos",element:c.jsx(dC,{})}),c.jsx(Pt,{path:"/agendamento",element:c.jsx(ck,{})}),c.jsx(Pt,{path:"/galeria",element:c.jsx(Zk,{})}),c.jsx(Pt,{path:"/blog",element:c.jsx(A7,{})}),c.jsx(Pt,{path:"/blog/:slug",element:c.jsx(X7,{})}),c.jsx(Pt,{path:"/contato",element:c.jsx(J7,{})}),c.jsx(Pt,{path:"*",element:c.jsx(L3,{})})]}),c.jsx(U3,{})]})]})})}ql.createRoot(document.getElementById("root")).render(c.jsx(G.StrictMode,{children:c.jsx(e9,{})}));
