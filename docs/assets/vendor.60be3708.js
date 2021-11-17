// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const b=(()=>{if(typeof self=="undefined")return!1;if("top"in self&&self!==top)try{top.location}catch{return!1}else if("showOpenFilePicker"in self)return"showOpenFilePicker";return!1})();// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const I=b?import("./file-open.73377f9f.js"):import("./file-open.38a61ae8.js");async function O(...t){return(await I).default(...t)}// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
b?import("./directory-open.f7d7c076.js"):import("./directory-open.4fa36e51.js");// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const k=b?import("./file-save.1c3d3b86.js"):import("./file-save.36107878.js");async function R(...t){return(await k).default(...t)}function L(){var t=!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent);if(!t||!indexedDB.databases)return Promise.resolve();var e;return new Promise(function(n){var i=function(){return indexedDB.databases().finally(n)};e=setInterval(i,100),i()}).finally(function(){return clearInterval(e)})}function p(t){return new Promise((e,n)=>{t.oncomplete=t.onsuccess=()=>e(t.result),t.onabort=t.onerror=()=>n(t.error)})}function M(t,e){const n=L().then(()=>{const i=indexedDB.open(t);return i.onupgradeneeded=()=>i.result.createObjectStore(e),p(i)});return(i,v)=>n.then(l=>v(l.transaction(e,i).objectStore(e)))}let S;function x(){return S||(S=M("keyval-store","keyval")),S}function U(t,e=x()){return e("readonly",n=>p(n.get(t)))}function C(t,e,n=x()){return n("readwrite",i=>(i.put(e,t),p(i.transaction)))}function D(t,e=x()){return e("readwrite",n=>(n.delete(t),p(n.transaction)))}var T='<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M14 28c-3.31 0-6 2.69-6 6 0 2.62-2.31 4-4 4 1.84 2.44 4.99 4 8 4 4.42 0 8-3.58 8-8 0-3.31-2.69-6-6-6zM41.41 9.26l-2.67-2.67c-.78-.78-2.05-.78-2.83 0L18 24.5l5.5 5.5 17.91-17.91c.79-.79.79-2.05 0-2.83z"/></svg>',$='<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M42 12H6c-2.21 0-4 1.79-4 4v16c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4zm0 20H6V16h4v8h4v-8h4v8h4v-8h4v8h4v-8h4v8h4v-8h4v16z"/></svg>',F='<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M31.93 20.57l-5.5 7.08-3.93-4.72L17 30h22l-7.07-9.43zM6 10H2v32c0 2.21 1.79 4 4 4h32v-4H6V10zm36-8H14c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4zm0 32H14V6h28v28z"/></svg>',G='<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M6 34v4h12v-4H6zm0-24v4h20v-4H6zm20 32v-4h16v-4H26v-4h-4v12h4zM14 18v4H6v4h8v4h4V18h-4zm28 8v-4H22v4h20zm-12-8h4v-4h8v-4h-8V6h-4v12z"/></svg>',K='<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M40 12H24l-4-4H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4zm0 24H8V16h32v20z"/></svg>',J='<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M34 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V14l-8-8zM24 38c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm6-20H10v-8h20v8z"/></svg>',Q='<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M32 2H8C5.79 2 4 3.79 4 6v28h4V6h24V2zm6 8H16c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h22c2.21 0 4-1.79 4-4V14c0-2.21-1.79-4-4-4zm0 32H16V14h22v28z"/></svg>',X='<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M38 4h-8.37c-.82-2.32-3.02-4-5.63-4s-4.81 1.68-5.63 4H10C7.79 4 6 5.79 6 8v32c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM24 4c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2zm14 36H10V8h4v6h20V8h4v32z"/></svg>';try{self["workbox:window:6.2.4"]&&_()}catch{}function j(t,e){return new Promise(function(n){var i=new MessageChannel;i.port1.onmessage=function(v){n(v.data)},t.postMessage(e,[i.port2])})}function V(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function E(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function B(t,e){var n;if(typeof Symbol=="undefined"||t[Symbol.iterator]==null){if(Array.isArray(t)||(n=function(v,l){if(v){if(typeof v=="string")return E(v,l);var f=Object.prototype.toString.call(v).slice(8,-1);return f==="Object"&&v.constructor&&(f=v.constructor.name),f==="Map"||f==="Set"?Array.from(v):f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f)?E(v,l):void 0}}(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(n=t[Symbol.iterator]()).next.bind(n)}try{self["workbox:core:6.2.4"]&&_()}catch{}var z=function(){var t=this;this.promise=new Promise(function(e,n){t.resolve=e,t.reject=n})};function P(t,e){var n=location.href;return new URL(t,n).href===new URL(e,n).href}var g=function(t,e){this.type=t,Object.assign(this,e)};function w(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function W(){}var A={type:"SKIP_WAITING"};function H(t,e){if(!e)return t&&t.then?t.then(W):Promise.resolve()}var Y=function(t){var e,n;function i(u,c){var r,o;return c===void 0&&(c={}),(r=t.call(this)||this).nn={},r.tn=0,r.rn=new z,r.en=new z,r.on=new z,r.un=0,r.an=new Set,r.cn=function(){var s=r.fn,a=s.installing;r.tn>0||!P(a.scriptURL,r.sn.toString())||performance.now()>r.un+6e4?(r.vn=a,s.removeEventListener("updatefound",r.cn)):(r.hn=a,r.an.add(a),r.rn.resolve(a)),++r.tn,a.addEventListener("statechange",r.ln)},r.ln=function(s){var a=r.fn,h=s.target,d=h.state,m=h===r.vn,y={sw:h,isExternal:m,originalEvent:s};!m&&r.mn&&(y.isUpdate=!0),r.dispatchEvent(new g(d,y)),d==="installed"?r.wn=self.setTimeout(function(){d==="installed"&&a.waiting===h&&r.dispatchEvent(new g("waiting",y))},200):d==="activating"&&(clearTimeout(r.wn),m||r.en.resolve(h))},r.dn=function(s){var a=r.hn,h=a!==navigator.serviceWorker.controller;r.dispatchEvent(new g("controlling",{isExternal:h,originalEvent:s,sw:a,isUpdate:r.mn})),h||r.on.resolve(a)},r.gn=(o=function(s){var a=s.data,h=s.ports,d=s.source;return w(r.getSW(),function(){r.an.has(d)&&r.dispatchEvent(new g("message",{data:a,originalEvent:s,ports:h,sw:d}))})},function(){for(var s=[],a=0;a<arguments.length;a++)s[a]=arguments[a];try{return Promise.resolve(o.apply(this,s))}catch(h){return Promise.reject(h)}}),r.sn=u,r.nn=c,navigator.serviceWorker.addEventListener("message",r.gn),r}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var v,l,f=i.prototype;return f.register=function(u){var c=(u===void 0?{}:u).immediate,r=c!==void 0&&c;try{var o=this;return function(s,a){var h=s();return h&&h.then?h.then(a):a(h)}(function(){if(!r&&document.readyState!=="complete")return H(new Promise(function(s){return window.addEventListener("load",s)}))},function(){return o.mn=Boolean(navigator.serviceWorker.controller),o.yn=o.pn(),w(o.bn(),function(s){o.fn=s,o.yn&&(o.hn=o.yn,o.en.resolve(o.yn),o.on.resolve(o.yn),o.yn.addEventListener("statechange",o.ln,{once:!0}));var a=o.fn.waiting;return a&&P(a.scriptURL,o.sn.toString())&&(o.hn=a,Promise.resolve().then(function(){o.dispatchEvent(new g("waiting",{sw:a,wasWaitingBeforeRegister:!0}))}).then(function(){})),o.hn&&(o.rn.resolve(o.hn),o.an.add(o.hn)),o.fn.addEventListener("updatefound",o.cn),navigator.serviceWorker.addEventListener("controllerchange",o.dn),o.fn})})}catch(s){return Promise.reject(s)}},f.update=function(){try{return this.fn?H(this.fn.update()):void 0}catch(u){return Promise.reject(u)}},f.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},f.messageSW=function(u){try{return w(this.getSW(),function(c){return j(c,u)})}catch(c){return Promise.reject(c)}},f.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&j(this.fn.waiting,A)},f.pn=function(){var u=navigator.serviceWorker.controller;return u&&P(u.scriptURL,this.sn.toString())?u:void 0},f.bn=function(){try{var u=this;return function(c,r){try{var o=c()}catch(s){return r(s)}return o&&o.then?o.then(void 0,r):o}(function(){return w(navigator.serviceWorker.register(u.sn,u.nn),function(c){return u.un=performance.now(),c})},function(c){throw c})}catch(c){return Promise.reject(c)}},v=i,(l=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&V(v.prototype,l),i}(function(){function t(){this.Pn=new Map}var e=t.prototype;return e.addEventListener=function(n,i){this.Sn(n).add(i)},e.removeEventListener=function(n,i){this.Sn(n).delete(i)},e.dispatchEvent=function(n){n.target=this;for(var i,v=B(this.Sn(n.type));!(i=v()).done;)(0,i.value)(n)},e.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},t}());export{R as a,J as b,Q as c,D as d,b as e,O as f,U as g,G as h,T as i,$ as j,F as k,K as o,X as p,C as s,Y as v};