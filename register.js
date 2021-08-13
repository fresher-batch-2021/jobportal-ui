function register() {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const confirmpassword = document.querySelector("#confirmpassword").value;
   
   if(email==""||email==null||email.trim()==""){
       alert("invalid name");
   }
   
   else 
   if(password != confirmpassword){
       alert("password does not match with confirmpassword");
   }
   else{
       let registerObj={
           "name":name,
           "email":email,
           "password":password,
           "confirmpassword":confirmpassword
       };
       console.log(registerObj);
       const url="https://product-mock-api.herokuapp.com/jobportalapp/api/v1/auth/register"
       axios.post(url,registerObj).then(res=>{
           console.log(res);
           alert("Registration is successful");
           window.location.href="login.html";
       }).catch(err=>{
           console.error(err);
           alert("Unable to register");
       });
   }
}