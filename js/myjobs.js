function displayJobs(email) {
    let content = "";
    UserService.jobService(email).then(res=>{
    console.log(res.data.docs[0])
    let details=res.data.docs[0].appliedJobs;
    for(let Obj of details){
        content += `<tr>
        <td>${Obj.companyName}</td>       
        <td>${Obj.skills}</td>
        <td>${Obj.appliedDate}</td>
        <td>${Obj.status}</td>
        </tr>
        `;
    }
    document.querySelector("#list-jobs").innerHTML = content;
}).catch(err=>console.error(err))
console.log(content);
}   
    let usrData=JSON.parse(localStorage.getItem("userObj"));
    displayJobs(usrData.email);