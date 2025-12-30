
// Changing href with setAttribute
let a = document.querySelector("a");
a.setAttribute("href", "https://www.google.com");

// getAttribute
console.log(a.getAttribute("href"));
// removeAttribute
console.log(a.removeAttribute("href"));

// Create & append element

let h1 = document.createElement("h1");
h1.textContent = "Hello";
document.body.append(h1);

// Changing CSS style with JS
h1.style.color = "green";
h1.style.backgroundColor = "Yellow";
h1.style.textAlign = "center";
h1.style.padding = "30px";

//print all <li> using forEach loop

let lis = document.querySelectorAll("li");
lis.forEach(function(val){
    console.log(val.textContent);
});


// Alternative way with for loop
for(let i = 0; i < lis.length; i++){
    console.log(lis[i].textContent);
};


// Remove disable attribute from Update button
let button = document.querySelector("button");
button.removeAttribute("disabled");
