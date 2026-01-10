let ul = document.querySelector("ul");
ul.addEventListener("click", function(dets){
    dets.target.classList.toggle("lt");
});


let inp = document.querySelector("input");
let span = document.querySelector("span");

inp.addEventListener("input", function(){
   span.textContent = inp.value.length;
})