function appliedSpec() {
           const param = new URLSearchParams(window.location.search.substr(1));
        let Id = param.get("id");
        UserService.findData(Id).then(res => {
            let value = res.data;
            toastr.success("job Applied successfully");
            console.log(value);
            const name = value.companyName;
            const img_url = value.imageUrl;
            const skills = value.skills;
            const appliedJobs=value.appliedJobs;
            let usr=JSON.parse(localStorage.getItem("userObj"));
            console.log(usr._id)
            UserService.getRegisterData(usr._id).then(res=>{
            console.log("yesh",res.data);
            let userObj=res.data;
            // adding datas in array
            let addJobs=userObj.appliedJobs;
            let jobs=addJobs !=null ?addJobs:[];
            let date = new Date().toJSON(); 
            let appliedDate = moment(new Date(date)).format("DD-MM-YYYY");
            console.log(appliedDate);
            jobs.push({companyName:name,skills:skills,appliedDate:appliedDate,status:"Applied"});
            userObj.appliedJobs=jobs
            localStorage.setItem("userObj",JSON.stringify(userObj));
            let updateUserObj=JSON.parse(localStorage.getItem("userObj"))
            console.table(updateUserObj)
            console.log(userObj._rev)
            UserService.updateData(userObj._id,userObj._rev,updateUserObj);
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
    appliedSpec();