class jobportalService{
    static editService(id){
        const url = endpoint+`jobportal_skills/${id}`;
           return axios.get(url,  {headers:{Authorization:basicAuth}})
    }

    static employeeData(userobj){
        
        const url =endpoint+"jobportal_skills";
        return axios.post(url, userobj,{ headers: { Authorization: basicAuth } })
    }
    static profileDetails(email){
        const url = endpoint+"jobportal_skills/_find";
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