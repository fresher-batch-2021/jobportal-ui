function login() {
    event.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
if(email ==""||email ==null||email.trim()==""){
    alert("invalid email");
} else{
    if(password.trim()!=""){
        const loginobj={
            "email":email,
           "password":password
};
const dbUserName='apikey-v2-2djdlrrbf736ap4aa6rlre2x1j1wf65v1ti1e8x2bihn';
const dbPassword='3bc2893c0a2a1ec42d9b17840b18447b';
// one space after Basic
const basicAuth='Basic '+ btoa(dbUserName+':'+dbPassword);
const url = "https://75b0afe3-3fa7-477b-8352-bdcfcd522a16-bluemix.cloudantnosqldb.appdomain.cloud/giftshop_user/_find";//registration url

const requestData = 
{
    "selector":{
    "email": email,
    "password": password
},
"fields":["id","rev","name","email","role"]
};
console.log(requestData);//for our verification

axios.post(url,requestData,{headers:{Authorization:basicAuth}}).then(res=>{
    console.log(res);
    localStorage.setItem("userEmail",email);//savin email in local storage
    alert("Login successful");
    // alert(localStorage.getItem("usrEmail"));
    window.location.href="index.html";
}).catch(err=>{
    console.log(err.response.data);
    if(err.response.data.errormessage){
        alert(err.response.data.errormessage);
    }
    else{
        alert("Login failed");
    }
});    
}
else{
    alert("Password  cannot be blanked");
}
}
}
   