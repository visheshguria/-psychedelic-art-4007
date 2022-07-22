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
