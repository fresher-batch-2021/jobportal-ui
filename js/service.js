class UserService {
  static login(email, password) {
  const url =endpoint+"register/_find"; //registration url
  const requestData = {
  selector: {
        email: email,
        password: password,
  },
      fields: ["_id", "_rev", "name", "email","role","appliedJobs"]
};
console.log(requestData); //for our verification
return axios.post(url, requestData, {headers: { Authorization: basicAuth },
});
}
static updateData(id,rev,obj){
const url=endpoint+`register/${id}?rev=${rev}`;
    return axios.put(url,obj,{headers:{Authorization:basicAuth}});
}

static register(registerObj) {
    const url =endpoint+"register";
    console.log(basicAuth);
    return axios.post(url, registerObj, {headers: { Authorization: basicAuth }
    });
  }
static getRegisterData(id){
    const url=endpoint+'register/'+id;
   return axios.get(url,{headers:{Authorization:basicAuth}});
    }
static getAllData(db){
    alert(db)
     const url=endpoint+db+"/_all_docs?include_docs=true";
     return axios.get(url,{headers:{Authorization:basicAuth}});
}

static getJobs(){
    let allData= this.getAllData("jobs");
   return allData;
   }
static jobService(email){
    const url=endpoint+"register/_find"
    let requestData=
    {
        selector:{
        email:email
        },
    fields:["appliedJobs"]
};
   return axios.post(url,requestData,{ headers: { Authorization: basicAuth } })
}
}