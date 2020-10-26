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



// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
