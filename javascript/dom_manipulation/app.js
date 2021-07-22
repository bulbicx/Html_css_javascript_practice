let rootEl = document.querySelector("#container");

rootEl.style.width = "500px";
rootEl.style.height = "500px";
rootEl.style.backgroundColor = "yellow";

let h1 = document.createElement("h1");
h1.textContent = "This is a h1";
let h2 = document.createElement("h2");
h2.textContent = "This is a h2";
let h3 = document.createElement("h3");
h3.textContent = "This is a h3";
let h4 = document.createElement("h4");
h4.textContent = "This is a h4";
let h5 = document.createElement("h5");
h5.textContent = "This is a h5";
let h6 = document.createElement("h6");
h6.textContent = "This is a h6";
let junkEl = document.createElement("p");
junkEl.textContent = "this is a p";

rootEl.appendChild(h1);
rootEl.appendChild(h2);
rootEl.appendChild(h3);
rootEl.appendChild(h4);
rootEl.appendChild(h5);
rootEl.appendChild(h6);

rootEl.appendChild(junkEl);
rootEl.removeChild(junkEl);