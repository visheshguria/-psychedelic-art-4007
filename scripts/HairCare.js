// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName("Slideshow");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// }


import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();



let dataObj=
[
    {
        img:'https://www.netmeds.com/images/product-v1/150x150/940215/loreal_paris_fall_resist_3x_anti_hairfall_shampoo_82_5_ml_0_0.jpg',
        name:"L'Oreal Paris Fall Resist 3X Anti Hairfall Shampo.",
        price:79,
        Company:"LOrale India Pvt.Ltd"
 
     },
 
     {
         img:'https://www.netmeds.com/images/product-v1/150x150/889019/pro360_hair_grow_nutritional_powder_chocolate_flavour_250_gm_0_2.jpg',
         name:"Pro360 Hair Grow Nutritional Powder - Chocholate flavour",
         price:472.50,
         Company:'GMM Health Care'
     },
     {
         img:'https://www.netmeds.com/images/product-v1/150x150/940272/loreal_paris_6_oil_nourish_shampoo_192_5_gm_0_0.jpg',
         name:"L'Oreal Paris 6 Oil Nourish Shampoo 192.5 ml",
         price:189,
         Company:'LOrale India Pvt.Ltd'
     },
     {
         img:'https://www.netmeds.com/images/product-v1/150x150/825038/kerala_ayurveda_kesini_oil_100_ml_0.jpg',
         name:"Kerala Ayurveda Kesini Oil 100 ml",
         price:289,
         Company:'Kerala Ayurvedic Ltd',
     },
    {
        img:'https://www.netmeds.com/images/product-v1/150x150/959469/bold_care_anti_dandruff_shampoo_for_men_200_ml_0_0.jpg',
        name:"Bold Care Ketoconazole and Zinc Pyrithione Anti Dandruff ",
        price:445.29,
        Company:'Oddity Health Care Ltd'

    },
    {
        img:'https://www.netmeds.com/images/product-v1/150x150/940246/loreal_paris_total_repair_5_serum_40_ml_0_0.jpg',
        name:"L'Oreal Paris Total Repair 5 Serum 40 Ml.",
        price:175,
        Company:'LOrale India Pvt.Ltd'
    },
    {
        img:'https://www.netmeds.com/images/product-v1/150x150/940235/loreal_paris_color_protect_conditioner_71_5_ml_0_0.jpg',
        name:"L'Oreal Paris Color Protect Conditioner 71.5 Ml",
        price:130,
        Company:'LOrale India Pvt.Ltd'
    },
    {
        img:'https://www.netmeds.com/images/product-v1/150x150/959473/bold_care_hair_regrowth_combo_pack_minoxidil_hair_growth_oil_60_ml_biotin_hair_growth_tablets_60s_1s_0_0.jpg',
        name:"Bold Care Hair Regrowth Combo Pack ",
        price:890,
        Company:'Oddity Health Care Ltd'

    },
    {
        img:'https://www.netmeds.com/images/product-v1/150x150/940221/loreal_paris_extraordinary_clay_shampoo_82_5_ml_184948_0_3.jpg',
        name:"Biotique Bio Papaya Revitalizing Tan Removal. ",
        price:240,
        Company:'Bioveda farmacy private limited ',
    },
 
    {
     img:'https://www.netmeds.com/images/product-v1/150x150/940285/loreal_paris_dream_lengths_conditioner_71_5_gm_0_0.jpg',
     name:"Vlcc 7X Ultra Whitening & Brightening Charcoal Peel.",
     price:130,
     Company:'VLCC Personal Care Pvt,Ltd'

    },
    {
        img:'https://www.netmeds.com/images/product-v1/150x150/940283/loreal_paris_dream_lengths_shampoo_192_5_gm_0_0.jpg',
        name:"Mirabelle Korea Gold + Charcoal Dual System Facial Sheet Mask 25 Ml",
        price:437,
        Company:'Mirabelle Cosmetic Pvt.Ltd '
    },
    {
        img:'https://www.netmeds.com/images/product-v1/150x150/940274/loreal_paris_6_oil_nourish_conditioner_192_5_gm_0_0.jpg',
        name:"Himalaya Oil Clear Mud Face Pack 50 gm",
        price:667,
        Company:'The himalaya drug compay',
    },
    {
        img:'https://www.netmeds.com/images/product-v1/150x150/940242/loreal_paris_total_repair_5_shampoo_82_5_ml_0_0.jpg',
        name:"Jovees Harbel Care Taker",
        price:243,
        Company:'Jovees Harbel Care India Pvt.Ltd'
    },
    {
        img:'https://www.netmeds.com/images/product-v1/150x150/940248/loreal_paris_total_repair_5_conditioner_71_5_ml_0_0.jpg',
        name:"Rose Water Toner 100 Ml",
        price:189,
        Company:'VLCC Personal Care Ltd',
    },


    {
        img:'https://www.netmeds.com/images/product-v1/150x150/362506/scalpe_plus_anti_dandruff_shampoo_75_ml_0_1.jpg',
        name:"Klairs Supple Preparation Facial Toner 180 ml & best quality forever",
        price:1215,
        Company:'Limese primvate limited company'
    },
    {
        img:'https://www.netmeds.com/images/product-v1/150x150/940269/loreal_paris_6_oil_nourish_shampoo_82_5_gm_185269_0_3.jpg',
        name:"Jovees Green Tea Toner 100 ml",
        price:195,
        Company:'Jovees harbel Care limited',
    },
   
]

// console.log(dataObj.length);


let array=JSON.parse(localStorage.getItem("addToCart"))|| [];




function displaydata(dataObj)
{
    document.getElementById("dataApp").innerHTML=null;

    dataObj.forEach(function (elem) {

        //creating child boxes
        let box = document.createElement("div");
    
    
        let picture = document.createElement("img");
        picture.setAttribute("src", elem.img);
        
        let compan=document.createElement("p");
        compan.innerText="Mkt :"+" " + elem.Company;
        compan.setAttribute("class","Com")
      
        let Titl = document.createElement("h3");
        Titl.innerText = elem.name;
        Titl.setAttribute("class","Title")
    
    
        let pric=document.createElement("p");
        pric.setAttribute("class", "Pri")
    
        pric.innerText="Best Price*"+" Rs."+ " "+  elem.price;
    
        let but=document.createElement("button");
        but.setAttribute("class","butt");
        but.addEventListener("click", function(){
          
            if(StoreData(elem.img)==true)
            {
                array.push(elem);

                localStorage.setItem("addToCart", JSON.stringify(array));
               

                alert("Product Added Successfully");
            }
            else
            {
                alert("Already Added")
            }


           
        })
        but.innerText="ADD TO CART";
    
        box.append(picture, Titl, compan, pric, but);
        document.getElementById("dataApp").append(box);
      });
}

displaydata(dataObj);

  
function StoreData(el)
{
  
   let filter= array.filter(function(elem){

     return elem.img==el;
    
   });

   if(filter.length>0)
   {
    return false;
   }
   else
   {
    return true;
   }

}


