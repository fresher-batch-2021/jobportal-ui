$(document).ready(function(){
  $("#register").submit(register);
  });
function register() {
event.preventDefault();
  // const name = document.querySelector("#name").value;
  // const email = document.querySelector("#email").value;
  // const password = document.querySelector("#password").value;
  // const confirmpassword = document.querySelector("#confirmpassword").value;
  const name= $("#name").val();
  const email= $("#email").val();
  const password =$("#password").val();
  const confirmPassword= $("#confirmPassword").val();
if(email==""||email==null||email.trim()==""){
  toastr.error("invalid name");
      //  alert("invalid name");
   }
else 
   if(password != confirmPassword){
    toastr.error("Password mismatch");
      //  alert("Password mismatch ");
  }
else{
    let registerObj={
    "name":name,
    "email":email,
    "password":password,
    "role":"USER"
    };
    
    isEmailExists(email).then(res => {
      console.log(registerObj);
      let exists = res;
      if (exists) {
          toastr.error("", ErrorMessage.MAIL_ALREADY_EXIST,//if its true it is an error
              {
                  preventDuplicate: true
              });


      }else{
UserService.register(registerObj).then(res =>{
 let data=res.data;
    console.log(data);
    toastr.success("Registration successful");
      setTimeout(function () {
      window.location.href='login.html'
        }, 1500);
   }).catch(err=>{
           console.error(err.response);
          toastr.error("Unable to register");
   });
   
    }
  }
);
}
}
