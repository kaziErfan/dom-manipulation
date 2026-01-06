let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");

form.addEventListener("submit", function(dets){
    dets.preventDefault();
    
    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src", "https://plus.unsplash.com/premium_photo-1664369473114-9146ca35bd72?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

    let h3 = document.createElement("h3");
    h3.textContent = "Erfan";

    let h5 = document.createElement("h5");
    h5.textContent = "Developer";

    let p = document.createElement("p");
    p.textContent = "This is a practice project";
 
});