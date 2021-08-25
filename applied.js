  function productSpec() {
// getting datas from url of the page
    const param = new URLSearchParams(window.location.search.substr(1));
    let Id = param.get("id");

alert(Id);
    UserService.findData(Id).then(res => {
        let value = res.data;
        alert("job Applied successfully")
        console.log(value);
        const name = value.companyname;
        const img_url = value.imageUrl;
        const skills = value.skills;
        const appliedJobs=value.appliedJobs;
        let jobObj={
            companyname:name,
            skills:skills,
            status:"today"
        };
       
        let usr=JSON.parse(localStorage.getItem("userObj"));
        console.log(usr._id)
        alert(usr._id)
        UserService.getRegisterData(usr._id).then(res=>{
        console.log("yesh",res.data);
        let userObj=res.data;
        // adding datas in array
        let addJobs=userObj.appliedJobs;
        // console.table(addJobs)
        let jobs=addJobs !=null ?addJobs:[];
        jobs.push({companyName:name,skills:skills,status:"today"});
        userObj.appliedJobs=jobs
        localStorage.setItem("userObj",JSON.stringify(userObj));
        let updateUserObj=JSON.parse(localStorage.getItem("userObj"))
        console.table(updateUserObj)
        console.log(userObj._rev)
        // let x=userObj._id
        // console.log(x)
        UserService.updateData(userObj._id,userObj._rev,updateUserObj);
        // UserService.
        // const description = value.description;
        let content =
            `<img src="Images/${img_url}" alt="">
        <p>CompanyName:${name}</p>
        <br>
        <p>Skills:${skills}</p>
        <p>Status:Applied</p>

        <br>
        <h5><button><a href="index.html">back</a></button></h5>
         
        `;
        document.querySelector(".company").innerHTML = content;

    }).catch(err => {
        alert("failed on getting data");
        console.log(err.resposnse);
    });

});
          
}
productSpec();