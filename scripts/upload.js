function addImage() {

    let uploader = document.querySelector("#file-upload");
    uploader.click();
setTimeout(() => {
    document.querySelector(".uploaded-photo").innerText="Upload successfully";
    }, 6000);
  


}