// import navbar from "../components/navbar.js";
// document.getElementById("navbar").innerHTML=navbar();
//for navigation bar 


var boodata = JSON.parse(localStorage.getItem("loginDetails")) || [];
console.log(boodata)
let a = "";
if (boodata.length > 0) {
    a = boodata[0].FName
}

console.log(a)

if (boodata.length > 0) {
    document.querySelector("#sign-in").innerText = a;
} else {
    document.querySelector("#sign-in").innerText = "Sign in/Sign up";
}

document.querySelector("#sign-in").addEventListener("click", mysect);


function mysect() {
    if (boodata.length > 0) {
        window.location.href = "profile.html"
    } else {
        window.location.href = "signup.html"
    }
}

document.querySelector("#cart").addEventListener("click", mycart);


function mycart() {
    window.location.href = "cart.html"
}
document.querySelector("#upload").addEventListener("click", myupload);


function myupload() {
    window.location.href = "upload.html"
}
document.querySelector("#myLab").addEventListener("click", myLab);
document.querySelector("#myWell").addEventListener("click", myWell);
function myWell() {
    window.location.href = "wellness.html"
}
function myLab() {
    window.location.href = "Lab_test.html"
}



//for carousel

let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }

    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

}

setInterval(function () {

    plusSlides(1);
    // plusSlides(1);

}, 4000)


//swiper division










document.querySelector("#div1>div:nth-child(2)").addEventListener("click", () => {
    window.location.href = "beauty.html";
})

document.querySelector("#div1>div:last-child").addEventListener("click", () => {
    window.location.href = "wellness.html";
})
