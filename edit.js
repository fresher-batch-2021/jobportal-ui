const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
console.log(id);

function editDetails(id) {
    console.log(id);
    const dbUsername='apikey-v2-a160c2y9h57djbakjap0yesqvh8yvuecd47paczd8l9';
    const dbPassword='532b6c43f03b7016261e7a66b65a2648';
    const basicAuth= 'Basic ' + btoa(dbUsername+':'+dbPassword);
    const url = `https://69ba05e4-6d14-4d5f-8640-ee67170e853f-bluemix.cloudantnosqldb.appdomain.cloud/jobportal_skills/${id}`;
        axios.get(url,  {headers:{Authorization:basicAuth}}).then(res=>{
            console.log(res.data);
        const jobDetail = res.data;
        console.log(jobDetail)
        document.querySelector("#id").value = jobDetail._id;
        document.querySelector("#rev").value = jobDetail._rev;
        document.querySelector("#email").value = jobDetail.email;
        document.querySelector("#name").value = jobDetail.name;
        document.querySelector("#keyskills").value = jobDetail.keyskills;
        document.querySelector("#education").value = jobDetail.education;
        document.querySelector("#resume").value = jobDetail.resume;
        document.querySelector("#dateofbirth").value = jobDetail.dateofbirth;
        document.querySelector("#mobileno").value = jobDetail.mobileno;
    })
    .catch(err => console.error(err));
}
editDetails(id);

function modifyDetails(){

    let id = document.querySelector("#id").value;
    let rev = document.querySelector("#rev").value;
    let email = document.querySelector("#email").value;
    let name = document.querySelector("#name").value;
    let keyskills = document.querySelector("#keyskills").value;
    let education = document.querySelector("#education").value;
    let resume = document.querySelector("#resume").value;
    let dateofbirth = document.querySelector("#dateofbirth").value;
    let mobileno = document.querySelector("#mobileno").value;


    let modifyDetails = {
        "_id": id,
        "_rev": rev,  
        "email": email,      
        "name":name,
        "keyskills":keyskills,
        "education":education,
        "resume":resume,
        "dateofbirth":dateofbirth,
        "mobileno":mobileno
        }
    console.log(modifyDetails);
    
    const dbUsername='apikey-v2-a160c2y9h57djbakjap0yesqvh8yvuecd47paczd8l9';
    const dbPassword='532b6c43f03b7016261e7a66b65a2648';
    const basicAuth= 'Basic ' + btoa(dbUsername+':'+dbPassword);
    const url = `https://69ba05e4-6d14-4d5f-8640-ee67170e853f-bluemix.cloudantnosqldb.appdomain.cloud/jobportal_skills/${id}`;
    axios.put(url, modifyDetails, {headers:{Authorization:basicAuth}}).then(res=>{
            console.log(modifyDetails)
        alert("successfull");
        window.location.href="profile.html";
    }).catch(err => alert("error "))

}

editDetails(id);