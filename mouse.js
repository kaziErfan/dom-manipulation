let abcd = document.querySelector("#abcd");

abcd.addEventListener("mouseover", function(){
    abcd.style.backgroundColor = "yellow";
});

abcd.addEventListener("mouseout", function(){
    abcd.style.backgroundColor = "red";
});

window.addEventListener("mousemove", function(fnc){
   abcd.style.top = fnc.clientY + "px";
   abcd.style.left = fnc.clientX + "px";
});
