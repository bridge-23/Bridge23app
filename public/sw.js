if(!self.define){let e,i={};const t=(t,a)=>(t=new URL(t+".js",a).href,i[t]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=i,document.head.appendChild(e)}else e=t,importScripts(t),i()})).then((()=>{let e=i[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(a,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const o=e=>t(e,c),r={module:{uri:c},exports:n,require:o};i[c]=Promise.all(a.map((e=>r[e]||o(e)))).then((e=>(s(...e),n)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/_i_BwRAGpKnYaFM1_E6Tr/_buildManifest.js",revision:"5ff5ea30b8af103efdfeefd90d27477c"},{url:"/_next/static/_i_BwRAGpKnYaFM1_E6Tr/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1066.7611289496fab8fe.js",revision:"7611289496fab8fe"},{url:"/_next/static/chunks/1168-9fc4fcde917d875c.js",revision:"9fc4fcde917d875c"},{url:"/_next/static/chunks/1210.ba12f5d9f071091d.js",revision:"ba12f5d9f071091d"},{url:"/_next/static/chunks/1281.385c1345a1453356.js",revision:"385c1345a1453356"},{url:"/_next/static/chunks/1354.55558489103cdffc.js",revision:"55558489103cdffc"},{url:"/_next/static/chunks/1448.118c25326d687a4c.js",revision:"118c25326d687a4c"},{url:"/_next/static/chunks/1459.98ea36ccb7147986.js",revision:"98ea36ccb7147986"},{url:"/_next/static/chunks/1575.76edf6d4b454b822.js",revision:"76edf6d4b454b822"},{url:"/_next/static/chunks/178.969451e74afc7d5c.js",revision:"969451e74afc7d5c"},{url:"/_next/static/chunks/1876.b0ebf86f56b5a2a4.js",revision:"b0ebf86f56b5a2a4"},{url:"/_next/static/chunks/1916.ab84f78cd2d4669c.js",revision:"ab84f78cd2d4669c"},{url:"/_next/static/chunks/2024.84123c51c52c7aaa.js",revision:"84123c51c52c7aaa"},{url:"/_next/static/chunks/215.107d70f4dc257ca6.js",revision:"107d70f4dc257ca6"},{url:"/_next/static/chunks/2398.4216b51fb4a1cb6a.js",revision:"4216b51fb4a1cb6a"},{url:"/_next/static/chunks/2480.2dc8c88f57ce68e9.js",revision:"2dc8c88f57ce68e9"},{url:"/_next/static/chunks/2569.f08c4cda5139e65e.js",revision:"f08c4cda5139e65e"},{url:"/_next/static/chunks/2758.4a14f1ddaf16e1fb.js",revision:"4a14f1ddaf16e1fb"},{url:"/_next/static/chunks/3183.22fe75eb2d27f381.js",revision:"22fe75eb2d27f381"},{url:"/_next/static/chunks/3188.499f08cbbc8fb0ff.js",revision:"499f08cbbc8fb0ff"},{url:"/_next/static/chunks/33.d451769f86a4cac8.js",revision:"d451769f86a4cac8"},{url:"/_next/static/chunks/3364.d8f98346ed8d1844.js",revision:"d8f98346ed8d1844"},{url:"/_next/static/chunks/3798.91132fb881ede90f.js",revision:"91132fb881ede90f"},{url:"/_next/static/chunks/3826.3b4deb1c5f23a9b6.js",revision:"3b4deb1c5f23a9b6"},{url:"/_next/static/chunks/3829-142640bd21bca529.js",revision:"142640bd21bca529"},{url:"/_next/static/chunks/4013.a51e48751cead349.js",revision:"a51e48751cead349"},{url:"/_next/static/chunks/406.5c0bfa9412de3f1d.js",revision:"5c0bfa9412de3f1d"},{url:"/_next/static/chunks/4064.89e974130c2a5f49.js",revision:"89e974130c2a5f49"},{url:"/_next/static/chunks/4293.6b98d941c84e716d.js",revision:"6b98d941c84e716d"},{url:"/_next/static/chunks/4467-469e9ea660a8165e.js",revision:"469e9ea660a8165e"},{url:"/_next/static/chunks/4564-414d957f436ca9d1.js",revision:"414d957f436ca9d1"},{url:"/_next/static/chunks/5351.663c15264b32adee.js",revision:"663c15264b32adee"},{url:"/_next/static/chunks/5458.8ba3f0ff069a007b.js",revision:"8ba3f0ff069a007b"},{url:"/_next/static/chunks/55.98357e48b9b960b1.js",revision:"98357e48b9b960b1"},{url:"/_next/static/chunks/5632.2ebdcfabd8421a6d.js",revision:"2ebdcfabd8421a6d"},{url:"/_next/static/chunks/5811.c1e5671347abd4da.js",revision:"c1e5671347abd4da"},{url:"/_next/static/chunks/5898.c48b57048ff983e3.js",revision:"c48b57048ff983e3"},{url:"/_next/static/chunks/5913.f9918baea5d4cfef.js",revision:"f9918baea5d4cfef"},{url:"/_next/static/chunks/5969-8bf2845808bdc0c5.js",revision:"8bf2845808bdc0c5"},{url:"/_next/static/chunks/6082.b1b6534afe834e98.js",revision:"b1b6534afe834e98"},{url:"/_next/static/chunks/6167-d38a3721186f16a0.js",revision:"d38a3721186f16a0"},{url:"/_next/static/chunks/6746.72995b69145cb04a.js",revision:"72995b69145cb04a"},{url:"/_next/static/chunks/6835.8542546472c902a9.js",revision:"8542546472c902a9"},{url:"/_next/static/chunks/6942.c08085427c39966c.js",revision:"c08085427c39966c"},{url:"/_next/static/chunks/7410.14f69993aba60b33.js",revision:"14f69993aba60b33"},{url:"/_next/static/chunks/7559.5a14b18e5d78d076.js",revision:"5a14b18e5d78d076"},{url:"/_next/static/chunks/7594.d925aa2e5c4922cd.js",revision:"d925aa2e5c4922cd"},{url:"/_next/static/chunks/7652.8c2df55e68488cf7.js",revision:"8c2df55e68488cf7"},{url:"/_next/static/chunks/8285.7c36cb69fa7c1d15.js",revision:"7c36cb69fa7c1d15"},{url:"/_next/static/chunks/8504.42960a35d070c714.js",revision:"42960a35d070c714"},{url:"/_next/static/chunks/8581.87a28875f81276ea.js",revision:"87a28875f81276ea"},{url:"/_next/static/chunks/8620-e37a0c0c44eb3104.js",revision:"e37a0c0c44eb3104"},{url:"/_next/static/chunks/8813.cebe22bab49d19d0.js",revision:"cebe22bab49d19d0"},{url:"/_next/static/chunks/8818.9a43b613c4983856.js",revision:"9a43b613c4983856"},{url:"/_next/static/chunks/8845.1798d9cc2ad15084.js",revision:"1798d9cc2ad15084"},{url:"/_next/static/chunks/9070.1565b28339473d62.js",revision:"1565b28339473d62"},{url:"/_next/static/chunks/9085.c31ab2c1c1c1464f.js",revision:"c31ab2c1c1c1464f"},{url:"/_next/static/chunks/9173.875aeaf5951f02d2.js",revision:"875aeaf5951f02d2"},{url:"/_next/static/chunks/9243.a59d72ea23c8ce49.js",revision:"a59d72ea23c8ce49"},{url:"/_next/static/chunks/9314.3ea99394bfbb5aec.js",revision:"3ea99394bfbb5aec"},{url:"/_next/static/chunks/9479.853951445954cbe8.js",revision:"853951445954cbe8"},{url:"/_next/static/chunks/9481.5f7e525a7539a43f.js",revision:"5f7e525a7539a43f"},{url:"/_next/static/chunks/fb7d5399.3940acc9ac8268a7.js",revision:"3940acc9ac8268a7"},{url:"/_next/static/chunks/framework-a2363dd3c3dbe572.js",revision:"a2363dd3c3dbe572"},{url:"/_next/static/chunks/main-5e9687540efa1e8c.js",revision:"5e9687540efa1e8c"},{url:"/_next/static/chunks/pages/_error-82b79221b9ed784b.js",revision:"82b79221b9ed784b"},{url:"/_next/static/chunks/pages/accounts-d1591e8cc50e6c4c.js",revision:"d1591e8cc50e6c4c"},{url:"/_next/static/chunks/pages/admin-ae7407ff33b7c8c5.js",revision:"ae7407ff33b7c8c5"},{url:"/_next/static/chunks/pages/claim/%5BwalletAddress%5D-5cc603bf3010988b.js",revision:"5cc603bf3010988b"},{url:"/_next/static/chunks/pages/dashboard/%5BwalletAddress%5D-e71b1b64497a0180.js",revision:"e71b1b64497a0180"},{url:"/_next/static/chunks/pages/index-0e023cc6c0754e15.js",revision:"0e023cc6c0754e15"},{url:"/_next/static/chunks/pages/oauth-callback-ce4377bfdcfe9e22.js",revision:"ce4377bfdcfe9e22"},{url:"/_next/static/chunks/pages/privacy-policy-9a81a792cfe39d22.js",revision:"9a81a792cfe39d22"},{url:"/_next/static/chunks/pages/rewards/%5BwalletAddress%5D-e051b9db3b6b8ab4.js",revision:"e051b9db3b6b8ab4"},{url:"/_next/static/chunks/pages/terms-of-service-965e033cf275d344.js",revision:"965e033cf275d344"},{url:"/_next/static/chunks/pages/transactions/%5BwalletAddress%5D-323603f59263848d.js",revision:"323603f59263848d"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-3c87911b7df7e7c9.js",revision:"3c87911b7df7e7c9"},{url:"/_next/static/css/6e0c39f22b826897.css",revision:"6e0c39f22b826897"},{url:"/_next/static/css/d05eb01de880046a.css",revision:"d05eb01de880046a"},{url:"/_next/static/media/roboto-cyrillic-300-normal.17dc3449.woff",revision:"17dc3449"},{url:"/_next/static/media/roboto-cyrillic-300-normal.88798412.woff2",revision:"88798412"},{url:"/_next/static/media/roboto-cyrillic-400-normal.19f93502.woff",revision:"19f93502"},{url:"/_next/static/media/roboto-cyrillic-400-normal.2d9c9d60.woff2",revision:"2d9c9d60"},{url:"/_next/static/media/roboto-cyrillic-500-normal.6e4060e5.woff",revision:"6e4060e5"},{url:"/_next/static/media/roboto-cyrillic-500-normal.aa68ea54.woff2",revision:"aa68ea54"},{url:"/_next/static/media/roboto-cyrillic-700-normal.1ea775f3.woff",revision:"1ea775f3"},{url:"/_next/static/media/roboto-cyrillic-700-normal.258a358e.woff2",revision:"258a358e"},{url:"/_next/static/media/roboto-cyrillic-ext-300-normal.cd7c5715.woff2",revision:"cd7c5715"},{url:"/_next/static/media/roboto-cyrillic-ext-300-normal.de365ce5.woff",revision:"de365ce5"},{url:"/_next/static/media/roboto-cyrillic-ext-400-normal.02e18372.woff",revision:"02e18372"},{url:"/_next/static/media/roboto-cyrillic-ext-400-normal.d7827ae3.woff2",revision:"d7827ae3"},{url:"/_next/static/media/roboto-cyrillic-ext-500-normal.a05054d8.woff",revision:"a05054d8"},{url:"/_next/static/media/roboto-cyrillic-ext-500-normal.a1b5c90d.woff2",revision:"a1b5c90d"},{url:"/_next/static/media/roboto-cyrillic-ext-700-normal.46ca43b3.woff",revision:"46ca43b3"},{url:"/_next/static/media/roboto-cyrillic-ext-700-normal.dd3651fb.woff2",revision:"dd3651fb"},{url:"/_next/static/media/roboto-greek-300-normal.122e04f2.woff",revision:"122e04f2"},{url:"/_next/static/media/roboto-greek-300-normal.25dc89b0.woff2",revision:"25dc89b0"},{url:"/_next/static/media/roboto-greek-400-normal.63e6dc18.woff2",revision:"63e6dc18"},{url:"/_next/static/media/roboto-greek-400-normal.e3b5876b.woff",revision:"e3b5876b"},{url:"/_next/static/media/roboto-greek-500-normal.533b03d2.woff2",revision:"533b03d2"},{url:"/_next/static/media/roboto-greek-500-normal.55bbf615.woff",revision:"55bbf615"},{url:"/_next/static/media/roboto-greek-700-normal.432b858b.woff2",revision:"432b858b"},{url:"/_next/static/media/roboto-greek-700-normal.b3d9786c.woff",revision:"b3d9786c"},{url:"/_next/static/media/roboto-greek-ext-300-normal.69dd9b06.woff",revision:"69dd9b06"},{url:"/_next/static/media/roboto-greek-ext-300-normal.bc5ce703.woff2",revision:"bc5ce703"},{url:"/_next/static/media/roboto-greek-ext-400-normal.2b547ded.woff2",revision:"2b547ded"},{url:"/_next/static/media/roboto-greek-ext-400-normal.d17f5f2b.woff",revision:"d17f5f2b"},{url:"/_next/static/media/roboto-greek-ext-500-normal.7ea6cffa.woff2",revision:"7ea6cffa"},{url:"/_next/static/media/roboto-greek-ext-500-normal.fcc37f63.woff",revision:"fcc37f63"},{url:"/_next/static/media/roboto-greek-ext-700-normal.950178dd.woff",revision:"950178dd"},{url:"/_next/static/media/roboto-greek-ext-700-normal.a8d16efd.woff2",revision:"a8d16efd"},{url:"/_next/static/media/roboto-latin-300-normal.73b81266.woff",revision:"73b81266"},{url:"/_next/static/media/roboto-latin-300-normal.a4eae32d.woff2",revision:"a4eae32d"},{url:"/_next/static/media/roboto-latin-400-normal.d6d4cf7b.woff",revision:"d6d4cf7b"},{url:"/_next/static/media/roboto-latin-400-normal.f2894edc.woff2",revision:"f2894edc"},{url:"/_next/static/media/roboto-latin-500-normal.3170fd9a.woff2",revision:"3170fd9a"},{url:"/_next/static/media/roboto-latin-500-normal.cdad2023.woff",revision:"cdad2023"},{url:"/_next/static/media/roboto-latin-700-normal.71b2beb8.woff2",revision:"71b2beb8"},{url:"/_next/static/media/roboto-latin-700-normal.f3ddaf9d.woff",revision:"f3ddaf9d"},{url:"/_next/static/media/roboto-latin-ext-300-normal.37d4965d.woff2",revision:"37d4965d"},{url:"/_next/static/media/roboto-latin-ext-300-normal.b9b4688a.woff",revision:"b9b4688a"},{url:"/_next/static/media/roboto-latin-ext-400-normal.21abc8c8.woff2",revision:"21abc8c8"},{url:"/_next/static/media/roboto-latin-ext-400-normal.9600b4a6.woff",revision:"9600b4a6"},{url:"/_next/static/media/roboto-latin-ext-500-normal.41845160.woff",revision:"41845160"},{url:"/_next/static/media/roboto-latin-ext-500-normal.85ebfb55.woff2",revision:"85ebfb55"},{url:"/_next/static/media/roboto-latin-ext-700-normal.6af98c24.woff2",revision:"6af98c24"},{url:"/_next/static/media/roboto-latin-ext-700-normal.b6be88e2.woff",revision:"b6be88e2"},{url:"/_next/static/media/roboto-vietnamese-300-normal.44e9a722.woff",revision:"44e9a722"},{url:"/_next/static/media/roboto-vietnamese-300-normal.b3d3e960.woff2",revision:"b3d3e960"},{url:"/_next/static/media/roboto-vietnamese-400-normal.b339d926.woff",revision:"b339d926"},{url:"/_next/static/media/roboto-vietnamese-400-normal.c95fc061.woff2",revision:"c95fc061"},{url:"/_next/static/media/roboto-vietnamese-500-normal.65b57a7f.woff",revision:"65b57a7f"},{url:"/_next/static/media/roboto-vietnamese-500-normal.7f8c0554.woff2",revision:"7f8c0554"},{url:"/_next/static/media/roboto-vietnamese-700-normal.72bf832f.woff2",revision:"72bf832f"},{url:"/_next/static/media/roboto-vietnamese-700-normal.82ca662a.woff",revision:"82ca662a"},{url:"/favicon.ico",revision:"4436a21b8bb4a74559ab8f5e7faa69e8"},{url:"/icon-192x192.png",revision:"ded6829b296630aa154ab436427778eb"},{url:"/icon-256x256.png",revision:"5e5a9ddfdf8d00c09155bad8c453b619"},{url:"/icon-384x384.png",revision:"390b7e2509bb2e7314a0dc06369fa571"},{url:"/icon-512x512.png",revision:"20bcca3ed0b92cfbce16e8a8a21e5138"},{url:"/images/homecover.jpg",revision:"3da62034cb2de9ceb8d89fef983b85ca"},{url:"/manifest.json",revision:"ab4af3f372883a355271be4ac759ce40"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:t,state:a})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
