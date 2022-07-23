



let x=document.getElementById("getreward");
x.style.cursor="pointer";
x.addEventListener("click",()=>{
   window.location.href="myReward.html"
});
let y=document.getElementById("payment");
y.style.cursor="pointer";
y.addEventListener("click",()=>{
   window.location.href="payment.html"
});
let z=document.getElementById("medicineorder");
z.style.cursor="pointer";
z.addEventListener("click",()=>{
   window.location.href="orderhistory.html"
});

let account=document.querySelector("#accountinformation");
account.style.cursor="pointer";
account.addEventListener("click",()=>{
   window.location.href="profile.html"
})

let wallet=document.querySelector("#wallet");
wallet.style.cursor="pointer";
wallet.addEventListener("click",()=>{
   window.location.href="wallet.html"
})

let offer=document.querySelector("#offerzone");
offer.style.cursor="pointer";
offer.addEventListener("click",()=>{
   window.location.href="profile.html"
})
let off=document.querySelector("#wishlist");
off.style.cursor="pointer";
off.addEventListener("click",()=>{
   window.location.href="wishlist.html"
})

  let userData=JSON.parse(localStorage.getItem("loginDetails"))||[];  

  userData.forEach(function(el){
       
       let email=document.querySelector(".email");
       email.innerText="";
       email.innerText=el.Email;
       let mobile=document.querySelector(".mobile");
       mobile.innerText="";
       mobile.innerText=el.Mobile;
       let name=document.querySelector(".name");
       name.innerText="";
       name.innerText=`${el.FName} ${el.LName}`;


  })

  let logout=document.querySelector("#logout");
  logout.style.cursor="pointer";
  logout.addEventListener("click",function(){
     deleteProduct();
  })
  
  function deleteProduct()
  {
   
     localStorage.removeItem("loginDetails");
     window.location.reload();
     window.location.href="index.html"
  }


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



