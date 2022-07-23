import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();


//////////////////////////////////////////////////////////////////////////////////////////////////////////////





document.querySelector("form").addEventListener("submit", myfun);
  let arr = JSON.parse(localStorage.getItem("Userdetails")) || [];

  function myfun() {
    console.log("deep")
    event.preventDefault();
    let err = document.querySelector("#error")
    let data = JSON.parse(localStorage.getItem("Userdetails")) || [];
    let tocheck = document.querySelector("#email").value;
    if (
      document.querySelector("#email").value == "" &&
      document.querySelector("#pass").value == ""
    ) {
      
      err.innerText = "  * Please fill the complete form";
      err.style.color="red";

    }else if (document.querySelector("#fname").value == "") {
        err.innerText = "  * Please Share Your Name ";
        err.style.color="red";
  
      }
     else if (document.querySelector("#email").value == "") {
      err.innerText = "  *  Email can't be blank";
      err.style.color="red";

    } else if (document.querySelector("#pass").value == "") {

      err.innerText = "  *  Password can't be blank";
      err.style.color="red";

    } else if (checkemail(data, tocheck) == true) {

      err.innerText = "  * Email already exists";
      err.style.color="red";

    } else {
      let obj = {
        FName: document.querySelector("#fname").value,
        LName: document.querySelector("#lname").value,
        Mobile:document.querySelector("#mnum").value,
        Email: document.querySelector("#email").value,
        Password: document.querySelector("#pass").value,
      };
      arr.push(obj);

      localStorage.setItem("Userdetails", JSON.stringify(arr));
      alert("Signup successfully");
      window.location.href = "login.html";
    }
  }

  function checkemail(arr, c) {
    let res = arr.filter(function (el) {
      return el.Email == c;
    });
    if (res.length > 0) {
      return true;
    } else {
      return false;
    }
    return false;
  }