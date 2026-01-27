let count = 0;
let progress = document.querySelector(".progressFill");
let progressText = document.querySelector("#progressPercent");

setInterval(function(){
    if(count<=99){
        count++;
        progress.style.width = `${count}%`;
        progressText.textContent = `${count}%`;
    }
    

}, (5 * 1000) / 100);