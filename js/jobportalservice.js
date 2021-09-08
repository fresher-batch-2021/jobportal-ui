const dbUserName = "apikey-v2-a160c2y9h57djbakjap0yesqvh8yvuecd47paczd8l9";
const dbPassword = "532b6c43f03b7016261e7a66b65a2648";
const endpoint="https://69ba05e4-6d14-4d5f-8640-ee67170e853f-bluemix.cloudantnosqldb.appdomain.cloud/";
const basicAuth = "Basic " + btoa(dbUserName + ":" + dbPassword);
class jobportalService{
    static editService(id){
        const url = `https://69ba05e4-6d14-4d5f-8640-ee67170e853f-bluemix.cloudantnosqldb.appdomain.cloud/jobportal_skills/${id}`;
           return axios.get(url,  {headers:{Authorization:basicAuth}})
    }

    static employeeData(userobj){
        
        const url ="https://69ba05e4-6d14-4d5f-8640-ee67170e853f-bluemix.cloudantnosqldb.appdomain.cloud/jobportal_skills";
        return axios.post(url, userobj,{ headers: { Authorization: basicAuth } })
    }
    static profileDetails(email){
        const url = "https://69ba05e4-6d14-4d5f-8640-ee67170e853f-bluemix.cloudantnosqldb.appdomain.cloud/jobportal_skills/_find";
        const requestData = {
          selector: {
            email: email
            },
          fields: ["_id", "_rev", "email", "name","mobileNo","education","keySkills"]
        };
        console.log(requestData); 
        return axios.post(url, requestData, {headers: { Authorization: basicAuth },})
    }
}