import details from "../components/details.js";

console.log(details())
document.getElementById("append").innerHTML=details();
let x=document.getElementById("reward");
document.getElementById("appendreward").append(x);

let off=document.querySelector(".wishlist");
off.style.cursor="pointer";
off.addEventListener("click",wishlist)
  
function wishlist(){

 window.location.href="wishlist.html"}
