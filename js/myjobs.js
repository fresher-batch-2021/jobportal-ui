function displayJobs(email) {
    let content = "";
    const dbUsername = 'apikey-v2-a160c2y9h57djbakjap0yesqvh8yvuecd47paczd8l9';
    const dbPassword = '532b6c43f03b7016261e7a66b65a2648';
    const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
    const url="https://69ba05e4-6d14-4d5f-8640-ee67170e853f-bluemix.cloudantnosqldb.appdomain.cloud/register/_find"
    let requestData=
    {
        selector:{
        email:email
        },
    fields:["appliedJobs"]
};
    axios.post(url,requestData,{ headers: { Authorization: basicAuth } }).then(res=>{
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