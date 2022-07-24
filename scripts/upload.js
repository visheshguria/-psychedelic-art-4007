function addImage() {

    let uploader = document.querySelector("#file-upload");
    uploader.click();
setTimeout(() => {
    document.querySelector(".uploaded-photo").innerText="Upload successfully";
    }, 6000);
  


}

function homecome(){

   window.location.href="index.html";
}
