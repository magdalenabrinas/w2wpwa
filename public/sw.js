if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0e762574-abccec35c2480693.js",revision:"ye2Acd3S0ldUROM2XYjpa"},{url:"/_next/static/chunks/190-f5827f4809482955.js",revision:"ye2Acd3S0ldUROM2XYjpa"},{url:"/_next/static/chunks/236-4b8e0956086881bb.js",revision:"ye2Acd3S0ldUROM2XYjpa"},{url:"/_next/static/chunks/53c13509-81b7a6f1e19788d2.js",revision:"ye2Acd3S0ldUROM2XYjpa"},{url:"/_next/static/chunks/597-ecbf9c7e11c8aa87.js",revision:"ye2Acd3S0ldUROM2XYjpa"},{url:"/_next/static/chunks/614-8b4c1f908a54d468.js",revision:"ye2Acd3S0ldUROM2XYjpa"},{url:"/_next/static/chunks/app/Homepage/page-ef04ac12f1a1e569.js",revision:"ye2Acd3S0ldUROM2XYjpa"},{url:"/_next/static/chunks/app/Loginpage/page-b62843d9249ed5b7.js",revision:"ye2Acd3S0ldUROM2XYjpa"},{url:"/_next/static/chunks/app/Scanpage/page-d97695c1983ea41d.js",revision:"ye2Acd3S0ldUROM2XYjpa"},{url:"/_next/static/chunks/app/Signuppage/page-5f113c2e1558c9e2.js",revision:"ye2Acd3S0ldUROM2XYjpa"},{url:"/_next/static/chunks/app/Welcomepage/page-6805b93b7b0052cc.js",revision:"ye2Acd3S0ldUROM2XYjpa"},{url:"/_next/static/chunks/app/_not-found/page-4e97d08c2d691778.js",revision:"ye2Acd3S0ldUROM2XYjpa"},{url:"/_next/static/chunks/app/layout-b4c8aeb8676ee19b.js",revision:"ye2Acd3S0ldUROM2XYjpa"},{url:"/_next/static/chunks/app/page-15eb62a7285165a7.js",revision:"ye2Acd3S0ldUROM2XYjpa"},{url:"/_next/static/chunks/e34aaff9-25406814d6fc7b4b.js",revision:"ye2Acd3S0ldUROM2XYjpa"},{url:"/_next/static/chunks/fd9d1056-211f0c774853bd6b.js",revision:"ye2Acd3S0ldUROM2XYjpa"},{url:"/_next/static/chunks/framework-244f580fb294f19a.js",revision:"ye2Acd3S0ldUROM2XYjpa"},{url:"/_next/static/chunks/main-7d79258969779925.js",revision:"ye2Acd3S0ldUROM2XYjpa"},{url:"/_next/static/chunks/main-app-39d36e8359c8ab67.js",revision:"ye2Acd3S0ldUROM2XYjpa"},{url:"/_next/static/chunks/pages/_app-9bde98e681fc7826.js",revision:"ye2Acd3S0ldUROM2XYjpa"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"ye2Acd3S0ldUROM2XYjpa"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-238f5c38b354dbe7.js",revision:"ye2Acd3S0ldUROM2XYjpa"},{url:"/_next/static/css/a3459d8dab17057e.css",revision:"a3459d8dab17057e"},{url:"/_next/static/media/4473ecc91f70f139-s.p.woff",revision:"78e6fc13ea317b55ab0bd6dc4849c110"},{url:"/_next/static/media/463dafcda517f24f-s.p.woff",revision:"cbeb6d2d96eaa268b4b5beb0b46d9632"},{url:"/_next/static/ye2Acd3S0ldUROM2XYjpa/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/ye2Acd3S0ldUROM2XYjpa/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/images/bins.png",revision:"8ca3a0b88a2d3f8679139db5e0704411"},{url:"/images/icons/icon-128x128.png",revision:"0c3be7b88a9251965e1d3d1189a2d81c"},{url:"/images/icons/icon-144x144.png",revision:"77317c6418cc1d63ab5a06fa718b8f84"},{url:"/images/icons/icon-152x152.png",revision:"e56da57005d75481ee024e2f9fa1582d"},{url:"/images/icons/icon-192x192.png",revision:"584ed5690ff9fe36157771db08dcb5f6"},{url:"/images/icons/icon-384x384.png",revision:"5c80f533b622c1801d96204815fa9e9d"},{url:"/images/icons/icon-512x512.png",revision:"2f57e8f4ccc745515153cf5b60e958a5"},{url:"/images/icons/icon-72x72.png",revision:"9b7ab84ff85340e3f0565f87498c9a96"},{url:"/images/icons/icon-96x96.png",revision:"248cdf315f745897d131b19b8405fdf3"},{url:"/images/logo-small.png",revision:"00d8bbcd70828fe5181cd09bffe66ef3"},{url:"/images/logo.png",revision:"777fc39d85e2cb09cff73c6cb8e65981"},{url:"/images/logo3.png",revision:"bf0c93c6c897dfb9c0cc8360f4f78f66"},{url:"/images/profile-pic.png",revision:"bef4f8218ebb5b5248bcc5d85e8e1677"},{url:"/manifest.json",revision:"fd8b8bd039069444dbd73df97ff58f1c"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
