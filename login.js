function login() {
    event.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
   
    console.log(email + " " + password );
    let userobj = {
        "email": email,
        "password": password,
    }
    console.log(userobj);
    if(email =="nivi@gmail.com" && password =="123456")
    {
    alert("login Successfully");
    window.location.href = "index.html";
    }
    else{
        alert("invalid user");
    }
    

}