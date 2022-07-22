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


let dataObj=
[
    {
        imga:'https://www.netmeds.com/images/product-v1/150x150/949331/lakme_peach_milk_soft_creme_250_gm_0_0.jpg',
        title:"Garnier Skin Naturals, Charcoal, Face Serum Sheet.",
        price:240,
        Company:'Orale India Pvt.Ltd'
 
     },
 
     {
         imga:'https://www.netmeds.com/images/product-v1/150x150/951217/natures_essence_daily_de_tan_lacto_tan_clear_100_gm_0_0.jpg',
         title:"Nature's Essence Daily De-Tan Lacto Tan Clear 100 ML",
         price:530,
         Company:'Nature Essential Pvt.Ltd'
     },
     {
         imga:'https://www.netmeds.com/images/product-v1/150x150/14725/garnier_men_acnofight_pimple_clearing_whitening_cream_20_gm_0_2.jpg',
         title:"Garnier Men Acnofight Pimple Clearing Whitening Cream 20 gm",
         price:260,
         Company:'Orale India Pvt.Ltd'
     },
     {
         imga:'https://www.netmeds.com/images/product-v1/150x150/936458/garnier_skin_naturals_bright_complete_vitamin_c_uv_serum_cream_23_gm_0_0.jpg',
         title:"Garnier Skin Naturals Bright Complete Vitamin C UV Serum Cream 23 gm",
         price:290,
         Company:'Orale India Pvt.Ltd',
     },
    {
        imga:'https://www.netmeds.com/images/product-v1/150x150/940291/garnier_skin_naturals,_charcoal,_face_serum_sheet_mask_black_28_gm_0_0.jpg',
        title:"Lakme Peach Milk Soft Creme 250 Gm",
        price:230,
        Company:'Hindustan Unilever Ltd'

    },
    {
        imga:'https://www.netmeds.com/images/product-v1/150x150/959576/mcaffeine_cappuccino_coffee_face_scrub_kills_99_9_acne_causing_germs_with_vitamin_e_cinnamon_75_gm_0_0.jpg',
        title:"mCaffeine Cappuccino Coffee Face Scrub - Kills 99.9% Acne .",
        price:330,
        Company:'Pep Technology Pvt,Ltd'
    },
    {
        imga:'https://www.netmeds.com/images/product-v1/150x150/951056/house_of_aroma_joy_fragrance_oil_10_ml_0_0.jpg',
        title:"House of Aroma Joy Fragrance Oil 10 ml",
        price:130,
        Company:'House Of Aroma'
    },
    {
        imga:'https://www.netmeds.com/images/product-v1/150x150/921593/garnier_skin_black_serum_mask_pure_charcoal_28_gm_0_0.jpg',
        title:"Garnier Skin Black Serum Mask - Pure Charcoal 28 gm",
        price:239,
        Company:'Orale India Pvt,Ltd'

    },
    {
        imga:'https://www.netmeds.com/images/product-v1/150x150/917410/biotique_bio_papaya_revitalizing_tan_removal_scrub_all_skin_types_50_gm_0_0.jpg',
        title:"Biotique Bio Papaya Revitalizing Tan Removal. ",
        price:240,
        Company:'Bioveda farmacy private limited ',
    },
 
    {
     imga:'https://www.netmeds.com/images/product-v1/150x150/944276/vlcc_7x_ultra_whitening_brightening_charcoal_peel_off_mask_100_gm_0_2.jpg',
     title:"Vlcc 7X Ultra Whitening & Brightening Charcoal Peel.",
     price:130,
     Company:'VLCC Personal Care Pvt,Ltd'

    },
    {
        imga:'https://www.netmeds.com/images/product-v1/150x150/406133/himalaya_oil_clear_mud_face_pack_50_gm_0_2.jpg',
        title:"Mirabelle Korea Gold + Charcoal Dual System Facial Sheet Mask 25 Ml",
        price:437,
        Company:'Mirabelle Cosmetic Pvt.Ltd '
    },
    {
        imga:'https://www.netmeds.com/images/product-v1/150x150/925276/jovees_face_cream_pearl_whitening_60_gm_0_2.jpg',
        title:"Himalaya Oil Clear Mud Face Pack 50 gm",
        price:667,
        Company:'The himalaya drug compay',
    },
    {
        imga:'https://www.netmeds.com/images/product-v1/150x150/951233/natures_essence_glowing_gold_facial_kit_60_gm_0_0.jpg',
        title:"Jovees Harbel Care Taker",
        price:243,
        Company:'Jovees Harbel Care India Pvt.Ltd'
    },
    {
        imga:'https://www.netmeds.com/images/product-v1/150x150/945263/the_natural_wash_retinol_serum_for_spotless_skin_with_1_5_hyaluronic_acid_anti_ageing_serum_30_ml_0_2.jpg',
        title:"Rose Water Toner 100 Ml",
        price:189,
        Company:'VLCC Personal Care Ltd',
    },


    {
        imga:'https://www.netmeds.com/images/product-v1/150x150/859007/klairs_supple_preparation_facial_toner_180_ml_78504_0_2.jpg',
        title:"Klairs Supple Preparation Facial Toner 180 ml & best quality forever",
        price:1215,
        Company:'Limese primvate limited company'
    },
    {
        imga:'https://www.netmeds.com/images/product-v1/150x150/962639/jovees_green_tea_toner_100_ml_0_0.jpg',
        title:"Jovees Green Tea Toner 100 ml",
        price:195,
        Company:'Jovees harbel Care limited',
    },
   
]

// console.log(dataObj.length);


let array=JSON.parse(localStorage.getItem("SaveInLs"))|| [];




function displaydata(dataObj)
{
    document.getElementById("dataApp").innerHTML=null;

    dataObj.forEach(function (elem) {

        //creating child boxes
        let box = document.createElement("div");
    
    
        let picture = document.createElement("img");
        picture.setAttribute("src", elem.imga);
        
        let compan=document.createElement("p");
        compan.innerText="Mkt :"+" " + elem.Company;
        compan.setAttribute("class","Com")
      
        let Titl = document.createElement("h3");
        Titl.innerText = elem.title;
        Titl.setAttribute("class","Title")
    
    
        let pric=document.createElement("p");
        pric.setAttribute("class", "Pri")
    
        pric.innerText="Best Price*"+" Rs."+ " "+  elem.price;
    
        let but=document.createElement("button");
        but.setAttribute("class","butt");
        but.addEventListener("click", function(){
          
            if(StoreData(elem.imga)==true)
            {
                array.push(elem);

                localStorage.setItem("SaveInLs", JSON.stringify(array));
               

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

     return elem.imga==el;
    
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


