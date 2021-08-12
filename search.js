function getJobs(){
  
  var images = [{ imageUrl:"applelogo.png",skills:"javascript",companyname:"accenture"}, { imageUrl: "applelogo.png",skills:"c++",companyname:"Apple" }, { imageUrl: "oraclelogo.jpg",skills:"c++", companyname:"oracle"}]; 
  displayJobs(images);
}
getJobs();
function displayJobs(jobs){
 
  let content=`
  <table>
  <tr>
  <th>image</th>
  <th>skills</th>
  <th>companyname</th>
  </tr>

  `;
for(let job of jobs){
content+=`<tr>
<td><img src="images/${job.imageUrl}" ></td>
<td>${job.skills}</td>
<td>${job.companyname}</td>
`;
}
content+=`</table>`;
document.querySelector(".jobData").innerHTML=content;

}


function filterjob(){

  var allSkills=document.querySelectorAll("#skills");
  let selectedSkills = [];
  for(let skills of allSkills){
      if (skills.checked){
          selectedSkills.push(skills.value);
      }
  }
  console.log(selectedSkills);

  if (selectedSkills.length == 0){
     alert("please select the skills");
  }
 else{
  var images = [{imageUrl: "applelogo.jpg", skills:"javascript",companyname:"accenture"}, { imageUrl: "applelogo.jpg",skills:"c++",companyname:"Apple" }, { imageUrl: "oraclelogo.jpg",skills:"c++", companyname:"oracle"}];
  // displaying images 
      //  let filteredMovies = images.filter(obj=>obj.language=="tamil"|| obj.language=='english');
     let filteredJobs = images.filter(obj=> selectedSkills.includes(obj.skills));
  displayJobs(filteredJobs);
 } 


}

