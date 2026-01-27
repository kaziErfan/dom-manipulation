let count = 0;
let progress = document.querySelector(".progressFill");
let progressText = document.querySelector("#progressPercent");

let intVal = setInterval(function(){
    if(count<=99){
        count++;
        progress.style.width = `${count}%`;
        progressText.textContent = `${count}%`;
    }
    else{
        document.querySelector("#statusText").textContent = "Downloaded";
        clearInterval(intVal);

    }

}, (5 * 1000) / 100);