parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QBZ5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.hideBackdrop=r,exports.screen_overlay=void 0,exports.showBackdrop=o;var e=exports.screen_overlay=document.querySelector("body");function o(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5;e.style.setProperty("--overlay_z-index",o),e.style.setProperty("--overlay_opacity",r)}function r(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e.style.setProperty("--overlay_z-index",o),e.style.setProperty("--overlay_opacity",r)}
},{}],"fFqw":[function(require,module,exports) {
"use strict";function e(e,t){e.forEach(function(e){e.length>0?e.forEach(function(e){e.tabIndex=t}):e.tabIndex=t})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.set_elements_tabIndex=e;
},{}],"Lm5j":[function(require,module,exports) {
"use strict";var e=require("../../utils/backdrop.js"),t=require("../../utils/modify_html.js"),r=document.querySelectorAll("button:not(button.nav-btn-icon):not(button.second_close_btn), a:not(ul.primary-nav__links li a), .img-carousel .img-carousel__track"),n=document.querySelector(".nav-btn-icon"),o=document.querySelector(".komi-face"),a=document.querySelector(".nav-btn-icon svg"),i=document.querySelector(".primary-nav"),c=i.querySelector(".second_close_btn"),s=document.querySelector(".primary-nav__links"),l=document.querySelectorAll(".primary-nav__links li a"),u=["wp7501723-2144181952.jpg","7600fe9fc49fab1a42b.jpg","wp7501703.jpg","IZ6faD.jpg"],d=["komi_camera_wallpaper.jpg","Komi-535967116.jpg","wp7501663.jpg","452d6a95f.jpg"],p=window.matchMedia("(min-width: 50em)");function y(e){e.parentElement.style.setProperty("--underline-width",1)}function m(e){e.parentElement.style.setProperty("--underline-width",0)}function b(){var e=Math.floor(Math.random()*d.length);i.style.backgroundImage="url("+d[e]+")"}function f(){var e=Math.floor(Math.random()*u.length);i.style.backgroundImage="url("+u[e]+")"}function g(){p.matches?b():f()}l.forEach(function(e){"mouseover focus".split(" ").forEach(function(t){e.addEventListener(t,function(t){y(e)})}),"mouseout blur".split(" ").forEach(function(t){e.addEventListener(t,function(t){m(e)})})}),p.addListener(g);var _=!1;function h(){(0,e.showBackdrop)(),n.setAttribute("aria-expanded",!0),s.setAttribute("aria-hidden",!1),c.setAttribute("aria-hidden",!1),i.style.setProperty("right",0),(0,t.set_elements_tabIndex)([l,c],0),(0,t.set_elements_tabIndex)([r],-1);var u=getComputedStyle(i).getPropertyValue("--menu_mode");'"desktop"'==u?b():'"mobile"'==u&&f(),n.style.setProperty("background-color","rgba(0,0,0,0.0)"),o.style.setProperty("opacity",0),a.style.setProperty("opacity",1),_=!0}function v(){(0,e.hideBackdrop)(),n.setAttribute("aria-expanded",!1),s.setAttribute("aria-hidden",!0),c.setAttribute("aria-hidden",!0),i.style.setProperty("right","-70%"),(0,t.set_elements_tabIndex)([l,c],-1),(0,t.set_elements_tabIndex)([r],0),n.style.setProperty("background-color","#5636D8"),o.style.setProperty("opacity",1),a.style.setProperty("opacity",0),_=!1}n.addEventListener("click",function(e){0==_?(h(),c.addEventListener("click",function(e){v(),n.focus()},{once:!0})):1==_&&v()});
},{"../../utils/backdrop.js":"QBZ5","../../utils/modify_html.js":"fFqw"}]},{},["Lm5j"], null)