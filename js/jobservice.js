
class jobService {
    static findData(id){
        const url= endpoint+`jobs/${id}`;
        return axios.get(url,{headers:{Authorization:basicAuth}});
    }
}