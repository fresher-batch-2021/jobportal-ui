$("#editSkills").submit(modifyDetails);
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
    const modifyDetails = {
        _id: id,
        _rev: rev ,  
        email: email,      
        name:name,
        keySkills:keySkills,
        education:education,
        resume:resume,
        dateOfBirth:dateOfBirth,
        mobileNo:mobileNo
        }
        jobportalService.editSkills(modifyDetails)
        toastr.success("successfull");
        setTimeout(function(){
            window.location.href="profile.html";
        },1500)
    
    

}
editDetails();
