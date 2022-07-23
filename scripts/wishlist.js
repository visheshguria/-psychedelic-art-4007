


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
   window.location.href="offer.html"
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

    
