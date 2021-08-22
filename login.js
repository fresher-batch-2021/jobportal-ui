function login() {
  event.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  if (email == "" || email == null || email.trim() == "") {
    alert("invalid email");
  } else {
    if (password.trim() != "") {
      const loginobj = {
        email: email,
        password: password,
      };
      UserService.login(email, password)
        .then((res) => {
          console.log(res);
          // localStorage.setItem("isLoggedIn",JSON.stringify(true));
          localStorage.setItem("IsLoggedIn",JSON.stringify(true));
          localStorage.setItem("userEmail", email); //savin email in local storage
          alert("Login successful");
          // alert(localStorage.getItem("usrEmail"));
          window.location.href = "index.html";
        })
        .catch((err) => {
          console.log(err.response.data);
          if (err.response.data.errormessage) {
            alert(err.response.data.errormessage);
          } else {
            alert("Login failed");
          }
        });
    } else {
      alert("Password  cannot be blanked");
    }
  }
}
