(function(n,e){typeof exports=="object"&&typeof module!="undefined"?e(exports):typeof define=="function"&&define.amd?define(["exports"],e):(n=typeof globalThis!="undefined"?globalThis:n||self,e(n["artalk-plugin-lightbox"]=n["artalk-plugin-lightbox"]||{}))})(this,function(n){"use strict";var p=Object.defineProperty;var L=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var S=(n,e,t)=>e in n?p(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,A=(n,e)=>{for(var t in e||(e={}))_.call(e,t)&&S(n,t,e[t]);if(L)for(var t of L(e))E.call(e,t)&&S(n,t,e[t]);return n};var k=(n,e,t)=>new Promise((b,u)=>{var s=l=>{try{f(t.next(l))}catch(r){u(r)}},h=l=>{try{f(t.throw(l))}catch(r){u(r)}},f=l=>l.done?b(l.value):Promise.resolve(l.value).then(s,h);f((t=t.apply(n,e)).next())});var l;const e={lightGallery:"lightGallery",lightBox:"lightbox",fancyBox:"Fancybox",photoSwipe:"PhotoSwipeLightbox"};let t;function b(r){return k(this,null,function*(){var i,o;if(t)return t;t={};for(const a in e)try{if(typeof window!="undefined"&&window[e[a]]?t[a]=window[e[a]]:t[a]=yield(o=(i=r==null?void 0:r[a])==null?void 0:i.lib)==null?void 0:o.call(i),t[a].default&&(t[a]=t[a].default),t[a])return t}catch(y){}return t})}const u="atk-lightbox-loaded",s="atk-lightbox-img",h=`.${s}`,f=(r,i)=>{r.on("list-loaded",()=>k(this,null,function*(){const o=yield b(i),a=[],y=new Set;if(r.getCommentNodes().forEach(d=>{const g=d.getRender().$content;g.querySelectorAll(`img:not([atk-emoticon]):not([${u}])`).forEach(c=>{c.setAttribute(u,"");const w=document.createElement("a");if(w.setAttribute("class",s),w.setAttribute("href",c.src),w.setAttribute("data-src",c.src),o.photoSwipe){const x=()=>{w.setAttribute("data-pswp-width",c.naturalWidth.toString()),w.setAttribute("data-pswp-height",c.naturalHeight.toString()),c.removeEventListener("load",x)};x(),c.addEventListener("load",x)}w.append(c.cloneNode()),c.replaceWith(w),a.push(w)}),y.add(g)}),o.lightGallery&&y.forEach(d=>{o.lightGallery(d,A({selector:h},(i==null?void 0:i.config)||window.ATK_LIGHTBOX_CONF||{}))}),o.lightBox&&a.forEach(d=>{d.setAttribute("data-title",d.querySelector("img").alt),d.setAttribute("rel","lightbox"),d.onclick=g=>{g.preventDefault(),o.lightBox.start(window.$(d))}}),o.photoSwipe&&new o.photoSwipe(A({gallery:".atk-content",showHideAnimationType:"fade",thumbSelector:`${h}`,children:`${h}`,pswpModule:i==null?void 0:i.photoSwipe.pswpModule},(i==null?void 0:i.config)||window.ATK_LIGHTBOX_CONF||{})).init(),o.fancyBox){if(!window.$)throw new Error("Fancybox requires jQuery which is available in window global scope");window.$.fancybox||o.fancyBox(window.$),window.$(`.artalk .atk-list ${h}`,(i==null?void 0:i.config)||window.ATK_LIGHTBOX_CONF).fancybox()}}))};typeof window!="undefined"&&(!window.ArtalkPlugins&&(window.ArtalkPlugins={}),window.ArtalkPlugins.ArtalkLightboxPlugin=f,(l=window.Artalk)==null||l.use(f)),n.ArtalkLightboxPlugin=f,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});
