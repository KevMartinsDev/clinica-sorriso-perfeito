var Vv=Object.defineProperty;var Fv=(e,t,n)=>t in e?Vv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ft=(e,t,n)=>Fv(e,typeof t!="symbol"?t+"":t,n);function _v(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function di(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Jm={exports:{}},us={},eh={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fi=Symbol.for("react.element"),Bv=Symbol.for("react.portal"),Uv=Symbol.for("react.fragment"),Hv=Symbol.for("react.strict_mode"),Wv=Symbol.for("react.profiler"),Gv=Symbol.for("react.provider"),qv=Symbol.for("react.context"),Yv=Symbol.for("react.forward_ref"),Kv=Symbol.for("react.suspense"),Qv=Symbol.for("react.memo"),Xv=Symbol.for("react.lazy"),Kd=Symbol.iterator;function Zv(e){return e===null||typeof e!="object"?null:(e=Kd&&e[Kd]||e["@@iterator"],typeof e=="function"?e:null)}var th={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nh=Object.assign,rh={};function Zr(e,t,n){this.props=e,this.context=t,this.refs=rh,this.updater=n||th}Zr.prototype.isReactComponent={};Zr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function oh(){}oh.prototype=Zr.prototype;function pu(e,t,n){this.props=e,this.context=t,this.refs=rh,this.updater=n||th}var mu=pu.prototype=new oh;mu.constructor=pu;nh(mu,Zr.prototype);mu.isPureReactComponent=!0;var Qd=Array.isArray,ih=Object.prototype.hasOwnProperty,hu={current:null},ah={key:!0,ref:!0,__self:!0,__source:!0};function sh(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)ih.call(t,r)&&!ah.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:fi,type:e,key:i,ref:a,props:o,_owner:hu.current}}function Jv(e,t){return{$$typeof:fi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function gu(e){return typeof e=="object"&&e!==null&&e.$$typeof===fi}function ey(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Xd=/\/+/g;function Bs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ey(""+e.key):t.toString(36)}function ea(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case fi:case Bv:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Bs(a,0):r,Qd(o)?(n="",e!=null&&(n=e.replace(Xd,"$&/")+"/"),ea(o,t,n,"",function(u){return u})):o!=null&&(gu(o)&&(o=Jv(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Xd,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Qd(e))for(var s=0;s<e.length;s++){i=e[s];var l=r+Bs(i,s);a+=ea(i,t,n,l,o)}else if(l=Zv(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=r+Bs(i,s++),a+=ea(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ci(e,t,n){if(e==null)return e;var r=[],o=0;return ea(e,r,"","",function(i){return t.call(n,i,o++)}),r}function ty(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},ta={transition:null},ny={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:ta,ReactCurrentOwner:hu};function lh(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:Ci,forEach:function(e,t,n){Ci(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ci(e,function(){t++}),t},toArray:function(e){return Ci(e,function(t){return t})||[]},only:function(e){if(!gu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=Zr;V.Fragment=Uv;V.Profiler=Wv;V.PureComponent=pu;V.StrictMode=Hv;V.Suspense=Kv;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ny;V.act=lh;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=nh({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=hu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)ih.call(t,l)&&!ah.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:fi,type:e.type,key:o,ref:i,props:r,_owner:a}};V.createContext=function(e){return e={$$typeof:qv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Gv,_context:e},e.Consumer=e};V.createElement=sh;V.createFactory=function(e){var t=sh.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:Yv,render:e}};V.isValidElement=gu;V.lazy=function(e){return{$$typeof:Xv,_payload:{_status:-1,_result:e},_init:ty}};V.memo=function(e,t){return{$$typeof:Qv,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=ta.transition;ta.transition={};try{e()}finally{ta.transition=t}};V.unstable_act=lh;V.useCallback=function(e,t){return $e.current.useCallback(e,t)};V.useContext=function(e){return $e.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};V.useEffect=function(e,t){return $e.current.useEffect(e,t)};V.useId=function(){return $e.current.useId()};V.useImperativeHandle=function(e,t,n){return $e.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return $e.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return $e.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return $e.current.useMemo(e,t)};V.useReducer=function(e,t,n){return $e.current.useReducer(e,t,n)};V.useRef=function(e){return $e.current.useRef(e)};V.useState=function(e){return $e.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return $e.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return $e.current.useTransition()};V.version="18.3.1";eh.exports=V;var b=eh.exports;const G=di(b),ry=_v({__proto__:null,default:G},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy=b,iy=Symbol.for("react.element"),ay=Symbol.for("react.fragment"),sy=Object.prototype.hasOwnProperty,ly=oy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cy={key:!0,ref:!0,__self:!0,__source:!0};function ch(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)sy.call(t,r)&&!cy.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:iy,type:e,key:i,ref:a,props:o,_owner:ly.current}}us.Fragment=ay;us.jsx=ch;us.jsxs=ch;Jm.exports=us;var c=Jm.exports,Wl={},uh={exports:{}},Qe={},dh={exports:{}},fh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,$){var I=z.length;z.push($);e:for(;0<I;){var N=I-1>>>1,_=z[N];if(0<o(_,$))z[N]=$,z[I]=_,I=N;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var $=z[0],I=z.pop();if(I!==$){z[0]=I;e:for(var N=0,_=z.length,Ct=_>>>1;N<Ct;){var Le=2*(N+1)-1,ut=z[Le],me=Le+1,Ze=z[me];if(0>o(ut,I))me<_&&0>o(Ze,ut)?(z[N]=Ze,z[me]=I,N=me):(z[N]=ut,z[Le]=I,N=Le);else if(me<_&&0>o(Ze,I))z[N]=Ze,z[me]=I,N=me;else break e}}return $}function o(z,$){var I=z.sortIndex-$.sortIndex;return I!==0?I:z.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],d=1,f=null,p=3,h=!1,y=!1,w=!1,j=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(z){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=z)r(u),$.sortIndex=$.expirationTime,t(l,$);else break;$=n(u)}}function S(z){if(w=!1,g(z),!y)if(n(l)!==null)y=!0,J(P);else{var $=n(u);$!==null&&Ce(S,$.startTime-z)}}function P(z,$){y=!1,w&&(w=!1,v(E),E=-1),h=!0;var I=p;try{for(g($),f=n(l);f!==null&&(!(f.expirationTime>$)||z&&!oe());){var N=f.callback;if(typeof N=="function"){f.callback=null,p=f.priorityLevel;var _=N(f.expirationTime<=$);$=e.unstable_now(),typeof _=="function"?f.callback=_:f===n(l)&&r(l),g($)}else r(l);f=n(l)}if(f!==null)var Ct=!0;else{var Le=n(u);Le!==null&&Ce(S,Le.startTime-$),Ct=!1}return Ct}finally{f=null,p=I,h=!1}}var k=!1,C=null,E=-1,D=5,M=-1;function oe(){return!(e.unstable_now()-M<D)}function pe(){if(C!==null){var z=e.unstable_now();M=z;var $=!0;try{$=C(!0,z)}finally{$?we():(k=!1,C=null)}}else k=!1}var we;if(typeof m=="function")we=function(){m(pe)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,jt=ce.port2;ce.port1.onmessage=pe,we=function(){jt.postMessage(null)}}else we=function(){j(pe,0)};function J(z){C=z,k||(k=!0,we())}function Ce(z,$){E=j(function(){z(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){y||h||(y=!0,J(P))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(z){switch(p){case 1:case 2:case 3:var $=3;break;default:$=p}var I=p;p=$;try{return z()}finally{p=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,$){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var I=p;p=z;try{return $()}finally{p=I}},e.unstable_scheduleCallback=function(z,$,I){var N=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?N+I:N):I=N,z){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=I+_,z={id:d++,callback:$,priorityLevel:z,startTime:I,expirationTime:_,sortIndex:-1},I>N?(z.sortIndex=I,t(u,z),n(l)===null&&z===n(u)&&(w?(v(E),E=-1):w=!0,Ce(S,I-N))):(z.sortIndex=_,t(l,z),y||h||(y=!0,J(P))),z},e.unstable_shouldYield=oe,e.unstable_wrapCallback=function(z){var $=p;return function(){var I=p;p=$;try{return z.apply(this,arguments)}finally{p=I}}}})(fh);dh.exports=fh;var uy=dh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dy=b,Ye=uy;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ph=new Set,Bo={};function rr(e,t){Ir(e,t),Ir(e+"Capture",t)}function Ir(e,t){for(Bo[e]=t,e=0;e<t.length;e++)ph.add(t[e])}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gl=Object.prototype.hasOwnProperty,fy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zd={},Jd={};function py(e){return Gl.call(Jd,e)?!0:Gl.call(Zd,e)?!1:fy.test(e)?Jd[e]=!0:(Zd[e]=!0,!1)}function my(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function hy(e,t,n,r){if(t===null||typeof t>"u"||my(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ne(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){je[e]=new Ne(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];je[t]=new Ne(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){je[e]=new Ne(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){je[e]=new Ne(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){je[e]=new Ne(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){je[e]=new Ne(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){je[e]=new Ne(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){je[e]=new Ne(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){je[e]=new Ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var vu=/[\-:]([a-z])/g;function yu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(vu,yu);je[t]=new Ne(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(vu,yu);je[t]=new Ne(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(vu,yu);je[t]=new Ne(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){je[e]=new Ne(e,1,!1,e.toLowerCase(),null,!1,!1)});je.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){je[e]=new Ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function xu(e,t,n,r){var o=je.hasOwnProperty(t)?je[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(hy(t,n,o,r)&&(n=null),r||o===null?py(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xt=dy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ki=Symbol.for("react.element"),fr=Symbol.for("react.portal"),pr=Symbol.for("react.fragment"),wu=Symbol.for("react.strict_mode"),ql=Symbol.for("react.profiler"),mh=Symbol.for("react.provider"),hh=Symbol.for("react.context"),bu=Symbol.for("react.forward_ref"),Yl=Symbol.for("react.suspense"),Kl=Symbol.for("react.suspense_list"),Su=Symbol.for("react.memo"),rn=Symbol.for("react.lazy"),gh=Symbol.for("react.offscreen"),ef=Symbol.iterator;function ro(e){return e===null||typeof e!="object"?null:(e=ef&&e[ef]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,Us;function bo(e){if(Us===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Us=t&&t[1]||""}return`
`+Us+e}var Hs=!1;function Ws(e,t){if(!e||Hs)return"";Hs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var l=`
`+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Hs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?bo(e):""}function gy(e){switch(e.tag){case 5:return bo(e.type);case 16:return bo("Lazy");case 13:return bo("Suspense");case 19:return bo("SuspenseList");case 0:case 2:case 15:return e=Ws(e.type,!1),e;case 11:return e=Ws(e.type.render,!1),e;case 1:return e=Ws(e.type,!0),e;default:return""}}function Ql(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pr:return"Fragment";case fr:return"Portal";case ql:return"Profiler";case wu:return"StrictMode";case Yl:return"Suspense";case Kl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hh:return(e.displayName||"Context")+".Consumer";case mh:return(e._context.displayName||"Context")+".Provider";case bu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Su:return t=e.displayName||null,t!==null?t:Ql(e.type)||"Memo";case rn:t=e._payload,e=e._init;try{return Ql(e(t))}catch{}}return null}function vy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ql(t);case 8:return t===wu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yy(e){var t=vh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pi(e){e._valueTracker||(e._valueTracker=yy(e))}function yh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=vh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ba(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xl(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function tf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=kn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function xh(e,t){t=t.checked,t!=null&&xu(e,"checked",t,!1)}function Zl(e,t){xh(e,t);var n=kn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Jl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Jl(e,t.type,kn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function nf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Jl(e,t,n){(t!=="number"||ba(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var So=Array.isArray;function zr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+kn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ec(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function rf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(So(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kn(n)}}function wh(e,t){var n=kn(t.value),r=kn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function of(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ei,Sh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ei=Ei||document.createElement("div"),Ei.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ei.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Uo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var To={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xy=["Webkit","ms","Moz","O"];Object.keys(To).forEach(function(e){xy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),To[t]=To[e]})});function jh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||To.hasOwnProperty(e)&&To[e]?(""+t).trim():t+"px"}function Ch(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=jh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var wy=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nc(e,t){if(t){if(wy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function rc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oc=null;function ju(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ic=null,Ar=null,Rr=null;function af(e){if(e=hi(e)){if(typeof ic!="function")throw Error(T(280));var t=e.stateNode;t&&(t=hs(t),ic(e.stateNode,e.type,t))}}function kh(e){Ar?Rr?Rr.push(e):Rr=[e]:Ar=e}function Ph(){if(Ar){var e=Ar,t=Rr;if(Rr=Ar=null,af(e),t)for(e=0;e<t.length;e++)af(t[e])}}function Eh(e,t){return e(t)}function Th(){}var Gs=!1;function zh(e,t,n){if(Gs)return e(t,n);Gs=!0;try{return Eh(e,t,n)}finally{Gs=!1,(Ar!==null||Rr!==null)&&(Th(),Ph())}}function Ho(e,t){var n=e.stateNode;if(n===null)return null;var r=hs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var ac=!1;if(Gt)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){ac=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{ac=!1}function by(e,t,n,r,o,i,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var zo=!1,Sa=null,ja=!1,sc=null,Sy={onError:function(e){zo=!0,Sa=e}};function jy(e,t,n,r,o,i,a,s,l){zo=!1,Sa=null,by.apply(Sy,arguments)}function Cy(e,t,n,r,o,i,a,s,l){if(jy.apply(this,arguments),zo){if(zo){var u=Sa;zo=!1,Sa=null}else throw Error(T(198));ja||(ja=!0,sc=u)}}function or(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ah(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function sf(e){if(or(e)!==e)throw Error(T(188))}function ky(e){var t=e.alternate;if(!t){if(t=or(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return sf(o),e;if(i===r)return sf(o),t;i=i.sibling}throw Error(T(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function Rh(e){return e=ky(e),e!==null?Dh(e):null}function Dh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Dh(e);if(t!==null)return t;e=e.sibling}return null}var Mh=Ye.unstable_scheduleCallback,lf=Ye.unstable_cancelCallback,Py=Ye.unstable_shouldYield,Ey=Ye.unstable_requestPaint,ae=Ye.unstable_now,Ty=Ye.unstable_getCurrentPriorityLevel,Cu=Ye.unstable_ImmediatePriority,$h=Ye.unstable_UserBlockingPriority,Ca=Ye.unstable_NormalPriority,zy=Ye.unstable_LowPriority,Nh=Ye.unstable_IdlePriority,ds=null,Rt=null;function Ay(e){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(ds,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:My,Ry=Math.log,Dy=Math.LN2;function My(e){return e>>>=0,e===0?32:31-(Ry(e)/Dy|0)|0}var Ti=64,zi=4194304;function jo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ka(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=jo(s):(i&=a,i!==0&&(r=jo(i)))}else a=n&~o,a!==0?r=jo(a):i!==0&&(r=jo(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),o=1<<n,r|=e[n],t&=~o;return r}function $y(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ny(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-xt(i),s=1<<a,l=o[a];l===-1?(!(s&n)||s&r)&&(o[a]=$y(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function lc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lh(){var e=Ti;return Ti<<=1,!(Ti&4194240)&&(Ti=64),e}function qs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function Ly(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-xt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ku(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var W=0;function Ih(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Oh,Pu,Vh,Fh,_h,cc=!1,Ai=[],pn=null,mn=null,hn=null,Wo=new Map,Go=new Map,sn=[],Iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cf(e,t){switch(e){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":mn=null;break;case"mouseover":case"mouseout":hn=null;break;case"pointerover":case"pointerout":Wo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(t.pointerId)}}function io(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=hi(t),t!==null&&Pu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Oy(e,t,n,r,o){switch(t){case"focusin":return pn=io(pn,e,t,n,r,o),!0;case"dragenter":return mn=io(mn,e,t,n,r,o),!0;case"mouseover":return hn=io(hn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Wo.set(i,io(Wo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Go.set(i,io(Go.get(i)||null,e,t,n,r,o)),!0}return!1}function Bh(e){var t=Bn(e.target);if(t!==null){var n=or(t);if(n!==null){if(t=n.tag,t===13){if(t=Ah(n),t!==null){e.blockedOn=t,_h(e.priority,function(){Vh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function na(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=uc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);oc=r,n.target.dispatchEvent(r),oc=null}else return t=hi(n),t!==null&&Pu(t),e.blockedOn=n,!1;t.shift()}return!0}function uf(e,t,n){na(e)&&n.delete(t)}function Vy(){cc=!1,pn!==null&&na(pn)&&(pn=null),mn!==null&&na(mn)&&(mn=null),hn!==null&&na(hn)&&(hn=null),Wo.forEach(uf),Go.forEach(uf)}function ao(e,t){e.blockedOn===t&&(e.blockedOn=null,cc||(cc=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,Vy)))}function qo(e){function t(o){return ao(o,e)}if(0<Ai.length){ao(Ai[0],e);for(var n=1;n<Ai.length;n++){var r=Ai[n];r.blockedOn===e&&(r.blockedOn=null)}}for(pn!==null&&ao(pn,e),mn!==null&&ao(mn,e),hn!==null&&ao(hn,e),Wo.forEach(t),Go.forEach(t),n=0;n<sn.length;n++)r=sn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<sn.length&&(n=sn[0],n.blockedOn===null);)Bh(n),n.blockedOn===null&&sn.shift()}var Dr=Xt.ReactCurrentBatchConfig,Pa=!0;function Fy(e,t,n,r){var o=W,i=Dr.transition;Dr.transition=null;try{W=1,Eu(e,t,n,r)}finally{W=o,Dr.transition=i}}function _y(e,t,n,r){var o=W,i=Dr.transition;Dr.transition=null;try{W=4,Eu(e,t,n,r)}finally{W=o,Dr.transition=i}}function Eu(e,t,n,r){if(Pa){var o=uc(e,t,n,r);if(o===null)rl(e,t,r,Ea,n),cf(e,r);else if(Oy(o,e,t,n,r))r.stopPropagation();else if(cf(e,r),t&4&&-1<Iy.indexOf(e)){for(;o!==null;){var i=hi(o);if(i!==null&&Oh(i),i=uc(e,t,n,r),i===null&&rl(e,t,r,Ea,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else rl(e,t,r,null,n)}}var Ea=null;function uc(e,t,n,r){if(Ea=null,e=ju(r),e=Bn(e),e!==null)if(t=or(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ah(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ea=e,null}function Uh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ty()){case Cu:return 1;case $h:return 4;case Ca:case zy:return 16;case Nh:return 536870912;default:return 16}default:return 16}}var cn=null,Tu=null,ra=null;function Hh(){if(ra)return ra;var e,t=Tu,n=t.length,r,o="value"in cn?cn.value:cn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return ra=o.slice(e,1<r?1-r:void 0)}function oa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ri(){return!0}function df(){return!1}function Xe(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ri:df,this.isPropagationStopped=df,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ri)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ri)},persist:function(){},isPersistent:Ri}),t}var Jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zu=Xe(Jr),mi=re({},Jr,{view:0,detail:0}),By=Xe(mi),Ys,Ks,so,fs=re({},mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==so&&(so&&e.type==="mousemove"?(Ys=e.screenX-so.screenX,Ks=e.screenY-so.screenY):Ks=Ys=0,so=e),Ys)},movementY:function(e){return"movementY"in e?e.movementY:Ks}}),ff=Xe(fs),Uy=re({},fs,{dataTransfer:0}),Hy=Xe(Uy),Wy=re({},mi,{relatedTarget:0}),Qs=Xe(Wy),Gy=re({},Jr,{animationName:0,elapsedTime:0,pseudoElement:0}),qy=Xe(Gy),Yy=re({},Jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ky=Xe(Yy),Qy=re({},Jr,{data:0}),pf=Xe(Qy),Xy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ex(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jy[e])?!!t[e]:!1}function Au(){return ex}var tx=re({},mi,{key:function(e){if(e.key){var t=Xy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=oa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Au,charCode:function(e){return e.type==="keypress"?oa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?oa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nx=Xe(tx),rx=re({},fs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mf=Xe(rx),ox=re({},mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Au}),ix=Xe(ox),ax=re({},Jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),sx=Xe(ax),lx=re({},fs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cx=Xe(lx),ux=[9,13,27,32],Ru=Gt&&"CompositionEvent"in window,Ao=null;Gt&&"documentMode"in document&&(Ao=document.documentMode);var dx=Gt&&"TextEvent"in window&&!Ao,Wh=Gt&&(!Ru||Ao&&8<Ao&&11>=Ao),hf=" ",gf=!1;function Gh(e,t){switch(e){case"keyup":return ux.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mr=!1;function fx(e,t){switch(e){case"compositionend":return qh(t);case"keypress":return t.which!==32?null:(gf=!0,hf);case"textInput":return e=t.data,e===hf&&gf?null:e;default:return null}}function px(e,t){if(mr)return e==="compositionend"||!Ru&&Gh(e,t)?(e=Hh(),ra=Tu=cn=null,mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wh&&t.locale!=="ko"?null:t.data;default:return null}}var mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mx[e.type]:t==="textarea"}function Yh(e,t,n,r){kh(r),t=Ta(t,"onChange"),0<t.length&&(n=new zu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ro=null,Yo=null;function hx(e){i0(e,0)}function ps(e){var t=vr(e);if(yh(t))return e}function gx(e,t){if(e==="change")return t}var Kh=!1;if(Gt){var Xs;if(Gt){var Zs="oninput"in document;if(!Zs){var yf=document.createElement("div");yf.setAttribute("oninput","return;"),Zs=typeof yf.oninput=="function"}Xs=Zs}else Xs=!1;Kh=Xs&&(!document.documentMode||9<document.documentMode)}function xf(){Ro&&(Ro.detachEvent("onpropertychange",Qh),Yo=Ro=null)}function Qh(e){if(e.propertyName==="value"&&ps(Yo)){var t=[];Yh(t,Yo,e,ju(e)),zh(hx,t)}}function vx(e,t,n){e==="focusin"?(xf(),Ro=t,Yo=n,Ro.attachEvent("onpropertychange",Qh)):e==="focusout"&&xf()}function yx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ps(Yo)}function xx(e,t){if(e==="click")return ps(t)}function wx(e,t){if(e==="input"||e==="change")return ps(t)}function bx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:bx;function Ko(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Gl.call(t,o)||!St(e[o],t[o]))return!1}return!0}function wf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bf(e,t){var n=wf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wf(n)}}function Xh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zh(){for(var e=window,t=ba();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ba(e.document)}return t}function Du(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sx(e){var t=Zh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Xh(n.ownerDocument.documentElement,n)){if(r!==null&&Du(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=bf(n,i);var a=bf(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jx=Gt&&"documentMode"in document&&11>=document.documentMode,hr=null,dc=null,Do=null,fc=!1;function Sf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fc||hr==null||hr!==ba(r)||(r=hr,"selectionStart"in r&&Du(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Do&&Ko(Do,r)||(Do=r,r=Ta(dc,"onSelect"),0<r.length&&(t=new zu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hr)))}function Di(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gr={animationend:Di("Animation","AnimationEnd"),animationiteration:Di("Animation","AnimationIteration"),animationstart:Di("Animation","AnimationStart"),transitionend:Di("Transition","TransitionEnd")},Js={},Jh={};Gt&&(Jh=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function ms(e){if(Js[e])return Js[e];if(!gr[e])return e;var t=gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jh)return Js[e]=t[n];return e}var e0=ms("animationend"),t0=ms("animationiteration"),n0=ms("animationstart"),r0=ms("transitionend"),o0=new Map,jf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zn(e,t){o0.set(e,t),rr(t,[e])}for(var el=0;el<jf.length;el++){var tl=jf[el],Cx=tl.toLowerCase(),kx=tl[0].toUpperCase()+tl.slice(1);zn(Cx,"on"+kx)}zn(e0,"onAnimationEnd");zn(t0,"onAnimationIteration");zn(n0,"onAnimationStart");zn("dblclick","onDoubleClick");zn("focusin","onFocus");zn("focusout","onBlur");zn(r0,"onTransitionEnd");Ir("onMouseEnter",["mouseout","mouseover"]);Ir("onMouseLeave",["mouseout","mouseover"]);Ir("onPointerEnter",["pointerout","pointerover"]);Ir("onPointerLeave",["pointerout","pointerover"]);rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Px=new Set("cancel close invalid load scroll toggle".split(" ").concat(Co));function Cf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Cy(r,t,void 0,e),e.currentTarget=null}function i0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;Cf(o,s,u),i=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;Cf(o,s,u),i=l}}}if(ja)throw e=sc,ja=!1,sc=null,e}function K(e,t){var n=t[vc];n===void 0&&(n=t[vc]=new Set);var r=e+"__bubble";n.has(r)||(a0(t,e,2,!1),n.add(r))}function nl(e,t,n){var r=0;t&&(r|=4),a0(n,e,r,t)}var Mi="_reactListening"+Math.random().toString(36).slice(2);function Qo(e){if(!e[Mi]){e[Mi]=!0,ph.forEach(function(n){n!=="selectionchange"&&(Px.has(n)||nl(n,!1,e),nl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mi]||(t[Mi]=!0,nl("selectionchange",!1,t))}}function a0(e,t,n,r){switch(Uh(t)){case 1:var o=Fy;break;case 4:o=_y;break;default:o=Eu}n=o.bind(null,t,n,e),o=void 0,!ac||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function rl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Bn(s),a===null)return;if(l=a.tag,l===5||l===6){r=i=a;continue e}s=s.parentNode}}r=r.return}zh(function(){var u=i,d=ju(n),f=[];e:{var p=o0.get(e);if(p!==void 0){var h=zu,y=e;switch(e){case"keypress":if(oa(n)===0)break e;case"keydown":case"keyup":h=nx;break;case"focusin":y="focus",h=Qs;break;case"focusout":y="blur",h=Qs;break;case"beforeblur":case"afterblur":h=Qs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=ff;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Hy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=ix;break;case e0:case t0:case n0:h=qy;break;case r0:h=sx;break;case"scroll":h=By;break;case"wheel":h=cx;break;case"copy":case"cut":case"paste":h=Ky;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=mf}var w=(t&4)!==0,j=!w&&e==="scroll",v=w?p!==null?p+"Capture":null:p;w=[];for(var m=u,g;m!==null;){g=m;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,v!==null&&(S=Ho(m,v),S!=null&&w.push(Xo(m,S,g)))),j)break;m=m.return}0<w.length&&(p=new h(p,y,null,n,d),f.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==oc&&(y=n.relatedTarget||n.fromElement)&&(Bn(y)||y[qt]))break e;if((h||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,h?(y=n.relatedTarget||n.toElement,h=u,y=y?Bn(y):null,y!==null&&(j=or(y),y!==j||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=u),h!==y)){if(w=ff,S="onMouseLeave",v="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(w=mf,S="onPointerLeave",v="onPointerEnter",m="pointer"),j=h==null?p:vr(h),g=y==null?p:vr(y),p=new w(S,m+"leave",h,n,d),p.target=j,p.relatedTarget=g,S=null,Bn(d)===u&&(w=new w(v,m+"enter",y,n,d),w.target=g,w.relatedTarget=j,S=w),j=S,h&&y)t:{for(w=h,v=y,m=0,g=w;g;g=cr(g))m++;for(g=0,S=v;S;S=cr(S))g++;for(;0<m-g;)w=cr(w),m--;for(;0<g-m;)v=cr(v),g--;for(;m--;){if(w===v||v!==null&&w===v.alternate)break t;w=cr(w),v=cr(v)}w=null}else w=null;h!==null&&kf(f,p,h,w,!1),y!==null&&j!==null&&kf(f,j,y,w,!0)}}e:{if(p=u?vr(u):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var P=gx;else if(vf(p))if(Kh)P=wx;else{P=yx;var k=vx}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(P=xx);if(P&&(P=P(e,u))){Yh(f,P,n,d);break e}k&&k(e,p,u),e==="focusout"&&(k=p._wrapperState)&&k.controlled&&p.type==="number"&&Jl(p,"number",p.value)}switch(k=u?vr(u):window,e){case"focusin":(vf(k)||k.contentEditable==="true")&&(hr=k,dc=u,Do=null);break;case"focusout":Do=dc=hr=null;break;case"mousedown":fc=!0;break;case"contextmenu":case"mouseup":case"dragend":fc=!1,Sf(f,n,d);break;case"selectionchange":if(jx)break;case"keydown":case"keyup":Sf(f,n,d)}var C;if(Ru)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else mr?Gh(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Wh&&n.locale!=="ko"&&(mr||E!=="onCompositionStart"?E==="onCompositionEnd"&&mr&&(C=Hh()):(cn=d,Tu="value"in cn?cn.value:cn.textContent,mr=!0)),k=Ta(u,E),0<k.length&&(E=new pf(E,e,null,n,d),f.push({event:E,listeners:k}),C?E.data=C:(C=qh(n),C!==null&&(E.data=C)))),(C=dx?fx(e,n):px(e,n))&&(u=Ta(u,"onBeforeInput"),0<u.length&&(d=new pf("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=C))}i0(f,t)})}function Xo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ta(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Ho(e,n),i!=null&&r.unshift(Xo(e,i,o)),i=Ho(e,t),i!=null&&r.push(Xo(e,i,o))),e=e.return}return r}function cr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function kf(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,o?(l=Ho(n,i),l!=null&&a.unshift(Xo(n,l,s))):o||(l=Ho(n,i),l!=null&&a.push(Xo(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Ex=/\r\n?/g,Tx=/\u0000|\uFFFD/g;function Pf(e){return(typeof e=="string"?e:""+e).replace(Ex,`
`).replace(Tx,"")}function $i(e,t,n){if(t=Pf(t),Pf(e)!==t&&n)throw Error(T(425))}function za(){}var pc=null,mc=null;function hc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gc=typeof setTimeout=="function"?setTimeout:void 0,zx=typeof clearTimeout=="function"?clearTimeout:void 0,Ef=typeof Promise=="function"?Promise:void 0,Ax=typeof queueMicrotask=="function"?queueMicrotask:typeof Ef<"u"?function(e){return Ef.resolve(null).then(e).catch(Rx)}:gc;function Rx(e){setTimeout(function(){throw e})}function ol(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),qo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);qo(t)}function gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Tf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var eo=Math.random().toString(36).slice(2),At="__reactFiber$"+eo,Zo="__reactProps$"+eo,qt="__reactContainer$"+eo,vc="__reactEvents$"+eo,Dx="__reactListeners$"+eo,Mx="__reactHandles$"+eo;function Bn(e){var t=e[At];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qt]||n[At]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Tf(e);e!==null;){if(n=e[At])return n;e=Tf(e)}return t}e=n,n=e.parentNode}return null}function hi(e){return e=e[At]||e[qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function hs(e){return e[Zo]||null}var yc=[],yr=-1;function An(e){return{current:e}}function X(e){0>yr||(e.current=yc[yr],yc[yr]=null,yr--)}function q(e,t){yr++,yc[yr]=e.current,e.current=t}var Pn={},Ae=An(Pn),Fe=An(!1),Zn=Pn;function Or(e,t){var n=e.type.contextTypes;if(!n)return Pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function _e(e){return e=e.childContextTypes,e!=null}function Aa(){X(Fe),X(Ae)}function zf(e,t,n){if(Ae.current!==Pn)throw Error(T(168));q(Ae,t),q(Fe,n)}function s0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(T(108,vy(e)||"Unknown",o));return re({},n,r)}function Ra(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pn,Zn=Ae.current,q(Ae,e),q(Fe,Fe.current),!0}function Af(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=s0(e,t,Zn),r.__reactInternalMemoizedMergedChildContext=e,X(Fe),X(Ae),q(Ae,e)):X(Fe),q(Fe,n)}var Ot=null,gs=!1,il=!1;function l0(e){Ot===null?Ot=[e]:Ot.push(e)}function $x(e){gs=!0,l0(e)}function Rn(){if(!il&&Ot!==null){il=!0;var e=0,t=W;try{var n=Ot;for(W=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ot=null,gs=!1}catch(o){throw Ot!==null&&(Ot=Ot.slice(e+1)),Mh(Cu,Rn),o}finally{W=t,il=!1}}return null}var xr=[],wr=0,Da=null,Ma=0,rt=[],ot=0,Jn=null,Vt=1,Ft="";function In(e,t){xr[wr++]=Ma,xr[wr++]=Da,Da=e,Ma=t}function c0(e,t,n){rt[ot++]=Vt,rt[ot++]=Ft,rt[ot++]=Jn,Jn=e;var r=Vt;e=Ft;var o=32-xt(r)-1;r&=~(1<<o),n+=1;var i=32-xt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Vt=1<<32-xt(t)+o|n<<o|r,Ft=i+e}else Vt=1<<i|n<<o|r,Ft=e}function Mu(e){e.return!==null&&(In(e,1),c0(e,1,0))}function $u(e){for(;e===Da;)Da=xr[--wr],xr[wr]=null,Ma=xr[--wr],xr[wr]=null;for(;e===Jn;)Jn=rt[--ot],rt[ot]=null,Ft=rt[--ot],rt[ot]=null,Vt=rt[--ot],rt[ot]=null}var qe=null,Ge=null,Z=!1,vt=null;function u0(e,t){var n=it(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Rf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Ge=gn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jn!==null?{id:Vt,overflow:Ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=it(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,Ge=null,!0):!1;default:return!1}}function xc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wc(e){if(Z){var t=Ge;if(t){var n=t;if(!Rf(e,t)){if(xc(e))throw Error(T(418));t=gn(n.nextSibling);var r=qe;t&&Rf(e,t)?u0(r,n):(e.flags=e.flags&-4097|2,Z=!1,qe=e)}}else{if(xc(e))throw Error(T(418));e.flags=e.flags&-4097|2,Z=!1,qe=e}}}function Df(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function Ni(e){if(e!==qe)return!1;if(!Z)return Df(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hc(e.type,e.memoizedProps)),t&&(t=Ge)){if(xc(e))throw d0(),Error(T(418));for(;t;)u0(e,t),t=gn(t.nextSibling)}if(Df(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ge=gn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ge=null}}else Ge=qe?gn(e.stateNode.nextSibling):null;return!0}function d0(){for(var e=Ge;e;)e=gn(e.nextSibling)}function Vr(){Ge=qe=null,Z=!1}function Nu(e){vt===null?vt=[e]:vt.push(e)}var Nx=Xt.ReactCurrentBatchConfig;function lo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function Li(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Mf(e){var t=e._init;return t(e._payload)}function f0(e){function t(v,m){if(e){var g=v.deletions;g===null?(v.deletions=[m],v.flags|=16):g.push(m)}}function n(v,m){if(!e)return null;for(;m!==null;)t(v,m),m=m.sibling;return null}function r(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function o(v,m){return v=wn(v,m),v.index=0,v.sibling=null,v}function i(v,m,g){return v.index=g,e?(g=v.alternate,g!==null?(g=g.index,g<m?(v.flags|=2,m):g):(v.flags|=2,m)):(v.flags|=1048576,m)}function a(v){return e&&v.alternate===null&&(v.flags|=2),v}function s(v,m,g,S){return m===null||m.tag!==6?(m=fl(g,v.mode,S),m.return=v,m):(m=o(m,g),m.return=v,m)}function l(v,m,g,S){var P=g.type;return P===pr?d(v,m,g.props.children,S,g.key):m!==null&&(m.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===rn&&Mf(P)===m.type)?(S=o(m,g.props),S.ref=lo(v,m,g),S.return=v,S):(S=da(g.type,g.key,g.props,null,v.mode,S),S.ref=lo(v,m,g),S.return=v,S)}function u(v,m,g,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=pl(g,v.mode,S),m.return=v,m):(m=o(m,g.children||[]),m.return=v,m)}function d(v,m,g,S,P){return m===null||m.tag!==7?(m=Kn(g,v.mode,S,P),m.return=v,m):(m=o(m,g),m.return=v,m)}function f(v,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=fl(""+m,v.mode,g),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ki:return g=da(m.type,m.key,m.props,null,v.mode,g),g.ref=lo(v,null,m),g.return=v,g;case fr:return m=pl(m,v.mode,g),m.return=v,m;case rn:var S=m._init;return f(v,S(m._payload),g)}if(So(m)||ro(m))return m=Kn(m,v.mode,g,null),m.return=v,m;Li(v,m)}return null}function p(v,m,g,S){var P=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:s(v,m,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ki:return g.key===P?l(v,m,g,S):null;case fr:return g.key===P?u(v,m,g,S):null;case rn:return P=g._init,p(v,m,P(g._payload),S)}if(So(g)||ro(g))return P!==null?null:d(v,m,g,S,null);Li(v,g)}return null}function h(v,m,g,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return v=v.get(g)||null,s(m,v,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ki:return v=v.get(S.key===null?g:S.key)||null,l(m,v,S,P);case fr:return v=v.get(S.key===null?g:S.key)||null,u(m,v,S,P);case rn:var k=S._init;return h(v,m,g,k(S._payload),P)}if(So(S)||ro(S))return v=v.get(g)||null,d(m,v,S,P,null);Li(m,S)}return null}function y(v,m,g,S){for(var P=null,k=null,C=m,E=m=0,D=null;C!==null&&E<g.length;E++){C.index>E?(D=C,C=null):D=C.sibling;var M=p(v,C,g[E],S);if(M===null){C===null&&(C=D);break}e&&C&&M.alternate===null&&t(v,C),m=i(M,m,E),k===null?P=M:k.sibling=M,k=M,C=D}if(E===g.length)return n(v,C),Z&&In(v,E),P;if(C===null){for(;E<g.length;E++)C=f(v,g[E],S),C!==null&&(m=i(C,m,E),k===null?P=C:k.sibling=C,k=C);return Z&&In(v,E),P}for(C=r(v,C);E<g.length;E++)D=h(C,v,E,g[E],S),D!==null&&(e&&D.alternate!==null&&C.delete(D.key===null?E:D.key),m=i(D,m,E),k===null?P=D:k.sibling=D,k=D);return e&&C.forEach(function(oe){return t(v,oe)}),Z&&In(v,E),P}function w(v,m,g,S){var P=ro(g);if(typeof P!="function")throw Error(T(150));if(g=P.call(g),g==null)throw Error(T(151));for(var k=P=null,C=m,E=m=0,D=null,M=g.next();C!==null&&!M.done;E++,M=g.next()){C.index>E?(D=C,C=null):D=C.sibling;var oe=p(v,C,M.value,S);if(oe===null){C===null&&(C=D);break}e&&C&&oe.alternate===null&&t(v,C),m=i(oe,m,E),k===null?P=oe:k.sibling=oe,k=oe,C=D}if(M.done)return n(v,C),Z&&In(v,E),P;if(C===null){for(;!M.done;E++,M=g.next())M=f(v,M.value,S),M!==null&&(m=i(M,m,E),k===null?P=M:k.sibling=M,k=M);return Z&&In(v,E),P}for(C=r(v,C);!M.done;E++,M=g.next())M=h(C,v,E,M.value,S),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?E:M.key),m=i(M,m,E),k===null?P=M:k.sibling=M,k=M);return e&&C.forEach(function(pe){return t(v,pe)}),Z&&In(v,E),P}function j(v,m,g,S){if(typeof g=="object"&&g!==null&&g.type===pr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ki:e:{for(var P=g.key,k=m;k!==null;){if(k.key===P){if(P=g.type,P===pr){if(k.tag===7){n(v,k.sibling),m=o(k,g.props.children),m.return=v,v=m;break e}}else if(k.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===rn&&Mf(P)===k.type){n(v,k.sibling),m=o(k,g.props),m.ref=lo(v,k,g),m.return=v,v=m;break e}n(v,k);break}else t(v,k);k=k.sibling}g.type===pr?(m=Kn(g.props.children,v.mode,S,g.key),m.return=v,v=m):(S=da(g.type,g.key,g.props,null,v.mode,S),S.ref=lo(v,m,g),S.return=v,v=S)}return a(v);case fr:e:{for(k=g.key;m!==null;){if(m.key===k)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(v,m.sibling),m=o(m,g.children||[]),m.return=v,v=m;break e}else{n(v,m);break}else t(v,m);m=m.sibling}m=pl(g,v.mode,S),m.return=v,v=m}return a(v);case rn:return k=g._init,j(v,m,k(g._payload),S)}if(So(g))return y(v,m,g,S);if(ro(g))return w(v,m,g,S);Li(v,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(n(v,m.sibling),m=o(m,g),m.return=v,v=m):(n(v,m),m=fl(g,v.mode,S),m.return=v,v=m),a(v)):n(v,m)}return j}var Fr=f0(!0),p0=f0(!1),$a=An(null),Na=null,br=null,Lu=null;function Iu(){Lu=br=Na=null}function Ou(e){var t=$a.current;X($a),e._currentValue=t}function bc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Mr(e,t){Na=e,Lu=br=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ve=!0),e.firstContext=null)}function st(e){var t=e._currentValue;if(Lu!==e)if(e={context:e,memoizedValue:t,next:null},br===null){if(Na===null)throw Error(T(308));br=e,Na.dependencies={lanes:0,firstContext:e}}else br=br.next=e;return t}var Un=null;function Vu(e){Un===null?Un=[e]:Un.push(e)}function m0(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Vu(t)):(n.next=o.next,o.next=n),t.interleaved=n,Yt(e,r)}function Yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var on=!1;function Fu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function h0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Yt(e,n)}return o=r.interleaved,o===null?(t.next=t,Vu(r)):(t.next=o.next,o.next=t),r.interleaved=t,Yt(e,n)}function ia(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ku(e,n)}}function $f(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function La(e,t,n,r){var o=e.updateQueue;on=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?i=u:a.next=u,a=l;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==a&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=l))}if(i!==null){var f=o.baseState;a=0,d=u=l=null,s=i;do{var p=s.lane,h=s.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,w=s;switch(p=t,h=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){f=y.call(h,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,p=typeof y=="function"?y.call(h,f,p):y,p==null)break e;f=re({},f,p);break e;case 2:on=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[s]:p.push(s))}else h={eventTime:h,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=h,l=f):d=d.next=h,a|=p;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;p=s,s=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(d===null&&(l=f),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);tr|=a,e.lanes=a,e.memoizedState=f}}function Nf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(T(191,o));o.call(r)}}}var gi={},Dt=An(gi),Jo=An(gi),ei=An(gi);function Hn(e){if(e===gi)throw Error(T(174));return e}function _u(e,t){switch(q(ei,t),q(Jo,e),q(Dt,gi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:tc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=tc(t,e)}X(Dt),q(Dt,t)}function _r(){X(Dt),X(Jo),X(ei)}function g0(e){Hn(ei.current);var t=Hn(Dt.current),n=tc(t,e.type);t!==n&&(q(Jo,e),q(Dt,n))}function Bu(e){Jo.current===e&&(X(Dt),X(Jo))}var ee=An(0);function Ia(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var al=[];function Uu(){for(var e=0;e<al.length;e++)al[e]._workInProgressVersionPrimary=null;al.length=0}var aa=Xt.ReactCurrentDispatcher,sl=Xt.ReactCurrentBatchConfig,er=0,ne=null,he=null,ve=null,Oa=!1,Mo=!1,ti=0,Lx=0;function ke(){throw Error(T(321))}function Hu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!St(e[n],t[n]))return!1;return!0}function Wu(e,t,n,r,o,i){if(er=i,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,aa.current=e===null||e.memoizedState===null?Fx:_x,e=n(r,o),Mo){i=0;do{if(Mo=!1,ti=0,25<=i)throw Error(T(301));i+=1,ve=he=null,t.updateQueue=null,aa.current=Bx,e=n(r,o)}while(Mo)}if(aa.current=Va,t=he!==null&&he.next!==null,er=0,ve=he=ne=null,Oa=!1,t)throw Error(T(300));return e}function Gu(){var e=ti!==0;return ti=0,e}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?ne.memoizedState=ve=e:ve=ve.next=e,ve}function lt(){if(he===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=ve===null?ne.memoizedState:ve.next;if(t!==null)ve=t,he=e;else{if(e===null)throw Error(T(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ve===null?ne.memoizedState=ve=e:ve=ve.next=e}return ve}function ni(e,t){return typeof t=="function"?t(e):t}function ll(e){var t=lt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=he,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,l=null,u=i;do{var d=u.lane;if((er&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,a=r):l=l.next=f,ne.lanes|=d,tr|=d}u=u.next}while(u!==null&&u!==i);l===null?a=r:l.next=s,St(r,t.memoizedState)||(Ve=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ne.lanes|=i,tr|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function cl(e){var t=lt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);St(i,t.memoizedState)||(Ve=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function v0(){}function y0(e,t){var n=ne,r=lt(),o=t(),i=!St(r.memoizedState,o);if(i&&(r.memoizedState=o,Ve=!0),r=r.queue,qu(b0.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,ri(9,w0.bind(null,n,r,o,t),void 0,null),xe===null)throw Error(T(349));er&30||x0(n,t,o)}return o}function x0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function w0(e,t,n,r){t.value=n,t.getSnapshot=r,S0(t)&&j0(e)}function b0(e,t,n){return n(function(){S0(t)&&j0(e)})}function S0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!St(e,n)}catch{return!0}}function j0(e){var t=Yt(e,1);t!==null&&wt(t,e,1,-1)}function Lf(e){var t=Et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ni,lastRenderedState:e},t.queue=e,e=e.dispatch=Vx.bind(null,ne,e),[t.memoizedState,e]}function ri(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function C0(){return lt().memoizedState}function sa(e,t,n,r){var o=Et();ne.flags|=e,o.memoizedState=ri(1|t,n,void 0,r===void 0?null:r)}function vs(e,t,n,r){var o=lt();r=r===void 0?null:r;var i=void 0;if(he!==null){var a=he.memoizedState;if(i=a.destroy,r!==null&&Hu(r,a.deps)){o.memoizedState=ri(t,n,i,r);return}}ne.flags|=e,o.memoizedState=ri(1|t,n,i,r)}function If(e,t){return sa(8390656,8,e,t)}function qu(e,t){return vs(2048,8,e,t)}function k0(e,t){return vs(4,2,e,t)}function P0(e,t){return vs(4,4,e,t)}function E0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function T0(e,t,n){return n=n!=null?n.concat([e]):null,vs(4,4,E0.bind(null,t,e),n)}function Yu(){}function z0(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function A0(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function R0(e,t,n){return er&21?(St(n,t)||(n=Lh(),ne.lanes|=n,tr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=n)}function Ix(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var r=sl.transition;sl.transition={};try{e(!1),t()}finally{W=n,sl.transition=r}}function D0(){return lt().memoizedState}function Ox(e,t,n){var r=xn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},M0(e))$0(t,n);else if(n=m0(e,t,n,r),n!==null){var o=Me();wt(n,e,r,o),N0(n,t,r)}}function Vx(e,t,n){var r=xn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(M0(e))$0(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,St(s,a)){var l=t.interleaved;l===null?(o.next=o,Vu(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=m0(e,t,o,r),n!==null&&(o=Me(),wt(n,e,r,o),N0(n,t,r))}}function M0(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function $0(e,t){Mo=Oa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function N0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ku(e,n)}}var Va={readContext:st,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},Fx={readContext:st,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:If,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,sa(4194308,4,E0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return sa(4194308,4,e,t)},useInsertionEffect:function(e,t){return sa(4,2,e,t)},useMemo:function(e,t){var n=Et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ox.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:Lf,useDebugValue:Yu,useDeferredValue:function(e){return Et().memoizedState=e},useTransition:function(){var e=Lf(!1),t=e[0];return e=Ix.bind(null,e[1]),Et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,o=Et();if(Z){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),xe===null)throw Error(T(349));er&30||x0(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,If(b0.bind(null,r,i,e),[e]),r.flags|=2048,ri(9,w0.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Et(),t=xe.identifierPrefix;if(Z){var n=Ft,r=Vt;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ti++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Lx++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_x={readContext:st,useCallback:z0,useContext:st,useEffect:qu,useImperativeHandle:T0,useInsertionEffect:k0,useLayoutEffect:P0,useMemo:A0,useReducer:ll,useRef:C0,useState:function(){return ll(ni)},useDebugValue:Yu,useDeferredValue:function(e){var t=lt();return R0(t,he.memoizedState,e)},useTransition:function(){var e=ll(ni)[0],t=lt().memoizedState;return[e,t]},useMutableSource:v0,useSyncExternalStore:y0,useId:D0,unstable_isNewReconciler:!1},Bx={readContext:st,useCallback:z0,useContext:st,useEffect:qu,useImperativeHandle:T0,useInsertionEffect:k0,useLayoutEffect:P0,useMemo:A0,useReducer:cl,useRef:C0,useState:function(){return cl(ni)},useDebugValue:Yu,useDeferredValue:function(e){var t=lt();return he===null?t.memoizedState=e:R0(t,he.memoizedState,e)},useTransition:function(){var e=cl(ni)[0],t=lt().memoizedState;return[e,t]},useMutableSource:v0,useSyncExternalStore:y0,useId:D0,unstable_isNewReconciler:!1};function mt(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Sc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ys={isMounted:function(e){return(e=e._reactInternals)?or(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Me(),o=xn(e),i=Bt(r,o);i.payload=t,n!=null&&(i.callback=n),t=vn(e,i,o),t!==null&&(wt(t,e,o,r),ia(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Me(),o=xn(e),i=Bt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=vn(e,i,o),t!==null&&(wt(t,e,o,r),ia(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Me(),r=xn(e),o=Bt(n,r);o.tag=2,t!=null&&(o.callback=t),t=vn(e,o,r),t!==null&&(wt(t,e,r,n),ia(t,e,r))}};function Of(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Ko(n,r)||!Ko(o,i):!0}function L0(e,t,n){var r=!1,o=Pn,i=t.contextType;return typeof i=="object"&&i!==null?i=st(i):(o=_e(t)?Zn:Ae.current,r=t.contextTypes,i=(r=r!=null)?Or(e,o):Pn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ys,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Vf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ys.enqueueReplaceState(t,t.state,null)}function jc(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Fu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=st(i):(i=_e(t)?Zn:Ae.current,o.context=Or(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Sc(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ys.enqueueReplaceState(o,o.state,null),La(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Br(e,t){try{var n="",r=t;do n+=gy(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ul(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Cc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ux=typeof WeakMap=="function"?WeakMap:Map;function I0(e,t,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){_a||(_a=!0,$c=r),Cc(e,t)},n}function O0(e,t,n){n=Bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Cc(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Cc(e,t),typeof r!="function"&&(yn===null?yn=new Set([this]):yn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Ff(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ux;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=r2.bind(null,e,t,n),t.then(e,e))}function _f(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Bf(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bt(-1,1),t.tag=2,vn(n,t,1))),n.lanes|=1),e)}var Hx=Xt.ReactCurrentOwner,Ve=!1;function De(e,t,n,r){t.child=e===null?p0(t,null,n,r):Fr(t,e.child,n,r)}function Uf(e,t,n,r,o){n=n.render;var i=t.ref;return Mr(t,o),r=Wu(e,t,n,r,i,o),n=Gu(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Kt(e,t,o)):(Z&&n&&Mu(t),t.flags|=1,De(e,t,r,o),t.child)}function Hf(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!nd(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,V0(e,t,i,r,o)):(e=da(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ko,n(a,r)&&e.ref===t.ref)return Kt(e,t,o)}return t.flags|=1,e=wn(i,r),e.ref=t.ref,e.return=t,t.child=e}function V0(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Ko(i,r)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ve=!0);else return t.lanes=e.lanes,Kt(e,t,o)}return kc(e,t,n,r,o)}function F0(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(jr,We),We|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(jr,We),We|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,q(jr,We),We|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,q(jr,We),We|=r;return De(e,t,o,n),t.child}function _0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function kc(e,t,n,r,o){var i=_e(n)?Zn:Ae.current;return i=Or(t,i),Mr(t,o),n=Wu(e,t,n,r,i,o),r=Gu(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Kt(e,t,o)):(Z&&r&&Mu(t),t.flags|=1,De(e,t,n,o),t.child)}function Wf(e,t,n,r,o){if(_e(n)){var i=!0;Ra(t)}else i=!1;if(Mr(t,o),t.stateNode===null)la(e,t),L0(t,n,r),jc(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=st(u):(u=_e(n)?Zn:Ae.current,u=Or(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Vf(t,a,r,u),on=!1;var p=t.memoizedState;a.state=p,La(t,r,a,o),l=t.memoizedState,s!==r||p!==l||Fe.current||on?(typeof d=="function"&&(Sc(t,n,d,r),l=t.memoizedState),(s=on||Of(t,n,s,r,p,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,h0(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:mt(t.type,s),a.props=u,f=t.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=st(l):(l=_e(n)?Zn:Ae.current,l=Or(t,l));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||p!==l)&&Vf(t,a,r,l),on=!1,p=t.memoizedState,a.state=p,La(t,r,a,o);var y=t.memoizedState;s!==f||p!==y||Fe.current||on?(typeof h=="function"&&(Sc(t,n,h,r),y=t.memoizedState),(u=on||Of(t,n,u,r,p,y,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Pc(e,t,n,r,i,o)}function Pc(e,t,n,r,o,i){_0(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Af(t,n,!1),Kt(e,t,i);r=t.stateNode,Hx.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Fr(t,e.child,null,i),t.child=Fr(t,null,s,i)):De(e,t,s,i),t.memoizedState=r.state,o&&Af(t,n,!0),t.child}function B0(e){var t=e.stateNode;t.pendingContext?zf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&zf(e,t.context,!1),_u(e,t.containerInfo)}function Gf(e,t,n,r,o){return Vr(),Nu(o),t.flags|=256,De(e,t,n,r),t.child}var Ec={dehydrated:null,treeContext:null,retryLane:0};function Tc(e){return{baseLanes:e,cachePool:null,transitions:null}}function U0(e,t,n){var r=t.pendingProps,o=ee.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),q(ee,o&1),e===null)return wc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=bs(a,r,0,null),e=Kn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Tc(n),t.memoizedState=Ec,e):Ku(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Wx(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=wn(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=wn(s,i):(i=Kn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Tc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Ec,r}return i=e.child,e=i.sibling,r=wn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ku(e,t){return t=bs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ii(e,t,n,r){return r!==null&&Nu(r),Fr(t,e.child,null,n),e=Ku(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wx(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=ul(Error(T(422))),Ii(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=bs({mode:"visible",children:r.children},o,0,null),i=Kn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Fr(t,e.child,null,a),t.child.memoizedState=Tc(a),t.memoizedState=Ec,i);if(!(t.mode&1))return Ii(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(T(419)),r=ul(i,r,void 0),Ii(e,t,a,r)}if(s=(a&e.childLanes)!==0,Ve||s){if(r=xe,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Yt(e,o),wt(r,e,o,-1))}return td(),r=ul(Error(T(421))),Ii(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=o2.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ge=gn(o.nextSibling),qe=t,Z=!0,vt=null,e!==null&&(rt[ot++]=Vt,rt[ot++]=Ft,rt[ot++]=Jn,Vt=e.id,Ft=e.overflow,Jn=t),t=Ku(t,r.children),t.flags|=4096,t)}function qf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),bc(e.return,t,n)}function dl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function H0(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(De(e,t,r.children,n),r=ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qf(e,n,t);else if(e.tag===19)qf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(ee,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ia(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),dl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ia(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}dl(t,!0,n,null,i);break;case"together":dl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function la(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=wn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Gx(e,t,n){switch(t.tag){case 3:B0(t),Vr();break;case 5:g0(t);break;case 1:_e(t.type)&&Ra(t);break;case 4:_u(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;q($a,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(q(ee,ee.current&1),t.flags|=128,null):n&t.child.childLanes?U0(e,t,n):(q(ee,ee.current&1),e=Kt(e,t,n),e!==null?e.sibling:null);q(ee,ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return H0(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),q(ee,ee.current),r)break;return null;case 22:case 23:return t.lanes=0,F0(e,t,n)}return Kt(e,t,n)}var W0,zc,G0,q0;W0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zc=function(){};G0=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Hn(Dt.current);var i=null;switch(n){case"input":o=Xl(e,o),r=Xl(e,r),i=[];break;case"select":o=re({},o,{value:void 0}),r=re({},r,{value:void 0}),i=[];break;case"textarea":o=ec(e,o),r=ec(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=za)}nc(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Bo.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Bo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&K("scroll",e),i||s===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};q0=function(e,t,n,r){n!==r&&(t.flags|=4)};function co(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function qx(e,t,n){var r=t.pendingProps;switch($u(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return _e(t.type)&&Aa(),Pe(t),null;case 3:return r=t.stateNode,_r(),X(Fe),X(Ae),Uu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ni(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,vt!==null&&(Ic(vt),vt=null))),zc(e,t),Pe(t),null;case 5:Bu(t);var o=Hn(ei.current);if(n=t.type,e!==null&&t.stateNode!=null)G0(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return Pe(t),null}if(e=Hn(Dt.current),Ni(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[At]=t,r[Zo]=i,e=(t.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(o=0;o<Co.length;o++)K(Co[o],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":tf(r,i),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},K("invalid",r);break;case"textarea":rf(r,i),K("invalid",r)}nc(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&$i(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&$i(r.textContent,s,e),o=["children",""+s]):Bo.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&K("scroll",r)}switch(n){case"input":Pi(r),nf(r,i,!0);break;case"textarea":Pi(r),of(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=za)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[At]=t,e[Zo]=r,W0(e,t,!1,!1),t.stateNode=e;e:{switch(a=rc(n,r),n){case"dialog":K("cancel",e),K("close",e),o=r;break;case"iframe":case"object":case"embed":K("load",e),o=r;break;case"video":case"audio":for(o=0;o<Co.length;o++)K(Co[o],e);o=r;break;case"source":K("error",e),o=r;break;case"img":case"image":case"link":K("error",e),K("load",e),o=r;break;case"details":K("toggle",e),o=r;break;case"input":tf(e,r),o=Xl(e,r),K("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=re({},r,{value:void 0}),K("invalid",e);break;case"textarea":rf(e,r),o=ec(e,r),K("invalid",e);break;default:o=r}nc(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?Ch(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Sh(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Uo(e,l):typeof l=="number"&&Uo(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Bo.hasOwnProperty(i)?l!=null&&i==="onScroll"&&K("scroll",e):l!=null&&xu(e,i,l,a))}switch(n){case"input":Pi(e),nf(e,r,!1);break;case"textarea":Pi(e),of(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?zr(e,!!r.multiple,i,!1):r.defaultValue!=null&&zr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=za)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Pe(t),null;case 6:if(e&&t.stateNode!=null)q0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=Hn(ei.current),Hn(Dt.current),Ni(t)){if(r=t.stateNode,n=t.memoizedProps,r[At]=t,(i=r.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:$i(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$i(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[At]=t,t.stateNode=r}return Pe(t),null;case 13:if(X(ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Ge!==null&&t.mode&1&&!(t.flags&128))d0(),Vr(),t.flags|=98560,i=!1;else if(i=Ni(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(T(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(T(317));i[At]=t}else Vr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Pe(t),i=!1}else vt!==null&&(Ic(vt),vt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ee.current&1?ge===0&&(ge=3):td())),t.updateQueue!==null&&(t.flags|=4),Pe(t),null);case 4:return _r(),zc(e,t),e===null&&Qo(t.stateNode.containerInfo),Pe(t),null;case 10:return Ou(t.type._context),Pe(t),null;case 17:return _e(t.type)&&Aa(),Pe(t),null;case 19:if(X(ee),i=t.memoizedState,i===null)return Pe(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)co(i,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ia(e),a!==null){for(t.flags|=128,co(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(ee,ee.current&1|2),t.child}e=e.sibling}i.tail!==null&&ae()>Ur&&(t.flags|=128,r=!0,co(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ia(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),co(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Z)return Pe(t),null}else 2*ae()-i.renderingStartTime>Ur&&n!==1073741824&&(t.flags|=128,r=!0,co(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ae(),t.sibling=null,n=ee.current,q(ee,r?n&1|2:n&1),t):(Pe(t),null);case 22:case 23:return ed(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?We&1073741824&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function Yx(e,t){switch($u(t),t.tag){case 1:return _e(t.type)&&Aa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _r(),X(Fe),X(Ae),Uu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Bu(t),null;case 13:if(X(ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));Vr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(ee),null;case 4:return _r(),null;case 10:return Ou(t.type._context),null;case 22:case 23:return ed(),null;case 24:return null;default:return null}}var Oi=!1,Te=!1,Kx=typeof WeakSet=="function"?WeakSet:Set,A=null;function Sr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(e,t,r)}else n.current=null}function Ac(e,t,n){try{n()}catch(r){ie(e,t,r)}}var Yf=!1;function Qx(e,t){if(pc=Pa,e=Zh(),Du(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||o!==0&&f.nodeType!==3||(s=a+o),f!==i||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(h=f.firstChild)!==null;)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++u===o&&(s=a),p===i&&++d===r&&(l=a),(h=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=h}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(mc={focusedElem:e,selectionRange:n},Pa=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,j=y.memoizedState,v=t.stateNode,m=v.getSnapshotBeforeUpdate(t.elementType===t.type?w:mt(t.type,w),j);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(S){ie(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return y=Yf,Yf=!1,y}function $o(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ac(t,n,i)}o=o.next}while(o!==r)}}function xs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Rc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Y0(e){var t=e.alternate;t!==null&&(e.alternate=null,Y0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[At],delete t[Zo],delete t[vc],delete t[Dx],delete t[Mx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function K0(e){return e.tag===5||e.tag===3||e.tag===4}function Kf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||K0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Dc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=za));else if(r!==4&&(e=e.child,e!==null))for(Dc(e,t,n),e=e.sibling;e!==null;)Dc(e,t,n),e=e.sibling}function Mc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Mc(e,t,n),e=e.sibling;e!==null;)Mc(e,t,n),e=e.sibling}var be=null,gt=!1;function en(e,t,n){for(n=n.child;n!==null;)Q0(e,t,n),n=n.sibling}function Q0(e,t,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(ds,n)}catch{}switch(n.tag){case 5:Te||Sr(n,t);case 6:var r=be,o=gt;be=null,en(e,t,n),be=r,gt=o,be!==null&&(gt?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(gt?(e=be,n=n.stateNode,e.nodeType===8?ol(e.parentNode,n):e.nodeType===1&&ol(e,n),qo(e)):ol(be,n.stateNode));break;case 4:r=be,o=gt,be=n.stateNode.containerInfo,gt=!0,en(e,t,n),be=r,gt=o;break;case 0:case 11:case 14:case 15:if(!Te&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Ac(n,t,a),o=o.next}while(o!==r)}en(e,t,n);break;case 1:if(!Te&&(Sr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ie(n,t,s)}en(e,t,n);break;case 21:en(e,t,n);break;case 22:n.mode&1?(Te=(r=Te)||n.memoizedState!==null,en(e,t,n),Te=r):en(e,t,n);break;default:en(e,t,n)}}function Qf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Kx),t.forEach(function(r){var o=i2.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:be=s.stateNode,gt=!1;break e;case 3:be=s.stateNode.containerInfo,gt=!0;break e;case 4:be=s.stateNode.containerInfo,gt=!0;break e}s=s.return}if(be===null)throw Error(T(160));Q0(i,a,o),be=null,gt=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){ie(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)X0(t,e),t=t.sibling}function X0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),kt(e),r&4){try{$o(3,e,e.return),xs(3,e)}catch(w){ie(e,e.return,w)}try{$o(5,e,e.return)}catch(w){ie(e,e.return,w)}}break;case 1:pt(t,e),kt(e),r&512&&n!==null&&Sr(n,n.return);break;case 5:if(pt(t,e),kt(e),r&512&&n!==null&&Sr(n,n.return),e.flags&32){var o=e.stateNode;try{Uo(o,"")}catch(w){ie(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&xh(o,i),rc(s,a);var u=rc(s,i);for(a=0;a<l.length;a+=2){var d=l[a],f=l[a+1];d==="style"?Ch(o,f):d==="dangerouslySetInnerHTML"?Sh(o,f):d==="children"?Uo(o,f):xu(o,d,f,u)}switch(s){case"input":Zl(o,i);break;case"textarea":wh(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var h=i.value;h!=null?zr(o,!!i.multiple,h,!1):p!==!!i.multiple&&(i.defaultValue!=null?zr(o,!!i.multiple,i.defaultValue,!0):zr(o,!!i.multiple,i.multiple?[]:"",!1))}o[Zo]=i}catch(w){ie(e,e.return,w)}}break;case 6:if(pt(t,e),kt(e),r&4){if(e.stateNode===null)throw Error(T(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){ie(e,e.return,w)}}break;case 3:if(pt(t,e),kt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qo(t.containerInfo)}catch(w){ie(e,e.return,w)}break;case 4:pt(t,e),kt(e);break;case 13:pt(t,e),kt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Zu=ae())),r&4&&Qf(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Te=(u=Te)||d,pt(t,e),Te=u):pt(t,e),kt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(A=e,d=e.child;d!==null;){for(f=A=d;A!==null;){switch(p=A,h=p.child,p.tag){case 0:case 11:case 14:case 15:$o(4,p,p.return);break;case 1:Sr(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){ie(r,n,w)}}break;case 5:Sr(p,p.return);break;case 22:if(p.memoizedState!==null){Zf(f);continue}}h!==null?(h.return=p,A=h):Zf(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=jh("display",a))}catch(w){ie(e,e.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){ie(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:pt(t,e),kt(e),r&4&&Qf(e);break;case 21:break;default:pt(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(K0(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Uo(o,""),r.flags&=-33);var i=Kf(e);Mc(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Kf(e);Dc(e,s,a);break;default:throw Error(T(161))}}catch(l){ie(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xx(e,t,n){A=e,Z0(e)}function Z0(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var o=A,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Oi;if(!a){var s=o.alternate,l=s!==null&&s.memoizedState!==null||Te;s=Oi;var u=Te;if(Oi=a,(Te=l)&&!u)for(A=o;A!==null;)a=A,l=a.child,a.tag===22&&a.memoizedState!==null?Jf(o):l!==null?(l.return=a,A=l):Jf(o);for(;i!==null;)A=i,Z0(i),i=i.sibling;A=o,Oi=s,Te=u}Xf(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,A=i):Xf(e)}}function Xf(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Te||xs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Te)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:mt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Nf(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Nf(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&qo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Te||t.flags&512&&Rc(t)}catch(p){ie(t,t.return,p)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function Zf(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function Jf(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xs(4,t)}catch(l){ie(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){ie(t,o,l)}}var i=t.return;try{Rc(t)}catch(l){ie(t,i,l)}break;case 5:var a=t.return;try{Rc(t)}catch(l){ie(t,a,l)}}}catch(l){ie(t,t.return,l)}if(t===e){A=null;break}var s=t.sibling;if(s!==null){s.return=t.return,A=s;break}A=t.return}}var Zx=Math.ceil,Fa=Xt.ReactCurrentDispatcher,Qu=Xt.ReactCurrentOwner,at=Xt.ReactCurrentBatchConfig,B=0,xe=null,fe=null,Se=0,We=0,jr=An(0),ge=0,oi=null,tr=0,ws=0,Xu=0,No=null,Oe=null,Zu=0,Ur=1/0,Lt=null,_a=!1,$c=null,yn=null,Vi=!1,un=null,Ba=0,Lo=0,Nc=null,ca=-1,ua=0;function Me(){return B&6?ae():ca!==-1?ca:ca=ae()}function xn(e){return e.mode&1?B&2&&Se!==0?Se&-Se:Nx.transition!==null?(ua===0&&(ua=Lh()),ua):(e=W,e!==0||(e=window.event,e=e===void 0?16:Uh(e.type)),e):1}function wt(e,t,n,r){if(50<Lo)throw Lo=0,Nc=null,Error(T(185));pi(e,n,r),(!(B&2)||e!==xe)&&(e===xe&&(!(B&2)&&(ws|=n),ge===4&&ln(e,Se)),Be(e,r),n===1&&B===0&&!(t.mode&1)&&(Ur=ae()+500,gs&&Rn()))}function Be(e,t){var n=e.callbackNode;Ny(e,t);var r=ka(e,e===xe?Se:0);if(r===0)n!==null&&lf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&lf(n),t===1)e.tag===0?$x(ep.bind(null,e)):l0(ep.bind(null,e)),Ax(function(){!(B&6)&&Rn()}),n=null;else{switch(Ih(r)){case 1:n=Cu;break;case 4:n=$h;break;case 16:n=Ca;break;case 536870912:n=Nh;break;default:n=Ca}n=ag(n,J0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function J0(e,t){if(ca=-1,ua=0,B&6)throw Error(T(327));var n=e.callbackNode;if($r()&&e.callbackNode!==n)return null;var r=ka(e,e===xe?Se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ua(e,r);else{t=r;var o=B;B|=2;var i=tg();(xe!==e||Se!==t)&&(Lt=null,Ur=ae()+500,Yn(e,t));do try{t2();break}catch(s){eg(e,s)}while(!0);Iu(),Fa.current=i,B=o,fe!==null?t=0:(xe=null,Se=0,t=ge)}if(t!==0){if(t===2&&(o=lc(e),o!==0&&(r=o,t=Lc(e,o))),t===1)throw n=oi,Yn(e,0),ln(e,r),Be(e,ae()),n;if(t===6)ln(e,r);else{if(o=e.current.alternate,!(r&30)&&!Jx(o)&&(t=Ua(e,r),t===2&&(i=lc(e),i!==0&&(r=i,t=Lc(e,i))),t===1))throw n=oi,Yn(e,0),ln(e,r),Be(e,ae()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:On(e,Oe,Lt);break;case 3:if(ln(e,r),(r&130023424)===r&&(t=Zu+500-ae(),10<t)){if(ka(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Me(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=gc(On.bind(null,e,Oe,Lt),t);break}On(e,Oe,Lt);break;case 4:if(ln(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-xt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Zx(r/1960))-r,10<r){e.timeoutHandle=gc(On.bind(null,e,Oe,Lt),r);break}On(e,Oe,Lt);break;case 5:On(e,Oe,Lt);break;default:throw Error(T(329))}}}return Be(e,ae()),e.callbackNode===n?J0.bind(null,e):null}function Lc(e,t){var n=No;return e.current.memoizedState.isDehydrated&&(Yn(e,t).flags|=256),e=Ua(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&Ic(t)),e}function Ic(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function Jx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!St(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ln(e,t){for(t&=~Xu,t&=~ws,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function ep(e){if(B&6)throw Error(T(327));$r();var t=ka(e,0);if(!(t&1))return Be(e,ae()),null;var n=Ua(e,t);if(e.tag!==0&&n===2){var r=lc(e);r!==0&&(t=r,n=Lc(e,r))}if(n===1)throw n=oi,Yn(e,0),ln(e,t),Be(e,ae()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,On(e,Oe,Lt),Be(e,ae()),null}function Ju(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(Ur=ae()+500,gs&&Rn())}}function nr(e){un!==null&&un.tag===0&&!(B&6)&&$r();var t=B;B|=1;var n=at.transition,r=W;try{if(at.transition=null,W=1,e)return e()}finally{W=r,at.transition=n,B=t,!(B&6)&&Rn()}}function ed(){We=jr.current,X(jr)}function Yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,zx(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch($u(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Aa();break;case 3:_r(),X(Fe),X(Ae),Uu();break;case 5:Bu(r);break;case 4:_r();break;case 13:X(ee);break;case 19:X(ee);break;case 10:Ou(r.type._context);break;case 22:case 23:ed()}n=n.return}if(xe=e,fe=e=wn(e.current,null),Se=We=t,ge=0,oi=null,Xu=ws=tr=0,Oe=No=null,Un!==null){for(t=0;t<Un.length;t++)if(n=Un[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}Un=null}return e}function eg(e,t){do{var n=fe;try{if(Iu(),aa.current=Va,Oa){for(var r=ne.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Oa=!1}if(er=0,ve=he=ne=null,Mo=!1,ti=0,Qu.current=null,n===null||n.return===null){ge=1,oi=t,fe=null;break}e:{var i=e,a=n.return,s=n,l=t;if(t=Se,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=s,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=_f(a);if(h!==null){h.flags&=-257,Bf(h,a,s,i,t),h.mode&1&&Ff(i,u,t),t=h,l=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(l),t.updateQueue=w}else y.add(l);break e}else{if(!(t&1)){Ff(i,u,t),td();break e}l=Error(T(426))}}else if(Z&&s.mode&1){var j=_f(a);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Bf(j,a,s,i,t),Nu(Br(l,s));break e}}i=l=Br(l,s),ge!==4&&(ge=2),No===null?No=[i]:No.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var v=I0(i,l,t);$f(i,v);break e;case 1:s=l;var m=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(yn===null||!yn.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=O0(i,s,t);$f(i,S);break e}}i=i.return}while(i!==null)}rg(n)}catch(P){t=P,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(!0)}function tg(){var e=Fa.current;return Fa.current=Va,e===null?Va:e}function td(){(ge===0||ge===3||ge===2)&&(ge=4),xe===null||!(tr&268435455)&&!(ws&268435455)||ln(xe,Se)}function Ua(e,t){var n=B;B|=2;var r=tg();(xe!==e||Se!==t)&&(Lt=null,Yn(e,t));do try{e2();break}catch(o){eg(e,o)}while(!0);if(Iu(),B=n,Fa.current=r,fe!==null)throw Error(T(261));return xe=null,Se=0,ge}function e2(){for(;fe!==null;)ng(fe)}function t2(){for(;fe!==null&&!Py();)ng(fe)}function ng(e){var t=ig(e.alternate,e,We);e.memoizedProps=e.pendingProps,t===null?rg(e):fe=t,Qu.current=null}function rg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Yx(n,t),n!==null){n.flags&=32767,fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,fe=null;return}}else if(n=qx(n,t,We),n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);ge===0&&(ge=5)}function On(e,t,n){var r=W,o=at.transition;try{at.transition=null,W=1,n2(e,t,n,r)}finally{at.transition=o,W=r}return null}function n2(e,t,n,r){do $r();while(un!==null);if(B&6)throw Error(T(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Ly(e,i),e===xe&&(fe=xe=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Vi||(Vi=!0,ag(Ca,function(){return $r(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=at.transition,at.transition=null;var a=W;W=1;var s=B;B|=4,Qu.current=null,Qx(e,n),X0(n,e),Sx(mc),Pa=!!pc,mc=pc=null,e.current=n,Xx(n),Ey(),B=s,W=a,at.transition=i}else e.current=n;if(Vi&&(Vi=!1,un=e,Ba=o),i=e.pendingLanes,i===0&&(yn=null),Ay(n.stateNode),Be(e,ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(_a)throw _a=!1,e=$c,$c=null,e;return Ba&1&&e.tag!==0&&$r(),i=e.pendingLanes,i&1?e===Nc?Lo++:(Lo=0,Nc=e):Lo=0,Rn(),null}function $r(){if(un!==null){var e=Ih(Ba),t=at.transition,n=W;try{if(at.transition=null,W=16>e?16:e,un===null)var r=!1;else{if(e=un,un=null,Ba=0,B&6)throw Error(T(331));var o=B;for(B|=4,A=e.current;A!==null;){var i=A,a=i.child;if(A.flags&16){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(A=u;A!==null;){var d=A;switch(d.tag){case 0:case 11:case 15:$o(8,d,i)}var f=d.child;if(f!==null)f.return=d,A=f;else for(;A!==null;){d=A;var p=d.sibling,h=d.return;if(Y0(d),d===u){A=null;break}if(p!==null){p.return=h,A=p;break}A=h}}}var y=i.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var j=w.sibling;w.sibling=null,w=j}while(w!==null)}}A=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,A=a;else e:for(;A!==null;){if(i=A,i.flags&2048)switch(i.tag){case 0:case 11:case 15:$o(9,i,i.return)}var v=i.sibling;if(v!==null){v.return=i.return,A=v;break e}A=i.return}}var m=e.current;for(A=m;A!==null;){a=A;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,A=g;else e:for(a=m;A!==null;){if(s=A,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:xs(9,s)}}catch(P){ie(s,s.return,P)}if(s===a){A=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,A=S;break e}A=s.return}}if(B=o,Rn(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(ds,e)}catch{}r=!0}return r}finally{W=n,at.transition=t}}return!1}function tp(e,t,n){t=Br(n,t),t=I0(e,t,1),e=vn(e,t,1),t=Me(),e!==null&&(pi(e,1,t),Be(e,t))}function ie(e,t,n){if(e.tag===3)tp(e,e,n);else for(;t!==null;){if(t.tag===3){tp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yn===null||!yn.has(r))){e=Br(n,e),e=O0(t,e,1),t=vn(t,e,1),e=Me(),t!==null&&(pi(t,1,e),Be(t,e));break}}t=t.return}}function r2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&n,xe===e&&(Se&n)===n&&(ge===4||ge===3&&(Se&130023424)===Se&&500>ae()-Zu?Yn(e,0):Xu|=n),Be(e,t)}function og(e,t){t===0&&(e.mode&1?(t=zi,zi<<=1,!(zi&130023424)&&(zi=4194304)):t=1);var n=Me();e=Yt(e,t),e!==null&&(pi(e,t,n),Be(e,n))}function o2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),og(e,n)}function i2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),og(e,n)}var ig;ig=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Fe.current)Ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ve=!1,Gx(e,t,n);Ve=!!(e.flags&131072)}else Ve=!1,Z&&t.flags&1048576&&c0(t,Ma,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;la(e,t),e=t.pendingProps;var o=Or(t,Ae.current);Mr(t,n),o=Wu(null,t,r,e,o,n);var i=Gu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(r)?(i=!0,Ra(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Fu(t),o.updater=ys,t.stateNode=o,o._reactInternals=t,jc(t,r,e,n),t=Pc(null,t,r,!0,i,n)):(t.tag=0,Z&&i&&Mu(t),De(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(la(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=s2(r),e=mt(r,e),o){case 0:t=kc(null,t,r,e,n);break e;case 1:t=Wf(null,t,r,e,n);break e;case 11:t=Uf(null,t,r,e,n);break e;case 14:t=Hf(null,t,r,mt(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:mt(r,o),kc(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:mt(r,o),Wf(e,t,r,o,n);case 3:e:{if(B0(t),e===null)throw Error(T(387));r=t.pendingProps,i=t.memoizedState,o=i.element,h0(e,t),La(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Br(Error(T(423)),t),t=Gf(e,t,r,n,o);break e}else if(r!==o){o=Br(Error(T(424)),t),t=Gf(e,t,r,n,o);break e}else for(Ge=gn(t.stateNode.containerInfo.firstChild),qe=t,Z=!0,vt=null,n=p0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vr(),r===o){t=Kt(e,t,n);break e}De(e,t,r,n)}t=t.child}return t;case 5:return g0(t),e===null&&wc(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,hc(r,o)?a=null:i!==null&&hc(r,i)&&(t.flags|=32),_0(e,t),De(e,t,a,n),t.child;case 6:return e===null&&wc(t),null;case 13:return U0(e,t,n);case 4:return _u(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fr(t,null,r,n):De(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:mt(r,o),Uf(e,t,r,o,n);case 7:return De(e,t,t.pendingProps,n),t.child;case 8:return De(e,t,t.pendingProps.children,n),t.child;case 12:return De(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,q($a,r._currentValue),r._currentValue=a,i!==null)if(St(i.value,a)){if(i.children===o.children&&!Fe.current){t=Kt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Bt(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),bc(i.return,n,t),s.lanes|=n;break}l=l.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(T(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),bc(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}De(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Mr(t,n),o=st(o),r=r(o),t.flags|=1,De(e,t,r,n),t.child;case 14:return r=t.type,o=mt(r,t.pendingProps),o=mt(r.type,o),Hf(e,t,r,o,n);case 15:return V0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:mt(r,o),la(e,t),t.tag=1,_e(r)?(e=!0,Ra(t)):e=!1,Mr(t,n),L0(t,r,o),jc(t,r,o,n),Pc(null,t,r,!0,e,n);case 19:return H0(e,t,n);case 22:return F0(e,t,n)}throw Error(T(156,t.tag))};function ag(e,t){return Mh(e,t)}function a2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,n,r){return new a2(e,t,n,r)}function nd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function s2(e){if(typeof e=="function")return nd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===bu)return 11;if(e===Su)return 14}return 2}function wn(e,t){var n=e.alternate;return n===null?(n=it(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function da(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")nd(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case pr:return Kn(n.children,o,i,t);case wu:a=8,o|=8;break;case ql:return e=it(12,n,t,o|2),e.elementType=ql,e.lanes=i,e;case Yl:return e=it(13,n,t,o),e.elementType=Yl,e.lanes=i,e;case Kl:return e=it(19,n,t,o),e.elementType=Kl,e.lanes=i,e;case gh:return bs(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mh:a=10;break e;case hh:a=9;break e;case bu:a=11;break e;case Su:a=14;break e;case rn:a=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=it(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Kn(e,t,n,r){return e=it(7,e,r,t),e.lanes=n,e}function bs(e,t,n,r){return e=it(22,e,r,t),e.elementType=gh,e.lanes=n,e.stateNode={isHidden:!1},e}function fl(e,t,n){return e=it(6,e,null,t),e.lanes=n,e}function pl(e,t,n){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function l2(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qs(0),this.expirationTimes=qs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qs(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function rd(e,t,n,r,o,i,a,s,l){return e=new l2(e,t,n,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=it(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fu(i),e}function c2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function sg(e){if(!e)return Pn;e=e._reactInternals;e:{if(or(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(_e(n))return s0(e,n,t)}return t}function lg(e,t,n,r,o,i,a,s,l){return e=rd(n,r,!0,e,o,i,a,s,l),e.context=sg(null),n=e.current,r=Me(),o=xn(n),i=Bt(r,o),i.callback=t??null,vn(n,i,o),e.current.lanes=o,pi(e,o,r),Be(e,r),e}function Ss(e,t,n,r){var o=t.current,i=Me(),a=xn(o);return n=sg(n),t.context===null?t.context=n:t.pendingContext=n,t=Bt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vn(o,t,a),e!==null&&(wt(e,o,a,i),ia(e,o,a)),a}function Ha(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function np(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function od(e,t){np(e,t),(e=e.alternate)&&np(e,t)}function u2(){return null}var cg=typeof reportError=="function"?reportError:function(e){console.error(e)};function id(e){this._internalRoot=e}js.prototype.render=id.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));Ss(e,t,null,null)};js.prototype.unmount=id.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nr(function(){Ss(null,e,null,null)}),t[qt]=null}};function js(e){this._internalRoot=e}js.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sn.length&&t!==0&&t<sn[n].priority;n++);sn.splice(n,0,e),n===0&&Bh(e)}};function ad(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Cs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function rp(){}function d2(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Ha(a);i.call(u)}}var a=lg(t,r,e,0,null,!1,!1,"",rp);return e._reactRootContainer=a,e[qt]=a.current,Qo(e.nodeType===8?e.parentNode:e),nr(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=Ha(l);s.call(u)}}var l=rd(e,0,!1,null,null,!1,!1,"",rp);return e._reactRootContainer=l,e[qt]=l.current,Qo(e.nodeType===8?e.parentNode:e),nr(function(){Ss(t,l,n,r)}),l}function ks(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var l=Ha(a);s.call(l)}}Ss(t,a,e,o)}else a=d2(n,t,e,o,r);return Ha(a)}Oh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=jo(t.pendingLanes);n!==0&&(ku(t,n|1),Be(t,ae()),!(B&6)&&(Ur=ae()+500,Rn()))}break;case 13:nr(function(){var r=Yt(e,1);if(r!==null){var o=Me();wt(r,e,1,o)}}),od(e,1)}};Pu=function(e){if(e.tag===13){var t=Yt(e,134217728);if(t!==null){var n=Me();wt(t,e,134217728,n)}od(e,134217728)}};Vh=function(e){if(e.tag===13){var t=xn(e),n=Yt(e,t);if(n!==null){var r=Me();wt(n,e,t,r)}od(e,t)}};Fh=function(){return W};_h=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};ic=function(e,t,n){switch(t){case"input":if(Zl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=hs(r);if(!o)throw Error(T(90));yh(r),Zl(r,o)}}}break;case"textarea":wh(e,n);break;case"select":t=n.value,t!=null&&zr(e,!!n.multiple,t,!1)}};Eh=Ju;Th=nr;var f2={usingClientEntryPoint:!1,Events:[hi,vr,hs,kh,Ph,Ju]},uo={findFiberByHostInstance:Bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},p2={bundleType:uo.bundleType,version:uo.version,rendererPackageName:uo.rendererPackageName,rendererConfig:uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rh(e),e===null?null:e.stateNode},findFiberByHostInstance:uo.findFiberByHostInstance||u2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fi.isDisabled&&Fi.supportsFiber)try{ds=Fi.inject(p2),Rt=Fi}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f2;Qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ad(t))throw Error(T(200));return c2(e,t,null,n)};Qe.createRoot=function(e,t){if(!ad(e))throw Error(T(299));var n=!1,r="",o=cg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=rd(e,1,!1,null,null,n,!1,r,o),e[qt]=t.current,Qo(e.nodeType===8?e.parentNode:e),new id(t)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=Rh(t),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return nr(e)};Qe.hydrate=function(e,t,n){if(!Cs(t))throw Error(T(200));return ks(null,e,t,!0,n)};Qe.hydrateRoot=function(e,t,n){if(!ad(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=cg;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=lg(t,null,e,1,n??null,o,!1,i,a),e[qt]=t.current,Qo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new js(t)};Qe.render=function(e,t,n){if(!Cs(t))throw Error(T(200));return ks(null,e,t,!1,n)};Qe.unmountComponentAtNode=function(e){if(!Cs(e))throw Error(T(40));return e._reactRootContainer?(nr(function(){ks(null,null,e,!1,function(){e._reactRootContainer=null,e[qt]=null})}),!0):!1};Qe.unstable_batchedUpdates=Ju;Qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Cs(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return ks(e,t,n,!1,r)};Qe.version="18.3.1-next-f1338f8080-20240426";function ug(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ug)}catch(e){console.error(e)}}ug(),uh.exports=Qe;var m2=uh.exports,op=m2;Wl.createRoot=op.createRoot,Wl.hydrateRoot=op.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ii.apply(this,arguments)}var dn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(dn||(dn={}));const ip="popstate";function h2(e){e===void 0&&(e={});function t(o,i){let{pathname:a="/",search:s="",hash:l=""}=ir(o.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),Oc("",{pathname:a,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let a=o.document.querySelector("base"),s="";if(a&&a.getAttribute("href")){let l=o.location.href,u=l.indexOf("#");s=u===-1?l:l.slice(0,u)}return s+"#"+(typeof i=="string"?i:Wa(i))}function r(o,i){sd(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return v2(t,n,r,e)}function le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function sd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function g2(){return Math.random().toString(36).substr(2,8)}function ap(e,t){return{usr:e.state,key:e.key,idx:t}}function Oc(e,t,n,r){return n===void 0&&(n=null),ii({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ir(t):t,{state:n,key:t&&t.key||r||g2()})}function Wa(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ir(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function v2(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s=dn.Pop,l=null,u=d();u==null&&(u=0,a.replaceState(ii({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function f(){s=dn.Pop;let j=d(),v=j==null?null:j-u;u=j,l&&l({action:s,location:w.location,delta:v})}function p(j,v){s=dn.Push;let m=Oc(w.location,j,v);n&&n(m,j),u=d()+1;let g=ap(m,u),S=w.createHref(m);try{a.pushState(g,"",S)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;o.location.assign(S)}i&&l&&l({action:s,location:w.location,delta:1})}function h(j,v){s=dn.Replace;let m=Oc(w.location,j,v);n&&n(m,j),u=d();let g=ap(m,u),S=w.createHref(m);a.replaceState(g,"",S),i&&l&&l({action:s,location:w.location,delta:0})}function y(j){let v=o.location.origin!=="null"?o.location.origin:o.location.href,m=typeof j=="string"?j:Wa(j);return m=m.replace(/ $/,"%20"),le(v,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,v)}let w={get action(){return s},get location(){return e(o,a)},listen(j){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(ip,f),l=j,()=>{o.removeEventListener(ip,f),l=null}},createHref(j){return t(o,j)},createURL:y,encodeLocation(j){let v=y(j);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:p,replace:h,go(j){return a.go(j)}};return w}var sp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(sp||(sp={}));function y2(e,t,n){return n===void 0&&(n="/"),x2(e,t,n)}function x2(e,t,n,r){let o=typeof t=="string"?ir(t):t,i=ld(o.pathname||"/",n);if(i==null)return null;let a=dg(e);w2(a);let s=null;for(let l=0;s==null&&l<a.length;++l){let u=D2(i);s=z2(a[l],u)}return s}function dg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,s)=>{let l={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};l.relativePath.startsWith("/")&&(le(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=bn([r,l.relativePath]),d=n.concat(l);i.children&&i.children.length>0&&(le(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),dg(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:E2(u,i.index),routesMeta:d})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,a);else for(let l of fg(i.path))o(i,a,l)}),t}function fg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=fg(r.join("/")),s=[];return s.push(...a.map(l=>l===""?i:[i,l].join("/"))),o&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function w2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:T2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const b2=/^:[\w-]+$/,S2=3,j2=2,C2=1,k2=10,P2=-2,lp=e=>e==="*";function E2(e,t){let n=e.split("/"),r=n.length;return n.some(lp)&&(r+=P2),t&&(r+=j2),n.filter(o=>!lp(o)).reduce((o,i)=>o+(b2.test(i)?S2:i===""?C2:k2),r)}function T2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function z2(e,t,n){let{routesMeta:r}=e,o={},i="/",a=[];for(let s=0;s<r.length;++s){let l=r[s],u=s===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",f=A2({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),p=l.route;if(!f)return null;Object.assign(o,f.params),a.push({params:o,pathname:bn([i,f.pathname]),pathnameBase:L2(bn([i,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(i=bn([i,f.pathnameBase]))}return a}function A2(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=R2(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:p,isOptional:h}=d;if(p==="*"){let w=s[f]||"";a=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const y=s[f];return h&&!y?u[p]=void 0:u[p]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:a,pattern:e}}function R2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),sd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function D2(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return sd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ld(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function M2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?ir(e):e;return{pathname:n?n.startsWith("/")?n:$2(n,t):t,search:I2(r),hash:O2(o)}}function $2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function ml(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function N2(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function cd(e,t){let n=N2(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ud(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=ir(e):(o=ii({},e),le(!o.pathname||!o.pathname.includes("?"),ml("?","pathname","search",o)),le(!o.pathname||!o.pathname.includes("#"),ml("#","pathname","hash",o)),le(!o.search||!o.search.includes("#"),ml("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(a==null)s=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),f-=1;o.pathname=p.join("/")}s=f>=0?t[f]:"/"}let l=M2(o,s),u=a&&a!=="/"&&a.endsWith("/"),d=(i||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const bn=e=>e.join("/").replace(/\/\/+/g,"/"),L2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),I2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,O2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function V2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const pg=["post","put","patch","delete"];new Set(pg);const F2=["get",...pg];new Set(F2);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ai(){return ai=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ai.apply(this,arguments)}const dd=b.createContext(null),_2=b.createContext(null),Dn=b.createContext(null),Ps=b.createContext(null),Zt=b.createContext({outlet:null,matches:[],isDataRoute:!1}),mg=b.createContext(null);function B2(e,t){let{relative:n}=t===void 0?{}:t;to()||le(!1);let{basename:r,navigator:o}=b.useContext(Dn),{hash:i,pathname:a,search:s}=gg(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:bn([r,a])),o.createHref({pathname:l,search:s,hash:i})}function to(){return b.useContext(Ps)!=null}function ar(){return to()||le(!1),b.useContext(Ps).location}function hg(e){b.useContext(Dn).static||b.useLayoutEffect(e)}function fd(){let{isDataRoute:e}=b.useContext(Zt);return e?n5():U2()}function U2(){to()||le(!1);let e=b.useContext(dd),{basename:t,future:n,navigator:r}=b.useContext(Dn),{matches:o}=b.useContext(Zt),{pathname:i}=ar(),a=JSON.stringify(cd(o,n.v7_relativeSplatPath)),s=b.useRef(!1);return hg(()=>{s.current=!0}),b.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let f=ud(u,JSON.parse(a),i,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:bn([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,a,i,e])}function H2(){let{matches:e}=b.useContext(Zt),t=e[e.length-1];return t?t.params:{}}function gg(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=b.useContext(Dn),{matches:o}=b.useContext(Zt),{pathname:i}=ar(),a=JSON.stringify(cd(o,r.v7_relativeSplatPath));return b.useMemo(()=>ud(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function W2(e,t){return G2(e,t)}function G2(e,t,n,r){to()||le(!1);let{navigator:o}=b.useContext(Dn),{matches:i}=b.useContext(Zt),a=i[i.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=ar(),d;if(t){var f;let j=typeof t=="string"?ir(t):t;l==="/"||(f=j.pathname)!=null&&f.startsWith(l)||le(!1),d=j}else d=u;let p=d.pathname||"/",h=p;if(l!=="/"){let j=l.replace(/^\//,"").split("/");h="/"+p.replace(/^\//,"").split("/").slice(j.length).join("/")}let y=y2(e,{pathname:h}),w=X2(y&&y.map(j=>Object.assign({},j,{params:Object.assign({},s,j.params),pathname:bn([l,o.encodeLocation?o.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?l:bn([l,o.encodeLocation?o.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),i,n,r);return t&&w?b.createElement(Ps.Provider,{value:{location:ai({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:dn.Pop}},w):w}function q2(){let e=t5(),t=V2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:o},n):null,null)}const Y2=b.createElement(q2,null);class K2 extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(Zt.Provider,{value:this.props.routeContext},b.createElement(mg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Q2(e){let{routeContext:t,match:n,children:r}=e,o=b.useContext(dd);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Zt.Provider,{value:t},r)}function X2(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,s=(o=n)==null?void 0:o.errors;if(s!=null){let d=a.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);d>=0||le(!1),a=a.slice(0,Math.min(a.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let f=a[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:p,errors:h}=n,y=f.route.loader&&p[f.route.id]===void 0&&(!h||h[f.route.id]===void 0);if(f.route.lazy||y){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,f,p)=>{let h,y=!1,w=null,j=null;n&&(h=s&&f.route.id?s[f.route.id]:void 0,w=f.route.errorElement||Y2,l&&(u<0&&p===0?(r5("route-fallback"),y=!0,j=null):u===p&&(y=!0,j=f.route.hydrateFallbackElement||null)));let v=t.concat(a.slice(0,p+1)),m=()=>{let g;return h?g=w:y?g=j:f.route.Component?g=b.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=d,b.createElement(Q2,{match:f,routeContext:{outlet:d,matches:v,isDataRoute:n!=null},children:g})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?b.createElement(K2,{location:n.location,revalidation:n.revalidation,component:w,error:h,children:m(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):m()},null)}var vg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(vg||{}),yg=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(yg||{});function Z2(e){let t=b.useContext(dd);return t||le(!1),t}function J2(e){let t=b.useContext(_2);return t||le(!1),t}function e5(e){let t=b.useContext(Zt);return t||le(!1),t}function xg(e){let t=e5(),n=t.matches[t.matches.length-1];return n.route.id||le(!1),n.route.id}function t5(){var e;let t=b.useContext(mg),n=J2(),r=xg();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function n5(){let{router:e}=Z2(vg.UseNavigateStable),t=xg(yg.UseNavigateStable),n=b.useRef(!1);return hg(()=>{n.current=!0}),b.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ai({fromRouteId:t},i)))},[e,t])}const cp={};function r5(e,t,n){cp[e]||(cp[e]=!0)}function o5(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function i5(e){let{to:t,replace:n,state:r,relative:o}=e;to()||le(!1);let{future:i,static:a}=b.useContext(Dn),{matches:s}=b.useContext(Zt),{pathname:l}=ar(),u=fd(),d=ud(t,cd(s,i.v7_relativeSplatPath),l,o==="path"),f=JSON.stringify(d);return b.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:o}),[u,f,o,n,r]),null}function Pt(e){le(!1)}function a5(e){let{basename:t="/",children:n=null,location:r,navigationType:o=dn.Pop,navigator:i,static:a=!1,future:s}=e;to()&&le(!1);let l=t.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:l,navigator:i,static:a,future:ai({v7_relativeSplatPath:!1},s)}),[l,s,i,a]);typeof r=="string"&&(r=ir(r));let{pathname:d="/",search:f="",hash:p="",state:h=null,key:y="default"}=r,w=b.useMemo(()=>{let j=ld(d,l);return j==null?null:{location:{pathname:j,search:f,hash:p,state:h,key:y},navigationType:o}},[l,d,f,p,h,y,o]);return w==null?null:b.createElement(Dn.Provider,{value:u},b.createElement(Ps.Provider,{children:n,value:w}))}function s5(e){let{children:t,location:n}=e;return W2(Vc(t),n)}new Promise(()=>{});function Vc(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,o)=>{if(!b.isValidElement(r))return;let i=[...t,o];if(r.type===b.Fragment){n.push.apply(n,Vc(r.props.children,i));return}r.type!==Pt&&le(!1),!r.props.index||!r.props.children||le(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Vc(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fc(){return Fc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fc.apply(this,arguments)}function l5(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function c5(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function u5(e,t){return e.button===0&&(!t||t==="_self")&&!c5(e)}const d5=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],f5="6";try{window.__reactRouterVersion=f5}catch{}const p5="startTransition",up=ry[p5];function m5(e){let{basename:t,children:n,future:r,window:o}=e,i=b.useRef();i.current==null&&(i.current=h2({window:o,v5Compat:!0}));let a=i.current,[s,l]=b.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=b.useCallback(f=>{u&&up?up(()=>l(f)):l(f)},[l,u]);return b.useLayoutEffect(()=>a.listen(d),[a,d]),b.useEffect(()=>o5(r),[r]),b.createElement(a5,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}const h5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",g5=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ie=b.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:s,target:l,to:u,preventScrollReset:d,viewTransition:f}=t,p=l5(t,d5),{basename:h}=b.useContext(Dn),y,w=!1;if(typeof u=="string"&&g5.test(u)&&(y=u,h5))try{let g=new URL(window.location.href),S=u.startsWith("//")?new URL(g.protocol+u):new URL(u),P=ld(S.pathname,h);S.origin===g.origin&&P!=null?u=P+S.search+S.hash:w=!0}catch{}let j=B2(u,{relative:o}),v=v5(u,{replace:a,state:s,target:l,preventScrollReset:d,relative:o,viewTransition:f});function m(g){r&&r(g),g.defaultPrevented||v(g)}return b.createElement("a",Fc({},p,{href:y||j,onClick:w||i?r:m,ref:n,target:l}))});var dp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(dp||(dp={}));var fp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(fp||(fp={}));function v5(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,viewTransition:s}=t===void 0?{}:t,l=fd(),u=ar(),d=gg(e,{relative:a});return b.useCallback(f=>{if(u5(f,n)){f.preventDefault();let p=r!==void 0?r:Wa(u)===Wa(d);l(e,{replace:p,state:o,preventScrollReset:i,relative:a,viewTransition:s})}},[u,l,d,r,o,n,e,i,a,s])}var y5=typeof Element<"u",x5=typeof Map=="function",w5=typeof Set=="function",b5=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function fa(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,o;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!fa(e[r],t[r]))return!1;return!0}var i;if(x5&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;for(i=e.entries();!(r=i.next()).done;)if(!fa(r.value[1],t.get(r.value[0])))return!1;return!0}if(w5&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(b5&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;if(y5&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&e.$$typeof)&&!fa(e[o[r]],t[o[r]]))return!1;return!0}return e!==e&&t!==t}var S5=function(t,n){try{return fa(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const j5=di(S5);var C5=function(e,t,n,r,o,i,a,s){if(!e){var l;if(t===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,a,s],d=0;l=new Error(t.replace(/%s/g,function(){return u[d++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},k5=C5;const pp=di(k5);var P5=function(t,n,r,o){var i=r?r.call(o,t,n):void 0;if(i!==void 0)return!!i;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),u=0;u<a.length;u++){var d=a[u];if(!l(d))return!1;var f=t[d],p=n[d];if(i=r?r.call(o,f,p,d):void 0,i===!1||i===void 0&&f!==p)return!1}return!0};const E5=di(P5);var wg=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(wg||{}),hl={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},mp=Object.values(wg),pd={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},T5=Object.entries(pd).reduce((e,[t,n])=>(e[n]=t,e),{}),yt="data-rh",Nr={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Lr=(e,t)=>{for(let n=e.length-1;n>=0;n-=1){const r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},z5=e=>{let t=Lr(e,"title");const n=Lr(e,Nr.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,()=>t);const r=Lr(e,Nr.DEFAULT_TITLE);return t||r||void 0},A5=e=>Lr(e,Nr.ON_CHANGE_CLIENT_STATE)||(()=>{}),gl=(e,t)=>t.filter(n=>typeof n[e]<"u").map(n=>n[e]).reduce((n,r)=>({...n,...r}),{}),R5=(e,t)=>t.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const o=Object.keys(r);for(let i=0;i<o.length;i+=1){const s=o[i].toLowerCase();if(e.indexOf(s)!==-1&&r[s])return n.concat(r)}}return n},[]),D5=e=>console&&typeof console.warn=="function"&&console.warn(e),fo=(e,t,n)=>{const r={};return n.filter(o=>Array.isArray(o[e])?!0:(typeof o[e]<"u"&&D5(`Helmet: ${e} should be of type "Array". Instead found type "${typeof o[e]}"`),!1)).map(o=>o[e]).reverse().reduce((o,i)=>{const a={};i.filter(l=>{let u;const d=Object.keys(l);for(let p=0;p<d.length;p+=1){const h=d[p],y=h.toLowerCase();t.indexOf(y)!==-1&&!(u==="rel"&&l[u].toLowerCase()==="canonical")&&!(y==="rel"&&l[y].toLowerCase()==="stylesheet")&&(u=y),t.indexOf(h)!==-1&&(h==="innerHTML"||h==="cssText"||h==="itemprop")&&(u=h)}if(!u||!l[u])return!1;const f=l[u].toLowerCase();return r[u]||(r[u]={}),a[u]||(a[u]={}),r[u][f]?!1:(a[u][f]=!0,!0)}).reverse().forEach(l=>o.push(l));const s=Object.keys(a);for(let l=0;l<s.length;l+=1){const u=s[l],d={...r[u],...a[u]};r[u]=d}return o},[]).reverse()},M5=(e,t)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},$5=e=>({baseTag:R5(["href"],e),bodyAttributes:gl("bodyAttributes",e),defer:Lr(e,Nr.DEFER),encode:Lr(e,Nr.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:gl("htmlAttributes",e),linkTags:fo("link",["rel","href"],e),metaTags:fo("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:fo("noscript",["innerHTML"],e),onChangeClientState:A5(e),scriptTags:fo("script",["src","innerHTML"],e),styleTags:fo("style",["cssText"],e),title:z5(e),titleAttributes:gl("titleAttributes",e),prioritizeSeoTags:M5(e,Nr.PRIORITIZE_SEO_TAGS)}),bg=e=>Array.isArray(e)?e.join(""):e,N5=(e,t)=>{const n=Object.keys(e);for(let r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1},vl=(e,t)=>Array.isArray(e)?e.reduce((n,r)=>(N5(r,t)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:e,priority:[]},hp=(e,t)=>({...e,[t]:void 0}),L5=["noscript","script","style"],_c=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Sg=e=>Object.keys(e).reduce((t,n)=>{const r=typeof e[n]<"u"?`${n}="${e[n]}"`:`${n}`;return t?`${t} ${r}`:r},""),I5=(e,t,n,r)=>{const o=Sg(n),i=bg(t);return o?`<${e} ${yt}="true" ${o}>${_c(i,r)}</${e}>`:`<${e} ${yt}="true">${_c(i,r)}</${e}>`},O5=(e,t,n=!0)=>t.reduce((r,o)=>{const i=o,a=Object.keys(i).filter(u=>!(u==="innerHTML"||u==="cssText")).reduce((u,d)=>{const f=typeof i[d]>"u"?d:`${d}="${_c(i[d],n)}"`;return u?`${u} ${f}`:f},""),s=i.innerHTML||i.cssText||"",l=L5.indexOf(e)===-1;return`${r}<${e} ${yt}="true" ${a}${l?"/>":`>${s}</${e}>`}`},""),jg=(e,t={})=>Object.keys(e).reduce((n,r)=>{const o=pd[r];return n[o||r]=e[r],n},t),V5=(e,t,n)=>{const r={key:t,[yt]:!0},o=jg(n,r);return[G.createElement("title",o,t)]},pa=(e,t)=>t.map((n,r)=>{const o={key:r,[yt]:!0};return Object.keys(n).forEach(i=>{const s=pd[i]||i;if(s==="innerHTML"||s==="cssText"){const l=n.innerHTML||n.cssText;o.dangerouslySetInnerHTML={__html:l}}else o[s]=n[i]}),G.createElement(e,o)}),nt=(e,t,n=!0)=>{switch(e){case"title":return{toComponent:()=>V5(e,t.title,t.titleAttributes),toString:()=>I5(e,t.title,t.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>jg(t),toString:()=>Sg(t)};default:return{toComponent:()=>pa(e,t),toString:()=>O5(e,t,n)}}},F5=({metaTags:e,linkTags:t,scriptTags:n,encode:r})=>{const o=vl(e,hl.meta),i=vl(t,hl.link),a=vl(n,hl.script);return{priorityMethods:{toComponent:()=>[...pa("meta",o.priority),...pa("link",i.priority),...pa("script",a.priority)],toString:()=>`${nt("meta",o.priority,r)} ${nt("link",i.priority,r)} ${nt("script",a.priority,r)}`},metaTags:o.default,linkTags:i.default,scriptTags:a.default}},_5=e=>{const{baseTag:t,bodyAttributes:n,encode:r=!0,htmlAttributes:o,noscriptTags:i,styleTags:a,title:s="",titleAttributes:l,prioritizeSeoTags:u}=e;let{linkTags:d,metaTags:f,scriptTags:p}=e,h={toComponent:()=>{},toString:()=>""};return u&&({priorityMethods:h,linkTags:d,metaTags:f,scriptTags:p}=F5(e)),{priority:h,base:nt("base",t,r),bodyAttributes:nt("bodyAttributes",n,r),htmlAttributes:nt("htmlAttributes",o,r),link:nt("link",d,r),meta:nt("meta",f,r),noscript:nt("noscript",i,r),script:nt("script",p,r),style:nt("style",a,r),title:nt("title",{title:s,titleAttributes:l},r)}},Bc=_5,_i=[],Cg=!!(typeof window<"u"&&window.document&&window.document.createElement),Uc=class{constructor(e,t){ft(this,"instances",[]);ft(this,"canUseDOM",Cg);ft(this,"context");ft(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?_i:this.instances,add:e=>{(this.canUseDOM?_i:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?_i:this.instances).indexOf(e);(this.canUseDOM?_i:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=Bc({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},B5={},kg=G.createContext(B5),qn,Pg=(qn=class extends b.Component{constructor(n){super(n);ft(this,"helmetData");this.helmetData=new Uc(this.props.context||{},qn.canUseDOM)}render(){return G.createElement(kg.Provider,{value:this.helmetData.value},this.props.children)}},ft(qn,"canUseDOM",Cg),qn),ur=(e,t)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${e}[${yt}]`),o=[].slice.call(r),i=[];let a;return t&&t.length&&t.forEach(s=>{const l=document.createElement(e);for(const u in s)if(Object.prototype.hasOwnProperty.call(s,u))if(u==="innerHTML")l.innerHTML=s.innerHTML;else if(u==="cssText")l.styleSheet?l.styleSheet.cssText=s.cssText:l.appendChild(document.createTextNode(s.cssText));else{const d=u,f=typeof s[d]>"u"?"":s[d];l.setAttribute(u,f)}l.setAttribute(yt,"true"),o.some((u,d)=>(a=d,l.isEqualNode(u)))?o.splice(a,1):i.push(l)}),o.forEach(s=>{var l;return(l=s.parentNode)==null?void 0:l.removeChild(s)}),i.forEach(s=>n.appendChild(s)),{oldTags:o,newTags:i}},Hc=(e,t)=>{const n=document.getElementsByTagName(e)[0];if(!n)return;const r=n.getAttribute(yt),o=r?r.split(","):[],i=[...o],a=Object.keys(t);for(const s of a){const l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),o.indexOf(s)===-1&&o.push(s);const u=i.indexOf(s);u!==-1&&i.splice(u,1)}for(let s=i.length-1;s>=0;s-=1)n.removeAttribute(i[s]);o.length===i.length?n.removeAttribute(yt):n.getAttribute(yt)!==a.join(",")&&n.setAttribute(yt,a.join(","))},U5=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=bg(e)),Hc("title",t)},gp=(e,t)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:o,linkTags:i,metaTags:a,noscriptTags:s,onChangeClientState:l,scriptTags:u,styleTags:d,title:f,titleAttributes:p}=e;Hc("body",r),Hc("html",o),U5(f,p);const h={baseTag:ur("base",n),linkTags:ur("link",i),metaTags:ur("meta",a),noscriptTags:ur("noscript",s),scriptTags:ur("script",u),styleTags:ur("style",d)},y={},w={};Object.keys(h).forEach(j=>{const{newTags:v,oldTags:m}=h[j];v.length&&(y[j]=v),m.length&&(w[j]=h[j].oldTags)}),t&&t(),l(e,y,w)},po=null,H5=e=>{po&&cancelAnimationFrame(po),e.defer?po=requestAnimationFrame(()=>{gp(e,()=>{po=null})}):(gp(e),po=null)},W5=H5,vp=class extends b.Component{constructor(){super(...arguments);ft(this,"rendered",!1)}shouldComponentUpdate(t){return!E5(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:n}=this.props.context;let r=null;const o=$5(t.get().map(i=>{const a={...i.props};return delete a.context,a}));Pg.canUseDOM?W5(o):Bc&&(r=Bc(o)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},Hl,md=(Hl=class extends b.Component{shouldComponentUpdate(e){return!j5(hp(this.props,"helmetData"),hp(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,r){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,r)}]}}mapObjectTypeChildren(e,t,n,r){switch(e.type){case"title":return{...t,[e.type]:r,titleAttributes:{...n}};case"body":return{...t,bodyAttributes:{...n}};case"html":return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach(r=>{n={...n,[r]:e[r]}}),n}warnOnInvalidChildren(e,t){return pp(mp.some(n=>e.type===n),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${mp.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),pp(!t||typeof t=="string"||Array.isArray(t)&&!t.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let n={};return G.Children.forEach(e,r=>{if(!r||!r.props)return;const{children:o,...i}=r.props,a=Object.keys(i).reduce((l,u)=>(l[T5[u]||u]=i[u],l),{});let{type:s}=r;switch(typeof s=="symbol"?s=s.toString():this.warnOnInvalidChildren(r,o),s){case"Symbol(react.fragment)":t=this.mapChildrenToProps(o,t);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,a,o);break;default:t=this.mapObjectTypeChildren(r,t,a,o);break}}),this.mapArrayTypeChildrenToProps(n,t)}render(){const{children:e,...t}=this.props;let n={...t},{helmetData:r}=t;if(e&&(n=this.mapChildrenToProps(e,n)),r&&!(r instanceof Uc)){const o=r;r=new Uc(o.context,!0),delete n.helmetData}return r?G.createElement(vp,{...n,context:r.value}):G.createElement(kg.Consumer,null,o=>G.createElement(vp,{...n,context:o}))}},ft(Hl,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Hl),ze=function(){return ze=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ze.apply(this,arguments)};function Hr(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Q="-ms-",Io="-moz-",U="-webkit-",Eg="comm",Es="rule",hd="decl",G5="@import",Tg="@keyframes",q5="@layer",zg=Math.abs,gd=String.fromCharCode,Wc=Object.assign;function Y5(e,t){return ye(e,0)^45?(((t<<2^ye(e,0))<<2^ye(e,1))<<2^ye(e,2))<<2^ye(e,3):0}function Ag(e){return e.trim()}function It(e,t){return(e=t.exec(e))?e[0]:e}function O(e,t,n){return e.replace(t,n)}function ma(e,t,n){return e.indexOf(t,n)}function ye(e,t){return e.charCodeAt(t)|0}function Wr(e,t,n){return e.slice(t,n)}function Tt(e){return e.length}function Rg(e){return e.length}function ko(e,t){return t.push(e),e}function K5(e,t){return e.map(t).join("")}function yp(e,t){return e.filter(function(n){return!It(n,t)})}var Ts=1,Gr=1,Dg=0,ct=0,de=0,no="";function zs(e,t,n,r,o,i,a,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Ts,column:Gr,length:a,return:"",siblings:s}}function tn(e,t){return Wc(zs("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function dr(e){for(;e.root;)e=tn(e.root,{children:[e]});ko(e,e.siblings)}function Q5(){return de}function X5(){return de=ct>0?ye(no,--ct):0,Gr--,de===10&&(Gr=1,Ts--),de}function bt(){return de=ct<Dg?ye(no,ct++):0,Gr++,de===10&&(Gr=1,Ts++),de}function Qn(){return ye(no,ct)}function ha(){return ct}function As(e,t){return Wr(no,e,t)}function Gc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Z5(e){return Ts=Gr=1,Dg=Tt(no=e),ct=0,[]}function J5(e){return no="",e}function yl(e){return Ag(As(ct-1,qc(e===91?e+2:e===40?e+1:e)))}function e4(e){for(;(de=Qn())&&de<33;)bt();return Gc(e)>2||Gc(de)>3?"":" "}function t4(e,t){for(;--t&&bt()&&!(de<48||de>102||de>57&&de<65||de>70&&de<97););return As(e,ha()+(t<6&&Qn()==32&&bt()==32))}function qc(e){for(;bt();)switch(de){case e:return ct;case 34:case 39:e!==34&&e!==39&&qc(de);break;case 40:e===41&&qc(e);break;case 92:bt();break}return ct}function n4(e,t){for(;bt()&&e+de!==57;)if(e+de===84&&Qn()===47)break;return"/*"+As(t,ct-1)+"*"+gd(e===47?e:bt())}function r4(e){for(;!Gc(Qn());)bt();return As(e,ct)}function o4(e){return J5(ga("",null,null,null,[""],e=Z5(e),0,[0],e))}function ga(e,t,n,r,o,i,a,s,l){for(var u=0,d=0,f=a,p=0,h=0,y=0,w=1,j=1,v=1,m=0,g="",S=o,P=i,k=r,C=g;j;)switch(y=m,m=bt()){case 40:if(y!=108&&ye(C,f-1)==58){ma(C+=O(yl(m),"&","&\f"),"&\f",zg(u?s[u-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:C+=yl(m);break;case 9:case 10:case 13:case 32:C+=e4(y);break;case 92:C+=t4(ha()-1,7);continue;case 47:switch(Qn()){case 42:case 47:ko(i4(n4(bt(),ha()),t,n,l),l);break;default:C+="/"}break;case 123*w:s[u++]=Tt(C)*v;case 125*w:case 59:case 0:switch(m){case 0:case 125:j=0;case 59+d:v==-1&&(C=O(C,/\f/g,"")),h>0&&Tt(C)-f&&ko(h>32?wp(C+";",r,n,f-1,l):wp(O(C," ","")+";",r,n,f-2,l),l);break;case 59:C+=";";default:if(ko(k=xp(C,t,n,u,d,o,s,g,S=[],P=[],f,i),i),m===123)if(d===0)ga(C,t,k,k,S,i,f,s,P);else switch(p===99&&ye(C,3)===110?100:p){case 100:case 108:case 109:case 115:ga(e,k,k,r&&ko(xp(e,k,k,0,0,o,s,g,o,S=[],f,P),P),o,P,f,s,r?S:P);break;default:ga(C,k,k,k,[""],P,0,s,P)}}u=d=h=0,w=v=1,g=C="",f=a;break;case 58:f=1+Tt(C),h=y;default:if(w<1){if(m==123)--w;else if(m==125&&w++==0&&X5()==125)continue}switch(C+=gd(m),m*w){case 38:v=d>0?1:(C+="\f",-1);break;case 44:s[u++]=(Tt(C)-1)*v,v=1;break;case 64:Qn()===45&&(C+=yl(bt())),p=Qn(),d=f=Tt(g=C+=r4(ha())),m++;break;case 45:y===45&&Tt(C)==2&&(w=0)}}return i}function xp(e,t,n,r,o,i,a,s,l,u,d,f){for(var p=o-1,h=o===0?i:[""],y=Rg(h),w=0,j=0,v=0;w<r;++w)for(var m=0,g=Wr(e,p+1,p=zg(j=a[w])),S=e;m<y;++m)(S=Ag(j>0?h[m]+" "+g:O(g,/&\f/g,h[m])))&&(l[v++]=S);return zs(e,t,n,o===0?Es:s,l,u,d,f)}function i4(e,t,n,r){return zs(e,t,n,Eg,gd(Q5()),Wr(e,2,-2),0,r)}function wp(e,t,n,r,o){return zs(e,t,n,hd,Wr(e,0,r),Wr(e,r+1,-1),r,o)}function Mg(e,t,n){switch(Y5(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 4789:return Io+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+Io+e+Q+e+e;case 5936:switch(ye(e,t+11)){case 114:return U+e+Q+O(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+Q+O(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+Q+O(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return U+e+Q+e+e;case 6165:return U+e+Q+"flex-"+e+e;case 5187:return U+e+O(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+Q+"flex-$1$2")+e;case 5443:return U+e+Q+"flex-item-"+O(e,/flex-|-self/g,"")+(It(e,/flex-|baseline/)?"":Q+"grid-row-"+O(e,/flex-|-self/g,""))+e;case 4675:return U+e+Q+"flex-line-pack"+O(e,/align-content|flex-|-self/g,"")+e;case 5548:return U+e+Q+O(e,"shrink","negative")+e;case 5292:return U+e+Q+O(e,"basis","preferred-size")+e;case 6060:return U+"box-"+O(e,"-grow","")+U+e+Q+O(e,"grow","positive")+e;case 4554:return U+O(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return O(O(O(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return O(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return O(O(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+Q+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4200:if(!It(e,/flex-|baseline/))return Q+"grid-column-align"+Wr(e,t)+e;break;case 2592:case 3360:return Q+O(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,It(r.props,/grid-\w+-end/)})?~ma(e+(n=n[t].value),"span",0)?e:Q+O(e,"-start","")+e+Q+"grid-row-span:"+(~ma(n,"span",0)?It(n,/\d+/):+It(n,/\d+/)-+It(e,/\d+/))+";":Q+O(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return It(r.props,/grid-\w+-start/)})?e:Q+O(O(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return O(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Tt(e)-1-t>6)switch(ye(e,t+1)){case 109:if(ye(e,t+4)!==45)break;case 102:return O(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+Io+(ye(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ma(e,"stretch",0)?Mg(O(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return O(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,a,s,l,u){return Q+o+":"+i+u+(a?Q+o+"-span:"+(s?l:+l-+i)+u:"")+e});case 4949:if(ye(e,t+6)===121)return O(e,":",":"+U)+e;break;case 6444:switch(ye(e,ye(e,14)===45?18:11)){case 120:return O(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+U+(ye(e,14)===45?"inline-":"")+"box$3$1"+U+"$2$3$1"+Q+"$2box$3")+e;case 100:return O(e,":",":"+Q)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return O(e,"scroll-","scroll-snap-")+e}return e}function Ga(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function a4(e,t,n,r){switch(e.type){case q5:if(e.children.length)break;case G5:case hd:return e.return=e.return||e.value;case Eg:return"";case Tg:return e.return=e.value+"{"+Ga(e.children,r)+"}";case Es:if(!Tt(e.value=e.props.join(",")))return""}return Tt(n=Ga(e.children,r))?e.return=e.value+"{"+n+"}":""}function s4(e){var t=Rg(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}function l4(e){return function(t){t.root||(t=t.return)&&e(t)}}function c4(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case hd:e.return=Mg(e.value,e.length,n);return;case Tg:return Ga([tn(e,{value:O(e.value,"@","@"+U)})],r);case Es:if(e.length)return K5(n=e.props,function(o){switch(It(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":dr(tn(e,{props:[O(o,/:(read-\w+)/,":"+Io+"$1")]})),dr(tn(e,{props:[o]})),Wc(e,{props:yp(n,r)});break;case"::placeholder":dr(tn(e,{props:[O(o,/:(plac\w+)/,":"+U+"input-$1")]})),dr(tn(e,{props:[O(o,/:(plac\w+)/,":"+Io+"$1")]})),dr(tn(e,{props:[O(o,/:(plac\w+)/,Q+"input-$1")]})),dr(tn(e,{props:[o]})),Wc(e,{props:yp(n,r)});break}return""})}}var u4={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},He={},qr=typeof process<"u"&&He!==void 0&&(He.REACT_APP_SC_ATTR||He.SC_ATTR)||"data-styled",$g="active",Ng="data-styled-version",Rs="6.1.19",vd=`/*!sc*/
`,qa=typeof window<"u"&&typeof document<"u",d4=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&He!==void 0&&He.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&He.REACT_APP_SC_DISABLE_SPEEDY!==""?He.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&He.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&He!==void 0&&He.SC_DISABLE_SPEEDY!==void 0&&He.SC_DISABLE_SPEEDY!==""&&He.SC_DISABLE_SPEEDY!=="false"&&He.SC_DISABLE_SPEEDY),f4={},Ds=Object.freeze([]),Yr=Object.freeze({});function Lg(e,t,n){return n===void 0&&(n=Yr),e.theme!==n.theme&&e.theme||t||n.theme}var Ig=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),p4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,m4=/(^-|-$)/g;function bp(e){return e.replace(p4,"-").replace(m4,"")}var h4=/(a)(d)/gi,Bi=52,Sp=function(e){return String.fromCharCode(e+(e>25?39:97))};function Yc(e){var t,n="";for(t=Math.abs(e);t>Bi;t=t/Bi|0)n=Sp(t%Bi)+n;return(Sp(t%Bi)+n).replace(h4,"$1-$2")}var xl,Og=5381,Cr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Vg=function(e){return Cr(Og,e)};function yd(e){return Yc(Vg(e)>>>0)}function g4(e){return e.displayName||e.name||"Component"}function wl(e){return typeof e=="string"&&!0}var Fg=typeof Symbol=="function"&&Symbol.for,_g=Fg?Symbol.for("react.memo"):60115,v4=Fg?Symbol.for("react.forward_ref"):60112,y4={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},x4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Bg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},w4=((xl={})[v4]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xl[_g]=Bg,xl);function jp(e){return("type"in(t=e)&&t.type.$$typeof)===_g?Bg:"$$typeof"in e?w4[e.$$typeof]:y4;var t}var b4=Object.defineProperty,S4=Object.getOwnPropertyNames,Cp=Object.getOwnPropertySymbols,j4=Object.getOwnPropertyDescriptor,C4=Object.getPrototypeOf,kp=Object.prototype;function Ug(e,t,n){if(typeof t!="string"){if(kp){var r=C4(t);r&&r!==kp&&Ug(e,r,n)}var o=S4(t);Cp&&(o=o.concat(Cp(t)));for(var i=jp(e),a=jp(t),s=0;s<o.length;++s){var l=o[s];if(!(l in x4||n&&n[l]||a&&l in a||i&&l in i)){var u=j4(t,l);try{b4(e,l,u)}catch{}}}}return e}function Kr(e){return typeof e=="function"}function xd(e){return typeof e=="object"&&"styledComponentId"in e}function Wn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ya(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function si(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Kc(e,t,n){if(n===void 0&&(n=!1),!n&&!si(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Kc(e[r],t[r]);else if(si(t))for(var r in t)e[r]=Kc(e[r],t[r]);return e}function wd(e,t){Object.defineProperty(e,"toString",{value:t})}function vi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var k4=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw vi(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var a=o;a<i;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),l=(a=0,n.length);a<l;a++)this.tag.insertRule(s,n[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,a=o;a<i;a++)n+="".concat(this.tag.getRule(a)).concat(vd);return n},e}(),va=new Map,Ka=new Map,ya=1,Ui=function(e){if(va.has(e))return va.get(e);for(;Ka.has(ya);)ya++;var t=ya++;return va.set(e,t),Ka.set(t,e),t},P4=function(e,t){ya=t+1,va.set(e,t),Ka.set(t,e)},E4="style[".concat(qr,"][").concat(Ng,'="').concat(Rs,'"]'),T4=new RegExp("^".concat(qr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),z4=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},A4=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(vd),o=[],i=0,a=r.length;i<a;i++){var s=r[i].trim();if(s){var l=s.match(T4);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(P4(d,u),z4(e,d,l[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(s)}}},Pp=function(e){for(var t=document.querySelectorAll(E4),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(qr)!==$g&&(A4(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function R4(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Hg=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){var l=Array.from(s.querySelectorAll("style[".concat(qr,"]")));return l[l.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(qr,$g),r.setAttribute(Ng,Rs);var a=R4();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},D4=function(){function e(t){this.element=Hg(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var a=r[o];if(a.ownerNode===n)return a}throw vi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),M4=function(){function e(t){this.element=Hg(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),$4=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Ep=qa,N4={isServer:!qa,useCSSOMInjection:!d4},Qa=function(){function e(t,n,r){t===void 0&&(t=Yr),n===void 0&&(n={});var o=this;this.options=ze(ze({},N4),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&qa&&Ep&&(Ep=!1,Pp(this)),wd(this,function(){return function(i){for(var a=i.getTag(),s=a.length,l="",u=function(f){var p=function(v){return Ka.get(v)}(f);if(p===void 0)return"continue";var h=i.names.get(p),y=a.getGroup(f);if(h===void 0||!h.size||y.length===0)return"continue";var w="".concat(qr,".g").concat(f,'[id="').concat(p,'"]'),j="";h!==void 0&&h.forEach(function(v){v.length>0&&(j+="".concat(v,","))}),l+="".concat(y).concat(w,'{content:"').concat(j,'"}').concat(vd)},d=0;d<s;d++)u(d);return l}(o)})}return e.registerId=function(t){return Ui(t)},e.prototype.rehydrate=function(){!this.server&&qa&&Pp(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ze(ze({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new $4(o):r?new D4(o):new M4(o)}(this.options),new k4(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ui(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ui(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ui(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),L4=/&/g,I4=/^\s*\/\/.*$/gm;function Wg(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Wg(n.children,t)),n})}function O4(e){var t,n,r,o=Yr,i=o.options,a=i===void 0?Yr:i,s=o.plugins,l=s===void 0?Ds:s,u=function(p,h,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):p},d=l.slice();d.push(function(p){p.type===Es&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(L4,n).replace(r,u))}),a.prefix&&d.push(c4),d.push(a4);var f=function(p,h,y,w){h===void 0&&(h=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,n=h,r=new RegExp("\\".concat(n,"\\b"),"g");var j=p.replace(I4,""),v=o4(y||h?"".concat(y," ").concat(h," { ").concat(j," }"):j);a.namespace&&(v=Wg(v,a.namespace));var m=[];return Ga(v,s4(d.concat(l4(function(g){return m.push(g)})))),m};return f.hash=l.length?l.reduce(function(p,h){return h.name||vi(15),Cr(p,h.name)},Og).toString():"",f}var V4=new Qa,Qc=O4(),Gg=G.createContext({shouldForwardProp:void 0,styleSheet:V4,stylis:Qc});Gg.Consumer;G.createContext(void 0);function Xc(){return b.useContext(Gg)}var qg=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Qc);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,wd(this,function(){throw vi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Qc),this.name+t.hash},e}(),F4=function(e){return e>="A"&&e<="Z"};function Tp(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;F4(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Yg=function(e){return e==null||e===!1||e===""},Kg=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Yg(i)&&(Array.isArray(i)&&i.isCss||Kr(i)?r.push("".concat(Tp(o),":"),i,";"):si(i)?r.push.apply(r,Hr(Hr(["".concat(o," {")],Kg(i),!1),["}"],!1)):r.push("".concat(Tp(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in u4||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Sn(e,t,n,r){if(Yg(e))return[];if(xd(e))return[".".concat(e.styledComponentId)];if(Kr(e)){if(!Kr(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return Sn(o,t,n,r)}var i;return e instanceof qg?n?(e.inject(n,r),[e.getName(r)]):[e]:si(e)?Kg(e):Array.isArray(e)?Array.prototype.concat.apply(Ds,e.map(function(a){return Sn(a,t,n,r)})):[e.toString()]}function Qg(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Kr(n)&&!xd(n))return!1}return!0}var _4=Vg(Rs),B4=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Qg(t),this.componentId=n,this.baseHash=Cr(_4,n),this.baseStyle=r,Qa.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Wn(o,this.staticRulesId);else{var i=Ya(Sn(this.rules,t,n,r)),a=Yc(Cr(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,a)){var s=r(i,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,s)}o=Wn(o,a),this.staticRulesId=a}else{for(var l=Cr(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")u+=f;else if(f){var p=Ya(Sn(f,t,n,r));l=Cr(l,p+d),u+=p}}if(u){var h=Yc(l>>>0);n.hasNameForId(this.componentId,h)||n.insertRules(this.componentId,h,r(u,".".concat(h),void 0,this.componentId)),o=Wn(o,h)}}return o},e}(),bd=G.createContext(void 0);bd.Consumer;var bl={};function U4(e,t,n){var r=xd(e),o=e,i=!wl(e),a=t.attrs,s=a===void 0?Ds:a,l=t.componentId,u=l===void 0?function(S,P){var k=typeof S!="string"?"sc":bp(S);bl[k]=(bl[k]||0)+1;var C="".concat(k,"-").concat(yd(Rs+k+bl[k]));return P?"".concat(P,"-").concat(C):C}(t.displayName,t.parentComponentId):l,d=t.displayName,f=d===void 0?function(S){return wl(S)?"styled.".concat(S):"Styled(".concat(g4(S),")")}(e):d,p=t.displayName&&t.componentId?"".concat(bp(t.displayName),"-").concat(t.componentId):t.componentId||u,h=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s,y=t.shouldForwardProp;if(r&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var j=t.shouldForwardProp;y=function(S,P){return w(S,P)&&j(S,P)}}else y=w}var v=new B4(n,p,r?o.componentStyle:void 0);function m(S,P){return function(k,C,E){var D=k.attrs,M=k.componentStyle,oe=k.defaultProps,pe=k.foldedComponentIds,we=k.styledComponentId,ce=k.target,jt=G.useContext(bd),J=Xc(),Ce=k.shouldForwardProp||J.shouldForwardProp,z=Lg(C,jt,oe)||Yr,$=function(ut,me,Ze){for(var Nn,dt=ze(ze({},me),{className:void 0,theme:Ze}),Jt=0;Jt<ut.length;Jt+=1){var Je=Kr(Nn=ut[Jt])?Nn(dt):Nn;for(var Nt in Je)dt[Nt]=Nt==="className"?Wn(dt[Nt],Je[Nt]):Nt==="style"?ze(ze({},dt[Nt]),Je[Nt]):Je[Nt]}return me.className&&(dt.className=Wn(dt.className,me.className)),dt}(D,C,z),I=$.as||ce,N={};for(var _ in $)$[_]===void 0||_[0]==="$"||_==="as"||_==="theme"&&$.theme===z||(_==="forwardedAs"?N.as=$.forwardedAs:Ce&&!Ce(_,I)||(N[_]=$[_]));var Ct=function(ut,me){var Ze=Xc(),Nn=ut.generateAndInjectStyles(me,Ze.styleSheet,Ze.stylis);return Nn}(M,$),Le=Wn(pe,we);return Ct&&(Le+=" "+Ct),$.className&&(Le+=" "+$.className),N[wl(I)&&!Ig.has(I)?"class":"className"]=Le,E&&(N.ref=E),b.createElement(I,N)}(g,S,P)}m.displayName=f;var g=G.forwardRef(m);return g.attrs=h,g.componentStyle=v,g.displayName=f,g.shouldForwardProp=y,g.foldedComponentIds=r?Wn(o.foldedComponentIds,o.styledComponentId):"",g.styledComponentId=p,g.target=r?o.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(P){for(var k=[],C=1;C<arguments.length;C++)k[C-1]=arguments[C];for(var E=0,D=k;E<D.length;E++)Kc(P,D[E],!0);return P}({},o.defaultProps,S):S}}),wd(g,function(){return".".concat(g.styledComponentId)}),i&&Ug(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function zp(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Ap=function(e){return Object.assign(e,{isCss:!0})};function ht(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Kr(e)||si(e))return Ap(Sn(zp(Ds,Hr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Sn(r):Ap(Sn(zp(r,t)))}function Zc(e,t,n){if(n===void 0&&(n=Yr),!t)throw vi(1,t);var r=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,ht.apply(void 0,Hr([o],i,!1)))};return r.attrs=function(o){return Zc(e,t,ze(ze({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Zc(e,t,ze(ze({},n),o))},r}var Xg=function(e){return Zc(U4,e)},x=Xg;Ig.forEach(function(e){x[e]=Xg(e)});var H4=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Qg(t),Qa.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(Ya(Sn(this.rules,n,r,o)),""),a=this.componentId+t;r.insertRules(a,a,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Qa.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function W4(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ht.apply(void 0,Hr([e],t,!1)),o="sc-global-".concat(yd(JSON.stringify(r))),i=new H4(r,o),a=function(l){var u=Xc(),d=G.useContext(bd),f=G.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&s(f,l,u.styleSheet,d,u.stylis),G.useLayoutEffect(function(){if(!u.styleSheet.server)return s(f,l,u.styleSheet,d,u.stylis),function(){return i.removeStyles(f,u.styleSheet)}},[f,l,u.styleSheet,d,u.stylis]),null};function s(l,u,d,f,p){if(i.isStatic)i.renderStyles(l,f4,d,p);else{var h=ze(ze({},u),{theme:Lg(u,f,a.defaultProps)});i.renderStyles(l,h,d,p)}}return G.memo(a)}function Zg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ya(ht.apply(void 0,Hr([e],t,!1))),o=yd(r);return new qg(o,r)}const G4=W4`
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
`,q4=()=>{const{pathname:e}=ar();return b.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[e]),null};var Jg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Rp=G.createContext&&G.createContext(Jg),jn=function(){return jn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},jn.apply(this,arguments)},Y4=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function e1(e){return e&&e.map(function(t,n){return G.createElement(t.tag,jn({key:n},t.attr),e1(t.child))})}function F(e){return function(t){return G.createElement(K4,jn({attr:jn({},e.attr)},t),e1(e.child))}}function K4(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,a=Y4(e,["attr","size","title"]),s=o||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),G.createElement("svg",jn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:l,style:jn(jn({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&G.createElement("title",null,i),e.children)};return Rp!==void 0?G.createElement(Rp.Consumer,null,function(n){return t(n)}):t(Jg)}function Q4(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"}}]})(e)}function X4(e){return F({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(e)}function Ut(e){return F({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"}}]})(e)}function Z4(e){return F({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm144-248c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48zm176 248c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"}}]})(e)}function J4(e){return F({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"}}]})(e)}function e3(e){return F({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}function t3(e){return F({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 432c-101.69 0-184-82.29-184-184 0-101.69 82.29-184 184-184 101.69 0 184 82.29 184 184 0 101.69-82.29 184-184 184zm0-312c-70.69 0-128 57.31-128 128s57.31 128 128 128 128-57.31 128-128-57.31-128-128-128zm0 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"}}]})(e)}function yi(e){return F({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"}}]})(e)}function n3(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"}}]})(e)}function r3(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}}]})(e)}function o3(e){return F({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"}}]})(e)}function i3(e){return F({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"}}]})(e)}function Xa(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"}}]})(e)}function a3(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"}}]})(e)}function s3(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M510.37 254.79l-12.08-76.26a132.493 132.493 0 0 0-37.16-72.95l-54.76-54.75c-19.73-19.72-45.18-32.7-72.71-37.05l-76.7-12.15c-27.51-4.36-55.69.11-80.52 12.76L107.32 49.6a132.25 132.25 0 0 0-57.79 57.8l-35.1 68.88a132.602 132.602 0 0 0-12.82 80.94l12.08 76.27a132.493 132.493 0 0 0 37.16 72.95l54.76 54.75a132.087 132.087 0 0 0 72.71 37.05l76.7 12.14c27.51 4.36 55.69-.11 80.52-12.75l69.12-35.21a132.302 132.302 0 0 0 57.79-57.8l35.1-68.87c12.71-24.96 17.2-53.3 12.82-80.96zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"}}]})(e)}function l3(e){return F({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z"}}]})(e)}function c3(e){return F({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"}}]})(e)}function u3(e){return F({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"}}]})(e)}function d3(e){return F({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M288 256H96v64h192v-64zm89-151L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 64c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm256 304c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16zm0-200v96c0 8.84-7.16 16-16 16H80c-8.84 0-16-7.16-16-16v-96c0-8.84 7.16-16 16-16h224c8.84 0 16 7.16 16 16z"}}]})(e)}function f3(e){return F({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"}}]})(e)}function p3(e){return F({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 492v20H0v-20c0-6.627 5.373-12 12-12h20V120c0-13.255 10.745-24 24-24h88V24c0-13.255 10.745-24 24-24h112c13.255 0 24 10.745 24 24v72h88c13.255 0 24 10.745 24 24v360h20c6.627 0 12 5.373 12 12zM308 192h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zm-168 64h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12zm104 128h-40c-6.627 0-12 5.373-12 12v84h64v-84c0-6.627-5.373-12-12-12zm64-96h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zm-116 12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40zM182 96h26v26a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V96h26a6 6 0 0 0 6-6V70a6 6 0 0 0-6-6h-26V38a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v26h-26a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6z"}}]})(e)}function Dp(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"}}]})(e)}function Sd(e){return F({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"}}]})(e)}function m3(e){return F({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 0 0 0 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 0 0 576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z"}}]})(e)}function Za(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"}}]})(e)}function h3(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"}}]})(e)}function g3(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"}}]})(e)}function v3(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 320h-96c-17.6 0-32-14.4-32-32s14.4-32 32-32h96s96-107 96-160-43-96-96-96-96 43-96 96c0 25.5 22.2 63.4 45.3 96H320c-52.9 0-96 43.1-96 96s43.1 96 96 96h96c17.6 0 32 14.4 32 32s-14.4 32-32 32H185.5c-16 24.8-33.8 47.7-47.3 64H416c52.9 0 96-43.1 96-96s-43.1-96-96-96zm0-256c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM96 256c-53 0-96 43-96 96s96 160 96 160 96-107 96-160-43-96-96-96zm0 128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"}}]})(e)}function y3(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}}]})(e)}function t1(e){return F({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"}}]})(e)}function n1(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"}}]})(e)}function r1(e){return F({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"}}]})(e)}function x3(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M447.1 112c-34.2.5-62.3 28.4-63 62.6-.5 24.3 12.5 45.6 32 56.8V344c0 57.3-50.2 104-112 104-60 0-109.2-44.1-111.9-99.2C265 333.8 320 269.2 320 192V36.6c0-11.4-8.1-21.3-19.3-23.5L237.8.5c-13-2.6-25.6 5.8-28.2 18.8L206.4 35c-2.6 13 5.8 25.6 18.8 28.2l30.7 6.1v121.4c0 52.9-42.2 96.7-95.1 97.2-53.4.5-96.9-42.7-96.9-96V69.4l30.7-6.1c13-2.6 21.4-15.2 18.8-28.2l-3.1-15.7C107.7 6.4 95.1-2 82.1.6L19.3 13C8.1 15.3 0 25.1 0 36.6V192c0 77.3 55.1 142 128.1 156.8C130.7 439.2 208.6 512 304 512c97 0 176-75.4 176-168V231.4c19.1-11.1 32-31.7 32-55.4 0-35.7-29.2-64.5-64.9-64zm.9 80c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"}}]})(e)}function xi(e){return F({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}function Ms(e){return F({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M443.98 96.25c-11.01-45.22-47.11-82.06-92.01-93.72-32.19-8.36-63 5.1-89.14 24.33-3.25 2.39-6.96 3.73-10.5 5.48l28.32 18.21c7.42 4.77 9.58 14.67 4.8 22.11-4.46 6.95-14.27 9.86-22.11 4.8L162.83 12.84c-20.7-10.85-43.38-16.4-66.81-10.31-44.9 11.67-81 48.5-92.01 93.72-10.13 41.62-.42 80.81 21.5 110.43 23.36 31.57 32.68 68.66 36.29 107.35 4.4 47.16 10.33 94.16 20.94 140.32l7.8 33.95c3.19 13.87 15.49 23.7 29.67 23.7 13.97 0 26.15-9.55 29.54-23.16l34.47-138.42c4.56-18.32 20.96-31.16 39.76-31.16s35.2 12.85 39.76 31.16l34.47 138.42c3.39 13.61 15.57 23.16 29.54 23.16 14.18 0 26.48-9.83 29.67-23.7l7.8-33.95c10.61-46.15 16.53-93.16 20.94-140.32 3.61-38.7 12.93-75.78 36.29-107.35 21.95-29.61 31.66-68.8 21.53-110.43z"}}]})(e)}function Jc(e){return F({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zM104 424c0 13.3 10.7 24 24 24s24-10.7 24-24-10.7-24-24-24-24 10.7-24 24zm216-135.4v49c36.5 7.4 64 39.8 64 78.4v41.7c0 7.6-5.4 14.2-12.9 15.7l-32.2 6.4c-4.3.9-8.5-1.9-9.4-6.3l-3.1-15.7c-.9-4.3 1.9-8.6 6.3-9.4l19.3-3.9V416c0-62.8-96-65.1-96 1.9v26.7l19.3 3.9c4.3.9 7.1 5.1 6.3 9.4l-3.1 15.7c-.9 4.3-5.1 7.1-9.4 6.3l-31.2-4.2c-7.9-1.1-13.8-7.8-13.8-15.9V416c0-38.6 27.5-70.9 64-78.4v-45.2c-2.2.7-4.4 1.1-6.6 1.9-18 6.3-37.3 9.8-57.4 9.8s-39.4-3.5-57.4-9.8c-7.4-2.6-14.9-4.2-22.6-5.2v81.6c23.1 6.9 40 28.1 40 53.4 0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.3 16.9-46.5 40-53.4v-80.4C48.5 301 0 355.8 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-72-56.8-130.3-128-133.8z"}}]})(e)}function o1(e){return F({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}}]})(e)}const w3=x.button`
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
`,b3=x(n1)`
  position: absolute;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,$t=b.memo(({children:e,variant:t="primary",size:n="medium",loading:r=!1,disabled:o=!1,onClick:i,type:a="button",as:s,to:l,href:u,target:d,...f})=>{const p=b.useCallback(y=>{if(r||o){y.preventDefault();return}i&&i(y)},[r,o,i]),h={$variant:t,$size:n,$loading:r,disabled:o||r,onClick:p,type:a,as:s,to:l,href:u,target:d,...f};return c.jsxs(w3,{...h,children:[r&&c.jsx(b3,{className:"spinner"}),t==="whatsapp"&&!r&&c.jsx(Ut,{}),e]})}),S3=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 2rem;
  text-align: center;
  background: var(--light-bg);
`,j3=x.div`
  font-size: 4rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
`,C3=x.h2`
  font-size: 2rem;
  color: var(--text-color);
  margin-bottom: 1rem;
  font-family: 'Roboto', sans-serif;
`,k3=x.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.6;
`,P3=x.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;class E3 extends b.Component{constructor(n){super(n);ft(this,"handleReload",()=>{window.location.reload()});ft(this,"handleGoHome",()=>{window.location.href="/"});this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(n){return{hasError:!0}}componentDidCatch(n,r){this.setState({error:n,errorInfo:r}),console.error("ErrorBoundary capturou um erro:",n,r)}render(){return this.state.hasError?c.jsxs(S3,{role:"alert",children:[c.jsx(j3,{children:"⚠️"}),c.jsx(C3,{children:"Oops! Algo deu errado"}),c.jsx(k3,{children:"Ocorreu um erro inesperado. Nossa equipe foi notificada e está trabalhando para resolver o problema. Tente recarregar a página ou voltar para o início."}),c.jsxs(P3,{children:[c.jsx($t,{variant:"primary",onClick:this.handleReload,children:"Recarregar Página"}),c.jsx($t,{variant:"outline",onClick:this.handleGoHome,children:"Ir para Início"})]})]}):this.props.children}}const T3=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
  background: var(--light-bg);
`,z3=x.h1`
  font-size: 8rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0;
  font-family: 'Roboto', sans-serif;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    font-size: 6rem;
  }
`,A3=x.h2`
  font-size: 2.5rem;
  color: var(--text-color);
  margin: 1rem 0;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,R3=x.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,D3=x.div`
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
`,M3=x.ul`
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
`,$3=b.memo(()=>c.jsxs(T3,{role:"main",children:[c.jsx(z3,{"aria-label":"Erro 404",children:"404"}),c.jsx(A3,{children:"Página não encontrada"}),c.jsx(R3,{children:"A página que você está procurando não existe ou foi movida para outro local. Que tal navegar para uma das nossas páginas principais?"}),c.jsxs(D3,{children:[c.jsx($t,{as:Ie,to:"/",variant:"primary",size:"large",children:"Ir para Início"}),c.jsx($t,{as:Ie,to:"/agendamento",variant:"secondary",size:"large",children:"Agendar Consulta"})]}),c.jsx("nav",{"aria-label":"Navegação principal",children:c.jsxs(M3,{children:[c.jsx(mo,{children:c.jsx(Ie,{to:"/sobre",children:"Sobre Nós"})}),c.jsx(mo,{children:c.jsx(Ie,{to:"/servicos",children:"Serviços"})}),c.jsx(mo,{children:c.jsx(Ie,{to:"/galeria",children:"Galeria"})}),c.jsx(mo,{children:c.jsx(Ie,{to:"/blog",children:"Blog"})}),c.jsx(mo,{children:c.jsx(Ie,{to:"/contato",children:"Contato"})})]})})]})),N3=x.div`
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
`,L3=x.div`
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
`,I3=x.div`
  font-size: 2rem;
  color: var(--primary-color);
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,O3=x.div`
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
`,V3=x.div`
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
`,F3=x.button`
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
`,Sl="cookie-consent",_3=b.memo(()=>{const[e,t]=b.useState(!1);b.useEffect(()=>{if(!localStorage.getItem(Sl)){const a=setTimeout(()=>{t(!0)},2e3);return()=>clearTimeout(a)}},[]);const n=()=>{localStorage.setItem(Sl,"accepted"),t(!1),typeof window<"u"&&window.gtag&&window.gtag("consent","update",{analytics_storage:"granted"})},r=()=>{localStorage.setItem(Sl,"declined"),t(!1),typeof window<"u"&&window.gtag&&window.gtag("consent","update",{analytics_storage:"denied"})},o=()=>{t(!1)};return e?c.jsxs(N3,{$hidden:!e,role:"dialog","aria-labelledby":"cookie-title","aria-describedby":"cookie-description",children:[c.jsx(F3,{onClick:o,"aria-label":"Fechar banner de cookies",children:c.jsx(xi,{})}),c.jsxs(L3,{children:[c.jsx(I3,{children:c.jsx(s3,{})}),c.jsxs(O3,{children:[c.jsx("h4",{id:"cookie-title",children:"Cookies e Privacidade"}),c.jsxs("p",{id:"cookie-description",children:["Utilizamos cookies para melhorar sua experiência e analisar nosso tráfego. Ao continuar navegando, você concorda com nossa"," ",c.jsx("a",{href:"/politica-privacidade",target:"_blank",rel:"noopener noreferrer",children:"Política de Privacidade"}),"."]})]}),c.jsxs(V3,{children:[c.jsx($t,{variant:"primary",size:"small",onClick:n,"aria-describedby":"cookie-description",children:"Aceitar"}),c.jsx($t,{variant:"outline",size:"small",onClick:r,"aria-describedby":"cookie-description",children:"Recusar"})]})]})]}):null}),B3=x.header`
  background: var(--white);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`,U3=x.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,H3=x(Ie)`
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
`,W3=x.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`,G3=x(Ie)`
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
`,q3=x.div`
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
`;const Y3=x.a`
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
`,K3=x.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--primary-color);
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`,Q3=x.div`
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
`,X3=x(Ie)`
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
`;const Z3=x.a`
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
`,J3=()=>{const[e,t]=b.useState(!1),n=ar(),r=[{path:"/",label:"Início"},{path:"/sobre",label:"Sobre"},{path:"/servicos",label:"Serviços"},{path:"/agendamento",label:"Agendamento"},{path:"/galeria",label:"Galeria"},{path:"/blog",label:"Blog"},{path:"/contato",label:"Contato"}],o=()=>{t(!e)},i=()=>{t(!1)};return c.jsxs(B3,{children:[c.jsxs(U3,{children:[c.jsxs(H3,{to:"/",children:[c.jsx(Ms,{}),"Sorriso Perfeito"]}),c.jsx(W3,{children:r.map(a=>c.jsx(G3,{to:a.path,$active:n.pathname===a.path,children:a.label},a.path))}),c.jsx(q3,{children:c.jsxs(Y3,{href:"https://wa.me/555591679300",target:"_blank",children:[c.jsx(Ut,{}),"WhatsApp"]})}),c.jsx(K3,{onClick:o,children:e?c.jsx(xi,{}):c.jsx(e3,{})})]}),c.jsxs(Q3,{$isOpen:e,children:[r.map(a=>c.jsx(X3,{to:a.path,$active:n.pathname===a.path,onClick:i,children:a.label},a.path)),c.jsxs(Z3,{href:"https://wa.me/555591679300",target:"_blank",children:[c.jsx(Ut,{}),"WhatsApp Contato"]})]})]})},ew=x.footer`
  background: var(--primary-color);
  color: var(--white);
  padding: 3rem 0 1rem 0;
`,tw=x.div`
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
`,jl=x.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,nw=x.div`
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
`,Cl=x.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--accent-color);
`,kl=x.div`
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
`,rw=x.a`
  color: var(--white);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-color);
  }
`,ow=x.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,iw=x.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,Mp=x.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,aw=x(Ie)`
  color: var(--white);
  text-decoration: none;
  padding: 0.25rem 0;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-color);
  }
`,sw=x.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,$p=x.a`
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
`,lw=x.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 2rem;
  padding-top: 1rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
`,cw=()=>{const e=new Date().getFullYear(),t=[{path:"/",label:"Início"},{path:"/sobre",label:"Sobre Nós"},{path:"/servicos",label:"Serviços"},{path:"/agendamento",label:"Agendamento"},{path:"/galeria",label:"Galeria"},{path:"/blog",label:"Blog"},{path:"/contato",label:"Contato"}];return c.jsxs(ew,{children:[c.jsxs(tw,{children:[c.jsxs(jl,{children:[c.jsxs(nw,{children:[c.jsx(Ms,{}),"Sorriso Perfeito"]}),c.jsx("p",{children:"Cuidando do seu sorriso com excelência, tecnologia e carinho. Sua saúde bucal é nossa prioridade."}),c.jsxs(sw,{children:[c.jsx($p,{href:"https://www.instagram.com/",target:"_blank",rel:"noopener noreferrer",children:c.jsx(X4,{})}),c.jsx($p,{href:"https://www.facebook.com/",target:"_blank",rel:"noopener noreferrer",children:c.jsx(Q4,{})})]})]}),c.jsxs(jl,{children:[c.jsx(Cl,{children:"Contato"}),c.jsxs(kl,{children:[c.jsx(Sd,{}),c.jsxs("div",{children:["Av. Brigadeiro Faria Lima, 3477",c.jsx("br",{}),"Itaim Bibi, São Paulo - SP",c.jsx("br",{}),"CEP: 04538-133"]})]}),c.jsxs(kl,{children:[c.jsx(Za,{}),c.jsx(rw,{href:"tel:+555591679300",children:"(55) 55 9167-9300"})]})]}),c.jsx(jl,{children:c.jsxs(iw,{children:[c.jsxs(Mp,{children:[c.jsx(Cl,{children:"Horários"}),c.jsxs(kl,{children:[c.jsx(Xa,{}),c.jsxs("div",{children:[c.jsx("strong",{children:"Segunda à Sexta:"}),c.jsx("br",{}),"08:00 - 18:00",c.jsx("br",{}),c.jsx("br",{}),c.jsx("strong",{children:"Sábado:"}),c.jsx("br",{}),"08:00 - 12:00",c.jsx("br",{}),c.jsx("br",{}),c.jsx("strong",{children:"Domingo:"}),c.jsx("br",{}),"Fechado"]})]})]}),c.jsxs(Mp,{children:[c.jsx(Cl,{children:"Links Rápidos"}),c.jsx(ow,{children:t.map(n=>c.jsx(aw,{to:n.path,children:n.label},n.path))})]})]})})]}),c.jsx(lw,{children:c.jsxs("p",{children:["© ",e," Clínica Sorriso Perfeito. Todos os direitos reservados."]})})]})},uw=x.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,dw=x.main`
  flex: 1;
  padding-top: 0;
`,Mn=({children:e})=>c.jsxs(uw,{children:[c.jsx(J3,{}),c.jsx(dw,{children:e}),c.jsx(cw,{})]}),i1=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),$s=b.createContext({}),Ns=b.createContext(null),Ls=typeof document<"u",jd=Ls?b.useLayoutEffect:b.useEffect,a1=b.createContext({strict:!1}),Cd=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),fw="framerAppearId",s1="data-"+Cd(fw);function pw(e,t,n,r){const{visualElement:o}=b.useContext($s),i=b.useContext(a1),a=b.useContext(Ns),s=b.useContext(i1).reducedMotion,l=b.useRef();r=r||i.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:o,props:n,presenceContext:a,blockInitialAnimation:a?a.initial===!1:!1,reducedMotionConfig:s}));const u=l.current;b.useInsertionEffect(()=>{u&&u.update(n,a)});const d=b.useRef(!!(n[s1]&&!window.HandoffComplete));return jd(()=>{u&&(u.render(),d.current&&u.animationState&&u.animationState.animateChanges())}),b.useEffect(()=>{u&&(u.updateFeatures(),!d.current&&u.animationState&&u.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))}),u}function kr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function mw(e,t,n){return b.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):kr(n)&&(n.current=r))},[t])}function li(e){return typeof e=="string"||Array.isArray(e)}function Is(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const kd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Pd=["initial",...kd];function Os(e){return Is(e.animate)||Pd.some(t=>li(e[t]))}function l1(e){return!!(Os(e)||e.variants)}function hw(e,t){if(Os(e)){const{initial:n,animate:r}=e;return{initial:n===!1||li(n)?n:void 0,animate:li(r)?r:void 0}}return e.inherit!==!1?t:{}}function gw(e){const{initial:t,animate:n}=hw(e,b.useContext($s));return b.useMemo(()=>({initial:t,animate:n}),[Np(t),Np(n)])}function Np(e){return Array.isArray(e)?e.join(" "):e}const Lp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ci={};for(const e in Lp)ci[e]={isEnabled:t=>Lp[e].some(n=>!!t[n])};function vw(e){for(const t in e)ci[t]={...ci[t],...e[t]}}const Ed=b.createContext({}),c1=b.createContext({}),yw=Symbol.for("motionComponentSymbol");function xw({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:o}){e&&vw(e);function i(s,l){let u;const d={...b.useContext(i1),...s,layoutId:ww(s)},{isStatic:f}=d,p=gw(s),h=r(s,f);if(!f&&Ls){p.visualElement=pw(o,h,d,t);const y=b.useContext(c1),w=b.useContext(a1).strict;p.visualElement&&(u=p.visualElement.loadFeatures(d,w,e,y))}return b.createElement($s.Provider,{value:p},u&&p.visualElement?b.createElement(u,{visualElement:p.visualElement,...d}):null,n(o,s,mw(h,p.visualElement,l),h,f,p.visualElement))}const a=b.forwardRef(i);return a[yw]=o,a}function ww({layoutId:e}){const t=b.useContext(Ed).id;return t&&e!==void 0?t+"-"+e:e}function bw(e){function t(r,o={}){return xw(e(r,o))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,o)=>(n.has(o)||n.set(o,t(o)),n.get(o))})}const Sw=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Td(e){return typeof e!="string"||e.includes("-")?!1:!!(Sw.indexOf(e)>-1||/[A-Z]/.test(e))}const Ja={};function jw(e){Object.assign(Ja,e)}const wi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],sr=new Set(wi);function u1(e,{layout:t,layoutId:n}){return sr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Ja[e]||e==="opacity")}const Ue=e=>!!(e&&e.getVelocity),Cw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},kw=wi.length;function Pw(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,o){let i="";for(let a=0;a<kw;a++){const s=wi[a];if(e[s]!==void 0){const l=Cw[s]||s;i+=`${l}(${e[s]}) `}}return t&&!e.z&&(i+="translateZ(0)"),i=i.trim(),o?i=o(e,r?"":i):n&&r&&(i="none"),i}const d1=e=>t=>typeof t=="string"&&t.startsWith(e),f1=d1("--"),eu=d1("var(--"),Ew=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,Tw=(e,t)=>t&&typeof e=="number"?t.transform(e):e,En=(e,t,n)=>Math.min(Math.max(n,e),t),lr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Oo={...lr,transform:e=>En(0,1,e)},Hi={...lr,default:1},Vo=e=>Math.round(e*1e5)/1e5,Vs=/(-)?([\d]*\.?[\d])+/g,p1=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,zw=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function bi(e){return typeof e=="string"}const Si=e=>({test:t=>bi(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),nn=Si("deg"),Mt=Si("%"),L=Si("px"),Aw=Si("vh"),Rw=Si("vw"),Ip={...Mt,parse:e=>Mt.parse(e)/100,transform:e=>Mt.transform(e*100)},Op={...lr,transform:Math.round},m1={borderWidth:L,borderTopWidth:L,borderRightWidth:L,borderBottomWidth:L,borderLeftWidth:L,borderRadius:L,radius:L,borderTopLeftRadius:L,borderTopRightRadius:L,borderBottomRightRadius:L,borderBottomLeftRadius:L,width:L,maxWidth:L,height:L,maxHeight:L,size:L,top:L,right:L,bottom:L,left:L,padding:L,paddingTop:L,paddingRight:L,paddingBottom:L,paddingLeft:L,margin:L,marginTop:L,marginRight:L,marginBottom:L,marginLeft:L,rotate:nn,rotateX:nn,rotateY:nn,rotateZ:nn,scale:Hi,scaleX:Hi,scaleY:Hi,scaleZ:Hi,skew:nn,skewX:nn,skewY:nn,distance:L,translateX:L,translateY:L,translateZ:L,x:L,y:L,z:L,perspective:L,transformPerspective:L,opacity:Oo,originX:Ip,originY:Ip,originZ:L,zIndex:Op,fillOpacity:Oo,strokeOpacity:Oo,numOctaves:Op};function zd(e,t,n,r){const{style:o,vars:i,transform:a,transformOrigin:s}=e;let l=!1,u=!1,d=!0;for(const f in t){const p=t[f];if(f1(f)){i[f]=p;continue}const h=m1[f],y=Tw(p,h);if(sr.has(f)){if(l=!0,a[f]=y,!d)continue;p!==(h.default||0)&&(d=!1)}else f.startsWith("origin")?(u=!0,s[f]=y):o[f]=y}if(t.transform||(l||r?o.transform=Pw(e.transform,n,d,r):o.transform&&(o.transform="none")),u){const{originX:f="50%",originY:p="50%",originZ:h=0}=s;o.transformOrigin=`${f} ${p} ${h}`}}const Ad=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function h1(e,t,n){for(const r in t)!Ue(t[r])&&!u1(r,n)&&(e[r]=t[r])}function Dw({transformTemplate:e},t,n){return b.useMemo(()=>{const r=Ad();return zd(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function Mw(e,t,n){const r=e.style||{},o={};return h1(o,r,e),Object.assign(o,Dw(e,t,n)),e.transformValues?e.transformValues(o):o}function $w(e,t,n){const r={},o=Mw(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=o,r}const Nw=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function es(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Nw.has(e)}let g1=e=>!es(e);function Lw(e){e&&(g1=t=>t.startsWith("on")?!es(t):e(t))}try{Lw(require("@emotion/is-prop-valid").default)}catch{}function Iw(e,t,n){const r={};for(const o in e)o==="values"&&typeof e.values=="object"||(g1(o)||n===!0&&es(o)||!t&&!es(o)||e.draggable&&o.startsWith("onDrag"))&&(r[o]=e[o]);return r}function Vp(e,t,n){return typeof e=="string"?e:L.transform(t+n*e)}function Ow(e,t,n){const r=Vp(t,e.x,e.width),o=Vp(n,e.y,e.height);return`${r} ${o}`}const Vw={offset:"stroke-dashoffset",array:"stroke-dasharray"},Fw={offset:"strokeDashoffset",array:"strokeDasharray"};function _w(e,t,n=1,r=0,o=!0){e.pathLength=1;const i=o?Vw:Fw;e[i.offset]=L.transform(-r);const a=L.transform(t),s=L.transform(n);e[i.array]=`${a} ${s}`}function Rd(e,{attrX:t,attrY:n,attrScale:r,originX:o,originY:i,pathLength:a,pathSpacing:s=1,pathOffset:l=0,...u},d,f,p){if(zd(e,u,d,p),f){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:h,style:y,dimensions:w}=e;h.transform&&(w&&(y.transform=h.transform),delete h.transform),w&&(o!==void 0||i!==void 0||y.transform)&&(y.transformOrigin=Ow(w,o!==void 0?o:.5,i!==void 0?i:.5)),t!==void 0&&(h.x=t),n!==void 0&&(h.y=n),r!==void 0&&(h.scale=r),a!==void 0&&_w(h,a,s,l,!1)}const v1=()=>({...Ad(),attrs:{}}),Dd=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Bw(e,t,n,r){const o=b.useMemo(()=>{const i=v1();return Rd(i,t,{enableHardwareAcceleration:!1},Dd(r),e.transformTemplate),{...i.attrs,style:{...i.style}}},[t]);if(e.style){const i={};h1(i,e.style,e),o.style={...i,...o.style}}return o}function Uw(e=!1){return(n,r,o,{latestValues:i},a)=>{const l=(Td(n)?Bw:$w)(r,i,a,n),d={...Iw(r,typeof n=="string",e),...l,ref:o},{children:f}=r,p=b.useMemo(()=>Ue(f)?f.get():f,[f]);return b.createElement(n,{...d,children:p})}}function y1(e,{style:t,vars:n},r,o){Object.assign(e.style,t,o&&o.getProjectionStyles(r));for(const i in n)e.style.setProperty(i,n[i])}const x1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function w1(e,t,n,r){y1(e,t,void 0,r);for(const o in t.attrs)e.setAttribute(x1.has(o)?o:Cd(o),t.attrs[o])}function Md(e,t){const{style:n}=e,r={};for(const o in n)(Ue(n[o])||t.style&&Ue(t.style[o])||u1(o,e))&&(r[o]=n[o]);return r}function b1(e,t){const n=Md(e,t);for(const r in e)if(Ue(e[r])||Ue(t[r])){const o=wi.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[o]=e[r]}return n}function $d(e,t,n,r={},o={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),t}function S1(e){const t=b.useRef(null);return t.current===null&&(t.current=e()),t.current}const ts=e=>Array.isArray(e),Hw=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),Ww=e=>ts(e)?e[e.length-1]||0:e;function xa(e){const t=Ue(e)?e.get():e;return Hw(t)?t.toValue():t}function Gw({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,o,i){const a={latestValues:qw(r,o,i,e),renderState:t()};return n&&(a.mount=s=>n(r,s,a)),a}const j1=e=>(t,n)=>{const r=b.useContext($s),o=b.useContext(Ns),i=()=>Gw(e,t,r,o);return n?i():S1(i)};function qw(e,t,n,r){const o={},i=r(e,{});for(const p in i)o[p]=xa(i[p]);let{initial:a,animate:s}=e;const l=Os(e),u=l1(e);t&&u&&!l&&e.inherit!==!1&&(a===void 0&&(a=t.initial),s===void 0&&(s=t.animate));let d=n?n.initial===!1:!1;d=d||a===!1;const f=d?s:a;return f&&typeof f!="boolean"&&!Is(f)&&(Array.isArray(f)?f:[f]).forEach(h=>{const y=$d(e,h);if(!y)return;const{transitionEnd:w,transition:j,...v}=y;for(const m in v){let g=v[m];if(Array.isArray(g)){const S=d?g.length-1:0;g=g[S]}g!==null&&(o[m]=g)}for(const m in w)o[m]=w[m]}),o}const se=e=>e;class Fp{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function Yw(e){let t=new Fp,n=new Fp,r=0,o=!1,i=!1;const a=new WeakSet,s={schedule:(l,u=!1,d=!1)=>{const f=d&&o,p=f?t:n;return u&&a.add(l),p.add(l)&&f&&o&&(r=t.order.length),l},cancel:l=>{n.remove(l),a.delete(l)},process:l=>{if(o){i=!0;return}if(o=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let u=0;u<r;u++){const d=t.order[u];d(l),a.has(d)&&(s.schedule(d),e())}o=!1,i&&(i=!1,s.process(l))}};return s}const Wi=["prepare","read","update","preRender","render","postRender"],Kw=40;function Qw(e,t){let n=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},i=Wi.reduce((f,p)=>(f[p]=Yw(()=>n=!0),f),{}),a=f=>i[f].process(o),s=()=>{const f=performance.now();n=!1,o.delta=r?1e3/60:Math.max(Math.min(f-o.timestamp,Kw),1),o.timestamp=f,o.isProcessing=!0,Wi.forEach(a),o.isProcessing=!1,n&&t&&(r=!1,e(s))},l=()=>{n=!0,r=!0,o.isProcessing||e(s)};return{schedule:Wi.reduce((f,p)=>{const h=i[p];return f[p]=(y,w=!1,j=!1)=>(n||l(),h.schedule(y,w,j)),f},{}),cancel:f=>Wi.forEach(p=>i[p].cancel(f)),state:o,steps:i}}const{schedule:Y,cancel:Qt,state:Ee,steps:Pl}=Qw(typeof requestAnimationFrame<"u"?requestAnimationFrame:se,!0),Xw={useVisualState:j1({scrapeMotionValuesFromProps:b1,createRenderState:v1,onMount:(e,t,{renderState:n,latestValues:r})=>{Y.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),Y.render(()=>{Rd(n,r,{enableHardwareAcceleration:!1},Dd(t.tagName),e.transformTemplate),w1(t,n)})}})},Zw={useVisualState:j1({scrapeMotionValuesFromProps:Md,createRenderState:Ad})};function Jw(e,{forwardMotionProps:t=!1},n,r){return{...Td(e)?Xw:Zw,preloadedFeatures:n,useRender:Uw(t),createVisualElement:r,Component:e}}function _t(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const C1=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Fs(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const e6=e=>t=>C1(t)&&e(t,Fs(t));function Ht(e,t,n,r){return _t(e,t,e6(n),r)}const t6=(e,t)=>n=>t(e(n)),Cn=(...e)=>e.reduce(t6);function k1(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const _p=k1("dragHorizontal"),Bp=k1("dragVertical");function P1(e){let t=!1;if(e==="y")t=Bp();else if(e==="x")t=_p();else{const n=_p(),r=Bp();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function E1(){const e=P1(!0);return e?(e(),!1):!0}class $n{constructor(t){this.isMounted=!1,this.node=t}update(){}}function Up(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),o=(i,a)=>{if(i.pointerType==="touch"||E1())return;const s=e.getProps();e.animationState&&s.whileHover&&e.animationState.setActive("whileHover",t),s[r]&&Y.update(()=>s[r](i,a))};return Ht(e.current,n,o,{passive:!e.getProps()[r]})}class n6 extends $n{mount(){this.unmount=Cn(Up(this.node,!0),Up(this.node,!1))}unmount(){}}class r6 extends $n{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Cn(_t(this.node.current,"focus",()=>this.onFocus()),_t(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const T1=(e,t)=>t?e===t?!0:T1(e,t.parentElement):!1;function El(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Fs(n))}class o6 extends $n{constructor(){super(...arguments),this.removeStartListeners=se,this.removeEndListeners=se,this.removeAccessibleListeners=se,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),i=Ht(window,"pointerup",(s,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:d,globalTapTarget:f}=this.node.getProps();Y.update(()=>{!f&&!T1(this.node.current,s.target)?d&&d(s,l):u&&u(s,l)})},{passive:!(r.onTap||r.onPointerUp)}),a=Ht(window,"pointercancel",(s,l)=>this.cancelPress(s,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=Cn(i,a),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=i=>{if(i.key!=="Enter"||this.isPressing)return;const a=s=>{s.key!=="Enter"||!this.checkPressEnd()||El("up",(l,u)=>{const{onTap:d}=this.node.getProps();d&&Y.update(()=>d(l,u))})};this.removeEndListeners(),this.removeEndListeners=_t(this.node.current,"keyup",a),El("down",(s,l)=>{this.startPress(s,l)})},n=_t(this.node.current,"keydown",t),r=()=>{this.isPressing&&El("cancel",(i,a)=>this.cancelPress(i,a))},o=_t(this.node.current,"blur",r);this.removeAccessibleListeners=Cn(n,o)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:o}=this.node.getProps();o&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&Y.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!E1()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&Y.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=Ht(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=_t(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Cn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const tu=new WeakMap,Tl=new WeakMap,i6=e=>{const t=tu.get(e.target);t&&t(e)},a6=e=>{e.forEach(i6)};function s6({root:e,...t}){const n=e||document;Tl.has(n)||Tl.set(n,{});const r=Tl.get(n),o=JSON.stringify(t);return r[o]||(r[o]=new IntersectionObserver(a6,{root:e,...t})),r[o]}function l6(e,t,n){const r=s6(t);return tu.set(e,n),r.observe(e),()=>{tu.delete(e),r.unobserve(e)}}const c6={some:0,all:1};class u6 extends $n{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:o="some",once:i}=t,a={root:n?n.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:c6[o]},s=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,i&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=u?d:f;p&&p(l)};return l6(this.node.current,a,s)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(d6(t,n))&&this.startObserver()}unmount(){}}function d6({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const f6={inView:{Feature:u6},tap:{Feature:o6},focus:{Feature:r6},hover:{Feature:n6}};function z1(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function p6(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function m6(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function _s(e,t,n){const r=e.getProps();return $d(r,t,n!==void 0?n:r.custom,p6(e),m6(e))}let Nd=se;const Xn=e=>e*1e3,Wt=e=>e/1e3,h6={current:!1},A1=e=>Array.isArray(e)&&typeof e[0]=="number";function R1(e){return!!(!e||typeof e=="string"&&D1[e]||A1(e)||Array.isArray(e)&&e.every(R1))}const Po=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,D1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Po([0,.65,.55,1]),circOut:Po([.55,0,1,.45]),backIn:Po([.31,.01,.66,-.59]),backOut:Po([.33,1.53,.69,.99])};function M1(e){if(e)return A1(e)?Po(e):Array.isArray(e)?e.map(M1):D1[e]}function g6(e,t,n,{delay:r=0,duration:o,repeat:i=0,repeatType:a="loop",ease:s,times:l}={}){const u={[t]:n};l&&(u.offset=l);const d=M1(s);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:o,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:i+1,direction:a==="reverse"?"alternate":"normal"})}function v6(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const $1=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,y6=1e-7,x6=12;function w6(e,t,n,r,o){let i,a,s=0;do a=t+(n-t)/2,i=$1(a,r,o)-e,i>0?n=a:t=a;while(Math.abs(i)>y6&&++s<x6);return a}function ji(e,t,n,r){if(e===t&&n===r)return se;const o=i=>w6(i,0,1,e,n);return i=>i===0||i===1?i:$1(o(i),t,r)}const b6=ji(.42,0,1,1),S6=ji(0,0,.58,1),N1=ji(.42,0,.58,1),j6=e=>Array.isArray(e)&&typeof e[0]!="number",L1=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,I1=e=>t=>1-e(1-t),Ld=e=>1-Math.sin(Math.acos(e)),O1=I1(Ld),C6=L1(Ld),V1=ji(.33,1.53,.69,.99),Id=I1(V1),k6=L1(Id),P6=e=>(e*=2)<1?.5*Id(e):.5*(2-Math.pow(2,-10*(e-1))),E6={linear:se,easeIn:b6,easeInOut:N1,easeOut:S6,circIn:Ld,circInOut:C6,circOut:O1,backIn:Id,backInOut:k6,backOut:V1,anticipate:P6},Hp=e=>{if(Array.isArray(e)){Nd(e.length===4);const[t,n,r,o]=e;return ji(t,n,r,o)}else if(typeof e=="string")return E6[e];return e},Od=(e,t)=>n=>!!(bi(n)&&zw.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),F1=(e,t,n)=>r=>{if(!bi(r))return r;const[o,i,a,s]=r.match(Vs);return{[e]:parseFloat(o),[t]:parseFloat(i),[n]:parseFloat(a),alpha:s!==void 0?parseFloat(s):1}},T6=e=>En(0,255,e),zl={...lr,transform:e=>Math.round(T6(e))},Gn={test:Od("rgb","red"),parse:F1("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+zl.transform(e)+", "+zl.transform(t)+", "+zl.transform(n)+", "+Vo(Oo.transform(r))+")"};function z6(e){let t="",n="",r="",o="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),o=e.substring(4,5),t+=t,n+=n,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const nu={test:Od("#"),parse:z6,transform:Gn.transform},Pr={test:Od("hsl","hue"),parse:F1("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Mt.transform(Vo(t))+", "+Mt.transform(Vo(n))+", "+Vo(Oo.transform(r))+")"},Re={test:e=>Gn.test(e)||nu.test(e)||Pr.test(e),parse:e=>Gn.test(e)?Gn.parse(e):Pr.test(e)?Pr.parse(e):nu.parse(e),transform:e=>bi(e)?e:e.hasOwnProperty("red")?Gn.transform(e):Pr.transform(e)},te=(e,t,n)=>-n*e+n*t+e;function Al(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function A6({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let o=0,i=0,a=0;if(!t)o=i=a=n;else{const s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;o=Al(l,s,e+1/3),i=Al(l,s,e),a=Al(l,s,e-1/3)}return{red:Math.round(o*255),green:Math.round(i*255),blue:Math.round(a*255),alpha:r}}const Rl=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},R6=[nu,Gn,Pr],D6=e=>R6.find(t=>t.test(e));function Wp(e){const t=D6(e);let n=t.parse(e);return t===Pr&&(n=A6(n)),n}const _1=(e,t)=>{const n=Wp(e),r=Wp(t),o={...n};return i=>(o.red=Rl(n.red,r.red,i),o.green=Rl(n.green,r.green,i),o.blue=Rl(n.blue,r.blue,i),o.alpha=te(n.alpha,r.alpha,i),Gn.transform(o))};function M6(e){var t,n;return isNaN(e)&&bi(e)&&(((t=e.match(Vs))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(p1))===null||n===void 0?void 0:n.length)||0)>0}const B1={regex:Ew,countKey:"Vars",token:"${v}",parse:se},U1={regex:p1,countKey:"Colors",token:"${c}",parse:Re.parse},H1={regex:Vs,countKey:"Numbers",token:"${n}",parse:lr.parse};function Dl(e,{regex:t,countKey:n,token:r,parse:o}){const i=e.tokenised.match(t);i&&(e["num"+n]=i.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...i.map(o)))}function ns(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Dl(n,B1),Dl(n,U1),Dl(n,H1),n}function W1(e){return ns(e).values}function G1(e){const{values:t,numColors:n,numVars:r,tokenised:o}=ns(e),i=t.length;return a=>{let s=o;for(let l=0;l<i;l++)l<r?s=s.replace(B1.token,a[l]):l<r+n?s=s.replace(U1.token,Re.transform(a[l])):s=s.replace(H1.token,Vo(a[l]));return s}}const $6=e=>typeof e=="number"?0:e;function N6(e){const t=W1(e);return G1(e)(t.map($6))}const Tn={test:M6,parse:W1,createTransformer:G1,getAnimatableNone:N6},q1=(e,t)=>n=>`${n>0?t:e}`;function Y1(e,t){return typeof e=="number"?n=>te(e,t,n):Re.test(e)?_1(e,t):e.startsWith("var(")?q1(e,t):Q1(e,t)}const K1=(e,t)=>{const n=[...e],r=n.length,o=e.map((i,a)=>Y1(i,t[a]));return i=>{for(let a=0;a<r;a++)n[a]=o[a](i);return n}},L6=(e,t)=>{const n={...e,...t},r={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(r[o]=Y1(e[o],t[o]));return o=>{for(const i in r)n[i]=r[i](o);return n}},Q1=(e,t)=>{const n=Tn.createTransformer(t),r=ns(e),o=ns(t);return r.numVars===o.numVars&&r.numColors===o.numColors&&r.numNumbers>=o.numNumbers?Cn(K1(r.values,o.values),n):q1(e,t)},ui=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Gp=(e,t)=>n=>te(e,t,n);function I6(e){return typeof e=="number"?Gp:typeof e=="string"?Re.test(e)?_1:Q1:Array.isArray(e)?K1:typeof e=="object"?L6:Gp}function O6(e,t,n){const r=[],o=n||I6(e[0]),i=e.length-1;for(let a=0;a<i;a++){let s=o(e[a],e[a+1]);if(t){const l=Array.isArray(t)?t[a]||se:t;s=Cn(l,s)}r.push(s)}return r}function X1(e,t,{clamp:n=!0,ease:r,mixer:o}={}){const i=e.length;if(Nd(i===t.length),i===1)return()=>t[0];e[0]>e[i-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=O6(t,r,o),s=a.length,l=u=>{let d=0;if(s>1)for(;d<e.length-2&&!(u<e[d+1]);d++);const f=ui(e[d],e[d+1],u);return a[d](f)};return n?u=>l(En(e[0],e[i-1],u)):l}function V6(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const o=ui(0,t,r);e.push(te(n,1,o))}}function F6(e){const t=[0];return V6(t,e.length-1),t}function _6(e,t){return e.map(n=>n*t)}function B6(e,t){return e.map(()=>t||N1).splice(0,e.length-1)}function rs({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const o=j6(r)?r.map(Hp):Hp(r),i={done:!1,value:t[0]},a=_6(n&&n.length===t.length?n:F6(t),e),s=X1(a,t,{ease:Array.isArray(o)?o:B6(t,o)});return{calculatedDuration:e,next:l=>(i.value=s(l),i.done=l>=e,i)}}function Z1(e,t){return t?e*(1e3/t):0}const U6=5;function J1(e,t,n){const r=Math.max(t-U6,0);return Z1(n-e(r),t-r)}const Ml=.001,H6=.01,W6=10,G6=.05,q6=1;function Y6({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let o,i,a=1-t;a=En(G6,q6,a),e=En(H6,W6,Wt(e)),a<1?(o=u=>{const d=u*a,f=d*e,p=d-n,h=ru(u,a),y=Math.exp(-f);return Ml-p/h*y},i=u=>{const f=u*a*e,p=f*n+n,h=Math.pow(a,2)*Math.pow(u,2)*e,y=Math.exp(-f),w=ru(Math.pow(u,2),a);return(-o(u)+Ml>0?-1:1)*((p-h)*y)/w}):(o=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-Ml+d*f},i=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const s=5/e,l=Q6(o,i,s);if(e=Xn(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:a*2*Math.sqrt(r*u),duration:e}}}const K6=12;function Q6(e,t,n){let r=n;for(let o=1;o<K6;o++)r=r-e(r)/t(r);return r}function ru(e,t){return e*Math.sqrt(1-t*t)}const X6=["duration","bounce"],Z6=["stiffness","damping","mass"];function qp(e,t){return t.some(n=>e[n]!==void 0)}function J6(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!qp(e,Z6)&&qp(e,X6)){const n=Y6(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function ev({keyframes:e,restDelta:t,restSpeed:n,...r}){const o=e[0],i=e[e.length-1],a={done:!1,value:o},{stiffness:s,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=J6({...r,velocity:-Wt(r.velocity||0)}),h=f||0,y=l/(2*Math.sqrt(s*u)),w=i-o,j=Wt(Math.sqrt(s/u)),v=Math.abs(w)<5;n||(n=v?.01:2),t||(t=v?.005:.5);let m;if(y<1){const g=ru(j,y);m=S=>{const P=Math.exp(-y*j*S);return i-P*((h+y*j*w)/g*Math.sin(g*S)+w*Math.cos(g*S))}}else if(y===1)m=g=>i-Math.exp(-j*g)*(w+(h+j*w)*g);else{const g=j*Math.sqrt(y*y-1);m=S=>{const P=Math.exp(-y*j*S),k=Math.min(g*S,300);return i-P*((h+y*j*w)*Math.sinh(k)+g*w*Math.cosh(k))/g}}return{calculatedDuration:p&&d||null,next:g=>{const S=m(g);if(p)a.done=g>=d;else{let P=h;g!==0&&(y<1?P=J1(m,g,S):P=0);const k=Math.abs(P)<=n,C=Math.abs(i-S)<=t;a.done=k&&C}return a.value=a.done?i:S,a}}}function Yp({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:i=500,modifyTarget:a,min:s,max:l,restDelta:u=.5,restSpeed:d}){const f=e[0],p={done:!1,value:f},h=E=>s!==void 0&&E<s||l!==void 0&&E>l,y=E=>s===void 0?l:l===void 0||Math.abs(s-E)<Math.abs(l-E)?s:l;let w=n*t;const j=f+w,v=a===void 0?j:a(j);v!==j&&(w=v-f);const m=E=>-w*Math.exp(-E/r),g=E=>v+m(E),S=E=>{const D=m(E),M=g(E);p.done=Math.abs(D)<=u,p.value=p.done?v:M};let P,k;const C=E=>{h(p.value)&&(P=E,k=ev({keyframes:[p.value,y(p.value)],velocity:J1(g,E,p.value),damping:o,stiffness:i,restDelta:u,restSpeed:d}))};return C(0),{calculatedDuration:null,next:E=>{let D=!1;return!k&&P===void 0&&(D=!0,S(E),C(E)),P!==void 0&&E>P?k.next(E-P):(!D&&S(E),p)}}}const eb=e=>{const t=({timestamp:n})=>e(n);return{start:()=>Y.update(t,!0),stop:()=>Qt(t),now:()=>Ee.isProcessing?Ee.timestamp:performance.now()}},Kp=2e4;function Qp(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Kp;)t+=n,r=e.next(t);return t>=Kp?1/0:t}const tb={decay:Yp,inertia:Yp,tween:rs,keyframes:rs,spring:ev};function os({autoplay:e=!0,delay:t=0,driver:n=eb,keyframes:r,type:o="keyframes",repeat:i=0,repeatDelay:a=0,repeatType:s="loop",onPlay:l,onStop:u,onComplete:d,onUpdate:f,...p}){let h=1,y=!1,w,j;const v=()=>{j=new Promise(N=>{w=N})};v();let m;const g=tb[o]||rs;let S;g!==rs&&typeof r[0]!="number"&&(S=X1([0,100],r,{clamp:!1}),r=[0,100]);const P=g({...p,keyframes:r});let k;s==="mirror"&&(k=g({...p,keyframes:[...r].reverse(),velocity:-(p.velocity||0)}));let C="idle",E=null,D=null,M=null;P.calculatedDuration===null&&i&&(P.calculatedDuration=Qp(P));const{calculatedDuration:oe}=P;let pe=1/0,we=1/0;oe!==null&&(pe=oe+a,we=pe*(i+1)-a);let ce=0;const jt=N=>{if(D===null)return;h>0&&(D=Math.min(D,N)),h<0&&(D=Math.min(N-we/h,D)),E!==null?ce=E:ce=Math.round(N-D)*h;const _=ce-t*(h>=0?1:-1),Ct=h>=0?_<0:_>we;ce=Math.max(_,0),C==="finished"&&E===null&&(ce=we);let Le=ce,ut=P;if(i){const dt=Math.min(ce,we)/pe;let Jt=Math.floor(dt),Je=dt%1;!Je&&dt>=1&&(Je=1),Je===1&&Jt--,Jt=Math.min(Jt,i+1),!!(Jt%2)&&(s==="reverse"?(Je=1-Je,a&&(Je-=a/pe)):s==="mirror"&&(ut=k)),Le=En(0,1,Je)*pe}const me=Ct?{done:!1,value:r[0]}:ut.next(Le);S&&(me.value=S(me.value));let{done:Ze}=me;!Ct&&oe!==null&&(Ze=h>=0?ce>=we:ce<=0);const Nn=E===null&&(C==="finished"||C==="running"&&Ze);return f&&f(me.value),Nn&&z(),me},J=()=>{m&&m.stop(),m=void 0},Ce=()=>{C="idle",J(),w(),v(),D=M=null},z=()=>{C="finished",d&&d(),J(),w()},$=()=>{if(y)return;m||(m=n(jt));const N=m.now();l&&l(),E!==null?D=N-E:(!D||C==="finished")&&(D=N),C==="finished"&&v(),M=D,E=null,C="running",m.start()};e&&$();const I={then(N,_){return j.then(N,_)},get time(){return Wt(ce)},set time(N){N=Xn(N),ce=N,E!==null||!m||h===0?E=N:D=m.now()-N/h},get duration(){const N=P.calculatedDuration===null?Qp(P):P.calculatedDuration;return Wt(N)},get speed(){return h},set speed(N){N===h||!m||(h=N,I.time=Wt(ce))},get state(){return C},play:$,pause:()=>{C="paused",E=ce},stop:()=>{y=!0,C!=="idle"&&(C="idle",u&&u(),Ce())},cancel:()=>{M!==null&&jt(M),Ce()},complete:()=>{C="finished"},sample:N=>(D=0,jt(N))};return I}function nb(e){let t;return()=>(t===void 0&&(t=e()),t)}const rb=nb(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),ob=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Gi=10,ib=2e4,ab=(e,t)=>t.type==="spring"||e==="backgroundColor"||!R1(t.ease);function sb(e,t,{onUpdate:n,onComplete:r,...o}){if(!(rb()&&ob.has(t)&&!o.repeatDelay&&o.repeatType!=="mirror"&&o.damping!==0&&o.type!=="inertia"))return!1;let a=!1,s,l,u=!1;const d=()=>{l=new Promise(g=>{s=g})};d();let{keyframes:f,duration:p=300,ease:h,times:y}=o;if(ab(t,o)){const g=os({...o,repeat:0,delay:0});let S={done:!1,value:f[0]};const P=[];let k=0;for(;!S.done&&k<ib;)S=g.sample(k),P.push(S.value),k+=Gi;y=void 0,f=P,p=k-Gi,h="linear"}const w=g6(e.owner.current,t,f,{...o,duration:p,ease:h,times:y}),j=()=>{u=!1,w.cancel()},v=()=>{u=!0,Y.update(j),s(),d()};return w.onfinish=()=>{u||(e.set(v6(f,o)),r&&r(),v())},{then(g,S){return l.then(g,S)},attachTimeline(g){return w.timeline=g,w.onfinish=null,se},get time(){return Wt(w.currentTime||0)},set time(g){w.currentTime=Xn(g)},get speed(){return w.playbackRate},set speed(g){w.playbackRate=g},get duration(){return Wt(p)},play:()=>{a||(w.play(),Qt(j))},pause:()=>w.pause(),stop:()=>{if(a=!0,w.playState==="idle")return;const{currentTime:g}=w;if(g){const S=os({...o,autoplay:!1});e.setWithVelocity(S.sample(g-Gi).value,S.sample(g).value,Gi)}v()},complete:()=>{u||w.finish()},cancel:v}}function lb({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const o=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:se,pause:se,stop:se,then:i=>(i(),Promise.resolve()),cancel:se,complete:se});return t?os({keyframes:[0,1],duration:0,delay:t,onComplete:o}):o()}const cb={type:"spring",stiffness:500,damping:25,restSpeed:10},ub=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),db={type:"keyframes",duration:.8},fb={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},pb=(e,{keyframes:t})=>t.length>2?db:sr.has(e)?e.startsWith("scale")?ub(t[1]):cb:fb,ou=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Tn.test(t)||t==="0")&&!t.startsWith("url(")),mb=new Set(["brightness","contrast","saturate","opacity"]);function hb(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Vs)||[];if(!r)return e;const o=n.replace(r,"");let i=mb.has(t)?1:0;return r!==n&&(i*=100),t+"("+i+o+")"}const gb=/([a-z-]*)\(.*?\)/g,iu={...Tn,getAnimatableNone:e=>{const t=e.match(gb);return t?t.map(hb).join(" "):e}},vb={...m1,color:Re,backgroundColor:Re,outlineColor:Re,fill:Re,stroke:Re,borderColor:Re,borderTopColor:Re,borderRightColor:Re,borderBottomColor:Re,borderLeftColor:Re,filter:iu,WebkitFilter:iu},Vd=e=>vb[e];function tv(e,t){let n=Vd(e);return n!==iu&&(n=Tn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const nv=e=>/^0[^.\s]+$/.test(e);function yb(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||nv(e)}function xb(e,t,n,r){const o=ou(t,n);let i;Array.isArray(n)?i=[...n]:i=[null,n];const a=r.from!==void 0?r.from:e.get();let s;const l=[];for(let u=0;u<i.length;u++)i[u]===null&&(i[u]=u===0?a:i[u-1]),yb(i[u])&&l.push(u),typeof i[u]=="string"&&i[u]!=="none"&&i[u]!=="0"&&(s=i[u]);if(o&&l.length&&s)for(let u=0;u<l.length;u++){const d=l[u];i[d]=tv(t,s)}return i}function wb({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:o,repeat:i,repeatType:a,repeatDelay:s,from:l,elapsed:u,...d}){return!!Object.keys(d).length}function Fd(e,t){return e[t]||e.default||e}const bb={skipAnimations:!1},_d=(e,t,n,r={})=>o=>{const i=Fd(r,e)||{},a=i.delay||r.delay||0;let{elapsed:s=0}=r;s=s-Xn(a);const l=xb(t,e,n,i),u=l[0],d=l[l.length-1],f=ou(e,u),p=ou(e,d);let h={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...i,delay:-s,onUpdate:y=>{t.set(y),i.onUpdate&&i.onUpdate(y)},onComplete:()=>{o(),i.onComplete&&i.onComplete()}};if(wb(i)||(h={...h,...pb(e,h)}),h.duration&&(h.duration=Xn(h.duration)),h.repeatDelay&&(h.repeatDelay=Xn(h.repeatDelay)),!f||!p||h6.current||i.type===!1||bb.skipAnimations)return lb(h);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const y=sb(t,e,h);if(y)return y}return os(h)};function is(e){return!!(Ue(e)&&e.add)}const rv=e=>/^\-?\d*\.?\d+$/.test(e);function Bd(e,t){e.indexOf(t)===-1&&e.push(t)}function Ud(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Hd{constructor(){this.subscriptions=[]}add(t){return Bd(this.subscriptions,t),()=>Ud(this.subscriptions,t)}notify(t,n,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,r);else for(let i=0;i<o;i++){const a=this.subscriptions[i];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Sb=e=>!isNaN(parseFloat(e));class jb{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,o=!0)=>{this.prev=this.current,this.current=r;const{delta:i,timestamp:a}=Ee;this.lastUpdated!==a&&(this.timeDelta=i,this.lastUpdated=a,Y.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>Y.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=Sb(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Hd);const r=this.events[t].add(n);return t==="change"?()=>{r(),Y.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Z1(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Qr(e,t){return new jb(e,t)}const ov=e=>t=>t.test(e),Cb={test:e=>e==="auto",parse:e=>e},iv=[lr,L,Mt,nn,Rw,Aw,Cb],ho=e=>iv.find(ov(e)),kb=[...iv,Re,Tn],Pb=e=>kb.find(ov(e));function Eb(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Qr(n))}function Tb(e,t){const n=_s(e,t);let{transitionEnd:r={},transition:o={},...i}=n?e.makeTargetAnimatable(n,!1):{};i={...i,...r};for(const a in i){const s=Ww(i[a]);Eb(e,a,s)}}function zb(e,t,n){var r,o;const i=Object.keys(t).filter(s=>!e.hasValue(s)),a=i.length;if(a)for(let s=0;s<a;s++){const l=i[s],u=t[l];let d=null;Array.isArray(u)&&(d=u[0]),d===null&&(d=(o=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&o!==void 0?o:t[l]),d!=null&&(typeof d=="string"&&(rv(d)||nv(d))?d=parseFloat(d):!Pb(d)&&Tn.test(u)&&(d=tv(l,u)),e.addValue(l,Qr(d,{owner:e})),n[l]===void 0&&(n[l]=d),d!==null&&e.setBaseTarget(l,d))}}function Ab(e,t){return t?(t[e]||t.default||t).from:void 0}function Rb(e,t,n){const r={};for(const o in e){const i=Ab(o,t);if(i!==void 0)r[o]=i;else{const a=n.getValue(o);a&&(r[o]=a.get())}}return r}function Db({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Mb(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function av(e,t,{delay:n=0,transitionOverride:r,type:o}={}){let{transition:i=e.getDefaultTransition(),transitionEnd:a,...s}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(i=r);const u=[],d=o&&e.animationState&&e.animationState.getState()[o];for(const f in s){const p=e.getValue(f),h=s[f];if(!p||h===void 0||d&&Db(d,f))continue;const y={delay:n,elapsed:0,...Fd(i||{},f)};if(window.HandoffAppearAnimations){const v=e.getProps()[s1];if(v){const m=window.HandoffAppearAnimations(v,f,p,Y);m!==null&&(y.elapsed=m,y.isHandoff=!0)}}let w=!y.isHandoff&&!Mb(p,h);if(y.type==="spring"&&(p.getVelocity()||y.velocity)&&(w=!1),p.animation&&(w=!1),w)continue;p.start(_d(f,p,h,e.shouldReduceMotion&&sr.has(f)?{type:!1}:y));const j=p.animation;is(l)&&(l.add(f),j.then(()=>l.remove(f))),u.push(j)}return a&&Promise.all(u).then(()=>{a&&Tb(e,a)}),u}function au(e,t,n={}){const r=_s(e,t,n.custom);let{transition:o=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(o=n.transitionOverride);const i=r?()=>Promise.all(av(e,r,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:f}=o;return $b(e,t,u+l,d,f,n)}:()=>Promise.resolve(),{when:s}=o;if(s){const[l,u]=s==="beforeChildren"?[i,a]:[a,i];return l().then(()=>u())}else return Promise.all([i(),a(n.delay)])}function $b(e,t,n=0,r=0,o=1,i){const a=[],s=(e.variantChildren.size-1)*r,l=o===1?(u=0)=>u*r:(u=0)=>s-u*r;return Array.from(e.variantChildren).sort(Nb).forEach((u,d)=>{u.notify("AnimationStart",t),a.push(au(u,t,{...i,delay:n+l(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(a)}function Nb(e,t){return e.sortNodePosition(t)}function Lb(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const o=t.map(i=>au(e,i,n));r=Promise.all(o)}else if(typeof t=="string")r=au(e,t,n);else{const o=typeof t=="function"?_s(e,t,n.custom):t;r=Promise.all(av(e,o,n))}return r.then(()=>e.notify("AnimationComplete",t))}const Ib=[...kd].reverse(),Ob=kd.length;function Vb(e){return t=>Promise.all(t.map(({animation:n,options:r})=>Lb(e,n,r)))}function Fb(e){let t=Vb(e);const n=Bb();let r=!0;const o=(l,u)=>{const d=_s(e,u);if(d){const{transition:f,transitionEnd:p,...h}=d;l={...l,...h,...p}}return l};function i(l){t=l(e)}function a(l,u){const d=e.getProps(),f=e.getVariantContext(!0)||{},p=[],h=new Set;let y={},w=1/0;for(let v=0;v<Ob;v++){const m=Ib[v],g=n[m],S=d[m]!==void 0?d[m]:f[m],P=li(S),k=m===u?g.isActive:null;k===!1&&(w=v);let C=S===f[m]&&S!==d[m]&&P;if(C&&r&&e.manuallyAnimateOnMount&&(C=!1),g.protectedKeys={...y},!g.isActive&&k===null||!S&&!g.prevProp||Is(S)||typeof S=="boolean")continue;let D=_b(g.prevProp,S)||m===u&&g.isActive&&!C&&P||v>w&&P,M=!1;const oe=Array.isArray(S)?S:[S];let pe=oe.reduce(o,{});k===!1&&(pe={});const{prevResolvedValues:we={}}=g,ce={...we,...pe},jt=J=>{D=!0,h.has(J)&&(M=!0,h.delete(J)),g.needsAnimating[J]=!0};for(const J in ce){const Ce=pe[J],z=we[J];if(y.hasOwnProperty(J))continue;let $=!1;ts(Ce)&&ts(z)?$=!z1(Ce,z):$=Ce!==z,$?Ce!==void 0?jt(J):h.add(J):Ce!==void 0&&h.has(J)?jt(J):g.protectedKeys[J]=!0}g.prevProp=S,g.prevResolvedValues=pe,g.isActive&&(y={...y,...pe}),r&&e.blockInitialAnimation&&(D=!1),D&&(!C||M)&&p.push(...oe.map(J=>({animation:J,options:{type:m,...l}})))}if(h.size){const v={};h.forEach(m=>{const g=e.getBaseTarget(m);g!==void 0&&(v[m]=g)}),p.push({animation:v})}let j=!!p.length;return r&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(j=!1),r=!1,j?t(p):Promise.resolve()}function s(l,u,d){var f;if(n[l].isActive===u)return Promise.resolve();(f=e.variantChildren)===null||f===void 0||f.forEach(h=>{var y;return(y=h.animationState)===null||y===void 0?void 0:y.setActive(l,u)}),n[l].isActive=u;const p=a(d,l);for(const h in n)n[h].protectedKeys={};return p}return{animateChanges:a,setActive:s,setAnimateFunction:i,getState:()=>n}}function _b(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!z1(t,e):!1}function Ln(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Bb(){return{animate:Ln(!0),whileInView:Ln(),whileHover:Ln(),whileTap:Ln(),whileDrag:Ln(),whileFocus:Ln(),exit:Ln()}}class Ub extends $n{constructor(t){super(t),t.animationState||(t.animationState=Fb(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),Is(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let Hb=0;class Wb extends $n{constructor(){super(...arguments),this.id=Hb++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===o)return;const i=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const Gb={animation:{Feature:Ub},exit:{Feature:Wb}},Xp=(e,t)=>Math.abs(e-t);function qb(e,t){const n=Xp(e.x,t.x),r=Xp(e.y,t.y);return Math.sqrt(n**2+r**2)}class sv{constructor(t,n,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:i=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Nl(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,h=qb(f.offset,{x:0,y:0})>=3;if(!p&&!h)return;const{point:y}=f,{timestamp:w}=Ee;this.history.push({...y,timestamp:w});const{onStart:j,onMove:v}=this.handlers;p||(j&&j(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=$l(p,this.transformPagePoint),Y.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:h,onSessionEnd:y,resumeAnimation:w}=this.handlers;if(this.dragSnapToOrigin&&w&&w(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const j=Nl(f.type==="pointercancel"?this.lastMoveEventInfo:$l(p,this.transformPagePoint),this.history);this.startEvent&&h&&h(f,j),y&&y(f,j)},!C1(t))return;this.dragSnapToOrigin=i,this.handlers=n,this.transformPagePoint=r,this.contextWindow=o||window;const a=Fs(t),s=$l(a,this.transformPagePoint),{point:l}=s,{timestamp:u}=Ee;this.history=[{...l,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,Nl(s,this.history)),this.removeListeners=Cn(Ht(this.contextWindow,"pointermove",this.handlePointerMove),Ht(this.contextWindow,"pointerup",this.handlePointerUp),Ht(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Qt(this.updatePoint)}}function $l(e,t){return t?{point:t(e.point)}:e}function Zp(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Nl({point:e},t){return{point:e,delta:Zp(e,lv(t)),offset:Zp(e,Yb(t)),velocity:Kb(t,.1)}}function Yb(e){return e[0]}function lv(e){return e[e.length-1]}function Kb(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const o=lv(e);for(;n>=0&&(r=e[n],!(o.timestamp-r.timestamp>Xn(t)));)n--;if(!r)return{x:0,y:0};const i=Wt(o.timestamp-r.timestamp);if(i===0)return{x:0,y:0};const a={x:(o.x-r.x)/i,y:(o.y-r.y)/i};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function Ke(e){return e.max-e.min}function su(e,t=0,n=.01){return Math.abs(e-t)<=n}function Jp(e,t,n,r=.5){e.origin=r,e.originPoint=te(t.min,t.max,e.origin),e.scale=Ke(n)/Ke(t),(su(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=te(n.min,n.max,e.origin)-e.originPoint,(su(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Fo(e,t,n,r){Jp(e.x,t.x,n.x,r?r.originX:void 0),Jp(e.y,t.y,n.y,r?r.originY:void 0)}function em(e,t,n){e.min=n.min+t.min,e.max=e.min+Ke(t)}function Qb(e,t,n){em(e.x,t.x,n.x),em(e.y,t.y,n.y)}function tm(e,t,n){e.min=t.min-n.min,e.max=e.min+Ke(t)}function _o(e,t,n){tm(e.x,t.x,n.x),tm(e.y,t.y,n.y)}function Xb(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?te(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?te(n,e,r.max):Math.min(e,n)),e}function nm(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function Zb(e,{top:t,left:n,bottom:r,right:o}){return{x:nm(e.x,n,o),y:nm(e.y,t,r)}}function rm(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function Jb(e,t){return{x:rm(e.x,t.x),y:rm(e.y,t.y)}}function e8(e,t){let n=.5;const r=Ke(e),o=Ke(t);return o>r?n=ui(t.min,t.max-r,e.min):r>o&&(n=ui(e.min,e.max-o,t.min)),En(0,1,n)}function t8(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const lu=.35;function n8(e=lu){return e===!1?e=0:e===!0&&(e=lu),{x:om(e,"left","right"),y:om(e,"top","bottom")}}function om(e,t,n){return{min:im(e,t),max:im(e,n)}}function im(e,t){return typeof e=="number"?e:e[t]||0}const am=()=>({translate:0,scale:1,origin:0,originPoint:0}),Er=()=>({x:am(),y:am()}),sm=()=>({min:0,max:0}),ue=()=>({x:sm(),y:sm()});function tt(e){return[e("x"),e("y")]}function cv({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function r8({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function o8(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Ll(e){return e===void 0||e===1}function cu({scale:e,scaleX:t,scaleY:n}){return!Ll(e)||!Ll(t)||!Ll(n)}function Vn(e){return cu(e)||uv(e)||e.z||e.rotate||e.rotateX||e.rotateY}function uv(e){return lm(e.x)||lm(e.y)}function lm(e){return e&&e!=="0%"}function as(e,t,n){const r=e-n,o=t*r;return n+o}function cm(e,t,n,r,o){return o!==void 0&&(e=as(e,o,r)),as(e,n,r)+t}function uu(e,t=0,n=1,r,o){e.min=cm(e.min,t,n,r,o),e.max=cm(e.max,t,n,r,o)}function dv(e,{x:t,y:n}){uu(e.x,t.translate,t.scale,t.originPoint),uu(e.y,n.translate,n.scale,n.originPoint)}function i8(e,t,n,r=!1){const o=n.length;if(!o)return;t.x=t.y=1;let i,a;for(let s=0;s<o;s++){i=n[s],a=i.projectionDelta;const l=i.instance;l&&l.style&&l.style.display==="contents"||(r&&i.options.layoutScroll&&i.scroll&&i!==i.root&&Tr(e,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,dv(e,a)),r&&Vn(i.latestValues)&&Tr(e,i.latestValues))}t.x=um(t.x),t.y=um(t.y)}function um(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function an(e,t){e.min=e.min+t,e.max=e.max+t}function dm(e,t,[n,r,o]){const i=t[o]!==void 0?t[o]:.5,a=te(e.min,e.max,i);uu(e,t[n],t[r],a,t.scale)}const a8=["x","scaleX","originX"],s8=["y","scaleY","originY"];function Tr(e,t){dm(e.x,t,a8),dm(e.y,t,s8)}function fv(e,t){return cv(o8(e.getBoundingClientRect(),t))}function l8(e,t,n){const r=fv(e,n),{scroll:o}=t;return o&&(an(r.x,o.offset.x),an(r.y,o.offset.y)),r}const pv=({current:e})=>e?e.ownerDocument.defaultView:null,c8=new WeakMap;class u8{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ue(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Fs(d,"page").point)},i=(d,f)=>{const{drag:p,dragPropagation:h,onDragStart:y}=this.getProps();if(p&&!h&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=P1(p),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),tt(j=>{let v=this.getAxisMotionValue(j).get()||0;if(Mt.test(v)){const{projection:m}=this.visualElement;if(m&&m.layout){const g=m.layout.layoutBox[j];g&&(v=Ke(g)*(parseFloat(v)/100))}}this.originPoint[j]=v}),y&&Y.update(()=>y(d,f),!1,!0);const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},a=(d,f)=>{const{dragPropagation:p,dragDirectionLock:h,onDirectionLock:y,onDrag:w}=this.getProps();if(!p&&!this.openGlobalLock)return;const{offset:j}=f;if(h&&this.currentDirection===null){this.currentDirection=d8(j),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",f.point,j),this.updateAxis("y",f.point,j),this.visualElement.render(),w&&w(d,f)},s=(d,f)=>this.stop(d,f),l=()=>tt(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new sv(t,{onSessionStart:o,onStart:i,onMove:a,onSessionEnd:s,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:pv(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=n;this.startAnimation(o);const{onDragEnd:i}=this.getProps();i&&Y.update(()=>i(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:o}=this.getProps();if(!r||!qi(t,o,this.currentDirection))return;const i=this.getAxisMotionValue(t);let a=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(a=Xb(a,this.constraints[t],this.elastic[t])),i.set(a)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,i=this.constraints;n&&kr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&o?this.constraints=Zb(o.layoutBox,n):this.constraints=!1,this.elastic=n8(r),i!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&tt(a=>{this.getAxisMotionValue(a)&&(this.constraints[a]=t8(o.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!kr(t))return!1;const r=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const i=l8(r,o.root,this.visualElement.getTransformPagePoint());let a=Jb(o.layout.layoutBox,i);if(n){const s=n(r8(a));this.hasMutatedConstraints=!!s,s&&(a=cv(s))}return a}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:o,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:s}=this.getProps(),l=this.constraints||{},u=tt(d=>{if(!qi(d,n,this.currentDirection))return;let f=l&&l[d]||{};a&&(f={min:0,max:0});const p=o?200:1e6,h=o?40:1e7,y={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:h,timeConstant:750,restDelta:1,restSpeed:10,...i,...f};return this.startAxisValueAnimation(d,y)});return Promise.all(u).then(s)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(_d(t,r,0,n))}stopAnimation(){tt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){tt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),o=r[n];return o||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){tt(n=>{const{drag:r}=this.getProps();if(!qi(n,r,this.currentDirection))return;const{projection:o}=this.visualElement,i=this.getAxisMotionValue(n);if(o&&o.layout){const{min:a,max:s}=o.layout.layoutBox[n];i.set(t[n]-te(a,s,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!kr(n)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};tt(a=>{const s=this.getAxisMotionValue(a);if(s){const l=s.get();o[a]=e8({min:l,max:l},this.constraints[a])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),tt(a=>{if(!qi(a,t,null))return;const s=this.getAxisMotionValue(a),{min:l,max:u}=this.constraints[a];s.set(te(l,u,o[a]))})}addListeners(){if(!this.visualElement.current)return;c8.set(this.visualElement,this);const t=this.visualElement.current,n=Ht(t,"pointerdown",l=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();kr(l)&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,i=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),r();const a=_t(window,"resize",()=>this.scalePositionWithinConstraints()),s=o.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(tt(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=l[d].translate,f.set(f.get()+l[d].translate))}),this.visualElement.render())});return()=>{a(),n(),i(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:i=!1,dragElastic:a=lu,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:o,dragConstraints:i,dragElastic:a,dragMomentum:s}}}function qi(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function d8(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class f8 extends $n{constructor(t){super(t),this.removeGroupControls=se,this.removeListeners=se,this.controls=new u8(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||se}unmount(){this.removeGroupControls(),this.removeListeners()}}const fm=e=>(t,n)=>{e&&Y.update(()=>e(t,n))};class p8 extends $n{constructor(){super(...arguments),this.removePointerDownListener=se}onPointerDown(t){this.session=new sv(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:pv(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:fm(t),onStart:fm(n),onMove:r,onEnd:(i,a)=>{delete this.session,o&&Y.update(()=>o(i,a))}}}mount(){this.removePointerDownListener=Ht(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function m8(){const e=b.useContext(Ns);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,o=b.useId();return b.useEffect(()=>r(o),[]),!t&&n?[!1,()=>n&&n(o)]:[!0]}const wa={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function pm(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const go={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(L.test(e))e=parseFloat(e);else return e;const n=pm(e,t.target.x),r=pm(e,t.target.y);return`${n}% ${r}%`}},h8={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,o=Tn.parse(e);if(o.length>5)return r;const i=Tn.createTransformer(e),a=typeof o[0]!="number"?1:0,s=n.x.scale*t.x,l=n.y.scale*t.y;o[0+a]/=s,o[1+a]/=l;const u=te(s,l,.5);return typeof o[2+a]=="number"&&(o[2+a]/=u),typeof o[3+a]=="number"&&(o[3+a]/=u),i(o)}};class g8 extends G.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:o}=this.props,{projection:i}=t;jw(v8),i&&(n.group&&n.group.add(i),r&&r.register&&o&&r.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),wa.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:o,isPresent:i}=this.props,a=r.projection;return a&&(a.isPresent=i,o||t.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),t.isPresent!==i&&(i?a.promote():a.relegate()||Y.postRender(()=>{const s=a.getStack();(!s||!s.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:o}=t;o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function mv(e){const[t,n]=m8(),r=b.useContext(Ed);return G.createElement(g8,{...e,layoutGroup:r,switchLayoutGroup:b.useContext(c1),isPresent:t,safeToRemove:n})}const v8={borderRadius:{...go,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:go,borderTopRightRadius:go,borderBottomLeftRadius:go,borderBottomRightRadius:go,boxShadow:h8},hv=["TopLeft","TopRight","BottomLeft","BottomRight"],y8=hv.length,mm=e=>typeof e=="string"?parseFloat(e):e,hm=e=>typeof e=="number"||L.test(e);function x8(e,t,n,r,o,i){o?(e.opacity=te(0,n.opacity!==void 0?n.opacity:1,w8(r)),e.opacityExit=te(t.opacity!==void 0?t.opacity:1,0,b8(r))):i&&(e.opacity=te(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let a=0;a<y8;a++){const s=`border${hv[a]}Radius`;let l=gm(t,s),u=gm(n,s);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||hm(l)===hm(u)?(e[s]=Math.max(te(mm(l),mm(u),r),0),(Mt.test(u)||Mt.test(l))&&(e[s]+="%")):e[s]=u}(t.rotate||n.rotate)&&(e.rotate=te(t.rotate||0,n.rotate||0,r))}function gm(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const w8=gv(0,.5,O1),b8=gv(.5,.95,se);function gv(e,t,n){return r=>r<e?0:r>t?1:n(ui(e,t,r))}function vm(e,t){e.min=t.min,e.max=t.max}function et(e,t){vm(e.x,t.x),vm(e.y,t.y)}function ym(e,t,n,r,o){return e-=t,e=as(e,1/n,r),o!==void 0&&(e=as(e,1/o,r)),e}function S8(e,t=0,n=1,r=.5,o,i=e,a=e){if(Mt.test(t)&&(t=parseFloat(t),t=te(a.min,a.max,t/100)-a.min),typeof t!="number")return;let s=te(i.min,i.max,r);e===i&&(s-=t),e.min=ym(e.min,t,n,s,o),e.max=ym(e.max,t,n,s,o)}function xm(e,t,[n,r,o],i,a){S8(e,t[n],t[r],t[o],t.scale,i,a)}const j8=["x","scaleX","originX"],C8=["y","scaleY","originY"];function wm(e,t,n,r){xm(e.x,t,j8,n?n.x:void 0,r?r.x:void 0),xm(e.y,t,C8,n?n.y:void 0,r?r.y:void 0)}function bm(e){return e.translate===0&&e.scale===1}function vv(e){return bm(e.x)&&bm(e.y)}function k8(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function yv(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Sm(e){return Ke(e.x)/Ke(e.y)}class P8{constructor(){this.members=[]}add(t){Bd(this.members,t),t.scheduleRender()}remove(t){if(Ud(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let r;for(let o=n;o>=0;o--){const i=this.members[o];if(i.isPresent!==!1){r=i;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function jm(e,t,n){let r="";const o=e.x.translate/t.x,i=e.y.translate/t.y;if((o||i)&&(r=`translate3d(${o}px, ${i}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:u,rotateY:d}=n;l&&(r+=`rotate(${l}deg) `),u&&(r+=`rotateX(${u}deg) `),d&&(r+=`rotateY(${d}deg) `)}const a=e.x.scale*t.x,s=e.y.scale*t.y;return(a!==1||s!==1)&&(r+=`scale(${a}, ${s})`),r||"none"}const E8=(e,t)=>e.depth-t.depth;class T8{constructor(){this.children=[],this.isDirty=!1}add(t){Bd(this.children,t),this.isDirty=!0}remove(t){Ud(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(E8),this.isDirty=!1,this.children.forEach(t)}}function z8(e,t){const n=performance.now(),r=({timestamp:o})=>{const i=o-n;i>=t&&(Qt(r),e(i-t))};return Y.read(r,!0),()=>Qt(r)}function A8(e){window.MotionDebug&&window.MotionDebug.record(e)}function R8(e){return e instanceof SVGElement&&e.tagName!=="svg"}function D8(e,t,n){const r=Ue(e)?e:Qr(e);return r.start(_d("",r,t,n)),r.animation}const Cm=["","X","Y","Z"],M8={visibility:"hidden"},km=1e3;let $8=0;const Fn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function xv({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(a={},s=t==null?void 0:t()){this.id=$8++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Fn.totalNodes=Fn.resolvedTargetDeltas=Fn.recalculatedProjection=0,this.nodes.forEach(I8),this.nodes.forEach(B8),this.nodes.forEach(U8),this.nodes.forEach(O8),A8(Fn)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=s?s.root||s:this,this.path=s?[...s.path,s]:[],this.parent=s,this.depth=s?s.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new T8)}addEventListener(a,s){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new Hd),this.eventHandlers.get(a).add(s)}notifyListeners(a,...s){const l=this.eventHandlers.get(a);l&&l.notify(...s)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,s=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=R8(a),this.instance=a;const{layoutId:l,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),s&&(u||l)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(a,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=z8(p,250),wa.hasAnimatedSinceResize&&(wa.hasAnimatedSinceResize=!1,this.nodes.forEach(Em))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:h,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||d.getDefaultTransition()||Y8,{onLayoutAnimationStart:j,onLayoutAnimationComplete:v}=d.getProps(),m=!this.targetLayout||!yv(this.targetLayout,y)||h,g=!p&&h;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||g||p&&(m||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,g);const S={...Fd(w,"layout"),onPlay:j,onComplete:v};(d.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else p||Em(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Qt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(H8),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:s,layout:l}=this.options;if(s===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Pm);return}this.isUpdating||this.nodes.forEach(F8),this.isUpdating=!1,this.nodes.forEach(_8),this.nodes.forEach(N8),this.nodes.forEach(L8),this.clearAllSnapshots();const s=performance.now();Ee.delta=En(0,1e3/60,s-Ee.timestamp),Ee.timestamp=s,Ee.isProcessing=!0,Pl.update.process(Ee),Pl.preRender.process(Ee),Pl.render.process(Ee),Ee.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(V8),this.sharedNodes.forEach(W8)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Y.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Y.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ue(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:s}=this.options;s&&s.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let s=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(s=!1),s&&(this.scroll={animationId:this.root.animationId,phase:a,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!o)return;const a=this.isLayoutDirty||this.shouldResetTransform,s=this.projectionDelta&&!vv(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;a&&(s||Vn(this.latestValues)||d)&&(o(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const s=this.measurePageBox();let l=this.removeElementScroll(s);return a&&(l=this.removeTransform(l)),K8(l),{animationId:this.root.animationId,measuredBox:s,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:a}=this.options;if(!a)return ue();const s=a.measureViewportBox(),{scroll:l}=this.root;return l&&(an(s.x,l.offset.x),an(s.y,l.offset.y)),s}removeElementScroll(a){const s=ue();et(s,a);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:d,options:f}=u;if(u!==this.root&&d&&f.layoutScroll){if(d.isRoot){et(s,a);const{scroll:p}=this.root;p&&(an(s.x,-p.offset.x),an(s.y,-p.offset.y))}an(s.x,d.offset.x),an(s.y,d.offset.y)}}return s}applyTransform(a,s=!1){const l=ue();et(l,a);for(let u=0;u<this.path.length;u++){const d=this.path[u];!s&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Tr(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),Vn(d.latestValues)&&Tr(l,d.latestValues)}return Vn(this.latestValues)&&Tr(l,this.latestValues),l}removeTransform(a){const s=ue();et(s,a);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Vn(u.latestValues))continue;cu(u.latestValues)&&u.updateSnapshot();const d=ue(),f=u.measurePageBox();et(d,f),wm(s,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return Vn(this.latestValues)&&wm(s,this.latestValues),s}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ee.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var s;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(a||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=Ee.timestamp,!this.targetDelta&&!this.relativeTarget){const h=this.getClosestProjectingParent();h&&h.layout&&this.animationProgress!==1?(this.relativeParent=h,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ue(),this.relativeTargetOrigin=ue(),_o(this.relativeTargetOrigin,this.layout.layoutBox,h.layout.layoutBox),et(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ue(),this.targetWithTransforms=ue()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Qb(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):et(this.target,this.layout.layoutBox),dv(this.target,this.targetDelta)):et(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const h=this.getClosestProjectingParent();h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?(this.relativeParent=h,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ue(),this.relativeTargetOrigin=ue(),_o(this.relativeTargetOrigin,this.target,h.target),et(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Fn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||cu(this.parent.latestValues)||uv(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const s=this.getLead(),l=!!this.resumingFrom||this!==s;let u=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Ee.timestamp&&(u=!1),u)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;et(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,h=this.treeScale.y;i8(this.layoutCorrected,this.treeScale,this.path,l),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox);const{target:y}=s;if(!y){this.projectionTransform&&(this.projectionDelta=Er(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Er(),this.projectionDeltaWithTransform=Er());const w=this.projectionTransform;Fo(this.projectionDelta,this.layoutCorrected,y,this.latestValues),this.projectionTransform=jm(this.projectionDelta,this.treeScale),(this.projectionTransform!==w||this.treeScale.x!==p||this.treeScale.y!==h)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),Fn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),a){const s=this.getStack();s&&s.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(a,s=!1){const l=this.snapshot,u=l?l.latestValues:{},d={...this.latestValues},f=Er();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!s;const p=ue(),h=l?l.source:void 0,y=this.layout?this.layout.source:void 0,w=h!==y,j=this.getStack(),v=!j||j.members.length<=1,m=!!(w&&!v&&this.options.crossfade===!0&&!this.path.some(q8));this.animationProgress=0;let g;this.mixTargetDelta=S=>{const P=S/1e3;Tm(f.x,a.x,P),Tm(f.y,a.y,P),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(_o(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),G8(this.relativeTarget,this.relativeTargetOrigin,p,P),g&&k8(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=ue()),et(g,this.relativeTarget)),w&&(this.animationValues=d,x8(d,u,this.latestValues,P,m,v)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Qt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Y.update(()=>{wa.hasAnimatedSinceResize=!0,this.currentAnimation=D8(0,km,{...a,onUpdate:s=>{this.mixTargetDelta(s),a.onUpdate&&a.onUpdate(s)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(km),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:s,target:l,layout:u,latestValues:d}=a;if(!(!s||!l||!u)){if(this!==a&&this.layout&&u&&wv(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||ue();const f=Ke(this.layout.layoutBox.x);l.x.min=a.target.x.min,l.x.max=l.x.min+f;const p=Ke(this.layout.layoutBox.y);l.y.min=a.target.y.min,l.y.max=l.y.min+p}et(s,l),Tr(s,d),Fo(this.projectionDeltaWithTransform,this.layoutCorrected,s,d)}}registerSharedNode(a,s){this.sharedNodes.has(a)||this.sharedNodes.set(a,new P8),this.sharedNodes.get(a).add(s);const u=s.options.initialPromotionConfig;s.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(s):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:s}=this.options;return s?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:s}=this.options;return s?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:s,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetRotation(){const{visualElement:a}=this.options;if(!a)return;let s=!1;const{latestValues:l}=a;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(s=!0),!s)return;const u={};for(let d=0;d<Cm.length;d++){const f="rotate"+Cm[d];l[f]&&(u[f]=l[f],a.setStaticValue(f,0))}a.render();for(const d in u)a.setStaticValue(d,u[d]);a.scheduleRender()}getProjectionStyles(a){var s,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return M8;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=xa(a==null?void 0:a.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const w={};return this.options.layoutId&&(w.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,w.pointerEvents=xa(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!Vn(this.latestValues)&&(w.transform=d?d({},""):"none",this.hasProjected=!1),w}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=jm(this.projectionDeltaWithTransform,this.treeScale,p),d&&(u.transform=d(p,u.transform));const{x:h,y}=this.projectionDelta;u.transformOrigin=`${h.origin*100}% ${y.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(s=p.opacity)!==null&&s!==void 0?s:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:u.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const w in Ja){if(p[w]===void 0)continue;const{correct:j,applyTo:v}=Ja[w],m=u.transform==="none"?p[w]:j(p[w],f);if(v){const g=v.length;for(let S=0;S<g;S++)u[v[S]]=m}else u[w]=m}return this.options.layoutId&&(u.pointerEvents=f===this?xa(a==null?void 0:a.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var s;return(s=a.currentAnimation)===null||s===void 0?void 0:s.stop()}),this.root.nodes.forEach(Pm),this.root.sharedNodes.clear()}}}function N8(e){e.updateLayout()}function L8(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=e.layout,{animationType:i}=e.options,a=n.source!==e.layout.source;i==="size"?tt(f=>{const p=a?n.measuredBox[f]:n.layoutBox[f],h=Ke(p);p.min=r[f].min,p.max=p.min+h}):wv(i,n.layoutBox,r)&&tt(f=>{const p=a?n.measuredBox[f]:n.layoutBox[f],h=Ke(r[f]);p.max=p.min+h,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+h)});const s=Er();Fo(s,r,n.layoutBox);const l=Er();a?Fo(l,e.applyTransform(o,!0),n.measuredBox):Fo(l,r,n.layoutBox);const u=!vv(s);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:h}=f;if(p&&h){const y=ue();_o(y,n.layoutBox,p.layoutBox);const w=ue();_o(w,r,h.layoutBox),yv(y,w)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=w,e.relativeTargetOrigin=y,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:s,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function I8(e){Fn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function O8(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function V8(e){e.clearSnapshot()}function Pm(e){e.clearMeasurements()}function F8(e){e.isLayoutDirty=!1}function _8(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Em(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function B8(e){e.resolveTargetDelta()}function U8(e){e.calcProjection()}function H8(e){e.resetRotation()}function W8(e){e.removeLeadSnapshot()}function Tm(e,t,n){e.translate=te(t.translate,0,n),e.scale=te(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function zm(e,t,n,r){e.min=te(t.min,n.min,r),e.max=te(t.max,n.max,r)}function G8(e,t,n,r){zm(e.x,t.x,n.x,r),zm(e.y,t.y,n.y,r)}function q8(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Y8={duration:.45,ease:[.4,0,.1,1]},Am=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),Rm=Am("applewebkit/")&&!Am("chrome/")?Math.round:se;function Dm(e){e.min=Rm(e.min),e.max=Rm(e.max)}function K8(e){Dm(e.x),Dm(e.y)}function wv(e,t,n){return e==="position"||e==="preserve-aspect"&&!su(Sm(t),Sm(n),.2)}const Q8=xv({attachResizeListener:(e,t)=>_t(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Il={current:void 0},bv=xv({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Il.current){const e=new Q8({});e.mount(window),e.setOptions({layoutScroll:!0}),Il.current=e}return Il.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),X8={pan:{Feature:p8},drag:{Feature:f8,ProjectionNode:bv,MeasureLayout:mv}},Z8=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function J8(e){const t=Z8.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function du(e,t,n=1){const[r,o]=J8(e);if(!r)return;const i=window.getComputedStyle(t).getPropertyValue(r);if(i){const a=i.trim();return rv(a)?parseFloat(a):a}else return eu(o)?du(o,t,n+1):o}function eS(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(o=>{const i=o.get();if(!eu(i))return;const a=du(i,r);a&&o.set(a)});for(const o in t){const i=t[o];if(!eu(i))continue;const a=du(i,r);a&&(t[o]=a,n||(n={}),n[o]===void 0&&(n[o]=i))}return{target:t,transitionEnd:n}}const tS=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Sv=e=>tS.has(e),nS=e=>Object.keys(e).some(Sv),Mm=e=>e===lr||e===L,$m=(e,t)=>parseFloat(e.split(", ")[t]),Nm=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/);if(o)return $m(o[1],t);{const i=r.match(/^matrix\((.+)\)$/);return i?$m(i[1],e):0}},rS=new Set(["x","y","z"]),oS=wi.filter(e=>!rS.has(e));function iS(e){const t=[];return oS.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const Xr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Nm(4,13),y:Nm(5,14)};Xr.translateX=Xr.x;Xr.translateY=Xr.y;const aS=(e,t,n)=>{const r=t.measureViewportBox(),o=t.current,i=getComputedStyle(o),{display:a}=i,s={};a==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{s[u]=Xr[u](r,i)}),t.render();const l=t.measureViewportBox();return n.forEach(u=>{const d=t.getValue(u);d&&d.jump(s[u]),e[u]=Xr[u](l,i)}),e},sS=(e,t,n={},r={})=>{t={...t},r={...r};const o=Object.keys(t).filter(Sv);let i=[],a=!1;const s=[];if(o.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let d=n[l],f=ho(d);const p=t[l];let h;if(ts(p)){const y=p.length,w=p[0]===null?1:0;d=p[w],f=ho(d);for(let j=w;j<y&&p[j]!==null;j++)h?Nd(ho(p[j])===h):h=ho(p[j])}else h=ho(p);if(f!==h)if(Mm(f)&&Mm(h)){const y=u.get();typeof y=="string"&&u.set(parseFloat(y)),typeof p=="string"?t[l]=parseFloat(p):Array.isArray(p)&&h===L&&(t[l]=p.map(parseFloat))}else f!=null&&f.transform&&(h!=null&&h.transform)&&(d===0||p===0)?d===0?u.set(h.transform(d)):t[l]=f.transform(p):(a||(i=iS(e),a=!0),s.push(l),r[l]=r[l]!==void 0?r[l]:t[l],u.jump(p))}),s.length){const l=s.indexOf("height")>=0?window.pageYOffset:null,u=aS(t,e,s);return i.length&&i.forEach(([d,f])=>{e.getValue(d).set(f)}),e.render(),Ls&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function lS(e,t,n,r){return nS(t)?sS(e,t,n,r):{target:t,transitionEnd:r}}const cS=(e,t,n,r)=>{const o=eS(e,t,r);return t=o.target,r=o.transitionEnd,lS(e,t,n,r)},fu={current:null},jv={current:!1};function uS(){if(jv.current=!0,!!Ls)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>fu.current=e.matches;e.addListener(t),t()}else fu.current=!1}function dS(e,t,n){const{willChange:r}=t;for(const o in t){const i=t[o],a=n[o];if(Ue(i))e.addValue(o,i),is(r)&&r.add(o);else if(Ue(a))e.addValue(o,Qr(i,{owner:e})),is(r)&&r.remove(o);else if(a!==i)if(e.hasValue(o)){const s=e.getValue(o);!s.hasAnimated&&s.set(i)}else{const s=e.getStaticValue(o);e.addValue(o,Qr(s!==void 0?s:i,{owner:e}))}}for(const o in n)t[o]===void 0&&e.removeValue(o);return t}const Lm=new WeakMap,Cv=Object.keys(ci),fS=Cv.length,Im=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],pS=Pd.length;class mS{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:o,visualState:i},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>Y.render(this.render,!1,!0);const{latestValues:s,renderState:l}=i;this.latestValues=s,this.baseTarget={...s},this.initialValues=n.initial?{...s}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=a,this.isControllingVariants=Os(n),this.isVariantNode=l1(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...d}=this.scrapeMotionValuesFromProps(n,{});for(const f in d){const p=d[f];s[f]!==void 0&&Ue(p)&&(p.set(s[f],!1),is(u)&&u.add(f))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,Lm.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),jv.current||uS(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:fu.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Lm.delete(this.current),this.projection&&this.projection.unmount(),Qt(this.notifyUpdate),Qt(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=sr.has(t),o=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&Y.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),i=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{o(),i()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,o,i){let a,s;for(let l=0;l<fS;l++){const u=Cv[l],{isEnabled:d,Feature:f,ProjectionNode:p,MeasureLayout:h}=ci[u];p&&(a=p),d(n)&&(!this.features[u]&&f&&(this.features[u]=new f(this)),h&&(s=h))}if((this.type==="html"||this.type==="svg")&&!this.projection&&a){this.projection=new a(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:d,dragConstraints:f,layoutScroll:p,layoutRoot:h}=n;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!d||f&&kr(f),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:i,layoutScroll:p,layoutRoot:h})}return s}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ue()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Im.length;r++){const o=Im[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const i=t["on"+o];i&&(this.propEventSubscriptions[o]=this.on(o,i))}this.prevMotionValues=dS(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<pS;r++){const o=Pd[r],i=this.props[o];(li(i)||i===!1)&&(n[o]=i)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Qr(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,o=typeof r=="string"||typeof r=="object"?(n=$d(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&o!==void 0)return o;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!Ue(i)?i:this.initialValues[t]!==void 0&&o===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Hd),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class kv extends mS{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:o},i){let a=Rb(r,t||{},this);if(o&&(n&&(n=o(n)),r&&(r=o(r)),a&&(a=o(a))),i){zb(this,r,a);const s=cS(this,r,a,n);n=s.transitionEnd,r=s.target}return{transition:t,transitionEnd:n,...r}}}function hS(e){return window.getComputedStyle(e)}class gS extends kv{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(sr.has(n)){const r=Vd(n);return r&&r.default||0}else{const r=hS(t),o=(f1(n)?r.getPropertyValue(n):r[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return fv(t,n)}build(t,n,r,o){zd(t,n,r,o.transformTemplate)}scrapeMotionValuesFromProps(t,n){return Md(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ue(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,o){y1(t,n,r,o)}}class vS extends kv{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(sr.has(n)){const r=Vd(n);return r&&r.default||0}return n=x1.has(n)?n:Cd(n),t.getAttribute(n)}measureInstanceViewportBox(){return ue()}scrapeMotionValuesFromProps(t,n){return b1(t,n)}build(t,n,r,o){Rd(t,n,r,this.isSVGTag,o.transformTemplate)}renderInstance(t,n,r,o){w1(t,n,r,o)}mount(t){this.isSVGTag=Dd(t.tagName),super.mount(t)}}const yS=(e,t)=>Td(e)?new vS(t,{enableHardwareAcceleration:!1}):new gS(t,{enableHardwareAcceleration:!0}),xS={layout:{ProjectionNode:bv,MeasureLayout:mv}},wS={...Gb,...f6,...X8,...xS},R=bw((e,t)=>Jw(e,t,wS,yS));function Pv(){const e=b.useRef(!1);return jd(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function bS(){const e=Pv(),[t,n]=b.useState(0),r=b.useCallback(()=>{e.current&&n(t+1)},[t]);return[b.useCallback(()=>Y.postRender(r),[r]),t]}class SS extends b.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function jS({children:e,isPresent:t}){const n=b.useId(),r=b.useRef(null),o=b.useRef({width:0,height:0,top:0,left:0});return b.useInsertionEffect(()=>{const{width:i,height:a,top:s,left:l}=o.current;if(t||!r.current||!i||!a)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${a}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),b.createElement(SS,{isPresent:t,childRef:r,sizeRef:o},b.cloneElement(e,{ref:r}))}const Ol=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:o,presenceAffectsLayout:i,mode:a})=>{const s=S1(CS),l=b.useId(),u=b.useMemo(()=>({id:l,initial:t,isPresent:n,custom:o,onExitComplete:d=>{s.set(d,!0);for(const f of s.values())if(!f)return;r&&r()},register:d=>(s.set(d,!1),()=>s.delete(d))}),i?void 0:[n]);return b.useMemo(()=>{s.forEach((d,f)=>s.set(f,!1))},[n]),b.useEffect(()=>{!n&&!s.size&&r&&r()},[n]),a==="popLayout"&&(e=b.createElement(jS,{isPresent:n},e)),b.createElement(Ns.Provider,{value:u},e)};function CS(){return new Map}function kS(e){return b.useEffect(()=>()=>e(),[])}const _n=e=>e.key||"";function PS(e,t){e.forEach(n=>{const r=_n(n);t.set(r,n)})}function ES(e){const t=[];return b.Children.forEach(e,n=>{b.isValidElement(n)&&t.push(n)}),t}const Wd=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:o,presenceAffectsLayout:i=!0,mode:a="sync"})=>{const s=b.useContext(Ed).forceRender||bS()[0],l=Pv(),u=ES(e);let d=u;const f=b.useRef(new Map).current,p=b.useRef(d),h=b.useRef(new Map).current,y=b.useRef(!0);if(jd(()=>{y.current=!1,PS(u,h),p.current=d}),kS(()=>{y.current=!0,h.clear(),f.clear()}),y.current)return b.createElement(b.Fragment,null,d.map(m=>b.createElement(Ol,{key:_n(m),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:i,mode:a},m)));d=[...d];const w=p.current.map(_n),j=u.map(_n),v=w.length;for(let m=0;m<v;m++){const g=w[m];j.indexOf(g)===-1&&!f.has(g)&&f.set(g,void 0)}return a==="wait"&&f.size&&(d=[]),f.forEach((m,g)=>{if(j.indexOf(g)!==-1)return;const S=h.get(g);if(!S)return;const P=w.indexOf(g);let k=m;if(!k){const C=()=>{f.delete(g);const E=Array.from(h.keys()).filter(D=>!j.includes(D));if(E.forEach(D=>h.delete(D)),p.current=u.filter(D=>{const M=_n(D);return M===g||E.includes(M)}),!f.size){if(l.current===!1)return;s(),r&&r()}};k=b.createElement(Ol,{key:_n(S),isPresent:!1,onExitComplete:C,custom:t,presenceAffectsLayout:i,mode:a},S),f.set(g,k)}d.splice(P,0,k)}),d=d.map(m=>{const g=m.key;return f.has(g)?m:b.createElement(Ol,{key:_n(m),isPresent:!0,presenceAffectsLayout:i,mode:a},m)}),b.createElement(b.Fragment,null,f.size?d:d.map(m=>b.cloneElement(m)))},TS=x.section`
  background: linear-gradient(135deg, #f8f9fa 0%, #e8f5e8 100%);
  padding: 4rem 0;
  min-height: 80vh;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
    min-height: 70vh;
  }
`,zS=x.div`
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
`,AS=x(R.div)`
  @media (max-width: 768px) {
    order: 2;
  }
`,RS=x(R.h1)`
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
`,DS=x(R.p)`
  font-size: 1.25rem;
  color: var(--text-gray);
  margin-bottom: 2rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`,MS=x(R.ul)`
  list-style: none;
  margin: 2rem 0;
  padding: 0;
`,$S=x(R.li)`
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
`,NS=x(R.div)`
  margin-top: 2.5rem;
`,LS=x(R.div)`
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
`,IS=x(R.div)`
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
`,OS=x.h4`
  color: var(--primary-color);
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
`,VS=x.p`
  color: var(--text-gray);
  margin: 0;
  font-size: 0.9rem;
`,FS=()=>{const e=["Tratamentos sem dor","Tecnologia de ponta","Ambiente acolhedor","Agendamento online 24h"],t={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},n={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6}}},r={hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1,transition:{duration:.8}}},o={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{delay:1,duration:.6}}},i=()=>{const a=encodeURIComponent("Olá! Gostaria de agendar uma consulta.");window.open(`https://wa.me/555591679300?text=${a}`,"_blank")};return c.jsx(TS,{children:c.jsxs(zS,{children:[c.jsxs(AS,{variants:t,initial:"hidden",animate:"visible",children:[c.jsx(RS,{variants:n,children:"Transformamos sorrisos há mais de 10 anos"}),c.jsx(DS,{variants:n,children:"Cuidamos da saúde bucal de toda sua família com carinho, tecnologia e profissionalismo."}),c.jsx(MS,{variants:n,children:e.map((a,s)=>c.jsxs($S,{variants:n,children:[c.jsx(r3,{}),a]},s))}),c.jsx(NS,{variants:n,children:c.jsxs($t,{size:"large",onClick:i,"data-testid":"cta-button",children:[c.jsx(yi,{}),"Agende sua consulta"]})})]}),c.jsx(LS,{variants:r,initial:"hidden",animate:"visible",children:c.jsxs(IS,{variants:o,initial:"hidden",animate:"visible",children:[c.jsx(OS,{children:"Atendimento 24h"}),c.jsx(VS,{children:"Emergências atendidas a qualquer hora"})]})})]})})},_S=x(R.div)`
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
`,BS=x.div`
  padding: ${e=>e.$padding||"1.5rem"};
  height: 100%;
  display: flex;
  flex-direction: column;
`,Gd=({children:e,variant:t="default",clickable:n=!1,fullHeight:r=!1,padding:o,onClick:i,className:a,...s})=>{const l={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};return c.jsx(_S,{$variant:t,$clickable:n,$fullHeight:r,onClick:i,className:a,variants:l,initial:"hidden",whileInView:"visible",viewport:{once:!0},...s,children:c.jsx(BS,{$padding:o,children:e})})},US=[{id:1,title:"Clínica Geral",description:"Cuidados essenciais para sua saúde bucal",price:"A partir de R$ 120",icon:Ms,color:"#2E8B57",features:["Limpeza","Restaurações","Tratamento de cáries"]},{id:2,title:"Ortodontia",description:"Alinhamento perfeito do seu sorriso",price:"A partir de R$ 150",icon:t1,color:"#4169E1",features:["Aparelhos fixos","Aparelhos móveis","Invisalign"]},{id:3,title:"Estética Dental",description:"Transforme seu sorriso com naturalidade",price:"A partir de R$ 680",icon:r1,color:"#FF6B35",features:["Clareamento","Facetas","Harmonização"]},{id:4,title:"Implantes",description:"Recupere a função e estética dos dentes",price:"A partir de R$ 200",icon:a3,color:"#8A2BE2",features:["Implante unitário","Prótese total","Carga imediata"]}],HS=x.section`
  padding: 5rem 0;
  background: var(--white);
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`,WS=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,GS=x.div`
  text-align: center;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`,qS=x(R.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,YS=x(R.p)`
  font-size: 1.1rem;
  color: var(--text-gray);
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,KS=x.div`
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
`,Ev=x(Gd)`
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
`,QS=x.div`
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
  
  ${Ev}:hover & {
    transform: scale(1.1);
    background: ${e=>e.$color};
    color: white;
  }
`,XS=x.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
`,ZS=x.p`
  color: var(--text-gray);
  margin-bottom: 1rem;
  line-height: 1.6;
`,JS=x.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
`,ej=x.ul`
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
`,tj=x(R.div)`
  text-align: center;
  margin-top: 3rem;
`,nj=x.button`
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
`,rj=()=>{const e=fd(),t={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},n={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6}}},r=i=>{e(`/servicos#${i}`)},o=()=>{e("/servicos")};return c.jsx(HS,{children:c.jsxs(WS,{children:[c.jsxs(GS,{children:[c.jsx(qS,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:"Nossos Serviços"}),c.jsx(YS,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1},children:"Oferecemos tratamentos completos para toda sua família com tecnologia avançada e cuidado personalizado"})]}),c.jsx(R.div,{variants:t,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:c.jsx(KS,{children:US.map(i=>{const a=i.icon;return c.jsxs(Ev,{$color:i.color,variant:"elevated",clickable:!0,onClick:()=>r(i.id),variants:n,"data-testid":`service-card-${i.id}`,children:[c.jsx(QS,{$color:i.color,children:c.jsx(a,{})}),c.jsx(XS,{children:i.title}),c.jsx(ZS,{children:i.description}),c.jsx(JS,{"data-testid":`service-price-${i.id}`,children:i.price}),c.jsx(ej,{children:i.features.map((s,l)=>c.jsx("li",{children:s},l))})]},i.id)})})}),c.jsx(tj,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},children:c.jsx(nj,{onClick:o,children:"Ver todos os serviços"})})]})})},oj=[{id:1,name:"Maria Santos",age:34,text:"Depois de anos com medo de dentista, a Dra. Maria me devolveu a confiança. Tratamento sem dor e resultado incrível!",rating:5,image:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"},{id:2,name:"Roberto Silva",subtitle:"pai do Lucas",text:"Meu filho adorou a consulta. Ambiente super acolhedor e profissionais que sabem lidar com crianças.",rating:5,image:"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"},{id:3,name:"Ana Costa",age:45,text:"Fiz meu implante aqui e o resultado superou expectativas. Equipe técnica excepcional!",rating:5,image:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"}],ij=x.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e8f5e8 100%);
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`,aj=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,sj=x.div`
  text-align: center;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`,lj=x(R.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,cj=x(R.p)`
  font-size: 1.1rem;
  color: var(--text-gray);
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,uj=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,dj=x(Gd)`
  position: relative;
  text-align: left;
  height: 100%;
`,fj=x.div`
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
`,pj=x.p`
  font-size: 1.1rem;
  color: var(--text-dark);
  line-height: 1.6;
  margin: 1.5rem 0 2rem 0;
  font-style: italic;
  position: relative;
`,mj=x.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
`,hj=x.div`
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
`,gj=x.div`
  flex: 1;
`,vj=x.h4`
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-dark);
`,yj=x.p`
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-gray);
`,xj=x.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 0.5rem;
`,wj=x(r1)`
  color: #ffd700;
  font-size: 1rem;
`,bj=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
  text-align: center;
`,Sj=x(R.div)`
  background: var(--white);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`,jj=x.div`
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`,Cj=x.div`
  font-size: 1.1rem;
  color: var(--text-gray);
  font-weight: 500;
`,kj=()=>{const e={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},t={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6}}},n=i=>i.split(" ").map(a=>a[0]).join("").toUpperCase(),r=i=>Array.from({length:5},(a,s)=>c.jsx(wj,{"data-testid":`star-${s}`},s)),o=[{number:"10+",label:"Anos de Experiência"},{number:"5.000+",label:"Pacientes Atendidos"},{number:"98%",label:"Satisfação dos Clientes"},{number:"24h",label:"Atendimento Emergencial"}];return c.jsx(ij,{children:c.jsxs(aj,{children:[c.jsxs(sj,{children:[c.jsx(lj,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:"O que nossos pacientes dizem"}),c.jsx(cj,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1},children:"Depoimentos reais de pessoas que transformaram seus sorrisos conosco"})]}),c.jsx(R.div,{variants:e,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:c.jsx(uj,{children:oj.map((i,a)=>c.jsxs(dj,{variant:"elevated",fullHeight:!0,variants:t,"data-testid":`testimonial-${i.id}`,children:[c.jsx(fj,{children:c.jsx(h3,{})}),c.jsxs(pj,{"data-testid":`testimonial-text-${i.id}`,children:['"',i.text,'"']}),c.jsxs(mj,{children:[c.jsx(hj,{children:n(i.name)}),c.jsxs(gj,{children:[c.jsx(vj,{"data-testid":`patient-name-${i.id}`,children:i.name}),c.jsxs(yj,{children:[i.age&&`${i.age} anos`,i.subtitle&&i.subtitle]}),c.jsx(xj,{"data-testid":`rating-${i.id}`,children:r(i.rating)})]})]})]},i.id))})}),c.jsx(bj,{children:o.map((i,a)=>c.jsxs(Sj,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:a*.1},children:[c.jsx(jj,{children:i.number}),c.jsx(Cj,{children:i.label})]},a))})]})})},Pj=x.section`
  padding: 5rem 0;
  background: var(--white);
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`,Ej=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,Tj=x.div`
  text-align: center;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`,zj=x(R.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Aj=x(R.p)`
  font-size: 1.1rem;
  color: var(--text-gray);
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Rj=x.div`
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
`,Eo=x(Gd)`
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
`,Vl=x.div`
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
`,Fl=x.p`
  color: var(--text-gray);
  line-height: 1.6;
  margin-bottom: 0;
`,_l=x.a`
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
`,Dj=x.ul`
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
`,Mj=x.span`
  font-weight: 500;
  color: var(--text-dark);
`,$j=x.span`
  color: var(--text-gray);
`,Nj=x(R.div)`
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
`,Lj=x.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`,Ij=x.p`
  margin-bottom: 1.5rem;
  opacity: 0.9;
`,Oj=x.a`
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
`,Vj=()=>{const e={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},t={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6}}},n=()=>{const a=encodeURIComponent("Olá! Gostaria de agendar uma consulta.");window.open(`https://wa.me/555591679300?text=${a}`,"_blank")},r=()=>{const a=encodeURIComponent("Olá! Preciso de atendimento de emergência.");window.open(`https://wa.me/555591679300?text=${a}`,"_blank")},o=()=>{window.open("https://maps.google.com/?q=Av.+Brigadeiro+Faria+Lima+3477+Itaim+Bibi+São+Paulo","_blank")},i=[{day:"Segunda à Sexta",time:"8h às 18h"},{day:"Sábado",time:"8h às 14h"},{day:"Domingo",time:"Fechado"},{day:"Emergências",time:"24h"}];return c.jsx(Pj,{children:c.jsxs(Ej,{children:[c.jsxs(Tj,{children:[c.jsx(zj,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:"Como nos encontrar"}),c.jsx(Aj,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1},children:"Estamos sempre prontos para cuidar do seu sorriso"})]}),c.jsx(R.div,{variants:e,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:c.jsxs(Rj,{children:[c.jsx(Eo,{variants:t,variant:"elevated",children:c.jsxs(Yi,{children:[c.jsxs("div",{children:[c.jsx(Ki,{$color:"#2E8B57",children:c.jsx(Sd,{})}),c.jsx(Qi,{children:"Localização"}),c.jsxs(Fl,{children:["Rua das Flores, 123",c.jsx("br",{}),"Vila Madalena, São Paulo - SP",c.jsx("br",{}),"CEP: 05435-000"]})]}),c.jsx(Vl,{children:c.jsxs(_l,{$color:"#2E8B57",onClick:o,href:"#",children:[c.jsx(v3,{}),"Como chegar"]})})]})}),c.jsx(Eo,{variants:t,variant:"elevated",children:c.jsxs(Yi,{children:[c.jsxs("div",{children:[c.jsx(Ki,{$color:"#4169E1",children:c.jsx(Za,{})}),c.jsx(Qi,{children:"Telefone"}),c.jsxs(Fl,{children:["Central de Atendimento",c.jsx("br",{}),"(55) 99 9167-9300",c.jsx("br",{}),"Atendimento comercial"]})]}),c.jsx(Vl,{children:c.jsxs(_l,{$color:"#4169E1",href:"tel:+555591679300",children:[c.jsx(Za,{}),"Ligar agora"]})})]})}),c.jsx(Eo,{variants:t,variant:"elevated",children:c.jsxs(Yi,{children:[c.jsxs("div",{children:[c.jsx(Ki,{$color:"#25D366",children:c.jsx(Ut,{})}),c.jsx(Qi,{children:"WhatsApp"}),c.jsxs(Fl,{children:["Agendamentos e dúvidas",c.jsx("br",{}),"(55) 99 9167-9300",c.jsx("br",{}),"Resposta rápida"]})]}),c.jsx(Vl,{children:c.jsxs(_l,{$color:"#25D366",onClick:n,href:"#",children:[c.jsx(Ut,{}),"WhatsApp"]})})]})}),c.jsx(Eo,{variants:t,variant:"elevated",children:c.jsx(Yi,{children:c.jsxs("div",{children:[c.jsx(Ki,{$color:"#FF6B35",children:c.jsx(Xa,{})}),c.jsx(Qi,{children:"Horários"}),c.jsx(Dj,{children:i.map((a,s)=>c.jsxs("li",{children:[c.jsx(Mj,{children:a.day}),c.jsx($j,{children:a.time})]},s))})]})})})]})}),c.jsxs(Nj,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},children:[c.jsx(Lj,{children:"Emergência Dental?"}),c.jsx(Ij,{children:"Atendemos emergências 24 horas por dia, 7 dias por semana"}),c.jsxs(Oj,{onClick:r,href:"#",children:[c.jsx(Ut,{}),"Emergência WhatsApp"]})]})]})})},Tv=Zg`
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
`,Fj=x(R.button)`
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
  animation: ${Tv} 2s infinite;
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
`,_j=x(R.div)`
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
`,Bj=x.div`
  position: absolute;
  top: -2px;
  right: -2px;
  width: 12px;
  height: 12px;
  background: #ff4757;
  border: 2px solid white;
  border-radius: 50%;
  animation: ${Tv} 1.5s infinite;
`,Uj=({showTooltip:e=!0,message:t="Olá! Gostaria de agendar uma consulta.",showNotification:n=!1})=>{const r=()=>{const a=encodeURIComponent(t);window.open(`https://wa.me/555591679300?text=${a}`,"_blank")},o={hidden:{opacity:0,scale:0,y:100},visible:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:260,damping:20,delay:1}}},i={hidden:{opacity:0,x:10},visible:{opacity:1,x:0,transition:{delay:2}}};return c.jsxs(Fj,{onClick:r,variants:o,initial:"hidden",animate:"visible",whileHover:{scale:1.1},whileTap:{scale:.95},"data-testid":"whatsapp-float","aria-label":"Contato via WhatsApp",children:[c.jsx(Ut,{}),n&&c.jsx(Bj,{}),e&&c.jsx(_j,{variants:i,initial:"hidden",animate:"visible",$show:!0,children:"Fale conosco!"})]})},Hj=()=>c.jsxs(Mn,{children:[c.jsx(FS,{}),c.jsx(rj,{}),c.jsx(kj,{}),c.jsx(Vj,{}),c.jsx(Uj,{})]}),Wj=[{id:1,name:"Dra. Maria Santos",specialty:"Ortodontia e Implantodontia",education:"USP, Especialização em Harmonização Orofacial",image:"/gallery/Dra. Maria.jpg",description:"Especialista em transformar sorrisos com mais de 15 anos de experiência em tratamentos ortodônticos e implantológicos."},{id:2,name:"Dr. João Silva",specialty:"Endodontia e Estética",education:"UNIFESP, Pós-graduação em Estética Dental",image:"/gallery/Dr. João.jpg",description:"Dedicado aos tratamentos endodônticos e estéticos, sempre utilizando as mais modernas técnicas da odontologia."}],Gj=["Tecnologia de ponta (scanner intraoral, radiografia digital)","Ambiente climatizado e acolhedor","Equipe especializada e atualizada","Atendimento humanizado","Protocolos de biossegurança rigorosos","Planos de pagamento flexíveis e facilitados"],qj=()=>c.jsx("section",{className:"team-section",children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"section-title",children:"Nossa Equipe"}),c.jsx("div",{className:"team-grid",children:Wj.map(e=>c.jsxs("div",{className:"team-card",children:[c.jsx("div",{className:"team-card-image",children:c.jsx("img",{src:e.image,alt:e.name,onError:t=>{t.target.src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face"}})}),c.jsxs("div",{className:"team-card-content",children:[c.jsx("h3",{className:"team-member-name",children:e.name}),c.jsxs("p",{className:"team-member-specialty",children:[c.jsx("strong",{children:"Especialista em:"})," ",e.specialty]}),c.jsxs("p",{className:"team-member-education",children:[c.jsx("strong",{children:"Formação:"})," ",e.education]}),c.jsx("p",{className:"team-member-description",children:e.description})]})]},e.id))}),c.jsxs("div",{className:"differentials-section",children:[c.jsx("h3",{className:"differentials-title",children:"Nossos Diferenciais"}),c.jsx("ul",{className:"differentials-list",children:Gj.map((e,t)=>c.jsxs("li",{className:"differential-item",children:[c.jsx("span",{className:"differential-icon",children:"✓"}),e]},t))})]})]})}),Yj=()=>c.jsx(Mn,{children:c.jsxs("div",{className:"about-page",children:[c.jsx("div",{className:"hero-section hero-about",children:c.jsx("div",{className:"container",children:c.jsxs("div",{className:"hero-content",children:[c.jsx("h1",{className:"hero-title",children:"Sobre a Clínica Sorriso Perfeito"}),c.jsx("p",{className:"hero-subtitle",children:"Cuidando do seu sorriso com excelência e humanização desde 2014"})]})})}),c.jsx("section",{className:"our-story",children:c.jsx("div",{className:"container",children:c.jsxs("div",{className:"story-content",children:[c.jsx("h2",{className:"section-title",children:"Nossa História"}),c.jsxs("div",{className:"story-text",children:[c.jsx("p",{children:"A Clínica Sorriso Perfeito nasceu em 2014 do sonho da Dra. Maria de democratizar o acesso aos cuidados odontológicos de qualidade na Vila Madalena."}),c.jsx("p",{children:"Com mais de 15 anos de experiência e centenas de sorrisos transformados, nossa missão é proporcionar tratamentos odontológicos humanizados, utilizando tecnologia de ponta em um ambiente acolhedor."})]})]})})}),c.jsx(qj,{}),c.jsx("section",{className:"mission-vision",children:c.jsx("div",{className:"container",children:c.jsxs("div",{className:"mission-vision-grid",children:[c.jsxs("div",{className:"mission-card",children:[c.jsx("div",{className:"card-icon",children:c.jsx(t3,{})}),c.jsx("h3",{children:"Nossa Missão"}),c.jsx("p",{children:"Proporcionar tratamentos odontológicos de excelência, com atendimento humanizado e tecnologia de ponta, transformando sorrisos e vidas."})]}),c.jsxs("div",{className:"vision-card",children:[c.jsx("div",{className:"card-icon",children:c.jsx(u3,{})}),c.jsx("h3",{children:"Nossa Visão"}),c.jsx("p",{children:"Ser referência em odontologia na Vila Madalena, reconhecida pela qualidade dos tratamentos e pela satisfação dos nossos pacientes."})]}),c.jsxs("div",{className:"values-card",children:[c.jsx("div",{className:"card-icon",children:c.jsx(f3,{})}),c.jsx("h3",{children:"Nossos Valores"}),c.jsx("p",{children:"Ética, transparência, excelência técnica, atendimento humanizado e compromisso com a saúde bucal dos nossos pacientes."})]})]})})}),c.jsx("section",{className:"cta-section",children:c.jsx("div",{className:"container",children:c.jsxs("div",{className:"cta-content",children:[c.jsx("h2",{children:"Pronto para transformar seu sorriso?"}),c.jsx("p",{children:"Agende sua consulta e descubra como podemos ajudar você a ter o sorriso dos seus sonhos."}),c.jsxs("div",{className:"cta-buttons",children:[c.jsx("a",{href:"/contato",className:"btn btn-primary",children:"Agendar Consulta"}),c.jsx("a",{href:"/servicos",className:"btn btn-secondary",children:"Ver Serviços"})]})]})})})]})}),Kj=x(R.div)`
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
`,Qj=x(R.div)`
  background: white;
  border-radius: 20px;
  padding: 0;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.2);
`,Xj=x.div`
  background: linear-gradient(135deg, var(--primary-color), #3a9d66);
  color: white;
  padding: 2rem;
  border-radius: 20px 20px 0 0;
  position: relative;
`,Zj=x.button`
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
`,Jj=x.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`,eC=x.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-color);
`,tC=x.div`
  padding: 2rem;
`,nC=x.p`
  color: var(--text-light);
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1.125rem;
`,rC=x.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`,oC=x.li`
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
`,iC=x.button`
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
`,aC=({isOpen:e,onClose:t,service:n,category:r})=>{b.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e]);const o=s=>{s.target===s.currentTarget&&t()},i=(s,l)=>({"Consulta + Limpeza":{description:"Consulta completa com avaliação detalhada e limpeza profissional dos dentes.",features:["Exame clínico completo","Radiografias se necessário","Limpeza com ultrassom","Orientações de higiene bucal"]},"Restauração (resina)":{description:"Restauração estética com resina composta para tratamento de cáries.",features:["Material estético de alta qualidade","Procedimento indolor","Cor personalizada","Durabilidade garantida"]},"Aplicação de flúor":{description:"Aplicação preventiva de flúor para fortalecimento do esmalte dentário.",features:["Prevenção de cáries","Fortalecimento do esmalte","Procedimento rápido e indolor","Proteção duradoura"]},"Clareamento dental":{description:"Procedimento para clarear os dentes de forma segura e eficaz.",features:["Clareamento com gel profissional","Resultados visíveis na primeira sessão","Acompanhamento pós-tratamento","Kit para manutenção"]},"Gengivoplastia estética":{description:"Cirurgia periodontal para correção estética da gengiva.",features:["Melhora do contorno gengival","Sorriso mais harmônico","Procedimento minimamente invasivo","Recuperação rápida"]},"Aparelho metálico":{description:"Tratamento ortodôntico com aparelho fixo metálico tradicional.",features:["Consultas mensais incluídas","Ajustes e manutenções","Acompanhamento completo","Resultado garantido"]},"Contenção ortodôntica":{description:"Aparelho de contenção para manutenção dos resultados ortodônticos.",features:["Mantém dentes alinhados","Removível ou fixo","Confecção personalizada","Acompanhamento incluído"]},"Implante unitário":{description:"Implante de titânio para substituição de um dente perdido.",features:["Implante de titânio importado","Cirurgia minimamente invasiva","Acompanhamento pós-cirúrgico","Garantia do implante"]},"Levantamento de seio":{description:"Procedimento para aumentar volume ósseo na região posterior superior.",features:["Possibilita implante em casos complexos","Técnica avançada","Material biocompatível","Acompanhamento especializado"]}})[s]||{description:`Serviço profissional de ${l.toLowerCase()} realizado com os mais altos padrões de qualidade.`,features:["Atendimento personalizado","Equipamentos modernos","Profissionais especializados","Acompanhamento completo"]};if(!n)return null;const a=i(n.name,r);return c.jsx(Wd,{children:e&&c.jsx(Kj,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:o,children:c.jsxs(Qj,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{type:"spring",stiffness:300,damping:30},children:[c.jsxs(Xj,{children:[c.jsx(Zj,{onClick:t,children:c.jsx(xi,{})}),c.jsx(Jj,{children:n.name}),c.jsx(eC,{children:n.price})]}),c.jsxs(tC,{children:[c.jsx(nC,{children:a.description}),c.jsx(rC,{children:a.features.map((s,l)=>c.jsx(oC,{children:s},l))}),c.jsx(iC,{onClick:()=>{const s=`Olá! Gostaria de saber mais sobre ${n.name} (${n.price}).`;window.open(`https://wa.me/555591679300?text=${encodeURIComponent(s)}`,"_blank")},children:"Agendar pelo WhatsApp"})]})]})})})},sC={clinicaGeral:{title:"Clínica Geral",services:[{name:"Consulta + Limpeza",price:"R$ 180"},{name:"Restauração (resina)",price:"R$ 250"},{name:"Extração simples",price:"R$ 200"},{name:"Canal (por raiz)",price:"R$ 550"},{name:"Tratamento de gengiva",price:"R$ 380"},{name:"Aplicação de flúor",price:"R$ 120"}]},ortodontia:{title:"Ortodontia",services:[{name:"Consulta ortodôntica",price:"R$ 150"},{name:"Aparelho metálico",price:"R$ 3.800"},{name:"Aparelho estético",price:"R$ 4.900"},{name:"Aparelho invisível",price:"R$ 8.500"},{name:"Manutenção mensal",price:"R$ 180"},{name:"Contenção ortodôntica",price:"R$ 650"}]},esteticaDental:{title:"Estética Dental",services:[{name:"Clareamento dental",price:"R$ 680"},{name:"Faceta de resina",price:"R$ 450"},{name:"Faceta de porcelana",price:"R$ 1.800"},{name:"Harmonização orofacial",price:"R$ 1.200"},{name:"Lente de contato dental",price:"R$ 2.200"},{name:"Gengivoplastia estética",price:"R$ 950"}]},implantes:{title:"Implantes",services:[{name:"Implante unitário",price:"R$ 2.800"},{name:"Prótese sobre implante",price:"R$ 1.900"},{name:"Enxerto ósseo",price:"R$ 2.400"},{name:"Consulta especializada",price:"R$ 200"},{name:"Protocolo total",price:"R$ 22.000"},{name:"Levantamento de seio",price:"R$ 3.200"}]}},Xi={validUntil:"dezembro/2024",financing:"Parcelamento em até 12x sem juros",insurance:["Unimed","Bradesco Saúde","SulAmérica"],customQuote:"Orçamento personalizado disponível"},lC=()=>{const[e,t]=b.useState(null),[n,r]=b.useState(""),[o,i]=b.useState(!1),a=(l,u)=>{t(l),r(u),i(!0)},s=()=>{i(!1),t(null),r("")};return c.jsxs(Mn,{children:[c.jsxs("div",{className:"services-page",children:[c.jsx("div",{className:"hero-section hero-services",children:c.jsx("div",{className:"container",children:c.jsxs(R.div,{className:"hero-content",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[c.jsx(R.h1,{className:"hero-title",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:"Nossos Serviços"}),c.jsx(R.p,{className:"hero-subtitle",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:"Tratamentos completos com a mais alta qualidade e tecnologia de ponta"})]})})}),c.jsx("section",{className:"services-section",children:c.jsx("div",{className:"container",children:Object.entries(sC).map(([l,u],d)=>c.jsxs(R.div,{className:"service-category",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.6,delay:d*.2+.6},children:[c.jsx(R.h2,{className:"category-title",initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.5,delay:d*.2+.8},children:u.title}),c.jsx("div",{className:"services-grid",children:u.services.map((f,p)=>c.jsxs(R.div,{className:"service-card",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.4,delay:d*.2+p*.1+1},whileHover:{scale:1.02,transition:{duration:.2}},children:[c.jsx("div",{className:"service-info",children:c.jsx("h3",{className:"service-name",children:f.name})}),c.jsx("span",{className:"service-price",children:f.price}),c.jsx(R.button,{className:"btn btn-outline btn-small",onClick:()=>a(f,u.title),whileHover:{scale:1.05},whileTap:{scale:.95},children:"Saiba mais"})]},p))})]},l))})}),c.jsx(R.section,{className:"payment-info",initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:2},children:c.jsx("div",{className:"container",children:c.jsx(R.div,{className:"payment-info-grid",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:2.2},children:[{icon:l3,title:"Parcelamento",content:Xi.financing},{icon:p3,title:"Convênios",content:Xi.insurance.map((l,u)=>c.jsx("span",{className:"insurance-item",children:l},u))},{icon:d3,title:"Orçamento",content:Xi.customQuote},{icon:yi,title:"Preços válidos",content:`Até ${Xi.validUntil}`}].map((l,u)=>c.jsxs(R.div,{className:"info-card",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.5,delay:2.4+u*.1},whileHover:{scale:1.05,transition:{duration:.2}},children:[c.jsx(R.div,{className:"info-icon",initial:{scale:0},animate:{scale:1},transition:{duration:.3,delay:2.6+u*.1,type:"spring",stiffness:200},children:c.jsx(l.icon,{})}),c.jsx("h3",{children:l.title}),l.title==="Convênios"?c.jsx("div",{className:"insurance-list",children:l.content}):c.jsx("p",{children:l.content})]},u))})})}),c.jsx(R.section,{className:"services-cta",initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:3},children:c.jsx("div",{className:"container",children:c.jsxs(R.div,{className:"cta-content",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:3.2},children:[c.jsx(R.h2,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:3.4},children:"Interessado em algum tratamento?"}),c.jsx(R.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:3.6},children:"Entre em contato conosco para agendar uma consulta e receber um orçamento personalizado."}),c.jsxs(R.div,{className:"cta-buttons",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:3.8},children:[c.jsx(R.a,{href:"/contato",className:"btn btn-primary",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Agendar Consulta"}),c.jsx(R.a,{href:"https://wa.me/555591679300?text=Olá! Gostaria de saber mais sobre os serviços da clínica.",className:"btn btn-whatsapp",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},children:"WhatsApp"})]})]})})}),c.jsx(R.section,{className:"testimonials-preview",initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:4},children:c.jsxs("div",{className:"container",children:[c.jsx(R.h2,{className:"section-title",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:4.2},children:"O que nossos pacientes dizem"}),c.jsx(R.div,{className:"testimonials-grid",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:4.4},children:[{stars:"★★★★★",text:"Excelente atendimento! A Dra. Maria é muito atenciosa e o resultado do meu clareamento ficou perfeito.",author:"- Maria Silva"},{stars:"★★★★★",text:"Profissionais muito qualificados. Fiz um implante com o Dr. João e superou minhas expectativas.",author:"- João Santos"},{stars:"★★★★★",text:"Ambiente muito acolhedor e tecnologia de ponta. Recomendo para toda a família!",author:"- Ana Costa"}].map((l,u)=>c.jsxs(R.div,{className:"testimonial-card",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.5,delay:4.6+u*.2},whileHover:{scale:1.03,transition:{duration:.2}},children:[c.jsx(R.div,{className:"testimonial-stars",initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.3,delay:4.8+u*.2,type:"spring"},children:l.stars}),c.jsxs("p",{className:"testimonial-text",children:['"',l.text,'"']}),c.jsx("div",{className:"testimonial-author",children:l.author})]},u))})]})})]}),c.jsx(aC,{isOpen:o,onClose:s,service:e,category:n})]})},zv=e=>!e||!e.trim()?"Nome é obrigatório":e.trim().split(/\s+/).length<2?"Nome deve conter pelo menos 2 palavras":e.length<2?"Nome deve ter pelo menos 2 caracteres":"",Av=e=>!e||!e.trim()?"Email é obrigatório":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)?"":"Email inválido",Rv=e=>!e||!e.trim()?"Telefone é obrigatório":e.replace(/\D/g,"").length!==11?"Telefone deve ter 11 dígitos":"",Dv=e=>{if(!e)return"Data é obrigatória";const t=new Date(e),n=new Date;return n.setHours(0,0,0,0),t<n?"Data não pode ser no passado":t.getDay()===0?"Não atendemos aos domingos":""},ss=(e,t)=>!e||typeof e=="string"&&!e.trim()?`${t} é obrigatório`:"",cC=e=>{const t={},n=zv(e.name);n&&(t.name=n);const r=Av(e.email);r&&(t.email=r);const o=Rv(e.phone);o&&(t.phone=o);const i=Dv(e.date);i&&(t.date=i);const a=ss(e.time,"Horário");a&&(t.time=a);const s=ss(e.service,"Tipo de consulta");return s&&(t.service=s),{errors:t,isValid:Object.keys(t).length===0}},uC=(e={},t={})=>{const[n,r]=b.useState(e),[o,i]=b.useState({}),[a,s]=b.useState({}),[l,u]=b.useState(!1),d=b.useCallback((k,C)=>{if(r(E=>({...E,[k]:C})),a[k]&&o[k]){const E=t[k];if(E){const D=E(C);i(M=>({...M,[k]:D}))}}},[a,o,t]),f=b.useCallback((k,C=!0)=>{s(E=>({...E,[k]:C}))},[]),p=b.useCallback((k,C)=>{i(E=>({...E,[k]:C}))},[]),h=b.useCallback((k,C)=>{const E=t[k];if(E){const D=E(C);return p(k,D),D}return""},[t,p]),y=b.useCallback(()=>{const k=cC(n);return i(k.errors),k},[n]),w=b.useCallback(k=>C=>{d(k,C)},[d]),j=b.useCallback(k=>()=>{f(k,!0),h(k,n[k])},[f,h,n]),v=b.useCallback(k=>{const C=Object.keys(k)[0];if(C){const E=document.querySelector(`[name="${C}"], [data-field="${C}"]`);E&&(E.scrollIntoView({behavior:"smooth",block:"center"}),E.focus())}},[]),m=b.useCallback(k=>{const C=document.querySelector(".form-error-alert");C&&C.remove();const E=document.createElement("div");E.className="form-error-alert",E.style.cssText=`
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
    `,document.body.appendChild(E),setTimeout(()=>{E.parentNode&&(E.style.animation="slideInAlert 0.3s reverse",setTimeout(()=>E.remove(),300))},4e3)},[]),g=b.useCallback(k=>async C=>{C&&C.preventDefault();const E=Object.keys(n).reduce((M,oe)=>(M[oe]=!0,M),{});s(E);const D=y();if(D.isValid){u(!0);try{await k(n)}catch(M){console.error("Form submission error:",M)}finally{u(!1)}}else{v(D.errors);const M=Object.values(D.errors)[0];m(`Erro no formulário: ${M}`)}},[n,y,v,m]),S=b.useCallback(()=>{r(e),i({}),s({}),u(!1)},[e]),P=Object.keys(o).length===0&&Object.keys(a).length>0;return b.useEffect(()=>{const k=localStorage.getItem("appointmentForm");if(k)try{const C=JSON.parse(k);r(E=>({...E,...C}))}catch(C){console.error("Error parsing stored form data:",C)}},[]),b.useEffect(()=>{Object.keys(n).length>0&&Object.values(n).some(k=>k)&&localStorage.setItem("appointmentForm",JSON.stringify(n))},[n]),{values:n,errors:o,touched:a,isSubmitting:l,isValid:P,setValue:d,setFieldTouched:f,setFieldError:p,handleChange:w,handleBlur:j,handleSubmit:g,resetForm:S,validateField:h,validateAllFields:y}},dC=e=>{if(!e)return"";const t=e.replace(/\D/g,"");return t.length<=2?`(${t}`:t.length<=7?`(${t.slice(0,2)}) ${t.slice(2)}`:t.length<=11?`(${t.slice(0,2)}) ${t.slice(2,7)}-${t.slice(7)}`:`(${t.slice(0,2)}) ${t.slice(2,7)}-${t.slice(7,11)}`},qd=e=>!e&&e!==0?"R$ 0,00":new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e),fC=(e,t)=>!e||!t?"":`${new Date(e).toLocaleDateString("pt-BR",{weekday:"long",year:"numeric",month:"long",day:"numeric"})} às ${t}`,Mv=e=>e?e.toLowerCase().split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" "):"",vo="555591679300",$v=()=>{const e=b.useCallback(o=>{const{name:i,phone:a,email:s,service:l,servicePrice:u,date:d,time:f,professional:p,isReturningPatient:h,insurance:y,observations:w,birthDate:j}=o,v=p==="no-preference"?"Sem preferência":p==="maria"?"Dra. Maria":"Dr. João",m=y==="none"?"Não possui":y,g=h?"Sim":"Não",S=`AGENDAMENTO DE CONSULTA

Nome: ${Mv(i)}
Telefone: ${a}
Email: ${s}
${j?`Nascimento: ${new Date(j).toLocaleDateString("pt-BR")}
`:""}
Tipo: ${l}
Data: ${fC(d,f)}
Profissional: ${v}
Valor: ${qd(u)}
Convenio: ${m}
Ja e paciente: ${g}
${w?`Observacoes: ${w}
`:""}
Aguardo confirmacao!`,P=`https://wa.me/${vo}?text=${encodeURIComponent(S)}`;window.open(P,"_blank")},[]),t=b.useCallback(o=>{const{name:i,phone:a,email:s,subject:l,message:u}=o,d=`Olá! Recebi seu contato através do site.

*Nome:* ${i}
*Email:* ${s}
*Telefone:* ${a}
*Assunto:* ${l}
*Mensagem:* ${u}`,f=`https://wa.me/${vo}?text=${encodeURIComponent(d)}`;window.open(f,"_blank")},[]),n=b.useCallback(()=>{const i=`https://wa.me/${vo}?text=${encodeURIComponent("EMERGÊNCIA - Preciso de atendimento urgente")}`;window.open(i,"_blank")},[]),r=b.useCallback((o="Olá! Gostaria de agendar uma consulta.")=>{const i=`https://wa.me/${vo}?text=${encodeURIComponent(o)}`;window.open(i,"_blank")},[]);return{sendAppointment:e,sendContact:t,sendEmergency:n,sendGeneralInquiry:r,whatsappNumber:vo}};var Nv={exports:{}},pC="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",mC=pC,hC=mC;function Lv(){}function Iv(){}Iv.resetWarningCache=Lv;var gC=function(){function e(r,o,i,a,s,l){if(l!==hC){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Iv,resetWarningCache:Lv};return n.PropTypes=n,n};Nv.exports=gC();var vC=Nv.exports;const H=di(vC),fn=({label:e,type:t="text",placeholder:n,value:r,onChange:o,onBlur:i,error:a,required:s=!1,mask:l,name:u,maxLength:d,...f})=>{const p=b.useId(),[h,y]=b.useState(!1),w=(m,g)=>{if(!g)return m;if(g==="phone"){const P=m.replace(/\D/g,"").substring(0,11).match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);if(P)return P[2]?P[3]?`(${P[1]}) ${P[2]}-${P[3]}`:`(${P[1]}) ${P[2]}`:P[1]}return m},j=m=>{let g=m.target.value;l&&(g=w(g,l)),o(g)},v=m=>{y(!0),i&&i(m)};return c.jsxs("div",{className:"input-group",children:[e&&c.jsxs("label",{htmlFor:p,className:"input-label",children:[e,s&&c.jsx("span",{className:"required",children:"*"})]}),c.jsx("input",{id:p,name:u,type:t,placeholder:n,value:r,onChange:j,onBlur:v,className:`input ${a?"input-error":""}`,required:s,maxLength:d,autoComplete:"off",...f}),a&&c.jsx("span",{className:"error-message",children:a})]})};fn.propTypes={label:H.string,type:H.string,placeholder:H.string,value:H.string.isRequired,onChange:H.func.isRequired,onBlur:H.func,error:H.string,required:H.bool,mask:H.string,name:H.string,maxLength:H.number};const ls=({label:e,placeholder:t,value:n,onChange:r,options:o,error:i,required:a=!1,...s})=>{const l=b.useId();return c.jsxs("div",{className:"select-group",children:[e&&c.jsxs("label",{htmlFor:l,className:"select-label",children:[e,a&&c.jsx("span",{className:"required",children:"*"})]}),c.jsxs("select",{id:l,value:n,onChange:u=>r(u.target.value),className:`select ${i?"select-error":""}`,required:a,...s,children:[t&&c.jsx("option",{value:"",disabled:!0,children:t}),o.map(u=>c.jsx("option",{value:u.value,children:u.label},u.value))]}),i&&c.jsx("span",{className:"error-message",children:i})]})};ls.propTypes={label:H.string,placeholder:H.string,value:H.string.isRequired,onChange:H.func.isRequired,options:H.arrayOf(H.shape({value:H.string.isRequired,label:H.string.isRequired})).isRequired,error:H.string,required:H.bool};const Yd=({label:e,placeholder:t,value:n,onChange:r,error:o,required:i=!1,rows:a=4,maxLength:s,...l})=>{const u=b.useId(),[d,f]=b.useState(!1),p=()=>{f(!0)};return c.jsxs("div",{className:"textarea-group",children:[e&&c.jsxs("label",{htmlFor:u,className:"textarea-label",children:[e,i&&c.jsx("span",{className:"required",children:"*"})]}),c.jsx("textarea",{id:u,placeholder:t,value:n,onChange:h=>r(h.target.value),onBlur:p,className:`textarea ${o?"textarea-error":""}`,required:i,rows:a,maxLength:s,...l}),s&&c.jsxs("div",{className:"character-count",children:[n.length,"/",s]}),o&&c.jsx("span",{className:"error-message",children:o})]})};Yd.propTypes={label:H.string,placeholder:H.string,value:H.string.isRequired,onChange:H.func.isRequired,error:H.string,required:H.bool,rows:H.number,maxLength:H.number};const yC=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`,xC=x.div`
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
`,wC=x.div`
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
`,bC=x.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${e=>e.$selected?"var(--primary-color)":"var(--text-dark)"};
  transition: all 0.3s ease;
`,SC=x.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`,jC=x.p`
  font-size: 0.9rem;
  color: var(--text-gray);
  line-height: 1.4;
  margin: 0;
`,CC=[{id:"consulta-geral",name:"Consulta Geral",price:120,description:"Avaliação completa da saúde bucal e diagnóstico",icon:c.jsx(x3,{})},{id:"ortodontia",name:"Ortodontia",price:100,description:"Consulta ortodôntica e avaliação para aparelho",icon:c.jsx(Jc,{})},{id:"estetica-dental",name:"Estética Dental",price:150,description:"Clareamento, facetas e harmonização do sorriso",icon:c.jsx(t1,{})},{id:"implantes",name:"Implantes",price:150,description:"Avaliação para implantes dentários",icon:c.jsx(Ms,{})},{id:"emergencia",name:"Emergência",price:200,description:"Atendimento urgente para dor e traumas",icon:c.jsx(Z4,{})},{id:"retorno",name:"Retorno",price:80,description:"Consulta de retorno para acompanhamento",icon:c.jsx(g3,{})}],kC=({selectedService:e,onServiceChange:t,error:n,...r})=>c.jsxs("div",{"data-field":"service",...r,children:[c.jsx(yC,{children:CC.map(o=>c.jsxs(xC,{$selected:e===o.id,onClick:()=>t(o.id,o.name,o.price),role:"button",tabIndex:0,onKeyDown:i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),t(o.id,o.name,o.price))},children:[c.jsx(wC,{$selected:e===o.id,children:o.icon}),c.jsx(bC,{$selected:e===o.id,children:o.name}),c.jsx(SC,{children:qd(o.price)}),c.jsx(jC,{children:o.description})]},o.id))}),n&&c.jsx("div",{style:{color:"#e74c3c",fontSize:"0.875rem",marginTop:"1rem",fontWeight:"500",padding:"0.75rem 1rem",background:"rgba(231, 76, 60, 0.1)",borderRadius:"8px",border:"1px solid rgba(231, 76, 60, 0.2)"},children:n})]}),PC=e=>new Date(e).getDay()===0,EC=e=>{const t=new Date(e),n=new Date;return n.setHours(0,0,0,0),t<n},TC=()=>["08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30"],zC=()=>["08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30"],AC=e=>{const n=new Date(e).getDay();return n===0?[]:n===6?zC():TC()},RC=e=>{const t=new Date(e).toISOString().split("T")[0];return{"2024-12-26":["09:00","10:30","14:00","15:30"],"2024-12-27":["08:30","11:00","14:30","16:00"],"2024-12-28":["09:30","10:00","15:00","17:00"]}[t]||[]},DC=e=>{const t=AC(e),n=RC(e);return t.filter(r=>!n.includes(r))},MC=()=>{const e=new Date;return e.setDate(e.getDate()+1),e.toISOString().split("T")[0]},$C=()=>{const e=new Date;return e.setMonth(e.getMonth()+3),e.toISOString().split("T")[0]},NC=x.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,LC=x.label`
  font-weight: 600;
  color: var(--text-dark);
  font-size: 0.95rem;
`,IC=x.input`
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
`,OC=x.div`
  color: var(--error-color);
  font-size: 0.875rem;
  margin-top: 0.25rem;
`,VC=x.div`
  font-size: 0.875rem;
  color: var(--text-gray);
  margin-top: 0.25rem;
`,FC=({value:e,onChange:t,onBlur:n,error:r,label:o="Data preferida",disabled:i=!1,required:a=!0})=>{const s=MC(),l=$C(),u=f=>{const p=f.target.value;p&&PC(p)||p&&EC(p)||t(p)},d=()=>{if(!e)return"Selecione uma data disponível";const f=new Date(e),p=f.toLocaleDateString("pt-BR",{weekday:"long"}),h=f.toLocaleDateString("pt-BR",{day:"numeric",month:"long",year:"numeric"});return`${p.charAt(0).toUpperCase()+p.slice(1)}, ${h}`};return c.jsxs(NC,{children:[c.jsxs(LC,{htmlFor:"date-picker",children:[o,a&&c.jsx("span",{style:{color:"var(--error-color)"},children:"*"})]}),c.jsx(IC,{id:"date-picker",type:"date",value:e||"",onChange:u,onBlur:n,min:s,max:l,disabled:i,$hasError:!!r,required:a}),r&&c.jsx(OC,{children:r}),!r&&c.jsx(VC,{children:d()})]})},Bl=x.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Ul=x.label`
  font-weight: 600;
  color: var(--text-dark);
  font-size: 0.95rem;
`,Om=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 0.75rem;
  margin-top: 0.5rem;
`,Vm=x.button`
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
`,Fm=x.div`
  padding: 2rem;
  text-align: center;
  color: var(--text-gray);
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px dashed #dee2e6;
`,_C=x.div`
  color: var(--error-color);
  font-size: 0.875rem;
  margin-top: 0.25rem;
`,_m=x.div`
  margin-bottom: 1.5rem;
`,Bm=x.h4`
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
`,BC=({selectedDate:e,selectedTime:t,onTimeSelect:n,error:r,disabled:o=!1,required:i=!0})=>{if(!e)return c.jsxs(Bl,{children:[c.jsxs(Ul,{children:["Horário preferido",i&&c.jsx("span",{style:{color:"var(--error-color)"},children:"*"})]}),c.jsx(Fm,{children:"Selecione uma data para ver os horários disponíveis"})]});const a=DC(e);if(a.length===0)return c.jsxs(Bl,{children:[c.jsxs(Ul,{children:["Horário preferido",i&&c.jsx("span",{style:{color:"var(--error-color)"},children:"*"})]}),c.jsx(Fm,{children:"Nenhum horário disponível para esta data"})]});const s=a.filter(p=>parseInt(p.split(":")[0])<12),l=a.filter(p=>parseInt(p.split(":")[0])>=12),f=new Date(e).getDay()===6;return c.jsxs(Bl,{children:[c.jsxs(Ul,{children:["Horário preferido",i&&c.jsx("span",{style:{color:"var(--error-color)"},children:"*"})]}),s.length>0&&c.jsxs(_m,{children:[c.jsx(Bm,{children:"🌅 Manhã"}),c.jsx(Om,{children:s.map(p=>c.jsx(Vm,{type:"button",$selected:t===p,onClick:()=>n(p),disabled:o,children:p},p))})]}),l.length>0&&!f&&c.jsxs(_m,{children:[c.jsx(Bm,{children:"🌇 Tarde"}),c.jsx(Om,{children:l.map(p=>c.jsx(Vm,{type:"button",$selected:t===p,onClick:()=>n(p),disabled:o,children:p},p))})]}),r&&c.jsx(_C,{children:r})]})},Um=x.div`
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
`,UC=x.div`
  background: linear-gradient(135deg, var(--primary-color-light), #f8f9fa);
  border: 2px solid var(--primary-color);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`,HC=x.h4`
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
`,WC=x(R.div)`
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
`,Hm=[{value:"no-preference",label:"Sem preferência"},{value:"maria",label:"Dra. Maria"},{value:"joao",label:"Dr. João"}],GC=[{value:"none",label:"Não possuo convênio"},{value:"unimed",label:"Unimed"},{value:"bradesco",label:"Bradesco Saúde"},{value:"sulamerica",label:"SulAmérica"}],qC={name:"",email:"",phone:"",birthDate:"",service:"",serviceName:"",servicePrice:0,date:"",time:"",professional:"no-preference",isReturningPatient:!1,insurance:"none",observations:""},YC={name:zv,email:Av,phone:Rv,date:Dv,time:e=>ss(e,"Horário"),service:e=>ss(e,"Tipo de consulta")},KC=()=>{var w;const[e,t]=b.useState(!1),{sendAppointment:n}=$v(),{values:r,errors:o,isSubmitting:i,handleChange:a,handleBlur:s,handleSubmit:l,setValue:u}=uC(qC,YC),d=j=>{const v=dC(j);u("phone",v)},f=(j,v,m)=>{u("service",j),u("serviceName",v),u("servicePrice",m)},p=async j=>{setTimeout(()=>{n(j),t(!0),localStorage.removeItem("appointmentForm")},2e3)},h=()=>{t(!1),window.location.reload()};if(e)return c.jsx(Um,{children:c.jsxs(WC,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.5},children:[c.jsx(n3,{}),c.jsx("h3",{children:"Agendamento Enviado!"}),c.jsx("p",{children:"Sua solicitação de agendamento foi enviada via WhatsApp. Em breve entraremos em contato para confirmar a consulta."}),c.jsx($t,{variant:"primary",onClick:h,children:"Novo Agendamento"})]})});const y=r.serviceName&&r.date&&r.time;return c.jsx(Um,{children:c.jsxs("form",{onSubmit:l(p),children:[c.jsxs(yo,{children:[c.jsx(xo,{children:"1. Dados Pessoais"}),c.jsxs(Zi,{children:[c.jsx(fn,{name:"name",label:"Nome completo",value:r.name,onChange:a("name"),onBlur:s("name"),error:o.name,placeholder:"Digite seu nome completo",required:!0}),c.jsx(fn,{name:"email",label:"Email",type:"email",value:r.email,onChange:a("email"),onBlur:s("email"),error:o.email,placeholder:"seu@email.com",required:!0}),c.jsx(fn,{name:"phone",label:"Telefone/WhatsApp",value:r.phone,onChange:d,onBlur:s("phone"),error:o.phone,placeholder:"(11) 99999-9999",required:!0}),c.jsx(fn,{name:"birthDate",label:"Data de nascimento",type:"date",value:r.birthDate,onChange:a("birthDate"),placeholder:"Opcional"})]})]}),c.jsxs(yo,{children:[c.jsx(xo,{children:"2. Tipo de Consulta"}),c.jsx(kC,{selectedService:r.service,onServiceChange:f,error:o.service,"data-field":"service"})]}),c.jsxs(yo,{children:[c.jsx(xo,{children:"3. Data e Horário"}),c.jsxs(Zi,{$columns:"1fr",children:[c.jsx(FC,{name:"date",value:r.date,onChange:a("date"),onBlur:s("date"),error:o.date,"data-field":"date"}),c.jsx(BC,{name:"time",selectedDate:r.date,selectedTime:r.time,onTimeSelect:a("time"),error:o.time,"data-field":"time"})]})]}),c.jsxs(yo,{children:[c.jsx(xo,{children:"4. Preferências"}),c.jsxs(Zi,{children:[c.jsx(ls,{label:"Profissional preferido",options:Hm,value:r.professional,onChange:a("professional")}),c.jsxs("div",{children:[c.jsx("label",{style:{fontWeight:600,color:"var(--text-dark)",fontSize:"0.95rem"},children:"Já é nosso paciente?"}),c.jsxs(Zi,{style:{marginTop:"0.5rem"},children:[c.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontWeight:"normal"},children:[c.jsx("input",{type:"radio",name:"isReturningPatient",checked:r.isReturningPatient===!0,onChange:()=>u("isReturningPatient",!0)}),"Sim"]}),c.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontWeight:"normal"},children:[c.jsx("input",{type:"radio",name:"isReturningPatient",checked:r.isReturningPatient===!1,onChange:()=>u("isReturningPatient",!1)}),"Não"]})]})]})]}),c.jsx("div",{style:{marginTop:"1.5rem"},children:c.jsx(ls,{label:"Convênio",options:GC,value:r.insurance,onChange:a("insurance")})})]}),c.jsxs(yo,{children:[c.jsx(xo,{children:"5. Observações"}),c.jsx(Yd,{label:"Informações adicionais",value:r.observations,onChange:a("observations"),placeholder:"Descreva sintomas, alergias ou outras informações importantes...",rows:4})]}),y&&c.jsxs(UC,{children:[c.jsx(HC,{children:"📋 Resumo do Agendamento"}),c.jsxs(wo,{children:[c.jsx("span",{children:"Paciente:"}),c.jsx("span",{children:Mv(r.name)})]}),c.jsxs(wo,{children:[c.jsx("span",{children:"Tipo de consulta:"}),c.jsx("span",{children:r.serviceName})]}),c.jsxs(wo,{children:[c.jsx("span",{children:"Data e horário:"}),c.jsxs("span",{children:[new Date(r.date).toLocaleDateString("pt-BR")," às ",r.time]})]}),c.jsxs(wo,{children:[c.jsx("span",{children:"Profissional:"}),c.jsx("span",{children:(w=Hm.find(j=>j.value===r.professional))==null?void 0:w.label})]}),c.jsxs(wo,{children:[c.jsx("span",{children:"Valor da consulta:"}),c.jsx("span",{children:qd(r.servicePrice)})]})]}),c.jsx($t,{type:"submit",variant:"primary",size:"large",disabled:i,style:{width:"100%"},children:i?c.jsxs(c.Fragment,{children:[c.jsx(n1,{style:{animation:"spin 1s linear infinite",marginRight:"0.5rem"}}),"Enviando agendamento..."]}):"Agendar Consulta via WhatsApp"})]})})},QC=x.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
`,XC=x.section`
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
`,Wm=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
`,ZC=x(R.h1)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,JC=x(R.p)`
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`,ek=x(R.div)`
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
`,tk=x.section`
  padding: 4rem 0;
`,nk=x.div`
  text-align: center;
  margin-bottom: 3rem;
`,rk=x.h2`
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1rem;
`,ok=x.p`
  font-size: 1.1rem;
  color: var(--text-gray);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`,ik=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,Gm=x.div`
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
`,qm=x.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,Ym=x.ul`
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
`,ak=()=>c.jsx(Mn,{children:c.jsxs(QC,{children:[c.jsx(XC,{children:c.jsxs(Wm,{children:[c.jsx(ZC,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},children:"Agende sua Consulta Online"}),c.jsx(JC,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:"Sistema rápido e prático para agendar sua consulta odontológica. Escolha o horário ideal e receba confirmação imediata via WhatsApp."}),c.jsxs(ek,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:[c.jsxs(Ji,{children:[c.jsx(yi,{}),c.jsx("h3",{children:"Agendamento Imediato"}),c.jsx("p",{children:"Veja horários disponíveis em tempo real"})]}),c.jsxs(Ji,{children:[c.jsx(Xa,{}),c.jsx("h3",{children:"Horários Flexíveis"}),c.jsx("p",{children:"Manhã, tarde e sábado disponíveis"})]}),c.jsxs(Ji,{children:[c.jsx(Jc,{}),c.jsx("h3",{children:"Escolha o Profissional"}),c.jsx("p",{children:"Dra. Maria, Dr. João ou sem preferência"})]}),c.jsxs(Ji,{children:[c.jsx(Ut,{}),c.jsx("h3",{children:"Confirmação via WhatsApp"}),c.jsx("p",{children:"Receba todos os detalhes no seu celular"})]})]})]})}),c.jsx(tk,{children:c.jsxs(Wm,{children:[c.jsxs(nk,{children:[c.jsx(rk,{children:"Complete os Dados"}),c.jsx(ok,{children:"Preencha o formulário abaixo com suas informações e preferências. Após o envio, entraremos em contato via WhatsApp para confirmar sua consulta."})]}),c.jsxs(ik,{children:[c.jsxs(Gm,{children:[c.jsxs(qm,{children:[c.jsx(Xa,{}),"Horários de Atendimento"]}),c.jsxs(Ym,{children:[c.jsx("li",{children:"Segunda a Sexta: 8h às 12h e 14h às 18h"}),c.jsx("li",{children:"Sábado: 8h às 12h"}),c.jsx("li",{children:"Domingo: Fechado"}),c.jsx("li",{children:"Emergências: Consulte disponibilidade"})]})]}),c.jsxs(Gm,{children:[c.jsxs(qm,{children:[c.jsx(Jc,{}),"Nossos Profissionais"]}),c.jsxs(Ym,{children:[c.jsx("li",{children:"Dra. Maria - Ortodontia e Implantodontia"}),c.jsx("li",{children:"Dr. João - Endodontia e Estética"}),c.jsx("li",{children:"Equipe especializada e atualizada"}),c.jsx("li",{children:"Atendimento humanizado"})]})]})]}),c.jsx(KC,{})]})})]})}),zt=[{id:1,src:"/gallery/alinhamento.jpg",thumbnail:"/gallery/alinhamento.jpg",category:"ortodontia",title:"Alinhamento completo em 18 meses",description:"Transformação completa do sorriso através de tratamento ortodôntico"},{id:2,src:"/gallery/aparelho.jpg",thumbnail:"/gallery/aparelho.jpg",category:"ortodontia",title:"Aparelho estético discreto",description:"Resultado natural com aparelho transparente"},{id:3,src:"/gallery/correção de mordida.jpg",thumbnail:"/gallery/correção de mordida.jpg",category:"ortodontia",title:"Correção de mordida cruzada",description:"Problema funcional resolvido com ortodontia"},{id:4,src:"/gallery/resultado em adolecente.jpg",thumbnail:"/gallery/resultado em adolecente.jpg",category:"ortodontia",title:"Resultado em adolescente",description:"Tratamento ortodôntico preventivo bem-sucedido"},{id:5,src:"/gallery/clareamento.jpg",thumbnail:"/gallery/clareamento.jpg",category:"estetica",title:"Clareamento com 8 tons a mais",description:"Resultado impressionante do clareamento profissional"},{id:6,src:"/gallery/facetas de porcelana.jpg",thumbnail:"/gallery/facetas de porcelana.jpg",category:"estetica",title:"Facetas de porcelana naturais",description:"Transformação sutil e natural com facetas"},{id:7,src:"/gallery/harmonização de sorriso.jpg",thumbnail:"/gallery/harmonização de sorriso.jpg",category:"estetica",title:"Harmonização do sorriso",description:"Equilíbrio perfeito entre forma e função"},{id:8,src:"/gallery/transformação.jpg",thumbnail:"/gallery/transformação.jpg",category:"estetica",title:"Transformação completa",description:"Mudança radical com tratamento estético integrado"},{id:9,src:"/gallery/correção de formato.jpg",thumbnail:"/gallery/correção de formato.jpg",category:"estetica",title:"Correção de formato",description:"Dentes uniformes através de procedimento estético"},{id:10,src:"/gallery/implante unitário.jpg",thumbnail:"/gallery/implante unitário.jpg",category:"implantes",title:"Implante unitário anterior",description:"Substituição de dente perdido com implante"},{id:11,src:"/gallery/Protocolo superior.jpg",thumbnail:"/gallery/Protocolo superior.jpg",category:"implantes",title:"Protocolo superior completo",description:"Reabilitação total com implantes múltiplos"},{id:12,src:"/gallery/exorto ósseo.jpg",thumbnail:"/gallery/exorto ósseo.jpg",category:"implantes",title:"Enxerto ósseo bem-sucedido",description:"Preparação perfeita para implante"},{id:13,src:"/gallery/prótese sobre implante.jpg",thumbnail:"/gallery/prótese sobre implante.jpg",category:"implantes",title:"Prótese sobre implante",description:"Resultado final com prótese fixa"},{id:14,src:"/gallery/restauração.jpg",thumbnail:"/gallery/restauração.jpg",category:"geral",title:"Restauração em resina",description:"Reparo funcional e estético"},{id:15,src:"/gallery/limpeza profunda.jpg",thumbnail:"/gallery/limpeza profunda.jpg",category:"geral",title:"Limpeza profunda",description:"Resultado da profilaxia profissional"},{id:16,src:"/gallery/Tratamento de caries.jpg",thumbnail:"/gallery/Tratamento de caries.jpg",category:"geral",title:"Tratamento de cárie",description:"Dente salvo com restauração conservadora"},{id:17,src:"/gallery/consultório.jpg",thumbnail:"/gallery/consultório.jpg",category:"instalacoes",title:"Consultório moderno",description:"Ambiente acolhedor e tecnologia avançada"},{id:18,src:"/gallery/A imagem sala de espera.jpg",thumbnail:"/gallery/A imagem sala de espera.jpg",category:"instalacoes",title:"Sala de espera aconchegante",description:"Conforto e tranquilidade para nossos pacientes"}],Km=[{id:"todos",name:"Todos",count:zt.length},{id:"ortodontia",name:"Ortodontia",count:zt.filter(e=>e.category==="ortodontia").length},{id:"estetica",name:"Estética Dental",count:zt.filter(e=>e.category==="estetica").length},{id:"implantes",name:"Implantes",count:zt.filter(e=>e.category==="implantes").length},{id:"geral",name:"Clínica Geral",count:zt.filter(e=>e.category==="geral").length},{id:"instalacoes",name:"Instalações",count:zt.filter(e=>e.category==="instalacoes").length}],sk=x.div`
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
`,lk=x(R.button)`
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
`,ck=x.span`
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
`,uk=x.div`
  position: relative;
  
  @media (max-width: 768px) {
    background: var(--light-gray);
    margin: 0 -1rem;
    padding: 1rem 0;
  }
`,dk=({categories:e,activeFilter:t,onFilterChange:n,imageCounts:r})=>c.jsx(uk,{children:c.jsx(sk,{children:e.map(o=>{const i=t===o.id,a=r[o.id]||0;return c.jsxs(lk,{$active:i,onClick:()=>n(o.id),whileHover:{scale:1.05},whileTap:{scale:.95},initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.3},children:[o.name,c.jsx(ck,{$active:i,children:a})]},o.id)})})}),fk=(e,t=.85,n=500,r=400)=>new Promise((o,i)=>{const a=new Image;a.crossOrigin="anonymous",a.onload=()=>{const s=document.createElement("canvas"),l=s.getContext("2d");let{width:u,height:d}=a;u>d?u>n&&(d*=n/u,u=n):d>r&&(u*=r/d,d=r),s.width=u,s.height=d,l.imageSmoothingEnabled=!0,l.imageSmoothingQuality="high",l.drawImage(a,0,0,u,d);const f=s.toDataURL("image/jpeg",t);o(f)},a.onerror=()=>{o(e)},a.src=e}),pk=e=>new Promise(t=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>{const r=document.createElement("canvas"),o=r.getContext("2d");r.width=20,r.height=15,o.filter="blur(2px)",o.drawImage(n,0,0,20,15);const i=r.toDataURL("image/jpeg",.1);t(i)},n.onerror=()=>{const r=document.createElement("canvas"),o=r.getContext("2d");r.width=20,r.height=15,o.fillStyle="#e0e0e0",o.fillRect(0,0,20,15),t(r.toDataURL())},n.src=e}),mk=x.div`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius: 12px;
  background: #f0f0f0;
`,hk=x(R.img)`
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
`,gk=x.div`
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
`,vk=x.div`
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
`,yk=x.div`
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
`,xk=({src:e,alt:t,onClick:n,index:r})=>{const[o,i]=b.useState(!1),[a,s]=b.useState(!1),[l,u]=b.useState(!1),d=b.useRef(),[f,p]=b.useState(null),[h,y]=b.useState(null);b.useEffect(()=>{(async()=>{try{const g=await fk(e,.85,500,400);p(g);const S=await pk(e);y(S)}catch(g){p(e),console.warn("Image optimization failed, using original:",g)}})()},[e]),b.useEffect(()=>{const m=new IntersectionObserver(([g])=>{g.isIntersecting&&(s(!0),m.unobserve(g.target))},{threshold:.1,rootMargin:"100px"});return d.current&&m.observe(d.current),()=>{d.current&&m.unobserve(d.current)}},[]);const w=()=>{i(!0)},j=()=>{u(!0),i(!0)},v=()=>{n&&!l&&n(r)};return c.jsx(R.div,{ref:d,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4,delay:r*.1},children:c.jsxs(mk,{onClick:v,children:[!o&&!l&&c.jsx(vk,{children:c.jsx(Dp,{})}),l&&c.jsxs(yk,{children:[c.jsx(Dp,{style:{opacity:.3}}),c.jsx("div",{style:{marginTop:"0.5rem"},children:"Erro ao carregar imagem"})]}),c.jsx(gk,{$bgImage:h,$show:a&&!o&&!l}),a&&!l&&f&&c.jsx(hk,{src:f,alt:t,onLoad:w,onError:j,initial:{opacity:0},animate:{opacity:o?1:0},transition:{duration:.4},style:{display:o?"block":"none"}})]})})},wk=x(R.div)`
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
`,bk=x(R.div)`
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
`;const Sk=x.button`
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
`,Qm=x.button`
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
`,jk=x.div`
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
`;const Ck=x.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,kk=x.div`
  display: flex;
  gap: 0.5rem;
`,Pk=x.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${e=>e.active?"rgba(255, 255, 255, 0.9)":"rgba(255, 255, 255, 0.3)"};
  transition: all 0.2s ease;
`,Ek=x(R.div)`
  position: absolute;
  bottom: -80px;
  left: 0;
  right: 0;
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    bottom: -120px;
  }
`,Tk=x.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,zk=x.p`
  font-size: 0.875rem;
  opacity: 0.8;
  line-height: 1.4;
  max-width: 600px;
  margin: 0 auto;
`,Ak=x.div`
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
`,Rk=({images:e,currentIndex:t,onClose:n,onNext:r,onPrev:o})=>{const[i,a]=b.useState(!1);b.useEffect(()=>{const f=p=>{switch(p.key){case"Escape":n();break;case"ArrowLeft":o();break;case"ArrowRight":r();break}};return document.addEventListener("keydown",f),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",f),document.body.style.overflow="unset"}},[n,r,o]),b.useEffect(()=>{a(!1)},[t]);const s=(f,p)=>{p.offset.x>50?o():p.offset.x<-50&&r()},l=e[t],u=t===0,d=t===e.length-1;return l?c.jsx(Wd,{children:c.jsx(wk,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:n,children:c.jsxs(bk,{onClick:f=>f.stopPropagation(),initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.3},drag:"x",dragConstraints:{left:0,right:0},onPanEnd:s,dragElastic:.1,children:[c.jsx(Sk,{onClick:n,"aria-label":"Fechar lightbox",children:c.jsx(xi,{})}),c.jsxs(Ak,{children:[t+1," de ",e.length]}),c.jsx(Qm,{className:"prev",onClick:o,disabled:u,"aria-label":"Imagem anterior",children:c.jsx(o3,{})}),c.jsx("img",{src:l.src,alt:l.title,loading:"eager",onLoad:()=>a(!0),style:{maxWidth:"100%",maxHeight:"100%",width:"auto",height:"auto",objectFit:"contain",borderRadius:"12px",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.4)"}}),c.jsx(Qm,{className:"next",onClick:r,disabled:d,"aria-label":"Próxima imagem",children:c.jsx(i3,{})}),c.jsx(jk,{children:c.jsx(Ck,{children:c.jsx(kk,{children:e.slice(Math.max(0,t-2),Math.min(e.length,t+3)).map((f,p)=>{const h=Math.max(0,t-2)+p;return c.jsx(Pk,{active:h===t},h)})})})}),c.jsxs(Ek,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.3},children:[c.jsx(Tk,{children:l.title}),c.jsx(zk,{children:l.description})]})]})})}):null},Dk=Zg`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,Mk=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`,$k=x.div`
  width: 40px;
  height: 40px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid var(--primary-color);
  border-radius: 50%;
  animation: ${Dk} 1s linear infinite;
`,Nk=x.p`
  margin-left: 1rem;
  color: var(--text-gray);
  font-size: 0.9rem;
`,Lk=({text:e="Carregando mais imagens..."})=>c.jsxs(Mk,{children:[c.jsx($k,{}),c.jsx(Nk,{children:e})]}),Ik=(e,t=6)=>{const[n,r]=b.useState([]),[o,i]=b.useState(!0),[a,s]=b.useState(!1),[l,u]=b.useState(1);b.useEffect(()=>{r(e.slice(0,t)),u(1),i(e.length>t),s(!1)},[e,t]);const d=b.useCallback(()=>{a||!o||(s(!0),setTimeout(()=>{const f=l*t,p=f+t,h=e.slice(f,p);h.length>0?(r(y=>[...y,...h]),u(y=>y+1),i(p<e.length)):i(!1),s(!1)},300))},[e,l,t,a,o]);return{displayedItems:n,hasMore:o,loading:a,loadMore:d}},Ok=(e,t={})=>{const[n,r]=b.useState(!1);return b.useEffect(()=>{const o=e.current;if(!o)return;const i=new IntersectionObserver(([a])=>{r(a.isIntersecting)},{threshold:.1,rootMargin:"50px",...t});return i.observe(o),()=>{o&&i.unobserve(o)}},[e,t]),n},Vk=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`,Fk=x.div`
  text-align: center;
  margin-bottom: 3rem;
`,_k=x.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Bk=x.p`
  font-size: 1.125rem;
  color: var(--text-gray);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`,Uk=x(R.div)`
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
`,Hk=x(R.div)`
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-gray);
`,Wk=x.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`,Gk=x.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`,qk=x.p`
  font-size: 1rem;
  opacity: 0.8;
`,Yk=()=>{const[e,t]=b.useState("todos"),[n,r]=b.useState(!1),[o,i]=b.useState(0),a=b.useRef(),s=b.useMemo(()=>e==="todos"?zt:zt.filter(m=>m.category===e),[e]),{displayedItems:l,hasMore:u,loading:d,loadMore:f}=Ik(s,6),p=b.useMemo(()=>{const m={todos:zt.length};return Km.forEach(g=>{g.id!=="todos"&&(m[g.id]=zt.filter(S=>S.category===g.id).length)}),m},[]),h=m=>{i(m),r(!0)},y=()=>{r(!1)},w=()=>{const m=o<s.length-1?o+1:0;i(m)},j=()=>{const m=o>0?o-1:s.length-1;i(m)},v=Ok(a,{threshold:.1,rootMargin:"100px"});return b.useEffect(()=>{v&&u&&!d&&f()},[v,u,d,f]),b.useEffect(()=>{n&&s.length>0&&[o-1>=0?o-1:s.length-1,o+1<s.length?o+1:0].forEach(g=>{const S=new Image;S.src=s[g].src})},[n,o,s]),c.jsxs(Vk,{children:[c.jsxs(Fk,{children:[c.jsx(_k,{children:"Nossa Galeria"}),c.jsx(Bk,{children:"Conheça alguns dos nossos casos de sucesso e veja as transformações que realizamos com carinho e profissionalismo."})]}),c.jsx(dk,{categories:Km,activeFilter:e,onFilterChange:t,imageCounts:p}),c.jsx(Wd,{mode:"wait",children:s.length>0?c.jsxs(c.Fragment,{children:[c.jsx(Uk,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.4,ease:"easeOut"},children:l.map((m,g)=>c.jsx(xk,{src:m.thumbnail||m.src,alt:m.title,index:g,onClick:h},m.id))},e),u&&c.jsx("div",{ref:a,children:d&&c.jsx(Lk,{})})]}):c.jsxs(Hk,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.4},children:[c.jsx(Wk,{children:"🔍"}),c.jsx(Gk,{children:"Nenhuma imagem encontrada"}),c.jsx(qk,{children:"Não temos imagens para esta categoria no momento."})]},"empty")}),n&&c.jsx(Rk,{images:s,currentIndex:o,onClose:y,onNext:w,onPrev:j})]})},Kk=()=>c.jsxs(c.Fragment,{children:[c.jsxs(md,{children:[c.jsx("title",{children:"Galeria de Casos de Sucesso | Clínica Sorriso Perfeito"}),c.jsx("meta",{name:"description",content:"Veja nossa galeria com casos de sucesso em ortodontia, estética dental, implantes e tratamentos odontológicos. Transformações reais de pacientes."}),c.jsx("meta",{name:"keywords",content:"galeria odontológica, casos de sucesso, antes e depois, ortodontia, estética dental, implantes, clareamento"}),c.jsx("meta",{property:"og:title",content:"Galeria de Casos de Sucesso | Clínica Sorriso Perfeito"}),c.jsx("meta",{property:"og:description",content:"Conheça nossos casos de sucesso e transformações em tratamentos odontológicos."}),c.jsx("meta",{property:"og:type",content:"website"})]}),c.jsx(Mn,{children:c.jsx(Yk,{})})]}),cs=[{id:1,slug:"5-dicas-dentes-saudaveis",title:"5 dicas para manter os dentes saudáveis",excerpt:"Descubra as melhores práticas para manter sua saúde bucal em dia e ter um sorriso sempre saudável.",content:`
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
    `,image:"https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",publishDate:"2024-11-28",readTime:"6 min",tags:["implante dentário","reabilitação oral","prótese"],author:"Dr. Roberto Oliveira",seo:{title:"Implante Dentário: Guia Completo 2024 | Clínica Sorriso Perfeito",description:"Tudo sobre implante dentário: procedimento, vantagens, cuidados e durabilidade. Guia completo com informações de especialistas.",keywords:"implante dentário, reabilitação oral, prótese dentária, osseointegração"}}],Ov=x(R.article)`
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
`,Qk=x.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`,Xk=x.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Ov}:hover & {
    transform: scale(1.05);
  }
`,Zk=x.div`
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
`,Jk=x.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,e7=x.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: var(--text-gray);
`,t7=x.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  svg {
    font-size: 0.75rem;
    color: var(--primary-color);
  }
`,n7=x.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,r7=x.p`
  color: var(--text-gray);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex-grow: 1;
`,o7=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
`,i7=x.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--text-gray);

  svg {
    color: var(--primary-color);
    font-size: 0.75rem;
  }
`,a7=x.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,s7=x.span`
  background: var(--primary-color-light);
  color: var(--primary-color);
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
`,l7=x(Ie)`
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.875rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color-dark);
  }
`,c7=e=>new Date(e).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"}),u7=({post:e,index:t})=>c.jsxs(Ov,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.5,delay:t*.1},whileHover:{scale:1.02},children:[c.jsxs(Qk,{children:[c.jsx(Xk,{src:e.image,alt:e.title}),c.jsx(Zk,{})]}),c.jsxs(Jk,{children:[c.jsx(e7,{children:c.jsxs(t7,{children:[c.jsx(yi,{}),c.jsx("span",{children:c7(e.publishDate)})]})}),c.jsx(n7,{children:e.title}),c.jsx(r7,{children:e.excerpt}),c.jsxs(o7,{children:[c.jsxs(i7,{children:[c.jsx(o1,{}),c.jsx("span",{children:e.author})]}),c.jsx(l7,{to:`/blog/${e.slug}`,children:"Ler mais →"})]}),c.jsx(a7,{children:e.tags.slice(0,2).map((n,r)=>c.jsx(s7,{children:n},r))})]})]}),d7=x.div`
  max-width: 500px;
  margin: 0 auto 2rem;
  position: relative;
`,f7=x.input`
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
`,p7=x.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-gray);
  pointer-events: none;

  svg {
    font-size: 1rem;
  }
`,m7=x.button`
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
`,h7=({value:e,onChange:t,placeholder:n="Buscar artigos..."})=>{const[r,o]=b.useState(!1),i=()=>{t("")};return c.jsxs(d7,{children:[c.jsx(p7,{children:c.jsx(y3,{})}),c.jsx(f7,{type:"text",value:e,onChange:a=>t(a.target.value),onFocus:()=>o(!0),onBlur:()=>o(!1),placeholder:n,"aria-label":"Buscar artigos"}),c.jsx(m7,{$visible:e.length>0,onClick:i,"aria-label":"Limpar busca",children:c.jsx(xi,{})})]})},g7=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`,v7=x.div`
  text-align: center;
  margin-bottom: 3rem;
`,y7=x.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,x7=x.p`
  font-size: 1.125rem;
  color: var(--text-gray);
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`,w7=x(R.div)`
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
`,b7=x.div`
  text-align: center;
  margin-bottom: 1rem;
  color: var(--text-gray);
  font-size: 0.875rem;
`,S7=x(R.div)`
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-gray);
`,j7=x.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`,C7=x.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`,k7=x.p`
  font-size: 1rem;
  opacity: 0.8;
`,P7=()=>{const[e,t]=b.useState(""),n=b.useMemo(()=>{if(!e.trim())return cs;const r=e.toLowerCase();return cs.filter(o=>{const i=o.title.toLowerCase().includes(r),a=o.excerpt.toLowerCase().includes(r),s=o.content.toLowerCase().includes(r),l=o.tags.some(u=>u.toLowerCase().includes(r));return i||a||s||l})},[e]);return c.jsxs(g7,{children:[c.jsxs(v7,{children:[c.jsx(y7,{children:"Blog Odontológico"}),c.jsx(x7,{children:"Informações valiosas sobre saúde bucal, dicas de cuidados e as últimas novidades da odontologia moderna."})]}),c.jsx(h7,{value:e,onChange:t,placeholder:"Buscar por título, conteúdo ou tags..."}),e&&c.jsxs(b7,{children:[n.length===0?"Nenhum artigo encontrado":`${n.length} artigo${n.length!==1?"s":""} encontrado${n.length!==1?"s":""}`,e&&` para "${e}"`]}),n.length>0?c.jsx(w7,{layout:!0,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:n.map((r,o)=>c.jsx(u7,{post:r,index:o},r.id))}):c.jsxs(S7,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[c.jsx(j7,{children:"📝"}),c.jsx(C7,{children:e?"Nenhum artigo encontrado":"Nenhum artigo disponível"}),c.jsx(k7,{children:e?"Tente buscar com outros termos ou limpe o filtro para ver todos os artigos.":"Nossos especialistas estão preparando conteúdo incrível para você."})]})]})},E7=()=>c.jsxs(c.Fragment,{children:[c.jsxs(md,{children:[c.jsx("title",{children:"Blog Odontológico | Clínica Sorriso Perfeito"}),c.jsx("meta",{name:"description",content:"Blog com dicas de saúde bucal, cuidados dentários e informações sobre tratamentos odontológicos. Conteúdo atualizado por especialistas."}),c.jsx("meta",{name:"keywords",content:"blog odontológico, saúde bucal, dicas dentárias, cuidados orais, ortodontia, implantes, clareamento dental"}),c.jsx("meta",{property:"og:title",content:"Blog Odontológico | Clínica Sorriso Perfeito"}),c.jsx("meta",{property:"og:description",content:"Informações valiosas sobre saúde bucal e cuidados dentários por especialistas."}),c.jsx("meta",{property:"og:type",content:"website"})]}),c.jsx(Mn,{children:c.jsx(P7,{})})]}),T7=x.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
`,z7=x(Ie)`
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
`,A7=x(R.header)`
  margin-bottom: 2rem;
`,R7=x.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 2rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 250px;
  }
`,D7=x.h1`
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
`,M7=x.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  color: var(--text-gray);
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-color);
`,Xm=x.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;

  svg {
    font-size: 0.75rem;
    color: var(--primary-color);
  }
`,$7=x(R.div)`
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
`,N7=x.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
`,L7=x.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`,I7=x.span`
  background: var(--primary-color-light);
  color: var(--primary-color);
  padding: 0.375rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
  font-weight: 500;
`,O7=x.div`
  background: linear-gradient(135deg, var(--primary-color-light), #f8f9fa);
  border: 2px solid var(--primary-color);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  margin: 2rem 0;
`,V7=x.h3`
  font-size: 1.375rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 1rem;
`,F7=x.p`
  color: var(--text-gray);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`,_7=x.div`
  margin-top: 3rem;
`,B7=x.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
`,U7=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`,H7=x(Ie)`
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
`,W7=x.h4`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
  line-height: 1.4;
`,G7=x.div`
  font-size: 0.75rem;
  color: var(--text-gray);
`,Zm=e=>new Date(e).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"}),q7=()=>{const{slug:e}=H2(),t=cs.find(i=>i.slug===e),{sendGeneralInquiry:n}=$v();if(!t)return c.jsx(i5,{to:"/blog",replace:!0});const r=cs.filter(i=>i.id!==t.id&&i.tags.some(a=>t.tags.includes(a))).slice(0,2),o=i=>i.split(`

`).map((a,s)=>a.startsWith("## ")?`<h2>${a.replace("## ","")}</h2>`:a.startsWith("### ")?`<h3>${a.replace("### ","")}</h3>`:a.startsWith("**")&&a.endsWith("**")?`<blockquote>${a.replace(/\*\*/g,"")}</blockquote>`:`<p>${a}</p>`).join("");return c.jsxs(c.Fragment,{children:[c.jsxs(md,{children:[c.jsx("title",{children:t.seo.title}),c.jsx("meta",{name:"description",content:t.seo.description}),c.jsx("meta",{name:"keywords",content:t.seo.keywords}),c.jsx("meta",{property:"og:title",content:t.title}),c.jsx("meta",{property:"og:description",content:t.excerpt}),c.jsx("meta",{property:"og:image",content:t.image}),c.jsx("meta",{property:"og:type",content:"article"}),c.jsx("meta",{name:"article:published_time",content:t.publishDate}),c.jsx("meta",{name:"article:author",content:t.author}),c.jsx("meta",{name:"article:tag",content:t.tags.join(", ")})]}),c.jsxs(T7,{children:[c.jsxs(z7,{to:"/blog",children:[c.jsx(J4,{}),"Voltar para o blog"]}),c.jsxs(A7,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},children:[c.jsx(R7,{src:t.image,alt:t.title}),c.jsx(D7,{children:t.title}),c.jsxs(M7,{children:[c.jsxs(Xm,{children:[c.jsx(yi,{}),c.jsx("span",{children:Zm(t.publishDate)})]}),c.jsxs(Xm,{children:[c.jsx(o1,{}),c.jsx("span",{children:t.author})]})]})]}),c.jsx($7,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},dangerouslySetInnerHTML:{__html:o(t.content)}}),c.jsxs(O7,{children:[c.jsx(V7,{children:"Precisa de cuidados odontológicos?"}),c.jsx(F7,{children:"Nossa equipe de especialistas está pronta para cuidar do seu sorriso. Agende uma consulta e receba o melhor atendimento."}),c.jsx($t,{variant:"whatsapp",size:"large",onClick:()=>n('Olá! Li o artigo sobre "'+t.title+'" e gostaria de agendar uma consulta.'),children:"Agendar Consulta"})]}),c.jsxs(N7,{children:[c.jsx(L7,{children:t.tags.map((i,a)=>c.jsx(I7,{children:i},a))}),r.length>0&&c.jsxs(_7,{children:[c.jsx(B7,{children:"Artigos relacionados"}),c.jsx(U7,{children:r.map(i=>c.jsxs(H7,{to:`/blog/${i.slug}`,children:[c.jsx(W7,{children:i.title}),c.jsx(G7,{children:Zm(i.publishDate)})]},i.id))})]})]})]})]})},Y7=()=>c.jsx(Mn,{children:c.jsx(q7,{})}),K7=()=>{const[e,t]=b.useState({name:"",email:"",phone:"",subject:"",message:""}),[n,r]=b.useState({}),[o,i]=b.useState(!1),[a,s]=b.useState(!1),l=[{value:"informacoes",label:"Informações"},{value:"orcamento",label:"Orçamento"},{value:"reclamacao",label:"Reclamação"},{value:"elogio",label:"Elogio"}],u=(h,y)=>{let w="";switch(h){case"name":!y||!y.trim()?w="Nome é obrigatório":y.trim().length<2?w="Nome deve ter pelo menos 2 caracteres":y.trim().length>50?w="Nome deve ter no máximo 50 caracteres":/^[a-zA-ZÀ-ſ\s]+$/.test(y.trim())||(w="Nome deve conter apenas letras e espaços");break;case"email":!y||!y.trim()?w="Email é obrigatório":/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(y.trim())?y.length>100&&(w="Email deve ter no máximo 100 caracteres"):w="Por favor, insira um email válido";break;case"phone":if(!y||!y.trim())w="Telefone é obrigatório";else{const j=y.replace(/\D/g,"");j.length<10?w="Telefone deve ter pelo menos 10 dígitos":j.length>11?w="Telefone deve ter no máximo 11 dígitos":j.length===10&&!["11","12","13","14","15","16","17","18","19","21","22","24","27","28","31","32","33","34","35","37","38","41","42","43","44","45","46","47","48","49","51","53","54","55","61","62","63","64","65","66","67","68","69","71","73","74","75","77","79","81","87","82","83","84","85","86","88","89","91","93","94","95","96","97","98","99"].includes(j.substring(0,2))&&(w="Código de área inválido")}break;case"subject":(!y||y==="")&&(w="Assunto é obrigatório");break;case"message":!y||!y.trim()?w="Mensagem é obrigatória":y.trim().length<10?w="Mensagem deve ter pelo menos 10 caracteres":y.trim().length>1e3&&(w="Mensagem deve ter no máximo 1000 caracteres");break}return w},d=(h,y)=>{let w=y;h==="name"&&(w=y.replace(/\s+/g," ")),t(v=>({...v,[h]:w}));const j=u(h,w);r(v=>({...v,[h]:j}))},f=()=>{const h={};return Object.keys(e).forEach(y=>{const w=u(y,e[y]);w&&(h[y]=w)}),r(h),Object.keys(h).length===0},p=async h=>{var y;if(h.preventDefault(),!!f()){i(!0);try{await new Promise(v=>setTimeout(v,2e3)),s(!0),t({name:"",email:"",phone:"",subject:"",message:""});const w=`Olá! Recebi seu contato através do site.

*Nome:* ${e.name}
*Email:* ${e.email}
*Telefone:* ${e.phone}
*Assunto:* ${(y=l.find(v=>v.value===e.subject))==null?void 0:y.label}
*Mensagem:* ${e.message}`,j=`https://wa.me/555591679300?text=${encodeURIComponent(w)}`;setTimeout(()=>{window.open(j,"_blank")},1e3)}catch(w){console.error("Erro ao enviar formulário:",w)}finally{i(!1)}}};return a?c.jsxs("div",{className:"contact-success",children:[c.jsx("div",{className:"success-icon",children:"✓"}),c.jsx("h3",{children:"Mensagem enviada com sucesso!"}),c.jsx("p",{children:"Obrigado pelo seu contato. Em breve você será redirecionado para o WhatsApp para darmos continuidade ao atendimento."}),c.jsx("button",{className:"btn btn-primary",onClick:()=>s(!1),children:"Enviar nova mensagem"})]}):c.jsxs("form",{className:"contact-form",onSubmit:p,children:[c.jsxs("div",{className:"form-grid",children:[c.jsx("div",{className:"form-row",children:c.jsx(fn,{label:"Nome Completo",placeholder:"Digite seu nome completo",value:e.name,onChange:h=>d("name",h),error:n.name,maxLength:50,required:!0})}),c.jsxs("div",{className:"form-row-double",children:[c.jsx(fn,{label:"Email",type:"email",placeholder:"seu@email.com",value:e.email,onChange:h=>d("email",h),error:n.email,maxLength:100,required:!0}),c.jsx(fn,{label:"Telefone",placeholder:"(11) 99999-9999",value:e.phone,onChange:h=>d("phone",h),error:n.phone,mask:"phone",required:!0})]}),c.jsx("div",{className:"form-row",children:c.jsx(ls,{label:"Assunto",placeholder:"Selecione o assunto",value:e.subject,onChange:h=>d("subject",h),options:l,error:n.subject,required:!0})}),c.jsx("div",{className:"form-row",children:c.jsx(Yd,{label:"Mensagem",placeholder:"Digite sua mensagem... (mínimo 10 caracteres)",value:e.message,onChange:h=>d("message",h),error:n.message,rows:5,maxLength:1e3,required:!0})})]}),c.jsx("button",{type:"submit",className:"btn btn-primary btn-large",disabled:o,children:o?"Enviando...":"Enviar Mensagem"})]})},Q7=()=>c.jsx(Mn,{children:c.jsxs("div",{className:"contact-page",children:[c.jsx("div",{className:"hero-section hero-contact",children:c.jsx("div",{className:"container",children:c.jsxs("div",{className:"hero-content",children:[c.jsx("h1",{className:"hero-title",children:"Entre em Contato"}),c.jsx("p",{className:"hero-subtitle",children:"Estamos prontos para cuidar do seu sorriso. Fale conosco!"})]})})}),c.jsx("section",{className:"contact-content",children:c.jsx("div",{className:"container",children:c.jsxs("div",{className:"contact-grid",children:[c.jsxs("div",{className:"contact-info",children:[c.jsxs("div",{className:"info-section",children:[c.jsx("h2",{children:"Informações de Contato"}),c.jsxs("div",{className:"info-item",children:[c.jsx("div",{className:"info-icon",children:c.jsx(Sd,{})}),c.jsxs("div",{className:"info-details",children:[c.jsx("h3",{children:"Endereço"}),c.jsxs("p",{children:["Rua das Flores, 123",c.jsx("br",{}),"Vila Madalena, São Paulo - SP",c.jsx("br",{}),"CEP: 05462-000"]})]})]}),c.jsxs("div",{className:"info-item",children:[c.jsx("div",{className:"info-icon",children:c.jsx(Za,{})}),c.jsxs("div",{className:"info-details",children:[c.jsx("h3",{children:"Telefone"}),c.jsx("p",{children:"(55) 99 9167-9300"})]})]}),c.jsxs("div",{className:"info-item",children:[c.jsx("div",{className:"info-icon",children:c.jsx(Ut,{})}),c.jsxs("div",{className:"info-details",children:[c.jsx("h3",{children:"WhatsApp"}),c.jsx("p",{children:c.jsx("a",{href:"https://wa.me/555591679300",target:"_blank",rel:"noopener noreferrer",className:"whatsapp-link",children:"(55) 55 9167-9300"})})]})]})]}),c.jsxs("div",{className:"hours-section",children:[c.jsx("h3",{children:"Horários de Funcionamento"}),c.jsxs("div",{className:"hours-list",children:[c.jsxs("div",{className:"hours-item",children:[c.jsx("span",{className:"day",children:"Segunda a Sexta"}),c.jsx("span",{className:"time",children:"8h às 18h"})]}),c.jsxs("div",{className:"hours-item",children:[c.jsx("span",{className:"day",children:"Sábado"}),c.jsx("span",{className:"time",children:"8h às 12h"})]}),c.jsxs("div",{className:"hours-item",children:[c.jsx("span",{className:"day",children:"Domingo"}),c.jsx("span",{className:"time",children:"Fechado"})]})]})]})]}),c.jsxs("div",{className:"contact-form-section",children:[c.jsx("h2",{children:"Envie sua mensagem"}),c.jsx("p",{children:"Preencha o formulário abaixo e entraremos em contato o mais breve possível."}),c.jsx(K7,{})]})]})})}),c.jsx("section",{className:"map-section",children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"section-title",children:"Nossa Localização"}),c.jsx("div",{className:"map-container",children:c.jsxs("div",{className:"map-placeholder",children:[c.jsx("div",{className:"map-icon",children:c.jsx(m3,{})}),c.jsxs("p",{children:["Av. Brigadeiro Faria Lima, 3477 - Itaim Bibi",c.jsx("br",{}),"São Paulo - SP, 04538-133"]}),c.jsx("a",{href:"https://maps.google.com/?q=Av.+Brigadeiro+Faria+Lima,+3477+Itaim+Bibi+São+Paulo",target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",children:"Ver no Google Maps"})]})})]})}),c.jsx("section",{className:"emergency-contact",children:c.jsx("div",{className:"container",children:c.jsxs("div",{className:"emergency-card",children:[c.jsx("div",{className:"emergency-icon",children:c.jsx(c3,{})}),c.jsxs("div",{className:"emergency-content",children:[c.jsx("h3",{children:"Emergências Odontológicas"}),c.jsx("p",{children:"Para urgências fora do horário comercial, entre em contato pelo WhatsApp ou deixe uma mensagem no formulário informando que é uma emergência."}),c.jsx("a",{href:"https://wa.me/555591679300?text=EMERGÊNCIA - Preciso de atendimento urgente",className:"btn btn-emergency",target:"_blank",rel:"noopener noreferrer",children:"WhatsApp Emergência"})]})]})})})]})});function X7(){return c.jsx(E3,{children:c.jsxs(Pg,{children:[c.jsx(G4,{}),c.jsxs(m5,{children:[c.jsx(q4,{}),c.jsxs(s5,{children:[c.jsx(Pt,{path:"/",element:c.jsx(Hj,{})}),c.jsx(Pt,{path:"/sobre",element:c.jsx(Yj,{})}),c.jsx(Pt,{path:"/servicos",element:c.jsx(lC,{})}),c.jsx(Pt,{path:"/agendamento",element:c.jsx(ak,{})}),c.jsx(Pt,{path:"/galeria",element:c.jsx(Kk,{})}),c.jsx(Pt,{path:"/blog",element:c.jsx(E7,{})}),c.jsx(Pt,{path:"/blog/:slug",element:c.jsx(Y7,{})}),c.jsx(Pt,{path:"/contato",element:c.jsx(Q7,{})}),c.jsx(Pt,{path:"*",element:c.jsx($3,{})})]}),c.jsx(_3,{})]})]})})}Wl.createRoot(document.getElementById("root")).render(c.jsx(G.StrictMode,{children:c.jsx(X7,{})}));
