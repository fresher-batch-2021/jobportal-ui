const UserName = "apikey-v2-a160c2y9h57djbakjap0yesqvh8yvuecd47paczd8l9";
const Password = "532b6c43f03b7016261e7a66b65a2648";
const startPoint="https://69ba05e4-6d14-4d5f-8640-ee67170e853f-bluemix.cloudantnosqldb.appdomain.cloud/";
const BasicAuth = "Basic " + btoa(UserName + ":" + Password);
class jobService {
    static findData(id){
        const url=`https://69ba05e4-6d14-4d5f-8640-ee67170e853f-bluemix.cloudantnosqldb.appdomain.cloud/jobs/${id}`;
        return axios.get(url,{headers:{Authorization:BasicAuth}});
    }
}