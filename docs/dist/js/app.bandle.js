!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s="./src/js/main.js")}({"./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/*! no static exports found */function(e,t,n){},"./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */function(e,t){var r=1;let s=document.getElementById("left-side"),o=document.getElementById("right-side");function i(e){var t,n=document.getElementsByClassName("item_image");for(e>n.length&&(r=1),e<1&&(r=n.length),t=0;t<n.length;t++)n[t].style.display="none";n[r-1].style.display="block"}i(r);o.addEventListener("click",()=>{n=1,i(r+=n)}),s.addEventListener("click",()=>{n=-1,i(r+=n)})},"./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */function(e,t,n){"use strict";n.r(t);n(/*! ../css/main.scss */"./src/css/main.scss"),n(/*! ../js/app.js */"./src/js/app.js")}});
//# sourceMappingURL=app.bandle.js.map