// let pricese=0;
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




let addToCart = JSON.parse(localStorage.getItem('addToCart')) || [];
//   document.getElementById('productLength').innerText=addToCart.length;
function display(addToCart) {
  document.querySelector('tbody').innerHTML = '';
  addToCart.forEach(function (e, i) {
    console.log("Deepak")
    let tbody = document.querySelector('tbody');


    let tr = document.createElement('tr');
    let td = document.createElement('td');
    let img = document.createElement('img');
    img.setAttribute('src', e.img);
    td.append(img);
    let td1 = document.createElement('td');
    td1.innerText = e.name;
    let td2 = document.createElement('td');
    td2.innerText = e.price;
    let td3 = document.createElement('td');
    let btn1 = document.createElement('button');
    btn1.innerText = '-';
    let span = document.createElement('span');
    span.innerText = '1';
    let btn2 = document.createElement('button');
    btn2.innerText = '+';
    td3.append(btn1, span, btn2);
    let td4 = document.createElement('td');
    let img2 = document.createElement('img');
    img2.setAttribute('src', 'https://media.istockphoto.com/vectors/garbage-bin-sign-vector-id1139466631?k=20&m=1139466631&s=612x612&w=0&h=F3hOMYdQTDn4NFEi94i9StIbDxJ1v7mX79lDxz1cXLk=')
    td4.appendChild(img2);
    img2.addEventListener('click', function () {
      deleteProduct(e, i)
    })
    let priced = Math.trunc(e.price)
    console.log(priced)
    let td5 = document.createElement('td');
    td5.innerText = priced;


    tr.append(td, td1, td2, td3, td4, td5);
    tbody.appendChild(tr);
    btn2.addEventListener('click', function () {
      let acutal = e.price;
      productQuantityPlus(span, td5, acutal)
    })
    btn1.addEventListener('click', function () {
      let acutal = e.price;
      productQuantityMinus(span, td5, acutal)
    })

  })
}
// delete Product Page 
function deleteProduct(e, i) {
  addToCart.splice(i, 1);
  localStorage.setItem('addToCart', JSON.stringify(addToCart));
  display(addToCart)
  window.location.reload();
}
// increase Product quantity 
let dataArray = [];
let latestArray = [];
function productQuantityPlus(span, price, acutalPrice) {
  latestArray = dataArray;
  dataArray = [];
  let count = +span.innerText;
  let acutalData = +acutalPrice;
  count++;
  span.innerText = count;
  let prices = count * acutalData;
  price.innerText = prices;
  dataArray.push(prices);
  console.log(prices, count);
  total();
}
// decrease product quantity 
function productQuantityMinus(span, price, acutalPrice) {
  let currentPrice = +price.innerText;
  let acutalData = +acutalPrice;
  let count = +span.innerText;
  if (count == 1) {
    count = 1;
    span.innerText = count;
  }
  else {
    count--;
    span.innerText = count;
  }
  if (currentPrice == acutalData) {
    price.innerText = acutalData;
  }
  else {
    price.innerText = currentPrice - acutalData;
  }
  total();

  // console.log(currentPrice);

}

// put the total pize of the product 
function total() {
  // console.log('hello')
  let totalData = document.querySelectorAll('tbody td:last-child');
  let totalPrice = 0;

  let priceTag = document.getElementById('total')
  let priceTagi = document.getElementById('amp-total')
  let priceTagii = document.getElementById('MPR-total')

  totalData.forEach(function (e) {

    // console.log(priceTag)
    let data = +e.innerText
    console.log(e.innerText);
    totalPrice += data;
    pricese=totalPrice;
    let add="Rs."+totalPrice
    priceTag.innerText = totalPrice;
    priceTagi.innerText = add;
    priceTagii.innerText = add;

  })

}



display(addToCart);
total();
// apply cuupon code
document.querySelector('#button').addEventListener('click', applyCupponCode);
console.log("hello")
function applyCupponCode() {
  let totals;
  let totalData = +document.querySelector('#total').innerText;
  // console.log(totalData)
  console.log("complete")
    totals = (totalData / 100) * 70;
    document.querySelector('#total').innerText = totals;
    alert("coupon code applied!!!!")
  

}
// // payment gatway 
// document.getElementById('payment').addEventListener('click', function () {
//   let cardNumber = '123456789';
//   let date = '2027-01';
//   let cvv = '123';
//   let inputDate = document.getElementById('month').value;
//   let inputCard = document.getElementById('number').value;
//   let inputCvv = document.getElementById('cvv').value;
//   if (inputCard == cardNumber && inputDate == date && cvv == inputCvv) {
//     window.location.href = 'otp.html';
//   }
//   else {
//     alert('Wrong Details')
//   }
//   console.log(inputDate)


// })
// let boodata = JSON.parse(localStorage.getItem("loginDetail")) || [];
// if (boodata.length > 0) {
//   document.querySelector("#sign-in").innerText = boodata[0].email;
// } else {
//   document.querySelector("#sign-in").innerText = "sign-in";
// }
document.querySelector("#proced").addEventListener("click",mycli);

function mycli(){
let paisa=document.querySelector("#total").innerText;
localStorage.setItem('totalprice', JSON.stringify(paisa));
window.location.href="payment.html"
}
