import details from "../components/details.js";

console.log(details())
document.getElementById("append").innerHTML=details();
let x=document.getElementById("wallet");
document.getElementById("appendreward").append(x);




let userData = JSON.parse(localStorage.getItem("loginDetails")) || [];

userData.forEach(function (el) {

    let email = document.querySelector(".email1");
    email.innerText = "";
    email.innerText = el.Email;
    let mobile = document.querySelector(".mobile1");
    mobile.innerText = "";
    mobile.innerText = el.Mobile;
    let name = document.querySelector(".name1");
    name.innerText = "";
    name.innerText = `${el.FName} ${el.LName}`;

});