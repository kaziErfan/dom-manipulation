let nm = document.querySelector("#name");
let form = document.querySelector("form");

form.addEventListener("submit", function(evt){
    evt.preventDefault();
    const regex = /^[a-zA-Z][a-zA-Z0-9_]{5,29}$/;
    let ans = regex.test("a@a.a");
    console.log(ans);
    
      if(nm.value.length <= 2){
        document.querySelector("#hide").style.display = "initial";
    }
    else{
        document.querySelector("#hide").style.display = "none";
    }
  
})