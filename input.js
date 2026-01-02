let btn = document.querySelector("#upload-btn");
let fileBasic = document.querySelector("#fileBasic");

btn.addEventListener("click", function(){
    fileBasic.click();
});

fileBasic.addEventListener("change", function(dets){
   btn.textContent = dets.target.files[0].name;
});