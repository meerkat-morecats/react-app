module.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/assets/",t(t.s=2)}([function(e,n){e.exports=require("react")},function(e,n){e.exports=require("path")},function(e,n,t){(function(e){var n=t(3),r=t(0),o=t(4),i=t(1),u=t(5),c=t(8),l=t(9),a=t(10)(),s=n();s.use(l.json()),s.use(l.urlencoded({extended:!0})),s.use("/dist",n.static(i.join(e,"dist"),{maxAge:"30d"})),s.use("/api",function(e,n){console.log("req api"),n.end("req api")}),s.get("/*",function(e,n){console.log("request comming"),n.end(c(o.renderToString(r.createElement(a,{test:"123123"}))))}),s.listen(8989,function(){u.info("SSR is running on ".concat(8989,"!"))})}).call(this,"/")},function(e,n){e.exports=require("express")},function(e,n){e.exports=require("react-dom/server")},function(e,n,t){(function(n){var r=t(6),o=t(1),i=t(7),u=o.join(n,"../../logs/error.log"),c=r.format,l=c.printf,a=c.combine,s=c.timestamp,f=c.label,m=l(function(e){var n=e.level,t=e.message,r=i().format("YYYY-MM-DD hh:mm:ss");return"".concat(r," [").concat(n,"] - ").concat(t)}),p={transports:[new r.transports.Console,new r.transports.File({filename:u})],format:a(f({label:""}),s(),m)};e.exports=r.createLogger(p)}).call(this,"/")},function(e,n){e.exports=require("winston")},function(e,n){e.exports=require("moment")},function(e,n){e.exports=function(e){return"\n    <html>\n      <body>\n        <div id='root'>\n          ".concat(e,'\n        </div>\n        <script src="/dist/assets/main.js"  ><\/script>\n      </body>\n    </html>\n  ')}},function(e,n){e.exports=require("body-parser")},function(e,n,t){var r=t(11).Home;e.exports=function(e){return e||r}},function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),i=t(0);var u=function(){return i.createElement("div",null,"MyComponent")};function c(){return o.a.createElement("div",{className:"test"},"hello component")}function l(){return o.a.createElement("div",null,"hello component test 2")}function a(){return o.a.createElement("div",{className:"home"},o.a.createElement("span",null,"hello world!"),o.a.createElement("button",{onClick:function(e){console.log(e),alert("123123")}},"click"),o.a.createElement(c,null),o.a.createElement(l,null),o.a.createElement(u,null))}t.d(n,"Home",function(){return a}),a.getInitialState=function(e){return console.log(e),{}}}]);