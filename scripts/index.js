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

setInterval(function() {

    plusSlides(1);
    // plusSlides(1);

},4000)






document.querySelector("#div1>div:nth-child(2)").addEventListener("click", ()=>{
    window.location.href="beauty.html";
})

document.querySelector("#div1>div:last-child").addEventListener("click", ()=>{
    window.location.href="wellness.html";
})
