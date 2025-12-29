
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
