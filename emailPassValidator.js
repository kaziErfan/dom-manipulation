let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function(evt){
    evt.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])\S{8,}$/;

    let emailAns = emailRegex.test(email.value);
    let passwordAns = emailRegex.test(email.value);

    if(!emailAns){
        document.querySelector("#emailError").textContent = "Email is incorrect";
        document.querySelector("#emailError").style.display = "initial";
    }
    if(!passwordAns){
        document.querySelector("#passwordError").textContent = "Password is incorrect";
        document.querySelector("#passwordError").style.display = "initial";
    }
});