import{S as a,i as c}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u=document.querySelector(".picture-search-form"),f=document.querySelector(".picture-search-name"),p=document.querySelector(".loader-container"),d=document.querySelector(".loader"),m="41764451-f0ee5e8d00846e21c9f97a054";function y(){p.style.display="block",d.style.display="block"}let n={key:m,q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};function h(i){n.q=i;const s=new URLSearchParams(n);y(),fetch(`https://pixabay.com/api/?${s}`).then(o=>{if(!o.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return o.json()}).then(({hits:o})=>{const l=document.querySelector(".gallery"),e=new a(".gallery a",{captionDelay:250,captionsData:"alt",close:!0});l.innerHTML="",l.innerHTML=o.reduce((t,r)=>t+`<a class="gallery-link" href="${r.largeImageURL}">
            <img
                class="gallery-image"
                src="${r.webformatURL}"
                alt="${r.tags}"
            />
           <ul class="info-list">
              <li class="info-item">
                  <p class="info-title">Likes</p>
                  <p class="info-value">${r.likes}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Views</p>
                  <p class="info-value">${r.views}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Comments</p>
                  <p class="info-value">${r.comments}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Downloads</p>
                  <p class="info-value">${r.downloads}</p>
              </li>
            </ul>
        </a>`,""),e.refresh()}).catch(o=>{c.error({title:"Error",message:o.message,position:"topRight"})})}u.addEventListener("submit",i=>{i.preventDefault();const s=f.value.trim();h(s)});
//# sourceMappingURL=commonHelpers.js.map
