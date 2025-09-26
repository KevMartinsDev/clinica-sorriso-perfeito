const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["js/index-CaMeNv5h.js","js/vendor-AC2dI90m.js","js/ui-BSqZ8KaP.js","js/utils-bdYuHuxv.js"])))=>i.map(i=>d[i]);
import{r as e,a,u as r,R as i,L as t,b as o,c as n,N as s,H as d,d as l,e as c}from"./vendor-AC2dI90m.js";import{H as m,a as p}from"./utils-bdYuHuxv.js";import{f as h,l as g,d as x,m as u,a as f,A as b}from"./ui-BSqZ8KaP.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&a(e)}).observe(document,{childList:!0,subtree:!0})}function a(e){if(e.ep)return;e.ep=!0;const a=function(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?a.credentials="include":"anonymous"===e.crossOrigin?a.credentials="omit":a.credentials="same-origin",a}(e);fetch(e.href,a)}}();var v={exports:{}},w={},y=e,j=Symbol.for("react.element"),z=Symbol.for("react.fragment"),k=Object.prototype.hasOwnProperty,C=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$={key:!0,ref:!0,__self:!0,__source:!0};function E(e,a,r){var i,t={},o=null,n=null;for(i in void 0!==r&&(o=""+r),void 0!==a.key&&(o=""+a.key),void 0!==a.ref&&(n=a.ref),a)k.call(a,i)&&!$.hasOwnProperty(i)&&(t[i]=a[i]);if(e&&e.defaultProps)for(i in a=e.defaultProps)void 0===t[i]&&(t[i]=a[i]);return{$$typeof:j,type:e,key:o,ref:n,props:t,_owner:C.current}}w.Fragment=z,w.jsx=E,w.jsxs=E,v.exports=w;var S=v.exports,A={},P=a;A.createRoot=P.createRoot,A.hydrateRoot=P.hydrateRoot;const B=h`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary-color: #2E8B57;
    --primary-color-light: #4CAF70;
    --primary-color-dark: #1B5E3F;
    --secondary-color: #4169E1;
    --accent-color: #FFD700;
    --text-dark: #1a1a1a;
    --text-medium: #444444;
    --text-light: #666666;
    --text-gray: #666666;
    --text-color: #1a1a1a;
    --text-secondary: #666666;
    --white: #ffffff;
    --light-gray: #f8f9fa;
    --medium-gray: #e9ecef;
    --dark-gray: #6c757d;
    --light-bg: #f8f9fa;
    --success-color: #28a745;
    --warning-color: #ffc107;
    --error-color: #dc3545;
    --border-color: #e9ecef;
    --focus-color: #0066cc;
    --hover-bg: #f5f5f5;

    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 1.5rem;
    --space-xl: 2rem;
    --space-2xl: 3rem;
    --space-3xl: 4rem;

    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 2rem;
    --font-size-4xl: 2.5rem;

    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;
    --radius-full: 9999px;

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.15);
    --shadow-xl: 0 16px 32px rgba(0, 0, 0, 0.2);
  }

  body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.7;
    color: var(--text-dark);
    background-color: var(--white);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 1rem;
    color: var(--text-dark);
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1.25rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }

  h5 {
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
  }

  h6 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.7;
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
    display: block;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  html {
    scroll-behavior: smooth;
  }

  *:focus {
    outline: 2px solid var(--focus-color);
    outline-offset: 2px;
    border-radius: var(--radius-sm);
  }

  a:focus:not(:focus-visible),
  button:focus:not(:focus-visible) {
    outline: none;
  }

  a:focus-visible,
  button:focus-visible,
  input:focus-visible,
  textarea:focus-visible,
  select:focus-visible {
    outline: 3px solid var(--focus-color);
    outline-offset: 2px;
    border-radius: var(--radius-sm);
    box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.2);
  }

  @media (prefers-contrast: high) {
    :root {
      --text-dark: #000000;
      --text-light: #333333;
      --border-color: #000000;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  @media print {
    * {
      background: transparent !important;
      color: black !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }
  }

  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }
`,N=()=>{const{pathname:a}=r();return e.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[a]),null};var D={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},R=i.createContext&&i.createContext(D),I=function(){return I=Object.assign||function(e){for(var a,r=1,i=arguments.length;r<i;r++)for(var t in a=arguments[r])Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);return e},I.apply(this,arguments)},M=function(e,a){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&a.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(i=Object.getOwnPropertySymbols(e);t<i.length;t++)a.indexOf(i[t])<0&&Object.prototype.propertyIsEnumerable.call(e,i[t])&&(r[i[t]]=e[i[t]])}return r};function T(e){return e&&e.map(function(e,a){return i.createElement(e.tag,I({key:a},e.attr),T(e.child))})}function O(e){return function(a){return i.createElement(L,I({attr:I({},e.attr)},a),T(e.child))}}function L(e){var a=function(a){var r,t=e.attr,o=e.size,n=e.title,s=M(e,["attr","size","title"]),d=o||a.size||"1em";return a.className&&(r=a.className),e.className&&(r=(r?r+" ":"")+e.className),i.createElement("svg",I({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,t,s,{className:r,style:I(I({color:e.color||a.color},a.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),n&&i.createElement("title",null,n),e.children)};return void 0!==R?i.createElement(R.Consumer,null,function(e){return a(e)}):a(D)}function V(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"}}]})(e)}function F(e){return O({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(e)}function q(e){return O({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"}}]})(e)}function H(e){return O({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}function _(e){return O({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 432c-101.69 0-184-82.29-184-184 0-101.69 82.29-184 184-184 101.69 0 184 82.29 184 184 0 101.69-82.29 184-184 184zm0-312c-70.69 0-128 57.31-128 128s57.31 128 128 128 128-57.31 128-128-57.31-128-128-128zm0 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"}}]})(e)}function Y(e){return O({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"}}]})(e)}function G(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"}}]})(e)}function W(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}}]})(e)}function Q(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"}}]})(e)}function U(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"}}]})(e)}function J(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M510.37 254.79l-12.08-76.26a132.493 132.493 0 0 0-37.16-72.95l-54.76-54.75c-19.73-19.72-45.18-32.7-72.71-37.05l-76.7-12.15c-27.51-4.36-55.69.11-80.52 12.76L107.32 49.6a132.25 132.25 0 0 0-57.79 57.8l-35.1 68.88a132.602 132.602 0 0 0-12.82 80.94l12.08 76.27a132.493 132.493 0 0 0 37.16 72.95l54.76 54.75a132.087 132.087 0 0 0 72.71 37.05l76.7 12.14c27.51 4.36 55.69-.11 80.52-12.75l69.12-35.21a132.302 132.302 0 0 0 57.79-57.8l35.1-68.87c12.71-24.96 17.2-53.3 12.82-80.96zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"}}]})(e)}function K(e){return O({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z"}}]})(e)}function X(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V200.724a48 48 0 0 1 18.387-37.776c24.913-19.529 45.501-35.365 164.2-121.511C199.412 29.17 232.797-.347 256 .003c23.198-.354 56.596 29.172 73.413 41.433 118.687 86.137 139.303 101.995 164.2 121.512A48 48 0 0 1 512 200.724V464zm-65.666-196.605c-2.563-3.728-7.7-4.595-11.339-1.907-22.845 16.873-55.462 40.705-105.582 77.079-16.825 12.266-50.21 41.781-73.413 41.43-23.211.344-56.559-29.143-73.413-41.43-50.114-36.37-82.734-60.204-105.582-77.079-3.639-2.688-8.776-1.821-11.339 1.907l-9.072 13.196a7.998 7.998 0 0 0 1.839 10.967c22.887 16.899 55.454 40.69 105.303 76.868 20.274 14.781 56.524 47.813 92.264 47.573 35.724.242 71.961-32.771 92.263-47.573 49.85-36.179 82.418-59.97 105.303-76.868a7.998 7.998 0 0 0 1.839-10.967l-9.071-13.196z"}}]})(e)}function Z(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}}]})(e)}function ee(e){return O({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"}}]})(e)}function ae(e){return O({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"}}]})(e)}function re(e){return O({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M288 256H96v64h192v-64zm89-151L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 64c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm256 304c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16zm0-200v96c0 8.84-7.16 16-16 16H80c-8.84 0-16-7.16-16-16v-96c0-8.84 7.16-16 16-16h224c8.84 0 16 7.16 16 16z"}}]})(e)}function ie(e){return O({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"}}]})(e)}function te(e){return O({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 492v20H0v-20c0-6.627 5.373-12 12-12h20V120c0-13.255 10.745-24 24-24h88V24c0-13.255 10.745-24 24-24h112c13.255 0 24 10.745 24 24v72h88c13.255 0 24 10.745 24 24v360h20c6.627 0 12 5.373 12 12zM308 192h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zm-168 64h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12zm104 128h-40c-6.627 0-12 5.373-12 12v84h64v-84c0-6.627-5.373-12-12-12zm64-96h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zm-116 12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40zM182 96h26v26a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V96h26a6 6 0 0 0 6-6V70a6 6 0 0 0-6-6h-26V38a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v26h-26a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6z"}}]})(e)}function oe(e){return O({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"}}]})(e)}function ne(e){return O({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 0 0 0 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 0 0 576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z"}}]})(e)}function se(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"}}]})(e)}function de(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"}}]})(e)}function le(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"}}]})(e)}function ce(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 320h-96c-17.6 0-32-14.4-32-32s14.4-32 32-32h96s96-107 96-160-43-96-96-96-96 43-96 96c0 25.5 22.2 63.4 45.3 96H320c-52.9 0-96 43.1-96 96s43.1 96 96 96h96c17.6 0 32 14.4 32 32s-14.4 32-32 32H185.5c-16 24.8-33.8 47.7-47.3 64H416c52.9 0 96-43.1 96-96s-43.1-96-96-96zm0-256c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM96 256c-53 0-96 43-96 96s96 160 96 160 96-107 96-160-43-96-96-96zm0 128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"}}]})(e)}function me(e){return O({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"}}]})(e)}function pe(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"}}]})(e)}function he(e){return O({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"}}]})(e)}function ge(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"}}]})(e)}function xe(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"}}]})(e)}function ue(e){return O({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}function fe(e){return O({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M443.98 96.25c-11.01-45.22-47.11-82.06-92.01-93.72-32.19-8.36-63 5.1-89.14 24.33-3.25 2.39-6.96 3.73-10.5 5.48l28.32 18.21c7.42 4.77 9.58 14.67 4.8 22.11-4.46 6.95-14.27 9.86-22.11 4.8L162.83 12.84c-20.7-10.85-43.38-16.4-66.81-10.31-44.9 11.67-81 48.5-92.01 93.72-10.13 41.62-.42 80.81 21.5 110.43 23.36 31.57 32.68 68.66 36.29 107.35 4.4 47.16 10.33 94.16 20.94 140.32l7.8 33.95c3.19 13.87 15.49 23.7 29.67 23.7 13.97 0 26.15-9.55 29.54-23.16l34.47-138.42c4.56-18.32 20.96-31.16 39.76-31.16s35.2 12.85 39.76 31.16l34.47 138.42c3.39 13.61 15.57 23.16 29.54 23.16 14.18 0 26.48-9.83 29.67-23.7l7.8-33.95c10.61-46.15 16.53-93.16 20.94-140.32 3.61-38.7 12.93-75.78 36.29-107.35 21.95-29.61 31.66-68.8 21.53-110.43z"}}]})(e)}function be(e){return O({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zM104 424c0 13.3 10.7 24 24 24s24-10.7 24-24-10.7-24-24-24-24 10.7-24 24zm216-135.4v49c36.5 7.4 64 39.8 64 78.4v41.7c0 7.6-5.4 14.2-12.9 15.7l-32.2 6.4c-4.3.9-8.5-1.9-9.4-6.3l-3.1-15.7c-.9-4.3 1.9-8.6 6.3-9.4l19.3-3.9V416c0-62.8-96-65.1-96 1.9v26.7l19.3 3.9c4.3.9 7.1 5.1 6.3 9.4l-3.1 15.7c-.9 4.3-5.1 7.1-9.4 6.3l-31.2-4.2c-7.9-1.1-13.8-7.8-13.8-15.9V416c0-38.6 27.5-70.9 64-78.4v-45.2c-2.2.7-4.4 1.1-6.6 1.9-18 6.3-37.3 9.8-57.4 9.8s-39.4-3.5-57.4-9.8c-7.4-2.6-14.9-4.2-22.6-5.2v81.6c23.1 6.9 40 28.1 40 53.4 0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.3 16.9-46.5 40-53.4v-80.4C48.5 301 0 355.8 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-72-56.8-130.3-128-133.8z"}}]})(e)}function ve(e){return O({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}}]})(e)}function we(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M494.2 221.9l-59.8-40.5 13.7-71c2.6-13.2-1.6-26.8-11.1-36.4-9.6-9.5-23.2-13.7-36.2-11.1l-70.9 13.7-40.4-59.9c-15.1-22.3-51.9-22.3-67 0l-40.4 59.9-70.8-13.7C98 60.4 84.5 64.5 75 74.1c-9.5 9.6-13.7 23.1-11.1 36.3l13.7 71-59.8 40.5C6.6 229.5 0 242 0 255.5s6.7 26 17.8 33.5l59.8 40.5-13.7 71c-2.6 13.2 1.6 26.8 11.1 36.3 9.5 9.5 22.9 13.7 36.3 11.1l70.8-13.7 40.4 59.9C230 505.3 242.6 512 256 512s26-6.7 33.5-17.8l40.4-59.9 70.9 13.7c13.4 2.7 26.8-1.6 36.3-11.1 9.5-9.5 13.6-23.1 11.1-36.3l-13.7-71 59.8-40.5c11.1-7.5 17.8-20.1 17.8-33.5-.1-13.6-6.7-26.1-17.9-33.7zm-112.9 85.6l17.6 91.2-91-17.6L256 458l-51.9-77-90.9 17.6 17.6-91.2-76.8-52 76.8-52-17.6-91.2 91 17.6L256 53l51.9 76.9 91-17.6-17.6 91.1 76.8 52-76.8 52.1zM256 152c-57.3 0-104 46.7-104 104s46.7 104 104 104 104-46.7 104-104-46.7-104-104-104zm0 160c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56z"}}]})(e)}const ye=x.button`
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

  ${e=>e.$loading&&g`
    cursor: wait;

    svg:not(.spinner) {
      opacity: 0;
    }
  `}

  ${e=>"small"===e.$size&&g`
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  `}

  ${e=>"medium"===e.$size&&g`
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  `}

  ${e=>"large"===e.$size&&g`
    padding: 1rem 2rem;
    font-size: 1.125rem;
  `}

  ${e=>"primary"===e.$variant&&g`
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

  ${e=>"secondary"===e.$variant&&g`
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

  ${e=>"outline"===e.$variant&&g`
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

  ${e=>"whatsapp"===e.$variant&&g`
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
`,je=x(pe)`
  position: absolute;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,ze=e.memo(({children:a,variant:r="primary",size:i="medium",loading:t=!1,disabled:o=!1,onClick:n,type:s="button",as:d,to:l,href:c,target:m,...p})=>{const h=e.useCallback(e=>{t||o?e.preventDefault():n&&n(e)},[t,o,n]),g={$variant:r,$size:i,$loading:t,disabled:o||t,onClick:h,type:s,as:d,to:l,href:c,target:m,...p};return S.jsxs(ye,{...g,children:[t&&S.jsx(je,{className:"spinner"}),"whatsapp"===r&&!t&&S.jsx(q,{}),a]})});ze.displayName="Button";const ke=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 2rem;
  text-align: center;
  background: var(--light-bg);
`,Ce=x.div`
  font-size: 4rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
`,$e=x.h2`
  font-size: 2rem;
  color: var(--text-color);
  margin-bottom: 1rem;
  font-family: 'Roboto', sans-serif;
`,Ee=x.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.6;
`,Se=x.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;let Ae=class extends e.Component{constructor(e){super(e),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,a){this.setState({error:e,errorInfo:a})}handleReload=()=>{window.location.reload()};handleGoHome=()=>{window.location.href="/"};render(){return this.state.hasError?S.jsxs(ke,{role:"alert",children:[S.jsx(Ce,{children:"⚠️"}),S.jsx($e,{children:"Oops! Algo deu errado"}),S.jsx(Ee,{children:"Ocorreu um erro inesperado. Nossa equipe foi notificada e está trabalhando para resolver o problema. Tente recarregar a página ou voltar para o início."}),S.jsxs(Se,{children:[S.jsx(ze,{variant:"primary",onClick:this.handleReload,children:"Recarregar Página"}),S.jsx(ze,{variant:"outline",onClick:this.handleGoHome,children:"Ir para Início"})]})]}):this.props.children}};const Pe=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
  background: var(--light-bg);
`,Be=x.h1`
  font-size: 8rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0;
  font-family: 'Roboto', sans-serif;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    font-size: 6rem;
  }
`,Ne=x.h2`
  font-size: 2.5rem;
  color: var(--text-color);
  margin: 1rem 0;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,De=x.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Re=x.div`
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
`,Ie=x.ul`
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
`,Me=x.li`
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
`,Te=e.memo(()=>S.jsxs(Pe,{role:"main",children:[S.jsx(Be,{"aria-label":"Erro 404",children:"404"}),S.jsx(Ne,{children:"Página não encontrada"}),S.jsx(De,{children:"A página que você está procurando não existe ou foi movida para outro local. Que tal navegar para uma das nossas páginas principais?"}),S.jsxs(Re,{children:[S.jsx(ze,{as:t,to:"/",variant:"primary",size:"large",children:"Ir para Início"}),S.jsx(ze,{as:t,to:"/agendamento",variant:"secondary",size:"large",children:"Agendar Consulta"})]}),S.jsx("nav",{"aria-label":"Navegação principal",children:S.jsxs(Ie,{children:[S.jsx(Me,{children:S.jsx(t,{to:"/sobre",children:"Sobre Nós"})}),S.jsx(Me,{children:S.jsx(t,{to:"/servicos",children:"Serviços"})}),S.jsx(Me,{children:S.jsx(t,{to:"/galeria",children:"Galeria"})}),S.jsx(Me,{children:S.jsx(t,{to:"/blog",children:"Blog"})}),S.jsx(Me,{children:S.jsx(t,{to:"/contato",children:"Contato"})})]})})]})),Oe=x.div`
  position: fixed !important;
  bottom: 0 !important;
  left: 0 !important;
  right: 0 !important;
  background: var(--white, #fff) !important;
  border-top: 3px solid var(--primary-color, #2E8B57) !important;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1) !important;
  padding: 1.5rem !important;
  z-index: 10000 !important;
  transform: translateY(${e=>e.$hidden?"100%":"0"}) !important;
  transition: transform 0.3s ease !important;
  width: 100% !important;
  box-sizing: border-box !important;

  @media (max-width: 1024px) {
    padding: 1.3rem !important;
  }

  @media (max-width: 768px) {
    padding: 1rem !important;
    border-top-width: 2px !important;
  }

  @media (max-width: 480px) {
    padding: 0.8rem !important;
    left: 0.5rem !important;
    right: 0.5rem !important;
    bottom: 0.5rem !important;
    border-radius: 12px !important;
    border-top: 2px solid var(--primary-color, #2E8B57) !important;
    border: 2px solid var(--primary-color, #2E8B57) !important;
  }
`,Le=x.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    gap: 1.3rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    align-items: center;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`,Ve=x.div`
  font-size: 2rem;
  color: var(--primary-color, #2E8B57);
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,Fe=x.div`
  flex: 1;
  color: var(--text-color, #333);
  line-height: 1.5;

  h4 {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.95rem;
      margin-bottom: 0.3rem;
    }
  }

  p {
    margin: 0;
    font-size: 0.95rem;
    color: var(--text-secondary, #666);

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.85rem;
      line-height: 1.4;
    }
  }

  a {
    color: var(--primary-color, #2E8B57);
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`,qe=x.div`
  display: flex;
  gap: 1rem;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    gap: 0.8rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    gap: 0.8rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.6rem;
    width: 100%;
    max-width: 200px;

    button {
      width: 100%;
      font-size: 0.85rem;
      padding: 0.6rem 1rem;
    }
  }
`,He=x.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--text-secondary, #666);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    top: 0.8rem;
    right: 0.8rem;
    padding: 0.4rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    top: 0.6rem;
    right: 0.6rem;
    padding: 0.3rem;
    font-size: 0.8rem;
  }

  &:hover {
    color: var(--text-color, #333);
    background: var(--light-bg, #f8f9fa);
  }
`,_e="cookie-consent",Ye=e.memo(()=>{const[a,r]=e.useState(!1),{width:i}=(()=>{const[a,r]=e.useState({width:"undefined"!=typeof window?window.innerWidth:1200,height:"undefined"!=typeof window?window.innerHeight:800});return e.useEffect(()=>{if("undefined"==typeof window)return;const e=()=>{r({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),a})();e.useEffect(()=>{if(!localStorage.getItem(_e)){const e=setTimeout(()=>{r(!0)},2e3);return()=>clearTimeout(e)}},[]);return a?S.jsxs(Oe,{$hidden:!a,role:"dialog","aria-labelledby":"cookie-title","aria-describedby":"cookie-description",style:{position:"fixed",bottom:i<=480?"0.5rem":"0",left:i<=480?"0.5rem":"0",right:i<=480?"0.5rem":"0",borderRadius:i<=480?"12px":"0",border:i<=480?"2px solid #2E8B57":"3px solid #2E8B57",borderTop:i<=480?"2px solid #2E8B57":"3px solid #2E8B57",padding:i<=1024?i<=768?i<=480?"0.6rem":"0.8rem":"1rem":"1.2rem",zIndex:1e4,width:i<=480?"auto":"100%",maxWidth:"100vw",boxSizing:"border-box"},children:[S.jsx(He,{onClick:()=>{r(!1)},"aria-label":"Fechar banner de cookies",children:S.jsx(ue,{})}),S.jsxs(Le,{style:{flexDirection:i<=768?"column":"row",alignItems:"center",textAlign:i<=768?"center":"left",gap:i<=1024?i<=768?i<=480?"0.5rem":"0.8rem":"1rem":"1.2rem"},children:[S.jsx(Ve,{style:{fontSize:i<=768?i<=480?"1.2rem":"1.4rem":"1.8rem"},children:S.jsx(J,{})}),S.jsxs(Fe,{children:[S.jsx("h4",{id:"cookie-title",style:{fontSize:i<=768?i<=480?"0.85rem":"0.95rem":"1rem",marginBottom:i<=480?"0.2rem":"0.4rem"},children:"Cookies e Privacidade"}),S.jsxs("p",{id:"cookie-description",style:{fontSize:i<=768?i<=480?"0.75rem":"0.85rem":"0.9rem",lineHeight:i<=480?"1.3":"1.4"},children:["Utilizamos cookies para melhorar sua experiência e analisar nosso tráfego. Ao continuar navegando, você concorda com nossa"," ",S.jsx("a",{href:"/politica-privacidade",target:"_blank",rel:"noopener noreferrer",children:"Política de Privacidade"}),"."]})]}),S.jsxs(qe,{style:{flexDirection:i<=480?"column":"row",width:i<=768?"100%":"auto",maxWidth:i<=480?"180px":"none",gap:i<=1024?i<=768?i<=480?"0.4rem":"0.6rem":"0.8rem":"1rem"},children:[S.jsx(ze,{variant:"primary",size:"small",onClick:()=>{localStorage.setItem(_e,"accepted"),r(!1),"undefined"!=typeof window&&window.gtag&&window.gtag("consent","update",{analytics_storage:"granted"})},"aria-describedby":"cookie-description",style:{width:i<=480?"100%":"auto",fontSize:i<=480?"0.75rem":"0.85rem",padding:i<=480?"0.5rem 0.8rem":"0.7rem 1rem"},children:"Aceitar"}),S.jsx(ze,{variant:"outline",size:"small",onClick:()=>{localStorage.setItem(_e,"declined"),r(!1),"undefined"!=typeof window&&window.gtag&&window.gtag("consent","update",{analytics_storage:"denied"})},"aria-describedby":"cookie-description",style:{width:i<=480?"100%":"auto",fontSize:i<=480?"0.75rem":"0.85rem",padding:i<=480?"0.5rem 0.8rem":"0.7rem 1rem"},children:"Recusar"})]})]})]}):null}),Ge=x.header`
  background: var(--white);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`,We=x.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,Qe=x(t)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--primary-color);
  text-decoration: none;
  outline: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  svg {
    font-size: 2rem;
  }
`,Ue=x.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`,Je=x(t)`
  color: var(--text-dark);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;
  outline: none;

  ${e=>e.$active&&"\n    color: var(--primary-color);\n    background: rgba(46, 139, 87, 0.1);\n  "}

  &:hover {
    color: var(--primary-color);
    background: rgba(46, 139, 87, 0.1);
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`,Ke=x.div`
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
`;const Xe=x.a`
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
  outline: none;

  &:hover {
    background: #128C7E;
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`,Ze=x.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--primary-color);
  cursor: pointer;
  outline: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    display: block;
  }
`,ea=x.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--white);
  border-top: 1px solid #eee;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  ${e=>e.$isOpen&&"\n    @media (max-width: 768px) {\n      display: block;\n    }\n  "}
`,aa=x(t)`
  display: block;
  color: var(--text-dark);
  text-decoration: none;
  padding: 1rem 2rem;
  border-bottom: 1px solid #eee;
  font-weight: 500;
  outline: none;

  ${e=>e.$active&&"\n    color: var(--primary-color);\n    background: rgba(46, 139, 87, 0.1);\n  "}

  &:hover {
    color: var(--primary-color);
    background: rgba(46, 139, 87, 0.1);
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;x.div`
  padding: 1rem 2rem;
  border-bottom: 1px solid #eee;
`,x.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-dark);
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-weight: 500;
  outline: none;

  &:hover {
    color: var(--primary-color);
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;const ra=x.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: #25D366;
  color: white;
  padding: 1rem;
  text-decoration: none;
  font-weight: 500;
  outline: none;

  &:hover {
    background: #128C7E;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`,ia=()=>{const[a,i]=e.useState(!1),t=r(),o=[{path:"/",label:"Início"},{path:"/sobre",label:"Sobre"},{path:"/servicos",label:"Serviços"},{path:"/agendamento",label:"Agendamento"},{path:"/galeria",label:"Galeria"},{path:"/blog",label:"Blog"},{path:"/contato",label:"Contato"}],n=()=>{i(!1)};return S.jsxs(Ge,{children:[S.jsxs(We,{children:[S.jsxs(Qe,{to:"/",children:[S.jsx(fe,{}),"Sorriso Perfeito"]}),S.jsx(Ue,{children:o.map(e=>S.jsx(Je,{to:e.path,$active:t.pathname===e.path,children:e.label},e.path))}),S.jsx(Ke,{children:S.jsxs(Xe,{href:"https://wa.me/555591679300",target:"_blank",children:[S.jsx(q,{}),"WhatsApp"]})}),S.jsx(Ze,{onClick:()=>{i(!a)},children:a?S.jsx(ue,{}):S.jsx(H,{})})]}),S.jsxs(ea,{$isOpen:a,children:[o.map(e=>S.jsx(aa,{to:e.path,$active:t.pathname===e.path,onClick:n,children:e.label},e.path)),S.jsxs(ra,{href:"https://wa.me/555591679300",target:"_blank",children:[S.jsx(q,{}),"WhatsApp Contato"]})]})]})},ta=x.footer`
  background: var(--primary-color);
  color: var(--white);
  padding: 3rem 0 1rem 0;
`,oa=x.div`
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
`,na=x.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,sa=x.div`
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
`,da=x.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--accent-color);
`,la=x.div`
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
`,ca=x.a`
  color: var(--white);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-color);
  }
`,ma=x.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,pa=x.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,ha=x.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,ga=x(t)`
  color: var(--white);
  text-decoration: none;
  padding: 0.25rem 0;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-color);
  }
`,xa=x.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,ua=x.a`
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
`,fa=x.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 2rem;
  padding-top: 1rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
`,ba=()=>{const e=(new Date).getFullYear();return S.jsxs(ta,{children:[S.jsxs(oa,{children:[S.jsxs(na,{children:[S.jsxs(sa,{children:[S.jsx(fe,{}),"Sorriso Perfeito"]}),S.jsx("p",{children:"Cuidando do seu sorriso com excelência, tecnologia e carinho. Sua saúde bucal é nossa prioridade."}),S.jsxs(xa,{children:[S.jsx(ua,{href:"https://www.instagram.com/",target:"_blank",rel:"noopener noreferrer",children:S.jsx(F,{})}),S.jsx(ua,{href:"https://www.facebook.com/",target:"_blank",rel:"noopener noreferrer",children:S.jsx(V,{})})]})]}),S.jsxs(na,{children:[S.jsx(da,{children:"Contato"}),S.jsxs(la,{children:[S.jsx(oe,{}),S.jsxs("div",{children:["Av. Brigadeiro Faria Lima, 3477",S.jsx("br",{}),"Itaim Bibi, São Paulo - SP",S.jsx("br",{}),"CEP: 04538-133"]})]}),S.jsxs(la,{children:[S.jsx(de,{}),S.jsx(ca,{href:"tel:+555591679300",children:"(55) 55 9167-9300"})]})]}),S.jsx(na,{children:S.jsxs(pa,{children:[S.jsxs(ha,{children:[S.jsx(da,{children:"Horários"}),S.jsxs(la,{children:[S.jsx(Q,{}),S.jsxs("div",{children:[S.jsx("strong",{children:"Segunda à Sexta:"}),S.jsx("br",{}),"08:00 - 18:00",S.jsx("br",{}),S.jsx("br",{}),S.jsx("strong",{children:"Sábado:"}),S.jsx("br",{}),"08:00 - 12:00",S.jsx("br",{}),S.jsx("br",{}),S.jsx("strong",{children:"Domingo:"}),S.jsx("br",{}),"Fechado"]})]})]}),S.jsxs(ha,{children:[S.jsx(da,{children:"Links Rápidos"}),S.jsx(ma,{children:[{path:"/",label:"Início"},{path:"/sobre",label:"Sobre Nós"},{path:"/servicos",label:"Serviços"},{path:"/agendamento",label:"Agendamento"},{path:"/galeria",label:"Galeria"},{path:"/blog",label:"Blog"},{path:"/contato",label:"Contato"}].map(e=>S.jsx(ga,{to:e.path,children:e.label},e.path))})]})]})})]}),S.jsx(fa,{children:S.jsxs("p",{children:["© ",e," Clínica Sorriso Perfeito. Todos os direitos reservados."]})})]})},va=x.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,wa=x.main`
  flex: 1;
  padding-top: 0;
`,ya=({children:e})=>S.jsxs(va,{children:[S.jsx(ia,{}),S.jsx(wa,{children:e}),S.jsx(ba,{})]}),ja=u`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`,za=u`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,ka=u`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,Ca=x.div`
  position: relative;
  overflow: hidden;
  background-color: var(--light-gray);
  border-radius: var(--radius-md);

  ${e=>e.$aspectRatio&&`\n    aspect-ratio: ${e.$aspectRatio};\n  `}

  ${e=>e.$width&&`\n    width: ${"number"==typeof e.$width?`${e.$width}px`:e.$width};\n  `}

  ${e=>e.$height&&`\n    height: ${"number"==typeof e.$height?`${e.$height}px`:e.$height};\n  `}

  ${e=>!e.$width&&!e.$height&&!e.$aspectRatio&&"\n    width: 100%;\n    height: 200px;\n  "}
`,$a=x.img.withConfig({shouldForwardProp:e=>!["$objectFit","$loaded"].includes(e)})`
  width: 100%;
  height: 100%;
  object-fit: ${e=>e.$objectFit};
  transition: opacity 0.3s ease-in-out;
  opacity: ${e=>e.$loaded?1:0};

  ${e=>e.$loaded&&g`
    animation: ${za} 0.3s ease-in-out;
  `}
`,Ea=x.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #f0f0f0 0px, #e0e0e0 40px, #f0f0f0 80px);
  background-size: 600px;

  ${g`
    animation: ${ja} 1.2s ease-in-out infinite;
  `}
`,Sa=x.div`
  width: 24px;
  height: 24px;
  border: 2px solid var(--light-gray);
  border-top: 2px solid var(--primary-color);
  border-radius: 50%;

  ${g`
    animation: ${ka} 1s linear infinite;
  `}
`,Aa=x.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--light-gray);
  color: var(--text-light);
  font-size: var(--font-size-sm);
  text-align: center;
  padding: var(--space-md);
`,Pa=({src:a,alt:r,width:i,height:t,className:o,loading:n="lazy",sizes:s,priority:d=!1,onLoad:l,onError:c,placeholder:m=!0,aspectRatio:p,objectFit:h="cover",quality:g=80,...x})=>{const[u,f]=e.useState("loading"),[b,v]=e.useState(""),w=e.useRef(null),y=e.useRef(null);e.useEffect(()=>{const e=w.current;return"lazy"!==n||d?v(a):(y.current=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(v(a),y.current?.unobserve(e.target))})},{rootMargin:"50px",threshold:.1}),e&&y.current.observe(e)),()=>{y.current&&e&&y.current.unobserve(e)}},[a,n,d]);const j=s||"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";return S.jsxs(Ca,{ref:w,$aspectRatio:p,$width:i,$height:t,className:o,...x,children:["loading"===u&&m&&S.jsx(Ea,{children:S.jsx(Sa,{})}),"error"===u&&S.jsx(Aa,{children:"Erro ao carregar imagem"}),b&&S.jsx($a,{src:b,srcSet:(z=b,[320,640,768,1024,1280,1920].map(e=>`${((e,a)=>e.includes("pexels.com")||e.includes("unsplash.com")?e.includes("pexels.com")?`${e.split("?")[0]}?auto=compress&cs=tinysrgb&w=${a}&h=${Math.round(.75*a)}&fit=crop`:e.includes("unsplash.com")?`${e}?auto=format&fit=crop&w=${a}&h=${Math.round(.75*a)}&q=${g}`:e:e)(z,e)} ${e}w`).join(", ")),sizes:j,alt:r,width:i,height:t,loading:n,onLoad:e=>{f("loaded"),l?.(e)},onError:e=>{f("error"),c?.(e)},$objectFit:h,$loaded:"loaded"===u,decoding:"async",fetchpriority:d?"high":"auto"})]});var z},Ba=x.section`
  background: linear-gradient(135deg, #f8f9fa 0%, #e8f5e8 100%);
  padding: 4rem 0;
  min-height: 80vh;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 2rem 0;
    min-height: 70vh;
  }
`,Na=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 3rem;
    padding: 0 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 0 0.75rem;
    gap: 1.5rem;
  }
`,Da=x(f.div).withConfig({shouldForwardProp:e=>!["variants"].includes(e)})`
  @media (max-width: 768px) {
    order: 2;
  }
`,Ra=x(f.h1).withConfig({shouldForwardProp:e=>!["variants"].includes(e)})`
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    line-height: 1.3;
  }

  @media (max-width: 360px) {
    font-size: 1.75rem;
  }
`,Ia=x(f.p).withConfig({shouldForwardProp:e=>!["variants"].includes(e)})`
  font-size: 1.25rem;
  color: var(--text-gray);
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`,Ma=x(f.ul).withConfig({shouldForwardProp:e=>!["variants"].includes(e)})`
  list-style: none;
  margin: 2rem 0;
  padding: 0;
`,Ta=x(f.li).withConfig({shouldForwardProp:e=>!["variants"].includes(e)})`
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
`,Oa=x(f.div).withConfig({shouldForwardProp:e=>!["variants"].includes(e)})`
  margin-top: 2.5rem;
`,La=x(f.div).withConfig({shouldForwardProp:e=>!["variants"].includes(e)})`
  min-height: 500px;
  border-radius: 20px;
  box-shadow: var(--shadow-xl);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    order: 1;
    min-height: 300px;
  }

  @media (max-width: 480px) {
    min-height: 250px;
    border-radius: 16px;
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
    z-index: 1;

    @media (max-width: 480px) {
      border-radius: 16px;
    }
  }
`,Va=x(f.div).withConfig({shouldForwardProp:e=>!["variants"].includes(e)})`
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
`,Fa=x.h4`
  color: var(--primary-color);
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
`,qa=x.p`
  color: var(--text-gray);
  margin: 0;
  font-size: 0.9rem;
`,Ha=()=>{const e={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6}}};return S.jsx(Ba,{role:"banner","aria-labelledby":"hero-title",children:S.jsxs(Na,{children:[S.jsxs(Da,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},initial:"hidden",animate:"visible",children:[S.jsx(Ra,{id:"hero-title",variants:e,as:"h1",children:"Transformamos sorrisos há mais de 10 anos"}),S.jsx(Ia,{variants:e,as:"p","aria-describedby":"hero-title",children:"Cuidamos da saúde bucal de toda sua família com carinho, tecnologia e profissionalismo."}),S.jsx(Ma,{variants:e,role:"list","aria-label":"Nossos diferenciais",children:["Tratamentos sem dor","Tecnologia de ponta","Ambiente acolhedor","Agendamento online 24h"].map((a,r)=>S.jsxs(Ta,{variants:e,role:"listitem",children:[S.jsx(W,{"aria-hidden":"true"}),S.jsx("span",{children:a})]},r))}),S.jsx(Oa,{variants:e,children:S.jsxs(ze,{size:"large",onClick:()=>{const e=encodeURIComponent("Olá! Gostaria de agendar uma consulta.");window.open(`https://wa.me/555591679300?text=${e}`,"_blank")},"data-testid":"cta-button","aria-label":"Agendar consulta pelo WhatsApp",type:"button",children:[S.jsx(Y,{"aria-hidden":"true"}),"Agende sua consulta"]})})]}),S.jsxs(La,{variants:{hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1,transition:{duration:.8}}},initial:"hidden",animate:"visible",role:"img","aria-label":"Ambiente da clínica odontológica",children:[S.jsx(Pa,{src:"https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg",alt:"Consultório odontológico moderno e acolhedor da Clínica Sorriso Perfeito",aspectRatio:"4/3",objectFit:"cover",priority:!0,sizes:"(max-width: 768px) 100vw, 50vw",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"20px"}}),S.jsxs(Va,{variants:{hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{delay:1,duration:.6}}},initial:"hidden",animate:"visible",role:"complementary","aria-labelledby":"emergency-title",children:[S.jsx(Fa,{id:"emergency-title",children:"Atendimento 24h"}),S.jsx(qa,{children:"Emergências atendidas a qualquer hora"})]})]})]})})},_a=[{id:1,title:"Clínica Geral",description:"Cuidados essenciais para sua saúde bucal",price:"A partir de R$ 120",icon:fe,color:"#2E8B57",features:["Limpeza","Restaurações","Tratamento de cáries"]},{id:2,title:"Ortodontia",description:"Alinhamento perfeito do seu sorriso",price:"A partir de R$ 150",icon:me,color:"#4169E1",features:["Aparelhos fixos","Aparelhos móveis","Invisalign"]},{id:3,title:"Estética Dental",description:"Transforme seu sorriso com naturalidade",price:"A partir de R$ 680",icon:he,color:"#FF6B35",features:["Clareamento","Facetas","Harmonização"]},{id:4,title:"Implantes",description:"Recupere a função e estética dos dentes",price:"A partir de R$ 200",icon:function(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"}}]})(e)},color:"#8A2BE2",features:["Implante unitário","Prótese total","Carga imediata"]}],Ya=x.div.withConfig({shouldForwardProp:e=>!["variant","clickable","variants","fullHeight"].includes(e)})`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,Ga=x.section`
  padding: 5rem 0;
  background: #ffffff;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`,Wa=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,Qa=x.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`,Ua=x(f.h2).withConfig({shouldForwardProp:e=>!["variants","initial","whileInView","viewport","transition"].includes(e)})`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Ja=x(f.p).withConfig({shouldForwardProp:e=>!["variants","initial","whileInView","viewport","transition"].includes(e)})`
  font-size: 1.1rem;
  color: var(--text-gray);
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Ka=x.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  /* Tablet - 2x2 layout */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  /* Mobile - 1x1x1x1 layout */
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1.2rem;
  }
`,Xa=x(f.div).withConfig({shouldForwardProp:e=>!["$color","variant","clickable"].includes(e)})`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.12);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15),
                0 8px 16px rgba(0, 0, 0, 0.1),
                0 0 0 1px rgba(255, 255, 255, 0.05);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${e=>e.$color};
    transition: height 0.3s ease;
  }

  &:hover::before {
    height: 6px;
    box-shadow: 0 2px 8px ${e=>`${e.$color}30`};
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,Za=x.div`
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

  ${Xa}:hover & {
    transform: scale(1.1);
    background: ${e=>e.$color};
    color: white;
  }
`,er=x.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
`,ar=x.p`
  color: var(--text-gray);
  margin-bottom: 1rem;
  line-height: 1.6;
`,rr=x.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
`,ir=x.ul`
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
`,tr=x(f.div).withConfig({shouldForwardProp:e=>!["variants","initial","whileInView","viewport","transition"].includes(e)})`
  text-align: center;
  margin-top: 3rem;
`,or=x.button`
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
`,nr=()=>{const e=o(),a={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6}}},r=a=>{e(`/servicos#${a}`)};return S.jsx(Ga,{role:"region","aria-labelledby":"services-title",children:S.jsxs(Wa,{children:[S.jsxs(Qa,{children:[S.jsx(Ua,{id:"services-title",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},as:"h2",children:"Nossos Serviços"}),S.jsx(Ja,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1},as:"p",children:"Oferecemos tratamentos completos para toda sua família com tecnologia avançada e cuidado personalizado"})]}),S.jsx(f.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},initial:"hidden",whileInView:"visible",viewport:{once:!0},role:"grid","aria-label":"Lista de serviços odontológicos",children:S.jsx(Ka,{children:_a.map(e=>{const i=e.icon;return S.jsxs(Xa,{$color:e.color,variant:"elevated",clickable:!0,onClick:()=>r(e.id),onKeyDown:a=>{"Enter"!==a.key&&" "!==a.key||(a.preventDefault(),r(e.id))},variants:a,"data-testid":`service-card-${e.id}`,role:"gridcell",tabIndex:0,"aria-label":`${e.title} - ${e.price} - Clique para ver mais detalhes`,children:[S.jsx(Za,{$color:e.color,"aria-hidden":"true",children:S.jsx(i,{})}),S.jsx(er,{as:"h3",children:e.title}),S.jsx(ar,{children:e.description}),S.jsx(rr,{"data-testid":`service-price-${e.id}`,"aria-label":`Preço: ${e.price}`,children:e.price}),S.jsx(ir,{role:"list","aria-label":"Características do serviço",children:e.features.map((e,a)=>S.jsx("li",{role:"listitem",children:e},a))})]},e.id)})})}),S.jsx(tr,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},children:S.jsx(or,{onClick:()=>{e("/servicos")},"aria-label":"Ver página completa de todos os serviços",type:"button",children:"Ver todos os serviços"})})]})})},sr=[{id:1,name:"Maria Santos",age:34,text:"Depois de anos com medo de dentista, a Dra. Maria me devolveu a confiança. Tratamento sem dor e resultado incrível!",rating:5,image:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"},{id:2,name:"Roberto Silva",subtitle:"pai do Lucas",text:"Meu filho adorou a consulta. Ambiente super acolhedor e profissionais que sabem lidar com crianças.",rating:5,image:"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"},{id:3,name:"Ana Costa",age:45,text:"Fiz meu implante aqui e o resultado superou expectativas. Equipe técnica excepcional!",rating:5,image:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"}],dr=x.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e8f5e8 100%);

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`,lr=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,cr=x.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`,mr=x(f.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,pr=x(f.p)`
  font-size: 1.1rem;
  color: var(--text-gray);
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,hr=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,gr=x(Ya)`
  position: relative;
  text-align: left;
  height: 100%;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15),
                0 8px 16px rgba(0, 0, 0, 0.1),
                0 0 0 1px rgba(255, 255, 255, 0.05);
  }
`,xr=x.div`
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
`,ur=x.p`
  font-size: 1.1rem;
  color: var(--text-dark);
  line-height: 1.6;
  margin: 1.5rem 0 2rem 0;
  font-style: italic;
  position: relative;
`,fr=x.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
`,br=x.div`
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
`,vr=x.div`
  flex: 1;
`,wr=x.h4`
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-dark);
`,yr=x.p`
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-gray);
`,jr=x.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 0.5rem;
`,zr=x(he)`
  color: #ffd700;
  font-size: 1rem;
`,kr=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
  text-align: center;
`,Cr=x(f.div)`
  background: var(--white);
  padding: 2rem;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15),
                0 8px 16px rgba(0, 0, 0, 0.1),
                0 0 0 1px rgba(255, 255, 255, 0.05);
  }
`,$r=x.div`
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`,Er=x.div`
  font-size: 1.1rem;
  color: var(--text-gray);
  font-weight: 500;
`,Sr=()=>{const e={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6}}};return S.jsx(dr,{children:S.jsxs(lr,{children:[S.jsxs(cr,{children:[S.jsx(mr,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:"O que nossos pacientes dizem"}),S.jsx(pr,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1},children:"Depoimentos reais de pessoas que transformaram seus sorrisos conosco"})]}),S.jsx(f.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},initial:"hidden",whileInView:"visible",viewport:{once:!0},children:S.jsx(hr,{children:sr.map((a,r)=>{return S.jsxs(gr,{variant:"elevated",fullHeight:!0,variants:e,"data-testid":`testimonial-${a.id}`,children:[S.jsx(xr,{children:S.jsx(le,{})}),S.jsxs(ur,{"data-testid":`testimonial-text-${a.id}`,children:["“",a.text,"”"]}),S.jsxs(fr,{children:[S.jsx(br,{children:(i=a.name,i.split(" ").map(e=>e[0]).join("").toUpperCase())}),S.jsxs(vr,{children:[S.jsx(wr,{"data-testid":`patient-name-${a.id}`,children:a.name}),S.jsxs(yr,{children:[a.age&&`${a.age} anos`,a.subtitle&&a.subtitle]}),S.jsx(jr,{"data-testid":`rating-${a.id}`,children:(a.rating,Array.from({length:5},(e,a)=>S.jsx(zr,{"data-testid":`star-${a}`,"aria-label":"Avaliação 5 estrelas"},a)))})]})]})]},a.id);var i})})}),S.jsx(kr,{children:[{number:"10+",label:"Anos de Experiência"},{number:"5.000+",label:"Pacientes Atendidos"},{number:"98%",label:"Satisfação dos Clientes"},{number:"24h",label:"Atendimento Emergencial"}].map((e,a)=>S.jsxs(Cr,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1*a},children:[S.jsx($r,{children:e.number}),S.jsx(Er,{children:e.label})]},a))})]})})},Ar=x.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e8f5e8 100%);

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`,Pr=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,Br=x.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`,Nr=x(f.h2).withConfig({shouldForwardProp:e=>!["variants","initial","whileInView","viewport","transition"].includes(e)})`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Dr=x(f.p).withConfig({shouldForwardProp:e=>!["variants","initial","whileInView","viewport","transition"].includes(e)})`
  font-size: 1.1rem;
  color: var(--text-gray);
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Rr=x.div`
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
`,Ir=x(Ya)`
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 300px;
  padding: 2rem 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15),
                0 8px 16px rgba(0, 0, 0, 0.1),
                0 0 0 1px rgba(255, 255, 255, 0.05);
  }
`,Mr=x.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
`,Tr=x.div`
  margin-top: auto;
  padding-top: 1rem;
`,Or=x.div`
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

  ${Ir}:hover & {
    transform: scale(1.1);
    background: ${e=>e.$color};
    color: white;
  }
`,Lr=x.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1rem;
`,Vr=x.p`
  color: var(--text-gray);
  line-height: 1.6;
  margin-bottom: 0;
`,Fr=x.a`
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
`,qr=x.ul`
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
`,Hr=x.span`
  font-weight: 500;
  color: var(--text-dark);
`,_r=x.span`
  color: var(--text-gray);
`,Yr=x(f.div).withConfig({shouldForwardProp:e=>!["variants","initial","whileInView","viewport","transition"].includes(e)})`
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
`,Gr=x.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: white;
  font-weight: 700;
`,Wr=x.p`
  margin-bottom: 1.5rem;
  opacity: 0.9;
`,Qr=x.a`
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
`,Ur=()=>{const e={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6}}};return S.jsx(Ar,{role:"region","aria-labelledby":"contact-title",children:S.jsxs(Pr,{children:[S.jsxs(Br,{children:[S.jsx(Nr,{id:"contact-title",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},as:"h2",children:"Como nos encontrar"}),S.jsx(Dr,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1},as:"p",children:"Estamos sempre prontos para cuidar do seu sorriso"})]}),S.jsx(f.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},initial:"hidden",whileInView:"visible",viewport:{once:!0},children:S.jsxs(Rr,{children:[S.jsx(Ir,{variants:e,variant:"elevated",children:S.jsxs(Mr,{children:[S.jsxs("div",{children:[S.jsx(Or,{$color:"#2E8B57",children:S.jsx(oe,{})}),S.jsx(Lr,{children:"Localização"}),S.jsxs(Vr,{children:["Av. Brig. Faria Lima, 3477",S.jsx("br",{}),"Itaim Bibi, São Paulo - SP",S.jsx("br",{}),"CEP: 04538-133"]})]}),S.jsx(Tr,{children:S.jsxs(Fr,{$color:"#2E8B57",onClick:()=>{window.open("https://maps.google.com/?q=Av.+Brigadeiro+Faria+Lima+3477+Itaim+Bibi+São+Paulo","_blank")},href:"#",children:[S.jsx(ce,{}),"Como chegar"]})})]})}),S.jsx(Ir,{variants:e,variant:"elevated",children:S.jsxs(Mr,{children:[S.jsxs("div",{children:[S.jsx(Or,{$color:"#4169E1",children:S.jsx(de,{})}),S.jsx(Lr,{children:"Telefone"}),S.jsxs(Vr,{children:["Central de Atendimento",S.jsx("br",{}),"(55) 99 9167-9300",S.jsx("br",{}),"Atendimento comercial"]})]}),S.jsx(Tr,{children:S.jsxs(Fr,{$color:"#4169E1",href:"tel:+555591679300",children:[S.jsx(de,{}),"Ligar agora"]})})]})}),S.jsx(Ir,{variants:e,variant:"elevated",children:S.jsxs(Mr,{children:[S.jsxs("div",{children:[S.jsx(Or,{$color:"#25D366",children:S.jsx(q,{})}),S.jsx(Lr,{children:"WhatsApp"}),S.jsxs(Vr,{children:["Agendamentos e dúvidas",S.jsx("br",{}),"(55) 99 9167-9300",S.jsx("br",{}),"Resposta rápida"]})]}),S.jsx(Tr,{children:S.jsxs(Fr,{$color:"#25D366",onClick:()=>{const e=encodeURIComponent("Olá! Gostaria de agendar uma consulta.");window.open(`https://wa.me/555591679300?text=${e}`,"_blank")},href:"#",children:[S.jsx(q,{}),"WhatsApp"]})})]})}),S.jsx(Ir,{variants:e,variant:"elevated",children:S.jsx(Mr,{children:S.jsxs("div",{children:[S.jsx(Or,{$color:"#FF6B35",children:S.jsx(Q,{})}),S.jsx(Lr,{children:"Horários"}),S.jsx(qr,{children:[{day:"Segunda à Sexta",time:"8h às 18h"},{day:"Sábado",time:"8h às 14h"},{day:"Domingo",time:"Fechado"},{day:"Emergências",time:"24h"}].map((e,a)=>S.jsxs("li",{children:[S.jsx(Hr,{children:e.day}),S.jsx(_r,{children:e.time})]},a))})]})})})]})}),S.jsxs(Yr,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},children:[S.jsx(Gr,{children:"Emergência Dental?"}),S.jsx(Wr,{children:"Atendemos emergências 24 horas por dia, 7 dias por semana"}),S.jsxs(Qr,{onClick:()=>{const e=encodeURIComponent("Olá! Preciso de atendimento de emergência.");window.open(`https://wa.me/555591679300?text=${e}`,"_blank")},href:"#",children:[S.jsx(q,{}),"Emergência WhatsApp"]})]})]})})},Jr=u`
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
`,Kr=x(f.button||"button").withConfig({shouldForwardProp:e=>!["variants"].includes(e)})`
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
  animation: ${Jr} 2s infinite;
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
    right: 1rem;
    width: 56px;
    height: 56px;
  }

  @media (max-width: 480px) {
    bottom: 1rem;
    right: 0.75rem;
    width: 50px;
    height: 50px;
  }

  @media (max-width: 360px) {
    right: 0.5rem;
    width: 48px;
    height: 48px;
  }

  svg {
    color: white;
    font-size: 1.5rem;

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }

    @media (max-width: 360px) {
      font-size: 1.1rem;
    }
  }
`,Xr=x(f.div||"div").withConfig({shouldForwardProp:e=>!["$show","variants"].includes(e)})`
  position: absolute;
  right: calc(100% + 1rem);
  top: 50%;
  transform: translateY(-50%);
  background: var(--text-dark);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  white-space: nowrap;
  font-size: 0.9rem;
  font-weight: 500;
  opacity: ${e=>e.$show?1:0};
  visibility: ${e=>e.$show?"visible":"hidden"};
  transition: all 0.3s ease;
  max-width: 130px;
  overflow: hidden;
  text-overflow: ellipsis;

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
`,Zr=x.div`
  position: absolute;
  top: -2px;
  right: -2px;
  width: 12px;
  height: 12px;
  background: #ff4757;
  border: 2px solid white;
  border-radius: 50%;
  animation: ${Jr} 1.5s infinite;
`,ei=({showTooltip:e=!0,message:a="Olá! Gostaria de agendar uma consulta.",showNotification:r=!1})=>S.jsxs(Kr,{onClick:()=>{const e=encodeURIComponent(a);window.open(`https://wa.me/555591679300?text=${e}`,"_blank")},variants:{hidden:{opacity:0,scale:0,y:100},visible:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:260,damping:20,delay:1}}},initial:"hidden",animate:"visible",whileHover:{scale:1.1},whileTap:{scale:.95},"data-testid":"whatsapp-float","aria-label":"Contato via WhatsApp",children:[S.jsx(q,{}),r&&S.jsx(Zr,{}),e&&S.jsx(Xr,{variants:{hidden:{opacity:0,x:10},visible:{opacity:1,x:0,transition:{delay:2}}},initial:"hidden",animate:"visible",$show:!0,children:"Fale conosco!"})]}),ai=x.div`
  /* A página Home usa componentes individuais que já têm seus próprios estilos */
  /* Hero, ServicesPreview, Testimonials, ContactInfo, WhatsAppFloat */

  .home-page {
    min-height: 100vh;
  }
`,ri=()=>S.jsx(ya,{children:S.jsxs(ai,{children:[S.jsx(Ha,{}),S.jsx(nr,{}),S.jsx(Sr,{}),S.jsx(Ur,{}),S.jsx(ei,{})]})}),ii=[{id:1,name:"Dra. Maria Santos",specialty:"Ortodontia e Implantodontia",education:"USP, Especialização em Harmonização Orofacial",image:"/clinica-sorriso-perfeito/img/dra-maria-CPOFZ0AQ.jpg",description:"Especialista em transformar sorrisos com mais de 15 anos de experiência em tratamentos ortodônticos e implantológicos."},{id:2,name:"Dr. João Silva",specialty:"Endodontia e Estética",education:"UNIFESP, Pós-graduação em Estética Dental",image:"/clinica-sorriso-perfeito/img/dr-joao-BhitAZyi.jpg",description:"Dedicado aos tratamentos endodônticos e estéticos, sempre utilizando as mais modernas técnicas da odontologia."}],ti=["Tecnologia de ponta (scanner intraoral, radiografia digital)","Ambiente climatizado e acolhedor","Equipe especializada e atualizada","Atendimento humanizado","Protocolos de biossegurança rigorosos","Planos de pagamento flexíveis e facilitados"],oi=x.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, rgb(248, 249, 250) 0%, rgb(233, 236, 239) 100%);
`,ni=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,si=x.h2`
  text-align: center;
  color: var(--primary-color);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`,di=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.8rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    gap: 1.2rem;
    margin-bottom: 2.5rem;
  }
`,li=x.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 400px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    min-height: 350px;
  }

  @media (max-width: 480px) {
    min-height: 320px;
  }
`,ci=x.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 400%;
    object-fit: cover;
    object-position: center 15%;
    transform: translateY(-15%);
  }

  /* Ajuste específico para a imagem do Dr. João (segundo card) */
  ${li}:nth-child(2) & img {
    object-position: center 25%;
    transform: translateY(-25%);
  }

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 160px;
  }
`,mi=x.div`
  text-align: center;
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`,pi=x.h3`
  color: var(--primary-color);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`,hi=x.p`
  color: var(--text-dark);
  font-size: 1rem;
  margin-bottom: 0.75rem;

  strong {
    color: var(--primary-color);
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`,gi=x.p`
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: 1rem;

  strong {
    color: var(--text-dark);
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`,xi=x.p`
  color: var(--text-light);
  line-height: 1.6;
  font-size: 0.95rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    line-height: 1.4;
  }
`,ui=x.h3`
  text-align: center;
  color: var(--primary-color);
  font-size: 1.8rem;
  font-weight: 600;
  margin: 3rem 0 2.5rem 0;
`,fi=x.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 2rem;

  @media (max-width: 1200px) {
    gap: 1.8rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: 1.5rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 1.25rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`,bi=x.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }
`,vi=x.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(46, 139, 87, 0.15);
  color: var(--primary-color);
  font-size: 1rem;
  font-weight: bold;
  flex-shrink: 0;
  transition: all 0.3s ease;

  ${bi}:hover & {
    transform: scale(1.1);
    background: var(--primary-color);
    color: white;
  }
`,wi=()=>S.jsx(oi,{children:S.jsxs(ni,{children:[S.jsx(si,{children:"Nossa Equipe"}),S.jsx(di,{children:ii.map(e=>S.jsxs(li,{children:[S.jsx(ci,{children:S.jsx("img",{src:e.image,alt:e.name,onError:e=>{e.target.src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face"}})}),S.jsxs(mi,{children:[S.jsx(pi,{children:e.name}),S.jsxs(hi,{children:[S.jsx("strong",{children:"Especialista em:"})," ",e.specialty]}),S.jsxs(gi,{children:[S.jsx("strong",{children:"Formação:"})," ",e.education]}),S.jsx(xi,{children:e.description})]})]},e.id))}),S.jsx(ui,{children:"Nossos Diferenciais"}),S.jsx(fi,{children:ti.map((e,a)=>S.jsxs(bi,{children:[S.jsx(vi,{children:"✓"}),e]},a))})]})}),yi=(a={})=>{const[r,i]=e.useState(!1),[t,o]=e.useState(!1),n=e.useRef();return e.useEffect(()=>{const e=n.current;if(!e)return;const r=new IntersectionObserver(([e])=>{const a=e.isIntersecting;i(a),a&&!t&&o(!0)},{threshold:.1,rootMargin:"50px",...a});return r.observe(e),()=>{r.unobserve(e)}},[t,a]),{elementRef:n,isVisible:r,hasBeenVisible:t}},ji=x.div`
  .hero-section {
    animation: fadeInUp 0.8s ease-out;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .our-story,
  .mission-vision,
  .cta-section {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease-out;
  }

  .our-story.animate-in,
  .mission-vision.animate-in,
  .cta-section.animate-in {
    opacity: 1;
    transform: translateY(0);
  }

  .hero-section {
    background: var(--primary-color);
    color: var(--white);
    padding: 100px 0 80px;
    text-align: center;

    .hero-content {
      max-width: 800px;
      margin: 0 auto;
    }

    .hero-title {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: var(--white);
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .hero-subtitle {
      font-size: 1.25rem;
      opacity: 0.9;
      max-width: 600px;
      margin: 0 auto;
    }
  }

  .our-story {
    padding: 80px 0;
    background: var(--white);

    .section-title {
      font-size: 2.5rem;
      color: var(--primary-color);
      text-align: center;
      margin-bottom: 2rem;
    }

    .story-text {
      max-width: 800px;
      margin: 0 auto;
      font-size: 1.1rem;
      line-height: 1.8;
      color: var(--text-dark);

      p {
        margin-bottom: 1.5rem;
        text-align: center;
      }
    }
  }

  .mission-vision {
    padding: 80px 0;
    background: #f8f9fa;

    .mission-vision-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
      margin-top: 3rem;

      @media (max-width: 1200px) {
        gap: 1.8rem;
        margin-top: 2.5rem;
      }

      @media (max-width: 1024px) {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
      }

      @media (max-width: 640px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        margin-top: 2rem;
      }

      @media (max-width: 480px) {
        gap: 1.2rem;
      }
    }

    .mission-card,
    .vision-card,
    .values-card {
      background: var(--white);
      padding: 2rem;
      border-radius: 10px;
      text-align: center;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      @media (max-width: 768px) {
        padding: 1.5rem;
      }

      @media (max-width: 480px) {
        padding: 1.2rem;
      }

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
      }

      .card-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        font-size: 2rem;
        margin: 0 auto 1.5rem;
        transition: all 0.3s ease;
      }

      h3 {
        font-size: 1.5rem;
        color: var(--primary-color);
        margin-bottom: 1rem;
      }

      p {
        color: var(--text-light);
        line-height: 1.6;
      }
    }

    .mission-card {
      .card-icon {
        background: rgba(46, 139, 87, 0.15);
        color: #2E8B57;
      }

      &:hover .card-icon {
        transform: scale(1.1);
        background: #2E8B57;
        color: white;
      }
    }

    .vision-card {
      .card-icon {
        background: rgba(65, 105, 225, 0.15);
        color: rgb(65, 105, 225);
      }

      &:hover .card-icon {
        transform: scale(1.1);
        background: rgb(65, 105, 225);
        color: white;
      }
    }

    .values-card {
      .card-icon {
        background: rgba(255, 107, 53, 0.15);
        color: rgb(255, 107, 53);
      }

      &:hover .card-icon {
        transform: scale(1.1);
        background: rgb(255, 107, 53);
        color: white;
      }
    }
  }

  .cta-section {
    padding: 50px 0;
    background: rgb(65, 105, 225);
    color: var(--white);
    text-align: center;

    .cta-content {
      max-width: 900px;
      margin: 0 auto;

      h2 {
        font-size: 2.2rem;
        margin-bottom: 1rem;
        color: var(--white);
      }

      p {
        font-size: 1.1rem;
        margin-bottom: 2rem;
        opacity: 0.9;
      }
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;

      .btn {
        padding: 15px 30px;
        border-radius: 12px;
        font-weight: 600;
        transition: all 0.3s ease;
        text-decoration: none;
        display: inline-block;
        border: 2px solid transparent;

        @media (max-width: 768px) {
          padding: 12px 24px;
          font-size: 0.95rem;
        }

        @media (max-width: 480px) {
          padding: 12px 20px;
          font-size: 0.9rem;
        }

        &.btn-primary,
        &.btn-secondary {
          background: var(--white);
          color: rgb(65, 105, 225);
          border-color: var(--white);

          &:hover {
            background: var(--light-gray);
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .hero-section {
      padding: 80px 0 60px;

      .hero-title {
        font-size: 2.8rem;
      }

      .hero-subtitle {
        font-size: 1.15rem;
      }
    }

    .our-story,
    .mission-vision {
      padding: 70px 0;
    }

    .cta-section {
      padding: 45px 0;
    }
  }

  @media (max-width: 768px) {
    .hero-section {
      padding: 60px 0 40px;

      .hero-title {
        font-size: 2.2rem;
      }

      .hero-subtitle {
        font-size: 1rem;
      }
    }

    .our-story,
    .mission-vision {
      padding: 60px 0;
    }

    .cta-section {
      padding: 40px 0;
    }
  }

    .mission-vision-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }


    .cta-content {
      max-width: 100%;

      h2 {
        font-size: 1.8rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 480px) {
    .hero-section {
      padding: 50px 0 30px;

      .hero-title {
        font-size: 1.8rem;
      }

      .hero-subtitle {
        font-size: 0.95rem;
      }
    }

    .our-story,
    .mission-vision {
      padding: 50px 0;
    }

    .cta-section {
      padding: 35px 0;
    }

    .section-title {
      font-size: 2rem;
    }

    .mission-card,
    .vision-card,
    .values-card {
      padding: 1.5rem;
    }

    .cta-content {
      h2 {
        font-size: 1.5rem;
        line-height: 1.3;
      }

      p {
        font-size: 0.9rem;
        line-height: 1.4;
      }
    }
  }
`,zi=()=>{const e=yi({threshold:.2}),a=yi({threshold:.2}),r=yi({threshold:.2});return S.jsx(ya,{children:S.jsxs(ji,{children:[S.jsx("header",{className:"hero-section hero-about",role:"banner",children:S.jsx("div",{className:"container",children:S.jsxs("div",{className:"hero-content",children:[S.jsx("h1",{className:"hero-title",children:"Sobre a Clínica Sorriso Perfeito"}),S.jsx("p",{className:"hero-subtitle",children:"Cuidando do seu sorriso com excelência e humanização desde 2014"})]})})}),S.jsx("section",{ref:e.elementRef,className:"our-story "+(e.hasBeenVisible?"animate-in":""),role:"region","aria-labelledby":"story-title",children:S.jsx("div",{className:"container",children:S.jsxs("div",{className:"story-content",children:[S.jsx("h2",{id:"story-title",className:"section-title",children:"Nossa História"}),S.jsxs("div",{className:"story-text",children:[S.jsx("p",{children:"A Clínica Sorriso Perfeito nasceu em 2014 do sonho da Dra. Maria de democratizar o acesso aos cuidados odontológicos de qualidade na Vila Madalena."}),S.jsx("p",{children:"Com mais de 15 anos de experiência e centenas de sorrisos transformados, nossa missão é proporcionar tratamentos odontológicos humanizados, utilizando tecnologia de ponta em um ambiente acolhedor."})]})]})})}),S.jsx(wi,{}),S.jsx("section",{ref:a.elementRef,className:"mission-vision "+(a.hasBeenVisible?"animate-in":""),role:"region","aria-labelledby":"mission-vision-title",children:S.jsxs("div",{className:"container",children:[S.jsx("h2",{id:"mission-vision-title",className:"visually-hidden",children:"Missão, Visão e Valores"}),S.jsxs("div",{className:"mission-vision-grid",role:"group","aria-label":"Nossos princípios",children:[S.jsxs("article",{className:"mission-card",children:[S.jsx("div",{className:"card-icon","aria-hidden":"true",children:S.jsx(_,{})}),S.jsx("h3",{children:"Nossa Missão"}),S.jsx("p",{children:"Proporcionar tratamentos odontológicos de excelência, com atendimento humanizado e tecnologia de ponta, transformando sorrisos e vidas."})]}),S.jsxs("article",{className:"vision-card",children:[S.jsx("div",{className:"card-icon","aria-hidden":"true",children:S.jsx(ae,{})}),S.jsx("h3",{children:"Nossa Visão"}),S.jsx("p",{children:"Ser referência em odontologia na Vila Madalena, reconhecida pela qualidade dos tratamentos e pela satisfação dos nossos pacientes."})]}),S.jsxs("article",{className:"values-card",children:[S.jsx("div",{className:"card-icon","aria-hidden":"true",children:S.jsx(ie,{})}),S.jsx("h3",{children:"Nossos Valores"}),S.jsx("p",{children:"Ética, transparência, excelência técnica, atendimento humanizado e compromisso com a saúde bucal dos nossos pacientes."})]})]})]})}),S.jsx("section",{ref:r.elementRef,className:"cta-section "+(r.hasBeenVisible?"animate-in":""),role:"region","aria-labelledby":"cta-title",children:S.jsx("div",{className:"container",children:S.jsxs("div",{className:"cta-content",children:[S.jsx("h2",{id:"cta-title",children:"Pronto para transformar seu sorriso?"}),S.jsx("p",{children:"Agende sua consulta e descubra como podemos ajudar você a ter o sorriso dos seus sonhos."}),S.jsxs("nav",{className:"cta-buttons","aria-label":"Ações principais",children:[S.jsx(t,{to:"/contato",className:"btn btn-primary","aria-label":"Ir para página de contato para agendar consulta",children:"Agendar Consulta"}),S.jsx(t,{to:"/servicos",className:"btn btn-secondary","aria-label":"Ver página completa de todos os serviços",children:"Ver Serviços"})]})]})})})]})})},ki=x(f.div)`
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
`,Ci=x(f.div)`
  background: white;
  border-radius: 20px;
  padding: 0;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.2);
`,$i=x.div`
  background: linear-gradient(135deg, var(--primary-color), #3a9d66);
  color: white;
  padding: 2rem;
  border-radius: 20px 20px 0 0;
  position: relative;
`,Ei=x.button`
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
`,Si=x.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: white;
`,Ai=x.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-color);
`,Pi=x.div`
  padding: 2rem;
`,Bi=x.p`
  color: var(--text-light);
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1.125rem;
`,Ni=x.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`,Di=x.li`
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
`,Ri=x.button`
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
`,Ii=({isOpen:a,onClose:r,service:i,category:t})=>{e.useEffect(()=>(document.body.style.overflow=a?"hidden":"unset",()=>{document.body.style.overflow="unset"}),[a]);if(!i)return null;const o=(n=i.name,s=t,{"Consulta + Limpeza":{description:"Consulta completa com avaliação detalhada e limpeza profissional dos dentes.",features:["Exame clínico completo","Radiografias se necessário","Limpeza com ultrassom","Orientações de higiene bucal"]},"Restauração (resina)":{description:"Restauração estética com resina composta para tratamento de cáries.",features:["Material estético de alta qualidade","Procedimento indolor","Cor personalizada","Durabilidade garantida"]},"Aplicação de flúor":{description:"Aplicação preventiva de flúor para fortalecimento do esmalte dentário.",features:["Prevenção de cáries","Fortalecimento do esmalte","Procedimento rápido e indolor","Proteção duradoura"]},"Clareamento dental":{description:"Procedimento para clarear os dentes de forma segura e eficaz.",features:["Clareamento com gel profissional","Resultados visíveis na primeira sessão","Acompanhamento pós-tratamento","Kit para manutenção"]},"Gengivoplastia estética":{description:"Cirurgia periodontal para correção estética da gengiva.",features:["Melhora do contorno gengival","Sorriso mais harmônico","Procedimento minimamente invasivo","Recuperação rápida"]},"Aparelho metálico":{description:"Tratamento ortodôntico com aparelho fixo metálico tradicional.",features:["Consultas mensais incluídas","Ajustes e manutenções","Acompanhamento completo","Resultado garantido"]},"Contenção ortodôntica":{description:"Aparelho de contenção para manutenção dos resultados ortodônticos.",features:["Mantém dentes alinhados","Removível ou fixo","Confecção personalizada","Acompanhamento incluído"]},"Implante unitário":{description:"Implante de titânio para substituição de um dente perdido.",features:["Implante de titânio importado","Cirurgia minimamente invasiva","Acompanhamento pós-cirúrgico","Garantia do implante"]},"Levantamento de seio":{description:"Procedimento para aumentar volume ósseo na região posterior superior.",features:["Possibilita implante em casos complexos","Técnica avançada","Material biocompatível","Acompanhamento especializado"]}}[n]||{description:`Serviço profissional de ${s.toLowerCase()} realizado com os mais altos padrões de qualidade.`,features:["Atendimento personalizado","Equipamentos modernos","Profissionais especializados","Acompanhamento completo"]});var n,s;return S.jsx(b,{children:a&&S.jsx(ki,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:e=>{e.target===e.currentTarget&&r()},children:S.jsxs(Ci,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{type:"spring",stiffness:300,damping:30},children:[S.jsxs($i,{children:[S.jsx(Ei,{onClick:r,children:S.jsx(ue,{})}),S.jsx(Si,{children:i.name}),S.jsx(Ai,{children:i.price})]}),S.jsxs(Pi,{children:[S.jsx(Bi,{children:o.description}),S.jsx(Ni,{children:o.features.map((e,a)=>S.jsx(Di,{children:e},a))}),S.jsx(Ri,{onClick:()=>{const e=`Olá! Gostaria de saber mais sobre ${i.name} (${i.price}).`;window.open(`https://wa.me/555591679300?text=${encodeURIComponent(e)}`,"_blank")},children:"Agendar pelo WhatsApp"})]})]})})})},Mi={clinicaGeral:{title:"Clínica Geral",services:[{name:"Consulta + Limpeza",price:"R$ 180"},{name:"Restauração (resina)",price:"R$ 250"},{name:"Extração simples",price:"R$ 200"},{name:"Canal (por raiz)",price:"R$ 550"},{name:"Tratamento de gengiva",price:"R$ 380"},{name:"Aplicação de flúor",price:"R$ 120"}]},ortodontia:{title:"Ortodontia",services:[{name:"Consulta ortodôntica",price:"R$ 150"},{name:"Aparelho metálico",price:"R$ 3.800"},{name:"Aparelho estético",price:"R$ 4.900"},{name:"Aparelho invisível",price:"R$ 8.500"},{name:"Manutenção mensal",price:"R$ 180"},{name:"Contenção ortodôntica",price:"R$ 650"}]},esteticaDental:{title:"Estética Dental",services:[{name:"Clareamento dental",price:"R$ 680"},{name:"Faceta de resina",price:"R$ 450"},{name:"Faceta de porcelana",price:"R$ 1.800"},{name:"Harmonização orofacial",price:"R$ 1.200"},{name:"Lente de contato dental",price:"R$ 2.200"},{name:"Gengivoplastia estética",price:"R$ 950"}]},implantes:{title:"Implantes",services:[{name:"Implante unitário",price:"R$ 2.800"},{name:"Prótese sobre implante",price:"R$ 1.900"},{name:"Enxerto ósseo",price:"R$ 2.400"},{name:"Consulta especializada",price:"R$ 200"},{name:"Protocolo total",price:"R$ 22.000"},{name:"Levantamento de seio",price:"R$ 3.200"}]}},Ti={validUntil:"dezembro/2024",financing:"Parcelamento em até 12x sem juros",insurance:["Unimed","Bradesco Saúde","SulAmérica"],customQuote:"Orçamento personalizado disponível"},Oi=x.div`
  .hero-section {
    background: var(--primary-color);
    color: var(--white);
    padding: var(--space-3xl) 0 var(--space-2xl);
    text-align: center;

    .hero-content {
      max-width: 800px;
      margin: 0 auto;
    }

    .hero-title {
      font-size: var(--font-size-4xl);
      font-weight: 700;
      margin-bottom: var(--space-lg);
      text-shadow: var(--shadow-sm);
      color: var(--white);
      line-height: 1.2;
    }

    .hero-subtitle {
      font-size: var(--font-size-xl);
      opacity: 0.9;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.7;
    }

    @media (max-width: 1024px) {
      padding: var(--space-2xl) 0 var(--space-xl);

      .hero-title {
        font-size: var(--font-size-3xl);
      }

      .hero-subtitle {
        font-size: var(--font-size-lg);
      }
    }

    @media (max-width: 768px) {
      padding: var(--space-xl) 0 var(--space-lg);

      .hero-title {
        font-size: var(--font-size-2xl);
      }

      .hero-subtitle {
        font-size: var(--font-size-base);
      }
    }

    @media (max-width: 480px) {
      padding: var(--space-lg) 0 var(--space-md);

      .hero-title {
        font-size: var(--font-size-xl);
      }

      .hero-subtitle {
        font-size: var(--font-size-sm);
      }
    }
  }

  .services-section {
    padding: 80px 0;
    background: var(--white);

    .service-category {
      margin-bottom: 4rem;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .category-title {
      font-size: 2.5rem;
      color: var(--primary-color);
      text-align: center;
      margin-bottom: 3rem;
      font-weight: 600;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;

      @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
      }

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      @media (max-width: 480px) {
        gap: 1.2rem;
      }
    }

    .service-card {
      background: #2E8B57;
      border-radius: var(--radius-lg);
      padding: var(--space-xl);
      box-shadow: var(--shadow-md);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      border: 2px solid transparent;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: space-between;
      min-height: 280px;

      &:hover {
        transform: translateY(-12px) scale(1.02);
        background: linear-gradient(135deg, var(--secondary-color) 0%, #6BB6E8 100%);
        box-shadow: rgba(135, 206, 235, 0.3) 0px 20px 60px;
      }

      &:focus-within {
        outline: 3px solid var(--focus-color);
        outline-offset: 2px;
      }

      .service-icon {
        font-size: 2.5rem;
        color: #fff;
        margin-bottom: var(--space-lg);
        display: block;
      }

      .service-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
      }

      .service-name {
        font-size: var(--font-size-xl);
        color: #fff;
        font-weight: 600;
        margin-bottom: 1rem;
        line-height: 1.3;
      }

      .service-description {
        color: #fff;
        line-height: 1.7;
        margin-bottom: 1.5rem;
      }

      .service-price {
        font-size: var(--font-size-lg);
        color: #FFD700;
        font-weight: 700;
        margin-bottom: 1.5rem;
        display: block;
        width: 100%;
      }

      .btn {
        background: #fff;
        color: #2E8B57;
        border: 2px solid #fff;
        padding: 0.75rem 2rem;
        border-radius: 8px;
        font-weight: 600;
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 0.3s ease;
        text-decoration: none;
        display: block;
        width: 80%;
        margin-top: auto;

        &:hover {
          background: #f8f9fa;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
        }
      }

      @media (max-width: 768px) {
        padding: var(--space-lg);

        .service-name {
          font-size: var(--font-size-lg);
        }

        .service-price {
          font-size: var(--font-size-base);
        }
      }

      @media (max-width: 480px) {
        padding: var(--space-md);
      }
    }
  }

  .additional-info {
    padding: 80px 0;
    background: var(--light-gray);

    .info-title {
      font-size: 2.5rem;
      color: var(--primary-color);
      text-align: center;
      margin-bottom: 3rem;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .info-card {
      background: var(--white);
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        transform: translateY(-12px) scale(1.02);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15),
                    0 8px 16px rgba(0, 0, 0, 0.1),
                    0 0 0 1px rgba(255, 255, 255, 0.05);
      }

      .info-icon {
        font-size: 2.5rem;
        color: var(--primary-color);
        margin-bottom: 1rem;
      }

      .info-title {
        font-size: 1.5rem;
        color: var(--primary-color);
        margin-bottom: 1rem;
        font-weight: 600;
      }

      .info-description {
        color: var(--text-light);
        line-height: 1.6;
      }
    }
  }

  .payment-info {
    padding: 80px 0;
    background: var(--white);

    .section-title {
      font-size: 2.5rem;
      color: var(--primary-color);
      text-align: center;
      margin-bottom: 3rem;
      font-weight: 600;
    }

    .payment-info-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      max-width: 1000px;
      margin: 0 auto;

      @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
      }

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      @media (max-width: 480px) {
        gap: 1.2rem;
      }
    }

    .info-card {
      background: var(--light-gray);
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      cursor: pointer;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border: 2px solid transparent;

      &:hover {
        transform: translateY(-12px) scale(1.02);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15),
                    0 8px 16px rgba(0, 0, 0, 0.1),
                    0 0 0 1px rgba(255, 255, 255, 0.05);

        .info-icon {
          transform: scale(1.1);
          color: white;
        }
      }


      .info-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        font-size: 2rem;
        margin: 0 auto 1.5rem;
        transition: all 0.3s ease;
        background: rgba(46, 139, 87, 0.15);
        color: var(--primary-color);
      }

      &:nth-child(1) .info-icon {
        background: rgba(46, 139, 87, 0.15);
        color: var(--primary-color);
      }

      &:nth-child(2) .info-icon {
        background: rgba(65, 105, 225, 0.15);
        color: #4169e1;
      }

      &:nth-child(3) .info-icon {
        background: rgba(255, 107, 53, 0.15);
        color: #ff6b35;
      }

      &:nth-child(4) .info-icon {
        background: rgba(128, 0, 128, 0.15);
        color: #8a2be2;
      }

      &:nth-child(1):hover .info-icon {
        background: var(--primary-color);
        color: white;
      }

      &:nth-child(2):hover .info-icon {
        background: #4169e1;
        color: white;
      }

      &:nth-child(3):hover .info-icon {
        background: #ff6b35;
        color: white;
      }

      &:nth-child(4):hover .info-icon {
        background: #8a2be2;
        color: white;
      }

      h3 {
        font-size: 1.4rem;
        color: var(--primary-color);
        margin-bottom: 1rem;
        font-weight: 600;
      }

      p {
        color: var(--text-dark);
        line-height: 1.6;
      }

      .insurance-list {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        align-items: center;

        .insurance-item {
          background: var(--primary-color);
          color: #fff;
          padding: 0.6rem 1.2rem;
          border-radius: 25px;
          font-weight: 600;
          text-align: center;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(46, 139, 87, 0.2);
          display: inline-block;
          width: fit-content;
          white-space: nowrap;

          &:hover {
            background: #1e5f3b;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(46, 139, 87, 0.3);
          }
        }
      }
    }
  }

  .services-cta {
    padding: 80px 0;
    background: var(--primary-color);
    color: var(--white);
    text-align: center;

    .cta-content {
      max-width: 600px;
      margin: 0 auto;

      h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        font-weight: 600;
        color: var(--white);
        white-space: nowrap;

        @media (max-width: 768px) {
          white-space: normal;
          font-size: 2rem;
        }

        @media (max-width: 480px) {
          font-size: 1.8rem;
        }
      }

      p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
        opacity: 0.9;
        line-height: 1.6;
      }
    }

    .cta-buttons {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 2rem;
    }

    .btn {
      position: relative;
      padding: 16px 32px;
      border-radius: 12px;
      font-weight: 600;
      font-size: 1rem;
      text-decoration: none;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      min-width: 180px;
      border: 2px solid transparent;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.6s ease;
      }

      &:hover::before {
        left: 100%;
      }

      &.btn-primary {
        background: linear-gradient(135deg, var(--white) 0%, #f8f9fa 100%);
        color: var(--primary-color);
        border-color: var(--primary-color);

        &:hover {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 25px rgba(46, 139, 87, 0.25);
        }

        &:active {
          transform: translateY(-1px) scale(1.01);
        }
      }

      &.btn-whatsapp {
        background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
        color: var(--white);
        border-color: #25D366;

        &:hover {
          background: linear-gradient(135deg, #128C7E 0%, #0d6155 100%);
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
        }

        &:active {
          transform: translateY(-1px) scale(1.01);
        }

        @media (max-width: 768px) {
          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
            animation: shine 2s infinite;
            z-index: 1;
          }

          @keyframes shine {
            0% {
              left: -100%;
            }
            50% {
              left: 100%;
            }
            100% {
              left: 100%;
            }
          }
        }
      }

      @media (max-width: 768px) {
        padding: 14px 28px;
        font-size: 0.95rem;
        min-width: 160px;
      }

      @media (max-width: 480px) {
        width: 100%;
        max-width: 280px;
        padding: 12px 24px;
        font-size: 0.9rem;
      }
    }
  }

  .cta-section {
    padding: 80px 0;
    background: var(--primary-color);
    color: var(--white);
    text-align: center;

    .cta-content {
      max-width: 600px;
      margin: 0 auto;

      h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
        opacity: 0.9;
      }
    }

    .cta-buttons {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 2rem;
    }

    .cta-button {
      position: relative;
      padding: 16px 32px;
      background: linear-gradient(135deg, var(--white) 0%, #f8f9fa 100%);
      color: var(--primary-color);
      border-radius: 12px;
      font-weight: 600;
      font-size: 1rem;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      min-width: 180px;
      border: 2px solid var(--primary-color);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.6s ease;
      }

      &:hover::before {
        left: 100%;
      }

      &:hover {
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        transform: translateY(-3px) scale(1.02);
        box-shadow: 0 8px 25px rgba(46, 139, 87, 0.25);
      }

      &:active {
        transform: translateY(-1px) scale(1.01);
      }

      @media (max-width: 768px) {
        padding: 14px 28px;
        font-size: 0.95rem;
        min-width: 160px;
      }

      @media (max-width: 480px) {
        width: 100%;
        max-width: 280px;
        padding: 12px 24px;
        font-size: 0.9rem;
      }
    }

    .btn {
      position: relative;
      padding: 16px 32px;
      border-radius: 12px;
      font-weight: 600;
      font-size: 1rem;
      text-decoration: none;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      min-width: 180px;
      border: 2px solid transparent;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      overflow: hidden;
      margin: 0 0.75rem;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.6s ease;
      }

      &:hover::before {
        left: 100%;
      }

      &.btn-primary {
        background: linear-gradient(135deg, var(--white) 0%, #f8f9fa 100%);
        color: var(--primary-color);
        border-color: var(--primary-color);

        &:hover {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 25px rgba(46, 139, 87, 0.25);
        }

        &:active {
          transform: translateY(-1px) scale(1.01);
        }
      }

      &.btn-whatsapp {
        background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
        color: var(--white);
        border-color: #25D366;

        &:hover {
          background: linear-gradient(135deg, #128C7E 0%, #0d6155 100%);
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
        }

        &:active {
          transform: translateY(-1px) scale(1.01);
        }
      }

      @media (max-width: 768px) {
        padding: 14px 28px;
        font-size: 0.95rem;
        min-width: 160px;
        margin: 0 0.5rem;
      }

      @media (max-width: 480px) {
        width: 100%;
        max-width: 280px;
        padding: 12px 24px;
        font-size: 0.9rem;
        margin: 0.5rem 0;
      }
    }
  }

  .testimonials-preview {
    padding: 80px 0;
    background: linear-gradient(135deg, #f8f9fa 0%, #e8f5e8 100%);

    @media (max-width: 768px) {
      padding: 60px 0;
    }

    .section-title {
      font-size: 2.5rem;
      color: var(--text-dark);
      text-align: center;
      margin-bottom: 4rem;
      font-weight: 700;

      @media (max-width: 768px) {
        font-size: 2rem;
        margin-bottom: 2.5rem;
      }
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
    }

    .testimonial-card {
      position: relative;
      text-align: left;
      height: 100%;
      cursor: pointer;
      background: var(--white);
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      flex-direction: column;

      &:hover {
        transform: translateY(-12px) scale(1.02);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15),
                    0 8px 16px rgba(0, 0, 0, 0.1),
                    0 0 0 1px rgba(255, 255, 255, 0.05);
      }

      .quote-icon {
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
      }

      .testimonial-text {
        font-size: 1.1rem;
        color: var(--text-dark);
        line-height: 1.6;
        margin: 1.5rem 0 2rem 0;
        font-style: italic;
        position: relative;
      }

      .patient-info {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: auto;
      }

      .patient-avatar {
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
      }

      .patient-details {
        flex: 1;
      }

      .patient-name {
        margin: 0 0 0.25rem 0;
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--text-dark);
      }

      .patient-meta {
        margin: 0 0 0.5rem 0;
        font-size: 0.9rem;
        color: var(--text-gray);
      }

      .rating-container {
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }

      .star-icon {
        color: #ffd700;
        font-size: 1rem;
      }
    }
  }

  .modal-content {
    padding: 2rem;

    .modal-title {
      font-size: 1.8rem;
      color: var(--primary-color);
      margin-bottom: 1rem;
    }

    .modal-category {
      color: var(--text-light);
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .modal-description {
      color: var(--text-dark);
      line-height: 1.8;
      margin-bottom: 1.5rem;
    }

    .modal-price {
      font-size: 1.3rem;
      color: var(--primary-color);
      font-weight: 600;
      margin-bottom: 2rem;
    }

    .modal-benefits {
      margin-bottom: 2rem;

      h4 {
        color: var(--primary-color);
        margin-bottom: 1rem;
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          padding: 0.5rem 0;
          color: var(--text-dark);

          &:before {
            content: '✓';
            color: var(--primary-color);
            font-weight: bold;
            margin-right: 0.5rem;
          }
        }
      }
    }

    .modal-cta {
      text-align: center;
      padding-top: 1.5rem;
      border-top: 1px solid var(--border-color);

      .cta-button {
        position: relative;
        padding: 14px 28px;
        background: linear-gradient(135deg, var(--primary-color) 0%, #1e5f3b 100%);
        color: var(--white);
        border-radius: 12px;
        text-decoration: none;
        font-weight: 600;
        font-size: 1rem;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        min-width: 160px;
        border: 2px solid var(--primary-color);
        box-shadow: 0 4px 12px rgba(46, 139, 87, 0.25);
        overflow: hidden;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }

        &:hover::before {
          left: 100%;
        }

        &:hover {
          background: linear-gradient(135deg, #1e5f3b 0%, #155a31 100%);
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 25px rgba(46, 139, 87, 0.4);
        }

        &:active {
          transform: translateY(-1px) scale(1.01);
        }
      }
    }
  }

  @media (max-width: 768px) {
    .hero-section {
      padding: 60px 0 40px;

      .hero-title {
        font-size: 2rem;
      }

      .hero-subtitle {
        font-size: 1rem;
      }
    }

    .services-section,
    .additional-info,
    .cta-section {
      padding: 60px 0;
    }

    .services-grid,
    .info-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .category-title,
    .info-title,
    .cta-content h2 {
      font-size: 2rem;
    }

    .service-card,
    .info-card {
      padding: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .hero-title {
      font-size: 1.8rem;
    }

    .category-title,
    .info-title {
      font-size: 1.8rem;
    }

    .service-card,
    .info-card {
      padding: 1.25rem;
    }
  }
`,Li=()=>{const[a,r]=e.useState(null),[i,o]=e.useState(""),[n,s]=e.useState(!1),d=(e,a)=>{r(e),o(a),s(!0)};return S.jsxs(ya,{children:[S.jsxs(Oi,{children:[S.jsx("header",{className:"hero-section hero-services",role:"banner",children:S.jsx("div",{className:"container",children:S.jsxs(f.div,{className:"hero-content",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[S.jsx(f.h1,{className:"hero-title",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:"Nossos Serviços"}),S.jsx(f.p,{className:"hero-subtitle",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},"aria-describedby":"hero-title",children:"Tratamentos completos com a mais alta qualidade e tecnologia de ponta"})]})})}),S.jsx("section",{className:"services-section",role:"main","aria-labelledby":"services-main-title",children:S.jsxs("div",{className:"container",children:[S.jsx("h2",{id:"services-main-title",className:"visually-hidden",children:"Catálogo completo de serviços odontológicos"}),Object.entries(Mi).map(([e,a],r)=>S.jsxs(f.section,{className:"service-category",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2*r+.6},role:"region","aria-labelledby":`category-${e}-title`,children:[S.jsx(f.h2,{id:`category-${e}-title`,className:"category-title",initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.5,delay:.2*r+.8},children:a.title}),S.jsx("div",{className:"services-grid",role:"grid","aria-label":`Serviços de ${a.title}`,children:a.services.map((e,i)=>S.jsxs(f.article,{className:"service-card",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.4,delay:.2*r+.1*i+1},whileHover:{scale:1.02,transition:{duration:.2}},role:"gridcell","aria-labelledby":`service-${r}-${i}-name`,tabIndex:0,onKeyDown:r=>{"Enter"!==r.key&&" "!==r.key||(r.preventDefault(),d(e,a.title))},children:[S.jsx("div",{className:"service-info",children:S.jsx("h3",{id:`service-${r}-${i}-name`,className:"service-name",children:e.name})}),S.jsx("span",{className:"service-price","aria-label":`Preço: ${e.price}`,children:e.price}),S.jsx(f.button,{className:"btn btn-outline btn-small",onClick:()=>d(e,a.title),whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":`Saiba mais sobre ${e.name}`,type:"button",children:"Saiba mais"})]},i))})]},e))]})}),S.jsx(f.section,{className:"payment-info",initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:2},role:"region","aria-labelledby":"payment-info-title",children:S.jsxs("div",{className:"container",children:[S.jsx(f.h2,{id:"payment-info-title",className:"section-title",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:2.1},children:"Formas de Pagamento e Convênios"}),S.jsx(f.div,{className:"payment-info-grid",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:2.2},role:"grid","aria-label":"Opções de pagamento e informações comerciais",children:[{icon:K,title:"Parcelamento",content:Ti.financing},{icon:te,title:"Convênios",content:Ti.insurance.map((e,a)=>S.jsx("span",{className:"insurance-item",children:e},a))},{icon:re,title:"Orçamento",content:Ti.customQuote},{icon:Y,title:"Preços válidos",content:`Até ${Ti.validUntil}`}].map((e,a)=>S.jsxs(f.article,{className:"info-card",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.5,delay:2.4+.1*a},whileHover:{scale:1.05,transition:{duration:.2}},role:"gridcell","aria-labelledby":`payment-info-${a}-title`,children:[S.jsx(f.div,{className:"info-icon",initial:{scale:0},animate:{scale:1},transition:{duration:.3,delay:2.6+.1*a,type:"spring",stiffness:200},"aria-hidden":"true",children:S.jsx(e.icon,{})}),S.jsx("h3",{id:`payment-info-${a}-title`,children:e.title}),"Convênios"===e.title?S.jsx("div",{className:"insurance-list",role:"list","aria-label":"Lista de convênios aceitos",children:e.content}):S.jsx("p",{children:e.content})]},a))})]})}),S.jsx(f.section,{className:"services-cta",initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:3},role:"region","aria-labelledby":"cta-title",children:S.jsx("div",{className:"container",children:S.jsxs(f.div,{className:"cta-content",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:3.2},children:[S.jsx(f.h2,{id:"cta-title",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:3.4},children:"Interessado em algum tratamento?"}),S.jsx(f.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:3.6},"aria-describedby":"cta-title",children:"Entre em contato conosco para agendar uma consulta e receber um orçamento personalizado."}),S.jsxs(f.nav,{className:"cta-buttons",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:3.8},"aria-label":"Ações de contato",children:[S.jsx(t,{to:"/contato",className:"btn btn-primary","aria-label":"Ir para página de contato para agendar consulta",children:S.jsx(f.span,{whileHover:{scale:1.05},whileTap:{scale:.95},children:"Agendar Consulta"})}),S.jsx(f.a,{href:"https://wa.me/555591679300?text=Olá! Gostaria de saber mais sobre os serviços da clínica.",className:"btn btn-whatsapp",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":"Entrar em contato pelo WhatsApp para mais informações",children:"WhatsApp"})]})]})})}),S.jsx(f.section,{className:"testimonials-preview",initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:4},role:"region","aria-labelledby":"testimonials-title",children:S.jsxs("div",{className:"container",children:[S.jsx(f.h2,{id:"testimonials-title",className:"section-title",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:4.2},children:"O que nossos pacientes dizem"}),S.jsx(f.div,{className:"testimonials-grid",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:4.4},role:"grid","aria-label":"Depoimentos de pacientes",children:[{text:"Excelente atendimento! A Dra. Maria é muito atenciosa e o resultado do meu clareamento ficou perfeito.",name:"Maria Silva",age:"32",rating:5},{text:"Profissionais muito qualificados. Fiz um implante com o Dr. João e superou minhas expectativas.",name:"João Santos",age:"45",rating:5},{text:"Ambiente muito acolhedor e tecnologia de ponta. Recomendo para toda a família!",name:"Ana Costa",age:"28",rating:5}].map((e,a)=>{return S.jsxs(f.article,{className:"testimonial-card",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.5,delay:4.6+.2*a},whileHover:{scale:1.03,transition:{duration:.2}},role:"gridcell","aria-labelledby":`testimonial-${a}-author`,children:[S.jsx("div",{className:"quote-icon",children:S.jsx(le,{})}),S.jsxs("p",{className:"testimonial-text",children:["“",e.text,"”"]}),S.jsxs("div",{className:"patient-info",children:[S.jsx("div",{className:"patient-avatar",children:(r=e.name,r.split(" ").map(e=>e[0]).join("").toUpperCase())}),S.jsxs("div",{className:"patient-details",children:[S.jsx("h4",{className:"patient-name",id:`testimonial-${a}-author`,children:e.name}),S.jsxs("p",{className:"patient-meta",children:[e.age," anos"]}),S.jsx("div",{className:"rating-container",children:(e.rating,Array.from({length:5},(e,a)=>S.jsx(he,{className:"star-icon"},a)))})]})]})]},a);var r})})]})})]}),S.jsx(Ii,{isOpen:n,onClose:()=>{s(!1),r(null),o("")},service:a,category:i})]})},Vi=e=>{if(!e||!e.trim())return"Por favor, digite seu nome completo";return e.trim().split(/\s+/).length<2?"Digite seu nome e sobrenome (ex: João Silva)":e.length<2?"Nome deve ter pelo menos 2 caracteres":""},Fi=e=>{if(!e||!e.trim())return"Por favor, digite seu endereço de email";return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)?"":"Digite um email válido (ex: seunome@email.com)"},qi=e=>{if(!e||!e.trim())return"Por favor, digite seu telefone ou WhatsApp";const a=e.replace(/\D/g,"");return a.length<10?"Digite um telefone válido com DDD (ex: 11 99999-9999)":11!==a.length&&10!==a.length?"Telefone deve ter 10 ou 11 dígitos com DDD":""},Hi=e=>{if(!e)return"Data é obrigatória";const a=new Date(e),r=new Date;return r.setHours(0,0,0,0),a<r?"Data não pode ser no passado":0===a.getDay()?"Não atendemos aos domingos":""},_i=(e,a)=>!e||"string"==typeof e&&!e.trim()?`${a} é obrigatório`:"",Yi=(a={},r={})=>{const[i,t]=e.useState(a),[o,n]=e.useState({}),[s,d]=e.useState({}),[l,c]=e.useState(!1),m=e.useCallback((e,a)=>{if(t(r=>({...r,[e]:a})),s[e]&&o[e]){const i=r[e];if(i){const r=i(a);n(a=>({...a,[e]:r}))}}},[s,o,r]),p=e.useCallback((e,a=!0)=>{d(r=>({...r,[e]:a}))},[]),h=e.useCallback((e,a)=>{n(r=>({...r,[e]:a}))},[]),g=e.useCallback((e,a)=>{const i=r[e];if(i){const r=i(a);return h(e,r),r}return""},[r,h]),x=e.useCallback(()=>{const e=(e=>{const a={},r=Vi(e.name);r&&(a.name=r);const i=Fi(e.email);i&&(a.email=i);const t=qi(e.phone);t&&(a.phone=t);const o=Hi(e.date);o&&(a.date=o);const n=_i(e.time,"Horário");n&&(a.time=n);const s=_i(e.service,"Tipo de consulta");return s&&(a.service=s),{errors:a,isValid:0===Object.keys(a).length}})(i);return n(e.errors),e},[i]),u=e.useCallback(e=>a=>{m(e,a)},[m]),f=e.useCallback(e=>()=>{p(e,!0),g(e,i[e])},[p,g,i]),b=e.useCallback(e=>{const a=Object.keys(e)[0];if(a){const e=document.querySelector(`[name="${a}"], [data-field="${a}"]`);e&&(e.scrollIntoView({behavior:"smooth",block:"center"}),e.focus())}},[]),v=e.useCallback(e=>{const a=document.querySelector(".form-error-alert");a&&a.remove();const r=document.createElement("div");r.className="form-error-alert",r.style.cssText="\n      position: fixed;\n      top: 20px;\n      right: 20px;\n      background: linear-gradient(135deg, #e74c3c, #c0392b);\n      color: white;\n      padding: 1rem 1.5rem;\n      border-radius: 12px;\n      box-shadow: 0 8px 32px rgba(231, 76, 60, 0.3);\n      z-index: 10000;\n      font-weight: 600;\n      max-width: 400px;\n      animation: slideInAlert 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n      border: 1px solid rgba(255, 255, 255, 0.2);\n      backdrop-filter: blur(10px);\n      font-family: inherit;\n    ",r.innerHTML=`\n      <div style="display: flex; align-items: center; gap: 0.75rem;">\n        <div style="font-size: 1.25rem;">⚠️</div>\n        <div>${e}</div>\n      </div>\n    `,document.body.appendChild(r),setTimeout(()=>{r.parentNode&&(r.style.animation="slideInAlert 0.3s reverse",setTimeout(()=>r.remove(),300))},4e3)},[]),w=e.useCallback(e=>async a=>{a&&a.preventDefault();const r=Object.keys(i).reduce((e,a)=>(e[a]=!0,e),{});d(r);const t=x();if(t.isValid){c(!0);try{await e(i)}catch(o){}finally{c(!1)}}else{b(t.errors);const e=Object.values(t.errors)[0];v(`Erro no formulário: ${e}`)}},[i,x,b,v]),y=e.useCallback(()=>{t(a),n({}),d({}),c(!1)},[a]),j=0===Object.keys(o).length&&Object.keys(s).length>0;return e.useEffect(()=>{const e=localStorage.getItem("appointmentForm");if(e)try{const a=JSON.parse(e);t(e=>({...e,...a}))}catch(a){}},[]),e.useEffect(()=>{Object.keys(i).length>0&&Object.values(i).some(e=>e)&&localStorage.setItem("appointmentForm",JSON.stringify(i))},[i]),{values:i,errors:o,touched:s,isSubmitting:l,isValid:j,setValue:m,setFieldTouched:p,setFieldError:h,handleChange:u,handleBlur:f,handleSubmit:w,resetForm:y,validateField:g,validateAllFields:x}},Gi=e=>e||0===e?new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e):"R$ 0,00",Wi=e=>e?e.toLowerCase().split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "):"",Qi="555591679300",Ui="Olá! Gostaria de agendar uma consulta.",Ji="EMERGÊNCIA - Preciso de atendimento urgente",Ki=()=>({sendAppointment:e.useCallback(e=>{const{name:a,phone:r,email:i,service:t,servicePrice:o,date:n,time:s,professional:d,isReturningPatient:l,insurance:c,observations:m,birthDate:p}=e,h="no-preference"===d?"Sem preferência":"maria"===d?"Dra. Maria":"Dr. João",g="none"===c?"Não possui":c,x=l?"Sim":"Não",u=`AGENDAMENTO DE CONSULTA\n\nNome: ${Wi(a)}\nTelefone: ${r}\nEmail: ${i}\n${p?`Nascimento: ${new Date(p).toLocaleDateString("pt-BR")}\n`:""}\nTipo: ${t}\nData: ${((e,a)=>e&&a?`${new Date(e).toLocaleDateString("pt-BR",{weekday:"long",year:"numeric",month:"long",day:"numeric"})} às ${a}`:"")(n,s)}\nProfissional: ${h}\nValor: ${Gi(o)}\nConvenio: ${g}\nJa e paciente: ${x}\n${m?`Observacoes: ${m}\n`:""}\nAguardo confirmacao!`,f=`https://wa.me/${Qi}?text=${encodeURIComponent(u)}`;window.open(f,"_blank")},[]),sendContact:e.useCallback(e=>{const{name:a,phone:r,email:i,subject:t,message:o}=e,n=`https://wa.me/${Qi}?text=${encodeURIComponent(`Olá! Recebi seu contato através do site.\n\n*Nome:* ${a}\n*Email:* ${i}\n*Telefone:* ${r}\n*Assunto:* ${t}\n*Mensagem:* ${o}`)}`;window.open(n,"_blank")},[]),sendEmergency:e.useCallback(()=>{const e=`https://wa.me/${Qi}?text=${encodeURIComponent(Ji)}`;window.open(e,"_blank")},[]),sendGeneralInquiry:e.useCallback((e=Ui)=>{const a=`https://wa.me/${Qi}?text=${encodeURIComponent(e)}`;window.open(a,"_blank")},[]),whatsappNumber:Qi}),Xi=x.div`
  margin-bottom: 2rem;
  position: relative;
`,Zi=x.label`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
  color: var(--text-dark);
  gap: 0.375rem;
  letter-spacing: 0.015em;
  text-transform: none;
`,et=x.div`
  position: relative;
`,at=x.div`
  width: 100%;
  padding: 1rem;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: #111827;
  background: #ffffff;
  transition: border-color 0.3s ease;
  position: relative;

  &::placeholder {
    color: #9ca3af;
    font-weight: 400;
    opacity: 0.8;
    transition: opacity 0.2s ease;
  }

  &:focus::placeholder {
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }

  &:disabled {
    background: #f9fafb;
    border-color: #e5e7eb;
    color: #9ca3af;
    cursor: not-allowed;
    opacity: 0.6;
  }
`,rt=x.span`
  display: block;
  margin-top: 0.5rem;
  font-size: 12px;
  color: #F44336;
  font-weight: 400;
`,it=x.div`
  position: absolute;
  right: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: #9ca3af;
  pointer-events: none;
  font-size: 1.125rem;

  &::after {
    content: '📅';
  }
`,tt=x.span`
  display: block;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #6b7280;
  line-height: 1.4;
  font-style: italic;
`,ot=x.span`
  color: #F44336;
  font-weight: 700;
  margin-left: 0.375rem;
  font-size: 1rem;
`,nt=x.span`
  color: #9ca3af;
  font-weight: 400;
  font-size: 0.75rem;
  margin-left: 0.375rem;
  background: #f3f4f6;
  padding: 0.125rem 0.5rem;
  border-radius: 12px;
  text-transform: lowercase;
`,st=e.forwardRef(({label:a,helpText:r,simpleHelpText:i,required:t=!1,optional:o=!1,showOptional:n=!0,children:s,className:d,fieldName:l,description:c,showCalendarIcon:m=!1,...p},h)=>{const g=e.useId(),x=`${g}-label`,u=`${g}-help`,f=`${g}-description`,b=[];c&&b.push(f),r&&b.push(u);const v=e.isValidElement(s)?e.cloneElement(s,{id:g,"aria-labelledby":a?x:void 0,"aria-describedby":b.length>0?b.join(" "):void 0,"aria-invalid":"false","aria-required":t?"true":"false",name:l||s.props.name}):s;return S.jsxs(Xi,{className:d,role:"group","aria-labelledby":a?x:void 0,children:[a&&S.jsxs(Zi,{id:x,htmlFor:g,$required:t,children:[a,t&&S.jsx(ot,{"aria-label":"Campo obrigatório",children:"*"}),!t&&n&&o&&S.jsx(nt,{"aria-label":"Campo opcional",children:"(opcional)"})]}),c&&S.jsx(tt,{id:f,role:"note",children:c}),S.jsxs(et,{children:[v,m&&S.jsx(it,{"aria-hidden":"true"})]}),i&&S.jsx(rt,{children:i}),r&&S.jsx(tt,{id:u,role:"note",children:r})]})});st.displayName="FormField";const dt=x.input`
  ${at}

  &::placeholder {
    color: var(--text-light);
  }
`;e.memo(e.forwardRef(({label:a,onChange:r,required:i,helpText:t,simpleHelpText:o,showCalendarIcon:n,...s},d)=>{const l=e.useCallback(e=>{r&&r(e.target.value)},[r]);return S.jsx(st,{label:a,required:i,helpText:t,simpleHelpText:o,showCalendarIcon:n,children:S.jsx(dt,{ref:d,...s,onChange:l})})})).displayName="Input";const lt=x.select`
  ${at}
  cursor: pointer;
`;e.memo(e.forwardRef(({label:a,error:r,options:i=[],onChange:t,required:o,helpText:n,...s},d)=>{const l=e.useCallback(e=>{t&&t(e.target.value)},[t]);return S.jsx(st,{label:a,error:r,required:o,helpText:n,children:S.jsx(lt,{ref:d,...s,$error:!!r,onChange:l,children:i.map((e,a)=>S.jsx("option",{value:e.value||e,children:e.label||e},a))})})})).displayName="Select";const ct=x.textarea`
  ${at}
  resize: vertical;
  min-height: 120px;
  font-family: inherit;

  &::placeholder {
    color: var(--text-light);
  }
`;e.memo(e.forwardRef(({label:a,error:r,onChange:i,required:t,helpText:o,...n},s)=>{const d=e.useCallback(e=>{i&&i(e.target.value)},[i]);return S.jsx(st,{label:a,error:r,required:t,helpText:o,children:S.jsx(ct,{ref:s,...n,$error:!!r,onChange:d})})})).displayName="Textarea",x.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`,x.div`
  border: 2px solid ${e=>e.selected?"var(--primary-color)":"var(--border-color)"};
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${e=>e.selected?"var(--primary-light)":"white"};

  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-2px);
  }
`,x.h3`
  margin: 0 0 0.5rem 0;
  color: var(--text-dark);
  font-size: 1.1rem;
`,x.p`
  margin: 0 0 1rem 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.4;
`,x.div`
  font-weight: 600;
  color: var(--primary-color);
  font-size: 1.1rem;
`,x.div`
  color: #e53e3e;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;const mt=x.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,pt=x.label`
  font-weight: 500;
  color: var(--text-dark);
`,ht=x.input`
  padding: 1rem;
  border: 2px solid ${e=>e.error?"var(--error-color)":"var(--border-color)"};
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${e=>e.error?"var(--error-color)":"var(--primary-color)"};
  }
`,gt=x.span`
  color: #e53e3e;
  font-size: 0.875rem;
`,xt=x.span`
  color: var(--text-secondary);
  font-size: 0.875rem;
`,ut=({value:a,onChange:r,onBlur:i,error:t,...o})=>{const[n,s]=e.useState("");e.useEffect(()=>{const e=new Date;e.setDate(e.getDate()+1),s(e.toISOString().split("T")[0])},[]);return S.jsxs(mt,{children:[S.jsx(pt,{children:"Data da consulta"}),S.jsx(ht,{type:"date",value:a,onChange:e=>{e.preventDefault(),e.stopPropagation();const a=e.target.value;(e=>{const a=new Date(e).getDay();return 0===a||6===a})(a)?alert("Por favor, selecione um dia da semana (segunda a sexta-feira)."):r(a)},onBlur:i,min:n,error:t,...o}),S.jsx(xt,{children:"Apenas dias úteis (segunda a sexta-feira)"}),t&&S.jsx(gt,{children:t})]})},ft=x.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,bt=x.label`
  font-weight: 500;
  color: var(--text-dark);
`,vt=x.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,wt=x.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,yt=x.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--text-dark);

  svg {
    color: ${e=>"morning"===e.$period?"#f59e0b":"#f97316"};
    font-size: 1.2rem;
  }
`,jt=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.5rem;
`,zt=x.button`
  padding: 0.75rem;
  border: 2px solid ${e=>e.selected?"var(--primary-color)":"var(--border-color)"};
  background: ${e=>e.selected?"var(--primary-color)":"white"};
  color: ${e=>e.selected?"white":"var(--text-dark)"};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    border-color: var(--primary-color);
    background: ${e=>e.selected?"var(--primary-color)":"var(--primary-light)"};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: var(--border-color);
    border-color: var(--border-color);
  }
`,kt=x.span`
  color: #e53e3e;
  font-size: 0.875rem;
`,Ct=x.span`
  color: var(--text-secondary);
  font-size: 0.875rem;
`,$t=({selectedDate:a,selectedTime:r,onTimeSelect:i,error:t})=>{const[o,n]=e.useState([]),[s,d]=e.useState([]);e.useEffect(()=>{if(a){const{morning:e,afternoon:a}=(()=>{const e=[],a=[];for(let r=8;r<12;r++)e.push(`${r.toString().padStart(2,"0")}:00`),e.push(`${r.toString().padStart(2,"0")}:30`);for(let r=14;r<18;r++)a.push(`${r.toString().padStart(2,"0")}:00`),a.push(`${r.toString().padStart(2,"0")}:30`);return{morning:e,afternoon:a}})();n(e),d(a)}else n([]),d([])},[a]);const l=e=>{i(e)};return S.jsxs(ft,{children:[S.jsx(bt,{children:"Horário preferido"}),a?S.jsxs(vt,{children:[S.jsxs(wt,{children:[S.jsxs(yt,{$period:"morning",children:[S.jsx(ge,{}),"Manhã (8h às 12h)"]}),S.jsx(jt,{children:o.map(e=>S.jsx(zt,{type:"button",selected:r===e,onClick:()=>l(e),children:e},e))})]}),S.jsxs(wt,{children:[S.jsxs(yt,{$period:"afternoon",children:[S.jsx(we,{}),"Tarde (14h às 18h)"]}),S.jsx(jt,{children:s.map(e=>S.jsx(zt,{type:"button",selected:r===e,onClick:()=>l(e),children:e},e))})]})]}):S.jsx(Ct,{children:"Selecione uma data primeiro"}),t&&S.jsx(kt,{children:t})]})},Et=x.div`
  max-width: 800px;
  margin: 0 auto;
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border-color);

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin: 0 0.5rem;
  }
`,St=x.div`
  margin-bottom: 2.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  &:first-child {
    background: linear-gradient(135deg, #f8fcff 0%, #ffffff 100%);
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid #e2e8f0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    margin-bottom: 3rem;

    @media (max-width: 768px) {
      padding: 1.5rem;
    }
  }
`,At=x.h3`
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
`,Pt=x.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: ${e=>e.$columns||"1fr 1fr"};
    gap: 2.5rem;
  }

  @media (min-width: 1024px) {
    gap: 3rem;
  }
`,Bt=x(f.div)`
  background: linear-gradient(135deg, var(--primary-color-light), #f8f9fa);
  border: 2px solid var(--primary-color);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    padding: 1.25rem;
    margin-bottom: 1.5rem;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin-bottom: 1.25rem;
    border-radius: 8px;
  }
`,Nt=x.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.875rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 0.75rem;
    line-height: 1.3;
  }
`,Dt=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(46, 139, 87, 0.1);

  &:last-child {
    border-bottom: none;
    font-weight: 600;
    font-size: 1.1rem;

    span:first-child {
      color: #000000;
    }

    span:last-child {
      color: #000000;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.75rem 0;
    gap: 0.25rem;

    span:first-child {
      font-weight: 600;
      font-size: 0.875rem;
      color: #374151;
    }

    span:last-child {
      font-size: 0.875rem;
      color: #111827;
      padding-left: 0.5rem;
    }

    &:last-child {
      padding: 0.875rem 0;
      border-top: 2px solid rgba(46, 139, 87, 0.2);
      margin-top: 0.5rem;

      span:first-child {
        font-size: 0.95rem;
        color: #000000;
      }

      span:last-child {
        font-size: 1rem;
        font-weight: 700;
        color: #000000;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 0.625rem 0;

    span:first-child {
      font-size: 0.8rem;
    }

    span:last-child {
      font-size: 0.8rem;
      padding-left: 0.25rem;
    }

    &:last-child {
      span:first-child {
        font-size: 0.875rem;
      }

      span:last-child {
        font-size: 0.95rem;
      }
    }
  }
`,Rt=x(f.div)`
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
`;x.div`
  margin-top: 0.5rem;
`,x.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: normal;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: var(--radius-sm);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(46, 139, 87, 0.05);
  }

  &:focus-within {
    outline: 2px solid var(--focus-color, #005fcc);
    outline-offset: 2px;
  }

  input[type="radio"] {
    margin: 0;
    width: 18px;
    height: 18px;
    accent-color: var(--primary-color);

    &:focus {
      outline: 2px solid var(--focus-color, #005fcc);
      outline-offset: 2px;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`,x.label`
  font-weight: 600;
  color: var(--text-dark);
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  display: block;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`,x.div`
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`,x.div`
  color: var(--error-color, #dc3545);
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '⚠';
    font-size: 1rem;
  }
`,x.span`
  color: var(--error-color, #dc3545);
  margin-left: 0.25rem;
  font-weight: 600;

  &::after {
    content: '*';
  }
`,x(f.div)`
  background: #e3f2fd;
  border: 1px solid #2196f3;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #1976d2;

  svg {
    color: #2196f3;
  }
`,x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
`,x.button`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${e=>"primary"===e.variant?"var(--primary-color)":"var(--border-color)"};
  background: ${e=>"primary"===e.variant?"var(--primary-color)":"transparent"};
  color: ${e=>"primary"===e.variant?"white":"var(--text-dark)"};
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover:not(:disabled) {
    background: ${e=>"primary"===e.variant?"var(--primary-dark)":"var(--background-light)"};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
`,x.div`
  padding: 2rem;
  text-align: center;
  color: var(--text-light);
  font-size: 0.875rem;

  &::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid var(--border-color);
    border-top: 2px solid var(--primary-color);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-right: 0.5rem;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,x.div`
  margin-bottom: 2rem;

  .progress-bar {
    width: 100%;
    height: 4px;
    background-color: #e9ecef;
    border-radius: 2px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
    border-radius: 2px;
  }

  .progress-text {
    text-align: center;
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: var(--text-gray);
  }
`;const It=x.div`
  margin-bottom: 2.5rem;
`,Mt=x.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
`,Tt=x.div`
  position: relative;
`,Ot=x.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
  color: var(--text-dark);
`,Lt=x.span`
  color: #F44336;
  margin-left: 0.25rem;
`,Vt=x.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid ${e=>e.$hasError?"#F44336":"#d1d5db"};
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: #111827;
  background: #ffffff;
  transition: border-color 0.3s ease;

  &::placeholder {
    color: #9ca3af;
    font-weight: 400;
    opacity: 0.8;
  }

  &:focus {
    outline: none;
    border-color: ${e=>e.$hasError?"#F44336":"var(--primary-color)"};
  }

  &:hover:not(:focus) {
    border-color: ${e=>e.$hasError?"#F44336":"#9ca3af"};
  }

  &:disabled {
    background: #f9fafb;
    border-color: #e5e7eb;
    color: #9ca3af;
    cursor: not-allowed;
    opacity: 0.6;
  }
`,Ft=x.span`
  display: ${e=>e.$show?"block":"none"};
  margin-top: 0.5rem;
  font-size: 12px;
  color: #F44336;
  font-weight: 400;
`;x.div`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  pointer-events: none;
  font-size: 1.125rem;

  &::after {
    content: '📅';
  }
`;const qt=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,Ht=x.div`
  background: #ffffff;
  border: 2px solid ${e=>e.$selected?"#2E8B57":"#e5e7eb"};
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: #2E8B57;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(46, 139, 87, 0.15);
  }

  ${e=>e.$selected&&"\n    background: linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%);\n    box-shadow: 0 4px 15px rgba(46, 139, 87, 0.2);\n  "}
`,_t=x.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${e=>e.$selected?"#2E8B57":"#f8f9fa"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  transition: all 0.3s ease;
  position: relative;

  ${Ht}:hover & {
    background: #2E8B57;
    transform: scale(1.1);
  }

  svg {
    font-size: 24px;
    color: ${e=>e.$selected?"#ffffff":"#6c757d"};
    transition: color 0.3s ease;
  }

  ${Ht}:hover & svg {
    color: #ffffff;
  }
`,Yt=x.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
  text-align: center;
`,Gt=x.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #2E8B57;
  margin-bottom: 0.75rem;
  text-align: center;
`,Wt=x.p`
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.5;
  text-align: center;
  margin: 0;
`,Qt=x.div`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #2E8B57;
  display: ${e=>e.$show?"flex":"none"};
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  font-weight: bold;

  &::after {
    content: '✓';
  }
`,Ut=x.div`
  margin-bottom: 2.5rem;
`,Jt=x.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
`,Kt=x.div`
  position: relative;
`,Xt=x.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
  color: var(--text-dark);
`,Zt=x.select`
  width: 100%;
  padding: 1rem;
  border: 2px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: #111827;
  background: #ffffff;
  transition: border-color 0.3s ease;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 20px;
  padding-right: 40px;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }

  &:hover:not(:focus) {
    border-color: #9ca3af;
  }

  option {
    padding: 8px;
    font-size: 1rem;
  }
`,eo=x.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,ao=x.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
  color: var(--text-dark);
`,ro=x.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`,io=x.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: normal;
  cursor: pointer;
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  transition: all 0.3s ease;
  flex: 1;
  min-height: 50px;

  &:hover {
    border-color: var(--primary-color);
    background-color: rgba(46, 139, 87, 0.05);
  }

  &:has(input:checked) {
    border-color: var(--primary-color);
    background-color: rgba(46, 139, 87, 0.1);
  }

  input[type="radio"] {
    width: 20px;
    height: 20px;
    accent-color: var(--primary-color);
    margin: 0;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: none;
    }
  }

  span {
    font-size: 1rem;
    color: #374151;
    font-weight: 500;
  }
`,to=x.div`
  margin-bottom: 2.5rem;
`,oo=x.div`
  position: relative;
`,no=x.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
  color: var(--text-dark);
`,so=x.textarea`
  width: 100%;
  padding: 1.25rem;
  border: 2px solid #d1d5db;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: #111827;
  background: #ffffff;
  transition: border-color 0.3s ease;
  resize: vertical;
  min-height: 140px;
  font-family: inherit;

  &::placeholder {
    color: #6b7280;
    font-weight: 400;
    opacity: 1;
  }

  @media (max-width: 768px) {
    &::placeholder {
      color: #4b5563;
      font-size: 0.95rem;
      line-height: 1.5;
    }
  }

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(46, 139, 87, 0.1);
  }

  &:hover:not(:focus) {
    border-color: #9ca3af;
  }

  &:disabled {
    background: #f9fafb;
    border-color: #e5e7eb;
    color: #9ca3af;
    cursor: not-allowed;
    opacity: 0.6;
  }
`,lo=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;

  .count {
    color: ${e=>e.$isNearLimit?"#f59e0b":e.$isOverLimit?"#ef4444":"#6b7280"};
    font-weight: ${e=>e.$isNearLimit||e.$isOverLimit?"600":"400"};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;

    .count {
      align-self: flex-end;
      font-size: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    gap: 0.5rem;

    .count {
      font-size: 0.75rem;
    }
  }
`,co=x.div`
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.4;

  ul {
    margin: 0.5rem 0 0 1.25rem;
    padding: 0;

    li {
      margin-bottom: 0.25rem;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.3;

    strong {
      display: block;
      margin-bottom: 0.5rem;
      font-size: 0.85rem;
    }

    ul {
      margin: 0.75rem 0 0 1rem;

      li {
        margin-bottom: 0.4rem;
        font-size: 0.8rem;
        line-height: 1.2;
        padding-left: 0.25rem;
      }
    }
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;

    strong {
      font-size: 0.8rem;
      color: #374151;
    }

    ul {
      margin: 0.5rem 0 0 0.75rem;
      list-style: none;

      li {
        margin-bottom: 0.35rem;
        font-size: 0.75rem;
        padding-left: 0.5rem;
        position: relative;

        &::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #9ca3af;
        }
      }
    }
  }
`,mo=[{value:"no-preference",label:"Sem preferência"},{value:"maria",label:"Dra. Maria"},{value:"joao",label:"Dr. João"}],po=[{id:"consulta-geral",name:"Consulta Geral",price:"R$ 120,00",description:"Avaliação completa da saúde bucal e diagnóstico preventivo",icon:function(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M447.1 112c-34.2.5-62.3 28.4-63 62.6-.5 24.3 12.5 45.6 32 56.8V344c0 57.3-50.2 104-112 104-60 0-109.2-44.1-111.9-99.2C265 333.8 320 269.2 320 192V36.6c0-11.4-8.1-21.3-19.3-23.5L237.8.5c-13-2.6-25.6 5.8-28.2 18.8L206.4 35c-2.6 13 5.8 25.6 18.8 28.2l30.7 6.1v121.4c0 52.9-42.2 96.7-95.1 97.2-53.4.5-96.9-42.7-96.9-96V69.4l30.7-6.1c13-2.6 21.4-15.2 18.8-28.2l-3.1-15.7C107.7 6.4 95.1-2 82.1.6L19.3 13C8.1 15.3 0 25.1 0 36.6V192c0 77.3 55.1 142 128.1 156.8C130.7 439.2 208.6 512 304 512c97 0 176-75.4 176-168V231.4c19.1-11.1 32-31.7 32-55.4 0-35.7-29.2-64.5-64.9-64zm.9 80c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"}}]})(e)}},{id:"ortodontia",name:"Ortodontia",price:"R$ 180,00",description:"Correção de posicionamento dental e mordida",icon:fe},{id:"estetica-geral",name:"Estética Geral",price:"R$ 250,00",description:"Clareamento, facetas e harmonização do sorriso",icon:me},{id:"implantes",name:"Implantes",price:"R$ 350,00",description:"Reposição de dentes perdidos com implantes dentários",icon:be},{id:"emergencia",name:"Emergência",price:"R$ 200,00",description:"Atendimento urgente para dor e traumas dentários",icon:function(e){return O({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm144-248c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48zm176 248c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"}}]})(e)}},{id:"retorno",name:"Retorno",price:"R$ 80,00",description:"Consulta de acompanhamento e revisão de tratamento",icon:function(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z"}}]})(e)}}],ho=[{value:"none",label:"Não possuo convênio"},{value:"unimed",label:"Unimed"},{value:"bradesco",label:"Bradesco Saúde"},{value:"sulamerica",label:"SulAmérica"}],go={name:"",email:"",phone:"",birthDate:"",service:"",serviceName:"",servicePrice:0,date:"",time:"",professional:"no-preference",isReturningPatient:!1,insurance:"none",observations:""},xo={name:Vi,email:Fi,phone:qi,date:Hi,time:e=>_i(e,"Horário"),service:e=>_i(e,"Tipo de consulta")},uo=()=>{const[a,r]=e.useState(!1),{sendAppointment:i}=Ki(),{values:t,errors:o,isSubmitting:n,handleChange:s,handleBlur:d,handleSubmit:l,setValue:c}=Yi(go,xo),m=()=>{r(!1),window.location.reload()};if(a)return S.jsx(Et,{children:S.jsxs(Rt,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.5},children:[S.jsx(G,{}),S.jsx("h3",{children:"Agendamento Enviado!"}),S.jsx("p",{children:"Sua solicitação de agendamento foi enviada via WhatsApp. Em breve entraremos em contato para confirmar a consulta."}),S.jsx(ze,{variant:"primary",onClick:m,children:"Novo Agendamento"})]})});const p=t.serviceName&&t.date&&t.time;return S.jsx(Et,{children:S.jsxs("form",{onSubmit:l(async e=>{setTimeout(()=>{i(e),r(!0),localStorage.removeItem("appointmentForm")},2e3)}),children:[S.jsxs(It,{children:[S.jsx(At,{children:"1. Dados Pessoais"}),S.jsxs(Mt,{children:[S.jsxs(Tt,{children:[S.jsxs(Ot,{children:["Nome completo",S.jsx(Lt,{children:"*"})]}),S.jsx(Vt,{name:"name",type:"text",value:t.name,onChange:e=>c("name",e.target.value),onBlur:d("name"),placeholder:"Digite seu nome completo",required:!0,$hasError:o.name}),S.jsx(Ft,{$show:o.name,children:"Nome é obrigatório"})]}),S.jsxs(Tt,{children:[S.jsxs(Ot,{children:["Email",S.jsx(Lt,{children:"*"})]}),S.jsx(Vt,{name:"email",type:"email",value:t.email,onChange:e=>c("email",e.target.value),onBlur:d("email"),placeholder:"seu@email.com",required:!0,$hasError:o.email}),S.jsx(Ft,{$show:o.email,children:"Email é obrigatório"})]}),S.jsxs(Tt,{children:[S.jsxs(Ot,{children:["Telefone/WhatsApp",S.jsx(Lt,{children:"*"})]}),S.jsx(Vt,{name:"phone",type:"tel",value:t.phone,onChange:e=>(e=>{const a=(e=>{if(!e)return"";const a=e.replace(/\D/g,"");return a.length<=2?`(${a}`:a.length<=7?`(${a.slice(0,2)}) ${a.slice(2)}`:a.length<=11?`(${a.slice(0,2)}) ${a.slice(2,7)}-${a.slice(7)}`:`(${a.slice(0,2)}) ${a.slice(2,7)}-${a.slice(7,11)}`})(e);c("phone",a)})(e.target.value),onBlur:d("phone"),placeholder:"(11) 99999-9999",required:!0,$hasError:o.phone}),S.jsx(Ft,{$show:o.phone,children:"Telefone é obrigatório"})]}),S.jsxs(Tt,{children:[S.jsx(Ot,{children:"Data de nascimento"}),S.jsx(Vt,{name:"birthDate",type:"date",value:t.birthDate,onChange:e=>c("birthDate",e.target.value),placeholder:"dd/mm/aaaa",$hasError:!1})]})]})]}),S.jsxs(St,{children:[S.jsx(At,{children:"2. Tipo de Consulta"}),S.jsx(qt,{children:po.map(e=>{const a=e.icon,r=t.service===e.id;return S.jsxs(Ht,{$selected:r,onClick:()=>(e=>{c("service",e.id),c("serviceName",e.name),c("servicePrice",parseFloat(e.price.replace("R$ ","").replace(",",".")))})(e),children:[S.jsx(Qt,{$show:r}),S.jsx(_t,{$selected:r,children:S.jsx(a,{})}),S.jsx(Yt,{children:e.name}),S.jsx(Gt,{children:e.price}),S.jsx(Wt,{children:e.description})]},e.id)})}),o.service&&S.jsx(Ft,{$show:!0,style:{marginTop:"1rem",textAlign:"center"},children:"Selecione um tipo de consulta"})]}),S.jsxs(St,{children:[S.jsx(At,{children:"3. Data e Horário"}),S.jsxs(Pt,{$columns:"1fr",children:[S.jsx(ut,{name:"date",value:t.date,onChange:s("date"),onBlur:d("date"),error:o.date,"data-field":"date"}),S.jsx($t,{name:"time",selectedDate:t.date,selectedTime:t.time,onTimeSelect:s("time"),error:o.time,"data-field":"time"})]})]}),S.jsxs(Ut,{children:[S.jsx(At,{children:"4. Preferências"}),S.jsxs(Jt,{children:[S.jsxs(Kt,{children:[S.jsx(Xt,{children:"Profissional preferido"}),S.jsx(Zt,{value:t.professional,onChange:e=>c("professional",e.target.value),children:mo.map(e=>S.jsx("option",{value:e.value,children:e.label},e.value))})]}),S.jsxs(eo,{children:[S.jsx(ao,{children:"Já é nosso paciente?"}),S.jsxs(ro,{children:[S.jsxs(io,{children:[S.jsx("input",{type:"radio",name:"isReturningPatient",checked:!0===t.isReturningPatient,onChange:()=>c("isReturningPatient",!0)}),S.jsx("span",{children:"Sim"})]}),S.jsxs(io,{children:[S.jsx("input",{type:"radio",name:"isReturningPatient",checked:!1===t.isReturningPatient,onChange:()=>c("isReturningPatient",!1)}),S.jsx("span",{children:"Não"})]})]})]})]}),S.jsx("div",{style:{marginTop:"2rem"},children:S.jsxs(Kt,{children:[S.jsx(Xt,{children:"Convênio"}),S.jsx(Zt,{value:t.insurance,onChange:e=>c("insurance",e.target.value),children:ho.map(e=>S.jsx("option",{value:e.value,children:e.label},e.value))})]})})]}),S.jsxs(to,{children:[S.jsx(At,{children:"5. Observações"}),S.jsxs(oo,{children:[S.jsx(no,{children:"Informações adicionais"}),S.jsx(so,{value:t.observations,onChange:e=>c("observations",e.target.value),placeholder:"Descreva sintomas, alergias, medicamentos em uso ou outras informações importantes para sua consulta...",maxLength:500}),S.jsxs(lo,{$isNearLimit:t.observations.length>400,$isOverLimit:t.observations.length>500,children:[S.jsxs(co,{children:[S.jsx("strong",{children:"Sugestões do que incluir:"}),S.jsxs("ul",{children:[S.jsx("li",{children:"Sintomas que está sentindo"}),S.jsx("li",{children:"Alergias a medicamentos"}),S.jsx("li",{children:"Medicamentos em uso"}),S.jsx("li",{children:"Histórico de tratamentos anteriores"})]})]}),S.jsxs("span",{className:"count",children:[t.observations.length,"/500 caracteres"]})]})]})]}),p&&S.jsxs(Bt,{children:[S.jsx(Nt,{children:"Resumo do Agendamento"}),S.jsxs(Dt,{children:[S.jsx("span",{children:"Paciente:"}),S.jsx("span",{children:Wi(t.name)})]}),S.jsxs(Dt,{children:[S.jsx("span",{children:"Tipo de consulta:"}),S.jsx("span",{children:t.serviceName})]}),S.jsxs(Dt,{children:[S.jsx("span",{children:"Data e horário:"}),S.jsxs("span",{children:[new Date(t.date).toLocaleDateString("pt-BR")," às ",t.time]})]}),S.jsxs(Dt,{children:[S.jsx("span",{children:"Profissional:"}),S.jsx("span",{children:mo.find(e=>e.value===t.professional)?.label})]}),S.jsxs(Dt,{children:[S.jsx("span",{children:"Valor da consulta:"}),S.jsx("span",{children:Gi(t.servicePrice)})]})]}),S.jsx(ze,{type:"submit",variant:"primary",size:"large",disabled:n,style:{width:"100%"},children:n?S.jsxs(S.Fragment,{children:[S.jsx(pe,{style:{animation:"spin 1s linear infinite",marginRight:"0.5rem"}}),"Enviando agendamento..."]}):"Agendar Consulta via WhatsApp"})]})})},fo=x.div`
  .hero-section {
    background: linear-gradient(135deg, var(--primary-color) 0%, #228B22 100%);
    color: var(--white);
    padding: var(--space-3xl) 0 var(--space-2xl);
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

    .hero-content {
      max-width: 800px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    .hero-title {
      font-size: var(--font-size-4xl);
      font-weight: 700;
      margin-bottom: var(--space-lg);
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      color: var(--white);
      line-height: 1.2;
      letter-spacing: -0.02em;
    }

    .hero-subtitle {
      font-size: var(--font-size-xl);
      opacity: 0.95;
      max-width: 600px;
      margin: 0 auto var(--space-xl);
      line-height: 1.7;
      font-weight: 400;
      letter-spacing: 0.01em;
    }

    @media (max-width: 1024px) {
      padding: var(--space-2xl) 0 var(--space-xl);

      .hero-title {
        font-size: var(--font-size-3xl);
      }

      .hero-subtitle {
        font-size: var(--font-size-lg);
      }
    }

    @media (max-width: 768px) {
      padding: var(--space-xl) 0 var(--space-lg);

      .hero-title {
        font-size: var(--font-size-2xl);
      }

      .hero-subtitle {
        font-size: var(--font-size-base);
      }
    }

    @media (max-width: 480px) {
      padding: var(--space-lg) 0 var(--space-md);

      .hero-title {
        font-size: var(--font-size-xl);
      }

      .hero-subtitle {
        font-size: var(--font-size-sm);
      }
    }
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 3rem;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    @media (max-width: 480px) {
      gap: 1.2rem;
    }
  }

  .feature-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: var(--radius-lg);
    padding: var(--space-lg);
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    &:hover {
      transform: translateY(-12px) scale(1.02);
      background: rgba(255, 255, 255, 0.15);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15),
                  0 8px 16px rgba(0, 0, 0, 0.1),
                  0 0 0 1px rgba(255, 255, 255, 0.05);
    }

    .feature-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: rgba(255, 255, 255, 0.9);
      display: block;
    }

    .feature-title {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--white);
    }

    .feature-description {
      font-size: 0.9rem;
      opacity: 0.85;
      line-height: 1.4;
      color: var(--white);
    }

    @media (max-width: 768px) {
      padding: var(--space-md);

      .feature-icon {
        font-size: 2rem;
      }

      .feature-title {
        font-size: 1rem;
      }

      .feature-description {
        font-size: 0.85rem;
      }
    }
  }

  .form-section {
    padding: 80px 0;
    background: var(--white);

    @media (max-width: 768px) {
      padding: 60px 0;
    }

    @media (max-width: 480px) {
      padding: 40px 0;
    }
  }

  .section-header {
    text-align: center;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
      margin-bottom: 2rem;
    }
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: 1rem;
    text-align: center;
    letter-spacing: -0.01em;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 60px;
      height: 4px;
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color, #87CEEB));
      margin: 1rem auto 0;
      border-radius: 2px;
    }

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  .section-description {
    font-size: 1.1rem;
    color: var(--text-gray);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.65;
    text-align: center;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.6;
    }

    @media (max-width: 480px) {
      font-size: 0.95rem;
      line-height: 1.55;
    }
  }

  .info-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
  }

  .info-card {
    background: var(--white);
    border-radius: var(--radius-lg);
    padding: 2rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12),
                0 4px 16px rgba(0, 0, 0, 0.08),
                0 2px 8px rgba(0, 0, 0, 0.04);
    border: 2px solid transparent;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: translateY(-12px) scale(1.02);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15),
                  0 12px 32px rgba(0, 0, 0, 0.12),
                  0 6px 16px rgba(0, 0, 0, 0.08);
    }

    .info-card-title {
      font-size: 1.3rem;
      font-weight: 600;
      color: var(--primary-color);
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;

      .info-icon {
        font-size: 1.5rem;
      }
    }

    .info-list {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        padding: 0.5rem 0;
        color: var(--text-gray);
        display: flex;
        align-items: center;
        gap: 0.5rem;
        line-height: 1.5;

        &::before {
          content: '✓';
          color: var(--primary-color);
          font-weight: bold;
          font-size: 1rem;
        }
      }
    }

    @media (max-width: 768px) {
      padding: 1.5rem;

      .info-card-title {
        font-size: 1.2rem;
      }
    }

    @media (max-width: 480px) {
      padding: 1.2rem;

      .info-card-title {
        font-size: 1.1rem;
      }
    }
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  button:focus-visible,
  [tabindex]:focus-visible,
  .info-card:focus-visible {
    outline: 3px solid var(--focus-color, #005fcc);
    outline-offset: 2px;
  }

  .feature-card:focus-visible,
  .feature-card:focus {
    outline: none;
  }

  @media (prefers-contrast: high) {
    .feature-card {
      border: 2px solid var(--white);
    }

    .info-card {
      border: 2px solid var(--primary-color);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .feature-card,
    .info-card {
      transition: none;
    }

    .feature-card:hover,
    .info-card:hover {
      transform: none;
    }
  }

  .loading-skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
  }

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  .feature-card,
  .info-card {
    will-change: transform;
    contain: layout style paint;
  }

  .feature-card:hover,
  .info-card:hover {
    will-change: auto;
  }

  @media (pointer: coarse) {
    .feature-card,
    .info-card {
      min-height: 44px;
    }
  }
`,bo=()=>S.jsx(ya,{children:S.jsxs(fo,{children:[S.jsx("header",{className:"hero-section",role:"banner",children:S.jsx("div",{className:"container",children:S.jsxs(f.div,{className:"hero-content",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[S.jsx(f.h1,{className:"hero-title",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:"Agende sua Consulta Online"}),S.jsx(f.p,{className:"hero-subtitle",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},"aria-describedby":"hero-title",children:"Sistema rápido e prático para agendar sua consulta odontológica. Escolha o horário ideal e receba confirmação imediata via WhatsApp."}),S.jsxs(f.div,{className:"features-grid",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},role:"list","aria-label":"Benefícios do agendamento online",children:[S.jsxs(f.div,{className:"feature-card",whileHover:{scale:1.05},whileTap:{scale:.95},role:"listitem",tabIndex:0,"aria-label":"Agendamento imediato com horários em tempo real",children:[S.jsx(Y,{className:"feature-icon","aria-hidden":"true"}),S.jsx("h3",{className:"feature-title",children:"Agendamento Imediato"}),S.jsx("p",{className:"feature-description",children:"Veja horários disponíveis em tempo real"})]}),S.jsxs(f.div,{className:"feature-card",whileHover:{scale:1.05},whileTap:{scale:.95},role:"listitem",tabIndex:0,"aria-label":"Horários flexíveis disponíveis",children:[S.jsx(Q,{className:"feature-icon","aria-hidden":"true"}),S.jsx("h3",{className:"feature-title",children:"Horários Flexíveis"}),S.jsx("p",{className:"feature-description",children:"Manhã, tarde e sábado disponíveis"})]}),S.jsxs(f.div,{className:"feature-card",whileHover:{scale:1.05},whileTap:{scale:.95},role:"listitem",tabIndex:0,"aria-label":"Escolha seu profissional preferido",children:[S.jsx(be,{className:"feature-icon","aria-hidden":"true"}),S.jsx("h3",{className:"feature-title",children:"Escolha o Profissional"}),S.jsx("p",{className:"feature-description",children:"Dra. Maria, Dr. João ou sem preferência"})]}),S.jsxs(f.div,{className:"feature-card",whileHover:{scale:1.05},whileTap:{scale:.95},role:"listitem",tabIndex:0,"aria-label":"Confirmação via WhatsApp",children:[S.jsx(q,{className:"feature-icon","aria-hidden":"true"}),S.jsx("h3",{className:"feature-title",children:"Confirmação via WhatsApp"}),S.jsx("p",{className:"feature-description",children:"Receba todos os detalhes no seu celular"})]})]})]})})}),S.jsx("section",{className:"form-section",role:"main","aria-labelledby":"form-main-title",children:S.jsxs("div",{className:"container",children:[S.jsxs(f.div,{className:"section-header",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.8},children:[S.jsx("h2",{id:"form-main-title",className:"section-title",children:"Complete os Dados"}),S.jsx("p",{className:"section-description","aria-describedby":"form-main-title",children:"Preencha o formulário abaixo com suas informações e preferências. Após o envio, entraremos em contato via WhatsApp para confirmar sua consulta."})]}),S.jsxs(f.div,{className:"info-cards",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:1},role:"grid","aria-label":"Informações sobre horários e profissionais",children:[S.jsxs(f.article,{className:"info-card",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.5,delay:1.2},whileHover:{scale:1.02},role:"gridcell","aria-labelledby":"schedule-title",children:[S.jsxs("h3",{id:"schedule-title",className:"info-card-title",children:[S.jsx(Q,{className:"info-icon","aria-hidden":"true"}),"Horários de Atendimento"]}),S.jsxs("ul",{className:"info-list",role:"list","aria-label":"Horários de funcionamento",children:[S.jsx("li",{children:"Segunda a Sexta: 8h às 12h e 14h às 18h"}),S.jsx("li",{children:"Sábado: 8h às 12h"}),S.jsx("li",{children:"Domingo: Fechado"}),S.jsx("li",{children:"Emergências: Consulte disponibilidade"})]})]}),S.jsxs(f.article,{className:"info-card",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.5,delay:1.4},whileHover:{scale:1.02},role:"gridcell","aria-labelledby":"professionals-title",children:[S.jsxs("h3",{id:"professionals-title",className:"info-card-title",children:[S.jsx(be,{className:"info-icon","aria-hidden":"true"}),"Nossos Profissionais"]}),S.jsxs("ul",{className:"info-list",role:"list","aria-label":"Lista de profissionais disponíveis",children:[S.jsx("li",{children:"Dra. Maria - Ortodontia e Implantodontia"}),S.jsx("li",{children:"Dr. João - Endodontia e Estética"}),S.jsx("li",{children:"Equipe especializada e atualizada"}),S.jsx("li",{children:"Atendimento humanizado"})]})]})]}),S.jsx(f.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:1.6},children:S.jsx(uo,{})})]})})]})}),vo="/clinica-sorriso-perfeito/img/alinhamento-C3dd7KKx.jpg",wo="/clinica-sorriso-perfeito/img/aparelho-C4rJy_Cg.jpg",yo="/clinica-sorriso-perfeito/img/corre%C3%A7%C3%A3o%20de%20mordida-Dt-xoZdO.jpg",jo="/clinica-sorriso-perfeito/img/resultado%20em%20adolecente-DbH7Cf2b.jpg",zo="/clinica-sorriso-perfeito/img/clareamento-yTjckld4.jpg",ko="/clinica-sorriso-perfeito/img/facetas%20de%20porcelana-7lsNEKUv.jpg",Co="/clinica-sorriso-perfeito/img/harmoniza%C3%A7%C3%A3o%20de%20sorriso-CEmkhAve.jpg",$o="/clinica-sorriso-perfeito/img/transforma%C3%A7%C3%A3o-AZ0JLe4M.jpg",Eo="/clinica-sorriso-perfeito/img/corre%C3%A7%C3%A3o%20de%20formato-DcKldDz6.jpg",So="/clinica-sorriso-perfeito/img/implante%20unit%C3%A1rio-DS_ue28x.jpg",Ao="/clinica-sorriso-perfeito/img/Protocolo%20superior-tVxJcPVA.jpg",Po="/clinica-sorriso-perfeito/img/exorto%20%C3%B3sseo-NXVgiQN7.jpg",Bo="/clinica-sorriso-perfeito/img/pr%C3%B3tese%20sobre%20implante-CH6TUQH3.jpg",No="/clinica-sorriso-perfeito/img/restaura%C3%A7%C3%A3o-D0dfL1cH.jpg",Do="/clinica-sorriso-perfeito/img/limpeza%20profunda-CUeZ1ST7.jpg",Ro="/clinica-sorriso-perfeito/img/Tratamento%20de%20caries-uO5BI4LD.jpg",Io="/clinica-sorriso-perfeito/img/consult%C3%B3rio-B4dO7oVI.jpg",Mo="/clinica-sorriso-perfeito/img/A%20imagem%20sala%20de%20espera-sp6TJwnn.jpg",To=(e,a=.7)=>"string"==typeof e&&e.includes("?")?`${e}&quality=${Math.round(100*a)}&width=400`:e,Oo=[{id:1,src:vo,thumbnail:To(vo,.6),category:"ortodontia",title:"Alinhamento completo em 18 meses",description:"Transformação completa do sorriso através de tratamento ortodôntico"},{id:2,src:wo,thumbnail:To(wo,.6),category:"ortodontia",title:"Aparelho estético discreto",description:"Resultado natural com aparelho transparente"},{id:3,src:yo,thumbnail:To(yo,.6),category:"ortodontia",title:"Correção de mordida cruzada",description:"Problema funcional resolvido com ortodontia"},{id:4,src:jo,thumbnail:To(jo,.6),category:"ortodontia",title:"Resultado em adolescente",description:"Tratamento ortodôntico preventivo bem-sucedido"},{id:5,src:zo,thumbnail:To(zo,.6),category:"estetica",title:"Clareamento com 8 tons a mais",description:"Resultado impressionante do clareamento profissional"},{id:6,src:ko,thumbnail:To(ko,.6),category:"estetica",title:"Facetas de porcelana naturais",description:"Transformação sutil e natural com facetas"},{id:7,src:Co,thumbnail:To(Co,.6),category:"estetica",title:"Harmonização do sorriso",description:"Equilíbrio perfeito entre forma e função"},{id:8,src:$o,thumbnail:To($o,.6),category:"estetica",title:"Transformação completa",description:"Mudança radical com tratamento estético integrado"},{id:9,src:Eo,thumbnail:To(Eo,.6),category:"estetica",title:"Correção de formato",description:"Dentes uniformes através de procedimento estético"},{id:10,src:So,thumbnail:To(So,.6),category:"implantes",title:"Implante unitário anterior",description:"Substituição de dente perdido com implante"},{id:11,src:Ao,thumbnail:To(Ao,.6),category:"implantes",title:"Protocolo superior completo",description:"Reabilitação total com implantes múltiplos"},{id:12,src:Po,thumbnail:To(Po,.6),category:"implantes",title:"Enxerto ósseo bem-sucedido",description:"Preparação perfeita para implante"},{id:13,src:Bo,thumbnail:To(Bo,.6),category:"implantes",title:"Prótese sobre implante",description:"Resultado final com prótese fixa"},{id:14,src:No,thumbnail:To(No,.6),category:"geral",title:"Restauração em resina",description:"Reparo funcional e estético"},{id:15,src:Do,thumbnail:To(Do,.6),category:"geral",title:"Limpeza profunda",description:"Resultado da profilaxia profissional"},{id:16,src:Ro,thumbnail:To(Ro,.6),category:"geral",title:"Tratamento de cárie",description:"Dente salvo com restauração conservadora"},{id:17,src:Io,thumbnail:To(Io,.6),category:"instalacoes",title:"Consultório moderno",description:"Ambiente acolhedor e tecnologia avançada"},{id:18,src:Mo,thumbnail:To(Mo,.6),category:"instalacoes",title:"Sala de espera aconchegante",description:"Conforto e tranquilidade para nossos pacientes"}],Lo=[{id:"todos",name:"Todos",count:Oo.length},{id:"ortodontia",name:"Ortodontia",count:Oo.filter(e=>"ortodontia"===e.category).length},{id:"estetica",name:"Estética Dental",count:Oo.filter(e=>"estetica"===e.category).length},{id:"implantes",name:"Implantes",count:Oo.filter(e=>"implantes"===e.category).length},{id:"geral",name:"Clínica Geral",count:Oo.filter(e=>"geral"===e.category).length},{id:"instalacoes",name:"Instalações",count:Oo.filter(e=>"instalacoes"===e.category).length}],Vo=x.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    justify-content: flex-start;
    gap: 0.75rem;
    padding: 0.5rem 1rem;
    margin: 0 -1rem 1.5rem -1rem;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }

    /* Gradient fade nas bordas */
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 20px;
      pointer-events: none;
      z-index: 1;
    }

    &::before {
      left: 0;
      background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    }

    &::after {
      right: 0;
      background: linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    }
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    margin: 0 -0.75rem 1.25rem -0.75rem;
  }
`,Fo=x.button`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${e=>e.$isActive?"var(--primary-color)":"var(--border-color)"};
  background: ${e=>e.$isActive?"var(--primary-color)":"white"};
  color: ${e=>e.$isActive?"white":"var(--text-dark)"};
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  min-width: fit-content;
  font-size: 0.875rem;
  flex-shrink: 0;

  &:hover:not(:disabled) {
    border-color: var(--primary-color);
    background: ${e=>e.$isActive?"var(--primary-color)":"var(--primary-color-light)"};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.625rem 1.25rem;
    font-size: 0.85rem;
    font-weight: 600;
    border-radius: 20px;
    box-shadow: ${e=>e.$isActive?"0 2px 8px rgba(46, 139, 87, 0.3)":"0 1px 3px rgba(0, 0, 0, 0.1)"};

    &:hover:not(:disabled) {
      transform: none;
      box-shadow: 0 3px 12px rgba(46, 139, 87, 0.4);
    }
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    border-radius: 18px;

    span {
      display: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;

    &:hover {
      transform: none;
    }
  }
`,qo=({categories:e,activeFilter:a,onFilterChange:r,imageCounts:i})=>{const t=(e,a)=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),r(a))};return S.jsxs(Vo,{role:"tablist","aria-label":"Filtros da galeria",children:[S.jsxs(Fo,{$isActive:"todos"===a,onClick:()=>r("todos"),onKeyDown:e=>t(e,"todos"),role:"tab","aria-selected":"todos"===a,"aria-controls":"gallery-grid",id:"filter-todos",type:"button",children:["Todos ",i&&i.todos&&S.jsxs("span",{"aria-label":`${i.todos} imagens`,children:["(",i.todos,")"]})]}),e.filter(e=>"todos"!==e.id).map((e,o)=>S.jsxs(Fo,{$isActive:a===e.id,onClick:()=>r(e.id),onKeyDown:a=>t(a,e.id),role:"tab","aria-selected":a===e.id,"aria-controls":"gallery-grid",id:`filter-${e.id}`,type:"button",children:[e.name," ",i&&i[e.id]&&S.jsxs("span",{"aria-label":`${i[e.id]} imagens`,children:["(",i[e.id],")"]})]},e.id||o))]})},Ho=x(f.div)`
  position: relative;
  overflow: hidden;
  background: var(--background-color);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  aspect-ratio: 4/3;
  cursor: ${e=>e.$clickable?"pointer":"default"};

  &:hover {
    transform: ${e=>e.$clickable?"translateY(-4px)":"none"};
    box-shadow: ${e=>e.$clickable?"0 8px 24px rgba(0, 0, 0, 0.15)":"0 4px 12px rgba(0, 0, 0, 0.1)"};
  }

  &:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`,_o=x.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: ${e=>e.$loaded?1:0};
  border-radius: 12px;
  ${e=>e.$isThumbnail&&"\n    filter: contrast(0.95) brightness(0.98);\n    image-rendering: -webkit-optimize-contrast;\n    image-rendering: crisp-edges;\n  "}

  @media (prefers-reduced-motion: reduce) {
    transition: opacity 0.3s ease;
  }
`,Yo=x.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  color: var(--text-light);
  opacity: ${e=>e.$show?1:0};
  transition: opacity 0.3s ease;
  border-radius: 12px;
  font-size: 0.875rem;
  text-align: center;
  padding: 1rem;

  &::before {
    content: '📷';
    font-size: 2rem;
    margin-bottom: 0.5rem;
    opacity: 0.5;
  }
`,Go=({src:a,alt:r,index:i,onClick:t,title:o,description:n,isThumbnail:s=!0,...d})=>{const[l,c]=e.useState(!1),[m,p]=e.useState(!1),[h,g]=e.useState(!1),x=e.useRef(),u=e.useRef();e.useEffect(()=>{const e=new IntersectionObserver(([a])=>{a.isIntersecting&&(g(!0),e.disconnect())},{threshold:.1,rootMargin:"50px"}),a=u.current;return a&&e.observe(a),()=>{a&&e.unobserve(a)}},[]);const f=()=>{t&&void 0!==i&&t(i)},b=Boolean(t);return S.jsxs(Ho,{ref:u,onClick:b?f:void 0,onKeyDown:b?e=>{"Enter"!==e.key&&" "!==e.key||!t||(e.preventDefault(),f())}:void 0,tabIndex:b?0:-1,role:b?"button":"img","aria-label":b?`Ver imagem: ${r}`:r,$clickable:b,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4,delay:.05*i},...d,children:[h&&S.jsx(_o,{ref:x,src:a,alt:r,title:o,$loaded:l,$isThumbnail:s,onLoad:()=>{c(!0)},onError:()=>{p(!0),c(!1)},loading:"lazy",decoding:"async"}),S.jsx(Yo,{$show:!l&&!m&&h,children:m?"Erro ao carregar imagem":"Carregando..."})]})},Wo=x(f.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
`,Qo=x.div`
  position: relative;
  width: 60vw;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 70vw;
    height: 65vh;
  }

  @media (max-width: 768px) {
    width: 80vw;
    height: 70vh;
  }

  @media (max-width: 480px) {
    width: 85vw;
    height: 75vh;
  }
`,Uo=x(f.div)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,Jo=x.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`,Ko=x.div`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,Xo=x.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 300;
  transition: all 0.3s ease;
  z-index: 1001;
  padding: 0.5rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);

  &:hover {
    color: #ffffff;
    transform: scale(1.2);
    text-shadow: 0 4px 16px rgba(0, 0, 0, 0.9);
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Zo=x.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  font-size: 4rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  z-index: 1001;
  padding: 1rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);

  &:hover {
    color: #ffffff;
    transform: translateY(-50%) scale(1.2);
    text-shadow: 0 4px 16px rgba(0, 0, 0, 0.9);
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    transform: translateY(-50%);
  }

  ${e=>"prev"===e.direction?"left: 20px;":"right: 20px;"}

  @media (max-width: 768px) {
    display: none;
  }
`,en=x.div`
  position: absolute;
  bottom: -80px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8));
  color: white;
  padding: 1.25rem 2rem;
  border-radius: 12px;
  text-align: center;
  max-width: 500px;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

  h3 {
    margin: 0 0 0.75rem 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: #ffffff;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }

  p {
    margin: 0;
    font-size: 1rem;
    opacity: 0.9;
    line-height: 1.5;
    color: #f0f0f0;
  }

  @media (max-width: 768px) {
    bottom: -60px;
    left: 20px;
    right: 20px;
    transform: none;
    max-width: none;
    padding: 1rem 1.5rem;

    h3 {
      font-size: 1.1rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`,an=x.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.75rem 1.25rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 500;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 1001;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }
`,rn=({images:a,currentIndex:r,onClose:i,onNext:t,onPrev:o})=>{const[n,s]=e.useState(!0),[d,l]=e.useState(0),[c,m]=e.useState(!1),p=a[r],h=r<a.length-1,g=r>0;e.useEffect(()=>{const e=e=>{"Escape"===e.key&&i(),"ArrowLeft"===e.key&&g&&o(),"ArrowRight"===e.key&&h&&t()};return document.addEventListener("keydown",e),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",e),document.body.style.overflow=""}},[i,t,o,h,g]),e.useEffect(()=>{s(!0),l(0),m(!1)},[r]);return p?S.jsx(b,{children:S.jsx(Wo,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:i,children:S.jsxs(Qo,{onClick:e=>e.stopPropagation(),children:[S.jsxs(an,{children:[r+1," / ",a.length]}),S.jsx(Xo,{onClick:i,title:"Fechar (Esc)",children:"×"}),g&&S.jsx(Zo,{direction:"prev",onClick:o,title:"Imagem anterior (←)",children:"‹"}),S.jsx(b,{mode:"wait",children:S.jsxs(Uo,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1,x:d},exit:{opacity:0,scale:.9},transition:{duration:c?0:.3},drag:"x",dragConstraints:{left:0,right:0},dragElastic:.2,onDragStart:(e,a)=>{m(!0)},onDrag:(e,a)=>{l(a.offset.x)},onDragEnd:(e,a)=>{const r=a.velocity.x;(Math.abs(a.offset.x)>100||Math.abs(r)>500)&&(a.offset.x>0&&g?o():a.offset.x<0&&h&&t()),l(0),m(!1)},style:{filter:c?"brightness(0.8)":"brightness(1)",transform:`translateX(${d}px) ${c?"scale(0.95)":"scale(1)"}`,transition:c?"none":"all 0.3s ease"},children:[n&&S.jsx(Ko,{}),S.jsx(Jo,{src:p.src,alt:p.title,onLoad:()=>{s(!1)},style:{opacity:n?0:1,pointerEvents:"none"}}),c&&S.jsxs(S.Fragment,{children:[d>20&&g&&S.jsx(f.div,{initial:{opacity:0},animate:{opacity:Math.min(.6,Math.abs(d)/150)},style:{position:"absolute",left:0,top:0,width:"30%",height:"100%",background:"linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%)",pointerEvents:"none",borderRadius:"8px 0 0 8px"}}),d<-20&&h&&S.jsx(f.div,{initial:{opacity:0},animate:{opacity:Math.min(.6,Math.abs(d)/150)},style:{position:"absolute",right:0,top:0,width:"30%",height:"100%",background:"linear-gradient(270deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%)",pointerEvents:"none",borderRadius:"0 8px 8px 0"}}),S.jsx(f.div,{style:{position:"absolute",bottom:"15px",left:"50%",transform:"translateX(-50%)",width:"120px",height:"3px",background:"rgba(255, 255, 255, 0.2)",borderRadius:"2px",overflow:"hidden",pointerEvents:"none"},children:S.jsx(f.div,{animate:{width:`${Math.min(100,Math.abs(d)/1.2)}%`,x:d>0?"0%":100-Math.min(100,Math.abs(d)/1.2)+"%"},style:{height:"100%",background:Math.abs(d)>80?"linear-gradient(90deg, #2E8B57, #32CD32)":"linear-gradient(90deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.8))",borderRadius:"2px",transition:"none"}})})]})]},r)}),h&&S.jsx(Zo,{direction:"next",onClick:t,title:"Próxima imagem (→)",children:"›"}),S.jsxs(en,{children:[S.jsx("h3",{children:p.title}),S.jsx("p",{children:p.description})]})]})})}):null},tn=u`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,on=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`,nn=x.div`
  border: 4px solid var(--border-color);
  border-top: 4px solid var(--primary-color);
  border-radius: 50%;
  width: ${e=>e.$size||"40px"};
  height: ${e=>e.$size||"40px"};
  animation: ${tn} 1s linear infinite;
`,sn=x.p`
  margin-left: 1rem;
  color: var(--text-light);
  font-size: 0.9rem;
`,dn=({size:e,text:a="Carregando..."})=>S.jsxs(on,{children:[S.jsx(nn,{$size:e}),a&&S.jsx(sn,{children:a})]}),ln=(()=>{const e=new Map,a=new Set,r=(r,i="low")=>{if(e.has(r)||a.has(r))return e.get(r)||Promise.resolve();const t=new Promise((i,o)=>{const n=new Image;n.onload=()=>{e.set(r,t),a.delete(r),i(n)},n.onerror=()=>{a.delete(r),o(new Error(`Failed to load image: ${r}`))},n.loading="eager",n.decoding="async",n.src=r});return a.add(r),t};return{preloadImage:r,preloadImageBatch:(e,a=3)=>{const i=[];for(let r=0;r<e.length;r+=a)i.push(e.slice(r,r+a));return i.reduce((e,a)=>e.then(()=>Promise.allSettled(a.map(e=>r(e)))),Promise.resolve())},getPreloadedImage:a=>e.get(a),clearCache:()=>{e.clear(),a.clear()},getCacheStats:()=>({preloaded:e.size,loading:a.size,totalRequested:e.size+a.size})}})(),cn=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  container-type: inline-size;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 0.75rem;
  }
`,mn=x.div`
  text-align: center;
  margin-bottom: 3rem;
`,pn=x.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,hn=x.p`
  font-size: 1.125rem;
  color: var(--text-gray);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`,gn=x(f.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
  gap: clamp(1rem, 2.5vw, 2rem);
  margin-top: 2rem;
  align-items: start;

  @container (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(min(250px, 100%), 1fr));
  }

  @container (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(min(250px, 100%), 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
  }

  @media (max-width: 320px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`,xn=x(f.div)`
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-gray);
`,un=x.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`,fn=x.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`,bn=x.p`
  font-size: 1rem;
  opacity: 0.8;
`,vn=()=>{const[a,r]=e.useState("todos"),[i,t]=e.useState(!1),[o,n]=e.useState(0);e.useRef();const[s,d]=e.useState(0),l=e.useMemo(()=>"todos"===a?Oo:Oo.filter(e=>e.category===a),[a]),{displayedItems:c,hasMore:m,loading:p,loadMore:h}=((a,r=6)=>{const[i,t]=e.useState([]),[o,n]=e.useState(!0),[s,d]=e.useState(!1),[l,c]=e.useState(1);e.useEffect(()=>{t(a.slice(0,r)),c(1),n(a.length>r),d(!1)},[a,r]);const m=e.useCallback(()=>{!s&&o&&(d(!0),setTimeout(()=>{const e=l*r,i=e+r,o=a.slice(e,i);o.length>0?(t(e=>[...e,...o]),c(e=>e+1),n(i<a.length)):n(!1),d(!1)},300))},[a,l,r,s,o]);return{displayedItems:i,hasMore:o,loading:s,loadMore:m}})(l,6),g=e.useMemo(()=>{const e={todos:Oo.length};return Lo.forEach(a=>{"todos"!==a.id&&(e[a.id]=Oo.filter(e=>e.category===a.id).length)}),e},[]),x=e.useCallback(e=>{n(e),t(!0)},[]),u=e.useCallback(()=>{t(!1)},[]),f=e.useCallback(()=>{n(e=>{const a=e<l.length-1?e+1:0,r=a<l.length-1?a+1:0;return ln.preloadImage(l[r].src),a})},[l]),v=e.useCallback(()=>{n(e=>{const a=e>0?e-1:l.length-1,r=a>0?a-1:l.length-1;return ln.preloadImage(l[r].src),a})},[l]);return e.useEffect(()=>{const e=c.slice(0,6).map(e=>e.src);ln.preloadImageBatch(e,2).then(()=>{d(100)}).catch(e=>{})},[c,a]),e.useEffect(()=>{if(i&&l.length>0){[o-1>=0?o-1:l.length-1,o+1<l.length?o+1:0].forEach(e=>{ln.preloadImage(l[e].src,"high")})}},[i,o,l]),S.jsxs(cn,{children:[S.jsxs(mn,{children:[S.jsx(pn,{id:"gallery-title",children:"Nossa Galeria"}),S.jsx(hn,{children:"Conheça alguns dos nossos casos de sucesso e veja as transformações que realizamos com carinho e profissionalismo."})]}),S.jsx(qo,{categories:Lo,activeFilter:a,onFilterChange:r,imageCounts:g}),S.jsx(b,{mode:"wait",children:l.length>0?S.jsxs(S.Fragment,{children:[S.jsx(gn,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.4,ease:"easeOut"},role:"grid","aria-labelledby":"gallery-title","aria-label":`Galeria de imagens - categoria: ${"todos"===a?"todas":Lo.find(e=>e.id===a)?.name||a}`,children:c.map((e,a)=>S.jsx(Go,{src:e.thumbnail||e.src,alt:`${e.title}. ${e.description}`,title:e.title,description:e.description,index:a,onClick:x,role:"gridcell","aria-describedby":`image-desc-${e.id}`},e.id))},a),m&&S.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"2rem"},children:S.jsx("button",{onClick:h,disabled:p,style:{padding:"12px 24px",fontSize:"1rem",fontWeight:"500",color:p?"#9ca3af":"#ffffff",backgroundColor:p?"#e5e7eb":"#2E8B57",border:"none",borderRadius:"8px",cursor:p?"not-allowed":"pointer",transition:"all 0.3s ease",display:"flex",alignItems:"center",gap:"8px",minWidth:"160px",justifyContent:"center"},onMouseOver:e=>{p||(e.target.style.backgroundColor="#228B22",e.target.style.transform="translateY(-1px)")},onMouseOut:e=>{p||(e.target.style.backgroundColor="#2E8B57",e.target.style.transform="translateY(0)")},children:p?S.jsxs(S.Fragment,{children:[S.jsx(dn,{}),"Carregando..."]}):"Carregar mais imagens"})})]}):S.jsxs(xn,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.4},children:[S.jsx(un,{children:"🔍"}),S.jsx(fn,{children:"Nenhuma imagem encontrada"}),S.jsx(bn,{children:"Não temos imagens para esta categoria no momento."})]},"empty")}),i&&S.jsx(rn,{images:l,currentIndex:o,onClose:u,onNext:f,onPrev:v})]})},wn=x.div`
  .hero-section {
    background: var(--primary-color);
    color: var(--white);
    padding: 100px 0 80px;
    text-align: center;

    .hero-content {
      max-width: 800px;
      margin: 0 auto;
    }

    .hero-title {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1rem;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .hero-subtitle {
      font-size: 1.25rem;
      opacity: 0.9;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }
  }

  .gallery-section {
    padding: 80px 0;
    background: var(--white);

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .section-intro {
      text-align: center;
      margin-bottom: 4rem;

      .section-title {
        font-size: 2.5rem;
        color: var(--primary-color);
        margin-bottom: 1rem;
        font-weight: 600;
      }

      .section-description {
        font-size: 1.1rem;
        color: var(--text-light);
        max-width: 600px;
        margin: 0 auto;
        line-height: 1.6;
      }
    }

    /* Os estilos da ImageGallery já estão no componente */
    .image-gallery-wrapper {
      margin-top: 2rem;
    }
  }

  .cta-section {
    padding: 80px 0;
    background: var(--light-gray);
    text-align: center;

    .cta-content {
      max-width: 600px;
      margin: 0 auto;

      .cta-title {
        font-size: 2.5rem;
        color: var(--primary-color);
        margin-bottom: 1rem;
        font-weight: 600;
      }

      .cta-description {
        font-size: 1.2rem;
        color: var(--text-light);
        margin-bottom: 2rem;
        line-height: 1.6;
      }

      .cta-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;

        .btn {
          padding: 15px 30px;
          border-radius: 5px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;

          &.btn-primary {
            background: var(--primary-color);
            color: var(--white);

            &:hover {
              background: #1e5f3b;
              transform: translateY(-2px);
            }
          }

          &.btn-secondary {
            background: var(--white);
            color: var(--primary-color);
            border: 2px solid var(--primary-color);

            &:hover {
              background: var(--primary-color);
              color: var(--white);
            }
          }
        }
      }
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .hero-section {
      padding: 60px 0 40px;

      .hero-title {
        font-size: 2rem;
      }

      .hero-subtitle {
        font-size: 1rem;
      }
    }

    .gallery-section,
    .cta-section {
      padding: 60px 0;
    }

    .section-title,
    .cta-title {
      font-size: 2rem;
    }

    .cta-buttons {
      flex-direction: column;
      align-items: center;

      .btn {
        width: 100%;
        max-width: 250px;
      }
    }
  }

  @media (max-width: 480px) {
    .hero-title {
      font-size: 1.8rem;
    }

    .section-title,
    .cta-title {
      font-size: 1.8rem;
    }

    .container {
      padding: 0 1rem;
    }
  }
`,yn=()=>{const e={"@context":"https://schema.org","@type":"ImageGallery",name:"Galeria de Casos de Sucesso - Clínica Sorriso Perfeito",description:"Galeria com casos reais de sucesso em tratamentos odontológicos, incluindo ortodontia, estética dental, implantes e procedimentos clínicos.",provider:{"@type":"Dentist",name:"Clínica Sorriso Perfeito",url:"https://clinica-sorriso-perfeito.com"},image:Oo.slice(0,10).map(e=>({"@type":"ImageObject",url:e.src,name:e.title,description:e.description,contentUrl:e.src})),mainEntityOfPage:{"@type":"WebPage","@id":"https://clinica-sorriso-perfeito.com/galeria"}};return S.jsxs(S.Fragment,{children:[S.jsxs(m,{children:[S.jsx("title",{children:"Galeria de Casos de Sucesso | Clínica Sorriso Perfeito"}),S.jsx("meta",{name:"description",content:"Veja nossa galeria com casos de sucesso em ortodontia, estética dental, implantes e tratamentos odontológicos. Transformações reais de pacientes com resultados comprovados."}),S.jsx("meta",{name:"keywords",content:"galeria odontológica, casos de sucesso, antes e depois, ortodontia, estética dental, implantes, clareamento, transformação sorriso, dentista, clínica dental"}),S.jsx("meta",{name:"robots",content:"index, follow"}),S.jsx("meta",{name:"author",content:"Clínica Sorriso Perfeito"}),S.jsx("link",{rel:"canonical",href:"https://clinica-sorriso-perfeito.com/galeria"}),S.jsx("meta",{property:"og:title",content:"Galeria de Casos de Sucesso | Clínica Sorriso Perfeito"}),S.jsx("meta",{property:"og:description",content:"Conheça nossos casos de sucesso e transformações em tratamentos odontológicos. Resultados reais que falam por si."}),S.jsx("meta",{property:"og:type",content:"website"}),S.jsx("meta",{property:"og:url",content:"https://clinica-sorriso-perfeito.com/galeria"}),S.jsx("meta",{property:"og:site_name",content:"Clínica Sorriso Perfeito"}),S.jsx("meta",{property:"og:locale",content:"pt_BR"}),Oo[0]&&S.jsx("meta",{property:"og:image",content:Oo[0].src}),S.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),S.jsx("meta",{name:"twitter:title",content:"Galeria de Casos de Sucesso | Clínica Sorriso Perfeito"}),S.jsx("meta",{name:"twitter:description",content:"Veja transformações reais em nossa galeria de casos de sucesso."}),Oo[0]&&S.jsx("meta",{name:"twitter:image",content:Oo[0].src}),S.jsx("script",{type:"application/ld+json",children:JSON.stringify(e)})]}),S.jsx(ya,{children:S.jsx(wn,{children:S.jsx(vn,{})})})]})},jn=[{id:1,slug:"5-dicas-dentes-saudaveis",title:"5 dicas para manter os dentes saudáveis",excerpt:"Descubra as melhores práticas para manter sua saúde bucal em dia e ter um sorriso sempre saudável.",content:"\nManter uma boa saúde bucal vai muito além de ter um sorriso bonito. Dentes saudáveis são fundamentais para a nossa qualidade de vida e bem-estar geral.\n\n## 1. Escove os dentes corretamente\n\nA escovação deve ser feita pelo menos duas vezes ao dia, com movimentos circulares suaves. Use uma escova de cerdas macias e pasta de dente com flúor. O tempo ideal de escovação é de 2 minutos, garantindo que todas as superfícies dos dentes sejam limpas adequadamente.\n\n## 2. Use fio dental diariamente\n\nO fio dental remove restos de alimentos e placa bacteriana que a escova não consegue alcançar, especialmente entre os dentes. Use-o pelo menos uma vez ao dia, preferencialmente antes de dormir.\n\n## 3. Evite açúcar em excesso\n\nAlimentos açucarados alimentam as bactérias que causam cáries. Prefira frutas, vegetais e água. Quando consumir doces, faça-o durante as refeições e escove os dentes em seguida.\n\n## 4. Visite o dentista regularmente\n\nConsultas preventivas a cada 6 meses permitem detectar problemas precocemente e manter a saúde em dia. A prevenção é sempre mais econômica que o tratamento.\n\n## 5. Não use os dentes como ferramenta\n\nEvite abrir embalagens, quebrar nozes ou morder objetos duros com os dentes. Isso pode causar fraturas e desgaste desnecessário.\n\n**Precisa de uma avaliação profissional? Agende sua consulta conosco!**\n    ",image:"https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",publishDate:"2024-10-15",readTime:"3 min",tags:["saúde bucal","prevenção","cuidados diários"],author:"Dra. Maria Santos",seo:{title:"5 Dicas Essenciais para Manter os Dentes Saudáveis | Clínica Sorriso Perfeito",description:"Descubra as 5 dicas fundamentais para manter seus dentes saudáveis e um sorriso perfeito. Guia completo de cuidados bucais.",keywords:"dentes saudáveis, cuidados bucais, saúde dental, prevenção cáries"}},{id:2,slug:"quando-usar-aparelho-ortodontico",title:"Quando é hora de usar aparelho ortodôntico?",excerpt:"Saiba identificar os sinais de que você ou seu filho precisam de tratamento ortodôntico.",content:"\nO tratamento ortodôntico não é apenas uma questão estética. Muitas vezes, é fundamental para a saúde bucal e função mastigatória. Mas como saber quando é hora de procurar um ortodontista?\n\n## Sinais que indicam necessidade de aparelho\n\n### Dentes tortos ou apinhados\nQuando os dentes estão desalinhados ou não há espaço suficiente na arcada dentária, o aparelho pode corrigir essas irregularidades.\n\n### Mordida incorreta\nProblemas como mordida aberta, cruzada ou sobremordida podem causar dificuldades na mastigação e fala.\n\n### Dores na articulação\nDTM (disfunção temporomandibular) pode ser causada por má oclusão e ser tratada com ortodontia.\n\n## A idade ideal para começar\n\n### Crianças\nA primeira avaliação ortodôntica deve ser feita aos 7 anos de idade, quando ainda há dentes de leite presentes.\n\n### Adolescentes\nO período de crescimento é ideal para tratamentos, pois os ossos ainda estão se desenvolvendo.\n\n### Adultos\nNunca é tarde para corrigir a posição dos dentes. Hoje temos opções discretas como alinhadores transparentes.\n\n## Tipos de aparelho disponíveis\n\n### Aparelho fixo metálico\nO mais tradicional e eficiente para casos complexos.\n\n### Aparelho estético\nCom brackets de porcelana ou safira, menos visível.\n\n### Alinhadores transparentes\nRemovíveis e praticamente imperceptíveis.\n\n**Quer saber qual o melhor tratamento para seu caso? Agende uma avaliação ortodôntica!**\n    ",image:"https://images.pexels.com/photos/6627374/pexels-photo-6627374.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",publishDate:"2024-10-10",readTime:"4 min",tags:["ortodontia","aparelho","tratamento"],author:"Dr. João Silva",seo:{title:"Quando Usar Aparelho Ortodôntico? Guia Completo | Clínica Sorriso Perfeito",description:"Descubra quando é hora de usar aparelho ortodôntico. Sinais, idade ideal e tipos disponíveis. Guia completo sobre ortodontia.",keywords:"aparelho ortodôntico, ortodontia, dentes tortos, tratamento ortodôntico"}},{id:3,slug:"mitos-verdades-clareamento-dental",title:"Mitos e verdades sobre clareamento dental",excerpt:"Esclareça suas dúvidas sobre clareamento dental e descubra o que é mito e o que é verdade.",content:'\nO clareamento dental é um dos procedimentos estéticos mais procurados, mas ainda gera muitas dúvidas. Vamos esclarecer os principais mitos e verdades sobre o assunto.\n\n## Mitos sobre clareamento dental\n\n### "O clareamento enfraquece os dentes"\n**MITO.** Quando feito corretamente e com acompanhamento profissional, o clareamento não enfraquece o esmalte dentário.\n\n### "Quanto mais forte o gel, melhor o resultado"\n**MITO.** A concentração alta pode causar sensibilidade excessiva. O ideal é usar a concentração adequada para cada caso.\n\n### "O resultado dura para sempre"\n**MITO.** O clareamento não é permanente. Hábitos alimentares e de higiene influenciam na durabilidade.\n\n## Verdades sobre clareamento dental\n\n### "Pode causar sensibilidade temporária"\n**VERDADE.** É normal sentir sensibilidade durante o tratamento, mas ela desaparece após o término.\n\n### "Nem todos os dentes respondem igual"\n**VERDADE.** Dentes amarelados clareiam melhor que os acinzentados. Restaurações não mudam de cor.\n\n### "Acompanhamento profissional é essencial"\n**VERDADE.** Apenas o dentista pode avaliar se você é candidato ao clareamento e qual técnica usar.\n\n## Tipos de clareamento\n\n### Clareamento caseiro supervisionado\nCom moldeiras personalizadas e gel prescrito pelo dentista.\n\n### Clareamento a laser no consultório\nMais rápido, com resultado imediato.\n\n### Associação das técnicas\nCombinação para melhor resultado e manutenção.\n\n**Quer um sorriso mais branco e saudável? Consulte nossos especialistas!**\n    ',image:"https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",publishDate:"2024-10-05",readTime:"4 min",tags:["clareamento","estética","mitos"],author:"Dra. Ana Costa",seo:{title:"Mitos e Verdades sobre Clareamento Dental | Clínica Sorriso Perfeito",description:"Descubra os principais mitos e verdades sobre clareamento dental. Esclareça suas dúvidas com nosso guia completo.",keywords:"clareamento dental, mitos clareamento, verdades clareamento, estética dental"}},{id:4,slug:"como-escolher-escova-dente-ideal",title:"Como escolher a escova de dente ideal",excerpt:"Guia completo para escolher a escova de dente perfeita para suas necessidades.",content:"\nA escolha da escova de dente certa é fundamental para uma higiene bucal eficaz. Com tantas opções no mercado, é importante saber quais critérios considerar.\n\n## Tipos de cerdas\n\n### Cerdas macias\nRecomendadas para a maioria das pessoas, especialmente quem tem:\n- Gengivas sensíveis\n- Retração gengival\n- Dentes com desgaste\n\n### Cerdas médias\nIndicadas para pessoas sem problemas gengivais e que preferem uma escovação mais vigorosa.\n\n### Cerdas duras\n**Não recomendadas** para uso diário, pois podem causar desgaste do esmalte e retração gengival.\n\n## Tamanho da cabeça\n\n### Cabeça pequena\n- Melhor acesso aos dentes posteriores\n- Ideal para crianças e adultos com boca pequena\n- Permite movimentos precisos\n\n### Cabeça média a grande\n- Cobre mais superfície de uma vez\n- Pode ser menos precisa em áreas de difícil acesso\n\n## Formato das cerdas\n\n### Cerdas niveladas\nLimpeza uniforme de toda a superfície dentária.\n\n### Cerdas em diferentes alturas\nAlgumas marcas oferecem cerdas variadas para melhor adaptação aos dentes.\n\n## Escova elétrica vs manual\n\n### Escova manual\n- Mais acessível\n- Fácil de transportar\n- Permite controle total da pressão\n\n### Escova elétrica\n- Remove mais placa bacteriana\n- Ideal para pessoas com mobilidade reduzida\n- Timer integrado para tempo correto de escovação\n\n## Quando trocar a escova\n\n- A cada 3 meses\n- Após doenças infecciosas\n- Quando as cerdas estiverem deformadas\n\n**Dúvidas sobre qual escova usar? Consulte nossos profissionais para uma recomendação personalizada!**\n    ",image:"https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",publishDate:"2024-09-28",readTime:"3 min",tags:["higiene bucal","escova de dente","cuidados"],author:"Dr. Carlos Mendes",seo:{title:"Como Escolher a Escova de Dente Ideal | Guia Completo | Clínica Sorriso Perfeito",description:"Guia completo para escolher a escova de dente perfeita. Tipos de cerdas, tamanhos e dicas de profissionais.",keywords:"escova de dente, higiene bucal, cerdas macias, escova elétrica"}},{id:5,slug:"alimentacao-saude-bucal",title:"Alimentação e saúde bucal: o que você precisa saber",excerpt:"Descubra como a alimentação influencia diretamente na saúde dos seus dentes e gengivas.",content:"\nA relação entre alimentação e saúde bucal é mais estreita do que muitas pessoas imaginam. O que comemos afeta diretamente a saúde dos dentes e gengivas.\n\n## Alimentos que prejudicam os dentes\n\n### Açúcares e carboidratos refinados\n- Alimentam as bactérias que causam cáries\n- Exemplos: doces, refrigerantes, biscoitos\n- Consuma com moderação e sempre escove os dentes depois\n\n### Alimentos ácidos\n- Podem causar erosão do esmalte\n- Exemplos: refrigerantes, frutas cítricas, vinagre\n- Aguarde 30 minutos após consumi-los para escovar os dentes\n\n### Alimentos pegajosos\n- Ficam grudados nos dentes por mais tempo\n- Exemplos: balas de goma, frutas secas\n- Difíceis de remover apenas com saliva\n\n## Alimentos que fazem bem aos dentes\n\n### Ricos em cálcio\n- Fortalecem o esmalte dentário\n- Exemplos: leite, queijo, iogurte, vegetais verdes folhosos\n\n### Ricos em vitamina C\n- Fortalecem as gengivas\n- Exemplos: frutas cítricas (com moderação), morango, kiwi\n\n### Alimentos fibrosos\n- Estimulam a produção de saliva\n- Ajudam na limpeza natural\n- Exemplos: maçã, cenoura, aipo\n\n### Água\n- Mantém a boca hidratada\n- Ajuda a remover restos de alimentos\n- Escolha água fluoretada quando possível\n\n## Dicas para uma alimentação amiga dos dentes\n\n### Horários das refeições\n- Evite beliscar constantemente\n- Concentre o consumo de doces nas refeições principais\n\n### Combinações inteligentes\n- Coma queijo após doces para neutralizar ácidos\n- Beba água durante as refeições\n\n### Mastigação adequada\n- Mastigue bem os alimentos\n- Isso estimula a produção de saliva\n\n## Suplementos e saúde bucal\n\n### Vitamina D\n- Essencial para absorção de cálcio\n- Importante para saúde óssea e dentária\n\n### Probióticos\n- Podem ajudar no equilíbrio da flora oral\n- Consulte um profissional antes de usar\n\n**Quer uma orientação nutricional personalizada para sua saúde bucal? Agende uma consulta!**\n    ",image:"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",publishDate:"2024-09-20",readTime:"5 min",tags:["alimentação","saúde bucal","nutrição","prevenção"],author:"Dra. Patricia Lima",seo:{title:"Alimentação e Saúde Bucal: Guia Completo | Clínica Sorriso Perfeito",description:"Descubra como a alimentação influencia a saúde bucal. Alimentos que fazem bem e mal aos dentes. Dicas de profissionais.",keywords:"alimentação saúde bucal, comida dentes, nutrição dental, cáries prevenção"}},{id:6,slug:"implante-dentario-guia-completo",title:"Implante dentário: tudo o que você precisa saber",excerpt:"Guia completo sobre implantes dentários, desde o procedimento até os cuidados pós-operatórios.",content:"\nA perda de dentes pode afetar significativamente a qualidade de vida, influenciando a mastigação, fala e autoestima. O implante dentário surge como a solução mais moderna e eficaz para substituir dentes perdidos.\n\n## O que é um implante dentário\n\nO implante dentário é um pino de titânio que é inserido no osso maxilar ou mandibular, funcionando como a raiz de um dente natural. Sobre este pino, é fixada uma prótese (coroa) que substitui o dente perdido.\n\n### Por que o titânio?\n- Biocompatível: não causa rejeição\n- Osseointegração: se funde ao osso naturalmente\n- Resistente e durável\n- Não sofre corrosão\n\n## Vantagens dos implantes\n\n### Funcionais\n- Mastigação eficiente como dente natural\n- Preservação dos dentes adjacentes\n- Manutenção da estrutura óssea\n- Fala clara e natural\n\n### Estéticas\n- Aparência completamente natural\n- Não se move ou solta durante a fala\n- Sorriso harmônico e confiante\n\n### Psicológicas\n- Maior autoestima e confiança\n- Liberdade para sorrir sem constrangimento\n- Melhora na qualidade de vida\n\n## Quem pode fazer implantes\n\n### Candidatos ideais\n- Adultos com crescimento ósseo completo\n- Boa saúde geral e bucal\n- Osso suficiente para suportar o implante\n- Gengivas saudáveis\n\n### Contraindicações\n- Diabetes descontrolado\n- Tabagismo excessivo (relativo)\n- Problemas de coagulação\n- Radioterapia recente na região\n\n## O procedimento passo a passo\n\n### 1. Avaliação e planejamento\n- Exame clínico detalhado\n- Radiografias e tomografia computadorizada\n- Planejamento digital do caso\n\n### 2. Cirurgia de colocação\n- Anestesia local\n- Inserção do implante no osso\n- Sutura da região\n\n### 3. Período de osseointegração\n- 3 a 6 meses de cicatrização\n- Acompanhamento periódico\n- Prótese provisória se necessário\n\n### 4. Colocação da prótese definitiva\n- Moldagem da região\n- Confecção da coroa\n- Fixação da prótese final\n\n## Cuidados pós-operatórios\n\n### Primeiros dias\n- Compressas de gelo nas primeiras 24 horas\n- Medicação conforme prescrição\n- Alimentação líquida/pastosa\n- Repouso relativo\n\n### Higienização\n- Escovação suave após 24 horas\n- Enxaguante bucal prescrito pelo dentista\n- Evitar bochechos vigorosos\n\n### A longo prazo\n- Higiene rigorosa como dente natural\n- Uso de fio dental adequado\n- Consultas regulares de manutenção\n- Evitar hábitos prejudiciais\n\n## Durabilidade e success rate\n\n### Taxa de sucesso\n- Mais de 95% de sucesso a longo prazo\n- Tecnologia comprovada há décadas\n- Melhoria constante das técnicas\n\n### Durabilidade\n- Podem durar toda a vida com cuidados adequados\n- Prótese pode necessitar substituição após 10-15 anos\n- Implante raramente precisa ser trocado\n\n## Tipos de implantes\n\n### Implante unitário\n- Substitui um dente individual\n- Mais comum e simples\n\n### Prótese sobre implantes\n- Substitui múltiplos dentes\n- Protocolo fixo ou removível\n\n### All-on-4 ou All-on-6\n- Reabilitação total da arcada\n- Apenas 4 ou 6 implantes por arcada\n\n**Quer saber se você é candidato a implante dentário? Agende uma avaliação gratuita!**\n    ",image:"https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",publishDate:"2024-11-28",readTime:"6 min",tags:["implante dentário","reabilitação oral","prótese"],author:"Dr. Roberto Oliveira",seo:{title:"Implante Dentário: Guia Completo 2024 | Clínica Sorriso Perfeito",description:"Tudo sobre implante dentário: procedimento, vantagens, cuidados e durabilidade. Guia completo com informações de especialistas.",keywords:"implante dentário, reabilitação oral, prótese dentária, osseointegração"}}],zn=x(f.article)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(46, 139, 87, 0.15);
    border-color: rgba(46, 139, 87, 0.2);
  }

  &:focus-within {
    outline: 2px solid #2E8B57;
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    &:hover {
      transform: none;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: box-shadow 0.3s ease;

    &:hover {
      transform: none;
    }
  }
`,kn=x.div`
  position: relative;
  overflow: hidden;
  height: 220px;
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);

  @media (max-width: 480px) {
    height: 180px;
  }
`,Cn=x.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), filter 0.3s ease;
  opacity: ${e=>e.$loaded?1:0};

  ${zn}:hover & {
    transform: scale(1.08);
    filter: brightness(1.1) saturate(1.1);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: opacity 0.3s ease;

    ${zn}:hover & {
      transform: none;
    }
  }
`,$n=x.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  color: #64748b;
  font-size: 0.875rem;
  opacity: ${e=>e.$show?1:0};
  transition: opacity 0.3s ease;

  &::before {
    content: '📄';
    font-size: 2rem;
    margin-bottom: 0.5rem;
    display: block;
  }
`,En=x.div`
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`,Sn=x.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,An=x.span`
  background: linear-gradient(135deg, #2E8B57 0%, #228B22 100%);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px rgba(46, 139, 87, 0.2);

  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 0.2rem 0.6rem;
  }
`,Pn=x.h3`
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #1a202c;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.3s ease;

  ${zn}:hover & {
    color: #2E8B57;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
`,Bn=x.p`
  color: #4a5568;
  line-height: 1.65;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 0.95rem;
  flex-grow: 1;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    -webkit-line-clamp: 2;
  }
`,Nn=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
  margin-top: auto;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    padding-top: 0.75rem;
  }
`,Dn=x.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #2E8B57;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`,Rn=x.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
  font-size: 0.8rem;
  color: #64748b;

  @media (max-width: 480px) {
    align-items: flex-start;
    font-size: 0.75rem;
  }
`,In=x(t)`
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;

  &:focus {
    outline: none;
  }
`,Mn=e.memo(({post:a,index:r,priority:i=!1})=>{const[t,o]=e.useState(!1),[n,s]=e.useState(!1),d=e.useCallback(()=>{o(!0)},[]),l=e.useCallback(()=>{s(!0),o(!1)},[]),c=e.useCallback(e=>new Date(e).toLocaleDateString("pt-BR",{day:"2-digit",month:"short",year:"numeric"}),[]);return S.jsx(zn,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1*r,ease:[.4,0,.2,1]},whileHover:{y:-8},whileTap:{scale:.98},children:S.jsxs(In,{to:`/blog/${a.slug}`,"aria-label":`Ler artigo: ${a.title}`,children:[S.jsxs(kn,{children:[!n&&S.jsx(Cn,{src:a.image,alt:a.title,$loaded:t,onLoad:d,onError:l,loading:i?"eager":"lazy",decoding:"async"}),S.jsx($n,{$show:!t||n,children:n?"Imagem indisponível":"Carregando..."})]}),S.jsxs(En,{children:[a.tags&&a.tags.length>0&&S.jsx(Sn,{children:a.tags.slice(0,2).map((e,a)=>S.jsx(An,{children:e},a))}),S.jsx(Pn,{children:a.title}),S.jsx(Bn,{children:a.excerpt}),S.jsxs(Nn,{children:[S.jsx(Dn,{children:a.author}),S.jsx(Rn,{children:S.jsx("span",{children:c(a.publishDate)})})]})]})]})})}),Tn=x.div`
  position: relative;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`,On=x.div`
  position: relative;
  display: flex;
  align-items: center;
`,Ln=x.input`
  width: 100%;
  padding: 1.25rem 1.5rem;
  border: 2px solid #e2e8f0;
  border-radius: 50px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  color: #2d3748;

  &:focus {
    outline: none;
    border-color: #2E8B57;
    box-shadow: 0 8px 32px rgba(46, 139, 87, 0.15);
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 1);
  }

  &::placeholder {
    color: #a0aec0;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    padding: 1rem 1.25rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 0.875rem 1rem;
    font-size: 0.9rem;
    border-radius: 40px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
      transform: none;
    }
  }
`,Vn=x(f.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 16px;
  font-size: 0.875rem;
  color: #4a5568;
  border: 1px solid #e2e8f0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
    padding: 0.625rem 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.5rem 0.875rem;
  }
`,Fn=x.span`
  font-weight: 600;
  color: #2E8B57;
`,qn=x.span`
  color: #718096;
  font-style: italic;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`,Hn=e.memo(({value:a,onChange:r,placeholder:i="Buscar artigos, autores ou temas...",resultsCount:t=0,showResults:o=!1})=>{const[n,s]=e.useState(!1),d=e.useRef(null),l=((a,r,i=[])=>{const t=e.useRef();return e.useEffect(()=>()=>{t.current&&clearTimeout(t.current)},i),(...e)=>{t.current&&clearTimeout(t.current),t.current=setTimeout(()=>{a(...e)},r)}})(r,300,[r]),c=e.useCallback(e=>{const a=e.target.value;l(a)},[l]),m=e.useCallback(()=>{s(!0)},[]),p=e.useCallback(()=>{s(!1)},[]),h=e.useCallback(e=>{"Escape"===e.key&&d.current?.blur()},[]),g=o&&(a?.length>0||n);return S.jsxs(Tn,{children:[S.jsx(On,{children:S.jsx(Ln,{ref:d,type:"text",value:a||"",onChange:c,onFocus:m,onBlur:p,onKeyDown:h,placeholder:i,"aria-label":"Campo de busca","aria-describedby":"search-results-info"})}),S.jsx(b,{children:g&&S.jsxs(Vn,{id:"search-results-info",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.3},children:[S.jsxs("div",{children:[S.jsxs(Fn,{children:[t," ",1===t?"artigo encontrado":"artigos encontrados"]}),a&&a.length>0&&S.jsxs("span",{children:[' para "',a,'"']})]}),S.jsx(qn,{children:a&&0!==a.length?"Pressione Esc para limpar":"Digite para buscar"})]})})]})}),_n=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`,Yn=x.div`
  text-align: center;
  margin-bottom: 3rem;
`,Gn=x.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Wn=x.p`
  font-size: 1.125rem;
  color: var(--text-gray);
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`,Qn=x(f.div)`
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
`,Un=x.div`
  text-align: center;
  margin-bottom: 1rem;
  color: var(--text-gray);
  font-size: 0.875rem;
`,Jn=x(f.div)`
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-gray);
`,Kn=x.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`,Xn=x.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`,Zn=x.p`
  font-size: 1rem;
  opacity: 0.8;
`,es=e.memo(()=>{const[a,r]=e.useState(""),i=e.useCallback(e=>{r(e)},[]),t=e.useMemo(()=>{if(!a.trim())return jn;const e=a.toLowerCase();return jn.filter(a=>{const r=a.title.toLowerCase().includes(e),i=a.excerpt.toLowerCase().includes(e),t=a.content.toLowerCase().includes(e),o=a.tags.some(a=>a.toLowerCase().includes(e));return r||i||t||o})},[a]);return S.jsxs(_n,{children:[S.jsxs(Yn,{children:[S.jsx(Gn,{children:"Blog Odontológico"}),S.jsx(Wn,{children:"Informações valiosas sobre saúde bucal, dicas de cuidados e as últimas novidades da odontologia moderna."})]}),S.jsx(Hn,{value:a,onChange:i,placeholder:"Buscar por título, conteúdo ou tags..."}),a&&S.jsxs(Un,{children:[0===t.length?"Nenhum artigo encontrado":`${t.length} artigo${1!==t.length?"s":""} encontrado${1!==t.length?"s":""}`,a&&` para "${a}"`]}),t.length>0?S.jsx(Qn,{layout:!0,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:t.map((e,a)=>S.jsx(Mn,{post:e,index:a},e.id))}):S.jsxs(Jn,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[S.jsx(Kn,{children:"📝"}),S.jsx(Xn,{children:a?"Nenhum artigo encontrado":"Nenhum artigo disponível"}),S.jsx(Zn,{children:a?"Tente buscar com outros termos ou limpe o filtro para ver todos os artigos.":"Nossos especialistas estão preparando conteúdo incrível para você."})]})]})}),as=()=>S.jsxs(S.Fragment,{children:[S.jsxs(m,{children:[S.jsx("title",{children:"Blog Odontológico | Clínica Sorriso Perfeito"}),S.jsx("meta",{name:"description",content:"Blog com dicas de saúde bucal, cuidados dentários e informações sobre tratamentos odontológicos. Conteúdo atualizado por especialistas."}),S.jsx("meta",{name:"keywords",content:"blog odontológico, saúde bucal, dicas dentárias, cuidados orais, ortodontia, implantes, clareamento dental"}),S.jsx("meta",{property:"og:title",content:"Blog Odontológico | Clínica Sorriso Perfeito"}),S.jsx("meta",{property:"og:description",content:"Informações valiosas sobre saúde bucal e cuidados dentários por especialistas."}),S.jsx("meta",{property:"og:type",content:"website"})]}),S.jsx(ya,{children:S.jsx(es,{})})]});var rs=new Map,is=new WeakMap,ts=0;function os(e){return Object.keys(e).sort().filter(a=>void 0!==e[a]).map(a=>{return`${a}_${"root"===a?(r=e.root,r?(is.has(r)||(ts+=1,is.set(r,ts.toString())),is.get(r)):"0"):e[a]}`;var r}).toString()}function ns(e,a,r={},i=undefined){if(void 0===window.IntersectionObserver&&void 0!==i){const t=e.getBoundingClientRect();return a(i,{isIntersecting:i,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:t,intersectionRect:t,rootBounds:t}),()=>{}}const{id:t,observer:o,elements:n}=function(e){const a=os(e);let r=rs.get(a);if(!r){const i=new Map;let t;const o=new IntersectionObserver(a=>{a.forEach(a=>{var r;const o=a.isIntersecting&&t.some(e=>a.intersectionRatio>=e);e.trackVisibility&&void 0===a.isVisible&&(a.isVisible=o),null==(r=i.get(a.target))||r.forEach(e=>{e(o,a)})})},e);t=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:a,observer:o,elements:i},rs.set(a,r)}return r}(r),s=n.get(e)||[];return n.has(e)||n.set(e,s),s.push(a),o.observe(e),function(){s.splice(s.indexOf(a),1),0===s.length&&(n.delete(e),o.unobserve(e)),0===n.size&&(o.disconnect(),rs.delete(t))}}const ss=x(f.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 2rem;
  background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
  border-radius: 16px;
  border: 1px solid #fecaca;
  margin: 2rem 0;

  @media (max-width: 768px) {
    min-height: 300px;
    padding: 1.5rem;
    margin: 1rem 0;
  }
`,ds=x.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  opacity: 0.7;

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`,ls=x.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #991b1b;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
`,cs=x.p`
  font-size: 1rem;
  color: #7f1d1d;
  text-align: center;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  max-width: 500px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1.25rem;
  }
`,ms=x(f.button)`
  background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);

  &:hover {
    box-shadow: 0 6px 20px rgba(220, 38, 38, 0.4);
    transform: translateY(-2px);
  }

  &:focus {
    outline: 2px solid #dc2626;
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    padding: 0.625rem 1.25rem;
    font-size: 0.85rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: background-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: none;
    }
  }
`;x.details`
  margin-top: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid #f3f4f6;
  max-width: 100%;
  word-break: break-word;

  summary {
    cursor: pointer;
    font-weight: 600;
    color: #6b7280;
    margin-bottom: 0.5rem;

    &:hover {
      color: #374151;
    }
  }

  pre {
    background: #f9fafb;
    padding: 0.75rem;
    border-radius: 4px;
    font-size: 0.75rem;
    overflow-x: auto;
    color: #6b7280;
    border: 1px solid #e5e7eb;
  }

  @media (max-width: 768px) {
    padding: 0.75rem;

    pre {
      font-size: 0.7rem;
      padding: 0.5rem;
    }
  }
`;class ps extends e.Component{constructor(e){super(e),this.state={hasError:!1,error:null,errorInfo:null,retryCount:0}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,a){this.setState({error:e,errorInfo:a,hasError:!0}),"undefined"!=typeof window&&window.gtag&&window.gtag("event","exception",{description:e.toString(),fatal:!1,custom_parameter_1:a.componentStack})}handleRetry=()=>{this.setState(e=>({hasError:!1,error:null,errorInfo:null,retryCount:e.retryCount+1}))};render(){if(this.state.hasError){const{fallback:e,fallbackProps:a={}}=this.props;return e?S.jsx(e,{error:this.state.error,errorInfo:this.state.errorInfo,retry:this.handleRetry,retryCount:this.state.retryCount,...a}):S.jsxs(ss,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[S.jsx(ds,{children:"⚠️"}),S.jsx(ls,{children:"Ops! Algo deu errado"}),S.jsx(cs,{children:"Desculpe, ocorreu um erro inesperado. Nossa equipe foi notificada e está trabalhando para resolver o problema."}),S.jsx(ms,{onClick:this.handleRetry,whileHover:{scale:1.05},whileTap:{scale:.95},children:"Tentar novamente"}),!1]})}return this.props.children}}const hs=x(f.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  padding: 2rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 16px;
  border: 1px solid #e2e8f0;

  @media (max-width: 768px) {
    min-height: 200px;
    padding: 1.5rem;
  }
`,gs=x.div`
  width: 48px;
  height: 48px;
  border: 4px solid #e2e8f0;
  border-top: 4px solid #2E8B57;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1.5rem;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    margin-bottom: 1rem;
  }
`,xs=x.p`
  font-size: 1rem;
  color: #4a5568;
  text-align: center;
  margin: 0;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`,us=x.span`
  &::after {
    content: '';
    animation: dots 1.5s infinite;
  }

  @keyframes dots {
    0%, 20% { content: ''; }
    40% { content: '.'; }
    60% { content: '..'; }
    80%, 100% { content: '...'; }
  }
`,fs=x.div`
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
`,bs=x.div`
  height: ${e=>e.height||"1rem"};
  background: linear-gradient(90deg, #e2e8f0 0%, #cbd5e0 50%, #e2e8f0 100%);
  border-radius: 4px;
  margin-bottom: ${e=>e.marginBottom||"0.75rem"};
  animation: shimmer 2s infinite;

  @keyframes shimmer {
    0% { background-position: -200px 0; }
    100% { background-position: 200px 0; }
  }
`,vs=x.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(90deg, #e2e8f0 0%, #cbd5e0 50%, #e2e8f0 100%);
  border-radius: 12px;
  margin-bottom: 1rem;
  animation: shimmer 2s infinite;

  @keyframes shimmer {
    0% { background-position: -200px 0; }
    100% { background-position: 200px 0; }
  }
`,ws=({message:e="Carregando conteúdo"})=>S.jsxs(hs,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.3},children:[S.jsx(gs,{}),S.jsxs(xs,{children:[e,S.jsx(us,{})]})]}),ys=()=>S.jsxs(fs,{children:[S.jsx(vs,{}),S.jsx(bs,{height:"1.5rem",marginBottom:"1rem"}),S.jsx(bs,{height:"1rem",marginBottom:"0.5rem"}),S.jsx(bs,{height:"1rem",marginBottom:"0.5rem"}),S.jsx(bs,{height:"0.75rem",marginBottom:"1.5rem"}),S.jsx(bs,{height:"0.875rem"})]}),js=()=>S.jsx("div",{style:{marginBottom:"2rem"},children:S.jsx(bs,{height:"3rem",marginBottom:"1rem"})}),zs=()=>S.jsxs("div",{style:{textAlign:"center",padding:"4rem 2rem"},children:[S.jsx(bs,{height:"3rem",marginBottom:"1.5rem"}),S.jsx(bs,{height:"1.5rem",marginBottom:"2rem"}),S.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"2rem"},children:[S.jsx(bs,{height:"4rem",marginBottom:"0"}),S.jsx(bs,{height:"4rem",marginBottom:"0"}),S.jsx(bs,{height:"4rem",marginBottom:"0"})]})]}),ks=()=>S.jsxs("div",{children:[S.jsx(zs,{}),S.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"2rem"},children:[S.jsx(js,{}),S.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",gap:"2rem"},children:Array.from({length:6}).map((e,a)=>S.jsx(ys,{},a))})]})]}),Cs=({children:a,fallback:r,type:i="default",message:t="Carregando conteúdo"})=>{let o=r;if(!o)switch(i){case"blog":o=S.jsx(ks,{});break;case"card":o=S.jsx(ys,{});break;case"search":o=S.jsx(js,{});break;case"hero":o=S.jsx(zs,{});break;default:o=S.jsx(ws,{message:t})}return S.jsx(e.Suspense,{fallback:o,children:a})},$s=x.div`
  position: relative;
  overflow: hidden;
`,Es=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  color: #64748b;
  font-size: 0.875rem;
  min-height: ${e=>e.height||"200px"};
  opacity: ${e=>e.$show?1:0};
  transition: opacity 0.3s ease;

  &::before {
    content: '⏳';
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
`,Ss=e.memo(({children:a,height:r,threshold:i=.1,rootMargin:t="50px"})=>{const[o,n]=e.useState(!1),[s,d]=e.useState(!1),l=e.useRef();return e.useEffect(()=>{const e=l.current;if(!e)return;const a=new IntersectionObserver(([e])=>{e.isIntersecting&&(n(!0),a.disconnect())},{threshold:i,rootMargin:t});return a.observe(e),()=>{a.disconnect()}},[i,t]),e.useEffect(()=>{if(o){const e=setTimeout(()=>{d(!0)},100);return()=>clearTimeout(e)}},[o]),S.jsx($s,{ref:l,children:o&&s?a:S.jsx(Es,{$show:!0,height:r,children:"Carregando conteúdo..."})})}),As=(e,a)=>{let r;return function(...i){r||(e.apply(this,i),r=!0,setTimeout(()=>r=!1,a))}},Ps=(e,a={})=>{const{timeout:r=5e3}=a;return"requestIdleCallback"in window?window.requestIdleCallback(e,{timeout:r}):setTimeout(e,0)},Bs=()=>new Promise(e=>{if("undefined"!=typeof scheduler&&scheduler.postTask)scheduler.postTask(e,{priority:"user-blocking"});else if("undefined"!=typeof MessageChannel){const a=new MessageChannel;a.port2.onmessage=()=>e(),a.port1.postMessage(null)}else setTimeout(e,0)}),Ns=async(e,a=5)=>{const r=performance.now(),i=e();return performance.now()-r>a&&await Bs(),i};const Ds=new class{constructor(){this.highPriorityQueue=[],this.normalPriorityQueue=[],this.lowPriorityQueue=[],this.isRunning=!1,this.timeSlice=5}schedule(e,a="normal"){const r={fn:e,priority:a,id:Date.now()+Math.random()};switch(a){case"high":this.highPriorityQueue.push(r);break;case"low":this.lowPriorityQueue.push(r);break;default:this.normalPriorityQueue.push(r)}return this.isRunning||this.run(),r.id}async run(){if(!this.isRunning){for(this.isRunning=!0;this.hasWork();){const a=this.getNextTask();if(!a)break;try{await Ns(a.fn,this.timeSlice)}catch(e){}await Bs()}this.isRunning=!1}}hasWork(){return this.highPriorityQueue.length>0||this.normalPriorityQueue.length>0||this.lowPriorityQueue.length>0}getNextTask(){return this.highPriorityQueue.length>0?this.highPriorityQueue.shift():this.normalPriorityQueue.length>0?this.normalPriorityQueue.shift():this.lowPriorityQueue.length>0?this.lowPriorityQueue.shift():null}cancel(e){const a=a=>{const r=a.findIndex(a=>a.id===e);return-1!==r&&(a.splice(r,1),!0)};return a(this.highPriorityQueue)||a(this.normalPriorityQueue)||a(this.lowPriorityQueue)}},Rs=(e,a=50)=>async(...r)=>{const i=performance.now();if(e.length>100||r.some(e=>Array.isArray(e)&&e.length>50))return new Promise(a=>{Ds.schedule(()=>{a(e(...r))},"low")});const t=e(...r);return performance.now()-i>a&&await Bs(),t},Is=(e,a="blog")=>{const r="https://clinica-sorriso-perfeito.com";return{"@context":"https://schema.org","@type":"Blog",name:"Blog - Clínica Sorriso Perfeito",description:"Artigos especializados sobre saúde bucal, tratamentos odontológicos e cuidados dentários por profissionais experientes.",url:`${r}/blog`,mainEntityOfPage:{"@type":"WebPage","@id":`${r}/blog`},publisher:{"@type":"Organization",name:"Clínica Sorriso Perfeito",logo:{"@type":"ImageObject",url:`${r}/logo.png`,width:200,height:60},address:{"@type":"PostalAddress",streetAddress:"Rua das Flores, 123",addressLocality:"São Paulo",addressRegion:"SP",postalCode:"01234-567",addressCountry:"BR"},contactPoint:{"@type":"ContactPoint",telephone:"+55-11-9999-9999",contactType:"customer service"}},blogPost:e.slice(0,5).map(e=>({"@type":"BlogPosting",headline:e.title,description:e.excerpt,url:`${r}/blog/${e.slug}`,datePublished:e.publishDate,dateModified:e.modifiedDate||e.publishDate,author:{"@type":"Person",name:e.author,jobTitle:"Cirurgião-Dentista"},image:{"@type":"ImageObject",url:e.image,width:800,height:600},keywords:e.tags.join(", "),wordCount:e.wordCount||500,timeRequired:e.readTime||"5 min",inLanguage:"pt-BR",isAccessibleForFree:!0}))}},Ms=e=>{const a="https://clinica-sorriso-perfeito.com",r=e.excerpt||e.content.substring(0,155)+"...";return{title:`${e.title} | Clínica Sorriso Perfeito - Blog Odontológico`,description:r,canonical:`${a}/blog/${e.slug}`,keywords:e.seo?.keywords||e.tags.join(", "),openGraph:{"og:title":e.title,"og:description":r,"og:image":e.image,"og:image:alt":`Imagem do artigo: ${e.title}`,"og:image:width":"1200","og:image:height":"630","og:url":`${a}/blog/${e.slug}`,"og:type":"article","og:site_name":"Clínica Sorriso Perfeito","og:locale":"pt_BR","article:author":e.author,"article:published_time":e.publishDate,"article:modified_time":e.modifiedDate||e.publishDate,"article:section":"Odontologia","article:tag":e.tags.join(",")},twitter:{"twitter:card":"summary_large_image","twitter:site":"@clinicasorrisoperfeito","twitter:creator":"@clinicasorrisoperfeito","twitter:title":e.title,"twitter:description":r,"twitter:image":e.image,"twitter:image:alt":`Imagem do artigo: ${e.title}`}}},Ts=x.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  position: relative;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 0.75rem;
    gap: 1rem;
  }
`,Os=x(t)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: #2E8B57;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 25px;
  background: rgba(46, 139, 87, 0.05);
  border: 1px solid rgba(46, 139, 87, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  width: fit-content;
  font-size: 0.9rem;

  &:hover {
    background: rgba(46, 139, 87, 0.1);
    transform: translateX(-4px);
    box-shadow: 0 4px 12px rgba(46, 139, 87, 0.15);
  }

  &:focus {
    outline: 2px solid #2E8B57;
    outline-offset: 2px;
  }

  span {
    font-size: 1rem;
    transition: transform 0.3s ease;
  }

  &:hover span {
    transform: translateX(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.625rem 0.875rem;
    font-size: 0.85rem;
    gap: 0.5rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      transform: none;
    }

    &:hover span {
      transform: none;
    }
  }
`,Ls=x(f.header)`
  display: grid;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
`,Vs=x.img.withConfig({shouldForwardProp:e=>!["fetchpriority"].includes(e)})`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: opacity 0.4s ease;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);

  @media (max-width: 1024px) {
    height: 400px;
  }

  @media (max-width: 768px) {
    height: 300px;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    height: 250px;
    border-radius: 12px;
  }
`,Fs=x.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: #1a202c;
  line-height: 1.1;
  margin: 0;
  font-family: 'Inter', 'Roboto', sans-serif;
  text-align: center;
  background: linear-gradient(135deg, #2E8B57 0%, #228B22 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    text-align: left;
    line-height: 1.2;
  }
`,qs=x.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 1.5rem 2rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  font-size: 0.9rem;
  color: #4a5568;

  @media (max-width: 768px) {
    justify-content: flex-start;
    gap: 1.5rem;
    padding: 1.25rem 1.5rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem 1.25rem;
  }
`,Hs=x.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;

  span:first-child {
    font-size: 1rem;
  }

  time, span:not(:first-child) {
    color: #2E8B57;
    font-weight: 600;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`,_s=x(f.div)`
  line-height: 1.75;
  font-size: clamp(1rem, 2.5vw, 1.125rem);
  color: #2d3748;
  font-family: 'Inter', 'Roboto', sans-serif;
  max-width: none;

  p {
    margin-bottom: 1.75rem;
    text-align: left;
    color: #4a5568;
    font-weight: 400;
  }

  h2 {
    font-size: clamp(1.5rem, 4vw, 2rem);
    font-weight: 700;
    margin: 3rem 0 1.5rem;
    color: #1a202c;
    position: relative;
    padding-left: 1.5rem;
    font-family: 'Inter', 'Roboto', sans-serif;
    scroll-margin-top: 2rem;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 5px;
      background: linear-gradient(135deg, #2E8B57 0%, #228B22 100%);
      border-radius: 3px;
      box-shadow: 0 2px 8px rgba(46, 139, 87, 0.3);
    }
  }

  h3 {
    font-size: clamp(1.25rem, 3vw, 1.5rem);
    font-weight: 600;
    margin: 2.5rem 0 1.25rem;
    color: #2d3748;
    font-family: 'Inter', 'Roboto', sans-serif;
    scroll-margin-top: 2rem;
  }

  ul, ol {
    margin-bottom: 2rem;
    padding-left: 2rem;
  }

  li {
    margin-bottom: 0.75rem;
    line-height: 1.7;
    color: #4a5568;
  }

  strong {
    font-weight: 700;
    color: #2E8B57;
  }

  em {
    font-style: italic;
    color: #2d3748;
  }

  blockquote {
    background: linear-gradient(135deg, rgba(46, 139, 87, 0.05) 0%, rgba(240, 248, 240, 0.8) 100%);
    border-left: 5px solid #2E8B57;
    padding: 2rem 2.5rem;
    margin: 3rem 0;
    border-radius: 0 16px 16px 0;
    font-style: italic;
    font-size: 1.1rem;
    box-shadow: 0 8px 32px rgba(46, 139, 87, 0.1);
    position: relative;
    backdrop-filter: blur(10px);

    &::before {
      content: '"';
      position: absolute;
      top: 1rem;
      left: 1rem;
      font-size: 3rem;
      color: #2E8B57;
      opacity: 0.3;
      font-family: serif;
    }
  }

  code {
    background: #f7fafc;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-family: 'Monaco', 'Consolas', monospace;
    font-size: 0.9em;
    color: #2E8B57;
    border: 1px solid #e2e8f0;
  }

  pre {
    background: #1a202c;
    color: #e2e8f0;
    padding: 1.5rem;
    border-radius: 12px;
    overflow-x: auto;
    margin: 2rem 0;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

    code {
      background: none;
      padding: 0;
      border: none;
      color: inherit;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    margin: 2rem auto;
    display: block;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }

  a {
    color: #2E8B57;
    text-decoration: none;
    font-weight: 500;
    border-bottom: 1px solid transparent;
    transition: border-color 0.3s ease;

    &:hover {
      border-bottom-color: #2E8B57;
    }
  }

  @media (max-width: 768px) {
    h2 {
      margin: 2.5rem 0 1.25rem;
      padding-left: 1.25rem;

      &::before {
        width: 4px;
      }
    }

    h3 {
      margin: 2rem 0 1rem;
    }

    blockquote {
      padding: 1.5rem 2rem;
      margin: 2rem 0;
      font-size: 1.05rem;

      &::before {
        font-size: 2.5rem;
        top: 0.75rem;
        left: 0.75rem;
      }
    }

    pre {
      padding: 1rem;
      font-size: 0.85rem;
    }
  }

  @media (max-width: 480px) {
    blockquote {
      padding: 1.25rem 1.5rem;
      border-radius: 0 12px 12px 0;
    }
  }
`,Ys=x.div`
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 2px solid #e2e8f0;
  display: grid;
  gap: 3rem;

  @media (max-width: 768px) {
    margin-top: 3rem;
    padding-top: 2rem;
    gap: 2rem;
  }
`,Gs=x.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`,Ws=x.span`
  background: linear-gradient(135deg, rgba(46, 139, 87, 0.1) 0%, rgba(240, 248, 240, 0.8) 100%);
  color: #2E8B57;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  border: 1px solid rgba(46, 139, 87, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: linear-gradient(135deg, #2E8B57 0%, #228B22 100%);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(46, 139, 87, 0.3);
  }

  &:focus {
    outline: 2px solid #2E8B57;
    outline-offset: 2px;
  }

  @media (max-width: 480px) {
    padding: 0.375rem 0.75rem;
    font-size: 0.8rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      transform: none;
    }
  }
`,Qs=x.div`
  background: linear-gradient(135deg, rgba(46, 139, 87, 0.05) 0%, rgba(240, 248, 240, 0.8) 100%);
  border: 2px solid #2E8B57;
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  margin: 3rem 0;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(46, 139, 87, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232E8B57' fill-opacity='0.03'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20z'/%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
    margin: 2rem 0;
  }

  @media (max-width: 480px) {
    padding: 2rem 1.25rem;
    border-radius: 16px;
  }
`,Us=x.h3`
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  font-weight: 700;
  color: #2E8B57;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
`,Js=x.p`
  color: #4a5568;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-size: 1rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
  }
`,Ks=x.div`
  margin-top: 3rem;
`,Xs=x.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
`,Zs=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`,ed=x(t)`
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
`,ad=x.h4`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
  line-height: 1.4;
`,rd=x.div`
  font-size: 0.75rem;
  color: var(--text-gray);
`,id=e=>new Date(e).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"}),td=e=>{const a=e.split(/\s+/).length;return`${Math.ceil(a/200)} min de leitura`},od=e.memo(()=>{const{slug:a}=n(),[r,i]=e.useState(!1),[t,o]=e.useState(0),[d,l]=e.useState(null),[c,p]=e.useState(0),[h,g]=e.useState(!1),[x,u]=e.useState(""),{sendGeneralInquiry:v}=Ki(),{ref:w,inView:y}=function({threshold:a,delay:r,trackVisibility:i,rootMargin:t,root:o,triggerOnce:n,skip:s,initialInView:d,fallbackInView:l,onChange:c}={}){var m;const[p,h]=e.useState(null),g=e.useRef(c),[x,u]=e.useState({inView:!!d,entry:void 0});g.current=c,e.useEffect(()=>{if(s||!p)return;let e;return e=ns(p,(a,r)=>{u({inView:a,entry:r}),g.current&&g.current(a,r),r.isIntersecting&&n&&e&&(e(),e=void 0)},{root:o,rootMargin:t,threshold:a,trackVisibility:i,delay:r},l),()=>{e&&e()}},[Array.isArray(a)?a.toString():a,p,o,t,n,s,i,l,r]);const f=null==(m=x.entry)?void 0:m.target,b=e.useRef(void 0);p||!f||n||s||b.current===f||(b.current=f,u({inView:!!d,entry:void 0}));const v=[h,x.inView,x.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}({threshold:.1,triggerOnce:!0}),j=e.useMemo(()=>a&&jn&&Array.isArray(jn)?jn.find(e=>e&&e.slug===a):null,[a]);if(!j)return S.jsx(s,{to:"/blog",replace:!0});const z=e.useMemo(()=>{if(!(j&&j.id&&j.tags&&Array.isArray(j.tags)&&jn))return[];try{const e=Rs(e=>e.filter(e=>e&&e.id!==j.id&&e.tags&&e.tags.some&&e.tags.some(e=>j.tags.includes(e))).slice(0,3));return e(jn)||[]}catch(e){return[]}},[j?.id,j?.tags]),{preloadImages:k,monitorMemory:C,trackReadingTime:$}=((a,r,i)=>{const t=e.useRef(null),o=e.useRef(null),n=e.useCallback(()=>{t.current=performance.now()},[]),s=e.useCallback(()=>{if(t.current){const e=performance.now()-t.current;window.gtag&&window.gtag("event","blog_search_performance",{custom_parameter_1:e,custom_parameter_2:a}),t.current=null}},[a]);return e.useEffect(()=>(o.current=performance.now(),()=>{o.current&&(performance.now(),o.current)}),[a,r,i]),{measureSearchStart:n,measureSearchEnd:s,preloadImages:e.useCallback(e=>{"requestIdleCallback"in window&&window.requestIdleCallback(()=>{e.slice(0,3).forEach(e=>{e.image&&((new Image).src=e.image)})})},[]),monitorMemory:e.useCallback(()=>{"memory"in performance&&performance.memory.usedJSHeapSize},[]),trackReadingTime:e.useCallback((e,a)=>{window.gtag&&a>1e3&&window.gtag("event","blog_reading_time",{custom_parameter_1:e,value:Math.round(a/1e3),custom_parameter_2:"reading_engagement"})},[]),performanceData:null}})(1,"",""),E=e.useCallback(async()=>{z.length>0&&Ps(async()=>{await(async(e,a,r=10)=>{const i=[];for(let t=0;t<a.length;t+=r){const o=a.slice(t,t+r).map(e);i.push(...o),t+r<a.length&&await new Promise(e=>{"scheduler"in window&&window.scheduler.postTask?window.scheduler.postTask(e,{priority:"background"}):setTimeout(e,0)})}return i})(e=>{const a=new Image;return a.src=e.image,a.decode().catch(()=>{})},z.slice(0,3),1)})},[z]),A=e.useMemo(()=>{try{return Rs(Ms)(j)||{title:j.title,description:j.excerpt||"",canonical:"",openGraph:{},twitter:{}}}catch(e){return{title:j.title,description:j.excerpt||"",canonical:"",openGraph:{},twitter:{}}}},[j]),P=e.useMemo(()=>{try{return Rs(Is)([j])||{}}catch(e){return{}}},[j]);e.useEffect(()=>{var e,a;e=j.id,a=j.title,"undefined"!=typeof window&&window.gtag&&window.gtag("event","page_view",{page_title:a,page_location:window.location.href,content_group1:"Blog",custom_parameter_1:e}),k([j]),C(),E();const r=Date.now();return()=>{const e=Date.now()-r;p(e),$(j.id,e)}},[j.id,j.title,k,C,E,$]),e.useEffect(()=>{const e=As(()=>{Ps(()=>{const e=window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)*100;o(Math.min(100,Math.max(0,e)))})},100);return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[]),e.useEffect(()=>{y&&g(!0)},[y]);const B=e.useCallback(async e=>{const a=e.split("\n\n"),r=(e,a)=>{if(e.startsWith("## ")){const a=e.replace("## ","");return`<h2 id="${a.toLowerCase().replace(/[^a-z0-9]+/g,"-")}" tabindex="-1">${a}</h2>`}if(e.startsWith("### ")){const a=e.replace("### ","");return`<h3 id="${a.toLowerCase().replace(/[^a-z0-9]+/g,"-")}" tabindex="-1">${a}</h3>`}return e.startsWith("**")&&e.endsWith("**")?`<blockquote role="note">${e.replace(/\*\*/g,"")}</blockquote>`:`<p>${e}</p>`};if(a.length>10){const e=await(async(e,a,r=5)=>{const i=[];let t=0;for(;t<a.length;){const o=performance.now();for(;t<a.length&&performance.now()-o<r;)i.push(e(a[t],t)),t++;t<a.length&&await Bs()}return i})(r,a,3);return e.join("")}return a.map(r).join("")},[]);e.useEffect(()=>{Ds.schedule(async()=>{const e=await B(j.content);u(e)},"normal")},[j.content,B]);const N=e.useCallback(e=>{"Tab"===e.key&&l(e.target)},[]);return S.jsxs(ps,{children:[S.jsxs(m,{children:[S.jsx("title",{children:A?.title||j.title}),S.jsx("meta",{name:"description",content:A?.description||j.excerpt||""}),S.jsx("meta",{name:"keywords",content:j.seo?.keywords||j.tags?.join(", ")||""}),A?.canonical&&S.jsx("link",{rel:"canonical",href:A.canonical}),S.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),S.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),S.jsx("link",{rel:"dns-prefetch",href:"https://api.whatsapp.com"}),A?.openGraph&&Object.entries(A.openGraph).map(([e,a])=>S.jsx("meta",{property:e,content:a},e)),A?.twitter&&Object.entries(A.twitter).map(([e,a])=>S.jsx("meta",{name:e,content:a},e)),S.jsx("meta",{name:"theme-color",content:"#2E8B57"}),S.jsx("meta",{name:"color-scheme",content:"light"}),S.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1, viewport-fit=cover"}),S.jsx("meta",{name:"author",content:j.author}),S.jsx("meta",{name:"robots",content:"index, follow"}),S.jsx("meta",{name:"article:published_time",content:j.publishDate}),S.jsx("meta",{name:"article:modified_time",content:j.modifiedDate||j.publishDate}),S.jsx("meta",{name:"article:author",content:j.author}),S.jsx("meta",{name:"article:section",content:"Odontologia"}),j.tags.map((e,a)=>S.jsx("meta",{name:"article:tag",content:e},a)),S.jsx("script",{type:"application/ld+json",children:JSON.stringify(P)}),S.jsx("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://clinica-sorriso-perfeito.com"},{"@type":"ListItem",position:2,name:"Blog",item:"https://clinica-sorriso-perfeito.com/blog"},{"@type":"ListItem",position:3,name:j.title,item:`https://clinica-sorriso-perfeito.com/blog/${j.slug}`}]})})]}),S.jsx(f.div,{style:{position:"fixed",top:0,left:0,right:0,height:"4px",background:"linear-gradient(90deg, #2E8B57, #228B22)",transformOrigin:"0%",zIndex:1e3},initial:{scaleX:0},animate:{scaleX:t/100},transition:{duration:.1}}),S.jsx("a",{href:"#main-content",style:{position:"absolute",left:"-9999px",width:"1px",height:"1px",overflow:"hidden"},onFocus:e=>{e.target.style.position="fixed",e.target.style.top="1rem",e.target.style.left="1rem",e.target.style.width="auto",e.target.style.height="auto",e.target.style.overflow="visible",e.target.style.zIndex="1000",e.target.style.background="#2E8B57",e.target.style.color="white",e.target.style.padding="0.5rem 1rem",e.target.style.borderRadius="0.25rem",e.target.style.textDecoration="none"},onBlur:e=>{e.target.style.position="absolute",e.target.style.left="-9999px",e.target.style.width="1px",e.target.style.height="1px",e.target.style.overflow="hidden"},children:"Pular para o conteúdo principal"}),S.jsxs(Ts,{role:"main",id:"main-content",ref:w,onKeyDown:N,"aria-live":"polite",children:[S.jsxs(Os,{to:"/blog","aria-label":"Voltar para a lista de artigos do blog",children:[S.jsx("span",{"aria-hidden":"true",children:"←"}),"Voltar para o blog"]}),S.jsx(Cs,{type:"hero",children:S.jsxs(Ls,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},children:[S.jsx(Ss,{height:"400px",children:S.jsx(Vs,{src:j.image,alt:`Imagem principal do artigo: ${j.title}`,loading:"eager",onLoad:()=>i(!0),style:{opacity:r?1:0,transform:h?"scale(1)":"scale(1.05)",transition:"all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"},decoding:"async",fetchpriority:"high"})}),S.jsx(Fs,{itemProp:"headline",role:"heading","aria-level":"1",children:j.title}),S.jsxs(qs,{role:"group","aria-label":"Informações do artigo",children:[S.jsx(Hs,{children:S.jsx("time",{dateTime:j.publishDate,itemProp:"datePublished","aria-label":`Publicado em ${id(j.publishDate)}`,children:id(j.publishDate)})}),S.jsx(Hs,{children:S.jsx("span",{itemProp:"author","aria-label":`Autor: ${j.author}`,children:j.author})}),S.jsx(Hs,{children:S.jsx("span",{"aria-label":`Tempo estimado de leitura: ${td(j.content)}`,children:td(j.content)})})]})]})}),S.jsx(Cs,{children:S.jsx(_s,{initial:{opacity:0,y:20},animate:{opacity:h?1:0,y:h?0:20},transition:{duration:.6,delay:.2},dangerouslySetInnerHTML:{__html:x},role:"article","aria-label":"Conteúdo principal do artigo",itemProp:"articleBody",tabIndex:"-1"})}),S.jsx(f.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:S.jsxs(Qs,{role:"complementary","aria-label":"Chamada para ação",children:[S.jsx(Us,{children:"Precisa de cuidados odontológicos?"}),S.jsx(Js,{children:"Nossa equipe de especialistas está pronta para cuidar do seu sorriso. Agende uma consulta e receba o melhor atendimento."}),S.jsx(ze,{variant:"whatsapp",size:"large",onClick:()=>{v(`Olá! Li o artigo sobre "${j.title}" e gostaria de agendar uma consulta.`),"undefined"!=typeof window&&window.gtag&&window.gtag("event","conversion",{event_category:"blog_cta",event_label:j.slug,value:1})},"aria-label":"Agendar consulta via WhatsApp após ler o artigo","aria-describedby":"cta-description",children:"Agendar Consulta"})]})}),S.jsxs(Ys,{role:"contentinfo",children:[S.jsx(Gs,{role:"group","aria-label":"Tags relacionadas ao artigo",children:j.tags.map((e,a)=>S.jsx(Ws,{role:"button",tabIndex:"0","aria-label":`Tag: ${e}`,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||e.preventDefault()},children:e},a))}),z.length>0&&S.jsxs(Ks,{role:"complementary","aria-label":"Artigos relacionados",children:[S.jsx(Xs,{children:"Artigos relacionados"}),S.jsx(Zs,{children:S.jsx(b,{children:z.map((e,a)=>S.jsx(f.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4,delay:.1*a},children:S.jsxs(ed,{to:`/blog/${e.slug}`,"aria-label":`Ler artigo relacionado: ${e.title}`,onFocus:()=>l("related-post"),rel:"prefetch",children:[S.jsx(ad,{children:e.title}),S.jsx(rd,{children:S.jsx("time",{dateTime:e.publishDate,"aria-label":`Publicado em ${id(e.publishDate)}`,children:id(e.publishDate)})})]})},e.id))})})]})]})]})]})}),nd=()=>S.jsx(ya,{children:S.jsx(od,{})}),sd={},dd=u`
  from {
    opacity: 0;
    transform: translate3d(0, 30px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ld=u`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`,cd=u`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(255, 71, 87, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 71, 87, 0);
  }
`,md=x.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  contain: layout style;
  will-change: auto;
`;x.nav`
  background: #f8f9fa;
  padding: 0.75rem 0;
  border-bottom: 1px solid #e9ecef;

  ol {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    list-style: none;
    font-size: 0.875rem;
    color: #6c757d;

    li {
      display: flex;
      align-items: center;

      &:not(:last-child)::after {
        content: '›';
        margin-left: 0.5rem;
        color: #adb5bd;
      }

      a {
        color: #007bff;
        text-decoration: none;
        transition: color 0.2s ease;

        &:hover {
          color: #0056b3;
          text-decoration: underline;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0;
    font-size: 0.8rem;
  }
`;const pd=x.section`
  background: linear-gradient(135deg, #2E8B57 0%, #228B22 100%);
  color: white;
  padding: clamp(4rem, 8vw, 8rem) 0 clamp(3rem, 6vw, 6rem);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    animation: ${ld} 20s infinite linear;
  }
`,hd=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  position: relative;
  z-index: 1;
  animation: ${dd} 0.8s ease-out;
`,gd=x.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  color: white;
  letter-spacing: -0.02em;
`,xd=x.p`
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  opacity: 0.95;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 400;
`,ud=x.section`
  padding: clamp(4rem, 8vw, 8rem) 0;
  background: #ffffff;
  position: relative;
`,fd=x.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 4vw, 4rem);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    padding: 0 0.75rem;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
    gap: 1.5rem;
  }
`,bd=x.div`
  display: grid;
  gap: 1.5rem;
  animation: ${dd} 0.8s ease-out 0.2s both;
`,vd=x.article`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 16px;
  border: 1px solid #e9ecef;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    border-color: #2E8B57;
  }

  &:focus-within {
    outline: 2px solid #2E8B57;
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    padding: 1.75rem;
    gap: 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 360px) {
    padding: 1.25rem;
  }
`,wd=x.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  flex-shrink: 0;
  background: ${e=>`${e.$color}15`};
  color: ${e=>e.$color};

  ${vd}:hover & {
    transform: scale(1.1);
    background: ${e=>e.$color};
    color: white;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
  }
`,yd=x.div`
  flex: 1;
  min-width: 0;

  @media (max-width: 480px) {
    width: 100%;
  }
`,jd=x.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.75rem;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.15rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
`,zd=x.div`
  color: #5a6c7d;
  line-height: 1.6;
  font-size: 1rem;

  a {
    color: #2E8B57;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s ease;
    border-bottom: 1px solid transparent;

    &:hover, &:focus {
      color: #1e5f3b;
      border-bottom-color: currentColor;
    }

    &:focus {
      outline: 2px solid #2E8B57;
      outline-offset: 2px;
      border-radius: 2px;
    }
  }

  strong {
    color: #2c3e50;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    text-align: center;
  }
`,kd=x.button`
  background: none;
  border: none;
  color: #25D366;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
  border-bottom: 1px solid transparent;
  padding: 0;
  font-family: inherit;

  &:hover, &:focus {
    color: #1da851;
    border-bottom-color: currentColor;
    transform: translateX(2px);
  }

  &:focus {
    outline: 2px solid #25D366;
    outline-offset: 2px;
    border-radius: 2px;
  }
`;x(vd)`
  grid-column: 1 / -1;
  margin-top: 1rem;
`;const Cd=x.div`
  display: grid;
  gap: 0.5rem;
  margin-top: 0.5rem;
`,$d=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  font-size: 0.9rem;
  transition: all 0.2s ease;

  &:hover {
    background: #e9ecef;
  }

  span:first-child {
    color: #2c3e50;
    font-weight: 600;
  }

  span:last-child {
    color: #5a6c7d;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 0.8rem;
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.6rem;
    font-size: 0.8rem;
    flex-direction: column;
    gap: 0.25rem;
    text-align: center;
  }
`,Ed=x.section`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  padding: clamp(2rem, 4vw, 3rem);
  border-radius: 20px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;
  animation: ${dd} 0.8s ease-out 0.4s both;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: clamp(1.5rem, 3vw, 2rem);
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
    border-radius: 12px;
    margin: 0 -0.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232E8B57' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/svg%3E");
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  .form-header {
    text-align: center;
    margin-bottom: 2.5rem;

    @media (max-width: 768px) {
      margin-bottom: 2rem;
    }

    @media (max-width: 480px) {
      margin-bottom: 1.5rem;
    }
  }

  .form-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: linear-gradient(135deg, #2E8B57 0%, #228B22 100%);
    color: white;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 8px 24px rgba(46, 139, 87, 0.3);
    animation: ${ld} 3s infinite;

    @media (max-width: 768px) {
      width: 70px;
      height: 70px;
      font-size: 1.8rem;
      margin-bottom: 1.25rem;
    }

    @media (max-width: 480px) {
      width: 60px;
      height: 60px;
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }
  }

  h2 {
    font-size: clamp(1.75rem, 3vw, 2.25rem);
    color: #2c3e50;
    margin-bottom: 1rem;
    font-weight: 700;
    line-height: 1.3;

    @media (max-width: 768px) {
      font-size: clamp(1.5rem, 2.5vw, 1.9rem);
      margin-bottom: 0.75rem;
    }

    @media (max-width: 480px) {
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
    }
  }

  p {
    color: #5a6c7d;
    margin-bottom: 0;
    line-height: 1.6;
    font-size: 1.1rem;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
      max-width: 100%;
    }
  }
`,Sd=x.section`
  padding: clamp(4rem, 8vw, 8rem) 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  position: relative;
`,Ad=x.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  color: #2c3e50;
  text-align: center;
  margin-bottom: clamp(2rem, 4vw, 4rem);
  font-weight: 600;
  line-height: 1.2;
  animation: ${dd} 0.8s ease-out;
`,Pd=x.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
  animation: ${dd} 0.8s ease-out 0.2s both;

  @media (max-width: 768px) {
    padding: 0 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`,Bd=x.div`
  background: white;
  padding: clamp(2rem, 4vw, 4rem);
  text-align: center;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 2px dashed #dee2e6;
  transition: all 0.3s ease;

  &:hover {
    border-color: #2E8B57;
    transform: translateY(-2px);
  }

  svg {
    color: #2E8B57;
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  p {
    color: #2c3e50;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #2E8B57 0%, #228B22 100%);
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 4px 16px rgba(46, 139, 87, 0.3);

    &:hover, &:focus {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(46, 139, 87, 0.4);
    }

    &:focus {
      outline: 2px solid #2E8B57;
      outline-offset: 2px;
    }
  }
`,Nd=x.section`
  padding: clamp(3rem, 6vw, 6rem) 0;
  background: white;
  animation: ${dd} 0.8s ease-out 0.6s both;
`,Dd=x.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 2rem;
  background: linear-gradient(135deg, #ff4757 0%, #ff3742 100%);
  color: white;
  padding: clamp(2rem, 4vw, 3rem);
  border-radius: 20px;
  box-shadow: 0 12px 40px rgba(255, 71, 87, 0.3);
  position: relative;
  overflow: hidden;
  animation: ${cd} 2s infinite;

  @media (max-width: 768px) {
    padding: 0 0.75rem;
    gap: 1.5rem;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
    gap: 1.25rem;
    border-radius: 12px;
    margin: 0 0.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    animation: ${ld} 3s infinite;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`,Rd=x.div`
  font-size: 3rem;
  flex-shrink: 0;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Id=x.div`
  flex: 1;
  text-align: center;
`,Md=x.h3`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  margin-bottom: 1rem;
  line-height: 1.3;
  color: white;
`,Td=x.p`
  margin-bottom: 1.5rem;
  opacity: 0.95;
  line-height: 1.6;
  font-size: 1.1rem;
`,Od=x.button`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: white;
  color: #ff4757;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  font-family: inherit;

  &:hover, &:focus {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: 2px solid white;
    outline-offset: 2px;
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    font-size: 1.25rem;
  }
`,Ld=e.lazy(()=>function(e,a){let r=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),i=e?.nonce||e?.getAttribute("nonce");r=Promise.allSettled(a.map(e=>{if((e=function(e){return"/clinica-sorriso-perfeito/"+e}(e))in sd)return;sd[e]=!0;const a=e.endsWith(".css"),r=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const t=document.createElement("link");return t.rel=a?"stylesheet":"modulepreload",a||(t.as="script"),t.crossOrigin="",t.href=e,i&&t.setAttribute("nonce",i),document.head.appendChild(t),a?new Promise((a,r)=>{t.addEventListener("load",a),t.addEventListener("error",()=>r(new Error(`Unable to preload CSS for ${e}`)))}):void 0}))}function i(e){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=e,window.dispatchEvent(a),!a.defaultPrevented)throw e}return r.then(a=>{for(const e of a||[])"rejected"===e.status&&i(e.reason);return e().catch(i)})}(()=>import("./index-CaMeNv5h.js"),__vite__mapDeps([0,1,2,3]))),Vd={"@context":"https://schema.org","@type":"ContactPage",name:"Contato - Clínica Sorriso Perfeito",description:"Entre em contato com a Clínica Sorriso Perfeito. Agende sua consulta odontológica e cuide do seu sorriso com nossos especialistas.",url:"https://clinica-sorriso-perfeito.com/contato",mainEntity:{"@type":"DentalClinic",name:"Clínica Sorriso Perfeito",telephone:"+55-55-91679300",address:{"@type":"PostalAddress",streetAddress:"Av. Brig. Faria Lima, 3477",addressLocality:"Itaim Bibi",addressRegion:"SP",postalCode:"04538-133",addressCountry:"BR"},openingHours:["Mo-Fr 08:00-18:00","Sa 08:00-12:00"],geo:{"@type":"GeoCoordinates",latitude:"-23.5505",longitude:"-46.6333"}}},Fd={"@context":"https://schema.org","@type":"Organization",name:"Clínica Sorriso Perfeito",url:"https://clinica-sorriso-perfeito.com",logo:"https://clinica-sorriso-perfeito.com/logo.png",contactPoint:{"@type":"ContactPoint",telephone:"+55-55-91679300",contactType:"customer service",availableLanguage:"Portuguese"}},qd=e.memo(()=>{const[a,r]=e.useState(!1);e.useEffect(()=>{r(!0)},[]);const i=e.useCallback((e=!1)=>{const a=`https://wa.me/555591679300?text=${encodeURIComponent(e?"EMERGÊNCIA - Preciso de atendimento urgente":"Olá! Gostaria de agendar uma consulta.")}`;window.open(a,"_blank","noopener,noreferrer")},[]),t=e.useCallback(()=>{window.gtag&&window.gtag("event","phone_call",{event_category:"Contact",event_label:"Contact Page Phone Click"})},[]);return S.jsxs(S.Fragment,{children:[S.jsxs(m,{children:[S.jsx("title",{children:"Contato | Clínica Sorriso Perfeito - Agende sua Consulta Odontológica"}),S.jsx("meta",{name:"description",content:"Entre em contato com a Clínica Sorriso Perfeito. Agende sua consulta odontológica, tire suas dúvidas e cuide do seu sorriso com nossos especialistas em São Paulo."}),S.jsx("meta",{name:"keywords",content:"contato clínica odontológica, agendar consulta dentista, clínica dentária São Paulo, emergência odontológica, whatsapp dentista"}),S.jsx("meta",{property:"og:title",content:"Contato | Clínica Sorriso Perfeito - Agende sua Consulta"}),S.jsx("meta",{property:"og:description",content:"Entre em contato conosco e agende sua consulta odontológica. Atendimento especializado em São Paulo."}),S.jsx("meta",{property:"og:type",content:"website"}),S.jsx("meta",{property:"og:url",content:"https://clinica-sorriso-perfeito.com/contato"}),S.jsx("meta",{property:"og:image",content:"https://clinica-sorriso-perfeito.com/images/contact-og.jpg"}),S.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),S.jsx("meta",{name:"twitter:title",content:"Contato | Clínica Sorriso Perfeito"}),S.jsx("meta",{name:"twitter:description",content:"Entre em contato e agende sua consulta odontológica em São Paulo."}),S.jsx("meta",{name:"robots",content:"index, follow"}),S.jsx("meta",{name:"author",content:"Clínica Sorriso Perfeito"}),S.jsx("link",{rel:"canonical",href:"https://clinica-sorriso-perfeito.com/contato"}),S.jsx("script",{type:"application/ld+json",children:JSON.stringify(Vd)}),S.jsx("script",{type:"application/ld+json",children:JSON.stringify(Fd)}),S.jsx("link",{rel:"dns-prefetch",href:"https://maps.google.com"}),S.jsx("link",{rel:"dns-prefetch",href:"https://wa.me"})]}),S.jsx(ya,{children:S.jsxs(md,{role:"main",children:[S.jsx(pd,{children:S.jsxs(hd,{children:[S.jsx(gd,{children:"Entre em Contato"}),S.jsx(xd,{children:"Estamos prontos para cuidar do seu sorriso. Fale conosco e agende sua consulta!"})]})}),S.jsx(ud,{children:S.jsxs(fd,{children:[S.jsxs(bd,{children:[S.jsxs(vd,{children:[S.jsx(wd,{"aria-hidden":"true",$color:"#2E8B57",children:S.jsx(oe,{})}),S.jsxs(yd,{children:[S.jsx(jd,{children:"Endereço"}),S.jsxs(zd,{itemScope:!0,itemType:"https://schema.org/PostalAddress",children:[S.jsx("span",{itemProp:"streetAddress",children:"Av. Brig. Faria Lima, 3477"}),S.jsx("br",{}),S.jsx("span",{itemProp:"addressLocality",children:"Itaim Bibi"}),", ",S.jsx("span",{itemProp:"addressRegion",children:"São Paulo - SP"}),S.jsx("br",{}),"CEP: ",S.jsx("span",{itemProp:"postalCode",children:"04538-133"})]})]})]}),S.jsxs(vd,{children:[S.jsx(wd,{"aria-hidden":"true",$color:"#4169E1",children:S.jsx(de,{})}),S.jsxs(yd,{children:[S.jsx(jd,{children:"Telefone"}),S.jsx(zd,{children:S.jsx("a",{href:"tel:+555591679300",onClick:t,"aria-label":"Ligar para (55) 55 9167-9300",children:"(55) 55 9167-9300"})})]})]}),S.jsxs(vd,{children:[S.jsx(wd,{"aria-hidden":"true",$color:"#25D366",children:S.jsx(q,{})}),S.jsxs(yd,{children:[S.jsx(jd,{children:"WhatsApp"}),S.jsx(zd,{children:S.jsx(kd,{onClick:()=>i(),"aria-label":"Conversar via WhatsApp",role:"button",tabIndex:"0",onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),i())},children:"(55) 55 9167-9300"})})]})]}),S.jsxs(vd,{children:[S.jsx(wd,{"aria-hidden":"true",$color:"#FF6B35",children:S.jsx(Q,{})}),S.jsxs(yd,{children:[S.jsx(jd,{children:"Horários de Funcionamento"}),S.jsxs(Cd,{children:[S.jsxs($d,{children:[S.jsx("span",{children:"Segunda a Sexta"}),S.jsx("span",{children:"8h às 18h"})]}),S.jsxs($d,{children:[S.jsx("span",{children:"Sábado"}),S.jsx("span",{children:"8h às 12h"})]}),S.jsxs($d,{children:[S.jsx("span",{children:"Domingo"}),S.jsx("span",{children:"Fechado"})]})]})]})]})]}),S.jsxs(Ed,{children:[S.jsxs("div",{className:"form-header",children:[S.jsx("div",{className:"form-icon",children:S.jsx(X,{})}),S.jsx("h2",{children:"Envie sua Mensagem"}),S.jsx("p",{children:"Preencha o formulário abaixo e entraremos em contato o mais breve possível."})]}),S.jsx(ps,{fallback:S.jsx("div",{children:"Erro ao carregar formulário. Tente novamente mais tarde."}),children:S.jsx(e.Suspense,{fallback:S.jsx(dn,{}),children:S.jsx(Ld,{})})})]})]})}),S.jsxs(Sd,{children:[S.jsx(Ad,{children:"Nossa Localização"}),S.jsx(Pd,{children:S.jsxs(Bd,{children:[S.jsx(ne,{"aria-hidden":"true"}),S.jsxs("p",{children:[S.jsx("strong",{children:"Av. Brig. Faria Lima, 3477"}),S.jsx("br",{}),"Itaim Bibi, São Paulo - SP",S.jsx("br",{}),"CEP: 04538-133"]}),S.jsx("a",{href:"https://maps.google.com/?q=Av.+Brig.+Faria+Lima,+3477+Itaim+Bibi+São+Paulo",target:"_blank",rel:"noopener noreferrer","aria-label":"Ver localização no Google Maps",children:"Ver no Google Maps"})]})})]}),S.jsx(Nd,{children:S.jsxs(Dd,{role:"alert",children:[S.jsx(Rd,{"aria-hidden":"true",children:S.jsx(ee,{})}),S.jsxs(Id,{children:[S.jsx(Md,{children:"Emergências Odontológicas"}),S.jsx(Td,{children:"Para urgências fora do horário comercial, entre em contato pelo WhatsApp ou deixe uma mensagem no formulário informando que é uma emergência."}),S.jsxs(Od,{onClick:()=>i(!0),"aria-label":"WhatsApp para emergências odontológicas",role:"button",tabIndex:"0",onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),i(!0))},children:[S.jsx(q,{"aria-hidden":"true"}),"WhatsApp Emergência"]})]})]})})]})})]})});function Hd(){return S.jsx(Ae,{children:S.jsxs(p,{children:[S.jsx(B,{}),S.jsxs(d,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:[S.jsx(N,{}),S.jsxs(l,{children:[S.jsx(c,{path:"/",element:S.jsx(ri,{})}),S.jsx(c,{path:"/sobre",element:S.jsx(zi,{})}),S.jsx(c,{path:"/servicos",element:S.jsx(Li,{})}),S.jsx(c,{path:"/agendamento",element:S.jsx(bo,{})}),S.jsx(c,{path:"/galeria",element:S.jsx(yn,{})}),S.jsx(c,{path:"/blog",element:S.jsx(as,{})}),S.jsx(c,{path:"/blog/:slug",element:S.jsx(nd,{})}),S.jsx(c,{path:"/contato",element:S.jsx(qd,{})}),S.jsx(c,{path:"*",element:S.jsx(Te,{})})]}),S.jsx(Ye,{})]})]})})}qd.displayName="Contact",A.createRoot(document.getElementById("root")).render(S.jsx(i.StrictMode,{children:S.jsx(Hd,{})}));export{W as F,ve as a,Z as b,de as c,xe as d,U as e,se as f,S as j};
