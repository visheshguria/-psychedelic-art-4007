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
        category: "Mom & Baby",
        img:
          " https://www.netmeds.com/images/product-v1/600x600/918432/pro360_mom_nutritional_protein_powder_swiss_chocolate_flavour_400_gm_0_0.jpg",
        name: "Pro360 MOM Nutritional Protein Powder - Swiss Chocolate Flavour 400 gm",
        price: 488.55,
        strikedoffprice: 575,
      },
      {
        category: "Mom & Baby",
        img:
          " https://www.netmeds.com/images/product-v1/600x600/918431/pro360_mom_nutritional_protein_powder_french_vanilla_flavour_400_gm_0_0.jpg",
        name: "Pro360 MOM Nutritional Protein Powder - French Vanilla Flavour 400 gm",
        price: 488.55,
        strikedoffprice: 575,
      },
      {
        category: "Mom & Baby",
        img:
          " https://www.netmeds.com/images/product-v1/600x600/13457/nestle_nan_pro_2_6_months_powder_400_gm_refill_pack_0.jpg",
        name: "Nestle Nan Pro 2 (6 Months+) Powder 400 gm (Refill Pack)",
        price: 660,
        strikedoffprice: 660,
      },
      {
        category: "Mom & Baby",
        img:
          "https://www.netmeds.com/images/product-v1/600x600/914329/mothercare_flexi_straw_toddler_cup_blue_0_0.jpg",
        name: "Mothercare Flexi Straw Toddler Cup - Blue",
        price: 509.15,
        strikedoffprice: 590.5,
      },
      {
        category: "Mom & Baby",
        img:
          "https://www.netmeds.com/images/product-v1/600x600/13455/nestle_nan_pro_1_upto_6_months_powder_400_gm_tin_0.jpg",
        name: "Nestle Nan Pro 1 (Upto 6 Months) Powder 400 gm -Tin",
        price: 690,
        strikedoffprice: 690.5,
      },
      {
        category: "Mom & Baby",
        img:
          "https://www.netmeds.com/images/product-v1/600x600/827147/mothercare_all_we_know_baby_oil_300_ml_0_1.jpg",
        name: "Mothercare All We Know Baby Oil 300 ml",
        price: 359.0,
        strikedoffprice: 399.0,
      },
      {
        category: "Mom & Baby",
        img:
          "https://www.netmeds.com/images/product-v1/600x600/13454/nestle_nan_pro_1_upto_6_months_powder_400_gm_refill_pack_0_0.jpg",
        name: "Nestle Nan Pro 1 (Upto 6 Months) Powder 400 gm (Refill Pack)",
        price: 670.0,
        strikedoffprice: 670.0,
      },
      {
        category: "Mom & Baby",
        img:
          "https://www.netmeds.com/images/product-v1/600x600/849094/similac_total_comfort_upto_24_months_powder_350_gm_tin_0_2.jpg",
        name: "Similac Total Comfort (Upto 24 Months) Powder 350 gm -Tin",
        price: 795.0,
        strikedoffprice: 795.0,
      },
      {
        category: "Mom & Baby",
        img:
          "https://www.netmeds.com/images/product-v1/600x600/914255/mothercare_narrow_neck_bottle_pink_150_ml_0_0.jpg",
        name: "Mothercare Narrow Neck Bottle - Pink 150 ml",
        price: 152.15,
        strikedoffprice: 179.0,
      },
      {
        category: "Mom & Baby",
        img:
          "https://www.netmeds.com/images/product-v1/600x600/408643/enfamil_infant_formula_a_stage_1_upto_6_months_powder_400_gm_tin_0_1.jpg",
        name: "Enfamil Infant Formula A+ Stage 1 (Upto 6 Months) Powder 400 gm -Tin",
        price: 715.0,
        strikedoffprice: 715.0,
      },
      {
        category: "Mom & Baby",
        img:
          "https://www.netmeds.com/images/product-v1/600x600/914291/mothercare_toddler_silicone_crumb_catcher_bibs_pink_pack_of_2_0_0.jpg",
        name: "Mothercare Toddler Silicone Crumb Catcher Bibs - Pink (Pack of 2)",
        price: 1399.0,
        strikedoffprice: 1399.0,
      },
      {
        category: "Mom & Baby",
        img:
          "https://www.netmeds.com/images/product-v1/600x600/914260/mothercare_non_spill_trainer_cup_pink_0_0.jpg",
        name: "Mothercare Non-Spill Trainer Cup - Pink",
        price: 699.0,
        strikedoffprice: 699.0,
      },
      {
        category: "Mom & Baby",
        img:
          "https://www.netmeds.com/images/product-v1/600x600/827153/mothercare_ultra_slim_breast_pads_pack_of_50_0_1.jpg",
        name: "Mothercare Ultra Slim Breast Pads (Pack of 50)",
        price: 509.0,
        strikedoffprice: 599.0,
      },
      {
        category: "Mom & Baby",
        img:
          "https://www.netmeds.com/images/product-v1/600x600/848628/aptamil_stage_1_powder_400_gm_tin_0_1.jpg",
        name: "Aptamil Infant Formula Stage 1 (0 to 6 months) Powder 400 gm (Tin)",
        price: 740,
        strikedoffprice: 740,
      },
      {
        category: "Mom & Baby",
        img:
          "https://www.netmeds.com/images/product-v1/600x600/858160/inlife_b_firm_natural_breast_tightening_cream_100_gm_0.jpg",
        name: "INLIFE B Firm Natural Breast Tightening Cream 100 gm",
        price: 294.0,
        strikedoffprice: 579.0,
      },
      {
        category: "Mom & Baby",
        img:
          "https://www.netmeds.com/images/product-v1/600x600/13456/nestle_nan_pro_3_12_months_powder_400_gm_refill_pack_0_1.jpg",
        name: "Nestle Nan Pro 3 (12 Months+) Powder 400 gm (Refill Pack)",
        price: 650.0,
        strikedoffprice: 650.0,
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