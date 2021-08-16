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
      
       const dbUsername = 'apikey-v2-a160c2y9h57djbakjap0yesqvh8yvuecd47paczd8l9';
       const dbPassword = '532b6c43f03b7016261e7a66b65a2648';
       const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
 
       const url = "https://69ba05e4-6d14-4d5f-8640-ee67170e853f-bluemix.cloudantnosqldb.appdomain.cloud/jobportal";
       console.log(basicAuth);
       axios.post(url, registerObj, { headers: { Authorization: basicAuth } }).then(res => {

        console.log(res);
        alert("Registration is successful");
        window.location.href="login.html";
   }).catch(err=>{
           console.error(err.response);
           alert("Unable to register");
       });
   }
}