import{_ as st,u as we,s as P,g as V,C as ct,d as lt,o as ut,a as dt,c as mt,p as pt,b as Me,e as ht,f as ft,h as gt,v as vt}from"./vendor.78f84693.js";const yt=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}};yt();const wt="modulepreload",Ne={},bt="/",E=function(n,t){return!t||t.length===0?n():Promise.all(t.map(r=>{if(r=`${bt}${r}`,r in Ne)return;Ne[r]=!0;const a=r.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const i=document.createElement("link");if(i.rel=a?"stylesheet":wt,a||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),a)return new Promise((s,c)=>{i.addEventListener("load",s),i.addEventListener("error",c)})})).then(()=>n())},R=document.querySelector("canvas"),vn=document.querySelector(".menu"),yn=document.querySelector("main"),ze=document.querySelector(".details"),x=document.querySelector(".posterize"),Lt=document.querySelector("[for=posterize]"),y=document.querySelector(".color"),St=document.querySelector("[for=color]"),C=document.querySelector(".monochrome"),Et=document.querySelector("[for=monochrome]"),_=document.querySelector(".consider-dpr"),xt=document.querySelector('[for="consider-dpr"]'),k=document.querySelector(".optimize-curves"),kt=document.querySelector('[for="optimize-curves"]'),M=document.querySelector(".show-advanced"),Ct=document.querySelector('[for="show-advanced"]'),h=document.querySelector("img"),be=document.querySelector(".reset-all"),re=document.querySelector(".open"),ae=document.querySelector(".save"),oe=document.querySelector(".copy"),ie=document.querySelector(".paste"),se=document.querySelector(".install"),f=document.querySelector(".svg-output"),Ot=document.querySelector(".debug"),ce=document.querySelector("progress"),le=document.querySelector(".toast"),ue=document.documentElement,Le=document.querySelector("details.main"),Se=document.querySelector("summary"),De=document.querySelector(".close-options-button"),_t=document.querySelector(".license"),Tt=document.querySelector(".about"),We=document.querySelector("pinch-zoom"),G=window.devicePixelRatio;We.addEventListener("change",()=>{const{x:e,y:n,scale:t}=We;f.setAttribute("transform",`translate(${e}, ${n}) scale(${t})`)});const $e=()=>{f.setAttribute("transform","")},de=(e,n)=>{let t;return function(...a){const o=()=>{clearTimeout(t),e(...a)};clearTimeout(t),t=setTimeout(o,n)}};/*!
 * canvas-size
 * v1.2.5
 * https://github.com/jhildenbiddle/canvas-size
 * (c) 2015-2021 John Hildenbiddle <http://hildenbiddle.com>
 * MIT license
 */function qe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?qe(Object(t),!0).forEach(function(r){Pt(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):qe(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Pt(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Rt(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function It(e,n){if(e==null)return{};var t=Rt(e,n),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(n.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(t[r]=e[r]))}return t}function Ue(e,n){return jt(e)||Nt(e,n)||He(e,n)||Dt()}function me(e){return At(e)||Mt(e)||He(e)||zt()}function At(e){if(Array.isArray(e))return Ee(e)}function jt(e){if(Array.isArray(e))return e}function Mt(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Nt(e,n){var t=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r=[],a=!0,o=!1,i,s;try{for(t=t.call(e);!(a=(i=t.next()).done)&&(r.push(i.value),!(n&&r.length===n));a=!0);}catch(c){o=!0,s=c}finally{try{!a&&t.return!=null&&t.return()}finally{if(o)throw s}}return r}}function He(e,n){if(!!e){if(typeof e=="string")return Ee(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ee(e,n)}}function Ee(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function zt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(e){var n=e.sizes.shift(),t=Math.max(Math.ceil(n[0]),1),r=Math.max(Math.ceil(n[1]),1),a=[t-1,r-1,1,1],o=Date.now(),i=typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope,s,c;i?(s=new OffscreenCanvas(1,1),c=new OffscreenCanvas(t,r)):(s=document.createElement("canvas"),s.width=1,s.height=1,c=document.createElement("canvas"),c.width=t,c.height=r);var l=s.getContext("2d"),d=c.getContext("2d");d&&(d.fillRect.apply(d,a),l.drawImage(c,t-1,r-1,1,1,0,0,1,1));var u=l&&l.getImageData(0,0,1,1).data[3]!==0,g=Date.now()-o;return i?(postMessage({width:t,height:r,benchmark:g,isTestPass:u}),!u&&e.sizes.length&&J(e)):u?e.onSuccess(t,r,g):(e.onError(t,r,g),e.sizes.length&&J(e)),u}var xe={area:[16384,14188,11402,11180,10836,8192,4096,1],height:[8388607,65535,32767,16384,8192,4096,1],width:[4194303,65535,32767,16384,8192,4096,1]},Wt=["onError","onSuccess"],F={max:null,min:1,sizes:[],step:1024,usePromise:!1,useWorker:!1,onError:Function.prototype,onSuccess:Function.prototype},K={};function ke(e){var n=e.width===e.height,t=e.height===1,r=e.width===1,a=[];if(!e.width||!e.height)e.sizes.forEach(function(d){var u=n||t?d:1,g=n||r?d:1;a.push([u,g])});else for(var o=e.min||F.min,i=e.step||F.step,s=Math.max(e.width,e.height);s>=o;){var c=n||t?s:1,l=n||r?s:1;a.push([c,l]),s-=i}return a}function pe(e){var n=window&&"HTMLCanvasElement"in window,t=window&&"OffscreenCanvas"in window,r=Date.now(),a=e.onError,o=e.onSuccess,i=It(e,Wt),s=null;if(!n)return!1;if(e.useWorker&&t){var c=`
            var canvasTest = `.concat(J.toString(),`;
            onmessage = function(e) {
                canvasTest(e.data);
            };
        `),l=new Blob([c],{type:"application/javascript"}),d=URL.createObjectURL(l);s=new Worker(d),URL.revokeObjectURL(d),s.onmessage=function(u){var g=u.data,L=g.width,te=g.height,ne=g.benchmark,ve=g.isTestPass;ve?(K[r].onSuccess(L,te,ne),delete K[r]):K[r].onError(L,te,ne)}}if(e.usePromise)return new Promise(function(u,g){var L=b(b({},e),{},{onError:function(U,H,B){var ye;if(e.sizes.length===0)ye=!0;else{var rt=e.sizes.slice(-1),at=Ue(rt,1),je=Ue(at[0],2),ot=je[0],it=je[1];ye=U===ot&&H===it}a(U,H,B),ye&&g({width:U,height:H,benchmark:B})},onSuccess:function(U,H,B){o(U,H,B),u({width:U,height:H,benchmark:B})}});if(s){var te=L.onError,ne=L.onSuccess;K[r]={onError:te,onSuccess:ne},s.postMessage(i)}else J(L)});if(s)K[r]={onError:a,onSuccess:o},s.postMessage(i);else return J(e)}var $t={maxArea:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=ke({width:n.max,height:n.max,min:n.min,step:n.step,sizes:me(xe.area)}),r=b(b(b({},F),n),{},{sizes:t});return pe(r)},maxHeight:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=ke({width:1,height:n.max,min:n.min,step:n.step,sizes:me(xe.height)}),r=b(b(b({},F),n),{},{sizes:t});return pe(r)},maxWidth:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=ke({width:n.max,height:1,min:n.min,step:n.step,sizes:me(xe.width)}),r=b(b(b({},F),n),{},{sizes:t});return pe(r)},test:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=b(b({},F),n);return t.sizes=me(t.sizes),t.width&&t.height&&(t.sizes=[[t.width,t.height]]),pe(t)}};let Ve,Ge;const Fe="OffscreenCanvas"in window&&"CanvasFilter"in window;if(Fe)E(()=>import("./preprocessworker.a4b60f0c.js"),[]).then(e=>{const n=e.default;let t=null;const r=R.getContext("2d");Ve=async()=>{t&&t.terminate(),t=new n;const a=R.cloneNode().transferControlToOffscreen();return t.postMessage({offscreen:a},[a]),new Promise(async o=>{const{width:i,height:s}=Be();let c;try{c=await createImageBitmap(h)}catch{try{c=await createImageBitmap(h,0,0,i,s)}catch(d){console.error(d.name,d.message),f.innerHTML="",S(d.message);return}}const l=new MessageChannel;l.port1.onmessage=({data:d})=>{l.port1.close(),t&&(t.terminate(),t=null),R.width=i,R.height=s,r.putImageData(d.result,0,0),o(d.result)},t.postMessage({inputImageBitmap:c,posterize:x.checked,rgba:{r:I(p[w.red]),g:I(p[w.green]),b:I(p[w.blue]),a:I(p[w.alpha])},cssFilters:Je(),rotate:Number(p[Y.rotation].value),width:i,height:s,dpr:G},[l.port2])})}});else{const e=R.getContext("2d",{desynchronized:!0});e.scale(G,G),e.imageSmoothingEnabled=!0,Ge=()=>{let{width:n,height:t}=Be();const r=_.checked?G:1;let a=1;for(;!$t.test({width:n,height:t});)n=Math.floor(n/2),t=Math.floor(t/2),a/=2;R.width=n,R.height=t,e.clearRect(0,0,n,t),e.filter=Ut(),e.setTransform(1,0,0,1,n/2,t/2);const o=Number(p[Y.rotation].value);return e.rotate(o*Math.PI/180),e.drawImage(h,-r*h.naturalWidth*a/2,-r*h.naturalHeight*a/2),e.getImageData(0,0,n,t)}}const Be=()=>{const e=Number(p[Y.scale].value)/100;return{width:Math.ceil(G*h.naturalWidth*e),height:Math.ceil(G*h.naturalHeight*e)}},I=e=>{const n=Number(e.value),t=[];for(let r=0;r<=n;r++)t[r]=Number((1/n*r).toFixed(1));return t},qt=()=>`data:image/svg+xml;utf8,<svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <filter id="posterize">
        <feComponentTransfer>
          <feFuncR type="discrete" tableValues="${I(p[w.red]).join(",")}" />
          <feFuncG type="discrete" tableValues="${I(p[w.green]).join(",")}" />
          <feFuncB type="discrete" tableValues="${I(p[w.blue]).join(",")}" />
          <feFuncA type="discrete" tableValues="${I(p[w.alpha])}" />
        </feComponentTransfer>
      </filter>
    </svg>`.replace(/[\r\n]/g,"").replace(/\s+/g," ").trim(),Je=()=>{let e="";for(const[n,t]of Object.entries(Ye)){const r=p[n];t.initial!==Number(r.value)&&(e+=`${n}(${r.value}${r.dataset.unit}) `)}return e},Ut=()=>{let e=`${x.checked?`url('${qt()}#posterize') `:""}`;return e+=Je(),e.trim()||"none"};function Ht(){return new Worker("/assets/monochromeworker.3e780118.js",{type:"module"})}let N=null;const Vt=async e=>(N&&N.terminate(),N=new Ht,new Promise(async n=>{const t=new MessageChannel;t.port1.onmessage=({data:a})=>{t.port1.close(),N&&(N.terminate(),N=null),n(a.result)};const r={turdsize:Number(p[v.turdsize].value),alphamax:Number(p[v.alphamax].value),turnpolicy:Number(p[v.turnpolicy].value),opttolerance:Number(p[v.opttolerance].value),opticurve:k.checked?1:0,extractcolors:!1};N.postMessage({imageData:e,params:r},[t.port2])}));function Gt(){return new Worker("/assets/colorworker.3bb51423.js",{type:"module"})}let z=null;const T={},Ft=async e=>(z&&z.terminate(),z=new Gt,new Promise(async n=>{const t=new MessageChannel;t.port1.onmessage=({data:l})=>{t.port1.close(),z&&(z.terminate(),z=null),n(l.result)},ce.value=0;let r="",a="",o="",i=0;T.current&&(clearInterval(T.current),T.current=null),T.current=setInterval(()=>{const l=`${r}${o}${a}`;if(l.length!==i){const d=f.dataset.transform;d&&f.setAttribute("transform",d),f.innerHTML=l,i=l.length}},500);const s=new MessageChannel;s.port1.onmessage=({data:l})=>{const d=Math.floor(l.processed/l.total*100);ce.value=d,l.svg&&(r||(r=l.svg.replace(/(.*?<svg[^>]+>)(.*?)(<\/svg>)/,"$1").replace(/\s+width="\d+(?:\.\d+)?"/,"").replace(/\s+height="\d+(?:\.\d+)"/,""),a=l.svg.replace(/(.*?<svg[^>]+>)(.*?)(<\/svg>)/,"$3")),o+=l.svg.replace(/(.*?<svg[^>]+>)(.*?)(<\/svg>)/,"$2")),l.processed===l.total&&(clearInterval(T.current),T.current=null,s.port1.close(),ce.value=0)};const c={minPathSegments:Number(p[v.minPathLenght].value),strokeWidth:Number(p[v.strokeWidth].value),turdsize:Number(p[v.turdsize].value),alphamax:Number(p[v.alphamax].value),turnpolicy:Number(p[v.turnpolicy].value),opttolerance:Number(p[v.opttolerance].value),opticurve:k.checked?1:0,extractcolors:!1,posterizelevel:2,posterizationalgorithm:0};z.postMessage({imageData:e,params:c},[t.port2,s.port2])}));function Bt(e){switch(e){case"../i18n/de-DE.js":return E(()=>import("./de-DE.cc4f3a0c.js"),[]);case"../i18n/el-GR.js":return E(()=>import("./el-GR.45cae4a7.js"),[]);case"../i18n/en-US.js":return E(()=>import("./en-US.8a7150ac.js"),[]);default:return new Promise(function(n,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}function Jt(e){switch(e){case"../i18n/de-DE.js":return E(()=>import("./de-DE.cc4f3a0c.js"),[]);case"../i18n/el-GR.js":return E(()=>import("./el-GR.45cae4a7.js"),[]);case"../i18n/en-US.js":return E(()=>import("./en-US.8a7150ac.js"),[]);default:return new Promise(function(n,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}const Ke="language",Ce=["en","de","el"],Kt=["en-US","de-DE","el-GR"];class Qt{constructor(){this.currentLanguageAndLocale=this.detectLanguageAndLocal(),this.defaultLanguage=Ce[0],this.defaultLocale=Kt[0],this.translations=null}detectLanguageAndLocal(){const n=localStorage.getItem(Ke);if(n)return JSON.parse(n);let[t,r=null]=navigator.language?.split("-");r&&(r=r.toUpperCase()),(!t||!Ce.includes(t))&&(t=Ce[0]);const a={language:t,locale:r};return localStorage.setItem(Ke,JSON.stringify(a)),a}async getTranslations(){const{language:n,locale:t}=this.currentLanguageAndLocale;this.translations=(await Jt(`../i18n/${n}${t?`-${t}`:""}.js`).catch(()=>Bt(`../i18n/${this.defaultLocale}.js`))).default}t(n){return this.translations[n]}}const m=new Qt;var Zt='<svg viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle cx="5" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;5;50;50" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" begin="0s" dur="2.2s" values="5;27;49;5" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="27" cy="5" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" from="5" to="5" values="5;50;50;5" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" begin="0s" dur="2.2s" from="27" to="27" values="27;49;5;27" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="49" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;50;5;50" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" from="49" to="49" begin="0s" dur="2.2s" values="49;5;27;49" calcMode="linear" repeatCount="indefinite"/></circle></g></svg>';const Qe=(e,n)=>{!e||(e=e.replace(/\s+width="\d+(?:\.\d+)?"/,"").replace(/\s+height="\d+(?:\.\d+)"/,""),f.classList.remove(he),f.classList.remove(fe),f.classList.add(n),f.innerHTML=e,S(`${m.t("svgSize")}: ${e.length} ${m.t("bytes")}`,3e3))},O=async()=>{f.innerHTML="",f.classList.remove(he,fe),T.current&&(clearInterval(T.current),T.current=null);const e=f.getAttribute("transform");f.innerHTML=Zt,e&&(f.dataset.transform=e,f.setAttribute("transform",""));const n=Fe?await Ve():Ge();if(y.checked){const t=await Ft(n);e&&f.setAttribute("transform",e),Qe(t,he)}else{const t=await Vt(n);e&&f.setAttribute("transform",e),Qe(t,fe)}};function Xt(){return new Worker("/assets/svgoworker.bb79c476.js",{type:"module"})}let D=null;const Q=async e=>(D&&D.terminate(),D=new Xt,new Promise(n=>{const t=new MessageChannel;t.port1.onmessage=({data:r})=>{t.port1.close(),D&&(D.terminate(),D=null),n(r.result)},D.postMessage({svg:e},[t.port2])})),Z="fileHandle",Yt=e=>e?e.name.replace(/\.[^\.]+$/,""):"";re.addEventListener("click",async()=>{try{const e=await st({mimeTypes:["image/*"],description:"Image files"}),n=URL.createObjectURL(e);h.addEventListener("load",()=>{URL.revokeObjectURL(n)},{once:!0}),h.src=n,we&&await P(Z,e.handle)}catch(e){console.error(e.name,e.message),S(e.message)}});document.addEventListener("dragover",e=>{e.preventDefault()});document.addEventListener("dragenter",e=>{e.preventDefault(),ue.classList.add("dropenter")});document.addEventListener("dragleave",e=>{e.preventDefault(),e.target===document.documentElement&&ue.classList.remove("dropenter")});document.addEventListener("drop",async e=>{e.preventDefault(),e.stopPropagation(),ue.classList.remove("dropenter");const n=e.dataTransfer.items[0];if(n.kind==="file"){let t;if(h.addEventListener("load",()=>{URL.revokeObjectURL(t)},{once:!0}),we){const a=await n.getAsFileSystemHandle();if(a.kind!=="file")return;const o=await a.getFile();t=URL.createObjectURL(o),h.src=t,await P(Z,a);return}const r=n.getAsFile();t=URL.createObjectURL(r),h.src=t}});ae.addEventListener("click",async()=>{try{let e="",n=f.innerHTML,t=null;we&&(e=Yt(await V(Z)),t=await showSaveFilePicker({suggestedName:e,types:[{description:"SVG file",accept:{"image/svg+xml":[".svg"]}}]})),S(m.t("optimizingSVG"),1/0),n=await Q(n),S(m.t("savedSVG"));const r=new Blob([n],{type:"image/svg+xml"});await ct(r,{fileName:e,description:"SVG file"},t)}catch(e){console.error(e.name,e.message),S(e.message)}});ie.addEventListener("click",async()=>{try{const e=await navigator.clipboard.read();for(const n of e)for(const t of n.types)if(t.startsWith("image/")){const r=await n.getType(t);if(!r)return;const a=URL.createObjectURL(r);h.src=a;return}}catch(e){console.error(e.name,e.message),S(e.message)}});document.addEventListener("paste",e=>{try{if(!e.clipboardData.files.length)return;const n=e.clipboardData.files[0];if(n.type.startsWith("image/")){const t=URL.createObjectURL(n);h.src=t;return}}catch(n){console.error(n.name,n.message),S(n.message)}});oe.addEventListener("click",async()=>{let e=f.innerHTML;S(m.t("optimizingSVG"),1/0);try{"ClipboardItem"in window?await navigator.clipboard.write([new ClipboardItem({"text/plain":new Promise(async n=>{e=await Q(e),n(new Blob([e],{type:"text/plain"}))}),"image/svg+xml":new Promise(async n=>{e=await Q(e),n(new Blob([e],{type:"image/svg+xml"}))})})]):await navigator.clipboard.writeText(await Q(e))}catch(n){console.log(n.name,n.message),e=await Q(e);const t=new Blob([e],{type:"text/plain"}),r=new Blob([e],{type:"image/svg+xml"});try{Number(navigator.userAgent.replace(/.*Chrome\/(\d+).*/,"$1"))<=88?await navigator.clipboard.write([new ClipboardItem({[t.type]:t})]):await navigator.clipboard.write([new ClipboardItem({[r.type]:r,[t.type]:t})])}catch(a){console.warn(a.name,a.message);try{await navigator.clipboard.write([new ClipboardItem({[t.type]:t})])}catch(o){console.error(o.name,o.message),S(o.message);return}}}S(m.t("copiedSVG"))});var en='<svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="none"/><path d="m20 17h-16v-12h8v-2h-8c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2v-3h-2z"/><path d="m17 14 5-5-1.41-1.41-2.59 2.58v-7.17h-2v7.17l-2.59-2.58-1.41 1.41z"/></svg>';const Oe="monochromeSettings",_e="colorSettings",he="color",fe="monochrome",A="%",Ze="deg",X="steps",Xe="pixels",Te="",tn="segments",j={brightness:"brightness",contrast:"contrast",grayscale:"grayscale",hueRotate:"hue-rotate",invert:"invert",opacity:"opacity",saturate:"saturate",sepia:"sepia"},w={red:"red",green:"green",blue:"blue",alpha:"alpha"},Y={scale:"scale",rotation:"rotation"},v={minPathLenght:"minPathSegments",strokeWidth:"strokeWidth",turdsize:"turdsize",alphamax:"alphamax",turnpolicy:"turnpolicy",opticurve:"opticurve",opttolerance:"opttolerance"},Ye={[j.brightness]:{unit:A,initial:100,min:0,max:200},[j.contrast]:{unit:A,initial:100,min:0,max:200},[j.grayscale]:{unit:A,initial:0,min:0,max:100},[j.hueRotate]:{unit:Ze,initial:0,min:0,max:360},[j.invert]:{unit:A,initial:0,min:0,max:100},[j.opacity]:{unit:A,initial:100,min:0,max:100},[j.saturate]:{unit:A,initial:100,min:0,max:200},[j.sepia]:{unit:A,initial:0,min:0,max:100}},nn={[w.red]:{unit:X,initial:5,min:1,max:20},[w.green]:{unit:X,initial:5,min:1,max:20},[w.blue]:{unit:X,initial:5,min:1,max:20},[w.alpha]:{unit:X,initial:1,min:1,max:10}},rn={[Y.scale]:{unit:A,initial:100,min:1,max:200},[Y.rotation]:{unit:Ze,initial:0,min:0,max:360}},an={[v.turdsize]:{unit:Xe,initial:2,min:0,max:50},[v.alphamax]:{unit:Te,initial:1,min:0,max:1.3334},[v.turnpolicy]:{unit:X,initial:4,min:0,max:6},[v.opttolerance]:{unit:Te,initial:.2,min:0,max:1},[v.minPathLenght]:{unit:tn,initial:0,min:0,max:30},[v.strokeWidth]:{unit:Xe,initial:0,min:0,max:100}},on=[{name:"svgOptions",icon:Me},{name:"colorChannels",icon:ht},{name:"imageSizeAndRotation",icon:ft},{name:"imagePreprocessing",icon:gt}],Pe=[Object.entries(an),Object.entries(nn),Object.entries(rn),Object.entries(Ye)],p={},Re={},W={},ee=(e,n)=>{const t=m.t(e);return` (${e?`${n}${t.length===1?t:` ${t}`}`:n})`},$=e=>{const n=document.createElement("span");return n.classList.add("icon"),n.innerHTML=e,n},sn=(e,n)=>{const t=document.createElement("details");W[e]=t;const r=document.createElement("summary"),a=$(n);return r.append(a),r.append(document.createTextNode(m.t(e))),t.append(r),t},cn=["alphamax","turnpolicy","optimize-curves","opttolerance","minPathSegments"],ln=async(e,n,t)=>{const{unit:r,min:a,max:o,initial:i}=n,s=document.createElement("div");s.classList.add("preprocess-input"),cn.includes(e)&&s.classList.add("advanced");const c=document.createElement("label");c.textContent=m.t(e)||e,c.htmlFor=e;const l=await ge(),d=document.createElement("span");Re[e]=d,d.textContent=ee(r,l[e]||i);const u=document.createElement("input");p[e]=u,u.id=e,u.type="range",u.class=e,r&&(u.dataset.unit=r),r===Te&&(u.step=.01),u.min=a,u.max=o,u.value=l[e]||i,u.addEventListener("input",()=>{d.textContent=ee(r,u.value)}),Object.keys(w).includes(e)?u.addEventListener("change",de(async()=>{await q(u),await O()},250)):Object.keys(v).includes(e)?u.addEventListener("change",de(async()=>{await q(u),await O()},250)):u.addEventListener("change",de(async()=>{await q(u),await O()},250));const g=document.createElement("button");g.type="button",g.textContent=m.t("reset"),g.addEventListener("click",async()=>{u.value=i,d.textContent=ee(r,i),u.dispatchEvent(new Event("change"))}),c.append(d),s.append(c);const L=document.createElement("div");s.append(L),L.append(u),L.append(g),t.append(s)},et=()=>{const e=!x.checked;Object.keys(w).forEach(n=>{p[n].disabled=e})};x.addEventListener("change",async()=>{et(),await q(x),await O()});const Ie=async()=>{const e=await ge();x.checked=e[x.id]??x.defaultChecked,et(),_.checked=e[_.id]??_.defaultChecked,k.checked=e[k.id]??k.defaultChecked,tt(),M.checked=e[M.id]??M.defaultChecked,nt(),Pe.forEach(n=>{for(const[t,r]of n){const a=e[p[t].id]||r.initial;p[t].value=a,Re[t].textContent=ee(r.unit,a)}})};y.addEventListener("change",async()=>{await P(y.id,y.checked),await P(C.id,C.checked),await Ie(),await O()});C.addEventListener("change",async()=>{await P(y.id,y.checked),await P(C.id,C.checked),await Ie(),await O()});_.addEventListener("change",async()=>{await q(_),await O()});const tt=()=>{p.opttolerance.disabled=!k.checked};k.addEventListener("change",async()=>{tt(),await q(k),await O()});const un=async()=>{await m.getTranslations(),mn();const e=getComputedStyle(document.documentElement).getPropertyValue("--mobile-breakpoint"),n=window.matchMedia(`(max-width: ${e})`),t=()=>{if(n.matches){Le.open=!1;return}Le.open=!0};t(),n.addEventListener("change",t),y.checked=await V(y.id)??y.defaultChecked,C.checked=await V(C.id)??C.defaultChecked,y.checked&&f.classList.add(he),C.checked&&f.classList.add(fe);const r=[];Pe.forEach(async(a,o)=>{const{name:i,icon:s}=on[o],c=sn(i,s);ze.append(c),o<2&&(c.open=!0),i==="colorChannels"?W.colorChannels.append(x.parentNode):i==="svgOptions"?(W.svgOptions.append(y.parentNode),W.svgOptions.append(C.parentNode)):i==="imageSizeAndRotation"&&W.imageSizeAndRotation.append(_.parentNode);for(const[l,d]of a)r.push(ln(l,d,c));Promise.all(r).then(async()=>{for(const[l]of a)l==="opttolerance"&&W.svgOptions.append(k.parentNode),i==="svgOptions"&&W.svgOptions.append(M.parentNode);await Ie()})}),ze.append(be.parentNode),h.addEventListener("load",async()=>{h.width=h.naturalWidth,h.height=h.naturalHeight;const a=await ge();if(h.src!==new URL("/favicon.png",location.href).toString()||Object.keys(a).length>1)setTimeout(async()=>{$e(),await O()},100);else{const o=await fetch(`/potraced-${y.checked?"color":"monochrome"}.svg`).then(i=>i.text());f.innerHTML=o}}),h.complete&&h.dispatchEvent(new Event("load")),ce.hidden=!1;try{const a=await V(Z);if(a&&await dn(a)){const o=await a.getFile(),i=URL.createObjectURL(o);h.src=i}}catch(a){console.error(a.name,a.message),await lt(Z)}},dn=async e=>{const n={mode:"read"};return await e.queryPermission(n)==="granted"||await e.requestPermission(n)==="granted"},mn=()=>{_t.textContent=m.t("license"),Tt.textContent=m.t("about"),be.textContent=m.t("resetAll"),Lt.textContent=m.t("posterizeInputImage"),St.textContent=m.t("colorSVG"),Et.textContent=m.t("monochromeSVG"),xt.textContent=m.t("considerDPR"),kt.textContent=m.t("opticurve"),Ct.textContent=m.t("showAdvancedControls"),re.innerHTML="",re.append($(ut)),re.append(document.createTextNode(m.t("openImage"))),ae.innerHTML="",ae.append($(dt)),ae.append(document.createTextNode(m.t("saveSVG"))),oe.innerHTML="",oe.append($(mt)),oe.append(document.createTextNode(m.t("copySVG"))),ie.innerHTML="",ie.append($(pt)),ie.append(document.createTextNode(m.t("pasteImage"))),se.innerHTML="",se.append($(en)),se.append(document.createTextNode(m.t("install"))),ue.dataset.dropText=m.t("dropFileHere"),Se.innerHTML="",Se.append($(Me)),Se.append(document.createTextNode(m.t("tweak"))),De.ariaLabel=m.t("closeOptions")};be.addEventListener("click",async()=>{const e=(n,t,r)=>{p[n].value=r,Re[n].textContent=ee(t,r)};Pe.forEach(n=>{for(const[t,r]of n)e(t,r.unit,r.initial)}),k.checked=k.defaultChecked,x.checked=x.defaultChecked,_.checked=_.defaultChecked,await pn(),$e(),await O()});Ot.addEventListener("click",()=>{R.classList.toggle("debug")});let Ae=null;const S=(e,n=5e3)=>{if(le.innerHTML=e,le.hidden=!1,Ae&&clearTimeout(Ae),n!==1/0){Ae=setTimeout(()=>{le.hidden=!0,le.textContent=""},n);return}},nt=async()=>{await q(M),document.querySelectorAll(".advanced").forEach(e=>{M.checked?e.style.display="block":e.style.display="none"})};M.addEventListener("change",nt);document.documentElement.style.setProperty("--100vh",`${window.innerHeight}px`);window.addEventListener("resize",de(()=>{document.documentElement.style.setProperty("--100vh",`${window.innerHeight}px`)},250));De.addEventListener("click",()=>{Le.open=!1});const pn=async()=>{await P(y.checked?_e:Oe,{})},ge=async()=>{const e=y.checked?await V(_e):await V(Oe);return e||{}},q=async e=>{const n=await ge();n[e.id]=e.type==="range"?e.value:e.checked,await P(y.checked?_e:Oe,n)};function hn(e={}){const{immediate:n=!1,onNeedRefresh:t,onOfflineReady:r,onRegistered:a,onRegisterError:o}=e;let i;const s=async(c=!0)=>{};return"serviceWorker"in navigator&&(i=new vt("/sw.js",{scope:"/",type:"classic"}),i.addEventListener("activated",c=>{c.isUpdate?window.location.reload():r==null||r()}),i.register({immediate:n}).then(c=>{a==null||a(c)}).catch(c=>{o==null||o(c)})),s}(async(e,n,t,r,a,o,i,s,c,l)=>{const d={z:`${e()}`.substr(2),cid:`${n.getItem(c)||(l=`${e()}`.substr(2),n.setItem(c,l),l)}`,ua:s.userAgent,dr:r.referrer||"",sr:`${t.width}x${t.height}`,vp:`${a.clientWidth}x${a.clientHeight}`,sd:`${t.pixelDepth}-bits`,ul:s.language,dl:o(i.href),dp:o(i.pathname),dt:r.title},u=new FormData;for(const[g,L]of Object.entries(d))u.append(g,L);try{await fetch("https://svgcode.glitch.me/",{method:"post",body:u})}catch{}})(Math.random,localStorage,screen,document,document.documentElement,encodeURIComponent,location,navigator,"cid",0);"launchQueue"in window&&E(()=>import("./filehandling.e1411625.js"),["assets/filehandling.e1411625.js","assets/vendor.78f84693.js"]);"windowControlsOverlay"in navigator&&E(()=>import("./windowcontrols.5f3bb039.js"),["assets/windowcontrols.5f3bb039.js","assets/vendor.78f84693.js"]);"onbeforeinstallprompt"in window&&"onappinstalled"in window?E(()=>import("./install.cdb36f95.js"),["assets/install.cdb36f95.js","assets/vendor.78f84693.js"]):se.style.display="none";const fn=()=>{let e=!1;const n={get type(){e=!0}};try{new Worker("blob://",n)}finally{return e}};(async()=>{un(),fn()||await E(()=>import("./module-workers-polyfill.min.dc7647fd.js"),[]),hn({onOfflineReady(){S(m.t("readyToWorkOffline"))},onNeedRefresh(){location.reload()}})()})();export{Z as F,yn as a,se as b,de as d,h as i,vn as m};