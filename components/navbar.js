function navbar(){
    return `<img src="https://www.netmeds.com/assets/gloryweb/images/home-logo-netmeds-new.svg" alt="netmeds">
    <div id="search-bar">
        <select name="" id="">
            <option  value="">Deliver to <span id="pin-code">110002</span></option>
        </select>
        <input  type="text" placeholder="Search for medicine and wellness products...">
        
    </div>
    <div id="right-data">
        <div class="upper">
            <i class='fas fa-file-upload' style="font-size:24px"></i>
            <p id="upload">Upload</p>
        </div>
        <div class="upper">
        <i class="fa fa-shopping-cart" style="font-size:24px"></i>
        <p id="cart">cart</p>
    </div>
    <div class="upper">
        <i class='fas fa-user-circle' style='font-size:24px'></i>
        <p id="sign-in">sign in/sign up</p>
        </div>
    </div>`
}
export default navbar;