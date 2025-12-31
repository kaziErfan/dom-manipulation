
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

// Create a new image element with a placeholder source and add it at the top of a div
let img = document.createElement("img");
img.setAttribute("src", "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.");
img.classList.add("placeholder");
document.querySelector("div").prepend(img);


