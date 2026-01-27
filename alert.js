let count = 0;
let alertBanner = document.querySelector(".alert-banner");
let timeSet = setTimeout(() => {
    if(count <=2){
        alertBanner.style.display = "none";
    }
    else{
        clearTimeout(timeSet);
    }
}, 3000);