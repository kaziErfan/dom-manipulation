let ul = document.querySelector("ul");
ul.addEventListener("click", function(dets){
    dets.target.classList.toggle("lt");
});


let inp = document.querySelector("input");
let span = document.querySelector("span");

inp.addEventListener("input", function(){
   let left = 20 - inp.value.length;
   span.textContent = left;
   if(left > 0){
    inp.setAttribute("maxLength", 20);
   }
   
});