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


/* ==========================
        LIGHTBOX
========================== */

const gallery=document.querySelectorAll(".portfolio-item img");

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightbox-img");

const close=document.querySelector(".close-lightbox");

gallery.forEach(img=>{

img.onclick=()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

}

});

close.onclick=()=>{

lightbox.style.display="none";

}

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

}


/* ==========================
        COUNTERS
========================== */

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const current=+counter.innerText;

const increment=target/100;

if(current<target){

counter.innerText=Math.ceil(current+increment);

setTimeout(update,20);

}else{

counter.innerText=target+"+";

}

}

update();

});