(this["webpackJsonpw-w-web"]=this["webpackJsonpw-w-web"]||[]).push([[0],{55:function(e,n,t){},57:function(e,n,t){},85:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t.n(c),o=t(29),i=t.n(o),a=(t(55),t(9)),s=(t(57),t(36)),u=t(5),l=t(105),j=t(106),d=t(1),b=Object(j.a)({root:{maxWidth:"900px",margin:"0 auto",textAlign:"center"}}),f=function(){var e=b(),n=Object(u.f)(),t=Object(c.useCallback)((function(){n.push("/w-w/question/1")}),[]);return Object(d.jsxs)("main",{className:e.root,children:[Object(d.jsx)("p",{children:Object(d.jsx)("img",{src:"".concat(".","/school_blazer_couple.png"),alt:"\u4e2d\u5b66\u751f"})}),Object(d.jsx)(l.a,{variant:"contained",onClick:t,children:"\u554f\u984c\u3092\u958b\u59cb\u3059\u308b"}),Object(d.jsx)("p",{children:"\u5168\u90e8\u3067\uff11\uff10\u554f"})]})},h=function(){return Object(d.jsx)("p",{children:"not found"})},p=Object(a.b)({key:"resultEffect",default:null}),w=function(){var e=Object(a.e)(p);return e?Object(d.jsx)("h3",{children:"\u6b63\u89e3\uff01\uff01\uff01"}):null===e?Object(d.jsx)(d.Fragment,{}):Object(d.jsx)("h3",{children:"\u4e0d\u6b63\u89e3\uff01\uff01"})},O=Object(a.b)({key:"answerResults",default:[]}),g=t(11),x=t.n(g),m=t(19),v=t(49),k=t.n(v),y=Object(a.c)({key:"getQuestion",get:function(){var e=Object(m.a)(x.a.mark((function e(){var n,t,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null!==(n="https://script.google.com/macros/s/AKfycbwN8OSAcvMwLa2LfuecdQqq7-U8FjyEDfgQhuo5K_uEToswdBBAw0XrzTVfFZYHuzZmDQ/exec")?n:"",e.next=3,k.a.get(t);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}),N=y,W=Object(j.a)({root:{width:"100%"}}),A=function(e){var n=e.name,t=e.id,c=W(),r=Object(u.g)().questionNumber,o="/w-w/question/"+String(Number(r)+1),i=Object(u.f)(),s=Object(a.e)(O),j=Object(a.f)(p),b=Object(a.d)(N),f=function(){var e=Object(m.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s[0].answerNumber===t?(console.log("\u6b63\u89e3"),j(!0)):(console.log("\u4e0d\u6b63\u89e3"),j(!1)),e.next=3,new Promise((function(e){return setTimeout(e,3e3)}));case 3:i.push(o),j(null),b();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsx)(l.a,{variant:"outlined",className:c.root,onClick:f,children:n})},S=Object(j.a)({title:{marginBottom:"10px"}}),q=function(){var e=S(),n=Object(a.f)(O),t=Object(a.e)(N);return n([t]),Object(d.jsxs)("section",{children:[Object(d.jsx)("h3",{className:e.title,children:t.question}),Object(d.jsx)("ul",{children:t.answerList.map((function(e,n){return Object(d.jsx)("li",{children:Object(d.jsx)(A,{name:e,id:n})},n)}))})]})},L=Object(j.a)({root:{maxWidth:"900px",margin:"10px auto",textAlign:"center"}}),C=function(){var e=L();return Object(d.jsxs)("main",{className:e.root,children:[Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)("p",{children:"Loading..."}),children:Object(d.jsx)(q,{})}),Object(d.jsx)(w,{})]})},F=function(){return Object(d.jsx)(s.a,{children:Object(d.jsxs)(u.c,{children:[Object(d.jsx)(u.a,{exact:!0,path:"/w-w/",component:f}),Object(d.jsx)(u.a,{exact:!0,path:"/w-w/question/:questionNumber",component:C}),Object(d.jsx)(u.a,{component:h})]})})};var T=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(a.a,{children:Object(d.jsx)(F,{})})})},B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var P=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,109)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,o=n.getLCP,i=n.getTTFB;t(e),c(e),r(e),o(e),i(e)}))};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(T,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat(".","/service-worker.js");B?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var c=t.headers.get("content-type");404===t.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):E(n,e)}))}}(),P()}},[[85,1,2]]]);