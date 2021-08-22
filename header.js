
let login=localStorage.getItem("IsLoggedIn");

if(login=="false"){
    
    // alert("Need to login first");
    window.location.href="login.html";
}
function logout(){
    localStorage.setItem("IsLoggedIn",false);
    window.location.reload();
}
























