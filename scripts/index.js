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


// body refrences 

//category refrences
//div 5, 8

document.getElementById("wellview").addEventListener("click", ()=>{
    window.location.href= "wellness.html";
})

document.getElementById("wellview1").addEventListener("click", ()=>{
    window.location.href= "wellness.html";
})

//div 9
document.querySelector("#explore-beauty-section1>div:first-child>p").addEventListener("click", ()=>{
    window.location.href= "beauty.html";
})

//div 10
document.querySelector("#explore-beauty-section2>div:first-child>p").addEventListener("click", ()=>{
    
    window.location.href= "beauty.html";
})

//div 11

document.querySelector("#div11>div:first-child>p").addEventListener("click", ()=>{
    window.location.href= "beauty.html";
})
//div 12

document.querySelector("#div12>div:first-child>p").addEventListener("click", ()=>{
    window.location.href= "https://www.netmeds.com/non-prescriptions/men-s-grooming";
})
//div 14

document.querySelector("#explore-beauty-section3>div:first-child>p").addEventListener("click", ()=>{
    window.location.href= "health_library.html";
})





document.getElementById("ayush").addEventListener("click", ()=>{
    window.location.href= "ayush.html";
})
document.getElementById("mom&baby").addEventListener("click", ()=>{
    window.location.href= "mom&baby.html";
})
document.getElementById("devices").addEventListener("click", ()=>{
    window.location.href= "devices.html";
})
document.getElementById("fitness").addEventListener("click", ()=>{
    window.location.href= "fitness.html";
})
document.getElementById("sexualwellness").addEventListener("click", ()=>{
    window.location.href= "sexualwellness.html";
})



// footer refrences 

document.querySelector(".last>div:first-child").addEventListener("click", ()=>{
    window.location.href= "medicine.html";
});
document.querySelector(".last>div:nth-child(2)").addEventListener("click", ()=>{
    window.location.href= "wellness.html";
});
document.querySelector(".last>div:nth-child(3)").addEventListener("click", ()=>{
    window.location.href= "Lab_test.html";
});
document.querySelector(".last>div:nth-child(4)").addEventListener("click", ()=>{
    window.location.href= "beauty.html";
});






document.querySelector("#div1>div:nth-child(2)").addEventListener("click", () => {
    window.location.href = "beauty.html";
})

document.querySelector("#div1>div:last-child").addEventListener("click", () => {
    window.location.href = "wellness.html";
})





var data5=[
    {
        img:"https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/lung-care.jpg?v=1",
        name:"Lung Care",

    },
    {
        img:"https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/weight-care.jpg?v=1",
        name:"Weight Care", 
    },
    {
        img:"https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/women-s-care.jpg?v=1",
        name:"Women's Care",
    },
    {
        img:"https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/bone-and-joint-pain.jpg?v=1",
        name:"Bone and Joint Pain",
    },
    {
        img:"https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/cold-and-fever.jpg?v=1",
        name:"Cold and Fever",
    }
]

// var products=JSON.parse(localStorage.getItem("shoppingitems"))
var cart=JSON.parse(localStorage.getItem("cartdata")) || [];
data5.map(function(ele){
    
    var div1=document.createElement("div")
    var img1=document.createElement("img")
    img1.setAttribute("id","b5-img")
    img1.setAttribute("src",ele.img)
    var h3=document.createElement("h3")
    h3.textContent=ele.name
   
    div1.append(img1,h3)
    document.querySelector("#div13").append(div1);

});