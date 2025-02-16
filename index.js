import{a as d,S as y,i as l}from"./assets/vendor-D3PmPE7A.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const g="48880683-c6af76fdc924f93949198cfc6";async function p(s){const t="https://pixabay.com/api/",o={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await d.get(t,{params:o})).data.hits}catch(a){throw console.error("Error fetching images:",a),a}}const f=document.querySelector(".gallery");let i;function h(s){const t=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:r,views:n,comments:u,downloads:m})=>`
            <li class="gallery-item">
                <div class="gallery">
                    <a href="${a}">
                        <img class="gallery-image" src="${o}" alt="${e}" loading="lazy">
                    </a>
                </div>

                <div class="info">
                    <p><b>Likes:</b> ${r}</p>
                    <p><b>Views:</b> ${n}</p>
                    <p><b>Comments:</b> ${u}</p>
                    <p><b>Downloads:</b> ${m}</p>
                </div>
            </li>
        `).join("");f.innerHTML=t,i||(i=new y(".gallery a")),i.refresh()}function b(){f.innerHTML="",i&&(i.destroy(),i=null)}const L=document.getElementById("search-form"),c=document.getElementById("loader");L.addEventListener("submit",E);async function E(s){s.preventDefault();const t=s.target.elements.searchQuery.value.trim();if(!t){l.error({title:"Error",message:"Please enter a search query."});return}c.style.display="block",b();try{const o=await p(t);o.length===0?l.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}):h(o)}catch(o){console.error("Error fetching images:",o),l.error({title:"Error",message:"Failed to fetch images. Please try again later."})}finally{c.style.display="none",s.target.reset()}}
//# sourceMappingURL=index.js.map
