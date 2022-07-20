import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();


let signUpArr=JSON.parse(localStorage.getItem("Userdetails")) || [];
console.log(signUpArr)

let arr=[];
document.querySelector("#log_in").addEventListener("click",myFun);
function myFun(el){
    let accData=JSON.parse(localStorage.getItem("Userdetails")) || [];
    accData.push(el);
    
    

    let signinObj={
        email:document.querySelector("#email").value,
        password:document.querySelector("#password").value,
    };
    let display="Data Not Found";
    signUpArr.forEach(function(ele){
        if(signinObj.email=="" && signinObj.password==""){
            display="Fill Empty Field"
            window.location.reload();
            
            console.log("empty")
        }
        
        
        else if(ele.Email==signinObj.email && ele.Password==signinObj.password){
            display="Login Successful"
            window.location.href="navbar.html";
            console.log("right")
            arr.push(ele)
        }
    });
    alert(display);
    if(arr.length>0){
        localStorage.setItem("loginDetails",JSON.stringify(arr));
    }
}