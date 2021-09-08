function editDetails() {
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
console.log(id);
   
    jobportalService.editService(id).then(res=>{
            console.log(res.data);
        const jobDetail = res.data;
        console.log(jobDetail)
        document.querySelector("#id").value = jobDetail._id;
        document.querySelector("#rev").value = jobDetail._rev;
        document.querySelector("#email").value = jobDetail.email;
        document.querySelector("#name").value = jobDetail.name;
        document.querySelector("#keySkills").value = jobDetail.keySkills;
        document.querySelector("#education").value = jobDetail.education;
        document.querySelector("#resume").value = jobDetail.resume;
        document.querySelector("#dateOfBirth").value = jobDetail.dateOfBirth;
        document.querySelector("#mobileNo").value = jobDetail.mobileNo;
    })
    .catch(err => console.error(err));
}

function modifyDetails(){
event.preventDefault();
    const id = document.querySelector("#id").value;
    const rev = document.querySelector("#rev").value;
    const email = document.querySelector("#email").value;
    const name = document.querySelector("#name").value;
    const keySkills = document.querySelector("#keySkills").value;
    const education = document.querySelector("#education").value;
    const resume = document.querySelector("#resume").value;
    const dateOfBirth = document.querySelector("#dateOfBirth").value;
    const mobileNo = document.querySelector("#mobileNo").value;
let modifyDetails = {
        "_id": id,
        "_rev": rev ,  
        "email": email,      
        "name":name,
        "keySkills":keySkills,
        "education":education,
        "resume":resume,
        "dateOfBirth":dateOfBirth,
        "mobileNo":mobileNo
        }
    console.log(modifyDetails);
    const dbUsername='apikey-v2-a160c2y9h57djbakjap0yesqvh8yvuecd47paczd8l9';
    const dbPassword='532b6c43f03b7016261e7a66b65a2648';
    const basicAuth= 'Basic ' + btoa(dbUsername+':'+dbPassword);
    const url = `https://69ba05e4-6d14-4d5f-8640-ee67170e853f-bluemix.cloudantnosqldb.appdomain.cloud/jobportal_skills/${id}/?rev=${rev}`;
    axios.put(url, modifyDetails, {headers:{Authorization:basicAuth}}).then(res=>{
    console.log(modifyDetails)
    toastr.success("successfull");
        setTimeout(function(){
            window.location.href="profile.html";
        },1500)
    
    }).catch(err => alert("error "))

}

editDetails();