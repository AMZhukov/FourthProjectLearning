!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);const r=e=>{let t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),r=document.querySelector("#timer-seconds");function n(e){return e>9?e:`0${e}`}let c=setInterval((function(){let l=function(){let t=new Date(e).getTime(),o=(new Date).getTime(),r=Math.max((t-o)/1e3,0),c=n(Math.floor(r%60)),l=n(Math.floor(r/60%60));return{timeRemaining:r,hours:n(Math.floor(r/60/60)),minutes:l,seconds:c}}();t.textContent=l.hours,o.textContent=l.minutes,r.textContent=l.seconds,l.timeRemaining<=0&&clearInterval(c)}),1e3)};r("3 october 2019");var n=()=>{const e=document.querySelectorAll(".command__photo");let t=null;e.forEach(e=>{e.addEventListener("mouseover",()=>{t=e.src,e.setAttribute("src",e.dataset.img)}),e.addEventListener("mouseleave",()=>{e.setAttribute("src",t)})})};var c=()=>{document.querySelectorAll(".calc-item").forEach((e,t)=>{t>0&&e.addEventListener("input",()=>{e.value=e.value.replace(/\D/g,"")})})};var l=()=>{const e=document.querySelector(".portfolio-content"),t=e.querySelectorAll(".portfolio-item"),o=e.querySelector(".portfolio-dots"),r=Object.keys(t).length;let n=null;for(let e=0;e<r;e++)(n=document.createElement("li")).className="dot",0===e&&n.classList.add("dot-active"),o.appendChild(n)};var a=()=>{const e=document.querySelector("body"),t=e.querySelector("menu"),o=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",e=>{let r=e.target;r.closest(".menu")?o():r.closest(".close-btn")?o():"A"===r.tagName&&r.closest(".active-menu")?o():r.closest(".active-menu")||t.classList.remove("active-menu")})};var s=()=>{const e=document.querySelector(".popup"),t=document.querySelector(".popup-content"),o=document.querySelectorAll(".popup-btn");let r,n=-100;o.forEach(t=>{t.addEventListener("click",()=>{let t=document.documentElement.clientWidth;e.style.display="block",t>=800&&(r=requestAnimationFrame(c))})}),e.addEventListener("click",t=>{let o=t.target,c=document.documentElement.clientWidth;if(o.classList.contains("popup-close")){if(e.style.display="none",!(c>=800))return;n=-100,cancelAnimationFrame(r)}else(o=o.closest(".popup-content"))||(e.style.display="none")});let c=()=>{r=requestAnimationFrame(c),(n+=3)<0?t.style.transform=`translateY(${n}%)`:(cancelAnimationFrame(r),n=-100)}};var i=()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab"),r=e=>{for(let r=0;r<o.length;r++)e===r?(t[r].classList.add("active"),o[r].classList.remove("d-none")):(t[r].classList.remove("active"),o[r].classList.add("d-none"))};r(0),e.addEventListener("click",e=>{let o=e.target;(o=o.closest(".service-header-tab"))&&t.forEach((e,t)=>{e===o&&r(t)})})};var u=()=>{const e=document.querySelectorAll(".portfolio-item"),t=(document.querySelectorAll(".portfolio-btn"),document.querySelectorAll(".dot")),o=document.querySelector(".portfolio");let r,n=0;const c=(e,t,o)=>{e[t].classList.remove(o)},l=(e,t,o)=>{e[t].classList.add(o)},a=()=>{c(e,n,"portfolio-item-active"),c(t,n,"dot-active"),++n>=e.length&&(n=0),l(e,n,"portfolio-item-active"),l(t,n,"dot-active")},s=(e=3e3)=>{r=setInterval(a,e)};o.addEventListener("click",o=>{o.preventDefault();let r=o.target;r.matches(".portfolio-btn, .dot")&&(c(e,n,"portfolio-item-active"),c(t,n,"dot-active"),r.matches("#arrow-right")?n++:r.matches("#arrow-left")?n--:r.matches(".dot")&&t.forEach((e,t)=>{e===r&&(n=t)}),n>=e.length&&(n=0),n<0&&(n=e.length-1),l(e,n,"portfolio-item-active"),l(t,n,"dot-active"))}),o.addEventListener("mouseover",e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(r)}),o.addEventListener("mouseout",e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&s()}),s(1500)};var d=(e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),n=document.querySelector(".calc-day"),c=document.querySelector(".calc-count"),l=document.getElementById("total");t.addEventListener("change",t=>{const a=t.target;(a.matches("select")||a.matches("input"))&&(()=>{let t=0,a=1,s=1;const i=o.options[o.selectedIndex].value,u=+r.value;c.value>1&&(a+=(c.value-1)/10),n.value&&n.value<5?s*=2:n.value&&n.value<10&&(s*=1.5),i&&u&&(t=e*i*u*a*s),l.textContent=Math.round(t)})()})};var m=e=>{const t=document.getElementById(e),o=t.querySelector("button");t.addEventListener("change",e=>{e.target.matches("input")&&(t.querySelector(".error")?o.setAttribute("disabled","true"):o.getAttribute("disabled")&&o.removeAttribute("disabled"))});const r=document.createElement("div");r.style.cssText="form3"===e?"font-size: 2rem; color: white;":"font-size: 2rem;",t.addEventListener("submit",e=>{e.preventDefault(),t.appendChild(r),r.textContent="Загрузка...";const o=new FormData(t);let c={};o.forEach((e,t)=>{c[t]=e}),n(c).then(e=>{if(200!==e.status)throw new Error("status network not 200");r.textContent="Спасибо! Мы скоро с вами свяжемся!",t.reset()}).catch(e=>{r.textContent="Что то пошло не так",console.error(e)})});const n=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};r("30 september 2019"),l(),a(),s(),i(),u(),n(),c(),d(100),m("form1"),m("form2"),m("form3")}]);