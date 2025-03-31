import{a as m,S as p,i as a}from"./assets/vendor-DVva8SYe.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",y="49590531-00b723f692e526587c18c8f84";function g(o){return m.get(h,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>{throw console.error("Failed to fetch data from Pixabay API:",r),r})}function b(){gallery.innerHTML=""}function L(o){const r=document.querySelector(".gallery"),i=o.map(({webformatURL:e,largeImageURL:t,tags:s,likes:l,views:u,comments:d,downloads:f})=>`
        <li class="gallery-item">
          <a href="${t}">
            <img class="item-img" src="${e}" alt="${s}" />
          </a>
          <div class="info">
            <p><b>Likes</b> ${l}</p>
            <p><b>Views</b> ${u}</p>
            <p><b>Comments</b> ${d}</p>
            <p><b>Downloads</b> ${f}</p>
          </div>
        </li>`).join("");r.innerHTML=i,new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const w=document.querySelector(".form"),c=document.querySelector(".loader");document.querySelector(".gallery");w.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements.search.value.trim();if(!r){a.error({message:"Enter your search word!"});return}b(),c.classList.remove("hidden"),g(r).then(i=>{if(i.hits.length===0){a.warning({message:"Sorry, there are no images matching your search query. Please try again!"});return}L(i.hits)}).catch(()=>{a.error({message:"An error occurred when getting the pictures"})}).finally(()=>{c.classList.add("hidden")})});
//# sourceMappingURL=index.js.map
