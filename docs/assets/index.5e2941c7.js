import{f as e,e as t,a as n,o as r,s as a,c as o,p as i,b as s,d as c,g as l,h as u,v as d}from"./vendor.e3820820.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const m={},p=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in m)return;m[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":"modulepreload",t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},g=document.querySelector("canvas"),h=document.querySelector(".details"),f=document.querySelector(".posterize"),v=document.querySelector("[for=posterize]"),y=document.querySelector(".color"),w=document.querySelector("[for=color]"),b=document.querySelector(".monochrome"),L=document.querySelector("[for=monochrome]"),x=document.querySelector(".consider-dpr"),E=document.querySelector('[for="consider-dpr"]'),S=document.querySelector(".optimize-curves"),O=document.querySelector('[for="optimize-curves"]'),k=document.querySelector("img"),M=document.querySelector(".reset-all"),j=document.querySelector(".open"),T=document.querySelector(".save"),$=document.querySelector(".copy"),C=document.querySelector(".paste"),P=document.querySelector("output"),N=document.querySelector(".debug"),q=document.querySelector("progress"),I=document.querySelector(".toast"),R=document.documentElement,z=document.querySelector("details.main"),_=document.querySelector("summary"),U=window.devicePixelRatio;const A=["en","de"],D=["en-US","de-DE"];const B=new class{constructor(){this.currentLanguageAndLocale=this.detectLanguageAndLocal(),this.defaultLanguage=A[0],this.defaultLocale=D[0],this.translations=null}detectLanguageAndLocal(){var e;const t=localStorage.getItem("language");if(t)return JSON.parse(t);let[n,r=null]=null==(e=navigator.language)?void 0:e.split("-");r&&(r=r.toUpperCase()),n&&A.includes(n)||(n=A[0]);const a={language:n,locale:r};return localStorage.setItem("language",JSON.stringify(a)),a}async getTranslations(){const{language:e,locale:t}=this.currentLanguageAndLocale;this.translations=(await function(e){switch(e){case"../i18n/de.js":return p((()=>import("./de.58feef74.js")),[]);case"../i18n/en-US.js":return p((()=>import("./en-US.d8d32229.js")),[]);default:return new Promise((function(t,n){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}(`../i18n/${e}${t?`-${t}`:""}.js`).catch((()=>function(e){switch(e){case"../i18n/de.js":return p((()=>import("./de.58feef74.js")),[]);case"../i18n/en-US.js":return p((()=>import("./en-US.d8d32229.js")),[]);default:return new Promise((function(t,n){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}(`../i18n/${this.defaultLocale}.js`)))).default}t(e){return this.translations[e]}};let H=0,V=0,W=1,F={};const G=e=>(e.preventDefault(),!1),X=e=>{const t=P.querySelector("svg");if(t){t.classList.add("interactive");for(let t=0;t<Z.length;t++)if(e.pointerId===Z[t].pointerId){Z[t]=e;break}if(2===Z.length){const e=Math.abs(Z[0].clientX-Z[1].clientX);ee>0&&(e>ee&&(W*=.995,K(W)),e<ee&&(W*=1.005,K(W))),ee=e}else if(1===Z.length){const n=Math.floor(e.offsetX-H),r=Math.floor(e.offsetY-V);t.setAttribute("viewBox",`${-1*n} ${-1*r} ${F.width} ${F.height}`)}}};P.addEventListener("pointerdown",(e=>{P.querySelector("svg")&&(Z.push(e),P.addEventListener("dragstart",G),J(),H=Math.floor(e.offsetX+F.x),V=Math.floor(e.offsetY+F.y),P.addEventListener("pointermove",X),P.style.cursor="grabbing")}));const Y=e=>{P.removeEventListener("pointermove",X),P.removeEventListener("dragstart",G),te(e),Z.length<2&&(ee=-1),J(),P.style.cursor="grab";const t=P.querySelector("svg");t&&t.classList.remove("interactive")};P.addEventListener("pointerup",(e=>{Y(e)})),P.addEventListener("pointercancel",(e=>{Y(e)})),P.addEventListener("pointerleave",(e=>{Y(e)}));const J=()=>{const e=P.querySelector("svg");if(!e)return;const t=e.getAttribute("viewBox"),[n,r,a,o]=t.split(" ");F.x=Number(n),F.y=Number(r),F.width=Number(a),F.height=Number(o)},K=e=>{const t=P.querySelector("svg");if(!t)return;Ye(`${B.t("zoom")}: ${(1/e).toFixed(1)}×`,2e3),void 0===F.width&&J();const n=Math.ceil(F.width*e),r=Math.ceil(F.height*e);if(n<=0||r<=0)return;const a=Math.floor(F.x+(F.width-n)/2),o=Math.floor(F.y+(F.height-r)/2);t.setAttribute("viewBox",`${a} ${o} ${n} ${r}`)};let Q=null;P.addEventListener("wheel",(e=>{e.preventDefault();const t=P.querySelector("svg");t&&(t.classList.add("interactive"),W=Math.max(.1,Math.min(W*(1+.005*e.deltaY),10)),K(W),Q&&clearTimeout(Q),Q=setTimeout((()=>{t.classList.remove("interactive")}),1e3))}));const Z=[];let ee=-1;const te=e=>{for(let t=0;t<Z.length;t++)if(Z[t].pointerId===e.pointerId){Z.splice(t,1);break}},ne=()=>{H=0,V=0,W=1,F={}},re=(e,t)=>{let n;return function(...r){clearTimeout(n),n=setTimeout((()=>{clearTimeout(n),e(...r)}),t)}};
/*!
 * canvas-size
 * v1.2.5
 * https://github.com/jhildenbiddle/canvas-size
 * (c) 2015-2021 John Hildenbiddle <http://hildenbiddle.com>
 * MIT license
 */
function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(n),!0).forEach((function(t){ie(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function se(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function ce(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(c){s=!0,a=c}finally{try{i||null==n.return||n.return()}finally{if(s)throw a}}return o}(e,t)||ue(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function le(e){return function(e){if(Array.isArray(e))return de(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ue(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ue(e,t){if(e){if("string"==typeof e)return de(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?de(e,t):void 0}}function de(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function me(e){var t,n,r=e.sizes.shift(),a=Math.max(Math.ceil(r[0]),1),o=Math.max(Math.ceil(r[1]),1),i=[a-1,o-1,1,1],s=Date.now(),c="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope;c?(t=new OffscreenCanvas(1,1),n=new OffscreenCanvas(a,o)):((t=document.createElement("canvas")).width=1,t.height=1,(n=document.createElement("canvas")).width=a,n.height=o);var l=t.getContext("2d"),u=n.getContext("2d");u&&(u.fillRect.apply(u,i),l.drawImage(n,a-1,o-1,1,1,0,0,1,1));var d=l&&0!==l.getImageData(0,0,1,1).data[3],m=Date.now()-s;return c?(postMessage({width:a,height:o,benchmark:m,isTestPass:d}),!d&&e.sizes.length&&me(e)):d?e.onSuccess(a,o,m):(e.onError(a,o,m),e.sizes.length&&me(e)),d}var pe=["onError","onSuccess"],ge={max:null,min:1,sizes:[],step:1024,usePromise:!1,useWorker:!1,onError:Function.prototype,onSuccess:Function.prototype},he={};function fe(e){var t=window&&"HTMLCanvasElement"in window,n=window&&"OffscreenCanvas"in window,r=Date.now(),a=e.onError,o=e.onSuccess,i=se(e,pe),s=null;if(!t)return!1;if(e.useWorker&&n){var c="\n            var canvasTest = ".concat(me.toString(),";\n            onmessage = function(e) {\n                canvasTest(e.data);\n            };\n        "),l=new Blob([c],{type:"application/javascript"}),u=URL.createObjectURL(l);s=new Worker(u),URL.revokeObjectURL(u),s.onmessage=function(e){var t=e.data,n=t.width,a=t.height,o=t.benchmark;t.isTestPass?(he[r].onSuccess(n,a,o),delete he[r]):he[r].onError(n,a,o)}}return e.usePromise?new Promise((function(t,n){var c=oe(oe({},e),{},{onError:function(t,r,o){var i;if(0===e.sizes.length)i=!0;else{var s=ce(e.sizes.slice(-1),1),c=ce(s[0],2),l=c[0],u=c[1];i=t===l&&r===u}a(t,r,o),i&&n({width:t,height:r,benchmark:o})},onSuccess:function(e,n,r){o(e,n,r),t({width:e,height:n,benchmark:r})}});if(s){var l=c.onError,u=c.onSuccess;he[r]={onError:l,onSuccess:u},s.postMessage(i)}else me(c)})):s?(he[r]={onError:a,onSuccess:o},void s.postMessage(i)):me(e)}var ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=oe(oe({},ge),e);return t.sizes=le(t.sizes),t.width&&t.height&&(t.sizes=[[t.width,t.height]]),fe(t)};let ye,we;const be="OffscreenCanvas"in window&&"CanvasFilter"in window;if(be)p((()=>import("./preprocessworker.324f74d1.js")),[]).then((e=>{const t=new(0,e.default),n=g.transferControlToOffscreen();t.postMessage({offscreen:n},[n]),ye=async()=>new Promise((async e=>{const n=new MessageChannel;n.port1.onmessage=({data:t})=>{n.port1.close(),e(t.result)};const{width:r,height:a}=Le();t.postMessage({inputImageBitmap:await createImageBitmap(k),posterize:f.checked,rgb:{r:xe(Ae[Ce.red]),g:xe(Ae[Ce.green]),b:xe(Ae[Ce.blue])},width:r,height:a,dpr:U},[n.port2])}))}));else{const e=g.getContext("2d",{desynchronized:!0});e.scale(U,U),e.imageSmoothingEnabled=!0,we=()=>{let{width:t,height:n}=Le();const r=x.checked?U:1;let a=1;for(;!ve({width:t,height:n});)t=Math.floor(t/2),n=Math.floor(n/2),a/=2;return g.width=t,g.height=n,e.clearRect(0,0,t,n),e.filter=Ee(),e.drawImage(k,0,0,r*k.naturalWidth*a,r*k.naturalHeight*a,0,0,t,n),e.getImageData(0,0,t,n)}}const Le=()=>{const e=Number(Ae[Pe.scale].value)/100;return{width:Math.ceil(U*k.naturalWidth*e),height:Math.ceil(U*k.naturalHeight*e)}},xe=e=>{const t=Number(e.value),n=[];for(let r=0;r<=t;r++)n[r]=(1/t*r).toFixed(1);return n},Ee=()=>{let e=""+(f.checked?`url('${`data:image/svg+xml;utf8,<svg\n      xmlns="http://www.w3.org/2000/svg"\n      xmlns:xlink="http://www.w3.org/1999/xlink"\n    >\n      <filter id="posterize">\n        <feComponentTransfer>\n          <feFuncR type="discrete" tableValues="${xe(Ae[Ce.red]).join(",")}" />\n          <feFuncG type="discrete" tableValues="${xe(Ae[Ce.green]).join(",")}" />\n          <feFuncB type="discrete" tableValues="${xe(Ae[Ce.blue]).join(",")}" />\n          <feFuncA type="discrete" tableValues="${xe(Ae[Ce.alpha])}" />\n        </feComponentTransfer>\n      </filter>\n    </svg>`.replace(/[\r\n]/g,"").replace(/\s+/g," ").trim()}#posterize') `:"");for(const[t,n]of Object.entries(qe)){const r=Ae[t];n.initial!==Number(r.value)&&(e+=`${t}(${r.value}${r.dataset.unit}) `)}return e.trim()||"none"};const Se=new function(){return new Worker("/assets/monochromeworker.a07b995d.js",{type:"module"})};const Oe=new function(){return new Worker("/assets/colorworker.26018272.js",{type:"module"})},ke={};const Me=(e,t,n)=>{e&&(e=e.replace(/\s+width="\d+(?:\.\d+)?"/,"").replace(/\s+height="\d+(?:\.\d+)"/,""),P.dataset.originalViewBox=/viewBox="([^"]+)"/.exec(e)[1],n.width&&(e=e.replace(/viewBox="([^"]+)"/,`viewBox="${n.x} ${n.y} ${n.width} ${n.height}"`)),P.classList.remove("color"),P.classList.remove("monochrome"),P.classList.add(t),P.innerHTML=e,Ye(`${B.t("svgSize")}: ${e.length} ${B.t("bytes")}`,3e3))},je=async(e={})=>{P.innerHTML="",P.classList.remove("color","monochrome"),ke.current&&(clearInterval(ke.current),ke.current=null);let t=P.querySelector("img");t||(t=document.createElement("img"),t.classList.add("spinner"),t.src=URL.createObjectURL(new Blob(['<svg viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle cx="5" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;5;50;50" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" begin="0s" dur="2.2s" values="5;27;49;5" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="27" cy="5" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" from="5" to="5" values="5;50;50;5" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" begin="0s" dur="2.2s" from="27" to="27" values="27;49;5;27" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="49" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;50;5;50" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" from="49" to="49" begin="0s" dur="2.2s" values="49;5;27;49" calcMode="linear" repeatCount="indefinite"/></circle></g></svg>'],{type:"image/svg+xml"})),P.append(t)),t.style.display="block";const n=be?await ye():we();if(y.checked){const t=await(async e=>new Promise((async t=>{const n=new MessageChannel;n.port1.onmessage=({data:e})=>{n.port1.close(),t(e.result)},q.value=0,q.style.visibility="visible";let r="",a="",o="",i=0;ke.current&&(clearInterval(ke.current),ke.current=null),ke.current=setInterval((()=>{const e=`${r}${o}${a}`;e.length!==i&&(P.innerHTML=e,i=e.length)}),500);const s=new MessageChannel;s.port1.onmessage=({data:e})=>{const t=Math.floor(e.processed/e.total*100);if(q.value=t,e.svg){r||(r=e.svg.replace(/(.*?<svg[^>]+>)(.*?)(<\/svg>)/,"$1").replace(/\s+width="\d+(?:\.\d+)?"/,"").replace(/\s+height="\d+(?:\.\d+)"/,""),a=e.svg.replace(/(.*?<svg[^>]+>)(.*?)(<\/svg>)/,"$3"),F.width&&(r=r.replace(/viewBox="([^"]+)"/,`viewBox="${F.x} ${F.y} ${F.width} ${F.height}"`)));const t=e.svg.replace(/(.*?<svg[^>]+>)(.*?)(<\/svg>)/,"$2");o+=t}e.processed===e.total&&(clearInterval(ke.current),ke.current=null,s.port1.close(),q.value=0,q.style.visibility="hidden")};const c={minPathSegments:Number(Ae[Ne.minPathLenght].value),turdsize:Number(Ae[Ne.turdsize].value),alphamax:Number(Ae[Ne.alphamax].value),turnpolicy:Number(Ae[Ne.turnpolicy].value),opttolerance:Number(Ae[Ne.opttolerance].value),opticurve:S.checked?1:0};Oe.postMessage({imageData:e,params:c},[n.port2,s.port2])})))(n);Me(t,"color",e)}else{const t=await(async e=>new Promise((async t=>{const n=new MessageChannel;n.port1.onmessage=({data:e})=>{n.port1.close(),t(e.result)};const r={turdsize:Number(Ae[Ne.turdsize].value),alphamax:Number(Ae[Ne.alphamax].value),turnpolicy:Number(Ae[Ne.turnpolicy].value),opttolerance:Number(Ae[Ne.opttolerance].value),opticurve:S.checked?1:0};Se.postMessage({imageData:e,params:r},[n.port2])})))(n);Me(t,"monochrome",e)}t.style.display="none"};const Te=new function(){return new Worker("/assets/svgoworker.b2e746cf.js",{type:"module"})},$e=async e=>new Promise((t=>{const n=new MessageChannel;n.port1.onmessage=({data:e})=>{n.port1.close(),t(e.result)},Te.postMessage({svg:e,originalViewBox:P.dataset.originalViewBox},[n.port2])}));j.addEventListener("click",(async()=>{try{const t=await e({mimeTypes:["image/*"],description:"Image files"}),n=URL.createObjectURL(t);k.addEventListener("load",(()=>{URL.revokeObjectURL(n)}),{once:!0}),k.src=n}catch(t){console.error(t.name,t.message)}})),document.addEventListener("dragover",(e=>{e.preventDefault()})),document.addEventListener("dragenter",(e=>{e.preventDefault(),R.classList.add("dropenter")})),document.addEventListener("dragleave",(e=>{e.preventDefault(),e.target===document.documentElement&&R.classList.remove("dropenter")})),document.addEventListener("drop",(async e=>{e.preventDefault(),e.stopPropagation(),R.classList.remove("dropenter");const n=e.dataTransfer.items[0];if("file"===n.kind){let e;if(k.addEventListener("load",(()=>{URL.revokeObjectURL(e)}),{once:!0}),t){const t=await n.getAsFileSystemHandle();if("directory"===t.kind)return;{const n=await t.getFile();e=URL.createObjectURL(n),k.src=e}}else{const t=n.getAsFile();e=URL.createObjectURL(t),k.src=e}}})),T.addEventListener("click",(async()=>{try{let e=P.innerHTML,r=null;t&&(r=await showSaveFilePicker({types:[{description:"SVG file",accept:{"image/svg+xml":[".svg"]}}]})),e=await $e(e);const a=new Blob([e],{type:"image/svg+xml"});await n(a,{fileName:"",description:"SVG file"},r)}catch(e){console.error(e.name,e.message)}})),C.addEventListener("click",(async()=>{const e=await navigator.clipboard.read();for(const t of e)for(const e of t.types)if(e.startsWith("image/")){const n=await t.getType(e);if(!n)return;const r=URL.createObjectURL(n);return void(k.src=r)}})),$.addEventListener("click",(async()=>{let e=P.innerHTML;try{navigator.clipboard.write([new ClipboardItem({"text/plain":new Promise((async t=>{e=await $e(e),t(new Blob([e],{type:"text/plain"}))})),"image/svg+xml":new Promise((async t=>{e=await $e(e),t(new Blob([e],{type:"image/svg+xml"}))}))})])}catch{e=await $e(e);const t=new Blob([e],{type:"text/plain"}),n=new Blob([e],{type:"image/svg+xml"});navigator.clipboard.write([new ClipboardItem({[n.type]:n,[t.type]:t})])}}));const Ce={red:"red",green:"green",blue:"blue",alpha:"alpha"},Pe={scale:"scale"},Ne={minPathLenght:"minPathSegments",turdsize:"turdsize",alphamax:"alphamax",turnpolicy:"turnpolicy",opticurve:"opticurve",opttolerance:"opttolerance"},qe={["brightness"]:{unit:"%",initial:100,min:0,max:200},["contrast"]:{unit:"%",initial:100,min:0,max:200},["grayscale"]:{unit:"%",initial:0,min:0,max:100},["hue-rotate"]:{unit:"deg",initial:0,min:0,max:360},["invert"]:{unit:"%",initial:0,min:0,max:100},["opacity"]:{unit:"%",initial:100,min:0,max:100},["saturate"]:{unit:"%",initial:100,min:0,max:200},["sepia"]:{unit:"%",initial:0,min:0,max:100}},Ie={[Ce.red]:{unit:"steps",initial:1,min:1,max:20},[Ce.green]:{unit:"steps",initial:1,min:1,max:20},[Ce.blue]:{unit:"steps",initial:1,min:1,max:20},[Ce.alpha]:{unit:"steps",initial:1,min:1,max:10}},Re={[Pe.scale]:{unit:"%",initial:100,min:1,max:200}},ze={[Ne.turdsize]:{unit:"pixels",initial:2,min:0,max:50},[Ne.alphamax]:{unit:"",initial:1,min:0,max:1.3334},[Ne.turnpolicy]:{unit:"steps",initial:4,min:0,max:6},[Ne.opttolerance]:{unit:"",initial:.2,min:0,max:1},[Ne.minPathLenght]:{unit:"segments",initial:0,min:0,max:30}},_e=[{name:"svgOptions",icon:s},{name:"colorChannels",icon:c},{name:"imageSize",icon:l},{name:"imagePreprocessing",icon:u}],Ue=[Object.entries(ze),Object.entries(Ie),Object.entries(Re),Object.entries(qe)],Ae={},De={},Be={},He=(e,t)=>{const n=B.t(e);return` (${e?`${t}${1===n.length?n:` ${n}`}`:t})`},Ve=e=>{const t=document.createElement("span");return t.classList.add("icon"),t.innerHTML=e,t},We=(e,t,n)=>{const{unit:r,min:a,max:o,initial:i}=t,s=document.createElement("div");s.classList.add("preprocess-input");const c=document.createElement("label");c.textContent=B.t(e)||e,c.for=e;const l=document.createElement("span");De[e]=l,l.textContent=He(r,i);const u=document.createElement("input");Ae[e]=u,u.id=e,u.type="range",u.class=e,r&&(u.dataset.unit=r),""===r&&(u.step=.01),u.min=a,u.max=o,u.value=i,u.addEventListener("input",(()=>{l.textContent=He(r,u.value)})),Object.keys(Ce).includes(e)||Object.keys(Ne).includes(e),u.addEventListener("change",re((async()=>{J(),await je(F)}),250));const d=document.createElement("button");d.type="button",d.textContent=B.t("reset"),d.addEventListener("click",(async()=>{u.value=i,l.textContent=He(r,i),u.dispatchEvent(new Event("change"))})),c.append(l),s.append(c);const m=document.createElement("div");s.append(m),m.append(u),m.append(d),n.append(s)};f.addEventListener("change",(async()=>{const e=!f.checked;Object.keys(Ce).forEach((t=>{Ae[t].disabled=e})),J(),await je(F)})),y.addEventListener("change",(async()=>{J(),await je(F)})),b.addEventListener("change",(async()=>{J(),await je(F)})),x.addEventListener("change",(async()=>{J(),await je(F)})),S.addEventListener("change",(async()=>{Ae.opttolerance.disabled=!S.checked,J(),await je(F)}));const Fe=async()=>{await B.getTranslations(),Ge();const e=window.matchMedia("(max-width: 400px)"),t=()=>{e.matches?z.open=!1:z.open=!0};t(),e.addEventListener("change",t),Ue.forEach(((e,t)=>{const{name:n,icon:r}=_e[t],a=((e,t)=>{const n=document.createElement("details");Be[e]=n;const r=document.createElement("summary"),a=Ve(t);return r.append(a),r.append(document.createTextNode(B.t(e))),n.append(r),n})(n,r);t<2&&(a.open=!0),"colorChannels"===n?Be.colorChannels.append(f.parentNode):"svgOptions"===n?(Be.svgOptions.append(y.parentNode),Be.svgOptions.append(b.parentNode)):"imageSize"===n&&Be.imageSize.append(x.parentNode);for(const[o,i]of e)"opttolerance"===o&&Be.svgOptions.append(S.parentNode),We(o,i,a);h.append(a)})),h.append(M.parentNode),k.addEventListener("load",(()=>{k.width=k.naturalWidth,k.height=k.naturalHeight,setTimeout((async()=>{ne(),await je()}),200)})),k.complete&&k.dispatchEvent(new Event("load"))},Ge=()=>{M.textContent=B.t("resetAll"),v.textContent=B.t("posterizeInputImage"),w.textContent=B.t("colorSVG"),L.textContent=B.t("monochromeSVG"),E.textContent=B.t("considerDPR"),O.textContent=B.t("opticurve"),j.innerHTML="",j.append(Ve(r)),j.append(document.createTextNode(B.t("openImage"))),T.innerHTML="",T.append(Ve(a)),T.append(document.createTextNode(B.t("saveSVG"))),$.innerHTML="",$.append(Ve(o)),$.append(document.createTextNode(B.t("copySVG"))),C.innerHTML="",C.append(Ve(i)),C.append(document.createTextNode(B.t("pasteImage"))),R.dataset.dropText=B.t("dropFileHere"),_.innerHTML="",_.append(Ve(s)),_.append(document.createTextNode(B.t("tweak")))};M.addEventListener("click",(async()=>{const e=(e,t,n)=>{Ae[e].value=n,De[e].textContent=He(t,n)};Ue.forEach((t=>{for(const[n,r]of t)e(n,r.unit,r.initial)})),ne(),await je()})),N.addEventListener("click",(()=>{g.classList.toggle("debug"),q.classList.toggle("debug")}));let Xe=null;const Ye=(e,t=5e3)=>{I.innerHTML=e,I.hidden=!1,Xe&&clearTimeout(Xe),Xe=setTimeout((()=>{I.hidden=!0,I.textContent=""}),t)};document.documentElement.style.setProperty("--100vh",`${window.innerHeight}px`),window.addEventListener("resize",re((()=>{document.documentElement.style.setProperty("--100vh",`${window.innerHeight}px`)}),250)),"launchQueue"in window&&p((()=>import("./filehandling.4654a969.js")),["assets/filehandling.4654a969.js","assets/vendor.e3820820.js"]),(async()=>{Fe();(function(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:a,onRegisterError:o}=e;let i;return"serviceWorker"in navigator&&(i=new d("/sw.js",{scope:"/"}),i.addEventListener("activated",(e=>{e.isUpdate?window.location.reload():null==r||r()})),i.register({immediate:t}).then((e=>{null==a||a(e)})).catch((e=>{null==o||o(e)}))),async(e=!0)=>{}})({onOfflineReady(){Ye(B.t("readyToWorkOffline"))},onNeedRefresh(){location.reload()}})()})();export{k as i};