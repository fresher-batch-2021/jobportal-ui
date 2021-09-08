function login() {
  event.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  if (email == null || email.trim() == "") {
    toastr.error("invalid email");
  } else {
    if (password.trim() != "") {
      UserService.login(email, password)
      .then(res => {
          let data = res.data.docs;
          console.log(data);
    if(data.length==0){
      toastr.error('invalid password');
      setTimeout(function () {
      window.location.href='register.html'
      }, 1500);
      }
    else{
      const user = data[0];
      localStorage.setItem("IsLoggedIn",JSON.stringify(user));
      localStorage.setItem("userEmail", JSON.stringify(email) );
      console.log(res.data)
           //save email in local storage
      localStorage.setItem("userObj",JSON.stringify(res.data.docs[0]))
      console.log(JSON.stringify(res.data.docs))
      toastr.success("Login successful");
      setTimeout(function () {
      window.location.href='index.html'
        }, 1500);
    }
    }).catch((err) => {
       console.log(err.response.data);
          if (err.response.data.errormessage) {
            alert(err.response.data.errormessage);
          } else {
            toastr.error("Login failed");
            // alert("Login failed");
          }
    });
    } else {
      toastr.error("Password  cannot be blanked");
      // alert("Password  cannot be blanked");
    }
  }
}