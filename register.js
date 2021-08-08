function register() {
    event.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const confirmpassword = document.querySelector("#confirmpassword").value;
   
   
    console.log(email + " " + password + "" + confirmpassword);
    let userobj = {
        "email": email,
        "password": password,
        "confirmpassword": confirmpassword,
    }
    console.log(userobj);
    if(password == ""|| password == null ||password.trim()== "" ||password != confirmpassword){
        alert("invalid password");
    }
    else{
    if(password.length>=4)
    {
    alert("Registeration Successfully");
    window.location.href = "login.html";
    }
    else{
        alert("invalid password");
    }
    }
    

}
