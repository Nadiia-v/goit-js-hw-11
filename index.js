import{a as f,S as m,i as a}from"./assets/vendor-DVva8SYe.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",h="49590531-00b723f692e526587c18c8f84";function y(o){return f.get(p,{params:{key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>{throw console.error("Failed to fetch data from Pixabay API:",r),r})}const l=document.querySelector(".gallery");let g=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(){l.innerHTML=""}function L(o){const r=o.map(({webformatURL:i,largeImageURL:n,tags:e,likes:t,views:s,comments:u,downloads:d})=>`
        <li class="gallery-item">
          <a href="${n}">
            <img class="item-img" src="${i}" alt="${e}" />
          </a>
          <div class="info">
            <p><b>Likes</b> ${t}</p>
            <p><b>Views</b> ${s}</p>
            <p><b>Comments</b> ${u}</p>
            <p><b>Downloads</b> ${d}</p>
          </div>
        </li>`).join("");l.insertAdjacentHTML("beforeend",r),g.refresh()}const w=document.querySelector(".form"),c=document.querySelector(".loader");document.querySelector(".gallery");w.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements.search.value.trim();if(!r){a.error({message:"Enter your search word!"});return}b(),c.classList.remove("hidden"),y(r).then(i=>{if(i.hits.length===0){a.warning({message:"Sorry, there are no images matching your search query. Please try again!"});return}L(i.hits)}).catch(()=>{a.error({message:"An error occurred when getting the pictures"})}).finally(()=>{c.classList.add("hidden")})});
//# sourceMappingURL=index.js.map
