/**
 * This method used to check whether email is already exists in DB
 * 
 * @param {string} email 
 * @returns true/false
 */
 async function isEmailExists(email) {
    const dbUsername = "apikey-v2-a160c2y9h57djbakjap0yesqvh8yvuecd47paczd8l9";
    const dbPassword = "532b6c43f03b7016261e7a66b65a2648";
    const basicAuth = "Basic " + btoa(dbUsername + ":" + dbPassword);
    let endPoint = "https://69ba05e4-6d14-4d5f-8640-ee67170e853f-bluemix.cloudantnosqldb.appdomain.cloud/";

    const myUrl = endPoint + "register/_find";
    let emailObj =
     {
        selector: 
        {
            email: email
        },
        fields: ["email"]
    };

    
    let res = await axios.post(myUrl, emailObj, { headers: { 'Authorization': basicAuth } });
    
    return res.data.docs.length != 0;
}