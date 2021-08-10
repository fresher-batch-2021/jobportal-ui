function register() {
    event.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const confirmpassword = document.querySelector("#confirmpassword").value;
   
   if(email==""||email==null||email.trim()==""){
       alert("invalid name");
   }
   if(password.length<6){
       alert("password is short");
   }
   else 
   if(password != confirmpassword){
       alert("password does not match");
   }
   else{
       let rejisterObj={
           "email":email,
           "password":password,
           "confirmpassword":confirmpassword
       };
       console.log(rejisterObj);
       const url="https://product-mock-api.herokuapp.com/jobportalapp/api/v1/auth/register"
       axios.post(url,rejisterObj).then(res=>{
           console.log(res);
           alert("Registeration is succesful");
           window.location.href="login.html";
       }).catch(err=>{
           console.error(err);
           alert("Unable to register");
       });
   }
}