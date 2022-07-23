import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

var boodata=JSON.parse(localStorage.getItem("loginDetails")) || [];
console.log(boodata)
let a="";
if(boodata.length>0){
    a=boodata[0].FName
}

console.log(a)

if(boodata.length>0){
    document.querySelector("#sign-in").innerText=a;
}else{
    document.querySelector("#sign-in").innerText="Sign in/Sign up";
}

document.querySelector("#sign-in").addEventListener("click",mysect);


function mysect(){
    if(boodata.length>0){
        window.location.href="profile.html"
    }else{
        window.location.href="signup.html"
    }
}

document.querySelector("#cart").addEventListener("click",mycart);


function mycart(){
        window.location.href="cart.html"  
}
document.querySelector("#upload").addEventListener("click",myupload);


function myupload(){
        window.location.href="des.html"  
}
document.querySelector("#myLab").addEventListener("click",myLab);
document.querySelector("#myWell").addEventListener("click",myWell);
function myWell(){
    window.location.href="des.html"  
}
function myLab(){
    window.location.href="des.html"  
}