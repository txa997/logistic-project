!function(e){"use strict";let t=document.querySelectorAll(".wa-counter");t.forEach(e=>{let t=[.../(\D+)?(\d+)(\D+)?(\d+)?(\D+)?/.exec(e.textContent)],n=!0,l;for(t.shift(),t=t.filter(e=>null!=e);e.firstChild;)e.removeChild(e.firstChild);for(let r of t)if(isNaN(r))e.insertAdjacentHTML("beforeend",`<span>${r}</span>`);else for(let a=0;a<r.length;a++)e.insertAdjacentHTML("beforeend",`<span data-value="${r[a]}">
	<span>&ndash;</span>
	${Array(parseInt(r[a])+1).join(0).split(0).map((e,t)=>`
		<span>${t}</span>
	`).join("")}
</span>`);l=[...e.querySelectorAll("span[data-value]")];let s=()=>{let t=e.getBoundingClientRect().top,r=.8*window.innerHeight;setTimeout(()=>{n=!1},1e3),t<r&&(setTimeout(()=>{for(let e of l){let t=parseInt(e.getAttribute("data-value"))+1;e.style.transform=`translateY(-${100*t}%)`}},n?1e3:0),window.removeEventListener("scroll",s))};window.addEventListener("scroll",s),s()})}(jQuery); 
/*!
	* wa-counter 
	* v1.00 
	* author: akmol (watchman)
	* 2024-2024 
*/ 