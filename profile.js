getProfileData();


    function getProfileData(){
        let email=(localStorage.getItem("userEmail"))
        alert(email)
  
        const dbUsername = 'apikey-v2-a160c2y9h57djbakjap0yesqvh8yvuecd47paczd8l9';
        const dbPassword = '532b6c43f03b7016261e7a66b65a2648';
        const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
      
        const url = "https://69ba05e4-6d14-4d5f-8640-ee67170e853f-bluemix.cloudantnosqldb.appdomain.cloud/jobportal_skills/_find";
      
        const requestData = {
          selector: {
            email: email
          },
          fields: ["_id", "_rev", "name", "email","keyskills","education","resume","dateofbirth","mobileno"]
        };
        console.log(requestData); //for our verification
      
         axios.post(url, requestData, {
          headers: { Authorization: basicAuth },
        }).then(res=>{
          console.log(res.data)
          localStorage.setItem("profileData",JSON.stringify(res.data.docs[0]))

            let content="";
          
          let Obj=res.data.docs[0];
    
          // for(let Obj of details){
              content += `<tr>
              <td>${Obj.email}</td> 
              <td>${Obj.name}</td> 
              <td>${Obj.mobileno}</td>       
              <td>${Obj.education}</td>
              
              
             
              `;
              
                     
          // }
          document.querySelector("#list-jobs").innerHTML = content;
      }).catch(err=>{
          console.error(err)
      console.log(content);
        //   
        })
      
      
      }
      