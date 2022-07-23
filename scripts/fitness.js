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
    category: "Fitness",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/958796/nitethru_advanced_sleep_aid_capsule_30s_0_0.jpg",
    name: "Nitethru Advanced Sleep Aid Capsule 30's",
    price: 236.5,
    strikedoffprice: 295.0,
  },
  {
    category: "Fitness",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/954870/wellbeing_nutrition_melts_into_a_restful_sleep_oral_thin_strip_30s_0_0.jpg",
    name: "Wellbeing Nutrition Melts into a Restful Sleep Oral Thin Strip 30's",
    price: 597.5,
    strikedoffprice: 649.5,
  },

  {
    category: "Fitness",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/950649/pro360_100_plant_based_vegan_collagen_builder_unflavored_250_gm_0_1.jpg",
    name: "Pro360 100% Plant Based Vegan Collagen Builder - Unflavored 250 gm",
    price: 849.5,
    strikedoffprice: 999.5,
  },
  {
    category: "Fitness",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/948005/nirvasa_plant_based_collagen_builder_powder_berry_orange_flavour_500_gm_0_2.jpg",
    name: "Nirvasa Plant Based Collagen Builder Powder - Berry Orange Flavour 500 gm",
    price: 698.5,
    strikedoffprice: 1499.0,
  },
  {
    category: "Fitness",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/930167/pro360_gold_whey_100_protein_powder_chocolate_flavour_1_kg_0_0.jpg",
    name: "Pro360 Gold Whey 100% Protein Powder - Chocolate Flavour 1 kg",
    price: 1699.0,
    strikedoffprice: 1999.0,
  },
  {
    category: "Fitness",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/921557/pro360_women_nutritional_powder_butterscotch_flavour_500_gm_0_1.jpg",
    name: "Pro360 Women Nutritional Powder - Butterscotch Flavour 500 gm",
    price: 616.0,
    strikedoffprice: 725.0,
  },
  {
    category: "Fitness",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/901520/pro360_hepa_liver_supplement_powder_vanilla_flavour_400_gm_0_1.jpg",
    name: "Pro360 HEPA Liver Supplement Powder - Vanilla Flavour 400 gm",
    price: 760.0,
    strikedoffprice: 895.0,
  },
  {
    category: "Fitness",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/895261/pro360_respiro_nutritional_beverage_mix_strawberry_flavour_250_gm_0.jpg",
    name: "Pro360 Respiro Nutritional Beverage Mix Powder - Strawberry Flavour 250 gm",
    price: 314.0,
    strikedoffprice: 370.0,
  },
  {
    category: "Fitness",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/889051/pro360_kids_nutritional_powder_chocolate_flavour_250_gm_0.jpg",
    name: "Pro360 Kids Nutritional Powder - Chocolate Flavour 250 gm",
    price: 335.0,
    strikedoffprice: 395.0,
  },
  {
    category: "Fitness",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/889024/pro360_ortho_nutritional_powder_vanilla_flavour_250_gm_0_1.jpg",
    name: "Pro360 Ortho Nutritional Powder - Vanilla Flavour 250 gm",
    price: 446.0,
    strikedoffprice: 595.0,
  },
  {
    category: "Fitness",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/100424/2baconil_tts10_7mg_patch_7_s_0.jpg",
    name: "2baconil TTS10 7mg Patch 7'S",
    price: 476.0,
    strikedoffprice: 595.0,
  },

  {
    category: "Fitness",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/906366/nutrafirst_salmon_fish_oil_omega_3_capsule_60s_0_1.jpg",
    name: "Nutrafirst Salmon Fish Oil Omega-3 Capsule 60's",
    price: 479.0,
    strikedoffprice: 1599.0,
  },

  {
    category: "Fitness",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/889029/pro360_dry_fruits_nutritional_powder_250_gm_0_1.jpg",
    name: "Pro360 Dry Fruits Nutritional Powder 250 gm",
    price: 369.0,
    strikedoffprice: 435.0,
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