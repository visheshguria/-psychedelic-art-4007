const arr = [
  `https://www.netmeds.com/images/cms/aw_rbslider/slides/1651776805_Category_web.jpg`,
  `https://www.netmeds.com/images/cms/aw_rbslider/slides/1656959707_Category_Web_1000x200px_copy.jpg`,
  `https://www.netmeds.com/images/cms/aw_rbslider/slides/1656007665_category-1000-x-200.jpg`,
  `https://www.netmeds.com/images/cms/aw_rbslider/slides/1656958772_11793904-C-Supradyn-E-Com-Banner3.jpg`,
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1621187223_Category_web_Green.jpg",
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1623343441_Category_web.jpg",
];

let imageSlider = document.getElementById("imageSlider");
let img = document.createElement("img");

img.src = arr[0];
imageSlider.append(img);

let i = 0;

setInterval(function () {
  if (i == arr.length) {
    i = 0;
  }
  img.src = arr[i];
  i++;
}, 3000);

//  //////////* !      Product division 1
const object1 = [
  
  {
    disc: `${15}% OFF`,
    image: `https://www.netmeds.com/images/product-v1/150x150/910016/tri_activ_instant_hand_sanitizer_500_ml_0_1.jpg`,
    name: "Tri-Activ Instant Hand Sanitizer 500 ml",
    mfr: `Piramal Healthcare Ltd`,
    price1: `Rs. 250.0`,
    price2: 247.5,
  },

  {
    disc: `${70}% OFF`,
    image: `https://www.netmeds.com/images/product-v1/150x150/912708/floh_instant_hand_sanitizer_with_70_ethyl_alcohol_spearmint_essential_oil_5_litre_0_0.jpg`,
    name: `FLOH Instant Hand Sanitizer with 70% Ethyl Alcohol - Spearmint`,
    mfr: `Sharp Mint Limited`,
    price1: `Rs. 2499.0`,
    price2: 749.5,
  },

  {
    disc: `${50}% OFF`,
    image: `https://www.netmeds.com/images/product-v1/150x150/909365/cura_home_sanitizer_500_ml_0_0.jpg`,
    name: `Medisales PPE Kit`,
    mfr: `Medisales`,
    price1: `Rs. 1499.0`,
    price2: 974.5,
  },

  {
    disc: `${20}% OFF`,
    image: `https://www.netmeds.com/images/product-v1/150x150/915684/lama_giloy_ghanbati_tablet_60s_0_0.jpg`,
    name: `Lama Giloy ghanbati Tablet 60's`,
    mfr: `Lama Pharmaceuticals`,
    price1: `Rs. 100.0`,
    price2: 80.0,
  },

  {
    disc: `${0}% OFF`,
    image: `https://www.netmeds.com/images/product-v1/150x150/907575/cura_hand_sanitizer_200_ml_0_0.jpg`,
    name: `Cura Hand Sanitizer 200 ml`,
    mfr: `Cura Pharmaceuticals`,
    price1: ``,
    price2: 100,
  },

  {
    disc: `${0}% OFF`,
    image: `https://www.netmeds.com/images/product-v1/150x150/313682/dabur_chyawanprash_1_kg_0.jpg`,
    name: `Dabur Chyawanprash Awaleha 1kg`,
    mfr: `Dabur India Ltd`,
    price1: ``,
    price2: 349.0,
  },

  {
    disc: `${40}% OFF`,
    image: `https://www.netmeds.com/images/product-v1/150x150/907849/sannap_hand_sanitizer_lemon_fragrance_500_ml_0_0.jpg`,
    name: `SanNap Hand Sanitizer - Lemon Fragrance 500 ml`,
    mfr: `San Nap Healthcare`,
    price1: `Rs. 250.0`,
    price2: 150.0,
  },

  {
    disc: `${20}% OFF`,
    image: `https://www.netmeds.com/images/product-v1/150x150/910015/floh_anti_bacterial_face_mask_kn95_20s_0_0.jpg`,
    name: `Floh Anti Bacterial Face Mask - K N95 (Pack of 20)`,
    mfr: ` Huizhou Green Communication`,
    price1: `Rs. 5000.0`,
    price2: 4000.0,
  },
];

if (localStorage.getItem("products1") == null) {
  localStorage.setItem("products1", JSON.stringify(object1));
}
let data1 = JSON.parse(localStorage.getItem("products1"));
// let productDiv = document.getElementById("products");
// console.log(data1);

let second = document.getElementById("second");

//  ///////////////////////* !      print product data on browser

function printProduct(data) {
  let second = document.getElementById("second");
  second.innerHTML = "";

  for (item in data) {
    let el = data[item];
    let productCardCss = document.createElement("div");
    productCardCss.setAttribute("class", "productCardCss");
    second.append(productCardCss);

    let discDiv = document.createElement("div");
    discDiv.setAttribute("class", "discount");
    discDiv.innerHTML = `<span class="disc">${el.disc}</span>`;
    let posterDivCss = document.createElement("div");
    posterDivCss.setAttribute("class", "posterDivCss");
    posterDivCss.innerHTML = `<img src=${el.image}>`;
    let textDivCss = document.createElement("div");
    textDivCss.setAttribute("class", "textDivCss");
    textDivCss.innerHTML = `<p class="p1Css">${el.name}</p>
            <p class="p1Css"><i>Mfr: ${el.mfr}</i></p>
            <p class="p1Css"> <del>${el.price1}</del> <strong>Rs. ${el.price2}</strong></p>`;

    let productBtn = document.createElement("button");
    productBtn.setAttribute("class", "productBtn");
    productBtn.textContent = `ADD TO CART`;
    productCardCss.append(discDiv, posterDivCss, textDivCss, productBtn);

    productBtn.onclick = function () {
      addToCartCovid(el);
    };
  }
}
printProduct(data1);

//  * !      product division 2

const obj = [
  {
    disc: `${0}% OFF`,
    image: `https://www.netmeds.com/images/product-v1/150x150/907575/cura_hand_sanitizer_200_ml_0_0.jpg`,
    name: `Cura Hand Sanitizer 200 ml`,
    mfr: ` CURA PHARMACEUTICALS`,
    price1: ``,
    price2: 100,
  },

  {
    disc: `${0}% OFF`,
    image: `https://www.netmeds.com/images/product-v1/150x150/313682/dabur_chyawanprash_1_kg_0.jpg`,
    name: `Dabur Chyawanprash Awaleha 1kg`,
    mfr: ` Dabur India Ltd`,
    price1: ``,
    price2: 349,
  },

  {
    disc: `${40}% OFF`,
    image: `https://www.netmeds.com/images/product-v1/150x150/858522/inlife_ashwagandha_ghan_capsules_60_s_0.jpg`,
    name: `INLIFE Ashwagandha Ghan Capsules 60's`,
    mfr: ` Inlife Pharma Private Limited`,
    price1: `Rs. 499`,
    price2: 299.5,
  },

  {
    disc: `${0}% OFF`,
    image: `https://www.netmeds.com/images/product-v1/150x150/406030/patanjali_honey_1_kg_0.jpg`,
    name: `Patanjali Honey 1 kg`,
    mfr: ` Patanjali Ayurved Ltd`,
    price1: ``,
    price2: 315,
  },

  {
    disc: `${40}% OFF`,
    image: `https://www.netmeds.com/images/product-v1/150x150/907849/sannap_hand_sanitizer_lemon_fragrance_500_ml_0_0.jpg`,
    name: `SanNap Hand Sanitizer - Lemon Fragrance 500 ml`,
    mfr: `San Nap Healthcare`,
    price1: `Rs. 250`,
    price2: 150,
  },

  {
    disc: `${10}% OFF`,
    image: `https://www.netmeds.com/images/product-v1/150x150/909963/wildcraft_hypashield_w95_reusable_outdoor_protection_face_mask_0_0.jpg`,
    name: `Wildcraft Hypashield W95 Reusable Outdoor Protection`,
    mfr: ` Wildcraft India Pvt Ltd`,
    price1: `Rs. 200`,
    price2: 180,
  },

  {
    disc: `${20}% OFF`,
    image: `https://www.netmeds.com/images/product-v1/150x150/910015/floh_anti_bacterial_face_mask_kn95_20s_0_0.jpg`,
    name: `Floh Anti Bacterial Face Mask - K N95 (Pack of 20)`,
    mfr: ` Huizhou Green Communication`,
    price1: `Rs. 5000`,
    price2: 4000,
  },

  {
    disc: `${0}% OFF`,
    image: `https://www.netmeds.com/images/product-v1/150x150/15129/dettol_hand_sanitizer_original_50_ml_0.jpg`,
    name: `Dettol Instant Hand Sanitizer - Original 50 ml`,
    mfr: `Reckitt Benckiser India Ltd`,
    price1: ``,
    price2: 25,
  },

  {
    disc: `${10}% OFF`,
    image: `https://www.netmeds.com/images/product-v1/150x150/908052/soft_hands_non_sterile_latex_medical_examination_gloves_s_100s_0_0.jpg`,
    name: `Soft Hands Non Sterile Latex Medical Examination Gloves (S)`,
    mfr: ` Medipride`,
    price1: `Rs. 1220.00`,
    price2: 1098.0,
  },

  {
    disc: `${0}% OFF`,
    image: `https://www.netmeds.com/images/product-v1/150x150/840552/dabur_honey_1_kg_0_2.jpg`,
    name: `Dabur Honey 1 kg`,
    mfr: `Dabur India Ltd`,
    price1: ``,
    price2: 430,
  },

  {
    disc: `${71}% OFF`,
    image: `https://www.netmeds.com/images/product-v1/150x150/908302/canyearn_medical_infrared_thermometer_0_0.jpg`,
    name: `Canyearn Medical Infrared Thermometer`,
    mfr: `Canyearn`,
    price1: `Rs. 14,500.00`,
    price2: 4205,
  },

  {
    disc: `${42}% OFF`,
    image: `https://www.netmeds.com/images/product-v1/150x150/902221/sahyog_wellness_multi_function_non_contact_body_object_infrared_thermometer_0_1.jpg`,
    name: `Sahyog Wellness Multi Function Non-Contact Body & Object`,
    mfr: ` Sahyog Wellness`,
    price1: `Rs. 2,499`,
    price2: 1449.5,
  },
];

if (localStorage.getItem("moreProducts") == null) {
  localStorage.setItem("moreProducts", JSON.stringify(obj));
}
let information = JSON.parse(localStorage.getItem("moreProducts"));

function printProduct2(data) {
  let inner = document.getElementById("inner");
  inner.innerHTML = "";
  for (item in data) {
    let el = data[item];
    let productCardCss2 = document.createElement("div");
    productCardCss2.setAttribute("class", "productCardCss2");
    inner.append(productCardCss2);

    let discDiv = document.createElement("div");
    discDiv.setAttribute("class", "discount");
    discDiv.innerHTML = `<span class="disc">${el.disc}</span>`;
    let posterDivCss = document.createElement("div");
    posterDivCss.setAttribute("class", "posterDivCss");
    posterDivCss.innerHTML = `<img src=${el.image}>`;
    let textDivCss = document.createElement("div");
    textDivCss.setAttribute("class", "textDivCss");
    textDivCss.innerHTML = `<p class="p1Css">${el.name}</p>
            <p class="p1Css"><i>Mfr: ${el.mfr}</i></p>
            <p class="p1Css"> <del>${el.price1}</del> <strong>Rs. ${el.price2}</strong></p>`;

    let productBtn = document.createElement("button");
    productBtn.setAttribute("class", "productBtn");
    productBtn.textContent = `ADD TO CART`;
    productCardCss2.append(discDiv, posterDivCss, textDivCss, productBtn);

    productBtn.onclick = function () {
      addToCartCovid(el);
    };
  }
}
printProduct2(information);

count = JSON.parse(localStorage.getItem("count"));

function addToCartCovid(el) {
  let cartArray = localStorage.getItem("cartProduct");
  console.log(cartArray);
  if (cartArray == null) cartArray = [];
  else cartArray = JSON.parse(cartArray);

  cartArray.push(el);
  localStorage.setItem("cartProduct", JSON.stringify(cartArray));

  localStorage.setItem("count", JSON.stringify(++count));

  //! Items In Cart
  let itemsInCart = document.getElementById("itemsInCart");
  itemsInCart.textContent = count;
}

/**=======================
 * !      Sorting Functions
 *========================**/

/**=======================
 * !      Low to High
 *========================**/

function lh() {
  let lower = JSON.parse(localStorage.getItem("products1"));
  let lower2 = JSON.parse(localStorage.getItem("moreProducts"));
  lower = lower.sort(function (a, b) {
    return a.price2 - b.price2;
  });
  lower2 = lower2.sort(function (a, b) {
    return a.price2 - b.price2;
  });
  printProduct(lower);
  printProduct2(lower2);
}

/**=======================
 * !      High to Low
 *========================**/
function hl() {
  let high = JSON.parse(localStorage.getItem("products1"));
  let higher = JSON.parse(localStorage.getItem("moreProducts"));
  high = high.sort(function (a, b) {
    return b.price2 - a.price2;
  });
  higher = higher.sort(function (a, b) {
    return b.price2 - a.price2;
  });
  printProduct(high);
  printProduct2(higher);
}

/**=======================
 * !      Popularity wise
 *========================**/

function popularity() {
  let def = JSON.parse(localStorage.getItem("products1"));
  let def2 = JSON.parse(localStorage.getItem("moreProducts"));
  printProduct(def);
  printProduct2(def2);
}

/**=======================
 * !      Discount wise
 *========================**/

function percent() {
  let disco = JSON.parse(localStorage.getItem("products1"));
  let disco1 = JSON.parse(localStorage.getItem("moreProducts"));
  disco = disco.sort(function (a, b) {
    return +b.disc.split("%")[0] - +a.disc.split("%")[0];
  });
  disco1 = disco1.sort(function (a, b) {
    return +b.disc.split("%")[0] - +a.disc.split("%")[0];
  });

  printProduct(disco);
  printProduct2(disco1);
}