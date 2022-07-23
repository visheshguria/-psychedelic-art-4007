let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("Slideshow");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

let elecData = [
  {
    category: "Ayush",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/821307/kapiva_wheat_grass_juice_1_ltr_0_2.jpg",
    name: "Kapiva Wheat Grass Juice 1 ltr",
    price: 424.0,
    strikedoffprice: 499.0,
  },
  {
    category: "Ayush",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/814310/himalaya_wellness_ashvagandha_tablet_60_s_0.jpg",
    name: "Himalaya Wellness Ashvagandha Tablet 60's",
    price: 165,
    strikedoffprice: 165,
  },
  {
    category: "Ayush",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/15921/dabur_shilajit_gold_capsule_10s_0_1.jpg",
    name: "Dabur Shilajit Gold Capsule 10's",
    price: 220.0,
    strikedoffprice: 245.0,
  },

  {
    category: "Ayush",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/15920/dabur_shilajit_gold_capsule_20s_0_1.jpg",
    name: "MEN'S REEBOK RUNNING RUN FUSION  SHOES",
    price: 391.0,
    strikedoffprice: 425,
  },
  {
    category: "Ayush",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/15919/dabur_shilajit_capsule_100_s_0.jpg",
    name: "Dabur Shilajit Capsule 100's",
    price: 440.0,
    strikedoffprice: 500.0,
  },
  {
    category: "Ayush",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/15912/dabur_honitus_herbal_cough_remedy_syrup_100_ml_0.jpg",
    name: "Dabur Honitus Herbal Cough Remedy Syrup 100 ml",
    price: 98.01,
    strikedoffprice: 99.0,
  },
  {
    category: "Ayush",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/959720/hashmi_sikander_e_azam_plus_capsule_10s_0_0.jpg",
    name: "Hashmi Sikander-e-Azam Plus Capsule 10's",
    price: 1221.0,
    strikedoffprice: 1286.0,
  },
  {
    category: "Ayush",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/919948/dr_vaidyas_herbo_24_turbo_male_power_oil_pack_of_2_x_25_ml_0_1.jpg",
    name: "Dr.Vaidya's Herbo 24 Turbo Male Power Oil (Pack of 2 x 25 ml)",
    price: 288.0,
    strikedoffprice: 400.0,
  },
  {
    category: "Ayush",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/959708/hashmi_hard_rock_capsule_20s_0_0.jpg",
    name: "Hashmi Hard Rock Capsule 20's",
    price: 1805.0,
    strikedoffprice: 1900.0,
  },
  {
    category: "Ayush",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/919949/dr_vaidyas_herbo_24_turbo_plus_capsule_30s_0_0.jpg",
    name: "Dr.Vaidya's Herbo 24 Turbo Plus Capsule 30's",
    price: 540.0,
    strikedoffprice: 750.0,
  },
  {
    category: "Ayush",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/363656/pankajakasthuri_breathe_easy_granules_400_gm_0.jpg",
    name: "Pankajakasthuri Breathe Easy Granules 400 gm",
    price: 270.0,
    strikedoffprice: 330.0,
  },
  {
    category: "Ayush",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/959712/hashmi_mughal_e_azam_plus_capsule_10s_0_0.jpg",
    name: "Hashmi Mughal-E-Azam Plus Capsule 10's",
    price: 823.0,
    strikedoffprice: 915.0,
  },
  {
    category: "Ayush",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/953776/dr_vaidyas_herbo24turbo_capsule_pack_of_2_x_30s_0_0.jpg",
    name: "Dr. Vaidya's Herbo24Turbo Capsule (Pack of 2 x 30's)",
    price: 1000.0,
    strikedoffprice: 1000.0,
  },
  {
    category: "Ayush",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/953777/dr_vaidyas_herbo24turbo_capsule_pack_of_3_x_30s_0_0.jpg",
    name: "Dr. Vaidya's Herbo24Turbo Capsule (Pack of 3 x 30's)",
    price: 1500.0,
    strikedoffprice: 1500.0,
  },
  {
    category: "Ayush",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/410105/pankajakasthuri_breathe_easy_syrup_200_ml_0.jpg",
    name: "Pankajakasthuri Breathe Easy Syrup 200 ml",
    price: 148.5,
    strikedoffprice: 165.0,
  },
  {
    category: "Ayush",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/413011/pankajakasthuri_orthoherb_tablet_60_s_0.jpg",
    name: "Pankajakasthuri Orthoherb Tablet 60's",
    price: 225.5,
    strikedoffprice: 275.0,
  },
];
let cartItems = JSON.parse(localStorage.getItem("addToCart")) || [];
elecData.map(function(elem){
    let box= document.createElement("div")
    let img= document.createElement("img")
    img.setAttribute("src",elem.img)
    img.setAttribute("id",'product-imgs')

    let price = document.createElement("h3")
    price.innerText=elem.price
    price.style.color="red";

    let acprice = document.createElement("p")
    acprice.innerText=elem.strikedoffprice
    acprice.setAttribute("id","acprice")

    let name = document.createElement("p")
    name.innerText=elem.name

    let tag= document.createElement("p")
    tag.innerText="Best Price*"
    tag.setAttribute("id","tag")

    

    let butt = document.createElement("button")
    butt.innerText="Add To Cart";
    
    butt.addEventListener("click",function(){
        sendToCart(elem);
    })

    box.append(img,name,tag,price,acprice,butt)
    document.querySelector("#container").append(box)

});
   function sendToCart(elem){
    if(checkProduct(elem.name) === true){
    cartItems.push(elem);
    localStorage.setItem("addToCart",JSON.stringify(cartItems))
    alert("Product Added Successfuly")
    }
    else{
        alert("Product Already Added")
    }
   }

   function checkProduct(name1){
    let filtered = cartItems.filter(function(elem){
        return elem.name === name1
    })
    if(filtered.length>0){
        return false;
    }
    else{
        return true;
    }
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