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





var arr = [
    {
        img: "https://www.netmeds.com/images/category/3055/thumb/covid-essentials_0.jpg",
        name: "Covid Essentials",

    },
    {
        img: "https://www.netmeds.com/images/category/v1/3251/thumb/sexual_wellness_2.jpg",
        name: "Sexual Wellness",
    },
    {
        img: "https://www.netmeds.com/images/category/3222/thumb/vitamins_and_supplements_0.jpg",
        name: "Vitamins And Suppliments",
    },
    {
        img: "https://www.netmeds.com/images/category/491/thumb/homeopathy_0.jpg",
        name: "Homeopathy",
    },
    {
        img: "https://www.netmeds.com/images/category/482/thumb/ayurvedic_0.jpg",
        name: "Ayurvedic",
    }

]


var cart = JSON.parse(localStorage.getItem("cartdata")) || [];
arr.map(function (ele) {

    var div1 = document.createElement("div")
    var img1 = document.createElement("img")
    img1.setAttribute("id", "b1-img")
    img1.setAttribute("src", ele.img)
    var h2 = document.createElement("h2")
    h2.textContent = ele.name

    div1.append(img1, h2)
    document.querySelector("#container").append(div1);

});

//    -------------------------------------------------
var data1 = [
    {
        img: "https://www.netmeds.com/images/product-v1/150x150/930971/skin_elements_face_pack_turmeric_multani_mitti_100_gm_0_2.jpg",
        des: "Skin Elements Face Pack - Turmeric & Multani Mitti 100 gm",
        smalltxt: "Mkt: Kapco International Limited",
        price: "Best Price * RS 248.98",
        mrp: "MRP Rs 399.00",

    },
    {
        img: "https://www.netmeds.com/images/product-v1/150x150/959727/hashmi_vetoll_xl_capsule_20s_0_0.jpg",
        des: "Hashmi Vetoil XL capsule 20's &  Vetoil XL capsule 40's",
        smalltxt: "MKT:Hashmi Unani pharmacy",
        price: "Best Price Rs 797.00",
        mrp: "MRP Rs 886.00",
    },

    {
        img: "https://www.netmeds.com/images/product-v1/150x150/959708/hashmi_hard_rock_capsule_20s_0_0.jpg",
        des: "Hashmi Hard Rock Capsule 20's & Hard Rock Capsule 20's",
        smalltxt: "Mkt: Hashmi Unani Pharmacy",
        price: "Best Price Rs 1805.00",
        mrp: "MRP Rs 1900.00",
    },
    {
        img: "https://www.netmeds.com/images/product-v1/150x150/924985/skin_elements_mens_intimate_wash_60_ml_0_2.jpg",
        des: "Skin Elements Men's Intimate Wash 60 ml",
        smalltxt: " Mkt: Kapco International Limited",
        price: "Best Price Rs 248.00",
        mrp: "MRP Rs 399.00",
    },
    {
        img: "https://www.netmeds.com/images/product-v1/150x150/924992/skin_elements_mens_intimate_wash_120_ml_0_2.jpg",
        des: "Skin Elements Men's Intimate Wash 120 ml",
        smalltxt: "Mkt: Kapco International Limited",
        price: "Best Price Rs 499.00",
        mrp: "MRP Rs 699.00",
    },
]
var cart = JSON.parse(localStorage.getItem("cartdata")) || [];
displayitems(data1)
function displayitems(data1) {
    document.querySelector("#box2").textContent = ""

    data1.map(function (elem) {
        var div = document.createElement("div")
        var img = document.createElement("img")
        img.setAttribute("id", "b-img")
        img.setAttribute("src", elem.img)

        var des = document.createElement("p")
        des.setAttribute("class", "para1")
        des.textContent = elem.des;

        var smalltxt = document.createElement("p")
        smalltxt.setAttribute("class", "para2")
        smalltxt.textContent = elem.smalltxt;

        var price = document.createElement("p")
        price.setAttribute("class", "para3")
        price.textContent = elem.price

        var mrp = document.createElement("p")
        mrp.setAttribute("class", "para4")
        mrp.textContent = elem.mrp

        var btn = document.createElement("button")
        btn.setAttribute("class", "btn")
        btn.textContent = "Add To Cart"
        btn.addEventListener("click", function () {
            addcart(elem)
            window.location.href = "cart.html";
        })

        div.append(img, des, smalltxt, price, mrp, btn)
        document.querySelector("#box2").append(div);
    })
}
function addcart(elem) {
    console.log(elem)
    cart.push(elem)
    localStorage.setItem("cartdata", JSON.stringify(cart))
}

// --------------------------------------------------

var data2 = [
    {
        img: "https://www.netmeds.com/images/product-v1/150x150/915649/accusure_pulse_oximeter_0_0.jpg",
        des: "AccuSure Pulse Oximeter  you can also get the best deal here just clic on this product",
        smalltxt: "Mkt: Kapco International Limited",
        price: "Best Price Rs 1799.00",
        mrp: "MRP Rs 3999.00",
    },
    {
        img: "https://www.netmeds.com/images/product-v1/150x150/835057/dettol_antiseptic_liquid_550_ml_0.jpg",
        des: "Dettol Antiseptic Liquid 550 ml & 300ml you can also get the bottle in just 50% of it, hurrry now before the offer gets end.  Antiseptic Liquid 550 ml",
        smalltxt: "Mkt: Kapco International Limited",
        price: "Best Price Rs 194.00",
        // mrp:"MRP Rs 3999.00",
    },
    {
        img: "https://www.netmeds.com/images/product-v1/150x150/923355/3se_n95_healthcare_5_layers_particulate_respirator_khm_05_pack_of_2_0_0.jpg",
        des: "3Se N95 Healthcare 5 Layers Particulate Respirator (KHM-05) 2's & 3Se N95 Healthcare 5 Layers Particulate Respirator (KHM-05) 6's",
        smalltxt: "Mkt: Kapco International Limited",
        price: "Best Price Rs 240.00",
        // mrp:"MRP Rs 3999.00",
    },
    {
        img: "https://www.netmeds.com/images/product-v1/150x150/948692/oxy5_refillable_portable_oxygen_can_6_litre_0_1.jpg",
        des: "AOxy5 Refillable Portable Oxygen Can 6 Litre &  Refillable Portable Oxygen Can 6 Litre",
        smalltxt: "Mkt: Kapco International Limited",
        price: "Best Price Rs 560.00",
        mrp: "MRP Rs 650.00",
    },
    {
        img: "https://www.netmeds.com/images/product-v1/150x150/839437/fast_up_charge_natural_vitamin_c_tablets_orange_flavour_20_s_0.jpg",
        des: "Fast&Up Charge Natural Vitamin C & Zinc Tablets - Orange Flavour 20's",
        smalltxt: "Mkt: Kapco International Limited",
        price: "Best Price Rs 300.00",
        mrp: "MRP Rs 399.00",
    }
]

var cart = JSON.parse(localStorage.getItem("cartdata")) || [];
displayitems1(data2)
function displayitems1(data2) {
    document.querySelector("#box3").textContent = ""

    data2.map(function (element) {
        var div1 = document.createElement("div")
        var img1 = document.createElement("img")
        img1.setAttribute("id", "b-img")
        img1.setAttribute("src", element.img)

        var des1 = document.createElement("p")
        des1.setAttribute("class", "para1")
        des1.textContent = element.des;

        var smalltxt1 = document.createElement("p")
        smalltxt1.setAttribute("class", "para2")
        smalltxt1.textContent = element.smalltxt;

        var price1 = document.createElement("p")
        price1.setAttribute("class", "para3")
        price1.textContent = element.price;

        var mrp1 = document.createElement("p")
        mrp1.setAttribute("class", "para4")
        mrp1.textContent = element.mrp

        var btn = document.createElement("button")
        btn.setAttribute("class", "btn")
        btn.textContent = "Add To Cart"
        btn.addEventListener("click", function () {
            addcart(element)
            window.location.href = "cart.html";
        })

        function addcart(element) {
            console.log(element)
            cart.push(element)
            localStorage.setItem("cartdata", JSON.stringify(cart))
        }

        div1.append(img1, des1, smalltxt1, price1, mrp1, btn)
        document.querySelector("#box3").append(div1)

    })
}
// -----------------------------------------

var data3 = [
    {
        img: "https://www.netmeds.com/images/product-v1/150x150/15580/accu_chek_active_test_strips_50s_0_1.jpg",
        des: "Accu-Chek Active Test Strips 50's and get 100ml coupon ",
        smalltxt: "Mkt: Kapco International Limited",
        price: "Best Price Rs 809.00",
        mrp: "MRP Rs 975.00",
    },
    {
        img: "https://www.netmeds.com/images/product-v1/150x150/354458/accu_chek_active_test_strip_100_s_0.jpg",
        des: "Accu-Chek Active Test Strips 100's and get 100ml coupon ",
        smalltxt: "Mkt: Kapco International Limited",
        price: "Best Price Rs 1487.00",
        mrp: "MRP Rs 1700.00",
    },
    {
        img: "https://www.netmeds.com/images/product-v1/150x150/835774/accu_chek_instant_test_strips_50_s_0.jpg",
        des: "Accu-Chek Instant Test Strips 50's and get 100ml coupon",
        smalltxt: "Mkt: Kapco International Limited",
        price: "Best Price Rs 815.00",
        mrp: "MRP Rs 975.00",
    },
    {
        img: "https://www.netmeds.com/images/product-v1/150x150/950142/mylab_coviself_covid_19_rapid_antigen_self_test_kit_0_1.jpg",
        des: "Mylab Coviself Covid-19 Rapid Antigen Self Test Kit",
        smalltxt: "Mkt: Kapco International Limited",
        price: "Best Price Rs 200.00",
        mrp: "MRP Rs 250.00",
    },
    {
        img: "https://www.netmeds.com/images/product-v1/150x150/383204/onetouch_select_test_strip_50s_0_4.jpg",
        des: "Onetouch Select Test Strip 50's and get 100ml coupon & get a best offer and get 1000ml in just 50% of it",
        smalltxt: "Mkt: Kapco International Limited",
        price: "Best Price Rs 1145.00",

    },
]

var cart = JSON.parse(localStorage.getItem("cartdata")) || [];
displayitems12(data3)
function displayitems12(data3) {
    document.querySelector("#box4").textContent = ""

    data3.map(function (element) {

        var div = document.createElement("div")
        var img = document.createElement("img")
        img.setAttribute("id", "b-img")
        img.setAttribute("src", element.img);

        var des = document.createElement("p")
        des.setAttribute("class", "para1")
        des.textContent = element.des;

        var smalltxt = document.createElement("p")
        smalltxt.setAttribute("class", "para2")
        smalltxt.textContent = element.smalltxt;

        var price = document.createElement("p")
        price.setAttribute("class", "para3")
        price.textContent = element.price;

        var mrp = document.createElement("p")
        mrp.setAttribute("class", "para4")
        mrp.textContent = element.mrp

        var btn = document.createElement("button")
        btn.setAttribute("class", "btn")
        btn.textContent = "Add To Cart"
        btn.addEventListener("click", function () {
            addcart(element)
            window.location.href = "cart.html";
        })

        function addcart(element) {
            console.log(element)
            cart.push(element)
            localStorage.setItem("cartdata", JSON.stringify(cart))
        }

        div.append(img, des, smalltxt, price, mrp, btn)
        document.querySelector("#box4").append(div)
    })
}
// ----------------------------------------------------------------

var data4 = [
    {
        img: "https://www.netmeds.com/images/product-v1/150x150/829438/ayur_herbal_body_care_lotion_cocoa_butter_1000_ml_0_1.jpg",
        des: "Ayur Herbal Body Care Lotion - Cocoa Butter 1000 ml & 500ml & 250ml",
        smalltxt: "Mkt: Kapco International Limited",
        price: "Best Price Rs 237.00",
        mrp: "MRP Rs 250.00",
    },
    {
        img: "https://www.netmeds.com/images/product-v1/150x150/889433/aroma_magic_juniper_berry_oil_free_moisturiser_100_ml_0_0.jpg",
        des: "Aroma Magic Juniper Berry Oil Free Moisturiser 100 ml & 200ml-- 300ml",
        smalltxt: "Mkt: Kapco International Limited",
        price: "Best Price Rs 174.00",
        mrp: "MRP Rs 204.00",
    },
    {
        img: "https://www.netmeds.com/images/product-v1/150x150/833986/nivea_nourishing_lotion_body_milk_deep_moisture_serum_200_ml_0_1.jpg",
        des: "Nivea Nourishing Lotion Body Milk - Deep Moisture Serum 200 ml",
        smalltxt: "Mkt: Kapco International Limited",
        price: "Best Price Rs 189.00",
        mrp: "MRP Rs 199.00",
    },
    {
        img: "https://www.netmeds.com/images/product-v1/150x150/829452/ayur_herbal_moisturizer_lotion_1000_ml_0.jpg",
        des: "Ayur Herbal Moisturizer Lotion 1000 ml & 500ml -- 250ml with a box",
        smalltxt: "Mkt: Kapco International Limited",
        price: "Best Price Rs 237.00",
        mrp: "MRP Rs 250.00",
    },
    {
        img: "https://www.netmeds.com/images/product-v1/150x150/829441/ayur_herbal_deep_cleansing_milk_lotion_with_aloe_vera_500_ml_0.jpg",
        des: "Ayur Herbal Deep Cleansing Milk Lotion with Aloe Vera 500 ml & 1000ml ",
        smalltxt: "Mkt: Kapco International Limited",
        price: "Best Price Rs 114.00",
        mrp: "MRP Rs 250.00",

    },
]

var cart = JSON.parse(localStorage.getItem("cartdata")) || [];
displayitems123(data3)
function displayitems123(data3) {
    document.querySelector("#box5").textContent = ""

    data4.map(function (element) {

        var div = document.createElement("div")
        var img = document.createElement("img")
        img.setAttribute("id", "b-img")
        img.setAttribute("src", element.img);

        var des = document.createElement("p")
        des.setAttribute("class", "para1")
        des.textContent = element.des;

        var smalltxt = document.createElement("p")
        smalltxt.setAttribute("class", "para2")
        smalltxt.textContent = element.smalltxt;

        var price = document.createElement("p")
        price.setAttribute("class", "para3")
        price.textContent = element.price;

        var mrp = document.createElement("p")
        mrp.setAttribute("class", "para4")
        mrp.textContent = element.mrp

        var btn = document.createElement("button")
        btn.setAttribute("class", "btn")
        btn.textContent = "Add To Cart"
        btn.addEventListener("click", function () {
            addcart(element)
            window.location.href = "cart.html";
        })

        function addcart(element) {
            console.log(element)
            cart.push(element)
            localStorage.setItem("cartdata", JSON.stringify(cart))
        }

        div.append(img, des, smalltxt, price, mrp, btn)
        document.querySelector("#box5").append(div)
    })
}


// --------------------------------------------



var data5 = [
    {
        img: "https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/lung-care.jpg?v=1",
        name: "Lung Care",

    },
    {
        img: "https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/weight-care.jpg?v=1",
        name: "Weight Care",
    },
    {
        img: "https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/women-s-care.jpg?v=1",
        name: "Women's Care",
    },
    {
        img: "https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/bone-and-joint-pain.jpg?v=1",
        name: "Bone and Joint Pain",
    },
    {
        img: "https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/cold-and-fever.jpg?v=1",
        name: "Cold and Fever",
    }
]

// var products=JSON.parse(localStorage.getItem("shoppingitems"))
var cart = JSON.parse(localStorage.getItem("cartdata")) || [];
data5.map(function (ele) {

    var div1 = document.createElement("div")
    var img1 = document.createElement("img")
    img1.setAttribute("id", "b5-img")
    img1.setAttribute("src", ele.img)
    var h3 = document.createElement("h3")
    h3.textContent = ele.name

    div1.append(img1, h3)
    document.querySelector("#container2").append(div1);

});



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

