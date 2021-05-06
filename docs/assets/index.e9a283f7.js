import{f as e,e as t,a as n,o as a,s as r,c as o,p as i,t as s,b as c,d as l,g as d,v as u}from"./vendor.79189a84.js";const m=document.querySelector("canvas"),p=document.querySelector(".fieldsets"),g=document.querySelector(".posterize"),h=document.querySelector("[for=posterize]"),v=document.querySelector(".color"),f=document.querySelector("[for=color]"),y=document.querySelector(".monochrome"),w=document.querySelector("[for=monochrome]"),L=document.querySelector("img"),b=document.querySelector(".reset-all"),x=document.querySelector(".open"),E=document.querySelector(".save"),M=document.querySelector(".copy"),S=document.querySelector(".paste"),k=document.querySelector("output"),C=document.querySelector(".debug"),T=document.querySelector("progress"),N=document.querySelector(".toast"),j=document.documentElement,O=(e,t)=>{let n;return function(...a){clearTimeout(n),n=setTimeout((()=>{clearTimeout(n),e(...a)}),t)}};document.documentElement.style.setProperty("--100vh",`${window.innerHeight}px`),window.addEventListener("resize",O((()=>{document.documentElement.style.setProperty("--100vh",`${window.innerHeight}px`)}),250));const $=m.getContext("2d",{desynchronized:!0});$.imageSmoothingEnabled=!1;const q=()=>{const e=2*Number(te[G.scale].value)/100;return{width:Math.ceil(L.naturalWidth*e),height:Math.ceil(L.naturalHeight*e)}},R=()=>{let e=""+(g.checked?`url('${(()=>{const e=e=>{const t=Number(e.value),n=[];for(let a=0;a<=t;a++)n[a]=(1/t*a).toFixed(1);return n.join(",")};return`data:image/svg+xml;utf8,<svg\n      xmlns="http://www.w3.org/2000/svg"\n      xmlns:xlink="http://www.w3.org/1999/xlink"\n    >\n      <filter id="posterize">\n        <feComponentTransfer>\n          <feFuncR type="discrete" tableValues="${e(te[B.red])}" />\n          <feFuncG type="discrete" tableValues="${e(te[B.green])}" />\n          <feFuncB type="discrete" tableValues="${e(te[B.blue])}" />\n          <feFuncA type="discrete" tableValues="${e(te[B.alpha])}" />\n        </feComponentTransfer>\n      </filter>\n    </svg>`.replace(/[\r\n]/g,"").replace(/\s+/g," ").trim()})()}#posterize') `:"");for(const[t,n]of Object.entries(Y)){const a=te[t];n.initial!==Number(a.value)&&(e+=`${t}(${a.value}${a.dataset.unit}) `)}return e.trim()||"none"};const U=new function(){return new Worker("/assets/monochromeworker.315b8f93.js",{type:"module"})};const H=new function(){return new Worker("/assets/colorworker.a03fa2f5.js",{type:"module"})};const z=(e,t)=>{e=e.replace(/\s+width="\d+(?:\.\d+)?"/,"").replace(/\s+height="\d+(?:\.\d+)"/,""),k.classList.remove("color"),k.classList.remove("monochrome"),k.classList.add(t),k.innerHTML=e},A=async()=>{k.innerHTML="";let e=k.querySelector("img");e||(e=document.createElement("img"),e.classList.add("spinner"),e.src=URL.createObjectURL(new Blob(['<svg viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle cx="5" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;5;50;50" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" begin="0s" dur="2.2s" values="5;27;49;5" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="27" cy="5" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" from="5" to="5" values="5;50;50;5" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" begin="0s" dur="2.2s" from="27" to="27" values="27;49;5;27" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="49" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;50;5;50" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" from="49" to="49" begin="0s" dur="2.2s" values="49;5;27;49" calcMode="linear" repeatCount="indefinite"/></circle></g></svg>'],{type:"image/svg+xml"})),k.append(e)),e.style.display="block";const t=(()=>{const{width:e,height:t}=q();return m.width=e,m.height=t,$.clearRect(0,0,e,t),$.filter=R(),$.drawImage(L,0,0,L.naturalWidth,L.naturalHeight,0,0,e,t),$.getImageData(0,0,e,t)})();if(v.checked){const e=await(async e=>new Promise((async t=>{const n=new MessageChannel;n.port1.onmessage=({data:e})=>{n.port1.close(),t(e.result)},T.value=0;const a=new MessageChannel;a.port1.onmessage=({data:e})=>{const t=Math.floor(e.processed/e.total*100);T.value=t,e.processed===e.total&&a.port1.close()};const r={turdsize:Number(te[J.turdsize].value)};H.postMessage({imageData:e,config:r},[n.port2,a.port2])})))(t);z(e,"color")}else{const e=await(async e=>new Promise((async t=>{const n=new MessageChannel;n.port1.onmessage=({data:e})=>{n.port1.close(),t(e.result)};const a={turdsize:Number(te[J.turdsize].value)};U.postMessage({imageData:e,config:a},[n.port2])})))(t);z(e,"monochrome")}e.style.display="none"};let I;const P={},D=function(e,t){if(!t)return e();if(void 0===I){const e=document.createElement("link").relList;I=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in P)return;P[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":I,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))};const V=["en","de"];const W=new class{constructor(){this.currentLanguageAndLocale=this.detectLanguageAndLocal(),this.defaultLanguage=V[0],this.translations=null}detectLanguageAndLocal(){var e;const t=localStorage.getItem("language");if(t)return JSON.parse(t);let[n,a=null]=null==(e=navigator.language)?void 0:e.split("-");a&&(a=a.toUpperCase()),n&&V.includes(n)||(n=V[0]);const r={language:n,locale:a};return localStorage.setItem("language",JSON.stringify(r)),r}async getTranslations(){const{language:e,locale:t}=this.currentLanguageAndLocale,n=(await function(e){switch(e){case"../i18n/de.js":return D((()=>import("./de.58feef74.js")),void 0);case"../i18n/en-US.js":return D((()=>import("./en-US.98e543f1.js")),void 0);default:return Promise.reject(new Error("Unknown variable dynamic import: "+e))}}(`../i18n/${e}${t?`-${t}`:""}.js`)).default;this.translations=n}t(e){return this.translations[e]}};const _=new function(){return new Worker("/assets/svgoworker.1258d8a5.js",{type:"module"})},F=async e=>new Promise((t=>{const n=new MessageChannel;n.port1.onmessage=({data:e})=>{n.port1.close(),t(e.result)},_.postMessage({svg:e},[n.port2])}));x.addEventListener("click",(async()=>{try{const t=await e({mimeTypes:["image/*"],description:"Image files"}),n=URL.createObjectURL(t);L.addEventListener("load",(()=>{URL.revokeObjectURL(n)}),{once:!0}),L.src=n}catch(t){console.error(t.name,t.message)}})),document.addEventListener("dragover",(e=>{e.preventDefault()})),document.addEventListener("dragenter",(e=>{e.preventDefault(),j.classList.add("dropenter")})),document.addEventListener("dragleave",(e=>{e.preventDefault(),e.target===document.documentElement&&j.classList.remove("dropenter")})),document.addEventListener("drop",(async e=>{e.preventDefault(),e.stopPropagation(),j.classList.remove("dropenter");const n=e.dataTransfer.items[0];if("file"===n.kind){let e;if(L.addEventListener("load",(()=>{URL.revokeObjectURL(e)}),{once:!0}),t){const t=await n.getAsFileSystemHandle();if("directory"===t.kind)return;{const n=await t.getFile();e=URL.createObjectURL(n),L.src=e}}else{const t=n.getAsFile();e=URL.createObjectURL(t),L.src=e}}})),E.addEventListener("click",(async()=>{try{let e=k.innerHTML;e=await F(e);const t=new Blob([e],{type:"image/svg+xml"});await n(t,{fileName:"",description:"SVG file"})}catch(e){console.error(e.name,e.message)}})),S.addEventListener("click",(async()=>{const e=await navigator.clipboard.read();for(const t of e)for(const e of t.types)if(e.startsWith("image/")){const n=await t.getType(e);if(!n)return;const a=URL.createObjectURL(n);return void(L.src=a)}})),M.addEventListener("click",(async()=>{let e=k.innerHTML;e=await F(e);const t=new Blob([e],{type:"text/plain"});navigator.clipboard.write([new ClipboardItem({[t.type]:t})])}));const B={red:"red",green:"green",blue:"blue",alpha:"alpha"},G={scale:"scale"},J={turdsize:"turdsize"},Y={["brightness"]:{unit:"%",initial:100,min:0,max:200},["contrast"]:{unit:"%",initial:100,min:0,max:200},["grayscale"]:{unit:"%",initial:0,min:0,max:100},["hue-rotate"]:{unit:"deg",initial:0,min:0,max:360},["invert"]:{unit:"%",initial:0,min:0,max:100},["opacity"]:{unit:"%",initial:100,min:0,max:100},["saturate"]:{unit:"%",initial:100,min:0,max:200},["sepia"]:{unit:"%",initial:0,min:0,max:100}},K={[B.red]:{unit:"steps",initial:10,min:1,max:20},[B.green]:{unit:"steps",initial:10,min:1,max:20},[B.blue]:{unit:"steps",initial:10,min:1,max:20},[B.alpha]:{unit:"steps",initial:1,min:1,max:10}},Q={[G.scale]:{unit:"%",initial:100,min:1,max:200}},X={[J.turdsize]:{unit:"pixels",initial:2,min:1,max:50}},Z=[{name:"svgOptions",icon:s},{name:"colorChannels",icon:c},{name:"imageSize",icon:l},{name:"imagePreprocessing",icon:d}],ee=[Object.entries(X),Object.entries(K),Object.entries(Q),Object.entries(Y)],te={},ne={},ae={};let re=0,oe=0,ie=null,se=1,ce={};const le=(e,t)=>{const n=W.t(e);return` (${e?`${t}${1===n.length?n:` ${n}`}`:t})`},de=e=>{const t=document.createElement("span");return t.classList.add("icon"),t.innerHTML=e,t},ue=(e,t,n)=>{const{unit:a,min:r,max:o,initial:i}=t,s=document.createElement("div");s.classList.add("preprocess-input");const c=document.createElement("label");c.textContent=W.t(e)||e,c.for=e;const l=document.createElement("span");ne[e]=l,l.textContent=le(a,i);const d=document.createElement("input");te[e]=d,d.id=e,d.type="range",d.class=e,d.min=r,d.max=o,d.value=i,a&&(d.dataset.unit=a),d.addEventListener("input",(()=>{l.textContent=le(a,d.value)})),Object.keys(B).includes(e)||Object.keys(J).includes(e),d.addEventListener("change",O((async()=>{me(),await A()}),250));const u=document.createElement("button");u.type="button",u.textContent=W.t("reset"),u.addEventListener("click",(async()=>{d.value=i,l.textContent=le(a,i),d.dispatchEvent(new Event("change"))})),c.append(l),c.append(d),s.append(c),s.append(u),n.append(s)};g.addEventListener("change",(async()=>{const e=!g.checked;Object.keys(B).forEach((t=>{te[t].disabled=e})),me(),await A()}));const me=()=>{re=0,oe=0,ie=null,se=1,ce={}};v.addEventListener("change",(async()=>{me(),await A()})),y.addEventListener("change",(async()=>{me(),await A()}));const pe=async()=>{await W.getTranslations(),ge(),ee.forEach(((e,t)=>{const{name:n,icon:a}=Z[t],r=((e,t)=>{const n=document.createElement("fieldset");ae[e]=n;const a=document.createElement("legend"),r=de(t);return a.append(r),a.append(document.createTextNode(W.t(e))),n.append(a),n})(n,a);"colorChannels"===n?ae.colorChannels.append(g.parentNode):"svgOptions"===n&&(ae.svgOptions.append(v.parentNode),ae.svgOptions.append(y.parentNode));for(const[o,i]of e)ue(o,i,r);p.append(r)})),p.append(b.parentNode),L.addEventListener("load",(()=>{L.width=L.naturalWidth,L.height=L.naturalHeight,setTimeout((async()=>{me(),await A()}),200)})),L.complete&&L.dispatchEvent(new Event("load"))},ge=()=>{b.textContent=W.t("resetAll"),h.textContent=W.t("posterizeInputImage"),f.textContent=W.t("colorSVG"),w.textContent=W.t("monochromeSVG"),x.innerHTML="",x.append(de(a)),x.append(document.createTextNode(W.t("openImage"))),E.innerHTML="",E.append(de(r)),E.append(document.createTextNode(W.t("saveSVG"))),M.innerHTML="",M.append(de(o)),M.append(document.createTextNode(W.t("copySVG"))),S.innerHTML="",S.append(de(i)),S.append(document.createTextNode(W.t("pasteImage"))),j.dataset.dropText=W.t("dropFileHere")};b.addEventListener("click",(async()=>{const e=(e,t,n)=>{te[e].value=n,ne[e].textContent=le(t,n)};ee.forEach((t=>{for(const[n,a]of t)e(n,a.unit,a.initial)})),me(),await A()}));const he=e=>(e.preventDefault(),!1),ve=e=>{const t=Math.floor(e.x-re),n=Math.floor(e.y-oe);ie.setAttribute("viewBox",`${-t} ${-n} ${ce.width} ${ce.height}`)};k.addEventListener("pointerdown",(e=>{e.buttons>1||(ie=ie||k.querySelector("svg"),ie&&(ie.addEventListener("dragstart",he),fe(),re=Math.floor(e.x+ce.x),oe=Math.floor(e.y+ce.y),k.addEventListener("pointermove",ve),k.style.cursor="grabbing"))})),k.addEventListener("pointerup",(e=>{ie&&(k.removeEventListener("pointermove",ve),ie.removeEventListener("dragstart",he),fe(),k.style.cursor="grab")}));const fe=()=>{const e=ie.getAttribute("viewBox"),[t,n,a,r]=e.split(" ");ce.x=Number(t),ce.y=Number(n),ce.width=Number(a),ce.height=Number(r)};k.addEventListener("wheel",(e=>{if(e.preventDefault(),ie=ie||k.querySelector("svg"),!ie)return;void 0===ce.width&&fe(),se+=-.005*e.deltaY,se=Math.min(Math.max(.1,se),10);const t=Math.ceil(ce.width*se),n=Math.ceil(ce.height*se);if(t<=0||n<=0)return;const a=Math.floor(ce.x+(ce.width-t)/2),r=Math.floor(ce.y+(ce.height-n)/2);ie.setAttribute("viewBox",`${a} ${r} ${t} ${n}`)})),C.addEventListener("click",(()=>{m.classList.toggle("debug"),T.classList.toggle("debug")}));(async()=>{pe(),function(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:a}=e;let r;"serviceWorker"in navigator&&(r=new u("/sw.js",{scope:"/"}),r.addEventListener("activated",(e=>{e.isUpdate?window.location.reload():null==a||a()})),r.register({immediate:t}).then((e=>e)))}({onOfflineReady(){var e;e=W.t("readyToWorkOffline"),N.innerHTML=e,N.hidden=!1,setTimeout((()=>{N.hidden=!0,N.textContent=""}),5e3)},onNeedRefresh(){location.reload()}})})();
