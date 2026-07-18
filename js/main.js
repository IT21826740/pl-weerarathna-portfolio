window.addEventListener("load",()=>{

document.querySelector(".loader").style.display="none";

});

window.addEventListener("scroll",()=>{

let winScroll=document.body.scrollTop||document.documentElement.scrollTop;

let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let scrolled=(winScroll/height)*100;

document.getElementById("progressBar").style.width=scrolled+"%";

});


/* =============================

Portfolio Filter

============================= */

const filterButtons=document.querySelectorAll(".portfolio-filter button");

const portfolioItems=document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const filter=button.getAttribute("data-filter");

portfolioItems.forEach(item=>{

if(filter==="all"){

item.style.display="block";

}

else{

if(item.classList.contains(filter)){

item.style.display="block";

}

else{

item.style.display="none";

}

}

});

});

});