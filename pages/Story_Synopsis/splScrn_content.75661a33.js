parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"aajD":[function(require,module,exports) {
var e=document.querySelector(".splScrn-container"),r=document.querySelectorAll(".splScrn-container .splScrn-group .splScrn-group__img"),t=document.querySelectorAll(".splScrn-container .splScrn-group .splScrn-group__content-wrap"),n=document.querySelectorAll(".splScrn-container .splScrn-group"),o=window.matchMedia("(min-width: 39.5em)"),c=new IntersectionObserver(function(e){e.forEach(function(e){e.isIntersecting?e.target.style.opacity="1":e.target.style.opacity="0.1"})},{threshold:[0],rootMargin:"-230px 0px -230px 0px"}),i=new IntersectionObserver(function(e){e.forEach(function(e){var r=e.target.querySelector(".splScrn-group__img");e.isIntersecting?(e.target.style.opacity="1",r.style.opacity="1"):(e.target.style.opacity="0.1",r.style.opacity="0")})},{threshold:[0],rootMargin:"-230px 0px -230px 0px"});function s(){o.matches?(n.forEach(function(e){c.unobserve(e)}),n.forEach(function(e){i.observe(e),console.log("watching")})):(n.forEach(function(e){i.unobserve(e)}),n.forEach(function(e){e.querySelector(".splScrn-group__img").style.opacity="1",c.observe(e)}))}s(),o.addListener(s);
},{}]},{},["aajD"], null)