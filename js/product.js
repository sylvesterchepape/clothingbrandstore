const nav = document.querySelector(".navbar");
var catText=document.querySelector(".cat-text");


window.addEventListener("scroll",function(){
    nav.classList.toggle("bg-extra",window.scrollY > 1);
})

//text appear

window.addEventListener("scroll",function(){
    var introPosition=catText.getBoundingClientRect.top;
    var screenPosition = window.innerHeight/2;
 
    if(introPosition < screenPosition){
        catText.classList.add(".intro-appear");
    }
});