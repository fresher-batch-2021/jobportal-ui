$(document).ready(function(){
  $("#registerSkills").submit(employeeDetails);
  });
function employeeDetails() {
  event.preventDefault();  
  const email = $("#email").val();
  const name = $("#name").val();
  const keySkills = $("#keySkills").val();
  const education = $("#education").val();
  const resume = $("#file").val();
  const dateOfBirth =$("#dateOfBirth").val();
  const mobileNo = $("#mobileNo").val();
  if (mobileNo.length != 10) {
    toastr.error('Please enter the 10 digit mobile no');
  }
  else
  {
    let userobj = {
      email: email,
      name: name,
      keySkills: keySkills,
      education: education,
      resume: resume,
      dateOfBirth: dateOfBirth,
      mobileNo: mobileNo,
    };
  console.log(email +" " +name +" " +keySkills +"" +education +"" +dateOfBirth +"" +mobileNo);
 
  console.log(userobj);
  
  jobportalService.employeeData(userobj).then((res) => {
      console.log(res);
      toastr.success("Your Response Saved Successful");
      setTimeout(function () {
      window.location.href='index.html'
        }, 1500);
     
    })
    .catch((err) => {
      console.error(err.response.data);
      toastr.error('Unable to register');
     
    });}
}
function fileUpload() {
  let fileName = "";
  var x = document.getElementById("file");
  var txt = "";
  if ("files" in x) {
    if (x.files.length == 0) {
      txt = "Select one or more files.";
    } else {
      for (var i = 0; i < x.files.length; i++) {
        txt += "<br><strong>" + (i + 1) + ". file</strong><br>";
        var file = x.files[i];
        if ("name" in file) {
          txt += "name: " + file.name + "<br>";
          fileName = file.name;
        }
        if ("size" in file) {
          txt += "size: " + file.size + " bytes <br>";
        }
      }
    }
  } else {
    if (x.value == "") {
      txt += "Select one or more files.";
    } else {
      txt += "The files property is not supported by your browser!";
      txt += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead.
    }
  }
  document.getElementById("file").innerHTML = txt;
  return fileName;
}
function setDate() {
  let today = new Date().toJSON().substr(0, 10);
  document.querySelector("#dateOfBirth").setAttribute("max", today);
}
setDate()