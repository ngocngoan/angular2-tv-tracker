var __wpo = {"assets":{"main":["/angular2-tv-tracker/912ec66d7572ff821749319396470bde.svg","/angular2-tv-tracker/b06871f281fee6b241d60582ae9369b9.ttf","/angular2-tv-tracker/fee66e712a8a08eef5805a46892932ad.woff","/angular2-tv-tracker/af7ae505a9eed503f8b8e6982036873e.woff2","/angular2-tv-tracker/674f50d287a8c48dc19ba404d20fe713.eot","/angular2-tv-tracker/0-dca3958a3f71bb0702b9.js","/angular2-tv-tracker/1-b5b3f702043ac82aec87.js","/angular2-tv-tracker/2-48a259bb3503362b65e9.js","/angular2-tv-tracker/3-aa081d1d7a3e356104bf.js","/angular2-tv-tracker/4-f4985e166198eba38b65.js","/angular2-tv-tracker/5-c23a23674aee441da377.js","/angular2-tv-tracker/6-79d4121251c28ae18bba.js","/angular2-tv-tracker/7-0c87f19eb64921614fc9.js","/angular2-tv-tracker/runtime~main-1c636d6d7edcfad3cbc4.js","/angular2-tv-tracker/vendors.main-9f6b249b3b1199475e8c.css","/angular2-tv-tracker/vendors.main-9f6b249b3b1199475e8c.js","/angular2-tv-tracker/main-fe3e8dfadb3f60597983.js","/angular2-tv-tracker/"],"additional":[],"optional":[]},"externals":[],"hashesMap":{"98a8aa5cf7d62c2eff5f07ede8d844b874ef06ed":"/angular2-tv-tracker/912ec66d7572ff821749319396470bde.svg","13b1eab65a983c7a73bc7997c479d66943f7c6cb":"/angular2-tv-tracker/b06871f281fee6b241d60582ae9369b9.ttf","28b782240b3e76db824e12c02754a9731a167527":"/angular2-tv-tracker/fee66e712a8a08eef5805a46892932ad.woff","d6f48cba7d076fb6f2fd6ba993a75b9dc1ecbf0c":"/angular2-tv-tracker/af7ae505a9eed503f8b8e6982036873e.woff2","d980c2ce873dc43af460d4d572d441304499f400":"/angular2-tv-tracker/674f50d287a8c48dc19ba404d20fe713.eot","3f63787f63d68444c6325a2150aef3f809ee1a19":"/angular2-tv-tracker/0-dca3958a3f71bb0702b9.js","140641736a1e507adea9d6c997121dfcbc164145":"/angular2-tv-tracker/1-b5b3f702043ac82aec87.js","110e4e5b91d3803618538413df0bc00ab84a310b":"/angular2-tv-tracker/2-48a259bb3503362b65e9.js","492cb253e769dfd32fa0ffb0564683158c850e9f":"/angular2-tv-tracker/3-aa081d1d7a3e356104bf.js","32033f48804c58869222d8e89c528490bad9dae1":"/angular2-tv-tracker/4-f4985e166198eba38b65.js","4ef596471894c5b8bc24a8ef5cbbb1dd87741567":"/angular2-tv-tracker/5-c23a23674aee441da377.js","6d82ecfe048d05b778df1d23213a12d65b1dc4de":"/angular2-tv-tracker/6-79d4121251c28ae18bba.js","d8624f3b90b5f176d76124cd84b489bc8b5ce14e":"/angular2-tv-tracker/7-0c87f19eb64921614fc9.js","b92cdb06464407123e5afddf5ab353873d8b884b":"/angular2-tv-tracker/runtime~main-1c636d6d7edcfad3cbc4.js","8c9026479ca2f42fdd12f56b4b1743dfeddb4df4":"/angular2-tv-tracker/vendors.main-9f6b249b3b1199475e8c.css","6eead7322d78809a8fce13ed24c7763f2b1329ff":"/angular2-tv-tracker/vendors.main-9f6b249b3b1199475e8c.js","15ddd872c1950895f1579bbd4f277eea68ef96d7":"/angular2-tv-tracker/main-fe3e8dfadb3f60597983.js","be279d74680539329bdf29852cf9c95961af8bce":"/angular2-tv-tracker/"},"strategy":"changed","responseStrategy":"cache-first","version":"17/05/2018, 18:26:23","name":"webpack-offline","pluginVersion":"5.0.3","relativePaths":false};

!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/angular2-tv-tracker/",t(t.s=1)}([function(e,n){},function(e,n,t){"use strict";var r,i,o;if(r=ExtendableEvent.prototype.waitUntil,i=FetchEvent.prototype.respondWith,o=new WeakMap,ExtendableEvent.prototype.waitUntil=function(e){var n=this,t=o.get(n);if(!t)return t=[Promise.resolve(e)],o.set(n,t),r.call(n,Promise.resolve().then(function e(){var r=t.length;return Promise.all(t.map(function(e){return e.catch(function(){})})).then(function(){return t.length!=r?e():(o.delete(n),Promise.all(t))})}));t.push(Promise.resolve(e))},FetchEvent.prototype.respondWith=function(e){return this.waitUntil(e),i.call(this,e)},void 0===a)var a=!1;function u(e,n){return caches.match(e,{cacheName:n}).then(function(t){return c(t)?t:s(t).then(function(t){return caches.open(n).then(function(n){return n.put(e,t)}).then(function(){return t})})}).catch(function(){})}function c(e){return!e||!e.redirected||!e.ok||"opaqueredirect"===e.type}function s(e){return c(e)?Promise.resolve(e):("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status})})}function f(e,n){n.forEach(function(e){})}!function(e,n){var t=n.cacheMaps,r=n.navigationPreload,i=e.strategy,o=e.responseStrategy,a=e.assets,c=e.hashesMap,l=e.externals,h=e.prefetchRequest||{credentials:"same-origin",mode:"cors"},d=e.name,p=e.version,v=d+":"+p,m=d+"$preload",g="__offline_webpack__data";Object.keys(a).forEach(function(e){a[e]=a[e].map(function(e){var n=new URL(e,location);return n.hash="",-1===l.indexOf(e)&&(n.search=""),n.toString()})}),c=Object.keys(c).reduce(function(e,n){var t=new URL(c[n],location);return t.search="",t.hash="",e[n]=t.toString(),e},{}),l=l.map(function(e){var n=new URL(e,location);return n.hash="",n.toString()});var w=[].concat(a.main,a.additional,a.optional);function P(n){var t=a[n];return caches.open(v).then(function(r){return U(r,t,{bust:e.version,request:h,failAll:"main"===n})}).then(function(){f(0,t)}).catch(function(e){throw e})}function x(n){return caches.keys().then(function(e){for(var n=e.length,t=void 0;n--&&0!==(t=e[n]).indexOf(d););if(t){var r=void 0;return caches.open(t).then(function(e){return r=e,e.match(new URL(g,location).toString())}).then(function(e){if(e)return Promise.all([r,r.keys(),e.json()])})}}).then(function(t){if(!t)return P(n);var r=t[0],i=t[1],o=t[2],u=o.hashmap,s=o.version;if(!o.hashmap||s===e.version)return P(n);var l=Object.keys(u).map(function(e){return u[e]}),d=i.map(function(e){var n=new URL(e.url);return n.search="",n.hash="",n.toString()}),p=a[n],m=[],g=p.filter(function(e){return-1===d.indexOf(e)||-1===l.indexOf(e)});Object.keys(c).forEach(function(e){var n=c[e];if(-1!==p.indexOf(n)&&-1===g.indexOf(n)&&-1===m.indexOf(n)){var t=u[e];t&&-1!==d.indexOf(t)?m.push([t,n]):g.push(n)}}),f(0,g),f(0,m);var w=Promise.all(m.map(function(e){return r.match(e[0]).then(function(n){return[e[1],n]})}));return caches.open(v).then(function(t){var r=w.then(function(e){return Promise.all(e.map(function(e){return t.put(e[0],e[1])}))});return Promise.all([r,U(t,g,{bust:e.version,request:h,failAll:"main"===n,deleteFirst:"main"!==n})])})})}function y(){return caches.keys().then(function(e){var n=e.map(function(e){if(0===e.indexOf(d)&&0!==e.indexOf(v))return caches.delete(e)});return Promise.all(n)})}function O(){return caches.open(v).then(function(n){var t=new Response(JSON.stringify({version:e.version,hashmap:c}));return n.put(new URL(g,location).toString(),t)})}self.addEventListener("install",function(e){var n=void 0;n="changed"===i?x("main"):P("main"),e.waitUntil(n)}),self.addEventListener("activate",function(e){var n=function(){if(!a.additional.length)return Promise.resolve();return("changed"===i?x("additional"):P("additional")).catch(function(e){})}();n=(n=(n=n.then(O)).then(y)).then(function(){if(self.clients&&self.clients.claim)return self.clients.claim()}),r&&self.registration.navigationPreload&&(n=Promise.all([n,self.registration.navigationPreload.enable()])),e.waitUntil(n)}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n=new URL(e.request.url);n.hash="";var i=n.toString();-1===l.indexOf(i)&&(n.search="",i=n.toString());var a=-1!==w.indexOf(i),c=i;if(!a){var s=function(e){var n=e.url,r=new URL(n),i=void 0;i=function(e){return"navigate"===e.mode||e.headers.get("Upgrade-Insecure-Requests")||-1!==(e.headers.get("Accept")||"").indexOf("text/html")}(e)?"navigate":r.origin===location.origin?"same-origin":"cross-origin";for(var o=0;o<t.length;o++){var a=t[o];if(a&&(!a.requestTypes||-1!==a.requestTypes.indexOf(i))){var u=void 0;if((u="function"==typeof a.match?a.match(r,e):n.replace(a.match,a.to))&&u!==n)return u}}}(e.request);s&&(c=s,a=!0)}if(a){var f=void 0;f="network-first"===o?function(e,n,t){return R(e).then(function(e){if(e.ok)return e;throw e}).catch(function(e){return u(t,v).then(function(n){if(n)return n;if(e instanceof Response)return e;throw e})})}(e,0,c):function(e,n,t){return function(e){if(r&&"function"==typeof r.map&&e.preloadResponse&&"navigate"===e.request.mode){var n=r.map(new URL(e.request.url),e.request);n&&function(e,n){var t=new URL(e,location),r=n.preloadResponse;q.set(r,{url:t,response:r});var i=function(){return q.has(r)},o=r.then(function(e){if(e&&i()){var n=e.clone();return caches.open(m).then(function(e){if(i())return e.put(t,n).then(function(){if(!i())return caches.open(m).then(function(e){return e.delete(t)})})})}});n.waitUntil(o)}(n,e)}}(e),u(t,v).then(function(r){return r||fetch(e.request).then(function(r){return r.ok?(t===n&&(i=r.clone(),o=caches.open(v).then(function(e){return e.put(n,i)}).then(function(){}),e.waitUntil(o)),r):r;var i,o})})}(e,i,c),e.respondWith(f)}else{if("navigate"===e.request.mode&&!0===r)return void e.respondWith(R(e));if(r){var h=function(e){var n=new URL(e.request.url);if(self.registration.navigationPreload&&r&&r.test&&r.test(n,e.request)){var t=function(e){if(q){var n=void 0,t=void 0;return q.forEach(function(r,i){r.url.href===e.href&&(n=r.response,t=i)}),n?(q.delete(t),n):void 0}}(n),i=e.request;return t?(e.waitUntil(caches.open(m).then(function(e){return e.delete(i)})),t):u(i,m).then(function(n){return n&&e.waitUntil(caches.open(m).then(function(e){return e.delete(i)})),n||fetch(e.request)})}}(e);if(h)return void e.respondWith(h)}}}}),self.addEventListener("message",function(e){var n=e.data;if(n)switch(n.action){case"skipWaiting":self.skipWaiting&&self.skipWaiting()}});var q=new Map;function U(e,n,t){var r=t.bust,i=!1!==t.failAll,o=!0===t.deleteFirst,a=t.request||{credentials:"omit",mode:"cors"},u=Promise.resolve();return o&&(u=Promise.all(n.map(function(n){return e.delete(n).catch(function(){})}))),Promise.all(n.map(function(e){var n,t,i;return r&&(t=r,i=-1!==(n=e).indexOf("?"),e=n+(i?"&":"?")+"__uncache="+encodeURIComponent(t)),fetch(e,a).then(s).then(function(e){return e.ok?{response:e}:{error:!0}},function(){return{error:!0}})})).then(function(t){return i&&t.some(function(e){return e.error})?Promise.reject(new Error("Wrong response status")):(i||(t=t.filter(function(e){return!e.error})),u.then(function(){var r=t.map(function(t,r){var i=t.response;return e.put(n[r],i)});return Promise.all(r)}))})}function R(e){return e.preloadResponse&&!0===r?e.preloadResponse.then(function(n){return n||fetch(e.request)}):fetch(e.request)}}(__wpo,{loaders:{},cacheMaps:[],navigationPreload:!1}),e.exports=t(0)}]);