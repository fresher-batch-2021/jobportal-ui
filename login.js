function login() {
    event.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
if(email ==""||email ==null||email.trim()==""){
    alert("invalid username");
} else{
    if(password.trim()!=""){
        const loginobj={
            "email":email,
           "password":password
};
const url="https://product-mock-api.herokuapp.com/jobportalapp/api/v1/auth/login"
console.log(loginobj);
axios.post(url,loginobj).then(res=>{
    console.log(res);
    alert("login succesful");
    window.location.href="index.html";
}).catch(err=>{
    console.log(err.response.data);
    if(err.response.data.errormessage){
        alert(err.response.data.errormessage);
    }
    else{
        alert("login failed");
    }
});    
}
else{
    alert("password is invalid");
}
}
}
    