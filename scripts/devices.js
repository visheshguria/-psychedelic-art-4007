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
    category: "Devices",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/947286/fingertip_pulse_oximeter_mi303_0_0.jpg",
    name: "Pankajakasthuri Orthoherb Tablet 60's",
    price: 809.5,
    strikedoffprice: 4490.0,
  },
  {
    category: "Devices",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/857452/accusure_blood_pressure_monitor_ts_0.jpg",
    name: "AccuSure Blood Pressure Monitor - TS",
    price: 1377.5,
    strikedoffprice: 2290.0,
  },
  {
    category: "Devices",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/408251/omron_blood_pressure_cuff_hem_cl24_l_0.jpg",
    name: "Omron Blood Pressure Cuff (HEM-CL24) (L)",
    price: 765.5,
    strikedoffprice: 850.0,
  },
  {
    category: "Devices",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/15590/omron_automatic_blood_pressure_monitor_hem_7120_0_2.jpg",
    name: "Omron Automatic Blood Pressure Monitor (HEM-7120)",
    price: 1864.0,
    strikedoffprice: 2330.0,
  },
  {
    category: "Devices",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/15580/accu_chek_active_test_strips_50s_0_1.jpg",
    name: "Accu-Chek Active Test Strips 50's",
    price: 809.0,
    strikedoffprice: 975.0,
  },
  {
    category: "Devices",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/985297/univen_powder_free_nitrile_gloves_m_100s_0_1.jpg",
    name: "UniVen Powder Free Nitrile Gloves (M) 100's",
    price: 806.4,
    strikedoffprice: 1440.0,
  },
  {
    category: "Devices",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/354458/accu_chek_active_test_strip_100_s_0.jpg",
    name: "Accu-Chek Active Test Strip 100's",
    price: 1483.5,
    strikedoffprice: 1725.0,
  },
  {
    category: "Devices",
    img:
      "https://www.netmeds.com/images/product-v1/600x600/895048/onetouch_select_plus_test_strips_50s_0_3.jpg",
    name: "Onetouch Select Plus Test Strips 50's",
    price: 1050.5,
    strikedoffprice: 1095.0,
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