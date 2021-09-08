$(document).ready(function(){
    $("#edit").submit(editDetails);
    });
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
        $("#id").val(jobDetail._id);
        $("#rev").val(jobDetail._rev);
        $("#email").val(jobDetail.email);
        $("#name").val(jobDetail.name);
        $("#keySkills").val(jobDetail.keySkills);
        $("#education").val(jobDetail.education);
        $("#resume").val(jobDetail.resume);
        $("#dateOfBirth").val(jobDetail.dateOfBirth);
        $("#mobileNo").val(jobDetail.mobileNo);
    })
    .catch(err => console.error(err));
}

function modifyDetails(){
event.preventDefault();
    const id =$("#id").val();
    const rev = $("#rev").val();
    const email = $("#email").val();
    const name = $("#name").val();
    const keySkills =$("#keySkills").val();
    const education = $("#education").val();
    const resume = $("#resume").val();
    const dateOfBirth =$("#dateOfBirth").val();
    const mobileNo = $("#mobileNo").val();
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