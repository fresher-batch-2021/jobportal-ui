getProfileData();
function getProfileData(){
  let email=JSON.parse((localStorage.getItem("userEmail")))
  toastr.success(email,"Welcome");
      setTimeout(function () {
    }, 1500);
    // alert(email)
  
 
  //for our verification
  jobportalService.profileDetails(email).then(res=>{
  console.log(res.data)
  console.table(res.data)
  localStorage.setItem("profileData",JSON.stringify(res.data.docs[0]))
  let content="";
  let Obj=res.data.docs[0];
  content += `<tr>
  <td>${Obj.email}</td> 
  <td>${Obj.name}</td> 
  <td>${Obj.mobileNo}</td>       
  <td>${Obj.education}</td>
  <td>${Obj.keySkills}</td>
  <td><a href='edit.html?id=${Obj._id}'>Edit</a></td>
   `;             
  document.querySelector("#list-jobs").innerHTML = content;
  }).catch(err=>{
          console.error(err)
  })
}
      
